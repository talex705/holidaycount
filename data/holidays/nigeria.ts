/**
 * Nigeria holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getEidAlFitrDate, getEidAlAdhaDate } from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'ng_new-years-day',
  countryCode: 'ng',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'ano-nuevo' },
  names: { en: "New Year's Day", fr: 'Jour de l\'An', es: 'Día de Año Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 marks the beginning of the calendar year in Nigeria. It is a national public holiday celebrated with church services, parties, fireworks, and family gatherings across the country.",
    fr: "Le Jour de l'An, le 1er janvier, marque le début de l'année civile au Nigeria. C'est un jour férié national célébré par des services religieux, des fêtes, des feux d'artifice et des réunions familiales à travers le pays.",
    es: 'El Día de Año Nuevo, el 1 de enero, marca el comienzo del año calendario en Nigeria. Es un día festivo nacional celebrado con servicios religiosos, fiestas, fuegos artificiales y reuniones familiares en todo el país.',
  },

  history: {
    en: "New Year's Day has been observed as a public holiday in Nigeria since independence in 1960. Nigerians typically attend crossover night church services on December 31, staying until midnight to pray and celebrate the arrival of the new year. In major cities like Lagos, Abuja, and Port Harcourt, fireworks and outdoor parties light up the night.\n\nThe holiday reflects Nigeria's blend of religious devotion and festive spirit, with both Christians and Muslims joining in the celebrations. Many Nigerians use the day to visit family, exchange New Year greetings, and share meals together.",
    fr: "Le Jour de l'An est observé comme jour férié au Nigeria depuis l'indépendance en 1960. Les Nigérians assistent généralement à des veillées de prière le 31 décembre, restant jusqu'à minuit pour prier et célébrer l'arrivée de la nouvelle année. Dans les grandes villes comme Lagos, Abuja et Port Harcourt, des feux d'artifice et des fêtes en plein air illuminent la nuit.\n\nCette fête reflète le mélange nigérian de dévotion religieuse et d'esprit festif, les chrétiens et les musulmans se joignant aux célébrations. De nombreux Nigérians profitent de ce jour pour rendre visite à leur famille, échanger des vœux et partager des repas ensemble.",
    es: "El Día de Año Nuevo se ha observado como día festivo en Nigeria desde la independencia en 1960. Los nigerianos suelen asistir a servicios religiosos de fin de año el 31 de diciembre, permaneciendo hasta la medianoche para orar y celebrar la llegada del nuevo año. En las principales ciudades como Lagos, Abuja y Port Harcourt, los fuegos artificiales y las fiestas al aire libre iluminan la noche.\n\nLa festividad refleja la mezcla nigeriana de devoción religiosa y espíritu festivo, con cristianos y musulmanes uniéndose a las celebraciones. Muchos nigerianos aprovechan el día para visitar a la familia, intercambiar saludos de Año Nuevo y compartir comidas juntos.",
  },

  traditions: {
    en: [
      'Attending crossover night church services on December 31',
      'Watching fireworks displays in Lagos, Abuja, and other major cities',
      'Visiting family and friends to exchange New Year greetings',
      'Preparing special meals including jollof rice, fried rice, and pounded yam',
      'Wearing new clothes to mark the fresh start of the year',
      'Hosting and attending outdoor parties and concerts',
    ],
    fr: [
      'Assister aux veillées de prière du 31 décembre',
      "Regarder les feux d'artifice à Lagos, Abuja et dans d'autres grandes villes",
      'Rendre visite à la famille et aux amis pour échanger des vœux',
      'Préparer des repas spéciaux comme le riz jollof, le riz frit et l\'igname pilée',
      "Porter de nouveaux vêtements pour marquer le début de l'année",
      'Organiser et assister à des fêtes et concerts en plein air',
    ],
    es: [
      'Asistir a servicios religiosos de fin de año el 31 de diciembre',
      'Ver fuegos artificiales en Lagos, Abuja y otras ciudades importantes',
      'Visitar a familiares y amigos para intercambiar saludos de Año Nuevo',
      'Preparar comidas especiales como arroz jollof, arroz frito y ñame machacado',
      'Estrenar ropa nueva para marcar el comienzo del año',
      'Organizar y asistir a fiestas y conciertos al aire libre',
    ],
  },

  funFacts: {
    en: [
      'Nigerian crossover night church services are among the most attended religious gatherings in the world on New Year\'s Eve.',
      'Lagos is one of the most vibrant cities in Africa for New Year celebrations, with fireworks visible across the lagoon.',
      'Many Nigerians believe the first person to visit your home on New Year\'s Day sets the tone for the entire year.',
      "Jollof rice, the beloved West African dish, is a must-have at nearly every Nigerian New Year's celebration.",
      'Some Nigerian families fire \"knockouts\" (bangers) and light fireworks in their neighbourhoods at midnight.',
    ],
    fr: [
      'Les veillées de prière nigérianes sont parmi les rassemblements religieux les plus fréquentés au monde la nuit du Nouvel An.',
      "Lagos est l'une des villes les plus vibrantes d'Afrique pour les célébrations du Nouvel An, avec des feux d'artifice visibles à travers la lagune.",
      "Beaucoup de Nigérians croient que la première personne à visiter votre maison le Jour de l'An donne le ton pour toute l'année.",
      "Le riz jollof, le plat bien-aimé d'Afrique de l'Ouest, est incontournable lors de presque toutes les célébrations du Nouvel An nigérian.",
      'Certaines familles nigérianes allument des pétards et des feux d\'artifice dans leurs quartiers à minuit.',
    ],
    es: [
      'Los servicios religiosos de fin de año en Nigeria son de los eventos religiosos más concurridos del mundo en Nochevieja.',
      'Lagos es una de las ciudades más vibrantes de África para las celebraciones de Año Nuevo, con fuegos artificiales visibles a través de la laguna.',
      'Muchos nigerianos creen que la primera persona que visite tu casa en Año Nuevo marca el tono para todo el año.',
      'El arroz jollof, el querido plato de África Occidental, es imprescindible en casi todas las celebraciones de Año Nuevo en Nigeria.',
      'Algunas familias nigerianas lanzan petardos y fuegos artificiales en sus vecindarios a medianoche.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan your crossover night church service or party venue in advance',
      'Stock up on fireworks, bangers, and sparklers for the midnight celebration',
      'Prepare ingredients for New Year\'s Day meals — jollof rice, fried rice, chicken, and drinks',
      'Buy new outfits for the family to wear on New Year\'s Day',
      'Arrange visits to family and friends for January 1',
    ],
    fr: [
      'Planifier votre veillée de prière ou votre lieu de fête à l\'avance',
      "S'approvisionner en feux d'artifice et pétards pour la célébration de minuit",
      'Préparer les ingrédients pour les repas du Jour de l\'An — riz jollof, riz frit, poulet et boissons',
      'Acheter de nouvelles tenues pour la famille à porter le Jour de l\'An',
      'Organiser les visites chez la famille et les amis pour le 1er janvier',
    ],
    es: [
      'Planificar tu servicio religioso de fin de año o lugar de fiesta con anticipación',
      'Abastecerse de fuegos artificiales y petardos para la celebración de medianoche',
      'Preparar los ingredientes para las comidas de Año Nuevo — arroz jollof, arroz frito, pollo y bebidas',
      'Comprar ropa nueva para que la familia estrene el Día de Año Nuevo',
      'Organizar visitas a familiares y amigos para el 1 de enero',
    ],
  },

  relatedHolidays: ['ng_christmas', 'ng_independence-day'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Nigeria — Countdown & Celebration Guide",
      descriptionTemplate: "When is New Year's Day {year} in Nigeria? Live countdown to January 1, holiday info, and celebration guide.",
      keywords: ["New Year's Day Nigeria", 'January 1 Nigeria', 'Nigerian New Year', "New Year's Day countdown", 'Nigeria public holidays'],
    },
    fr: {
      titleTemplate: 'Jour de l\'An {year} Nigeria — Compte à rebours et guide',
      descriptionTemplate: "Quand est le Jour de l'An {year} au Nigeria ? Compte à rebours, informations sur le jour férié et guide de célébration.",
      keywords: ['Jour de l\'An Nigeria', '1er janvier Nigeria', 'Nouvel An nigérian', 'compte à rebours Nouvel An', 'jours fériés Nigeria'],
    },
    es: {
      titleTemplate: 'Día de Año Nuevo {year} Nigeria — Cuenta regresiva y guía',
      descriptionTemplate: 'Cuándo es el Día de Año Nuevo {year} en Nigeria? Cuenta regresiva, información del día festivo y guía de celebración.',
      keywords: ['Año Nuevo Nigeria', '1 de enero Nigeria', 'Año Nuevo nigeriano', 'cuenta regresiva Año Nuevo', 'días festivos Nigeria'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in Nigeria?", fr: "Quand est le Jour de l'An {year} au Nigeria ?", es: '¿Cuándo es el Día de Año Nuevo {year} en Nigeria?' },
      answer: {
        en: "New Year's Day {year} in Nigeria is on {date}. It is always January 1 and is a national public holiday.",
        fr: "Le Jour de l'An {year} au Nigeria est le {date}. C'est toujours le 1er janvier et c'est un jour férié national.",
        es: 'El Día de Año Nuevo {year} en Nigeria es el {date}. Siempre es el 1 de enero y es un día festivo nacional.',
      },
    },
    {
      question: { en: 'What is a crossover night service in Nigeria?', fr: "Qu'est-ce qu'une veillée de prière au Nigeria ?", es: '¿Qué es un servicio de fin de año en Nigeria?' },
      answer: {
        en: 'A crossover night service is a church gathering held on the evening of December 31 that continues past midnight into January 1. Millions of Nigerians attend these services to pray, worship, and welcome the new year together.',
        fr: "Une veillée de prière est un rassemblement religieux tenu le soir du 31 décembre qui se poursuit après minuit jusqu'au 1er janvier. Des millions de Nigérians assistent à ces services pour prier, adorer et accueillir la nouvelle année ensemble.",
        es: 'Un servicio de fin de año es una reunión religiosa que se celebra la noche del 31 de diciembre y continúa pasada la medianoche hasta el 1 de enero. Millones de nigerianos asisten a estos servicios para orar, adorar y dar la bienvenida al nuevo año juntos.',
      },
    },
    {
      question: { en: "Is New Year's Day a public holiday in Nigeria?", fr: "Le Jour de l'An est-il un jour férié au Nigeria ?", es: '¿Es el Día de Año Nuevo un día festivo en Nigeria?' },
      answer: {
        en: "Yes, New Year's Day is an official public holiday in Nigeria. Banks, government offices, and most businesses are closed.",
        fr: "Oui, le Jour de l'An est un jour férié officiel au Nigeria. Les banques, les bureaux gouvernementaux et la plupart des entreprises sont fermés.",
        es: 'Sí, el Día de Año Nuevo es un día festivo oficial en Nigeria. Los bancos, las oficinas gubernamentales y la mayoría de los negocios están cerrados.',
      },
    },
    {
      question: { en: 'How do Nigerians celebrate New Year?', fr: 'Comment les Nigérians célèbrent-ils le Nouvel An ?', es: '¿Cómo celebran los nigerianos el Año Nuevo?' },
      answer: {
        en: "Nigerians celebrate with crossover night church services, fireworks, outdoor parties, and family gatherings. On New Year's Day, families visit each other, share meals featuring jollof rice and other dishes, and wear new clothes.",
        fr: "Les Nigérians célèbrent avec des veillées de prière, des feux d'artifice, des fêtes en plein air et des réunions familiales. Le Jour de l'An, les familles se rendent visite, partagent des repas avec du riz jollof et d'autres plats, et portent de nouveaux vêtements.",
        es: 'Los nigerianos celebran con servicios religiosos de fin de año, fuegos artificiales, fiestas al aire libre y reuniones familiares. El Día de Año Nuevo, las familias se visitan mutuamente, comparten comidas con arroz jollof y otros platos, y estrenan ropa nueva.',
      },
    },
  ],

  colorTheme: 'gold-black',
  icon: '\ud83c\udf86',
};

// ---------------------------------------------------------------------------
// Democracy Day — June 12
// ---------------------------------------------------------------------------

const democracyDay: HolidayData = {
  id: 'ng_democracy-day',
  countryCode: 'ng',
  slugs: { en: 'democracy-day', fr: 'jour-de-la-democratie', es: 'dia-de-la-democracia' },
  names: { en: 'Democracy Day', fr: 'Jour de la Démocratie', es: 'Día de la Democracia' },

  dateType: 'fixed',
  fixedMonth: 6,
  fixedDay: 12,

  descriptions: {
    en: 'Democracy Day on June 12 is a national public holiday in Nigeria commemorating the historic June 12, 1993 presidential election, widely regarded as the freest and fairest in Nigerian history. It celebrates democratic governance and the struggle for its restoration.',
    fr: "Le Jour de la Démocratie, le 12 juin, est un jour férié national au Nigeria commémorant l'élection présidentielle historique du 12 juin 1993, largement considérée comme la plus libre et la plus équitable de l'histoire du Nigeria. Il célèbre la gouvernance démocratique et la lutte pour sa restauration.",
    es: 'El Día de la Democracia, el 12 de junio, es un día festivo nacional en Nigeria que conmemora la histórica elección presidencial del 12 de junio de 1993, ampliamente considerada como la más libre y justa en la historia de Nigeria. Celebra la gobernanza democrática y la lucha por su restauración.',
  },

  history: {
    en: "The June 12, 1993 presidential election was won by Moshood Kashimawo Olawale Abiola, a Yoruba businessman and philanthropist, in what is considered the most free and fair election in Nigerian history. However, the military government of General Ibrahim Babangida annulled the results, plunging Nigeria into political crisis.\n\nAbiola declared himself president in 1994 and was arrested by the subsequent military ruler, General Sani Abacha. Abiola died in detention on July 7, 1998, just as he was about to be released. The annulled election became a symbol of the Nigerian people's fight for democracy.\n\nDemocracy Day was originally observed on May 29, the date when civilian rule was restored in 1999. In 2018, President Muhammadu Buhari moved the holiday to June 12 to honour the significance of the 1993 election and posthumously awarded Abiola the Grand Commander of the Federal Republic, Nigeria's highest national honour.",
    fr: "L'élection présidentielle du 12 juin 1993 a été remportée par Moshood Kashimawo Olawale Abiola, un homme d'affaires et philanthrope yoruba, dans ce qui est considéré comme l'élection la plus libre et équitable de l'histoire du Nigeria. Cependant, le gouvernement militaire du général Ibrahim Babangida a annulé les résultats, plongeant le Nigeria dans une crise politique.\n\nAbiola s'est proclamé président en 1994 et a été arrêté par le dirigeant militaire suivant, le général Sani Abacha. Abiola est décédé en détention le 7 juillet 1998, alors qu'il était sur le point d'être libéré. L'élection annulée est devenue un symbole de la lutte du peuple nigérian pour la démocratie.\n\nLe Jour de la Démocratie était initialement célébré le 29 mai, date à laquelle le pouvoir civil a été restauré en 1999. En 2018, le président Muhammadu Buhari a déplacé le jour férié au 12 juin pour honorer l'importance de l'élection de 1993 et a décerné à titre posthume à Abiola le Grand Commandeur de la République Fédérale, la plus haute distinction nationale du Nigeria.",
    es: "La elección presidencial del 12 de junio de 1993 fue ganada por Moshood Kashimawo Olawale Abiola, un empresario y filántropo yoruba, en lo que se considera la elección más libre y justa en la historia de Nigeria. Sin embargo, el gobierno militar del general Ibrahim Babangida anuló los resultados, sumiendo a Nigeria en una crisis política.\n\nAbiola se proclamó presidente en 1994 y fue arrestado por el siguiente gobernante militar, el general Sani Abacha. Abiola falleció en detención el 7 de julio de 1998, justo cuando estaba a punto de ser liberado. La elección anulada se convirtió en un símbolo de la lucha del pueblo nigeriano por la democracia.\n\nEl Día de la Democracia se observaba originalmente el 29 de mayo, fecha en que se restauró el gobierno civil en 1999. En 2018, el presidente Muhammadu Buhari trasladó el día festivo al 12 de junio para honrar la importancia de la elección de 1993 y otorgó póstumamente a Abiola el Gran Comendador de la República Federal, la más alta distinción nacional de Nigeria.",
  },

  traditions: {
    en: [
      'Presidential address to the nation broadcast on television and radio',
      'Military parades and flag-raising ceremonies at Eagle Square in Abuja',
      'Cultural displays showcasing Nigeria\'s diverse ethnic groups',
      'Public lectures and symposiums on democracy and governance',
      'Community gatherings and celebrations across the 36 states',
      'Laying wreaths in honour of pro-democracy heroes',
    ],
    fr: [
      'Discours présidentiel à la nation diffusé à la télévision et à la radio',
      "Défilés militaires et cérémonies de lever du drapeau à Eagle Square à Abuja",
      'Spectacles culturels présentant les divers groupes ethniques du Nigeria',
      'Conférences publiques et symposiums sur la démocratie et la gouvernance',
      'Rassemblements communautaires et célébrations à travers les 36 États',
      'Dépôt de gerbes en l\'honneur des héros de la démocratie',
    ],
    es: [
      'Discurso presidencial a la nación transmitido por televisión y radio',
      'Desfiles militares y ceremonias de izado de bandera en Eagle Square en Abuja',
      'Exhibiciones culturales que muestran los diversos grupos étnicos de Nigeria',
      'Conferencias públicas y simposios sobre democracia y gobernanza',
      'Reuniones comunitarias y celebraciones en los 36 estados',
      'Ofrenda de coronas en honor a los héroes de la democracia',
    ],
  },

  funFacts: {
    en: [
      'The June 12, 1993 election was remarkable because Abiola, a southern Muslim, won overwhelmingly even in the northern states, crossing ethnic and religious lines.',
      'Democracy Day was moved from May 29 to June 12 in 2018, surprising many Nigerians with the sudden announcement.',
      'MKO Abiola was posthumously awarded the Grand Commander of the Federal Republic (GCFR) in 2018 — 25 years after his election victory.',
      'Nigeria is the most populous democracy in Africa, with over 200 million people.',
      'The June 12 struggle inspired an entire generation of Nigerian civil rights activists and pro-democracy movements.',
    ],
    fr: [
      "L'élection du 12 juin 1993 était remarquable car Abiola, un musulman du sud, a remporté une victoire écrasante même dans les États du nord, transcendant les lignes ethniques et religieuses.",
      'Le Jour de la Démocratie a été déplacé du 29 mai au 12 juin en 2018, surprenant de nombreux Nigérians par cette annonce soudaine.',
      'MKO Abiola a reçu à titre posthume le Grand Commandeur de la République Fédérale (GCFR) en 2018 — 25 ans après sa victoire électorale.',
      "Le Nigeria est la démocratie la plus peuplée d'Afrique, avec plus de 200 millions d'habitants.",
      "La lutte du 12 juin a inspiré toute une génération de militants des droits civiques et de mouvements pro-démocratie au Nigeria.",
    ],
    es: [
      'La elección del 12 de junio de 1993 fue notable porque Abiola, un musulmán del sur, ganó abrumadoramente incluso en los estados del norte, cruzando líneas étnicas y religiosas.',
      'El Día de la Democracia se trasladó del 29 de mayo al 12 de junio en 2018, sorprendiendo a muchos nigerianos con el anuncio repentino.',
      'MKO Abiola recibió póstumamente el Gran Comendador de la República Federal (GCFR) en 2018 — 25 años después de su victoria electoral.',
      'Nigeria es la democracia más poblada de África, con más de 200 millones de personas.',
      'La lucha del 12 de junio inspiró a toda una generación de activistas de derechos civiles y movimientos pro-democracia en Nigeria.',
    ],
  },

  planningChecklist: {
    en: [
      'Watch the presidential Democracy Day address on television or online',
      'Attend local parades and cultural events in your city',
      'Learn about the history of the June 12 election and MKO Abiola',
      'Participate in community discussions about democracy and governance',
      'Display the Nigerian flag at home or on your vehicle',
    ],
    fr: [
      'Regarder le discours présidentiel du Jour de la Démocratie à la télévision ou en ligne',
      'Assister aux défilés locaux et événements culturels dans votre ville',
      "Se renseigner sur l'histoire de l'élection du 12 juin et de MKO Abiola",
      'Participer aux discussions communautaires sur la démocratie et la gouvernance',
      'Afficher le drapeau nigérian chez soi ou sur son véhicule',
    ],
    es: [
      'Ver el discurso presidencial del Día de la Democracia en televisión o en línea',
      'Asistir a desfiles locales y eventos culturales en tu ciudad',
      'Aprender sobre la historia de la elección del 12 de junio y MKO Abiola',
      'Participar en discusiones comunitarias sobre democracia y gobernanza',
      'Exhibir la bandera nigeriana en casa o en tu vehículo',
    ],
  },

  relatedHolidays: ['ng_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Democracy Day {year} Nigeria — June 12 Countdown & History',
      descriptionTemplate: 'When is Democracy Day {year} in Nigeria? Live countdown to June 12, history of the June 12 election, and celebration guide.',
      keywords: ['Democracy Day Nigeria', 'June 12 Nigeria', 'MKO Abiola', 'Nigeria Democracy Day countdown', 'Nigerian public holidays'],
    },
    fr: {
      titleTemplate: 'Jour de la Démocratie {year} Nigeria — Compte à rebours du 12 juin',
      descriptionTemplate: "Quand est le Jour de la Démocratie {year} au Nigeria ? Compte à rebours jusqu'au 12 juin, histoire de l'élection et guide de célébration.",
      keywords: ['Jour de la Démocratie Nigeria', '12 juin Nigeria', 'MKO Abiola', 'démocratie nigériane', 'jours fériés Nigeria'],
    },
    es: {
      titleTemplate: 'Día de la Democracia {year} Nigeria — Cuenta regresiva del 12 de junio',
      descriptionTemplate: '¿Cuándo es el Día de la Democracia {year} en Nigeria? Cuenta regresiva hasta el 12 de junio, historia de la elección y guía de celebración.',
      keywords: ['Día de la Democracia Nigeria', '12 de junio Nigeria', 'MKO Abiola', 'democracia nigeriana', 'días festivos Nigeria'],
    },
  },

  faq: [
    {
      question: { en: 'When is Democracy Day {year} in Nigeria?', fr: 'Quand est le Jour de la Démocratie {year} au Nigeria ?', es: '¿Cuándo es el Día de la Democracia {year} en Nigeria?' },
      answer: {
        en: 'Democracy Day {year} in Nigeria falls on {date}. It is always June 12, commemorating the historic 1993 presidential election.',
        fr: "Le Jour de la Démocratie {year} au Nigeria tombe le {date}. C'est toujours le 12 juin, commémorant l'élection présidentielle historique de 1993.",
        es: 'El Día de la Democracia {year} en Nigeria cae el {date}. Siempre es el 12 de junio, conmemorando la histórica elección presidencial de 1993.',
      },
    },
    {
      question: { en: 'Why was Democracy Day moved from May 29 to June 12?', fr: 'Pourquoi le Jour de la Démocratie a-t-il été déplacé du 29 mai au 12 juin ?', es: '¿Por qué se trasladó el Día de la Democracia del 29 de mayo al 12 de junio?' },
      answer: {
        en: 'President Muhammadu Buhari moved Democracy Day to June 12 in 2018 to honour the significance of the June 12, 1993 presidential election won by MKO Abiola, which was annulled by the military government.',
        fr: "Le président Muhammadu Buhari a déplacé le Jour de la Démocratie au 12 juin en 2018 pour honorer l'importance de l'élection présidentielle du 12 juin 1993 remportée par MKO Abiola, qui a été annulée par le gouvernement militaire.",
        es: 'El presidente Muhammadu Buhari trasladó el Día de la Democracia al 12 de junio en 2018 para honrar la importancia de la elección presidencial del 12 de junio de 1993 ganada por MKO Abiola, que fue anulada por el gobierno militar.',
      },
    },
    {
      question: { en: 'Who was MKO Abiola?', fr: 'Qui était MKO Abiola ?', es: '¿Quién fue MKO Abiola?' },
      answer: {
        en: 'Moshood Kashimawo Olawale (MKO) Abiola was a Yoruba businessman, publisher, and philanthropist who won the June 12, 1993 presidential election. The results were annulled, and he was later arrested and died in detention in 1998. He was posthumously honoured with Nigeria\'s highest national award in 2018.',
        fr: "Moshood Kashimawo Olawale (MKO) Abiola était un homme d'affaires, éditeur et philanthrope yoruba qui a remporté l'élection présidentielle du 12 juin 1993. Les résultats ont été annulés, et il a été arrêté puis est décédé en détention en 1998. Il a été honoré à titre posthume avec la plus haute distinction nationale du Nigeria en 2018.",
        es: 'Moshood Kashimawo Olawale (MKO) Abiola fue un empresario, editor y filántropo yoruba que ganó la elección presidencial del 12 de junio de 1993. Los resultados fueron anulados, y fue arrestado y falleció en detención en 1998. Fue honrado póstumamente con la más alta distinción nacional de Nigeria en 2018.',
      },
    },
    {
      question: { en: 'Is Democracy Day a public holiday in Nigeria?', fr: 'Le Jour de la Démocratie est-il un jour férié au Nigeria ?', es: '¿Es el Día de la Democracia un día festivo en Nigeria?' },
      answer: {
        en: 'Yes, Democracy Day on June 12 is an official national public holiday in Nigeria. Banks, schools, government offices, and most businesses are closed.',
        fr: "Oui, le Jour de la Démocratie le 12 juin est un jour férié national officiel au Nigeria. Les banques, les écoles, les bureaux gouvernementaux et la plupart des entreprises sont fermés.",
        es: 'Sí, el Día de la Democracia el 12 de junio es un día festivo nacional oficial en Nigeria. Los bancos, escuelas, oficinas gubernamentales y la mayoría de los negocios están cerrados.',
      },
    },
  ],

  colorTheme: 'green-white',
  icon: '\ud83c\uddf3\ud83c\uddec',
};

// ---------------------------------------------------------------------------
// Independence Day — October 1
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'ng_independence-day',
  countryCode: 'ng',
  slugs: { en: 'independence-day', fr: 'jour-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Jour de l'Indépendance", es: 'Día de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 10,
  fixedDay: 1,

  descriptions: {
    en: "Independence Day on October 1 is Nigeria's most important national holiday, celebrating the country's independence from British colonial rule on October 1, 1960. It is marked by parades, flag-raising ceremonies, cultural displays, and presidential addresses.",
    fr: "Le Jour de l'Indépendance, le 1er octobre, est le jour férié national le plus important du Nigeria, célébrant l'indépendance du pays de la domination coloniale britannique le 1er octobre 1960. Il est marqué par des défilés, des cérémonies de lever du drapeau, des spectacles culturels et des discours présidentiels.",
    es: 'El Día de la Independencia, el 1 de octubre, es el día festivo nacional más importante de Nigeria, celebrando la independencia del país del dominio colonial británico el 1 de octubre de 1960. Se celebra con desfiles, ceremonias de izado de bandera, exhibiciones culturales y discursos presidenciales.',
  },

  history: {
    en: "Nigeria gained independence from the United Kingdom on October 1, 1960, becoming a sovereign state after nearly a century of British colonial rule. The independence was the culmination of decades of nationalist movements led by figures such as Nnamdi Azikiwe, Obafemi Awolowo, and Ahmadu Bello.\n\nAt midnight on October 1, 1960, the British flag was lowered and the green-white-green Nigerian flag was raised for the first time at the Tafawa Balewa Square in Lagos. Sir Abubakar Tafawa Balewa became the first Prime Minister, while Nnamdi Azikiwe served as Governor-General.\n\nNigeria became a republic on October 1, 1963, replacing the Queen as head of state with a Nigerian president. Today, October 1 remains the country's most significant national celebration, honouring the sacrifices and aspirations of the founding fathers.",
    fr: "Le Nigeria a obtenu son indépendance du Royaume-Uni le 1er octobre 1960, devenant un État souverain après près d'un siècle de domination coloniale britannique. L'indépendance a été l'aboutissement de décennies de mouvements nationalistes menés par des figures telles que Nnamdi Azikiwe, Obafemi Awolowo et Ahmadu Bello.\n\nÀ minuit le 1er octobre 1960, le drapeau britannique a été abaissé et le drapeau nigérian vert-blanc-vert a été hissé pour la première fois à Tafawa Balewa Square à Lagos. Sir Abubakar Tafawa Balewa est devenu le premier Premier ministre, tandis que Nnamdi Azikiwe a servi comme Gouverneur général.\n\nLe Nigeria est devenu une république le 1er octobre 1963, remplaçant la Reine comme chef d'État par un président nigérian. Aujourd'hui, le 1er octobre reste la célébration nationale la plus importante du pays, honorant les sacrifices et les aspirations des pères fondateurs.",
    es: "Nigeria obtuvo su independencia del Reino Unido el 1 de octubre de 1960, convirtiéndose en un estado soberano después de casi un siglo de dominio colonial británico. La independencia fue la culminación de décadas de movimientos nacionalistas liderados por figuras como Nnamdi Azikiwe, Obafemi Awolowo y Ahmadu Bello.\n\nA la medianoche del 1 de octubre de 1960, la bandera británica fue arriada y la bandera nigeriana verde-blanco-verde fue izada por primera vez en Tafawa Balewa Square en Lagos. Sir Abubakar Tafawa Balewa se convirtió en el primer Primer Ministro, mientras que Nnamdi Azikiwe sirvió como Gobernador General.\n\nNigeria se convirtió en república el 1 de octubre de 1963, reemplazando a la Reina como jefa de estado con un presidente nigeriano. Hoy, el 1 de octubre sigue siendo la celebración nacional más importante del país, honrando los sacrificios y aspiraciones de los padres fundadores.",
  },

  traditions: {
    en: [
      'Presidential address to the nation broadcast on October 1',
      'Military parades and march-past at Eagle Square in Abuja',
      'Flag-raising ceremonies in all 36 states and the Federal Capital Territory',
      'Cultural displays featuring traditional dances from Nigeria\'s diverse ethnic groups',
      'School debates, essay competitions, and quiz contests on Nigerian history',
      'Green-white-green decorations and Nigerian flag displays across the country',
      'Fireworks and cultural festivals in major cities',
    ],
    fr: [
      'Discours présidentiel à la nation diffusé le 1er octobre',
      "Défilés militaires et marches à Eagle Square à Abuja",
      'Cérémonies de lever du drapeau dans les 36 États et le Territoire de la Capitale Fédérale',
      'Spectacles culturels présentant des danses traditionnelles des divers groupes ethniques du Nigeria',
      "Débats scolaires, concours de rédaction et quiz sur l'histoire du Nigeria",
      'Décorations vert-blanc-vert et drapeaux nigérians à travers le pays',
      "Feux d'artifice et festivals culturels dans les grandes villes",
    ],
    es: [
      'Discurso presidencial a la nación transmitido el 1 de octubre',
      'Desfiles militares y marchas en Eagle Square en Abuja',
      'Ceremonias de izado de bandera en los 36 estados y el Territorio de la Capital Federal',
      'Exhibiciones culturales con danzas tradicionales de los diversos grupos étnicos de Nigeria',
      'Debates escolares, concursos de ensayos y cuestionarios sobre la historia de Nigeria',
      'Decoraciones verde-blanco-verde y exhibiciones de la bandera nigeriana en todo el país',
      'Fuegos artificiales y festivales culturales en las principales ciudades',
    ],
  },

  funFacts: {
    en: [
      'Nigeria is often called the "Giant of Africa" because it is the most populous country on the continent with over 200 million people.',
      'The Nigerian flag was designed by Michael Taiwo Akinkunmi, a 23-year-old student, who won a national competition in 1959.',
      'Nigeria has over 250 ethnic groups and more than 500 languages, making it one of the most linguistically diverse countries in the world.',
      "The first Nigerian national anthem, \"Nigeria, We Hail Thee,\" was replaced in 1978 by \"Arise, O Compatriots\" and then restored in 2024.",
      "Lagos, Nigeria's largest city, was the capital at independence and remained so until Abuja became the capital in 1991.",
    ],
    fr: [
      "Le Nigeria est souvent appelé le « Géant de l'Afrique » car c'est le pays le plus peuplé du continent avec plus de 200 millions d'habitants.",
      'Le drapeau nigérian a été conçu par Michael Taiwo Akinkunmi, un étudiant de 23 ans, qui a remporté un concours national en 1959.',
      "Le Nigeria compte plus de 250 groupes ethniques et plus de 500 langues, ce qui en fait l'un des pays les plus diversifiés linguistiquement au monde.",
      'Le premier hymne national nigérian, « Nigeria, We Hail Thee », a été remplacé en 1978 par « Arise, O Compatriots » puis restauré en 2024.',
      "Lagos, la plus grande ville du Nigeria, était la capitale à l'indépendance et l'est restée jusqu'à ce qu'Abuja devienne la capitale en 1991.",
    ],
    es: [
      'Nigeria es a menudo llamada el "Gigante de África" porque es el país más poblado del continente con más de 200 millones de personas.',
      'La bandera nigeriana fue diseñada por Michael Taiwo Akinkunmi, un estudiante de 23 años, que ganó un concurso nacional en 1959.',
      'Nigeria tiene más de 250 grupos étnicos y más de 500 idiomas, lo que la convierte en uno de los países más diversos lingüísticamente del mundo.',
      'El primer himno nacional nigeriano, "Nigeria, We Hail Thee", fue reemplazado en 1978 por "Arise, O Compatriots" y luego restaurado en 2024.',
      'Lagos, la ciudad más grande de Nigeria, fue la capital en la independencia y lo siguió siendo hasta que Abuja se convirtió en la capital en 1991.',
    ],
  },

  planningChecklist: {
    en: [
      'Watch the presidential Independence Day address on television or online',
      'Attend the military parade or local celebration events in your area',
      'Wear green and white or Nigerian-themed attire',
      'Display the Nigerian flag at home, in offices, or on vehicles',
      'Learn about Nigerian history and share it with younger generations',
    ],
    fr: [
      "Regarder le discours présidentiel du Jour de l'Indépendance à la télévision ou en ligne",
      'Assister au défilé militaire ou aux événements de célébration locaux dans votre région',
      'Porter du vert et du blanc ou des tenues aux couleurs du Nigeria',
      'Afficher le drapeau nigérian à la maison, dans les bureaux ou sur les véhicules',
      "Se renseigner sur l'histoire du Nigeria et la partager avec les jeunes générations",
    ],
    es: [
      'Ver el discurso presidencial del Día de la Independencia en televisión o en línea',
      'Asistir al desfile militar o eventos de celebración locales en tu área',
      'Vestir de verde y blanco o con atuendos con temática nigeriana',
      'Exhibir la bandera nigeriana en casa, en oficinas o en vehículos',
      'Aprender sobre la historia de Nigeria y compartirla con las generaciones más jóvenes',
    ],
  },

  relatedHolidays: ['ng_democracy-day', 'ng_new-years-day'],

  seo: {
    en: {
      titleTemplate: 'Independence Day {year} Nigeria — October 1 Countdown & Guide',
      descriptionTemplate: 'When is Nigerian Independence Day {year}? Live countdown to October 1, history of Nigeria\'s independence, and celebration guide.',
      keywords: ['Nigeria Independence Day', 'October 1 Nigeria', 'Nigerian independence', 'Independence Day countdown', 'Nigeria public holidays'],
    },
    fr: {
      titleTemplate: "Jour de l'Indépendance {year} Nigeria — Compte à rebours du 1er octobre",
      descriptionTemplate: "Quand est le Jour de l'Indépendance {year} au Nigeria ? Compte à rebours jusqu'au 1er octobre, histoire et guide de célébration.",
      keywords: ["Jour de l'Indépendance Nigeria", '1er octobre Nigeria', 'indépendance nigériane', "compte à rebours indépendance", 'jours fériés Nigeria'],
    },
    es: {
      titleTemplate: 'Día de la Independencia {year} Nigeria — Cuenta regresiva del 1 de octubre',
      descriptionTemplate: '¿Cuándo es el Día de la Independencia {year} en Nigeria? Cuenta regresiva hasta el 1 de octubre, historia y guía de celebración.',
      keywords: ['Día de la Independencia Nigeria', '1 de octubre Nigeria', 'independencia nigeriana', 'cuenta regresiva independencia', 'días festivos Nigeria'],
    },
  },

  faq: [
    {
      question: { en: 'When is Independence Day {year} in Nigeria?', fr: "Quand est le Jour de l'Indépendance {year} au Nigeria ?", es: '¿Cuándo es el Día de la Independencia {year} en Nigeria?' },
      answer: {
        en: 'Nigerian Independence Day {year} falls on {date}. It is always October 1, marking the anniversary of independence from British rule in 1960.',
        fr: "Le Jour de l'Indépendance du Nigeria {year} tombe le {date}. C'est toujours le 1er octobre, marquant l'anniversaire de l'indépendance de la domination britannique en 1960.",
        es: 'El Día de la Independencia de Nigeria {year} cae el {date}. Siempre es el 1 de octubre, marcando el aniversario de la independencia del dominio británico en 1960.',
      },
    },
    {
      question: { en: 'When did Nigeria gain independence?', fr: "Quand le Nigeria a-t-il obtenu son indépendance ?", es: '¿Cuándo obtuvo Nigeria su independencia?' },
      answer: {
        en: 'Nigeria gained independence from the United Kingdom on October 1, 1960. It became a republic on October 1, 1963.',
        fr: "Le Nigeria a obtenu son indépendance du Royaume-Uni le 1er octobre 1960. Il est devenu une république le 1er octobre 1963.",
        es: 'Nigeria obtuvo su independencia del Reino Unido el 1 de octubre de 1960. Se convirtió en república el 1 de octubre de 1963.',
      },
    },
    {
      question: { en: 'Who designed the Nigerian flag?', fr: 'Qui a conçu le drapeau nigérian ?', es: '¿Quién diseñó la bandera nigeriana?' },
      answer: {
        en: 'The Nigerian flag was designed by Michael Taiwo Akinkunmi, a 23-year-old student at the time. He won a national competition in 1959, and the green-white-green flag was first raised at independence on October 1, 1960.',
        fr: "Le drapeau nigérian a été conçu par Michael Taiwo Akinkunmi, un étudiant de 23 ans à l'époque. Il a remporté un concours national en 1959, et le drapeau vert-blanc-vert a été hissé pour la première fois lors de l'indépendance le 1er octobre 1960.",
        es: 'La bandera nigeriana fue diseñada por Michael Taiwo Akinkunmi, un estudiante de 23 años en ese momento. Ganó un concurso nacional en 1959, y la bandera verde-blanco-verde fue izada por primera vez en la independencia el 1 de octubre de 1960.',
      },
    },
    {
      question: { en: 'How does Nigeria celebrate Independence Day?', fr: "Comment le Nigeria célèbre-t-il le Jour de l'Indépendance ?", es: '¿Cómo celebra Nigeria el Día de la Independencia?' },
      answer: {
        en: 'Nigeria celebrates with a presidential address, military parades at Eagle Square in Abuja, flag-raising ceremonies nationwide, cultural displays, fireworks, and community festivities across all 36 states.',
        fr: "Le Nigeria célèbre avec un discours présidentiel, des défilés militaires à Eagle Square à Abuja, des cérémonies de lever du drapeau dans tout le pays, des spectacles culturels, des feux d'artifice et des festivités communautaires dans les 36 États.",
        es: 'Nigeria celebra con un discurso presidencial, desfiles militares en Eagle Square en Abuja, ceremonias de izado de bandera en todo el país, exhibiciones culturales, fuegos artificiales y festividades comunitarias en los 36 estados.',
      },
    },
  ],

  colorTheme: 'green-white-green',
  icon: '\ud83c\uddf3\ud83c\uddec',
};

// ---------------------------------------------------------------------------
// Eid al-Fitr — calculated
// ---------------------------------------------------------------------------

const eidAlFitr: HolidayData = {
  id: 'ng_eid-al-fitr',
  countryCode: 'ng',
  slugs: { en: 'eid-al-fitr', fr: 'eid-al-fitr', es: 'eid-al-fitr' },
  names: { en: 'Eid al-Fitr', fr: "Aïd el-Fitr", es: 'Eid al-Fitr' },

  dateType: 'calculated',
  calculateDate: getEidAlFitrDate,

  descriptions: {
    en: 'Eid al-Fitr marks the end of Ramadan, the Islamic holy month of fasting, and is one of the most joyous celebrations in Nigeria. It is a major public holiday observed with prayers, feasting, new clothes, and gift-giving, especially prominent in northern Nigeria.',
    fr: "L'Aïd el-Fitr marque la fin du Ramadan, le mois sacré de jeûne islamique, et est l'une des célébrations les plus joyeuses au Nigeria. C'est un jour férié majeur célébré par des prières, des festins, de nouveaux vêtements et des échanges de cadeaux, particulièrement prédominant dans le nord du Nigeria.",
    es: 'El Eid al-Fitr marca el final del Ramadán, el mes sagrado islámico de ayuno, y es una de las celebraciones más alegres en Nigeria. Es un día festivo importante observado con oraciones, banquetes, ropa nueva y entrega de regalos, especialmente prominente en el norte de Nigeria.',
  },

  history: {
    en: "Eid al-Fitr has been celebrated by Nigerian Muslims since Islam arrived in the region through trans-Saharan trade routes as early as the 9th century. The Sokoto Caliphate, established in 1804 by Usman dan Fodio, strengthened Islamic traditions across northern Nigeria, making Eid celebrations deeply embedded in the culture.\n\nToday, Eid al-Fitr is one of Nigeria's most widely observed holidays. The country has one of the largest Muslim populations in Africa, with roughly half of Nigeria's 200 million people practising Islam. The celebration brings together communities across ethnic lines, as Hausa, Yoruba, Fulani, Kanuri, and other Muslim groups all observe the holiday.\n\nThe Nigerian government recognises both Eid al-Fitr and Eid al-Adha as national public holidays, typically granting two days off for each celebration.",
    fr: "L'Aïd el-Fitr est célébré par les musulmans nigérians depuis l'arrivée de l'islam dans la région par les routes commerciales transsahariennes dès le IXe siècle. Le Califat de Sokoto, établi en 1804 par Ousman dan Fodio, a renforcé les traditions islamiques dans le nord du Nigeria, ancrant profondément les célébrations de l'Aïd dans la culture.\n\nAujourd'hui, l'Aïd el-Fitr est l'un des jours fériés les plus largement observés au Nigeria. Le pays possède l'une des plus grandes populations musulmanes d'Afrique, avec environ la moitié des 200 millions d'habitants du Nigeria pratiquant l'islam. La célébration rassemble les communautés au-delà des lignes ethniques, car les Haoussa, les Yoruba, les Peuls, les Kanouri et d'autres groupes musulmans observent tous cette fête.\n\nLe gouvernement nigérian reconnaît à la fois l'Aïd el-Fitr et l'Aïd el-Adha comme jours fériés nationaux, accordant généralement deux jours de congé pour chaque célébration.",
    es: "El Eid al-Fitr ha sido celebrado por los musulmanes nigerianos desde que el islam llegó a la región a través de las rutas comerciales transaharianas ya en el siglo IX. El Califato de Sokoto, establecido en 1804 por Usman dan Fodio, fortaleció las tradiciones islámicas en el norte de Nigeria, haciendo que las celebraciones del Eid estuvieran profundamente arraigadas en la cultura.\n\nHoy, el Eid al-Fitr es uno de los días festivos más ampliamente observados en Nigeria. El país tiene una de las poblaciones musulmanas más grandes de África, con aproximadamente la mitad de los 200 millones de habitantes de Nigeria practicando el islam. La celebración reúne a comunidades a través de líneas étnicas, ya que los hausa, yoruba, fulani, kanuri y otros grupos musulmanes observan la festividad.\n\nEl gobierno nigeriano reconoce tanto el Eid al-Fitr como el Eid al-Adha como días festivos nacionales, otorgando generalmente dos días libres para cada celebración.",
  },

  traditions: {
    en: [
      'Attending early morning Eid prayers at open prayer grounds (musalla) or mosques',
      'Wearing new clothes, often traditional attire such as agbada, babariga, or kaftan',
      'Preparing and sharing festive meals including rams, rice, and special dishes',
      'Giving gifts and money (Eidi) to children and those in need',
      'Visiting family, friends, and neighbours to exchange Eid greetings',
      'Slaughtering rams and sharing the meat with neighbours and the less fortunate',
      'Playing drums, singing, and celebrating with the community',
    ],
    fr: [
      "Assister aux prières matinales de l'Aïd sur les terrains de prière en plein air (musalla) ou dans les mosquées",
      "Porter de nouveaux vêtements, souvent des tenues traditionnelles comme l'agbada, le babariga ou le caftan",
      'Préparer et partager des repas festifs comprenant des moutons, du riz et des plats spéciaux',
      "Offrir des cadeaux et de l'argent (Eidi) aux enfants et aux personnes dans le besoin",
      "Rendre visite à la famille, aux amis et aux voisins pour échanger les vœux de l'Aïd",
      'Égorger des moutons et partager la viande avec les voisins et les plus démunis',
      'Jouer du tambour, chanter et célébrer avec la communauté',
    ],
    es: [
      'Asistir a las oraciones matutinas del Eid en terrenos de oración al aire libre (musalla) o mezquitas',
      'Estrenar ropa nueva, a menudo atuendos tradicionales como agbada, babariga o caftán',
      'Preparar y compartir comidas festivas incluyendo carneros, arroz y platos especiales',
      'Dar regalos y dinero (Eidi) a los niños y a quienes lo necesitan',
      'Visitar a familiares, amigos y vecinos para intercambiar saludos del Eid',
      'Sacrificar carneros y compartir la carne con vecinos y los menos afortunados',
      'Tocar tambores, cantar y celebrar con la comunidad',
    ],
  },

  funFacts: {
    en: [
      'The Eid prayer ground in Kano, one of the largest in Nigeria, can accommodate hundreds of thousands of worshippers.',
      'Nigerian Eid celebrations often last up to three days, with the government typically declaring two public holidays.',
      'In northern Nigeria, horse-riding displays called Durbar are performed during Eid as a show of loyalty to the emir.',
      'Jollof rice, suya, and kilishi (dried spiced meat) are popular Eid feast foods across Nigeria.',
      'Many Nigerian Muslims pay Zakat al-Fitr (obligatory charity) before Eid prayers to ensure everyone can join the celebrations.',
    ],
    fr: [
      "Le terrain de prière de l'Aïd à Kano, l'un des plus grands du Nigeria, peut accueillir des centaines de milliers de fidèles.",
      "Les célébrations de l'Aïd au Nigeria durent souvent jusqu'à trois jours, le gouvernement déclarant généralement deux jours fériés.",
      "Dans le nord du Nigeria, des parades équestres appelées Durbar sont organisées pendant l'Aïd en signe de loyauté envers l'émir.",
      "Le riz jollof, le suya et le kilishi (viande épicée séchée) sont des mets populaires lors des festins de l'Aïd au Nigeria.",
      "De nombreux musulmans nigérians paient la Zakat al-Fitr (charité obligatoire) avant les prières de l'Aïd pour s'assurer que tous puissent participer aux célébrations.",
    ],
    es: [
      'El terreno de oración del Eid en Kano, uno de los más grandes de Nigeria, puede acomodar a cientos de miles de fieles.',
      'Las celebraciones del Eid en Nigeria a menudo duran hasta tres días, con el gobierno declarando generalmente dos días festivos.',
      'En el norte de Nigeria, exhibiciones ecuestres llamadas Durbar se realizan durante el Eid como muestra de lealtad al emir.',
      'El arroz jollof, el suya y el kilishi (carne seca especiada) son alimentos populares en los banquetes del Eid en Nigeria.',
      'Muchos musulmanes nigerianos pagan el Zakat al-Fitr (caridad obligatoria) antes de las oraciones del Eid para asegurar que todos puedan unirse a las celebraciones.',
    ],
  },

  planningChecklist: {
    en: [
      'Buy new clothes and outfits for the family well before Eid',
      'Purchase a ram or goat for the Eid feast if planning to slaughter',
      'Prepare Eid meals and snacks in advance — rice, meat, and sweets',
      'Pay Zakat al-Fitr before Eid morning prayers',
      'Plan visits to family and friends and prepare gifts for children',
    ],
    fr: [
      "Acheter de nouveaux vêtements et tenues pour la famille bien avant l'Aïd",
      "Acheter un mouton ou une chèvre pour le festin de l'Aïd si vous prévoyez un sacrifice",
      "Préparer les repas et collations de l'Aïd à l'avance — riz, viande et sucreries",
      "Payer la Zakat al-Fitr avant les prières matinales de l'Aïd",
      'Planifier les visites à la famille et aux amis et préparer des cadeaux pour les enfants',
    ],
    es: [
      'Comprar ropa nueva y atuendos para la familia con anticipación antes del Eid',
      'Comprar un carnero o cabra para el banquete del Eid si se planea sacrificar',
      'Preparar las comidas y bocadillos del Eid con anticipación — arroz, carne y dulces',
      'Pagar el Zakat al-Fitr antes de las oraciones matutinas del Eid',
      'Planificar visitas a familiares y amigos y preparar regalos para los niños',
    ],
  },

  relatedHolidays: ['ng_eid-al-adha'],

  seo: {
    en: {
      titleTemplate: 'Eid al-Fitr {year} Nigeria — Countdown & Celebration Guide',
      descriptionTemplate: 'When is Eid al-Fitr {year} in Nigeria? Live countdown, traditions, Ramadan end date, and celebration guide.',
      keywords: ['Eid al-Fitr Nigeria', 'Eid Nigeria', 'Ramadan end Nigeria', 'Eid al-Fitr countdown', 'Nigeria Islamic holidays'],
    },
    fr: {
      titleTemplate: "Aïd el-Fitr {year} Nigeria — Compte à rebours et guide de célébration",
      descriptionTemplate: "Quand est l'Aïd el-Fitr {year} au Nigeria ? Compte à rebours, traditions, fin du Ramadan et guide de célébration.",
      keywords: ["Aïd el-Fitr Nigeria", 'Aïd Nigeria', 'fin du Ramadan Nigeria', "compte à rebours Aïd el-Fitr", 'fêtes islamiques Nigeria'],
    },
    es: {
      titleTemplate: 'Eid al-Fitr {year} Nigeria — Cuenta regresiva y guía de celebración',
      descriptionTemplate: '¿Cuándo es el Eid al-Fitr {year} en Nigeria? Cuenta regresiva, tradiciones, fin del Ramadán y guía de celebración.',
      keywords: ['Eid al-Fitr Nigeria', 'Eid Nigeria', 'fin del Ramadán Nigeria', 'cuenta regresiva Eid al-Fitr', 'fiestas islámicas Nigeria'],
    },
  },

  faq: [
    {
      question: { en: 'When is Eid al-Fitr {year} in Nigeria?', fr: "Quand est l'Aïd el-Fitr {year} au Nigeria ?", es: '¿Cuándo es el Eid al-Fitr {year} en Nigeria?' },
      answer: {
        en: 'Eid al-Fitr {year} in Nigeria falls on {date}. The exact date depends on the sighting of the new moon marking the end of Ramadan.',
        fr: "L'Aïd el-Fitr {year} au Nigeria tombe le {date}. La date exacte dépend de l'observation du nouveau croissant de lune marquant la fin du Ramadan.",
        es: 'El Eid al-Fitr {year} en Nigeria cae el {date}. La fecha exacta depende del avistamiento de la luna nueva que marca el fin del Ramadán.',
      },
    },
    {
      question: { en: 'How many days off do Nigerians get for Eid al-Fitr?', fr: "Combien de jours de congé les Nigérians ont-ils pour l'Aïd el-Fitr ?", es: '¿Cuántos días libres tienen los nigerianos para el Eid al-Fitr?' },
      answer: {
        en: 'The Nigerian government typically declares two public holidays for Eid al-Fitr. The celebrations often extend to three days in practice, especially in northern Nigeria.',
        fr: "Le gouvernement nigérian déclare généralement deux jours fériés pour l'Aïd el-Fitr. Les célébrations s'étendent souvent à trois jours en pratique, surtout dans le nord du Nigeria.",
        es: 'El gobierno nigeriano generalmente declara dos días festivos para el Eid al-Fitr. Las celebraciones a menudo se extienden a tres días en la práctica, especialmente en el norte de Nigeria.',
      },
    },
    {
      question: { en: 'What is a Durbar celebration?', fr: "Qu'est-ce qu'une célébration de Durbar ?", es: '¿Qué es una celebración Durbar?' },
      answer: {
        en: 'A Durbar is a traditional horse-riding festival held in northern Nigerian cities like Kano, Zaria, and Katsina during Eid. Horsemen in colourful regalia parade before the emir, demonstrating their horsemanship in a spectacle dating back centuries.',
        fr: "Un Durbar est un festival équestre traditionnel organisé dans les villes du nord du Nigeria comme Kano, Zaria et Katsina pendant l'Aïd. Des cavaliers en tenues colorées défilent devant l'émir, démontrant leur art équestre dans un spectacle remontant à des siècles.",
        es: 'Un Durbar es un festival ecuestre tradicional celebrado en ciudades del norte de Nigeria como Kano, Zaria y Katsina durante el Eid. Jinetes con atuendos coloridos desfilan ante el emir, demostrando su habilidad ecuestre en un espectáculo que data de siglos.',
      },
    },
    {
      question: { en: 'Is Eid al-Fitr a public holiday in Nigeria?', fr: "L'Aïd el-Fitr est-il un jour férié au Nigeria ?", es: '¿Es el Eid al-Fitr un día festivo en Nigeria?' },
      answer: {
        en: 'Yes, Eid al-Fitr is an official national public holiday in Nigeria. Banks, government offices, schools, and most businesses close for the celebration.',
        fr: "Oui, l'Aïd el-Fitr est un jour férié national officiel au Nigeria. Les banques, les bureaux gouvernementaux, les écoles et la plupart des entreprises ferment pour la célébration.",
        es: 'Sí, el Eid al-Fitr es un día festivo nacional oficial en Nigeria. Los bancos, oficinas gubernamentales, escuelas y la mayoría de los negocios cierran para la celebración.',
      },
    },
  ],

  colorTheme: 'green-gold',
  icon: '\ud83c\udf19',
};

// ---------------------------------------------------------------------------
// Eid al-Adha — calculated
// ---------------------------------------------------------------------------

const eidAlAdha: HolidayData = {
  id: 'ng_eid-al-adha',
  countryCode: 'ng',
  slugs: { en: 'eid-al-adha', fr: 'eid-al-adha', es: 'eid-al-adha' },
  names: { en: 'Eid al-Adha', fr: "Aïd el-Adha", es: 'Eid al-Adha' },

  dateType: 'calculated',
  calculateDate: getEidAlAdhaDate,

  descriptions: {
    en: 'Eid al-Adha, the Festival of Sacrifice, is one of the most important Islamic holidays in Nigeria. It commemorates Prophet Ibrahim\'s willingness to sacrifice his son in obedience to God and is marked by ram sacrifices, communal prayers, and festive gatherings across the country.',
    fr: "L'Aïd el-Adha, la Fête du Sacrifice, est l'une des fêtes islamiques les plus importantes au Nigeria. Elle commémore la volonté du prophète Ibrahim de sacrifier son fils en obéissance à Dieu et est marquée par des sacrifices de moutons, des prières communautaires et des rassemblements festifs à travers le pays.",
    es: 'El Eid al-Adha, la Fiesta del Sacrificio, es una de las festividades islámicas más importantes en Nigeria. Conmemora la voluntad del profeta Ibrahim de sacrificar a su hijo en obediencia a Dios y se celebra con sacrificios de carneros, oraciones comunitarias y reuniones festivas en todo el país.',
  },

  history: {
    en: "Eid al-Adha honours the Quranic narrative of Prophet Ibrahim's willingness to sacrifice his son Ismail as an act of obedience to God. At the last moment, God provided a ram as a substitute. This story is central to Islamic faith and is commemorated annually during the Hajj pilgrimage season.\n\nIn Nigeria, Eid al-Adha has been observed for centuries, particularly in the northern states where Islam has deep historical roots dating back to the Kanem-Bornu Empire and the Sokoto Caliphate. The holiday is known locally as \"Ileya\" among the Yoruba and \"Babbar Sallah\" (Greater Eid) among the Hausa.\n\nThe celebration is a major national event in Nigeria, with the government recognising it as an official public holiday. It brings together families and communities, with the sacrifice and distribution of meat symbolising charity, compassion, and communal responsibility.",
    fr: "L'Aïd el-Adha honore le récit coranique de la volonté du prophète Ibrahim de sacrifier son fils Ismaïl en acte d'obéissance à Dieu. Au dernier moment, Dieu a fourni un bélier en substitut. Cette histoire est au cœur de la foi islamique et est commémorée chaque année pendant la saison du pèlerinage du Hajj.\n\nAu Nigeria, l'Aïd el-Adha est observée depuis des siècles, particulièrement dans les États du nord où l'islam a des racines historiques profondes remontant à l'Empire du Kanem-Bornou et au Califat de Sokoto. La fête est connue localement sous le nom d'« Ileya » chez les Yoruba et de « Babbar Sallah » (le Grand Aïd) chez les Haoussa.\n\nLa célébration est un événement national majeur au Nigeria, le gouvernement la reconnaissant comme jour férié officiel. Elle rassemble les familles et les communautés, le sacrifice et la distribution de viande symbolisant la charité, la compassion et la responsabilité communautaire.",
    es: "El Eid al-Adha honra la narrativa coránica de la voluntad del profeta Ibrahim de sacrificar a su hijo Ismail como acto de obediencia a Dios. En el último momento, Dios proporcionó un carnero como sustituto. Esta historia es central en la fe islámica y se conmemora anualmente durante la temporada de peregrinación del Hajj.\n\nEn Nigeria, el Eid al-Adha se ha observado durante siglos, particularmente en los estados del norte donde el islam tiene profundas raíces históricas que se remontan al Imperio Kanem-Bornu y al Califato de Sokoto. La festividad es conocida localmente como \"Ileya\" entre los yoruba y \"Babbar Sallah\" (el Gran Eid) entre los hausa.\n\nLa celebración es un evento nacional importante en Nigeria, con el gobierno reconociéndola como día festivo oficial. Reúne a familias y comunidades, con el sacrificio y la distribución de carne simbolizando la caridad, la compasión y la responsabilidad comunitaria.",
  },

  traditions: {
    en: [
      'Attending Eid prayers at open prayer grounds or mosques in the morning',
      'Sacrificing a ram, goat, or cow and dividing the meat into three parts — family, friends, and the poor',
      'Wearing new or best traditional clothing such as agbada, babariga, or flowing robes',
      'Visiting family and friends to exchange greetings and share festive meals',
      'Watching Durbar horse-riding parades in northern cities like Kano and Zaria',
      'Distributing meat and food to neighbours, the needy, and orphans',
      'Children receiving gifts, money, and new clothes',
    ],
    fr: [
      "Assister aux prières de l'Aïd sur les terrains de prière en plein air ou dans les mosquées le matin",
      'Sacrifier un mouton, une chèvre ou un bœuf et diviser la viande en trois parts — famille, amis et pauvres',
      "Porter de nouveaux ou ses meilleurs vêtements traditionnels comme l'agbada, le babariga ou les robes amples",
      "Rendre visite à la famille et aux amis pour échanger des vœux et partager des repas festifs",
      'Assister aux parades équestres Durbar dans les villes du nord comme Kano et Zaria',
      'Distribuer de la viande et de la nourriture aux voisins, aux nécessiteux et aux orphelins',
      'Les enfants reçoivent des cadeaux, de l\'argent et de nouveaux vêtements',
    ],
    es: [
      'Asistir a las oraciones del Eid en terrenos de oración al aire libre o mezquitas por la mañana',
      'Sacrificar un carnero, cabra o vaca y dividir la carne en tres partes — familia, amigos y pobres',
      'Estrenar o vestir la mejor ropa tradicional como agbada, babariga o túnicas amplias',
      'Visitar a familiares y amigos para intercambiar saludos y compartir comidas festivas',
      'Ver los desfiles ecuestres Durbar en ciudades del norte como Kano y Zaria',
      'Distribuir carne y comida a vecinos, necesitados y huérfanos',
      'Los niños reciben regalos, dinero y ropa nueva',
    ],
  },

  funFacts: {
    en: [
      'Eid al-Adha is known as "Ileya" in Yoruba and "Babbar Sallah" (Greater Eid) in Hausa, reflecting Nigeria\'s linguistic diversity.',
      'The price of rams in Nigeria skyrockets before Eid al-Adha, with premium rams costing millions of naira in cities like Lagos and Abuja.',
      'The Kano Durbar during Eid al-Adha is one of the most spectacular cultural events in West Africa, featuring thousands of horsemen.',
      'Many Nigerian Muslims who cannot afford a whole ram pool resources together to purchase one as a group sacrifice.',
      'Eid al-Adha coincides with the Hajj pilgrimage to Mecca — thousands of Nigerians travel to Saudi Arabia for the pilgrimage each year.',
    ],
    fr: [
      "L'Aïd el-Adha est connu sous le nom d'« Ileya » en yoruba et de « Babbar Sallah » (le Grand Aïd) en haoussa, reflétant la diversité linguistique du Nigeria.",
      "Le prix des moutons au Nigeria monte en flèche avant l'Aïd el-Adha, les moutons de qualité supérieure coûtant des millions de nairas dans des villes comme Lagos et Abuja.",
      "Le Durbar de Kano pendant l'Aïd el-Adha est l'un des événements culturels les plus spectaculaires d'Afrique de l'Ouest, mettant en vedette des milliers de cavaliers.",
      'De nombreux musulmans nigérians qui ne peuvent pas se permettre un mouton entier mettent leurs ressources en commun pour en acheter un en sacrifice collectif.',
      "L'Aïd el-Adha coïncide avec le pèlerinage du Hajj à La Mecque — des milliers de Nigérians se rendent en Arabie saoudite pour le pèlerinage chaque année.",
    ],
    es: [
      'El Eid al-Adha es conocido como "Ileya" en yoruba y "Babbar Sallah" (el Gran Eid) en hausa, reflejando la diversidad lingüística de Nigeria.',
      'El precio de los carneros en Nigeria se dispara antes del Eid al-Adha, con carneros premium costando millones de nairas en ciudades como Lagos y Abuja.',
      'El Durbar de Kano durante el Eid al-Adha es uno de los eventos culturales más espectaculares de África Occidental, con miles de jinetes.',
      'Muchos musulmanes nigerianos que no pueden costear un carnero entero reúnen recursos para comprar uno como sacrificio grupal.',
      'El Eid al-Adha coincide con la peregrinación del Hajj a La Meca — miles de nigerianos viajan a Arabia Saudita para la peregrinación cada año.',
    ],
  },

  planningChecklist: {
    en: [
      'Purchase a ram, goat, or cow well in advance — prices rise sharply near Eid',
      'Buy new clothes and outfits for the family',
      'Prepare for the Eid feast — stock up on rice, spices, and cooking supplies',
      'Arrange visits to family and friends for the Eid period',
      'Set aside meat portions for distribution to the needy and neighbours',
    ],
    fr: [
      "Acheter un mouton, une chèvre ou un bœuf bien à l'avance — les prix augmentent fortement près de l'Aïd",
      'Acheter de nouveaux vêtements et tenues pour la famille',
      "Préparer le festin de l'Aïd — s'approvisionner en riz, épices et ustensiles de cuisine",
      "Organiser les visites à la famille et aux amis pour la période de l'Aïd",
      'Mettre de côté des portions de viande pour la distribution aux nécessiteux et aux voisins',
    ],
    es: [
      'Comprar un carnero, cabra o vaca con mucha anticipación — los precios suben drásticamente cerca del Eid',
      'Comprar ropa nueva y atuendos para la familia',
      'Preparar el banquete del Eid — abastecerse de arroz, especias y suministros de cocina',
      'Organizar visitas a familiares y amigos para el período del Eid',
      'Reservar porciones de carne para distribución a los necesitados y vecinos',
    ],
  },

  relatedHolidays: ['ng_eid-al-fitr'],

  seo: {
    en: {
      titleTemplate: 'Eid al-Adha {year} Nigeria — Countdown & Celebration Guide',
      descriptionTemplate: 'When is Eid al-Adha {year} in Nigeria? Live countdown, Festival of Sacrifice traditions, Durbar info, and celebration guide.',
      keywords: ['Eid al-Adha Nigeria', 'Babbar Sallah', 'Ileya Nigeria', 'Eid al-Adha countdown', 'Nigeria Islamic holidays'],
    },
    fr: {
      titleTemplate: "Aïd el-Adha {year} Nigeria — Compte à rebours et guide de célébration",
      descriptionTemplate: "Quand est l'Aïd el-Adha {year} au Nigeria ? Compte à rebours, traditions de la Fête du Sacrifice, Durbar et guide de célébration.",
      keywords: ["Aïd el-Adha Nigeria", 'Babbar Sallah', 'Fête du Sacrifice Nigeria', "compte à rebours Aïd el-Adha", 'fêtes islamiques Nigeria'],
    },
    es: {
      titleTemplate: 'Eid al-Adha {year} Nigeria — Cuenta regresiva y guía de celebración',
      descriptionTemplate: '¿Cuándo es el Eid al-Adha {year} en Nigeria? Cuenta regresiva, tradiciones de la Fiesta del Sacrificio, Durbar y guía de celebración.',
      keywords: ['Eid al-Adha Nigeria', 'Babbar Sallah', 'Fiesta del Sacrificio Nigeria', 'cuenta regresiva Eid al-Adha', 'fiestas islámicas Nigeria'],
    },
  },

  faq: [
    {
      question: { en: 'When is Eid al-Adha {year} in Nigeria?', fr: "Quand est l'Aïd el-Adha {year} au Nigeria ?", es: '¿Cuándo es el Eid al-Adha {year} en Nigeria?' },
      answer: {
        en: 'Eid al-Adha {year} in Nigeria falls on {date}. The exact date depends on the Islamic lunar calendar and moon sighting.',
        fr: "L'Aïd el-Adha {year} au Nigeria tombe le {date}. La date exacte dépend du calendrier lunaire islamique et de l'observation de la lune.",
        es: 'El Eid al-Adha {year} en Nigeria cae el {date}. La fecha exacta depende del calendario lunar islámico y el avistamiento de la luna.',
      },
    },
    {
      question: { en: 'What is the significance of Eid al-Adha?', fr: "Quelle est la signification de l'Aïd el-Adha ?", es: '¿Cuál es el significado del Eid al-Adha?' },
      answer: {
        en: "Eid al-Adha commemorates Prophet Ibrahim's willingness to sacrifice his son in obedience to God. God provided a ram as a substitute, and Muslims worldwide honour this by sacrificing an animal and sharing the meat with family, friends, and the needy.",
        fr: "L'Aïd el-Adha commémore la volonté du prophète Ibrahim de sacrifier son fils en obéissance à Dieu. Dieu a fourni un bélier en substitut, et les musulmans du monde entier honorent cet événement en sacrifiant un animal et en partageant la viande avec la famille, les amis et les nécessiteux.",
        es: 'El Eid al-Adha conmemora la voluntad del profeta Ibrahim de sacrificar a su hijo en obediencia a Dios. Dios proporcionó un carnero como sustituto, y los musulmanes de todo el mundo honran esto sacrificando un animal y compartiendo la carne con la familia, amigos y necesitados.',
      },
    },
    {
      question: { en: 'What is Babbar Sallah?', fr: "Qu'est-ce que le Babbar Sallah ?", es: '¿Qué es el Babbar Sallah?' },
      answer: {
        en: 'Babbar Sallah is the Hausa name for Eid al-Adha, meaning "Greater Eid." It is distinguished from Karamar Sallah (Eid al-Fitr, the "Lesser Eid"). The term is widely used across northern Nigeria.',
        fr: "Babbar Sallah est le nom haoussa de l'Aïd el-Adha, signifiant « le Grand Aïd ». Il se distingue du Karamar Sallah (Aïd el-Fitr, le « Petit Aïd »). Le terme est largement utilisé dans le nord du Nigeria.",
        es: 'Babbar Sallah es el nombre hausa para el Eid al-Adha, que significa "el Gran Eid." Se distingue del Karamar Sallah (Eid al-Fitr, el "Eid menor"). El término es ampliamente utilizado en el norte de Nigeria.',
      },
    },
    {
      question: { en: 'How is the sacrificial meat divided in Nigeria?', fr: 'Comment la viande du sacrifice est-elle répartie au Nigeria ?', es: '¿Cómo se divide la carne del sacrificio en Nigeria?' },
      answer: {
        en: 'Traditionally, the meat is divided into three equal portions: one-third for the family, one-third for friends and neighbours, and one-third for the poor and needy. This practice of sharing is a core principle of Eid al-Adha.',
        fr: "Traditionnellement, la viande est divisée en trois parts égales : un tiers pour la famille, un tiers pour les amis et les voisins, et un tiers pour les pauvres et les nécessiteux. Cette pratique de partage est un principe fondamental de l'Aïd el-Adha.",
        es: 'Tradicionalmente, la carne se divide en tres porciones iguales: un tercio para la familia, un tercio para amigos y vecinos, y un tercio para los pobres y necesitados. Esta práctica de compartir es un principio fundamental del Eid al-Adha.',
      },
    },
  ],

  colorTheme: 'green-gold',
  icon: '\ud83d\udc11',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmasDay: HolidayData = {
  id: 'ng_christmas',
  countryCode: 'ng',
  slugs: { en: 'christmas-day', fr: 'jour-de-noel', es: 'dia-de-navidad' },
  names: { en: 'Christmas Day', fr: 'Jour de Noël', es: 'Día de Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: 'Christmas Day on December 25 is widely celebrated across both Christian and secular Nigeria. It is a national public holiday marked by church services, family gatherings, gift-giving, and festive meals featuring jollof rice, fried rice, and assorted meats.',
    fr: "Le jour de Noël, le 25 décembre, est largement célébré dans tout le Nigeria, tant par les chrétiens que par la population séculière. C'est un jour férié national marqué par des services religieux, des réunions familiales, des échanges de cadeaux et des repas festifs comprenant du riz jollof, du riz frit et des viandes assorties.",
    es: 'El Día de Navidad, el 25 de diciembre, se celebra ampliamente en toda Nigeria, tanto por los cristianos como por la población secular. Es un día festivo nacional marcado por servicios religiosos, reuniones familiares, intercambio de regalos y comidas festivas con arroz jollof, arroz frito y carnes variadas.',
  },

  history: {
    en: "Christianity arrived in Nigeria through Portuguese missionaries in the 15th century and expanded significantly during British colonial rule in the 19th and 20th centuries. Today, roughly half of Nigeria's population identifies as Christian, making Christmas one of the country's most celebrated holidays.\n\nNigerian Christmas celebrations blend Western traditions with vibrant local culture. While Christmas trees and gift-giving are common, the holiday is distinctly Nigerian with elaborate feasts of jollof rice, fried rice, pounded yam, pepper soup, and assorted meats. Church services are central, with many Nigerians attending midnight Mass or morning services.\n\nChristmas in Nigeria is also a time of homecoming. Millions of Nigerians living in cities like Lagos and Abuja travel back to their home towns and villages to celebrate with extended family, making it the busiest travel period of the year.",
    fr: "Le christianisme est arrivé au Nigeria par les missionnaires portugais au XVe siècle et s'est considérablement développé pendant la domination coloniale britannique aux XIXe et XXe siècles. Aujourd'hui, environ la moitié de la population nigériane s'identifie comme chrétienne, faisant de Noël l'un des jours fériés les plus célébrés du pays.\n\nLes célébrations de Noël nigérianes mêlent les traditions occidentales à la culture locale vibrante. Si les sapins de Noël et les échanges de cadeaux sont courants, la fête est distinctement nigériane avec des festins élaborés de riz jollof, riz frit, igname pilée, soupe au poivre et viandes assorties. Les services religieux sont centraux, de nombreux Nigérians assistant à la messe de minuit ou aux services du matin.\n\nNoël au Nigeria est aussi un temps de retrouvailles. Des millions de Nigérians vivant dans des villes comme Lagos et Abuja retournent dans leurs villes et villages d'origine pour célébrer avec la famille élargie, ce qui en fait la période de voyage la plus chargée de l'année.",
    es: "El cristianismo llegó a Nigeria a través de misioneros portugueses en el siglo XV y se expandió significativamente durante el dominio colonial británico en los siglos XIX y XX. Hoy, aproximadamente la mitad de la población de Nigeria se identifica como cristiana, haciendo de la Navidad una de las festividades más celebradas del país.\n\nLas celebraciones navideñas nigerianas mezclan tradiciones occidentales con la vibrante cultura local. Aunque los árboles de Navidad y el intercambio de regalos son comunes, la festividad es distintivamente nigeriana con elaborados banquetes de arroz jollof, arroz frito, ñame machacado, sopa de pimienta y carnes variadas. Los servicios religiosos son centrales, con muchos nigerianos asistiendo a la misa de medianoche o a los servicios matutinos.\n\nLa Navidad en Nigeria es también un tiempo de regreso al hogar. Millones de nigerianos que viven en ciudades como Lagos y Abuja viajan de regreso a sus ciudades y pueblos de origen para celebrar con la familia extendida, convirtiéndolo en el período de viaje más concurrido del año.",
  },

  traditions: {
    en: [
      'Attending Christmas church services, including midnight Mass and carol services',
      'Preparing elaborate Christmas meals with jollof rice, fried rice, chicken, goat meat, and salads',
      'Travelling back to home towns and villages to celebrate with extended family',
      'Exchanging gifts with family, friends, and neighbours',
      'Wearing new and colourful outfits — many Nigerians buy \"Christmas clothes\"',
      'Decorating homes and churches with lights, Christmas trees, and ornaments',
      'Hosting and attending Christmas parties and neighbourhood celebrations',
    ],
    fr: [
      'Assister aux services religieux de Noël, y compris la messe de minuit et les concerts de cantiques',
      'Préparer des repas de Noël élaborés avec du riz jollof, du riz frit, du poulet, de la viande de chèvre et des salades',
      "Voyager vers les villes et villages d'origine pour célébrer avec la famille élargie",
      'Échanger des cadeaux avec la famille, les amis et les voisins',
      'Porter de nouvelles tenues colorées — beaucoup de Nigérians achètent des « vêtements de Noël »',
      'Décorer les maisons et les églises avec des lumières, des sapins de Noël et des ornements',
      'Organiser et assister à des fêtes de Noël et des célébrations de quartier',
    ],
    es: [
      'Asistir a servicios religiosos navideños, incluyendo la misa de medianoche y servicios de villancicos',
      'Preparar elaboradas comidas navideñas con arroz jollof, arroz frito, pollo, carne de cabra y ensaladas',
      'Viajar de regreso a las ciudades y pueblos de origen para celebrar con la familia extendida',
      'Intercambiar regalos con familiares, amigos y vecinos',
      'Estrenar atuendos nuevos y coloridos — muchos nigerianos compran "ropa de Navidad"',
      'Decorar casas e iglesias con luces, árboles de Navidad y adornos',
      'Organizar y asistir a fiestas navideñas y celebraciones del vecindario',
    ],
  },

  funFacts: {
    en: [
      'Jollof rice is the centrepiece of most Nigerian Christmas tables, and the "jollof wars" between Nigeria and Ghana intensify during the holiday season.',
      'The Christmas travel rush in Nigeria is so intense that transport fares can triple between Lagos and eastern or northern cities.',
      'Nigerian Christmas decorations often include artificial snow and winter imagery, even though temperatures are typically 25-35°C.',
      'Many Nigerian churches hold multiple Christmas services to accommodate the huge number of worshippers.',
      '"Detty December" has become a popular term for Nigeria\'s festive season, featuring concerts, beach parties, and entertainment events across Lagos.',
    ],
    fr: [
      'Le riz jollof est la pièce maîtresse de la plupart des tables de Noël nigérianes, et les « guerres du jollof » entre le Nigeria et le Ghana s\'intensifient pendant la période des fêtes.',
      "L'affluence des voyages de Noël au Nigeria est si intense que les tarifs de transport peuvent tripler entre Lagos et les villes de l'est ou du nord.",
      'Les décorations de Noël nigérianes incluent souvent de la neige artificielle et des images hivernales, même si les températures sont généralement de 25 à 35°C.',
      "De nombreuses églises nigérianes organisent plusieurs services de Noël pour accueillir le grand nombre de fidèles.",
      '« Detty December » est devenu un terme populaire pour la saison festive du Nigeria, avec des concerts, des fêtes sur la plage et des événements de divertissement à travers Lagos.',
    ],
    es: [
      'El arroz jollof es la pieza central de la mayoría de las mesas navideñas nigerianas, y las "guerras del jollof" entre Nigeria y Ghana se intensifican durante la temporada festiva.',
      'La avalancha de viajes navideños en Nigeria es tan intensa que las tarifas de transporte pueden triplicarse entre Lagos y las ciudades del este o del norte.',
      'Las decoraciones navideñas nigerianas a menudo incluyen nieve artificial e imágenes invernales, aunque las temperaturas típicamente son de 25-35°C.',
      'Muchas iglesias nigerianas celebran múltiples servicios navideños para acomodar la enorme cantidad de fieles.',
      '"Detty December" se ha convertido en un término popular para la temporada festiva de Nigeria, con conciertos, fiestas en la playa y eventos de entretenimiento en todo Lagos.',
    ],
  },

  planningChecklist: {
    en: [
      'Book transport home early — bus and flight tickets sell out weeks in advance',
      'Shop for Christmas clothes and gifts before the holiday rush',
      'Stock up on food supplies — rice, chicken, goat meat, drinks, and cooking ingredients',
      'Arrange Christmas party invitations and plan family gatherings',
      'Check church service schedules for midnight Mass and Christmas morning services',
    ],
    fr: [
      "Réserver le transport tôt — les billets de bus et d'avion se vendent des semaines à l'avance",
      'Faire les achats de vêtements et cadeaux de Noël avant la ruée des fêtes',
      "S'approvisionner en nourriture — riz, poulet, viande de chèvre, boissons et ingrédients de cuisine",
      'Organiser les invitations aux fêtes de Noël et planifier les réunions familiales',
      'Vérifier les horaires des services religieux pour la messe de minuit et les services du matin de Noël',
    ],
    es: [
      'Reservar transporte temprano — los boletos de autobús y avión se agotan semanas antes',
      'Comprar ropa y regalos navideños antes de la avalancha festiva',
      'Abastecerse de alimentos — arroz, pollo, carne de cabra, bebidas e ingredientes de cocina',
      'Organizar invitaciones a fiestas navideñas y planificar reuniones familiares',
      'Consultar los horarios de servicios religiosos para la misa de medianoche y los servicios de la mañana de Navidad',
    ],
  },

  relatedHolidays: ['ng_new-years-day', 'ng_eid-al-fitr'],

  seo: {
    en: {
      titleTemplate: 'Christmas Day {year} Nigeria — Countdown & Celebration Guide',
      descriptionTemplate: 'How many days until Christmas {year} in Nigeria? Live countdown to December 25, Nigerian Christmas traditions, and celebration guide.',
      keywords: ['Christmas Nigeria', 'Christmas Day Nigeria', 'Nigerian Christmas', 'Christmas countdown', 'December 25 Nigeria'],
    },
    fr: {
      titleTemplate: 'Noël {year} Nigeria — Compte à rebours et guide de célébration',
      descriptionTemplate: 'Combien de jours avant Noël {year} au Nigeria ? Compte à rebours, traditions de Noël nigérianes et guide de célébration.',
      keywords: ['Noël Nigeria', 'Jour de Noël Nigeria', 'Noël nigérian', 'compte à rebours Noël', '25 décembre Nigeria'],
    },
    es: {
      titleTemplate: 'Navidad {year} Nigeria — Cuenta regresiva y guía de celebración',
      descriptionTemplate: '¿Cuántos días faltan para Navidad {year} en Nigeria? Cuenta regresiva, tradiciones navideñas nigerianas y guía de celebración.',
      keywords: ['Navidad Nigeria', 'Día de Navidad Nigeria', 'Navidad nigeriana', 'cuenta regresiva Navidad', '25 de diciembre Nigeria'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas Day {year} in Nigeria?', fr: 'Quand est le jour de Noël {year} au Nigeria ?', es: '¿Cuándo es el Día de Navidad {year} en Nigeria?' },
      answer: {
        en: 'Christmas Day {year} in Nigeria is on {date}. Christmas is always December 25 and is a national public holiday.',
        fr: "Le jour de Noël {year} au Nigeria est le {date}. Noël est toujours le 25 décembre et c'est un jour férié national.",
        es: 'El Día de Navidad {year} en Nigeria es el {date}. La Navidad siempre es el 25 de diciembre y es un día festivo nacional.',
      },
    },
    {
      question: { en: 'What food is served at a Nigerian Christmas?', fr: 'Quels plats sont servis lors d\'un Noël nigérian ?', es: '¿Qué comida se sirve en una Navidad nigeriana?' },
      answer: {
        en: 'The centrepiece of a Nigerian Christmas meal is jollof rice, accompanied by fried rice, chicken, goat meat, salads, coleslaw, and assorted drinks. Pounded yam, pepper soup, and chin chin (fried pastry snacks) are also popular.',
        fr: 'La pièce maîtresse d\'un repas de Noël nigérian est le riz jollof, accompagné de riz frit, de poulet, de viande de chèvre, de salades, de coleslaw et de boissons assorties. L\'igname pilée, la soupe au poivre et le chin chin (beignets frits) sont également populaires.',
        es: 'La pieza central de una comida navideña nigeriana es el arroz jollof, acompañado de arroz frito, pollo, carne de cabra, ensaladas, ensalada de col y bebidas variadas. El ñame machacado, la sopa de pimienta y el chin chin (bocadillos de masa frita) también son populares.',
      },
    },
    {
      question: { en: 'What is Detty December?', fr: 'Qu\'est-ce que le Detty December ?', es: '¿Qué es el Detty December?' },
      answer: {
        en: 'Detty December is a popular Nigerian slang term for the festive season in December, characterised by a packed calendar of concerts, beach parties, club events, and entertainment shows, particularly in Lagos. It has become a major draw for Nigerians in the diaspora who return home for the holidays.',
        fr: "Detty December est un terme d'argot nigérian populaire désignant la saison festive de décembre, caractérisée par un calendrier chargé de concerts, fêtes sur la plage, événements en boîte de nuit et spectacles de divertissement, particulièrement à Lagos. C'est devenu une attraction majeure pour les Nigérians de la diaspora qui rentrent au pays pour les fêtes.",
        es: 'Detty December es un término popular del argot nigeriano para la temporada festiva de diciembre, caracterizada por un calendario repleto de conciertos, fiestas en la playa, eventos en clubes y espectáculos de entretenimiento, particularmente en Lagos. Se ha convertido en una gran atracción para los nigerianos de la diáspora que regresan a casa para las fiestas.',
      },
    },
    {
      question: { en: 'Do Muslims celebrate Christmas in Nigeria?', fr: 'Les musulmans célèbrent-ils Noël au Nigeria ?', es: '¿Los musulmanes celebran la Navidad en Nigeria?' },
      answer: {
        en: 'While Christmas is primarily a Christian holiday, many Nigerian Muslims participate in the festive spirit by visiting Christian friends and neighbours, exchanging gifts, and enjoying the holiday atmosphere. Nigeria\'s tradition of interfaith respect means that Eid and Christmas are often celebrated across religious lines.',
        fr: "Bien que Noël soit principalement une fête chrétienne, de nombreux musulmans nigérians participent à l'esprit festif en rendant visite à des amis et voisins chrétiens, en échangeant des cadeaux et en profitant de l'ambiance des fêtes. La tradition nigériane de respect interreligieux fait que l'Aïd et Noël sont souvent célébrés au-delà des lignes religieuses.",
        es: 'Aunque la Navidad es principalmente una festividad cristiana, muchos musulmanes nigerianos participan del espíritu festivo visitando a amigos y vecinos cristianos, intercambiando regalos y disfrutando del ambiente festivo. La tradición nigeriana de respeto interreligioso significa que el Eid y la Navidad a menudo se celebran cruzando líneas religiosas.',
      },
    },
  ],

  colorTheme: 'red-green',
  icon: '\ud83c\udf84',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const ngHolidays: HolidayData[] = [
  newYearsDay,
  democracyDay,
  independenceDay,
  eidAlFitr,
  eidAlAdha,
  christmasDay,
];

export default ngHolidays;
