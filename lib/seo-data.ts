/**
 * HolidayCount — SEO Metadata & Navigation
 *
 * Centralized SEO data for every page: titles, descriptions, canonical paths,
 * keywords, and navigation structure.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface PageSEO {
  title: string;
  description: string;
  canonical: string;
  keywords: string[];
  h1: string;
  ogImage?: string;
}

// ---------------------------------------------------------------------------
// Site-wide constants
// ---------------------------------------------------------------------------

export const SITE_NAME = 'HolidayCount';

export const SITE_DESCRIPTION =
  'Countdown to every holiday. Live countdown timers for Christmas, Thanksgiving, Easter, Canada Day, Independence Day, and more. US & Canadian holidays.';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://holidaycount.com';

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const NAV_ITEMS = [
  { label: 'Christmas', href: '/christmas' },
  { label: 'Thanksgiving', href: '/thanksgiving' },
  { label: 'Easter', href: '/easter' },
  { label: 'Canada Day', href: '/canada-day' },
  { label: '4th of July', href: '/independence-day' },
] as const;

// ---------------------------------------------------------------------------
// Per-page SEO data
// ---------------------------------------------------------------------------

export const PAGE_SEO: Record<string, PageSEO> = {
  landing: {
    title: 'Holiday Countdown — Days Until Every Holiday',
    description:
      'Live countdown timers for every US and Canadian holiday. See how many days until Christmas, Thanksgiving, Easter, and more.',
    canonical: '/',
    keywords: [
      'holiday countdown',
      'upcoming holidays',
      'days until Christmas',
      'days until Thanksgiving',
      'when is Easter',
      'holiday calendar',
      'US holidays',
      'Canadian holidays',
    ],
    h1: 'Holiday Countdown',
    ogImage: '/og/landing.png',
  },

  christmas: {
    title: 'Christmas Countdown — Days Until December 25',
    description:
      'How many days until Christmas? Live countdown timer, traditions, fun facts, and planning tips for December 25.',
    canonical: '/christmas',
    keywords: [
      'when is Christmas',
      'days until Christmas',
      'Christmas countdown',
      'Christmas date',
      'Christmas traditions',
      'how many days until Christmas',
    ],
    h1: 'Christmas Countdown',
    ogImage: '/og/christmas.png',
  },

  thanksgiving: {
    title: 'Thanksgiving Countdown — US & Canadian Dates',
    description:
      'When is Thanksgiving? Live countdowns for both US and Canadian Thanksgiving with dates, traditions, and planning tips.',
    canonical: '/thanksgiving',
    keywords: [
      'when is Thanksgiving',
      'Thanksgiving date',
      'days until Thanksgiving',
      'US Thanksgiving vs Canadian Thanksgiving',
      'Thanksgiving countdown',
      'Canadian Thanksgiving',
    ],
    h1: 'Thanksgiving Countdown',
    ogImage: '/og/thanksgiving.png',
  },

  easter: {
    title: 'Easter Countdown — Date & Celebration Guide',
    description:
      'When is Easter? Live countdown timer, why Easter changes dates, traditions, and celebration guide for the US and Canada.',
    canonical: '/easter',
    keywords: [
      'when is Easter',
      'Easter date',
      'Easter countdown',
      'why does Easter change dates',
      'Easter traditions',
      'how many days until Easter',
    ],
    h1: 'Easter Countdown',
    ogImage: '/og/easter.png',
  },

  'canada-day': {
    title: 'Canada Day Countdown — July 1 Celebration Guide',
    description:
      'How many days until Canada Day? Live countdown to July 1, plus history, traditions, fireworks info, and celebration guide.',
    canonical: '/canada-day',
    keywords: [
      'Canada Day',
      'when is Canada Day',
      'July 1 holiday',
      'Canada Day countdown',
      'Canada Day fireworks',
      'Canada Day celebrations',
    ],
    h1: 'Canada Day Countdown',
    ogImage: '/og/canada-day.png',
  },

  'independence-day': {
    title: '4th of July Countdown — Independence Day Guide',
    description:
      'How many days until the 4th of July? Live countdown to Independence Day, plus history, traditions, fireworks info, and celebration guide.',
    canonical: '/independence-day',
    keywords: [
      '4th of July',
      'Independence Day date',
      'July 4th countdown',
      'when is 4th of July',
      'Independence Day traditions',
      '4th of July fireworks',
    ],
    h1: '4th of July Countdown',
    ogImage: '/og/independence-day.png',
  },
};
