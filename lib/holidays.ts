/**
 * HolidayCount — Holiday Data & Date Calculation Library
 *
 * Contains all holiday definitions, date calculation algorithms (Easter computus,
 * nth-weekday, last-weekday), and helper utilities for the countdown system.
 */

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Holiday {
  slug: string;
  name: string;
  country: 'us' | 'ca' | 'both';
  dateType: 'fixed' | 'calculated';
  fixedMonth?: number;
  fixedDay?: number;
  calculateDate?: (year: number) => Date;
  description: string;
  history: string;
  traditions: string[];
  funFacts: string[];
  planningChecklist: string[];
  relatedHolidays: string[];
  seo: {
    titleTemplate: string;
    descriptionTemplate: string;
    keywords: string[];
  };
  faq: FAQItem[];
}

/** Holiday data safe to pass to Client Components (no functions) */
export type SerializableHoliday = Omit<Holiday, 'calculateDate'>;

/** Strip non-serializable fields before passing to Client Components */
export function toSerializable(holiday: Holiday): SerializableHoliday {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { calculateDate, ...rest } = holiday;
  return rest;
}

// ---------------------------------------------------------------------------
// Date Calculation Helpers
// ---------------------------------------------------------------------------

/** Get the Nth occurrence of a weekday in a given month/year (1-indexed) */
function nthWeekday(year: number, month: number, weekday: number, n: number): Date {
  const first = new Date(year, month - 1, 1);
  const firstWeekday = first.getDay();
  let day = 1 + ((weekday - firstWeekday + 7) % 7) + (n - 1) * 7;
  return new Date(year, month - 1, day);
}

/** Get the last occurrence of a weekday in a given month */
function lastWeekday(year: number, month: number, weekday: number): Date {
  const lastDay = new Date(year, month, 0); // last day of month
  const diff = (lastDay.getDay() - weekday + 7) % 7;
  return new Date(year, month - 1, lastDay.getDate() - diff);
}

// ---------------------------------------------------------------------------
// Holiday Date Calculators
// ---------------------------------------------------------------------------

/** Easter date using the Anonymous Gregorian Computus algorithm */
export function getEasterDate(year: number): Date {
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const month = Math.floor((h + l - 7 * m + 114) / 31);
  const day = ((h + l - 7 * m + 114) % 31) + 1;
  return new Date(year, month - 1, day);
}

/** Good Friday — 2 days before Easter */
export function getGoodFriday(year: number): Date {
  const easter = getEasterDate(year);
  return new Date(year, easter.getMonth(), easter.getDate() - 2);
}

/** US Thanksgiving — 4th Thursday of November */
export function getThanksgivingUS(year: number): Date {
  return nthWeekday(year, 11, 4, 4); // 4 = Thursday
}

/** Canadian Thanksgiving — 2nd Monday of October */
export function getThanksgivingCA(year: number): Date {
  return nthWeekday(year, 10, 1, 2); // 1 = Monday
}

/** Memorial Day — Last Monday of May */
export function getMemorialDay(year: number): Date {
  return lastWeekday(year, 5, 1);
}

/** Labor Day (US) / Labour Day (CA) — 1st Monday of September */
export function getLaborDay(year: number): Date {
  return nthWeekday(year, 9, 1, 1);
}

/** Martin Luther King Jr. Day — 3rd Monday of January */
export function getMLKDay(year: number): Date {
  return nthWeekday(year, 1, 1, 3);
}

/** Presidents' Day — 3rd Monday of February */
export function getPresidentsDay(year: number): Date {
  return nthWeekday(year, 2, 1, 3);
}

/** Columbus Day — 2nd Monday of October */
export function getColumbusDay(year: number): Date {
  return nthWeekday(year, 10, 1, 2);
}

/** Victoria Day — Monday before May 25 */
export function getVictoriaDay(year: number): Date {
  const may25 = new Date(year, 4, 25); // May 25
  const dayOfWeek = may25.getDay();
  const diff = dayOfWeek === 1 ? 0 : ((dayOfWeek - 1 + 7) % 7);
  return new Date(year, 4, 25 - diff);
}

/** Family Day — 3rd Monday of February (most provinces) */
export function getFamilyDay(year: number): Date {
  return nthWeekday(year, 2, 1, 3);
}

/** Civic Holiday — 1st Monday of August */
export function getCivicHoliday(year: number): Date {
  return nthWeekday(year, 8, 1, 1);
}

