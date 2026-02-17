/**
 * Ghana holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { nthWeekday, getEidAlFitrDate } from './_shared-dates';

// ---------------------------------------------------------------------------
// Independence Day — March 6
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'gh_independence-day',
  countryCode: 'gh',
  slugs: { en: 'independence-day', fr: 'jour-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Jour de l'Ind\u00e9pendance", es: 'D\u00eda de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 3,
  fixedDay: 6,

  descriptions: {
    en: 'Independence Day on March 6 commemorates Ghana becoming the first sub-Saharan African country to gain independence from colonial rule in 1957. The day is celebrated with parades, flag ceremonies, and national pride across the country.',
    fr: "Le Jour de l'Ind\u00e9pendance, le 6 mars, comm\u00e9more le fait que le Ghana est devenu le premier pays d'Afrique subsaharienne \u00e0 obtenir son ind\u00e9pendance du pouvoir colonial en 1957. La journ\u00e9e est c\u00e9l\u00e9br\u00e9e avec des d\u00e9fil\u00e9s, des c\u00e9r\u00e9monies du drapeau et une fiert\u00e9 nationale \u00e0 travers tout le pays.",
    es: 'El D\u00eda de la Independencia, el 6 de marzo, conmemora que Ghana se convirti\u00f3 en el primer pa\u00eds del \u00c1frica subsahariana en obtener la independencia del dominio colonial en 1957. El d\u00eda se celebra con desfiles, ceremonias de la bandera y orgullo nacional en todo el pa\u00eds.',
  },

  history: {
    en: "Ghana's independence movement was led by Kwame Nkrumah, who became the nation's first prime minister and later its first president. On March 6, 1957, the Gold Coast became the independent nation of Ghana, inspiring independence movements across Africa.\n\nNkrumah's famous declaration, \"The independence of Ghana is meaningless unless it is linked up with the total liberation of Africa,\" underscored the pan-African significance of the moment. The event was attended by dignitaries from around the world and marked a turning point in African colonial history.\n\nToday, Independence Day remains the most important national holiday in Ghana, celebrated with military parades at Independence Square in Accra, cultural performances, and speeches by government leaders.",
    fr: "Le mouvement d'ind\u00e9pendance du Ghana a \u00e9t\u00e9 men\u00e9 par Kwame Nkrumah, qui est devenu le premier ministre du pays, puis son premier pr\u00e9sident. Le 6 mars 1957, la C\u00f4te-de-l'Or est devenue la nation ind\u00e9pendante du Ghana, inspirant les mouvements d'ind\u00e9pendance \u00e0 travers l'Afrique.\n\nLa c\u00e9l\u00e8bre d\u00e9claration de Nkrumah, \u00ab L'ind\u00e9pendance du Ghana est sans signification si elle n'est pas li\u00e9e \u00e0 la lib\u00e9ration totale de l'Afrique \u00bb, a soulign\u00e9 la port\u00e9e panafricaine de ce moment. L'\u00e9v\u00e9nement a r\u00e9uni des dignitaires du monde entier et a marqu\u00e9 un tournant dans l'histoire coloniale africaine.\n\nAujourd'hui, le Jour de l'Ind\u00e9pendance reste la f\u00eate nationale la plus importante du Ghana, c\u00e9l\u00e9br\u00e9e avec des d\u00e9fil\u00e9s militaires sur la Place de l'Ind\u00e9pendance \u00e0 Accra, des spectacles culturels et des discours des dirigeants du gouvernement.",
    es: "El movimiento independentista de Ghana fue liderado por Kwame Nkrumah, quien se convirti\u00f3 en el primer ministro de la naci\u00f3n y luego en su primer presidente. El 6 de marzo de 1957, la Costa de Oro se convirti\u00f3 en la naci\u00f3n independiente de Ghana, inspirando movimientos de independencia en toda \u00c1frica.\n\nLa famosa declaraci\u00f3n de Nkrumah, \u00abLa independencia de Ghana no tiene sentido a menos que est\u00e9 vinculada a la liberaci\u00f3n total de \u00c1frica\u00bb, subray\u00f3 la importancia panafricana del momento. El evento cont\u00f3 con la asistencia de dignatarios de todo el mundo y marc\u00f3 un punto de inflexi\u00f3n en la historia colonial africana.\n\nHoy en d\u00eda, el D\u00eda de la Independencia sigue siendo la fiesta nacional m\u00e1s importante de Ghana, celebrada con desfiles militares en la Plaza de la Independencia en Accra, espect\u00e1culos culturales y discursos de los l\u00edderes del gobierno.",
  },

  traditions: {
    en: [
      'Military and civilian parades at Independence Square in Accra',
      'Flag-raising ceremonies across the country',
      'Presidential address to the nation',
      'Cultural performances featuring traditional drumming and dancing',
      'Wearing national colors of red, gold, and green',
      'School children performing coordinated displays',
      'Fireworks and festive gatherings in major cities',
    ],
    fr: [
      'D\u00e9fil\u00e9s militaires et civils sur la Place de l\'Ind\u00e9pendance \u00e0 Accra',
      'C\u00e9r\u00e9monies de lev\u00e9e du drapeau \u00e0 travers le pays',
      'Discours pr\u00e9sidentiel \u00e0 la nation',
      'Spectacles culturels avec tambours et danses traditionnels',
      'Port des couleurs nationales rouge, or et vert',
      'Spectacles coordonn\u00e9s des \u00e9coliers',
      'Feux d\'artifice et rassemblements festifs dans les grandes villes',
    ],
    es: [
      'Desfiles militares y civiles en la Plaza de la Independencia en Accra',
      'Ceremonias de izado de bandera en todo el pa\u00eds',
      'Discurso presidencial a la naci\u00f3n',
      'Espect\u00e1culos culturales con tambores y danzas tradicionales',
      'Uso de los colores nacionales rojo, dorado y verde',
      'Presentaciones coordinadas de los escolares',
      'Fuegos artificiales y reuniones festivas en las principales ciudades',
    ],
  },

  funFacts: {
    en: [
      'Ghana was the first sub-Saharan African country to gain independence from European colonial rule.',
      'The name "Ghana" was chosen to honor the ancient Ghana Empire, even though the modern country is not in the same geographic location.',
      'Kwame Nkrumah\'s famous midnight speech on March 6, 1957, is one of the most quoted addresses in African history.',
      'The Black Star on Ghana\'s flag symbolizes African emancipation and was inspired by Marcus Garvey\'s Black Star Line.',
      'Ghana\'s independence inspired a wave of decolonization across Africa, with 17 African nations gaining independence in 1960 alone.',
    ],
    fr: [
      'Le Ghana a \u00e9t\u00e9 le premier pays d\'Afrique subsaharienne \u00e0 obtenir son ind\u00e9pendance du pouvoir colonial europ\u00e9en.',
      'Le nom \u00ab Ghana \u00bb a \u00e9t\u00e9 choisi en hommage \u00e0 l\'ancien Empire du Ghana, m\u00eame si le pays moderne n\'est pas dans la m\u00eame localisation g\u00e9ographique.',
      'Le c\u00e9l\u00e8bre discours de minuit de Kwame Nkrumah le 6 mars 1957 est l\'un des discours les plus cit\u00e9s de l\'histoire africaine.',
      'L\'\u00c9toile noire sur le drapeau du Ghana symbolise l\'\u00e9mancipation africaine et a \u00e9t\u00e9 inspir\u00e9e par la Black Star Line de Marcus Garvey.',
      'L\'ind\u00e9pendance du Ghana a inspir\u00e9 une vague de d\u00e9colonisation \u00e0 travers l\'Afrique, avec 17 nations africaines obtenant leur ind\u00e9pendance rien qu\'en 1960.',
    ],
    es: [
      'Ghana fue el primer pa\u00eds del \u00c1frica subsahariana en obtener la independencia del dominio colonial europeo.',
      'El nombre "Ghana" fue elegido en honor al antiguo Imperio de Ghana, aunque el pa\u00eds moderno no est\u00e1 en la misma ubicaci\u00f3n geogr\u00e1fica.',
      'El famoso discurso de medianoche de Kwame Nkrumah el 6 de marzo de 1957 es uno de los discursos m\u00e1s citados en la historia africana.',
      'La Estrella Negra en la bandera de Ghana simboliza la emancipaci\u00f3n africana y fue inspirada por la Black Star Line de Marcus Garvey.',
      'La independencia de Ghana inspir\u00f3 una ola de descolonizaci\u00f3n en toda \u00c1frica, con 17 naciones africanas logrando su independencia solo en 1960.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan to attend the main parade at Independence Square in Accra',
      'Wear red, gold, and green to show national pride',
      'Arrive early to secure a good viewing spot for ceremonies',
      'Prepare for large crowds and road closures in city centers',
      'Check local event schedules for cultural performances and fireworks',
    ],
    fr: [
      'Pr\u00e9voir d\'assister au d\u00e9fil\u00e9 principal sur la Place de l\'Ind\u00e9pendance \u00e0 Accra',
      'Porter du rouge, de l\'or et du vert pour montrer la fiert\u00e9 nationale',
      'Arriver t\u00f4t pour avoir une bonne place pour les c\u00e9r\u00e9monies',
      'Se pr\u00e9parer aux grandes foules et aux fermetures de routes dans les centres-villes',
      'V\u00e9rifier les programmes locaux pour les spectacles culturels et les feux d\'artifice',
    ],
    es: [
      'Planificar asistir al desfile principal en la Plaza de la Independencia en Accra',
      'Vestir rojo, dorado y verde para mostrar el orgullo nacional',
      'Llegar temprano para asegurar un buen lugar para las ceremonias',
      'Prepararse para grandes multitudes y cierres de carreteras en los centros de las ciudades',
      'Consultar los programas locales de espect\u00e1culos culturales y fuegos artificiales',
    ],
  },

  relatedHolidays: ['gh_founders-day', 'gh_kwame-nkrumah-day'],

  seo: {
    en: {
      titleTemplate: 'Ghana Independence Day {year} \u2014 Countdown & Guide',
      descriptionTemplate: 'When is Ghana Independence Day {year}? Live countdown to March 6, history of Ghana\'s independence, and celebration guide.',
      keywords: ['Ghana Independence Day', 'March 6 Ghana', 'Ghana national holiday', 'Kwame Nkrumah independence', 'Ghana independence countdown'],
    },
    fr: {
      titleTemplate: "Jour de l'Ind\u00e9pendance du Ghana {year} \u2014 Compte \u00e0 rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'Ind\u00e9pendance du Ghana {year} ? Compte \u00e0 rebours en direct jusqu'au 6 mars, histoire et guide de c\u00e9l\u00e9bration.",
      keywords: ["Ind\u00e9pendance Ghana", "6 mars Ghana", "f\u00eate nationale Ghana", "Kwame Nkrumah ind\u00e9pendance", "compte \u00e0 rebours ind\u00e9pendance Ghana"],
    },
    es: {
      titleTemplate: 'D\u00eda de la Independencia de Ghana {year} \u2014 Cuenta regresiva y gu\u00eda',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda de la Independencia de Ghana {year}? Cuenta regresiva en vivo hasta el 6 de marzo, historia y gu\u00eda de celebraci\u00f3n.',
      keywords: ['Independencia Ghana', '6 de marzo Ghana', 'fiesta nacional Ghana', 'Kwame Nkrumah independencia', 'cuenta regresiva independencia Ghana'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Ghana Independence Day {year}?',
        fr: "Quand est le Jour de l'Ind\u00e9pendance du Ghana {year} ?",
        es: '\u00bfCu\u00e1ndo es el D\u00eda de la Independencia de Ghana {year}?',
      },
      answer: {
        en: 'Ghana Independence Day {year} is on {date} ({dayOfWeek}). It is always celebrated on March 6.',
        fr: "Le Jour de l'Ind\u00e9pendance du Ghana {year} est le {date} ({dayOfWeek}). Il est toujours c\u00e9l\u00e9br\u00e9 le 6 mars.",
        es: 'El D\u00eda de la Independencia de Ghana {year} es el {date} ({dayOfWeek}). Siempre se celebra el 6 de marzo.',
      },
    },
    {
      question: {
        en: 'Why is March 6 important in Ghana?',
        fr: 'Pourquoi le 6 mars est-il important au Ghana ?',
        es: '\u00bfPor qu\u00e9 es importante el 6 de marzo en Ghana?',
      },
      answer: {
        en: 'March 6, 1957, is the date Ghana gained independence from British colonial rule, becoming the first sub-Saharan African country to do so. Kwame Nkrumah led the independence movement.',
        fr: "Le 6 mars 1957 est la date \u00e0 laquelle le Ghana a obtenu son ind\u00e9pendance du pouvoir colonial britannique, devenant le premier pays d'Afrique subsaharienne \u00e0 le faire. Kwame Nkrumah a men\u00e9 le mouvement d'ind\u00e9pendance.",
        es: 'El 6 de marzo de 1957 es la fecha en que Ghana obtuvo su independencia del dominio colonial brit\u00e1nico, convirti\u00e9ndose en el primer pa\u00eds del \u00c1frica subsahariana en hacerlo. Kwame Nkrumah lider\u00f3 el movimiento independentista.',
      },
    },
    {
      question: {
        en: 'How is Independence Day celebrated in Ghana?',
        fr: "Comment le Jour de l'Ind\u00e9pendance est-il c\u00e9l\u00e9br\u00e9 au Ghana ?",
        es: '\u00bfC\u00f3mo se celebra el D\u00eda de la Independencia en Ghana?',
      },
      answer: {
        en: 'Independence Day is celebrated with military parades at Independence Square in Accra, cultural performances, flag-raising ceremonies, presidential addresses, and fireworks. Citizens wear the national colors and attend festive gatherings.',
        fr: "Le Jour de l'Ind\u00e9pendance est c\u00e9l\u00e9br\u00e9 avec des d\u00e9fil\u00e9s militaires sur la Place de l'Ind\u00e9pendance \u00e0 Accra, des spectacles culturels, des c\u00e9r\u00e9monies de lev\u00e9e du drapeau, des discours pr\u00e9sidentiels et des feux d'artifice.",
        es: 'El D\u00eda de la Independencia se celebra con desfiles militares en la Plaza de la Independencia en Accra, espect\u00e1culos culturales, ceremonias de izado de bandera, discursos presidenciales y fuegos artificiales.',
      },
    },
    {
      question: {
        en: 'Is Independence Day a public holiday in Ghana?',
        fr: "Le Jour de l'Ind\u00e9pendance est-il un jour f\u00e9ri\u00e9 au Ghana ?",
        es: '\u00bfEl D\u00eda de la Independencia es un d\u00eda festivo en Ghana?',
      },
      answer: {
        en: 'Yes, Independence Day is an official public holiday in Ghana. Schools, banks, and government offices are closed. It is the most important national holiday in the country.',
        fr: "Oui, le Jour de l'Ind\u00e9pendance est un jour f\u00e9ri\u00e9 officiel au Ghana. Les \u00e9coles, les banques et les bureaux gouvernementaux sont ferm\u00e9s. C'est la f\u00eate nationale la plus importante du pays.",
        es: 'S\u00ed, el D\u00eda de la Independencia es un d\u00eda festivo oficial en Ghana. Las escuelas, bancos y oficinas gubernamentales est\u00e1n cerrados. Es la fiesta nacional m\u00e1s importante del pa\u00eds.',
      },
    },
  ],

  colorTheme: 'red-gold-green',
  icon: '\ud83c\uddec\ud83c\udded',
};

// ---------------------------------------------------------------------------
// Founders' Day — August 4
// ---------------------------------------------------------------------------

const foundersDay: HolidayData = {
  id: 'gh_founders-day',
  countryCode: 'gh',
  slugs: { en: 'founders-day', fr: 'jour-des-fondateurs', es: 'dia-de-los-fundadores' },
  names: { en: "Founders' Day", fr: 'Jour des Fondateurs', es: 'D\u00eda de los Fundadores' },

  dateType: 'fixed',
  fixedMonth: 8,
  fixedDay: 4,

  descriptions: {
    en: "Founders' Day on August 4 honors all individuals who contributed to the founding of Ghana as a nation. Established in 2019, this holiday recognizes the collective effort behind Ghana's independence and nation-building.",
    fr: "Le Jour des Fondateurs, le 4 ao\u00fbt, rend hommage \u00e0 toutes les personnes qui ont contribu\u00e9 \u00e0 la fondation du Ghana en tant que nation. \u00c9tabli en 2019, ce jour f\u00e9ri\u00e9 reconna\u00eet l'effort collectif derri\u00e8re l'ind\u00e9pendance et la construction nationale du Ghana.",
    es: "El D\u00eda de los Fundadores, el 4 de agosto, honra a todas las personas que contribuyeron a la fundaci\u00f3n de Ghana como naci\u00f3n. Establecido en 2019, este d\u00eda festivo reconoce el esfuerzo colectivo detr\u00e1s de la independencia y la construcci\u00f3n nacional de Ghana.",
  },

  history: {
    en: "Founders' Day was established by the Ghanaian government in 2019 through the Public Holidays (Amendment) Act. The holiday was created to honor all individuals and organizations that contributed to the struggle for Ghana's independence and the building of the nation.\n\nPreviously, August 4 was celebrated as Founders' Day solely in honor of Kwame Nkrumah. The 2019 amendment broadened the scope to include all founding figures such as J.B. Danquah, Edward Akufo-Addo, Obetsebi-Lamptey, and other members of the \"Big Six\" who were instrumental in the independence movement.\n\nThe change reflected a desire to recognize that Ghana's independence was a collective achievement rather than the work of a single individual, honoring the diverse contributions of various political leaders, traditional rulers, and ordinary citizens.",
    fr: "Le Jour des Fondateurs a \u00e9t\u00e9 \u00e9tabli par le gouvernement ghan\u00e9en en 2019 par la loi d'amendement sur les jours f\u00e9ri\u00e9s. Ce jour f\u00e9ri\u00e9 a \u00e9t\u00e9 cr\u00e9\u00e9 pour honorer toutes les personnes et organisations qui ont contribu\u00e9 \u00e0 la lutte pour l'ind\u00e9pendance du Ghana et \u00e0 la construction de la nation.\n\nAuparavant, le 4 ao\u00fbt \u00e9tait c\u00e9l\u00e9br\u00e9 comme Jour des Fondateurs uniquement en l'honneur de Kwame Nkrumah. L'amendement de 2019 a \u00e9largi la port\u00e9e pour inclure tous les personnages fondateurs tels que J.B. Danquah, Edward Akufo-Addo, Obetsebi-Lamptey et d'autres membres des \u00ab Big Six \u00bb.\n\nCe changement refl\u00e9tait le d\u00e9sir de reconna\u00eetre que l'ind\u00e9pendance du Ghana \u00e9tait une r\u00e9alisation collective plut\u00f4t que l'\u0153uvre d'un seul individu, honorant les contributions diverses de diff\u00e9rents dirigeants politiques, chefs traditionnels et citoyens ordinaires.",
    es: "El D\u00eda de los Fundadores fue establecido por el gobierno ghan\u00e9s en 2019 a trav\u00e9s de la Ley de Enmienda de D\u00edas Festivos. El d\u00eda festivo fue creado para honrar a todas las personas y organizaciones que contribuyeron a la lucha por la independencia de Ghana y la construcci\u00f3n de la naci\u00f3n.\n\nAnteriormente, el 4 de agosto se celebraba como D\u00eda de los Fundadores \u00fanicamente en honor a Kwame Nkrumah. La enmienda de 2019 ampli\u00f3 el alcance para incluir a todas las figuras fundadoras como J.B. Danquah, Edward Akufo-Addo, Obetsebi-Lamptey y otros miembros de los \u00abBig Six\u00bb.\n\nEl cambio reflej\u00f3 el deseo de reconocer que la independencia de Ghana fue un logro colectivo m\u00e1s que la obra de un solo individuo, honrando las diversas contribuciones de varios l\u00edderes pol\u00edticos, gobernantes tradicionales y ciudadanos comunes.",
  },

  traditions: {
    en: [
      'Wreath-laying ceremonies at national monuments',
      'Cultural performances celebrating Ghana\'s diverse heritage',
      'Presidential speeches honoring founding figures',
      'Educational programs about Ghana\'s independence history',
      'Community gatherings and civic events',
      'Media documentaries about the founding fathers',
    ],
    fr: [
      'C\u00e9r\u00e9monies de d\u00e9p\u00f4t de gerbes aux monuments nationaux',
      'Spectacles culturels c\u00e9l\u00e9brant le patrimoine diversifi\u00e9 du Ghana',
      'Discours pr\u00e9sidentiels honorant les figures fondatrices',
      'Programmes \u00e9ducatifs sur l\'histoire de l\'ind\u00e9pendance du Ghana',
      'Rassemblements communautaires et \u00e9v\u00e9nements civiques',
      'Documentaires m\u00e9diatiques sur les p\u00e8res fondateurs',
    ],
    es: [
      'Ceremonias de ofrenda floral en monumentos nacionales',
      'Espect\u00e1culos culturales que celebran el diverso patrimonio de Ghana',
      'Discursos presidenciales honrando a las figuras fundadoras',
      'Programas educativos sobre la historia de la independencia de Ghana',
      'Reuniones comunitarias y eventos c\u00edvicos',
      'Documentales medi\u00e1ticos sobre los padres fundadores',
    ],
  },

  funFacts: {
    en: [
      "The \"Big Six\" were the six leaders arrested by colonial authorities in 1948, which galvanized the independence movement.",
      "Founders' Day was only established in 2019, making it one of Ghana's newest public holidays.",
      'The holiday was created partly to settle a long-standing debate about whether Kwame Nkrumah alone deserved credit for independence.',
      'August 4 was originally chosen because it was Nkrumah\'s birthday, but the holiday now honors all founders.',
      'Ghana\'s independence movement involved trade unions, farmers, market women, and traditional chiefs alongside political leaders.',
    ],
    fr: [
      'Les \u00ab Big Six \u00bb \u00e9taient les six dirigeants arr\u00eat\u00e9s par les autorit\u00e9s coloniales en 1948, ce qui a galvanis\u00e9 le mouvement d\'ind\u00e9pendance.',
      'Le Jour des Fondateurs n\'a \u00e9t\u00e9 \u00e9tabli qu\'en 2019, ce qui en fait l\'un des jours f\u00e9ri\u00e9s les plus r\u00e9cents du Ghana.',
      'Le jour f\u00e9ri\u00e9 a \u00e9t\u00e9 cr\u00e9\u00e9 en partie pour r\u00e9gler un d\u00e9bat de longue date sur le m\u00e9rite exclusif de Nkrumah pour l\'ind\u00e9pendance.',
      'Le 4 ao\u00fbt a \u00e9t\u00e9 initialement choisi parce que c\'\u00e9tait l\'anniversaire de Nkrumah, mais le jour f\u00e9ri\u00e9 honore d\u00e9sormais tous les fondateurs.',
      'Le mouvement d\'ind\u00e9pendance du Ghana impliquait des syndicats, des agriculteurs, des femmes du march\u00e9 et des chefs traditionnels.',
    ],
    es: [
      'Los "Big Six" fueron los seis l\u00edderes arrestados por las autoridades coloniales en 1948, lo que galvaniz\u00f3 el movimiento independentista.',
      'El D\u00eda de los Fundadores solo se estableci\u00f3 en 2019, lo que lo convierte en uno de los d\u00edas festivos m\u00e1s nuevos de Ghana.',
      'El d\u00eda festivo fue creado en parte para resolver un largo debate sobre si solo Kwame Nkrumah merec\u00eda el cr\u00e9dito por la independencia.',
      'El 4 de agosto fue elegido originalmente porque era el cumplea\u00f1os de Nkrumah, pero el d\u00eda festivo ahora honra a todos los fundadores.',
      'El movimiento independentista de Ghana involucr\u00f3 sindicatos, agricultores, mujeres del mercado y jefes tradicionales junto con l\u00edderes pol\u00edticos.',
    ],
  },

  planningChecklist: {
    en: [
      'Check for official ceremonies and cultural events in your region',
      'Learn about the founding figures of Ghana before the holiday',
      'Visit national monuments and historical sites',
      'Wear national colors to show solidarity',
      'Engage in community discussions about Ghana\'s founding history',
    ],
    fr: [
      'V\u00e9rifier les c\u00e9r\u00e9monies officielles et les \u00e9v\u00e9nements culturels dans votre r\u00e9gion',
      'Se renseigner sur les figures fondatrices du Ghana avant le jour f\u00e9ri\u00e9',
      'Visiter les monuments nationaux et les sites historiques',
      'Porter les couleurs nationales pour montrer la solidarit\u00e9',
      'Participer aux discussions communautaires sur l\'histoire fondatrice du Ghana',
    ],
    es: [
      'Consultar las ceremonias oficiales y eventos culturales en su regi\u00f3n',
      'Aprender sobre las figuras fundadoras de Ghana antes del d\u00eda festivo',
      'Visitar monumentos nacionales y sitios hist\u00f3ricos',
      'Usar los colores nacionales para mostrar solidaridad',
      'Participar en discusiones comunitarias sobre la historia fundacional de Ghana',
    ],
  },

  relatedHolidays: ['gh_independence-day', 'gh_kwame-nkrumah-day'],

  seo: {
    en: {
      titleTemplate: "Ghana Founders' Day {year} \u2014 Countdown & History",
      descriptionTemplate: "When is Founders' Day {year} in Ghana? Live countdown to August 4, history, and celebration guide.",
      keywords: ["Ghana Founders' Day", 'August 4 Ghana', 'Ghana public holiday', 'Big Six Ghana', "Founders' Day countdown"],
    },
    fr: {
      titleTemplate: 'Jour des Fondateurs du Ghana {year} \u2014 Compte \u00e0 rebours et histoire',
      descriptionTemplate: 'Quand est le Jour des Fondateurs {year} au Ghana ? Compte \u00e0 rebours en direct jusqu\'au 4 ao\u00fbt, histoire et guide.',
      keywords: ['Jour des Fondateurs Ghana', '4 ao\u00fbt Ghana', 'jour f\u00e9ri\u00e9 Ghana', 'Big Six Ghana', 'compte \u00e0 rebours fondateurs Ghana'],
    },
    es: {
      titleTemplate: 'D\u00eda de los Fundadores de Ghana {year} \u2014 Cuenta regresiva e historia',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda de los Fundadores {year} en Ghana? Cuenta regresiva en vivo hasta el 4 de agosto, historia y gu\u00eda.',
      keywords: ['D\u00eda de los Fundadores Ghana', '4 de agosto Ghana', 'd\u00eda festivo Ghana', 'Big Six Ghana', 'cuenta regresiva fundadores Ghana'],
    },
  },

  faq: [
    {
      question: {
        en: "When is Founders' Day {year} in Ghana?",
        fr: 'Quand est le Jour des Fondateurs {year} au Ghana ?',
        es: '\u00bfCu\u00e1ndo es el D\u00eda de los Fundadores {year} en Ghana?',
      },
      answer: {
        en: "Founders' Day {year} in Ghana is on {date} ({dayOfWeek}). It is always celebrated on August 4.",
        fr: 'Le Jour des Fondateurs {year} au Ghana est le {date} ({dayOfWeek}). Il est toujours c\u00e9l\u00e9br\u00e9 le 4 ao\u00fbt.',
        es: 'El D\u00eda de los Fundadores {year} en Ghana es el {date} ({dayOfWeek}). Siempre se celebra el 4 de agosto.',
      },
    },
    {
      question: {
        en: "Who are the founders honored on Founders' Day?",
        fr: 'Qui sont les fondateurs honor\u00e9s le Jour des Fondateurs ?',
        es: '\u00bfQui\u00e9nes son los fundadores honrados en el D\u00eda de los Fundadores?',
      },
      answer: {
        en: "Founders' Day honors all individuals who contributed to Ghana's founding, including the \"Big Six\" — Kwame Nkrumah, J.B. Danquah, Edward Akufo-Addo, Obetsebi-Lamptey, Ako Adjei, and William Ofori Atta — as well as other political leaders, traditional chiefs, and citizens.",
        fr: 'Le Jour des Fondateurs honore toutes les personnes qui ont contribu\u00e9 \u00e0 la fondation du Ghana, y compris les \u00ab Big Six \u00bb \u2014 Kwame Nkrumah, J.B. Danquah, Edward Akufo-Addo, Obetsebi-Lamptey, Ako Adjei et William Ofori Atta \u2014 ainsi que d\'autres dirigeants politiques, chefs traditionnels et citoyens.',
        es: 'El D\u00eda de los Fundadores honra a todas las personas que contribuyeron a la fundaci\u00f3n de Ghana, incluidos los "Big Six" \u2014 Kwame Nkrumah, J.B. Danquah, Edward Akufo-Addo, Obetsebi-Lamptey, Ako Adjei y William Ofori Atta \u2014 as\u00ed como otros l\u00edderes pol\u00edticos, jefes tradicionales y ciudadanos.',
      },
    },
    {
      question: {
        en: "Why was Founders' Day established in 2019?",
        fr: 'Pourquoi le Jour des Fondateurs a-t-il \u00e9t\u00e9 \u00e9tabli en 2019 ?',
        es: '\u00bfPor qu\u00e9 se estableci\u00f3 el D\u00eda de los Fundadores en 2019?',
      },
      answer: {
        en: "Founders' Day was established to recognize that Ghana's independence was a collective achievement. Previously, August 4 honored only Kwame Nkrumah. The 2019 amendment broadened it to honor all founding figures.",
        fr: "Le Jour des Fondateurs a \u00e9t\u00e9 \u00e9tabli pour reconna\u00eetre que l'ind\u00e9pendance du Ghana \u00e9tait une r\u00e9alisation collective. Auparavant, le 4 ao\u00fbt honorait uniquement Kwame Nkrumah. L'amendement de 2019 l'a \u00e9largi pour honorer tous les fondateurs.",
        es: 'El D\u00eda de los Fundadores se estableci\u00f3 para reconocer que la independencia de Ghana fue un logro colectivo. Anteriormente, el 4 de agosto honraba solo a Kwame Nkrumah. La enmienda de 2019 lo ampli\u00f3 para honrar a todos los fundadores.',
      },
    },
    {
      question: {
        en: "Is Founders' Day a public holiday in Ghana?",
        fr: 'Le Jour des Fondateurs est-il un jour f\u00e9ri\u00e9 au Ghana ?',
        es: '\u00bfEl D\u00eda de los Fundadores es un d\u00eda festivo en Ghana?',
      },
      answer: {
        en: "Yes, Founders' Day is an official public holiday in Ghana. Government offices, schools, and banks are closed.",
        fr: 'Oui, le Jour des Fondateurs est un jour f\u00e9ri\u00e9 officiel au Ghana. Les bureaux gouvernementaux, les \u00e9coles et les banques sont ferm\u00e9s.',
        es: 'S\u00ed, el D\u00eda de los Fundadores es un d\u00eda festivo oficial en Ghana. Las oficinas gubernamentales, escuelas y bancos est\u00e1n cerrados.',
      },
    },
  ],

  colorTheme: 'red-gold-green',
  icon: '\ud83c\udfdb\ufe0f',
};

// ---------------------------------------------------------------------------
// Kwame Nkrumah Memorial Day — September 21
// ---------------------------------------------------------------------------

const kwameNkrumahDay: HolidayData = {
  id: 'gh_kwame-nkrumah-day',
  countryCode: 'gh',
  slugs: { en: 'kwame-nkrumah-memorial-day', fr: 'jour-memorial-kwame-nkrumah', es: 'dia-conmemorativo-kwame-nkrumah' },
  names: { en: 'Kwame Nkrumah Memorial Day', fr: 'Jour comm\u00e9moratif de Kwame Nkrumah', es: 'D\u00eda Conmemorativo de Kwame Nkrumah' },

  dateType: 'fixed',
  fixedMonth: 9,
  fixedDay: 21,

  descriptions: {
    en: "Kwame Nkrumah Memorial Day on September 21 honors the birthday of Ghana's first president and leading figure of African independence. Memorial events are held at the Kwame Nkrumah Mausoleum in Accra.",
    fr: "Le Jour comm\u00e9moratif de Kwame Nkrumah, le 21 septembre, honore l'anniversaire du premier pr\u00e9sident du Ghana et figure majeure de l'ind\u00e9pendance africaine. Des \u00e9v\u00e9nements comm\u00e9moratifs ont lieu au Mausol\u00e9e Kwame Nkrumah \u00e0 Accra.",
    es: "El D\u00eda Conmemorativo de Kwame Nkrumah, el 21 de septiembre, honra el cumplea\u00f1os del primer presidente de Ghana y figura l\u00edder de la independencia africana. Se realizan eventos conmemorativos en el Mausoleo Kwame Nkrumah en Accra.",
  },

  history: {
    en: "Kwame Nkrumah was born on September 21, 1909, in Nkroful in the Western Region of the Gold Coast (now Ghana). He studied in the United States and the United Kingdom before returning to lead the independence movement. He became Ghana's first prime minister in 1957 and its first president in 1960.\n\nNkrumah was a visionary pan-Africanist who advocated for the political and economic unification of Africa. He established the Organisation of African Unity (precursor to the African Union) and championed industrialization and education in Ghana.\n\nDespite being overthrown in a 1966 coup while abroad, Nkrumah remains one of the most influential African leaders of the 20th century. The Kwame Nkrumah Memorial Day was established to ensure his legacy is remembered and celebrated by future generations.",
    fr: "Kwame Nkrumah est n\u00e9 le 21 septembre 1909 \u00e0 Nkroful dans la r\u00e9gion occidentale de la C\u00f4te-de-l'Or (aujourd'hui le Ghana). Il a \u00e9tudi\u00e9 aux \u00c9tats-Unis et au Royaume-Uni avant de revenir diriger le mouvement d'ind\u00e9pendance. Il est devenu le premier ministre du Ghana en 1957 et son premier pr\u00e9sident en 1960.\n\nNkrumah \u00e9tait un panafricaniste visionnaire qui pr\u00f4nait l'unification politique et \u00e9conomique de l'Afrique. Il a fond\u00e9 l'Organisation de l'Unit\u00e9 Africaine (pr\u00e9curseur de l'Union Africaine) et a d\u00e9fendu l'industrialisation et l'\u00e9ducation au Ghana.\n\nMalgr\u00e9 son renversement lors d'un coup d'\u00c9tat en 1966, Nkrumah reste l'un des dirigeants africains les plus influents du XXe si\u00e8cle. Le Jour comm\u00e9moratif a \u00e9t\u00e9 \u00e9tabli pour que son h\u00e9ritage soit rappel\u00e9 et c\u00e9l\u00e9br\u00e9 par les g\u00e9n\u00e9rations futures.",
    es: "Kwame Nkrumah naci\u00f3 el 21 de septiembre de 1909 en Nkroful, en la Regi\u00f3n Occidental de la Costa de Oro (ahora Ghana). Estudi\u00f3 en Estados Unidos y el Reino Unido antes de regresar para liderar el movimiento independentista. Se convirti\u00f3 en el primer ministro de Ghana en 1957 y en su primer presidente en 1960.\n\nNkrumah fue un panafricanista visionario que abog\u00f3 por la unificaci\u00f3n pol\u00edtica y econ\u00f3mica de \u00c1frica. Estableci\u00f3 la Organizaci\u00f3n para la Unidad Africana (precursora de la Uni\u00f3n Africana) y promovi\u00f3 la industrializaci\u00f3n y la educaci\u00f3n en Ghana.\n\nA pesar de ser derrocado en un golpe de estado en 1966, Nkrumah sigue siendo uno de los l\u00edderes africanos m\u00e1s influyentes del siglo XX. El D\u00eda Conmemorativo fue establecido para asegurar que su legado sea recordado y celebrado por las generaciones futuras.",
  },

  traditions: {
    en: [
      'Visiting the Kwame Nkrumah Mausoleum and Memorial Park in Accra',
      'Wreath-laying ceremonies by government officials',
      'Educational lectures and panel discussions about Nkrumah\'s legacy',
      'Screenings of documentaries about Nkrumah\'s life and achievements',
      'School programs teaching children about pan-Africanism',
      'Cultural performances at the mausoleum grounds',
    ],
    fr: [
      'Visite du Mausol\u00e9e et du Parc comm\u00e9moratif Kwame Nkrumah \u00e0 Accra',
      'C\u00e9r\u00e9monies de d\u00e9p\u00f4t de gerbes par les responsables gouvernementaux',
      'Conf\u00e9rences \u00e9ducatives et tables rondes sur l\'h\u00e9ritage de Nkrumah',
      'Projections de documentaires sur la vie et les r\u00e9alisations de Nkrumah',
      'Programmes scolaires enseignant le panafricanisme aux enfants',
      'Spectacles culturels dans l\'enceinte du mausol\u00e9e',
    ],
    es: [
      'Visita al Mausoleo y Parque Conmemorativo Kwame Nkrumah en Accra',
      'Ceremonias de ofrenda floral por funcionarios del gobierno',
      'Conferencias educativas y paneles de discusi\u00f3n sobre el legado de Nkrumah',
      'Proyecciones de documentales sobre la vida y logros de Nkrumah',
      'Programas escolares que ense\u00f1an panafricanismo a los ni\u00f1os',
      'Espect\u00e1culos culturales en los terrenos del mausoleo',
    ],
  },

  funFacts: {
    en: [
      'The Kwame Nkrumah Mausoleum in Accra is shaped to resemble an upside-down sword, symbolizing peace.',
      'Nkrumah studied at Lincoln University in Pennsylvania, the first degree-granting historically Black university in the US.',
      'Nkrumah coined the term "neo-colonialism" to describe economic control of newly independent nations by former colonial powers.',
      'Ghana\'s national football team, the Black Stars, takes its name from the black star on the national flag, a symbol promoted by Nkrumah.',
      'Nkrumah was awarded the Lenin Peace Prize in 1962 for his contributions to African unity.',
    ],
    fr: [
      'Le Mausol\u00e9e Kwame Nkrumah \u00e0 Accra est con\u00e7u en forme d\'\u00e9p\u00e9e retourn\u00e9e, symbolisant la paix.',
      'Nkrumah a \u00e9tudi\u00e9 \u00e0 l\'Universit\u00e9 Lincoln en Pennsylvanie, la premi\u00e8re universit\u00e9 historiquement noire \u00e0 d\u00e9livrer des dipl\u00f4mes aux \u00c9tats-Unis.',
      'Nkrumah a invent\u00e9 le terme \u00ab n\u00e9o-colonialisme \u00bb pour d\u00e9crire le contr\u00f4le \u00e9conomique des anciennes puissances coloniales sur les nations nouvellement ind\u00e9pendantes.',
      'L\'\u00e9quipe nationale de football du Ghana, les Black Stars, tire son nom de l\'\u00e9toile noire sur le drapeau national, un symbole promu par Nkrumah.',
      'Nkrumah a re\u00e7u le Prix L\u00e9nine pour la paix en 1962 pour ses contributions \u00e0 l\'unit\u00e9 africaine.',
    ],
    es: [
      'El Mausoleo Kwame Nkrumah en Accra tiene forma de espada invertida, simbolizando la paz.',
      'Nkrumah estudi\u00f3 en la Universidad Lincoln en Pensilvania, la primera universidad hist\u00f3ricamente negra en otorgar t\u00edtulos en los Estados Unidos.',
      'Nkrumah acu\u00f1\u00f3 el t\u00e9rmino "neocolonialismo" para describir el control econ\u00f3mico de las antiguas potencias coloniales sobre las naciones reci\u00e9n independientes.',
      'El equipo nacional de f\u00fatbol de Ghana, los Black Stars, toma su nombre de la estrella negra en la bandera nacional, un s\u00edmbolo promovido por Nkrumah.',
      'Nkrumah recibi\u00f3 el Premio Lenin de la Paz en 1962 por sus contribuciones a la unidad africana.',
    ],
  },

  planningChecklist: {
    en: [
      'Visit the Kwame Nkrumah Mausoleum and Memorial Park in Accra',
      'Attend memorial lectures or panel discussions in your community',
      'Read about Nkrumah\'s contributions to pan-Africanism',
      'Watch documentaries about Ghana\'s independence movement',
      'Discuss Nkrumah\'s legacy with family and friends',
    ],
    fr: [
      'Visiter le Mausol\u00e9e et le Parc comm\u00e9moratif Kwame Nkrumah \u00e0 Accra',
      'Assister \u00e0 des conf\u00e9rences comm\u00e9moratives dans votre communaut\u00e9',
      'Se renseigner sur les contributions de Nkrumah au panafricanisme',
      'Regarder des documentaires sur le mouvement d\'ind\u00e9pendance du Ghana',
      'Discuter de l\'h\u00e9ritage de Nkrumah avec famille et amis',
    ],
    es: [
      'Visitar el Mausoleo y Parque Conmemorativo Kwame Nkrumah en Accra',
      'Asistir a conferencias conmemorativas en su comunidad',
      'Leer sobre las contribuciones de Nkrumah al panafricanismo',
      'Ver documentales sobre el movimiento independentista de Ghana',
      'Discutir el legado de Nkrumah con familia y amigos',
    ],
  },

  relatedHolidays: ['gh_independence-day', 'gh_founders-day'],

  seo: {
    en: {
      titleTemplate: 'Kwame Nkrumah Memorial Day {year} \u2014 Countdown & History',
      descriptionTemplate: 'When is Kwame Nkrumah Memorial Day {year}? Live countdown to September 21, history, and celebration guide.',
      keywords: ['Kwame Nkrumah Day', 'September 21 Ghana', 'Nkrumah Memorial', 'Ghana public holiday', 'pan-Africanism'],
    },
    fr: {
      titleTemplate: 'Jour comm\u00e9moratif de Kwame Nkrumah {year} \u2014 Compte \u00e0 rebours et histoire',
      descriptionTemplate: 'Quand est le Jour comm\u00e9moratif de Kwame Nkrumah {year} ? Compte \u00e0 rebours en direct jusqu\'au 21 septembre.',
      keywords: ['Jour Kwame Nkrumah', '21 septembre Ghana', 'M\u00e9morial Nkrumah', 'jour f\u00e9ri\u00e9 Ghana', 'panafricanisme'],
    },
    es: {
      titleTemplate: 'D\u00eda Conmemorativo de Kwame Nkrumah {year} \u2014 Cuenta regresiva e historia',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda Conmemorativo de Kwame Nkrumah {year}? Cuenta regresiva en vivo hasta el 21 de septiembre.',
      keywords: ['D\u00eda Kwame Nkrumah', '21 de septiembre Ghana', 'Memorial Nkrumah', 'd\u00eda festivo Ghana', 'panafricanismo'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Kwame Nkrumah Memorial Day {year}?',
        fr: 'Quand est le Jour comm\u00e9moratif de Kwame Nkrumah {year} ?',
        es: '\u00bfCu\u00e1ndo es el D\u00eda Conmemorativo de Kwame Nkrumah {year}?',
      },
      answer: {
        en: 'Kwame Nkrumah Memorial Day {year} is on {date} ({dayOfWeek}). It is always celebrated on September 21, Nkrumah\'s birthday.',
        fr: 'Le Jour comm\u00e9moratif de Kwame Nkrumah {year} est le {date} ({dayOfWeek}). Il est toujours c\u00e9l\u00e9br\u00e9 le 21 septembre, anniversaire de Nkrumah.',
        es: 'El D\u00eda Conmemorativo de Kwame Nkrumah {year} es el {date} ({dayOfWeek}). Siempre se celebra el 21 de septiembre, cumplea\u00f1os de Nkrumah.',
      },
    },
    {
      question: {
        en: 'Who was Kwame Nkrumah?',
        fr: 'Qui \u00e9tait Kwame Nkrumah ?',
        es: '\u00bfQui\u00e9n fue Kwame Nkrumah?',
      },
      answer: {
        en: 'Kwame Nkrumah was the leader of Ghana\'s independence movement and the country\'s first prime minister and president. He was a pan-Africanist visionary who advocated for African unity and played a key role in founding the Organisation of African Unity.',
        fr: "Kwame Nkrumah \u00e9tait le leader du mouvement d'ind\u00e9pendance du Ghana et le premier ministre et premier pr\u00e9sident du pays. Il \u00e9tait un panafricaniste visionnaire qui a jou\u00e9 un r\u00f4le cl\u00e9 dans la fondation de l'Organisation de l'Unit\u00e9 Africaine.",
        es: 'Kwame Nkrumah fue el l\u00edder del movimiento independentista de Ghana y el primer ministro y primer presidente del pa\u00eds. Fue un panafricanista visionario que desempe\u00f1\u00f3 un papel clave en la fundaci\u00f3n de la Organizaci\u00f3n para la Unidad Africana.',
      },
    },
    {
      question: {
        en: 'Where is the Kwame Nkrumah Mausoleum?',
        fr: 'O\u00f9 se trouve le Mausol\u00e9e Kwame Nkrumah ?',
        es: '\u00bfD\u00f3nde est\u00e1 el Mausoleo Kwame Nkrumah?',
      },
      answer: {
        en: 'The Kwame Nkrumah Mausoleum is located in the Kwame Nkrumah Memorial Park in Accra, Ghana. The park also houses a museum dedicated to his life and a statue of Nkrumah.',
        fr: "Le Mausol\u00e9e Kwame Nkrumah est situ\u00e9 dans le Parc comm\u00e9moratif Kwame Nkrumah \u00e0 Accra, au Ghana. Le parc abrite \u00e9galement un mus\u00e9e d\u00e9di\u00e9 \u00e0 sa vie et une statue de Nkrumah.",
        es: 'El Mausoleo Kwame Nkrumah se encuentra en el Parque Conmemorativo Kwame Nkrumah en Accra, Ghana. El parque tambi\u00e9n alberga un museo dedicado a su vida y una estatua de Nkrumah.',
      },
    },
    {
      question: {
        en: 'Is Kwame Nkrumah Memorial Day a public holiday?',
        fr: 'Le Jour comm\u00e9moratif de Kwame Nkrumah est-il un jour f\u00e9ri\u00e9 ?',
        es: '\u00bfEl D\u00eda Conmemorativo de Kwame Nkrumah es un d\u00eda festivo?',
      },
      answer: {
        en: 'Yes, Kwame Nkrumah Memorial Day is an official public holiday in Ghana. Schools, government offices, and banks are closed.',
        fr: 'Oui, le Jour comm\u00e9moratif de Kwame Nkrumah est un jour f\u00e9ri\u00e9 officiel au Ghana. Les \u00e9coles, les bureaux gouvernementaux et les banques sont ferm\u00e9s.',
        es: 'S\u00ed, el D\u00eda Conmemorativo de Kwame Nkrumah es un d\u00eda festivo oficial en Ghana. Las escuelas, oficinas gubernamentales y bancos est\u00e1n cerrados.',
      },
    },
  ],

  colorTheme: 'gold-green',
  icon: '\u2b50',
};

// ---------------------------------------------------------------------------
// Farmers' Day — 1st Friday of December
// ---------------------------------------------------------------------------

const farmersDay: HolidayData = {
  id: 'gh_farmers-day',
  countryCode: 'gh',
  slugs: { en: 'farmers-day', fr: 'jour-des-agriculteurs', es: 'dia-de-los-agricultores' },
  names: { en: "Farmers' Day", fr: 'Jour des Agriculteurs', es: 'D\u00eda de los Agricultores' },

  dateType: 'calculated',
  calculateDate: (year: number) => nthWeekday(year, 12, 5, 1),

  descriptions: {
    en: "Farmers' Day, celebrated on the first Friday of December, honors the vital role of agriculture in Ghana's economy and culture. Outstanding farmers from across the country receive national awards during this unique Ghanaian holiday.",
    fr: "Le Jour des Agriculteurs, c\u00e9l\u00e9br\u00e9 le premier vendredi de d\u00e9cembre, honore le r\u00f4le vital de l'agriculture dans l'\u00e9conomie et la culture du Ghana. Des agriculteurs exceptionnels de tout le pays re\u00e7oivent des prix nationaux lors de cette f\u00eate ghan\u00e9enne unique.",
    es: "El D\u00eda de los Agricultores, celebrado el primer viernes de diciembre, honra el papel vital de la agricultura en la econom\u00eda y la cultura de Ghana. Agricultores destacados de todo el pa\u00eds reciben premios nacionales durante esta fiesta \u00fanica ghanesa.",
  },

  history: {
    en: "Farmers' Day was established in 1985 to recognize and celebrate the contributions of farmers and fishermen to Ghana's economy. Agriculture has historically been the backbone of Ghana's economy, employing a significant portion of the population.\n\nThe holiday was created during a period when Ghana was working to boost agricultural productivity and food security. The government recognized that honoring farmers would encourage more people to take up farming and motivate existing farmers to increase their output.\n\nEach year, the national celebration is held in a different region of Ghana, rotating to highlight the agricultural contributions of various parts of the country. The event features awards for the National Best Farmer, who receives prizes including farming equipment, housing, and cash.",
    fr: "Le Jour des Agriculteurs a \u00e9t\u00e9 \u00e9tabli en 1985 pour reconna\u00eetre et c\u00e9l\u00e9brer les contributions des agriculteurs et des p\u00eacheurs \u00e0 l'\u00e9conomie du Ghana. L'agriculture a historiquement \u00e9t\u00e9 le pilier de l'\u00e9conomie ghan\u00e9enne, employant une part importante de la population.\n\nLe jour f\u00e9ri\u00e9 a \u00e9t\u00e9 cr\u00e9\u00e9 \u00e0 une \u00e9poque o\u00f9 le Ghana travaillait \u00e0 stimuler la productivit\u00e9 agricole et la s\u00e9curit\u00e9 alimentaire. Le gouvernement a reconnu qu'honorer les agriculteurs encouragerait davantage de personnes \u00e0 se tourner vers l'agriculture.\n\nChaque ann\u00e9e, la c\u00e9l\u00e9bration nationale se tient dans une r\u00e9gion diff\u00e9rente du Ghana, en rotation pour mettre en valeur les contributions agricoles des diff\u00e9rentes parties du pays. L'\u00e9v\u00e9nement comprend des prix pour le Meilleur Agriculteur National, qui re\u00e7oit des r\u00e9compenses incluant du mat\u00e9riel agricole, un logement et de l'argent.",
    es: "El D\u00eda de los Agricultores fue establecido en 1985 para reconocer y celebrar las contribuciones de los agricultores y pescadores a la econom\u00eda de Ghana. La agricultura ha sido hist\u00f3ricamente la columna vertebral de la econom\u00eda ghanesa, empleando a una porci\u00f3n significativa de la poblaci\u00f3n.\n\nEl d\u00eda festivo fue creado durante un per\u00edodo en que Ghana trabajaba para impulsar la productividad agr\u00edcola y la seguridad alimentaria. El gobierno reconoci\u00f3 que honrar a los agricultores alentar\u00eda a m\u00e1s personas a dedicarse a la agricultura.\n\nCada a\u00f1o, la celebraci\u00f3n nacional se realiza en una regi\u00f3n diferente de Ghana, rotando para destacar las contribuciones agr\u00edcolas de las distintas partes del pa\u00eds. El evento incluye premios para el Mejor Agricultor Nacional, quien recibe premios que incluyen equipo agr\u00edcola, vivienda y dinero en efectivo.",
  },

  traditions: {
    en: [
      'National Best Farmer awards ceremony with prizes including houses and farming equipment',
      'Regional and district-level farmer competitions',
      'Agricultural exhibitions and trade fairs',
      'Presidential speeches honoring farmers\' contributions',
      'Cultural performances and traditional dances',
      'Community feasts featuring locally grown food',
      'Educational workshops on modern farming techniques',
    ],
    fr: [
      'C\u00e9r\u00e9monie de remise des prix du Meilleur Agriculteur National avec des prix incluant maisons et \u00e9quipements agricoles',
      'Comp\u00e9titions d\'agriculteurs aux niveaux r\u00e9gional et de district',
      'Expositions agricoles et foires commerciales',
      'Discours pr\u00e9sidentiels honorant les contributions des agriculteurs',
      'Spectacles culturels et danses traditionnelles',
      'Festins communautaires avec des aliments locaux',
      'Ateliers \u00e9ducatifs sur les techniques agricoles modernes',
    ],
    es: [
      'Ceremonia de premios al Mejor Agricultor Nacional con premios que incluyen casas y equipos agr\u00edcolas',
      'Competiciones de agricultores a nivel regional y distrital',
      'Exposiciones agr\u00edcolas y ferias comerciales',
      'Discursos presidenciales honrando las contribuciones de los agricultores',
      'Espect\u00e1culos culturales y danzas tradicionales',
      'Banquetes comunitarios con alimentos cultivados localmente',
      'Talleres educativos sobre t\u00e9cnicas agr\u00edcolas modernas',
    ],
  },

  funFacts: {
    en: [
      "Ghana is the world's second-largest producer of cocoa, and many Farmers' Day awards go to cocoa farmers.",
      'The National Best Farmer typically receives a fully furnished house, farming equipment, and cash prizes.',
      "Farmers' Day is unique to Ghana \u2014 no other country celebrates a national farmers' holiday quite like this.",
      'The celebration rotates to a different regional capital each year to showcase local agricultural achievements.',
      'Past National Best Farmers have become celebrities and role models in Ghanaian society.',
    ],
    fr: [
      'Le Ghana est le deuxi\u00e8me plus grand producteur mondial de cacao, et de nombreux prix du Jour des Agriculteurs vont aux cultivateurs de cacao.',
      'Le Meilleur Agriculteur National re\u00e7oit g\u00e9n\u00e9ralement une maison enti\u00e8rement meubl\u00e9e, du mat\u00e9riel agricole et des prix en esp\u00e8ces.',
      'Le Jour des Agriculteurs est unique au Ghana \u2014 aucun autre pays ne c\u00e9l\u00e8bre une f\u00eate nationale des agriculteurs de cette mani\u00e8re.',
      'La c\u00e9l\u00e9bration tourne vers une capitale r\u00e9gionale diff\u00e9rente chaque ann\u00e9e pour mettre en valeur les r\u00e9alisations agricoles locales.',
      'Les anciens Meilleurs Agriculteurs Nationaux sont devenus des c\u00e9l\u00e9brit\u00e9s et des mod\u00e8les dans la soci\u00e9t\u00e9 ghan\u00e9enne.',
    ],
    es: [
      'Ghana es el segundo mayor productor mundial de cacao, y muchos premios del D\u00eda de los Agricultores van a los cultivadores de cacao.',
      'El Mejor Agricultor Nacional generalmente recibe una casa completamente amueblada, equipo agr\u00edcola y premios en efectivo.',
      'El D\u00eda de los Agricultores es \u00fanico de Ghana: ning\u00fan otro pa\u00eds celebra una fiesta nacional de los agricultores de esta manera.',
      'La celebraci\u00f3n rota a una capital regional diferente cada a\u00f1o para mostrar los logros agr\u00edcolas locales.',
      'Los anteriores Mejores Agricultores Nacionales se han convertido en celebridades y modelos a seguir en la sociedad ghanesa.',
    ],
  },

  planningChecklist: {
    en: [
      'Check which region is hosting the national celebration this year',
      'Attend local agricultural exhibitions and trade fairs',
      'Support local farmers by buying fresh produce at markets',
      'Learn about Ghana\'s agricultural heritage and cocoa industry',
      'Follow the National Best Farmer awards ceremony on television',
    ],
    fr: [
      'V\u00e9rifier quelle r\u00e9gion accueille la c\u00e9l\u00e9bration nationale cette ann\u00e9e',
      'Assister aux expositions agricoles et foires commerciales locales',
      'Soutenir les agriculteurs locaux en achetant des produits frais au march\u00e9',
      'Se renseigner sur le patrimoine agricole et l\'industrie du cacao du Ghana',
      'Suivre la c\u00e9r\u00e9monie de remise des prix du Meilleur Agriculteur National \u00e0 la t\u00e9l\u00e9vision',
    ],
    es: [
      'Verificar qu\u00e9 regi\u00f3n alberga la celebraci\u00f3n nacional este a\u00f1o',
      'Asistir a exposiciones agr\u00edcolas y ferias comerciales locales',
      'Apoyar a los agricultores locales comprando productos frescos en los mercados',
      'Aprender sobre el patrimonio agr\u00edcola y la industria del cacao de Ghana',
      'Seguir la ceremonia de premios del Mejor Agricultor Nacional por televisi\u00f3n',
    ],
  },

  relatedHolidays: ['gh_christmas', 'gh_independence-day'],

  seo: {
    en: {
      titleTemplate: "Ghana Farmers' Day {year} \u2014 Countdown & Guide",
      descriptionTemplate: "When is Farmers' Day {year} in Ghana? Live countdown to the first Friday of December, awards, and celebration guide.",
      keywords: ["Ghana Farmers' Day", 'National Best Farmer Ghana', 'Ghana agriculture holiday', "Farmers' Day date", 'Ghana cocoa farmers'],
    },
    fr: {
      titleTemplate: 'Jour des Agriculteurs du Ghana {year} \u2014 Compte \u00e0 rebours et guide',
      descriptionTemplate: 'Quand est le Jour des Agriculteurs {year} au Ghana ? Compte \u00e0 rebours en direct, prix et guide de c\u00e9l\u00e9bration.',
      keywords: ['Jour des Agriculteurs Ghana', 'Meilleur Agriculteur Ghana', 'f\u00eate agriculture Ghana', 'date Jour Agriculteurs', 'cacao Ghana'],
    },
    es: {
      titleTemplate: 'D\u00eda de los Agricultores de Ghana {year} \u2014 Cuenta regresiva y gu\u00eda',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda de los Agricultores {year} en Ghana? Cuenta regresiva en vivo, premios y gu\u00eda de celebraci\u00f3n.',
      keywords: ['D\u00eda de los Agricultores Ghana', 'Mejor Agricultor Ghana', 'fiesta agricultura Ghana', 'fecha D\u00eda Agricultores', 'cacao Ghana'],
    },
  },

  faq: [
    {
      question: {
        en: "When is Farmers' Day {year} in Ghana?",
        fr: 'Quand est le Jour des Agriculteurs {year} au Ghana ?',
        es: '\u00bfCu\u00e1ndo es el D\u00eda de los Agricultores {year} en Ghana?',
      },
      answer: {
        en: "Farmers' Day {year} in Ghana falls on {date} ({dayOfWeek}). It is always the first Friday of December.",
        fr: 'Le Jour des Agriculteurs {year} au Ghana tombe le {date} ({dayOfWeek}). C\'est toujours le premier vendredi de d\u00e9cembre.',
        es: 'El D\u00eda de los Agricultores {year} en Ghana cae el {date} ({dayOfWeek}). Siempre es el primer viernes de diciembre.',
      },
    },
    {
      question: {
        en: 'What is the National Best Farmer award?',
        fr: 'Qu\'est-ce que le prix du Meilleur Agriculteur National ?',
        es: '\u00bfQu\u00e9 es el premio al Mejor Agricultor Nacional?',
      },
      answer: {
        en: 'The National Best Farmer award is Ghana\'s highest agricultural honor, given annually on Farmers\' Day. The winner receives prizes including a fully furnished house, farming equipment, and cash, becoming a national celebrity.',
        fr: 'Le prix du Meilleur Agriculteur National est la plus haute distinction agricole du Ghana, d\u00e9cern\u00e9e chaque ann\u00e9e le Jour des Agriculteurs. Le gagnant re\u00e7oit des prix comprenant une maison meubl\u00e9e, du mat\u00e9riel agricole et de l\'argent.',
        es: 'El premio al Mejor Agricultor Nacional es la m\u00e1s alta distinci\u00f3n agr\u00edcola de Ghana, otorgada anualmente en el D\u00eda de los Agricultores. El ganador recibe premios que incluyen una casa amueblada, equipo agr\u00edcola y dinero en efectivo.',
      },
    },
    {
      question: {
        en: "Why does Ghana celebrate Farmers' Day?",
        fr: 'Pourquoi le Ghana c\u00e9l\u00e8bre-t-il le Jour des Agriculteurs ?',
        es: '\u00bfPor qu\u00e9 Ghana celebra el D\u00eda de los Agricultores?',
      },
      answer: {
        en: "Ghana celebrates Farmers' Day to honor the vital role agriculture plays in the nation's economy and food security. It was established in 1985 to motivate farmers and recognize their contributions to national development.",
        fr: "Le Ghana c\u00e9l\u00e8bre le Jour des Agriculteurs pour honorer le r\u00f4le vital que joue l'agriculture dans l'\u00e9conomie et la s\u00e9curit\u00e9 alimentaire du pays. Il a \u00e9t\u00e9 \u00e9tabli en 1985 pour motiver les agriculteurs et reconna\u00eetre leurs contributions.",
        es: "Ghana celebra el D\u00eda de los Agricultores para honrar el papel vital que juega la agricultura en la econom\u00eda y la seguridad alimentaria del pa\u00eds. Fue establecido en 1985 para motivar a los agricultores y reconocer sus contribuciones.",
      },
    },
    {
      question: {
        en: "Is Farmers' Day a public holiday in Ghana?",
        fr: 'Le Jour des Agriculteurs est-il un jour f\u00e9ri\u00e9 au Ghana ?',
        es: '\u00bfEl D\u00eda de los Agricultores es un d\u00eda festivo en Ghana?',
      },
      answer: {
        en: "Yes, Farmers' Day is an official public holiday in Ghana. It is one of the most celebrated national holidays and the only one dedicated specifically to agriculture.",
        fr: "Oui, le Jour des Agriculteurs est un jour f\u00e9ri\u00e9 officiel au Ghana. C'est l'une des f\u00eates nationales les plus c\u00e9l\u00e9br\u00e9es et la seule d\u00e9di\u00e9e sp\u00e9cifiquement \u00e0 l'agriculture.",
        es: "S\u00ed, el D\u00eda de los Agricultores es un d\u00eda festivo oficial en Ghana. Es una de las fiestas nacionales m\u00e1s celebradas y la \u00fanica dedicada espec\u00edficamente a la agricultura.",
      },
    },
  ],

  colorTheme: 'green-brown',
  icon: '\ud83c\udf3e',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'gh_christmas',
  countryCode: 'gh',
  slugs: { en: 'christmas-day', fr: 'jour-de-noel', es: 'dia-de-navidad' },
  names: { en: 'Christmas Day', fr: 'Jour de No\u00ebl', es: 'D\u00eda de Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: 'Christmas Day on December 25 is one of the most widely celebrated holidays in Ghana. Ghanaians attend church services, enjoy festive meals featuring jollof rice and fufu, and gather with family and friends for celebrations.',
    fr: 'Le jour de No\u00ebl, le 25 d\u00e9cembre, est l\'une des f\u00eates les plus c\u00e9l\u00e9br\u00e9es au Ghana. Les Ghan\u00e9ens assistent \u00e0 des services religieux, savourent des repas festifs avec du riz jollof et du fufu, et se r\u00e9unissent en famille et entre amis.',
    es: 'El d\u00eda de Navidad, el 25 de diciembre, es una de las fiestas m\u00e1s celebradas en Ghana. Los ghaneses asisten a servicios religiosos, disfrutan de comidas festivas con arroz jollof y fufu, y se re\u00fanen con familiares y amigos.',
  },

  history: {
    en: "Christianity was introduced to Ghana by European missionaries beginning in the 15th century, and Christmas has been celebrated since colonial times. Today, approximately 71% of Ghana's population identifies as Christian, making Christmas one of the most important holidays in the country.\n\nGhanaian Christmas traditions blend Western customs with local culture. While Christmas trees and gift-giving are common in urban areas, traditional Ghanaian food and community celebrations remain central to the holiday.\n\nThe festive season in Ghana typically begins in early December, with markets bustling with shoppers, churches organizing carol services, and families preparing for the big day. Many Ghanaians living abroad return home for Christmas, making it a major travel period.",
    fr: "Le christianisme a \u00e9t\u00e9 introduit au Ghana par les missionnaires europ\u00e9ens \u00e0 partir du XVe si\u00e8cle, et No\u00ebl est c\u00e9l\u00e9br\u00e9 depuis l'\u00e9poque coloniale. Aujourd'hui, environ 71% de la population du Ghana s'identifie comme chr\u00e9tienne, faisant de No\u00ebl l'une des f\u00eates les plus importantes du pays.\n\nLes traditions de No\u00ebl ghan\u00e9ennes m\u00ealent les coutumes occidentales \u00e0 la culture locale. Si les sapins de No\u00ebl et les cadeaux sont courants en zone urbaine, la nourriture traditionnelle ghan\u00e9enne et les c\u00e9l\u00e9brations communautaires restent au c\u0153ur de la f\u00eate.\n\nLa saison festive au Ghana commence g\u00e9n\u00e9ralement d\u00e9but d\u00e9cembre, avec des march\u00e9s anim\u00e9s, des \u00e9glises organisant des chants de No\u00ebl et des familles se pr\u00e9parant pour le grand jour. De nombreux Ghan\u00e9ens vivant \u00e0 l'\u00e9tranger rentrent pour No\u00ebl.",
    es: "El cristianismo fue introducido en Ghana por misioneros europeos a partir del siglo XV, y la Navidad se ha celebrado desde la \u00e9poca colonial. Hoy en d\u00eda, aproximadamente el 71% de la poblaci\u00f3n de Ghana se identifica como cristiana, lo que convierte a la Navidad en una de las fiestas m\u00e1s importantes del pa\u00eds.\n\nLas tradiciones navide\u00f1as ghanesas mezclan costumbres occidentales con la cultura local. Aunque los \u00e1rboles de Navidad y los regalos son comunes en \u00e1reas urbanas, la comida tradicional ghanesa y las celebraciones comunitarias siguen siendo centrales.\n\nLa temporada festiva en Ghana generalmente comienza a principios de diciembre, con mercados llenos de compradores, iglesias organizando villancicos y familias prepar\u00e1ndose para el gran d\u00eda. Muchos ghaneses que viven en el extranjero regresan a casa para Navidad.",
  },

  traditions: {
    en: [
      'Attending church services on Christmas morning',
      'Preparing and sharing jollof rice, fufu, and other Ghanaian dishes',
      'Family gatherings and reunions, especially in hometowns',
      'Children performing carol singing in neighborhoods',
      'Decorating homes with lights and festive ornaments',
      'Exchanging gifts with family and friends',
      'Community dances and parties on Christmas Eve and Christmas Day',
    ],
    fr: [
      'Assister aux services religieux le matin de No\u00ebl',
      'Pr\u00e9parer et partager du riz jollof, du fufu et d\'autres plats ghan\u00e9ens',
      'R\u00e9unions familiales, surtout dans les villes d\'origine',
      'Enfants chantant des chants de No\u00ebl dans les quartiers',
      'D\u00e9corer les maisons avec des lumi\u00e8res et des ornements festifs',
      '\u00c9changer des cadeaux avec la famille et les amis',
      'Danses communautaires et f\u00eates la veille et le jour de No\u00ebl',
    ],
    es: [
      'Asistir a servicios religiosos en la ma\u00f1ana de Navidad',
      'Preparar y compartir arroz jollof, fufu y otros platos ghaneses',
      'Reuniones familiares, especialmente en las ciudades de origen',
      'Ni\u00f1os cantando villancicos por los barrios',
      'Decorar las casas con luces y adornos festivos',
      'Intercambiar regalos con familiares y amigos',
      'Bailes comunitarios y fiestas en Nochebuena y el d\u00eda de Navidad',
    ],
  },

  funFacts: {
    en: [
      'Jollof rice is the centerpiece of Ghanaian Christmas dinner, and Ghana competes with Nigeria in a friendly rivalry over who makes the best version.',
      'Many Ghanaians travel to their hometowns for Christmas, causing significant road traffic across the country.',
      'Christmas in Ghana falls during the dry season, so celebrations often take place outdoors.',
      'Ghanaian churches hold special \"watchnight\" services on Christmas Eve that last until midnight.',
      'Chocolate, made from locally grown cocoa, is a popular Christmas gift in Ghana.',
    ],
    fr: [
      'Le riz jollof est le plat principal du d\u00eener de No\u00ebl ghan\u00e9en, et le Ghana rivalise amicalement avec le Nig\u00e9ria sur la meilleure recette.',
      'De nombreux Ghan\u00e9ens voyagent vers leurs villes d\'origine pour No\u00ebl, causant un trafic routier important.',
      'No\u00ebl au Ghana tombe pendant la saison s\u00e8che, donc les c\u00e9l\u00e9brations se d\u00e9roulent souvent en plein air.',
      'Les \u00e9glises ghan\u00e9ennes organisent des services sp\u00e9ciaux \u00ab watchnight \u00bb la veille de No\u00ebl qui durent jusqu\'\u00e0 minuit.',
      'Le chocolat, fabriqu\u00e9 \u00e0 partir de cacao cultiv\u00e9 localement, est un cadeau de No\u00ebl populaire au Ghana.',
    ],
    es: [
      'El arroz jollof es el plato principal de la cena navide\u00f1a ghanesa, y Ghana compite amistosamente con Nigeria sobre qui\u00e9n hace la mejor versi\u00f3n.',
      'Muchos ghaneses viajan a sus ciudades de origen para Navidad, causando un tr\u00e1fico significativo en todo el pa\u00eds.',
      'La Navidad en Ghana cae durante la estaci\u00f3n seca, por lo que las celebraciones a menudo se realizan al aire libre.',
      'Las iglesias ghanesas celebran servicios especiales de "noche de vigilia" en Nochebuena que duran hasta medianoche.',
      'El chocolate, hecho con cacao cultivado localmente, es un regalo navide\u00f1o popular en Ghana.',
    ],
  },

  planningChecklist: {
    en: [
      'Buy ingredients for jollof rice, fufu, and other festive dishes early',
      'Plan travel to your hometown well in advance to avoid congestion',
      'Attend church services and carol concerts during the season',
      'Purchase gifts for family and friends at local markets',
      'Prepare your home with festive decorations and lights',
    ],
    fr: [
      'Acheter les ingr\u00e9dients pour le riz jollof, le fufu et d\'autres plats festifs t\u00f4t',
      'Planifier le voyage vers votre ville d\'origine \u00e0 l\'avance pour \u00e9viter la congestion',
      'Assister aux services religieux et concerts de chants de No\u00ebl',
      'Acheter des cadeaux pour la famille et les amis aux march\u00e9s locaux',
      'Pr\u00e9parer votre maison avec des d\u00e9corations et des lumi\u00e8res festives',
    ],
    es: [
      'Comprar ingredientes para arroz jollof, fufu y otros platos festivos con anticipaci\u00f3n',
      'Planificar el viaje a su ciudad de origen con antelaci\u00f3n para evitar la congesti\u00f3n',
      'Asistir a servicios religiosos y conciertos de villancicos durante la temporada',
      'Comprar regalos para familiares y amigos en los mercados locales',
      'Preparar su hogar con decoraciones y luces festivas',
    ],
  },

  relatedHolidays: ['gh_farmers-day', 'gh_eid-al-fitr'],

  seo: {
    en: {
      titleTemplate: 'Christmas Day {year} Ghana \u2014 Countdown & Traditions',
      descriptionTemplate: 'When is Christmas {year} in Ghana? Live countdown to December 25, Ghanaian Christmas traditions, jollof rice, and celebration guide.',
      keywords: ['Christmas Ghana', 'Ghana Christmas traditions', 'jollof rice Christmas', 'Christmas countdown Ghana', 'December 25 Ghana'],
    },
    fr: {
      titleTemplate: 'Jour de No\u00ebl {year} Ghana \u2014 Compte \u00e0 rebours et traditions',
      descriptionTemplate: 'Quand est No\u00ebl {year} au Ghana ? Compte \u00e0 rebours en direct jusqu\'au 25 d\u00e9cembre, traditions et guide de c\u00e9l\u00e9bration.',
      keywords: ['No\u00ebl Ghana', 'traditions No\u00ebl Ghana', 'riz jollof No\u00ebl', 'compte \u00e0 rebours No\u00ebl Ghana', '25 d\u00e9cembre Ghana'],
    },
    es: {
      titleTemplate: 'D\u00eda de Navidad {year} Ghana \u2014 Cuenta regresiva y tradiciones',
      descriptionTemplate: '\u00bfCu\u00e1ndo es Navidad {year} en Ghana? Cuenta regresiva en vivo hasta el 25 de diciembre, tradiciones y gu\u00eda de celebraci\u00f3n.',
      keywords: ['Navidad Ghana', 'tradiciones Navidad Ghana', 'arroz jollof Navidad', 'cuenta regresiva Navidad Ghana', '25 de diciembre Ghana'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Christmas Day {year} in Ghana?',
        fr: 'Quand est le jour de No\u00ebl {year} au Ghana ?',
        es: '\u00bfCu\u00e1ndo es el d\u00eda de Navidad {year} en Ghana?',
      },
      answer: {
        en: 'Christmas Day {year} in Ghana is on {date} ({dayOfWeek}). It is always celebrated on December 25.',
        fr: 'Le jour de No\u00ebl {year} au Ghana est le {date} ({dayOfWeek}). Il est toujours c\u00e9l\u00e9br\u00e9 le 25 d\u00e9cembre.',
        es: 'El d\u00eda de Navidad {year} en Ghana es el {date} ({dayOfWeek}). Siempre se celebra el 25 de diciembre.',
      },
    },
    {
      question: {
        en: 'What do Ghanaians eat on Christmas?',
        fr: 'Que mangent les Ghan\u00e9ens \u00e0 No\u00ebl ?',
        es: '\u00bfQu\u00e9 comen los ghaneses en Navidad?',
      },
      answer: {
        en: 'Ghanaian Christmas meals typically feature jollof rice, fufu with soup, grilled chicken or goat, and fried rice. Chocolate made from Ghanaian cocoa is also enjoyed during the festive season.',
        fr: 'Les repas de No\u00ebl ghan\u00e9ens comprennent g\u00e9n\u00e9ralement du riz jollof, du fufu avec de la soupe, du poulet ou de la ch\u00e8vre grill\u00e9, et du riz frit. Le chocolat fait \u00e0 partir de cacao ghan\u00e9en est \u00e9galement appr\u00e9ci\u00e9.',
        es: 'Las comidas navide\u00f1as ghanesas generalmente incluyen arroz jollof, fufu con sopa, pollo o cabra a la parrilla, y arroz frito. El chocolate hecho con cacao ghan\u00e9s tambi\u00e9n se disfruta durante la temporada festiva.',
      },
    },
    {
      question: {
        en: 'How is Christmas celebrated in Ghana?',
        fr: 'Comment No\u00ebl est-il c\u00e9l\u00e9br\u00e9 au Ghana ?',
        es: '\u00bfC\u00f3mo se celebra la Navidad en Ghana?',
      },
      answer: {
        en: 'Ghanaians celebrate Christmas with church services, family gatherings, festive meals, carol singing, and community dances. Many return to their hometowns for celebrations. The festivities often continue outdoors in the warm December weather.',
        fr: 'Les Ghan\u00e9ens c\u00e9l\u00e8brent No\u00ebl avec des services religieux, des r\u00e9unions familiales, des repas festifs, des chants de No\u00ebl et des danses communautaires. Beaucoup retournent dans leurs villes d\'origine pour les festivit\u00e9s.',
        es: 'Los ghaneses celebran la Navidad con servicios religiosos, reuniones familiares, comidas festivas, villancicos y bailes comunitarios. Muchos regresan a sus ciudades de origen para las celebraciones.',
      },
    },
    {
      question: {
        en: 'Is Christmas a public holiday in Ghana?',
        fr: 'No\u00ebl est-il un jour f\u00e9ri\u00e9 au Ghana ?',
        es: '\u00bfLa Navidad es un d\u00eda festivo en Ghana?',
      },
      answer: {
        en: 'Yes, Christmas Day is an official public holiday in Ghana. December 26 (Boxing Day) is also a public holiday, giving Ghanaians a two-day holiday period.',
        fr: 'Oui, le jour de No\u00ebl est un jour f\u00e9ri\u00e9 officiel au Ghana. Le 26 d\u00e9cembre (Boxing Day) est \u00e9galement un jour f\u00e9ri\u00e9, offrant aux Ghan\u00e9ens une p\u00e9riode de deux jours f\u00e9ri\u00e9s.',
        es: 'S\u00ed, el d\u00eda de Navidad es un d\u00eda festivo oficial en Ghana. El 26 de diciembre (Boxing Day) tambi\u00e9n es un d\u00eda festivo, dando a los ghaneses un per\u00edodo de dos d\u00edas festivos.',
      },
    },
  ],

  colorTheme: 'red-green',
  icon: '\ud83c\udf84',
};

// ---------------------------------------------------------------------------
// Eid al-Fitr — Calculated
// ---------------------------------------------------------------------------

const eidAlFitr: HolidayData = {
  id: 'gh_eid-al-fitr',
  countryCode: 'gh',
  slugs: { en: 'eid-al-fitr', fr: 'eid-al-fitr', es: 'eid-al-fitr' },
  names: { en: 'Eid al-Fitr', fr: "A\u00efd el-Fitr", es: 'Eid al-Fitr' },

  dateType: 'calculated',
  calculateDate: getEidAlFitrDate,

  descriptions: {
    en: 'Eid al-Fitr marks the end of Ramadan, the Islamic holy month of fasting. In Ghana, it is celebrated with communal prayers, feasting, acts of charity, and family gatherings by the Muslim community across the country.',
    fr: "L'A\u00efd el-Fitr marque la fin du Ramadan, le mois sacr\u00e9 islamique de je\u00fbne. Au Ghana, il est c\u00e9l\u00e9br\u00e9 avec des pri\u00e8res communautaires, des festins, des actes de charit\u00e9 et des r\u00e9unions familiales par la communaut\u00e9 musulmane \u00e0 travers le pays.",
    es: 'El Eid al-Fitr marca el fin del Ramad\u00e1n, el mes sagrado isl\u00e1mico de ayuno. En Ghana, se celebra con oraciones comunitarias, banquetes, actos de caridad y reuniones familiares por la comunidad musulmana en todo el pa\u00eds.',
  },

  history: {
    en: "Islam has been present in Ghana since at least the 15th century, brought by traders from the Sahel region. Today, approximately 18% of Ghana's population is Muslim, concentrated primarily in the northern regions but with significant communities in Accra, Kumasi, and other cities.\n\nEid al-Fitr, known locally as \"Sallah,\" is one of the two most important Islamic holidays in Ghana. It is a public holiday, reflecting the government's recognition of the country's religious diversity and the importance of Islam in Ghanaian society.\n\nThe celebration brings together communities across religious lines, as it is common for Christian neighbors and friends to join in the festivities, sharing food and extending well-wishes to Muslim families. This interfaith celebration reflects Ghana's reputation for religious tolerance and harmony.",
    fr: "L'islam est pr\u00e9sent au Ghana depuis au moins le XVe si\u00e8cle, apport\u00e9 par les commer\u00e7ants de la r\u00e9gion du Sahel. Aujourd'hui, environ 18% de la population du Ghana est musulmane, concentr\u00e9e principalement dans les r\u00e9gions du nord mais avec des communaut\u00e9s importantes \u00e0 Accra, Kumasi et d'autres villes.\n\nL'A\u00efd el-Fitr, connu localement sous le nom de \u00ab Sallah \u00bb, est l'une des deux f\u00eates islamiques les plus importantes au Ghana. C'est un jour f\u00e9ri\u00e9, refl\u00e9tant la reconnaissance par le gouvernement de la diversit\u00e9 religieuse du pays.\n\nLa c\u00e9l\u00e9bration rassemble les communaut\u00e9s au-del\u00e0 des lignes religieuses, car il est courant que les voisins et amis chr\u00e9tiens se joignent aux festivit\u00e9s. Cette c\u00e9l\u00e9bration interconfessionnelle refl\u00e8te la r\u00e9putation du Ghana en mati\u00e8re de tol\u00e9rance et d'harmonie religieuses.",
    es: "El islam ha estado presente en Ghana desde al menos el siglo XV, tra\u00eddo por comerciantes de la regi\u00f3n del Sahel. Hoy en d\u00eda, aproximadamente el 18% de la poblaci\u00f3n de Ghana es musulmana, concentrada principalmente en las regiones del norte pero con comunidades significativas en Accra, Kumasi y otras ciudades.\n\nEl Eid al-Fitr, conocido localmente como \"Sallah\", es una de las dos fiestas isl\u00e1micas m\u00e1s importantes en Ghana. Es un d\u00eda festivo, lo que refleja el reconocimiento del gobierno de la diversidad religiosa del pa\u00eds.\n\nLa celebraci\u00f3n une a las comunidades m\u00e1s all\u00e1 de las l\u00edneas religiosas, ya que es com\u00fan que vecinos y amigos cristianos se unan a las festividades. Esta celebraci\u00f3n interreligiosa refleja la reputaci\u00f3n de Ghana por su tolerancia y armon\u00eda religiosa.",
  },

  traditions: {
    en: [
      'Communal Eid prayers at open grounds or mosques early in the morning',
      'Wearing new or finest clothes, often traditional Ghanaian attire',
      'Preparing and sharing festive meals with family and neighbors',
      'Giving Zakat al-Fitr (charity) to those in need before the prayers',
      'Visiting family elders and seeking their blessings',
      'Children receiving gifts and money from adults',
      'Interfaith celebrations with Christian neighbors joining the festivities',
    ],
    fr: [
      'Pri\u00e8res communautaires de l\'A\u00efd sur des terrains ouverts ou dans les mosqu\u00e9es t\u00f4t le matin',
      'Porter des v\u00eatements neufs ou les plus beaux, souvent des tenues traditionnelles ghan\u00e9ennes',
      'Pr\u00e9parer et partager des repas festifs avec la famille et les voisins',
      'Donner la Zakat al-Fitr (charit\u00e9) aux n\u00e9cessiteux avant les pri\u00e8res',
      'Rendre visite aux a\u00een\u00e9s de la famille et chercher leurs b\u00e9n\u00e9dictions',
      'Enfants recevant des cadeaux et de l\'argent des adultes',
      'C\u00e9l\u00e9brations interconfessionnelles avec les voisins chr\u00e9tiens se joignant aux festivit\u00e9s',
    ],
    es: [
      'Oraciones comunitarias del Eid en terrenos abiertos o mezquitas temprano en la ma\u00f1ana',
      'Usar ropa nueva o la mejor, a menudo vestimenta tradicional ghanesa',
      'Preparar y compartir comidas festivas con familiares y vecinos',
      'Dar Zakat al-Fitr (caridad) a los necesitados antes de las oraciones',
      'Visitar a los mayores de la familia y buscar sus bendiciones',
      'Ni\u00f1os recibiendo regalos y dinero de los adultos',
      'Celebraciones interreligiosas con vecinos cristianos uni\u00e9ndose a las festividades',
    ],
  },

  funFacts: {
    en: [
      'Eid al-Fitr is locally known as "Sallah" in Ghana, a term also used in other West African countries.',
      'In Ghana, it is common for Christians to visit their Muslim friends and share in the Eid festivities, showcasing the country\'s interfaith harmony.',
      'The Zongo communities in Ghanaian cities are the centers of Eid celebrations, with streets filled with food, music, and dance.',
      'Ghana is one of the few countries where Eid al-Fitr is a public holiday despite Muslims being a minority.',
      'The Chief Imam of Ghana plays a central role in the national Eid celebrations, leading prayers and delivering messages of peace.',
    ],
    fr: [
      'L\'A\u00efd el-Fitr est localement connu sous le nom de \u00ab Sallah \u00bb au Ghana, un terme \u00e9galement utilis\u00e9 dans d\'autres pays ouest-africains.',
      'Au Ghana, il est courant que les chr\u00e9tiens rendent visite \u00e0 leurs amis musulmans et partagent les festivit\u00e9s de l\'A\u00efd, illustrant l\'harmonie interconfessionnelle.',
      'Les communaut\u00e9s Zongo dans les villes ghan\u00e9ennes sont les centres des c\u00e9l\u00e9brations de l\'A\u00efd, avec des rues remplies de nourriture, de musique et de danse.',
      'Le Ghana est l\'un des rares pays o\u00f9 l\'A\u00efd el-Fitr est un jour f\u00e9ri\u00e9 malgr\u00e9 le fait que les musulmans soient une minorit\u00e9.',
      'Le Grand Imam du Ghana joue un r\u00f4le central dans les c\u00e9l\u00e9brations nationales de l\'A\u00efd, dirigeant les pri\u00e8res et d\u00e9livrant des messages de paix.',
    ],
    es: [
      'El Eid al-Fitr es conocido localmente como "Sallah" en Ghana, un t\u00e9rmino tambi\u00e9n usado en otros pa\u00edses de \u00c1frica Occidental.',
      'En Ghana, es com\u00fan que los cristianos visiten a sus amigos musulmanes y compartan las festividades del Eid, mostrando la armon\u00eda interreligiosa del pa\u00eds.',
      'Las comunidades Zongo en las ciudades ghanesas son los centros de las celebraciones del Eid, con calles llenas de comida, m\u00fasica y baile.',
      'Ghana es uno de los pocos pa\u00edses donde el Eid al-Fitr es un d\u00eda festivo a pesar de que los musulmanes son una minor\u00eda.',
      'El Gran Im\u00e1n de Ghana desempe\u00f1a un papel central en las celebraciones nacionales del Eid, dirigiendo las oraciones y entregando mensajes de paz.',
    ],
  },

  planningChecklist: {
    en: [
      'Prepare Zakat al-Fitr charity contributions before the holiday',
      'Buy new clothes or prepare traditional outfits for the celebration',
      'Stock up on food and ingredients for festive meals',
      'Plan visits to family elders and friends',
      'Check the confirmed date, as it depends on moon sighting',
    ],
    fr: [
      'Pr\u00e9parer les contributions charitables de Zakat al-Fitr avant le jour f\u00e9ri\u00e9',
      'Acheter de nouveaux v\u00eatements ou pr\u00e9parer des tenues traditionnelles pour la c\u00e9l\u00e9bration',
      'Faire des provisions de nourriture et d\'ingr\u00e9dients pour les repas festifs',
      'Planifier les visites aux a\u00een\u00e9s de la famille et aux amis',
      'V\u00e9rifier la date confirm\u00e9e, car elle d\u00e9pend de l\'observation de la lune',
    ],
    es: [
      'Preparar las contribuciones caritativas de Zakat al-Fitr antes del d\u00eda festivo',
      'Comprar ropa nueva o preparar atuendos tradicionales para la celebraci\u00f3n',
      'Abastecerse de comida e ingredientes para las comidas festivas',
      'Planificar visitas a los mayores de la familia y amigos',
      'Verificar la fecha confirmada, ya que depende del avistamiento de la luna',
    ],
  },

  relatedHolidays: ['gh_christmas', 'gh_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Eid al-Fitr {year} Ghana \u2014 Date, Countdown & Guide',
      descriptionTemplate: 'When is Eid al-Fitr {year} in Ghana? Live countdown, Sallah traditions, and celebration guide.',
      keywords: ['Eid al-Fitr Ghana', 'Sallah Ghana', 'Eid date Ghana', 'Ramadan Ghana', 'Islamic holidays Ghana'],
    },
    fr: {
      titleTemplate: "A\u00efd el-Fitr {year} Ghana \u2014 Date, compte \u00e0 rebours et guide",
      descriptionTemplate: "Quand est l'A\u00efd el-Fitr {year} au Ghana ? Compte \u00e0 rebours en direct, traditions du Sallah et guide de c\u00e9l\u00e9bration.",
      keywords: ["A\u00efd el-Fitr Ghana", 'Sallah Ghana', "date A\u00efd Ghana", 'Ramadan Ghana', 'f\u00eates islamiques Ghana'],
    },
    es: {
      titleTemplate: 'Eid al-Fitr {year} Ghana \u2014 Fecha, cuenta regresiva y gu\u00eda',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el Eid al-Fitr {year} en Ghana? Cuenta regresiva en vivo, tradiciones del Sallah y gu\u00eda de celebraci\u00f3n.',
      keywords: ['Eid al-Fitr Ghana', 'Sallah Ghana', 'fecha Eid Ghana', 'Ramad\u00e1n Ghana', 'fiestas isl\u00e1micas Ghana'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Eid al-Fitr {year} in Ghana?',
        fr: "Quand est l'A\u00efd el-Fitr {year} au Ghana ?",
        es: '\u00bfCu\u00e1ndo es el Eid al-Fitr {year} en Ghana?',
      },
      answer: {
        en: 'Eid al-Fitr {year} in Ghana is expected on {date} ({dayOfWeek}). The exact date depends on the sighting of the new moon marking the end of Ramadan.',
        fr: "L'A\u00efd el-Fitr {year} au Ghana est pr\u00e9vu le {date} ({dayOfWeek}). La date exacte d\u00e9pend de l'observation du nouveau croissant de lune marquant la fin du Ramadan.",
        es: 'El Eid al-Fitr {year} en Ghana se espera el {date} ({dayOfWeek}). La fecha exacta depende del avistamiento de la luna nueva que marca el fin del Ramad\u00e1n.',
      },
    },
    {
      question: {
        en: 'What is Sallah in Ghana?',
        fr: "Qu'est-ce que le Sallah au Ghana ?",
        es: '\u00bfQu\u00e9 es el Sallah en Ghana?',
      },
      answer: {
        en: '"Sallah" is the local term used in Ghana and other West African countries for Eid celebrations. It refers to both Eid al-Fitr and Eid al-Adha. The term comes from the Arabic word "salat" (prayer).',
        fr: "\u00ab Sallah \u00bb est le terme local utilis\u00e9 au Ghana et dans d'autres pays ouest-africains pour les c\u00e9l\u00e9brations de l'A\u00efd. Il d\u00e9signe \u00e0 la fois l'A\u00efd el-Fitr et l'A\u00efd el-Adha. Le terme vient du mot arabe \u00ab salat \u00bb (pri\u00e8re).",
        es: '"Sallah" es el t\u00e9rmino local utilizado en Ghana y otros pa\u00edses de \u00c1frica Occidental para las celebraciones del Eid. Se refiere tanto al Eid al-Fitr como al Eid al-Adha. El t\u00e9rmino proviene de la palabra \u00e1rabe "salat" (oraci\u00f3n).',
      },
    },
    {
      question: {
        en: 'Is Eid al-Fitr a public holiday in Ghana?',
        fr: "L'A\u00efd el-Fitr est-il un jour f\u00e9ri\u00e9 au Ghana ?",
        es: '\u00bfEl Eid al-Fitr es un d\u00eda festivo en Ghana?',
      },
      answer: {
        en: 'Yes, Eid al-Fitr is an official public holiday in Ghana, reflecting the country\'s commitment to religious diversity and inclusion. Schools, banks, and government offices are closed.',
        fr: "Oui, l'A\u00efd el-Fitr est un jour f\u00e9ri\u00e9 officiel au Ghana, refl\u00e9tant l'engagement du pays envers la diversit\u00e9 religieuse. Les \u00e9coles, les banques et les bureaux gouvernementaux sont ferm\u00e9s.",
        es: 'S\u00ed, el Eid al-Fitr es un d\u00eda festivo oficial en Ghana, lo que refleja el compromiso del pa\u00eds con la diversidad religiosa. Las escuelas, bancos y oficinas gubernamentales est\u00e1n cerrados.',
      },
    },
    {
      question: {
        en: 'Why does the date of Eid al-Fitr change each year?',
        fr: "Pourquoi la date de l'A\u00efd el-Fitr change-t-elle chaque ann\u00e9e ?",
        es: '\u00bfPor qu\u00e9 cambia la fecha del Eid al-Fitr cada a\u00f1o?',
      },
      answer: {
        en: 'Eid al-Fitr follows the Islamic lunar calendar, which is about 11 days shorter than the Gregorian calendar. This means the date shifts earlier by roughly 11 days each year.',
        fr: "L'A\u00efd el-Fitr suit le calendrier lunaire islamique, qui est environ 11 jours plus court que le calendrier gr\u00e9gorien. Cela signifie que la date avance d'environ 11 jours chaque ann\u00e9e.",
        es: 'El Eid al-Fitr sigue el calendario lunar isl\u00e1mico, que es aproximadamente 11 d\u00edas m\u00e1s corto que el calendario gregoriano. Esto significa que la fecha se adelanta aproximadamente 11 d\u00edas cada a\u00f1o.',
      },
    },
  ],

  colorTheme: 'green-gold',
  icon: '\ud83c\udf19',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const ghHolidays: HolidayData[] = [
  independenceDay,
  foundersDay,
  kwameNkrumahDay,
  farmersDay,
  christmas,
  eidAlFitr,
];

export default ghHolidays;
