# Monetization MVP Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add AI-powered affiliate deal recommendations to holiday pages via a Vercel Cron sales agent, with FTC-compliant disclosures and a network-agnostic affiliate link service.

**Architecture:** Vercel Cron Function calls Claude API to research deals, writes JSON to `data/deals/`, Next.js reads at build time (SSG). Affiliate link service transforms merchant URLs at render time based on env vars. UI components: HolidayPicker nav dropdown, DealCard, DealsSection with category tabs.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS, Claude API (`@anthropic-ai/sdk`), GitHub API, Vercel Cron

---

## Reference: Existing Patterns

**i18n dictionary pattern** (`lib/i18n/en.ts`):
```typescript
const en = {
  'key.name': 'English string',
};
```
All 3 locale files (en, fr, es) must have identical keys. The `Dictionary` type is derived from en.ts.

**Static page pattern** (`app/(en)/about/page.tsx`):
```typescript
import type { Metadata } from 'next';
export const metadata: Metadata = { title: '...', description: '...' };
export default function Page() { return <article>...</article>; }
```

**Component pattern**: Client components use `'use client'` directive. All locale-dependent text uses `Record<Locale, string>`.

---

## Task 1: Types & Category Definitions

**Files:**
- Create: `lib/deals/types.ts`
- Create: `data/deals/categories.ts`

**Step 1: Create deal types**

Create `lib/deals/types.ts`:

```typescript
import type { Locale } from '@/lib/types';

export interface Deal {
  rank: number;
  title: Record<Locale, string>;
  editorial: Record<Locale, string>;
  imageUrl: string;
  price?: string;
  merchant: string;
  merchantUrl: string;
  affiliateUrl?: string;
  category: string;
  tags: string[];
}

export interface DealCategory {
  id: string;
  name: Record<Locale, string>;
  deals: Deal[];
}

export interface DealFile {
  holidayId: string;
  lastUpdated: string;
  categories: DealCategory[];
}

export type DealCategoryId = 'gifts' | 'travel' | 'experiences' | 'food' | 'decor' | 'apparel' | 'digital';
```

**Step 2: Create category definitions**

Create `data/deals/categories.ts`:

```typescript
import type { Locale } from '@/lib/types';
import type { DealCategoryId } from '@/lib/deals/types';

export interface CategoryDefinition {
  id: DealCategoryId;
  name: Record<Locale, string>;
  icon: string;
}

export const DEAL_CATEGORIES: CategoryDefinition[] = [
  { id: 'gifts',       icon: '🎁', name: { en: 'Gifts',            fr: 'Cadeaux',              es: 'Regalos' } },
  { id: 'travel',      icon: '✈️', name: { en: 'Travel',           fr: 'Voyages',              es: 'Viajes' } },
  { id: 'experiences', icon: '🎭', name: { en: 'Experiences',      fr: 'Expériences',          es: 'Experiencias' } },
  { id: 'food',        icon: '🍽️', name: { en: 'Food & Dining',    fr: 'Gastronomie',          es: 'Gastronomía' } },
  { id: 'decor',       icon: '🏠', name: { en: 'Décor',            fr: 'Décoration',           es: 'Decoración' } },
  { id: 'apparel',     icon: '👗', name: { en: 'Apparel',          fr: 'Mode',                 es: 'Moda' } },
  { id: 'digital',     icon: '💻', name: { en: 'Digital Products', fr: 'Produits numériques',  es: 'Productos digitales' } },
];

export function getCategoryById(id: string): CategoryDefinition | undefined {
  return DEAL_CATEGORIES.find((c) => c.id === id);
}
```

**Step 3: Verify compilation**

Run: `cd C:/Users/andre/desktop/holidaycount && npx tsc --noEmit`
Expected: 0 errors

**Step 4: Commit**

```bash
git add lib/deals/types.ts data/deals/categories.ts
git commit -m "feat: add deal types and category definitions"
```

---

## Task 2: Deal Data Aggregator

**Files:**
- Create: `data/deals/index.ts`

**Step 1: Create the aggregator**

Create `data/deals/index.ts`:

