/**
 * Costa Rica holidays data.
 */

import type { HolidayData } from '@/lib/types';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'cr_new-years-day',
  countryCode: 'cr',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'ano-nuevo' },
  names: { en: "New Year's Day", fr: "Jour de l'An", es: 'Año Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 is a joyful national holiday in Costa Rica. The celebrations begin on New Year's Eve with family dinners, fireworks, and lively street parties, especially in San José's central plazas and beach towns along both coasts.",
    fr: "Le Jour de l'An le 1er janvier est un joyeux jour férié national au Costa Rica. Les célébrations commencent le soir du Nouvel An avec des dîners en famille, des feux d'artifice et des fêtes de rue animées, surtout sur les places centrales de San José et les villes balnéaires des deux côtes.",
    es: 'El Año Nuevo el 1 de enero es un alegre feriado nacional en Costa Rica. Las celebraciones comienzan en Nochevieja con cenas familiares, fuegos artificiales y animadas fiestas callejeras, especialmente en las plazas centrales de San José y los pueblos de playa de ambas costas.',
  },

  history: {
    en: "New Year's celebrations in Costa Rica reflect the country's warm, family-oriented culture known as 'Pura Vida.' The tradition of welcoming the new year with large family gatherings has been central to Costa Rican life for generations.\n\nIn the capital San José, the annual Tope Nacional (national horse parade) and Carnaval are held in the days following New Year's, making the first week of January a festive period. The Fiestas de Zapote, a massive festival with bullfights (Tico-style, where the bulls are not harmed), carnival rides, and food stalls, runs from late December through early January.\n\nCoastal towns like Jacó, Manuel Antonio, and Tamarindo see large celebrations as both locals and tourists gather to ring in the new year on the beach.",
    fr: "Les célébrations du Nouvel An au Costa Rica reflètent la culture chaleureuse et orientée vers la famille du pays connue sous le nom de « Pura Vida ». La tradition d'accueillir la nouvelle année avec de grandes réunions familiales est au cœur de la vie costaricienne depuis des générations.\n\nDans la capitale San José, le Tope Nacional annuel (défilé national de chevaux) et le Carnaval ont lieu dans les jours suivant le Nouvel An, faisant de la première semaine de janvier une période festive. Les Fiestas de Zapote, un festival massif avec des corridas (à la mode Tico, où les taureaux ne sont pas blessés), des manèges et des stands de nourriture, se déroule de fin décembre à début janvier.\n\nLes villes côtières comme Jacó, Manuel Antonio et Tamarindo voient de grandes célébrations alors que locaux et touristes se réunissent pour accueillir la nouvelle année sur la plage.",
    es: "Las celebraciones de Año Nuevo en Costa Rica reflejan la cultura cálida y orientada a la familia del país conocida como 'Pura Vida'. La tradición de recibir el año nuevo con grandes reuniones familiares ha sido central en la vida costarricense por generaciones.\n\nEn la capital San José, el Tope Nacional anual (desfile nacional de caballos) y el Carnaval se celebran en los días siguientes al Año Nuevo, haciendo de la primera semana de enero un período festivo. Las Fiestas de Zapote, un festival masivo con corridas de toros (al estilo tico, donde los toros no son lastimados), juegos mecánicos y puestos de comida, se realiza desde finales de diciembre hasta principios de enero.\n\nLos pueblos costeros como Jacó, Manuel Antonio y Tamarindo ven grandes celebraciones mientras locales y turistas se reúnen para recibir el año nuevo en la playa.",
  },

  traditions: {
    en: [
      'Setting off fireworks across the country at midnight',
      'Gathering with family for a festive New Year\'s Eve dinner',
      'Attending the Fiestas de Zapote festival in San José',
      'Watching the Tope Nacional (horse parade) on January 1 or 2',
      'Eating twelve grapes at midnight for good luck',
      'Visiting the beach for New Year celebrations',
      'Wearing new clothes to symbolize fresh beginnings',
    ],
    fr: [
      'Lancer des feux d\'artifice à travers le pays à minuit',
      'Se réunir en famille pour un dîner festif du Nouvel An',
      'Assister au festival des Fiestas de Zapote à San José',
      'Regarder le Tope Nacional (défilé de chevaux) le 1er ou 2 janvier',
      'Manger douze raisins à minuit pour la bonne chance',
      'Visiter la plage pour les célébrations du Nouvel An',
      'Porter des vêtements neufs pour symboliser de nouveaux départs',
    ],
    es: [
      'Lanzar fuegos artificiales en todo el país a medianoche',
      'Reunirse en familia para una cena festiva de Nochevieja',
      'Asistir al festival de las Fiestas de Zapote en San José',
      'Ver el Tope Nacional (desfile de caballos) el 1 o 2 de enero',
      'Comer doce uvas a medianoche para la buena suerte',
      'Visitar la playa para las celebraciones de Año Nuevo',
      'Estrenar ropa nueva para simbolizar nuevos comienzos',
    ],
  },

  funFacts: {
    en: [
      'The Fiestas de Zapote is one of the largest annual festivals in Costa Rica, running for about two weeks around the new year.',
      'Costa Rica\'s "Tico-style" bullfights (corridas a la tica) differ from Spanish bullfights — the bulls are not harmed, and audience members try to dodge them in the ring.',
      'The Tope Nacional horse parade features thousands of horses and riders parading through San José.',
      'Many Costa Ricans head to the beaches for New Year\'s, making Pacific coast towns extremely crowded.',
      'Costa Rica\'s national phrase "Pura Vida" (Pure Life) is especially heard during New Year celebrations as a toast and greeting.',
    ],
    fr: [
      'Les Fiestas de Zapote sont l\'un des plus grands festivals annuels au Costa Rica, se déroulant pendant environ deux semaines autour du nouvel an.',
      'Les corridas « à la tica » du Costa Rica diffèrent des corridas espagnoles — les taureaux ne sont pas blessés, et les spectateurs essaient de les esquiver dans l\'arène.',
      'Le défilé de chevaux Tope Nacional présente des milliers de chevaux et de cavaliers défilant dans San José.',
      'De nombreux Costariciens se dirigent vers les plages pour le Nouvel An, rendant les villes de la côte Pacifique extrêmement bondées.',
      'L\'expression nationale du Costa Rica « Pura Vida » (Vie pure) est particulièrement entendue pendant les célébrations du Nouvel An comme toast et salutation.',
    ],
    es: [
      'Las Fiestas de Zapote son uno de los festivales anuales más grandes de Costa Rica, realizándose durante aproximadamente dos semanas alrededor del año nuevo.',
      'Las corridas de toros "a la tica" de Costa Rica difieren de las españolas — los toros no son lastimados, y los espectadores intentan esquivarlos en el ruedo.',
      'El desfile de caballos Tope Nacional presenta miles de caballos y jinetes desfilando por San José.',
      'Muchos costarricenses se dirigen a las playas para Año Nuevo, haciendo que los pueblos de la costa del Pacífico estén extremadamente llenos.',
      'La frase nacional de Costa Rica "Pura Vida" se escucha especialmente durante las celebraciones de Año Nuevo como brindis y saludo.',
    ],
  },

  planningChecklist: {
    en: [
      'Book beach accommodations months in advance — New Year\'s is peak season',
      'Purchase fireworks early as they sell out quickly',
      'Plan to attend the Fiestas de Zapote for the full Costa Rican experience',
      'Check the Tope Nacional parade schedule and find a good viewing spot',
      'Arrange safe transportation if celebrating away from home',
    ],
    fr: [
      'Réservez les hébergements de plage des mois à l\'avance — le Nouvel An est haute saison',
      'Achetez les feux d\'artifice tôt car ils se vendent rapidement',
      'Prévoyez d\'assister aux Fiestas de Zapote pour l\'expérience costaricienne complète',
      'Consultez l\'horaire du défilé Tope Nacional et trouvez un bon emplacement',
      'Organisez un transport sûr si vous célébrez loin de chez vous',
    ],
    es: [
      'Reserve alojamiento de playa con meses de anticipación — Año Nuevo es temporada alta',
      'Compre fuegos artificiales temprano ya que se agotan rápidamente',
      'Planee asistir a las Fiestas de Zapote para la experiencia costarricense completa',
      'Consulte el horario del desfile Tope Nacional y encuentre un buen lugar',
      'Organice transporte seguro si celebrará fuera de casa',
    ],
  },

  relatedHolidays: ['cr_christmas'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Costa Rica — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in Costa Rica? Live countdown, Fiestas de Zapote, Tope Nacional, and celebration guide.",
      keywords: ["New Year's Day Costa Rica", 'Año Nuevo Costa Rica', 'Fiestas de Zapote', 'Tope Nacional', 'Costa Rica holidays'],
    },
    fr: {
      titleTemplate: "Jour de l'An {year} Costa Rica — Compte à rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'An {year} au Costa Rica ? Compte à rebours, Fiestas de Zapote, Tope Nacional et guide.",
      keywords: ["Jour de l'An Costa Rica", 'Nouvel An Costa Rica', 'Fiestas de Zapote', 'Tope Nacional', 'jours fériés Costa Rica'],
    },
    es: {
      titleTemplate: 'Año Nuevo {year} Costa Rica — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Año Nuevo {year} en Costa Rica? Cuenta regresiva, Fiestas de Zapote, Tope Nacional y guía.',
      keywords: ['Año Nuevo Costa Rica', 'Fiestas de Zapote', 'Tope Nacional', 'feriados Costa Rica', 'celebración Año Nuevo'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in Costa Rica?", fr: "Quand est le Jour de l'An {year} au Costa Rica ?", es: '¿Cuándo es el Año Nuevo {year} en Costa Rica?' },
      answer: {
        en: "New Year's Day {year} in Costa Rica is on {date}. It is always January 1 and is an official public holiday.",
        fr: "Le Jour de l'An {year} au Costa Rica est le {date}. C'est toujours le 1er janvier et c'est un jour férié officiel.",
        es: 'El Año Nuevo {year} en Costa Rica es el {date}. Siempre es el 1 de enero y es un feriado oficial.',
      },
    },
    {
      question: { en: 'What are the Fiestas de Zapote?', fr: 'Que sont les Fiestas de Zapote ?', es: '¿Qué son las Fiestas de Zapote?' },
      answer: {
        en: 'The Fiestas de Zapote is a massive annual festival in San José running from late December through early January. It features Tico-style bullfights, carnival rides, food stalls, live music, and cultural events.',
        fr: 'Les Fiestas de Zapote sont un festival annuel massif à San José se déroulant de fin décembre à début janvier. Il présente des corridas à la tica, des manèges, des stands de nourriture, de la musique live et des événements culturels.',
        es: 'Las Fiestas de Zapote son un festival anual masivo en San José que se realiza desde finales de diciembre hasta principios de enero. Presenta corridas de toros a la tica, juegos mecánicos, puestos de comida, música en vivo y eventos culturales.',
      },
    },
    {
      question: { en: 'What is the Tope Nacional?', fr: 'Qu\'est-ce que le Tope Nacional ?', es: '¿Qué es el Tope Nacional?' },
      answer: {
        en: 'The Tope Nacional is Costa Rica\'s national horse parade, held in San José in the days following New Year\'s Day. Thousands of horses and riders parade through the city center in one of the country\'s most beloved traditions.',
        fr: 'Le Tope Nacional est le défilé national de chevaux du Costa Rica, tenu à San José dans les jours suivant le Jour de l\'An. Des milliers de chevaux et de cavaliers défilent dans le centre-ville dans l\'une des traditions les plus chères du pays.',
        es: 'El Tope Nacional es el desfile nacional de caballos de Costa Rica, celebrado en San José en los días siguientes al Año Nuevo. Miles de caballos y jinetes desfilan por el centro de la ciudad en una de las tradiciones más queridas del país.',
      },
    },
    {
      question: { en: "Is New Year's Day a public holiday in Costa Rica?", fr: "Le Jour de l'An est-il un jour férié au Costa Rica ?", es: '¿Es el Año Nuevo un feriado en Costa Rica?' },
      answer: {
        en: "Yes, New Year's Day is an official public holiday in Costa Rica. Banks, government offices, and most businesses are closed.",
        fr: "Oui, le Jour de l'An est un jour férié officiel au Costa Rica. Les banques, les bureaux gouvernementaux et la plupart des commerces sont fermés.",
        es: 'Sí, el Año Nuevo es un feriado oficial en Costa Rica. Los bancos, oficinas gubernamentales y la mayoría de los negocios están cerrados.',
      },
    },
  ],

  colorTheme: 'new-year',
  icon: '🎆',
};

