import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { getUpcomingHolidays } from '@/data/holidays';
import { getCountryByCode } from '@/data/countries';
import { DEAL_CATEGORIES } from '@/data/deals/categories';
import type { DealFile } from '@/lib/deals/types';

export const runtime = 'nodejs';
export const maxDuration = 60; // seconds

export async function GET(request: NextRequest) {
  // Verify cron secret
  const authHeader = request.headers.get('authorization');
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  const githubToken = process.env.GITHUB_TOKEN;
  const githubRepo = process.env.GITHUB_REPO || 'talex705/holidaycount';

  if (!apiKey || !githubToken) {
    return NextResponse.json({ error: 'Missing ANTHROPIC_API_KEY or GITHUB_TOKEN' }, { status: 500 });
  }

  // Find the next holiday that needs a refresh
  const upcoming = getUpcomingHolidays(20);
  let targetHoliday = null;
  let targetCountry = null;

  for (const item of upcoming) {
    const country = getCountryByCode(item.holiday.countryCode);
    if (!country) continue;

    // Check if deal file was recently updated (within 3 days)
    const filePath = `data/deals/${item.holiday.id}.json`;
    const isRecent = await checkFileRecency(githubToken, githubRepo, filePath, 3);
    if (!isRecent) {
      targetHoliday = item;
      targetCountry = country;
      break;
    }
  }

  if (!targetHoliday || !targetCountry) {
    return NextResponse.json({ message: 'All upcoming holidays are fresh' });
  }

  // Call Claude API to research deals
  const anthropic = new Anthropic({ apiKey });
  const categoryList = DEAL_CATEGORIES.map((c) => `${c.id}: ${c.name.en}`).join(', ');

  const prompt = `Research 2 deals per category for "${targetHoliday.holiday.names.en}" in ${targetCountry.names.en}. Categories: ${categoryList}

Return ONLY valid JSON (no markdown, no code blocks, no explanation). Use this exact structure:
{"holidayId":"${targetHoliday.holiday.id}","lastUpdated":"${new Date().toISOString()}","categories":[{"id":"gifts","name":{"en":"Gifts","fr":"Cadeaux","es":"Regalos"},"deals":[{"rank":1,"title":{"en":"...","fr":"...","es":"..."},"editorial":{"en":"...","fr":"...","es":"..."},"imageUrl":"","price":"$49.99","merchant":"Amazon","merchantUrl":"https://amazon.com/example","category":"gifts","tags":["under-50"]}]}]}

Rules:
- 2 deals per category, 7 categories total
- All text fields must have en, fr, es translations
- Use real merchant names and realistic prices
- merchantUrl must be a valid URL
- Keep editorial to 1 short sentence per language
- Escape special characters in JSON strings properly
- Do NOT wrap in markdown code blocks`;

  try {
    const response = await anthropic.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 8000,
      messages: [{ role: 'user', content: prompt }],
    });

    const text = response.content[0].type === 'text' ? response.content[0].text : '';

    // Extract JSON from response — strip markdown code blocks if present
    let jsonStr = text.trim();
    if (jsonStr.startsWith('```')) {
      jsonStr = jsonStr.replace(/^```(?:json)?\s*/, '').replace(/\s*```$/, '');
    }
    // Find the outermost JSON object
    const start = jsonStr.indexOf('{');
    const end = jsonStr.lastIndexOf('}');
    if (start === -1 || end === -1) {
      return NextResponse.json({ error: 'No valid JSON in response', preview: text.substring(0, 200) }, { status: 500 });
    }
    jsonStr = jsonStr.substring(start, end + 1);

    let dealFile: DealFile;
    try {
      dealFile = JSON.parse(jsonStr);
    } catch (parseErr) {
      return NextResponse.json({
        error: 'JSON parse failed',
        detail: parseErr instanceof Error ? parseErr.message : String(parseErr),
        preview: jsonStr.substring(0, 300),
      }, { status: 500 });
    }

    // Validate structure
    if (!dealFile.holidayId || !dealFile.categories || !Array.isArray(dealFile.categories)) {
      return NextResponse.json({ error: 'Invalid deal file structure' }, { status: 500 });
    }

    // Commit to GitHub
    const filePath = `data/deals/${dealFile.holidayId}.json`;
    const content = JSON.stringify(dealFile, null, 2);
    await commitToGithub(githubToken, githubRepo, filePath, content, `chore: refresh deals for ${targetHoliday.holiday.names.en}`);

    return NextResponse.json({
      message: `Refreshed deals for ${targetHoliday.holiday.names.en}`,
      holidayId: dealFile.holidayId,
      categories: dealFile.categories.length,
      totalDeals: dealFile.categories.reduce((sum, c) => sum + c.deals.length, 0),
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Agent error:', message);
    return NextResponse.json({ error: 'Agent execution failed', detail: message }, { status: 500 });
  }
}

// ---------------------------------------------------------------------------
// GitHub helpers
// ---------------------------------------------------------------------------

async function checkFileRecency(token: string, repo: string, filePath: string, maxAgeDays: number): Promise<boolean> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/commits?path=${filePath}&per_page=1`, {
      headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json' },
    });
    if (!res.ok) return false;
    const commits = await res.json();
    if (!commits.length) return false;
    const lastCommitDate = new Date(commits[0].commit.committer.date);
    const ageMs = Date.now() - lastCommitDate.getTime();
    return ageMs < maxAgeDays * 24 * 60 * 60 * 1000;
  } catch {
    return false;
  }
}

async function commitToGithub(token: string, repo: string, filePath: string, content: string, message: string) {
  const branch = 'master';

  // Get current file SHA (if exists)
  let sha: string | undefined;
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/contents/${filePath}?ref=${branch}`, {
      headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github.v3+json' },
    });
    if (res.ok) {
      const data = await res.json();
      sha = data.sha;
    }
  } catch {
    // File doesn't exist yet, that's fine
  }

  // Create or update file
  const body: Record<string, string> = {
    message,
    content: Buffer.from(content).toString('base64'),
    branch,
  };
  if (sha) body.sha = sha;

  const res = await fetch(`https://api.github.com/repos/${repo}/contents/${filePath}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`GitHub commit failed: ${res.status} ${errorText}`);
  }
}
