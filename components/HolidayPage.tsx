'use client';

import CountdownTimer from './CountdownTimer';
import AddToCalendar from './AddToCalendar';
import type { SerializableHoliday, Locale } from '@/lib/types';
import { formatDate } from '@/lib/formatting';
import { getDictionary, t } from '@/lib/i18n';

interface HolidayPageProps {
  holiday: SerializableHoliday;
  targetDate: Date;
  targetYear: number;
  relatedHolidays: Array<{ name: string; slug: string; description: string }>;
  locale?: Locale;
  countrySlug?: string;
  countryName?: string;
  countryFlag?: string;
  extraContent?: React.ReactNode;
}

export default function HolidayPage({
  holiday,
  targetDate,
  targetYear,
  relatedHolidays,
  locale = 'en',
  countrySlug,
  countryName,
  countryFlag,
  extraContent,
}: HolidayPageProps) {
  const dict = getDictionary(locale);
  const name = holiday.names[locale];
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const homeHref = prefix || '/';
  const countryHref = countrySlug ? `${prefix}/${countrySlug}` : homeHref;

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <a href={homeHref} className="hover:text-primary-600 transition-colors">
              {t(dict, 'breadcrumb.home')}
            </a>
          </li>
          {countryName && (
            <>
              <li aria-hidden="true">/</li>
              <li>
                <a href={countryHref} className="hover:text-primary-600 transition-colors">
                  {countryFlag} {countryName}
                </a>
              </li>
            </>
          )}
          <li aria-hidden="true">/</li>
          <li className="text-gray-900 font-medium">{name}</li>
        </ol>
      </nav>

      {/* Page Header */}
      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          {name} {targetYear}
        </h1>
        <p className="mt-3 text-base text-gray-600 max-w-2xl">
          {formatDate(targetDate, locale)}
        </p>
      </header>

      {/* Countdown Timer */}
      <section aria-label={`${name} Countdown`} className="mb-8">
        <CountdownTimer targetDate={targetDate} holidayName={name} size="large" locale={locale} />
      </section>

      {/* Add to Calendar */}
      <section className="mb-8">
        <AddToCalendar holiday={holiday} date={targetDate} locale={locale} />
      </section>

      {/* Extra content */}
      {extraContent}

      {/* Main Content Sections */}
      <section className="mt-12 md:mt-16 space-y-10">
        {/* History */}
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {t(dict, 'holiday.historyOf', { holiday: name })}
          </h2>
          {holiday.history[locale].split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-base text-gray-700 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Traditions */}
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {t(dict, 'holiday.traditions', { holiday: name })}
          </h2>
          <ul className="space-y-2">
            {holiday.traditions[locale].map((tradition, i) => (
              <li key={i} className="flex items-start gap-3 text-base text-gray-700">
                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-primary-500 rounded-full" />
                {tradition}
              </li>
            ))}
          </ul>
        </div>

        {/* Fun Facts */}
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {t(dict, 'holiday.funFacts')}
          </h2>
          <ul className="space-y-2">
            {holiday.funFacts[locale].map((fact, i) => (
              <li key={i} className="flex items-start gap-3 text-base text-gray-700">
                <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 bg-accent-500 rounded-full" />
                {fact}
              </li>
            ))}
          </ul>
        </div>

        {/* Planning Checklist */}
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {t(dict, 'holiday.planningChecklist')}
          </h2>
          <ul className="space-y-2">
            {holiday.planningChecklist[locale].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-base text-gray-700">
                <span className="flex-shrink-0 mt-0.5 text-gray-400">{i + 1}.</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ Section */}
        <section>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            {t(dict, 'holiday.faq')}
          </h2>
          <div className="space-y-4">
            {holiday.faq.map((item) => {
              const question = item.question[locale]
                .replace(/\{year\}/g, String(targetYear));
              const answer = item.answer[locale]
                .replace(/\{year\}/g, String(targetYear))
                .replace(/\{date\}/g, formatDate(targetDate, locale))
                .replace(/\{dayOfWeek\}/g, targetDate.toLocaleDateString(
                  locale === 'fr' ? 'fr-FR' : locale === 'es' ? 'es-ES' : 'en-US',
                  { weekday: 'long' }
                ));

              return (
                <details key={question} className="group border border-gray-200 rounded-lg">
                  <summary className="flex cursor-pointer items-center justify-between p-4 text-base font-medium text-gray-900 hover:text-primary-600 transition-colors list-none [&::-webkit-details-marker]:hidden">
                    <span>{question}</span>
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
                  <p className="px-4 pb-4 text-base text-gray-700 leading-relaxed">
                    {answer}
                  </p>
                </details>
              );
            })}
          </div>
        </section>
      </section>

      {/* Related Holidays */}
      {relatedHolidays.length > 0 && (
        <nav aria-label="Related holidays" className="mt-12 md:mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {t(dict, 'holiday.relatedHolidays')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedHolidays.map((related) => (
              <a
                key={related.slug}
                href={related.slug}
                className="block p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors min-h-[48px]"
              >
                <p className="font-medium text-gray-900">{related.name}</p>
                <p className="text-sm text-gray-500 mt-1">{related.description}</p>
              </a>
            ))}
          </div>
        </nav>
      )}
    </article>
  );
}
