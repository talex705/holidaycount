import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'HolidayCount privacy policy. Learn how we handle your data, use cookies, and protect your privacy.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <a href="/" className="hover:text-primary-600">Home</a>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Privacy Policy</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: February 2026</p>

      <div className="mt-6 space-y-6 text-gray-700 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
        <p>
          HolidayCount (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to
          protecting your privacy. This policy explains what information we collect, how we use
          it, and your rights regarding your data.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">Information We Collect</h2>
        <p>
          <strong>Countdown timers:</strong> All countdown calculations are performed entirely in
          your browser. We do not collect, transmit, or store any personal data. The timers are
          purely client-side JavaScript running on your device.
        </p>
        <p>
          <strong>Analytics data:</strong> We use Google Analytics 4 (GA4) to collect anonymous
          usage data, including pages visited, time on site, device type, browser type, and
          general geographic region. This data does not identify you personally.
        </p>
        <p>
          <strong>Local storage:</strong> We may use your browser&apos;s localStorage to remember
          preferences such as country filter (US, Canada, or both) for a better experience on
          return visits. This data never leaves your device.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">Advertising</h2>
        <p>
          We use Google AdSense to display advertisements. Google may use cookies and web beacons
          to serve ads based on your prior visits to this or other websites. You can opt out of
          personalized advertising by visiting{' '}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:underline"
          >
            Google&apos;s Ads Settings
          </a>.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">Cookies</h2>
        <p>
          We use first-party cookies for analytics and third-party cookies for advertising.
          You can control cookie preferences through your browser settings. Disabling cookies
          will not affect the functionality of our countdown timers.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">Third-Party Services</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Google Analytics 4 — anonymous usage tracking</li>
          <li>Google AdSense — advertising</li>
          <li>Vercel — website hosting</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900">Your Rights</h2>
        <p>
          You have the right to: access your data, request deletion, opt out of analytics
          tracking, and disable cookies. Since we do not collect personal data, there is no
          personal data to delete from our servers.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">Children&apos;s Privacy</h2>
        <p>
          HolidayCount is not directed at children under 13. We do not knowingly collect personal
          information from children.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">Changes to This Policy</h2>
        <p>
          We may update this privacy policy periodically. Changes will be posted on this page
          with an updated revision date.
        </p>

        <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
        <p>
          If you have questions about this privacy policy, please contact us through our website.
        </p>
      </div>
    </article>
  );
}
