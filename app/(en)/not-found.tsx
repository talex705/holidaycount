import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16 sm:py-24 text-center">
      <p className="text-6xl font-bold text-primary-600">404</p>
      <h1 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
        Holiday Not Found
      </h1>
      <p className="mt-4 text-gray-600">
        The page you&apos;re looking for doesn&apos;t exist. Try one of our holiday countdowns instead:
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="/united-states"
          className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          United States Holidays
        </a>
        <a
          href="/canada"
          className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg border border-primary-600 hover:bg-primary-50 transition-colors"
        >
          Canada Holidays
        </a>
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
        <a href="/united-kingdom" className="hover:text-primary-600 transition-colors">UK Holidays</a>
        <a href="/france" className="hover:text-primary-600 transition-colors">France Holidays</a>
        <a href="/mexico" className="hover:text-primary-600 transition-colors">Mexico Holidays</a>
      </div>
      <div className="mt-8">
        <a href="/" className="text-sm text-primary-600 hover:underline">
          &larr; Back to Home
        </a>
      </div>
    </div>
  );
}
