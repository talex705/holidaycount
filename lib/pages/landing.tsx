/**
 * Shared logic for the landing page.
 */

import type { Metadata } from 'next';
import type { Locale, Region } from '@/lib/types';
import { COUNTRIES } from '@/data/countries';
import { getUpcomingHolidays } from '@/data/holidays';
import { toSerializable } from '@/lib/types';
import { getDictionary, t } from '@/lib/i18n';
import { buildLandingHreflang, buildAbsoluteUrl, buildCountryUrl } from '@/lib/url';
import HolidayCard from '@/components/HolidayCard';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://holidaycount.com';

export function generateLandingMetadata(locale: Locale): Metadata {
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();
  const title = t(dict, 'landing.heroTitle', { year: String(year) });
  const description = t(dict, 'site.description');
  const prefix = locale === 'en' ? '/' : `/${locale}`;

  return {
    title,
    description,
    alternates: {
      canonical: prefix,
      languages: buildLandingHreflang(),
    },
    openGraph: {
      title,
      description,
      url: buildAbsoluteUrl(prefix),
      siteName: 'HolidayCount',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

const REGIONS: Region[] = [
  'north-america',
  'europe',
  'caribbean',
  'south-america',
  'central-america',
  'africa',
  'asia-pacific',
];

const REGION_ICONS: Record<Region, string> = {
  'north-america': '\u{1F30E}',
  'europe': '\u{1F30D}',
  'caribbean': '\u{1F3DD}',
  'south-america': '\u{1F30E}',
  'central-america': '\u{1F30E}',
  'africa': '\u{1F30D}',
  'asia-pacific': '\u{1F30F}',
};

export function LandingPage({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const year = new Date().getFullYear();
  const prefix = locale === 'en' ? '' : `/${locale}`;

  // Get upcoming holidays
  const upcoming = getUpcomingHolidays(12);
  const holidayCards = upcoming.map(({ holiday, date }) => ({
    holiday: toSerializable(holiday),
    date,
    countryCode: holiday.countryCode,
  }));

  // Featured countries (top 8)
  const featuredCodes = ['us', 'ca', 'gb', 'fr', 'es', 'mx', 'au', 'in'];
  const featuredCountries = featuredCodes
    .map((code) => COUNTRIES.find((c) => c.code === code))
    .filter(Boolean);

  // JSON-LD
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HolidayCount',
    url: SITE_URL,
    description: t(dict, 'site.description'),
  };

  const faqs = [
    { q: t(dict, 'landing.faq1.question'), a: t(dict, 'landing.faq1.answer') },
    { q: t(dict, 'landing.faq2.question'), a: t(dict, 'landing.faq2.answer') },
    { q: t(dict, 'landing.faq3.question'), a: t(dict, 'landing.faq3.answer') },
    { q: t(dict, 'landing.faq4.question'), a: t(dict, 'landing.faq4.answer') },
    { q: t(dict, 'landing.faq5.question'), a: t(dict, 'landing.faq5.answer') },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  const benefits = [
    { icon: '\u23F1', title: t(dict, 'landing.benefit1.title'), description: t(dict, 'landing.benefit1.description') },
    { icon: '\u2705', title: t(dict, 'landing.benefit2.title'), description: t(dict, 'landing.benefit2.description') },
    { icon: '\u{1F30D}', title: t(dict, 'landing.benefit3.title'), description: t(dict, 'landing.benefit3.description') },
    { icon: '\u{1F513}', title: t(dict, 'landing.benefit4.title'), description: t(dict, 'landing.benefit4.description') },
  ];

  const steps = [
    { number: '1', title: t(dict, 'landing.step1.title'), description: t(dict, 'landing.step1.description') },
    { number: '2', title: t(dict, 'landing.step2.title'), description: t(dict, 'landing.step2.description') },
    { number: '3', title: t(dict, 'landing.step3.title'), description: t(dict, 'landing.step3.description') },
  ];

  return (
    <>
      {[websiteSchema, faqSchema].map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            {t(dict, 'landing.heroTitle', { year: String(year) })}
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t(dict, 'landing.heroSubtitle')}
          </p>
        </div>
      </section>

      {/* Upcoming Holidays Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
          {t(dict, 'countries.upcomingHolidays')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {holidayCards.map(({ holiday, date, countryCode }) => {
            const country = COUNTRIES.find((c) => c.code === countryCode);
            return (
              <HolidayCard
                key={holiday.id}
                holiday={holiday}
                date={date}
                locale={locale}
                countrySlug={country?.slugs[locale] ?? 'united-states'}
              />
            );
          })}
        </div>
      </section>

      {/* Browse by Region */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
            {t(dict, 'landing.browseByRegion')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {REGIONS.map((region) => {
              const regionCountries = COUNTRIES.filter((c) => c.region === region);
              const regionName = t(dict, `region.${region}` as keyof typeof dict);
              return (
                <div key={region} className="bg-white rounded-xl border border-gray-200 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl">{REGION_ICONS[region]}</span>
                    <h3 className="font-semibold text-gray-900">{regionName}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {regionCountries.map((country) => (
                      <a
                        key={country.code}
                        href={`${prefix}/${country.slugs[locale]}`}
                        className="inline-flex items-center gap-1 px-2 py-1 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded transition-colors"
                      >
                        {country.flag} {country.names[locale]}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Countries */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
          {t(dict, 'landing.featuredCountries')}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {featuredCountries.map((country) => country && (
            <a
              key={country.code}
              href={`${prefix}/${country.slugs[locale]}`}
              className="group flex flex-col items-center p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg hover:border-primary-200 transition-all"
            >
              <span className="text-4xl mb-2">{country.flag}</span>
              <span className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors text-center">
                {country.names[locale]}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Why Use HolidayCount */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center">
            {t(dict, 'landing.whyTitle')}
          </h2>
          <p className="mt-3 text-base text-gray-500 text-center max-w-2xl mx-auto">
            {t(dict, 'landing.whySubtitle')}
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary-50 text-2xl" role="img" aria-hidden="true">
                  {benefit.icon}
                </span>
                <h3 className="mt-4 text-base font-semibold text-gray-900">{benefit.title}</h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center">
          {t(dict, 'landing.howItWorks')}
        </h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary-600 text-white text-lg font-bold">
                {step.number}
              </span>
              <h3 className="mt-4 text-base font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
          {t(dict, 'landing.faqTitle')}
        </h2>
        <div className="mt-8 divide-y divide-gray-200">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-4">
              <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-gray-900 hover:text-primary-600 transition-colors list-none [&::-webkit-details-marker]:hidden">
                <span>{faq.q}</span>
                <svg
                  className="ml-4 h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed pr-8">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
