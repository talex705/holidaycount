/**
 * Guatemala holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getHolyThursday } from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'gt_new-years-day',
  countryCode: 'gt',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'ano-nuevo' },
  names: { en: "New Year's Day", fr: 'Jour de l\'An', es: 'Año Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 marks the start of the calendar year in Guatemala. Families celebrate with late-night gatherings on December 31, fireworks, traditional foods, and rituals to welcome prosperity in the new year.",
    fr: "Le Jour de l'An, le 1er janvier, marque le début de l'année civile au Guatemala. Les familles célèbrent avec des réunions nocturnes le 31 décembre, des feux d'artifice, des plats traditionnels et des rituels pour accueillir la prospérité dans la nouvelle année.",
    es: 'El Año Nuevo, el 1 de enero, marca el inicio del año calendario en Guatemala. Las familias celebran con reuniones nocturnas el 31 de diciembre, fuegos artificiales, platillos tradicionales y rituales para recibir la prosperidad en el nuevo año.',
  },

  history: {
    en: "New Year's celebrations in Guatemala reflect a blend of Spanish colonial, Maya, and modern traditions. The holiday is an official day off throughout the country.\n\nOn December 31, Guatemalans gather with family for a festive dinner, often featuring tamales and ponche. At midnight, the skies fill with fireworks and the air resonates with church bells and firecrackers.\n\nA popular tradition is the burning of the \"Diablo\" — old furniture, clothing, or effigies set ablaze at midnight to symbolize burning away the bad from the previous year and welcoming a fresh start.",
    fr: "Les célébrations du Nouvel An au Guatemala reflètent un mélange de traditions coloniales espagnoles, mayas et modernes. Ce jour férié est un jour de repos officiel dans tout le pays.\n\nLe 31 décembre, les Guatémaltèques se réunissent en famille pour un dîner festif, souvent avec des tamales et du ponche. À minuit, le ciel se remplit de feux d'artifice et l'air résonne de cloches d'église et de pétards.\n\nUne tradition populaire est la brûlure du « Diablo » — de vieux meubles, vêtements ou effigies incendiés à minuit pour symboliser la destruction du mal de l'année précédente et accueillir un nouveau départ.",
    es: "Las celebraciones de Año Nuevo en Guatemala reflejan una mezcla de tradiciones coloniales españolas, mayas y modernas. El día festivo es un día de descanso oficial en todo el país.\n\nEl 31 de diciembre, los guatemaltecos se reúnen en familia para una cena festiva, a menudo con tamales y ponche. A medianoche, el cielo se llena de fuegos artificiales y el aire resuena con campanas de iglesia y cohetes.\n\nUna tradición popular es la quema del «Diablo» — muebles viejos, ropa o efigies que se queman a medianoche para simbolizar la destrucción de lo malo del año anterior y dar la bienvenida a un nuevo comienzo.",
  },

  traditions: {
    en: [
      'Burning the "Diablo" at midnight to leave behind the negativity of the old year',
      'Family dinners featuring tamales, ponche, and fiambre leftovers',
      'Setting off fireworks and firecrackers throughout neighborhoods',
      'Wearing new clothes at midnight for good luck',
      'Hugging family and friends at the stroke of midnight',
      'Attending church services to give thanks for the new year',
    ],
    fr: [
      'Brûler le « Diablo » à minuit pour laisser derrière soi la négativité de l\'ancienne année',
      'Dîners en famille avec tamales, ponche et restes de fiambre',
      'Tirer des feux d\'artifice et des pétards dans les quartiers',
      'Porter des vêtements neufs à minuit pour la bonne chance',
      'Embrasser famille et amis au coup de minuit',
      'Assister à des services religieux pour remercier pour la nouvelle année',
    ],
    es: [
      'Quemar al «Diablo» a medianoche para dejar atrás la negatividad del año viejo',
      'Cenas familiares con tamales, ponche y sobras de fiambre',
      'Lanzar fuegos artificiales y cohetes en los barrios',
      'Estrenar ropa a medianoche para la buena suerte',
      'Abrazar a familia y amigos a la medianoche',
      'Asistir a servicios religiosos para agradecer por el nuevo año',
    ],
  },

  funFacts: {
    en: [
      'The "Quema del Diablo" (Burning of the Devil) on December 7 is a uniquely Guatemalan pre-Christmas tradition that also carries into New Year\'s celebrations.',
      'Guatemalan tamales for New Year\'s are typically wrapped in banana leaves, unlike Mexican tamales wrapped in corn husks.',
      'Many Guatemalans believe that running around the block with a suitcase at midnight will bring travel opportunities.',
      'The fireworks in Guatemala City on New Year\'s Eve are so intense they often create a visible layer of smoke over the city.',
      'Some families in rural Guatemala follow ancient Maya calendar traditions alongside the Gregorian New Year.',
    ],
    fr: [
      'La « Quema del Diablo » (Brûlure du Diable) le 7 décembre est une tradition pré-Noël uniquement guatémaltèque qui se poursuit aussi dans les célébrations du Nouvel An.',
      'Les tamales guatémaltèques du Nouvel An sont généralement enveloppés dans des feuilles de bananier, contrairement aux tamales mexicains enveloppés dans des feuilles de maïs.',
      'De nombreux Guatémaltèques croient que courir autour du pâté de maisons avec une valise à minuit apportera des opportunités de voyage.',
      'Les feux d\'artifice à Guatemala City le soir du Nouvel An sont si intenses qu\'ils créent souvent une couche de fumée visible au-dessus de la ville.',
      'Certaines familles du Guatemala rural suivent d\'anciennes traditions du calendrier maya en parallèle du Nouvel An grégorien.',
    ],
    es: [
      'La «Quema del Diablo» el 7 de diciembre es una tradición pre-navideña exclusivamente guatemalteca que también se extiende a las celebraciones de Año Nuevo.',
      'Los tamales guatemaltecos de Año Nuevo se envuelven típicamente en hojas de plátano, a diferencia de los tamales mexicanos envueltos en hojas de maíz.',
      'Muchos guatemaltecos creen que correr alrededor de la manzana con una maleta a medianoche traerá oportunidades de viaje.',
      'Los fuegos artificiales en la Ciudad de Guatemala en Nochevieja son tan intensos que a menudo crean una capa visible de humo sobre la ciudad.',
      'Algunas familias del Guatemala rural siguen antiguas tradiciones del calendario maya junto con el Año Nuevo gregoriano.',
    ],
  },

  planningChecklist: {
    en: [
      'Order tamales early — bakeries and home cooks sell out before December 31',
      'Stock up on fireworks and firecrackers safely from licensed vendors',
      'Prepare items to burn for the "Diablo" tradition at midnight',
      'Plan a family dinner menu with ponche and traditional foods',
      'Wear new clothes or buy an outfit to wear at midnight for good luck',
    ],
    fr: [
      'Commander des tamales tôt — les boulangeries et cuisiniers à domicile sont épuisés avant le 31 décembre',
      'Faire le plein de feux d\'artifice et de pétards en toute sécurité auprès de vendeurs autorisés',
      'Préparer des objets à brûler pour la tradition du « Diablo » à minuit',
      'Planifier un menu de dîner familial avec du ponche et des plats traditionnels',
      'Acheter des vêtements neufs à porter à minuit pour la bonne chance',
    ],
    es: [
      'Encargar tamales con anticipación — las panaderías y cocineros se agotan antes del 31 de diciembre',
      'Abastecerse de fuegos artificiales y cohetes de manera segura con vendedores autorizados',
      'Preparar objetos para quemar en la tradición del «Diablo» a medianoche',
      'Planificar un menú de cena familiar con ponche y platillos tradicionales',
      'Estrenar ropa o comprar un atuendo para usar a medianoche para la buena suerte',
    ],
  },

  relatedHolidays: ['gt_christmas', 'gt_independence-day'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Guatemala — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in Guatemala? Live countdown to January 1, traditions, and celebration guide.",
      keywords: ["New Year's Day Guatemala", 'Año Nuevo Guatemala', 'Guatemalan New Year traditions', 'Guatemala holidays', 'January 1 Guatemala'],
    },
    fr: {
      titleTemplate: 'Jour de l\'An {year} Guatemala — Compte à rebours et guide',
      descriptionTemplate: 'Quand est le Jour de l\'An {year} au Guatemala ? Compte à rebours, traditions et guide de célébration.',
      keywords: ['Jour de l\'An Guatemala', 'Año Nuevo Guatemala', 'traditions Nouvel An guatémaltèque', 'jours fériés Guatemala', '1er janvier Guatemala'],
    },
    es: {
      titleTemplate: 'Año Nuevo {year} Guatemala — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es Año Nuevo {year} en Guatemala? Cuenta regresiva en vivo al 1 de enero, tradiciones y guía de celebración.',
      keywords: ['Año Nuevo Guatemala', 'día festivo 1 de enero Guatemala', 'tradiciones Año Nuevo guatemalteco', 'días festivos Guatemala', 'feriado enero Guatemala'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in Guatemala?", fr: 'Quand est le Jour de l\'An {year} au Guatemala ?', es: '¿Cuándo es Año Nuevo {year} en Guatemala?' },
      answer: {
        en: "New Year's Day {year} in Guatemala is on {date} ({dayOfWeek}). It is always January 1 and is an official public holiday.",
        fr: 'Le Jour de l\'An {year} au Guatemala est le {date} ({dayOfWeek}). C\'est toujours le 1er janvier et c\'est un jour férié officiel.',
        es: 'El Año Nuevo {year} en Guatemala es el {date} ({dayOfWeek}). Siempre es el 1 de enero y es un día festivo oficial.',
      },
    },
    {
      question: { en: 'What is the "Quema del Diablo"?', fr: 'Qu\'est-ce que la « Quema del Diablo » ?', es: '¿Qué es la «Quema del Diablo»?' },
      answer: {
        en: 'The "Quema del Diablo" (Burning of the Devil) is a Guatemalan tradition where people burn old belongings, trash, or devil effigies to symbolically cleanse their homes and lives of evil before the holidays.',
        fr: 'La « Quema del Diablo » (Brûlure du Diable) est une tradition guatémaltèque où les gens brûlent de vieux objets, des déchets ou des effigies du diable pour purifier symboliquement leurs maisons et leurs vies du mal avant les fêtes.',
        es: 'La «Quema del Diablo» es una tradición guatemalteca donde la gente quema pertenencias viejas, basura o efigies del diablo para purificar simbólicamente sus hogares y vidas del mal antes de las fiestas.',
      },
    },
    {
      question: { en: "Is New Year's Day a public holiday in Guatemala?", fr: 'Le Jour de l\'An est-il un jour férié au Guatemala ?', es: '¿Es Año Nuevo un día festivo oficial en Guatemala?' },
      answer: {
        en: "Yes, New Year's Day is an official public holiday in Guatemala. Banks, government offices, and most businesses are closed.",
        fr: 'Oui, le Jour de l\'An est un jour férié officiel au Guatemala. Les banques, les bureaux du gouvernement et la plupart des entreprises sont fermés.',
        es: 'Sí, el Año Nuevo es un día festivo oficial en Guatemala. Los bancos, oficinas gubernamentales y la mayoría de los negocios están cerrados.',
      },
    },
    {
      question: { en: 'What do Guatemalans eat on New Year\'s Eve?', fr: 'Que mangent les Guatémaltèques le soir du Nouvel An ?', es: '¿Qué comen los guatemaltecos en Nochevieja?' },
      answer: {
        en: 'Traditional New Year\'s Eve foods include tamales (wrapped in banana leaves), ponche (hot fruit punch), black beans, and often leftover fiambre from All Saints\' Day.',
        fr: 'Les plats traditionnels du réveillon du Nouvel An incluent des tamales (enveloppés dans des feuilles de bananier), du ponche (punch chaud aux fruits), des haricots noirs et souvent des restes de fiambre de la Toussaint.',
        es: 'Los platillos tradicionales de Nochevieja incluyen tamales (envueltos en hojas de plátano), ponche (bebida caliente de frutas), frijoles negros y a menudo sobrantes de fiambre del Día de Todos los Santos.',
      },
    },
  ],

  colorTheme: 'gold-black',
  icon: '🎆',
};

// ---------------------------------------------------------------------------
// Holy Thursday — Calculated (Easter-3)
// ---------------------------------------------------------------------------

const holyThursday: HolidayData = {
  id: 'gt_holy-thursday',
  countryCode: 'gt',
  slugs: { en: 'holy-thursday', fr: 'jeudi-saint', es: 'jueves-santo' },
  names: { en: 'Holy Thursday', fr: 'Jeudi Saint', es: 'Jueves Santo' },

  dateType: 'calculated',
  calculateDate: getHolyThursday,

  descriptions: {
    en: "Holy Thursday (Jueves Santo) marks the beginning of the Easter Triduum in Guatemala. Semana Santa in Antigua Guatemala is world-famous for its spectacular alfombras (elaborate sawdust carpets) laid before solemn processions through colonial streets.",
    fr: "Le Jeudi Saint (Jueves Santo) marque le début du Triduum pascal au Guatemala. La Semana Santa à Antigua Guatemala est mondialement célèbre pour ses spectaculaires alfombras (tapis de sciure élaborés) disposés devant les processions solennelles dans les rues coloniales.",
    es: 'El Jueves Santo marca el inicio del Triduo Pascual en Guatemala. La Semana Santa en Antigua Guatemala es mundialmente famosa por sus espectaculares alfombras (elaborados tapetes de aserrín) colocados ante las solemnes procesiones por las calles coloniales.',
  },

  history: {
    en: "Semana Santa (Holy Week) in Guatemala, particularly in Antigua Guatemala, is considered one of the most elaborate Easter celebrations in the world. The tradition dates back to the Spanish colonial period in the 16th century, when Catholic missionaries introduced Holy Week processions to the Indigenous Maya population.\n\nOver centuries, the celebrations evolved into a unique blend of Spanish Catholic pageantry and Maya spiritual traditions. The alfombras — intricate carpets made of dyed sawdust, flowers, fruits, and vegetables — became the centerpiece of the celebrations, laid in the path of massive andas (floats) carried by cucuruchos (penitent bearers).\n\nAntigua Guatemala's Holy Week was declared an Intangible Cultural Heritage of the Nation, and each year it draws hundreds of thousands of visitors from around the world. The processions, some lasting over 12 hours, represent scenes from the Passion of Christ.",
    fr: "La Semana Santa (Semaine Sainte) au Guatemala, particulièrement à Antigua Guatemala, est considérée comme l'une des célébrations de Pâques les plus élaborées au monde. La tradition remonte à la période coloniale espagnole au XVIe siècle, lorsque les missionnaires catholiques ont introduit les processions de la Semaine Sainte auprès de la population maya autochtone.\n\nAu fil des siècles, les célébrations ont évolué en un mélange unique de faste catholique espagnol et de traditions spirituelles mayas. Les alfombras — des tapis complexes faits de sciure teintée, de fleurs, de fruits et de légumes — sont devenues la pièce maîtresse des célébrations, disposées sur le chemin des andas massives (chars) portées par les cucuruchos (porteurs pénitents).\n\nLa Semaine Sainte d'Antigua Guatemala a été déclarée patrimoine culturel immatériel de la nation, et chaque année elle attire des centaines de milliers de visiteurs du monde entier. Les processions, dont certaines durent plus de 12 heures, représentent des scènes de la Passion du Christ.",
    es: "La Semana Santa en Guatemala, particularmente en Antigua Guatemala, es considerada una de las celebraciones de Pascua más elaboradas del mundo. La tradición se remonta al período colonial español en el siglo XVI, cuando los misioneros católicos introdujeron las procesiones de Semana Santa a la población indígena maya.\n\nA lo largo de los siglos, las celebraciones evolucionaron en una mezcla única de pompa católica española y tradiciones espirituales mayas. Las alfombras — elaborados tapetes hechos de aserrín teñido, flores, frutas y verduras — se convirtieron en la pieza central de las celebraciones, colocadas en el camino de las masivas andas (carrozas) cargadas por cucuruchos (cargadores penitentes).\n\nLa Semana Santa de Antigua Guatemala fue declarada Patrimonio Cultural Inmaterial de la Nación, y cada año atrae a cientos de miles de visitantes de todo el mundo. Las procesiones, algunas de más de 12 horas de duración, representan escenas de la Pasión de Cristo.",
  },

  traditions: {
    en: [
      'Creating elaborate alfombras (sawdust carpets) in streets and plazas for processions to pass over',
      'Carrying massive andas (floats) in solemn processions through Antigua\'s cobblestone streets',
      'Wearing purple robes as cucuruchos (penitent bearers) in processions',
      'Burning incense (copal and myrrh) along the procession routes',
      'Attending church services and re-enactments of the Last Supper',
      'Preparing traditional Lenten foods such as torrejas (a type of French toast with syrup)',
      'Decorating churches with elaborate floral arrangements',
    ],
    fr: [
      'Créer des alfombras élaborées (tapis de sciure) dans les rues et places pour le passage des processions',
      'Porter des andas massives (chars) dans des processions solennelles à travers les rues pavées d\'Antigua',
      'Porter des robes violettes en tant que cucuruchos (porteurs pénitents) dans les processions',
      'Brûler de l\'encens (copal et myrrhe) le long des parcours de procession',
      'Assister aux services religieux et reconstitutions de la Cène',
      'Préparer des plats traditionnels de Carême comme les torrejas (une sorte de pain perdu au sirop)',
      'Décorer les églises avec des arrangements floraux élaborés',
    ],
    es: [
      'Crear elaboradas alfombras (tapetes de aserrín) en las calles y plazas para que pasen las procesiones',
      'Cargar masivas andas (carrozas) en solemnes procesiones por las calles empedradas de Antigua',
      'Vestir túnicas moradas como cucuruchos (cargadores penitentes) en las procesiones',
      'Quemar incienso (copal y mirra) a lo largo de las rutas de procesión',
      'Asistir a servicios religiosos y representaciones de la Última Cena',
      'Preparar platillos tradicionales de Cuaresma como torrejas (un tipo de pan francés con miel)',
      'Decorar las iglesias con elaborados arreglos florales',
    ],
  },

  funFacts: {
    en: [
      'Some alfombras in Antigua take families over 12 hours to create, only to be destroyed by the procession passing over them minutes later.',
      'The largest processions in Antigua can involve andas weighing over 3 tons, carried by up to 100 cucuruchos at a time.',
      'Antigua Guatemala\'s Semana Santa attracts over 500,000 visitors each year, making it one of the largest Easter celebrations globally.',
      'The tradition of making alfombras originated in Guatemala and is not found in Spain, despite Semana Santa\'s Spanish roots.',
      'Purple is the dominant color of Semana Santa in Guatemala, symbolizing mourning, penance, and royalty.',
    ],
    fr: [
      'Certaines alfombras à Antigua prennent plus de 12 heures aux familles pour être créées, pour être détruites par la procession qui passe dessus quelques minutes plus tard.',
      'Les plus grandes processions à Antigua peuvent impliquer des andas pesant plus de 3 tonnes, portées par jusqu\'à 100 cucuruchos à la fois.',
      'La Semana Santa d\'Antigua Guatemala attire plus de 500 000 visiteurs chaque année, ce qui en fait l\'une des plus grandes célébrations de Pâques au monde.',
      'La tradition de faire des alfombras est originaire du Guatemala et ne se trouve pas en Espagne, malgré les racines espagnoles de la Semana Santa.',
      'Le violet est la couleur dominante de la Semana Santa au Guatemala, symbolisant le deuil, la pénitence et la royauté.',
    ],
    es: [
      'Algunas alfombras en Antigua toman a las familias más de 12 horas en crear, solo para ser destruidas por la procesión que pasa sobre ellas minutos después.',
      'Las procesiones más grandes en Antigua pueden involucrar andas que pesan más de 3 toneladas, cargadas por hasta 100 cucuruchos a la vez.',
      'La Semana Santa de Antigua Guatemala atrae a más de 500,000 visitantes cada año, convirtiéndola en una de las celebraciones de Pascua más grandes del mundo.',
      'La tradición de hacer alfombras se originó en Guatemala y no se encuentra en España, a pesar de las raíces españolas de la Semana Santa.',
      'El morado es el color dominante de la Semana Santa en Guatemala, simbolizando luto, penitencia y realeza.',
    ],
  },

  planningChecklist: {
    en: [
      'Book accommodation in Antigua Guatemala months in advance — it sells out quickly',
      'Arrive early to see alfombras being made before processions begin',
      'Bring comfortable walking shoes for cobblestone streets',
      'Carry water and sun protection as processions last many hours in the heat',
      'Try traditional Lenten foods like torrejas and curtido at local vendors',
    ],
    fr: [
      'Réserver l\'hébergement à Antigua Guatemala des mois à l\'avance — tout se remplit rapidement',
      'Arriver tôt pour voir les alfombras en cours de création avant le début des processions',
      'Apporter des chaussures de marche confortables pour les rues pavées',
      'Porter de l\'eau et une protection solaire car les processions durent de nombreuses heures sous la chaleur',
      'Goûter les plats traditionnels de Carême comme les torrejas et le curtido chez les vendeurs locaux',
    ],
    es: [
      'Reservar hospedaje en Antigua Guatemala con meses de anticipación — se agota rápidamente',
      'Llegar temprano para ver las alfombras siendo elaboradas antes de que comiencen las procesiones',
      'Llevar zapatos cómodos para caminar por las calles empedradas',
      'Cargar agua y protección solar ya que las procesiones duran muchas horas bajo el calor',
      'Probar platillos tradicionales de Cuaresma como torrejas y curtido en los puestos locales',
    ],
  },

  relatedHolidays: ['gt_christmas', 'gt_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Holy Thursday {year} Guatemala — Countdown & Semana Santa Guide',
      descriptionTemplate: 'When is Holy Thursday {year} in Guatemala? Live countdown, Antigua alfombras, processions, and Semana Santa celebration guide.',
      keywords: ['Holy Thursday Guatemala', 'Jueves Santo Guatemala', 'Semana Santa Antigua', 'alfombras Guatemala', 'Easter Guatemala'],
    },
    fr: {
      titleTemplate: 'Jeudi Saint {year} Guatemala — Compte à rebours et guide de la Semana Santa',
      descriptionTemplate: 'Quand est le Jeudi Saint {year} au Guatemala ? Compte à rebours, alfombras d\'Antigua, processions et guide de la Semana Santa.',
      keywords: ['Jeudi Saint Guatemala', 'Jueves Santo Guatemala', 'Semana Santa Antigua', 'alfombras Guatemala', 'Pâques Guatemala'],
    },
    es: {
      titleTemplate: 'Jueves Santo {year} Guatemala — Cuenta regresiva y guía de Semana Santa',
      descriptionTemplate: '¿Cuándo es el Jueves Santo {year} en Guatemala? Cuenta regresiva, alfombras de Antigua, procesiones y guía de celebración de Semana Santa.',
      keywords: ['Jueves Santo Guatemala', 'Semana Santa Antigua Guatemala', 'alfombras Guatemala', 'procesiones Semana Santa', 'Pascua Guatemala'],
    },
  },

  faq: [
    {
      question: { en: 'When is Holy Thursday {year} in Guatemala?', fr: 'Quand est le Jeudi Saint {year} au Guatemala ?', es: '¿Cuándo es el Jueves Santo {year} en Guatemala?' },
      answer: {
        en: 'Holy Thursday {year} in Guatemala falls on {date} ({dayOfWeek}). It is calculated based on Easter and changes each year.',
        fr: 'Le Jeudi Saint {year} au Guatemala tombe le {date} ({dayOfWeek}). Il est calculé en fonction de Pâques et change chaque année.',
        es: 'El Jueves Santo {year} en Guatemala cae el {date} ({dayOfWeek}). Se calcula en función de la Pascua y cambia cada año.',
      },
    },
    {
      question: { en: 'What are alfombras in Guatemala?', fr: 'Que sont les alfombras au Guatemala ?', es: '¿Qué son las alfombras en Guatemala?' },
      answer: {
        en: 'Alfombras are elaborate carpets made of dyed sawdust, flowers, fruits, and vegetables, laid on the streets for Holy Week processions to pass over. They are a unique Guatemalan art form that takes hours to create.',
        fr: 'Les alfombras sont des tapis élaborés faits de sciure teintée, de fleurs, de fruits et de légumes, disposés dans les rues pour que les processions de la Semaine Sainte passent dessus. C\'est une forme d\'art unique guatémaltèque qui prend des heures à créer.',
        es: 'Las alfombras son elaborados tapetes hechos de aserrín teñido, flores, frutas y verduras, colocados en las calles para que pasen las procesiones de Semana Santa. Son una forma de arte única guatemalteca que toma horas en crear.',
      },
    },
    {
      question: { en: 'Is Holy Thursday a public holiday in Guatemala?', fr: 'Le Jeudi Saint est-il un jour férié au Guatemala ?', es: '¿Es el Jueves Santo un día festivo oficial en Guatemala?' },
      answer: {
        en: 'Yes, Holy Thursday is an official public holiday in Guatemala. The entire Semana Santa period (Thursday through Sunday) is observed with closures of banks, schools, and government offices.',
        fr: 'Oui, le Jeudi Saint est un jour férié officiel au Guatemala. Toute la période de la Semana Santa (du jeudi au dimanche) est observée avec la fermeture des banques, des écoles et des bureaux du gouvernement.',
        es: 'Sí, el Jueves Santo es un día festivo oficial en Guatemala. Todo el período de Semana Santa (de jueves a domingo) se observa con el cierre de bancos, escuelas y oficinas gubernamentales.',
      },
    },
    {
      question: { en: 'What is a cucurucho?', fr: 'Qu\'est-ce qu\'un cucurucho ?', es: '¿Qué es un cucurucho?' },
      answer: {
        en: 'A cucurucho is a penitent bearer who carries the massive andas (floats) during Semana Santa processions. They wear purple robes and take turns carrying the floats, which can weigh over 3 tons.',
        fr: 'Un cucurucho est un porteur pénitent qui porte les andas massives (chars) pendant les processions de la Semana Santa. Ils portent des robes violettes et se relaient pour porter les chars, qui peuvent peser plus de 3 tonnes.',
        es: 'Un cucurucho es un cargador penitente que carga las masivas andas (carrozas) durante las procesiones de Semana Santa. Visten túnicas moradas y se turnan para cargar las andas, que pueden pesar más de 3 toneladas.',
      },
    },
  ],

  colorTheme: 'purple-white',
  icon: '✝️',
};

// ---------------------------------------------------------------------------
// Labour Day — May 1
// ---------------------------------------------------------------------------

const labourDay: HolidayData = {
  id: 'gt_labour-day',
  countryCode: 'gt',
  slugs: { en: 'labour-day', fr: 'fete-du-travail', es: 'dia-del-trabajo' },
  names: { en: 'Labour Day', fr: 'Fête du Travail', es: 'Día del Trabajo' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 1,

  descriptions: {
    en: "Labour Day on May 1 is a public holiday in Guatemala honoring workers' rights and contributions. It features marches, rallies, and a day of rest for working people across the nation.",
    fr: "La Fête du Travail, le 1er mai, est un jour férié au Guatemala honorant les droits et les contributions des travailleurs. Elle comprend des marches, des rassemblements et un jour de repos pour les travailleurs de tout le pays.",
    es: 'El Día del Trabajo, el 1 de mayo, es un día festivo en Guatemala que honra los derechos y las contribuciones de los trabajadores. Incluye marchas, mítines y un día de descanso para los trabajadores de todo el país.',
  },

  history: {
    en: "Guatemala's Labour Day has deep roots in the country's turbulent labor history. Workers' rights were a central demand of the Guatemalan Revolution of 1944, which overthrew the dictatorship of Jorge Ubico and ushered in a decade of democratic reforms.\n\nDuring the democratic period (1944-1954) under presidents Juan José Arévalo and Jacobo Árbenz, Guatemala established a labor code guaranteeing minimum wage, the right to organize, and workplace protections. May 1 became an important day for labor movements to demonstrate and celebrate these hard-won rights.\n\nToday, Labour Day marches in Guatemala City draw thousands of workers, union members, and social activists. The marches typically proceed along major avenues to the National Palace, where demands for improved working conditions, higher wages, and social justice are presented.",
    fr: "La Fête du Travail au Guatemala a des racines profondes dans l'histoire turbulente du travail du pays. Les droits des travailleurs étaient une demande centrale de la Révolution guatémaltèque de 1944, qui a renversé la dictature de Jorge Ubico et a inauguré une décennie de réformes démocratiques.\n\nPendant la période démocratique (1944-1954) sous les présidents Juan José Arévalo et Jacobo Árbenz, le Guatemala a établi un code du travail garantissant le salaire minimum, le droit de s'organiser et les protections sur le lieu de travail. Le 1er mai est devenu un jour important pour les mouvements ouvriers pour manifester et célébrer ces droits durement acquis.\n\nAujourd'hui, les marches de la Fête du Travail dans la ville de Guatemala attirent des milliers de travailleurs, de membres de syndicats et d'activistes sociaux. Les marches se dirigent généralement le long des grandes avenues vers le Palais National, où des revendications pour de meilleures conditions de travail, des salaires plus élevés et la justice sociale sont présentées.",
    es: "El Día del Trabajo en Guatemala tiene raíces profundas en la turbulenta historia laboral del país. Los derechos de los trabajadores fueron una demanda central de la Revolución Guatemalteca de 1944, que derrocó la dictadura de Jorge Ubico e inauguró una década de reformas democráticas.\n\nDurante el período democrático (1944-1954) bajo los presidentes Juan José Arévalo y Jacobo Árbenz, Guatemala estableció un código de trabajo que garantizaba el salario mínimo, el derecho a organizarse y las protecciones laborales. El 1 de mayo se convirtió en un día importante para los movimientos obreros para manifestarse y celebrar estos derechos duramente conquistados.\n\nHoy, las marchas del Día del Trabajo en la Ciudad de Guatemala atraen a miles de trabajadores, miembros de sindicatos y activistas sociales. Las marchas típicamente avanzan por las principales avenidas hacia el Palacio Nacional, donde se presentan demandas por mejores condiciones de trabajo, salarios más altos y justicia social.",
  },

  traditions: {
    en: [
      'Labour marches through Guatemala City\'s main avenues to the National Palace',
      'Union rallies with speeches demanding better working conditions',
      'Workers enjoying a day of rest with family',
      'Political demonstrations for social justice causes',
      'Community gatherings and barbecues in public parks',
    ],
    fr: [
      'Marches ouvrières à travers les principales avenues de Guatemala City vers le Palais National',
      'Rassemblements syndicaux avec des discours réclamant de meilleures conditions de travail',
      'Travailleurs profitant d\'un jour de repos en famille',
      'Manifestations politiques pour des causes de justice sociale',
      'Rassemblements communautaires et barbecues dans les parcs publics',
    ],
    es: [
      'Marchas laborales por las principales avenidas de la Ciudad de Guatemala hacia el Palacio Nacional',
      'Mítines sindicales con discursos exigiendo mejores condiciones de trabajo',
      'Trabajadores disfrutando de un día de descanso con la familia',
      'Manifestaciones políticas por causas de justicia social',
      'Reuniones comunitarias y parrilladas en parques públicos',
    ],
  },

  funFacts: {
    en: [
      'Guatemala\'s labor code, established after the 1944 Revolution, was one of the most progressive in Central America.',
      'The 1944 Revolution that enabled labor rights is sometimes called the "October Revolution" or "Guatemalan Spring."',
      'May 1 marches in Guatemala often include Indigenous rights groups alongside traditional labor unions.',
      'Guatemala was one of the first Central American countries to establish minimum wage laws.',
      'Labour Day is one of the few holidays in Guatemala that is always observed on the exact date, never moved to a Monday.',
    ],
    fr: [
      'Le code du travail du Guatemala, établi après la Révolution de 1944, était l\'un des plus progressistes d\'Amérique centrale.',
      'La Révolution de 1944 qui a permis les droits du travail est parfois appelée la « Révolution d\'Octobre » ou le « Printemps guatémaltèque ».',
      'Les marches du 1er mai au Guatemala incluent souvent des groupes de droits autochtones aux côtés des syndicats traditionnels.',
      'Le Guatemala a été l\'un des premiers pays d\'Amérique centrale à établir des lois sur le salaire minimum.',
      'La Fête du Travail est l\'un des rares jours fériés au Guatemala qui est toujours observé à la date exacte, jamais déplacé à un lundi.',
    ],
    es: [
      'El código de trabajo de Guatemala, establecido después de la Revolución de 1944, fue uno de los más progresistas de Centroamérica.',
      'La Revolución de 1944 que permitió los derechos laborales a veces se llama la «Revolución de Octubre» o la «Primavera Guatemalteca».',
      'Las marchas del 1 de mayo en Guatemala a menudo incluyen grupos de derechos indígenas junto con los sindicatos tradicionales.',
      'Guatemala fue uno de los primeros países centroamericanos en establecer leyes de salario mínimo.',
      'El Día del Trabajo es uno de los pocos días festivos en Guatemala que siempre se observa en la fecha exacta, nunca se traslada a un lunes.',
    ],
  },

  planningChecklist: {
    en: [
      'Expect road closures in Guatemala City due to marches and rallies',
      'Avoid driving through central areas during the morning march hours',
      'Plan family activities away from protest zones',
      'Stock up on groceries as some shops may be closed',
      'Enjoy the day off with a family outing to a park or countryside',
    ],
    fr: [
      'Prévoir des fermetures de routes dans la ville de Guatemala en raison des marches et rassemblements',
      'Éviter de conduire dans les zones centrales pendant les heures de marche du matin',
      'Planifier des activités familiales loin des zones de manifestation',
      'Faire le plein de courses car certains commerces peuvent être fermés',
      'Profiter du jour de congé avec une sortie familiale au parc ou à la campagne',
    ],
    es: [
      'Esperar cierres viales en la Ciudad de Guatemala debido a marchas y mítines',
      'Evitar conducir por zonas centrales durante las horas de marcha matutina',
      'Planificar actividades familiares lejos de las zonas de manifestación',
      'Abastecerse de víveres ya que algunos comercios pueden estar cerrados',
      'Disfrutar del día libre con un paseo familiar al parque o al campo',
    ],
  },

  relatedHolidays: ['gt_independence-day', 'gt_revolution-day'],

  seo: {
    en: {
      titleTemplate: 'Labour Day {year} Guatemala — Countdown & Guide',
      descriptionTemplate: 'When is Labour Day {year} in Guatemala? Live countdown to May 1, labor history, marches, and celebration guide.',
      keywords: ['Labour Day Guatemala', 'Día del Trabajo Guatemala', 'May 1 Guatemala', 'Guatemala workers day', 'Guatemala holidays'],
    },
    fr: {
      titleTemplate: 'Fête du Travail {year} Guatemala — Compte à rebours et guide',
      descriptionTemplate: 'Quand est la Fête du Travail {year} au Guatemala ? Compte à rebours, histoire du travail, marches et guide.',
      keywords: ['Fête du Travail Guatemala', 'Día del Trabajo Guatemala', '1er mai Guatemala', 'journée des travailleurs Guatemala', 'jours fériés Guatemala'],
    },
    es: {
      titleTemplate: 'Día del Trabajo {year} Guatemala — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Día del Trabajo {year} en Guatemala? Cuenta regresiva al 1 de mayo, historia laboral, marchas y guía.',
      keywords: ['Día del Trabajo Guatemala', '1 de mayo Guatemala', 'marcha del trabajo Guatemala', 'día festivo mayo Guatemala', 'derechos laborales Guatemala'],
    },
  },

  faq: [
    {
      question: { en: 'When is Labour Day {year} in Guatemala?', fr: 'Quand est la Fête du Travail {year} au Guatemala ?', es: '¿Cuándo es el Día del Trabajo {year} en Guatemala?' },
      answer: {
        en: 'Labour Day {year} in Guatemala is on {date} ({dayOfWeek}). It is always observed on May 1.',
        fr: 'La Fête du Travail {year} au Guatemala est le {date} ({dayOfWeek}). Elle est toujours observée le 1er mai.',
        es: 'El Día del Trabajo {year} en Guatemala es el {date} ({dayOfWeek}). Siempre se observa el 1 de mayo.',
      },
    },
    {
      question: { en: 'Is Labour Day a public holiday in Guatemala?', fr: 'La Fête du Travail est-elle un jour férié au Guatemala ?', es: '¿Es el Día del Trabajo un día festivo oficial en Guatemala?' },
      answer: {
        en: 'Yes, Labour Day is an official public holiday. Banks, government offices, schools, and most businesses are closed.',
        fr: 'Oui, la Fête du Travail est un jour férié officiel. Les banques, les bureaux du gouvernement, les écoles et la plupart des entreprises sont fermés.',
        es: 'Sí, el Día del Trabajo es un día festivo oficial. Los bancos, oficinas gubernamentales, escuelas y la mayoría de los negocios están cerrados.',
      },
    },
    {
      question: { en: 'What happens on Labour Day in Guatemala?', fr: 'Que se passe-t-il pendant la Fête du Travail au Guatemala ?', es: '¿Qué ocurre el Día del Trabajo en Guatemala?' },
      answer: {
        en: 'Labour unions and social organizations march through Guatemala City to the National Palace, presenting demands for better wages and working conditions. Many workers also enjoy the day off with family.',
        fr: 'Les syndicats et les organisations sociales défilent à travers la ville de Guatemala vers le Palais National, présentant des revendications pour de meilleurs salaires et conditions de travail. Beaucoup de travailleurs profitent aussi du jour de congé en famille.',
        es: 'Los sindicatos y organizaciones sociales marchan por la Ciudad de Guatemala hacia el Palacio Nacional, presentando demandas por mejores salarios y condiciones laborales. Muchos trabajadores también disfrutan del día libre con la familia.',
      },
    },
    {
      question: { en: 'How did the 1944 Revolution affect labor rights?', fr: 'Comment la Révolution de 1944 a-t-elle affecté les droits du travail ?', es: '¿Cómo afectó la Revolución de 1944 a los derechos laborales?' },
      answer: {
        en: 'The 1944 Revolution overthrew dictator Jorge Ubico and led to Guatemala\'s first labor code, establishing minimum wage, the right to organize, workplace protections, and social security.',
        fr: 'La Révolution de 1944 a renversé le dictateur Jorge Ubico et a conduit au premier code du travail du Guatemala, établissant le salaire minimum, le droit de s\'organiser, les protections sur le lieu de travail et la sécurité sociale.',
        es: 'La Revolución de 1944 derrocó al dictador Jorge Ubico y condujo al primer código de trabajo de Guatemala, estableciendo el salario mínimo, el derecho a organizarse, las protecciones laborales y la seguridad social.',
      },
    },
  ],

  colorTheme: 'red-white',
  icon: '⚒️',
};

// ---------------------------------------------------------------------------
// Independence Day — September 15
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'gt_independence-day',
  countryCode: 'gt',
  slugs: { en: 'independence-day', fr: 'jour-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Jour de l'Indépendance", es: 'Día de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 9,
  fixedDay: 15,

  descriptions: {
    en: "Guatemala's Independence Day on September 15 celebrates the nation's independence from Spain in 1821. It features a torch relay, blue-and-white flag parades, marimba music, and patriotic ceremonies across the country.",
    fr: "Le Jour de l'Indépendance du Guatemala, le 15 septembre, célèbre l'indépendance de la nation vis-à-vis de l'Espagne en 1821. Il comprend un relais de la torche, des défilés aux drapeaux bleu et blanc, de la musique de marimba et des cérémonies patriotiques dans tout le pays.",
    es: 'El Día de la Independencia de Guatemala, el 15 de septiembre, celebra la independencia de la nación de España en 1821. Incluye un relevo de la antorcha, desfiles con banderas azul y blanco, música de marimba y ceremonias patrióticas en todo el país.',
  },

  history: {
    en: "On September 15, 1821, the Captaincy General of Guatemala — which included present-day Guatemala, El Salvador, Honduras, Nicaragua, Costa Rica, and the Mexican state of Chiapas — declared independence from Spain. The declaration was signed in Guatemala City without a war, making it one of the most peaceful independence movements in Latin America.\n\nThe Independence Act was drafted by José Cecilio del Valle and signed by the colonial authorities, recognizing that independence was the will of the people. Guatemala briefly joined the Mexican Empire before becoming part of the United Provinces of Central America (1823-1838), and finally a fully independent republic.\n\nToday, the celebration centers on the Torch of Independence, which is carried by relay runners from Guatemala City to every corner of the country, symbolizing the light of freedom reaching all Guatemalans. Schools and communities host parades with marching bands and traditional dances.",
    fr: "Le 15 septembre 1821, la Capitainerie générale du Guatemala — qui comprenait le Guatemala actuel, le Salvador, le Honduras, le Nicaragua, le Costa Rica et l'État mexicain du Chiapas — a déclaré son indépendance de l'Espagne. La déclaration a été signée à Guatemala City sans guerre, ce qui en fait l'un des mouvements d'indépendance les plus pacifiques d'Amérique latine.\n\nL'Acte d'Indépendance a été rédigé par José Cecilio del Valle et signé par les autorités coloniales, reconnaissant que l'indépendance était la volonté du peuple. Le Guatemala a brièvement rejoint l'Empire mexicain avant de faire partie des Provinces-Unies d'Amérique centrale (1823-1838), et finalement une république pleinement indépendante.\n\nAujourd'hui, la célébration est centrée sur la Torche de l'Indépendance, portée par des relayeurs depuis Guatemala City jusqu'à chaque coin du pays, symbolisant la lumière de la liberté atteignant tous les Guatémaltèques. Les écoles et les communautés organisent des défilés avec des fanfares et des danses traditionnelles.",
    es: "El 15 de septiembre de 1821, la Capitanía General de Guatemala — que incluía los actuales Guatemala, El Salvador, Honduras, Nicaragua, Costa Rica y el estado mexicano de Chiapas — declaró su independencia de España. La declaración fue firmada en la Ciudad de Guatemala sin guerra, convirtiéndola en uno de los movimientos de independencia más pacíficos de América Latina.\n\nEl Acta de Independencia fue redactada por José Cecilio del Valle y firmada por las autoridades coloniales, reconociendo que la independencia era la voluntad del pueblo. Guatemala se unió brevemente al Imperio Mexicano antes de formar parte de las Provincias Unidas de Centroamérica (1823-1838), y finalmente una república plenamente independiente.\n\nHoy, la celebración se centra en la Antorcha de la Independencia, que es portada por relevistas desde la Ciudad de Guatemala hasta cada rincón del país, simbolizando la luz de la libertad llegando a todos los guatemaltecos. Las escuelas y comunidades organizan desfiles con bandas de guerra y danzas tradicionales.",
  },

  traditions: {
    en: [
      'Torch of Independence relay — runners carry the torch from Guatemala City across the country',
      'School marching band parades through city streets',
      'Raising the blue-and-white Guatemalan flag at homes, schools, and government buildings',
      'Marimba music performances at civic ceremonies',
      'Patriotic speeches and singing of the national anthem',
      'Traditional dances and cultural performances',
      'Eating traditional foods like tamales and atol',
    ],
    fr: [
      'Relais de la Torche de l\'Indépendance — des coureurs portent la torche depuis Guatemala City à travers le pays',
      'Défilés de fanfares scolaires dans les rues',
      'Lever du drapeau bleu et blanc du Guatemala dans les maisons, les écoles et les bâtiments gouvernementaux',
      'Spectacles de musique de marimba lors des cérémonies civiques',
      'Discours patriotiques et chant de l\'hymne national',
      'Danses traditionnelles et spectacles culturels',
      'Manger des plats traditionnels comme les tamales et l\'atol',
    ],
    es: [
      'Relevo de la Antorcha de la Independencia — corredores llevan la antorcha desde la Ciudad de Guatemala por todo el país',
      'Desfiles de bandas de guerra escolares por las calles',
      'Izar la bandera azul y blanco de Guatemala en hogares, escuelas y edificios gubernamentales',
      'Presentaciones de música de marimba en ceremonias cívicas',
      'Discursos patrióticos y canto del himno nacional',
      'Danzas tradicionales y presentaciones culturales',
      'Comer platillos tradicionales como tamales y atol',
    ],
  },

  funFacts: {
    en: [
      'Guatemala shares its Independence Day (September 15) with El Salvador, Honduras, Nicaragua, and Costa Rica — all were part of the same declaration.',
      'The Torch of Independence relay can travel hundreds of kilometers, with runners passing the torch from town to town.',
      'The marimba is Guatemala\'s national instrument and plays a central role in Independence Day celebrations.',
      'Guatemala\'s independence from Spain was achieved peacefully, without a single battle.',
      'The original Act of Independence is preserved in Guatemala\'s National Archives and is considered one of the country\'s most treasured documents.',
    ],
    fr: [
      'Le Guatemala partage son Jour de l\'Indépendance (15 septembre) avec le Salvador, le Honduras, le Nicaragua et le Costa Rica — tous faisaient partie de la même déclaration.',
      'Le relais de la Torche de l\'Indépendance peut parcourir des centaines de kilomètres, avec des coureurs passant la torche de ville en ville.',
      'Le marimba est l\'instrument national du Guatemala et joue un rôle central dans les célébrations du Jour de l\'Indépendance.',
      'L\'indépendance du Guatemala vis-à-vis de l\'Espagne a été obtenue pacifiquement, sans une seule bataille.',
      'L\'Acte d\'Indépendance original est conservé dans les Archives nationales du Guatemala et est considéré comme l\'un des documents les plus précieux du pays.',
    ],
    es: [
      'Guatemala comparte su Día de la Independencia (15 de septiembre) con El Salvador, Honduras, Nicaragua y Costa Rica — todos formaban parte de la misma declaración.',
      'El relevo de la Antorcha de la Independencia puede recorrer cientos de kilómetros, con corredores pasando la antorcha de pueblo en pueblo.',
      'La marimba es el instrumento nacional de Guatemala y juega un papel central en las celebraciones del Día de la Independencia.',
      'La independencia de Guatemala de España se logró pacíficamente, sin una sola batalla.',
      'El Acta de Independencia original se conserva en el Archivo General de Centroamérica y es considerado uno de los documentos más preciados del país.',
    ],
  },

  planningChecklist: {
    en: [
      'Attend a torch relay event in your community on the evening of September 14',
      'Fly the Guatemalan flag at home and decorate in blue and white',
      'Attend school or community parades on September 15',
      'Enjoy marimba music and traditional foods at local celebrations',
      'Watch the official ceremonies broadcast on national television',
    ],
    fr: [
      'Assister à un événement de relais de la torche dans votre communauté le soir du 14 septembre',
      'Faire flotter le drapeau guatémaltèque à la maison et décorer en bleu et blanc',
      'Assister aux défilés scolaires ou communautaires le 15 septembre',
      'Profiter de la musique de marimba et des plats traditionnels lors des célébrations locales',
      'Regarder les cérémonies officielles diffusées à la télévision nationale',
    ],
    es: [
      'Asistir a un evento de relevo de la antorcha en tu comunidad la noche del 14 de septiembre',
      'Izar la bandera guatemalteca en casa y decorar en azul y blanco',
      'Asistir a desfiles escolares o comunitarios el 15 de septiembre',
      'Disfrutar de música de marimba y platillos tradicionales en las celebraciones locales',
      'Ver las ceremonias oficiales transmitidas por televisión nacional',
    ],
  },

  relatedHolidays: ['gt_revolution-day', 'gt_christmas'],

  seo: {
    en: {
      titleTemplate: 'Independence Day {year} Guatemala — Countdown & Guide',
      descriptionTemplate: 'When is Guatemala Independence Day {year}? Live countdown to September 15, torch relay, parades, and celebration guide.',
      keywords: ['Independence Day Guatemala', 'September 15 Guatemala', 'Día de la Independencia Guatemala', 'Guatemala holidays', 'Central America independence'],
    },
    fr: {
      titleTemplate: "Jour de l'Indépendance {year} Guatemala — Compte à rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'Indépendance {year} du Guatemala ? Compte à rebours, relais de la torche, défilés et guide de célébration.",
      keywords: ["Jour de l'Indépendance Guatemala", '15 septembre Guatemala', 'Día de la Independencia Guatemala', 'jours fériés Guatemala', 'indépendance Amérique centrale'],
    },
    es: {
      titleTemplate: 'Día de la Independencia {year} Guatemala — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Día de la Independencia {year} de Guatemala? Cuenta regresiva al 15 de septiembre, antorcha, desfiles y guía.',
      keywords: ['Día de la Independencia Guatemala', '15 de septiembre Guatemala', 'fiestas patrias Guatemala', 'antorcha independencia Guatemala', 'días festivos Guatemala'],
    },
  },

  faq: [
    {
      question: { en: 'When is Guatemala Independence Day {year}?', fr: "Quand est le Jour de l'Indépendance {year} du Guatemala ?", es: '¿Cuándo es el Día de la Independencia {year} de Guatemala?' },
      answer: {
        en: 'Guatemala Independence Day {year} is on {date} ({dayOfWeek}). It is always September 15.',
        fr: "Le Jour de l'Indépendance {year} du Guatemala est le {date} ({dayOfWeek}). C'est toujours le 15 septembre.",
        es: 'El Día de la Independencia {year} de Guatemala es el {date} ({dayOfWeek}). Siempre es el 15 de septiembre.',
      },
    },
    {
      question: { en: 'What is the Torch of Independence?', fr: "Qu'est-ce que la Torche de l'Indépendance ?", es: '¿Qué es la Antorcha de la Independencia?' },
      answer: {
        en: 'The Torch of Independence is a relay run that begins in Guatemala City and travels across the country, with runners passing the torch from town to town. It symbolizes the light of freedom reaching all Guatemalans.',
        fr: "La Torche de l'Indépendance est une course de relais qui commence à Guatemala City et traverse le pays, les coureurs passant la torche de ville en ville. Elle symbolise la lumière de la liberté atteignant tous les Guatémaltèques.",
        es: 'La Antorcha de la Independencia es una carrera de relevos que comienza en la Ciudad de Guatemala y recorre todo el país, con corredores pasando la antorcha de pueblo en pueblo. Simboliza la luz de la libertad llegando a todos los guatemaltecos.',
      },
    },
    {
      question: { en: 'Why do five countries celebrate independence on September 15?', fr: 'Pourquoi cinq pays célèbrent-ils l\'indépendance le 15 septembre ?', es: '¿Por qué cinco países celebran la independencia el 15 de septiembre?' },
      answer: {
        en: 'Guatemala, El Salvador, Honduras, Nicaragua, and Costa Rica all declared independence from Spain on September 15, 1821, as part of the same colonial region — the Captaincy General of Guatemala.',
        fr: 'Le Guatemala, le Salvador, le Honduras, le Nicaragua et le Costa Rica ont tous déclaré leur indépendance de l\'Espagne le 15 septembre 1821, faisant partie de la même région coloniale — la Capitainerie générale du Guatemala.',
        es: 'Guatemala, El Salvador, Honduras, Nicaragua y Costa Rica declararon su independencia de España el 15 de septiembre de 1821, como parte de la misma región colonial — la Capitanía General de Guatemala.',
      },
    },
    {
      question: { en: 'What role does the marimba play in Independence Day?', fr: 'Quel rôle joue le marimba dans le Jour de l\'Indépendance ?', es: '¿Qué papel juega la marimba en el Día de la Independencia?' },
      answer: {
        en: 'The marimba is Guatemala\'s national instrument and a centerpiece of Independence Day celebrations. Marimba ensembles perform patriotic songs and traditional music at civic ceremonies, parades, and community events.',
        fr: 'Le marimba est l\'instrument national du Guatemala et une pièce maîtresse des célébrations du Jour de l\'Indépendance. Les ensembles de marimba interprètent des chansons patriotiques et de la musique traditionnelle lors des cérémonies civiques, des défilés et des événements communautaires.',
        es: 'La marimba es el instrumento nacional de Guatemala y pieza central de las celebraciones del Día de la Independencia. Los conjuntos de marimba interpretan canciones patrióticas y música tradicional en ceremonias cívicas, desfiles y eventos comunitarios.',
      },
    },
  ],

  colorTheme: 'blue-white',
  icon: '🇬🇹',
};

// ---------------------------------------------------------------------------
// Revolution Day — October 20
// ---------------------------------------------------------------------------

const revolutionDay: HolidayData = {
  id: 'gt_revolution-day',
  countryCode: 'gt',
  slugs: { en: 'revolution-day', fr: 'jour-de-la-revolution', es: 'dia-de-la-revolucion' },
  names: { en: 'Revolution Day', fr: 'Jour de la Révolution', es: 'Día de la Revolución' },

  dateType: 'fixed',
  fixedMonth: 10,
  fixedDay: 20,

  descriptions: {
    en: "Revolution Day on October 20 commemorates the 1944 Guatemalan Revolution that overthrew the dictator Jorge Ubico and ushered in a democratic period known as the \"Guatemalan Spring.\" It celebrates the fight for democracy, social justice, and workers' rights.",
    fr: "Le Jour de la Révolution, le 20 octobre, commémore la Révolution guatémaltèque de 1944 qui a renversé le dictateur Jorge Ubico et a inauguré une période démocratique connue sous le nom de « Printemps guatémaltèque ». Il célèbre la lutte pour la démocratie, la justice sociale et les droits des travailleurs.",
    es: 'El Día de la Revolución, el 20 de octubre, conmemora la Revolución Guatemalteca de 1944 que derrocó al dictador Jorge Ubico e inauguró un período democrático conocido como la «Primavera Guatemalteca». Celebra la lucha por la democracia, la justicia social y los derechos de los trabajadores.',
  },

  history: {
    en: "The Guatemalan Revolution of 1944 began with widespread protests against the authoritarian regime of General Jorge Ubico, who had ruled since 1931. A coalition of students, teachers, workers, and progressive military officers forced Ubico to resign on July 1, 1944.\n\nHowever, Ubico's successor attempted to maintain the old regime. On October 20, 1944, a group of military officers led by Jacobo Árbenz and Francisco Javier Arana launched an armed uprising that overthrew the government in a brief but decisive action. This paved the way for Guatemala's first truly democratic elections.\n\nThe revolutionary period (1944-1954) under presidents Juan José Arévalo and Jacobo Árbenz introduced sweeping reforms: a new labor code, social security, land reform, expansion of education, and women's suffrage. The era is remembered as a time of hope and progress that profoundly shaped modern Guatemala.",
    fr: "La Révolution guatémaltèque de 1944 a commencé par des protestations généralisées contre le régime autoritaire du général Jorge Ubico, qui gouvernait depuis 1931. Une coalition d'étudiants, d'enseignants, de travailleurs et d'officiers militaires progressistes a forcé Ubico à démissionner le 1er juillet 1944.\n\nCependant, le successeur d'Ubico a tenté de maintenir l'ancien régime. Le 20 octobre 1944, un groupe d'officiers militaires dirigé par Jacobo Árbenz et Francisco Javier Arana a lancé un soulèvement armé qui a renversé le gouvernement dans une action brève mais décisive. Cela a ouvert la voie aux premières véritables élections démocratiques du Guatemala.\n\nLa période révolutionnaire (1944-1954) sous les présidents Juan José Arévalo et Jacobo Árbenz a introduit des réformes radicales : un nouveau code du travail, la sécurité sociale, la réforme agraire, l'expansion de l'éducation et le suffrage féminin. L'époque est rappelée comme une période d'espoir et de progrès qui a profondément façonné le Guatemala moderne.",
    es: "La Revolución Guatemalteca de 1944 comenzó con protestas generalizadas contra el régimen autoritario del general Jorge Ubico, quien había gobernado desde 1931. Una coalición de estudiantes, maestros, trabajadores y oficiales militares progresistas obligó a Ubico a renunciar el 1 de julio de 1944.\n\nSin embargo, el sucesor de Ubico intentó mantener el antiguo régimen. El 20 de octubre de 1944, un grupo de oficiales militares liderado por Jacobo Árbenz y Francisco Javier Arana lanzó un levantamiento armado que derrocó al gobierno en una acción breve pero decisiva. Esto abrió el camino para las primeras elecciones verdaderamente democráticas de Guatemala.\n\nEl período revolucionario (1944-1954) bajo los presidentes Juan José Arévalo y Jacobo Árbenz introdujo reformas radicales: un nuevo código de trabajo, seguridad social, reforma agraria, expansión de la educación y sufragio femenino. La época es recordada como un tiempo de esperanza y progreso que moldeó profundamente al Guatemala moderno.",
  },

  traditions: {
    en: [
      'Civic ceremonies and speeches at government buildings',
      'Academic discussions and panels on the legacy of the 1944 Revolution',
      'Wreath-laying at monuments honoring revolutionary heroes',
      'Student-led marches and demonstrations for democracy and social justice',
      'Cultural events celebrating the ideals of the revolution',
    ],
    fr: [
      'Cérémonies civiques et discours dans les bâtiments gouvernementaux',
      'Discussions académiques et panels sur l\'héritage de la Révolution de 1944',
      'Dépôt de gerbes aux monuments honorant les héros révolutionnaires',
      'Marches et manifestations étudiantes pour la démocratie et la justice sociale',
      'Événements culturels célébrant les idéaux de la révolution',
    ],
    es: [
      'Ceremonias cívicas y discursos en edificios gubernamentales',
      'Discusiones académicas y paneles sobre el legado de la Revolución de 1944',
      'Ofrendas florales en monumentos que honran a los héroes revolucionarios',
      'Marchas y manifestaciones estudiantiles por la democracia y la justicia social',
      'Eventos culturales que celebran los ideales de la revolución',
    ],
  },

  funFacts: {
    en: [
      'The 1944 Revolution is sometimes called the "October Revolution" or the "Guatemalan Spring."',
      'Jacobo Árbenz, one of the revolution\'s leaders, later became president and introduced sweeping land reforms.',
      'The 1944 Revolution gave Guatemalan women the right to vote for the first time.',
      'The revolution was achieved in just three days of fighting, from October 19 to 21, 1944.',
      'The democratic period sparked by the revolution (1944-1954) is considered one of the most progressive in Central American history.',
    ],
    fr: [
      'La Révolution de 1944 est parfois appelée la « Révolution d\'Octobre » ou le « Printemps guatémaltèque ».',
      'Jacobo Árbenz, l\'un des leaders de la révolution, est devenu plus tard président et a introduit des réformes agraires radicales.',
      'La Révolution de 1944 a donné aux femmes guatémaltèques le droit de vote pour la première fois.',
      'La révolution a été réalisée en seulement trois jours de combats, du 19 au 21 octobre 1944.',
      'La période démocratique déclenchée par la révolution (1944-1954) est considérée comme l\'une des plus progressistes de l\'histoire de l\'Amérique centrale.',
    ],
    es: [
      'La Revolución de 1944 a veces se llama la «Revolución de Octubre» o la «Primavera Guatemalteca».',
      'Jacobo Árbenz, uno de los líderes de la revolución, luego se convirtió en presidente e introdujo reformas agrarias radicales.',
      'La Revolución de 1944 otorgó a las mujeres guatemaltecas el derecho al voto por primera vez.',
      'La revolución se logró en solo tres días de combate, del 19 al 21 de octubre de 1944.',
      'El período democrático desencadenado por la revolución (1944-1954) es considerado uno de los más progresistas en la historia de Centroamérica.',
    ],
  },

  planningChecklist: {
    en: [
      'Attend civic ceremonies or academic events about the 1944 Revolution',
      'Visit the National Palace or historical sites related to the revolution',
      'Learn about the revolutionary leaders and their legacy',
      'Participate in community discussions about democracy and social justice',
      'Use the day off for cultural activities or family outings',
    ],
    fr: [
      'Assister à des cérémonies civiques ou événements académiques sur la Révolution de 1944',
      'Visiter le Palais National ou des sites historiques liés à la révolution',
      'En apprendre davantage sur les dirigeants révolutionnaires et leur héritage',
      'Participer à des discussions communautaires sur la démocratie et la justice sociale',
      'Profiter du jour de congé pour des activités culturelles ou des sorties familiales',
    ],
    es: [
      'Asistir a ceremonias cívicas o eventos académicos sobre la Revolución de 1944',
      'Visitar el Palacio Nacional o sitios históricos relacionados con la revolución',
      'Aprender sobre los líderes revolucionarios y su legado',
      'Participar en discusiones comunitarias sobre democracia y justicia social',
      'Aprovechar el día libre para actividades culturales o paseos familiares',
    ],
  },

  relatedHolidays: ['gt_independence-day', 'gt_labour-day'],

  seo: {
    en: {
      titleTemplate: 'Revolution Day {year} Guatemala — Countdown & History',
      descriptionTemplate: 'When is Revolution Day {year} in Guatemala? Live countdown to October 20, 1944 Revolution history, and celebration guide.',
      keywords: ['Revolution Day Guatemala', 'October 20 Guatemala', '1944 Guatemalan Revolution', 'Día de la Revolución Guatemala', 'Guatemala holidays'],
    },
    fr: {
      titleTemplate: 'Jour de la Révolution {year} Guatemala — Compte à rebours et histoire',
      descriptionTemplate: 'Quand est le Jour de la Révolution {year} au Guatemala ? Compte à rebours, histoire de la Révolution de 1944 et guide.',
      keywords: ['Jour de la Révolution Guatemala', '20 octobre Guatemala', 'Révolution guatémaltèque 1944', 'Día de la Revolución Guatemala', 'jours fériés Guatemala'],
    },
    es: {
      titleTemplate: 'Día de la Revolución {year} Guatemala — Cuenta regresiva e historia',
      descriptionTemplate: '¿Cuándo es el Día de la Revolución {year} en Guatemala? Cuenta regresiva al 20 de octubre, historia de la Revolución de 1944 y guía.',
      keywords: ['Día de la Revolución Guatemala', '20 de octubre Guatemala', 'Revolución Guatemalteca 1944', 'feriado octubre Guatemala', 'días festivos Guatemala'],
    },
  },

  faq: [
    {
      question: { en: 'When is Revolution Day {year} in Guatemala?', fr: 'Quand est le Jour de la Révolution {year} au Guatemala ?', es: '¿Cuándo es el Día de la Revolución {year} en Guatemala?' },
      answer: {
        en: 'Revolution Day {year} in Guatemala is on {date} ({dayOfWeek}). It is always October 20.',
        fr: 'Le Jour de la Révolution {year} au Guatemala est le {date} ({dayOfWeek}). C\'est toujours le 20 octobre.',
        es: 'El Día de la Revolución {year} en Guatemala es el {date} ({dayOfWeek}). Siempre es el 20 de octubre.',
      },
    },
    {
      question: { en: 'What was the 1944 Guatemalan Revolution?', fr: 'Qu\'est-ce que la Révolution guatémaltèque de 1944 ?', es: '¿Qué fue la Revolución Guatemalteca de 1944?' },
      answer: {
        en: 'The 1944 Revolution was an armed uprising on October 20 that overthrew the government and led to Guatemala\'s first democratic elections. It ended years of authoritarian rule and introduced sweeping social reforms.',
        fr: 'La Révolution de 1944 était un soulèvement armé le 20 octobre qui a renversé le gouvernement et a conduit aux premières élections démocratiques du Guatemala. Elle a mis fin à des années de régime autoritaire et a introduit des réformes sociales radicales.',
        es: 'La Revolución de 1944 fue un levantamiento armado el 20 de octubre que derrocó al gobierno y condujo a las primeras elecciones democráticas de Guatemala. Puso fin a años de régimen autoritario e introdujo reformas sociales radicales.',
      },
    },
    {
      question: { en: 'Is Revolution Day a public holiday in Guatemala?', fr: 'Le Jour de la Révolution est-il un jour férié au Guatemala ?', es: '¿Es el Día de la Revolución un día festivo oficial en Guatemala?' },
      answer: {
        en: 'Yes, Revolution Day is an official public holiday. Banks, government offices, and schools are closed.',
        fr: 'Oui, le Jour de la Révolution est un jour férié officiel. Les banques, les bureaux du gouvernement et les écoles sont fermés.',
        es: 'Sí, el Día de la Revolución es un día festivo oficial. Los bancos, oficinas gubernamentales y escuelas están cerrados.',
      },
    },
    {
      question: { en: 'Who were the leaders of the 1944 Revolution?', fr: 'Qui étaient les dirigeants de la Révolution de 1944 ?', es: '¿Quiénes fueron los líderes de la Revolución de 1944?' },
      answer: {
        en: 'The military uprising was led by Captain Jacobo Árbenz and Major Francisco Javier Arana, supported by students, teachers, and workers. Árbenz later became president and implemented landmark reforms.',
        fr: 'Le soulèvement militaire a été dirigé par le capitaine Jacobo Árbenz et le major Francisco Javier Arana, soutenus par des étudiants, des enseignants et des travailleurs. Árbenz est devenu plus tard président et a mis en œuvre des réformes historiques.',
        es: 'El levantamiento militar fue liderado por el capitán Jacobo Árbenz y el mayor Francisco Javier Arana, apoyados por estudiantes, maestros y trabajadores. Árbenz luego se convirtió en presidente e implementó reformas históricas.',
      },
    },
  ],

  colorTheme: 'blue-white',
  icon: '✊',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'gt_christmas',
  countryCode: 'gt',
  slugs: { en: 'christmas', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noël', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: "Christmas Day on December 25 is one of Guatemala's most cherished holidays. The celebration features tamales, ponche (fruit punch), nacimientos (nativity scenes), and family gatherings that reflect the country's deep Catholic heritage and Maya cultural influences.",
    fr: "Le jour de Noël, le 25 décembre, est l'une des fêtes les plus chères du Guatemala. La célébration comprend des tamales, du ponche (punch aux fruits), des nacimientos (scènes de la Nativité) et des réunions familiales qui reflètent le profond héritage catholique et les influences culturelles mayas du pays.",
    es: 'La Navidad, el 25 de diciembre, es una de las festividades más queridas de Guatemala. La celebración incluye tamales, ponche, nacimientos (escenas del pesebre) y reuniones familiares que reflejan la profunda herencia católica y las influencias culturales mayas del país.',
  },

  history: {
    en: "Christmas in Guatemala was introduced by Spanish missionaries in the 16th century and has evolved into a celebration that uniquely blends Catholic traditions with Indigenous Maya customs. The Guatemalan Christmas season traditionally begins on December 7 with the \"Quema del Diablo\" (Burning of the Devil), a purification ritual.\n\nThe tradition of elaborate nacimientos (nativity scenes) is central to Guatemalan Christmas. Families create detailed miniature landscapes representing Bethlehem, often incorporating Guatemalan scenery — volcanoes, markets, and highland villages.\n\nChristmas Eve (Nochebuena) is the most important night, with families gathering for a midnight meal of tamales and ponche, followed by the opening of gifts at midnight and attendance at Misa de Gallo (Midnight Mass). The celebrations continue through January 6, Día de los Reyes.",
    fr: "Noël au Guatemala a été introduit par les missionnaires espagnols au XVIe siècle et a évolué en une célébration qui mélange de manière unique les traditions catholiques avec les coutumes mayas autochtones. La saison de Noël guatémaltèque commence traditionnellement le 7 décembre avec la « Quema del Diablo » (Brûlure du Diable), un rituel de purification.\n\nLa tradition des nacimientos (scènes de la Nativité) élaborés est centrale dans le Noël guatémaltèque. Les familles créent des paysages miniatures détaillés représentant Bethléem, incorporant souvent des paysages guatémaltèques — volcans, marchés et villages des hauts plateaux.\n\nLe réveillon de Noël (Nochebuena) est la nuit la plus importante, les familles se réunissant pour un repas de minuit de tamales et ponche, suivi de l'ouverture des cadeaux à minuit et de la participation à la Misa de Gallo (messe de minuit). Les célébrations se poursuivent jusqu'au 6 janvier, Día de los Reyes.",
    es: "La Navidad en Guatemala fue introducida por misioneros españoles en el siglo XVI y ha evolucionado en una celebración que mezcla de manera única las tradiciones católicas con las costumbres mayas indígenas. La temporada navideña guatemalteca tradicionalmente comienza el 7 de diciembre con la «Quema del Diablo», un ritual de purificación.\n\nLa tradición de los elaborados nacimientos (escenas del pesebre) es central en la Navidad guatemalteca. Las familias crean paisajes miniatura detallados que representan Belén, a menudo incorporando paisajes guatemaltecos — volcanes, mercados y aldeas de los altiplanos.\n\nLa Nochebuena es la noche más importante, con las familias reuniéndose para una cena de medianoche de tamales y ponche, seguida de la apertura de regalos a medianoche y la asistencia a la Misa de Gallo. Las celebraciones continúan hasta el 6 de enero, Día de los Reyes.",
  },

  traditions: {
    en: [
      'The Quema del Diablo on December 7 — burning old items to purify homes before Christmas',
      'Building elaborate nacimientos (nativity scenes) with Guatemalan landscapes',
      'Preparing tamales colorados and tamales negros for Christmas Eve dinner',
      'Drinking ponche de frutas (hot fruit punch) throughout the season',
      'Setting off firecrackers and fireworks at midnight on Christmas Eve',
      'Attending Misa de Gallo (Midnight Mass) on Christmas Eve',
      'Exchanging gifts at midnight on Nochebuena',
    ],
    fr: [
      'La Quema del Diablo le 7 décembre — brûler de vieux objets pour purifier les maisons avant Noël',
      'Construire des nacimientos (scènes de la Nativité) élaborés avec des paysages guatémaltèques',
      'Préparer des tamales colorados et tamales negros pour le dîner de Nochebuena',
      'Boire du ponche de frutas (punch chaud aux fruits) pendant toute la saison',
      'Tirer des pétards et des feux d\'artifice à minuit la veille de Noël',
      'Assister à la Misa de Gallo (messe de minuit) la veille de Noël',
      'Échanger des cadeaux à minuit la Nochebuena',
    ],
    es: [
      'La Quema del Diablo el 7 de diciembre — quemar objetos viejos para purificar los hogares antes de Navidad',
      'Montar elaborados nacimientos (escenas del pesebre) con paisajes guatemaltecos',
      'Preparar tamales colorados y tamales negros para la cena de Nochebuena',
      'Beber ponche de frutas (bebida caliente de frutas) durante toda la temporada',
      'Lanzar cohetes y fuegos artificiales a medianoche en Nochebuena',
      'Asistir a la Misa de Gallo en Nochebuena',
      'Intercambiar regalos a medianoche en Nochebuena',
    ],
  },

  funFacts: {
    en: [
      'Guatemala\'s Quema del Diablo on December 7 is a tradition unique to Guatemala — families burn old belongings in front of their homes to symbolically drive away evil.',
      'Guatemalan tamales are larger than Mexican tamales and are wrapped in banana leaves rather than corn husks.',
      'Tamales negros (black tamales) are a special Guatemalan variety made with chocolate and chilies.',
      'The nacimiento tradition in Guatemala is so elaborate that some families spend weeks building their nativity scenes.',
      'Guatemalan ponche is made with tropical fruits including pineapple, papaya, coconut, and jocotes.',
    ],
    fr: [
      'La Quema del Diablo du Guatemala le 7 décembre est une tradition unique — les familles brûlent de vieux objets devant leurs maisons pour chasser symboliquement le mal.',
      'Les tamales guatémaltèques sont plus grands que les tamales mexicains et sont enveloppés dans des feuilles de bananier plutôt que dans des feuilles de maïs.',
      'Les tamales negros (tamales noirs) sont une variété guatémaltèque spéciale faite avec du chocolat et des piments.',
      'La tradition du nacimiento au Guatemala est si élaborée que certaines familles passent des semaines à construire leurs scènes de la Nativité.',
      'Le ponche guatémaltèque est fait avec des fruits tropicaux dont l\'ananas, la papaye, la noix de coco et les jocotes.',
    ],
    es: [
      'La Quema del Diablo de Guatemala el 7 de diciembre es una tradición única — las familias queman pertenencias viejas frente a sus casas para ahuyentar simbólicamente el mal.',
      'Los tamales guatemaltecos son más grandes que los tamales mexicanos y se envuelven en hojas de plátano en lugar de hojas de maíz.',
      'Los tamales negros son una variedad especial guatemalteca hecha con chocolate y chile.',
      'La tradición del nacimiento en Guatemala es tan elaborada que algunas familias pasan semanas construyendo sus escenas del pesebre.',
      'El ponche guatemalteco se hace con frutas tropicales como piña, papaya, coco y jocotes.',
    ],
  },

  planningChecklist: {
    en: [
      'Order tamales early from a trusted tamalera — they sell out fast',
      'Prepare your nacimiento (nativity scene) in early December',
      'Participate in the Quema del Diablo on December 7',
      'Make ponche de frutas with tropical fruits and spices',
      'Plan your Christmas Eve dinner and midnight gift exchange',
    ],
    fr: [
      'Commander des tamales tôt auprès d\'une tamalera de confiance — ils s\'épuisent vite',
      'Préparer votre nacimiento (scène de la Nativité) début décembre',
      'Participer à la Quema del Diablo le 7 décembre',
      'Faire du ponche de frutas avec des fruits tropicaux et des épices',
      'Planifier votre dîner de Nochebuena et l\'échange de cadeaux de minuit',
    ],
    es: [
      'Encargar tamales con anticipación de una tamalera de confianza — se agotan rápido',
      'Preparar tu nacimiento (escena del pesebre) a principios de diciembre',
      'Participar en la Quema del Diablo el 7 de diciembre',
      'Hacer ponche de frutas con frutas tropicales y especias',
      'Planificar tu cena de Nochebuena e intercambio de regalos a medianoche',
    ],
  },

  relatedHolidays: ['gt_new-years-day', 'gt_holy-thursday'],

  seo: {
    en: {
      titleTemplate: 'Christmas {year} Guatemala — Countdown & Traditions',
      descriptionTemplate: 'When is Christmas {year} in Guatemala? Live countdown, tamales, nacimientos, and Guatemalan Christmas celebration guide.',
      keywords: ['Christmas Guatemala', 'Navidad Guatemala', 'Guatemalan Christmas traditions', 'tamales Guatemala', 'Quema del Diablo'],
    },
    fr: {
      titleTemplate: 'Noël {year} Guatemala — Compte à rebours et traditions',
      descriptionTemplate: 'Quand est Noël {year} au Guatemala ? Compte à rebours, tamales, nacimientos et guide des traditions de Noël guatémaltèques.',
      keywords: ['Noël Guatemala', 'Navidad Guatemala', 'traditions Noël guatémaltèque', 'tamales Guatemala', 'Quema del Diablo'],
    },
    es: {
      titleTemplate: 'Navidad {year} Guatemala — Cuenta regresiva y tradiciones',
      descriptionTemplate: '¿Cuándo es Navidad {year} en Guatemala? Cuenta regresiva, tamales, nacimientos y guía de celebración navideña guatemalteca.',
      keywords: ['Navidad Guatemala', 'tradiciones navideñas Guatemala', 'tamales Guatemala', 'Quema del Diablo', 'cuenta regresiva Navidad Guatemala'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in Guatemala?', fr: 'Quand est Noël {year} au Guatemala ?', es: '¿Cuándo es Navidad {year} en Guatemala?' },
      answer: {
        en: 'Christmas {year} in Guatemala is on {date} ({dayOfWeek}). Celebrations begin on December 7 with the Quema del Diablo and continue through January 6.',
        fr: 'Noël {year} au Guatemala est le {date} ({dayOfWeek}). Les célébrations commencent le 7 décembre avec la Quema del Diablo et se poursuivent jusqu\'au 6 janvier.',
        es: 'La Navidad {year} en Guatemala es el {date} ({dayOfWeek}). Las celebraciones comienzan el 7 de diciembre con la Quema del Diablo y continúan hasta el 6 de enero.',
      },
    },
    {
      question: { en: 'What is the Quema del Diablo?', fr: 'Qu\'est-ce que la Quema del Diablo ?', es: '¿Qué es la Quema del Diablo?' },
      answer: {
        en: 'The Quema del Diablo (Burning of the Devil) on December 7 is a uniquely Guatemalan tradition where people burn old belongings and devil effigies to purify their homes and ward off evil before the Christmas season.',
        fr: 'La Quema del Diablo (Brûlure du Diable) le 7 décembre est une tradition uniquement guatémaltèque où les gens brûlent de vieux objets et des effigies du diable pour purifier leurs maisons et éloigner le mal avant la saison de Noël.',
        es: 'La Quema del Diablo el 7 de diciembre es una tradición exclusivamente guatemalteca donde la gente quema pertenencias viejas y efigies del diablo para purificar sus hogares y alejar el mal antes de la temporada navideña.',
      },
    },
    {
      question: { en: 'What are Guatemalan Christmas tamales?', fr: 'Que sont les tamales de Noël guatémaltèques ?', es: '¿Qué son los tamales navideños guatemaltecos?' },
      answer: {
        en: 'Guatemalan Christmas tamales come in two varieties: tamales colorados (red, with tomato sauce and meat) and tamales negros (black, with chocolate and chili sauce). Both are wrapped in banana leaves and are larger than Mexican tamales.',
        fr: 'Les tamales de Noël guatémaltèques existent en deux variétés : tamales colorados (rouges, avec sauce tomate et viande) et tamales negros (noirs, avec sauce au chocolat et piment). Les deux sont enveloppés dans des feuilles de bananier et sont plus grands que les tamales mexicains.',
        es: 'Los tamales navideños guatemaltecos vienen en dos variedades: tamales colorados (rojos, con salsa de tomate y carne) y tamales negros (negros, con salsa de chocolate y chile). Ambos se envuelven en hojas de plátano y son más grandes que los tamales mexicanos.',
      },
    },
    {
      question: { en: 'When do Guatemalans exchange Christmas gifts?', fr: 'Quand les Guatémaltèques échangent-ils les cadeaux de Noël ?', es: '¿Cuándo intercambian regalos de Navidad los guatemaltecos?' },
      answer: {
        en: 'Most Guatemalan families exchange gifts at midnight on Christmas Eve (Nochebuena), right after the fireworks and dinner. Some families also give gifts on January 6, Three Kings Day.',
        fr: 'La plupart des familles guatémaltèques échangent des cadeaux à minuit la veille de Noël (Nochebuena), juste après les feux d\'artifice et le dîner. Certaines familles offrent aussi des cadeaux le 6 janvier, Jour des Rois.',
        es: 'La mayoría de las familias guatemaltecas intercambian regalos a medianoche en Nochebuena, justo después de los fuegos artificiales y la cena. Algunas familias también dan regalos el 6 de enero, Día de Reyes.',
      },
    },
  ],

  colorTheme: 'red-green',
  icon: '🎄',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const gtHolidays: HolidayData[] = [
  newYearsDay,
  holyThursday,
  labourDay,
  independenceDay,
  revolutionDay,
  christmas,
];

export default gtHolidays;
