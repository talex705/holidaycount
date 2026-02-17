export interface HolidayTheme {
  gradient: string;
  accent: string;
  badge: string;
}

export const HOLIDAY_THEMES: Record<string, HolidayTheme> = {
  christmas: {
    gradient: 'from-red-600 to-green-700',
    accent: 'text-red-600',
    badge: 'bg-red-50 text-red-700',
  },
  easter: {
    gradient: 'from-purple-500 to-yellow-400',
    accent: 'text-purple-600',
    badge: 'bg-purple-50 text-purple-700',
  },
  independence: {
    gradient: 'from-blue-600 to-red-600',
    accent: 'text-blue-600',
    badge: 'bg-blue-50 text-blue-700',
  },
  harvest: {
    gradient: 'from-orange-500 to-yellow-600',
    accent: 'text-orange-600',
    badge: 'bg-orange-50 text-orange-700',
  },
  spring: {
    gradient: 'from-green-400 to-pink-400',
    accent: 'text-green-600',
    badge: 'bg-green-50 text-green-700',
  },
  cultural: {
    gradient: 'from-indigo-500 to-amber-500',
    accent: 'text-indigo-600',
    badge: 'bg-indigo-50 text-indigo-700',
  },
  memorial: {
    gradient: 'from-gray-600 to-blue-700',
    accent: 'text-gray-600',
    badge: 'bg-gray-50 text-gray-700',
  },
  carnival: {
    gradient: 'from-purple-600 to-yellow-400',
    accent: 'text-purple-600',
    badge: 'bg-purple-50 text-purple-700',
  },
  default: {
    gradient: 'from-primary-500 to-primary-600',
    accent: 'text-primary-600',
    badge: 'bg-primary-50 text-primary-700',
  },
};

export function getTheme(themeKey?: string): HolidayTheme {
  return HOLIDAY_THEMES[themeKey ?? 'default'] ?? HOLIDAY_THEMES.default;
}
