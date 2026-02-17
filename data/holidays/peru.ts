/**
 * Peru holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getHolyThursday } from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'pe_new-years-day',
  countryCode: 'pe',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'ano-nuevo' },
  names: { en: "New Year's Day", fr: 'Jour de l\'An', es: 'Ano Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 is a national holiday in Peru, celebrated with family gatherings, fireworks, and a variety of unique Peruvian superstitions and traditions. The celebrations are vibrant across the country, with Lima's Plaza Mayor and Miraflores boardwalk hosting major public festivities.",
    fr: "Le Jour de l'An, le 1er janvier, est un jour ferie national au Perou, celebre avec des reunions familiales, des feux d'artifice et une variete de superstitions et traditions peruviennes uniques. Les celebrations sont vibrantes a travers le pays.",
    es: 'El Ano Nuevo, el 1 de enero, es un feriado nacional en Peru, celebrado con reuniones familiares, fuegos artificiales y una variedad de supersticiones y tradiciones peruanas unicas. Las celebraciones son vibrantes en todo el pais, con la Plaza Mayor de Lima y el malecon de Miraflores como sedes de las principales festividades publicas.',
  },

  history: {
    en: "New Year's celebrations in Peru blend Catholic traditions with indigenous Andean customs and modern superstitions. The burning of effigies (munecos) at midnight is one of Peru's most distinctive traditions, similar to Ecuador and Colombia but with distinctly Peruvian character.\n\nIn the Andes, Quechua and Aymara communities combine New Year's festivities with rituals honoring Pachamama (Mother Earth) and offerings for a prosperous year ahead. The tradition of yellow — wearing yellow clothing and carrying yellow flowers — is perhaps more prominent in Peru than anywhere else in Latin America.\n\nLima's coastal location provides a spectacular backdrop for fireworks over the Pacific Ocean, with the Costa Verde cliffs and Miraflores district being prime viewing locations.",
    fr: "Les celebrations du Nouvel An au Perou melangent les traditions catholiques avec les coutumes indigenes andines et les superstitions modernes. La cremation d'effigies (munecos) a minuit est l'une des traditions les plus distinctives du Perou.\n\nDans les Andes, les communautes quechuas et aymaras combinent les festivites du Nouvel An avec des rituels en l'honneur de Pachamama (la Terre-Mere). La tradition du jaune est peut-etre plus importante au Perou que partout ailleurs en Amerique latine.\n\nLa situation cotiere de Lima offre un cadre spectaculaire pour les feux d'artifice sur l'ocean Pacifique.",
    es: "Las celebraciones de Ano Nuevo en Peru mezclan tradiciones catolicas con costumbres indigenas andinas y supersticiones modernas. La quema de munecos a medianoche es una de las tradiciones mas distintivas del Peru, similar a Ecuador y Colombia pero con caracter distintivamente peruano.\n\nEn los Andes, las comunidades quechuas y aymaras combinan las festividades de Ano Nuevo con rituales en honor a la Pachamama (Madre Tierra) y ofrendas para un ano prospero. La tradicion del amarillo — usar ropa amarilla y llevar flores amarillas — es quizas mas prominente en Peru que en cualquier otro lugar de America Latina.\n\nLa ubicacion costera de Lima proporciona un espectacular telon de fondo para los fuegos artificiales sobre el oceano Pacifico, con los acantilados de la Costa Verde y el distrito de Miraflores como los mejores lugares de observacion.",
  },

  traditions: {
    en: [
      'Burning munecos (effigies) at midnight to represent the old year',
      'Wearing yellow underwear and clothing for good luck and prosperity',
      'Eating 12 grapes at midnight while making 12 wishes',
      'Walking around the block with a suitcase for travel in the new year',
      'Watching fireworks over the Pacific Ocean from Lima\'s Costa Verde',
      'Gathering for a family cena de fin de ano (New Year\'s Eve dinner)',
    ],
    fr: [
      'Bruler des munecos (effigies) a minuit pour representer l\'ancienne annee',
      'Porter des sous-vetements et vetements jaunes pour la chance et la prosperite',
      'Manger 12 raisins a minuit en faisant 12 voeux',
      'Faire le tour du pate de maisons avec une valise pour voyager dans la nouvelle annee',
      'Regarder les feux d\'artifice sur l\'ocean Pacifique depuis la Costa Verde de Lima',
      'Se reunir pour un diner de fin d\'annee (cena de fin de ano) en famille',
    ],
    es: [
      'Quemar munecos a medianoche para representar el ano viejo',
      'Usar ropa interior y ropa amarilla para la buena suerte y prosperidad',
      'Comer 12 uvas a medianoche mientras se piden 12 deseos',
      'Dar la vuelta a la manzana con una maleta para viajar en el nuevo ano',
      'Ver fuegos artificiales sobre el oceano Pacifico desde la Costa Verde de Lima',
      'Reunirse para una cena de fin de ano familiar',
    ],
  },

  funFacts: {
    en: [
      'Peru sells more yellow underwear per capita during December than almost any other country in the world.',
      'The burning of munecos in Peru often includes effigies of politicians and unpopular public figures.',
      'In some Andean communities, the new year is welcomed with rituals that predate Spanish colonization by centuries.',
      'Lima\'s Miraflores district hosts one of South America\'s most spectacular fireworks displays over the Pacific.',
      'Some Peruvians place coins under their pillow on New Year\'s Eve for financial prosperity.',
    ],
    fr: [
      'Le Perou vend plus de sous-vetements jaunes par habitant en decembre que presque tout autre pays au monde.',
      'La cremation de munecos au Perou inclut souvent des effigies de politiciens et de personnalites impopulaires.',
      'Dans certaines communautes andines, la nouvelle annee est accueillie avec des rituels anterieurs a la colonisation espagnole.',
      'Le quartier de Miraflores a Lima accueille l\'un des plus spectaculaires feux d\'artifice sur le Pacifique.',
      'Certains Peruviens placent des pieces sous leur oreiller pour la prosperite financiere.',
    ],
    es: [
      'Peru vende mas ropa interior amarilla per capita en diciembre que casi cualquier otro pais del mundo.',
      'La quema de munecos en Peru a menudo incluye efigies de politicos y figuras publicas impopulares.',
      'En algunas comunidades andinas, el ano nuevo se recibe con rituales que preceden la colonizacion espanola por siglos.',
      'El distrito de Miraflores en Lima alberga uno de los espectaculos de fuegos artificiales mas espectaculares sobre el Pacifico en Sudamerica.',
      'Algunos peruanos colocan monedas bajo la almohada en Nochevieja para la prosperidad financiera.',
    ],
  },

  planningChecklist: {
    en: [
      'Buy yellow underwear and clothing well before December 31 — they sell out fast',
      'Purchase grapes, munecos, and fireworks from local vendors',
      'Reserve a restaurant or plan your cena de fin de ano menu',
      'Find a good viewing spot for fireworks at Miraflores or Costa Verde',
      'Plan transportation as streets are closed for celebrations in many areas',
    ],
    fr: [
      'Acheter des sous-vetements et vetements jaunes bien avant le 31 decembre',
      'Acheter des raisins, des munecos et des feux d\'artifice chez les vendeurs locaux',
      'Reserver un restaurant ou planifier le menu de la cena de fin de ano',
      'Trouver un bon endroit pour les feux d\'artifice a Miraflores ou Costa Verde',
      'Planifier le transport car les rues sont fermees pour les celebrations',
    ],
    es: [
      'Comprar ropa interior y ropa amarilla con antelacion — se agotan rapido',
      'Comprar uvas, munecos y fuegos artificiales de vendedores locales',
      'Reservar restaurante o planificar el menu de la cena de fin de ano',
      'Encontrar un buen lugar para ver los fuegos artificiales en Miraflores o la Costa Verde',
      'Planificar el transporte ya que las calles se cierran para las celebraciones en muchas zonas',
    ],
  },

  relatedHolidays: ['pe_christmas', 'pe_independence-day'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Peru — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in Peru? Live countdown, traditions, munecos, and celebration guide.",
      keywords: ["New Year Peru", 'Ano Nuevo Peru', 'Peru New Year traditions', 'Lima New Year', 'Peru holidays'],
    },
    fr: {
      titleTemplate: 'Jour de l\'An {year} Perou — Compte a rebours et guide',
      descriptionTemplate: 'Quand est le Jour de l\'An {year} au Perou ? Compte a rebours, traditions et guide.',
      keywords: ['Nouvel An Perou', 'Ano Nuevo Perou', 'traditions Perou', 'Lima Nouvel An', 'jours feries Perou'],
    },
    es: {
      titleTemplate: 'Ano Nuevo {year} Peru — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Ano Nuevo {year} en Peru? Cuenta regresiva en vivo, tradiciones, munecos y guia.',
      keywords: ['Ano Nuevo Peru', 'tradiciones Ano Nuevo Peru', 'Lima Ano Nuevo', 'feriados Peru', 'celebraciones Peru'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in Peru?", fr: 'Quand est le Jour de l\'An {year} au Perou ?', es: 'Cuando es el Ano Nuevo {year} en Peru?' },
      answer: {
        en: "New Year's Day {year} in Peru is on {date}. It is always January 1 and is a national public holiday.",
        fr: 'Le Jour de l\'An {year} au Perou est le {date}. C\'est toujours le 1er janvier et c\'est un jour ferie national.',
        es: 'El Ano Nuevo {year} en Peru es el {date}. Siempre es el 1 de enero y es feriado nacional.',
      },
    },
    {
      question: { en: 'Why do Peruvians wear yellow on New Year?', fr: 'Pourquoi les Peruviens portent-ils du jaune au Nouvel An ?', es: 'Por que los peruanos usan amarillo en Ano Nuevo?' },
      answer: {
        en: 'Yellow is believed to attract good luck, prosperity, and positive energy in the new year. Peruvians wear yellow underwear, clothing, and even carry yellow flowers. The tradition is widespread across all social classes.',
        fr: 'Le jaune est cense attirer la chance, la prosperite et l\'energie positive. Les Peruviens portent des sous-vetements, des vetements jaunes et meme des fleurs jaunes.',
        es: 'Se cree que el amarillo atrae buena suerte, prosperidad y energia positiva en el nuevo ano. Los peruanos usan ropa interior amarilla, ropa amarilla e incluso llevan flores amarillas. La tradicion esta extendida en todas las clases sociales.',
      },
    },
    {
      question: { en: 'What are munecos in Peru?', fr: 'Que sont les munecos au Perou ?', es: 'Que son los munecos en Peru?' },
      answer: {
        en: 'Munecos are life-sized stuffed effigies that represent the old year. They are burned at midnight on December 31 to symbolize leaving behind negativity. They are often made to resemble politicians or unpopular figures.',
        fr: 'Les munecos sont des effigies en taille reelle qui representent l\'ancienne annee. Ils sont brules a minuit le 31 decembre pour symboliser l\'abandon de la negativite.',
        es: 'Los munecos son efigies de tamano real rellenas que representan el ano viejo. Se queman a medianoche el 31 de diciembre para simbolizar dejar atras la negatividad. A menudo se hacen parecidos a politicos o figuras impopulares.',
      },
    },
    {
      question: { en: 'Where are the best fireworks in Lima?', fr: 'Ou sont les meilleurs feux d\'artifice a Lima ?', es: 'Donde son los mejores fuegos artificiales en Lima?' },
      answer: {
        en: 'The best fireworks viewing in Lima is along the Costa Verde cliffs in Miraflores, where you can see fireworks from multiple districts over the Pacific Ocean. The Larcomar mall area and the Miraflores boardwalk (malecon) are prime spots.',
        fr: 'Les meilleurs feux d\'artifice a Lima se voient le long des falaises de la Costa Verde a Miraflores, avec vue sur le Pacifique.',
        es: 'Los mejores fuegos artificiales en Lima se ven a lo largo de los acantilados de la Costa Verde en Miraflores, donde se pueden ver fuegos artificiales de multiples distritos sobre el oceano Pacifico. La zona de Larcomar y el malecon de Miraflores son los mejores puntos.',
      },
    },
  ],

  colorTheme: 'new-year',
  icon: '\ud83c\udf86',
};

// ---------------------------------------------------------------------------
// Holy Thursday — Thursday before Easter
// ---------------------------------------------------------------------------

const holyThursday: HolidayData = {
  id: 'pe_holy-thursday',
  countryCode: 'pe',
  slugs: { en: 'holy-thursday', fr: 'jeudi-saint', es: 'jueves-santo' },
  names: { en: 'Holy Thursday', fr: 'Jeudi Saint', es: 'Jueves Santo' },

  dateType: 'calculated',
  calculateDate: getHolyThursday,

  descriptions: {
    en: "Holy Thursday (Jueves Santo) is a national holiday in Peru marking the beginning of the Easter Triduum. Peru's Holy Week celebrations are among the most elaborate in Latin America, with the processions in Ayacucho being famous worldwide for their scale and devotion.",
    fr: "Le Jeudi Saint (Jueves Santo) est un jour ferie national au Perou marquant le debut du Triduum pascal. Les celebrations de la Semaine Sainte au Perou sont parmi les plus elaborees d'Amerique latine, avec les processions d'Ayacucho celebres dans le monde entier.",
    es: "El Jueves Santo es un feriado nacional en Peru que marca el inicio del Triduo Pascual. Las celebraciones de Semana Santa en Peru son de las mas elaboradas de America Latina, con las procesiones de Ayacucho famosas mundialmente por su escala y devocion.",
  },

  history: {
    en: "Holy Week in Peru combines Catholic traditions brought by Spanish colonizers with indigenous Andean spiritual practices. The result is a uniquely syncretic celebration that has evolved over five centuries.\n\nAyacucho's Semana Santa is considered the most important religious celebration in Peru and one of the most impressive in all of Latin America. The celebrations span ten days and feature massive processions with ornate religious floats (andas) carried by hundreds of devotees through the city's colonial streets.\n\nThe tradition dates back to the earliest colonial period when Spanish missionaries used elaborate processions to teach Catholic doctrine to indigenous populations. Over time, Andean elements were incorporated, creating the distinctive Peruvian Holy Week that exists today.",
    fr: "La Semaine Sainte au Perou combine les traditions catholiques apportees par les colonisateurs espagnols avec les pratiques spirituelles andines indigenes. La Semana Santa d'Ayacucho est consideree comme la celebration religieuse la plus importante du Perou.\n\nLes celebrations s'etendent sur dix jours et comprennent des processions massives avec des chars religieux ornes (andas) portes par des centaines de devots. La tradition remonte aux premiers temps de la colonisation espagnole.",
    es: "La Semana Santa en Peru combina tradiciones catolicas traidas por los colonizadores espanoles con practicas espirituales andinas indigenas. El resultado es una celebracion sincretica unica que ha evolucionado durante cinco siglos.\n\nLa Semana Santa de Ayacucho es considerada la celebracion religiosa mas importante del Peru y una de las mas impresionantes de toda America Latina. Las celebraciones abarcan diez dias e incluyen procesiones masivas con andas religiosas ornamentadas cargadas por cientos de devotos por las calles coloniales de la ciudad.\n\nLa tradicion se remonta a los primeros tiempos coloniales cuando los misioneros espanoles usaban procesiones elaboradas para ensenar la doctrina catolica a las poblaciones indigenas. Con el tiempo, se incorporaron elementos andinos, creando la distintiva Semana Santa peruana que existe hoy.",
  },

  traditions: {
    en: [
      'Attending the massive processions in Ayacucho with elaborately decorated andas',
      'Visiting seven churches on Holy Thursday (Visita de las Siete Iglesias)',
      'Participating in the washing of feet ceremony at churches',
      'Creating elaborate alfombras (flower carpets) on processional routes',
      'Fasting and abstaining from meat',
      'Attending the Last Supper reenactment at churches',
      'Watching the release of condors tied to bulls in Andean communities',
    ],
    fr: [
      'Assister aux processions massives a Ayacucho avec des andas elaborement decorees',
      'Visiter sept eglises le Jeudi Saint (Visita de las Siete Iglesias)',
      'Participer a la ceremonie du lavement des pieds dans les eglises',
      'Creer des alfombras (tapis de fleurs) elaborees sur les parcours processionnels',
      'Jeuner et s\'abstenir de viande',
      'Assister a la reconstitution de la Cene dans les eglises',
      'Regarder le lacher de condors attaches a des taureaux dans les communautes andines',
    ],
    es: [
      'Asistir a las procesiones masivas en Ayacucho con andas elaboradamente decoradas',
      'Visitar siete iglesias el Jueves Santo (Visita de las Siete Iglesias)',
      'Participar en la ceremonia del lavado de pies en las iglesias',
      'Crear alfombras de flores elaboradas en las rutas procesionales',
      'Ayunar y abstenerse de comer carne',
      'Asistir a la recreacion de la Ultima Cena en las iglesias',
      'Ver la suelta de condores atados a toros en comunidades andinas',
    ],
  },

  funFacts: {
    en: [
      'Ayacucho\'s Semana Santa celebrations attract over 100,000 visitors to a city of only 180,000 residents.',
      'The andas (religious floats) in Ayacucho can weigh over 1,000 kg and require dozens of carriers.',
      'Peru\'s Holy Week combines Catholic imagery with pre-Columbian Andean traditions, creating a unique syncretic celebration.',
      'The flower carpets (alfombras) along procession routes can stretch for entire city blocks.',
      'In some Andean towns, a condor is symbolically tied to a bull during Holy Week, representing the clash between indigenous and Spanish cultures.',
    ],
    fr: [
      'La Semana Santa d\'Ayacucho attire plus de 100 000 visiteurs dans une ville de seulement 180 000 habitants.',
      'Les andas d\'Ayacucho peuvent peser plus de 1 000 kg et necessitent des dizaines de porteurs.',
      'La Semaine Sainte au Perou combine l\'imagerie catholique avec les traditions andines precolombiennes.',
      'Les tapis de fleurs le long des routes de procession peuvent s\'etendre sur des pates de maisons entieres.',
      'Dans certaines villes andines, un condor est symboliquement attache a un taureau pendant la Semaine Sainte.',
    ],
    es: [
      'La Semana Santa de Ayacucho atrae a mas de 100.000 visitantes a una ciudad de solo 180.000 habitantes.',
      'Las andas en Ayacucho pueden pesar mas de 1.000 kg y requieren docenas de cargadores.',
      'La Semana Santa de Peru combina imagineria catolica con tradiciones andinas precolombinas, creando una celebracion sincretica unica.',
      'Las alfombras de flores a lo largo de las rutas procesionales pueden extenderse por cuadras enteras.',
      'En algunos pueblos andinos, un condor se ata simbolicamente a un toro durante Semana Santa, representando el choque entre culturas indigenas y espanolas.',
    ],
  },

  planningChecklist: {
    en: [
      'Book accommodation in Ayacucho months in advance — it sells out for Semana Santa',
      'Arrange transportation to Ayacucho early (flights and buses fill up)',
      'Check the complete Semana Santa schedule as events span 10 days',
      'Plan meals considering that many restaurants have special Holy Week menus',
      'Bring sun protection and warm layers — Ayacucho is at 2,760m elevation',
    ],
    fr: [
      'Reserver un hebergement a Ayacucho des mois a l\'avance — tout est complet pour la Semana Santa',
      'Organiser le transport vers Ayacucho tot (vols et bus se remplissent)',
      'Verifier le programme complet de la Semana Santa car les evenements s\'etendent sur 10 jours',
      'Planifier les repas car de nombreux restaurants ont des menus speciaux de Semaine Sainte',
      'Apporter une protection solaire et des couches chaudes — Ayacucho est a 2 760 m d\'altitude',
    ],
    es: [
      'Reservar alojamiento en Ayacucho con meses de anticipacion — se agota para Semana Santa',
      'Organizar el transporte a Ayacucho temprano (vuelos y buses se llenan)',
      'Consultar el programa completo de Semana Santa ya que los eventos abarcan 10 dias',
      'Planificar las comidas considerando que muchos restaurantes tienen menus especiales de Semana Santa',
      'Llevar proteccion solar y capas abrigadas — Ayacucho esta a 2.760 m de altitud',
    ],
  },

  relatedHolidays: ['pe_christmas', 'pe_santa-rosa'],

  seo: {
    en: {
      titleTemplate: 'Holy Thursday {year} Peru — Countdown & Guide',
      descriptionTemplate: 'When is Holy Thursday {year} in Peru? Live countdown, Ayacucho Semana Santa info, processions, and guide.',
      keywords: ['Holy Thursday Peru', 'Jueves Santo Peru', 'Semana Santa Ayacucho', 'Peru Easter', 'Peru holidays'],
    },
    fr: {
      titleTemplate: 'Jeudi Saint {year} Perou — Compte a rebours et guide',
      descriptionTemplate: 'Quand est le Jeudi Saint {year} au Perou ? Compte a rebours, info Semana Santa Ayacucho et guide.',
      keywords: ['Jeudi Saint Perou', 'Semana Santa Ayacucho', 'Paques Perou', 'jours feries Perou', 'processions Perou'],
    },
    es: {
      titleTemplate: 'Jueves Santo {year} Peru — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Jueves Santo {year} en Peru? Cuenta regresiva, info de Semana Santa en Ayacucho y guia.',
      keywords: ['Jueves Santo Peru', 'Semana Santa Ayacucho', 'Semana Santa Peru', 'feriados Peru', 'procesiones Peru'],
    },
  },

  faq: [
    {
      question: { en: 'When is Holy Thursday {year} in Peru?', fr: 'Quand est le Jeudi Saint {year} au Perou ?', es: 'Cuando es el Jueves Santo {year} en Peru?' },
      answer: {
        en: 'Holy Thursday {year} in Peru falls on {date}. The date changes each year as it is based on the Easter calendar.',
        fr: 'Le Jeudi Saint {year} au Perou tombe le {date}. La date change chaque annee car elle est basee sur le calendrier pascal.',
        es: 'El Jueves Santo {year} en Peru cae el {date}. La fecha cambia cada ano ya que se basa en el calendario de Pascua.',
      },
    },
    {
      question: { en: 'What makes Ayacucho\'s Semana Santa special?', fr: 'Qu\'est-ce qui rend la Semana Santa d\'Ayacucho speciale ?', es: 'Que hace especial la Semana Santa de Ayacucho?' },
      answer: {
        en: 'Ayacucho\'s Semana Santa is considered the most important religious celebration in Peru, spanning 10 days with massive processions featuring ornate andas (religious floats) weighing over 1,000 kg. It blends Catholic and Andean traditions and attracts over 100,000 visitors.',
        fr: 'La Semana Santa d\'Ayacucho est consideree comme la celebration religieuse la plus importante du Perou, s\'etendant sur 10 jours avec des processions massives.',
        es: 'La Semana Santa de Ayacucho es considerada la celebracion religiosa mas importante del Peru, abarcando 10 dias con procesiones masivas con andas ornamentadas que pesan mas de 1.000 kg. Mezcla tradiciones catolicas y andinas y atrae mas de 100.000 visitantes.',
      },
    },
    {
      question: { en: 'Is Holy Thursday a public holiday in Peru?', fr: 'Le Jeudi Saint est-il un jour ferie au Perou ?', es: 'El Jueves Santo es feriado en Peru?' },
      answer: {
        en: 'Yes, Holy Thursday and Good Friday are both national public holidays in Peru. Many businesses close for the entire Holy Week, especially in cities with major celebrations like Ayacucho.',
        fr: 'Oui, le Jeudi Saint et le Vendredi Saint sont des jours feries nationaux au Perou. De nombreuses entreprises ferment pendant toute la Semaine Sainte.',
        es: 'Si, el Jueves Santo y el Viernes Santo son feriados nacionales en Peru. Muchos negocios cierran durante toda la Semana Santa, especialmente en ciudades con celebraciones importantes como Ayacucho.',
      },
    },
    {
      question: { en: 'What are andas in Peru?', fr: 'Que sont les andas au Perou ?', es: 'Que son las andas en Peru?' },
      answer: {
        en: 'Andas are elaborate religious floats used in Peruvian processions, particularly during Semana Santa. They carry statues of saints and the Virgin Mary, are richly decorated with flowers and candles, and can weigh over 1,000 kg, requiring dozens of devotees to carry them.',
        fr: 'Les andas sont des chars religieux elabores utilises dans les processions peruviennes, richement decores de fleurs et de bougies.',
        es: 'Las andas son elaboradas plataformas religiosas usadas en las procesiones peruanas, particularmente durante Semana Santa. Llevan estatuas de santos y la Virgen Maria, estan ricamente decoradas con flores y velas, y pueden pesar mas de 1.000 kg, requiriendo docenas de devotos para cargarlas.',
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
  id: 'pe_labour-day',
  countryCode: 'pe',
  slugs: { en: 'labour-day', fr: 'fete-du-travail', es: 'dia-del-trabajo' },
  names: { en: 'Labour Day', fr: 'Fete du Travail', es: 'Dia del Trabajo' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 1,

  descriptions: {
    en: "Labour Day on May 1 is a national holiday in Peru honoring workers and the labor movement. Marked by union marches, political rallies, and cultural events, it is a day to celebrate workers' contributions and advocate for better labor conditions.",
    fr: "La Fete du Travail, le 1er mai, est un jour ferie national au Perou en l'honneur des travailleurs et du mouvement ouvrier. Marquee par des marches syndicales, des rassemblements politiques et des evenements culturels.",
    es: "El Dia del Trabajo, el 1 de mayo, es un feriado nacional en Peru en honor a los trabajadores y al movimiento obrero. Marcado por marchas sindicales, mitines politicos y eventos culturales, es un dia para celebrar las contribuciones de los trabajadores y abogar por mejores condiciones laborales.",
  },

  history: {
    en: "Labour Day in Peru commemorates the international workers' movement and the struggle for the eight-hour workday. Peru's labor movement has deep historical roots, with significant milestones including the general strike of 1919 that won the eight-hour workday — one of the first countries in Latin America to achieve this.\n\nPeruvian labor leader and intellectual Jose Carlos Mariategui was instrumental in organizing workers and founding the General Confederation of Workers of Peru (CGTP) in 1929. His legacy continues to influence May 1 celebrations.\n\nThe day is marked by large marches through Lima's historic center, particularly along Avenida Abancay to the Plaza San Martin, where workers' organizations and unions gather for speeches and cultural events.",
    fr: "La Fete du Travail au Perou commemore le mouvement ouvrier international et la lutte pour la journee de huit heures. Le Perou fut l'un des premiers pays d'Amerique latine a obtenir la journee de huit heures apres la greve generale de 1919.\n\nJose Carlos Mariategui a joue un role essentiel dans l'organisation des travailleurs et la fondation de la CGTP en 1929.\n\nLe jour est marque par de grandes marches dans le centre historique de Lima.",
    es: "El Dia del Trabajo en Peru conmemora el movimiento obrero internacional y la lucha por la jornada de ocho horas. El movimiento laboral peruano tiene profundas raices historicas, con hitos significativos incluyendo la huelga general de 1919 que logro la jornada de ocho horas — uno de los primeros paises en America Latina en conseguirlo.\n\nEl lider laboral e intelectual peruano Jose Carlos Mariategui fue fundamental en la organizacion de los trabajadores y la fundacion de la Confederacion General de Trabajadores del Peru (CGTP) en 1929. Su legado sigue influyendo en las celebraciones del 1 de mayo.\n\nEl dia esta marcado por grandes marchas por el centro historico de Lima, particularmente por la Avenida Abancay hasta la Plaza San Martin, donde organizaciones de trabajadores y sindicatos se reunen para discursos y eventos culturales.",
  },

  traditions: {
    en: [
      'Union marches through Lima\'s historic center to the Plaza San Martin',
      'Political speeches and rallies advocating for workers\' rights',
      'Cultural events and concerts celebrating the labor movement',
      'Family gatherings and day trips for the day off',
      'Union and workers\' organization meetings and assemblies',
    ],
    fr: [
      'Marches syndicales dans le centre historique de Lima jusqu\'a la Plaza San Martin',
      'Discours politiques et rassemblements pour les droits des travailleurs',
      'Evenements culturels et concerts celebrant le mouvement ouvrier',
      'Reunions familiales et excursions pour le jour de conge',
      'Reunions et assemblees de syndicats et d\'organisations ouvrieres',
    ],
    es: [
      'Marchas sindicales por el centro historico de Lima hasta la Plaza San Martin',
      'Discursos politicos y mitines abogando por los derechos de los trabajadores',
      'Eventos culturales y conciertos celebrando el movimiento obrero',
      'Reuniones familiares y paseos para el dia libre',
      'Reuniones y asambleas de sindicatos y organizaciones de trabajadores',
    ],
  },

  funFacts: {
    en: [
      'Peru won the eight-hour workday in 1919, making it one of the first Latin American countries to achieve this milestone.',
      'Jose Carlos Mariategui, Peru\'s most influential Marxist thinker, founded the CGTP on May 1, 1929.',
      'Lima\'s May 1 march to the Plaza San Martin has been a tradition for over 100 years.',
      'Peru\'s informal economy employs roughly 70% of the workforce, making Labour Day a complex celebration.',
      'The eight-hour workday in Peru was established by presidential decree of President Jose Pardo.',
    ],
    fr: [
      'Le Perou a obtenu la journee de huit heures en 1919, faisant de lui l\'un des premiers pays d\'Amerique latine.',
      'Jose Carlos Mariategui a fonde la CGTP le 1er mai 1929.',
      'La marche du 1er mai a Lima vers la Plaza San Martin est une tradition de plus de 100 ans.',
      'L\'economie informelle du Perou emploie environ 70% de la main-d\'oeuvre.',
      'La journee de huit heures au Perou a ete etablie par decret presidentiel de Jose Pardo.',
    ],
    es: [
      'Peru logro la jornada de ocho horas en 1919, siendo uno de los primeros paises latinoamericanos en conseguir este hito.',
      'Jose Carlos Mariategui, el pensador marxista mas influyente del Peru, fundo la CGTP el 1 de mayo de 1929.',
      'La marcha del 1 de mayo en Lima hacia la Plaza San Martin es una tradicion de mas de 100 anos.',
      'La economia informal del Peru emplea aproximadamente al 70% de la fuerza laboral, lo que hace del Dia del Trabajo una celebracion compleja.',
      'La jornada de ocho horas en Peru fue establecida por decreto presidencial de Jose Pardo.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the route and schedule for May 1 marches in Lima or your city',
      'Plan for road closures in downtown Lima during the main march',
      'Be aware that banks, government offices, and most businesses will be closed',
      'Stock up on groceries the day before',
      'Plan family activities if not attending marches',
    ],
    fr: [
      'Verifier le parcours et le programme des marches du 1er mai',
      'Planifier les fermetures de routes au centre de Lima pendant la marche',
      'Savoir que les banques et la plupart des commerces seront fermes',
      'Faire les courses la veille',
      'Planifier des activites familiales si vous n\'assistez pas aux marches',
    ],
    es: [
      'Consultar la ruta y horario de las marchas del 1 de mayo en Lima o tu ciudad',
      'Planificar para los cierres de vias en el centro de Lima durante la marcha principal',
      'Tener en cuenta que bancos, oficinas gubernamentales y la mayoria de negocios estaran cerrados',
      'Hacer las compras el dia anterior',
      'Planificar actividades familiares si no van a las marchas',
    ],
  },

  relatedHolidays: ['pe_independence-day', 'pe_new-years-day'],

  seo: {
    en: {
      titleTemplate: 'Labour Day {year} Peru — Countdown & Info',
      descriptionTemplate: 'When is Labour Day {year} in Peru? Live countdown, workers\' rights history, and info.',
      keywords: ['Labour Day Peru', 'Dia del Trabajo Peru', 'May Day Peru', 'Peru public holidays', 'workers rights Peru'],
    },
    fr: {
      titleTemplate: 'Fete du Travail {year} Perou — Compte a rebours et info',
      descriptionTemplate: 'Quand est la Fete du Travail {year} au Perou ? Compte a rebours et info.',
      keywords: ['Fete du Travail Perou', '1er mai Perou', 'droits travailleurs Perou', 'jours feries Perou', 'feriados Peru'],
    },
    es: {
      titleTemplate: 'Dia del Trabajo {year} Peru — Cuenta regresiva e info',
      descriptionTemplate: 'Cuando es el Dia del Trabajo {year} en Peru? Cuenta regresiva e informacion.',
      keywords: ['Dia del Trabajo Peru', '1 de mayo Peru', 'derechos laborales Peru', 'feriados Peru', 'festivos Peru'],
    },
  },

  faq: [
    {
      question: { en: 'When is Labour Day {year} in Peru?', fr: 'Quand est la Fete du Travail {year} au Perou ?', es: 'Cuando es el Dia del Trabajo {year} en Peru?' },
      answer: {
        en: 'Labour Day {year} in Peru is on {date}. It is always May 1 and is a national public holiday.',
        fr: 'La Fete du Travail {year} au Perou est le {date}. C\'est toujours le 1er mai.',
        es: 'El Dia del Trabajo {year} en Peru es el {date}. Siempre es el 1 de mayo y es feriado nacional.',
      },
    },
    {
      question: { en: 'Is Labour Day a public holiday in Peru?', fr: 'La Fete du Travail est-elle un jour ferie au Perou ?', es: 'El Dia del Trabajo es feriado en Peru?' },
      answer: {
        en: 'Yes, May 1 is a national public holiday in Peru. Banks, government offices, and most businesses are closed. If it falls on a weekend, workers receive a paid day in lieu.',
        fr: 'Oui, le 1er mai est un jour ferie national au Perou. Les banques et la plupart des commerces sont fermes.',
        es: 'Si, el 1 de mayo es feriado nacional en Peru. Los bancos, oficinas gubernamentales y la mayoria de negocios estan cerrados. Si cae en fin de semana, los trabajadores reciben un dia compensatorio.',
      },
    },
    {
      question: { en: 'Who was Jose Carlos Mariategui?', fr: 'Qui etait Jose Carlos Mariategui ?', es: 'Quien fue Jose Carlos Mariategui?' },
      answer: {
        en: 'Jose Carlos Mariategui (1894-1930) was Peru\'s most influential left-wing intellectual and labor organizer. He founded the General Confederation of Workers of Peru (CGTP) and wrote the seminal "Seven Interpretive Essays on Peruvian Reality." His ideas shaped the Peruvian labor movement.',
        fr: 'Jose Carlos Mariategui (1894-1930) etait l\'intellectuel de gauche et organisateur syndical le plus influent du Perou.',
        es: 'Jose Carlos Mariategui (1894-1930) fue el intelectual de izquierda y organizador laboral mas influyente del Peru. Fundo la Confederacion General de Trabajadores del Peru (CGTP) y escribio los "7 Ensayos de Interpretacion de la Realidad Peruana." Sus ideas moldearon el movimiento obrero peruano.',
      },
    },
    {
      question: { en: 'When did Peru get the 8-hour workday?', fr: 'Quand le Perou a-t-il obtenu la journee de 8 heures ?', es: 'Cuando logro Peru la jornada de 8 horas?' },
      answer: {
        en: 'Peru achieved the eight-hour workday in January 1919 through a presidential decree by Jose Pardo, following a general strike. Peru was one of the first countries in Latin America to implement this reform.',
        fr: 'Le Perou a obtenu la journee de huit heures en janvier 1919 par un decret presidentiel de Jose Pardo, apres une greve generale.',
        es: 'Peru logro la jornada de ocho horas en enero de 1919 a traves de un decreto presidencial de Jose Pardo, luego de una huelga general. Peru fue uno de los primeros paises en America Latina en implementar esta reforma.',
      },
    },
  ],

  colorTheme: 'spring',
  icon: '\u2692\ufe0f',
};

// ---------------------------------------------------------------------------
// Independence Day — July 28
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'pe_independence-day',
  countryCode: 'pe',
  slugs: { en: 'independence-day', fr: 'jour-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Jour de l'Independance", es: 'Dia de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 7,
  fixedDay: 28,

  descriptions: {
    en: "Peru's Independence Day on July 28 celebrates the declaration of independence by Jose de San Martin in 1821. Known as Fiestas Patrias, it is the most important national holiday in Peru, celebrated over two days (July 28-29) with parades, patriotic ceremonies, traditional food, and national pride.",
    fr: "Le Jour de l'Independance du Perou, le 28 juillet, celebre la declaration d'independance par Jose de San Martin en 1821. Connue sous le nom de Fiestas Patrias, c'est la fete nationale la plus importante du Perou, celebree sur deux jours (28-29 juillet).",
    es: "El Dia de la Independencia del Peru, el 28 de julio, celebra la declaracion de independencia por Jose de San Martin en 1821. Conocido como Fiestas Patrias, es el feriado nacional mas importante del Peru, celebrado durante dos dias (28-29 de julio) con desfiles, ceremonias patrioticas, comida tradicional y orgullo nacional.",
  },

  history: {
    en: "On July 28, 1821, Argentine general Jose de San Martin declared Peru's independence in Lima's Plaza Mayor with the famous words: 'From this moment, Peru is free and independent, by the general will of the people and the justice of its cause that God defends.' The declaration came after San Martin's forces liberated Lima from Spanish control.\n\nHowever, the war for independence continued until 1824, when Simon Bolivar's forces decisively defeated the Spanish at the battles of Junin (August 6) and Ayacucho (December 9). These victories ended Spanish colonial rule in South America.\n\nFiestas Patrias is celebrated over two days: July 28 is the Day of Independence, and July 29 is the Day of the Armed Forces and National Police. The celebration is so important that many Peruvians take the entire last week of July off, known as 'semana patriotica.'",
    fr: "Le 28 juillet 1821, le general argentin Jose de San Martin a declare l'independance du Perou sur la Plaza Mayor de Lima. Cependant, la guerre d'independance a continue jusqu'en 1824, quand les forces de Simon Bolivar ont definitivement vaincu les Espagnols.\n\nLes Fiestas Patrias sont celebrees sur deux jours : le 28 juillet est le Jour de l'Independance et le 29 juillet est le Jour des Forces Armees.",
    es: "El 28 de julio de 1821, el general argentino Jose de San Martin declaro la independencia del Peru en la Plaza Mayor de Lima con las famosas palabras: 'Desde este momento, el Peru es libre e independiente, por la voluntad general de los pueblos y por la justicia de su causa que Dios defiende.' La declaracion llego despues de que las fuerzas de San Martin liberaran Lima del control espanol.\n\nSin embargo, la guerra por la independencia continuo hasta 1824, cuando las fuerzas de Simon Bolivar derrotaron decisivamente a los espanoles en las batallas de Junin (6 de agosto) y Ayacucho (9 de diciembre). Estas victorias pusieron fin al dominio colonial espanol en Sudamerica.\n\nLas Fiestas Patrias se celebran durante dos dias: el 28 de julio es el Dia de la Independencia y el 29 de julio es el Dia de las Fuerzas Armadas y la Policia Nacional. La celebracion es tan importante que muchos peruanos toman toda la ultima semana de julio libre, conocida como 'semana patriotica.'",
  },

  traditions: {
    en: [
      'Watching the presidential address to Congress and flag-raising at the Palacio de Gobierno',
      'Attending the Gran Parada Militar (Great Military Parade) on July 29',
      'Eating traditional dishes like ceviche, causa, papa a la huancaina, and anticuchos',
      'Flying the Peruvian flag on homes, cars, and businesses (required by law)',
      'Watching patriotic programs and concerts on television',
      'Gathering with family for festive meals and celebrations',
      'Attending concerts and festivals in public plazas',
    ],
    fr: [
      'Regarder le discours presidentiel au Congres et le lever du drapeau au Palacio de Gobierno',
      'Assister a la Gran Parada Militar le 29 juillet',
      'Manger des plats traditionnels comme le ceviche, la causa et les anticuchos',
      'Afficher le drapeau peruvien sur les maisons, voitures et commerces (obligatoire par la loi)',
      'Regarder des programmes patriotiques et concerts a la television',
      'Se reunir en famille pour des repas festifs',
      'Assister a des concerts et festivals sur les places publiques',
    ],
    es: [
      'Ver el mensaje presidencial al Congreso y el izamiento de bandera en el Palacio de Gobierno',
      'Asistir a la Gran Parada Militar el 29 de julio',
      'Comer platos tradicionales como ceviche, causa, papa a la huancaina y anticuchos',
      'Colocar la bandera peruana en casas, autos y negocios (obligatorio por ley)',
      'Ver programas patrioticos y conciertos por television',
      'Reunirse en familia para comidas festivas y celebraciones',
      'Asistir a conciertos y festivales en plazas publicas',
    ],
  },

  funFacts: {
    en: [
      'It is legally required to display the Peruvian flag during Fiestas Patrias — failing to do so can result in a fine.',
      'Jose de San Martin, who declared Peru\'s independence, was Argentine — not Peruvian.',
      'The Gran Parada Militar on July 29 features all branches of Peru\'s armed forces and is one of the largest military parades in South America.',
      'Many Peruvians take the entire last week of July off, calling it "semana patriotica" (patriotic week).',
      'Peru\'s independence declaration referenced God\'s defense of the cause — reflecting the deeply Catholic character of the independence movement.',
    ],
    fr: [
      'Il est legalement obligatoire d\'afficher le drapeau peruvien pendant les Fiestas Patrias.',
      'Jose de San Martin, qui a declare l\'independance du Perou, etait argentin — pas peruvien.',
      'La Gran Parada Militar du 29 juillet est l\'un des plus grands defiles militaires d\'Amerique du Sud.',
      'De nombreux Peruviens prennent toute la derniere semaine de juillet, appelant cela "semana patriotica."',
      'La declaration d\'independance du Perou faisait reference a la defense de Dieu, refletant le caractere catholique du mouvement.',
    ],
    es: [
      'Es legalmente obligatorio colocar la bandera peruana durante Fiestas Patrias — no hacerlo puede resultar en una multa.',
      'Jose de San Martin, quien declaro la independencia del Peru, era argentino — no peruano.',
      'La Gran Parada Militar del 29 de julio presenta todas las ramas de las fuerzas armadas del Peru y es uno de los mayores desfiles militares de Sudamerica.',
      'Muchos peruanos toman toda la ultima semana de julio libre, llamandola "semana patriotica."',
      'La declaracion de independencia del Peru hizo referencia a la defensa de Dios sobre la causa — reflejando el caracter profundamente catolico del movimiento independentista.',
    ],
  },

  planningChecklist: {
    en: [
      'Display the Peruvian flag on your home — it is legally required during Fiestas Patrias',
      'Plan your Fiestas Patrias menu with traditional Peruvian dishes',
      'Book travel early if going on vacation — the "semana patriotica" is peak travel',
      'Find a good viewing spot for the Gran Parada Militar on July 29',
      'Watch the presidential address to Congress on July 28',
    ],
    fr: [
      'Afficher le drapeau peruvien — c\'est legalement obligatoire pendant les Fiestas Patrias',
      'Planifier le menu de Fiestas Patrias avec des plats peruviens traditionnels',
      'Reserver les voyages tot — la "semana patriotica" est une haute saison',
      'Trouver un bon emplacement pour la Gran Parada Militar le 29 juillet',
      'Regarder le discours presidentiel au Congres le 28 juillet',
    ],
    es: [
      'Colocar la bandera peruana en la casa — es legalmente obligatorio durante Fiestas Patrias',
      'Planificar el menu de Fiestas Patrias con platos tradicionales peruanos',
      'Reservar viajes temprano si van de vacaciones — la "semana patriotica" es temporada alta',
      'Encontrar un buen lugar para ver la Gran Parada Militar el 29 de julio',
      'Ver el mensaje presidencial al Congreso el 28 de julio',
    ],
  },

  relatedHolidays: ['pe_santa-rosa', 'pe_new-years-day'],

  seo: {
    en: {
      titleTemplate: 'Independence Day {year} Peru — Countdown & Guide',
      descriptionTemplate: 'Peru Independence Day {year} on July 28. Fiestas Patrias history, Gran Parada Militar, traditions, and guide.',
      keywords: ['Peru Independence Day', 'Fiestas Patrias', 'July 28 Peru', '28 de julio Peru', 'Peru holidays'],
    },
    fr: {
      titleTemplate: 'Jour de l\'Independance {year} Perou — Compte a rebours',
      descriptionTemplate: 'Jour de l\'Independance du Perou {year} le 28 juillet. Fiestas Patrias, Gran Parada Militar et guide.',
      keywords: ['Independance Perou', 'Fiestas Patrias', '28 juillet Perou', 'feries Perou', 'feriados Peru'],
    },
    es: {
      titleTemplate: 'Dia de la Independencia {year} Peru — Cuenta regresiva',
      descriptionTemplate: 'Dia de la Independencia del Peru {year} el 28 de julio. Fiestas Patrias, Gran Parada Militar, tradiciones y guia.',
      keywords: ['Dia de la Independencia Peru', 'Fiestas Patrias', '28 de julio Peru', 'feriados Peru', 'Gran Parada Militar'],
    },
  },

  faq: [
    {
      question: { en: 'When is Independence Day {year} in Peru?', fr: 'Quand est le Jour de l\'Independance {year} au Perou ?', es: 'Cuando es el Dia de la Independencia {year} en Peru?' },
      answer: {
        en: 'Peru\'s Independence Day {year} is on {date}. Fiestas Patrias spans two days: July 28 (Independence Day) and July 29 (Day of the Armed Forces).',
        fr: 'Le Jour de l\'Independance du Perou {year} est le {date}. Les Fiestas Patrias s\'etendent sur deux jours : le 28 et le 29 juillet.',
        es: 'El Dia de la Independencia del Peru {year} es el {date}. Las Fiestas Patrias abarcan dos dias: el 28 de julio (Dia de la Independencia) y el 29 de julio (Dia de las Fuerzas Armadas).',
      },
    },
    {
      question: { en: 'Who declared Peru\'s independence?', fr: 'Qui a declare l\'independance du Perou ?', es: 'Quien declaro la independencia del Peru?' },
      answer: {
        en: 'Jose de San Martin, an Argentine general, declared Peru\'s independence on July 28, 1821 in Lima\'s Plaza Mayor. He led the liberation of southern South America before turning his attention to Peru.',
        fr: 'Jose de San Martin, un general argentin, a declare l\'independance du Perou le 28 juillet 1821 sur la Plaza Mayor de Lima.',
        es: 'Jose de San Martin, un general argentino, declaro la independencia del Peru el 28 de julio de 1821 en la Plaza Mayor de Lima. Lidero la liberacion del sur de Sudamerica antes de dirigir su atencion al Peru.',
      },
    },
    {
      question: { en: 'What is the Gran Parada Militar?', fr: 'Qu\'est-ce que la Gran Parada Militar ?', es: 'Que es la Gran Parada Militar?' },
      answer: {
        en: 'The Gran Parada Militar (Great Military Parade) takes place on July 29 along Avenida Brasil in Lima. All branches of Peru\'s armed forces participate, and the President reviews the troops. It is one of the largest military parades in South America.',
        fr: 'La Gran Parada Militar a lieu le 29 juillet le long de l\'Avenida Brasil a Lima. Toutes les branches des forces armees participent.',
        es: 'La Gran Parada Militar se realiza el 29 de julio a lo largo de la Avenida Brasil en Lima. Todas las ramas de las fuerzas armadas del Peru participan, y el Presidente pasa revista a las tropas. Es uno de los mayores desfiles militares de Sudamerica.',
      },
    },
    {
      question: { en: 'Do you have to fly the flag during Fiestas Patrias?', fr: 'Faut-il arborer le drapeau pendant les Fiestas Patrias ?', es: 'Hay que poner la bandera durante Fiestas Patrias?' },
      answer: {
        en: 'Yes. Peruvian law requires all homes and businesses to display the national flag during Fiestas Patrias (July 28-29). Failure to comply can technically result in a fine, though enforcement varies.',
        fr: 'Oui. La loi peruvienne exige que toutes les maisons et entreprises affichent le drapeau national pendant les Fiestas Patrias.',
        es: 'Si. La ley peruana exige que todas las casas y negocios coloquen la bandera nacional durante Fiestas Patrias (28-29 de julio). No cumplir puede tecnicamente resultar en una multa, aunque la aplicacion varia.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '\ud83c\uddf5\ud83c\uddea',
};

// ---------------------------------------------------------------------------
// Santa Rosa de Lima — August 30
// ---------------------------------------------------------------------------

const santaRosa: HolidayData = {
  id: 'pe_santa-rosa',
  countryCode: 'pe',
  slugs: { en: 'santa-rosa-de-lima', fr: 'sainte-rose-de-lima', es: 'santa-rosa-de-lima' },
  names: { en: 'Santa Rosa de Lima', fr: 'Sainte Rose de Lima', es: 'Santa Rosa de Lima' },

  dateType: 'fixed',
  fixedMonth: 8,
  fixedDay: 30,

  descriptions: {
    en: "Santa Rosa de Lima Day on August 30 is a national holiday in Peru honoring the patron saint of Lima, the Americas, and the Philippines. Born Isabel Flores de Oliva in 1586, she was the first person born in the Americas to be canonized by the Catholic Church.",
    fr: "La Sainte Rose de Lima, le 30 aout, est un jour ferie national au Perou en l'honneur de la patronne de Lima, des Ameriques et des Philippines. Nee Isabel Flores de Oliva en 1586, elle fut la premiere personne nee dans les Ameriques a etre canonisee.",
    es: "El dia de Santa Rosa de Lima, el 30 de agosto, es un feriado nacional en Peru en honor a la patrona de Lima, de las Americas y de las Filipinas. Nacida como Isabel Flores de Oliva en 1586, fue la primera persona nacida en las Americas en ser canonizada por la Iglesia Catolica.",
  },

  history: {
    en: "Isabel Flores de Oliva was born in Lima on April 20, 1586, to a Spanish colonial family. She took the name Rosa after her confirmation and devoted her life to prayer, fasting, and caring for the sick and poor. She was known for extreme penances and mystical experiences, and was said to have performed miracles.\n\nSanta Rosa died on August 24, 1617, at the age of 31. She was beatified by Pope Clement IX in 1667 and canonized by Pope Clement X on April 12, 1671, becoming the first saint born in the New World.\n\nHer feast day is celebrated on August 30 in Peru (and several other countries). The Sanctuary of Santa Rosa in Lima, built on the site of her birth, is a major pilgrimage destination. Thousands of devotees visit the pozo de los deseos (well of wishes) to drop letters with prayers and wishes.",
    fr: "Isabel Flores de Oliva est nee a Lima le 20 avril 1586. Elle a pris le nom de Rosa et a consacre sa vie a la priere, au jeune et aux soins des malades et des pauvres. Elle a ete canonisee en 1671, devenant la premiere sainte nee dans le Nouveau Monde.\n\nSa fete est celebree le 30 aout au Perou. Le Sanctuaire de Santa Rosa a Lima est un lieu de pelerinage important.",
    es: "Isabel Flores de Oliva nacio en Lima el 20 de abril de 1586, en una familia colonial espanola. Tomo el nombre de Rosa tras su confirmacion y dedico su vida a la oracion, el ayuno y el cuidado de los enfermos y pobres. Fue conocida por penitencias extremas y experiencias misticas, y se dice que realizo milagros.\n\nSanta Rosa murio el 24 de agosto de 1617, a los 31 anos. Fue beatificada por el Papa Clemente IX en 1667 y canonizada por el Papa Clemente X el 12 de abril de 1671, convirtiendose en la primera santa nacida en el Nuevo Mundo.\n\nSu dia se celebra el 30 de agosto en Peru. El Santuario de Santa Rosa en Lima, construido en el lugar de su nacimiento, es un importante destino de peregrinacion. Miles de devotos visitan el pozo de los deseos para depositar cartas con oraciones y deseos.",
  },

  traditions: {
    en: [
      'Visiting the Sanctuary of Santa Rosa in Lima',
      'Dropping letters with wishes and prayers into the pozo de los deseos (well of wishes)',
      'Attending Mass in honor of Santa Rosa',
      'Pilgrimages to churches and shrines dedicated to the saint',
      'Preparing traditional Peruvian dishes for the day off',
    ],
    fr: [
      'Visiter le Sanctuaire de Santa Rosa a Lima',
      'Deposer des lettres avec des voeux et des prieres dans le pozo de los deseos (puits des voeux)',
      'Assister a la messe en l\'honneur de Sainte Rose',
      'Pelerinages vers les eglises et sanctuaires dedies a la sainte',
      'Preparer des plats peruviens traditionnels pour le jour de conge',
    ],
    es: [
      'Visitar el Santuario de Santa Rosa en Lima',
      'Depositar cartas con deseos y oraciones en el pozo de los deseos',
      'Asistir a misa en honor a Santa Rosa',
      'Peregrinaciones a iglesias y santuarios dedicados a la santa',
      'Preparar platos peruanos tradicionales para el dia libre',
    ],
  },

  funFacts: {
    en: [
      'Santa Rosa is the patron saint of Lima, all of the Americas, the Philippines, and India.',
      'She was the first person born in the Americas to be canonized — in 1671.',
      'Thousands of letters are dropped into the pozo de los deseos at her sanctuary each year.',
      'Santa Rosa was said to have grown such beautiful roses that her face appeared to have a rose-like glow, earning her name.',
      'Her feast day is a national holiday not only in Peru but also in several other Latin American countries.',
    ],
    fr: [
      'Sainte Rose est la patronne de Lima, de toutes les Ameriques, des Philippines et de l\'Inde.',
      'Elle fut la premiere personne nee dans les Ameriques a etre canonisee — en 1671.',
      'Des milliers de lettres sont deposees dans le pozo de los deseos chaque annee.',
      'On dit que Santa Rosa faisait pousser de si belles roses que son visage semblait avoir un eclat de rose.',
      'Sa fete est un jour ferie national non seulement au Perou mais aussi dans d\'autres pays latino-americains.',
    ],
    es: [
      'Santa Rosa es la patrona de Lima, de todas las Americas, de las Filipinas y de la India.',
      'Fue la primera persona nacida en las Americas en ser canonizada — en 1671.',
      'Miles de cartas se depositan en el pozo de los deseos en su santuario cada ano.',
      'Se dice que Santa Rosa cultivaba rosas tan hermosas que su rostro parecia tener un resplandor rosado, ganandose su nombre.',
      'Su dia es feriado nacional no solo en Peru sino tambien en varios otros paises latinoamericanos.',
    ],
  },

  planningChecklist: {
    en: [
      'Visit the Sanctuary of Santa Rosa de Lima and the pozo de los deseos',
      'Write a letter with your wishes and prayers to drop in the well',
      'Attend Mass at a local church honoring Santa Rosa',
      'Learn about the life and legacy of Peru\'s first saint',
      'Plan a family meal for the day off',
    ],
    fr: [
      'Visiter le Sanctuaire de Sainte Rose de Lima et le pozo de los deseos',
      'Ecrire une lettre avec vos voeux et prieres pour le puits',
      'Assister a la messe dans une eglise locale en l\'honneur de Sainte Rose',
      'Decouvrir la vie et l\'heritage de la premiere sainte du Perou',
      'Planifier un repas familial pour le jour de conge',
    ],
    es: [
      'Visitar el Santuario de Santa Rosa de Lima y el pozo de los deseos',
      'Escribir una carta con deseos y oraciones para depositar en el pozo',
      'Asistir a misa en una iglesia local en honor a Santa Rosa',
      'Conocer la vida y legado de la primera santa del Peru',
      'Planificar una comida familiar para el dia libre',
    ],
  },

  relatedHolidays: ['pe_independence-day', 'pe_holy-thursday'],

  seo: {
    en: {
      titleTemplate: 'Santa Rosa de Lima Day {year} — Countdown & Guide',
      descriptionTemplate: 'Santa Rosa de Lima Day {year} on August 30. History, traditions, pozo de los deseos, and celebration guide.',
      keywords: ['Santa Rosa de Lima', 'August 30 Peru', 'patron saint Lima', 'Peru saints', 'Peru holidays'],
    },
    fr: {
      titleTemplate: 'Sainte Rose de Lima {year} — Compte a rebours et guide',
      descriptionTemplate: 'Sainte Rose de Lima {year} le 30 aout. Histoire, traditions, pozo de los deseos et guide.',
      keywords: ['Sainte Rose de Lima', '30 aout Perou', 'patronne Lima', 'saints Perou', 'jours feries Perou'],
    },
    es: {
      titleTemplate: 'Santa Rosa de Lima {year} — Cuenta regresiva y guia',
      descriptionTemplate: 'Dia de Santa Rosa de Lima {year} el 30 de agosto. Historia, tradiciones, pozo de los deseos y guia.',
      keywords: ['Santa Rosa de Lima', '30 de agosto Peru', 'patrona Lima', 'santos Peru', 'feriados Peru'],
    },
  },

  faq: [
    {
      question: { en: 'When is Santa Rosa de Lima Day {year}?', fr: 'Quand est la Sainte Rose de Lima {year} ?', es: 'Cuando es el dia de Santa Rosa de Lima {year}?' },
      answer: {
        en: 'Santa Rosa de Lima Day {year} is on {date}. It is always August 30.',
        fr: 'Le jour de Sainte Rose de Lima {year} est le {date}. C\'est toujours le 30 aout.',
        es: 'El dia de Santa Rosa de Lima {year} es el {date}. Siempre es el 30 de agosto.',
      },
    },
    {
      question: { en: 'Who was Santa Rosa de Lima?', fr: 'Qui etait Sainte Rose de Lima ?', es: 'Quien fue Santa Rosa de Lima?' },
      answer: {
        en: 'Santa Rosa de Lima (1586-1617), born Isabel Flores de Oliva, was a Peruvian saint who became the first person born in the Americas to be canonized by the Catholic Church in 1671. She is the patron saint of Lima, the Americas, and the Philippines.',
        fr: 'Sainte Rose de Lima (1586-1617), nee Isabel Flores de Oliva, fut la premiere personne nee dans les Ameriques a etre canonisee en 1671.',
        es: 'Santa Rosa de Lima (1586-1617), nacida como Isabel Flores de Oliva, fue una santa peruana que se convirtio en la primera persona nacida en las Americas en ser canonizada por la Iglesia Catolica en 1671. Es la patrona de Lima, las Americas y las Filipinas.',
      },
    },
    {
      question: { en: 'What is the pozo de los deseos?', fr: 'Qu\'est-ce que le pozo de los deseos ?', es: 'Que es el pozo de los deseos?' },
      answer: {
        en: 'The pozo de los deseos (well of wishes) is located at the Sanctuary of Santa Rosa in Lima. Thousands of devotees visit each year to drop letters containing their prayers and wishes into the well, believing that Santa Rosa will intercede on their behalf.',
        fr: 'Le pozo de los deseos est situe au Sanctuaire de Sainte Rose a Lima. Des milliers de devots le visitent chaque annee pour y deposer des lettres contenant leurs prieres et voeux.',
        es: 'El pozo de los deseos esta ubicado en el Santuario de Santa Rosa en Lima. Miles de devotos lo visitan cada ano para depositar cartas con sus oraciones y deseos, creyendo que Santa Rosa intercede por ellos.',
      },
    },
    {
      question: { en: 'Is Santa Rosa de Lima Day a public holiday?', fr: 'Le jour de Sainte Rose de Lima est-il un jour ferie ?', es: 'El dia de Santa Rosa de Lima es feriado?' },
      answer: {
        en: 'Yes, August 30 (Santa Rosa de Lima) is a national public holiday in Peru. Banks, government offices, and most businesses are closed.',
        fr: 'Oui, le 30 aout est un jour ferie national au Perou.',
        es: 'Si, el 30 de agosto (Santa Rosa de Lima) es feriado nacional en Peru. Los bancos, oficinas gubernamentales y la mayoria de negocios estan cerrados.',
      },
    },
  ],

  colorTheme: 'spring',
  icon: '\ud83c\udf39',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'pe_christmas',
  countryCode: 'pe',
  slugs: { en: 'christmas-day', fr: 'jour-de-noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Jour de Noel', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: "Christmas Day on December 25 is a major national holiday in Peru. Known as Navidad, it is celebrated with chocolate caliente (hot chocolate), paneton (Peruvian panettone), elaborate nativity scenes, and the tradition of opening gifts at midnight on Nochebuena (Christmas Eve).",
    fr: "Le Jour de Noel, le 25 decembre, est un jour ferie national majeur au Perou. Connu sous le nom de Navidad, il est celebre avec du chocolate caliente, du paneton, des creches elaborees et la tradition d'ouvrir les cadeaux a minuit a Nochebuena.",
    es: "La Navidad, el 25 de diciembre, es un feriado nacional importante en Peru. Se celebra con chocolate caliente, paneton (panettone peruano), nacimientos elaborados y la tradicion de abrir los regalos a medianoche en Nochebuena.",
  },

  history: {
    en: "Christmas in Peru is a deeply Catholic celebration introduced by Spanish colonizers in the 16th century. Over the centuries, it absorbed indigenous Andean traditions, creating a uniquely Peruvian holiday. The nativity scene (nacimiento) is central to Peruvian Christmas, with families creating elaborate displays that often include Peruvian elements like llamas, Andean villages, and traditional clothing.\n\nPaneton (Peruvian panettone) was introduced by Italian immigrants and has become the quintessential Peruvian Christmas food, consumed in enormous quantities with hot chocolate. Peru is now one of the world's largest per capita consumers of panettone.\n\nThe midnight celebration on Nochebuena is the highlight, with families gathering for dinner, attending Misa de Gallo (Midnight Mass), and opening gifts at midnight.",
    fr: "Noel au Perou est une celebration profondement catholique introduite par les colonisateurs espagnols au XVIe siecle. Le nacimiento (creche) est central au Noel peruvien.\n\nLe paneton a ete introduit par les immigrants italiens et est devenu l'aliment de Noel par excellence au Perou. Le Perou est l'un des plus grands consommateurs par habitant de panettone au monde.",
    es: "La Navidad en Peru es una celebracion profundamente catolica introducida por los colonizadores espanoles en el siglo XVI. A lo largo de los siglos, absorbi tradiciones andinas indigenas, creando una festividad unicamente peruana. El nacimiento es central en la Navidad peruana, con familias creando elaboradas representaciones que a menudo incluyen elementos peruanos como llamas, pueblos andinos y vestimenta tradicional.\n\nEl paneton fue introducido por inmigrantes italianos y se ha convertido en la comida navidena por excelencia del Peru, consumido en enormes cantidades con chocolate caliente. Peru es ahora uno de los mayores consumidores per capita de panettone en el mundo.\n\nLa celebracion de medianoche en Nochebuena es el punto culminante, con familias reuniendose para cenar, asistiendo a la Misa de Gallo, y abriendo regalos a medianoche.",
  },

  traditions: {
    en: [
      'Creating elaborate nacimientos (nativity scenes) with Peruvian elements',
      'Drinking chocolate caliente (hot chocolate) with paneton on Christmas Eve',
      'Attending Misa de Gallo (Midnight Mass)',
      'Opening gifts at midnight on Nochebuena (December 24)',
      'Eating a festive dinner of turkey, tamales, and arroz con leche',
      'Setting off fireworks at midnight',
      'Visiting the elaborate nativity scenes at churches and public buildings',
    ],
    fr: [
      'Creer des nacimientos elabores avec des elements peruviens',
      'Boire du chocolate caliente avec du paneton a la veille de Noel',
      'Assister a la Misa de Gallo (Messe de Minuit)',
      'Ouvrir les cadeaux a minuit a Nochebuena (24 decembre)',
      'Manger un diner festif de dinde, tamales et arroz con leche',
      'Lancer des feux d\'artifice a minuit',
      'Visiter les creches elaborees des eglises et batiments publics',
    ],
    es: [
      'Crear nacimientos elaborados con elementos peruanos',
      'Tomar chocolate caliente con paneton en Nochebuena',
      'Asistir a la Misa de Gallo',
      'Abrir los regalos a medianoche en Nochebuena (24 de diciembre)',
      'Comer una cena festiva de pavo, tamales y arroz con leche',
      'Lanzar fuegos artificiales a medianoche',
      'Visitar los nacimientos elaborados en iglesias y edificios publicos',
    ],
  },

  funFacts: {
    en: [
      'Peru is one of the world\'s largest consumers of panettone per capita, consuming over 40 million units each Christmas season.',
      'Peruvian nacimientos often include llamas, Andean mountains, and figures in traditional Peruvian clothing alongside biblical characters.',
      'The Santurantikuy market in Cusco, held on December 24, is one of the most famous Christmas markets in the Americas, selling handcrafted nativity figures.',
      'In many Andean communities, Christmas celebrations incorporate pre-Columbian traditions and offerings to Pachamama.',
      'Papa Noel delivers gifts at midnight on December 24 in Peru, not on Christmas morning.',
    ],
    fr: [
      'Le Perou est l\'un des plus grands consommateurs de panettone per capita, consommant plus de 40 millions d\'unites chaque saison de Noel.',
      'Les nacimientos peruviens incluent souvent des lamas, des montagnes andines et des figures en vetements traditionnels peruviens.',
      'Le marche Santurantikuy a Cusco, le 24 decembre, est l\'un des marches de Noel les plus celebres des Ameriques.',
      'Dans de nombreuses communautes andines, les celebrations de Noel incorporent des traditions precolombiennes.',
      'Papa Noel livre les cadeaux a minuit le 24 decembre au Perou, pas le matin de Noel.',
    ],
    es: [
      'Peru es uno de los mayores consumidores de paneton per capita del mundo, consumiendo mas de 40 millones de unidades cada temporada navidena.',
      'Los nacimientos peruanos a menudo incluyen llamas, montanas andinas y figuras en vestimenta tradicional peruana junto a personajes biblicos.',
      'La feria del Santurantikuy en Cusco, celebrada el 24 de diciembre, es uno de los mercados navidenos mas famosos de las Americas, vendiendo figuras de nacimiento artesanales.',
      'En muchas comunidades andinas, las celebraciones navidenas incorporan tradiciones precolombinas y ofrendas a la Pachamama.',
      'Papa Noel entrega los regalos a medianoche el 24 de diciembre en Peru, no en la manana de Navidad.',
    ],
  },

  planningChecklist: {
    en: [
      'Buy paneton early — popular brands sell out fast in December',
      'Set up your nacimiento (nativity scene) in early December',
      'Stock up on chocolate caliente ingredients for the family',
      'Plan your Nochebuena dinner menu with turkey, tamales, or traditional dishes',
      'Visit the Santurantikuy market in Cusco if traveling to the region',
    ],
    fr: [
      'Acheter du paneton tot — les marques populaires s\'epuisent vite en decembre',
      'Installer le nacimiento (creche) en debut decembre',
      'Se procurer les ingredients pour le chocolate caliente',
      'Planifier le menu de Nochebuena avec dinde, tamales ou plats traditionnels',
      'Visiter le marche Santurantikuy a Cusco si vous voyagez dans la region',
    ],
    es: [
      'Comprar paneton temprano — las marcas populares se agotan rapido en diciembre',
      'Armar el nacimiento a principios de diciembre',
      'Conseguir ingredientes para el chocolate caliente',
      'Planificar el menu de Nochebuena con pavo, tamales o platos tradicionales',
      'Visitar la feria del Santurantikuy en Cusco si viajan a la region',
    ],
  },

  relatedHolidays: ['pe_new-years-day', 'pe_santa-rosa'],

  seo: {
    en: {
      titleTemplate: 'Christmas Day {year} Peru — Countdown & Traditions',
      descriptionTemplate: 'Christmas {year} in Peru. Paneton, chocolate caliente, nacimientos, Nochebuena traditions, and celebration guide.',
      keywords: ['Christmas Peru', 'Navidad Peru', 'paneton Peru', 'Peruvian Christmas traditions', 'Nochebuena Peru'],
    },
    fr: {
      titleTemplate: 'Noel {year} Perou — Compte a rebours et traditions',
      descriptionTemplate: 'Noel {year} au Perou. Paneton, chocolate caliente, nacimientos et guide.',
      keywords: ['Noel Perou', 'Navidad Perou', 'paneton', 'traditions Noel Perou', 'Nochebuena Perou'],
    },
    es: {
      titleTemplate: 'Navidad {year} Peru — Cuenta regresiva y tradiciones',
      descriptionTemplate: 'Navidad {year} en Peru. Paneton, chocolate caliente, nacimientos, tradiciones de Nochebuena y guia.',
      keywords: ['Navidad Peru', 'paneton Peru', 'tradiciones navidenas peruanas', 'Nochebuena Peru', 'feriados Peru'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in Peru?', fr: 'Quand est Noel {year} au Perou ?', es: 'Cuando es Navidad {year} en Peru?' },
      answer: {
        en: 'Christmas {year} in Peru is on {date}. It is always December 25, though the main celebration is on Nochebuena (December 24).',
        fr: 'Noel {year} au Perou est le {date}. C\'est toujours le 25 decembre, bien que la celebration principale soit la Nochebuena (24 decembre).',
        es: 'La Navidad {year} en Peru es el {date}. Siempre es el 25 de diciembre, aunque la celebracion principal es Nochebuena (24 de diciembre).',
      },
    },
    {
      question: { en: 'What is paneton?', fr: 'Qu\'est-ce que le paneton ?', es: 'Que es el paneton?' },
      answer: {
        en: 'Paneton is the Peruvian version of Italian panettone — a sweet bread with dried fruits and sometimes chocolate chips. It is the quintessential Peruvian Christmas food, consumed with hot chocolate. Peru is one of the world\'s largest consumers of panettone per capita.',
        fr: 'Le paneton est la version peruvienne du panettone italien — un pain sucre avec des fruits secs. Le Perou est l\'un des plus grands consommateurs de panettone per capita.',
        es: 'El paneton es la version peruana del panettone italiano — un pan dulce con frutas secas y a veces chispas de chocolate. Es la comida navidena peruana por excelencia, consumida con chocolate caliente. Peru es uno de los mayores consumidores de panettone per capita del mundo.',
      },
    },
    {
      question: { en: 'What is Santurantikuy?', fr: 'Qu\'est-ce que le Santurantikuy ?', es: 'Que es el Santurantikuy?' },
      answer: {
        en: 'Santurantikuy is a famous Christmas market held on December 24 in Cusco\'s Plaza de Armas. The name means "sale of saints" in Quechua. Artisans sell handcrafted nativity figures, ornaments, and traditional Andean crafts. It is one of the most important Christmas markets in the Americas.',
        fr: 'Le Santurantikuy est un celebre marche de Noel tenu le 24 decembre sur la Plaza de Armas de Cusco. Le nom signifie "vente de saints" en quechua.',
        es: 'El Santurantikuy es una famosa feria navidena celebrada el 24 de diciembre en la Plaza de Armas de Cusco. El nombre significa "venta de santos" en quechua. Los artesanos venden figuras de nacimiento artesanales, adornos y artesanias andinas tradicionales. Es uno de los mercados navidenos mas importantes de las Americas.',
      },
    },
    {
      question: { en: 'What is a Peruvian nacimiento?', fr: 'Qu\'est-ce qu\'un nacimiento peruvien ?', es: 'Que es un nacimiento peruano?' },
      answer: {
        en: 'A Peruvian nacimiento is a nativity scene that uniquely blends biblical characters with Peruvian elements such as llamas, Andean landscapes, and figures wearing traditional Peruvian clothing. Families create increasingly elaborate displays each year.',
        fr: 'Un nacimiento peruvien est une creche qui melange les personnages bibliques avec des elements peruviens comme des lamas, des paysages andins et des figures en vetements traditionnels.',
        es: 'Un nacimiento peruano es un belen que mezcla de manera unica personajes biblicos con elementos peruanos como llamas, paisajes andinos y figuras con vestimenta tradicional peruana. Las familias crean representaciones cada vez mas elaboradas cada ano.',
      },
    },
  ],

  colorTheme: 'christmas',
  icon: '\ud83c\udf84',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const peHolidays: HolidayData[] = [
  newYearsDay,
  holyThursday,
  labourDay,
  independenceDay,
  santaRosa,
  christmas,
];

export default peHolidays;