```typescript
/**
 * Deal data aggregator — loads JSON deal files and provides lookup functions.
 */

import type { DealFile } from '@/lib/deals/types';
import * as fs from 'fs';
import * as path from 'path';

// ---------------------------------------------------------------------------
// Load all deal JSON files at import time (build time for SSG)
// ---------------------------------------------------------------------------

const DEALS_DIR = path.join(process.cwd(), 'data', 'deals');

function loadDealFiles(): DealFile[] {
  if (!fs.existsSync(DEALS_DIR)) return [];

  const files = fs.readdirSync(DEALS_DIR).filter((f) => f.endsWith('.json'));
  const deals: DealFile[] = [];

  for (const file of files) {
    try {
      const content = fs.readFileSync(path.join(DEALS_DIR, file), 'utf-8');
      const parsed: DealFile = JSON.parse(content);
      deals.push(parsed);
    } catch {
      // Skip malformed files
    }
  }

  return deals;
}

const ALL_DEALS = loadDealFiles();

// ---------------------------------------------------------------------------
// Lookup functions
// ---------------------------------------------------------------------------

export function getDealsByHoliday(holidayId: string): DealFile | null {
  return ALL_DEALS.find((d) => d.holidayId === holidayId) ?? null;
}

export function getAllDealFiles(): DealFile[] {
  return ALL_DEALS;
}

export function getDealsForUpcomingHolidays(holidayIds: string[]): DealFile[] {
  return holidayIds
    .map((id) => getDealsByHoliday(id))
    .filter((d): d is DealFile => d !== null);
}
```

**Step 2: Verify compilation**

Run: `cd C:/Users/andre/desktop/holidaycount && npx tsc --noEmit`
Expected: 0 errors

**Step 3: Commit**

```bash
git add data/deals/index.ts
git commit -m "feat: add deal data aggregator with JSON file loading"
```

---

## Task 3: Affiliate Link Service

**Files:**
- Create: `lib/affiliate.ts`
- Modify: `lib/formatting.ts` (add `countryCurrency` map)

**Step 1: Create the affiliate link service**

Create `lib/affiliate.ts`:

```typescript
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
```

**Step 2: Add currency map to formatting.ts**

Add to the end of `lib/formatting.ts`:

```typescript
/** Map country codes to their primary currency symbol */
const COUNTRY_CURRENCIES: Record<string, string> = {
  us: 'USD', ca: 'CAD', gb: 'GBP', ie: 'EUR', au: 'AUD', nz: 'NZD',
  za: 'ZAR', jm: 'JMD', tt: 'TTD', bb: 'BBD', bs: 'BSD', ng: 'NGN',
  gh: 'GHS', ke: 'KES', ug: 'UGX', in: 'INR', fr: 'EUR', be: 'EUR',
  ch: 'CHF', es: 'EUR', mx: 'MXN', gt: 'GTQ', hn: 'HNL', sv: 'USD',
  ni: 'NIO', cr: 'CRC', pa: 'USD', ht: 'HTG', cu: 'CUP', do: 'DOP',
  pr: 'USD', ar: 'ARS', co: 'COP', pe: 'PEN', cl: 'CLP', ve: 'VES',
  ec: 'USD', bo: 'BOB', py: 'PYG', uy: 'UYU', sn: 'XOF', ci: 'XOF',
  cm: 'XAF', cd: 'CDF', mg: 'MGA',
};

export function getCurrencyForCountry(countryCode: string): string {
  return COUNTRY_CURRENCIES[countryCode] || 'USD';
}
```

**Step 3: Verify compilation**

Run: `cd C:/Users/andre/desktop/holidaycount && npx tsc --noEmit`
Expected: 0 errors

**Step 4: Commit**

```bash
git add lib/affiliate.ts lib/formatting.ts
git commit -m "feat: add affiliate link service and country currency map"
```

---

## Task 4: i18n Dictionary Updates

**Files:**
- Modify: `lib/i18n/en.ts`
- Modify: `lib/i18n/fr.ts`
- Modify: `lib/i18n/es.ts`

**Step 1: Add deal-related strings to all 3 dictionaries**

Add the following keys to `en.ts` (before the closing `};`):

```typescript
  // Deals
  'deals.navLabel': 'Deals',
  'deals.sectionTitle': 'Top Deals for {holiday}',
  'deals.viewDeal': 'View Deal',
  'deals.allCategories': 'All',
  'deals.comingSoon': 'Deal recommendations coming soon.',
  'deals.daysUntil': '{days}d',
  'deals.disclosure': 'We may earn a commission from purchases made through links on this page. This doesn\'t affect our recommendations or the price you pay.',
  'deals.disclosurePageTitle': 'Affiliate Disclosure',
  'deals.disclosurePageDescription': 'Learn about how HolidayCount earns revenue through affiliate partnerships.',

  // Affiliate Disclosure page
  'nav.affiliateDisclosure': 'Affiliate Disclosure',
```

Add equivalent French keys to `fr.ts`:

```typescript
  // Deals
  'deals.navLabel': 'Offres',
  'deals.sectionTitle': 'Meilleures offres pour {holiday}',
  'deals.viewDeal': 'Voir l\'offre',
  'deals.allCategories': 'Toutes',
  'deals.comingSoon': 'Recommandations à venir.',
  'deals.daysUntil': '{days}j',
  'deals.disclosure': 'Nous pouvons percevoir une commission sur les achats effectués via les liens de cette page. Cela n\'affecte ni nos recommandations ni le prix que vous payez.',
  'deals.disclosurePageTitle': 'Divulgation d\'affiliation',
  'deals.disclosurePageDescription': 'Découvrez comment HolidayCount génère des revenus grâce à des partenariats d\'affiliation.',

  // Affiliate Disclosure page
  'nav.affiliateDisclosure': 'Divulgation d\'affiliation',
```

