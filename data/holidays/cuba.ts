/**
 * Cuba holidays data.
 */

import type { HolidayData } from '@/lib/types';

// ---------------------------------------------------------------------------
// Liberation Day — January 1
// ---------------------------------------------------------------------------

const liberationDay: HolidayData = {
  id: 'cu_liberation-day',
  countryCode: 'cu',
  slugs: { en: 'liberation-day', fr: 'jour-de-la-liberation', es: 'dia-de-la-liberacion' },
  names: { en: 'Liberation Day', fr: 'Jour de la Lib\u00e9ration', es: 'D\u00eda de la Liberaci\u00f3n' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "Liberation Day on January 1 marks the Triumph of the Revolution in 1959, when Fidel Castro's forces overthrew the Batista dictatorship. It is Cuba's most significant national holiday, celebrating the dawn of a new political era.",
    fr: "Le Jour de la Lib\u00e9ration, le 1er janvier, marque le Triomphe de la R\u00e9volution en 1959, lorsque les forces de Fidel Castro renvers\u00e8rent la dictature de Batista. C'est la f\u00eate nationale la plus importante de Cuba, c\u00e9l\u00e9brant l'aube d'une nouvelle \u00e8re politique.",
    es: 'El D\u00eda de la Liberaci\u00f3n, el 1 de enero, marca el Triunfo de la Revoluci\u00f3n en 1959, cuando las fuerzas de Fidel Castro derrocaron la dictadura de Batista. Es la fiesta nacional m\u00e1s significativa de Cuba, celebrando el amanecer de una nueva era pol\u00edtica.',
  },

  history: {
    en: "On January 1, 1959, dictator Fulgencio Batista fled Cuba as Fidel Castro's revolutionary forces swept to power. The Cuban Revolution, which began with the attack on the Moncada Barracks in 1953 and continued with guerrilla warfare in the Sierra Maestra mountains, reached its triumphant conclusion.\n\nCastro and his guerrilla army, including Che Guevara, had waged a years-long campaign that captured the imagination of the Cuban people. Batista's regime collapsed rapidly in the final weeks of 1958, and by New Year's Day 1959, the revolution was victorious.\n\nThe date is commemorated annually with political rallies, speeches, and cultural events across the island. It represents the birth of modern Cuba and remains the defining moment of the nation's contemporary identity.",
    fr: "Le 1er janvier 1959, le dictateur Fulgencio Batista s'enfuit de Cuba alors que les forces r\u00e9volutionnaires de Fidel Castro prenaient le pouvoir. La R\u00e9volution cubaine, qui commen\u00e7a par l'attaque de la caserne Moncada en 1953 et se poursuivit par une gu\u00e9rilla dans les montagnes de la Sierra Maestra, atteignit sa conclusion triomphante.\n\nCastro et son arm\u00e9e de gu\u00e9rilleros, dont Che Guevara, avaient men\u00e9 une campagne de plusieurs ann\u00e9es qui captiva l'imagination du peuple cubain. Le r\u00e9gime de Batista s'effondra rapidement dans les derni\u00e8res semaines de 1958, et le jour de l'An 1959, la r\u00e9volution \u00e9tait victorieuse.\n\nCette date est comm\u00e9mor\u00e9e chaque ann\u00e9e par des rassemblements politiques, des discours et des \u00e9v\u00e9nements culturels \u00e0 travers l'\u00eele. Elle repr\u00e9sente la naissance de la Cuba moderne et reste le moment d\u00e9terminant de l'identit\u00e9 contemporaine de la nation.",
    es: "El 1 de enero de 1959, el dictador Fulgencio Batista huy\u00f3 de Cuba mientras las fuerzas revolucionarias de Fidel Castro tomaban el poder. La Revoluci\u00f3n Cubana, que comenz\u00f3 con el ataque al Cuartel Moncada en 1953 y continu\u00f3 con la guerra de guerrillas en las monta\u00f1as de la Sierra Maestra, alcanz\u00f3 su triunfante conclusi\u00f3n.\n\nCastro y su ej\u00e9rcito guerrillero, incluyendo al Che Guevara, hab\u00edan librado una campa\u00f1a de a\u00f1os que captur\u00f3 la imaginaci\u00f3n del pueblo cubano. El r\u00e9gimen de Batista colaps\u00f3 r\u00e1pidamente en las \u00faltimas semanas de 1958, y para el D\u00eda de A\u00f1o Nuevo de 1959, la revoluci\u00f3n era victoriosa.\n\nLa fecha se conmemora anualmente con m\u00edtines pol\u00edticos, discursos y eventos culturales en toda la isla. Representa el nacimiento de la Cuba moderna y sigue siendo el momento definitorio de la identidad contempor\u00e1nea de la naci\u00f3n.",
  },

  traditions: {
    en: [
      'Attending rallies and political speeches at public squares',
      'Watching military parades and cultural performances',
      'Gathering with family for festive meals',
      'Listening to revolutionary songs and patriotic music',
      'Displaying Cuban flags and revolutionary imagery',
      'Watching historical documentaries and films about the revolution',
    ],
    fr: [
      'Assister \u00e0 des rassemblements et discours politiques sur les places publiques',
      'Regarder des d\u00e9fil\u00e9s militaires et des spectacles culturels',
      'Se r\u00e9unir en famille pour des repas festifs',
      '\u00c9couter des chansons r\u00e9volutionnaires et de la musique patriotique',
      'Afficher des drapeaux cubains et des images r\u00e9volutionnaires',
      'Regarder des documentaires et films historiques sur la r\u00e9volution',
    ],
    es: [
      'Asistir a m\u00edtines y discursos pol\u00edticos en plazas p\u00fablicas',
      'Ver desfiles militares y presentaciones culturales',
      'Reunirse en familia para comidas festivas',
      'Escuchar canciones revolucionarias y m\u00fasica patri\u00f3tica',
      'Exhibir banderas cubanas e im\u00e1genes revolucionarias',
      'Ver documentales y pel\u00edculas hist\u00f3ricas sobre la revoluci\u00f3n',
    ],
  },

  funFacts: {
    en: [
      'Batista fled Cuba at 3 AM on January 1, 1959, reportedly taking $300 million with him.',
      'Fidel Castro did not arrive in Havana until January 8, 1959 \u2014 a week after Batista fled.',
      'Che Guevara captured the city of Santa Clara on December 31, 1958, which helped trigger Batista\'s flight.',
      'January 1 in Cuba serves both as New Year\'s Day and Liberation Day, doubling the celebration.',
      'The Cuban Revolution was one of the defining events of the Cold War era in Latin America.',
    ],
    fr: [
      'Batista s\'enfuit de Cuba \u00e0 3 heures du matin le 1er janvier 1959, emportant selon les rapports 300 millions de dollars.',
      'Fidel Castro n\'arriva \u00e0 La Havane que le 8 janvier 1959 \u2014 une semaine apr\u00e8s la fuite de Batista.',
      'Che Guevara prit la ville de Santa Clara le 31 d\u00e9cembre 1958, ce qui contribua \u00e0 d\u00e9clencher la fuite de Batista.',
      'Le 1er janvier \u00e0 Cuba sert \u00e0 la fois de Jour de l\'An et de Jour de la Lib\u00e9ration, doublant la c\u00e9l\u00e9bration.',
      'La R\u00e9volution cubaine fut l\'un des \u00e9v\u00e9nements d\u00e9terminants de la Guerre froide en Am\u00e9rique latine.',
    ],
    es: [
      'Batista huy\u00f3 de Cuba a las 3 de la madrugada del 1 de enero de 1959, llev\u00e1ndose supuestamente 300 millones de d\u00f3lares.',
      'Fidel Castro no lleg\u00f3 a La Habana hasta el 8 de enero de 1959, una semana despu\u00e9s de la huida de Batista.',
      'El Che Guevara captur\u00f3 la ciudad de Santa Clara el 31 de diciembre de 1958, lo que ayud\u00f3 a provocar la huida de Batista.',
      'El 1 de enero en Cuba sirve tanto como D\u00eda de A\u00f1o Nuevo como D\u00eda de la Liberaci\u00f3n, duplicando la celebraci\u00f3n.',
      'La Revoluci\u00f3n Cubana fue uno de los eventos definitorios de la era de la Guerra Fr\u00eda en Am\u00e9rica Latina.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan to attend public celebrations and rallies in major Cuban cities',
      'Learn about the history of the Cuban Revolution before visiting',
      'Prepare for large crowds in Havana\'s Plaza de la Revoluci\u00f3n',
      'Book accommodation early as January 1 is the peak of holiday season',
      'Bring a camera to capture the parades and festivities',
    ],
    fr: [
      'Pr\u00e9voir d\'assister aux c\u00e9l\u00e9brations et rassemblements publics dans les grandes villes cubaines',
      'Se renseigner sur l\'histoire de la R\u00e9volution cubaine avant de visiter',
      'Se pr\u00e9parer \u00e0 de grandes foules sur la Plaza de la Revoluci\u00f3n de La Havane',
      'R\u00e9server un h\u00e9bergement t\u00f4t car le 1er janvier est le pic de la saison des f\u00eates',
      'Apporter un appareil photo pour capturer les d\u00e9fil\u00e9s et festivit\u00e9s',
    ],
    es: [
      'Planear asistir a celebraciones y m\u00edtines p\u00fablicos en las principales ciudades cubanas',
      'Aprender sobre la historia de la Revoluci\u00f3n Cubana antes de visitar',
      'Prepararse para grandes multitudes en la Plaza de la Revoluci\u00f3n de La Habana',
      'Reservar alojamiento con anticipaci\u00f3n ya que el 1 de enero es el pico de la temporada festiva',
      'Llevar una c\u00e1mara para capturar los desfiles y festividades',
    ],
  },

  relatedHolidays: ['cu_victory-day', 'cu_rebellion-day'],

  seo: {
    en: {
      titleTemplate: 'Cuba Liberation Day {year} \u2014 Triumph of the Revolution Countdown',
      descriptionTemplate: 'When is Cuba Liberation Day {year}? Live countdown to January 1, history of the Cuban Revolution, and celebration guide.',
      keywords: ['Cuba Liberation Day', 'Triumph of the Revolution', 'January 1 Cuba', 'Cuban Revolution', 'Fidel Castro'],
    },
    fr: {
      titleTemplate: 'Jour de la Lib\u00e9ration de Cuba {year} \u2014 Compte \u00e0 rebours du Triomphe de la R\u00e9volution',
      descriptionTemplate: 'Quand est le Jour de la Lib\u00e9ration de Cuba {year} ? Compte \u00e0 rebours, histoire de la R\u00e9volution cubaine et guide de c\u00e9l\u00e9bration.',
      keywords: ['Jour de la Lib\u00e9ration Cuba', 'Triomphe de la R\u00e9volution', '1er janvier Cuba', 'R\u00e9volution cubaine', 'Fidel Castro'],
    },
    es: {
      titleTemplate: 'D\u00eda de la Liberaci\u00f3n de Cuba {year} \u2014 Cuenta regresiva del Triunfo de la Revoluci\u00f3n',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda de la Liberaci\u00f3n de Cuba {year}? Cuenta regresiva, historia de la Revoluci\u00f3n Cubana y gu\u00eda de celebraci\u00f3n.',
      keywords: ['D\u00eda de la Liberaci\u00f3n Cuba', 'Triunfo de la Revoluci\u00f3n', '1 de enero Cuba', 'Revoluci\u00f3n Cubana', 'Fidel Castro'],
    },
  },

  faq: [
    {
      question: { en: 'When is Cuba Liberation Day {year}?', fr: 'Quand est le Jour de la Lib\u00e9ration de Cuba {year} ?', es: '\u00bfCu\u00e1ndo es el D\u00eda de la Liberaci\u00f3n de Cuba {year}?' },
      answer: {
        en: 'Cuba Liberation Day {year} is on {date}. It is always January 1, marking the anniversary of the Triumph of the Revolution in 1959.',
        fr: "Le Jour de la Lib\u00e9ration de Cuba {year} est le {date}. C'est toujours le 1er janvier, marquant l'anniversaire du Triomphe de la R\u00e9volution en 1959.",
        es: 'El D\u00eda de la Liberaci\u00f3n de Cuba {year} es el {date}. Siempre es el 1 de enero, marcando el aniversario del Triunfo de la Revoluci\u00f3n en 1959.',
      },
    },
    {
      question: { en: 'What happened on January 1, 1959 in Cuba?', fr: "Que s'est-il pass\u00e9 le 1er janvier 1959 \u00e0 Cuba ?", es: '\u00bfQu\u00e9 sucedi\u00f3 el 1 de enero de 1959 en Cuba?' },
      answer: {
        en: 'On January 1, 1959, dictator Fulgencio Batista fled Cuba as Fidel Castro\'s revolutionary forces took control of the country, ending years of dictatorship and beginning the Cuban revolutionary government.',
        fr: "Le 1er janvier 1959, le dictateur Fulgencio Batista s'enfuit de Cuba alors que les forces r\u00e9volutionnaires de Fidel Castro prenaient le contr\u00f4le du pays, mettant fin \u00e0 des ann\u00e9es de dictature et inaugurant le gouvernement r\u00e9volutionnaire cubain.",
        es: 'El 1 de enero de 1959, el dictador Fulgencio Batista huy\u00f3 de Cuba mientras las fuerzas revolucionarias de Fidel Castro tomaban el control del pa\u00eds, poniendo fin a a\u00f1os de dictadura e iniciando el gobierno revolucionario cubano.',
      },
    },
    {
      question: { en: 'How is Liberation Day celebrated in Cuba?', fr: 'Comment c\u00e9l\u00e8bre-t-on le Jour de la Lib\u00e9ration \u00e0 Cuba ?', es: '\u00bfC\u00f3mo se celebra el D\u00eda de la Liberaci\u00f3n en Cuba?' },
      answer: {
        en: 'Liberation Day is celebrated with political rallies, speeches by government leaders, military parades, cultural performances, and family gatherings. It serves as both a revolutionary commemoration and a New Year\'s celebration.',
        fr: "Le Jour de la Lib\u00e9ration est c\u00e9l\u00e9br\u00e9 avec des rassemblements politiques, des discours de dirigeants gouvernementaux, des d\u00e9fil\u00e9s militaires, des spectacles culturels et des r\u00e9unions familiales. Il sert \u00e0 la fois de comm\u00e9moration r\u00e9volutionnaire et de c\u00e9l\u00e9bration du Nouvel An.",
        es: 'El D\u00eda de la Liberaci\u00f3n se celebra con m\u00edtines pol\u00edticos, discursos de l\u00edderes gubernamentales, desfiles militares, presentaciones culturales y reuniones familiares. Sirve tanto como conmemoraci\u00f3n revolucionaria como celebraci\u00f3n de A\u00f1o Nuevo.',
      },
    },
    {
      question: { en: 'Is Liberation Day a public holiday in Cuba?', fr: 'Le Jour de la Lib\u00e9ration est-il un jour f\u00e9ri\u00e9 \u00e0 Cuba ?', es: '\u00bfEs el D\u00eda de la Liberaci\u00f3n un d\u00eda festivo en Cuba?' },
      answer: {
        en: 'Yes, January 1 is one of the most important public holidays in Cuba. All government offices, schools, and most businesses are closed.',
        fr: "Oui, le 1er janvier est l'un des jours f\u00e9ri\u00e9s les plus importants de Cuba. Tous les bureaux gouvernementaux, \u00e9coles et la plupart des entreprises sont ferm\u00e9s.",
        es: 'S\u00ed, el 1 de enero es uno de los d\u00edas festivos m\u00e1s importantes de Cuba. Todas las oficinas gubernamentales, escuelas y la mayor\u00eda de los negocios est\u00e1n cerrados.',
      },
    },
  ],

  icon: '\u270a',
};

