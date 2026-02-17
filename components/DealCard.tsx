'use client';

import type { Locale } from '@/lib/types';
import type { Deal } from '@/lib/deals/types';
import { toAffiliateLink } from '@/lib/affiliate';
import { getDictionary, t } from '@/lib/i18n';
import { getCategoryById } from '@/data/deals/categories';

interface DealCardProps {
  deal: Deal;
  holidayId: string;
  locale: Locale;
}

export default function DealCard({ deal, holidayId, locale }: DealCardProps) {
  const dict = getDictionary(locale);
  const category = getCategoryById(deal.category);
  const affiliateUrl = toAffiliateLink(deal.merchantUrl, {
    holidayId,
    category: deal.category,
    rank: deal.rank,
    locale,
  });

  return (
    <div className="group rounded-xl border border-gray-200 bg-white overflow-hidden transition-all duration-200 hover:shadow-lg hover:border-primary-200">
      {/* Image */}
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        {deal.imageUrl ? (
          <img
            src={deal.imageUrl}
            alt={deal.title[locale]}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">
            {category?.icon || '🛍️'}
          </div>
        )}
        {/* Category tag */}
        {category && (
          <span className="absolute top-2 left-2 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-md text-xs font-medium text-gray-700">
            {category.icon} {category.name[locale]}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-900 line-clamp-2">
          {deal.title[locale]}
        </h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">
          {deal.editorial[locale]}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <div>
            {deal.price && (
              <span className="text-lg font-bold text-gray-900">{deal.price}</span>
            )}
            <p className="text-xs text-gray-500">{deal.merchant}</p>
          </div>
        </div>

        <a
          href={affiliateUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-3 block w-full text-center px-4 py-2.5 min-h-[44px] bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
        >
          {t(dict, 'deals.viewDeal')}
        </a>
      </div>
    </div>
  );
}