Add equivalent Spanish keys to `es.ts`:

```typescript
  // Deals
  'deals.navLabel': 'Ofertas',
  'deals.sectionTitle': 'Mejores ofertas para {holiday}',
  'deals.viewDeal': 'Ver oferta',
  'deals.allCategories': 'Todas',
  'deals.comingSoon': 'Recomendaciones próximamente.',
  'deals.daysUntil': '{days}d',
  'deals.disclosure': 'Podemos recibir una comisión por compras realizadas a través de los enlaces de esta página. Esto no afecta nuestras recomendaciones ni el precio que pagas.',
  'deals.disclosurePageTitle': 'Divulgación de afiliados',
  'deals.disclosurePageDescription': 'Conoce cómo HolidayCount genera ingresos a través de asociaciones de afiliados.',

  // Affiliate Disclosure page
  'nav.affiliateDisclosure': 'Divulgación de afiliados',
```

**Step 2: Verify compilation**

Run: `cd C:/Users/andre/desktop/holidaycount && npx tsc --noEmit`
Expected: 0 errors

**Step 3: Commit**

```bash
git add lib/i18n/en.ts lib/i18n/fr.ts lib/i18n/es.ts
git commit -m "feat: add deal and disclosure i18n strings for all 3 locales"
```

---

## Task 5: DealCard Component

**Files:**
- Create: `components/DealCard.tsx`

**Step 1: Create the DealCard component**

Create `components/DealCard.tsx`:

```typescript
'use client';

import type { Locale } from '@/lib/types';
import type { Deal } from '@/lib/deals/types';
import { toAffiliateLink } from '@/lib/affiliate';
import { getDictionary, t } from '@/lib/i18n';
import { getCategoryById } from '@/data/deals/categories';

interface DealCardProps {
  deal: Deal;
  holidayId: string;
  locale: Locale;
}

export default function DealCard({ deal, holidayId, locale }: DealCardProps) {
  const dict = getDictionary(locale);
  const category = getCategoryById(deal.category);
  const affiliateUrl = toAffiliateLink(deal.merchantUrl, {
    holidayId,
    category: deal.category,
    rank: deal.rank,
    locale,
  });

  return (
    <div className="group rounded-xl border border-gray-200 bg-white overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-primary-200">
      {/* Image */}
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        {deal.imageUrl ? (
          <img
            src={deal.imageUrl}
            alt={deal.title[locale]}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">
            {category?.icon || '🛍️'}
          </div>
        )}
        {/* Category tag */}
        {category && (
          <span className="absolute top-2 left-2 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-md text-xs font-medium text-gray-700">
            {category.icon} {category.name[locale]}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-900 line-clamp-2">
          {deal.title[locale]}
        </h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">
          {deal.editorial[locale]}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <div>
            {deal.price && (
              <span className="text-lg font-bold text-gray-900">{deal.price}</span>
            )}
            <p className="text-xs text-gray-500">{deal.merchant}</p>
          </div>
        </div>

        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-3 block w-full text-center px-4 py-2.5 min-h-[44px] bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          {t(dict, 'deals.viewDeal')}
        </a>
      </div>
    </div>
  );
}
```

**Step 2: Verify compilation**

Run: `cd C:/Users/andre/desktop/holidaycount && npx tsc --noEmit`
Expected: 0 errors

**Step 3: Commit**

```bash
git add components/DealCard.tsx
git commit -m "feat: add DealCard component with affiliate link integration"
```

---

## Task 6: DealsSection Component

**Files:**
- Create: `components/DealsSection.tsx`

**Step 1: Create the DealsSection component**

Create `components/DealsSection.tsx`:

