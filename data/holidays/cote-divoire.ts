/**
 * Cote d'Ivoire holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getEidAlFitrDate } from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'ci_new-years-day',
  countryCode: 'ci',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'ano-nuevo' },
  names: { en: "New Year's Day", fr: "Jour de l'An", es: 'Dia de Ano Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 marks the start of the calendar year in Cote d'Ivoire. It is a public holiday celebrated with family gatherings, festive meals, outdoor concerts, and prayers across the country.",
    fr: "Le Jour de l'An, le 1er janvier, marque le debut de l'annee civile en Cote d'Ivoire. C'est un jour ferie celebre par des reunions familiales, des repas festifs, des concerts en plein air et des prieres a travers le pays.",
    es: "El Dia de Ano Nuevo, el 1 de enero, marca el inicio del ano calendario en Costa de Marfil. Es un dia festivo celebrado con reuniones familiares, comidas festivas, conciertos al aire libre y oraciones en todo el pais.",
  },

  history: {
    en: "New Year's Day has been observed as a public holiday in Cote d'Ivoire since independence in 1960. The celebration reflects the country's vibrant mix of cultures and religions. In Abidjan, the economic capital, the night of December 31 is one of the most festive of the year, with concerts, fireworks, and street parties.\n\nThe holiday provides an opportunity for Ivorians of all backgrounds to come together. Both Muslim and Christian communities participate in the celebrations, which range from prayer vigils and church services to outdoor dance parties and live music events.\n\nTraditional Ivorian hospitality shines on this day, as families prepare elaborate meals and welcome visitors. The spirit of unity and hope for the year ahead is a central theme of the celebrations across the country.",
    fr: "Le Jour de l'An est observe comme jour ferie en Cote d'Ivoire depuis l'independance en 1960. La celebration reflete le melange vibrant de cultures et de religions du pays. A Abidjan, la capitale economique, la nuit du 31 decembre est l'une des plus festives de l'annee, avec des concerts, des feux d'artifice et des fetes de rue.\n\nCette fete offre l'occasion aux Ivoiriens de tous horizons de se reunir. Les communautes musulmanes et chretiennes participent aux celebrations, qui vont des veillees de priere et services religieux aux fetes de danse en plein air et concerts.\n\nL'hospitalite traditionnelle ivoirienne brille en ce jour, alors que les familles preparent des repas elabores et accueillent les visiteurs. L'esprit d'unite et d'espoir pour l'annee a venir est un theme central des celebrations a travers le pays.",
    es: "El Dia de Ano Nuevo se ha observado como dia festivo en Costa de Marfil desde la independencia en 1960. La celebracion refleja la vibrante mezcla de culturas y religiones del pais. En Abidjan, la capital economica, la noche del 31 de diciembre es una de las mas festivas del ano, con conciertos, fuegos artificiales y fiestas callejeras.\n\nLa festividad ofrece una oportunidad para que los marfilenos de todos los origenes se reunan. Las comunidades musulmanas y cristianas participan en las celebraciones, que van desde vigilias de oracion y servicios religiosos hasta fiestas de baile al aire libre y conciertos.\n\nLa hospitalidad tradicional marfilena brilla en este dia, cuando las familias preparan comidas elaboradas y dan la bienvenida a los visitantes. El espiritu de unidad y esperanza para el ano venidero es un tema central de las celebraciones en todo el pais.",
  },

  traditions: {
    en: [
      'Attending midnight prayer vigils and church services on December 31',
      'Watching fireworks and attending outdoor concerts in Abidjan',
      'Preparing festive meals featuring attiéké, poisson braisé, and alloco',
      'Visiting family and friends to exchange New Year greetings',
      'Wearing new clothes to mark the fresh start of the year',
      'Dancing to coupé-décalé and zouglou music at street parties',
    ],
    fr: [
      'Assister aux veillees de priere et aux messes de minuit le 31 decembre',
      "Regarder les feux d'artifice et assister aux concerts en plein air a Abidjan",
      'Preparer des repas festifs avec de l\'attieke, du poisson braise et de l\'alloco',
      'Rendre visite a la famille et aux amis pour echanger des voeux de Nouvel An',
      "Porter de nouveaux vetements pour marquer le debut de l'annee",
      'Danser sur du coupe-decale et du zouglou lors des fetes de rue',
    ],
    es: [
      'Asistir a vigilias de oracion y misas de medianoche el 31 de diciembre',
      'Ver fuegos artificiales y asistir a conciertos al aire libre en Abidjan',
      'Preparar comidas festivas con attieke, pescado asado y alloco',
      'Visitar a familiares y amigos para intercambiar saludos de Ano Nuevo',
      'Estrenar ropa nueva para marcar el comienzo del ano',
      'Bailar coupe-decale y zouglou en fiestas callejeras',
    ],
  },

  funFacts: {
    en: [
      "Abidjan hosts some of the most vibrant New Year's celebrations in West Africa, rivalling Lagos and Dakar.",
      "Coupé-décalé, a popular Ivorian music genre, dominates the soundtrack of New Year's parties across the country.",
      "Attieké, a fermented cassava couscous, is a staple of Ivorian celebrations and is often served with grilled fish.",
      "Cote d'Ivoire is one of the most religiously diverse countries in West Africa, with roughly 40% Muslim, 30% Christian, and 30% following traditional beliefs.",
      "The Plateau district in Abidjan transforms into a massive party venue on New Year's Eve.",
    ],
    fr: [
      "Abidjan accueille certaines des celebrations du Nouvel An les plus animees d'Afrique de l'Ouest, rivalisant avec Lagos et Dakar.",
      "Le coupe-decale, genre musical populaire ivoirien, domine la bande sonore des fetes du Nouvel An a travers le pays.",
      "L'attieke, un couscous de manioc fermente, est un incontournable des celebrations ivoiriennes et est souvent servi avec du poisson grille.",
      "La Cote d'Ivoire est l'un des pays les plus diversifies religieusement en Afrique de l'Ouest, avec environ 40% de musulmans, 30% de chretiens et 30% suivant des croyances traditionnelles.",
      "Le quartier du Plateau a Abidjan se transforme en un immense lieu de fete la nuit du Nouvel An.",
    ],
    es: [
      'Abidjan alberga algunas de las celebraciones de Ano Nuevo mas vibrantes de Africa Occidental, rivalizando con Lagos y Dakar.',
      'El coupe-decale, un genero musical popular marfileno, domina la banda sonora de las fiestas de Ano Nuevo en todo el pais.',
      'El attieke, un cuscus de yuca fermentada, es un pilar de las celebraciones marfilenas y a menudo se sirve con pescado a la parrilla.',
      'Costa de Marfil es uno de los paises mas diversos religiosamente en Africa Occidental, con aproximadamente 40% musulmanes, 30% cristianos y 30% que siguen creencias tradicionales.',
      'El distrito de Plateau en Abidjan se transforma en un enorme lugar de fiesta en Nochevieja.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan family gatherings and confirm guest lists in advance',
      'Purchase ingredients for traditional Ivorian dishes like attieké and alloco',
      'Check local event listings for concerts and celebrations in Abidjan',
      'Buy new clothes for the family to wear on New Year\'s Day',
      'Arrange transport, as roads in Abidjan are very busy on New Year\'s Eve',
    ],
    fr: [
      "Planifier les reunions familiales et confirmer les listes d'invites a l'avance",
      "Acheter les ingredients pour les plats traditionnels ivoiriens comme l'attieke et l'alloco",
      'Consulter les programmes locaux pour les concerts et celebrations a Abidjan',
      "Acheter de nouveaux vetements pour la famille a porter le Jour de l'An",
      'Organiser le transport, car les routes d\'Abidjan sont tres chargees la nuit du Nouvel An',
    ],
    es: [
      'Planificar reuniones familiares y confirmar listas de invitados con anticipacion',
      'Comprar ingredientes para platos tradicionales marfilenos como attieke y alloco',
      'Consultar los programas locales de conciertos y celebraciones en Abidjan',
      'Comprar ropa nueva para la familia para el Dia de Ano Nuevo',
      'Organizar transporte, ya que las calles de Abidjan estan muy congestionadas en Nochevieja',
    ],
  },

  relatedHolidays: ['ci_christmas', 'ci_eid-al-fitr'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Cote d'Ivoire — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in Cote d'Ivoire? Live countdown to January 1, holiday info, and celebration guide.",
      keywords: ["New Year's Day Cote d'Ivoire", "Ivory Coast public holidays", "Jour de l'An Cote d'Ivoire", "New Year's Abidjan", "Cote d'Ivoire holidays"],
    },
    fr: {
      titleTemplate: "Jour de l'An {year} Cote d'Ivoire — Compte a rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'An {year} en Cote d'Ivoire ? Compte a rebours, informations et guide de celebration.",
      keywords: ["Jour de l'An Cote d'Ivoire", "jours feries Cote d'Ivoire", 'Nouvel An Abidjan', 'fetes ivoiriennes', "Cote d'Ivoire ferie"],
    },
    es: {
      titleTemplate: "Dia de Ano Nuevo {year} Costa de Marfil — Cuenta regresiva y guia",
      descriptionTemplate: "Cuando es el Dia de Ano Nuevo {year} en Costa de Marfil? Cuenta regresiva, informacion y guia de celebracion.",
      keywords: ['Ano Nuevo Costa de Marfil', 'dias festivos Costa de Marfil', 'feriados Costa de Marfil', 'Ano Nuevo Abidjan', 'fiestas marfilenas'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in Cote d'Ivoire?", fr: "Quand est le Jour de l'An {year} en Cote d'Ivoire ?", es: "Cuando es el Dia de Ano Nuevo {year} en Costa de Marfil?" },
      answer: {
        en: "New Year's Day {year} in Cote d'Ivoire is on {date}. It is always January 1 and is a national public holiday.",
        fr: "Le Jour de l'An {year} en Cote d'Ivoire est le {date}. C'est toujours le 1er janvier et c'est un jour ferie national.",
        es: "El Dia de Ano Nuevo {year} en Costa de Marfil es el {date}. Siempre es el 1 de enero y es un dia festivo nacional.",
      },
    },
    {
      question: { en: "How is New Year celebrated in Cote d'Ivoire?", fr: "Comment le Nouvel An est-il celebre en Cote d'Ivoire ?", es: 'Como se celebra el Ano Nuevo en Costa de Marfil?' },
      answer: {
        en: "Ivorians celebrate with outdoor concerts, fireworks, family meals featuring traditional dishes, and prayer services. Abidjan hosts major celebrations with coupe-decale music and street parties.",
        fr: "Les Ivoiriens celebrent avec des concerts en plein air, des feux d'artifice, des repas familiaux avec des plats traditionnels et des services de priere. Abidjan accueille de grandes celebrations avec de la musique coupe-decale et des fetes de rue.",
        es: "Los marfilenos celebran con conciertos al aire libre, fuegos artificiales, comidas familiares con platos tradicionales y servicios de oracion. Abidjan alberga grandes celebraciones con musica coupe-decale y fiestas callejeras.",
      },
    },
    {
      question: { en: 'What is attieké?', fr: "Qu'est-ce que l'attieke ?", es: 'Que es el attieke?' },
      answer: {
        en: "Attieké is a traditional Ivorian side dish made from fermented cassava, similar to couscous in texture. It is a staple of Ivorian cuisine and is commonly served with grilled fish or chicken.",
        fr: "L'attieke est un accompagnement traditionnel ivoirien fait de manioc fermente, similaire au couscous en texture. C'est un aliment de base de la cuisine ivoirienne et est couramment servi avec du poisson ou du poulet grille.",
        es: "El attieke es una guarnicion tradicional marfilena hecha de yuca fermentada, similar al cuscus en textura. Es un alimento basico de la cocina marfilena y se sirve comunmente con pescado o pollo a la parrilla.",
      },
    },
    {
      question: { en: "Is New Year's Day a public holiday in Cote d'Ivoire?", fr: "Le Jour de l'An est-il un jour ferie en Cote d'Ivoire ?", es: "Es el Dia de Ano Nuevo un dia festivo en Costa de Marfil?" },
      answer: {
        en: "Yes, New Year's Day is an official public holiday in Cote d'Ivoire. Government offices, banks, and most businesses are closed.",
        fr: "Oui, le Jour de l'An est un jour ferie officiel en Cote d'Ivoire. Les bureaux gouvernementaux, les banques et la plupart des commerces sont fermes.",
        es: "Si, el Dia de Ano Nuevo es un dia festivo oficial en Costa de Marfil. Las oficinas gubernamentales, bancos y la mayoria de los negocios estan cerrados.",
      },
    },
  ],

  colorTheme: 'new-year',
  icon: '🎆',
};

// ---------------------------------------------------------------------------
// Labour Day — May 1
// ---------------------------------------------------------------------------

const labourDay: HolidayData = {
  id: 'ci_labour-day',
  countryCode: 'ci',
  slugs: { en: 'labour-day', fr: 'fete-du-travail', es: 'dia-del-trabajo' },
  names: { en: 'Labour Day', fr: 'Fete du Travail', es: 'Dia del Trabajo' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 1,

  descriptions: {
    en: "Labour Day on May 1 honours workers and the labour movement in Cote d'Ivoire. Known as Fete du Travail, it is a public holiday marked by union rallies, workers' marches, and celebrations of workers' rights.",
    fr: "La Fete du Travail, le 1er mai, honore les travailleurs et le mouvement ouvrier en Cote d'Ivoire. C'est un jour ferie marque par des rassemblements syndicaux, des marches de travailleurs et des celebrations des droits des travailleurs.",
    es: "El Dia del Trabajo, el 1 de mayo, honra a los trabajadores y al movimiento obrero en Costa de Marfil. Conocido como Fete du Travail, es un dia festivo marcado por concentraciones sindicales, marchas de trabajadores y celebraciones de los derechos laborales.",
  },

  history: {
    en: "Labour Day has been celebrated in Cote d'Ivoire since independence, following the French tradition of May 1 as International Workers' Day. The Ivorian labour movement has been active since the colonial period, when cocoa and coffee workers organised to demand fair prices and better conditions.\n\nThe trade unions of Cote d'Ivoire have played a significant role in the country's political history. During the one-party era under Felix Houphouet-Boigny, unions were closely tied to the state, but they became more independent during the democratic transition of the 1990s.\n\nToday, Labour Day is an occasion for workers to voice their concerns and for the government to address labour issues. Major union federations organise rallies and marches, particularly in Abidjan, the economic capital.",
    fr: "La Fete du Travail est celebree en Cote d'Ivoire depuis l'independance, suivant la tradition francaise du 1er mai comme Journee internationale des travailleurs. Le mouvement ouvrier ivoirien est actif depuis la periode coloniale, quand les travailleurs du cacao et du cafe se sont organises pour exiger des prix equitables et de meilleures conditions.\n\nLes syndicats de Cote d'Ivoire ont joue un role significatif dans l'histoire politique du pays. Pendant l'ere du parti unique sous Felix Houphouet-Boigny, les syndicats etaient etroitement lies a l'Etat, mais ils sont devenus plus independants pendant la transition democratique des annees 1990.\n\nAujourd'hui, la Fete du Travail est l'occasion pour les travailleurs d'exprimer leurs preoccupations et pour le gouvernement de traiter les questions de travail. Les grandes federations syndicales organisent des rassemblements et des marches, notamment a Abidjan, la capitale economique.",
    es: "El Dia del Trabajo se celebra en Costa de Marfil desde la independencia, siguiendo la tradicion francesa del 1 de mayo como Dia Internacional de los Trabajadores. El movimiento obrero marfileno ha estado activo desde el periodo colonial, cuando los trabajadores del cacao y del cafe se organizaron para exigir precios justos y mejores condiciones.\n\nLos sindicatos de Costa de Marfil han jugado un papel significativo en la historia politica del pais. Durante la era del partido unico bajo Felix Houphouet-Boigny, los sindicatos estaban estrechamente vinculados al Estado, pero se volvieron mas independientes durante la transicion democratica de los anos 1990.\n\nHoy, el Dia del Trabajo es una ocasion para que los trabajadores expresen sus preocupaciones y para que el gobierno aborde los problemas laborales. Las principales federaciones sindicales organizan concentraciones y marchas, particularmente en Abidjan, la capital economica.",
  },

  traditions: {
    en: [
      'Trade union rallies and marches through Abidjan and other cities',
      'Presidential speeches addressing workers\' concerns',
      'Cultural performances and entertainment at union events',
      'Family gatherings and relaxation on the day off',
      'Community celebrations in workers\' neighbourhoods',
    ],
    fr: [
      "Rassemblements syndicaux et marches a travers Abidjan et d'autres villes",
      'Discours presidentiels repondant aux preoccupations des travailleurs',
      'Spectacles culturels et divertissements lors des evenements syndicaux',
      'Reunions familiales et detente pendant le jour de conge',
      'Celebrations communautaires dans les quartiers ouvriers',
    ],
    es: [
      'Concentraciones sindicales y marchas por Abidjan y otras ciudades',
      'Discursos presidenciales abordando las preocupaciones de los trabajadores',
      'Espectaculos culturales y entretenimiento en eventos sindicales',
      'Reuniones familiares y descanso en el dia libre',
      'Celebraciones comunitarias en barrios obreros',
    ],
  },

  funFacts: {
    en: [
      "Cote d'Ivoire is the world's largest cocoa producer, and cocoa workers' rights are a major theme of Labour Day discussions.",
      'The UGTCI (Union Generale des Travailleurs de Cote d\'Ivoire) is one of the most influential unions in Francophone Africa.',
      'Labour Day in Cote d\'Ivoire often features discussions about the cocoa supply chain and fair trade practices.',
      'May 1 is a public holiday in all 14 Francophone West African countries.',
      'Felix Houphouet-Boigny, the first president, was himself a farmer and union organiser before entering politics.',
    ],
    fr: [
      "La Cote d'Ivoire est le premier producteur mondial de cacao, et les droits des travailleurs du cacao sont un theme majeur des discussions de la Fete du Travail.",
      "L'UGTCI (Union Generale des Travailleurs de Cote d'Ivoire) est l'un des syndicats les plus influents d'Afrique francophone.",
      "La Fete du Travail en Cote d'Ivoire comprend souvent des discussions sur la chaine d'approvisionnement du cacao et les pratiques de commerce equitable.",
      "Le 1er mai est un jour ferie dans les 14 pays d'Afrique de l'Ouest francophone.",
      "Felix Houphouet-Boigny, le premier president, etait lui-meme agriculteur et organisateur syndical avant d'entrer en politique.",
    ],
    es: [
      'Costa de Marfil es el mayor productor mundial de cacao, y los derechos de los trabajadores del cacao son un tema importante en las discusiones del Dia del Trabajo.',
      'La UGTCI (Union General de Trabajadores de Costa de Marfil) es uno de los sindicatos mas influyentes del Africa francofona.',
      'El Dia del Trabajo en Costa de Marfil a menudo incluye discusiones sobre la cadena de suministro del cacao y las practicas de comercio justo.',
      'El 1 de mayo es dia festivo en los 14 paises del Africa Occidental francofona.',
      'Felix Houphouet-Boigny, el primer presidente, fue agricultor y organizador sindical antes de entrar en politica.',
    ],
  },

  planningChecklist: {
    en: [
      'Check for union marches and rallies in your area',
      'Plan a day of rest and family activities',
      'Follow media coverage of Labour Day speeches and events',
      'Prepare a festive meal for the holiday',
      'Learn about the cocoa industry and workers\' rights in Cote d\'Ivoire',
    ],
    fr: [
      'Verifier les marches et rassemblements syndicaux dans votre region',
      "Planifier une journee de repos et d'activites familiales",
      'Suivre la couverture mediatique des discours et evenements de la Fete du Travail',
      'Preparer un repas festif pour le jour ferie',
      "S'informer sur l'industrie du cacao et les droits des travailleurs en Cote d'Ivoire",
    ],
    es: [
      'Verificar las marchas y concentraciones sindicales en su area',
      'Planificar un dia de descanso y actividades familiares',
      'Seguir la cobertura mediatica de los discursos y eventos del Dia del Trabajo',
      'Preparar una comida festiva para el dia festivo',
      'Aprender sobre la industria del cacao y los derechos de los trabajadores en Costa de Marfil',
    ],
  },

  relatedHolidays: ['ci_independence-day', 'ci_new-years-day'],

  seo: {
    en: {
      titleTemplate: "Labour Day {year} Cote d'Ivoire — Countdown & Guide",
      descriptionTemplate: "When is Labour Day {year} in Cote d'Ivoire? Live countdown to May 1, Fete du Travail history, and celebration guide.",
      keywords: ["Labour Day Cote d'Ivoire", "Fete du Travail Cote d'Ivoire", 'May 1 Ivory Coast', 'Ivory Coast holidays', "Cote d'Ivoire public holidays"],
    },
    fr: {
      titleTemplate: "Fete du Travail {year} Cote d'Ivoire — Compte a rebours et guide",
      descriptionTemplate: "Quand est la Fete du Travail {year} en Cote d'Ivoire ? Compte a rebours, histoire et guide de celebration.",
      keywords: ["Fete du Travail Cote d'Ivoire", "1er mai Cote d'Ivoire", "jour ferie Cote d'Ivoire", "travailleurs Cote d'Ivoire", "jours feries Cote d'Ivoire"],
    },
    es: {
      titleTemplate: 'Dia del Trabajo {year} Costa de Marfil — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Dia del Trabajo {year} en Costa de Marfil? Cuenta regresiva, historia y guia de celebracion.',
      keywords: ['Dia del Trabajo Costa de Marfil', '1 de mayo Costa de Marfil', 'dia festivo Costa de Marfil', 'trabajadores Costa de Marfil', 'feriados Costa de Marfil'],
    },
  },

  faq: [
    {
      question: { en: "When is Labour Day {year} in Cote d'Ivoire?", fr: "Quand est la Fete du Travail {year} en Cote d'Ivoire ?", es: 'Cuando es el Dia del Trabajo {year} en Costa de Marfil?' },
      answer: {
        en: "Labour Day {year} in Cote d'Ivoire is on {date}. It is always May 1 and is a national public holiday.",
        fr: "La Fete du Travail {year} en Cote d'Ivoire est le {date}. C'est toujours le 1er mai et c'est un jour ferie national.",
        es: 'El Dia del Trabajo {year} en Costa de Marfil es el {date}. Siempre es el 1 de mayo y es un dia festivo nacional.',
      },
    },
    {
      question: { en: "Is Labour Day a public holiday in Cote d'Ivoire?", fr: "La Fete du Travail est-elle un jour ferie en Cote d'Ivoire ?", es: 'Es el Dia del Trabajo un dia festivo en Costa de Marfil?' },
      answer: {
        en: "Yes, Labour Day is an official public holiday in Cote d'Ivoire. Businesses, schools, and government offices are closed.",
        fr: "Oui, la Fete du Travail est un jour ferie officiel en Cote d'Ivoire. Les entreprises, les ecoles et les bureaux gouvernementaux sont fermes.",
        es: 'Si, el Dia del Trabajo es un dia festivo oficial en Costa de Marfil. Los negocios, escuelas y oficinas gubernamentales estan cerrados.',
      },
    },
    {
      question: { en: 'Why is cocoa important on Labour Day?', fr: 'Pourquoi le cacao est-il important pour la Fete du Travail ?', es: 'Por que es importante el cacao en el Dia del Trabajo?' },
      answer: {
        en: "Cote d'Ivoire is the world's largest cocoa producer, and the cocoa industry employs millions of workers. Labour Day often highlights issues of fair wages, working conditions, and child labour in the cocoa sector.",
        fr: "La Cote d'Ivoire est le premier producteur mondial de cacao, et l'industrie du cacao emploie des millions de travailleurs. La Fete du Travail met souvent en lumiere les questions de salaires equitables, de conditions de travail et de travail des enfants dans le secteur du cacao.",
        es: "Costa de Marfil es el mayor productor mundial de cacao, y la industria del cacao emplea a millones de trabajadores. El Dia del Trabajo a menudo destaca temas de salarios justos, condiciones de trabajo y trabajo infantil en el sector del cacao.",
      },
    },
    {
      question: { en: "Who was Felix Houphouet-Boigny?", fr: "Qui etait Felix Houphouet-Boigny ?", es: 'Quien fue Felix Houphouet-Boigny?' },
      answer: {
        en: "Felix Houphouet-Boigny was the first president of Cote d'Ivoire, serving from 1960 until his death in 1993. Before entering politics, he was a cocoa farmer and union organiser who championed farmers' rights.",
        fr: "Felix Houphouet-Boigny a ete le premier president de la Cote d'Ivoire, servant de 1960 jusqu'a sa mort en 1993. Avant d'entrer en politique, il etait planteur de cacao et organisateur syndical qui defendait les droits des agriculteurs.",
        es: "Felix Houphouet-Boigny fue el primer presidente de Costa de Marfil, sirviendo desde 1960 hasta su muerte en 1993. Antes de entrar en politica, fue plantador de cacao y organizador sindical que defendia los derechos de los agricultores.",
      },
    },
  ],

  colorTheme: 'spring',
  icon: '⚒️',
};

// ---------------------------------------------------------------------------
// Independence Day — August 7
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'ci_independence-day',
  countryCode: 'ci',
  slugs: { en: 'independence-day', fr: 'fete-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Fete de l'Independance", es: 'Dia de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 8,
  fixedDay: 7,

  descriptions: {
    en: "Independence Day on August 7 commemorates Cote d'Ivoire's independence from France in 1960. It is the most important national holiday, celebrated with military parades, cultural performances, and patriotic festivities in Abidjan and across the country.",
    fr: "La Fete de l'Independance, le 7 aout, commemore l'independance de la Cote d'Ivoire vis-a-vis de la France en 1960. C'est la fete nationale la plus importante, celebree par des defiles militaires, des spectacles culturels et des festivites patriotiques a Abidjan et a travers le pays.",
    es: "El Dia de la Independencia, el 7 de agosto, conmemora la independencia de Costa de Marfil de Francia en 1960. Es la fiesta nacional mas importante, celebrada con desfiles militares, espectaculos culturales y festividades patrioticas en Abidjan y en todo el pais.",
  },

  history: {
    en: "Cote d'Ivoire gained independence from France on August 7, 1960, with Felix Houphouet-Boigny becoming the first president. Houphouet-Boigny, a former cocoa planter and doctor, led the country for 33 years and oversaw a period of rapid economic growth known as the 'Ivorian Miracle.'\n\nUnlike many African independence movements, the Ivorian transition was peaceful and maintained strong ties with France. Houphouet-Boigny championed dialogue over confrontation, a philosophy that shaped the country's early decades. He chose Yamoussoukro, his birthplace, as the official capital.\n\nToday, August 7 is marked by grand military parades, cultural performances showcasing the country's diverse ethnic groups, and speeches celebrating the achievements and unity of the Ivorian nation. The holiday reinforces national pride and the country's commitment to peace and development.",
    fr: "La Cote d'Ivoire a obtenu son independance de la France le 7 aout 1960, avec Felix Houphouet-Boigny devenant le premier president. Houphouet-Boigny, ancien planteur de cacao et medecin, a dirige le pays pendant 33 ans et a supervise une periode de croissance economique rapide connue sous le nom de 'Miracle ivoirien'.\n\nContrairement a de nombreux mouvements d'independance africains, la transition ivoirienne a ete pacifique et a maintenu des liens forts avec la France. Houphouet-Boigny a privilegie le dialogue a la confrontation, une philosophie qui a faconne les premieres decennies du pays. Il a choisi Yamoussoukro, son lieu de naissance, comme capitale officielle.\n\nAujourd'hui, le 7 aout est marque par de grands defiles militaires, des spectacles culturels mettant en valeur les divers groupes ethniques du pays et des discours celebrant les realisations et l'unite de la nation ivoirienne. Cette fete renforce la fierte nationale et l'engagement du pays envers la paix et le developpement.",
    es: "Costa de Marfil obtuvo su independencia de Francia el 7 de agosto de 1960, con Felix Houphouet-Boigny convirtiendose en el primer presidente. Houphouet-Boigny, un antiguo plantador de cacao y medico, dirigio el pais durante 33 anos y superviso un periodo de rapido crecimiento economico conocido como el 'Milagro Marfileno'.\n\nA diferencia de muchos movimientos de independencia africanos, la transicion marfilena fue pacifica y mantuvo fuertes lazos con Francia. Houphouet-Boigny defendio el dialogo sobre la confrontacion, una filosofia que modelo las primeras decadas del pais. Eligio Yamoussoukro, su lugar de nacimiento, como capital oficial.\n\nHoy, el 7 de agosto se marca con grandes desfiles militares, espectaculos culturales que muestran los diversos grupos etnicos del pais y discursos celebrando los logros y la unidad de la nacion marfilena. La festividad refuerza el orgullo nacional y el compromiso del pais con la paz y el desarrollo.",
  },

  traditions: {
    en: [
      'Watching the grand military parade in Abidjan',
      'Attending cultural performances featuring traditional dance from various ethnic groups',
      'Displaying the Ivorian flag on homes and public buildings',
      'Listening to the presidential address to the nation',
      'Enjoying community gatherings with traditional music and food',
      'Fireworks displays in major cities across the country',
    ],
    fr: [
      'Regarder le grand defile militaire a Abidjan',
      'Assister a des spectacles culturels mettant en vedette des danses traditionnelles de divers groupes ethniques',
      'Afficher le drapeau ivoirien sur les maisons et les batiments publics',
      "Ecouter le discours presidentiel a la nation",
      'Profiter de rassemblements communautaires avec musique et cuisine traditionnelles',
      "Feux d'artifice dans les grandes villes a travers le pays",
    ],
    es: [
      'Ver el gran desfile militar en Abidjan',
      'Asistir a espectaculos culturales con danzas tradicionales de diversos grupos etnicos',
      'Exhibir la bandera marfilena en hogares y edificios publicos',
      'Escuchar el discurso presidencial a la nacion',
      'Disfrutar de reuniones comunitarias con musica y comida tradicionales',
      'Fuegos artificiales en las principales ciudades del pais',
    ],
  },

  funFacts: {
    en: [
      "Felix Houphouet-Boigny built the Basilica of Our Lady of Peace in Yamoussoukro, which holds the Guinness record as the largest church in the world.",
      "Cote d'Ivoire means 'Ivory Coast' in French, named for the once-thriving ivory trade in the region.",
      "The 'Ivorian Miracle' of the 1960s-70s saw the economy grow faster than almost any other African nation.",
      "Cote d'Ivoire has over 60 distinct ethnic groups, all represented in Independence Day cultural performances.",
      'Houphouet-Boigny served as president for 33 consecutive years, from 1960 until his death in 1993.',
    ],
    fr: [
      "Felix Houphouet-Boigny a construit la Basilique Notre-Dame de la Paix a Yamoussoukro, qui detient le record Guinness de la plus grande eglise du monde.",
      "Le nom Cote d'Ivoire vient du commerce florissant de l'ivoire dans la region.",
      "Le 'Miracle ivoirien' des annees 1960-70 a vu l'economie croitre plus vite que presque toute autre nation africaine.",
      "La Cote d'Ivoire compte plus de 60 groupes ethniques distincts, tous representes dans les spectacles culturels de la Fete de l'Independance.",
      'Houphouet-Boigny a ete president pendant 33 annees consecutives, de 1960 jusqu\'a sa mort en 1993.',
    ],
    es: [
      'Felix Houphouet-Boigny construyo la Basilica de Nuestra Senora de la Paz en Yamoussoukro, que tiene el record Guinness como la iglesia mas grande del mundo.',
      "El nombre Costa de Marfil viene del floreciente comercio de marfil en la region.",
      'El "Milagro Marfileno" de los anos 1960-70 vio la economia crecer mas rapido que casi cualquier otra nacion africana.',
      'Costa de Marfil tiene mas de 60 grupos etnicos distintos, todos representados en los espectaculos culturales del Dia de la Independencia.',
      'Houphouet-Boigny fue presidente durante 33 anos consecutivos, desde 1960 hasta su muerte en 1993.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the schedule for the military parade and cultural events',
      'Display the Ivorian flag at home or on your vehicle',
      'Plan to attend community celebrations and performances',
      'Prepare traditional Ivorian dishes for family gatherings',
      'Learn about the independence history to share with children',
    ],
    fr: [
      'Verifier le programme du defile militaire et des evenements culturels',
      'Afficher le drapeau ivoirien a la maison ou sur votre vehicule',
      "Prevoir d'assister aux celebrations communautaires et spectacles",
      'Preparer des plats traditionnels ivoiriens pour les reunions familiales',
      "S'informer sur l'histoire de l'independance pour la partager avec les enfants",
    ],
    es: [
      'Consultar el horario del desfile militar y los eventos culturales',
      'Exhibir la bandera marfilena en casa o en su vehiculo',
      'Planificar asistir a celebraciones comunitarias y espectaculos',
      'Preparar platos tradicionales marfilenos para reuniones familiares',
      'Aprender sobre la historia de la independencia para compartir con los ninos',
    ],
  },

  relatedHolidays: ['ci_labour-day', 'ci_new-years-day'],

  seo: {
    en: {
      titleTemplate: "Cote d'Ivoire Independence Day {year} — Countdown & History",
      descriptionTemplate: "When is Cote d'Ivoire Independence Day {year}? Live countdown to August 7, history of independence from France, and celebration guide.",
      keywords: ["Cote d'Ivoire Independence Day", 'August 7 Ivory Coast', 'Ivory Coast national holiday', 'Houphouet-Boigny', "Cote d'Ivoire holidays"],
    },
    fr: {
      titleTemplate: "Fete de l'Independance de la Cote d'Ivoire {year} — Compte a rebours et histoire",
      descriptionTemplate: "Quand est la Fete de l'Independance de la Cote d'Ivoire {year} ? Compte a rebours, histoire et guide de celebration.",
      keywords: ["Fete de l'Independance Cote d'Ivoire", "7 aout Cote d'Ivoire", "fete nationale Cote d'Ivoire", "independance Cote d'Ivoire", "jours feries Cote d'Ivoire"],
    },
    es: {
      titleTemplate: 'Dia de la Independencia de Costa de Marfil {year} — Cuenta regresiva e historia',
      descriptionTemplate: 'Cuando es el Dia de la Independencia de Costa de Marfil {year}? Cuenta regresiva, historia y guia de celebracion.',
      keywords: ['Dia de la Independencia Costa de Marfil', '7 de agosto Costa de Marfil', 'fiesta nacional Costa de Marfil', 'independencia Costa de Marfil', 'dias festivos Costa de Marfil'],
    },
  },

  faq: [
    {
      question: { en: "When is Cote d'Ivoire Independence Day {year}?", fr: "Quand est la Fete de l'Independance {year} de la Cote d'Ivoire ?", es: 'Cuando es el Dia de la Independencia de Costa de Marfil {year}?' },
      answer: {
        en: "Cote d'Ivoire Independence Day {year} is on {date}. It is always August 7, commemorating independence from France in 1960.",
        fr: "La Fete de l'Independance de la Cote d'Ivoire {year} est le {date}. C'est toujours le 7 aout, commemorant l'independance de la France en 1960.",
        es: 'El Dia de la Independencia de Costa de Marfil {year} es el {date}. Siempre es el 7 de agosto, conmemorando la independencia de Francia en 1960.',
      },
    },
    {
      question: { en: "Who was the first president of Cote d'Ivoire?", fr: "Qui a ete le premier president de la Cote d'Ivoire ?", es: 'Quien fue el primer presidente de Costa de Marfil?' },
      answer: {
        en: "Felix Houphouet-Boigny was the first president, serving from independence in 1960 until his death in 1993. He was a cocoa planter turned politician who championed dialogue and economic development.",
        fr: "Felix Houphouet-Boigny a ete le premier president, servant de l'independance en 1960 jusqu'a sa mort en 1993. Il etait un planteur de cacao devenu politicien qui a defendu le dialogue et le developpement economique.",
        es: 'Felix Houphouet-Boigny fue el primer presidente, sirviendo desde la independencia en 1960 hasta su muerte en 1993. Fue un plantador de cacao convertido en politico que defendio el dialogo y el desarrollo economico.',
      },
    },
    {
      question: { en: 'What is the Basilica of Our Lady of Peace?', fr: "Qu'est-ce que la Basilique Notre-Dame de la Paix ?", es: 'Que es la Basilica de Nuestra Senora de la Paz?' },
      answer: {
        en: "The Basilica of Our Lady of Peace in Yamoussoukro is the largest church in the world by area. Built by President Houphouet-Boigny and consecrated in 1990, it is modelled after St. Peter's Basilica in Rome and is a symbol of Ivorian ambition.",
        fr: "La Basilique Notre-Dame de la Paix a Yamoussoukro est la plus grande eglise du monde par superficie. Construite par le president Houphouet-Boigny et consacree en 1990, elle est modelee d'apres la basilique Saint-Pierre de Rome et est un symbole de l'ambition ivoirienne.",
        es: "La Basilica de Nuestra Senora de la Paz en Yamoussoukro es la iglesia mas grande del mundo por superficie. Construida por el presidente Houphouet-Boigny y consagrada en 1990, esta modelada segun la Basilica de San Pedro en Roma y es un simbolo de la ambicion marfilena.",
      },
    },
    {
      question: { en: "What was the 'Ivorian Miracle'?", fr: "Qu'est-ce que le 'Miracle ivoirien' ?", es: 'Que fue el "Milagro Marfileno"?' },
      answer: {
        en: "The 'Ivorian Miracle' refers to the period of rapid economic growth in Cote d'Ivoire during the 1960s and 1970s, driven by cocoa and coffee exports. The country became one of the most prosperous in West Africa during this era.",
        fr: "Le 'Miracle ivoirien' fait reference a la periode de croissance economique rapide en Cote d'Ivoire pendant les annees 1960 et 1970, stimulee par les exportations de cacao et de cafe. Le pays est devenu l'un des plus prosperes d'Afrique de l'Ouest durant cette epoque.",
        es: 'El "Milagro Marfileno" se refiere al periodo de rapido crecimiento economico en Costa de Marfil durante los anos 1960 y 1970, impulsado por las exportaciones de cacao y cafe. El pais se convirtio en uno de los mas prosperos de Africa Occidental durante esta epoca.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '🇨🇮',
};

// ---------------------------------------------------------------------------
// Assumption of Mary — August 15
// ---------------------------------------------------------------------------

const assumption: HolidayData = {
  id: 'ci_assumption',
  countryCode: 'ci',
  slugs: { en: 'assumption-of-mary', fr: 'assomption', es: 'asuncion-de-maria' },
  names: { en: 'Assumption of Mary', fr: 'Assomption', es: 'Asuncion de Maria' },

  dateType: 'fixed',
  fixedMonth: 8,
  fixedDay: 15,

  descriptions: {
    en: "The Assumption of Mary on August 15 is a public holiday in Cote d'Ivoire honouring the belief that the Virgin Mary was taken up into heaven. The Basilica of Our Lady of Peace in Yamoussoukro, the world's largest church, is a focal point for celebrations.",
    fr: "L'Assomption de Marie, le 15 aout, est un jour ferie en Cote d'Ivoire honorant la croyance selon laquelle la Vierge Marie a ete elevee au ciel. La Basilique Notre-Dame de la Paix a Yamoussoukro, la plus grande eglise du monde, est un point central des celebrations.",
    es: "La Asuncion de Maria, el 15 de agosto, es un dia festivo en Costa de Marfil que honra la creencia de que la Virgen Maria fue elevada al cielo. La Basilica de Nuestra Senora de la Paz en Yamoussoukro, la iglesia mas grande del mundo, es un punto focal de las celebraciones.",
  },

  history: {
    en: "The Assumption is a significant Christian feast day that has been observed in Cote d'Ivoire since the colonial period. The holiday gained particular significance after the construction of the Basilica of Our Lady of Peace in Yamoussoukro, consecrated by Pope John Paul II in 1990.\n\nPresident Felix Houphouet-Boigny, a devout Catholic, built the basilica as a gift to the Vatican and the Ivorian people. The building, inspired by St. Peter's Basilica in Rome, holds the Guinness World Record as the largest church in the world and draws thousands of pilgrims on the Assumption.\n\nThe holiday reflects the important role of Christianity in Cote d'Ivoire, where approximately 30% of the population is Christian. It is celebrated with special masses, processions, and pilgrimages, particularly to the Basilica of Yamoussoukro.",
    fr: "L'Assomption est une fete chretienne importante observee en Cote d'Ivoire depuis la periode coloniale. Ce jour ferie a pris une signification particuliere apres la construction de la Basilique Notre-Dame de la Paix a Yamoussoukro, consacree par le Pape Jean-Paul II en 1990.\n\nLe president Felix Houphouet-Boigny, catholique devot, a construit la basilique comme cadeau au Vatican et au peuple ivoirien. Le batiment, inspire de la basilique Saint-Pierre de Rome, detient le record Guinness de la plus grande eglise du monde et attire des milliers de pelerins lors de l'Assomption.\n\nCette fete reflete le role important du christianisme en Cote d'Ivoire, ou environ 30% de la population est chretienne. Elle est celebree par des messes speciales, des processions et des pelerinages, en particulier vers la Basilique de Yamoussoukro.",
    es: "La Asuncion es una fiesta cristiana importante que se ha observado en Costa de Marfil desde el periodo colonial. La festividad adquirio un significado particular despues de la construccion de la Basilica de Nuestra Senora de la Paz en Yamoussoukro, consagrada por el Papa Juan Pablo II en 1990.\n\nEl presidente Felix Houphouet-Boigny, un devoto catolico, construyo la basilica como regalo al Vaticano y al pueblo marfileno. El edificio, inspirado en la Basilica de San Pedro en Roma, tiene el Record Guinness como la iglesia mas grande del mundo y atrae a miles de peregrinos en la Asuncion.\n\nLa festividad refleja el importante papel del cristianismo en Costa de Marfil, donde aproximadamente el 30% de la poblacion es cristiana. Se celebra con misas especiales, procesiones y peregrinaciones, particularmente a la Basilica de Yamoussoukro.",
  },

  traditions: {
    en: [
      'Attending special masses at churches and the Basilica of Our Lady of Peace',
      'Making pilgrimages to the Basilica of Yamoussoukro',
      'Organising religious processions through cities and villages',
      'Singing hymns and performing traditional Christian music',
      'Family gatherings and festive meals after church services',
      'Decorating churches with flowers and banners',
    ],
    fr: [
      'Assister a des messes speciales dans les eglises et a la Basilique Notre-Dame de la Paix',
      'Faire des pelerinages a la Basilique de Yamoussoukro',
      'Organiser des processions religieuses a travers les villes et villages',
      'Chanter des hymnes et interpreter de la musique chretienne traditionnelle',
      'Reunions familiales et repas festifs apres les services religieux',
      'Decorer les eglises avec des fleurs et des bannieres',
    ],
    es: [
      'Asistir a misas especiales en iglesias y en la Basilica de Nuestra Senora de la Paz',
      'Hacer peregrinaciones a la Basilica de Yamoussoukro',
      'Organizar procesiones religiosas por ciudades y pueblos',
      'Cantar himnos e interpretar musica cristiana tradicional',
      'Reuniones familiares y comidas festivas despues de los servicios religiosos',
      'Decorar iglesias con flores y estandartes',
    ],
  },

  funFacts: {
    en: [
      'The Basilica of Our Lady of Peace in Yamoussoukro can seat 7,000 people with standing room for 11,000 more.',
      'The basilica cost an estimated $300 million to build and was largely funded by President Houphouet-Boigny personally.',
      'Pope John Paul II agreed to consecrate the basilica on the condition that a hospital be built nearby.',
      "The Assumption is a public holiday in Cote d'Ivoire, reflecting the country's respect for Christian traditions despite its religious diversity.",
      "The basilica's dome is slightly taller than that of St. Peter's Basilica in Rome.",
    ],
    fr: [
      'La Basilique Notre-Dame de la Paix a Yamoussoukro peut accueillir 7 000 personnes assises et 11 000 debout.',
      'La basilique a coute environ 300 millions de dollars et a ete largement financee personnellement par le president Houphouet-Boigny.',
      "Le Pape Jean-Paul II a accepte de consacrer la basilique a condition qu'un hopital soit construit a proximite.",
      "L'Assomption est un jour ferie en Cote d'Ivoire, refletant le respect du pays pour les traditions chretiennes malgre sa diversite religieuse.",
      'Le dome de la basilique est legerement plus haut que celui de la basilique Saint-Pierre de Rome.',
    ],
    es: [
      'La Basilica de Nuestra Senora de la Paz en Yamoussoukro puede albergar 7.000 personas sentadas y 11.000 de pie.',
      'La basilica costo aproximadamente $300 millones y fue financiada en gran parte personalmente por el presidente Houphouet-Boigny.',
      'El Papa Juan Pablo II acepto consagrar la basilica con la condicion de que se construyera un hospital cercano.',
      'La Asuncion es un dia festivo en Costa de Marfil, reflejando el respeto del pais por las tradiciones cristianas a pesar de su diversidad religiosa.',
      'La cupula de la basilica es ligeramente mas alta que la de la Basilica de San Pedro en Roma.',
    ],
  },

  planningChecklist: {
    en: [
      'Check mass schedules at local churches for Assumption Day services',
      'Plan a pilgrimage to the Basilica of Our Lady of Peace in Yamoussoukro',
      'Prepare festive meals for family gatherings after church',
      'Arrange transportation if travelling to Yamoussoukro',
      'Decorate your home or church with flowers for the occasion',
    ],
    fr: [
      "Verifier les horaires des messes dans les eglises locales pour les services de l'Assomption",
      'Planifier un pelerinage a la Basilique Notre-Dame de la Paix a Yamoussoukro',
      "Preparer des repas festifs pour les reunions familiales apres l'eglise",
      'Organiser le transport si vous voyagez a Yamoussoukro',
      "Decorer votre maison ou eglise avec des fleurs pour l'occasion",
    ],
    es: [
      'Consultar los horarios de misas en las iglesias locales para los servicios de la Asuncion',
      'Planificar una peregrinacion a la Basilica de Nuestra Senora de la Paz en Yamoussoukro',
      'Preparar comidas festivas para reuniones familiares despues de la iglesia',
      'Organizar transporte si viaja a Yamoussoukro',
      'Decorar su hogar o iglesia con flores para la ocasion',
    ],
  },

  relatedHolidays: ['ci_christmas', 'ci_independence-day'],

  seo: {
    en: {
      titleTemplate: "Assumption of Mary {year} Cote d'Ivoire — Countdown & Guide",
      descriptionTemplate: "When is the Assumption {year} in Cote d'Ivoire? Live countdown to August 15, Basilica of Yamoussoukro, and celebration guide.",
      keywords: ["Assumption Cote d'Ivoire", "August 15 Ivory Coast", 'Basilica Yamoussoukro', "Cote d'Ivoire Christian holidays", "Cote d'Ivoire public holidays"],
    },
    fr: {
      titleTemplate: "Assomption {year} Cote d'Ivoire — Compte a rebours et guide",
      descriptionTemplate: "Quand est l'Assomption {year} en Cote d'Ivoire ? Compte a rebours, Basilique de Yamoussoukro et guide de celebration.",
      keywords: ["Assomption Cote d'Ivoire", "15 aout Cote d'Ivoire", 'Basilique Yamoussoukro', "fetes chretiennes Cote d'Ivoire", "jours feries Cote d'Ivoire"],
    },
    es: {
      titleTemplate: 'Asuncion de Maria {year} Costa de Marfil — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es la Asuncion {year} en Costa de Marfil? Cuenta regresiva, Basilica de Yamoussoukro y guia de celebracion.',
      keywords: ['Asuncion Costa de Marfil', '15 de agosto Costa de Marfil', 'Basilica Yamoussoukro', 'fiestas cristianas Costa de Marfil', 'dias festivos Costa de Marfil'],
    },
  },

  faq: [
    {
      question: { en: "When is the Assumption {year} in Cote d'Ivoire?", fr: "Quand est l'Assomption {year} en Cote d'Ivoire ?", es: 'Cuando es la Asuncion {year} en Costa de Marfil?' },
      answer: {
        en: "The Assumption {year} in Cote d'Ivoire is on {date}. It is always August 15 and is a national public holiday.",
        fr: "L'Assomption {year} en Cote d'Ivoire est le {date}. C'est toujours le 15 aout et c'est un jour ferie national.",
        es: 'La Asuncion {year} en Costa de Marfil es el {date}. Siempre es el 15 de agosto y es un dia festivo nacional.',
      },
    },
    {
      question: { en: "Why is the Assumption important in Cote d'Ivoire?", fr: "Pourquoi l'Assomption est-elle importante en Cote d'Ivoire ?", es: 'Por que es importante la Asuncion en Costa de Marfil?' },
      answer: {
        en: "The Assumption has special significance due to the Basilica of Our Lady of Peace in Yamoussoukro, the world's largest church. It is a major pilgrimage destination and a symbol of the country's Christian heritage.",
        fr: "L'Assomption a une signification speciale en raison de la Basilique Notre-Dame de la Paix a Yamoussoukro, la plus grande eglise du monde. C'est une destination de pelerinage majeure et un symbole du patrimoine chretien du pays.",
        es: 'La Asuncion tiene un significado especial debido a la Basilica de Nuestra Senora de la Paz en Yamoussoukro, la iglesia mas grande del mundo. Es un importante destino de peregrinacion y un simbolo del patrimonio cristiano del pais.',
      },
    },
    {
      question: { en: "Is the Assumption a public holiday in Cote d'Ivoire?", fr: "L'Assomption est-elle un jour ferie en Cote d'Ivoire ?", es: 'Es la Asuncion un dia festivo en Costa de Marfil?' },
      answer: {
        en: "Yes, the Assumption of Mary on August 15 is an official public holiday in Cote d'Ivoire, following the French tradition.",
        fr: "Oui, l'Assomption de Marie le 15 aout est un jour ferie officiel en Cote d'Ivoire, suivant la tradition francaise.",
        es: 'Si, la Asuncion de Maria el 15 de agosto es un dia festivo oficial en Costa de Marfil, siguiendo la tradicion francesa.',
      },
    },
    {
      question: { en: 'Can you visit the Basilica of Yamoussoukro?', fr: 'Peut-on visiter la Basilique de Yamoussoukro ?', es: 'Se puede visitar la Basilica de Yamoussoukro?' },
      answer: {
        en: "Yes, the Basilica of Our Lady of Peace is open to visitors year-round. The Assumption on August 15 is one of the biggest events of the year at the basilica, drawing thousands of pilgrims and tourists.",
        fr: "Oui, la Basilique Notre-Dame de la Paix est ouverte aux visiteurs toute l'annee. L'Assomption le 15 aout est l'un des plus grands evenements de l'annee a la basilique, attirant des milliers de pelerins et de touristes.",
        es: "Si, la Basilica de Nuestra Senora de la Paz esta abierta a los visitantes todo el ano. La Asuncion el 15 de agosto es uno de los mayores eventos del ano en la basilica, atrayendo a miles de peregrinos y turistas.",
      },
    },
  ],

  colorTheme: 'spring',
  icon: '✝️',
};

// ---------------------------------------------------------------------------
// Eid al-Fitr
// ---------------------------------------------------------------------------

const eidAlFitr: HolidayData = {
  id: 'ci_eid-al-fitr',
  countryCode: 'ci',
  slugs: { en: 'eid-al-fitr', fr: 'eid-al-fitr', es: 'eid-al-fitr' },
  names: { en: 'Eid al-Fitr', fr: "Eid al-Fitr", es: 'Eid al-Fitr' },

  dateType: 'calculated',
  calculateDate: getEidAlFitrDate,

  descriptions: {
    en: "Eid al-Fitr marks the end of Ramadan in Cote d'Ivoire and is a major celebration for the country's approximately 40% Muslim population. It is a public holiday celebrated with prayers, family feasts, and community gatherings.",
    fr: "L'Eid al-Fitr marque la fin du Ramadan en Cote d'Ivoire et est une celebration majeure pour les environ 40% de la population musulmane du pays. C'est un jour ferie celebre par des prieres, des festins familiaux et des rassemblements communautaires.",
    es: "El Eid al-Fitr marca el fin del Ramadan en Costa de Marfil y es una celebracion importante para aproximadamente el 40% de la poblacion musulmana del pais. Es un dia festivo celebrado con oraciones, banquetes familiares y reuniones comunitarias.",
  },

  history: {
    en: "Eid al-Fitr has been an important celebration in Cote d'Ivoire for centuries, long before French colonisation. Islam was introduced to the region through trans-Saharan trade routes and has deep roots in the northern and western parts of the country.\n\nThe Dyula and Malinke peoples of northern Cote d'Ivoire have celebrated Eid al-Fitr for hundreds of years. As Islam spread throughout the country, the holiday became a national celebration recognised by the government.\n\nIn modern Cote d'Ivoire, Eid al-Fitr is a public holiday that brings together Muslims from all ethnic backgrounds. The celebrations reflect the country's tradition of religious coexistence, with Christian and animist neighbours often joining in the festivities.",
    fr: "L'Eid al-Fitr est une celebration importante en Cote d'Ivoire depuis des siecles, bien avant la colonisation francaise. L'islam a ete introduit dans la region par les routes commerciales transsahariennes et a des racines profondes dans les parties nord et ouest du pays.\n\nLes peuples Dioula et Malinke du nord de la Cote d'Ivoire celebrent l'Eid al-Fitr depuis des centaines d'annees. A mesure que l'islam s'est repandu dans le pays, la fete est devenue une celebration nationale reconnue par le gouvernement.\n\nDans la Cote d'Ivoire moderne, l'Eid al-Fitr est un jour ferie qui rassemble les musulmans de tous les horizons ethniques. Les celebrations refletent la tradition de coexistence religieuse du pays, les voisins chretiens et animistes se joignant souvent aux festivites.",
    es: "El Eid al-Fitr ha sido una celebracion importante en Costa de Marfil durante siglos, mucho antes de la colonizacion francesa. El islam fue introducido en la region a traves de las rutas comerciales transaharianas y tiene raices profundas en las partes norte y oeste del pais.\n\nLos pueblos Dyula y Malinke del norte de Costa de Marfil han celebrado el Eid al-Fitr durante cientos de anos. A medida que el islam se extendio por el pais, la festividad se convirtio en una celebracion nacional reconocida por el gobierno.\n\nEn la Costa de Marfil moderna, el Eid al-Fitr es un dia festivo que reune a musulmanes de todos los origenes etnicos. Las celebraciones reflejan la tradicion de coexistencia religiosa del pais, con vecinos cristianos y animistas uniendose a menudo a las festividades.",
  },

  traditions: {
    en: [
      'Attending early morning Eid prayers at mosques and open prayer grounds',
      'Wearing new or finest traditional clothes',
      'Preparing festive meals including attieké with grilled meat',
      'Children receiving gifts of money and sweets',
      'Visiting relatives and friends to exchange greetings',
      'Sharing food with neighbours of all faiths',
    ],
    fr: [
      "Assister aux prieres matinales de l'Eid dans les mosquees et les espaces de priere en plein air",
      'Porter des vetements traditionnels neufs ou ses plus beaux habits',
      "Preparer des repas festifs incluant de l'attieke avec de la viande grillee",
      "Les enfants recoivent des cadeaux d'argent et des friandises",
      'Rendre visite aux proches et amis pour echanger des voeux',
      'Partager la nourriture avec les voisins de toutes confessions',
    ],
    es: [
      'Asistir a las oraciones matutinas del Eid en mezquitas y espacios de oracion al aire libre',
      'Vestir ropa tradicional nueva o la mejor vestimenta',
      'Preparar comidas festivas incluyendo attieke con carne a la parrilla',
      'Los ninos reciben regalos de dinero y dulces',
      'Visitar a parientes y amigos para intercambiar saludos',
      'Compartir comida con vecinos de todas las confesiones',
    ],
  },

  funFacts: {
    en: [
      "Cote d'Ivoire's Muslim population is concentrated in the north, but significant communities exist in Abidjan and other southern cities.",
      'The Grand Mosque of Abidjan in the Plateau district is a major gathering point for Eid prayers.',
      "Eid al-Fitr in Cote d'Ivoire features a unique blend of Islamic tradition and West African cultural elements.",
      'Many Ivorian Muslim families prepare attieké and grilled meat alongside traditional Islamic dishes for Eid.',
      "The holiday promotes interfaith harmony, with Muslims, Christians, and followers of traditional religions celebrating together in many communities.",
    ],
    fr: [
      "La population musulmane de Cote d'Ivoire est concentree dans le nord, mais des communautes significatives existent a Abidjan et dans d'autres villes du sud.",
      "La Grande Mosquee d'Abidjan dans le quartier du Plateau est un point de rassemblement majeur pour les prieres de l'Eid.",
      "L'Eid al-Fitr en Cote d'Ivoire presente un melange unique de tradition islamique et d'elements culturels ouest-africains.",
      "De nombreuses familles musulmanes ivoiriennes preparent de l'attieke et de la viande grillee aux cotes de plats islamiques traditionnels pour l'Eid.",
      'Cette fete favorise l\'harmonie interconfessionnelle, les musulmans, chretiens et adeptes des religions traditionnelles celebrant ensemble dans de nombreuses communautes.',
    ],
    es: [
      'La poblacion musulmana de Costa de Marfil se concentra en el norte, pero existen comunidades significativas en Abidjan y otras ciudades del sur.',
      'La Gran Mezquita de Abidjan en el distrito de Plateau es un importante punto de reunion para las oraciones del Eid.',
      'El Eid al-Fitr en Costa de Marfil presenta una mezcla unica de tradicion islamica y elementos culturales de Africa Occidental.',
      'Muchas familias musulmanas marfilenas preparan attieke y carne a la parrilla junto con platos islamicos tradicionales para el Eid.',
      'La festividad promueve la armonia interreligiosa, con musulmanes, cristianos y seguidores de religiones tradicionales celebrando juntos en muchas comunidades.',
    ],
  },

  planningChecklist: {
    en: [
      'Purchase new clothes for the family to wear on Eid',
      'Stock up on ingredients for festive meals',
      'Prepare gifts and sweets for children',
      'Plan visits to family and friends for Eid greetings',
      'Follow moon sighting announcements for the exact date',
    ],
    fr: [
      "Acheter de nouveaux vetements pour la famille a porter pour l'Eid",
      "S'approvisionner en ingredients pour les repas festifs",
      'Preparer des cadeaux et des friandises pour les enfants',
      "Planifier les visites a la famille et aux amis pour les voeux de l'Eid",
      "Suivre les annonces d'observation de la lune pour la date exacte",
    ],
    es: [
      'Comprar ropa nueva para que la familia use en el Eid',
      'Abastecerse de ingredientes para las comidas festivas',
      'Preparar regalos y dulces para los ninos',
      'Planificar visitas a familiares y amigos para los saludos del Eid',
      'Seguir los anuncios de avistamiento de la luna para la fecha exacta',
    ],
  },

  relatedHolidays: ['ci_christmas', 'ci_assumption'],

  seo: {
    en: {
      titleTemplate: "Eid al-Fitr {year} Cote d'Ivoire — Countdown & Guide",
      descriptionTemplate: "When is Eid al-Fitr {year} in Cote d'Ivoire? Live countdown, traditions, and celebration guide for the end of Ramadan.",
      keywords: ["Eid al-Fitr Cote d'Ivoire", 'Eid Ivory Coast', "Ramadan Cote d'Ivoire", 'Ivory Coast Muslim holidays', "Cote d'Ivoire holidays"],
    },
    fr: {
      titleTemplate: "Eid al-Fitr {year} Cote d'Ivoire — Compte a rebours et guide",
      descriptionTemplate: "Quand est l'Eid al-Fitr {year} en Cote d'Ivoire ? Compte a rebours, traditions et guide de celebration.",
      keywords: ["Eid al-Fitr Cote d'Ivoire", "Ramadan Cote d'Ivoire", "fetes musulmanes Cote d'Ivoire", "jours feries Cote d'Ivoire", "Eid Abidjan"],
    },
    es: {
      titleTemplate: 'Eid al-Fitr {year} Costa de Marfil — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Eid al-Fitr {year} en Costa de Marfil? Cuenta regresiva, tradiciones y guia de celebracion.',
      keywords: ['Eid al-Fitr Costa de Marfil', 'Ramadan Costa de Marfil', 'fiestas musulmanas Costa de Marfil', 'dias festivos Costa de Marfil', 'Eid Abidjan'],
    },
  },

  faq: [
    {
      question: { en: "When is Eid al-Fitr {year} in Cote d'Ivoire?", fr: "Quand est l'Eid al-Fitr {year} en Cote d'Ivoire ?", es: 'Cuando es el Eid al-Fitr {year} en Costa de Marfil?' },
      answer: {
        en: "Eid al-Fitr {year} in Cote d'Ivoire is expected around {date}. The exact date depends on the sighting of the new moon.",
        fr: "L'Eid al-Fitr {year} en Cote d'Ivoire est prevu aux alentours du {date}. La date exacte depend de l'observation du nouveau croissant de lune.",
        es: 'El Eid al-Fitr {year} en Costa de Marfil se espera alrededor del {date}. La fecha exacta depende del avistamiento de la luna nueva.',
      },
    },
    {
      question: { en: "Is Eid al-Fitr a public holiday in Cote d'Ivoire?", fr: "L'Eid al-Fitr est-il un jour ferie en Cote d'Ivoire ?", es: 'Es el Eid al-Fitr un dia festivo en Costa de Marfil?' },
      answer: {
        en: "Yes, Eid al-Fitr is an official public holiday in Cote d'Ivoire, recognising the country's significant Muslim population.",
        fr: "Oui, l'Eid al-Fitr est un jour ferie officiel en Cote d'Ivoire, reconnaissant l'importante population musulmane du pays.",
        es: 'Si, el Eid al-Fitr es un dia festivo oficial en Costa de Marfil, reconociendo la significativa poblacion musulmana del pais.',
      },
    },
    {
      question: { en: "What percentage of Cote d'Ivoire is Muslim?", fr: "Quel pourcentage de la Cote d'Ivoire est musulman ?", es: 'Que porcentaje de Costa de Marfil es musulman?' },
      answer: {
        en: "Approximately 40% of the population of Cote d'Ivoire is Muslim, concentrated primarily in the northern regions but with significant communities throughout the country.",
        fr: "Environ 40% de la population de la Cote d'Ivoire est musulmane, concentree principalement dans les regions du nord mais avec des communautes significatives a travers tout le pays.",
        es: 'Aproximadamente el 40% de la poblacion de Costa de Marfil es musulmana, concentrada principalmente en las regiones del norte pero con comunidades significativas en todo el pais.',
      },
    },
    {
      question: { en: "How do Ivorians celebrate Eid al-Fitr?", fr: "Comment les Ivoiriens celebrent-ils l'Eid al-Fitr ?", es: 'Como celebran los marfilenos el Eid al-Fitr?' },
      answer: {
        en: "Ivorians celebrate with communal morning prayers, festive family meals, new clothes, gift-giving to children, and visiting friends and neighbours. The celebrations blend Islamic traditions with West African cultural elements.",
        fr: "Les Ivoiriens celebrent avec des prieres communautaires matinales, des repas festifs en famille, de nouveaux vetements, des cadeaux aux enfants et des visites aux amis et voisins. Les celebrations melangent les traditions islamiques avec des elements culturels ouest-africains.",
        es: 'Los marfilenos celebran con oraciones comunitarias matutinas, comidas festivas familiares, ropa nueva, regalos a los ninos y visitas a amigos y vecinos. Las celebraciones mezclan tradiciones islamicas con elementos culturales de Africa Occidental.',
      },
    },
  ],

  colorTheme: 'autumn',
  icon: '🌙',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'ci_christmas',
  countryCode: 'ci',
  slugs: { en: 'christmas', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noel', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: "Christmas Day on December 25 is a public holiday in Cote d'Ivoire, known as Noel. It is widely celebrated by the Christian population and embraced as a festive occasion across the religiously diverse nation.",
    fr: "Le jour de Noel, le 25 decembre, est un jour ferie en Cote d'Ivoire. Il est largement celebre par la population chretienne et accueilli comme une occasion festive dans cette nation religieusement diverse.",
    es: "El dia de Navidad, el 25 de diciembre, es un dia festivo en Costa de Marfil, conocido como Noel. Es ampliamente celebrado por la poblacion cristiana y acogido como una ocasion festiva en esta nacion religiosamente diversa.",
  },

  history: {
    en: "Christmas has been celebrated in Cote d'Ivoire since the introduction of Christianity by French missionaries in the 19th century. The holiday grew in importance during the colonial period and was maintained as a public holiday after independence in 1960.\n\nPresident Houphouet-Boigny, a devout Catholic, championed Christmas as a national celebration. The construction of the Basilica of Our Lady of Peace in Yamoussoukro further cemented the importance of Christian holidays in the national calendar.\n\nToday, Christmas is celebrated with a blend of French traditions and Ivorian culture. Urban areas like Abidjan see elaborate decorations, while rural communities celebrate with traditional music and communal gatherings.",
    fr: "Noel est celebre en Cote d'Ivoire depuis l'introduction du christianisme par les missionnaires francais au XIXe siecle. La fete a gagne en importance pendant la periode coloniale et a ete maintenue comme jour ferie apres l'independance en 1960.\n\nLe president Houphouet-Boigny, catholique devot, a defendu Noel comme une celebration nationale. La construction de la Basilique Notre-Dame de la Paix a Yamoussoukro a encore renforce l'importance des fetes chretiennes dans le calendrier national.\n\nAujourd'hui, Noel est celebre avec un melange de traditions francaises et de culture ivoirienne. Les zones urbaines comme Abidjan voient des decorations elaborees, tandis que les communautes rurales celebrent avec de la musique traditionnelle et des rassemblements communautaires.",
    es: "La Navidad se celebra en Costa de Marfil desde la introduccion del cristianismo por misioneros franceses en el siglo XIX. La festividad crecio en importancia durante el periodo colonial y se mantuvo como dia festivo despues de la independencia en 1960.\n\nEl presidente Houphouet-Boigny, un devoto catolico, defendio la Navidad como una celebracion nacional. La construccion de la Basilica de Nuestra Senora de la Paz en Yamoussoukro consolido aun mas la importancia de las fiestas cristianas en el calendario nacional.\n\nHoy, la Navidad se celebra con una mezcla de tradiciones francesas y cultura marfilena. Las areas urbanas como Abidjan ven decoraciones elaboradas, mientras que las comunidades rurales celebran con musica tradicional y reuniones comunitarias.",
  },

  traditions: {
    en: [
      'Attending midnight mass at churches across the country',
      'Decorating homes and streets with lights and Christmas trees',
      'Preparing festive meals blending French and Ivorian cuisine',
      'Exchanging gifts among family and friends',
      'Children receiving presents and treats',
      'Community celebrations with live music and dancing',
    ],
    fr: [
      'Assister a la messe de minuit dans les eglises a travers le pays',
      'Decorer les maisons et les rues avec des lumieres et des sapins de Noel',
      'Preparer des repas festifs melant cuisine francaise et ivoirienne',
      'Echanger des cadeaux entre famille et amis',
      'Les enfants recoivent des cadeaux et des friandises',
      'Celebrations communautaires avec musique live et danse',
    ],
    es: [
      'Asistir a la misa de medianoche en iglesias de todo el pais',
      'Decorar hogares y calles con luces y arboles de Navidad',
      'Preparar comidas festivas que mezclan cocina francesa y marfilena',
      'Intercambiar regalos entre familia y amigos',
      'Los ninos reciben regalos y dulces',
      'Celebraciones comunitarias con musica en vivo y baile',
    ],
  },

  funFacts: {
    en: [
      "Christmas in Cote d'Ivoire is celebrated in tropical heat, with temperatures often exceeding 30°C (86°F).",
      'The Plateau district in Abidjan is decorated with elaborate Christmas lights and displays during the holiday season.',
      "Ivorian Christmas meals often feature both French-style dishes and traditional West African cuisine like foutou and kedjenou.",
      "Despite being religiously diverse, Cote d'Ivoire celebrates both Christian and Muslim holidays as public holidays.",
      'Many Ivorian families exchange gifts on Christmas Eve rather than Christmas morning, following the French tradition.',
    ],
    fr: [
      "Noel en Cote d'Ivoire est celebre sous la chaleur tropicale, avec des temperatures depassant souvent 30°C.",
      "Le quartier du Plateau a Abidjan est decore avec des illuminations de Noel elaborees pendant la periode des fetes.",
      "Les repas de Noel ivoiriens melangent souvent des plats a la francaise et la cuisine traditionnelle ouest-africaine comme le foutou et le kedjenou.",
      "Malgre sa diversite religieuse, la Cote d'Ivoire celebre les fetes chretiennes et musulmanes comme jours feries.",
      'De nombreuses familles ivoiriennes echangent des cadeaux le soir du reveillon plutot que le matin de Noel, suivant la tradition francaise.',
    ],
    es: [
      'La Navidad en Costa de Marfil se celebra bajo el calor tropical, con temperaturas que a menudo superan los 30°C.',
      'El distrito de Plateau en Abidjan se decora con elaboradas luces navidenas durante la temporada festiva.',
      'Las comidas navidenas marfilenas a menudo incluyen platos al estilo frances y cocina tradicional de Africa Occidental como foutou y kedjenou.',
      'A pesar de su diversidad religiosa, Costa de Marfil celebra tanto las fiestas cristianas como musulmanas como dias festivos.',
      'Muchas familias marfilenas intercambian regalos en Nochebuena en lugar de la manana de Navidad, siguiendo la tradicion francesa.',
    ],
  },

  planningChecklist: {
    en: [
      'Check mass schedules at local churches for Christmas Eve and Christmas Day',
      'Purchase gifts for family and friends',
      'Prepare festive meals with traditional Ivorian and French dishes',
      'Decorate the home with lights and a Christmas tree',
      'Plan family visits and celebrations',
    ],
    fr: [
      'Verifier les horaires des messes pour le reveillon et le jour de Noel',
      'Acheter des cadeaux pour la famille et les amis',
      'Preparer des repas festifs avec des plats traditionnels ivoiriens et francais',
      'Decorer la maison avec des lumieres et un sapin de Noel',
      'Planifier les visites familiales et les celebrations',
    ],
    es: [
      'Consultar los horarios de misas para Nochebuena y el dia de Navidad',
      'Comprar regalos para familia y amigos',
      'Preparar comidas festivas con platos tradicionales marfilenos y franceses',
      'Decorar el hogar con luces y un arbol de Navidad',
      'Planificar visitas familiares y celebraciones',
    ],
  },

  relatedHolidays: ['ci_new-years-day', 'ci_assumption'],

  seo: {
    en: {
      titleTemplate: "Christmas Day {year} Cote d'Ivoire — Countdown & Guide",
      descriptionTemplate: "When is Christmas {year} in Cote d'Ivoire? Live countdown to December 25, Noel traditions, and celebration guide.",
      keywords: ["Christmas Cote d'Ivoire", "Noel Cote d'Ivoire", 'Ivory Coast Christmas', "December 25 Cote d'Ivoire", "Cote d'Ivoire holidays"],
    },
    fr: {
      titleTemplate: "Noel {year} Cote d'Ivoire — Compte a rebours et guide",
      descriptionTemplate: "Quand est Noel {year} en Cote d'Ivoire ? Compte a rebours, traditions et guide de celebration.",
      keywords: ["Noel Cote d'Ivoire", "fete de Noel Cote d'Ivoire", "25 decembre Cote d'Ivoire", 'Noel Abidjan', "jours feries Cote d'Ivoire"],
    },
    es: {
      titleTemplate: 'Navidad {year} Costa de Marfil — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es Navidad {year} en Costa de Marfil? Cuenta regresiva, tradiciones y guia de celebracion.',
      keywords: ['Navidad Costa de Marfil', 'Noel Costa de Marfil', '25 de diciembre Costa de Marfil', 'Navidad Abidjan', 'dias festivos Costa de Marfil'],
    },
  },

  faq: [
    {
      question: { en: "When is Christmas {year} in Cote d'Ivoire?", fr: "Quand est Noel {year} en Cote d'Ivoire ?", es: 'Cuando es Navidad {year} en Costa de Marfil?' },
      answer: {
        en: "Christmas {year} in Cote d'Ivoire is on {date}. It is always December 25 and is a national public holiday.",
        fr: "Noel {year} en Cote d'Ivoire est le {date}. C'est toujours le 25 decembre et c'est un jour ferie national.",
        es: 'Navidad {year} en Costa de Marfil es el {date}. Siempre es el 25 de diciembre y es un dia festivo nacional.',
      },
    },
    {
      question: { en: "Is Christmas a public holiday in Cote d'Ivoire?", fr: "Noel est-il un jour ferie en Cote d'Ivoire ?", es: 'Es la Navidad un dia festivo en Costa de Marfil?' },
      answer: {
        en: "Yes, Christmas is an official public holiday in Cote d'Ivoire. Government offices, banks, and most businesses are closed.",
        fr: "Oui, Noel est un jour ferie officiel en Cote d'Ivoire. Les bureaux gouvernementaux, les banques et la plupart des commerces sont fermes.",
        es: 'Si, la Navidad es un dia festivo oficial en Costa de Marfil. Las oficinas gubernamentales, bancos y la mayoria de los negocios estan cerrados.',
      },
    },
    {
      question: { en: "What is a typical Ivorian Christmas meal?", fr: 'Quel est un repas de Noel ivoirien typique ?', es: 'Cual es una comida navidena tipica marfilena?' },
      answer: {
        en: "Ivorian Christmas meals blend French and West African cuisine. Common dishes include kedjenou (slow-cooked chicken stew), foutou (pounded plantain), attieké with grilled fish, and French-style desserts like buche de Noel.",
        fr: "Les repas de Noel ivoiriens melangent la cuisine francaise et ouest-africaine. Les plats courants incluent le kedjenou (ragout de poulet mijote), le foutou (banane plantain pilee), l'attieke avec du poisson grille et des desserts a la francaise comme la buche de Noel.",
        es: 'Las comidas navidenas marfilenas mezclan cocina francesa y de Africa Occidental. Los platos comunes incluyen kedjenou (estofado de pollo cocido lentamente), foutou (platano machacado), attieke con pescado a la parrilla y postres al estilo frances como buche de Noel.',
      },
    },
    {
      question: { en: "Do Muslims celebrate Christmas in Cote d'Ivoire?", fr: "Les musulmans celebrent-ils Noel en Cote d'Ivoire ?", es: 'Los musulmanes celebran la Navidad en Costa de Marfil?' },
      answer: {
        en: "While Muslims do not observe Christmas as a religious holiday, many Muslim Ivorians participate in the festive atmosphere, exchange greetings with Christian friends, and enjoy the holiday as a time of national celebration and unity.",
        fr: "Bien que les musulmans n'observent pas Noel comme fete religieuse, de nombreux Ivoiriens musulmans participent a l'atmosphere festive, echangent des voeux avec leurs amis chretiens et apprecient la fete comme un moment de celebration nationale et d'unite.",
        es: 'Aunque los musulmanes no observan la Navidad como fiesta religiosa, muchos marfilenos musulmanes participan en el ambiente festivo, intercambian saludos con amigos cristianos y disfrutan de la festividad como un momento de celebracion nacional y unidad.',
      },
    },
  ],

  colorTheme: 'christmas',
  icon: '🎄',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const ciHolidays: HolidayData[] = [
  newYearsDay,
  labourDay,
  independenceDay,
  assumption,
  eidAlFitr,
  christmas,
];

export default ciHolidays;
