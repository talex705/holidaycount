import type { Locale } from '@/lib/types';

export interface Deal {
  rank: number;
  title: Record<Locale, string>;
  editorial: Record<Locale, string>;
  imageUrl: string;
  price?: string;
  merchant: string;
  merchantUrl: string;
  affiliateUrl?: string;
  category: string;
  tags: string[];
}

export interface DealCategory {
  id: string;
  name: Record<Locale, string>;
  deals: Deal[];
}

export interface DealFile {
  holidayId: string;
  lastUpdated: string;
  categories: DealCategory[];
}

export type DealCategoryId = 'gifts' | 'travel' | 'experiences' | 'food' | 'decor' | 'apparel' | 'digital';
