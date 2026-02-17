import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://holidaycount.com'),
  title: {
    default: 'HolidayCount — Countdown to Every Holiday',
    template: '%s | HolidayCount',
  },
  description:
    'Live countdown timers for every US and Canadian holiday. See how many days until Christmas, Thanksgiving, Easter, Canada Day, Independence Day, and more.',
  keywords: [
    'holiday countdown',
    'days until Christmas',
    'days until Thanksgiving',
    'when is Easter',
    'Canada Day countdown',
    '4th of July countdown',
    'upcoming holidays',
    'holiday calendar',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'HolidayCount',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900 font-sans antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <a href="/" className="text-lg font-bold sm:text-xl text-primary-600">
            HolidayCount
          </a>
          <div className="hidden md:flex gap-1">
            <a href="/christmas" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors">Christmas</a>
            <a href="/thanksgiving" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors">Thanksgiving</a>
            <a href="/easter" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors">Easter</a>
            <a href="/canada-day" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors">Canada Day</a>
            <a href="/independence-day" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors">4th of July</a>
          </div>
          <MobileMenuButton />
        </div>
      </nav>
    </header>
  );
}

function MobileMenuButton() {
  return (
    <div className="md:hidden">
      <MobileMenu />
    </div>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
          <div>
            <p className="text-lg font-bold text-primary-600">HolidayCount</p>
            <p className="text-sm text-gray-500 mt-1">Countdown to every holiday</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
            <a href="/christmas" className="hover:text-primary-600 transition-colors">Christmas</a>
            <a href="/thanksgiving" className="hover:text-primary-600 transition-colors">Thanksgiving</a>
            <a href="/easter" className="hover:text-primary-600 transition-colors">Easter</a>
            <a href="/canada-day" className="hover:text-primary-600 transition-colors">Canada Day</a>
            <a href="/independence-day" className="hover:text-primary-600 transition-colors">4th of July</a>
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row sm:justify-between gap-4 text-sm text-gray-400">
          <p>&copy; {year} HolidayCount. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
            <a href="/about" className="hover:text-gray-600 transition-colors">About</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function MobileMenu() {
  return (
    <details className="relative">
      <summary className="list-none p-2 cursor-pointer" aria-label="Open menu">
        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </summary>
      <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2">
        <a href="/" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600">Home</a>
        <a href="/christmas" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600">Christmas</a>
        <a href="/thanksgiving" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600">Thanksgiving</a>
        <a href="/easter" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600">Easter</a>
        <a href="/canada-day" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600">Canada Day</a>
        <a href="/independence-day" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600">4th of July</a>
      </div>
    </details>
  );
}
