/**
 * Ireland holidays data.
 */

import type { HolidayData } from '@/lib/types';
import {
  getEasterMonday,
  getJuneBankHolidayIE,
  getOctoberBankHolidayIE,
} from './_shared-dates';

// ---------------------------------------------------------------------------
// St. Patrick's Day — March 17
// ---------------------------------------------------------------------------

const stPatricksDay: HolidayData = {
  id: 'ie_st-patricks-day',
  countryCode: 'ie',
  slugs: { en: 'st-patricks-day', fr: 'saint-patrick', es: 'dia-de-san-patricio' },
  names: { en: "St. Patrick's Day", fr: 'La Saint-Patrick', es: 'El Día de San Patricio' },

  dateType: 'fixed',
  fixedMonth: 3,
  fixedDay: 17,

  descriptions: {
    en: "St. Patrick's Day on March 17 is Ireland's most iconic national holiday, celebrating the patron saint of Ireland. It is a public holiday marked by parades, wearing green, shamrocks, and celebrations of Irish culture worldwide.",
    fr: "La Saint-Patrick, le 17 mars, est la fête nationale la plus emblématique d'Irlande, célébrant le saint patron du pays. C'est un jour férié marqué par des défilés, le port du vert, le trèfle et des célébrations de la culture irlandaise dans le monde entier.",
    es: 'El Día de San Patricio, el 17 de marzo, es la fiesta nacional más emblemática de Irlanda, en honor al santo patrón del país. Es un día festivo marcado por desfiles, vestir de verde, tréboles y celebraciones de la cultura irlandesa en todo el mundo.',
  },

  history: {
    en: "St. Patrick's Day has been observed as a religious feast day since the early 17th century. St. Patrick, who lived in the 5th century, is credited with bringing Christianity to Ireland. He used the three-leafed shamrock to explain the Holy Trinity, which became a symbol of Ireland.\n\nThe day became an official public holiday in Ireland in 1903 through the Bank Holiday (Ireland) Act. Originally a quiet religious observance, it transformed into a major cultural celebration throughout the 20th century. The first St. Patrick's Day parade in Ireland was held in Dublin in 1931.\n\nToday, St. Patrick's Day is celebrated in more countries than any other national festival. Global landmarks from the Sydney Opera House to the Empire State Building are lit up in green, and cities around the world host parades and festivities.",
    fr: "La Saint-Patrick est célébrée comme fête religieuse depuis le début du XVIIe siècle. Saint Patrick, qui vécut au Ve siècle, est reconnu pour avoir apporté le christianisme en Irlande. Il utilisait le trèfle à trois feuilles pour expliquer la Sainte Trinité, devenu depuis un symbole de l'Irlande.\n\nCette journée est devenue un jour férié officiel en Irlande en 1903 grâce au Bank Holiday (Ireland) Act. À l'origine une célébration religieuse discrète, elle s'est transformée en une grande fête culturelle tout au long du XXe siècle. Le premier défilé de la Saint-Patrick en Irlande a eu lieu à Dublin en 1931.\n\nAujourd'hui, la Saint-Patrick est célébrée dans plus de pays que tout autre festival national. Des monuments emblématiques du monde entier, de l'Opéra de Sydney à l'Empire State Building, s'illuminent en vert, et des villes du monde entier organisent des défilés et des festivités.",
    es: "El Día de San Patricio se celebra como festividad religiosa desde principios del siglo XVII. San Patricio, que vivió en el siglo V, es reconocido por haber llevado el cristianismo a Irlanda. Utilizó el trébol de tres hojas para explicar la Santísima Trinidad, que se convirtió en símbolo de Irlanda.\n\nEl día se convirtió en festivo oficial en Irlanda en 1903 mediante el Bank Holiday (Ireland) Act. Originalmente una celebración religiosa discreta, se transformó en una gran fiesta cultural a lo largo del siglo XX. El primer desfile de San Patricio en Irlanda se celebró en Dublín en 1931.\n\nHoy en día, el Día de San Patricio se celebra en más países que cualquier otra fiesta nacional. Monumentos emblemáticos del mundo entero, desde la Ópera de Sídney hasta el Empire State Building, se iluminan de verde, y ciudades de todo el mundo organizan desfiles y festividades.",
  },

  traditions: {
    en: [
      'Wearing green clothing and shamrocks',
      'Attending the St. Patrick\'s Day Parade in Dublin and other cities',
      'Dyeing rivers and fountains green',
      'Enjoying traditional Irish music sessions in pubs',
      'Attending special church services honouring St. Patrick',
      'Eating traditional Irish dishes such as colcannon and Irish stew',
      'Visiting historic sites associated with St. Patrick',
    ],
    fr: [
      'Porter des vêtements verts et des trèfles',
      'Assister au défilé de la Saint-Patrick à Dublin et dans d\'autres villes',
      'Teindre les rivières et fontaines en vert',
      'Profiter de sessions de musique traditionnelle irlandaise dans les pubs',
      'Assister à des offices religieux en l\'honneur de saint Patrick',
      'Déguster des plats traditionnels irlandais comme le colcannon et le ragoût irlandais',
      'Visiter des sites historiques associés à saint Patrick',
    ],
    es: [
      'Vestir ropa verde y llevar tréboles',
      'Asistir al desfile de San Patricio en Dublín y otras ciudades',
      'Teñir ríos y fuentes de verde',
      'Disfrutar de sesiones de música tradicional irlandesa en los pubs',
      'Asistir a oficios religiosos en honor a San Patricio',
      'Comer platos tradicionales irlandeses como el colcannon y el estofado irlandés',
      'Visitar lugares históricos asociados con San Patricio',
    ],
  },

  funFacts: {
    en: [
      'The original colour associated with St. Patrick was blue, not green. Green became dominant in the 19th century.',
      'More than 80 million people worldwide claim Irish ancestry — over 10 times the population of Ireland itself.',
      'Chicago has dyed its river green for St. Patrick\'s Day every year since 1962.',
      'The shortest St. Patrick\'s Day parade in the world takes place in Dripsey, Cork — it runs between the village\'s two pubs.',
      'St. Patrick was not actually Irish — he was born in Roman Britain and was brought to Ireland as a slave.',
    ],
    fr: [
      'La couleur originellement associée à saint Patrick était le bleu, et non le vert. Le vert est devenu dominant au XIXe siècle.',
      'Plus de 80 millions de personnes dans le monde revendiquent une ascendance irlandaise — plus de 10 fois la population de l\'Irlande elle-même.',
      'Chicago teint sa rivière en vert pour la Saint-Patrick chaque année depuis 1962.',
      'Le plus court défilé de la Saint-Patrick au monde a lieu à Dripsey, Cork — il parcourt la distance entre les deux pubs du village.',
      'Saint Patrick n\'était pas réellement irlandais — il est né en Bretagne romaine et a été amené en Irlande comme esclave.',
    ],
    es: [
      'El color original asociado a San Patricio era el azul, no el verde. El verde se impuso en el siglo XIX.',
      'Más de 80 millones de personas en el mundo reclaman ascendencia irlandesa, más de 10 veces la población de Irlanda.',
      'Chicago tiñe su río de verde para San Patricio cada año desde 1962.',
      'El desfile de San Patricio más corto del mundo tiene lugar en Dripsey, Cork: recorre la distancia entre los dos pubs del pueblo.',
      'San Patricio no era en realidad irlandés: nació en la Britania romana y fue llevado a Irlanda como esclavo.',
    ],
  },

  planningChecklist: {
    en: [
      'Get your green outfit and shamrock accessories ready',
      'Book accommodation and travel early if visiting Dublin for the parade',
      'Check local parade routes and schedules in your area',
      'Reserve a table at an Irish pub or restaurant for the celebrations',
      'Plan family-friendly activities for the St. Patrick\'s Festival events',
    ],
    fr: [
      'Préparer votre tenue verte et vos accessoires en forme de trèfle',
      'Réserver hébergement et transport à l\'avance si vous visitez Dublin pour le défilé',
      'Vérifier les itinéraires et horaires des défilés locaux dans votre région',
      'Réserver une table dans un pub ou restaurant irlandais pour les célébrations',
      'Prévoir des activités familiales pour les événements du festival de la Saint-Patrick',
    ],
    es: [
      'Preparar la ropa verde y los accesorios de trébol',
      'Reservar alojamiento y transporte con antelación si visitáis Dublín para el desfile',
      'Consultar las rutas y horarios de los desfiles locales en tu zona',
      'Reservar mesa en un pub o restaurante irlandés para las celebraciones',
      'Planificar actividades familiares para los eventos del festival de San Patricio',
    ],
  },

  relatedHolidays: ['ie_easter-monday', 'ie_christmas'],

  seo: {
    en: {
      titleTemplate: "St. Patrick's Day {year} Ireland — Countdown & Guide",
      descriptionTemplate: "When is St. Patrick's Day {year}? Live countdown to March 17, Irish traditions, parade info, and celebration guide.",
      keywords: ["St. Patrick's Day", "St. Patrick's Day Ireland", "March 17 holiday", "Irish national holiday", "St. Patrick's Day parade"],
    },
    fr: {
      titleTemplate: 'Saint-Patrick {year} Irlande — Compte à rebours et guide',
      descriptionTemplate: 'Quand est la Saint-Patrick {year} ? Compte à rebours, traditions irlandaises, informations sur le défilé et guide de célébration.',
      keywords: ['Saint-Patrick', 'fête de la Saint-Patrick', 'Saint-Patrick Irlande', 'fête irlandaise', '17 mars'],
    },
    es: {
      titleTemplate: 'Día de San Patricio {year} Irlanda — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Día de San Patricio {year}? Cuenta regresiva, tradiciones irlandesas, información del desfile y guía de celebración.',
      keywords: ['Día de San Patricio', 'San Patricio Irlanda', 'fiesta irlandesa', '17 de marzo', 'desfile San Patricio'],
    },
  },

  faq: [
    {
      question: {
        en: "When is St. Patrick's Day {year}?",
        fr: 'Quand est la Saint-Patrick {year} ?',
        es: '¿Cuándo es el Día de San Patricio {year}?',
      },
      answer: {
        en: "St. Patrick's Day {year} is on {date} ({dayOfWeek}). It is always celebrated on March 17.",
        fr: 'La Saint-Patrick {year} tombe le {date} ({dayOfWeek}). Elle est toujours célébrée le 17 mars.',
        es: 'El Día de San Patricio {year} es el {date} ({dayOfWeek}). Siempre se celebra el 17 de marzo.',
      },
    },
    {
      question: {
        en: "Is St. Patrick's Day a public holiday in Ireland?",
        fr: "La Saint-Patrick est-elle un jour férié en Irlande ?",
        es: '¿Es el Día de San Patricio un día festivo en Irlanda?',
      },
      answer: {
        en: "Yes, St. Patrick's Day is a public holiday in Ireland. It has been an official bank holiday since 1903. Most businesses, schools, and government offices are closed.",
        fr: "Oui, la Saint-Patrick est un jour férié en Irlande. C'est un jour férié officiel depuis 1903. La plupart des commerces, écoles et administrations sont fermés.",
        es: 'Sí, el Día de San Patricio es un día festivo en Irlanda. Es un día festivo oficial desde 1903. La mayoría de los negocios, escuelas y oficinas gubernamentales están cerrados.',
      },
    },
    {
      question: {
        en: 'Why do people wear green on St. Patrick\'s Day?',
        fr: 'Pourquoi porte-t-on du vert pour la Saint-Patrick ?',
        es: '¿Por qué se viste de verde en el Día de San Patricio?',
      },
      answer: {
        en: "Green is associated with Ireland itself (the Emerald Isle), Irish nationalism, and the shamrock that St. Patrick used to teach about the Holy Trinity. Wearing green became a symbol of Irish pride, especially among the Irish diaspora.",
        fr: "Le vert est associé à l'Irlande elle-même (l'île d'Émeraude), au nationalisme irlandais et au trèfle que saint Patrick utilisait pour enseigner la Sainte Trinité. Porter du vert est devenu un symbole de fierté irlandaise, surtout au sein de la diaspora.",
        es: 'El verde está asociado con la propia Irlanda (la Isla Esmeralda), el nacionalismo irlandés y el trébol que San Patricio usaba para enseñar la Santísima Trinidad. Vestir de verde se convirtió en un símbolo de orgullo irlandés, especialmente entre la diáspora.',
      },
    },
    {
      question: {
        en: "Where is the biggest St. Patrick's Day parade?",
        fr: 'Où a lieu le plus grand défilé de la Saint-Patrick ?',
        es: '¿Dónde está el desfile de San Patricio más grande?',
      },
      answer: {
        en: "The largest St. Patrick's Day parade is in New York City, which has held one since 1762. In Ireland, the Dublin parade is the centrepiece of a multi-day St. Patrick's Festival attracting hundreds of thousands of spectators.",
        fr: "Le plus grand défilé de la Saint-Patrick a lieu à New York, qui en organise un depuis 1762. En Irlande, le défilé de Dublin est le point fort d'un festival de plusieurs jours qui attire des centaines de milliers de spectateurs.",
        es: 'El desfile de San Patricio más grande es el de Nueva York, que se celebra desde 1762. En Irlanda, el desfile de Dublín es el centro de un festival de varios días que atrae a cientos de miles de espectadores.',
      },
    },
  ],

  colorTheme: 'green-gold',
  icon: '☘️',
};

