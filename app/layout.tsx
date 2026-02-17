import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
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
    'Live countdown timers for holidays worldwide. See how many days until Christmas, Thanksgiving, Easter, and 150+ holidays across 45 countries.',
  keywords: [
    'holiday countdown',
    'days until Christmas',
    'days until Thanksgiving',
    'when is Easter',
    'holiday calendar',
    'world holidays',
    'upcoming holidays',
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
        {children}
      </body>
    </html>
  );
}
