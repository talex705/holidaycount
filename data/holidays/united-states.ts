/**
 * United States — Holiday Data
 *
 * All US holidays using the HolidayData type with Record<Locale, string> fields.
 * Phase 1: English content is authoritative; fr/es use English as placeholder.
 */

import type { HolidayData } from '@/lib/types';
import {
  getThanksgivingUS,
  getMLKDay,
  getPresidentsDay,
  getMemorialDay,
  getLaborDayUS,
  getColumbusDay,
  nthWeekday,
} from './_shared-dates';

// ---------------------------------------------------------------------------
// Helpers — keep DRY for Phase 1 placeholder translations
// ---------------------------------------------------------------------------

/** Shorthand: returns { en, fr, es } with fr/es copying the English value */
function i18n(en: string): Record<'en' | 'fr' | 'es', string> {
  return { en, fr: en, es: en };
}

function i18nArray(en: string[]): Record<'en' | 'fr' | 'es', string[]> {
  return { en, fr: [...en], es: [...en] };
}

function i18nSeo(seo: { titleTemplate: string; descriptionTemplate: string; keywords: string[] }) {
  return { en: seo, fr: { ...seo, keywords: [...seo.keywords] }, es: { ...seo, keywords: [...seo.keywords] } };
}

function i18nFaq(items: Array<{ question: string; answer: string }>) {
  return items.map(({ question, answer }) => ({
    question: i18n(question),
    answer: i18n(answer),
  }));
}

// ---------------------------------------------------------------------------
// Holiday definitions
// ---------------------------------------------------------------------------

