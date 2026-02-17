import type { Locale } from '@/lib/types';
import type { DealCategoryId } from '@/lib/deals/types';

export interface CategoryDefinition {
  id: DealCategoryId;
  name: Record<Locale, string>;
  icon: string;
}

export const DEAL_CATEGORIES: CategoryDefinition[] = [
  { id: 'gifts',       icon: '🎁', name: { en: 'Gifts',            fr: 'Cadeaux',              es: 'Regalos' } },
  { id: 'travel',      icon: '✈️', name: { en: 'Travel',           fr: 'Voyages',              es: 'Viajes' } },
  { id: 'experiences', icon: '🎭', name: { en: 'Experiences',      fr: 'Expériences',          es: 'Experiencias' } },
  { id: 'food',        icon: '🍽️', name: { en: 'Food & Dining',    fr: 'Gastronomie',          es: 'Gastronomía' } },
  { id: 'decor',       icon: '🏠', name: { en: 'Décor',            fr: 'Décoration',           es: 'Decoración' } },
  { id: 'apparel',     icon: '👗', name: { en: 'Apparel',          fr: 'Mode',                 es: 'Moda' } },
  { id: 'digital',     icon: '💻', name: { en: 'Digital Products', fr: 'Produits numériques',  es: 'Productos digitales' } },
];

export function getCategoryById(id: string): CategoryDefinition | undefined {
  return DEAL_CATEGORIES.find((c) => c.id === id);
}
