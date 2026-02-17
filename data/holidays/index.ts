/**
 * Holiday data aggregator — imports from all country files and provides lookup functions.
 */

import type { HolidayData, Locale } from '@/lib/types';
import { getCountryByCode, getCountryBySlug } from '@/data/countries';
import { getNextHolidayDate } from './_shared-dates';
import usHolidays from './united-states';
import caHolidays from './canada';
import { SHARED_HOLIDAYS } from './shared';
import gbHolidays from './united-kingdom';
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

// ---------------------------------------------------------------------------
// Master holiday list
// ---------------------------------------------------------------------------

const ALL_HOLIDAYS: HolidayData[] = [
  ...usHolidays,
  ...caHolidays,
  ...SHARED_HOLIDAYS,
  ...gbHolidays,
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
];

export default ALL_HOLIDAYS;

// ---------------------------------------------------------------------------
// Lookup functions
// ---------------------------------------------------------------------------

export function getAllHolidays(): HolidayData[] {
  return ALL_HOLIDAYS;
}

export function getHolidayById(id: string): HolidayData | undefined {
  return ALL_HOLIDAYS.find((h) => h.id === id);
}

export function getHolidayBySlug(
  slug: string,
  countryCode: string,
  locale: Locale = 'en'
): HolidayData | undefined {
  return ALL_HOLIDAYS.find(
    (h) => h.slugs[locale] === slug && (h.countryCode === countryCode || h.countryCode === 'shared')
  );
}

export function findHoliday(
  countrySlug: string,
  holidaySlug: string,
  locale: Locale = 'en'
): HolidayData | undefined {
  const country = getCountryBySlug(countrySlug, locale);
  if (!country) return undefined;

  const exact = ALL_HOLIDAYS.find(
    (h) => h.slugs[locale] === holidaySlug && h.countryCode === country.code
  );
  if (exact) return exact;

  return ALL_HOLIDAYS.find(
    (h) => h.slugs[locale] === holidaySlug && h.countryCode === 'shared'
  );
}

export function getHolidaysByCountry(countryCode: string): HolidayData[] {
  return ALL_HOLIDAYS.filter(
    (h) => h.countryCode === countryCode || h.countryCode === 'shared'
  );
}

export function getUpcomingHolidays(count: number = 12): Array<{ holiday: HolidayData; date: Date; year: number }> {
  const upcoming = ALL_HOLIDAYS.map((holiday) => {
    const { date, year } = getNextHolidayDate(holiday);
    return { holiday, date, year };
  });
  upcoming.sort((a, b) => a.date.getTime() - b.date.getTime());

  // Deduplicate by holiday slug (shared holidays appear once)
  const seen = new Set<string>();
  const unique = upcoming.filter((item) => {
    const key = item.holiday.slugs.en;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return unique.slice(0, count);
}

export function getAllHolidayRoutes(locale: Locale = 'en'): Array<{
  countrySlug: string;
  holidaySlug: string;
  countryCode: string;
}> {
  const routes: Array<{ countrySlug: string; holidaySlug: string; countryCode: string }> = [];

  for (const holiday of ALL_HOLIDAYS) {
    if (holiday.countryCode === 'shared') continue;
    const country = getCountryByCode(holiday.countryCode);
    if (!country) continue;
    routes.push({
      countrySlug: country.slugs[locale],
      holidaySlug: holiday.slugs[locale],
      countryCode: holiday.countryCode,
    });
  }

  return routes;
}
