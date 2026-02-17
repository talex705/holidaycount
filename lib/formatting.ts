import type { Locale } from './types';

const LOCALE_CODES: Record<Locale, string> = {
  en: 'en-US',
  fr: 'fr-FR',
  es: 'es-ES',
};

export function formatDate(date: Date, locale: Locale = 'en'): string {
  return date.toLocaleDateString(LOCALE_CODES[locale], {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function formatDateShort(date: Date, locale: Locale = 'en'): string {
  return date.toLocaleDateString(LOCALE_CODES[locale], {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
