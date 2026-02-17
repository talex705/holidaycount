/**
 * United Kingdom holidays data.
 */

import type { HolidayData } from '@/lib/types';
import {
  getGoodFriday,
  getEasterMonday,
  getEarlyMayBankHoliday,
  getSpringBankHoliday,
  getSummerBankHoliday,
} from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'gb_new-years-day',
  countryCode: 'gb',
  slugs: { en: 'new-years-day', fr: 'new-years-day', es: 'new-years-day' },
  names: { en: "New Year's Day", fr: "New Year's Day", es: "New Year's Day" },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 marks the start of the calendar year in the United Kingdom. It is a bank holiday across England, Wales, Scotland, and Northern Ireland, celebrated with fireworks, parties, and traditions to welcome the new year.",
    fr: "New Year's Day on January 1 marks the start of the calendar year in the United Kingdom. It is a bank holiday across England, Wales, Scotland, and Northern Ireland, celebrated with fireworks, parties, and traditions to welcome the new year.",
    es: "New Year's Day on January 1 marks the start of the calendar year in the United Kingdom. It is a bank holiday across England, Wales, Scotland, and Northern Ireland, celebrated with fireworks, parties, and traditions to welcome the new year.",
  },

  history: {
    en: "New Year's Day became a bank holiday in England, Wales, and Northern Ireland in 1974. Scotland had already observed January 1 and 2 as public holidays for much longer. The famous London New Year's Eve fireworks display over the Thames has become one of the most watched celebrations in the world.",
    fr: "New Year's Day became a bank holiday in England, Wales, and Northern Ireland in 1974. Scotland had already observed January 1 and 2 as public holidays for much longer. The famous London New Year's Eve fireworks display over the Thames has become one of the most watched celebrations in the world.",
    es: "New Year's Day became a bank holiday in England, Wales, and Northern Ireland in 1974. Scotland had already observed January 1 and 2 as public holidays for much longer. The famous London New Year's Eve fireworks display over the Thames has become one of the most watched celebrations in the world.",
  },

  traditions: {
    en: [
      'Watching the London New Year\'s Eve fireworks over the River Thames',
      'Singing "Auld Lang Syne" at midnight',
      'Making New Year\'s resolutions',
      'Attending Hogmanay celebrations in Scotland',
      'Watching the New Year\'s Day Parade in London',
      'Having a first-footing tradition in Scotland \u2014 the first person to enter a home after midnight brings good luck',
    ],
    fr: [
      'Watching the London New Year\'s Eve fireworks over the River Thames',
      'Singing "Auld Lang Syne" at midnight',
      'Making New Year\'s resolutions',
      'Attending Hogmanay celebrations in Scotland',
      'Watching the New Year\'s Day Parade in London',
      'Having a first-footing tradition in Scotland \u2014 the first person to enter a home after midnight brings good luck',
    ],
    es: [
      'Watching the London New Year\'s Eve fireworks over the River Thames',
      'Singing "Auld Lang Syne" at midnight',
      'Making New Year\'s resolutions',
      'Attending Hogmanay celebrations in Scotland',
      'Watching the New Year\'s Day Parade in London',
      'Having a first-footing tradition in Scotland \u2014 the first person to enter a home after midnight brings good luck',
    ],
  },

  funFacts: {
    en: [
      'The London NYE fireworks cost approximately \u00a32.5 million to produce each year.',
      '"Auld Lang Syne" was written by Scottish poet Robert Burns in 1788.',
      'Scotland\'s Hogmanay celebration in Edinburgh is one of the largest New Year\'s events in the world, attracting over 100,000 people.',
    ],
    fr: [
      'The London NYE fireworks cost approximately \u00a32.5 million to produce each year.',
      '"Auld Lang Syne" was written by Scottish poet Robert Burns in 1788.',
      'Scotland\'s Hogmanay celebration in Edinburgh is one of the largest New Year\'s events in the world, attracting over 100,000 people.',
    ],
    es: [
      'The London NYE fireworks cost approximately \u00a32.5 million to produce each year.',
      '"Auld Lang Syne" was written by Scottish poet Robert Burns in 1788.',
      'Scotland\'s Hogmanay celebration in Edinburgh is one of the largest New Year\'s events in the world, attracting over 100,000 people.',
    ],
  },

  planningChecklist: {
    en: [
      'Book NYE party or event tickets well in advance',
      'Plan travel and accommodation if attending London or Edinburgh celebrations',
      'Stock up on food and drinks for hosting a gathering',
    ],
    fr: [
      'Book NYE party or event tickets well in advance',
      'Plan travel and accommodation if attending London or Edinburgh celebrations',
      'Stock up on food and drinks for hosting a gathering',
    ],
    es: [
      'Book NYE party or event tickets well in advance',
      'Plan travel and accommodation if attending London or Edinburgh celebrations',
      'Stock up on food and drinks for hosting a gathering',
    ],
  },

  relatedHolidays: ['gb_christmas-day', 'gb_boxing-day'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} UK \u2014 Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year}? Live countdown to January 1, UK bank holiday info, and celebration guide.",
      keywords: ["New Year's Day UK", 'bank holiday January', 'UK New Year', "New Year's Day countdown"],
    },
    fr: {
      titleTemplate: "New Year's Day {year} UK \u2014 Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year}? Live countdown to January 1, UK bank holiday info, and celebration guide.",
      keywords: ["New Year's Day UK", 'bank holiday January', 'UK New Year', "New Year's Day countdown"],
    },
    es: {
      titleTemplate: "New Year's Day {year} UK \u2014 Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year}? Live countdown to January 1, UK bank holiday info, and celebration guide.",
      keywords: ["New Year's Day UK", 'bank holiday January', 'UK New Year', "New Year's Day countdown"],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year}?", fr: "When is New Year's Day {year}?", es: "When is New Year's Day {year}?" },
      answer: {
        en: "New Year's Day {year} is on {date}. It is always January 1. If it falls on a weekend, the bank holiday is moved to the next working day.",
        fr: "New Year's Day {year} is on {date}. It is always January 1. If it falls on a weekend, the bank holiday is moved to the next working day.",
        es: "New Year's Day {year} is on {date}. It is always January 1. If it falls on a weekend, the bank holiday is moved to the next working day.",
      },
    },
    {
      question: { en: "Is New Year's Day a bank holiday in the UK?", fr: "Is New Year's Day a bank holiday in the UK?", es: "Is New Year's Day a bank holiday in the UK?" },
      answer: {
        en: "Yes, New Year's Day is a bank holiday across the entire United Kingdom. Scotland also observes January 2 as an additional bank holiday.",
        fr: "Yes, New Year's Day is a bank holiday across the entire United Kingdom. Scotland also observes January 2 as an additional bank holiday.",
        es: "Yes, New Year's Day is a bank holiday across the entire United Kingdom. Scotland also observes January 2 as an additional bank holiday.",
      },
    },
    {
      question: { en: 'What is Hogmanay?', fr: 'What is Hogmanay?', es: 'What is Hogmanay?' },
      answer: {
        en: "Hogmanay is the Scots word for the last day of the year (December 31). It is Scotland's traditional New Year celebration, known for its large street parties, fireworks, and the custom of first-footing.",
        fr: "Hogmanay is the Scots word for the last day of the year (December 31). It is Scotland's traditional New Year celebration, known for its large street parties, fireworks, and the custom of first-footing.",
        es: "Hogmanay is the Scots word for the last day of the year (December 31). It is Scotland's traditional New Year celebration, known for its large street parties, fireworks, and the custom of first-footing.",
      },
    },
  ],

  colorTheme: 'new-year',
  icon: '\ud83c\udf89',
};

// ---------------------------------------------------------------------------
// Good Friday
// ---------------------------------------------------------------------------

