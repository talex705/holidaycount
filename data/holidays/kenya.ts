/**
 * Kenya holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getEidAlFitrDate } from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'ke_new-years-day',
  countryCode: 'ke',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'dia-de-ano-nuevo' },
  names: { en: "New Year's Day", fr: 'Jour de l\'An', es: 'D\u00eda de A\u00f1o Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 is a public holiday in Kenya, marking the start of the calendar year. Kenyans celebrate with parties, church services, and family gatherings to welcome the new year with hope and resolutions.",
    fr: "Le Jour de l'An, le 1er janvier, est un jour f\u00e9ri\u00e9 au Kenya, marquant le d\u00e9but de l'ann\u00e9e civile. Les K\u00e9nyans c\u00e9l\u00e8brent avec des f\u00eates, des services religieux et des r\u00e9unions familiales pour accueillir la nouvelle ann\u00e9e.",
    es: "El D\u00eda de A\u00f1o Nuevo, el 1 de enero, es un d\u00eda festivo en Kenia, marcando el inicio del a\u00f1o calendario. Los kenianos celebran con fiestas, servicios religiosos y reuniones familiares para recibir el nuevo a\u00f1o.",
  },

  history: {
    en: "New Year's Day has been observed as a public holiday in Kenya since independence. The celebration reflects both Western traditions adopted during the colonial period and unique Kenyan cultural practices.\n\nIn major cities like Nairobi and Mombasa, the night of December 31 is marked with large public celebrations, fireworks, and concerts. Many Kenyans attend special \"crossover\" church services that begin late on New Year's Eve and continue past midnight.\n\nFor many Kenyans, New Year's Day is also a time for reflection and setting goals for the year ahead. It is common for families to gather for meals, visit relatives, and participate in community events. The holiday season extends from Christmas through New Year's, making it one of the longest holiday periods in Kenya.",
    fr: "Le Jour de l'An est observ\u00e9 comme jour f\u00e9ri\u00e9 au Kenya depuis l'ind\u00e9pendance. La c\u00e9l\u00e9bration refl\u00e8te \u00e0 la fois les traditions occidentales adopt\u00e9es pendant la p\u00e9riode coloniale et les pratiques culturelles k\u00e9nyanes uniques.\n\nDans les grandes villes comme Nairobi et Mombasa, la nuit du 31 d\u00e9cembre est marqu\u00e9e par de grandes c\u00e9l\u00e9brations publiques, des feux d'artifice et des concerts. De nombreux K\u00e9nyans assistent \u00e0 des services religieux sp\u00e9ciaux de \u00ab passage \u00bb qui commencent tard le soir du Nouvel An et continuent apr\u00e8s minuit.\n\nPour de nombreux K\u00e9nyans, le Jour de l'An est aussi un moment de r\u00e9flexion et d'\u00e9tablissement d'objectifs. Il est courant que les familles se r\u00e9unissent pour des repas et visitent des parents. La p\u00e9riode des f\u00eates s'\u00e9tend de No\u00ebl au Nouvel An, ce qui en fait l'une des plus longues p\u00e9riodes de vacances au Kenya.",
    es: "El D\u00eda de A\u00f1o Nuevo se ha observado como d\u00eda festivo en Kenia desde la independencia. La celebraci\u00f3n refleja tanto las tradiciones occidentales adoptadas durante el per\u00edodo colonial como las pr\u00e1cticas culturales kenianas \u00fanicas.\n\nEn las principales ciudades como Nairobi y Mombasa, la noche del 31 de diciembre se marca con grandes celebraciones p\u00fablicas, fuegos artificiales y conciertos. Muchos kenianos asisten a servicios religiosos especiales de \"transici\u00f3n\" que comienzan tarde en la v\u00edspera de A\u00f1o Nuevo y contin\u00faan despu\u00e9s de medianoche.\n\nPara muchos kenianos, el D\u00eda de A\u00f1o Nuevo es tambi\u00e9n un momento de reflexi\u00f3n y establecimiento de metas. Es com\u00fan que las familias se re\u00fanan para comidas y visiten a parientes. La temporada festiva se extiende desde Navidad hasta A\u00f1o Nuevo, lo que la convierte en uno de los per\u00edodos vacacionales m\u00e1s largos en Kenia.",
  },

  traditions: {
    en: [
      'Attending "crossover" church services from New Year\'s Eve into New Year\'s Day',
      'Fireworks and public celebrations in Nairobi and Mombasa',
      'Family gatherings with special meals featuring nyama choma (grilled meat)',
      'Making New Year\'s resolutions and setting goals',
      'Visiting friends and relatives to exchange well-wishes',
      'Beach celebrations along the Kenyan coast',
    ],
    fr: [
      'Assister aux services religieux de \u00ab passage \u00bb du Nouvel An',
      'Feux d\'artifice et c\u00e9l\u00e9brations publiques \u00e0 Nairobi et Mombasa',
      'R\u00e9unions familiales avec des repas sp\u00e9ciaux incluant du nyama choma (viande grill\u00e9e)',
      'Prendre des r\u00e9solutions et fixer des objectifs pour la nouvelle ann\u00e9e',
      'Rendre visite \u00e0 des amis et des parents pour \u00e9changer des v\u0153ux',
      'C\u00e9l\u00e9brations sur la plage le long de la c\u00f4te k\u00e9nyane',
    ],
    es: [
      'Asistir a servicios religiosos de "transici\u00f3n" de la v\u00edspera al d\u00eda de A\u00f1o Nuevo',
      'Fuegos artificiales y celebraciones p\u00fablicas en Nairobi y Mombasa',
      'Reuniones familiares con comidas especiales incluyendo nyama choma (carne a la parrilla)',
      'Hacer resoluciones de A\u00f1o Nuevo y establecer metas',
      'Visitar amigos y parientes para intercambiar buenos deseos',
      'Celebraciones en la playa a lo largo de la costa keniana',
    ],
  },

  funFacts: {
    en: [
      'Many Kenyans attend all-night "crossover" church services that last from New Year\'s Eve until the early hours of January 1.',
      'The Kenyan coast, especially Mombasa and Diani Beach, is a popular New Year\'s destination for both locals and tourists.',
      'Nyama choma, Kenya\'s beloved grilled meat, is a staple at New Year\'s celebrations across the country.',
      'Nairobi\'s Uhuru Gardens and major hotels host some of the largest public New Year\'s Eve events in East Africa.',
      'Many Kenyan communities hold outdoor celebrations that combine music, dance, and traditional performances.',
    ],
    fr: [
      'De nombreux K\u00e9nyans assistent \u00e0 des services religieux de \u00ab passage \u00bb toute la nuit, du Nouvel An jusqu\'aux premi\u00e8res heures du 1er janvier.',
      'La c\u00f4te k\u00e9nyane, en particulier Mombasa et Diani Beach, est une destination populaire pour le Nouvel An.',
      'Le nyama choma, la viande grill\u00e9e bien-aim\u00e9e du Kenya, est un incontournable des c\u00e9l\u00e9brations du Nouvel An.',
      'Les jardins Uhuru de Nairobi et les grands h\u00f4tels accueillent certains des plus grands \u00e9v\u00e9nements de la Saint-Sylvestre en Afrique de l\'Est.',
      'De nombreuses communaut\u00e9s k\u00e9nyanes organisent des c\u00e9l\u00e9brations en plein air m\u00ealant musique, danse et spectacles traditionnels.',
    ],
    es: [
      'Muchos kenianos asisten a servicios religiosos de "transici\u00f3n" que duran toda la noche desde la v\u00edspera hasta las primeras horas del 1 de enero.',
      'La costa keniana, especialmente Mombasa y Diani Beach, es un destino popular de A\u00f1o Nuevo para locales y turistas.',
      'El nyama choma, la querida carne a la parrilla de Kenia, es un elemento b\u00e1sico en las celebraciones de A\u00f1o Nuevo.',
      'Los Jardines Uhuru de Nairobi y los principales hoteles organizan algunos de los eventos p\u00fablicos de A\u00f1o Nuevo m\u00e1s grandes de \u00c1frica Oriental.',
      'Muchas comunidades kenianas realizan celebraciones al aire libre que combinan m\u00fasica, danza y presentaciones tradicionales.',
    ],
  },

  planningChecklist: {
    en: [
      'Book accommodation at coastal resorts early if celebrating at the beach',
      'Attend a crossover church service on New Year\'s Eve',
      'Prepare nyama choma and other festive foods for family gatherings',
      'Plan travel well in advance as roads are busy during the holiday season',
      'Check local event listings for public celebrations and concerts',
    ],
    fr: [
      'R\u00e9server un h\u00e9bergement dans les stations baln\u00e9aires t\u00f4t si vous c\u00e9l\u00e9brez \u00e0 la plage',
      'Assister \u00e0 un service de \u00ab passage \u00bb la veille du Nouvel An',
      'Pr\u00e9parer du nyama choma et d\'autres plats festifs pour les r\u00e9unions familiales',
      'Planifier les d\u00e9placements \u00e0 l\'avance car les routes sont charg\u00e9es pendant les f\u00eates',
      'Consulter les programmes locaux pour les c\u00e9l\u00e9brations publiques et les concerts',
    ],
    es: [
      'Reservar alojamiento en resorts costeros con anticipaci\u00f3n si celebra en la playa',
      'Asistir a un servicio religioso de transici\u00f3n en la v\u00edspera de A\u00f1o Nuevo',
      'Preparar nyama choma y otras comidas festivas para reuniones familiares',
      'Planificar los viajes con antelaci\u00f3n ya que las carreteras est\u00e1n congestionadas durante la temporada',
      'Consultar las listas de eventos locales para celebraciones p\u00fablicas y conciertos',
    ],
  },

  relatedHolidays: ['ke_christmas', 'ke_jamhuri-day'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Kenya \u2014 Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in Kenya? Live countdown to January 1, celebrations, and holiday guide.",
      keywords: ["New Year's Day Kenya", 'January 1 Kenya', 'Kenya public holiday', 'Nairobi New Year', 'Kenya New Year countdown'],
    },
    fr: {
      titleTemplate: "Jour de l'An {year} Kenya \u2014 Compte \u00e0 rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'An {year} au Kenya ? Compte \u00e0 rebours en direct jusqu'au 1er janvier et guide de c\u00e9l\u00e9bration.",
      keywords: ["Jour de l'An Kenya", '1er janvier Kenya', 'jour f\u00e9ri\u00e9 Kenya', 'Nouvel An Nairobi', "compte \u00e0 rebours Nouvel An Kenya"],
    },
    es: {
      titleTemplate: 'D\u00eda de A\u00f1o Nuevo {year} Kenia \u2014 Cuenta regresiva y gu\u00eda',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda de A\u00f1o Nuevo {year} en Kenia? Cuenta regresiva en vivo hasta el 1 de enero y gu\u00eda de celebraci\u00f3n.',
      keywords: ['A\u00f1o Nuevo Kenia', '1 de enero Kenia', 'd\u00eda festivo Kenia', 'A\u00f1o Nuevo Nairobi', 'cuenta regresiva A\u00f1o Nuevo Kenia'],
    },
  },

  faq: [
    {
      question: {
        en: "When is New Year's Day {year} in Kenya?",
        fr: "Quand est le Jour de l'An {year} au Kenya ?",
        es: '\u00bfCu\u00e1ndo es el D\u00eda de A\u00f1o Nuevo {year} en Kenia?',
      },
      answer: {
        en: "New Year's Day {year} in Kenya is on {date} ({dayOfWeek}). It is always celebrated on January 1.",
        fr: "Le Jour de l'An {year} au Kenya est le {date} ({dayOfWeek}). Il est toujours c\u00e9l\u00e9br\u00e9 le 1er janvier.",
        es: 'El D\u00eda de A\u00f1o Nuevo {year} en Kenia es el {date} ({dayOfWeek}). Siempre se celebra el 1 de enero.',
      },
    },
    {
      question: {
        en: "Is New Year's Day a public holiday in Kenya?",
        fr: "Le Jour de l'An est-il un jour f\u00e9ri\u00e9 au Kenya ?",
        es: '\u00bfEl D\u00eda de A\u00f1o Nuevo es un d\u00eda festivo en Kenia?',
      },
      answer: {
        en: "Yes, New Year's Day is an official public holiday in Kenya. Government offices, banks, and most businesses are closed.",
        fr: "Oui, le Jour de l'An est un jour f\u00e9ri\u00e9 officiel au Kenya. Les bureaux gouvernementaux, les banques et la plupart des entreprises sont ferm\u00e9s.",
        es: 'S\u00ed, el D\u00eda de A\u00f1o Nuevo es un d\u00eda festivo oficial en Kenia. Las oficinas gubernamentales, bancos y la mayor\u00eda de negocios est\u00e1n cerrados.',
      },
    },
    {
      question: {
        en: 'What are crossover services in Kenya?',
        fr: "Que sont les services de \u00ab passage \u00bb au Kenya ?",
        es: '\u00bfQu\u00e9 son los servicios de transici\u00f3n en Kenia?',
      },
      answer: {
        en: "Crossover services are special church services held on New Year's Eve that extend past midnight into January 1. They are extremely popular in Kenya, with many churches holding all-night prayer and worship sessions to welcome the new year spiritually.",
        fr: "Les services de \u00ab passage \u00bb sont des services religieux sp\u00e9ciaux tenus la veille du Nouvel An qui s'\u00e9tendent au-del\u00e0 de minuit. Ils sont tr\u00e8s populaires au Kenya, avec de nombreuses \u00e9glises organisant des sessions de pri\u00e8re toute la nuit.",
        es: 'Los servicios de transici\u00f3n son servicios religiosos especiales celebrados en la v\u00edspera de A\u00f1o Nuevo que se extienden pasada la medianoche. Son muy populares en Kenia, con muchas iglesias celebrando sesiones de oraci\u00f3n durante toda la noche.',
      },
    },
    {
      question: {
        en: 'How do Kenyans celebrate New Year?',
        fr: 'Comment les K\u00e9nyans c\u00e9l\u00e8brent-ils le Nouvel An ?',
        es: '\u00bfC\u00f3mo celebran los kenianos el A\u00f1o Nuevo?',
      },
      answer: {
        en: "Kenyans celebrate with church services, family meals featuring nyama choma, fireworks in major cities, beach parties along the coast, and community gatherings. Many also make resolutions and visit relatives during the day.",
        fr: "Les K\u00e9nyans c\u00e9l\u00e8brent avec des services religieux, des repas familiaux avec du nyama choma, des feux d'artifice dans les grandes villes, des f\u00eates \u00e0 la plage le long de la c\u00f4te et des rassemblements communautaires.",
        es: 'Los kenianos celebran con servicios religiosos, comidas familiares con nyama choma, fuegos artificiales en las principales ciudades, fiestas en la playa a lo largo de la costa y reuniones comunitarias.',
      },
    },
  ],

  colorTheme: 'gold-black',
  icon: '\ud83c\udf86',
};

// ---------------------------------------------------------------------------
// Madaraka Day — June 1
// ---------------------------------------------------------------------------

const madarakaDay: HolidayData = {
  id: 'ke_madaraka-day',
  countryCode: 'ke',
  slugs: { en: 'madaraka-day', fr: 'jour-madaraka', es: 'dia-madaraka' },
  names: { en: 'Madaraka Day', fr: 'Jour Madaraka', es: 'D\u00eda Madaraka' },

  dateType: 'fixed',
  fixedMonth: 6,
  fixedDay: 1,

  descriptions: {
    en: "Madaraka Day on June 1 marks the day Kenya attained internal self-governance in 1963, before gaining full independence on December 12 the same year. \"Madaraka\" means \"power\" or \"authority\" in Swahili, symbolizing Kenya's step toward sovereignty.",
    fr: "Le Jour Madaraka, le 1er juin, marque le jour o\u00f9 le Kenya a obtenu l'autonomie interne en 1963, avant de gagner la pleine ind\u00e9pendance le 12 d\u00e9cembre de la m\u00eame ann\u00e9e. \u00ab Madaraka \u00bb signifie \u00ab pouvoir \u00bb ou \u00ab autorit\u00e9 \u00bb en swahili.",
    es: "El D\u00eda Madaraka, el 1 de junio, marca el d\u00eda en que Kenia obtuvo la autogobernan\u00e7a interna en 1963, antes de obtener la independencia plena el 12 de diciembre del mismo a\u00f1o. \"Madaraka\" significa \"poder\" o \"autoridad\" en suajili.",
  },

  history: {
    en: "On June 1, 1963, Kenya achieved internal self-rule from the British colonial administration. This milestone came six months before full independence on December 12, 1963. Jomo Kenyatta became the first Prime Minister on this day.\n\nThe transition to self-governance was the culmination of years of struggle by Kenyan nationalists, including the Mau Mau uprising of the 1950s. The Lancaster House conferences in London negotiated the terms of Kenya's self-rule, leading to elections in May 1963 that brought Kenyatta's Kenya African National Union (KANU) to power.\n\nMadaraka Day is celebrated as a reminder that independence was achieved in stages, and that self-governance was a crucial first step. The holiday is marked by presidential addresses, military parades, and cultural festivities held at a different county each year.",
    fr: "Le 1er juin 1963, le Kenya a obtenu l'autonomie interne de l'administration coloniale britannique. Cette \u00e9tape est survenue six mois avant la pleine ind\u00e9pendance le 12 d\u00e9cembre 1963. Jomo Kenyatta est devenu le premier Premier ministre ce jour-l\u00e0.\n\nLa transition vers l'autonomie \u00e9tait l'aboutissement d'ann\u00e9es de lutte des nationalistes k\u00e9nyans, y compris le soul\u00e8vement Mau Mau des ann\u00e9es 1950. Les conf\u00e9rences de Lancaster House \u00e0 Londres ont n\u00e9goci\u00e9 les termes de l'autonomie du Kenya.\n\nLe Jour Madaraka est c\u00e9l\u00e9br\u00e9 comme un rappel que l'ind\u00e9pendance a \u00e9t\u00e9 r\u00e9alis\u00e9e par \u00e9tapes. Le jour f\u00e9ri\u00e9 est marqu\u00e9 par des discours pr\u00e9sidentiels, des d\u00e9fil\u00e9s militaires et des festivit\u00e9s culturelles tenues dans un comt\u00e9 diff\u00e9rent chaque ann\u00e9e.",
    es: "El 1 de junio de 1963, Kenia logr\u00f3 la autogobernan\u00e7a interna de la administraci\u00f3n colonial brit\u00e1nica. Este hito lleg\u00f3 seis meses antes de la independencia plena el 12 de diciembre de 1963. Jomo Kenyatta se convirti\u00f3 en el primer Primer Ministro ese d\u00eda.\n\nLa transici\u00f3n a la autogobernan\u00e7a fue la culminaci\u00f3n de a\u00f1os de lucha de los nacionalistas kenianos, incluyendo el levantamiento Mau Mau de los a\u00f1os 1950. Las conferencias de Lancaster House en Londres negociaron los t\u00e9rminos de la autogobernan\u00e7a de Kenia.\n\nEl D\u00eda Madaraka se celebra como un recordatorio de que la independencia se logr\u00f3 en etapas. El d\u00eda festivo se marca con discursos presidenciales, desfiles militares y festividades culturales realizadas en un condado diferente cada a\u00f1o.",
  },

  traditions: {
    en: [
      'Presidential address to the nation at national celebrations',
      'Military parades and displays at the celebration venue',
      'Cultural performances featuring traditional Kenyan dances and music',
      'Flag-raising ceremonies across all 47 counties',
      'Community events and civic education programs',
      'Sports competitions and youth activities',
      'Wreath-laying at monuments honoring independence heroes',
    ],
    fr: [
      'Discours pr\u00e9sidentiel \u00e0 la nation lors des c\u00e9l\u00e9brations nationales',
      'D\u00e9fil\u00e9s et d\u00e9monstrations militaires au lieu de c\u00e9l\u00e9bration',
      'Spectacles culturels avec danses et musiques traditionnelles k\u00e9nyanes',
      'C\u00e9r\u00e9monies de lev\u00e9e du drapeau dans les 47 comt\u00e9s',
      '\u00c9v\u00e9nements communautaires et programmes d\'\u00e9ducation civique',
      'Comp\u00e9titions sportives et activit\u00e9s pour les jeunes',
      'D\u00e9p\u00f4t de gerbes aux monuments honorant les h\u00e9ros de l\'ind\u00e9pendance',
    ],
    es: [
      'Discurso presidencial a la naci\u00f3n en las celebraciones nacionales',
      'Desfiles y exhibiciones militares en el lugar de celebraci\u00f3n',
      'Espect\u00e1culos culturales con danzas y m\u00fasica tradicionales kenianas',
      'Ceremonias de izado de bandera en los 47 condados',
      'Eventos comunitarios y programas de educaci\u00f3n c\u00edvica',
      'Competiciones deportivas y actividades juveniles',
      'Ofrenda floral en monumentos que honran a los h\u00e9roes de la independencia',
    ],
  },

  funFacts: {
    en: [
      'The word "Madaraka" comes from Swahili and means "power," "authority," or "responsibility."',
      'Kenya attained self-governance six months before full independence, making Madaraka Day and Jamhuri Day two separate but related holidays.',
      'The national Madaraka Day celebrations rotate to a different county each year, giving all regions a chance to host.',
      'Jomo Kenyatta\'s famous words on this day were: "We shall work together to build a nation."',
      'Madaraka Day celebrations typically include a 21-gun salute as part of the military ceremony.',
    ],
    fr: [
      'Le mot \u00ab Madaraka \u00bb vient du swahili et signifie \u00ab pouvoir \u00bb, \u00ab autorit\u00e9 \u00bb ou \u00ab responsabilit\u00e9 \u00bb.',
      'Le Kenya a obtenu l\'autonomie six mois avant la pleine ind\u00e9pendance, faisant du Jour Madaraka et du Jour Jamhuri deux f\u00eates distinctes mais li\u00e9es.',
      'Les c\u00e9l\u00e9brations nationales du Jour Madaraka tournent vers un comt\u00e9 diff\u00e9rent chaque ann\u00e9e.',
      'Les c\u00e9l\u00e8bres paroles de Jomo Kenyatta ce jour-l\u00e0 \u00e9taient : \u00ab Nous travaillerons ensemble pour construire une nation. \u00bb',
      'Les c\u00e9l\u00e9brations du Jour Madaraka comprennent g\u00e9n\u00e9ralement un salut de 21 coups de canon.',
    ],
    es: [
      'La palabra "Madaraka" proviene del suajili y significa "poder", "autoridad" o "responsabilidad".',
      'Kenia obtuvo la autogobernan\u00e7a seis meses antes de la independencia plena, haciendo del D\u00eda Madaraka y del D\u00eda Jamhuri dos fiestas separadas pero relacionadas.',
      'Las celebraciones nacionales del D\u00eda Madaraka rotan a un condado diferente cada a\u00f1o.',
      'Las famosas palabras de Jomo Kenyatta ese d\u00eda fueron: "Trabajaremos juntos para construir una naci\u00f3n."',
      'Las celebraciones del D\u00eda Madaraka generalmente incluyen una salva de 21 ca\u00f1onazos.',
    ],
  },

  planningChecklist: {
    en: [
      'Check which county is hosting the national celebrations this year',
      'Plan to attend local cultural events and ceremonies',
      'Wear Kenyan national colors to show patriotism',
      'Watch the presidential address on television or radio',
      'Visit historical sites related to Kenya\'s independence struggle',
    ],
    fr: [
      'V\u00e9rifier quel comt\u00e9 accueille les c\u00e9l\u00e9brations nationales cette ann\u00e9e',
      'Pr\u00e9voir d\'assister aux \u00e9v\u00e9nements culturels et c\u00e9r\u00e9monies locaux',
      'Porter les couleurs nationales k\u00e9nyanes pour montrer le patriotisme',
      'Regarder le discours pr\u00e9sidentiel \u00e0 la t\u00e9l\u00e9vision ou \u00e0 la radio',
      'Visiter les sites historiques li\u00e9s \u00e0 la lutte pour l\'ind\u00e9pendance du Kenya',
    ],
    es: [
      'Verificar qu\u00e9 condado alberga las celebraciones nacionales este a\u00f1o',
      'Planificar asistir a eventos culturales y ceremonias locales',
      'Usar los colores nacionales kenianos para mostrar patriotismo',
      'Ver el discurso presidencial por televisi\u00f3n o radio',
      'Visitar sitios hist\u00f3ricos relacionados con la lucha por la independencia de Kenia',
    ],
  },

  relatedHolidays: ['ke_jamhuri-day', 'ke_mashujaa-day'],

  seo: {
    en: {
      titleTemplate: 'Madaraka Day {year} Kenya \u2014 Countdown & History',
      descriptionTemplate: 'When is Madaraka Day {year}? Live countdown to June 1, history of Kenya\'s self-governance, and celebration guide.',
      keywords: ['Madaraka Day Kenya', 'June 1 Kenya', 'Kenya self-governance', 'Jomo Kenyatta', 'Madaraka Day countdown'],
    },
    fr: {
      titleTemplate: 'Jour Madaraka {year} Kenya \u2014 Compte \u00e0 rebours et histoire',
      descriptionTemplate: 'Quand est le Jour Madaraka {year} ? Compte \u00e0 rebours en direct jusqu\'au 1er juin, histoire et guide de c\u00e9l\u00e9bration.',
      keywords: ['Jour Madaraka Kenya', '1er juin Kenya', 'autonomie Kenya', 'Jomo Kenyatta', 'compte \u00e0 rebours Madaraka'],
    },
    es: {
      titleTemplate: 'D\u00eda Madaraka {year} Kenia \u2014 Cuenta regresiva e historia',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda Madaraka {year}? Cuenta regresiva en vivo hasta el 1 de junio, historia y gu\u00eda de celebraci\u00f3n.',
      keywords: ['D\u00eda Madaraka Kenia', '1 de junio Kenia', 'autogobierno Kenia', 'Jomo Kenyatta', 'cuenta regresiva Madaraka'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Madaraka Day {year}?',
        fr: 'Quand est le Jour Madaraka {year} ?',
        es: '\u00bfCu\u00e1ndo es el D\u00eda Madaraka {year}?',
      },
      answer: {
        en: 'Madaraka Day {year} is on {date} ({dayOfWeek}). It is always celebrated on June 1.',
        fr: 'Le Jour Madaraka {year} est le {date} ({dayOfWeek}). Il est toujours c\u00e9l\u00e9br\u00e9 le 1er juin.',
        es: 'El D\u00eda Madaraka {year} es el {date} ({dayOfWeek}). Siempre se celebra el 1 de junio.',
      },
    },
    {
      question: {
        en: 'What does Madaraka mean?',
        fr: 'Que signifie Madaraka ?',
        es: '\u00bfQu\u00e9 significa Madaraka?',
      },
      answer: {
        en: '"Madaraka" is a Swahili word meaning "power," "authority," or "responsibility." It refers to the transfer of governing power from British colonial authorities to Kenyan leaders on June 1, 1963.',
        fr: '\u00ab Madaraka \u00bb est un mot swahili signifiant \u00ab pouvoir \u00bb, \u00ab autorit\u00e9 \u00bb ou \u00ab responsabilit\u00e9 \u00bb. Il fait r\u00e9f\u00e9rence au transfert du pouvoir gouvernemental des autorit\u00e9s coloniales britanniques aux dirigeants k\u00e9nyans le 1er juin 1963.',
        es: '"Madaraka" es una palabra en suajili que significa "poder", "autoridad" o "responsabilidad". Se refiere a la transferencia del poder de gobierno de las autoridades coloniales brit\u00e1nicas a los l\u00edderes kenianos el 1 de junio de 1963.',
      },
    },
    {
      question: {
        en: 'What is the difference between Madaraka Day and Jamhuri Day?',
        fr: 'Quelle est la diff\u00e9rence entre le Jour Madaraka et le Jour Jamhuri ?',
        es: '\u00bfCu\u00e1l es la diferencia entre el D\u00eda Madaraka y el D\u00eda Jamhuri?',
      },
      answer: {
        en: 'Madaraka Day (June 1) celebrates Kenya\'s attainment of internal self-governance in 1963, while Jamhuri Day (December 12) marks full independence from Britain and the establishment of the Republic of Kenya in 1964.',
        fr: 'Le Jour Madaraka (1er juin) c\u00e9l\u00e8bre l\'obtention de l\'autonomie interne du Kenya en 1963, tandis que le Jour Jamhuri (12 d\u00e9cembre) marque la pleine ind\u00e9pendance et l\'\u00e9tablissement de la R\u00e9publique du Kenya en 1964.',
        es: 'El D\u00eda Madaraka (1 de junio) celebra la obtenci\u00f3n de la autogobernan\u00e7a interna de Kenia en 1963, mientras que el D\u00eda Jamhuri (12 de diciembre) marca la independencia plena y el establecimiento de la Rep\u00fablica de Kenia en 1964.',
      },
    },
    {
      question: {
        en: 'Is Madaraka Day a public holiday in Kenya?',
        fr: 'Le Jour Madaraka est-il un jour f\u00e9ri\u00e9 au Kenya ?',
        es: '\u00bfEl D\u00eda Madaraka es un d\u00eda festivo en Kenia?',
      },
      answer: {
        en: 'Yes, Madaraka Day is one of Kenya\'s most important public holidays. Government offices, schools, and banks are closed, and national celebrations are held.',
        fr: 'Oui, le Jour Madaraka est l\'un des jours f\u00e9ri\u00e9s les plus importants du Kenya. Les bureaux gouvernementaux, les \u00e9coles et les banques sont ferm\u00e9s.',
        es: 'S\u00ed, el D\u00eda Madaraka es uno de los d\u00edas festivos m\u00e1s importantes de Kenia. Las oficinas gubernamentales, escuelas y bancos est\u00e1n cerrados.',
      },
    },
  ],

  colorTheme: 'red-green-black',
  icon: '\ud83c\uddf0\ud83c\uddea',
};

// ---------------------------------------------------------------------------
// Mashujaa Day — October 20
// ---------------------------------------------------------------------------

const mashujaaDay: HolidayData = {
  id: 'ke_mashujaa-day',
  countryCode: 'ke',
  slugs: { en: 'mashujaa-day', fr: 'jour-mashujaa', es: 'dia-mashujaa' },
  names: { en: 'Mashujaa Day', fr: 'Jour Mashujaa', es: 'D\u00eda Mashujaa' },

  dateType: 'fixed',
  fixedMonth: 10,
  fixedDay: 20,

  descriptions: {
    en: 'Mashujaa Day (Heroes Day) on October 20 honors all those who contributed to the struggle for Kenya\'s independence and national development. Formerly known as Kenyatta Day, it was renamed in 2010 to recognize all national heroes.',
    fr: 'Le Jour Mashujaa (Jour des H\u00e9ros), le 20 octobre, honore tous ceux qui ont contribu\u00e9 \u00e0 la lutte pour l\'ind\u00e9pendance et le d\u00e9veloppement national du Kenya. Anciennement appel\u00e9 Jour de Kenyatta, il a \u00e9t\u00e9 renomm\u00e9 en 2010 pour reconna\u00eetre tous les h\u00e9ros nationaux.',
    es: 'El D\u00eda Mashujaa (D\u00eda de los H\u00e9roes), el 20 de octubre, honra a todos los que contribuyeron a la lucha por la independencia y el desarrollo nacional de Kenia. Anteriormente conocido como D\u00eda de Kenyatta, fue renombrado en 2010 para reconocer a todos los h\u00e9roes nacionales.',
  },

  history: {
    en: "Mashujaa Day was originally known as Kenyatta Day, commemorating the arrest of Jomo Kenyatta and five other independence leaders (the \"Kapenguria Six\") by British colonial authorities on October 20, 1952. Their arrest galvanized the independence movement.\n\nWith the promulgation of Kenya's new constitution in 2010, the holiday was renamed \"Mashujaa Day\" (Heroes Day) to honor not just Kenyatta but all Kenyans who contributed to the struggle for independence and the building of the nation. \"Mashujaa\" means \"heroes\" in Swahili.\n\nThe renaming reflected a desire to broaden the holiday's significance beyond one individual to include freedom fighters, community leaders, innovators, and ordinary citizens who have made exceptional contributions to Kenya's development. The holiday serves as a reminder of the sacrifices made for Kenya's sovereignty.",
    fr: "Le Jour Mashujaa \u00e9tait \u00e0 l'origine connu sous le nom de Jour de Kenyatta, comm\u00e9morant l'arrestation de Jomo Kenyatta et de cinq autres dirigeants de l'ind\u00e9pendance (les \u00ab Kapenguria Six \u00bb) par les autorit\u00e9s coloniales britanniques le 20 octobre 1952.\n\nAvec la promulgation de la nouvelle constitution du Kenya en 2010, le jour f\u00e9ri\u00e9 a \u00e9t\u00e9 renomm\u00e9 \u00ab Jour Mashujaa \u00bb (Jour des H\u00e9ros) pour honorer non seulement Kenyatta mais tous les K\u00e9nyans qui ont contribu\u00e9 \u00e0 la lutte pour l'ind\u00e9pendance. \u00ab Mashujaa \u00bb signifie \u00ab h\u00e9ros \u00bb en swahili.\n\nLe changement de nom refl\u00e9tait le d\u00e9sir d'\u00e9largir la signification du jour f\u00e9ri\u00e9 au-del\u00e0 d'une seule personne pour inclure les combattants de la libert\u00e9, les leaders communautaires et les citoyens ordinaires qui ont apport\u00e9 des contributions exceptionnelles au d\u00e9veloppement du Kenya.",
    es: "El D\u00eda Mashujaa era originalmente conocido como D\u00eda de Kenyatta, conmemorando el arresto de Jomo Kenyatta y otros cinco l\u00edderes de la independencia (los \"Seis de Kapenguria\") por las autoridades coloniales brit\u00e1nicas el 20 de octubre de 1952.\n\nCon la promulgaci\u00f3n de la nueva constituci\u00f3n de Kenia en 2010, el d\u00eda festivo fue renombrado \"D\u00eda Mashujaa\" (D\u00eda de los H\u00e9roes) para honrar no solo a Kenyatta sino a todos los kenianos que contribuyeron a la lucha por la independencia. \"Mashujaa\" significa \"h\u00e9roes\" en suajili.\n\nEl cambio de nombre reflej\u00f3 el deseo de ampliar el significado del d\u00eda festivo m\u00e1s all\u00e1 de una sola persona para incluir a los luchadores por la libertad, l\u00edderes comunitarios y ciudadanos comunes que han hecho contribuciones excepcionales al desarrollo de Kenia.",
  },

  traditions: {
    en: [
      'Presidential address honoring national heroes',
      'Military parades and ceremonial displays',
      'Wreath-laying at monuments and heroes\' graves',
      'Cultural performances and traditional dances',
      'Recognition and awards for outstanding citizens',
      'Educational programs about Kenya\'s independence struggle',
      'Community service activities in honor of national heroes',
    ],
    fr: [
      'Discours pr\u00e9sidentiel honorant les h\u00e9ros nationaux',
      'D\u00e9fil\u00e9s militaires et c\u00e9r\u00e9monies',
      'D\u00e9p\u00f4t de gerbes aux monuments et tombes des h\u00e9ros',
      'Spectacles culturels et danses traditionnelles',
      'Reconnaissance et prix pour les citoyens exceptionnels',
      'Programmes \u00e9ducatifs sur la lutte pour l\'ind\u00e9pendance du Kenya',
      'Activit\u00e9s de service communautaire en l\'honneur des h\u00e9ros nationaux',
    ],
    es: [
      'Discurso presidencial honrando a los h\u00e9roes nacionales',
      'Desfiles militares y exhibiciones ceremoniales',
      'Ofrenda floral en monumentos y tumbas de h\u00e9roes',
      'Espect\u00e1culos culturales y danzas tradicionales',
      'Reconocimiento y premios para ciudadanos destacados',
      'Programas educativos sobre la lucha por la independencia de Kenia',
      'Actividades de servicio comunitario en honor a los h\u00e9roes nacionales',
    ],
  },

  funFacts: {
    en: [
      'The "Kapenguria Six" were Jomo Kenyatta, Bildad Kaggia, Kung\'u Karumba, Fred Kubai, Achieng\' Oneko, and Paul Ngei.',
      'Mashujaa Day was known as Kenyatta Day for nearly 50 years before being renamed in 2010.',
      'The word "Mashujaa" comes from Swahili and means "heroes" or "brave ones."',
      'Kenya\'s Heroes\' Corner in Uhuru Gardens is a monument dedicated to the freedom fighters honored on this day.',
      'The 2010 Kenyan constitution explicitly renamed the holiday to be inclusive of all national heroes, not just political leaders.',
    ],
    fr: [
      'Les \u00ab Kapenguria Six \u00bb \u00e9taient Jomo Kenyatta, Bildad Kaggia, Kung\'u Karumba, Fred Kubai, Achieng\' Oneko et Paul Ngei.',
      'Le Jour Mashujaa \u00e9tait connu sous le nom de Jour de Kenyatta pendant pr\u00e8s de 50 ans avant d\'\u00eatre renomm\u00e9 en 2010.',
      'Le mot \u00ab Mashujaa \u00bb vient du swahili et signifie \u00ab h\u00e9ros \u00bb ou \u00ab courageux \u00bb.',
      'Le Coin des H\u00e9ros du Kenya dans les jardins Uhuru est un monument d\u00e9di\u00e9 aux combattants de la libert\u00e9.',
      'La constitution k\u00e9nyane de 2010 a explicitement renomm\u00e9 le jour f\u00e9ri\u00e9 pour inclure tous les h\u00e9ros nationaux.',
    ],
    es: [
      'Los "Seis de Kapenguria" fueron Jomo Kenyatta, Bildad Kaggia, Kung\'u Karumba, Fred Kubai, Achieng\' Oneko y Paul Ngei.',
      'El D\u00eda Mashujaa fue conocido como D\u00eda de Kenyatta durante casi 50 a\u00f1os antes de ser renombrado en 2010.',
      'La palabra "Mashujaa" viene del suajili y significa "h\u00e9roes" o "valientes".',
      'El Rinc\u00f3n de los H\u00e9roes de Kenia en los Jardines Uhuru es un monumento dedicado a los luchadores por la libertad.',
      'La constituci\u00f3n keniana de 2010 renombr\u00f3 expl\u00edcitamente el d\u00eda festivo para incluir a todos los h\u00e9roes nacionales.',
    ],
  },

  planningChecklist: {
    en: [
      'Check which county is hosting the national Mashujaa Day celebrations',
      'Learn about Kenya\'s independence heroes and their contributions',
      'Attend local ceremonies and cultural events',
      'Watch the presidential address on national television',
      'Participate in community service activities in honor of heroes',
    ],
    fr: [
      'V\u00e9rifier quel comt\u00e9 accueille les c\u00e9l\u00e9brations nationales du Jour Mashujaa',
      'Se renseigner sur les h\u00e9ros de l\'ind\u00e9pendance du Kenya et leurs contributions',
      'Assister aux c\u00e9r\u00e9monies locales et \u00e9v\u00e9nements culturels',
      'Regarder le discours pr\u00e9sidentiel \u00e0 la t\u00e9l\u00e9vision nationale',
      'Participer \u00e0 des activit\u00e9s de service communautaire en l\'honneur des h\u00e9ros',
    ],
    es: [
      'Verificar qu\u00e9 condado alberga las celebraciones nacionales del D\u00eda Mashujaa',
      'Aprender sobre los h\u00e9roes de la independencia de Kenia y sus contribuciones',
      'Asistir a ceremonias locales y eventos culturales',
      'Ver el discurso presidencial por televisi\u00f3n nacional',
      'Participar en actividades de servicio comunitario en honor a los h\u00e9roes',
    ],
  },

  relatedHolidays: ['ke_madaraka-day', 'ke_jamhuri-day'],

  seo: {
    en: {
      titleTemplate: 'Mashujaa Day {year} Kenya \u2014 Heroes Day Countdown & Guide',
      descriptionTemplate: 'When is Mashujaa Day {year}? Live countdown to October 20, Kenya\'s Heroes Day history, and celebration guide.',
      keywords: ['Mashujaa Day Kenya', 'Heroes Day Kenya', 'October 20 Kenya', 'Kenyatta Day', 'Kenya independence heroes'],
    },
    fr: {
      titleTemplate: 'Jour Mashujaa {year} Kenya \u2014 Jour des H\u00e9ros, compte \u00e0 rebours et guide',
      descriptionTemplate: 'Quand est le Jour Mashujaa {year} ? Compte \u00e0 rebours en direct jusqu\'au 20 octobre, histoire et guide.',
      keywords: ['Jour Mashujaa Kenya', 'Jour des H\u00e9ros Kenya', '20 octobre Kenya', 'Jour de Kenyatta', 'h\u00e9ros ind\u00e9pendance Kenya'],
    },
    es: {
      titleTemplate: 'D\u00eda Mashujaa {year} Kenia \u2014 D\u00eda de los H\u00e9roes, cuenta regresiva y gu\u00eda',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda Mashujaa {year}? Cuenta regresiva en vivo hasta el 20 de octubre, historia y gu\u00eda.',
      keywords: ['D\u00eda Mashujaa Kenia', 'D\u00eda de los H\u00e9roes Kenia', '20 de octubre Kenia', 'D\u00eda de Kenyatta', 'h\u00e9roes independencia Kenia'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Mashujaa Day {year}?',
        fr: 'Quand est le Jour Mashujaa {year} ?',
        es: '\u00bfCu\u00e1ndo es el D\u00eda Mashujaa {year}?',
      },
      answer: {
        en: 'Mashujaa Day {year} is on {date} ({dayOfWeek}). It is always celebrated on October 20.',
        fr: 'Le Jour Mashujaa {year} est le {date} ({dayOfWeek}). Il est toujours c\u00e9l\u00e9br\u00e9 le 20 octobre.',
        es: 'El D\u00eda Mashujaa {year} es el {date} ({dayOfWeek}). Siempre se celebra el 20 de octubre.',
      },
    },
    {
      question: {
        en: 'What does Mashujaa mean?',
        fr: 'Que signifie Mashujaa ?',
        es: '\u00bfQu\u00e9 significa Mashujaa?',
      },
      answer: {
        en: '"Mashujaa" is a Swahili word meaning "heroes" or "brave ones." The holiday honors all Kenyans who have made significant contributions to the nation, from independence fighters to modern-day leaders and citizens.',
        fr: '\u00ab Mashujaa \u00bb est un mot swahili signifiant \u00ab h\u00e9ros \u00bb ou \u00ab courageux \u00bb. Le jour f\u00e9ri\u00e9 honore tous les K\u00e9nyans qui ont apport\u00e9 des contributions significatives \u00e0 la nation.',
        es: '"Mashujaa" es una palabra en suajili que significa "h\u00e9roes" o "valientes". El d\u00eda festivo honra a todos los kenianos que han hecho contribuciones significativas a la naci\u00f3n.',
      },
    },
    {
      question: {
        en: 'Why was Kenyatta Day renamed?',
        fr: 'Pourquoi le Jour de Kenyatta a-t-il \u00e9t\u00e9 renomm\u00e9 ?',
        es: '\u00bfPor qu\u00e9 se renombr\u00f3 el D\u00eda de Kenyatta?',
      },
      answer: {
        en: 'Kenyatta Day was renamed Mashujaa Day in 2010 when Kenya adopted its new constitution. The change broadened the holiday to honor all national heroes, not just Jomo Kenyatta, recognizing the collective contributions to Kenya\'s independence.',
        fr: 'Le Jour de Kenyatta a \u00e9t\u00e9 renomm\u00e9 Jour Mashujaa en 2010 lors de l\'adoption de la nouvelle constitution du Kenya. Le changement a \u00e9largi le jour f\u00e9ri\u00e9 pour honorer tous les h\u00e9ros nationaux.',
        es: 'El D\u00eda de Kenyatta fue renombrado D\u00eda Mashujaa en 2010 cuando Kenia adopt\u00f3 su nueva constituci\u00f3n. El cambio ampli\u00f3 el d\u00eda festivo para honrar a todos los h\u00e9roes nacionales.',
      },
    },
    {
      question: {
        en: 'Is Mashujaa Day a public holiday?',
        fr: 'Le Jour Mashujaa est-il un jour f\u00e9ri\u00e9 ?',
        es: '\u00bfEl D\u00eda Mashujaa es un d\u00eda festivo?',
      },
      answer: {
        en: 'Yes, Mashujaa Day is an official public holiday in Kenya. Government offices, schools, and banks are closed, and national celebrations are organized.',
        fr: 'Oui, le Jour Mashujaa est un jour f\u00e9ri\u00e9 officiel au Kenya. Les bureaux gouvernementaux, les \u00e9coles et les banques sont ferm\u00e9s.',
        es: 'S\u00ed, el D\u00eda Mashujaa es un d\u00eda festivo oficial en Kenia. Las oficinas gubernamentales, escuelas y bancos est\u00e1n cerrados.',
      },
    },
  ],

  colorTheme: 'red-green-black',
  icon: '\ud83c\udfc6',
};

// ---------------------------------------------------------------------------
// Jamhuri Day — December 12
// ---------------------------------------------------------------------------

const jamhuriDay: HolidayData = {
  id: 'ke_jamhuri-day',
  countryCode: 'ke',
  slugs: { en: 'jamhuri-day', fr: 'jour-jamhuri', es: 'dia-jamhuri' },
  names: { en: 'Jamhuri Day', fr: 'Jour Jamhuri', es: 'D\u00eda Jamhuri' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 12,

  descriptions: {
    en: 'Jamhuri Day on December 12 is Kenya\'s Republic Day, celebrating the country\'s full independence from Britain in 1963 and its establishment as a republic in 1964. "Jamhuri" means "republic" in Swahili, and the day features national celebrations and cultural events.',
    fr: 'Le Jour Jamhuri, le 12 d\u00e9cembre, est le Jour de la R\u00e9publique du Kenya, c\u00e9l\u00e9brant la pleine ind\u00e9pendance du pays vis-\u00e0-vis de la Grande-Bretagne en 1963 et son \u00e9tablissement en r\u00e9publique en 1964. \u00ab Jamhuri \u00bb signifie \u00ab r\u00e9publique \u00bb en swahili.',
    es: 'El D\u00eda Jamhuri, el 12 de diciembre, es el D\u00eda de la Rep\u00fablica de Kenia, celebrando la independencia plena del pa\u00eds de Gran Breta\u00f1a en 1963 y su establecimiento como rep\u00fablica en 1964. "Jamhuri" significa "rep\u00fablica" en suajili.',
  },

  history: {
    en: "On December 12, 1963, Kenya achieved full independence from Britain, with Jomo Kenyatta becoming the country's first Prime Minister. Exactly one year later, on December 12, 1964, Kenya became a republic with Kenyatta as its first president.\n\nThe journey to independence was marked by decades of colonial resistance, including the Mau Mau uprising in the 1950s and prolonged negotiations at the Lancaster House conferences. The transition from colonial rule to a sovereign republic represented a defining moment in East African history.\n\nJamhuri Day is considered Kenya's most important national holiday, as it commemorates both independence and the birth of the republic. The celebration is held at a different location each year, with the president leading national festivities that include military parades, cultural performances, and civic awards.",
    fr: "Le 12 d\u00e9cembre 1963, le Kenya a obtenu la pleine ind\u00e9pendance de la Grande-Bretagne, avec Jomo Kenyatta devenant le premier Premier ministre du pays. Exactement un an plus tard, le 12 d\u00e9cembre 1964, le Kenya est devenu une r\u00e9publique avec Kenyatta comme premier pr\u00e9sident.\n\nLe chemin vers l'ind\u00e9pendance a \u00e9t\u00e9 marqu\u00e9 par des d\u00e9cennies de r\u00e9sistance coloniale, y compris le soul\u00e8vement Mau Mau dans les ann\u00e9es 1950. La transition du pouvoir colonial \u00e0 une r\u00e9publique souveraine a repr\u00e9sent\u00e9 un moment d\u00e9terminant dans l'histoire de l'Afrique de l'Est.\n\nLe Jour Jamhuri est consid\u00e9r\u00e9 comme le jour f\u00e9ri\u00e9 national le plus important du Kenya, car il comm\u00e9more \u00e0 la fois l'ind\u00e9pendance et la naissance de la r\u00e9publique. La c\u00e9l\u00e9bration se tient chaque ann\u00e9e dans un lieu diff\u00e9rent.",
    es: "El 12 de diciembre de 1963, Kenia logr\u00f3 la independencia plena de Gran Breta\u00f1a, con Jomo Kenyatta convirti\u00e9ndose en el primer Primer Ministro del pa\u00eds. Exactamente un a\u00f1o despu\u00e9s, el 12 de diciembre de 1964, Kenia se convirti\u00f3 en una rep\u00fablica con Kenyatta como su primer presidente.\n\nEl camino hacia la independencia estuvo marcado por d\u00e9cadas de resistencia colonial, incluyendo el levantamiento Mau Mau en los a\u00f1os 1950. La transici\u00f3n del dominio colonial a una rep\u00fablica soberana represent\u00f3 un momento definitorio en la historia de \u00c1frica Oriental.\n\nEl D\u00eda Jamhuri es considerado el d\u00eda festivo nacional m\u00e1s importante de Kenia, ya que conmemora tanto la independencia como el nacimiento de la rep\u00fablica. La celebraci\u00f3n se realiza en un lugar diferente cada a\u00f1o.",
  },

  traditions: {
    en: [
      'Presidential address and national celebrations at a designated venue',
      'Military parades with a 21-gun salute',
      'Cultural performances featuring all of Kenya\'s ethnic communities',
      'Flag-raising ceremonies across the country',
      'Awards and honors for outstanding Kenyans',
      'Community events and family celebrations',
      'Patriotic songs and the national anthem performed by choirs',
    ],
    fr: [
      'Discours pr\u00e9sidentiel et c\u00e9l\u00e9brations nationales dans un lieu d\u00e9sign\u00e9',
      'D\u00e9fil\u00e9s militaires avec un salut de 21 coups de canon',
      'Spectacles culturels repr\u00e9sentant toutes les communaut\u00e9s ethniques du Kenya',
      'C\u00e9r\u00e9monies de lev\u00e9e du drapeau \u00e0 travers le pays',
      'Prix et honneurs pour les K\u00e9nyans exceptionnels',
      '\u00c9v\u00e9nements communautaires et c\u00e9l\u00e9brations familiales',
      'Chansons patriotiques et hymne national interpr\u00e9t\u00e9s par des chorales',
    ],
    es: [
      'Discurso presidencial y celebraciones nacionales en un lugar designado',
      'Desfiles militares con una salva de 21 ca\u00f1onazos',
      'Espect\u00e1culos culturales que representan a todas las comunidades \u00e9tnicas de Kenia',
      'Ceremonias de izado de bandera en todo el pa\u00eds',
      'Premios y honores para kenianos destacados',
      'Eventos comunitarios y celebraciones familiares',
      'Canciones patri\u00f3ticas e himno nacional interpretados por coros',
    ],
  },

  funFacts: {
    en: [
      'December 12 marks two milestones: Kenya\'s independence in 1963 and its republic status in 1964, both on the same date.',
      '"Jamhuri" is the Swahili word for "republic," derived from the Arabic word "jumhuriyya."',
      'The Kenyan national anthem, "Ee Mungu Nguvu Yetu," is sung in Swahili and was adopted at independence.',
      'Kenya\'s first flag was raised at midnight on December 12, 1963, as the British Union Jack was lowered.',
      'Jamhuri Day is often celebrated with nyama choma gatherings, reflecting Kenya\'s love for grilled meat.',
    ],
    fr: [
      'Le 12 d\u00e9cembre marque deux jalons : l\'ind\u00e9pendance du Kenya en 1963 et son statut de r\u00e9publique en 1964, tous deux \u00e0 la m\u00eame date.',
      '\u00ab Jamhuri \u00bb est le mot swahili pour \u00ab r\u00e9publique \u00bb, d\u00e9riv\u00e9 du mot arabe \u00ab jumhuriyya \u00bb.',
      'L\'hymne national k\u00e9nyan, \u00ab Ee Mungu Nguvu Yetu \u00bb, est chant\u00e9 en swahili et a \u00e9t\u00e9 adopt\u00e9 \u00e0 l\'ind\u00e9pendance.',
      'Le premier drapeau k\u00e9nyan a \u00e9t\u00e9 hiss\u00e9 \u00e0 minuit le 12 d\u00e9cembre 1963, tandis que l\'Union Jack britannique \u00e9tait abaiss\u00e9.',
      'Le Jour Jamhuri est souvent c\u00e9l\u00e9br\u00e9 avec des rassemblements autour du nyama choma.',
    ],
    es: [
      'El 12 de diciembre marca dos hitos: la independencia de Kenia en 1963 y su estatus de rep\u00fablica en 1964, ambos en la misma fecha.',
      '"Jamhuri" es la palabra suajili para "rep\u00fablica", derivada de la palabra \u00e1rabe "jumhuriyya".',
      'El himno nacional keniano, "Ee Mungu Nguvu Yetu", se canta en suajili y fue adoptado en la independencia.',
      'La primera bandera keniana fue izada a medianoche el 12 de diciembre de 1963, mientras se bajaba la Union Jack brit\u00e1nica.',
      'El D\u00eda Jamhuri a menudo se celebra con reuniones de nyama choma, reflejando el amor de Kenia por la carne a la parrilla.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the venue for national Jamhuri Day celebrations',
      'Plan family gatherings with traditional Kenyan food',
      'Watch the presidential address and national celebrations on TV',
      'Attend local events and cultural performances',
      'Learn about Kenya\'s path to independence and republic status',
    ],
    fr: [
      'V\u00e9rifier le lieu des c\u00e9l\u00e9brations nationales du Jour Jamhuri',
      'Organiser des r\u00e9unions familiales avec de la nourriture traditionnelle k\u00e9nyane',
      'Regarder le discours pr\u00e9sidentiel et les c\u00e9l\u00e9brations nationales \u00e0 la t\u00e9l\u00e9vision',
      'Assister aux \u00e9v\u00e9nements locaux et spectacles culturels',
      'Se renseigner sur le chemin du Kenya vers l\'ind\u00e9pendance et le statut de r\u00e9publique',
    ],
    es: [
      'Verificar el lugar de las celebraciones nacionales del D\u00eda Jamhuri',
      'Planificar reuniones familiares con comida tradicional keniana',
      'Ver el discurso presidencial y las celebraciones nacionales por TV',
      'Asistir a eventos locales y espect\u00e1culos culturales',
      'Aprender sobre el camino de Kenia hacia la independencia y el estatus de rep\u00fablica',
    ],
  },

  relatedHolidays: ['ke_madaraka-day', 'ke_mashujaa-day'],

  seo: {
    en: {
      titleTemplate: 'Jamhuri Day {year} Kenya \u2014 Republic Day Countdown & Guide',
      descriptionTemplate: 'When is Jamhuri Day {year}? Live countdown to December 12, Kenya\'s Republic Day history, and celebration guide.',
      keywords: ['Jamhuri Day Kenya', 'Kenya Republic Day', 'December 12 Kenya', 'Kenya independence day', 'Jamhuri Day countdown'],
    },
    fr: {
      titleTemplate: 'Jour Jamhuri {year} Kenya \u2014 Jour de la R\u00e9publique, compte \u00e0 rebours et guide',
      descriptionTemplate: 'Quand est le Jour Jamhuri {year} ? Compte \u00e0 rebours en direct jusqu\'au 12 d\u00e9cembre, histoire et guide.',
      keywords: ['Jour Jamhuri Kenya', 'Jour R\u00e9publique Kenya', '12 d\u00e9cembre Kenya', 'ind\u00e9pendance Kenya', 'compte \u00e0 rebours Jamhuri'],
    },
    es: {
      titleTemplate: 'D\u00eda Jamhuri {year} Kenia \u2014 D\u00eda de la Rep\u00fablica, cuenta regresiva y gu\u00eda',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda Jamhuri {year}? Cuenta regresiva en vivo hasta el 12 de diciembre, historia y gu\u00eda.',
      keywords: ['D\u00eda Jamhuri Kenia', 'D\u00eda Rep\u00fablica Kenia', '12 de diciembre Kenia', 'independencia Kenia', 'cuenta regresiva Jamhuri'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Jamhuri Day {year}?',
        fr: 'Quand est le Jour Jamhuri {year} ?',
        es: '\u00bfCu\u00e1ndo es el D\u00eda Jamhuri {year}?',
      },
      answer: {
        en: 'Jamhuri Day {year} is on {date} ({dayOfWeek}). It is always celebrated on December 12.',
        fr: 'Le Jour Jamhuri {year} est le {date} ({dayOfWeek}). Il est toujours c\u00e9l\u00e9br\u00e9 le 12 d\u00e9cembre.',
        es: 'El D\u00eda Jamhuri {year} es el {date} ({dayOfWeek}). Siempre se celebra el 12 de diciembre.',
      },
    },
    {
      question: {
        en: 'What does Jamhuri mean?',
        fr: 'Que signifie Jamhuri ?',
        es: '\u00bfQu\u00e9 significa Jamhuri?',
      },
      answer: {
        en: '"Jamhuri" is the Swahili word for "republic." The holiday celebrates the day Kenya became a republic on December 12, 1964, exactly one year after gaining independence.',
        fr: '\u00ab Jamhuri \u00bb est le mot swahili pour \u00ab r\u00e9publique \u00bb. Le jour f\u00e9ri\u00e9 c\u00e9l\u00e8bre le jour o\u00f9 le Kenya est devenu une r\u00e9publique le 12 d\u00e9cembre 1964.',
        es: '"Jamhuri" es la palabra suajili para "rep\u00fablica". El d\u00eda festivo celebra el d\u00eda en que Kenia se convirti\u00f3 en rep\u00fablica el 12 de diciembre de 1964.',
      },
    },
    {
      question: {
        en: 'Why is December 12 important for Kenya?',
        fr: 'Pourquoi le 12 d\u00e9cembre est-il important pour le Kenya ?',
        es: '\u00bfPor qu\u00e9 es importante el 12 de diciembre para Kenia?',
      },
      answer: {
        en: 'December 12 marks two pivotal events: Kenya\'s independence from Britain in 1963 and the establishment of the Republic of Kenya in 1964. Both events occurred on the same date, making it doubly significant.',
        fr: 'Le 12 d\u00e9cembre marque deux \u00e9v\u00e9nements cl\u00e9s : l\'ind\u00e9pendance du Kenya de la Grande-Bretagne en 1963 et l\'\u00e9tablissement de la R\u00e9publique du Kenya en 1964. Les deux \u00e9v\u00e9nements ont eu lieu \u00e0 la m\u00eame date.',
        es: 'El 12 de diciembre marca dos eventos fundamentales: la independencia de Kenia de Gran Breta\u00f1a en 1963 y el establecimiento de la Rep\u00fablica de Kenia en 1964. Ambos eventos ocurrieron en la misma fecha.',
      },
    },
    {
      question: {
        en: 'Is Jamhuri Day a public holiday in Kenya?',
        fr: 'Le Jour Jamhuri est-il un jour f\u00e9ri\u00e9 au Kenya ?',
        es: '\u00bfEl D\u00eda Jamhuri es un d\u00eda festivo en Kenia?',
      },
      answer: {
        en: 'Yes, Jamhuri Day is Kenya\'s most important public holiday. It is a day of national pride with celebrations held across all 47 counties.',
        fr: 'Oui, le Jour Jamhuri est le jour f\u00e9ri\u00e9 le plus important du Kenya. C\'est un jour de fiert\u00e9 nationale avec des c\u00e9l\u00e9brations dans les 47 comt\u00e9s.',
        es: 'S\u00ed, el D\u00eda Jamhuri es el d\u00eda festivo m\u00e1s importante de Kenia. Es un d\u00eda de orgullo nacional con celebraciones en los 47 condados.',
      },
    },
  ],

  colorTheme: 'red-green-black',
  icon: '\ud83c\uddf0\ud83c\uddea',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'ke_christmas',
  countryCode: 'ke',
  slugs: { en: 'christmas-day', fr: 'jour-de-noel', es: 'dia-de-navidad' },
  names: { en: 'Christmas Day', fr: 'Jour de No\u00ebl', es: 'D\u00eda de Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: 'Christmas Day on December 25 is widely celebrated across Kenya with church services, family gatherings, and festive meals featuring nyama choma (grilled meat). It is a public holiday enjoyed by the majority Christian population.',
    fr: 'Le jour de No\u00ebl, le 25 d\u00e9cembre, est largement c\u00e9l\u00e9br\u00e9 au Kenya avec des services religieux, des r\u00e9unions familiales et des repas festifs avec du nyama choma (viande grill\u00e9e). C\'est un jour f\u00e9ri\u00e9 appr\u00e9ci\u00e9 par la population \u00e0 majorit\u00e9 chr\u00e9tienne.',
    es: 'El d\u00eda de Navidad, el 25 de diciembre, se celebra ampliamente en Kenia con servicios religiosos, reuniones familiares y comidas festivas con nyama choma (carne a la parrilla). Es un d\u00eda festivo disfrutado por la poblaci\u00f3n de mayor\u00eda cristiana.',
  },

  history: {
    en: "Christianity arrived in Kenya with European missionaries in the 19th century and has since become the predominant religion, with over 80% of the population identifying as Christian. Christmas has been a public holiday since Kenya's independence.\n\nKenyan Christmas traditions blend Western customs with local cultural practices. While urban areas feature Christmas trees, decorations, and gift exchanges, rural communities focus on church services, family reunions, and communal feasting.\n\nThe Christmas season in Kenya coincides with the long school holidays, making it a major time for travel and family reunions. Many Kenyans working in cities return to their rural homes, creating one of the busiest travel periods of the year. The coast becomes a popular holiday destination, with Mombasa and Diani Beach attracting both domestic and international visitors.",
    fr: "Le christianisme est arriv\u00e9 au Kenya avec les missionnaires europ\u00e9ens au XIXe si\u00e8cle et est depuis devenu la religion pr\u00e9dominante, avec plus de 80% de la population s'identifiant comme chr\u00e9tienne. No\u00ebl est un jour f\u00e9ri\u00e9 depuis l'ind\u00e9pendance du Kenya.\n\nLes traditions de No\u00ebl k\u00e9nyanes m\u00ealent les coutumes occidentales aux pratiques culturelles locales. Les zones urbaines pr\u00e9sentent des sapins de No\u00ebl et des \u00e9changes de cadeaux, tandis que les communaut\u00e9s rurales se concentrent sur les services religieux et les festins communautaires.\n\nLa saison de No\u00ebl au Kenya co\u00efncide avec les longues vacances scolaires, ce qui en fait une p\u00e9riode majeure pour les voyages et les r\u00e9unions familiales. De nombreux K\u00e9nyans travaillant en ville retournent dans leurs foyers ruraux.",
    es: "El cristianismo lleg\u00f3 a Kenia con los misioneros europeos en el siglo XIX y desde entonces se ha convertido en la religi\u00f3n predominante, con m\u00e1s del 80% de la poblaci\u00f3n identific\u00e1ndose como cristiana. La Navidad ha sido un d\u00eda festivo desde la independencia de Kenia.\n\nLas tradiciones navide\u00f1as kenianas mezclan costumbres occidentales con pr\u00e1cticas culturales locales. Las \u00e1reas urbanas presentan \u00e1rboles de Navidad e intercambio de regalos, mientras que las comunidades rurales se centran en servicios religiosos y banquetes comunitarios.\n\nLa temporada navide\u00f1a en Kenia coincide con las largas vacaciones escolares, lo que la convierte en un per\u00edodo importante para viajes y reuniones familiares. Muchos kenianos que trabajan en las ciudades regresan a sus hogares rurales.",
  },

  traditions: {
    en: [
      'Attending Christmas morning church services with the whole family',
      'Preparing nyama choma (grilled meat), chapati, and pilau rice for the feast',
      'Traveling to rural hometowns for family reunions',
      'Children receiving new clothes as Christmas gifts',
      'Community celebrations with music, dance, and shared meals',
      'Decorating homes with Christmas trees and lights in urban areas',
      'Visiting the Kenyan coast for Christmas holiday getaways',
    ],
    fr: [
      'Assister aux services religieux du matin de No\u00ebl avec toute la famille',
      'Pr\u00e9parer du nyama choma (viande grill\u00e9e), du chapati et du riz pilau pour le festin',
      'Voyager vers les villes d\'origine rurales pour les r\u00e9unions familiales',
      'Enfants recevant de nouveaux v\u00eatements comme cadeaux de No\u00ebl',
      'C\u00e9l\u00e9brations communautaires avec musique, danse et repas partag\u00e9s',
      'D\u00e9corer les maisons avec des sapins de No\u00ebl et des lumi\u00e8res en zone urbaine',
      'Visiter la c\u00f4te k\u00e9nyane pour les vacances de No\u00ebl',
    ],
    es: [
      'Asistir a los servicios religiosos de la ma\u00f1ana de Navidad con toda la familia',
      'Preparar nyama choma (carne a la parrilla), chapati y arroz pilau para el banquete',
      'Viajar a las ciudades rurales de origen para reuniones familiares',
      'Ni\u00f1os recibiendo ropa nueva como regalos de Navidad',
      'Celebraciones comunitarias con m\u00fasica, baile y comidas compartidas',
      'Decorar las casas con \u00e1rboles de Navidad y luces en \u00e1reas urbanas',
      'Visitar la costa keniana para escapadas de vacaciones navide\u00f1as',
    ],
  },

  funFacts: {
    en: [
      'Nyama choma (grilled meat) is the centerpiece of most Kenyan Christmas celebrations, often featuring goat, beef, or chicken.',
      'Many Kenyan children receive new clothes rather than toys as Christmas gifts, especially in rural areas.',
      'Christmas in Kenya falls during the warm summer season, making outdoor celebrations common.',
      'The Kenyan coast, especially Mombasa, becomes a major tourist destination during the Christmas holiday.',
      'Kenyan churches often hold special Christmas performances featuring traditional African music and dance alongside Western carols.',
    ],
    fr: [
      'Le nyama choma (viande grill\u00e9e) est le plat principal de la plupart des c\u00e9l\u00e9brations de No\u00ebl k\u00e9nyanes, souvent avec de la ch\u00e8vre, du b\u0153uf ou du poulet.',
      'De nombreux enfants k\u00e9nyans re\u00e7oivent de nouveaux v\u00eatements plut\u00f4t que des jouets comme cadeaux de No\u00ebl, surtout en zone rurale.',
      'No\u00ebl au Kenya tombe pendant la saison chaude d\'\u00e9t\u00e9, rendant les c\u00e9l\u00e9brations en plein air courantes.',
      'La c\u00f4te k\u00e9nyane, en particulier Mombasa, devient une destination touristique majeure pendant les vacances de No\u00ebl.',
      'Les \u00e9glises k\u00e9nyanes organisent souvent des spectacles de No\u00ebl sp\u00e9ciaux m\u00ealant musique et danse africaines traditionnelles aux chants occidentaux.',
    ],
    es: [
      'El nyama choma (carne a la parrilla) es el plato principal de la mayor\u00eda de las celebraciones navide\u00f1as kenianas, a menudo con cabra, res o pollo.',
      'Muchos ni\u00f1os kenianos reciben ropa nueva en lugar de juguetes como regalos de Navidad, especialmente en zonas rurales.',
      'La Navidad en Kenia cae durante la c\u00e1lida temporada de verano, haciendo que las celebraciones al aire libre sean comunes.',
      'La costa keniana, especialmente Mombasa, se convierte en un destino tur\u00edstico importante durante las vacaciones navide\u00f1as.',
      'Las iglesias kenianas a menudo realizan espect\u00e1culos navide\u00f1os especiales que mezclan m\u00fasica y danza africanas tradicionales con villancicos occidentales.',
    ],
  },

  planningChecklist: {
    en: [
      'Book travel to your hometown early as transport fills up quickly',
      'Order or prepare nyama choma, chapati, and other festive foods',
      'Attend Christmas church services with your family',
      'Buy new clothes for children and family members',
      'Book coastal accommodation early if planning a beach holiday',
    ],
    fr: [
      'R\u00e9server les voyages vers votre ville d\'origine t\u00f4t car les transports se remplissent vite',
      'Commander ou pr\u00e9parer le nyama choma, le chapati et d\'autres plats festifs',
      'Assister aux services religieux de No\u00ebl avec votre famille',
      'Acheter de nouveaux v\u00eatements pour les enfants et les membres de la famille',
      'R\u00e9server l\'h\u00e9bergement c\u00f4tier t\u00f4t si vous planifiez des vacances \u00e0 la plage',
    ],
    es: [
      'Reservar viaje a su ciudad de origen con anticipaci\u00f3n ya que el transporte se llena r\u00e1pido',
      'Pedir o preparar nyama choma, chapati y otras comidas festivas',
      'Asistir a servicios religiosos navide\u00f1os con su familia',
      'Comprar ropa nueva para ni\u00f1os y familiares',
      'Reservar alojamiento costero con anticipaci\u00f3n si planea vacaciones en la playa',
    ],
  },

  relatedHolidays: ['ke_jamhuri-day', 'ke_new-years-day'],

  seo: {
    en: {
      titleTemplate: 'Christmas Day {year} Kenya \u2014 Countdown & Traditions',
      descriptionTemplate: 'When is Christmas {year} in Kenya? Live countdown to December 25, Kenyan Christmas traditions, and celebration guide.',
      keywords: ['Christmas Kenya', 'Kenya Christmas traditions', 'nyama choma Christmas', 'December 25 Kenya', 'Christmas countdown Kenya'],
    },
    fr: {
      titleTemplate: 'Jour de No\u00ebl {year} Kenya \u2014 Compte \u00e0 rebours et traditions',
      descriptionTemplate: 'Quand est No\u00ebl {year} au Kenya ? Compte \u00e0 rebours en direct, traditions de No\u00ebl k\u00e9nyanes et guide de c\u00e9l\u00e9bration.',
      keywords: ['No\u00ebl Kenya', 'traditions No\u00ebl Kenya', 'nyama choma No\u00ebl', '25 d\u00e9cembre Kenya', 'compte \u00e0 rebours No\u00ebl Kenya'],
    },
    es: {
      titleTemplate: 'D\u00eda de Navidad {year} Kenia \u2014 Cuenta regresiva y tradiciones',
      descriptionTemplate: '\u00bfCu\u00e1ndo es Navidad {year} en Kenia? Cuenta regresiva en vivo, tradiciones navide\u00f1as kenianas y gu\u00eda de celebraci\u00f3n.',
      keywords: ['Navidad Kenia', 'tradiciones Navidad Kenia', 'nyama choma Navidad', '25 de diciembre Kenia', 'cuenta regresiva Navidad Kenia'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Christmas Day {year} in Kenya?',
        fr: 'Quand est le jour de No\u00ebl {year} au Kenya ?',
        es: '\u00bfCu\u00e1ndo es el d\u00eda de Navidad {year} en Kenia?',
      },
      answer: {
        en: 'Christmas Day {year} in Kenya is on {date} ({dayOfWeek}). It is always celebrated on December 25.',
        fr: 'Le jour de No\u00ebl {year} au Kenya est le {date} ({dayOfWeek}). Il est toujours c\u00e9l\u00e9br\u00e9 le 25 d\u00e9cembre.',
        es: 'El d\u00eda de Navidad {year} en Kenia es el {date} ({dayOfWeek}). Siempre se celebra el 25 de diciembre.',
      },
    },
    {
      question: {
        en: 'What do Kenyans eat on Christmas?',
        fr: 'Que mangent les K\u00e9nyans \u00e0 No\u00ebl ?',
        es: '\u00bfQu\u00e9 comen los kenianos en Navidad?',
      },
      answer: {
        en: 'The traditional Kenyan Christmas meal features nyama choma (grilled goat or beef), chapati (flatbread), pilau rice, and kachumbari (fresh tomato and onion salad). Chicken, ugali, and sukuma wiki are also popular.',
        fr: 'Le repas de No\u00ebl traditionnel k\u00e9nyan comprend du nyama choma (ch\u00e8vre ou b\u0153uf grill\u00e9), du chapati (pain plat), du riz pilau et du kachumbari (salade fra\u00eeche de tomates et oignons).',
        es: 'La comida navide\u00f1a tradicional keniana incluye nyama choma (cabra o res a la parrilla), chapati (pan plano), arroz pilau y kachumbari (ensalada fresca de tomate y cebolla).',
      },
    },
    {
      question: {
        en: 'Is Christmas a public holiday in Kenya?',
        fr: 'No\u00ebl est-il un jour f\u00e9ri\u00e9 au Kenya ?',
        es: '\u00bfLa Navidad es un d\u00eda festivo en Kenia?',
      },
      answer: {
        en: 'Yes, both Christmas Day (December 25) and Boxing Day (December 26) are official public holidays in Kenya.',
        fr: 'Oui, le jour de No\u00ebl (25 d\u00e9cembre) et le lendemain de No\u00ebl (26 d\u00e9cembre) sont des jours f\u00e9ri\u00e9s officiels au Kenya.',
        es: 'S\u00ed, tanto el d\u00eda de Navidad (25 de diciembre) como el d\u00eda siguiente (26 de diciembre) son d\u00edas festivos oficiales en Kenia.',
      },
    },
    {
      question: {
        en: 'How is Christmas different in Kenya?',
        fr: 'En quoi No\u00ebl est-il diff\u00e9rent au Kenya ?',
        es: '\u00bfC\u00f3mo es diferente la Navidad en Kenia?',
      },
      answer: {
        en: 'Christmas in Kenya is celebrated in warm summer weather, with outdoor feasts and gatherings being the norm. Rather than heavy winter meals, Kenyans enjoy grilled meats, and children often receive new clothes instead of toys. Travel to rural hometowns is a major tradition.',
        fr: 'No\u00ebl au Kenya est c\u00e9l\u00e9br\u00e9 par temps chaud d\'\u00e9t\u00e9, avec des festins et rassemblements en plein air. Les K\u00e9nyans appr\u00e9cient les viandes grill\u00e9es, et les enfants re\u00e7oivent souvent de nouveaux v\u00eatements au lieu de jouets.',
        es: 'La Navidad en Kenia se celebra con clima c\u00e1lido de verano, con banquetes y reuniones al aire libre. Los kenianos disfrutan de carnes a la parrilla, y los ni\u00f1os a menudo reciben ropa nueva en lugar de juguetes.',
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
  id: 'ke_eid-al-fitr',
  countryCode: 'ke',
  slugs: { en: 'eid-al-fitr', fr: 'eid-al-fitr', es: 'eid-al-fitr' },
  names: { en: 'Eid al-Fitr', fr: "A\u00efd el-Fitr", es: 'Eid al-Fitr' },

  dateType: 'calculated',
  calculateDate: getEidAlFitrDate,

  descriptions: {
    en: 'Eid al-Fitr marks the end of Ramadan and is a public holiday in Kenya. It is celebrated with communal prayers, feasting, and family gatherings, especially by the Muslim community along the Kenyan coast and in northeastern Kenya.',
    fr: "L'A\u00efd el-Fitr marque la fin du Ramadan et est un jour f\u00e9ri\u00e9 au Kenya. Il est c\u00e9l\u00e9br\u00e9 avec des pri\u00e8res communautaires, des festins et des r\u00e9unions familiales, en particulier par la communaut\u00e9 musulmane le long de la c\u00f4te k\u00e9nyane et dans le nord-est du Kenya.",
    es: 'El Eid al-Fitr marca el fin del Ramad\u00e1n y es un d\u00eda festivo en Kenia. Se celebra con oraciones comunitarias, banquetes y reuniones familiares, especialmente por la comunidad musulmana a lo largo de la costa keniana y en el noreste de Kenia.',
  },

  history: {
    en: "Islam has a long history in Kenya, dating back to the arrival of Arab and Persian traders along the East African coast over a thousand years ago. The Swahili culture that developed along the coast is a blend of African and Islamic influences.\n\nToday, approximately 11% of Kenya's population is Muslim, with significant communities in Mombasa, Lamu, and the northeastern counties. Eid al-Fitr has been recognized as a public holiday, reflecting the government's commitment to religious diversity.\n\nThe coastal city of Mombasa and the historic island town of Lamu are the epicenters of Eid celebrations in Kenya. Lamu's Eid festivities are particularly famous, featuring traditional Swahili music, dhow races, and elaborate feasts that attract visitors from across the country and beyond.",
    fr: "L'islam a une longue histoire au Kenya, remontant \u00e0 l'arriv\u00e9e des commer\u00e7ants arabes et persans le long de la c\u00f4te est-africaine il y a plus de mille ans. La culture swahilie qui s'est d\u00e9velopp\u00e9e le long de la c\u00f4te est un m\u00e9lange d'influences africaines et islamiques.\n\nAujourd'hui, environ 11% de la population du Kenya est musulmane, avec des communaut\u00e9s importantes \u00e0 Mombasa, Lamu et dans les comt\u00e9s du nord-est. L'A\u00efd el-Fitr a \u00e9t\u00e9 reconnu comme jour f\u00e9ri\u00e9, refl\u00e9tant l'engagement du gouvernement envers la diversit\u00e9 religieuse.\n\nLa ville c\u00f4ti\u00e8re de Mombasa et la ville historique insulaire de Lamu sont les \u00e9picentres des c\u00e9l\u00e9brations de l'A\u00efd au Kenya. Les festivit\u00e9s de l'A\u00efd \u00e0 Lamu sont particuli\u00e8rement c\u00e9l\u00e8bres, avec de la musique swahilie traditionnelle, des courses de boutres et des festins \u00e9labor\u00e9s.",
    es: "El islam tiene una larga historia en Kenia, que se remonta a la llegada de comerciantes \u00e1rabes y persas a lo largo de la costa de \u00c1frica Oriental hace m\u00e1s de mil a\u00f1os. La cultura suajili que se desarroll\u00f3 a lo largo de la costa es una mezcla de influencias africanas e isl\u00e1micas.\n\nHoy en d\u00eda, aproximadamente el 11% de la poblaci\u00f3n de Kenia es musulmana, con comunidades significativas en Mombasa, Lamu y los condados del noreste. El Eid al-Fitr ha sido reconocido como d\u00eda festivo, reflejando el compromiso del gobierno con la diversidad religiosa.\n\nLa ciudad costera de Mombasa y la hist\u00f3rica ciudad insular de Lamu son los epicentros de las celebraciones del Eid en Kenia. Las festividades del Eid en Lamu son particularmente famosas, con m\u00fasica suajili tradicional, carreras de dhows y elaborados banquetes.",
  },

  traditions: {
    en: [
      'Morning Eid prayers at mosques and open grounds',
      'Wearing new or best clothes, often traditional Swahili attire',
      'Preparing biriani, pilau, samosas, and Swahili sweets',
      'Visiting family, friends, and neighbors to exchange greetings',
      'Giving Zakat al-Fitr (charity) before the Eid prayers',
      'Traditional Swahili celebrations with taarab music in coastal areas',
    ],
    fr: [
      'Pri\u00e8res du matin de l\'A\u00efd dans les mosqu\u00e9es et sur des terrains ouverts',
      'Porter de nouveaux v\u00eatements ou les plus beaux, souvent des tenues swahilies traditionnelles',
      'Pr\u00e9parer du biriani, du pilau, des samosas et des douceurs swahilies',
      'Visiter la famille, les amis et les voisins pour \u00e9changer des salutations',
      'Donner la Zakat al-Fitr (charit\u00e9) avant les pri\u00e8res de l\'A\u00efd',
      'C\u00e9l\u00e9brations swahilies traditionnelles avec de la musique taarab dans les zones c\u00f4ti\u00e8res',
    ],
    es: [
      'Oraciones matutinas del Eid en mezquitas y terrenos abiertos',
      'Usar ropa nueva o la mejor, a menudo vestimenta suajili tradicional',
      'Preparar biriani, pilau, samosas y dulces suajilis',
      'Visitar a familiares, amigos y vecinos para intercambiar saludos',
      'Dar Zakat al-Fitr (caridad) antes de las oraciones del Eid',
      'Celebraciones suajilis tradicionales con m\u00fasica taarab en zonas costeras',
    ],
  },

  funFacts: {
    en: [
      'Lamu Island hosts some of the most vibrant Eid celebrations in East Africa, with traditional dhow races and Swahili feasts.',
      'Kenyan Eid cuisine features Swahili dishes like biriani, pilau, and mahamri (sweet doughnuts), reflecting the coastal Arab influence.',
      'Mombasa\'s Old Town transforms during Eid, with streets filled with food vendors, music, and colorful decorations.',
      'Kenya is one of the few majority-Christian countries where Eid al-Fitr is recognized as a national public holiday.',
      'The Swahili greeting for Eid is "Eid Mubarak," meaning "Blessed Eid," exchanged widely across religious lines in coastal Kenya.',
    ],
    fr: [
      'L\'\u00eele de Lamu accueille certaines des c\u00e9l\u00e9brations de l\'A\u00efd les plus vibrantes d\'Afrique de l\'Est, avec des courses de boutres et des festins swahilis.',
      'La cuisine k\u00e9nyane de l\'A\u00efd comprend des plats swahilis comme le biriani, le pilau et les mahamri (beignets sucr\u00e9s).',
      'La vieille ville de Mombasa se transforme pendant l\'A\u00efd, avec des rues remplies de vendeurs de nourriture et de d\u00e9corations color\u00e9es.',
      'Le Kenya est l\'un des rares pays \u00e0 majorit\u00e9 chr\u00e9tienne o\u00f9 l\'A\u00efd el-Fitr est un jour f\u00e9ri\u00e9 national.',
      'Le salut swahili pour l\'A\u00efd est \u00ab Eid Mubarak \u00bb, signifiant \u00ab A\u00efd b\u00e9ni \u00bb, \u00e9chang\u00e9 au-del\u00e0 des lignes religieuses sur la c\u00f4te k\u00e9nyane.',
    ],
    es: [
      'La isla de Lamu alberga algunas de las celebraciones del Eid m\u00e1s vibrantes de \u00c1frica Oriental, con carreras tradicionales de dhows y banquetes suajilis.',
      'La cocina keniana del Eid incluye platos suajilis como biriani, pilau y mahamri (donas dulces), reflejando la influencia \u00e1rabe costera.',
      'El casco antiguo de Mombasa se transforma durante el Eid, con calles llenas de vendedores de comida y decoraciones coloridas.',
      'Kenia es uno de los pocos pa\u00edses de mayor\u00eda cristiana donde el Eid al-Fitr es reconocido como d\u00eda festivo nacional.',
      'El saludo suajili para el Eid es "Eid Mubarak", que significa "Eid bendecido", intercambiado ampliamente m\u00e1s all\u00e1 de las l\u00edneas religiosas en la costa keniana.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the confirmed date as it depends on moon sighting',
      'Prepare Zakat al-Fitr charity contributions before Eid prayers',
      'Stock up on ingredients for biriani, pilau, and Swahili dishes',
      'Buy new clothes for the family for the celebration',
      'Plan visits to family elders and community gatherings',
    ],
    fr: [
      'V\u00e9rifier la date confirm\u00e9e car elle d\u00e9pend de l\'observation de la lune',
      'Pr\u00e9parer les contributions charitables de Zakat al-Fitr avant les pri\u00e8res de l\'A\u00efd',
      'Faire des provisions d\'ingr\u00e9dients pour le biriani, le pilau et les plats swahilis',
      'Acheter de nouveaux v\u00eatements pour la famille pour la c\u00e9l\u00e9bration',
      'Planifier les visites aux a\u00een\u00e9s de la famille et aux rassemblements communautaires',
    ],
    es: [
      'Verificar la fecha confirmada ya que depende del avistamiento de la luna',
      'Preparar las contribuciones caritativas de Zakat al-Fitr antes de las oraciones del Eid',
      'Abastecerse de ingredientes para biriani, pilau y platos suajilis',
      'Comprar ropa nueva para la familia para la celebraci\u00f3n',
      'Planificar visitas a los mayores de la familia y reuniones comunitarias',
    ],
  },

  relatedHolidays: ['ke_christmas', 'ke_new-years-day'],

  seo: {
    en: {
      titleTemplate: 'Eid al-Fitr {year} Kenya \u2014 Date, Countdown & Guide',
      descriptionTemplate: 'When is Eid al-Fitr {year} in Kenya? Live countdown, Swahili traditions, and celebration guide.',
      keywords: ['Eid al-Fitr Kenya', 'Eid Mombasa', 'Eid Lamu', 'Ramadan Kenya', 'Islamic holidays Kenya'],
    },
    fr: {
      titleTemplate: "A\u00efd el-Fitr {year} Kenya \u2014 Date, compte \u00e0 rebours et guide",
      descriptionTemplate: "Quand est l'A\u00efd el-Fitr {year} au Kenya ? Compte \u00e0 rebours en direct, traditions swahilies et guide de c\u00e9l\u00e9bration.",
      keywords: ["A\u00efd el-Fitr Kenya", 'A\u00efd Mombasa', 'A\u00efd Lamu', 'Ramadan Kenya', 'f\u00eates islamiques Kenya'],
    },
    es: {
      titleTemplate: 'Eid al-Fitr {year} Kenia \u2014 Fecha, cuenta regresiva y gu\u00eda',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el Eid al-Fitr {year} en Kenia? Cuenta regresiva en vivo, tradiciones suajilis y gu\u00eda de celebraci\u00f3n.',
      keywords: ['Eid al-Fitr Kenia', 'Eid Mombasa', 'Eid Lamu', 'Ramad\u00e1n Kenia', 'fiestas isl\u00e1micas Kenia'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Eid al-Fitr {year} in Kenya?',
        fr: "Quand est l'A\u00efd el-Fitr {year} au Kenya ?",
        es: '\u00bfCu\u00e1ndo es el Eid al-Fitr {year} en Kenia?',
      },
      answer: {
        en: 'Eid al-Fitr {year} in Kenya is expected on {date} ({dayOfWeek}). The exact date depends on the sighting of the new moon.',
        fr: "L'A\u00efd el-Fitr {year} au Kenya est pr\u00e9vu le {date} ({dayOfWeek}). La date exacte d\u00e9pend de l'observation du nouveau croissant de lune.",
        es: 'El Eid al-Fitr {year} en Kenia se espera el {date} ({dayOfWeek}). La fecha exacta depende del avistamiento de la luna nueva.',
      },
    },
    {
      question: {
        en: 'Is Eid al-Fitr a public holiday in Kenya?',
        fr: "L'A\u00efd el-Fitr est-il un jour f\u00e9ri\u00e9 au Kenya ?",
        es: '\u00bfEl Eid al-Fitr es un d\u00eda festivo en Kenia?',
      },
      answer: {
        en: 'Yes, Eid al-Fitr is an official public holiday in Kenya. All government offices, banks, and schools are closed.',
        fr: "Oui, l'A\u00efd el-Fitr est un jour f\u00e9ri\u00e9 officiel au Kenya. Tous les bureaux gouvernementaux, banques et \u00e9coles sont ferm\u00e9s.",
        es: 'S\u00ed, el Eid al-Fitr es un d\u00eda festivo oficial en Kenia. Todas las oficinas gubernamentales, bancos y escuelas est\u00e1n cerrados.',
      },
    },
    {
      question: {
        en: 'Where are the best Eid celebrations in Kenya?',
        fr: 'O\u00f9 sont les meilleures c\u00e9l\u00e9brations de l\'A\u00efd au Kenya ?',
        es: '\u00bfD\u00f3nde est\u00e1n las mejores celebraciones del Eid en Kenia?',
      },
      answer: {
        en: 'The most vibrant Eid celebrations in Kenya are found in Mombasa, Lamu Island, and the northeastern counties. Lamu is especially famous for its traditional Swahili Eid festivities, featuring dhow races and elaborate feasts.',
        fr: 'Les c\u00e9l\u00e9brations de l\'A\u00efd les plus vibrantes au Kenya se trouvent \u00e0 Mombasa, sur l\'\u00eele de Lamu et dans les comt\u00e9s du nord-est. Lamu est particuli\u00e8rement c\u00e9l\u00e8bre pour ses festivit\u00e9s traditionnelles swahilies.',
        es: 'Las celebraciones del Eid m\u00e1s vibrantes en Kenia se encuentran en Mombasa, la isla de Lamu y los condados del noreste. Lamu es especialmente famosa por sus festividades tradicionales suajilis del Eid.',
      },
    },
    {
      question: {
        en: 'Why does the date of Eid al-Fitr change each year?',
        fr: "Pourquoi la date de l'A\u00efd el-Fitr change-t-elle chaque ann\u00e9e ?",
        es: '\u00bfPor qu\u00e9 cambia la fecha del Eid al-Fitr cada a\u00f1o?',
      },
      answer: {
        en: 'Eid al-Fitr follows the Islamic lunar calendar, which is about 11 days shorter than the Gregorian calendar. This means the date shifts earlier by roughly 11 days each year in the Gregorian calendar.',
        fr: "L'A\u00efd el-Fitr suit le calendrier lunaire islamique, qui est environ 11 jours plus court que le calendrier gr\u00e9gorien. La date avance donc d'environ 11 jours chaque ann\u00e9e.",
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

const keHolidays: HolidayData[] = [
  newYearsDay,
  madarakaDay,
  mashujaaDay,
  jamhuriDay,
  christmas,
  eidAlFitr,
];

export default keHolidays;
