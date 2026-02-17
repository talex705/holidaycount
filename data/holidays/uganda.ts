/**
 * Uganda holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getEidAlFitrDate, getEidAlAdhaDate } from './_shared-dates';

// ---------------------------------------------------------------------------
// Liberation Day — January 26
// ---------------------------------------------------------------------------

const liberationDay: HolidayData = {
  id: 'ug_liberation-day',
  countryCode: 'ug',
  slugs: { en: 'liberation-day', fr: 'jour-de-la-liberation', es: 'dia-de-la-liberacion' },
  names: { en: 'Liberation Day', fr: 'Jour de la Lib\u00e9ration', es: 'D\u00eda de la Liberaci\u00f3n' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 26,

  descriptions: {
    en: 'Liberation Day on January 26 commemorates the day the National Resistance Movement (NRM) came to power in 1986, ending years of civil conflict. The day is marked with military celebrations, speeches, and national pride.',
    fr: "Le Jour de la Lib\u00e9ration, le 26 janvier, comm\u00e9more le jour o\u00f9 le Mouvement de R\u00e9sistance Nationale (NRM) est arriv\u00e9 au pouvoir en 1986, mettant fin \u00e0 des ann\u00e9es de conflit civil. La journ\u00e9e est marqu\u00e9e par des c\u00e9l\u00e9brations militaires, des discours et la fiert\u00e9 nationale.",
    es: 'El D\u00eda de la Liberaci\u00f3n, el 26 de enero, conmemora el d\u00eda en que el Movimiento de Resistencia Nacional (NRM) lleg\u00f3 al poder en 1986, poniendo fin a a\u00f1os de conflicto civil. El d\u00eda se marca con celebraciones militares, discursos y orgullo nacional.',
  },

  history: {
    en: "On January 26, 1986, the National Resistance Movement (NRM) led by Yoweri Museveni captured Kampala and took control of Uganda's government, ending a prolonged period of political instability, civil war, and human rights abuses under previous regimes.\n\nThe NRM had waged a five-year guerrilla campaign known as the \"Bush War\" from 1981 to 1986 against the governments of Milton Obote and Tito Okello. The conflict followed the turbulent era of Idi Amin's dictatorship (1971-1979) and the subsequent political chaos.\n\nLiberation Day is celebrated as the beginning of a new era of stability and development in Uganda. The holiday features military parades, presidential addresses, cultural performances, and reflections on the country's journey from conflict to relative peace. It remains one of Uganda's most politically significant public holidays.",
    fr: "Le 26 janvier 1986, le Mouvement de R\u00e9sistance Nationale (NRM) dirig\u00e9 par Yoweri Museveni a captur\u00e9 Kampala et pris le contr\u00f4le du gouvernement ougandais, mettant fin \u00e0 une longue p\u00e9riode d'instabilit\u00e9 politique et de guerre civile sous les r\u00e9gimes pr\u00e9c\u00e9dents.\n\nLe NRM avait men\u00e9 une campagne de gu\u00e9rilla de cinq ans connue sous le nom de \u00ab Bush War \u00bb de 1981 \u00e0 1986 contre les gouvernements de Milton Obote et Tito Okello. Le conflit a suivi l'\u00e8re turbulente de la dictature d'Idi Amin (1971-1979).\n\nLe Jour de la Lib\u00e9ration est c\u00e9l\u00e9br\u00e9 comme le d\u00e9but d'une nouvelle \u00e8re de stabilit\u00e9 et de d\u00e9veloppement en Ouganda. Le jour f\u00e9ri\u00e9 comprend des d\u00e9fil\u00e9s militaires, des discours pr\u00e9sidentiels, des spectacles culturels et des r\u00e9flexions sur le parcours du pays du conflit vers la paix relative.",
    es: "El 26 de enero de 1986, el Movimiento de Resistencia Nacional (NRM) liderado por Yoweri Museveni captur\u00f3 Kampala y tom\u00f3 el control del gobierno de Uganda, poniendo fin a un prolongado per\u00edodo de inestabilidad pol\u00edtica y guerra civil bajo reg\u00edmenes anteriores.\n\nEl NRM hab\u00eda librado una campa\u00f1a guerrillera de cinco a\u00f1os conocida como la \"Guerra de la Selva\" de 1981 a 1986 contra los gobiernos de Milton Obote y Tito Okello. El conflicto sigui\u00f3 a la turbulenta era de la dictadura de Idi Amin (1971-1979).\n\nEl D\u00eda de la Liberaci\u00f3n se celebra como el comienzo de una nueva era de estabilidad y desarrollo en Uganda. El d\u00eda festivo incluye desfiles militares, discursos presidenciales, espect\u00e1culos culturales y reflexiones sobre el camino del pa\u00eds del conflicto a la paz relativa.",
  },

  traditions: {
    en: [
      'Military parades and displays at the national celebrations venue',
      'Presidential address to the nation by the head of state',
      'Wreath-laying at memorials for those who fought in the liberation struggle',
      'Cultural performances featuring traditional Ugandan dances and music',
      'Veterans\' recognition ceremonies and awards',
      'Community gatherings and patriotic events across the country',
      'Civic education programs about Uganda\'s liberation history',
    ],
    fr: [
      'D\u00e9fil\u00e9s et d\u00e9monstrations militaires au lieu des c\u00e9l\u00e9brations nationales',
      'Discours pr\u00e9sidentiel \u00e0 la nation par le chef de l\'\u00c9tat',
      'D\u00e9p\u00f4t de gerbes aux m\u00e9moriaux pour ceux qui ont combattu dans la lutte de lib\u00e9ration',
      'Spectacles culturels avec danses et musiques traditionnelles ougandaises',
      'C\u00e9r\u00e9monies de reconnaissance et remise de prix aux v\u00e9t\u00e9rans',
      'Rassemblements communautaires et \u00e9v\u00e9nements patriotiques \u00e0 travers le pays',
      'Programmes d\'\u00e9ducation civique sur l\'histoire de la lib\u00e9ration de l\'Ouganda',
    ],
    es: [
      'Desfiles y exhibiciones militares en el lugar de las celebraciones nacionales',
      'Discurso presidencial a la naci\u00f3n por el jefe de estado',
      'Ofrenda floral en memoriales a quienes lucharon en la lucha de liberaci\u00f3n',
      'Espect\u00e1culos culturales con danzas y m\u00fasica tradicionales ugandesas',
      'Ceremonias de reconocimiento y premios a los veteranos',
      'Reuniones comunitarias y eventos patri\u00f3ticos en todo el pa\u00eds',
      'Programas de educaci\u00f3n c\u00edvica sobre la historia de la liberaci\u00f3n de Uganda',
    ],
  },

  funFacts: {
    en: [
      'The NRM\'s "Bush War" lasted five years (1981-1986) and was fought primarily in the Luwero Triangle region of central Uganda.',
      'Yoweri Museveni, who led the NRM, has been Uganda\'s president since 1986, making him one of Africa\'s longest-serving heads of state.',
      'Liberation Day celebrations are held at a different location each year, rotating among Uganda\'s districts.',
      'The NRM\'s ten-point programme, announced upon taking power, outlined goals for democracy, security, and economic development.',
      'Uganda\'s national anthem, "Oh Uganda, Land of Beauty," is performed at all Liberation Day celebrations.',
    ],
    fr: [
      'La \u00ab Bush War \u00bb du NRM a dur\u00e9 cinq ans (1981-1986) et s\'est d\u00e9roul\u00e9e principalement dans la r\u00e9gion du Triangle de Luwero en Ouganda central.',
      'Yoweri Museveni, qui a dirig\u00e9 le NRM, est pr\u00e9sident de l\'Ouganda depuis 1986, ce qui en fait l\'un des chefs d\'\u00c9tat les plus longtemps en fonction en Afrique.',
      'Les c\u00e9l\u00e9brations du Jour de la Lib\u00e9ration se tiennent dans un lieu diff\u00e9rent chaque ann\u00e9e.',
      'Le programme en dix points du NRM, annonc\u00e9 lors de la prise de pouvoir, d\u00e9finissait des objectifs pour la d\u00e9mocratie, la s\u00e9curit\u00e9 et le d\u00e9veloppement \u00e9conomique.',
      'L\'hymne national ougandais, \u00ab Oh Uganda, Land of Beauty \u00bb, est interpr\u00e9t\u00e9 lors de toutes les c\u00e9l\u00e9brations du Jour de la Lib\u00e9ration.',
    ],
    es: [
      'La "Guerra de la Selva" del NRM dur\u00f3 cinco a\u00f1os (1981-1986) y se libr\u00f3 principalmente en la regi\u00f3n del Tri\u00e1ngulo de Luwero en el centro de Uganda.',
      'Yoweri Museveni, quien lider\u00f3 el NRM, ha sido presidente de Uganda desde 1986, convirti\u00e9ndolo en uno de los jefes de estado m\u00e1s longevos de \u00c1frica.',
      'Las celebraciones del D\u00eda de la Liberaci\u00f3n se realizan en un lugar diferente cada a\u00f1o, rotando entre los distritos de Uganda.',
      'El programa de diez puntos del NRM, anunciado al tomar el poder, delineaba metas para la democracia, seguridad y desarrollo econ\u00f3mico.',
      'El himno nacional de Uganda, "Oh Uganda, Land of Beauty", se interpreta en todas las celebraciones del D\u00eda de la Liberaci\u00f3n.',
    ],
  },

  planningChecklist: {
    en: [
      'Check which district is hosting the national celebrations this year',
      'Plan to attend military parades and cultural events',
      'Learn about Uganda\'s liberation history before the holiday',
      'Watch the presidential address on national television',
      'Participate in community events and civic education programs',
    ],
    fr: [
      'V\u00e9rifier quel district accueille les c\u00e9l\u00e9brations nationales cette ann\u00e9e',
      'Pr\u00e9voir d\'assister aux d\u00e9fil\u00e9s militaires et \u00e9v\u00e9nements culturels',
      'Se renseigner sur l\'histoire de la lib\u00e9ration de l\'Ouganda avant le jour f\u00e9ri\u00e9',
      'Regarder le discours pr\u00e9sidentiel \u00e0 la t\u00e9l\u00e9vision nationale',
      'Participer aux \u00e9v\u00e9nements communautaires et programmes d\'\u00e9ducation civique',
    ],
    es: [
      'Verificar qu\u00e9 distrito alberga las celebraciones nacionales este a\u00f1o',
      'Planificar asistir a desfiles militares y eventos culturales',
      'Aprender sobre la historia de la liberaci\u00f3n de Uganda antes del d\u00eda festivo',
      'Ver el discurso presidencial por televisi\u00f3n nacional',
      'Participar en eventos comunitarios y programas de educaci\u00f3n c\u00edvica',
    ],
  },

  relatedHolidays: ['ug_independence-day', 'ug_womens-day'],

  seo: {
    en: {
      titleTemplate: 'Liberation Day {year} Uganda \u2014 Countdown & History',
      descriptionTemplate: 'When is Liberation Day {year} in Uganda? Live countdown to January 26, NRM history, and celebration guide.',
      keywords: ['Liberation Day Uganda', 'January 26 Uganda', 'NRM Uganda', 'Uganda public holiday', 'Museveni Liberation Day'],
    },
    fr: {
      titleTemplate: 'Jour de la Lib\u00e9ration {year} Ouganda \u2014 Compte \u00e0 rebours et histoire',
      descriptionTemplate: 'Quand est le Jour de la Lib\u00e9ration {year} en Ouganda ? Compte \u00e0 rebours en direct jusqu\'au 26 janvier, histoire et guide.',
      keywords: ['Jour Lib\u00e9ration Ouganda', '26 janvier Ouganda', 'NRM Ouganda', 'jour f\u00e9ri\u00e9 Ouganda', 'Museveni Lib\u00e9ration'],
    },
    es: {
      titleTemplate: 'D\u00eda de la Liberaci\u00f3n {year} Uganda \u2014 Cuenta regresiva e historia',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda de la Liberaci\u00f3n {year} en Uganda? Cuenta regresiva en vivo hasta el 26 de enero, historia y gu\u00eda.',
      keywords: ['D\u00eda Liberaci\u00f3n Uganda', '26 de enero Uganda', 'NRM Uganda', 'd\u00eda festivo Uganda', 'Museveni Liberaci\u00f3n'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Liberation Day {year} in Uganda?',
        fr: 'Quand est le Jour de la Lib\u00e9ration {year} en Ouganda ?',
        es: '\u00bfCu\u00e1ndo es el D\u00eda de la Liberaci\u00f3n {year} en Uganda?',
      },
      answer: {
        en: 'Liberation Day {year} in Uganda is on {date} ({dayOfWeek}). It is always celebrated on January 26.',
        fr: 'Le Jour de la Lib\u00e9ration {year} en Ouganda est le {date} ({dayOfWeek}). Il est toujours c\u00e9l\u00e9br\u00e9 le 26 janvier.',
        es: 'El D\u00eda de la Liberaci\u00f3n {year} en Uganda es el {date} ({dayOfWeek}). Siempre se celebra el 26 de enero.',
      },
    },
    {
      question: {
        en: 'What happened on January 26, 1986?',
        fr: 'Que s\'est-il pass\u00e9 le 26 janvier 1986 ?',
        es: '\u00bfQu\u00e9 sucedi\u00f3 el 26 de enero de 1986?',
      },
      answer: {
        en: 'On January 26, 1986, the National Resistance Movement (NRM) led by Yoweri Museveni captured Kampala and took control of Uganda\'s government, ending years of civil war and political instability.',
        fr: 'Le 26 janvier 1986, le Mouvement de R\u00e9sistance Nationale (NRM) dirig\u00e9 par Yoweri Museveni a captur\u00e9 Kampala et pris le contr\u00f4le du gouvernement ougandais, mettant fin \u00e0 des ann\u00e9es de guerre civile.',
        es: 'El 26 de enero de 1986, el Movimiento de Resistencia Nacional (NRM) liderado por Yoweri Museveni captur\u00f3 Kampala y tom\u00f3 el control del gobierno de Uganda, poniendo fin a a\u00f1os de guerra civil.',
      },
    },
    {
      question: {
        en: 'How is Liberation Day celebrated in Uganda?',
        fr: 'Comment le Jour de la Lib\u00e9ration est-il c\u00e9l\u00e9br\u00e9 en Ouganda ?',
        es: '\u00bfC\u00f3mo se celebra el D\u00eda de la Liberaci\u00f3n en Uganda?',
      },
      answer: {
        en: 'Liberation Day is celebrated with military parades, presidential addresses, cultural performances, wreath-laying ceremonies, and community events. The celebrations rotate to a different district each year.',
        fr: 'Le Jour de la Lib\u00e9ration est c\u00e9l\u00e9br\u00e9 avec des d\u00e9fil\u00e9s militaires, des discours pr\u00e9sidentiels, des spectacles culturels, des d\u00e9p\u00f4ts de gerbes et des \u00e9v\u00e9nements communautaires.',
        es: 'El D\u00eda de la Liberaci\u00f3n se celebra con desfiles militares, discursos presidenciales, espect\u00e1culos culturales, ceremonias de ofrenda floral y eventos comunitarios.',
      },
    },
    {
      question: {
        en: 'Is Liberation Day a public holiday in Uganda?',
        fr: 'Le Jour de la Lib\u00e9ration est-il un jour f\u00e9ri\u00e9 en Ouganda ?',
        es: '\u00bfEl D\u00eda de la Liberaci\u00f3n es un d\u00eda festivo en Uganda?',
      },
      answer: {
        en: 'Yes, Liberation Day is an official public holiday in Uganda. Government offices, schools, and banks are closed.',
        fr: 'Oui, le Jour de la Lib\u00e9ration est un jour f\u00e9ri\u00e9 officiel en Ouganda. Les bureaux gouvernementaux, les \u00e9coles et les banques sont ferm\u00e9s.',
        es: 'S\u00ed, el D\u00eda de la Liberaci\u00f3n es un d\u00eda festivo oficial en Uganda. Las oficinas gubernamentales, escuelas y bancos est\u00e1n cerrados.',
      },
    },
  ],

  colorTheme: 'black-yellow-red',
  icon: '\ud83c\uddfa\ud83c\uddec',
};

// ---------------------------------------------------------------------------
// Women's Day — March 8
// ---------------------------------------------------------------------------

const womensDay: HolidayData = {
  id: 'ug_womens-day',
  countryCode: 'ug',
  slugs: { en: 'womens-day', fr: 'journee-des-femmes', es: 'dia-de-la-mujer' },
  names: { en: "International Women's Day", fr: 'Journ\u00e9e internationale des femmes', es: 'D\u00eda Internacional de la Mujer' },

  dateType: 'fixed',
  fixedMonth: 3,
  fixedDay: 8,

  descriptions: {
    en: "International Women's Day on March 8 is a public holiday in Uganda, celebrating women's achievements and advocating for gender equality. Uganda is one of the few countries where this day is an official public holiday.",
    fr: "La Journ\u00e9e internationale des femmes, le 8 mars, est un jour f\u00e9ri\u00e9 en Ouganda, c\u00e9l\u00e9brant les r\u00e9alisations des femmes et plaidant pour l'\u00e9galit\u00e9 des genres. L'Ouganda est l'un des rares pays o\u00f9 cette journ\u00e9e est un jour f\u00e9ri\u00e9 officiel.",
    es: "El D\u00eda Internacional de la Mujer, el 8 de marzo, es un d\u00eda festivo en Uganda, celebrando los logros de las mujeres y abogando por la igualdad de g\u00e9nero. Uganda es uno de los pocos pa\u00edses donde este d\u00eda es un d\u00eda festivo oficial.",
  },

  history: {
    en: "International Women's Day has been observed globally since the early 1900s, originating from labor movements in North America and Europe. Uganda designated March 8 as a public holiday to underscore the country's commitment to women's rights and gender equality.\n\nUganda has been a leader in women's political representation in Africa. The country's 1995 constitution mandated that one-third of local government seats be reserved for women. Uganda was one of the first African nations to have a female vice president (Dr. Speciosa Wandira-Kazibwe, 1994-2003).\n\nThe holiday serves as both a celebration of women's achievements and a platform for advocating continued progress in areas such as education, healthcare, economic empowerment, and protection against gender-based violence. Events range from government-organized ceremonies to grassroots community celebrations.",
    fr: "La Journ\u00e9e internationale des femmes est observ\u00e9e dans le monde entier depuis le d\u00e9but des ann\u00e9es 1900, originaire des mouvements ouvriers en Am\u00e9rique du Nord et en Europe. L'Ouganda a d\u00e9sign\u00e9 le 8 mars comme jour f\u00e9ri\u00e9 pour souligner l'engagement du pays envers les droits des femmes.\n\nL'Ouganda a \u00e9t\u00e9 un leader dans la repr\u00e9sentation politique des femmes en Afrique. La constitution de 1995 du pays a impos\u00e9 qu'un tiers des si\u00e8ges du gouvernement local soient r\u00e9serv\u00e9s aux femmes. L'Ouganda a \u00e9t\u00e9 l'une des premi\u00e8res nations africaines \u00e0 avoir une vice-pr\u00e9sidente (Dr. Speciosa Wandira-Kazibwe, 1994-2003).\n\nLe jour f\u00e9ri\u00e9 sert \u00e0 la fois de c\u00e9l\u00e9bration des r\u00e9alisations des femmes et de plateforme pour plaider en faveur du progr\u00e8s continu dans des domaines tels que l'\u00e9ducation, la sant\u00e9, l'autonomisation \u00e9conomique et la protection contre les violences bas\u00e9es sur le genre.",
    es: "El D\u00eda Internacional de la Mujer se observa a nivel mundial desde principios de los a\u00f1os 1900, originado en los movimientos laborales de Am\u00e9rica del Norte y Europa. Uganda design\u00f3 el 8 de marzo como d\u00eda festivo para subrayar el compromiso del pa\u00eds con los derechos de las mujeres.\n\nUganda ha sido l\u00edder en la representaci\u00f3n pol\u00edtica de las mujeres en \u00c1frica. La constituci\u00f3n de 1995 del pa\u00eds estableci\u00f3 que un tercio de los esca\u00f1os del gobierno local fueran reservados para mujeres. Uganda fue una de las primeras naciones africanas en tener una vicepresidenta (Dra. Speciosa Wandira-Kazibwe, 1994-2003).\n\nEl d\u00eda festivo sirve tanto como celebraci\u00f3n de los logros de las mujeres como plataforma para abogar por el progreso continuo en \u00e1reas como educaci\u00f3n, salud, empoderamiento econ\u00f3mico y protecci\u00f3n contra la violencia de g\u00e9nero.",
  },

  traditions: {
    en: [
      'National celebrations with speeches by government officials and women leaders',
      'Community events featuring women\'s achievements and success stories',
      'Cultural performances and traditional dances by women\'s groups',
      'Awards and recognition for outstanding women in various fields',
      'Educational seminars on gender equality and women\'s empowerment',
      'Charity drives and community service projects benefiting women',
    ],
    fr: [
      'C\u00e9l\u00e9brations nationales avec des discours de responsables gouvernementaux et de femmes leaders',
      '\u00c9v\u00e9nements communautaires pr\u00e9sentant les r\u00e9alisations et les histoires de r\u00e9ussite des femmes',
      'Spectacles culturels et danses traditionnelles par des groupes de femmes',
      'Prix et reconnaissance pour les femmes exceptionnelles dans divers domaines',
      'S\u00e9minaires \u00e9ducatifs sur l\'\u00e9galit\u00e9 des genres et l\'autonomisation des femmes',
      'Campagnes de charit\u00e9 et projets de service communautaire au profit des femmes',
    ],
    es: [
      'Celebraciones nacionales con discursos de funcionarios del gobierno y mujeres l\u00edderes',
      'Eventos comunitarios que presentan logros e historias de \u00e9xito de mujeres',
      'Espect\u00e1culos culturales y danzas tradicionales por grupos de mujeres',
      'Premios y reconocimiento para mujeres destacadas en diversos campos',
      'Seminarios educativos sobre igualdad de g\u00e9nero y empoderamiento de la mujer',
      'Campa\u00f1as de caridad y proyectos de servicio comunitario que benefician a las mujeres',
    ],
  },

  funFacts: {
    en: [
      'Uganda is one of only a handful of countries worldwide where International Women\'s Day is a full public holiday.',
      'Uganda\'s 1995 constitution was groundbreaking in Africa for mandating women\'s representation in government.',
      'Dr. Speciosa Wandira-Kazibwe served as Uganda\'s and Africa\'s first female vice president from 1994 to 2003.',
      'Uganda has one of the highest rates of women in parliament in Africa, consistently above 30%.',
      'The holiday is used as a platform for NGOs and civil society to advocate for women\'s rights and gender equality.',
    ],
    fr: [
      'L\'Ouganda est l\'un des rares pays au monde o\u00f9 la Journ\u00e9e internationale des femmes est un jour f\u00e9ri\u00e9 complet.',
      'La constitution ougandaise de 1995 a \u00e9t\u00e9 pionnière en Afrique en imposant la repr\u00e9sentation des femmes au gouvernement.',
      'La Dr. Speciosa Wandira-Kazibwe a \u00e9t\u00e9 la premi\u00e8re vice-pr\u00e9sidente d\'Ouganda et d\'Afrique de 1994 \u00e0 2003.',
      'L\'Ouganda a l\'un des taux les plus \u00e9lev\u00e9s de femmes au parlement en Afrique, constamment au-dessus de 30%.',
      'Le jour f\u00e9ri\u00e9 est utilis\u00e9 comme plateforme par les ONG et la soci\u00e9t\u00e9 civile pour d\u00e9fendre les droits des femmes.',
    ],
    es: [
      'Uganda es uno de los pocos pa\u00edses en el mundo donde el D\u00eda Internacional de la Mujer es un d\u00eda festivo completo.',
      'La constituci\u00f3n de Uganda de 1995 fue pionera en \u00c1frica al exigir la representaci\u00f3n de las mujeres en el gobierno.',
      'La Dra. Speciosa Wandira-Kazibwe fue la primera vicepresidenta de Uganda y de \u00c1frica de 1994 a 2003.',
      'Uganda tiene una de las tasas m\u00e1s altas de mujeres en el parlamento en \u00c1frica, consistentemente por encima del 30%.',
      'El d\u00eda festivo se utiliza como plataforma por las ONG y la sociedad civil para abogar por los derechos de las mujeres.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the year\'s International Women\'s Day theme from the United Nations',
      'Attend local celebrations, seminars, or events honoring women',
      'Support women-owned businesses and organizations',
      'Participate in community service projects benefiting women',
      'Learn about pioneering Ugandan women and their achievements',
    ],
    fr: [
      'V\u00e9rifier le th\u00e8me de la Journ\u00e9e internationale des femmes de l\'ann\u00e9e aupr\u00e8s des Nations Unies',
      'Assister aux c\u00e9l\u00e9brations, s\u00e9minaires ou \u00e9v\u00e9nements locaux honorant les femmes',
      'Soutenir les entreprises et organisations dirig\u00e9es par des femmes',
      'Participer \u00e0 des projets de service communautaire au profit des femmes',
      'Se renseigner sur les femmes ougandaises pionni\u00e8res et leurs r\u00e9alisations',
    ],
    es: [
      'Consultar el tema del D\u00eda Internacional de la Mujer del a\u00f1o de las Naciones Unidas',
      'Asistir a celebraciones, seminarios o eventos locales que honren a las mujeres',
      'Apoyar negocios y organizaciones dirigidas por mujeres',
      'Participar en proyectos de servicio comunitario que beneficien a las mujeres',
      'Aprender sobre las mujeres ugandesas pioneras y sus logros',
    ],
  },

  relatedHolidays: ['ug_independence-day', 'ug_liberation-day'],

  seo: {
    en: {
      titleTemplate: "International Women's Day {year} Uganda \u2014 Countdown & Guide",
      descriptionTemplate: "When is Women's Day {year} in Uganda? Live countdown to March 8, celebration guide, and Uganda's women's achievements.",
      keywords: ["Women's Day Uganda", 'March 8 Uganda', "International Women's Day Africa", 'Uganda public holiday', 'gender equality Uganda'],
    },
    fr: {
      titleTemplate: 'Journ\u00e9e internationale des femmes {year} Ouganda \u2014 Compte \u00e0 rebours et guide',
      descriptionTemplate: 'Quand est la Journ\u00e9e des femmes {year} en Ouganda ? Compte \u00e0 rebours en direct jusqu\'au 8 mars et guide de c\u00e9l\u00e9bration.',
      keywords: ['Journ\u00e9e femmes Ouganda', '8 mars Ouganda', 'Journ\u00e9e internationale femmes Afrique', 'jour f\u00e9ri\u00e9 Ouganda', '\u00e9galit\u00e9 genres Ouganda'],
    },
    es: {
      titleTemplate: 'D\u00eda Internacional de la Mujer {year} Uganda \u2014 Cuenta regresiva y gu\u00eda',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda de la Mujer {year} en Uganda? Cuenta regresiva en vivo hasta el 8 de marzo y gu\u00eda de celebraci\u00f3n.',
      keywords: ['D\u00eda Mujer Uganda', '8 de marzo Uganda', 'D\u00eda Internacional Mujer \u00c1frica', 'd\u00eda festivo Uganda', 'igualdad g\u00e9nero Uganda'],
    },
  },

  faq: [
    {
      question: {
        en: "When is International Women's Day {year} in Uganda?",
        fr: 'Quand est la Journ\u00e9e internationale des femmes {year} en Ouganda ?',
        es: '\u00bfCu\u00e1ndo es el D\u00eda Internacional de la Mujer {year} en Uganda?',
      },
      answer: {
        en: "International Women's Day {year} in Uganda is on {date} ({dayOfWeek}). It is always celebrated on March 8.",
        fr: 'La Journ\u00e9e internationale des femmes {year} en Ouganda est le {date} ({dayOfWeek}). Elle est toujours c\u00e9l\u00e9br\u00e9e le 8 mars.',
        es: 'El D\u00eda Internacional de la Mujer {year} en Uganda es el {date} ({dayOfWeek}). Siempre se celebra el 8 de marzo.',
      },
    },
    {
      question: {
        en: "Is Women's Day a public holiday in Uganda?",
        fr: 'La Journ\u00e9e des femmes est-elle un jour f\u00e9ri\u00e9 en Ouganda ?',
        es: '\u00bfEl D\u00eda de la Mujer es un d\u00eda festivo en Uganda?',
      },
      answer: {
        en: "Yes, International Women's Day is an official public holiday in Uganda. Government offices, schools, and banks are closed. Uganda is one of the few countries where this day is a full public holiday.",
        fr: "Oui, la Journ\u00e9e internationale des femmes est un jour f\u00e9ri\u00e9 officiel en Ouganda. L'Ouganda est l'un des rares pays o\u00f9 cette journ\u00e9e est un jour f\u00e9ri\u00e9 complet.",
        es: "S\u00ed, el D\u00eda Internacional de la Mujer es un d\u00eda festivo oficial en Uganda. Uganda es uno de los pocos pa\u00edses donde este d\u00eda es un d\u00eda festivo completo.",
      },
    },
    {
      question: {
        en: "How does Uganda celebrate Women's Day?",
        fr: "Comment l'Ouganda c\u00e9l\u00e8bre-t-il la Journ\u00e9e des femmes ?",
        es: '\u00bfC\u00f3mo celebra Uganda el D\u00eda de la Mujer?',
      },
      answer: {
        en: "Uganda celebrates with government-organized ceremonies, community events, cultural performances, awards for outstanding women, educational seminars on gender equality, and charity drives benefiting women's causes.",
        fr: "L'Ouganda c\u00e9l\u00e8bre avec des c\u00e9r\u00e9monies organis\u00e9es par le gouvernement, des \u00e9v\u00e9nements communautaires, des spectacles culturels, des prix pour les femmes exceptionnelles et des s\u00e9minaires \u00e9ducatifs sur l'\u00e9galit\u00e9 des genres.",
        es: "Uganda celebra con ceremonias organizadas por el gobierno, eventos comunitarios, espect\u00e1culos culturales, premios para mujeres destacadas y seminarios educativos sobre igualdad de g\u00e9nero.",
      },
    },
    {
      question: {
        en: "Why is Women's Day important in Uganda?",
        fr: "Pourquoi la Journ\u00e9e des femmes est-elle importante en Ouganda ?",
        es: '\u00bfPor qu\u00e9 es importante el D\u00eda de la Mujer en Uganda?',
      },
      answer: {
        en: "Women's Day is important in Uganda because the country has been a leader in women's political representation in Africa. The holiday highlights women's achievements and serves as a platform for advocating continued progress in education, healthcare, and gender equality.",
        fr: "La Journ\u00e9e des femmes est importante en Ouganda car le pays a \u00e9t\u00e9 un leader dans la repr\u00e9sentation politique des femmes en Afrique. Le jour f\u00e9ri\u00e9 met en lumi\u00e8re les r\u00e9alisations des femmes et sert de plateforme pour le progr\u00e8s continu.",
        es: "El D\u00eda de la Mujer es importante en Uganda porque el pa\u00eds ha sido l\u00edder en la representaci\u00f3n pol\u00edtica de las mujeres en \u00c1frica. El d\u00eda festivo destaca los logros de las mujeres y sirve como plataforma para abogar por el progreso continuo.",
      },
    },
  ],

  colorTheme: 'purple-white',
  icon: '\u2640\ufe0f',
};

// ---------------------------------------------------------------------------
// Independence Day — October 9
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'ug_independence-day',
  countryCode: 'ug',
  slugs: { en: 'independence-day', fr: 'jour-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Jour de l'Ind\u00e9pendance", es: 'D\u00eda de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 10,
  fixedDay: 9,

  descriptions: {
    en: "Independence Day on October 9 celebrates Uganda's independence from the United Kingdom in 1962. National celebrations are held at the Kololo Independence Grounds in Kampala, featuring military parades, cultural performances, and presidential addresses.",
    fr: "Le Jour de l'Ind\u00e9pendance, le 9 octobre, c\u00e9l\u00e8bre l'ind\u00e9pendance de l'Ouganda du Royaume-Uni en 1962. Les c\u00e9l\u00e9brations nationales se tiennent au Kololo Independence Grounds \u00e0 Kampala, avec des d\u00e9fil\u00e9s militaires, des spectacles culturels et des discours pr\u00e9sidentiels.",
    es: "El D\u00eda de la Independencia, el 9 de octubre, celebra la independencia de Uganda del Reino Unido en 1962. Las celebraciones nacionales se realizan en los Terrenos de la Independencia de Kololo en Kampala, con desfiles militares, espect\u00e1culos culturales y discursos presidenciales.",
  },

  history: {
    en: "Uganda gained independence from the United Kingdom on October 9, 1962, with Sir Edward Mutesa II, the Kabaka (king) of Buganda, becoming the first president and Milton Obote serving as prime minister. The country had been a British protectorate since 1894.\n\nThe independence movement in Uganda was relatively peaceful compared to some other African colonies. Political negotiations led to a gradual transfer of power, with internal self-government granted in 1961 and full independence the following year.\n\nIndependence Day celebrations center on the Kololo Independence Grounds in Kampala, where the Ugandan flag was first raised at midnight on October 9, 1962. The annual celebrations feature military parades, cultural performances representing Uganda's diverse ethnic groups, and a presidential address to the nation.",
    fr: "L'Ouganda a obtenu son ind\u00e9pendance du Royaume-Uni le 9 octobre 1962, avec Sir Edward Mutesa II, le Kabaka (roi) du Buganda, devenant le premier pr\u00e9sident et Milton Obote servant comme premier ministre. Le pays \u00e9tait un protectorat britannique depuis 1894.\n\nLe mouvement d'ind\u00e9pendance en Ouganda a \u00e9t\u00e9 relativement pacifique compar\u00e9 \u00e0 d'autres colonies africaines. Les n\u00e9gociations politiques ont conduit \u00e0 un transfert progressif du pouvoir, avec l'autonomie interne accord\u00e9e en 1961.\n\nLes c\u00e9l\u00e9brations du Jour de l'Ind\u00e9pendance sont centr\u00e9es sur le Kololo Independence Grounds \u00e0 Kampala, o\u00f9 le drapeau ougandais a \u00e9t\u00e9 hiss\u00e9 pour la premi\u00e8re fois \u00e0 minuit le 9 octobre 1962. Les c\u00e9l\u00e9brations annuelles comprennent des d\u00e9fil\u00e9s militaires et des spectacles culturels repr\u00e9sentant les divers groupes ethniques de l'Ouganda.",
    es: "Uganda obtuvo su independencia del Reino Unido el 9 de octubre de 1962, con Sir Edward Mutesa II, el Kabaka (rey) de Buganda, convirti\u00e9ndose en el primer presidente y Milton Obote sirviendo como primer ministro. El pa\u00eds hab\u00eda sido un protectorado brit\u00e1nico desde 1894.\n\nEl movimiento independentista en Uganda fue relativamente pac\u00edfico comparado con algunas otras colonias africanas. Las negociaciones pol\u00edticas llevaron a una transferencia gradual del poder, con la autogobernan\u00e7a interna otorgada en 1961.\n\nLas celebraciones del D\u00eda de la Independencia se centran en los Terrenos de la Independencia de Kololo en Kampala, donde la bandera ugandesa fue izada por primera vez a medianoche el 9 de octubre de 1962. Las celebraciones anuales incluyen desfiles militares y espect\u00e1culos culturales que representan los diversos grupos \u00e9tnicos de Uganda.",
  },

  traditions: {
    en: [
      'Military parades at Kololo Independence Grounds in Kampala',
      'Presidential address to the nation',
      'Flag-raising ceremonies across the country',
      'Cultural performances representing Uganda\'s diverse ethnic groups',
      'Fireworks displays in major cities',
      'Sports competitions and community events',
      'Patriotic songs and performances by school children',
    ],
    fr: [
      'D\u00e9fil\u00e9s militaires au Kololo Independence Grounds \u00e0 Kampala',
      'Discours pr\u00e9sidentiel \u00e0 la nation',
      'C\u00e9r\u00e9monies de lev\u00e9e du drapeau \u00e0 travers le pays',
      'Spectacles culturels repr\u00e9sentant les divers groupes ethniques de l\'Ouganda',
      'Feux d\'artifice dans les grandes villes',
      'Comp\u00e9titions sportives et \u00e9v\u00e9nements communautaires',
      'Chansons et spectacles patriotiques par les \u00e9coliers',
    ],
    es: [
      'Desfiles militares en los Terrenos de la Independencia de Kololo en Kampala',
      'Discurso presidencial a la naci\u00f3n',
      'Ceremonias de izado de bandera en todo el pa\u00eds',
      'Espect\u00e1culos culturales que representan los diversos grupos \u00e9tnicos de Uganda',
      'Espect\u00e1culos de fuegos artificiales en las principales ciudades',
      'Competiciones deportivas y eventos comunitarios',
      'Canciones y presentaciones patri\u00f3ticas de los escolares',
    ],
  },

  funFacts: {
    en: [
      'The Ugandan flag was first raised at midnight on October 9, 1962, at Kololo Independence Grounds in Kampala.',
      'Uganda\'s national flag features a grey crowned crane, the country\'s national bird, known for its gentle nature.',
      'Winston Churchill called Uganda "the Pearl of Africa" in 1908, and the nickname is still used today.',
      'Uganda is one of the most ethnically diverse countries in Africa, with over 50 distinct ethnic groups.',
      'The independence celebrations at Kololo often feature performances from all of Uganda\'s major ethnic groups, showcasing the nation\'s cultural diversity.',
    ],
    fr: [
      'Le drapeau ougandais a \u00e9t\u00e9 hiss\u00e9 pour la premi\u00e8re fois \u00e0 minuit le 9 octobre 1962 au Kololo Independence Grounds \u00e0 Kampala.',
      'Le drapeau national de l\'Ouganda pr\u00e9sente une grue royale grise, l\'oiseau national du pays, connu pour sa nature douce.',
      'Winston Churchill a appel\u00e9 l\'Ouganda \u00ab la Perle de l\'Afrique \u00bb en 1908, et le surnom est encore utilis\u00e9 aujourd\'hui.',
      'L\'Ouganda est l\'un des pays les plus ethniquement divers d\'Afrique, avec plus de 50 groupes ethniques distincts.',
      'Les c\u00e9l\u00e9brations de l\'ind\u00e9pendance \u00e0 Kololo pr\u00e9sentent souvent des spectacles de tous les principaux groupes ethniques de l\'Ouganda.',
    ],
    es: [
      'La bandera ugandesa fue izada por primera vez a medianoche el 9 de octubre de 1962 en los Terrenos de la Independencia de Kololo en Kampala.',
      'La bandera nacional de Uganda presenta una grulla coronada gris, el ave nacional del pa\u00eds, conocida por su naturaleza apacible.',
      'Winston Churchill llam\u00f3 a Uganda "la Perla de \u00c1frica" en 1908, y el apodo a\u00fan se usa hoy.',
      'Uganda es uno de los pa\u00edses m\u00e1s \u00e9tnicamente diversos de \u00c1frica, con m\u00e1s de 50 grupos \u00e9tnicos distintos.',
      'Las celebraciones de independencia en Kololo a menudo presentan espect\u00e1culos de todos los principales grupos \u00e9tnicos de Uganda.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan to attend celebrations at Kololo Independence Grounds in Kampala',
      'Wear Uganda\'s national colors (black, yellow, and red) to show patriotism',
      'Watch the presidential address on national television',
      'Attend cultural events and performances in your community',
      'Learn about Uganda\'s independence history and founding leaders',
    ],
    fr: [
      'Pr\u00e9voir d\'assister aux c\u00e9l\u00e9brations au Kololo Independence Grounds \u00e0 Kampala',
      'Porter les couleurs nationales de l\'Ouganda (noir, jaune et rouge) pour montrer le patriotisme',
      'Regarder le discours pr\u00e9sidentiel \u00e0 la t\u00e9l\u00e9vision nationale',
      'Assister aux \u00e9v\u00e9nements culturels et spectacles dans votre communaut\u00e9',
      'Se renseigner sur l\'histoire de l\'ind\u00e9pendance de l\'Ouganda et les dirigeants fondateurs',
    ],
    es: [
      'Planificar asistir a las celebraciones en los Terrenos de la Independencia de Kololo en Kampala',
      'Usar los colores nacionales de Uganda (negro, amarillo y rojo) para mostrar patriotismo',
      'Ver el discurso presidencial por televisi\u00f3n nacional',
      'Asistir a eventos culturales y espect\u00e1culos en su comunidad',
      'Aprender sobre la historia de la independencia de Uganda y los l\u00edderes fundadores',
    ],
  },

  relatedHolidays: ['ug_liberation-day', 'ug_womens-day'],

  seo: {
    en: {
      titleTemplate: 'Uganda Independence Day {year} \u2014 Countdown & Guide',
      descriptionTemplate: 'When is Uganda Independence Day {year}? Live countdown to October 9, history, and celebration guide.',
      keywords: ['Uganda Independence Day', 'October 9 Uganda', 'Kololo Independence Grounds', 'Uganda public holiday', 'Uganda independence countdown'],
    },
    fr: {
      titleTemplate: "Jour de l'Ind\u00e9pendance de l'Ouganda {year} \u2014 Compte \u00e0 rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'Ind\u00e9pendance de l'Ouganda {year} ? Compte \u00e0 rebours en direct jusqu'au 9 octobre et guide.",
      keywords: ["Ind\u00e9pendance Ouganda", "9 octobre Ouganda", "Kololo Independence Grounds", "jour f\u00e9ri\u00e9 Ouganda", "compte \u00e0 rebours ind\u00e9pendance Ouganda"],
    },
    es: {
      titleTemplate: 'D\u00eda de la Independencia de Uganda {year} \u2014 Cuenta regresiva y gu\u00eda',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda de la Independencia de Uganda {year}? Cuenta regresiva en vivo hasta el 9 de octubre y gu\u00eda.',
      keywords: ['Independencia Uganda', '9 de octubre Uganda', 'Kololo Independence Grounds', 'd\u00eda festivo Uganda', 'cuenta regresiva independencia Uganda'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Uganda Independence Day {year}?',
        fr: "Quand est le Jour de l'Ind\u00e9pendance de l'Ouganda {year} ?",
        es: '\u00bfCu\u00e1ndo es el D\u00eda de la Independencia de Uganda {year}?',
      },
      answer: {
        en: 'Uganda Independence Day {year} is on {date} ({dayOfWeek}). It is always celebrated on October 9.',
        fr: "Le Jour de l'Ind\u00e9pendance de l'Ouganda {year} est le {date} ({dayOfWeek}). Il est toujours c\u00e9l\u00e9br\u00e9 le 9 octobre.",
        es: 'El D\u00eda de la Independencia de Uganda {year} es el {date} ({dayOfWeek}). Siempre se celebra el 9 de octubre.',
      },
    },
    {
      question: {
        en: 'When did Uganda gain independence?',
        fr: "Quand l'Ouganda a-t-il obtenu son ind\u00e9pendance ?",
        es: '\u00bfCu\u00e1ndo obtuvo Uganda su independencia?',
      },
      answer: {
        en: 'Uganda gained independence from the United Kingdom on October 9, 1962. Sir Edward Mutesa II became the first president and Milton Obote the first prime minister.',
        fr: "L'Ouganda a obtenu son ind\u00e9pendance du Royaume-Uni le 9 octobre 1962. Sir Edward Mutesa II est devenu le premier pr\u00e9sident et Milton Obote le premier premier ministre.",
        es: 'Uganda obtuvo su independencia del Reino Unido el 9 de octubre de 1962. Sir Edward Mutesa II se convirti\u00f3 en el primer presidente y Milton Obote en el primer ministro.',
      },
    },
    {
      question: {
        en: 'Where are the Independence Day celebrations held?',
        fr: "O\u00f9 se tiennent les c\u00e9l\u00e9brations du Jour de l'Ind\u00e9pendance ?",
        es: '\u00bfD\u00f3nde se celebran las fiestas del D\u00eda de la Independencia?',
      },
      answer: {
        en: 'The main Independence Day celebrations are held at Kololo Independence Grounds in Kampala, the same location where the Ugandan flag was first raised in 1962.',
        fr: "Les principales c\u00e9l\u00e9brations du Jour de l'Ind\u00e9pendance se tiennent au Kololo Independence Grounds \u00e0 Kampala, le m\u00eame endroit o\u00f9 le drapeau ougandais a \u00e9t\u00e9 hiss\u00e9 pour la premi\u00e8re fois en 1962.",
        es: 'Las principales celebraciones del D\u00eda de la Independencia se realizan en los Terrenos de la Independencia de Kololo en Kampala, el mismo lugar donde la bandera ugandesa fue izada por primera vez en 1962.',
      },
    },
    {
      question: {
        en: 'Why is Uganda called the Pearl of Africa?',
        fr: "Pourquoi l'Ouganda est-il appel\u00e9 la Perle de l'Afrique ?",
        es: '\u00bfPor qu\u00e9 se llama a Uganda la Perla de \u00c1frica?',
      },
      answer: {
        en: 'Winston Churchill coined the phrase "the Pearl of Africa" for Uganda in his 1908 book "My African Journey," referring to the country\'s extraordinary natural beauty, including Lake Victoria, the Rwenzori Mountains, and its diverse wildlife.',
        fr: "Winston Churchill a invent\u00e9 l'expression \u00ab la Perle de l'Afrique \u00bb pour l'Ouganda dans son livre de 1908 \u00ab My African Journey \u00bb, en r\u00e9f\u00e9rence \u00e0 la beaut\u00e9 naturelle extraordinaire du pays.",
        es: 'Winston Churchill acu\u00f1\u00f3 la frase "la Perla de \u00c1frica" para Uganda en su libro de 1908 "My African Journey", refiri\u00e9ndose a la extraordinaria belleza natural del pa\u00eds.',
      },
    },
  ],

  colorTheme: 'black-yellow-red',
  icon: '\ud83c\uddfa\ud83c\uddec',
};

// ---------------------------------------------------------------------------
// Eid al-Fitr — Calculated
// ---------------------------------------------------------------------------

const eidAlFitr: HolidayData = {
  id: 'ug_eid-al-fitr',
  countryCode: 'ug',
  slugs: { en: 'eid-al-fitr', fr: 'eid-al-fitr', es: 'eid-al-fitr' },
  names: { en: 'Eid al-Fitr', fr: "A\u00efd el-Fitr", es: 'Eid al-Fitr' },

  dateType: 'calculated',
  calculateDate: getEidAlFitrDate,

  descriptions: {
    en: 'Eid al-Fitr marks the end of Ramadan and is a public holiday in Uganda. Muslims across the country celebrate with communal prayers, festive meals, family gatherings, and acts of charity.',
    fr: "L'A\u00efd el-Fitr marque la fin du Ramadan et est un jour f\u00e9ri\u00e9 en Ouganda. Les musulmans \u00e0 travers le pays c\u00e9l\u00e8brent avec des pri\u00e8res communautaires, des repas festifs, des r\u00e9unions familiales et des actes de charit\u00e9.",
    es: 'El Eid al-Fitr marca el fin del Ramad\u00e1n y es un d\u00eda festivo en Uganda. Los musulmanes de todo el pa\u00eds celebran con oraciones comunitarias, comidas festivas, reuniones familiares y actos de caridad.',
  },

  history: {
    en: "Islam has been present in Uganda since the 19th century, when Arab and Swahili traders introduced it through trade routes from the East African coast. Today, approximately 14% of Uganda's population is Muslim, with significant communities in Kampala, the eastern regions, and parts of northern Uganda.\n\nEid al-Fitr is recognized as an official public holiday in Uganda, reflecting the country's religious diversity and the government's policy of recognizing holidays from multiple faiths. The holiday was made a public holiday to ensure equality among Uganda's religious communities.\n\nThe celebrations in Uganda reflect both Islamic traditions and local Ugandan culture. Communities come together for prayers, feasting, and celebrations that often include traditional Ugandan music and dance alongside Islamic customs.",
    fr: "L'islam est pr\u00e9sent en Ouganda depuis le XIXe si\u00e8cle, quand les commer\u00e7ants arabes et swahilis l'ont introduit par les routes commerciales de la c\u00f4te est-africaine. Aujourd'hui, environ 14% de la population ougandaise est musulmane.\n\nL'A\u00efd el-Fitr est reconnu comme jour f\u00e9ri\u00e9 officiel en Ouganda, refl\u00e9tant la diversit\u00e9 religieuse du pays et la politique du gouvernement de reconna\u00eetre les f\u00eates de plusieurs confessions.\n\nLes c\u00e9l\u00e9brations en Ouganda refl\u00e8tent \u00e0 la fois les traditions islamiques et la culture locale ougandaise. Les communaut\u00e9s se rassemblent pour des pri\u00e8res, des festins et des c\u00e9l\u00e9brations qui incluent souvent de la musique et de la danse traditionnelles ougandaises.",
    es: "El islam ha estado presente en Uganda desde el siglo XIX, cuando los comerciantes \u00e1rabes y suajilis lo introdujeron a trav\u00e9s de las rutas comerciales de la costa de \u00c1frica Oriental. Hoy en d\u00eda, aproximadamente el 14% de la poblaci\u00f3n de Uganda es musulmana.\n\nEl Eid al-Fitr es reconocido como d\u00eda festivo oficial en Uganda, reflejando la diversidad religiosa del pa\u00eds y la pol\u00edtica del gobierno de reconocer festividades de m\u00faltiples confesiones.\n\nLas celebraciones en Uganda reflejan tanto las tradiciones isl\u00e1micas como la cultura local ugandesa. Las comunidades se re\u00fanen para oraciones, banquetes y celebraciones que a menudo incluyen m\u00fasica y danza tradicionales ugandesas.",
  },

  traditions: {
    en: [
      'Morning Eid prayers at mosques and open grounds across Uganda',
      'Wearing new or finest clothes for the celebration',
      'Preparing festive meals including pilau, biriani, and roasted goat',
      'Visiting family, friends, and neighbors to exchange Eid greetings',
      'Giving Zakat al-Fitr (charity) to those in need',
      'Community celebrations with music, dance, and shared meals',
    ],
    fr: [
      'Pri\u00e8res du matin de l\'A\u00efd dans les mosqu\u00e9es et sur des terrains ouverts \u00e0 travers l\'Ouganda',
      'Porter de nouveaux v\u00eatements ou les plus beaux pour la c\u00e9l\u00e9bration',
      'Pr\u00e9parer des repas festifs incluant du pilau, du biriani et de la ch\u00e8vre r\u00f4tie',
      'Visiter la famille, les amis et les voisins pour \u00e9changer des salutations de l\'A\u00efd',
      'Donner la Zakat al-Fitr (charit\u00e9) aux n\u00e9cessiteux',
      'C\u00e9l\u00e9brations communautaires avec musique, danse et repas partag\u00e9s',
    ],
    es: [
      'Oraciones matutinas del Eid en mezquitas y terrenos abiertos en todo Uganda',
      'Usar ropa nueva o la mejor para la celebraci\u00f3n',
      'Preparar comidas festivas incluyendo pilau, biriani y cabra asada',
      'Visitar a familiares, amigos y vecinos para intercambiar saludos del Eid',
      'Dar Zakat al-Fitr (caridad) a los necesitados',
      'Celebraciones comunitarias con m\u00fasica, baile y comidas compartidas',
    ],
  },

  funFacts: {
    en: [
      'Uganda recognizes both Eid al-Fitr and Eid al-Adha as public holidays, demonstrating its commitment to religious diversity.',
      'The Old Kampala Mosque, also known as Gaddafi National Mosque, is the largest mosque in Uganda and a major center for Eid celebrations.',
      'Ugandan Eid cuisine often includes locally popular dishes like roasted goat, matoke (steamed green bananas), and pilau rice.',
      'Eid celebrations in Uganda often feature a blend of Islamic and traditional Ugandan cultural elements.',
      'The Uganda Muslim Supreme Council coordinates national Eid celebrations and announces the official sighting of the new moon.',
    ],
    fr: [
      'L\'Ouganda reconna\u00eet \u00e0 la fois l\'A\u00efd el-Fitr et l\'A\u00efd el-Adha comme jours f\u00e9ri\u00e9s, d\u00e9montrant son engagement envers la diversit\u00e9 religieuse.',
      'La mosqu\u00e9e de Old Kampala, \u00e9galement connue sous le nom de mosqu\u00e9e nationale Kadhafi, est la plus grande mosqu\u00e9e d\'Ouganda.',
      'La cuisine ougandaise de l\'A\u00efd comprend souvent des plats localement populaires comme la ch\u00e8vre r\u00f4tie, le matoke et le riz pilau.',
      'Les c\u00e9l\u00e9brations de l\'A\u00efd en Ouganda pr\u00e9sentent souvent un m\u00e9lange d\'\u00e9l\u00e9ments culturels islamiques et traditionnels ougandais.',
      'Le Conseil supr\u00eame des musulmans d\'Ouganda coordonne les c\u00e9l\u00e9brations nationales de l\'A\u00efd et annonce l\'observation officielle de la nouvelle lune.',
    ],
    es: [
      'Uganda reconoce tanto el Eid al-Fitr como el Eid al-Adha como d\u00edas festivos, demostrando su compromiso con la diversidad religiosa.',
      'La Mezquita de Old Kampala, tambi\u00e9n conocida como Mezquita Nacional Gadafi, es la mezquita m\u00e1s grande de Uganda.',
      'La cocina ugandesa del Eid a menudo incluye platos localmente populares como cabra asada, matoke (pl\u00e1tanos verdes al vapor) y arroz pilau.',
      'Las celebraciones del Eid en Uganda a menudo presentan una mezcla de elementos culturales isl\u00e1micos y tradicionales ugandeses.',
      'El Consejo Supremo Musulm\u00e1n de Uganda coordina las celebraciones nacionales del Eid y anuncia el avistamiento oficial de la luna nueva.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the confirmed date as it depends on moon sighting',
      'Prepare Zakat al-Fitr charity contributions before the Eid prayers',
      'Buy new clothes and prepare festive meals for the family',
      'Plan visits to family elders and community gatherings',
      'Stock up on ingredients for pilau, biriani, and other festive dishes',
    ],
    fr: [
      'V\u00e9rifier la date confirm\u00e9e car elle d\u00e9pend de l\'observation de la lune',
      'Pr\u00e9parer les contributions charitables de Zakat al-Fitr avant les pri\u00e8res de l\'A\u00efd',
      'Acheter de nouveaux v\u00eatements et pr\u00e9parer des repas festifs pour la famille',
      'Planifier les visites aux a\u00een\u00e9s de la famille et aux rassemblements communautaires',
      'Faire des provisions d\'ingr\u00e9dients pour le pilau, le biriani et d\'autres plats festifs',
    ],
    es: [
      'Verificar la fecha confirmada ya que depende del avistamiento de la luna',
      'Preparar las contribuciones caritativas de Zakat al-Fitr antes de las oraciones del Eid',
      'Comprar ropa nueva y preparar comidas festivas para la familia',
      'Planificar visitas a los mayores de la familia y reuniones comunitarias',
      'Abastecerse de ingredientes para pilau, biriani y otros platos festivos',
    ],
  },

  relatedHolidays: ['ug_eid-al-adha', 'ug_christmas'],

  seo: {
    en: {
      titleTemplate: 'Eid al-Fitr {year} Uganda \u2014 Date, Countdown & Guide',
      descriptionTemplate: 'When is Eid al-Fitr {year} in Uganda? Live countdown, traditions, and celebration guide.',
      keywords: ['Eid al-Fitr Uganda', 'Eid Uganda', 'Ramadan Uganda', 'Islamic holidays Uganda', 'Eid date Uganda'],
    },
    fr: {
      titleTemplate: "A\u00efd el-Fitr {year} Ouganda \u2014 Date, compte \u00e0 rebours et guide",
      descriptionTemplate: "Quand est l'A\u00efd el-Fitr {year} en Ouganda ? Compte \u00e0 rebours en direct, traditions et guide de c\u00e9l\u00e9bration.",
      keywords: ["A\u00efd el-Fitr Ouganda", 'A\u00efd Ouganda', 'Ramadan Ouganda', 'f\u00eates islamiques Ouganda', "date A\u00efd Ouganda"],
    },
    es: {
      titleTemplate: 'Eid al-Fitr {year} Uganda \u2014 Fecha, cuenta regresiva y gu\u00eda',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el Eid al-Fitr {year} en Uganda? Cuenta regresiva en vivo, tradiciones y gu\u00eda de celebraci\u00f3n.',
      keywords: ['Eid al-Fitr Uganda', 'Eid Uganda', 'Ramad\u00e1n Uganda', 'fiestas isl\u00e1micas Uganda', 'fecha Eid Uganda'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Eid al-Fitr {year} in Uganda?',
        fr: "Quand est l'A\u00efd el-Fitr {year} en Ouganda ?",
        es: '\u00bfCu\u00e1ndo es el Eid al-Fitr {year} en Uganda?',
      },
      answer: {
        en: 'Eid al-Fitr {year} in Uganda is expected on {date} ({dayOfWeek}). The exact date depends on the sighting of the new moon.',
        fr: "L'A\u00efd el-Fitr {year} en Ouganda est pr\u00e9vu le {date} ({dayOfWeek}). La date exacte d\u00e9pend de l'observation du nouveau croissant de lune.",
        es: 'El Eid al-Fitr {year} en Uganda se espera el {date} ({dayOfWeek}). La fecha exacta depende del avistamiento de la luna nueva.',
      },
    },
    {
      question: {
        en: 'Is Eid al-Fitr a public holiday in Uganda?',
        fr: "L'A\u00efd el-Fitr est-il un jour f\u00e9ri\u00e9 en Ouganda ?",
        es: '\u00bfEl Eid al-Fitr es un d\u00eda festivo en Uganda?',
      },
      answer: {
        en: 'Yes, Eid al-Fitr is an official public holiday in Uganda. Both Eid al-Fitr and Eid al-Adha are recognized as public holidays.',
        fr: "Oui, l'A\u00efd el-Fitr est un jour f\u00e9ri\u00e9 officiel en Ouganda. L'A\u00efd el-Fitr et l'A\u00efd el-Adha sont reconnus comme jours f\u00e9ri\u00e9s.",
        es: 'S\u00ed, el Eid al-Fitr es un d\u00eda festivo oficial en Uganda. Tanto el Eid al-Fitr como el Eid al-Adha son reconocidos como d\u00edas festivos.',
      },
    },
    {
      question: {
        en: 'How is Eid al-Fitr celebrated in Uganda?',
        fr: "Comment l'A\u00efd el-Fitr est-il c\u00e9l\u00e9br\u00e9 en Ouganda ?",
        es: '\u00bfC\u00f3mo se celebra el Eid al-Fitr en Uganda?',
      },
      answer: {
        en: 'Ugandan Muslims celebrate with morning prayers, festive meals featuring pilau and roasted goat, family visits, new clothes, charity, and community celebrations that blend Islamic and Ugandan cultural traditions.',
        fr: "Les musulmans ougandais c\u00e9l\u00e8brent avec des pri\u00e8res matinales, des repas festifs, des visites familiales, de nouveaux v\u00eatements, la charit\u00e9 et des c\u00e9l\u00e9brations communautaires m\u00ealant traditions islamiques et culturelles ougandaises.",
        es: 'Los musulmanes ugandeses celebran con oraciones matutinas, comidas festivas con pilau y cabra asada, visitas familiares, ropa nueva, caridad y celebraciones comunitarias que mezclan tradiciones isl\u00e1micas y culturales ugandesas.',
      },
    },
    {
      question: {
        en: 'Why does the date of Eid al-Fitr change each year?',
        fr: "Pourquoi la date de l'A\u00efd el-Fitr change-t-elle chaque ann\u00e9e ?",
        es: '\u00bfPor qu\u00e9 cambia la fecha del Eid al-Fitr cada a\u00f1o?',
      },
      answer: {
        en: 'Eid al-Fitr follows the Islamic lunar calendar, which is about 11 days shorter than the Gregorian calendar. This causes the date to shift earlier by roughly 11 days each year.',
        fr: "L'A\u00efd el-Fitr suit le calendrier lunaire islamique, qui est environ 11 jours plus court que le calendrier gr\u00e9gorien. Cela fait que la date avance d'environ 11 jours chaque ann\u00e9e.",
        es: 'El Eid al-Fitr sigue el calendario lunar isl\u00e1mico, que es aproximadamente 11 d\u00edas m\u00e1s corto que el calendario gregoriano. Esto hace que la fecha se adelante aproximadamente 11 d\u00edas cada a\u00f1o.',
      },
    },
  ],

  colorTheme: 'green-gold',
  icon: '\ud83c\udf19',
};

// ---------------------------------------------------------------------------
// Eid al-Adha — Calculated
// ---------------------------------------------------------------------------

const eidAlAdha: HolidayData = {
  id: 'ug_eid-al-adha',
  countryCode: 'ug',
  slugs: { en: 'eid-al-adha', fr: 'eid-al-adha', es: 'eid-al-adha' },
  names: { en: 'Eid al-Adha', fr: "A\u00efd el-Adha", es: 'Eid al-Adha' },

  dateType: 'calculated',
  calculateDate: getEidAlAdhaDate,

  descriptions: {
    en: "Eid al-Adha, the Festival of Sacrifice, is a public holiday in Uganda celebrating Ibrahim's willingness to sacrifice his son in obedience to God. Muslims mark the occasion with prayers, animal sacrifice, and sharing meat with family, neighbors, and the poor.",
    fr: "L'A\u00efd el-Adha, la F\u00eate du Sacrifice, est un jour f\u00e9ri\u00e9 en Ouganda c\u00e9l\u00e9brant la volont\u00e9 d'Ibrahim de sacrifier son fils en ob\u00e9issance \u00e0 Dieu. Les musulmans marquent l'occasion avec des pri\u00e8res, le sacrifice d'un animal et le partage de la viande.",
    es: "El Eid al-Adha, la Fiesta del Sacrificio, es un d\u00eda festivo en Uganda que celebra la disposici\u00f3n de Ibrahim a sacrificar a su hijo en obediencia a Dios. Los musulmanes marcan la ocasi\u00f3n con oraciones, sacrificio de un animal y compartir la carne.",
  },

  history: {
    en: "Eid al-Adha commemorates the Quranic narrative of Prophet Ibrahim's willingness to sacrifice his son Ismail as an act of submission to God's command. God, pleased with Ibrahim's faith, provided a ram to sacrifice instead. This story parallels the Biblical account of Abraham and Isaac.\n\nIn Uganda, Eid al-Adha is celebrated by the Muslim community, which makes up approximately 14% of the population. The holiday has been an official public holiday, alongside Eid al-Fitr, as part of Uganda's recognition of religious diversity.\n\nThe celebration involves the ritual sacrifice of livestock (typically a goat, sheep, or cow), with the meat divided into three portions: one-third for the family, one-third for friends and neighbors, and one-third for the poor and needy. This emphasis on charity and sharing makes the holiday a significant community event.",
    fr: "L'A\u00efd el-Adha comm\u00e9more le r\u00e9cit coranique de la volont\u00e9 du proph\u00e8te Ibrahim de sacrifier son fils Isma\u00efl en acte de soumission au commandement de Dieu. Dieu, satisfait de la foi d'Ibrahim, a fourni un b\u00e9lier \u00e0 sacrifier \u00e0 la place.\n\nEn Ouganda, l'A\u00efd el-Adha est c\u00e9l\u00e9br\u00e9 par la communaut\u00e9 musulmane, qui repr\u00e9sente environ 14% de la population. Le jour f\u00e9ri\u00e9 est un jour f\u00e9ri\u00e9 officiel, aux c\u00f4t\u00e9s de l'A\u00efd el-Fitr.\n\nLa c\u00e9l\u00e9bration implique le sacrifice rituel de b\u00e9tail (g\u00e9n\u00e9ralement une ch\u00e8vre, un mouton ou une vache), avec la viande divis\u00e9e en trois portions : un tiers pour la famille, un tiers pour les amis et voisins, et un tiers pour les pauvres et les n\u00e9cessiteux.",
    es: "El Eid al-Adha conmemora la narrativa cor\u00e1nica de la disposici\u00f3n del profeta Ibrahim a sacrificar a su hijo Ismail como acto de sumisi\u00f3n al mandato de Dios. Dios, complacido con la fe de Ibrahim, proporcion\u00f3 un carnero para sacrificar en su lugar.\n\nEn Uganda, el Eid al-Adha es celebrado por la comunidad musulmana, que representa aproximadamente el 14% de la poblaci\u00f3n. El d\u00eda festivo es un d\u00eda festivo oficial, junto con el Eid al-Fitr.\n\nLa celebraci\u00f3n involucra el sacrificio ritual de ganado (generalmente una cabra, oveja o vaca), con la carne dividida en tres porciones: un tercio para la familia, un tercio para amigos y vecinos, y un tercio para los pobres y necesitados.",
  },

  traditions: {
    en: [
      'Morning Eid prayers at mosques and open grounds',
      'Ritual sacrifice of a goat, sheep, or cow (Qurbani)',
      'Dividing sacrificial meat into three portions: family, friends, and the needy',
      'Wearing new or finest clothes for the celebration',
      'Visiting family and friends to exchange Eid greetings',
      'Preparing festive meals featuring the sacrificial meat',
      'Acts of charity and giving to those less fortunate',
    ],
    fr: [
      'Pri\u00e8res du matin de l\'A\u00efd dans les mosqu\u00e9es et sur des terrains ouverts',
      'Sacrifice rituel d\'une ch\u00e8vre, d\'un mouton ou d\'une vache (Qurbani)',
      'Division de la viande sacrificielle en trois portions : famille, amis et n\u00e9cessiteux',
      'Porter de nouveaux v\u00eatements ou les plus beaux pour la c\u00e9l\u00e9bration',
      'Visiter la famille et les amis pour \u00e9changer des salutations de l\'A\u00efd',
      'Pr\u00e9parer des repas festifs avec la viande du sacrifice',
      'Actes de charit\u00e9 et dons aux plus d\u00e9munis',
    ],
    es: [
      'Oraciones matutinas del Eid en mezquitas y terrenos abiertos',
      'Sacrificio ritual de una cabra, oveja o vaca (Qurbani)',
      'Divisi\u00f3n de la carne del sacrificio en tres porciones: familia, amigos y necesitados',
      'Usar ropa nueva o la mejor para la celebraci\u00f3n',
      'Visitar a familiares y amigos para intercambiar saludos del Eid',
      'Preparar comidas festivas con la carne del sacrificio',
      'Actos de caridad y donaciones a los menos afortunados',
    ],
  },

  funFacts: {
    en: [
      'Eid al-Adha is considered the holier of the two Eid celebrations in Islam.',
      'The sacrificial meat is traditionally divided into exactly three equal portions to ensure charity and community sharing.',
      'Uganda is one of the few countries in East Africa where both Eid al-Fitr and Eid al-Adha are official public holidays.',
      'Livestock prices in Uganda typically rise significantly in the weeks before Eid al-Adha due to increased demand.',
      'The festival coincides with the Hajj pilgrimage to Mecca, and Ugandan Muslims who have performed the Hajj are given special honor during celebrations.',
    ],
    fr: [
      'L\'A\u00efd el-Adha est consid\u00e9r\u00e9 comme la plus sainte des deux c\u00e9l\u00e9brations de l\'A\u00efd en islam.',
      'La viande sacrificielle est traditionnellement divis\u00e9e en exactement trois portions \u00e9gales pour assurer la charit\u00e9 et le partage communautaire.',
      'L\'Ouganda est l\'un des rares pays d\'Afrique de l\'Est o\u00f9 les deux A\u00efds sont des jours f\u00e9ri\u00e9s officiels.',
      'Les prix du b\u00e9tail en Ouganda augmentent g\u00e9n\u00e9ralement de mani\u00e8re significative dans les semaines pr\u00e9c\u00e9dant l\'A\u00efd el-Adha.',
      'Le festival co\u00efncide avec le p\u00e8lerinage du Hajj \u00e0 La Mecque, et les musulmans ougandais ayant accompli le Hajj sont honor\u00e9s sp\u00e9cialement.',
    ],
    es: [
      'El Eid al-Adha es considerado la m\u00e1s sagrada de las dos celebraciones del Eid en el islam.',
      'La carne del sacrificio se divide tradicionalmente en exactamente tres porciones iguales para asegurar la caridad y el compartir comunitario.',
      'Uganda es uno de los pocos pa\u00edses de \u00c1frica Oriental donde ambos Eids son d\u00edas festivos oficiales.',
      'Los precios del ganado en Uganda generalmente aumentan significativamente en las semanas previas al Eid al-Adha.',
      'El festival coincide con la peregrinaci\u00f3n del Hajj a La Meca, y los musulmanes ugandeses que han realizado el Hajj reciben un honor especial.',
    ],
  },

  planningChecklist: {
    en: [
      'Purchase livestock for the Qurbani sacrifice well in advance as prices rise',
      'Prepare new clothes for the family for the celebration',
      'Plan the distribution of sacrificial meat among family, friends, and the needy',
      'Check the confirmed date as it depends on moon sighting',
      'Coordinate with family and community for shared celebrations',
    ],
    fr: [
      'Acheter le b\u00e9tail pour le sacrifice du Qurbani \u00e0 l\'avance car les prix augmentent',
      'Pr\u00e9parer de nouveaux v\u00eatements pour la famille pour la c\u00e9l\u00e9bration',
      'Planifier la distribution de la viande sacrificielle entre famille, amis et n\u00e9cessiteux',
      'V\u00e9rifier la date confirm\u00e9e car elle d\u00e9pend de l\'observation de la lune',
      'Coordonner avec la famille et la communaut\u00e9 pour des c\u00e9l\u00e9brations partag\u00e9es',
    ],
    es: [
      'Comprar ganado para el sacrificio del Qurbani con anticipaci\u00f3n ya que los precios suben',
      'Preparar ropa nueva para la familia para la celebraci\u00f3n',
      'Planificar la distribuci\u00f3n de la carne del sacrificio entre familia, amigos y necesitados',
      'Verificar la fecha confirmada ya que depende del avistamiento de la luna',
      'Coordinar con la familia y la comunidad para celebraciones compartidas',
    ],
  },

  relatedHolidays: ['ug_eid-al-fitr', 'ug_christmas'],

  seo: {
    en: {
      titleTemplate: 'Eid al-Adha {year} Uganda \u2014 Date, Countdown & Guide',
      descriptionTemplate: 'When is Eid al-Adha {year} in Uganda? Live countdown, Festival of Sacrifice traditions, and celebration guide.',
      keywords: ['Eid al-Adha Uganda', 'Festival of Sacrifice Uganda', 'Eid date Uganda', 'Qurbani Uganda', 'Islamic holidays Uganda'],
    },
    fr: {
      titleTemplate: "A\u00efd el-Adha {year} Ouganda \u2014 Date, compte \u00e0 rebours et guide",
      descriptionTemplate: "Quand est l'A\u00efd el-Adha {year} en Ouganda ? Compte \u00e0 rebours, traditions de la F\u00eate du Sacrifice et guide.",
      keywords: ["A\u00efd el-Adha Ouganda", 'F\u00eate du Sacrifice Ouganda', "date A\u00efd Ouganda", 'Qurbani Ouganda', 'f\u00eates islamiques Ouganda'],
    },
    es: {
      titleTemplate: 'Eid al-Adha {year} Uganda \u2014 Fecha, cuenta regresiva y gu\u00eda',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el Eid al-Adha {year} en Uganda? Cuenta regresiva, tradiciones de la Fiesta del Sacrificio y gu\u00eda.',
      keywords: ['Eid al-Adha Uganda', 'Fiesta del Sacrificio Uganda', 'fecha Eid Uganda', 'Qurbani Uganda', 'fiestas isl\u00e1micas Uganda'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Eid al-Adha {year} in Uganda?',
        fr: "Quand est l'A\u00efd el-Adha {year} en Ouganda ?",
        es: '\u00bfCu\u00e1ndo es el Eid al-Adha {year} en Uganda?',
      },
      answer: {
        en: 'Eid al-Adha {year} in Uganda is expected on {date} ({dayOfWeek}). The exact date depends on the sighting of the new moon.',
        fr: "L'A\u00efd el-Adha {year} en Ouganda est pr\u00e9vu le {date} ({dayOfWeek}). La date exacte d\u00e9pend de l'observation du nouveau croissant de lune.",
        es: 'El Eid al-Adha {year} en Uganda se espera el {date} ({dayOfWeek}). La fecha exacta depende del avistamiento de la luna nueva.',
      },
    },
    {
      question: {
        en: 'What is Eid al-Adha?',
        fr: "Qu'est-ce que l'A\u00efd el-Adha ?",
        es: '\u00bfQu\u00e9 es el Eid al-Adha?',
      },
      answer: {
        en: "Eid al-Adha, the Festival of Sacrifice, commemorates Prophet Ibrahim's willingness to sacrifice his son in obedience to God. It is celebrated with prayers, animal sacrifice, and sharing meat with family, friends, and the needy.",
        fr: "L'A\u00efd el-Adha, la F\u00eate du Sacrifice, comm\u00e9more la volont\u00e9 du proph\u00e8te Ibrahim de sacrifier son fils en ob\u00e9issance \u00e0 Dieu. Elle est c\u00e9l\u00e9br\u00e9e avec des pri\u00e8res, le sacrifice d'un animal et le partage de la viande.",
        es: "El Eid al-Adha, la Fiesta del Sacrificio, conmemora la disposici\u00f3n del profeta Ibrahim a sacrificar a su hijo en obediencia a Dios. Se celebra con oraciones, sacrificio de un animal y compartir la carne.",
      },
    },
    {
      question: {
        en: 'Is Eid al-Adha a public holiday in Uganda?',
        fr: "L'A\u00efd el-Adha est-il un jour f\u00e9ri\u00e9 en Ouganda ?",
        es: '\u00bfEl Eid al-Adha es un d\u00eda festivo en Uganda?',
      },
      answer: {
        en: 'Yes, Eid al-Adha is an official public holiday in Uganda, alongside Eid al-Fitr. Government offices, schools, and banks are closed.',
        fr: "Oui, l'A\u00efd el-Adha est un jour f\u00e9ri\u00e9 officiel en Ouganda, aux c\u00f4t\u00e9s de l'A\u00efd el-Fitr. Les bureaux gouvernementaux, les \u00e9coles et les banques sont ferm\u00e9s.",
        es: 'S\u00ed, el Eid al-Adha es un d\u00eda festivo oficial en Uganda, junto con el Eid al-Fitr. Las oficinas gubernamentales, escuelas y bancos est\u00e1n cerrados.',
      },
    },
    {
      question: {
        en: 'How is the sacrificial meat distributed?',
        fr: 'Comment la viande sacrificielle est-elle distribu\u00e9e ?',
        es: '\u00bfC\u00f3mo se distribuye la carne del sacrificio?',
      },
      answer: {
        en: 'The meat from the Qurbani sacrifice is traditionally divided into three equal portions: one-third for the family, one-third for friends and neighbors, and one-third for the poor and those in need.',
        fr: "La viande du sacrifice du Qurbani est traditionnellement divis\u00e9e en trois portions \u00e9gales : un tiers pour la famille, un tiers pour les amis et voisins, et un tiers pour les pauvres et les n\u00e9cessiteux.",
        es: 'La carne del sacrificio del Qurbani se divide tradicionalmente en tres porciones iguales: un tercio para la familia, un tercio para amigos y vecinos, y un tercio para los pobres y necesitados.',
      },
    },
  ],

  colorTheme: 'green-gold',
  icon: '\ud83d\udc11',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'ug_christmas',
  countryCode: 'ug',
  slugs: { en: 'christmas-day', fr: 'jour-de-noel', es: 'dia-de-navidad' },
  names: { en: 'Christmas Day', fr: 'Jour de No\u00ebl', es: 'D\u00eda de Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: 'Christmas Day on December 25 is widely celebrated in Uganda with church services, family gatherings, festive meals featuring roasted goat, and community celebrations. It is a public holiday enjoyed across the country.',
    fr: 'Le jour de No\u00ebl, le 25 d\u00e9cembre, est largement c\u00e9l\u00e9br\u00e9 en Ouganda avec des services religieux, des r\u00e9unions familiales, des repas festifs avec de la ch\u00e8vre r\u00f4tie et des c\u00e9l\u00e9brations communautaires. C\'est un jour f\u00e9ri\u00e9 appr\u00e9ci\u00e9 \u00e0 travers le pays.',
    es: 'El d\u00eda de Navidad, el 25 de diciembre, se celebra ampliamente en Uganda con servicios religiosos, reuniones familiares, comidas festivas con cabra asada y celebraciones comunitarias. Es un d\u00eda festivo disfrutado en todo el pa\u00eds.',
  },

  history: {
    en: "Christianity was introduced to Uganda in the late 19th century by both Catholic and Protestant missionaries. Today, approximately 85% of Uganda's population identifies as Christian, making Christmas one of the country's most significant holidays.\n\nUganda has a unique Christian heritage, with the country's Catholic and Anglican martyrs (killed in the 1880s) being commemorated as national heroes. The interplay between Christianity and traditional Ugandan culture has created a distinctive Christmas celebration that blends Western customs with local traditions.\n\nThe Christmas season in Uganda is a time for family reunions, as many Ugandans working in cities travel to their rural villages to celebrate with extended family. The holiday is marked by church services, festive meals, community gatherings, and a spirit of generosity and sharing.",
    fr: "Le christianisme a \u00e9t\u00e9 introduit en Ouganda \u00e0 la fin du XIXe si\u00e8cle par des missionnaires catholiques et protestants. Aujourd'hui, environ 85% de la population ougandaise s'identifie comme chr\u00e9tienne, faisant de No\u00ebl l'une des f\u00eates les plus importantes du pays.\n\nL'Ouganda a un h\u00e9ritage chr\u00e9tien unique, avec les martyrs catholiques et anglicans du pays (tu\u00e9s dans les ann\u00e9es 1880) comm\u00e9mor\u00e9s comme h\u00e9ros nationaux. L'interaction entre le christianisme et la culture traditionnelle ougandaise a cr\u00e9\u00e9 une c\u00e9l\u00e9bration de No\u00ebl distinctive.\n\nLa saison de No\u00ebl en Ouganda est un moment de r\u00e9unions familiales, car de nombreux Ougandais travaillant en ville se rendent dans leurs villages ruraux pour c\u00e9l\u00e9brer avec la famille \u00e9largie.",
    es: "El cristianismo fue introducido en Uganda a finales del siglo XIX por misioneros cat\u00f3licos y protestantes. Hoy en d\u00eda, aproximadamente el 85% de la poblaci\u00f3n de Uganda se identifica como cristiana, haciendo de la Navidad una de las fiestas m\u00e1s significativas del pa\u00eds.\n\nUganda tiene un patrimonio cristiano \u00fanico, con los m\u00e1rtires cat\u00f3licos y anglicanos del pa\u00eds (asesinados en la d\u00e9cada de 1880) conmemorados como h\u00e9roes nacionales. La interacci\u00f3n entre el cristianismo y la cultura tradicional ugandesa ha creado una celebraci\u00f3n navide\u00f1a distintiva.\n\nLa temporada navide\u00f1a en Uganda es un momento de reuniones familiares, ya que muchos ugandeses que trabajan en las ciudades viajan a sus aldeas rurales para celebrar con la familia extendida.",
  },

  traditions: {
    en: [
      'Attending Christmas morning church services, often lasting several hours',
      'Preparing roasted goat, matoke (steamed green bananas), and other festive foods',
      'Traveling to rural villages for family reunions',
      'Children receiving new clothes as Christmas gifts',
      'Community celebrations with traditional music and dance',
      'Sharing meals with neighbors and those less fortunate',
      'Decorating homes and churches for the festive season',
    ],
    fr: [
      'Assister aux services religieux du matin de No\u00ebl, durant souvent plusieurs heures',
      'Pr\u00e9parer de la ch\u00e8vre r\u00f4tie, du matoke (bananes vertes \u00e0 la vapeur) et d\'autres plats festifs',
      'Voyager vers les villages ruraux pour les r\u00e9unions familiales',
      'Enfants recevant de nouveaux v\u00eatements comme cadeaux de No\u00ebl',
      'C\u00e9l\u00e9brations communautaires avec musique et danse traditionnelles',
      'Partager des repas avec les voisins et les plus d\u00e9munis',
      'D\u00e9corer les maisons et les \u00e9glises pour la saison festive',
    ],
    es: [
      'Asistir a servicios religiosos de la ma\u00f1ana de Navidad, que a menudo duran varias horas',
      'Preparar cabra asada, matoke (pl\u00e1tanos verdes al vapor) y otras comidas festivas',
      'Viajar a aldeas rurales para reuniones familiares',
      'Ni\u00f1os recibiendo ropa nueva como regalos de Navidad',
      'Celebraciones comunitarias con m\u00fasica y danza tradicionales',
      'Compartir comidas con vecinos y los menos afortunados',
      'Decorar casas e iglesias para la temporada festiva',
    ],
  },

  funFacts: {
    en: [
      'Roasted goat is the most traditional Christmas meal in Uganda, often cooked over an open fire.',
      'Many Ugandan children receive new clothes rather than toys as Christmas gifts, and wearing new outfits to church is an important tradition.',
      'Uganda\'s Uganda Martyrs, killed in the 1880s for refusing to renounce Christianity, are among the most celebrated saints in Africa.',
      'Christmas in Uganda falls during the dry season, making outdoor celebrations common and enjoyable.',
      'Ugandan Christmas celebrations often include traditional cultural performances like the Kiganda dance from the Buganda kingdom.',
    ],
    fr: [
      'La ch\u00e8vre r\u00f4tie est le repas de No\u00ebl le plus traditionnel en Ouganda, souvent cuite sur un feu ouvert.',
      'De nombreux enfants ougandais re\u00e7oivent de nouveaux v\u00eatements plut\u00f4t que des jouets, et porter de nouvelles tenues \u00e0 l\'\u00e9glise est une tradition importante.',
      'Les Martyrs de l\'Ouganda, tu\u00e9s dans les ann\u00e9es 1880 pour avoir refus\u00e9 de renoncer au christianisme, sont parmi les saints les plus c\u00e9l\u00e9br\u00e9s en Afrique.',
      'No\u00ebl en Ouganda tombe pendant la saison s\u00e8che, rendant les c\u00e9l\u00e9brations en plein air courantes.',
      'Les c\u00e9l\u00e9brations de No\u00ebl ougandaises incluent souvent des spectacles culturels traditionnels comme la danse Kiganda du royaume du Buganda.',
    ],
    es: [
      'La cabra asada es la comida navide\u00f1a m\u00e1s tradicional en Uganda, a menudo cocinada sobre fuego abierto.',
      'Muchos ni\u00f1os ugandeses reciben ropa nueva en lugar de juguetes, y usar nuevas prendas en la iglesia es una tradici\u00f3n importante.',
      'Los M\u00e1rtires de Uganda, asesinados en la d\u00e9cada de 1880 por negarse a renunciar al cristianismo, est\u00e1n entre los santos m\u00e1s celebrados de \u00c1frica.',
      'La Navidad en Uganda cae durante la estaci\u00f3n seca, haciendo que las celebraciones al aire libre sean comunes y agradables.',
      'Las celebraciones navide\u00f1as ugandesas a menudo incluyen espect\u00e1culos culturales tradicionales como la danza Kiganda del reino de Buganda.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan travel to your village early as roads become congested',
      'Purchase a goat or other meat for the festive meal in advance',
      'Buy new clothes for the family, especially children',
      'Attend church services and community celebrations',
      'Prepare to share meals with neighbors and those in need',
    ],
    fr: [
      'Planifier le voyage vers votre village t\u00f4t car les routes deviennent congestionnées',
      'Acheter une ch\u00e8vre ou d\'autres viandes pour le repas festif \u00e0 l\'avance',
      'Acheter de nouveaux v\u00eatements pour la famille, surtout les enfants',
      'Assister aux services religieux et aux c\u00e9l\u00e9brations communautaires',
      'Se pr\u00e9parer \u00e0 partager des repas avec les voisins et les n\u00e9cessiteux',
    ],
    es: [
      'Planificar el viaje a su aldea con anticipaci\u00f3n ya que las carreteras se congestionan',
      'Comprar una cabra u otra carne para la comida festiva con anticipaci\u00f3n',
      'Comprar ropa nueva para la familia, especialmente para los ni\u00f1os',
      'Asistir a servicios religiosos y celebraciones comunitarias',
      'Prepararse para compartir comidas con vecinos y los necesitados',
    ],
  },

  relatedHolidays: ['ug_eid-al-fitr', 'ug_eid-al-adha'],

  seo: {
    en: {
      titleTemplate: 'Christmas Day {year} Uganda \u2014 Countdown & Traditions',
      descriptionTemplate: 'When is Christmas {year} in Uganda? Live countdown to December 25, Ugandan Christmas traditions, and celebration guide.',
      keywords: ['Christmas Uganda', 'Uganda Christmas traditions', 'December 25 Uganda', 'Christmas countdown Uganda', 'roasted goat Christmas'],
    },
    fr: {
      titleTemplate: 'Jour de No\u00ebl {year} Ouganda \u2014 Compte \u00e0 rebours et traditions',
      descriptionTemplate: 'Quand est No\u00ebl {year} en Ouganda ? Compte \u00e0 rebours en direct, traditions de No\u00ebl ougandaises et guide de c\u00e9l\u00e9bration.',
      keywords: ['No\u00ebl Ouganda', 'traditions No\u00ebl Ouganda', '25 d\u00e9cembre Ouganda', 'compte \u00e0 rebours No\u00ebl Ouganda', 'ch\u00e8vre r\u00f4tie No\u00ebl'],
    },
    es: {
      titleTemplate: 'D\u00eda de Navidad {year} Uganda \u2014 Cuenta regresiva y tradiciones',
      descriptionTemplate: '\u00bfCu\u00e1ndo es Navidad {year} en Uganda? Cuenta regresiva en vivo, tradiciones navide\u00f1as ugandesas y gu\u00eda de celebraci\u00f3n.',
      keywords: ['Navidad Uganda', 'tradiciones Navidad Uganda', '25 de diciembre Uganda', 'cuenta regresiva Navidad Uganda', 'cabra asada Navidad'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Christmas Day {year} in Uganda?',
        fr: 'Quand est le jour de No\u00ebl {year} en Ouganda ?',
        es: '\u00bfCu\u00e1ndo es el d\u00eda de Navidad {year} en Uganda?',
      },
      answer: {
        en: 'Christmas Day {year} in Uganda is on {date} ({dayOfWeek}). It is always celebrated on December 25.',
        fr: 'Le jour de No\u00ebl {year} en Ouganda est le {date} ({dayOfWeek}). Il est toujours c\u00e9l\u00e9br\u00e9 le 25 d\u00e9cembre.',
        es: 'El d\u00eda de Navidad {year} en Uganda es el {date} ({dayOfWeek}). Siempre se celebra el 25 de diciembre.',
      },
    },
    {
      question: {
        en: 'What do Ugandans eat on Christmas?',
        fr: 'Que mangent les Ougandais \u00e0 No\u00ebl ?',
        es: '\u00bfQu\u00e9 comen los ugandeses en Navidad?',
      },
      answer: {
        en: 'The traditional Ugandan Christmas meal features roasted goat (often cooked over an open fire), matoke (steamed green bananas), rice, chapati, and chicken. Drinks typically include sodas and locally brewed beverages.',
        fr: 'Le repas de No\u00ebl traditionnel ougandais comprend de la ch\u00e8vre r\u00f4tie (souvent cuite sur un feu ouvert), du matoke (bananes vertes \u00e0 la vapeur), du riz, du chapati et du poulet.',
        es: 'La comida navide\u00f1a tradicional ugandesa incluye cabra asada (a menudo cocinada sobre fuego abierto), matoke (pl\u00e1tanos verdes al vapor), arroz, chapati y pollo.',
      },
    },
    {
      question: {
        en: 'Is Christmas a public holiday in Uganda?',
        fr: 'No\u00ebl est-il un jour f\u00e9ri\u00e9 en Ouganda ?',
        es: '\u00bfLa Navidad es un d\u00eda festivo en Uganda?',
      },
      answer: {
        en: 'Yes, both Christmas Day (December 25) and Boxing Day (December 26) are official public holidays in Uganda.',
        fr: 'Oui, le jour de No\u00ebl (25 d\u00e9cembre) et le lendemain de No\u00ebl (26 d\u00e9cembre) sont des jours f\u00e9ri\u00e9s officiels en Ouganda.',
        es: 'S\u00ed, tanto el d\u00eda de Navidad (25 de diciembre) como el d\u00eda siguiente (26 de diciembre) son d\u00edas festivos oficiales en Uganda.',
      },
    },
    {
      question: {
        en: 'How is Christmas different in Uganda?',
        fr: 'En quoi No\u00ebl est-il diff\u00e9rent en Ouganda ?',
        es: '\u00bfC\u00f3mo es diferente la Navidad en Uganda?',
      },
      answer: {
        en: 'Christmas in Uganda features warm weather outdoor celebrations, roasted goat instead of turkey, children receiving new clothes, and extended family reunions in rural villages. Church services are central and often include traditional Ugandan cultural performances.',
        fr: 'No\u00ebl en Ouganda comprend des c\u00e9l\u00e9brations en plein air par temps chaud, de la ch\u00e8vre r\u00f4tie au lieu de la dinde, de nouveaux v\u00eatements pour les enfants et des r\u00e9unions de famille \u00e9largie dans les villages ruraux.',
        es: 'La Navidad en Uganda presenta celebraciones al aire libre con clima c\u00e1lido, cabra asada en lugar de pavo, ni\u00f1os recibiendo ropa nueva y reuniones de familia extendida en aldeas rurales.',
      },
    },
  ],

  colorTheme: 'red-green',
  icon: '\ud83c\udf84',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const ugHolidays: HolidayData[] = [
  liberationDay,
  womensDay,
  independenceDay,
  eidAlFitr,
  eidAlAdha,
  christmas,
];

export default ugHolidays;