// ---------------------------------------------------------------------------
// Easter Monday
// ---------------------------------------------------------------------------

const easterMonday: HolidayData = {
  id: 'ie_easter-monday',
  countryCode: 'ie',
  slugs: { en: 'easter-monday', fr: 'lundi-de-paques', es: 'lunes-de-pascua' },
  names: { en: 'Easter Monday', fr: 'Lundi de Pâques', es: 'Lunes de Pascua' },

  dateType: 'calculated',
  calculateDate: getEasterMonday,

  descriptions: {
    en: 'Easter Monday is a public holiday in Ireland, falling the day after Easter Sunday. It holds particular historical significance as the anniversary of the 1916 Easter Rising, which was a pivotal event in the Irish struggle for independence.',
    fr: "Le lundi de Pâques est un jour férié en Irlande, célébré le lendemain du dimanche de Pâques. Il revêt une importance historique particulière en tant qu'anniversaire de l'insurrection de Pâques 1916, événement décisif dans la lutte irlandaise pour l'indépendance.",
    es: 'El Lunes de Pascua es un día festivo en Irlanda, celebrado el día después del Domingo de Pascua. Tiene un significado histórico especial como aniversario del Levantamiento de Pascua de 1916, un evento crucial en la lucha irlandesa por la independencia.',
  },

  history: {
    en: "Easter Monday has been a public holiday in Ireland for over a century. Its significance deepened after the 1916 Easter Rising, when Irish republicans launched an armed insurrection against British rule on Easter Monday, April 24, 1916. The Rising, though militarily unsuccessful, galvanised public support for Irish independence.\n\nThe leaders of the Rising were executed by the British authorities, turning them into martyrs and transforming public opinion. Within six years, the Irish Free State was established in 1922. Today, Easter Monday is commemorated with ceremonies at the GPO (General Post Office) on O'Connell Street in Dublin, the headquarters of the Rising.\n\nBeyond its historical significance, Easter Monday is also enjoyed as a spring holiday, with families taking advantage of the long weekend for outings, festivals, and outdoor activities across Ireland.",
    fr: "Le lundi de Pâques est un jour férié en Irlande depuis plus d'un siècle. Sa signification s'est approfondie après l'insurrection de Pâques 1916, lorsque des républicains irlandais ont lancé une insurrection armée contre la domination britannique le lundi de Pâques, le 24 avril 1916. L'insurrection, bien que militairement infructueuse, a galvanisé le soutien public pour l'indépendance irlandaise.\n\nLes dirigeants de l'insurrection ont été exécutés par les autorités britanniques, faisant d'eux des martyrs et transformant l'opinion publique. En l'espace de six ans, l'État libre d'Irlande a été établi en 1922. Aujourd'hui, le lundi de Pâques est commémoré par des cérémonies au GPO (Bureau de poste central) sur O'Connell Street à Dublin, le quartier général de l'insurrection.\n\nAu-delà de sa signification historique, le lundi de Pâques est aussi apprécié comme jour de congé printanier, les familles profitant du long week-end pour des sorties, des festivals et des activités de plein air à travers l'Irlande.",
    es: "El Lunes de Pascua ha sido un día festivo en Irlanda durante más de un siglo. Su significado se profundizó tras el Levantamiento de Pascua de 1916, cuando republicanos irlandeses lanzaron una insurrección armada contra el dominio británico el Lunes de Pascua, 24 de abril de 1916. El levantamiento, aunque militarmente fallido, galvanizó el apoyo público a la independencia irlandesa.\n\nLos líderes del levantamiento fueron ejecutados por las autoridades británicas, convirtiéndolos en mártires y transformando la opinión pública. En seis años, el Estado Libre Irlandés se estableció en 1922. Hoy, el Lunes de Pascua se conmemora con ceremonias en el GPO (Oficina General de Correos) en O'Connell Street en Dublín, sede del levantamiento.\n\nMás allá de su significado histórico, el Lunes de Pascua también se disfruta como día festivo de primavera, con familias que aprovechan el fin de semana largo para excursiones, festivales y actividades al aire libre en toda Irlanda.",
  },

  traditions: {
    en: [
      'Attending the 1916 Easter Rising commemoration ceremony at the GPO in Dublin',
      'Visiting the Kilmainham Gaol museum and other historical sites',
      'Enjoying spring family outings and countryside walks',
      'Participating in Easter egg hunts and community events',
      'Watching GAA (Gaelic Athletic Association) matches',
      'Attending local festivals and craft fairs',
    ],
    fr: [
      'Assister à la cérémonie de commémoration de l\'insurrection de Pâques 1916 au GPO de Dublin',
      'Visiter le musée de la prison de Kilmainham et d\'autres sites historiques',
      'Profiter de sorties familiales printanières et de promenades à la campagne',
      'Participer à des chasses aux œufs de Pâques et des événements communautaires',
      'Regarder des matchs de la GAA (Association athlétique gaélique)',
      'Assister à des festivals locaux et des foires artisanales',
    ],
    es: [
      'Asistir a la ceremonia de conmemoración del Levantamiento de Pascua de 1916 en el GPO de Dublín',
      'Visitar el museo de la cárcel de Kilmainham y otros sitios históricos',
      'Disfrutar de excursiones familiares primaverales y paseos por el campo',
      'Participar en búsquedas de huevos de Pascua y eventos comunitarios',
      'Ver partidos de la GAA (Asociación Atlética Gaélica)',
      'Asistir a festivales locales y ferias artesanales',
    ],
  },

  funFacts: {
    en: [
      'The 1916 Easter Rising began on Easter Monday because the leaders knew government offices and military barracks would be lightly staffed during the holiday.',
      'The GPO on O\'Connell Street still has bullet holes from the 1916 Rising visible in its pillars.',
      'Ireland\'s Easter Rising inspired independence movements in other colonised nations around the world.',
      'The Easter lily is worn as a symbol of remembrance for those who died in the 1916 Rising.',
      'Easter Monday is one of nine public holidays in the Republic of Ireland.',
    ],
    fr: [
      'L\'insurrection de Pâques 1916 a commencé le lundi de Pâques car les dirigeants savaient que les bureaux gouvernementaux et les casernes seraient peu gardés pendant le jour férié.',
      'Le GPO sur O\'Connell Street conserve encore des impacts de balles de l\'insurrection de 1916 visibles sur ses piliers.',
      'L\'insurrection de Pâques en Irlande a inspiré des mouvements d\'indépendance dans d\'autres nations colonisées à travers le monde.',
      'Le lys de Pâques est porté en symbole de mémoire pour ceux qui sont morts lors de l\'insurrection de 1916.',
      'Le lundi de Pâques est l\'un des neuf jours fériés de la République d\'Irlande.',
    ],
    es: [
      'El Levantamiento de Pascua de 1916 comenzó el Lunes de Pascua porque los líderes sabían que las oficinas gubernamentales y los cuarteles militares estarían con poco personal durante el festivo.',
      'El GPO en O\'Connell Street todavía tiene agujeros de bala del Levantamiento de 1916 visibles en sus pilares.',
      'El Levantamiento de Pascua en Irlanda inspiró movimientos independentistas en otras naciones colonizadas del mundo.',
      'El lirio de Pascua se lleva como símbolo de recuerdo por quienes murieron en el Levantamiento de 1916.',
      'El Lunes de Pascua es uno de los nueve días festivos de la República de Irlanda.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the date of Easter early — it changes every year',
      'Plan for a long weekend as Good Friday is also widely observed in Ireland',
      'Book accommodation in advance if visiting Dublin for commemorations',
      'Look for local Easter festivals and family events in your area',
      'Prepare outdoor activities to enjoy the spring weather',
    ],
    fr: [
      'Vérifier la date de Pâques à l\'avance — elle change chaque année',
      'Prévoir un long week-end car le Vendredi saint est aussi largement observé en Irlande',
      'Réserver un hébergement à l\'avance si vous visitez Dublin pour les commémorations',
      'Rechercher des festivals de Pâques et des événements familiaux locaux dans votre région',
      'Préparer des activités de plein air pour profiter du temps printanier',
    ],
    es: [
      'Comprobar la fecha de Pascua con antelación, ya que cambia cada año',
      'Planificar un fin de semana largo, ya que el Viernes Santo también se observa ampliamente en Irlanda',
      'Reservar alojamiento con antelación si visitáis Dublín para las conmemoraciones',
      'Buscar festivales de Pascua y eventos familiares locales en tu zona',
      'Preparar actividades al aire libre para disfrutar del clima primaveral',
    ],
  },

  relatedHolidays: ['ie_st-patricks-day', 'ie_june-bank-holiday'],

  seo: {
    en: {
      titleTemplate: 'Easter Monday {year} Ireland — Date, Countdown & History',
      descriptionTemplate: 'When is Easter Monday {year} in Ireland? Live countdown, 1916 Rising history, and things to do over the Easter weekend.',
      keywords: ['Easter Monday Ireland', 'Easter Monday date', 'Irish public holiday', '1916 Easter Rising', 'Easter in Ireland'],
    },
    fr: {
      titleTemplate: 'Lundi de Pâques {year} Irlande — Date, compte à rebours et histoire',
      descriptionTemplate: 'Quand est le lundi de Pâques {year} en Irlande ? Compte à rebours, histoire de l\'insurrection de 1916 et activités du week-end pascal.',
      keywords: ['lundi de Pâques Irlande', 'jour férié irlandais', 'Pâques Irlande', 'insurrection de Pâques 1916', 'lundi de Pâques date'],
    },
    es: {
      titleTemplate: 'Lunes de Pascua {year} Irlanda — Fecha, cuenta regresiva e historia',
      descriptionTemplate: '¿Cuándo es el Lunes de Pascua {year} en Irlanda? Cuenta regresiva, historia del Levantamiento de 1916 y planes para el fin de semana pascual.',
      keywords: ['Lunes de Pascua Irlanda', 'festivo irlandés', 'Pascua Irlanda', 'Levantamiento de Pascua 1916', 'Lunes de Pascua fecha'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Easter Monday {year} in Ireland?',
        fr: 'Quand est le lundi de Pâques {year} en Irlande ?',
        es: '¿Cuándo es el Lunes de Pascua {year} en Irlanda?',
      },
      answer: {
        en: 'Easter Monday {year} in Ireland falls on {date} ({dayOfWeek}). It is the day after Easter Sunday and its date changes each year.',
        fr: 'Le lundi de Pâques {year} en Irlande tombe le {date} ({dayOfWeek}). C\'est le lendemain du dimanche de Pâques et sa date change chaque année.',
        es: 'El Lunes de Pascua {year} en Irlanda cae el {date} ({dayOfWeek}). Es el día después del Domingo de Pascua y su fecha cambia cada año.',
      },
    },
    {
      question: {
        en: 'Why is Easter Monday historically significant in Ireland?',
        fr: 'Pourquoi le lundi de Pâques est-il historiquement important en Irlande ?',
        es: '¿Por qué el Lunes de Pascua es históricamente significativo en Irlanda?',
      },
      answer: {
        en: 'Easter Monday 1916 marks the start of the Easter Rising, an armed insurrection by Irish republicans against British rule. Though the Rising failed militarily, it was a turning point that led to Irish independence in 1922.',
        fr: 'Le lundi de Pâques 1916 marque le début de l\'insurrection de Pâques, un soulèvement armé des républicains irlandais contre la domination britannique. Bien que l\'insurrection ait échoué militairement, elle fut un tournant qui mena à l\'indépendance irlandaise en 1922.',
        es: 'El Lunes de Pascua de 1916 marca el inicio del Levantamiento de Pascua, una insurrección armada de los republicanos irlandeses contra el dominio británico. Aunque el levantamiento fracasó militarmente, fue un punto de inflexión que condujo a la independencia de Irlanda en 1922.',
      },
    },
    {
      question: {
        en: 'Is Good Friday also a public holiday in Ireland?',
        fr: 'Le Vendredi saint est-il aussi un jour férié en Irlande ?',
        es: '¿Es el Viernes Santo también un día festivo en Irlanda?',
      },
      answer: {
        en: 'Good Friday is not an official public holiday in Ireland, but it is widely observed. Most schools and many businesses close. Until 2018, pubs were required by law to close on Good Friday.',
        fr: 'Le Vendredi saint n\'est pas un jour férié officiel en Irlande, mais il est largement observé. La plupart des écoles et de nombreux commerces ferment. Jusqu\'en 2018, les pubs étaient tenus par la loi de fermer le Vendredi saint.',
        es: 'El Viernes Santo no es un día festivo oficial en Irlanda, pero se observa ampliamente. La mayoría de las escuelas y muchos negocios cierran. Hasta 2018, los pubs estaban obligados por ley a cerrar el Viernes Santo.',
      },
    },
    {
      question: {
        en: 'What events take place on Easter Monday in Ireland?',
        fr: 'Quels événements ont lieu le lundi de Pâques en Irlande ?',
        es: '¿Qué eventos tienen lugar el Lunes de Pascua en Irlanda?',
      },
      answer: {
        en: 'A national commemoration ceremony is held at the GPO on O\'Connell Street in Dublin, with military parades and wreath-laying. Across the country, there are Easter festivals, egg hunts, GAA matches, and family events.',
        fr: 'Une cérémonie nationale de commémoration a lieu au GPO sur O\'Connell Street à Dublin, avec des défilés militaires et des dépôts de gerbes. À travers le pays, il y a des festivals de Pâques, des chasses aux œufs, des matchs de la GAA et des événements familiaux.',
        es: 'Se celebra una ceremonia de conmemoración nacional en el GPO en O\'Connell Street en Dublín, con desfiles militares y ofrendas florales. En todo el país hay festivales de Pascua, búsquedas de huevos, partidos de la GAA y eventos familiares.',
      },
    },
  ],

  colorTheme: 'spring-pastel',
  icon: '🐣',
};

