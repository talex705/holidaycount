/**
 * Affiliate link service — transforms raw merchant URLs into tracked affiliate links.
 * Network credentials are loaded from environment variables.
 * When no credentials are set, links pass through unmodified.
 */

interface AffiliateConfig {
  amazonTag?: string;
  impactAccountId?: string;
}

function getConfig(): AffiliateConfig {
  return {
    amazonTag: process.env.AMAZON_ASSOCIATE_TAG || undefined,
    impactAccountId: process.env.IMPACT_ACCOUNT_ID || undefined,
  };
}

function isAmazonUrl(url: string): boolean {
  try {
    const hostname = new URL(url).hostname;
    return hostname.includes('amazon.com') || hostname.includes('amazon.ca') || hostname.includes('amazon.co.uk')
      || hostname.includes('amazon.fr') || hostname.includes('amazon.es') || hostname.includes('amazon.de');
  } catch {
    return false;
  }
}

function appendAmazonTag(url: string, tag: string): string {
  try {
    const u = new URL(url);
    u.searchParams.set('tag', tag);
    return u.toString();
  } catch {
    return url;
  }
}

export interface AffiliateTrackingParams {
  holidayId: string;
  category: string;
  rank: number;
  locale: string;
}

export function toAffiliateLink(
  merchantUrl: string,
  tracking?: AffiliateTrackingParams
): string {
  const config = getConfig();

  let url = merchantUrl;

  // Amazon Associates
  if (isAmazonUrl(url) && config.amazonTag) {
    url = appendAmazonTag(url, config.amazonTag);
  }

  // Append tracking subIDs if provided
  if (tracking) {
    try {
      const u = new URL(url);
      u.searchParams.set('ref', 'holidaycount');
      u.searchParams.set('hc_holiday', tracking.holidayId);
      u.searchParams.set('hc_cat', tracking.category);
      u.searchParams.set('hc_rank', String(tracking.rank));
      u.searchParams.set('hc_locale', tracking.locale);
      return u.toString();
    } catch {
      return url;
    }
  }

  return url;
}
