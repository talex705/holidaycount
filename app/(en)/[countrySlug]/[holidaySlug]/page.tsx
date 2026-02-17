import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  generateHolidayStaticParams,
  generateHolidayMetadata,
  HolidayDetail,
} from '@/lib/pages/holiday-detail';

export const revalidate = 86400;

export function generateStaticParams() {
  return generateHolidayStaticParams('en');
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ countrySlug: string; holidaySlug: string }>;
}): Promise<Metadata> {
  return params.then(({ countrySlug, holidaySlug }) => {
    const meta = generateHolidayMetadata({ countrySlug, holidaySlug, locale: 'en' });
    if (!meta) return { title: 'Not Found' };
    return meta;
  });
}

export default async function HolidayPage({
  params,
}: {
  params: Promise<{ countrySlug: string; holidaySlug: string }>;
}) {
  const { countrySlug, holidaySlug } = await params;
  const content = HolidayDetail({ countrySlug, holidaySlug, locale: 'en' });
  if (!content) notFound();
  return content;
}
