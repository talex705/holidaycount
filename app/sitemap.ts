import type { MetadataRoute } from 'next';
import { COUNTRIES } from '@/data/countries';
import { getAllHolidayRoutes } from '@/data/holidays';
import type { Locale } from '@/lib/types';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://holidaycount.com';
const LOCALES: Locale[] = ['en', 'fr', 'es'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Landing pages
  entries.push({
    url: BASE_URL,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 1.0,
  });
  for (const locale of ['fr', 'es'] as const) {
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });
  }

  // Country pages
  for (const country of COUNTRIES) {
    for (const locale of LOCALES) {
      const prefix = locale === 'en' ? '' : `/${locale}`;
      entries.push({
        url: `${BASE_URL}${prefix}/${country.slugs[locale]}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    }
  }

  // Holiday pages
  for (const locale of LOCALES) {
    const routes = getAllHolidayRoutes(locale);
    const prefix = locale === 'en' ? '' : `/${locale}`;
    for (const route of routes) {
      entries.push({
        url: `${BASE_URL}${prefix}/${route.countrySlug}/${route.holidaySlug}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.9,
      });
    }
  }

  // Static pages
  const staticPages = [
    { path: '/about', priority: 0.3 },
    { path: '/privacy-policy', priority: 0.1 },
  ];
  for (const page of staticPages) {
    entries.push({
      url: `${BASE_URL}${page.path}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: page.priority,
    });
    for (const locale of ['fr', 'es'] as const) {
      entries.push({
        url: `${BASE_URL}/${locale}${page.path}`,
        lastModified: new Date(),
        changeFrequency: 'yearly' as const,
        priority: page.priority,
      });
    }
  }

  return entries;
}