// ---------------------------------------------------------------------------
// Juan Santamaría Day — April 11
// ---------------------------------------------------------------------------

const juanSantamariaDay: HolidayData = {
  id: 'cr_juan-santamaria-day',
  countryCode: 'cr',
  slugs: { en: 'juan-santamaria-day', fr: 'jour-de-juan-santamaria', es: 'dia-de-juan-santamaria' },
  names: { en: 'Juan Santamaría Day', fr: 'Jour de Juan Santamaría', es: 'Día de Juan Santamaría' },

  dateType: 'fixed',
  fixedMonth: 4,
  fixedDay: 11,

  descriptions: {
    en: 'Juan Santamaría Day on April 11 honors Costa Rica\'s national hero, a young drummer boy who sacrificed his life during the 1856 Battle of Rivas against the American filibuster William Walker. The day celebrates Costa Rican bravery, sovereignty, and national pride.',
    fr: "Le Jour de Juan Santamaría le 11 avril honore le héros national du Costa Rica, un jeune tambour qui a sacrifié sa vie lors de la bataille de Rivas en 1856 contre le flibustier américain William Walker. La journée célèbre la bravoure, la souveraineté et la fierté nationale costaricienne.",
    es: 'El Día de Juan Santamaría el 11 de abril honra al héroe nacional de Costa Rica, un joven tamborilero que sacrificó su vida durante la Batalla de Rivas de 1856 contra el filibustero estadounidense William Walker. El día celebra la valentía, la soberanía y el orgullo nacional costarricense.',
  },

  history: {
    en: "Juan Santamaría was a humble drummer boy from Alajuela who volunteered to set fire to the enemy's fortified position during the Battle of Rivas on April 11, 1856. He was killed in the attempt but succeeded in his mission, turning the tide of the battle against William Walker's forces.\n\nWilliam Walker, an American adventurer, had seized control of Nicaragua and threatened to conquer all of Central America. Costa Rica, along with other Central American nations, formed an alliance to defeat him. The Battle of Rivas was a decisive moment in this campaign.\n\nJuan Santamaría became a symbol of Costa Rican patriotism and selflessness. A statue of him stands in Alajuela, and the country's main international airport (near Alajuela) bears his name. April 11 has been a national holiday since 1915.",
    fr: "Juan Santamaría était un humble tambour d'Alajuela qui s'est porté volontaire pour mettre le feu à la position fortifiée de l'ennemi lors de la bataille de Rivas le 11 avril 1856. Il a été tué dans la tentative mais a réussi sa mission, renversant le cours de la bataille contre les forces de William Walker.\n\nWilliam Walker, un aventurier américain, avait pris le contrôle du Nicaragua et menaçait de conquérir toute l'Amérique centrale. Le Costa Rica, avec d'autres nations centraméricaines, a formé une alliance pour le vaincre. La bataille de Rivas a été un moment décisif dans cette campagne.\n\nJuan Santamaría est devenu un symbole du patriotisme et de l'abnégation costaricienne. Une statue de lui se dresse à Alajuela, et le principal aéroport international du pays (près d'Alajuela) porte son nom. Le 11 avril est un jour férié national depuis 1915.",
    es: "Juan Santamaría fue un humilde tamborilero de Alajuela que se ofreció como voluntario para incendiar la posición fortificada del enemigo durante la Batalla de Rivas el 11 de abril de 1856. Fue asesinado en el intento pero logró su misión, cambiando el curso de la batalla contra las fuerzas de William Walker.\n\nWilliam Walker, un aventurero estadounidense, había tomado el control de Nicaragua y amenazaba con conquistar toda Centroamérica. Costa Rica, junto con otras naciones centroamericanas, formó una alianza para derrotarlo. La Batalla de Rivas fue un momento decisivo en esta campaña.\n\nJuan Santamaría se convirtió en un símbolo del patriotismo y la abnegación costarricense. Una estatua de él se encuentra en Alajuela, y el principal aeropuerto internacional del país (cerca de Alajuela) lleva su nombre. El 11 de abril es feriado nacional desde 1915.",
  },

  traditions: {
    en: [
      'Attending civic ceremonies and patriotic events in Alajuela',
      'Visiting the Juan Santamaría Museum and monument in Alajuela',
      'Watching parades with marching bands and cultural performances',
      'Laying wreaths at the Juan Santamaría statue',
      'Participating in school activities and educational programs about the national hero',
    ],
    fr: [
      'Assister à des cérémonies civiques et des événements patriotiques à Alajuela',
      'Visiter le Musée et le monument Juan Santamaría à Alajuela',
      'Regarder des défilés avec des fanfares et des spectacles culturels',
      'Déposer des couronnes au pied de la statue de Juan Santamaría',
      'Participer à des activités scolaires et des programmes éducatifs sur le héros national',
    ],
    es: [
      'Asistir a ceremonias cívicas y eventos patrióticos en Alajuela',
      'Visitar el Museo y monumento Juan Santamaría en Alajuela',
      'Ver desfiles con bandas de guerra y presentaciones culturales',
      'Colocar ofrendas florales en la estatua de Juan Santamaría',
      'Participar en actividades escolares y programas educativos sobre el héroe nacional',
    ],
  },

  funFacts: {
    en: [
      'Juan Santamaría was only about 24 years old when he died at the Battle of Rivas.',
      'Costa Rica\'s main international airport, Juan Santamaría International Airport (SJO), is named after the national hero.',
      'The Juan Santamaría Museum in Alajuela is housed in the old colonial jail and documents the 1856-1857 campaign against William Walker.',
      'William Walker actually declared himself president of Nicaragua before the Central American alliance defeated him.',
      'Juan Santamaría is one of the few national heroes in the Americas who was of mixed-race and humble origin, making him a symbol of egalitarianism.',
    ],
    fr: [
      'Juan Santamaría n\'avait qu\'environ 24 ans quand il est mort à la bataille de Rivas.',
      'Le principal aéroport international du Costa Rica, l\'aéroport international Juan Santamaría (SJO), porte le nom du héros national.',
      'Le Musée Juan Santamaría à Alajuela est logé dans l\'ancienne prison coloniale et documente la campagne de 1856-1857 contre William Walker.',
      'William Walker s\'était en fait proclamé président du Nicaragua avant que l\'alliance centraméricaine ne le vainque.',
      'Juan Santamaría est l\'un des rares héros nationaux des Amériques d\'origine métisse et humble, ce qui fait de lui un symbole d\'égalitarisme.',
    ],
    es: [
      'Juan Santamaría tenía solo unos 24 años cuando murió en la Batalla de Rivas.',
      'El principal aeropuerto internacional de Costa Rica, el Aeropuerto Internacional Juan Santamaría (SJO), lleva el nombre del héroe nacional.',
      'El Museo Juan Santamaría en Alajuela está alojado en la antigua cárcel colonial y documenta la campaña de 1856-1857 contra William Walker.',
      'William Walker de hecho se declaró presidente de Nicaragua antes de que la alianza centroamericana lo derrotara.',
      'Juan Santamaría es uno de los pocos héroes nacionales de las Américas de origen mestizo y humilde, lo que lo convierte en un símbolo de igualitarismo.',
    ],
  },

  planningChecklist: {
    en: [
      'Visit Alajuela for the main celebrations and ceremonies at the Juan Santamaría statue',
      'Check the schedule for parades and cultural events in your area',
      'Visit the Juan Santamaría Museum for historical context',
      'Dress in red, white, and blue (Costa Rican flag colors) for patriotic spirit',
      'Plan activities for children that teach about the national hero\'s story',
    ],
    fr: [
      'Visitez Alajuela pour les principales célébrations et cérémonies à la statue de Juan Santamaría',
      'Consultez l\'horaire des défilés et événements culturels dans votre région',
      'Visitez le Musée Juan Santamaría pour le contexte historique',
      'Habillez-vous en rouge, blanc et bleu (couleurs du drapeau costaricien) pour l\'esprit patriotique',
      'Planifiez des activités pour les enfants qui enseignent l\'histoire du héros national',
    ],
    es: [
      'Visite Alajuela para las principales celebraciones y ceremonias en la estatua de Juan Santamaría',
      'Consulte el horario de desfiles y eventos culturales en su área',
      'Visite el Museo Juan Santamaría para contexto histórico',
      'Vístase de rojo, blanco y azul (colores de la bandera costarricense) para el espíritu patriótico',
      'Planifique actividades para los niños que enseñen sobre la historia del héroe nacional',
    ],
  },

  relatedHolidays: ['cr_independence-day', 'cr_annexation-guanacaste'],

  seo: {
    en: {
      titleTemplate: 'Juan Santamaría Day {year} Costa Rica — Countdown & History',
      descriptionTemplate: 'When is Juan Santamaría Day {year}? Live countdown to April 11, Battle of Rivas history, and Costa Rica national hero guide.',
      keywords: ['Juan Santamaría Day', 'April 11 Costa Rica', 'Battle of Rivas', 'Costa Rica national hero', 'Costa Rica holidays'],
    },
    fr: {
      titleTemplate: 'Jour de Juan Santamaría {year} Costa Rica — Compte à rebours et histoire',
      descriptionTemplate: 'Quand est le Jour de Juan Santamaría {year} ? Compte à rebours, histoire de la bataille de Rivas et guide.',
      keywords: ['Jour de Juan Santamaría', '11 avril Costa Rica', 'bataille de Rivas', 'héros national Costa Rica', 'jours fériés Costa Rica'],
    },
    es: {
      titleTemplate: 'Día de Juan Santamaría {year} Costa Rica — Cuenta regresiva e historia',
      descriptionTemplate: '¿Cuándo es el Día de Juan Santamaría {year}? Cuenta regresiva, historia de la Batalla de Rivas y guía.',
      keywords: ['Día de Juan Santamaría', '11 de abril Costa Rica', 'Batalla de Rivas', 'héroe nacional Costa Rica', 'feriados Costa Rica'],
    },
  },

  faq: [
    {
      question: { en: 'When is Juan Santamaría Day {year}?', fr: 'Quand est le Jour de Juan Santamaría {year} ?', es: '¿Cuándo es el Día de Juan Santamaría {year}?' },
      answer: {
        en: 'Juan Santamaría Day {year} is on {date}. It is always April 11.',
        fr: 'Le Jour de Juan Santamaría {year} est le {date}. C\'est toujours le 11 avril.',
        es: 'El Día de Juan Santamaría {year} es el {date}. Siempre es el 11 de abril.',
      },
    },
    {
      question: { en: 'Who was Juan Santamaría?', fr: 'Qui était Juan Santamaría ?', es: '¿Quién fue Juan Santamaría?' },
      answer: {
        en: 'Juan Santamaría was a young drummer boy from Alajuela who volunteered to set fire to the enemy position during the Battle of Rivas on April 11, 1856. He was killed in the attempt but his sacrifice turned the battle against William Walker\'s forces.',
        fr: 'Juan Santamaría était un jeune tambour d\'Alajuela qui s\'est porté volontaire pour mettre le feu à la position ennemie lors de la bataille de Rivas le 11 avril 1856. Il a été tué dans la tentative mais son sacrifice a renversé la bataille contre les forces de William Walker.',
        es: 'Juan Santamaría fue un joven tamborilero de Alajuela que se ofreció como voluntario para incendiar la posición enemiga durante la Batalla de Rivas el 11 de abril de 1856. Fue asesinado en el intento pero su sacrificio cambió el curso de la batalla contra las fuerzas de William Walker.',
      },
    },
    {
      question: { en: 'What was the Battle of Rivas?', fr: 'Qu\'est-ce que la bataille de Rivas ?', es: '¿Qué fue la Batalla de Rivas?' },
      answer: {
        en: 'The Battle of Rivas was fought on April 11, 1856, in Nicaragua between Costa Rican forces and the army of William Walker, an American adventurer who had taken control of Nicaragua. The Costa Rican victory was pivotal in the Central American campaign to expel Walker.',
        fr: 'La bataille de Rivas a été livrée le 11 avril 1856, au Nicaragua, entre les forces costariciennes et l\'armée de William Walker, un aventurier américain qui avait pris le contrôle du Nicaragua. La victoire costaricienne a été déterminante dans la campagne centraméricaine pour expulser Walker.',
        es: 'La Batalla de Rivas se libró el 11 de abril de 1856, en Nicaragua, entre las fuerzas costarricenses y el ejército de William Walker, un aventurero estadounidense que había tomado el control de Nicaragua. La victoria costarricense fue crucial en la campaña centroamericana para expulsar a Walker.',
      },
    },
    {
      question: { en: 'Is Juan Santamaría Day a public holiday?', fr: 'Le Jour de Juan Santamaría est-il un jour férié ?', es: '¿Es el Día de Juan Santamaría un feriado?' },
      answer: {
        en: 'Yes, Juan Santamaría Day on April 11 is an official public holiday in Costa Rica. Banks, government offices, and most businesses are closed.',
        fr: 'Oui, le Jour de Juan Santamaría le 11 avril est un jour férié officiel au Costa Rica. Les banques, les bureaux gouvernementaux et la plupart des commerces sont fermés.',
        es: 'Sí, el Día de Juan Santamaría el 11 de abril es un feriado oficial en Costa Rica. Los bancos, oficinas gubernamentales y la mayoría de los negocios están cerrados.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '🏛️',
};

// ---------------------------------------------------------------------------
// Labour Day — May 1
// ---------------------------------------------------------------------------

const labourDay: HolidayData = {
  id: 'cr_labour-day',
  countryCode: 'cr',
  slugs: { en: 'labour-day', fr: 'fete-du-travail', es: 'dia-del-trabajo' },
  names: { en: 'Labour Day', fr: 'Fête du Travail', es: 'Día del Trabajo' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 1,

  descriptions: {
    en: "Labour Day on May 1 is a national holiday in Costa Rica celebrating workers' rights and the labor movement. It is notable as the day the President delivers the annual State of the Nation address to the Legislative Assembly.",
    fr: "La Fête du Travail le 1er mai est un jour férié national au Costa Rica célébrant les droits des travailleurs et le mouvement ouvrier. Elle est notable car c'est le jour où le Président prononce le discours annuel sur l'état de la nation devant l'Assemblée législative.",
    es: "El Día del Trabajo el 1 de mayo es un feriado nacional en Costa Rica que celebra los derechos de los trabajadores y el movimiento obrero. Es notable porque es el día en que el Presidente pronuncia el informe anual del estado de la nación ante la Asamblea Legislativa.",
  },

  history: {
    en: "Costa Rica has a proud history of progressive labour legislation. In 1943, under President Rafael Ángel Calderón Guardia, the country enacted sweeping social reforms including the Labour Code, social security, and a constitutional guarantee of workers' rights.\n\nThese reforms, influenced by the Catholic social doctrine championed by Archbishop Víctor Manuel Sanabria, were among the most progressive in Latin America. The Labour Code established minimum wages, working hour limits, vacation rights, and protections against unjust dismissal.\n\nToday, May 1 in Costa Rica uniquely combines the celebration of workers' rights with the President's annual report to the nation, making it both a civic and workers' holiday.",
    fr: "Le Costa Rica a une fière histoire de législation du travail progressiste. En 1943, sous le président Rafael Ángel Calderón Guardia, le pays a adopté des réformes sociales radicales incluant le Code du Travail, la sécurité sociale et une garantie constitutionnelle des droits des travailleurs.\n\nCes réformes, influencées par la doctrine sociale catholique défendue par l'archevêque Víctor Manuel Sanabria, étaient parmi les plus progressistes d'Amérique latine. Le Code du Travail a établi des salaires minimums, des limites d'heures de travail, des droits aux vacances et des protections contre le licenciement injuste.\n\nAujourd'hui, le 1er mai au Costa Rica combine de manière unique la célébration des droits des travailleurs avec le rapport annuel du Président à la nation, ce qui en fait à la fois un jour férié civique et un jour des travailleurs.",
    es: "Costa Rica tiene una orgullosa historia de legislación laboral progresista. En 1943, bajo el Presidente Rafael Ángel Calderón Guardia, el país promulgó reformas sociales radicales incluyendo el Código de Trabajo, la seguridad social y una garantía constitucional de los derechos de los trabajadores.\n\nEstas reformas, influenciadas por la doctrina social católica promovida por el Arzobispo Víctor Manuel Sanabria, fueron de las más progresistas en América Latina. El Código de Trabajo estableció salarios mínimos, límites de horas de trabajo, derechos de vacaciones y protecciones contra el despido injusto.\n\nHoy, el 1 de mayo en Costa Rica combina de manera única la celebración de los derechos de los trabajadores con el informe anual del Presidente a la nación, haciéndolo tanto un feriado cívico como de los trabajadores.",
  },

  traditions: {
    en: [
      'Watching the President\'s State of the Nation address on television',
      'Participating in workers\' marches and union events',
      'Attending civic ceremonies at the Legislative Assembly',
      'Gathering with family for a day of rest and relaxation',
      'Reflecting on workers\' rights and labour achievements',
    ],
    fr: [
      'Regarder le discours sur l\'état de la nation du Président à la télévision',
      'Participer à des marches de travailleurs et des événements syndicaux',
      'Assister à des cérémonies civiques à l\'Assemblée législative',
      'Se réunir en famille pour une journée de repos et de détente',
      'Réfléchir aux droits des travailleurs et aux réalisations du mouvement ouvrier',
    ],
    es: [
      'Ver el informe del estado de la nación del Presidente por televisión',
      'Participar en marchas de trabajadores y eventos sindicales',
      'Asistir a ceremonias cívicas en la Asamblea Legislativa',
      'Reunirse en familia para un día de descanso y relajación',
      'Reflexionar sobre los derechos de los trabajadores y los logros laborales',
    ],
  },

  funFacts: {
    en: [
      'Costa Rica is one of the few countries where the President delivers the annual State of the Nation address on Labour Day.',
      'The 1943 Labour Code, still the foundation of Costa Rican labor law, was considered revolutionary for its time in Latin America.',
      'Costa Rica abolished its army in 1948, redirecting military spending to education and social programs that benefit workers.',
      'Costa Rica consistently ranks among the happiest countries in the world, partly due to its strong social safety net.',
      'The social reforms of 1943 were the result of an unusual alliance between President Calderón, the Catholic Church, and the Communist Party.',
    ],
    fr: [
      'Le Costa Rica est l\'un des rares pays où le Président prononce le discours annuel sur l\'état de la nation le jour de la Fête du Travail.',
      'Le Code du Travail de 1943, toujours la base du droit du travail costaricien, était considéré comme révolutionnaire pour son époque en Amérique latine.',
      'Le Costa Rica a aboli son armée en 1948, redirigeant les dépenses militaires vers l\'éducation et les programmes sociaux bénéficiant aux travailleurs.',
      'Le Costa Rica se classe régulièrement parmi les pays les plus heureux du monde, en partie grâce à son solide filet de sécurité sociale.',
      'Les réformes sociales de 1943 ont été le résultat d\'une alliance inhabituelle entre le président Calderón, l\'Église catholique et le Parti communiste.',
    ],
    es: [
      'Costa Rica es uno de los pocos países donde el Presidente pronuncia el informe anual del estado de la nación el Día del Trabajo.',
      'El Código de Trabajo de 1943, aún la base del derecho laboral costarricense, fue considerado revolucionario para su época en América Latina.',
      'Costa Rica abolió su ejército en 1948, redirigiendo el gasto militar a educación y programas sociales que benefician a los trabajadores.',
      'Costa Rica se clasifica consistentemente entre los países más felices del mundo, en parte debido a su sólida red de seguridad social.',
      'Las reformas sociales de 1943 fueron el resultado de una alianza inusual entre el Presidente Calderón, la Iglesia Católica y el Partido Comunista.',
    ],
  },

  planningChecklist: {
    en: [
      'Tune in to the President\'s State of the Nation address on TV or radio',
      'Check for workers\' march routes and road closures',
      'Plan a relaxing day as most businesses will be closed',
      'Stock up on groceries in advance — supermarkets may close',
      'Consider visiting a national park or beach for the day off',
    ],
    fr: [
      'Suivez le discours sur l\'état de la nation du Président à la TV ou à la radio',
      'Vérifiez les itinéraires de marche des travailleurs et les fermetures de routes',
      'Planifiez une journée relaxante car la plupart des commerces seront fermés',
      'Faites vos courses à l\'avance — les supermarchés peuvent fermer',
      'Envisagez de visiter un parc national ou une plage pour le jour de congé',
    ],
    es: [
      'Sintonice el informe del estado de la nación del Presidente por TV o radio',
      'Verifique las rutas de marcha de los trabajadores y cierres de calles',
      'Planee un día relajante ya que la mayoría de los negocios estarán cerrados',
      'Abastézcase de víveres con anticipación — los supermercados pueden cerrar',
      'Considere visitar un parque nacional o playa para el día libre',
    ],
  },

  relatedHolidays: ['cr_independence-day', 'sv_labour-day', 'ni_labour-day'],

  seo: {
    en: {
      titleTemplate: 'Labour Day {year} Costa Rica — Countdown & Info',
      descriptionTemplate: 'When is Labour Day {year} in Costa Rica? Live countdown to May 1, State of the Nation, and workers\' rights info.',
      keywords: ['Labour Day Costa Rica', 'Día del Trabajo Costa Rica', 'May 1 Costa Rica', 'State of the Nation Costa Rica', 'Costa Rica holidays'],
    },
    fr: {
      titleTemplate: 'Fête du Travail {year} Costa Rica — Compte à rebours et info',
      descriptionTemplate: 'Quand est la Fête du Travail {year} au Costa Rica ? Compte à rebours, état de la nation et informations.',
      keywords: ['Fête du Travail Costa Rica', '1er mai Costa Rica', 'état de la nation Costa Rica', 'jours fériés Costa Rica', 'droits des travailleurs'],
    },
    es: {
      titleTemplate: 'Día del Trabajo {year} Costa Rica — Cuenta regresiva e info',
      descriptionTemplate: '¿Cuándo es el Día del Trabajo {year} en Costa Rica? Cuenta regresiva, informe del estado de la nación e info.',
      keywords: ['Día del Trabajo Costa Rica', '1 de mayo Costa Rica', 'informe estado nación Costa Rica', 'feriados Costa Rica', 'derechos laborales'],
    },
  },

  faq: [
    {
      question: { en: 'When is Labour Day {year} in Costa Rica?', fr: 'Quand est la Fête du Travail {year} au Costa Rica ?', es: '¿Cuándo es el Día del Trabajo {year} en Costa Rica?' },
      answer: {
        en: 'Labour Day {year} in Costa Rica is on {date}. It is always May 1 and is an official public holiday.',
        fr: 'La Fête du Travail {year} au Costa Rica est le {date}. C\'est toujours le 1er mai et c\'est un jour férié officiel.',
        es: 'El Día del Trabajo {year} en Costa Rica es el {date}. Siempre es el 1 de mayo y es un feriado oficial.',
      },
    },
    {
      question: { en: 'What happens on Labour Day in Costa Rica?', fr: 'Que se passe-t-il le jour de la Fête du Travail au Costa Rica ?', es: '¿Qué sucede el Día del Trabajo en Costa Rica?' },
      answer: {
        en: 'In addition to workers\' celebrations, the President of Costa Rica delivers the annual State of the Nation address to the Legislative Assembly on May 1, making it a unique civic holiday.',
        fr: 'En plus des célébrations des travailleurs, le Président du Costa Rica prononce le discours annuel sur l\'état de la nation devant l\'Assemblée législative le 1er mai, ce qui en fait un jour férié civique unique.',
        es: 'Además de las celebraciones de los trabajadores, el Presidente de Costa Rica pronuncia el informe anual del estado de la nación ante la Asamblea Legislativa el 1 de mayo, convirtiéndolo en un feriado cívico único.',
      },
    },
    {
      question: { en: 'What are Costa Rica\'s key labour reforms?', fr: 'Quelles sont les réformes du travail clés du Costa Rica ?', es: '¿Cuáles son las reformas laborales clave de Costa Rica?' },
      answer: {
        en: 'Costa Rica\'s landmark 1943 Labour Code established minimum wages, working hour limits, vacation rights, social security, and protections against unjust dismissal. These reforms remain the foundation of Costa Rican labor law.',
        fr: 'Le Code du Travail historique de 1943 du Costa Rica a établi des salaires minimums, des limites d\'heures de travail, des droits aux vacances, la sécurité sociale et des protections contre le licenciement injuste. Ces réformes restent la base du droit du travail costaricien.',
        es: 'El histórico Código de Trabajo de 1943 de Costa Rica estableció salarios mínimos, límites de horas de trabajo, derechos de vacaciones, seguridad social y protecciones contra el despido injusto. Estas reformas siguen siendo la base del derecho laboral costarricense.',
      },
    },
    {
      question: { en: 'Is Labour Day a public holiday in Costa Rica?', fr: 'La Fête du Travail est-elle un jour férié au Costa Rica ?', es: '¿Es el Día del Trabajo un feriado en Costa Rica?' },
      answer: {
        en: 'Yes, Labour Day on May 1 is an official public holiday in Costa Rica. Banks, government offices, and most businesses are closed.',
        fr: 'Oui, la Fête du Travail le 1er mai est un jour férié officiel au Costa Rica. Les banques, les bureaux gouvernementaux et la plupart des commerces sont fermés.',
        es: 'Sí, el Día del Trabajo el 1 de mayo es un feriado oficial en Costa Rica. Los bancos, oficinas gubernamentales y la mayoría de los negocios están cerrados.',
      },
    },
  ],

  colorTheme: 'spring',
  icon: '⚒️',
};

// ---------------------------------------------------------------------------
// Annexation of Guanacaste — July 25
// ---------------------------------------------------------------------------

const annexationGuanacaste: HolidayData = {
  id: 'cr_annexation-guanacaste',
  countryCode: 'cr',
  slugs: { en: 'annexation-of-guanacaste', fr: 'annexion-du-guanacaste', es: 'anexion-del-guanacaste' },
  names: { en: 'Annexation of Guanacaste', fr: 'Annexion du Guanacaste', es: 'Anexión del Guanacaste' },

  dateType: 'fixed',
  fixedMonth: 7,
  fixedDay: 25,

  descriptions: {
    en: 'The Annexation of Guanacaste on July 25 celebrates the day in 1824 when the Partido de Nicoya (present-day Guanacaste province) voluntarily chose to join Costa Rica rather than Nicaragua. The holiday features vibrant celebrations with folk music, traditional dance, and rodeos.',
    fr: "L'Annexion du Guanacaste le 25 juillet célèbre le jour de 1824 où le Partido de Nicoya (actuelle province du Guanacaste) a volontairement choisi de rejoindre le Costa Rica plutôt que le Nicaragua. La fête comprend des célébrations vibrantes avec de la musique folklorique, de la danse traditionnelle et des rodéos.",
    es: 'La Anexión del Guanacaste el 25 de julio celebra el día de 1824 en que el Partido de Nicoya (actual provincia de Guanacaste) eligió voluntariamente unirse a Costa Rica en vez de Nicaragua. La fiesta presenta celebraciones vibrantes con música folclórica, danza tradicional y rodeos.',
  },

  history: {
    en: "After Central American independence from Spain in 1821, the Partido de Nicoya — a region that had been part of the colonial jurisdiction of Nicaragua — faced a choice of which newly independent nation to join. On July 25, 1824, the local leaders voted to annex the territory to Costa Rica.\n\nThe decision was influenced by stronger trade ties with Costa Rica and a desire for the more stable governance that Costa Rica offered. The annexation significantly expanded Costa Rica's territory and gave it access to the Pacific coast's northwestern region.\n\nToday, Guanacaste is one of Costa Rica's most important provinces, known for its beaches, national parks, and distinctive cowboy (sabanero) culture. The July 25 celebration is especially vibrant in the cities of Liberia and Nicoya.",
    fr: "Après l'indépendance de l'Amérique centrale de l'Espagne en 1821, le Partido de Nicoya — une région qui avait fait partie de la juridiction coloniale du Nicaragua — a dû choisir quelle nation nouvellement indépendante rejoindre. Le 25 juillet 1824, les dirigeants locaux ont voté pour annexer le territoire au Costa Rica.\n\nLa décision a été influencée par des liens commerciaux plus forts avec le Costa Rica et un désir de la gouvernance plus stable que le Costa Rica offrait. L'annexion a considérablement élargi le territoire du Costa Rica et lui a donné accès à la région nord-ouest de la côte Pacifique.\n\nAujourd'hui, le Guanacaste est l'une des provinces les plus importantes du Costa Rica, connue pour ses plages, ses parcs nationaux et sa culture distinctive de cowboy (sabanero). La célébration du 25 juillet est particulièrement vibrante dans les villes de Liberia et Nicoya.",
    es: "Después de la independencia centroamericana de España en 1821, el Partido de Nicoya — una región que había sido parte de la jurisdicción colonial de Nicaragua — enfrentó la decisión de a cuál nación recién independiente unirse. El 25 de julio de 1824, los líderes locales votaron por anexar el territorio a Costa Rica.\n\nLa decisión fue influenciada por lazos comerciales más fuertes con Costa Rica y un deseo de la gobernanza más estable que Costa Rica ofrecía. La anexión expandió significativamente el territorio de Costa Rica y le dio acceso a la región noroeste de la costa del Pacífico.\n\nHoy, Guanacaste es una de las provincias más importantes de Costa Rica, conocida por sus playas, parques nacionales y su distintiva cultura vaquera (sabanera). La celebración del 25 de julio es especialmente vibrante en las ciudades de Liberia y Nicoya.",
  },

  traditions: {
    en: [
      'Attending traditional bullfights (corridas a la tica) and rodeos',
      'Watching folk dance performances featuring the Punto Guanacasteco',
      'Enjoying live marimba music and traditional Guanacastecan songs',
      'Participating in parades and horse shows (topes)',
      'Eating traditional foods like arroz de maíz, tamales, and rosquillas',
      'Attending civic ceremonies and cultural festivals in Liberia and Nicoya',
    ],
    fr: [
      'Assister à des corridas traditionnelles (corridas a la tica) et des rodéos',
      'Regarder des spectacles de danse folklorique présentant le Punto Guanacasteco',
      'Écouter de la musique de marimba en direct et des chansons traditionnelles du Guanacaste',
      'Participer à des défilés et des spectacles équestres (topes)',
      'Manger des plats traditionnels comme l\'arroz de maíz, les tamales et les rosquillas',
      'Assister à des cérémonies civiques et des festivals culturels à Liberia et Nicoya',
    ],
    es: [
      'Asistir a corridas de toros tradicionales (corridas a la tica) y rodeos',
      'Ver presentaciones de danza folclórica con el Punto Guanacasteco',
      'Disfrutar de música de marimba en vivo y canciones tradicionales guanacastecas',
      'Participar en desfiles y shows ecuestres (topes)',
      'Comer comidas tradicionales como arroz de maíz, tamales y rosquillas',
      'Asistir a ceremonias cívicas y festivales culturales en Liberia y Nicoya',
    ],
  },

  funFacts: {
    en: [
      'The Punto Guanacasteco is the national folk dance of Costa Rica and is especially performed during the Annexation celebrations.',
      'The people of Nicoya voted freely to join Costa Rica — making the Annexation a voluntary union rather than a conquest.',
      'Guanacaste is home to the Nicoya Peninsula, one of the world\'s five Blue Zones where people live exceptionally long lives.',
      'The Guanacaste tree (Enterolobium cyclocarpum) is Costa Rica\'s national tree, named after the province.',
      'Liberia, the capital of Guanacaste, is known as the "White City" due to its historic white-walled colonial buildings.',
    ],
    fr: [
      'Le Punto Guanacasteco est la danse folklorique nationale du Costa Rica et est particulièrement exécuté lors des célébrations de l\'Annexion.',
      'Les habitants de Nicoya ont voté librement pour rejoindre le Costa Rica — faisant de l\'Annexion une union volontaire plutôt qu\'une conquête.',
      'Le Guanacaste abrite la péninsule de Nicoya, l\'une des cinq Zones Bleues du monde où les gens vivent exceptionnellement longtemps.',
      'L\'arbre guanacaste (Enterolobium cyclocarpum) est l\'arbre national du Costa Rica, nommé d\'après la province.',
      'Liberia, la capitale du Guanacaste, est connue comme la « Ville Blanche » en raison de ses bâtiments coloniaux historiques aux murs blancs.',
    ],
    es: [
      'El Punto Guanacasteco es la danza folclórica nacional de Costa Rica y se ejecuta especialmente durante las celebraciones de la Anexión.',
      'Los habitantes de Nicoya votaron libremente para unirse a Costa Rica — haciendo de la Anexión una unión voluntaria en vez de una conquista.',
      'Guanacaste alberga la Península de Nicoya, una de las cinco Zonas Azules del mundo donde las personas viven excepcionalmente largos años.',
      'El árbol de guanacaste (Enterolobium cyclocarpum) es el árbol nacional de Costa Rica, nombrado por la provincia.',
      'Liberia, la capital de Guanacaste, es conocida como la "Ciudad Blanca" debido a sus edificios coloniales históricos de paredes blancas.',
    ],
  },

  planningChecklist: {
    en: [
      'Travel to Liberia or Nicoya for the most authentic celebrations',
      'Book accommodations early — Guanacaste is a popular tourist destination',
      'Check schedules for rodeos, topes, and cultural performances',
      'Try traditional Guanacastecan food like arroz de maíz and rosquillas',
      'Bring comfortable shoes for walking and dancing at outdoor events',
    ],
    fr: [
      'Voyagez à Liberia ou Nicoya pour les célébrations les plus authentiques',
      'Réservez les hébergements tôt — le Guanacaste est une destination touristique populaire',
      'Consultez les horaires des rodéos, topes et spectacles culturels',
      'Essayez la cuisine traditionnelle guanacastèque comme l\'arroz de maíz et les rosquillas',
      'Apportez des chaussures confortables pour marcher et danser lors des événements en plein air',
    ],
    es: [
      'Viaje a Liberia o Nicoya para las celebraciones más auténticas',
      'Reserve alojamiento temprano — Guanacaste es un destino turístico popular',
      'Consulte los horarios de rodeos, topes y presentaciones culturales',
      'Pruebe la comida tradicional guanacasteca como arroz de maíz y rosquillas',
      'Lleve zapatos cómodos para caminar y bailar en los eventos al aire libre',
    ],
  },

  relatedHolidays: ['cr_independence-day', 'cr_juan-santamaria-day'],

  seo: {
    en: {
      titleTemplate: 'Annexation of Guanacaste {year} — Countdown & Celebrations',
      descriptionTemplate: 'When is the Annexation of Guanacaste {year}? Live countdown to July 25, history, folk traditions, and celebration guide.',
      keywords: ['Annexation of Guanacaste', 'July 25 Costa Rica', 'Guanacaste Day', 'Punto Guanacasteco', 'Costa Rica holidays'],
    },
    fr: {
      titleTemplate: 'Annexion du Guanacaste {year} — Compte à rebours et célébrations',
      descriptionTemplate: 'Quand est l\'Annexion du Guanacaste {year} ? Compte à rebours, histoire, traditions folkloriques et guide.',
      keywords: ['Annexion du Guanacaste', '25 juillet Costa Rica', 'Jour du Guanacaste', 'Punto Guanacasteco', 'jours fériés Costa Rica'],
    },
    es: {
      titleTemplate: 'Anexión del Guanacaste {year} — Cuenta regresiva y celebraciones',
      descriptionTemplate: '¿Cuándo es la Anexión del Guanacaste {year}? Cuenta regresiva, historia, tradiciones folclóricas y guía.',
      keywords: ['Anexión del Guanacaste', '25 de julio Costa Rica', 'Día de Guanacaste', 'Punto Guanacasteco', 'feriados Costa Rica'],
    },
  },

  faq: [
    {
      question: { en: 'When is the Annexation of Guanacaste {year}?', fr: 'Quand est l\'Annexion du Guanacaste {year} ?', es: '¿Cuándo es la Anexión del Guanacaste {year}?' },
      answer: {
        en: 'The Annexation of Guanacaste {year} is on {date}. It is always July 25.',
        fr: 'L\'Annexion du Guanacaste {year} est le {date}. C\'est toujours le 25 juillet.',
        es: 'La Anexión del Guanacaste {year} es el {date}. Siempre es el 25 de julio.',
      },
    },
    {
      question: { en: 'What is the Annexation of Guanacaste?', fr: 'Qu\'est-ce que l\'Annexion du Guanacaste ?', es: '¿Qué es la Anexión del Guanacaste?' },
      answer: {
        en: 'On July 25, 1824, the Partido de Nicoya (present-day Guanacaste) voluntarily voted to join Costa Rica instead of Nicaragua. This peaceful annexation is celebrated as a national holiday.',
        fr: 'Le 25 juillet 1824, le Partido de Nicoya (actuel Guanacaste) a volontairement voté pour rejoindre le Costa Rica au lieu du Nicaragua. Cette annexion pacifique est célébrée comme un jour férié national.',
        es: 'El 25 de julio de 1824, el Partido de Nicoya (actual Guanacaste) votó voluntariamente para unirse a Costa Rica en vez de Nicaragua. Esta anexión pacífica se celebra como feriado nacional.',
      },
    },
    {
      question: { en: 'What is the Punto Guanacasteco?', fr: 'Qu\'est-ce que le Punto Guanacasteco ?', es: '¿Qué es el Punto Guanacasteco?' },
      answer: {
        en: 'The Punto Guanacasteco is Costa Rica\'s national folk dance, originating from the Guanacaste region. It features lively couples dancing to marimba music and is performed widely during the Annexation celebrations.',
        fr: 'Le Punto Guanacasteco est la danse folklorique nationale du Costa Rica, originaire de la région du Guanacaste. Il présente des couples dansant sur de la musique de marimba et est largement exécuté pendant les célébrations de l\'Annexion.',
        es: 'El Punto Guanacasteco es la danza folclórica nacional de Costa Rica, originaria de la región de Guanacaste. Presenta parejas bailando al son de la marimba y se ejecuta ampliamente durante las celebraciones de la Anexión.',
      },
    },
    {
      question: { en: 'Where are the best celebrations for the Annexation of Guanacaste?', fr: 'Où sont les meilleures célébrations de l\'Annexion du Guanacaste ?', es: '¿Dónde están las mejores celebraciones de la Anexión del Guanacaste?' },
      answer: {
        en: 'The cities of Liberia (capital of Guanacaste) and Nicoya host the most authentic and vibrant celebrations, featuring rodeos, folk dancing, marimba music, and traditional foods.',
        fr: 'Les villes de Liberia (capitale du Guanacaste) et Nicoya accueillent les célébrations les plus authentiques et vibrantes, avec des rodéos, de la danse folklorique, de la musique de marimba et des plats traditionnels.',
        es: 'Las ciudades de Liberia (capital de Guanacaste) y Nicoya acogen las celebraciones más auténticas y vibrantes, con rodeos, danza folclórica, música de marimba y comidas tradicionales.',
      },
    },
  ],

  colorTheme: 'summer',
  icon: '🎉',
};

// ---------------------------------------------------------------------------
// Independence Day — September 15
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'cr_independence-day',
  countryCode: 'cr',
  slugs: { en: 'independence-day', fr: 'jour-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Jour de l'Indépendance", es: 'Día de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 9,
  fixedDay: 15,

  descriptions: {
    en: "Independence Day on September 15 celebrates Costa Rica's independence from Spain, declared in 1821. The holiday is uniquely marked by the tradition of lantern parades (desfiles de faroles), where children carry handmade lanterns through the streets at dusk.",
    fr: "Le Jour de l'Indépendance le 15 septembre célèbre l'indépendance du Costa Rica de l'Espagne, déclarée en 1821. La fête est uniquement marquée par la tradition des défilés de lanternes (desfiles de faroles), où les enfants portent des lanternes faites à la main dans les rues au crépuscule.",
    es: "El Día de la Independencia el 15 de septiembre celebra la independencia de Costa Rica de España, declarada en 1821. La fiesta se distingue por la tradición de los desfiles de faroles, donde los niños llevan faroles hechos a mano por las calles al atardecer.",
  },

  history: {
    en: "Costa Rica declared independence from Spain on September 15, 1821, as part of the broader Central American independence movement. The news of independence actually took over a month to reach Costa Rica from Guatemala City, arriving via messenger on October 13, 1821.\n\nAfter a brief period under the Mexican Empire, Costa Rica joined the Federal Republic of Central America in 1823. When the federation dissolved, Costa Rica became fully independent in 1838. The country has since developed a strong democratic tradition and is one of the oldest democracies in Latin America.\n\nThe lantern parade tradition (desfile de faroles) symbolizes the arrival of the news of independence, as the story goes that the message was carried through the night by torchlight. Today, children across the country spend weeks making colorful paper lanterns for the evening parade.",
    fr: "Le Costa Rica a déclaré son indépendance de l'Espagne le 15 septembre 1821, dans le cadre du mouvement d'indépendance centraméricain plus large. La nouvelle de l'indépendance a en fait mis plus d'un mois pour atteindre le Costa Rica depuis Guatemala City, arrivant par messager le 13 octobre 1821.\n\nAprès une brève période sous l'Empire mexicain, le Costa Rica a rejoint la République fédérale d'Amérique centrale en 1823. Lorsque la fédération s'est dissoute, le Costa Rica est devenu pleinement indépendant en 1838. Le pays a depuis développé une forte tradition démocratique et est l'une des plus anciennes démocraties d'Amérique latine.\n\nLa tradition du défilé de lanternes (desfile de faroles) symbolise l'arrivée de la nouvelle de l'indépendance, car l'histoire raconte que le message a été porté de nuit à la lumière des torches. Aujourd'hui, les enfants de tout le pays passent des semaines à fabriquer des lanternes en papier coloré pour le défilé du soir.",
    es: "Costa Rica declaró su independencia de España el 15 de septiembre de 1821, como parte del movimiento de independencia centroamericano más amplio. La noticia de la independencia tardó más de un mes en llegar a Costa Rica desde la Ciudad de Guatemala, llegando por mensajero el 13 de octubre de 1821.\n\nDespués de un breve período bajo el Imperio Mexicano, Costa Rica se unió a la República Federal de Centroamérica en 1823. Cuando la federación se disolvió, Costa Rica se independizó plenamente en 1838. El país ha desarrollado desde entonces una fuerte tradición democrática y es una de las democracias más antiguas de América Latina.\n\nLa tradición del desfile de faroles simboliza la llegada de la noticia de la independencia, ya que la historia cuenta que el mensaje fue llevado de noche a la luz de las antorchas. Hoy, los niños de todo el país pasan semanas haciendo coloridos faroles de papel para el desfile nocturno.",
  },

  traditions: {
    en: [
      'Carrying handmade lanterns (faroles) in evening parades across the country',
      'Singing the national anthem at schools and civic ceremonies at 6:00 PM',
      'Watching school marching band parades during the day',
      'Decorating homes and schools with Costa Rican flags',
      'Making faroles at home and in school — a beloved crafting tradition',
      'Attending the arrival of the Independence Torch relay',
      'Listening to the national anthem played on loudspeakers across the country at 6 PM',
    ],
    fr: [
      'Porter des lanternes faites à la main (faroles) dans les défilés du soir à travers le pays',
      'Chanter l\'hymne national dans les écoles et lors des cérémonies civiques à 18h00',
      'Regarder les défilés des fanfares scolaires pendant la journée',
      'Décorer les maisons et les écoles avec des drapeaux costariciens',
      'Fabriquer des faroles à la maison et à l\'école — une tradition d\'artisanat bien-aimée',
      'Assister à l\'arrivée du relais de la Torche de l\'Indépendance',
      'Écouter l\'hymne national diffusé par haut-parleurs dans tout le pays à 18h',
    ],
    es: [
      'Llevar faroles hechos a mano en desfiles nocturnos por todo el país',
      'Cantar el himno nacional en escuelas y ceremonias cívicas a las 6:00 PM',
      'Ver los desfiles de bandas de guerra escolares durante el día',
      'Decorar hogares y escuelas con banderas costarricenses',
      'Hacer faroles en casa y en la escuela — una querida tradición de manualidades',
      'Asistir a la llegada del relevo de la Antorcha de la Independencia',
      'Escuchar el himno nacional transmitido por altoparlantes en todo el país a las 6 PM',
    ],
  },

  funFacts: {
    en: [
      'At exactly 6:00 PM on September 15, the entire country stops to sing the national anthem — it is broadcast on every radio and TV station.',
      'The lantern parade tradition represents the torchlight journey of the independence news from Guatemala to Costa Rica.',
      'Costa Rica\'s independence was so peaceful that it is sometimes called the "independence by mail" since the news arrived by letter.',
      'Costa Rica abolished its army in 1948, making it one of the few countries in the world without a military.',
      'Children and families spend weeks making elaborate faroles, and schools often hold competitions for the most creative designs.',
    ],
    fr: [
      'À exactement 18h00 le 15 septembre, tout le pays s\'arrête pour chanter l\'hymne national — il est diffusé sur toutes les stations de radio et de télévision.',
      'La tradition du défilé de lanternes représente le voyage à la lumière des torches de la nouvelle de l\'indépendance du Guatemala au Costa Rica.',
      'L\'indépendance du Costa Rica a été si pacifique qu\'elle est parfois appelée « l\'indépendance par courrier » puisque la nouvelle est arrivée par lettre.',
      'Le Costa Rica a aboli son armée en 1948, en faisant l\'un des rares pays au monde sans armée.',
      'Les enfants et les familles passent des semaines à fabriquer des faroles élaborés, et les écoles organisent souvent des concours pour les designs les plus créatifs.',
    ],
    es: [
      'A las 6:00 PM exactas del 15 de septiembre, todo el país se detiene para cantar el himno nacional — se transmite en todas las estaciones de radio y televisión.',
      'La tradición del desfile de faroles representa el viaje a la luz de las antorchas de la noticia de la independencia desde Guatemala a Costa Rica.',
      'La independencia de Costa Rica fue tan pacífica que a veces se le llama la "independencia por correo" ya que la noticia llegó por carta.',
      'Costa Rica abolió su ejército en 1948, convirtiéndolo en uno de los pocos países del mundo sin fuerzas armadas.',
      'Los niños y familias pasan semanas haciendo faroles elaborados, y las escuelas a menudo realizan concursos para los diseños más creativos.',
    ],
  },

  planningChecklist: {
    en: [
      'Help children make faroles (lanterns) in the weeks leading up to September 15',
      'Check the schedule for lantern parades and marching band events in your area',
      'Be ready to sing the national anthem at 6:00 PM — it is a nationwide tradition',
      'Decorate your home with Costa Rican flags and patriotic colors',
      'Attend the torch arrival ceremony on the evening of September 14',
    ],
    fr: [
      'Aidez les enfants à fabriquer des faroles (lanternes) dans les semaines précédant le 15 septembre',
      'Consultez l\'horaire des défilés de lanternes et des fanfares dans votre région',
      'Soyez prêt à chanter l\'hymne national à 18h00 — c\'est une tradition nationale',
      'Décorez votre maison avec des drapeaux costariciens et des couleurs patriotiques',
      'Assistez à la cérémonie d\'arrivée de la torche le soir du 14 septembre',
    ],
    es: [
      'Ayude a los niños a hacer faroles en las semanas previas al 15 de septiembre',
      'Consulte el horario de los desfiles de faroles y bandas de guerra en su área',
      'Esté listo para cantar el himno nacional a las 6:00 PM — es una tradición nacional',
      'Decore su hogar con banderas costarricenses y colores patrios',
      'Asista a la ceremonia de llegada de la antorcha la noche del 14 de septiembre',
    ],
  },

  relatedHolidays: ['sv_independence-day', 'ni_independence-day', 'pa_independence-from-spain'],

  seo: {
    en: {
      titleTemplate: 'Independence Day {year} Costa Rica — Countdown & Guide',
      descriptionTemplate: 'When is Independence Day {year} in Costa Rica? Live countdown to September 15, lantern parades, traditions, and guide.',
      keywords: ['Independence Day Costa Rica', 'September 15 Costa Rica', 'desfile de faroles', 'Costa Rica lantern parade', 'Costa Rica holidays'],
    },
    fr: {
      titleTemplate: "Jour de l'Indépendance {year} Costa Rica — Compte à rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'Indépendance {year} au Costa Rica ? Compte à rebours, défilés de lanternes, traditions et guide.",
      keywords: ["Jour de l'Indépendance Costa Rica", '15 septembre Costa Rica', 'desfile de faroles', 'défilé lanternes Costa Rica', 'jours fériés Costa Rica'],
    },
    es: {
      titleTemplate: 'Día de la Independencia {year} Costa Rica — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Día de la Independencia {year} en Costa Rica? Cuenta regresiva, desfiles de faroles, tradiciones y guía.',
      keywords: ['Día de la Independencia Costa Rica', '15 de septiembre Costa Rica', 'desfile de faroles', 'faroles Costa Rica', 'feriados Costa Rica'],
    },
  },

  faq: [
    {
      question: { en: 'When is Independence Day {year} in Costa Rica?', fr: "Quand est le Jour de l'Indépendance {year} au Costa Rica ?", es: '¿Cuándo es el Día de la Independencia {year} en Costa Rica?' },
      answer: {
        en: 'Independence Day {year} in Costa Rica is on {date}. It is always September 15.',
        fr: "Le Jour de l'Indépendance {year} au Costa Rica est le {date}. C'est toujours le 15 septembre.",
        es: 'El Día de la Independencia {year} en Costa Rica es el {date}. Siempre es el 15 de septiembre.',
      },
    },
    {
      question: { en: 'What are faroles?', fr: 'Que sont les faroles ?', es: '¿Qué son los faroles?' },
      answer: {
        en: 'Faroles are handmade paper lanterns that children carry in evening parades on Independence Day. They symbolize the torchlight journey of the independence news from Guatemala to Costa Rica and are a beloved crafting tradition.',
        fr: 'Les faroles sont des lanternes en papier faites à la main que les enfants portent dans les défilés du soir le Jour de l\'Indépendance. Elles symbolisent le voyage à la lumière des torches de la nouvelle de l\'indépendance du Guatemala au Costa Rica.',
        es: 'Los faroles son linternas de papel hechas a mano que los niños llevan en desfiles nocturnos el Día de la Independencia. Simbolizan el viaje a la luz de las antorchas de la noticia de la independencia desde Guatemala a Costa Rica y son una querida tradición de manualidades.',
      },
    },
    {
      question: { en: 'What happens at 6 PM on September 15?', fr: 'Que se passe-t-il à 18h le 15 septembre ?', es: '¿Qué sucede a las 6 PM el 15 de septiembre?' },
      answer: {
        en: 'At exactly 6:00 PM on September 15, the Costa Rican national anthem is broadcast on every radio and TV station, and citizens across the country stop what they are doing to sing along. It is one of the most patriotic moments of the year.',
        fr: 'À exactement 18h00 le 15 septembre, l\'hymne national costaricien est diffusé sur toutes les stations de radio et de télévision, et les citoyens de tout le pays s\'arrêtent pour chanter ensemble. C\'est l\'un des moments les plus patriotiques de l\'année.',
        es: 'A las 6:00 PM exactas del 15 de septiembre, el himno nacional costarricense se transmite en todas las estaciones de radio y televisión, y los ciudadanos de todo el país se detienen para cantarlo. Es uno de los momentos más patrióticos del año.',
      },
    },
    {
      question: { en: 'Is Independence Day a public holiday in Costa Rica?', fr: "Le Jour de l'Indépendance est-il un jour férié au Costa Rica ?", es: '¿Es el Día de la Independencia un feriado en Costa Rica?' },
      answer: {
        en: 'Yes, September 15 is an official public holiday in Costa Rica. Banks, government offices, and most businesses are closed.',
        fr: "Oui, le 15 septembre est un jour férié officiel au Costa Rica. Les banques, les bureaux gouvernementaux et la plupart des commerces sont fermés.",
        es: 'Sí, el 15 de septiembre es un feriado oficial en Costa Rica. Los bancos, oficinas gubernamentales y la mayoría de los negocios están cerrados.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '🇨🇷',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'cr_christmas',
  countryCode: 'cr',
  slugs: { en: 'christmas', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noël', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: 'Christmas Day on December 25 is celebrated across Costa Rica with family gatherings, traditional foods like tamales and rompope, nativity scenes (Portal), and midnight Mass. The warm "Pura Vida" spirit makes Costa Rican Christmas uniquely welcoming.',
    fr: "Noël le 25 décembre est célébré à travers le Costa Rica avec des réunions familiales, des plats traditionnels comme les tamales et le rompope, des crèches (Portal) et la messe de minuit. L'esprit chaleureux « Pura Vida » rend le Noël costaricien uniquement accueillant.",
    es: 'La Navidad el 25 de diciembre se celebra en todo Costa Rica con reuniones familiares, comidas tradicionales como tamales y rompope, nacimientos (Portal) y misa de gallo. El cálido espíritu "Pura Vida" hace que la Navidad costarricense sea especialmente acogedora.',
  },

  history: {
    en: "Christmas in Costa Rica has been celebrated since the colonial era, with traditions evolving to reflect the country's unique cultural identity. The centerpiece of Costa Rican Christmas is the Portal — an elaborate nativity scene that families set up in their homes, often taking up an entire room.\n\nThe tradition of making tamales for Christmas is a family affair that brings multiple generations together. Families gather over several days to prepare the corn dough, fill it with seasoned pork or chicken, wrap them in plantain leaves, and boil them for hours.\n\nRompope, a Costa Rican eggnog made with eggs, milk, sugar, and liquor, is the traditional Christmas drink. The Festival de la Luz (Festival of Light), a spectacular nighttime parade in San José held in mid-December, has become a beloved modern addition to the Christmas season.",
    fr: "Noël au Costa Rica est célébré depuis l'époque coloniale, avec des traditions évoluant pour refléter l'identité culturelle unique du pays. La pièce maîtresse du Noël costaricien est le Portal — une crèche élaborée que les familles installent dans leurs maisons, occupant souvent une pièce entière.\n\nLa tradition de faire des tamales pour Noël est une affaire familiale qui rassemble plusieurs générations. Les familles se réunissent pendant plusieurs jours pour préparer la pâte de maïs, la remplir de porc ou de poulet assaisonné, les envelopper dans des feuilles de plantain et les faire bouillir pendant des heures.\n\nLe rompope, un lait de poule costaricien fait d'œufs, de lait, de sucre et d'alcool, est la boisson de Noël traditionnelle. Le Festival de la Luz (Festival de la Lumière), un spectaculaire défilé nocturne à San José tenu en mi-décembre, est devenu un ajout moderne bien-aimé à la saison de Noël.",
    es: "La Navidad en Costa Rica se celebra desde la época colonial, con tradiciones que han evolucionado para reflejar la identidad cultural única del país. La pieza central de la Navidad costarricense es el Portal — un nacimiento elaborado que las familias montan en sus hogares, a menudo ocupando una habitación entera.\n\nLa tradición de hacer tamales para Navidad es un asunto familiar que reúne a múltiples generaciones. Las familias se reúnen durante varios días para preparar la masa de maíz, rellenarla con cerdo o pollo sazonado, envolverlos en hojas de plátano y hervirlos durante horas.\n\nEl rompope, un ponche costarricense hecho con huevos, leche, azúcar y licor, es la bebida navideña tradicional. El Festival de la Luz, un espectacular desfile nocturno en San José celebrado a mediados de diciembre, se ha convertido en una querida adición moderna a la temporada navideña.",
  },

  traditions: {
    en: [
      'Setting up an elaborate Portal (nativity scene) in the home',
      'Preparing tamales as a family over several days',
      'Drinking rompope (Costa Rican eggnog)',
      'Attending midnight Mass (Misa de Gallo) on Christmas Eve',
      'Exchanging gifts at midnight on Nochebuena',
      'Attending the Festival de la Luz parade in San José',
      'Setting off fireworks at midnight on Christmas Eve',
    ],
    fr: [
      'Installer un Portal (crèche) élaboré dans la maison',
      'Préparer des tamales en famille pendant plusieurs jours',
      'Boire du rompope (lait de poule costaricien)',
      'Assister à la messe de minuit (Misa de Gallo) la veille de Noël',
      'Échanger des cadeaux à minuit à la Nochebuena',
      'Assister au défilé du Festival de la Luz à San José',
      'Lancer des feux d\'artifice à minuit la veille de Noël',
    ],
    es: [
      'Montar un Portal (nacimiento) elaborado en el hogar',
      'Preparar tamales en familia durante varios días',
      'Beber rompope (ponche costarricense)',
      'Asistir a la misa de gallo en Nochebuena',
      'Intercambiar regalos a medianoche en Nochebuena',
      'Asistir al desfile del Festival de la Luz en San José',
      'Lanzar fuegos artificiales a medianoche en Nochebuena',
    ],
  },

  funFacts: {
    en: [
      'The Festival de la Luz in San José features illuminated floats and attracts hundreds of thousands of spectators each December.',
      'Costa Rican tamales are wrapped in plantain leaves (not corn husks like Mexican tamales) and are tied with string.',
      'Some Costa Rican families build Portales (nativity scenes) so elaborate they include running water, real plants, and miniature villages.',
      'Rompope is sometimes called the "Costa Rican eggnog" and is typically stronger than its North American counterpart.',
      'Christmas in Costa Rica falls during the dry season, so celebrations often feature sunny, warm weather.',
    ],
    fr: [
      'Le Festival de la Luz à San José présente des chars illuminés et attire des centaines de milliers de spectateurs chaque décembre.',
      'Les tamales costariciens sont enveloppés dans des feuilles de plantain (pas des enveloppes de maïs comme les tamales mexicains) et sont attachés avec de la ficelle.',
      'Certaines familles costariciennes construisent des Portales (crèches) si élaborés qu\'ils incluent de l\'eau courante, de vraies plantes et des villages miniatures.',
      'Le rompope est parfois appelé le « lait de poule costaricien » et est généralement plus fort que son homologue nord-américain.',
      'Noël au Costa Rica tombe pendant la saison sèche, donc les célébrations se déroulent souvent par temps ensoleillé et chaud.',
    ],
    es: [
      'El Festival de la Luz en San José presenta carrozas iluminadas y atrae a cientos de miles de espectadores cada diciembre.',
      'Los tamales costarricenses se envuelven en hojas de plátano (no en hojas de maíz como los tamales mexicanos) y se atan con cuerda.',
      'Algunas familias costarricenses construyen Portales (nacimientos) tan elaborados que incluyen agua corriente, plantas reales y pueblos en miniatura.',
      'El rompope a veces se llama el "ponche de huevo costarricense" y es típicamente más fuerte que su contraparte norteamericana.',
      'La Navidad en Costa Rica cae durante la estación seca, por lo que las celebraciones a menudo presentan clima soleado y cálido.',
    ],
  },

  planningChecklist: {
    en: [
      'Begin preparing tamales several days before Christmas with family',
      'Set up the Portal (nativity scene) in early December',
      'Attend the Festival de la Luz parade in San José in mid-December',
      'Purchase gifts and rompope ingredients well in advance',
      'Stock up on fireworks for the midnight celebration on Nochebuena',
    ],
    fr: [
      'Commencez à préparer les tamales plusieurs jours avant Noël en famille',
      'Installez le Portal (crèche) début décembre',
      'Assistez au défilé du Festival de la Luz à San José mi-décembre',
      'Achetez les cadeaux et les ingrédients du rompope bien à l\'avance',
      'Faites provision de feux d\'artifice pour la célébration de minuit à la Nochebuena',
    ],
    es: [
      'Comience a preparar los tamales varios días antes de Navidad en familia',
      'Monte el Portal (nacimiento) a principios de diciembre',
      'Asista al desfile del Festival de la Luz en San José a mediados de diciembre',
      'Compre regalos e ingredientes del rompope con anticipación',
      'Abastézcase de fuegos artificiales para la celebración de medianoche en Nochebuena',
    ],
  },

  relatedHolidays: ['cr_new-years-day', 'cr_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Christmas {year} Costa Rica — Countdown & Traditions',
      descriptionTemplate: 'When is Christmas {year} in Costa Rica? Live countdown, tamales, Festival de la Luz, and Costa Rican Christmas traditions.',
      keywords: ['Christmas Costa Rica', 'Navidad Costa Rica', 'Costa Rican tamales', 'Festival de la Luz', 'rompope'],
    },
    fr: {
      titleTemplate: 'Noël {year} Costa Rica — Compte à rebours et traditions',
      descriptionTemplate: 'Quand est Noël {year} au Costa Rica ? Compte à rebours, tamales, Festival de la Luz et traditions de Noël.',
      keywords: ['Noël Costa Rica', 'Navidad Costa Rica', 'tamales costariciens', 'Festival de la Luz', 'rompope'],
    },
    es: {
      titleTemplate: 'Navidad {year} Costa Rica — Cuenta regresiva y tradiciones',
      descriptionTemplate: '¿Cuándo es Navidad {year} en Costa Rica? Cuenta regresiva, tamales, Festival de la Luz y tradiciones navideñas.',
      keywords: ['Navidad Costa Rica', 'tamales navideños Costa Rica', 'Festival de la Luz', 'rompope', 'tradiciones navideñas Costa Rica'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in Costa Rica?', fr: 'Quand est Noël {year} au Costa Rica ?', es: '¿Cuándo es Navidad {year} en Costa Rica?' },
      answer: {
        en: 'Christmas {year} in Costa Rica is on {date}. It is always December 25.',
        fr: 'Noël {year} au Costa Rica est le {date}. C\'est toujours le 25 décembre.',
        es: 'Navidad {year} en Costa Rica es el {date}. Siempre es el 25 de diciembre.',
      },
    },
    {
      question: { en: 'What is the Festival de la Luz?', fr: 'Qu\'est-ce que le Festival de la Luz ?', es: '¿Qué es el Festival de la Luz?' },
      answer: {
        en: 'The Festival de la Luz (Festival of Light) is a spectacular nighttime parade in San José held in mid-December. It features illuminated floats, marching bands, and performers, attracting hundreds of thousands of spectators.',
        fr: 'Le Festival de la Luz (Festival de la Lumière) est un spectaculaire défilé nocturne à San José tenu mi-décembre. Il présente des chars illuminés, des fanfares et des artistes, attirant des centaines de milliers de spectateurs.',
        es: 'El Festival de la Luz es un espectacular desfile nocturno en San José celebrado a mediados de diciembre. Presenta carrozas iluminadas, bandas de guerra y artistas, atrayendo a cientos de miles de espectadores.',
      },
    },
    {
      question: { en: 'What is a Portal?', fr: 'Qu\'est-ce qu\'un Portal ?', es: '¿Qué es un Portal?' },
      answer: {
        en: 'A Portal is a Costa Rican nativity scene set up in homes during the Christmas season. They range from simple displays to elaborate scenes with running water, real plants, and miniature villages occupying entire rooms.',
        fr: 'Un Portal est une crèche costaricienne installée dans les maisons pendant la saison de Noël. Ils vont de simples présentations à des scènes élaborées avec de l\'eau courante, de vraies plantes et des villages miniatures occupant des pièces entières.',
        es: 'Un Portal es un nacimiento costarricense que se monta en los hogares durante la temporada navideña. Van desde exhibiciones simples hasta escenas elaboradas con agua corriente, plantas reales y pueblos en miniatura que ocupan habitaciones enteras.',
      },
    },
    {
      question: { en: 'What is rompope?', fr: 'Qu\'est-ce que le rompope ?', es: '¿Qué es el rompope?' },
      answer: {
        en: 'Rompope is a traditional Costa Rican Christmas drink similar to eggnog, made with eggs, milk, sugar, vanilla, and liquor (typically rum or guaro). It is thicker and often stronger than North American eggnog.',
        fr: 'Le rompope est une boisson de Noël traditionnelle costaricienne similaire au lait de poule, faite d\'œufs, de lait, de sucre, de vanille et d\'alcool (généralement du rhum ou du guaro). Il est plus épais et souvent plus fort que le lait de poule nord-américain.',
        es: 'El rompope es una bebida navideña tradicional costarricense similar al ponche de huevo, hecha con huevos, leche, azúcar, vainilla y licor (típicamente ron o guaro). Es más espeso y a menudo más fuerte que el ponche de huevo norteamericano.',
      },
    },
  ],

  colorTheme: 'christmas',
  icon: '🎄',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const crHolidays: HolidayData[] = [
  newYearsDay,
  juanSantamariaDay,
  labourDay,
  annexationGuanacaste,
  independenceDay,
  christmas,
];

export default crHolidays;
