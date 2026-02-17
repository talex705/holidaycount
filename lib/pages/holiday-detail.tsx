/**
 * Shared logic for the holiday detail page — used by both (en) and [locale] route groups.
 */

import type { Metadata } from 'next';
import type { Locale } from '@/lib/types';
import { getCountryBySlug, COUNTRIES } from '@/data/countries';
import { findHoliday, getAllHolidayRoutes, getHolidaysByCountry, getHolidayById } from '@/data/holidays';
import { getHolidayDate, getNextHolidayDate } from '@/data/holidays/_shared-dates';
import { toSerializable } from '@/lib/types';
import { getDictionary, t } from '@/lib/i18n';
import { formatDate } from '@/lib/formatting';
import { buildHolidayUrl, buildHolidayHreflang, buildAbsoluteUrl } from '@/lib/url';
import HolidayPageComponent from '@/components/HolidayPage';

interface HolidayDetailProps {
  countrySlug: string;
  holidaySlug: string;
  locale: Locale;
}

export function generateHolidayStaticParams(locale: Locale) {
  return getAllHolidayRoutes(locale).map((route) => ({
    countrySlug: route.countrySlug,
    holidaySlug: route.holidaySlug,
  }));
}

export function generateHolidayMetadata(
  { countrySlug, holidaySlug, locale }: HolidayDetailProps
): Metadata | null {
  const country = getCountryBySlug(countrySlug, locale);
  if (!country) return null;

  const holiday = findHoliday(countrySlug, holidaySlug, locale);
  if (!holiday) return null;

  const { year } = getNextHolidayDate(holiday);
  const seo = holiday.seo[locale];
  const title = seo.titleTemplate.replace(/\{year\}/g, String(year));
  const description = seo.descriptionTemplate.replace(/\{year\}/g, String(year));
  const url = buildHolidayUrl(country, holiday, locale);

  return {
    title,
    description,
    keywords: seo.keywords,
    alternates: {
      canonical: url,
      languages: buildHolidayHreflang(country, holiday),
    },
    openGraph: {
      title,
      description,
      url: buildAbsoluteUrl(url),
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export function HolidayDetail({ countrySlug, holidaySlug, locale }: HolidayDetailProps) {
  const dict = getDictionary(locale);
  const country = getCountryBySlug(countrySlug, locale);
  if (!country) return null;

  const holiday = findHoliday(countrySlug, holidaySlug, locale);
  if (!holiday) return null;

  const { date, year } = getNextHolidayDate(holiday);
  const dateForSchema = getHolidayDate(holiday, year);
  const dateStr = dateForSchema.toISOString().split('T')[0];

  // Build related holidays
  const relatedHolidays = holiday.relatedHolidays
    .map((id) => {
      const related = getHolidayById(id);
      if (!related) return null;
      // Find the country for this related holiday
      const relCountry = COUNTRIES.find((c) => c.code === related.countryCode);
      if (!relCountry && related.countryCode !== 'shared') return null;
      const relCountryForUrl = relCountry || country; // Shared holidays use current country context
      return {
        name: related.names[locale],
        slug: buildHolidayUrl(relCountryForUrl, related, locale),
        description: related.descriptions[locale].substring(0, 80) + '...',
      };
    })
    .filter(Boolean) as Array<{ name: string; slug: string; description: string }>;

  // JSON-LD schemas
  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: `${holiday.names[locale]} ${year}`,
    startDate: dateStr,
    endDate: dateStr,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    description: holiday.descriptions[locale],
    location: { '@type': 'Country', name: country.names[locale] },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: holiday.faq.map((item) => ({
      '@type': 'Question',
      name: item.question[locale]
        .replace(/\{year\}/g, String(year)),
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer[locale]
          .replace(/\{year\}/g, String(year))
          .replace(/\{date\}/g, formatDate(date, locale))
          .replace(/\{dayOfWeek\}/g, date.toLocaleDateString(locale === 'fr' ? 'fr-FR' : locale === 'es' ? 'es-ES' : 'en-US', { weekday: 'long' })),
      },
    })),
  };

  return (
    <>
      {[eventSchema, faqSchema].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <HolidayPageComponent
        holiday={toSerializable(holiday)}
        targetDate={date}
        targetYear={year}
        relatedHolidays={relatedHolidays}
        locale={locale}
        countrySlug={countrySlug}
        countryName={country.names[locale]}
        countryFlag={country.flag}
      />
    </>
  );
}
