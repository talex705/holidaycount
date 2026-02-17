/**
 * Shared holidays — used by multiple countries.
 * Phase 1: Easter only.
 */

import type { HolidayData } from '@/lib/types';
import { getEasterDate } from './_shared-dates';

// ---------------------------------------------------------------------------
// Easter
// ---------------------------------------------------------------------------

export const easter: HolidayData = {
  id: 'shared_easter',
  countryCode: 'shared',
  slugs: { en: 'easter', fr: 'paques', es: 'semana-santa' },
  names: { en: 'Easter', fr: 'P\u00e2ques', es: 'Semana Santa' },

  dateType: 'calculated',
  calculateDate: getEasterDate,

  descriptions: {
    en: 'Easter is the most important Christian holiday, celebrating the resurrection of Jesus Christ. It falls on a different date each year, determined by a lunar calendar calculation. Easter is observed worldwide with church services, egg hunts, and family gatherings.',
    fr: 'Easter is the most important Christian holiday, celebrating the resurrection of Jesus Christ. It falls on a different date each year, determined by a lunar calendar calculation. Easter is observed worldwide with church services, egg hunts, and family gatherings.',
    es: 'Easter is the most important Christian holiday, celebrating the resurrection of Jesus Christ. It falls on a different date each year, determined by a lunar calendar calculation. Easter is observed worldwide with church services, egg hunts, and family gatherings.',
  },

  history: {
    en: `Easter commemorates the resurrection of Jesus Christ on the third day after his crucifixion, as described in the New Testament. The holiday has been celebrated since the earliest days of Christianity, with the date formalized at the First Council of Nicaea in 325 AD.\n\nThe date of Easter is calculated using the computus \u2014 it falls on the first Sunday after the first full moon occurring on or after the spring equinox (March 21). This means Easter can fall anywhere between March 22 and April 25. Many Easter traditions, including eggs and rabbits, have pre-Christian origins tied to spring fertility celebrations.`,
    fr: `Easter commemorates the resurrection of Jesus Christ on the third day after his crucifixion, as described in the New Testament. The holiday has been celebrated since the earliest days of Christianity, with the date formalized at the First Council of Nicaea in 325 AD.\n\nThe date of Easter is calculated using the computus \u2014 it falls on the first Sunday after the first full moon occurring on or after the spring equinox (March 21). This means Easter can fall anywhere between March 22 and April 25. Many Easter traditions, including eggs and rabbits, have pre-Christian origins tied to spring fertility celebrations.`,
    es: `Easter commemorates the resurrection of Jesus Christ on the third day after his crucifixion, as described in the New Testament. The holiday has been celebrated since the earliest days of Christianity, with the date formalized at the First Council of Nicaea in 325 AD.\n\nThe date of Easter is calculated using the computus \u2014 it falls on the first Sunday after the first full moon occurring on or after the spring equinox (March 21). This means Easter can fall anywhere between March 22 and April 25. Many Easter traditions, including eggs and rabbits, have pre-Christian origins tied to spring fertility celebrations.`,
  },

  traditions: {
    en: [
      'Attending Easter sunrise or morning church services',
      'Decorating and dyeing Easter eggs',
      'Organizing Easter egg hunts for children',
      'Giving Easter baskets filled with candy and small gifts',
      'Preparing a special Easter dinner (ham, lamb, or brunch)',
      'Wearing new spring clothes to Easter services',
      'Sending Easter cards and greetings',
    ],
    fr: [
      'Attending Easter sunrise or morning church services',
      'Decorating and dyeing Easter eggs',
      'Organizing Easter egg hunts for children',
      'Giving Easter baskets filled with candy and small gifts',
      'Preparing a special Easter dinner (ham, lamb, or brunch)',
      'Wearing new spring clothes to Easter services',
      'Sending Easter cards and greetings',
    ],
    es: [
      'Attending Easter sunrise or morning church services',
      'Decorating and dyeing Easter eggs',
      'Organizing Easter egg hunts for children',
      'Giving Easter baskets filled with candy and small gifts',
      'Preparing a special Easter dinner (ham, lamb, or brunch)',
      'Wearing new spring clothes to Easter services',
      'Sending Easter cards and greetings',
    ],
  },

  funFacts: {
    en: [
      'Easter can fall on any date between March 22 and April 25.',
      'Americans buy over 16 billion jellybeans for Easter each year.',
      'The White House Easter Egg Roll tradition started in 1878.',
      'The Easter Bunny tradition originated in German immigrant communities in the 1700s.',
      'Good Friday is a statutory holiday in every Canadian province.',
    ],
    fr: [
      'Easter can fall on any date between March 22 and April 25.',
      'Americans buy over 16 billion jellybeans for Easter each year.',
      'The White House Easter Egg Roll tradition started in 1878.',
      'The Easter Bunny tradition originated in German immigrant communities in the 1700s.',
      'Good Friday is a statutory holiday in every Canadian province.',
    ],
    es: [
      'Easter can fall on any date between March 22 and April 25.',
      'Americans buy over 16 billion jellybeans for Easter each year.',
      'The White House Easter Egg Roll tradition started in 1878.',
      'The Easter Bunny tradition originated in German immigrant communities in the 1700s.',
      'Good Friday is a statutory holiday in every Canadian province.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the Easter date early \u2014 it changes every year',
      'Plan Easter brunch or dinner menu',
      'Buy supplies for egg decorating and egg hunts',
      'Prepare Easter baskets for children',
      'Reserve restaurant tables early if dining out',
    ],
    fr: [
      'Check the Easter date early \u2014 it changes every year',
      'Plan Easter brunch or dinner menu',
      'Buy supplies for egg decorating and egg hunts',
      'Prepare Easter baskets for children',
      'Reserve restaurant tables early if dining out',
    ],
    es: [
      'Check the Easter date early \u2014 it changes every year',
      'Plan Easter brunch or dinner menu',
      'Buy supplies for egg decorating and egg hunts',
      'Prepare Easter baskets for children',
      'Reserve restaurant tables early if dining out',
    ],
  },

  relatedHolidays: ['shared_easter'],

  seo: {
    en: {
      titleTemplate: 'Easter {year} \u2014 Date, Countdown & Celebration Guide',
      descriptionTemplate:
        'When is Easter {year}? Live countdown timer, why Easter changes dates, traditions, and celebration guide.',
      keywords: [
        'when is Easter',
        'Easter date',
        'Easter countdown',
        'why does Easter change dates',
        'Easter traditions',
      ],
    },
    fr: {
      titleTemplate: 'Easter {year} \u2014 Date, Countdown & Celebration Guide',
      descriptionTemplate:
        'When is Easter {year}? Live countdown timer, why Easter changes dates, traditions, and celebration guide.',
      keywords: [
        'when is Easter',
        'Easter date',
        'Easter countdown',
        'why does Easter change dates',
        'Easter traditions',
      ],
    },
    es: {
      titleTemplate: 'Easter {year} \u2014 Date, Countdown & Celebration Guide',
      descriptionTemplate:
        'When is Easter {year}? Live countdown timer, why Easter changes dates, traditions, and celebration guide.',
      keywords: [
        'when is Easter',
        'Easter date',
        'Easter countdown',
        'why does Easter change dates',
        'Easter traditions',
      ],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Easter {year}?',
        fr: 'When is Easter {year}?',
        es: 'When is Easter {year}?',
      },
      answer: {
        en: 'Easter {year} falls on {date}. Easter is always on a Sunday, but the exact date changes each year based on a lunar calendar calculation.',
        fr: 'Easter {year} falls on {date}. Easter is always on a Sunday, but the exact date changes each year based on a lunar calendar calculation.',
        es: 'Easter {year} falls on {date}. Easter is always on a Sunday, but the exact date changes each year based on a lunar calendar calculation.',
      },
    },
    {
      question: {
        en: 'Why does Easter change dates every year?',
        fr: 'Why does Easter change dates every year?',
        es: 'Why does Easter change dates every year?',
      },
      answer: {
        en: 'Easter is calculated using the computus algorithm: it falls on the first Sunday after the first full moon on or after March 21 (the ecclesiastical spring equinox). Because the lunar cycle doesn\'t align with the solar calendar, Easter can fall on any Sunday between March 22 and April 25.',
        fr: 'Easter is calculated using the computus algorithm: it falls on the first Sunday after the first full moon on or after March 21 (the ecclesiastical spring equinox). Because the lunar cycle doesn\'t align with the solar calendar, Easter can fall on any Sunday between March 22 and April 25.',
        es: 'Easter is calculated using the computus algorithm: it falls on the first Sunday after the first full moon on or after March 21 (the ecclesiastical spring equinox). Because the lunar cycle doesn\'t align with the solar calendar, Easter can fall on any Sunday between March 22 and April 25.',
      },
    },
    {
      question: {
        en: 'What is Good Friday?',
        fr: 'What is Good Friday?',
        es: 'What is Good Friday?',
      },
      answer: {
        en: 'Good Friday is the Friday before Easter Sunday, commemorating the crucifixion of Jesus Christ. It is a statutory holiday in all Canadian provinces and a public holiday in many countries around the world. Many businesses and schools close for Good Friday.',
        fr: 'Good Friday is the Friday before Easter Sunday, commemorating the crucifixion of Jesus Christ. It is a statutory holiday in all Canadian provinces and a public holiday in many countries around the world. Many businesses and schools close for Good Friday.',
        es: 'Good Friday is the Friday before Easter Sunday, commemorating the crucifixion of Jesus Christ. It is a statutory holiday in all Canadian provinces and a public holiday in many countries around the world. Many businesses and schools close for Good Friday.',
      },
    },
    {
      question: {
        en: 'Is Easter Monday a holiday?',
        fr: 'Is Easter Monday a holiday?',
        es: 'Is Easter Monday a holiday?',
      },
      answer: {
        en: 'Easter Monday is a public holiday in many countries, including the United Kingdom, Canada (federal), Australia, and much of Europe. In the United States, Easter Monday is not a federal holiday, though some states and organizations observe it.',
        fr: 'Easter Monday is a public holiday in many countries, including the United Kingdom, Canada (federal), Australia, and much of Europe. In the United States, Easter Monday is not a federal holiday, though some states and organizations observe it.',
        es: 'Easter Monday is a public holiday in many countries, including the United Kingdom, Canada (federal), Australia, and much of Europe. In the United States, Easter Monday is not a federal holiday, though some states and organizations observe it.',
      },
    },
  ],

  colorTheme: 'easter',
  icon: '\ud83d\udc30',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

export const SHARED_HOLIDAYS: HolidayData[] = [easter];