const goodFriday: HolidayData = {
  id: 'gb_good-friday',
  countryCode: 'gb',
  slugs: { en: 'good-friday', fr: 'good-friday', es: 'good-friday' },
  names: { en: 'Good Friday', fr: 'Good Friday', es: 'Good Friday' },

  dateType: 'calculated',
  calculateDate: getGoodFriday,

  descriptions: {
    en: 'Good Friday is a bank holiday in the United Kingdom, observed on the Friday before Easter Sunday. It commemorates the crucifixion of Jesus Christ and is one of the most solemn days in the Christian calendar.',
    fr: 'Good Friday is a bank holiday in the United Kingdom, observed on the Friday before Easter Sunday. It commemorates the crucifixion of Jesus Christ and is one of the most solemn days in the Christian calendar.',
    es: 'Good Friday is a bank holiday in the United Kingdom, observed on the Friday before Easter Sunday. It commemorates the crucifixion of Jesus Christ and is one of the most solemn days in the Christian calendar.',
  },

  history: {
    en: 'Good Friday has been observed as a day of mourning and fasting since the earliest centuries of Christianity. In England, it has been a public holiday since at least 1871 under the Bank Holidays Act. The day marks the crucifixion and death of Jesus at Calvary, as recorded in the Gospels.',
    fr: 'Good Friday has been observed as a day of mourning and fasting since the earliest centuries of Christianity. In England, it has been a public holiday since at least 1871 under the Bank Holidays Act. The day marks the crucifixion and death of Jesus at Calvary, as recorded in the Gospels.',
    es: 'Good Friday has been observed as a day of mourning and fasting since the earliest centuries of Christianity. In England, it has been a public holiday since at least 1871 under the Bank Holidays Act. The day marks the crucifixion and death of Jesus at Calvary, as recorded in the Gospels.',
  },

  traditions: {
    en: [
      'Attending church services and Stations of the Cross',
      'Eating hot cross buns \u2014 a British Good Friday tradition dating back centuries',
      'Fasting or abstaining from meat',
      'Flying kites in Bermuda and some British Caribbean territories',
    ],
    fr: [
      'Attending church services and Stations of the Cross',
      'Eating hot cross buns \u2014 a British Good Friday tradition dating back centuries',
      'Fasting or abstaining from meat',
      'Flying kites in Bermuda and some British Caribbean territories',
    ],
    es: [
      'Attending church services and Stations of the Cross',
      'Eating hot cross buns \u2014 a British Good Friday tradition dating back centuries',
      'Fasting or abstaining from meat',
      'Flying kites in Bermuda and some British Caribbean territories',
    ],
  },

  funFacts: {
    en: [
      'Hot cross buns have been associated with Good Friday in England since at least the 16th century.',
      'Good Friday is one of only two common-law holidays in England and Wales (the other is Christmas Day).',
      'Until 1996, most shops in England and Wales were required by law to close on Good Friday.',
    ],
    fr: [
      'Hot cross buns have been associated with Good Friday in England since at least the 16th century.',
      'Good Friday is one of only two common-law holidays in England and Wales (the other is Christmas Day).',
      'Until 1996, most shops in England and Wales were required by law to close on Good Friday.',
    ],
    es: [
      'Hot cross buns have been associated with Good Friday in England since at least the 16th century.',
      'Good Friday is one of only two common-law holidays in England and Wales (the other is Christmas Day).',
      'Until 1996, most shops in England and Wales were required by law to close on Good Friday.',
    ],
  },

  planningChecklist: {
    en: [
      'Check Easter dates early \u2014 Good Friday moves with Easter each year',
      'Plan for a long weekend as Easter Monday is also a bank holiday',
      'Stock up on hot cross buns from your favourite bakery',
    ],
    fr: [
      'Check Easter dates early \u2014 Good Friday moves with Easter each year',
      'Plan for a long weekend as Easter Monday is also a bank holiday',
      'Stock up on hot cross buns from your favourite bakery',
    ],
    es: [
      'Check Easter dates early \u2014 Good Friday moves with Easter each year',
      'Plan for a long weekend as Easter Monday is also a bank holiday',
      'Stock up on hot cross buns from your favourite bakery',
    ],
  },

  relatedHolidays: ['shared_easter', 'gb_easter-monday'],

  seo: {
    en: {
      titleTemplate: 'Good Friday {year} UK \u2014 Date, Countdown & Info',
      descriptionTemplate: 'When is Good Friday {year}? Live countdown, bank holiday info, traditions, and history for the UK.',
      keywords: ['Good Friday UK', 'Good Friday date', 'Good Friday bank holiday', 'when is Good Friday'],
    },
    fr: {
      titleTemplate: 'Good Friday {year} UK \u2014 Date, Countdown & Info',
      descriptionTemplate: 'When is Good Friday {year}? Live countdown, bank holiday info, traditions, and history for the UK.',
      keywords: ['Good Friday UK', 'Good Friday date', 'Good Friday bank holiday', 'when is Good Friday'],
    },
    es: {
      titleTemplate: 'Good Friday {year} UK \u2014 Date, Countdown & Info',
      descriptionTemplate: 'When is Good Friday {year}? Live countdown, bank holiday info, traditions, and history for the UK.',
      keywords: ['Good Friday UK', 'Good Friday date', 'Good Friday bank holiday', 'when is Good Friday'],
    },
  },

  faq: [
    {
      question: { en: 'When is Good Friday {year}?', fr: 'When is Good Friday {year}?', es: 'When is Good Friday {year}?' },
      answer: {
        en: 'Good Friday {year} falls on {date}. It is always the Friday before Easter Sunday and its date changes each year.',
        fr: 'Good Friday {year} falls on {date}. It is always the Friday before Easter Sunday and its date changes each year.',
        es: 'Good Friday {year} falls on {date}. It is always the Friday before Easter Sunday and its date changes each year.',
      },
    },
    {
      question: { en: 'Is Good Friday a bank holiday in the UK?', fr: 'Is Good Friday a bank holiday in the UK?', es: 'Is Good Friday a bank holiday in the UK?' },
      answer: {
        en: 'Yes, Good Friday is a bank holiday in England, Wales, and Northern Ireland. In Scotland, it is not a traditional bank holiday but is widely observed by employers.',
        fr: 'Yes, Good Friday is a bank holiday in England, Wales, and Northern Ireland. In Scotland, it is not a traditional bank holiday but is widely observed by employers.',
        es: 'Yes, Good Friday is a bank holiday in England, Wales, and Northern Ireland. In Scotland, it is not a traditional bank holiday but is widely observed by employers.',
      },
    },
    {
      question: { en: 'Why is it called Good Friday?', fr: 'Why is it called Good Friday?', es: 'Why is it called Good Friday?' },
      answer: {
        en: 'The origin of the name is debated. One theory is that "good" is an older meaning of "holy." Others suggest it derives from "God\'s Friday" (Gottes Freitag in German). Despite the sombre nature of the day, "good" reflects the belief that the crucifixion led to the redemption of humanity.',
        fr: 'The origin of the name is debated. One theory is that "good" is an older meaning of "holy." Others suggest it derives from "God\'s Friday" (Gottes Freitag in German). Despite the sombre nature of the day, "good" reflects the belief that the crucifixion led to the redemption of humanity.',
        es: 'The origin of the name is debated. One theory is that "good" is an older meaning of "holy." Others suggest it derives from "God\'s Friday" (Gottes Freitag in German). Despite the sombre nature of the day, "good" reflects the belief that the crucifixion led to the redemption of humanity.',
      },
    },
  ],

  colorTheme: 'easter',
  icon: '\u271d\ufe0f',
};

// ---------------------------------------------------------------------------
// Easter Monday
// ---------------------------------------------------------------------------

const easterMonday: HolidayData = {
  id: 'gb_easter-monday',
  countryCode: 'gb',
  slugs: { en: 'easter-monday', fr: 'easter-monday', es: 'easter-monday' },
  names: { en: 'Easter Monday', fr: 'Easter Monday', es: 'Easter Monday' },

  dateType: 'calculated',
  calculateDate: getEasterMonday,

  descriptions: {
    en: 'Easter Monday is a bank holiday in England, Wales, and Northern Ireland, falling the day after Easter Sunday. It extends the Easter weekend and is enjoyed as a day of relaxation, family outings, and spring activities.',
    fr: 'Easter Monday is a bank holiday in England, Wales, and Northern Ireland, falling the day after Easter Sunday. It extends the Easter weekend and is enjoyed as a day of relaxation, family outings, and spring activities.',
    es: 'Easter Monday is a bank holiday in England, Wales, and Northern Ireland, falling the day after Easter Sunday. It extends the Easter weekend and is enjoyed as a day of relaxation, family outings, and spring activities.',
  },

  history: {
    en: 'Easter Monday has been a bank holiday in England, Wales, and Northern Ireland since the Bank Holidays Act of 1871. Historically, it was associated with egg rolling games, outdoor fairs, and community events. The tradition of a four-day Easter weekend (Good Friday to Easter Monday) remains one of the most popular holiday periods in the UK.',
    fr: 'Easter Monday has been a bank holiday in England, Wales, and Northern Ireland since the Bank Holidays Act of 1871. Historically, it was associated with egg rolling games, outdoor fairs, and community events. The tradition of a four-day Easter weekend (Good Friday to Easter Monday) remains one of the most popular holiday periods in the UK.',
    es: 'Easter Monday has been a bank holiday in England, Wales, and Northern Ireland since the Bank Holidays Act of 1871. Historically, it was associated with egg rolling games, outdoor fairs, and community events. The tradition of a four-day Easter weekend (Good Friday to Easter Monday) remains one of the most popular holiday periods in the UK.',
  },

  traditions: {
    en: [
      'Enjoying a long Easter weekend with family',
      'Egg rolling competitions, particularly in northern England',
      'Visiting National Trust properties and gardens',
      'Taking day trips to the countryside or seaside',
    ],
    fr: [
      'Enjoying a long Easter weekend with family',
      'Egg rolling competitions, particularly in northern England',
      'Visiting National Trust properties and gardens',
      'Taking day trips to the countryside or seaside',
    ],
    es: [
      'Enjoying a long Easter weekend with family',
      'Egg rolling competitions, particularly in northern England',
      'Visiting National Trust properties and gardens',
      'Taking day trips to the countryside or seaside',
    ],
  },

  funFacts: {
    en: [
      'The Preston egg rolling event at Avenham Park is one of the oldest Easter Monday traditions in England.',
      'Easter Monday is not a bank holiday in Scotland, though many Scottish employers give the day off.',
      'The four-day Easter weekend is one of the busiest travel periods of the year in the UK.',
    ],
    fr: [
      'The Preston egg rolling event at Avenham Park is one of the oldest Easter Monday traditions in England.',
      'Easter Monday is not a bank holiday in Scotland, though many Scottish employers give the day off.',
      'The four-day Easter weekend is one of the busiest travel periods of the year in the UK.',
    ],
    es: [
      'The Preston egg rolling event at Avenham Park is one of the oldest Easter Monday traditions in England.',
      'Easter Monday is not a bank holiday in Scotland, though many Scottish employers give the day off.',
      'The four-day Easter weekend is one of the busiest travel periods of the year in the UK.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan your Easter weekend getaway early \u2014 hotels and trains book up fast',
      'Check opening hours for attractions, as some may have special Easter schedules',
      'Prepare outdoor activities in case of good spring weather',
    ],
    fr: [
      'Plan your Easter weekend getaway early \u2014 hotels and trains book up fast',
      'Check opening hours for attractions, as some may have special Easter schedules',
      'Prepare outdoor activities in case of good spring weather',
    ],
    es: [
      'Plan your Easter weekend getaway early \u2014 hotels and trains book up fast',
      'Check opening hours for attractions, as some may have special Easter schedules',
      'Prepare outdoor activities in case of good spring weather',
    ],
  },

  relatedHolidays: ['shared_easter', 'gb_good-friday'],

  seo: {
    en: {
      titleTemplate: 'Easter Monday {year} UK \u2014 Date, Countdown & Info',
      descriptionTemplate: 'When is Easter Monday {year}? Live countdown, bank holiday details, and things to do over the Easter weekend in the UK.',
      keywords: ['Easter Monday UK', 'Easter Monday date', 'Easter bank holiday', 'when is Easter Monday'],
    },
    fr: {
      titleTemplate: 'Easter Monday {year} UK \u2014 Date, Countdown & Info',
      descriptionTemplate: 'When is Easter Monday {year}? Live countdown, bank holiday details, and things to do over the Easter weekend in the UK.',
      keywords: ['Easter Monday UK', 'Easter Monday date', 'Easter bank holiday', 'when is Easter Monday'],
    },
    es: {
      titleTemplate: 'Easter Monday {year} UK \u2014 Date, Countdown & Info',
      descriptionTemplate: 'When is Easter Monday {year}? Live countdown, bank holiday details, and things to do over the Easter weekend in the UK.',
      keywords: ['Easter Monday UK', 'Easter Monday date', 'Easter bank holiday', 'when is Easter Monday'],
    },
  },

  faq: [
    {
      question: { en: 'When is Easter Monday {year}?', fr: 'When is Easter Monday {year}?', es: 'When is Easter Monday {year}?' },
      answer: {
        en: 'Easter Monday {year} falls on {date}. It is the day after Easter Sunday and its date changes each year.',
        fr: 'Easter Monday {year} falls on {date}. It is the day after Easter Sunday and its date changes each year.',
        es: 'Easter Monday {year} falls on {date}. It is the day after Easter Sunday and its date changes each year.',
      },
    },
    {
      question: { en: 'Is Easter Monday a bank holiday in Scotland?', fr: 'Is Easter Monday a bank holiday in Scotland?', es: 'Is Easter Monday a bank holiday in Scotland?' },
      answer: {
        en: 'Easter Monday is not an official bank holiday in Scotland. However, many Scottish employers choose to give employees the day off, and schools are typically on Easter break.',
        fr: 'Easter Monday is not an official bank holiday in Scotland. However, many Scottish employers choose to give employees the day off, and schools are typically on Easter break.',
        es: 'Easter Monday is not an official bank holiday in Scotland. However, many Scottish employers choose to give employees the day off, and schools are typically on Easter break.',
      },
    },
    {
      question: { en: 'What is open on Easter Monday in the UK?', fr: 'What is open on Easter Monday in the UK?', es: 'What is open on Easter Monday in the UK?' },
      answer: {
        en: 'Most shops, restaurants, and tourist attractions are open on Easter Monday, though some may operate on reduced hours. Banks and government offices are closed. Supermarkets typically open but may have shorter hours.',
        fr: 'Most shops, restaurants, and tourist attractions are open on Easter Monday, though some may operate on reduced hours. Banks and government offices are closed. Supermarkets typically open but may have shorter hours.',
        es: 'Most shops, restaurants, and tourist attractions are open on Easter Monday, though some may operate on reduced hours. Banks and government offices are closed. Supermarkets typically open but may have shorter hours.',
      },
    },
  ],

  colorTheme: 'easter',
  icon: '\ud83d\udc23',
};

