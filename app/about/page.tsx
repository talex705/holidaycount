import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About HolidayCount',
  description:
    'HolidayCount provides free, live countdown timers for every US and Canadian holiday. Learn about our tools and how we calculate holiday dates.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <a href="/" className="hover:text-primary-600">Home</a>
        <span className="mx-2">/</span>
        <span className="text-gray-900">About</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
        About HolidayCount
      </h1>

      <div className="mt-6 space-y-6 text-gray-700 leading-relaxed">
        <p>
          HolidayCount is a free collection of live countdown timers for holidays celebrated
          in the United States and Canada. Whether you are planning a family gathering, counting
          down the days to a long weekend, or simply curious about when the next holiday falls,
          HolidayCount gives you accurate dates and real-time countdowns at a glance.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 pt-4">
          Our Holiday Countdowns
        </h2>
        <p>
          We currently feature five major holidays, each with a dedicated countdown page:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="/christmas" className="text-primary-600 hover:underline font-medium">
              Christmas Countdown
            </a>{' '}
            — Live countdown to December 25 with traditions, fun facts, and planning tips.
          </li>
          <li>
            <a href="/thanksgiving" className="text-primary-600 hover:underline font-medium">
              Thanksgiving Countdown
            </a>{' '}
            — Countdowns for both US Thanksgiving (4th Thursday of November) and Canadian
            Thanksgiving (2nd Monday of October).
          </li>
          <li>
            <a href="/easter" className="text-primary-600 hover:underline font-medium">
              Easter Countdown
            </a>{' '}
            — Countdown to Easter with an explanation of why the date changes each year,
            calculated using the computus algorithm.
          </li>
          <li>
            <a href="/canada-day" className="text-primary-600 hover:underline font-medium">
              Canada Day Countdown
            </a>{' '}
            — Countdown to July 1, Canada&apos;s national day, with history and celebration ideas.
          </li>
          <li>
            <a href="/independence-day" className="text-primary-600 hover:underline font-medium">
              4th of July Countdown
            </a>{' '}
            — Countdown to Independence Day with fireworks info, history, and patriotic traditions.
          </li>
        </ul>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 pt-4">
          How We Calculate Holiday Dates
        </h2>
        <p>
          Fixed holidays like Christmas (December 25), Canada Day (July 1), and Independence Day
          (July 4) always fall on the same date. Variable holidays are calculated using standard
          algorithms: Easter uses the Anonymous Gregorian Computus, US Thanksgiving uses the
          &ldquo;4th Thursday of November&rdquo; rule, and Canadian Thanksgiving uses the
          &ldquo;2nd Monday of October&rdquo; rule. All dates automatically update to show the
          next upcoming occurrence — no manual intervention needed.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 pt-4">
          Our Approach
        </h2>
        <p>
          We believe holiday tools should be free, fast, and always accurate. HolidayCount pages
          load instantly, require no account or signup, and automatically update year references
          so the content is always current. You can add any holiday to your Google Calendar or
          download an .ics file for Apple Calendar or Outlook — all with a single click.
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 pt-4">
          Important Note
        </h2>
        <p>
          While our date calculations follow official rules used by the US and Canadian federal
          governments, holiday observance can vary by province, state, employer, or religious
          tradition. Always verify specific holiday dates and closures with your employer or
          local government.
        </p>
      </div>
    </article>
  );
}
