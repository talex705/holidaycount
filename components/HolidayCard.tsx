'use client';

import CountdownTimer from './CountdownTimer';
import type { SerializableHoliday, Locale } from '@/lib/types';
import { formatDateShort } from '@/lib/formatting';

interface HolidayCardProps {
  holiday: SerializableHoliday;
  date: Date;
  locale?: Locale;
  countrySlug?: string;
}

export default function HolidayCard({ holiday, date, locale = 'en', countrySlug }: HolidayCardProps) {
  const name = holiday.names[locale];
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const href = countrySlug
    ? `${prefix}/${countrySlug}/${holiday.slugs[locale]}`
    : `${prefix}/${holiday.slugs[locale]}`;

  const viewText = locale === 'fr' ? 'Voir le compte à rebours' : locale === 'es' ? 'Ver cuenta regresiva' : 'View Countdown';

  return (
    <a
      href={href}
      className="group block rounded-xl border border-gray-200 bg-white p-5 sm:p-6 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] hover:border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 min-h-[80px]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            {holiday.icon && <span className="text-lg">{holiday.icon}</span>}
            <h2 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
              {name}
            </h2>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            {formatDateShort(date, locale)}
          </p>
        </div>
        <div className="flex-shrink-0">
          <CountdownTimer targetDate={date} holidayName={name} size="small" locale={locale} />
        </div>
      </div>
      <span className="mt-3 inline-flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700 transition-colors">
        {viewText}
        <svg
          className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </a>
  );
}