```typescript
'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/types';
import type { DealFile } from '@/lib/deals/types';
import { DEAL_CATEGORIES } from '@/data/deals/categories';
import { getDictionary, t } from '@/lib/i18n';
import DealCard from './DealCard';

interface DealsSectionProps {
  dealFile: DealFile;
  holidayName: string;
  locale: Locale;
}

export default function DealsSection({ dealFile, holidayName, locale }: DealsSectionProps) {
  const dict = getDictionary(locale);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Only show categories that have deals
  const categoriesWithDeals = dealFile.categories.filter((c) => c.deals.length > 0);

  if (categoriesWithDeals.length === 0) return null;

  // Build the "All" mix: top 2-3 from each category
  const allDeals = categoriesWithDeals.flatMap((c) => c.deals.slice(0, 3));

  const visibleDeals = activeCategory === 'all'
    ? allDeals
    : categoriesWithDeals.find((c) => c.id === activeCategory)?.deals ?? [];

  return (
    <section className="mb-8">
      {/* FTC Disclosure */}
      <p className="text-xs text-gray-500 mb-4 leading-relaxed">
        {t(dict, 'deals.disclosure')}
      </p>

      {/* Section Header */}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
        {t(dict, 'deals.sectionTitle', { holiday: holidayName })}
      </h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            activeCategory === 'all'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {t(dict, 'deals.allCategories')}
        </button>
        {categoriesWithDeals.map((cat) => {
          const def = DEAL_CATEGORIES.find((d) => d.id === cat.id);
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {def?.icon} {def?.name[locale] ?? cat.id}
            </button>
          );
        })}
      </div>

      {/* Deal Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleDeals.map((deal, i) => (
          <DealCard
            key={`${deal.category}-${deal.rank}-${i}`}
            deal={deal}
            holidayId={dealFile.holidayId}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}
```

**Step 2: Verify compilation**

Run: `cd C:/Users/andre/desktop/holidaycount && npx tsc --noEmit`
Expected: 0 errors

**Step 3: Commit**

```bash
git add components/DealsSection.tsx
git commit -m "feat: add DealsSection component with category tabs and FTC disclosure"
```

---

## Task 7: HolidayPicker Nav Component

**Files:**
- Create: `components/HolidayPicker.tsx`

**Step 1: Create the HolidayPicker component**

Create `components/HolidayPicker.tsx`:

```typescript
'use client';

import { useState, useRef, useEffect } from 'react';
import type { Locale } from '@/lib/types';
import type { HolidayData } from '@/lib/types';

interface UpcomingHoliday {
  holiday: { names: Record<Locale, string>; icon?: string; slugs: Record<Locale, string> };
  date: Date;
  countrySlug: string;
  countryFlag: string;
  daysUntil: number;
}

interface HolidayPickerProps {
  holidays: UpcomingHoliday[];
  label: string;
  locale: Locale;
  prefix: string;
}

export default function HolidayPicker({ holidays, label, locale, prefix }: HolidayPickerProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-2 text-sm font-medium text-primary-600 hover:bg-primary-50 rounded-md transition-colors flex items-center gap-1"
      >
        {label}
        <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2 max-h-96 overflow-y-auto">
          {holidays.map((item, i) => (
            <a
              key={i}
              href={`${prefix}/${item.countrySlug}/${item.holiday.slugs[locale]}`}
              className="flex items-center gap-3 px-4 py-3 hover:bg-primary-50 transition-colors"
              onClick={() => setOpen(false)}
            >
              <span className="text-lg flex-shrink-0">{item.holiday.icon || '📅'}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{item.holiday.names[locale]}</p>
                <p className="text-xs text-gray-500">{item.countryFlag} {item.daysUntil}d</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
```

**Step 2: Verify compilation**

Run: `cd C:/Users/andre/desktop/holidaycount && npx tsc --noEmit`
Expected: 0 errors

**Step 3: Commit**

```bash
git add components/HolidayPicker.tsx
git commit -m "feat: add HolidayPicker nav dropdown component"
```

---

## Task 8: Integrate DealsSection into Holiday Pages

**Files:**
- Modify: `lib/pages/holiday-detail.tsx`
- Modify: `components/HolidayPage.tsx`

**Step 1: Update holiday-detail.tsx to load deals**

In `lib/pages/holiday-detail.tsx`, add import at the top (after existing imports):

```typescript
import { getDealsByHoliday } from '@/data/deals';
```

In the `HolidayDetail` function (around line 74, after the `date`/`year` computation), add:

```typescript
  const dealFile = getDealsByHoliday(holiday.id);
```

Update the `<HolidayPageComponent>` JSX to pass the deals prop (add after `countryFlag`):

```typescript
        dealFile={dealFile}
```

**Step 2: Update HolidayPage.tsx to accept and render DealsSection**

In `components/HolidayPage.tsx`, add import at the top:

```typescript
import DealsSection from './DealsSection';
import type { DealFile } from '@/lib/deals/types';
```

Add `dealFile` to the `HolidayPageProps` interface:

```typescript
  dealFile?: DealFile | null;
```

Add `dealFile` to the destructured props:

```typescript
  dealFile,
```

Insert the `DealsSection` between the `{/* Add to Calendar */}` section and `{/* Extra content */}`, like:

```typescript
      {/* Deals */}
      {dealFile && (
        <section className="mb-8">
          <DealsSection dealFile={dealFile} holidayName={name} locale={locale} />
        </section>
      )}
```

