/**
 * Honduras holidays data.
 */

import type { HolidayData } from '@/lib/types';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'hn_new-years-day',
  countryCode: 'hn',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'ano-nuevo' },
  names: { en: "New Year's Day", fr: 'Jour de l\'An', es: 'Año Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 marks the beginning of the calendar year in Honduras. Families celebrate with late-night gatherings, fireworks, traditional foods, and rituals to welcome prosperity and good fortune.",
    fr: "Le Jour de l'An, le 1er janvier, marque le début de l'année civile au Honduras. Les familles célèbrent avec des réunions nocturnes, des feux d'artifice, des plats traditionnels et des rituels pour accueillir la prospérité et la bonne fortune.",
    es: 'El Año Nuevo, el 1 de enero, marca el inicio del año calendario en Honduras. Las familias celebran con reuniones nocturnas, fuegos artificiales, platillos tradicionales y rituales para recibir la prosperidad y la buena fortuna.',
  },

  history: {
    en: "New Year's celebrations in Honduras reflect a blend of Spanish colonial heritage, Indigenous Lenca and Maya traditions, and modern customs. The holiday is an official day off observed nationwide.\n\nHonduran families gather on December 31 for an elaborate dinner, often featuring nacatamales (large tamales wrapped in banana leaves), which are the country's signature festive food. At midnight, fireworks and firecrackers fill the sky.\n\nMany Honduran New Year's customs focus on attracting prosperity: sweeping the house to remove bad luck, wearing new clothes, and placing coins in shoes are all common rituals believed to ensure a fortunate year ahead.",
    fr: "Les célébrations du Nouvel An au Honduras reflètent un mélange d'héritage colonial espagnol, de traditions autochtones Lenca et Maya, et de coutumes modernes. Le jour férié est un jour de repos officiel observé dans tout le pays.\n\nLes familles honduriennes se réunissent le 31 décembre pour un dîner élaboré, souvent avec des nacatamales (grands tamales enveloppés dans des feuilles de bananier), qui sont le plat festif emblématique du pays. À minuit, des feux d'artifice et des pétards illuminent le ciel.\n\nDe nombreuses coutumes du Nouvel An hondurien visent à attirer la prospérité : balayer la maison pour éliminer la malchance, porter des vêtements neufs et placer des pièces dans les chaussures sont des rituels courants censés assurer une année prospère.",
    es: "Las celebraciones de Año Nuevo en Honduras reflejan una mezcla de herencia colonial española, tradiciones indígenas Lenca y Maya, y costumbres modernas. El día festivo es un día de descanso oficial observado en todo el país.\n\nLas familias hondureñas se reúnen el 31 de diciembre para una cena elaborada, a menudo con nacatamales (tamales grandes envueltos en hojas de plátano), que son el platillo festivo emblemático del país. A medianoche, fuegos artificiales y cohetes llenan el cielo.\n\nMuchas costumbres del Año Nuevo hondureño se enfocan en atraer la prosperidad: barrer la casa para eliminar la mala suerte, estrenar ropa y colocar monedas en los zapatos son rituales comunes que se cree aseguran un año afortunado.",
  },

  traditions: {
    en: [
      'Family dinner featuring nacatamales, the quintessential Honduran festive dish',
      'Setting off fireworks and firecrackers at midnight',
      'Wearing new clothes at midnight for good luck in the new year',
      'Sweeping the house before midnight to clear out bad energy',
      'Placing coins in shoes to attract financial prosperity',
      'Hugging family and friends at the stroke of midnight',
    ],
    fr: [
      'Dîner en famille avec des nacatamales, le plat festif hondurien par excellence',
      'Tirer des feux d\'artifice et des pétards à minuit',
      'Porter des vêtements neufs à minuit pour la bonne chance dans la nouvelle année',
      'Balayer la maison avant minuit pour chasser les mauvaises énergies',
      'Placer des pièces dans les chaussures pour attirer la prospérité financière',
      'Embrasser famille et amis au coup de minuit',
    ],
    es: [
      'Cena familiar con nacatamales, el platillo festivo hondureño por excelencia',
      'Lanzar fuegos artificiales y cohetes a medianoche',
      'Estrenar ropa a medianoche para la buena suerte en el nuevo año',
      'Barrer la casa antes de medianoche para limpiar las malas energías',
      'Colocar monedas en los zapatos para atraer la prosperidad económica',
      'Abrazar a familia y amigos a la medianoche',
    ],
  },

  funFacts: {
    en: [
      'Nacatamales, Honduras\'s signature tamale, can take an entire day to prepare — they are larger and more elaborate than standard tamales.',
      'In rural Honduras, some communities still follow traditional Lenca calendar celebrations alongside the Gregorian New Year.',
      'Hondurans often burn old furniture or effigies at midnight, similar to traditions in neighboring Guatemala.',
      'The midnight fireworks in Tegucigalpa and San Pedro Sula create spectacular displays visible across the cities.',
      'Many Hondurans write their New Year\'s resolutions on paper and keep them in their wallets for the entire year.',
    ],
    fr: [
      'Les nacatamales, le tamale emblématique du Honduras, peuvent prendre une journée entière à préparer — ils sont plus grands et plus élaborés que les tamales standard.',
      'Dans le Honduras rural, certaines communautés suivent encore les célébrations traditionnelles du calendrier Lenca parallèlement au Nouvel An grégorien.',
      'Les Honduriens brûlent souvent de vieux meubles ou des effigies à minuit, similaire aux traditions du Guatemala voisin.',
      'Les feux d\'artifice de minuit à Tegucigalpa et San Pedro Sula créent des spectacles spectaculaires visibles à travers les villes.',
      'De nombreux Honduriens écrivent leurs résolutions du Nouvel An sur du papier et les gardent dans leur portefeuille pendant toute l\'année.',
    ],
    es: [
      'Los nacatamales, el tamal emblemático de Honduras, pueden tomar un día entero en preparar — son más grandes y elaborados que los tamales estándar.',
      'En el Honduras rural, algunas comunidades todavía siguen las celebraciones tradicionales del calendario Lenca junto con el Año Nuevo gregoriano.',
      'Los hondureños a menudo queman muebles viejos o efigies a medianoche, similar a las tradiciones del vecino Guatemala.',
      'Los fuegos artificiales de medianoche en Tegucigalpa y San Pedro Sula crean espectáculos espectaculares visibles a través de las ciudades.',
      'Muchos hondureños escriben sus propósitos de Año Nuevo en papel y los guardan en sus carteras durante todo el año.',
    ],
  },

  planningChecklist: {
    en: [
      'Order nacatamales early — they take a full day to prepare and sell out quickly',
      'Stock up on fireworks and firecrackers from licensed vendors',
      'Buy new clothes or an outfit to wear at midnight for good luck',
      'Prepare the house with a thorough cleaning before midnight',
      'Plan a family gathering with traditional foods and drinks',
    ],
    fr: [
      'Commander des nacatamales tôt — ils prennent une journée complète à préparer et s\'épuisent rapidement',
      'Faire le plein de feux d\'artifice et de pétards auprès de vendeurs autorisés',
      'Acheter des vêtements neufs ou un ensemble à porter à minuit pour la bonne chance',
      'Préparer la maison avec un nettoyage en profondeur avant minuit',
      'Planifier une réunion familiale avec des plats et boissons traditionnels',
    ],
    es: [
      'Encargar nacatamales con anticipación — toman un día completo en preparar y se agotan rápido',
      'Abastecerse de fuegos artificiales y cohetes de vendedores autorizados',
      'Comprar ropa nueva o un atuendo para estrenar a medianoche para la buena suerte',
      'Preparar la casa con una limpieza profunda antes de medianoche',
      'Planificar una reunión familiar con platillos y bebidas tradicionales',
    ],
  },

  relatedHolidays: ['hn_christmas', 'hn_independence-day'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Honduras — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in Honduras? Live countdown to January 1, traditions, and celebration guide.",
      keywords: ["New Year's Day Honduras", 'Año Nuevo Honduras', 'Honduran New Year traditions', 'Honduras holidays', 'nacatamales New Year'],
    },
    fr: {
      titleTemplate: 'Jour de l\'An {year} Honduras — Compte à rebours et guide',
      descriptionTemplate: 'Quand est le Jour de l\'An {year} au Honduras ? Compte à rebours, traditions et guide de célébration.',
      keywords: ['Jour de l\'An Honduras', 'Año Nuevo Honduras', 'traditions Nouvel An hondurien', 'jours fériés Honduras', 'nacatamales Nouvel An'],
    },
    es: {
      titleTemplate: 'Año Nuevo {year} Honduras — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es Año Nuevo {year} en Honduras? Cuenta regresiva en vivo al 1 de enero, tradiciones y guía de celebración.',
      keywords: ['Año Nuevo Honduras', 'día festivo 1 de enero Honduras', 'tradiciones Año Nuevo hondureño', 'días festivos Honduras', 'nacatamales Año Nuevo'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in Honduras?", fr: 'Quand est le Jour de l\'An {year} au Honduras ?', es: '¿Cuándo es Año Nuevo {year} en Honduras?' },
      answer: {
        en: "New Year's Day {year} in Honduras is on {date} ({dayOfWeek}). It is always January 1 and is an official public holiday.",
        fr: 'Le Jour de l\'An {year} au Honduras est le {date} ({dayOfWeek}). C\'est toujours le 1er janvier et c\'est un jour férié officiel.',
        es: 'El Año Nuevo {year} en Honduras es el {date} ({dayOfWeek}). Siempre es el 1 de enero y es un día festivo oficial.',
      },
    },
    {
      question: { en: 'What are nacatamales?', fr: 'Que sont les nacatamales ?', es: '¿Qué son los nacatamales?' },
      answer: {
        en: 'Nacatamales are large Honduran tamales wrapped in banana leaves, filled with masa, pork or chicken, rice, potatoes, olives, and vegetables. They are the signature dish of Honduran celebrations.',
        fr: 'Les nacatamales sont de grands tamales honduriens enveloppés dans des feuilles de bananier, garnis de masa, de porc ou de poulet, de riz, de pommes de terre, d\'olives et de légumes. C\'est le plat emblématique des célébrations honduriennes.',
        es: 'Los nacatamales son tamales grandes hondureños envueltos en hojas de plátano, rellenos de masa, cerdo o pollo, arroz, papas, aceitunas y verduras. Son el platillo emblemático de las celebraciones hondureñas.',
      },
    },
    {
      question: { en: "Is New Year's Day a public holiday in Honduras?", fr: 'Le Jour de l\'An est-il un jour férié au Honduras ?', es: '¿Es Año Nuevo un día festivo oficial en Honduras?' },
      answer: {
        en: "Yes, New Year's Day is an official public holiday in Honduras. Banks, government offices, and most businesses are closed.",
        fr: 'Oui, le Jour de l\'An est un jour férié officiel au Honduras. Les banques, les bureaux du gouvernement et la plupart des entreprises sont fermés.',
        es: 'Sí, el Año Nuevo es un día festivo oficial en Honduras. Los bancos, oficinas gubernamentales y la mayoría de los negocios están cerrados.',
      },
    },
    {
      question: { en: 'What traditions bring good luck on Honduran New Year?', fr: 'Quelles traditions portent bonheur au Nouvel An hondurien ?', es: '¿Qué tradiciones traen buena suerte en el Año Nuevo hondureño?' },
      answer: {
        en: 'Common Honduran New Year traditions for good luck include wearing new clothes at midnight, sweeping the house before midnight, placing coins in shoes for prosperity, and burning old items to leave behind the past.',
        fr: 'Les traditions courantes du Nouvel An hondurien pour la bonne chance incluent porter des vêtements neufs à minuit, balayer la maison avant minuit, placer des pièces dans les chaussures pour la prospérité et brûler de vieux objets pour laisser le passé derrière soi.',
        es: 'Las tradiciones comunes del Año Nuevo hondureño para la buena suerte incluyen estrenar ropa a medianoche, barrer la casa antes de medianoche, colocar monedas en los zapatos para la prosperidad y quemar objetos viejos para dejar atrás el pasado.',
      },
    },
  ],

  colorTheme: 'gold-black',
  icon: '🎆',
};

