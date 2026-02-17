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