// ---------------------------------------------------------------------------
// June Bank Holiday — 1st Monday of June
// ---------------------------------------------------------------------------

const juneBankHoliday: HolidayData = {
  id: 'ie_june-bank-holiday',
  countryCode: 'ie',
  slugs: { en: 'june-bank-holiday', fr: 'jour-ferie-de-juin', es: 'festivo-de-junio' },
  names: { en: 'June Bank Holiday', fr: 'Jour férié de juin', es: 'Festivo bancario de junio' },

  dateType: 'calculated',
  calculateDate: getJuneBankHolidayIE,

  descriptions: {
    en: 'The June Bank Holiday falls on the first Monday of June in Ireland. It marks the unofficial start of summer and is one of the most popular weekends for festivals, outdoor events, and seaside trips across the country.',
    fr: "Le jour férié de juin tombe le premier lundi de juin en Irlande. Il marque le début officieux de l'été et constitue l'un des week-ends les plus populaires pour les festivals, les événements en plein air et les excursions au bord de la mer à travers le pays.",
    es: 'El festivo bancario de junio cae el primer lunes de junio en Irlanda. Marca el inicio extraoficial del verano y es uno de los fines de semana más populares para festivales, eventos al aire libre y viajes a la costa por todo el país.',
  },

  history: {
    en: "The June Bank Holiday was established as a public holiday in Ireland under the Organisation of Working Time Act 1997, replacing the old Whit Monday holiday. Whit Monday, tied to the Christian feast of Pentecost, had been observed for centuries but its moveable date made planning difficult.\n\nBy fixing the holiday to the first Monday of June, the government provided a predictable long weekend at the start of summer. The change was welcomed by businesses and workers alike, giving Ireland a consistent early-summer break.\n\nThe June Bank Holiday weekend has become synonymous with the start of festival season in Ireland, with numerous music, food, and cultural events taking place across the country.",
    fr: "Le jour férié de juin a été établi comme jour férié en Irlande en vertu de l'Organisation of Working Time Act de 1997, remplaçant l'ancien lundi de Pentecôte. Le lundi de Pentecôte, lié à la fête chrétienne de la Pentecôte, était observé depuis des siècles mais sa date variable rendait la planification difficile.\n\nEn fixant le jour férié au premier lundi de juin, le gouvernement a fourni un long week-end prévisible au début de l'été. Ce changement a été bien accueilli par les entreprises et les travailleurs, offrant à l'Irlande une pause estivale anticipée et régulière.\n\nLe week-end du jour férié de juin est devenu synonyme du début de la saison des festivals en Irlande, avec de nombreux événements musicaux, gastronomiques et culturels à travers le pays.",
    es: "El festivo bancario de junio se estableció como día festivo en Irlanda en virtud de la Organisation of Working Time Act de 1997, reemplazando el antiguo Lunes de Pentecostés. El Lunes de Pentecostés, vinculado a la fiesta cristiana de Pentecostés, se observaba desde hacía siglos, pero su fecha variable dificultaba la planificación.\n\nAl fijar el festivo en el primer lunes de junio, el gobierno proporcionó un fin de semana largo predecible al inicio del verano. El cambio fue bien recibido tanto por empresas como por trabajadores, otorgando a Irlanda un descanso veraniego anticipado y constante.\n\nEl fin de semana del festivo de junio se ha convertido en sinónimo del inicio de la temporada de festivales en Irlanda, con numerosos eventos musicales, gastronómicos y culturales en todo el país.",
  },

  traditions: {
    en: [
      'Heading to the coast for the first beach weekend of summer',
      'Attending music festivals and open-air concerts',
      'Going on camping trips and countryside hikes',
      'Visiting local food and craft markets',
      'Enjoying barbecues and garden parties with friends and family',
      'Participating in outdoor sporting events and fun runs',
    ],
    fr: [
      'Partir vers la côte pour le premier week-end de plage de l\'été',
      'Assister à des festivals de musique et des concerts en plein air',
      'Faire du camping et des randonnées à la campagne',
      'Visiter des marchés locaux de produits alimentaires et d\'artisanat',
      'Profiter de barbecues et de fêtes au jardin entre amis et en famille',
      'Participer à des événements sportifs en plein air et des courses à pied',
    ],
    es: [
      'Ir a la costa para el primer fin de semana de playa del verano',
      'Asistir a festivales de música y conciertos al aire libre',
      'Hacer acampadas y excursiones por el campo',
      'Visitar mercados locales de productos alimentarios y artesanía',
      'Disfrutar de barbacoas y fiestas en el jardín con amigos y familia',
      'Participar en eventos deportivos al aire libre y carreras populares',
    ],
  },

  funFacts: {
    en: [
      'The June Bank Holiday replaced the old Whit Monday holiday, which moved each year with the date of Pentecost.',
      'The June Bank Holiday weekend is one of the busiest for domestic tourism in Ireland.',
      'Ireland has nine official public holidays, and the June Bank Holiday is one of only four that fall on a Monday.',
      'Many of Ireland\'s biggest music festivals, including Forbidden Fruit and Body & Soul, are held on this weekend.',
      'The June Bank Holiday is the only Irish public holiday named simply after the month it falls in.',
    ],
    fr: [
      'Le jour férié de juin a remplacé l\'ancien lundi de Pentecôte, dont la date variait chaque année avec la Pentecôte.',
      'Le week-end du jour férié de juin est l\'un des plus chargés pour le tourisme intérieur en Irlande.',
      'L\'Irlande compte neuf jours fériés officiels, et le jour férié de juin est l\'un des quatre seulement qui tombent un lundi.',
      'De nombreux grands festivals de musique irlandais, dont Forbidden Fruit et Body & Soul, se tiennent ce week-end.',
      'Le jour férié de juin est le seul jour férié irlandais nommé simplement d\'après le mois où il tombe.',
    ],
    es: [
      'El festivo de junio reemplazó al antiguo Lunes de Pentecostés, cuya fecha variaba cada año con Pentecostés.',
      'El fin de semana del festivo de junio es uno de los más concurridos para el turismo nacional en Irlanda.',
      'Irlanda tiene nueve días festivos oficiales, y el festivo de junio es uno de solo cuatro que caen en lunes.',
      'Muchos de los mayores festivales de música de Irlanda, incluidos Forbidden Fruit y Body & Soul, se celebran este fin de semana.',
      'El festivo de junio es el único día festivo irlandés que lleva simplemente el nombre del mes en que cae.',
    ],
  },

  planningChecklist: {
    en: [
      'Book holiday accommodation early — coastal areas fill up quickly',
      'Check for music festivals and cultural events happening over the weekend',
      'Plan outdoor activities and prepare for variable Irish weather',
      'Stock up on barbecue supplies for a summer gathering',
      'Look into family-friendly festivals and events in your area',
    ],
    fr: [
      'Réserver un hébergement de vacances tôt — les zones côtières se remplissent vite',
      'Vérifier les festivals de musique et événements culturels du week-end',
      'Planifier des activités de plein air et se préparer au temps irlandais variable',
      'Faire des provisions pour un barbecue estival',
      'Se renseigner sur les festivals et événements familiaux dans votre région',
    ],
    es: [
      'Reservar alojamiento vacacional con antelación — las zonas costeras se llenan rápido',
      'Consultar los festivales de música y eventos culturales del fin de semana',
      'Planificar actividades al aire libre y prepararse para el tiempo irlandés variable',
      'Aprovisionarse para una barbacoa de verano',
      'Informarse sobre festivales y eventos familiares en tu zona',
    ],
  },

  relatedHolidays: ['ie_october-bank-holiday', 'ie_easter-monday'],

  seo: {
    en: {
      titleTemplate: 'June Bank Holiday {year} Ireland — Date & Countdown',
      descriptionTemplate: 'When is the June Bank Holiday {year} in Ireland? Live countdown, festival info, and things to do over the long weekend.',
      keywords: ['June Bank Holiday Ireland', 'Irish public holiday June', 'June long weekend Ireland', 'Ireland bank holiday', 'first Monday June Ireland'],
    },
    fr: {
      titleTemplate: 'Jour férié de juin {year} Irlande — Date et compte à rebours',
      descriptionTemplate: 'Quand est le jour férié de juin {year} en Irlande ? Compte à rebours, informations sur les festivals et activités du long week-end.',
      keywords: ['jour férié juin Irlande', 'jour férié irlandais', 'week-end prolongé Irlande', 'premier lundi juin Irlande', 'fête Irlande juin'],
    },
    es: {
      titleTemplate: 'Festivo de junio {year} Irlanda — Fecha y cuenta regresiva',
      descriptionTemplate: '¿Cuándo es el festivo de junio {year} en Irlanda? Cuenta regresiva, información de festivales y planes para el fin de semana largo.',
      keywords: ['festivo junio Irlanda', 'festivo irlandés', 'fin de semana largo Irlanda', 'primer lunes junio Irlanda', 'fiesta Irlanda junio'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is the June Bank Holiday {year} in Ireland?',
        fr: 'Quand est le jour férié de juin {year} en Irlande ?',
        es: '¿Cuándo es el festivo de junio {year} en Irlanda?',
      },
      answer: {
        en: 'The June Bank Holiday {year} in Ireland falls on {date} ({dayOfWeek}). It is always the first Monday of June.',
        fr: 'Le jour férié de juin {year} en Irlande tombe le {date} ({dayOfWeek}). C\'est toujours le premier lundi de juin.',
        es: 'El festivo de junio {year} en Irlanda cae el {date} ({dayOfWeek}). Siempre es el primer lunes de junio.',
      },
    },
    {
      question: {
        en: 'What replaced Whit Monday in Ireland?',
        fr: 'Qu\'est-ce qui a remplacé le lundi de Pentecôte en Irlande ?',
        es: '¿Qué reemplazó al Lunes de Pentecostés en Irlanda?',
      },
      answer: {
        en: 'The June Bank Holiday replaced Whit Monday in 1973. Whit Monday was tied to the moveable feast of Pentecost, so the government fixed the holiday to the first Monday of June for consistency.',
        fr: 'Le jour férié de juin a remplacé le lundi de Pentecôte en 1973. Le lundi de Pentecôte était lié à la fête mobile de la Pentecôte, le gouvernement a donc fixé le jour férié au premier lundi de juin par souci de cohérence.',
        es: 'El festivo de junio reemplazó al Lunes de Pentecostés en 1973. El Lunes de Pentecostés estaba vinculado a la fiesta movible de Pentecostés, así que el gobierno fijó el festivo en el primer lunes de junio para mantener la coherencia.',
      },
    },
    {
      question: {
        en: 'What festivals happen on the June Bank Holiday weekend?',
        fr: 'Quels festivals ont lieu le week-end du jour férié de juin ?',
        es: '¿Qué festivales se celebran el fin de semana del festivo de junio?',
      },
      answer: {
        en: 'The June Bank Holiday weekend hosts many festivals across Ireland, including music festivals, food festivals, and cultural events. Popular ones include Forbidden Fruit in Dublin and various county-level festivals featuring live music and local food.',
        fr: 'Le week-end du jour férié de juin accueille de nombreux festivals à travers l\'Irlande, dont des festivals de musique, des festivals gastronomiques et des événements culturels. Parmi les plus populaires figurent Forbidden Fruit à Dublin et divers festivals régionaux proposant de la musique live et de la cuisine locale.',
        es: 'El fin de semana del festivo de junio acoge muchos festivales en toda Irlanda, incluyendo festivales de música, festivales gastronómicos y eventos culturales. Entre los más populares están Forbidden Fruit en Dublín y varios festivales comarcales con música en vivo y gastronomía local.',
      },
    },
    {
      question: {
        en: 'Is the June Bank Holiday the same as the UK Spring Bank Holiday?',
        fr: 'Le jour férié de juin est-il le même que le Spring Bank Holiday du Royaume-Uni ?',
        es: '¿Es el festivo de junio lo mismo que el Spring Bank Holiday del Reino Unido?',
      },
      answer: {
        en: 'No. Ireland\'s June Bank Holiday is the first Monday of June, while the UK\'s Spring Bank Holiday is the last Monday of May. They are separate holidays that fall about a week apart.',
        fr: 'Non. Le jour férié de juin en Irlande est le premier lundi de juin, tandis que le Spring Bank Holiday du Royaume-Uni est le dernier lundi de mai. Ce sont des jours fériés distincts, séparés d\'environ une semaine.',
        es: 'No. El festivo de junio de Irlanda es el primer lunes de junio, mientras que el Spring Bank Holiday del Reino Unido es el último lunes de mayo. Son festivos diferentes que caen con aproximadamente una semana de diferencia.',
      },
    },
  ],

  colorTheme: 'blue-green',
  icon: '☀️',
};

