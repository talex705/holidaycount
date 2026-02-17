/**
 * Nicaragua holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getHolyThursday } from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'ni_new-years-day',
  countryCode: 'ni',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'ano-nuevo' },
  names: { en: "New Year's Day", fr: "Jour de l'An", es: 'Año Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 marks the beginning of the calendar year in Nicaragua. The celebration begins on New Year's Eve with family gatherings, traditional foods, fireworks, and festive music that carries into the early hours of the new year.",
    fr: "Le Jour de l'An le 1er janvier marque le début de l'année civile au Nicaragua. La célébration commence le soir du Nouvel An avec des réunions familiales, des plats traditionnels, des feux d'artifice et de la musique festive qui se prolonge jusqu'aux premières heures de la nouvelle année.",
    es: "El Año Nuevo el 1 de enero marca el inicio del año calendario en Nicaragua. La celebración comienza en la Nochevieja con reuniones familiares, comidas tradicionales, fuegos artificiales y música festiva que se extiende hasta las primeras horas del nuevo año.",
  },

  history: {
    en: "New Year's celebrations in Nicaragua combine Catholic traditions with local customs. The evening of December 31 is spent with family, enjoying traditional foods and waiting for the clock to strike midnight when fireworks erupt across the country.\n\nIn Managua and other cities, public celebrations in parks and plazas have become increasingly popular, with live music and dancing. Many Nicaraguans also attend midnight Mass to give thanks and ask for blessings in the coming year.\n\nThe tradition of burning effigies of the old year, known as 'quema del año viejo,' is practiced in many neighborhoods, symbolizing the burning away of bad experiences and welcoming a fresh start.",
    fr: "Les célébrations du Nouvel An au Nicaragua combinent les traditions catholiques avec les coutumes locales. La soirée du 31 décembre se passe en famille, en savourant des plats traditionnels et en attendant que l'horloge sonne minuit quand les feux d'artifice éclatent à travers le pays.\n\nÀ Managua et dans d'autres villes, les célébrations publiques dans les parcs et les places sont devenues de plus en plus populaires, avec de la musique live et de la danse. De nombreux Nicaraguayens assistent également à la messe de minuit pour rendre grâce et demander des bénédictions pour l'année à venir.\n\nLa tradition de brûler des effigies de l'ancienne année, connue sous le nom de 'quema del año viejo', est pratiquée dans de nombreux quartiers, symbolisant la combustion des mauvaises expériences et l'accueil d'un nouveau départ.",
    es: "Las celebraciones de Año Nuevo en Nicaragua combinan tradiciones católicas con costumbres locales. La noche del 31 de diciembre se pasa en familia, disfrutando comidas tradicionales y esperando que el reloj marque la medianoche cuando los fuegos artificiales estallan en todo el país.\n\nEn Managua y otras ciudades, las celebraciones públicas en parques y plazas se han vuelto cada vez más populares, con música en vivo y baile. Muchos nicaragüenses también asisten a la misa de medianoche para dar gracias y pedir bendiciones para el año venidero.\n\nLa tradición de quemar efigies del año viejo, conocida como 'quema del año viejo', se practica en muchos barrios, simbolizando la quema de las malas experiencias y la bienvenida a un nuevo comienzo.",
  },

  traditions: {
    en: [
      'Setting off fireworks and firecrackers throughout the evening and at midnight',
      'Gathering with family for a festive dinner on New Year\'s Eve',
      'Burning effigies of the old year (quema del año viejo)',
      'Attending midnight Mass at local churches',
      'Eating twelve grapes at midnight for good luck in each month of the new year',
      'Dancing to cumbia, salsa, and Nicaraguan folk music',
    ],
    fr: [
      'Lancer des feux d\'artifice et des pétards tout au long de la soirée et à minuit',
      'Se réunir en famille pour un dîner festif le soir du Nouvel An',
      'Brûler des effigies de l\'ancienne année (quema del año viejo)',
      'Assister à la messe de minuit dans les églises locales',
      'Manger douze raisins à minuit pour la bonne chance chaque mois de la nouvelle année',
      'Danser la cumbia, la salsa et la musique folklorique nicaraguayenne',
    ],
    es: [
      'Lanzar fuegos artificiales y petardos durante toda la noche y a medianoche',
      'Reunirse en familia para una cena festiva en Nochevieja',
      'Quemar efigies del año viejo (quema del año viejo)',
      'Asistir a la misa de medianoche en las iglesias locales',
      'Comer doce uvas a medianoche para la buena suerte en cada mes del nuevo año',
      'Bailar cumbia, salsa y música folclórica nicaragüense',
    ],
  },

  funFacts: {
    en: [
      'Nicaraguans often make elaborate effigies of politicians, celebrities, or fictional characters to burn at midnight on New Year\'s Eve.',
      'Some Nicaraguans wear yellow underwear on New Year\'s Eve for prosperity, or red for love in the coming year.',
      'The tradition of walking around the block with a suitcase at midnight is believed to bring travel opportunities.',
      'Nacatamales, a large Nicaraguan tamale wrapped in plantain leaves, are the centerpiece of many New Year\'s Eve dinners.',
      'In León, one of Nicaragua\'s oldest cities, New Year\'s celebrations include traditional dances and cultural performances.',
    ],
    fr: [
      'Les Nicaraguayens fabriquent souvent des effigies élaborées de politiciens, de célébrités ou de personnages fictifs pour les brûler à minuit le soir du Nouvel An.',
      'Certains Nicaraguayens portent des sous-vêtements jaunes le soir du Nouvel An pour la prospérité, ou rouges pour l\'amour dans l\'année à venir.',
      'La tradition de marcher autour du pâté de maisons avec une valise à minuit est censée apporter des opportunités de voyage.',
      'Les nacatamales, un grand tamale nicaraguayen enveloppé dans des feuilles de plantain, sont la pièce maîtresse de nombreux dîners du Nouvel An.',
      'À León, l\'une des plus anciennes villes du Nicaragua, les célébrations du Nouvel An incluent des danses traditionnelles et des spectacles culturels.',
    ],
    es: [
      'Los nicaragüenses a menudo hacen elaboradas efigies de políticos, celebridades o personajes ficticios para quemar a medianoche en Nochevieja.',
      'Algunos nicaragüenses usan ropa interior amarilla en Nochevieja para la prosperidad, o roja para el amor en el año venidero.',
      'La tradición de caminar alrededor de la manzana con una maleta a medianoche se cree que trae oportunidades de viaje.',
      'Los nacatamales, un gran tamal nicaragüense envuelto en hojas de plátano, son la pieza central de muchas cenas de Nochevieja.',
      'En León, una de las ciudades más antiguas de Nicaragua, las celebraciones de Año Nuevo incluyen danzas tradicionales y presentaciones culturales.',
    ],
  },

  planningChecklist: {
    en: [
      'Purchase fireworks and firecrackers well in advance — they sell out quickly',
      'Plan your New Year\'s Eve dinner menu with nacatamales and traditional dishes',
      'Prepare your "muñeco de año viejo" effigy for the midnight burning',
      'Buy grapes for the midnight tradition',
      'Arrange safe transportation if celebrating away from home',
    ],
    fr: [
      'Achetez des feux d\'artifice et des pétards bien à l\'avance — ils se vendent rapidement',
      'Planifiez votre menu de dîner du Nouvel An avec des nacatamales et des plats traditionnels',
      'Préparez votre effigie « muñeco de año viejo » pour la combustion de minuit',
      'Achetez des raisins pour la tradition de minuit',
      'Organisez un transport sûr si vous célébrez loin de chez vous',
    ],
    es: [
      'Compre fuegos artificiales y petardos con anticipación — se agotan rápidamente',
      'Planifique su menú de cena de Nochevieja con nacatamales y platillos tradicionales',
      'Prepare su "muñeco de año viejo" para la quema de medianoche',
      'Compre uvas para la tradición de medianoche',
      'Organice transporte seguro si celebrará fuera de casa',
    ],
  },

  relatedHolidays: ['ni_christmas'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Nicaragua — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in Nicaragua? Live countdown to January 1, traditions, and celebration guide.",
      keywords: ["New Year's Day Nicaragua", 'Año Nuevo Nicaragua', 'January 1 Nicaragua', "New Year's countdown", 'Nicaragua holidays'],
    },
    fr: {
      titleTemplate: "Jour de l'An {year} Nicaragua — Compte à rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'An {year} au Nicaragua ? Compte à rebours, traditions et guide de célébration.",
      keywords: ["Jour de l'An Nicaragua", 'Nouvel An Nicaragua', '1er janvier Nicaragua', 'compte à rebours Nouvel An', 'jours fériés Nicaragua'],
    },
    es: {
      titleTemplate: 'Año Nuevo {year} Nicaragua — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Año Nuevo {year} en Nicaragua? Cuenta regresiva en vivo, tradiciones y guía de celebración.',
      keywords: ['Año Nuevo Nicaragua', '1 de enero Nicaragua', 'cuenta regresiva Año Nuevo', 'feriados Nicaragua', 'celebración Año Nuevo'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in Nicaragua?", fr: "Quand est le Jour de l'An {year} au Nicaragua ?", es: '¿Cuándo es el Año Nuevo {year} en Nicaragua?' },
      answer: {
        en: "New Year's Day {year} in Nicaragua is on {date}. It is always January 1 and is an official public holiday.",
        fr: "Le Jour de l'An {year} au Nicaragua est le {date}. C'est toujours le 1er janvier et c'est un jour férié officiel.",
        es: 'El Año Nuevo {year} en Nicaragua es el {date}. Siempre es el 1 de enero y es un feriado oficial.',
      },
    },
    {
      question: { en: 'What are nacatamales?', fr: 'Que sont les nacatamales ?', es: '¿Qué son los nacatamales?' },
      answer: {
        en: 'Nacatamales are a traditional Nicaraguan dish made with corn dough filled with seasoned pork or chicken, rice, potatoes, tomatoes, and olives, all wrapped in plantain leaves and steamed. They are a staple of holiday celebrations.',
        fr: 'Les nacatamales sont un plat traditionnel nicaraguayen fait de pâte de maïs garnie de porc ou de poulet assaisonné, de riz, de pommes de terre, de tomates et d\'olives, le tout enveloppé dans des feuilles de plantain et cuit à la vapeur. Ils sont un incontournable des célébrations.',
        es: 'Los nacatamales son un platillo tradicional nicaragüense hecho de masa de maíz rellena de cerdo o pollo sazonado, arroz, papas, tomates y aceitunas, todo envuelto en hojas de plátano y cocido al vapor. Son un elemento básico de las celebraciones.',
      },
    },
    {
      question: { en: 'How do Nicaraguans celebrate New Year\'s Eve?', fr: 'Comment les Nicaraguayens célèbrent-ils le Nouvel An ?', es: '¿Cómo celebran los nicaragüenses la Nochevieja?' },
      answer: {
        en: 'Nicaraguans celebrate with family dinners featuring nacatamales, fireworks at midnight, burning of old year effigies, and attending midnight Mass. Music, dancing, and community gatherings are also common.',
        fr: 'Les Nicaraguayens célèbrent avec des dîners en famille avec des nacatamales, des feux d\'artifice à minuit, la combustion d\'effigies de l\'ancienne année et en assistant à la messe de minuit. La musique, la danse et les rassemblements communautaires sont également courants.',
        es: 'Los nicaragüenses celebran con cenas familiares con nacatamales, fuegos artificiales a medianoche, quema de efigies del año viejo y asistiendo a la misa de medianoche. La música, el baile y las reuniones comunitarias también son comunes.',
      },
    },
    {
      question: { en: "Is New Year's Day a public holiday in Nicaragua?", fr: "Le Jour de l'An est-il un jour férié au Nicaragua ?", es: '¿Es el Año Nuevo un feriado en Nicaragua?' },
      answer: {
        en: "Yes, New Year's Day is an official public holiday in Nicaragua. Banks, government offices, and most businesses are closed.",
        fr: "Oui, le Jour de l'An est un jour férié officiel au Nicaragua. Les banques, les bureaux gouvernementaux et la plupart des commerces sont fermés.",
        es: 'Sí, el Año Nuevo es un feriado oficial en Nicaragua. Los bancos, oficinas gubernamentales y la mayoría de los negocios están cerrados.',
      },
    },
  ],

  colorTheme: 'new-year',
  icon: '🎆',
};

// ---------------------------------------------------------------------------
// Holy Thursday — calculated (Easter -3)
// ---------------------------------------------------------------------------

const holyThursday: HolidayData = {
  id: 'ni_holy-thursday',
  countryCode: 'ni',
  slugs: { en: 'holy-thursday', fr: 'jeudi-saint', es: 'jueves-santo' },
  names: { en: 'Holy Thursday', fr: 'Jeudi Saint', es: 'Jueves Santo' },

  dateType: 'calculated',
  calculateDate: getHolyThursday,

  descriptions: {
    en: 'Holy Thursday begins the most intense period of Semana Santa (Holy Week) in Nicaragua, a deeply important religious and cultural celebration. Streets come alive with processions, churches hold special services, and the entire country observes days of reflection.',
    fr: "Le Jeudi Saint commence la période la plus intense de la Semana Santa (Semaine Sainte) au Nicaragua, une célébration religieuse et culturelle profondément importante. Les rues s'animent de processions, les églises tiennent des services spéciaux et tout le pays observe des jours de réflexion.",
    es: 'El Jueves Santo comienza el período más intenso de la Semana Santa en Nicaragua, una celebración religiosa y cultural profundamente importante. Las calles cobran vida con procesiones, las iglesias celebran servicios especiales y todo el país observa días de reflexión.',
  },

  history: {
    en: "Semana Santa in Nicaragua has been observed since the Spanish colonial era, when Catholic missionaries established the tradition in the 16th century. The celebrations have evolved to incorporate indigenous and folk elements, making Nicaraguan Holy Week uniquely expressive.\n\nIn cities like León and Granada, the processions are particularly elaborate, with centuries-old traditions maintained by religious brotherhoods (cofradías). The streets are decorated with colored sawdust carpets, and massive religious floats are carried through the city.\n\nHoly Thursday marks the beginning of the Paschal Triduum and commemorates the Last Supper. In Nicaragua, many businesses close from Holy Thursday through Easter Sunday, making it the longest holiday break of the year.",
    fr: "La Semana Santa au Nicaragua est observée depuis l'ère coloniale espagnole, lorsque les missionnaires catholiques ont établi la tradition au XVIe siècle. Les célébrations ont évolué pour incorporer des éléments autochtones et folkloriques, rendant la Semaine Sainte nicaraguayenne unique.\n\nDans des villes comme León et Granada, les processions sont particulièrement élaborées, avec des traditions séculaires maintenues par des confréries religieuses (cofradías). Les rues sont décorées de tapis de sciure colorée, et d'immenses chars religieux sont portés à travers la ville.\n\nLe Jeudi Saint marque le début du Triduum pascal et commémore la Dernière Cène. Au Nicaragua, de nombreuses entreprises ferment du Jeudi Saint au dimanche de Pâques, ce qui en fait la plus longue période de vacances de l'année.",
    es: "La Semana Santa en Nicaragua se observa desde la era colonial española, cuando los misioneros católicos establecieron la tradición en el siglo XVI. Las celebraciones han evolucionado para incorporar elementos indígenas y folclóricos, haciendo la Semana Santa nicaragüense única.\n\nEn ciudades como León y Granada, las procesiones son particularmente elaboradas, con tradiciones centenarias mantenidas por hermandades religiosas (cofradías). Las calles se decoran con alfombras de aserrín colorido, y enormes andas religiosas son cargadas por la ciudad.\n\nEl Jueves Santo marca el inicio del Triduo Pascual y conmemora la Última Cena. En Nicaragua, muchos negocios cierran desde el Jueves Santo hasta el Domingo de Resurrección, convirtiéndolo en el período vacacional más largo del año.",
  },

  traditions: {
    en: [
      'Attending solemn church services commemorating the Last Supper',
      'Watching elaborate processions with religious floats through city streets',
      'Creating colorful sawdust carpets (alfombras) for processions to pass over',
      'Visiting seven churches in the tradition of the "Estación de los Siete Templos"',
      'Preparing traditional Semana Santa foods like sopa de queso and almíbar',
      'Observing fasting and abstinence from meat',
    ],
    fr: [
      'Assister à des services religieux solennels commémorant la Dernière Cène',
      'Regarder des processions élaborées avec des chars religieux à travers les rues',
      'Créer des tapis colorés en sciure de bois (alfombras) pour que les processions passent dessus',
      'Visiter sept églises dans la tradition de la « Estación de los Siete Templos »',
      'Préparer des plats traditionnels de Semana Santa comme la sopa de queso et l\'almíbar',
      'Observer le jeûne et l\'abstinence de viande',
    ],
    es: [
      'Asistir a servicios religiosos solemnes que conmemoran la Última Cena',
      'Ver elaboradas procesiones con andas religiosas por las calles',
      'Crear coloridas alfombras de aserrín para que las procesiones pasen sobre ellas',
      'Visitar siete iglesias en la tradición de la "Estación de los Siete Templos"',
      'Preparar comidas tradicionales de Semana Santa como sopa de queso y almíbar',
      'Observar el ayuno y la abstinencia de carne',
    ],
  },

  funFacts: {
    en: [
      'León\'s Semana Santa processions date back over 400 years and are among the most elaborate in Central America.',
      'Sopa de queso (cheese soup) is a traditional Semana Santa dish unique to Nicaragua, made with fresh cheese, milk, and corn.',
      'Many Nicaraguans head to the beaches during Semana Santa, making it the busiest beach week of the year.',
      'The city of Granada is known for its dramatic Good Friday processions featuring large religious sculptures.',
      'Almíbar, a sweet dessert made from fruits preserved in sugar syrup, is a beloved Semana Santa treat in Nicaragua.',
    ],
    fr: [
      'Les processions de Semana Santa de León datent de plus de 400 ans et sont parmi les plus élaborées d\'Amérique centrale.',
      'La sopa de queso (soupe au fromage) est un plat traditionnel de Semana Santa unique au Nicaragua, fait de fromage frais, de lait et de maïs.',
      'De nombreux Nicaraguayens se dirigent vers les plages pendant la Semana Santa, ce qui en fait la semaine de plage la plus fréquentée de l\'année.',
      'La ville de Granada est connue pour ses processions dramatiques du Vendredi Saint avec de grandes sculptures religieuses.',
      'L\'almíbar, un dessert sucré fait de fruits conservés dans du sirop de sucre, est une friandise de Semana Santa appréciée au Nicaragua.',
    ],
    es: [
      'Las procesiones de Semana Santa de León datan de más de 400 años y son de las más elaboradas de Centroamérica.',
      'La sopa de queso es un platillo tradicional de Semana Santa único de Nicaragua, hecho con queso fresco, leche y maíz.',
      'Muchos nicaragüenses se dirigen a las playas durante Semana Santa, convirtiéndola en la semana de playa más concurrida del año.',
      'La ciudad de Granada es conocida por sus dramáticas procesiones de Viernes Santo con grandes esculturas religiosas.',
      'El almíbar, un postre dulce hecho de frutas conservadas en jarabe de azúcar, es una golosina de Semana Santa querida en Nicaragua.',
    ],
  },

  planningChecklist: {
    en: [
      'Book beach or travel accommodations weeks in advance — Semana Santa is peak season',
      'Plan attendance at León or Granada processions for the most elaborate celebrations',
      'Prepare traditional Semana Santa foods like sopa de queso and almíbar',
      'Check local procession schedules and road closures',
      'Bring sunscreen and water for outdoor procession viewing',
    ],
    fr: [
      'Réservez les hébergements de plage ou de voyage des semaines à l\'avance — la Semana Santa est haute saison',
      'Planifiez votre présence aux processions de León ou Granada pour les célébrations les plus élaborées',
      'Préparez des plats traditionnels de Semana Santa comme la sopa de queso et l\'almíbar',
      'Vérifiez les horaires des processions locales et les fermetures de routes',
      'Apportez de la crème solaire et de l\'eau pour assister aux processions en plein air',
    ],
    es: [
      'Reserve alojamiento de playa o de viaje con semanas de anticipación — Semana Santa es temporada alta',
      'Planifique su asistencia a las procesiones de León o Granada para las celebraciones más elaboradas',
      'Prepare comidas tradicionales de Semana Santa como sopa de queso y almíbar',
      'Consulte los horarios de las procesiones locales y cierres de calles',
      'Lleve protector solar y agua para ver las procesiones al aire libre',
    ],
  },

  relatedHolidays: ['ni_christmas', 'sv_holy-thursday', 'cr_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Holy Thursday {year} Nicaragua — Semana Santa Countdown',
      descriptionTemplate: 'When is Holy Thursday {year} in Nicaragua? Live countdown, Semana Santa traditions, processions, and celebration guide.',
      keywords: ['Holy Thursday Nicaragua', 'Semana Santa Nicaragua', 'Jueves Santo Nicaragua', 'León processions', 'Nicaragua Holy Week'],
    },
    fr: {
      titleTemplate: 'Jeudi Saint {year} Nicaragua — Compte à rebours Semana Santa',
      descriptionTemplate: 'Quand est le Jeudi Saint {year} au Nicaragua ? Compte à rebours, traditions de la Semana Santa, processions et guide.',
      keywords: ['Jeudi Saint Nicaragua', 'Semana Santa Nicaragua', 'Semaine Sainte Nicaragua', 'processions León', 'Jueves Santo'],
    },
    es: {
      titleTemplate: 'Jueves Santo {year} Nicaragua — Cuenta regresiva Semana Santa',
      descriptionTemplate: '¿Cuándo es el Jueves Santo {year} en Nicaragua? Cuenta regresiva, tradiciones de Semana Santa, procesiones y guía.',
      keywords: ['Jueves Santo Nicaragua', 'Semana Santa Nicaragua', 'procesiones León', 'Semana Santa tradiciones', 'feriados Nicaragua'],
    },
  },

  faq: [
    {
      question: { en: 'When is Holy Thursday {year} in Nicaragua?', fr: 'Quand est le Jeudi Saint {year} au Nicaragua ?', es: '¿Cuándo es el Jueves Santo {year} en Nicaragua?' },
      answer: {
        en: 'Holy Thursday {year} in Nicaragua falls on {date}. It is a moveable holiday based on the Easter calendar.',
        fr: 'Le Jeudi Saint {year} au Nicaragua tombe le {date}. C\'est un jour férié mobile basé sur le calendrier de Pâques.',
        es: 'El Jueves Santo {year} en Nicaragua cae el {date}. Es un feriado móvil basado en el calendario de Pascua.',
      },
    },
    {
      question: { en: 'Where are the best Semana Santa celebrations in Nicaragua?', fr: 'Où sont les meilleures célébrations de Semana Santa au Nicaragua ?', es: '¿Dónde están las mejores celebraciones de Semana Santa en Nicaragua?' },
      answer: {
        en: 'León and Granada are renowned for the most elaborate Semana Santa celebrations in Nicaragua, with centuries-old procession traditions. Masaya and Managua also host significant observances.',
        fr: 'León et Granada sont réputées pour les célébrations de Semana Santa les plus élaborées au Nicaragua, avec des traditions de procession séculaires. Masaya et Managua accueillent également des observances importantes.',
        es: 'León y Granada son reconocidas por las celebraciones de Semana Santa más elaboradas de Nicaragua, con tradiciones procesionales centenarias. Masaya y Managua también acogen observancias significativas.',
      },
    },
    {
      question: { en: 'What is sopa de queso?', fr: 'Qu\'est-ce que la sopa de queso ?', es: '¿Qué es la sopa de queso?' },
      answer: {
        en: 'Sopa de queso (cheese soup) is a traditional Nicaraguan Semana Santa dish made with fresh cheese, milk, corn, and sometimes plantains. It is one of the most beloved meatless dishes eaten during Holy Week.',
        fr: 'La sopa de queso (soupe au fromage) est un plat traditionnel nicaraguayen de Semana Santa fait de fromage frais, de lait, de maïs et parfois de plantains. C\'est l\'un des plats sans viande les plus appréciés de la Semaine Sainte.',
        es: 'La sopa de queso es un platillo tradicional nicaragüense de Semana Santa hecho con queso fresco, leche, maíz y a veces plátanos. Es uno de los platillos sin carne más queridos durante la Semana Santa.',
      },
    },
    {
      question: { en: 'Is Holy Thursday a public holiday in Nicaragua?', fr: 'Le Jeudi Saint est-il un jour férié au Nicaragua ?', es: '¿Es el Jueves Santo un feriado en Nicaragua?' },
      answer: {
        en: 'Yes, Holy Thursday is an official public holiday in Nicaragua. Most businesses, schools, and government offices close from Holy Thursday through Easter Sunday.',
        fr: 'Oui, le Jeudi Saint est un jour férié officiel au Nicaragua. La plupart des entreprises, écoles et bureaux gouvernementaux ferment du Jeudi Saint au dimanche de Pâques.',
        es: 'Sí, el Jueves Santo es un feriado oficial en Nicaragua. La mayoría de los negocios, escuelas y oficinas gubernamentales cierran desde el Jueves Santo hasta el Domingo de Resurrección.',
      },
    },
  ],

  colorTheme: 'easter',
  icon: '✝️',
};

// ---------------------------------------------------------------------------
// Labour Day — May 1
// ---------------------------------------------------------------------------

const labourDay: HolidayData = {
  id: 'ni_labour-day',
  countryCode: 'ni',
  slugs: { en: 'labour-day', fr: 'fete-du-travail', es: 'dia-del-trabajo' },
  names: { en: 'Labour Day', fr: 'Fête du Travail', es: 'Día del Trabajo' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 1,

  descriptions: {
    en: "Labour Day on May 1 is a public holiday in Nicaragua celebrating workers' rights and achievements. The day features marches, rallies, and community events organized by labor unions, cooperatives, and workers' organizations throughout the country.",
    fr: "La Fête du Travail le 1er mai est un jour férié au Nicaragua célébrant les droits et les réalisations des travailleurs. La journée comprend des marches, des rassemblements et des événements communautaires organisés par les syndicats, les coopératives et les organisations de travailleurs dans tout le pays.",
    es: "El Día del Trabajo el 1 de mayo es un feriado en Nicaragua que celebra los derechos y logros de los trabajadores. El día presenta marchas, mítines y eventos comunitarios organizados por sindicatos, cooperativas y organizaciones de trabajadores en todo el país.",
  },

  history: {
    en: "Labour Day in Nicaragua has deep roots in the country's labor movement, which gained strength during the early 20th century. Workers in mining, agriculture, and manufacturing organized to demand better conditions and fair wages.\n\nThe Sandinista Revolution of 1979 brought significant changes to workers' rights in Nicaragua. Under the new government, labor protections were expanded and May 1 became an even more prominent celebration, with massive rallies in Managua.\n\nToday, Labour Day continues to be an important date for unions and workers' organizations to advocate for labor rights, minimum wage increases, and improved working conditions across all sectors.",
    fr: "La Fête du Travail au Nicaragua a des racines profondes dans le mouvement ouvrier du pays, qui s'est renforcé au début du XXe siècle. Les travailleurs des mines, de l'agriculture et de la manufacture se sont organisés pour exiger de meilleures conditions et des salaires justes.\n\nLa Révolution sandiniste de 1979 a apporté des changements significatifs aux droits des travailleurs au Nicaragua. Sous le nouveau gouvernement, les protections du travail ont été élargies et le 1er mai est devenu une célébration encore plus importante, avec des rassemblements massifs à Managua.\n\nAujourd'hui, la Fête du Travail continue d'être une date importante pour les syndicats et les organisations de travailleurs pour plaider en faveur des droits du travail, des augmentations du salaire minimum et de meilleures conditions de travail dans tous les secteurs.",
    es: "El Día del Trabajo en Nicaragua tiene raíces profundas en el movimiento obrero del país, que cobró fuerza durante principios del siglo XX. Los trabajadores de la minería, la agricultura y la manufactura se organizaron para exigir mejores condiciones y salarios justos.\n\nLa Revolución Sandinista de 1979 trajo cambios significativos a los derechos de los trabajadores en Nicaragua. Bajo el nuevo gobierno, las protecciones laborales se ampliaron y el 1 de mayo se convirtió en una celebración aún más prominente, con concentraciones masivas en Managua.\n\nHoy, el Día del Trabajo sigue siendo una fecha importante para los sindicatos y organizaciones de trabajadores para abogar por derechos laborales, aumentos al salario mínimo y mejores condiciones de trabajo en todos los sectores.",
  },

  traditions: {
    en: [
      'Participating in workers\' marches through major city streets',
      'Attending union-organized rallies and speeches in public plazas',
      'Displaying banners advocating for workers\' rights and fair wages',
      'Gathering with fellow workers for communal meals and celebrations',
      'Listening to speeches by labor leaders and government officials',
    ],
    fr: [
      'Participer à des marches de travailleurs dans les grandes rues',
      'Assister à des rassemblements et discours organisés par les syndicats dans les places publiques',
      'Afficher des banderoles plaidant pour les droits des travailleurs et des salaires justes',
      'Se réunir avec des collègues pour des repas communautaires et des célébrations',
      'Écouter les discours des dirigeants syndicaux et des responsables gouvernementaux',
    ],
    es: [
      'Participar en marchas de trabajadores por las principales calles de la ciudad',
      'Asistir a mítines y discursos organizados por sindicatos en plazas públicas',
      'Exhibir pancartas abogando por los derechos de los trabajadores y salarios justos',
      'Reunirse con compañeros de trabajo para comidas comunitarias y celebraciones',
      'Escuchar discursos de líderes sindicales y funcionarios gubernamentales',
    ],
  },

  funFacts: {
    en: [
      'The Sandinista Revolution of 1979 made Labour Day one of the most politically significant holidays in Nicaragua.',
      'May 1 rallies in Managua regularly draw tens of thousands of participants.',
      'Nicaragua\'s labour code, reformed after the 1979 revolution, is considered one of the most worker-friendly in Central America.',
      'Many Nicaraguan workers receive a special "aguinaldo" (bonus) around Labour Day celebrations.',
      'Labour Day is celebrated across all of Central America on May 1, creating a shared regional observance.',
    ],
    fr: [
      'La Révolution sandiniste de 1979 a fait de la Fête du Travail l\'un des jours fériés les plus politiquement significatifs au Nicaragua.',
      'Les rassemblements du 1er mai à Managua attirent régulièrement des dizaines de milliers de participants.',
      'Le code du travail du Nicaragua, réformé après la révolution de 1979, est considéré comme l\'un des plus favorables aux travailleurs en Amérique centrale.',
      'De nombreux travailleurs nicaraguayens reçoivent un « aguinaldo » (bonus) spécial autour des célébrations de la Fête du Travail.',
      'La Fête du Travail est célébrée dans toute l\'Amérique centrale le 1er mai, créant une observance régionale partagée.',
    ],
    es: [
      'La Revolución Sandinista de 1979 hizo del Día del Trabajo uno de los feriados políticamente más significativos en Nicaragua.',
      'Los mítines del 1 de mayo en Managua regularmente atraen a decenas de miles de participantes.',
      'El código laboral de Nicaragua, reformado después de la revolución de 1979, es considerado uno de los más favorables para los trabajadores en Centroamérica.',
      'Muchos trabajadores nicaragüenses reciben un "aguinaldo" (bono) especial alrededor de las celebraciones del Día del Trabajo.',
      'El Día del Trabajo se celebra en toda Centroamérica el 1 de mayo, creando una observancia regional compartida.',
    ],
  },

  planningChecklist: {
    en: [
      'Check for road closures and march routes in Managua and other cities',
      'Plan alternative transportation if public transit is affected',
      'Bring water and sun protection for outdoor events',
      'Note that banks and government offices will be closed',
      'Stock up on groceries as some shops may close for the day',
    ],
    fr: [
      'Vérifiez les fermetures de routes et les itinéraires de marche à Managua et d\'autres villes',
      'Planifiez un transport alternatif si les transports en commun sont affectés',
      'Apportez de l\'eau et une protection solaire pour les événements en plein air',
      'Notez que les banques et les bureaux gouvernementaux seront fermés',
      'Faites vos courses car certains magasins peuvent fermer pour la journée',
    ],
    es: [
      'Verifique cierres de calles y rutas de marcha en Managua y otras ciudades',
      'Planifique transporte alternativo si el transporte público se ve afectado',
      'Lleve agua y protección solar para eventos al aire libre',
      'Tenga en cuenta que los bancos y oficinas gubernamentales estarán cerrados',
      'Abastézcase de víveres ya que algunas tiendas pueden cerrar por el día',
    ],
  },

  relatedHolidays: ['ni_revolution-day', 'sv_labour-day', 'cr_labour-day'],

  seo: {
    en: {
      titleTemplate: 'Labour Day {year} Nicaragua — Countdown & Info',
      descriptionTemplate: 'When is Labour Day {year} in Nicaragua? Live countdown to May 1, history, marches, and workers\' rights information.',
      keywords: ['Labour Day Nicaragua', 'Día del Trabajo Nicaragua', 'May 1 Nicaragua', 'workers day Nicaragua', 'Nicaragua holidays'],
    },
    fr: {
      titleTemplate: 'Fête du Travail {year} Nicaragua — Compte à rebours et info',
      descriptionTemplate: 'Quand est la Fête du Travail {year} au Nicaragua ? Compte à rebours, histoire, marches et informations.',
      keywords: ['Fête du Travail Nicaragua', '1er mai Nicaragua', 'Día del Trabajo', 'jours fériés Nicaragua', 'droits des travailleurs'],
    },
    es: {
      titleTemplate: 'Día del Trabajo {year} Nicaragua — Cuenta regresiva e info',
      descriptionTemplate: '¿Cuándo es el Día del Trabajo {year} en Nicaragua? Cuenta regresiva, historia, marchas e información sobre derechos laborales.',
      keywords: ['Día del Trabajo Nicaragua', '1 de mayo Nicaragua', 'feriados Nicaragua', 'derechos laborales Nicaragua', 'marcha trabajadores'],
    },
  },

  faq: [
    {
      question: { en: 'When is Labour Day {year} in Nicaragua?', fr: 'Quand est la Fête du Travail {year} au Nicaragua ?', es: '¿Cuándo es el Día del Trabajo {year} en Nicaragua?' },
      answer: {
        en: 'Labour Day {year} in Nicaragua is on {date}. It is always May 1 and is an official public holiday.',
        fr: 'La Fête du Travail {year} au Nicaragua est le {date}. C\'est toujours le 1er mai et c\'est un jour férié officiel.',
        es: 'El Día del Trabajo {year} en Nicaragua es el {date}. Siempre es el 1 de mayo y es un feriado oficial.',
      },
    },
    {
      question: { en: 'How is Labour Day celebrated in Nicaragua?', fr: 'Comment la Fête du Travail est-elle célébrée au Nicaragua ?', es: '¿Cómo se celebra el Día del Trabajo en Nicaragua?' },
      answer: {
        en: 'Labour Day is celebrated with large marches, union rallies, and speeches by labor leaders. It is both a day of advocacy for workers\' rights and a day of rest.',
        fr: 'La Fête du Travail est célébrée avec de grandes marches, des rassemblements syndicaux et des discours de dirigeants syndicaux. C\'est à la fois un jour de plaidoyer pour les droits des travailleurs et un jour de repos.',
        es: 'El Día del Trabajo se celebra con grandes marchas, mítines sindicales y discursos de líderes laborales. Es tanto un día de defensa de los derechos de los trabajadores como un día de descanso.',
      },
    },
    {
      question: { en: 'What impact did the Sandinista Revolution have on Labour Day?', fr: 'Quel impact la Révolution sandiniste a-t-elle eu sur la Fête du Travail ?', es: '¿Qué impacto tuvo la Revolución Sandinista en el Día del Trabajo?' },
      answer: {
        en: 'The 1979 Sandinista Revolution significantly strengthened workers\' rights in Nicaragua and elevated Labour Day into one of the most politically important holidays, with massive government-supported rallies.',
        fr: 'La Révolution sandiniste de 1979 a considérablement renforcé les droits des travailleurs au Nicaragua et a élevé la Fête du Travail au rang de l\'un des jours fériés les plus politiquement importants, avec des rassemblements massifs soutenus par le gouvernement.',
        es: 'La Revolución Sandinista de 1979 fortaleció significativamente los derechos de los trabajadores en Nicaragua y elevó el Día del Trabajo a uno de los feriados políticamente más importantes, con concentraciones masivas respaldadas por el gobierno.',
      },
    },
    {
      question: { en: 'Is Labour Day a public holiday in Nicaragua?', fr: 'La Fête du Travail est-elle un jour férié au Nicaragua ?', es: '¿Es el Día del Trabajo un feriado en Nicaragua?' },
      answer: {
        en: 'Yes, Labour Day on May 1 is an official public holiday in Nicaragua. Banks, government offices, and most businesses are closed.',
        fr: 'Oui, la Fête du Travail le 1er mai est un jour férié officiel au Nicaragua. Les banques, les bureaux gouvernementaux et la plupart des commerces sont fermés.',
        es: 'Sí, el Día del Trabajo el 1 de mayo es un feriado oficial en Nicaragua. Los bancos, oficinas gubernamentales y la mayoría de los negocios están cerrados.',
      },
    },
  ],

  colorTheme: 'spring',
  icon: '⚒️',
};

// ---------------------------------------------------------------------------
// Revolution Day — July 19
// ---------------------------------------------------------------------------

const revolutionDay: HolidayData = {
  id: 'ni_revolution-day',
  countryCode: 'ni',
  slugs: { en: 'revolution-day', fr: 'jour-de-la-revolution', es: 'dia-de-la-revolucion' },
  names: { en: 'Revolution Day', fr: 'Jour de la Révolution', es: 'Día de la Revolución' },

  dateType: 'fixed',
  fixedMonth: 7,
  fixedDay: 19,

  descriptions: {
    en: 'Revolution Day on July 19 commemorates the triumph of the Sandinista Revolution in 1979, when the Sandinista National Liberation Front (FSLN) overthrew the Somoza dictatorship. The day is marked with rallies, cultural events, and patriotic celebrations.',
    fr: "Le Jour de la Révolution le 19 juillet commémore le triomphe de la Révolution sandiniste en 1979, lorsque le Front sandiniste de libération nationale (FSLN) a renversé la dictature de Somoza. La journée est marquée par des rassemblements, des événements culturels et des célébrations patriotiques.",
    es: 'El Día de la Revolución el 19 de julio conmemora el triunfo de la Revolución Sandinista en 1979, cuando el Frente Sandinista de Liberación Nacional (FSLN) derrocó la dictadura de Somoza. El día se marca con mítines, eventos culturales y celebraciones patrióticas.',
  },

  history: {
    en: "On July 19, 1979, the Sandinista National Liberation Front (FSLN) entered Managua, marking the culmination of a popular insurrection that overthrew the Somoza family dictatorship, which had ruled Nicaragua for over 40 years.\n\nThe revolution followed years of guerrilla warfare, popular uprisings, and widespread opposition to the Somoza regime's corruption and repression. The final offensive in 1979 involved coordinated uprisings across the country, with broad participation from workers, students, and communities.\n\nSince 1979, July 19 has been celebrated as one of Nicaragua's most significant national holidays. The main celebrations take place in Managua's Plaza de la Revolución (formerly Plaza de la República), with massive rallies, speeches, cultural performances, and music.",
    fr: "Le 19 juillet 1979, le Front sandiniste de libération nationale (FSLN) est entré à Managua, marquant le point culminant d'une insurrection populaire qui a renversé la dictature de la famille Somoza, qui avait gouverné le Nicaragua pendant plus de 40 ans.\n\nLa révolution a suivi des années de guérilla, de soulèvements populaires et d'opposition généralisée à la corruption et à la répression du régime Somoza. L'offensive finale en 1979 a impliqué des soulèvements coordonnés à travers le pays, avec une large participation des travailleurs, des étudiants et des communautés.\n\nDepuis 1979, le 19 juillet est célébré comme l'un des jours fériés nationaux les plus importants du Nicaragua. Les principales célébrations ont lieu sur la Plaza de la Revolución de Managua (anciennement Plaza de la República), avec des rassemblements massifs, des discours, des spectacles culturels et de la musique.",
    es: "El 19 de julio de 1979, el Frente Sandinista de Liberación Nacional (FSLN) entró en Managua, marcando la culminación de una insurrección popular que derrocó la dictadura de la familia Somoza, que había gobernado Nicaragua por más de 40 años.\n\nLa revolución siguió años de guerra de guerrillas, levantamientos populares y oposición generalizada a la corrupción y represión del régimen Somoza. La ofensiva final en 1979 involucró levantamientos coordinados en todo el país, con amplia participación de trabajadores, estudiantes y comunidades.\n\nDesde 1979, el 19 de julio se celebra como uno de los feriados nacionales más significativos de Nicaragua. Las principales celebraciones tienen lugar en la Plaza de la Revolución de Managua (anteriormente Plaza de la República), con concentraciones masivas, discursos, presentaciones culturales y música.",
  },

  traditions: {
    en: [
      'Attending the main rally at Managua\'s Plaza de la Revolución',
      'Listening to speeches by government officials and revolutionary figures',
      'Watching cultural performances including music, dance, and theater',
      'Wearing red and black — the colors of the FSLN',
      'Participating in neighborhood celebrations and community events',
      'Setting off fireworks and firecrackers throughout the day',
    ],
    fr: [
      'Assister au rassemblement principal à la Plaza de la Revolución de Managua',
      'Écouter les discours des responsables gouvernementaux et des figures révolutionnaires',
      'Regarder des spectacles culturels incluant musique, danse et théâtre',
      'Porter du rouge et noir — les couleurs du FSLN',
      'Participer aux célébrations de quartier et aux événements communautaires',
      'Lancer des feux d\'artifice et des pétards tout au long de la journée',
    ],
    es: [
      'Asistir a la concentración principal en la Plaza de la Revolución de Managua',
      'Escuchar discursos de funcionarios gubernamentales y figuras revolucionarias',
      'Ver presentaciones culturales incluyendo música, danza y teatro',
      'Vestir rojo y negro — los colores del FSLN',
      'Participar en celebraciones de barrio y eventos comunitarios',
      'Lanzar fuegos artificiales y petardos durante todo el día',
    ],
  },

  funFacts: {
    en: [
      'The Somoza family dynasty ruled Nicaragua for 43 years (1936-1979) before being overthrown by the Sandinista Revolution.',
      'The main Revolution Day rally in Managua has historically drawn hundreds of thousands of participants.',
      'The Sandinista Revolution inspired solidarity movements worldwide, particularly in Latin America and Europe.',
      'Nicaragua\'s literacy campaign following the revolution reduced illiteracy from over 50% to about 12% in just five months.',
      'The Plaza de la Revolución in Managua, where the main celebrations take place, was renamed from Plaza de la República after the revolution.',
    ],
    fr: [
      'La dynastie de la famille Somoza a gouverné le Nicaragua pendant 43 ans (1936-1979) avant d\'être renversée par la Révolution sandiniste.',
      'Le principal rassemblement du Jour de la Révolution à Managua a historiquement attiré des centaines de milliers de participants.',
      'La Révolution sandiniste a inspiré des mouvements de solidarité dans le monde entier, en particulier en Amérique latine et en Europe.',
      'La campagne d\'alphabétisation du Nicaragua après la révolution a réduit l\'analphabétisme de plus de 50 % à environ 12 % en seulement cinq mois.',
      'La Plaza de la Revolución à Managua, où ont lieu les principales célébrations, a été renommée de Plaza de la República après la révolution.',
    ],
    es: [
      'La dinastía de la familia Somoza gobernó Nicaragua durante 43 años (1936-1979) antes de ser derrocada por la Revolución Sandinista.',
      'La principal concentración del Día de la Revolución en Managua ha atraído históricamente a cientos de miles de participantes.',
      'La Revolución Sandinista inspiró movimientos de solidaridad en todo el mundo, particularmente en América Latina y Europa.',
      'La campaña de alfabetización de Nicaragua después de la revolución redujo el analfabetismo de más del 50% a aproximadamente el 12% en solo cinco meses.',
      'La Plaza de la Revolución en Managua, donde tienen lugar las principales celebraciones, fue renombrada de Plaza de la República después de la revolución.',
    ],
  },

  planningChecklist: {
    en: [
      'Check schedules for the main rally and cultural events in Managua',
      'Plan transportation — roads near the plaza may be closed',
      'Bring water and sun protection for outdoor celebrations',
      'Wear red and black if you wish to participate in the festive atmosphere',
      'Note that banks and government offices will be closed',
    ],
    fr: [
      'Vérifiez les horaires du rassemblement principal et des événements culturels à Managua',
      'Planifiez le transport — les routes près de la place peuvent être fermées',
      'Apportez de l\'eau et une protection solaire pour les célébrations en plein air',
      'Portez du rouge et noir si vous souhaitez participer à l\'atmosphère festive',
      'Notez que les banques et les bureaux gouvernementaux seront fermés',
    ],
    es: [
      'Consulte los horarios de la concentración principal y eventos culturales en Managua',
      'Planifique el transporte — las calles cerca de la plaza pueden estar cerradas',
      'Lleve agua y protección solar para las celebraciones al aire libre',
      'Vista rojo y negro si desea participar en el ambiente festivo',
      'Tenga en cuenta que los bancos y oficinas gubernamentales estarán cerrados',
    ],
  },

  relatedHolidays: ['ni_independence-day', 'ni_labour-day'],

  seo: {
    en: {
      titleTemplate: 'Revolution Day {year} Nicaragua — Countdown & History',
      descriptionTemplate: 'When is Revolution Day {year} in Nicaragua? Live countdown to July 19, Sandinista Revolution history, celebrations, and guide.',
      keywords: ['Revolution Day Nicaragua', 'Sandinista Revolution', 'July 19 Nicaragua', 'FSLN anniversary', 'Nicaragua holidays'],
    },
    fr: {
      titleTemplate: 'Jour de la Révolution {year} Nicaragua — Compte à rebours et histoire',
      descriptionTemplate: 'Quand est le Jour de la Révolution {year} au Nicaragua ? Compte à rebours, histoire de la Révolution sandiniste et guide.',
      keywords: ['Jour de la Révolution Nicaragua', 'Révolution sandiniste', '19 juillet Nicaragua', 'anniversaire FSLN', 'jours fériés Nicaragua'],
    },
    es: {
      titleTemplate: 'Día de la Revolución {year} Nicaragua — Cuenta regresiva e historia',
      descriptionTemplate: '¿Cuándo es el Día de la Revolución {year} en Nicaragua? Cuenta regresiva, historia de la Revolución Sandinista y guía.',
      keywords: ['Día de la Revolución Nicaragua', 'Revolución Sandinista', '19 de julio Nicaragua', 'aniversario FSLN', 'feriados Nicaragua'],
    },
  },

  faq: [
    {
      question: { en: 'When is Revolution Day {year} in Nicaragua?', fr: 'Quand est le Jour de la Révolution {year} au Nicaragua ?', es: '¿Cuándo es el Día de la Revolución {year} en Nicaragua?' },
      answer: {
        en: 'Revolution Day {year} in Nicaragua is on {date}. It is always July 19.',
        fr: 'Le Jour de la Révolution {year} au Nicaragua est le {date}. C\'est toujours le 19 juillet.',
        es: 'El Día de la Revolución {year} en Nicaragua es el {date}. Siempre es el 19 de julio.',
      },
    },
    {
      question: { en: 'What was the Sandinista Revolution?', fr: 'Qu\'est-ce que la Révolution sandiniste ?', es: '¿Qué fue la Revolución Sandinista?' },
      answer: {
        en: 'The Sandinista Revolution was a popular insurrection that overthrew the Somoza dictatorship in Nicaragua on July 19, 1979. Led by the FSLN (Sandinista National Liberation Front), it ended over four decades of authoritarian rule by the Somoza family.',
        fr: 'La Révolution sandiniste était une insurrection populaire qui a renversé la dictature de Somoza au Nicaragua le 19 juillet 1979. Dirigée par le FSLN (Front sandiniste de libération nationale), elle a mis fin à plus de quatre décennies de règne autoritaire de la famille Somoza.',
        es: 'La Revolución Sandinista fue una insurrección popular que derrocó la dictadura de Somoza en Nicaragua el 19 de julio de 1979. Liderada por el FSLN (Frente Sandinista de Liberación Nacional), puso fin a más de cuatro décadas de gobierno autoritario de la familia Somoza.',
      },
    },
    {
      question: { en: 'How is Revolution Day celebrated?', fr: 'Comment le Jour de la Révolution est-il célébré ?', es: '¿Cómo se celebra el Día de la Revolución?' },
      answer: {
        en: 'Revolution Day features a massive rally at Managua\'s Plaza de la Revolución with speeches, cultural performances, music, and fireworks. People wear red and black (FSLN colors) and neighborhood celebrations take place across the country.',
        fr: 'Le Jour de la Révolution présente un rassemblement massif à la Plaza de la Revolución de Managua avec des discours, des spectacles culturels, de la musique et des feux d\'artifice. Les gens portent du rouge et noir (couleurs du FSLN) et des célébrations de quartier ont lieu dans tout le pays.',
        es: 'El Día de la Revolución presenta una concentración masiva en la Plaza de la Revolución de Managua con discursos, presentaciones culturales, música y fuegos artificiales. Las personas visten rojo y negro (colores del FSLN) y celebraciones de barrio tienen lugar en todo el país.',
      },
    },
    {
      question: { en: 'Is Revolution Day a public holiday in Nicaragua?', fr: 'Le Jour de la Révolution est-il un jour férié au Nicaragua ?', es: '¿Es el Día de la Revolución un feriado en Nicaragua?' },
      answer: {
        en: 'Yes, Revolution Day on July 19 is an official public holiday in Nicaragua. Banks, government offices, and most businesses are closed.',
        fr: 'Oui, le Jour de la Révolution le 19 juillet est un jour férié officiel au Nicaragua. Les banques, les bureaux gouvernementaux et la plupart des commerces sont fermés.',
        es: 'Sí, el Día de la Revolución el 19 de julio es un feriado oficial en Nicaragua. Los bancos, oficinas gubernamentales y la mayoría de los negocios están cerrados.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '✊',
};

// ---------------------------------------------------------------------------
// Independence Day — September 15
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'ni_independence-day',
  countryCode: 'ni',
  slugs: { en: 'independence-day', fr: 'jour-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Jour de l'Indépendance", es: 'Día de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 9,
  fixedDay: 15,

  descriptions: {
    en: "Independence Day on September 15 celebrates Nicaragua's independence from Spain, declared in 1821. The holiday features school parades, marching bands, patriotic ceremonies, and the symbolic arrival of the Independence Torch from Guatemala.",
    fr: "Le Jour de l'Indépendance le 15 septembre célèbre l'indépendance du Nicaragua de l'Espagne, déclarée en 1821. La fête comprend des défilés scolaires, des fanfares, des cérémonies patriotiques et l'arrivée symbolique de la Torche de l'Indépendance du Guatemala.",
    es: "El Día de la Independencia el 15 de septiembre celebra la independencia de Nicaragua de España, declarada en 1821. La fiesta presenta desfiles escolares, bandas de guerra, ceremonias patrióticas y la llegada simbólica de la Antorcha de la Independencia desde Guatemala.",
  },

  history: {
    en: "On September 15, 1821, Central America declared independence from Spain through the Act of Independence signed in Guatemala City. Nicaragua, along with El Salvador, Guatemala, Honduras, and Costa Rica, gained its freedom from over 300 years of colonial rule.\n\nAfter independence, Nicaragua briefly joined the Mexican Empire before becoming part of the Federal Republic of Central America in 1823. When the federation dissolved, Nicaragua became an independent republic in 1838.\n\nSeptember 15 has been celebrated as Nicaragua's Independence Day ever since, with the tradition of school parades and the torch relay becoming defining elements of the celebration. The torch symbolizes the light of freedom and travels from Guatemala through all five Central American nations.",
    fr: "Le 15 septembre 1821, l'Amérique centrale a déclaré son indépendance de l'Espagne par l'Acte d'Indépendance signé à Guatemala City. Le Nicaragua, avec le Salvador, le Guatemala, le Honduras et le Costa Rica, a gagné sa liberté après plus de 300 ans de domination coloniale.\n\nAprès l'indépendance, le Nicaragua a brièvement rejoint l'Empire mexicain avant de faire partie de la République fédérale d'Amérique centrale en 1823. Lorsque la fédération s'est dissoute, le Nicaragua est devenu une république indépendante en 1838.\n\nLe 15 septembre est célébré comme le Jour de l'Indépendance du Nicaragua depuis, avec la tradition des défilés scolaires et du relais de la torche devenant des éléments définissants de la célébration. La torche symbolise la lumière de la liberté et voyage du Guatemala à travers les cinq nations centraméricaines.",
    es: "El 15 de septiembre de 1821, Centroamérica declaró su independencia de España a través del Acta de Independencia firmada en la Ciudad de Guatemala. Nicaragua, junto con El Salvador, Guatemala, Honduras y Costa Rica, ganó su libertad después de más de 300 años de dominio colonial.\n\nDespués de la independencia, Nicaragua se unió brevemente al Imperio Mexicano antes de formar parte de la República Federal de Centroamérica en 1823. Cuando la federación se disolvió, Nicaragua se convirtió en una república independiente en 1838.\n\nEl 15 de septiembre se ha celebrado como el Día de la Independencia de Nicaragua desde entonces, con la tradición de los desfiles escolares y el relevo de la antorcha convirtiéndose en elementos definitorios de la celebración. La antorcha simboliza la luz de la libertad y viaja desde Guatemala a través de las cinco naciones centroamericanas.",
  },

  traditions: {
    en: [
      'Welcoming the Independence Torch relay on the evening of September 14',
      'Watching school marching band parades through city streets',
      'Singing the national anthem at patriotic ceremonies',
      'Decorating homes and buildings with blue and white flags',
      'Attending civic ceremonies and cultural events',
      'Setting off fireworks and firecrackers',
    ],
    fr: [
      'Accueillir le relais de la Torche de l\'Indépendance le soir du 14 septembre',
      'Regarder les défilés des fanfares scolaires dans les rues',
      'Chanter l\'hymne national lors des cérémonies patriotiques',
      'Décorer les maisons et les bâtiments avec des drapeaux bleu et blanc',
      'Assister à des cérémonies civiques et des événements culturels',
      'Lancer des feux d\'artifice et des pétards',
    ],
    es: [
      'Recibir el relevo de la Antorcha de la Independencia la noche del 14 de septiembre',
      'Ver los desfiles de las bandas de guerra escolares por las calles',
      'Cantar el himno nacional en ceremonias patrióticas',
      'Decorar hogares y edificios con banderas azul y blanco',
      'Asistir a ceremonias cívicas y eventos culturales',
      'Lanzar fuegos artificiales y petardos',
    ],
  },

  funFacts: {
    en: [
      'Nicaragua shares its Independence Day with four other Central American countries — all declared independence from Spain on September 15, 1821.',
      'The Independence Torch relay that travels from Guatemala to Costa Rica symbolizes the shared freedom of all Central American nations.',
      'School marching bands compete for months to perfect their routines for the September 15 parades.',
      'Nicaragua was the largest country in the Federal Republic of Central America before becoming independent in 1838.',
      'September is known as "Mes de la Patria" (Month of the Homeland) in Nicaragua, with celebrations throughout the month.',
    ],
    fr: [
      'Le Nicaragua partage son Jour de l\'Indépendance avec quatre autres pays d\'Amérique centrale — tous ont déclaré leur indépendance de l\'Espagne le 15 septembre 1821.',
      'Le relais de la Torche de l\'Indépendance qui voyage du Guatemala au Costa Rica symbolise la liberté partagée de toutes les nations centraméricaines.',
      'Les fanfares scolaires rivalisent pendant des mois pour perfectionner leurs routines pour les défilés du 15 septembre.',
      'Le Nicaragua était le plus grand pays de la République fédérale d\'Amérique centrale avant de devenir indépendant en 1838.',
      'Septembre est connu comme « Mes de la Patria » (Mois de la Patrie) au Nicaragua, avec des célébrations tout au long du mois.',
    ],
    es: [
      'Nicaragua comparte su Día de la Independencia con otros cuatro países centroamericanos — todos declararon su independencia de España el 15 de septiembre de 1821.',
      'El relevo de la Antorcha de la Independencia que viaja de Guatemala a Costa Rica simboliza la libertad compartida de todas las naciones centroamericanas.',
      'Las bandas de guerra escolares compiten durante meses para perfeccionar sus rutinas para los desfiles del 15 de septiembre.',
      'Nicaragua era el país más grande de la República Federal de Centroamérica antes de independizarse en 1838.',
      'Septiembre es conocido como "Mes de la Patria" en Nicaragua, con celebraciones durante todo el mes.',
    ],
  },

  planningChecklist: {
    en: [
      'Attend the torch arrival ceremony on the evening of September 14',
      'Find a good viewing spot for the September 15 parades early in the morning',
      'Dress in blue and white to show patriotic spirit',
      'Check local schedules for cultural events and fireworks',
      'Prepare traditional Nicaraguan foods for the celebration',
    ],
    fr: [
      'Assistez à la cérémonie d\'arrivée de la torche le soir du 14 septembre',
      'Trouvez un bon emplacement pour voir les défilés du 15 septembre tôt le matin',
      'Habillez-vous en bleu et blanc pour montrer l\'esprit patriotique',
      'Consultez les programmes locaux pour les événements culturels et les feux d\'artifice',
      'Préparez des plats traditionnels nicaraguayens pour la célébration',
    ],
    es: [
      'Asista a la ceremonia de llegada de la antorcha la noche del 14 de septiembre',
      'Encuentre un buen lugar para ver los desfiles del 15 de septiembre temprano en la mañana',
      'Vístase de azul y blanco para mostrar espíritu patriótico',
      'Consulte los horarios locales para eventos culturales y fuegos artificiales',
      'Prepare comidas tradicionales nicaragüenses para la celebración',
    ],
  },

  relatedHolidays: ['sv_independence-day', 'cr_independence-day', 'ni_revolution-day'],

  seo: {
    en: {
      titleTemplate: 'Independence Day {year} Nicaragua — Countdown & Guide',
      descriptionTemplate: 'When is Independence Day {year} in Nicaragua? Live countdown to September 15, parade info, history, and celebration guide.',
      keywords: ['Independence Day Nicaragua', 'September 15 Nicaragua', 'Día de la Independencia', 'Nicaragua national day', 'Nicaragua holidays'],
    },
    fr: {
      titleTemplate: "Jour de l'Indépendance {year} Nicaragua — Compte à rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'Indépendance {year} au Nicaragua ? Compte à rebours, défilés, histoire et guide de célébration.",
      keywords: ["Jour de l'Indépendance Nicaragua", '15 septembre Nicaragua', 'fête nationale Nicaragua', 'indépendance Amérique centrale', 'jours fériés Nicaragua'],
    },
    es: {
      titleTemplate: 'Día de la Independencia {year} Nicaragua — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Día de la Independencia {year} en Nicaragua? Cuenta regresiva, desfiles, historia y guía de celebración.',
      keywords: ['Día de la Independencia Nicaragua', '15 de septiembre Nicaragua', 'fiestas patrias Nicaragua', 'independencia centroamericana', 'feriados Nicaragua'],
    },
  },

  faq: [
    {
      question: { en: 'When is Independence Day {year} in Nicaragua?', fr: "Quand est le Jour de l'Indépendance {year} au Nicaragua ?", es: '¿Cuándo es el Día de la Independencia {year} en Nicaragua?' },
      answer: {
        en: 'Independence Day {year} in Nicaragua is on {date}. It is always September 15.',
        fr: "Le Jour de l'Indépendance {year} au Nicaragua est le {date}. C'est toujours le 15 septembre.",
        es: 'El Día de la Independencia {year} en Nicaragua es el {date}. Siempre es el 15 de septiembre.',
      },
    },
    {
      question: { en: 'When did Nicaragua gain independence?', fr: "Quand le Nicaragua a-t-il obtenu son indépendance ?", es: '¿Cuándo obtuvo Nicaragua su independencia?' },
      answer: {
        en: 'Nicaragua declared independence from Spain on September 15, 1821. It became a fully independent republic in 1838 after the dissolution of the Federal Republic of Central America.',
        fr: "Le Nicaragua a déclaré son indépendance de l'Espagne le 15 septembre 1821. Il est devenu une république pleinement indépendante en 1838 après la dissolution de la République fédérale d'Amérique centrale.",
        es: 'Nicaragua declaró su independencia de España el 15 de septiembre de 1821. Se convirtió en una república plenamente independiente en 1838 tras la disolución de la República Federal de Centroamérica.',
      },
    },
    {
      question: { en: 'What is the Independence Torch relay?', fr: "Qu'est-ce que le relais de la Torche de l'Indépendance ?", es: '¿Qué es el relevo de la Antorcha de la Independencia?' },
      answer: {
        en: 'The Independence Torch relay is a symbolic tradition where a torch is carried from Guatemala through Honduras, El Salvador, Nicaragua, and Costa Rica, symbolizing the shared independence of the five Central American nations. It arrives on the evening of September 14.',
        fr: "Le relais de la Torche de l'Indépendance est une tradition symbolique où une torche est portée du Guatemala à travers le Honduras, le Salvador, le Nicaragua et le Costa Rica, symbolisant l'indépendance partagée des cinq nations centraméricaines. Elle arrive le soir du 14 septembre.",
        es: 'El relevo de la Antorcha de la Independencia es una tradición simbólica donde una antorcha es llevada desde Guatemala a través de Honduras, El Salvador, Nicaragua y Costa Rica, simbolizando la independencia compartida de las cinco naciones centroamericanas. Llega la noche del 14 de septiembre.',
      },
    },
    {
      question: { en: 'Is Independence Day a public holiday in Nicaragua?', fr: "Le Jour de l'Indépendance est-il un jour férié au Nicaragua ?", es: '¿Es el Día de la Independencia un feriado en Nicaragua?' },
      answer: {
        en: 'Yes, Independence Day on September 15 is an official public holiday in Nicaragua. Banks, government offices, schools, and most businesses are closed.',
        fr: "Oui, le Jour de l'Indépendance le 15 septembre est un jour férié officiel au Nicaragua. Les banques, les bureaux gouvernementaux, les écoles et la plupart des commerces sont fermés.",
        es: 'Sí, el Día de la Independencia el 15 de septiembre es un feriado oficial en Nicaragua. Los bancos, oficinas gubernamentales, escuelas y la mayoría de los negocios están cerrados.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '🇳🇮',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'ni_christmas',
  countryCode: 'ni',
  slugs: { en: 'christmas', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noël', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: "Christmas Day on December 25 is one of the most important celebrations in Nicaragua. The holiday season is uniquely enriched by La Purísima (December 7-8), a distinctly Nicaraguan celebration of the Immaculate Conception that serves as a beloved prelude to Christmas festivities.",
    fr: "Noël le 25 décembre est l'une des célébrations les plus importantes au Nicaragua. La saison des fêtes est uniquement enrichie par La Purísima (7-8 décembre), une célébration distinctement nicaraguayenne de l'Immaculée Conception qui sert de prélude bien-aimé aux festivités de Noël.",
    es: "La Navidad el 25 de diciembre es una de las celebraciones más importantes en Nicaragua. La temporada festiva se enriquece de manera única por La Purísima (7-8 de diciembre), una celebración distintamente nicaragüense de la Inmaculada Concepción que sirve como un querido preludio a las festividades navideñas.",
  },

  history: {
    en: "Christmas in Nicaragua has been celebrated since the Spanish colonial era, but the tradition has evolved to include uniquely Nicaraguan customs. The most distinctive is La Purísima, a celebration of the Virgin Mary's Immaculate Conception on December 7-8 that features altars, singing, and the giving of treats.\n\nLa Gritería ('The Shouting') on December 7 is the highlight of La Purísima, when people go from house to house singing hymns to the Virgin Mary and receiving sweets, fruits, and small gifts. The tradition dates back to the 18th century and is unique to Nicaragua.\n\nChristmas itself centers on Nochebuena (Christmas Eve), with families gathering for dinner, attending midnight Mass, and exchanging gifts. Nacatamales are the essential holiday food, with families often spending days preparing them.",
    fr: "Noël au Nicaragua est célébré depuis l'ère coloniale espagnole, mais la tradition a évolué pour inclure des coutumes uniquement nicaraguayennes. La plus distinctive est La Purísima, une célébration de l'Immaculée Conception de la Vierge Marie les 7-8 décembre avec des autels, des chants et la distribution de friandises.\n\nLa Gritería (« Les Cris ») le 7 décembre est le point culminant de La Purísima, quand les gens vont de maison en maison en chantant des hymnes à la Vierge Marie et en recevant des bonbons, des fruits et de petits cadeaux. La tradition remonte au XVIIIe siècle et est unique au Nicaragua.\n\nNoël lui-même se centre sur la Nochebuena (veille de Noël), avec les familles se réunissant pour le dîner, assistant à la messe de minuit et échangeant des cadeaux. Les nacatamales sont la nourriture essentielle des fêtes, les familles passant souvent des jours à les préparer.",
    es: "La Navidad en Nicaragua se celebra desde la era colonial española, pero la tradición ha evolucionado para incluir costumbres únicamente nicaragüenses. La más distintiva es La Purísima, una celebración de la Inmaculada Concepción de la Virgen María los 7-8 de diciembre que presenta altares, cantos y la entrega de golosinas.\n\nLa Gritería del 7 de diciembre es el punto culminante de La Purísima, cuando las personas van de casa en casa cantando himnos a la Virgen María y recibiendo dulces, frutas y pequeños regalos. La tradición se remonta al siglo XVIII y es única de Nicaragua.\n\nLa Navidad en sí se centra en la Nochebuena, con las familias reuniéndose para cenar, asistiendo a la misa de gallo e intercambiando regalos. Los nacatamales son la comida esencial de las fiestas, con familias pasando a menudo días preparándolos.",
  },

  traditions: {
    en: [
      'Celebrating La Purísima and La Gritería on December 7-8',
      'Preparing nacatamales — the essential Nicaraguan Christmas food',
      'Attending midnight Mass (Misa de Gallo) on Christmas Eve',
      'Exchanging gifts at midnight on Nochebuena',
      'Setting up a nacimiento (nativity scene) in the home',
      'Setting off fireworks and firecrackers at midnight',
      'Going from house to house singing during La Gritería',
    ],
    fr: [
      'Célébrer La Purísima et La Gritería les 7-8 décembre',
      'Préparer des nacatamales — la nourriture de Noël nicaraguayenne essentielle',
      'Assister à la messe de minuit (Misa de Gallo) la veille de Noël',
      'Échanger des cadeaux à minuit à la Nochebuena',
      'Installer un nacimiento (crèche) dans la maison',
      'Lancer des feux d\'artifice et des pétards à minuit',
      'Aller de maison en maison en chantant pendant La Gritería',
    ],
    es: [
      'Celebrar La Purísima y La Gritería el 7-8 de diciembre',
      'Preparar nacatamales — la comida navideña nicaragüense esencial',
      'Asistir a la misa de gallo en Nochebuena',
      'Intercambiar regalos a medianoche en Nochebuena',
      'Montar un nacimiento (pesebre) en el hogar',
      'Lanzar fuegos artificiales y petardos a medianoche',
      'Ir de casa en casa cantando durante La Gritería',
    ],
  },

  funFacts: {
    en: [
      'La Gritería is a uniquely Nicaraguan tradition where people shout "¿Quién causa tanta alegría?" (Who causes such joy?) and receive the reply "¡La Concepción de María!" (The Conception of Mary!).',
      'During La Purísima, households set up elaborate altars to the Virgin Mary and give away treats to visitors who come to sing.',
      'Nacatamales can take up to 12 hours to prepare, and families often make dozens or hundreds for the Christmas season.',
      'The traditional Nicaraguan drink "chicha de maíz" is especially popular during the Christmas season.',
      'Many Nicaraguans consider La Purísima (December 7-8) to be an even bigger celebration than Christmas Day itself.',
    ],
    fr: [
      'La Gritería est une tradition uniquement nicaraguayenne où les gens crient « ¿Quién causa tanta alegría ? » (Qui cause tant de joie ?) et reçoivent la réponse « ¡La Concepción de María ! » (La Conception de Marie !).',
      'Pendant La Purísima, les ménages installent des autels élaborés à la Vierge Marie et offrent des friandises aux visiteurs qui viennent chanter.',
      'Les nacatamales peuvent prendre jusqu\'à 12 heures à préparer, et les familles en font souvent des dizaines ou des centaines pour la saison de Noël.',
      'La boisson traditionnelle nicaraguayenne « chicha de maíz » est particulièrement populaire pendant la saison de Noël.',
      'De nombreux Nicaraguayens considèrent La Purísima (7-8 décembre) comme une célébration encore plus grande que le jour de Noël lui-même.',
    ],
    es: [
      'La Gritería es una tradición únicamente nicaragüense donde las personas gritan "¿Quién causa tanta alegría?" y reciben la respuesta "¡La Concepción de María!".',
      'Durante La Purísima, los hogares montan elaborados altares a la Virgen María y regalan golosinas a los visitantes que vienen a cantar.',
      'Los nacatamales pueden tomar hasta 12 horas en prepararse, y las familias a menudo hacen docenas o cientos para la temporada navideña.',
      'La bebida tradicional nicaragüense "chicha de maíz" es especialmente popular durante la temporada navideña.',
      'Muchos nicaragüenses consideran La Purísima (7-8 de diciembre) una celebración aún más grande que el día de Navidad en sí.',
    ],
  },

  planningChecklist: {
    en: [
      'Begin preparing nacatamales several days before Christmas — gather plantain leaves and ingredients early',
      'Set up altars for La Purísima in early December and stock up on treats to give away',
      'Purchase gifts for family members well in advance',
      'Plan your Nochebuena dinner menu and invite extended family',
      'Stock up on fireworks and firecrackers for the midnight celebration',
    ],
    fr: [
      'Commencez à préparer les nacatamales plusieurs jours avant Noël — rassemblez les feuilles de plantain et les ingrédients tôt',
      'Installez les autels pour La Purísima début décembre et approvisionnez-vous en friandises à distribuer',
      'Achetez les cadeaux pour les membres de la famille bien à l\'avance',
      'Planifiez votre menu de dîner de Nochebuena et invitez la famille élargie',
      'Faites provision de feux d\'artifice et de pétards pour la célébration de minuit',
    ],
    es: [
      'Comience a preparar los nacatamales varios días antes de Navidad — reúna hojas de plátano e ingredientes temprano',
      'Monte altares para La Purísima a principios de diciembre y abastézcase de golosinas para regalar',
      'Compre regalos para los miembros de la familia con anticipación',
      'Planifique su menú de cena de Nochebuena e invite a la familia extendida',
      'Abastézcase de fuegos artificiales y petardos para la celebración de medianoche',
    ],
  },

  relatedHolidays: ['ni_new-years-day', 'ni_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Christmas {year} Nicaragua — Countdown & Traditions',
      descriptionTemplate: 'When is Christmas {year} in Nicaragua? Live countdown, La Purísima, nacatamales, and Nicaraguan Christmas traditions.',
      keywords: ['Christmas Nicaragua', 'Navidad Nicaragua', 'La Purísima', 'La Gritería', 'nacatamales Christmas'],
    },
    fr: {
      titleTemplate: 'Noël {year} Nicaragua — Compte à rebours et traditions',
      descriptionTemplate: 'Quand est Noël {year} au Nicaragua ? Compte à rebours, La Purísima, nacatamales et traditions de Noël nicaraguayennes.',
      keywords: ['Noël Nicaragua', 'Navidad Nicaragua', 'La Purísima', 'La Gritería', 'traditions Noël Nicaragua'],
    },
    es: {
      titleTemplate: 'Navidad {year} Nicaragua — Cuenta regresiva y tradiciones',
      descriptionTemplate: '¿Cuándo es Navidad {year} en Nicaragua? Cuenta regresiva, La Purísima, nacatamales y tradiciones navideñas nicaragüenses.',
      keywords: ['Navidad Nicaragua', 'La Purísima Nicaragua', 'La Gritería', 'nacatamales navideños', 'tradiciones navideñas Nicaragua'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in Nicaragua?', fr: 'Quand est Noël {year} au Nicaragua ?', es: '¿Cuándo es Navidad {year} en Nicaragua?' },
      answer: {
        en: 'Christmas {year} in Nicaragua is on {date}. It is always December 25.',
        fr: 'Noël {year} au Nicaragua est le {date}. C\'est toujours le 25 décembre.',
        es: 'Navidad {year} en Nicaragua es el {date}. Siempre es el 25 de diciembre.',
      },
    },
    {
      question: { en: 'What is La Purísima in Nicaragua?', fr: 'Qu\'est-ce que La Purísima au Nicaragua ?', es: '¿Qué es La Purísima en Nicaragua?' },
      answer: {
        en: 'La Purísima is a uniquely Nicaraguan celebration of the Immaculate Conception held on December 7-8. It features La Gritería, where people go from house to house singing hymns to the Virgin Mary and receiving sweets and treats.',
        fr: 'La Purísima est une célébration uniquement nicaraguayenne de l\'Immaculée Conception tenue les 7-8 décembre. Elle présente La Gritería, où les gens vont de maison en maison en chantant des hymnes à la Vierge Marie et en recevant des bonbons et des friandises.',
        es: 'La Purísima es una celebración únicamente nicaragüense de la Inmaculada Concepción celebrada el 7-8 de diciembre. Presenta La Gritería, donde las personas van de casa en casa cantando himnos a la Virgen María y recibiendo dulces y golosinas.',
      },
    },
    {
      question: { en: 'What is the traditional Christmas food in Nicaragua?', fr: 'Quel est le plat traditionnel de Noël au Nicaragua ?', es: '¿Cuál es la comida navideña tradicional en Nicaragua?' },
      answer: {
        en: 'Nacatamales are the essential Nicaraguan Christmas food — large tamales made with corn dough, seasoned meat, rice, and vegetables, wrapped in plantain leaves and steamed for hours.',
        fr: 'Les nacatamales sont la nourriture de Noël nicaraguayenne essentielle — de grands tamales faits de pâte de maïs, de viande assaisonnée, de riz et de légumes, enveloppés dans des feuilles de plantain et cuits à la vapeur pendant des heures.',
        es: 'Los nacatamales son la comida navideña nicaragüense esencial — grandes tamales hechos de masa de maíz, carne sazonada, arroz y verduras, envueltos en hojas de plátano y cocidos al vapor durante horas.',
      },
    },
    {
      question: { en: 'What is La Gritería?', fr: 'Qu\'est-ce que La Gritería ?', es: '¿Qué es La Gritería?' },
      answer: {
        en: 'La Gritería ("The Shouting") is a Nicaraguan tradition on December 7 where people shout "¿Quién causa tanta alegría?" ("Who causes such joy?") and others reply "¡La Concepción de María!" ("The Conception of Mary!"). People visit homes with altars to sing and receive treats.',
        fr: 'La Gritería (« Les Cris ») est une tradition nicaraguayenne du 7 décembre où les gens crient « ¿Quién causa tanta alegría ? » (« Qui cause tant de joie ? ») et les autres répondent « ¡La Concepción de María ! » (« La Conception de Marie ! »). Les gens visitent les maisons avec des autels pour chanter et recevoir des friandises.',
        es: 'La Gritería es una tradición nicaragüense del 7 de diciembre donde las personas gritan "¿Quién causa tanta alegría?" y otros responden "¡La Concepción de María!". Las personas visitan hogares con altares para cantar y recibir golosinas.',
      },
    },
  ],

  colorTheme: 'christmas',
  icon: '🎄',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const niHolidays: HolidayData[] = [
  newYearsDay,
  holyThursday,
  labourDay,
  revolutionDay,
  independenceDay,
  christmas,
];

export default niHolidays;
