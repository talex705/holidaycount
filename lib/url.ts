import type { Locale } from './types';
import type { HolidayData, Country } from './types';
import { LOCALES, DEFAULT_LOCALE } from './i18n';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://holidaycount.com';

export function buildHolidayUrl(
  country: Country,
  holiday: HolidayData,
  locale: Locale = DEFAULT_LOCALE
): string {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return `${prefix}/${country.slugs[locale]}/${holiday.slugs[locale]}`;
}

export function buildCountryUrl(country: Country, locale: Locale = DEFAULT_LOCALE): string {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return `${prefix}/${country.slugs[locale]}`;
}

export function buildAbsoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

/** Build hreflang alternate links for a holiday page */
export function buildHolidayHreflang(
  country: Country,
  holiday: HolidayData
): Record<string, string> {
  const alternates: Record<string, string> = {};
  for (const locale of LOCALES) {
    const url = buildHolidayUrl(country, holiday, locale);
    alternates[locale] = buildAbsoluteUrl(url);
  }
  alternates['x-default'] = alternates[DEFAULT_LOCALE];
  return alternates;
}

/** Build hreflang alternate links for a country page */
export function buildCountryHreflang(country: Country): Record<string, string> {
  const alternates: Record<string, string> = {};
  for (const locale of LOCALES) {
    const url = buildCountryUrl(country, locale);
    alternates[locale] = buildAbsoluteUrl(url);
  }
  alternates['x-default'] = alternates[DEFAULT_LOCALE];
  return alternates;
}

/** Build hreflang for the landing page */
export function buildLandingHreflang(): Record<string, string> {
  return {
    en: buildAbsoluteUrl('/'),
    fr: buildAbsoluteUrl('/fr'),
    es: buildAbsoluteUrl('/es'),
    'x-default': buildAbsoluteUrl('/'),
  };
}