// ---------------------------------------------------------------------------
// Victory of Fidel — January 2
// ---------------------------------------------------------------------------

const victoryDay: HolidayData = {
  id: 'cu_victory-day',
  countryCode: 'cu',
  slugs: { en: 'victory-day', fr: 'jour-de-la-victoire', es: 'dia-de-la-victoria' },
  names: { en: 'Victory of Fidel', fr: 'Victoire de Fidel', es: 'Victoria de Fidel' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 2,

  descriptions: {
    en: "Victory Day on January 2 is the continuation of Cuba's Liberation Day celebrations, extending the commemorations of the Triumph of the Revolution. It marks the consolidation of revolutionary power following Batista's flight.",
    fr: "Le Jour de la Victoire, le 2 janvier, est la continuation des c\u00e9l\u00e9brations du Jour de la Lib\u00e9ration de Cuba, prolongeant les comm\u00e9morations du Triomphe de la R\u00e9volution. Il marque la consolidation du pouvoir r\u00e9volutionnaire apr\u00e8s la fuite de Batista.",
    es: 'El D\u00eda de la Victoria, el 2 de enero, es la continuaci\u00f3n de las celebraciones del D\u00eda de la Liberaci\u00f3n de Cuba, extendiendo las conmemoraciones del Triunfo de la Revoluci\u00f3n. Marca la consolidaci\u00f3n del poder revolucionario tras la huida de Batista.',
  },

  history: {
    en: "January 2 extends the celebrations that began on Liberation Day. After Batista fled on January 1, the revolutionary forces quickly moved to consolidate control across the island. Che Guevara and Camilo Cienfuegos entered Havana, securing key military installations.\n\nThe two-day celebration reflects the rapid pace of events in early January 1959, when the old regime collapsed and a new order was established almost overnight. The revolutionary government moved quickly to establish authority and begin implementing its vision for Cuba.\n\nToday, January 2 is observed as a continuation of the revolutionary celebrations, with cultural events, community gatherings, and patriotic observances continuing throughout the day.",
    fr: "Le 2 janvier prolonge les c\u00e9l\u00e9brations commenc\u00e9es le Jour de la Lib\u00e9ration. Apr\u00e8s la fuite de Batista le 1er janvier, les forces r\u00e9volutionnaires s'empress\u00e8rent de consolider le contr\u00f4le sur toute l'\u00eele. Che Guevara et Camilo Cienfuegos entr\u00e8rent \u00e0 La Havane, s\u00e9curisant les installations militaires cl\u00e9s.\n\nLa c\u00e9l\u00e9bration de deux jours refl\u00e8te le rythme rapide des \u00e9v\u00e9nements du d\u00e9but janvier 1959, lorsque l'ancien r\u00e9gime s'effondra et qu'un nouvel ordre fut \u00e9tabli presque du jour au lendemain.\n\nAujourd'hui, le 2 janvier est observ\u00e9 comme une continuation des c\u00e9l\u00e9brations r\u00e9volutionnaires, avec des \u00e9v\u00e9nements culturels, des rassemblements communautaires et des observances patriotiques tout au long de la journ\u00e9e.",
    es: "El 2 de enero extiende las celebraciones que comenzaron el D\u00eda de la Liberaci\u00f3n. Despu\u00e9s de que Batista huyera el 1 de enero, las fuerzas revolucionarias se movieron r\u00e1pidamente para consolidar el control en toda la isla. El Che Guevara y Camilo Cienfuegos entraron en La Habana, asegurando instalaciones militares clave.\n\nLa celebraci\u00f3n de dos d\u00edas refleja el r\u00e1pido ritmo de los eventos de principios de enero de 1959, cuando el antiguo r\u00e9gimen colaps\u00f3 y un nuevo orden se estableci\u00f3 pr\u00e1cticamente de la noche a la ma\u00f1ana.\n\nHoy, el 2 de enero se observa como una continuaci\u00f3n de las celebraciones revolucionarias, con eventos culturales, reuniones comunitarias y actos patri\u00f3ticos durante todo el d\u00eda.",
  },

  traditions: {
    en: [
      'Continuing celebrations from Liberation Day with family and community',
      'Attending cultural performances and concerts',
      'Watching patriotic films and documentaries on television',
      'Visiting revolutionary museums and historical sites',
      'Sharing stories of the revolution with younger generations',
    ],
    fr: [
      'Poursuivre les c\u00e9l\u00e9brations du Jour de la Lib\u00e9ration en famille et en communaut\u00e9',
      'Assister \u00e0 des spectacles culturels et des concerts',
      'Regarder des films et documentaires patriotiques \u00e0 la t\u00e9l\u00e9vision',
      'Visiter des mus\u00e9es r\u00e9volutionnaires et des sites historiques',
      'Partager des r\u00e9cits de la r\u00e9volution avec les jeunes g\u00e9n\u00e9rations',
    ],
    es: [
      'Continuar las celebraciones del D\u00eda de la Liberaci\u00f3n con familia y comunidad',
      'Asistir a presentaciones culturales y conciertos',
      'Ver pel\u00edculas y documentales patri\u00f3ticos en televisi\u00f3n',
      'Visitar museos revolucionarios y sitios hist\u00f3ricos',
      'Compartir historias de la revoluci\u00f3n con las generaciones m\u00e1s j\u00f3venes',
    ],
  },

  funFacts: {
    en: [
      'Che Guevara and Camilo Cienfuegos entered Havana on January 2, 1959, to secure the capital.',
      'Fidel Castro made his famous victory march from Santiago de Cuba to Havana, arriving on January 8.',
      'The two-day celebration makes Cuba one of few countries with consecutive national revolutionary holidays.',
      'Radio Rebelde, the revolutionary radio station, broadcast continuous updates during the first days of January 1959.',
      'Many Cubans celebrate both days with extended family gatherings and traditional Cuban food.',
    ],
    fr: [
      'Che Guevara et Camilo Cienfuegos entr\u00e8rent \u00e0 La Havane le 2 janvier 1959 pour s\u00e9curiser la capitale.',
      'Fidel Castro fit sa c\u00e9l\u00e8bre marche victorieuse de Santiago de Cuba \u00e0 La Havane, arrivant le 8 janvier.',
      'La c\u00e9l\u00e9bration de deux jours fait de Cuba l\'un des rares pays avec des jours f\u00e9ri\u00e9s r\u00e9volutionnaires nationaux cons\u00e9cutifs.',
      'Radio Rebelde, la station de radio r\u00e9volutionnaire, diffusa des mises \u00e0 jour continues pendant les premiers jours de janvier 1959.',
      'Beaucoup de Cubains c\u00e9l\u00e8brent les deux jours avec des r\u00e9unions de famille \u00e9largie et de la nourriture cubaine traditionnelle.',
    ],
    es: [
      'El Che Guevara y Camilo Cienfuegos entraron en La Habana el 2 de enero de 1959 para asegurar la capital.',
      'Fidel Castro hizo su famosa marcha victoriosa desde Santiago de Cuba hasta La Habana, llegando el 8 de enero.',
      'La celebraci\u00f3n de dos d\u00edas hace de Cuba uno de los pocos pa\u00edses con d\u00edas festivos revolucionarios nacionales consecutivos.',
      'Radio Rebelde, la emisora revolucionaria, transmiti\u00f3 actualizaciones continuas durante los primeros d\u00edas de enero de 1959.',
      'Muchos cubanos celebran ambos d\u00edas con reuniones de familia extendida y comida cubana tradicional.',
    ],
  },

  planningChecklist: {
    en: [
      'Extend your stay through January 2 to experience both days of celebration',
      'Visit the Museum of the Revolution in Havana',
      'Enjoy traditional Cuban cuisine at family-run paladares',
      'Explore the historic sites of the revolution in Havana and Santiago',
      'Plan activities around public events and street celebrations',
    ],
    fr: [
      'Prolonger votre s\u00e9jour jusqu\'au 2 janvier pour vivre les deux jours de c\u00e9l\u00e9bration',
      'Visiter le Mus\u00e9e de la R\u00e9volution \u00e0 La Havane',
      'D\u00e9guster la cuisine cubaine traditionnelle dans des paladares familiaux',
      'Explorer les sites historiques de la r\u00e9volution \u00e0 La Havane et Santiago',
      'Planifier des activit\u00e9s autour des \u00e9v\u00e9nements publics et des c\u00e9l\u00e9brations de rue',
    ],
    es: [
      'Extender su estad\u00eda hasta el 2 de enero para experimentar ambos d\u00edas de celebraci\u00f3n',
      'Visitar el Museo de la Revoluci\u00f3n en La Habana',
      'Disfrutar de la cocina cubana tradicional en paladares familiares',
      'Explorar los sitios hist\u00f3ricos de la revoluci\u00f3n en La Habana y Santiago',
      'Planificar actividades alrededor de eventos p\u00fablicos y celebraciones callejeras',
    ],
  },

  relatedHolidays: ['cu_liberation-day', 'cu_rebellion-day'],

  seo: {
    en: {
      titleTemplate: 'Cuba Victory Day {year} \u2014 January 2 Countdown',
      descriptionTemplate: 'When is Victory Day in Cuba {year}? Live countdown to January 2, continuation of Liberation Day celebrations, and guide.',
      keywords: ['Cuba Victory Day', 'January 2 Cuba', 'Cuban Revolution', 'Fidel Castro victory', 'Cuba holiday'],
    },
    fr: {
      titleTemplate: 'Jour de la Victoire de Cuba {year} \u2014 Compte \u00e0 rebours du 2 janvier',
      descriptionTemplate: 'Quand est le Jour de la Victoire \u00e0 Cuba {year} ? Compte \u00e0 rebours, continuation des c\u00e9l\u00e9brations et guide.',
      keywords: ['Jour de la Victoire Cuba', '2 janvier Cuba', 'R\u00e9volution cubaine', 'victoire de Fidel', 'f\u00eate Cuba'],
    },
    es: {
      titleTemplate: 'D\u00eda de la Victoria de Cuba {year} \u2014 Cuenta regresiva del 2 de enero',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda de la Victoria en Cuba {year}? Cuenta regresiva, continuaci\u00f3n de las celebraciones de liberaci\u00f3n y gu\u00eda.',
      keywords: ['D\u00eda de la Victoria Cuba', '2 de enero Cuba', 'Revoluci\u00f3n Cubana', 'victoria de Fidel', 'fiesta Cuba'],
    },
  },

  faq: [
    {
      question: { en: 'When is Victory Day {year} in Cuba?', fr: 'Quand est le Jour de la Victoire {year} \u00e0 Cuba ?', es: '\u00bfCu\u00e1ndo es el D\u00eda de la Victoria {year} en Cuba?' },
      answer: {
        en: 'Victory Day {year} in Cuba is on {date}. It is always January 2, the day after Liberation Day.',
        fr: "Le Jour de la Victoire {year} \u00e0 Cuba est le {date}. C'est toujours le 2 janvier, le lendemain du Jour de la Lib\u00e9ration.",
        es: 'El D\u00eda de la Victoria {year} en Cuba es el {date}. Siempre es el 2 de enero, el d\u00eda despu\u00e9s del D\u00eda de la Liberaci\u00f3n.',
      },
    },
    {
      question: { en: 'Why are January 1 and 2 both holidays in Cuba?', fr: 'Pourquoi les 1er et 2 janvier sont-ils tous deux f\u00e9ri\u00e9s \u00e0 Cuba ?', es: '\u00bfPor qu\u00e9 el 1 y el 2 de enero son d\u00edas festivos en Cuba?' },
      answer: {
        en: 'January 1 marks Batista\'s flight and the Triumph of the Revolution, while January 2 commemorates the consolidation of revolutionary control, including the entry of Che Guevara and Camilo Cienfuegos into Havana.',
        fr: "Le 1er janvier marque la fuite de Batista et le Triomphe de la R\u00e9volution, tandis que le 2 janvier comm\u00e9more la consolidation du contr\u00f4le r\u00e9volutionnaire, y compris l'entr\u00e9e de Che Guevara et Camilo Cienfuegos \u00e0 La Havane.",
        es: 'El 1 de enero marca la huida de Batista y el Triunfo de la Revoluci\u00f3n, mientras que el 2 de enero conmemora la consolidaci\u00f3n del control revolucionario, incluyendo la entrada del Che Guevara y Camilo Cienfuegos en La Habana.',
      },
    },
    {
      question: { en: 'What is the significance of January 2 in Cuban history?', fr: 'Quelle est la signification du 2 janvier dans l\'histoire cubaine ?', es: '\u00bfCu\u00e1l es la importancia del 2 de enero en la historia cubana?' },
      answer: {
        en: 'January 2 represents the day the revolution secured key positions in Havana and consolidated power. It symbolizes the completion of the revolutionary takeover that began the previous day.',
        fr: "Le 2 janvier repr\u00e9sente le jour o\u00f9 la r\u00e9volution s\u00e9curisa des positions cl\u00e9s \u00e0 La Havane et consolida le pouvoir. Il symbolise l'ach\u00e8vement de la prise de pouvoir r\u00e9volutionnaire commenc\u00e9e la veille.",
        es: 'El 2 de enero representa el d\u00eda en que la revoluci\u00f3n asegur\u00f3 posiciones clave en La Habana y consolid\u00f3 el poder. Simboliza la culminaci\u00f3n de la toma del poder revolucionario que comenz\u00f3 el d\u00eda anterior.',
      },
    },
    {
      question: { en: 'Is January 2 a public holiday in Cuba?', fr: 'Le 2 janvier est-il un jour f\u00e9ri\u00e9 \u00e0 Cuba ?', es: '\u00bfEs el 2 de enero un d\u00eda festivo en Cuba?' },
      answer: {
        en: 'Yes, January 2 is an official public holiday in Cuba, giving Cubans a two-day celebration to mark the Triumph of the Revolution.',
        fr: "Oui, le 2 janvier est un jour f\u00e9ri\u00e9 officiel \u00e0 Cuba, offrant aux Cubains une c\u00e9l\u00e9bration de deux jours pour marquer le Triomphe de la R\u00e9volution.",
        es: 'S\u00ed, el 2 de enero es un d\u00eda festivo oficial en Cuba, dando a los cubanos una celebraci\u00f3n de dos d\u00edas para conmemorar el Triunfo de la Revoluci\u00f3n.',
      },
    },
  ],

  icon: '\ud83c\udde8\ud83c\uddfa',
};

// ---------------------------------------------------------------------------
// International Workers' Day — May 1
// ---------------------------------------------------------------------------

const labourDay: HolidayData = {
  id: 'cu_labour-day',
  countryCode: 'cu',
  slugs: { en: 'international-workers-day', fr: 'journee-internationale-des-travailleurs', es: 'dia-internacional-de-los-trabajadores' },
  names: { en: "International Workers' Day", fr: 'Journ\u00e9e internationale des travailleurs', es: 'D\u00eda Internacional de los Trabajadores' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 1,

  descriptions: {
    en: "International Workers' Day on May 1 is one of Cuba's most spectacular public events, featuring massive rallies in Havana's Plaza de la Revoluci\u00f3n. Hundreds of thousands of Cubans march to celebrate workers' rights and socialist solidarity.",
    fr: "La Journ\u00e9e internationale des travailleurs, le 1er mai, est l'un des \u00e9v\u00e9nements publics les plus spectaculaires de Cuba, avec d'\u00e9normes rassemblements sur la Plaza de la Revoluci\u00f3n de La Havane. Des centaines de milliers de Cubains d\u00e9filent pour c\u00e9l\u00e9brer les droits des travailleurs et la solidarit\u00e9 socialiste.",
    es: "El D\u00eda Internacional de los Trabajadores, el 1 de mayo, es uno de los eventos p\u00fablicos m\u00e1s espectaculares de Cuba, con masivos m\u00edtines en la Plaza de la Revoluci\u00f3n de La Habana. Cientos de miles de cubanos marchan para celebrar los derechos de los trabajadores y la solidaridad socialista.",
  },

  history: {
    en: "May Day has been celebrated in Cuba since before the revolution, but it took on special significance after 1959. Under the revolutionary government, May 1 became one of the most important dates on the national calendar, rivaling Liberation Day in scale.\n\nThe massive rallies in the Plaza de la Revoluci\u00f3n, which can hold up to one million people, became a hallmark of Cuban political culture. Government leaders traditionally address the crowd, and workers' unions organize contingents from across the island.\n\nThe event reflects Cuba's socialist ideology and its emphasis on workers' rights, labor solidarity, and collective action. It remains one of the largest organized gatherings in the Western Hemisphere.",
    fr: "Le 1er mai est c\u00e9l\u00e9br\u00e9 \u00e0 Cuba depuis avant la r\u00e9volution, mais il a pris une signification particuli\u00e8re apr\u00e8s 1959. Sous le gouvernement r\u00e9volutionnaire, le 1er mai est devenu l'une des dates les plus importantes du calendrier national, rivalisant avec le Jour de la Lib\u00e9ration en \u00e9chelle.\n\nLes \u00e9normes rassemblements sur la Plaza de la Revoluci\u00f3n, qui peut accueillir jusqu'\u00e0 un million de personnes, sont devenus une caract\u00e9ristique de la culture politique cubaine. Les dirigeants s'adressent traditionnellement \u00e0 la foule, et les syndicats organisent des contingents de toute l'\u00eele.\n\nL'\u00e9v\u00e9nement refl\u00e8te l'id\u00e9ologie socialiste de Cuba et son accent sur les droits des travailleurs, la solidarit\u00e9 syndicale et l'action collective. Il reste l'un des plus grands rassemblements organis\u00e9s de l'h\u00e9misph\u00e8re occidental.",
    es: "El Primero de Mayo se celebra en Cuba desde antes de la revoluci\u00f3n, pero adquiri\u00f3 una importancia especial despu\u00e9s de 1959. Bajo el gobierno revolucionario, el 1 de mayo se convirti\u00f3 en una de las fechas m\u00e1s importantes del calendario nacional, rivalizando con el D\u00eda de la Liberaci\u00f3n en escala.\n\nLos masivos m\u00edtines en la Plaza de la Revoluci\u00f3n, que puede albergar hasta un mill\u00f3n de personas, se convirtieron en un sello de la cultura pol\u00edtica cubana. Los l\u00edderes gubernamentales tradicionalmente se dirigen a la multitud, y los sindicatos organizan contingentes de toda la isla.\n\nEl evento refleja la ideolog\u00eda socialista de Cuba y su \u00e9nfasis en los derechos de los trabajadores, la solidaridad laboral y la acci\u00f3n colectiva. Sigue siendo una de las reuniones organizadas m\u00e1s grandes del hemisferio occidental.",
  },

  traditions: {
    en: [
      'Marching in massive parades through the Plaza de la Revoluci\u00f3n in Havana',
      'Carrying banners and signs supporting workers\' rights and socialism',
      'Listening to speeches by government and labor union leaders',
      'Wearing union colors and matching outfits organized by workplace',
      'Celebrating with music, dancing, and food after the march',
      'Watching live television coverage of the rally nationwide',
    ],
    fr: [
      'D\u00e9filer dans d\'\u00e9normes parades \u00e0 travers la Plaza de la Revoluci\u00f3n \u00e0 La Havane',
      'Porter des banderoles et des pancartes soutenant les droits des travailleurs et le socialisme',
      '\u00c9couter les discours des dirigeants gouvernementaux et syndicaux',
      'Porter les couleurs syndicales et des tenues assorties organis\u00e9es par lieu de travail',
      'C\u00e9l\u00e9brer avec de la musique, de la danse et de la nourriture apr\u00e8s la marche',
      'Regarder la couverture t\u00e9l\u00e9vis\u00e9e en direct du rassemblement dans tout le pays',
    ],
    es: [
      'Marchar en masivos desfiles por la Plaza de la Revoluci\u00f3n en La Habana',
      'Llevar pancartas y carteles apoyando los derechos de los trabajadores y el socialismo',
      'Escuchar discursos de l\u00edderes gubernamentales y sindicales',
      'Vestir colores sindicales y atuendos coordinados organizados por lugar de trabajo',
      'Celebrar con m\u00fasica, baile y comida despu\u00e9s de la marcha',
      'Ver la cobertura televisiva en vivo del m\u00edtin a nivel nacional',
    ],
  },

  funFacts: {
    en: [
      'The May Day rally in Havana\'s Plaza de la Revoluci\u00f3n regularly attracts over one million participants.',
      'Workers begin arriving at the plaza before dawn to secure their positions for the march.',
      'Each workplace and union organizes its own contingent with matching shirts and banners.',
      'The rally is broadcast live on Cuban national television and radio.',
      'May Day in Cuba is considered one of the largest annual political gatherings in the world.',
    ],
    fr: [
      'Le rassemblement du 1er mai sur la Plaza de la Revoluci\u00f3n de La Havane attire r\u00e9guli\u00e8rement plus d\'un million de participants.',
      'Les travailleurs commencent \u00e0 arriver sur la place avant l\'aube pour s\u00e9curiser leurs positions.',
      'Chaque lieu de travail et syndicat organise son propre contingent avec des chemises et des banderoles assorties.',
      'Le rassemblement est diffus\u00e9 en direct \u00e0 la t\u00e9l\u00e9vision et \u00e0 la radio nationales cubaines.',
      'Le 1er mai \u00e0 Cuba est consid\u00e9r\u00e9 comme l\'un des plus grands rassemblements politiques annuels au monde.',
    ],
    es: [
      'El m\u00edtin del Primero de Mayo en la Plaza de la Revoluci\u00f3n de La Habana atrae regularmente a m\u00e1s de un mill\u00f3n de participantes.',
      'Los trabajadores comienzan a llegar a la plaza antes del amanecer para asegurar sus posiciones.',
      'Cada lugar de trabajo y sindicato organiza su propio contingente con camisas y pancartas coordinadas.',
      'El m\u00edtin se transmite en vivo por la televisi\u00f3n y radio nacionales cubanas.',
      'El Primero de Mayo en Cuba es considerado una de las reuniones pol\u00edticas anuales m\u00e1s grandes del mundo.',
    ],
  },

  planningChecklist: {
    en: [
      'Arrive early at the Plaza de la Revoluci\u00f3n to experience the full event',
      'Bring water and sun protection for the outdoor rally',
      'Wear comfortable shoes for standing and marching',
      'Book accommodation well in advance as Havana fills up for May Day',
      'Prepare for road closures and limited transportation in Havana',
    ],
    fr: [
      'Arriver t\u00f4t \u00e0 la Plaza de la Revoluci\u00f3n pour vivre l\'\u00e9v\u00e9nement complet',
      'Apporter de l\'eau et une protection solaire pour le rassemblement en plein air',
      'Porter des chaussures confortables pour rester debout et d\u00e9filer',
      'R\u00e9server un h\u00e9bergement bien \u00e0 l\'avance car La Havane se remplit pour le 1er mai',
      'Se pr\u00e9parer aux fermetures de routes et aux transports limit\u00e9s \u00e0 La Havane',
    ],
    es: [
      'Llegar temprano a la Plaza de la Revoluci\u00f3n para experimentar el evento completo',
      'Llevar agua y protecci\u00f3n solar para el m\u00edtin al aire libre',
      'Usar zapatos c\u00f3modos para estar de pie y marchar',
      'Reservar alojamiento con mucha anticipaci\u00f3n ya que La Habana se llena para el Primero de Mayo',
      'Prepararse para cierres de calles y transporte limitado en La Habana',
    ],
  },

  relatedHolidays: ['cu_liberation-day', 'cu_rebellion-day'],

  seo: {
    en: {
      titleTemplate: "Cuba Workers' Day {year} \u2014 May Day Countdown",
      descriptionTemplate: "When is International Workers' Day in Cuba {year}? Live countdown to May 1, Plaza de la Revoluci\u00f3n rally info, and guide.",
      keywords: ["Cuba Workers' Day", 'May Day Cuba', 'Plaza de la Revoluci\u00f3n', 'May 1 Cuba', 'Cuba Labour Day'],
    },
    fr: {
      titleTemplate: 'Journ\u00e9e des travailleurs Cuba {year} \u2014 Compte \u00e0 rebours du 1er mai',
      descriptionTemplate: 'Quand est la Journ\u00e9e des travailleurs \u00e0 Cuba {year} ? Compte \u00e0 rebours, infos sur le rassemblement de la Plaza de la Revoluci\u00f3n et guide.',
      keywords: ['Journ\u00e9e des travailleurs Cuba', '1er mai Cuba', 'Plaza de la Revoluci\u00f3n', 'F\u00eate du travail Cuba', 'rassemblement Havane'],
    },
    es: {
      titleTemplate: 'D\u00eda de los Trabajadores Cuba {year} \u2014 Cuenta regresiva del Primero de Mayo',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda Internacional de los Trabajadores en Cuba {year}? Cuenta regresiva, info del m\u00edtin de la Plaza de la Revoluci\u00f3n y gu\u00eda.',
      keywords: ['D\u00eda de los Trabajadores Cuba', 'Primero de Mayo Cuba', 'Plaza de la Revoluci\u00f3n', '1 de mayo Cuba', 'm\u00edtin La Habana'],
    },
  },

  faq: [
    {
      question: { en: "When is International Workers' Day {year} in Cuba?", fr: "Quand est la Journ\u00e9e internationale des travailleurs {year} \u00e0 Cuba ?", es: '\u00bfCu\u00e1ndo es el D\u00eda Internacional de los Trabajadores {year} en Cuba?' },
      answer: {
        en: "International Workers' Day {year} in Cuba is on {date}. It is always May 1.",
        fr: "La Journ\u00e9e internationale des travailleurs {year} \u00e0 Cuba est le {date}. C'est toujours le 1er mai.",
        es: 'El D\u00eda Internacional de los Trabajadores {year} en Cuba es el {date}. Siempre es el 1 de mayo.',
      },
    },
    {
      question: { en: 'How big is the May Day rally in Havana?', fr: 'Quelle est l\'ampleur du rassemblement du 1er mai \u00e0 La Havane ?', es: '\u00bfQu\u00e9 tan grande es el m\u00edtin del Primero de Mayo en La Habana?' },
      answer: {
        en: 'The May Day rally in Havana\'s Plaza de la Revoluci\u00f3n regularly attracts over one million participants, making it one of the largest annual political gatherings in the world.',
        fr: "Le rassemblement du 1er mai sur la Plaza de la Revoluci\u00f3n de La Havane attire r\u00e9guli\u00e8rement plus d'un million de participants, en faisant l'un des plus grands rassemblements politiques annuels au monde.",
        es: 'El m\u00edtin del Primero de Mayo en la Plaza de la Revoluci\u00f3n de La Habana atrae regularmente a m\u00e1s de un mill\u00f3n de participantes, convirti\u00e9ndolo en una de las reuniones pol\u00edticas anuales m\u00e1s grandes del mundo.',
      },
    },
    {
      question: { en: 'Can tourists attend the May Day rally?', fr: 'Les touristes peuvent-ils assister au rassemblement du 1er mai ?', es: '\u00bfPueden los turistas asistir al m\u00edtin del Primero de Mayo?' },
      answer: {
        en: 'Yes, tourists are welcome to attend and observe the May Day rally. It is a public event and visitors can watch from designated areas along the parade route.',
        fr: "Oui, les touristes sont les bienvenus pour assister et observer le rassemblement du 1er mai. C'est un \u00e9v\u00e9nement public et les visiteurs peuvent regarder depuis des zones d\u00e9sign\u00e9es le long du parcours du d\u00e9fil\u00e9.",
        es: 'S\u00ed, los turistas son bienvenidos para asistir y observar el m\u00edtin del Primero de Mayo. Es un evento p\u00fablico y los visitantes pueden ver desde \u00e1reas designadas a lo largo de la ruta del desfile.',
      },
    },
    {
      question: { en: "Is Workers' Day a public holiday in Cuba?", fr: 'La Journ\u00e9e des travailleurs est-elle un jour f\u00e9ri\u00e9 \u00e0 Cuba ?', es: '\u00bfEs el D\u00eda de los Trabajadores un d\u00eda festivo en Cuba?' },
      answer: {
        en: "Yes, May 1 is an official public holiday in Cuba. It is one of the most widely observed holidays in the country.",
        fr: "Oui, le 1er mai est un jour f\u00e9ri\u00e9 officiel \u00e0 Cuba. C'est l'un des jours f\u00e9ri\u00e9s les plus largement observ\u00e9s dans le pays.",
        es: 'S\u00ed, el 1 de mayo es un d\u00eda festivo oficial en Cuba. Es uno de los d\u00edas festivos m\u00e1s ampliamente observados en el pa\u00eds.',
      },
    },
  ],

  icon: '\u2692\ufe0f',
};

// ---------------------------------------------------------------------------
// National Rebellion Day — July 26
// ---------------------------------------------------------------------------

const rebellionDay: HolidayData = {
  id: 'cu_rebellion-day',
  countryCode: 'cu',
  slugs: { en: 'national-rebellion-day', fr: 'jour-de-la-rebellion-nationale', es: 'dia-de-la-rebeldia-nacional' },
  names: { en: 'National Rebellion Day', fr: 'Jour de la R\u00e9bellion Nationale', es: 'D\u00eda de la Rebeld\u00eda Nacional' },

  dateType: 'fixed',
  fixedMonth: 7,
  fixedDay: 26,

  descriptions: {
    en: "National Rebellion Day (D\u00eda de la Rebeld\u00eda Nacional) on July 26 commemorates the 1953 attack on the Moncada Barracks in Santiago de Cuba. It is considered the most important revolutionary holiday in Cuba, marking the beginning of the armed struggle that led to the revolution.",
    fr: "Le Jour de la R\u00e9bellion Nationale (D\u00eda de la Rebeld\u00eda Nacional), le 26 juillet, comm\u00e9more l'attaque de 1953 contre la caserne Moncada \u00e0 Santiago de Cuba. C'est consid\u00e9r\u00e9 comme la f\u00eate r\u00e9volutionnaire la plus importante de Cuba, marquant le d\u00e9but de la lutte arm\u00e9e qui mena \u00e0 la r\u00e9volution.",
    es: "El D\u00eda de la Rebeld\u00eda Nacional, el 26 de julio, conmemora el ataque de 1953 al Cuartel Moncada en Santiago de Cuba. Es considerado el d\u00eda festivo revolucionario m\u00e1s importante de Cuba, marcando el inicio de la lucha armada que llev\u00f3 a la revoluci\u00f3n.",
  },

  history: {
    en: "On July 26, 1953, a group of approximately 160 revolutionaries led by Fidel Castro attacked the Moncada Barracks, the second-largest military garrison in Cuba. The attack, launched in Santiago de Cuba, was intended to spark a popular uprising against the Batista dictatorship.\n\nThe assault failed militarily \u2014 many attackers were killed or captured, and Castro was imprisoned. However, his famous defense speech 'History Will Absolve Me' transformed the defeat into a rallying cry. The 26th of July Movement (Movimiento 26 de Julio) was born, becoming the revolutionary organization that eventually overthrew Batista.\n\nToday, the celebration rotates between different Cuban cities each year. The host city receives major infrastructure improvements before the event, and the celebration features speeches, cultural performances, and massive public gatherings.",
    fr: "Le 26 juillet 1953, un groupe d'environ 160 r\u00e9volutionnaires men\u00e9s par Fidel Castro attaqua la caserne Moncada, la deuxi\u00e8me plus grande garnison militaire de Cuba. L'attaque, lanc\u00e9e \u00e0 Santiago de Cuba, visait \u00e0 d\u00e9clencher un soul\u00e8vement populaire contre la dictature de Batista.\n\nL'assaut \u00e9choua militairement \u2014 de nombreux assaillants furent tu\u00e9s ou captur\u00e9s, et Castro fut emprisonn\u00e9. Cependant, son c\u00e9l\u00e8bre discours de d\u00e9fense \u00ab L'histoire m'acquittera \u00bb transforma la d\u00e9faite en cri de ralliement. Le Mouvement du 26 Juillet (Movimiento 26 de Julio) naquit, devenant l'organisation r\u00e9volutionnaire qui finit par renverser Batista.\n\nAujourd'hui, la c\u00e9l\u00e9bration alterne entre diff\u00e9rentes villes cubaines chaque ann\u00e9e. La ville h\u00f4te re\u00e7oit d'importantes am\u00e9liorations d'infrastructure avant l'\u00e9v\u00e9nement.",
    es: "El 26 de julio de 1953, un grupo de aproximadamente 160 revolucionarios liderados por Fidel Castro atac\u00f3 el Cuartel Moncada, la segunda guarnici\u00f3n militar m\u00e1s grande de Cuba. El ataque, lanzado en Santiago de Cuba, pretend\u00eda provocar un levantamiento popular contra la dictadura de Batista.\n\nEl asalto fracas\u00f3 militarmente \u2014 muchos atacantes fueron muertos o capturados, y Castro fue encarcelado. Sin embargo, su famoso discurso de defensa 'La Historia me Absolver\u00e1' transform\u00f3 la derrota en un grito de guerra. Naci\u00f3 el Movimiento 26 de Julio, convirti\u00e9ndose en la organizaci\u00f3n revolucionaria que eventualmente derroc\u00f3 a Batista.\n\nHoy, la celebraci\u00f3n rota entre diferentes ciudades cubanas cada a\u00f1o. La ciudad anfitriona recibe importantes mejoras de infraestructura antes del evento, y la celebraci\u00f3n presenta discursos, presentaciones culturales y masivas reuniones p\u00fablicas.",
  },

  traditions: {
    en: [
      'Attending the main rally in the host city, which rotates each year',
      'Listening to the keynote speech by the head of state',
      'Wearing red and black \u2014 the colors of the 26th of July Movement',
      'Participating in cultural performances and music events',
      'Visiting the Moncada Barracks museum in Santiago de Cuba',
      'Celebrating with traditional Cuban food, music, and dancing',
    ],
    fr: [
      'Assister au rassemblement principal dans la ville h\u00f4te, qui change chaque ann\u00e9e',
      '\u00c9couter le discours principal du chef de l\'\u00c9tat',
      'Porter du rouge et du noir \u2014 les couleurs du Mouvement du 26 Juillet',
      'Participer \u00e0 des spectacles culturels et des \u00e9v\u00e9nements musicaux',
      'Visiter le mus\u00e9e de la caserne Moncada \u00e0 Santiago de Cuba',
      'C\u00e9l\u00e9brer avec de la nourriture cubaine traditionnelle, de la musique et de la danse',
    ],
    es: [
      'Asistir al m\u00edtin principal en la ciudad anfitriona, que rota cada a\u00f1o',
      'Escuchar el discurso principal del jefe de Estado',
      'Vestir rojo y negro \u2014 los colores del Movimiento 26 de Julio',
      'Participar en presentaciones culturales y eventos musicales',
      'Visitar el museo del Cuartel Moncada en Santiago de Cuba',
      'Celebrar con comida cubana tradicional, m\u00fasica y baile',
    ],
  },

  funFacts: {
    en: [
      'The attack was timed for July 26 because it coincided with Santiago de Cuba\'s carnival season, when security would be relaxed.',
      'Castro\'s "History Will Absolve Me" speech, delivered at his trial, became one of the most famous political speeches in Latin American history.',
      'The Moncada Barracks still bears bullet holes from the 1953 attack, preserved as a historical monument.',
      'The 26th of July Movement\'s red and black colors became symbols of the Cuban Revolution worldwide.',
      'The celebration city is chosen years in advance and receives significant investment in preparation.',
    ],
    fr: [
      'L\'attaque fut planifi\u00e9e pour le 26 juillet car elle co\u00efncidait avec la saison du carnaval de Santiago de Cuba, quand la s\u00e9curit\u00e9 serait rel\u00e2ch\u00e9e.',
      'Le discours de Castro \u00ab L\'histoire m\'acquittera \u00bb, prononc\u00e9 lors de son proc\u00e8s, est devenu l\'un des discours politiques les plus c\u00e9l\u00e8bres de l\'histoire de l\'Am\u00e9rique latine.',
      'La caserne Moncada porte encore les impacts de balles de l\'attaque de 1953, pr\u00e9serv\u00e9s comme monument historique.',
      'Les couleurs rouge et noir du Mouvement du 26 Juillet sont devenues des symboles de la R\u00e9volution cubaine dans le monde entier.',
      'La ville de c\u00e9l\u00e9bration est choisie des ann\u00e9es \u00e0 l\'avance et re\u00e7oit des investissements importants en pr\u00e9paration.',
    ],
    es: [
      'El ataque fue programado para el 26 de julio porque coincid\u00eda con la temporada de carnaval de Santiago de Cuba, cuando la seguridad estar\u00eda relajada.',
      'El discurso de Castro "La Historia me Absolver\u00e1", pronunciado en su juicio, se convirti\u00f3 en uno de los discursos pol\u00edticos m\u00e1s famosos de la historia latinoamericana.',
      'El Cuartel Moncada a\u00fan conserva los impactos de bala del ataque de 1953, preservados como monumento hist\u00f3rico.',
      'Los colores rojo y negro del Movimiento 26 de Julio se convirtieron en s\u00edmbolos de la Revoluci\u00f3n Cubana en todo el mundo.',
      'La ciudad de celebraci\u00f3n se elige con a\u00f1os de anticipaci\u00f3n y recibe una inversi\u00f3n significativa en preparaci\u00f3n.',
    ],
  },

  planningChecklist: {
    en: [
      'Find out which city is hosting the main celebration this year',
      'Book travel and accommodation well in advance',
      'Bring red and black clothing to participate in the spirit of the event',
      'Visit the Moncada Barracks museum in Santiago de Cuba',
      'Prepare for hot weather with water, hats, and sunscreen',
    ],
    fr: [
      'D\u00e9couvrir quelle ville accueille la c\u00e9l\u00e9bration principale cette ann\u00e9e',
      'R\u00e9server les d\u00e9placements et l\'h\u00e9bergement bien \u00e0 l\'avance',
      'Apporter des v\u00eatements rouges et noirs pour participer \u00e0 l\'esprit de l\'\u00e9v\u00e9nement',
      'Visiter le mus\u00e9e de la caserne Moncada \u00e0 Santiago de Cuba',
      'Se pr\u00e9parer au temps chaud avec de l\'eau, des chapeaux et de la cr\u00e8me solaire',
    ],
    es: [
      'Averiguar qu\u00e9 ciudad alberga la celebraci\u00f3n principal este a\u00f1o',
      'Reservar viaje y alojamiento con mucha anticipaci\u00f3n',
      'Llevar ropa roja y negra para participar en el esp\u00edritu del evento',
      'Visitar el museo del Cuartel Moncada en Santiago de Cuba',
      'Prepararse para el clima caluroso con agua, sombreros y protector solar',
    ],
  },

  relatedHolidays: ['cu_liberation-day', 'cu_victory-day', 'cu_independence-war'],

  seo: {
    en: {
      titleTemplate: 'Cuba National Rebellion Day {year} \u2014 July 26 Countdown',
      descriptionTemplate: 'When is National Rebellion Day in Cuba {year}? Live countdown to July 26, Moncada Barracks history, and celebration guide.',
      keywords: ['National Rebellion Day Cuba', 'July 26 Cuba', 'Moncada Barracks', 'D\u00eda de la Rebeld\u00eda', '26 de Julio'],
    },
    fr: {
      titleTemplate: 'Jour de la R\u00e9bellion Nationale Cuba {year} \u2014 Compte \u00e0 rebours du 26 juillet',
      descriptionTemplate: 'Quand est le Jour de la R\u00e9bellion Nationale \u00e0 Cuba {year} ? Compte \u00e0 rebours, histoire de la caserne Moncada et guide.',
      keywords: ['Jour de la R\u00e9bellion Cuba', '26 juillet Cuba', 'caserne Moncada', 'D\u00eda de la Rebeld\u00eda', 'Mouvement 26 Juillet'],
    },
    es: {
      titleTemplate: 'D\u00eda de la Rebeld\u00eda Nacional Cuba {year} \u2014 Cuenta regresiva del 26 de julio',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda de la Rebeld\u00eda Nacional en Cuba {year}? Cuenta regresiva, historia del Cuartel Moncada y gu\u00eda de celebraci\u00f3n.',
      keywords: ['D\u00eda de la Rebeld\u00eda Nacional Cuba', '26 de julio Cuba', 'Cuartel Moncada', 'Movimiento 26 de Julio', 'fiesta Cuba'],
    },
  },

  faq: [
    {
      question: { en: 'When is National Rebellion Day {year} in Cuba?', fr: 'Quand est le Jour de la R\u00e9bellion Nationale {year} \u00e0 Cuba ?', es: '\u00bfCu\u00e1ndo es el D\u00eda de la Rebeld\u00eda Nacional {year} en Cuba?' },
      answer: {
        en: 'National Rebellion Day {year} in Cuba is on {date}. It is always July 26.',
        fr: "Le Jour de la R\u00e9bellion Nationale {year} \u00e0 Cuba est le {date}. C'est toujours le 26 juillet.",
        es: 'El D\u00eda de la Rebeld\u00eda Nacional {year} en Cuba es el {date}. Siempre es el 26 de julio.',
      },
    },
    {
      question: { en: 'What happened at Moncada Barracks?', fr: "Que s'est-il pass\u00e9 \u00e0 la caserne Moncada ?", es: '\u00bfQu\u00e9 sucedi\u00f3 en el Cuartel Moncada?' },
      answer: {
        en: 'On July 26, 1953, Fidel Castro led about 160 revolutionaries in an attack on the Moncada Barracks in Santiago de Cuba. Though the attack failed, it launched the revolutionary movement that eventually overthrew Batista in 1959.',
        fr: "Le 26 juillet 1953, Fidel Castro mena environ 160 r\u00e9volutionnaires dans une attaque contre la caserne Moncada \u00e0 Santiago de Cuba. Bien que l'attaque ait \u00e9chou\u00e9, elle lan\u00e7a le mouvement r\u00e9volutionnaire qui finit par renverser Batista en 1959.",
        es: 'El 26 de julio de 1953, Fidel Castro lider\u00f3 a unos 160 revolucionarios en un ataque al Cuartel Moncada en Santiago de Cuba. Aunque el ataque fracas\u00f3, lanz\u00f3 el movimiento revolucionario que eventualmente derroc\u00f3 a Batista en 1959.',
      },
    },
    {
      question: { en: 'What is the 26th of July Movement?', fr: "Qu'est-ce que le Mouvement du 26 Juillet ?", es: '\u00bfQu\u00e9 es el Movimiento 26 de Julio?' },
      answer: {
        en: 'The 26th of July Movement (Movimiento 26 de Julio) was the revolutionary organization founded by Fidel Castro after the Moncada attack. Named after the date of the assault, it became the primary force behind the Cuban Revolution.',
        fr: "Le Mouvement du 26 Juillet (Movimiento 26 de Julio) \u00e9tait l'organisation r\u00e9volutionnaire fond\u00e9e par Fidel Castro apr\u00e8s l'attaque de Moncada. Nomm\u00e9 d'apr\u00e8s la date de l'assaut, il devint la force principale derri\u00e8re la R\u00e9volution cubaine.",
        es: 'El Movimiento 26 de Julio fue la organizaci\u00f3n revolucionaria fundada por Fidel Castro despu\u00e9s del ataque a Moncada. Nombrado por la fecha del asalto, se convirti\u00f3 en la fuerza principal detr\u00e1s de la Revoluci\u00f3n Cubana.',
      },
    },
    {
      question: { en: 'Why does the celebration rotate cities?', fr: 'Pourquoi la c\u00e9l\u00e9bration change-t-elle de ville ?', es: '\u00bfPor qu\u00e9 la celebraci\u00f3n rota entre ciudades?' },
      answer: {
        en: 'The main celebration rotates between Cuban cities to distribute the economic benefits of the event and to ensure infrastructure improvements reach different parts of the country. The host city is chosen years in advance.',
        fr: "La c\u00e9l\u00e9bration principale alterne entre les villes cubaines pour distribuer les b\u00e9n\u00e9fices \u00e9conomiques de l'\u00e9v\u00e9nement et garantir que les am\u00e9liorations d'infrastructure atteignent diff\u00e9rentes r\u00e9gions du pays.",
        es: 'La celebraci\u00f3n principal rota entre ciudades cubanas para distribuir los beneficios econ\u00f3micos del evento y asegurar que las mejoras de infraestructura lleguen a diferentes partes del pa\u00eds. La ciudad anfitriona se elige con a\u00f1os de anticipaci\u00f3n.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '\ud83c\udde8\ud83c\uddfa',
};

// ---------------------------------------------------------------------------
// Independence War Anniversary — October 10
// ---------------------------------------------------------------------------

const independenceWar: HolidayData = {
  id: 'cu_independence-war',
  countryCode: 'cu',
  slugs: { en: 'independence-war-anniversary', fr: 'anniversaire-de-la-guerre-dindependance', es: 'aniversario-de-la-guerra-de-independencia' },
  names: { en: 'Independence War Anniversary', fr: "Anniversaire de la guerre d'ind\u00e9pendance", es: 'Aniversario de la Guerra de Independencia' },

  dateType: 'fixed',
  fixedMonth: 10,
  fixedDay: 10,

  descriptions: {
    en: "The Independence War Anniversary on October 10 commemorates the Grito de Yara in 1868, when Carlos Manuel de C\u00e9spedes freed his slaves and launched the Ten Years' War against Spanish colonial rule. It marks the beginning of Cuba's struggle for independence.",
    fr: "L'Anniversaire de la guerre d'ind\u00e9pendance, le 10 octobre, comm\u00e9more le Grito de Yara en 1868, lorsque Carlos Manuel de C\u00e9spedes lib\u00e9ra ses esclaves et lan\u00e7a la Guerre de Dix Ans contre la domination coloniale espagnole. Il marque le d\u00e9but de la lutte de Cuba pour l'ind\u00e9pendance.",
    es: "El Aniversario de la Guerra de Independencia, el 10 de octubre, conmemora el Grito de Yara en 1868, cuando Carlos Manuel de C\u00e9spedes liber\u00f3 a sus esclavos y lanz\u00f3 la Guerra de los Diez A\u00f1os contra el dominio colonial espa\u00f1ol. Marca el inicio de la lucha de Cuba por su independencia.",
  },

  history: {
    en: "On October 10, 1868, sugar planter Carlos Manuel de C\u00e9spedes freed his slaves at his plantation La Demajagua and issued the Grito de Yara (Cry of Yara), a declaration of Cuban independence from Spain. This act launched the Ten Years' War (1868\u20131878), the first of three wars of independence.\n\nThe Ten Years' War, though ultimately unsuccessful in achieving independence, established the template for Cuba's liberation struggles. It was followed by the Little War (1879\u20131880) and the Cuban War of Independence (1895\u20131898), which, combined with the Spanish-American War, finally ended Spanish rule.\n\nC\u00e9spedes is honored as the 'Father of the Homeland' (Padre de la Patria). October 10 is commemorated as a foundational moment in Cuban national identity, connecting the 19th-century independence movement to the 20th-century revolution.",
    fr: "Le 10 octobre 1868, le planteur de canne \u00e0 sucre Carlos Manuel de C\u00e9spedes lib\u00e9ra ses esclaves dans sa plantation La Demajagua et lan\u00e7a le Grito de Yara (Cri de Yara), une d\u00e9claration d'ind\u00e9pendance cubaine de l'Espagne. Cet acte d\u00e9clencha la Guerre de Dix Ans (1868\u20131878), la premi\u00e8re des trois guerres d'ind\u00e9pendance.\n\nLa Guerre de Dix Ans, bien qu'elle n'ait pas r\u00e9ussi \u00e0 obtenir l'ind\u00e9pendance, \u00e9tablit le mod\u00e8le des luttes de lib\u00e9ration cubaines. Elle fut suivie par la Petite Guerre (1879\u20131880) et la Guerre d'ind\u00e9pendance cubaine (1895\u20131898).\n\nC\u00e9spedes est honor\u00e9 comme le \u00ab P\u00e8re de la Patrie \u00bb (Padre de la Patria). Le 10 octobre est comm\u00e9mor\u00e9 comme un moment fondateur de l'identit\u00e9 nationale cubaine.",
    es: "El 10 de octubre de 1868, el hacendado azucarero Carlos Manuel de C\u00e9spedes liber\u00f3 a sus esclavos en su plantaci\u00f3n La Demajagua y lanz\u00f3 el Grito de Yara, una declaraci\u00f3n de independencia cubana de Espa\u00f1a. Este acto inici\u00f3 la Guerra de los Diez A\u00f1os (1868\u20131878), la primera de tres guerras de independencia.\n\nLa Guerra de los Diez A\u00f1os, aunque no logr\u00f3 la independencia, estableci\u00f3 el modelo para las luchas de liberaci\u00f3n cubanas. Fue seguida por la Guerra Chiquita (1879\u20131880) y la Guerra de Independencia Cubana (1895\u20131898), que, combinada con la Guerra Hispanoamericana, finalmente puso fin al dominio espa\u00f1ol.\n\nC\u00e9spedes es honrado como el 'Padre de la Patria'. El 10 de octubre se conmemora como un momento fundacional en la identidad nacional cubana, conectando el movimiento independentista del siglo XIX con la revoluci\u00f3n del siglo XX.",
  },

  traditions: {
    en: [
      'Attending patriotic ceremonies and wreath-laying at monuments',
      'Visiting the La Demajagua historical site in eastern Cuba',
      'Listening to speeches about the independence movement',
      'School programs teaching children about C\u00e9spedes and the independence wars',
      'Displaying Cuban flags and patriotic decorations',
    ],
    fr: [
      'Assister \u00e0 des c\u00e9r\u00e9monies patriotiques et d\u00e9p\u00f4ts de gerbes aux monuments',
      'Visiter le site historique de La Demajagua dans l\'est de Cuba',
      '\u00c9couter des discours sur le mouvement ind\u00e9pendantiste',
      'Programmes scolaires enseignant aux enfants l\'histoire de C\u00e9spedes et des guerres d\'ind\u00e9pendance',
      'Afficher des drapeaux cubains et des d\u00e9corations patriotiques',
    ],
    es: [
      'Asistir a ceremonias patri\u00f3ticas y colocaci\u00f3n de ofrendas florales en monumentos',
      'Visitar el sitio hist\u00f3rico de La Demajagua en el oriente de Cuba',
      'Escuchar discursos sobre el movimiento independentista',
      'Programas escolares que ense\u00f1an a los ni\u00f1os sobre C\u00e9spedes y las guerras de independencia',
      'Exhibir banderas cubanas y decoraciones patri\u00f3ticas',
    ],
  },

  funFacts: {
    en: [
      'C\u00e9spedes freed his 30 slaves before launching the rebellion, setting an example of commitment to equality.',
      "The Ten Years' War resulted in over 200,000 deaths and devastated Cuba's eastern sugar industry.",
      'October 10 and the Grito de Yara predate Cuba\'s eventual independence by 30 years.',
      'The bell C\u00e9spedes rang to announce the uprising, known as the La Demajagua bell, is a national symbol.',
      'Cuba\'s three wars of independence (1868\u20131898) spanned 30 years before finally achieving freedom from Spain.',
    ],
    fr: [
      'C\u00e9spedes lib\u00e9ra ses 30 esclaves avant de lancer la r\u00e9bellion, montrant l\'exemple de l\'engagement envers l\'\u00e9galit\u00e9.',
      'La Guerre de Dix Ans causa plus de 200 000 morts et d\u00e9vasta l\'industrie sucri\u00e8re de l\'est de Cuba.',
      'Le 10 octobre et le Grito de Yara pr\u00e9c\u00e8dent l\'ind\u00e9pendance effective de Cuba de 30 ans.',
      'La cloche que C\u00e9spedes fit sonner pour annoncer le soul\u00e8vement, connue comme la cloche de La Demajagua, est un symbole national.',
      'Les trois guerres d\'ind\u00e9pendance de Cuba (1868\u20131898) s\'\u00e9tendirent sur 30 ans avant d\'obtenir la libert\u00e9 de l\'Espagne.',
    ],
    es: [
      'C\u00e9spedes liber\u00f3 a sus 30 esclavos antes de lanzar la rebeli\u00f3n, dando ejemplo de compromiso con la igualdad.',
      'La Guerra de los Diez A\u00f1os result\u00f3 en m\u00e1s de 200,000 muertes y devast\u00f3 la industria azucarera del oriente de Cuba.',
      'El 10 de octubre y el Grito de Yara preceden la independencia efectiva de Cuba por 30 a\u00f1os.',
      'La campana que C\u00e9spedes hizo sonar para anunciar el levantamiento, conocida como la campana de La Demajagua, es un s\u00edmbolo nacional.',
      'Las tres guerras de independencia de Cuba (1868\u20131898) abarcaron 30 a\u00f1os antes de finalmente lograr la libertad de Espa\u00f1a.',
    ],
  },

  planningChecklist: {
    en: [
      'Visit the La Demajagua national monument in Manzanillo',
      'Learn about the three Cuban wars of independence before the holiday',
      'Attend local patriotic events and ceremonies',
      'Explore museums dedicated to the independence movement',
      'Teach children about C\u00e9spedes and his role in Cuban history',
    ],
    fr: [
      'Visiter le monument national de La Demajagua \u00e0 Manzanillo',
      'Se renseigner sur les trois guerres d\'ind\u00e9pendance cubaines avant le jour f\u00e9ri\u00e9',
      'Assister aux \u00e9v\u00e9nements patriotiques et c\u00e9r\u00e9monies locaux',
      'Explorer les mus\u00e9es d\u00e9di\u00e9s au mouvement ind\u00e9pendantiste',
      'Enseigner aux enfants l\'histoire de C\u00e9spedes et son r\u00f4le dans l\'histoire cubaine',
    ],
    es: [
      'Visitar el monumento nacional de La Demajagua en Manzanillo',
      'Aprender sobre las tres guerras de independencia cubanas antes del d\u00eda festivo',
      'Asistir a eventos patri\u00f3ticos y ceremonias locales',
      'Explorar museos dedicados al movimiento independentista',
      'Ense\u00f1ar a los ni\u00f1os sobre C\u00e9spedes y su papel en la historia cubana',
    ],
  },

  relatedHolidays: ['cu_liberation-day', 'cu_rebellion-day'],

  seo: {
    en: {
      titleTemplate: 'Cuba Independence War Anniversary {year} \u2014 October 10 Countdown',
      descriptionTemplate: 'When is the Independence War Anniversary in Cuba {year}? Live countdown to October 10, Grito de Yara history, and celebration guide.',
      keywords: ['Cuba Independence War', 'Grito de Yara', 'October 10 Cuba', 'Carlos Manuel de C\u00e9spedes', 'Ten Years War Cuba'],
    },
    fr: {
      titleTemplate: "Anniversaire de la guerre d'ind\u00e9pendance Cuba {year} \u2014 Compte \u00e0 rebours du 10 octobre",
      descriptionTemplate: "Quand est l'anniversaire de la guerre d'ind\u00e9pendance \u00e0 Cuba {year} ? Compte \u00e0 rebours, histoire du Grito de Yara et guide.",
      keywords: ["Guerre d'ind\u00e9pendance Cuba", 'Grito de Yara', '10 octobre Cuba', 'Carlos Manuel de C\u00e9spedes', 'Guerre de Dix Ans'],
    },
    es: {
      titleTemplate: 'Aniversario de la Guerra de Independencia Cuba {year} \u2014 Cuenta regresiva del 10 de octubre',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el Aniversario de la Guerra de Independencia en Cuba {year}? Cuenta regresiva, historia del Grito de Yara y gu\u00eda.',
      keywords: ['Guerra de Independencia Cuba', 'Grito de Yara', '10 de octubre Cuba', 'Carlos Manuel de C\u00e9spedes', 'Guerra de los Diez A\u00f1os'],
    },
  },

  faq: [
    {
      question: { en: 'When is the Independence War Anniversary {year} in Cuba?', fr: "Quand est l'anniversaire de la guerre d'ind\u00e9pendance {year} \u00e0 Cuba ?", es: '\u00bfCu\u00e1ndo es el Aniversario de la Guerra de Independencia {year} en Cuba?' },
      answer: {
        en: 'The Independence War Anniversary {year} in Cuba is on {date}. It is always October 10.',
        fr: "L'anniversaire de la guerre d'ind\u00e9pendance {year} \u00e0 Cuba est le {date}. C'est toujours le 10 octobre.",
        es: 'El Aniversario de la Guerra de Independencia {year} en Cuba es el {date}. Siempre es el 10 de octubre.',
      },
    },
    {
      question: { en: 'What is the Grito de Yara?', fr: "Qu'est-ce que le Grito de Yara ?", es: '\u00bfQu\u00e9 es el Grito de Yara?' },
      answer: {
        en: "The Grito de Yara (Cry of Yara) was the declaration of Cuban independence issued by Carlos Manuel de C\u00e9spedes on October 10, 1868. He freed his slaves and called Cubans to arms, launching the Ten Years' War against Spain.",
        fr: "Le Grito de Yara (Cri de Yara) fut la d\u00e9claration d'ind\u00e9pendance cubaine \u00e9mise par Carlos Manuel de C\u00e9spedes le 10 octobre 1868. Il lib\u00e9ra ses esclaves et appela les Cubains aux armes, lan\u00e7ant la Guerre de Dix Ans contre l'Espagne.",
        es: "El Grito de Yara fue la declaraci\u00f3n de independencia cubana emitida por Carlos Manuel de C\u00e9spedes el 10 de octubre de 1868. Liber\u00f3 a sus esclavos y llam\u00f3 a los cubanos a las armas, iniciando la Guerra de los Diez A\u00f1os contra Espa\u00f1a.",
      },
    },
    {
      question: { en: 'Who was Carlos Manuel de C\u00e9spedes?', fr: 'Qui \u00e9tait Carlos Manuel de C\u00e9spedes ?', es: '\u00bfQui\u00e9n fue Carlos Manuel de C\u00e9spedes?' },
      answer: {
        en: "Carlos Manuel de C\u00e9spedes was a wealthy sugar planter who freed his slaves and launched Cuba's first war of independence in 1868. Known as the 'Father of the Homeland,' he served as the first president of the Republic in Arms.",
        fr: "Carlos Manuel de C\u00e9spedes \u00e9tait un riche planteur de canne \u00e0 sucre qui lib\u00e9ra ses esclaves et lan\u00e7a la premi\u00e8re guerre d'ind\u00e9pendance de Cuba en 1868. Connu comme le \u00ab P\u00e8re de la Patrie \u00bb, il fut le premier pr\u00e9sident de la R\u00e9publique en Armes.",
        es: "Carlos Manuel de C\u00e9spedes fue un rico hacendado azucarero que liber\u00f3 a sus esclavos y lanz\u00f3 la primera guerra de independencia de Cuba en 1868. Conocido como el 'Padre de la Patria', sirvi\u00f3 como el primer presidente de la Rep\u00fablica en Armas.",
      },
    },
    {
      question: { en: 'Is October 10 a public holiday in Cuba?', fr: 'Le 10 octobre est-il un jour f\u00e9ri\u00e9 \u00e0 Cuba ?', es: '\u00bfEs el 10 de octubre un d\u00eda festivo en Cuba?' },
      answer: {
        en: 'Yes, October 10 is an official public holiday in Cuba, commemorating the start of the independence movement and honoring the nation\'s founding hero.',
        fr: "Oui, le 10 octobre est un jour f\u00e9ri\u00e9 officiel \u00e0 Cuba, comm\u00e9morant le d\u00e9but du mouvement ind\u00e9pendantiste et honorant le h\u00e9ros fondateur de la nation.",
        es: 'S\u00ed, el 10 de octubre es un d\u00eda festivo oficial en Cuba, conmemorando el inicio del movimiento independentista y honrando al h\u00e9roe fundador de la naci\u00f3n.',
      },
    },
  ],

  icon: '\ud83d\udcdc',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmasDay: HolidayData = {
  id: 'cu_christmas',
  countryCode: 'cu',
  slugs: { en: 'christmas-day', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'No\u00ebl', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: 'Christmas Day on December 25 was restored as an official holiday in Cuba in 1998 after being banned following the revolution. The Noche Buena (Christmas Eve) dinner is the centerpiece of the celebration, bringing families together for a festive meal.',
    fr: "No\u00ebl, le 25 d\u00e9cembre, fut r\u00e9tabli comme jour f\u00e9ri\u00e9 officiel \u00e0 Cuba en 1998 apr\u00e8s avoir \u00e9t\u00e9 supprim\u00e9 apr\u00e8s la r\u00e9volution. Le d\u00eener de Noche Buena (veille de No\u00ebl) est au c\u0153ur de la c\u00e9l\u00e9bration, r\u00e9unissant les familles pour un repas festif.",
    es: 'La Navidad, el 25 de diciembre, fue restaurada como d\u00eda festivo oficial en Cuba en 1998 despu\u00e9s de haber sido prohibida tras la revoluci\u00f3n. La cena de Noche Buena es el centro de la celebraci\u00f3n, reuniendo a las familias para una comida festiva.',
  },

  history: {
    en: "Christmas was celebrated in Cuba since the colonial era, but the revolutionary government declared Cuba an atheist state in 1969 and removed Christmas from the list of public holidays. For nearly three decades, Christmas celebrations were discouraged and the holiday was largely absent from public life.\n\nIn 1997, ahead of Pope John Paul II's historic visit to Cuba in January 1998, Fidel Castro restored Christmas as an official public holiday. The restoration was seen as a gesture of goodwill toward the Catholic Church and the Cuban people.\n\nSince its restoration, Christmas has made a gradual comeback in Cuban culture. While not as commercialized as in other countries, Noche Buena (Christmas Eve) remains a deeply cherished family tradition centered around a festive dinner.",
    fr: "No\u00ebl \u00e9tait c\u00e9l\u00e9br\u00e9 \u00e0 Cuba depuis l'\u00e9poque coloniale, mais le gouvernement r\u00e9volutionnaire d\u00e9clara Cuba \u00c9tat ath\u00e9e en 1969 et retira No\u00ebl de la liste des jours f\u00e9ri\u00e9s. Pendant pr\u00e8s de trois d\u00e9cennies, les c\u00e9l\u00e9brations de No\u00ebl furent d\u00e9courag\u00e9es.\n\nEn 1997, avant la visite historique du pape Jean-Paul II \u00e0 Cuba en janvier 1998, Fidel Castro r\u00e9tablit No\u00ebl comme jour f\u00e9ri\u00e9 officiel. La restauration fut per\u00e7ue comme un geste de bonne volont\u00e9 envers l'\u00c9glise catholique et le peuple cubain.\n\nDepuis sa restauration, No\u00ebl a fait un retour progressif dans la culture cubaine. Bien que moins commercialis\u00e9 que dans d'autres pays, la Noche Buena reste une tradition familiale profond\u00e9ment ch\u00e9rie.",
    es: "La Navidad se celebraba en Cuba desde la \u00e9poca colonial, pero el gobierno revolucionario declar\u00f3 a Cuba un estado ateo en 1969 y elimin\u00f3 la Navidad de la lista de d\u00edas festivos. Durante casi tres d\u00e9cadas, las celebraciones navide\u00f1as fueron desalentadas y la festividad estuvo en gran parte ausente de la vida p\u00fablica.\n\nEn 1997, antes de la hist\u00f3rica visita del Papa Juan Pablo II a Cuba en enero de 1998, Fidel Castro restaur\u00f3 la Navidad como d\u00eda festivo oficial. La restauraci\u00f3n fue vista como un gesto de buena voluntad hacia la Iglesia Cat\u00f3lica y el pueblo cubano.\n\nDesde su restauraci\u00f3n, la Navidad ha hecho un regreso gradual en la cultura cubana. Aunque no tan comercializada como en otros pa\u00edses, la Noche Buena sigue siendo una tradici\u00f3n familiar profundamente querida centrada en una cena festiva.",
  },

  traditions: {
    en: [
      'Gathering for a Noche Buena (Christmas Eve) dinner with roast pork',
      'Preparing traditional Cuban dishes: lech\u00f3n asado, arroz con frijoles negros, and yuca con mojo',
      'Attending midnight Mass for those who are religious',
      'Exchanging simple gifts with family and friends',
      'Enjoying live music, dancing, and festive gatherings',
      'Decorating homes with modest Christmas decorations',
    ],
    fr: [
      'Se r\u00e9unir pour un d\u00eener de Noche Buena (veille de No\u00ebl) avec du porc r\u00f4ti',
      'Pr\u00e9parer des plats cubains traditionnels : lech\u00f3n asado, arroz con frijoles negros et yuca con mojo',
      'Assister \u00e0 la messe de minuit pour les croyants',
      '\u00c9changer des cadeaux simples avec la famille et les amis',
      'Profiter de la musique live, de la danse et des rassemblements festifs',
      'D\u00e9corer les maisons avec des d\u00e9corations de No\u00ebl modestes',
    ],
    es: [
      'Reunirse para una cena de Noche Buena con cerdo asado',
      'Preparar platos cubanos tradicionales: lech\u00f3n asado, arroz con frijoles negros y yuca con mojo',
      'Asistir a la Misa del Gallo para quienes son religiosos',
      'Intercambiar regalos sencillos con familia y amigos',
      'Disfrutar de m\u00fasica en vivo, baile y reuniones festivas',
      'Decorar los hogares con adornos navide\u00f1os modestos',
    ],
  },

  funFacts: {
    en: [
      'Christmas was banned in Cuba from 1969 to 1997 \u2014 nearly 30 years without an official Christmas holiday.',
      'The restoration of Christmas was directly linked to Pope John Paul II\'s visit to Cuba in January 1998.',
      'Noche Buena dinner traditionally features a whole roast pig (lech\u00f3n asado) as the centerpiece.',
      'Cuban Christmas is less commercialized than in most Western countries, focusing on family and food rather than gifts.',
      'Despite years of suppression, many Cuban families secretly continued celebrating Christmas at home.',
    ],
    fr: [
      'No\u00ebl fut interdit \u00e0 Cuba de 1969 \u00e0 1997 \u2014 pr\u00e8s de 30 ans sans jour f\u00e9ri\u00e9 officiel de No\u00ebl.',
      'La restauration de No\u00ebl fut directement li\u00e9e \u00e0 la visite du pape Jean-Paul II \u00e0 Cuba en janvier 1998.',
      'Le d\u00eener de Noche Buena pr\u00e9sente traditionnellement un cochon r\u00f4ti entier (lech\u00f3n asado) comme pi\u00e8ce ma\u00eetresse.',
      'No\u00ebl cubain est moins commercialis\u00e9 que dans la plupart des pays occidentaux, se concentrant sur la famille et la nourriture.',
      'Malgr\u00e9 des ann\u00e9es de suppression, de nombreuses familles cubaines ont secr\u00e8tement continu\u00e9 \u00e0 c\u00e9l\u00e9brer No\u00ebl chez elles.',
    ],
    es: [
      'La Navidad estuvo prohibida en Cuba de 1969 a 1997, casi 30 a\u00f1os sin un d\u00eda festivo navide\u00f1o oficial.',
      'La restauraci\u00f3n de la Navidad estuvo directamente vinculada a la visita del Papa Juan Pablo II a Cuba en enero de 1998.',
      'La cena de Noche Buena tradicionalmente presenta un cerdo asado entero (lech\u00f3n asado) como plato principal.',
      'La Navidad cubana es menos comercializada que en la mayor\u00eda de los pa\u00edses occidentales, centr\u00e1ndose en la familia y la comida.',
      'A pesar de a\u00f1os de supresi\u00f3n, muchas familias cubanas secretamente continuaron celebrando la Navidad en casa.',
    ],
  },

  planningChecklist: {
    en: [
      'Source a whole pig for the lech\u00f3n asado or plan an alternative roast',
      'Prepare traditional sides: black beans, rice, yuca con mojo, and fried plantains',
      'Invite extended family for the Noche Buena dinner',
      'Attend midnight Mass if observing the religious tradition',
      'Plan simple, meaningful gifts for family members',
    ],
    fr: [
      'Trouver un cochon entier pour le lech\u00f3n asado ou pr\u00e9voir un r\u00f4ti alternatif',
      'Pr\u00e9parer les accompagnements traditionnels : haricots noirs, riz, yuca con mojo et bananes plantains frites',
      'Inviter la famille \u00e9largie pour le d\u00eener de Noche Buena',
      'Assister \u00e0 la messe de minuit si l\'on observe la tradition religieuse',
      'Pr\u00e9voir des cadeaux simples et significatifs pour les membres de la famille',
    ],
    es: [
      'Conseguir un cerdo entero para el lech\u00f3n asado o planear un asado alternativo',
      'Preparar los acompa\u00f1amientos tradicionales: frijoles negros, arroz, yuca con mojo y pl\u00e1tanos fritos',
      'Invitar a la familia extendida para la cena de Noche Buena',
      'Asistir a la Misa del Gallo si se observa la tradici\u00f3n religiosa',
      'Planear regalos sencillos y significativos para los miembros de la familia',
    ],
  },

  relatedHolidays: ['cu_liberation-day', 'cu_victory-day'],

  seo: {
    en: {
      titleTemplate: 'Christmas in Cuba {year} \u2014 Navidad Countdown & Traditions',
      descriptionTemplate: 'When is Christmas {year} in Cuba? Live countdown to December 25, Noche Buena traditions, and the history of Christmas in Cuba.',
      keywords: ['Christmas Cuba', 'Navidad Cuba', 'Noche Buena Cuba', 'Cuban Christmas traditions', 'Cuba holiday countdown'],
    },
    fr: {
      titleTemplate: 'No\u00ebl \u00e0 Cuba {year} \u2014 Compte \u00e0 rebours et traditions',
      descriptionTemplate: 'Quand est No\u00ebl {year} \u00e0 Cuba ? Compte \u00e0 rebours, traditions de Noche Buena et histoire de No\u00ebl \u00e0 Cuba.',
      keywords: ['No\u00ebl Cuba', 'Navidad Cuba', 'Noche Buena Cuba', 'traditions No\u00ebl cubaines', 'f\u00eates Cuba'],
    },
    es: {
      titleTemplate: 'Navidad en Cuba {year} \u2014 Cuenta regresiva y tradiciones',
      descriptionTemplate: '\u00bfCu\u00e1ndo es Navidad {year} en Cuba? Cuenta regresiva, tradiciones de Noche Buena e historia de la Navidad en Cuba.',
      keywords: ['Navidad Cuba', 'Noche Buena Cuba', 'tradiciones navide\u00f1as cubanas', 'lech\u00f3n asado Navidad', 'fiestas Cuba'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in Cuba?', fr: 'Quand est No\u00ebl {year} \u00e0 Cuba ?', es: '\u00bfCu\u00e1ndo es Navidad {year} en Cuba?' },
      answer: {
        en: 'Christmas {year} in Cuba is on {date}. It is always December 25.',
        fr: "No\u00ebl {year} \u00e0 Cuba est le {date}. C'est toujours le 25 d\u00e9cembre.",
        es: 'La Navidad {year} en Cuba es el {date}. Siempre es el 25 de diciembre.',
      },
    },
    {
      question: { en: 'Was Christmas really banned in Cuba?', fr: 'No\u00ebl a-t-il vraiment \u00e9t\u00e9 interdit \u00e0 Cuba ?', es: '\u00bfLa Navidad fue realmente prohibida en Cuba?' },
      answer: {
        en: 'Yes, Christmas was removed as an official holiday in 1969 when Cuba declared itself an atheist state. It was restored in 1997 ahead of Pope John Paul II\'s visit in January 1998.',
        fr: "Oui, No\u00ebl fut retir\u00e9 des jours f\u00e9ri\u00e9s officiels en 1969 lorsque Cuba se d\u00e9clara \u00c9tat ath\u00e9e. Il fut r\u00e9tabli en 1997 avant la visite du pape Jean-Paul II en janvier 1998.",
        es: 'S\u00ed, la Navidad fue eliminada como d\u00eda festivo oficial en 1969 cuando Cuba se declar\u00f3 estado ateo. Fue restaurada en 1997 antes de la visita del Papa Juan Pablo II en enero de 1998.',
      },
    },
    {
      question: { en: 'What is Noche Buena?', fr: "Qu'est-ce que la Noche Buena ?", es: '\u00bfQu\u00e9 es la Noche Buena?' },
      answer: {
        en: 'Noche Buena (Christmas Eve) is the main celebration in Cuban Christmas tradition. Families gather for a festive dinner featuring lech\u00f3n asado (roast pork), black beans, rice, yuca, and other traditional Cuban dishes.',
        fr: "Noche Buena (veille de No\u00ebl) est la c\u00e9l\u00e9bration principale de la tradition de No\u00ebl cubain. Les familles se r\u00e9unissent pour un d\u00eener festif avec lech\u00f3n asado (porc r\u00f4ti), haricots noirs, riz, yuca et d'autres plats cubains traditionnels.",
        es: 'La Noche Buena es la celebraci\u00f3n principal de la tradici\u00f3n navide\u00f1a cubana. Las familias se re\u00fanen para una cena festiva con lech\u00f3n asado, frijoles negros, arroz, yuca y otros platos cubanos tradicionales.',
      },
    },
    {
      question: { en: 'Is Christmas a public holiday in Cuba?', fr: 'No\u00ebl est-il un jour f\u00e9ri\u00e9 \u00e0 Cuba ?', es: '\u00bfEs Navidad un d\u00eda festivo en Cuba?' },
      answer: {
        en: 'Yes, Christmas Day has been an official public holiday in Cuba since 1998. It was restored after nearly 30 years of being absent from the national calendar.',
        fr: "Oui, No\u00ebl est un jour f\u00e9ri\u00e9 officiel \u00e0 Cuba depuis 1998. Il fut r\u00e9tabli apr\u00e8s pr\u00e8s de 30 ans d'absence du calendrier national.",
        es: 'S\u00ed, la Navidad es un d\u00eda festivo oficial en Cuba desde 1998. Fue restaurada despu\u00e9s de casi 30 a\u00f1os de estar ausente del calendario nacional.',
      },
    },
  ],

  colorTheme: 'christmas',
  icon: '\ud83c\udf84',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const cuHolidays: HolidayData[] = [
  liberationDay,
  victoryDay,
  labourDay,
  rebellionDay,
  independenceWar,
  christmasDay,
];

export default cuHolidays;