// ---------------------------------------------------------------------------
// Early May Bank Holiday — 1st Monday of May
// ---------------------------------------------------------------------------

const earlyMayBankHoliday: HolidayData = {
  id: 'gb_early-may-bank-holiday',
  countryCode: 'gb',
  slugs: { en: 'early-may-bank-holiday', fr: 'early-may-bank-holiday', es: 'early-may-bank-holiday' },
  names: { en: 'Early May Bank Holiday', fr: 'Early May Bank Holiday', es: 'Early May Bank Holiday' },

  dateType: 'calculated',
  calculateDate: getEarlyMayBankHoliday,

  descriptions: {
    en: 'The Early May Bank Holiday falls on the first Monday of May in the United Kingdom. It is associated with traditional May Day celebrations, including maypole dancing, Morris dancing, and the arrival of spring.',
    fr: 'The Early May Bank Holiday falls on the first Monday of May in the United Kingdom. It is associated with traditional May Day celebrations, including maypole dancing, Morris dancing, and the arrival of spring.',
    es: 'The Early May Bank Holiday falls on the first Monday of May in the United Kingdom. It is associated with traditional May Day celebrations, including maypole dancing, Morris dancing, and the arrival of spring.',
  },

  history: {
    en: 'The first Monday in May became a bank holiday in the UK in 1978. May Day celebrations in Britain have much older roots, stretching back to medieval spring festivals and pagan Beltane traditions. The date is also associated with International Workers\' Day, observed on May 1 in many countries.',
    fr: 'The first Monday in May became a bank holiday in the UK in 1978. May Day celebrations in Britain have much older roots, stretching back to medieval spring festivals and pagan Beltane traditions. The date is also associated with International Workers\' Day, observed on May 1 in many countries.',
    es: 'The first Monday in May became a bank holiday in the UK in 1978. May Day celebrations in Britain have much older roots, stretching back to medieval spring festivals and pagan Beltane traditions. The date is also associated with International Workers\' Day, observed on May 1 in many countries.',
  },

  traditions: {
    en: [
      'Dancing around the maypole in village greens',
      'Morris dancing performances',
      'Crowning a May Queen',
      'Gathering flowers and greenery to decorate homes',
      'Attending local fairs and fetes',
    ],
    fr: [
      'Dancing around the maypole in village greens',
      'Morris dancing performances',
      'Crowning a May Queen',
      'Gathering flowers and greenery to decorate homes',
      'Attending local fairs and fetes',
    ],
    es: [
      'Dancing around the maypole in village greens',
      'Morris dancing performances',
      'Crowning a May Queen',
      'Gathering flowers and greenery to decorate homes',
      'Attending local fairs and fetes',
    ],
  },

  funFacts: {
    en: [
      'The Early May Bank Holiday was moved to May 8 in 1995 and 2020 to mark the 50th and 75th anniversaries of VE Day.',
      'Maypole dancing dates back to at least the 14th century in England.',
      'Morris dancing, a traditional English folk dance, is a staple of May Day festivities across the country.',
    ],
    fr: [
      'The Early May Bank Holiday was moved to May 8 in 1995 and 2020 to mark the 50th and 75th anniversaries of VE Day.',
      'Maypole dancing dates back to at least the 14th century in England.',
      'Morris dancing, a traditional English folk dance, is a staple of May Day festivities across the country.',
    ],
    es: [
      'The Early May Bank Holiday was moved to May 8 in 1995 and 2020 to mark the 50th and 75th anniversaries of VE Day.',
      'Maypole dancing dates back to at least the 14th century in England.',
      'Morris dancing, a traditional English folk dance, is a staple of May Day festivities across the country.',
    ],
  },

  planningChecklist: {
    en: [
      'Check if the date has been moved for a special occasion this year',
      'Look for local May Day events, fairs, and Morris dancing displays',
      'Plan a spring outing to enjoy the warmer weather',
    ],
    fr: [
      'Check if the date has been moved for a special occasion this year',
      'Look for local May Day events, fairs, and Morris dancing displays',
      'Plan a spring outing to enjoy the warmer weather',
    ],
    es: [
      'Check if the date has been moved for a special occasion this year',
      'Look for local May Day events, fairs, and Morris dancing displays',
      'Plan a spring outing to enjoy the warmer weather',
    ],
  },

  relatedHolidays: ['gb_spring-bank-holiday'],

  seo: {
    en: {
      titleTemplate: 'Early May Bank Holiday {year} UK \u2014 Date & Countdown',
      descriptionTemplate: 'When is the Early May Bank Holiday {year}? Live countdown, May Day traditions, and things to do in the UK.',
      keywords: ['May bank holiday UK', 'May Day UK', 'Early May Bank Holiday date', 'when is May Day'],
    },
    fr: {
      titleTemplate: 'Early May Bank Holiday {year} UK \u2014 Date & Countdown',
      descriptionTemplate: 'When is the Early May Bank Holiday {year}? Live countdown, May Day traditions, and things to do in the UK.',
      keywords: ['May bank holiday UK', 'May Day UK', 'Early May Bank Holiday date', 'when is May Day'],
    },
    es: {
      titleTemplate: 'Early May Bank Holiday {year} UK \u2014 Date & Countdown',
      descriptionTemplate: 'When is the Early May Bank Holiday {year}? Live countdown, May Day traditions, and things to do in the UK.',
      keywords: ['May bank holiday UK', 'May Day UK', 'Early May Bank Holiday date', 'when is May Day'],
    },
  },

  faq: [
    {
      question: { en: 'When is the Early May Bank Holiday {year}?', fr: 'When is the Early May Bank Holiday {year}?', es: 'When is the Early May Bank Holiday {year}?' },
      answer: {
        en: 'The Early May Bank Holiday {year} falls on {date}. It is usually the first Monday of May, but can be moved for special commemorations.',
        fr: 'The Early May Bank Holiday {year} falls on {date}. It is usually the first Monday of May, but can be moved for special commemorations.',
        es: 'The Early May Bank Holiday {year} falls on {date}. It is usually the first Monday of May, but can be moved for special commemorations.',
      },
    },
    {
      question: { en: 'What is May Day?', fr: 'What is May Day?', es: 'What is May Day?' },
      answer: {
        en: 'May Day (May 1) is a traditional spring festival with roots in ancient pagan celebrations marking the beginning of summer. In the UK, the bank holiday falls on the first Monday of May rather than fixed to May 1.',
        fr: 'May Day (May 1) is a traditional spring festival with roots in ancient pagan celebrations marking the beginning of summer. In the UK, the bank holiday falls on the first Monday of May rather than fixed to May 1.',
        es: 'May Day (May 1) is a traditional spring festival with roots in ancient pagan celebrations marking the beginning of summer. In the UK, the bank holiday falls on the first Monday of May rather than fixed to May 1.',
      },
    },
    {
      question: { en: 'Has the May bank holiday ever been moved?', fr: 'Has the May bank holiday ever been moved?', es: 'Has the May bank holiday ever been moved?' },
      answer: {
        en: 'Yes, the government has moved it on several occasions. It was shifted to May 8 in both 1995 and 2020 to mark the 50th and 75th anniversaries of VE Day, respectively.',
        fr: 'Yes, the government has moved it on several occasions. It was shifted to May 8 in both 1995 and 2020 to mark the 50th and 75th anniversaries of VE Day, respectively.',
        es: 'Yes, the government has moved it on several occasions. It was shifted to May 8 in both 1995 and 2020 to mark the 50th and 75th anniversaries of VE Day, respectively.',
      },
    },
  ],

  colorTheme: 'spring',
  icon: '\ud83c\udf3a',
};

// ---------------------------------------------------------------------------
// Spring Bank Holiday — Last Monday of May
// ---------------------------------------------------------------------------