// ---------------------------------------------------------------------------
// Get holiday date for any year (resolves fixed vs calculated)
// ---------------------------------------------------------------------------

export function getHolidayDate(holiday: Holiday, year: number): Date {
  if (holiday.dateType === 'fixed' && holiday.fixedMonth && holiday.fixedDay) {
    return new Date(year, holiday.fixedMonth - 1, holiday.fixedDay);
  }
  if (holiday.calculateDate) {
    return holiday.calculateDate(year);
  }
  throw new Error(`Cannot calculate date for holiday: ${holiday.slug}`);
}

/** Get the next occurrence of a holiday (this year or next) */
export function getNextHolidayDate(holiday: Holiday): { date: Date; year: number } {
  const now = new Date();
  const currentYear = now.getFullYear();
  const thisYearDate = getHolidayDate(holiday, currentYear);

  // Compare using end of day to keep the holiday visible all day
  const endOfHoliday = new Date(thisYearDate);
  endOfHoliday.setHours(23, 59, 59, 999);

  if (endOfHoliday >= now) {
    return { date: thisYearDate, year: currentYear };
  }
  return { date: getHolidayDate(holiday, currentYear + 1), year: currentYear + 1 };
}

// ---------------------------------------------------------------------------
// Calendar Helpers
// ---------------------------------------------------------------------------

export function generateGoogleCalendarUrl(holiday: SerializableHoliday, date: Date): string {
  const dateStr = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
  const nextDay = new Date(date);
  nextDay.setDate(nextDay.getDate() + 1);
  const endDateStr = `${nextDay.getFullYear()}${String(nextDay.getMonth() + 1).padStart(2, '0')}${String(nextDay.getDate()).padStart(2, '0')}`;
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(holiday.name)}&dates=${dateStr}/${endDateStr}&details=${encodeURIComponent(holiday.description)}`;
}

export function generateICalEvent(holiday: SerializableHoliday, date: Date): string {
  const dateStr = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//HolidayCount//EN',
    'BEGIN:VEVENT',
    `DTSTART;VALUE=DATE:${dateStr}`,
    `SUMMARY:${holiday.name}`,
    `DESCRIPTION:${holiday.description}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n');
}

