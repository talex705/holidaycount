'use client';

import CountdownTimer from './CountdownTimer';
import { type SerializableHoliday, formatDateShort } from '@/lib/holidays';

interface HolidayCardProps {
  holiday: SerializableHoliday;
  date: Date;
}

function CountryBadge({ country }: { country: 'us' | 'ca' | 'both' }) {
  const labels: Record<string, string> = { us: 'US', ca: 'CA', both: 'US & CA' };
  const colors: Record<string, string> = {
    us: 'bg-blue-50 text-blue-700',
    ca: 'bg-red-50 text-red-700',
    both: 'bg-purple-50 text-purple-700',
  };
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${colors[country]}`}>
      {labels[country]}
    </span>
  );
}

export default function HolidayCard({ holiday, date }: HolidayCardProps) {
  return (
    <a
      href={`/${holiday.slug}`}
      className="group block rounded-xl border border-gray-200 bg-white p-5 sm:p-6 transition-all duration-200 hover:shadow-lg hover:scale-[1.02] hover:border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 min-h-[80px]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h2 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
              {holiday.name}
            </h2>
            <CountryBadge country={holiday.country} />
          </div>
          <p className="mt-1 text-sm text-gray-500">
            {formatDateShort(date)}
          </p>
        </div>
        <div className="flex-shrink-0">
          <CountdownTimer targetDate={date} holidayName={holiday.name} size="small" />
        </div>
      </div>
      <span className="mt-3 inline-flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700 transition-colors">
        View Countdown
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
