/**
 * DR Congo holidays data.
 */

import type { HolidayData } from '@/lib/types';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'cd_new-years-day',
  countryCode: 'cd',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'ano-nuevo' },
  names: { en: "New Year's Day", fr: "Jour de l'An", es: 'Dia de Ano Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 marks the start of the calendar year in the Democratic Republic of the Congo. It is a public holiday celebrated with church services, family gatherings, and festive music in Kinshasa and across the nation.",
    fr: "Le Jour de l'An, le 1er janvier, marque le debut de l'annee civile en Republique democratique du Congo. C'est un jour ferie celebre par des services religieux, des reunions familiales et de la musique festive a Kinshasa et a travers la nation.",
    es: "El Dia de Ano Nuevo, el 1 de enero, marca el inicio del ano calendario en la Republica Democratica del Congo. Es un dia festivo celebrado con servicios religiosos, reuniones familiares y musica festiva en Kinshasa y en toda la nacion.",
  },

  history: {
    en: "New Year's Day has been observed as a public holiday in the DR Congo since independence in 1960. The celebration reflects the deeply religious character of Congolese society, where Christianity plays a central role. Kinshasa, the capital and one of Africa's largest cities, comes alive on New Year's Eve with church vigils, concerts, and street celebrations.\n\nThe Congolese rumba music scene provides the soundtrack for New Year's festivities. Legendary musicians from the Congo — from Franco to Papa Wemba — have shaped a musical tradition that is inseparable from celebration and community.\n\nFor many Congolese, New Year's Day is a time of prayer and hope, a chance to ask for blessings for the year ahead. Church services on the night of December 31, known as 'veillees,' draw massive congregations across the country.",
    fr: "Le Jour de l'An est observe comme jour ferie en RD Congo depuis l'independance en 1960. La celebration reflete le caractere profondement religieux de la societe congolaise, ou le christianisme joue un role central. Kinshasa, la capitale et l'une des plus grandes villes d'Afrique, s'anime la nuit du Nouvel An avec des veillees, des concerts et des celebrations de rue.\n\nLa scene musicale de la rumba congolaise fournit la bande sonore des festivites du Nouvel An. Des musiciens legendaires du Congo — de Franco a Papa Wemba — ont faconne une tradition musicale indissociable de la celebration et de la communaute.\n\nPour de nombreux Congolais, le Jour de l'An est un moment de priere et d'espoir, une occasion de demander des benedictions pour l'annee a venir. Les services religieux de la nuit du 31 decembre, connus sous le nom de 'veillees', attirent d'immenses congregations a travers le pays.",
    es: "El Dia de Ano Nuevo se ha observado como dia festivo en la RD del Congo desde la independencia en 1960. La celebracion refleja el caracter profundamente religioso de la sociedad congolena, donde el cristianismo juega un papel central. Kinshasa, la capital y una de las ciudades mas grandes de Africa, cobra vida en Nochevieja con vigilias religiosas, conciertos y celebraciones callejeras.\n\nLa escena musical de la rumba congolena proporciona la banda sonora de las festividades de Ano Nuevo. Musicos legendarios del Congo — desde Franco hasta Papa Wemba — han moldeado una tradicion musical inseparable de la celebracion y la comunidad.\n\nPara muchos congolenos, el Dia de Ano Nuevo es un momento de oracion y esperanza, una oportunidad de pedir bendiciones para el ano venidero. Los servicios religiosos de la noche del 31 de diciembre, conocidos como 'veillees', atraen enormes congregaciones en todo el pais.",
  },

  traditions: {
    en: [
      'Attending church vigils (veillees) on New Year\'s Eve',
      'Dancing to Congolese rumba and ndombolo music',
      'Gathering with family for festive meals featuring fufu, pondu, and grilled meat',
      'Wearing new clothes, often colourful wax-print fabrics',
      'Exchanging New Year greetings and visiting neighbours',
      'Outdoor concerts and celebrations in Kinshasa\'s Matonge neighbourhood',
    ],
    fr: [
      'Assister aux veillees de priere le soir du Nouvel An',
      'Danser sur de la rumba congolaise et du ndombolo',
      'Se reunir en famille pour des repas festifs avec du fufu, du pondu et de la viande grillee',
      'Porter de nouveaux vetements, souvent en pagne colore',
      'Echanger des voeux de Nouvel An et rendre visite aux voisins',
      'Concerts en plein air et celebrations dans le quartier Matonge de Kinshasa',
    ],
    es: [
      'Asistir a vigilias religiosas (veillees) en Nochevieja',
      'Bailar rumba congolena y ndombolo',
      'Reunirse en familia para comidas festivas con fufu, pondu y carne a la parrilla',
      'Estrenar ropa nueva, a menudo telas coloridas de estampado wax',
      'Intercambiar saludos de Ano Nuevo y visitar a los vecinos',
      'Conciertos al aire libre y celebraciones en el barrio Matonge de Kinshasa',
    ],
  },

  funFacts: {
    en: [
      'Kinshasa is the largest Francophone city in the world by population, surpassing Paris.',
      'Congolese rumba, born in Kinshasa, was inscribed on UNESCO\'s Intangible Cultural Heritage list in 2021.',
      'New Year\'s Eve church vigils in the DR Congo can last from 8 PM until well past midnight.',
      'The DR Congo is the second-largest country in Africa by area, roughly the size of Western Europe.',
      'Pondu (cassava leaf stew) is one of the most popular dishes served at Congolese New Year celebrations.',
    ],
    fr: [
      'Kinshasa est la plus grande ville francophone du monde par population, surpassant Paris.',
      "La rumba congolaise, nee a Kinshasa, a ete inscrite sur la liste du patrimoine culturel immateriel de l'UNESCO en 2021.",
      'Les veillees de priere du Nouvel An en RD Congo peuvent durer de 20h jusqu\'a bien apres minuit.',
      "La RD Congo est le deuxieme plus grand pays d'Afrique par superficie, a peu pres la taille de l'Europe de l'Ouest.",
      "Le pondu (ragout de feuilles de manioc) est l'un des plats les plus populaires servis lors des celebrations du Nouvel An congolais.",
    ],
    es: [
      'Kinshasa es la ciudad francofona mas grande del mundo por poblacion, superando a Paris.',
      'La rumba congolena, nacida en Kinshasa, fue inscrita en la lista del Patrimonio Cultural Inmaterial de la UNESCO en 2021.',
      'Las vigilias religiosas de Nochevieja en la RD del Congo pueden durar desde las 8 PM hasta bien pasada la medianoche.',
      'La RD del Congo es el segundo pais mas grande de Africa por superficie, aproximadamente del tamano de Europa Occidental.',
      'El pondu (estofado de hojas de yuca) es uno de los platos mas populares servidos en las celebraciones de Ano Nuevo congolenas.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan to attend a church vigil on New Year\'s Eve',
      'Purchase ingredients for traditional Congolese dishes like pondu and fufu',
      'Buy new clothes or wax-print fabric for the family',
      'Check local event listings for concerts in Kinshasa',
      'Arrange visits to family and friends for January 1',
    ],
    fr: [
      'Prevoir d\'assister a une veillee le soir du Nouvel An',
      'Acheter les ingredients pour les plats traditionnels congolais comme le pondu et le fufu',
      'Acheter de nouveaux vetements ou du pagne pour la famille',
      'Consulter les programmes locaux pour les concerts a Kinshasa',
      'Organiser les visites a la famille et aux amis pour le 1er janvier',
    ],
    es: [
      'Planificar asistir a una vigilia religiosa en Nochevieja',
      'Comprar ingredientes para platos tradicionales congolenos como pondu y fufu',
      'Comprar ropa nueva o tela wax para la familia',
      'Consultar los programas locales de conciertos en Kinshasa',
      'Organizar visitas a familiares y amigos para el 1 de enero',
    ],
  },

  relatedHolidays: ['cd_christmas', 'cd_independence-day'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} DR Congo — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in DR Congo? Live countdown to January 1, holiday info, and celebration guide.",
      keywords: ["New Year's Day DR Congo", 'Congo public holidays', "Jour de l'An Congo", "New Year's Kinshasa", 'DR Congo holidays'],
    },
    fr: {
      titleTemplate: "Jour de l'An {year} RD Congo — Compte a rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'An {year} en RD Congo ? Compte a rebours, informations et guide de celebration.",
      keywords: ["Jour de l'An RD Congo", 'jours feries RD Congo', 'Nouvel An Kinshasa', 'fetes congolaises', 'RD Congo ferie'],
    },
    es: {
      titleTemplate: 'Dia de Ano Nuevo {year} RD Congo — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Dia de Ano Nuevo {year} en RD Congo? Cuenta regresiva, informacion y guia de celebracion.',
      keywords: ['Ano Nuevo RD Congo', 'dias festivos RD Congo', 'feriados RD Congo', 'Ano Nuevo Kinshasa', 'fiestas congolenas'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in DR Congo?", fr: "Quand est le Jour de l'An {year} en RD Congo ?", es: 'Cuando es el Dia de Ano Nuevo {year} en RD Congo?' },
      answer: {
        en: "New Year's Day {year} in DR Congo is on {date}. It is always January 1 and is a national public holiday.",
        fr: "Le Jour de l'An {year} en RD Congo est le {date}. C'est toujours le 1er janvier et c'est un jour ferie national.",
        es: 'El Dia de Ano Nuevo {year} en RD Congo es el {date}. Siempre es el 1 de enero y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'What is Congolese rumba?', fr: "Qu'est-ce que la rumba congolaise ?", es: 'Que es la rumba congolena?' },
      answer: {
        en: 'Congolese rumba is a music genre that originated in Kinshasa and Brazzaville in the mid-20th century. It blends Cuban rumba with traditional Congolese rhythms and has become one of the most influential music styles in Africa. It was added to UNESCO\'s Intangible Cultural Heritage list in 2021.',
        fr: "La rumba congolaise est un genre musical ne a Kinshasa et Brazzaville au milieu du XXe siecle. Elle melange la rumba cubaine avec des rythmes traditionnels congolais et est devenue l'un des styles musicaux les plus influents d'Afrique. Elle a ete ajoutee a la liste du patrimoine culturel immateriel de l'UNESCO en 2021.",
        es: 'La rumba congolena es un genero musical que se origino en Kinshasa y Brazzaville a mediados del siglo XX. Mezcla la rumba cubana con ritmos tradicionales congolenos y se ha convertido en uno de los estilos musicales mas influyentes de Africa. Fue anadida a la lista del Patrimonio Cultural Inmaterial de la UNESCO en 2021.',
      },
    },
    {
      question: { en: 'Is Kinshasa really larger than Paris?', fr: 'Kinshasa est-elle vraiment plus grande que Paris ?', es: 'Es Kinshasa realmente mas grande que Paris?' },
      answer: {
        en: 'Yes, Kinshasa is the largest Francophone city in the world by population, with over 17 million inhabitants, surpassing the population of Paris proper.',
        fr: 'Oui, Kinshasa est la plus grande ville francophone du monde par population, avec plus de 17 millions d\'habitants, depassant la population de Paris intra-muros.',
        es: 'Si, Kinshasa es la ciudad francofona mas grande del mundo por poblacion, con mas de 17 millones de habitantes, superando la poblacion de Paris propiamente dicha.',
      },
    },
    {
      question: { en: "Is New Year's Day a public holiday in DR Congo?", fr: "Le Jour de l'An est-il un jour ferie en RD Congo ?", es: 'Es el Dia de Ano Nuevo un dia festivo en RD Congo?' },
      answer: {
        en: "Yes, New Year's Day is an official public holiday in the Democratic Republic of the Congo.",
        fr: "Oui, le Jour de l'An est un jour ferie officiel en Republique democratique du Congo.",
        es: 'Si, el Dia de Ano Nuevo es un dia festivo oficial en la Republica Democratica del Congo.',
      },
    },
  ],

  colorTheme: 'new-year',
  icon: '🎆',
};

