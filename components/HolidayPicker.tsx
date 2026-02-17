'use client';

import { useState, useRef, useEffect } from 'react';
import type { Locale } from '@/lib/types';

interface UpcomingHoliday {
  holiday: { names: Record<Locale, string>; icon?: string; slugs: Record<Locale, string> };
  date: Date;
  countrySlug: string;
  countryFlag: string;
  daysUntil: number;
}

interface HolidayPickerProps {
  holidays: UpcomingHoliday[];
  label: string;
  locale: Locale;
  prefix: string;
}

export default function HolidayPicker({ holidays, label, locale, prefix }: HolidayPickerProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-2 text-sm font-medium text-primary-600 hover:bg-primary-50 rounded-md transition-colors flex items-center gap-1"
      >
        {label}
        <svg className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 w-72 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2 max-h-96 overflow-y-auto">
          {holidays.map((item, i) => (
            <a
              key={i}
              href={`${prefix}/${item.countrySlug}/${item.holiday.slugs[locale]}`}
              className="flex items-center gap-3 px-4 py-3 hover:bg-primary-50 transition-colors"
              onClick={() => setOpen(false)}
            >
              <span className="text-lg flex-shrink-0">{item.holiday.icon || '📅'}</span>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{item.holiday.names[locale]}</p>
                <p className="text-xs text-gray-500">{item.countryFlag} {item.daysUntil}d</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
