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
// Batch 2: Western Europe
import frHolidays from './france';
import beHolidays from './belgium';
import chHolidays from './switzerland';
import esHolidays from './spain';
// Batch 3: Mexico + Central America
import mxHolidays from './mexico';
import gtHolidays from './guatemala';
import hnHolidays from './honduras';
import svHolidays from './el-salvador';
import niHolidays from './nicaragua';
import crHolidays from './costa-rica';
import paHolidays from './panama';
// Batch 4: Caribbean
import htHolidays from './haiti';
import cuHolidays from './cuba';
import doHolidays from './dominican-republic';
import prHolidays from './puerto-rico';
// Batch 5: South America
import arHolidays from './argentina';
import coHolidays from './colombia';
import peHolidays from './peru';
import clHolidays from './chile';
import veHolidays from './venezuela';
import ecHolidays from './ecuador';
import boHolidays from './bolivia';
import pyHolidays from './paraguay';
import uyHolidays from './uruguay';
// Batch 6: Africa
import snHolidays from './senegal';
import ciHolidays from './cote-divoire';
import cmHolidays from './cameroon';
import cdHolidays from './dr-congo';
import mgHolidays from './madagascar';

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
  // Batch 2: Western Europe
  ...frHolidays,
  ...beHolidays,
  ...chHolidays,
  ...esHolidays,
  // Batch 3: Mexico + Central America
  ...mxHolidays,
  ...gtHolidays,
  ...hnHolidays,
  ...svHolidays,
  ...niHolidays,
  ...crHolidays,
  ...paHolidays,
  // Batch 4: Caribbean
  ...htHolidays,
  ...cuHolidays,
  ...doHolidays,
  ...prHolidays,
  // Batch 5: South America
  ...arHolidays,
  ...coHolidays,
  ...peHolidays,
  ...clHolidays,
  ...veHolidays,
  ...ecHolidays,
  ...boHolidays,
  ...pyHolidays,
  ...uyHolidays,
  // Batch 6: Africa
  ...snHolidays,
  ...ciHolidays,
  ...cmHolidays,
  ...cdHolidays,
  ...mgHolidays,
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
