/**
 * Panama holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getCarnivalTuesday } from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'pa_new-years-day',
  countryCode: 'pa',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'ano-nuevo' },
  names: { en: "New Year's Day", fr: "Jour de l'An", es: 'Año Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 marks the beginning of the calendar year in Panama. Panamanians celebrate with family gatherings, fireworks over Panama City's skyline and the Canal, and festive traditions to welcome the new year.",
    fr: "Le Jour de l'An le 1er janvier marque le début de l'année civile au Panama. Les Panaméens célèbrent avec des réunions familiales, des feux d'artifice au-dessus de la ligne d'horizon de Panama City et du Canal, et des traditions festives pour accueillir la nouvelle année.",
    es: 'El Año Nuevo el 1 de enero marca el inicio del año calendario en Panamá. Los panameños celebran con reuniones familiares, fuegos artificiales sobre el horizonte de la Ciudad de Panamá y el Canal, y tradiciones festivas para dar la bienvenida al nuevo año.',
  },

  history: {
    en: "New Year's celebrations in Panama are among the most spectacular in Central America, thanks to the dramatic backdrop of Panama City's modern skyline along the waterfront. The Cinta Costera (coastal promenade) and Casco Viejo (Old Quarter) become centers of celebration.\n\nTraditional customs include burning muñecos (effigies) of the old year, eating twelve grapes at midnight, and wearing specific colored underwear for luck. The cosmopolitan nature of Panama City means celebrations draw influences from Latin American, Caribbean, and international traditions.\n\nIn the interior provinces, celebrations tend to be more traditional and family-focused, with community gatherings, music, and local foods playing central roles.",
    fr: "Les célébrations du Nouvel An au Panama sont parmi les plus spectaculaires d'Amérique centrale, grâce au décor dramatique de la ligne d'horizon moderne de Panama City le long du front de mer. La Cinta Costera (promenade côtière) et le Casco Viejo (vieux quartier) deviennent des centres de célébration.\n\nLes coutumes traditionnelles incluent la combustion de muñecos (effigies) de l'ancienne année, manger douze raisins à minuit et porter des sous-vêtements de couleurs spécifiques pour la chance. La nature cosmopolite de Panama City signifie que les célébrations tirent des influences des traditions latino-américaines, caribéennes et internationales.\n\nDans les provinces de l'intérieur, les célébrations tendent à être plus traditionnelles et centrées sur la famille, avec des rassemblements communautaires, de la musique et des plats locaux jouant des rôles centraux.",
    es: "Las celebraciones de Año Nuevo en Panamá son de las más espectaculares de Centroamérica, gracias al dramático telón de fondo del horizonte moderno de la Ciudad de Panamá a lo largo del malecón. La Cinta Costera y el Casco Viejo se convierten en centros de celebración.\n\nLas costumbres tradicionales incluyen la quema de muñecos (efigies) del año viejo, comer doce uvas a medianoche y usar ropa interior de colores específicos para la suerte. La naturaleza cosmopolita de la Ciudad de Panamá significa que las celebraciones incorporan influencias de tradiciones latinoamericanas, caribeñas e internacionales.\n\nEn las provincias del interior, las celebraciones tienden a ser más tradicionales y centradas en la familia, con reuniones comunitarias, música y comidas locales jugando roles centrales.",
  },

  traditions: {
    en: [
      'Watching fireworks over Panama City\'s skyline and the Bay of Panama',
      'Burning muñecos (effigies) representing the old year at midnight',
      'Gathering with family for a festive dinner on New Year\'s Eve',
      'Eating twelve grapes at midnight — one for each month of the new year',
      'Wearing yellow underwear for prosperity or red for love',
      'Celebrating in Casco Viejo and along the Cinta Costera',
    ],
    fr: [
      'Regarder les feux d\'artifice au-dessus de la ligne d\'horizon de Panama City et de la baie de Panama',
      'Brûler des muñecos (effigies) représentant l\'ancienne année à minuit',
      'Se réunir en famille pour un dîner festif le soir du Nouvel An',
      'Manger douze raisins à minuit — un pour chaque mois de la nouvelle année',
      'Porter des sous-vêtements jaunes pour la prospérité ou rouges pour l\'amour',
      'Célébrer dans le Casco Viejo et le long de la Cinta Costera',
    ],
    es: [
      'Ver fuegos artificiales sobre el horizonte de la Ciudad de Panamá y la Bahía de Panamá',
      'Quemar muñecos (efigies) que representan el año viejo a medianoche',
      'Reunirse en familia para una cena festiva en Nochevieja',
      'Comer doce uvas a medianoche — una por cada mes del nuevo año',
      'Usar ropa interior amarilla para la prosperidad o roja para el amor',
      'Celebrar en el Casco Viejo y a lo largo de la Cinta Costera',
    ],
  },

  funFacts: {
    en: [
      'Panama City\'s New Year\'s fireworks display over the modern skyline is considered one of the most impressive in Latin America.',
      'The tradition of burning muñecos can include effigies of politicians, celebrities, and fictional characters — the more creative, the better.',
      'Panama City\'s position as an international hub means New Year\'s celebrations feature influences from dozens of cultures.',
      'Many Panamanians travel to the beaches of Bocas del Toro, San Blas, or the Pearl Islands for New Year\'s celebrations.',
      'The Casco Viejo neighborhood in Panama City, a UNESCO World Heritage Site, becomes one of the most festive spots on New Year\'s Eve.',
    ],
    fr: [
      'Le spectacle de feux d\'artifice du Nouvel An à Panama City au-dessus de la ligne d\'horizon moderne est considéré comme l\'un des plus impressionnants d\'Amérique latine.',
      'La tradition de brûler des muñecos peut inclure des effigies de politiciens, de célébrités et de personnages fictifs — plus c\'est créatif, mieux c\'est.',
      'La position de Panama City en tant que hub international signifie que les célébrations du Nouvel An présentent des influences de dizaines de cultures.',
      'De nombreux Panaméens se rendent aux plages de Bocas del Toro, San Blas ou les Îles des Perles pour les célébrations du Nouvel An.',
      'Le quartier du Casco Viejo à Panama City, site du patrimoine mondial de l\'UNESCO, devient l\'un des endroits les plus festifs le soir du Nouvel An.',
    ],
    es: [
      'El espectáculo de fuegos artificiales de Año Nuevo en la Ciudad de Panamá sobre el horizonte moderno es considerado uno de los más impresionantes de América Latina.',
      'La tradición de quemar muñecos puede incluir efigies de políticos, celebridades y personajes ficticios — cuanto más creativos, mejor.',
      'La posición de la Ciudad de Panamá como centro internacional significa que las celebraciones de Año Nuevo presentan influencias de docenas de culturas.',
      'Muchos panameños viajan a las playas de Bocas del Toro, San Blas o las Islas de las Perlas para las celebraciones de Año Nuevo.',
      'El barrio del Casco Viejo en la Ciudad de Panamá, Patrimonio de la Humanidad de la UNESCO, se convierte en uno de los lugares más festivos en Nochevieja.',
    ],
  },

  planningChecklist: {
    en: [
      'Book hotels or beach accommodations well in advance — New Year\'s is peak tourism season',
      'Purchase fireworks and firecrackers early',
      'Plan your New Year\'s Eve dinner with traditional Panamanian dishes',
      'Check for events and parties at Casco Viejo and along the Cinta Costera',
      'Arrange safe transportation for the evening',
    ],
    fr: [
      'Réservez les hôtels ou hébergements de plage bien à l\'avance — le Nouvel An est haute saison touristique',
      'Achetez les feux d\'artifice et pétards tôt',
      'Planifiez votre dîner du Nouvel An avec des plats traditionnels panaméens',
      'Consultez les événements et fêtes au Casco Viejo et le long de la Cinta Costera',
      'Organisez un transport sûr pour la soirée',
    ],
    es: [
      'Reserve hoteles o alojamiento de playa con anticipación — Año Nuevo es temporada alta de turismo',
      'Compre fuegos artificiales y petardos temprano',
      'Planifique su cena de Nochevieja con platillos tradicionales panameños',
      'Consulte los eventos y fiestas en el Casco Viejo y a lo largo de la Cinta Costera',
      'Organice transporte seguro para la noche',
    ],
  },

  relatedHolidays: ['pa_christmas', 'pa_carnival'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Panama — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in Panama? Live countdown to January 1, Panama City celebrations, and guide.",
      keywords: ["New Year's Day Panama", 'Año Nuevo Panama', 'Panama City New Year', 'Casco Viejo New Year', 'Panama holidays'],
    },
    fr: {
      titleTemplate: "Jour de l'An {year} Panama — Compte à rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'An {year} au Panama ? Compte à rebours, célébrations à Panama City et guide.",
      keywords: ["Jour de l'An Panama", 'Nouvel An Panama', 'Panama City Nouvel An', 'Casco Viejo Nouvel An', 'jours fériés Panama'],
    },
    es: {
      titleTemplate: 'Año Nuevo {year} Panamá — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Año Nuevo {year} en Panamá? Cuenta regresiva, celebraciones en Ciudad de Panamá y guía.',
      keywords: ['Año Nuevo Panamá', 'Ciudad de Panamá Año Nuevo', 'Casco Viejo Año Nuevo', 'feriados Panamá', 'celebración Año Nuevo'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in Panama?", fr: "Quand est le Jour de l'An {year} au Panama ?", es: '¿Cuándo es el Año Nuevo {year} en Panamá?' },
      answer: {
        en: "New Year's Day {year} in Panama is on {date}. It is always January 1 and is an official public holiday.",
        fr: "Le Jour de l'An {year} au Panama est le {date}. C'est toujours le 1er janvier et c'est un jour férié officiel.",
        es: 'El Año Nuevo {year} en Panamá es el {date}. Siempre es el 1 de enero y es un feriado oficial.',
      },
    },
    {
      question: { en: 'Where are the best New Year\'s celebrations in Panama?', fr: 'Où sont les meilleures célébrations du Nouvel An au Panama ?', es: '¿Dónde están las mejores celebraciones de Año Nuevo en Panamá?' },
      answer: {
        en: 'Panama City offers the most spectacular celebrations, particularly in Casco Viejo and along the Cinta Costera waterfront. Beach destinations like Bocas del Toro and the San Blas Islands are also popular.',
        fr: 'Panama City offre les célébrations les plus spectaculaires, en particulier dans le Casco Viejo et le long du front de mer de la Cinta Costera. Les destinations balnéaires comme Bocas del Toro et les îles San Blas sont aussi populaires.',
        es: 'La Ciudad de Panamá ofrece las celebraciones más espectaculares, particularmente en el Casco Viejo y a lo largo del malecón de la Cinta Costera. Destinos de playa como Bocas del Toro y las Islas San Blas también son populares.',
      },
    },
    {
      question: { en: 'What are muñecos de año viejo?', fr: 'Que sont les muñecos de año viejo ?', es: '¿Qué son los muñecos de año viejo?' },
      answer: {
        en: 'Muñecos de año viejo are effigies stuffed with old clothes and firecrackers that are burned at midnight on New Year\'s Eve. They represent the old year being left behind and can depict politicians, celebrities, or fictional characters.',
        fr: 'Les muñecos de año viejo sont des effigies remplies de vieux vêtements et de pétards qui sont brûlées à minuit le soir du Nouvel An. Elles représentent l\'ancienne année laissée derrière et peuvent représenter des politiciens, des célébrités ou des personnages fictifs.',
        es: 'Los muñecos de año viejo son efigies rellenas de ropa vieja y petardos que se queman a medianoche en Nochevieja. Representan al año viejo que se deja atrás y pueden representar a políticos, celebridades o personajes ficticios.',
      },
    },
    {
      question: { en: "Is New Year's Day a public holiday in Panama?", fr: "Le Jour de l'An est-il un jour férié au Panama ?", es: '¿Es el Año Nuevo un feriado en Panamá?' },
      answer: {
        en: "Yes, New Year's Day is an official public holiday in Panama. Banks, government offices, and most businesses are closed.",
        fr: "Oui, le Jour de l'An est un jour férié officiel au Panama. Les banques, les bureaux gouvernementaux et la plupart des commerces sont fermés.",
        es: 'Sí, el Año Nuevo es un feriado oficial en Panamá. Los bancos, oficinas gubernamentales y la mayoría de los negocios están cerrados.',
      },
    },
  ],

  colorTheme: 'new-year',
  icon: '🎆',
};

// ---------------------------------------------------------------------------
// Carnival — calculated (Carnival Tuesday, 47 days before Easter)
// ---------------------------------------------------------------------------

const carnival: HolidayData = {
  id: 'pa_carnival',
  countryCode: 'pa',
  slugs: { en: 'carnival', fr: 'carnaval', es: 'carnaval' },
  names: { en: 'Carnival', fr: 'Carnaval', es: 'Carnaval' },

  dateType: 'calculated',
  calculateDate: getCarnivalTuesday,

  descriptions: {
    en: "Panama's Carnival (Carnaval) is one of the most famous and exuberant celebrations in Central America. Held during the four days before Ash Wednesday, it features massive parades, mojaderas (water-throwing celebrations), culecos (water trucks spraying crowds), live music, and non-stop dancing.",
    fr: "Le Carnaval du Panama est l'une des célébrations les plus célèbres et exubérantes d'Amérique centrale. Se déroulant pendant les quatre jours avant le mercredi des Cendres, il présente des défilés massifs, des mojaderas (célébrations de jets d'eau), des culecos (camions-citernes arrosant la foule), de la musique live et de la danse non-stop.",
    es: "El Carnaval de Panamá es una de las celebraciones más famosas y exuberantes de Centroamérica. Celebrado durante los cuatro días antes del Miércoles de Ceniza, presenta desfiles masivos, mojaderas (celebraciones con agua), culecos (camiones cisterna que mojan a la multitud), música en vivo y baile sin parar.",
  },

  history: {
    en: "Panama's Carnival traditions date back to the Spanish colonial period and have evolved into one of Latin America's most spectacular celebrations. The festivities officially begin on the Saturday before Ash Wednesday and end on Shrove Tuesday (Carnival Tuesday) with the symbolic 'Burial of the Sardine.'\n\nThe city of Las Tablas in the Los Santos province is the most famous Carnival destination in Panama. Its celebration is renowned for the rivalry between Calle Arriba and Calle Abajo — two neighborhoods that compete with extravagant floats, queens, and music.\n\nCulecos, where water trucks spray crowds of dancing revelers on the streets, are a uniquely Panamanian Carnival tradition that helps celebrants stay cool in the tropical heat. The mojaderas (water-throwing parties) are especially popular with younger crowds.",
    fr: "Les traditions du Carnaval panaméen remontent à la période coloniale espagnole et ont évolué pour devenir l'une des célébrations les plus spectaculaires d'Amérique latine. Les festivités commencent officiellement le samedi avant le mercredi des Cendres et se terminent le mardi gras (mardi de Carnaval) avec l'« Enterrement de la Sardine » symbolique.\n\nLa ville de Las Tablas dans la province de Los Santos est la destination de Carnaval la plus célèbre au Panama. Sa célébration est renommée pour la rivalité entre Calle Arriba et Calle Abajo — deux quartiers qui rivalisent avec des chars extravagants, des reines et de la musique.\n\nLes culecos, où des camions-citernes arrosent des foules de fêtards dansant dans les rues, sont une tradition de Carnaval uniquement panaméenne qui aide les célébrants à rester au frais dans la chaleur tropicale. Les mojaderas (fêtes de jets d'eau) sont particulièrement populaires auprès des jeunes.",
    es: "Las tradiciones del Carnaval panameño se remontan al período colonial español y han evolucionado hasta convertirse en una de las celebraciones más espectaculares de América Latina. Las festividades comienzan oficialmente el sábado antes del Miércoles de Ceniza y terminan el Martes de Carnaval con el simbólico 'Entierro de la Sardina'.\n\nLa ciudad de Las Tablas en la provincia de Los Santos es el destino de Carnaval más famoso de Panamá. Su celebración es reconocida por la rivalidad entre Calle Arriba y Calle Abajo — dos barrios que compiten con carrozas extravagantes, reinas y música.\n\nLos culecos, donde camiones cisterna mojan a multitudes de fiesteros bailando en las calles, son una tradición de Carnaval únicamente panameña que ayuda a los celebrantes a mantenerse frescos en el calor tropical. Las mojaderas (fiestas de agua) son especialmente populares entre los jóvenes.",
  },

  traditions: {
    en: [
      'Dancing in the streets during culecos — where water trucks spray crowds to the beat of music',
      'Participating in mojaderas (water-throwing celebrations)',
      'Watching the elaborate queen parades (desfiles de reinas) in Las Tablas',
      'Attending the rivalry celebrations between Calle Arriba and Calle Abajo in Las Tablas',
      'Dancing to live music featuring salsa, reggaetón, cumbia, and típico music',
      'Witnessing the "Burial of the Sardine" ceremony that ends Carnival on Tuesday night',
      'Wearing costumes, masks, and festive clothing',
    ],
    fr: [
      'Danser dans les rues pendant les culecos — où des camions-citernes arrosent la foule au rythme de la musique',
      'Participer aux mojaderas (célébrations de jets d\'eau)',
      'Regarder les défilés élaborés de reines (desfiles de reinas) à Las Tablas',
      'Assister aux célébrations de rivalité entre Calle Arriba et Calle Abajo à Las Tablas',
      'Danser sur de la musique live avec salsa, reggaetón, cumbia et musique típico',
      'Assister à la cérémonie de l\'« Enterrement de la Sardine » qui met fin au Carnaval le mardi soir',
      'Porter des costumes, des masques et des vêtements festifs',
    ],
    es: [
      'Bailar en las calles durante los culecos — donde camiones cisterna mojan a la multitud al ritmo de la música',
      'Participar en mojaderas (celebraciones con agua)',
      'Ver los elaborados desfiles de reinas en Las Tablas',
      'Asistir a las celebraciones de rivalidad entre Calle Arriba y Calle Abajo en Las Tablas',
      'Bailar con música en vivo de salsa, reggaetón, cumbia y música típica',
      'Presenciar la ceremonia del "Entierro de la Sardina" que pone fin al Carnaval el martes por la noche',
      'Usar disfraces, máscaras y ropa festiva',
    ],
  },

  funFacts: {
    en: [
      'The rivalry between Calle Arriba and Calle Abajo in Las Tablas dates back over 100 years, with each side spending enormous sums on their floats and queens.',
      'Culecos are unique to Panama — no other country in the world has the tradition of water trucks spraying dancing crowds during Carnival.',
      'Panama\'s Carnival is the largest celebration in the country, with Las Tablas attracting over 200,000 visitors during the four-day festival.',
      'The "Burial of the Sardine" on Tuesday night symbolically marks the end of earthly pleasures before the fasting period of Lent begins.',
      'Panama City also hosts its own Carnival celebrations on the Cinta Costera, with parades, concerts, and culecos.',
    ],
    fr: [
      'La rivalité entre Calle Arriba et Calle Abajo à Las Tablas remonte à plus de 100 ans, chaque côté dépensant des sommes énormes pour ses chars et ses reines.',
      'Les culecos sont uniques au Panama — aucun autre pays au monde n\'a la tradition de camions-citernes arrosant des foules dansantes pendant le Carnaval.',
      'Le Carnaval du Panama est la plus grande célébration du pays, Las Tablas attirant plus de 200 000 visiteurs pendant le festival de quatre jours.',
      'L\'« Enterrement de la Sardine » le mardi soir marque symboliquement la fin des plaisirs terrestres avant le début de la période de jeûne du Carême.',
      'Panama City accueille également ses propres célébrations de Carnaval sur la Cinta Costera, avec des défilés, des concerts et des culecos.',
    ],
    es: [
      'La rivalidad entre Calle Arriba y Calle Abajo en Las Tablas data de más de 100 años, con cada lado gastando sumas enormes en sus carrozas y reinas.',
      'Los culecos son únicos de Panamá — ningún otro país en el mundo tiene la tradición de camiones cisterna mojando a multitudes bailando durante el Carnaval.',
      'El Carnaval de Panamá es la celebración más grande del país, con Las Tablas atrayendo a más de 200,000 visitantes durante el festival de cuatro días.',
      'El "Entierro de la Sardina" el martes por la noche marca simbólicamente el fin de los placeres terrenales antes de que comience el período de ayuno de la Cuaresma.',
      'La Ciudad de Panamá también acoge sus propias celebraciones de Carnaval en la Cinta Costera, con desfiles, conciertos y culecos.',
    ],
  },

  planningChecklist: {
    en: [
      'Book accommodations in Las Tablas months in advance — it sells out completely',
      'Bring waterproof protection for your phone and valuables during culecos',
      'Wear light clothes and sandals that can get wet — you will get soaked',
      'Plan transportation early as roads to Las Tablas become extremely congested',
      'Bring plenty of sunscreen and stay hydrated in the tropical heat',
    ],
    fr: [
      'Réservez les hébergements à Las Tablas des mois à l\'avance — tout est complet',
      'Apportez une protection imperméable pour votre téléphone et vos objets de valeur pendant les culecos',
      'Portez des vêtements légers et des sandales qui peuvent être mouillés — vous serez trempé',
      'Planifiez le transport tôt car les routes vers Las Tablas deviennent extrêmement congestionnées',
      'Apportez beaucoup de crème solaire et restez hydraté dans la chaleur tropicale',
    ],
    es: [
      'Reserve alojamiento en Las Tablas con meses de anticipación — se agota completamente',
      'Lleve protección impermeable para su teléfono y objetos de valor durante los culecos',
      'Use ropa ligera y sandalias que puedan mojarse — quedará empapado',
      'Planifique el transporte temprano ya que las carreteras a Las Tablas se congestionan extremadamente',
      'Lleve mucho protector solar y manténgase hidratado en el calor tropical',
    ],
  },

  relatedHolidays: ['pa_new-years-day', 'pa_christmas'],

  seo: {
    en: {
      titleTemplate: 'Panama Carnival {year} — Countdown, Dates & Guide',
      descriptionTemplate: 'When is Carnival {year} in Panama? Live countdown, Las Tablas celebrations, culecos, mojaderas, and complete guide.',
      keywords: ['Panama Carnival', 'Carnaval Panama', 'Las Tablas Carnival', 'culecos Panama', 'mojaderas Panama'],
    },
    fr: {
      titleTemplate: 'Carnaval du Panama {year} — Compte à rebours, dates et guide',
      descriptionTemplate: 'Quand est le Carnaval {year} au Panama ? Compte à rebours, célébrations de Las Tablas, culecos, mojaderas et guide.',
      keywords: ['Carnaval Panama', 'Las Tablas Carnaval', 'culecos Panama', 'mojaderas Panama', 'jours fériés Panama'],
    },
    es: {
      titleTemplate: 'Carnaval de Panamá {year} — Cuenta regresiva, fechas y guía',
      descriptionTemplate: '¿Cuándo es el Carnaval {year} en Panamá? Cuenta regresiva, celebraciones de Las Tablas, culecos, mojaderas y guía.',
      keywords: ['Carnaval Panamá', 'Las Tablas Carnaval', 'culecos Panamá', 'mojaderas Panamá', 'feriados Panamá'],
    },
  },

  faq: [
    {
      question: { en: 'When is Carnival {year} in Panama?', fr: 'Quand est le Carnaval {year} au Panama ?', es: '¿Cuándo es el Carnaval {year} en Panamá?' },
      answer: {
        en: 'Carnival {year} in Panama culminates on Carnival Tuesday, {date}. The celebrations run from the preceding Saturday through Tuesday.',
        fr: 'Le Carnaval {year} au Panama culmine le mardi de Carnaval, le {date}. Les célébrations se déroulent du samedi précédent au mardi.',
        es: 'El Carnaval {year} en Panamá culmina el Martes de Carnaval, {date}. Las celebraciones van del sábado anterior al martes.',
      },
    },
    {
      question: { en: 'What are culecos?', fr: 'Que sont les culecos ?', es: '¿Qué son los culecos?' },
      answer: {
        en: 'Culecos are a uniquely Panamanian Carnival tradition where water trucks drive through the streets spraying water on dancing crowds. They are held daily during Carnival and help revelers stay cool in the tropical heat while dancing to live music.',
        fr: 'Les culecos sont une tradition de Carnaval uniquement panaméenne où des camions-citernes traversent les rues en arrosant d\'eau les foules dansantes. Ils ont lieu quotidiennement pendant le Carnaval et aident les fêtards à rester au frais dans la chaleur tropicale tout en dansant sur de la musique live.',
        es: 'Los culecos son una tradición de Carnaval únicamente panameña donde camiones cisterna recorren las calles mojando con agua a las multitudes que bailan. Se celebran diariamente durante el Carnaval y ayudan a los fiesteros a mantenerse frescos en el calor tropical mientras bailan con música en vivo.',
      },
    },
    {
      question: { en: 'Where is the best Carnival celebration in Panama?', fr: 'Où est la meilleure célébration du Carnaval au Panama ?', es: '¿Dónde está la mejor celebración de Carnaval en Panamá?' },
      answer: {
        en: 'Las Tablas in the Los Santos province is the most famous and traditional Carnival destination in Panama, known for the rivalry between Calle Arriba and Calle Abajo. Panama City also hosts large celebrations on the Cinta Costera.',
        fr: 'Las Tablas dans la province de Los Santos est la destination de Carnaval la plus célèbre et traditionnelle au Panama, connue pour la rivalité entre Calle Arriba et Calle Abajo. Panama City accueille également de grandes célébrations sur la Cinta Costera.',
        es: 'Las Tablas en la provincia de Los Santos es el destino de Carnaval más famoso y tradicional de Panamá, conocido por la rivalidad entre Calle Arriba y Calle Abajo. La Ciudad de Panamá también acoge grandes celebraciones en la Cinta Costera.',
      },
    },
    {
      question: { en: 'What is the Burial of the Sardine?', fr: "Qu'est-ce que l'Enterrement de la Sardine ?", es: '¿Qué es el Entierro de la Sardina?' },
      answer: {
        en: 'The Burial of the Sardine is a ceremony held on Carnival Tuesday night that symbolically ends the Carnival festivities. A sardine effigy is paraded through the streets and "buried," representing the end of worldly pleasures before Lent begins on Ash Wednesday.',
        fr: 'L\'Enterrement de la Sardine est une cérémonie tenue le mardi soir du Carnaval qui met symboliquement fin aux festivités. Une effigie de sardine est promenée dans les rues et « enterrée », représentant la fin des plaisirs terrestres avant le début du Carême le mercredi des Cendres.',
        es: 'El Entierro de la Sardina es una ceremonia celebrada la noche del Martes de Carnaval que simbólicamente pone fin a las festividades. Una efigie de sardina se pasea por las calles y se "entierra", representando el fin de los placeres terrenales antes de que comience la Cuaresma el Miércoles de Ceniza.',
      },
    },
  ],

  colorTheme: 'summer',
  icon: '🎭',
};

// ---------------------------------------------------------------------------
// Independence from Colombia — November 3
// ---------------------------------------------------------------------------

const independenceFromColombia: HolidayData = {
  id: 'pa_independence-from-colombia',
  countryCode: 'pa',
  slugs: { en: 'independence-from-colombia', fr: 'independance-de-la-colombie', es: 'independencia-de-colombia' },
  names: { en: 'Independence from Colombia', fr: 'Indépendance de la Colombie', es: 'Independencia de Colombia' },

  dateType: 'fixed',
  fixedMonth: 11,
  fixedDay: 3,

  descriptions: {
    en: "Independence from Colombia on November 3 celebrates Panama's separation from Colombia in 1903, which was achieved with the support of the United States. The day features patriotic celebrations, parades, and ceremonies across the country.",
    fr: "L'Indépendance de la Colombie le 3 novembre célèbre la séparation du Panama de la Colombie en 1903, obtenue avec le soutien des États-Unis. La journée comprend des célébrations patriotiques, des défilés et des cérémonies à travers le pays.",
    es: "La Independencia de Colombia el 3 de noviembre celebra la separación de Panamá de Colombia en 1903, lograda con el apoyo de Estados Unidos. El día presenta celebraciones patrióticas, desfiles y ceremonias en todo el país.",
  },

  history: {
    en: "Panama declared independence from Colombia on November 3, 1903, after a complex series of political events tied to the construction of the Panama Canal. The United States, eager to build the canal, supported Panamanian separatists when Colombia's Senate rejected the Hay-Herrán Treaty that would have granted the US canal rights.\n\nThe revolution was largely bloodless. The US Navy prevented Colombian troops from reaching Panama City, and within days the new Republic of Panama was recognized by the United States. Two weeks later, Panama signed the Hay-Bunau-Varilla Treaty granting the US rights to build and operate the Canal.\n\nWhile the circumstances of independence are complex and debated, November 3 is celebrated as a day of national sovereignty and patriotism. It falls during the 'Fiestas Patrias' (Patriotic Festivities), a month of November celebrations that includes multiple national holidays.",
    fr: "Le Panama a déclaré son indépendance de la Colombie le 3 novembre 1903, après une série complexe d'événements politiques liés à la construction du canal de Panama. Les États-Unis, désireux de construire le canal, ont soutenu les séparatistes panaméens lorsque le Sénat colombien a rejeté le traité Hay-Herrán qui aurait accordé aux États-Unis les droits du canal.\n\nLa révolution a été en grande partie sans effusion de sang. La marine américaine a empêché les troupes colombiennes d'atteindre Panama City, et en quelques jours la nouvelle République du Panama a été reconnue par les États-Unis. Deux semaines plus tard, le Panama a signé le traité Hay-Bunau-Varilla accordant aux États-Unis les droits de construire et d'exploiter le Canal.\n\nBien que les circonstances de l'indépendance soient complexes et débattues, le 3 novembre est célébré comme un jour de souveraineté nationale et de patriotisme. Il tombe pendant les « Fiestas Patrias » (Festivités Patriotiques), un mois de novembre de célébrations qui comprend plusieurs jours fériés nationaux.",
    es: "Panamá declaró su independencia de Colombia el 3 de noviembre de 1903, después de una serie compleja de eventos políticos vinculados a la construcción del Canal de Panamá. Estados Unidos, deseoso de construir el canal, apoyó a los separatistas panameños cuando el Senado colombiano rechazó el Tratado Hay-Herrán que habría otorgado a EE.UU. los derechos del canal.\n\nLa revolución fue en gran parte incruenta. La marina estadounidense impidió que las tropas colombianas llegaran a la Ciudad de Panamá, y en pocos días la nueva República de Panamá fue reconocida por Estados Unidos. Dos semanas después, Panamá firmó el Tratado Hay-Bunau-Varilla otorgando a EE.UU. los derechos de construir y operar el Canal.\n\nAunque las circunstancias de la independencia son complejas y debatidas, el 3 de noviembre se celebra como un día de soberanía nacional y patriotismo. Cae durante las 'Fiestas Patrias', un mes de noviembre de celebraciones que incluye múltiples feriados nacionales.",
  },

  traditions: {
    en: [
      'Watching military and civic parades through major cities',
      'Attending patriotic ceremonies at government buildings',
      'Waving Panama flags and displaying patriotic decorations',
      'Listening to speeches by government officials and military leaders',
      'Participating in school programs and cultural events',
      'Visiting historical sites related to the independence movement',
    ],
    fr: [
      'Regarder des défilés militaires et civiques dans les grandes villes',
      'Assister à des cérémonies patriotiques dans les bâtiments gouvernementaux',
      'Agiter des drapeaux du Panama et afficher des décorations patriotiques',
      'Écouter les discours des responsables gouvernementaux et des dirigeants militaires',
      'Participer à des programmes scolaires et des événements culturels',
      'Visiter des sites historiques liés au mouvement d\'indépendance',
    ],
    es: [
      'Ver desfiles militares y cívicos por las principales ciudades',
      'Asistir a ceremonias patrióticas en edificios gubernamentales',
      'Ondear banderas de Panamá y exhibir decoraciones patrióticas',
      'Escuchar discursos de funcionarios gubernamentales y líderes militares',
      'Participar en programas escolares y eventos culturales',
      'Visitar sitios históricos relacionados con el movimiento de independencia',
    ],
  },

  funFacts: {
    en: [
      'The Panamanian revolution of 1903 was one of the shortest in history — Colombia\'s forces were unable to reach Panama City due to US naval intervention.',
      'The Panama Canal, which motivated the independence, was completed in 1914 and was transferred to Panamanian control on December 31, 1999.',
      'November is known as "Mes de la Patria" (Month of the Homeland) in Panama, with multiple patriotic holidays throughout the month.',
      'The first flag of the Republic of Panama was sewn by María Ossa de Amador, wife of the first president.',
      'Panama is the only country in the world that declared independence with significant American military support and went on to develop a strong national identity distinct from both Colombia and the US.',
    ],
    fr: [
      'La révolution panaméenne de 1903 a été l\'une des plus courtes de l\'histoire — les forces colombiennes n\'ont pas pu atteindre Panama City en raison de l\'intervention navale américaine.',
      'Le canal de Panama, qui a motivé l\'indépendance, a été achevé en 1914 et a été transféré au contrôle panaméen le 31 décembre 1999.',
      'Novembre est connu comme « Mes de la Patria » (Mois de la Patrie) au Panama, avec plusieurs jours fériés patriotiques tout au long du mois.',
      'Le premier drapeau de la République du Panama a été cousu par María Ossa de Amador, épouse du premier président.',
      'Le Panama est le seul pays au monde qui a déclaré son indépendance avec un soutien militaire américain significatif et a développé une forte identité nationale distincte de la Colombie et des États-Unis.',
    ],
    es: [
      'La revolución panameña de 1903 fue una de las más cortas de la historia — las fuerzas colombianas no pudieron llegar a la Ciudad de Panamá debido a la intervención naval estadounidense.',
      'El Canal de Panamá, que motivó la independencia, fue completado en 1914 y fue transferido al control panameño el 31 de diciembre de 1999.',
      'Noviembre es conocido como "Mes de la Patria" en Panamá, con múltiples feriados patrióticos durante todo el mes.',
      'La primera bandera de la República de Panamá fue cosida por María Ossa de Amador, esposa del primer presidente.',
      'Panamá es el único país en el mundo que declaró su independencia con apoyo militar estadounidense significativo y desarrolló una fuerte identidad nacional distinta tanto de Colombia como de EE.UU.',
    ],
  },

  planningChecklist: {
    en: [
      'Check parade schedules and routes in Panama City and other major cities',
      'Dress in red, white, and blue (Panamanian flag colors) for the celebrations',
      'Visit the Panama Canal Museum or Casco Viejo for historical context',
      'Plan for road closures during parades and ceremonies',
      'Note that this is the beginning of the "Fiestas Patrias" month — more holidays follow',
    ],
    fr: [
      'Consultez les horaires et itinéraires des défilés à Panama City et d\'autres grandes villes',
      'Habillez-vous en rouge, blanc et bleu (couleurs du drapeau panaméen) pour les célébrations',
      'Visitez le Musée du Canal de Panama ou le Casco Viejo pour le contexte historique',
      'Planifiez les fermetures de routes pendant les défilés et cérémonies',
      'Notez que c\'est le début du mois des « Fiestas Patrias » — d\'autres jours fériés suivent',
    ],
    es: [
      'Consulte los horarios y rutas de los desfiles en la Ciudad de Panamá y otras ciudades principales',
      'Vístase de rojo, blanco y azul (colores de la bandera panameña) para las celebraciones',
      'Visite el Museo del Canal de Panamá o el Casco Viejo para contexto histórico',
      'Planee para cierres de calles durante los desfiles y ceremonias',
      'Tenga en cuenta que este es el inicio del mes de "Fiestas Patrias" — más feriados siguen',
    ],
  },

  relatedHolidays: ['pa_independence-from-spain', 'pa_christmas'],

  seo: {
    en: {
      titleTemplate: 'Independence from Colombia {year} Panama — Countdown & History',
      descriptionTemplate: 'When is Independence from Colombia {year} in Panama? Live countdown to November 3, history of 1903 separation, and guide.',
      keywords: ['Independence from Colombia Panama', 'November 3 Panama', 'Panama independence 1903', 'Fiestas Patrias Panama', 'Panama holidays'],
    },
    fr: {
      titleTemplate: 'Indépendance de la Colombie {year} Panama — Compte à rebours et histoire',
      descriptionTemplate: 'Quand est l\'Indépendance de la Colombie {year} au Panama ? Compte à rebours, histoire de la séparation de 1903 et guide.',
      keywords: ['Indépendance de la Colombie Panama', '3 novembre Panama', 'indépendance Panama 1903', 'Fiestas Patrias Panama', 'jours fériés Panama'],
    },
    es: {
      titleTemplate: 'Independencia de Colombia {year} Panamá — Cuenta regresiva e historia',
      descriptionTemplate: '¿Cuándo es la Independencia de Colombia {year} en Panamá? Cuenta regresiva, historia de la separación de 1903 y guía.',
      keywords: ['Independencia de Colombia Panamá', '3 de noviembre Panamá', 'independencia Panamá 1903', 'Fiestas Patrias Panamá', 'feriados Panamá'],
    },
  },

  faq: [
    {
      question: { en: 'When is Independence from Colombia {year} in Panama?', fr: 'Quand est l\'Indépendance de la Colombie {year} au Panama ?', es: '¿Cuándo es la Independencia de Colombia {year} en Panamá?' },
      answer: {
        en: 'Independence from Colombia {year} in Panama is on {date}. It is always November 3.',
        fr: 'L\'Indépendance de la Colombie {year} au Panama est le {date}. C\'est toujours le 3 novembre.',
        es: 'La Independencia de Colombia {year} en Panamá es el {date}. Siempre es el 3 de noviembre.',
      },
    },
    {
      question: { en: 'Why did Panama separate from Colombia?', fr: 'Pourquoi le Panama s\'est-il séparé de la Colombie ?', es: '¿Por qué Panamá se separó de Colombia?' },
      answer: {
        en: 'Panama separated from Colombia in 1903 due to a combination of long-standing desire for autonomy and US interest in building the Panama Canal. When Colombia\'s Senate rejected the canal treaty, the US supported Panamanian separatists.',
        fr: 'Le Panama s\'est séparé de la Colombie en 1903 en raison d\'une combinaison de désir d\'autonomie de longue date et de l\'intérêt américain pour la construction du canal de Panama. Lorsque le Sénat colombien a rejeté le traité du canal, les États-Unis ont soutenu les séparatistes panaméens.',
        es: 'Panamá se separó de Colombia en 1903 debido a una combinación de deseo de autonomía de larga data e interés estadounidense en construir el Canal de Panamá. Cuando el Senado colombiano rechazó el tratado del canal, EE.UU. apoyó a los separatistas panameños.',
      },
    },
    {
      question: { en: 'What are the Fiestas Patrias?', fr: 'Que sont les Fiestas Patrias ?', es: '¿Qué son las Fiestas Patrias?' },
      answer: {
        en: 'The Fiestas Patrias (Patriotic Festivities) is the name for Panama\'s November celebrations, which include multiple national holidays: November 3 (Independence from Colombia), November 4 (Flag Day), November 5 (Colón Day), November 10 (First Cry of Independence), and November 28 (Independence from Spain).',
        fr: 'Les Fiestas Patrias (Festivités Patriotiques) désignent les célébrations de novembre au Panama, qui comprennent plusieurs jours fériés nationaux : 3 novembre (Indépendance de la Colombie), 4 novembre (Jour du Drapeau), 5 novembre (Jour de Colón), 10 novembre (Premier Cri d\'Indépendance) et 28 novembre (Indépendance de l\'Espagne).',
        es: 'Las Fiestas Patrias es el nombre de las celebraciones de noviembre en Panamá, que incluyen múltiples feriados nacionales: 3 de noviembre (Independencia de Colombia), 4 de noviembre (Día de la Bandera), 5 de noviembre (Día de Colón), 10 de noviembre (Primer Grito de Independencia) y 28 de noviembre (Independencia de España).',
      },
    },
    {
      question: { en: 'Is November 3 a public holiday in Panama?', fr: 'Le 3 novembre est-il un jour férié au Panama ?', es: '¿Es el 3 de noviembre un feriado en Panamá?' },
      answer: {
        en: 'Yes, November 3 is an official public holiday in Panama. Banks, government offices, and most businesses are closed.',
        fr: 'Oui, le 3 novembre est un jour férié officiel au Panama. Les banques, les bureaux gouvernementaux et la plupart des commerces sont fermés.',
        es: 'Sí, el 3 de noviembre es un feriado oficial en Panamá. Los bancos, oficinas gubernamentales y la mayoría de los negocios están cerrados.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '🇵🇦',
};

// ---------------------------------------------------------------------------
// Independence from Spain — November 28
// ---------------------------------------------------------------------------

const independenceFromSpain: HolidayData = {
  id: 'pa_independence-from-spain',
  countryCode: 'pa',
  slugs: { en: 'independence-from-spain', fr: 'independance-de-lespagne', es: 'independencia-de-espana' },
  names: { en: 'Independence from Spain', fr: "Indépendance de l'Espagne", es: 'Independencia de España' },

  dateType: 'fixed',
  fixedMonth: 11,
  fixedDay: 28,

  descriptions: {
    en: "Independence from Spain on November 28 commemorates Panama's first declaration of independence from Spain in 1821, known as El Primer Grito de la Villa de Los Santos (The First Cry of Independence from the Town of Los Santos). It marks the beginning of Panama's journey to full sovereignty.",
    fr: "L'Indépendance de l'Espagne le 28 novembre commémore la première déclaration d'indépendance du Panama de l'Espagne en 1821, connue sous le nom d'El Primer Grito de la Villa de Los Santos (Le Premier Cri d'Indépendance de la Ville de Los Santos). Elle marque le début du parcours du Panama vers la pleine souveraineté.",
    es: "La Independencia de España el 28 de noviembre conmemora la primera declaración de independencia de Panamá de España en 1821, conocida como El Primer Grito de la Villa de Los Santos. Marca el inicio del camino de Panamá hacia la plena soberanía.",
  },

  history: {
    en: "On November 10, 1821, the town of Los Santos in the Azuero Peninsula issued the first call for Panamanian independence from Spain — the 'Primer Grito de Independencia.' This sparked a broader movement across the isthmus.\n\nOn November 28, 1821, Panama City officially declared independence from Spain and voluntarily joined Gran Colombia, the federation led by Simón Bolívar that included present-day Colombia, Venezuela, and Ecuador. Panama remained part of Colombia for 82 years.\n\nNovember 28 is celebrated as part of the Fiestas Patrias month, closing out a series of patriotic holidays. It represents Panama's first step toward independence, even though full sovereignty from Colombia would not come until 1903.",
    fr: "Le 10 novembre 1821, la ville de Los Santos dans la péninsule d'Azuero a lancé le premier appel à l'indépendance panaméenne de l'Espagne — le « Primer Grito de Independencia ». Cela a déclenché un mouvement plus large à travers l'isthme.\n\nLe 28 novembre 1821, Panama City a officiellement déclaré son indépendance de l'Espagne et a volontairement rejoint la Grande Colombie, la fédération dirigée par Simón Bolívar qui comprenait l'actuelle Colombie, le Venezuela et l'Équateur. Le Panama est resté partie de la Colombie pendant 82 ans.\n\nLe 28 novembre est célébré dans le cadre du mois des Fiestas Patrias, clôturant une série de jours fériés patriotiques. Il représente le premier pas du Panama vers l'indépendance, même si la pleine souveraineté de la Colombie ne viendrait qu'en 1903.",
    es: "El 10 de noviembre de 1821, la Villa de Los Santos en la Península de Azuero emitió el primer llamado a la independencia panameña de España — el 'Primer Grito de Independencia'. Esto desencadenó un movimiento más amplio a través del istmo.\n\nEl 28 de noviembre de 1821, la Ciudad de Panamá declaró oficialmente su independencia de España y voluntariamente se unió a la Gran Colombia, la federación liderada por Simón Bolívar que incluía la actual Colombia, Venezuela y Ecuador. Panamá permaneció como parte de Colombia durante 82 años.\n\nEl 28 de noviembre se celebra como parte del mes de Fiestas Patrias, cerrando una serie de feriados patrióticos. Representa el primer paso de Panamá hacia la independencia, aunque la plena soberanía de Colombia no llegaría hasta 1903.",
  },

  traditions: {
    en: [
      'Attending civic ceremonies and patriotic events',
      'Watching parades featuring school marching bands and civic groups',
      'Visiting historical sites in Los Santos and Panama City',
      'Displaying Panamanian flags and patriotic decorations',
      'Participating in cultural events and educational programs',
      'Closing out the "Fiestas Patrias" month with celebrations',
    ],
    fr: [
      'Assister à des cérémonies civiques et des événements patriotiques',
      'Regarder des défilés avec des fanfares scolaires et des groupes civiques',
      'Visiter des sites historiques à Los Santos et Panama City',
      'Afficher des drapeaux panaméens et des décorations patriotiques',
      'Participer à des événements culturels et des programmes éducatifs',
      'Clôturer le mois des « Fiestas Patrias » avec des célébrations',
    ],
    es: [
      'Asistir a ceremonias cívicas y eventos patrióticos',
      'Ver desfiles con bandas de guerra escolares y grupos cívicos',
      'Visitar sitios históricos en Los Santos y la Ciudad de Panamá',
      'Exhibir banderas panameñas y decoraciones patrióticas',
      'Participar en eventos culturales y programas educativos',
      'Cerrar el mes de "Fiestas Patrias" con celebraciones',
    ],
  },

  funFacts: {
    en: [
      'The First Cry of Independence from Los Santos on November 10, 1821, predated Panama City\'s declaration by 18 days.',
      'After gaining independence from Spain, Panama voluntarily joined Gran Colombia — Simón Bolívar\'s federation of South American nations.',
      'Panama remained part of Colombia for 82 years (1821-1903) before achieving full independence.',
      'November 28 closes out Panama\'s "Mes de la Patria" (Month of the Homeland), one of the most holiday-rich months in any country.',
      'The Azuero Peninsula, where the independence movement began, is considered the heartland of traditional Panamanian culture.',
    ],
    fr: [
      'Le Premier Cri d\'Indépendance de Los Santos le 10 novembre 1821 a précédé la déclaration de Panama City de 18 jours.',
      'Après avoir obtenu l\'indépendance de l\'Espagne, le Panama a volontairement rejoint la Grande Colombie — la fédération de nations sud-américaines de Simón Bolívar.',
      'Le Panama est resté partie de la Colombie pendant 82 ans (1821-1903) avant d\'obtenir sa pleine indépendance.',
      'Le 28 novembre clôture le « Mes de la Patria » (Mois de la Patrie) du Panama, l\'un des mois les plus riches en jours fériés de tous les pays.',
      'La péninsule d\'Azuero, où le mouvement d\'indépendance a commencé, est considérée comme le cœur de la culture traditionnelle panaméenne.',
    ],
    es: [
      'El Primer Grito de Independencia de Los Santos el 10 de noviembre de 1821 precedió a la declaración de la Ciudad de Panamá por 18 días.',
      'Después de obtener la independencia de España, Panamá voluntariamente se unió a la Gran Colombia — la federación de naciones sudamericanas de Simón Bolívar.',
      'Panamá permaneció como parte de Colombia durante 82 años (1821-1903) antes de lograr su plena independencia.',
      'El 28 de noviembre cierra el "Mes de la Patria" de Panamá, uno de los meses con más feriados de cualquier país.',
      'La Península de Azuero, donde comenzó el movimiento de independencia, es considerada el corazón de la cultura tradicional panameña.',
    ],
  },

  planningChecklist: {
    en: [
      'Check parade schedules and civic event programs in your area',
      'Visit Los Santos for historical context about the independence movement',
      'Display the Panamanian flag and patriotic colors',
      'Plan for road closures during parades and ceremonies',
      'Note that this is the final major holiday in Panama\'s patriotic month of November',
    ],
    fr: [
      'Consultez les horaires des défilés et programmes d\'événements civiques dans votre région',
      'Visitez Los Santos pour le contexte historique sur le mouvement d\'indépendance',
      'Affichez le drapeau panaméen et les couleurs patriotiques',
      'Planifiez les fermetures de routes pendant les défilés et cérémonies',
      'Notez que c\'est le dernier grand jour férié du mois patriotique de novembre au Panama',
    ],
    es: [
      'Consulte los horarios de desfiles y programas de eventos cívicos en su área',
      'Visite Los Santos para contexto histórico sobre el movimiento de independencia',
      'Exhiba la bandera panameña y los colores patrios',
      'Planee para cierres de calles durante desfiles y ceremonias',
      'Tenga en cuenta que este es el último gran feriado del mes patriótico de noviembre en Panamá',
    ],
  },

  relatedHolidays: ['pa_independence-from-colombia', 'cr_independence-day', 'sv_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Independence from Spain {year} Panama — Countdown & History',
      descriptionTemplate: 'When is Independence from Spain {year} in Panama? Live countdown to November 28, El Primer Grito, and history guide.',
      keywords: ['Independence from Spain Panama', 'November 28 Panama', 'El Primer Grito', 'Panama independence 1821', 'Fiestas Patrias'],
    },
    fr: {
      titleTemplate: "Indépendance de l'Espagne {year} Panama — Compte à rebours et histoire",
      descriptionTemplate: "Quand est l'Indépendance de l'Espagne {year} au Panama ? Compte à rebours, El Primer Grito et guide historique.",
      keywords: ["Indépendance de l'Espagne Panama", '28 novembre Panama', 'El Primer Grito', 'indépendance Panama 1821', 'Fiestas Patrias'],
    },
    es: {
      titleTemplate: 'Independencia de España {year} Panamá — Cuenta regresiva e historia',
      descriptionTemplate: '¿Cuándo es la Independencia de España {year} en Panamá? Cuenta regresiva, El Primer Grito y guía histórica.',
      keywords: ['Independencia de España Panamá', '28 de noviembre Panamá', 'El Primer Grito', 'independencia Panamá 1821', 'Fiestas Patrias'],
    },
  },

  faq: [
    {
      question: { en: 'When is Independence from Spain {year} in Panama?', fr: "Quand est l'Indépendance de l'Espagne {year} au Panama ?", es: '¿Cuándo es la Independencia de España {year} en Panamá?' },
      answer: {
        en: 'Independence from Spain {year} in Panama is on {date}. It is always November 28.',
        fr: "L'Indépendance de l'Espagne {year} au Panama est le {date}. C'est toujours le 28 novembre.",
        es: 'La Independencia de España {year} en Panamá es el {date}. Siempre es el 28 de noviembre.',
      },
    },
    {
      question: { en: 'What is El Primer Grito de Independencia?', fr: "Qu'est-ce qu'El Primer Grito de Independencia ?", es: '¿Qué es El Primer Grito de Independencia?' },
      answer: {
        en: 'El Primer Grito de Independencia (The First Cry of Independence) refers to the declaration issued on November 10, 1821, by the town of Los Santos in the Azuero Peninsula, calling for Panama\'s independence from Spain. This preceded the formal declaration in Panama City on November 28.',
        fr: 'El Primer Grito de Independencia (Le Premier Cri d\'Indépendance) fait référence à la déclaration émise le 10 novembre 1821 par la ville de Los Santos dans la péninsule d\'Azuero, appelant à l\'indépendance du Panama de l\'Espagne. Cela a précédé la déclaration formelle à Panama City le 28 novembre.',
        es: 'El Primer Grito de Independencia se refiere a la declaración emitida el 10 de noviembre de 1821 por la Villa de Los Santos en la Península de Azuero, pidiendo la independencia de Panamá de España. Esto precedió a la declaración formal en la Ciudad de Panamá el 28 de noviembre.',
      },
    },
    {
      question: { en: 'Why does Panama have two independence days?', fr: 'Pourquoi le Panama a-t-il deux jours d\'indépendance ?', es: '¿Por qué Panamá tiene dos días de independencia?' },
      answer: {
        en: 'Panama has two independence days because it gained independence twice: first from Spain on November 28, 1821 (after which it joined Gran Colombia), and then from Colombia on November 3, 1903, achieving full sovereignty as the Republic of Panama.',
        fr: 'Le Panama a deux jours d\'indépendance car il a obtenu son indépendance deux fois : d\'abord de l\'Espagne le 28 novembre 1821 (après quoi il a rejoint la Grande Colombie), puis de la Colombie le 3 novembre 1903, obtenant la pleine souveraineté en tant que République du Panama.',
        es: 'Panamá tiene dos días de independencia porque obtuvo su independencia dos veces: primero de España el 28 de noviembre de 1821 (después de lo cual se unió a la Gran Colombia), y luego de Colombia el 3 de noviembre de 1903, logrando plena soberanía como República de Panamá.',
      },
    },
    {
      question: { en: 'Is November 28 a public holiday in Panama?', fr: 'Le 28 novembre est-il un jour férié au Panama ?', es: '¿Es el 28 de noviembre un feriado en Panamá?' },
      answer: {
        en: 'Yes, November 28 is an official public holiday in Panama. Banks, government offices, and most businesses are closed.',
        fr: 'Oui, le 28 novembre est un jour férié officiel au Panama. Les banques, les bureaux gouvernementaux et la plupart des commerces sont fermés.',
        es: 'Sí, el 28 de noviembre es un feriado oficial en Panamá. Los bancos, oficinas gubernamentales y la mayoría de los negocios están cerrados.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '🇵🇦',
};

// ---------------------------------------------------------------------------
// Mother's Day — December 8
// ---------------------------------------------------------------------------

const mothersDay: HolidayData = {
  id: 'pa_mothers-day',
  countryCode: 'pa',
  slugs: { en: 'mothers-day', fr: 'fete-des-meres', es: 'dia-de-la-madre' },
  names: { en: "Mother's Day", fr: 'Fête des Mères', es: 'Día de la Madre' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 8,

  descriptions: {
    en: "Mother's Day in Panama is celebrated on December 8, uniquely coinciding with the Catholic feast of the Immaculate Conception. This makes Panama one of the few countries in the world to celebrate Mother's Day in December, honoring both earthly mothers and the Virgin Mary.",
    fr: "La Fête des Mères au Panama est célébrée le 8 décembre, coïncidant de manière unique avec la fête catholique de l'Immaculée Conception. Cela fait du Panama l'un des rares pays au monde à célébrer la Fête des Mères en décembre, honorant à la fois les mères terrestres et la Vierge Marie.",
    es: "El Día de la Madre en Panamá se celebra el 8 de diciembre, coincidiendo de manera única con la fiesta católica de la Inmaculada Concepción. Esto hace de Panamá uno de los pocos países en el mundo en celebrar el Día de la Madre en diciembre, honrando tanto a las madres terrenales como a la Virgen María.",
  },

  history: {
    en: "Panama chose December 8 for Mother's Day to honor both motherhood and the Virgin Mary on the feast of the Immaculate Conception. This dual celebration reflects the deeply Catholic character of Panamanian culture and the central role mothers play in family life.\n\nThe tradition of celebrating Mother's Day on this date was officially established in 1930. The connection to the Immaculate Conception gives the holiday a spiritual dimension that goes beyond the typical commercial Mother's Day celebrated in other countries.\n\nDecember 8 is a public holiday in Panama, and it marks the beginning of the Christmas holiday season. Families gather to honor their mothers with gifts, meals, and expressions of gratitude.",
    fr: "Le Panama a choisi le 8 décembre pour la Fête des Mères afin d'honorer à la fois la maternité et la Vierge Marie lors de la fête de l'Immaculée Conception. Cette double célébration reflète le caractère profondément catholique de la culture panaméenne et le rôle central que jouent les mères dans la vie familiale.\n\nLa tradition de célébrer la Fête des Mères à cette date a été officiellement établie en 1930. Le lien avec l'Immaculée Conception donne à la fête une dimension spirituelle qui va au-delà de la Fête des Mères commerciale typique célébrée dans d'autres pays.\n\nLe 8 décembre est un jour férié au Panama, et il marque le début de la saison des fêtes de Noël. Les familles se réunissent pour honorer leurs mères avec des cadeaux, des repas et des expressions de gratitude.",
    es: "Panamá eligió el 8 de diciembre para el Día de la Madre para honrar tanto la maternidad como a la Virgen María en la fiesta de la Inmaculada Concepción. Esta doble celebración refleja el carácter profundamente católico de la cultura panameña y el rol central que juegan las madres en la vida familiar.\n\nLa tradición de celebrar el Día de la Madre en esta fecha fue oficialmente establecida en 1930. La conexión con la Inmaculada Concepción le da a la fiesta una dimensión espiritual que va más allá del típico Día de la Madre comercial celebrado en otros países.\n\nEl 8 de diciembre es un feriado en Panamá, y marca el inicio de la temporada navideña. Las familias se reúnen para honrar a sus madres con regalos, comidas y expresiones de gratitud.",
  },

  traditions: {
    en: [
      'Giving gifts and flowers — especially roses — to mothers and grandmothers',
      'Gathering the family for a special Mother\'s Day meal',
      'Attending Mass in honor of the Immaculate Conception and all mothers',
      'Sending Mother\'s Day cards and messages of gratitude',
      'Taking mothers out for dinner at restaurants',
    ],
    fr: [
      'Offrir des cadeaux et des fleurs — surtout des roses — aux mères et grands-mères',
      'Réunir la famille pour un repas spécial de la Fête des Mères',
      'Assister à la messe en l\'honneur de l\'Immaculée Conception et de toutes les mères',
      'Envoyer des cartes et des messages de gratitude pour la Fête des Mères',
      'Emmener les mères dîner au restaurant',
    ],
    es: [
      'Dar regalos y flores — especialmente rosas — a las madres y abuelas',
      'Reunir a la familia para una comida especial del Día de la Madre',
      'Asistir a misa en honor a la Inmaculada Concepción y todas las madres',
      'Enviar tarjetas y mensajes de gratitud por el Día de la Madre',
      'Llevar a las madres a cenar a restaurantes',
    ],
  },

  funFacts: {
    en: [
      'Panama is one of the very few countries in the world that celebrates Mother\'s Day in December.',
      'The dual celebration of Mother\'s Day and Immaculate Conception reflects Panama\'s strong Catholic heritage.',
      'December 8 also marks the unofficial start of the Christmas season in Panama.',
      'The tradition was officially established in 1930, linking maternal love with the devotion to the Virgin Mary.',
      'Restaurants and flower shops in Panama see their biggest sales of the year on December 8, rivaling even Valentine\'s Day.',
    ],
    fr: [
      'Le Panama est l\'un des très rares pays au monde qui célèbre la Fête des Mères en décembre.',
      'La double célébration de la Fête des Mères et de l\'Immaculée Conception reflète le fort héritage catholique du Panama.',
      'Le 8 décembre marque aussi le début non officiel de la saison de Noël au Panama.',
      'La tradition a été officiellement établie en 1930, liant l\'amour maternel à la dévotion à la Vierge Marie.',
      'Les restaurants et les fleuristes au Panama voient leurs plus grandes ventes de l\'année le 8 décembre, rivalisant même avec la Saint-Valentin.',
    ],
    es: [
      'Panamá es uno de los muy pocos países en el mundo que celebra el Día de la Madre en diciembre.',
      'La doble celebración del Día de la Madre y la Inmaculada Concepción refleja la fuerte herencia católica de Panamá.',
      'El 8 de diciembre también marca el inicio no oficial de la temporada navideña en Panamá.',
      'La tradición fue oficialmente establecida en 1930, vinculando el amor maternal con la devoción a la Virgen María.',
      'Los restaurantes y floristerías en Panamá ven sus mayores ventas del año el 8 de diciembre, rivalizando incluso con el Día de San Valentín.',
    ],
  },

  planningChecklist: {
    en: [
      'Purchase gifts and flowers for your mother well in advance',
      'Make restaurant reservations early — they fill up quickly on December 8',
      'Plan a family gathering or special meal to honor your mother',
      'Consider attending Mass together as a family',
      'Send cards or messages of gratitude to mothers and grandmothers',
    ],
    fr: [
      'Achetez des cadeaux et des fleurs pour votre mère bien à l\'avance',
      'Réservez au restaurant tôt — ils se remplissent rapidement le 8 décembre',
      'Planifiez une réunion de famille ou un repas spécial pour honorer votre mère',
      'Envisagez d\'assister à la messe ensemble en famille',
      'Envoyez des cartes ou des messages de gratitude aux mères et grands-mères',
    ],
    es: [
      'Compre regalos y flores para su madre con anticipación',
      'Haga reservaciones en restaurantes temprano — se llenan rápidamente el 8 de diciembre',
      'Planifique una reunión familiar o comida especial para honrar a su madre',
      'Considere asistir a misa juntos como familia',
      'Envíe tarjetas o mensajes de gratitud a las madres y abuelas',
    ],
  },

  relatedHolidays: ['pa_christmas', 'pa_independence-from-spain'],

  seo: {
    en: {
      titleTemplate: "Mother's Day {year} Panama — Countdown & Guide",
      descriptionTemplate: "When is Mother's Day {year} in Panama? Live countdown to December 8, traditions, and celebration guide.",
      keywords: ["Mother's Day Panama", 'Día de la Madre Panama', 'December 8 Panama', 'Immaculate Conception Panama', 'Panama holidays'],
    },
    fr: {
      titleTemplate: 'Fête des Mères {year} Panama — Compte à rebours et guide',
      descriptionTemplate: 'Quand est la Fête des Mères {year} au Panama ? Compte à rebours, traditions et guide de célébration.',
      keywords: ['Fête des Mères Panama', '8 décembre Panama', 'Immaculée Conception Panama', 'jours fériés Panama', 'Día de la Madre'],
    },
    es: {
      titleTemplate: 'Día de la Madre {year} Panamá — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Día de la Madre {year} en Panamá? Cuenta regresiva, tradiciones y guía de celebración.',
      keywords: ['Día de la Madre Panamá', '8 de diciembre Panamá', 'Inmaculada Concepción Panamá', 'feriados Panamá', 'Día de la Madre diciembre'],
    },
  },

  faq: [
    {
      question: { en: "When is Mother's Day {year} in Panama?", fr: 'Quand est la Fête des Mères {year} au Panama ?', es: '¿Cuándo es el Día de la Madre {year} en Panamá?' },
      answer: {
        en: "Mother's Day {year} in Panama is on {date}. It is always December 8.",
        fr: 'La Fête des Mères {year} au Panama est le {date}. C\'est toujours le 8 décembre.',
        es: 'El Día de la Madre {year} en Panamá es el {date}. Siempre es el 8 de diciembre.',
      },
    },
    {
      question: { en: "Why is Mother's Day on December 8 in Panama?", fr: 'Pourquoi la Fête des Mères est-elle le 8 décembre au Panama ?', es: '¿Por qué el Día de la Madre es el 8 de diciembre en Panamá?' },
      answer: {
        en: "Panama celebrates Mother's Day on December 8 to coincide with the Catholic feast of the Immaculate Conception. This links the celebration of earthly mothers with the devotion to the Virgin Mary, the ultimate mother figure in Catholic tradition.",
        fr: 'Le Panama célèbre la Fête des Mères le 8 décembre pour coïncider avec la fête catholique de l\'Immaculée Conception. Cela lie la célébration des mères terrestres à la dévotion à la Vierge Marie, la figure maternelle ultime dans la tradition catholique.',
        es: 'Panamá celebra el Día de la Madre el 8 de diciembre para coincidir con la fiesta católica de la Inmaculada Concepción. Esto vincula la celebración de las madres terrenales con la devoción a la Virgen María, la figura materna suprema en la tradición católica.',
      },
    },
    {
      question: { en: "Is Mother's Day a public holiday in Panama?", fr: 'La Fête des Mères est-elle un jour férié au Panama ?', es: '¿Es el Día de la Madre un feriado en Panamá?' },
      answer: {
        en: "Yes, December 8 (Mother's Day / Immaculate Conception) is an official public holiday in Panama. Banks, government offices, and most businesses are closed.",
        fr: 'Oui, le 8 décembre (Fête des Mères / Immaculée Conception) est un jour férié officiel au Panama. Les banques, les bureaux gouvernementaux et la plupart des commerces sont fermés.',
        es: 'Sí, el 8 de diciembre (Día de la Madre / Inmaculada Concepción) es un feriado oficial en Panamá. Los bancos, oficinas gubernamentales y la mayoría de los negocios están cerrados.',
      },
    },
    {
      question: { en: "How do Panamanians celebrate Mother's Day?", fr: 'Comment les Panaméens célèbrent-ils la Fête des Mères ?', es: '¿Cómo celebran los panameños el Día de la Madre?' },
      answer: {
        en: "Panamanians celebrate Mother's Day with gifts and flowers (especially roses), family gatherings, special meals, restaurant outings, and attending Mass. It is one of the most emotionally important holidays of the year.",
        fr: 'Les Panaméens célèbrent la Fête des Mères avec des cadeaux et des fleurs (surtout des roses), des réunions familiales, des repas spéciaux, des sorties au restaurant et en assistant à la messe. C\'est l\'un des jours fériés les plus émotionnellement importants de l\'année.',
        es: 'Los panameños celebran el Día de la Madre con regalos y flores (especialmente rosas), reuniones familiares, comidas especiales, salidas a restaurantes y asistiendo a misa. Es uno de los feriados emocionalmente más importantes del año.',
      },
    },
  ],

  colorTheme: 'spring',
  icon: '💐',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'pa_christmas',
  countryCode: 'pa',
  slugs: { en: 'christmas', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noël', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: 'Christmas Day on December 25 is a major celebration in Panama, marked by family gatherings, traditional foods like tamales and arroz con pollo, elaborate nativity scenes, midnight Mass, and festive decorations throughout the country.',
    fr: "Noël le 25 décembre est une célébration majeure au Panama, marquée par des réunions familiales, des plats traditionnels comme les tamales et l'arroz con pollo, des crèches élaborées, la messe de minuit et des décorations festives dans tout le pays.",
    es: 'La Navidad el 25 de diciembre es una celebración importante en Panamá, marcada por reuniones familiares, comidas tradicionales como tamales y arroz con pollo, nacimientos elaborados, misa de gallo y decoraciones festivas en todo el país.',
  },

  history: {
    en: "Christmas in Panama has been celebrated since the Spanish colonial era and has evolved to incorporate both traditional and modern elements. The Christmas season officially begins after Mother's Day on December 8, and the festivities continue through to the new year.\n\nThe Panamanian Christmas tradition centers on Nochebuena (Christmas Eve), which is the main celebration night. Families gather for a large dinner, attend midnight Mass (Misa de Gallo), exchange gifts at midnight, and set off fireworks to mark the occasion.\n\nPanama City's modern skyline and the historic Casco Viejo are both decorated with spectacular Christmas lights. Shopping centers, parks, and neighborhoods compete with elaborate decorations, making the city a visual spectacle throughout December.",
    fr: "Noël au Panama est célébré depuis l'ère coloniale espagnole et a évolué pour incorporer des éléments traditionnels et modernes. La saison de Noël commence officiellement après la Fête des Mères le 8 décembre, et les festivités se poursuivent jusqu'au nouvel an.\n\nLa tradition de Noël panaméenne se centre sur la Nochebuena (veille de Noël), qui est la nuit de célébration principale. Les familles se réunissent pour un grand dîner, assistent à la messe de minuit (Misa de Gallo), échangent des cadeaux à minuit et lancent des feux d'artifice.\n\nLa ligne d'horizon moderne de Panama City et le Casco Viejo historique sont tous deux décorés de spectaculaires lumières de Noël. Les centres commerciaux, les parcs et les quartiers rivalisent avec des décorations élaborées, faisant de la ville un spectacle visuel tout au long de décembre.",
    es: "La Navidad en Panamá se celebra desde la era colonial española y ha evolucionado para incorporar elementos tradicionales y modernos. La temporada navideña comienza oficialmente después del Día de la Madre el 8 de diciembre, y las festividades continúan hasta el año nuevo.\n\nLa tradición navideña panameña se centra en la Nochebuena, que es la noche principal de celebración. Las familias se reúnen para una gran cena, asisten a la misa de gallo, intercambian regalos a medianoche y lanzan fuegos artificiales para marcar la ocasión.\n\nEl horizonte moderno de la Ciudad de Panamá y el histórico Casco Viejo se decoran con espectaculares luces navideñas. Los centros comerciales, parques y barrios compiten con decoraciones elaboradas, convirtiendo la ciudad en un espectáculo visual durante todo diciembre.",
  },

  traditions: {
    en: [
      'Preparing tamales and arroz con pollo for the family dinner',
      'Attending midnight Mass (Misa de Gallo) on Christmas Eve',
      'Exchanging gifts at midnight on Nochebuena',
      'Setting up elaborate nativity scenes (nacimientos) in homes',
      'Setting off fireworks at midnight on Christmas Eve',
      'Decorating homes and neighborhoods with Christmas lights',
      'Enjoying rompope (Panamanian eggnog) and other holiday drinks',
    ],
    fr: [
      'Préparer des tamales et de l\'arroz con pollo pour le dîner familial',
      'Assister à la messe de minuit (Misa de Gallo) la veille de Noël',
      'Échanger des cadeaux à minuit à la Nochebuena',
      'Installer des crèches élaborées (nacimientos) dans les maisons',
      'Lancer des feux d\'artifice à minuit la veille de Noël',
      'Décorer les maisons et les quartiers avec des lumières de Noël',
      'Déguster du rompope (lait de poule panaméen) et d\'autres boissons de fête',
    ],
    es: [
      'Preparar tamales y arroz con pollo para la cena familiar',
      'Asistir a la misa de gallo en Nochebuena',
      'Intercambiar regalos a medianoche en Nochebuena',
      'Montar nacimientos elaborados en los hogares',
      'Lanzar fuegos artificiales a medianoche en Nochebuena',
      'Decorar hogares y barrios con luces navideñas',
      'Disfrutar de rompope (ponche panameño) y otras bebidas festivas',
    ],
  },

  funFacts: {
    en: [
      'Panama City\'s Christmas decorations are among the most spectacular in Central America, with the Cinta Costera and Casco Viejo lit up with millions of lights.',
      'Panamanian tamales are smaller than those in other Central American countries and are typically wrapped in plantain leaves.',
      'The Christmas season in Panama starts right after Mother\'s Day on December 8, making it a shorter but intense holiday period.',
      'Many Panamanian families attend the Misa de Gallo (Rooster\'s Mass) at midnight — named because it traditionally ended at dawn when roosters crow.',
      'Arroz con pollo (chicken with rice) is as essential to Panamanian Christmas as turkey is to American Thanksgiving.',
    ],
    fr: [
      'Les décorations de Noël de Panama City sont parmi les plus spectaculaires d\'Amérique centrale, la Cinta Costera et le Casco Viejo étant illuminés de millions de lumières.',
      'Les tamales panaméens sont plus petits que ceux des autres pays d\'Amérique centrale et sont généralement enveloppés dans des feuilles de plantain.',
      'La saison de Noël au Panama commence juste après la Fête des Mères le 8 décembre, ce qui en fait une période de vacances plus courte mais intense.',
      'De nombreuses familles panaméennes assistent à la Misa de Gallo (Messe du Coq) à minuit — nommée ainsi car elle se terminait traditionnellement à l\'aube quand les coqs chantent.',
      'L\'arroz con pollo (poulet au riz) est aussi essentiel au Noël panaméen que la dinde l\'est à Thanksgiving américain.',
    ],
    es: [
      'Las decoraciones navideñas de la Ciudad de Panamá son de las más espectaculares de Centroamérica, con la Cinta Costera y el Casco Viejo iluminados con millones de luces.',
      'Los tamales panameños son más pequeños que los de otros países centroamericanos y típicamente se envuelven en hojas de plátano.',
      'La temporada navideña en Panamá comienza justo después del Día de la Madre el 8 de diciembre, convirtiéndola en un período vacacional más corto pero intenso.',
      'Muchas familias panameñas asisten a la misa de gallo a medianoche — nombrada así porque tradicionalmente terminaba al amanecer cuando los gallos cantan.',
      'El arroz con pollo es tan esencial para la Navidad panameña como el pavo lo es para el Día de Acción de Gracias estadounidense.',
    ],
  },

  planningChecklist: {
    en: [
      'Begin preparing tamales and arroz con pollo the day before Christmas Eve',
      'Purchase gifts for family members well in advance of December 25',
      'Set up the nacimiento (nativity scene) early in the month',
      'Stock up on fireworks for the midnight celebration',
      'Make restaurant reservations if dining out for Christmas or Nochebuena',
    ],
    fr: [
      'Commencez à préparer les tamales et l\'arroz con pollo la veille de la veille de Noël',
      'Achetez les cadeaux pour les membres de la famille bien avant le 25 décembre',
      'Installez le nacimiento (crèche) au début du mois',
      'Faites provision de feux d\'artifice pour la célébration de minuit',
      'Réservez au restaurant si vous dînez dehors pour Noël ou la Nochebuena',
    ],
    es: [
      'Comience a preparar tamales y arroz con pollo el día antes de Nochebuena',
      'Compre regalos para los miembros de la familia con anticipación antes del 25 de diciembre',
      'Monte el nacimiento a principios del mes',
      'Abastézcase de fuegos artificiales para la celebración de medianoche',
      'Haga reservaciones en restaurantes si cenará fuera para Navidad o Nochebuena',
    ],
  },

  relatedHolidays: ['pa_new-years-day', 'pa_mothers-day'],

  seo: {
    en: {
      titleTemplate: 'Christmas {year} Panama — Countdown & Traditions',
      descriptionTemplate: 'When is Christmas {year} in Panama? Live countdown, tamales, arroz con pollo, and Panamanian Christmas traditions.',
      keywords: ['Christmas Panama', 'Navidad Panama', 'Panama Christmas traditions', 'tamales Panama', 'arroz con pollo Christmas'],
    },
    fr: {
      titleTemplate: 'Noël {year} Panama — Compte à rebours et traditions',
      descriptionTemplate: 'Quand est Noël {year} au Panama ? Compte à rebours, tamales, arroz con pollo et traditions de Noël panaméennes.',
      keywords: ['Noël Panama', 'Navidad Panama', 'traditions Noël Panama', 'tamales Panama', 'arroz con pollo Noël'],
    },
    es: {
      titleTemplate: 'Navidad {year} Panamá — Cuenta regresiva y tradiciones',
      descriptionTemplate: '¿Cuándo es Navidad {year} en Panamá? Cuenta regresiva, tamales, arroz con pollo y tradiciones navideñas panameñas.',
      keywords: ['Navidad Panamá', 'tradiciones navideñas Panamá', 'tamales navideños Panamá', 'arroz con pollo Navidad', 'Nochebuena Panamá'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in Panama?', fr: 'Quand est Noël {year} au Panama ?', es: '¿Cuándo es Navidad {year} en Panamá?' },
      answer: {
        en: 'Christmas {year} in Panama is on {date}. It is always December 25.',
        fr: 'Noël {year} au Panama est le {date}. C\'est toujours le 25 décembre.',
        es: 'Navidad {year} en Panamá es el {date}. Siempre es el 25 de diciembre.',
      },
    },
    {
      question: { en: 'What are traditional Christmas foods in Panama?', fr: 'Quels sont les plats de Noël traditionnels au Panama ?', es: '¿Cuáles son las comidas navideñas tradicionales en Panamá?' },
      answer: {
        en: 'Traditional Panamanian Christmas foods include tamales (smaller than other Central American versions, wrapped in plantain leaves), arroz con pollo (chicken with rice), rompope (eggnog), and various desserts like flan and dulce de frutas.',
        fr: 'Les plats de Noël traditionnels panaméens comprennent les tamales (plus petits que les versions d\'autres pays d\'Amérique centrale, enveloppés dans des feuilles de plantain), l\'arroz con pollo (poulet au riz), le rompope (lait de poule) et divers desserts comme le flan et le dulce de frutas.',
        es: 'Las comidas navideñas tradicionales panameñas incluyen tamales (más pequeños que las versiones de otros países centroamericanos, envueltos en hojas de plátano), arroz con pollo, rompope (ponche de huevo) y varios postres como flan y dulce de frutas.',
      },
    },
    {
      question: { en: 'Is Christmas Eve or Christmas Day more important in Panama?', fr: 'La veille de Noël ou le jour de Noël est-il plus important au Panama ?', es: '¿Es más importante la Nochebuena o el día de Navidad en Panamá?' },
      answer: {
        en: 'Nochebuena (Christmas Eve) is generally more important in Panama. The main family dinner, gift exchange, midnight Mass, and fireworks all happen on the evening of December 24.',
        fr: 'La Nochebuena (veille de Noël) est généralement plus importante au Panama. Le dîner familial principal, l\'échange de cadeaux, la messe de minuit et les feux d\'artifice ont tous lieu le soir du 24 décembre.',
        es: 'La Nochebuena es generalmente más importante en Panamá. La cena familiar principal, el intercambio de regalos, la misa de gallo y los fuegos artificiales suceden la noche del 24 de diciembre.',
      },
    },
    {
      question: { en: 'Is Christmas a public holiday in Panama?', fr: 'Noël est-il un jour férié au Panama ?', es: '¿Es Navidad un feriado en Panamá?' },
      answer: {
        en: 'Yes, December 25 is an official public holiday in Panama. Banks, government offices, and most businesses are closed.',
        fr: 'Oui, le 25 décembre est un jour férié officiel au Panama. Les banques, les bureaux gouvernementaux et la plupart des commerces sont fermés.',
        es: 'Sí, el 25 de diciembre es un feriado oficial en Panamá. Los bancos, oficinas gubernamentales y la mayoría de los negocios están cerrados.',
      },
    },
  ],

  colorTheme: 'christmas',
  icon: '🎄',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const paHolidays: HolidayData[] = [
  newYearsDay,
  carnival,
  independenceFromColombia,
  independenceFromSpain,
  mothersDay,
  christmas,
];

export default paHolidays;
