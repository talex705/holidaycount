/**
 * Date calculation functions for holidays.
 * Migrated from lib/holidays.ts + new calculators.
 */

// ---------------------------------------------------------------------------
// Core helpers
// ---------------------------------------------------------------------------

/** Get the Nth occurrence of a weekday in a given month/year (1-indexed) */
export function nthWeekday(year: number, month: number, weekday: number, n: number): Date {
  const first = new Date(year, month - 1, 1);
  const firstWeekday = first.getDay();
  const day = 1 + ((weekday - firstWeekday + 7) % 7) + (n - 1) * 7;
  return new Date(year, month - 1, day);
}

/** Get the last occurrence of a weekday in a given month */
export function lastWeekday(year: number, month: number, weekday: number): Date {
  const lastDay = new Date(year, month, 0);
  const diff = (lastDay.getDay() - weekday + 7) % 7;
  return new Date(year, month - 1, lastDay.getDate() - diff);
}

// ---------------------------------------------------------------------------
// Easter (Anonymous Gregorian Computus)
// ---------------------------------------------------------------------------

export function getEasterDate(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

// ---------------------------------------------------------------------------
// Easter-derived holidays
// ---------------------------------------------------------------------------

export function getGoodFriday(year: number): Date {
  const easter = getEasterDate(year);
  return new Date(year, easter.getMonth(), easter.getDate() - 2);
}

export function getEasterMonday(year: number): Date {
  const easter = getEasterDate(year);
  return new Date(year, easter.getMonth(), easter.getDate() + 1);
}

export function getAscensionDay(year: number): Date {
  const easter = getEasterDate(year);
  return new Date(year, easter.getMonth(), easter.getDate() + 39);
}

export function getWhitMonday(year: number): Date {
  const easter = getEasterDate(year);
  return new Date(year, easter.getMonth(), easter.getDate() + 50);
}

export function getCarnivalMonday(year: number): Date {
  const easter = getEasterDate(year);
  return new Date(year, easter.getMonth(), easter.getDate() - 48);
}

export function getCarnivalTuesday(year: number): Date {
  const easter = getEasterDate(year);
  return new Date(year, easter.getMonth(), easter.getDate() - 47);
}

export function getAshWednesday(year: number): Date {
  const easter = getEasterDate(year);
  return new Date(year, easter.getMonth(), easter.getDate() - 46);
}

export function getCorpusChristi(year: number): Date {
  const easter = getEasterDate(year);
  return new Date(year, easter.getMonth(), easter.getDate() + 60);
}

export function getPalmSunday(year: number): Date {
  const easter = getEasterDate(year);
  return new Date(year, easter.getMonth(), easter.getDate() - 7);
}

// ---------------------------------------------------------------------------
// US-specific
// ---------------------------------------------------------------------------

export function getThanksgivingUS(year: number): Date {
  return nthWeekday(year, 11, 4, 4);
}

export function getMLKDay(year: number): Date {
  return nthWeekday(year, 1, 1, 3);
}

export function getPresidentsDay(year: number): Date {
  return nthWeekday(year, 2, 1, 3);
}

export function getMemorialDay(year: number): Date {
  return lastWeekday(year, 5, 1);
}

export function getLaborDayUS(year: number): Date {
  return nthWeekday(year, 9, 1, 1);
}

export function getColumbusDay(year: number): Date {
  return nthWeekday(year, 10, 1, 2);
}

// ---------------------------------------------------------------------------
// Canada-specific
// ---------------------------------------------------------------------------

export function getThanksgivingCA(year: number): Date {
  return nthWeekday(year, 10, 1, 2);
}

export function getVictoriaDay(year: number): Date {
  const may25 = new Date(year, 4, 25);
  const dayOfWeek = may25.getDay();
  const diff = dayOfWeek === 1 ? 0 : ((dayOfWeek - 1 + 7) % 7);
  return new Date(year, 4, 25 - diff);
}

export function getFamilyDay(year: number): Date {
  return nthWeekday(year, 2, 1, 3);
}

export function getCivicHoliday(year: number): Date {
  return nthWeekday(year, 8, 1, 1);
}

// ---------------------------------------------------------------------------
// UK-specific
// ---------------------------------------------------------------------------

export function getEarlyMayBankHoliday(year: number): Date {
  return nthWeekday(year, 5, 1, 1);
}

export function getSpringBankHoliday(year: number): Date {
  return lastWeekday(year, 5, 1);
}

export function getSummerBankHoliday(year: number): Date {
  return lastWeekday(year, 8, 1);
}

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

// ---------------------------------------------------------------------------
// Holy Thursday (used by multiple Latin American countries)
// ---------------------------------------------------------------------------

export function getHolyThursday(year: number): Date {
  const easter = getEasterDate(year);
  return new Date(year, easter.getMonth(), easter.getDate() - 3);
}

// ---------------------------------------------------------------------------
// Generic holiday date resolution
// ---------------------------------------------------------------------------

import type { HolidayData } from '@/lib/types';

export function getHolidayDate(holiday: HolidayData, year: number): Date {
  if (holiday.dateType === 'fixed' && holiday.fixedMonth && holiday.fixedDay) {
    return new Date(year, holiday.fixedMonth - 1, holiday.fixedDay);
  }
  if (holiday.calculateDate) {
    return holiday.calculateDate(year);
  }
  throw new Error(`Cannot calculate date for holiday: ${holiday.id}`);
}

export function getNextHolidayDate(holiday: HolidayData): { date: Date; year: number } {
  const now = new Date();
  const currentYear = now.getFullYear();
  const thisYearDate = getHolidayDate(holiday, currentYear);
  const endOfHoliday = new Date(thisYearDate);
  endOfHoliday.setHours(23, 59, 59, 999);

  if (endOfHoliday >= now) {
    return { date: thisYearDate, year: currentYear };
  }
  return { date: getHolidayDate(holiday, currentYear + 1), year: currentYear + 1 };
}

// ---------------------------------------------------------------------------
// Calendar helpers
// ---------------------------------------------------------------------------

import type { SerializableHoliday, Locale } from '@/lib/types';

export function generateGoogleCalendarUrl(holiday: SerializableHoliday, date: Date, locale: Locale = 'en'): string {
  const name = holiday.names[locale];
  const desc = holiday.descriptions[locale];
  const dateStr = `${date.getUTCFullYear()}${String(date.getUTCMonth() + 1).padStart(2, '0')}${String(date.getUTCDate()).padStart(2, '0')}`;
  const nextDay = new Date(date);
  nextDay.setUTCDate(nextDay.getUTCDate() + 1);
  const endDateStr = `${nextDay.getUTCFullYear()}${String(nextDay.getUTCMonth() + 1).padStart(2, '0')}${String(nextDay.getUTCDate()).padStart(2, '0')}`;
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(name)}&dates=${dateStr}/${endDateStr}&details=${encodeURIComponent(desc)}`;
}

export function generateICalEvent(holiday: SerializableHoliday, date: Date, locale: Locale = 'en'): string {
  const name = holiday.names[locale];
  const desc = holiday.descriptions[locale];
  const dateStr = `${date.getUTCFullYear()}${String(date.getUTCMonth() + 1).padStart(2, '0')}${String(date.getUTCDate()).padStart(2, '0')}`;
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//HolidayCount//EN',
    'BEGIN:VEVENT',
    `DTSTART;VALUE=DATE:${dateStr}`,
    `SUMMARY:${name}`,
    `DESCRIPTION:${desc}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}
