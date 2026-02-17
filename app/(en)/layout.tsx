import { getDictionary } from '@/lib/i18n';
import { getUpcomingHolidays } from '@/data/holidays';
import { getCountryByCode } from '@/data/countries';
import HolidayPicker from '@/components/HolidayPicker';

const dict = getDictionary('en');

export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}

function Header() {
  const upcoming = getUpcomingHolidays(8).map((item) => {
    const country = getCountryByCode(item.holiday.countryCode);
    const now = new Date();
    const daysUntil = Math.ceil((item.date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    return {
      holiday: { names: item.holiday.names, icon: item.holiday.icon, slugs: item.holiday.slugs },
      date: item.date,
      countrySlug: country?.slugs.en || '',
      countryFlag: country?.flag || '',
      daysUntil,
    };
  });

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <a href="/" className="text-lg font-bold sm:text-xl text-primary-600">
            HolidayCount
          </a>
          <div className="hidden md:flex gap-1">
            <a href="/united-states" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors">US</a>
            <a href="/canada" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors">Canada</a>
            <a href="/united-kingdom" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors">UK</a>
            <a href="/france" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors">France</a>
            <a href="/mexico" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors">Mexico</a>
            <a href="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors">About</a>
            <HolidayPicker holidays={upcoming} label="Deals" locale="en" prefix="" />
          </div>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <MobileMenuButton />
          </div>
        </div>
      </nav>
    </header>
  );
}

function LanguageSwitcher() {
  return (
    <div className="flex items-center gap-1 text-sm">
      <span className="font-medium text-primary-600">EN</span>
      <span className="text-gray-300">|</span>
      <a href="/fr" className="text-gray-500 hover:text-primary-600 transition-colors">FR</a>
      <span className="text-gray-300">|</span>
      <a href="/es" className="text-gray-500 hover:text-primary-600 transition-colors">ES</a>
    </div>
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
            <p className="text-sm text-gray-500 mt-1">{dict['site.tagline']}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-600">
            <a href="/united-states" className="hover:text-primary-600 transition-colors">United States</a>
            <a href="/canada" className="hover:text-primary-600 transition-colors">Canada</a>
            <a href="/united-kingdom" className="hover:text-primary-600 transition-colors">United Kingdom</a>
            <a href="/france" className="hover:text-primary-600 transition-colors">France</a>
            <a href="/mexico" className="hover:text-primary-600 transition-colors">Mexico</a>
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row sm:justify-between gap-4 text-sm text-gray-400">
          <p>&copy; {year} HolidayCount. {dict['footer.allRightsReserved']}</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-gray-600 transition-colors">{dict['nav.privacyPolicy']}</a>
            <a href="/about" className="hover:text-gray-600 transition-colors">{dict['nav.about']}</a>
            <a href="/affiliate-disclosure" className="hover:text-gray-600 transition-colors">Affiliate Disclosure</a>
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
        <a href="/united-states" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600">United States</a>
        <a href="/canada" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600">Canada</a>
        <a href="/united-kingdom" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600">United Kingdom</a>
        <a href="/france" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600">France</a>
        <a href="/mexico" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600">Mexico</a>
        <a href="/about" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600">About</a>
      </div>
    </details>
  );
}
