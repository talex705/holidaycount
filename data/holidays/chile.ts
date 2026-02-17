/**
 * Chile holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getGoodFriday } from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'cl_new-years-day',
  countryCode: 'cl',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'ano-nuevo' },
  names: { en: "New Year's Day", fr: 'Jour de l\'An', es: 'Ano Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 is a national holiday in Chile. Chileans welcome the new year with spectacular fireworks, particularly in Valparaiso where the coastal city hosts one of the world's most famous New Year's Eve fireworks displays, drawing over a million spectators.",
    fr: "Le Jour de l'An, le 1er janvier, est un jour ferie national au Chili. Les Chiliens accueillent la nouvelle annee avec des feux d'artifice spectaculaires, en particulier a Valparaiso qui accueille l'un des spectacles pyrotechniques les plus celebres du monde.",
    es: "El Ano Nuevo, el 1 de enero, es un feriado nacional en Chile. Los chilenos reciben el nuevo ano con espectaculares fuegos artificiales, particularmente en Valparaiso donde la ciudad costera alberga uno de los espectaculos de fuegos artificiales de fin de ano mas famosos del mundo, atrayendo a mas de un millon de espectadores.",
  },

  history: {
    en: "New Year's celebrations in Chile center on the iconic Valparaiso fireworks display, which has been an annual tradition since the 1990s and has grown into one of the world's top New Year's Eve events. The fireworks are launched from multiple points along the harbor hills and coast, creating a 360-degree spectacle visible from the entire bay.\n\nChilean New Year's traditions include eating lentils at midnight for prosperity, wearing yellow underwear for luck, and walking around the block with a suitcase for travel. In the Mapuche tradition, the We Tripantu (Mapuche New Year) is celebrated during the winter solstice in June, not January 1.\n\nAs Chile is in the Southern Hemisphere, New Year's falls in the middle of summer, and many families combine the celebration with beach vacations along the Chilean coast.",
    fr: "Les celebrations du Nouvel An au Chili sont centrees sur les feux d'artifice emblematiques de Valparaiso, tradition annuelle depuis les annees 1990 et devenue l'un des plus grands evenements du Nouvel An au monde.\n\nLes traditions chiliennes incluent manger des lentilles a minuit pour la prosperite, porter des sous-vetements jaunes et faire le tour du pate de maisons avec une valise. Comme le Chili est dans l'hemisphere sud, le Nouvel An tombe en plein ete.",
    es: "Las celebraciones de Ano Nuevo en Chile se centran en el iconico espectaculo de fuegos artificiales de Valparaiso, que ha sido una tradicion anual desde los anos 1990 y se ha convertido en uno de los principales eventos de fin de ano del mundo. Los fuegos artificiales se lanzan desde multiples puntos a lo largo de los cerros y la costa del puerto, creando un espectaculo de 360 grados visible desde toda la bahia.\n\nLas tradiciones chilenas de Ano Nuevo incluyen comer lentejas a medianoche para la prosperidad, usar ropa interior amarilla para la suerte y dar la vuelta a la manzana con una maleta para viajar. En la tradicion mapuche, el We Tripantu (Ano Nuevo Mapuche) se celebra durante el solsticio de invierno en junio, no el 1 de enero.\n\nComo Chile esta en el hemisferio sur, el Ano Nuevo cae en pleno verano, y muchas familias combinan la celebracion con vacaciones en la playa a lo largo de la costa chilena.",
  },

  traditions: {
    en: [
      'Watching the massive Valparaiso fireworks display from the harbor hills',
      'Eating lentils at midnight for prosperity in the new year',
      'Wearing yellow underwear for good luck',
      'Walking around the block with a suitcase to ensure travel',
      'Gathering with family for a late-night celebration on New Year\'s Eve',
      'Heading to the beach for summer celebrations on New Year\'s Day',
    ],
    fr: [
      'Regarder les feux d\'artifice de Valparaiso depuis les collines du port',
      'Manger des lentilles a minuit pour la prosperite',
      'Porter des sous-vetements jaunes pour la chance',
      'Faire le tour du pate de maisons avec une valise pour assurer les voyages',
      'Se reunir en famille pour une celebration nocturne du Nouvel An',
      'Aller a la plage pour les celebrations d\'ete le Jour de l\'An',
    ],
    es: [
      'Ver el espectaculo masivo de fuegos artificiales de Valparaiso desde los cerros del puerto',
      'Comer lentejas a medianoche para la prosperidad en el nuevo ano',
      'Usar ropa interior amarilla para la buena suerte',
      'Dar la vuelta a la manzana con una maleta para asegurar viajes',
      'Reunirse en familia para una celebracion nocturna de Nochevieja',
      'Ir a la playa para las celebraciones de verano el Dia de Ano Nuevo',
    ],
  },

  funFacts: {
    en: [
      'Valparaiso\'s New Year\'s fireworks are launched from over 20 points along the coast, creating a unique 360-degree display.',
      'Over 1 million people travel to Valparaiso every year to watch the fireworks, tripling the city\'s population for one night.',
      'The Mapuche people celebrate their own New Year (We Tripantu) during the June winter solstice, which is now also an official Chilean holiday.',
      'Chilean New Year falls in summer, with temperatures in Santiago reaching 30C+ (86F+).',
      'Many Chileans combine New Year\'s with summer vacations, heading to coastal cities like Vina del Mar and La Serena.',
    ],
    fr: [
      'Les feux d\'artifice de Valparaiso sont lances depuis plus de 20 points le long de la cote, creant un spectacle unique a 360 degres.',
      'Plus d\'un million de personnes se rendent a Valparaiso chaque annee pour les feux d\'artifice.',
      'Le peuple Mapuche celebre son propre Nouvel An (We Tripantu) pendant le solstice d\'hiver en juin.',
      'Le Nouvel An chilien tombe en ete, avec des temperatures a Santiago depassant 30C.',
      'De nombreux Chiliens combinent le Nouvel An avec des vacances d\'ete sur la cote.',
    ],
    es: [
      'Los fuegos artificiales de Valparaiso se lanzan desde mas de 20 puntos a lo largo de la costa, creando un espectaculo unico de 360 grados.',
      'Mas de 1 millon de personas viajan a Valparaiso cada ano para ver los fuegos artificiales, triplicando la poblacion de la ciudad por una noche.',
      'El pueblo Mapuche celebra su propio Ano Nuevo (We Tripantu) durante el solsticio de invierno en junio, que ahora tambien es feriado oficial en Chile.',
      'El Ano Nuevo chileno cae en verano, con temperaturas en Santiago que superan los 30C.',
      'Muchos chilenos combinan el Ano Nuevo con vacaciones de verano, yendo a ciudades costeras como Vina del Mar y La Serena.',
    ],
  },

  planningChecklist: {
    en: [
      'Book accommodation in Valparaiso months ahead if planning to see the fireworks',
      'Arrange transportation early — roads to the coast are extremely congested',
      'Stock up on lentils and yellow underwear for the traditions',
      'Plan for summer weather — sunscreen, hats, and light clothing',
      'Reserve a restaurant for New Year\'s Eve dinner well in advance',
    ],
    fr: [
      'Reserver un hebergement a Valparaiso des mois a l\'avance pour les feux d\'artifice',
      'Organiser le transport tot — les routes vers la cote sont extremement embouteillees',
      'Se procurer des lentilles et des sous-vetements jaunes pour les traditions',
      'Planifier pour le temps d\'ete — creme solaire, chapeaux et vetements legers',
      'Reserver un restaurant pour le diner du Nouvel An bien a l\'avance',
    ],
    es: [
      'Reservar alojamiento en Valparaiso con meses de anticipacion si planean ver los fuegos artificiales',
      'Organizar el transporte temprano — las rutas a la costa estan extremadamente congestionadas',
      'Conseguir lentejas y ropa interior amarilla para las tradiciones',
      'Planificar para el clima de verano — protector solar, sombreros y ropa liviana',
      'Reservar restaurante para la cena de Nochevieja con mucha anticipacion',
    ],
  },

  relatedHolidays: ['cl_christmas', 'cl_fiestas-patrias'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Chile — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in Chile? Live countdown, Valparaiso fireworks, traditions, and celebration guide.",
      keywords: ["New Year Chile", 'Ano Nuevo Chile', 'Valparaiso fireworks', 'Chile New Year', 'Chile holidays'],
    },
    fr: {
      titleTemplate: 'Jour de l\'An {year} Chili — Compte a rebours et guide',
      descriptionTemplate: 'Quand est le Jour de l\'An {year} au Chili ? Compte a rebours, feux d\'artifice de Valparaiso et guide.',
      keywords: ['Nouvel An Chili', 'Ano Nuevo Chili', 'feux artifice Valparaiso', 'fetes Chili', 'jours feries Chili'],
    },
    es: {
      titleTemplate: 'Ano Nuevo {year} Chile — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Ano Nuevo {year} en Chile? Cuenta regresiva, fuegos artificiales de Valparaiso y guia.',
      keywords: ['Ano Nuevo Chile', 'fuegos artificiales Valparaiso', 'tradiciones Ano Nuevo Chile', 'feriados Chile', 'celebraciones Chile'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in Chile?", fr: 'Quand est le Jour de l\'An {year} au Chili ?', es: 'Cuando es el Ano Nuevo {year} en Chile?' },
      answer: {
        en: "New Year's Day {year} in Chile is on {date}. It is always January 1 and is a national public holiday.",
        fr: 'Le Jour de l\'An {year} au Chili est le {date}. C\'est toujours le 1er janvier et c\'est un jour ferie national.',
        es: 'El Ano Nuevo {year} en Chile es el {date}. Siempre es el 1 de enero y es feriado nacional.',
      },
    },
    {
      question: { en: 'Where are the best New Year fireworks in Chile?', fr: 'Ou sont les meilleurs feux d\'artifice du Nouvel An au Chili ?', es: 'Donde son los mejores fuegos artificiales de Ano Nuevo en Chile?' },
      answer: {
        en: 'Valparaiso hosts Chile\'s most famous New Year\'s fireworks, launched from over 20 points along the coast. Over 1 million people attend. The hillside amphitheater of the port city provides a unique 360-degree viewing experience.',
        fr: 'Valparaiso accueille les feux d\'artifice du Nouvel An les plus celebres du Chili, lances depuis plus de 20 points le long de la cote.',
        es: 'Valparaiso alberga los fuegos artificiales de Ano Nuevo mas famosos de Chile, lanzados desde mas de 20 puntos a lo largo de la costa. Mas de 1 millon de personas asisten. El anfiteatro natural de los cerros del puerto ofrece una experiencia de vista unica de 360 grados.',
      },
    },
    {
      question: { en: 'What is We Tripantu?', fr: 'Qu\'est-ce que le We Tripantu ?', es: 'Que es el We Tripantu?' },
      answer: {
        en: 'We Tripantu is the Mapuche New Year, celebrated during the winter solstice (around June 24) in the Southern Hemisphere. It marks the return of the sun and the beginning of a new cycle. It was recognized as an official Chilean holiday in 2021.',
        fr: 'Le We Tripantu est le Nouvel An Mapuche, celebre pendant le solstice d\'hiver (vers le 24 juin). Il a ete reconnu comme jour ferie officiel au Chili en 2021.',
        es: 'El We Tripantu es el Ano Nuevo Mapuche, celebrado durante el solsticio de invierno (alrededor del 24 de junio) en el hemisferio sur. Marca el retorno del sol y el comienzo de un nuevo ciclo. Fue reconocido como feriado oficial chileno en 2021.',
      },
    },
    {
      question: { en: 'What is the weather like for New Year in Chile?', fr: 'Quel temps fait-il pour le Nouvel An au Chili ?', es: 'Como es el clima en Ano Nuevo en Chile?' },
      answer: {
        en: "New Year's in Chile falls in the middle of summer. Temperatures in Santiago reach 30-35C (86-95F), and coastal cities are warm and sunny, making it a popular time for beach vacations.",
        fr: 'Le Nouvel An au Chili tombe en plein ete. Les temperatures a Santiago atteignent 30-35C et les villes cotieres sont chaudes et ensoleilees.',
        es: 'El Ano Nuevo en Chile cae en pleno verano. Las temperaturas en Santiago alcanzan los 30-35C, y las ciudades costeras son calidas y soleadas, lo que lo convierte en un periodo popular para vacaciones en la playa.',
      },
    },
  ],

  colorTheme: 'new-year',
  icon: '\ud83c\udf86',
};

// ---------------------------------------------------------------------------
// Good Friday — Friday before Easter
// ---------------------------------------------------------------------------

const goodFriday: HolidayData = {
  id: 'cl_good-friday',
  countryCode: 'cl',
  slugs: { en: 'good-friday', fr: 'vendredi-saint', es: 'viernes-santo' },
  names: { en: 'Good Friday', fr: 'Vendredi Saint', es: 'Viernes Santo' },

  dateType: 'calculated',
  calculateDate: getGoodFriday,

  descriptions: {
    en: "Good Friday (Viernes Santo) is a national holiday in Chile commemorating the crucifixion of Jesus Christ. It is one of the most solemn days in this predominantly Catholic country, observed with church services, processions, and a tradition of fasting and abstaining from meat.",
    fr: "Le Vendredi Saint (Viernes Santo) est un jour ferie national au Chili commemorant la crucifixion de Jesus-Christ. C'est l'un des jours les plus solennels dans ce pays a predominance catholique, observe avec des services religieux, des processions et une tradition de jeune.",
    es: "El Viernes Santo es un feriado nacional en Chile que conmemora la crucifixion de Jesucristo. Es uno de los dias mas solemnes en este pais predominantemente catolico, observado con servicios religiosos, procesiones y una tradicion de ayuno y abstinencia de carne.",
  },

  history: {
    en: "Good Friday has been observed in Chile since the arrival of Spanish missionaries in the 16th century. Chile's deeply Catholic culture means the day is treated with great reverence. Historically, entertainment venues were required to close, and alcohol sales were restricted.\n\nThe most notable Good Friday traditions take place in fishing communities along the Chilean coast, where fishermen carry a crucifix or statue of Christ through the streets and into the sea, blessing the waters and praying for safe fishing. In Santiago, large processions wind through the streets of the historic center.\n\nIn recent decades, while Chile has become more secular, Good Friday remains widely observed. The long Easter weekend (from Good Friday to Easter Sunday) is one of the most important holiday periods, and many Chileans travel to the coast or countryside.",
    fr: "Le Vendredi Saint est observe au Chili depuis l'arrivee des missionnaires espagnols au XVIe siecle. Les traditions les plus notables ont lieu dans les communautes de pecheurs le long de la cote chilienne, ou les pecheurs portent un crucifix dans la mer.\n\nLe long week-end de Paques est l'une des periodes de vacances les plus importantes, et de nombreux Chiliens voyagent a la cote ou a la campagne.",
    es: "El Viernes Santo se observa en Chile desde la llegada de los misioneros espanoles en el siglo XVI. La cultura profundamente catolica de Chile significa que el dia se trata con gran reverencia. Historicamente, los lugares de entretenimiento debian cerrar y las ventas de alcohol estaban restringidas.\n\nLas tradiciones mas notables del Viernes Santo tienen lugar en las comunidades pesqueras a lo largo de la costa chilena, donde los pescadores llevan un crucifijo o estatua de Cristo por las calles y hasta el mar, bendiciendo las aguas y rezando por una pesca segura. En Santiago, grandes procesiones recorren las calles del centro historico.\n\nEn decadas recientes, aunque Chile se ha vuelto mas secular, el Viernes Santo sigue siendo ampliamente observado. El fin de semana largo de Pascua es uno de los periodos de vacaciones mas importantes, y muchos chilenos viajan a la costa o al campo.",
  },

  traditions: {
    en: [
      'Attending Stations of the Cross services at churches',
      'Watching processions through city streets with religious floats',
      'Fasting and abstaining from meat — eating seafood instead',
      'Fishing communities carrying crucifixes into the sea to bless the waters',
      'Preparing traditional empanadas de vigilia (Lenten empanadas with seafood)',
      'Attending the Via Crucis (Way of the Cross) reenactments',
      'Traveling for the long Easter weekend',
    ],
    fr: [
      'Assister aux services du chemin de croix dans les eglises',
      'Regarder les processions dans les rues avec des chars religieux',
      'Jeuner et s\'abstenir de viande — manger des fruits de mer a la place',
      'Les communautes de pecheurs portant des crucifix dans la mer pour benir les eaux',
      'Preparer les empanadas de vigilia traditionnelles (empanadas de Careme aux fruits de mer)',
      'Assister aux reconstitutions du Via Crucis (Chemin de Croix)',
      'Voyager pour le long week-end de Paques',
    ],
    es: [
      'Asistir a los servicios del Via Crucis en las iglesias',
      'Ver procesiones por las calles con andas religiosas',
      'Ayunar y abstenerse de carne — comer mariscos en su lugar',
      'Comunidades pesqueras llevando crucifijos al mar para bendecir las aguas',
      'Preparar las tradicionales empanadas de vigilia (empanadas cuaresmales con mariscos)',
      'Asistir a las representaciones del Via Crucis',
      'Viajar para el fin de semana largo de Pascua',
    ],
  },

  funFacts: {
    en: [
      'Chilean fishermen have a centuries-old tradition of carrying Christ statues into the Pacific Ocean on Good Friday.',
      'Empanadas de vigilia, made with seafood instead of meat, are a uniquely Chilean Good Friday tradition.',
      'Until recently, Chilean law prohibited showing movies and hosting public entertainment on Good Friday.',
      'Good Friday in Chile falls in autumn, with comfortable temperatures around 15-20C (59-68F) in Santiago.',
      'The Easter weekend is one of the busiest travel periods in Chile, with massive traffic heading to the coast.',
    ],
    fr: [
      'Les pecheurs chiliens ont une tradition seculaire de porter des statues du Christ dans l\'ocean Pacifique le Vendredi Saint.',
      'Les empanadas de vigilia, faites avec des fruits de mer, sont une tradition du Vendredi Saint uniquement chilienne.',
      'Jusqu\'a recemment, la loi chilienne interdisait les films et divertissements publics le Vendredi Saint.',
      'Le Vendredi Saint au Chili tombe en automne, avec des temperatures confortables de 15-20C a Santiago.',
      'Le week-end de Paques est l\'une des periodes de voyage les plus chargees au Chili.',
    ],
    es: [
      'Los pescadores chilenos tienen una tradicion centenaria de llevar estatuas de Cristo al oceano Pacifico el Viernes Santo.',
      'Las empanadas de vigilia, hechas con mariscos en lugar de carne, son una tradicion del Viernes Santo unicamente chilena.',
      'Hasta hace poco, la ley chilena prohibia proyectar peliculas y realizar entretenimiento publico el Viernes Santo.',
      'El Viernes Santo en Chile cae en otono, con temperaturas comodas de 15-20C en Santiago.',
      'El fin de semana de Pascua es uno de los periodos de viaje mas congestionados en Chile, con trafico masivo hacia la costa.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan travel early as the Easter weekend is a peak travel period',
      'Check church schedules for Stations of the Cross and processions',
      'Prepare empanadas de vigilia with seafood for the traditional meal',
      'Be aware that many businesses and entertainment venues may be closed',
      'Book accommodation early if traveling for the long weekend',
    ],
    fr: [
      'Planifier le voyage tot car le week-end de Paques est une periode de pointe',
      'Verifier les horaires des eglises pour le chemin de croix et les processions',
      'Preparer des empanadas de vigilia aux fruits de mer pour le repas traditionnel',
      'Savoir que de nombreux commerces et lieux de divertissement peuvent etre fermes',
      'Reserver l\'hebergement tot si vous voyagez pour le long week-end',
    ],
    es: [
      'Planificar el viaje temprano ya que el fin de semana de Pascua es periodo de alta demanda',
      'Consultar los horarios de las iglesias para el Via Crucis y las procesiones',
      'Preparar empanadas de vigilia con mariscos para la comida tradicional',
      'Tener en cuenta que muchos negocios y lugares de entretenimiento pueden estar cerrados',
      'Reservar alojamiento temprano si viajan para el fin de semana largo',
    ],
  },

  relatedHolidays: ['cl_christmas', 'cl_fiestas-patrias'],

  seo: {
    en: {
      titleTemplate: 'Good Friday {year} Chile — Date, Countdown & Info',
      descriptionTemplate: 'When is Good Friday {year} in Chile? Live countdown, traditions, processions, and celebration guide.',
      keywords: ['Good Friday Chile', 'Viernes Santo Chile', 'Easter Chile', 'Chile Easter weekend', 'Chile holidays'],
    },
    fr: {
      titleTemplate: 'Vendredi Saint {year} Chili — Date, compte a rebours et info',
      descriptionTemplate: 'Quand est le Vendredi Saint {year} au Chili ? Compte a rebours, traditions et guide.',
      keywords: ['Vendredi Saint Chili', 'Paques Chili', 'Viernes Santo Chili', 'jours feries Chili', 'feriados Chile'],
    },
    es: {
      titleTemplate: 'Viernes Santo {year} Chile — Fecha, cuenta regresiva e info',
      descriptionTemplate: 'Cuando es el Viernes Santo {year} en Chile? Cuenta regresiva, tradiciones, procesiones y guia.',
      keywords: ['Viernes Santo Chile', 'Semana Santa Chile', 'Pascua Chile', 'feriados Chile', 'tradiciones Chile'],
    },
  },

  faq: [
    {
      question: { en: 'When is Good Friday {year} in Chile?', fr: 'Quand est le Vendredi Saint {year} au Chili ?', es: 'Cuando es el Viernes Santo {year} en Chile?' },
      answer: {
        en: 'Good Friday {year} in Chile falls on {date}. The date changes each year as it is based on the Easter calendar.',
        fr: 'Le Vendredi Saint {year} au Chili tombe le {date}. La date change chaque annee car elle est basee sur le calendrier pascal.',
        es: 'El Viernes Santo {year} en Chile cae el {date}. La fecha cambia cada ano ya que se basa en el calendario de Pascua.',
      },
    },
    {
      question: { en: 'Is Good Friday a public holiday in Chile?', fr: 'Le Vendredi Saint est-il un jour ferie au Chili ?', es: 'El Viernes Santo es feriado en Chile?' },
      answer: {
        en: 'Yes, Good Friday is a national public holiday in Chile. Banks, government offices, and most businesses are closed. Many Chileans use the long weekend for travel.',
        fr: 'Oui, le Vendredi Saint est un jour ferie national au Chili. Les banques et la plupart des commerces sont fermes.',
        es: 'Si, el Viernes Santo es feriado nacional en Chile. Los bancos, oficinas gubernamentales y la mayoria de negocios estan cerrados. Muchos chilenos usan el fin de semana largo para viajar.',
      },
    },
    {
      question: { en: 'What are empanadas de vigilia?', fr: 'Que sont les empanadas de vigilia ?', es: 'Que son las empanadas de vigilia?' },
      answer: {
        en: 'Empanadas de vigilia are a Chilean Good Friday tradition — savory pastries filled with seafood (typically shellfish or fish) instead of the usual meat filling. They are eaten during Lent when Catholics abstain from meat on Fridays.',
        fr: 'Les empanadas de vigilia sont une tradition chilienne du Vendredi Saint — des pates garnies de fruits de mer au lieu de la viande habituelle.',
        es: 'Las empanadas de vigilia son una tradicion chilena del Viernes Santo — empanadas rellenas de mariscos (tipicamente mariscos o pescado) en lugar del relleno habitual de carne. Se comen durante la Cuaresma cuando los catolicos se abstienen de carne los viernes.',
      },
    },
    {
      question: { en: 'What season is Easter in Chile?', fr: 'En quelle saison est Paques au Chili ?', es: 'En que estacion es Pascua en Chile?' },
      answer: {
        en: 'Easter in Chile falls in autumn (March-April in the Southern Hemisphere). The weather is mild and pleasant, with temperatures around 15-20C (59-68F) in Santiago, making it comfortable for outdoor processions and travel.',
        fr: 'Paques au Chili tombe en automne (mars-avril dans l\'hemisphere sud). Le temps est doux et agreable, avec des temperatures autour de 15-20C a Santiago.',
        es: 'La Pascua en Chile cae en otono (marzo-abril en el hemisferio sur). El clima es templado y agradable, con temperaturas de 15-20C en Santiago, lo que lo hace comodo para procesiones al aire libre y viajes.',
      },
    },
  ],

  colorTheme: 'easter',
  icon: '\u271d\ufe0f',
};

// ---------------------------------------------------------------------------
// Labour Day — May 1
// ---------------------------------------------------------------------------

const labourDay: HolidayData = {
  id: 'cl_labour-day',
  countryCode: 'cl',
  slugs: { en: 'labour-day', fr: 'fete-du-travail', es: 'dia-del-trabajo' },
  names: { en: 'Labour Day', fr: 'Fete du Travail', es: 'Dia del Trabajo' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 1,

  descriptions: {
    en: "Labour Day on May 1 is a national holiday in Chile honoring workers and the labor movement. It is marked by union marches, rallies, and cultural events, with Chile's labor history being particularly significant given the country's mining traditions and the workers' struggles of the 20th century.",
    fr: "La Fete du Travail, le 1er mai, est un jour ferie national au Chili en l'honneur des travailleurs et du mouvement ouvrier. Elle est marquee par des marches syndicales et des rassemblements, l'histoire ouvriere du Chili etant particulierement significative.",
    es: "El Dia del Trabajo, el 1 de mayo, es un feriado nacional en Chile en honor a los trabajadores y al movimiento obrero. Se celebra con marchas sindicales, mitines y eventos culturales, siendo la historia laboral de Chile particularmente significativa dada las tradiciones mineras del pais y las luchas obreras del siglo XX.",
  },

  history: {
    en: "Chile's labor movement has a powerful and sometimes tragic history. The Santa Maria School massacre of 1907 in Iquique, where thousands of nitrate mine workers and their families were killed by the military during a strike, remains one of the darkest chapters in Chilean labor history.\n\nThe copper mining industry has been central to Chilean workers' movements, with miners organizing some of the country's most influential unions. The Central Unitaria de Trabajadores (CUT) is Chile's main trade union confederation.\n\nMay 1 was suppressed as a holiday during the Pinochet dictatorship (1973-1990) but was restored with the return of democracy. Today, large marches through Santiago's Alameda avenue are a tradition, with workers demanding labor rights and social justice.",
    fr: "Le mouvement ouvrier chilien a une histoire puissante et parfois tragique. Le massacre de l'ecole Santa Maria de 1907 a Iquique, ou des milliers de mineurs de salpetre ont ete tues, reste l'un des chapitres les plus sombres.\n\nLe 1er mai a ete supprime pendant la dictature de Pinochet (1973-1990) mais a ete retabli avec le retour de la democratie.",
    es: "El movimiento obrero chileno tiene una historia poderosa y a veces tragica. La matanza de la Escuela Santa Maria de 1907 en Iquique, donde miles de trabajadores del salitre y sus familias fueron asesinados por el ejercito durante una huelga, sigue siendo uno de los capitulos mas oscuros de la historia laboral chilena.\n\nLa industria del cobre ha sido central en los movimientos de trabajadores chilenos, con los mineros organizando algunos de los sindicatos mas influyentes del pais. La Central Unitaria de Trabajadores (CUT) es la principal confederacion sindical de Chile.\n\nEl 1 de mayo fue suprimido como feriado durante la dictadura de Pinochet (1973-1990) pero fue restituido con el retorno de la democracia. Hoy, grandes marchas por la Alameda de Santiago son una tradicion, con trabajadores exigiendo derechos laborales y justicia social.",
  },

  traditions: {
    en: [
      'Union marches along the Alameda in Santiago',
      'Political speeches and rallies for workers\' rights',
      'Cultural events and concerts celebrating the labor movement',
      'Commemorating the Santa Maria School massacre of 1907',
      'Family gatherings for the day off',
    ],
    fr: [
      'Marches syndicales le long de l\'Alameda a Santiago',
      'Discours politiques et rassemblements pour les droits des travailleurs',
      'Evenements culturels et concerts celebrant le mouvement ouvrier',
      'Commemoration du massacre de l\'ecole Santa Maria de 1907',
      'Reunions familiales pour le jour de conge',
    ],
    es: [
      'Marchas sindicales por la Alameda de Santiago',
      'Discursos politicos y mitines por los derechos de los trabajadores',
      'Eventos culturales y conciertos celebrando el movimiento obrero',
      'Conmemoracion de la matanza de la Escuela Santa Maria de 1907',
      'Reuniones familiares para el dia libre',
    ],
  },

  funFacts: {
    en: [
      'The Santa Maria School massacre of 1907 killed an estimated 2,000-3,600 nitrate mine workers and their families in Iquique.',
      'Chile\'s copper miners are among the best-organized workers in Latin America, with a strong tradition of union activism.',
      'Labour Day was banned during the Pinochet dictatorship (1973-1990) and its restoration was a symbol of democratic recovery.',
      'The CUT (Central Unitaria de Trabajadores) organizes the main May 1 march in Santiago every year.',
      'Chile\'s mining industry accounts for over 10% of GDP, making miners\' labor rights a national concern.',
    ],
    fr: [
      'Le massacre de l\'ecole Santa Maria de 1907 a tue entre 2 000 et 3 600 travailleurs du salpetre et leurs familles a Iquique.',
      'Les mineurs de cuivre chiliens sont parmi les travailleurs les mieux organises d\'Amerique latine.',
      'La Fete du Travail a ete interdite pendant la dictature de Pinochet et sa restitution fut un symbole de la recuperation democratique.',
      'La CUT organise la marche principale du 1er mai a Santiago chaque annee.',
      'L\'industrie miniere chilienne represente plus de 10% du PIB.',
    ],
    es: [
      'La matanza de la Escuela Santa Maria de 1907 mato a entre 2.000 y 3.600 trabajadores del salitre y sus familias en Iquique.',
      'Los mineros del cobre chilenos estan entre los trabajadores mejor organizados de America Latina, con una fuerte tradicion de activismo sindical.',
      'El Dia del Trabajo fue prohibido durante la dictadura de Pinochet (1973-1990) y su restitucion fue un simbolo de la recuperacion democratica.',
      'La CUT (Central Unitaria de Trabajadores) organiza la marcha principal del 1 de mayo en Santiago cada ano.',
      'La industria minera de Chile representa mas del 10% del PIB, haciendo de los derechos laborales de los mineros una preocupacion nacional.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the route and schedule of the main march in Santiago',
      'Plan for road closures in central Santiago during marches',
      'Be aware that banks, government offices, and most businesses will be closed',
      'Stock up on groceries the day before',
      'Plan family activities for the day off if not attending marches',
    ],
    fr: [
      'Verifier le parcours et le programme de la marche principale a Santiago',
      'Planifier les fermetures de routes au centre de Santiago',
      'Savoir que les banques et la plupart des commerces seront fermes',
      'Faire les courses la veille',
      'Planifier des activites familiales pour le jour de conge',
    ],
    es: [
      'Consultar la ruta y horario de la marcha principal en Santiago',
      'Planificar para los cierres de vias en el centro de Santiago durante las marchas',
      'Tener en cuenta que bancos, oficinas gubernamentales y la mayoria de negocios estaran cerrados',
      'Hacer las compras el dia anterior',
      'Planificar actividades familiares para el dia libre si no van a las marchas',
    ],
  },

  relatedHolidays: ['cl_fiestas-patrias', 'cl_navy-day'],

  seo: {
    en: {
      titleTemplate: 'Labour Day {year} Chile — Countdown & Info',
      descriptionTemplate: 'When is Labour Day {year} in Chile? Live countdown, workers\' rights history, and celebration info.',
      keywords: ['Labour Day Chile', 'Dia del Trabajo Chile', 'May Day Chile', 'Chile public holidays', 'workers rights Chile'],
    },
    fr: {
      titleTemplate: 'Fete du Travail {year} Chili — Compte a rebours et info',
      descriptionTemplate: 'Quand est la Fete du Travail {year} au Chili ? Compte a rebours et info.',
      keywords: ['Fete du Travail Chili', '1er mai Chili', 'droits travailleurs Chili', 'jours feries Chili', 'feriados Chile'],
    },
    es: {
      titleTemplate: 'Dia del Trabajo {year} Chile — Cuenta regresiva e info',
      descriptionTemplate: 'Cuando es el Dia del Trabajo {year} en Chile? Cuenta regresiva, historia de derechos laborales e info.',
      keywords: ['Dia del Trabajo Chile', '1 de mayo Chile', 'derechos laborales Chile', 'feriados Chile', 'CUT Chile'],
    },
  },

  faq: [
    {
      question: { en: 'When is Labour Day {year} in Chile?', fr: 'Quand est la Fete du Travail {year} au Chili ?', es: 'Cuando es el Dia del Trabajo {year} en Chile?' },
      answer: {
        en: 'Labour Day {year} in Chile is on {date}. It is always May 1 and is a national public holiday.',
        fr: 'La Fete du Travail {year} au Chili est le {date}. C\'est toujours le 1er mai.',
        es: 'El Dia del Trabajo {year} en Chile es el {date}. Siempre es el 1 de mayo y es feriado nacional.',
      },
    },
    {
      question: { en: 'What was the Santa Maria School massacre?', fr: 'Qu\'est-ce que le massacre de l\'ecole Santa Maria ?', es: 'Que fue la matanza de la Escuela Santa Maria?' },
      answer: {
        en: 'The Santa Maria School massacre occurred on December 21, 1907, in Iquique, Chile. Thousands of nitrate mine workers who had gathered at the school during a strike were killed when the military opened fire. It is one of the worst labor massacres in Latin American history.',
        fr: 'Le massacre de l\'ecole Santa Maria a eu lieu le 21 decembre 1907 a Iquique. Des milliers de travailleurs du salpetre en greve ont ete tues par l\'armee.',
        es: 'La matanza de la Escuela Santa Maria ocurrio el 21 de diciembre de 1907 en Iquique, Chile. Miles de trabajadores del salitre que se habian reunido en la escuela durante una huelga fueron asesinados cuando el ejercito abrio fuego. Es una de las peores masacres laborales de la historia latinoamericana.',
      },
    },
    {
      question: { en: 'Was Labour Day banned in Chile?', fr: 'La Fete du Travail a-t-elle ete interdite au Chili ?', es: 'El Dia del Trabajo fue prohibido en Chile?' },
      answer: {
        en: 'Yes. Labour Day was suppressed as a public holiday during the Pinochet military dictatorship (1973-1990). Its restoration after the return of democracy in 1990 was seen as an important symbol of the recovery of civil liberties.',
        fr: 'Oui. La Fete du Travail a ete supprimee pendant la dictature de Pinochet (1973-1990). Sa restitution fut un symbole important de la recuperation des libertes civiles.',
        es: 'Si. El Dia del Trabajo fue suprimido como feriado durante la dictadura militar de Pinochet (1973-1990). Su restitucion despues del retorno de la democracia en 1990 fue vista como un importante simbolo de la recuperacion de las libertades civiles.',
      },
    },
    {
      question: { en: 'Are shops open on Labour Day in Chile?', fr: 'Les magasins sont-ils ouverts la Fete du Travail au Chili ?', es: 'Los comercios estan abiertos el Dia del Trabajo en Chile?' },
      answer: {
        en: 'Most shops, banks, and government offices are closed on Labour Day. Some supermarkets and malls may open with reduced hours. Restaurants and cafes typically remain open.',
        fr: 'La plupart des magasins, banques et bureaux sont fermes. Certains supermarches peuvent ouvrir avec des horaires reduits.',
        es: 'La mayoria de comercios, bancos y oficinas gubernamentales estan cerrados el Dia del Trabajo. Algunos supermercados y malls pueden abrir con horarios reducidos. Restaurantes y cafes tipicamente permanecen abiertos.',
      },
    },
  ],

  colorTheme: 'spring',
  icon: '\u2692\ufe0f',
};

// ---------------------------------------------------------------------------
// Navy Day — May 21
// ---------------------------------------------------------------------------

const navyDay: HolidayData = {
  id: 'cl_navy-day',
  countryCode: 'cl',
  slugs: { en: 'navy-day', fr: 'jour-de-la-marine', es: 'dia-de-las-glorias-navales' },
  names: { en: 'Navy Day', fr: 'Jour de la Marine', es: 'Dia de las Glorias Navales' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 21,

  descriptions: {
    en: "Navy Day (Dia de las Glorias Navales) on May 21 is a national holiday in Chile commemorating the Battle of Iquique in 1879 during the War of the Pacific. The battle made Captain Arturo Prat a national hero after he led a suicidal boarding charge against the Peruvian ironclad Huascar.",
    fr: "Le Jour de la Marine (Dia de las Glorias Navales), le 21 mai, est un jour ferie national au Chili commemorant la Bataille d'Iquique en 1879 pendant la Guerre du Pacifique. La bataille a fait du capitaine Arturo Prat un heros national.",
    es: "El Dia de las Glorias Navales, el 21 de mayo, es un feriado nacional en Chile que conmemora la Batalla de Iquique en 1879 durante la Guerra del Pacifico. La batalla convirtio al capitan Arturo Prat en un heroe nacional despues de liderar un abordaje suicida contra el blindado peruano Huascar.",
  },

  history: {
    en: "On May 21, 1879, during the War of the Pacific between Chile and the allied Peru-Bolivia forces, the Chilean corvette Esmeralda faced the vastly superior Peruvian ironclad Huascar in the harbor of Iquique. Captain Arturo Prat, knowing his wooden ship was outgunned, led a desperate boarding charge onto the Huascar and was killed on its deck.\n\nPrat's sacrifice galvanized the Chilean nation and transformed him into the country's greatest naval hero. His famous last words — 'Muchachos, la contienda es desigual, pero animo y valor. Nunca se ha arriado nuestra bandera' (Boys, the contest is unequal, but take courage and valor. Our flag has never been lowered) — are among the most quoted in Chilean history.\n\nThe War of the Pacific (1879-1884) resulted in Chilean victory and the acquisition of the mineral-rich northern territories from Peru and Bolivia. May 21 is also the traditional date for the President's annual State of the Nation address to Congress.",
    fr: "Le 21 mai 1879, pendant la Guerre du Pacifique, la corvette chilienne Esmeralda a affronte le blindado peruvien Huascar a Iquique. Le capitaine Arturo Prat a mene un abordage desespere et fut tue.\n\nLe sacrifice de Prat a galvanise la nation chilienne et l'a transforme en plus grand heros naval du pays. La Guerre du Pacifique a resulte en la victoire chilienne et l'acquisition des territoires miniers du nord.",
    es: "El 21 de mayo de 1879, durante la Guerra del Pacifico entre Chile y las fuerzas aliadas de Peru y Bolivia, la corbeta chilena Esmeralda enfrento al vastamente superior blindado peruano Huascar en la rada de Iquique. El capitan Arturo Prat, sabiendo que su barco de madera estaba en desventaja, lidero un abordaje desesperado al Huascar y fue muerto en su cubierta.\n\nEl sacrificio de Prat galvanizo a la nacion chilena y lo transformo en el mayor heroe naval del pais. Sus famosas ultimas palabras — 'Muchachos, la contienda es desigual, pero animo y valor. Nunca se ha arriado nuestra bandera' — estan entre las mas citadas de la historia chilena.\n\nLa Guerra del Pacifico (1879-1884) resulto en victoria chilena y la adquisicion de los territorios mineros del norte de Peru y Bolivia. El 21 de mayo es tambien la fecha tradicional del discurso del Presidente a la Nacion ante el Congreso.",
  },

  traditions: {
    en: [
      'Watching the President\'s annual State of the Nation address to Congress',
      'Attending naval ceremonies and wreath-laying at the Arturo Prat monument',
      'Visiting the replica of the Esmeralda corvette in Iquique',
      'School presentations about the Battle of Iquique and Arturo Prat',
      'Naval parades in Valparaiso and other port cities',
    ],
    fr: [
      'Regarder le discours annuel du President a la Nation au Congres',
      'Assister aux ceremonies navales et au depot de gerbes au monument d\'Arturo Prat',
      'Visiter la replique de la corvette Esmeralda a Iquique',
      'Presentations scolaires sur la Bataille d\'Iquique et Arturo Prat',
      'Defiles navals a Valparaiso et d\'autres villes portuaires',
    ],
    es: [
      'Ver el discurso anual del Presidente a la Nacion ante el Congreso',
      'Asistir a ceremonias navales y deposito de ofrendas florales en el monumento a Arturo Prat',
      'Visitar la replica de la corbeta Esmeralda en Iquique',
      'Presentaciones escolares sobre la Batalla de Iquique y Arturo Prat',
      'Desfiles navales en Valparaiso y otras ciudades portuarias',
    ],
  },

  funFacts: {
    en: [
      'Arturo Prat is so revered in Chile that almost every city has a street or plaza named after him.',
      'The Esmeralda was a wooden corvette fighting against an ironclad warship — the battle was spectacularly unequal.',
      'The Huascar was eventually captured by Chile and is now a museum ship in Talcahuano — the world\'s oldest surviving ironclad afloat.',
      'The President\'s State of the Nation address on May 21 is a tradition dating back to the 19th century.',
      'The War of the Pacific gave Chile control of the Atacama Desert, which contains the world\'s largest copper reserves.',
    ],
    fr: [
      'Arturo Prat est si venere au Chili que presque chaque ville a une rue ou une place portant son nom.',
      'L\'Esmeralda etait une corvette en bois combattant un navire blinde — la bataille etait spectaculairement inegale.',
      'Le Huascar a ete capture par le Chili et est maintenant un navire-musee a Talcahuano.',
      'Le discours du President le 21 mai est une tradition datant du XIXe siecle.',
      'La Guerre du Pacifique a donne au Chili le controle du desert d\'Atacama et ses reserves de cuivre.',
    ],
    es: [
      'Arturo Prat es tan venerado en Chile que casi cada ciudad tiene una calle o plaza con su nombre.',
      'La Esmeralda era una corbeta de madera enfrentando a un blindado — la batalla era espectacularmente desigual.',
      'El Huascar fue eventualmente capturado por Chile y es ahora un buque museo en Talcahuano — el blindado mas antiguo del mundo que aun flota.',
      'El discurso del Presidente a la Nacion el 21 de mayo es una tradicion que data del siglo XIX.',
      'La Guerra del Pacifico le dio a Chile el control del Desierto de Atacama, que contiene las mayores reservas de cobre del mundo.',
    ],
  },

  planningChecklist: {
    en: [
      'Watch the President\'s State of the Nation address on TV or radio',
      'Attend naval ceremonies in Valparaiso or your local port city',
      'Visit the Huascar museum ship in Talcahuano if in the Bio Bio region',
      'Teach children about Arturo Prat and the Battle of Iquique',
      'Check if the May 21 holiday creates a long weekend for travel planning',
    ],
    fr: [
      'Regarder le discours du President a la television ou a la radio',
      'Assister aux ceremonies navales a Valparaiso ou votre ville portuaire locale',
      'Visiter le navire-musee Huascar a Talcahuano si vous etes dans la region de Bio Bio',
      'Enseigner aux enfants l\'histoire d\'Arturo Prat et la Bataille d\'Iquique',
      'Verifier si le 21 mai cree un long week-end pour planifier un voyage',
    ],
    es: [
      'Ver el discurso del Presidente a la Nacion por TV o radio',
      'Asistir a ceremonias navales en Valparaiso o tu ciudad portuaria local',
      'Visitar el buque museo Huascar en Talcahuano si estan en la region del Bio Bio',
      'Ensenar a los ninos sobre Arturo Prat y la Batalla de Iquique',
      'Verificar si el 21 de mayo crea un fin de semana largo para planificar viajes',
    ],
  },

  relatedHolidays: ['cl_fiestas-patrias', 'cl_labour-day'],

  seo: {
    en: {
      titleTemplate: 'Navy Day {year} Chile — Countdown & History',
      descriptionTemplate: 'Navy Day {year} in Chile on May 21. Battle of Iquique history, Arturo Prat, and celebration guide.',
      keywords: ['Navy Day Chile', 'Dia de las Glorias Navales', 'Battle of Iquique', 'Arturo Prat', 'Chile holidays'],
    },
    fr: {
      titleTemplate: 'Jour de la Marine {year} Chili — Compte a rebours et histoire',
      descriptionTemplate: 'Jour de la Marine {year} au Chili le 21 mai. Bataille d\'Iquique, Arturo Prat et guide.',
      keywords: ['Jour de la Marine Chili', 'Bataille Iquique', 'Arturo Prat', 'Glorias Navales', 'feries Chili'],
    },
    es: {
      titleTemplate: 'Dia de las Glorias Navales {year} Chile — Cuenta regresiva e historia',
      descriptionTemplate: 'Dia de las Glorias Navales {year} en Chile el 21 de mayo. Batalla de Iquique, Arturo Prat y guia.',
      keywords: ['Glorias Navales Chile', 'Batalla de Iquique', 'Arturo Prat', '21 de mayo Chile', 'feriados Chile'],
    },
  },

  faq: [
    {
      question: { en: 'When is Navy Day {year} in Chile?', fr: 'Quand est le Jour de la Marine {year} au Chili ?', es: 'Cuando es el Dia de las Glorias Navales {year} en Chile?' },
      answer: {
        en: 'Navy Day {year} in Chile is on {date}. It is always May 21.',
        fr: 'Le Jour de la Marine {year} au Chili est le {date}. C\'est toujours le 21 mai.',
        es: 'El Dia de las Glorias Navales {year} en Chile es el {date}. Siempre es el 21 de mayo.',
      },
    },
    {
      question: { en: 'Who was Arturo Prat?', fr: 'Qui etait Arturo Prat ?', es: 'Quien fue Arturo Prat?' },
      answer: {
        en: 'Arturo Prat (1848-1879) was a Chilean naval captain who became the country\'s greatest military hero. During the Battle of Iquique on May 21, 1879, he led a suicidal boarding charge against the Peruvian ironclad Huascar from his outmatched wooden corvette Esmeralda, and was killed on the enemy deck.',
        fr: 'Arturo Prat (1848-1879) fut un capitaine de marine chilien devenu le plus grand heros militaire du pays. Il a mene un abordage desespere contre le Huascar et fut tue.',
        es: 'Arturo Prat (1848-1879) fue un capitan de la Armada chilena que se convirtio en el mayor heroe militar del pais. Durante la Batalla de Iquique el 21 de mayo de 1879, lidero un abordaje suicida contra el blindado peruano Huascar desde su superada corbeta de madera Esmeralda, y fue muerto en la cubierta enemiga.',
      },
    },
    {
      question: { en: 'What was the War of the Pacific?', fr: 'Qu\'est-ce que la Guerre du Pacifique ?', es: 'Que fue la Guerra del Pacifico?' },
      answer: {
        en: 'The War of the Pacific (1879-1884) was a conflict between Chile and the alliance of Peru and Bolivia. Chile won the war and gained control of the mineral-rich Atacama Desert region, including the world\'s largest copper reserves. Bolivia lost its access to the sea.',
        fr: 'La Guerre du Pacifique (1879-1884) fut un conflit entre le Chili et l\'alliance du Perou et de la Bolivie. Le Chili a gagne et a obtenu le controle de la region du desert d\'Atacama.',
        es: 'La Guerra del Pacifico (1879-1884) fue un conflicto entre Chile y la alianza de Peru y Bolivia. Chile gano la guerra y obtuvo el control de la region mineral del Desierto de Atacama, incluyendo las mayores reservas de cobre del mundo. Bolivia perdio su acceso al mar.',
      },
    },
    {
      question: { en: 'Why is the President\'s address on May 21?', fr: 'Pourquoi le discours du President est-il le 21 mai ?', es: 'Por que el discurso del Presidente es el 21 de mayo?' },
      answer: {
        en: 'The President\'s annual State of the Nation address to Congress is traditionally held on May 21 to coincide with Navy Day. This tradition dates back to the 19th century and underscores the patriotic significance of the date.',
        fr: 'Le discours annuel du President au Congres a lieu traditionnellement le 21 mai pour coincider avec le Jour de la Marine. Cette tradition date du XIXe siecle.',
        es: 'El discurso anual del Presidente a la Nacion ante el Congreso se realiza tradicionalmente el 21 de mayo para coincidir con el Dia de las Glorias Navales. Esta tradicion data del siglo XIX y subraya el significado patriotico de la fecha.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '\u2693',
};

// ---------------------------------------------------------------------------
// National Day (Fiestas Patrias) — September 18
// ---------------------------------------------------------------------------

const fiestasPatrias: HolidayData = {
  id: 'cl_fiestas-patrias',
  countryCode: 'cl',
  slugs: { en: 'fiestas-patrias', fr: 'fetes-nationales', es: 'fiestas-patrias' },
  names: { en: 'National Day (Fiestas Patrias)', fr: 'Fetes Nationales (Fiestas Patrias)', es: 'Fiestas Patrias (Dieciocho)' },

  dateType: 'fixed',
  fixedMonth: 9,
  fixedDay: 18,

  descriptions: {
    en: "Fiestas Patrias on September 18, known as the Dieciocho, is Chile's biggest and most beloved national holiday. It commemorates the first government junta of 1810 and is celebrated with asados, empanadas, chicha (fermented grape juice), cueca dancing, and fondas (temporary fairgrounds) across the entire country.",
    fr: "Les Fiestas Patrias le 18 septembre, connues sous le nom de Dieciocho, sont la fete nationale la plus importante et la plus aimee du Chili. Elles commemorent la premiere junte de gouvernement de 1810 et sont celebrees avec des asados, des empanadas, de la chicha, la danse de la cueca et des fondas.",
    es: "Las Fiestas Patrias el 18 de septiembre, conocidas como el Dieciocho, son el feriado nacional mas grande y querido de Chile. Conmemoran la primera junta de gobierno de 1810 y se celebran con asados, empanadas, chicha (jugo de uva fermentado), baile de cueca y fondas (recintos feriales temporales) en todo el pais.",
  },

  history: {
    en: "On September 18, 1810, Chile's first government junta was established, marking the beginning of the independence process from Spain. While full independence was not declared until February 12, 1818, September 18 is celebrated as Chile's national day and the start of the independence movement.\n\nThe celebrations typically span several days, with September 19 (Day of the Glories of the Army) also being a public holiday. When these dates fall near a weekend, the government often declares a 'sandwich day' (dia sandwich) to create an even longer break.\n\nFiestas Patrias is the most anticipated holiday period in Chile. The entire country essentially shuts down for a week, with fondas (temporary outdoor celebration venues) appearing in every city and town. The cueca, Chile's national dance, takes center stage, and the smell of asado (barbecue) fills the air from Arica to Punta Arenas.",
    fr: "Le 18 septembre 1810, la premiere junte de gouvernement du Chili a ete etablie, marquant le debut du processus d'independance de l'Espagne. Les Fiestas Patrias sont la periode de vacances la plus attendue au Chili.\n\nLes celebrations s'etendent generalement sur plusieurs jours, le 19 septembre (Jour des Gloires de l'Armee) etant egalement ferie. Des fondas (lieux de celebration temporaires) apparaissent dans chaque ville.",
    es: "El 18 de septiembre de 1810, se establecio la primera junta de gobierno de Chile, marcando el inicio del proceso de independencia de Espana. Aunque la independencia total no fue declarada hasta el 12 de febrero de 1818, el 18 de septiembre se celebra como el dia nacional de Chile y el inicio del movimiento independentista.\n\nLas celebraciones tipicamente abarcan varios dias, con el 19 de septiembre (Dia de las Glorias del Ejercito) siendo tambien feriado. Cuando estas fechas caen cerca de un fin de semana, el gobierno a menudo declara un 'dia sandwich' para crear un descanso aun mas largo.\n\nLas Fiestas Patrias son el periodo festivo mas esperado de Chile. Todo el pais esencialmente se paraliza por una semana, con fondas (recintos de celebracion temporales al aire libre) apareciendo en cada ciudad y pueblo. La cueca, la danza nacional de Chile, toma protagonismo, y el aroma del asado llena el aire desde Arica hasta Punta Arenas.",
  },

  traditions: {
    en: [
      'Preparing and eating asado (Chilean barbecue) with family and friends',
      'Making and eating empanadas de pino (meat empanadas) by the dozen',
      'Drinking chicha (fermented grape juice) and terremoto cocktails',
      'Dancing the cueca, Chile\'s national dance, in fondas and at parties',
      'Visiting fondas (temporary fairgrounds) with live music, food, and games',
      'Flying kites (volantines) in open fields — a beloved children\'s tradition',
      'Playing traditional games like trompo (spinning top), emboque, and rayuela',
    ],
    fr: [
      'Preparer et manger un asado (barbecue chilien) en famille et entre amis',
      'Faire et manger des empanadas de pino (empanadas de viande) par douzaines',
      'Boire de la chicha (jus de raisin fermente) et des cocktails terremoto',
      'Danser la cueca, la danse nationale du Chili, dans les fondas et aux fetes',
      'Visiter les fondas (foires temporaires) avec musique live, nourriture et jeux',
      'Faire voler des cerfs-volants (volantines) dans les champs — tradition des enfants',
      'Jouer a des jeux traditionnels comme le trompo, l\'emboque et la rayuela',
    ],
    es: [
      'Preparar y comer asado (parrillada chilena) con familia y amigos',
      'Hacer y comer empanadas de pino (empanadas de carne) por docenas',
      'Tomar chicha (jugo de uva fermentado) y cocktails terremoto',
      'Bailar cueca, la danza nacional de Chile, en fondas y fiestas',
      'Visitar fondas (recintos feriales temporales) con musica en vivo, comida y juegos',
      'Elevar volantines (cometas) en campos abiertos — tradicion querida de los ninos',
      'Jugar juegos tradicionales como trompo, emboque y rayuela',
    ],
  },

  funFacts: {
    en: [
      'Chileans consume an estimated 100 million empanadas during Fiestas Patrias week.',
      'The terremoto cocktail (meaning "earthquake") is made with fermented wine, pineapple ice cream, and grenadine — it\'s dangerously strong.',
      'September 18 celebrations are so important that the period is often called "la semana de la chilenidad" (the week of Chilean-ness).',
      'Fonda attendance across Chile can exceed 5 million visitors during the holiday period.',
      'The cueca was declared Chile\'s official national dance in 1979. Dancers wave handkerchiefs and mimic the courtship of a rooster and hen.',
    ],
    fr: [
      'Les Chiliens consomment environ 100 millions d\'empanadas pendant la semaine des Fiestas Patrias.',
      'Le cocktail terremoto (signifiant "tremblement de terre") est fait de vin fermente, glace a l\'ananas et grenadine — dangereusement fort.',
      'Les celebrations du 18 septembre sont si importantes que la periode est souvent appelee "la semana de la chilenidad."',
      'La frequentation des fondas au Chili peut depasser 5 millions de visiteurs pendant les fetes.',
      'La cueca a ete declaree danse nationale officielle du Chili en 1979.',
    ],
    es: [
      'Los chilenos consumen un estimado de 100 millones de empanadas durante la semana de Fiestas Patrias.',
      'El cocktail terremoto esta hecho con vino pipeño fermentado, helado de pina y granadina — es peligrosamente fuerte.',
      'Las celebraciones del 18 de septiembre son tan importantes que el periodo se llama a menudo "la semana de la chilenidad."',
      'La asistencia a fondas en todo Chile puede superar los 5 millones de visitantes durante el periodo festivo.',
      'La cueca fue declarada danza nacional oficial de Chile en 1979. Los bailarines agitan panuelos y simulan el cortejo de un gallo y una gallina.',
    ],
  },

  planningChecklist: {
    en: [
      'Stock up on empanada ingredients or order from your favorite bakery',
      'Plan your asado — buy quality meat, charcoal, and pebre ingredients',
      'Buy or make chicha and stock up on pisco for terremotos',
      'Find the best fonda in your area and check its schedule',
      'Prepare volantines (kites) for children to fly in the fields',
    ],
    fr: [
      'Se procurer des ingredients pour empanadas ou commander dans votre boulangerie favorite',
      'Planifier l\'asado — acheter viande de qualite, charbon et ingredients pour le pebre',
      'Acheter ou faire de la chicha et du pisco pour les terremotos',
      'Trouver la meilleure fonda de votre region et verifier son programme',
      'Preparer des volantines (cerfs-volants) pour les enfants',
    ],
    es: [
      'Conseguir ingredientes para empanadas o encargar en tu panaderia favorita',
      'Planificar el asado — comprar carne de calidad, carbon e ingredientes para el pebre',
      'Comprar o hacer chicha y conseguir pisco para los terremotos',
      'Encontrar la mejor fonda de tu zona y consultar su programa',
      'Preparar volantines (cometas) para que los ninos los eleven en los campos',
    ],
  },

  relatedHolidays: ['cl_new-years-day', 'cl_navy-day'],

  seo: {
    en: {
      titleTemplate: 'Fiestas Patrias {year} Chile — Countdown & Guide',
      descriptionTemplate: 'Fiestas Patrias {year} on September 18. Chile\'s biggest holiday with asados, empanadas, cueca, fondas, and celebration guide.',
      keywords: ['Fiestas Patrias Chile', 'Dieciocho Chile', 'September 18 Chile', 'Chilean independence', 'Chile holidays'],
    },
    fr: {
      titleTemplate: 'Fetes Nationales {year} Chili — Compte a rebours et guide',
      descriptionTemplate: 'Fiestas Patrias {year} le 18 septembre. La plus grande fete du Chili avec asados, empanadas, cueca et fondas.',
      keywords: ['Fiestas Patrias Chili', 'Dieciocho Chili', '18 septembre Chili', 'independance Chili', 'feries Chili'],
    },
    es: {
      titleTemplate: 'Fiestas Patrias {year} Chile — Cuenta regresiva y guia',
      descriptionTemplate: 'Fiestas Patrias {year} el 18 de septiembre. El feriado mas grande de Chile con asados, empanadas, cueca, fondas y guia.',
      keywords: ['Fiestas Patrias Chile', 'Dieciocho Chile', '18 de septiembre Chile', 'feriados Chile', 'independencia Chile'],
    },
  },

  faq: [
    {
      question: { en: 'When are Fiestas Patrias {year} in Chile?', fr: 'Quand sont les Fiestas Patrias {year} au Chili ?', es: 'Cuando son las Fiestas Patrias {year} en Chile?' },
      answer: {
        en: 'Fiestas Patrias {year} in Chile falls on {date}. September 18 (Independence Day) and September 19 (Army Day) are both national holidays.',
        fr: 'Les Fiestas Patrias {year} au Chili tombent le {date}. Les 18 et 19 septembre sont des jours feries nationaux.',
        es: 'Las Fiestas Patrias {year} en Chile caen el {date}. El 18 de septiembre (Dia de la Independencia) y el 19 de septiembre (Dia del Ejercito) son ambos feriados nacionales.',
      },
    },
    {
      question: { en: 'What is a fonda?', fr: 'Qu\'est-ce qu\'une fonda ?', es: 'Que es una fonda?' },
      answer: {
        en: 'A fonda is a temporary outdoor celebration venue set up for Fiestas Patrias. Fondas feature live cueca music, food stalls selling empanadas and anticuchos, chicha and terremoto drinks, traditional games, and dancing. They appear in every Chilean city and town during the holiday period.',
        fr: 'Une fonda est un lieu de celebration temporaire en plein air installe pour les Fiestas Patrias, avec musique, nourriture, chicha et jeux traditionnels.',
        es: 'Una fonda es un recinto de celebracion temporal al aire libre instalado para las Fiestas Patrias. Las fondas tienen musica en vivo de cueca, puestos de comida con empanadas y anticuchos, chicha y terremotos, juegos tradicionales y baile. Aparecen en cada ciudad y pueblo chileno durante el periodo festivo.',
      },
    },
    {
      question: { en: 'What is a terremoto cocktail?', fr: 'Qu\'est-ce que le cocktail terremoto ?', es: 'Que es el cocktail terremoto?' },
      answer: {
        en: 'A terremoto ("earthquake") is a Chilean cocktail made with young fermented wine (pipeno), pineapple ice cream, and a dash of grenadine. It is deceptively sweet and extremely potent. It is the signature drink of Fiestas Patrias celebrations.',
        fr: 'Un terremoto est un cocktail chilien fait de vin fermente, glace a l\'ananas et grenadine. Il est terriblement doux et extremement puissant.',
        es: 'El terremoto es un cocktail chileno hecho con vino pipeno joven fermentado, helado de pina y un toque de granadina. Es enganosamente dulce y extremadamente fuerte. Es la bebida emblematica de las celebraciones de Fiestas Patrias.',
      },
    },
    {
      question: { en: 'What is the cueca?', fr: 'Qu\'est-ce que la cueca ?', es: 'Que es la cueca?' },
      answer: {
        en: 'The cueca is Chile\'s national dance, officially designated in 1979. It mimics the courtship ritual between a rooster and a hen, with partners waving white handkerchiefs while dancing. It is performed at fondas, parties, and official ceremonies during Fiestas Patrias.',
        fr: 'La cueca est la danse nationale du Chili, officiellement designee en 1979. Elle imite le rituel de seduction entre un coq et une poule, avec des partenaires agitant des mouchoirs blancs.',
        es: 'La cueca es la danza nacional de Chile, oficialmente designada en 1979. Simula el ritual de cortejo entre un gallo y una gallina, con los bailarines agitando panuelos blancos mientras bailan. Se baila en fondas, fiestas y ceremonias oficiales durante las Fiestas Patrias.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '\ud83c\udde8\ud83c\uddf1',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'cl_christmas',
  countryCode: 'cl',
  slugs: { en: 'christmas-day', fr: 'jour-de-noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Jour de Noel', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: "Christmas Day on December 25 is a major national holiday in Chile, celebrated in the warmth of summer. Chilean Christmas traditions feature Pan de Pascua (Christmas bread), cola de mono (a spiked eggnog-like drink), and the Viejo Pascuero (Chilean Santa Claus) who delivers gifts at midnight.",
    fr: "Le Jour de Noel, le 25 decembre, est un jour ferie national majeur au Chili, celebre dans la chaleur de l'ete. Les traditions de Noel chiliennes incluent le Pan de Pascua (pain de Noel), la cola de mono et le Viejo Pascuero (Pere Noel chilien).",
    es: "La Navidad, el 25 de diciembre, es un feriado nacional importante en Chile, celebrado en el calor del verano. Las tradiciones navidenas chilenas incluyen Pan de Pascua (pan de Navidad), cola de mono (una bebida similar al rompope con aguardiente), y el Viejo Pascuero (Papa Noel chileno) que entrega los regalos a medianoche.",
  },

  history: {
    en: "Christmas in Chile combines Catholic traditions with unique Chilean customs that reflect the country's European immigrant heritage. Pan de Pascua, similar to German Stollen or Italian panettone, was brought by German immigrants who settled in southern Chile in the 19th century.\n\nCola de mono ('monkey's tail') is a uniquely Chilean Christmas drink made with aguardiente (or pisco), coffee, milk, sugar, and spices. Its origins are debated — one theory connects it to President Pedro Montt, whose name was jokingly altered to 'cola de Montt.'\n\nAs Christmas falls in summer, Chilean celebrations have a distinctly outdoor character. Many families travel to the beach or lake district for the holidays, and the Viejo Pascuero (Old Christmas Man) delivers gifts at midnight on December 24.",
    fr: "Noel au Chili combine les traditions catholiques avec des coutumes chiliennes uniques. Le Pan de Pascua a ete apporte par les immigrants allemands au XIXe siecle. La cola de mono est une boisson de Noel uniquement chilienne faite avec de l'aguardiente, du cafe, du lait et des epices.\n\nComme Noel tombe en ete, les celebrations ont un caractere distinctement exterieur.",
    es: "La Navidad en Chile combina tradiciones catolicas con costumbres chilenas unicas que reflejan la herencia de inmigrantes europeos del pais. El Pan de Pascua, similar al Stollen aleman o al panettone italiano, fue traido por inmigrantes alemanes que se establecieron en el sur de Chile en el siglo XIX.\n\nLa cola de mono ('cola de mono') es una bebida navidena unicamente chilena hecha con aguardiente (o pisco), cafe, leche, azucar y especias. Sus origenes son debatidos — una teoria la conecta con el Presidente Pedro Montt, cuyo nombre fue cambiado en broma a 'cola de Montt.'\n\nComo la Navidad cae en verano, las celebraciones chilenas tienen un caracter distintivamente al aire libre. Muchas familias viajan a la playa o la region de los lagos para las fiestas, y el Viejo Pascuero (Viejo de Pascua) entrega los regalos a medianoche el 24 de diciembre.",
  },

  traditions: {
    en: [
      'Eating Pan de Pascua (Christmas fruit bread) with hot chocolate or cola de mono',
      'Drinking cola de mono — a spiked coffee, milk, and aguardiente Christmas drink',
      'Opening gifts at midnight on Nochebuena (December 24)',
      'Attending Misa del Gallo (Midnight Mass)',
      'Gathering for a family dinner on Christmas Eve with turkey or chicken',
      'Heading to the beach or lake district for summer Christmas vacations',
      'Children receiving gifts from the Viejo Pascuero at midnight',
    ],
    fr: [
      'Manger du Pan de Pascua avec du chocolat chaud ou de la cola de mono',
      'Boire de la cola de mono — boisson de Noel au cafe, lait et aguardiente',
      'Ouvrir les cadeaux a minuit a Nochebuena (24 decembre)',
      'Assister a la Misa del Gallo (Messe de Minuit)',
      'Se reunir pour un diner familial de Noel avec dinde ou poulet',
      'Partir a la plage ou dans la region des lacs pour les vacances d\'ete',
      'Les enfants recoivent les cadeaux du Viejo Pascuero a minuit',
    ],
    es: [
      'Comer Pan de Pascua (pan de Navidad con frutas) con chocolate caliente o cola de mono',
      'Tomar cola de mono — bebida navidena con cafe, leche y aguardiente',
      'Abrir los regalos a medianoche en Nochebuena (24 de diciembre)',
      'Asistir a la Misa del Gallo',
      'Reunirse para una cena familiar en Nochebuena con pavo o pollo',
      'Ir a la playa o la region de los lagos para vacaciones de verano',
      'Los ninos reciben regalos del Viejo Pascuero a medianoche',
    ],
  },

  funFacts: {
    en: [
      'Cola de mono literally means "monkey\'s tail" — the origin of the name is debated but may reference President Pedro Montt.',
      'Pan de Pascua was introduced by German immigrants and is now an indispensable Chilean Christmas tradition.',
      'Christmas in Chile often reaches 30C+ (86F+), making poolside and beach celebrations common.',
      'The Viejo Pascuero is Chile\'s version of Santa Claus — the name means "Old Christmas Man."',
      'Many Chilean families eat their Christmas dinner as late as 11 PM on December 24, opening gifts at midnight.',
    ],
    fr: [
      'Cola de mono signifie litteralement "queue de singe" — l\'origine du nom est debattue.',
      'Le Pan de Pascua a ete introduit par les immigrants allemands et est devenu une tradition incontournable.',
      'Noel au Chili atteint souvent 30C+, rendant les celebrations au bord de la piscine et a la plage courantes.',
      'Le Viejo Pascuero est la version chilienne du Pere Noel — le nom signifie "Vieil Homme de Noel."',
      'De nombreuses familles chiliennes dinent aussi tard que 23h le 24 decembre, ouvrant les cadeaux a minuit.',
    ],
    es: [
      'Cola de mono literalmente significa "cola de mono" — el origen del nombre es debatido pero podria hacer referencia al Presidente Pedro Montt.',
      'El Pan de Pascua fue introducido por inmigrantes alemanes y es ahora una tradicion navidena chilena indispensable.',
      'La Navidad en Chile a menudo alcanza los 30C+, haciendo que las celebraciones junto a la piscina y en la playa sean comunes.',
      'El Viejo Pascuero es la version chilena de Papa Noel — el nombre significa "Viejo de Pascua."',
      'Muchas familias chilenas cenan tan tarde como las 23h el 24 de diciembre, abriendo los regalos a medianoche.',
    ],
  },

  planningChecklist: {
    en: [
      'Buy or bake Pan de Pascua early — it takes time to prepare properly',
      'Make cola de mono ahead of time — it improves after a day or two in the fridge',
      'Plan your Nochebuena dinner menu with turkey, chicken, or traditional Chilean dishes',
      'Book beach or lake district accommodation well ahead for the summer holiday',
      'Prepare for summer heat — have plenty of cold drinks and sunscreen ready',
    ],
    fr: [
      'Acheter ou preparer le Pan de Pascua tot — la preparation prend du temps',
      'Faire la cola de mono a l\'avance — elle s\'ameliore apres un jour ou deux au refrigerateur',
      'Planifier le menu de Nochebuena avec dinde, poulet ou plats chiliens traditionnels',
      'Reserver l\'hebergement a la plage ou dans la region des lacs bien a l\'avance',
      'Se preparer pour la chaleur estivale — boissons fraiches et creme solaire',
    ],
    es: [
      'Comprar o preparar Pan de Pascua temprano — la preparacion toma tiempo',
      'Hacer cola de mono con anticipacion — mejora despues de un dia o dos en el refrigerador',
      'Planificar el menu de Nochebuena con pavo, pollo o platos chilenos tradicionales',
      'Reservar alojamiento en la playa o la region de los lagos con mucha anticipacion para las vacaciones de verano',
      'Prepararse para el calor de verano — tener muchas bebidas frias y protector solar',
    ],
  },

  relatedHolidays: ['cl_new-years-day', 'cl_fiestas-patrias'],

  seo: {
    en: {
      titleTemplate: 'Christmas Day {year} Chile — Countdown & Traditions',
      descriptionTemplate: 'Christmas {year} in Chile. Pan de Pascua, cola de mono, Viejo Pascuero, and summer Christmas celebration guide.',
      keywords: ['Christmas Chile', 'Navidad Chile', 'Pan de Pascua', 'cola de mono', 'Chilean Christmas traditions'],
    },
    fr: {
      titleTemplate: 'Noel {year} Chili — Compte a rebours et traditions',
      descriptionTemplate: 'Noel {year} au Chili. Pan de Pascua, cola de mono, Viejo Pascuero et guide.',
      keywords: ['Noel Chili', 'Navidad Chili', 'Pan de Pascua', 'cola de mono', 'traditions Noel Chili'],
    },
    es: {
      titleTemplate: 'Navidad {year} Chile — Cuenta regresiva y tradiciones',
      descriptionTemplate: 'Navidad {year} en Chile. Pan de Pascua, cola de mono, Viejo Pascuero y guia de celebracion.',
      keywords: ['Navidad Chile', 'Pan de Pascua', 'cola de mono', 'Viejo Pascuero', 'feriados Chile'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in Chile?', fr: 'Quand est Noel {year} au Chili ?', es: 'Cuando es Navidad {year} en Chile?' },
      answer: {
        en: 'Christmas {year} in Chile is on {date}. It is always December 25 and falls during summer in the Southern Hemisphere.',
        fr: 'Noel {year} au Chili est le {date}. C\'est toujours le 25 decembre et cela tombe en ete dans l\'hemisphere sud.',
        es: 'La Navidad {year} en Chile es el {date}. Siempre es el 25 de diciembre y cae en verano en el hemisferio sur.',
      },
    },
    {
      question: { en: 'What is cola de mono?', fr: 'Qu\'est-ce que la cola de mono ?', es: 'Que es la cola de mono?' },
      answer: {
        en: 'Cola de mono ("monkey\'s tail") is a traditional Chilean Christmas drink made with aguardiente or pisco, coffee, milk, sugar, cinnamon, and cloves. It is served cold and is the quintessential drink of Chilean Christmas celebrations.',
        fr: 'La cola de mono est une boisson de Noel chilienne traditionnelle faite avec de l\'aguardiente ou du pisco, du cafe, du lait, du sucre, de la cannelle et des clous de girofle.',
        es: 'La cola de mono es una bebida navidena tradicional chilena hecha con aguardiente o pisco, cafe, leche, azucar, canela y clavo de olor. Se sirve fria y es la bebida por excelencia de las celebraciones navidenas chilenas.',
      },
    },
    {
      question: { en: 'What is Pan de Pascua?', fr: 'Qu\'est-ce que le Pan de Pascua ?', es: 'Que es el Pan de Pascua?' },
      answer: {
        en: 'Pan de Pascua is a traditional Chilean Christmas fruit bread similar to German Stollen or Italian panettone. It is made with candied fruits, nuts, ginger, and spices, and is enjoyed with hot chocolate or cola de mono.',
        fr: 'Le Pan de Pascua est un pain de Noel chilien traditionnel similaire au Stollen allemand, fait avec des fruits confits, des noix et des epices.',
        es: 'El Pan de Pascua es un pan de Navidad tradicional chileno similar al Stollen aleman o al panettone italiano. Se hace con frutas confitadas, nueces, jengibre y especias, y se disfruta con chocolate caliente o cola de mono.',
      },
    },
    {
      question: { en: 'Who is the Viejo Pascuero?', fr: 'Qui est le Viejo Pascuero ?', es: 'Quien es el Viejo Pascuero?' },
      answer: {
        en: 'The Viejo Pascuero ("Old Christmas Man") is Chile\'s version of Santa Claus. He delivers gifts to children at midnight on December 24. Despite the summer heat, he is depicted in the traditional red suit.',
        fr: 'Le Viejo Pascuero est la version chilienne du Pere Noel. Il apporte les cadeaux a minuit le 24 decembre. Malgre la chaleur estivale, il est represente en tenue rouge traditionnelle.',
        es: 'El Viejo Pascuero ("Viejo de Pascua") es la version chilena de Papa Noel. Entrega regalos a los ninos a medianoche el 24 de diciembre. A pesar del calor del verano, se lo representa con el traje rojo tradicional.',
      },
    },
  ],

  colorTheme: 'christmas',
  icon: '\ud83c\udf84',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const clHolidays: HolidayData[] = [
  newYearsDay,
  goodFriday,
  labourDay,
  navyDay,
  fiestasPatrias,
  christmas,
];

export default clHolidays;
