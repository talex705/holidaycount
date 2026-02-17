import type { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://holidaycount.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/christmas', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/thanksgiving', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/easter', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/canada-day', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/independence-day', priority: 0.9, changeFrequency: 'daily' as const },
    { path: '/about', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/privacy-policy', priority: 0.1, changeFrequency: 'yearly' as const },
  ];

  return pages.map((page) => ({
    url: `${BASE_URL}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
