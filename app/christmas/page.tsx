import type { Metadata } from 'next';
import HolidayPage from '@/components/HolidayPage';
import { getHolidayBySlug, getNextHolidayDate, getHolidayDate, toSerializable } from '@/lib/holidays';

export const revalidate = 86400;

const holiday = getHolidayBySlug('christmas')!;

export function generateMetadata(): Metadata {
  const { year } = getNextHolidayDate(holiday);
  const title = `Christmas ${year} — Countdown, Date & Celebration Guide`;
  const description = `How many days until Christmas ${year}? Live countdown timer, traditions, fun facts, and planning tips for December 25.`;

  return {
    title,
    description,
    keywords: holiday.seo.keywords,
    alternates: { canonical: '/christmas' },
    openGraph: { title, description, url: '/christmas', type: 'website' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

function buildSchemas(year: number) {
  const date = getHolidayDate(holiday, year);
  const dateStr = date.toISOString().split('T')[0];

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: `Christmas ${year}`,
    startDate: dateStr,
    endDate: dateStr,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    description: holiday.description,
    location: { '@type': 'Country', name: 'United States and Canada' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: holiday.faq.map((item) => ({
      '@type': 'Question',
      name: item.question.replace(/\{year\}/g, String(year)),
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
          .replace(/\{year\}/g, String(year))
          .replace(/\{dayOfWeek\}/g, date.toLocaleDateString('en-US', { weekday: 'long' })),
      },
    })),
  };

  return [eventSchema, faqSchema];
}

export default function ChristmasPage() {
  const { date, year } = getNextHolidayDate(holiday);
  const schemas = buildSchemas(year);

  const relatedHolidays = [
    { name: 'Thanksgiving', slug: 'thanksgiving', description: 'US & Canadian Thanksgiving countdowns' },
    { name: 'Easter', slug: 'easter', description: 'Easter countdown with date explanation' },
    { name: '4th of July', slug: 'independence-day', description: 'Independence Day countdown' },
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
        targetDate={date}
        targetYear={year}
        relatedHolidays={relatedHolidays}
      />
    </>
  );
}
