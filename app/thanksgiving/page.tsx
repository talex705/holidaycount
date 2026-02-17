import type { Metadata } from 'next';
import HolidayPage from '@/components/HolidayPage';
import CountdownTimer from '@/components/CountdownTimer';
import {
  getHolidayBySlug,
  getNextHolidayDate,
  getHolidayDate,
  getThanksgivingUS,
  getThanksgivingCA,
  formatDate,
  toSerializable,
} from '@/lib/holidays';

export const revalidate = 86400;

const holiday = getHolidayBySlug('thanksgiving')!;

export function generateMetadata(): Metadata {
  const { year } = getNextHolidayDate(holiday);
  const title = `Thanksgiving ${year} — US & Canadian Dates, Countdown & Traditions`;
  const description = `When is Thanksgiving ${year}? Live countdowns for both US and Canadian Thanksgiving with dates, traditions, and planning tips.`;

  return {
    title,
    description,
    keywords: holiday.seo.keywords,
    alternates: { canonical: '/thanksgiving' },
    openGraph: { title, description, url: '/thanksgiving', type: 'website' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

function getNextDate(calcFn: (year: number) => Date): { date: Date; year: number } {
  const now = new Date();
  const currentYear = now.getFullYear();
  const thisYear = calcFn(currentYear);
  const endOfDay = new Date(thisYear);
  endOfDay.setHours(23, 59, 59, 999);
  if (endOfDay >= now) {
    return { date: thisYear, year: currentYear };
  }
  return { date: calcFn(currentYear + 1), year: currentYear + 1 };
}

function buildSchemas(usDate: Date, caDate: Date, usYear: number, caYear: number) {
  const usDateStr = usDate.toISOString().split('T')[0];
  const caDateStr = caDate.toISOString().split('T')[0];

  const usEventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: `Thanksgiving (US) ${usYear}`,
    startDate: usDateStr,
    endDate: usDateStr,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    description: 'American Thanksgiving, celebrated on the fourth Thursday of November.',
    location: { '@type': 'Country', name: 'United States' },
  };

  const caEventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: `Thanksgiving (Canada) ${caYear}`,
    startDate: caDateStr,
    endDate: caDateStr,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    description: 'Canadian Thanksgiving, celebrated on the second Monday of October.',
    location: { '@type': 'Country', name: 'Canada' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: holiday.faq.map((item) => ({
      '@type': 'Question',
      name: item.question
        .replace(/\{year\}/g, String(usYear)),
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
          .replace(/\{year\}/g, String(usYear))
          .replace(/\{usDate\}/g, formatDate(usDate))
          .replace(/\{caDate\}/g, formatDate(caDate)),
      },
    })),
  };

  return [usEventSchema, caEventSchema, faqSchema];
}

function DualCountdownSection({
  usDate,
  usYear,
  caDate,
  caYear,
}: {
  usDate: Date;
  usYear: number;
  caDate: Date;
  caYear: number;
}) {
  return (
    <div className="space-y-8 mb-4">
      <div className="bg-blue-50 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">US</span>
          <h3 className="text-lg font-semibold text-gray-900">
            US Thanksgiving {usYear}
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          {formatDate(usDate)} — 4th Thursday of November
        </p>
        <CountdownTimer targetDate={usDate} holidayName="Thanksgiving (US)" size="large" />
      </div>

      <div className="bg-red-50 rounded-xl p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">CA</span>
          <h3 className="text-lg font-semibold text-gray-900">
            Canadian Thanksgiving {caYear}
          </h3>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          {formatDate(caDate)} — 2nd Monday of October
        </p>
        <CountdownTimer targetDate={caDate} holidayName="Thanksgiving (Canada)" size="large" />
      </div>
    </div>
  );
}

export default function ThanksgivingPage() {
  const us = getNextDate(getThanksgivingUS);
  const ca = getNextDate(getThanksgivingCA);

  // Use US date as the primary for the shared HolidayPage component
  const schemas = buildSchemas(us.date, ca.date, us.year, ca.year);

  const relatedHolidays = [
    { name: 'Christmas', slug: 'christmas', description: 'Countdown to December 25' },
    { name: '4th of July', slug: 'independence-day', description: 'Independence Day countdown' },
    { name: 'Canada Day', slug: 'canada-day', description: 'Countdown to July 1' },
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <HolidayPage
        holiday={toSerializable(holiday)}
        targetDate={us.date}
        targetYear={us.year}
        relatedHolidays={relatedHolidays}
        extraContent={
          <DualCountdownSection
            usDate={us.date}
            usYear={us.year}
            caDate={ca.date}
            caYear={ca.year}
          />
        }
      />
    </>
  );
}
