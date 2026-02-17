# Global Holiday Expansion Design

**Date:** 2026-02-17
**Status:** Approved
**Scope:** Add holiday data for all 42 remaining countries (5-8 holidays each) with full trilingual content

## Overview

Expand HolidayCount from 3 countries with holiday data (US, Canada, UK) to all 45 defined countries. Each country gets 5-8 holidays with full content in English, French, and Spanish — matching the quality of existing entries (multi-paragraph history, 5+ traditions, fun facts, FAQs, planning checklists, SEO metadata).

## Approach

**Region-by-region sequential** — 6 batches, validated after each with a build check.

## File Structure

One TypeScript file per country in `data/holidays/`:

```
data/holidays/
  ireland.ts            australia.ts          new-zealand.ts
  south-africa.ts       jamaica.ts            trinidad-and-tobago.ts
  barbados.ts           bahamas.ts            nigeria.ts
  ghana.ts              kenya.ts              uganda.ts
  india.ts              france.ts             belgium.ts
  switzerland.ts        haiti.ts              senegal.ts
  cote-divoire.ts       cameroon.ts           dr-congo.ts
  madagascar.ts         spain.ts              mexico.ts
  argentina.ts          colombia.ts           peru.ts
  chile.ts              cuba.ts               venezuela.ts
  ecuador.ts            dominican-republic.ts  guatemala.ts
  honduras.ts           el-salvador.ts        nicaragua.ts
  costa-rica.ts         panama.ts             bolivia.ts
  paraguay.ts           uruguay.ts            puerto-rico.ts
```

**Modified existing files:**
- `data/holidays/index.ts` — import all 42 new files, add to ALL_HOLIDAYS
- `data/holidays/_shared-dates.ts` — new date calculators for lunar/moveable holidays

## Regional Batches

### Batch 1: English-speaking (13 countries)
IE, AU, NZ, ZA, JM, TT, BB, BS, NG, GH, KE, UG, IN

### Batch 2: Western Europe (4 countries)
FR, BE, CH, ES

### Batch 3: Mexico + Central America (7 countries)
MX, GT, HN, SV, NI, CR, PA

### Batch 4: Caribbean (4 countries)
HT, CU, DO, PR

### Batch 5: South America (9 countries)
AR, CO, PE, CL, VE, EC, BO, PY, UY

### Batch 6: Africa (5 countries)
SN, CI, CM, CD, MG

## Holiday Selection Strategy

Priority order per country:
1. National/Independence days (highest search volume, unique)
2. Major religious holidays celebrated nationally
3. Cultural celebrations with commercial intent (gift-giving, shopping)
4. Public holidays most citizens observe

### Sample Selections

| Country | Holidays |
|---------|----------|
| Australia | Australia Day, ANZAC Day, Queen's Birthday, Melbourne Cup, Christmas, Boxing Day |
| New Zealand | Waitangi Day, ANZAC Day, Queen's Birthday, Matariki, Christmas, Boxing Day |
| Ireland | St. Patrick's Day, Easter Monday, June Bank Holiday, Christmas, St. Stephen's Day |
| South Africa | Heritage Day, Freedom Day, Youth Day, Christmas, Day of Reconciliation |
| India | Republic Day, Independence Day, Diwali, Holi, Gandhi Jayanti, Christmas |
| France | Bastille Day, Christmas, Ascension, Whit Monday, All Saints' Day, Assumption |
| Spain | Three Kings Day, National Day, Christmas, Constitution Day, All Saints' Day |
| Mexico | Independence Day, Day of the Dead, Revolution Day, Christmas, Benito Juárez |

## Per-Holiday Content Structure

Each holiday entry includes all fields from `HolidayData`:

- **id**: `{countryCode}_{slug}` (e.g., `au_australia-day`)
- **slugs**: Real trilingual URL slugs
- **names**: Real trilingual names
- **descriptions**: 1-2 sentences, 3 languages
- **history**: 2-3 paragraphs, 3 languages
- **traditions**: 5-7 bullet points, 3 languages
- **funFacts**: 5 items, 3 languages
- **planningChecklist**: 5 items, 3 languages
- **faq**: 4 Q&A pairs, 3 languages
- **seo**: Title template, description template, localized keywords — 3 languages
- **relatedHolidays**: Cross-references within same country
- **colorTheme** and **icon**: Per holiday

## Translation Approach

Real French and Spanish translations (not placeholders):
- Proper grammar and idiomatic phrasing
- SEO keywords localized (what speakers actually search for)
- Holiday names use official local terminology
- Cultural adaptation where appropriate

## Date Handling

**Fixed dates:** `dateType: 'fixed'` with `fixedMonth`/`fixedDay`

**Moveable holidays:** New calculators in `_shared-dates.ts`:
- `getDiwaliDate(year)` — Hindu lunisolar lookup table (2024-2035)
- `getEidAlFitrDate(year)` — Islamic calendar lookup table (2024-2035)
- `getEidAlAdhaDate(year)` — Islamic calendar lookup table (2024-2035)
- `getChineseNewYear(year)` — Chinese lunisolar lookup table (2024-2035)
- `getMatariki(year)` — Maori New Year lookup table (2024-2035)
- Country-specific nth-weekday calculators using existing `nthWeekday`/`lastWeekday`

## Build & Performance

- **Page count**: ~254 → ~2,500-3,000 static pages
- **Build time**: Under 2-3 minutes (well within Vercel limits)
- **No component changes needed** — existing components are already locale-aware
- **No route changes needed** — dynamic routes already handle all countries/holidays
- **No middleware changes needed** — locale validation already works

## Testing

After each batch:
1. Run `npm run build` — verify 0 errors
2. Spot-check generated pages for content quality
3. Verify sitemap includes all new routes

## What Does NOT Change

- Components (CountdownTimer, HolidayPage, HolidayCard, AddToCalendar)
- Route handlers (app/(en)/[countrySlug]/[holidaySlug], app/[locale]/...)
- Middleware (locale validation, legacy redirects)
- Layouts and page generators (lib/pages/)
- Country definitions (data/countries.ts)
- Type definitions (lib/types.ts)