// ---------------------------------------------------------------------------
// October Bank Holiday — Last Monday of October
// ---------------------------------------------------------------------------

const octoberBankHoliday: HolidayData = {
  id: 'ie_october-bank-holiday',
  countryCode: 'ie',
  slugs: { en: 'october-bank-holiday', fr: 'jour-ferie-doctobre', es: 'festivo-de-octubre' },
  names: { en: 'October Bank Holiday', fr: "Jour férié d'octobre", es: 'Festivo bancario de octubre' },

  dateType: 'calculated',
  calculateDate: getOctoberBankHolidayIE,

  descriptions: {
    en: 'The October Bank Holiday falls on the last Monday of October in Ireland. Coinciding with the end of autumn and the approach of Halloween, it is closely tied to the ancient Celtic festival of Samhain, which originated in Ireland.',
    fr: "Le jour férié d'octobre tombe le dernier lundi d'octobre en Irlande. Coïncidant avec la fin de l'automne et l'approche d'Halloween, il est étroitement lié à l'ancien festival celtique de Samhain, originaire d'Irlande.",
    es: 'El festivo bancario de octubre cae el último lunes de octubre en Irlanda. Coincidiendo con el final del otoño y la llegada de Halloween, está estrechamente vinculado al antiguo festival celta de Samhain, que se originó en Irlanda.',
  },

  history: {
    en: "The October Bank Holiday has been a public holiday in Ireland since 1977. It was introduced to provide a break in the long stretch between the summer holidays and Christmas.\n\nThe timing of the holiday near the end of October connects it to the ancient Celtic festival of Samhain, which marked the end of the harvest season and the beginning of winter. Samhain, celebrated on November 1, was one of the most important festivals in the Celtic calendar and is widely considered the origin of modern Halloween.\n\nThe ancient Celts believed that on the night of Samhain, the boundary between the living and the dead became thin, allowing spirits to cross over. Many Halloween traditions, including jack-o'-lanterns, costumes, and trick-or-treating, can trace their roots back to Irish Samhain customs.",
    fr: "Le jour férié d'octobre est un jour férié en Irlande depuis 1977. Il a été introduit pour offrir une pause dans la longue période entre les vacances d'été et Noël.\n\nLa période du jour férié, vers la fin octobre, le relie à l'ancien festival celtique de Samhain, qui marquait la fin de la saison des récoltes et le début de l'hiver. Samhain, célébré le 1er novembre, était l'un des festivals les plus importants du calendrier celtique et est largement considéré comme l'origine de l'Halloween moderne.\n\nLes anciens Celtes croyaient que la nuit de Samhain, la frontière entre les vivants et les morts devenait mince, permettant aux esprits de traverser. De nombreuses traditions d'Halloween, notamment les citrouilles sculptées, les costumes et la collecte de bonbons, trouvent leurs racines dans les coutumes irlandaises de Samhain.",
    es: "El festivo bancario de octubre ha sido un día festivo en Irlanda desde 1977. Se introdujo para proporcionar un descanso en el largo periodo entre las vacaciones de verano y Navidad.\n\nLa cercanía del festivo con finales de octubre lo conecta con el antiguo festival celta de Samhain, que marcaba el final de la temporada de cosecha y el inicio del invierno. Samhain, celebrado el 1 de noviembre, era uno de los festivales más importantes del calendario celta y es ampliamente considerado el origen del Halloween moderno.\n\nLos antiguos celtas creían que la noche de Samhain, la frontera entre los vivos y los muertos se hacía delgada, permitiendo a los espíritus cruzar al otro lado. Muchas tradiciones de Halloween, incluyendo las calabazas talladas, los disfraces y el truco o trato, pueden rastrear sus raíces hasta las costumbres irlandesas de Samhain.",
  },

  traditions: {
    en: [
      'Attending Halloween festivals and events across Ireland',
      'Carving pumpkins and turnips into jack-o\'-lanterns',
      'Visiting the Púca Festival in County Meath, celebrating the origins of Halloween',
      'Enjoying barmbrack (Irish fruit bread) — traditionally containing hidden charms that tell fortunes',
      'Trick-or-treating and dressing up in costumes',
      'Lighting bonfires, following the ancient Samhain tradition',
      'Visiting haunted attractions and ghost tours',
    ],
    fr: [
      'Assister aux festivals et événements d\'Halloween à travers l\'Irlande',
      'Sculpter des citrouilles et des navets en lanternes',
      'Visiter le Púca Festival dans le comté de Meath, célébrant les origines d\'Halloween',
      'Déguster du barmbrack (pain aux fruits irlandais) — contenant traditionnellement des charmes cachés prédisant l\'avenir',
      'Faire la collecte de bonbons et se déguiser',
      'Allumer des feux de joie, suivant l\'ancienne tradition de Samhain',
      'Visiter des attractions hantées et participer à des visites fantômes',
    ],
    es: [
      'Asistir a festivales y eventos de Halloween por toda Irlanda',
      'Tallar calabazas y nabos como linternas',
      'Visitar el Púca Festival en el condado de Meath, que celebra los orígenes de Halloween',
      'Disfrutar del barmbrack (pan de frutas irlandés) — que tradicionalmente contiene amuletos ocultos que predicen el futuro',
      'Hacer truco o trato y disfrazarse',
      'Encender hogueras, siguiendo la antigua tradición de Samhain',
      'Visitar atracciones embrujadas y tours de fantasmas',
    ],
  },

  funFacts: {
    en: [
      'Halloween originated in Ireland from the ancient Celtic festival of Samhain, making the October Bank Holiday weekend uniquely meaningful.',
      'The original jack-o\'-lanterns were carved from turnips, not pumpkins — Irish immigrants brought the tradition to America and switched to pumpkins.',
      'Barmbrack, the traditional Halloween bread, contains hidden items: a ring (marriage), a coin (wealth), a pea (no marriage), and a stick (unhappy marriage).',
      'The Púca Festival in County Meath celebrates Ireland\'s Halloween heritage at sites linked to the ancient Samhain festival.',
      'Derry (Londonderry) hosts one of the largest Halloween celebrations in Europe, attracting over 100,000 visitors.',
    ],
    fr: [
      'Halloween est née en Irlande du festival celtique de Samhain, ce qui rend le week-end du jour férié d\'octobre particulièrement significatif.',
      'Les premières lanternes étaient sculptées dans des navets, pas des citrouilles — les immigrants irlandais ont apporté la tradition en Amérique et sont passés aux citrouilles.',
      'Le barmbrack, le pain traditionnel d\'Halloween, contient des objets cachés : une bague (mariage), une pièce (richesse), un pois (pas de mariage) et un bâton (mariage malheureux).',
      'Le Púca Festival dans le comté de Meath célèbre l\'héritage irlandais d\'Halloween sur des sites liés à l\'ancien festival de Samhain.',
      'Derry (Londonderry) accueille l\'une des plus grandes célébrations d\'Halloween en Europe, attirant plus de 100 000 visiteurs.',
    ],
    es: [
      'Halloween se originó en Irlanda a partir del antiguo festival celta de Samhain, lo que hace que el fin de semana del festivo de octubre sea especialmente significativo.',
      'Las linternas originales se tallaban en nabos, no en calabazas — los inmigrantes irlandeses llevaron la tradición a América y cambiaron a calabazas.',
      'El barmbrack, el pan tradicional de Halloween, contiene objetos ocultos: un anillo (matrimonio), una moneda (riqueza), un guisante (sin matrimonio) y un palo (matrimonio infeliz).',
      'El Púca Festival en el condado de Meath celebra la herencia irlandesa de Halloween en sitios vinculados al antiguo festival de Samhain.',
      'Derry (Londonderry) acoge una de las mayores celebraciones de Halloween de Europa, atrayendo a más de 100.000 visitantes.',
    ],
  },

  planningChecklist: {
    en: [
      'Book accommodation in advance for Halloween festival destinations',
      'Plan costumes and decorations for Halloween celebrations',
      'Check for local Halloween events, haunted houses, and festivals',
      'Stock up on treats for trick-or-treaters',
      'Prepare warm clothing for autumn outdoor activities',
    ],
    fr: [
      'Réserver un hébergement à l\'avance pour les destinations de festivals d\'Halloween',
      'Préparer des costumes et des décorations pour les célébrations d\'Halloween',
      'Rechercher les événements locaux d\'Halloween, maisons hantées et festivals',
      'Faire des provisions de bonbons pour les enfants qui font la collecte',
      'Prévoir des vêtements chauds pour les activités automnales en plein air',
    ],
    es: [
      'Reservar alojamiento con antelación para destinos de festivales de Halloween',
      'Preparar disfraces y decoraciones para las celebraciones de Halloween',
      'Consultar eventos locales de Halloween, casas embrujadas y festivales',
      'Aprovisionarse de golosinas para los niños que hacen truco o trato',
      'Preparar ropa de abrigo para las actividades otoñales al aire libre',
    ],
  },

  relatedHolidays: ['ie_june-bank-holiday', 'ie_christmas'],

  seo: {
    en: {
      titleTemplate: 'October Bank Holiday {year} Ireland — Date & Countdown',
      descriptionTemplate: 'When is the October Bank Holiday {year} in Ireland? Live countdown, Halloween origins, Samhain history, and things to do.',
      keywords: ['October Bank Holiday Ireland', 'Irish Halloween', 'Samhain Ireland', 'October long weekend Ireland', 'Irish public holiday October'],
    },
    fr: {
      titleTemplate: "Jour férié d'octobre {year} Irlande — Date et compte à rebours",
      descriptionTemplate: "Quand est le jour férié d'octobre {year} en Irlande ? Compte à rebours, origines d'Halloween, histoire de Samhain et activités.",
      keywords: ["jour férié octobre Irlande", "Halloween Irlande", "Samhain Irlande", "week-end prolongé octobre Irlande", "jour férié irlandais octobre"],
    },
    es: {
      titleTemplate: 'Festivo de octubre {year} Irlanda — Fecha y cuenta regresiva',
      descriptionTemplate: '¿Cuándo es el festivo de octubre {year} en Irlanda? Cuenta regresiva, orígenes de Halloween, historia de Samhain y planes.',
      keywords: ['festivo octubre Irlanda', 'Halloween Irlanda', 'Samhain Irlanda', 'fin de semana largo octubre Irlanda', 'festivo irlandés octubre'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is the October Bank Holiday {year} in Ireland?',
        fr: "Quand est le jour férié d'octobre {year} en Irlande ?",
        es: '¿Cuándo es el festivo de octubre {year} en Irlanda?',
      },
      answer: {
        en: 'The October Bank Holiday {year} in Ireland falls on {date} ({dayOfWeek}). It is always the last Monday of October.',
        fr: "Le jour férié d'octobre {year} en Irlande tombe le {date} ({dayOfWeek}). C'est toujours le dernier lundi d'octobre.",
        es: 'El festivo de octubre {year} en Irlanda cae el {date} ({dayOfWeek}). Siempre es el último lunes de octubre.',
      },
    },
    {
      question: {
        en: 'What is the connection between the October Bank Holiday and Halloween?',
        fr: "Quel est le lien entre le jour férié d'octobre et Halloween ?",
        es: '¿Cuál es la conexión entre el festivo de octubre y Halloween?',
      },
      answer: {
        en: 'The October Bank Holiday falls near Halloween (October 31), which originated in Ireland from the ancient Celtic festival of Samhain. Many Irish Halloween traditions, including carving lanterns, bonfires, and costumes, date back over 2,000 years.',
        fr: "Le jour férié d'octobre tombe près d'Halloween (31 octobre), qui est née en Irlande du festival celtique de Samhain. De nombreuses traditions irlandaises d'Halloween, dont la sculpture de lanternes, les feux de joie et les déguisements, remontent à plus de 2 000 ans.",
        es: 'El festivo de octubre cae cerca de Halloween (31 de octubre), que se originó en Irlanda a partir del antiguo festival celta de Samhain. Muchas tradiciones irlandesas de Halloween, incluyendo tallar linternas, hogueras y disfraces, se remontan a más de 2.000 años.',
      },
    },
    {
      question: {
        en: 'What is Samhain?',
        fr: "Qu'est-ce que Samhain ?",
        es: '¿Qué es Samhain?',
      },
      answer: {
        en: 'Samhain was an ancient Celtic festival marking the end of harvest and the start of winter, celebrated on November 1. The Celts believed the boundary between the living and the dead thinned on this night, allowing spirits to cross over. It is the origin of modern Halloween.',
        fr: "Samhain était un ancien festival celtique marquant la fin des récoltes et le début de l'hiver, célébré le 1er novembre. Les Celtes croyaient que la frontière entre les vivants et les morts s'amincissait cette nuit-là, permettant aux esprits de traverser. C'est à l'origine de l'Halloween moderne.",
        es: 'Samhain era un antiguo festival celta que marcaba el final de la cosecha y el inicio del invierno, celebrado el 1 de noviembre. Los celtas creían que la frontera entre los vivos y los muertos se adelgazaba esa noche, permitiendo a los espíritus cruzar. Es el origen del Halloween moderno.',
      },
    },
    {
      question: {
        en: 'What is barmbrack?',
        fr: "Qu'est-ce que le barmbrack ?",
        es: '¿Qué es el barmbrack?',
      },
      answer: {
        en: 'Barmbrack is a traditional Irish fruit bread eaten at Halloween. It contains hidden charms: a ring (marriage), a coin (wealth), a pea (no marriage that year), and a stick (an unhappy marriage). Finding an item in your slice is said to predict your fortune.',
        fr: "Le barmbrack est un pain aux fruits traditionnel irlandais mangé à Halloween. Il contient des charmes cachés : une bague (mariage), une pièce (richesse), un pois (pas de mariage cette année-là) et un bâton (mariage malheureux). Trouver un objet dans votre tranche est censé prédire votre avenir.",
        es: 'El barmbrack es un pan de frutas tradicional irlandés que se come en Halloween. Contiene amuletos ocultos: un anillo (matrimonio), una moneda (riqueza), un guisante (sin matrimonio ese año) y un palo (matrimonio infeliz). Se dice que encontrar un objeto en tu porción predice tu fortuna.',
      },
    },
  ],

  colorTheme: 'orange-brown',
  icon: '🍂',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmasDay: HolidayData = {
  id: 'ie_christmas',
  countryCode: 'ie',
  slugs: { en: 'christmas', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noël', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: 'Christmas Day on December 25 is one of the most cherished holidays in Ireland. A deeply family-centred celebration, it blends religious observance with distinctive Irish traditions including placing candles in windows, the Wren Boys, and the Christmas pudding.',
    fr: "Le jour de Noël, le 25 décembre, est l'une des fêtes les plus chères en Irlande. Célébration profondément familiale, elle mêle pratique religieuse et traditions irlandaises distinctives comme les bougies aux fenêtres, les Wren Boys et le pudding de Noël.",
    es: 'El día de Navidad, el 25 de diciembre, es una de las fiestas más queridas de Irlanda. Una celebración profundamente familiar, combina la observancia religiosa con tradiciones irlandesas distintivas como las velas en las ventanas, los Wren Boys y el pudding de Navidad.',
  },

  history: {
    en: "Christmas has been celebrated in Ireland since the arrival of Christianity in the 5th century. Irish Christmas traditions are deeply rooted in both Catholic religious practice and ancient Celtic customs.\n\nThe tradition of placing a single candle in the window on Christmas Eve dates back to Penal Times (17th-18th centuries), when Catholic worship was prohibited. The candle signalled to passing priests that the household was Catholic and they were welcome to celebrate Mass. Officially, the candle was said to be lit to welcome Mary and Joseph.\n\nIrish Christmas celebrations have always been strongly community-focused. The practice of visiting neighbours, attending Midnight Mass, and sharing food with those in need reflect the communal spirit of the season. The twelve days of Christmas, from December 25 to January 6 (Little Christmas or Women's Christmas), are traditionally observed in Ireland.",
    fr: "Noël est célébré en Irlande depuis l'arrivée du christianisme au Ve siècle. Les traditions de Noël irlandaises sont profondément enracinées dans la pratique religieuse catholique et les anciennes coutumes celtiques.\n\nLa tradition de placer une bougie à la fenêtre la veille de Noël remonte aux temps pénaux (XVIIe-XVIIIe siècles), lorsque le culte catholique était interdit. La bougie signalait aux prêtres de passage que le foyer était catholique et qu'ils étaient les bienvenus pour célébrer la messe. Officiellement, on disait que la bougie était allumée pour accueillir Marie et Joseph.\n\nLes célébrations de Noël en Irlande ont toujours été fortement axées sur la communauté. La pratique de rendre visite aux voisins, d'assister à la messe de minuit et de partager la nourriture avec les personnes dans le besoin reflète l'esprit communautaire de la saison. Les douze jours de Noël, du 25 décembre au 6 janvier (Petit Noël ou Noël des femmes), sont traditionnellement observés en Irlande.",
    es: "La Navidad se celebra en Irlanda desde la llegada del cristianismo en el siglo V. Las tradiciones navideñas irlandesas están profundamente arraigadas tanto en la práctica religiosa católica como en las antiguas costumbres celtas.\n\nLa tradición de colocar una vela en la ventana en Nochebuena se remonta a los tiempos penales (siglos XVII-XVIII), cuando el culto católico estaba prohibido. La vela señalaba a los sacerdotes que pasaban que el hogar era católico y eran bienvenidos para celebrar la misa. Oficialmente, se decía que la vela se encendía para dar la bienvenida a María y José.\n\nLas celebraciones navideñas irlandesas siempre han sido fuertemente comunitarias. La práctica de visitar a los vecinos, asistir a la Misa del Gallo y compartir comida con los necesitados refleja el espíritu comunitario de la temporada. Los doce días de Navidad, del 25 de diciembre al 6 de enero (Pequeña Navidad o Navidad de las Mujeres), se observan tradicionalmente en Irlanda.",
  },

  traditions: {
    en: [
      'Placing a candle in the window on Christmas Eve to welcome travellers and honour the Holy Family',
      'Attending Midnight Mass on Christmas Eve',
      'Enjoying a traditional Christmas dinner with roast turkey, ham, roast potatoes, and Brussels sprouts',
      'Serving Christmas pudding with brandy sauce for dessert',
      'Swimming in the Forty Foot or other locations for a Christmas Day swim',
      'Watching the RTÉ Christmas Day broadcast and seasonal television',
      'Playing board games and charades with the family after dinner',
    ],
    fr: [
      'Placer une bougie à la fenêtre la veille de Noël pour accueillir les voyageurs et honorer la Sainte Famille',
      'Assister à la messe de minuit la veille de Noël',
      'Déguster un dîner de Noël traditionnel avec dinde rôtie, jambon, pommes de terre rôties et choux de Bruxelles',
      'Servir le pudding de Noël avec sauce au brandy en dessert',
      'Se baigner au Forty Foot ou dans d\'autres lieux pour la baignade de Noël',
      'Regarder l\'émission de Noël de RTÉ et les programmes télévisés de saison',
      'Jouer à des jeux de société et des charades en famille après le dîner',
    ],
    es: [
      'Colocar una vela en la ventana en Nochebuena para dar la bienvenida a los viajeros y honrar a la Sagrada Familia',
      'Asistir a la Misa del Gallo en Nochebuena',
      'Disfrutar de una cena navideña tradicional con pavo asado, jamón, patatas asadas y coles de Bruselas',
      'Servir pudding de Navidad con salsa de brandy de postre',
      'Nadar en el Forty Foot u otros lugares para el baño navideño',
      'Ver la emisión navideña de RTÉ y la programación televisiva de temporada',
      'Jugar juegos de mesa y charadas en familia después de la cena',
    ],
  },

  funFacts: {
    en: [
      'The tradition of placing a candle in the window on Christmas Eve originated during Ireland\'s Penal Times as a secret signal to Catholic priests.',
      'The Christmas Day swim at the Forty Foot in Sandycove, Dublin, attracts hundreds of brave swimmers each year.',
      'Ireland traditionally celebrates "Women\'s Christmas" (Nollaig na mBan) on January 6, when women rest and men do the housework.',
      'Mince pies in Ireland are sometimes left out for Santa Claus along with a pint of Guinness instead of milk.',
      'The Late Late Toy Show, broadcast on RTÉ in late November, is the most-watched television programme in Ireland each year and kicks off the Christmas season.',
    ],
    fr: [
      'La tradition de placer une bougie à la fenêtre la veille de Noël est née pendant les temps pénaux en Irlande, comme signal secret aux prêtres catholiques.',
      'La baignade de Noël au Forty Foot à Sandycove, Dublin, attire des centaines de nageurs courageux chaque année.',
      'L\'Irlande célèbre traditionnellement le « Noël des femmes » (Nollaig na mBan) le 6 janvier, jour où les femmes se reposent et les hommes font le ménage.',
      'Les tartes aux fruits secs en Irlande sont parfois laissées pour le Père Noël avec une pinte de Guinness au lieu de lait.',
      'Le Late Late Toy Show, diffusé sur RTÉ fin novembre, est le programme télévisé le plus regardé en Irlande chaque année et lance la saison de Noël.',
    ],
    es: [
      'La tradición de colocar una vela en la ventana en Nochebuena se originó durante los tiempos penales de Irlanda como señal secreta para los sacerdotes católicos.',
      'El baño navideño en el Forty Foot en Sandycove, Dublín, atrae a cientos de valientes nadadores cada año.',
      'Irlanda celebra tradicionalmente la "Navidad de las Mujeres" (Nollaig na mBan) el 6 de enero, cuando las mujeres descansan y los hombres hacen las tareas domésticas.',
      'En Irlanda, los pasteles de frutos secos a veces se dejan para Papá Noel junto con una pinta de Guinness en lugar de leche.',
      'El Late Late Toy Show, emitido por RTÉ a finales de noviembre, es el programa de televisión más visto en Irlanda cada año y da inicio a la temporada navideña.',
    ],
  },

  planningChecklist: {
    en: [
      'Order your Christmas turkey and ham from the local butcher early',
      'Buy and wrap gifts — Christmas shopping peaks in December',
      'Prepare the Christmas pudding in advance for the best flavour',
      'Place a candle in the window on Christmas Eve',
      'Plan your Christmas Day schedule — Midnight Mass, dinner, and family activities',
    ],
    fr: [
      'Commander la dinde et le jambon de Noël chez le boucher local en avance',
      'Acheter et emballer les cadeaux — les achats de Noël atteignent leur pic en décembre',
      'Préparer le pudding de Noël à l\'avance pour un meilleur goût',
      'Placer une bougie à la fenêtre la veille de Noël',
      'Organiser le programme du jour de Noël — messe de minuit, dîner et activités en famille',
    ],
    es: [
      'Encargar el pavo y el jamón navideño al carnicero local con antelación',
      'Comprar y envolver regalos — las compras navideñas alcanzan su punto máximo en diciembre',
      'Preparar el pudding de Navidad con antelación para mejor sabor',
      'Colocar una vela en la ventana en Nochebuena',
      'Planificar el programa del día de Navidad — Misa del Gallo, cena y actividades familiares',
    ],
  },

  relatedHolidays: ['ie_st-stephens-day', 'ie_st-patricks-day'],

  seo: {
    en: {
      titleTemplate: 'Christmas Day {year} Ireland — Countdown & Traditions',
      descriptionTemplate: 'How many days until Christmas {year} in Ireland? Live countdown to December 25, Irish Christmas traditions, and celebration guide.',
      keywords: ['Christmas Ireland', 'Irish Christmas traditions', 'Christmas countdown', 'Christmas Day Ireland', 'Nollaig'],
    },
    fr: {
      titleTemplate: 'Noël {year} Irlande — Compte à rebours et traditions',
      descriptionTemplate: 'Combien de jours avant Noël {year} en Irlande ? Compte à rebours, traditions de Noël irlandaises et guide de célébration.',
      keywords: ['Noël Irlande', 'traditions de Noël irlandaises', 'compte à rebours Noël', 'Noël en Irlande', 'Nollaig'],
    },
    es: {
      titleTemplate: 'Navidad {year} Irlanda — Cuenta regresiva y tradiciones',
      descriptionTemplate: '¿Cuántos días faltan para Navidad {year} en Irlanda? Cuenta regresiva, tradiciones navideñas irlandesas y guía de celebración.',
      keywords: ['Navidad Irlanda', 'tradiciones navideñas irlandesas', 'cuenta regresiva Navidad', 'Navidad en Irlanda', 'Nollaig'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Christmas Day {year} in Ireland?',
        fr: 'Quand est Noël {year} en Irlande ?',
        es: '¿Cuándo es Navidad {year} en Irlanda?',
      },
      answer: {
        en: 'Christmas Day {year} is on {date} ({dayOfWeek}). It is always December 25 and is a public holiday in Ireland.',
        fr: 'Noël {year} est le {date} ({dayOfWeek}). C\'est toujours le 25 décembre et c\'est un jour férié en Irlande.',
        es: 'Navidad {year} es el {date} ({dayOfWeek}). Siempre es el 25 de diciembre y es un día festivo en Irlanda.',
      },
    },
    {
      question: {
        en: 'Why do Irish people put candles in their windows at Christmas?',
        fr: 'Pourquoi les Irlandais mettent-ils des bougies à leurs fenêtres à Noël ?',
        es: '¿Por qué los irlandeses ponen velas en las ventanas en Navidad?',
      },
      answer: {
        en: 'The tradition dates back to Penal Times (17th-18th centuries) when Catholic worship was banned. Families placed a candle in the window on Christmas Eve to secretly signal to priests that they were welcome to celebrate Mass. Officially, the candle was said to welcome Mary and Joseph.',
        fr: 'La tradition remonte aux temps pénaux (XVIIe-XVIIIe siècles) lorsque le culte catholique était interdit. Les familles plaçaient une bougie à la fenêtre la veille de Noël pour signaler secrètement aux prêtres qu\'ils étaient les bienvenus pour célébrer la messe. Officiellement, la bougie était censée accueillir Marie et Joseph.',
        es: 'La tradición se remonta a los tiempos penales (siglos XVII-XVIII) cuando el culto católico estaba prohibido. Las familias colocaban una vela en la ventana en Nochebuena para señalar secretamente a los sacerdotes que eran bienvenidos para celebrar la misa. Oficialmente, se decía que la vela daba la bienvenida a María y José.',
      },
    },
    {
      question: {
        en: "What is Women's Christmas in Ireland?",
        fr: "Qu'est-ce que le Noël des femmes en Irlande ?",
        es: '¿Qué es la Navidad de las Mujeres en Irlanda?',
      },
      answer: {
        en: "Women's Christmas (Nollaig na mBan) is celebrated on January 6, the feast of the Epiphany. Traditionally, women rested on this day after the Christmas season while men took over household duties. It marks the end of the twelve days of Christmas in Ireland.",
        fr: "Le Noël des femmes (Nollaig na mBan) est célébré le 6 janvier, fête de l'Épiphanie. Traditionnellement, les femmes se reposaient ce jour-là après la saison de Noël tandis que les hommes prenaient en charge les tâches ménagères. Il marque la fin des douze jours de Noël en Irlande.",
        es: "La Navidad de las Mujeres (Nollaig na mBan) se celebra el 6 de enero, fiesta de la Epifanía. Tradicionalmente, las mujeres descansaban este día después de la temporada navideña mientras los hombres asumían las tareas domésticas. Marca el final de los doce días de Navidad en Irlanda.",
      },
    },
    {
      question: {
        en: 'What do Irish people eat on Christmas Day?',
        fr: 'Que mangent les Irlandais le jour de Noël ?',
        es: '¿Qué comen los irlandeses el día de Navidad?',
      },
      answer: {
        en: 'A traditional Irish Christmas dinner includes roast turkey and baked ham, roast potatoes, Brussels sprouts, carrots, and stuffing. Dessert is typically Christmas pudding with brandy butter or cream. Mince pies and Christmas cake are also enjoyed throughout the season.',
        fr: 'Un dîner de Noël irlandais traditionnel comprend de la dinde rôtie et du jambon cuit au four, des pommes de terre rôties, des choux de Bruxelles, des carottes et de la farce. Le dessert est généralement un pudding de Noël avec du beurre au brandy ou de la crème. Des tartes aux fruits secs et du gâteau de Noël sont également dégustés tout au long de la saison.',
        es: 'Una cena navideña irlandesa tradicional incluye pavo asado y jamón al horno, patatas asadas, coles de Bruselas, zanahorias y relleno. El postre suele ser pudding de Navidad con mantequilla de brandy o nata. Los pasteles de frutos secos y el bizcocho de Navidad también se disfrutan durante toda la temporada.',
      },
    },
  ],

  colorTheme: 'red-green',
  icon: '🎄',
};

// ---------------------------------------------------------------------------
// St. Stephen's Day — December 26
// ---------------------------------------------------------------------------

const stStephensDay: HolidayData = {
  id: 'ie_st-stephens-day',
  countryCode: 'ie',
  slugs: { en: 'st-stephens-day', fr: 'saint-etienne', es: 'dia-de-san-esteban' },
  names: { en: "St. Stephen's Day", fr: 'La Saint-Étienne', es: 'El Día de San Esteban' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 26,

  descriptions: {
    en: "St. Stephen's Day on December 26 is a public holiday in Ireland, also known as Wren Day (Lá an Dreoilín). It is marked by the distinctive Irish tradition of the Wren Boys, who go door to door in colourful costumes and masks, singing, dancing, and collecting money for charity.",
    fr: "La Saint-Étienne, le 26 décembre, est un jour férié en Irlande, également connu sous le nom de Jour du Roitelet (Lá an Dreoilín). Il est marqué par la tradition irlandaise distinctive des Wren Boys, qui vont de porte en porte en costumes colorés et masques, chantant, dansant et collectant de l'argent pour des œuvres de charité.",
    es: 'El Día de San Esteban, el 26 de diciembre, es un día festivo en Irlanda, también conocido como el Día del Reyezuelo (Lá an Dreoilín). Se distingue por la tradición irlandesa de los Wren Boys, que van de puerta en puerta con disfraces coloridos y máscaras, cantando, bailando y recogiendo dinero para obras benéficas.',
  },

  history: {
    en: "St. Stephen's Day has been observed in Ireland for centuries. St. Stephen was the first Christian martyr, stoned to death for his faith. In Ireland, the day is uniquely associated with the tradition of the Wren Boys (Wrenboys), which has pre-Christian, Celtic origins.\n\nThe Wren Boy tradition involves groups going from house to house wearing straw suits, masks, and colourful clothing, carrying a pole with a fake wren (historically a real one). They sing the \"Wren Song\" and collect money, traditionally for a community feast. The practice may derive from ancient Samhain or winter solstice rituals.\n\nToday, the tradition survives most strongly in towns like Dingle, County Kerry, where elaborate Wren Day parades attract thousands of participants and spectators. The day is also popular for sporting events, horse racing at Leopardstown, and family visits.",
    fr: "La Saint-Étienne est observée en Irlande depuis des siècles. Saint Étienne fut le premier martyr chrétien, lapidé à mort pour sa foi. En Irlande, la journée est uniquement associée à la tradition des Wren Boys (les garçons du roitelet), qui a des origines préceltiques et celtiques.\n\nLa tradition des Wren Boys consiste en des groupes allant de maison en maison vêtus de costumes de paille, de masques et de vêtements colorés, portant un bâton avec un faux roitelet (historiquement un vrai). Ils chantent la « chanson du roitelet » et collectent de l'argent, traditionnellement pour un festin communautaire. Cette pratique pourrait dériver d'anciens rituels de Samhain ou du solstice d'hiver.\n\nAujourd'hui, la tradition perdure le plus fortement dans des villes comme Dingle, dans le comté de Kerry, où de magnifiques parades du Jour du Roitelet attirent des milliers de participants et de spectateurs. La journée est aussi populaire pour les événements sportifs, les courses hippiques à Leopardstown et les visites familiales.",
    es: "El Día de San Esteban se celebra en Irlanda desde hace siglos. San Esteban fue el primer mártir cristiano, apedreado hasta la muerte por su fe. En Irlanda, el día está singularmente asociado con la tradición de los Wren Boys (los chicos del reyezuelo), que tiene orígenes precristianos y celtas.\n\nLa tradición de los Wren Boys consiste en grupos que van de casa en casa vestidos con trajes de paja, máscaras y ropa colorida, portando un palo con un reyezuelo falso (históricamente uno real). Cantan la «canción del reyezuelo» y recogen dinero, tradicionalmente para un festín comunitario. La práctica puede derivar de antiguos rituales de Samhain o del solsticio de invierno.\n\nHoy, la tradición sobrevive con más fuerza en localidades como Dingle, en el condado de Kerry, donde elaborados desfiles del Día del Reyezuelo atraen a miles de participantes y espectadores. El día también es popular para eventos deportivos, carreras de caballos en Leopardstown y visitas familiares.",
  },

  traditions: {
    en: [
      'The Wren Boys (Wrenboys) going door to door in colourful straw costumes and masks',
      'Singing the traditional "Wren Song" and collecting money for charity',
      'Attending the Wren Day parade in Dingle, County Kerry',
      'Watching horse racing at the Leopardstown Christmas Festival',
      'Visiting family and friends on the second day of Christmas',
      'Enjoying leftovers and cold cuts from the Christmas Day dinner',
      'Attending GAA and soccer matches held on St. Stephen\'s Day',
    ],
    fr: [
      'Les Wren Boys allant de porte en porte en costumes de paille colorés et masques',
      'Chanter la traditionnelle « chanson du roitelet » et collecter de l\'argent pour des œuvres de charité',
      'Assister au défilé du Jour du Roitelet à Dingle, comté de Kerry',
      'Regarder les courses hippiques au festival de Noël de Leopardstown',
      'Rendre visite à la famille et aux amis le deuxième jour de Noël',
      'Déguster les restes et la charcuterie du dîner de Noël',
      'Assister aux matchs de la GAA et de football organisés le jour de la Saint-Étienne',
    ],
    es: [
      'Los Wren Boys yendo de puerta en puerta con coloridos trajes de paja y máscaras',
      'Cantar la tradicional «canción del reyezuelo» y recoger dinero para obras benéficas',
      'Asistir al desfile del Día del Reyezuelo en Dingle, condado de Kerry',
      'Ver las carreras de caballos en el Festival de Navidad de Leopardstown',
      'Visitar a familiares y amigos en el segundo día de Navidad',
      'Disfrutar de las sobras y fiambres de la cena de Navidad',
      'Asistir a partidos de la GAA y fútbol celebrados el Día de San Esteban',
    ],
  },

  funFacts: {
    en: [
      'The Wren Boy tradition may date back over 2,000 years to Celtic winter solstice rituals.',
      'Historically, Wren Boys carried a real dead wren on a pole, but today a fake one is used.',
      'The Dingle Wren Day parade in County Kerry is the largest in Ireland, with thousands of costumed participants.',
      'Leopardstown Racecourse holds its prestigious Christmas Festival starting on St. Stephen\'s Day, attracting over 60,000 racegoers.',
      'In Northern Ireland and the UK, December 26 is called Boxing Day rather than St. Stephen\'s Day.',
    ],
    fr: [
      'La tradition des Wren Boys pourrait remonter à plus de 2 000 ans, aux rituels celtes du solstice d\'hiver.',
      'Historiquement, les Wren Boys portaient un vrai roitelet mort sur un bâton, mais aujourd\'hui on utilise un faux.',
      'Le défilé du Jour du Roitelet à Dingle, dans le comté de Kerry, est le plus grand d\'Irlande, avec des milliers de participants costumés.',
      'L\'hippodrome de Leopardstown organise son prestigieux festival de Noël à partir de la Saint-Étienne, attirant plus de 60 000 amateurs de courses.',
      'En Irlande du Nord et au Royaume-Uni, le 26 décembre est appelé Boxing Day plutôt que Saint-Étienne.',
    ],
    es: [
      'La tradición de los Wren Boys podría remontarse a más de 2.000 años, a los rituales celtas del solsticio de invierno.',
      'Históricamente, los Wren Boys llevaban un reyezuelo real muerto en un palo, pero hoy se usa uno falso.',
      'El desfile del Día del Reyezuelo en Dingle, condado de Kerry, es el más grande de Irlanda, con miles de participantes disfrazados.',
      'El hipódromo de Leopardstown celebra su prestigioso festival navideño a partir del Día de San Esteban, atrayendo a más de 60.000 aficionados a las carreras.',
      'En Irlanda del Norte y el Reino Unido, el 26 de diciembre se llama Boxing Day en lugar de Día de San Esteban.',
    ],
  },

  planningChecklist: {
    en: [
      'Look into Wren Day events and parades in your area, especially in Dingle',
      'Check the Leopardstown Christmas Festival racing schedule and book tickets',
      'Plan visits to family and friends for the second day of Christmas',
      'Prepare for sporting events — GAA and soccer matches are popular',
      'Enjoy a relaxed day with leftovers, games, and family time',
    ],
    fr: [
      'Se renseigner sur les événements et défilés du Jour du Roitelet dans votre région, surtout à Dingle',
      'Consulter le programme du festival de Noël de Leopardstown et réserver des billets',
      'Organiser des visites à la famille et aux amis pour le deuxième jour de Noël',
      'Se préparer aux événements sportifs — les matchs de la GAA et de football sont populaires',
      'Profiter d\'une journée détendue avec les restes, des jeux et du temps en famille',
    ],
    es: [
      'Informarse sobre los eventos y desfiles del Día del Reyezuelo en tu zona, especialmente en Dingle',
      'Consultar el programa del festival navideño de Leopardstown y reservar entradas',
      'Planificar visitas a familiares y amigos para el segundo día de Navidad',
      'Prepararse para eventos deportivos — los partidos de la GAA y de fútbol son populares',
      'Disfrutar de un día relajado con sobras, juegos y tiempo en familia',
    ],
  },

  relatedHolidays: ['ie_christmas', 'ie_st-patricks-day'],

  seo: {
    en: {
      titleTemplate: "St. Stephen's Day {year} Ireland — Countdown & Wren Day Guide",
      descriptionTemplate: "When is St. Stephen's Day {year}? Live countdown to December 26, Wren Day traditions, and things to do in Ireland.",
      keywords: ["St. Stephen's Day Ireland", "Wren Day Ireland", "December 26 Ireland", "Lá an Dreoilín", "St. Stephen's Day traditions"],
    },
    fr: {
      titleTemplate: 'Saint-Étienne {year} Irlande — Compte à rebours et Jour du Roitelet',
      descriptionTemplate: 'Quand est la Saint-Étienne {year} ? Compte à rebours, traditions du Jour du Roitelet et activités en Irlande.',
      keywords: ['Saint-Étienne Irlande', 'Jour du Roitelet', '26 décembre Irlande', 'Lá an Dreoilín', 'traditions Wren Day'],
    },
    es: {
      titleTemplate: 'Día de San Esteban {year} Irlanda — Cuenta regresiva y Día del Reyezuelo',
      descriptionTemplate: '¿Cuándo es el Día de San Esteban {year}? Cuenta regresiva, tradiciones del Día del Reyezuelo y planes en Irlanda.',
      keywords: ['Día de San Esteban Irlanda', 'Día del Reyezuelo', '26 de diciembre Irlanda', 'Lá an Dreoilín', 'tradiciones Wren Day'],
    },
  },

  faq: [
    {
      question: {
        en: "When is St. Stephen's Day {year} in Ireland?",
        fr: 'Quand est la Saint-Étienne {year} en Irlande ?',
        es: '¿Cuándo es el Día de San Esteban {year} en Irlanda?',
      },
      answer: {
        en: "St. Stephen's Day {year} is on {date} ({dayOfWeek}). It is always December 26 and is a public holiday in Ireland.",
        fr: "La Saint-Étienne {year} est le {date} ({dayOfWeek}). C'est toujours le 26 décembre et c'est un jour férié en Irlande.",
        es: 'El Día de San Esteban {year} es el {date} ({dayOfWeek}). Siempre es el 26 de diciembre y es un día festivo en Irlanda.',
      },
    },
    {
      question: {
        en: 'What are the Wren Boys?',
        fr: 'Qui sont les Wren Boys ?',
        es: '¿Quiénes son los Wren Boys?',
      },
      answer: {
        en: "The Wren Boys (Wrenboys) are groups of people who go door to door on St. Stephen's Day wearing straw costumes, masks, and colourful clothing. They sing the traditional Wren Song, play music, dance, and collect money for charity. The tradition has Celtic origins and survives most strongly in Dingle, County Kerry.",
        fr: "Les Wren Boys sont des groupes de personnes qui vont de porte en porte le jour de la Saint-Étienne, vêtus de costumes de paille, de masques et de vêtements colorés. Ils chantent la chanson traditionnelle du roitelet, jouent de la musique, dansent et collectent de l'argent pour des œuvres caritatives. La tradition a des origines celtiques et perdure surtout à Dingle, dans le comté de Kerry.",
        es: 'Los Wren Boys son grupos de personas que van de puerta en puerta el Día de San Esteban vestidos con trajes de paja, máscaras y ropa colorida. Cantan la canción tradicional del reyezuelo, tocan música, bailan y recogen dinero para obras benéficas. La tradición tiene orígenes celtas y sobrevive con más fuerza en Dingle, condado de Kerry.',
      },
    },
    {
      question: {
        en: "Is St. Stephen's Day the same as Boxing Day?",
        fr: "La Saint-Étienne est-elle la même chose que le Boxing Day ?",
        es: '¿Es el Día de San Esteban lo mismo que el Boxing Day?',
      },
      answer: {
        en: "Both fall on December 26, but they have different origins and traditions. St. Stephen's Day in Ireland is associated with the Wren Boy tradition, while Boxing Day in the UK is linked to the custom of giving \"Christmas boxes\" to servants and tradespeople.",
        fr: "Les deux tombent le 26 décembre, mais ils ont des origines et des traditions différentes. La Saint-Étienne en Irlande est associée à la tradition du Jour du Roitelet, tandis que le Boxing Day au Royaume-Uni est lié à la coutume de donner des « boîtes de Noël » aux serviteurs et aux commerçants.",
        es: 'Ambos caen el 26 de diciembre, pero tienen orígenes y tradiciones diferentes. El Día de San Esteban en Irlanda está asociado con la tradición del Día del Reyezuelo, mientras que el Boxing Day en el Reino Unido está vinculado a la costumbre de dar "cajas de Navidad" a los sirvientes y comerciantes.',
      },
    },
    {
      question: {
        en: 'What sporting events take place on St. Stephen\'s Day in Ireland?',
        fr: "Quels événements sportifs ont lieu le jour de la Saint-Étienne en Irlande ?",
        es: '¿Qué eventos deportivos se celebran el Día de San Esteban en Irlanda?',
      },
      answer: {
        en: "The Leopardstown Christmas Festival, one of Ireland's premier horse racing events, begins on St. Stephen's Day. GAA inter-county challenge matches and League of Ireland soccer fixtures are also popular sporting draws.",
        fr: "Le festival de Noël de Leopardstown, l'un des principaux événements hippiques d'Irlande, commence le jour de la Saint-Étienne. Les matchs inter-comtés de la GAA et les rencontres de la Ligue d'Irlande de football sont également des attractions sportives populaires.",
        es: "El Festival de Navidad de Leopardstown, uno de los principales eventos hípicos de Irlanda, comienza el Día de San Esteban. Los partidos inter-condados de la GAA y los encuentros de la Liga de Irlanda de fútbol también son populares atracciones deportivas.",
      },
    },
  ],

  colorTheme: 'red-gold',
  icon: '🐦',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const ieHolidays: HolidayData[] = [
  stPatricksDay,
  easterMonday,
  juneBankHoliday,
  octoberBankHoliday,
  christmasDay,
  stStephensDay,
];

export default ieHolidays;
