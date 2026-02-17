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
  const dateStr = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
  const nextDay = new Date(date);
  nextDay.setDate(nextDay.getDate() + 1);
  const endDateStr = `${nextDay.getFullYear()}${String(nextDay.getMonth() + 1).padStart(2, '0')}${String(nextDay.getDate()).padStart(2, '0')}`;
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(name)}&dates=${dateStr}/${endDateStr}&details=${encodeURIComponent(desc)}`;
}

export function generateICalEvent(holiday: SerializableHoliday, date: Date, locale: Locale = 'en'): string {
  const name = holiday.names[locale];
  const desc = holiday.descriptions[locale];
  const dateStr = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
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
