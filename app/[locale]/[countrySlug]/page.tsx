import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n';
import type { Locale } from '@/lib/types';
import {
  generateCountryStaticParams,
  generateCountryMetadata,
  CountryOverview,
} from '@/lib/pages/country-overview';

export const revalidate = 86400;

export function generateStaticParams() {
  const locales: Locale[] = ['fr', 'es'];
  return locales.flatMap((locale) =>
    generateCountryStaticParams(locale).map((p) => ({
      locale,
      ...p,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; countrySlug: string }>;
}): Promise<Metadata> {
  const { locale, countrySlug } = await params;
  if (!isValidLocale(locale) || locale === 'en') return { title: 'Not Found' };
  const meta = generateCountryMetadata({ countrySlug, locale: locale as Locale });
  if (!meta) return { title: 'Not Found' };
  return meta;
}

export default async function LocaleCountryPage({
  params,
}: {
  params: Promise<{ locale: string; countrySlug: string }>;
}) {
  const { locale, countrySlug } = await params;
  if (!isValidLocale(locale) || locale === 'en') notFound();
  const content = CountryOverview({ countrySlug, locale: locale as Locale });
  if (!content) notFound();
  return content;
}