// ---------------------------------------------------------------------------
// Martyrs' Day — January 4
// ---------------------------------------------------------------------------

const martyrsDay: HolidayData = {
  id: 'cd_martyrs-day',
  countryCode: 'cd',
  slugs: { en: 'martyrs-day', fr: 'journee-des-martyrs', es: 'dia-de-los-martires' },
  names: { en: "Martyrs' Day", fr: 'Journee des Martyrs', es: 'Dia de los Martires' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 4,

  descriptions: {
    en: "Martyrs' Day on January 4 honours the independence martyrs of the 1959 Kinshasa riots. It commemorates Congolese who died during the uprising against Belgian colonial rule, an event that accelerated the path to independence.",
    fr: "La Journee des Martyrs, le 4 janvier, honore les martyrs de l'independance lors des emeutes de Kinshasa de 1959. Elle commemore les Congolais morts lors du soulevement contre la domination coloniale belge, un evenement qui a accelere le chemin vers l'independance.",
    es: "El Dia de los Martires, el 4 de enero, honra a los martires de la independencia de los disturbios de Kinshasa de 1959. Conmemora a los congolenos que murieron durante el levantamiento contra el dominio colonial belga, un evento que acelero el camino hacia la independencia.",
  },

  history: {
    en: "On January 4, 1959, a political rally in Leopoldville (now Kinshasa) turned into a massive uprising against Belgian colonial authorities. The rally, organised by the ABAKO (Alliance des Bakongo) party led by Joseph Kasavubu, was banned by the colonial government, but thousands gathered nonetheless.\n\nBelgian forces responded with violence, killing an estimated 50 to 300 Congolese civilians (the exact number remains disputed). The Kinshasa riots, as they became known, shocked the international community and demonstrated the Congolese people's determination to achieve independence.\n\nThe events of January 4, 1959, marked a turning point. Within 18 months, Belgium agreed to grant independence, and the Democratic Republic of the Congo became a sovereign nation on June 30, 1960. Martyrs' Day honours those who gave their lives in this struggle.",
    fr: "Le 4 janvier 1959, un rassemblement politique a Leopoldville (aujourd'hui Kinshasa) s'est transforme en un soulevement massif contre les autorites coloniales belges. Le rassemblement, organise par le parti ABAKO (Alliance des Bakongo) dirige par Joseph Kasavubu, avait ete interdit par le gouvernement colonial, mais des milliers de personnes se sont neanmoins rassemblees.\n\nLes forces belges ont repondu par la violence, tuant entre 50 et 300 civils congolais (le nombre exact reste conteste). Les emeutes de Kinshasa, comme on les a appelees, ont choque la communaute internationale et ont demontre la determination du peuple congolais a obtenir l'independance.\n\nLes evenements du 4 janvier 1959 ont marque un tournant. En 18 mois, la Belgique a accepte d'accorder l'independance, et la Republique democratique du Congo est devenue une nation souveraine le 30 juin 1960. La Journee des Martyrs honore ceux qui ont donne leur vie dans cette lutte.",
    es: "El 4 de enero de 1959, una concentracion politica en Leopoldville (ahora Kinshasa) se convirtio en un levantamiento masivo contra las autoridades coloniales belgas. La concentracion, organizada por el partido ABAKO (Alianza de los Bakongo) liderado por Joseph Kasavubu, fue prohibida por el gobierno colonial, pero miles de personas se reunieron de todos modos.\n\nLas fuerzas belgas respondieron con violencia, matando a entre 50 y 300 civiles congolenos (el numero exacto sigue siendo disputado). Los disturbios de Kinshasa, como se los conocio, conmocionaron a la comunidad internacional y demostraron la determinacion del pueblo congoleno de lograr la independencia.\n\nLos eventos del 4 de enero de 1959 marcaron un punto de inflexion. En 18 meses, Belgica acepto conceder la independencia, y la Republica Democratica del Congo se convirtio en una nacion soberana el 30 de junio de 1960. El Dia de los Martires honra a quienes dieron su vida en esta lucha.",
  },

  traditions: {
    en: [
      'Laying wreaths at monuments honouring the independence martyrs',
      'Official government ceremonies and speeches in Kinshasa',
      'Moment of silence to honour those who died in the 1959 riots',
      'Educational events and lectures about the independence struggle',
      'Media coverage and documentaries about the events of January 4, 1959',
      'Community gatherings to reflect on national history',
    ],
    fr: [
      "Deposer des gerbes de fleurs aux monuments honorant les martyrs de l'independance",
      'Ceremonies et discours officiels du gouvernement a Kinshasa',
      "Minute de silence pour honorer ceux qui sont morts lors des emeutes de 1959",
      "Evenements educatifs et conferences sur la lutte pour l'independance",
      'Couverture mediatique et documentaires sur les evenements du 4 janvier 1959',
      "Rassemblements communautaires pour reflechir a l'histoire nationale",
    ],
    es: [
      'Depositar coronas en monumentos que honran a los martires de la independencia',
      'Ceremonias y discursos oficiales del gobierno en Kinshasa',
      'Momento de silencio para honrar a quienes murieron en los disturbios de 1959',
      'Eventos educativos y conferencias sobre la lucha por la independencia',
      'Cobertura mediatica y documentales sobre los eventos del 4 de enero de 1959',
      'Reuniones comunitarias para reflexionar sobre la historia nacional',
    ],
  },

  funFacts: {
    en: [
      'The January 4, 1959 riots were one of the first major anti-colonial uprisings in the Belgian Congo.',
      'Belgium granted independence to the Congo just 18 months after the riots, one of the fastest decolonisation processes in Africa.',
      'Leopoldville, the colonial name of Kinshasa, was renamed after independence to honour a local chief.',
      'The ABAKO party, which organised the rally, was one of the first political parties in the Belgian Congo.',
      'Martyrs\' Day is observed with solemnity, in contrast to the more festive Independence Day celebrations.',
    ],
    fr: [
      "Les emeutes du 4 janvier 1959 ont ete l'un des premiers grands soulevements anticoloniaux au Congo belge.",
      "La Belgique a accorde l'independance au Congo seulement 18 mois apres les emeutes, l'un des processus de decolonisation les plus rapides d'Afrique.",
      "Leopoldville, le nom colonial de Kinshasa, a ete renomme apres l'independance en l'honneur d'un chef local.",
      "Le parti ABAKO, qui a organise le rassemblement, etait l'un des premiers partis politiques du Congo belge.",
      'La Journee des Martyrs est observee avec solennite, contrairement aux celebrations plus festives de la Fete de l\'Independance.',
    ],
    es: [
      'Los disturbios del 4 de enero de 1959 fueron uno de los primeros grandes levantamientos anticoloniales en el Congo Belga.',
      'Belgica concedio la independencia al Congo solo 18 meses despues de los disturbios, uno de los procesos de descolonizacion mas rapidos de Africa.',
      'Leopoldville, el nombre colonial de Kinshasa, fue renombrada despues de la independencia en honor a un jefe local.',
      'El partido ABAKO, que organizo la concentracion, fue uno de los primeros partidos politicos del Congo Belga.',
      'El Dia de los Martires se observa con solemnidad, en contraste con las celebraciones mas festivas del Dia de la Independencia.',
    ],
  },

  planningChecklist: {
    en: [
      'Learn about the history of the 1959 Kinshasa riots',
      'Attend official commemorative ceremonies if possible',
      'Observe a moment of silence to honour the martyrs',
      'Share the history with younger family members',
      'Visit memorials and historical sites related to the independence struggle',
    ],
    fr: [
      "S'informer sur l'histoire des emeutes de Kinshasa de 1959",
      'Assister aux ceremonies commemoratives officielles si possible',
      'Observer une minute de silence pour honorer les martyrs',
      "Partager l'histoire avec les plus jeunes membres de la famille",
      "Visiter les memoriaux et sites historiques lies a la lutte pour l'independance",
    ],
    es: [
      'Aprender sobre la historia de los disturbios de Kinshasa de 1959',
      'Asistir a las ceremonias conmemorativas oficiales si es posible',
      'Observar un momento de silencio para honrar a los martires',
      'Compartir la historia con los miembros mas jovenes de la familia',
      'Visitar memoriales y sitios historicos relacionados con la lucha por la independencia',
    ],
  },

  relatedHolidays: ['cd_independence-day', 'cd_liberation-day'],

  seo: {
    en: {
      titleTemplate: "Martyrs' Day {year} DR Congo — Countdown & History",
      descriptionTemplate: "When is Martyrs' Day {year} in DR Congo? Live countdown to January 4, history of the 1959 Kinshasa riots, and commemoration guide.",
      keywords: ["Martyrs' Day DR Congo", 'January 4 Congo', '1959 Kinshasa riots', 'Congo independence martyrs', 'DR Congo holidays'],
    },
    fr: {
      titleTemplate: 'Journee des Martyrs {year} RD Congo — Compte a rebours et histoire',
      descriptionTemplate: 'Quand est la Journee des Martyrs {year} en RD Congo ? Compte a rebours, histoire des emeutes de 1959 et guide de commemoration.',
      keywords: ['Journee des Martyrs RD Congo', '4 janvier Congo', 'emeutes Kinshasa 1959', 'martyrs independance Congo', 'jours feries RD Congo'],
    },
    es: {
      titleTemplate: 'Dia de los Martires {year} RD Congo — Cuenta regresiva e historia',
      descriptionTemplate: 'Cuando es el Dia de los Martires {year} en RD Congo? Cuenta regresiva, historia de los disturbios de 1959 y guia de conmemoracion.',
      keywords: ['Dia de los Martires RD Congo', '4 de enero Congo', 'disturbios Kinshasa 1959', 'martires independencia Congo', 'dias festivos RD Congo'],
    },
  },

  faq: [
    {
      question: { en: "When is Martyrs' Day {year} in DR Congo?", fr: 'Quand est la Journee des Martyrs {year} en RD Congo ?', es: 'Cuando es el Dia de los Martires {year} en RD Congo?' },
      answer: {
        en: "Martyrs' Day {year} in DR Congo is on {date}. It is always January 4.",
        fr: "La Journee des Martyrs {year} en RD Congo est le {date}. C'est toujours le 4 janvier.",
        es: 'El Dia de los Martires {year} en RD Congo es el {date}. Siempre es el 4 de enero.',
      },
    },
    {
      question: { en: 'What happened on January 4, 1959?', fr: "Que s'est-il passe le 4 janvier 1959 ?", es: 'Que ocurrio el 4 de enero de 1959?' },
      answer: {
        en: 'On January 4, 1959, a political rally in Leopoldville (now Kinshasa) turned into a major uprising against Belgian colonial rule. Belgian forces killed dozens to hundreds of Congolese civilians, an event that accelerated the path to independence.',
        fr: "Le 4 janvier 1959, un rassemblement politique a Leopoldville (aujourd'hui Kinshasa) s'est transforme en un soulevement majeur contre la domination coloniale belge. Les forces belges ont tue des dizaines a des centaines de civils congolais, un evenement qui a accelere le chemin vers l'independance.",
        es: 'El 4 de enero de 1959, una concentracion politica en Leopoldville (ahora Kinshasa) se convirtio en un importante levantamiento contra el dominio colonial belga. Las fuerzas belgas mataron a decenas o cientos de civiles congolenos, un evento que acelero el camino hacia la independencia.',
      },
    },
    {
      question: { en: "Is Martyrs' Day a public holiday?", fr: "La Journee des Martyrs est-elle un jour ferie ?", es: 'Es el Dia de los Martires un dia festivo?' },
      answer: {
        en: "Yes, Martyrs' Day on January 4 is an official public holiday in the Democratic Republic of the Congo.",
        fr: "Oui, la Journee des Martyrs le 4 janvier est un jour ferie officiel en Republique democratique du Congo.",
        es: 'Si, el Dia de los Martires el 4 de enero es un dia festivo oficial en la Republica Democratica del Congo.',
      },
    },
    {
      question: { en: 'What was the ABAKO party?', fr: "Qu'etait le parti ABAKO ?", es: 'Que era el partido ABAKO?' },
      answer: {
        en: "ABAKO (Alliance des Bakongo) was one of the first political parties in the Belgian Congo, led by Joseph Kasavubu, who later became the first president. The party organised the January 4, 1959 rally that sparked the uprising.",
        fr: "L'ABAKO (Alliance des Bakongo) etait l'un des premiers partis politiques du Congo belge, dirige par Joseph Kasavubu, qui est devenu plus tard le premier president. Le parti a organise le rassemblement du 4 janvier 1959 qui a declenche le soulevement.",
        es: 'ABAKO (Alianza de los Bakongo) fue uno de los primeros partidos politicos del Congo Belga, liderado por Joseph Kasavubu, quien luego se convirtio en el primer presidente. El partido organizo la concentracion del 4 de enero de 1959 que desencadeno el levantamiento.',
      },
    },
  ],

  colorTheme: 'autumn',
  icon: '🕯️',
};

// ---------------------------------------------------------------------------
// Liberation Day — May 17
// ---------------------------------------------------------------------------

const liberationDay: HolidayData = {
  id: 'cd_liberation-day',
  countryCode: 'cd',
  slugs: { en: 'liberation-day', fr: 'journee-de-la-liberation', es: 'dia-de-la-liberacion' },
  names: { en: 'Liberation Day', fr: 'Journee de la Liberation', es: 'Dia de la Liberacion' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 17,

  descriptions: {
    en: "Liberation Day on May 17 commemorates the fall of the Mobutu regime in 1997, when Laurent-Desire Kabila's forces took control of Kinshasa. It marks the end of over 30 years of authoritarian rule and the beginning of a new era.",
    fr: "La Journee de la Liberation, le 17 mai, commemore la chute du regime de Mobutu en 1997, lorsque les forces de Laurent-Desire Kabila ont pris le controle de Kinshasa. Elle marque la fin de plus de 30 ans de regime autoritaire et le debut d'une nouvelle ere.",
    es: "El Dia de la Liberacion, el 17 de mayo, conmemora la caida del regimen de Mobutu en 1997, cuando las fuerzas de Laurent-Desire Kabila tomaron el control de Kinshasa. Marca el fin de mas de 30 anos de gobierno autoritario y el inicio de una nueva era.",
  },

  history: {
    en: "On May 17, 1997, Laurent-Desire Kabila's Alliance of Democratic Forces for the Liberation of Congo (AFDL) entered Kinshasa, ending the 32-year rule of Mobutu Sese Seko. Mobutu had renamed the country Zaire and ruled through a personality cult and authoritarian governance.\n\nThe fall of Mobutu came after a civil war that swept across the country from the east. Kabila declared himself president and renamed the country the Democratic Republic of the Congo, restoring the name used at independence.\n\nLiberation Day is a public holiday that marks this political transition. While the subsequent years brought new challenges, the day remains significant as the end of the Mobutu era and a symbol of the Congolese people's desire for change and self-determination.",
    fr: "Le 17 mai 1997, l'Alliance des Forces Democratiques pour la Liberation du Congo (AFDL) de Laurent-Desire Kabila est entree a Kinshasa, mettant fin aux 32 ans de pouvoir de Mobutu Sese Seko. Mobutu avait renomme le pays Zaire et gouverne par un culte de la personnalite et une gouvernance autoritaire.\n\nLa chute de Mobutu est survenue apres une guerre civile qui a traverse le pays depuis l'est. Kabila s'est declare president et a renomme le pays Republique democratique du Congo, restaurant le nom utilise a l'independance.\n\nLa Journee de la Liberation est un jour ferie qui marque cette transition politique. Bien que les annees suivantes aient apporte de nouveaux defis, cette journee reste significative comme la fin de l'ere Mobutu et un symbole du desir de changement et d'autodetermination du peuple congolais.",
    es: "El 17 de mayo de 1997, la Alianza de Fuerzas Democraticas para la Liberacion del Congo (AFDL) de Laurent-Desire Kabila entro en Kinshasa, poniendo fin a los 32 anos de gobierno de Mobutu Sese Seko. Mobutu habia renombrado el pais como Zaire y goberno a traves de un culto a la personalidad y gobernanza autoritaria.\n\nLa caida de Mobutu llego despues de una guerra civil que barro el pais desde el este. Kabila se declaro presidente y renombro el pais como Republica Democratica del Congo, restaurando el nombre usado en la independencia.\n\nEl Dia de la Liberacion es un dia festivo que marca esta transicion politica. Aunque los anos siguientes trajeron nuevos desafios, el dia sigue siendo significativo como el fin de la era Mobutu y un simbolo del deseo de cambio y autodeterminacion del pueblo congoleno.",
  },

  traditions: {
    en: [
      'Official government ceremonies and presidential speeches',
      'Military parades and displays',
      'Media coverage and documentaries about the fall of the Mobutu regime',
      'Community gatherings and discussions about national history',
      'Reflecting on the country\'s political journey since 1997',
    ],
    fr: [
      'Ceremonies officielles et discours presidentiels',
      'Defiles et demonstrations militaires',
      'Couverture mediatique et documentaires sur la chute du regime Mobutu',
      "Rassemblements communautaires et discussions sur l'histoire nationale",
      'Reflechir au parcours politique du pays depuis 1997',
    ],
    es: [
      'Ceremonias oficiales del gobierno y discursos presidenciales',
      'Desfiles y exhibiciones militares',
      'Cobertura mediatica y documentales sobre la caida del regimen de Mobutu',
      'Reuniones comunitarias y discusiones sobre la historia nacional',
      'Reflexionar sobre el recorrido politico del pais desde 1997',
    ],
  },

  funFacts: {
    en: [
      'Mobutu Sese Seko ruled the country (then called Zaire) for 32 years, from 1965 to 1997.',
      'Laurent-Desire Kabila renamed the country from Zaire back to the Democratic Republic of the Congo.',
      'The march to Kinshasa that ended Mobutu\'s rule began in eastern Congo and lasted about seven months.',
      'Mobutu was famous for his leopard-print hat, which became a symbol of his personality cult.',
      'The DR Congo has been called by several names: Congo Free State, Belgian Congo, Republic of the Congo, Zaire, and now the Democratic Republic of the Congo.',
    ],
    fr: [
      "Mobutu Sese Seko a dirige le pays (alors appele Zaire) pendant 32 ans, de 1965 a 1997.",
      "Laurent-Desire Kabila a renomme le pays de Zaire en Republique democratique du Congo.",
      "La marche vers Kinshasa qui a mis fin au regime de Mobutu a commence dans l'est du Congo et a dure environ sept mois.",
      "Mobutu etait celebre pour sa toque en peau de leopard, devenue un symbole de son culte de la personnalite.",
      "La RD Congo a porte plusieurs noms : Etat independant du Congo, Congo belge, Republique du Congo, Zaire, et maintenant Republique democratique du Congo.",
    ],
    es: [
      'Mobutu Sese Seko goberno el pais (entonces llamado Zaire) durante 32 anos, de 1965 a 1997.',
      'Laurent-Desire Kabila renombro el pais de Zaire a Republica Democratica del Congo.',
      'La marcha hacia Kinshasa que puso fin al gobierno de Mobutu comenzo en el este del Congo y duro unos siete meses.',
      'Mobutu era famoso por su gorro de piel de leopardo, que se convirtio en un simbolo de su culto a la personalidad.',
      'La RD del Congo ha tenido varios nombres: Estado Libre del Congo, Congo Belga, Republica del Congo, Zaire, y ahora Republica Democratica del Congo.',
    ],
  },

  planningChecklist: {
    en: [
      'Learn about the history of the fall of the Mobutu regime',
      'Attend official commemorative ceremonies if possible',
      'Watch documentaries about Congo\'s political history',
      'Share the significance of the day with younger generations',
      'Reflect on the country\'s progress since 1997',
    ],
    fr: [
      "S'informer sur l'histoire de la chute du regime Mobutu",
      'Assister aux ceremonies commemoratives officielles si possible',
      "Regarder des documentaires sur l'histoire politique du Congo",
      'Partager la signification de cette journee avec les jeunes generations',
      'Reflechir aux progres du pays depuis 1997',
    ],
    es: [
      'Aprender sobre la historia de la caida del regimen de Mobutu',
      'Asistir a las ceremonias conmemorativas oficiales si es posible',
      'Ver documentales sobre la historia politica del Congo',
      'Compartir el significado del dia con las generaciones mas jovenes',
      'Reflexionar sobre el progreso del pais desde 1997',
    ],
  },

  relatedHolidays: ['cd_independence-day', 'cd_martyrs-day'],

  seo: {
    en: {
      titleTemplate: 'Liberation Day {year} DR Congo — Countdown & History',
      descriptionTemplate: 'When is Liberation Day {year} in DR Congo? Live countdown to May 17, fall of Mobutu, and commemoration guide.',
      keywords: ['Liberation Day DR Congo', 'May 17 Congo', 'fall of Mobutu', 'Kabila Congo', 'DR Congo holidays'],
    },
    fr: {
      titleTemplate: 'Journee de la Liberation {year} RD Congo — Compte a rebours et histoire',
      descriptionTemplate: 'Quand est la Journee de la Liberation {year} en RD Congo ? Compte a rebours, chute de Mobutu et guide de commemoration.',
      keywords: ['Journee de la Liberation RD Congo', '17 mai Congo', 'chute de Mobutu', 'Kabila Congo', 'jours feries RD Congo'],
    },
    es: {
      titleTemplate: 'Dia de la Liberacion {year} RD Congo — Cuenta regresiva e historia',
      descriptionTemplate: 'Cuando es el Dia de la Liberacion {year} en RD Congo? Cuenta regresiva, caida de Mobutu y guia de conmemoracion.',
      keywords: ['Dia de la Liberacion RD Congo', '17 de mayo Congo', 'caida de Mobutu', 'Kabila Congo', 'dias festivos RD Congo'],
    },
  },

  faq: [
    {
      question: { en: 'When is Liberation Day {year} in DR Congo?', fr: 'Quand est la Journee de la Liberation {year} en RD Congo ?', es: 'Cuando es el Dia de la Liberacion {year} en RD Congo?' },
      answer: {
        en: 'Liberation Day {year} in DR Congo is on {date}. It is always May 17.',
        fr: "La Journee de la Liberation {year} en RD Congo est le {date}. C'est toujours le 17 mai.",
        es: 'El Dia de la Liberacion {year} en RD Congo es el {date}. Siempre es el 17 de mayo.',
      },
    },
    {
      question: { en: 'What happened on May 17, 1997?', fr: "Que s'est-il passe le 17 mai 1997 ?", es: 'Que ocurrio el 17 de mayo de 1997?' },
      answer: {
        en: "On May 17, 1997, Laurent-Desire Kabila's AFDL forces entered Kinshasa, ending Mobutu Sese Seko's 32-year authoritarian rule. Kabila became president and renamed the country from Zaire to the Democratic Republic of the Congo.",
        fr: "Le 17 mai 1997, les forces de l'AFDL de Laurent-Desire Kabila sont entrees a Kinshasa, mettant fin aux 32 ans de pouvoir autoritaire de Mobutu Sese Seko. Kabila est devenu president et a renomme le pays de Zaire en Republique democratique du Congo.",
        es: 'El 17 de mayo de 1997, las fuerzas de la AFDL de Laurent-Desire Kabila entraron en Kinshasa, poniendo fin a los 32 anos de gobierno autoritario de Mobutu Sese Seko. Kabila se convirtio en presidente y renombro el pais de Zaire a Republica Democratica del Congo.',
      },
    },
    {
      question: { en: 'Who was Mobutu Sese Seko?', fr: 'Qui etait Mobutu Sese Seko ?', es: 'Quien fue Mobutu Sese Seko?' },
      answer: {
        en: 'Mobutu Sese Seko was the dictator who ruled the country (which he renamed Zaire) from 1965 to 1997. His regime was characterised by authoritarianism, corruption, and a personality cult.',
        fr: "Mobutu Sese Seko etait le dictateur qui a dirige le pays (qu'il a renomme Zaire) de 1965 a 1997. Son regime etait caracterise par l'autoritarisme, la corruption et un culte de la personnalite.",
        es: 'Mobutu Sese Seko fue el dictador que goberno el pais (al que renombro Zaire) de 1965 a 1997. Su regimen se caracterizo por el autoritarismo, la corrupcion y un culto a la personalidad.',
      },
    },
    {
      question: { en: 'Is Liberation Day a public holiday?', fr: 'La Journee de la Liberation est-elle un jour ferie ?', es: 'Es el Dia de la Liberacion un dia festivo?' },
      answer: {
        en: 'Yes, Liberation Day on May 17 is an official public holiday in the Democratic Republic of the Congo.',
        fr: 'Oui, la Journee de la Liberation le 17 mai est un jour ferie officiel en Republique democratique du Congo.',
        es: 'Si, el Dia de la Liberacion el 17 de mayo es un dia festivo oficial en la Republica Democratica del Congo.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '✊',
};

// ---------------------------------------------------------------------------
// Independence Day — June 30
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'cd_independence-day',
  countryCode: 'cd',
  slugs: { en: 'independence-day', fr: 'fete-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Fete de l'Independance", es: 'Dia de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 6,
  fixedDay: 30,

  descriptions: {
    en: "Independence Day on June 30 commemorates the Democratic Republic of the Congo's independence from Belgium in 1960. It is the country's most important national holiday, associated with Patrice Lumumba, the first prime minister and a towering figure of African liberation.",
    fr: "La Fete de l'Independance, le 30 juin, commemore l'independance de la Republique democratique du Congo vis-a-vis de la Belgique en 1960. C'est la fete nationale la plus importante du pays, associee a Patrice Lumumba, le premier Premier ministre et une figure majeure de la liberation africaine.",
    es: "El Dia de la Independencia, el 30 de junio, conmemora la independencia de la Republica Democratica del Congo de Belgica en 1960. Es la fiesta nacional mas importante del pais, asociada con Patrice Lumumba, el primer ministro y una figura imponente de la liberacion africana.",
  },

  history: {
    en: "The Democratic Republic of the Congo gained independence from Belgium on June 30, 1960, after decades of colonial rule that was among the most brutal in African history. Patrice Lumumba became the first prime minister and delivered a powerful independence speech criticising colonialism, while Joseph Kasavubu became the first president.\n\nLumumba's speech at the independence ceremony is one of the most famous in African history. While King Baudouin of Belgium spoke of colonialism as a 'civilising mission,' Lumumba responded with a passionate denunciation of the suffering endured under Belgian rule, declaring that independence was won through struggle.\n\nTragically, Lumumba was assassinated in January 1961, just months after independence, but his legacy as a champion of African sovereignty endures. Independence Day is celebrated with military parades, cultural performances, and reflections on the country's journey since 1960.",
    fr: "La Republique democratique du Congo a obtenu son independance de la Belgique le 30 juin 1960, apres des decennies de domination coloniale qui fut parmi les plus brutales de l'histoire africaine. Patrice Lumumba est devenu le premier Premier ministre et a prononce un puissant discours d'independance critiquant le colonialisme, tandis que Joseph Kasavubu est devenu le premier president.\n\nLe discours de Lumumba lors de la ceremonie d'independance est l'un des plus celebres de l'histoire africaine. Alors que le roi Baudouin de Belgique parlait du colonialisme comme d'une 'mission civilisatrice', Lumumba a repondu par une denonciation passionnee des souffrances endurees sous la domination belge, declarant que l'independance avait ete gagnee par la lutte.\n\nTragiquement, Lumumba a ete assassine en janvier 1961, quelques mois seulement apres l'independance, mais son heritage en tant que champion de la souverainete africaine perdure. La Fete de l'Independance est celebree par des defiles militaires, des spectacles culturels et des reflexions sur le parcours du pays depuis 1960.",
    es: "La Republica Democratica del Congo obtuvo su independencia de Belgica el 30 de junio de 1960, despues de decadas de dominio colonial que fue entre los mas brutales de la historia africana. Patrice Lumumba se convirtio en el primer ministro y pronuncio un poderoso discurso de independencia criticando el colonialismo, mientras Joseph Kasavubu se convirtio en el primer presidente.\n\nEl discurso de Lumumba en la ceremonia de independencia es uno de los mas famosos de la historia africana. Mientras el Rey Balduino de Belgica hablaba del colonialismo como una 'mision civilizadora', Lumumba respondio con una apasionada denuncia del sufrimiento soportado bajo el dominio belga, declarando que la independencia se gano a traves de la lucha.\n\nTragicamente, Lumumba fue asesinado en enero de 1961, solo meses despues de la independencia, pero su legado como campeon de la soberania africana perdura. El Dia de la Independencia se celebra con desfiles militares, espectaculos culturales y reflexiones sobre el recorrido del pais desde 1960.",
  },

  traditions: {
    en: [
      'Grand military parade in Kinshasa',
      'Presidential address to the nation',
      'Cultural performances featuring Congolese music and dance',
      'Displaying the national flag on homes and buildings',
      'Community celebrations with rumba music',
      'Reflecting on Patrice Lumumba\'s legacy and independence speech',
      'Fireworks and festivities across major cities',
    ],
    fr: [
      'Grand defile militaire a Kinshasa',
      'Discours presidentiel a la nation',
      'Spectacles culturels mettant en vedette la musique et la danse congolaises',
      'Afficher le drapeau national sur les maisons et les batiments',
      'Celebrations communautaires avec de la musique rumba',
      "Reflechir a l'heritage de Patrice Lumumba et a son discours d'independance",
      "Feux d'artifice et festivites dans les grandes villes",
    ],
    es: [
      'Gran desfile militar en Kinshasa',
      'Discurso presidencial a la nacion',
      'Espectaculos culturales con musica y danza congolenas',
      'Exhibir la bandera nacional en hogares y edificios',
      'Celebraciones comunitarias con musica rumba',
      'Reflexionar sobre el legado de Patrice Lumumba y su discurso de independencia',
      'Fuegos artificiales y festividades en las principales ciudades',
    ],
  },

  funFacts: {
    en: [
      'Patrice Lumumba\'s independence speech is considered one of the most powerful anti-colonial addresses in history.',
      'The DR Congo is the largest country in sub-Saharan Africa and the second-largest in all of Africa.',
      'Belgium\'s King Baudouin was visibly shocked by Lumumba\'s unscripted denunciation of colonialism at the independence ceremony.',
      'The Congo River, the country\'s namesake, is the deepest river in the world.',
      'The DR Congo has the third-largest population in Africa, after Nigeria and Ethiopia.',
    ],
    fr: [
      "Le discours d'independance de Patrice Lumumba est considere comme l'un des discours anticoloniaux les plus puissants de l'histoire.",
      "La RD Congo est le plus grand pays d'Afrique subsaharienne et le deuxieme plus grand de toute l'Afrique.",
      "Le roi Baudouin de Belgique a ete visiblement choque par la denonciation non prevue du colonialisme par Lumumba lors de la ceremonie d'independance.",
      'Le fleuve Congo, qui donne son nom au pays, est le fleuve le plus profond du monde.',
      "La RD Congo a la troisieme plus grande population d'Afrique, apres le Nigeria et l'Ethiopie.",
    ],
    es: [
      'El discurso de independencia de Patrice Lumumba es considerado uno de los discursos anticoloniales mas poderosos de la historia.',
      'La RD del Congo es el pais mas grande del Africa subsahariana y el segundo mas grande de toda Africa.',
      'El Rey Balduino de Belgica fue visiblemente sorprendido por la denuncia no prevista del colonialismo por Lumumba en la ceremonia de independencia.',
      'El rio Congo, que da nombre al pais, es el rio mas profundo del mundo.',
      'La RD del Congo tiene la tercera poblacion mas grande de Africa, despues de Nigeria y Etiopia.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan to attend the military parade in Kinshasa or regional celebrations',
      'Display the national flag at home',
      'Learn about Patrice Lumumba and the independence struggle',
      'Prepare traditional Congolese dishes for family gatherings',
      'Enjoy Congolese rumba music in the spirit of celebration',
    ],
    fr: [
      'Prevoir d\'assister au defile militaire a Kinshasa ou aux celebrations regionales',
      'Afficher le drapeau national a la maison',
      "S'informer sur Patrice Lumumba et la lutte pour l'independance",
      'Preparer des plats traditionnels congolais pour les reunions familiales',
      'Profiter de la musique rumba congolaise dans l\'esprit de la celebration',
    ],
    es: [
      'Planificar asistir al desfile militar en Kinshasa o a las celebraciones regionales',
      'Exhibir la bandera nacional en casa',
      'Aprender sobre Patrice Lumumba y la lucha por la independencia',
      'Preparar platos tradicionales congolenos para reuniones familiares',
      'Disfrutar de la musica rumba congolena en el espiritu de la celebracion',
    ],
  },

  relatedHolidays: ['cd_martyrs-day', 'cd_liberation-day'],

  seo: {
    en: {
      titleTemplate: 'DR Congo Independence Day {year} — Countdown & History',
      descriptionTemplate: 'When is DR Congo Independence Day {year}? Live countdown to June 30, Patrice Lumumba, independence history, and celebration guide.',
      keywords: ['DR Congo Independence Day', 'June 30 Congo', 'Patrice Lumumba', 'Congo independence', 'DR Congo holidays'],
    },
    fr: {
      titleTemplate: "Fete de l'Independance RD Congo {year} — Compte a rebours et histoire",
      descriptionTemplate: "Quand est la Fete de l'Independance de la RD Congo {year} ? Compte a rebours, Patrice Lumumba, histoire et guide de celebration.",
      keywords: ["Fete de l'Independance RD Congo", '30 juin Congo', 'Patrice Lumumba', 'independance Congo', 'jours feries RD Congo'],
    },
    es: {
      titleTemplate: 'Dia de la Independencia RD Congo {year} — Cuenta regresiva e historia',
      descriptionTemplate: 'Cuando es el Dia de la Independencia de la RD Congo {year}? Cuenta regresiva, Patrice Lumumba, historia y guia de celebracion.',
      keywords: ['Dia de la Independencia RD Congo', '30 de junio Congo', 'Patrice Lumumba', 'independencia Congo', 'dias festivos RD Congo'],
    },
  },

  faq: [
    {
      question: { en: 'When is DR Congo Independence Day {year}?', fr: "Quand est la Fete de l'Independance de la RD Congo {year} ?", es: 'Cuando es el Dia de la Independencia de la RD Congo {year}?' },
      answer: {
        en: 'DR Congo Independence Day {year} is on {date}. It is always June 30.',
        fr: "La Fete de l'Independance de la RD Congo {year} est le {date}. C'est toujours le 30 juin.",
        es: 'El Dia de la Independencia de la RD Congo {year} es el {date}. Siempre es el 30 de junio.',
      },
    },
    {
      question: { en: 'Who was Patrice Lumumba?', fr: 'Qui etait Patrice Lumumba ?', es: 'Quien fue Patrice Lumumba?' },
      answer: {
        en: "Patrice Lumumba was the first democratically elected prime minister of the independent Congo. He is celebrated for his powerful independence speech and his vision of a united, sovereign Africa. He was tragically assassinated in January 1961.",
        fr: "Patrice Lumumba a ete le premier Premier ministre democratiquement elu du Congo independant. Il est celebre pour son puissant discours d'independance et sa vision d'une Afrique unie et souveraine. Il a ete tragiquement assassine en janvier 1961.",
        es: 'Patrice Lumumba fue el primer ministro democraticamente elegido del Congo independiente. Es celebrado por su poderoso discurso de independencia y su vision de un Africa unida y soberana. Fue tragicamente asesinado en enero de 1961.',
      },
    },
    {
      question: { en: 'Why is June 30 Independence Day?', fr: "Pourquoi le 30 juin est-il la Fete de l'Independance ?", es: 'Por que el 30 de junio es el Dia de la Independencia?' },
      answer: {
        en: 'June 30, 1960 was the date Belgium officially granted independence to the Congo, following growing pressure from Congolese political movements and the international community.',
        fr: "Le 30 juin 1960 est la date a laquelle la Belgique a officiellement accorde l'independance au Congo, suite a la pression croissante des mouvements politiques congolais et de la communaute internationale.",
        es: 'El 30 de junio de 1960 fue la fecha en que Belgica concedio oficialmente la independencia al Congo, tras la creciente presion de los movimientos politicos congolenos y la comunidad internacional.',
      },
    },
    {
      question: { en: 'Is Independence Day the biggest holiday in DR Congo?', fr: "La Fete de l'Independance est-elle la plus grande fete en RD Congo ?", es: 'Es el Dia de la Independencia la fiesta mas grande en la RD del Congo?' },
      answer: {
        en: 'Yes, Independence Day on June 30 is the most significant national holiday in the DR Congo, featuring the grandest celebrations, military parades, and cultural performances.',
        fr: "Oui, la Fete de l'Independance le 30 juin est la fete nationale la plus importante en RD Congo, avec les celebrations les plus grandioses, les defiles militaires et les spectacles culturels.",
        es: 'Si, el Dia de la Independencia el 30 de junio es la fiesta nacional mas importante de la RD del Congo, con las celebraciones mas grandiosas, desfiles militares y espectaculos culturales.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '🇨🇩',
};

// ---------------------------------------------------------------------------
// Parents' Day — August 1
// ---------------------------------------------------------------------------

const parentsDay: HolidayData = {
  id: 'cd_parents-day',
  countryCode: 'cd',
  slugs: { en: 'parents-day', fr: 'journee-des-parents', es: 'dia-de-los-padres' },
  names: { en: "Parents' Day", fr: 'Journee des Parents', es: 'Dia de los Padres' },

  dateType: 'fixed',
  fixedMonth: 8,
  fixedDay: 1,

  descriptions: {
    en: "Parents' Day on August 1 is a public holiday in the Democratic Republic of the Congo that honours parents and elders. It celebrates the central role of parents in Congolese society and the importance of family bonds.",
    fr: "La Journee des Parents, le 1er aout, est un jour ferie en Republique democratique du Congo qui honore les parents et les aines. Elle celebre le role central des parents dans la societe congolaise et l'importance des liens familiaux.",
    es: "El Dia de los Padres, el 1 de agosto, es un dia festivo en la Republica Democratica del Congo que honra a los padres y a los mayores. Celebra el papel central de los padres en la sociedad congolena y la importancia de los lazos familiares.",
  },

  history: {
    en: "Parents' Day was established as a public holiday in the DR Congo to honour the foundational role of parents and elders in Congolese society. In Congolese culture, respect for parents and elders is a core value, deeply embedded in traditional customs across the country's many ethnic groups.\n\nThe holiday recognises that parents are the pillars of family and community life. In a country where extended family networks are essential to social support, Parents' Day celebrates the sacrifices and guidance that parents provide.\n\nToday, the holiday is marked by family gatherings, gift-giving, and expressions of gratitude. Many Congolese use the day to visit their parents, share meals, and honour both living parents and the memory of those who have passed.",
    fr: "La Journee des Parents a ete etablie comme jour ferie en RD Congo pour honorer le role fondamental des parents et des aines dans la societe congolaise. Dans la culture congolaise, le respect des parents et des aines est une valeur fondamentale, profondement ancree dans les coutumes traditionnelles des nombreux groupes ethniques du pays.\n\nCe jour ferie reconnait que les parents sont les piliers de la vie familiale et communautaire. Dans un pays ou les reseaux familiaux elargis sont essentiels au soutien social, la Journee des Parents celebre les sacrifices et les conseils que les parents fournissent.\n\nAujourd'hui, cette fete est marquee par des reunions familiales, des echanges de cadeaux et des expressions de gratitude. De nombreux Congolais profitent de cette journee pour rendre visite a leurs parents, partager des repas et honorer les parents vivants et la memoire de ceux qui sont decedes.",
    es: "El Dia de los Padres fue establecido como dia festivo en la RD del Congo para honrar el papel fundamental de los padres y los mayores en la sociedad congolena. En la cultura congolena, el respeto por los padres y los mayores es un valor fundamental, profundamente arraigado en las costumbres tradicionales de los muchos grupos etnicos del pais.\n\nLa festividad reconoce que los padres son los pilares de la vida familiar y comunitaria. En un pais donde las redes familiares extensas son esenciales para el apoyo social, el Dia de los Padres celebra los sacrificios y la orientacion que los padres proporcionan.\n\nHoy, la festividad se marca con reuniones familiares, intercambio de regalos y expresiones de gratitud. Muchos congolenos aprovechan el dia para visitar a sus padres, compartir comidas y honrar tanto a los padres vivos como la memoria de los que han fallecido.",
  },

  traditions: {
    en: [
      'Visiting parents and elders to express gratitude and respect',
      'Preparing special meals in honour of parents',
      'Giving gifts to parents and grandparents',
      'Family gatherings bringing together extended family',
      'Sharing stories and memories of parents who have passed',
      'Church services honouring the role of parents',
    ],
    fr: [
      'Rendre visite aux parents et aux aines pour exprimer sa gratitude et son respect',
      "Preparer des repas speciaux en l'honneur des parents",
      'Offrir des cadeaux aux parents et grands-parents',
      'Reunions familiales rassemblant la famille elargie',
      'Partager des histoires et des souvenirs des parents decedes',
      'Services religieux honorant le role des parents',
    ],
    es: [
      'Visitar a los padres y mayores para expresar gratitud y respeto',
      'Preparar comidas especiales en honor a los padres',
      'Dar regalos a los padres y abuelos',
      'Reuniones familiares que reunen a la familia extendida',
      'Compartir historias y recuerdos de los padres que han fallecido',
      'Servicios religiosos honrando el papel de los padres',
    ],
  },

  funFacts: {
    en: [
      'The DR Congo is one of few countries in the world with a dedicated public holiday for parents.',
      'In Congolese culture, respect for elders is so important that younger people typically kneel or bow when greeting their parents.',
      'The concept of family in the DR Congo extends well beyond the nuclear family to include aunts, uncles, and cousins as immediate family.',
      'Parents\' Day is one of the most family-oriented holidays in the Congolese calendar.',
      'Many Congolese proverbs emphasise the importance of parents: "The hand that rocks the cradle rules the world" has a Congolese equivalent in many local languages.',
    ],
    fr: [
      "La RD Congo est l'un des rares pays au monde avec un jour ferie dedie aux parents.",
      "Dans la culture congolaise, le respect des aines est si important que les plus jeunes s'agenouillent ou s'inclinent typiquement en saluant leurs parents.",
      "Le concept de famille en RD Congo va bien au-dela de la famille nucleaire pour inclure les tantes, oncles et cousins comme famille immediate.",
      "La Journee des Parents est l'une des fetes les plus orientees vers la famille du calendrier congolais.",
      "De nombreux proverbes congolais soulignent l'importance des parents, avec des equivalents dans de nombreuses langues locales.",
    ],
    es: [
      'La RD del Congo es uno de los pocos paises del mundo con un dia festivo dedicado a los padres.',
      'En la cultura congolena, el respeto por los mayores es tan importante que los jovenes tipicamente se arrodillan o se inclinan al saludar a sus padres.',
      'El concepto de familia en la RD del Congo se extiende mucho mas alla de la familia nuclear para incluir a tias, tios y primos como familia inmediata.',
      'El Dia de los Padres es una de las festividades mas orientadas a la familia del calendario congoleno.',
      'Muchos proverbios congolenos enfatizan la importancia de los padres, con equivalentes en muchas lenguas locales.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan a visit to your parents or elders',
      'Prepare a special meal or gift for your parents',
      'Organise a family gathering with extended family',
      'Call or write to parents if you cannot visit in person',
      'Take time to share family stories and honour parents\' memories',
    ],
    fr: [
      'Planifier une visite a vos parents ou aines',
      'Preparer un repas special ou un cadeau pour vos parents',
      'Organiser une reunion familiale avec la famille elargie',
      'Appeler ou ecrire a vos parents si vous ne pouvez pas les visiter en personne',
      'Prendre le temps de partager des histoires familiales et honorer la memoire des parents',
    ],
    es: [
      'Planificar una visita a sus padres o mayores',
      'Preparar una comida especial o un regalo para sus padres',
      'Organizar una reunion familiar con la familia extendida',
      'Llamar o escribir a sus padres si no puede visitarlos en persona',
      'Tomarse el tiempo para compartir historias familiares y honrar la memoria de los padres',
    ],
  },

  relatedHolidays: ['cd_independence-day', 'cd_christmas'],

  seo: {
    en: {
      titleTemplate: "Parents' Day {year} DR Congo — Countdown & Guide",
      descriptionTemplate: "When is Parents' Day {year} in DR Congo? Live countdown to August 1, traditions, and celebration guide.",
      keywords: ["Parents' Day DR Congo", 'August 1 Congo', 'Journee des Parents Congo', 'Congo family holiday', 'DR Congo holidays'],
    },
    fr: {
      titleTemplate: 'Journee des Parents {year} RD Congo — Compte a rebours et guide',
      descriptionTemplate: 'Quand est la Journee des Parents {year} en RD Congo ? Compte a rebours, traditions et guide de celebration.',
      keywords: ['Journee des Parents RD Congo', '1er aout Congo', 'fete des parents Congo', 'famille Congo', 'jours feries RD Congo'],
    },
    es: {
      titleTemplate: 'Dia de los Padres {year} RD Congo — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Dia de los Padres {year} en RD Congo? Cuenta regresiva, tradiciones y guia de celebracion.',
      keywords: ['Dia de los Padres RD Congo', '1 de agosto Congo', 'fiesta de los padres Congo', 'familia Congo', 'dias festivos RD Congo'],
    },
  },

  faq: [
    {
      question: { en: "When is Parents' Day {year} in DR Congo?", fr: 'Quand est la Journee des Parents {year} en RD Congo ?', es: 'Cuando es el Dia de los Padres {year} en RD Congo?' },
      answer: {
        en: "Parents' Day {year} in DR Congo is on {date}. It is always August 1 and is a national public holiday.",
        fr: "La Journee des Parents {year} en RD Congo est le {date}. C'est toujours le 1er aout et c'est un jour ferie national.",
        es: 'El Dia de los Padres {year} en RD Congo es el {date}. Siempre es el 1 de agosto y es un dia festivo nacional.',
      },
    },
    {
      question: { en: "Why does DR Congo have a Parents' Day?", fr: 'Pourquoi la RD Congo a-t-elle une Journee des Parents ?', es: 'Por que la RD del Congo tiene un Dia de los Padres?' },
      answer: {
        en: "Parents' Day reflects the central importance of parents and elders in Congolese culture. Respect for parents is a core value, and the holiday provides a national occasion to honour their role in family and society.",
        fr: "La Journee des Parents reflete l'importance centrale des parents et des aines dans la culture congolaise. Le respect des parents est une valeur fondamentale, et ce jour ferie offre une occasion nationale d'honorer leur role dans la famille et la societe.",
        es: 'El Dia de los Padres refleja la importancia central de los padres y los mayores en la cultura congolena. El respeto por los padres es un valor fundamental, y la festividad proporciona una ocasion nacional para honrar su papel en la familia y la sociedad.',
      },
    },
    {
      question: { en: "Is Parents' Day a public holiday?", fr: 'La Journee des Parents est-elle un jour ferie ?', es: 'Es el Dia de los Padres un dia festivo?' },
      answer: {
        en: "Yes, Parents' Day on August 1 is an official public holiday in the Democratic Republic of the Congo.",
        fr: "Oui, la Journee des Parents le 1er aout est un jour ferie officiel en Republique democratique du Congo.",
        es: 'Si, el Dia de los Padres el 1 de agosto es un dia festivo oficial en la Republica Democratica del Congo.',
      },
    },
    {
      question: { en: "How is Parents' Day celebrated?", fr: 'Comment est celebree la Journee des Parents ?', es: 'Como se celebra el Dia de los Padres?' },
      answer: {
        en: "Congolese celebrate by visiting their parents and elders, preparing special meals, giving gifts, and organising family gatherings. Church services honouring parents are also common.",
        fr: "Les Congolais celebrent en rendant visite a leurs parents et aines, en preparant des repas speciaux, en offrant des cadeaux et en organisant des reunions familiales. Les services religieux honorant les parents sont egalement courants.",
        es: 'Los congolenos celebran visitando a sus padres y mayores, preparando comidas especiales, dando regalos y organizando reuniones familiares. Los servicios religiosos en honor a los padres tambien son comunes.',
      },
    },
  ],

  colorTheme: 'summer',
  icon: '👨‍👩‍👧‍👦',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'cd_christmas',
  countryCode: 'cd',
  slugs: { en: 'christmas', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noel', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: "Christmas Day on December 25 is one of the most celebrated holidays in the Democratic Republic of the Congo. Known as Noel, it is embraced with great fervour by the predominantly Christian population, featuring church services, family feasts, and vibrant music.",
    fr: "Le jour de Noel, le 25 decembre, est l'une des fetes les plus celebrees en Republique democratique du Congo. Connu sous le nom de Noel, il est accueilli avec grande ferveur par la population a majorite chretienne, avec des services religieux, des festins familiaux et une musique vibrante.",
    es: "El dia de Navidad, el 25 de diciembre, es una de las fiestas mas celebradas en la Republica Democratica del Congo. Conocido como Noel, es acogido con gran fervor por la poblacion predominantemente cristiana, con servicios religiosos, banquetes familiares y musica vibrante.",
  },

  history: {
    en: "Christianity was introduced to the Congo by European missionaries in the 15th century and expanded significantly during the colonial period. Today, the DR Congo is one of the most Christian countries in Africa, with over 95% of the population identifying as Christian, predominantly Catholic.\n\nChristmas in the Congo is deeply intertwined with Congolese culture and music. The tradition of 'messe de minuit' (midnight mass) draws enormous congregations, and Christmas carols are often sung in local languages including Lingala, Swahili, Tshiluba, and Kikongo.\n\nCongolese rumba and gospel music provide a distinctive soundtrack for Christmas celebrations, making Congolese Christmas one of the most musically vibrant celebrations on the continent.",
    fr: "Le christianisme a ete introduit au Congo par les missionnaires europeens au XVe siecle et s'est considerablement developpe pendant la periode coloniale. Aujourd'hui, la RD Congo est l'un des pays les plus chretiens d'Afrique, avec plus de 95% de la population se declarant chretienne, principalement catholique.\n\nNoel au Congo est profondement lie a la culture et a la musique congolaises. La tradition de la messe de minuit attire d'enormes congregations, et les chants de Noel sont souvent chantes dans les langues locales, notamment le lingala, le swahili, le tshiluba et le kikongo.\n\nLa rumba congolaise et la musique gospel fournissent une bande sonore distinctive pour les celebrations de Noel, faisant du Noel congolais l'une des celebrations les plus musicalement vibrantes du continent.",
    es: "El cristianismo fue introducido en el Congo por misioneros europeos en el siglo XV y se expandio significativamente durante el periodo colonial. Hoy, la RD del Congo es uno de los paises mas cristianos de Africa, con mas del 95% de la poblacion identificandose como cristiana, predominantemente catolica.\n\nLa Navidad en el Congo esta profundamente entrelazada con la cultura y la musica congolenas. La tradicion de la 'messe de minuit' (misa de medianoche) atrae enormes congregaciones, y los villancicos se cantan a menudo en idiomas locales incluyendo lingala, swahili, tshiluba y kikongo.\n\nLa rumba congolena y la musica gospel proporcionan una banda sonora distintiva para las celebraciones navidenas, haciendo de la Navidad congolena una de las celebraciones mas musicalmente vibrantes del continente.",
  },

  traditions: {
    en: [
      'Attending midnight mass (messe de minuit) at churches across the country',
      'Singing Christmas carols in Lingala, Swahili, and other local languages',
      'Preparing festive meals including pondu, fufu, and grilled goat',
      'Dancing to Congolese rumba and gospel music',
      'Wearing new and colourful wax-print outfits',
      'Children performing in church nativity plays and choirs',
    ],
    fr: [
      'Assister a la messe de minuit dans les eglises a travers le pays',
      'Chanter des chants de Noel en lingala, swahili et autres langues locales',
      'Preparer des repas festifs incluant du pondu, du fufu et de la chevre grillee',
      'Danser sur de la rumba congolaise et de la musique gospel',
      'Porter de nouvelles tenues colorees en pagne',
      "Les enfants jouant dans des creches vivantes et des chorales a l'eglise",
    ],
    es: [
      'Asistir a la misa de medianoche en iglesias de todo el pais',
      'Cantar villancicos en lingala, swahili y otros idiomas locales',
      'Preparar comidas festivas incluyendo pondu, fufu y cabra a la parrilla',
      'Bailar rumba congolena y musica gospel',
      'Vestir atuendos nuevos y coloridos de tela wax',
      'Los ninos actuando en obras de Navidad y coros en la iglesia',
    ],
  },

  funFacts: {
    en: [
      'The DR Congo has over 95% Christian population, making Christmas one of the most universally celebrated holidays.',
      'Christmas carols in the DR Congo are sung in at least four major languages: Lingala, Swahili, Tshiluba, and Kikongo.',
      'Congolese Christmas music blends traditional gospel with rumba rhythms, creating a unique festive sound.',
      'Midnight mass in Kinshasa can draw congregations of thousands at the major cathedrals.',
      'Grilled goat (ntoaba) is a popular Christmas dish alongside the everyday staples of pondu and fufu.',
    ],
    fr: [
      "La RD Congo a plus de 95% de population chretienne, faisant de Noel l'une des fetes les plus universellement celebrees.",
      'Les chants de Noel en RD Congo sont chantes dans au moins quatre langues majeures : le lingala, le swahili, le tshiluba et le kikongo.',
      'La musique de Noel congolaise melange le gospel traditionnel avec des rythmes de rumba, creant un son festif unique.',
      'La messe de minuit a Kinshasa peut attirer des congregations de milliers de personnes dans les grandes cathedrales.',
      'La chevre grillee (ntoaba) est un plat de Noel populaire aux cotes des aliments quotidiens que sont le pondu et le fufu.',
    ],
    es: [
      'La RD del Congo tiene mas del 95% de poblacion cristiana, haciendo de la Navidad una de las fiestas mas universalmente celebradas.',
      'Los villancicos en la RD del Congo se cantan en al menos cuatro idiomas principales: lingala, swahili, tshiluba y kikongo.',
      'La musica navidena congolena mezcla gospel tradicional con ritmos de rumba, creando un sonido festivo unico.',
      'La misa de medianoche en Kinshasa puede atraer congregaciones de miles de personas en las principales catedrales.',
      'La cabra a la parrilla (ntoaba) es un plato navideno popular junto con los alimentos cotidianos de pondu y fufu.',
    ],
  },

  planningChecklist: {
    en: [
      'Check midnight mass schedules at your local church',
      'Purchase new clothes or wax-print fabric for Christmas Day',
      'Prepare ingredients for festive meals',
      'Buy gifts for children and family members',
      'Plan family gatherings and organise transport',
    ],
    fr: [
      'Verifier les horaires de la messe de minuit dans votre eglise locale',
      'Acheter de nouveaux vetements ou du pagne pour le jour de Noel',
      'Preparer les ingredients pour les repas festifs',
      'Acheter des cadeaux pour les enfants et les membres de la famille',
      'Planifier les reunions familiales et organiser le transport',
    ],
    es: [
      'Consultar los horarios de la misa de medianoche en su iglesia local',
      'Comprar ropa nueva o tela wax para el dia de Navidad',
      'Preparar ingredientes para las comidas festivas',
      'Comprar regalos para los ninos y miembros de la familia',
      'Planificar reuniones familiares y organizar transporte',
    ],
  },

  relatedHolidays: ['cd_new-years-day', 'cd_parents-day'],

  seo: {
    en: {
      titleTemplate: 'Christmas Day {year} DR Congo — Countdown & Guide',
      descriptionTemplate: 'When is Christmas {year} in DR Congo? Live countdown to December 25, Noel traditions, and celebration guide.',
      keywords: ['Christmas DR Congo', 'Noel Congo', 'Congo Christmas', 'December 25 Congo', 'DR Congo holidays'],
    },
    fr: {
      titleTemplate: 'Noel {year} RD Congo — Compte a rebours et guide',
      descriptionTemplate: 'Quand est Noel {year} en RD Congo ? Compte a rebours, traditions et guide de celebration.',
      keywords: ['Noel RD Congo', 'fete de Noel Congo', '25 decembre Congo', 'Noel Kinshasa', 'jours feries RD Congo'],
    },
    es: {
      titleTemplate: 'Navidad {year} RD Congo — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es Navidad {year} en RD Congo? Cuenta regresiva, tradiciones y guia de celebracion.',
      keywords: ['Navidad RD Congo', 'Noel Congo', '25 de diciembre Congo', 'Navidad Kinshasa', 'dias festivos RD Congo'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in DR Congo?', fr: 'Quand est Noel {year} en RD Congo ?', es: 'Cuando es Navidad {year} en RD Congo?' },
      answer: {
        en: 'Christmas {year} in DR Congo is on {date}. It is always December 25 and is a national public holiday.',
        fr: "Noel {year} en RD Congo est le {date}. C'est toujours le 25 decembre et c'est un jour ferie national.",
        es: 'Navidad {year} en RD Congo es el {date}. Siempre es el 25 de diciembre y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'Is the DR Congo a Christian country?', fr: 'La RD Congo est-elle un pays chretien ?', es: 'Es la RD del Congo un pais cristiano?' },
      answer: {
        en: 'Yes, over 95% of the DR Congo population identifies as Christian, predominantly Catholic. This makes Christmas one of the most important and widely celebrated holidays.',
        fr: "Oui, plus de 95% de la population de la RD Congo se declare chretienne, principalement catholique. Cela fait de Noel l'une des fetes les plus importantes et les plus largement celebrees.",
        es: 'Si, mas del 95% de la poblacion de la RD del Congo se identifica como cristiana, predominantemente catolica. Esto hace de la Navidad una de las festividades mas importantes y ampliamente celebradas.',
      },
    },
    {
      question: { en: 'What languages are Christmas carols sung in?', fr: 'En quelles langues sont chantes les chants de Noel ?', es: 'En que idiomas se cantan los villancicos?' },
      answer: {
        en: 'Christmas carols in the DR Congo are sung in multiple languages, including French, Lingala, Swahili, Tshiluba, and Kikongo — the four national languages alongside French.',
        fr: "Les chants de Noel en RD Congo sont chantes dans plusieurs langues, dont le francais, le lingala, le swahili, le tshiluba et le kikongo — les quatre langues nationales aux cotes du francais.",
        es: 'Los villancicos en la RD del Congo se cantan en multiples idiomas, incluyendo frances, lingala, swahili, tshiluba y kikongo — los cuatro idiomas nacionales junto con el frances.',
      },
    },
    {
      question: { en: 'What is a typical Congolese Christmas meal?', fr: 'Quel est un repas de Noel congolais typique ?', es: 'Cual es una comida navidena tipica congolena?' },
      answer: {
        en: 'A typical Congolese Christmas meal includes pondu (cassava leaf stew), fufu (starchy staple), grilled goat (ntoaba), grilled fish, and rice. Special drinks and desserts are also prepared.',
        fr: "Un repas de Noel congolais typique comprend du pondu (ragout de feuilles de manioc), du fufu (feculent de base), de la chevre grillee (ntoaba), du poisson grille et du riz. Des boissons speciales et des desserts sont egalement prepares.",
        es: 'Una comida navidena tipica congolena incluye pondu (estofado de hojas de yuca), fufu (alimento basico almidonado), cabra a la parrilla (ntoaba), pescado a la parrilla y arroz. Tambien se preparan bebidas especiales y postres.',
      },
    },
  ],

  colorTheme: 'christmas',
  icon: '🎄',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const cdHolidays: HolidayData[] = [
  newYearsDay,
  martyrsDay,
  liberationDay,
  independenceDay,
  parentsDay,
  christmas,
];

export default cdHolidays;
