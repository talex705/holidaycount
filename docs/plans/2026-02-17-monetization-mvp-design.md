# Monetization MVP Design

**Date:** 2026-02-17
**Status:** Approved
**Scope:** Add affiliate deal recommendations to holiday pages via an AI-powered sales agent

## Overview

Transform HolidayCount from a countdown site into a seasonal commerce engine by adding curated deal recommendations to every holiday page. An AI sales agent (powered by Claude API) researches the best deals across 7 affiliate categories, writes structured JSON to the repo on a twice-weekly schedule, and the site renders them as a vertical scroll grid of hybrid deal cards — all fully trilingual (en/fr/es) and SSG-compatible.

## Architecture

**Approach:** Vercel Cron agent with repo-committed JSON (Approach A).

The agent runs as a Vercel Cron Function twice weekly. It calls Claude API to research deals via web search, scraping, and LLM reasoning, then commits structured JSON files to `data/deals/` via the GitHub API. Vercel auto-redeploys with fresh data. Pages serve deals statically — no runtime fetching, no database.

```
Vercel Cron (2x/week)
  → Claude API (research 7 categories per holiday)
  → Validate against schema
  → Commit JSON to repo via GitHub API
  → Vercel auto-redeploys
  → Holiday pages render deals statically (SSG)
  → User clicks → lib/affiliate.ts transforms URL → merchant
```

## Data Model

### File Structure

```
data/deals/
  categories.ts          # Static category definitions (trilingual)
  index.ts               # Aggregator + lookup functions
  us_christmas.json      # Agent-generated deal files
  us_thanksgiving.json
  ca_canada-day.json
  ...
```

### Deal File Schema

```typescript
interface DealFile {
  holidayId: string;           // e.g., "us_christmas"
  lastUpdated: string;         // ISO timestamp
  categories: DealCategory[];
}

interface DealCategory {
  id: string;                  // "gifts" | "travel" | "experiences" | "food" | "decor" | "apparel" | "digital"
  name: Record<Locale, string>;
  deals: Deal[];               // Top 10
}

interface Deal {
  rank: number;                // 1-10
  title: Record<Locale, string>;
  editorial: Record<Locale, string>;  // Why this was picked
  imageUrl: string;
  price?: string;              // "$49.99" or "From $25"
  merchant: string;
  merchantUrl: string;         // Raw URL (affiliate link appended at render time)
  affiliateUrl?: string;       // Full affiliate link (when network account exists)
  category: string;
  tags: string[];              // e.g., ["under-50", "for-kids", "last-minute"]
}
```

### Category Definitions

7 categories, defined in `data/deals/categories.ts`:

| ID | English | French | Spanish |
|----|---------|--------|---------|
| gifts | Gifts | Cadeaux | Regalos |
| travel | Travel | Voyages | Viajes |
| experiences | Experiences | Expériences | Experiencias |
| food | Food & Dining | Gastronomie | Gastronomía |
| decor | Décor | Décoration | Decoración |
| apparel | Apparel | Mode | Moda |
| digital | Digital Products | Produits numériques | Productos digitales |

## Sales Agent Architecture

### Cron Configuration

Runs Monday and Thursday at 8 AM UTC via `vercel.json`:

```json
{
  "crons": [
    {
      "path": "/api/cron/refresh-deals",
      "schedule": "0 8 * * 1,4"
    }
  ]
}
```

### Agent Pipeline

Route handler: `app/api/cron/refresh-deals/route.ts`

1. **Identify target holidays** — query holiday data for holidays within next 60 days, sorted by proximity
2. **Pick next holiday** — select the upcoming holiday that hasn't been refreshed in the last 3 days
3. **Call Claude API** — single structured prompt requesting top 10 deals per category, trilingual, with real merchant URLs
4. **Validate response** — check against DealFile schema before writing
5. **Commit JSON** — write deal file to repo via GitHub API, triggering Vercel redeploy

### Timeout Mitigation

One holiday per invocation. Vercel Cron has a 60s timeout (Hobby) / 300s (Pro). A single Claude API call for one holiday across 7 categories fits within this. Each cron trigger refreshes the most urgent holiday. On Pro, can batch 5-8 holidays per run.

