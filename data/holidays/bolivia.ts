/**
 * Bolivia holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getCarnivalTuesday, getGoodFriday } from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'bo_new-years-day',
  countryCode: 'bo',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'ano-nuevo' },
  names: { en: "New Year's Day", fr: "Jour de l'An", es: 'Ano Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 is a public holiday in Bolivia, celebrated with fireworks, family gatherings, and traditional rituals. Bolivians welcome the new year with customs that blend Catholic, Andean, and Aymara traditions.",
    fr: "Le Jour de l'An, le 1er janvier, est un jour ferie en Bolivie, celebre avec des feux d'artifice, des reunions familiales et des rituels traditionnels. Les Boliviens accueillent la nouvelle annee avec des coutumes qui melangent les traditions catholiques, andines et aymaras.",
    es: 'El Ano Nuevo, el 1 de enero, es un dia festivo en Bolivia, celebrado con fuegos artificiales, reuniones familiares y rituales tradicionales. Los bolivianos reciben el nuevo ano con costumbres que mezclan tradiciones catolicas, andinas y aymaras.',
  },

  history: {
    en: "New Year's celebrations in Bolivia reflect the country's rich multicultural heritage. In cities like La Paz, Cochabamba, and Santa Cruz, festivities include fireworks, family dinners, and the same luck-bringing customs found across Latin America such as eating twelve grapes at midnight.\n\nIn Aymara and Quechua communities, the new year carries additional spiritual significance linked to Andean cosmovision. While the Aymara New Year (Willkakuti) is celebrated separately on the winter solstice in June, many indigenous Bolivians also participate in January 1 celebrations, creating a unique blend of traditions.\n\nThe evening of December 31 typically features a large family dinner, followed by fireworks at midnight. Bolivians also practice rituals like wearing colored underwear (yellow for money, red for love, green for health) and setting off firecrackers to ward off evil spirits.",
    fr: "Les celebrations du Nouvel An en Bolivie refletent le riche patrimoine multiculturel du pays. Dans des villes comme La Paz, Cochabamba et Santa Cruz, les festivites comprennent des feux d'artifice, des diners en famille et les memes coutumes porte-bonheur qu'on trouve en Amerique latine, comme manger douze raisins a minuit.\n\nDans les communautes aymaras et quechuas, la nouvelle annee porte une signification spirituelle supplementaire liee a la cosmovision andine. Bien que le Nouvel An aymara (Willkakuti) soit celebre separement au solstice d'hiver en juin, de nombreux Boliviens autochtones participent egalement aux celebrations du 1er janvier, creant un melange unique de traditions.\n\nLa soiree du 31 decembre comprend generalement un grand diner familial, suivi de feux d'artifice a minuit. Les Boliviens pratiquent egalement des rituels comme porter des sous-vetements colores (jaune pour l'argent, rouge pour l'amour, vert pour la sante) et allumer des petards pour eloigner les mauvais esprits.",
    es: "Las celebraciones de Ano Nuevo en Bolivia reflejan el rico patrimonio multicultural del pais. En ciudades como La Paz, Cochabamba y Santa Cruz, las festividades incluyen fuegos artificiales, cenas familiares y las mismas costumbres para atraer suerte que se encuentran en America Latina, como comer doce uvas a medianoche.\n\nEn las comunidades aymaras y quechuas, el nuevo ano tiene un significado espiritual adicional vinculado a la cosmovision andina. Aunque el Ano Nuevo aymara (Willkakuti) se celebra por separado en el solsticio de invierno en junio, muchos bolivianos indigenas tambien participan en las celebraciones del 1 de enero, creando una mezcla unica de tradiciones.\n\nLa noche del 31 de diciembre tipicamente incluye una gran cena familiar, seguida de fuegos artificiales a medianoche. Los bolivianos tambien practican rituales como usar ropa interior de colores (amarilla para el dinero, roja para el amor, verde para la salud) y encender petardos para alejar los malos espiritus.",
  },

  traditions: {
    en: [
      'Eating twelve grapes at midnight for good luck in each month of the new year',
      'Wearing colored underwear — yellow for prosperity, red for love, green for health',
      'Setting off fireworks and firecrackers at midnight',
      'Sharing a family dinner with traditional Bolivian dishes',
      'Running around the block with a suitcase to attract travel opportunities',
    ],
    fr: [
      'Manger douze raisins a minuit pour la bonne chance chaque mois de la nouvelle annee',
      "Porter des sous-vetements colores — jaune pour la prosperite, rouge pour l'amour, vert pour la sante",
      "Tirer des feux d'artifice et des petards a minuit",
      'Partager un diner familial avec des plats traditionnels boliviens',
      'Courir autour du pate de maisons avec une valise pour attirer les opportunites de voyage',
    ],
    es: [
      'Comer doce uvas a medianoche para la buena suerte en cada mes del nuevo ano',
      'Usar ropa interior de colores — amarilla para la prosperidad, roja para el amor, verde para la salud',
      'Lanzar fuegos artificiales y petardos a medianoche',
      'Compartir una cena familiar con platos tradicionales bolivianos',
      'Correr alrededor de la cuadra con una maleta para atraer oportunidades de viaje',
    ],
  },

  funFacts: {
    en: [
      'Bolivia celebrates two "new years" — January 1 and the Aymara New Year (Willkakuti) on the winter solstice in June.',
      'In La Paz, New Year\'s Eve fireworks are particularly dramatic due to the city\'s high altitude, creating a breathtaking display across the mountain valley.',
      'Many Bolivians buy miniature items at the Alasitas fair (held around January) that represent their wishes for the coming year.',
      'Firecrackers on New Year\'s Eve in Bolivian cities can be incredibly loud and prolonged, sometimes lasting for hours.',
      'Some Bolivian families bury small offerings in the earth at midnight to thank Pachamama (Mother Earth) for the past year.',
    ],
    fr: [
      'La Bolivie celebre deux "nouveaux ans" — le 1er janvier et le Nouvel An aymara (Willkakuti) au solstice d\'hiver en juin.',
      "A La Paz, les feux d'artifice du Nouvel An sont particulierement spectaculaires en raison de la haute altitude de la ville, creant un spectacle a couper le souffle dans la vallee de montagne.",
      'De nombreux Boliviens achetent des articles miniatures a la foire d\'Alasitas (tenue vers janvier) qui representent leurs souhaits pour l\'annee a venir.',
      "Les petards du Nouvel An dans les villes boliviennes peuvent etre incroyablement bruyants et prolonges, durant parfois des heures.",
      'Certaines familles boliviennes enterrent de petites offrandes dans la terre a minuit pour remercier la Pachamama (Terre Mere) pour l\'annee ecoulee.',
    ],
    es: [
      'Bolivia celebra dos "anos nuevos" — el 1 de enero y el Ano Nuevo aymara (Willkakuti) en el solsticio de invierno en junio.',
      'En La Paz, los fuegos artificiales de Noche Vieja son particularmente dramaticos debido a la gran altitud de la ciudad, creando un espectaculo impresionante en todo el valle de la montana.',
      'Muchos bolivianos compran articulos en miniatura en la feria de Alasitas (celebrada alrededor de enero) que representan sus deseos para el ano venidero.',
      'Los petardos de Noche Vieja en las ciudades bolivianas pueden ser increiblemente fuertes y prolongados, durando a veces horas.',
      'Algunas familias bolivianas entierran pequenas ofrendas en la tierra a medianoche para agradecer a la Pachamama (Madre Tierra) por el ano pasado.',
    ],
  },

  planningChecklist: {
    en: [
      'Stock up on grapes, fireworks, and colored underwear for traditions',
      'Plan your family dinner menu with traditional Bolivian dishes',
      'Be aware of heavy firework and firecracker use — keep pets safe indoors',
      'Arrange transportation as celebrations can affect road conditions',
      'Visit the Alasitas fair for miniature lucky charms if in La Paz',
    ],
    fr: [
      "Faire le plein de raisins, de feux d'artifice et de sous-vetements colores pour les traditions",
      'Planifier le menu du diner familial avec des plats traditionnels boliviens',
      "Etre conscient de l'utilisation intense de feux d'artifice et de petards — garder les animaux en securite a l'interieur",
      'Organiser le transport car les celebrations peuvent affecter les conditions routieres',
      'Visiter la foire d\'Alasitas pour des porte-bonheur miniatures si vous etes a La Paz',
    ],
    es: [
      'Abastecerse de uvas, fuegos artificiales y ropa interior de colores para las tradiciones',
      'Planificar el menu de la cena familiar con platos tradicionales bolivianos',
      'Tener en cuenta el uso intenso de fuegos artificiales y petardos — mantener a las mascotas seguras en interiores',
      'Organizar el transporte ya que las celebraciones pueden afectar las condiciones de las carreteras',
      'Visitar la feria de Alasitas para amuletos en miniatura si esta en La Paz',
    ],
  },

  relatedHolidays: ['bo_christmas', 'bo_carnival'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Bolivia — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in Bolivia? Live countdown to January 1, Bolivian traditions, and celebration guide.",
      keywords: ["New Year's Day Bolivia", 'Ano Nuevo Bolivia', 'Bolivia New Year traditions', 'Bolivian holidays', "New Year's countdown"],
    },
    fr: {
      titleTemplate: "Jour de l'An {year} Bolivie — Compte a rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'An {year} en Bolivie ? Compte a rebours, traditions boliviennes et guide de celebration.",
      keywords: ["Jour de l'An Bolivie", 'Nouvel An Bolivie', 'traditions boliviennes', 'jours feries Bolivie', "compte a rebours Nouvel An"],
    },
    es: {
      titleTemplate: 'Ano Nuevo {year} Bolivia — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es Ano Nuevo {year} en Bolivia? Cuenta regresiva al 1 de enero, tradiciones bolivianas y guia de celebracion.',
      keywords: ['Ano Nuevo Bolivia', 'feriados Bolivia', 'tradiciones bolivianas', 'dias festivos Bolivia', 'cuenta regresiva Ano Nuevo'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in Bolivia?", fr: "Quand est le Jour de l'An {year} en Bolivie ?", es: 'Cuando es Ano Nuevo {year} en Bolivia?' },
      answer: {
        en: "New Year's Day {year} in Bolivia is on {date}. It is always January 1 and is a national public holiday.",
        fr: "Le Jour de l'An {year} en Bolivie est le {date}. C'est toujours le 1er janvier et c'est un jour ferie national.",
        es: 'El Ano Nuevo {year} en Bolivia es el {date}. Siempre es el 1 de enero y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'What is the Aymara New Year?', fr: "Qu'est-ce que le Nouvel An aymara ?", es: 'Que es el Ano Nuevo aymara?' },
      answer: {
        en: 'The Aymara New Year (Willkakuti) is celebrated on the winter solstice (June 21) at the ancient ruins of Tiwanaku. It marks the return of the sun and the beginning of a new agricultural cycle in Andean cosmovision. It is separate from the January 1 celebration.',
        fr: "Le Nouvel An aymara (Willkakuti) est celebre au solstice d'hiver (21 juin) dans les ruines antiques de Tiwanaku. Il marque le retour du soleil et le debut d'un nouveau cycle agricole dans la cosmovision andine. Il est distinct de la celebration du 1er janvier.",
        es: 'El Ano Nuevo aymara (Willkakuti) se celebra en el solsticio de invierno (21 de junio) en las antiguas ruinas de Tiwanaku. Marca el retorno del sol y el inicio de un nuevo ciclo agricola en la cosmovision andina. Es distinto de la celebracion del 1 de enero.',
      },
    },
    {
      question: { en: 'What is the Alasitas fair?', fr: "Qu'est-ce que la foire d'Alasitas ?", es: 'Que es la feria de Alasitas?' },
      answer: {
        en: "The Alasitas fair is a traditional Bolivian market where people buy miniature versions of things they desire — houses, cars, money, diplomas — and have them blessed. Rooted in Aymara tradition, it is believed that Ekeko, the god of abundance, will grant the wishes. The fair is held around late January in La Paz.",
        fr: "La foire d'Alasitas est un marche traditionnel bolivien ou les gens achetent des versions miniatures de ce qu'ils desirent — maisons, voitures, argent, diplomes — et les font benir. Enracinee dans la tradition aymara, on croit qu'Ekeko, le dieu de l'abondance, exaucera les souhaits. La foire a lieu vers la fin janvier a La Paz.",
        es: 'La feria de Alasitas es un mercado tradicional boliviano donde la gente compra versiones en miniatura de las cosas que desea — casas, autos, dinero, diplomas — y las hace bendecir. Arraigada en la tradicion aymara, se cree que Ekeko, el dios de la abundancia, concedera los deseos. La feria se realiza a finales de enero en La Paz.',
      },
    },
    {
      question: { en: "Is New Year's Day a public holiday in Bolivia?", fr: "Le Jour de l'An est-il un jour ferie en Bolivie ?", es: 'Es Ano Nuevo un dia festivo en Bolivia?' },
      answer: {
        en: "Yes, January 1 is an official public holiday in Bolivia. Government offices, banks, and most businesses are closed.",
        fr: "Oui, le 1er janvier est un jour ferie officiel en Bolivie. Les bureaux gouvernementaux, les banques et la plupart des commerces sont fermes.",
        es: 'Si, el 1 de enero es un dia festivo oficial en Bolivia. Las oficinas gubernamentales, los bancos y la mayoria de los negocios estan cerrados.',
      },
    },
  ],

  colorTheme: 'new-year',
  icon: '\ud83c\udf86',
};

// ---------------------------------------------------------------------------
// Carnival — Carnival Tuesday
// ---------------------------------------------------------------------------

const carnival: HolidayData = {
  id: 'bo_carnival',
  countryCode: 'bo',
  slugs: { en: 'carnival', fr: 'carnaval', es: 'carnaval' },
  names: { en: 'Carnival', fr: 'Carnaval', es: 'Carnaval' },

  dateType: 'calculated',
  calculateDate: getCarnivalTuesday,

  descriptions: {
    en: 'Carnival in Bolivia is a spectacular celebration highlighted by the UNESCO-recognized Oruro Carnival, one of the greatest folkloric events in South America. Featuring the legendary Diablada dance, elaborate costumes, and Andean music, Bolivian Carnival blends indigenous and Catholic traditions.',
    fr: "Le Carnaval en Bolivie est une celebration spectaculaire mise en valeur par le Carnaval d'Oruro reconnu par l'UNESCO, l'un des plus grands evenements folkloriques d'Amerique du Sud. Avec la legendaire danse de la Diablada, des costumes elabores et de la musique andine, le Carnaval bolivien melange traditions indigenes et catholiques.",
    es: 'El Carnaval en Bolivia es una celebracion espectacular destacada por el Carnaval de Oruro reconocido por la UNESCO, uno de los mayores eventos folkloricos de Sudamerica. Con la legendaria danza de la Diablada, disfraces elaborados y musica andina, el Carnaval boliviano mezcla tradiciones indigenas y catolicas.',
  },

  history: {
    en: "The Oruro Carnival is Bolivia's most famous celebration and was declared a Masterpiece of the Oral and Intangible Heritage of Humanity by UNESCO in 2001. The celebration dates back over 200 years and centers on a pilgrimage to the Sanctuary of the Virgin of Socavon.\n\nThe Diablada (Dance of the Devils) is the carnival's signature performance, depicting the battle between good and evil through elaborate devil masks and costumes. This dance has roots in both pre-Columbian Andean mythology and Catholic theatrical traditions brought by Spanish missionaries.\n\nBeyond Oruro, Carnival is celebrated throughout Bolivia with water fights, music, dancing, and regional festivals. In Santa Cruz, the tropical carnival features samba-influenced parades, while highland communities maintain Andean musical traditions. The celebration typically spans several days before Ash Wednesday.",
    fr: "Le Carnaval d'Oruro est la celebration la plus celebre de Bolivie et a ete declare Chef-d'oeuvre du patrimoine oral et immateriel de l'humanite par l'UNESCO en 2001. La celebration remonte a plus de 200 ans et est centree sur un pelerinage au Sanctuaire de la Vierge du Socavon.\n\nLa Diablada (Danse des Diables) est le spectacle emblematique du carnaval, depeignant la bataille entre le bien et le mal a travers des masques de diable elabores et des costumes. Cette danse a des racines dans la mythologie andine precolombienne et les traditions theatrales catholiques apportees par les missionnaires espagnols.\n\nAu-dela d'Oruro, le Carnaval est celebre dans toute la Bolivie avec des batailles d'eau, de la musique, de la danse et des festivals regionaux. A Santa Cruz, le carnaval tropical presente des defiles d'influence samba, tandis que les communautes des hauts plateaux maintiennent les traditions musicales andines. La celebration s'etend generalement sur plusieurs jours avant le mercredi des Cendres.",
    es: "El Carnaval de Oruro es la celebracion mas famosa de Bolivia y fue declarado Obra Maestra del Patrimonio Oral e Intangible de la Humanidad por la UNESCO en 2001. La celebracion data de hace mas de 200 anos y se centra en una peregrinacion al Santuario de la Virgen del Socavon.\n\nLa Diablada (Danza de los Diablos) es el espectaculo emblematico del carnaval, representando la batalla entre el bien y el mal a traves de elaboradas mascaras de diablo y disfraces. Esta danza tiene raices tanto en la mitologia andina precolombina como en las tradiciones teatrales catolicas traidas por los misioneros espanoles.\n\nMas alla de Oruro, el Carnaval se celebra en toda Bolivia con batallas de agua, musica, baile y festivales regionales. En Santa Cruz, el carnaval tropical presenta desfiles de influencia samba, mientras que las comunidades del altiplano mantienen las tradiciones musicales andinas. La celebracion tipicamente se extiende por varios dias antes del Miercoles de Ceniza.",
  },

  traditions: {
    en: [
      'Watching the Diablada (Dance of the Devils) at the Oruro Carnival',
      'Pilgrimage to the Sanctuary of the Virgin of Socavon in Oruro',
      'Participating in water fights and foam battles across the country',
      'Enjoying the Morenada, Caporales, Tinku, and other traditional dances',
      'Attending tropical carnival parades in Santa Cruz',
      'Playing traditional Andean music with zamponas, charangos, and drums',
      'Sharing traditional foods like fricasé and api con pastel',
    ],
    fr: [
      "Regarder la Diablada (Danse des Diables) au Carnaval d'Oruro",
      "Pelerinage au Sanctuaire de la Vierge du Socavon a Oruro",
      "Participer aux batailles d'eau et de mousse a travers le pays",
      'Profiter de la Morenada, Caporales, Tinku et d\'autres danses traditionnelles',
      'Assister aux defiles du carnaval tropical a Santa Cruz',
      'Jouer de la musique andine traditionnelle avec zamponas, charangos et tambours',
      'Partager des plats traditionnels comme le fricasé et l\'api con pastel',
    ],
    es: [
      'Ver la Diablada (Danza de los Diablos) en el Carnaval de Oruro',
      'Peregrinacion al Santuario de la Virgen del Socavon en Oruro',
      'Participar en batallas de agua y espuma en todo el pais',
      'Disfrutar de la Morenada, Caporales, Tinku y otras danzas tradicionales',
      'Asistir a los desfiles del carnaval tropical en Santa Cruz',
      'Tocar musica andina tradicional con zamponas, charangos y tambores',
      'Compartir comidas tradicionales como fricasé y api con pastel',
    ],
  },

  funFacts: {
    en: [
      'The Oruro Carnival was declared UNESCO Intangible Cultural Heritage in 2001, one of the first in the world to receive this designation.',
      'A single Diablada costume can weigh up to 30 kilograms and cost thousands of dollars, with masks featuring elaborate horns, dragons, and serpents.',
      'Over 400,000 spectators attend the Oruro Carnival each year, while approximately 28,000 dancers and 10,000 musicians participate.',
      'The Morenada dance represents the suffering of African slaves brought to work in Bolivian silver mines during the colonial era.',
      'Bolivian Carnival water fights are so intense that many people carry plastic bags to protect their phones and cameras.',
    ],
    fr: [
      "Le Carnaval d'Oruro a ete declare patrimoine culturel immateriel de l'UNESCO en 2001, l'un des premiers au monde a recevoir cette designation.",
      "Un seul costume de Diablada peut peser jusqu'a 30 kilogrammes et couter des milliers de dollars, avec des masques arborant des cornes elaborees, des dragons et des serpents.",
      "Plus de 400 000 spectateurs assistent au Carnaval d'Oruro chaque annee, tandis qu'environ 28 000 danseurs et 10 000 musiciens participent.",
      "La danse de la Morenada represente la souffrance des esclaves africains amenes a travailler dans les mines d'argent boliviennes a l'epoque coloniale.",
      "Les batailles d'eau du Carnaval bolivien sont si intenses que de nombreuses personnes portent des sacs en plastique pour proteger leurs telephones et appareils photo.",
    ],
    es: [
      'El Carnaval de Oruro fue declarado Patrimonio Cultural Inmaterial de la UNESCO en 2001, uno de los primeros en el mundo en recibir esta designacion.',
      'Un solo traje de Diablada puede pesar hasta 30 kilogramos y costar miles de dolares, con mascaras que presentan cuernos elaborados, dragones y serpientes.',
      'Mas de 400.000 espectadores asisten al Carnaval de Oruro cada ano, mientras que aproximadamente 28.000 bailarines y 10.000 musicos participan.',
      'La danza de la Morenada representa el sufrimiento de los esclavos africanos traidos a trabajar en las minas de plata bolivianas durante la era colonial.',
      'Las batallas de agua del Carnaval boliviano son tan intensas que muchas personas llevan bolsas de plastico para proteger sus telefonos y camaras.',
    ],
  },

  planningChecklist: {
    en: [
      'Book accommodations in Oruro months in advance — hotels fill up quickly for Carnival',
      'Purchase Diablada performance tickets or find a good viewing spot early',
      'Bring waterproof protection for electronics during water fights',
      'Dress warmly for Oruro — the highland city can be cold even during Carnival',
      'Try the local cuisine, especially fricasé and api con pastel',
    ],
    fr: [
      "Reserver un hebergement a Oruro des mois a l'avance — les hotels se remplissent rapidement pour le Carnaval",
      'Acheter des billets pour les spectacles de Diablada ou trouver un bon point de vue tot',
      "Apporter une protection impermeble pour l'electronique pendant les batailles d'eau",
      "S'habiller chaudement pour Oruro — la ville des hauts plateaux peut etre froide meme pendant le Carnaval",
      'Essayer la cuisine locale, en particulier le fricasé et l\'api con pastel',
    ],
    es: [
      'Reservar alojamiento en Oruro con meses de anticipacion — los hoteles se llenan rapidamente para el Carnaval',
      'Comprar boletos para los espectaculos de Diablada o encontrar un buen punto de vista temprano',
      'Llevar proteccion impermeable para electronicos durante las batallas de agua',
      'Vestirse abrigado para Oruro — la ciudad del altiplano puede ser fria incluso durante el Carnaval',
      'Probar la cocina local, especialmente el fricasé y el api con pastel',
    ],
  },

  relatedHolidays: ['bo_good-friday', 'bo_new-years-day'],

  seo: {
    en: {
      titleTemplate: 'Carnival {year} Bolivia — Countdown & Oruro Guide',
      descriptionTemplate: 'When is Carnival {year} in Bolivia? Live countdown, Oruro Carnival UNESCO heritage, Diablada dance, and celebration guide.',
      keywords: ['Bolivia Carnival', 'Oruro Carnival', 'Diablada dance', 'Carnaval Bolivia', 'Carnival countdown'],
    },
    fr: {
      titleTemplate: 'Carnaval {year} Bolivie — Compte a rebours et guide d\'Oruro',
      descriptionTemplate: "Quand est le Carnaval {year} en Bolivie ? Compte a rebours, patrimoine UNESCO du Carnaval d'Oruro, Diablada et guide.",
      keywords: ['Carnaval Bolivie', "Carnaval d'Oruro", 'danse Diablada', 'jours feries Bolivie', 'compte a rebours Carnaval'],
    },
    es: {
      titleTemplate: 'Carnaval {year} Bolivia — Cuenta regresiva y guia de Oruro',
      descriptionTemplate: 'Cuando es el Carnaval {year} en Bolivia? Cuenta regresiva, patrimonio UNESCO del Carnaval de Oruro, Diablada y guia.',
      keywords: ['Carnaval Bolivia', 'Carnaval de Oruro', 'danza Diablada', 'feriados Bolivia', 'cuenta regresiva Carnaval'],
    },
  },

  faq: [
    {
      question: { en: 'When is Carnival {year} in Bolivia?', fr: 'Quand est le Carnaval {year} en Bolivie ?', es: 'Cuando es el Carnaval {year} en Bolivia?' },
      answer: {
        en: 'Carnival {year} in Bolivia falls on {date}. It is celebrated on the Tuesday before Ash Wednesday and the date changes each year based on Easter.',
        fr: "Le Carnaval {year} en Bolivie tombe le {date}. Il est celebre le mardi precedant le mercredi des Cendres et la date change chaque annee en fonction de Paques.",
        es: 'El Carnaval {year} en Bolivia cae el {date}. Se celebra el martes antes del Miercoles de Ceniza y la fecha cambia cada ano segun la Pascua.',
      },
    },
    {
      question: { en: 'What is the Diablada?', fr: "Qu'est-ce que la Diablada ?", es: 'Que es la Diablada?' },
      answer: {
        en: "The Diablada (Dance of the Devils) is the most iconic dance of the Oruro Carnival. Dancers wear elaborate devil masks and costumes to depict the eternal struggle between good and evil. The dance combines pre-Columbian Andean mythology with Catholic theatrical traditions.",
        fr: "La Diablada (Danse des Diables) est la danse la plus emblematique du Carnaval d'Oruro. Les danseurs portent des masques de diable elabores et des costumes pour representer la lutte eternelle entre le bien et le mal. La danse combine la mythologie andine precolombienne avec les traditions theatrales catholiques.",
        es: 'La Diablada (Danza de los Diablos) es la danza mas emblematica del Carnaval de Oruro. Los bailarines usan elaboradas mascaras de diablo y disfraces para representar la lucha eterna entre el bien y el mal. La danza combina la mitologia andina precolombina con las tradiciones teatrales catolicas.',
      },
    },
    {
      question: { en: 'Is the Oruro Carnival a UNESCO site?', fr: "Le Carnaval d'Oruro est-il un site de l'UNESCO ?", es: 'Es el Carnaval de Oruro patrimonio de la UNESCO?' },
      answer: {
        en: "Yes, the Oruro Carnival was proclaimed a Masterpiece of the Oral and Intangible Heritage of Humanity by UNESCO in 2001. It was one of the first cultural events in the world to receive this prestigious designation.",
        fr: "Oui, le Carnaval d'Oruro a ete proclame Chef-d'oeuvre du patrimoine oral et immateriel de l'humanite par l'UNESCO en 2001. Il a ete l'un des premiers evenements culturels au monde a recevoir cette designation prestigieuse.",
        es: 'Si, el Carnaval de Oruro fue proclamado Obra Maestra del Patrimonio Oral e Intangible de la Humanidad por la UNESCO en 2001. Fue uno de los primeros eventos culturales en el mundo en recibir esta prestigiosa designacion.',
      },
    },
    {
      question: { en: 'Is Carnival a public holiday in Bolivia?', fr: 'Le Carnaval est-il un jour ferie en Bolivie ?', es: 'Es el Carnaval un dia festivo en Bolivia?' },
      answer: {
        en: 'Yes, Carnival is an official public holiday in Bolivia. Government offices, banks, and most businesses close for the celebration.',
        fr: 'Oui, le Carnaval est un jour ferie officiel en Bolivie. Les bureaux gouvernementaux, les banques et la plupart des commerces ferment pour la celebration.',
        es: 'Si, el Carnaval es un dia festivo oficial en Bolivia. Las oficinas gubernamentales, los bancos y la mayoria de los negocios cierran para la celebracion.',
      },
    },
  ],

  colorTheme: 'carnival',
  icon: '\ud83c\udfad',
};

// ---------------------------------------------------------------------------
// Good Friday
// ---------------------------------------------------------------------------

const goodFriday: HolidayData = {
  id: 'bo_good-friday',
  countryCode: 'bo',
  slugs: { en: 'good-friday', fr: 'vendredi-saint', es: 'viernes-santo' },
  names: { en: 'Good Friday', fr: 'Vendredi Saint', es: 'Viernes Santo' },

  dateType: 'calculated',
  calculateDate: getGoodFriday,

  descriptions: {
    en: 'Good Friday (Viernes Santo) is a solemn public holiday in Bolivia, commemorating the crucifixion of Jesus Christ. It is observed with religious processions, church services, and fasting in this deeply Catholic country.',
    fr: 'Le Vendredi Saint (Viernes Santo) est un jour ferie solennel en Bolivie, commemorant la crucifixion de Jesus-Christ. Il est observe avec des processions religieuses, des services religieux et le jeune dans ce pays profondement catholique.',
    es: 'El Viernes Santo es un dia festivo solemne en Bolivia, conmemorando la crucifixion de Jesucristo. Se observa con procesiones religiosas, servicios religiosos y ayuno en este pais profundamente catolico.',
  },

  history: {
    en: "Good Friday is one of the most important religious observances in Bolivia, a country where approximately 70% of the population identifies as Roman Catholic. The day marks the crucifixion and death of Jesus Christ at Calvary, and Bolivians observe it with deep reverence.\n\nBolivia's Good Friday traditions reflect the country's unique blend of Catholic and indigenous spirituality. Colonial-era churches throughout the country host elaborate services and processions, with some communities incorporating Andean elements into their observances.\n\nThe Semana Santa (Holy Week) observances in cities like Sucre, Cochabamba, and Copacabana (on Lake Titicaca) are particularly elaborate, featuring street processions with religious floats, incense, and participants dressed in mourning attire. Many Bolivians fast, abstain from meat, and attend multiple church services throughout the day.",
    fr: "Le Vendredi Saint est l'une des observances religieuses les plus importantes de Bolivie, un pays ou environ 70% de la population s'identifie comme catholique romaine. Le jour marque la crucifixion et la mort de Jesus-Christ au Calvaire, et les Boliviens l'observent avec une profonde reverence.\n\nLes traditions du Vendredi Saint en Bolivie refletent le melange unique du pays entre la spiritualite catholique et indigene. Les eglises de l'epoque coloniale a travers le pays accueillent des services elabores et des processions, certaines communautes incorporant des elements andins dans leurs observances.\n\nLes observances de la Semana Santa (Semaine Sainte) dans des villes comme Sucre, Cochabamba et Copacabana (sur le lac Titicaca) sont particulierement elaborees, avec des processions de rue avec des chars religieux, de l'encens et des participants vetus en tenue de deuil. De nombreux Boliviens jeunent, s'abstiennent de viande et assistent a plusieurs services religieux tout au long de la journee.",
    es: "El Viernes Santo es una de las observancias religiosas mas importantes de Bolivia, un pais donde aproximadamente el 70% de la poblacion se identifica como catolica romana. El dia marca la crucifixion y muerte de Jesucristo en el Calvario, y los bolivianos lo observan con profunda reverencia.\n\nLas tradiciones del Viernes Santo en Bolivia reflejan la mezcla unica del pais entre espiritualidad catolica e indigena. Las iglesias de la era colonial en todo el pais celebran servicios elaborados y procesiones, con algunas comunidades incorporando elementos andinos en sus observancias.\n\nLas observancias de Semana Santa en ciudades como Sucre, Cochabamba y Copacabana (en el lago Titicaca) son particularmente elaboradas, con procesiones callejeras con carrozas religiosas, incienso y participantes vestidos de luto. Muchos bolivianos ayunan, se abstienen de carne y asisten a multiples servicios religiosos durante todo el dia.",
  },

  traditions: {
    en: [
      'Attending Stations of the Cross processions through city streets',
      'Fasting and abstaining from meat throughout the day',
      'Participating in solemn church services and Masses',
      'Eating traditional Good Friday dishes like fish soup and empanadas de queso',
      'Watching religious processions with statues and floats',
      'Visiting churches to pray at the representations of the Holy Sepulchre',
    ],
    fr: [
      'Assister aux processions du Chemin de Croix dans les rues de la ville',
      "Jeuner et s'abstenir de viande tout au long de la journee",
      'Participer a des services religieux et messes solennels',
      'Manger des plats traditionnels du Vendredi Saint comme la soupe de poisson et les empanadas de queso',
      'Regarder les processions religieuses avec des statues et des chars',
      'Visiter les eglises pour prier devant les representations du Saint Sepulcre',
    ],
    es: [
      'Asistir a procesiones del Via Crucis por las calles de la ciudad',
      'Ayunar y abstenerse de carne durante todo el dia',
      'Participar en servicios religiosos y misas solemnes',
      'Comer platos tradicionales del Viernes Santo como sopa de pescado y empanadas de queso',
      'Ver procesiones religiosas con estatuas y carrozas',
      'Visitar iglesias para rezar ante las representaciones del Santo Sepulcro',
    ],
  },

  funFacts: {
    en: [
      'Bolivia has no official state religion but the Catholic Church has a strong influence on national holidays and cultural life.',
      'The Good Friday procession in Copacabana on Lake Titicaca combines Catholic and Andean spiritual traditions in a unique way.',
      'Many Bolivian markets are closed on Good Friday, making it one of the quietest commercial days of the year.',
      'Some Bolivian communities perform passion plays that have been enacted annually for over 200 years.',
      'During Holy Week, Bolivian television channels broadcast religious programming almost exclusively.',
    ],
    fr: [
      "La Bolivie n'a pas de religion d'Etat officielle mais l'Eglise catholique a une forte influence sur les jours feries et la vie culturelle.",
      'La procession du Vendredi Saint a Copacabana sur le lac Titicaca combine les traditions spirituelles catholiques et andines de maniere unique.',
      "De nombreux marches boliviens sont fermes le Vendredi Saint, ce qui en fait l'un des jours commerciaux les plus calmes de l'annee.",
      'Certaines communautes boliviennes jouent des representations de la Passion qui sont mises en scene annuellement depuis plus de 200 ans.',
      'Pendant la Semaine Sainte, les chaines de television boliviennes diffusent des programmes religieux presque exclusivement.',
    ],
    es: [
      'Bolivia no tiene religion de Estado oficial pero la Iglesia Catolica tiene una fuerte influencia en los dias festivos y la vida cultural.',
      'La procesion del Viernes Santo en Copacabana en el lago Titicaca combina tradiciones espirituales catolicas y andinas de manera unica.',
      'Muchos mercados bolivianos estan cerrados el Viernes Santo, haciendolo uno de los dias comerciales mas tranquilos del ano.',
      'Algunas comunidades bolivianas realizan representaciones de la Pasion que se han escenificado anualmente durante mas de 200 anos.',
      'Durante la Semana Santa, los canales de television bolivianos transmiten programacion religiosa casi exclusivamente.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan to attend Stations of the Cross processions in your city',
      'Prepare fish-based meals for Good Friday fasting',
      'Check church schedules for special Holy Week services',
      'Visit Copacabana or Sucre for particularly impressive processions',
      'Be aware that most businesses and markets will be closed',
    ],
    fr: [
      'Planifier d\'assister aux processions du Chemin de Croix dans votre ville',
      'Preparer des repas a base de poisson pour le jeune du Vendredi Saint',
      'Verifier les horaires des eglises pour les services speciaux de la Semaine Sainte',
      'Visiter Copacabana ou Sucre pour des processions particulierement impressionnantes',
      'Savoir que la plupart des commerces et marches seront fermes',
    ],
    es: [
      'Planificar asistir a las procesiones del Via Crucis en su ciudad',
      'Preparar comidas a base de pescado para el ayuno del Viernes Santo',
      'Verificar los horarios de las iglesias para los servicios especiales de Semana Santa',
      'Visitar Copacabana o Sucre para procesiones particularmente impresionantes',
      'Tener en cuenta que la mayoria de los negocios y mercados estaran cerrados',
    ],
  },

  relatedHolidays: ['bo_carnival', 'bo_christmas'],

  seo: {
    en: {
      titleTemplate: 'Good Friday {year} Bolivia — Date, Countdown & Info',
      descriptionTemplate: 'When is Good Friday {year} in Bolivia? Live countdown, Holy Week traditions, processions, and religious observance guide.',
      keywords: ['Good Friday Bolivia', 'Viernes Santo Bolivia', 'Holy Week Bolivia', 'Semana Santa Bolivia', 'Bolivia holidays'],
    },
    fr: {
      titleTemplate: 'Vendredi Saint {year} Bolivie — Date, compte a rebours et info',
      descriptionTemplate: 'Quand est le Vendredi Saint {year} en Bolivie ? Compte a rebours, traditions de la Semaine Sainte, processions et guide.',
      keywords: ['Vendredi Saint Bolivie', 'Semaine Sainte Bolivie', 'Viernes Santo', 'jours feries Bolivie', 'Paques Bolivie'],
    },
    es: {
      titleTemplate: 'Viernes Santo {year} Bolivia — Fecha, cuenta regresiva e info',
      descriptionTemplate: 'Cuando es el Viernes Santo {year} en Bolivia? Cuenta regresiva, tradiciones de Semana Santa, procesiones y guia.',
      keywords: ['Viernes Santo Bolivia', 'Semana Santa Bolivia', 'feriados Bolivia', 'procesiones Bolivia', 'Pascua Bolivia'],
    },
  },

  faq: [
    {
      question: { en: 'When is Good Friday {year} in Bolivia?', fr: 'Quand est le Vendredi Saint {year} en Bolivie ?', es: 'Cuando es el Viernes Santo {year} en Bolivia?' },
      answer: {
        en: 'Good Friday {year} in Bolivia falls on {date}. It is always the Friday before Easter Sunday and its date changes each year.',
        fr: "Le Vendredi Saint {year} en Bolivie tombe le {date}. C'est toujours le vendredi avant le dimanche de Paques et sa date change chaque annee.",
        es: 'El Viernes Santo {year} en Bolivia cae el {date}. Siempre es el viernes antes del Domingo de Pascua y su fecha cambia cada ano.',
      },
    },
    {
      question: { en: 'Is Good Friday a public holiday in Bolivia?', fr: 'Le Vendredi Saint est-il un jour ferie en Bolivie ?', es: 'Es el Viernes Santo un dia festivo en Bolivia?' },
      answer: {
        en: 'Yes, Good Friday is an official public holiday in Bolivia. Government offices, banks, schools, and most businesses are closed.',
        fr: 'Oui, le Vendredi Saint est un jour ferie officiel en Bolivie. Les bureaux gouvernementaux, les banques, les ecoles et la plupart des commerces sont fermes.',
        es: 'Si, el Viernes Santo es un dia festivo oficial en Bolivia. Las oficinas gubernamentales, bancos, escuelas y la mayoria de los negocios estan cerrados.',
      },
    },
    {
      question: { en: 'What are typical Good Friday foods in Bolivia?', fr: 'Quels sont les plats typiques du Vendredi Saint en Bolivie ?', es: 'Cuales son las comidas tipicas del Viernes Santo en Bolivia?' },
      answer: {
        en: 'On Good Friday, Bolivians traditionally eat fish-based dishes since meat is avoided. Common dishes include fish soup, empanadas de queso (cheese empanadas), and bacalao (salt cod) preparations.',
        fr: 'Le Vendredi Saint, les Boliviens mangent traditionnellement des plats a base de poisson car la viande est evitee. Les plats courants comprennent la soupe de poisson, les empanadas de queso et les preparations de bacalao (morue salee).',
        es: 'El Viernes Santo, los bolivianos tradicionalmente comen platos a base de pescado ya que se evita la carne. Los platos comunes incluyen sopa de pescado, empanadas de queso y preparaciones de bacalao.',
      },
    },
    {
      question: { en: 'Where are the best Good Friday processions in Bolivia?', fr: 'Ou sont les meilleures processions du Vendredi Saint en Bolivie ?', es: 'Donde son las mejores procesiones del Viernes Santo en Bolivia?' },
      answer: {
        en: 'The most impressive Good Friday processions in Bolivia take place in Sucre (the constitutional capital), Cochabamba, and Copacabana on Lake Titicaca. These feature elaborate floats, hundreds of participants, and a deeply solemn atmosphere.',
        fr: 'Les processions du Vendredi Saint les plus impressionnantes en Bolivie ont lieu a Sucre (la capitale constitutionnelle), Cochabamba et Copacabana sur le lac Titicaca. Elles presentent des chars elabores, des centaines de participants et une atmosphere profondement solennelle.',
        es: 'Las procesiones del Viernes Santo mas impresionantes en Bolivia tienen lugar en Sucre (la capital constitucional), Cochabamba y Copacabana en el lago Titicaca. Presentan carrozas elaboradas, cientos de participantes y una atmosfera profundamente solemne.',
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
  id: 'bo_labour-day',
  countryCode: 'bo',
  slugs: { en: 'labour-day', fr: 'fete-du-travail', es: 'dia-del-trabajo' },
  names: { en: 'Labour Day', fr: 'Fete du Travail', es: 'Dia del Trabajo' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 1,

  descriptions: {
    en: "Labour Day on May 1 is a public holiday in Bolivia honoring workers and their contributions to society. It is marked by union marches, rallies, and celebrations recognizing the achievements of Bolivia's labor movement.",
    fr: "La Fete du Travail, le 1er mai, est un jour ferie en Bolivie honorant les travailleurs et leurs contributions a la societe. Elle est marquee par des marches syndicales, des rassemblements et des celebrations reconnaissant les realisations du mouvement ouvrier bolivien.",
    es: 'El Dia del Trabajo, el 1 de mayo, es un dia festivo en Bolivia que honra a los trabajadores y sus contribuciones a la sociedad. Se marca con marchas sindicales, manifestaciones y celebraciones que reconocen los logros del movimiento obrero boliviano.',
  },

  history: {
    en: "Labour Day in Bolivia commemorates the international workers' movement and the struggle for labor rights. Bolivia has a particularly strong labor tradition, with the miners' unions (especially those in Potosi and Oruro) playing a central role in the country's political history.\n\nThe Central Obrera Boliviana (COB), founded in 1952, has been one of the most powerful labor organizations in Latin America. The miners' unions were instrumental in the Bolivian National Revolution of 1952, which brought about universal suffrage, land reform, and nationalization of the tin mines.\n\nToday, Labour Day in Bolivia is marked by large marches organized by the COB and affiliated unions in major cities. Workers rally for improved wages, working conditions, and social protections. The day is also an opportunity to celebrate the significant role that organized labor has played in shaping modern Bolivia.",
    fr: "La Fete du Travail en Bolivie commemore le mouvement ouvrier international et la lutte pour les droits des travailleurs. La Bolivie a une tradition ouvriere particulierement forte, les syndicats de mineurs (en particulier ceux de Potosi et d'Oruro) jouant un role central dans l'histoire politique du pays.\n\nLa Central Obrera Boliviana (COB), fondee en 1952, a ete l'une des organisations ouvrieres les plus puissantes d'Amerique latine. Les syndicats de mineurs ont ete instrumentaux dans la Revolution Nationale Bolivienne de 1952, qui a apporte le suffrage universel, la reforme agraire et la nationalisation des mines d'etain.\n\nAujourd'hui, la Fete du Travail en Bolivie est marquee par de grandes marches organisees par la COB et les syndicats affilies dans les grandes villes. Les travailleurs se rassemblent pour des salaires ameliores, de meilleures conditions de travail et des protections sociales. Le jour est egalement l'occasion de celebrer le role significatif que le travail organise a joue dans la formation de la Bolivie moderne.",
    es: "El Dia del Trabajo en Bolivia conmemora el movimiento obrero internacional y la lucha por los derechos laborales. Bolivia tiene una tradicion laboral particularmente fuerte, con los sindicatos mineros (especialmente los de Potosi y Oruro) jugando un papel central en la historia politica del pais.\n\nLa Central Obrera Boliviana (COB), fundada en 1952, ha sido una de las organizaciones laborales mas poderosas de America Latina. Los sindicatos mineros fueron instrumentales en la Revolucion Nacional Boliviana de 1952, que trajo el sufragio universal, la reforma agraria y la nacionalizacion de las minas de estano.\n\nHoy, el Dia del Trabajo en Bolivia se marca con grandes marchas organizadas por la COB y sindicatos afiliados en las principales ciudades. Los trabajadores se manifiestan por mejores salarios, condiciones de trabajo y protecciones sociales. El dia tambien es una oportunidad para celebrar el papel significativo que el trabajo organizado ha jugado en la formacion de la Bolivia moderna.",
  },

  traditions: {
    en: [
      'Attending union marches and rallies organized by the COB',
      'Listening to speeches by labor leaders and government officials',
      'Participating in workers\' cultural events and celebrations',
      'Honoring the legacy of Bolivia\'s mining unions',
      'Spending the holiday with family and friends',
    ],
    fr: [
      'Assister aux marches syndicales et rassemblements organises par la COB',
      'Ecouter les discours des dirigeants syndicaux et des representants du gouvernement',
      'Participer aux evenements culturels et celebrations des travailleurs',
      'Honorer l\'heritage des syndicats miniers boliviens',
      'Passer le jour ferie en famille et entre amis',
    ],
    es: [
      'Asistir a marchas sindicales y manifestaciones organizadas por la COB',
      'Escuchar discursos de lideres sindicales y funcionarios del gobierno',
      'Participar en eventos culturales y celebraciones de los trabajadores',
      'Honrar el legado de los sindicatos mineros bolivianos',
      'Pasar el dia festivo con familia y amigos',
    ],
  },

  funFacts: {
    en: [
      'Bolivia\'s miners\' unions were so powerful that they were called "the vanguard of the Bolivian revolution."',
      'The Central Obrera Boliviana (COB) was instrumental in the 1952 Bolivian National Revolution that transformed the country.',
      'Bolivia\'s Cerro Rico mountain in Potosi was one of the largest sources of silver in the world and shaped the country\'s labor history.',
      'Bolivian miners maintain a tradition of offering coca leaves and alcohol to El Tio, the lord of the mines, for protection.',
      'Labour Day marches in La Paz often proceed from the COB headquarters to the Plaza Murillo government square.',
    ],
    fr: [
      'Les syndicats de mineurs boliviens etaient si puissants qu\'ils etaient appeles "l\'avant-garde de la revolution bolivienne".',
      'La Central Obrera Boliviana (COB) a ete instrumentale dans la Revolution Nationale Bolivienne de 1952 qui a transforme le pays.',
      "Le Cerro Rico de Potosi en Bolivie etait l'une des plus grandes sources d'argent au monde et a faconne l'histoire ouvriere du pays.",
      'Les mineurs boliviens maintiennent une tradition d\'offrir des feuilles de coca et de l\'alcool a El Tio, le seigneur des mines, pour la protection.',
      'Les marches de la Fete du Travail a La Paz partent souvent du siege de la COB vers la Plaza Murillo.',
    ],
    es: [
      'Los sindicatos mineros bolivianos eran tan poderosos que se les llamaba "la vanguardia de la revolucion boliviana".',
      'La Central Obrera Boliviana (COB) fue instrumental en la Revolucion Nacional Boliviana de 1952 que transformo el pais.',
      'El Cerro Rico de Potosi en Bolivia fue una de las mayores fuentes de plata del mundo y moldeo la historia laboral del pais.',
      'Los mineros bolivianos mantienen una tradicion de ofrecer hojas de coca y alcohol a El Tio, el senor de las minas, para proteccion.',
      'Las marchas del Dia del Trabajo en La Paz a menudo van desde la sede de la COB hasta la Plaza Murillo.',
    ],
  },

  planningChecklist: {
    en: [
      'Check for planned marches and rallies that may affect traffic',
      'Plan family activities for the day off',
      'Be aware that banks, government offices, and many businesses will be closed',
      'Watch for special events organized by local unions',
      'Learn about Bolivia\'s rich labor history',
    ],
    fr: [
      'Verifier les marches et rassemblements prevus qui peuvent affecter la circulation',
      'Planifier des activites familiales pour le jour de conge',
      'Savoir que les banques, bureaux gouvernementaux et de nombreux commerces seront fermes',
      'Surveiller les evenements speciaux organises par les syndicats locaux',
      'Decouvrir la riche histoire ouvriere de la Bolivie',
    ],
    es: [
      'Verificar marchas y manifestaciones planificadas que puedan afectar el trafico',
      'Planificar actividades familiares para el dia libre',
      'Tener en cuenta que bancos, oficinas gubernamentales y muchos negocios estaran cerrados',
      'Estar atento a eventos especiales organizados por sindicatos locales',
      'Aprender sobre la rica historia laboral de Bolivia',
    ],
  },

  relatedHolidays: ['bo_independence-day', 'bo_new-years-day'],

  seo: {
    en: {
      titleTemplate: 'Labour Day {year} Bolivia — Countdown & Info',
      descriptionTemplate: 'When is Labour Day {year} in Bolivia? Live countdown to May 1, workers\' history, and public holiday information.',
      keywords: ['Labour Day Bolivia', 'Dia del Trabajo Bolivia', 'May 1 Bolivia', 'Bolivia public holidays', 'workers day Bolivia'],
    },
    fr: {
      titleTemplate: 'Fete du Travail {year} Bolivie — Compte a rebours et info',
      descriptionTemplate: 'Quand est la Fete du Travail {year} en Bolivie ? Compte a rebours, histoire des travailleurs et informations sur le jour ferie.',
      keywords: ['Fete du Travail Bolivie', '1er mai Bolivie', 'jours feries Bolivie', 'mouvement ouvrier Bolivie', 'Dia del Trabajo'],
    },
    es: {
      titleTemplate: 'Dia del Trabajo {year} Bolivia — Cuenta regresiva e info',
      descriptionTemplate: 'Cuando es el Dia del Trabajo {year} en Bolivia? Cuenta regresiva al 1 de mayo, historia laboral e informacion del feriado.',
      keywords: ['Dia del Trabajo Bolivia', '1 de mayo Bolivia', 'feriados Bolivia', 'movimiento obrero Bolivia', 'dia festivo Bolivia'],
    },
  },

  faq: [
    {
      question: { en: 'When is Labour Day {year} in Bolivia?', fr: 'Quand est la Fete du Travail {year} en Bolivie ?', es: 'Cuando es el Dia del Trabajo {year} en Bolivia?' },
      answer: {
        en: 'Labour Day {year} in Bolivia is on {date}. It is always May 1.',
        fr: 'La Fete du Travail {year} en Bolivie est le {date}. C\'est toujours le 1er mai.',
        es: 'El Dia del Trabajo {year} en Bolivia es el {date}. Siempre es el 1 de mayo.',
      },
    },
    {
      question: { en: 'What is the COB?', fr: "Qu'est-ce que la COB ?", es: 'Que es la COB?' },
      answer: {
        en: 'The Central Obrera Boliviana (COB) is Bolivia\'s main trade union federation, founded in 1952. It has been one of the most influential labor organizations in Latin American history, playing a key role in the 1952 revolution and subsequent political events.',
        fr: 'La Central Obrera Boliviana (COB) est la principale federation syndicale de Bolivie, fondee en 1952. Elle a ete l\'une des organisations ouvrieres les plus influentes de l\'histoire latino-americaine, jouant un role cle dans la revolution de 1952 et les evenements politiques subsequents.',
        es: 'La Central Obrera Boliviana (COB) es la principal federacion sindical de Bolivia, fundada en 1952. Ha sido una de las organizaciones laborales mas influyentes de la historia latinoamericana, jugando un papel clave en la revolucion de 1952 y los eventos politicos posteriores.',
      },
    },
    {
      question: { en: 'Is Labour Day a public holiday in Bolivia?', fr: 'La Fete du Travail est-elle un jour ferie en Bolivie ?', es: 'Es el Dia del Trabajo un dia festivo en Bolivia?' },
      answer: {
        en: 'Yes, May 1 is an official public holiday in Bolivia. Government offices, banks, and most businesses are closed.',
        fr: 'Oui, le 1er mai est un jour ferie officiel en Bolivie. Les bureaux gouvernementaux, les banques et la plupart des commerces sont fermes.',
        es: 'Si, el 1 de mayo es un dia festivo oficial en Bolivia. Las oficinas gubernamentales, bancos y la mayoria de los negocios estan cerrados.',
      },
    },
    {
      question: { en: 'Are there marches on Labour Day in Bolivia?', fr: 'Y a-t-il des marches le jour de la Fete du Travail en Bolivie ?', es: 'Hay marchas el Dia del Trabajo en Bolivia?' },
      answer: {
        en: 'Yes, the COB and affiliated unions organize large marches and rallies in cities across Bolivia on May 1, particularly in La Paz, Cochabamba, and Santa Cruz.',
        fr: 'Oui, la COB et les syndicats affilies organisent de grandes marches et rassemblements dans les villes de Bolivie le 1er mai, en particulier a La Paz, Cochabamba et Santa Cruz.',
        es: 'Si, la COB y los sindicatos afiliados organizan grandes marchas y manifestaciones en ciudades de Bolivia el 1 de mayo, particularmente en La Paz, Cochabamba y Santa Cruz.',
      },
    },
  ],

  colorTheme: 'spring',
  icon: '\u2692\ufe0f',
};

// ---------------------------------------------------------------------------
// Independence Day — August 6
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'bo_independence-day',
  countryCode: 'bo',
  slugs: { en: 'independence-day', fr: 'jour-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Jour de l'Independance", es: 'Dia de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 8,
  fixedDay: 6,

  descriptions: {
    en: "Bolivia's Independence Day on August 6 celebrates the country's independence from Spain, declared in 1825. Named after Simon Bolivar, Bolivia commemorates this day with patriotic ceremonies, military parades, and cultural celebrations across the country.",
    fr: "Le Jour de l'Independance de la Bolivie, le 6 aout, celebre l'independance du pays vis-a-vis de l'Espagne, declaree en 1825. Nommee d'apres Simon Bolivar, la Bolivie commemore ce jour avec des ceremonies patriotiques, des defiles militaires et des celebrations culturelles a travers le pays.",
    es: 'El Dia de la Independencia de Bolivia, el 6 de agosto, celebra la independencia del pais de Espana, declarada en 1825. Nombrada en honor a Simon Bolivar, Bolivia conmemora este dia con ceremonias patrioticas, desfiles militares y celebraciones culturales en todo el pais.',
  },

  history: {
    en: "Bolivia declared its independence on August 6, 1825, following the decisive Battle of Ayacucho in 1824 that ended Spanish colonial rule in South America. The country was named in honor of Simon Bolivar, who had championed the independence of the entire continent, though it was Antonio Jose de Sucre who directly liberated the territory.\n\nThe Republic of Bolivia was established with Sucre as its first president (with Bolivar serving as the first nominal president). The new nation faced enormous challenges, including a largely indigenous population that had been subjugated under colonial rule and an economy dependent on silver mining.\n\nToday, August 6 is Bolivia's most important national holiday. Celebrations center on the city of Sucre (the constitutional capital), where the Declaration of Independence was signed. Festivities include military parades, the Te Deum Mass at the cathedral, traditional dances, and fireworks. It is a day of deep national pride for all Bolivians.",
    fr: "La Bolivie a declare son independance le 6 aout 1825, a la suite de la bataille decisive d'Ayacucho en 1824 qui a mis fin a la domination coloniale espagnole en Amerique du Sud. Le pays a ete nomme en l'honneur de Simon Bolivar, qui avait defendu l'independance de tout le continent, bien que ce soit Antonio Jose de Sucre qui ait directement libere le territoire.\n\nLa Republique de Bolivie a ete etablie avec Sucre comme premier president (Bolivar servant de premier president nominal). La nouvelle nation a fait face a d'enormes defis, notamment une population largement indigene qui avait ete soumise sous la domination coloniale et une economie dependante de l'exploitation miniere d'argent.\n\nAujourd'hui, le 6 aout est le jour ferie national le plus important de Bolivie. Les celebrations se centrent sur la ville de Sucre (la capitale constitutionnelle), ou la Declaration d'Independance a ete signee. Les festivites comprennent des defiles militaires, la messe du Te Deum a la cathedrale, des danses traditionnelles et des feux d'artifice. C'est un jour de profonde fierte nationale pour tous les Boliviens.",
    es: "Bolivia declaro su independencia el 6 de agosto de 1825, tras la decisiva Batalla de Ayacucho en 1824 que puso fin al dominio colonial espanol en Sudamerica. El pais fue nombrado en honor a Simon Bolivar, quien habia defendido la independencia de todo el continente, aunque fue Antonio Jose de Sucre quien directamente libero el territorio.\n\nLa Republica de Bolivia fue establecida con Sucre como su primer presidente (con Bolivar sirviendo como primer presidente nominal). La nueva nacion enfrento enormes desafios, incluyendo una poblacion mayoritariamente indigena que habia sido sometida bajo el dominio colonial y una economia dependiente de la mineria de plata.\n\nHoy, el 6 de agosto es el dia festivo nacional mas importante de Bolivia. Las celebraciones se centran en la ciudad de Sucre (la capital constitucional), donde se firmo la Declaracion de Independencia. Las festividades incluyen desfiles militares, la misa del Te Deum en la catedral, danzas tradicionales y fuegos artificiales. Es un dia de profundo orgullo nacional para todos los bolivianos.",
  },

  traditions: {
    en: [
      'Attending military parades and civic ceremonies in major cities',
      'Watching the Te Deum Mass at the cathedral in Sucre',
      'Participating in traditional dance performances including Morenada and Caporales',
      'Flying the Bolivian flag on homes and public buildings',
      'Enjoying fireworks displays in city plazas',
      'Listening to the presidential address to the nation',
    ],
    fr: [
      'Assister aux defiles militaires et ceremonies civiques dans les grandes villes',
      'Regarder la messe du Te Deum a la cathedrale de Sucre',
      'Participer a des spectacles de danse traditionnelle incluant Morenada et Caporales',
      'Hisser le drapeau bolivien sur les maisons et les batiments publics',
      "Profiter des feux d'artifice dans les places de la ville",
      'Ecouter le discours presidentiel a la nation',
    ],
    es: [
      'Asistir a desfiles militares y ceremonias civicas en las principales ciudades',
      'Ver la misa del Te Deum en la catedral de Sucre',
      'Participar en espectaculos de danza tradicional incluyendo Morenada y Caporales',
      'Izar la bandera boliviana en hogares y edificios publicos',
      'Disfrutar de fuegos artificiales en las plazas de la ciudad',
      'Escuchar el discurso presidencial a la nacion',
    ],
  },

  funFacts: {
    en: [
      'Bolivia is named after Simon Bolivar, though it was Antonio Jose de Sucre who directly led the military campaign to liberate the country.',
      'Bolivia has two capitals: Sucre (constitutional) and La Paz (seat of government). Independence Day celebrations are centered in Sucre.',
      'Bolivia is one of two landlocked countries in South America, having lost its Pacific coast territory in the War of the Pacific (1879-1884) against Chile.',
      'The Bolivian flag features three horizontal stripes: red (the valor of soldiers), yellow (mineral wealth), and green (agriculture and fertility).',
      'Bolivia is home to the world\'s highest capital city (La Paz, at over 3,600 meters) and the world\'s largest salt flat (Salar de Uyuni).',
    ],
    fr: [
      "La Bolivie porte le nom de Simon Bolivar, bien que ce soit Antonio Jose de Sucre qui ait directement mene la campagne militaire pour liberer le pays.",
      "La Bolivie a deux capitales : Sucre (constitutionnelle) et La Paz (siege du gouvernement). Les celebrations du Jour de l'Independance sont centrees a Sucre.",
      "La Bolivie est l'un des deux pays enclaves d'Amerique du Sud, ayant perdu son territoire cotier du Pacifique lors de la Guerre du Pacifique (1879-1884) contre le Chili.",
      'Le drapeau bolivien comporte trois bandes horizontales : rouge (la valeur des soldats), jaune (la richesse minerale) et vert (l\'agriculture et la fertilite).',
      "La Bolivie abrite la plus haute ville capitale du monde (La Paz, a plus de 3 600 metres) et le plus grand desert de sel au monde (Salar d'Uyuni).",
    ],
    es: [
      'Bolivia lleva el nombre de Simon Bolivar, aunque fue Antonio Jose de Sucre quien directamente lidero la campana militar para liberar el pais.',
      'Bolivia tiene dos capitales: Sucre (constitucional) y La Paz (sede de gobierno). Las celebraciones del Dia de la Independencia se centran en Sucre.',
      'Bolivia es uno de los dos paises sin litoral de Sudamerica, habiendo perdido su territorio costero del Pacifico en la Guerra del Pacifico (1879-1884) contra Chile.',
      'La bandera boliviana presenta tres franjas horizontales: rojo (el valor de los soldados), amarillo (la riqueza mineral) y verde (la agricultura y la fertilidad).',
      'Bolivia alberga la ciudad capital mas alta del mundo (La Paz, a mas de 3.600 metros) y el desierto de sal mas grande del mundo (Salar de Uyuni).',
    ],
  },

  planningChecklist: {
    en: [
      'Plan a trip to Sucre for the main Independence Day celebrations',
      'Prepare Bolivian flags and patriotic decorations',
      'Check schedules for local military parades and cultural events',
      'Attend traditional dance performances in your city',
      'Watch the presidential address and fireworks displays',
    ],
    fr: [
      "Planifier un voyage a Sucre pour les principales celebrations du Jour de l'Independance",
      'Preparer les drapeaux boliviens et les decorations patriotiques',
      'Verifier les horaires des defiles militaires et evenements culturels locaux',
      'Assister a des spectacles de danse traditionnelle dans votre ville',
      "Regarder le discours presidentiel et les feux d'artifice",
    ],
    es: [
      'Planificar un viaje a Sucre para las principales celebraciones del Dia de la Independencia',
      'Preparar banderas bolivianas y decoraciones patrioticas',
      'Verificar horarios de desfiles militares y eventos culturales locales',
      'Asistir a espectaculos de danza tradicional en su ciudad',
      'Ver el discurso presidencial y los fuegos artificiales',
    ],
  },

  relatedHolidays: ['bo_labour-day', 'bo_carnival'],

  seo: {
    en: {
      titleTemplate: 'Independence Day {year} Bolivia — Countdown & History',
      descriptionTemplate: 'When is Bolivia Independence Day {year}? Live countdown to August 6, history of the 1825 declaration, and celebration guide.',
      keywords: ['Bolivia Independence Day', 'August 6 Bolivia', 'Dia de la Independencia Bolivia', 'Bolivian national holiday', 'independence countdown'],
    },
    fr: {
      titleTemplate: "Jour de l'Independance {year} Bolivie — Compte a rebours et histoire",
      descriptionTemplate: "Quand est le Jour de l'Independance de la Bolivie {year} ? Compte a rebours, histoire de la declaration de 1825 et guide.",
      keywords: ["Jour de l'Independance Bolivie", '6 aout Bolivie', 'fete nationale Bolivie', 'jours feries Bolivie', "compte a rebours independance"],
    },
    es: {
      titleTemplate: 'Dia de la Independencia {year} Bolivia — Cuenta regresiva e historia',
      descriptionTemplate: 'Cuando es el Dia de la Independencia de Bolivia {year}? Cuenta regresiva al 6 de agosto, historia de la declaracion de 1825 y guia.',
      keywords: ['Dia de la Independencia Bolivia', '6 de agosto Bolivia', 'fiesta nacional Bolivia', 'feriados Bolivia', 'cuenta regresiva independencia'],
    },
  },

  faq: [
    {
      question: { en: 'When is Bolivia Independence Day {year}?', fr: "Quand est le Jour de l'Independance de la Bolivie {year} ?", es: 'Cuando es el Dia de la Independencia de Bolivia {year}?' },
      answer: {
        en: 'Bolivia Independence Day {year} is on {date}. It is always August 6.',
        fr: "Le Jour de l'Independance de la Bolivie {year} est le {date}. C'est toujours le 6 aout.",
        es: 'El Dia de la Independencia de Bolivia {year} es el {date}. Siempre es el 6 de agosto.',
      },
    },
    {
      question: { en: 'Why is Bolivia named after Bolivar?', fr: 'Pourquoi la Bolivie porte-t-elle le nom de Bolivar ?', es: 'Por que Bolivia lleva el nombre de Bolivar?' },
      answer: {
        en: "Bolivia was named after Simon Bolivar, the Venezuelan-born liberator whose military campaigns helped free much of South America from Spanish rule. The country's founders chose the name to honor his role in the continent's independence.",
        fr: "La Bolivie a ete nommee d'apres Simon Bolivar, le liberateur ne au Venezuela dont les campagnes militaires ont contribue a liberer une grande partie de l'Amerique du Sud de la domination espagnole. Les fondateurs du pays ont choisi ce nom pour honorer son role dans l'independance du continent.",
        es: 'Bolivia fue nombrada en honor a Simon Bolivar, el libertador nacido en Venezuela cuyas campanas militares ayudaron a liberar gran parte de Sudamerica del dominio espanol. Los fundadores del pais eligieron el nombre para honrar su papel en la independencia del continente.',
      },
    },
    {
      question: { en: 'Is August 6 a public holiday in Bolivia?', fr: 'Le 6 aout est-il un jour ferie en Bolivie ?', es: 'Es el 6 de agosto un dia festivo en Bolivia?' },
      answer: {
        en: 'Yes, August 6 is the most important public holiday in Bolivia. It is a national day of celebration with government offices, banks, and businesses closed throughout the country.',
        fr: 'Oui, le 6 aout est le jour ferie le plus important de Bolivie. C\'est une journee nationale de celebration avec les bureaux gouvernementaux, les banques et les commerces fermes dans tout le pays.',
        es: 'Si, el 6 de agosto es el dia festivo mas importante de Bolivia. Es un dia nacional de celebracion con oficinas gubernamentales, bancos y negocios cerrados en todo el pais.',
      },
    },
    {
      question: { en: 'Where are the main Independence Day celebrations in Bolivia?', fr: "Ou sont les principales celebrations du Jour de l'Independance en Bolivie ?", es: 'Donde son las principales celebraciones del Dia de la Independencia en Bolivia?' },
      answer: {
        en: 'The main celebrations take place in Sucre, Bolivia\'s constitutional capital, where the Declaration of Independence was signed. The celebrations include the Te Deum Mass at the cathedral, military parades, traditional dances, and fireworks.',
        fr: "Les principales celebrations ont lieu a Sucre, la capitale constitutionnelle de la Bolivie, ou la Declaration d'Independance a ete signee. Les celebrations comprennent la messe du Te Deum a la cathedrale, des defiles militaires, des danses traditionnelles et des feux d'artifice.",
        es: 'Las principales celebraciones tienen lugar en Sucre, la capital constitucional de Bolivia, donde se firmo la Declaracion de Independencia. Las celebraciones incluyen la misa del Te Deum en la catedral, desfiles militares, danzas tradicionales y fuegos artificiales.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '\ud83c\udde7\ud83c\uddf4',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'bo_christmas',
  countryCode: 'bo',
  slugs: { en: 'christmas', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noel', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: 'Christmas Day on December 25 is a major holiday in Bolivia, celebrated with family gatherings, Midnight Mass, traditional foods, and a blend of Catholic and Andean traditions. Bolivian Christmas reflects the country\'s deep faith and multicultural heritage.',
    fr: "Noel, le 25 decembre, est un jour ferie majeur en Bolivie, celebre avec des reunions familiales, la messe de minuit, des aliments traditionnels et un melange de traditions catholiques et andines. Le Noel bolivien reflete la profonde foi et le patrimoine multiculturel du pays.",
    es: 'La Navidad, el 25 de diciembre, es un dia festivo importante en Bolivia, celebrado con reuniones familiares, Misa de Gallo, comidas tradicionales y una mezcla de tradiciones catolicas y andinas. La Navidad boliviana refleja la profunda fe y el patrimonio multicultural del pais.',
  },

  history: {
    en: "Christmas in Bolivia is a deeply religious celebration that combines Catholic traditions with Andean and indigenous cultural elements. The season begins with novenas (nine days of prayer) and builds toward the climax of Noche Buena (Christmas Eve). Many Bolivian communities hold processions and masses throughout Advent.\n\nIn the highlands, Christmas traditions often incorporate Andean music and dance alongside Catholic rituals. The Misa de Gallo (Midnight Mass) is one of the best-attended religious services of the year, with churches across Bolivia filled to capacity.\n\nBolivian Christmas food varies by region. In the highlands, picana (a spiced soup with meat and vegetables) is the traditional Christmas Eve dish. In the lowlands, lechon al horno (roasted pig) is more common. Families gather after Midnight Mass for their Christmas dinner and gift exchange.",
    fr: "Noel en Bolivie est une celebration profondement religieuse qui combine les traditions catholiques avec les elements culturels andins et indigenes. La saison commence avec les neuvaines (neuf jours de priere) et culmine avec la Noche Buena (veille de Noel). De nombreuses communautes boliviennes organisent des processions et des messes tout au long de l'Avent.\n\nDans les hauts plateaux, les traditions de Noel incorporent souvent de la musique et de la danse andines aux cotes des rituels catholiques. La Misa de Gallo (messe de minuit) est l'un des services religieux les plus frequentes de l'annee, avec des eglises dans toute la Bolivie remplies a pleine capacite.\n\nLa nourriture de Noel bolivienne varie selon les regions. Dans les hauts plateaux, la picana (une soupe epicee avec de la viande et des legumes) est le plat traditionnel de la veille de Noel. Dans les basses terres, le lechon al horno (cochon roti) est plus courant. Les familles se reunissent apres la messe de minuit pour leur diner de Noel et l'echange de cadeaux.",
    es: "La Navidad en Bolivia es una celebracion profundamente religiosa que combina tradiciones catolicas con elementos culturales andinos e indigenas. La temporada comienza con novenas (nueve dias de oracion) y culmina con la Noche Buena (Nochebuena). Muchas comunidades bolivianas realizan procesiones y misas durante todo el Adviento.\n\nEn el altiplano, las tradiciones navidenas a menudo incorporan musica y danza andinas junto con los rituales catolicos. La Misa de Gallo es uno de los servicios religiosos mas concurridos del ano, con iglesias en toda Bolivia llenas a su maxima capacidad.\n\nLa comida navidena boliviana varia segun la region. En el altiplano, la picana (una sopa especiada con carne y verduras) es el plato tradicional de Nochebuena. En las tierras bajas, el lechon al horno es mas comun. Las familias se reunen despues de la Misa de Gallo para su cena navidena e intercambio de regalos.",
  },

  traditions: {
    en: [
      'Attending Misa de Gallo (Midnight Mass) on Christmas Eve',
      'Preparing picana, the traditional spiced soup for Christmas Eve dinner',
      'Setting up nativity scenes (pesebres) in homes and public spaces',
      'Participating in novenas during the nine days before Christmas',
      'Exchanging gifts after Midnight Mass',
      'Enjoying traditional Christmas music with Andean instruments',
      'Decorating homes with lights, Christmas trees, and nativity scenes',
    ],
    fr: [
      'Assister a la Misa de Gallo (messe de minuit) la veille de Noel',
      'Preparer la picana, la soupe epicee traditionnelle pour le diner de la veille de Noel',
      'Installer des creches (pesebres) dans les maisons et les espaces publics',
      'Participer aux neuvaines pendant les neuf jours avant Noel',
      'Echanger des cadeaux apres la messe de minuit',
      'Profiter de la musique de Noel traditionnelle avec des instruments andins',
      'Decorer les maisons avec des lumieres, des sapins de Noel et des creches',
    ],
    es: [
      'Asistir a la Misa de Gallo en Nochebuena',
      'Preparar picana, la sopa especiada tradicional para la cena de Nochebuena',
      'Montar nacimientos (pesebres) en hogares y espacios publicos',
      'Participar en novenas durante los nueve dias antes de Navidad',
      'Intercambiar regalos despues de la Misa de Gallo',
      'Disfrutar de musica navidena tradicional con instrumentos andinos',
      'Decorar hogares con luces, arboles de Navidad y nacimientos',
    ],
  },

  funFacts: {
    en: [
      'Picana, Bolivia\'s traditional Christmas Eve soup, includes beef, chicken, lamb, and vegetables simmered in a spiced broth — it is unique to Bolivia.',
      'In some Bolivian highland communities, Christmas celebrations blend Catholic traditions with rituals honoring Pachamama (Mother Earth).',
      'Bolivia celebrates Christmas during summer in the Southern Hemisphere, with warm weather in the lowlands and cool temperatures in the highlands.',
      'Many Bolivian families begin Christmas preparations weeks in advance, with elaborate nativity scenes that can take up entire rooms.',
      'The tradition of sharing gifts on Christmas is relatively recent in Bolivia — traditionally, gifts were exchanged on Epiphany (January 6).',
    ],
    fr: [
      'La picana, la soupe traditionnelle de la veille de Noel en Bolivie, comprend du boeuf, du poulet, de l\'agneau et des legumes mitonnes dans un bouillon epice — elle est unique a la Bolivie.',
      'Dans certaines communautes boliviennes des hauts plateaux, les celebrations de Noel melangent les traditions catholiques avec des rituels honorant la Pachamama (Terre Mere).',
      "La Bolivie celebre Noel pendant l'ete dans l'hemisphere sud, avec un temps chaud dans les basses terres et des temperatures fraiches dans les hauts plateaux.",
      'De nombreuses familles boliviennes commencent les preparatifs de Noel des semaines a l\'avance, avec des creches elaborees qui peuvent occuper des pieces entieres.',
      'La tradition de partager des cadeaux a Noel est relativement recente en Bolivie — traditionnellement, les cadeaux etaient echanges a l\'Epiphanie (6 janvier).',
    ],
    es: [
      'La picana, la sopa tradicional de Nochebuena en Bolivia, incluye res, pollo, cordero y verduras cocidas en un caldo especiado — es unica de Bolivia.',
      'En algunas comunidades bolivianas del altiplano, las celebraciones navidenas mezclan tradiciones catolicas con rituales que honran a la Pachamama (Madre Tierra).',
      'Bolivia celebra la Navidad durante el verano en el hemisferio sur, con clima calido en las tierras bajas y temperaturas frescas en el altiplano.',
      'Muchas familias bolivianas comienzan los preparativos navidenos con semanas de anticipacion, con elaborados nacimientos que pueden ocupar habitaciones enteras.',
      'La tradicion de compartir regalos en Navidad es relativamente reciente en Bolivia — tradicionalmente, los regalos se intercambiaban en Epifania (6 de enero).',
    ],
  },

  planningChecklist: {
    en: [
      'Buy ingredients for picana well in advance',
      'Set up your nativity scene (pesebre) in early December',
      'Plan your Midnight Mass attendance at your local church',
      'Prepare gifts for the family gift exchange after Mass',
      'Participate in novena prayers in the days leading up to Christmas',
    ],
    fr: [
      'Acheter les ingredients pour la picana bien a l\'avance',
      'Installer votre creche (pesebre) debut decembre',
      'Planifier votre assistance a la messe de minuit dans votre eglise locale',
      'Preparer des cadeaux pour l\'echange familial apres la messe',
      'Participer aux prieres de neuvaine dans les jours precedant Noel',
    ],
    es: [
      'Comprar ingredientes para la picana con mucha anticipacion',
      'Montar su nacimiento (pesebre) a principios de diciembre',
      'Planificar su asistencia a la Misa de Gallo en su iglesia local',
      'Preparar regalos para el intercambio familiar despues de la misa',
      'Participar en oraciones de novena en los dias previos a la Navidad',
    ],
  },

  relatedHolidays: ['bo_new-years-day', 'bo_good-friday'],

  seo: {
    en: {
      titleTemplate: 'Christmas {year} Bolivia — Countdown & Traditions',
      descriptionTemplate: 'How many days until Christmas {year} in Bolivia? Live countdown, picana recipe tradition, Midnight Mass, and Bolivian Christmas guide.',
      keywords: ['Christmas Bolivia', 'Navidad Bolivia', 'picana Bolivia', 'Bolivian Christmas traditions', 'Christmas countdown'],
    },
    fr: {
      titleTemplate: 'Noel {year} Bolivie — Compte a rebours et traditions',
      descriptionTemplate: 'Combien de jours avant Noel {year} en Bolivie ? Compte a rebours, tradition de la picana, messe de minuit et guide du Noel bolivien.',
      keywords: ['Noel Bolivie', 'Navidad Bolivia', 'picana Bolivie', 'traditions de Noel Bolivie', 'compte a rebours Noel'],
    },
    es: {
      titleTemplate: 'Navidad {year} Bolivia — Cuenta regresiva y tradiciones',
      descriptionTemplate: 'Cuantos dias faltan para Navidad {year} en Bolivia? Cuenta regresiva, tradicion de la picana, Misa de Gallo y guia navidena boliviana.',
      keywords: ['Navidad Bolivia', 'tradiciones navidenas Bolivia', 'picana Bolivia', 'Misa de Gallo Bolivia', 'cuenta regresiva Navidad'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in Bolivia?', fr: 'Quand est Noel {year} en Bolivie ?', es: 'Cuando es Navidad {year} en Bolivia?' },
      answer: {
        en: 'Christmas {year} in Bolivia is on {date}. It is always December 25.',
        fr: 'Noel {year} en Bolivie est le {date}. C\'est toujours le 25 decembre.',
        es: 'La Navidad {year} en Bolivia es el {date}. Siempre es el 25 de diciembre.',
      },
    },
    {
      question: { en: 'What is picana?', fr: "Qu'est-ce que la picana ?", es: 'Que es la picana?' },
      answer: {
        en: 'Picana is Bolivia\'s traditional Christmas Eve soup, made with beef, chicken, lamb, potatoes, corn, and vegetables simmered in a spiced wine-based broth. It is the centerpiece of the Noche Buena dinner and is unique to Bolivian cuisine.',
        fr: 'La picana est la soupe traditionnelle bolivienne de la veille de Noel, faite avec du boeuf, du poulet, de l\'agneau, des pommes de terre, du mais et des legumes mitonnes dans un bouillon epice a base de vin. C\'est la piece maitresse du diner de la Noche Buena et elle est unique a la cuisine bolivienne.',
        es: 'La picana es la sopa tradicional boliviana de Nochebuena, hecha con res, pollo, cordero, papas, maiz y verduras cocidas en un caldo especiado a base de vino. Es la pieza central de la cena de Noche Buena y es unica de la cocina boliviana.',
      },
    },
    {
      question: { en: 'Is Christmas a public holiday in Bolivia?', fr: 'Noel est-il un jour ferie en Bolivie ?', es: 'Es Navidad un dia festivo en Bolivia?' },
      answer: {
        en: 'Yes, December 25 is an official public holiday in Bolivia. Government offices, banks, and most businesses are closed.',
        fr: 'Oui, le 25 decembre est un jour ferie officiel en Bolivie. Les bureaux gouvernementaux, les banques et la plupart des commerces sont fermes.',
        es: 'Si, el 25 de diciembre es un dia festivo oficial en Bolivia. Las oficinas gubernamentales, bancos y la mayoria de los negocios estan cerrados.',
      },
    },
    {
      question: { en: 'Is Christmas in summer in Bolivia?', fr: 'Noel est-il en ete en Bolivie ?', es: 'La Navidad es en verano en Bolivia?' },
      answer: {
        en: 'Yes, Bolivia is in the Southern Hemisphere, so Christmas falls during summer. However, temperatures vary dramatically — the lowlands around Santa Cruz are hot, while highland cities like La Paz and Oruro can be cool even in December.',
        fr: "Oui, la Bolivie est dans l'hemisphere sud, donc Noel tombe en ete. Cependant, les temperatures varient considerablement — les basses terres autour de Santa Cruz sont chaudes, tandis que les villes des hauts plateaux comme La Paz et Oruro peuvent etre fraiches meme en decembre.",
        es: 'Si, Bolivia esta en el hemisferio sur, por lo que la Navidad cae en verano. Sin embargo, las temperaturas varian dramaticamente — las tierras bajas alrededor de Santa Cruz son calidas, mientras que las ciudades del altiplano como La Paz y Oruro pueden ser frescas incluso en diciembre.',
      },
    },
  ],

  colorTheme: 'christmas',
  icon: '\ud83c\udf84',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const boHolidays: HolidayData[] = [
  newYearsDay,
  carnival,
  goodFriday,
  labourDay,
  independenceDay,
  christmas,
];

export default boHolidays;