const springBankHoliday: HolidayData = {
  id: 'gb_spring-bank-holiday',
  countryCode: 'gb',
  slugs: { en: 'spring-bank-holiday', fr: 'spring-bank-holiday', es: 'spring-bank-holiday' },
  names: { en: 'Spring Bank Holiday', fr: 'Spring Bank Holiday', es: 'Spring Bank Holiday' },

  dateType: 'calculated',
  calculateDate: getSpringBankHoliday,

  descriptions: {
    en: 'The Spring Bank Holiday falls on the last Monday of May in the United Kingdom. Originally known as Whit Monday, it marks the unofficial start of summer and is a popular time for outdoor events, village fetes, and half-term family breaks.',
    fr: 'The Spring Bank Holiday falls on the last Monday of May in the United Kingdom. Originally known as Whit Monday, it marks the unofficial start of summer and is a popular time for outdoor events, village fetes, and half-term family breaks.',
    es: 'The Spring Bank Holiday falls on the last Monday of May in the United Kingdom. Originally known as Whit Monday, it marks the unofficial start of summer and is a popular time for outdoor events, village fetes, and half-term family breaks.',
  },

  history: {
    en: 'The Spring Bank Holiday replaced the Whit Monday holiday in 1971 under the Banking and Financial Dealings Act. Whit Monday was tied to the moveable Christian feast of Pentecost, but the government chose to fix the bank holiday to the last Monday of May for consistency. It has occasionally been moved, such as in 2002, 2012, and 2022 for royal jubilee celebrations.',
    fr: 'The Spring Bank Holiday replaced the Whit Monday holiday in 1971 under the Banking and Financial Dealings Act. Whit Monday was tied to the moveable Christian feast of Pentecost, but the government chose to fix the bank holiday to the last Monday of May for consistency. It has occasionally been moved, such as in 2002, 2012, and 2022 for royal jubilee celebrations.',
    es: 'The Spring Bank Holiday replaced the Whit Monday holiday in 1971 under the Banking and Financial Dealings Act. Whit Monday was tied to the moveable Christian feast of Pentecost, but the government chose to fix the bank holiday to the last Monday of May for consistency. It has occasionally been moved, such as in 2002, 2012, and 2022 for royal jubilee celebrations.',
  },

  traditions: {
    en: [
      'Attending the Chelsea Flower Show, which takes place around this time',
      'Enjoying village fetes with games, stalls, and cream teas',
      'Going on half-term family holidays and day trips',
      'Watching or participating in local sporting events and fun runs',
    ],
    fr: [
      'Attending the Chelsea Flower Show, which takes place around this time',
      'Enjoying village fetes with games, stalls, and cream teas',
      'Going on half-term family holidays and day trips',
      'Watching or participating in local sporting events and fun runs',
    ],
    es: [
      'Attending the Chelsea Flower Show, which takes place around this time',
      'Enjoying village fetes with games, stalls, and cream teas',
      'Going on half-term family holidays and day trips',
      'Watching or participating in local sporting events and fun runs',
    ],
  },

  funFacts: {
    en: [
      'The Spring Bank Holiday was moved to early June in 2002, 2012, and 2022 to create extended weekends for the Queen\'s Golden, Diamond, and Platinum Jubilees.',
      'Before 1971, Whit Monday (the day after Pentecost) served as the late May holiday, but its date varied each year.',
      'The Spring Bank Holiday weekend is one of the busiest for UK domestic tourism.',
    ],
    fr: [
      'The Spring Bank Holiday was moved to early June in 2002, 2012, and 2022 to create extended weekends for the Queen\'s Golden, Diamond, and Platinum Jubilees.',
      'Before 1971, Whit Monday (the day after Pentecost) served as the late May holiday, but its date varied each year.',
      'The Spring Bank Holiday weekend is one of the busiest for UK domestic tourism.',
    ],
    es: [
      'The Spring Bank Holiday was moved to early June in 2002, 2012, and 2022 to create extended weekends for the Queen\'s Golden, Diamond, and Platinum Jubilees.',
      'Before 1971, Whit Monday (the day after Pentecost) served as the late May holiday, but its date varied each year.',
      'The Spring Bank Holiday weekend is one of the busiest for UK domestic tourism.',
    ],
  },

  planningChecklist: {
    en: [
      'Book half-term holiday accommodation early \u2014 it fills up fast',
      'Check if the date has been moved for any special occasion this year',
      'Plan outdoor activities and prepare for changeable late-May weather',
    ],
    fr: [
      'Book half-term holiday accommodation early \u2014 it fills up fast',
      'Check if the date has been moved for any special occasion this year',
      'Plan outdoor activities and prepare for changeable late-May weather',
    ],
    es: [
      'Book half-term holiday accommodation early \u2014 it fills up fast',
      'Check if the date has been moved for any special occasion this year',
      'Plan outdoor activities and prepare for changeable late-May weather',
    ],
  },

  relatedHolidays: ['gb_early-may-bank-holiday', 'gb_summer-bank-holiday'],

  seo: {
    en: {
      titleTemplate: 'Spring Bank Holiday {year} UK \u2014 Date & Countdown',
      descriptionTemplate: 'When is the Spring Bank Holiday {year}? Live countdown, history, and things to do over the late May bank holiday weekend.',
      keywords: ['Spring Bank Holiday UK', 'late May bank holiday', 'Whit Monday', 'when is Spring Bank Holiday'],
    },
    fr: {
      titleTemplate: 'Spring Bank Holiday {year} UK \u2014 Date & Countdown',
      descriptionTemplate: 'When is the Spring Bank Holiday {year}? Live countdown, history, and things to do over the late May bank holiday weekend.',
      keywords: ['Spring Bank Holiday UK', 'late May bank holiday', 'Whit Monday', 'when is Spring Bank Holiday'],
    },
    es: {
      titleTemplate: 'Spring Bank Holiday {year} UK \u2014 Date & Countdown',
      descriptionTemplate: 'When is the Spring Bank Holiday {year}? Live countdown, history, and things to do over the late May bank holiday weekend.',
      keywords: ['Spring Bank Holiday UK', 'late May bank holiday', 'Whit Monday', 'when is Spring Bank Holiday'],
    },
  },

  faq: [
    {
      question: { en: 'When is the Spring Bank Holiday {year}?', fr: 'When is the Spring Bank Holiday {year}?', es: 'When is the Spring Bank Holiday {year}?' },
      answer: {
        en: 'The Spring Bank Holiday {year} falls on {date}. It is normally the last Monday of May, but can be moved for special occasions.',
        fr: 'The Spring Bank Holiday {year} falls on {date}. It is normally the last Monday of May, but can be moved for special occasions.',
        es: 'The Spring Bank Holiday {year} falls on {date}. It is normally the last Monday of May, but can be moved for special occasions.',
      },
    },
    {
      question: { en: 'What replaced Whit Monday?', fr: 'What replaced Whit Monday?', es: 'What replaced Whit Monday?' },
      answer: {
        en: 'The Spring Bank Holiday replaced Whit Monday in 1971. Whit Monday was tied to the date of Pentecost and moved each year, so the government fixed the holiday to the last Monday of May for predictability.',
        fr: 'The Spring Bank Holiday replaced Whit Monday in 1971. Whit Monday was tied to the date of Pentecost and moved each year, so the government fixed the holiday to the last Monday of May for predictability.',
        es: 'The Spring Bank Holiday replaced Whit Monday in 1971. Whit Monday was tied to the date of Pentecost and moved each year, so the government fixed the holiday to the last Monday of May for predictability.',
      },
    },
    {
      question: { en: 'Can the Spring Bank Holiday be moved?', fr: 'Can the Spring Bank Holiday be moved?', es: 'Can the Spring Bank Holiday be moved?' },
      answer: {
        en: 'Yes. The UK government can move bank holidays by royal proclamation. The Spring Bank Holiday was shifted to early June in 2002, 2012, and 2022 for the Queen\'s jubilee celebrations.',
        fr: 'Yes. The UK government can move bank holidays by royal proclamation. The Spring Bank Holiday was shifted to early June in 2002, 2012, and 2022 for the Queen\'s jubilee celebrations.',
        es: 'Yes. The UK government can move bank holidays by royal proclamation. The Spring Bank Holiday was shifted to early June in 2002, 2012, and 2022 for the Queen\'s jubilee celebrations.',
      },
    },
  ],

  colorTheme: 'spring',
  icon: '\ud83c\udf1e',
};

// ---------------------------------------------------------------------------
// Summer Bank Holiday — Last Monday of August
// ---------------------------------------------------------------------------