### Data Collection Methods

The agent uses three approaches combined:
1. **Web scraping** — finds real product URLs and current prices
2. **LLM research** — Claude's knowledge of reputable merchants and seasonal deals
3. **Affiliate product feeds** — when network accounts are established, structured feed data supplements the agent's research

### Environment Variables

| Variable | Purpose |
|----------|---------|
| `ANTHROPIC_API_KEY` | Claude API for deal research |
| `GITHUB_TOKEN` | Personal access token for committing deal JSON |
| `CRON_SECRET` | Auto-injected by Vercel for cron auth |
| `AMAZON_ASSOCIATE_TAG` | Optional — added when approved |
| `IMPACT_ACCOUNT_ID` | Optional — added when approved |

### Cost Estimate

- ~1 Claude API call per run, ~2k input / ~4k output tokens
- ~$0.03-0.08 per run at Sonnet pricing
- Twice weekly = ~$0.25-0.65/month

## Affiliate Link Service

`lib/affiliate.ts` transforms raw merchant URLs into tracked affiliate links at render time.

### How It Works

```typescript
interface AffiliateConfig {
  amazon?: { tag: string };
  impact?: { accountId: string };
  cj?: { publisherId: string };
}

function toAffiliateLink(merchantUrl: string, config: AffiliateConfig): string
```

- Amazon URL + `AMAZON_ASSOCIATE_TAG` → appends `?tag=your-id`
- Impact merchant URL → wraps with Impact tracking URL
- Unknown merchant → passes through unmodified (no commission, still useful)

### Progressive Monetization

- **Day 1 (no accounts):** All links go to merchants directly. Site works, users get value.
- **Day 30 (Amazon approved):** Add one env var, redeploy. Every Amazon link monetized.
- **Day 60 (Impact approved):** Add env var. Travel/experience merchants monetized.

### Tracking SubIDs

Each affiliate link includes attribution parameters:
- `holiday_id` — which holiday drove the click
- `category` — which category (gifts, travel, etc.)
- `rank` — position in the Top 10
- `locale` — user's language

## UI Components

### Holiday Picker (Nav)

`components/HolidayPicker.tsx`

A "Deals" nav item alongside existing country links. Opens a dropdown showing the next 5-8 upcoming holidays (across all countries), ordered by date. Each entry: holiday icon, name, country flag, days until. Clicking navigates to that holiday's page (page navigation).

Uses existing `getUpcomingHolidays()` function. Styled consistently with existing nav.

### Deal Card

`components/DealCard.tsx`

Hybrid card format:
- Product image (16:9, gradient placeholder fallback)
- Editorial blurb — 1-2 sentences from agent (trilingual)
- Title (trilingual)
- Price — prominent, "From $X" for ranges
- Merchant name — small text
- CTA button — "View Deal" / "Voir l'offre" / "Ver oferta"
- Category tag pill

Responsive: 1 col mobile, 2 col tablet, 3 col desktop. Tailwind grid consistent with existing HolidayCard styling.

### Deals Section

`components/DealsSection.tsx`

Positioned below countdown, above main content on holiday pages:
- Section header: "Top Deals for {Holiday Name}" (trilingual)
- Category tabs: horizontal pills for 7 categories + "All" tab (mixed top 2-3 from each)
- Vertical scroll grid of DealCard components
- FTC disclosure text directly above the grid
- Empty state: section doesn't render when no deals exist

### FTC Disclosure

Two placements per FTC best practice:
1. **Inline** — directly above deals grid: "We may earn a commission from purchases made through links on this page. This doesn't affect our recommendations or the price you pay." (trilingual)
2. **Full disclosure page** — `/affiliate-disclosure` (trilingual), linked from footer

## Page Integration

### Holiday Detail Page Changes

`lib/pages/holiday-detail.tsx`:
1. Import `getDealsByHoliday()` from deals data layer
2. Look up deals for current holiday
3. Transform merchant URLs via `lib/affiliate.ts`
4. Pass deals as prop to HolidayPage component

