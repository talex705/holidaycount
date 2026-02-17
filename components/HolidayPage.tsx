'use client';

import CountdownTimer from './CountdownTimer';
import AddToCalendar from './AddToCalendar';
import { type SerializableHoliday, formatDate } from '@/lib/holidays';

interface HolidayPageProps {
  holiday: SerializableHoliday;
  targetDate: Date;
  targetYear: number;
  relatedHolidays: Array<{ name: string; slug: string; description: string }>;
  /** Optional extra content between countdown and history (e.g. dual Thanksgiving) */
  extraContent?: React.ReactNode;
}

export default function HolidayPage({
  holiday,
  targetDate,
  targetYear,
  relatedHolidays,
  extraContent,
}: HolidayPageProps) {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <a href="/" className="hover:text-primary-600 transition-colors">Home</a>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-gray-900 font-medium">{holiday.name}</li>
        </ol>
      </nav>

      {/* Page Header */}
      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
          {holiday.name} {targetYear}
        </h1>
        <p className="mt-3 text-base text-gray-600 max-w-2xl">
          {formatDate(targetDate)}
        </p>
      </header>

      {/* Countdown Timer */}
      <section aria-label={`${holiday.name} Countdown`} className="mb-8">
        <CountdownTimer targetDate={targetDate} holidayName={holiday.name} size="large" />
      </section>

      {/* Add to Calendar */}
      <section className="mb-8">
        <AddToCalendar holiday={holiday} date={targetDate} />
      </section>

      {/* Extra content (e.g. dual Thanksgiving countdowns) */}
      {extraContent}

      {/* Main Content Sections */}
      <section className="mt-12 md:mt-16 space-y-10">
        {/* History */}
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            History of {holiday.name}
          </h2>
          {holiday.history.split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-base text-gray-700 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Traditions */}
        <div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            {holiday.name} Traditions
          </h2>
          <ul className="space-y-2">
            {holiday.traditions.map((tradition, i) => (
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
            Fun Facts
          </h2>
          <ul className="space-y-2">
            {holiday.funFacts.map((fact, i) => (
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
            Planning Checklist
          </h2>
          <ul className="space-y-2">
            {holiday.planningChecklist.map((item, i) => (
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
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {holiday.faq.map((item) => {
              const question = item.question
                .replace(/\{year\}/g, String(targetYear));
              const answer = item.answer
                .replace(/\{year\}/g, String(targetYear))
                .replace(/\{date\}/g, formatDate(targetDate))
                .replace(/\{dayOfWeek\}/g, targetDate.toLocaleDateString('en-US', { weekday: 'long' }));

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
      <nav aria-label="Related holidays" className="mt-12 md:mt-16 pt-8 border-t border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Other Holiday Countdowns
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {relatedHolidays.map((related) => (
            <a
              key={related.slug}
              href={`/${related.slug}`}
              className="block p-4 rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-primary-50 transition-colors min-h-[48px]"
            >
              <p className="font-medium text-gray-900">{related.name}</p>
              <p className="text-sm text-gray-500 mt-1">{related.description}</p>
            </a>
          ))}
        </div>
      </nav>
    </article>
  );
}
