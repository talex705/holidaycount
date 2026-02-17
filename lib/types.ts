/**
 * HolidayCount — Core Type Definitions
 */

// ---------------------------------------------------------------------------
// Locale & Region
// ---------------------------------------------------------------------------

export type Locale = 'en' | 'fr' | 'es';

export type Region =
  | 'north-america'
  | 'europe'
  | 'caribbean'
  | 'south-america'
  | 'central-america'
  | 'africa'
  | 'asia-pacific';

// ---------------------------------------------------------------------------
// Country
// ---------------------------------------------------------------------------

export interface Country {
  code: string;
  slugs: Record<Locale, string>;
  names: Record<Locale, string>;
  flag: string;
  region: Region;
  primaryLanguages: Locale[];
}

// ---------------------------------------------------------------------------
// Holiday
// ---------------------------------------------------------------------------

export interface FAQItem {
  question: Record<Locale, string>;
  answer: Record<Locale, string>;
}

export interface HolidayData {
  id: string;
  slugs: Record<Locale, string>;
  names: Record<Locale, string>;
  countryCode: string;
  dateType: 'fixed' | 'calculated';
  fixedMonth?: number;
  fixedDay?: number;
  calculateDate?: (year: number) => Date;
  descriptions: Record<Locale, string>;
  history: Record<Locale, string>;
  traditions: Record<Locale, string[]>;
  funFacts: Record<Locale, string[]>;
  planningChecklist: Record<Locale, string[]>;
  relatedHolidays: string[];
  seo: Record<Locale, { titleTemplate: string; descriptionTemplate: string; keywords: string[] }>;
  faq: FAQItem[];
  colorTheme?: string;
  icon?: string;
}

/** Holiday data safe to pass to Client Components (no functions) */
export type SerializableHoliday = Omit<HolidayData, 'calculateDate'>;

/** Strip non-serializable fields before passing to Client Components */
export function toSerializable(holiday: HolidayData): SerializableHoliday {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { calculateDate, ...rest } = holiday;
  return rest;
}