const usHolidays: HolidayData[] = [
  // =======================================================================
  // Christmas
  // =======================================================================
  {
    id: 'us_christmas',
    slugs: i18n('christmas'),
    names: i18n('Christmas'),
    countryCode: 'us',
    dateType: 'fixed',
    fixedMonth: 12,
    fixedDay: 25,
    descriptions: i18n(
      'Christmas is celebrated on December 25 each year, honoring the birth of Jesus Christ. It is one of the most widely observed holidays in the United States and Canada, marked by gift-giving, family gatherings, festive decorations, and seasonal traditions.',
    ),
    history: i18n(
      `Christmas has been celebrated on December 25 since the 4th century, when the Roman Catholic Church established the date to coincide with existing winter solstice festivals. The holiday blends religious observance with centuries of cultural traditions from across Europe, brought to North America by settlers from Britain, Germany, France, and other nations.\n\nThe modern American Christmas — with Santa Claus, decorated trees, and gift exchanges — took shape in the 19th century, influenced heavily by Charles Dickens' "A Christmas Carol" (1843) and Clement Clarke Moore's poem "A Visit from St. Nicholas" (1823). In Canada, Christmas traditions similarly blend British and French heritage with Indigenous cultural elements.`,
    ),
    traditions: i18nArray([
      'Decorating a Christmas tree with lights and ornaments',
      'Exchanging gifts with family and friends on Christmas morning',
      'Hanging stockings by the fireplace for Santa Claus',
      'Singing Christmas carols and attending holiday concerts',
      'Preparing a festive dinner with turkey, ham, or roast beef',
      'Attending midnight church services on Christmas Eve',
      'Sending Christmas cards and holiday greetings',
    ]),
    funFacts: i18nArray([
      'Rudolph the Red-Nosed Reindeer was created for a Montgomery Ward coloring book in 1939.',
      'The tradition of the Christmas tree originated in 16th-century Germany.',
      'Canadians send over 1 billion Christmas cards each year.',
      '"Jingle Bells" was originally written for Thanksgiving, not Christmas.',
      'The Rockefeller Center Christmas Tree tradition started in 1933.',
    ]),
    planningChecklist: i18nArray([
      'Start holiday shopping early to avoid last-minute rush',
      'Plan your Christmas dinner menu and guest list by early December',
      'Set a gift budget and track spending',
      'Schedule time for tree decorating and outdoor lights',
      'Confirm travel plans and accommodations if visiting family',
    ]),
    relatedHolidays: ['us_thanksgiving', 'us_new-years-day'],
    seo: i18nSeo({
      titleTemplate: 'Christmas {year} — Countdown, Date & Celebration Guide',
      descriptionTemplate:
        'How many days until Christmas {year}? Live countdown timer, traditions, fun facts, and planning tips for December 25.',
      keywords: [
        'when is Christmas',
        'days until Christmas',
        'Christmas countdown',
        'Christmas date',
        'Christmas traditions',
      ],
    }),
    faq: i18nFaq([
      {
        question: 'When is Christmas {year}?',
        answer:
          'Christmas {year} falls on {dayOfWeek}, December 25, {year}. Christmas is always celebrated on December 25 regardless of the day of the week.',
      },
      {
        question: 'How many days until Christmas?',
        answer:
          'Use our live countdown timer above to see the exact number of days, hours, minutes, and seconds until Christmas {year}.',
      },
      {
        question: 'Why is Christmas on December 25?',
        answer:
          'The date was established in the 4th century by the Roman Catholic Church. While the Bible does not specify a birth date for Jesus, December 25 was chosen to coincide with existing Roman winter solstice celebrations, making it easier to convert pagan populations to Christianity.',
      },
      {
        question: 'Is Christmas a public holiday in the United States?',
        answer:
          'Yes, Christmas Day (December 25) is a federal holiday in the United States. When Christmas falls on a Saturday, the preceding Friday is observed; when it falls on a Sunday, the following Monday is observed.',
      },
    ]),
    colorTheme: 'red-green',
    icon: '🎄',
  },

  // =======================================================================
  // New Year's Day
  // =======================================================================
  {
    id: 'us_new-years-day',
    slugs: i18n('new-years-day'),
    names: i18n("New Year's Day"),
    countryCode: 'us',
    dateType: 'fixed',
    fixedMonth: 1,
    fixedDay: 1,
    descriptions: i18n(
      "New Year's Day is celebrated on January 1 each year, marking the start of a new calendar year. It is a time for celebration, reflection, and setting resolutions for the year ahead.",
    ),
    history: i18n(
      `The celebration of the new year on January 1 dates back to 45 BC, when Julius Caesar introduced the Julian calendar and established January 1 as the start of the new year, honoring Janus, the Roman god of beginnings.\n\nIn the United States, New Year's Eve celebrations became a major cultural event in the early 20th century, with the first ball drop in Times Square, New York City, taking place on December 31, 1907. Today, the Times Square ball drop is watched by over a billion people worldwide, making it one of the most iconic New Year's traditions in the world.`,
    ),
    traditions: i18nArray([
      'Watching the Times Square ball drop at midnight',
      'Counting down to midnight with friends and family',
      'Making New Year\'s resolutions',
      'Toasting with champagne at midnight',
      'Singing "Auld Lang Syne" as the clock strikes twelve',
      'Watching college football bowl games on New Year\'s Day',
      'Eating black-eyed peas and collard greens for good luck (Southern tradition)',
    ]),
    funFacts: i18nArray([
      'The Times Square ball drop has been an annual tradition since 1907.',
      'About 45% of Americans make New Year\'s resolutions, but only about 8% achieve them.',
      'The first Rose Bowl football game was played on New Year\'s Day in 1902.',
      'In many cultures, eating round foods on New Year\'s symbolizes coins and prosperity.',
    ]),
    planningChecklist: i18nArray([
      'Book New Year\'s Eve party venue or plan a house party',
      'Purchase champagne and party supplies well in advance',
      'Plan a safe ride home — arrange designated drivers or car services',
      'Set your New Year\'s resolutions and write them down',
      'Stock up on traditional New Year\'s Day foods',
    ]),
    relatedHolidays: ['us_christmas', 'us_independence-day'],
    seo: i18nSeo({
      titleTemplate: "New Year's Day {year} — Countdown & Celebration Guide",
      descriptionTemplate:
        "How many days until New Year's Day {year}? Live countdown, traditions, fun facts, and tips to ring in the new year.",
      keywords: [
        "when is New Year's Day",
        "New Year's countdown",
        "New Year's Eve",
        "days until New Year",
        "New Year traditions",
      ],
    }),
    faq: i18nFaq([
      {
        question: "When is New Year's Day {year}?",
        answer:
          "New Year's Day {year} falls on {dayOfWeek}, January 1, {year}. It is always celebrated on January 1.",
      },
      {
        question: "Is New Year's Day a federal holiday?",
        answer:
          "Yes, New Year's Day (January 1) is a federal holiday in the United States. When it falls on a Saturday, the preceding Friday is observed; when it falls on a Sunday, the following Monday is observed.",
      },
      {
        question: 'What are the most popular New Year\'s resolutions?',
        answer:
          'The most popular New Year\'s resolutions include exercising more, eating healthier, saving money, learning a new skill, and spending more time with family. Studies show that writing down resolutions and sharing them increases the likelihood of success.',
      },
    ]),
    colorTheme: 'gold-black',
    icon: '🎆',
  },

  // =======================================================================
  // Thanksgiving
  // =======================================================================
  {
    id: 'us_thanksgiving',
    slugs: i18n('thanksgiving'),
    names: i18n('Thanksgiving'),
    countryCode: 'us',
    dateType: 'calculated',
    calculateDate: getThanksgivingUS,
    descriptions: i18n(
      'Thanksgiving is a national holiday celebrated in both the United States and Canada. Americans celebrate on the fourth Thursday of November, while Canadians celebrate on the second Monday of October. The holiday centers on gratitude, family gatherings, and a traditional feast.',
    ),
    history: i18n(
      `American Thanksgiving traces its origins to 1621, when Pilgrims and Wampanoag people shared a harvest feast at Plymouth, Massachusetts. It became a national holiday in 1863 when President Abraham Lincoln proclaimed the last Thursday of November as a day of thanksgiving during the Civil War. In 1941, Congress officially fixed it as the fourth Thursday of November.\n\nCanadian Thanksgiving has separate origins, dating to 1578 when English explorer Martin Frobisher held a ceremony of thanks in Newfoundland. The holiday was officially established as a national holiday in 1879, and in 1957, Parliament declared it the second Monday of October. Canadian Thanksgiving celebrates the autumn harvest and occurs earlier due to Canada's shorter growing season.`,
    ),
    traditions: i18nArray([
      'Preparing a Thanksgiving feast with turkey, stuffing, and cranberry sauce',
      'Gathering with extended family and friends',
      'Watching NFL football games (US) or CFL games (Canada)',
      'Sharing what you are thankful for around the dinner table',
      'Volunteering at food banks or community meals',
      'Watching the Macy\'s Thanksgiving Day Parade (US)',
      'Enjoying pumpkin pie, pecan pie, and apple pie for dessert',
    ]),
    funFacts: i18nArray([
      'Americans consume approximately 46 million turkeys on Thanksgiving each year.',
      'Canadian Thanksgiving is 6-7 weeks earlier than American Thanksgiving.',
      'The first Macy\'s Thanksgiving Day Parade was held in 1924.',
      'Benjamin Franklin wanted the turkey — not the bald eagle — as the national bird.',
      'The day after Thanksgiving (Black Friday) is the busiest shopping day in the US.',
    ]),
    planningChecklist: i18nArray([
      'Decide between hosting or traveling for the holiday',
      'Plan your turkey size (1 to 1.5 pounds per guest)',
      'Create a cooking timeline — turkey needs 3-4 hours in the oven',
      'Prepare side dishes that can be made ahead of time',
      'Set the table and plan seating arrangements the night before',
    ]),
    relatedHolidays: ['us_christmas', 'us_independence-day'],
    seo: i18nSeo({
      titleTemplate: 'Thanksgiving {year} — Date, Countdown & Traditions',
      descriptionTemplate:
        'When is Thanksgiving {year}? Live countdown for both US and Canadian Thanksgiving with dates, traditions, and planning tips.',
      keywords: [
        'when is Thanksgiving',
        'Thanksgiving date',
        'days until Thanksgiving',
        'US Thanksgiving vs Canadian Thanksgiving',
        'Thanksgiving countdown',
      ],
    }),
    faq: i18nFaq([
      {
        question: 'When is Thanksgiving {year} in the United States?',
        answer:
          'US Thanksgiving {year} falls on {date}. American Thanksgiving is always the fourth Thursday of November.',
      },
      {
        question: 'Why do the US and Canada celebrate Thanksgiving on different dates?',
        answer:
          "The holidays have separate origins. Canadian Thanksgiving celebrates the autumn harvest and occurs earlier (October) because Canada's growing season ends sooner. American Thanksgiving commemorates the 1621 Pilgrim harvest feast and was fixed as the fourth Thursday of November by Congress in 1941.",
      },
      {
        question: 'Is Thanksgiving a federal holiday?',
        answer:
          'Yes, Thanksgiving is a federal holiday in the United States. Most government offices, schools, and businesses close for the day. Many workers also get Black Friday off.',
      },
    ]),
    colorTheme: 'orange-brown',
    icon: '🦃',
  },

  // =======================================================================
  // Independence Day (4th of July)
  // =======================================================================
  {
    id: 'us_independence-day',
    slugs: i18n('independence-day'),
    names: i18n('Independence Day (4th of July)'),
    countryCode: 'us',
    dateType: 'fixed',
    fixedMonth: 7,
    fixedDay: 4,
    descriptions: i18n(
      'Independence Day, commonly known as the 4th of July, celebrates the adoption of the Declaration of Independence on July 4, 1776. It is the most patriotic holiday in the United States, marked by fireworks, parades, barbecues, and celebrations of American freedom and history.',
    ),
    history: i18n(
      `Independence Day commemorates July 4, 1776, when the Continental Congress formally adopted the Declaration of Independence, declaring the thirteen American colonies free from British rule. The document, primarily authored by Thomas Jefferson, established the foundational principles of liberty and self-governance that define the United States.\n\nThe first anniversary celebrations in 1777 included bonfires, bells, and fireworks in Philadelphia. Congress made July 4th an official holiday in 1870, and it became a paid federal holiday in 1938. Today it is one of the most widely celebrated holidays in the United States, with communities of all sizes holding patriotic events.`,
    ),
    traditions: i18nArray([
      'Watching fireworks displays — the largest is Macy\'s in New York City',
      'Attending parades and community celebrations',
      'Hosting backyard barbecues and cookouts',
      'Displaying the American flag at homes and businesses',
      'Singing patriotic songs like "The Star-Spangled Banner" and "God Bless America"',
      'Enjoying hot dogs, hamburgers, corn on the cob, and apple pie',
      'Attending outdoor concerts and festivals',
    ]),
    funFacts: i18nArray([
      'Americans consume approximately 150 million hot dogs on the 4th of July.',
      'The Macy\'s 4th of July Fireworks show uses over 60,000 shells.',
      'John Adams and Thomas Jefferson both died on July 4, 1826 — the 50th anniversary.',
      'The Declaration of Independence was actually approved by Congress on July 2, 1776.',
      'Bristol, Rhode Island has held the oldest continuous 4th of July celebration since 1785.',
    ]),
    planningChecklist: i18nArray([
      'Find the best fireworks viewing spot in your area',
      'Plan your barbecue menu and invite guests',
      'Stock up on sunscreen, bug spray, and outdoor supplies',
      'Buy American flags and patriotic decorations',
      'Check local parade routes and road closures',
    ]),
    relatedHolidays: ['us_memorial-day', 'us_veterans-day'],
    seo: i18nSeo({
      titleTemplate: '4th of July {year} — Independence Day Countdown & Guide',
      descriptionTemplate:
        'How many days until the 4th of July {year}? Live countdown to Independence Day, plus history, traditions, fireworks info, and celebration guide.',
      keywords: [
        '4th of July',
        'Independence Day date',
        'July 4th countdown',
        'when is 4th of July',
        'Independence Day traditions',
      ],
    }),
    faq: i18nFaq([
      {
        question: 'When is Independence Day {year}?',
        answer:
          'Independence Day {year} falls on {dayOfWeek}, July 4, {year}. The 4th of July is always on July 4 regardless of the day of the week.',
      },
      {
        question: 'Is the 4th of July a federal holiday?',
        answer:
          'Yes, Independence Day (July 4) is a federal holiday in the United States. When July 4th falls on a Saturday, the preceding Friday is typically observed. When it falls on a Sunday, the following Monday is observed.',
      },
      {
        question: 'Why do we celebrate the 4th of July?',
        answer:
          'The 4th of July commemorates the adoption of the Declaration of Independence on July 4, 1776, when the Continental Congress declared the thirteen American colonies free from British rule. It celebrates American independence, liberty, and the founding principles of the nation.',
      },
      {
        question: 'Where are the best 4th of July fireworks?',
        answer:
          "The largest fireworks display is Macy's 4th of July Fireworks in New York City, launched from barges on the East River. Other top displays include the National Mall in Washington D.C., Navy Pier in Chicago, the Boston Pops Spectacular, and the San Diego Big Bay Boom.",
      },
    ]),
    colorTheme: 'red-white-blue',
    icon: '🇺🇸',
  },

  // =======================================================================
  // Memorial Day
  // =======================================================================
  {
    id: 'us_memorial-day',
    slugs: i18n('memorial-day'),
    names: i18n('Memorial Day'),
    countryCode: 'us',
    dateType: 'calculated',
    calculateDate: getMemorialDay,
    descriptions: i18n(
      'Memorial Day is observed on the last Monday of May in the United States. It is a federal holiday dedicated to honoring the men and women who have died while serving in the U.S. military. The day also marks the unofficial start of summer.',
    ),
    history: i18n(
      `Memorial Day originated as Decoration Day after the American Civil War, when communities began decorating the graves of fallen soldiers with flowers. The first widely recognized observance was on May 30, 1868, established by General John A. Logan of the Grand Army of the Republic.\n\nIn 1971, Congress passed the Uniform Monday Holiday Act, officially moving Memorial Day to the last Monday of May and making it a three-day weekend. The National Moment of Remembrance, established in 2000, encourages Americans to pause at 3:00 PM local time on Memorial Day for a minute of silence.`,
    ),
    traditions: i18nArray([
      'Visiting cemeteries and memorials to honor fallen service members',
      'Placing American flags on graves at national cemeteries',
      'Observing the National Moment of Remembrance at 3:00 PM',
      'Attending Memorial Day parades and ceremonies',
      'Hosting backyard barbecues and cookouts to kick off summer',
      'Wearing red poppies as a symbol of remembrance',
    ]),
    funFacts: i18nArray([
      'The red poppy became a symbol of remembrance after the World War I poem "In Flanders Fields" by John McCrae.',
      'Over 36 million Americans travel for Memorial Day weekend each year.',
      'Arlington National Cemetery hosts a large-scale flag placement on every grave before Memorial Day.',
      'Waterloo, New York, was officially declared the birthplace of Memorial Day by Congress in 1966.',
    ]),
    planningChecklist: i18nArray([
      'Plan a visit to a local veterans cemetery or memorial',
      'Observe the National Moment of Remembrance at 3:00 PM',
      'Organize a barbecue or outdoor gathering for the long weekend',
      'Check for Memorial Day sales and shopping deals',
    ]),
    relatedHolidays: ['us_veterans-day', 'us_independence-day'],
    seo: i18nSeo({
      titleTemplate: 'Memorial Day {year} — Date, Countdown & Remembrance Guide',
      descriptionTemplate:
        'When is Memorial Day {year}? Live countdown, history, traditions, and ways to honor fallen service members.',
      keywords: [
        'when is Memorial Day',
        'Memorial Day date',
        'Memorial Day countdown',
        'Memorial Day traditions',
        'days until Memorial Day',
      ],
    }),
    faq: i18nFaq([
      {
        question: 'When is Memorial Day {year}?',
        answer:
          'Memorial Day {year} falls on {date}. It is always observed on the last Monday of May.',
      },
      {
        question: 'What is the difference between Memorial Day and Veterans Day?',
        answer:
          'Memorial Day honors military personnel who died in service to their country, while Veterans Day (November 11) honors all military veterans, living and deceased. Memorial Day is a day of mourning; Veterans Day is a day of celebration and thanks.',
      },
      {
        question: 'Is Memorial Day a federal holiday?',
        answer:
          'Yes, Memorial Day is a federal holiday. Government offices, schools, and many businesses close. The U.S. Postal Service does not deliver mail on Memorial Day.',
      },
    ]),
    colorTheme: 'red-white-blue',
    icon: '🎗️',
  },

  // =======================================================================
  // Labor Day
  // =======================================================================
  {
    id: 'us_labor-day',
    slugs: i18n('labor-day'),
    names: i18n('Labor Day'),
    countryCode: 'us',
    dateType: 'calculated',
    calculateDate: getLaborDayUS,
    descriptions: i18n(
      'Labor Day is observed on the first Monday of September in the United States. It is a federal holiday that honors the contributions and achievements of American workers and the labor movement. The day also marks the unofficial end of summer.',
    ),
    history: i18n(
      `Labor Day became a federal holiday in 1894, signed into law by President Grover Cleveland during a period of significant labor unrest. The holiday grew out of the labor union movement of the late 19th century, when workers organized to demand better wages, shorter hours, and safer working conditions.\n\nThe first Labor Day was celebrated on September 5, 1882, in New York City, organized by the Central Labor Union. Oregon was the first state to make it an official holiday in 1887, and by 1894, more than 30 states recognized the holiday before it was established federally.`,
    ),
    traditions: i18nArray([
      'Attending Labor Day parades and community festivals',
      'Hosting end-of-summer barbecues and cookouts',
      'Taking advantage of the three-day weekend for a final summer getaway',
      'Shopping Labor Day sales for back-to-school deals',
      'Spending time outdoors at parks, beaches, and lakes',
    ]),
    funFacts: i18nArray([
      'Labor Day was first celebrated in 1882 in New York City.',
      'An old fashion rule says you shouldn\'t wear white after Labor Day — though this rule has largely faded.',
      'Over 35 million Americans travel during Labor Day weekend.',
      'Labor Day marks the start of the NFL regular season.',
    ]),
    planningChecklist: i18nArray([
      'Plan a final summer outing — beach trip, camping, or barbecue',
      'Check for Labor Day sales on clothing, electronics, and home goods',
      'Prepare children for back-to-school the following week',
      'Stock up on grilling supplies for the cookout',
    ]),
    relatedHolidays: ['us_memorial-day', 'us_independence-day'],
    seo: i18nSeo({
      titleTemplate: 'Labor Day {year} — Date, Countdown & Celebration Guide',
      descriptionTemplate:
        'When is Labor Day {year}? Live countdown, history, traditions, and tips for the last big weekend of summer.',
      keywords: [
        'when is Labor Day',
        'Labor Day date',
        'Labor Day countdown',
        'Labor Day weekend',
        'days until Labor Day',
      ],
    }),
    faq: i18nFaq([
      {
        question: 'When is Labor Day {year}?',
        answer:
          'Labor Day {year} falls on {date}. It is always observed on the first Monday of September.',
      },
      {
        question: 'Is Labor Day a federal holiday?',
        answer:
          'Yes, Labor Day is a federal holiday in the United States. Government offices, schools, and most businesses close. Mail is not delivered on Labor Day.',
      },
      {
        question: 'Why do we celebrate Labor Day?',
        answer:
          'Labor Day honors the American labor movement and the contributions workers have made to the strength, prosperity, and well-being of the country. It became a federal holiday in 1894 after decades of advocacy by labor unions.',
      },
    ]),
    colorTheme: 'blue-white',
    icon: '⚒️',
  },

  // =======================================================================
  // Martin Luther King Jr. Day
  // =======================================================================
  {
    id: 'us_martin-luther-king-jr-day',
    slugs: i18n('martin-luther-king-jr-day'),
    names: i18n('Martin Luther King Jr. Day'),
    countryCode: 'us',
    dateType: 'calculated',
    calculateDate: getMLKDay,
    descriptions: i18n(
      'Martin Luther King Jr. Day is observed on the third Monday of January in the United States. It honors the life and legacy of Dr. Martin Luther King Jr., a leader of the American civil rights movement who advocated for nonviolent protest and racial equality.',
    ),
    history: i18n(
      `Martin Luther King Jr. Day was signed into law by President Ronald Reagan on November 2, 1983, and was first observed as a federal holiday on January 20, 1986. The campaign for the holiday began shortly after Dr. King's assassination on April 4, 1968.\n\nDr. King's leadership during the civil rights movement — including the Montgomery Bus Boycott, the March on Washington, and his iconic "I Have a Dream" speech in 1963 — transformed American society. He was awarded the Nobel Peace Prize in 1964 and remains one of the most influential figures in American history. MLK Day is the only federal holiday designated as a national day of service.`,
    ),
    traditions: i18nArray([
      'Participating in community service projects and volunteer work',
      'Attending MLK Day marches, rallies, and memorial events',
      'Reading or listening to Dr. King\'s speeches, especially "I Have a Dream"',
      'Visiting civil rights museums and historical sites',
      'Holding educational programs in schools about the civil rights movement',
    ]),
    funFacts: i18nArray([
      'MLK Day is the only federal holiday designated as a national day of service.',
      'Dr. King was 35 years old when he won the Nobel Peace Prize in 1964, making him the youngest recipient at the time.',
      'The "I Have a Dream" speech was partially improvised — the famous "dream" section was not in the original prepared text.',
      'All 50 states now observe MLK Day, though it took until 2000 for every state to officially recognize it.',
    ]),
    planningChecklist: i18nArray([
      'Find local volunteer opportunities for MLK Day of Service',
      'Plan a family discussion about civil rights history',
      'Visit a civil rights museum or historical site',
      'Read or watch speeches by Dr. Martin Luther King Jr.',
    ]),
    relatedHolidays: ['us_presidents-day', 'us_juneteenth'],
    seo: i18nSeo({
      titleTemplate: 'Martin Luther King Jr. Day {year} — Date, Countdown & Legacy',
      descriptionTemplate:
        'When is MLK Day {year}? Live countdown, history of Dr. King\'s legacy, traditions, and ways to participate in the day of service.',
      keywords: [
        'when is MLK Day',
        'Martin Luther King Jr. Day date',
        'MLK Day countdown',
        'MLK Day of Service',
        'days until MLK Day',
      ],
    }),
    faq: i18nFaq([
      {
        question: 'When is Martin Luther King Jr. Day {year}?',
        answer:
          'Martin Luther King Jr. Day {year} falls on {date}. It is always observed on the third Monday of January.',
      },
      {
        question: 'Is MLK Day a federal holiday?',
        answer:
          'Yes, Martin Luther King Jr. Day is a federal holiday. Government offices, schools, and many businesses close. It is also designated as a national day of service.',
      },
      {
        question: 'How can I participate in MLK Day of Service?',
        answer:
          'You can volunteer at local nonprofits, food banks, shelters, or community organizations. The Corporation for National and Community Service (AmeriCorps) maintains a searchable database of MLK Day volunteer projects across the country.',
      },
    ]),
    colorTheme: 'red-black-green',
    icon: '✊',
  },

  // =======================================================================
  // Presidents' Day
  // =======================================================================
  {
    id: 'us_presidents-day',
    slugs: i18n('presidents-day'),
    names: i18n("Presidents' Day"),
    countryCode: 'us',
    dateType: 'calculated',
    calculateDate: getPresidentsDay,
    descriptions: i18n(
      "Presidents' Day is observed on the third Monday of February in the United States. Originally established to honor George Washington's birthday, it now broadly celebrates all U.S. presidents. The holiday is also known for major retail sales events.",
    ),
    history: i18n(
      `Presidents' Day originated as Washington's Birthday, a federal holiday established in 1879 to honor George Washington, the first president of the United States. Washington was born on February 22, 1732.\n\nThe Uniform Monday Holiday Act of 1971 moved the observance to the third Monday of February, creating a guaranteed three-day weekend. Although the federal holiday is still officially called "Washington's Birthday," it became commonly known as Presidents' Day and is now seen as a day to honor all U.S. presidents, with particular emphasis on Washington and Abraham Lincoln (born February 12).`,
    ),
    traditions: i18nArray([
      'Learning about the history and achievements of U.S. presidents',
      'Visiting presidential libraries, monuments, and historical sites',
      'Shopping Presidents\' Day sales — one of the biggest retail events of the year',
      'Schools holding lessons and activities about presidential history',
      'Watching patriotic films and documentaries',
    ]),
    funFacts: i18nArray([
      'The federal holiday is still officially named "Washington\'s Birthday," not Presidents\' Day.',
      'Presidents\' Day weekend is one of the top five retail sales events in the United States.',
      'George Washington\'s actual birthday is February 22, but the holiday never falls on that date.',
      'Abraham Lincoln\'s birthday (February 12) is celebrated as a separate state holiday in some states.',
    ]),
    planningChecklist: i18nArray([
      'Check for Presidents\' Day sales on mattresses, appliances, and cars',
      'Plan a family trip to a presidential library or monument',
      'Use the long weekend for a winter getaway',
      'Teach children about notable U.S. presidents',
    ]),
    relatedHolidays: ['us_martin-luther-king-jr-day', 'us_independence-day'],
    seo: i18nSeo({
      titleTemplate: "Presidents' Day {year} — Date, Countdown & History",
      descriptionTemplate:
        "When is Presidents' Day {year}? Live countdown, history, traditions, sales info, and celebration guide.",
      keywords: [
        "when is Presidents' Day",
        "Presidents' Day date",
        "Presidents' Day countdown",
        "Presidents' Day sales",
        "Washington's Birthday",
      ],
    }),
    faq: i18nFaq([
      {
        question: "When is Presidents' Day {year}?",
        answer:
          "Presidents' Day {year} falls on {date}. It is always observed on the third Monday of February.",
      },
      {
        question: "Is Presidents' Day a federal holiday?",
        answer:
          "Yes, Presidents' Day (officially Washington's Birthday) is a federal holiday. Government offices and schools close, and mail is not delivered.",
      },
      {
        question: "Does Presidents' Day honor all presidents?",
        answer:
          "The federal holiday officially honors George Washington, but it has evolved culturally to honor all U.S. presidents, with particular recognition of Washington and Abraham Lincoln.",
      },
    ]),
    colorTheme: 'red-white-blue',
    icon: '🏛️',
  },

  // =======================================================================
  // Columbus Day / Indigenous Peoples' Day
  // =======================================================================
  {
    id: 'us_columbus-day',
    slugs: i18n('columbus-day'),
    names: i18n("Columbus Day (Indigenous Peoples' Day)"),
    countryCode: 'us',
    dateType: 'calculated',
    calculateDate: getColumbusDay,
    descriptions: i18n(
      "Columbus Day is observed on the second Monday of October in the United States. It commemorates Christopher Columbus's arrival in the Americas on October 12, 1492. A growing number of states and cities have renamed the holiday Indigenous Peoples' Day to honor the native peoples of the Americas.",
    ),
    history: i18n(
      `Columbus Day became a federal holiday in 1937, though celebrations of Columbus's voyage date back to the late 18th century. Italian-Americans championed the holiday as a celebration of Italian heritage, and it became an important cultural observance for Italian-American communities.\n\nSince the late 20th century, the holiday has been increasingly reconsidered. Critics point to the devastating impact of European colonization on Indigenous peoples, including displacement, disease, and violence. Many states and cities — including Alaska, Hawaii, Vermont, and Washington D.C. — now observe Indigenous Peoples' Day instead, honoring the cultures and contributions of Native Americans.`,
    ),
    traditions: i18nArray([
      'Attending parades celebrating Italian-American heritage',
      'Learning about the history of European exploration and colonization',
      'Participating in Indigenous Peoples\' Day events and cultural celebrations',
      'Visiting museums with exhibits on Native American history and culture',
      'Schools holding lessons about both the Age of Exploration and Indigenous history',
    ]),
    funFacts: i18nArray([
      'Columbus never actually set foot on mainland North America — he landed in the Bahamas, Cuba, and Hispaniola.',
      'South Dakota was the first state to rename the holiday to Native Americans\' Day in 1990.',
      'The first Columbus Day celebration in the United States was held in 1792 in New York City.',
      'Over 20 states and more than 130 cities now observe Indigenous Peoples\' Day.',
    ]),
    planningChecklist: i18nArray([
      'Learn about the Indigenous peoples native to your region',
      'Visit a local museum with Native American or exploration exhibits',
      'Attend a community parade or cultural event',
      'Use the day to explore local historical landmarks',
    ]),
    relatedHolidays: ['us_veterans-day', 'us_thanksgiving'],
    seo: i18nSeo({
      titleTemplate: "Columbus Day / Indigenous Peoples' Day {year} — Date & Guide",
      descriptionTemplate:
        "When is Columbus Day {year}? Live countdown, history, the shift to Indigenous Peoples' Day, and ways to observe.",
      keywords: [
        'when is Columbus Day',
        'Columbus Day date',
        "Indigenous Peoples' Day",
        'Columbus Day countdown',
        'days until Columbus Day',
      ],
    }),
    faq: i18nFaq([
      {
        question: 'When is Columbus Day {year}?',
        answer:
          'Columbus Day {year} falls on {date}. It is observed on the second Monday of October.',
      },
      {
        question: "What is Indigenous Peoples' Day?",
        answer:
          "Indigenous Peoples' Day is an alternative holiday observed on the same date as Columbus Day. It honors the cultures, histories, and contributions of Native American and Indigenous peoples. Many states and cities have officially adopted this name in place of Columbus Day.",
      },
      {
        question: 'Is Columbus Day a federal holiday?',
        answer:
          'Yes, Columbus Day is a federal holiday, though not all states observe it. Some states have replaced it with Indigenous Peoples\' Day, and some private employers do not give workers the day off.',
      },
    ]),
    colorTheme: 'brown-gold',
    icon: '🧭',
  },

  // =======================================================================
  // Veterans Day
  // =======================================================================
  {
    id: 'us_veterans-day',
    slugs: i18n('veterans-day'),
    names: i18n('Veterans Day'),
    countryCode: 'us',
    dateType: 'fixed',
    fixedMonth: 11,
    fixedDay: 11,
    descriptions: i18n(
      'Veterans Day is observed on November 11 each year in the United States. It honors all military veterans who have served in the U.S. Armed Forces. Unlike Memorial Day, which honors those who died in service, Veterans Day celebrates all veterans, living and deceased.',
    ),
    history: i18n(
      `Veterans Day originated as Armistice Day, marking the end of World War I at the 11th hour of the 11th day of the 11th month in 1918. Congress made it a federal holiday in 1938 to honor World War I veterans.\n\nIn 1954, after World War II and the Korean War, Congress renamed the holiday Veterans Day to honor veterans of all wars. Unlike most federal holidays, Veterans Day is always observed on November 11 regardless of the day of the week, though federal employees may get a day off on the nearest weekday if it falls on a weekend.`,
    ),
    traditions: i18nArray([
      'Attending Veterans Day ceremonies and memorial services',
      'Visiting war memorials and national cemeteries',
      'Thanking veterans for their service',
      'Participating in community parades honoring veterans',
      'Observing a moment of silence at 11:00 AM',
      'Businesses and restaurants offering free meals and discounts to veterans',
    ]),
    funFacts: i18nArray([
      'Veterans Day always falls on November 11, honoring the armistice that ended World War I at 11 AM on 11/11/1918.',
      'There are approximately 17 million living U.S. military veterans.',
      'Veterans Day is not the same as Memorial Day — Veterans Day honors all who served, while Memorial Day honors those who died in service.',
      'The Tomb of the Unknown Soldier in Arlington National Cemetery has been guarded continuously since 1937.',
    ]),
    planningChecklist: i18nArray([
      'Thank a veteran in your community for their service',
      'Attend a local Veterans Day ceremony or parade',
      'Volunteer with organizations that support veterans',
      'Educate children about the significance of Veterans Day and military service',
    ]),
    relatedHolidays: ['us_memorial-day', 'us_independence-day'],
    seo: i18nSeo({
      titleTemplate: 'Veterans Day {year} — Date, Countdown & Ways to Honor',
      descriptionTemplate:
        'When is Veterans Day {year}? Live countdown, history, traditions, and ways to honor our veterans on November 11.',
      keywords: [
        'when is Veterans Day',
        'Veterans Day date',
        'Veterans Day countdown',
        'Veterans Day vs Memorial Day',
        'November 11 holiday',
      ],
    }),
    faq: i18nFaq([
      {
        question: 'When is Veterans Day {year}?',
        answer:
          'Veterans Day {year} falls on {dayOfWeek}, November 11, {year}. Veterans Day is always observed on November 11.',
      },
      {
        question: 'What is the difference between Veterans Day and Memorial Day?',
        answer:
          'Veterans Day (November 11) honors all U.S. military veterans, living and deceased, who served in the Armed Forces. Memorial Day (last Monday of May) specifically honors those who died while serving in the military.',
      },
      {
        question: 'Is Veterans Day a federal holiday?',
        answer:
          'Yes, Veterans Day is a federal holiday. Government offices, courts, and schools close. If November 11 falls on a Saturday, the preceding Friday is observed; if it falls on a Sunday, the following Monday is observed for federal employees.',
      },
    ]),
    colorTheme: 'red-white-blue',
    icon: '🎖️',
  },

  // =======================================================================
  // Juneteenth
  // =======================================================================
  {
    id: 'us_juneteenth',
    slugs: i18n('juneteenth'),
    names: i18n('Juneteenth'),
    countryCode: 'us',
    dateType: 'fixed',
    fixedMonth: 6,
    fixedDay: 19,
    descriptions: i18n(
      'Juneteenth, also known as Juneteenth National Independence Day, is observed on June 19 each year. It commemorates the emancipation of enslaved African Americans in the United States, marking the date in 1865 when Union soldiers arrived in Galveston, Texas, with news that the Civil War had ended and enslaved people were free.',
    ),
    history: i18n(
      `Juneteenth marks June 19, 1865, when Major General Gordon Granger arrived in Galveston, Texas, and announced General Order No. 3, informing the last enslaved people in Texas of their freedom — more than two years after President Lincoln's Emancipation Proclamation took effect on January 1, 1863.\n\nJuneteenth celebrations have been observed by African American communities since 1866. Texas was the first state to make Juneteenth a state holiday in 1980. On June 17, 2021, President Joe Biden signed the Juneteenth National Independence Day Act, making it the newest federal holiday — the first new federal holiday since Martin Luther King Jr. Day was established in 1983.`,
    ),
    traditions: i18nArray([
      'Attending community festivals, parades, and cultural events',
      'Enjoying traditional foods like barbecue, red velvet cake, and red drinks (symbolizing resilience)',
      'Reading and sharing stories about African American history and emancipation',
      'Hosting family reunions and gatherings',
      'Supporting Black-owned businesses and organizations',
      'Attending educational events about the history of slavery and emancipation',
    ]),
    funFacts: i18nArray([
      'Juneteenth became the newest federal holiday in 2021 — the first new federal holiday since MLK Day in 1983.',
      'The color red is significant in Juneteenth celebrations, symbolizing resilience and the blood shed by enslaved people.',
      'Texas was the first state to make Juneteenth a state holiday in 1980.',
      'Juneteenth is sometimes called "America\'s second Independence Day."',
    ]),
    planningChecklist: i18nArray([
      'Find local Juneteenth festivals, parades, and community events',
      'Learn about the history of emancipation and the significance of June 19, 1865',
      'Support Black-owned businesses and organizations in your community',
      'Plan a family gathering featuring traditional Juneteenth foods',
    ]),
    relatedHolidays: ['us_martin-luther-king-jr-day', 'us_independence-day'],
    seo: i18nSeo({
      titleTemplate: 'Juneteenth {year} — Date, Countdown & Celebration Guide',
      descriptionTemplate:
        'When is Juneteenth {year}? Live countdown, history of emancipation, traditions, and ways to celebrate Juneteenth National Independence Day.',
      keywords: [
        'when is Juneteenth',
        'Juneteenth date',
        'Juneteenth countdown',
        'Juneteenth history',
        'June 19 holiday',
      ],
    }),
    faq: i18nFaq([
      {
        question: 'When is Juneteenth {year}?',
        answer:
          'Juneteenth {year} falls on {dayOfWeek}, June 19, {year}. Juneteenth is always observed on June 19.',
      },
      {
        question: 'Is Juneteenth a federal holiday?',
        answer:
          'Yes, Juneteenth became a federal holiday on June 17, 2021, when President Biden signed the Juneteenth National Independence Day Act. It is the newest federal holiday in the United States.',
      },
      {
        question: 'Why is it called Juneteenth?',
        answer:
          'The name "Juneteenth" is a combination of "June" and "nineteenth," referring to June 19, 1865, when enslaved people in Galveston, Texas, learned of their freedom — more than two years after the Emancipation Proclamation.',
      },
    ]),
    colorTheme: 'red-green-black',
    icon: '✊🏿',
  },

  // =======================================================================
  // Halloween
  // =======================================================================
  {
    id: 'us_halloween',
    slugs: i18n('halloween'),
    names: i18n('Halloween'),
    countryCode: 'us',
    dateType: 'fixed',
    fixedMonth: 10,
    fixedDay: 31,
    descriptions: i18n(
      'Halloween is celebrated on October 31 each year. While not a federal holiday, it is one of the most popular cultural celebrations in the United States, featuring costumes, trick-or-treating, haunted houses, and festive decorations.',
    ),
    history: i18n(
      `Halloween has its roots in the ancient Celtic festival of Samhain, celebrated over 2,000 years ago in what is now Ireland, the United Kingdom, and northern France. The Celts believed that on October 31, the boundary between the living and the dead became blurred, and ghosts returned to earth.\n\nIrish and Scottish immigrants brought Halloween traditions to North America in the 19th century. By the early 20th century, Halloween evolved into a community-centered holiday focused on parties, costumes, and trick-or-treating. Today, Americans spend over $10 billion annually on Halloween, making it one of the largest commercial holidays in the country.`,
    ),
    traditions: i18nArray([
      'Trick-or-treating door to door in costumes',
      'Carving jack-o\'-lanterns from pumpkins',
      'Decorating homes with spooky themes — ghosts, skeletons, and spider webs',
      'Attending costume parties and haunted houses',
      'Watching horror movies and telling ghost stories',
      'Bobbing for apples and playing Halloween party games',
    ]),
    funFacts: i18nArray([
      'Americans spend over $10 billion on Halloween each year, including $3.6 billion on costumes.',
      'The tradition of carving jack-o\'-lanterns originated in Ireland, where turnips were originally used instead of pumpkins.',
      'Candy corn has been produced since the 1880s — it was originally called "Chicken Feed."',
      'The word "Halloween" comes from "All Hallows\' Eve," the evening before All Saints\' Day (November 1).',
    ]),
    planningChecklist: i18nArray([
      'Plan and prepare costumes well before October 31',
      'Buy candy for trick-or-treaters early to get the best selection',
      'Decorate your home and yard with Halloween-themed decorations',
      'Map out a trick-or-treating route for children and check for local safety guidelines',
      'Carve pumpkins and display them on your porch',
    ]),
    relatedHolidays: ['us_thanksgiving', 'us_christmas'],
    seo: i18nSeo({
      titleTemplate: 'Halloween {year} — Countdown, Date & Celebration Guide',
      descriptionTemplate:
        'How many days until Halloween {year}? Live countdown to October 31, plus costume ideas, traditions, and planning tips.',
      keywords: [
        'when is Halloween',
        'Halloween date',
        'Halloween countdown',
        'days until Halloween',
        'Halloween traditions',
      ],
    }),
    faq: i18nFaq([
      {
        question: 'When is Halloween {year}?',
        answer:
          'Halloween {year} falls on {dayOfWeek}, October 31, {year}. Halloween is always celebrated on October 31.',
      },
      {
        question: 'Is Halloween a federal holiday?',
        answer:
          'No, Halloween is not a federal holiday in the United States. Schools, businesses, and government offices remain open. However, it is one of the most widely celebrated cultural holidays in the country.',
      },
      {
        question: 'What are the most popular Halloween costumes?',
        answer:
          'The most popular Halloween costumes vary each year, but perennial favorites include witches, vampires, zombies, superheroes, princesses, and characters from current movies and TV shows. Pop culture trends heavily influence costume choices each year.',
      },
    ]),
    colorTheme: 'orange-black',
    icon: '🎃',
  },

  // =======================================================================
  // Valentine's Day
  // =======================================================================
  {
    id: 'us_valentines-day',
    slugs: i18n('valentines-day'),
    names: i18n("Valentine's Day"),
    countryCode: 'us',
    dateType: 'fixed',
    fixedMonth: 2,
    fixedDay: 14,
    descriptions: i18n(
      "Valentine's Day is celebrated on February 14 each year. It is a day dedicated to love and romance, when people express affection through cards, flowers, chocolates, and gifts. While not a federal holiday, it is one of the most commercially significant celebrations in the United States.",
    ),
    history: i18n(
      `Valentine's Day is named after Saint Valentine, a Christian martyr from the 3rd century. The exact identity of Saint Valentine is debated — there were several early Christian saints with that name. The association of Saint Valentine's Day with romantic love dates to the Middle Ages, particularly through the writings of Geoffrey Chaucer and his contemporaries.\n\nThe tradition of exchanging Valentine's cards began in the 18th century in England and was brought to America by immigrants. Esther Howland, known as the "Mother of the American Valentine," began mass-producing Valentine's cards in Worcester, Massachusetts, in the 1840s. Today, approximately 145 million Valentine's Day cards are exchanged annually in the United States.`,
    ),
    traditions: i18nArray([
      'Exchanging Valentine\'s Day cards with loved ones',
      'Giving flowers, especially red roses, as a symbol of love',
      'Gifting chocolates and candy to romantic partners',
      'Going out for a romantic dinner at a restaurant',
      'Children exchanging Valentine\'s cards with classmates at school',
      'Proposing marriage or celebrating wedding anniversaries',
    ]),
    funFacts: i18nArray([
      'Approximately 145 million Valentine\'s Day cards are exchanged each year in the U.S., making it the second-largest card-giving holiday after Christmas.',
      'The average American spends about $175 on Valentine\'s Day gifts.',
      'Over 250 million roses are produced for Valentine\'s Day each year.',
      'The iconic candy conversation hearts were invented in 1866.',
    ]),
    planningChecklist: i18nArray([
      'Make dinner reservations well in advance — restaurants book up quickly',
      'Order flowers early to ensure delivery on February 14',
      'Choose a thoughtful gift — chocolates, jewelry, or a heartfelt card',
      'Plan a special activity or date night',
    ]),
    relatedHolidays: ['us_mothers-day', 'us_christmas'],
    seo: i18nSeo({
      titleTemplate: "Valentine's Day {year} — Countdown, Date & Gift Guide",
      descriptionTemplate:
        "How many days until Valentine's Day {year}? Live countdown to February 14, plus gift ideas, traditions, and planning tips.",
      keywords: [
        "when is Valentine's Day",
        "Valentine's Day date",
        "Valentine's Day countdown",
        "Valentine's Day gifts",
        "February 14 holiday",
      ],
    }),
    faq: i18nFaq([
      {
        question: "When is Valentine's Day {year}?",
        answer:
          "Valentine's Day {year} falls on {dayOfWeek}, February 14, {year}. Valentine's Day is always celebrated on February 14.",
      },
      {
        question: "Is Valentine's Day a federal holiday?",
        answer:
          "No, Valentine's Day is not a federal holiday in the United States. Schools, businesses, and government offices remain open.",
      },
      {
        question: "Why do we celebrate Valentine's Day?",
        answer:
          "Valentine's Day is named after Saint Valentine, a 3rd-century Christian martyr. The holiday's association with romantic love dates to the Middle Ages. Today it is celebrated worldwide as a day to express love and affection through cards, gifts, and special gestures.",
      },
    ]),
    colorTheme: 'red-pink',
    icon: '❤️',
  },

  // =======================================================================
  // St. Patrick's Day
  // =======================================================================
  {
    id: 'us_st-patricks-day',
    slugs: i18n('st-patricks-day'),
    names: i18n("St. Patrick's Day"),
    countryCode: 'us',
    dateType: 'fixed',
    fixedMonth: 3,
    fixedDay: 17,
    descriptions: i18n(
      "St. Patrick's Day is celebrated on March 17 each year, honoring Saint Patrick, the patron saint of Ireland. In the United States, it is widely celebrated as a festive day of Irish culture, with parades, green attire, traditional food, and community events.",
    ),
    history: i18n(
      `St. Patrick's Day commemorates Saint Patrick, who is credited with bringing Christianity to Ireland in the 5th century. Born in Roman Britain, Patrick was kidnapped by Irish raiders at age 16 and spent six years in captivity before escaping, later returning to Ireland as a missionary.\n\nThe first recorded St. Patrick's Day parade in the United States was held in New York City on March 17, 1762, when Irish soldiers serving in the British Army marched through the city. Irish immigration to America, especially during the Great Famine of the 1840s, cemented St. Patrick's Day as a major cultural celebration. Today, the New York City St. Patrick's Day Parade is the largest in the world, drawing over 2 million spectators.`,
    ),
    traditions: i18nArray([
      'Wearing green clothing and accessories',
      'Attending St. Patrick\'s Day parades',
      'Eating traditional Irish foods like corned beef and cabbage, soda bread, and Irish stew',
      'Drinking Irish beverages and visiting pubs',
      'Decorating with shamrocks and leprechaun imagery',
      'Cities dyeing rivers and landmarks green (e.g., the Chicago River)',
    ]),
    funFacts: i18nArray([
      'The Chicago River has been dyed green for St. Patrick\'s Day every year since 1962.',
      'Saint Patrick was not actually Irish — he was born in Roman Britain.',
      'The original color associated with St. Patrick was blue, not green.',
      'About 33 million Americans claim Irish ancestry — more than seven times the population of Ireland.',
    ]),
    planningChecklist: i18nArray([
      'Find local St. Patrick\'s Day parades and events',
      'Stock up on green clothing and accessories',
      'Plan an Irish-themed dinner or visit an Irish pub',
      'Make reservations at restaurants early — they fill up fast',
    ]),
    relatedHolidays: ['us_valentines-day', 'us_halloween'],
    seo: i18nSeo({
      titleTemplate: "St. Patrick's Day {year} — Countdown, Date & Celebration Guide",
      descriptionTemplate:
        "How many days until St. Patrick's Day {year}? Live countdown to March 17, plus parade info, traditions, and celebration tips.",
      keywords: [
        "when is St. Patrick's Day",
        "St. Patrick's Day date",
        "St. Patrick's Day countdown",
        "St. Patrick's Day parade",
        'March 17 holiday',
      ],
    }),
    faq: i18nFaq([
      {
        question: "When is St. Patrick's Day {year}?",
        answer:
          "St. Patrick's Day {year} falls on {dayOfWeek}, March 17, {year}. St. Patrick's Day is always celebrated on March 17.",
      },
      {
        question: "Is St. Patrick's Day a federal holiday?",
        answer:
          "No, St. Patrick's Day is not a federal holiday in the United States. Schools, businesses, and government offices remain open, though many communities hold parades and celebrations.",
      },
      {
        question: 'Why do we wear green on St. Patrick\'s Day?',
        answer:
          'Wearing green on St. Patrick\'s Day is associated with Ireland (the "Emerald Isle"), the green in the Irish flag, and the shamrock, which Saint Patrick is said to have used to explain the Holy Trinity. The tradition also includes playfully pinching those who don\'t wear green.',
      },
    ]),
    colorTheme: 'green-gold',
    icon: '☘️',
  },

  // =======================================================================
  // Mother's Day
  // =======================================================================
  {
    id: 'us_mothers-day',
    slugs: i18n('mothers-day'),
    names: i18n("Mother's Day"),
    countryCode: 'us',
    dateType: 'calculated',
    calculateDate: (year: number) => nthWeekday(year, 5, 0, 2),
    descriptions: i18n(
      "Mother's Day is celebrated on the second Sunday of May in the United States. It is a day to honor mothers, motherhood, and maternal figures. The holiday is one of the most commercially significant days of the year, with Americans spending billions on gifts, flowers, and dining out.",
    ),
    history: i18n(
      `The modern Mother's Day was established by Anna Jarvis of Grafton, West Virginia, who organized the first official Mother's Day celebration on May 10, 1908, at St. Andrew's Methodist Church. Jarvis campaigned to make Mother's Day a recognized holiday, and in 1914, President Woodrow Wilson signed a proclamation designating the second Sunday in May as Mother's Day.\n\nIronically, Anna Jarvis later became critical of the holiday's commercialization and spent much of her later life fighting against the greeting card, candy, and flower industries she felt had exploited the holiday. Despite her efforts, Mother's Day grew into one of the highest-grossing commercial holidays in the United States.`,
    ),
    traditions: i18nArray([
      'Giving mothers cards, flowers (especially carnations and roses), and gifts',
      'Taking mothers out for brunch or a special dinner',
      'Making breakfast in bed for Mom',
      'Spending quality family time together',
      'Calling or video chatting with mothers who live far away',
    ]),
    funFacts: i18nArray([
      'Mother\'s Day is the busiest day of the year for restaurants in the United States.',
      'Anna Jarvis, the founder of Mother\'s Day, later regretted its commercialization and tried to have it rescinded.',
      'About 113 million Mother\'s Day cards are sent each year in the U.S.',
      'Americans spend approximately $31.7 billion on Mother\'s Day annually.',
    ]),
    planningChecklist: i18nArray([
      'Make restaurant reservations early — Mother\'s Day is the busiest day for dining out',
      'Order flowers for delivery before the rush',
      'Choose a thoughtful gift or plan a special experience',
      'If Mom is far away, schedule a video call or send a care package',
    ]),
    relatedHolidays: ['us_valentines-day', 'us_thanksgiving'],
    seo: i18nSeo({
      titleTemplate: "Mother's Day {year} — Date, Countdown & Gift Guide",
      descriptionTemplate:
        "When is Mother's Day {year}? Live countdown, gift ideas, traditions, and tips to celebrate the mothers in your life.",
      keywords: [
        "when is Mother's Day",
        "Mother's Day date",
        "Mother's Day countdown",
        "Mother's Day gifts",
        "Mother's Day brunch",
      ],
    }),
    faq: i18nFaq([
      {
        question: "When is Mother's Day {year}?",
        answer:
          "Mother's Day {year} falls on {date}. It is always celebrated on the second Sunday of May.",
      },
      {
        question: "Is Mother's Day a federal holiday?",
        answer:
          "No, Mother's Day is not a federal holiday in the United States. However, it is widely recognized and celebrated, with many businesses offering special promotions and events.",
      },
      {
        question: "What are the most popular Mother's Day gifts?",
        answer:
          "The most popular Mother's Day gifts include flowers (especially roses and carnations), greeting cards, brunch or dinner at a restaurant, jewelry, spa treatments, and personalized gifts. Experiences like a day trip or cooking class are also increasingly popular.",
      },
    ]),
    colorTheme: 'pink-white',
    icon: '💐',
  },
];

export default usHolidays;
