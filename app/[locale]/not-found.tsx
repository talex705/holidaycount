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
        Page Not Found
      </h1>
      <p className="mt-4 text-gray-600">
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <div className="mt-8">
        <a href="/" className="text-sm text-primary-600 hover:underline">
          &larr; Back to Home
        </a>
      </div>
    </div>
  );
}
