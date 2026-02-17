import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isValidLocale } from '@/lib/i18n';
import type { Locale } from '@/lib/types';
import { generateLandingMetadata, LandingPage } from '@/lib/pages/landing';

export const revalidate = 86400;

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'es' }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === 'en') return { title: 'Not Found' };
  return generateLandingMetadata(locale as Locale);
}

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === 'en') notFound();
  return <LandingPage locale={locale as Locale} />;
}