**Step 3: Verify compilation**

Run: `cd C:/Users/andre/desktop/holidaycount && npx tsc --noEmit`
Expected: 0 errors

**Step 4: Build test**

Run: `cd C:/Users/andre/desktop/holidaycount && npm run build`
Expected: 0 errors, 1025 pages (no deal files exist yet, so DealsSection just won't render)

**Step 5: Commit**

```bash
git add lib/pages/holiday-detail.tsx components/HolidayPage.tsx
git commit -m "feat: integrate DealsSection into holiday detail pages"
```

---

## Task 9: Add HolidayPicker to Nav

**Files:**
- Modify: `app/(en)/layout.tsx`
- Modify: `app/[locale]/layout.tsx`

**Step 1: Update English layout**

In `app/(en)/layout.tsx`, the Header currently has hardcoded country links in a `<div className="hidden md:flex gap-1">` (lines 27-34).

Add the HolidayPicker after the About link (line 33), before the closing `</div>`:

First, make the Header a client component by adding data imports. Since the layout is a server component and HolidayPicker is a client component, we need to compute the upcoming holidays server-side and pass them down.

Add imports at the top of the file:

```typescript
import { getUpcomingHolidays } from '@/data/holidays';
import { getCountryByCode } from '@/data/countries';
import HolidayPicker from '@/components/HolidayPicker';
```

In the `Header` function, before the return, compute upcoming holidays:

```typescript
  const upcoming = getUpcomingHolidays(8).map((item) => {
    const country = getCountryByCode(item.holiday.countryCode);
    const now = new Date();
    const daysUntil = Math.ceil((item.date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return {
      holiday: { names: item.holiday.names, icon: item.holiday.icon, slugs: item.holiday.slugs },
      date: item.date,
      countrySlug: country?.slugs.en || '',
      countryFlag: country?.flag || '',
      daysUntil,
    };
  });
```

Then add the HolidayPicker component in the desktop nav, after the About link:

```typescript
            <HolidayPicker holidays={upcoming} label="Deals" locale="en" prefix="" />
```

Also add a "Deals" entry in the mobile menu (in the `MobileMenu` function), but as a simple link to the first upcoming holiday:

```typescript
        <a href={`/${upcoming[0]?.countrySlug}/${upcoming[0]?.holiday.slugs.en}`} className="block px-4 py-3 text-base font-medium text-primary-600 hover:bg-primary-50">Deals</a>
```

Note: The `upcoming` variable needs to be accessible in `MobileMenu`. Move the computation to the `EnglishLayout` level and pass it down, or compute it in both Header and MobileMenu (since it's a pure function with no side effects, this is acceptable at build time).

**Step 2: Update locale layout**

Same changes in `app/[locale]/layout.tsx` but using the locale-aware versions:

```typescript
import { getUpcomingHolidays } from '@/data/holidays';
import { getCountryByCode } from '@/data/countries';
import HolidayPicker from '@/components/HolidayPicker';
```

In the `Header` function, compute upcoming holidays with locale-aware slugs:

```typescript
  const upcoming = getUpcomingHolidays(8).map((item) => {
    const country = getCountryByCode(item.holiday.countryCode);
    const now = new Date();
    const daysUntil = Math.ceil((item.date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return {
      holiday: { names: item.holiday.names, icon: item.holiday.icon, slugs: item.holiday.slugs },
      date: item.date,
      countrySlug: country?.slugs[locale] || '',
      countryFlag: country?.flag || '',
      daysUntil,
    };
  });
```

Add the HolidayPicker in the desktop nav:

```typescript
            <HolidayPicker holidays={upcoming} label={dict['deals.navLabel']} locale={locale} prefix={prefix} />
```

**Step 3: Verify build**

Run: `cd C:/Users/andre/desktop/holidaycount && npm run build`
Expected: 0 errors

**Step 4: Commit**

```bash
git add "app/(en)/layout.tsx" "app/[locale]/layout.tsx"
git commit -m "feat: add HolidayPicker deals dropdown to nav in both layout groups"
```

---

## Task 10: Affiliate Disclosure Pages

**Files:**
- Create: `app/(en)/affiliate-disclosure/page.tsx`
- Create: `app/[locale]/affiliate-disclosure/page.tsx`
- Modify: `app/(en)/layout.tsx` (footer link)
- Modify: `app/[locale]/layout.tsx` (footer link)

**Step 1: Create English disclosure page**

Create `app/(en)/affiliate-disclosure/page.tsx`:

```typescript
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure — HolidayCount',
  description: 'Learn about how HolidayCount earns revenue through affiliate partnerships.',
  alternates: { canonical: '/affiliate-disclosure' },
};

export default function AffiliateDisclosurePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <a href="/" className="hover:text-primary-600">Home</a>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Affiliate Disclosure</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
        Affiliate Disclosure
      </h1>

      <div className="mt-6 space-y-4 text-base text-gray-700 leading-relaxed">
        <p>
          HolidayCount is a free resource that provides countdown timers, holiday information, and product recommendations for holidays worldwide. To keep this site free, we participate in affiliate marketing programs.
        </p>
        <p>
          Some of the links on this site are affiliate links. This means that if you click on a link and make a purchase, we may receive a small commission at no additional cost to you. These commissions help us maintain and improve HolidayCount.
        </p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">How It Works</h2>
        <p>
          When we recommend products, services, or experiences on our holiday pages, some of these recommendations include affiliate links. When you click one of these links and complete a purchase on the merchant's website, the merchant pays us a small referral fee.
        </p>
        <p>
          The price you pay is exactly the same whether you use our affiliate link or go directly to the merchant's website. Affiliate partnerships never increase the cost to you.
        </p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">Our Commitment</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>We only recommend products and services we believe provide genuine value.</li>
          <li>Our editorial recommendations are not influenced by affiliate commissions.</li>
          <li>Affiliate relationships never affect the price you pay.</li>
          <li>We clearly identify content that contains affiliate links.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 pt-4">Questions?</h2>
        <p>
          If you have any questions about our affiliate relationships, please visit our <a href="/about" className="text-primary-600 hover:text-primary-700 underline">About page</a>.
        </p>
      </div>
    </article>
  );
}
```

**Step 2: Create locale disclosure page**

Create `app/[locale]/affiliate-disclosure/page.tsx`:

```typescript
import type { Metadata } from 'next';
import type { Locale } from '@/lib/types';
import { isValidLocale, getDictionary, t } from '@/lib/i18n';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'es' }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === 'en') return {};
  const dict = getDictionary(locale as Locale);
  return {
    title: `${t(dict, 'deals.disclosurePageTitle')} — HolidayCount`,
    description: t(dict, 'deals.disclosurePageDescription'),
    alternates: { canonical: `/${locale}/affiliate-disclosure` },
  };
}

const CONTENT: Record<'fr' | 'es', { intro: string[]; howTitle: string; howContent: string[]; commitTitle: string; commitItems: string[]; questionsTitle: string; questionsText: string }> = {
  fr: {
    intro: [
      "HolidayCount est une ressource gratuite qui fournit des comptes à rebours, des informations sur les fêtes et des recommandations de produits pour les fêtes du monde entier. Pour garder ce site gratuit, nous participons à des programmes de marketing d'affiliation.",
      "Certains des liens sur ce site sont des liens d'affiliation. Cela signifie que si vous cliquez sur un lien et effectuez un achat, nous pouvons recevoir une petite commission sans frais supplémentaires pour vous.",
    ],
    howTitle: 'Comment ça marche',
    howContent: [
      "Lorsque nous recommandons des produits, services ou expériences sur nos pages de fêtes, certaines de ces recommandations incluent des liens d'affiliation. Lorsque vous cliquez sur l'un de ces liens et effectuez un achat, le marchand nous verse une petite commission.",
      "Le prix que vous payez est exactement le même que vous utilisiez notre lien d'affiliation ou que vous alliez directement sur le site du marchand.",
    ],
    commitTitle: 'Notre engagement',
    commitItems: [
      'Nous ne recommandons que des produits et services que nous estimons offrir une valeur réelle.',
      "Nos recommandations éditoriales ne sont pas influencées par les commissions d'affiliation.",
      "Les relations d'affiliation n'affectent jamais le prix que vous payez.",
      "Nous identifions clairement le contenu contenant des liens d'affiliation.",
    ],
    questionsTitle: 'Questions ?',
    questionsText: "Si vous avez des questions sur nos relations d'affiliation, veuillez visiter notre",
  },
  es: {
    intro: [
      'HolidayCount es un recurso gratuito que proporciona cuentas regresivas, información sobre fiestas y recomendaciones de productos para fiestas de todo el mundo. Para mantener este sitio gratuito, participamos en programas de marketing de afiliados.',
      'Algunos de los enlaces en este sitio son enlaces de afiliados. Esto significa que si haces clic en un enlace y realizas una compra, podemos recibir una pequeña comisión sin costo adicional para ti.',
    ],
    howTitle: 'Cómo funciona',
    howContent: [
      'Cuando recomendamos productos, servicios o experiencias en nuestras páginas de fiestas, algunas de estas recomendaciones incluyen enlaces de afiliados. Cuando haces clic en uno de estos enlaces y completas una compra, el comerciante nos paga una pequeña comisión.',
      'El precio que pagas es exactamente el mismo ya sea que uses nuestro enlace de afiliado o vayas directamente al sitio del comerciante.',
    ],
    commitTitle: 'Nuestro compromiso',
    commitItems: [
      'Solo recomendamos productos y servicios que creemos ofrecen un valor genuino.',
      'Nuestras recomendaciones editoriales no están influenciadas por comisiones de afiliados.',
      'Las relaciones de afiliados nunca afectan el precio que pagas.',
      'Identificamos claramente el contenido que contiene enlaces de afiliados.',
    ],
    questionsTitle: '¿Preguntas?',
    questionsText: 'Si tienes preguntas sobre nuestras relaciones de afiliados, visita nuestra',
  },
};

export default async function LocaleAffiliateDisclosurePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === 'en') notFound();

  const dict = getDictionary(locale as Locale);
  const content = CONTENT[locale as 'fr' | 'es'];
  const prefix = `/${locale}`;

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <a href={prefix} className="hover:text-primary-600">{dict['breadcrumb.home']}</a>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{t(dict, 'deals.disclosurePageTitle')}</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
        {t(dict, 'deals.disclosurePageTitle')}
      </h1>

      <div className="mt-6 space-y-4 text-base text-gray-700 leading-relaxed">
        {content.intro.map((p, i) => <p key={i}>{p}</p>)}

        <h2 className="text-xl font-bold text-gray-900 pt-4">{content.howTitle}</h2>
        {content.howContent.map((p, i) => <p key={i}>{p}</p>)}

        <h2 className="text-xl font-bold text-gray-900 pt-4">{content.commitTitle}</h2>
        <ul className="list-disc pl-6 space-y-2">
          {content.commitItems.map((item, i) => <li key={i}>{item}</li>)}
        </ul>

        <h2 className="text-xl font-bold text-gray-900 pt-4">{content.questionsTitle}</h2>
        <p>
          {content.questionsText} <a href={`${prefix}/about`} className="text-primary-600 hover:text-primary-700 underline">{dict['nav.about']}</a>.
        </p>
      </div>
    </article>
  );
}
```

**Step 3: Add footer link to both layouts**

In `app/(en)/layout.tsx`, in the `Footer` function, add after the About link (line 87):

```typescript
            <a href="/affiliate-disclosure" className="hover:text-gray-600 transition-colors">Affiliate Disclosure</a>
```

In `app/[locale]/layout.tsx`, in the `Footer` function, add after the About link (line 120):

```typescript
            <a href={`${prefix}/affiliate-disclosure`} className="hover:text-gray-600 transition-colors">{dict['nav.affiliateDisclosure']}</a>
```

**Step 4: Verify build**

Run: `cd C:/Users/andre/desktop/holidaycount && npm run build`
Expected: 0 errors, page count increases by 3 (en + fr + es disclosure pages)

**Step 5: Commit**

```bash
git add "app/(en)/affiliate-disclosure/page.tsx" "app/[locale]/affiliate-disclosure/page.tsx" "app/(en)/layout.tsx" "app/[locale]/layout.tsx"
git commit -m "feat: add FTC affiliate disclosure pages (en/fr/es) and footer links"
```

---

## Task 11: Cron Agent — Route Handler

**Files:**
- Create: `app/api/cron/refresh-deals/route.ts`
- Create (or modify): `vercel.json`
- Modify: `package.json` (add `@anthropic-ai/sdk`)

**Step 1: Install Anthropic SDK**

Run: `cd C:/Users/andre/desktop/holidaycount && npm install @anthropic-ai/sdk`

**Step 2: Create vercel.json**

Create `vercel.json` in the project root:

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

**Step 3: Create the cron route handler**

Create `app/api/cron/refresh-deals/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { getUpcomingHolidays } from '@/data/holidays';
import { getCountryByCode } from '@/data/countries';
import { DEAL_CATEGORIES } from '@/data/deals/categories';
import type { DealFile, DealCategory } from '@/lib/deals/types';

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

  const prompt = `You are a deal researcher for a holiday website. Research the top 10 best deals/products/services for the holiday "${targetHoliday.holiday.names.en}" in ${targetCountry.names.en}.

For EACH of these 7 categories: ${categoryList}

Find 10 real, currently available products or services from reputable merchants. For each deal, provide:
- title (in English, French, and Spanish)
- editorial (1-2 sentence explanation of why this is a great pick, in all 3 languages)
- imageUrl (a real product image URL if available, or empty string)
- price (e.g., "$49.99" or "From $25" in the country's local currency)
- merchant (company name)
- merchantUrl (real URL to the product page)
- category (one of: gifts, travel, experiences, food, decor, apparel, digital)
- tags (array of strings like "under-50", "for-kids", "last-minute", "best-seller")

Return ONLY valid JSON matching this exact structure:
{
  "holidayId": "${targetHoliday.holiday.id}",
  "lastUpdated": "${new Date().toISOString()}",
  "categories": [
    {
      "id": "gifts",
      "name": { "en": "Gifts", "fr": "Cadeaux", "es": "Regalos" },
      "deals": [
        {
          "rank": 1,
          "title": { "en": "...", "fr": "...", "es": "..." },
          "editorial": { "en": "...", "fr": "...", "es": "..." },
          "imageUrl": "",
          "price": "$49.99",
          "merchant": "Amazon",
          "merchantUrl": "https://...",
          "category": "gifts",
          "tags": ["under-50", "best-seller"]
        }
      ]
    }
  ]
}

Focus on real merchants and realistic prices for ${targetCountry.names.en}. If a category doesn't apply well to this holiday, include fewer items or leave the deals array empty.`;

  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 8000,
      messages: [{ role: 'user', content: prompt }],
    });

    const text = response.content[0].type === 'text' ? response.content[0].text : '';

    // Extract JSON from response (handle markdown code blocks)
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json({ error: 'No valid JSON in response' }, { status: 500 });
    }

    const dealFile: DealFile = JSON.parse(jsonMatch[0]);

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
    console.error('Agent error:', error);
    return NextResponse.json({ error: 'Agent execution failed' }, { status: 500 });
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
```

**Step 4: Verify compilation**

Run: `cd C:/Users/andre/desktop/holidaycount && npx tsc --noEmit`
Expected: 0 errors

**Step 5: Commit**

```bash
git add app/api/cron/refresh-deals/route.ts vercel.json package.json package-lock.json
git commit -m "feat: add Vercel Cron sales agent for deal research and GitHub commit"
```

---

## Task 12: Final Build Verification & Cleanup

**Step 1: Full build**

Run: `cd C:/Users/andre/desktop/holidaycount && npm run build`
Expected: 0 errors, page count increases by 3 (disclosure pages)

**Step 2: Verify new pages exist**

Check build output includes:
- `/affiliate-disclosure`
- `/fr/affiliate-disclosure`
- `/es/affiliate-disclosure`

**Step 3: Test with sample deal file (optional)**

Create a temporary sample deal file to verify the UI renders correctly:

```bash
# Create a sample deal file for testing
cat > data/deals/us_christmas.json << 'EOF'
{
  "holidayId": "us_christmas",
  "lastUpdated": "2026-02-17T00:00:00.000Z",
  "categories": [
    {
      "id": "gifts",
      "name": { "en": "Gifts", "fr": "Cadeaux", "es": "Regalos" },
      "deals": [
        {
          "rank": 1,
          "title": { "en": "Sample Gift Item", "fr": "Article cadeau exemple", "es": "Artículo de regalo de muestra" },
          "editorial": { "en": "A great gift pick for the holidays.", "fr": "Un excellent choix de cadeau pour les fêtes.", "es": "Una gran elección de regalo para las fiestas." },
          "imageUrl": "",
          "price": "$29.99",
          "merchant": "Example Store",
          "merchantUrl": "https://example.com/product",
          "category": "gifts",
          "tags": ["under-50", "best-seller"]
        }
      ]
    }
  ]
}
EOF
```

Run: `npm run build` — verify the Christmas page now renders the DealsSection.

Then delete the sample file:
```bash
rm data/deals/us_christmas.json
```

**Step 4: Final commit if any fixes needed**

```bash
git add -A
git commit -m "fix: cleanup from monetization MVP review"
```

---

## Summary

| Task | What | New Files | Modified Files |
|------|------|-----------|----------------|
| 1 | Types & categories | `lib/deals/types.ts`, `data/deals/categories.ts` | — |
| 2 | Deal data aggregator | `data/deals/index.ts` | — |
| 3 | Affiliate link service | `lib/affiliate.ts` | `lib/formatting.ts` |
| 4 | i18n strings | — | `lib/i18n/en.ts`, `fr.ts`, `es.ts` |
| 5 | DealCard component | `components/DealCard.tsx` | — |
| 6 | DealsSection component | `components/DealsSection.tsx` | — |
| 7 | HolidayPicker component | `components/HolidayPicker.tsx` | — |
| 8 | Holiday page integration | — | `lib/pages/holiday-detail.tsx`, `components/HolidayPage.tsx` |
| 9 | Nav integration | — | `app/(en)/layout.tsx`, `app/[locale]/layout.tsx` |
| 10 | Disclosure pages + footer | `app/(en)/affiliate-disclosure/page.tsx`, `app/[locale]/affiliate-disclosure/page.tsx` | `app/(en)/layout.tsx`, `app/[locale]/layout.tsx` |
| 11 | Cron agent | `app/api/cron/refresh-deals/route.ts`, `vercel.json` | `package.json` |
| 12 | Final verification | — | — |
