/**
 * El Salvador holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getHolyThursday } from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'sv_new-years-day',
  countryCode: 'sv',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'ano-nuevo' },
  names: { en: "New Year's Day", fr: "Jour de l'An", es: 'Año Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 marks the start of the calendar year in El Salvador. Families gather for festive meals and fireworks light up the skies across cities like San Salvador, Santa Ana, and San Miguel.",
    fr: "Le Jour de l'An, le 1er janvier, marque le début de l'année civile au Salvador. Les familles se réunissent pour des repas festifs et des feux d'artifice illuminent le ciel dans les villes comme San Salvador, Santa Ana et San Miguel.",
    es: 'El Año Nuevo, el 1 de enero, marca el inicio del año calendario en El Salvador. Las familias se reúnen para comidas festivas y los fuegos artificiales iluminan los cielos en ciudades como San Salvador, Santa Ana y San Miguel.',
  },

  history: {
    en: "New Year's celebrations in El Salvador blend Catholic traditions with indigenous customs. The evening of December 31 is marked by family gatherings, special meals, and the burning of effigies called 'muñecos de año viejo' representing the old year.\n\nThe tradition of celebrating the new year has deep roots in Salvadoran culture, with fireworks becoming a central part of the festivities during the 20th century. Churches hold special masses, and many Salvadorans attend midnight services to give thanks for the year past.\n\nIn recent decades, public celebrations in plazas and parks have grown in popularity, with live music, dancing, and communal festivities bringing communities together across the country.",
    fr: "Les célébrations du Nouvel An au Salvador mélangent traditions catholiques et coutumes autochtones. La soirée du 31 décembre est marquée par des réunions familiales, des repas spéciaux et la combustion d'effigies appelées 'muñecos de año viejo' représentant l'ancienne année.\n\nLa tradition de célébrer le nouvel an a des racines profondes dans la culture salvadorienne, les feux d'artifice devenant un élément central des festivités au cours du XXe siècle. Les églises tiennent des messes spéciales, et de nombreux Salvadoriens assistent aux services de minuit pour rendre grâce pour l'année passée.\n\nAu cours des dernières décennies, les célébrations publiques dans les places et les parcs ont gagné en popularité, avec de la musique live, de la danse et des festivités communautaires rassemblant les communautés à travers le pays.",
    es: "Las celebraciones de Año Nuevo en El Salvador mezclan tradiciones católicas con costumbres indígenas. La noche del 31 de diciembre está marcada por reuniones familiares, comidas especiales y la quema de efigies llamadas 'muñecos de año viejo' que representan el año que termina.\n\nLa tradición de celebrar el año nuevo tiene raíces profundas en la cultura salvadoreña, con los fuegos artificiales convirtiéndose en parte central de las festividades durante el siglo XX. Las iglesias celebran misas especiales, y muchos salvadoreños asisten a servicios de medianoche para dar gracias por el año pasado.\n\nEn las últimas décadas, las celebraciones públicas en plazas y parques han crecido en popularidad, con música en vivo, baile y festividades comunitarias que unen a las comunidades de todo el país.",
  },

  traditions: {
    en: [
      'Burning "muñecos de año viejo" — effigies representing the old year',
      'Setting off fireworks and firecrackers at midnight',
      'Gathering with family for a special dinner on New Year\'s Eve',
      'Attending midnight Mass at local churches',
      'Wearing new clothes to symbolize a fresh start',
      'Eating twelve grapes at midnight for good luck',
      'Embracing family and neighbors at the stroke of midnight',
    ],
    fr: [
      'Brûler des « muñecos de año viejo » — des effigies représentant l\'ancienne année',
      'Lancer des feux d\'artifice et des pétards à minuit',
      'Se réunir en famille pour un dîner spécial le soir du Nouvel An',
      'Assister à la messe de minuit dans les églises locales',
      'Porter des vêtements neufs pour symboliser un nouveau départ',
      'Manger douze raisins à minuit pour la bonne chance',
      'Embrasser la famille et les voisins au coup de minuit',
    ],
    es: [
      'Quemar "muñecos de año viejo" — efigies que representan el año viejo',
      'Lanzar fuegos artificiales y petardos a medianoche',
      'Reunirse en familia para una cena especial en Nochevieja',
      'Asistir a la misa de medianoche en las iglesias locales',
      'Estrenar ropa nueva para simbolizar un nuevo comienzo',
      'Comer doce uvas a medianoche para la buena suerte',
      'Abrazar a la familia y los vecinos al dar las doce',
    ],
  },

  funFacts: {
    en: [
      'Many Salvadorans burn old furniture or clothing along with their "muñecos" to symbolically leave behind the bad of the previous year.',
      'The tradition of eating twelve grapes at midnight was adopted from Spain and is widely practiced across El Salvador.',
      'In El Salvador, some people run around the block with a suitcase at midnight, believing it will bring travel opportunities in the new year.',
      'Fireworks displays in San Salvador can last well over an hour, turning the entire sky into a colorful spectacle.',
      'Traditional New Year foods include tamales, pan con pavo (turkey sandwiches), and horchata.',
    ],
    fr: [
      'De nombreux Salvadoriens brûlent de vieux meubles ou vêtements avec leurs « muñecos » pour symboliquement laisser derrière eux le mauvais de l\'année précédente.',
      'La tradition de manger douze raisins à minuit a été adoptée de l\'Espagne et est largement pratiquée au Salvador.',
      'Au Salvador, certaines personnes courent autour du pâté de maisons avec une valise à minuit, croyant que cela apportera des opportunités de voyage dans la nouvelle année.',
      'Les feux d\'artifice à San Salvador peuvent durer plus d\'une heure, transformant le ciel entier en un spectacle coloré.',
      'Les plats traditionnels du Nouvel An comprennent des tamales, du pan con pavo (sandwichs à la dinde) et de l\'horchata.',
    ],
    es: [
      'Muchos salvadoreños queman muebles viejos o ropa junto con sus "muñecos" para simbólicamente dejar atrás lo malo del año anterior.',
      'La tradición de comer doce uvas a medianoche fue adoptada de España y se practica ampliamente en todo El Salvador.',
      'En El Salvador, algunas personas corren alrededor de la manzana con una maleta a medianoche, creyendo que traerá oportunidades de viaje en el nuevo año.',
      'Los espectáculos de fuegos artificiales en San Salvador pueden durar más de una hora, convirtiendo todo el cielo en un espectáculo colorido.',
      'Las comidas tradicionales de Año Nuevo incluyen tamales, pan con pavo y horchata.',
    ],
  },

  planningChecklist: {
    en: [
      'Purchase fireworks and firecrackers well in advance as they sell out quickly',
      'Plan your New Year\'s Eve family dinner menu with traditional Salvadoran dishes',
      'Prepare your "muñeco de año viejo" effigy for the midnight burning',
      'Buy grapes for the midnight tradition of eating twelve for good luck',
      'Arrange transportation if attending public celebrations in San Salvador',
    ],
    fr: [
      'Achetez des feux d\'artifice et des pétards bien à l\'avance car ils se vendent rapidement',
      'Planifiez votre menu de dîner familial du Nouvel An avec des plats traditionnels salvadoriens',
      'Préparez votre effigie « muñeco de año viejo » pour la combustion de minuit',
      'Achetez des raisins pour la tradition de minuit d\'en manger douze pour la bonne chance',
      'Organisez le transport si vous assistez à des célébrations publiques à San Salvador',
    ],
    es: [
      'Compre fuegos artificiales y petardos con anticipación ya que se agotan rápidamente',
      'Planifique el menú de la cena familiar de Nochevieja con platillos tradicionales salvadoreños',
      'Prepare su "muñeco de año viejo" para la quema de medianoche',
      'Compre uvas para la tradición de medianoche de comer doce para la buena suerte',
      'Organice transporte si asistirá a celebraciones públicas en San Salvador',
    ],
  },

  relatedHolidays: ['sv_christmas'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} El Salvador — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in El Salvador? Live countdown to January 1, traditions, and celebration guide.",
      keywords: ["New Year's Day El Salvador", 'Año Nuevo El Salvador', 'January 1 El Salvador', "New Year's countdown", 'El Salvador holidays'],
    },
    fr: {
      titleTemplate: "Jour de l'An {year} Salvador — Compte à rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'An {year} au Salvador ? Compte à rebours, traditions et guide de célébration.",
      keywords: ["Jour de l'An Salvador", 'Nouvel An Salvador', '1er janvier Salvador', 'compte à rebours Nouvel An', 'jours fériés Salvador'],
    },
    es: {
      titleTemplate: 'Año Nuevo {year} El Salvador — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Año Nuevo {year} en El Salvador? Cuenta regresiva en vivo, tradiciones y guía de celebración.',
      keywords: ['Año Nuevo El Salvador', '1 de enero El Salvador', 'cuenta regresiva Año Nuevo', 'feriados El Salvador', 'celebración Año Nuevo'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in El Salvador?", fr: "Quand est le Jour de l'An {year} au Salvador ?", es: '¿Cuándo es el Año Nuevo {year} en El Salvador?' },
      answer: {
        en: "New Year's Day {year} in El Salvador is on {date}. It is always January 1 and is an official public holiday.",
        fr: "Le Jour de l'An {year} au Salvador est le {date}. C'est toujours le 1er janvier et c'est un jour férié officiel.",
        es: 'El Año Nuevo {year} en El Salvador es el {date}. Siempre es el 1 de enero y es un feriado oficial.',
      },
    },
    {
      question: { en: 'How do Salvadorans celebrate New Year\'s Eve?', fr: 'Comment les Salvadoriens célèbrent-ils le Nouvel An ?', es: '¿Cómo celebran los salvadoreños la Nochevieja?' },
      answer: {
        en: 'Salvadorans celebrate with family dinners, fireworks, burning of "muñecos de año viejo" effigies, and attending midnight Mass. Many also follow the tradition of eating twelve grapes at midnight.',
        fr: 'Les Salvadoriens célèbrent avec des dîners en famille, des feux d\'artifice, la combustion d\'effigies « muñecos de año viejo » et en assistant à la messe de minuit. Beaucoup suivent aussi la tradition de manger douze raisins à minuit.',
        es: 'Los salvadoreños celebran con cenas familiares, fuegos artificiales, quema de "muñecos de año viejo" y asistiendo a la misa de medianoche. Muchos también siguen la tradición de comer doce uvas a medianoche.',
      },
    },
    {
      question: { en: 'What traditional foods are eaten on New Year\'s in El Salvador?', fr: 'Quels plats traditionnels mange-t-on au Nouvel An au Salvador ?', es: '¿Qué comidas tradicionales se comen en Año Nuevo en El Salvador?' },
      answer: {
        en: 'Traditional New Year foods in El Salvador include tamales, pan con pavo (turkey bread), horchata, and various festive dishes. Families often prepare large meals to share.',
        fr: 'Les plats traditionnels du Nouvel An au Salvador comprennent des tamales, du pan con pavo (pain à la dinde), de l\'horchata et divers plats festifs. Les familles préparent souvent de grands repas à partager.',
        es: 'Las comidas tradicionales de Año Nuevo en El Salvador incluyen tamales, pan con pavo, horchata y diversos platillos festivos. Las familias suelen preparar grandes comidas para compartir.',
      },
    },
    {
      question: { en: 'Is New Year\'s Day a public holiday in El Salvador?', fr: "Le Jour de l'An est-il un jour férié au Salvador ?", es: '¿Es el Año Nuevo un feriado en El Salvador?' },
      answer: {
        en: "Yes, New Year's Day is an official public holiday in El Salvador. Banks, government offices, and most businesses are closed.",
        fr: "Oui, le Jour de l'An est un jour férié officiel au Salvador. Les banques, les bureaux gouvernementaux et la plupart des commerces sont fermés.",
        es: 'Sí, el Año Nuevo es un feriado oficial en El Salvador. Los bancos, oficinas gubernamentales y la mayoría de los negocios están cerrados.',
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
  id: 'sv_holy-thursday',
  countryCode: 'sv',
  slugs: { en: 'holy-thursday', fr: 'jeudi-saint', es: 'jueves-santo' },
  names: { en: 'Holy Thursday', fr: 'Jeudi Saint', es: 'Jueves Santo' },

  dateType: 'calculated',
  calculateDate: getHolyThursday,

  descriptions: {
    en: 'Holy Thursday marks the beginning of the Semana Santa (Holy Week) Triduum in El Salvador. It is one of the most important religious observances in the country, with elaborate processions, carpet-making, and solemn church services across every city and town.',
    fr: "Le Jeudi Saint marque le début du Triduum de la Semana Santa (Semaine Sainte) au Salvador. C'est l'une des observances religieuses les plus importantes du pays, avec des processions élaborées, la fabrication de tapis et des services religieux solennels dans chaque ville et village.",
    es: 'El Jueves Santo marca el inicio del Triduo de la Semana Santa en El Salvador. Es una de las observancias religiosas más importantes del país, con procesiones elaboradas, elaboración de alfombras y servicios religiosos solemnes en cada ciudad y pueblo.',
  },

  history: {
    en: "Semana Santa in El Salvador dates back to the Spanish colonial period when Catholic missionaries introduced the observance in the 16th century. The traditions have blended with indigenous practices over centuries, creating uniquely Salvadoran expressions of faith.\n\nHoly Thursday commemorates the Last Supper of Jesus with his apostles. In El Salvador, it marks the start of the most solemn period of Holy Week, with many workplaces closing for the entire week. The city of Sonsonate is particularly famous for its elaborate processions.\n\nThe tradition of making colorful sawdust carpets (alfombras) on the streets for processions to pass over has become an art form in many Salvadoran towns, with communities spending days preparing intricate designs.",
    fr: "La Semana Santa au Salvador remonte à la période coloniale espagnole lorsque les missionnaires catholiques ont introduit l'observance au XVIe siècle. Les traditions se sont mélangées aux pratiques autochtones au fil des siècles, créant des expressions de foi uniquement salvadoriennes.\n\nLe Jeudi Saint commémore la Dernière Cène de Jésus avec ses apôtres. Au Salvador, il marque le début de la période la plus solennelle de la Semaine Sainte, de nombreux lieux de travail fermant pour toute la semaine. La ville de Sonsonate est particulièrement célèbre pour ses processions élaborées.\n\nLa tradition de fabriquer des tapis colorés en sciure de bois (alfombras) dans les rues pour que les processions passent dessus est devenue un art dans de nombreuses villes salvadoriennes, les communautés passant des jours à préparer des dessins complexes.",
    es: "La Semana Santa en El Salvador se remonta al período colonial español cuando los misioneros católicos introdujeron la observancia en el siglo XVI. Las tradiciones se han mezclado con prácticas indígenas a lo largo de los siglos, creando expresiones de fe únicamente salvadoreñas.\n\nEl Jueves Santo conmemora la Última Cena de Jesús con sus apóstoles. En El Salvador, marca el inicio del período más solemne de la Semana Santa, con muchos lugares de trabajo cerrando durante toda la semana. La ciudad de Sonsonate es particularmente famosa por sus elaboradas procesiones.\n\nLa tradición de hacer coloridas alfombras de aserrín en las calles para que las procesiones pasen sobre ellas se ha convertido en una forma de arte en muchos pueblos salvadoreños, con comunidades pasando días preparando diseños intrincados.",
  },

  traditions: {
    en: [
      'Attending solemn church services commemorating the Last Supper',
      'Watching or participating in elaborate street processions with floats',
      'Creating colorful sawdust carpets (alfombras) on the streets',
      'Visiting seven churches — the tradition of "Visita de los Siete Templos"',
      'Preparing traditional Semana Santa foods like torrejas and marquesote',
      'Decorating floats with fresh flowers and religious imagery',
      'Observing a period of fasting and abstinence from meat',
    ],
    fr: [
      'Assister à des services religieux solennels commémorant la Dernière Cène',
      'Regarder ou participer à des processions de rue élaborées avec des chars',
      'Créer des tapis colorés en sciure de bois (alfombras) dans les rues',
      'Visiter sept églises — la tradition de la « Visita de los Siete Templos »',
      'Préparer des plats traditionnels de Semana Santa comme les torrejas et le marquesote',
      'Décorer des chars avec des fleurs fraîches et des images religieuses',
      'Observer une période de jeûne et d\'abstinence de viande',
    ],
    es: [
      'Asistir a servicios religiosos solemnes que conmemoran la Última Cena',
      'Ver o participar en elaboradas procesiones callejeras con andas',
      'Crear coloridas alfombras de aserrín en las calles',
      'Visitar siete iglesias — la tradición de la "Visita de los Siete Templos"',
      'Preparar comidas tradicionales de Semana Santa como torrejas y marquesote',
      'Decorar andas con flores frescas e imaginería religiosa',
      'Observar un período de ayuno y abstinencia de carne',
    ],
  },

  funFacts: {
    en: [
      'Sonsonate\'s Semana Santa processions are among the most elaborate in all of Central America, attracting thousands of visitors.',
      'The sawdust carpets (alfombras) can take communities up to 12 hours to create, only to be walked over by the procession in minutes.',
      'Torrejas, a traditional Semana Santa dessert similar to French toast soaked in honey syrup, are eaten almost exclusively during Holy Week.',
      'Some Salvadoran processions feature penitents wearing purple robes and hoods, a tradition dating back to medieval Spain.',
      'Many Salvadorans take the entire Semana Santa week off, making it the longest holiday period in the country.',
    ],
    fr: [
      'Les processions de Semana Santa de Sonsonate sont parmi les plus élaborées de toute l\'Amérique centrale, attirant des milliers de visiteurs.',
      'Les tapis de sciure de bois (alfombras) peuvent prendre jusqu\'à 12 heures aux communautés pour les créer, pour être piétinés par la procession en quelques minutes.',
      'Les torrejas, un dessert traditionnel de Semana Santa similaire au pain perdu trempé dans du sirop de miel, ne sont consommées presque exclusivement que pendant la Semaine Sainte.',
      'Certaines processions salvadoriennes présentent des pénitents portant des robes violettes et des cagoules, une tradition remontant à l\'Espagne médiévale.',
      'De nombreux Salvadoriens prennent toute la semaine de Semana Santa en congé, ce qui en fait la plus longue période de vacances du pays.',
    ],
    es: [
      'Las procesiones de Semana Santa de Sonsonate son de las más elaboradas de toda Centroamérica, atrayendo a miles de visitantes.',
      'Las alfombras de aserrín pueden tomar hasta 12 horas en ser creadas por las comunidades, solo para ser pisadas por la procesión en minutos.',
      'Las torrejas, un postre tradicional de Semana Santa similar al pan francés bañado en miel, se comen casi exclusivamente durante la Semana Santa.',
      'Algunas procesiones salvadoreñas presentan penitentes con túnicas moradas y capirotes, una tradición que data de la España medieval.',
      'Muchos salvadoreños toman toda la semana de Semana Santa libre, convirtiéndola en el período vacacional más largo del país.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan travel to Sonsonate or other towns early — accommodations fill up during Semana Santa',
      'Purchase ingredients for traditional foods like torrejas and marquesote',
      'Check local procession schedules and routes in your area',
      'Prepare for road closures and heavy traffic during processions',
      'Bring sunscreen and water — Semana Santa falls during the hot dry season',
    ],
    fr: [
      'Planifiez votre voyage à Sonsonate ou dans d\'autres villes tôt — les hébergements se remplissent pendant la Semana Santa',
      'Achetez les ingrédients pour les plats traditionnels comme les torrejas et le marquesote',
      'Vérifiez les horaires et itinéraires des processions locales dans votre région',
      'Préparez-vous aux fermetures de routes et à la circulation dense pendant les processions',
      'Apportez de la crème solaire et de l\'eau — la Semana Santa tombe pendant la saison chaude et sèche',
    ],
    es: [
      'Planifique viajes a Sonsonate u otros pueblos con anticipación — los alojamientos se llenan durante Semana Santa',
      'Compre ingredientes para comidas tradicionales como torrejas y marquesote',
      'Consulte los horarios y rutas de las procesiones locales en su área',
      'Prepárese para cierres de calles y tráfico pesado durante las procesiones',
      'Lleve protector solar y agua — la Semana Santa cae durante la temporada calurosa y seca',
    ],
  },

  relatedHolidays: ['sv_christmas', 'ni_holy-thursday', 'cr_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Holy Thursday {year} El Salvador — Semana Santa Countdown',
      descriptionTemplate: 'When is Holy Thursday {year} in El Salvador? Live countdown, Semana Santa traditions, processions, and celebration guide.',
      keywords: ['Holy Thursday El Salvador', 'Semana Santa El Salvador', 'Jueves Santo', 'El Salvador Holy Week', 'Sonsonate processions'],
    },
    fr: {
      titleTemplate: 'Jeudi Saint {year} Salvador — Compte à rebours Semana Santa',
      descriptionTemplate: 'Quand est le Jeudi Saint {year} au Salvador ? Compte à rebours, traditions de la Semana Santa, processions et guide.',
      keywords: ['Jeudi Saint Salvador', 'Semana Santa Salvador', 'Semaine Sainte Salvador', 'processions Salvador', 'Jueves Santo'],
    },
    es: {
      titleTemplate: 'Jueves Santo {year} El Salvador — Cuenta regresiva Semana Santa',
      descriptionTemplate: '¿Cuándo es el Jueves Santo {year} en El Salvador? Cuenta regresiva, tradiciones de Semana Santa, procesiones y guía.',
      keywords: ['Jueves Santo El Salvador', 'Semana Santa El Salvador', 'procesiones Semana Santa', 'Sonsonate procesiones', 'Semana Santa tradiciones'],
    },
  },

  faq: [
    {
      question: { en: 'When is Holy Thursday {year} in El Salvador?', fr: 'Quand est le Jeudi Saint {year} au Salvador ?', es: '¿Cuándo es el Jueves Santo {year} en El Salvador?' },
      answer: {
        en: 'Holy Thursday {year} in El Salvador falls on {date}. It is a moveable holiday tied to the Easter calendar and its date changes each year.',
        fr: 'Le Jeudi Saint {year} au Salvador tombe le {date}. C\'est un jour férié mobile lié au calendrier de Pâques et sa date change chaque année.',
        es: 'El Jueves Santo {year} en El Salvador cae el {date}. Es un feriado móvil ligado al calendario de Pascua y su fecha cambia cada año.',
      },
    },
    {
      question: { en: 'What is Semana Santa in El Salvador?', fr: 'Qu\'est-ce que la Semana Santa au Salvador ?', es: '¿Qué es la Semana Santa en El Salvador?' },
      answer: {
        en: 'Semana Santa (Holy Week) is the most important religious celebration in El Salvador, running from Palm Sunday to Easter Sunday. It features elaborate street processions, sawdust carpet art, traditional foods, and solemn church services.',
        fr: 'La Semana Santa (Semaine Sainte) est la célébration religieuse la plus importante au Salvador, allant du dimanche des Rameaux au dimanche de Pâques. Elle présente des processions de rue élaborées, de l\'art de tapis en sciure, des plats traditionnels et des services religieux solennels.',
        es: 'La Semana Santa es la celebración religiosa más importante en El Salvador, que va del Domingo de Ramos al Domingo de Pascua. Presenta elaboradas procesiones callejeras, arte de alfombras de aserrín, comidas tradicionales y servicios religiosos solemnes.',
      },
    },
    {
      question: { en: 'Where are the best Semana Santa processions in El Salvador?', fr: 'Où sont les meilleures processions de Semana Santa au Salvador ?', es: '¿Dónde están las mejores procesiones de Semana Santa en El Salvador?' },
      answer: {
        en: 'Sonsonate is widely considered to have the most elaborate Semana Santa processions in El Salvador. Other notable celebrations take place in San Salvador, Izalco, and Santa Ana.',
        fr: 'Sonsonate est largement considérée comme ayant les processions de Semana Santa les plus élaborées au Salvador. D\'autres célébrations notables ont lieu à San Salvador, Izalco et Santa Ana.',
        es: 'Sonsonate es ampliamente considerada como la ciudad con las procesiones de Semana Santa más elaboradas de El Salvador. Otras celebraciones notables tienen lugar en San Salvador, Izalco y Santa Ana.',
      },
    },
    {
      question: { en: 'What are torrejas?', fr: 'Que sont les torrejas ?', es: '¿Qué son las torrejas?' },
      answer: {
        en: 'Torrejas are a traditional Salvadoran Semana Santa dessert made from sliced bread or special dough dipped in egg batter, fried, and soaked in a honey or panela syrup. They are similar to French toast and are eaten almost exclusively during Holy Week.',
        fr: 'Les torrejas sont un dessert traditionnel salvadorien de Semana Santa fait de pain tranché ou de pâte spéciale trempé dans une pâte d\'œuf, frit et trempé dans un sirop de miel ou de panela. Elles sont similaires au pain perdu et ne sont consommées presque exclusivement que pendant la Semaine Sainte.',
        es: 'Las torrejas son un postre tradicional salvadoreño de Semana Santa hecho de pan rebanado o masa especial bañada en huevo, frita y empapada en miel o jarabe de panela. Son similares al pan francés y se comen casi exclusivamente durante la Semana Santa.',
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
  id: 'sv_labour-day',
  countryCode: 'sv',
  slugs: { en: 'labour-day', fr: 'fete-du-travail', es: 'dia-del-trabajo' },
  names: { en: 'Labour Day', fr: 'Fête du Travail', es: 'Día del Trabajo' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 1,

  descriptions: {
    en: "Labour Day on May 1 is an official public holiday in El Salvador celebrating workers' rights and the labor movement. It is marked by marches, rallies, and demonstrations organized by unions and workers' organizations.",
    fr: "La Fête du Travail le 1er mai est un jour férié officiel au Salvador célébrant les droits des travailleurs et le mouvement ouvrier. Elle est marquée par des marches, des rassemblements et des manifestations organisés par les syndicats et les organisations de travailleurs.",
    es: 'El Día del Trabajo el 1 de mayo es un feriado oficial en El Salvador que celebra los derechos de los trabajadores y el movimiento obrero. Se marca con marchas, mítines y manifestaciones organizadas por sindicatos y organizaciones de trabajadores.',
  },

  history: {
    en: "Labour Day in El Salvador has its roots in the international workers' movement that emerged in the late 19th century. The date of May 1 was chosen to commemorate the Haymarket affair in Chicago in 1886.\n\nIn El Salvador, the labour movement gained significant momentum during the early 20th century, particularly among coffee plantation workers and urban laborers. The 1932 peasant uprising, led by Farabundo Martí, became a defining moment in the country's labor history.\n\nToday, Labour Day remains an important occasion for workers' organizations to advocate for fair wages, improved working conditions, and labor rights. Marches through the streets of San Salvador draw thousands of participants each year.",
    fr: "La Fête du Travail au Salvador a ses racines dans le mouvement ouvrier international qui a émergé à la fin du XIXe siècle. La date du 1er mai a été choisie pour commémorer l'affaire de Haymarket à Chicago en 1886.\n\nAu Salvador, le mouvement ouvrier a pris un élan significatif au début du XXe siècle, particulièrement parmi les travailleurs des plantations de café et les ouvriers urbains. Le soulèvement paysan de 1932, dirigé par Farabundo Martí, est devenu un moment déterminant dans l'histoire du travail du pays.\n\nAujourd'hui, la Fête du Travail reste une occasion importante pour les organisations de travailleurs de plaider pour des salaires justes, de meilleures conditions de travail et les droits du travail. Les marches dans les rues de San Salvador attirent des milliers de participants chaque année.",
    es: "El Día del Trabajo en El Salvador tiene sus raíces en el movimiento obrero internacional que surgió a finales del siglo XIX. La fecha del 1 de mayo fue elegida para conmemorar los sucesos de Haymarket en Chicago en 1886.\n\nEn El Salvador, el movimiento obrero ganó un impulso significativo durante principios del siglo XX, particularmente entre los trabajadores de las plantaciones de café y los obreros urbanos. El levantamiento campesino de 1932, liderado por Farabundo Martí, se convirtió en un momento definitorio en la historia laboral del país.\n\nHoy, el Día del Trabajo sigue siendo una ocasión importante para que las organizaciones de trabajadores aboguen por salarios justos, mejores condiciones laborales y derechos laborales. Las marchas por las calles de San Salvador atraen a miles de participantes cada año.",
  },

  traditions: {
    en: [
      'Participating in workers\' marches and demonstrations through city streets',
      'Attending rallies organized by labor unions and workers\' organizations',
      'Listening to speeches by union leaders and political figures',
      'Displaying banners and signs demanding better working conditions',
      'Gathering with fellow workers for communal meals and celebrations',
    ],
    fr: [
      'Participer à des marches et manifestations de travailleurs dans les rues',
      'Assister à des rassemblements organisés par les syndicats et les organisations de travailleurs',
      'Écouter les discours des dirigeants syndicaux et des personnalités politiques',
      'Afficher des banderoles et des pancartes exigeant de meilleures conditions de travail',
      'Se réunir avec des collègues pour des repas communautaires et des célébrations',
    ],
    es: [
      'Participar en marchas y manifestaciones de trabajadores por las calles',
      'Asistir a mítines organizados por sindicatos y organizaciones de trabajadores',
      'Escuchar discursos de líderes sindicales y figuras políticas',
      'Exhibir pancartas y carteles exigiendo mejores condiciones laborales',
      'Reunirse con compañeros de trabajo para comidas comunitarias y celebraciones',
    ],
  },

  funFacts: {
    en: [
      'El Salvador\'s labour movement was heavily influenced by the 1932 peasant uprising led by Farabundo Martí.',
      'The main Labour Day march in San Salvador typically passes through key government buildings and plazas.',
      'May 1 is a public holiday throughout Central America, not just in El Salvador.',
      'Labour unions in El Salvador often use the day to present formal demands to the government.',
      'Despite being a day of protest, Labour Day in El Salvador also features music, food, and community celebrations.',
    ],
    fr: [
      'Le mouvement ouvrier du Salvador a été fortement influencé par le soulèvement paysan de 1932 dirigé par Farabundo Martí.',
      'La principale marche de la Fête du Travail à San Salvador passe généralement devant les principaux bâtiments gouvernementaux et places.',
      'Le 1er mai est un jour férié dans toute l\'Amérique centrale, pas seulement au Salvador.',
      'Les syndicats au Salvador utilisent souvent cette journée pour présenter des demandes formelles au gouvernement.',
      'Malgré être un jour de protestation, la Fête du Travail au Salvador comprend aussi de la musique, de la nourriture et des célébrations communautaires.',
    ],
    es: [
      'El movimiento obrero de El Salvador fue fuertemente influenciado por el levantamiento campesino de 1932 liderado por Farabundo Martí.',
      'La principal marcha del Día del Trabajo en San Salvador típicamente pasa frente a edificios gubernamentales clave y plazas.',
      'El 1 de mayo es feriado en toda Centroamérica, no solo en El Salvador.',
      'Los sindicatos en El Salvador a menudo usan el día para presentar demandas formales al gobierno.',
      'A pesar de ser un día de protesta, el Día del Trabajo en El Salvador también presenta música, comida y celebraciones comunitarias.',
    ],
  },

  planningChecklist: {
    en: [
      'Check for road closures and march routes in your area',
      'Plan alternative transportation as public transit may be affected',
      'Bring water and sun protection if attending outdoor events',
      'Note that banks and government offices will be closed',
      'Stock up on groceries as some shops may close for the day',
    ],
    fr: [
      'Vérifiez les fermetures de routes et les itinéraires de marche dans votre région',
      'Planifiez un transport alternatif car les transports en commun peuvent être affectés',
      'Apportez de l\'eau et une protection solaire si vous assistez à des événements en plein air',
      'Notez que les banques et les bureaux gouvernementaux seront fermés',
      'Faites vos courses car certains magasins peuvent fermer pour la journée',
    ],
    es: [
      'Verifique cierres de calles y rutas de marcha en su área',
      'Planifique transporte alternativo ya que el transporte público puede verse afectado',
      'Lleve agua y protección solar si asistirá a eventos al aire libre',
      'Tenga en cuenta que los bancos y oficinas gubernamentales estarán cerrados',
      'Abastézcase de víveres ya que algunas tiendas pueden cerrar por el día',
    ],
  },

  relatedHolidays: ['sv_independence-day', 'ni_labour-day', 'cr_labour-day'],

  seo: {
    en: {
      titleTemplate: 'Labour Day {year} El Salvador — Countdown & Info',
      descriptionTemplate: 'When is Labour Day {year} in El Salvador? Live countdown to May 1, history, marches, and workers\' rights information.',
      keywords: ['Labour Day El Salvador', 'Día del Trabajo El Salvador', 'May 1 El Salvador', 'workers day El Salvador', 'El Salvador holidays'],
    },
    fr: {
      titleTemplate: 'Fête du Travail {year} Salvador — Compte à rebours et info',
      descriptionTemplate: 'Quand est la Fête du Travail {year} au Salvador ? Compte à rebours, histoire, marches et informations sur les droits des travailleurs.',
      keywords: ['Fête du Travail Salvador', '1er mai Salvador', 'Día del Trabajo', 'jours fériés Salvador', 'droits des travailleurs'],
    },
    es: {
      titleTemplate: 'Día del Trabajo {year} El Salvador — Cuenta regresiva e info',
      descriptionTemplate: '¿Cuándo es el Día del Trabajo {year} en El Salvador? Cuenta regresiva, historia, marchas e información sobre derechos laborales.',
      keywords: ['Día del Trabajo El Salvador', '1 de mayo El Salvador', 'feriados El Salvador', 'derechos laborales', 'marcha trabajadores'],
    },
  },

  faq: [
    {
      question: { en: 'When is Labour Day {year} in El Salvador?', fr: 'Quand est la Fête du Travail {year} au Salvador ?', es: '¿Cuándo es el Día del Trabajo {year} en El Salvador?' },
      answer: {
        en: 'Labour Day {year} in El Salvador is on {date}. It is always May 1 and is an official public holiday.',
        fr: 'La Fête du Travail {year} au Salvador est le {date}. C\'est toujours le 1er mai et c\'est un jour férié officiel.',
        es: 'El Día del Trabajo {year} en El Salvador es el {date}. Siempre es el 1 de mayo y es un feriado oficial.',
      },
    },
    {
      question: { en: 'How is Labour Day celebrated in El Salvador?', fr: 'Comment la Fête du Travail est-elle célébrée au Salvador ?', es: '¿Cómo se celebra el Día del Trabajo en El Salvador?' },
      answer: {
        en: 'Labour Day is celebrated with workers\' marches, union rallies, and demonstrations in major cities. It is both a day of advocacy for labor rights and a day of rest for workers.',
        fr: 'La Fête du Travail est célébrée avec des marches de travailleurs, des rassemblements syndicaux et des manifestations dans les grandes villes. C\'est à la fois un jour de plaidoyer pour les droits du travail et un jour de repos pour les travailleurs.',
        es: 'El Día del Trabajo se celebra con marchas de trabajadores, mítines sindicales y manifestaciones en las principales ciudades. Es tanto un día de defensa de los derechos laborales como un día de descanso para los trabajadores.',
      },
    },
    {
      question: { en: 'Is Labour Day a public holiday in El Salvador?', fr: 'La Fête du Travail est-elle un jour férié au Salvador ?', es: '¿Es el Día del Trabajo un feriado en El Salvador?' },
      answer: {
        en: 'Yes, Labour Day on May 1 is an official public holiday in El Salvador. Most businesses, banks, and government offices are closed.',
        fr: 'Oui, la Fête du Travail le 1er mai est un jour férié officiel au Salvador. La plupart des commerces, banques et bureaux gouvernementaux sont fermés.',
        es: 'Sí, el Día del Trabajo el 1 de mayo es un feriado oficial en El Salvador. La mayoría de los negocios, bancos y oficinas gubernamentales están cerrados.',
      },
    },
    {
      question: { en: 'What is the history of Labour Day in El Salvador?', fr: "Quelle est l'histoire de la Fête du Travail au Salvador ?", es: '¿Cuál es la historia del Día del Trabajo en El Salvador?' },
      answer: {
        en: "El Salvador's labour movement was shaped by the 1932 peasant uprising led by Farabundo Martí and decades of struggle for workers' rights. May 1 commemorates the international workers' movement and the Haymarket affair of 1886.",
        fr: "Le mouvement ouvrier du Salvador a été façonné par le soulèvement paysan de 1932 dirigé par Farabundo Martí et des décennies de lutte pour les droits des travailleurs. Le 1er mai commémore le mouvement ouvrier international et l'affaire de Haymarket de 1886.",
        es: "El movimiento obrero de El Salvador fue moldeado por el levantamiento campesino de 1932 liderado por Farabundo Martí y décadas de lucha por los derechos de los trabajadores. El 1 de mayo conmemora el movimiento obrero internacional y los sucesos de Haymarket de 1886.",
      },
    },
  ],

  colorTheme: 'spring',
  icon: '⚒️',
};

// ---------------------------------------------------------------------------
// Independence Day — September 15
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'sv_independence-day',
  countryCode: 'sv',
  slugs: { en: 'independence-day', fr: 'jour-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Jour de l'Indépendance", es: 'Día de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 9,
  fixedDay: 15,

  descriptions: {
    en: "Independence Day on September 15 is El Salvador's most important national holiday, celebrating independence from Spain declared in 1821. The day features parades, marching bands, patriotic ceremonies, and the famous torch relay.",
    fr: "Le Jour de l'Indépendance le 15 septembre est la fête nationale la plus importante du Salvador, célébrant l'indépendance de l'Espagne déclarée en 1821. La journée comprend des défilés, des fanfares, des cérémonies patriotiques et le célèbre relais de la torche.",
    es: 'El Día de la Independencia el 15 de septiembre es la fiesta nacional más importante de El Salvador, celebrando la independencia de España declarada en 1821. El día presenta desfiles, bandas de guerra, ceremonias patrióticas y el famoso relevo de la antorcha.',
  },

  history: {
    en: "On September 15, 1821, the Central American provinces declared independence from Spain. The Act of Independence was signed in Guatemala City, freeing El Salvador, Guatemala, Honduras, Nicaragua, and Costa Rica from Spanish colonial rule.\n\nEl Salvador briefly joined the Mexican Empire before becoming part of the Federal Republic of Central America in 1823. When this federation dissolved in 1841, El Salvador became a fully independent republic.\n\nThe celebration of September 15 has been a cornerstone of Salvadoran national identity ever since. The tradition of the torch relay, where a torch is carried from Guatemala to Costa Rica, symbolizes the shared independence of all Central American nations.",
    fr: "Le 15 septembre 1821, les provinces d'Amérique centrale ont déclaré leur indépendance de l'Espagne. L'Acte d'Indépendance a été signé à Guatemala City, libérant le Salvador, le Guatemala, le Honduras, le Nicaragua et le Costa Rica de la domination coloniale espagnole.\n\nLe Salvador a brièvement rejoint l'Empire mexicain avant de faire partie de la République fédérale d'Amérique centrale en 1823. Lorsque cette fédération s'est dissoute en 1841, le Salvador est devenu une république pleinement indépendante.\n\nLa célébration du 15 septembre est un pilier de l'identité nationale salvadorienne depuis. La tradition du relais de la torche, où une torche est portée du Guatemala au Costa Rica, symbolise l'indépendance partagée de toutes les nations centraméricaines.",
    es: "El 15 de septiembre de 1821, las provincias centroamericanas declararon su independencia de España. El Acta de Independencia fue firmada en la Ciudad de Guatemala, liberando a El Salvador, Guatemala, Honduras, Nicaragua y Costa Rica del dominio colonial español.\n\nEl Salvador se unió brevemente al Imperio Mexicano antes de formar parte de la República Federal de Centroamérica en 1823. Cuando esta federación se disolvió en 1841, El Salvador se convirtió en una república plenamente independiente.\n\nLa celebración del 15 de septiembre ha sido un pilar de la identidad nacional salvadoreña desde entonces. La tradición del relevo de la antorcha, donde una antorcha es llevada desde Guatemala hasta Costa Rica, simboliza la independencia compartida de todas las naciones centroamericanas.",
  },

  traditions: {
    en: [
      'Carrying the Independence Torch relay through cities and towns',
      'Watching school marching bands parade through the streets',
      'Singing the national anthem at patriotic ceremonies',
      'Decorating homes, schools, and streets with blue and white flags',
      'Attending civic ceremonies at government buildings',
      'Preparing and enjoying traditional Salvadoran foods',
      'Setting off fireworks and firecrackers in the evening',
    ],
    fr: [
      'Porter le relais de la Torche de l\'Indépendance à travers les villes et villages',
      'Regarder les fanfares scolaires défiler dans les rues',
      'Chanter l\'hymne national lors des cérémonies patriotiques',
      'Décorer les maisons, les écoles et les rues avec des drapeaux bleu et blanc',
      'Assister à des cérémonies civiques dans les bâtiments gouvernementaux',
      'Préparer et déguster des plats traditionnels salvadoriens',
      'Lancer des feux d\'artifice et des pétards le soir',
    ],
    es: [
      'Llevar el relevo de la Antorcha de la Independencia por ciudades y pueblos',
      'Ver desfilar las bandas de guerra escolares por las calles',
      'Cantar el himno nacional en ceremonias patrióticas',
      'Decorar hogares, escuelas y calles con banderas azul y blanco',
      'Asistir a ceremonias cívicas en edificios gubernamentales',
      'Preparar y disfrutar comidas tradicionales salvadoreñas',
      'Lanzar fuegos artificiales y petardos por la noche',
    ],
  },

  funFacts: {
    en: [
      'Five Central American countries — El Salvador, Guatemala, Honduras, Nicaragua, and Costa Rica — all celebrate independence on September 15.',
      'The Independence Torch relay travels from Guatemala to Costa Rica, passing through all five countries in a symbolic act of unity.',
      'School marching bands practice for months before the September 15 parades.',
      'The Salvadoran flag features the national coat of arms with five volcanoes representing the five Central American nations.',
      'September is known as "El Mes de la Patria" (Month of the Homeland) in El Salvador, with celebrations throughout the month.',
    ],
    fr: [
      'Cinq pays d\'Amérique centrale — le Salvador, le Guatemala, le Honduras, le Nicaragua et le Costa Rica — célèbrent tous leur indépendance le 15 septembre.',
      'Le relais de la Torche de l\'Indépendance voyage du Guatemala au Costa Rica, passant par les cinq pays dans un acte symbolique d\'unité.',
      'Les fanfares scolaires s\'entraînent pendant des mois avant les défilés du 15 septembre.',
      'Le drapeau salvadorien présente les armoiries nationales avec cinq volcans représentant les cinq nations centraméricaines.',
      'Septembre est connu comme « El Mes de la Patria » (Mois de la Patrie) au Salvador, avec des célébrations tout au long du mois.',
    ],
    es: [
      'Cinco países centroamericanos — El Salvador, Guatemala, Honduras, Nicaragua y Costa Rica — celebran su independencia el 15 de septiembre.',
      'El relevo de la Antorcha de la Independencia viaja desde Guatemala hasta Costa Rica, pasando por los cinco países en un acto simbólico de unidad.',
      'Las bandas de guerra escolares practican durante meses antes de los desfiles del 15 de septiembre.',
      'La bandera salvadoreña presenta el escudo nacional con cinco volcanes que representan las cinco naciones centroamericanas.',
      'Septiembre es conocido como "El Mes de la Patria" en El Salvador, con celebraciones durante todo el mes.',
    ],
  },

  planningChecklist: {
    en: [
      'Attend the torch arrival ceremony in your town the evening of September 14',
      'Find the best viewing spots for the September 15 parades early',
      'Dress in blue and white to show patriotic spirit',
      'Prepare traditional foods like pupusas and yuca frita for the celebration',
      'Check local schedules for fireworks displays and evening events',
    ],
    fr: [
      'Assistez à la cérémonie d\'arrivée de la torche dans votre ville le soir du 14 septembre',
      'Trouvez les meilleurs emplacements pour voir les défilés du 15 septembre tôt',
      'Habillez-vous en bleu et blanc pour montrer l\'esprit patriotique',
      'Préparez des plats traditionnels comme les pupusas et la yuca frita pour la célébration',
      'Consultez les programmes locaux pour les feux d\'artifice et les événements du soir',
    ],
    es: [
      'Asista a la ceremonia de llegada de la antorcha en su pueblo la noche del 14 de septiembre',
      'Encuentre los mejores lugares para ver los desfiles del 15 de septiembre temprano',
      'Vístase de azul y blanco para mostrar espíritu patriótico',
      'Prepare comidas tradicionales como pupusas y yuca frita para la celebración',
      'Consulte los horarios locales para espectáculos de fuegos artificiales y eventos nocturnos',
    ],
  },

  relatedHolidays: ['ni_independence-day', 'cr_independence-day', 'sv_labour-day'],

  seo: {
    en: {
      titleTemplate: 'Independence Day {year} El Salvador — Countdown & Guide',
      descriptionTemplate: 'When is Independence Day {year} in El Salvador? Live countdown to September 15, parade info, history, and celebration guide.',
      keywords: ['Independence Day El Salvador', 'September 15 El Salvador', 'Día de la Independencia', 'El Salvador national day', 'El Salvador holidays'],
    },
    fr: {
      titleTemplate: "Jour de l'Indépendance {year} Salvador — Compte à rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'Indépendance {year} au Salvador ? Compte à rebours, défilés, histoire et guide de célébration.",
      keywords: ["Jour de l'Indépendance Salvador", '15 septembre Salvador', 'fête nationale Salvador', 'indépendance Amérique centrale', 'jours fériés Salvador'],
    },
    es: {
      titleTemplate: 'Día de la Independencia {year} El Salvador — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Día de la Independencia {year} en El Salvador? Cuenta regresiva, desfiles, historia y guía de celebración.',
      keywords: ['Día de la Independencia El Salvador', '15 de septiembre El Salvador', 'fiestas patrias El Salvador', 'independencia centroamericana', 'feriados El Salvador'],
    },
  },

  faq: [
    {
      question: { en: 'When is Independence Day {year} in El Salvador?', fr: "Quand est le Jour de l'Indépendance {year} au Salvador ?", es: '¿Cuándo es el Día de la Independencia {year} en El Salvador?' },
      answer: {
        en: 'Independence Day {year} in El Salvador is on {date}. It is always September 15.',
        fr: "Le Jour de l'Indépendance {year} au Salvador est le {date}. C'est toujours le 15 septembre.",
        es: 'El Día de la Independencia {year} en El Salvador es el {date}. Siempre es el 15 de septiembre.',
      },
    },
    {
      question: { en: 'When did El Salvador gain independence?', fr: "Quand le Salvador a-t-il obtenu son indépendance ?", es: '¿Cuándo obtuvo El Salvador su independencia?' },
      answer: {
        en: 'El Salvador declared independence from Spain on September 15, 1821, along with the other Central American provinces. It became a fully independent republic in 1841 after the dissolution of the Federal Republic of Central America.',
        fr: "Le Salvador a déclaré son indépendance de l'Espagne le 15 septembre 1821, avec les autres provinces d'Amérique centrale. Il est devenu une république pleinement indépendante en 1841 après la dissolution de la République fédérale d'Amérique centrale.",
        es: 'El Salvador declaró su independencia de España el 15 de septiembre de 1821, junto con las otras provincias centroamericanas. Se convirtió en una república plenamente independiente en 1841 tras la disolución de la República Federal de Centroamérica.',
      },
    },
    {
      question: { en: 'What is the Independence Torch relay?', fr: "Qu'est-ce que le relais de la Torche de l'Indépendance ?", es: '¿Qué es el relevo de la Antorcha de la Independencia?' },
      answer: {
        en: 'The Independence Torch relay is a symbolic tradition where a torch is carried from Guatemala through Honduras, El Salvador, Nicaragua, and Costa Rica. It represents the shared independence of the five Central American nations and arrives on the evening of September 14.',
        fr: "Le relais de la Torche de l'Indépendance est une tradition symbolique où une torche est portée du Guatemala à travers le Honduras, le Salvador, le Nicaragua et le Costa Rica. Elle représente l'indépendance partagée des cinq nations centraméricaines et arrive le soir du 14 septembre.",
        es: 'El relevo de la Antorcha de la Independencia es una tradición simbólica donde una antorcha es llevada desde Guatemala a través de Honduras, El Salvador, Nicaragua y Costa Rica. Representa la independencia compartida de las cinco naciones centroamericanas y llega la noche del 14 de septiembre.',
      },
    },
    {
      question: { en: 'Do all Central American countries celebrate on September 15?', fr: 'Tous les pays d\'Amérique centrale célèbrent-ils le 15 septembre ?', es: '¿Todos los países centroamericanos celebran el 15 de septiembre?' },
      answer: {
        en: 'Yes, El Salvador, Guatemala, Honduras, Nicaragua, and Costa Rica all celebrate their independence on September 15, as they all declared independence from Spain on the same date in 1821.',
        fr: 'Oui, le Salvador, le Guatemala, le Honduras, le Nicaragua et le Costa Rica célèbrent tous leur indépendance le 15 septembre, car ils ont tous déclaré leur indépendance de l\'Espagne à la même date en 1821.',
        es: 'Sí, El Salvador, Guatemala, Honduras, Nicaragua y Costa Rica celebran su independencia el 15 de septiembre, ya que todos declararon su independencia de España en la misma fecha en 1821.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '🇸🇻',
};

// ---------------------------------------------------------------------------
// Day of the Dead — November 2
// ---------------------------------------------------------------------------

const dayOfTheDead: HolidayData = {
  id: 'sv_day-of-the-dead',
  countryCode: 'sv',
  slugs: { en: 'day-of-the-dead', fr: 'jour-des-morts', es: 'dia-de-los-difuntos' },
  names: { en: 'Day of the Dead', fr: 'Jour des Morts', es: 'Día de los Difuntos' },

  dateType: 'fixed',
  fixedMonth: 11,
  fixedDay: 2,

  descriptions: {
    en: 'The Day of the Dead (Día de los Difuntos) on November 2 is a solemn observance in El Salvador honoring deceased loved ones. Families visit cemeteries to clean and decorate graves with flowers, candles, and offerings.',
    fr: "Le Jour des Morts (Día de los Difuntos) le 2 novembre est une observance solennelle au Salvador honorant les proches décédés. Les familles visitent les cimetières pour nettoyer et décorer les tombes avec des fleurs, des bougies et des offrandes.",
    es: 'El Día de los Difuntos el 2 de noviembre es una observancia solemne en El Salvador que honra a los seres queridos fallecidos. Las familias visitan los cementerios para limpiar y decorar las tumbas con flores, velas y ofrendas.',
  },

  history: {
    en: "The Day of the Dead in El Salvador blends Catholic All Souls' Day traditions with pre-Columbian indigenous beliefs about honoring the dead. When Spanish missionaries arrived in the 16th century, they merged the Catholic observance with existing indigenous practices of remembering ancestors.\n\nIn the town of Tonacatepeque, the celebration is uniquely expressed through the Festival de los Canchules, where participants wear skull masks and costumes to represent the dead returning to visit the living.\n\nOver the centuries, the Day of the Dead has become a deeply personal family tradition in El Salvador, with the focus on cemetery visits, prayer, and sharing memories of loved ones who have passed away.",
    fr: "Le Jour des Morts au Salvador mélange les traditions catholiques de la Toussaint avec les croyances autochtones précolombiennes sur l'honneur des morts. Lorsque les missionnaires espagnols sont arrivés au XVIe siècle, ils ont fusionné l'observance catholique avec les pratiques autochtones existantes de se souvenir des ancêtres.\n\nDans la ville de Tonacatepeque, la célébration s'exprime de manière unique à travers le Festival de los Canchules, où les participants portent des masques de crâne et des costumes pour représenter les morts revenant visiter les vivants.\n\nAu fil des siècles, le Jour des Morts est devenu une tradition familiale profondément personnelle au Salvador, axée sur les visites au cimetière, la prière et le partage de souvenirs des êtres chers disparus.",
    es: "El Día de los Difuntos en El Salvador mezcla las tradiciones católicas del Día de Todas las Almas con creencias indígenas precolombinas sobre honrar a los muertos. Cuando los misioneros españoles llegaron en el siglo XVI, fusionaron la observancia católica con las prácticas indígenas existentes de recordar a los ancestros.\n\nEn el pueblo de Tonacatepeque, la celebración se expresa de manera única a través del Festival de los Canchules, donde los participantes usan máscaras de calavera y disfraces para representar a los muertos que regresan a visitar a los vivos.\n\nA lo largo de los siglos, el Día de los Difuntos se ha convertido en una tradición familiar profundamente personal en El Salvador, centrada en las visitas al cementerio, la oración y el compartir recuerdos de los seres queridos que han fallecido.",
  },

  traditions: {
    en: [
      'Visiting cemeteries to clean and decorate the graves of loved ones',
      'Placing fresh flowers — especially chrysanthemums and marigolds — on graves',
      'Lighting candles at gravesites as a symbol of remembrance',
      'Preparing and sharing traditional foods like ayote en miel and tamales',
      'Participating in the Festival de los Canchules in Tonacatepeque',
      'Praying for the souls of deceased family members',
      'Painting and repairing tombstones and grave markers',
    ],
    fr: [
      'Visiter les cimetières pour nettoyer et décorer les tombes des êtres chers',
      'Placer des fleurs fraîches — surtout des chrysanthèmes et des œillets d\'Inde — sur les tombes',
      'Allumer des bougies sur les sépultures comme symbole de souvenir',
      'Préparer et partager des plats traditionnels comme l\'ayote en miel et les tamales',
      'Participer au Festival de los Canchules à Tonacatepeque',
      'Prier pour les âmes des membres de la famille décédés',
      'Peindre et réparer les pierres tombales et les marqueurs funéraires',
    ],
    es: [
      'Visitar los cementerios para limpiar y decorar las tumbas de los seres queridos',
      'Colocar flores frescas — especialmente crisantemos y cempasúchil — en las tumbas',
      'Encender velas en las sepulturas como símbolo de recuerdo',
      'Preparar y compartir comidas tradicionales como ayote en miel y tamales',
      'Participar en el Festival de los Canchules en Tonacatepeque',
      'Rezar por las almas de los familiares fallecidos',
      'Pintar y reparar lápidas y marcadores funerarios',
    ],
  },

  funFacts: {
    en: [
      'The Festival de los Canchules in Tonacatepeque features people in skeleton costumes going door-to-door, similar to Halloween trick-or-treating.',
      'Ayote en miel (pumpkin cooked in honey and spices) is one of the most iconic foods associated with the Day of the Dead in El Salvador.',
      'Unlike Mexico\'s elaborate altars (ofrendas), Salvadoran Day of the Dead focuses more on cemetery visits and grave decoration.',
      'Many Salvadoran cemeteries become vibrant with color on November 2, as graves are covered in fresh flowers and paint.',
      'Some families spend the entire day at the cemetery, sharing meals and stories near the graves of their loved ones.',
    ],
    fr: [
      'Le Festival de los Canchules à Tonacatepeque présente des personnes en costumes de squelette allant de porte en porte, similaire au trick-or-treat de Halloween.',
      'L\'ayote en miel (citrouille cuite dans du miel et des épices) est l\'un des aliments les plus emblématiques associés au Jour des Morts au Salvador.',
      'Contrairement aux autels élaborés (ofrendas) du Mexique, le Jour des Morts salvadorien se concentre davantage sur les visites au cimetière et la décoration des tombes.',
      'De nombreux cimetières salvadoriens deviennent vibrants de couleur le 2 novembre, les tombes étant couvertes de fleurs fraîches et de peinture.',
      'Certaines familles passent toute la journée au cimetière, partageant des repas et des histoires près des tombes de leurs êtres chers.',
    ],
    es: [
      'El Festival de los Canchules en Tonacatepeque presenta personas con disfraces de esqueleto yendo de puerta en puerta, similar al trick-or-treat de Halloween.',
      'El ayote en miel (calabaza cocida en miel y especias) es una de las comidas más icónicas asociadas con el Día de los Difuntos en El Salvador.',
      'A diferencia de los elaborados altares (ofrendas) de México, el Día de los Difuntos salvadoreño se centra más en las visitas al cementerio y la decoración de tumbas.',
      'Muchos cementerios salvadoreños se llenan de color el 2 de noviembre, con las tumbas cubiertas de flores frescas y pintura.',
      'Algunas familias pasan todo el día en el cementerio, compartiendo comidas e historias cerca de las tumbas de sus seres queridos.',
    ],
  },

  planningChecklist: {
    en: [
      'Purchase fresh flowers — chrysanthemums and marigolds — in advance',
      'Gather cleaning supplies for tidying up grave sites',
      'Prepare traditional foods like ayote en miel and tamales to share',
      'Buy candles and other decorative items for the cemetery visit',
      'Plan to arrive at the cemetery early to avoid crowds',
    ],
    fr: [
      'Achetez des fleurs fraîches — chrysanthèmes et œillets d\'Inde — à l\'avance',
      'Rassemblez les fournitures de nettoyage pour ranger les sépultures',
      'Préparez des plats traditionnels comme l\'ayote en miel et les tamales à partager',
      'Achetez des bougies et d\'autres objets décoratifs pour la visite au cimetière',
      'Planifiez d\'arriver au cimetière tôt pour éviter les foules',
    ],
    es: [
      'Compre flores frescas — crisantemos y cempasúchil — con anticipación',
      'Reúna suministros de limpieza para arreglar las sepulturas',
      'Prepare comidas tradicionales como ayote en miel y tamales para compartir',
      'Compre velas y otros artículos decorativos para la visita al cementerio',
      'Planee llegar al cementerio temprano para evitar las multitudes',
    ],
  },

  relatedHolidays: ['sv_christmas', 'sv_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Day of the Dead {year} El Salvador — Countdown & Guide',
      descriptionTemplate: 'When is the Day of the Dead {year} in El Salvador? Live countdown to November 2, traditions, cemetery customs, and guide.',
      keywords: ['Day of the Dead El Salvador', 'Día de los Difuntos', 'November 2 El Salvador', 'El Salvador cemetery traditions', 'Canchules festival'],
    },
    fr: {
      titleTemplate: 'Jour des Morts {year} Salvador — Compte à rebours et guide',
      descriptionTemplate: 'Quand est le Jour des Morts {year} au Salvador ? Compte à rebours, traditions, coutumes funéraires et guide.',
      keywords: ['Jour des Morts Salvador', 'Día de los Difuntos', '2 novembre Salvador', 'traditions cimetière Salvador', 'festival Canchules'],
    },
    es: {
      titleTemplate: 'Día de los Difuntos {year} El Salvador — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Día de los Difuntos {year} en El Salvador? Cuenta regresiva, tradiciones, costumbres de cementerio y guía.',
      keywords: ['Día de los Difuntos El Salvador', '2 de noviembre El Salvador', 'tradiciones cementerio El Salvador', 'festival Canchules', 'ayote en miel'],
    },
  },

  faq: [
    {
      question: { en: 'When is the Day of the Dead {year} in El Salvador?', fr: 'Quand est le Jour des Morts {year} au Salvador ?', es: '¿Cuándo es el Día de los Difuntos {year} en El Salvador?' },
      answer: {
        en: 'The Day of the Dead {year} in El Salvador is on {date}. It is always November 2.',
        fr: 'Le Jour des Morts {year} au Salvador est le {date}. C\'est toujours le 2 novembre.',
        es: 'El Día de los Difuntos {year} en El Salvador es el {date}. Siempre es el 2 de noviembre.',
      },
    },
    {
      question: { en: 'How is the Day of the Dead celebrated in El Salvador?', fr: 'Comment le Jour des Morts est-il célébré au Salvador ?', es: '¿Cómo se celebra el Día de los Difuntos en El Salvador?' },
      answer: {
        en: 'Salvadorans visit cemeteries to clean and decorate graves with flowers, candles, and fresh paint. Families share traditional foods and spend the day honoring deceased loved ones.',
        fr: 'Les Salvadoriens visitent les cimetières pour nettoyer et décorer les tombes avec des fleurs, des bougies et de la peinture fraîche. Les familles partagent des plats traditionnels et passent la journée à honorer les êtres chers décédés.',
        es: 'Los salvadoreños visitan los cementerios para limpiar y decorar las tumbas con flores, velas y pintura fresca. Las familias comparten comidas tradicionales y pasan el día honrando a los seres queridos fallecidos.',
      },
    },
    {
      question: { en: 'What is the Festival de los Canchules?', fr: 'Qu\'est-ce que le Festival de los Canchules ?', es: '¿Qué es el Festival de los Canchules?' },
      answer: {
        en: 'The Festival de los Canchules is a unique Day of the Dead celebration in Tonacatepeque, El Salvador, where participants wear skull masks and skeleton costumes and go door-to-door, representing the dead returning to visit the living.',
        fr: 'Le Festival de los Canchules est une célébration unique du Jour des Morts à Tonacatepeque, au Salvador, où les participants portent des masques de crâne et des costumes de squelette et vont de porte en porte, représentant les morts revenant visiter les vivants.',
        es: 'El Festival de los Canchules es una celebración única del Día de los Difuntos en Tonacatepeque, El Salvador, donde los participantes usan máscaras de calavera y disfraces de esqueleto y van de puerta en puerta, representando a los muertos que regresan a visitar a los vivos.',
      },
    },
    {
      question: { en: 'Is the Day of the Dead a public holiday in El Salvador?', fr: 'Le Jour des Morts est-il un jour férié au Salvador ?', es: '¿Es el Día de los Difuntos un feriado en El Salvador?' },
      answer: {
        en: 'Yes, November 2 (Día de los Difuntos) is an official public holiday in El Salvador. Banks and government offices are closed, and many businesses observe the day.',
        fr: 'Oui, le 2 novembre (Día de los Difuntos) est un jour férié officiel au Salvador. Les banques et les bureaux gouvernementaux sont fermés, et de nombreuses entreprises observent la journée.',
        es: 'Sí, el 2 de noviembre (Día de los Difuntos) es un feriado oficial en El Salvador. Los bancos y oficinas gubernamentales están cerrados, y muchas empresas observan el día.',
      },
    },
  ],

  colorTheme: 'autumn',
  icon: '💀',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'sv_christmas',
  countryCode: 'sv',
  slugs: { en: 'christmas', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noël', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: 'Christmas Day on December 25 is one of the most beloved holidays in El Salvador, celebrated with family gatherings, traditional foods like tamales and pupusas navideñas, midnight Mass, and festive decorations throughout the country.',
    fr: "Noël le 25 décembre est l'une des fêtes les plus aimées au Salvador, célébrée avec des réunions familiales, des plats traditionnels comme les tamales et les pupusas navideñas, la messe de minuit et des décorations festives dans tout le pays.",
    es: 'La Navidad el 25 de diciembre es una de las fiestas más queridas en El Salvador, celebrada con reuniones familiares, comidas tradicionales como tamales y pupusas navideñas, misa de gallo y decoraciones festivas en todo el país.',
  },

  history: {
    en: "Christmas celebrations in El Salvador date back to the Spanish colonial era when Catholic missionaries introduced the holiday in the 16th century. Over the centuries, Salvadoran Christmas traditions have developed their own unique character, blending European customs with local culture.\n\nThe celebration typically begins with the Novena — nine days of prayer and celebration leading up to Christmas Eve. Posadas, reenactments of Mary and Joseph's search for lodging, take place in many neighborhoods during this period.\n\nChristmas Eve (Nochebuena) is considered even more important than Christmas Day itself. Families gather for a large dinner, attend midnight Mass (Misa de Gallo), and exchange gifts at midnight. Fireworks fill the sky across the country as the clock strikes twelve.",
    fr: "Les célébrations de Noël au Salvador remontent à l'ère coloniale espagnole lorsque les missionnaires catholiques ont introduit la fête au XVIe siècle. Au fil des siècles, les traditions de Noël salvadoriennes ont développé leur propre caractère unique, mêlant les coutumes européennes à la culture locale.\n\nLa célébration commence généralement avec la Neuvaine — neuf jours de prière et de célébration précédant la veille de Noël. Les Posadas, reconstitutions de la recherche d'un logement par Marie et Joseph, ont lieu dans de nombreux quartiers pendant cette période.\n\nLa veille de Noël (Nochebuena) est considérée comme encore plus importante que le jour de Noël lui-même. Les familles se réunissent pour un grand dîner, assistent à la messe de minuit (Misa de Gallo) et échangent des cadeaux à minuit. Les feux d'artifice remplissent le ciel à travers le pays lorsque l'horloge sonne minuit.",
    es: "Las celebraciones navideñas en El Salvador se remontan a la era colonial española cuando los misioneros católicos introdujeron la fiesta en el siglo XVI. A lo largo de los siglos, las tradiciones navideñas salvadoreñas han desarrollado su propio carácter único, mezclando costumbres europeas con la cultura local.\n\nLa celebración típicamente comienza con la Novena — nueve días de oración y celebración previos a la Nochebuena. Las Posadas, representaciones de la búsqueda de alojamiento de María y José, tienen lugar en muchos barrios durante este período.\n\nLa Nochebuena es considerada aún más importante que el día de Navidad en sí. Las familias se reúnen para una gran cena, asisten a la misa de gallo y se intercambian regalos a medianoche. Los fuegos artificiales llenan el cielo en todo el país cuando el reloj marca las doce.",
  },

  traditions: {
    en: [
      'Preparing tamales — the quintessential Salvadoran Christmas food',
      'Making pupusas navideñas with special holiday fillings',
      'Attending midnight Mass (Misa de Gallo) on Christmas Eve',
      'Setting up a nacimiento (nativity scene) in the home',
      'Exchanging gifts at midnight on Christmas Eve',
      'Setting off fireworks and firecrackers at midnight',
      'Participating in Posadas processions through the neighborhood',
    ],
    fr: [
      'Préparer des tamales — la nourriture de Noël salvadorienne par excellence',
      'Faire des pupusas navideñas avec des garnitures spéciales de fête',
      'Assister à la messe de minuit (Misa de Gallo) la veille de Noël',
      'Installer un nacimiento (crèche) dans la maison',
      'Échanger des cadeaux à minuit la veille de Noël',
      'Lancer des feux d\'artifice et des pétards à minuit',
      'Participer aux processions des Posadas à travers le quartier',
    ],
    es: [
      'Preparar tamales — la comida navideña salvadoreña por excelencia',
      'Hacer pupusas navideñas con rellenos especiales de la temporada',
      'Asistir a la misa de gallo en Nochebuena',
      'Montar un nacimiento (pesebre) en el hogar',
      'Intercambiar regalos a medianoche en Nochebuena',
      'Lanzar fuegos artificiales y petardos a medianoche',
      'Participar en las procesiones de Posadas por el barrio',
    ],
  },

  funFacts: {
    en: [
      'Salvadoran families can spend days preparing hundreds of tamales for Christmas, often making enough to share with neighbors and friends.',
      'Pupusas navideñas are special Christmas versions of the national dish, sometimes featuring holiday ingredients like loroco and chicharrón.',
      'The Nochebuena dinner is typically the biggest family meal of the entire year in El Salvador.',
      'Many Salvadoran homes feature elaborate nacimiento (nativity scene) displays that take up entire rooms.',
      'In El Salvador, gifts are traditionally opened at midnight on Christmas Eve rather than on Christmas morning.',
    ],
    fr: [
      'Les familles salvadoriennes peuvent passer des jours à préparer des centaines de tamales pour Noël, en faisant souvent assez pour partager avec les voisins et amis.',
      'Les pupusas navideñas sont des versions de Noël spéciales du plat national, contenant parfois des ingrédients de fête comme le loroco et le chicharrón.',
      'Le dîner de Nochebuena est généralement le plus grand repas familial de l\'année entière au Salvador.',
      'De nombreuses maisons salvadoriennes présentent des présentations élaborées de nacimiento (crèche) qui occupent des pièces entières.',
      'Au Salvador, les cadeaux sont traditionnellement ouverts à minuit la veille de Noël plutôt que le matin de Noël.',
    ],
    es: [
      'Las familias salvadoreñas pueden pasar días preparando cientos de tamales para Navidad, a menudo haciendo suficientes para compartir con vecinos y amigos.',
      'Las pupusas navideñas son versiones especiales navideñas del platillo nacional, a veces con ingredientes festivos como loroco y chicharrón.',
      'La cena de Nochebuena es típicamente la comida familiar más grande de todo el año en El Salvador.',
      'Muchos hogares salvadoreños presentan elaboradas exhibiciones de nacimiento (pesebre) que ocupan habitaciones enteras.',
      'En El Salvador, los regalos se abren tradicionalmente a medianoche en Nochebuena en vez de la mañana de Navidad.',
    ],
  },

  planningChecklist: {
    en: [
      'Begin preparing tamales several days before Christmas — it is a labor-intensive tradition',
      'Purchase gifts for family members well in advance',
      'Set up the nacimiento (nativity scene) in early December',
      'Stock up on fireworks and firecrackers for the midnight celebration',
      'Plan your Nochebuena dinner menu and invite extended family',
    ],
    fr: [
      'Commencez à préparer les tamales plusieurs jours avant Noël — c\'est une tradition laborieuse',
      'Achetez les cadeaux pour les membres de la famille bien à l\'avance',
      'Installez le nacimiento (crèche) début décembre',
      'Faites provision de feux d\'artifice et de pétards pour la célébration de minuit',
      'Planifiez votre menu de dîner de Nochebuena et invitez la famille élargie',
    ],
    es: [
      'Comience a preparar los tamales varios días antes de Navidad — es una tradición laboriosa',
      'Compre regalos para los miembros de la familia con anticipación',
      'Monte el nacimiento (pesebre) a principios de diciembre',
      'Abastézcase de fuegos artificiales y petardos para la celebración de medianoche',
      'Planifique su menú de cena de Nochebuena e invite a la familia extendida',
    ],
  },

  relatedHolidays: ['sv_new-years-day', 'sv_day-of-the-dead'],

  seo: {
    en: {
      titleTemplate: 'Christmas {year} El Salvador — Countdown & Traditions',
      descriptionTemplate: 'When is Christmas {year} in El Salvador? Live countdown to December 25, Salvadoran Christmas traditions, tamales, and celebration guide.',
      keywords: ['Christmas El Salvador', 'Navidad El Salvador', 'Salvadoran Christmas', 'tamales Christmas', 'pupusas navideñas'],
    },
    fr: {
      titleTemplate: 'Noël {year} Salvador — Compte à rebours et traditions',
      descriptionTemplate: 'Quand est Noël {year} au Salvador ? Compte à rebours, traditions de Noël salvadoriennes, tamales et guide de célébration.',
      keywords: ['Noël Salvador', 'Navidad Salvador', 'traditions Noël Salvador', 'tamales Noël', 'Nochebuena Salvador'],
    },
    es: {
      titleTemplate: 'Navidad {year} El Salvador — Cuenta regresiva y tradiciones',
      descriptionTemplate: '¿Cuándo es Navidad {year} en El Salvador? Cuenta regresiva, tradiciones navideñas salvadoreñas, tamales y guía de celebración.',
      keywords: ['Navidad El Salvador', 'tradiciones navideñas El Salvador', 'tamales navideños', 'pupusas navideñas', 'Nochebuena El Salvador'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in El Salvador?', fr: 'Quand est Noël {year} au Salvador ?', es: '¿Cuándo es Navidad {year} en El Salvador?' },
      answer: {
        en: 'Christmas {year} in El Salvador is on {date}. It is always December 25.',
        fr: 'Noël {year} au Salvador est le {date}. C\'est toujours le 25 décembre.',
        es: 'Navidad {year} en El Salvador es el {date}. Siempre es el 25 de diciembre.',
      },
    },
    {
      question: { en: 'What are typical Christmas foods in El Salvador?', fr: 'Quels sont les plats de Noël typiques au Salvador ?', es: '¿Cuáles son las comidas navideñas típicas en El Salvador?' },
      answer: {
        en: 'The most important Christmas food in El Salvador is tamales, which families spend days preparing. Other favorites include pupusas navideñas, panes con pollo, and marquesote cake.',
        fr: 'La nourriture de Noël la plus importante au Salvador est les tamales, que les familles passent des jours à préparer. D\'autres favoris comprennent les pupusas navideñas, les panes con pollo et le gâteau marquesote.',
        es: 'La comida navideña más importante en El Salvador son los tamales, que las familias pasan días preparando. Otros favoritos incluyen pupusas navideñas, panes con pollo y marquesote.',
      },
    },
    {
      question: { en: 'Is Christmas Eve or Christmas Day more important in El Salvador?', fr: 'La veille de Noël ou le jour de Noël est-il plus important au Salvador ?', es: '¿Es más importante la Nochebuena o el día de Navidad en El Salvador?' },
      answer: {
        en: 'Christmas Eve (Nochebuena) is generally considered more important in El Salvador. The main family dinner, gift exchange, midnight Mass, and fireworks all take place on the evening of December 24.',
        fr: 'La veille de Noël (Nochebuena) est généralement considérée comme plus importante au Salvador. Le dîner familial principal, l\'échange de cadeaux, la messe de minuit et les feux d\'artifice ont tous lieu le soir du 24 décembre.',
        es: 'La Nochebuena es generalmente considerada más importante en El Salvador. La cena familiar principal, el intercambio de regalos, la misa de gallo y los fuegos artificiales tienen lugar la noche del 24 de diciembre.',
      },
    },
    {
      question: { en: 'What is a nacimiento?', fr: 'Qu\'est-ce qu\'un nacimiento ?', es: '¿Qué es un nacimiento?' },
      answer: {
        en: 'A nacimiento is a nativity scene displayed in Salvadoran homes during the Christmas season. It depicts the birth of Jesus and can range from simple displays to elaborate scenes that occupy entire rooms, featuring figurines, landscapes, and lighting.',
        fr: 'Un nacimiento est une crèche exposée dans les maisons salvadoriennes pendant la saison de Noël. Il représente la naissance de Jésus et peut aller de simples présentations à des scènes élaborées occupant des pièces entières, avec des figurines, des paysages et de l\'éclairage.',
        es: 'Un nacimiento es un pesebre exhibido en los hogares salvadoreños durante la temporada navideña. Representa el nacimiento de Jesús y puede ir desde exhibiciones simples hasta escenas elaboradas que ocupan habitaciones enteras, con figuritas, paisajes e iluminación.',
      },
    },
  ],

  colorTheme: 'christmas',
  icon: '🎄',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const svHolidays: HolidayData[] = [
  newYearsDay,
  holyThursday,
  labourDay,
  independenceDay,
  dayOfTheDead,
  christmas,
];

export default svHolidays;
