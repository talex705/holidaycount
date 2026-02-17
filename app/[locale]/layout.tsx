import { notFound } from 'next/navigation';
import { isValidLocale, getDictionary } from '@/lib/i18n';
import type { Locale } from '@/lib/types';

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'es' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === 'en') {
    notFound();
  }

  const dict = getDictionary(locale as Locale);
  const prefix = `/${locale}`;

  return (
    <>
      <Header locale={locale as Locale} dict={dict} prefix={prefix} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale as Locale} dict={dict} prefix={prefix} />
    </>
  );
}

function Header({ locale, dict, prefix }: { locale: Locale; dict: Record<string, string>; prefix: string }) {
  const langLabel = locale.toUpperCase();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <a href={prefix} className="text-lg font-bold sm:text-xl text-primary-600">
            HolidayCount
          </a>
          <div className="hidden md:flex gap-1">
            <a href={`${prefix}/${locale === 'fr' ? 'etats-unis' : 'estados-unidos'}`} className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors">
              {locale === 'fr' ? 'États-Unis' : 'Estados Unidos'}
            </a>
            <a href={`${prefix}/canada`} className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors">
              {locale === 'fr' ? 'Canada' : 'Canadá'}
            </a>
            <a href={`${prefix}/${locale === 'fr' ? 'royaume-uni' : 'reino-unido'}`} className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors">
              {locale === 'fr' ? 'Royaume-Uni' : 'Reino Unido'}
            </a>
            <a href={`${prefix}/${locale === 'fr' ? 'france' : 'francia'}`} className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors">
              {locale === 'fr' ? 'France' : 'Francia'}
            </a>
            <a href={`${prefix}/about`} className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors">
              {dict['nav.about']}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-sm">
              <a href="/" className={`${locale === 'en' ? 'font-medium text-primary-600' : 'text-gray-500 hover:text-primary-600'} transition-colors`}>EN</a>
              <span className="text-gray-300">|</span>
              <a href="/fr" className={`${locale === 'fr' ? 'font-medium text-primary-600' : 'text-gray-500 hover:text-primary-600'} transition-colors`}>FR</a>
              <span className="text-gray-300">|</span>
              <a href="/es" className={`${locale === 'es' ? 'font-medium text-primary-600' : 'text-gray-500 hover:text-primary-600'} transition-colors`}>ES</a>
            </div>
            <div className="md:hidden">
              <details className="relative">
                <summary className="list-none p-2 cursor-pointer" aria-label="Open menu">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </summary>
                <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2">
                  <a href={prefix} className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600">{dict['nav.home']}</a>
                  <a href={`${prefix}/${locale === 'fr' ? 'etats-unis' : 'estados-unidos'}`} className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                    {locale === 'fr' ? 'États-Unis' : 'Estados Unidos'}
                  </a>
                  <a href={`${prefix}/canada`} className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                    {locale === 'fr' ? 'Canada' : 'Canadá'}
                  </a>
                  <a href={`${prefix}/about`} className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-primary-50 hover:text-primary-600">{dict['nav.about']}</a>
                </div>
              </details>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

function Footer({ locale, dict, prefix }: { locale: Locale; dict: Record<string, string>; prefix: string }) {
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
            <a href={`${prefix}/${locale === 'fr' ? 'etats-unis' : 'estados-unidos'}`} className="hover:text-primary-600 transition-colors">
              {locale === 'fr' ? 'États-Unis' : 'Estados Unidos'}
            </a>
            <a href={`${prefix}/canada`} className="hover:text-primary-600 transition-colors">
              {locale === 'fr' ? 'Canada' : 'Canadá'}
            </a>
            <a href={`${prefix}/${locale === 'fr' ? 'royaume-uni' : 'reino-unido'}`} className="hover:text-primary-600 transition-colors">
              {locale === 'fr' ? 'Royaume-Uni' : 'Reino Unido'}
            </a>
          </nav>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row sm:justify-between gap-4 text-sm text-gray-400">
          <p>&copy; {year} HolidayCount. {dict['footer.allRightsReserved']}</p>
          <div className="flex gap-6">
            <a href={`${prefix}/privacy-policy`} className="hover:text-gray-600 transition-colors">{dict['nav.privacyPolicy']}</a>
            <a href={`${prefix}/about`} className="hover:text-gray-600 transition-colors">{dict['nav.about']}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
