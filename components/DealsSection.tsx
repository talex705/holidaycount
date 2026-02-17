'use client';

import { useState } from 'react';
import type { Locale } from '@/lib/types';
import type { DealFile } from '@/lib/deals/types';
import { DEAL_CATEGORIES } from '@/data/deals/categories';
import { getDictionary, t } from '@/lib/i18n';
import DealCard from './DealCard';

interface DealsSectionProps {
  dealFile: DealFile;
  holidayName: string;
  locale: Locale;
}

export default function DealsSection({ dealFile, holidayName, locale }: DealsSectionProps) {
  const dict = getDictionary(locale);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Only show categories that have deals
  const categoriesWithDeals = dealFile.categories.filter((c) => c.deals.length > 0);

  if (categoriesWithDeals.length === 0) return null;

  // Build the "All" mix: top 2-3 from each category
  const allDeals = categoriesWithDeals.flatMap((c) => c.deals.slice(0, 3));

  const visibleDeals = activeCategory === 'all'
    ? allDeals
    : categoriesWithDeals.find((c) => c.id === activeCategory)?.deals ?? [];

  return (
    <section className="mb-8">
      {/* FTC Disclosure */}
      <p className="text-xs text-gray-500 mb-4 leading-relaxed">
        {t(dict, 'deals.disclosure')}
      </p>

      {/* Section Header */}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
        {t(dict, 'deals.sectionTitle', { holiday: holidayName })}
      </h2>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            activeCategory === 'all'
              ? 'bg-primary-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {t(dict, 'deals.allCategories')}
        </button>
        {categoriesWithDeals.map((cat) => {
          const def = DEAL_CATEGORIES.find((d) => d.id === cat.id);
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {def?.icon} {def?.name[locale] ?? cat.id}
            </button>
          );
        })}
      </div>

      {/* Deal Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleDeals.map((deal, i) => (
          <DealCard
            key={`${deal.category}-${deal.rank}-${i}`}
            deal={deal}
            holidayId={dealFile.holidayId}
            locale={locale}
          />
        ))}
      </div>
    </section>
  );
}
