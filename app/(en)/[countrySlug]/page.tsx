import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  generateCountryStaticParams,
  generateCountryMetadata,
  CountryOverview,
} from '@/lib/pages/country-overview';

export const revalidate = 86400;

export function generateStaticParams() {
  return generateCountryStaticParams('en');
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ countrySlug: string }>;
}): Promise<Metadata> {
  return params.then(({ countrySlug }) => {
    const meta = generateCountryMetadata({ countrySlug, locale: 'en' });
    if (!meta) return { title: 'Not Found' };
    return meta;
  });
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ countrySlug: string }>;
}) {
  const { countrySlug } = await params;
  const content = CountryOverview({ countrySlug, locale: 'en' });
  if (!content) notFound();
  return content;
}
