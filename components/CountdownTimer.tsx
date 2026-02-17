'use client';

import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
  holidayName: string;
  size: 'large' | 'small';
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
}

function calculateTimeLeft(target: Date): TimeLeft {
  const now = new Date();
  // Target is end of day (23:59:59) so the holiday shows "today" all day
  const end = new Date(target);
  end.setHours(23, 59, 59, 999);
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
  return (
    date.getFullYear() === now.getFullYear() &&
    date.getMonth() === now.getMonth() &&
    date.getDate() === now.getDate()
  );
}

export default function CountdownTimer({ targetDate, holidayName, size }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetDate));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft(targetDate));

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // SSR-safe: show static placeholder until hydrated
  if (!mounted) {
    if (size === 'large') {
      return (
        <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {['Days', 'Hours', 'Minutes', 'Seconds'].map((label) => (
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
      <span className="text-sm text-gray-500 countdown-digit">Loading...</span>
    );
  }

  // Holiday is today
  if (isToday(targetDate)) {
    if (size === 'large') {
      return (
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-6 sm:p-8 lg:p-10 text-center">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Happy {holidayName}!
          </p>
          <p className="text-primary-100 mt-2 text-base sm:text-lg">
            Enjoy celebrating today!
          </p>
        </div>
      );
    }
    return (
      <span className="text-sm font-semibold text-primary-600">
        Today!
      </span>
    );
  }

  // Small/card format
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

  // Large/hero format
  const digits = [
    { value: timeLeft.days, label: 'Days' },
    { value: timeLeft.hours, label: 'Hours' },
    { value: timeLeft.minutes, label: 'Minutes' },
    { value: timeLeft.seconds, label: 'Seconds' },
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