// ---------------------------------------------------------------------------
// Pan-American Day — April 14
// ---------------------------------------------------------------------------

const panAmericanDay: HolidayData = {
  id: 'hn_pan-american-day',
  countryCode: 'hn',
  slugs: { en: 'pan-american-day', fr: 'jour-panamericain', es: 'dia-panamericano' },
  names: { en: 'Pan-American Day', fr: 'Jour Panaméricain', es: 'Día Panamericano' },

  dateType: 'fixed',
  fixedMonth: 4,
  fixedDay: 14,

  descriptions: {
    en: "Pan-American Day on April 14 celebrates hemispheric unity and solidarity among the nations of the Americas. Honduras is one of the few countries in the world that makes this an official national holiday, reflecting its deep commitment to continental cooperation.",
    fr: "Le Jour Panaméricain, le 14 avril, célèbre l'unité et la solidarité hémisphérique entre les nations des Amériques. Le Honduras est l'un des rares pays au monde à en faire un jour férié national officiel, reflétant son engagement profond envers la coopération continentale.",
    es: 'El Día Panamericano, el 14 de abril, celebra la unidad y solidaridad hemisférica entre las naciones de las Américas. Honduras es uno de los pocos países en el mundo que lo convierte en un día festivo nacional oficial, reflejando su profundo compromiso con la cooperación continental.',
  },

  history: {
    en: "Pan-American Day commemorates the founding of the International Union of American Republics on April 14, 1890, at the First International Conference of American States in Washington, D.C. This organization eventually became the Organization of American States (OAS).\n\nThe concept of Pan-Americanism — solidarity and cooperation among the nations of the Americas — was championed by Venezuelan leader Simón Bolívar as early as 1826. The ideal resonated deeply in Central America, where countries had shared a common colonial history and a joint declaration of independence.\n\nHonduras is particularly committed to Pan-American ideals, being one of very few countries worldwide that observes April 14 as an official national holiday. Schools hold special programs about inter-American cooperation, and civic ceremonies emphasize the importance of continental unity.",
    fr: "Le Jour Panaméricain commémore la fondation de l'Union internationale des Républiques américaines le 14 avril 1890, lors de la Première Conférence internationale des États américains à Washington, D.C. Cette organisation est finalement devenue l'Organisation des États américains (OEA).\n\nLe concept du panaméricanisme — solidarité et coopération entre les nations des Amériques — a été défendu par le leader vénézuélien Simón Bolívar dès 1826. L'idéal a profondément résonné en Amérique centrale, où les pays partageaient une histoire coloniale commune et une déclaration d'indépendance conjointe.\n\nLe Honduras est particulièrement engagé dans les idéaux panaméricains, étant l'un des très rares pays au monde qui observe le 14 avril comme jour férié national officiel. Les écoles organisent des programmes spéciaux sur la coopération interaméricaine, et les cérémonies civiques soulignent l'importance de l'unité continentale.",
    es: "El Día Panamericano conmemora la fundación de la Unión Internacional de Repúblicas Americanas el 14 de abril de 1890, en la Primera Conferencia Internacional de Estados Americanos en Washington, D.C. Esta organización eventualmente se convirtió en la Organización de Estados Americanos (OEA).\n\nEl concepto del panamericanismo — solidaridad y cooperación entre las naciones de las Américas — fue defendido por el líder venezolano Simón Bolívar desde 1826. El ideal resonó profundamente en Centroamérica, donde los países compartían una historia colonial común y una declaración de independencia conjunta.\n\nHonduras está particularmente comprometido con los ideales panamericanos, siendo uno de los muy pocos países en el mundo que observa el 14 de abril como día festivo nacional oficial. Las escuelas realizan programas especiales sobre la cooperación interamericana, y las ceremonias cívicas enfatizan la importancia de la unidad continental.",
  },

  traditions: {
    en: [
      'School assemblies with presentations about Pan-American cooperation and history',
      'Civic ceremonies at government buildings with flag-raising of American nations',
      'Exhibitions showcasing the cultures and traditions of different American countries',
      'Speeches about hemispheric solidarity and the role of the OAS',
      'Cultural performances representing the diversity of the Americas',
    ],
    fr: [
      'Assemblées scolaires avec des présentations sur la coopération et l\'histoire panaméricaines',
      'Cérémonies civiques dans les bâtiments gouvernementaux avec lever des drapeaux des nations américaines',
      'Expositions présentant les cultures et traditions de différents pays américains',
      'Discours sur la solidarité hémisphérique et le rôle de l\'OEA',
      'Spectacles culturels représentant la diversité des Amériques',
    ],
    es: [
      'Asambleas escolares con presentaciones sobre la cooperación e historia panamericana',
      'Ceremonias cívicas en edificios gubernamentales con izado de banderas de naciones americanas',
      'Exposiciones que muestran las culturas y tradiciones de diferentes países americanos',
      'Discursos sobre la solidaridad hemisférica y el papel de la OEA',
      'Presentaciones culturales que representan la diversidad de las Américas',
    ],
  },

  funFacts: {
    en: [
      'Honduras is one of the very few countries worldwide that observes Pan-American Day as an official national holiday.',
      'The Organization of American States (OAS), which grew from the 1890 founding, has 35 member states today.',
      'Simón Bolívar first proposed the idea of Pan-American cooperation at the Congress of Panama in 1826.',
      'Pan-American Day was first proclaimed by U.S. President Herbert Hoover in 1931, but Honduras gave it the status of a full national holiday.',
      'The Pan-American Highway, stretching from Alaska to Argentina, is a physical symbol of the interconnectedness celebrated on this day.',
    ],
    fr: [
      'Le Honduras est l\'un des très rares pays au monde qui observe le Jour Panaméricain comme jour férié national officiel.',
      'L\'Organisation des États américains (OEA), issue de la fondation de 1890, compte aujourd\'hui 35 États membres.',
      'Simón Bolívar a proposé pour la première fois l\'idée de coopération panaméricaine au Congrès de Panama en 1826.',
      'Le Jour Panaméricain a été proclamé pour la première fois par le président américain Herbert Hoover en 1931, mais le Honduras lui a donné le statut de jour férié national complet.',
      'L\'autoroute panaméricaine, s\'étendant de l\'Alaska à l\'Argentine, est un symbole physique de l\'interconnexion célébrée en ce jour.',
    ],
    es: [
      'Honduras es uno de los muy pocos países en el mundo que observa el Día Panamericano como día festivo nacional oficial.',
      'La Organización de Estados Americanos (OEA), que surgió de la fundación de 1890, tiene 35 estados miembros hoy.',
      'Simón Bolívar propuso por primera vez la idea de cooperación panamericana en el Congreso de Panamá en 1826.',
      'El Día Panamericano fue proclamado por primera vez por el presidente estadounidense Herbert Hoover en 1931, pero Honduras le dio el estatus de día festivo nacional completo.',
      'La Carretera Panamericana, que se extiende desde Alaska hasta Argentina, es un símbolo físico de la interconexión que se celebra en este día.',
    ],
  },

  planningChecklist: {
    en: [
      'Attend school or civic events celebrating Pan-American cooperation',
      'Learn about the history and cultures of other American nations',
      'Visit cultural exhibitions or events showcasing hemispheric diversity',
      'Use the day off to explore Honduran connections to Central American history',
      'Discuss the importance of continental cooperation with family',
    ],
    fr: [
      'Assister à des événements scolaires ou civiques célébrant la coopération panaméricaine',
      'En apprendre davantage sur l\'histoire et les cultures d\'autres nations américaines',
      'Visiter des expositions culturelles ou événements présentant la diversité hémisphérique',
      'Profiter du jour de congé pour explorer les liens honduriens avec l\'histoire d\'Amérique centrale',
      'Discuter de l\'importance de la coopération continentale en famille',
    ],
    es: [
      'Asistir a eventos escolares o cívicos que celebren la cooperación panamericana',
      'Aprender sobre la historia y culturas de otras naciones americanas',
      'Visitar exposiciones culturales o eventos que muestren la diversidad hemisférica',
      'Aprovechar el día libre para explorar las conexiones hondureñas con la historia centroamericana',
      'Discutir la importancia de la cooperación continental en familia',
    ],
  },

  relatedHolidays: ['hn_independence-day', 'hn_morazan-day'],

  seo: {
    en: {
      titleTemplate: 'Pan-American Day {year} Honduras — Countdown & Guide',
      descriptionTemplate: 'When is Pan-American Day {year} in Honduras? Live countdown to April 14, history, and celebration guide.',
      keywords: ['Pan-American Day Honduras', 'Día Panamericano Honduras', 'April 14 Honduras', 'Honduras holidays', 'OAS Pan-American Day'],
    },
    fr: {
      titleTemplate: 'Jour Panaméricain {year} Honduras — Compte à rebours et guide',
      descriptionTemplate: 'Quand est le Jour Panaméricain {year} au Honduras ? Compte à rebours, histoire et guide de célébration.',
      keywords: ['Jour Panaméricain Honduras', 'Día Panamericano Honduras', '14 avril Honduras', 'jours fériés Honduras', 'OEA Jour Panaméricain'],
    },
    es: {
      titleTemplate: 'Día Panamericano {year} Honduras — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Día Panamericano {year} en Honduras? Cuenta regresiva al 14 de abril, historia y guía de celebración.',
      keywords: ['Día Panamericano Honduras', '14 de abril Honduras', 'feriado abril Honduras', 'días festivos Honduras', 'OEA Día Panamericano'],
    },
  },

  faq: [
    {
      question: { en: 'When is Pan-American Day {year} in Honduras?', fr: 'Quand est le Jour Panaméricain {year} au Honduras ?', es: '¿Cuándo es el Día Panamericano {year} en Honduras?' },
      answer: {
        en: 'Pan-American Day {year} in Honduras is on {date} ({dayOfWeek}). It is always April 14.',
        fr: 'Le Jour Panaméricain {year} au Honduras est le {date} ({dayOfWeek}). C\'est toujours le 14 avril.',
        es: 'El Día Panamericano {year} en Honduras es el {date} ({dayOfWeek}). Siempre es el 14 de abril.',
      },
    },
    {
      question: { en: 'Why does Honduras celebrate Pan-American Day?', fr: 'Pourquoi le Honduras célèbre-t-il le Jour Panaméricain ?', es: '¿Por qué Honduras celebra el Día Panamericano?' },
      answer: {
        en: 'Honduras is deeply committed to Pan-American ideals of hemispheric cooperation and solidarity. It is one of very few countries that observes April 14 as an official national holiday, reflecting its belief in continental unity.',
        fr: 'Le Honduras est profondément engagé dans les idéaux panaméricains de coopération et de solidarité hémisphérique. C\'est l\'un des rares pays qui observe le 14 avril comme jour férié national officiel, reflétant sa croyance en l\'unité continentale.',
        es: 'Honduras está profundamente comprometido con los ideales panamericanos de cooperación y solidaridad hemisférica. Es uno de los pocos países que observa el 14 de abril como día festivo nacional oficial, reflejando su creencia en la unidad continental.',
      },
    },
    {
      question: { en: 'Is Pan-American Day a public holiday in Honduras?', fr: 'Le Jour Panaméricain est-il un jour férié au Honduras ?', es: '¿Es el Día Panamericano un día festivo oficial en Honduras?' },
      answer: {
        en: 'Yes, Pan-American Day is an official public holiday in Honduras. Banks, government offices, and schools are closed.',
        fr: 'Oui, le Jour Panaméricain est un jour férié officiel au Honduras. Les banques, les bureaux du gouvernement et les écoles sont fermés.',
        es: 'Sí, el Día Panamericano es un día festivo oficial en Honduras. Los bancos, oficinas gubernamentales y escuelas están cerrados.',
      },
    },
    {
      question: { en: 'What is Pan-Americanism?', fr: 'Qu\'est-ce que le panaméricanism ?', es: '¿Qué es el panamericanismo?' },
      answer: {
        en: 'Pan-Americanism is a movement advocating solidarity and cooperation among all nations of the Americas. It originated with Simón Bolívar in the 1820s and led to the creation of the Organization of American States (OAS) in 1948.',
        fr: 'Le panaméricanism est un mouvement prônant la solidarité et la coopération entre toutes les nations des Amériques. Il est né avec Simón Bolívar dans les années 1820 et a conduit à la création de l\'Organisation des États américains (OEA) en 1948.',
        es: 'El panamericanismo es un movimiento que promueve la solidaridad y cooperación entre todas las naciones de las Américas. Se originó con Simón Bolívar en la década de 1820 y condujo a la creación de la Organización de Estados Americanos (OEA) en 1948.',
      },
    },
  ],

  colorTheme: 'blue-white',
  icon: '🌎',
};

