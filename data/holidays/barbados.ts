/**
 * Barbados holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { nthWeekday } from './_shared-dates';

// ---------------------------------------------------------------------------
// Errol Barrow Day — January 21
// ---------------------------------------------------------------------------

const errolBarrowDay: HolidayData = {
  id: 'bb_errol-barrow-day',
  countryCode: 'bb',
  slugs: { en: 'errol-barrow-day', fr: 'journee-errol-barrow', es: 'dia-de-errol-barrow' },
  names: { en: 'Errol Barrow Day', fr: 'Journée Errol Barrow', es: 'Día de Errol Barrow' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 21,

  descriptions: {
    en: 'Errol Barrow Day on January 21 honors the Right Excellent Errol Walton Barrow, the founding father of Barbadian independence. It is a national holiday celebrated with ceremonies, cultural events, and reflections on the legacy of the man who led Barbados to independence in 1966.',
    fr: 'La Journée Errol Barrow, le 21 janvier, rend hommage au Très Excellent Errol Walton Barrow, père fondateur de l\'indépendance de la Barbade. C\'est un jour férié national célébré par des cérémonies, des événements culturels et des réflexions sur l\'héritage de celui qui a mené la Barbade vers l\'indépendance en 1966.',
    es: 'El Día de Errol Barrow, el 21 de enero, rinde homenaje al Muy Excelente Errol Walton Barrow, padre fundador de la independencia de Barbados. Es un feriado nacional celebrado con ceremonias, eventos culturales y reflexiones sobre el legado del hombre que llevó a Barbados a la independencia en 1966.',
  },

  history: {
    en: 'Errol Walton Barrow (1920–1987) served as the first Prime Minister of Barbados after leading the country to independence from Britain on November 30, 1966. A war hero who flew over 45 combat missions with the Royal Air Force during World War II, Barrow returned to Barbados and entered politics, founding the Democratic Labour Party in 1955.\n\nAs Prime Minister from 1961 to 1976, Barrow introduced free education, expanded social services, and modernized the economy. He is credited with shaping modern Barbados and championing Caribbean self-determination.\n\nErrol Barrow Day has been observed as a national holiday since 1989, two years after his sudden death while serving his second term as Prime Minister. The day serves as a reminder of the ideals of independence and national pride.',
    fr: 'Errol Walton Barrow (1920–1987) a été le premier Premier ministre de la Barbade après avoir mené le pays à l\'indépendance de la Grande-Bretagne le 30 novembre 1966. Héros de guerre ayant effectué plus de 45 missions de combat dans la Royal Air Force pendant la Seconde Guerre mondiale, Barrow est retourné à la Barbade et s\'est lancé en politique, fondant le Parti travailliste démocratique en 1955.\n\nEn tant que Premier ministre de 1961 à 1976, Barrow a instauré l\'éducation gratuite, élargi les services sociaux et modernisé l\'économie. On lui attribue la formation de la Barbade moderne et la défense de l\'autodétermination caribéenne.\n\nLa Journée Errol Barrow est observée comme jour férié national depuis 1989, deux ans après sa mort soudaine alors qu\'il servait son deuxième mandat de Premier ministre. Cette journée rappelle les idéaux d\'indépendance et de fierté nationale.',
    es: 'Errol Walton Barrow (1920–1987) fue el primer Primer Ministro de Barbados tras liderar al país hacia la independencia de Gran Bretaña el 30 de noviembre de 1966. Héroe de guerra que realizó más de 45 misiones de combate con la Real Fuerza Aérea durante la Segunda Guerra Mundial, Barrow regresó a Barbados y entró en la política, fundando el Partido Laborista Democrático en 1955.\n\nComo Primer Ministro de 1961 a 1976, Barrow introdujo la educación gratuita, expandió los servicios sociales y modernizó la economía. Se le atribuye la formación del Barbados moderno y la defensa de la autodeterminación caribeña.\n\nEl Día de Errol Barrow se observa como feriado nacional desde 1989, dos años después de su muerte repentina mientras servía su segundo mandato como Primer Ministro. El día sirve como recordatorio de los ideales de independencia y orgullo nacional.',
  },

  traditions: {
    en: [
      'Laying wreaths at the Errol Barrow statue in Independence Square',
      'Attending memorial ceremonies and speeches by government officials',
      'Cultural performances celebrating Barbadian heritage',
      'Community gatherings and picnics across the island',
      'Educational programmes in schools about Barrow\'s life and legacy',
      'Radio and television broadcasts highlighting his contributions',
      'Displaying the Barbadian flag at homes and businesses',
    ],
    fr: [
      'Dépôt de couronnes au pied de la statue d\'Errol Barrow sur la Place de l\'Indépendance',
      'Participation aux cérémonies commémoratives et discours des responsables gouvernementaux',
      'Spectacles culturels célébrant le patrimoine barbadien',
      'Rassemblements communautaires et pique-niques à travers l\'île',
      'Programmes éducatifs dans les écoles sur la vie et l\'héritage de Barrow',
      'Émissions de radio et de télévision soulignant ses contributions',
      'Affichage du drapeau barbadien dans les foyers et les entreprises',
    ],
    es: [
      'Colocación de coronas en la estatua de Errol Barrow en la Plaza de la Independencia',
      'Asistencia a ceremonias conmemorativas y discursos de funcionarios del gobierno',
      'Actuaciones culturales celebrando el patrimonio barbadense',
      'Reuniones comunitarias y picnics por toda la isla',
      'Programas educativos en las escuelas sobre la vida y el legado de Barrow',
      'Transmisiones de radio y televisión destacando sus contribuciones',
      'Exhibición de la bandera barbadense en hogares y negocios',
    ],
  },

  funFacts: {
    en: [
      'Errol Barrow flew over 45 combat missions as a navigator with the Royal Air Force during World War II.',
      'Barrow was a trained lawyer, having studied at the London School of Economics and the Inns of Court.',
      'He founded the Democratic Labour Party in 1955, which became the vehicle for Barbadian independence.',
      'Barrow introduced free education for all Barbadians, transforming the nation\'s literacy rates.',
      'He was instrumental in establishing the Caribbean Free Trade Association (CARIFTA), a precursor to CARICOM.',
    ],
    fr: [
      'Errol Barrow a effectué plus de 45 missions de combat en tant que navigateur dans la Royal Air Force pendant la Seconde Guerre mondiale.',
      'Barrow était un avocat formé, ayant étudié à la London School of Economics et aux Inns of Court.',
      'Il a fondé le Parti travailliste démocratique en 1955, devenu le véhicule de l\'indépendance barbadienne.',
      'Barrow a instauré l\'éducation gratuite pour tous les Barbadiens, transformant le taux d\'alphabétisation du pays.',
      'Il a joué un rôle clé dans la création de l\'Association caribéenne de libre-échange (CARIFTA), précurseur de la CARICOM.',
    ],
    es: [
      'Errol Barrow realizó más de 45 misiones de combate como navegante en la Real Fuerza Aérea durante la Segunda Guerra Mundial.',
      'Barrow era un abogado formado, habiendo estudiado en la London School of Economics y en los Inns of Court.',
      'Fundó el Partido Laborista Democrático en 1955, que se convirtió en el vehículo de la independencia barbadense.',
      'Barrow introdujo la educación gratuita para todos los barbadenses, transformando las tasas de alfabetización del país.',
      'Fue fundamental en el establecimiento de la Asociación de Libre Comercio del Caribe (CARIFTA), precursora de CARICOM.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the schedule for official memorial ceremonies at Independence Square',
      'Plan to visit historical sites related to Barbadian independence',
      'Attend cultural events and community celebrations',
      'Learn about Errol Barrow\'s life and legacy before the holiday',
      'Support local businesses offering special Errol Barrow Day activities',
    ],
    fr: [
      'Vérifier le programme des cérémonies commémoratives officielles à la Place de l\'Indépendance',
      'Prévoir de visiter les sites historiques liés à l\'indépendance barbadienne',
      'Assister aux événements culturels et célébrations communautaires',
      'Se renseigner sur la vie et l\'héritage d\'Errol Barrow avant le jour férié',
      'Soutenir les entreprises locales offrant des activités spéciales pour la Journée Errol Barrow',
    ],
    es: [
      'Consultar el horario de las ceremonias conmemorativas oficiales en la Plaza de la Independencia',
      'Planificar visitas a sitios históricos relacionados con la independencia de Barbados',
      'Asistir a eventos culturales y celebraciones comunitarias',
      'Aprender sobre la vida y el legado de Errol Barrow antes del feriado',
      'Apoyar los negocios locales que ofrecen actividades especiales del Día de Errol Barrow',
    ],
  },

  relatedHolidays: ['bb_independence-day', 'bb_emancipation-day'],

  seo: {
    en: {
      titleTemplate: 'Errol Barrow Day {year} Barbados — Countdown & Guide',
      descriptionTemplate: 'When is Errol Barrow Day {year}? Live countdown to January 21, history, and celebrations in Barbados.',
      keywords: ['Errol Barrow Day', 'Barbados holiday', 'January 21 Barbados', 'Barbados founding father', 'Errol Barrow Day countdown'],
    },
    fr: {
      titleTemplate: 'Journée Errol Barrow {year} Barbade — Compte à rebours et guide',
      descriptionTemplate: 'Quand est la Journée Errol Barrow {year} ? Compte à rebours jusqu\'au 21 janvier, histoire et célébrations à la Barbade.',
      keywords: ['Journée Errol Barrow', 'jour férié Barbade', '21 janvier Barbade', 'père fondateur Barbade', 'compte à rebours Errol Barrow'],
    },
    es: {
      titleTemplate: 'Día de Errol Barrow {year} Barbados — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Día de Errol Barrow {year}? Cuenta regresiva hasta el 21 de enero, historia y celebraciones en Barbados.',
      keywords: ['Día de Errol Barrow', 'feriado Barbados', '21 de enero Barbados', 'padre fundador Barbados', 'cuenta regresiva Errol Barrow'],
    },
  },

  faq: [
    {
      question: { en: 'When is Errol Barrow Day {year}?', fr: 'Quand est la Journée Errol Barrow {year} ?', es: '¿Cuándo es el Día de Errol Barrow {year}?' },
      answer: {
        en: 'Errol Barrow Day {year} is on {date} ({dayOfWeek}). It is always celebrated on January 21.',
        fr: 'La Journée Errol Barrow {year} est le {date} ({dayOfWeek}). Elle est toujours célébrée le 21 janvier.',
        es: 'El Día de Errol Barrow {year} es el {date} ({dayOfWeek}). Siempre se celebra el 21 de enero.',
      },
    },
    {
      question: { en: 'Who was Errol Barrow?', fr: 'Qui était Errol Barrow ?', es: '¿Quién fue Errol Barrow?' },
      answer: {
        en: 'Errol Walton Barrow was the first Prime Minister of independent Barbados. He led the country to independence from Britain on November 30, 1966, and is considered the founding father of the nation.',
        fr: 'Errol Walton Barrow fut le premier Premier ministre de la Barbade indépendante. Il a mené le pays à l\'indépendance de la Grande-Bretagne le 30 novembre 1966 et est considéré comme le père fondateur de la nation.',
        es: 'Errol Walton Barrow fue el primer Primer Ministro de Barbados independiente. Lideró al país hacia la independencia de Gran Bretaña el 30 de noviembre de 1966 y es considerado el padre fundador de la nación.',
      },
    },
    {
      question: { en: 'Is Errol Barrow Day a public holiday in Barbados?', fr: 'La Journée Errol Barrow est-elle un jour férié à la Barbade ?', es: '¿Es el Día de Errol Barrow un feriado público en Barbados?' },
      answer: {
        en: 'Yes, Errol Barrow Day is a national public holiday in Barbados. It has been observed since 1989, two years after Barrow\'s passing in 1987.',
        fr: 'Oui, la Journée Errol Barrow est un jour férié national à la Barbade. Elle est observée depuis 1989, deux ans après le décès de Barrow en 1987.',
        es: 'Sí, el Día de Errol Barrow es un feriado público nacional en Barbados. Se observa desde 1989, dos años después del fallecimiento de Barrow en 1987.',
      },
    },
    {
      question: { en: 'How is Errol Barrow Day celebrated?', fr: 'Comment célèbre-t-on la Journée Errol Barrow ?', es: '¿Cómo se celebra el Día de Errol Barrow?' },
      answer: {
        en: 'Errol Barrow Day is celebrated with wreath-laying ceremonies at his statue, memorial speeches, cultural performances, and community events that honor his contributions to Barbadian independence.',
        fr: 'La Journée Errol Barrow est célébrée par des dépôts de couronnes devant sa statue, des discours commémoratifs, des spectacles culturels et des événements communautaires en l\'honneur de ses contributions à l\'indépendance barbadienne.',
        es: 'El Día de Errol Barrow se celebra con ceremonias de colocación de coronas en su estatua, discursos conmemorativos, actuaciones culturales y eventos comunitarios que honran sus contribuciones a la independencia barbadense.',
      },
    },
  ],

  colorTheme: 'blue-gold',
  icon: '🇧🇧',
};

// ---------------------------------------------------------------------------
// Emancipation Day — August 1
// ---------------------------------------------------------------------------

const emancipationDay: HolidayData = {
  id: 'bb_emancipation-day',
  countryCode: 'bb',
  slugs: { en: 'emancipation-day', fr: 'jour-de-l-emancipation', es: 'dia-de-la-emancipacion' },
  names: { en: 'Emancipation Day', fr: "Jour de l'Émancipation", es: 'Día de la Emancipación' },

  dateType: 'fixed',
  fixedMonth: 8,
  fixedDay: 1,

  descriptions: {
    en: 'Emancipation Day on August 1 celebrates the abolition of slavery in Barbados in 1838. The day is marked with cultural events, exhibitions, and ceremonies that honor the resilience and heritage of the Barbadian people.',
    fr: "Le Jour de l'Émancipation, le 1er août, célèbre l'abolition de l'esclavage à la Barbade en 1838. La journée est marquée par des événements culturels, des expositions et des cérémonies honorant la résilience et le patrimoine du peuple barbadien.",
    es: 'El Día de la Emancipación, el 1 de agosto, celebra la abolición de la esclavitud en Barbados en 1838. El día está marcado por eventos culturales, exposiciones y ceremonias que honran la resiliencia y el patrimonio del pueblo barbadense.',
  },

  history: {
    en: 'The Slavery Abolition Act of 1833 ended slavery throughout the British Empire, but full emancipation in Barbados did not take effect until August 1, 1838, after a four-year "apprenticeship" period. During slavery, Barbados was one of the most profitable sugar colonies, with enslaved Africans making up the vast majority of the population.\n\nThe transition to freedom was not without challenges. Former enslaved people faced continued discrimination and economic hardship, but they built vibrant communities and maintained strong cultural traditions that remain central to Barbadian identity today.\n\nEmancipation Day was officially established as a public holiday in Barbados in 1998, 160 years after the end of slavery. It serves as a day of remembrance, celebration, and reflection on how far the nation has come.',
    fr: "La loi sur l'abolition de l'esclavage de 1833 a mis fin à l'esclavage dans tout l'Empire britannique, mais l'émancipation complète à la Barbade n'a pris effet que le 1er août 1838, après une période d'« apprentissage » de quatre ans. Pendant l'esclavage, la Barbade était l'une des colonies sucrières les plus rentables, les Africains réduits en esclavage constituant la grande majorité de la population.\n\nLa transition vers la liberté ne s'est pas faite sans difficultés. Les anciens esclaves ont continué à faire face à la discrimination et aux difficultés économiques, mais ils ont construit des communautés dynamiques et maintenu de fortes traditions culturelles qui restent centrales dans l'identité barbadienne aujourd'hui.\n\nLe Jour de l'Émancipation a été officiellement établi comme jour férié à la Barbade en 1998, 160 ans après la fin de l'esclavage. Il sert de journée de souvenir, de célébration et de réflexion sur le chemin parcouru par la nation.",
    es: 'La Ley de Abolición de la Esclavitud de 1833 puso fin a la esclavitud en todo el Imperio Británico, pero la emancipación completa en Barbados no entró en vigor hasta el 1 de agosto de 1838, tras un período de "aprendizaje" de cuatro años. Durante la esclavitud, Barbados era una de las colonias azucareras más rentables, con los africanos esclavizados constituyendo la gran mayoría de la población.\n\nLa transición a la libertad no estuvo exenta de desafíos. Las personas anteriormente esclavizadas enfrentaron discriminación continua y dificultades económicas, pero construyeron comunidades vibrantes y mantuvieron fuertes tradiciones culturales que siguen siendo centrales en la identidad barbadense hoy en día.\n\nEl Día de la Emancipación fue establecido oficialmente como feriado público en Barbados en 1998, 160 años después del fin de la esclavitud. Sirve como un día de recuerdo, celebración y reflexión sobre cuánto ha avanzado la nación.',
  },

  traditions: {
    en: [
      'Attending dawn ceremonies and candlelight vigils',
      'Visiting the Emancipation Statue in Bridgetown',
      'Participating in cultural exhibitions and historical reenactments',
      'Enjoying traditional Barbadian music, drumming, and dance performances',
      'Attending lectures and panel discussions on African heritage and history',
      'Community feasts featuring traditional Bajan cuisine',
      'Wearing African-inspired clothing and accessories',
    ],
    fr: [
      'Participation aux cérémonies de l\'aube et aux veillées aux chandelles',
      'Visite de la statue de l\'Émancipation à Bridgetown',
      'Participation aux expositions culturelles et reconstitutions historiques',
      'Appréciation de la musique traditionnelle barbadienne, des percussions et des spectacles de danse',
      'Participation à des conférences et tables rondes sur l\'héritage et l\'histoire africaine',
      'Festins communautaires avec la cuisine traditionnelle bajan',
      'Port de vêtements et accessoires d\'inspiration africaine',
    ],
    es: [
      'Asistencia a ceremonias al amanecer y vigilias con velas',
      'Visita a la Estatua de la Emancipación en Bridgetown',
      'Participación en exposiciones culturales y recreaciones históricas',
      'Disfrute de música tradicional barbadense, tambores y espectáculos de danza',
      'Asistencia a conferencias y paneles de discusión sobre la herencia e historia africana',
      'Festines comunitarios con cocina tradicional bajan',
      'Uso de ropa y accesorios de inspiración africana',
    ],
  },

  funFacts: {
    en: [
      'The Emancipation Statue in Bridgetown, known as the "Bussa Statue," honors the leader of the 1816 slave rebellion.',
      'Barbados had one of the highest population densities of enslaved people in the Caribbean.',
      'Full emancipation came on August 1, 1838 — four years after the Abolition Act due to the apprenticeship system.',
      'Barbados was the first Caribbean island to establish a public water supply for formerly enslaved communities.',
      'The holiday was only made official in 1998, 160 years after emancipation.',
    ],
    fr: [
      'La statue de l\'Émancipation à Bridgetown, connue sous le nom de « Statue de Bussa », honore le leader de la rébellion des esclaves de 1816.',
      'La Barbade avait l\'une des plus fortes densités de population d\'esclaves dans les Caraïbes.',
      'L\'émancipation complète est intervenue le 1er août 1838 — quatre ans après la loi d\'abolition en raison du système d\'apprentissage.',
      'La Barbade a été la première île des Caraïbes à établir un approvisionnement public en eau pour les communautés anciennement réduites en esclavage.',
      'Le jour férié n\'a été officialisé qu\'en 1998, 160 ans après l\'émancipation.',
    ],
    es: [
      'La Estatua de la Emancipación en Bridgetown, conocida como la "Estatua de Bussa", honra al líder de la rebelión de esclavos de 1816.',
      'Barbados tenía una de las densidades de población de personas esclavizadas más altas del Caribe.',
      'La emancipación completa llegó el 1 de agosto de 1838 — cuatro años después de la Ley de Abolición debido al sistema de aprendizaje.',
      'Barbados fue la primera isla caribeña en establecer un suministro público de agua para las comunidades anteriormente esclavizadas.',
      'El feriado se oficializó recién en 1998, 160 años después de la emancipación.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the schedule for dawn ceremonies and cultural events',
      'Plan a visit to the Bussa Emancipation Statue in Bridgetown',
      'Attend lectures or exhibitions on Barbadian history',
      'Support local artisans selling African-inspired crafts',
      'Participate in community celebrations and feasts',
    ],
    fr: [
      'Vérifier le programme des cérémonies de l\'aube et des événements culturels',
      'Prévoir une visite à la statue de l\'Émancipation de Bussa à Bridgetown',
      'Assister à des conférences ou expositions sur l\'histoire de la Barbade',
      'Soutenir les artisans locaux vendant de l\'artisanat d\'inspiration africaine',
      'Participer aux célébrations et festins communautaires',
    ],
    es: [
      'Consultar el horario de las ceremonias al amanecer y eventos culturales',
      'Planificar una visita a la Estatua de la Emancipación de Bussa en Bridgetown',
      'Asistir a conferencias o exposiciones sobre la historia de Barbados',
      'Apoyar a los artesanos locales que venden artesanías de inspiración africana',
      'Participar en las celebraciones y festines comunitarios',
    ],
  },

  relatedHolidays: ['bb_kadooment-day', 'bb_independence-day', 'bs_emancipation-day'],

  seo: {
    en: {
      titleTemplate: 'Emancipation Day {year} Barbados — Countdown & History',
      descriptionTemplate: 'When is Emancipation Day {year} in Barbados? Live countdown to August 1, history of abolition, and cultural celebrations.',
      keywords: ['Emancipation Day Barbados', 'August 1 Barbados', 'abolition slavery Barbados', 'Barbados holiday', 'Emancipation Day countdown'],
    },
    fr: {
      titleTemplate: "Jour de l'Émancipation {year} Barbade — Compte à rebours et histoire",
      descriptionTemplate: "Quand est le Jour de l'Émancipation {year} à la Barbade ? Compte à rebours jusqu'au 1er août, histoire de l'abolition et célébrations culturelles.",
      keywords: ["Jour de l'Émancipation Barbade", '1er août Barbade', 'abolition esclavage Barbade', 'jour férié Barbade', "compte à rebours Émancipation"],
    },
    es: {
      titleTemplate: 'Día de la Emancipación {year} Barbados — Cuenta regresiva e historia',
      descriptionTemplate: '¿Cuándo es el Día de la Emancipación {year} en Barbados? Cuenta regresiva hasta el 1 de agosto, historia de la abolición y celebraciones culturales.',
      keywords: ['Día de la Emancipación Barbados', '1 de agosto Barbados', 'abolición esclavitud Barbados', 'feriado Barbados', 'cuenta regresiva Emancipación'],
    },
  },

  faq: [
    {
      question: { en: 'When is Emancipation Day {year} in Barbados?', fr: "Quand est le Jour de l'Émancipation {year} à la Barbade ?", es: '¿Cuándo es el Día de la Emancipación {year} en Barbados?' },
      answer: {
        en: 'Emancipation Day {year} in Barbados is on {date} ({dayOfWeek}). It is always celebrated on August 1.',
        fr: "Le Jour de l'Émancipation {year} à la Barbade est le {date} ({dayOfWeek}). Il est toujours célébré le 1er août.",
        es: 'El Día de la Emancipación {year} en Barbados es el {date} ({dayOfWeek}). Siempre se celebra el 1 de agosto.',
      },
    },
    {
      question: { en: 'What does Emancipation Day commemorate?', fr: "Que commémore le Jour de l'Émancipation ?", es: '¿Qué conmemora el Día de la Emancipación?' },
      answer: {
        en: 'Emancipation Day commemorates the full abolition of slavery in Barbados on August 1, 1838, following the British Slavery Abolition Act of 1833.',
        fr: "Le Jour de l'Émancipation commémore l'abolition complète de l'esclavage à la Barbade le 1er août 1838, suite à la loi britannique d'abolition de l'esclavage de 1833.",
        es: 'El Día de la Emancipación conmemora la abolición completa de la esclavitud en Barbados el 1 de agosto de 1838, tras la Ley Británica de Abolición de la Esclavitud de 1833.',
      },
    },
    {
      question: { en: 'Who is Bussa?', fr: 'Qui est Bussa ?', es: '¿Quién es Bussa?' },
      answer: {
        en: 'Bussa was an enslaved man who led the largest slave rebellion in Barbados in April 1816. Although the rebellion was ultimately suppressed, Bussa became a national hero and symbol of the fight for freedom. The Emancipation Statue in Bridgetown is named in his honor.',
        fr: "Bussa était un homme réduit en esclavage qui a mené la plus grande rébellion d'esclaves à la Barbade en avril 1816. Bien que la rébellion ait finalement été réprimée, Bussa est devenu un héros national et un symbole de la lutte pour la liberté. La statue de l'Émancipation à Bridgetown porte son nom.",
        es: 'Bussa fue un hombre esclavizado que lideró la mayor rebelión de esclavos en Barbados en abril de 1816. Aunque la rebelión fue finalmente reprimida, Bussa se convirtió en un héroe nacional y símbolo de la lucha por la libertad. La Estatua de la Emancipación en Bridgetown lleva su nombre.',
      },
    },
    {
      question: { en: 'Is Emancipation Day a public holiday in Barbados?', fr: "Le Jour de l'Émancipation est-il un jour férié à la Barbade ?", es: '¿Es el Día de la Emancipación un feriado público en Barbados?' },
      answer: {
        en: 'Yes, Emancipation Day is a public holiday in Barbados. It was officially declared a national holiday in 1998.',
        fr: "Oui, le Jour de l'Émancipation est un jour férié à la Barbade. Il a été officiellement déclaré jour férié national en 1998.",
        es: 'Sí, el Día de la Emancipación es un feriado público en Barbados. Fue declarado oficialmente feriado nacional en 1998.',
      },
    },
  ],

  colorTheme: 'green-gold',
  icon: '✊',
};

// ---------------------------------------------------------------------------
// Kadooment Day — 1st Monday of August
// ---------------------------------------------------------------------------

const kadoomentDay: HolidayData = {
  id: 'bb_kadooment-day',
  countryCode: 'bb',
  slugs: { en: 'kadooment-day', fr: 'jour-de-kadooment', es: 'dia-de-kadooment' },
  names: { en: 'Kadooment Day', fr: 'Jour de Kadooment', es: 'Día de Kadooment' },

  dateType: 'calculated',
  calculateDate: (year: number) => nthWeekday(year, 8, 1, 1),

  descriptions: {
    en: 'Kadooment Day is the grand finale of the Crop Over festival, celebrated on the first Monday of August in Barbados. It features elaborate costume bands, pulsating soca music, and a spectacular parade through the streets of Bridgetown.',
    fr: "Le Jour de Kadooment est le grand finale du festival Crop Over, célébré le premier lundi d'août à la Barbade. Il présente des groupes costumés élaborés, de la musique soca vibrante et un défilé spectaculaire dans les rues de Bridgetown.",
    es: 'El Día de Kadooment es el gran final del festival Crop Over, celebrado el primer lunes de agosto en Barbados. Presenta elaboradas bandas de disfraces, música soca palpitante y un espectacular desfile por las calles de Bridgetown.',
  },

  history: {
    en: 'Kadooment Day has its roots in the historic Crop Over festival, which dates back to the 1780s when Barbados was the world\'s largest sugar producer. The festival originally marked the end of the sugar cane harvest, with plantation workers celebrating with music, dancing, and feasting.\n\nThe Crop Over festival declined with the sugar industry in the 1940s but was revived in 1974 as a national cultural festival. Kadooment Day became the climactic final event — a massive street parade featuring costumed bands, music trucks, and thousands of revellers.\n\nToday, Kadooment Day is one of the most important cultural events in the Caribbean, attracting visitors from around the world. It has been compared to Trinidad\'s Carnival and Rio\'s Carnaval in terms of spectacle and energy.',
    fr: "Le Jour de Kadooment tire ses origines du festival historique Crop Over, qui remonte aux années 1780, lorsque la Barbade était le plus grand producteur de sucre au monde. Le festival marquait à l'origine la fin de la récolte de la canne à sucre, les travailleurs des plantations célébrant avec de la musique, de la danse et des festins.\n\nLe festival Crop Over a décliné avec l'industrie sucrière dans les années 1940, mais a été relancé en 1974 en tant que festival culturel national. Le Jour de Kadooment est devenu l'événement final culminant — un immense défilé de rue avec des groupes costumés, des camions musicaux et des milliers de fêtards.\n\nAujourd'hui, le Jour de Kadooment est l'un des événements culturels les plus importants des Caraïbes, attirant des visiteurs du monde entier. Il a été comparé au Carnaval de Trinidad et au Carnaval de Rio en termes de spectacle et d'énergie.",
    es: 'El Día de Kadooment tiene sus raíces en el histórico festival Crop Over, que data de la década de 1780 cuando Barbados era el mayor productor de azúcar del mundo. El festival originalmente marcaba el fin de la cosecha de caña de azúcar, con los trabajadores de las plantaciones celebrando con música, baile y banquetes.\n\nEl festival Crop Over declinó con la industria azucarera en la década de 1940, pero fue revivido en 1974 como festival cultural nacional. El Día de Kadooment se convirtió en el evento final climático — un masivo desfile callejero con bandas disfrazadas, camiones de música y miles de celebrantes.\n\nHoy, el Día de Kadooment es uno de los eventos culturales más importantes del Caribe, atrayendo visitantes de todo el mundo. Ha sido comparado con el Carnaval de Trinidad y el Carnaval de Río en términos de espectáculo y energía.',
  },

  traditions: {
    en: [
      'Joining or watching costumed bands parading through Bridgetown to Spring Garden',
      'Dancing to soca and calypso music from massive music trucks',
      'Wearing elaborate, colorful costumes with feathers, sequins, and beads',
      'Enjoying Bajan street food such as fishcakes, pudding and souse',
      'Attending fetes and parties in the weeks leading up to Kadooment Day',
      'Crowning the Pic-o-de-Crop calypso monarch',
      'Celebrating with rum punch and Banks beer',
    ],
    fr: [
      'Rejoindre ou regarder les groupes costumés défiler dans Bridgetown jusqu\'à Spring Garden',
      'Danser au son de la musique soca et calypso diffusée par d\'immenses camions musicaux',
      'Porter des costumes élaborés et colorés avec des plumes, des paillettes et des perles',
      'Déguster de la cuisine de rue barbadienne comme les beignets de poisson, le boudin et la souse',
      'Assister aux fêtes et soirées dans les semaines précédant le Jour de Kadooment',
      'Couronner le monarque calypso Pic-o-de-Crop',
      'Célébrer avec du punch au rhum et de la bière Banks',
    ],
    es: [
      'Unirse o ver las bandas disfrazadas desfilando por Bridgetown hasta Spring Garden',
      'Bailar al ritmo de música soca y calipso desde enormes camiones de música',
      'Usar disfraces elaborados y coloridos con plumas, lentejuelas y cuentas',
      'Disfrutar de comida callejera barbadense como pasteles de pescado, pudín y souse',
      'Asistir a fiestas y celebraciones en las semanas previas al Día de Kadooment',
      'Coronar al monarca calipso Pic-o-de-Crop',
      'Celebrar con ponche de ron y cerveza Banks',
    ],
  },

  funFacts: {
    en: [
      'Kadooment Day costumes can cost thousands of dollars, with elaborate designs featuring feathers, gems, and wire-bent structures.',
      'The Crop Over festival season runs for several weeks, but Kadooment Day is the climactic final day.',
      'Pop star Rihanna, who is from Barbados, regularly attends Kadooment Day in stunning costumes.',
      'The word "kadooment" is Bajan dialect meaning "a big commotion" or "a lot of noise."',
      'Over 30 costumed bands can participate in a single Kadooment Day parade.',
    ],
    fr: [
      'Les costumes du Jour de Kadooment peuvent coûter des milliers de dollars, avec des créations élaborées comportant des plumes, des pierres précieuses et des structures en fil de fer.',
      'La saison du festival Crop Over dure plusieurs semaines, mais le Jour de Kadooment est le jour final culminant.',
      'La pop star Rihanna, originaire de la Barbade, assiste régulièrement au Jour de Kadooment dans des costumes époustouflants.',
      'Le mot « kadooment » est un dialecte bajan signifiant « un grand tumulte » ou « beaucoup de bruit ».',
      'Plus de 30 groupes costumés peuvent participer à un seul défilé du Jour de Kadooment.',
    ],
    es: [
      'Los disfraces del Día de Kadooment pueden costar miles de dólares, con diseños elaborados con plumas, gemas y estructuras de alambre.',
      'La temporada del festival Crop Over dura varias semanas, pero el Día de Kadooment es el día final climático.',
      'La estrella pop Rihanna, originaria de Barbados, asiste regularmente al Día de Kadooment con disfraces impresionantes.',
      'La palabra "kadooment" es dialecto bajan que significa "un gran alboroto" o "mucho ruido".',
      'Más de 30 bandas disfrazadas pueden participar en un solo desfile del Día de Kadooment.',
    ],
  },

  planningChecklist: {
    en: [
      'Register with a costume band months in advance — popular bands sell out quickly',
      'Book accommodation early as hotels fill up during Crop Over season',
      'Stay hydrated and wear sunscreen for the all-day outdoor parade',
      'Attend calypso tents and fetes in the weeks before Kadooment Day',
      'Arrange transport to the parade route along Spring Garden Highway',
    ],
    fr: [
      'S\'inscrire dans un groupe costumé des mois à l\'avance — les groupes populaires sont vite complets',
      'Réserver un hébergement tôt car les hôtels se remplissent pendant la saison Crop Over',
      'Rester hydraté et appliquer de la crème solaire pour le défilé en plein air toute la journée',
      'Assister aux tentes calypso et fêtes dans les semaines précédant le Jour de Kadooment',
      'Organiser le transport jusqu\'au parcours du défilé le long de l\'autoroute Spring Garden',
    ],
    es: [
      'Registrarse en una banda de disfraces con meses de antelación — las bandas populares se agotan rápidamente',
      'Reservar alojamiento con anticipación ya que los hoteles se llenan durante la temporada de Crop Over',
      'Mantenerse hidratado y usar protector solar para el desfile al aire libre de todo el día',
      'Asistir a las carpas de calipso y fiestas en las semanas previas al Día de Kadooment',
      'Organizar el transporte hasta la ruta del desfile por la autopista Spring Garden',
    ],
  },

  relatedHolidays: ['bb_emancipation-day', 'bb_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Kadooment Day {year} Barbados — Countdown & Crop Over Guide',
      descriptionTemplate: 'When is Kadooment Day {year}? Live countdown, Crop Over festival info, costume bands, and celebration guide for Barbados.',
      keywords: ['Kadooment Day', 'Crop Over Barbados', 'Barbados carnival', 'Kadooment Day countdown', 'Barbados festival'],
    },
    fr: {
      titleTemplate: 'Jour de Kadooment {year} Barbade — Compte à rebours et guide Crop Over',
      descriptionTemplate: 'Quand est le Jour de Kadooment {year} ? Compte à rebours, infos sur le festival Crop Over, groupes costumés et guide de célébration pour la Barbade.',
      keywords: ['Jour de Kadooment', 'Crop Over Barbade', 'carnaval Barbade', 'compte à rebours Kadooment', 'festival Barbade'],
    },
    es: {
      titleTemplate: 'Día de Kadooment {year} Barbados — Cuenta regresiva y guía de Crop Over',
      descriptionTemplate: '¿Cuándo es el Día de Kadooment {year}? Cuenta regresiva, información del festival Crop Over, bandas de disfraces y guía de celebración de Barbados.',
      keywords: ['Día de Kadooment', 'Crop Over Barbados', 'carnaval Barbados', 'cuenta regresiva Kadooment', 'festival Barbados'],
    },
  },

  faq: [
    {
      question: { en: 'When is Kadooment Day {year}?', fr: 'Quand est le Jour de Kadooment {year} ?', es: '¿Cuándo es el Día de Kadooment {year}?' },
      answer: {
        en: 'Kadooment Day {year} falls on {date} ({dayOfWeek}). It is celebrated on the first Monday of August each year.',
        fr: 'Le Jour de Kadooment {year} tombe le {date} ({dayOfWeek}). Il est célébré le premier lundi d\'août chaque année.',
        es: 'El Día de Kadooment {year} cae el {date} ({dayOfWeek}). Se celebra el primer lunes de agosto cada año.',
      },
    },
    {
      question: { en: 'What is the Crop Over festival?', fr: 'Qu\'est-ce que le festival Crop Over ?', es: '¿Qué es el festival Crop Over?' },
      answer: {
        en: 'Crop Over is Barbados\'s biggest cultural festival, originating from the sugar cane harvest celebrations of the 1780s. It runs for several weeks with calypso competitions, fetes, and cultural events, culminating in the Kadooment Day grand parade.',
        fr: 'Crop Over est le plus grand festival culturel de la Barbade, originaire des célébrations de la récolte de canne à sucre des années 1780. Il se déroule sur plusieurs semaines avec des concours de calypso, des fêtes et des événements culturels, culminant par le grand défilé du Jour de Kadooment.',
        es: 'Crop Over es el mayor festival cultural de Barbados, originario de las celebraciones de la cosecha de caña de azúcar de la década de 1780. Se desarrolla durante varias semanas con competiciones de calipso, fiestas y eventos culturales, culminando en el gran desfile del Día de Kadooment.',
      },
    },
    {
      question: { en: 'How can I participate in Kadooment Day?', fr: 'Comment puis-je participer au Jour de Kadooment ?', es: '¿Cómo puedo participar en el Día de Kadooment?' },
      answer: {
        en: 'To participate in the parade, register with one of the many costume bands. Bands sell costumes that include entry to the parade and typically drinks and food. Popular bands sell out months in advance, so early booking is essential.',
        fr: 'Pour participer au défilé, inscrivez-vous auprès de l\'un des nombreux groupes costumés. Les groupes vendent des costumes qui incluent l\'accès au défilé et généralement des boissons et de la nourriture. Les groupes populaires sont complets des mois à l\'avance, donc une réservation anticipée est essentielle.',
        es: 'Para participar en el desfile, regístrese en una de las muchas bandas de disfraces. Las bandas venden disfraces que incluyen la entrada al desfile y generalmente bebidas y comida. Las bandas populares se agotan con meses de antelación, por lo que la reserva anticipada es esencial.',
      },
    },
    {
      question: { en: 'Does Rihanna attend Kadooment Day?', fr: 'Rihanna assiste-t-elle au Jour de Kadooment ?', es: '¿Rihanna asiste al Día de Kadooment?' },
      answer: {
        en: 'Yes, Rihanna, who was born in Barbados, is known for attending Kadooment Day celebrations and has been spotted in spectacular costumes over the years. Her presence adds global attention to the event.',
        fr: 'Oui, Rihanna, née à la Barbade, est connue pour assister aux célébrations du Jour de Kadooment et a été aperçue dans des costumes spectaculaires au fil des ans. Sa présence attire l\'attention mondiale sur l\'événement.',
        es: 'Sí, Rihanna, nacida en Barbados, es conocida por asistir a las celebraciones del Día de Kadooment y ha sido vista con disfraces espectaculares a lo largo de los años. Su presencia añade atención global al evento.',
      },
    },
  ],

  colorTheme: 'multi-color',
  icon: '🎭',
};

// ---------------------------------------------------------------------------
// Independence Day — November 30
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'bb_independence-day',
  countryCode: 'bb',
  slugs: { en: 'independence-day', fr: 'jour-de-l-independance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Jour de l'Indépendance", es: 'Día de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 11,
  fixedDay: 30,

  descriptions: {
    en: 'Independence Day on November 30 celebrates Barbados gaining independence from the United Kingdom in 1966. In 2021, Barbados became a republic. The day is marked with national events, parades, fireworks, and patriotic celebrations across the island.',
    fr: "Le Jour de l'Indépendance, le 30 novembre, célèbre l'indépendance de la Barbade du Royaume-Uni obtenue en 1966. En 2021, la Barbade est devenue une république. La journée est marquée par des événements nationaux, des défilés, des feux d'artifice et des célébrations patriotiques à travers l'île.",
    es: 'El Día de la Independencia, el 30 de noviembre, celebra la independencia de Barbados del Reino Unido obtenida en 1966. En 2021, Barbados se convirtió en república. El día está marcado por eventos nacionales, desfiles, fuegos artificiales y celebraciones patrióticas en toda la isla.',
  },

  history: {
    en: 'Barbados gained independence from the United Kingdom on November 30, 1966, after more than 300 years of British colonial rule. Errol Walton Barrow, leader of the Democratic Labour Party, served as the first Prime Minister and guided the nation through its transition to self-governance.\n\nFor 55 years after independence, Barbados remained a constitutional monarchy with the British monarch as head of state. On November 30, 2021 — the 55th anniversary of independence — Barbados transitioned to a republic, with Dame Sandra Mason becoming the first President.\n\nIndependence Day remains the most significant national holiday in Barbados, symbolizing the nation\'s sovereignty, cultural identity, and self-determination. The transition to a republic added new meaning to the celebrations.',
    fr: "La Barbade a obtenu son indépendance du Royaume-Uni le 30 novembre 1966, après plus de 300 ans de domination coloniale britannique. Errol Walton Barrow, leader du Parti travailliste démocratique, a été le premier Premier ministre et a guidé la nation dans sa transition vers l'autonomie.\n\nPendant 55 ans après l'indépendance, la Barbade est restée une monarchie constitutionnelle avec le monarque britannique comme chef d'État. Le 30 novembre 2021 — le 55e anniversaire de l'indépendance — la Barbade est devenue une république, Dame Sandra Mason devenant la première Présidente.\n\nLe Jour de l'Indépendance reste le jour férié national le plus important de la Barbade, symbolisant la souveraineté de la nation, son identité culturelle et son autodétermination. La transition vers la république a donné une nouvelle signification aux célébrations.",
    es: 'Barbados obtuvo su independencia del Reino Unido el 30 de noviembre de 1966, después de más de 300 años de dominio colonial británico. Errol Walton Barrow, líder del Partido Laborista Democrático, sirvió como primer Primer Ministro y guió a la nación en su transición hacia la autonomía.\n\nDurante 55 años después de la independencia, Barbados siguió siendo una monarquía constitucional con el monarca británico como jefe de estado. El 30 de noviembre de 2021 — el 55.° aniversario de la independencia — Barbados se convirtió en república, con Dame Sandra Mason como primera Presidenta.\n\nEl Día de la Independencia sigue siendo el feriado nacional más significativo de Barbados, simbolizando la soberanía de la nación, su identidad cultural y su autodeterminación. La transición a república añadió un nuevo significado a las celebraciones.',
  },

  traditions: {
    en: [
      'Attending the Independence Day parade and military review',
      'Watching fireworks displays across the island',
      'Attending the national flag-raising ceremony',
      'Enjoying cultural performances of music, dance, and theatre',
      'Decorating homes and businesses with the national colors of blue and gold',
      'Attending church services of thanksgiving',
      'Sharing traditional Bajan meals with family and friends',
    ],
    fr: [
      'Participation au défilé du Jour de l\'Indépendance et à la revue militaire',
      'Regarder les feux d\'artifice à travers l\'île',
      'Assister à la cérémonie nationale de lever du drapeau',
      'Apprécier les spectacles culturels de musique, danse et théâtre',
      'Décorer les maisons et les entreprises avec les couleurs nationales bleu et or',
      'Assister aux services religieux d\'action de grâces',
      'Partager des repas traditionnels bajans avec la famille et les amis',
    ],
    es: [
      'Asistencia al desfile del Día de la Independencia y revista militar',
      'Ver los fuegos artificiales por toda la isla',
      'Asistir a la ceremonia nacional de izado de bandera',
      'Disfrutar de actuaciones culturales de música, danza y teatro',
      'Decorar hogares y negocios con los colores nacionales azul y dorado',
      'Asistir a servicios religiosos de acción de gracias',
      'Compartir comidas tradicionales bajanas con familia y amigos',
    ],
  },

  funFacts: {
    en: [
      'Barbados was under British rule for 340 years, making it one of the longest colonial periods in the Caribbean.',
      'On November 30, 2021, Barbados became a republic, replacing the Queen with its first President, Dame Sandra Mason.',
      'The Barbadian flag features a broken trident, symbolizing the break from colonial rule.',
      'Barbados is sometimes called "Little England" due to its strong British colonial heritage.',
      'Despite being only 166 square miles, Barbados has a population of nearly 300,000 people.',
    ],
    fr: [
      'La Barbade a été sous domination britannique pendant 340 ans, ce qui en fait l\'une des plus longues périodes coloniales des Caraïbes.',
      'Le 30 novembre 2021, la Barbade est devenue une république, remplaçant la Reine par sa première Présidente, Dame Sandra Mason.',
      'Le drapeau barbadien arbore un trident brisé, symbolisant la rupture avec la domination coloniale.',
      'La Barbade est parfois appelée « la Petite Angleterre » en raison de son fort héritage colonial britannique.',
      'Bien qu\'elle ne fasse que 430 km², la Barbade compte près de 300 000 habitants.',
    ],
    es: [
      'Barbados estuvo bajo dominio británico durante 340 años, lo que lo convierte en uno de los períodos coloniales más largos del Caribe.',
      'El 30 de noviembre de 2021, Barbados se convirtió en república, reemplazando a la Reina con su primera Presidenta, Dame Sandra Mason.',
      'La bandera de Barbados presenta un tridente roto, que simboliza la ruptura con el dominio colonial.',
      'Barbados a veces es llamado "la Pequeña Inglaterra" debido a su fuerte herencia colonial británica.',
      'A pesar de tener solo 430 km², Barbados tiene una población de casi 300.000 personas.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the schedule for the Independence Day parade and national ceremony',
      'Find the best fireworks viewing spots on the island',
      'Dress in the national colors of blue and gold',
      'Attend cultural events and concerts celebrating Barbadian heritage',
      'Visit historical sites related to Barbadian independence',
    ],
    fr: [
      'Vérifier le programme du défilé du Jour de l\'Indépendance et de la cérémonie nationale',
      'Trouver les meilleurs points d\'observation des feux d\'artifice sur l\'île',
      'S\'habiller aux couleurs nationales bleu et or',
      'Assister aux événements culturels et concerts célébrant le patrimoine barbadien',
      'Visiter les sites historiques liés à l\'indépendance de la Barbade',
    ],
    es: [
      'Consultar el horario del desfile del Día de la Independencia y la ceremonia nacional',
      'Encontrar los mejores puntos para ver los fuegos artificiales en la isla',
      'Vestir los colores nacionales azul y dorado',
      'Asistir a eventos culturales y conciertos que celebran el patrimonio barbadense',
      'Visitar sitios históricos relacionados con la independencia de Barbados',
    ],
  },

  relatedHolidays: ['bb_errol-barrow-day', 'bb_emancipation-day', 'bs_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Independence Day {year} Barbados — Countdown & Celebration Guide',
      descriptionTemplate: 'When is Barbados Independence Day {year}? Live countdown to November 30, history, traditions, and celebration guide.',
      keywords: ['Barbados Independence Day', 'November 30 Barbados', 'Barbados republic', 'Barbados holiday', 'Independence Day countdown'],
    },
    fr: {
      titleTemplate: "Jour de l'Indépendance {year} Barbade — Compte à rebours et guide de célébration",
      descriptionTemplate: "Quand est le Jour de l'Indépendance de la Barbade {year} ? Compte à rebours jusqu'au 30 novembre, histoire, traditions et guide de célébration.",
      keywords: ["Jour de l'Indépendance Barbade", '30 novembre Barbade', 'république Barbade', 'jour férié Barbade', "compte à rebours Indépendance"],
    },
    es: {
      titleTemplate: 'Día de la Independencia {year} Barbados — Cuenta regresiva y guía de celebración',
      descriptionTemplate: '¿Cuándo es el Día de la Independencia de Barbados {year}? Cuenta regresiva hasta el 30 de noviembre, historia, tradiciones y guía de celebración.',
      keywords: ['Día de la Independencia Barbados', '30 de noviembre Barbados', 'república Barbados', 'feriado Barbados', 'cuenta regresiva Independencia'],
    },
  },

  faq: [
    {
      question: { en: 'When is Barbados Independence Day {year}?', fr: "Quand est le Jour de l'Indépendance de la Barbade {year} ?", es: '¿Cuándo es el Día de la Independencia de Barbados {year}?' },
      answer: {
        en: 'Barbados Independence Day {year} is on {date} ({dayOfWeek}). It is always celebrated on November 30.',
        fr: "Le Jour de l'Indépendance de la Barbade {year} est le {date} ({dayOfWeek}). Il est toujours célébré le 30 novembre.",
        es: 'El Día de la Independencia de Barbados {year} es el {date} ({dayOfWeek}). Siempre se celebra el 30 de noviembre.',
      },
    },
    {
      question: { en: 'Is Barbados still a republic?', fr: 'La Barbade est-elle toujours une république ?', es: '¿Barbados sigue siendo una república?' },
      answer: {
        en: 'Yes, Barbados became a republic on November 30, 2021, the 55th anniversary of its independence. Dame Sandra Mason was inaugurated as the first President, replacing Queen Elizabeth II as head of state.',
        fr: 'Oui, la Barbade est devenue une république le 30 novembre 2021, le 55e anniversaire de son indépendance. Dame Sandra Mason a été investie comme première Présidente, remplaçant la reine Élisabeth II comme chef d\'État.',
        es: 'Sí, Barbados se convirtió en república el 30 de noviembre de 2021, el 55.° aniversario de su independencia. Dame Sandra Mason fue inaugurada como primera Presidenta, reemplazando a la reina Isabel II como jefa de estado.',
      },
    },
    {
      question: { en: 'Who led Barbados to independence?', fr: 'Qui a mené la Barbade à l\'indépendance ?', es: '¿Quién llevó a Barbados a la independencia?' },
      answer: {
        en: 'Errol Walton Barrow, leader of the Democratic Labour Party, led Barbados to independence from Britain on November 30, 1966. He served as the country\'s first Prime Minister.',
        fr: 'Errol Walton Barrow, leader du Parti travailliste démocratique, a mené la Barbade à l\'indépendance de la Grande-Bretagne le 30 novembre 1966. Il a été le premier Premier ministre du pays.',
        es: 'Errol Walton Barrow, líder del Partido Laborista Democrático, llevó a Barbados a la independencia de Gran Bretaña el 30 de noviembre de 1966. Sirvió como primer Primer Ministro del país.',
      },
    },
    {
      question: { en: 'How is Independence Day celebrated in Barbados?', fr: "Comment le Jour de l'Indépendance est-il célébré à la Barbade ?", es: '¿Cómo se celebra el Día de la Independencia en Barbados?' },
      answer: {
        en: 'Independence Day features a national parade, military review, flag-raising ceremonies, cultural performances, fireworks, and community celebrations. Many Barbadians decorate their homes in the national colors of blue and gold.',
        fr: "Le Jour de l'Indépendance comprend un défilé national, une revue militaire, des cérémonies de lever du drapeau, des spectacles culturels, des feux d'artifice et des célébrations communautaires. De nombreux Barbadiens décorent leurs maisons aux couleurs nationales bleu et or.",
        es: 'El Día de la Independencia incluye un desfile nacional, revista militar, ceremonias de izado de bandera, actuaciones culturales, fuegos artificiales y celebraciones comunitarias. Muchos barbadenses decoran sus hogares con los colores nacionales azul y dorado.',
      },
    },
  ],

  colorTheme: 'blue-gold',
  icon: '🇧🇧',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'bb_christmas',
  countryCode: 'bb',
  slugs: { en: 'christmas', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noël', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: 'Christmas Day on December 25 in Barbados blends Caribbean warmth with cherished traditions. Families gather for festive meals featuring jug-jug, baked ham, rum punch, and attend church services to celebrate the season.',
    fr: "Le jour de Noël, le 25 décembre à la Barbade, mêle la chaleur caribéenne aux traditions chéries. Les familles se réunissent pour des repas festifs comprenant du jug-jug, du jambon cuit, du punch au rhum et assistent aux services religieux pour célébrer la saison.",
    es: 'El día de Navidad, el 25 de diciembre en Barbados, mezcla la calidez caribeña con tradiciones queridas. Las familias se reúnen para comidas festivas con jug-jug, jamón horneado, ponche de ron y asisten a servicios religiosos para celebrar la temporada.',
  },

  history: {
    en: 'Christmas has been celebrated in Barbados since the colonial era, blending British traditions with African and Caribbean influences. The holiday has evolved into a uniquely Bajan celebration that reflects the island\'s multicultural heritage.\n\nTraditional Barbadian Christmas foods like jug-jug — a dish made with guinea corn, green peas, and salted meat — trace their origins to the Scottish haggis brought to the island during colonial times. The dish was adapted with local ingredients by enslaved Africans.\n\nChristmas in Barbados is also marked by the Crop Over festival season\'s afterglow, with communities coming together for church services, caroling, and festive meals. The warm Caribbean weather allows for outdoor celebrations, beach gatherings, and a distinctly tropical holiday atmosphere.',
    fr: "Noël est célébré à la Barbade depuis l'époque coloniale, mêlant les traditions britanniques aux influences africaines et caribéennes. La fête a évolué pour devenir une célébration uniquement barbadienne qui reflète l'héritage multiculturel de l'île.\n\nLes aliments traditionnels de Noël barbadien comme le jug-jug — un plat à base de sorgho, petits pois verts et viande salée — trouvent leurs origines dans le haggis écossais apporté sur l'île à l'époque coloniale. Le plat a été adapté avec des ingrédients locaux par les Africains réduits en esclavage.\n\nNoël à la Barbade est également marqué par l'écho du festival Crop Over, les communautés se réunissant pour des services religieux, des chants de Noël et des repas festifs. Le climat caribéen chaud permet des célébrations en plein air, des rassemblements à la plage et une atmosphère de fête distinctement tropicale.",
    es: 'La Navidad se ha celebrado en Barbados desde la era colonial, mezclando tradiciones británicas con influencias africanas y caribeñas. La festividad ha evolucionado hasta convertirse en una celebración únicamente barbadense que refleja la herencia multicultural de la isla.\n\nLos alimentos tradicionales navideños barbadenses como el jug-jug — un plato hecho con sorgo, guisantes verdes y carne salada — tienen sus orígenes en el haggis escocés llevado a la isla durante la época colonial. El plato fue adaptado con ingredientes locales por los africanos esclavizados.\n\nLa Navidad en Barbados también está marcada por el eco del festival Crop Over, con comunidades reuniéndose para servicios religiosos, villancicos y comidas festivas. El cálido clima caribeño permite celebraciones al aire libre, reuniones en la playa y un ambiente festivo claramente tropical.',
  },

  traditions: {
    en: [
      'Preparing jug-jug, a traditional dish made with guinea corn, green peas, and salted meat',
      'Serving baked ham glazed with local spices and rum',
      'Drinking rum punch and sorrel drink made from hibiscus flowers',
      'Attending Christmas morning church services',
      'Caroling through neighborhoods on Christmas Eve',
      'Decorating homes with tropical flowers and Christmas lights',
      'Enjoying a family beach day on Christmas afternoon',
    ],
    fr: [
      'Préparer le jug-jug, un plat traditionnel à base de sorgho, petits pois verts et viande salée',
      'Servir du jambon cuit glacé aux épices locales et au rhum',
      'Boire du punch au rhum et de la boisson au sorrel faite de fleurs d\'hibiscus',
      'Assister aux services religieux du matin de Noël',
      'Chanter des chants de Noël dans les quartiers la veille de Noël',
      'Décorer les maisons avec des fleurs tropicales et des lumières de Noël',
      'Profiter d\'une journée en famille à la plage l\'après-midi de Noël',
    ],
    es: [
      'Preparar jug-jug, un plato tradicional hecho con sorgo, guisantes verdes y carne salada',
      'Servir jamón horneado glaseado con especias locales y ron',
      'Beber ponche de ron y bebida de sorrel hecha con flores de hibisco',
      'Asistir a los servicios religiosos de la mañana de Navidad',
      'Cantar villancicos por los vecindarios en la víspera de Navidad',
      'Decorar hogares con flores tropicales y luces navideñas',
      'Disfrutar de un día familiar en la playa por la tarde de Navidad',
    ],
  },

  funFacts: {
    en: [
      'Jug-jug, the quintessential Barbadian Christmas dish, is descended from Scottish haggis adapted with Caribbean ingredients.',
      'Sorrel drink, made from hibiscus flowers with spices and rum, is the signature Christmas beverage in Barbados.',
      'Barbadians often paint their homes and chattel houses fresh for Christmas — the island looks extra colorful during the season.',
      'Christmas in Barbados falls during the dry season, so most celebrations happen outdoors in warm, sunny weather.',
      'Great cake, a rich dark fruitcake soaked in rum, is another Barbadian Christmas staple.',
    ],
    fr: [
      'Le jug-jug, le plat de Noël barbadien par excellence, descend du haggis écossais adapté avec des ingrédients caribéens.',
      'La boisson au sorrel, faite de fleurs d\'hibiscus avec des épices et du rhum, est la boisson de Noël signature à la Barbade.',
      'Les Barbadiens repeignent souvent leurs maisons et chattel houses pour Noël — l\'île est particulièrement colorée pendant la saison.',
      'Noël à la Barbade tombe pendant la saison sèche, donc la plupart des célébrations se déroulent en plein air par un temps chaud et ensoleillé.',
      'Le great cake, un riche gâteau aux fruits noirs imbibé de rhum, est un autre classique de Noël barbadien.',
    ],
    es: [
      'El jug-jug, el plato navideño barbadense por excelencia, desciende del haggis escocés adaptado con ingredientes caribeños.',
      'La bebida de sorrel, hecha con flores de hibisco, especias y ron, es la bebida navideña emblemática de Barbados.',
      'Los barbadenses suelen pintar sus casas y chattel houses para Navidad — la isla se ve especialmente colorida durante la temporada.',
      'La Navidad en Barbados cae durante la estación seca, por lo que la mayoría de las celebraciones se realizan al aire libre con clima cálido y soleado.',
      'El great cake, un rico pastel oscuro de frutas empapado en ron, es otro clásico navideño barbadense.',
    ],
  },

  planningChecklist: {
    en: [
      'Order jug-jug ingredients and baked ham in advance from local markets',
      'Prepare great cake (rum fruitcake) weeks ahead to allow it to mature',
      'Make sorrel drink with fresh hibiscus flowers and local spices',
      'Plan church attendance for Christmas morning services',
      'Decorate the home with tropical flowers and festive lights',
    ],
    fr: [
      'Commander les ingrédients du jug-jug et le jambon cuit à l\'avance aux marchés locaux',
      'Préparer le great cake (gâteau au rhum) des semaines à l\'avance pour le laisser mûrir',
      'Faire la boisson au sorrel avec des fleurs d\'hibiscus fraîches et des épices locales',
      'Planifier la participation aux services religieux du matin de Noël',
      'Décorer la maison avec des fleurs tropicales et des lumières festives',
    ],
    es: [
      'Pedir los ingredientes del jug-jug y el jamón horneado con anticipación en los mercados locales',
      'Preparar el great cake (pastel de frutas con ron) semanas antes para dejarlo madurar',
      'Hacer la bebida de sorrel con flores frescas de hibisco y especias locales',
      'Planificar la asistencia a los servicios religiosos de la mañana de Navidad',
      'Decorar el hogar con flores tropicales y luces festivas',
    ],
  },

  relatedHolidays: ['bb_independence-day', 'bs_christmas'],

  seo: {
    en: {
      titleTemplate: 'Christmas {year} in Barbados — Countdown & Traditions',
      descriptionTemplate: 'How many days until Christmas {year} in Barbados? Live countdown to December 25, Bajan Christmas traditions, jug-jug, and celebration guide.',
      keywords: ['Christmas Barbados', 'Bajan Christmas', 'jug-jug recipe', 'Caribbean Christmas', 'Christmas countdown Barbados'],
    },
    fr: {
      titleTemplate: 'Noël {year} à la Barbade — Compte à rebours et traditions',
      descriptionTemplate: 'Combien de jours avant Noël {year} à la Barbade ? Compte à rebours jusqu\'au 25 décembre, traditions de Noël bajanes, jug-jug et guide de célébration.',
      keywords: ['Noël Barbade', 'Noël bajan', 'recette jug-jug', 'Noël caribéen', 'compte à rebours Noël Barbade'],
    },
    es: {
      titleTemplate: 'Navidad {year} en Barbados — Cuenta regresiva y tradiciones',
      descriptionTemplate: '¿Cuántos días faltan para la Navidad {year} en Barbados? Cuenta regresiva hasta el 25 de diciembre, tradiciones navideñas bajanas, jug-jug y guía de celebración.',
      keywords: ['Navidad Barbados', 'Navidad barbadense', 'receta jug-jug', 'Navidad caribeña', 'cuenta regresiva Navidad Barbados'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in Barbados?', fr: 'Quand est Noël {year} à la Barbade ?', es: '¿Cuándo es Navidad {year} en Barbados?' },
      answer: {
        en: 'Christmas {year} in Barbados is on {date} ({dayOfWeek}). It is always celebrated on December 25.',
        fr: 'Noël {year} à la Barbade est le {date} ({dayOfWeek}). Il est toujours célébré le 25 décembre.',
        es: 'La Navidad {year} en Barbados es el {date} ({dayOfWeek}). Siempre se celebra el 25 de diciembre.',
      },
    },
    {
      question: { en: 'What is jug-jug?', fr: 'Qu\'est-ce que le jug-jug ?', es: '¿Qué es el jug-jug?' },
      answer: {
        en: 'Jug-jug is a traditional Barbadian Christmas dish made from guinea corn flour, green peas, and salted meat. It is believed to have evolved from Scottish haggis, which was adapted with local Caribbean ingredients by enslaved Africans during the colonial era.',
        fr: 'Le jug-jug est un plat de Noël traditionnel barbadien fait de farine de sorgho, de petits pois verts et de viande salée. On pense qu\'il a évolué à partir du haggis écossais, adapté avec des ingrédients caribéens locaux par les Africains réduits en esclavage pendant l\'époque coloniale.',
        es: 'El jug-jug es un plato navideño tradicional barbadense hecho de harina de sorgo, guisantes verdes y carne salada. Se cree que evolucionó del haggis escocés, adaptado con ingredientes caribeños locales por los africanos esclavizados durante la era colonial.',
      },
    },
    {
      question: { en: 'What do Barbadians drink at Christmas?', fr: 'Que boivent les Barbadiens à Noël ?', es: '¿Qué beben los barbadenses en Navidad?' },
      answer: {
        en: 'The signature Christmas drink in Barbados is sorrel, made from dried hibiscus flowers steeped with cinnamon, cloves, and orange peel, often spiked with rum. Rum punch is also a popular holiday beverage.',
        fr: 'La boisson de Noël emblématique de la Barbade est le sorrel, fait de fleurs d\'hibiscus séchées infusées avec de la cannelle, des clous de girofle et du zeste d\'orange, souvent agrémenté de rhum. Le punch au rhum est aussi une boisson de fête populaire.',
        es: 'La bebida navideña emblemática de Barbados es el sorrel, hecho con flores secas de hibisco maceradas con canela, clavos de olor y cáscara de naranja, a menudo con ron. El ponche de ron también es una bebida festiva popular.',
      },
    },
    {
      question: { en: 'Is Christmas a public holiday in Barbados?', fr: 'Noël est-il un jour férié à la Barbade ?', es: '¿Es Navidad un feriado público en Barbados?' },
      answer: {
        en: 'Yes, Christmas Day is a public holiday in Barbados. Boxing Day (December 26) is also observed as a public holiday.',
        fr: 'Oui, le jour de Noël est un jour férié à la Barbade. Le lendemain de Noël (26 décembre) est également observé comme jour férié.',
        es: 'Sí, el día de Navidad es un feriado público en Barbados. El día después de Navidad (26 de diciembre) también se observa como feriado público.',
      },
    },
  ],

  colorTheme: 'red-green',
  icon: '🎄',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const bbHolidays: HolidayData[] = [
  errolBarrowDay,
  emancipationDay,
  kadoomentDay,
  independenceDay,
  christmas,
];

export default bbHolidays;