const summerBankHoliday: HolidayData = {
  id: 'gb_summer-bank-holiday',
  countryCode: 'gb',
  slugs: { en: 'summer-bank-holiday', fr: 'summer-bank-holiday', es: 'summer-bank-holiday' },
  names: { en: 'Summer Bank Holiday', fr: 'Summer Bank Holiday', es: 'Summer Bank Holiday' },

  dateType: 'calculated',
  calculateDate: getSummerBankHoliday,

  descriptions: {
    en: 'The Summer Bank Holiday falls on the last Monday of August in England, Wales, and Northern Ireland. In Scotland, it is observed on the first Monday of August. It marks the end of summer and is one of the busiest weekends for travel and outdoor events.',
    fr: 'The Summer Bank Holiday falls on the last Monday of August in England, Wales, and Northern Ireland. In Scotland, it is observed on the first Monday of August. It marks the end of summer and is one of the busiest weekends for travel and outdoor events.',
    es: 'The Summer Bank Holiday falls on the last Monday of August in England, Wales, and Northern Ireland. In Scotland, it is observed on the first Monday of August. It marks the end of summer and is one of the busiest weekends for travel and outdoor events.',
  },

  history: {
    en: 'The August bank holiday was originally the first Monday of August across the UK when it was introduced by the Bank Holidays Act 1871. In 1971, it was moved to the last Monday of August for England, Wales, and Northern Ireland under the Banking and Financial Dealings Act. Scotland retained the first Monday of August.',
    fr: 'The August bank holiday was originally the first Monday of August across the UK when it was introduced by the Bank Holidays Act 1871. In 1971, it was moved to the last Monday of August for England, Wales, and Northern Ireland under the Banking and Financial Dealings Act. Scotland retained the first Monday of August.',
    es: 'The August bank holiday was originally the first Monday of August across the UK when it was introduced by the Bank Holidays Act 1871. In 1971, it was moved to the last Monday of August for England, Wales, and Northern Ireland under the Banking and Financial Dealings Act. Scotland retained the first Monday of August.',
  },

  traditions: {
    en: [
      'Attending the Notting Hill Carnival in London \u2014 Europe\'s largest street festival',
      'Heading to the seaside or countryside for a long weekend',
      'Attending music festivals and outdoor concerts',
      'Enjoying barbecues and garden parties',
    ],
    fr: [
      'Attending the Notting Hill Carnival in London \u2014 Europe\'s largest street festival',
      'Heading to the seaside or countryside for a long weekend',
      'Attending music festivals and outdoor concerts',
      'Enjoying barbecues and garden parties',
    ],
    es: [
      'Attending the Notting Hill Carnival in London \u2014 Europe\'s largest street festival',
      'Heading to the seaside or countryside for a long weekend',
      'Attending music festivals and outdoor concerts',
      'Enjoying barbecues and garden parties',
    ],
  },

  funFacts: {
    en: [
      'The Notting Hill Carnival, held over the August bank holiday weekend, attracts over 2 million visitors.',
      'The Summer Bank Holiday weekend sees some of the worst traffic jams of the year on UK motorways.',
      'Scotland celebrates its summer bank holiday on the first Monday of August, several weeks before the rest of the UK.',
    ],
    fr: [
      'The Notting Hill Carnival, held over the August bank holiday weekend, attracts over 2 million visitors.',
      'The Summer Bank Holiday weekend sees some of the worst traffic jams of the year on UK motorways.',
      'Scotland celebrates its summer bank holiday on the first Monday of August, several weeks before the rest of the UK.',
    ],
    es: [
      'The Notting Hill Carnival, held over the August bank holiday weekend, attracts over 2 million visitors.',
      'The Summer Bank Holiday weekend sees some of the worst traffic jams of the year on UK motorways.',
      'Scotland celebrates its summer bank holiday on the first Monday of August, several weeks before the rest of the UK.',
    ],
  },

  planningChecklist: {
    en: [
      'Book travel and accommodation well in advance for the bank holiday rush',
      'Check Notting Hill Carnival dates and road closures if in London',
      'Plan outdoor activities but have a rainy-day backup',
    ],
    fr: [
      'Book travel and accommodation well in advance for the bank holiday rush',
      'Check Notting Hill Carnival dates and road closures if in London',
      'Plan outdoor activities but have a rainy-day backup',
    ],
    es: [
      'Book travel and accommodation well in advance for the bank holiday rush',
      'Check Notting Hill Carnival dates and road closures if in London',
      'Plan outdoor activities but have a rainy-day backup',
    ],
  },

  relatedHolidays: ['gb_spring-bank-holiday'],

  seo: {
    en: {
      titleTemplate: 'Summer Bank Holiday {year} UK \u2014 Date & Countdown',
      descriptionTemplate: 'When is the Summer Bank Holiday {year}? Live countdown, Notting Hill Carnival info, and things to do over the August bank holiday.',
      keywords: ['Summer Bank Holiday UK', 'August bank holiday', 'Notting Hill Carnival', 'when is bank holiday August'],
    },
    fr: {
      titleTemplate: 'Summer Bank Holiday {year} UK \u2014 Date & Countdown',
      descriptionTemplate: 'When is the Summer Bank Holiday {year}? Live countdown, Notting Hill Carnival info, and things to do over the August bank holiday.',
      keywords: ['Summer Bank Holiday UK', 'August bank holiday', 'Notting Hill Carnival', 'when is bank holiday August'],
    },
    es: {
      titleTemplate: 'Summer Bank Holiday {year} UK \u2014 Date & Countdown',
      descriptionTemplate: 'When is the Summer Bank Holiday {year}? Live countdown, Notting Hill Carnival info, and things to do over the August bank holiday.',
      keywords: ['Summer Bank Holiday UK', 'August bank holiday', 'Notting Hill Carnival', 'when is bank holiday August'],
    },
  },

  faq: [
    {
      question: { en: 'When is the Summer Bank Holiday {year}?', fr: 'When is the Summer Bank Holiday {year}?', es: 'When is the Summer Bank Holiday {year}?' },
      answer: {
        en: 'The Summer Bank Holiday {year} in England, Wales, and Northern Ireland falls on {date}. In Scotland, the summer bank holiday is the first Monday of August.',
        fr: 'The Summer Bank Holiday {year} in England, Wales, and Northern Ireland falls on {date}. In Scotland, the summer bank holiday is the first Monday of August.',
        es: 'The Summer Bank Holiday {year} in England, Wales, and Northern Ireland falls on {date}. In Scotland, the summer bank holiday is the first Monday of August.',
      },
    },
    {
      question: { en: 'Why is the Scottish bank holiday different?', fr: 'Why is the Scottish bank holiday different?', es: 'Why is the Scottish bank holiday different?' },
      answer: {
        en: 'When the August bank holiday was moved from the first to the last Monday of August in 1971, Scotland chose to keep the original first-Monday date. The two nations have had different August bank holiday dates ever since.',
        fr: 'When the August bank holiday was moved from the first to the last Monday of August in 1971, Scotland chose to keep the original first-Monday date. The two nations have had different August bank holiday dates ever since.',
        es: 'When the August bank holiday was moved from the first to the last Monday of August in 1971, Scotland chose to keep the original first-Monday date. The two nations have had different August bank holiday dates ever since.',
      },
    },
    {
      question: { en: 'What is the Notting Hill Carnival?', fr: 'What is the Notting Hill Carnival?', es: 'What is the Notting Hill Carnival?' },
      answer: {
        en: 'The Notting Hill Carnival is an annual Caribbean-themed festival held in west London over the August bank holiday weekend. It began in 1966 and has grown into Europe\'s largest street festival, featuring parades, steel bands, sound systems, and Caribbean food stalls.',
        fr: 'The Notting Hill Carnival is an annual Caribbean-themed festival held in west London over the August bank holiday weekend. It began in 1966 and has grown into Europe\'s largest street festival, featuring parades, steel bands, sound systems, and Caribbean food stalls.',
        es: 'The Notting Hill Carnival is an annual Caribbean-themed festival held in west London over the August bank holiday weekend. It began in 1966 and has grown into Europe\'s largest street festival, featuring parades, steel bands, sound systems, and Caribbean food stalls.',
      },
    },
  ],

  colorTheme: 'summer',
  icon: '\u2600\ufe0f',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmasDay: HolidayData = {
  id: 'gb_christmas-day',
  countryCode: 'gb',
  slugs: { en: 'christmas-day', fr: 'christmas-day', es: 'christmas-day' },
  names: { en: 'Christmas Day', fr: 'Christmas Day', es: 'Christmas Day' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: 'Christmas Day on December 25 is one of the most celebrated holidays in the United Kingdom. It honours the birth of Jesus Christ and is marked by gift-giving, festive meals, church services, and cherished British traditions such as the King\'s Christmas broadcast and Christmas crackers.',
    fr: 'Christmas Day on December 25 is one of the most celebrated holidays in the United Kingdom. It honours the birth of Jesus Christ and is marked by gift-giving, festive meals, church services, and cherished British traditions such as the King\'s Christmas broadcast and Christmas crackers.',
    es: 'Christmas Day on December 25 is one of the most celebrated holidays in the United Kingdom. It honours the birth of Jesus Christ and is marked by gift-giving, festive meals, church services, and cherished British traditions such as the King\'s Christmas broadcast and Christmas crackers.',
  },

  history: {
    en: 'Christmas has been celebrated in Britain since the early Middle Ages. Many modern Christmas traditions originated or were popularised in Britain: the Christmas tree was introduced by Prince Albert in 1841, Christmas crackers were invented by Tom Smith in 1847, and Christmas cards were first sent in 1843. The monarch\'s Christmas broadcast, started by King George V in 1932, is a defining British tradition.',
    fr: 'Christmas has been celebrated in Britain since the early Middle Ages. Many modern Christmas traditions originated or were popularised in Britain: the Christmas tree was introduced by Prince Albert in 1841, Christmas crackers were invented by Tom Smith in 1847, and Christmas cards were first sent in 1843. The monarch\'s Christmas broadcast, started by King George V in 1932, is a defining British tradition.',
    es: 'Christmas has been celebrated in Britain since the early Middle Ages. Many modern Christmas traditions originated or were popularised in Britain: the Christmas tree was introduced by Prince Albert in 1841, Christmas crackers were invented by Tom Smith in 1847, and Christmas cards were first sent in 1843. The monarch\'s Christmas broadcast, started by King George V in 1932, is a defining British tradition.',
  },

  traditions: {
    en: [
      'Pulling Christmas crackers at the dinner table',
      'Watching the King\'s Christmas broadcast at 3 PM',
      'Enjoying a Christmas dinner with turkey, roast potatoes, Brussels sprouts, and Christmas pudding',
      'Decorating the house with a Christmas tree, lights, and holly',
      'Opening stockings filled by Father Christmas',
      'Attending a midnight or morning church service',
      'Watching Christmas pantomimes',
    ],
    fr: [
      'Pulling Christmas crackers at the dinner table',
      'Watching the King\'s Christmas broadcast at 3 PM',
      'Enjoying a Christmas dinner with turkey, roast potatoes, Brussels sprouts, and Christmas pudding',
      'Decorating the house with a Christmas tree, lights, and holly',
      'Opening stockings filled by Father Christmas',
      'Attending a midnight or morning church service',
      'Watching Christmas pantomimes',
    ],
    es: [
      'Pulling Christmas crackers at the dinner table',
      'Watching the King\'s Christmas broadcast at 3 PM',
      'Enjoying a Christmas dinner with turkey, roast potatoes, Brussels sprouts, and Christmas pudding',
      'Decorating the house with a Christmas tree, lights, and holly',
      'Opening stockings filled by Father Christmas',
      'Attending a midnight or morning church service',
      'Watching Christmas pantomimes',
    ],
  },

  funFacts: {
    en: [
      'The first commercial Christmas card was sent in London in 1843, commissioned by Sir Henry Cole.',
      'Christmas crackers were invented by London confectioner Tom Smith in 1847.',
      'The UK consumes around 10 million turkeys every Christmas.',
      'Prince Albert is credited with popularising the Christmas tree in Britain after placing one at Windsor Castle in 1841.',
    ],
    fr: [
      'The first commercial Christmas card was sent in London in 1843, commissioned by Sir Henry Cole.',
      'Christmas crackers were invented by London confectioner Tom Smith in 1847.',
      'The UK consumes around 10 million turkeys every Christmas.',
      'Prince Albert is credited with popularising the Christmas tree in Britain after placing one at Windsor Castle in 1841.',
    ],
    es: [
      'The first commercial Christmas card was sent in London in 1843, commissioned by Sir Henry Cole.',
      'Christmas crackers were invented by London confectioner Tom Smith in 1847.',
      'The UK consumes around 10 million turkeys every Christmas.',
      'Prince Albert is credited with popularising the Christmas tree in Britain after placing one at Windsor Castle in 1841.',
    ],
  },

  planningChecklist: {
    en: [
      'Order your Christmas turkey and food shop early',
      'Buy and wrap gifts \u2014 Christmas shopping peaks in December',
      'Book tickets for Christmas pantomimes and events',
      'Send Christmas cards by mid-December for UK delivery',
      'Plan your Christmas Day schedule around the King\'s broadcast at 3 PM',
    ],
    fr: [
      'Order your Christmas turkey and food shop early',
      'Buy and wrap gifts \u2014 Christmas shopping peaks in December',
      'Book tickets for Christmas pantomimes and events',
      'Send Christmas cards by mid-December for UK delivery',
      'Plan your Christmas Day schedule around the King\'s broadcast at 3 PM',
    ],
    es: [
      'Order your Christmas turkey and food shop early',
      'Buy and wrap gifts \u2014 Christmas shopping peaks in December',
      'Book tickets for Christmas pantomimes and events',
      'Send Christmas cards by mid-December for UK delivery',
      'Plan your Christmas Day schedule around the King\'s broadcast at 3 PM',
    ],
  },

  relatedHolidays: ['gb_boxing-day', 'gb_new-years-day'],

  seo: {
    en: {
      titleTemplate: 'Christmas Day {year} UK \u2014 Countdown & Traditions',
      descriptionTemplate: 'How many days until Christmas {year}? Live countdown to December 25, British Christmas traditions, and celebration guide.',
      keywords: ['Christmas UK', 'Christmas Day date', 'Christmas countdown', 'British Christmas traditions', 'when is Christmas'],
    },
    fr: {
      titleTemplate: 'Christmas Day {year} UK \u2014 Countdown & Traditions',
      descriptionTemplate: 'How many days until Christmas {year}? Live countdown to December 25, British Christmas traditions, and celebration guide.',
      keywords: ['Christmas UK', 'Christmas Day date', 'Christmas countdown', 'British Christmas traditions', 'when is Christmas'],
    },
    es: {
      titleTemplate: 'Christmas Day {year} UK \u2014 Countdown & Traditions',
      descriptionTemplate: 'How many days until Christmas {year}? Live countdown to December 25, British Christmas traditions, and celebration guide.',
      keywords: ['Christmas UK', 'Christmas Day date', 'Christmas countdown', 'British Christmas traditions', 'when is Christmas'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas Day {year}?', fr: 'When is Christmas Day {year}?', es: 'When is Christmas Day {year}?' },
      answer: {
        en: 'Christmas Day {year} is on {date}. Christmas is always December 25. If it falls on a weekend, the bank holiday is moved to the next available working day.',
        fr: 'Christmas Day {year} is on {date}. Christmas is always December 25. If it falls on a weekend, the bank holiday is moved to the next available working day.',
        es: 'Christmas Day {year} is on {date}. Christmas is always December 25. If it falls on a weekend, the bank holiday is moved to the next available working day.',
      },
    },
    {
      question: { en: 'What is a Christmas cracker?', fr: 'What is a Christmas cracker?', es: 'What is a Christmas cracker?' },
      answer: {
        en: 'A Christmas cracker is a cardboard tube wrapped in colourful paper that makes a snapping sound when pulled apart. Inside is a paper crown, a small toy or gift, and a joke or riddle. They are a quintessential part of British Christmas dinner.',
        fr: 'A Christmas cracker is a cardboard tube wrapped in colourful paper that makes a snapping sound when pulled apart. Inside is a paper crown, a small toy or gift, and a joke or riddle. They are a quintessential part of British Christmas dinner.',
        es: 'A Christmas cracker is a cardboard tube wrapped in colourful paper that makes a snapping sound when pulled apart. Inside is a paper crown, a small toy or gift, and a joke or riddle. They are a quintessential part of British Christmas dinner.',
      },
    },
    {
      question: { en: "What is the King's Christmas broadcast?", fr: "What is the King's Christmas broadcast?", es: "What is the King's Christmas broadcast?" },
      answer: {
        en: "The King's Christmas broadcast is an annual address by the British monarch, traditionally aired at 3:00 PM on Christmas Day. The tradition began in 1932 with King George V and is broadcast on television and radio across the Commonwealth.",
        fr: "The King's Christmas broadcast is an annual address by the British monarch, traditionally aired at 3:00 PM on Christmas Day. The tradition began in 1932 with King George V and is broadcast on television and radio across the Commonwealth.",
        es: "The King's Christmas broadcast is an annual address by the British monarch, traditionally aired at 3:00 PM on Christmas Day. The tradition began in 1932 with King George V and is broadcast on television and radio across the Commonwealth.",
      },
    },
  ],

  colorTheme: 'christmas',
  icon: '\ud83c\udf84',
};

// ---------------------------------------------------------------------------
// Boxing Day — December 26
// ---------------------------------------------------------------------------

const boxingDay: HolidayData = {
  id: 'gb_boxing-day',
  countryCode: 'gb',
  slugs: { en: 'boxing-day', fr: 'boxing-day', es: 'boxing-day' },
  names: { en: 'Boxing Day', fr: 'Boxing Day', es: 'Boxing Day' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 26,

  descriptions: {
    en: 'Boxing Day on December 26 is a bank holiday in the United Kingdom, celebrated the day after Christmas. It is a day for shopping sales, sporting events, spending time with family, and enjoying leftover Christmas food.',
    fr: 'Boxing Day on December 26 is a bank holiday in the United Kingdom, celebrated the day after Christmas. It is a day for shopping sales, sporting events, spending time with family, and enjoying leftover Christmas food.',
    es: 'Boxing Day on December 26 is a bank holiday in the United Kingdom, celebrated the day after Christmas. It is a day for shopping sales, sporting events, spending time with family, and enjoying leftover Christmas food.',
  },

  history: {
    en: 'The origins of Boxing Day are debated. One theory links it to the tradition of giving "Christmas boxes" \u2014 gifts of money or goods \u2014 to servants, tradespeople, and the poor on the day after Christmas. Another traces it to church alms boxes opened and distributed to the needy. Boxing Day has been a bank holiday in England, Wales, and Northern Ireland since 1871.',
    fr: 'The origins of Boxing Day are debated. One theory links it to the tradition of giving "Christmas boxes" \u2014 gifts of money or goods \u2014 to servants, tradespeople, and the poor on the day after Christmas. Another traces it to church alms boxes opened and distributed to the needy. Boxing Day has been a bank holiday in England, Wales, and Northern Ireland since 1871.',
    es: 'The origins of Boxing Day are debated. One theory links it to the tradition of giving "Christmas boxes" \u2014 gifts of money or goods \u2014 to servants, tradespeople, and the poor on the day after Christmas. Another traces it to church alms boxes opened and distributed to the needy. Boxing Day has been a bank holiday in England, Wales, and Northern Ireland since 1871.',
  },

  traditions: {
    en: [
      'Shopping the Boxing Day sales \u2014 one of the biggest retail events of the year',
      'Watching Premier League football matches',
      'Attending horse racing meets, particularly the King George VI Chase at Kempton Park',
      'Enjoying a cold turkey sandwich and leftovers from Christmas dinner',
      'Going for a family walk in the countryside',
    ],
    fr: [
      'Shopping the Boxing Day sales \u2014 one of the biggest retail events of the year',
      'Watching Premier League football matches',
      'Attending horse racing meets, particularly the King George VI Chase at Kempton Park',
      'Enjoying a cold turkey sandwich and leftovers from Christmas dinner',
      'Going for a family walk in the countryside',
    ],
    es: [
      'Shopping the Boxing Day sales \u2014 one of the biggest retail events of the year',
      'Watching Premier League football matches',
      'Attending horse racing meets, particularly the King George VI Chase at Kempton Park',
      'Enjoying a cold turkey sandwich and leftovers from Christmas dinner',
      'Going for a family walk in the countryside',
    ],
  },

  funFacts: {
    en: [
      'Boxing Day sales can see retailers discount stock by up to 70%, with shoppers spending billions of pounds.',
      'The Premier League traditionally has a full round of fixtures on Boxing Day, making it one of the most watched football days of the season.',
      'In Scotland, Boxing Day did not become a bank holiday until 1974.',
    ],
    fr: [
      'Boxing Day sales can see retailers discount stock by up to 70%, with shoppers spending billions of pounds.',
      'The Premier League traditionally has a full round of fixtures on Boxing Day, making it one of the most watched football days of the season.',
      'In Scotland, Boxing Day did not become a bank holiday until 1974.',
    ],
    es: [
      'Boxing Day sales can see retailers discount stock by up to 70%, with shoppers spending billions of pounds.',
      'The Premier League traditionally has a full round of fixtures on Boxing Day, making it one of the most watched football days of the season.',
      'In Scotland, Boxing Day did not become a bank holiday until 1974.',
    ],
  },

  planningChecklist: {
    en: [
      'Research Boxing Day sales and deals in advance',
      'Check Premier League or rugby fixtures for December 26',
      'Plan a family outing or countryside walk to burn off Christmas dinner',
    ],
    fr: [
      'Research Boxing Day sales and deals in advance',
      'Check Premier League or rugby fixtures for December 26',
      'Plan a family outing or countryside walk to burn off Christmas dinner',
    ],
    es: [
      'Research Boxing Day sales and deals in advance',
      'Check Premier League or rugby fixtures for December 26',
      'Plan a family outing or countryside walk to burn off Christmas dinner',
    ],
  },

  relatedHolidays: ['gb_christmas-day', 'gb_new-years-day'],

  seo: {
    en: {
      titleTemplate: 'Boxing Day {year} UK \u2014 Date, Countdown & Sales Guide',
      descriptionTemplate: 'When is Boxing Day {year}? Live countdown to December 26, Boxing Day sales info, football fixtures, and traditions.',
      keywords: ['Boxing Day UK', 'Boxing Day date', 'Boxing Day sales', 'when is Boxing Day', 'Boxing Day football'],
    },
    fr: {
      titleTemplate: 'Boxing Day {year} UK \u2014 Date, Countdown & Sales Guide',
      descriptionTemplate: 'When is Boxing Day {year}? Live countdown to December 26, Boxing Day sales info, football fixtures, and traditions.',
      keywords: ['Boxing Day UK', 'Boxing Day date', 'Boxing Day sales', 'when is Boxing Day', 'Boxing Day football'],
    },
    es: {
      titleTemplate: 'Boxing Day {year} UK \u2014 Date, Countdown & Sales Guide',
      descriptionTemplate: 'When is Boxing Day {year}? Live countdown to December 26, Boxing Day sales info, football fixtures, and traditions.',
      keywords: ['Boxing Day UK', 'Boxing Day date', 'Boxing Day sales', 'when is Boxing Day', 'Boxing Day football'],
    },
  },

  faq: [
    {
      question: { en: 'When is Boxing Day {year}?', fr: 'When is Boxing Day {year}?', es: 'When is Boxing Day {year}?' },
      answer: {
        en: 'Boxing Day {year} is on {date}. It is always December 26. If it falls on a weekend, the bank holiday is moved to the next available working day.',
        fr: 'Boxing Day {year} is on {date}. It is always December 26. If it falls on a weekend, the bank holiday is moved to the next available working day.',
        es: 'Boxing Day {year} is on {date}. It is always December 26. If it falls on a weekend, the bank holiday is moved to the next available working day.',
      },
    },
    {
      question: { en: 'Why is it called Boxing Day?', fr: 'Why is it called Boxing Day?', es: 'Why is it called Boxing Day?' },
      answer: {
        en: 'The name likely comes from the tradition of giving "Christmas boxes" \u2014 tips or gifts \u2014 to servants and tradespeople on the day after Christmas. Another theory links it to church alms boxes that were opened and distributed to the poor.',
        fr: 'The name likely comes from the tradition of giving "Christmas boxes" \u2014 tips or gifts \u2014 to servants and tradespeople on the day after Christmas. Another theory links it to church alms boxes that were opened and distributed to the poor.',
        es: 'The name likely comes from the tradition of giving "Christmas boxes" \u2014 tips or gifts \u2014 to servants and tradespeople on the day after Christmas. Another theory links it to church alms boxes that were opened and distributed to the poor.',
      },
    },
    {
      question: { en: 'Is there Premier League football on Boxing Day?', fr: 'Is there Premier League football on Boxing Day?', es: 'Is there Premier League football on Boxing Day?' },
      answer: {
        en: 'Yes, a full round of Premier League fixtures on Boxing Day is one of the most cherished traditions in English football. The Boxing Day matches are among the most watched and attended games of the season.',
        fr: 'Yes, a full round of Premier League fixtures on Boxing Day is one of the most cherished traditions in English football. The Boxing Day matches are among the most watched and attended games of the season.',
        es: 'Yes, a full round of Premier League fixtures on Boxing Day is one of the most cherished traditions in English football. The Boxing Day matches are among the most watched and attended games of the season.',
      },
    },
  ],

  colorTheme: 'christmas',
  icon: '\ud83c\udf81',
};

// ---------------------------------------------------------------------------
// St Andrew's Day — November 30
// ---------------------------------------------------------------------------

const stAndrewsDay: HolidayData = {
  id: 'gb_st-andrews-day',
  countryCode: 'gb',
  slugs: { en: 'st-andrews-day', fr: 'st-andrews-day', es: 'st-andrews-day' },
  names: { en: "St Andrew's Day", fr: "St Andrew's Day", es: "St Andrew's Day" },

  dateType: 'fixed',
  fixedMonth: 11,
  fixedDay: 30,

  descriptions: {
    en: "St Andrew's Day on November 30 is Scotland's official national day, celebrating the patron saint of Scotland. It is a bank holiday in Scotland and is marked with traditional Scottish celebrations including ceilidhs, Scottish food, and cultural events.",
    fr: "St Andrew's Day on November 30 is Scotland's official national day, celebrating the patron saint of Scotland. It is a bank holiday in Scotland and is marked with traditional Scottish celebrations including ceilidhs, Scottish food, and cultural events.",
    es: "St Andrew's Day on November 30 is Scotland's official national day, celebrating the patron saint of Scotland. It is a bank holiday in Scotland and is marked with traditional Scottish celebrations including ceilidhs, Scottish food, and cultural events.",
  },

  history: {
    en: "St Andrew has been Scotland's patron saint since at least the 10th century. Legend holds that relics of the apostle Andrew were brought to what is now St Andrews, Fife. The Saltire (St Andrew's Cross), a white diagonal cross on a blue background, has been Scotland's national flag since the Middle Ages. St Andrew's Day became an official bank holiday in Scotland in 2007 under the St Andrew's Day Bank Holiday (Scotland) Act 2007.",
    fr: "St Andrew has been Scotland's patron saint since at least the 10th century. Legend holds that relics of the apostle Andrew were brought to what is now St Andrews, Fife. The Saltire (St Andrew's Cross), a white diagonal cross on a blue background, has been Scotland's national flag since the Middle Ages. St Andrew's Day became an official bank holiday in Scotland in 2007 under the St Andrew's Day Bank Holiday (Scotland) Act 2007.",
    es: "St Andrew has been Scotland's patron saint since at least the 10th century. Legend holds that relics of the apostle Andrew were brought to what is now St Andrews, Fife. The Saltire (St Andrew's Cross), a white diagonal cross on a blue background, has been Scotland's national flag since the Middle Ages. St Andrew's Day became an official bank holiday in Scotland in 2007 under the St Andrew's Day Bank Holiday (Scotland) Act 2007.",
  },

  traditions: {
    en: [
      'Attending ceilidhs (traditional Scottish social dances)',
      'Enjoying traditional Scottish food such as haggis, neeps, and tatties',
      'Flying the Saltire (Scottish flag)',
      'Attending cultural events, concerts, and poetry readings',
    ],
    fr: [
      'Attending ceilidhs (traditional Scottish social dances)',
      'Enjoying traditional Scottish food such as haggis, neeps, and tatties',
      'Flying the Saltire (Scottish flag)',
      'Attending cultural events, concerts, and poetry readings',
    ],
    es: [
      'Attending ceilidhs (traditional Scottish social dances)',
      'Enjoying traditional Scottish food such as haggis, neeps, and tatties',
      'Flying the Saltire (Scottish flag)',
      'Attending cultural events, concerts, and poetry readings',
    ],
  },

  funFacts: {
    en: [
      "St Andrew is also the patron saint of Greece, Russia, Romania, and Barbados.",
      "The Saltire is believed to be one of the oldest national flags in the world, dating from at least the 12th century.",
      "St Andrew's Day only became a Scottish bank holiday in 2007, though it had been celebrated for centuries.",
    ],
    fr: [
      "St Andrew is also the patron saint of Greece, Russia, Romania, and Barbados.",
      "The Saltire is believed to be one of the oldest national flags in the world, dating from at least the 12th century.",
      "St Andrew's Day only became a Scottish bank holiday in 2007, though it had been celebrated for centuries.",
    ],
    es: [
      "St Andrew is also the patron saint of Greece, Russia, Romania, and Barbados.",
      "The Saltire is believed to be one of the oldest national flags in the world, dating from at least the 12th century.",
      "St Andrew's Day only became a Scottish bank holiday in 2007, though it had been celebrated for centuries.",
    ],
  },

  planningChecklist: {
    en: [
      'Look for local ceilidh events and Scottish celebrations near you',
      'Try cooking a traditional Scottish meal with haggis',
      'Display the Saltire or wear something in Scottish colours',
    ],
    fr: [
      'Look for local ceilidh events and Scottish celebrations near you',
      'Try cooking a traditional Scottish meal with haggis',
      'Display the Saltire or wear something in Scottish colours',
    ],
    es: [
      'Look for local ceilidh events and Scottish celebrations near you',
      'Try cooking a traditional Scottish meal with haggis',
      'Display the Saltire or wear something in Scottish colours',
    ],
  },

  relatedHolidays: ['gb_new-years-day'],

  seo: {
    en: {
      titleTemplate: "St Andrew's Day {year} \u2014 Scotland's National Day Countdown",
      descriptionTemplate: "When is St Andrew's Day {year}? Live countdown to November 30, Scottish traditions, and celebration guide.",
      keywords: ["St Andrew's Day", "Scotland national day", "St Andrew's Day date", "when is St Andrew's Day", 'Scottish celebrations'],
    },
    fr: {
      titleTemplate: "St Andrew's Day {year} \u2014 Scotland's National Day Countdown",
      descriptionTemplate: "When is St Andrew's Day {year}? Live countdown to November 30, Scottish traditions, and celebration guide.",
      keywords: ["St Andrew's Day", "Scotland national day", "St Andrew's Day date", "when is St Andrew's Day", 'Scottish celebrations'],
    },
    es: {
      titleTemplate: "St Andrew's Day {year} \u2014 Scotland's National Day Countdown",
      descriptionTemplate: "When is St Andrew's Day {year}? Live countdown to November 30, Scottish traditions, and celebration guide.",
      keywords: ["St Andrew's Day", "Scotland national day", "St Andrew's Day date", "when is St Andrew's Day", 'Scottish celebrations'],
    },
  },

  faq: [
    {
      question: { en: "When is St Andrew's Day {year}?", fr: "When is St Andrew's Day {year}?", es: "When is St Andrew's Day {year}?" },
      answer: {
        en: "St Andrew's Day {year} falls on {date}. It is always November 30.",
        fr: "St Andrew's Day {year} falls on {date}. It is always November 30.",
        es: "St Andrew's Day {year} falls on {date}. It is always November 30.",
      },
    },
    {
      question: { en: "Is St Andrew's Day a bank holiday?", fr: "Is St Andrew's Day a bank holiday?", es: "Is St Andrew's Day a bank holiday?" },
      answer: {
        en: "St Andrew's Day is an official bank holiday in Scotland since 2007. However, employers are not obligated to give staff the day off \u2014 they can choose to offer it as an alternative to another bank holiday. It is not a bank holiday in England, Wales, or Northern Ireland.",
        fr: "St Andrew's Day is an official bank holiday in Scotland since 2007. However, employers are not obligated to give staff the day off \u2014 they can choose to offer it as an alternative to another bank holiday. It is not a bank holiday in England, Wales, or Northern Ireland.",
        es: "St Andrew's Day is an official bank holiday in Scotland since 2007. However, employers are not obligated to give staff the day off \u2014 they can choose to offer it as an alternative to another bank holiday. It is not a bank holiday in England, Wales, or Northern Ireland.",
      },
    },
    {
      question: { en: 'Who was St Andrew?', fr: 'Who was St Andrew?', es: 'Who was St Andrew?' },
      answer: {
        en: 'St Andrew was one of the twelve apostles of Jesus and the brother of St Peter. According to tradition, he was crucified on an X-shaped cross (now known as the Saltire), which became the symbol of Scotland. Legend says his relics were brought to Scotland in the 4th century.',
        fr: 'St Andrew was one of the twelve apostles of Jesus and the brother of St Peter. According to tradition, he was crucified on an X-shaped cross (now known as the Saltire), which became the symbol of Scotland. Legend says his relics were brought to Scotland in the 4th century.',
        es: 'St Andrew was one of the twelve apostles of Jesus and the brother of St Peter. According to tradition, he was crucified on an X-shaped cross (now known as the Saltire), which became the symbol of Scotland. Legend says his relics were brought to Scotland in the 4th century.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f',
};

// ---------------------------------------------------------------------------
// Guy Fawkes Night — November 5
// ---------------------------------------------------------------------------

const guyFawkesNight: HolidayData = {
  id: 'gb_guy-fawkes-night',
  countryCode: 'gb',
  slugs: { en: 'guy-fawkes-night', fr: 'guy-fawkes-night', es: 'guy-fawkes-night' },
  names: { en: 'Guy Fawkes Night', fr: 'Guy Fawkes Night', es: 'Guy Fawkes Night' },

  dateType: 'fixed',
  fixedMonth: 11,
  fixedDay: 5,

  descriptions: {
    en: 'Guy Fawkes Night, also known as Bonfire Night or Fireworks Night, is celebrated on November 5 across the United Kingdom. It commemorates the failed Gunpowder Plot of 1605 with bonfires, fireworks, sparklers, and the burning of Guy Fawkes effigies.',
    fr: 'Guy Fawkes Night, also known as Bonfire Night or Fireworks Night, is celebrated on November 5 across the United Kingdom. It commemorates the failed Gunpowder Plot of 1605 with bonfires, fireworks, sparklers, and the burning of Guy Fawkes effigies.',
    es: 'Guy Fawkes Night, also known as Bonfire Night or Fireworks Night, is celebrated on November 5 across the United Kingdom. It commemorates the failed Gunpowder Plot of 1605 with bonfires, fireworks, sparklers, and the burning of Guy Fawkes effigies.',
  },

  history: {
    en: 'On November 5, 1605, Guy Fawkes was discovered guarding 36 barrels of gunpowder beneath the House of Lords, part of a Catholic conspiracy to assassinate King James I and blow up Parliament. The plot was foiled and Fawkes was executed. Parliament declared November 5 a day of thanksgiving, and the tradition of lighting bonfires to celebrate the King\'s survival has continued for over 400 years.',
    fr: 'On November 5, 1605, Guy Fawkes was discovered guarding 36 barrels of gunpowder beneath the House of Lords, part of a Catholic conspiracy to assassinate King James I and blow up Parliament. The plot was foiled and Fawkes was executed. Parliament declared November 5 a day of thanksgiving, and the tradition of lighting bonfires to celebrate the King\'s survival has continued for over 400 years.',
    es: 'On November 5, 1605, Guy Fawkes was discovered guarding 36 barrels of gunpowder beneath the House of Lords, part of a Catholic conspiracy to assassinate King James I and blow up Parliament. The plot was foiled and Fawkes was executed. Parliament declared November 5 a day of thanksgiving, and the tradition of lighting bonfires to celebrate the King\'s survival has continued for over 400 years.',
  },

  traditions: {
    en: [
      'Lighting bonfires and burning a "Guy" effigy',
      'Watching public fireworks displays',
      'Playing with sparklers',
      'Eating toffee apples, parkin cake, and jacket potatoes',
      'Reciting the rhyme: "Remember, remember, the fifth of November"',
    ],
    fr: [
      'Lighting bonfires and burning a "Guy" effigy',
      'Watching public fireworks displays',
      'Playing with sparklers',
      'Eating toffee apples, parkin cake, and jacket potatoes',
      'Reciting the rhyme: "Remember, remember, the fifth of November"',
    ],
    es: [
      'Lighting bonfires and burning a "Guy" effigy',
      'Watching public fireworks displays',
      'Playing with sparklers',
      'Eating toffee apples, parkin cake, and jacket potatoes',
      'Reciting the rhyme: "Remember, remember, the fifth of November"',
    ],
  },

  funFacts: {
    en: [
      'Guy Fawkes was not the ringleader of the Gunpowder Plot \u2014 that was Robert Catesby. Fawkes was the explosives expert.',
      'The Yeoman of the Guard still ceremonially search the cellars of Parliament before each State Opening.',
      'Lewes in East Sussex holds one of the largest Bonfire Night celebrations in the country, with six bonfire societies staging separate processions.',
      'The UK spends an estimated \u00a3300 million on fireworks around Bonfire Night each year.',
    ],
    fr: [
      'Guy Fawkes was not the ringleader of the Gunpowder Plot \u2014 that was Robert Catesby. Fawkes was the explosives expert.',
      'The Yeoman of the Guard still ceremonially search the cellars of Parliament before each State Opening.',
      'Lewes in East Sussex holds one of the largest Bonfire Night celebrations in the country, with six bonfire societies staging separate processions.',
      'The UK spends an estimated \u00a3300 million on fireworks around Bonfire Night each year.',
    ],
    es: [
      'Guy Fawkes was not the ringleader of the Gunpowder Plot \u2014 that was Robert Catesby. Fawkes was the explosives expert.',
      'The Yeoman of the Guard still ceremonially search the cellars of Parliament before each State Opening.',
      'Lewes in East Sussex holds one of the largest Bonfire Night celebrations in the country, with six bonfire societies staging separate processions.',
      'The UK spends an estimated \u00a3300 million on fireworks around Bonfire Night each year.',
    ],
  },

  planningChecklist: {
    en: [
      'Find a local organised bonfire and fireworks display',
      'Buy sparklers and fireworks safely from licensed sellers',
      'Prepare warm clothing \u2014 November nights are cold',
      'Stock up on toffee apples, hot chocolate, and bonfire treats',
    ],
    fr: [
      'Find a local organised bonfire and fireworks display',
      'Buy sparklers and fireworks safely from licensed sellers',
      'Prepare warm clothing \u2014 November nights are cold',
      'Stock up on toffee apples, hot chocolate, and bonfire treats',
    ],
    es: [
      'Find a local organised bonfire and fireworks display',
      'Buy sparklers and fireworks safely from licensed sellers',
      'Prepare warm clothing \u2014 November nights are cold',
      'Stock up on toffee apples, hot chocolate, and bonfire treats',
    ],
  },

  relatedHolidays: ['gb_christmas-day'],

  seo: {
    en: {
      titleTemplate: 'Guy Fawkes Night {year} \u2014 Bonfire Night Countdown & Guide',
      descriptionTemplate: 'When is Guy Fawkes Night {year}? Live countdown to November 5, Bonfire Night history, fireworks events, and traditions.',
      keywords: ['Guy Fawkes Night', 'Bonfire Night', 'November 5', 'fireworks night UK', 'when is Bonfire Night'],
    },
    fr: {
      titleTemplate: 'Guy Fawkes Night {year} \u2014 Bonfire Night Countdown & Guide',
      descriptionTemplate: 'When is Guy Fawkes Night {year}? Live countdown to November 5, Bonfire Night history, fireworks events, and traditions.',
      keywords: ['Guy Fawkes Night', 'Bonfire Night', 'November 5', 'fireworks night UK', 'when is Bonfire Night'],
    },
    es: {
      titleTemplate: 'Guy Fawkes Night {year} \u2014 Bonfire Night Countdown & Guide',
      descriptionTemplate: 'When is Guy Fawkes Night {year}? Live countdown to November 5, Bonfire Night history, fireworks events, and traditions.',
      keywords: ['Guy Fawkes Night', 'Bonfire Night', 'November 5', 'fireworks night UK', 'when is Bonfire Night'],
    },
  },

  faq: [
    {
      question: { en: 'When is Guy Fawkes Night {year}?', fr: 'When is Guy Fawkes Night {year}?', es: 'When is Guy Fawkes Night {year}?' },
      answer: {
        en: 'Guy Fawkes Night {year} is on {date}. It is always November 5, though local fireworks displays may be held on the nearest weekend.',
        fr: 'Guy Fawkes Night {year} is on {date}. It is always November 5, though local fireworks displays may be held on the nearest weekend.',
        es: 'Guy Fawkes Night {year} is on {date}. It is always November 5, though local fireworks displays may be held on the nearest weekend.',
      },
    },
    {
      question: { en: 'Is Guy Fawkes Night a bank holiday?', fr: 'Is Guy Fawkes Night a bank holiday?', es: 'Is Guy Fawkes Night a bank holiday?' },
      answer: {
        en: 'No, Guy Fawkes Night is not a bank holiday. It is a cultural tradition rather than an official public holiday. Schools and businesses remain open on November 5.',
        fr: 'No, Guy Fawkes Night is not a bank holiday. It is a cultural tradition rather than an official public holiday. Schools and businesses remain open on November 5.',
        es: 'No, Guy Fawkes Night is not a bank holiday. It is a cultural tradition rather than an official public holiday. Schools and businesses remain open on November 5.',
      },
    },
    {
      question: { en: 'What was the Gunpowder Plot?', fr: 'What was the Gunpowder Plot?', es: 'What was the Gunpowder Plot?' },
      answer: {
        en: 'The Gunpowder Plot was a failed conspiracy by a group of English Catholics, led by Robert Catesby, to blow up the House of Lords on November 5, 1605, during the State Opening of Parliament. Guy Fawkes, the most famous conspirator, was caught guarding 36 barrels of gunpowder in the cellar beneath the Lords chamber.',
        fr: 'The Gunpowder Plot was a failed conspiracy by a group of English Catholics, led by Robert Catesby, to blow up the House of Lords on November 5, 1605, during the State Opening of Parliament. Guy Fawkes, the most famous conspirator, was caught guarding 36 barrels of gunpowder in the cellar beneath the Lords chamber.',
        es: 'The Gunpowder Plot was a failed conspiracy by a group of English Catholics, led by Robert Catesby, to blow up the House of Lords on November 5, 1605, during the State Opening of Parliament. Guy Fawkes, the most famous conspirator, was caught guarding 36 barrels of gunpowder in the cellar beneath the Lords chamber.',
      },
    },
  ],

  colorTheme: 'autumn',
  icon: '\ud83c\udf86',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const gbHolidays: HolidayData[] = [
  newYearsDay,
  goodFriday,
  easterMonday,
  earlyMayBankHoliday,
  springBankHoliday,
  summerBankHoliday,
  christmasDay,
  boxingDay,
  stAndrewsDay,
  guyFawkesNight,
];

export default gbHolidays;
