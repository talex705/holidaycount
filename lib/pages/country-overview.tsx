/**
 * Shared logic for the country overview page.
 */

import type { Metadata } from 'next';
import type { Locale } from '@/lib/types';
import { getCountryBySlug, COUNTRIES } from '@/data/countries';
import { getHolidaysByCountry } from '@/data/holidays';
import { getNextHolidayDate } from '@/data/holidays/_shared-dates';
import { toSerializable } from '@/lib/types';
import { getDictionary, t } from '@/lib/i18n';
import { formatDateShort } from '@/lib/formatting';
import { buildCountryUrl, buildCountryHreflang, buildAbsoluteUrl, buildHolidayUrl } from '@/lib/url';
import HolidayCard from '@/components/HolidayCard';

interface CountryOverviewProps {
  countrySlug: string;
  locale: Locale;
}

export function generateCountryStaticParams(locale: Locale) {
  return COUNTRIES.map((country) => ({
    countrySlug: country.slugs[locale],
  }));
}

export function generateCountryMetadata({ countrySlug, locale }: CountryOverviewProps): Metadata | null {
  const country = getCountryBySlug(countrySlug, locale);
  if (!country) return null;

  const dict = getDictionary(locale);
  const title = t(dict, 'countries.holidaysIn', { country: country.names[locale] });
  const description = t(dict, 'country.overviewDescription', { country: country.names[locale] });
  const url = buildCountryUrl(country, locale);

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: buildCountryHreflang(country),
    },
    openGraph: {
      title,
      description,
      url: buildAbsoluteUrl(url),
      type: 'website',
    },
  };
}

export function CountryOverview({ countrySlug, locale }: CountryOverviewProps) {
  const dict = getDictionary(locale);
  const country = getCountryBySlug(countrySlug, locale);
  if (!country) return null;

  const holidays = getHolidaysByCountry(country.code);
  const holidayCards = holidays
    .map((holiday) => {
      const { date } = getNextHolidayDate(holiday);
      return { holiday: toSerializable(holiday), date };
    })
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  const countryName = country.names[locale];
  const prefix = locale === 'en' ? '' : `/${locale}`;

  return (
    <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <a href={prefix || '/'} className="hover:text-primary-600 transition-colors">
              {t(dict, 'breadcrumb.home')}
            </a>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-900 font-medium">
            {country.flag} {countryName}
          </li>
        </ol>
      </nav>

      {/* Page Header */}
      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          {country.flag} {t(dict, 'countries.holidaysIn', { country: countryName })}
        </h1>
        <p className="mt-3 text-base text-gray-600 max-w-2xl">
          {t(dict, 'country.overviewDescription', { country: countryName })}
        </p>
      </header>

      {/* Holiday Cards Grid */}
      <section>
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
          {t(dict, 'countries.allHolidays', { country: countryName })}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {holidayCards.map(({ holiday, date }) => (
            <HolidayCard
              key={holiday.id}
              holiday={holiday}
              date={date}
              locale={locale}
              countrySlug={countrySlug}
            />
          ))}
        </div>
      </section>
    </article>
  );
}
