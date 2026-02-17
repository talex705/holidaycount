/**
 * Canadian Holidays — HolidayData definitions
 *
 * Phase 1: English content with French/Spanish placeholders (same text).
 */

import type { HolidayData } from '@/lib/types';
import {
  getThanksgivingCA,
  getVictoriaDay,
  getFamilyDay,
  getCivicHoliday,
  getLaborDayUS,
} from './_shared-dates';

// ---------------------------------------------------------------------------
// Helpers — duplicate text across all three locales for Phase 1
// ---------------------------------------------------------------------------

const l = <T>(en: T): Record<'en' | 'fr' | 'es', T> => ({ en, fr: en, es: en });

// ---------------------------------------------------------------------------
// Holidays
// ---------------------------------------------------------------------------

const canadaHolidays: HolidayData[] = [
  // -------------------------------------------------------------------------
  // Canada Day — July 1 (fixed)
  // -------------------------------------------------------------------------
  {
    id: 'ca_canada-day',
    slugs: l('canada-day'),
    names: l('Canada Day'),
    countryCode: 'ca',
    dateType: 'fixed',
    fixedMonth: 7,
    fixedDay: 1,
    descriptions: l(
      'Canada Day is celebrated on July 1 each year, marking the anniversary of Canadian Confederation in 1867. It is Canada\'s national day, celebrated with fireworks, parades, concerts, and patriotic displays across all provinces and territories.',
    ),
    history: l(
      'Canada Day commemorates July 1, 1867, when the British North America Act (now the Constitution Act, 1867) united three British colonies \u2014 the Province of Canada (Ontario and Quebec), Nova Scotia, and New Brunswick \u2014 into a single Dominion called Canada.\n\nOriginally known as "Dominion Day," the holiday was renamed "Canada Day" in 1982 when Canada patriated its constitution from Britain. The holiday has grown from a relatively modest observance into Canada\'s largest national celebration, with events held in every community from St. John\'s to Victoria.',
    ),
    traditions: l([
      'Watching fireworks displays in cities across Canada',
      'Attending parades and community festivals',
      'Wearing red and white clothing and face paint',
      'Singing "O Canada" at public celebrations',
      'Attending concerts and cultural performances on Parliament Hill in Ottawa',
      'Enjoying barbecues and picnics with family and friends',
      'Displaying the Canadian flag',
    ]),
    funFacts: l([
      'Canada Day was originally called "Dominion Day" until 1982.',
      'The Parliament Hill celebration in Ottawa draws over 100,000 people each year.',
      'Canada became a country in 1867 \u2014 making 2026 its 159th birthday.',
      'The Canadian flag (the Maple Leaf) was adopted on February 15, 1965.',
      'Canada is the second-largest country in the world by total area.',
    ]),
    planningChecklist: l([
      'Check local fireworks display times and locations',
      'Plan outdoor activities \u2014 barbecue, picnic, or beach day',
      'Dress in red and white for the celebrations',
      'Find family-friendly events in your community',
      'Stock up on sparklers, flags, and festive decorations',
    ]),
    relatedHolidays: ['ca_christmas', 'ca_thanksgiving', 'ca_victoria-day'],
    seo: {
      en: {
        titleTemplate: 'Canada Day {year} \u2014 July 1 Countdown & Celebration Guide',
        descriptionTemplate:
          'How many days until Canada Day {year}? Live countdown to July 1, plus history, traditions, fireworks info, and celebration guide.',
        keywords: [
          'Canada Day',
          'when is Canada Day',
          'July 1 holiday',
          'Canada Day countdown',
          'Canada Day fireworks',
        ],
      },
      fr: {
        titleTemplate: 'Canada Day {year} \u2014 July 1 Countdown & Celebration Guide',
        descriptionTemplate:
          'How many days until Canada Day {year}? Live countdown to July 1, plus history, traditions, fireworks info, and celebration guide.',
        keywords: [
          'Canada Day',
          'when is Canada Day',
          'July 1 holiday',
          'Canada Day countdown',
          'Canada Day fireworks',
        ],
      },
      es: {
        titleTemplate: 'Canada Day {year} \u2014 July 1 Countdown & Celebration Guide',
        descriptionTemplate:
          'How many days until Canada Day {year}? Live countdown to July 1, plus history, traditions, fireworks info, and celebration guide.',
        keywords: [
          'Canada Day',
          'when is Canada Day',
          'July 1 holiday',
          'Canada Day countdown',
          'Canada Day fireworks',
        ],
      },
    },
    faq: [
      {
        question: l('When is Canada Day {year}?'),
        answer: l(
          'Canada Day {year} falls on {dayOfWeek}, July 1, {year}. Canada Day is always on July 1 regardless of the day of the week.',
        ),
      },
      {
        question: l('Is Canada Day a statutory holiday?'),
        answer: l(
          'Yes, Canada Day (July 1) is a federal statutory holiday in Canada. When Canada Day falls on a Sunday, the following Monday is typically observed as the statutory holiday for workers.',
        ),
      },
      {
        question: l('What is the difference between Canada Day and Dominion Day?'),
        answer: l(
          'They are the same holiday. Canada Day was originally called "Dominion Day" from 1879 to 1982. The name was changed to "Canada Day" on October 27, 1982, as part of Canada\'s constitutional patriation.',
        ),
      },
      {
        question: l('Where are the best Canada Day celebrations?'),
        answer: l(
          'The largest Canada Day celebration is on Parliament Hill in Ottawa, featuring concerts, ceremonies, and fireworks. Other major celebrations take place in Vancouver (Canada Place), Toronto (Nathan Phillips Square), Montreal (Old Port), and Calgary.',
        ),
      },
    ],
    colorTheme: 'red',
    icon: '\uD83C\uDDE8\uD83C\uDDE6',
  },

  // -------------------------------------------------------------------------
  // Christmas — December 25 (fixed)
  // -------------------------------------------------------------------------
  {
    id: 'ca_christmas',
    slugs: l('christmas'),
    names: l('Christmas'),
    countryCode: 'ca',
    dateType: 'fixed',
    fixedMonth: 12,
    fixedDay: 25,
    descriptions: l(
      'Christmas is celebrated on December 25 each year, honoring the birth of Jesus Christ. It is one of the most widely observed holidays in Canada, marked by gift-giving, family gatherings, festive decorations, and seasonal traditions that blend British, French, and multicultural heritage.',
    ),
    history: l(
      'Christmas has been celebrated on December 25 since the 4th century, when the Roman Catholic Church established the date to coincide with existing winter solstice festivals. The holiday blends religious observance with centuries of cultural traditions from across Europe, brought to Canada by settlers from Britain, France, and other nations.\n\nThe modern Canadian Christmas \u2014 with gift exchanges, decorated trees, and Santa Claus \u2014 took shape in the 19th century. Canada\'s bilingual and multicultural identity gives Christmas celebrations a unique character, with traditions varying from the R\u00e9veillon feast in Quebec to outdoor skating and winter carnivals.',
    ),
    traditions: l([
      'Decorating a Christmas tree with lights and ornaments',
      'Exchanging gifts with family and friends on Christmas morning',
      'Hanging stockings by the fireplace for Santa Claus',
      'Singing Christmas carols and attending holiday concerts',
      'Preparing a festive dinner with turkey, tourtiere, or roast beef',
      'Attending midnight church services on Christmas Eve',
      'Enjoying the R\u00e9veillon feast in Quebec on Christmas Eve',
    ]),
    funFacts: l([
      'Canada Post has given Santa Claus his own postal code: H0H 0H0.',
      'The tradition of the Christmas tree originated in 16th-century Germany.',
      'Canadians send over 1 billion Christmas cards each year.',
      '"Jingle Bells" was originally written for Thanksgiving, not Christmas.',
    ]),
    planningChecklist: l([
      'Start holiday shopping early to avoid last-minute rush',
      'Plan your Christmas dinner menu and guest list by early December',
      'Set a gift budget and track spending',
      'Schedule time for tree decorating and outdoor lights',
      'Confirm travel plans and accommodations if visiting family',
    ]),
    relatedHolidays: ['ca_boxing-day', 'ca_new-years-day', 'ca_thanksgiving'],
    seo: {
      en: {
        titleTemplate: 'Christmas {year} \u2014 Countdown, Date & Celebration Guide',
        descriptionTemplate:
          'How many days until Christmas {year}? Live countdown timer, traditions, fun facts, and planning tips for December 25 in Canada.',
        keywords: [
          'Christmas Canada',
          'when is Christmas',
          'days until Christmas',
          'Christmas countdown',
          'Christmas traditions Canada',
        ],
      },
      fr: {
        titleTemplate: 'Christmas {year} \u2014 Countdown, Date & Celebration Guide',
        descriptionTemplate:
          'How many days until Christmas {year}? Live countdown timer, traditions, fun facts, and planning tips for December 25 in Canada.',
        keywords: [
          'Christmas Canada',
          'when is Christmas',
          'days until Christmas',
          'Christmas countdown',
          'Christmas traditions Canada',
        ],
      },
      es: {
        titleTemplate: 'Christmas {year} \u2014 Countdown, Date & Celebration Guide',
        descriptionTemplate:
          'How many days until Christmas {year}? Live countdown timer, traditions, fun facts, and planning tips for December 25 in Canada.',
        keywords: [
          'Christmas Canada',
          'when is Christmas',
          'days until Christmas',
          'Christmas countdown',
          'Christmas traditions Canada',
        ],
      },
    },
    faq: [
      {
        question: l('When is Christmas {year}?'),
        answer: l(
          'Christmas {year} falls on {dayOfWeek}, December 25, {year}. Christmas is always celebrated on December 25 regardless of the day of the week.',
        ),
      },
      {
        question: l('Is Christmas a statutory holiday in Canada?'),
        answer: l(
          'Yes, Christmas Day (December 25) is a federal statutory holiday in Canada. Boxing Day (December 26) is also a statutory holiday in most Canadian provinces and territories.',
        ),
      },
      {
        question: l('How many days until Christmas?'),
        answer: l(
          'Use our live countdown timer above to see the exact number of days, hours, minutes, and seconds until Christmas {year}.',
        ),
      },
    ],
    colorTheme: 'green',
    icon: '\uD83C\uDF84',
  },

  // -------------------------------------------------------------------------
  // New Year's Day — January 1 (fixed)
  // -------------------------------------------------------------------------
  {
    id: 'ca_new-years-day',
    slugs: l('new-years-day'),
    names: l("New Year's Day"),
    countryCode: 'ca',
    dateType: 'fixed',
    fixedMonth: 1,
    fixedDay: 1,
    descriptions: l(
      "New Year's Day on January 1 marks the beginning of the calendar year in Canada. It is a federal statutory holiday celebrated with midnight countdowns, fireworks, family gatherings, and resolutions for the year ahead.",
    ),
    history: l(
      "New Year's Day has been celebrated on January 1 since the adoption of the Gregorian calendar. In Canada, New Year's Eve and New Year's Day are among the most widely celebrated occasions, with festivities spanning every province and territory.\n\nMajor Canadian cities host elaborate celebrations featuring live music, fireworks, and public countdowns. The tradition of making New Year's resolutions dates back thousands of years, with the ancient Babylonians being among the first to make promises for the new year.",
    ),
    traditions: l([
      "Counting down to midnight on New Year's Eve",
      'Watching fireworks displays over city skylines',
      "Making New Year's resolutions",
      "Singing 'Auld Lang Syne' at midnight",
      "Attending New Year's Eve parties and galas",
      'Watching televised celebrations and concerts',
      "Enjoying a New Year's Day brunch with family",
    ]),
    funFacts: l([
      "The first New Year's celebration dates back about 4,000 years to ancient Babylon.",
      "Approximately 45% of Canadians make New Year's resolutions each year.",
      "The Niagara Falls New Year's Eve celebration is one of the largest free outdoor events in North America.",
      "In Newfoundland, New Year's arrives 30 minutes before the rest of Canada's Atlantic provinces due to its half-hour time zone offset.",
    ]),
    planningChecklist: l([
      "Decide on New Year's Eve plans \u2014 party, dinner, or staying in",
      'Make restaurant reservations well in advance',
      'Arrange safe transportation for the evening',
      "Stock up on champagne, party favours, and snacks",
      "Set personal goals and New Year's resolutions",
    ]),
    relatedHolidays: ['ca_christmas', 'ca_boxing-day'],
    seo: {
      en: {
        titleTemplate: "New Year's Day {year} \u2014 Countdown & Celebration Guide",
        descriptionTemplate:
          "How many days until New Year's Day {year}? Live countdown to January 1, plus traditions, fun facts, and celebration ideas.",
        keywords: [
          "New Year's Day Canada",
          "when is New Year's Day",
          "New Year's countdown",
          "New Year's Eve Canada",
          'January 1 holiday',
        ],
      },
      fr: {
        titleTemplate: "New Year's Day {year} \u2014 Countdown & Celebration Guide",
        descriptionTemplate:
          "How many days until New Year's Day {year}? Live countdown to January 1, plus traditions, fun facts, and celebration ideas.",
        keywords: [
          "New Year's Day Canada",
          "when is New Year's Day",
          "New Year's countdown",
          "New Year's Eve Canada",
          'January 1 holiday',
        ],
      },
      es: {
        titleTemplate: "New Year's Day {year} \u2014 Countdown & Celebration Guide",
        descriptionTemplate:
          "How many days until New Year's Day {year}? Live countdown to January 1, plus traditions, fun facts, and celebration ideas.",
        keywords: [
          "New Year's Day Canada",
          "when is New Year's Day",
          "New Year's countdown",
          "New Year's Eve Canada",
          'January 1 holiday',
        ],
      },
    },
    faq: [
      {
        question: l("When is New Year's Day {year}?"),
        answer: l(
          "New Year's Day {year} is on {dayOfWeek}, January 1, {year}. It is always on January 1 regardless of the day of the week.",
        ),
      },
      {
        question: l("Is New Year's Day a statutory holiday in Canada?"),
        answer: l(
          "Yes, New Year's Day (January 1) is a federal statutory holiday in Canada. Most businesses, government offices, and schools are closed.",
        ),
      },
      {
        question: l("How many days until New Year's Day?"),
        answer: l(
          "Use our live countdown timer above to see the exact number of days, hours, minutes, and seconds until New Year's Day {year}.",
        ),
      },
    ],
    colorTheme: 'gold',
    icon: '\uD83C\uDF89',
  },

  // -------------------------------------------------------------------------
  // Thanksgiving (Canadian) — 2nd Monday of October (calculated)
  // -------------------------------------------------------------------------
  {
    id: 'ca_thanksgiving',
    slugs: l('thanksgiving'),
    names: l('Thanksgiving'),
    countryCode: 'ca',
    dateType: 'calculated',
    calculateDate: getThanksgivingCA,
    descriptions: l(
      'Canadian Thanksgiving is celebrated on the second Monday of October each year. The holiday gives thanks for the autumn harvest and blessings of the past year, centered on family gatherings and a traditional feast featuring turkey, stuffing, and pumpkin pie.',
    ),
    history: l(
      "Canadian Thanksgiving has origins dating to 1578, when English explorer Martin Frobisher held a ceremony of thanks in Newfoundland for surviving the long journey from England. The tradition grew through subsequent centuries, influenced by both French settlers' harvest celebrations and United Empire Loyalists who brought Thanksgiving customs from the American colonies.\n\nThe holiday was officially established as a national holiday in 1879. The date varied for many years until 1957, when Parliament declared Canadian Thanksgiving to be the second Monday of October. The earlier date compared to American Thanksgiving reflects Canada's shorter growing season and earlier harvest.",
    ),
    traditions: l([
      'Preparing a Thanksgiving feast with turkey, stuffing, and cranberry sauce',
      'Gathering with extended family and friends for dinner',
      'Sharing what you are thankful for around the table',
      'Watching CFL football games on Thanksgiving weekend',
      'Enjoying pumpkin pie, apple pie, and butter tarts for dessert',
      'Taking advantage of the long weekend for autumn activities',
      'Volunteering at food banks or community meals',
    ]),
    funFacts: l([
      'Canadian Thanksgiving is 6\u20137 weeks earlier than American Thanksgiving.',
      "The first Canadian Thanksgiving is traced back to Martin Frobisher's 1578 expedition.",
      'Turkey, squash, and corn \u2014 staples of the Thanksgiving meal \u2014 are all native to the Americas.',
      'Canadian Thanksgiving became a fixed date (second Monday of October) in 1957.',
    ]),
    planningChecklist: l([
      'Decide between hosting or traveling for the long weekend',
      'Plan your turkey size (about 1 to 1.5 pounds per guest)',
      'Create a cooking timeline \u2014 turkey needs 3\u20134 hours in the oven',
      'Prepare side dishes that can be made ahead of time',
      'Set the table and plan seating arrangements the night before',
    ]),
    relatedHolidays: ['ca_canada-day', 'ca_christmas', 'ca_labour-day'],
    seo: {
      en: {
        titleTemplate: 'Canadian Thanksgiving {year} \u2014 Date, Countdown & Traditions',
        descriptionTemplate:
          'When is Canadian Thanksgiving {year}? Live countdown, date, history, traditions, and planning tips for the second Monday of October.',
        keywords: [
          'Canadian Thanksgiving',
          'when is Thanksgiving Canada',
          'Thanksgiving date Canada',
          'Thanksgiving countdown',
          'Canadian Thanksgiving traditions',
        ],
      },
      fr: {
        titleTemplate: 'Canadian Thanksgiving {year} \u2014 Date, Countdown & Traditions',
        descriptionTemplate:
          'When is Canadian Thanksgiving {year}? Live countdown, date, history, traditions, and planning tips for the second Monday of October.',
        keywords: [
          'Canadian Thanksgiving',
          'when is Thanksgiving Canada',
          'Thanksgiving date Canada',
          'Thanksgiving countdown',
          'Canadian Thanksgiving traditions',
        ],
      },
      es: {
        titleTemplate: 'Canadian Thanksgiving {year} \u2014 Date, Countdown & Traditions',
        descriptionTemplate:
          'When is Canadian Thanksgiving {year}? Live countdown, date, history, traditions, and planning tips for the second Monday of October.',
        keywords: [
          'Canadian Thanksgiving',
          'when is Thanksgiving Canada',
          'Thanksgiving date Canada',
          'Thanksgiving countdown',
          'Canadian Thanksgiving traditions',
        ],
      },
    },
    faq: [
      {
        question: l('When is Canadian Thanksgiving {year}?'),
        answer: l(
          'Canadian Thanksgiving {year} falls on {dayOfWeek}, {date}. It is always the second Monday of October.',
        ),
      },
      {
        question: l('Is Thanksgiving a statutory holiday in Canada?'),
        answer: l(
          'Yes, Thanksgiving is a federal statutory holiday in Canada. It is observed in all provinces and territories, though it is an optional holiday in New Brunswick, Nova Scotia, and Prince Edward Island.',
        ),
      },
      {
        question: l('Why is Canadian Thanksgiving earlier than American Thanksgiving?'),
        answer: l(
          "Canadian Thanksgiving is earlier because Canada's growing season is shorter and the harvest comes sooner. The holiday also has separate historical origins, dating back to Martin Frobisher's 1578 expedition rather than the 1621 Plymouth feast.",
        ),
      },
    ],
    colorTheme: 'orange',
    icon: '\uD83E\uDD83',
  },

  // -------------------------------------------------------------------------
  // Victoria Day — Monday before May 25 (calculated)
  // -------------------------------------------------------------------------
  {
    id: 'ca_victoria-day',
    slugs: l('victoria-day'),
    names: l('Victoria Day'),
    countryCode: 'ca',
    dateType: 'calculated',
    calculateDate: getVictoriaDay,
    descriptions: l(
      "Victoria Day is a Canadian federal holiday celebrated on the last Monday on or before May 25. It honours Queen Victoria's birthday and also marks the official birthday of the reigning Canadian sovereign. Often called the \"May Two-Four\" weekend, it is considered the unofficial start of summer in Canada.",
    ),
    history: l(
      "Victoria Day was first celebrated in 1845 to honour the birthday of Queen Victoria (born May 24, 1819). After Victoria's death in 1901, May 24 was established as Empire Day. In 1952 the holiday was moved to the Monday on or before May 24 and renamed Victoria Day.\n\nSince 1957 it has also served as the official birthday of Canada's reigning monarch, regardless of their actual date of birth. In Quebec the holiday is known as National Patriots' Day (Journ\u00e9e nationale des patriotes), honouring the 1837\u20131838 rebellion. For most Canadians the long weekend signals the opening of cottages, campgrounds, and the summer season.",
    ),
    traditions: l([
      'Opening up cottages and campgrounds for the summer season',
      'Setting off fireworks \u2014 the holiday is nicknamed "May Two-Four" partly for the fireworks tradition',
      'Enjoying the first long weekend of summer with barbecues and picnics',
      'Planting gardens, as Victoria Day marks the traditional safe date to plant in many regions',
      'Attending community parades and celebrations',
      'Spending time at lakes, parks, and outdoor recreation areas',
    ]),
    funFacts: l([
      'Victoria Day is often called the "May Two-Four" weekend, a pun on the date (around May 24) and a case of 24 beers.',
      'Queen Victoria ruled for 63 years and 216 days, making her the second-longest-reigning British monarch.',
      "In Quebec, the same day is celebrated as National Patriots' Day (Journ\u00e9e nationale des patriotes).",
      "Victoria Day is one of only two Canadian holidays celebrating a specific monarch (the other is the sovereign's official birthday, which is the same day).",
    ]),
    planningChecklist: l([
      'Book cottage or campground reservations early \u2014 the long weekend fills up fast',
      'Prepare the garden for planting after the last frost',
      'Plan outdoor activities and barbecue menus',
      'Check local fireworks times and locations',
      'Stock up on camping and outdoor supplies',
    ]),
    relatedHolidays: ['ca_canada-day', 'ca_civic-holiday', 'ca_family-day'],
    seo: {
      en: {
        titleTemplate: 'Victoria Day {year} \u2014 Date, Countdown & Guide',
        descriptionTemplate:
          'When is Victoria Day {year}? Live countdown, history, traditions, and May Two-Four weekend planning guide.',
        keywords: [
          'Victoria Day',
          'when is Victoria Day',
          'May Two-Four weekend',
          'Victoria Day date',
          'Victoria Day countdown',
        ],
      },
      fr: {
        titleTemplate: 'Victoria Day {year} \u2014 Date, Countdown & Guide',
        descriptionTemplate:
          'When is Victoria Day {year}? Live countdown, history, traditions, and May Two-Four weekend planning guide.',
        keywords: [
          'Victoria Day',
          'when is Victoria Day',
          'May Two-Four weekend',
          'Victoria Day date',
          'Victoria Day countdown',
        ],
      },
      es: {
        titleTemplate: 'Victoria Day {year} \u2014 Date, Countdown & Guide',
        descriptionTemplate:
          'When is Victoria Day {year}? Live countdown, history, traditions, and May Two-Four weekend planning guide.',
        keywords: [
          'Victoria Day',
          'when is Victoria Day',
          'May Two-Four weekend',
          'Victoria Day date',
          'Victoria Day countdown',
        ],
      },
    },
    faq: [
      {
        question: l('When is Victoria Day {year}?'),
        answer: l(
          'Victoria Day {year} falls on {dayOfWeek}, {date}. It is always the last Monday on or before May 25.',
        ),
      },
      {
        question: l('Is Victoria Day a statutory holiday?'),
        answer: l(
          'Yes, Victoria Day is a federal statutory holiday in Canada, observed in all provinces and territories except New Brunswick, Nova Scotia, and Prince Edward Island, which do not legislate it as a provincial holiday.',
        ),
      },
      {
        question: l('Why is Victoria Day called the May Two-Four?'),
        answer: l(
          'The nickname "May Two-Four" is a Canadian pun. It refers to the holiday falling around May 24 and is also slang for a case of 24 beers, which is a popular purchase for the long weekend.',
        ),
      },
    ],
    colorTheme: 'purple',
    icon: '\uD83D\uDC51',
  },

  // -------------------------------------------------------------------------
  // Family Day — 3rd Monday of February (calculated)
  // -------------------------------------------------------------------------
  {
    id: 'ca_family-day',
    slugs: l('family-day'),
    names: l('Family Day'),
    countryCode: 'ca',
    dateType: 'calculated',
    calculateDate: getFamilyDay,
    descriptions: l(
      'Family Day is a statutory holiday observed on the third Monday of February in several Canadian provinces, including Ontario, Alberta, Saskatchewan, and British Columbia. The holiday was created to give families a day to spend together during the long stretch between New Year\'s Day and Good Friday.',
    ),
    history: l(
      "Family Day was first introduced in Alberta in 1990 by Premier Don Getty, who wanted to create a holiday that emphasised the importance of family. The holiday filled a gap in the calendar, as there was no statutory holiday between New Year's Day and Good Friday in most provinces.\n\nSaskatchewan adopted Family Day in 2007, Ontario followed in 2008, and British Columbia began observing it in 2013. While the holiday is called Family Day in most provinces, it is known as Louis Riel Day in Manitoba and Islander Day in Prince Edward Island, though all three fall on the same date.",
    ),
    traditions: l([
      'Spending quality time with family members',
      'Enjoying winter outdoor activities like skating, skiing, and tobogganing',
      'Visiting museums, galleries, and indoor attractions offering free Family Day admission',
      'Taking a short family getaway for the long weekend',
      'Playing board games and doing family activities at home',
      'Attending community Family Day events and festivals',
    ]),
    funFacts: l([
      'Family Day was first created in Alberta in 1990 by Premier Don Getty.',
      'The same holiday is called Louis Riel Day in Manitoba and Islander Day in Prince Edward Island.',
      'Before Family Day, Canadians in most provinces had no statutory holiday between January 1 and Good Friday.',
      'British Columbia was the last major province to adopt Family Day, in 2013.',
    ]),
    planningChecklist: l([
      'Plan a family activity \u2014 skating, skiing, museum visit, or movie day',
      'Check which community events are happening in your area',
      'Book a short weekend getaway if traveling',
      'Prepare snacks and supplies for a cozy day at home',
      'Look for Family Day deals at local attractions and restaurants',
    ]),
    relatedHolidays: ['ca_victoria-day', 'ca_civic-holiday', 'ca_new-years-day'],
    seo: {
      en: {
        titleTemplate: 'Family Day {year} \u2014 Date, Countdown & Celebration Guide',
        descriptionTemplate:
          'When is Family Day {year}? Live countdown to the third Monday of February, plus history, traditions, and activity ideas.',
        keywords: [
          'Family Day Canada',
          'when is Family Day',
          'Family Day date',
          'Family Day countdown',
          'Family Day activities',
        ],
      },
      fr: {
        titleTemplate: 'Family Day {year} \u2014 Date, Countdown & Celebration Guide',
        descriptionTemplate:
          'When is Family Day {year}? Live countdown to the third Monday of February, plus history, traditions, and activity ideas.',
        keywords: [
          'Family Day Canada',
          'when is Family Day',
          'Family Day date',
          'Family Day countdown',
          'Family Day activities',
        ],
      },
      es: {
        titleTemplate: 'Family Day {year} \u2014 Date, Countdown & Celebration Guide',
        descriptionTemplate:
          'When is Family Day {year}? Live countdown to the third Monday of February, plus history, traditions, and activity ideas.',
        keywords: [
          'Family Day Canada',
          'when is Family Day',
          'Family Day date',
          'Family Day countdown',
          'Family Day activities',
        ],
      },
    },
    faq: [
      {
        question: l('When is Family Day {year}?'),
        answer: l(
          'Family Day {year} falls on {dayOfWeek}, {date}. It is always the third Monday of February.',
        ),
      },
      {
        question: l('Which provinces celebrate Family Day?'),
        answer: l(
          'Family Day is observed in Ontario, Alberta, Saskatchewan, British Columbia, and New Brunswick. Manitoba celebrates Louis Riel Day and Prince Edward Island celebrates Islander Day on the same date.',
        ),
      },
      {
        question: l('Is Family Day a statutory holiday?'),
        answer: l(
          'Family Day is a provincial statutory holiday in the provinces that observe it. It is not a federal holiday, so federal employees and workers in non-observing provinces do not get the day off.',
        ),
      },
    ],
    colorTheme: 'pink',
    icon: '\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67\u200D\uD83D\uDC66',
  },

  // -------------------------------------------------------------------------
  // Civic Holiday — 1st Monday of August (calculated)
  // -------------------------------------------------------------------------
  {
    id: 'ca_civic-holiday',
    slugs: l('civic-holiday'),
    names: l('Civic Holiday'),
    countryCode: 'ca',
    dateType: 'calculated',
    calculateDate: getCivicHoliday,
    descriptions: l(
      'The Civic Holiday is observed on the first Monday of August in most Canadian provinces and territories. While not a federal statutory holiday, it is widely celebrated as a provincial holiday under various names, providing a welcome long weekend in the middle of summer.',
    ),
    history: l(
      "The Civic Holiday has been observed in various forms since the late 19th century, when many Canadian municipalities began declaring a holiday in early August to give workers a break during the hottest month of the year. Unlike most Canadian holidays, it does not commemorate a specific historical event.\n\nThe holiday goes by many names depending on the province: it is called British Columbia Day in B.C., New Brunswick Day in New Brunswick, Saskatchewan Day in Saskatchewan, and Heritage Day in Alberta. In Ontario, where it is simply called the Civic Holiday, some municipalities have given it local names such as Simcoe Day (Toronto) or Colonel By Day (Ottawa).",
    ),
    traditions: l([
      'Heading to cottages, lakes, and campgrounds for the long weekend',
      'Attending local festivals, fairs, and community events',
      'Enjoying barbecues, picnics, and outdoor dining',
      'Visiting provincial parks and natural attractions',
      'Taking part in water sports \u2014 swimming, canoeing, and kayaking',
      'Attending outdoor concerts and cultural celebrations',
    ]),
    funFacts: l([
      'The Civic Holiday has different names in almost every province \u2014 including B.C. Day, Saskatchewan Day, and New Brunswick Day.',
      "In Toronto the holiday is called Simcoe Day, after John Graves Simcoe, Upper Canada's first Lieutenant Governor.",
      'The Civic Holiday is not a federal statutory holiday, but most provinces observe it as a provincial one.',
      'In Ottawa the day is known as Colonel By Day, honouring the builder of the Rideau Canal.',
    ]),
    planningChecklist: l([
      'Book cottages and campgrounds early \u2014 the August long weekend is peak season',
      'Plan outdoor activities and check weather forecasts',
      'Look up local festivals and community events in your area',
      'Pack sunscreen, bug spray, and summer essentials',
      'Prepare cooler bags and picnic supplies for day trips',
    ]),
    relatedHolidays: ['ca_victoria-day', 'ca_canada-day', 'ca_labour-day'],
    seo: {
      en: {
        titleTemplate: 'Civic Holiday {year} \u2014 Date, Countdown & Guide',
        descriptionTemplate:
          'When is the Civic Holiday {year}? Live countdown to the first Monday of August, plus history, regional names, and long weekend tips.',
        keywords: [
          'Civic Holiday Canada',
          'when is Civic Holiday',
          'August long weekend Canada',
          'Civic Holiday date',
          'B.C. Day',
        ],
      },
      fr: {
        titleTemplate: 'Civic Holiday {year} \u2014 Date, Countdown & Guide',
        descriptionTemplate:
          'When is the Civic Holiday {year}? Live countdown to the first Monday of August, plus history, regional names, and long weekend tips.',
        keywords: [
          'Civic Holiday Canada',
          'when is Civic Holiday',
          'August long weekend Canada',
          'Civic Holiday date',
          'B.C. Day',
        ],
      },
      es: {
        titleTemplate: 'Civic Holiday {year} \u2014 Date, Countdown & Guide',
        descriptionTemplate:
          'When is the Civic Holiday {year}? Live countdown to the first Monday of August, plus history, regional names, and long weekend tips.',
        keywords: [
          'Civic Holiday Canada',
          'when is Civic Holiday',
          'August long weekend Canada',
          'Civic Holiday date',
          'B.C. Day',
        ],
      },
    },
    faq: [
      {
        question: l('When is the Civic Holiday {year}?'),
        answer: l(
          'The Civic Holiday {year} falls on {dayOfWeek}, {date}. It is always the first Monday of August.',
        ),
      },
      {
        question: l('Is the Civic Holiday a statutory holiday?'),
        answer: l(
          'The Civic Holiday is not a federal statutory holiday, but it is observed as a provincial or civic holiday in most provinces and territories. Whether you get a paid day off depends on your province and employer.',
        ),
      },
      {
        question: l('Why does the Civic Holiday have different names?'),
        answer: l(
          'Each province can name the holiday as it sees fit. British Columbia calls it B.C. Day, Alberta calls it Heritage Day, Saskatchewan calls it Saskatchewan Day, and so on. In Ontario, individual municipalities choose their own names.',
        ),
      },
    ],
    colorTheme: 'blue',
    icon: '\u2600\uFE0F',
  },

  // -------------------------------------------------------------------------
  // Remembrance Day — November 11 (fixed)
  // -------------------------------------------------------------------------
  {
    id: 'ca_remembrance-day',
    slugs: l('remembrance-day'),
    names: l('Remembrance Day'),
    countryCode: 'ca',
    dateType: 'fixed',
    fixedMonth: 11,
    fixedDay: 11,
    descriptions: l(
      'Remembrance Day is observed on November 11 each year in Canada, honouring the members of the Canadian Armed Forces who have served and sacrificed in wars, military conflicts, and peacekeeping operations since World War I. The day marks the anniversary of the armistice that ended World War I at 11:00 a.m. on November 11, 1918.',
    ),
    history: l(
      "Remembrance Day originated as Armistice Day, marking the end of World War I hostilities on the eleventh hour of the eleventh day of the eleventh month in 1918. In Canada, Parliament passed the Armistice Day Act in 1921 to designate November 11 as a day of remembrance.\n\nThe holiday was renamed Remembrance Day in 1931. Today it honours all Canadians who have served in the military, from World War I and World War II to the Korean War, peacekeeping missions, and the war in Afghanistan. The National War Memorial in Ottawa serves as the focal point for the national ceremony, attended by the Governor General, Prime Minister, and veterans.",
    ),
    traditions: l([
      'Wearing a red poppy in the weeks leading up to November 11',
      'Observing two minutes of silence at 11:00 a.m.',
      'Attending Remembrance Day ceremonies at cenotaphs and war memorials',
      'Laying wreaths at the National War Memorial in Ottawa',
      'Reciting the poem "In Flanders Fields" by Lieutenant Colonel John McCrae',
      'Watching the national ceremony broadcast from Ottawa',
      'Thanking veterans and active service members for their service',
    ]),
    funFacts: l([
      '"In Flanders Fields," the iconic Remembrance Day poem, was written by Canadian Lieutenant Colonel John McCrae in 1915.',
      'The red poppy became a symbol of remembrance after being inspired by McCrae\'s poem.',
      'More than 1.5 million Canadians have served in the military during wartime.',
      'The Tomb of the Unknown Soldier at the National War Memorial in Ottawa was dedicated in 2000.',
    ]),
    planningChecklist: l([
      'Purchase a poppy from the Royal Canadian Legion in late October',
      'Find local Remembrance Day ceremonies and plan to attend',
      'Teach children about the significance of the day',
      'Observe two minutes of silence at 11:00 a.m.',
      'Visit a war memorial, cenotaph, or veterans\u2019 organisation to pay respects',
    ]),
    relatedHolidays: ['ca_canada-day', 'ca_victoria-day'],
    seo: {
      en: {
        titleTemplate: 'Remembrance Day {year} \u2014 November 11 Countdown & History',
        descriptionTemplate:
          'How many days until Remembrance Day {year}? Countdown to November 11, plus history, significance, and how to observe the day in Canada.',
        keywords: [
          'Remembrance Day Canada',
          'when is Remembrance Day',
          'November 11 holiday',
          'Remembrance Day countdown',
          'In Flanders Fields',
        ],
      },
      fr: {
        titleTemplate: 'Remembrance Day {year} \u2014 November 11 Countdown & History',
        descriptionTemplate:
          'How many days until Remembrance Day {year}? Countdown to November 11, plus history, significance, and how to observe the day in Canada.',
        keywords: [
          'Remembrance Day Canada',
          'when is Remembrance Day',
          'November 11 holiday',
          'Remembrance Day countdown',
          'In Flanders Fields',
        ],
      },
      es: {
        titleTemplate: 'Remembrance Day {year} \u2014 November 11 Countdown & History',
        descriptionTemplate:
          'How many days until Remembrance Day {year}? Countdown to November 11, plus history, significance, and how to observe the day in Canada.',
        keywords: [
          'Remembrance Day Canada',
          'when is Remembrance Day',
          'November 11 holiday',
          'Remembrance Day countdown',
          'In Flanders Fields',
        ],
      },
    },
    faq: [
      {
        question: l('When is Remembrance Day {year}?'),
        answer: l(
          'Remembrance Day {year} falls on {dayOfWeek}, November 11, {year}. It is always observed on November 11 regardless of the day of the week.',
        ),
      },
      {
        question: l('Is Remembrance Day a statutory holiday in Canada?'),
        answer: l(
          'Remembrance Day is a federal statutory holiday, but its observance as a provincial statutory holiday varies. It is a paid day off in most provinces, but Ontario, Quebec, Manitoba, and Nova Scotia do not legislate it as a provincial statutory holiday.',
        ),
      },
      {
        question: l('Why do Canadians wear poppies on Remembrance Day?'),
        answer: l(
          'The red poppy is a symbol of remembrance inspired by the poem "In Flanders Fields" by Canadian Lieutenant Colonel John McCrae, written in 1915 during World War I. The poem describes poppies growing among the graves of fallen soldiers in Belgium. The Royal Canadian Legion distributes poppies each year.',
        ),
      },
    ],
    colorTheme: 'red',
    icon: '\uD83C\uDF3A',
  },

  // -------------------------------------------------------------------------
  // Boxing Day — December 26 (fixed)
  // -------------------------------------------------------------------------
  {
    id: 'ca_boxing-day',
    slugs: l('boxing-day'),
    names: l('Boxing Day'),
    countryCode: 'ca',
    dateType: 'fixed',
    fixedMonth: 12,
    fixedDay: 26,
    descriptions: l(
      'Boxing Day is observed on December 26 in Canada, the day after Christmas. It is a federal statutory holiday in some provinces and is widely known as one of the biggest shopping days of the year, with major sales both in stores and online.',
    ),
    history: l(
      "Boxing Day has its origins in the United Kingdom, where the tradition dates back to the 17th century. The name is believed to come from the practice of giving \"Christmas boxes\" \u2014 gifts of money or goods \u2014 to servants, tradespeople, and the less fortunate on the day after Christmas.\n\nIn Canada, Boxing Day has evolved into a major retail event, often compared to America's Black Friday. Major retailers offer significant discounts, and shoppers line up early in the morning \u2014 or shop online starting at midnight \u2014 to take advantage of Boxing Day deals. Despite its commercial transformation, the day remains an opportunity for families to relax after the Christmas celebrations.",
    ),
    traditions: l([
      'Shopping Boxing Day sales at stores and online',
      'Returning or exchanging Christmas gifts',
      'Spending time with family relaxing after Christmas',
      'Enjoying Christmas leftovers for meals',
      'Watching hockey and winter sports on television',
      'Taking advantage of year-end clearance deals',
    ]),
    funFacts: l([
      "Boxing Day gets its name from the British tradition of giving 'Christmas boxes' to servants and workers.",
      'Boxing Day sales in Canada generate billions of dollars in retail spending each year.',
      'In the digital age, many Boxing Day deals now start online at midnight on December 25.',
      'Boxing Day is also a major sporting day in the UK, Australia, and other Commonwealth nations.',
    ]),
    planningChecklist: l([
      'Research Boxing Day deals in advance and make a wish list',
      'Set a budget to avoid overspending on impulse purchases',
      'Plan whether to shop in-store (arrive early) or online',
      'Check store hours \u2014 many retailers open early on Boxing Day',
      'Keep receipts for any items you may want to return or exchange',
    ]),
    relatedHolidays: ['ca_christmas', 'ca_new-years-day'],
    seo: {
      en: {
        titleTemplate: 'Boxing Day {year} \u2014 Date, Countdown & Sales Guide',
        descriptionTemplate:
          'When is Boxing Day {year}? Countdown to December 26, plus history, shopping tips, and Boxing Day sales information for Canada.',
        keywords: [
          'Boxing Day Canada',
          'when is Boxing Day',
          'Boxing Day sales',
          'Boxing Day date',
          'December 26 holiday',
        ],
      },
      fr: {
        titleTemplate: 'Boxing Day {year} \u2014 Date, Countdown & Sales Guide',
        descriptionTemplate:
          'When is Boxing Day {year}? Countdown to December 26, plus history, shopping tips, and Boxing Day sales information for Canada.',
        keywords: [
          'Boxing Day Canada',
          'when is Boxing Day',
          'Boxing Day sales',
          'Boxing Day date',
          'December 26 holiday',
        ],
      },
      es: {
        titleTemplate: 'Boxing Day {year} \u2014 Date, Countdown & Sales Guide',
        descriptionTemplate:
          'When is Boxing Day {year}? Countdown to December 26, plus history, shopping tips, and Boxing Day sales information for Canada.',
        keywords: [
          'Boxing Day Canada',
          'when is Boxing Day',
          'Boxing Day sales',
          'Boxing Day date',
          'December 26 holiday',
        ],
      },
    },
    faq: [
      {
        question: l('When is Boxing Day {year}?'),
        answer: l(
          'Boxing Day {year} falls on {dayOfWeek}, December 26, {year}. Boxing Day is always on December 26 regardless of the day of the week.',
        ),
      },
      {
        question: l('Is Boxing Day a statutory holiday in Canada?'),
        answer: l(
          'Boxing Day is a statutory holiday in Ontario and a few other jurisdictions, but it is not a federal statutory holiday. Whether you get a paid day off depends on your province and employer.',
        ),
      },
      {
        question: l('When do Boxing Day sales start?'),
        answer: l(
          'Many Boxing Day sales now start online at midnight on December 25 or even on Christmas Eve. In-store sales typically begin when stores open on December 26, with some retailers opening as early as 6:00 a.m.',
        ),
      },
    ],
    colorTheme: 'teal',
    icon: '\uD83C\uDF81',
  },

  // -------------------------------------------------------------------------
  // Labour Day — 1st Monday of September (calculated)
  // -------------------------------------------------------------------------
  {
    id: 'ca_labour-day',
    slugs: l('labour-day'),
    names: l('Labour Day'),
    countryCode: 'ca',
    dateType: 'calculated',
    calculateDate: getLaborDayUS,
    descriptions: l(
      "Labour Day is a federal statutory holiday in Canada, celebrated on the first Monday of September. It honours the achievements of workers and the labour movement, and is widely regarded as the unofficial end of summer and the last long weekend before the fall season begins.",
    ),
    history: l(
      "Labour Day in Canada traces its roots to the labour movement of the 19th century. The first Canadian Labour Day was celebrated in 1872 in response to the Toronto Typographical Union's strike for a nine-hour workday. The event led to the passage of the Trade Union Act, which legalised trade unions in Canada.\n\nIn 1894, the Canadian government officially declared the first Monday of September as Labour Day, making it a national holiday. The holiday recognises the contributions of the labour movement to workers' rights, including fair wages, safe working conditions, and reasonable work hours.",
    ),
    traditions: l([
      'Enjoying the last long weekend of summer with family and friends',
      'Hosting barbecues and outdoor gatherings',
      'Taking a final summer trip to cottages, lakes, or campgrounds',
      'Attending Labour Day parades and community events',
      'Back-to-school shopping and preparation',
      'Watching the Labour Day Classic CFL football game',
    ]),
    funFacts: l([
      "Canada's Labour Day origins predate the American Labor Day by more than two decades.",
      "The 1872 Toronto printers' strike that inspired Labour Day involved 10,000 workers marching through the city.",
      'The Labour Day Classic is a longstanding tradition in the Canadian Football League.',
      "There is an old fashion rule that you shouldn't wear white after Labour Day, though it's rarely followed today.",
    ]),
    planningChecklist: l([
      'Plan your last summer getaway \u2014 book accommodations early',
      'Organize a Labour Day barbecue or picnic',
      'Start back-to-school shopping and preparation',
      'Check local events and parades happening on Labour Day',
      'Take stock of summer goals and set fall priorities',
    ]),
    relatedHolidays: ['ca_civic-holiday', 'ca_thanksgiving', 'ca_canada-day'],
    seo: {
      en: {
        titleTemplate: 'Labour Day {year} \u2014 Date, Countdown & Guide',
        descriptionTemplate:
          'When is Labour Day {year} in Canada? Live countdown to the first Monday of September, plus history, traditions, and long weekend planning tips.',
        keywords: [
          'Labour Day Canada',
          'when is Labour Day',
          'Labour Day date',
          'Labour Day countdown',
          'September long weekend Canada',
        ],
      },
      fr: {
        titleTemplate: 'Labour Day {year} \u2014 Date, Countdown & Guide',
        descriptionTemplate:
          'When is Labour Day {year} in Canada? Live countdown to the first Monday of September, plus history, traditions, and long weekend planning tips.',
        keywords: [
          'Labour Day Canada',
          'when is Labour Day',
          'Labour Day date',
          'Labour Day countdown',
          'September long weekend Canada',
        ],
      },
      es: {
        titleTemplate: 'Labour Day {year} \u2014 Date, Countdown & Guide',
        descriptionTemplate:
          'When is Labour Day {year} in Canada? Live countdown to the first Monday of September, plus history, traditions, and long weekend planning tips.',
        keywords: [
          'Labour Day Canada',
          'when is Labour Day',
          'Labour Day date',
          'Labour Day countdown',
          'September long weekend Canada',
        ],
      },
    },
    faq: [
      {
        question: l('When is Labour Day {year}?'),
        answer: l(
          'Labour Day {year} falls on {dayOfWeek}, {date}. It is always the first Monday of September.',
        ),
      },
      {
        question: l('Is Labour Day a statutory holiday in Canada?'),
        answer: l(
          'Yes, Labour Day is a federal statutory holiday in Canada, observed in all provinces and territories. Most workers get a paid day off.',
        ),
      },
      {
        question: l('What is the difference between Labour Day and Labor Day?'),
        answer: l(
          'They are the same holiday celebrated in Canada and the United States respectively on the first Monday of September. Canada spells it "Labour" (British English) while the United States spells it "Labor" (American English). Both honour the labour movement and workers\' contributions.',
        ),
      },
    ],
    colorTheme: 'indigo',
    icon: '\uD83D\uDEE0\uFE0F',
  },
];

export default canadaHolidays;
