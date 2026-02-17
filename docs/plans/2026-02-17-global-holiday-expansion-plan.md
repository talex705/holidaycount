# Global Holiday Expansion Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add holiday data for all 42 remaining countries (5-8 holidays each) with full trilingual content (en/fr/es), real translations, and proper date calculators.

**Architecture:** One TypeScript file per country in `data/holidays/`, each exporting a default `HolidayData[]` array. New date calculators in `_shared-dates.ts` for lunar/moveable holidays. All 42 imports aggregated in `data/holidays/index.ts`. Region-by-region batching with build verification after each batch.

**Tech Stack:** TypeScript, Next.js 15 (SSG), existing `HolidayData` type system

---

## Reference: Existing Pattern

Each country file follows this exact structure (see `data/holidays/united-kingdom.ts` for the explicit-translation pattern we'll use):

```typescript
/**
 * {Country Name} — Holiday Data
 */

import type { HolidayData } from '@/lib/types';
// import date calculators as needed from './_shared-dates'

const {xx}Holidays: HolidayData[] = [
  {
    id: '{cc}_{slug}',
    countryCode: '{cc}',
    slugs: { en: '{en-slug}', fr: '{fr-slug}', es: '{es-slug}' },
    names: { en: '{English Name}', fr: '{French Name}', es: '{Spanish Name}' },
    dateType: 'fixed',       // or 'calculated'
    fixedMonth: 1,           // if fixed
    fixedDay: 1,             // if fixed
    calculateDate: fn,       // if calculated
    descriptions: { en: '...', fr: '...', es: '...' },
    history: { en: '...', fr: '...', es: '...' },
    traditions: { en: ['...'], fr: ['...'], es: ['...'] },
    funFacts: { en: ['...'], fr: ['...'], es: ['...'] },
    planningChecklist: { en: ['...'], fr: ['...'], es: ['...'] },
    relatedHolidays: ['{cc}_{other-slug}'],
    seo: {
      en: { titleTemplate: '...', descriptionTemplate: '...', keywords: ['...'] },
      fr: { titleTemplate: '...', descriptionTemplate: '...', keywords: ['...'] },
      es: { titleTemplate: '...', descriptionTemplate: '...', keywords: ['...'] },
    },
    faq: [
      {
        question: { en: '...', fr: '...', es: '...' },
        answer: { en: '...', fr: '...', es: '...' },
      },
    ],
    colorTheme: '{theme}',
    icon: '{emoji}',
  },
];

export default {xx}Holidays;
```

**Content requirements per holiday:**
- `descriptions`: 1-2 sentences
- `history`: 2-3 paragraphs with `\n\n` between them
- `traditions`: 5-7 bullet points
- `funFacts`: 5 items
- `planningChecklist`: 5 items
- `faq`: 4 Q&A pairs (use `{year}`, `{date}`, `{dayOfWeek}` placeholders)
- `seo.keywords`: 5 localized keywords per language
- French/Spanish: Real translations, not placeholders. Use official holiday terminology.

---

## Task 1: Add Lunar/Moveable Date Calculators

**Files:**
- Modify: `data/holidays/_shared-dates.ts`

**Step 1: Add lookup-table date calculators at the end of the file (before the generic resolution section)**

Add these functions to `_shared-dates.ts`:

```typescript
// ---------------------------------------------------------------------------
// Lunar / lookup-table holidays
// ---------------------------------------------------------------------------

/** Diwali dates (Hindu lunisolar calendar) — pre-calculated 2024-2035 */
const DIWALI_DATES: Record<number, [number, number]> = {
  2024: [11, 1], 2025: [10, 20], 2026: [11, 8], 2027: [10, 29],
  2028: [10, 17], 2029: [11, 5], 2030: [10, 26], 2031: [11, 14],
  2032: [11, 2], 2033: [10, 23], 2034: [11, 11], 2035: [10, 31],
};

export function getDiwaliDate(year: number): Date {
  const d = DIWALI_DATES[year];
  if (!d) throw new Error(`Diwali date not available for year ${year}`);
  return new Date(year, d[0] - 1, d[1]);
}

/** Eid al-Fitr dates (Islamic calendar) — pre-calculated 2024-2035 */
const EID_AL_FITR_DATES: Record<number, [number, number]> = {
  2024: [4, 10], 2025: [3, 30], 2026: [3, 20], 2027: [3, 9],
  2028: [2, 27], 2029: [2, 14], 2030: [2, 4], 2031: [1, 24],
  2032: [1, 13], 2033: [1, 2], 2034: [12, 22], 2035: [12, 12],
};

export function getEidAlFitrDate(year: number): Date {
  const d = EID_AL_FITR_DATES[year];
  if (!d) throw new Error(`Eid al-Fitr date not available for year ${year}`);
  return new Date(year, d[0] - 1, d[1]);
}

/** Eid al-Adha dates (Islamic calendar) — pre-calculated 2024-2035 */
const EID_AL_ADHA_DATES: Record<number, [number, number]> = {
  2024: [6, 17], 2025: [6, 6], 2026: [5, 27], 2027: [5, 16],
  2028: [5, 4], 2029: [4, 24], 2030: [4, 13], 2031: [4, 2],
  2032: [3, 22], 2033: [3, 11], 2034: [3, 1], 2035: [2, 18],
};

export function getEidAlAdhaDate(year: number): Date {
  const d = EID_AL_ADHA_DATES[year];
  if (!d) throw new Error(`Eid al-Adha date not available for year ${year}`);
  return new Date(year, d[0] - 1, d[1]);
}

/** Chinese New Year dates (Chinese lunisolar calendar) — pre-calculated 2024-2035 */
const CHINESE_NEW_YEAR_DATES: Record<number, [number, number]> = {
  2024: [2, 10], 2025: [1, 29], 2026: [2, 17], 2027: [2, 6],
  2028: [1, 26], 2029: [2, 13], 2030: [2, 3], 2031: [1, 23],
  2032: [2, 11], 2033: [1, 31], 2034: [2, 19], 2035: [2, 8],
};

export function getChineseNewYear(year: number): Date {
  const d = CHINESE_NEW_YEAR_DATES[year];
  if (!d) throw new Error(`Chinese New Year date not available for year ${year}`);
  return new Date(year, d[0] - 1, d[1]);
}

/** Holi dates (Hindu calendar) — pre-calculated 2024-2035 */
const HOLI_DATES: Record<number, [number, number]> = {
  2024: [3, 25], 2025: [3, 14], 2026: [3, 3], 2027: [3, 22],
  2028: [3, 11], 2029: [3, 1], 2030: [3, 20], 2031: [3, 10],
  2032: [2, 27], 2033: [3, 17], 2034: [3, 6], 2035: [3, 25],
};

export function getHoliDate(year: number): Date {
  const d = HOLI_DATES[year];
  if (!d) throw new Error(`Holi date not available for year ${year}`);
  return new Date(year, d[0] - 1, d[1]);
}

/** Matariki dates (Maori New Year, NZ) — pre-calculated 2024-2035 */
const MATARIKI_DATES: Record<number, [number, number]> = {
  2024: [6, 28], 2025: [6, 20], 2026: [7, 10], 2027: [6, 25],
  2028: [7, 14], 2029: [7, 6], 2030: [6, 21], 2031: [7, 11],
  2032: [7, 2], 2033: [6, 24], 2034: [7, 7], 2035: [6, 29],
};

export function getMatarikiDate(year: number): Date {
  const d = MATARIKI_DATES[year];
  if (!d) throw new Error(`Matariki date not available for year ${year}`);
  return new Date(year, d[0] - 1, d[1]);
}

// ---------------------------------------------------------------------------
// Australia-specific
// ---------------------------------------------------------------------------

/** Queen's Birthday (AU) — second Monday of June (most states) */
export function getQueensBirthdayAU(year: number): Date {
  return nthWeekday(year, 6, 1, 2);
}

/** Melbourne Cup Day — first Tuesday of November */
export function getMelbourneCup(year: number): Date {
  return nthWeekday(year, 11, 2, 1);
}

// ---------------------------------------------------------------------------
// New Zealand-specific
// ---------------------------------------------------------------------------

/** Queen's Birthday (NZ) — first Monday of June */
export function getQueensBirthdayNZ(year: number): Date {
  return nthWeekday(year, 6, 1, 1);
}

// ---------------------------------------------------------------------------
// Ireland-specific
// ---------------------------------------------------------------------------

/** June Bank Holiday (IE) — first Monday of June */
export function getJuneBankHolidayIE(year: number): Date {
  return nthWeekday(year, 6, 1, 1);
}

/** October Bank Holiday (IE) — last Monday of October */
export function getOctoberBankHolidayIE(year: number): Date {
  return lastWeekday(year, 10, 1);
}

// ---------------------------------------------------------------------------
// Mexico-specific
// ---------------------------------------------------------------------------

/** Benito Juárez Birthday (MX) — third Monday of March */
export function getBenitoJuarezBirthday(year: number): Date {
  return nthWeekday(year, 3, 1, 3);
}

// ---------------------------------------------------------------------------
// Colombia-specific
// ---------------------------------------------------------------------------

/** Emiliani Law holidays — move to next Monday if not already Monday */
export function nextMonday(year: number, month: number, day: number): Date {
  const date = new Date(year, month - 1, day);
  const dayOfWeek = date.getDay();
  if (dayOfWeek === 1) return date;
  const daysUntilMonday = (8 - dayOfWeek) % 7 || 7;
  return new Date(year, month - 1, day + daysUntilMonday);
}
```

**Step 2: Verify the file compiles**

Run: `cd C:/Users/andre/desktop/holidaycount && npx tsc --noEmit data/holidays/_shared-dates.ts 2>&1 | head -20`

**Step 3: Commit**

```bash
git add data/holidays/_shared-dates.ts
git commit -m "feat: add lunar/moveable date calculators for global expansion"
```

---

## Task 2: Batch 1 — English-Speaking Countries (13 files)

**Files to create:**
- `data/holidays/ireland.ts`
- `data/holidays/australia.ts`
- `data/holidays/new-zealand.ts`
- `data/holidays/south-africa.ts`
- `data/holidays/jamaica.ts`
- `data/holidays/trinidad-and-tobago.ts`
- `data/holidays/barbados.ts`
- `data/holidays/bahamas.ts`
- `data/holidays/nigeria.ts`
- `data/holidays/ghana.ts`
- `data/holidays/kenya.ts`
- `data/holidays/uganda.ts`
- `data/holidays/india.ts`

**Holiday lists per country:**

### Ireland (ie) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| St. Patrick's Day | Mar 17 | fixed |
| Easter Monday | calculated | getEasterMonday |
| June Bank Holiday | 1st Mon Jun | getJuneBankHolidayIE |
| October Bank Holiday | last Mon Oct | getOctoberBankHolidayIE |
| Christmas Day | Dec 25 | fixed |
| St. Stephen's Day | Dec 26 | fixed |

### Australia (au) — 7 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Australia Day | Jan 26 | fixed |
| ANZAC Day | Apr 25 | fixed |
| Queen's Birthday | 2nd Mon Jun | getQueensBirthdayAU |
| Melbourne Cup Day | 1st Tue Nov | getMelbourneCup |
| Christmas Day | Dec 25 | fixed |
| Boxing Day | Dec 26 | fixed |

### New Zealand (nz) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Waitangi Day | Feb 6 | fixed |
| ANZAC Day | Apr 25 | fixed |
| Queen's Birthday | 1st Mon Jun | getQueensBirthdayNZ |
| Matariki | calculated | getMatarikiDate |
| Christmas Day | Dec 25 | fixed |

### South Africa (za) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| Human Rights Day | Mar 21 | fixed |
| Freedom Day | Apr 27 | fixed |
| Youth Day | Jun 16 | fixed |
| Heritage Day | Sep 24 | fixed |
| Day of Reconciliation | Dec 16 | fixed |
| Christmas Day | Dec 25 | fixed |

### Jamaica (jm) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Ash Wednesday | calculated | getAshWednesday |
| Emancipation Day | Aug 1 | fixed |
| Independence Day | Aug 6 | fixed |
| National Heroes Day | 3rd Mon Oct | nthWeekday(year, 10, 1, 3) |
| Christmas Day | Dec 25 | fixed |

### Trinidad and Tobago (tt) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| Carnival | calculated | getCarnivalTuesday |
| Emancipation Day | Aug 1 | fixed |
| Independence Day | Aug 31 | fixed |
| Diwali | calculated | getDiwaliDate |
| Christmas Day | Dec 25 | fixed |
| Eid al-Fitr | calculated | getEidAlFitrDate |

### Barbados (bb) — 5 holidays
| Holiday | Date | Type |
|---------|------|------|
| Errol Barrow Day | Jan 21 | fixed |
| Independence Day | Nov 30 | fixed |
| Emancipation Day | Aug 1 | fixed |
| Kadooment Day | 1st Mon Aug | nthWeekday(year, 8, 1, 1) |
| Christmas Day | Dec 25 | fixed |

### Bahamas (bs) — 5 holidays
| Holiday | Date | Type |
|---------|------|------|
| Junkanoo (New Year) | Jan 1 | fixed |
| Independence Day | Jul 10 | fixed |
| Emancipation Day | 1st Mon Aug | nthWeekday(year, 8, 1, 1) |
| Fox Hill Day | 2nd Tue Aug | nthWeekday(year, 8, 2, 2) |
| Christmas Day | Dec 25 | fixed |

### Nigeria (ng) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Democracy Day | Jun 12 | fixed |
| Independence Day | Oct 1 | fixed |
| Eid al-Fitr | calculated | getEidAlFitrDate |
| Eid al-Adha | calculated | getEidAlAdhaDate |
| Christmas Day | Dec 25 | fixed |

### Ghana (gh) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| Independence Day | Mar 6 | fixed |
| Founders' Day | Aug 4 | fixed |
| Kwame Nkrumah Memorial Day | Sep 21 | fixed |
| Farmers' Day | 1st Fri Dec | nthWeekday(year, 12, 5, 1) |
| Christmas Day | Dec 25 | fixed |
| Eid al-Fitr | calculated | getEidAlFitrDate |

### Kenya (ke) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Madaraka Day | Jun 1 | fixed |
| Mashujaa Day | Oct 20 | fixed |
| Jamhuri Day | Dec 12 | fixed |
| Christmas Day | Dec 25 | fixed |
| Eid al-Fitr | calculated | getEidAlFitrDate |

### Uganda (ug) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| Liberation Day | Jan 26 | fixed |
| Women's Day | Mar 8 | fixed |
| Independence Day | Oct 9 | fixed |
| Eid al-Fitr | calculated | getEidAlFitrDate |
| Eid al-Adha | calculated | getEidAlAdhaDate |
| Christmas Day | Dec 25 | fixed |

### India (in) — 7 holidays
| Holiday | Date | Type |
|---------|------|------|
| Republic Day | Jan 26 | fixed |
| Holi | calculated | getHoliDate |
| Independence Day | Aug 15 | fixed |
| Gandhi Jayanti | Oct 2 | fixed |
| Diwali | calculated | getDiwaliDate |
| Eid al-Fitr | calculated | getEidAlFitrDate |
| Christmas Day | Dec 25 | fixed |

**Step 1: Create all 13 country files**

Each file must follow the reference pattern above with:
- Real French translations (proper grammar, official holiday names)
- Real Spanish translations (proper grammar, official holiday names)
- Accurate historical content for each holiday
- Country-appropriate traditions, fun facts, and FAQs
- Proper date handling (fixed vs calculated)
- Cross-references in relatedHolidays using `{cc}_{slug}` format
- Appropriate colorTheme and icon emoji per holiday

**Step 2: Update index.ts to import all 13 new files**

Add to `data/holidays/index.ts`:

```typescript
import ieHolidays from './ireland';
import auHolidays from './australia';
import nzHolidays from './new-zealand';
import zaHolidays from './south-africa';
import jmHolidays from './jamaica';
import ttHolidays from './trinidad-and-tobago';
import bbHolidays from './barbados';
import bsHolidays from './bahamas';
import ngHolidays from './nigeria';
import ghHolidays from './ghana';
import keHolidays from './kenya';
import ugHolidays from './uganda';
import inHolidays from './india';
```

Add to the `ALL_HOLIDAYS` array:

```typescript
...ieHolidays,
...auHolidays,
...nzHolidays,
...zaHolidays,
...jmHolidays,
...ttHolidays,
...bbHolidays,
...bsHolidays,
...ngHolidays,
...ghHolidays,
...keHolidays,
...ugHolidays,
...inHolidays,
```

**Step 3: Build and verify**

Run: `cd C:/Users/andre/desktop/holidaycount && npm run build`
Expected: 0 errors, page count should increase significantly

**Step 4: Commit**

```bash
git add data/holidays/ireland.ts data/holidays/australia.ts data/holidays/new-zealand.ts data/holidays/south-africa.ts data/holidays/jamaica.ts data/holidays/trinidad-and-tobago.ts data/holidays/barbados.ts data/holidays/bahamas.ts data/holidays/nigeria.ts data/holidays/ghana.ts data/holidays/kenya.ts data/holidays/uganda.ts data/holidays/india.ts data/holidays/index.ts
git commit -m "feat: add holiday data for 13 English-speaking countries (Batch 1)"
```

---

## Task 3: Batch 2 — Western Europe (4 files)

**Files to create:**
- `data/holidays/france.ts`
- `data/holidays/belgium.ts`
- `data/holidays/switzerland.ts`
- `data/holidays/spain.ts`

### France (fr) — 7 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Fête du Travail (Labour Day) | May 1 | fixed |
| Fête Nationale (Bastille Day) | Jul 14 | fixed |
| Assumption of Mary | Aug 15 | fixed |
| All Saints' Day | Nov 1 | fixed |
| Armistice Day | Nov 11 | fixed |
| Christmas Day | Dec 25 | fixed |

### Belgium (be) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| National Day | Jul 21 | fixed |
| Assumption of Mary | Aug 15 | fixed |
| All Saints' Day | Nov 1 | fixed |
| Armistice Day | Nov 11 | fixed |
| Christmas Day | Dec 25 | fixed |

### Switzerland (ch) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Swiss National Day | Aug 1 | fixed |
| Ascension Day | calculated | getAscensionDay |
| Whit Monday | calculated | getWhitMonday |
| Christmas Day | Dec 25 | fixed |
| St. Stephen's Day | Dec 26 | fixed |

### Spain (es) — 7 holidays
| Holiday | Date | Type |
|---------|------|------|
| Three Kings Day (Epiphany) | Jan 6 | fixed |
| Good Friday | calculated | getGoodFriday |
| Labour Day | May 1 | fixed |
| Assumption of Mary | Aug 15 | fixed |
| National Day of Spain | Oct 12 | fixed |
| All Saints' Day | Nov 1 | fixed |
| Constitution Day | Dec 6 | fixed |

**Step 1: Create all 4 country files**

Follow same pattern as Task 2. French holidays should have particularly polished French translations. Spanish holidays should have particularly polished Spanish translations.

**Step 2: Update index.ts — add imports and spread**

```typescript
import frHolidays from './france';
import beHolidays from './belgium';
import chHolidays from './switzerland';
import esHolidays from './spain';
```

**Step 3: Build and verify**

Run: `npm run build`

**Step 4: Commit**

```bash
git add data/holidays/france.ts data/holidays/belgium.ts data/holidays/switzerland.ts data/holidays/spain.ts data/holidays/index.ts
git commit -m "feat: add holiday data for 4 Western European countries (Batch 2)"
```

---

## Task 4: Batch 3 — Mexico + Central America (7 files)

**Files to create:**
- `data/holidays/mexico.ts`
- `data/holidays/guatemala.ts`
- `data/holidays/honduras.ts`
- `data/holidays/el-salvador.ts`
- `data/holidays/nicaragua.ts`
- `data/holidays/costa-rica.ts`
- `data/holidays/panama.ts`

### Mexico (mx) — 7 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Constitution Day | 1st Mon Feb | nthWeekday(year, 2, 1, 1) |
| Benito Juárez Birthday | 3rd Mon Mar | getBenitoJuarezBirthday |
| Labour Day | May 1 | fixed |
| Independence Day | Sep 16 | fixed |
| Day of the Dead | Nov 2 | fixed |
| Christmas Day | Dec 25 | fixed |

### Guatemala (gt) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Holy Thursday | calculated | Easter - 3 days |
| Labour Day | May 1 | fixed |
| Independence Day | Sep 15 | fixed |
| Revolution Day | Oct 20 | fixed |
| Christmas Day | Dec 25 | fixed |

### Honduras (hn) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Pan-American Day | Apr 14 | fixed |
| Labour Day | May 1 | fixed |
| Independence Day | Sep 15 | fixed |
| Morazán Day | Oct 3 | fixed |
| Christmas Day | Dec 25 | fixed |

### El Salvador (sv) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Holy Week (Holy Thursday) | calculated | Easter - 3 |
| Labour Day | May 1 | fixed |
| Independence Day | Sep 15 | fixed |
| Day of the Dead | Nov 2 | fixed |
| Christmas Day | Dec 25 | fixed |

### Nicaragua (ni) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Holy Thursday | calculated | Easter - 3 |
| Labour Day | May 1 | fixed |
| Revolution Day | Jul 19 | fixed |
| Independence Day | Sep 15 | fixed |
| Christmas Day | Dec 25 | fixed |

### Costa Rica (cr) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Juan Santamaría Day | Apr 11 | fixed |
| Labour Day | May 1 | fixed |
| Annexation of Guanacaste | Jul 25 | fixed |
| Independence Day | Sep 15 | fixed |
| Christmas Day | Dec 25 | fixed |

### Panama (pa) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Carnival | calculated | getCarnivalTuesday |
| Independence from Colombia | Nov 3 | fixed |
| Independence from Spain | Nov 28 | fixed |
| Mother's Day | Dec 8 | fixed |
| Christmas Day | Dec 25 | fixed |

**Step 1:** Create all 7 files. Spanish translations should be particularly polished for these countries.

**Step 2:** Update index.ts

**Step 3:** Build and verify: `npm run build`

**Step 4:** Commit

```bash
git add data/holidays/mexico.ts data/holidays/guatemala.ts data/holidays/honduras.ts data/holidays/el-salvador.ts data/holidays/nicaragua.ts data/holidays/costa-rica.ts data/holidays/panama.ts data/holidays/index.ts
git commit -m "feat: add holiday data for Mexico + 6 Central American countries (Batch 3)"
```

---

## Task 5: Batch 4 — Caribbean (4 files)

**Files to create:**
- `data/holidays/haiti.ts`
- `data/holidays/cuba.ts`
- `data/holidays/dominican-republic.ts`
- `data/holidays/puerto-rico.ts`

### Haiti (ht) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| Independence Day | Jan 1 | fixed |
| Ancestors' Day | Jan 2 | fixed |
| Carnival | calculated | getCarnivalTuesday |
| Agriculture and Labour Day | May 1 | fixed |
| Flag and University Day | May 18 | fixed |
| Christmas Day | Dec 25 | fixed |

### Cuba (cu) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| Liberation Day | Jan 1 | fixed |
| Victory of Fidel | Jan 2 | fixed |
| International Workers' Day | May 1 | fixed |
| National Rebellion Day | Jul 26 | fixed |
| Independence War Anniversary | Oct 10 | fixed |
| Christmas Day | Dec 25 | fixed |

### Dominican Republic (do) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Duarte Day | Jan 26 | fixed |
| Independence Day | Feb 27 | fixed |
| Good Friday | calculated | getGoodFriday |
| Restoration Day | Aug 16 | fixed |
| Christmas Day | Dec 25 | fixed |

### Puerto Rico (pr) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| Three Kings Day | Jan 6 | fixed |
| Abolition Day | Mar 22 | fixed |
| Good Friday | calculated | getGoodFriday |
| US Independence Day | Jul 4 | fixed |
| Constitution Day | Jul 25 | fixed |
| Discovery of Puerto Rico Day | Nov 19 | fixed |

**Step 1:** Create all 4 files (French polished for Haiti, Spanish polished for all)

**Step 2:** Update index.ts

**Step 3:** Build: `npm run build`

**Step 4:** Commit

```bash
git add data/holidays/haiti.ts data/holidays/cuba.ts data/holidays/dominican-republic.ts data/holidays/puerto-rico.ts data/holidays/index.ts
git commit -m "feat: add holiday data for 4 Caribbean countries (Batch 4)"
```

---

## Task 6: Batch 5 — South America (9 files)

**Files to create:**
- `data/holidays/argentina.ts`
- `data/holidays/colombia.ts`
- `data/holidays/peru.ts`
- `data/holidays/chile.ts`
- `data/holidays/venezuela.ts`
- `data/holidays/ecuador.ts`
- `data/holidays/bolivia.ts`
- `data/holidays/paraguay.ts`
- `data/holidays/uruguay.ts`

### Argentina (ar) — 7 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Carnival Monday | calculated | getCarnivalMonday |
| Day of Remembrance | Mar 24 | fixed |
| Malvinas Day | Apr 2 | fixed |
| May Revolution Day | May 25 | fixed |
| Independence Day | Jul 9 | fixed |
| Christmas Day | Dec 25 | fixed |

### Colombia (co) — 7 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Three Kings Day | moved Mon (Jan 6) | nextMonday(year, 1, 6) |
| Labour Day | May 1 | fixed |
| Independence Day | Jul 20 | fixed |
| Battle of Boyacá | Aug 7 | fixed |
| Day of the Race | moved Mon (Oct 12) | nextMonday(year, 10, 12) |
| Christmas Day | Dec 25 | fixed |

### Peru (pe) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Holy Thursday | calculated | Easter - 3 |
| Labour Day | May 1 | fixed |
| Independence Day | Jul 28 | fixed |
| Santa Rosa de Lima | Aug 30 | fixed |
| Christmas Day | Dec 25 | fixed |

### Chile (cl) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Good Friday | calculated | getGoodFriday |
| Labour Day | May 1 | fixed |
| Navy Day | May 21 | fixed |
| National Day (Fiestas Patrias) | Sep 18 | fixed |
| Christmas Day | Dec 25 | fixed |

### Venezuela (ve) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Carnival Tuesday | calculated | getCarnivalTuesday |
| Independence Day | Jul 5 | fixed |
| Simón Bolívar Day | Jul 24 | fixed |
| Battle of Carabobo | Jun 24 | fixed |
| Christmas Day | Dec 25 | fixed |

### Ecuador (ec) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Carnival | calculated | getCarnivalTuesday |
| Labour Day | May 1 | fixed |
| Independence of Guayaquil | Oct 9 | fixed |
| Day of the Dead | Nov 2 | fixed |
| Christmas Day | Dec 25 | fixed |

### Bolivia (bo) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Carnival | calculated | getCarnivalTuesday |
| Good Friday | calculated | getGoodFriday |
| Labour Day | May 1 | fixed |
| Independence Day | Aug 6 | fixed |
| Christmas Day | Dec 25 | fixed |

### Paraguay (py) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Heroes' Day | Mar 1 | fixed |
| Good Friday | calculated | getGoodFriday |
| Labour Day | May 1 | fixed |
| Independence Day | May 15 | fixed |
| Christmas Day | Dec 25 | fixed |

### Uruguay (uy) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Carnival Monday | calculated | getCarnivalMonday |
| Landing of the 33 Patriots | Apr 19 | fixed |
| Labour Day | May 1 | fixed |
| Independence Day | Aug 25 | fixed |
| Christmas Day | Dec 25 | fixed |

**Step 1:** Create all 9 files

**Step 2:** Update index.ts

**Step 3:** Build: `npm run build`

**Step 4:** Commit

```bash
git add data/holidays/argentina.ts data/holidays/colombia.ts data/holidays/peru.ts data/holidays/chile.ts data/holidays/venezuela.ts data/holidays/ecuador.ts data/holidays/bolivia.ts data/holidays/paraguay.ts data/holidays/uruguay.ts data/holidays/index.ts
git commit -m "feat: add holiday data for 9 South American countries (Batch 5)"
```

---

## Task 7: Batch 6 — Africa (5 files)

**Files to create:**
- `data/holidays/senegal.ts`
- `data/holidays/cote-divoire.ts`
- `data/holidays/cameroon.ts`
- `data/holidays/dr-congo.ts`
- `data/holidays/madagascar.ts`

### Senegal (sn) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Independence Day | Apr 4 | fixed |
| Labour Day | May 1 | fixed |
| Eid al-Fitr | calculated | getEidAlFitrDate |
| Eid al-Adha | calculated | getEidAlAdhaDate |
| Christmas Day | Dec 25 | fixed |

### Côte d'Ivoire (ci) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Labour Day | May 1 | fixed |
| Independence Day | Aug 7 | fixed |
| Assumption of Mary | Aug 15 | fixed |
| Eid al-Fitr | calculated | getEidAlFitrDate |
| Christmas Day | Dec 25 | fixed |

### Cameroon (cm) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Youth Day | Feb 11 | fixed |
| Labour Day | May 1 | fixed |
| National Day | May 20 | fixed |
| Eid al-Fitr | calculated | getEidAlFitrDate |
| Christmas Day | Dec 25 | fixed |

### DR Congo (cd) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Martyrs' Day | Jan 4 | fixed |
| Independence Day | Jun 30 | fixed |
| Parents' Day | Aug 1 | fixed |
| Liberation Day | May 17 | fixed |
| Christmas Day | Dec 25 | fixed |

### Madagascar (mg) — 6 holidays
| Holiday | Date | Type |
|---------|------|------|
| New Year's Day | Jan 1 | fixed |
| Martyrs' Day | Mar 29 | fixed |
| Labour Day | May 1 | fixed |
| Independence Day | Jun 26 | fixed |
| Assumption of Mary | Aug 15 | fixed |
| Christmas Day | Dec 25 | fixed |

**Step 1:** Create all 5 files (French polished for all — these are Francophone countries)

**Step 2:** Update index.ts

**Step 3:** Build: `npm run build`

**Step 4:** Commit

```bash
git add data/holidays/senegal.ts data/holidays/cote-divoire.ts data/holidays/cameroon.ts data/holidays/dr-congo.ts data/holidays/madagascar.ts data/holidays/index.ts
git commit -m "feat: add holiday data for 5 African countries (Batch 6)"
```

---

## Task 8: Final Verification & Cleanup

**Step 1: Full build verification**

Run: `npm run build`
Expected: 0 errors, ~2,500-3,000 static pages

**Step 2: Verify page count**

Check the build output for total number of static pages generated. Should be roughly:
- 45 countries × ~6 holidays × 3 locales = ~810 holiday pages
- 45 country overview pages × 3 locales = ~135 country pages
- 3 landing pages (en/fr/es)
- Plus existing pages
- Total: ~1,200-3,000 pages

**Step 3: Spot-check a few pages**

Run: `npm run dev` and visit:
- `/australia/australia-day` — English
- `/fr/france/fete-nationale` — French
- `/es/mexico/dia-de-muertos` — Spanish
- `/india/diwali` — Calculated date holiday

Verify: countdown timer works, content displays, translations are correct.

**Step 4: Final commit**

If any fixes were needed, commit them:
```bash
git add -A
git commit -m "fix: cleanup and corrections from global expansion review"
```

---

## Summary

| Task | Countries | Files | Holidays |
|------|-----------|-------|----------|
| 1 | — | 1 modified | Date calculators |
| 2 | 13 English-speaking | 13 + index | ~78 |
| 3 | 4 Western Europe | 4 + index | ~26 |
| 4 | 7 Mexico + Central America | 7 + index | ~43 |
| 5 | 4 Caribbean | 4 + index | ~24 |
| 6 | 9 South America | 9 + index | ~56 |
| 7 | 5 Africa | 5 + index | ~30 |
| 8 | — | — | Verification |
| **Total** | **42** | **43 new + 2 modified** | **~257** |
