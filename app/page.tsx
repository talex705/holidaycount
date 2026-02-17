import type { Metadata } from 'next';
import HolidayCard from '@/components/HolidayCard';
import { FEATURED_HOLIDAYS, getNextHolidayDate, toSerializable } from '@/lib/holidays';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://holidaycount.com';

export const revalidate = 86400; // Revalidate every 24 hours

export function generateMetadata(): Metadata {
  const year = new Date().getFullYear();
  const title = `Holiday Countdown — Days Until Every Holiday in ${year}`;
  const description =
    'Live countdown timers for every US and Canadian holiday. See how many days until Christmas, Thanksgiving, Easter, Canada Day, Independence Day, and more.';

  return {
    title,
    description,
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title,
      description,
      url: SITE_URL,
      siteName: 'HolidayCount',
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: '\u23F1',
    title: 'Instant Countdowns',
    description: 'Live, ticking countdown timers that update every second. See exactly how many days, hours, minutes, and seconds until the next holiday.',
  },
  {
    icon: '\u2705',
    title: 'Always Accurate',
    description: 'Holiday dates are calculated using official algorithms. Variable holidays like Easter and Thanksgiving update automatically each year.',
  },
  {
    icon: '\uD83C\uDDFA\uD83C\uDDF8',
    title: 'US & Canada',
    description: 'Full coverage of holidays celebrated in both the United States and Canada, including dual Thanksgiving dates.',
  },
  {
    icon: '\uD83D\uDD13',
    title: 'Free Forever',
    description: 'All countdowns are completely free. No account required, no premium tiers, no personal data collected.',
  },
];

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '1',
    title: 'Pick a Holiday',
    description: 'Choose from our collection of US and Canadian holidays — Christmas, Thanksgiving, Easter, Canada Day, or Independence Day.',
  },
  {
    number: '2',
    title: 'See the Countdown',
    description: 'Watch the live countdown timer showing days, hours, minutes, and seconds until the holiday. The timer updates automatically.',
  },
  {
    number: '3',
    title: 'Add to Calendar',
    description: 'Add any holiday to your Google Calendar or download an .ics file for Apple Calendar, Outlook, or any other calendar app.',
  },
];

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'How do the holiday countdown timers work?',
    answer: 'Our countdown timers calculate the exact time remaining between now and the holiday date. The timer runs entirely in your browser using JavaScript and updates every second. For variable-date holidays like Easter and Thanksgiving, we use official date calculation algorithms to determine the correct date each year.',
  },
  {
    question: 'Does HolidayCount cover Canadian holidays?',
    answer: 'Yes. HolidayCount covers holidays celebrated in both the United States and Canada. For holidays that fall on different dates in each country — like Thanksgiving (4th Thursday of November in the US, 2nd Monday of October in Canada) — we show both dates and countdowns.',
  },
  {
    question: 'Why does Easter change dates every year?',
    answer: 'Easter is calculated using the computus algorithm: it falls on the first Sunday after the first full moon on or after March 21 (the ecclesiastical spring equinox). Because the lunar cycle does not align perfectly with the solar calendar, Easter can fall on any Sunday between March 22 and April 25. Our calculator uses this same algorithm to determine the correct date.',
  },
  {
    question: 'Are the holiday dates always accurate?',
    answer: 'Yes. Fixed-date holidays (Christmas, Canada Day, Independence Day) are always on the same date. Variable-date holidays are calculated using the same algorithms used by the US and Canadian federal governments: Easter uses the Anonymous Gregorian Computus, US Thanksgiving is the 4th Thursday of November, and Canadian Thanksgiving is the 2nd Monday of October.',
  },
  {
    question: 'Can I add holidays to my calendar?',
    answer: 'Yes. Every holiday page includes an "Add to Google Calendar" button that opens Google Calendar with the event pre-filled, and a "Download .ics" button that generates a calendar file compatible with Apple Calendar, Microsoft Outlook, and virtually any other calendar application.',
  },
];

/* -------------------------------------------------------------------------- */
/*  JSON-LD Structured Data                                                    */
/* -------------------------------------------------------------------------- */

function buildJsonLd() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'HolidayCount',
    url: SITE_URL,
    description:
      'Live countdown timers for every US and Canadian holiday. Christmas, Thanksgiving, Easter, Canada Day, and Independence Day countdowns.',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return [websiteSchema, faqSchema];
}

/* -------------------------------------------------------------------------- */
/*  Page Component                                                             */
/* -------------------------------------------------------------------------- */

export default function HomePage() {
  const year = new Date().getFullYear();
  const jsonLdSchemas = buildJsonLd();

  const holidayCards = FEATURED_HOLIDAYS.map((holiday) => {
    const { date } = getNextHolidayDate(holiday);
    return { holiday: toSerializable(holiday), date };
  }).sort((a, b) => a.date.getTime() - b.date.getTime());

  return (
    <>
      {/* JSON-LD Structured Data */}
      {jsonLdSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
            Holiday Countdown — Days Until Every Holiday in {year}
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Live countdown timers for holidays celebrated in the United States and Canada.
            See exactly how many days until Christmas, Thanksgiving, Easter, and more.
          </p>
        </div>
      </section>

      {/* Holiday Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {holidayCards.map(({ holiday, date }) => (
            <HolidayCard key={holiday.slug} holiday={holiday} date={date} />
          ))}
        </div>
      </section>

      {/* Why Use HolidayCount */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 text-center">
            Why Use HolidayCount
          </h2>
          <p className="mt-3 text-base text-gray-500 text-center max-w-2xl mx-auto">
            The fastest way to find holiday dates and count down to every celebration.
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
          How It Works
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

      {/* About Section */}
      <section className="bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            About HolidayCount
          </h2>
          <div className="mt-6 space-y-4 text-base text-gray-600 leading-relaxed">
            <p>
              Knowing when the next holiday falls should not require searching through multiple
              websites or checking different calendars. HolidayCount brings live countdown timers
              for all major US and Canadian holidays into one place so you can plan ahead with
              confidence. Whether you are counting down to{' '}
              <a href="/christmas" className="text-primary-600 hover:text-primary-700 underline">
                Christmas
              </a>
              , tracking both{' '}
              <a href="/thanksgiving" className="text-primary-600 hover:text-primary-700 underline">
                US and Canadian Thanksgiving
              </a>{' '}
              dates, figuring out when{' '}
              <a href="/easter" className="text-primary-600 hover:text-primary-700 underline">
                Easter
              </a>{' '}
              falls this year, or looking forward to{' '}
              <a href="/canada-day" className="text-primary-600 hover:text-primary-700 underline">
                Canada Day
              </a>{' '}
              or the{' '}
              <a href="/independence-day" className="text-primary-600 hover:text-primary-700 underline">
                4th of July
              </a>
              , our timers update in real time.
            </p>
            <p>
              Every date is calculated using the same algorithms used by governments and
              international organizations. Fixed holidays always show the correct date, and
              variable holidays like Easter (computus algorithm) and Thanksgiving (nth-weekday
              rule) are computed automatically for the current and upcoming year. Page titles
              and content update dynamically so the information is always current.
            </p>
            <p>
              HolidayCount is designed to be fast, accessible, and useful on any device. Each
              holiday page includes a live countdown timer, historical background, cultural
              traditions, planning tips, and the option to add the holiday to your personal
              calendar with a single click.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 divide-y divide-gray-200">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-4">
              <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-gray-900 hover:text-primary-600 transition-colors list-none [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>
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
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