`components/HolidayPage.tsx`:
- Accept optional `deals` prop
- Render `<DealsSection>` between calendar and main content sections

### Layout Changes

`app/(en)/layout.tsx` and `app/[locale]/layout.tsx`:
- Add "Deals" nav item with HolidayPicker dropdown
- Add "Affiliate Disclosure" link to footer legal links

### Static Generation

Deals loaded at build time (SSG). No client-side fetching, no loading spinners, no layout shift. SEO crawlers see full deal content. When cron commits new JSON, Vercel redeploys with fresh data.

## Internationalization

### Agent Output

Claude API prompt requests all text fields in all 3 locales simultaneously. `Deal.title` and `Deal.editorial` are `Record<Locale, string>` — same pattern as holiday data.

### Currency

Prices displayed in local currency of the holiday's country. A `countryCurrency` map in `lib/formatting.ts` handles this (USD for US, CAD for Canada, EUR for France, etc.).

### i18n Dictionary Additions

FTC disclosure strings, category labels, and UI strings added to `lib/i18n/en.ts`, `fr.ts`, `es.ts`.

## Error Handling

### Agent Failures

| Failure | Handling |
|---------|----------|
| Claude API timeout/error | Return early, existing deal files remain — stale > none |
| Malformed JSON response | Validate against schema, skip holiday, retry next run |
| GitHub API commit fails | Retry once, then return — deals stay at previous version |
| No deals found for a category | Empty array — UI hides that category tab |

### Rendering Edge Cases

| Scenario | Behavior |
|----------|----------|
| No deal file for holiday | DealsSection doesn't render |
| All categories empty | DealsSection doesn't render |
| Only some categories have deals | Only those tabs appear |
| Fewer than 10 deals in category | Show however many exist |
| Broken image URL | CSS gradient placeholder with category icon |
| Dead merchant URL | Agent validates during research; between runs, goes to merchant 404 |

### Affiliate Link Edge Cases

| Scenario | Behavior |
|----------|----------|
| No affiliate env vars set | Links pass through as raw merchant URLs |
| Amazon tag set but URL isn't Amazon | Link unmodified |
| URL has existing query params | Tag appended with `&` not `?` |

## New Files

| File | Purpose |
|------|---------|
| `data/deals/categories.ts` | Static category definitions (7 categories, trilingual) |
| `data/deals/index.ts` | Deal data aggregator + lookup functions |
| `data/deals/*.json` | Agent-generated deal files (one per holiday) |
| `lib/affiliate.ts` | Link service — merchant URL → affiliate link |
| `components/DealCard.tsx` | Hybrid deal card component |
| `components/DealsSection.tsx` | Category tabs + grid + FTC disclosure |
| `components/HolidayPicker.tsx` | Nav dropdown for upcoming holidays |
| `app/api/cron/refresh-deals/route.ts` | Cron handler — agent orchestration |
| `app/(en)/affiliate-disclosure/page.tsx` | Full FTC disclosure page (English) |
| `app/[locale]/affiliate-disclosure/page.tsx` | Full FTC disclosure page (FR/ES) |
| `vercel.json` | Cron configuration |

## Modified Files

| File | Change |
|------|--------|
| `app/(en)/layout.tsx` | Add "Deals" nav + HolidayPicker, footer disclosure link |
| `app/[locale]/layout.tsx` | Same nav changes for FR/ES |
| `lib/pages/holiday-detail.tsx` | Load deals, pass to page component |
| `components/HolidayPage.tsx` | Accept + render DealsSection |
| `lib/i18n/en.ts` | Disclosure strings, category labels, UI strings |
| `lib/i18n/fr.ts` | Same in French |
| `lib/i18n/es.ts` | Same in Spanish |
| `lib/formatting.ts` | Add `countryCurrency` map |
| `package.json` | Add `@anthropic-ai/sdk` dependency |

## What Does NOT Change

- Holiday data files (`data/holidays/*.ts`)
- CountdownTimer, AddToCalendar components
- Middleware, routing, URL builders
- Country definitions, type definitions
- Existing page styling and layout structure