// ---------------------------------------------------------------------------
// Labour Day — May 1
// ---------------------------------------------------------------------------

const labourDay: HolidayData = {
  id: 'hn_labour-day',
  countryCode: 'hn',
  slugs: { en: 'labour-day', fr: 'fete-du-travail', es: 'dia-del-trabajo' },
  names: { en: 'Labour Day', fr: 'Fête du Travail', es: 'Día del Trabajo' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 1,

  descriptions: {
    en: "Labour Day on May 1 is a public holiday in Honduras honoring workers' rights and their contributions to the nation. It features union marches, political rallies, and a day of rest for workers across the country.",
    fr: "La Fête du Travail, le 1er mai, est un jour férié au Honduras honorant les droits des travailleurs et leurs contributions à la nation. Elle comprend des marches syndicales, des rassemblements politiques et un jour de repos pour les travailleurs de tout le pays.",
    es: 'El Día del Trabajo, el 1 de mayo, es un día festivo en Honduras que honra los derechos de los trabajadores y sus contribuciones a la nación. Incluye marchas sindicales, mítines políticos y un día de descanso para los trabajadores de todo el país.',
  },

  history: {
    en: "Honduras's Labour Day is deeply connected to the country's landmark labor movement, particularly the Great Banana Strike of 1954. For 69 days, over 25,000 workers at the United Fruit Company plantations went on strike, demanding better wages, working conditions, and the right to organize.\n\nThe 1954 strike was a watershed moment in Honduran history. It led to the creation of Honduras's labor code, the establishment of worker protections, and the formation of the country's first modern labor unions. The strike is considered one of the most significant labor actions in Central American history.\n\nToday, Labour Day marches in Tegucigalpa and San Pedro Sula draw thousands of workers, union members, and social activists who march to demand continued improvements in labor rights, wages, and social protections.",
    fr: "La Fête du Travail au Honduras est profondément liée au mouvement ouvrier historique du pays, en particulier la Grande Grève de la Banane de 1954. Pendant 69 jours, plus de 25 000 travailleurs des plantations de la United Fruit Company se sont mis en grève, réclamant de meilleurs salaires, de meilleures conditions de travail et le droit de s'organiser.\n\nLa grève de 1954 a été un moment charnière dans l'histoire hondurienne. Elle a conduit à la création du code du travail du Honduras, à l'établissement de protections pour les travailleurs et à la formation des premiers syndicats modernes du pays. La grève est considérée comme l'une des actions syndicales les plus significatives de l'histoire de l'Amérique centrale.\n\nAujourd'hui, les marches de la Fête du Travail à Tegucigalpa et San Pedro Sula attirent des milliers de travailleurs, de membres de syndicats et d'activistes sociaux qui défilent pour réclamer des améliorations continues des droits du travail, des salaires et des protections sociales.",
    es: "El Día del Trabajo en Honduras está profundamente conectado con el movimiento obrero histórico del país, particularmente la Gran Huelga Bananera de 1954. Durante 69 días, más de 25,000 trabajadores de las plantaciones de la United Fruit Company se declararon en huelga, exigiendo mejores salarios, condiciones de trabajo y el derecho a organizarse.\n\nLa huelga de 1954 fue un momento decisivo en la historia hondureña. Condujo a la creación del código de trabajo de Honduras, al establecimiento de protecciones para los trabajadores y a la formación de los primeros sindicatos modernos del país. La huelga es considerada una de las acciones sindicales más significativas en la historia de Centroamérica.\n\nHoy, las marchas del Día del Trabajo en Tegucigalpa y San Pedro Sula atraen a miles de trabajadores, miembros de sindicatos y activistas sociales que marchan para exigir mejoras continuas en los derechos laborales, salarios y protecciones sociales.",
  },

  traditions: {
    en: [
      'Union marches through Tegucigalpa and San Pedro Sula to government buildings',
      'Political rallies and speeches by labor leaders demanding improved conditions',
      'Workers enjoying a day of rest with family',
      'Community events and barbecues in public parks',
      'Commemorations of the 1954 Banana Strike and its legacy',
    ],
    fr: [
      'Marches syndicales à travers Tegucigalpa et San Pedro Sula vers les bâtiments gouvernementaux',
      'Rassemblements politiques et discours de dirigeants syndicaux réclamant de meilleures conditions',
      'Travailleurs profitant d\'un jour de repos en famille',
      'Événements communautaires et barbecues dans les parcs publics',
      'Commémorations de la Grève de la Banane de 1954 et de son héritage',
    ],
    es: [
      'Marchas sindicales por Tegucigalpa y San Pedro Sula hacia edificios gubernamentales',
      'Mítines políticos y discursos de líderes sindicales exigiendo mejores condiciones',
      'Trabajadores disfrutando de un día de descanso con la familia',
      'Eventos comunitarios y parrilladas en parques públicos',
      'Conmemoraciones de la Huelga Bananera de 1954 y su legado',
    ],
  },

  funFacts: {
    en: [
      'The 1954 Great Banana Strike lasted 69 days and involved over 25,000 workers, making it one of the largest labor actions in Central American history.',
      'The strike led directly to the creation of Honduras\'s modern labor code and the right to form unions.',
      'Honduras\'s banana industry was so dominant in the early 20th century that the country inspired the term "banana republic."',
      'May 1 marches in Honduras often include demands for Indigenous rights alongside traditional labor issues.',
      'The 1954 strike succeeded despite the immense power of the United Fruit Company, which practically controlled Honduras\'s economy at the time.',
    ],
    fr: [
      'La Grande Grève de la Banane de 1954 a duré 69 jours et impliqué plus de 25 000 travailleurs, ce qui en fait l\'une des plus grandes actions syndicales de l\'histoire de l\'Amérique centrale.',
      'La grève a conduit directement à la création du code du travail moderne du Honduras et au droit de former des syndicats.',
      'L\'industrie bananière du Honduras était si dominante au début du XXe siècle que le pays a inspiré le terme « république bananière ».',
      'Les marches du 1er mai au Honduras incluent souvent des revendications pour les droits autochtones aux côtés des questions syndicales traditionnelles.',
      'La grève de 1954 a réussi malgré le pouvoir immense de la United Fruit Company, qui contrôlait pratiquement l\'économie du Honduras à l\'époque.',
    ],
    es: [
      'La Gran Huelga Bananera de 1954 duró 69 días e involucró a más de 25,000 trabajadores, convirtiéndola en una de las acciones sindicales más grandes en la historia de Centroamérica.',
      'La huelga condujo directamente a la creación del código de trabajo moderno de Honduras y al derecho a formar sindicatos.',
      'La industria bananera de Honduras era tan dominante a principios del siglo XX que el país inspiró el término «república bananera».',
      'Las marchas del 1 de mayo en Honduras a menudo incluyen demandas por derechos indígenas junto con temas laborales tradicionales.',
      'La huelga de 1954 tuvo éxito a pesar del inmenso poder de la United Fruit Company, que prácticamente controlaba la economía de Honduras en ese momento.',
    ],
  },

  planningChecklist: {
    en: [
      'Expect road closures in Tegucigalpa and San Pedro Sula during marches',
      'Plan family activities away from central march areas',
      'Stock up on groceries as many shops will be closed',
      'Learn about the 1954 Banana Strike and its significance',
      'Enjoy the day off with family at a park or outdoor gathering',
    ],
    fr: [
      'Prévoir des fermetures de routes à Tegucigalpa et San Pedro Sula pendant les marches',
      'Planifier des activités familiales loin des zones centrales de marche',
      'Faire le plein de courses car de nombreux commerces seront fermés',
      'En apprendre davantage sur la Grève de la Banane de 1954 et sa signification',
      'Profiter du jour de congé en famille au parc ou lors d\'un rassemblement en plein air',
    ],
    es: [
      'Esperar cierres viales en Tegucigalpa y San Pedro Sula durante las marchas',
      'Planificar actividades familiares lejos de las zonas centrales de marcha',
      'Abastecerse de víveres ya que muchos comercios estarán cerrados',
      'Aprender sobre la Huelga Bananera de 1954 y su significado',
      'Disfrutar del día libre con la familia en un parque o reunión al aire libre',
    ],
  },

  relatedHolidays: ['hn_independence-day', 'hn_morazan-day'],

  seo: {
    en: {
      titleTemplate: 'Labour Day {year} Honduras — Countdown & Guide',
      descriptionTemplate: 'When is Labour Day {year} in Honduras? Live countdown to May 1, Banana Strike history, and celebration guide.',
      keywords: ['Labour Day Honduras', 'Día del Trabajo Honduras', 'May 1 Honduras', '1954 Banana Strike', 'Honduras workers day'],
    },
    fr: {
      titleTemplate: 'Fête du Travail {year} Honduras — Compte à rebours et guide',
      descriptionTemplate: 'Quand est la Fête du Travail {year} au Honduras ? Compte à rebours, histoire de la Grève de la Banane et guide.',
      keywords: ['Fête du Travail Honduras', 'Día del Trabajo Honduras', '1er mai Honduras', 'Grève Banane 1954', 'journée des travailleurs Honduras'],
    },
    es: {
      titleTemplate: 'Día del Trabajo {year} Honduras — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Día del Trabajo {year} en Honduras? Cuenta regresiva al 1 de mayo, historia de la Huelga Bananera y guía.',
      keywords: ['Día del Trabajo Honduras', '1 de mayo Honduras', 'Huelga Bananera 1954', 'día festivo mayo Honduras', 'derechos laborales Honduras'],
    },
  },

  faq: [
    {
      question: { en: 'When is Labour Day {year} in Honduras?', fr: 'Quand est la Fête du Travail {year} au Honduras ?', es: '¿Cuándo es el Día del Trabajo {year} en Honduras?' },
      answer: {
        en: 'Labour Day {year} in Honduras is on {date} ({dayOfWeek}). It is always May 1.',
        fr: 'La Fête du Travail {year} au Honduras est le {date} ({dayOfWeek}). C\'est toujours le 1er mai.',
        es: 'El Día del Trabajo {year} en Honduras es el {date} ({dayOfWeek}). Siempre es el 1 de mayo.',
      },
    },
    {
      question: { en: 'What was the 1954 Banana Strike?', fr: 'Qu\'est-ce que la Grève de la Banane de 1954 ?', es: '¿Qué fue la Huelga Bananera de 1954?' },
      answer: {
        en: 'The Great Banana Strike of 1954 was a 69-day strike by over 25,000 workers at United Fruit Company plantations in Honduras. It led to the creation of the national labor code and the right to form unions.',
        fr: 'La Grande Grève de la Banane de 1954 était une grève de 69 jours de plus de 25 000 travailleurs des plantations de la United Fruit Company au Honduras. Elle a conduit à la création du code national du travail et au droit de former des syndicats.',
        es: 'La Gran Huelga Bananera de 1954 fue una huelga de 69 días de más de 25,000 trabajadores de las plantaciones de la United Fruit Company en Honduras. Condujo a la creación del código nacional del trabajo y al derecho a formar sindicatos.',
      },
    },
    {
      question: { en: 'Is Labour Day a public holiday in Honduras?', fr: 'La Fête du Travail est-elle un jour férié au Honduras ?', es: '¿Es el Día del Trabajo un día festivo oficial en Honduras?' },
      answer: {
        en: 'Yes, Labour Day is an official public holiday. Banks, government offices, schools, and most businesses are closed.',
        fr: 'Oui, la Fête du Travail est un jour férié officiel. Les banques, les bureaux du gouvernement, les écoles et la plupart des entreprises sont fermés.',
        es: 'Sí, el Día del Trabajo es un día festivo oficial. Los bancos, oficinas gubernamentales, escuelas y la mayoría de los negocios están cerrados.',
      },
    },
    {
      question: { en: 'How is Labour Day celebrated in Honduras?', fr: 'Comment la Fête du Travail est-elle célébrée au Honduras ?', es: '¿Cómo se celebra el Día del Trabajo en Honduras?' },
      answer: {
        en: 'Labour Day features marches by unions and workers through Tegucigalpa and San Pedro Sula, political rallies, and speeches. Most workers enjoy the day off with family gatherings and barbecues.',
        fr: 'La Fête du Travail comprend des marches de syndicats et travailleurs à travers Tegucigalpa et San Pedro Sula, des rassemblements politiques et des discours. La plupart des travailleurs profitent du jour de congé avec des réunions familiales et des barbecues.',
        es: 'El Día del Trabajo incluye marchas de sindicatos y trabajadores por Tegucigalpa y San Pedro Sula, mítines políticos y discursos. La mayoría de los trabajadores disfrutan del día libre con reuniones familiares y parrilladas.',
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
  id: 'hn_independence-day',
  countryCode: 'hn',
  slugs: { en: 'independence-day', fr: 'jour-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Jour de l'Indépendance", es: 'Día de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 9,
  fixedDay: 15,

  descriptions: {
    en: "Honduras Independence Day on September 15 celebrates the nation's independence from Spain in 1821. It features torch parades, marching bands, patriotic ceremonies, and vibrant celebrations across the country.",
    fr: "Le Jour de l'Indépendance du Honduras, le 15 septembre, célèbre l'indépendance de la nation vis-à-vis de l'Espagne en 1821. Il comprend des défilés aux flambeaux, des fanfares, des cérémonies patriotiques et des célébrations vibrantes à travers le pays.",
    es: 'El Día de la Independencia de Honduras, el 15 de septiembre, celebra la independencia de la nación de España en 1821. Incluye desfiles con antorchas, bandas de guerra, ceremonias patrióticas y vibrantes celebraciones en todo el país.',
  },

  history: {
    en: "On September 15, 1821, the Captaincy General of Guatemala — which included Honduras — declared independence from Spain. The Act of Independence was signed peacefully in Guatemala City, making it one of the most peaceful independence declarations in the Americas.\n\nHonduras briefly joined the Mexican Empire under Agustín de Iturbide before becoming a member of the United Provinces of Central America (1823-1838). After the federation dissolved, Honduras became a fully independent republic on November 5, 1838.\n\nToday, September 15 is Honduras's most patriotic holiday. The celebrations begin the evening of September 14 with torch parades, where students and citizens carry torches through the streets, reenacting the legendary relay that carried news of independence from Guatemala to Honduras. The next day features massive school marching band parades, patriotic speeches, and the raising of the blue-and-white Honduran flag.",
    fr: "Le 15 septembre 1821, la Capitainerie générale du Guatemala — qui incluait le Honduras — a déclaré son indépendance de l'Espagne. L'Acte d'Indépendance a été signé pacifiquement à Guatemala City, ce qui en fait l'une des déclarations d'indépendance les plus pacifiques des Amériques.\n\nLe Honduras a brièvement rejoint l'Empire mexicain sous Agustín de Iturbide avant de devenir membre des Provinces-Unies d'Amérique centrale (1823-1838). Après la dissolution de la fédération, le Honduras est devenu une république pleinement indépendante le 5 novembre 1838.\n\nAujourd'hui, le 15 septembre est le jour le plus patriotique du Honduras. Les célébrations commencent le soir du 14 septembre avec des défilés aux flambeaux, où les étudiants et les citoyens portent des torches à travers les rues, reconstituant le légendaire relais qui a porté la nouvelle de l'indépendance du Guatemala au Honduras. Le lendemain comprend des défilés massifs de fanfares scolaires, des discours patriotiques et le lever du drapeau bleu et blanc du Honduras.",
    es: "El 15 de septiembre de 1821, la Capitanía General de Guatemala — que incluía Honduras — declaró su independencia de España. El Acta de Independencia fue firmada pacíficamente en la Ciudad de Guatemala, convirtiéndola en una de las declaraciones de independencia más pacíficas de las Américas.\n\nHonduras se unió brevemente al Imperio Mexicano bajo Agustín de Iturbide antes de convertirse en miembro de las Provincias Unidas de Centroamérica (1823-1838). Después de que la federación se disolviera, Honduras se convirtió en una república plenamente independiente el 5 de noviembre de 1838.\n\nHoy, el 15 de septiembre es el día más patriótico de Honduras. Las celebraciones comienzan la noche del 14 de septiembre con desfiles de antorchas, donde estudiantes y ciudadanos llevan antorchas por las calles, recreando el legendario relevo que llevó la noticia de la independencia desde Guatemala hasta Honduras. Al día siguiente hay desfiles masivos de bandas de guerra escolares, discursos patrióticos e izado de la bandera azul y blanco de Honduras.",
  },

  traditions: {
    en: [
      'Torch parades on the evening of September 14, reenacting the independence relay',
      'Massive school marching band parades (desfiles) on September 15',
      'Raising the blue-and-white Honduran flag at homes, schools, and government buildings',
      'Patriotic speeches and singing of the national anthem',
      'Beauty queen pageants and cultural performances',
      'Traditional Honduran food — baleadas, nacatamales, and horchata',
    ],
    fr: [
      'Défilés aux flambeaux le soir du 14 septembre, reconstituant le relais de l\'indépendance',
      'Défilés massifs de fanfares scolaires (desfiles) le 15 septembre',
      'Lever du drapeau bleu et blanc du Honduras dans les maisons, les écoles et les bâtiments gouvernementaux',
      'Discours patriotiques et chant de l\'hymne national',
      'Concours de reines de beauté et spectacles culturels',
      'Nourriture traditionnelle hondurienne — baleadas, nacatamales et horchata',
    ],
    es: [
      'Desfiles de antorchas la noche del 14 de septiembre, recreando el relevo de la independencia',
      'Desfiles masivos de bandas de guerra escolares el 15 de septiembre',
      'Izar la bandera azul y blanco de Honduras en hogares, escuelas y edificios gubernamentales',
      'Discursos patrióticos y canto del himno nacional',
      'Concursos de reinas de belleza y presentaciones culturales',
      'Comida tradicional hondureña — baleadas, nacatamales y horchata',
    ],
  },

  funFacts: {
    en: [
      'Honduras shares its Independence Day (September 15) with Guatemala, El Salvador, Nicaragua, and Costa Rica.',
      'The torch parade on September 14 reenacts the legendary relay that carried news of independence from Guatemala to the rest of Central America.',
      'Honduran school marching bands compete intensely for the honor of being the best in their city\'s Independence Day parade.',
      'Honduras\'s independence from Spain was achieved without any military conflict — it was a peaceful declaration.',
      'The week surrounding September 15 is known as "Fiestas Patrias" (Patriotic Festivities) and is one of the most celebrated periods in Honduras.',
    ],
    fr: [
      'Le Honduras partage son Jour de l\'Indépendance (15 septembre) avec le Guatemala, le Salvador, le Nicaragua et le Costa Rica.',
      'Le défilé aux flambeaux du 14 septembre reconstitue le légendaire relais qui a porté la nouvelle de l\'indépendance du Guatemala au reste de l\'Amérique centrale.',
      'Les fanfares scolaires honduriennes rivalisent intensément pour l\'honneur d\'être la meilleure dans le défilé du Jour de l\'Indépendance de leur ville.',
      'L\'indépendance du Honduras vis-à-vis de l\'Espagne a été obtenue sans aucun conflit militaire — c\'était une déclaration pacifique.',
      'La semaine entourant le 15 septembre est connue sous le nom de « Fiestas Patrias » (Festivités Patriotiques) et est l\'une des périodes les plus célébrées au Honduras.',
    ],
    es: [
      'Honduras comparte su Día de la Independencia (15 de septiembre) con Guatemala, El Salvador, Nicaragua y Costa Rica.',
      'El desfile de antorchas del 14 de septiembre recrea el legendario relevo que llevó la noticia de la independencia desde Guatemala al resto de Centroamérica.',
      'Las bandas de guerra escolares hondureñas compiten intensamente por el honor de ser la mejor en el desfile del Día de la Independencia de su ciudad.',
      'La independencia de Honduras de España se logró sin ningún conflicto militar — fue una declaración pacífica.',
      'La semana que rodea al 15 de septiembre se conoce como «Fiestas Patrias» y es uno de los períodos más celebrados en Honduras.',
    ],
  },

  planningChecklist: {
    en: [
      'Attend the torch parade on the evening of September 14',
      'Find a good viewing spot for the September 15 marching band parade',
      'Fly the Honduran flag at home and decorate in blue and white',
      'Enjoy traditional Honduran foods — baleadas, nacatamales, and horchata',
      'Support local school marching bands and cultural performances',
    ],
    fr: [
      'Assister au défilé aux flambeaux le soir du 14 septembre',
      'Trouver un bon point de vue pour le défilé de fanfares du 15 septembre',
      'Faire flotter le drapeau hondurien à la maison et décorer en bleu et blanc',
      'Profiter des plats traditionnels honduriens — baleadas, nacatamales et horchata',
      'Soutenir les fanfares scolaires locales et les spectacles culturels',
    ],
    es: [
      'Asistir al desfile de antorchas la noche del 14 de septiembre',
      'Encontrar un buen lugar para ver el desfile de bandas de guerra del 15 de septiembre',
      'Izar la bandera hondureña en casa y decorar en azul y blanco',
      'Disfrutar de platillos tradicionales hondureños — baleadas, nacatamales y horchata',
      'Apoyar a las bandas de guerra escolares locales y presentaciones culturales',
    ],
  },

  relatedHolidays: ['hn_morazan-day', 'hn_pan-american-day'],

  seo: {
    en: {
      titleTemplate: 'Independence Day {year} Honduras — Countdown & Guide',
      descriptionTemplate: 'When is Honduras Independence Day {year}? Live countdown to September 15, torch parades, marching bands, and celebration guide.',
      keywords: ['Independence Day Honduras', 'September 15 Honduras', 'Día de la Independencia Honduras', 'Honduras torch parade', 'Fiestas Patrias Honduras'],
    },
    fr: {
      titleTemplate: "Jour de l'Indépendance {year} Honduras — Compte à rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'Indépendance {year} du Honduras ? Compte à rebours, défilés aux flambeaux, fanfares et guide.",
      keywords: ["Jour de l'Indépendance Honduras", '15 septembre Honduras', 'Día de la Independencia Honduras', 'défilé flambeaux Honduras', 'Fiestas Patrias Honduras'],
    },
    es: {
      titleTemplate: 'Día de la Independencia {year} Honduras — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Día de la Independencia {year} de Honduras? Cuenta regresiva al 15 de septiembre, desfiles de antorchas, bandas de guerra y guía.',
      keywords: ['Día de la Independencia Honduras', '15 de septiembre Honduras', 'fiestas patrias Honduras', 'desfile antorchas Honduras', 'días festivos Honduras'],
    },
  },

  faq: [
    {
      question: { en: 'When is Honduras Independence Day {year}?', fr: "Quand est le Jour de l'Indépendance {year} du Honduras ?", es: '¿Cuándo es el Día de la Independencia {year} de Honduras?' },
      answer: {
        en: 'Honduras Independence Day {year} is on {date} ({dayOfWeek}). The celebrations begin the evening of September 14 with torch parades.',
        fr: "Le Jour de l'Indépendance {year} du Honduras est le {date} ({dayOfWeek}). Les célébrations commencent le soir du 14 septembre avec des défilés aux flambeaux.",
        es: 'El Día de la Independencia {year} de Honduras es el {date} ({dayOfWeek}). Las celebraciones comienzan la noche del 14 de septiembre con desfiles de antorchas.',
      },
    },
    {
      question: { en: 'What is the torch parade on September 14?', fr: "Qu'est-ce que le défilé aux flambeaux du 14 septembre ?", es: '¿Qué es el desfile de antorchas del 14 de septiembre?' },
      answer: {
        en: 'The torch parade reenacts the relay that carried news of independence from Guatemala to Honduras in 1821. Students and citizens march through the streets carrying torches, symbolizing the light of freedom.',
        fr: "Le défilé aux flambeaux reconstitue le relais qui a porté la nouvelle de l'indépendance du Guatemala au Honduras en 1821. Les étudiants et les citoyens défilent dans les rues portant des torches, symbolisant la lumière de la liberté.",
        es: 'El desfile de antorchas recrea el relevo que llevó la noticia de la independencia desde Guatemala hasta Honduras en 1821. Estudiantes y ciudadanos marchan por las calles llevando antorchas, simbolizando la luz de la libertad.',
      },
    },
    {
      question: { en: 'Why do five Central American countries share the same Independence Day?', fr: 'Pourquoi cinq pays d\'Amérique centrale partagent-ils le même Jour de l\'Indépendance ?', es: '¿Por qué cinco países centroamericanos comparten el mismo Día de la Independencia?' },
      answer: {
        en: 'Guatemala, Honduras, El Salvador, Nicaragua, and Costa Rica all declared independence from Spain on September 15, 1821, as part of the Captaincy General of Guatemala.',
        fr: 'Le Guatemala, le Honduras, le Salvador, le Nicaragua et le Costa Rica ont tous déclaré leur indépendance de l\'Espagne le 15 septembre 1821, en tant que partie de la Capitainerie générale du Guatemala.',
        es: 'Guatemala, Honduras, El Salvador, Nicaragua y Costa Rica declararon su independencia de España el 15 de septiembre de 1821, como parte de la Capitanía General de Guatemala.',
      },
    },
    {
      question: { en: 'What are the traditional foods for Independence Day in Honduras?', fr: 'Quels sont les plats traditionnels du Jour de l\'Indépendance au Honduras ?', es: '¿Cuáles son los platillos tradicionales del Día de la Independencia en Honduras?' },
      answer: {
        en: 'Traditional Independence Day foods include baleadas (flour tortillas with beans, cheese, and cream), nacatamales, horchata (rice drink), and traditional Honduran sweets.',
        fr: 'Les plats traditionnels du Jour de l\'Indépendance incluent les baleadas (tortillas de farine avec haricots, fromage et crème), les nacatamales, l\'horchata (boisson au riz) et les confiseries traditionnelles honduriennes.',
        es: 'Los platillos tradicionales del Día de la Independencia incluyen baleadas (tortillas de harina con frijoles, queso y crema), nacatamales, horchata y dulces típicos hondureños.',
      },
    },
  ],

  colorTheme: 'blue-white',
  icon: '🇭🇳',
};

// ---------------------------------------------------------------------------
// Morazán Day — October 3
// ---------------------------------------------------------------------------

const morazanDay: HolidayData = {
  id: 'hn_morazan-day',
  countryCode: 'hn',
  slugs: { en: 'morazan-day', fr: 'jour-de-morazan', es: 'dia-de-morazan' },
  names: { en: 'Morazán Day', fr: 'Jour de Morazán', es: 'Día de Morazán' },

  dateType: 'fixed',
  fixedMonth: 10,
  fixedDay: 3,

  descriptions: {
    en: "Morazán Day on October 3 honors Francisco Morazán, Honduras's greatest national hero and champion of Central American unification. He served as president of the Federal Republic of Central America and fought tirelessly to keep the region united.",
    fr: "Le Jour de Morazán, le 3 octobre, honore Francisco Morazán, le plus grand héros national du Honduras et champion de l'unification de l'Amérique centrale. Il a été président de la République fédérale d'Amérique centrale et a lutté sans relâche pour maintenir la région unie.",
    es: 'El Día de Morazán, el 3 de octubre, honra a Francisco Morazán, el más grande héroe nacional de Honduras y defensor de la unificación centroamericana. Sirvió como presidente de la República Federal de Centroamérica y luchó incansablemente por mantener unida a la región.',
  },

  history: {
    en: "José Francisco Morazán Quezada (1792-1842) was born in Tegucigalpa and rose to become the most influential leader in Central American history. He served as president of the Federal Republic of Central America from 1830 to 1839, working to build a unified, liberal, and democratic Central American nation.\n\nMorazán championed progressive reforms including the separation of Church and State, public education, freedom of the press, and trial by jury. He fought against conservative forces who sought to break up the federation and return to authoritarian rule.\n\nDespite his efforts, the federation dissolved in 1838-1839 due to internal conflicts. Morazán was executed on September 15, 1842, in Costa Rica after a failed attempt to restore the union. October 3, the date chosen to honor him, commemorates his birthday. His dream of Central American unity continues to inspire the region, and his face appears on Honduran currency.",
    fr: "José Francisco Morazán Quezada (1792-1842) est né à Tegucigalpa et est devenu le leader le plus influent de l'histoire de l'Amérique centrale. Il a été président de la République fédérale d'Amérique centrale de 1830 à 1839, travaillant à construire une nation centroaméricaine unifiée, libérale et démocratique.\n\nMorazán a défendu des réformes progressistes incluant la séparation de l'Église et de l'État, l'éducation publique, la liberté de la presse et le jugement par jury. Il a lutté contre les forces conservatrices qui cherchaient à briser la fédération et à revenir au régime autoritaire.\n\nMalgré ses efforts, la fédération s'est dissoute en 1838-1839 en raison de conflits internes. Morazán a été exécuté le 15 septembre 1842 au Costa Rica après une tentative échouée de restaurer l'union. Le 3 octobre, la date choisie pour l'honorer, commémore sa naissance. Son rêve d'unité centraméricaine continue d'inspirer la région, et son visage apparaît sur la monnaie hondurienne.",
    es: "José Francisco Morazán Quezada (1792-1842) nació en Tegucigalpa y se convirtió en el líder más influyente de la historia centroamericana. Sirvió como presidente de la República Federal de Centroamérica de 1830 a 1839, trabajando para construir una nación centroamericana unificada, liberal y democrática.\n\nMorazán defendió reformas progresistas que incluían la separación de la Iglesia y el Estado, la educación pública, la libertad de prensa y el juicio por jurado. Luchó contra las fuerzas conservadoras que buscaban desintegrar la federación y volver al régimen autoritario.\n\nA pesar de sus esfuerzos, la federación se disolvió en 1838-1839 debido a conflictos internos. Morazán fue ejecutado el 15 de septiembre de 1842 en Costa Rica tras un intento fallido de restaurar la unión. El 3 de octubre, la fecha elegida para honrarlo, conmemora su nacimiento. Su sueño de unidad centroamericana sigue inspirando a la región, y su rostro aparece en la moneda hondureña.",
  },

  traditions: {
    en: [
      'Civic ceremonies and wreath-laying at Morazán statues and monuments',
      'School assemblies with presentations about Morazán\'s life and ideals',
      'Speeches about Central American unity and democratic values',
      'Parades and marching band performances',
      'Cultural events celebrating Honduran national identity',
      'Visiting the Morazán Park in Tegucigalpa\'s city center',
    ],
    fr: [
      'Cérémonies civiques et dépôt de gerbes aux statues et monuments de Morazán',
      'Assemblées scolaires avec des présentations sur la vie et les idéaux de Morazán',
      'Discours sur l\'unité centraméricaine et les valeurs démocratiques',
      'Défilés et spectacles de fanfares',
      'Événements culturels célébrant l\'identité nationale hondurienne',
      'Visite du Parc Morazán dans le centre-ville de Tegucigalpa',
    ],
    es: [
      'Ceremonias cívicas y ofrendas florales en estatuas y monumentos de Morazán',
      'Asambleas escolares con presentaciones sobre la vida e ideales de Morazán',
      'Discursos sobre la unidad centroamericana y los valores democráticos',
      'Desfiles y presentaciones de bandas de guerra',
      'Eventos culturales que celebran la identidad nacional hondureña',
      'Visitar el Parque Morazán en el centro de Tegucigalpa',
    ],
  },

  funFacts: {
    en: [
      'Francisco Morazán\'s face appears on the Honduran 5 lempira banknote, the country\'s most commonly used bill.',
      'A department (state) in Honduras is named Morazán in his honor, as are countless parks, streets, and schools across Central America.',
      'Morazán was self-educated in law and military strategy — he had no formal university education.',
      'His dream of a unified Central American nation is still discussed by political thinkers in the region today.',
      'Morazán was executed on September 15, 1842 — ironically the anniversary of Central American independence that he had fought to preserve.',
    ],
    fr: [
      'Le visage de Francisco Morazán apparaît sur le billet de 5 lempiras hondurien, le billet le plus couramment utilisé du pays.',
      'Un département (état) du Honduras porte le nom de Morazán en son honneur, ainsi que d\'innombrables parcs, rues et écoles à travers l\'Amérique centrale.',
      'Morazán était autodidacte en droit et en stratégie militaire — il n\'avait aucune éducation universitaire formelle.',
      'Son rêve d\'une nation centraméricaine unifiée est encore discuté par les penseurs politiques de la région aujourd\'hui.',
      'Morazán a été exécuté le 15 septembre 1842 — ironiquement l\'anniversaire de l\'indépendance centraméricaine qu\'il avait combattu pour préserver.',
    ],
    es: [
      'El rostro de Francisco Morazán aparece en el billete de 5 lempiras hondureño, el billete más comúnmente usado del país.',
      'Un departamento (estado) en Honduras lleva el nombre de Morazán en su honor, al igual que innumerables parques, calles y escuelas en toda Centroamérica.',
      'Morazán fue autodidacta en derecho y estrategia militar — no tenía educación universitaria formal.',
      'Su sueño de una nación centroamericana unificada todavía es discutido por pensadores políticos de la región hoy.',
      'Morazán fue ejecutado el 15 de septiembre de 1842 — irónicamente el aniversario de la independencia centroamericana que había luchado por preservar.',
    ],
  },

  planningChecklist: {
    en: [
      'Attend civic ceremonies honoring Morazán at local monuments',
      'Visit Morazán Park in Tegucigalpa\'s city center',
      'Learn about Morazán\'s role in Central American history',
      'Participate in school or community events about democratic values',
      'Enjoy the day off exploring Honduras\'s rich cultural heritage',
    ],
    fr: [
      'Assister aux cérémonies civiques honorant Morazán dans les monuments locaux',
      'Visiter le Parc Morazán dans le centre-ville de Tegucigalpa',
      'En apprendre davantage sur le rôle de Morazán dans l\'histoire de l\'Amérique centrale',
      'Participer à des événements scolaires ou communautaires sur les valeurs démocratiques',
      'Profiter du jour de congé pour explorer le riche patrimoine culturel du Honduras',
    ],
    es: [
      'Asistir a ceremonias cívicas en honor a Morazán en monumentos locales',
      'Visitar el Parque Morazán en el centro de Tegucigalpa',
      'Aprender sobre el papel de Morazán en la historia centroamericana',
      'Participar en eventos escolares o comunitarios sobre valores democráticos',
      'Disfrutar del día libre explorando el rico patrimonio cultural de Honduras',
    ],
  },

  relatedHolidays: ['hn_independence-day', 'hn_pan-american-day'],

  seo: {
    en: {
      titleTemplate: 'Morazán Day {year} Honduras — Countdown & History',
      descriptionTemplate: 'When is Morazán Day {year}? Live countdown to October 3, Francisco Morazán biography, and Honduran holiday guide.',
      keywords: ['Morazán Day Honduras', 'Francisco Morazán', 'October 3 Honduras', 'Día de Morazán', 'Honduras national hero'],
    },
    fr: {
      titleTemplate: 'Jour de Morazán {year} Honduras — Compte à rebours et histoire',
      descriptionTemplate: 'Quand est le Jour de Morazán {year} ? Compte à rebours, biographie de Francisco Morazán et guide des jours fériés honduriens.',
      keywords: ['Jour de Morazán Honduras', 'Francisco Morazán', '3 octobre Honduras', 'Día de Morazán', 'héros national Honduras'],
    },
    es: {
      titleTemplate: 'Día de Morazán {year} Honduras — Cuenta regresiva e historia',
      descriptionTemplate: '¿Cuándo es el Día de Morazán {year}? Cuenta regresiva al 3 de octubre, biografía de Francisco Morazán y guía de días festivos hondureños.',
      keywords: ['Día de Morazán Honduras', 'Francisco Morazán', '3 de octubre Honduras', 'héroe nacional Honduras', 'días festivos Honduras'],
    },
  },

  faq: [
    {
      question: { en: 'When is Morazán Day {year}?', fr: 'Quand est le Jour de Morazán {year} ?', es: '¿Cuándo es el Día de Morazán {year}?' },
      answer: {
        en: 'Morazán Day {year} is on {date} ({dayOfWeek}). It is always October 3.',
        fr: 'Le Jour de Morazán {year} est le {date} ({dayOfWeek}). C\'est toujours le 3 octobre.',
        es: 'El Día de Morazán {year} es el {date} ({dayOfWeek}). Siempre es el 3 de octubre.',
      },
    },
    {
      question: { en: 'Who was Francisco Morazán?', fr: 'Qui était Francisco Morazán ?', es: '¿Quién fue Francisco Morazán?' },
      answer: {
        en: 'Francisco Morazán (1792-1842) was a Honduran-born leader who served as president of the Federal Republic of Central America. He fought for Central American unity, democratic reforms, and the separation of Church and State.',
        fr: 'Francisco Morazán (1792-1842) était un leader né au Honduras qui a été président de la République fédérale d\'Amérique centrale. Il a lutté pour l\'unité centraméricaine, les réformes démocratiques et la séparation de l\'Église et de l\'État.',
        es: 'Francisco Morazán (1792-1842) fue un líder nacido en Honduras que sirvió como presidente de la República Federal de Centroamérica. Luchó por la unidad centroamericana, las reformas democráticas y la separación de la Iglesia y el Estado.',
      },
    },
    {
      question: { en: 'Why is Morazán important to Honduras?', fr: 'Pourquoi Morazán est-il important pour le Honduras ?', es: '¿Por qué Morazán es importante para Honduras?' },
      answer: {
        en: 'Morazán is Honduras\'s greatest national hero. He championed democratic values, education, and Central American unity. His face appears on the national currency and his name is given to a department, parks, and countless institutions.',
        fr: 'Morazán est le plus grand héros national du Honduras. Il a défendu les valeurs démocratiques, l\'éducation et l\'unité centraméricaine. Son visage apparaît sur la monnaie nationale et son nom est donné à un département, des parcs et d\'innombrables institutions.',
        es: 'Morazán es el más grande héroe nacional de Honduras. Defendió los valores democráticos, la educación y la unidad centroamericana. Su rostro aparece en la moneda nacional y su nombre se da a un departamento, parques e innumerables instituciones.',
      },
    },
    {
      question: { en: 'Is Morazán Day a public holiday in Honduras?', fr: 'Le Jour de Morazán est-il un jour férié au Honduras ?', es: '¿Es el Día de Morazán un día festivo oficial en Honduras?' },
      answer: {
        en: 'Yes, Morazán Day is an official public holiday in Honduras. Banks, government offices, and schools are closed.',
        fr: 'Oui, le Jour de Morazán est un jour férié officiel au Honduras. Les banques, les bureaux du gouvernement et les écoles sont fermés.',
        es: 'Sí, el Día de Morazán es un día festivo oficial en Honduras. Los bancos, oficinas gubernamentales y escuelas están cerrados.',
      },
    },
  ],

  colorTheme: 'blue-white',
  icon: '🏛️',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'hn_christmas',
  countryCode: 'hn',
  slugs: { en: 'christmas', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noël', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: "Christmas Day on December 25 is one of Honduras's most celebrated holidays. The season features nacatamales, torrejas (a Honduran-style French toast soaked in syrup), family gatherings, and a blend of Catholic devotion and warm Honduran hospitality.",
    fr: "Le jour de Noël, le 25 décembre, est l'une des fêtes les plus célébrées du Honduras. La saison comprend des nacatamales, des torrejas (un type de pain perdu hondurien trempé dans du sirop), des réunions familiales et un mélange de dévotion catholique et de chaleureuse hospitalité hondurienne.",
    es: 'La Navidad, el 25 de diciembre, es una de las festividades más celebradas de Honduras. La temporada incluye nacatamales, torrejas (un tipo de torrija hondureña bañada en miel), reuniones familiares y una mezcla de devoción católica y cálida hospitalidad hondureña.',
  },

  history: {
    en: "Christmas traditions in Honduras were introduced by Spanish missionaries in the 16th century and have evolved to incorporate Indigenous Lenca and Garífuna cultural elements. The Honduran Christmas season (temporada navideña) runs from early December through January 6, Three Kings Day.\n\nNochebuena (Christmas Eve) is the most important night. Families gather for a midnight feast of nacatamales — Honduras's signature celebratory dish — along with torrejas, roasted pork, and other traditional foods. At midnight, families share hugs, set off firecrackers, and exchange gifts.\n\nIn Garífuna communities along the Caribbean coast, Christmas celebrations include traditional drumming, punta dancing, and unique foods like machuca (mashed plantain with coconut soup). This cultural diversity makes Honduran Christmas celebrations richly varied across the country.",
    fr: "Les traditions de Noël au Honduras ont été introduites par les missionnaires espagnols au XVIe siècle et ont évolué pour incorporer des éléments culturels autochtones Lenca et Garífuna. La saison de Noël hondurienne (temporada navideña) va de début décembre au 6 janvier, Jour des Rois.\n\nLa Nochebuena (veille de Noël) est la nuit la plus importante. Les familles se réunissent pour un festin de minuit de nacatamales — le plat de célébration emblématique du Honduras — ainsi que des torrejas, du porc rôti et d'autres plats traditionnels. À minuit, les familles partagent des câlins, tirent des pétards et échangent des cadeaux.\n\nDans les communautés Garífuna le long de la côte caribéenne, les célébrations de Noël incluent les tambours traditionnels, la danse punta et des plats uniques comme le machuca (purée de plantain avec soupe de noix de coco). Cette diversité culturelle rend les célébrations de Noël honduriennes richement variées à travers le pays.",
    es: "Las tradiciones navideñas en Honduras fueron introducidas por misioneros españoles en el siglo XVI y han evolucionado para incorporar elementos culturales indígenas Lenca y Garífuna. La temporada navideña hondureña va desde principios de diciembre hasta el 6 de enero, Día de Reyes.\n\nLa Nochebuena es la noche más importante. Las familias se reúnen para un festín de medianoche de nacatamales — el platillo celebratorio emblemático de Honduras — junto con torrejas, cerdo asado y otros platillos tradicionales. A medianoche, las familias comparten abrazos, lanzan cohetes e intercambian regalos.\n\nEn las comunidades Garífuna a lo largo de la costa caribeña, las celebraciones navideñas incluyen tambores tradicionales, danza punta y platillos únicos como la machuca (plátano machacado con sopa de coco). Esta diversidad cultural hace que las celebraciones navideñas hondureñas sean ricamente variadas en todo el país.",
  },

  traditions: {
    en: [
      'Preparing and sharing nacatamales — the quintessential Honduran Christmas dish',
      'Making torrejas (bread soaked in egg and fried, then drenched in honey syrup)',
      'Setting off firecrackers and fireworks at midnight on Christmas Eve',
      'Attending Misa de Gallo (Midnight Mass) on Nochebuena',
      'Exchanging gifts at midnight on Christmas Eve',
      'Decorating homes with nativity scenes, Christmas trees, and lights',
      'Garífuna drumming and punta dancing in Caribbean communities',
    ],
    fr: [
      'Préparer et partager des nacatamales — le plat de Noël hondurien par excellence',
      'Faire des torrejas (pain trempé dans l\'œuf et frit, puis arrosé de sirop de miel)',
      'Tirer des pétards et des feux d\'artifice à minuit la veille de Noël',
      'Assister à la Misa de Gallo (messe de minuit) la Nochebuena',
      'Échanger des cadeaux à minuit la veille de Noël',
      'Décorer les maisons avec des crèches, des sapins de Noël et des lumières',
      'Tambours Garífuna et danse punta dans les communautés caribéennes',
    ],
    es: [
      'Preparar y compartir nacatamales — el platillo navideño hondureño por excelencia',
      'Hacer torrejas (pan remojado en huevo y frito, luego bañado en miel)',
      'Lanzar cohetes y fuegos artificiales a medianoche en Nochebuena',
      'Asistir a la Misa de Gallo en Nochebuena',
      'Intercambiar regalos a medianoche en Nochebuena',
      'Decorar los hogares con nacimientos, árboles de Navidad y luces',
      'Tambores Garífuna y danza punta en las comunidades caribeñas',
    ],
  },

  funFacts: {
    en: [
      'Nacatamales take an entire day to prepare — families often make them together as a communal activity before Christmas.',
      'Torrejas are Honduras\'s signature Christmas dessert — they are similar to French toast but soaked in a sweet syrup made with panela (raw cane sugar) and spices.',
      'In Garífuna communities, Christmas celebrations include ancestral drumming rituals that blend African and Indigenous Caribbean traditions.',
      'Honduras\'s Caribbean coast celebrates Christmas differently from the highlands, with distinct foods, music, and customs.',
      'Many Honduran children receive gifts on Christmas Eve at midnight rather than on Christmas morning.',
    ],
    fr: [
      'Les nacatamales prennent une journée entière à préparer — les familles les font souvent ensemble comme activité communautaire avant Noël.',
      'Les torrejas sont le dessert de Noël emblématique du Honduras — elles sont similaires au pain perdu mais trempées dans un sirop sucré fait de panela (sucre de canne brut) et d\'épices.',
      'Dans les communautés Garífuna, les célébrations de Noël incluent des rituels de tambours ancestraux qui mélangent les traditions africaines et autochtones caribéennes.',
      'La côte caribéenne du Honduras célèbre Noël différemment des hauts plateaux, avec des plats, de la musique et des coutumes distincts.',
      'De nombreux enfants honduriens reçoivent des cadeaux la veille de Noël à minuit plutôt que le matin de Noël.',
    ],
    es: [
      'Los nacatamales toman un día entero en preparar — las familias a menudo los hacen juntas como actividad comunal antes de Navidad.',
      'Las torrejas son el postre navideño emblemático de Honduras — son similares a las torrijas pero bañadas en un almíbar dulce hecho con panela (piloncillo) y especias.',
      'En las comunidades Garífuna, las celebraciones navideñas incluyen rituales de tambores ancestrales que mezclan tradiciones africanas e indígenas caribeñas.',
      'La costa caribeña de Honduras celebra la Navidad de manera diferente a los altiplanos, con platillos, música y costumbres distintas.',
      'Muchos niños hondureños reciben regalos en Nochebuena a medianoche en lugar de la mañana de Navidad.',
    ],
  },

  planningChecklist: {
    en: [
      'Start preparing nacatamales a day before Christmas Eve — it\'s a family tradition to make them together',
      'Buy ingredients for torrejas: bread, eggs, panela, cinnamon, and cloves',
      'Set up your nativity scene and Christmas decorations in early December',
      'Plan your Nochebuena dinner and midnight gift exchange',
      'Stock up on firecrackers for the midnight celebration',
    ],
    fr: [
      'Commencer à préparer les nacatamales un jour avant le réveillon — c\'est une tradition familiale de les faire ensemble',
      'Acheter les ingrédients pour les torrejas : pain, œufs, panela, cannelle et clous de girofle',
      'Installer votre crèche et vos décorations de Noël début décembre',
      'Planifier votre dîner de Nochebuena et l\'échange de cadeaux de minuit',
      'Faire le plein de pétards pour la célébration de minuit',
    ],
    es: [
      'Comenzar a preparar nacatamales un día antes de Nochebuena — es tradición familiar hacerlos juntos',
      'Comprar ingredientes para torrejas: pan, huevos, panela, canela y clavos',
      'Colocar el nacimiento y las decoraciones navideñas a principios de diciembre',
      'Planificar la cena de Nochebuena e intercambio de regalos a medianoche',
      'Abastecerse de cohetes para la celebración de medianoche',
    ],
  },

  relatedHolidays: ['hn_new-years-day', 'hn_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Christmas {year} Honduras — Countdown & Traditions',
      descriptionTemplate: 'When is Christmas {year} in Honduras? Live countdown to December 25, nacatamales, torrejas, and Honduran Christmas traditions.',
      keywords: ['Christmas Honduras', 'Navidad Honduras', 'nacatamales Christmas', 'torrejas Honduras', 'Honduran Christmas traditions'],
    },
    fr: {
      titleTemplate: 'Noël {year} Honduras — Compte à rebours et traditions',
      descriptionTemplate: 'Quand est Noël {year} au Honduras ? Compte à rebours, nacatamales, torrejas et traditions de Noël honduriennes.',
      keywords: ['Noël Honduras', 'Navidad Honduras', 'nacatamales Noël', 'torrejas Honduras', 'traditions Noël hondurien'],
    },
    es: {
      titleTemplate: 'Navidad {year} Honduras — Cuenta regresiva y tradiciones',
      descriptionTemplate: '¿Cuándo es Navidad {year} en Honduras? Cuenta regresiva al 25 de diciembre, nacatamales, torrejas y tradiciones navideñas hondureñas.',
      keywords: ['Navidad Honduras', 'nacatamales Navidad', 'torrejas Honduras', 'tradiciones navideñas Honduras', 'cuenta regresiva Navidad Honduras'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in Honduras?', fr: 'Quand est Noël {year} au Honduras ?', es: '¿Cuándo es Navidad {year} en Honduras?' },
      answer: {
        en: 'Christmas {year} in Honduras is on {date} ({dayOfWeek}). The main celebration is on Nochebuena (Christmas Eve), with gift-giving at midnight.',
        fr: 'Noël {year} au Honduras est le {date} ({dayOfWeek}). La principale célébration est la Nochebuena (veille de Noël), avec l\'échange de cadeaux à minuit.',
        es: 'La Navidad {year} en Honduras es el {date} ({dayOfWeek}). La celebración principal es en Nochebuena, con el intercambio de regalos a medianoche.',
      },
    },
    {
      question: { en: 'What are torrejas?', fr: 'Que sont les torrejas ?', es: '¿Qué son las torrejas?' },
      answer: {
        en: 'Torrejas are a traditional Honduran Christmas dessert — slices of bread dipped in egg, fried, and then soaked in a sweet syrup made from panela (raw cane sugar), cinnamon, and cloves. They are a beloved treat during the holiday season.',
        fr: 'Les torrejas sont un dessert de Noël traditionnel hondurien — des tranches de pain trempées dans l\'œuf, frites, puis imbibées d\'un sirop sucré fait de panela (sucre de canne brut), de cannelle et de clous de girofle. C\'est un régal apprécié pendant la saison des fêtes.',
        es: 'Las torrejas son un postre navideño tradicional hondureño — rebanadas de pan remojadas en huevo, fritas y luego bañadas en un almíbar dulce hecho con panela (piloncillo), canela y clavos. Son un manjar querido durante la temporada navideña.',
      },
    },
    {
      question: { en: 'How do Garífuna communities celebrate Christmas?', fr: 'Comment les communautés Garífuna célèbrent-elles Noël ?', es: '¿Cómo celebran la Navidad las comunidades Garífuna?' },
      answer: {
        en: 'Garífuna communities along Honduras\'s Caribbean coast celebrate Christmas with ancestral drumming, punta dancing, and unique dishes like machuca (mashed plantain with coconut soup). Their celebrations blend African, Indigenous, and Catholic traditions.',
        fr: 'Les communautés Garífuna le long de la côte caribéenne du Honduras célèbrent Noël avec des tambours ancestraux, la danse punta et des plats uniques comme la machuca (purée de plantain avec soupe de noix de coco). Leurs célébrations mélangent les traditions africaines, autochtones et catholiques.',
        es: 'Las comunidades Garífuna a lo largo de la costa caribeña de Honduras celebran la Navidad con tambores ancestrales, danza punta y platillos únicos como la machuca (plátano machacado con sopa de coco). Sus celebraciones mezclan tradiciones africanas, indígenas y católicas.',
      },
    },
    {
      question: { en: 'When do Hondurans exchange Christmas gifts?', fr: 'Quand les Honduriens échangent-ils les cadeaux de Noël ?', es: '¿Cuándo intercambian regalos de Navidad los hondureños?' },
      answer: {
        en: 'Most Honduran families exchange gifts at midnight on Christmas Eve (Nochebuena), right after the fireworks and the festive meal. Some families also observe Three Kings Day on January 6.',
        fr: 'La plupart des familles honduriennes échangent des cadeaux à minuit la veille de Noël (Nochebuena), juste après les feux d\'artifice et le repas festif. Certaines familles observent aussi le Jour des Rois le 6 janvier.',
        es: 'La mayoría de las familias hondureñas intercambian regalos a medianoche en Nochebuena, justo después de los fuegos artificiales y la cena festiva. Algunas familias también observan el Día de Reyes el 6 de enero.',
      },
    },
  ],

  colorTheme: 'red-green',
  icon: '🎄',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const hnHolidays: HolidayData[] = [
  newYearsDay,
  panAmericanDay,
  labourDay,
  independenceDay,
  morazanDay,
  christmas,
];

export default hnHolidays;
