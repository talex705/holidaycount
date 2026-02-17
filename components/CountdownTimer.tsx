'use client';

import { useState, useEffect } from 'react';
import type { Locale } from '@/lib/types';

interface CountdownTimerProps {
  targetDate: Date;
  holidayName: string;
  size: 'large' | 'small';
  locale?: Locale;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

const LABELS: Record<Locale, { days: string; hours: string; minutes: string; seconds: string; happy: string; enjoy: string; today: string; loading: string }> = {
  en: { days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds', happy: 'Happy', enjoy: 'Enjoy celebrating today!', today: 'Today!', loading: 'Loading...' },
  fr: { days: 'Jours', hours: 'Heures', minutes: 'Minutes', seconds: 'Secondes', happy: 'Joyeux', enjoy: 'Profitez de cette journée de fête !', today: "Aujourd'hui !", loading: 'Chargement...' },
  es: { days: 'Días', hours: 'Horas', minutes: 'Minutos', seconds: 'Segundos', happy: '¡Feliz', enjoy: '¡Disfruta la celebración de hoy!', today: '¡Hoy!', loading: 'Cargando...' },
};

function calculateTimeLeft(target: Date): TimeLeft {
  const now = new Date();
  // Reconstruct the target date in the user's local timezone using the UTC
  // date components (the Date was created at midnight UTC during SSG build).
  const end = new Date(
    target.getUTCFullYear(),
    target.getUTCMonth(),
    target.getUTCDate(),
    23, 59, 59, 999
  );
  const total = end.getTime() - now.getTime();

  if (total <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
  }

  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
    total,
  };
}

function isToday(date: Date): boolean {
  const now = new Date();
  // Compare the intended calendar date (UTC components) with today's local date
  return (
    date.getUTCFullYear() === now.getFullYear() &&
    date.getUTCMonth() === now.getMonth() &&
    date.getUTCDate() === now.getDate()
  );
}

export default function CountdownTimer({ targetDate, holidayName, size, locale = 'en' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetDate));
  const [mounted, setMounted] = useState(false);
  const l = LABELS[locale];

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft(targetDate));

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (!mounted) {
    if (size === 'large') {
      return (
        <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[l.days, l.hours, l.minutes, l.seconds].map((label) => (
              <div key={label} className="text-center">
                <div className="countdown-digit text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  --
                </div>
                <div className="text-xs sm:text-sm text-gray-400 mt-1 uppercase tracking-wider">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return (
      <span className="text-sm text-gray-500 countdown-digit">{l.loading}</span>
    );
  }

  if (isToday(targetDate)) {
    if (size === 'large') {
      return (
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-6 sm:p-8 lg:p-10 text-center">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            {locale === 'es' ? `${l.happy} ${holidayName}!` : `${l.happy} ${holidayName}!`}
          </p>
          <p className="text-primary-100 mt-2 text-base sm:text-lg">
            {l.enjoy}
          </p>
        </div>
      );
    }
    return (
      <span className="text-sm font-semibold text-primary-600">
        {l.today}
      </span>
    );
  }

  if (size === 'small') {
    if (timeLeft.days === 0) {
      return (
        <span className="text-sm text-gray-700 countdown-digit">
          {timeLeft.hours}h {timeLeft.minutes}m
        </span>
      );
    }
    return (
      <span className="text-sm text-gray-700 countdown-digit">
        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
      </span>
    );
  }

  const digits = [
    { value: timeLeft.days, label: l.days },
    { value: timeLeft.hours, label: l.hours },
    { value: timeLeft.minutes, label: l.minutes },
    { value: timeLeft.seconds, label: l.seconds },
  ];

  return (
    <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 lg:p-10">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
        {digits.map(({ value, label }) => (
          <div key={label} className="text-center">
            <div className="countdown-digit text-3xl sm:text-4xl lg:text-5xl font-bold text-white transition-all duration-300">
              {String(value).padStart(2, '0')}
            </div>
            <div className="text-xs sm:text-sm text-gray-400 mt-1 uppercase tracking-wider">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
