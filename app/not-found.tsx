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
          href="/christmas"
          className="px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          Christmas Countdown
        </a>
        <a
          href="/thanksgiving"
          className="px-6 py-3 bg-white text-primary-600 font-medium rounded-lg border border-primary-600 hover:bg-primary-50 transition-colors"
        >
          Thanksgiving Countdown
        </a>
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
        <a href="/easter" className="hover:text-primary-600 transition-colors">
          Easter Countdown
        </a>
        <a href="/canada-day" className="hover:text-primary-600 transition-colors">
          Canada Day Countdown
        </a>
        <a href="/independence-day" className="hover:text-primary-600 transition-colors">
          4th of July Countdown
        </a>
      </div>
      <div className="mt-8">
        <a href="/" className="text-sm text-primary-600 hover:underline">
          &larr; Back to Home
        </a>
      </div>
    </div>
  );
}
