/**
 * Spain holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getGoodFriday } from './_shared-dates';

// ---------------------------------------------------------------------------
// Three Kings Day (Epiphany) — January 6
// ---------------------------------------------------------------------------

const threeKingsDay: HolidayData = {
  id: 'es_three-kings-day',
  countryCode: 'es',
  slugs: { en: 'three-kings-day', fr: 'jour-des-rois', es: 'dia-de-reyes' },
  names: { en: 'Three Kings Day (Epiphany)', fr: "Jour des Rois (Épiphanie)", es: 'Día de Reyes (Epifanía)' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 6,

  descriptions: {
    en: 'Three Kings Day on January 6 is the main gift-giving holiday in Spain, even more important than Christmas for presents. The Cabalgata de Reyes parade on the evening of January 5 is one of the most beloved traditions in the country.',
    fr: "Le Jour des Rois, le 6 janvier, est la principale fête des cadeaux en Espagne, encore plus importante que Noël pour les présents. La Cabalgata de Reyes, le défilé du soir du 5 janvier, est l'une des traditions les plus appréciées du pays.",
    es: 'El Día de Reyes, el 6 de enero, es la principal fiesta de regalos en España, incluso más importante que la Navidad para los obsequios. La Cabalgata de Reyes de la tarde del 5 de enero es una de las tradiciones más queridas del país.',
  },

  history: {
    en: "Three Kings Day, or Epiphany, celebrates the visit of the three Magi — Melchior, Caspar, and Balthasar — to the infant Jesus, bearing gifts of gold, frankincense, and myrrh. In Spain, this feast has been the traditional gift-giving day for centuries, long predating the modern influence of Santa Claus on Christmas Day.\n\nThe Cabalgata de Reyes (Three Kings Parade) tradition dates back to 1866, when the first recorded parade took place in Alcoy, Alicante. Today, every city and town in Spain holds its own Cabalgata on the evening of January 5, with elaborate floats, costumed figures, and the three Kings throwing sweets to children lining the streets.\n\nWhile Christmas Day gift-giving has grown in recent decades due to global cultural influence, Día de Reyes remains the most emotionally significant gift day for most Spanish families. Children leave their shoes out on the night of January 5 for the Kings to fill with presents, and traditionally leave water and food for the Kings' camels.",
    fr: "Le Jour des Rois, ou Épiphanie, célèbre la visite des trois Rois mages — Melchior, Gaspard et Balthazar — à l'enfant Jésus, portant des présents d'or, d'encens et de myrrhe. En Espagne, cette fête est le jour traditionnel des cadeaux depuis des siècles, bien avant l'influence moderne du Père Noël le jour de Noël.\n\nLa tradition de la Cabalgata de Reyes remonte à 1866, lorsque le premier défilé connu eut lieu à Alcoy, Alicante. Aujourd'hui, chaque ville et village d'Espagne organise sa propre Cabalgata le soir du 5 janvier, avec des chars élaborés, des personnages costumés et les trois Rois lançant des bonbons aux enfants le long des rues.\n\nBien que les cadeaux de Noël aient pris de l'ampleur ces dernières décennies en raison de l'influence culturelle mondiale, le Día de Reyes reste le jour de cadeaux le plus chargé d'émotion pour la plupart des familles espagnoles. Les enfants laissent leurs chaussures le soir du 5 janvier pour que les Rois les remplissent de cadeaux, et laissent traditionnellement de l'eau et de la nourriture pour les chameaux des Rois.",
    es: "El Día de Reyes, o Epifanía, celebra la visita de los tres Reyes Magos — Melchor, Gaspar y Baltasar — al niño Jesús, portando regalos de oro, incienso y mirra. En España, esta fiesta ha sido el día tradicional de los regalos durante siglos, mucho antes de la influencia moderna de Papá Noel en el día de Navidad.\n\nLa tradición de la Cabalgata de Reyes se remonta a 1866, cuando el primer desfile documentado tuvo lugar en Alcoy, Alicante. Hoy en día, cada ciudad y pueblo de España celebra su propia Cabalgata la tarde del 5 de enero, con carrozas elaboradas, figuras disfrazadas y los tres Reyes lanzando caramelos a los niños que se alinean en las calles.\n\nAunque los regalos de Navidad han crecido en las últimas décadas por la influencia cultural global, el Día de Reyes sigue siendo el día de regalos con mayor carga emocional para la mayoría de las familias españolas. Los niños dejan sus zapatos la noche del 5 de enero para que los Reyes los llenen de regalos, y tradicionalmente dejan agua y comida para los camellos de los Reyes.",
  },

  traditions: {
    en: [
      'Watching the Cabalgata de Reyes parade on the evening of January 5',
      'Children leaving shoes out on the night of January 5 for the Kings to fill with gifts',
      'Leaving water and food for the Three Kings\' camels',
      'Eating Roscón de Reyes — a ring-shaped cake with a hidden figurine and bean inside',
      'Family gift-opening on the morning of January 6',
      'Naughty children receiving carbón dulce (sweet coal) instead of gifts',
      'Writing letters to the Three Kings requesting gifts (Carta a los Reyes Magos)',
    ],
    fr: [
      'Regarder la Cabalgata de Reyes le soir du 5 janvier',
      'Les enfants laissent leurs chaussures le soir du 5 janvier pour que les Rois les remplissent de cadeaux',
      'Laisser de l\'eau et de la nourriture pour les chameaux des Rois mages',
      'Manger le Roscón de Reyes — un gâteau en forme de couronne avec une figurine et une fève cachées à l\'intérieur',
      'Ouverture des cadeaux en famille le matin du 6 janvier',
      'Les enfants désobéissants reçoivent du carbón dulce (charbon sucré) au lieu de cadeaux',
      'Écrire des lettres aux Rois mages pour demander des cadeaux (Carta a los Reyes Magos)',
    ],
    es: [
      'Ver la Cabalgata de Reyes la tarde del 5 de enero',
      'Los niños dejan sus zapatos la noche del 5 de enero para que los Reyes los llenen de regalos',
      'Dejar agua y comida para los camellos de los Reyes Magos',
      'Comer el Roscón de Reyes — un bizcocho en forma de rosca con una figurita y un haba escondidas dentro',
      'Apertura de regalos en familia la mañana del 6 de enero',
      'Los niños traviesos reciben carbón dulce en lugar de regalos',
      'Escribir la carta a los Reyes Magos pidiendo regalos',
    ],
  },

  funFacts: {
    en: [
      'The Cabalgata de Reyes in Alcoy (Alicante) is the oldest in Spain, dating from 1866.',
      'Whoever finds the figurine in the Roscón de Reyes is crowned king or queen for the day, while whoever finds the bean must pay for the cake.',
      'Spanish children traditionally receive their main Christmas gifts on January 6, not December 25 — though this is slowly changing.',
      'The Madrid Cabalgata de Reyes is one of the largest in the world, with elaborate floats and tons of sweets thrown to the crowds.',
      'Carbón dulce (sweet coal) given to naughty children is actually a candy made from sugar and food colouring shaped to look like lumps of coal.',
    ],
    fr: [
      'La Cabalgata de Reyes d\'Alcoy (Alicante) est la plus ancienne d\'Espagne, datant de 1866.',
      'Celui qui trouve la figurine dans le Roscón de Reyes est couronné roi ou reine du jour, tandis que celui qui trouve la fève doit payer le gâteau.',
      'Les enfants espagnols reçoivent traditionnellement leurs principaux cadeaux de Noël le 6 janvier, et non le 25 décembre — bien que cela change progressivement.',
      'La Cabalgata de Reyes de Madrid est l\'une des plus grandes au monde, avec des chars élaborés et des tonnes de bonbons lancés à la foule.',
      'Le carbón dulce (charbon sucré) donné aux enfants désobéissants est en réalité un bonbon fait de sucre et de colorant alimentaire, façonné pour ressembler à des morceaux de charbon.',
    ],
    es: [
      'La Cabalgata de Reyes de Alcoy (Alicante) es la más antigua de España, datando de 1866.',
      'Quien encuentra la figurita en el Roscón de Reyes es coronado rey o reina por un día, mientras que quien encuentra el haba debe pagar el roscón.',
      'Los niños españoles reciben tradicionalmente sus principales regalos navideños el 6 de enero, no el 25 de diciembre — aunque esto está cambiando poco a poco.',
      'La Cabalgata de Reyes de Madrid es una de las más grandes del mundo, con carrozas elaboradas y toneladas de caramelos lanzados al público.',
      'El carbón dulce que se da a los niños traviesos es en realidad un caramelo hecho de azúcar y colorante alimentario con forma de trozos de carbón.',
    ],
  },

  planningChecklist: {
    en: [
      'Arrive early to secure a good spot along the Cabalgata parade route on January 5',
      'Buy a Roscón de Reyes from a local bakery — order in advance for the best ones',
      'Write and post the Carta a los Reyes Magos with your children in December',
      'Prepare shoes and a tray of water and food for the camels on the night of January 5',
      'Stock up on carbón dulce as a humorous gift for friends and family',
    ],
    fr: [
      'Arriver tôt pour avoir une bonne place le long du parcours de la Cabalgata le 5 janvier',
      'Acheter un Roscón de Reyes dans une boulangerie locale — commander à l\'avance pour les meilleurs',
      'Écrire et poster la Carta a los Reyes Magos avec vos enfants en décembre',
      'Préparer les chaussures et un plateau d\'eau et de nourriture pour les chameaux le soir du 5 janvier',
      'Faire le plein de carbón dulce comme cadeau humoristique pour les proches',
    ],
    es: [
      'Llegar temprano para asegurar un buen sitio a lo largo del recorrido de la Cabalgata el 5 de enero',
      'Comprar un Roscón de Reyes en una pastelería local — encargar con antelación para los mejores',
      'Escribir y enviar la Carta a los Reyes Magos con los niños en diciembre',
      'Preparar los zapatos y una bandeja con agua y comida para los camellos la noche del 5 de enero',
      'Aprovisionarse de carbón dulce como regalo gracioso para amigos y familia',
    ],
  },

  relatedHolidays: ['es_good-friday', 'es_constitution-day'],

  seo: {
    en: {
      titleTemplate: 'Three Kings Day {year} Spain — Epiphany Countdown & Guide',
      descriptionTemplate: 'When is Three Kings Day {year} in Spain? Countdown to January 6, Cabalgata de Reyes, Roscón, and Día de Reyes traditions.',
      keywords: ['Three Kings Day Spain', 'Día de Reyes', 'Epiphany Spain', 'Cabalgata de Reyes', 'Roscón de Reyes'],
    },
    fr: {
      titleTemplate: 'Jour des Rois {year} Espagne — Compte à rebours de l\'Épiphanie',
      descriptionTemplate: 'Quand est le Jour des Rois {year} en Espagne ? Compte à rebours, Cabalgata de Reyes, Roscón et traditions du Día de Reyes.',
      keywords: ['Jour des Rois Espagne', 'Día de Reyes', 'Épiphanie Espagne', 'Cabalgata de Reyes', 'Roscón de Reyes'],
    },
    es: {
      titleTemplate: 'Día de Reyes {year} España — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Día de Reyes {year}? Cuenta regresiva al 6 de enero, Cabalgata de Reyes, Roscón y tradiciones.',
      keywords: ['Día de Reyes', 'Reyes Magos España', 'Cabalgata de Reyes', 'Roscón de Reyes', 'Epifanía España'],
    },
  },

  faq: [
    {
      question: { en: 'When is Three Kings Day {year} in Spain?', fr: 'Quand est le Jour des Rois {year} en Espagne ?', es: '¿Cuándo es el Día de Reyes {year} en España?' },
      answer: {
        en: 'Three Kings Day {year} in Spain is on {date} ({dayOfWeek}). It is always January 6 and is a national public holiday.',
        fr: 'Le Jour des Rois {year} en Espagne tombe le {date} ({dayOfWeek}). C\'est toujours le 6 janvier et c\'est un jour férié national.',
        es: 'El Día de Reyes {year} en España es el {date} ({dayOfWeek}). Es siempre el 6 de enero y es festivo nacional.',
      },
    },
    {
      question: { en: 'What is the Cabalgata de Reyes?', fr: 'Qu\'est-ce que la Cabalgata de Reyes ?', es: '¿Qué es la Cabalgata de Reyes?' },
      answer: {
        en: 'The Cabalgata de Reyes is the Three Kings Parade held on the evening of January 5 in every city and town across Spain. The Three Kings ride on elaborate floats through the streets, throwing sweets to children. The oldest Cabalgata takes place in Alcoy, Alicante, since 1866.',
        fr: 'La Cabalgata de Reyes est le défilé des Rois mages qui a lieu le soir du 5 janvier dans chaque ville et village d\'Espagne. Les trois Rois défilent sur des chars élaborés en lançant des bonbons aux enfants. La plus ancienne Cabalgata a lieu à Alcoy, Alicante, depuis 1866.',
        es: 'La Cabalgata de Reyes es el desfile de los Reyes Magos que se celebra la tarde del 5 de enero en todas las ciudades y pueblos de España. Los tres Reyes desfilan en carrozas elaboradas por las calles, lanzando caramelos a los niños. La Cabalgata más antigua se celebra en Alcoy, Alicante, desde 1866.',
      },
    },
    {
      question: { en: 'What is the Roscón de Reyes?', fr: 'Qu\'est-ce que le Roscón de Reyes ?', es: '¿Qué es el Roscón de Reyes?' },
      answer: {
        en: 'The Roscón de Reyes is a traditional ring-shaped sweet bread decorated with candied fruits, eaten on January 6. Inside are hidden a small figurine and a dried bean. Whoever finds the figurine is crowned king or queen, and whoever finds the bean must buy the next Roscón.',
        fr: 'Le Roscón de Reyes est un pain sucré traditionnel en forme de couronne décoré de fruits confits, mangé le 6 janvier. À l\'intérieur se cachent une petite figurine et une fève. Celui qui trouve la figurine est couronné roi ou reine, et celui qui trouve la fève doit acheter le prochain Roscón.',
        es: 'El Roscón de Reyes es un dulce tradicional en forma de rosca decorado con frutas escarchadas que se come el 6 de enero. En su interior se esconden una figurita y un haba seca. Quien encuentra la figurita es coronado rey o reina, y quien encuentra el haba debe pagar el siguiente Roscón.',
      },
    },
    {
      question: { en: 'Is Three Kings Day more important than Christmas in Spain?', fr: 'Le Jour des Rois est-il plus important que Noël en Espagne ?', es: '¿Es el Día de Reyes más importante que la Navidad en España?' },
      answer: {
        en: 'Traditionally, yes — Three Kings Day has been the primary gift-giving occasion in Spain for centuries. While Christmas Day gift-giving has grown due to global influence, most Spanish families still consider January 6 the main day for presents, especially for children.',
        fr: 'Traditionnellement, oui — le Jour des Rois est la principale occasion de cadeaux en Espagne depuis des siècles. Bien que les cadeaux de Noël aient pris de l\'importance en raison de l\'influence mondiale, la plupart des familles espagnoles considèrent toujours le 6 janvier comme le jour principal des cadeaux, surtout pour les enfants.',
        es: 'Tradicionalmente, sí — el Día de Reyes ha sido la principal ocasión para los regalos en España durante siglos. Aunque los regalos de Navidad han crecido por la influencia global, la mayoría de las familias españolas siguen considerando el 6 de enero como el día principal de los regalos, especialmente para los niños.',
      },
    },
  ],

  colorTheme: 'gold-purple',
  icon: '👑',
};

// ---------------------------------------------------------------------------
// Good Friday — Viernes Santo
// ---------------------------------------------------------------------------

const goodFriday: HolidayData = {
  id: 'es_good-friday',
  countryCode: 'es',
  slugs: { en: 'good-friday', fr: 'vendredi-saint', es: 'viernes-santo' },
  names: { en: 'Good Friday', fr: 'Vendredi Saint', es: 'Viernes Santo' },

  dateType: 'calculated',
  calculateDate: getGoodFriday,

  descriptions: {
    en: 'Good Friday (Viernes Santo) is a national holiday in Spain, marking the crucifixion of Jesus Christ. It is the climax of Semana Santa (Holy Week), famous for its extraordinary processions with brotherhood floats, especially in Seville and Malaga.',
    fr: "Le Vendredi Saint (Viernes Santo) est un jour férié national en Espagne, commémorant la crucifixion de Jésus-Christ. C'est le point culminant de la Semana Santa (Semaine Sainte), célèbre pour ses processions extraordinaires avec des chars de confréries, en particulier à Séville et Malaga.",
    es: 'El Viernes Santo es un festivo nacional en España que conmemora la crucifixión de Jesucristo. Es el punto culminante de la Semana Santa, famosa por sus extraordinarias procesiones con pasos de hermandades, especialmente en Sevilla y Málaga.',
  },

  history: {
    en: "Semana Santa has been celebrated in Spain since the Middle Ages and is one of the country's most deeply rooted cultural and religious traditions. The processions, organised by hermandades (brotherhoods) and cofradías (confraternities), carry elaborate pasos — large floats bearing religious sculptures depicting scenes of the Passion of Christ.\n\nSeville's Semana Santa is the most famous, with over 60 brotherhoods processing through the city from Palm Sunday through Easter Sunday. The costaleros (float bearers) carry pasos weighing up to 5,000 kilograms on their necks and shoulders. The haunting sound of saetas — improvised flamenco-style hymns sung from balconies — adds to the deeply emotional atmosphere.\n\nMalaga, Granada, Valladolid, and Zamora also host world-renowned Semana Santa celebrations. In 2023, Seville's Semana Santa was estimated to attract over 1.5 million visitors.",
    fr: "La Semana Santa est célébrée en Espagne depuis le Moyen Âge et constitue l'une des traditions culturelles et religieuses les plus profondément enracinées du pays. Les processions, organisées par des hermandades (confréries), portent des pasos élaborés — de grands chars portant des sculptures religieuses représentant des scènes de la Passion du Christ.\n\nLa Semana Santa de Séville est la plus célèbre, avec plus de 60 confréries processionnant dans la ville du Dimanche des Rameaux au Dimanche de Pâques. Les costaleros (porteurs de chars) portent des pasos pesant jusqu'à 5 000 kilogrammes sur leur nuque et leurs épaules. Le son envoûtant des saetas — des hymnes improvisés de style flamenco chantés depuis les balcons — ajoute à l'atmosphère profondément émouvante.\n\nMalaga, Grenade, Valladolid et Zamora accueillent également des célébrations de Semana Santa de renommée mondiale. En 2023, la Semana Santa de Séville a attiré environ 1,5 million de visiteurs.",
    es: "La Semana Santa se celebra en España desde la Edad Media y es una de las tradiciones culturales y religiosas más arraigadas del país. Las procesiones, organizadas por hermandades y cofradías, portan elaborados pasos — grandes estructuras con esculturas religiosas que representan escenas de la Pasión de Cristo.\n\nLa Semana Santa de Sevilla es la más famosa, con más de 60 hermandades procesionando por la ciudad desde el Domingo de Ramos hasta el Domingo de Resurrección. Los costaleros portan pasos que pueden pesar hasta 5.000 kilogramos sobre su nuca y hombros. El sonido sobrecogedor de las saetas — cantes improvisados de estilo flamenco entonados desde los balcones — añade una atmósfera profundamente emotiva.\n\nMálaga, Granada, Valladolid y Zamora también acogen celebraciones de Semana Santa de renombre mundial. En 2023, se estimó que la Semana Santa de Sevilla atrajo a más de 1,5 millones de visitantes.",
  },

  traditions: {
    en: [
      'Watching Semana Santa processions with elaborate pasos (brotherhood floats)',
      'Listening to saetas — improvised flamenco hymns sung from balconies as processions pass',
      'Eating torrijas (Spanish-style French toast soaked in milk, honey, or wine)',
      'Nazarenos (penitents) walking in pointed hoods and robes in procession',
      'Attending church services and Stations of the Cross',
      'Eating bacalao (salt cod) dishes, as meat is traditionally avoided',
      'Visiting Seville, Malaga, or Granada for their world-famous processions',
    ],
    fr: [
      'Regarder les processions de Semana Santa avec les pasos élaborés (chars de confréries)',
      'Écouter les saetas — hymnes flamenco improvisés chantés depuis les balcons au passage des processions',
      'Manger des torrijas (pain perdu espagnol trempé dans du lait, du miel ou du vin)',
      'Les nazarenos (pénitents) défilant en cagoules pointues et robes dans les processions',
      'Assister aux offices religieux et au chemin de croix',
      'Manger des plats de bacalao (morue salée), la viande étant traditionnellement évitée',
      'Visiter Séville, Malaga ou Grenade pour leurs processions de renommée mondiale',
    ],
    es: [
      'Ver las procesiones de Semana Santa con los elaborados pasos de hermandades',
      'Escuchar las saetas — cantes flamencos improvisados entonados desde los balcones al paso de las procesiones',
      'Comer torrijas (rebanadas de pan empapadas en leche y fritas, con miel o azúcar)',
      'Los nazarenos (penitentes) desfilando con capirotes y túnicas en procesión',
      'Asistir a oficios religiosos y al Vía Crucis',
      'Comer platos de bacalao, ya que tradicionalmente no se come carne',
      'Visitar Sevilla, Málaga o Granada por sus procesiones de fama mundial',
    ],
  },

  funFacts: {
    en: [
      'Seville\'s Semana Santa features over 60 brotherhoods and some pasos weigh more than 5,000 kg, carried by up to 48 costaleros.',
      'The pointed hoods worn by nazarenos date back to the Spanish Inquisition and have no connection to other groups — they represent penance and humility.',
      'Saetas are spontaneous flamenco-style songs that bystanders sing from balconies to the religious statues as they pass — they can bring entire processions to a standstill.',
      'The Madrugá (early morning hours of Good Friday) in Seville is considered the most emotional and intense period of the entire Semana Santa.',
      'Torrijas, the traditional Semana Santa sweet, date back to at least the 15th century in Spain.',
    ],
    fr: [
      'La Semana Santa de Séville compte plus de 60 confréries et certains pasos pèsent plus de 5 000 kg, portés par jusqu\'à 48 costaleros.',
      'Les cagoules pointues portées par les nazarenos remontent à l\'Inquisition espagnole et n\'ont aucun lien avec d\'autres groupes — elles représentent la pénitence et l\'humilité.',
      'Les saetas sont des chants spontanés de style flamenco que les spectateurs entonnent depuis les balcons aux statues religieuses qui passent — elles peuvent immobiliser des processions entières.',
      'La Madrugá (les premières heures du Vendredi Saint) à Séville est considérée comme le moment le plus émouvant et intense de toute la Semana Santa.',
      'Les torrijas, le dessert traditionnel de Semana Santa, remontent au moins au XVe siècle en Espagne.',
    ],
    es: [
      'La Semana Santa de Sevilla cuenta con más de 60 hermandades y algunos pasos pesan más de 5.000 kg, portados por hasta 48 costaleros.',
      'Los capirotes que llevan los nazarenos se remontan a la Inquisición española y no tienen ninguna relación con otros grupos — representan la penitencia y la humildad.',
      'Las saetas son cantes flamencos espontáneos que los espectadores entonan desde los balcones a las imágenes religiosas a su paso — pueden detener procesiones enteras.',
      'La Madrugá (las primeras horas del Viernes Santo) en Sevilla se considera el momento más emotivo e intenso de toda la Semana Santa.',
      'Las torrijas, el dulce tradicional de Semana Santa, se remontan al menos al siglo XV en España.',
    ],
  },

  planningChecklist: {
    en: [
      'Book Seville or Malaga accommodation months in advance — Semana Santa is peak season',
      'Get a programme of procession routes and times for your city',
      'Try torrijas and bacalao dishes at local restaurants during Holy Week',
      'Arrive early to secure viewing spots along major procession routes',
      'Bring comfortable shoes — you will be standing and walking for hours',
    ],
    fr: [
      'Réserver l\'hébergement à Séville ou Malaga des mois à l\'avance — la Semana Santa est la haute saison',
      'Se procurer un programme des itinéraires et horaires des processions pour votre ville',
      'Goûter les torrijas et les plats de bacalao dans les restaurants locaux pendant la Semaine Sainte',
      'Arriver tôt pour trouver de bonnes places le long des principaux itinéraires de procession',
      'Porter des chaussures confortables — vous serez debout et marcherez pendant des heures',
    ],
    es: [
      'Reservar alojamiento en Sevilla o Málaga con meses de antelación — la Semana Santa es temporada alta',
      'Conseguir un programa con los itinerarios y horarios de las procesiones de tu ciudad',
      'Probar las torrijas y los platos de bacalao en los restaurantes locales durante la Semana Santa',
      'Llegar temprano para asegurar buen sitio a lo largo de los recorridos principales de las procesiones',
      'Llevar calzado cómodo — estarás de pie y caminando durante horas',
    ],
  },

  relatedHolidays: ['es_three-kings-day', 'es_assumption'],

  seo: {
    en: {
      titleTemplate: 'Good Friday {year} Spain — Semana Santa Countdown & Guide',
      descriptionTemplate: 'When is Good Friday {year} in Spain? Countdown, Semana Santa processions, Seville Holy Week, and Viernes Santo traditions.',
      keywords: ['Good Friday Spain', 'Viernes Santo', 'Semana Santa Spain', 'Seville Holy Week', 'Spanish Easter'],
    },
    fr: {
      titleTemplate: 'Vendredi Saint {year} Espagne — Compte à rebours de la Semana Santa',
      descriptionTemplate: 'Quand est le Vendredi Saint {year} en Espagne ? Compte à rebours, processions de Semana Santa, Séville et traditions.',
      keywords: ['Vendredi Saint Espagne', 'Viernes Santo', 'Semana Santa Espagne', 'Semaine Sainte Séville', 'Pâques Espagne'],
    },
    es: {
      titleTemplate: 'Viernes Santo {year} España — Cuenta regresiva de Semana Santa',
      descriptionTemplate: '¿Cuándo es el Viernes Santo {year}? Cuenta regresiva, procesiones de Semana Santa, Sevilla y tradiciones.',
      keywords: ['Viernes Santo España', 'Semana Santa', 'procesiones Semana Santa', 'Semana Santa Sevilla', 'Pascua España'],
    },
  },

  faq: [
    {
      question: { en: 'When is Good Friday {year} in Spain?', fr: 'Quand est le Vendredi Saint {year} en Espagne ?', es: '¿Cuándo es el Viernes Santo {year} en España?' },
      answer: {
        en: 'Good Friday {year} in Spain falls on {date} ({dayOfWeek}). It moves each year as it depends on the date of Easter.',
        fr: 'Le Vendredi Saint {year} en Espagne tombe le {date} ({dayOfWeek}). La date change chaque année car elle dépend de la date de Pâques.',
        es: 'El Viernes Santo {year} en España cae el {date} ({dayOfWeek}). La fecha cambia cada año porque depende de la fecha de Pascua.',
      },
    },
    {
      question: { en: 'What is Semana Santa in Spain?', fr: 'Qu\'est-ce que la Semana Santa en Espagne ?', es: '¿Qué es la Semana Santa en España?' },
      answer: {
        en: 'Semana Santa (Holy Week) is the week leading up to Easter, from Palm Sunday to Easter Sunday. In Spain, it features elaborate religious processions organised by brotherhoods, with huge floats (pasos) carrying religious sculptures through the streets. Seville, Malaga, and Granada host the most famous celebrations.',
        fr: 'La Semana Santa (Semaine Sainte) est la semaine précédant Pâques, du Dimanche des Rameaux au Dimanche de Pâques. En Espagne, elle est marquée par des processions religieuses élaborées organisées par des confréries, avec d\'immenses chars (pasos) portant des sculptures religieuses dans les rues. Séville, Malaga et Grenade accueillent les célébrations les plus célèbres.',
        es: 'La Semana Santa es la semana previa a la Pascua, desde el Domingo de Ramos hasta el Domingo de Resurrección. En España se caracteriza por las elaboradas procesiones religiosas organizadas por hermandades, con enormes pasos que portan esculturas religiosas por las calles. Sevilla, Málaga y Granada acogen las celebraciones más famosas.',
      },
    },
    {
      question: { en: 'Where is the best Semana Santa in Spain?', fr: 'Où est la meilleure Semana Santa en Espagne ?', es: '¿Dónde es la mejor Semana Santa de España?' },
      answer: {
        en: 'Seville is widely considered to have the most spectacular Semana Santa, with over 60 brotherhoods. Malaga is famous for its costaleros freeing prisoners, and Granada\'s processions against the backdrop of the Alhambra are stunning. Valladolid and Zamora in Castilla y León are renowned for their austere, deeply moving processions.',
        fr: 'Séville est largement considérée comme ayant la Semana Santa la plus spectaculaire, avec plus de 60 confréries. Malaga est célèbre pour ses costaleros libérant des prisonniers, et les processions de Grenade avec l\'Alhambra en toile de fond sont impressionnantes. Valladolid et Zamora en Castille-et-León sont réputées pour leurs processions austères et profondément émouvantes.',
        es: 'Sevilla es considerada ampliamente como la que tiene la Semana Santa más espectacular, con más de 60 hermandades. Málaga es famosa por la liberación de presos por parte de los costaleros, y las procesiones de Granada con la Alhambra de fondo son impresionantes. Valladolid y Zamora en Castilla y León son conocidas por sus procesiones austeras y profundamente conmovedoras.',
      },
    },
    {
      question: { en: 'What are saetas?', fr: 'Que sont les saetas ?', es: '¿Qué son las saetas?' },
      answer: {
        en: 'Saetas are improvised flamenco-style religious songs sung from balconies or street corners as Semana Santa processions pass by. The singer addresses the religious statue directly, and the emotional intensity can bring an entire procession to a halt. They are most associated with Andalusia, particularly Seville.',
        fr: 'Les saetas sont des chants religieux improvisés de style flamenco, entonnés depuis les balcons ou les coins de rue au passage des processions de Semana Santa. Le chanteur s\'adresse directement à la statue religieuse, et l\'intensité émotionnelle peut arrêter une procession entière. Elles sont principalement associées à l\'Andalousie, notamment Séville.',
        es: 'Las saetas son cantes religiosos improvisados de estilo flamenco entonados desde balcones o esquinas al paso de las procesiones de Semana Santa. El cantaor se dirige directamente a la imagen religiosa, y la intensidad emocional puede detener una procesión entera. Están principalmente asociadas con Andalucía, especialmente Sevilla.',
      },
    },
  ],

  colorTheme: 'purple-black',
  icon: '✝️',
};

// ---------------------------------------------------------------------------
// Labour Day — May 1
// ---------------------------------------------------------------------------

const labourDay: HolidayData = {
  id: 'es_labour-day',
  countryCode: 'es',
  slugs: { en: 'labour-day', fr: 'fete-du-travail', es: 'dia-del-trabajo' },
  names: { en: 'Labour Day', fr: 'Fête du Travail', es: 'Día del Trabajo' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 1,

  descriptions: {
    en: "Labour Day on May 1 is a national public holiday in Spain, known as Día del Trabajo or Día del Trabajador. It honours workers' rights and is marked by union marches, demonstrations, and rallies across the country.",
    fr: "La Fête du Travail, le 1er mai, est un jour férié national en Espagne, connue sous le nom de Día del Trabajo ou Día del Trabajador. Elle honore les droits des travailleurs et est marquée par des marches syndicales, des manifestations et des rassemblements dans tout le pays.",
    es: 'El Día del Trabajo, el 1 de mayo, es un festivo nacional en España, también conocido como Día del Trabajador. Honra los derechos de los trabajadores y se celebra con marchas sindicales, manifestaciones y actos reivindicativos en todo el país.',
  },

  history: {
    en: "Labour Day in Spain has its roots in the international workers' movement of the late 19th century. May 1 was chosen to commemorate the Haymarket affair of 1886 in Chicago, where a labour demonstration turned deadly. Spain first observed May 1 as a workers' holiday in 1890.\n\nDuring the Franco dictatorship (1939-1975), May Day celebrations were suppressed and replaced with regime-controlled events. After the transition to democracy, Labour Day was restored as a free expression of workers' rights. The first truly free May Day demonstrations took place in 1977.\n\nToday, Spain's major trade unions — Comisiones Obreras (CCOO) and Unión General de Trabajadores (UGT) — organise large marches and rallies in Madrid, Barcelona, and other major cities. The day also serves as an informal start to the spring outdoor season.",
    fr: "La Fête du Travail en Espagne a ses racines dans le mouvement ouvrier international de la fin du XIXe siècle. Le 1er mai a été choisi pour commémorer l'affaire de Haymarket de 1886 à Chicago, où une manifestation ouvrière a tourné au drame. L'Espagne a observé le 1er mai comme fête des travailleurs pour la première fois en 1890.\n\nPendant la dictature de Franco (1939-1975), les célébrations du 1er mai furent supprimées et remplacées par des événements contrôlés par le régime. Après la transition vers la démocratie, la Fête du Travail fut restaurée comme libre expression des droits des travailleurs. Les premières manifestations véritablement libres du 1er mai eurent lieu en 1977.\n\nAujourd'hui, les principaux syndicats espagnols — Comisiones Obreras (CCOO) et Unión General de Trabajadores (UGT) — organisent de grandes marches et rassemblements à Madrid, Barcelone et d'autres grandes villes.",
    es: "El Día del Trabajo en España tiene sus raíces en el movimiento obrero internacional de finales del siglo XIX. El 1 de mayo fue elegido para conmemorar los sucesos de Haymarket de 1886 en Chicago, donde una manifestación obrera terminó en tragedia. España celebró el 1 de mayo como fiesta de los trabajadores por primera vez en 1890.\n\nDurante la dictadura franquista (1939-1975), las celebraciones del 1 de mayo fueron suprimidas y sustituidas por actos controlados por el régimen. Tras la transición a la democracia, el Día del Trabajo fue restaurado como libre expresión de los derechos de los trabajadores. Las primeras manifestaciones verdaderamente libres del 1 de mayo tuvieron lugar en 1977.\n\nHoy en día, los principales sindicatos españoles — Comisiones Obreras (CCOO) y Unión General de Trabajadores (UGT) — organizan grandes marchas y actos en Madrid, Barcelona y otras grandes ciudades. El día también marca informalmente el inicio de la temporada de actividades al aire libre en primavera.",
  },

  traditions: {
    en: [
      'Attending union-organised marches and demonstrations in city centres',
      'Political rallies and speeches by trade union leaders',
      'Family outings and picnics to enjoy the spring weather',
      'Day trips to the countryside or coast',
      'Community festivals and neighbourhood gatherings',
    ],
    fr: [
      'Participer aux marches et manifestations organisées par les syndicats dans les centres-villes',
      'Meetings politiques et discours des dirigeants syndicaux',
      'Sorties en famille et pique-niques pour profiter du temps printanier',
      'Excursions à la campagne ou à la côte',
      'Fêtes de quartier et rassemblements communautaires',
    ],
    es: [
      'Asistir a las marchas y manifestaciones organizadas por los sindicatos en los centros urbanos',
      'Actos políticos y discursos de los líderes sindicales',
      'Salidas familiares y pícnics para disfrutar del buen tiempo primaveral',
      'Excursiones al campo o a la costa',
      'Fiestas populares y encuentros vecinales',
    ],
  },

  funFacts: {
    en: [
      'Spain\'s first May Day celebrations in 1890 saw over 20,000 workers march in Barcelona.',
      'During the Franco era, the regime replaced May Day with the "Fiesta de la Exaltación del Trabajo" on July 18, the anniversary of the military uprising.',
      'The 1977 May Day in Spain was the first free celebration after 38 years of dictatorship, drawing massive crowds.',
      'May 1 is a public holiday in most European countries, but not in the United States, where Labor Day is in September.',
      'Many Spanish families use the May 1 holiday as an opportunity for the first beach day of the season in warmer regions.',
    ],
    fr: [
      'Les premières célébrations du 1er mai en Espagne en 1890 virent plus de 20 000 ouvriers défiler à Barcelone.',
      'Sous Franco, le régime remplaça le 1er mai par la « Fiesta de la Exaltación del Trabajo » le 18 juillet, anniversaire du soulèvement militaire.',
      'Le 1er mai 1977 en Espagne fut la première célébration libre après 38 ans de dictature, attirant des foules immenses.',
      'Le 1er mai est férié dans la plupart des pays européens, mais pas aux États-Unis, où le Labor Day est en septembre.',
      'De nombreuses familles espagnoles profitent du 1er mai pour la première journée à la plage de la saison dans les régions les plus chaudes.',
    ],
    es: [
      'Las primeras celebraciones del 1 de mayo en España en 1890 reunieron a más de 20.000 trabajadores marchando en Barcelona.',
      'Durante la era franquista, el régimen sustituyó el 1 de mayo por la «Fiesta de la Exaltación del Trabajo» el 18 de julio, aniversario del alzamiento militar.',
      'El 1 de mayo de 1977 en España fue la primera celebración libre tras 38 años de dictadura, congregando a multitudes masivas.',
      'El 1 de mayo es festivo en la mayoría de los países europeos, pero no en Estados Unidos, donde el Labor Day se celebra en septiembre.',
      'Muchas familias españolas aprovechan el festivo del 1 de mayo para el primer día de playa de la temporada en las regiones más cálidas.',
    ],
  },

  planningChecklist: {
    en: [
      'Check if local union marches will affect traffic and transport in your area',
      'Plan outdoor activities — May weather in Spain is typically warm and pleasant',
      'Book restaurant tables in advance if dining out, as many venues fill up on holidays',
      'Consider a day trip to the coast if you live in a coastal region',
      'Check shop opening hours as most retail is closed on May 1',
    ],
    fr: [
      'Vérifier si les marches syndicales affecteront la circulation et les transports dans votre zone',
      'Planifier des activités de plein air — le temps de mai en Espagne est généralement chaud et agréable',
      'Réserver les tables de restaurant à l\'avance, car de nombreux établissements se remplissent les jours fériés',
      'Envisager une excursion à la côte si vous vivez dans une région côtière',
      'Vérifier les horaires des magasins car la plupart des commerces sont fermés le 1er mai',
    ],
    es: [
      'Comprobar si las marchas sindicales afectarán al tráfico y al transporte en tu zona',
      'Planificar actividades al aire libre — el tiempo de mayo en España es generalmente cálido y agradable',
      'Reservar mesa en restaurantes con antelación, ya que muchos se llenan en los festivos',
      'Considerar una excursión a la costa si vives en una región costera',
      'Comprobar los horarios de las tiendas ya que la mayoría de los comercios cierran el 1 de mayo',
    ],
  },

  relatedHolidays: ['es_national-day', 'es_constitution-day'],

  seo: {
    en: {
      titleTemplate: 'Labour Day {year} Spain — May 1 Countdown & Guide',
      descriptionTemplate: 'When is Labour Day {year} in Spain? Countdown to May 1, Día del Trabajo history, union marches, and public holiday info.',
      keywords: ['Labour Day Spain', 'Día del Trabajo', 'May 1 Spain', 'Spanish public holidays', 'workers day Spain'],
    },
    fr: {
      titleTemplate: 'Fête du Travail {year} Espagne — Compte à rebours du 1er mai',
      descriptionTemplate: 'Quand est la Fête du Travail {year} en Espagne ? Compte à rebours, histoire du Día del Trabajo, marches syndicales et jour férié.',
      keywords: ['Fête du Travail Espagne', 'Día del Trabajo', '1er mai Espagne', 'jours fériés Espagne', 'fête des travailleurs'],
    },
    es: {
      titleTemplate: 'Día del Trabajo {year} España — Cuenta regresiva del 1 de mayo',
      descriptionTemplate: '¿Cuándo es el Día del Trabajo {year}? Cuenta regresiva, historia, marchas sindicales e información del festivo.',
      keywords: ['Día del Trabajo España', '1 de mayo', 'festivo 1 de mayo', 'festivos España', 'Día del Trabajador'],
    },
  },

  faq: [
    {
      question: { en: 'When is Labour Day {year} in Spain?', fr: 'Quand est la Fête du Travail {year} en Espagne ?', es: '¿Cuándo es el Día del Trabajo {year} en España?' },
      answer: {
        en: 'Labour Day {year} in Spain is on {date} ({dayOfWeek}). It is always May 1 and is a national public holiday.',
        fr: 'La Fête du Travail {year} en Espagne tombe le {date} ({dayOfWeek}). C\'est toujours le 1er mai et c\'est un jour férié national.',
        es: 'El Día del Trabajo {year} en España es el {date} ({dayOfWeek}). Es siempre el 1 de mayo y es festivo nacional.',
      },
    },
    {
      question: { en: 'Is Labour Day a public holiday in Spain?', fr: 'La Fête du Travail est-elle un jour férié en Espagne ?', es: '¿Es festivo el Día del Trabajo en España?' },
      answer: {
        en: 'Yes, May 1 is one of Spain\'s national public holidays. Banks, government offices, and most businesses are closed. Some shops and restaurants in tourist areas may remain open.',
        fr: 'Oui, le 1er mai est l\'un des jours fériés nationaux de l\'Espagne. Les banques, les administrations et la plupart des entreprises sont fermées. Certains commerces et restaurants dans les zones touristiques peuvent rester ouverts.',
        es: 'Sí, el 1 de mayo es uno de los festivos nacionales de España. Los bancos, oficinas públicas y la mayoría de los negocios están cerrados. Algunos comercios y restaurantes en zonas turísticas pueden permanecer abiertos.',
      },
    },
    {
      question: { en: 'What happens on May 1 in Spain?', fr: 'Que se passe-t-il le 1er mai en Espagne ?', es: '¿Qué ocurre el 1 de mayo en España?' },
      answer: {
        en: 'On May 1, major trade unions organise marches and demonstrations in cities across Spain demanding workers\' rights. Political parties also hold rallies. Many families use the day off for outdoor leisure, picnics, and day trips.',
        fr: 'Le 1er mai, les grands syndicats organisent des marches et des manifestations dans les villes de toute l\'Espagne pour revendiquer les droits des travailleurs. Les partis politiques tiennent également des meetings. De nombreuses familles profitent du jour de congé pour des loisirs en plein air, des pique-niques et des excursions.',
        es: 'El 1 de mayo, los principales sindicatos organizan marchas y manifestaciones en ciudades de toda España reivindicando los derechos de los trabajadores. Los partidos políticos también celebran actos. Muchas familias aprovechan el día libre para actividades al aire libre, pícnics y excursiones.',
      },
    },
    {
      question: { en: 'Are shops open on Labour Day in Spain?', fr: 'Les magasins sont-ils ouverts le 1er mai en Espagne ?', es: '¿Abren las tiendas el Día del Trabajo en España?' },
      answer: {
        en: 'Most shops and businesses are closed on May 1 in Spain. However, restaurants, cafés, and shops in major tourist areas typically remain open. Supermarkets and shopping centres are generally closed.',
        fr: 'La plupart des magasins et entreprises sont fermés le 1er mai en Espagne. Cependant, les restaurants, cafés et commerces dans les grandes zones touristiques restent généralement ouverts. Les supermarchés et centres commerciaux sont généralement fermés.',
        es: 'La mayoría de las tiendas y negocios están cerrados el 1 de mayo en España. Sin embargo, los restaurantes, cafeterías y comercios en las principales zonas turísticas suelen permanecer abiertos. Los supermercados y centros comerciales están generalmente cerrados.',
      },
    },
  ],

  colorTheme: 'red-white',
  icon: '⚒️',
};

// ---------------------------------------------------------------------------
// Assumption of Mary — August 15
// ---------------------------------------------------------------------------

const assumption: HolidayData = {
  id: 'es_assumption',
  countryCode: 'es',
  slugs: { en: 'assumption-of-mary', fr: 'assomption', es: 'asuncion-de-la-virgen' },
  names: { en: 'Assumption of Mary', fr: 'Assomption de la Vierge', es: 'Asunción de la Virgen' },

  dateType: 'fixed',
  fixedMonth: 8,
  fixedDay: 15,

  descriptions: {
    en: "The Assumption of Mary on August 15 is a national holiday in Spain, known as the Asunción de la Virgen. It coincides with local fiestas across the country, as many towns celebrate their patron saint around this date.",
    fr: "L'Assomption de la Vierge, le 15 août, est un jour férié national en Espagne, connue sous le nom d'Asunción de la Virgen. Elle coïncide avec les fêtes locales à travers le pays, car de nombreuses villes célèbrent leur saint patron autour de cette date.",
    es: 'La Asunción de la Virgen, el 15 de agosto, es un festivo nacional en España. Coincide con las fiestas locales en todo el país, ya que muchos pueblos y ciudades celebran a su santo patrón en torno a esta fecha.',
  },

  history: {
    en: "The Assumption of Mary celebrates the belief that the Virgin Mary was taken up body and soul into heaven at the end of her earthly life. While celebrated since the early centuries of Christianity, it was officially defined as Catholic dogma by Pope Pius XII in 1950.\n\nIn Spain, August 15 has deep cultural significance beyond its religious meaning. The date falls in the heart of the Spanish summer holiday season, and many towns hold their annual fiestas patronales (patron saint festivals) around this time. Some of the most famous local celebrations coincide with or are near this date.\n\nThe day is particularly important in coastal and island communities, where processions carry statues of the Virgin Mary to the sea. In cities like Elche (Alicante), the Misteri d'Elx — a medieval liturgical drama about the Assumption — has been performed since the 15th century and is a UNESCO Masterpiece of Oral and Intangible Heritage.",
    fr: "L'Assomption de la Vierge célèbre la croyance selon laquelle la Vierge Marie fut élevée corps et âme au ciel à la fin de sa vie terrestre. Célébrée depuis les premiers siècles du christianisme, elle fut officiellement définie comme dogme catholique par le pape Pie XII en 1950.\n\nEn Espagne, le 15 août revêt une profonde signification culturelle au-delà de sa dimension religieuse. La date tombe au cœur de la saison estivale espagnole, et de nombreuses villes tiennent leurs fiestas patronales (fêtes patronales) annuelles autour de cette période.\n\nLe jour est particulièrement important dans les communautés côtières et insulaires, où des processions portent les statues de la Vierge Marie jusqu'à la mer. À Elche (Alicante), le Misteri d'Elx — un drame liturgique médiéval sur l'Assomption — est représenté depuis le XVe siècle et est un chef-d'œuvre du patrimoine oral et immatériel de l'UNESCO.",
    es: "La Asunción de la Virgen celebra la creencia de que la Virgen María fue llevada en cuerpo y alma al cielo al final de su vida terrenal. Aunque se celebra desde los primeros siglos del cristianismo, fue definida oficialmente como dogma católico por el papa Pío XII en 1950.\n\nEn España, el 15 de agosto tiene un profundo significado cultural más allá de su dimensión religiosa. La fecha cae en plena temporada de vacaciones de verano, y muchos pueblos y ciudades celebran sus fiestas patronales anuales en torno a esta fecha. Algunas de las celebraciones locales más famosas coinciden con esta fecha o se celebran cerca de ella.\n\nEl día es especialmente importante en las comunidades costeras e insulares, donde las procesiones llevan las imágenes de la Virgen María hasta el mar. En Elche (Alicante), el Misteri d'Elx — un drama litúrgico medieval sobre la Asunción — se representa desde el siglo XV y es Obra Maestra del Patrimonio Oral e Inmaterial de la Humanidad por la UNESCO.",
  },

  traditions: {
    en: [
      'Attending local fiestas patronales (patron saint festivals) across Spain',
      'Religious processions carrying statues of the Virgin Mary through streets',
      'Maritime processions where the Virgin is carried to the sea in coastal towns',
      'Watching the Misteri d\'Elx in Elche, a medieval drama about the Assumption',
      'Attending bullfights, concerts, and fireworks at local summer fiestas',
      'Family beach holidays and seaside gatherings',
    ],
    fr: [
      'Participer aux fiestas patronales (fêtes patronales) locales à travers l\'Espagne',
      'Processions religieuses portant les statues de la Vierge Marie dans les rues',
      'Processions maritimes où la Vierge est portée jusqu\'à la mer dans les villes côtières',
      'Assister au Misteri d\'Elx à Elche, un drame médiéval sur l\'Assomption',
      'Assister aux corridas, concerts et feux d\'artifice lors des fêtes d\'été locales',
      'Vacances familiales à la plage et rassemblements en bord de mer',
    ],
    es: [
      'Asistir a las fiestas patronales locales en toda España',
      'Procesiones religiosas portando imágenes de la Virgen María por las calles',
      'Procesiones marítimas donde la Virgen es llevada hasta el mar en pueblos costeros',
      'Ver el Misteri d\'Elx en Elche, un drama medieval sobre la Asunción',
      'Asistir a corridas de toros, conciertos y fuegos artificiales en las fiestas de verano locales',
      'Vacaciones familiares en la playa y encuentros junto al mar',
    ],
  },

  funFacts: {
    en: [
      'The Misteri d\'Elx has been performed continuously since the 15th century and was declared a UNESCO Masterpiece in 2001.',
      'August 15 is the single biggest day for local fiestas across Spain — more towns celebrate their patron saint on this date than any other.',
      'In many coastal towns, the Virgen del Carmen statue is taken out to sea on a decorated boat as part of the celebration.',
      'The week around August 15 is called "puente de agosto" and is the peak holiday period in Spain — cities like Madrid and Barcelona feel noticeably emptier.',
      'Spain has the most public holidays in the European Union, with 14 national and regional holidays combined.',
    ],
    fr: [
      'Le Misteri d\'Elx est représenté sans interruption depuis le XVe siècle et a été déclaré chef-d\'œuvre de l\'UNESCO en 2001.',
      'Le 15 août est le jour le plus important pour les fêtes locales en Espagne — plus de villes célèbrent leur saint patron à cette date qu\'à toute autre.',
      'Dans de nombreuses villes côtières, la statue de la Virgen del Carmen est emmenée en mer sur un bateau décoré dans le cadre de la célébration.',
      'La semaine autour du 15 août est appelée « puente de agosto » et constitue la période de vacances la plus intense en Espagne — des villes comme Madrid et Barcelone semblent nettement plus vides.',
      'L\'Espagne a le plus grand nombre de jours fériés de l\'Union européenne, avec 14 fêtes nationales et régionales combinées.',
    ],
    es: [
      'El Misteri d\'Elx se representa de forma ininterrumpida desde el siglo XV y fue declarado Obra Maestra por la UNESCO en 2001.',
      'El 15 de agosto es el día con más fiestas patronales de toda España — más pueblos celebran a su santo patrón en esta fecha que en ninguna otra.',
      'En muchos pueblos costeros, la imagen de la Virgen del Carmen se saca al mar en un barco engalanado como parte de la celebración.',
      'La semana en torno al 15 de agosto se llama «puente de agosto» y es el período vacacional más intenso de España — ciudades como Madrid y Barcelona se quedan notablemente más vacías.',
      'España tiene el mayor número de festivos de la Unión Europea, con 14 fiestas nacionales y autonómicas combinadas.',
    ],
  },

  planningChecklist: {
    en: [
      'Book beach accommodation well in advance — mid-August is Spain\'s busiest holiday period',
      'Check local fiesta schedules for the town you are visiting',
      'Plan for heavy traffic on highways during the puente de agosto',
      'Book the Misteri d\'Elx tickets in Elche if visiting the Valencian region',
      'Reserve restaurant tables ahead of time, especially in tourist areas',
    ],
    fr: [
      'Réserver l\'hébergement à la plage bien à l\'avance — mi-août est la période de vacances la plus chargée d\'Espagne',
      'Consulter les programmes des fêtes locales pour la ville que vous visitez',
      'Prévoir une circulation dense sur les autoroutes pendant le puente de agosto',
      'Réserver les billets du Misteri d\'Elx à Elche si vous visitez la région de Valence',
      'Réserver les restaurants à l\'avance, surtout dans les zones touristiques',
    ],
    es: [
      'Reservar alojamiento en la playa con bastante antelación — mediados de agosto es el período vacacional más concurrido de España',
      'Consultar los programas de fiestas locales del pueblo o ciudad que vayas a visitar',
      'Prever tráfico intenso en las autopistas durante el puente de agosto',
      'Reservar entradas para el Misteri d\'Elx en Elche si se visita la Comunidad Valenciana',
      'Reservar mesas en restaurantes con antelación, especialmente en zonas turísticas',
    ],
  },

  relatedHolidays: ['es_national-day', 'es_all-saints-day'],

  seo: {
    en: {
      titleTemplate: 'Assumption of Mary {year} Spain — August 15 Countdown',
      descriptionTemplate: 'When is the Assumption {year} in Spain? Countdown to August 15, local fiestas, Asunción de la Virgen traditions.',
      keywords: ['Assumption Spain', 'Asunción de la Virgen', 'August 15 Spain', 'Spanish fiestas', 'Spain public holidays'],
    },
    fr: {
      titleTemplate: 'Assomption {year} Espagne — Compte à rebours du 15 août',
      descriptionTemplate: 'Quand est l\'Assomption {year} en Espagne ? Compte à rebours, fêtes locales et traditions de l\'Asunción de la Virgen.',
      keywords: ['Assomption Espagne', 'Asunción de la Virgen', '15 août Espagne', 'fêtes espagnoles', 'jours fériés Espagne'],
    },
    es: {
      titleTemplate: 'Asunción de la Virgen {year} España — Cuenta regresiva del 15 de agosto',
      descriptionTemplate: '¿Cuándo es la Asunción {year}? Cuenta regresiva al 15 de agosto, fiestas patronales y tradiciones.',
      keywords: ['Asunción de la Virgen', '15 de agosto España', 'fiestas patronales', 'festivos España', 'puente de agosto'],
    },
  },

  faq: [
    {
      question: { en: 'When is the Assumption of Mary {year} in Spain?', fr: 'Quand est l\'Assomption {year} en Espagne ?', es: '¿Cuándo es la Asunción de la Virgen {year} en España?' },
      answer: {
        en: 'The Assumption of Mary {year} in Spain is on {date} ({dayOfWeek}). It is always August 15 and is a national public holiday.',
        fr: 'L\'Assomption {year} en Espagne tombe le {date} ({dayOfWeek}). C\'est toujours le 15 août et c\'est un jour férié national.',
        es: 'La Asunción de la Virgen {year} en España es el {date} ({dayOfWeek}). Es siempre el 15 de agosto y es festivo nacional.',
      },
    },
    {
      question: { en: 'What is the Misteri d\'Elx?', fr: 'Qu\'est-ce que le Misteri d\'Elx ?', es: '¿Qué es el Misteri d\'Elx?' },
      answer: {
        en: 'The Misteri d\'Elx (Mystery of Elche) is a medieval liturgical drama about the Assumption of Mary, performed in the Basilica of Santa María in Elche, Alicante. It has been staged continuously since the 15th century and was declared a UNESCO Masterpiece of Oral and Intangible Heritage in 2001.',
        fr: 'Le Misteri d\'Elx (Mystère d\'Elche) est un drame liturgique médiéval sur l\'Assomption de la Vierge Marie, représenté dans la basilique Santa María d\'Elche, Alicante. Il est joué sans interruption depuis le XVe siècle et a été déclaré chef-d\'œuvre du patrimoine oral et immatériel de l\'UNESCO en 2001.',
        es: 'El Misteri d\'Elx (Misterio de Elche) es un drama litúrgico medieval sobre la Asunción de la Virgen María que se representa en la Basílica de Santa María de Elche, Alicante. Se escenifica de forma ininterrumpida desde el siglo XV y fue declarado Obra Maestra del Patrimonio Oral e Inmaterial de la Humanidad por la UNESCO en 2001.',
      },
    },
    {
      question: { en: 'What are fiestas patronales?', fr: 'Que sont les fiestas patronales ?', es: '¿Qué son las fiestas patronales?' },
      answer: {
        en: 'Fiestas patronales are annual festivals celebrating a town\'s patron saint. They typically include religious processions, music, dancing, fireworks, bullfights, and community feasts. August 15 is the most common date for these celebrations across Spain.',
        fr: 'Les fiestas patronales sont des fêtes annuelles célébrant le saint patron d\'une ville. Elles comprennent généralement des processions religieuses, de la musique, des danses, des feux d\'artifice, des corridas et des festins communautaires. Le 15 août est la date la plus courante pour ces célébrations à travers l\'Espagne.',
        es: 'Las fiestas patronales son celebraciones anuales en honor al santo patrón de un pueblo o ciudad. Suelen incluir procesiones religiosas, música, bailes, fuegos artificiales, corridas de toros y comidas populares. El 15 de agosto es la fecha más habitual para estas celebraciones en toda España.',
      },
    },
    {
      question: { en: 'Is August 15 a good time to visit Spain?', fr: 'Le 15 août est-il un bon moment pour visiter l\'Espagne ?', es: '¿Es el 15 de agosto un buen momento para visitar España?' },
      answer: {
        en: 'August 15 falls during Spain\'s peak summer season, which means hot weather, crowded beaches, and higher prices. However, it is also when many of the best local fiestas take place. Cities like Madrid and Barcelona are quieter as locals leave for vacation, while coastal areas are very busy.',
        fr: 'Le 15 août tombe en pleine saison estivale en Espagne, ce qui signifie temps chaud, plages bondées et prix plus élevés. Cependant, c\'est aussi le moment où ont lieu beaucoup des meilleures fêtes locales. Des villes comme Madrid et Barcelone sont plus calmes car les habitants partent en vacances, tandis que les zones côtières sont très fréquentées.',
        es: 'El 15 de agosto cae en plena temporada alta de verano en España, lo que significa calor, playas llenas y precios más altos. Sin embargo, también es cuando se celebran muchas de las mejores fiestas locales. Ciudades como Madrid y Barcelona están más tranquilas porque los habitantes se van de vacaciones, mientras que las zonas costeras están muy concurridas.',
      },
    },
  ],

  colorTheme: 'blue-white',
  icon: '✝️',
};

// ---------------------------------------------------------------------------
// National Day of Spain — October 12
// ---------------------------------------------------------------------------

const nationalDay: HolidayData = {
  id: 'es_national-day',
  countryCode: 'es',
  slugs: { en: 'national-day', fr: 'fete-nationale', es: 'fiesta-nacional' },
  names: { en: 'National Day of Spain', fr: "Fête nationale d'Espagne", es: 'Fiesta Nacional de España' },

  dateType: 'fixed',
  fixedMonth: 10,
  fixedDay: 12,

  descriptions: {
    en: "The National Day of Spain on October 12 is known as the Fiesta Nacional or Día de la Hispanidad. It commemorates Columbus's arrival in the Americas in 1492 and features a grand military parade in Madrid attended by the Royal Family.",
    fr: "La Fête nationale de l'Espagne, le 12 octobre, est connue sous le nom de Fiesta Nacional ou Día de la Hispanidad. Elle commémore l'arrivée de Christophe Colomb en Amérique en 1492 et comprend un grand défilé militaire à Madrid en présence de la famille royale.",
    es: 'La Fiesta Nacional de España, el 12 de octubre, también conocida como Día de la Hispanidad, conmemora la llegada de Cristóbal Colón a América en 1492 y cuenta con un gran desfile militar en Madrid con la presencia de la Familia Real.',
  },

  history: {
    en: "October 12 marks the date in 1492 when Christopher Columbus, sailing under the Spanish Crown, first reached the Americas, landing on an island in the present-day Bahamas. The date has been celebrated in Spain in various forms since the early 20th century.\n\nThe holiday was first established in 1918 as \"Fiesta de la Raza\" (Festival of the Race), reflecting the cultural ties between Spain and Latin America. Under Franco, it was renamed \"Día de la Hispanidad\" (Day of Hispanicity). After the transition to democracy, it became the \"Fiesta Nacional de España\" in 1987, the official national day.\n\nThe centrepiece of the celebration is the military parade on the Paseo de la Castellana in Madrid, reviewed by the King of Spain. It features all branches of the armed forces, including a spectacular aerial display by the Spanish Air Force's Patrulla Águila acrobatic team trailing smoke in the colours of the Spanish flag.",
    fr: "Le 12 octobre marque la date de 1492 où Christophe Colomb, naviguant sous la couronne espagnole, atteignit pour la première fois les Amériques, débarquant sur une île des actuelles Bahamas. Cette date est célébrée en Espagne sous diverses formes depuis le début du XXe siècle.\n\nLa fête fut établie en 1918 sous le nom de « Fiesta de la Raza » (Fête de la Race), reflétant les liens culturels entre l'Espagne et l'Amérique latine. Sous Franco, elle fut renommée « Día de la Hispanidad » (Jour de l'Hispanité). Après la transition vers la démocratie, elle devint la « Fiesta Nacional de España » en 1987, le jour national officiel.\n\nLe point central de la célébration est le défilé militaire sur le Paseo de la Castellana à Madrid, passé en revue par le roi d'Espagne. Il met en scène toutes les branches des forces armées, y compris un spectacle aérien spectaculaire de la Patrulla Águila de l'armée de l'air espagnole traçant les couleurs du drapeau espagnol dans le ciel.",
    es: "El 12 de octubre marca la fecha de 1492 en que Cristóbal Colón, navegando bajo la Corona española, llegó por primera vez a América, desembarcando en una isla de las actuales Bahamas. La fecha se celebra en España de diversas formas desde principios del siglo XX.\n\nLa fiesta se estableció por primera vez en 1918 como «Fiesta de la Raza», reflejando los lazos culturales entre España y Latinoamérica. Bajo Franco, se renombró «Día de la Hispanidad». Tras la transición a la democracia, se convirtió en la «Fiesta Nacional de España» en 1987, el día nacional oficial.\n\nEl acto central de la celebración es el desfile militar en el Paseo de la Castellana de Madrid, presidido por el Rey de España. Participan todas las ramas de las Fuerzas Armadas, incluyendo una espectacular exhibición aérea de la Patrulla Águila del Ejército del Aire, que traza los colores de la bandera española en el cielo.",
  },

  traditions: {
    en: [
      'Watching the military parade on the Paseo de la Castellana in Madrid',
      'Patrulla Águila aerial display trailing the red and yellow of the Spanish flag',
      'The King of Spain presiding over the ceremony with the Royal Family',
      'Flag-raising ceremony and gun salutes',
      'Cultural events celebrating Hispanic heritage and the Spanish language',
      'Debates and discussions about the legacy of Columbus and colonisation',
    ],
    fr: [
      'Regarder le défilé militaire sur le Paseo de la Castellana à Madrid',
      'L\'exhibition aérienne de la Patrulla Águila traçant le rouge et le jaune du drapeau espagnol',
      'Le roi d\'Espagne présidant la cérémonie avec la famille royale',
      'Cérémonie de lever du drapeau et salves d\'honneur',
      'Événements culturels célébrant le patrimoine hispanique et la langue espagnole',
      'Débats et discussions sur l\'héritage de Colomb et la colonisation',
    ],
    es: [
      'Ver el desfile militar en el Paseo de la Castellana de Madrid',
      'Exhibición aérea de la Patrulla Águila trazando el rojo y amarillo de la bandera española',
      'El Rey de España presidiendo la ceremonia con la Familia Real',
      'Ceremonia de izado de bandera y salvas de honor',
      'Actos culturales que celebran la herencia hispánica y la lengua española',
      'Debates y reflexiones sobre el legado de Colón y la colonización',
    ],
  },

  funFacts: {
    en: [
      'The Patrulla Águila flies seven CASA C-101 jets trailing red and yellow smoke to paint the Spanish flag across the Madrid sky.',
      'October 12 is also celebrated in many Latin American countries under different names — in Mexico it is "Día de la Raza," in Argentina "Día del Respeto a la Diversidad Cultural."',
      'The military parade features the Spanish Foreign Legion (Legión Española), known for their distinctive rapid marching pace and goat mascot.',
      'Columbus\'s voyage in 1492 was funded by Queen Isabella I of Castile and King Ferdinand II of Aragon, the same monarchs who completed the Reconquista.',
      'The holiday has sparked ongoing debate in Spain and Latin America about colonialism, indigenous rights, and historical legacy.',
    ],
    fr: [
      'La Patrulla Águila vole avec sept jets CASA C-101 traçant de la fumée rouge et jaune pour peindre le drapeau espagnol dans le ciel de Madrid.',
      'Le 12 octobre est aussi célébré dans de nombreux pays latino-américains sous différents noms — au Mexique c\'est le « Día de la Raza », en Argentine le « Día del Respeto a la Diversidad Cultural ».',
      'Le défilé militaire met en vedette la Légion étrangère espagnole (Legión Española), connue pour son pas de marche rapide distinctif et sa mascotte, un bouc.',
      'Le voyage de Colomb en 1492 fut financé par la reine Isabelle Ire de Castille et le roi Ferdinand II d\'Aragon, les mêmes monarques qui achevèrent la Reconquista.',
      'La fête a suscité un débat continu en Espagne et en Amérique latine sur le colonialisme, les droits des peuples autochtones et l\'héritage historique.',
    ],
    es: [
      'La Patrulla Águila vuela con siete aviones CASA C-101 trazando humo rojo y amarillo para dibujar la bandera española en el cielo de Madrid.',
      'El 12 de octubre se celebra también en muchos países latinoamericanos con diferentes nombres — en México es el «Día de la Raza», en Argentina el «Día del Respeto a la Diversidad Cultural».',
      'En el desfile militar participa la Legión Española, conocida por su distintivo paso rápido de marcha y su mascota, un macho cabrío.',
      'El viaje de Colón en 1492 fue financiado por la reina Isabel I de Castilla y el rey Fernando II de Aragón, los mismos monarcas que completaron la Reconquista.',
      'La fiesta ha suscitado un debate continuo en España y América Latina sobre el colonialismo, los derechos de los pueblos indígenas y el legado histórico.',
    ],
  },

  planningChecklist: {
    en: [
      'Head to the Paseo de la Castellana in Madrid early for a good parade viewing spot',
      'Look up the Patrulla Águila flyover time — it is the most photographed moment of the day',
      'Plan alternative activities if you are not in Madrid, as events are more limited elsewhere',
      'Check transport disruptions in central Madrid due to road closures for the parade',
      'Be aware of political demonstrations that sometimes occur alongside the celebrations',
    ],
    fr: [
      'Se rendre tôt au Paseo de la Castellana à Madrid pour une bonne place pour le défilé',
      'Chercher l\'heure du passage de la Patrulla Águila — c\'est le moment le plus photographié de la journée',
      'Planifier des activités alternatives si vous n\'êtes pas à Madrid, car les événements sont plus limités ailleurs',
      'Vérifier les perturbations de transport dans le centre de Madrid en raison des fermetures de routes pour le défilé',
      'Être conscient des manifestations politiques qui ont parfois lieu parallèlement aux célébrations',
    ],
    es: [
      'Ir temprano al Paseo de la Castellana en Madrid para conseguir un buen sitio para ver el desfile',
      'Consultar la hora del paso de la Patrulla Águila — es el momento más fotografiado del día',
      'Planificar actividades alternativas si no estás en Madrid, ya que los actos son más limitados en otros lugares',
      'Comprobar las alteraciones de transporte en el centro de Madrid por los cortes de tráfico del desfile',
      'Tener en cuenta las manifestaciones políticas que a veces tienen lugar junto a las celebraciones',
    ],
  },

  relatedHolidays: ['es_constitution-day', 'es_labour-day'],

  seo: {
    en: {
      titleTemplate: 'National Day of Spain {year} — October 12 Countdown & Guide',
      descriptionTemplate: 'When is Spain\'s National Day {year}? Countdown to October 12, Fiesta Nacional, military parade, and Día de la Hispanidad.',
      keywords: ['National Day Spain', 'Fiesta Nacional', 'Día de la Hispanidad', 'October 12 Spain', 'Spanish military parade'],
    },
    fr: {
      titleTemplate: 'Fête nationale d\'Espagne {year} — Compte à rebours du 12 octobre',
      descriptionTemplate: 'Quand est la Fête nationale d\'Espagne {year} ? Compte à rebours, Fiesta Nacional, défilé militaire et Día de la Hispanidad.',
      keywords: ['Fête nationale Espagne', 'Fiesta Nacional', 'Día de la Hispanidad', '12 octobre Espagne', 'défilé militaire espagnol'],
    },
    es: {
      titleTemplate: 'Fiesta Nacional de España {year} — Cuenta regresiva del 12 de octubre',
      descriptionTemplate: '¿Cuándo es la Fiesta Nacional {year}? Cuenta regresiva al 12 de octubre, desfile militar y Día de la Hispanidad.',
      keywords: ['Fiesta Nacional España', 'Día de la Hispanidad', '12 de octubre', 'desfile militar Madrid', 'festivos España'],
    },
  },

  faq: [
    {
      question: { en: 'When is Spain\'s National Day {year}?', fr: 'Quand est la Fête nationale d\'Espagne {year} ?', es: '¿Cuándo es la Fiesta Nacional de España {year}?' },
      answer: {
        en: 'Spain\'s National Day {year} is on {date} ({dayOfWeek}). It is always October 12 and is a national public holiday.',
        fr: 'La Fête nationale d\'Espagne {year} tombe le {date} ({dayOfWeek}). C\'est toujours le 12 octobre et c\'est un jour férié national.',
        es: 'La Fiesta Nacional de España {year} es el {date} ({dayOfWeek}). Es siempre el 12 de octubre y es festivo nacional.',
      },
    },
    {
      question: { en: 'What is the Día de la Hispanidad?', fr: 'Qu\'est-ce que le Día de la Hispanidad ?', es: '¿Qué es el Día de la Hispanidad?' },
      answer: {
        en: 'Día de la Hispanidad (Day of Hispanicity) is the traditional name for October 12, celebrating the cultural and linguistic ties between Spain and the Spanish-speaking world. It marks Columbus\'s arrival in the Americas in 1492. The official name is now Fiesta Nacional de España.',
        fr: 'Le Día de la Hispanidad (Jour de l\'Hispanité) est le nom traditionnel du 12 octobre, célébrant les liens culturels et linguistiques entre l\'Espagne et le monde hispanophone. Il marque l\'arrivée de Colomb en Amérique en 1492. Le nom officiel est désormais Fiesta Nacional de España.',
        es: 'El Día de la Hispanidad es el nombre tradicional del 12 de octubre, que celebra los lazos culturales y lingüísticos entre España y el mundo hispanohablante. Conmemora la llegada de Colón a América en 1492. El nombre oficial actual es Fiesta Nacional de España.',
      },
    },
    {
      question: { en: 'What is the Patrulla Águila?', fr: 'Qu\'est-ce que la Patrulla Águila ?', es: '¿Qué es la Patrulla Águila?' },
      answer: {
        en: 'The Patrulla Águila (Eagle Patrol) is the Spanish Air Force\'s aerobatic display team. They fly seven CASA C-101 jets and are famous for trailing red and yellow smoke in the colours of the Spanish flag over Madrid during the October 12 military parade.',
        fr: 'La Patrulla Águila (Patrouille Aigle) est l\'équipe de voltige aérienne de l\'armée de l\'air espagnole. Ils volent avec sept jets CASA C-101 et sont célèbres pour tracer de la fumée rouge et jaune aux couleurs du drapeau espagnol au-dessus de Madrid lors du défilé militaire du 12 octobre.',
        es: 'La Patrulla Águila es la patrulla acrobática del Ejército del Aire español. Vuela con siete aviones CASA C-101 y es famosa por trazar humo rojo y amarillo con los colores de la bandera española sobre Madrid durante el desfile militar del 12 de octubre.',
      },
    },
    {
      question: { en: 'Is October 12 controversial in Spain?', fr: 'Le 12 octobre est-il controversé en Espagne ?', es: '¿Es controvertido el 12 de octubre en España?' },
      answer: {
        en: 'Yes, October 12 is debated in Spain and Latin America. While many celebrate Hispanic cultural heritage, others criticise the holiday for commemorating the beginning of European colonisation and its devastating impact on indigenous peoples. Counter-demonstrations and alternative commemorations take place in several cities.',
        fr: 'Oui, le 12 octobre fait débat en Espagne et en Amérique latine. Si beaucoup célèbrent l\'héritage culturel hispanique, d\'autres critiquent la fête pour commémorer le début de la colonisation européenne et son impact dévastateur sur les peuples autochtones. Des contre-manifestations et des commémorations alternatives ont lieu dans plusieurs villes.',
        es: 'Sí, el 12 de octubre es objeto de debate en España y América Latina. Mientras muchos celebran la herencia cultural hispánica, otros critican la fiesta por conmemorar el inicio de la colonización europea y su devastador impacto sobre los pueblos indígenas. Se celebran contramanifestaciones y conmemoraciones alternativas en varias ciudades.',
      },
    },
  ],

  colorTheme: 'red-yellow',
  icon: '🇪🇸',
};

// ---------------------------------------------------------------------------
// All Saints' Day — November 1
// ---------------------------------------------------------------------------

const allSaintsDay: HolidayData = {
  id: 'es_all-saints-day',
  countryCode: 'es',
  slugs: { en: 'all-saints-day', fr: 'toussaint', es: 'dia-de-todos-los-santos' },
  names: { en: "All Saints' Day", fr: 'Toussaint', es: 'Día de Todos los Santos' },

  dateType: 'fixed',
  fixedMonth: 11,
  fixedDay: 1,

  descriptions: {
    en: "All Saints' Day on November 1 is a national holiday in Spain, known as the Día de Todos los Santos. Families visit cemeteries to honour deceased relatives, eat roasted chestnuts (castañas), and enjoy buñuelos de viento (puffed fritters).",
    fr: "La Toussaint, le 1er novembre, est un jour férié national en Espagne, connue sous le nom de Día de Todos los Santos. Les familles visitent les cimetières pour honorer leurs proches défunts, mangent des châtaignes grillées (castañas) et dégustent des buñuelos de viento (beignets soufflés).",
    es: 'El Día de Todos los Santos, el 1 de noviembre, es un festivo nacional en España. Las familias visitan los cementerios para honrar a los difuntos, comen castañas asadas y disfrutan de buñuelos de viento y huesos de santo.',
  },

  history: {
    en: "All Saints' Day has been observed on November 1 since the 8th century, when Pope Gregory III designated the date to honour all saints and martyrs. In Spain, the tradition of visiting cemeteries and decorating graves with flowers dates back centuries and remains one of the most widely observed customs in the country.\n\nThe Spanish tradition of eating chestnuts on November 1 dates back to at least the medieval period, when monasteries would distribute food to the poor on this day. The Castañada, a chestnut-roasting festival, is particularly strong in Catalonia and other northern regions. Buñuelos de viento (puffed fritters) and huesos de santo (marzipan tubes filled with custard) are traditional sweets.\n\nIn recent decades, the influence of Halloween on October 31 has grown in Spain, particularly among younger generations. However, the Día de Todos los Santos remains the more culturally significant observance, with cemeteries across Spain seeing their busiest day of the year on November 1.",
    fr: "La Toussaint est observée le 1er novembre depuis le VIIIe siècle, lorsque le pape Grégoire III désigna cette date pour honorer tous les saints et martyrs. En Espagne, la tradition de visiter les cimetières et de décorer les tombes avec des fleurs remonte à des siècles et reste l'une des coutumes les plus largement observées du pays.\n\nLa tradition espagnole de manger des châtaignes le 1er novembre remonte au moins à la période médiévale, lorsque les monastères distribuaient de la nourriture aux pauvres ce jour-là. La Castañada, une fête de grillage de châtaignes, est particulièrement forte en Catalogne et dans d'autres régions du nord. Les buñuelos de viento (beignets soufflés) et les huesos de santo (tubes de massepain fourrés à la crème) sont des douceurs traditionnelles.\n\nAu cours des dernières décennies, l'influence d'Halloween le 31 octobre s'est développée en Espagne, particulièrement parmi les jeunes générations. Cependant, le Día de Todos los Santos reste la célébration culturellement plus significative.",
    es: "El Día de Todos los Santos se observa el 1 de noviembre desde el siglo VIII, cuando el papa Gregorio III designó esta fecha para honrar a todos los santos y mártires. En España, la tradición de visitar los cementerios y decorar las tumbas con flores se remonta a siglos atrás y sigue siendo una de las costumbres más arraigadas del país.\n\nLa tradición española de comer castañas el 1 de noviembre se remonta al menos al período medieval, cuando los monasterios repartían alimentos a los pobres en este día. La Castañada, una fiesta de asar castañas, es especialmente fuerte en Cataluña y otras regiones del norte. Los buñuelos de viento y los huesos de santo (tubos de mazapán rellenos de crema) son los dulces tradicionales.\n\nEn las últimas décadas, la influencia de Halloween el 31 de octubre ha crecido en España, especialmente entre las generaciones más jóvenes. Sin embargo, el Día de Todos los Santos sigue siendo la celebración culturalmente más significativa, con los cementerios de toda España viviendo su día más concurrido del año el 1 de noviembre.",
  },

  traditions: {
    en: [
      'Visiting cemeteries to clean and decorate graves with chrysanthemums and other flowers',
      'Eating roasted chestnuts (castañas) from street vendors',
      'Enjoying buñuelos de viento (puffed fritters) and huesos de santo (marzipan sweets)',
      'Attending the Castañada chestnut festival, especially in Catalonia',
      'Lighting candles at gravesites and in churches',
      'Performing Don Juan Tenorio — the classic Spanish play traditionally staged on this day',
    ],
    fr: [
      'Visiter les cimetières pour nettoyer et décorer les tombes avec des chrysanthèmes et d\'autres fleurs',
      'Manger des châtaignes grillées (castañas) chez les vendeurs ambulants',
      'Déguster des buñuelos de viento (beignets soufflés) et des huesos de santo (douceurs en massepain)',
      'Participer à la Castañada, la fête des châtaignes, surtout en Catalogne',
      'Allumer des bougies sur les tombes et dans les églises',
      'Assister à la représentation de Don Juan Tenorio — la pièce classique espagnole traditionnellement jouée ce jour-là',
    ],
    es: [
      'Visitar los cementerios para limpiar y decorar las tumbas con crisantemos y otras flores',
      'Comer castañas asadas de los vendedores callejeros',
      'Disfrutar de buñuelos de viento y huesos de santo (dulces de mazapán)',
      'Participar en la Castañada, especialmente en Cataluña',
      'Encender velas en las tumbas y en las iglesias',
      'Asistir a la representación de Don Juan Tenorio — la obra clásica española que se representa tradicionalmente en este día',
    ],
  },

  funFacts: {
    en: [
      'Chrysanthemums are so strongly associated with November 1 in Spain that giving them as a gift at any other time is considered bad luck or a faux pas.',
      'José Zorrilla\'s play "Don Juan Tenorio" (1844) has been performed across Spain on All Saints\' Day for over 170 years.',
      'Huesos de santo literally means "saints\' bones" — the marzipan tubes are shaped to resemble finger bones.',
      'Some Spanish regions celebrate La Noche de las Ánimas (Night of the Souls) on October 31, a tradition older than American Halloween.',
      'November 1 is the busiest day of the year for Spanish florists and cemeteries.',
    ],
    fr: [
      'Les chrysanthèmes sont si fortement associés au 1er novembre en Espagne qu\'en offrir à tout autre moment est considéré comme portant malheur.',
      'La pièce « Don Juan Tenorio » (1844) de José Zorrilla est jouée dans toute l\'Espagne le jour de la Toussaint depuis plus de 170 ans.',
      'Huesos de santo signifie littéralement « os de saints » — les tubes de massepain sont façonnés pour ressembler à des os de doigts.',
      'Certaines régions espagnoles célèbrent La Noche de las Ánimas (Nuit des Âmes) le 31 octobre, une tradition plus ancienne que Halloween.',
      'Le 1er novembre est le jour le plus chargé de l\'année pour les fleuristes et les cimetières espagnols.',
    ],
    es: [
      'Los crisantemos están tan asociados con el 1 de noviembre en España que regalarlos en cualquier otro momento se considera de mal agüero.',
      'La obra «Don Juan Tenorio» (1844) de José Zorrilla se representa en toda España el Día de Todos los Santos desde hace más de 170 años.',
      'Los huesos de santo deben su nombre a que los tubos de mazapán se moldean con forma de huesos de dedo.',
      'Algunas regiones españolas celebran La Noche de las Ánimas el 31 de octubre, una tradición más antigua que Halloween.',
      'El 1 de noviembre es el día más ajetreado del año para los floristas y los cementerios españoles.',
    ],
  },

  planningChecklist: {
    en: [
      'Buy chrysanthemums and flowers for cemetery visits before November 1 — shops sell out',
      'Try buñuelos de viento and huesos de santo from traditional pastry shops',
      'Find a local production of Don Juan Tenorio to attend',
      'Plan cemetery visits early in the day to avoid crowds',
      'Look for castañas (chestnut) vendors on street corners in autumn',
    ],
    fr: [
      'Acheter des chrysanthèmes et des fleurs pour les visites au cimetière avant le 1er novembre — les magasins se vident',
      'Goûter les buñuelos de viento et les huesos de santo dans les pâtisseries traditionnelles',
      'Trouver une production locale de Don Juan Tenorio à voir',
      'Planifier les visites au cimetière tôt dans la journée pour éviter la foule',
      'Chercher les vendeurs de castañas (châtaignes) aux coins des rues en automne',
    ],
    es: [
      'Comprar crisantemos y flores para las visitas al cementerio antes del 1 de noviembre — las tiendas se quedan sin existencias',
      'Probar los buñuelos de viento y los huesos de santo en las pastelerías tradicionales',
      'Buscar una representación local de Don Juan Tenorio para asistir',
      'Planificar las visitas al cementerio temprano para evitar aglomeraciones',
      'Buscar los vendedores de castañas asadas en las esquinas durante el otoño',
    ],
  },

  relatedHolidays: ['es_assumption', 'es_constitution-day'],

  seo: {
    en: {
      titleTemplate: "All Saints' Day {year} Spain — November 1 Countdown",
      descriptionTemplate: "When is All Saints' Day {year} in Spain? Countdown, Día de Todos los Santos traditions, castañas, and cemetery customs.",
      keywords: ["All Saints Day Spain", "Día de Todos los Santos", "November 1 Spain", "Spanish All Saints", "castañas Spain"],
    },
    fr: {
      titleTemplate: 'Toussaint {year} Espagne — Compte à rebours du 1er novembre',
      descriptionTemplate: 'Quand est la Toussaint {year} en Espagne ? Compte à rebours, traditions du Día de Todos los Santos, châtaignes et coutumes.',
      keywords: ['Toussaint Espagne', 'Día de Todos los Santos', '1er novembre Espagne', 'traditions Toussaint', 'châtaignes Espagne'],
    },
    es: {
      titleTemplate: 'Día de Todos los Santos {year} España — Cuenta regresiva del 1 de noviembre',
      descriptionTemplate: '¿Cuándo es el Día de Todos los Santos {year}? Cuenta regresiva, tradiciones, castañas, buñuelos y costumbres.',
      keywords: ['Día de Todos los Santos', '1 de noviembre España', 'castañas', 'buñuelos de viento', 'festivos España'],
    },
  },

  faq: [
    {
      question: { en: "When is All Saints' Day {year} in Spain?", fr: 'Quand est la Toussaint {year} en Espagne ?', es: '¿Cuándo es el Día de Todos los Santos {year} en España?' },
      answer: {
        en: "All Saints' Day {year} in Spain is on {date} ({dayOfWeek}). It is always November 1 and is a national public holiday.",
        fr: 'La Toussaint {year} en Espagne tombe le {date} ({dayOfWeek}). C\'est toujours le 1er novembre et c\'est un jour férié national.',
        es: 'El Día de Todos los Santos {year} en España es el {date} ({dayOfWeek}). Es siempre el 1 de noviembre y es festivo nacional.',
      },
    },
    {
      question: { en: 'What are huesos de santo?', fr: 'Que sont les huesos de santo ?', es: '¿Qué son los huesos de santo?' },
      answer: {
        en: 'Huesos de santo (saints\' bones) are traditional Spanish sweets eaten on All Saints\' Day. They are tubes of marzipan filled with sweet egg yolk custard, shaped to resemble finger bones. They are sold in pastry shops across Spain in late October and November.',
        fr: 'Les huesos de santo (os de saints) sont des douceurs traditionnelles espagnoles consommées le jour de la Toussaint. Ce sont des tubes de massepain fourrés à la crème de jaune d\'œuf sucré, façonnés pour ressembler à des os de doigts. Ils sont vendus dans les pâtisseries de toute l\'Espagne fin octobre et en novembre.',
        es: 'Los huesos de santo son dulces tradicionales españoles que se comen el Día de Todos los Santos. Son tubos de mazapán rellenos de crema de yema de huevo, moldeados con forma de huesos de dedo. Se venden en las pastelerías de toda España a finales de octubre y en noviembre.',
      },
    },
    {
      question: { en: 'Why do Spaniards eat chestnuts on November 1?', fr: 'Pourquoi les Espagnols mangent-ils des châtaignes le 1er novembre ?', es: '¿Por qué se comen castañas el 1 de noviembre?' },
      answer: {
        en: 'The tradition of eating roasted chestnuts (castañas) on All Saints\' Day dates back to medieval times when monasteries distributed food to the poor. November marks the chestnut harvest season. The Castañada festival in Catalonia combines chestnut roasting with sweet potatoes and panellets (pine nut sweets).',
        fr: 'La tradition de manger des châtaignes grillées (castañas) le jour de la Toussaint remonte au Moyen Âge, lorsque les monastères distribuaient de la nourriture aux pauvres. Novembre marque la saison de la récolte des châtaignes. La Castañada en Catalogne combine le grillage de châtaignes avec des patates douces et des panellets (petits gâteaux aux pignons).',
        es: 'La tradición de comer castañas asadas el Día de Todos los Santos se remonta a la Edad Media, cuando los monasterios repartían alimentos a los pobres. Noviembre marca la temporada de la cosecha de castañas. La Castañada en Cataluña combina las castañas asadas con boniatos y panellets (dulces de piñones).',
      },
    },
    {
      question: { en: 'Do Spaniards celebrate Halloween?', fr: 'Les Espagnols fêtent-ils Halloween ?', es: '¿Se celebra Halloween en España?' },
      answer: {
        en: 'Halloween has grown in popularity in Spain, especially among younger generations, but All Saints\' Day on November 1 remains the more culturally significant tradition. Some Spanish regions have their own pre-existing traditions similar to Halloween, like La Noche de las Ánimas (Night of the Souls), which predates the American holiday.',
        fr: 'Halloween a gagné en popularité en Espagne, surtout parmi les jeunes générations, mais la Toussaint le 1er novembre reste la tradition culturellement plus significative. Certaines régions espagnoles ont leurs propres traditions préexistantes similaires à Halloween, comme La Noche de las Ánimas (Nuit des Âmes), qui est antérieure à la fête américaine.',
        es: 'Halloween ha ganado popularidad en España, especialmente entre las generaciones más jóvenes, pero el Día de Todos los Santos el 1 de noviembre sigue siendo la tradición culturalmente más significativa. Algunas regiones españolas tienen sus propias tradiciones preexistentes similares a Halloween, como La Noche de las Ánimas, que es anterior a la fiesta estadounidense.',
      },
    },
  ],

  colorTheme: 'purple-gold',
  icon: '🕯️',
};

// ---------------------------------------------------------------------------
// Constitution Day — December 6
// ---------------------------------------------------------------------------

const constitutionDay: HolidayData = {
  id: 'es_constitution-day',
  countryCode: 'es',
  slugs: { en: 'constitution-day', fr: 'jour-de-la-constitution', es: 'dia-de-la-constitucion' },
  names: { en: 'Constitution Day', fr: 'Jour de la Constitution', es: 'Día de la Constitución' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 6,

  descriptions: {
    en: "Constitution Day on December 6 celebrates the 1978 Spanish Constitution, which established Spain as a parliamentary monarchy after nearly four decades of Franco's dictatorship. It marks the end of the transition to democracy.",
    fr: "Le Jour de la Constitution, le 6 décembre, célèbre la Constitution espagnole de 1978, qui établit l'Espagne en tant que monarchie parlementaire après près de quatre décennies de dictature franquiste. Il marque la fin de la transition vers la démocratie.",
    es: 'El Día de la Constitución, el 6 de diciembre, celebra la Constitución española de 1978, que estableció España como monarquía parlamentaria tras casi cuatro décadas de dictadura franquista. Marca el fin de la transición a la democracia.',
  },

  history: {
    en: "The Spanish Constitution was approved by national referendum on December 6, 1978, with 88% of voters supporting it. It marked the culmination of Spain's transition to democracy (Transición) following the death of dictator Francisco Franco in 1975.\n\nThe Constitution established Spain as a parliamentary monarchy with King Juan Carlos I as head of state. It guaranteed fundamental rights and freedoms, created the system of autonomous communities (comunidades autónomas), and enshrined the separation of powers. The document was drafted by a cross-party committee known as the \"Fathers of the Constitution\" (Padres de la Constitución).\n\nConstitution Day became a public holiday in 1983. Combined with the Feast of the Immaculate Conception on December 8, it often creates a long holiday bridge (puente de diciembre) that marks the unofficial start of the Spanish Christmas season.",
    fr: "La Constitution espagnole fut approuvée par référendum national le 6 décembre 1978, avec 88 % des électeurs en sa faveur. Elle marqua le point culminant de la transition espagnole vers la démocratie (Transición) après la mort du dictateur Francisco Franco en 1975.\n\nLa Constitution établit l'Espagne comme monarchie parlementaire avec le roi Juan Carlos Ier comme chef de l'État. Elle garantissait les droits et libertés fondamentaux, créait le système des communautés autonomes (comunidades autónomas) et consacrait la séparation des pouvoirs. Le document fut rédigé par un comité transpartisan connu sous le nom de « Pères de la Constitution » (Padres de la Constitución).\n\nLe Jour de la Constitution devint un jour férié en 1983. Combiné avec la Fête de l'Immaculée Conception le 8 décembre, il crée souvent un long pont de décembre (puente de diciembre) qui marque le début officieux de la saison de Noël espagnole.",
    es: "La Constitución española fue aprobada por referéndum nacional el 6 de diciembre de 1978, con el 88 % de los votantes a favor. Marcó la culminación de la Transición española a la democracia tras la muerte del dictador Francisco Franco en 1975.\n\nLa Constitución estableció España como monarquía parlamentaria con el rey Juan Carlos I como jefe de Estado. Garantizaba los derechos y libertades fundamentales, creaba el sistema de comunidades autónomas y consagraba la separación de poderes. El documento fue redactado por una comisión transversal conocida como los «Padres de la Constitución».\n\nEl Día de la Constitución se convirtió en festivo en 1983. Combinado con la Inmaculada Concepción el 8 de diciembre, suele crear un largo puente de diciembre que marca el inicio oficioso de la temporada navideña española.",
  },

  traditions: {
    en: [
      'Open doors day at the Spanish Congress of Deputies (Congreso de los Diputados)',
      'Institutional ceremonies and speeches honouring Spanish democracy',
      'Taking advantage of the puente de diciembre for travel and holiday shopping',
      'Visiting Christmas markets and lights that begin around this date',
      'School activities about the Constitution and democratic values',
    ],
    fr: [
      'Journée portes ouvertes au Congrès des députés espagnol (Congreso de los Diputados)',
      'Cérémonies institutionnelles et discours honorant la démocratie espagnole',
      'Profiter du puente de diciembre pour voyager et faire les courses de Noël',
      'Visiter les marchés de Noël et les illuminations qui commencent autour de cette date',
      'Activités scolaires sur la Constitution et les valeurs démocratiques',
    ],
    es: [
      'Jornada de puertas abiertas en el Congreso de los Diputados',
      'Ceremonias institucionales y discursos en honor a la democracia española',
      'Aprovechar el puente de diciembre para viajar y hacer compras navideñas',
      'Visitar los mercadillos navideños y las iluminaciones que comienzan en torno a esta fecha',
      'Actividades escolares sobre la Constitución y los valores democráticos',
    ],
  },

  funFacts: {
    en: [
      'The 1978 Constitution was the result of negotiations between political parties spanning the entire ideological spectrum, from communists to conservatives.',
      'The puente de diciembre (December 6 + weekend + December 8) is one of the most popular travel periods in Spain.',
      'The Congress of Deputies opens its doors to the public on Constitution Day, allowing citizens to visit the chamber where laws are debated.',
      'Spain\'s Constitution is one of the longest in Europe, with 169 articles covering everything from individual rights to the structure of autonomous communities.',
      'The seven drafters of the Constitution, known as the "Padres de la Constitución," came from across the political spectrum and are celebrated as architects of modern Spanish democracy.',
    ],
    fr: [
      'La Constitution de 1978 fut le résultat de négociations entre des partis politiques couvrant tout le spectre idéologique, des communistes aux conservateurs.',
      'Le puente de diciembre (6 décembre + week-end + 8 décembre) est l\'une des périodes de voyage les plus populaires en Espagne.',
      'Le Congrès des députés ouvre ses portes au public le Jour de la Constitution, permettant aux citoyens de visiter l\'hémicycle.',
      'La Constitution espagnole est l\'une des plus longues d\'Europe, avec 169 articles couvrant tout, des droits individuels à la structure des communautés autonomes.',
      'Les sept rédacteurs de la Constitution, connus sous le nom de « Padres de la Constitución », venaient de tout le spectre politique et sont célébrés comme les architectes de la démocratie espagnole moderne.',
    ],
    es: [
      'La Constitución de 1978 fue fruto de las negociaciones entre partidos políticos de todo el espectro ideológico, desde comunistas hasta conservadores.',
      'El puente de diciembre (6 de diciembre + fin de semana + 8 de diciembre) es uno de los períodos de viaje más populares de España.',
      'El Congreso de los Diputados abre sus puertas al público el Día de la Constitución, permitiendo a los ciudadanos visitar el hemiciclo donde se debaten las leyes.',
      'La Constitución española es una de las más largas de Europa, con 169 artículos que abarcan desde los derechos individuales hasta la estructura de las comunidades autónomas.',
      'Los siete redactores de la Constitución, conocidos como los «Padres de la Constitución», provenían de todo el espectro político y son celebrados como los arquitectos de la democracia española moderna.',
    ],
  },

  planningChecklist: {
    en: [
      'Book travel early for the puente de diciembre — it is one of Spain\'s busiest travel periods',
      'Visit the Congress of Deputies on its open doors day',
      'Start Christmas shopping during the December bridge holiday',
      'Check Christmas lights and market opening dates in your city',
      'Plan a city break or countryside escape for the long weekend',
    ],
    fr: [
      'Réserver les voyages tôt pour le puente de diciembre — c\'est l\'une des périodes de voyage les plus chargées d\'Espagne',
      'Visiter le Congrès des députés lors de la journée portes ouvertes',
      'Commencer les achats de Noël pendant le pont de décembre',
      'Vérifier les dates d\'ouverture des illuminations et marchés de Noël dans votre ville',
      'Planifier une escapade urbaine ou champêtre pour le long week-end',
    ],
    es: [
      'Reservar viajes con antelación para el puente de diciembre — es uno de los períodos de viaje más concurridos de España',
      'Visitar el Congreso de los Diputados en su jornada de puertas abiertas',
      'Empezar las compras navideñas durante el puente de diciembre',
      'Comprobar las fechas de encendido de las luces y apertura de los mercadillos navideños en tu ciudad',
      'Planificar una escapada urbana o rural para el puente',
    ],
  },

  relatedHolidays: ['es_national-day', 'es_three-kings-day'],

  seo: {
    en: {
      titleTemplate: 'Constitution Day {year} Spain — December 6 Countdown',
      descriptionTemplate: 'When is Constitution Day {year} in Spain? Countdown, Día de la Constitución history, puente de diciembre, and holiday guide.',
      keywords: ['Constitution Day Spain', 'Día de la Constitución', 'December 6 Spain', 'puente de diciembre', 'Spanish Constitution 1978'],
    },
    fr: {
      titleTemplate: 'Jour de la Constitution {year} Espagne — Compte à rebours du 6 décembre',
      descriptionTemplate: 'Quand est le Jour de la Constitution {year} en Espagne ? Compte à rebours, histoire, puente de diciembre et guide.',
      keywords: ['Jour de la Constitution Espagne', 'Día de la Constitución', '6 décembre Espagne', 'puente de diciembre', 'Constitution espagnole 1978'],
    },
    es: {
      titleTemplate: 'Día de la Constitución {year} España — Cuenta regresiva del 6 de diciembre',
      descriptionTemplate: '¿Cuándo es el Día de la Constitución {year}? Cuenta regresiva, historia, puente de diciembre y guía.',
      keywords: ['Día de la Constitución', '6 de diciembre España', 'puente de diciembre', 'Constitución 1978', 'festivos España'],
    },
  },

  faq: [
    {
      question: { en: 'When is Constitution Day {year} in Spain?', fr: 'Quand est le Jour de la Constitution {year} en Espagne ?', es: '¿Cuándo es el Día de la Constitución {year} en España?' },
      answer: {
        en: 'Constitution Day {year} in Spain is on {date} ({dayOfWeek}). It is always December 6 and is a national public holiday.',
        fr: 'Le Jour de la Constitution {year} en Espagne tombe le {date} ({dayOfWeek}). C\'est toujours le 6 décembre et c\'est un jour férié national.',
        es: 'El Día de la Constitución {year} en España es el {date} ({dayOfWeek}). Es siempre el 6 de diciembre y es festivo nacional.',
      },
    },
    {
      question: { en: 'What is the puente de diciembre?', fr: 'Qu\'est-ce que le puente de diciembre ?', es: '¿Qué es el puente de diciembre?' },
      answer: {
        en: 'The puente de diciembre (December bridge) is the long holiday period created by Constitution Day (December 6) and the Feast of the Immaculate Conception (December 8). When these dates fall near a weekend, Spaniards enjoy an extended break that marks the start of the Christmas season.',
        fr: 'Le puente de diciembre (pont de décembre) est la longue période de vacances créée par le Jour de la Constitution (6 décembre) et la Fête de l\'Immaculée Conception (8 décembre). Lorsque ces dates tombent près d\'un week-end, les Espagnols profitent d\'un congé prolongé qui marque le début de la saison de Noël.',
        es: 'El puente de diciembre es el largo período festivo creado por el Día de la Constitución (6 de diciembre) y la Inmaculada Concepción (8 de diciembre). Cuando estas fechas caen cerca de un fin de semana, los españoles disfrutan de un descanso prolongado que marca el inicio de la temporada navideña.',
      },
    },
    {
      question: { en: 'What was the Spanish transition to democracy?', fr: 'Qu\'est-ce que la transition espagnole vers la démocratie ?', es: '¿Qué fue la Transición española?' },
      answer: {
        en: 'The Spanish transition (Transición) was the period from 1975 to 1982 when Spain moved from Franco\'s dictatorship to a constitutional democracy. Key events include Franco\'s death in 1975, the first free elections in 1977, and the approval of the Constitution by referendum in 1978. It is widely regarded as a model peaceful transition.',
        fr: 'La Transition espagnole (Transición) fut la période de 1975 à 1982 pendant laquelle l\'Espagne passa de la dictature de Franco à une démocratie constitutionnelle. Les événements clés comprennent la mort de Franco en 1975, les premières élections libres en 1977 et l\'approbation de la Constitution par référendum en 1978. Elle est largement considérée comme un modèle de transition pacifique.',
        es: 'La Transición española fue el período de 1975 a 1982 en el que España pasó de la dictadura franquista a una democracia constitucional. Los acontecimientos clave incluyen la muerte de Franco en 1975, las primeras elecciones libres en 1977 y la aprobación de la Constitución por referéndum en 1978. Está ampliamente considerada como un modelo de transición pacífica.',
      },
    },
    {
      question: { en: 'Can you visit the Congress of Deputies on Constitution Day?', fr: 'Peut-on visiter le Congrès des députés le Jour de la Constitution ?', es: '¿Se puede visitar el Congreso de los Diputados el Día de la Constitución?' },
      answer: {
        en: 'Yes, the Congress of Deputies (Congreso de los Diputados) in Madrid holds an open doors day on Constitution Day. Citizens can visit the main chamber and other areas of the building. Queues can be long, so arrive early.',
        fr: 'Oui, le Congrès des députés (Congreso de los Diputados) à Madrid organise une journée portes ouvertes le Jour de la Constitution. Les citoyens peuvent visiter l\'hémicycle principal et d\'autres espaces du bâtiment. Les files d\'attente peuvent être longues, il est donc conseillé d\'arriver tôt.',
        es: 'Sí, el Congreso de los Diputados en Madrid celebra una jornada de puertas abiertas el Día de la Constitución. Los ciudadanos pueden visitar el hemiciclo y otras zonas del edificio. Las colas pueden ser largas, así que conviene llegar temprano.',
      },
    },
  ],

  colorTheme: 'red-yellow',
  icon: '📜',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const esHolidays: HolidayData[] = [
  threeKingsDay,
  goodFriday,
  labourDay,
  assumption,
  nationalDay,
  allSaintsDay,
  constitutionDay,
];

export default esHolidays;
