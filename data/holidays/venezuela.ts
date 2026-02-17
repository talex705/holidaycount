/**
 * Venezuela holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getCarnivalTuesday } from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 've_new-years-day',
  countryCode: 've',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'ano-nuevo' },
  names: { en: "New Year's Day", fr: "Jour de l'An", es: 'Ano Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 is a joyous public holiday in Venezuela, celebrated with fireworks, family gatherings, and festive meals. Venezuelans welcome the new year with traditions meant to bring good luck and prosperity.",
    fr: "Le Jour de l'An, le 1er janvier, est un jour ferié joyeux au Venezuela, célébré avec des feux d'artifice, des réunions familiales et des repas festifs. Les Vénézuéliens accueillent la nouvelle année avec des traditions censées apporter chance et prospérité.",
    es: 'El Ano Nuevo, el 1 de enero, es un alegre dia festivo en Venezuela, celebrado con fuegos artificiales, reuniones familiares y comidas festivas. Los venezolanos reciben el nuevo ano con tradiciones destinadas a traer buena suerte y prosperidad.',
  },

  history: {
    en: "New Year's celebrations in Venezuela blend Spanish colonial traditions with indigenous and African influences. The festivities typically begin on New Year's Eve (Noche Vieja) and continue into the early hours of January 1. Throughout the country, families gather to share hallacas, pan de jamon, and other traditional dishes.\n\nIn cities like Caracas, Maracaibo, and Valencia, public plazas come alive with music, dancing, and fireworks at midnight. Many Venezuelans follow unique superstitions, such as wearing yellow underwear for luck or eating twelve grapes at midnight — one for each month of the coming year.\n\nThe holiday reflects Venezuela's vibrant culture and strong family values, with many people traveling across the country to spend the occasion with loved ones.",
    fr: "Les célébrations du Nouvel An au Venezuela mélangent les traditions coloniales espagnoles avec les influences indigènes et africaines. Les festivités commencent généralement la veille du Nouvel An (Noche Vieja) et se poursuivent jusqu'aux premières heures du 1er janvier. Dans tout le pays, les familles se réunissent pour partager des hallacas, du pan de jamon et d'autres plats traditionnels.\n\nDans des villes comme Caracas, Maracaibo et Valencia, les places publiques s'animent avec de la musique, des danses et des feux d'artifice à minuit. De nombreux Vénézuéliens suivent des superstitions uniques, comme porter des sous-vêtements jaunes pour la chance ou manger douze raisins à minuit — un pour chaque mois de l'année à venir.\n\nLe jour férié reflète la culture vibrante et les fortes valeurs familiales du Venezuela, de nombreuses personnes voyageant à travers le pays pour passer l'occasion avec leurs proches.",
    es: 'Las celebraciones de Ano Nuevo en Venezuela mezclan tradiciones coloniales espanolas con influencias indigenas y africanas. Las festividades comienzan tipicamente en la Noche Vieja y continuan hasta las primeras horas del 1 de enero. En todo el pais, las familias se reunen para compartir hallacas, pan de jamon y otros platos tradicionales.\n\nEn ciudades como Caracas, Maracaibo y Valencia, las plazas publicas cobran vida con musica, baile y fuegos artificiales a medianoche. Muchos venezolanos siguen supersticiones unicas, como usar ropa interior amarilla para la suerte o comer doce uvas a medianoche, una por cada mes del ano venidero.\n\nEl dia festivo refleja la vibrante cultura y los fuertes valores familiares de Venezuela, con muchas personas viajando por el pais para pasar la ocasion con sus seres queridos.',
  },

  traditions: {
    en: [
      'Eating twelve grapes at midnight — one for each month of the coming year',
      'Wearing yellow underwear for good luck in the new year',
      'Sharing a family dinner of hallacas, pan de jamon, and ensalada de gallina',
      'Watching fireworks displays in city plazas and neighborhoods',
      'Carrying a suitcase around the block at midnight to ensure travel in the new year',
      'Placing money in your shoes at midnight to attract prosperity',
      'Embracing and wishing loved ones a happy new year at the stroke of midnight',
    ],
    fr: [
      'Manger douze raisins a minuit — un pour chaque mois de l\'annee a venir',
      'Porter des sous-vetements jaunes pour la bonne chance',
      'Partager un diner familial de hallacas, pan de jamon et ensalada de gallina',
      'Regarder les feux d\'artifice sur les places et dans les quartiers',
      'Porter une valise autour du pate de maisons a minuit pour assurer des voyages',
      'Placer de l\'argent dans ses chaussures a minuit pour attirer la prosperite',
      'S\'embrasser et souhaiter une bonne annee a ses proches au coup de minuit',
    ],
    es: [
      'Comer doce uvas a medianoche — una por cada mes del ano venidero',
      'Usar ropa interior amarilla para la buena suerte en el nuevo ano',
      'Compartir una cena familiar de hallacas, pan de jamon y ensalada de gallina',
      'Ver fuegos artificiales en plazas y vecindarios',
      'Cargar una maleta alrededor de la cuadra a medianoche para asegurar viajes',
      'Colocar dinero en los zapatos a medianoche para atraer prosperidad',
      'Abrazar y desear feliz ano nuevo a los seres queridos a medianoche',
    ],
  },

  funFacts: {
    en: [
      'Many Venezuelans eat twelve grapes at midnight, a tradition borrowed from Spain, making one wish per grape.',
      'The tradition of wearing yellow underwear on New Year\'s Eve is believed to bring financial prosperity.',
      'In some Venezuelan towns, residents burn effigies of the "Old Year" (Ano Viejo) at midnight to symbolize leaving behind the past.',
      'Pan de jamon, a bread roll stuffed with ham, olives, and raisins, is a uniquely Venezuelan Christmas and New Year staple.',
      'Venezuelan families often stay awake until sunrise on January 1, continuing the party with music and dancing.',
    ],
    fr: [
      'De nombreux Venezueliens mangent douze raisins a minuit, une tradition empruntee a l\'Espagne, en faisant un voeu par raisin.',
      'La tradition de porter des sous-vetements jaunes a la veille du Nouvel An est censee apporter la prosperite financiere.',
      'Dans certaines villes venezueliennes, les habitants brulent des effigies du « Vieil An » (Ano Viejo) a minuit pour symboliser l\'abandon du passe.',
      'Le pan de jamon, un pain fourre au jambon, aux olives et aux raisins secs, est un incontournable venezuelien de Noel et du Nouvel An.',
      'Les familles venezueliennes restent souvent eveillees jusqu\'au lever du soleil le 1er janvier, continuant la fete avec musique et danse.',
    ],
    es: [
      'Muchos venezolanos comen doce uvas a medianoche, una tradicion tomada de Espana, pidiendo un deseo por cada uva.',
      'La tradicion de usar ropa interior amarilla en Noche Vieja se cree que trae prosperidad financiera.',
      'En algunos pueblos venezolanos, los residentes queman efigies del "Ano Viejo" a medianoche para simbolizar dejar atras el pasado.',
      'El pan de jamon, un pan relleno de jamon, aceitunas y pasas, es un clasico venezolano de Navidad y Ano Nuevo.',
      'Las familias venezolanas a menudo se quedan despiertas hasta el amanecer del 1 de enero, continuando la fiesta con musica y baile.',
    ],
  },

  planningChecklist: {
    en: [
      'Stock up on grapes, yellow underwear, and other New Year traditions in advance',
      'Plan your family dinner menu with hallacas and pan de jamon',
      'Book restaurant reservations or event tickets early for New Year\'s Eve',
      'Prepare fireworks or sparklers for a midnight celebration',
      'Arrange transportation as roads and public transit can be very busy',
    ],
    fr: [
      'Faire le plein de raisins, de sous-vetements jaunes et d\'autres traditions du Nouvel An a l\'avance',
      'Planifier le menu du diner familial avec des hallacas et du pan de jamon',
      'Reserver au restaurant ou acheter des billets d\'evenement tot pour la veille du Nouvel An',
      'Preparer des feux d\'artifice ou des cierges magiques pour la celebration de minuit',
      'Organiser le transport car les routes et les transports publics peuvent etre tres charges',
    ],
    es: [
      'Abastecerse de uvas, ropa interior amarilla y otras tradiciones de Ano Nuevo con anticipacion',
      'Planificar el menu de la cena familiar con hallacas y pan de jamon',
      'Reservar restaurantes o comprar boletos para eventos con anticipacion para Noche Vieja',
      'Preparar fuegos artificiales o bengalas para la celebracion de medianoche',
      'Organizar el transporte ya que las calles y el transporte publico pueden estar muy concurridos',
    ],
  },

  relatedHolidays: ['ve_christmas', 've_carnival'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Venezuela — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in Venezuela? Live countdown to January 1, Venezuelan traditions, and celebration guide.",
      keywords: ["New Year's Day Venezuela", 'Ano Nuevo Venezuela', 'Venezuela New Year traditions', 'Venezuelan holidays', "New Year's countdown"],
    },
    fr: {
      titleTemplate: "Jour de l'An {year} Venezuela — Compte a rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'An {year} au Venezuela ? Compte a rebours, traditions venezueliennes et guide de celebration.",
      keywords: ["Jour de l'An Venezuela", 'Nouvel An Venezuela', 'traditions venezueliennes', 'jours feries Venezuela', 'compte a rebours Nouvel An'],
    },
    es: {
      titleTemplate: 'Ano Nuevo {year} Venezuela — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es Ano Nuevo {year} en Venezuela? Cuenta regresiva al 1 de enero, tradiciones venezolanas y guia de celebracion.',
      keywords: ['Ano Nuevo Venezuela', 'feriados Venezuela', 'tradiciones venezolanas', 'dias festivos Venezuela', 'cuenta regresiva Ano Nuevo'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in Venezuela?", fr: "Quand est le Jour de l'An {year} au Venezuela ?", es: 'Cuando es Ano Nuevo {year} en Venezuela?' },
      answer: {
        en: "New Year's Day {year} in Venezuela is on {date}. It is always January 1 and is a national public holiday.",
        fr: "Le Jour de l'An {year} au Venezuela est le {date}. C'est toujours le 1er janvier et c'est un jour ferie national.",
        es: 'El Ano Nuevo {year} en Venezuela es el {date}. Siempre es el 1 de enero y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'What do Venezuelans eat on New Year\'s Eve?', fr: 'Que mangent les Venezueliens le soir du Nouvel An ?', es: 'Que comen los venezolanos en Noche Vieja?' },
      answer: {
        en: 'Venezuelans traditionally enjoy hallacas (corn dough stuffed with a stew and wrapped in banana leaves), pan de jamon (ham bread), ensalada de gallina (chicken salad), and pernil (roasted pork leg) for the New Year\'s Eve dinner.',
        fr: 'Les Venezueliens degustent traditionnellement des hallacas (pate de mais farci d\'un ragout et enveloppe dans des feuilles de bananier), du pan de jamon (pain au jambon), de l\'ensalada de gallina (salade de poulet) et du pernil (cuisse de porc rotie) pour le diner du reveillon.',
        es: 'Los venezolanos tradicionalmente disfrutan de hallacas (masa de maiz rellena de guiso envuelta en hojas de platano), pan de jamon, ensalada de gallina y pernil (pierna de cerdo asada) en la cena de Noche Vieja.',
      },
    },
    {
      question: { en: 'What are popular New Year traditions in Venezuela?', fr: 'Quelles sont les traditions populaires du Nouvel An au Venezuela ?', es: 'Cuales son las tradiciones populares de Ano Nuevo en Venezuela?' },
      answer: {
        en: 'Popular traditions include eating twelve grapes at midnight, wearing yellow underwear for luck, carrying a suitcase around the block to ensure travel, and placing money in your shoes for prosperity. Fireworks and family gatherings are also essential.',
        fr: 'Les traditions populaires incluent manger douze raisins a minuit, porter des sous-vetements jaunes pour la chance, porter une valise autour du pate de maisons pour assurer des voyages, et placer de l\'argent dans ses chaussures pour la prosperite. Les feux d\'artifice et les reunions familiales sont egalement essentiels.',
        es: 'Las tradiciones populares incluyen comer doce uvas a medianoche, usar ropa interior amarilla para la suerte, cargar una maleta alrededor de la cuadra para asegurar viajes, y colocar dinero en los zapatos para la prosperidad. Los fuegos artificiales y las reuniones familiares tambien son esenciales.',
      },
    },
    {
      question: { en: "Is New Year's Day a public holiday in Venezuela?", fr: "Le Jour de l'An est-il un jour ferie au Venezuela ?", es: 'Es Ano Nuevo un dia festivo en Venezuela?' },
      answer: {
        en: "Yes, New Year's Day (January 1) is an official public holiday in Venezuela. Banks, government offices, and most businesses are closed.",
        fr: "Oui, le Jour de l'An (1er janvier) est un jour ferie officiel au Venezuela. Les banques, les bureaux gouvernementaux et la plupart des commerces sont fermes.",
        es: 'Si, el Ano Nuevo (1 de enero) es un dia festivo oficial en Venezuela. Los bancos, las oficinas gubernamentales y la mayoria de los comercios estan cerrados.',
      },
    },
  ],

  colorTheme: 'new-year',
  icon: '\ud83c\udf86',
};

// ---------------------------------------------------------------------------
// Carnival Tuesday — 47 days before Easter
// ---------------------------------------------------------------------------

const carnival: HolidayData = {
  id: 've_carnival',
  countryCode: 've',
  slugs: { en: 'carnival', fr: 'carnaval', es: 'carnaval' },
  names: { en: 'Carnival', fr: 'Carnaval', es: 'Carnaval' },

  dateType: 'calculated',
  calculateDate: getCarnivalTuesday,

  descriptions: {
    en: 'Carnival in Venezuela is a vibrant celebration held on the Tuesday before Ash Wednesday, featuring colorful parades, music, water fights, and the UNESCO-recognized El Callao carnival. It is one of the most anticipated holidays in the country.',
    fr: "Le Carnaval au Venezuela est une celebration vibrante qui a lieu le mardi precedant le mercredi des Cendres, avec des defiles colores, de la musique, des batailles d'eau et le carnaval d'El Callao reconnu par l'UNESCO. C'est l'un des jours feries les plus attendus du pays.",
    es: 'El Carnaval en Venezuela es una vibrante celebracion que se lleva a cabo el martes antes del Miercoles de Ceniza, con desfiles coloridos, musica, batallas de agua y el carnaval de El Callao reconocido por la UNESCO. Es uno de los dias festivos mas esperados del pais.',
  },

  history: {
    en: "Venezuelan Carnival traditions date back to the colonial era, blending Spanish, African, and indigenous cultural elements. The celebration was brought by Spanish colonists and evolved over centuries as enslaved Africans and indigenous peoples added their own musical, dance, and artistic traditions.\n\nThe Carnival of El Callao, in southern Venezuela's Bolivar state, was inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity in 2016. This carnival features the distinctive calypso music of El Callao, the Madamas (women in colorful Antillean dress), and the iconic Medio Pinto characters who paint bystanders' faces with soot.\n\nThroughout Venezuela, Carnival is a two-day public holiday (Monday and Tuesday before Ash Wednesday). Cities and towns hold parades, street parties, beauty queen competitions, and water fights. The celebration represents a powerful expression of Venezuela's multicultural identity.",
    fr: "Les traditions du Carnaval venezuelien remontent a l'epoque coloniale, melangeant des elements culturels espagnols, africains et indigenes. La celebration a ete apportee par les colons espagnols et a evolue au fil des siecles a mesure que les Africains reduits en esclavage et les peuples autochtones ajoutaient leurs propres traditions musicales, de danse et artistiques.\n\nLe Carnaval d'El Callao, dans l'etat de Bolivar au sud du Venezuela, a ete inscrit sur la Liste representative du patrimoine culturel immateriel de l'humanite de l'UNESCO en 2016. Ce carnaval presente le calypso distinctif d'El Callao, les Madamas (femmes en tenues antillaises colorees) et les personnages iconiques du Medio Pinto qui peignent les visages des spectateurs avec de la suie.\n\nDans tout le Venezuela, le Carnaval est un jour ferie de deux jours (lundi et mardi avant le mercredi des Cendres). Les villes organisent des defiles, des fetes de rue, des concours de beaute et des batailles d'eau. La celebration represente une expression puissante de l'identite multiculturelle du Venezuela.",
    es: "Las tradiciones del Carnaval venezolano se remontan a la epoca colonial, mezclando elementos culturales espanoles, africanos e indigenas. La celebracion fue traida por los colonos espanoles y evoluciono durante siglos a medida que los africanos esclavizados y los pueblos indigenas anadieron sus propias tradiciones musicales, de baile y artisticas.\n\nEl Carnaval de El Callao, en el estado Bolivar al sur de Venezuela, fue inscrito en la Lista Representativa del Patrimonio Cultural Inmaterial de la Humanidad de la UNESCO en 2016. Este carnaval presenta el calipso distintivo de El Callao, las Madamas (mujeres con vestimenta antillana colorida) y los iconicos personajes del Medio Pinto que pintan los rostros de los espectadores con hollin.\n\nEn todo Venezuela, el Carnaval es un dia festivo de dos dias (lunes y martes antes del Miercoles de Ceniza). Las ciudades y pueblos realizan desfiles, fiestas callejeras, concursos de belleza y batallas de agua. La celebracion representa una poderosa expresion de la identidad multicultural de Venezuela.",
  },

  traditions: {
    en: [
      'Attending the El Callao Carnival with its UNESCO-recognized calypso music and Madamas parades',
      'Participating in water fights and foam spray battles in the streets',
      'Watching colorful float parades and beauty queen competitions',
      'Dancing to calypso, salsa, and tambor music in the streets',
      'Wearing elaborate costumes and masks during parades',
      'Traveling to the coast or countryside for the long holiday weekend',
      'Enjoying traditional foods like empanadas, arepas, and chicha',
    ],
    fr: [
      "Assister au Carnaval d'El Callao avec sa musique calypso et ses defiles de Madamas reconnus par l'UNESCO",
      "Participer a des batailles d'eau et de mousse dans les rues",
      'Regarder les defiles de chars colores et les concours de beaute',
      'Danser au calypso, a la salsa et au tambor dans les rues',
      'Porter des costumes elabores et des masques pendant les defiles',
      'Voyager vers la cote ou la campagne pour le long week-end ferie',
      'Deguster des plats traditionnels comme les empanadas, les arepas et la chicha',
    ],
    es: [
      'Asistir al Carnaval de El Callao con su musica calipso y desfiles de Madamas reconocidos por la UNESCO',
      'Participar en batallas de agua y espuma en las calles',
      'Ver desfiles de carrozas coloridas y concursos de belleza',
      'Bailar calipso, salsa y tambor en las calles',
      'Usar disfraces elaborados y mascaras durante los desfiles',
      'Viajar a la costa o al campo para el largo fin de semana festivo',
      'Disfrutar de comidas tradicionales como empanadas, arepas y chicha',
    ],
  },

  funFacts: {
    en: [
      "The Carnival of El Callao was declared UNESCO Intangible Cultural Heritage in 2016 for its unique blend of Antillean, African, and Venezuelan traditions.",
      "Venezuela's Carnival is officially a two-day public holiday, giving Venezuelans a four-day weekend including Saturday and Sunday.",
      "The Medio Pinto character at El Callao paints bystanders' faces with soot — if you refuse, tradition says you must pay a fine.",
      'The calypso music of El Callao is sung in a mixture of English, French, Spanish, and Patois, reflecting the region\'s diverse heritage.',
      'Water fights during Venezuelan Carnival are so widespread that it is nearly impossible to walk through town without getting soaked.',
    ],
    fr: [
      "Le Carnaval d'El Callao a ete declare patrimoine culturel immateriel de l'UNESCO en 2016 pour son melange unique de traditions antillaises, africaines et venezueliennes.",
      "Le Carnaval du Venezuela est officiellement un jour ferie de deux jours, offrant aux Venezueliens un week-end de quatre jours.",
      "Le personnage du Medio Pinto a El Callao peint les visages des spectateurs avec de la suie — si vous refusez, la tradition dit que vous devez payer une amende.",
      "La musique calypso d'El Callao est chantee dans un melange d'anglais, de francais, d'espagnol et de patois, refletant le patrimoine diversifie de la region.",
      "Les batailles d'eau pendant le Carnaval venezuelien sont si repandues qu'il est presque impossible de traverser la ville sans etre trempe.",
    ],
    es: [
      'El Carnaval de El Callao fue declarado Patrimonio Cultural Inmaterial de la UNESCO en 2016 por su mezcla unica de tradiciones antillanas, africanas y venezolanas.',
      'El Carnaval de Venezuela es oficialmente un dia festivo de dos dias, dando a los venezolanos un fin de semana de cuatro dias.',
      'El personaje del Medio Pinto en El Callao pinta los rostros de los espectadores con hollin — si te niegas, la tradicion dice que debes pagar una multa.',
      'La musica calipso de El Callao se canta en una mezcla de ingles, frances, espanol y patois, reflejando la diversa herencia de la region.',
      'Las batallas de agua durante el Carnaval venezolano son tan extendidas que es casi imposible caminar por la ciudad sin mojarse.',
    ],
  },

  planningChecklist: {
    en: [
      'Book travel to El Callao or coastal towns well in advance for Carnival weekend',
      'Prepare waterproof bags for electronics during water fights',
      'Buy costumes, masks, and foam spray before they sell out',
      'Plan transportation early as roads and buses are packed during Carnival',
      'Reserve beach or resort accommodations months ahead for the long weekend',
    ],
    fr: [
      "Reserver un voyage a El Callao ou dans les villes cotieres bien a l'avance pour le week-end de Carnaval",
      "Preparer des sacs etanches pour l'electronique pendant les batailles d'eau",
      'Acheter des costumes, des masques et de la mousse en spray avant rupture de stock',
      'Planifier le transport tot car les routes et les bus sont bondes pendant le Carnaval',
      "Reserver des hebergements a la plage ou dans des complexes touristiques des mois a l'avance",
    ],
    es: [
      'Reservar viaje a El Callao o ciudades costeras con mucha anticipacion para el fin de semana de Carnaval',
      'Preparar bolsas impermeables para electronicos durante las batallas de agua',
      'Comprar disfraces, mascaras y espuma en spray antes de que se agoten',
      'Planificar el transporte temprano ya que las carreteras y autobuses estan llenos durante el Carnaval',
      'Reservar alojamiento en playa o resorts con meses de anticipacion para el fin de semana largo',
    ],
  },

  relatedHolidays: ['ve_new-years-day', 've_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Carnival {year} Venezuela — Countdown & Guide',
      descriptionTemplate: 'When is Carnival {year} in Venezuela? Live countdown, El Callao UNESCO heritage, traditions, and celebration guide.',
      keywords: ['Venezuela Carnival', 'El Callao Carnival', 'Carnaval Venezuela', 'Venezuelan Carnival traditions', 'Carnival countdown'],
    },
    fr: {
      titleTemplate: 'Carnaval {year} Venezuela — Compte a rebours et guide',
      descriptionTemplate: "Quand est le Carnaval {year} au Venezuela ? Compte a rebours, patrimoine UNESCO d'El Callao, traditions et guide.",
      keywords: ['Carnaval Venezuela', "Carnaval d'El Callao", 'traditions carnavalesques Venezuela', 'jours feries Venezuela', 'compte a rebours Carnaval'],
    },
    es: {
      titleTemplate: 'Carnaval {year} Venezuela — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Carnaval {year} en Venezuela? Cuenta regresiva, patrimonio UNESCO de El Callao, tradiciones y guia.',
      keywords: ['Carnaval Venezuela', 'Carnaval de El Callao', 'tradiciones de Carnaval Venezuela', 'feriados Venezuela', 'cuenta regresiva Carnaval'],
    },
  },

  faq: [
    {
      question: { en: 'When is Carnival {year} in Venezuela?', fr: 'Quand est le Carnaval {year} au Venezuela ?', es: 'Cuando es el Carnaval {year} en Venezuela?' },
      answer: {
        en: 'Carnival {year} in Venezuela falls on {date}. It is celebrated on the Tuesday before Ash Wednesday and its date changes each year based on Easter.',
        fr: "Le Carnaval {year} au Venezuela tombe le {date}. Il est celebre le mardi precedant le mercredi des Cendres et sa date change chaque annee en fonction de Paques.",
        es: 'El Carnaval {year} en Venezuela cae el {date}. Se celebra el martes antes del Miercoles de Ceniza y su fecha cambia cada ano segun la Pascua.',
      },
    },
    {
      question: { en: "What is the El Callao Carnival?", fr: "Qu'est-ce que le Carnaval d'El Callao ?", es: 'Que es el Carnaval de El Callao?' },
      answer: {
        en: "The El Callao Carnival is Venezuela's most famous carnival celebration, held in the town of El Callao in Bolivar state. Recognized as UNESCO Intangible Cultural Heritage in 2016, it features unique calypso music, the Madamas in Antillean dress, and the Medio Pinto characters.",
        fr: "Le Carnaval d'El Callao est la celebration de carnaval la plus celebre du Venezuela, tenue dans la ville d'El Callao dans l'etat de Bolivar. Reconnu comme patrimoine culturel immateriel de l'UNESCO en 2016, il presente une musique calypso unique, les Madamas en tenue antillaise et les personnages du Medio Pinto.",
        es: 'El Carnaval de El Callao es la celebracion de carnaval mas famosa de Venezuela, realizada en la ciudad de El Callao en el estado Bolivar. Reconocido como Patrimonio Cultural Inmaterial de la UNESCO en 2016, presenta musica calipso unica, las Madamas con vestimenta antillana y los personajes del Medio Pinto.',
      },
    },
    {
      question: { en: 'Is Carnival a public holiday in Venezuela?', fr: 'Le Carnaval est-il un jour ferie au Venezuela ?', es: 'Es el Carnaval un dia festivo en Venezuela?' },
      answer: {
        en: 'Yes, Carnival Monday and Tuesday are official public holidays in Venezuela. Most businesses, schools, and government offices are closed, and many Venezuelans take the opportunity to travel.',
        fr: 'Oui, le lundi et le mardi de Carnaval sont des jours feries officiels au Venezuela. La plupart des entreprises, des ecoles et des bureaux gouvernementaux sont fermes, et de nombreux Venezueliens en profitent pour voyager.',
        es: 'Si, el lunes y martes de Carnaval son dias festivos oficiales en Venezuela. La mayoria de los negocios, escuelas y oficinas gubernamentales estan cerrados, y muchos venezolanos aprovechan para viajar.',
      },
    },
    {
      question: { en: 'What is the Medio Pinto?', fr: "Qu'est-ce que le Medio Pinto ?", es: 'Que es el Medio Pinto?' },
      answer: {
        en: "The Medio Pinto is a traditional character of the El Callao Carnival who paints bystanders' faces with a mixture of soot and grease. According to tradition, anyone who refuses to have their face painted must pay a small fine. The character represents the playful and inclusive spirit of the carnival.",
        fr: "Le Medio Pinto est un personnage traditionnel du Carnaval d'El Callao qui peint les visages des spectateurs avec un melange de suie et de graisse. Selon la tradition, quiconque refuse de se faire peindre le visage doit payer une petite amende. Le personnage represente l'esprit ludique et inclusif du carnaval.",
        es: 'El Medio Pinto es un personaje tradicional del Carnaval de El Callao que pinta los rostros de los espectadores con una mezcla de hollin y grasa. Segun la tradicion, quien se niegue a que le pinten el rostro debe pagar una pequena multa. El personaje representa el espiritu ludico e inclusivo del carnaval.',
      },
    },
  ],

  colorTheme: 'carnival',
  icon: '\ud83c\udfad',
};

// ---------------------------------------------------------------------------
// Battle of Carabobo — June 24
// ---------------------------------------------------------------------------

const battleOfCarabobo: HolidayData = {
  id: 've_battle-of-carabobo',
  countryCode: 've',
  slugs: { en: 'battle-of-carabobo', fr: 'bataille-de-carabobo', es: 'batalla-de-carabobo' },
  names: { en: 'Battle of Carabobo', fr: 'Bataille de Carabobo', es: 'Batalla de Carabobo' },

  dateType: 'fixed',
  fixedMonth: 6,
  fixedDay: 24,

  descriptions: {
    en: 'The Battle of Carabobo is commemorated on June 24 in Venezuela, marking the decisive 1821 battle that secured Venezuelan independence from Spain. It is a day of military celebrations, patriotic ceremonies, and national pride.',
    fr: 'La Bataille de Carabobo est commemoree le 24 juin au Venezuela, marquant la bataille decisive de 1821 qui a assure l\'independance du Venezuela vis-a-vis de l\'Espagne. C\'est un jour de celebrations militaires, de ceremonies patriotiques et de fierte nationale.',
    es: 'La Batalla de Carabobo se conmemora el 24 de junio en Venezuela, marcando la batalla decisiva de 1821 que aseguro la independencia venezolana de Espana. Es un dia de celebraciones militares, ceremonias patrioticas y orgullo nacional.',
  },

  history: {
    en: "The Battle of Carabobo took place on June 24, 1821, on the fields of Carabobo near the city of Valencia. Led by Simon Bolivar, the patriot army defeated the royalist forces commanded by Field Marshal Miguel de la Torre, effectively ending Spanish colonial rule in Venezuela.\n\nThe battle was a turning point in South America's wars of independence. Bolivar's forces included Venezuelan, Colombian, and British volunteer soldiers, demonstrating the international character of the independence movement. The victory at Carabobo opened the path to liberating the rest of northern South America.\n\nToday, the Carabobo battlefield is a national historic site with a monument and museum. Each year on June 24, the Venezuelan military holds parades and ceremonies at the site, and the president typically delivers a commemorative address. The date also coincides with Army Day in Venezuela.",
    fr: "La Bataille de Carabobo a eu lieu le 24 juin 1821, dans les champs de Carabobo pres de la ville de Valencia. Menee par Simon Bolivar, l'armee patriote a vaincu les forces royalistes commandees par le marechal Miguel de la Torre, mettant effectivement fin a la domination coloniale espagnole au Venezuela.\n\nLa bataille a ete un tournant dans les guerres d'independance de l'Amerique du Sud. Les forces de Bolivar comprenaient des soldats venezueliens, colombiens et des volontaires britanniques, demontrant le caractere international du mouvement d'independance. La victoire a Carabobo a ouvert la voie a la liberation du reste du nord de l'Amerique du Sud.\n\nAujourd'hui, le champ de bataille de Carabobo est un site historique national avec un monument et un musee. Chaque annee, le 24 juin, l'armee venezuelienne organise des defiles et des ceremonies sur le site, et le president prononce generalement un discours commemoratif. La date coincide egalement avec le Jour de l'Armee au Venezuela.",
    es: "La Batalla de Carabobo tuvo lugar el 24 de junio de 1821, en los campos de Carabobo cerca de la ciudad de Valencia. Liderada por Simon Bolivar, el ejercito patriota derroto a las fuerzas realistas comandadas por el mariscal de campo Miguel de la Torre, poniendo efectivamente fin al dominio colonial espanol en Venezuela.\n\nLa batalla fue un punto de inflexion en las guerras de independencia de Sudamerica. Las fuerzas de Bolivar incluian soldados venezolanos, colombianos y voluntarios britanicos, demostrando el caracter internacional del movimiento independentista. La victoria en Carabobo abrio el camino para liberar el resto del norte de Sudamerica.\n\nHoy, el campo de batalla de Carabobo es un sitio historico nacional con un monumento y un museo. Cada ano el 24 de junio, el ejercito venezolano realiza desfiles y ceremonias en el sitio, y el presidente tipicamente pronuncia un discurso conmemorativo. La fecha tambien coincide con el Dia del Ejercito en Venezuela.",
  },

  traditions: {
    en: [
      'Attending military parades and ceremonies at the Carabobo battlefield',
      'Watching the presidential commemorative address on television',
      'Visiting the Carabobo Monument and museum near Valencia',
      'Participating in patriotic school events and historical reenactments',
      'Flying the Venezuelan flag on homes and public buildings',
    ],
    fr: [
      'Assister aux defiles militaires et ceremonies sur le champ de bataille de Carabobo',
      'Regarder le discours commemoratif presidentiel a la television',
      'Visiter le Monument de Carabobo et le musee pres de Valencia',
      'Participer aux evenements scolaires patriotiques et reconstitutions historiques',
      'Hisser le drapeau venezuelien sur les maisons et les batiments publics',
    ],
    es: [
      'Asistir a desfiles militares y ceremonias en el campo de batalla de Carabobo',
      'Ver el discurso conmemorativo presidencial por television',
      'Visitar el Monumento de Carabobo y el museo cerca de Valencia',
      'Participar en eventos escolares patrioticos y recreaciones historicas',
      'Izar la bandera venezolana en hogares y edificios publicos',
    ],
  },

  funFacts: {
    en: [
      'The Battle of Carabobo lasted only about one hour, but its outcome was decisive for Venezuelan independence.',
      'British volunteers, known as the British Legion, played a crucial role in the Battle of Carabobo, suffering heavy casualties.',
      'The Carabobo Monument, inaugurated in 1921 for the centennial, features a 46-meter triumphal arch.',
      'June 24 is also celebrated as Army Day (Dia del Ejercito) in Venezuela.',
      'Simon Bolivar promoted the officer who led the charge, Jose Antonio Paez, who later became Venezuela\'s first president.',
    ],
    fr: [
      "La Bataille de Carabobo n'a dure qu'environ une heure, mais son issue a ete decisive pour l'independance du Venezuela.",
      'Les volontaires britanniques, connus sous le nom de Legion Britannique, ont joue un role crucial dans la bataille, subissant de lourdes pertes.',
      'Le Monument de Carabobo, inaugure en 1921 pour le centenaire, presente un arc de triomphe de 46 metres.',
      "Le 24 juin est egalement celebre comme Jour de l'Armee (Dia del Ejercito) au Venezuela.",
      "Simon Bolivar a promu l'officier qui a mene la charge, Jose Antonio Paez, qui est devenu plus tard le premier president du Venezuela.",
    ],
    es: [
      'La Batalla de Carabobo duro solo alrededor de una hora, pero su resultado fue decisivo para la independencia venezolana.',
      'Los voluntarios britanicos, conocidos como la Legion Britanica, jugaron un papel crucial en la batalla, sufriendo numerosas bajas.',
      'El Monumento de Carabobo, inaugurado en 1921 para el centenario, presenta un arco triunfal de 46 metros.',
      'El 24 de junio tambien se celebra como Dia del Ejercito en Venezuela.',
      'Simon Bolivar ascendio al oficial que lidero la carga, Jose Antonio Paez, quien luego se convirtio en el primer presidente de Venezuela.',
    ],
  },

  planningChecklist: {
    en: [
      'Check if military parades are open to the public this year',
      'Plan a visit to the Carabobo Monument and battlefield near Valencia',
      'Watch for special television programming about Venezuelan independence',
      'Prepare Venezuelan flags and patriotic decorations',
      'Learn about the history of the battle to share with children',
    ],
    fr: [
      'Verifier si les defiles militaires sont ouverts au public cette annee',
      'Planifier une visite au Monument de Carabobo et au champ de bataille pres de Valencia',
      "Regarder les programmes televisuels speciaux sur l'independance du Venezuela",
      'Preparer des drapeaux venezueliens et des decorations patriotiques',
      "S'informer sur l'histoire de la bataille pour la partager avec les enfants",
    ],
    es: [
      'Verificar si los desfiles militares estan abiertos al publico este ano',
      'Planificar una visita al Monumento de Carabobo y el campo de batalla cerca de Valencia',
      'Ver la programacion especial de television sobre la independencia venezolana',
      'Preparar banderas venezolanas y decoraciones patrioticas',
      'Aprender sobre la historia de la batalla para compartir con los ninos',
    ],
  },

  relatedHolidays: ['ve_independence-day', 've_simon-bolivar-day'],

  seo: {
    en: {
      titleTemplate: 'Battle of Carabobo Day {year} Venezuela — Countdown & History',
      descriptionTemplate: 'When is Battle of Carabobo Day {year}? Live countdown to June 24, history of the decisive 1821 independence battle, and celebrations.',
      keywords: ['Battle of Carabobo', 'Venezuela independence', 'June 24 Venezuela', 'Batalla de Carabobo', 'Venezuelan holidays'],
    },
    fr: {
      titleTemplate: 'Bataille de Carabobo {year} Venezuela — Compte a rebours et histoire',
      descriptionTemplate: 'Quand est le Jour de la Bataille de Carabobo {year} ? Compte a rebours, histoire de la bataille decisive de 1821 et celebrations.',
      keywords: ['Bataille de Carabobo', 'independance Venezuela', '24 juin Venezuela', 'jours feries Venezuela', 'histoire Venezuela'],
    },
    es: {
      titleTemplate: 'Batalla de Carabobo {year} Venezuela — Cuenta regresiva e historia',
      descriptionTemplate: 'Cuando es el Dia de la Batalla de Carabobo {year}? Cuenta regresiva al 24 de junio, historia de la batalla decisiva de 1821 y celebraciones.',
      keywords: ['Batalla de Carabobo', 'independencia Venezuela', '24 de junio Venezuela', 'feriados Venezuela', 'historia Venezuela'],
    },
  },

  faq: [
    {
      question: { en: 'When is Battle of Carabobo Day {year}?', fr: 'Quand est le Jour de la Bataille de Carabobo {year} ?', es: 'Cuando es el Dia de la Batalla de Carabobo {year}?' },
      answer: {
        en: 'Battle of Carabobo Day {year} is on {date}. It is always June 24.',
        fr: 'Le Jour de la Bataille de Carabobo {year} est le {date}. C\'est toujours le 24 juin.',
        es: 'El Dia de la Batalla de Carabobo {year} es el {date}. Siempre es el 24 de junio.',
      },
    },
    {
      question: { en: 'What happened at the Battle of Carabobo?', fr: "Que s'est-il passe a la Bataille de Carabobo ?", es: 'Que sucedio en la Batalla de Carabobo?' },
      answer: {
        en: "The Battle of Carabobo on June 24, 1821, was the decisive battle in Venezuela's war of independence. Simon Bolivar's patriot forces defeated the Spanish royalist army, effectively ending colonial rule in Venezuela.",
        fr: "La Bataille de Carabobo du 24 juin 1821 a ete la bataille decisive dans la guerre d'independance du Venezuela. Les forces patriotes de Simon Bolivar ont vaincu l'armee royaliste espagnole, mettant effectivement fin a la domination coloniale.",
        es: 'La Batalla de Carabobo del 24 de junio de 1821 fue la batalla decisiva en la guerra de independencia de Venezuela. Las fuerzas patriotas de Simon Bolivar derrotaron al ejercito realista espanol, poniendo efectivamente fin al dominio colonial.',
      },
    },
    {
      question: { en: 'Is Battle of Carabobo Day a public holiday?', fr: 'Le Jour de la Bataille de Carabobo est-il un jour ferie ?', es: 'Es el Dia de la Batalla de Carabobo un dia festivo?' },
      answer: {
        en: 'Yes, June 24 is an official public holiday in Venezuela, commemorating both the Battle of Carabobo and Army Day.',
        fr: 'Oui, le 24 juin est un jour ferie officiel au Venezuela, commemorant a la fois la Bataille de Carabobo et le Jour de l\'Armee.',
        es: 'Si, el 24 de junio es un dia festivo oficial en Venezuela, conmemorando tanto la Batalla de Carabobo como el Dia del Ejercito.',
      },
    },
    {
      question: { en: 'Can you visit the Carabobo battlefield?', fr: 'Peut-on visiter le champ de bataille de Carabobo ?', es: 'Se puede visitar el campo de batalla de Carabobo?' },
      answer: {
        en: 'Yes, the Campo de Carabobo is a national historic park located near Valencia in Carabobo state. It features a monument with a triumphal arch, an eternal flame, statues of the heroes, and a museum about the battle.',
        fr: 'Oui, le Campo de Carabobo est un parc historique national situe pres de Valencia dans l\'etat de Carabobo. Il comprend un monument avec un arc de triomphe, une flamme eternelle, des statues des heros et un musee sur la bataille.',
        es: 'Si, el Campo de Carabobo es un parque historico nacional ubicado cerca de Valencia en el estado Carabobo. Cuenta con un monumento con un arco triunfal, una llama eterna, estatuas de los heroes y un museo sobre la batalla.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '\u2694\ufe0f',
};

// ---------------------------------------------------------------------------
// Independence Day — July 5
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 've_independence-day',
  countryCode: 've',
  slugs: { en: 'independence-day', fr: 'jour-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Jour de l'Independance", es: 'Dia de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 7,
  fixedDay: 5,

  descriptions: {
    en: "Venezuela's Independence Day on July 5 commemorates the signing of the Declaration of Independence from Spain in 1811. It is a major national holiday celebrated with patriotic ceremonies, military parades, and cultural events honoring Simon Bolivar's homeland.",
    fr: "Le Jour de l'Independance du Venezuela, le 5 juillet, commemore la signature de la Declaration d'Independance de l'Espagne en 1811. C'est un jour ferie national majeur celebre avec des ceremonies patriotiques, des defiles militaires et des evenements culturels honorant la patrie de Simon Bolivar.",
    es: 'El Dia de la Independencia de Venezuela, el 5 de julio, conmemora la firma de la Declaracion de Independencia de Espana en 1811. Es un importante dia festivo nacional celebrado con ceremonias patrioticas, desfiles militares y eventos culturales que honran la patria de Simon Bolivar.',
  },

  history: {
    en: "On July 5, 1811, the Venezuelan Congress declared independence from Spain, making Venezuela one of the first Spanish American colonies to do so. The declaration was signed by representatives of seven provinces and drafted largely by Juan German Roscio. Venezuela became the first country in Spanish America to formally declare independence.\n\nThe road to independence was long and bloody. Despite the 1811 declaration, the First Republic fell in 1812. It was not until Simon Bolivar led a series of military campaigns, culminating in the Battle of Carabobo in 1821, that independence was truly secured.\n\nToday, July 5 is one of Venezuela's most important national holidays. The day features solemn ceremonies at the National Pantheon in Caracas, where Bolivar's remains rest, as well as military parades, flag-raising ceremonies, and cultural celebrations across the country.",
    fr: "Le 5 juillet 1811, le Congres venezuelien a declare l'independance de l'Espagne, faisant du Venezuela l'une des premieres colonies hispano-americaines a le faire. La declaration a ete signee par les representants de sept provinces et redigee en grande partie par Juan German Roscio. Le Venezuela est devenu le premier pays d'Amerique espagnole a declarer formellement son independance.\n\nLe chemin vers l'independance a ete long et sanglant. Malgre la declaration de 1811, la Premiere Republique est tombee en 1812. Ce n'est que lorsque Simon Bolivar a mene une serie de campagnes militaires, culminant avec la Bataille de Carabobo en 1821, que l'independance a ete veritablement assuree.\n\nAujourd'hui, le 5 juillet est l'un des jours feries nationaux les plus importants du Venezuela. La journee comprend des ceremonies solennelles au Pantheon National de Caracas, ou reposent les restes de Bolivar, ainsi que des defiles militaires, des ceremonies de lever du drapeau et des celebrations culturelles dans tout le pays.",
    es: "El 5 de julio de 1811, el Congreso venezolano declaro la independencia de Espana, haciendo de Venezuela una de las primeras colonias hispanoamericanas en hacerlo. La declaracion fue firmada por representantes de siete provincias y redactada en gran parte por Juan German Roscio. Venezuela se convirtio en el primer pais de Hispanoamerica en declarar formalmente su independencia.\n\nEl camino hacia la independencia fue largo y sangriento. A pesar de la declaracion de 1811, la Primera Republica cayo en 1812. No fue hasta que Simon Bolivar lidero una serie de campanas militares, culminando con la Batalla de Carabobo en 1821, que la independencia fue verdaderamente asegurada.\n\nHoy, el 5 de julio es uno de los dias festivos nacionales mas importantes de Venezuela. El dia incluye ceremonias solemnes en el Panteon Nacional de Caracas, donde descansan los restos de Bolivar, asi como desfiles militares, ceremonias de izamiento de bandera y celebraciones culturales en todo el pais.",
  },

  traditions: {
    en: [
      'Attending ceremonies at the National Pantheon in Caracas where Bolivar rests',
      'Watching military parades and air force flyovers',
      'Participating in flag-raising ceremonies at schools and public buildings',
      'Singing the national anthem at public gatherings',
      'Enjoying patriotic concerts and cultural festivals',
      'Decorating homes and streets with the Venezuelan flag',
    ],
    fr: [
      'Assister aux ceremonies au Pantheon National de Caracas ou repose Bolivar',
      'Regarder les defiles militaires et les survols de l\'armee de l\'air',
      'Participer aux ceremonies de lever du drapeau dans les ecoles et batiments publics',
      'Chanter l\'hymne national lors des rassemblements publics',
      'Profiter de concerts patriotiques et de festivals culturels',
      'Decorer les maisons et les rues avec le drapeau venezuelien',
    ],
    es: [
      'Asistir a ceremonias en el Panteon Nacional de Caracas donde descansa Bolivar',
      'Ver desfiles militares y sobrevuelos de la fuerza aerea',
      'Participar en ceremonias de izamiento de bandera en escuelas y edificios publicos',
      'Cantar el himno nacional en reuniones publicas',
      'Disfrutar de conciertos patrioticos y festivales culturales',
      'Decorar hogares y calles con la bandera venezolana',
    ],
  },

  funFacts: {
    en: [
      'Venezuela was the first Spanish American country to formally declare independence on July 5, 1811.',
      'The original Declaration of Independence is preserved at the National Academy of History in Caracas.',
      'Simon Bolivar, born in Caracas, went on to liberate not only Venezuela but also Colombia, Ecuador, Peru, and Bolivia.',
      'Venezuela\'s national anthem, "Gloria al Bravo Pueblo," was composed during the independence movement in 1810.',
      'The Venezuelan flag\'s eight stars represent the original seven provinces that declared independence, plus Guayana province.',
    ],
    fr: [
      'Le Venezuela a ete le premier pays hispano-americain a declarer formellement son independance le 5 juillet 1811.',
      "L'original de la Declaration d'Independance est conserve a l'Academie Nationale d'Histoire de Caracas.",
      'Simon Bolivar, ne a Caracas, a libere non seulement le Venezuela mais aussi la Colombie, l\'Equateur, le Perou et la Bolivie.',
      "L'hymne national du Venezuela, « Gloria al Bravo Pueblo », a ete compose pendant le mouvement d'independance en 1810.",
      'Les huit etoiles du drapeau venezuelien representent les sept provinces originales qui ont declare l\'independance, plus la province de Guayana.',
    ],
    es: [
      'Venezuela fue el primer pais hispanoamericano en declarar formalmente su independencia el 5 de julio de 1811.',
      'El original de la Declaracion de Independencia se conserva en la Academia Nacional de la Historia en Caracas.',
      'Simon Bolivar, nacido en Caracas, libero no solo a Venezuela sino tambien a Colombia, Ecuador, Peru y Bolivia.',
      'El himno nacional de Venezuela, "Gloria al Bravo Pueblo", fue compuesto durante el movimiento independentista en 1810.',
      'Las ocho estrellas de la bandera venezolana representan las siete provincias originales que declararon la independencia, mas la provincia de Guayana.',
    ],
  },

  planningChecklist: {
    en: [
      'Attend or watch the presidential ceremony at the National Pantheon',
      'Prepare Venezuelan flags and patriotic clothing',
      'Check schedules for local parades and cultural events',
      'Plan a family gathering to celebrate with traditional Venezuelan food',
      'Visit historical sites related to Venezuelan independence',
    ],
    fr: [
      'Assister ou regarder la ceremonie presidentielle au Pantheon National',
      'Preparer les drapeaux venezueliens et des vetements patriotiques',
      'Verifier les horaires des defiles locaux et des evenements culturels',
      'Planifier une reunion familiale pour celebrer avec de la cuisine venezuelienne traditionnelle',
      "Visiter les sites historiques lies a l'independance du Venezuela",
    ],
    es: [
      'Asistir o ver la ceremonia presidencial en el Panteon Nacional',
      'Preparar banderas venezolanas y ropa patriotica',
      'Verificar horarios de desfiles locales y eventos culturales',
      'Planificar una reunion familiar para celebrar con comida venezolana tradicional',
      'Visitar sitios historicos relacionados con la independencia de Venezuela',
    ],
  },

  relatedHolidays: ['ve_battle-of-carabobo', 've_simon-bolivar-day'],

  seo: {
    en: {
      titleTemplate: 'Independence Day {year} Venezuela — Countdown & History',
      descriptionTemplate: 'When is Venezuela Independence Day {year}? Live countdown to July 5, history of the 1811 declaration, and celebration guide.',
      keywords: ['Venezuela Independence Day', 'July 5 Venezuela', 'Dia de la Independencia Venezuela', 'Venezuelan national holiday', 'independence countdown'],
    },
    fr: {
      titleTemplate: "Jour de l'Independance {year} Venezuela — Compte a rebours et histoire",
      descriptionTemplate: "Quand est le Jour de l'Independance du Venezuela {year} ? Compte a rebours, histoire de la declaration de 1811 et guide.",
      keywords: ["Jour de l'Independance Venezuela", '5 juillet Venezuela', 'jours feries Venezuela', 'fete nationale Venezuela', "compte a rebours independance"],
    },
    es: {
      titleTemplate: 'Dia de la Independencia {year} Venezuela — Cuenta regresiva e historia',
      descriptionTemplate: 'Cuando es el Dia de la Independencia de Venezuela {year}? Cuenta regresiva al 5 de julio, historia de la declaracion de 1811 y guia.',
      keywords: ['Dia de la Independencia Venezuela', '5 de julio Venezuela', 'feriados Venezuela', 'fiesta nacional Venezuela', 'cuenta regresiva independencia'],
    },
  },

  faq: [
    {
      question: { en: 'When is Venezuela Independence Day {year}?', fr: "Quand est le Jour de l'Independance du Venezuela {year} ?", es: 'Cuando es el Dia de la Independencia de Venezuela {year}?' },
      answer: {
        en: 'Venezuela Independence Day {year} is on {date}. It is always July 5.',
        fr: "Le Jour de l'Independance du Venezuela {year} est le {date}. C'est toujours le 5 juillet.",
        es: 'El Dia de la Independencia de Venezuela {year} es el {date}. Siempre es el 5 de julio.',
      },
    },
    {
      question: { en: 'Why does Venezuela celebrate independence on July 5?', fr: 'Pourquoi le Venezuela celebre-t-il son independance le 5 juillet ?', es: 'Por que Venezuela celebra la independencia el 5 de julio?' },
      answer: {
        en: 'On July 5, 1811, the Venezuelan Congress officially signed the Declaration of Independence from Spain, making Venezuela the first Spanish American nation to do so.',
        fr: "Le 5 juillet 1811, le Congres venezuelien a officiellement signe la Declaration d'Independance de l'Espagne, faisant du Venezuela la premiere nation hispano-americaine a le faire.",
        es: 'El 5 de julio de 1811, el Congreso venezolano firmo oficialmente la Declaracion de Independencia de Espana, haciendo de Venezuela la primera nacion hispanoamericana en hacerlo.',
      },
    },
    {
      question: { en: 'What is the National Pantheon of Venezuela?', fr: "Qu'est-ce que le Pantheon National du Venezuela ?", es: 'Que es el Panteon Nacional de Venezuela?' },
      answer: {
        en: "The National Pantheon (Panteon Nacional) in Caracas is a mausoleum housing the remains of Simon Bolivar and other national heroes. Originally a church, it was designated as the national pantheon in 1874 and is the site of major Independence Day ceremonies.",
        fr: "Le Pantheon National (Panteon Nacional) a Caracas est un mausolee abritant les restes de Simon Bolivar et d'autres heros nationaux. A l'origine une eglise, il a ete designe comme pantheon national en 1874 et est le lieu des principales ceremonies du Jour de l'Independance.",
        es: 'El Panteon Nacional en Caracas es un mausoleo que alberga los restos de Simon Bolivar y otros heroes nacionales. Originalmente una iglesia, fue designado como panteon nacional en 1874 y es el lugar de las principales ceremonias del Dia de la Independencia.',
      },
    },
    {
      question: { en: 'Is July 5 a public holiday in Venezuela?', fr: 'Le 5 juillet est-il un jour ferie au Venezuela ?', es: 'Es el 5 de julio un dia festivo en Venezuela?' },
      answer: {
        en: 'Yes, July 5 is one of the most important public holidays in Venezuela. Government offices, banks, and most businesses are closed.',
        fr: 'Oui, le 5 juillet est l\'un des jours feries les plus importants au Venezuela. Les bureaux gouvernementaux, les banques et la plupart des commerces sont fermes.',
        es: 'Si, el 5 de julio es uno de los dias festivos mas importantes de Venezuela. Las oficinas gubernamentales, los bancos y la mayoria de los negocios estan cerrados.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '\ud83c\uddfb\ud83c\uddea',
};

// ---------------------------------------------------------------------------
// Simon Bolivar Day — July 24
// ---------------------------------------------------------------------------

const simonBolivarDay: HolidayData = {
  id: 've_simon-bolivar-day',
  countryCode: 've',
  slugs: { en: 'simon-bolivar-day', fr: 'jour-de-simon-bolivar', es: 'dia-de-simon-bolivar' },
  names: { en: 'Simon Bolivar Day', fr: 'Jour de Simon Bolivar', es: 'Dia de Simon Bolivar' },

  dateType: 'fixed',
  fixedMonth: 7,
  fixedDay: 24,

  descriptions: {
    en: "Simon Bolivar Day on July 24 celebrates the birthday of the Liberator, the most revered figure in Venezuelan and South American history. Bolivar led the independence movements of Venezuela, Colombia, Ecuador, Peru, and Bolivia.",
    fr: "Le Jour de Simon Bolivar, le 24 juillet, celebre l'anniversaire du Liberateur, la figure la plus reveree de l'histoire venezuelienne et sud-americaine. Bolivar a mene les mouvements d'independance du Venezuela, de la Colombie, de l'Equateur, du Perou et de la Bolivie.",
    es: 'El Dia de Simon Bolivar, el 24 de julio, celebra el cumpleanos del Libertador, la figura mas reverenciada de la historia venezolana y sudamericana. Bolivar lidero los movimientos de independencia de Venezuela, Colombia, Ecuador, Peru y Bolivia.',
  },

  history: {
    en: "Simon Jose Antonio de la Santisima Trinidad Bolivar Palacios Ponte y Blanco was born on July 24, 1783, in Caracas, Venezuela, to a wealthy Creole family. Orphaned young, he was educated in Europe where he was influenced by Enlightenment ideals. He dedicated his life to liberating South America from Spanish colonial rule.\n\nBolivar's military campaigns between 1813 and 1826 freed an enormous territory stretching from Venezuela to Bolivia. He envisioned a united South America, similar to the United States, but political rivalries and regional differences prevented this dream from being realized. He died on December 17, 1830, in Santa Marta, Colombia.\n\nToday, Bolivar is venerated across Latin America as \"El Libertador\" (The Liberator). His birthday is a national holiday in Venezuela, and his image appears on the country's currency (the bolivar), in countless statues and plazas, and in the names of countries, cities, and institutions throughout the continent.",
    fr: "Simon Jose Antonio de la Santisima Trinidad Bolivar Palacios Ponte y Blanco est ne le 24 juillet 1783 a Caracas, au Venezuela, dans une famille creole aisee. Orphelin tres jeune, il a ete eduque en Europe ou il a ete influence par les ideaux des Lumieres. Il a consacre sa vie a liberer l'Amerique du Sud de la domination coloniale espagnole.\n\nLes campagnes militaires de Bolivar entre 1813 et 1826 ont libere un territoire enorme s'etendant du Venezuela a la Bolivie. Il envisageait une Amerique du Sud unie, similaire aux Etats-Unis, mais les rivalites politiques et les differences regionales ont empeche ce reve de se realiser. Il est mort le 17 decembre 1830 a Santa Marta, en Colombie.\n\nAujourd'hui, Bolivar est venere a travers l'Amerique latine comme « El Libertador » (Le Liberateur). Son anniversaire est un jour ferie national au Venezuela, et son image apparait sur la monnaie du pays (le bolivar), dans d'innombrables statues et places, et dans les noms de pays, de villes et d'institutions a travers le continent.",
    es: "Simon Jose Antonio de la Santisima Trinidad Bolivar Palacios Ponte y Blanco nacio el 24 de julio de 1783 en Caracas, Venezuela, en una familia criolla acomodada. Huerfano desde joven, fue educado en Europa donde fue influenciado por los ideales de la Ilustracion. Dedico su vida a liberar a Sudamerica del dominio colonial espanol.\n\nLas campanas militares de Bolivar entre 1813 y 1826 liberaron un enorme territorio que se extendia desde Venezuela hasta Bolivia. Envisionaba una Sudamerica unida, similar a los Estados Unidos, pero las rivalidades politicas y las diferencias regionales impidieron que este sueno se realizara. Murio el 17 de diciembre de 1830 en Santa Marta, Colombia.\n\nHoy, Bolivar es venerado en toda Latinoamerica como \"El Libertador\". Su cumpleanos es un dia festivo nacional en Venezuela, y su imagen aparece en la moneda del pais (el bolivar), en innumerables estatuas y plazas, y en los nombres de paises, ciudades e instituciones en todo el continente.",
  },

  traditions: {
    en: [
      'Laying wreaths at Bolivar statues and monuments across the country',
      'Attending solemn ceremonies at the National Pantheon in Caracas',
      'Participating in school assemblies with presentations about Bolivar\'s life',
      'Watching special television programming about the Liberator',
      'Visiting Bolivar\'s birthplace museum in Caracas',
    ],
    fr: [
      'Deposer des couronnes aux statues et monuments de Bolivar a travers le pays',
      'Assister aux ceremonies solennelles au Pantheon National de Caracas',
      'Participer aux assemblees scolaires avec des presentations sur la vie de Bolivar',
      'Regarder des programmes televisuels speciaux sur le Liberateur',
      'Visiter le musee de la maison natale de Bolivar a Caracas',
    ],
    es: [
      'Colocar ofrendas florales en estatuas y monumentos de Bolivar en todo el pais',
      'Asistir a ceremonias solemnes en el Panteon Nacional de Caracas',
      'Participar en actos escolares con presentaciones sobre la vida de Bolivar',
      'Ver programacion especial de television sobre el Libertador',
      'Visitar el museo de la casa natal de Bolivar en Caracas',
    ],
  },

  funFacts: {
    en: [
      "Bolivia is named after Simon Bolivar, making him one of the few people to have a country named in his honor.",
      "Bolivar's full name — Simon Jose Antonio de la Santisima Trinidad Bolivar Palacios Ponte y Blanco — is one of the longest names in history.",
      "Venezuela's currency, the bolivar, is named after the Liberator.",
      'Bolivar liberated an area roughly the size of modern Europe during his military campaigns.',
      'There are more statues of Simon Bolivar around the world than of almost any other Latin American figure.',
    ],
    fr: [
      "La Bolivie porte le nom de Simon Bolivar, faisant de lui l'une des rares personnes a avoir un pays nomme en son honneur.",
      "Le nom complet de Bolivar — Simon Jose Antonio de la Santisima Trinidad Bolivar Palacios Ponte y Blanco — est l'un des plus longs de l'histoire.",
      'La monnaie du Venezuela, le bolivar, porte le nom du Liberateur.',
      "Bolivar a libere une zone a peu pres de la taille de l'Europe moderne lors de ses campagnes militaires.",
      'Il y a plus de statues de Simon Bolivar dans le monde que de presque tout autre personnage latino-americain.',
    ],
    es: [
      'Bolivia lleva el nombre de Simon Bolivar, haciendolo una de las pocas personas en tener un pais nombrado en su honor.',
      'El nombre completo de Bolivar — Simon Jose Antonio de la Santisima Trinidad Bolivar Palacios Ponte y Blanco — es uno de los mas largos de la historia.',
      'La moneda de Venezuela, el bolivar, lleva el nombre del Libertador.',
      'Bolivar libero un area aproximadamente del tamano de la Europa moderna durante sus campanas militares.',
      'Hay mas estatuas de Simon Bolivar en el mundo que de casi cualquier otra figura latinoamericana.',
    ],
  },

  planningChecklist: {
    en: [
      'Visit the Bolivar birthplace museum in Caracas if possible',
      'Attend wreath-laying ceremonies at local Bolivar monuments',
      'Watch for special cultural events and exhibitions about Bolivar',
      'Share stories about the Liberator with children and family',
      'Display Venezuelan flags and Bolivarian symbols',
    ],
    fr: [
      'Visiter le musee de la maison natale de Bolivar a Caracas si possible',
      'Assister aux ceremonies de depot de couronnes aux monuments locaux de Bolivar',
      'Surveiller les evenements culturels speciaux et expositions sur Bolivar',
      'Partager des histoires sur le Liberateur avec les enfants et la famille',
      'Afficher les drapeaux venezueliens et les symboles bolivariens',
    ],
    es: [
      'Visitar el museo de la casa natal de Bolivar en Caracas si es posible',
      'Asistir a ceremonias de ofrenda floral en monumentos locales de Bolivar',
      'Estar atento a eventos culturales especiales y exposiciones sobre Bolivar',
      'Compartir historias sobre el Libertador con ninos y familia',
      'Exhibir banderas venezolanas y simbolos bolivarianos',
    ],
  },

  relatedHolidays: ['ve_independence-day', 've_battle-of-carabobo'],

  seo: {
    en: {
      titleTemplate: 'Simon Bolivar Day {year} Venezuela — Countdown & Guide',
      descriptionTemplate: "When is Simon Bolivar Day {year}? Live countdown to July 24, biography of the Liberator, and celebration guide.",
      keywords: ['Simon Bolivar Day', 'July 24 Venezuela', 'El Libertador birthday', 'Bolivar Venezuela', 'Venezuelan holidays'],
    },
    fr: {
      titleTemplate: 'Jour de Simon Bolivar {year} Venezuela — Compte a rebours et guide',
      descriptionTemplate: 'Quand est le Jour de Simon Bolivar {year} ? Compte a rebours, biographie du Liberateur et guide de celebration.',
      keywords: ['Jour de Simon Bolivar', '24 juillet Venezuela', 'anniversaire du Liberateur', 'Bolivar Venezuela', 'jours feries Venezuela'],
    },
    es: {
      titleTemplate: 'Dia de Simon Bolivar {year} Venezuela — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Dia de Simon Bolivar {year}? Cuenta regresiva al 24 de julio, biografia del Libertador y guia de celebracion.',
      keywords: ['Dia de Simon Bolivar', '24 de julio Venezuela', 'cumpleanos del Libertador', 'Bolivar Venezuela', 'feriados Venezuela'],
    },
  },

  faq: [
    {
      question: { en: 'When is Simon Bolivar Day {year}?', fr: 'Quand est le Jour de Simon Bolivar {year} ?', es: 'Cuando es el Dia de Simon Bolivar {year}?' },
      answer: {
        en: 'Simon Bolivar Day {year} is on {date}. It is always July 24, the birthday of the Liberator.',
        fr: "Le Jour de Simon Bolivar {year} est le {date}. C'est toujours le 24 juillet, anniversaire du Liberateur.",
        es: 'El Dia de Simon Bolivar {year} es el {date}. Siempre es el 24 de julio, cumpleanos del Libertador.',
      },
    },
    {
      question: { en: 'Who was Simon Bolivar?', fr: 'Qui etait Simon Bolivar ?', es: 'Quien fue Simon Bolivar?' },
      answer: {
        en: 'Simon Bolivar (1783-1830) was a Venezuelan military and political leader who led the independence movements across northern South America. Known as "El Libertador," he freed Venezuela, Colombia, Ecuador, Peru, and Bolivia from Spanish rule.',
        fr: "Simon Bolivar (1783-1830) etait un leader militaire et politique venezuelien qui a mene les mouvements d'independance a travers le nord de l'Amerique du Sud. Connu sous le nom d'« El Libertador », il a libere le Venezuela, la Colombie, l'Equateur, le Perou et la Bolivie de la domination espagnole.",
        es: 'Simon Bolivar (1783-1830) fue un lider militar y politico venezolano que dirigio los movimientos de independencia en el norte de Sudamerica. Conocido como "El Libertador", libero a Venezuela, Colombia, Ecuador, Peru y Bolivia del dominio espanol.',
      },
    },
    {
      question: { en: 'Why is Bolivia named after Bolivar?', fr: 'Pourquoi la Bolivie porte-t-elle le nom de Bolivar ?', es: 'Por que Bolivia lleva el nombre de Bolivar?' },
      answer: {
        en: "Bolivia was named in honor of Simon Bolivar after gaining independence in 1825. The country's liberators chose the name to honor the man whose military campaigns made their freedom possible.",
        fr: "La Bolivie a ete nommee en l'honneur de Simon Bolivar apres son independance en 1825. Les liberateurs du pays ont choisi ce nom pour honorer l'homme dont les campagnes militaires ont rendu leur liberte possible.",
        es: 'Bolivia fue nombrada en honor a Simon Bolivar despues de obtener su independencia en 1825. Los libertadores del pais eligieron el nombre para honrar al hombre cuyas campanas militares hicieron posible su libertad.',
      },
    },
    {
      question: { en: 'Is Simon Bolivar Day a public holiday?', fr: 'Le Jour de Simon Bolivar est-il un jour ferie ?', es: 'Es el Dia de Simon Bolivar un dia festivo?' },
      answer: {
        en: 'Yes, July 24 is an official public holiday in Venezuela. It is also celebrated in other Bolivarian nations including Colombia, Ecuador, Peru, and Bolivia.',
        fr: 'Oui, le 24 juillet est un jour ferie officiel au Venezuela. Il est egalement celebre dans d\'autres nations bolivariennes dont la Colombie, l\'Equateur, le Perou et la Bolivie.',
        es: 'Si, el 24 de julio es un dia festivo oficial en Venezuela. Tambien se celebra en otras naciones bolivarianas incluyendo Colombia, Ecuador, Peru y Bolivia.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '\ud83c\udfdb\ufe0f',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 've_christmas',
  countryCode: 've',
  slugs: { en: 'christmas', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noel', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: 'Christmas Day on December 25 is one of the most cherished holidays in Venezuela, celebrated with hallacas, gaitas music, patinatas (early morning roller skating), and Misa de Gallo (Midnight Mass). Venezuelan Christmas traditions are deeply rooted in family, faith, and music.',
    fr: "Le jour de Noel, le 25 decembre, est l'un des jours feries les plus cheris au Venezuela, celebre avec des hallacas, de la musique de gaitas, des patinatas (patinage a roulettes matinal) et la Misa de Gallo (messe de minuit). Les traditions de Noel venezueliennes sont profondement enracinees dans la famille, la foi et la musique.",
    es: 'El dia de Navidad, el 25 de diciembre, es uno de los dias festivos mas queridos en Venezuela, celebrado con hallacas, musica de gaitas, patinatas (patinaje matutino en patines) y Misa de Gallo. Las tradiciones navidenas venezolanas estan profundamente arraigadas en la familia, la fe y la musica.',
  },

  history: {
    en: "Christmas in Venezuela is a season that begins in early December and extends through Epiphany on January 6. The celebration blends Catholic traditions brought by Spanish colonists with Venezuelan customs that have developed over centuries. The preparation of hallacas — corn dough stuffed with a savory stew and wrapped in banana leaves — is a beloved family ritual that brings generations together in the kitchen.\n\nGaitas, a traditional music genre from the Zulia region, fills the airwaves during the Christmas season. These lively songs, performed with drums, cuatro (small guitar), and maracas, are as essential to Venezuelan Christmas as carols are elsewhere. The tradition of patinatas, where people roller skate through the streets in the early morning hours before Christmas Mass, is a uniquely Venezuelan custom.\n\nMisa de Gallo (Midnight Mass) on Christmas Eve is attended by millions of Venezuelans, followed by a family dinner featuring hallacas, pan de jamon, pernil, and ensalada de gallina. Gift-giving traditionally occurs on January 6 (Epiphany), though Santa Claus has become increasingly popular.",
    fr: "Noel au Venezuela est une saison qui commence debut decembre et s'etend jusqu'a l'Epiphanie le 6 janvier. La celebration melange les traditions catholiques apportees par les colons espagnols avec les coutumes venezueliennes developpees au fil des siecles. La preparation des hallacas — pate de mais farci d'un ragout savoureux et enveloppe dans des feuilles de bananier — est un rituel familial bien-aime qui reunit les generations dans la cuisine.\n\nLes gaitas, un genre musical traditionnel de la region de Zulia, remplissent les ondes pendant la saison de Noel. Ces chansons animees, interpretees avec des tambours, un cuatro (petite guitare) et des maracas, sont aussi essentielles au Noel venezuelien que les chants de Noel ailleurs. La tradition des patinatas, ou les gens font du patin a roulettes dans les rues aux premieres heures du matin avant la messe de Noel, est une coutume uniquement venezuelienne.\n\nLa Misa de Gallo (messe de minuit) la veille de Noel est suivie par des millions de Venezueliens, suivie d'un diner familial avec des hallacas, du pan de jamon, du pernil et de l'ensalada de gallina. Les cadeaux sont traditionnellement offerts le 6 janvier (Epiphanie), bien que le Pere Noel soit devenu de plus en plus populaire.",
    es: "La Navidad en Venezuela es una temporada que comienza a principios de diciembre y se extiende hasta la Epifania el 6 de enero. La celebracion mezcla tradiciones catolicas traidas por los colonos espanoles con costumbres venezolanas desarrolladas durante siglos. La preparacion de hallacas — masa de maiz rellena de un guiso sabroso y envuelta en hojas de platano — es un querido ritual familiar que reune a las generaciones en la cocina.\n\nLas gaitas, un genero musical tradicional de la region del Zulia, llenan las ondas radiales durante la temporada navidena. Estas animadas canciones, interpretadas con tambores, cuatro y maracas, son tan esenciales para la Navidad venezolana como los villancicos en otros lugares. La tradicion de las patinatas, donde la gente patina en patines por las calles en las primeras horas de la manana antes de la misa de Navidad, es una costumbre unicamente venezolana.\n\nLa Misa de Gallo en Nochebuena es atendida por millones de venezolanos, seguida de una cena familiar con hallacas, pan de jamon, pernil y ensalada de gallina. Los regalos se dan tradicionalmente el 6 de enero (Epifania), aunque Papa Noel se ha vuelto cada vez mas popular.",
  },

  traditions: {
    en: [
      'Preparing and sharing hallacas — the iconic Venezuelan Christmas dish made as a family',
      'Listening and dancing to gaitas, the traditional Christmas music from Zulia',
      'Attending Misa de Gallo (Midnight Mass) on Christmas Eve',
      'Participating in patinatas — roller skating through the streets early on Christmas morning',
      'Enjoying a Christmas Eve dinner with hallacas, pan de jamon, pernil, and ensalada de gallina',
      'Setting up a pesebre (nativity scene) in homes and public spaces',
      'Exchanging gifts, traditionally on Epiphany (January 6) from the Three Kings',
    ],
    fr: [
      'Preparer et partager des hallacas — le plat de Noel venezuelien emblematique prepare en famille',
      'Ecouter et danser sur les gaitas, la musique de Noel traditionnelle du Zulia',
      'Assister a la Misa de Gallo (messe de minuit) la veille de Noel',
      'Participer aux patinatas — faire du patin a roulettes dans les rues tot le matin de Noel',
      'Deguster un diner de la veille de Noel avec hallacas, pan de jamon, pernil et ensalada de gallina',
      'Installer un pesebre (creche) dans les maisons et les espaces publics',
      'Echanger des cadeaux, traditionnellement a l\'Epiphanie (6 janvier) des Rois Mages',
    ],
    es: [
      'Preparar y compartir hallacas — el plato navideno venezolano iconico hecho en familia',
      'Escuchar y bailar gaitas, la musica navidena tradicional del Zulia',
      'Asistir a la Misa de Gallo en Nochebuena',
      'Participar en patinatas — patinar en patines por las calles temprano en la manana de Navidad',
      'Disfrutar de una cena de Nochebuena con hallacas, pan de jamon, pernil y ensalada de gallina',
      'Montar un pesebre (nacimiento) en hogares y espacios publicos',
      'Intercambiar regalos, tradicionalmente en Epifania (6 de enero) de los Reyes Magos',
    ],
  },

  funFacts: {
    en: [
      'In Caracas, streets are closed to traffic early on Christmas morning so people can roller skate to Mass — a tradition called patinatas.',
      'Hallacas recipes are closely guarded family secrets, with each family claiming theirs is the best in Venezuela.',
      'Gaitas music originated in the Zulia region and becomes so ubiquitous in December that it is impossible to avoid hearing it.',
      'Pan de jamon (ham bread) was invented in Caracas bakeries in the early 1900s and has become a Christmas staple across the country.',
      'Venezuelan Christmas celebrations can last from December through January 6, making it one of the longest holiday seasons in the Americas.',
    ],
    fr: [
      'A Caracas, les rues sont fermees a la circulation tot le matin de Noel pour que les gens puissent patiner jusqu\'a la messe — une tradition appelee patinatas.',
      'Les recettes de hallacas sont des secrets de famille jalousement gardes, chaque famille pretendant que les siennes sont les meilleures du Venezuela.',
      'La musique de gaitas est originaire de la region du Zulia et devient si omnipresente en decembre qu\'il est impossible de ne pas l\'entendre.',
      'Le pan de jamon (pain au jambon) a ete invente dans les boulangeries de Caracas au debut des annees 1900 et est devenu un incontournable de Noel dans tout le pays.',
      'Les celebrations de Noel venezueliennes peuvent durer de decembre au 6 janvier, ce qui en fait l\'une des plus longues saisons de fetes des Ameriques.',
    ],
    es: [
      'En Caracas, las calles se cierran al trafico temprano en la manana de Navidad para que la gente pueda patinar hasta la misa — una tradicion llamada patinatas.',
      'Las recetas de hallacas son secretos familiares celosamente guardados, con cada familia afirmando que las suyas son las mejores de Venezuela.',
      'La musica de gaitas se origino en la region del Zulia y se vuelve tan omnipresente en diciembre que es imposible evitar escucharla.',
      'El pan de jamon fue inventado en las panaderias de Caracas a principios de los 1900 y se ha convertido en un clasico navideno en todo el pais.',
      'Las celebraciones navidenas venezolanas pueden durar desde diciembre hasta el 6 de enero, haciendola una de las temporadas festivas mas largas de las Americas.',
    ],
  },

  planningChecklist: {
    en: [
      'Gather ingredients for hallacas well in advance — banana leaves, corn flour, and stew ingredients',
      'Buy pan de jamon and pernil from trusted bakeries and butchers',
      'Set up your pesebre (nativity scene) in early December',
      'Plan your Misa de Gallo attendance and Christmas Eve dinner',
      'Prepare roller skates for the patinata tradition on Christmas morning',
    ],
    fr: [
      'Rassembler les ingredients pour les hallacas bien a l\'avance — feuilles de bananier, farine de mais et ingredients du ragout',
      'Acheter du pan de jamon et du pernil chez des boulangeries et boucheries de confiance',
      'Installer votre pesebre (creche) debut decembre',
      'Planifier votre assistance a la Misa de Gallo et le diner de la veille de Noel',
      'Preparer les patins a roulettes pour la tradition des patinatas le matin de Noel',
    ],
    es: [
      'Reunir los ingredientes para las hallacas con mucha anticipacion — hojas de platano, harina de maiz e ingredientes del guiso',
      'Comprar pan de jamon y pernil en panaderias y carnicerias de confianza',
      'Montar el pesebre a principios de diciembre',
      'Planificar la asistencia a la Misa de Gallo y la cena de Nochebuena',
      'Preparar los patines para la tradicion de patinatas en la manana de Navidad',
    ],
  },

  relatedHolidays: ['ve_new-years-day', 've_simon-bolivar-day'],

  seo: {
    en: {
      titleTemplate: 'Christmas {year} Venezuela — Countdown & Traditions',
      descriptionTemplate: 'How many days until Christmas {year} in Venezuela? Live countdown, hallacas, gaitas, patinatas, and Venezuelan Christmas traditions.',
      keywords: ['Christmas Venezuela', 'Venezuelan Christmas traditions', 'hallacas', 'gaitas', 'Navidad Venezuela'],
    },
    fr: {
      titleTemplate: 'Noel {year} Venezuela — Compte a rebours et traditions',
      descriptionTemplate: 'Combien de jours avant Noel {year} au Venezuela ? Compte a rebours, hallacas, gaitas, patinatas et traditions de Noel venezueliennes.',
      keywords: ['Noel Venezuela', 'traditions de Noel Venezuela', 'hallacas', 'gaitas', 'Navidad Venezuela'],
    },
    es: {
      titleTemplate: 'Navidad {year} Venezuela — Cuenta regresiva y tradiciones',
      descriptionTemplate: 'Cuantos dias faltan para Navidad {year} en Venezuela? Cuenta regresiva, hallacas, gaitas, patinatas y tradiciones navidenas venezolanas.',
      keywords: ['Navidad Venezuela', 'tradiciones navidenas Venezuela', 'hallacas', 'gaitas', 'Navidad venezolana'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in Venezuela?', fr: 'Quand est Noel {year} au Venezuela ?', es: 'Cuando es Navidad {year} en Venezuela?' },
      answer: {
        en: 'Christmas {year} in Venezuela is on {date}. It is always December 25.',
        fr: 'Noel {year} au Venezuela est le {date}. C\'est toujours le 25 decembre.',
        es: 'La Navidad {year} en Venezuela es el {date}. Siempre es el 25 de diciembre.',
      },
    },
    {
      question: { en: 'What are hallacas?', fr: 'Que sont les hallacas ?', es: 'Que son las hallacas?' },
      answer: {
        en: 'Hallacas are the iconic Venezuelan Christmas dish — corn dough (masa) stuffed with a savory stew of beef, pork, chicken, olives, raisins, and capers, all wrapped in banana leaves and boiled. Making hallacas is a beloved family tradition that brings everyone together in the kitchen.',
        fr: 'Les hallacas sont le plat de Noel venezuelien emblematique — pate de mais (masa) farci d\'un ragout savoureux de boeuf, porc, poulet, olives, raisins secs et capres, le tout enveloppe dans des feuilles de bananier et bouilli. La preparation des hallacas est une tradition familiale bien-aimee qui reunit tout le monde dans la cuisine.',
        es: 'Las hallacas son el plato navideno venezolano emblematico — masa de maiz rellena de un guiso sabroso de res, cerdo, pollo, aceitunas, pasas y alcaparras, todo envuelto en hojas de platano y hervido. Hacer hallacas es una querida tradicion familiar que reune a todos en la cocina.',
      },
    },
    {
      question: { en: 'What are patinatas?', fr: 'Que sont les patinatas ?', es: 'Que son las patinatas?' },
      answer: {
        en: 'Patinatas are a uniquely Venezuelan Christmas tradition where people roller skate through the streets early on Christmas morning, often on their way to Misa de Gallo (Midnight Mass) or early morning Mass. In Caracas, streets are sometimes closed to traffic to allow for this festive tradition.',
        fr: 'Les patinatas sont une tradition de Noel uniquement venezuelienne ou les gens font du patin a roulettes dans les rues tot le matin de Noel, souvent en route vers la Misa de Gallo (messe de minuit) ou la messe du matin. A Caracas, les rues sont parfois fermees a la circulation pour permettre cette tradition festive.',
        es: 'Las patinatas son una tradicion navidena unicamente venezolana donde la gente patina en patines por las calles temprano en la manana de Navidad, a menudo camino a la Misa de Gallo o la misa matutina. En Caracas, las calles a veces se cierran al trafico para permitir esta tradicion festiva.',
      },
    },
    {
      question: { en: 'What are gaitas?', fr: 'Que sont les gaitas ?', es: 'Que son las gaitas?' },
      answer: {
        en: 'Gaitas are traditional Venezuelan Christmas songs originating from the Zulia region (Maracaibo). They feature lively rhythms played with drums, cuatro (a small four-stringed guitar), maracas, and furro. Gaitas fill radio stations, malls, and homes throughout December and are an essential part of the Venezuelan Christmas experience.',
        fr: 'Les gaitas sont des chansons de Noel venezueliennes traditionnelles originaires de la region du Zulia (Maracaibo). Elles presentent des rythmes animes joues avec des tambours, un cuatro (petite guitare a quatre cordes), des maracas et un furro. Les gaitas remplissent les stations de radio, les centres commerciaux et les maisons tout au long du mois de decembre et sont une partie essentielle de l\'experience de Noel venezuelienne.',
        es: 'Las gaitas son canciones navidenas venezolanas tradicionales originarias de la region del Zulia (Maracaibo). Presentan ritmos animados interpretados con tambores, cuatro, maracas y furro. Las gaitas llenan las estaciones de radio, los centros comerciales y los hogares durante todo diciembre y son una parte esencial de la experiencia navidena venezolana.',
      },
    },
  ],

  colorTheme: 'christmas',
  icon: '\ud83c\udf84',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const veHolidays: HolidayData[] = [
  newYearsDay,
  carnival,
  battleOfCarabobo,
  independenceDay,
  simonBolivarDay,
  christmas,
];

export default veHolidays;