// ---------------------------------------------------------------------------
// Format helpers
// ---------------------------------------------------------------------------

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatDateShort(date: Date): string {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

// ---------------------------------------------------------------------------
// Holiday Database — MVP (5 featured + full database)
// ---------------------------------------------------------------------------

export const FEATURED_HOLIDAYS: Holiday[] = [
  {
    slug: 'christmas',
    name: 'Christmas',
    country: 'both',
    dateType: 'fixed',
    fixedMonth: 12,
    fixedDay: 25,
    description: 'Christmas is celebrated on December 25 each year, honoring the birth of Jesus Christ. It is one of the most widely observed holidays in the United States and Canada, marked by gift-giving, family gatherings, festive decorations, and seasonal traditions.',
    history: `Christmas has been celebrated on December 25 since the 4th century, when the Roman Catholic Church established the date to coincide with existing winter solstice festivals. The holiday blends religious observance with centuries of cultural traditions from across Europe, brought to North America by settlers from Britain, Germany, France, and other nations.\n\nThe modern American Christmas — with Santa Claus, decorated trees, and gift exchanges — took shape in the 19th century, influenced heavily by Charles Dickens' "A Christmas Carol" (1843) and Clement Clarke Moore's poem "A Visit from St. Nicholas" (1823). In Canada, Christmas traditions similarly blend British and French heritage with Indigenous cultural elements.`,
    traditions: [
      'Decorating a Christmas tree with lights and ornaments',
      'Exchanging gifts with family and friends on Christmas morning',
      'Hanging stockings by the fireplace for Santa Claus',
      'Singing Christmas carols and attending holiday concerts',
      'Preparing a festive dinner with turkey, ham, or roast beef',
      'Attending midnight church services on Christmas Eve',
      'Sending Christmas cards and holiday greetings',
    ],
    funFacts: [
      'Rudolph the Red-Nosed Reindeer was created for a Montgomery Ward coloring book in 1939.',
      'The tradition of the Christmas tree originated in 16th-century Germany.',
      'Canadians send over 1 billion Christmas cards each year.',
      '"Jingle Bells" was originally written for Thanksgiving, not Christmas.',
      'The Rockefeller Center Christmas Tree tradition started in 1933.',
    ],
    planningChecklist: [
      'Start holiday shopping early to avoid last-minute rush',
      'Plan your Christmas dinner menu and guest list by early December',
      'Set a gift budget and track spending',
      'Schedule time for tree decorating and outdoor lights',
      'Confirm travel plans and accommodations if visiting family',
    ],
    relatedHolidays: ['thanksgiving', 'easter'],
    seo: {
      titleTemplate: 'Christmas {year} — Countdown, Date & Celebration Guide',
      descriptionTemplate: 'How many days until Christmas {year}? Live countdown timer, traditions, fun facts, and planning tips for December 25.',
      keywords: ['when is Christmas', 'days until Christmas', 'Christmas countdown', 'Christmas date', 'Christmas traditions'],
    },
    faq: [
      {
        question: 'When is Christmas {year}?',
        answer: 'Christmas {year} falls on {dayOfWeek}, December 25, {year}. Christmas is always celebrated on December 25 regardless of the day of the week.',
      },
      {
        question: 'How many days until Christmas?',
        answer: 'Use our live countdown timer above to see the exact number of days, hours, minutes, and seconds until Christmas {year}.',
      },
      {
        question: 'Why is Christmas on December 25?',
        answer: 'The date was established in the 4th century by the Roman Catholic Church. While the Bible does not specify a birth date for Jesus, December 25 was chosen to coincide with existing Roman winter solstice celebrations, making it easier to convert pagan populations to Christianity.',
      },
      {
        question: 'Is Christmas a public holiday in Canada?',
        answer: 'Yes, Christmas Day (December 25) is a federal statutory holiday in Canada. Boxing Day (December 26) is also a statutory holiday in most Canadian provinces and territories.',
      },
    ],
  },

  {
    slug: 'thanksgiving',
    name: 'Thanksgiving',
    country: 'both',
    dateType: 'calculated',
    calculateDate: getThanksgivingUS,
    description: 'Thanksgiving is a national holiday celebrated in both the United States and Canada. Americans celebrate on the fourth Thursday of November, while Canadians celebrate on the second Monday of October. The holiday centers on gratitude, family gatherings, and a traditional feast.',
    history: `American Thanksgiving traces its origins to 1621, when Pilgrims and Wampanoag people shared a harvest feast at Plymouth, Massachusetts. It became a national holiday in 1863 when President Abraham Lincoln proclaimed the last Thursday of November as a day of thanksgiving during the Civil War. In 1941, Congress officially fixed it as the fourth Thursday of November.\n\nCanadian Thanksgiving has separate origins, dating to 1578 when English explorer Martin Frobisher held a ceremony of thanks in Newfoundland. The holiday was officially established as a national holiday in 1879, and in 1957, Parliament declared it the second Monday of October. Canadian Thanksgiving celebrates the autumn harvest and occurs earlier due to Canada's shorter growing season.`,
    traditions: [
      'Preparing a Thanksgiving feast with turkey, stuffing, and cranberry sauce',
      'Gathering with extended family and friends',
      'Watching NFL football games (US) or CFL games (Canada)',
      'Sharing what you are thankful for around the dinner table',
      'Volunteering at food banks or community meals',
      'Watching the Macy\'s Thanksgiving Day Parade (US)',
      'Enjoying pumpkin pie, pecan pie, and apple pie for dessert',
    ],
    funFacts: [
      'Americans consume approximately 46 million turkeys on Thanksgiving each year.',
      'Canadian Thanksgiving is 6-7 weeks earlier than American Thanksgiving.',
      'The first Macy\'s Thanksgiving Day Parade was held in 1924.',
      'Benjamin Franklin wanted the turkey — not the bald eagle — as the national bird.',
      'The day after Thanksgiving (Black Friday) is the busiest shopping day in the US.',
    ],
    planningChecklist: [
      'Decide between hosting or traveling for the holiday',
      'Plan your turkey size (1 to 1.5 pounds per guest)',
      'Create a cooking timeline — turkey needs 3-4 hours in the oven',
      'Prepare side dishes that can be made ahead of time',
      'Set the table and plan seating arrangements the night before',
    ],
    relatedHolidays: ['christmas', 'independence-day', 'canada-day'],
    seo: {
      titleTemplate: 'Thanksgiving {year} — Date, Countdown & Traditions',
      descriptionTemplate: 'When is Thanksgiving {year}? Live countdown for both US and Canadian Thanksgiving with dates, traditions, and planning tips.',
      keywords: ['when is Thanksgiving', 'Thanksgiving date', 'days until Thanksgiving', 'US Thanksgiving vs Canadian Thanksgiving', 'Thanksgiving countdown'],
    },
    faq: [
      {
        question: 'When is Thanksgiving {year} in the United States?',
        answer: 'US Thanksgiving {year} falls on {usDate}. American Thanksgiving is always the fourth Thursday of November.',
      },
      {
        question: 'When is Thanksgiving {year} in Canada?',
        answer: 'Canadian Thanksgiving {year} falls on {caDate}. Canadian Thanksgiving is always the second Monday of October.',
      },
      {
        question: 'Why do the US and Canada celebrate Thanksgiving on different dates?',
        answer: 'The holidays have separate origins. Canadian Thanksgiving celebrates the autumn harvest and occurs earlier (October) because Canada\'s growing season ends sooner. American Thanksgiving commemorates the 1621 Pilgrim harvest feast and was fixed as the fourth Thursday of November by Congress in 1941.',
      },
      {
        question: 'Is Thanksgiving a federal holiday?',
        answer: 'Yes, Thanksgiving is a federal holiday in both the United States and Canada. Most government offices, schools, and businesses close for the day. In the US, many workers also get Black Friday off.',
      },
    ],
  },

  {
    slug: 'easter',
    name: 'Easter',
    country: 'both',
    dateType: 'calculated',
    calculateDate: getEasterDate,
    description: 'Easter is the most important Christian holiday, celebrating the resurrection of Jesus Christ. It falls on a different date each year, determined by a lunar calendar calculation. Easter is observed across the United States and Canada with church services, egg hunts, and family gatherings.',
    history: `Easter commemorates the resurrection of Jesus Christ on the third day after his crucifixion, as described in the New Testament. The holiday has been celebrated since the earliest days of Christianity, with the date formalized at the First Council of Nicaea in 325 AD.\n\nThe date of Easter is calculated using the computus — it falls on the first Sunday after the first full moon occurring on or after the spring equinox (March 21). This means Easter can fall anywhere between March 22 and April 25. Many Easter traditions, including eggs and rabbits, have pre-Christian origins tied to spring fertility celebrations.`,
    traditions: [
      'Attending Easter sunrise or morning church services',
      'Decorating and dyeing Easter eggs',
      'Organizing Easter egg hunts for children',
      'Giving Easter baskets filled with candy and small gifts',
      'Preparing a special Easter dinner (ham, lamb, or brunch)',
      'Wearing new spring clothes to Easter services',
      'Sending Easter cards and greetings',
    ],
    funFacts: [
      'Easter can fall on any date between March 22 and April 25.',
      'Americans buy over 16 billion jellybeans for Easter each year.',
      'The White House Easter Egg Roll tradition started in 1878.',
      'The Easter Bunny tradition originated in German immigrant communities in the 1700s.',
      'Good Friday is a statutory holiday in every Canadian province.',
    ],
    planningChecklist: [
      'Check the Easter date early — it changes every year',
      'Plan Easter brunch or dinner menu',
      'Buy supplies for egg decorating and egg hunts',
      'Prepare Easter baskets for children',
      'Reserve restaurant tables early if dining out',
    ],
    relatedHolidays: ['christmas', 'thanksgiving'],
    seo: {
      titleTemplate: 'Easter {year} — Date, Countdown & Celebration Guide',
      descriptionTemplate: 'When is Easter {year}? Live countdown timer, why Easter changes dates, traditions, and celebration guide for the US and Canada.',
      keywords: ['when is Easter', 'Easter date', 'Easter countdown', 'why does Easter change dates', 'Easter traditions'],
    },
    faq: [
      {
        question: 'When is Easter {year}?',
        answer: 'Easter {year} falls on {date}. Easter is always on a Sunday, but the exact date changes each year based on a lunar calendar calculation.',
      },
      {
        question: 'Why does Easter change dates every year?',
        answer: 'Easter is calculated using the computus algorithm: it falls on the first Sunday after the first full moon on or after March 21 (the ecclesiastical spring equinox). Because the lunar cycle doesn\'t align with the solar calendar, Easter can fall on any Sunday between March 22 and April 25.',
      },
      {
        question: 'What is Good Friday?',
        answer: 'Good Friday is the Friday before Easter Sunday, commemorating the crucifixion of Jesus Christ. It is a statutory holiday in all Canadian provinces and a state holiday in many US states. Many businesses and schools close for Good Friday.',
      },
      {
        question: 'Is Easter Monday a holiday?',
        answer: 'In Canada, Easter Monday is a federal holiday, though not all provinces observe it as a statutory holiday. In the United States, Easter Monday is not a federal holiday, but some states and organizations do observe it.',
      },
    ],
  },

  {
    slug: 'canada-day',
    name: 'Canada Day',
    country: 'ca',
    dateType: 'fixed',
    fixedMonth: 7,
    fixedDay: 1,
    description: 'Canada Day is celebrated on July 1 each year, marking the anniversary of Canadian Confederation in 1867. It is Canada\'s national day, celebrated with fireworks, parades, concerts, and patriotic displays across all provinces and territories.',
    history: `Canada Day commemorates July 1, 1867, when the British North America Act (now the Constitution Act, 1867) united three British colonies — the Province of Canada (Ontario and Quebec), Nova Scotia, and New Brunswick — into a single Dominion called Canada.\n\nOriginally known as "Dominion Day," the holiday was renamed "Canada Day" in 1982 when Canada patriated its constitution from Britain. The holiday has grown from a relatively modest observance into Canada's largest national celebration, with events held in every community from St. John's to Victoria.`,
    traditions: [
      'Watching fireworks displays in cities across Canada',
      'Attending parades and community festivals',
      'Wearing red and white clothing and face paint',
      'Singing "O Canada" at public celebrations',
      'Attending concerts and cultural performances on Parliament Hill in Ottawa',
      'Enjoying barbecues and picnics with family and friends',
      'Displaying the Canadian flag',
    ],
    funFacts: [
      'Canada Day was originally called "Dominion Day" until 1982.',
      'The Parliament Hill celebration in Ottawa draws over 100,000 people each year.',
      'Canada became a country in 1867 — making 2026 its 159th birthday.',
      'The Canadian flag (the Maple Leaf) was adopted on February 15, 1965.',
      'Canada is the second-largest country in the world by total area.',
    ],
    planningChecklist: [
      'Check local fireworks display times and locations',
      'Plan outdoor activities — barbecue, picnic, or beach day',
      'Dress in red and white for the celebrations',
      'Find family-friendly events in your community',
      'Stock up on sparklers, flags, and festive decorations',
    ],
    relatedHolidays: ['independence-day', 'thanksgiving'],
    seo: {
      titleTemplate: 'Canada Day {year} — July 1 Countdown & Celebration Guide',
      descriptionTemplate: 'How many days until Canada Day {year}? Live countdown to July 1, plus history, traditions, fireworks info, and celebration guide.',
      keywords: ['Canada Day', 'when is Canada Day', 'July 1 holiday', 'Canada Day countdown', 'Canada Day fireworks'],
    },
    faq: [
      {
        question: 'When is Canada Day {year}?',
        answer: 'Canada Day {year} falls on {dayOfWeek}, July 1, {year}. Canada Day is always on July 1 regardless of the day of the week.',
      },
      {
        question: 'Is Canada Day a statutory holiday?',
        answer: 'Yes, Canada Day (July 1) is a federal statutory holiday in Canada. When Canada Day falls on a Sunday, the following Monday is typically observed as the statutory holiday for workers.',
      },
      {
        question: 'What is the difference between Canada Day and Dominion Day?',
        answer: 'They are the same holiday. Canada Day was originally called "Dominion Day" from 1879 to 1982. The name was changed to "Canada Day" on October 27, 1982, as part of Canada\'s constitutional patriation.',
      },
      {
        question: 'Where are the best Canada Day celebrations?',
        answer: 'The largest Canada Day celebration is on Parliament Hill in Ottawa, featuring concerts, ceremonies, and fireworks. Other major celebrations take place in Vancouver (Canada Place), Toronto (Nathan Phillips Square), Montreal (Old Port), and Calgary.',
      },
    ],
  },

  {
    slug: 'independence-day',
    name: 'Independence Day (4th of July)',
    country: 'us',
    dateType: 'fixed',
    fixedMonth: 7,
    fixedDay: 4,
    description: 'Independence Day, commonly known as the 4th of July, celebrates the adoption of the Declaration of Independence on July 4, 1776. It is the most patriotic holiday in the United States, marked by fireworks, parades, barbecues, and celebrations of American freedom and history.',
    history: `Independence Day commemorates July 4, 1776, when the Continental Congress formally adopted the Declaration of Independence, declaring the thirteen American colonies free from British rule. The document, primarily authored by Thomas Jefferson, established the foundational principles of liberty and self-governance that define the United States.\n\nThe first anniversary celebrations in 1777 included bonfires, bells, and fireworks in Philadelphia. Congress made July 4th an official holiday in 1870, and it became a paid federal holiday in 1938. Today it is one of the most widely celebrated holidays in the United States, with communities of all sizes holding patriotic events.`,
    traditions: [
      'Watching fireworks displays — the largest is Macy\'s in New York City',
      'Attending parades and community celebrations',
      'Hosting backyard barbecues and cookouts',
      'Displaying the American flag at homes and businesses',
      'Singing patriotic songs like "The Star-Spangled Banner" and "God Bless America"',
      'Enjoying hot dogs, hamburgers, corn on the cob, and apple pie',
      'Attending outdoor concerts and festivals',
    ],
    funFacts: [
      'Americans consume approximately 150 million hot dogs on the 4th of July.',
      'The Macy\'s 4th of July Fireworks show uses over 60,000 shells.',
      'John Adams and Thomas Jefferson both died on July 4, 1826 — the 50th anniversary.',
      'The Declaration of Independence was actually approved by Congress on July 2, 1776.',
      'Bristol, Rhode Island has held the oldest continuous 4th of July celebration since 1785.',
    ],
    planningChecklist: [
      'Find the best fireworks viewing spot in your area',
      'Plan your barbecue menu and invite guests',
      'Stock up on sunscreen, bug spray, and outdoor supplies',
      'Buy American flags and patriotic decorations',
      'Check local parade routes and road closures',
    ],
    relatedHolidays: ['canada-day', 'thanksgiving'],
    seo: {
      titleTemplate: '4th of July {year} — Independence Day Countdown & Guide',
      descriptionTemplate: 'How many days until the 4th of July {year}? Live countdown to Independence Day, plus history, traditions, fireworks info, and celebration guide.',
      keywords: ['4th of July', 'Independence Day date', 'July 4th countdown', 'when is 4th of July', 'Independence Day traditions'],
    },
    faq: [
      {
        question: 'When is Independence Day {year}?',
        answer: 'Independence Day {year} falls on {dayOfWeek}, July 4, {year}. The 4th of July is always on July 4 regardless of the day of the week.',
      },
      {
        question: 'Is the 4th of July a federal holiday?',
        answer: 'Yes, Independence Day (July 4) is a federal holiday in the United States. When July 4th falls on a Saturday, the preceding Friday is typically observed. When it falls on a Sunday, the following Monday is observed.',
      },
      {
        question: 'Why do we celebrate the 4th of July?',
        answer: 'The 4th of July commemorates the adoption of the Declaration of Independence on July 4, 1776, when the Continental Congress declared the thirteen American colonies free from British rule. It celebrates American independence, liberty, and the founding principles of the nation.',
      },
      {
        question: 'Where are the best 4th of July fireworks?',
        answer: 'The largest fireworks display is Macy\'s 4th of July Fireworks in New York City, launched from barges on the East River. Other top displays include the National Mall in Washington D.C., Navy Pier in Chicago, the Boston Pops Spectacular, and the San Diego Big Bay Boom.',
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// All holidays (for full calendar, future expansion)
// ---------------------------------------------------------------------------

export const ALL_HOLIDAYS: Holiday[] = [
  ...FEATURED_HOLIDAYS,
  // Additional holidays could be added here for the full calendar
];

/** Look up a featured holiday by slug */
export function getHolidayBySlug(slug: string): Holiday | undefined {
  return FEATURED_HOLIDAYS.find((h) => h.slug === slug);
}

/** Get the next N upcoming holidays sorted by date */
export function getUpcomingHolidays(count: number = 6): Array<{ holiday: Holiday; date: Date; year: number }> {
  const upcoming = FEATURED_HOLIDAYS.map((holiday) => {
    const { date, year } = getNextHolidayDate(holiday);
    return { holiday, date, year };
  });

  upcoming.sort((a, b) => a.date.getTime() - b.date.getTime());
  return upcoming.slice(0, count);
}
