import type { Locale } from '@/lib/types';
import en, { type Dictionary, type DictionaryKey } from './en';
import fr from './fr';
import es from './es';

export type { Dictionary, DictionaryKey };

export const LOCALES: Locale[] = ['en', 'fr', 'es'];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  es: 'Español',
};

const dictionaries: Record<Locale, Dictionary> = { en, fr, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}

/** Get a translated string with optional interpolation */
export function t(dict: Dictionary, key: DictionaryKey, params?: Record<string, string>): string {
  let value: string = dict[key] ?? en[key] ?? key;
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      value = value.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
    }
  }
  return value;
}

/** Check if a string is a valid locale */
export function isValidLocale(s: string): s is Locale {
  return LOCALES.includes(s as Locale);
}
