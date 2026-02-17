import type { Metadata } from 'next';
import HolidayPage from '@/components/HolidayPage';
import { getHolidayBySlug, getNextHolidayDate, getHolidayDate, toSerializable } from '@/lib/holidays';

export const revalidate = 86400;

const holiday = getHolidayBySlug('easter')!;

export function generateMetadata(): Metadata {
  const { year } = getNextHolidayDate(holiday);
  const title = `Easter ${year} — Date, Countdown & Celebration Guide`;
  const description = `When is Easter ${year}? Live countdown timer, why Easter changes dates, traditions, and celebration guide for the US and Canada.`;

  return {
    title,
    description,
    keywords: holiday.seo.keywords,
    alternates: { canonical: '/easter' },
    openGraph: { title, description, url: '/easter', type: 'website' },
    twitter: { card: 'summary_large_image', title, description },
  };
}

function buildSchemas(year: number) {
  const date = getHolidayDate(holiday, year);
  const dateStr = date.toISOString().split('T')[0];

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: `Easter ${year}`,
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
          .replace(/\{date\}/g, date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })),
      },
    })),
  };

  return [eventSchema, faqSchema];
}

export default function EasterPage() {
  const { date, year } = getNextHolidayDate(holiday);
  const schemas = buildSchemas(year);

  const relatedHolidays = [
    { name: 'Christmas', slug: 'christmas', description: 'Countdown to December 25' },
    { name: 'Thanksgiving', slug: 'thanksgiving', description: 'US & Canadian Thanksgiving countdowns' },
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
        targetDate={date}
        targetYear={year}
        relatedHolidays={relatedHolidays}
      />
    </>
  );
}
