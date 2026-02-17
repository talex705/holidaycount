/**
 * Switzerland holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getAscensionDay, getWhitMonday } from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'ch_new-years-day',
  countryCode: 'ch',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'ano-nuevo' },
  names: { en: "New Year's Day", fr: 'Jour de l\'An', es: 'Año Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 is a public holiday across all cantons of Switzerland. It is celebrated with fireworks over lakes and mountains, festive gatherings, and traditions to welcome the new year.",
    fr: "Le Jour de l'An, le 1er janvier, est un jour férié dans tous les cantons de Suisse. Il est célébré avec des feux d'artifice au-dessus des lacs et des montagnes, des rassemblements festifs et des traditions pour accueillir la nouvelle année.",
    es: 'El Año Nuevo, el 1 de enero, es un día festivo en todos los cantones de Suiza. Se celebra con fuegos artificiales sobre lagos y montañas, reuniones festivas y tradiciones para dar la bienvenida al nuevo año.',
  },

  history: {
    en: "New Year's Day has been celebrated in Switzerland for centuries, with traditions varying across the country's linguistic regions. In German-speaking Switzerland, the celebration is called Neujahrstag, while in French-speaking areas it is Jour de l'An and in Italian-speaking Ticino it is Capodanno.\n\nThe Swiss have a long tradition of ringing church bells at midnight to mark the transition to the new year. In many Alpine communities, special bread or pastries are baked in the shape of animals or figures to bring good luck.\n\nModern celebrations centre around fireworks displays over Switzerland's iconic lakes, particularly in Zurich, Geneva, and Lucerne. The Swiss tradition of Silvesterkläuse in Appenzell, where costumed figures go door-to-door on New Year's Eve and New Year's Day, is one of the most distinctive regional customs in Europe.",
    fr: "Le Jour de l'An est célébré en Suisse depuis des siècles, avec des traditions qui varient selon les régions linguistiques du pays. En Suisse alémanique, la fête s'appelle Neujahrstag, tandis qu'en Suisse romande c'est le Jour de l'An et au Tessin c'est Capodanno.\n\nLes Suisses ont une longue tradition de faire sonner les cloches des églises à minuit pour marquer le passage à la nouvelle année. Dans de nombreuses communautés alpines, des pains ou pâtisseries spéciaux sont préparés en forme d'animaux ou de personnages pour porter bonheur.\n\nLes célébrations modernes sont centrées sur les feux d'artifice au-dessus des lacs emblématiques de la Suisse, notamment à Zurich, Genève et Lucerne. La tradition suisse des Silvesterkläuse à Appenzell, où des personnages costumés font du porte-à-porte la veille et le jour de l'An, est l'une des coutumes régionales les plus distinctives d'Europe.",
    es: 'El Año Nuevo se celebra en Suiza desde hace siglos, con tradiciones que varían según las regiones lingüísticas del país. En la Suiza germanófona, la celebración se llama Neujahrstag, mientras que en la zona francófona es Jour de l\'An y en el Tesino italianófono es Capodanno.\n\nLos suizos tienen una larga tradición de hacer sonar las campanas de las iglesias a medianoche para marcar la transición al nuevo año. En muchas comunidades alpinas se hornean panes o pasteles especiales con forma de animales o figuras para atraer la buena suerte.\n\nLas celebraciones modernas se centran en los espectáculos de fuegos artificiales sobre los icónicos lagos suizos, especialmente en Zúrich, Ginebra y Lucerna. La tradición suiza de los Silvesterkläuse en Appenzell, donde figuras disfrazadas van de puerta en puerta en Nochevieja y Año Nuevo, es una de las costumbres regionales más singulares de Europa.',
  },

  traditions: {
    en: [
      'Watching fireworks over lakes and mountains at midnight',
      'Ringing church bells across Swiss towns and villages to welcome the new year',
      'Baking special New Year\'s bread or pastries in the shape of animals for good luck',
      'Celebrating with fondue or raclette at festive gatherings',
      'Silvesterkläuse tradition in Appenzell — costumed figures go door-to-door',
      'Pouring molten lead into cold water (Bleigiessen) to predict the year ahead',
    ],
    fr: [
      'Regarder les feux d\'artifice au-dessus des lacs et des montagnes à minuit',
      'Faire sonner les cloches des églises dans les villes et villages suisses pour accueillir la nouvelle année',
      'Préparer des pains ou pâtisseries spéciaux en forme d\'animaux pour porter bonheur',
      'Célébrer avec une fondue ou une raclette lors de rassemblements festifs',
      'Tradition des Silvesterkläuse à Appenzell — des personnages costumés font du porte-à-porte',
      'Verser du plomb fondu dans de l\'eau froide (Bleigiessen) pour prédire l\'année à venir',
    ],
    es: [
      'Ver los fuegos artificiales sobre lagos y montañas a medianoche',
      'Hacer sonar las campanas de las iglesias en pueblos y ciudades suizas para dar la bienvenida al nuevo año',
      'Hornear panes o pasteles especiales con forma de animales para atraer la buena suerte',
      'Celebrar con fondue o raclette en reuniones festivas',
      'Tradición de los Silvesterkläuse en Appenzell — figuras disfrazadas van de puerta en puerta',
      'Verter plomo fundido en agua fría (Bleigiessen) para predecir el año venidero',
    ],
  },

  funFacts: {
    en: [
      'Zurich\'s New Year\'s Eve fireworks over Lake Zurich attract over 100,000 spectators each year.',
      'The Silvesterkläuse tradition in Appenzell dates back to pagan times and features three types of costumed figures: "schöne" (beautiful), "wüeschte" (ugly), and "schö-wüeschte" (beautiful-ugly).',
      'In some Swiss-German regions, children go door-to-door on New Year\'s Day reciting poems in exchange for treats.',
      'Switzerland has four official languages, so New Year greetings are said as "Prosit Neujahr" (German), "Bonne année" (French), "Buon anno" (Italian), and "Bun onn nov" (Romansh).',
      'The Swiss consume more fondue on New Year\'s Eve than on any other night of the year.',
    ],
    fr: [
      'Les feux d\'artifice du Nouvel An à Zurich au-dessus du lac de Zurich attirent plus de 100 000 spectateurs chaque année.',
      'La tradition des Silvesterkläuse à Appenzell remonte à l\'époque païenne et comprend trois types de personnages costumés : les « schöne » (beaux), les « wüeschte » (laids) et les « schö-wüeschte » (beaux-laids).',
      'Dans certaines régions alémaniques, les enfants font du porte-à-porte le jour de l\'An en récitant des poèmes en échange de friandises.',
      'La Suisse a quatre langues officielles, donc les vœux du Nouvel An se disent « Prosit Neujahr » (allemand), « Bonne année » (français), « Buon anno » (italien) et « Bun onn nov » (romanche).',
      'Les Suisses consomment plus de fondue le soir du Nouvel An que lors de toute autre soirée de l\'année.',
    ],
    es: [
      'Los fuegos artificiales de Nochevieja en Zúrich sobre el lago de Zúrich atraen a más de 100 000 espectadores cada año.',
      'La tradición de los Silvesterkläuse en Appenzell se remonta a la época pagana y presenta tres tipos de figuras disfrazadas: los «schöne» (hermosos), los «wüeschte» (feos) y los «schö-wüeschte» (hermosos-feos).',
      'En algunas regiones germanófonas suizas, los niños van de puerta en puerta el día de Año Nuevo recitando poemas a cambio de golosinas.',
      'Suiza tiene cuatro idiomas oficiales, por lo que los saludos de Año Nuevo se dicen «Prosit Neujahr» (alemán), «Bonne année» (francés), «Buon anno» (italiano) y «Bun onn nov» (romanche).',
      'Los suizos consumen más fondue en Nochevieja que en cualquier otra noche del año.',
    ],
  },

  planningChecklist: {
    en: [
      'Book a lakeside spot in Zurich, Geneva, or Lucerne for the best fireworks views',
      'Reserve a restaurant for a New Year\'s Eve fondue or raclette dinner',
      'Dress warmly — Swiss winters are cold, especially near the lakes',
      'Plan transport in advance as public transport runs special schedules',
      'Look into Silvesterkläuse events in Appenzell if visiting eastern Switzerland',
    ],
    fr: [
      'Réserver un emplacement au bord du lac à Zurich, Genève ou Lucerne pour les meilleurs feux d\'artifice',
      'Réserver un restaurant pour un dîner de fondue ou raclette du Nouvel An',
      'S\'habiller chaudement — les hivers suisses sont froids, surtout au bord des lacs',
      'Planifier les transports à l\'avance car les transports en commun fonctionnent avec des horaires spéciaux',
      'Se renseigner sur les événements des Silvesterkläuse à Appenzell si vous visitez l\'est de la Suisse',
    ],
    es: [
      'Reservar un lugar junto al lago en Zúrich, Ginebra o Lucerna para las mejores vistas de los fuegos artificiales',
      'Reservar un restaurante para una cena de fondue o raclette de Nochevieja',
      'Abrigarse bien — los inviernos suizos son fríos, especialmente cerca de los lagos',
      'Planificar el transporte con antelación ya que el transporte público tiene horarios especiales',
      'Informarse sobre los eventos de Silvesterkläuse en Appenzell si se visita el este de Suiza',
    ],
  },

  relatedHolidays: ['ch_christmas', 'ch_st-stephens-day'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Switzerland — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in Switzerland? Live countdown to January 1, Swiss traditions, fireworks, and celebration guide.",
      keywords: ["New Year's Day Switzerland", 'Swiss New Year', 'Neujahrstag', 'Switzerland public holidays', "New Year's countdown Switzerland"],
    },
    fr: {
      titleTemplate: 'Jour de l\'An {year} Suisse — Compte à rebours et guide',
      descriptionTemplate: 'Quand est le Jour de l\'An {year} en Suisse ? Compte à rebours, traditions suisses, feux d\'artifice et guide de célébration.',
      keywords: ['Jour de l\'An Suisse', 'Nouvel An Suisse', 'Neujahrstag', 'jours fériés Suisse', 'compte à rebours Nouvel An'],
    },
    es: {
      titleTemplate: 'Año Nuevo {year} Suiza — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Año Nuevo {year} en Suiza? Cuenta regresiva, tradiciones suizas, fuegos artificiales y guía de celebración.',
      keywords: ['Año Nuevo Suiza', 'Neujahrstag', 'festivos Suiza', 'cuenta regresiva Año Nuevo', 'tradiciones suizas Año Nuevo'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in Switzerland?", fr: 'Quand est le Jour de l\'An {year} en Suisse ?', es: '¿Cuándo es el Año Nuevo {year} en Suiza?' },
      answer: {
        en: "New Year's Day {year} in Switzerland is on {date} ({dayOfWeek}). It is always January 1 and is a public holiday in all 26 cantons.",
        fr: 'Le Jour de l\'An {year} en Suisse tombe le {date} ({dayOfWeek}). C\'est toujours le 1er janvier et c\'est un jour férié dans les 26 cantons.',
        es: 'El Año Nuevo {year} en Suiza es el {date} ({dayOfWeek}). Es siempre el 1 de enero y es festivo en los 26 cantones.',
      },
    },
    {
      question: { en: 'Where are the best New Year\'s fireworks in Switzerland?', fr: 'Où sont les meilleurs feux d\'artifice du Nouvel An en Suisse ?', es: '¿Dónde están los mejores fuegos artificiales de Año Nuevo en Suiza?' },
      answer: {
        en: 'The best New Year\'s fireworks in Switzerland are over Lake Zurich, at the Jet d\'Eau in Geneva, over Lake Lucerne, and at the Rhine Falls near Schaffhausen. Many mountain resorts also host spectacular displays.',
        fr: 'Les meilleurs feux d\'artifice du Nouvel An en Suisse sont au-dessus du lac de Zurich, au Jet d\'eau à Genève, au-dessus du lac des Quatre-Cantons à Lucerne et aux chutes du Rhin près de Schaffhouse. De nombreuses stations de montagne organisent également des spectacles spectaculaires.',
        es: 'Los mejores fuegos artificiales de Año Nuevo en Suiza son sobre el lago de Zúrich, en el Jet d\'Eau de Ginebra, sobre el lago de Lucerna y en las cataratas del Rin cerca de Schaffhausen. Muchas estaciones de montaña también organizan espectáculos impresionantes.',
      },
    },
    {
      question: { en: 'What is the Silvesterkläuse tradition?', fr: 'Qu\'est-ce que la tradition des Silvesterkläuse ?', es: '¿Qué es la tradición de los Silvesterkläuse?' },
      answer: {
        en: 'Silvesterkläuse is a folk tradition in Appenzell Ausserrhoden where costumed figures go door-to-door on Old New Year\'s Eve (January 13, Julian calendar) and New Year\'s Eve, yodelling and ringing bells to wish good fortune. The three types of figures are the "schöne" (beautiful), "wüeschte" (ugly), and "schö-wüeschte" (beautiful-ugly).',
        fr: 'Les Silvesterkläuse sont une tradition populaire à Appenzell Rhodes-Extérieures où des personnages costumés font du porte-à-porte la veille de l\'ancien Nouvel An (13 janvier, calendrier julien) et la Saint-Sylvestre, en yodlant et en faisant sonner des cloches pour souhaiter bonne fortune. Les trois types de personnages sont les « schöne » (beaux), les « wüeschte » (laids) et les « schö-wüeschte » (beaux-laids).',
        es: 'Los Silvesterkläuse son una tradición popular en Appenzell Rodas Exteriores donde figuras disfrazadas van de puerta en puerta en la víspera del Antiguo Año Nuevo (13 de enero, calendario juliano) y en Nochevieja, haciendo yodel y tocando campanas para desear buena fortuna. Los tres tipos de figuras son los «schöne» (hermosos), los «wüeschte» (feos) y los «schö-wüeschte» (hermosos-feos).',
      },
    },
    {
      question: { en: "Is New Year's Day a public holiday in all Swiss cantons?", fr: 'Le Jour de l\'An est-il férié dans tous les cantons suisses ?', es: '¿Es festivo el Año Nuevo en todos los cantones suizos?' },
      answer: {
        en: "Yes, New Year's Day is one of the few holidays observed in all 26 cantons of Switzerland. Most Swiss businesses, shops, and government offices are closed on January 1.",
        fr: 'Oui, le Jour de l\'An est l\'un des rares jours fériés observés dans les 26 cantons de Suisse. La plupart des entreprises, magasins et bureaux gouvernementaux suisses sont fermés le 1er janvier.',
        es: 'Sí, el Año Nuevo es uno de los pocos festivos que se observan en los 26 cantones de Suiza. La mayoría de las empresas, tiendas y oficinas gubernamentales suizas están cerradas el 1 de enero.',
      },
    },
  ],

  colorTheme: 'gold-black',
  icon: '🎆',
};

// ---------------------------------------------------------------------------
// Swiss National Day — August 1
// ---------------------------------------------------------------------------

const nationalDay: HolidayData = {
  id: 'ch_national-day',
  countryCode: 'ch',
  slugs: { en: 'national-day', fr: 'fete-nationale', es: 'dia-nacional' },
  names: { en: 'Swiss National Day', fr: 'Fête nationale suisse', es: 'Día Nacional de Suiza' },

  dateType: 'fixed',
  fixedMonth: 8,
  fixedDay: 1,

  descriptions: {
    en: 'Swiss National Day on August 1 celebrates the founding of the Swiss Confederation in 1291. Known as Bundesfeiertag in German and Fête nationale in French, it is marked by bonfires on mountaintops, fireworks, lantern parades, and patriotic speeches.',
    fr: 'La Fête nationale suisse, le 1er août, célèbre la fondation de la Confédération suisse en 1291. Connue sous le nom de Bundesfeiertag en allemand, elle est marquée par des feux de joie sur les sommets, des feux d\'artifice, des cortèges de lampions et des discours patriotiques.',
    es: 'El Día Nacional de Suiza, el 1 de agosto, celebra la fundación de la Confederación Suiza en 1291. Conocido como Bundesfeiertag en alemán y Fête nationale en francés, se celebra con hogueras en las cumbres, fuegos artificiales, desfiles de faroles y discursos patrióticos.',
  },

  history: {
    en: "Swiss National Day commemorates the Federal Charter of 1291, when the three original cantons of Uri, Schwyz, and Unterwalden formed an alliance against Habsburg rule. This pact, signed at the Rütli meadow on the shores of Lake Lucerne, is considered the founding act of Switzerland.\n\nThe legendary figure William Tell, who supposedly defied the Habsburg bailiff Gessler by refusing to bow to his hat and then shot an apple off his son's head with a crossbow, is closely tied to Swiss national identity and the spirit of August 1.\n\nAlthough August 1 has been celebrated since 1891 (the 600th anniversary), it only became an official paid public holiday across all cantons in 1994 after a popular vote. It is the only national holiday observed in all 26 cantons.",
    fr: "La Fête nationale suisse commémore le Pacte fédéral de 1291, lorsque les trois cantons originels d'Uri, Schwyz et Unterwald formèrent une alliance contre la domination des Habsbourg. Ce pacte, signé à la prairie du Grütli sur les rives du lac des Quatre-Cantons, est considéré comme l'acte fondateur de la Suisse.\n\nLa figure légendaire de Guillaume Tell, qui aurait défié le bailli habsbourgeois Gessler en refusant de s'incliner devant son chapeau puis aurait abattu une pomme sur la tête de son fils avec une arbalète, est étroitement liée à l'identité nationale suisse et à l'esprit du 1er août.\n\nBien que le 1er août soit célébré depuis 1891 (le 600e anniversaire), il n'est devenu un jour férié officiel payé dans tous les cantons qu'en 1994, après un vote populaire. C'est le seul jour férié national observé dans les 26 cantons.",
    es: "El Día Nacional de Suiza conmemora el Pacto Federal de 1291, cuando los tres cantones originales de Uri, Schwyz y Unterwalden formaron una alianza contra el dominio de los Habsburgo. Este pacto, firmado en la pradera de Rütli a orillas del lago de Lucerna, se considera el acto fundacional de Suiza.\n\nLa figura legendaria de Guillermo Tell, que supuestamente desafió al alguacil de los Habsburgo, Gessler, al negarse a inclinarse ante su sombrero y luego disparó una flecha a una manzana sobre la cabeza de su hijo con una ballesta, está estrechamente vinculada a la identidad nacional suiza y al espíritu del 1 de agosto.\n\nAunque el 1 de agosto se celebra desde 1891 (el 600.° aniversario), no se convirtió en un día festivo oficial pagado en todos los cantones hasta 1994, tras una votación popular. Es el único día festivo nacional que se observa en los 26 cantones.",
  },

  traditions: {
    en: [
      'Lighting bonfires on mountaintops and hilltops across the country',
      'Fireworks displays over lakes and in town centres',
      'Children\'s lantern parades through villages and towns',
      'Patriotic speeches by local and national officials',
      'Brunch on the farm — many Swiss farms open their doors for traditional brunches',
      'Singing the Swiss national anthem and ringing church bells',
      'Barbecues and picnics with cervelat sausages, a Swiss National Day staple',
    ],
    fr: [
      'Allumer des feux de joie sur les sommets et les collines à travers le pays',
      'Spectacles de feux d\'artifice au-dessus des lacs et dans les centres-villes',
      'Cortèges de lampions des enfants à travers les villages et les villes',
      'Discours patriotiques par les responsables locaux et nationaux',
      'Brunch à la ferme — de nombreuses fermes suisses ouvrent leurs portes pour des brunchs traditionnels',
      'Chanter l\'hymne national suisse et faire sonner les cloches des églises',
      'Barbecues et pique-niques avec des cervelas, un incontournable de la Fête nationale',
    ],
    es: [
      'Encender hogueras en las cumbres y colinas de todo el país',
      'Espectáculos de fuegos artificiales sobre los lagos y en los centros urbanos',
      'Desfiles de faroles de los niños por pueblos y ciudades',
      'Discursos patrióticos de representantes locales y nacionales',
      'Brunch en la granja — muchas granjas suizas abren sus puertas para brunchs tradicionales',
      'Cantar el himno nacional suizo y hacer sonar las campanas de las iglesias',
      'Barbacoas y pícnics con salchichas cervelat, un clásico del Día Nacional',
    ],
  },

  funFacts: {
    en: [
      'Swiss National Day only became a paid public holiday in all cantons in 1994, after a national referendum.',
      'The Rütli meadow, where the founding oath was supposedly taken in 1291, is accessible only by boat and is a national monument.',
      'The William Tell legend, central to Swiss identity, has never been historically verified — he may be entirely mythical.',
      'Switzerland consumes more fireworks per capita on August 1 than almost any other country on their national day.',
      'The cervelat sausage, the unofficial national sausage of Switzerland, is eaten in enormous quantities on August 1.',
    ],
    fr: [
      'La Fête nationale suisse n\'est devenue un jour férié payé dans tous les cantons qu\'en 1994, après un référendum national.',
      'La prairie du Grütli, où le serment fondateur aurait été prononcé en 1291, n\'est accessible que par bateau et constitue un monument national.',
      'La légende de Guillaume Tell, centrale pour l\'identité suisse, n\'a jamais été vérifiée historiquement — il pourrait être entièrement mythique.',
      'La Suisse consomme plus de feux d\'artifice par habitant le 1er août que presque tout autre pays lors de sa fête nationale.',
      'Le cervelas, la saucisse nationale officieuse de la Suisse, est consommé en quantités énormes le 1er août.',
    ],
    es: [
      'El Día Nacional de Suiza solo se convirtió en festivo pagado en todos los cantones en 1994, tras un referéndum nacional.',
      'La pradera de Rütli, donde supuestamente se pronunció el juramento fundacional en 1291, solo es accesible en barco y es un monumento nacional.',
      'La leyenda de Guillermo Tell, central en la identidad suiza, nunca ha sido verificada históricamente — podría ser enteramente mítico.',
      'Suiza consume más fuegos artificiales per cápita el 1 de agosto que casi cualquier otro país en su día nacional.',
      'La salchicha cervelat, la salchicha nacional no oficial de Suiza, se consume en cantidades enormes el 1 de agosto.',
    ],
  },

  planningChecklist: {
    en: [
      'Reserve a brunch-on-the-farm spot early — they sell out quickly',
      'Find a hilltop or lakeside location for the best bonfire and fireworks views',
      'Stock up on cervelat sausages and grilling supplies for a barbecue',
      'Check local municipality schedules for lantern parade times',
      'Bring a jacket — August evenings in the Alps can be cool',
    ],
    fr: [
      'Réserver un brunch à la ferme tôt — les places partent vite',
      'Trouver un sommet ou un emplacement au bord du lac pour les meilleurs feux de joie et feux d\'artifice',
      'Faire le plein de cervelas et de fournitures de grillade pour un barbecue',
      'Consulter les horaires des cortèges de lampions auprès de la commune',
      'Prendre une veste — les soirées d\'août dans les Alpes peuvent être fraîches',
    ],
    es: [
      'Reservar un brunch en la granja con antelación — se agotan rápido',
      'Encontrar una colina o un lugar junto al lago para las mejores vistas de hogueras y fuegos artificiales',
      'Abastecerse de salchichas cervelat y suministros para la barbacoa',
      'Consultar los horarios de los desfiles de faroles en el municipio local',
      'Llevar una chaqueta — las noches de agosto en los Alpes pueden ser frescas',
    ],
  },

  relatedHolidays: ['ch_ascension-day', 'ch_christmas'],

  seo: {
    en: {
      titleTemplate: 'Swiss National Day {year} — August 1 Countdown & Guide',
      descriptionTemplate: 'When is Swiss National Day {year}? Live countdown to August 1, Bundesfeiertag history, bonfires, fireworks, and traditions.',
      keywords: ['Swiss National Day', 'Bundesfeiertag', 'August 1 Switzerland', 'Fête nationale suisse', 'Switzerland public holidays'],
    },
    fr: {
      titleTemplate: 'Fête nationale suisse {year} — Compte à rebours du 1er août',
      descriptionTemplate: 'Quand est la Fête nationale suisse {year} ? Compte à rebours, histoire, feux de joie, feux d\'artifice et traditions.',
      keywords: ['Fête nationale suisse', 'Bundesfeiertag', '1er août Suisse', 'jours fériés Suisse', 'fête nationale 1er août'],
    },
    es: {
      titleTemplate: 'Día Nacional de Suiza {year} — Cuenta regresiva del 1 de agosto',
      descriptionTemplate: '¿Cuándo es el Día Nacional de Suiza {year}? Cuenta regresiva, historia, hogueras, fuegos artificiales y tradiciones.',
      keywords: ['Día Nacional de Suiza', 'Bundesfeiertag', '1 de agosto Suiza', 'festivos Suiza', 'fiesta nacional suiza'],
    },
  },

  faq: [
    {
      question: { en: 'When is Swiss National Day {year}?', fr: 'Quand est la Fête nationale suisse {year} ?', es: '¿Cuándo es el Día Nacional de Suiza {year}?' },
      answer: {
        en: 'Swiss National Day {year} is on {date} ({dayOfWeek}). It is always August 1 and is the only national public holiday observed in all 26 Swiss cantons.',
        fr: 'La Fête nationale suisse {year} tombe le {date} ({dayOfWeek}). C\'est toujours le 1er août et c\'est le seul jour férié national observé dans les 26 cantons suisses.',
        es: 'El Día Nacional de Suiza {year} es el {date} ({dayOfWeek}). Es siempre el 1 de agosto y es el único festivo nacional que se observa en los 26 cantones suizos.',
      },
    },
    {
      question: { en: 'What is the Rütli oath?', fr: 'Qu\'est-ce que le serment du Grütli ?', es: '¿Qué es el juramento de Rütli?' },
      answer: {
        en: 'The Rütli oath refers to the legendary pact of 1291 where representatives of the three forest cantons (Uri, Schwyz, and Unterwalden) swore mutual assistance against Habsburg rule at the Rütli meadow on Lake Lucerne. This alliance is considered the founding of the Swiss Confederation.',
        fr: 'Le serment du Grütli fait référence au pacte légendaire de 1291 où les représentants des trois cantons forestiers (Uri, Schwyz et Unterwald) se jurèrent assistance mutuelle contre la domination des Habsbourg sur la prairie du Grütli au bord du lac des Quatre-Cantons. Cette alliance est considérée comme la fondation de la Confédération suisse.',
        es: 'El juramento de Rütli se refiere al legendario pacto de 1291 en el que los representantes de los tres cantones forestales (Uri, Schwyz y Unterwalden) se juraron asistencia mutua contra el dominio de los Habsburgo en la pradera de Rütli junto al lago de Lucerna. Esta alianza se considera la fundación de la Confederación Suiza.',
      },
    },
    {
      question: { en: 'Is Swiss National Day a public holiday across all cantons?', fr: 'La Fête nationale est-elle fériée dans tous les cantons ?', es: '¿Es festivo el Día Nacional en todos los cantones?' },
      answer: {
        en: 'Yes, August 1 is the only national public holiday observed in all 26 cantons. It became a paid holiday nationwide in 1994 after a popular referendum. Before that, its observance varied by canton.',
        fr: 'Oui, le 1er août est le seul jour férié national observé dans les 26 cantons. Il est devenu un jour férié payé à l\'échelle nationale en 1994 après un référendum populaire. Avant cela, son observance variait selon les cantons.',
        es: 'Sí, el 1 de agosto es el único festivo nacional que se observa en los 26 cantones. Se convirtió en festivo pagado a nivel nacional en 1994 tras un referéndum popular. Antes de eso, su observancia variaba según el cantón.',
      },
    },
    {
      question: { en: 'What is a brunch on the farm?', fr: 'Qu\'est-ce qu\'un brunch à la ferme ?', es: '¿Qué es un brunch en la granja?' },
      answer: {
        en: 'Brunch on the farm (1. August-Brunch) is a beloved Swiss National Day tradition where farms across the country open their doors and serve a lavish brunch featuring local products like fresh bread, cheeses, meats, butter, jams, and milk. It was started in 1993 and has become one of the most popular August 1 activities.',
        fr: 'Le brunch à la ferme (Brunch du 1er août) est une tradition chère à la Fête nationale suisse où des fermes à travers le pays ouvrent leurs portes et servent un copieux brunch composé de produits locaux comme du pain frais, des fromages, des viandes, du beurre, des confitures et du lait. Lancé en 1993, il est devenu l\'une des activités les plus populaires du 1er août.',
        es: 'El brunch en la granja (Brunch del 1 de agosto) es una querida tradición del Día Nacional de Suiza donde granjas de todo el país abren sus puertas y sirven un abundante brunch con productos locales como pan fresco, quesos, embutidos, mantequilla, mermeladas y leche. Se inició en 1993 y se ha convertido en una de las actividades más populares del 1 de agosto.',
      },
    },
  ],

  colorTheme: 'red-white',
  icon: '🇨🇭',
};

// ---------------------------------------------------------------------------
// Ascension Day — 39 days after Easter
// ---------------------------------------------------------------------------

const ascensionDay: HolidayData = {
  id: 'ch_ascension-day',
  countryCode: 'ch',
  slugs: { en: 'ascension-day', fr: 'ascension', es: 'dia-de-la-ascension' },
  names: { en: 'Ascension Day', fr: 'Ascension', es: 'Día de la Ascensión' },

  dateType: 'calculated',
  calculateDate: getAscensionDay,

  descriptions: {
    en: 'Ascension Day (Auffahrt in German, Ascension in French) is a public holiday in Switzerland, falling 39 days after Easter Sunday. It commemorates the ascension of Jesus Christ into heaven and always falls on a Thursday, creating a popular long weekend.',
    fr: "Le jour de l'Ascension (Auffahrt en allemand) est un jour férié en Suisse, tombant 39 jours après le dimanche de Pâques. Il commémore l'ascension de Jésus-Christ au ciel et tombe toujours un jeudi, créant un week-end prolongé très apprécié.",
    es: 'El Día de la Ascensión (Auffahrt en alemán, Ascension en francés) es un día festivo en Suiza, que cae 39 días después del Domingo de Pascua. Conmemora la ascensión de Jesucristo al cielo y siempre cae en jueves, creando un popular fin de semana largo.',
  },

  history: {
    en: "Ascension Day has been observed as a Christian holiday in Switzerland since the early medieval period. The feast commemorates the biblical account of Jesus ascending to heaven 40 days after his resurrection (counted inclusively from Easter Sunday, it falls on the 39th day after).\n\nIn Switzerland, Ascension Day is one of the most consistently observed holidays across all cantons and linguistic regions. Historically, Auffahrt was associated with processions through fields and countryside, a tradition that evolved from the ancient Rogation Days when Christians would process through fields to pray for a good harvest.\n\nToday, the Thursday holiday creates a popular \"bridge day\" (Brückentag) where many Swiss take Friday off to enjoy a four-day weekend. This makes Ascension weekend one of the busiest travel periods in Switzerland, with families heading to the mountains, lakes, or abroad.",
    fr: "Le jour de l'Ascension est observé comme fête chrétienne en Suisse depuis le début du Moyen Âge. La fête commémore le récit biblique de l'ascension de Jésus au ciel 40 jours après sa résurrection (comptés inclusivement à partir du dimanche de Pâques, elle tombe le 39e jour après).\n\nEn Suisse, l'Ascension est l'un des jours fériés les plus uniformément observés dans tous les cantons et régions linguistiques. Historiquement, l'Auffahrt était associée à des processions à travers les champs et la campagne, une tradition qui a évolué à partir des anciens jours des Rogations, où les chrétiens processionnaient dans les champs pour prier pour une bonne récolte.\n\nAujourd'hui, le jeudi férié crée un « jour pont » (Brückentag) populaire où de nombreux Suisses prennent le vendredi de congé pour profiter d'un week-end de quatre jours. Cela fait du week-end de l'Ascension l'une des périodes de voyage les plus chargées en Suisse, les familles se rendant dans les montagnes, au bord des lacs ou à l'étranger.",
    es: "El Día de la Ascensión se ha observado como festividad cristiana en Suiza desde principios de la época medieval. La fiesta conmemora el relato bíblico de la ascensión de Jesús al cielo 40 días después de su resurrección (contados inclusivamente desde el Domingo de Pascua, cae el día 39 después).\n\nEn Suiza, el Día de la Ascensión es uno de los festivos más uniformemente observados en todos los cantones y regiones lingüísticas. Históricamente, el Auffahrt estaba asociado con procesiones por los campos y el campo, una tradición que evolucionó de los antiguos Días de Rogativas, cuando los cristianos procesionaban por los campos para rezar por una buena cosecha.\n\nHoy en día, el festivo del jueves crea un popular «día puente» (Brückentag) en el que muchos suizos se toman el viernes libre para disfrutar de un fin de semana de cuatro días. Esto convierte el fin de semana de la Ascensión en uno de los períodos de viaje más concurridos de Suiza, con familias dirigiéndose a las montañas, los lagos o al extranjero.",
  },

  traditions: {
    en: [
      'Taking a "bridge day" on Friday to enjoy a four-day weekend',
      'Hiking in the Swiss Alps as spring weather arrives',
      'Attending church services to commemorate the Ascension',
      'Family excursions to lakes, mountains, or nearby countries',
      'Traditional processions through fields in some rural communities',
      'Outdoor barbecues and picnics celebrating the spring season',
    ],
    fr: [
      'Prendre un « jour pont » le vendredi pour profiter d\'un week-end de quatre jours',
      'Randonner dans les Alpes suisses avec l\'arrivée du beau temps printanier',
      'Assister aux services religieux commémorant l\'Ascension',
      'Excursions familiales vers les lacs, les montagnes ou les pays voisins',
      'Processions traditionnelles à travers les champs dans certaines communautés rurales',
      'Barbecues et pique-niques en plein air célébrant la saison printanière',
    ],
    es: [
      'Tomarse un «día puente» el viernes para disfrutar de un fin de semana de cuatro días',
      'Hacer senderismo en los Alpes suizos con la llegada del buen tiempo primaveral',
      'Asistir a servicios religiosos para conmemorar la Ascensión',
      'Excursiones familiares a lagos, montañas o países cercanos',
      'Procesiones tradicionales por los campos en algunas comunidades rurales',
      'Barbacoas y pícnics al aire libre celebrando la temporada de primavera',
    ],
  },

  funFacts: {
    en: [
      'Ascension Day always falls on a Thursday, exactly 39 days after Easter Sunday.',
      'The "bridge day" phenomenon (Brückentag) makes Ascension weekend one of Switzerland\'s busiest travel periods — roads and trains are packed.',
      'In some Swiss villages, Ascension Day was traditionally when farmers would walk their livestock to summer Alpine pastures for the first time.',
      'Switzerland is one of the few countries where Ascension Day is a public holiday in every single canton.',
      'Ascension Day can fall as early as April 30 or as late as June 3, depending on when Easter falls.',
    ],
    fr: [
      'L\'Ascension tombe toujours un jeudi, exactement 39 jours après le dimanche de Pâques.',
      'Le phénomène du « jour pont » (Brückentag) fait du week-end de l\'Ascension l\'une des périodes de voyage les plus chargées de Suisse — routes et trains sont bondés.',
      'Dans certains villages suisses, l\'Ascension était traditionnellement le moment où les agriculteurs menaient leur bétail aux pâturages alpins d\'été pour la première fois.',
      'La Suisse est l\'un des rares pays où l\'Ascension est un jour férié dans absolument tous les cantons.',
      'L\'Ascension peut tomber dès le 30 avril ou aussi tard que le 3 juin, selon la date de Pâques.',
    ],
    es: [
      'El Día de la Ascensión siempre cae en jueves, exactamente 39 días después del Domingo de Pascua.',
      'El fenómeno del «día puente» (Brückentag) convierte el fin de semana de la Ascensión en uno de los períodos de viaje más concurridos de Suiza — carreteras y trenes van llenos.',
      'En algunos pueblos suizos, el Día de la Ascensión era tradicionalmente cuando los granjeros llevaban su ganado a los pastos alpinos de verano por primera vez.',
      'Suiza es uno de los pocos países donde la Ascensión es festivo en absolutamente todos los cantones.',
      'La Ascensión puede caer tan pronto como el 30 de abril o tan tarde como el 3 de junio, dependiendo de cuándo cae la Pascua.',
    ],
  },

  planningChecklist: {
    en: [
      'Book travel and accommodation early — Ascension weekend is extremely popular',
      'Consider taking the Friday bridge day off for a four-day weekend',
      'Plan outdoor activities like hiking, as spring weather is typically pleasant',
      'Check mountain lift and cable car opening dates, as some open for the season around Ascension',
      'Reserve restaurant tables in advance, especially in popular tourist areas',
    ],
    fr: [
      'Réserver les voyages et l\'hébergement tôt — le week-end de l\'Ascension est extrêmement populaire',
      'Envisager de prendre le vendredi pont pour un week-end de quatre jours',
      'Planifier des activités de plein air comme la randonnée, car le temps printanier est généralement agréable',
      'Vérifier les dates d\'ouverture des remontées mécaniques et téléphériques, car certains ouvrent pour la saison autour de l\'Ascension',
      'Réserver les tables de restaurant à l\'avance, surtout dans les zones touristiques populaires',
    ],
    es: [
      'Reservar viajes y alojamiento con antelación — el fin de semana de la Ascensión es extremadamente popular',
      'Considerar tomarse el viernes puente para un fin de semana de cuatro días',
      'Planificar actividades al aire libre como senderismo, ya que el tiempo primaveral suele ser agradable',
      'Comprobar las fechas de apertura de teleféricos y telecabinas, ya que algunos abren para la temporada en torno a la Ascensión',
      'Reservar mesas de restaurante con antelación, especialmente en zonas turísticas populares',
    ],
  },

  relatedHolidays: ['ch_whit-monday', 'ch_national-day'],

  seo: {
    en: {
      titleTemplate: 'Ascension Day {year} Switzerland — Date & Countdown',
      descriptionTemplate: 'When is Ascension Day {year} in Switzerland? Live countdown, Auffahrt history, traditions, and long weekend planning tips.',
      keywords: ['Ascension Day Switzerland', 'Auffahrt', 'Ascension Suisse', 'Swiss public holidays', 'Ascension Day date'],
    },
    fr: {
      titleTemplate: 'Ascension {year} Suisse — Date et compte à rebours',
      descriptionTemplate: 'Quand est l\'Ascension {year} en Suisse ? Compte à rebours, histoire de l\'Auffahrt, traditions et conseils pour le week-end prolongé.',
      keywords: ['Ascension Suisse', 'Auffahrt', 'jour férié Ascension', 'jours fériés Suisse', 'date Ascension'],
    },
    es: {
      titleTemplate: 'Ascensión {year} Suiza — Fecha y cuenta regresiva',
      descriptionTemplate: '¿Cuándo es la Ascensión {year} en Suiza? Cuenta regresiva, historia del Auffahrt, tradiciones y consejos para el puente.',
      keywords: ['Ascensión Suiza', 'Auffahrt', 'festivo Ascensión', 'festivos Suiza', 'fecha Ascensión'],
    },
  },

  faq: [
    {
      question: { en: 'When is Ascension Day {year} in Switzerland?', fr: 'Quand est l\'Ascension {year} en Suisse ?', es: '¿Cuándo es la Ascensión {year} en Suiza?' },
      answer: {
        en: 'Ascension Day {year} in Switzerland falls on {date} ({dayOfWeek}). It is always a Thursday, 39 days after Easter Sunday.',
        fr: 'L\'Ascension {year} en Suisse tombe le {date} ({dayOfWeek}). C\'est toujours un jeudi, 39 jours après le dimanche de Pâques.',
        es: 'La Ascensión {year} en Suiza cae el {date} ({dayOfWeek}). Es siempre un jueves, 39 días después del Domingo de Pascua.',
      },
    },
    {
      question: { en: 'Is the Friday after Ascension Day a holiday in Switzerland?', fr: 'Le vendredi après l\'Ascension est-il férié en Suisse ?', es: '¿Es festivo el viernes después de la Ascensión en Suiza?' },
      answer: {
        en: 'No, the Friday after Ascension Day is not an official public holiday in Switzerland. However, many employers give the day off and most Swiss take it as a "bridge day" (Brückentag) to create a four-day weekend.',
        fr: 'Non, le vendredi après l\'Ascension n\'est pas un jour férié officiel en Suisse. Cependant, de nombreux employeurs accordent le jour de congé et la plupart des Suisses le prennent comme « jour pont » (Brückentag) pour créer un week-end de quatre jours.',
        es: 'No, el viernes después de la Ascensión no es un festivo oficial en Suiza. Sin embargo, muchos empleadores dan el día libre y la mayoría de los suizos lo toman como «día puente» (Brückentag) para crear un fin de semana de cuatro días.',
      },
    },
    {
      question: { en: 'What is Auffahrt?', fr: 'Qu\'est-ce que l\'Auffahrt ?', es: '¿Qué es el Auffahrt?' },
      answer: {
        en: 'Auffahrt is the Swiss German name for Ascension Day. The word literally means "ascent" or "going up," referring to the Christian belief in the ascension of Jesus Christ into heaven. In French-speaking Switzerland, it is simply called Ascension.',
        fr: 'Auffahrt est le nom suisse alémanique du jour de l\'Ascension. Le mot signifie littéralement « montée », en référence à la croyance chrétienne en l\'ascension de Jésus-Christ au ciel. En Suisse romande, on l\'appelle simplement Ascension.',
        es: 'Auffahrt es el nombre en alemán suizo del Día de la Ascensión. La palabra significa literalmente «ascenso» o «subida», refiriéndose a la creencia cristiana en la ascensión de Jesucristo al cielo. En la Suiza francófona se llama simplemente Ascension.',
      },
    },
    {
      question: { en: 'Is Ascension Day a public holiday in all Swiss cantons?', fr: 'L\'Ascension est-elle fériée dans tous les cantons suisses ?', es: '¿Es festivo la Ascensión en todos los cantones suizos?' },
      answer: {
        en: 'Yes, Ascension Day is a public holiday in all 26 cantons of Switzerland. It is one of the most universally observed holidays in the country, alongside New Year\'s Day, Swiss National Day, and Christmas Day.',
        fr: 'Oui, l\'Ascension est un jour férié dans les 26 cantons de Suisse. C\'est l\'un des jours fériés les plus universellement observés dans le pays, aux côtés du Jour de l\'An, de la Fête nationale suisse et de Noël.',
        es: 'Sí, la Ascensión es festivo en los 26 cantones de Suiza. Es uno de los festivos más universalmente observados en el país, junto con el Año Nuevo, el Día Nacional Suizo y la Navidad.',
      },
    },
  ],

  colorTheme: 'sky-blue',
  icon: '✝️',
};

// ---------------------------------------------------------------------------
// Whit Monday — 50 days after Easter
// ---------------------------------------------------------------------------

const whitMonday: HolidayData = {
  id: 'ch_whit-monday',
  countryCode: 'ch',
  slugs: { en: 'whit-monday', fr: 'lundi-de-pentecote', es: 'lunes-de-pentecostes' },
  names: { en: 'Whit Monday', fr: 'Lundi de Pentecôte', es: 'Lunes de Pentecostés' },

  dateType: 'calculated',
  calculateDate: getWhitMonday,

  descriptions: {
    en: 'Whit Monday (Pfingstmontag in German, Lundi de Pentecôte in French) is a public holiday in Switzerland, falling the day after Whit Sunday (Pentecost), 50 days after Easter. It extends the Pentecost weekend and is celebrated with outdoor activities and family gatherings.',
    fr: 'Le Lundi de Pentecôte (Pfingstmontag en allemand) est un jour férié en Suisse, tombant le lendemain du dimanche de Pentecôte, 50 jours après Pâques. Il prolonge le week-end de la Pentecôte et est célébré avec des activités de plein air et des réunions familiales.',
    es: 'El Lunes de Pentecostés (Pfingstmontag en alemán, Lundi de Pentecôte en francés) es un día festivo en Suiza, que cae el día después del Domingo de Pentecostés, 50 días después de Pascua. Prolonga el fin de semana de Pentecostés y se celebra con actividades al aire libre y reuniones familiares.',
  },

  history: {
    en: "Whit Monday commemorates the descent of the Holy Spirit upon the apostles and followers of Jesus Christ, as described in the Acts of the Apostles. Pentecost (from the Greek \"pentekostos,\" meaning fiftieth) falls on the 50th day after Easter Sunday.\n\nIn Switzerland, Whit Monday has been observed as a public holiday for centuries across most cantons. The day following Pentecost Sunday was traditionally a day of rest and community celebration, allowing worshippers to extend their observance of this important Christian feast.\n\nWhile the religious significance of Whit Monday has diminished for many Swiss, it remains a cherished public holiday. The late spring timing makes it an ideal day for outdoor excursions, and it is one of the most popular weekends for domestic tourism in Switzerland.",
    fr: "Le Lundi de Pentecôte commémore la descente du Saint-Esprit sur les apôtres et les disciples de Jésus-Christ, comme décrit dans les Actes des Apôtres. La Pentecôte (du grec « pentekostos », signifiant cinquantième) tombe le 50e jour après le dimanche de Pâques.\n\nEn Suisse, le Lundi de Pentecôte est observé comme jour férié depuis des siècles dans la plupart des cantons. Le jour suivant le dimanche de Pentecôte était traditionnellement un jour de repos et de célébration communautaire, permettant aux fidèles de prolonger leur observance de cette importante fête chrétienne.\n\nBien que la signification religieuse du Lundi de Pentecôte ait diminué pour de nombreux Suisses, il reste un jour férié apprécié. Son positionnement à la fin du printemps en fait une journée idéale pour les excursions en plein air, et c'est l'un des week-ends les plus populaires pour le tourisme intérieur en Suisse.",
    es: "El Lunes de Pentecostés conmemora el descenso del Espíritu Santo sobre los apóstoles y seguidores de Jesucristo, como se describe en los Hechos de los Apóstoles. Pentecostés (del griego «pentekostos», que significa quincuagésimo) cae el día 50 después del Domingo de Pascua.\n\nEn Suiza, el Lunes de Pentecostés se ha observado como día festivo durante siglos en la mayoría de los cantones. El día siguiente al Domingo de Pentecostés era tradicionalmente un día de descanso y celebración comunitaria, permitiendo a los fieles prolongar su observancia de esta importante fiesta cristiana.\n\nAunque el significado religioso del Lunes de Pentecostés ha disminuido para muchos suizos, sigue siendo un día festivo apreciado. Su ubicación a finales de primavera lo convierte en un día ideal para excursiones al aire libre, y es uno de los fines de semana más populares para el turismo nacional en Suiza.",
  },

  traditions: {
    en: [
      'Enjoying a three-day Pentecost weekend with family outings',
      'Hiking in the Alps and Swiss countryside in late spring weather',
      'Attending open-air festivals and markets',
      'Visiting lakes for the first swims and boat trips of the season',
      'Church services commemorating the descent of the Holy Spirit',
      'Cycling tours through the Swiss valleys',
    ],
    fr: [
      'Profiter d\'un week-end de Pentecôte de trois jours avec des sorties en famille',
      'Randonner dans les Alpes et la campagne suisse par temps de fin de printemps',
      'Assister à des festivals et marchés en plein air',
      'Visiter les lacs pour les premières baignades et sorties en bateau de la saison',
      'Services religieux commémorant la descente du Saint-Esprit',
      'Tours à vélo à travers les vallées suisses',
    ],
    es: [
      'Disfrutar de un fin de semana de Pentecostés de tres días con excursiones familiares',
      'Hacer senderismo en los Alpes y el campo suizo con el buen tiempo de finales de primavera',
      'Asistir a festivales y mercados al aire libre',
      'Visitar los lagos para los primeros baños y paseos en barco de la temporada',
      'Servicios religiosos que conmemoran el descenso del Espíritu Santo',
      'Tours en bicicleta por los valles suizos',
    ],
  },

  funFacts: {
    en: [
      'Whit Monday always falls between May 11 and June 14, depending on when Easter occurs.',
      'The word "Pentecost" comes from the Greek "pentekostos" meaning "fiftieth," as it is the 50th day after Easter.',
      'Pfingstmontag (Whit Monday) is one of the most popular weekends for Swiss mountain hut openings.',
      'In some Swiss German dialects, Pentecost is also called "Pfingste" or "Pfingscht."',
      'The Pentecost weekend typically marks the start of the Swiss outdoor swimming season at public lake beaches (Badis).',
    ],
    fr: [
      'Le Lundi de Pentecôte tombe toujours entre le 11 mai et le 14 juin, selon la date de Pâques.',
      'Le mot « Pentecôte » vient du grec « pentekostos » signifiant « cinquantième », car c\'est le 50e jour après Pâques.',
      'Le Pfingstmontag (Lundi de Pentecôte) est l\'un des week-ends les plus populaires pour l\'ouverture des refuges de montagne suisses.',
      'Dans certains dialectes suisses allemands, la Pentecôte est aussi appelée « Pfingste » ou « Pfingscht ».',
      'Le week-end de la Pentecôte marque généralement le début de la saison de baignade en plein air dans les lacs suisses (Badis).',
    ],
    es: [
      'El Lunes de Pentecostés siempre cae entre el 11 de mayo y el 14 de junio, dependiendo de cuándo cae la Pascua.',
      'La palabra «Pentecostés» proviene del griego «pentekostos» que significa «quincuagésimo», ya que es el día 50 después de Pascua.',
      'El Pfingstmontag (Lunes de Pentecostés) es uno de los fines de semana más populares para la apertura de refugios de montaña suizos.',
      'En algunos dialectos del alemán suizo, Pentecostés también se llama «Pfingste» o «Pfingscht».',
      'El fin de semana de Pentecostés suele marcar el inicio de la temporada de natación al aire libre en los lagos suizos (Badis).',
    ],
  },

  planningChecklist: {
    en: [
      'Book accommodation early for the long Pentecost weekend',
      'Check which mountain huts and Alpine trails are open for the season',
      'Pack layers — late spring weather in Switzerland can be unpredictable',
      'Plan lake activities as public beaches begin opening for the season',
      'Book restaurant reservations in advance for popular tourist areas',
    ],
    fr: [
      'Réserver l\'hébergement tôt pour le long week-end de Pentecôte',
      'Vérifier quels refuges de montagne et sentiers alpins sont ouverts pour la saison',
      'Emporter des couches de vêtements — le temps de fin de printemps en Suisse peut être imprévisible',
      'Planifier des activités lacustres car les plages publiques commencent à ouvrir pour la saison',
      'Réserver les restaurants à l\'avance pour les zones touristiques populaires',
    ],
    es: [
      'Reservar alojamiento con antelación para el largo fin de semana de Pentecostés',
      'Comprobar qué refugios de montaña y senderos alpinos están abiertos para la temporada',
      'Llevar varias capas de ropa — el tiempo de finales de primavera en Suiza puede ser impredecible',
      'Planificar actividades lacustres ya que las playas públicas empiezan a abrir para la temporada',
      'Reservar restaurantes con antelación en zonas turísticas populares',
    ],
  },

  relatedHolidays: ['ch_ascension-day', 'ch_national-day'],

  seo: {
    en: {
      titleTemplate: 'Whit Monday {year} Switzerland — Date & Countdown',
      descriptionTemplate: 'When is Whit Monday {year} in Switzerland? Live countdown, Pfingstmontag traditions, and long weekend guide.',
      keywords: ['Whit Monday Switzerland', 'Pfingstmontag', 'Pentecost Switzerland', 'Swiss public holidays', 'Lundi de Pentecôte'],
    },
    fr: {
      titleTemplate: 'Lundi de Pentecôte {year} Suisse — Date et compte à rebours',
      descriptionTemplate: 'Quand est le Lundi de Pentecôte {year} en Suisse ? Compte à rebours, traditions et guide du week-end prolongé.',
      keywords: ['Lundi de Pentecôte Suisse', 'Pfingstmontag', 'Pentecôte Suisse', 'jours fériés Suisse', 'date Pentecôte'],
    },
    es: {
      titleTemplate: 'Lunes de Pentecostés {year} Suiza — Fecha y cuenta regresiva',
      descriptionTemplate: '¿Cuándo es el Lunes de Pentecostés {year} en Suiza? Cuenta regresiva, tradiciones y guía del puente.',
      keywords: ['Lunes de Pentecostés Suiza', 'Pfingstmontag', 'Pentecostés Suiza', 'festivos Suiza', 'fecha Pentecostés'],
    },
  },

  faq: [
    {
      question: { en: 'When is Whit Monday {year} in Switzerland?', fr: 'Quand est le Lundi de Pentecôte {year} en Suisse ?', es: '¿Cuándo es el Lunes de Pentecostés {year} en Suiza?' },
      answer: {
        en: 'Whit Monday {year} in Switzerland falls on {date} ({dayOfWeek}). It is always a Monday, 50 days after Easter Sunday.',
        fr: 'Le Lundi de Pentecôte {year} en Suisse tombe le {date} ({dayOfWeek}). C\'est toujours un lundi, 50 jours après le dimanche de Pâques.',
        es: 'El Lunes de Pentecostés {year} en Suiza cae el {date} ({dayOfWeek}). Es siempre un lunes, 50 días después del Domingo de Pascua.',
      },
    },
    {
      question: { en: 'Is Whit Monday a public holiday in all Swiss cantons?', fr: 'Le Lundi de Pentecôte est-il férié dans tous les cantons suisses ?', es: '¿Es festivo el Lunes de Pentecostés en todos los cantones suizos?' },
      answer: {
        en: 'Whit Monday is a public holiday in most Swiss cantons. However, it is not universally observed in all 26 cantons — a few cantons in central Switzerland do not officially recognise it, though most employers still give the day off.',
        fr: 'Le Lundi de Pentecôte est un jour férié dans la plupart des cantons suisses. Cependant, il n\'est pas universellement observé dans les 26 cantons — quelques cantons de Suisse centrale ne le reconnaissent pas officiellement, bien que la plupart des employeurs accordent tout de même le jour de congé.',
        es: 'El Lunes de Pentecostés es festivo en la mayoría de los cantones suizos. Sin embargo, no se observa universalmente en los 26 cantones — algunos cantones de la Suiza central no lo reconocen oficialmente, aunque la mayoría de los empleadores igualmente dan el día libre.',
      },
    },
    {
      question: { en: 'What is Pfingstmontag?', fr: 'Qu\'est-ce que le Pfingstmontag ?', es: '¿Qué es el Pfingstmontag?' },
      answer: {
        en: 'Pfingstmontag is the German name for Whit Monday, the day after Pentecost Sunday. "Pfingsten" derives from the Greek "pentekostos" (fiftieth), and "Montag" means Monday. In French-speaking Switzerland, it is called Lundi de Pentecôte.',
        fr: 'Pfingstmontag est le nom allemand du Lundi de Pentecôte, le jour après le dimanche de Pentecôte. « Pfingsten » vient du grec « pentekostos » (cinquantième) et « Montag » signifie lundi. En Suisse romande, on l\'appelle Lundi de Pentecôte.',
        es: 'Pfingstmontag es el nombre alemán del Lunes de Pentecostés, el día después del Domingo de Pentecostés. «Pfingsten» deriva del griego «pentekostos» (quincuagésimo) y «Montag» significa lunes. En la Suiza francófona se llama Lundi de Pentecôte.',
      },
    },
    {
      question: { en: 'What is there to do on Whit Monday in Switzerland?', fr: 'Que faire le Lundi de Pentecôte en Suisse ?', es: '¿Qué hacer el Lunes de Pentecostés en Suiza?' },
      answer: {
        en: 'Whit Monday in late spring is ideal for outdoor activities. Popular options include hiking in the Alps, swimming in lakes as public beaches open, cycling tours, attending open-air festivals, and visiting mountain restaurants. Many Swiss use the long weekend for short trips within Switzerland or to neighbouring countries.',
        fr: 'Le Lundi de Pentecôte, à la fin du printemps, est idéal pour les activités de plein air. Les options populaires incluent la randonnée dans les Alpes, la baignade dans les lacs avec l\'ouverture des plages publiques, les tours à vélo, les festivals en plein air et les restaurants de montagne. De nombreux Suisses profitent du long week-end pour de courts séjours en Suisse ou dans les pays voisins.',
        es: 'El Lunes de Pentecostés, a finales de primavera, es ideal para actividades al aire libre. Las opciones populares incluyen senderismo en los Alpes, nadar en lagos con la apertura de las playas públicas, tours en bicicleta, festivales al aire libre y restaurantes de montaña. Muchos suizos aprovechan el puente para escapadas cortas dentro de Suiza o a países vecinos.',
      },
    },
  ],

  colorTheme: 'white-gold',
  icon: '🕊️',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'ch_christmas',
  countryCode: 'ch',
  slugs: { en: 'christmas', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noël', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: 'Christmas Day on December 25 is one of the most important holidays in Switzerland. Known as Weihnachten in German and Noël in French, it is celebrated with fondue dinners, Christkind gift-giving traditions, beautifully decorated Advent markets, and church services.',
    fr: 'Le jour de Noël, le 25 décembre, est l\'un des jours fériés les plus importants en Suisse. Connu sous le nom de Weihnachten en allemand, il est célébré avec des dîners de fondue, la tradition du Christkind pour les cadeaux, de magnifiques marchés de l\'Avent et des offices religieux.',
    es: 'La Navidad, el 25 de diciembre, es uno de los festivos más importantes de Suiza. Conocida como Weihnachten en alemán y Noël en francés, se celebra con cenas de fondue, la tradición del Christkind para los regalos, hermosos mercados de Adviento y servicios religiosos.',
  },

  history: {
    en: "Christmas has been celebrated in Switzerland since the early Christian period, though many traditions are more recent. The Swiss Christmas tradition is deeply rooted in the country's four linguistic cultures, each bringing their own customs.\n\nIn German-speaking Switzerland, the Christkind (Christ Child) brings gifts on Christmas Eve, while in French-speaking Switzerland, Père Noël (Father Christmas) is more common. In Italian-speaking Ticino, Babbo Natale delivers presents. Swiss Advent markets (Weihnachtsmärkte) have a long tradition, with Zurich, Bern, Basel, and Montreux hosting some of the most famous.\n\nThe Swiss tradition of Advent wreaths (Adventskranz), with four candles lit on successive Sundays before Christmas, is observed across the German-speaking region. Fondue and raclette are traditional Christmas Eve meals in many families, reflecting Switzerland's famous cheese culture.",
    fr: "Noël est célébré en Suisse depuis les premiers temps du christianisme, bien que de nombreuses traditions soient plus récentes. La tradition de Noël suisse est profondément enracinée dans les quatre cultures linguistiques du pays, chacune apportant ses propres coutumes.\n\nEn Suisse alémanique, le Christkind (Enfant Jésus) apporte les cadeaux le soir de Noël, tandis qu'en Suisse romande, le Père Noël est plus courant. Au Tessin italophone, c'est Babbo Natale qui distribue les cadeaux. Les marchés de l'Avent suisses (Weihnachtsmärkte) ont une longue tradition, Zurich, Berne, Bâle et Montreux accueillant certains des plus célèbres.\n\nLa tradition suisse des couronnes de l'Avent (Adventskranz), avec quatre bougies allumées les dimanches successifs avant Noël, est observée dans toute la région germanophone. La fondue et la raclette sont des repas traditionnels du réveillon de Noël dans de nombreuses familles, reflétant la célèbre culture fromagère suisse.",
    es: "La Navidad se celebra en Suiza desde los primeros tiempos del cristianismo, aunque muchas tradiciones son más recientes. La tradición navideña suiza está profundamente arraigada en las cuatro culturas lingüísticas del país, cada una aportando sus propias costumbres.\n\nEn la Suiza germanófona, el Christkind (Niño Jesús) trae los regalos en Nochebuena, mientras que en la Suiza francófona es más común el Père Noël (Papá Noel). En el Tesino italianófono, Babbo Natale reparte los regalos. Los mercados de Adviento suizos (Weihnachtsmärkte) tienen una larga tradición, con Zúrich, Berna, Basilea y Montreux acogiendo algunos de los más famosos.\n\nLa tradición suiza de las coronas de Adviento (Adventskranz), con cuatro velas encendidas en los domingos sucesivos antes de Navidad, se observa en toda la región germanófona. La fondue y la raclette son cenas tradicionales de Nochebuena en muchas familias, reflejando la famosa cultura quesera suiza.",
  },

  traditions: {
    en: [
      'Christkind gift-giving on Christmas Eve in German-speaking Switzerland',
      'Enjoying a fondue or raclette dinner on Christmas Eve',
      'Visiting Advent markets in Zurich, Bern, Basel, and Montreux',
      'Lighting the Adventskranz (Advent wreath) on the four Sundays before Christmas',
      'Attending midnight church services (Christmesse/Messe de minuit)',
      'Baking Grittibänz (bread men) and Zimtsterne (cinnamon stars)',
      'Decorating Christmas trees with real candles in some traditional homes',
    ],
    fr: [
      'Distribution des cadeaux par le Christkind le soir de Noël en Suisse alémanique',
      'Déguster une fondue ou une raclette le soir de Noël',
      'Visiter les marchés de l\'Avent à Zurich, Berne, Bâle et Montreux',
      'Allumer l\'Adventskranz (couronne de l\'Avent) les quatre dimanches avant Noël',
      'Assister aux messes de minuit (Christmesse/Messe de minuit)',
      'Préparer des Grittibänz (bonhommes en pâte) et des Zimtsterne (étoiles à la cannelle)',
      'Décorer les sapins de Noël avec de vraies bougies dans certaines maisons traditionnelles',
    ],
    es: [
      'Entrega de regalos del Christkind en Nochebuena en la Suiza germanófona',
      'Disfrutar de una cena de fondue o raclette en Nochebuena',
      'Visitar los mercados de Adviento en Zúrich, Berna, Basilea y Montreux',
      'Encender el Adventskranz (corona de Adviento) los cuatro domingos antes de Navidad',
      'Asistir a las misas de medianoche (Christmesse/Messe de minuit)',
      'Hornear Grittibänz (muñecos de pan) y Zimtsterne (estrellas de canela)',
      'Decorar los árboles de Navidad con velas reales en algunas casas tradicionales',
    ],
  },

  funFacts: {
    en: [
      'In German-speaking Switzerland, it\'s the Christkind (Christ Child) who brings gifts, not Santa Claus. Samichlaus (St. Nicholas) visits on December 6 with treats but not main Christmas gifts.',
      'The Montreux Christmas Market, set along Lake Geneva, is considered one of the most beautiful in Europe.',
      'Swiss families consume enormous amounts of fondue and raclette during the Christmas season — cheese sales spike by over 30%.',
      'Some traditional Swiss homes still decorate their Christmas trees with real lit candles rather than electric lights.',
      'The Zurich Christmas market at the main train station (Christkindlimarkt) features a massive Swarovski-crystal-decorated Christmas tree.',
    ],
    fr: [
      'En Suisse alémanique, c\'est le Christkind (Enfant Jésus) qui apporte les cadeaux, pas le Père Noël. Le Samichlaus (Saint-Nicolas) passe le 6 décembre avec des friandises mais pas les principaux cadeaux de Noël.',
      'Le marché de Noël de Montreux, au bord du lac Léman, est considéré comme l\'un des plus beaux d\'Europe.',
      'Les familles suisses consomment d\'énormes quantités de fondue et de raclette pendant la saison de Noël — les ventes de fromage augmentent de plus de 30 %.',
      'Certaines maisons suisses traditionnelles décorent encore leurs sapins de Noël avec de vraies bougies allumées plutôt qu\'avec des guirlandes électriques.',
      'Le marché de Noël de Zurich à la gare centrale (Christkindlimarkt) présente un immense sapin décoré de cristaux Swarovski.',
    ],
    es: [
      'En la Suiza germanófona, es el Christkind (Niño Jesús) quien trae los regalos, no Papá Noel. El Samichlaus (San Nicolás) visita el 6 de diciembre con golosinas pero no con los regalos principales de Navidad.',
      'El mercado de Navidad de Montreux, a orillas del lago Lemán, está considerado uno de los más bonitos de Europa.',
      'Las familias suizas consumen cantidades enormes de fondue y raclette durante la temporada navideña — las ventas de queso aumentan más del 30 %.',
      'Algunas casas suizas tradicionales todavía decoran sus árboles de Navidad con velas reales encendidas en lugar de luces eléctricas.',
      'El mercado de Navidad de Zúrich en la estación central (Christkindlimarkt) cuenta con un enorme árbol decorado con cristales Swarovski.',
    ],
  },

  planningChecklist: {
    en: [
      'Visit Advent markets starting late November — Montreux, Zurich, Bern, and Basel are top picks',
      'Book fondue or raclette restaurant reservations for Christmas Eve',
      'Buy Grittibänz bread men from local bakeries in early December',
      'Attend a Christmas concert or church service — Swiss cathedrals host beautiful musical performances',
      'Plan skiing or mountain excursions for the Christmas to New Year week',
    ],
    fr: [
      'Visiter les marchés de l\'Avent dès fin novembre — Montreux, Zurich, Berne et Bâle sont les meilleurs choix',
      'Réserver un restaurant de fondue ou raclette pour le réveillon de Noël',
      'Acheter des Grittibänz dans les boulangeries locales début décembre',
      'Assister à un concert de Noël ou à un office — les cathédrales suisses accueillent de magnifiques concerts',
      'Planifier des excursions de ski ou de montagne pour la semaine entre Noël et le Nouvel An',
    ],
    es: [
      'Visitar los mercados de Adviento a partir de finales de noviembre — Montreux, Zúrich, Berna y Basilea son las mejores opciones',
      'Reservar un restaurante de fondue o raclette para Nochebuena',
      'Comprar Grittibänz en las panaderías locales a principios de diciembre',
      'Asistir a un concierto navideño o un servicio religioso — las catedrales suizas acogen hermosos conciertos',
      'Planificar excursiones de esquí o montaña para la semana entre Navidad y Año Nuevo',
    ],
  },

  relatedHolidays: ['ch_st-stephens-day', 'ch_new-years-day'],

  seo: {
    en: {
      titleTemplate: 'Christmas Day {year} Switzerland — Countdown & Traditions',
      descriptionTemplate: 'When is Christmas {year} in Switzerland? Live countdown, Weihnachten traditions, Advent markets, Christkind customs, and celebration guide.',
      keywords: ['Christmas Switzerland', 'Weihnachten', 'Noël Suisse', 'Swiss Christmas traditions', 'Advent markets Switzerland'],
    },
    fr: {
      titleTemplate: 'Noël {year} Suisse — Compte à rebours et traditions',
      descriptionTemplate: 'Quand est Noël {year} en Suisse ? Compte à rebours, traditions de Weihnachten, marchés de l\'Avent, coutumes du Christkind et guide.',
      keywords: ['Noël Suisse', 'Weihnachten', 'traditions Noël suisses', 'marchés de l\'Avent Suisse', 'Christkind'],
    },
    es: {
      titleTemplate: 'Navidad {year} Suiza — Cuenta regresiva y tradiciones',
      descriptionTemplate: '¿Cuándo es Navidad {year} en Suiza? Cuenta regresiva, tradiciones de Weihnachten, mercados de Adviento, costumbres del Christkind y guía.',
      keywords: ['Navidad Suiza', 'Weihnachten', 'Noël Suisse', 'tradiciones navideñas suizas', 'mercados de Adviento Suiza'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas Day {year} in Switzerland?', fr: 'Quand est Noël {year} en Suisse ?', es: '¿Cuándo es Navidad {year} en Suiza?' },
      answer: {
        en: 'Christmas Day {year} in Switzerland is on {date} ({dayOfWeek}). It is always December 25 and is a public holiday in all Swiss cantons.',
        fr: 'Noël {year} en Suisse tombe le {date} ({dayOfWeek}). C\'est toujours le 25 décembre et c\'est un jour férié dans tous les cantons suisses.',
        es: 'La Navidad {year} en Suiza es el {date} ({dayOfWeek}). Es siempre el 25 de diciembre y es festivo en todos los cantones suizos.',
      },
    },
    {
      question: { en: 'Who brings gifts in Switzerland — Santa or the Christkind?', fr: 'Qui apporte les cadeaux en Suisse — le Père Noël ou le Christkind ?', es: '¿Quién trae los regalos en Suiza — Papá Noel o el Christkind?' },
      answer: {
        en: 'It depends on the region. In German-speaking Switzerland, the Christkind (Christ Child) brings gifts on Christmas Eve. In French-speaking Switzerland, Père Noël is more common, and in Italian-speaking Ticino, Babbo Natale visits. The Samichlaus (St. Nicholas) visits on December 6 with treats but is separate from the main gift-giving.',
        fr: 'Cela dépend de la région. En Suisse alémanique, le Christkind (Enfant Jésus) apporte les cadeaux le soir de Noël. En Suisse romande, le Père Noël est plus courant, et au Tessin italophone, c\'est Babbo Natale. Le Samichlaus (Saint-Nicolas) passe le 6 décembre avec des friandises, mais c\'est distinct de la distribution des cadeaux principaux.',
        es: 'Depende de la región. En la Suiza germanófona, el Christkind (Niño Jesús) trae los regalos en Nochebuena. En la Suiza francófona es más común el Père Noël, y en el Tesino italianófono visita Babbo Natale. El Samichlaus (San Nicolás) visita el 6 de diciembre con golosinas, pero es independiente de la entrega principal de regalos.',
      },
    },
    {
      question: { en: 'What are the best Christmas markets in Switzerland?', fr: 'Quels sont les meilleurs marchés de Noël en Suisse ?', es: '¿Cuáles son los mejores mercados de Navidad en Suiza?' },
      answer: {
        en: 'The most famous Swiss Christmas markets include the Montreux Noël market along Lake Geneva, the Zurich Christkindlimarkt at the main station, the Basel Christmas Market (one of the largest in Switzerland), and the Bern Münster Christmas Market in the historic Old Town. The Montreux and Zurich markets are particularly renowned for their spectacular settings.',
        fr: 'Les marchés de Noël suisses les plus célèbres comprennent le marché Montreux Noël au bord du lac Léman, le Christkindlimarkt de Zurich à la gare centrale, le marché de Noël de Bâle (l\'un des plus grands de Suisse) et le marché de Noël de la cathédrale de Berne dans la vieille ville historique. Les marchés de Montreux et de Zurich sont particulièrement réputés pour leurs cadres spectaculaires.',
        es: 'Los mercados de Navidad suizos más famosos incluyen el mercado Montreux Noël junto al lago Lemán, el Christkindlimarkt de Zúrich en la estación central, el mercado de Navidad de Basilea (uno de los más grandes de Suiza) y el mercado de Navidad de la catedral de Berna en el casco antiguo histórico. Los mercados de Montreux y Zúrich son especialmente conocidos por sus escenarios espectaculares.',
      },
    },
    {
      question: { en: 'What do Swiss people eat on Christmas?', fr: 'Que mangent les Suisses à Noël ?', es: '¿Qué comen los suizos en Navidad?' },
      answer: {
        en: 'Swiss Christmas meals vary by region. Fondue and raclette are extremely popular Christmas Eve dinners. Other traditional dishes include filet im Teig (beef Wellington), various game meats, and Zürcher Geschnetzeltes. For desserts, Zimtsterne (cinnamon stars), Mailänderli (butter cookies), Brunsli (chocolate spice cookies), and Lebkuchen (gingerbread) are Swiss Christmas staples.',
        fr: 'Les repas de Noël suisses varient selon la région. La fondue et la raclette sont des dîners de réveillon très populaires. D\'autres plats traditionnels comprennent le filet en croûte, divers gibiers et le Zürcher Geschnetzeltes. Pour les desserts, les Zimtsterne (étoiles à la cannelle), les Mailänderli (biscuits au beurre), les Brunsli (biscuits épicés au chocolat) et les Lebkuchen (pains d\'épices) sont des incontournables de Noël.',
        es: 'Las comidas navideñas suizas varían según la región. La fondue y la raclette son cenas de Nochebuena muy populares. Otros platos tradicionales incluyen el filet im Teig (filete en hojaldre), varias carnes de caza y el Zürcher Geschnetzeltes. Para los postres, los Zimtsterne (estrellas de canela), los Mailänderli (galletas de mantequilla), los Brunsli (galletas de chocolate especiadas) y los Lebkuchen (pan de especias) son clásicos navideños suizos.',
      },
    },
  ],

  colorTheme: 'red-green',
  icon: '🎄',
};

// ---------------------------------------------------------------------------
// St. Stephen's Day — December 26
// ---------------------------------------------------------------------------

const stStephensDay: HolidayData = {
  id: 'ch_st-stephens-day',
  countryCode: 'ch',
  slugs: { en: 'st-stephens-day', fr: 'saint-etienne', es: 'san-esteban' },
  names: { en: "St. Stephen's Day", fr: 'Saint-Étienne', es: 'San Esteban' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 26,

  descriptions: {
    en: "St. Stephen's Day on December 26, known as Stephanstag in German and Saint-Étienne in French, is a public holiday in most Swiss cantons. It is the second day of Christmas and is spent relaxing with family, enjoying leftovers, and taking winter walks.",
    fr: "La Saint-Étienne, le 26 décembre, connue sous le nom de Stephanstag en allemand, est un jour férié dans la plupart des cantons suisses. C'est le deuxième jour de Noël, consacré à la détente en famille, aux restes du repas de Noël et aux promenades hivernales.",
    es: 'San Esteban, el 26 de diciembre, conocido como Stephanstag en alemán y Saint-Étienne en francés, es un día festivo en la mayoría de los cantones suizos. Es el segundo día de Navidad y se pasa relajándose en familia, disfrutando de las sobras y dando paseos invernales.',
  },

  history: {
    en: "St. Stephen's Day honours Saint Stephen, the first Christian martyr, who was stoned to death for his faith as recorded in the Acts of the Apostles. The feast day has been observed on December 26 since the earliest centuries of Christianity.\n\nIn Switzerland, the day is observed as a public holiday in most cantons, though not all. It is part of the extended Christmas holiday period, which typically runs from December 24 through January 2. In the Swiss German tradition, Stephanstag is considered the second of the \"Weihnachtstage\" (Christmas days).\n\nWhile the religious significance of the day has faded for many, it remains an important part of the Swiss holiday calendar. Families use the day to continue Christmas celebrations, visit relatives, go skiing, or enjoy the festive atmosphere of Swiss mountain villages.",
    fr: "La Saint-Étienne honore saint Étienne, le premier martyr chrétien, qui fut lapidé pour sa foi comme relaté dans les Actes des Apôtres. Cette fête est observée le 26 décembre depuis les premiers siècles du christianisme.\n\nEn Suisse, ce jour est observé comme jour férié dans la plupart des cantons, mais pas tous. Il fait partie de la période de vacances de Noël prolongée, qui s'étend généralement du 24 décembre au 2 janvier. Dans la tradition suisse alémanique, le Stephanstag est considéré comme le deuxième des « Weihnachtstage » (jours de Noël).\n\nBien que la signification religieuse du jour ait diminué pour beaucoup, il reste une partie importante du calendrier suisse des jours fériés. Les familles profitent de cette journée pour poursuivre les célébrations de Noël, rendre visite à des proches, aller skier ou profiter de l'atmosphère festive des villages de montagne suisses.",
    es: "San Esteban honra a san Esteban, el primer mártir cristiano, que fue lapidado por su fe según se relata en los Hechos de los Apóstoles. La festividad se observa el 26 de diciembre desde los primeros siglos del cristianismo.\n\nEn Suiza, el día se observa como festivo en la mayoría de los cantones, aunque no en todos. Forma parte del período vacacional navideño extendido, que normalmente va del 24 de diciembre al 2 de enero. En la tradición suiza germanófona, el Stephanstag se considera el segundo de los «Weihnachtstage» (días de Navidad).\n\nAunque el significado religioso del día ha disminuido para muchos, sigue siendo una parte importante del calendario festivo suizo. Las familias aprovechan el día para continuar las celebraciones navideñas, visitar a familiares, ir a esquiar o disfrutar del ambiente festivo de los pueblos de montaña suizos.",
  },

  traditions: {
    en: [
      'Spending a relaxed day with family after the Christmas Day celebrations',
      'Enjoying leftover fondue, raclette, and Christmas treats',
      'Going skiing or snowshoeing in the Alps',
      'Taking winter walks through snowy villages and countryside',
      'Visiting extended family and friends for post-Christmas gatherings',
    ],
    fr: [
      'Passer une journée détendue en famille après les célébrations de Noël',
      'Déguster les restes de fondue, raclette et friandises de Noël',
      'Aller skier ou faire de la raquette dans les Alpes',
      'Faire des promenades hivernales dans les villages enneigés et la campagne',
      'Rendre visite à la famille élargie et aux amis pour des retrouvailles post-Noël',
    ],
    es: [
      'Pasar un día relajado en familia después de las celebraciones de Navidad',
      'Disfrutar de las sobras de fondue, raclette y dulces navideños',
      'Ir a esquiar o hacer raquetas de nieve en los Alpes',
      'Dar paseos invernales por pueblos nevados y el campo',
      'Visitar a la familia y amigos para reuniones post-navideñas',
    ],
  },

  funFacts: {
    en: [
      "St. Stephen's Day is not a public holiday in all Swiss cantons — notably, Geneva, Vaud, Neuchâtel, and Jura do not officially observe it.",
      'Saint Stephen is traditionally depicted holding stones, representing his martyrdom by stoning.',
      'Many Swiss ski resorts see their busiest week of the season starting on December 26, as families head to the Alps for the holiday break.',
      'In some Swiss German regions, Stephanstag was traditionally a day when servants and farm workers were allowed to visit their own families.',
      'The extended Christmas period (December 24 to January 2) sees more cheese fondue consumed in Switzerland than any other week of the year.',
    ],
    fr: [
      'La Saint-Étienne n\'est pas un jour férié dans tous les cantons suisses — notamment Genève, Vaud, Neuchâtel et le Jura ne l\'observent pas officiellement.',
      'Saint Étienne est traditionnellement représenté tenant des pierres, symbolisant son martyre par lapidation.',
      'De nombreuses stations de ski suisses connaissent leur semaine la plus chargée de la saison à partir du 26 décembre, lorsque les familles se rendent dans les Alpes pour les vacances.',
      'Dans certaines régions suisses alémaniques, le Stephanstag était traditionnellement le jour où les serviteurs et ouvriers agricoles pouvaient rendre visite à leur propre famille.',
      'La période de Noël étendue (du 24 décembre au 2 janvier) voit plus de fondue au fromage consommée en Suisse que toute autre semaine de l\'année.',
    ],
    es: [
      'San Esteban no es festivo en todos los cantones suizos — en particular, Ginebra, Vaud, Neuchâtel y Jura no lo observan oficialmente.',
      'San Esteban se representa tradicionalmente sosteniendo piedras, que simbolizan su martirio por lapidación.',
      'Muchas estaciones de esquí suizas tienen su semana más concurrida de la temporada a partir del 26 de diciembre, cuando las familias se dirigen a los Alpes para las vacaciones.',
      'En algunas regiones germanófonas suizas, el Stephanstag era tradicionalmente el día en que los sirvientes y trabajadores agrícolas podían visitar a sus propias familias.',
      'El período navideño extendido (del 24 de diciembre al 2 de enero) ve más fondue de queso consumida en Suiza que cualquier otra semana del año.',
    ],
  },

  planningChecklist: {
    en: [
      'Book ski resort accommodation months in advance for the Christmas-to-New-Year period',
      'Plan a winter walk or snowshoe route through a scenic Swiss village',
      'Prepare leftover-friendly meals — fondue chinoise (hot pot) is a popular December 26 dinner',
      'Check which shops and attractions are open, as many close on December 26',
      'Arrange visits with extended family for the second day of Christmas',
    ],
    fr: [
      'Réserver l\'hébergement en station de ski des mois à l\'avance pour la période Noël-Nouvel An',
      'Planifier une randonnée hivernale ou un parcours en raquettes à travers un village suisse pittoresque',
      'Préparer des repas avec les restes — la fondue chinoise est un dîner populaire le 26 décembre',
      'Vérifier quels magasins et attractions sont ouverts, car beaucoup ferment le 26 décembre',
      'Organiser des visites à la famille élargie pour le deuxième jour de Noël',
    ],
    es: [
      'Reservar alojamiento en estaciones de esquí con meses de antelación para el período de Navidad a Año Nuevo',
      'Planificar un paseo invernal o una ruta con raquetas por un pintoresco pueblo suizo',
      'Preparar comidas con las sobras — la fondue chinoise (olla caliente) es una cena popular el 26 de diciembre',
      'Comprobar qué tiendas y atracciones están abiertas, ya que muchas cierran el 26 de diciembre',
      'Organizar visitas a la familia para el segundo día de Navidad',
    ],
  },

  relatedHolidays: ['ch_christmas', 'ch_new-years-day'],

  seo: {
    en: {
      titleTemplate: "St. Stephen's Day {year} Switzerland — December 26 Countdown",
      descriptionTemplate: "When is St. Stephen's Day {year} in Switzerland? Live countdown to December 26, Stephanstag traditions, and Swiss holiday guide.",
      keywords: ["St Stephen's Day Switzerland", 'Stephanstag', 'December 26 Switzerland', 'Swiss Christmas holidays', 'Saint-Étienne Suisse'],
    },
    fr: {
      titleTemplate: 'Saint-Étienne {year} Suisse — Compte à rebours du 26 décembre',
      descriptionTemplate: 'Quand est la Saint-Étienne {year} en Suisse ? Compte à rebours, traditions du Stephanstag et guide des fêtes suisses.',
      keywords: ['Saint-Étienne Suisse', 'Stephanstag', '26 décembre Suisse', 'fêtes de Noël Suisse', 'jours fériés Noël Suisse'],
    },
    es: {
      titleTemplate: 'San Esteban {year} Suiza — Cuenta regresiva del 26 de diciembre',
      descriptionTemplate: '¿Cuándo es San Esteban {year} en Suiza? Cuenta regresiva, tradiciones del Stephanstag y guía festiva suiza.',
      keywords: ['San Esteban Suiza', 'Stephanstag', '26 de diciembre Suiza', 'festivos Navidad Suiza', 'Saint-Étienne Suisse'],
    },
  },

  faq: [
    {
      question: { en: "When is St. Stephen's Day {year} in Switzerland?", fr: 'Quand est la Saint-Étienne {year} en Suisse ?', es: '¿Cuándo es San Esteban {year} en Suiza?' },
      answer: {
        en: "St. Stephen's Day {year} in Switzerland is on {date} ({dayOfWeek}). It is always December 26 and is a public holiday in most Swiss cantons.",
        fr: 'La Saint-Étienne {year} en Suisse tombe le {date} ({dayOfWeek}). C\'est toujours le 26 décembre et c\'est un jour férié dans la plupart des cantons suisses.',
        es: 'San Esteban {year} en Suiza es el {date} ({dayOfWeek}). Es siempre el 26 de diciembre y es festivo en la mayoría de los cantones suizos.',
      },
    },
    {
      question: { en: "Is St. Stephen's Day a holiday in all Swiss cantons?", fr: 'La Saint-Étienne est-elle fériée dans tous les cantons ?', es: '¿Es festivo San Esteban en todos los cantones?' },
      answer: {
        en: "No, St. Stephen's Day is not observed in all 26 cantons. Notably, the cantons of Geneva, Vaud, Neuchâtel, Jura, and Valais do not officially recognise December 26 as a public holiday. However, many businesses in those cantons still close for the extended Christmas period.",
        fr: 'Non, la Saint-Étienne n\'est pas observée dans les 26 cantons. Notamment, les cantons de Genève, Vaud, Neuchâtel, Jura et Valais ne reconnaissent pas officiellement le 26 décembre comme jour férié. Cependant, de nombreuses entreprises dans ces cantons ferment tout de même pour la période de Noël étendue.',
        es: 'No, San Esteban no se observa en los 26 cantones. En particular, los cantones de Ginebra, Vaud, Neuchâtel, Jura y Valais no reconocen oficialmente el 26 de diciembre como festivo. Sin embargo, muchas empresas en esos cantones aún cierran durante el período navideño extendido.',
      },
    },
    {
      question: { en: 'What is Stephanstag?', fr: 'Qu\'est-ce que le Stephanstag ?', es: '¿Qué es el Stephanstag?' },
      answer: {
        en: "Stephanstag is the Swiss German name for St. Stephen's Day, December 26. The name honours Saint Stephen (Stephanus), the first Christian martyr. In French-speaking Switzerland, the day is known as la Saint-Étienne.",
        fr: 'Le Stephanstag est le nom suisse alémanique de la Saint-Étienne, le 26 décembre. Le nom honore saint Étienne (Stephanus), le premier martyr chrétien. En Suisse romande, le jour est connu sous le nom de Saint-Étienne.',
        es: 'El Stephanstag es el nombre en alemán suizo de San Esteban, el 26 de diciembre. El nombre honra a san Esteban (Stephanus), el primer mártir cristiano. En la Suiza francófona, el día se conoce como Saint-Étienne.',
      },
    },
    {
      question: { en: 'What do Swiss people do on December 26?', fr: 'Que font les Suisses le 26 décembre ?', es: '¿Qué hacen los suizos el 26 de diciembre?' },
      answer: {
        en: "December 26 in Switzerland is typically a relaxed family day. Many people enjoy leftover Christmas food (fondue chinoise is a popular choice), go skiing or snowshoeing in the Alps, take winter walks, or visit extended family. It's the start of the busiest ski week of the season for many resorts.",
        fr: 'Le 26 décembre en Suisse est généralement une journée familiale détendue. Beaucoup profitent des restes du repas de Noël (la fondue chinoise est un choix populaire), vont skier ou faire de la raquette dans les Alpes, font des promenades hivernales ou rendent visite à la famille élargie. C\'est le début de la semaine de ski la plus chargée de la saison pour de nombreuses stations.',
        es: 'El 26 de diciembre en Suiza es típicamente un día familiar relajado. Mucha gente disfruta de las sobras navideñas (la fondue chinoise es una opción popular), va a esquiar o hacer raquetas en los Alpes, da paseos invernales o visita a la familia. Es el inicio de la semana de esquí más concurrida de la temporada en muchas estaciones.',
      },
    },
  ],

  colorTheme: 'red-gold',
  icon: '🎁',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const chHolidays: HolidayData[] = [
  newYearsDay,
  nationalDay,
  ascensionDay,
  whitMonday,
  christmas,
  stStephensDay,
];

export default chHolidays;
