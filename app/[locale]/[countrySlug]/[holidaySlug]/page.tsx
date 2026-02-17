import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n';
import type { Locale } from '@/lib/types';
import {
  generateHolidayStaticParams,
  generateHolidayMetadata,
  HolidayDetail,
} from '@/lib/pages/holiday-detail';

export const revalidate = 86400;

export function generateStaticParams() {
  const locales: Locale[] = ['fr', 'es'];
  return locales.flatMap((locale) =>
    generateHolidayStaticParams(locale).map((p) => ({
      locale,
      ...p,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; countrySlug: string; holidaySlug: string }>;
}): Promise<Metadata> {
  const { locale, countrySlug, holidaySlug } = await params;
  if (!isValidLocale(locale) || locale === 'en') return { title: 'Not Found' };
  const meta = generateHolidayMetadata({ countrySlug, holidaySlug, locale: locale as Locale });
  if (!meta) return { title: 'Not Found' };
  return meta;
}

export default async function LocaleHolidayPage({
  params,
}: {
  params: Promise<{ locale: string; countrySlug: string; holidaySlug: string }>;
}) {
  const { locale, countrySlug, holidaySlug } = await params;
  if (!isValidLocale(locale) || locale === 'en') notFound();
  const content = HolidayDetail({ countrySlug, holidaySlug, locale: locale as Locale });
  if (!content) notFound();
  return content;
}
