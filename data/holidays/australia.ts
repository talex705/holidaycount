/**
 * Australia holidays data.
 */

import type { HolidayData } from '@/lib/types';
import {
  getQueensBirthdayAU,
  getMelbourneCup,
} from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'au_new-years-day',
  countryCode: 'au',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'ano-nuevo' },
  names: { en: "New Year's Day", fr: "Le Jour de l'An", es: 'Ano Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 is a national public holiday across all Australian states and territories. Australians celebrate with spectacular fireworks over Sydney Harbour, beach parties, and outdoor gatherings to welcome the new year in the Southern Hemisphere summer.",
    fr: "Le Jour de l'An, le 1er janvier, est un jour ferie national dans tous les Etats et territoires australiens. Les Australiens celebrent avec des feux d'artifice spectaculaires au-dessus du port de Sydney, des fetes sur la plage et des rassemblements en plein air pour accueillir la nouvelle annee en plein ete austral.",
    es: "El Dia de Ano Nuevo, el 1 de enero, es un dia festivo nacional en todos los estados y territorios de Australia. Los australianos celebran con espectaculares fuegos artificiales sobre el puerto de Sidney, fiestas en la playa y reuniones al aire libre para recibir el nuevo ano en pleno verano del hemisferio sur.",
  },

  history: {
    en: "New Year's Day has been celebrated in Australia since European settlement. The Sydney Harbour fireworks display, first held in 1976, has grown into one of the world's most iconic New Year's Eve celebrations, broadcast to over a billion viewers worldwide.\n\nAustralia's position in the Southern Hemisphere means New Year's falls in the middle of summer, giving celebrations a distinctly outdoor and beach-oriented character. The country is among the first major nations to ring in the new year due to its time zones.\n\nIndigenous Australians have their own seasonal calendars and celebrations that predate European arrival by tens of thousands of years, though January 1 is now widely observed across all communities.",
    fr: "Le Jour de l'An est celebre en Australie depuis la colonisation europeenne. Le feu d'artifice du port de Sydney, organise pour la premiere fois en 1976, est devenu l'une des celebrations du Nouvel An les plus emblematiques au monde, diffusee aupres de plus d'un milliard de telespectateurs.\n\nLa position de l'Australie dans l'hemisphere sud fait que le Nouvel An tombe en plein ete, donnant aux celebrations un caractere distinctement estival et tourne vers la plage. Le pays est parmi les premiers a accueillir la nouvelle annee grace a ses fuseaux horaires.\n\nLes Australiens autochtones ont leurs propres calendriers saisonniers et celebrations qui precedent l'arrivee des Europeens de dizaines de milliers d'annees, bien que le 1er janvier soit aujourd'hui largement observe dans toutes les communautes.",
    es: "El Dia de Ano Nuevo se celebra en Australia desde la colonizacion europea. Los fuegos artificiales del puerto de Sidney, realizados por primera vez en 1976, se han convertido en una de las celebraciones de Nochevieja mas iconicas del mundo, transmitida a mas de mil millones de espectadores.\n\nLa posicion de Australia en el hemisferio sur hace que el Ano Nuevo caiga en pleno verano, dando a las celebraciones un caracter marcadamente playero y al aire libre. El pais es uno de los primeros en recibir el nuevo ano gracias a sus zonas horarias.\n\nLos australianos indigenas tienen sus propios calendarios estacionales y celebraciones que preceden la llegada europea por decenas de miles de anos, aunque el 1 de enero es ampliamente observado en todas las comunidades.",
  },

  traditions: {
    en: [
      'Watching the Sydney Harbour Bridge fireworks display',
      'Attending outdoor New Year\'s Eve parties and concerts',
      'Celebrating at the beach with friends and family',
      'Having barbecues and picnics on New Year\'s Day',
      'Taking a dip in the ocean on the first day of the year',
      'Making New Year\'s resolutions',
    ],
    fr: [
      'Regarder le feu d\'artifice du pont du port de Sydney',
      'Assister a des fetes et concerts en plein air pour le reveillon',
      'Celebrer a la plage avec famille et amis',
      'Faire des barbecues et pique-niques le jour de l\'An',
      'Se baigner dans l\'ocean le premier jour de l\'annee',
      'Prendre des resolutions pour la nouvelle annee',
    ],
    es: [
      'Ver los fuegos artificiales del puente del puerto de Sidney',
      'Asistir a fiestas y conciertos al aire libre en Nochevieja',
      'Celebrar en la playa con familia y amigos',
      'Hacer barbacoas y picnics el Dia de Ano Nuevo',
      'Banarse en el oceano el primer dia del ano',
      'Hacer propositos de Ano Nuevo',
    ],
  },

  funFacts: {
    en: [
      'The Sydney NYE fireworks use over 8 tonnes of fireworks and cost approximately AUD $7 million to produce.',
      'Over 1 million people gather around Sydney Harbour to watch the fireworks in person each year.',
      'Australia is one of the first countries in the world to welcome the new year, with Kiribati being the very first.',
      'The Sydney fireworks are broadcast live to an estimated 1 billion viewers worldwide.',
      'Many Australians spend New Year\'s Day at the beach, as January is one of the hottest months of the year.',
    ],
    fr: [
      'Les feux d\'artifice de Sydney utilisent plus de 8 tonnes de materiel pyrotechnique et coutent environ 7 millions de dollars australiens.',
      'Plus d\'un million de personnes se rassemblent autour du port de Sydney pour voir les feux d\'artifice chaque annee.',
      'L\'Australie est l\'un des premiers pays au monde a accueillir la nouvelle annee, Kiribati etant le tout premier.',
      'Les feux d\'artifice de Sydney sont diffuses en direct aupres d\'environ un milliard de telespectateurs dans le monde.',
      'De nombreux Australiens passent le Jour de l\'An a la plage, car janvier est l\'un des mois les plus chauds de l\'annee.',
    ],
    es: [
      'Los fuegos artificiales de Sidney utilizan mas de 8 toneladas de material pirotecnico y cuestan aproximadamente 7 millones de dolares australianos.',
      'Mas de un millon de personas se reunen alrededor del puerto de Sidney para ver los fuegos artificiales cada ano.',
      'Australia es uno de los primeros paises del mundo en recibir el nuevo ano, siendo Kiribati el primero de todos.',
      'Los fuegos artificiales de Sidney se transmiten en vivo a aproximadamente mil millones de espectadores en todo el mundo.',
      'Muchos australianos pasan el Dia de Ano Nuevo en la playa, ya que enero es uno de los meses mas calurosos del ano.',
    ],
  },

  planningChecklist: {
    en: [
      'Book a harbour-view spot or restaurant for NYE fireworks early — prime locations sell out months ahead',
      'Plan beach activities and pack sunscreen for the summer holiday',
      'Stock up on food and drinks for New Year\'s Day barbecues',
      'Arrange transport home from NYE events — public transport often runs extended hours',
      'Check local council events for free fireworks displays and family-friendly celebrations',
    ],
    fr: [
      'Reserver un emplacement avec vue sur le port ou un restaurant pour le reveillon bien a l\'avance',
      'Planifier des activites a la plage et prevoir de la creme solaire pour les vacances d\'ete',
      'Faire le plein de nourriture et de boissons pour les barbecues du Jour de l\'An',
      'Organiser le transport de retour apres les celebrations du reveillon',
      'Verifier les evenements locaux pour des feux d\'artifice gratuits et des celebrations familiales',
    ],
    es: [
      'Reservar un lugar con vista al puerto o un restaurante para Nochevieja con mucha antelacion',
      'Planificar actividades en la playa y llevar protector solar para las vacaciones de verano',
      'Abastecerse de comida y bebida para las barbacoas del Dia de Ano Nuevo',
      'Organizar el transporte de regreso despues de las celebraciones de Nochevieja',
      'Consultar los eventos locales para fuegos artificiales gratuitos y celebraciones familiares',
    ],
  },

  relatedHolidays: ['au_christmas', 'au_boxing-day'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Australia — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in Australia? Live countdown to January 1, Sydney fireworks info, and celebration guide.",
      keywords: ["New Year's Day Australia", 'Sydney fireworks', 'Australian New Year', "New Year's Day countdown", 'NYE Sydney'],
    },
    fr: {
      titleTemplate: "Jour de l'An {year} Australie — Compte a rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'An {year} en Australie ? Compte a rebours, feux d'artifice de Sydney et guide de celebration.",
      keywords: ["Jour de l'An Australie", 'feux artifice Sydney', 'Nouvel An australien', "reveillon Sydney", 'Australie Nouvel An'],
    },
    es: {
      titleTemplate: 'Ano Nuevo {year} Australia — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Ano Nuevo {year} en Australia? Cuenta regresiva, fuegos artificiales de Sidney y guia de celebracion.',
      keywords: ['Ano Nuevo Australia', 'fuegos artificiales Sidney', 'Nochevieja Australia', 'Ano Nuevo Sidney', 'festividades Australia'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in Australia?", fr: "Quand est le Jour de l'An {year} en Australie ?", es: "Cuando es el Dia de Ano Nuevo {year} en Australia?" },
      answer: {
        en: "New Year's Day {year} in Australia is on {date}. It is always January 1 and is a national public holiday across all states and territories.",
        fr: "Le Jour de l'An {year} en Australie est le {date}. C'est toujours le 1er janvier et c'est un jour ferie national dans tous les Etats et territoires.",
        es: "El Dia de Ano Nuevo {year} en Australia es el {date}. Siempre es el 1 de enero y es un dia festivo nacional en todos los estados y territorios.",
      },
    },
    {
      question: { en: 'What time are the Sydney fireworks?', fr: 'A quelle heure sont les feux d\'artifice de Sydney ?', es: 'A que hora son los fuegos artificiales de Sidney?' },
      answer: {
        en: 'The main Sydney Harbour fireworks display begins at midnight on New Year\'s Eve. There is also a family-friendly display at 9 PM. Both are visible from various vantage points around the harbour.',
        fr: 'Le principal feu d\'artifice du port de Sydney commence a minuit le soir du reveillon. Il y a aussi un spectacle familial a 21h. Les deux sont visibles depuis differents points de vue autour du port.',
        es: 'El principal espectaculo de fuegos artificiales del puerto de Sidney comienza a medianoche en Nochevieja. Tambien hay un espectaculo familiar a las 21h. Ambos son visibles desde varios puntos de observacion alrededor del puerto.',
      },
    },
    {
      question: { en: "Is New Year's Day a public holiday in Australia?", fr: "Le Jour de l'An est-il un jour ferie en Australie ?", es: 'Es el Dia de Ano Nuevo un dia festivo en Australia?' },
      answer: {
        en: "Yes, New Year's Day is a national public holiday in Australia. If January 1 falls on a weekend, an additional public holiday may be observed on the following Monday.",
        fr: "Oui, le Jour de l'An est un jour ferie national en Australie. Si le 1er janvier tombe un week-end, un jour ferie supplementaire peut etre observe le lundi suivant.",
        es: "Si, el Dia de Ano Nuevo es un dia festivo nacional en Australia. Si el 1 de enero cae en fin de semana, se puede observar un dia festivo adicional el lunes siguiente.",
      },
    },
    {
      question: { en: 'Why does Australia celebrate New Year in summer?', fr: "Pourquoi l'Australie celebre le Nouvel An en ete ?", es: 'Por que Australia celebra el Ano Nuevo en verano?' },
      answer: {
        en: "Australia is in the Southern Hemisphere, where January falls in the middle of summer. This gives Australian New Year's celebrations their distinctive outdoor, beach-oriented character, unlike the winter celebrations in the Northern Hemisphere.",
        fr: "L'Australie se trouve dans l'hemisphere sud, ou janvier tombe en plein ete. Cela donne aux celebrations du Nouvel An australien leur caractere distinctif en plein air et oriente vers la plage, contrairement aux celebrations hivernales de l'hemisphere nord.",
        es: "Australia esta en el hemisferio sur, donde enero cae en pleno verano. Esto le da a las celebraciones de Ano Nuevo australianas su caracter distintivo al aire libre y orientado a la playa, a diferencia de las celebraciones invernales del hemisferio norte.",
      },
    },
  ],

  colorTheme: 'gold-black',
  icon: '\ud83c\udf86',
};

// ---------------------------------------------------------------------------
// Australia Day — January 26
// ---------------------------------------------------------------------------

const australiaDay: HolidayData = {
  id: 'au_australia-day',
  countryCode: 'au',
  slugs: { en: 'australia-day', fr: 'journee-de-laustralie', es: 'dia-de-australia' },
  names: { en: 'Australia Day', fr: "La Journee de l'Australie", es: 'Dia de Australia' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 26,

  descriptions: {
    en: "Australia Day on January 26 is the official national day of Australia, commemorating the arrival of the First Fleet at Port Jackson in 1788. It is celebrated with fireworks, barbecues, citizenship ceremonies, and community events, though it is also a day of mourning and protest for many Indigenous Australians who refer to it as Invasion Day or Survival Day.",
    fr: "La Journee de l'Australie, le 26 janvier, est la fete nationale officielle de l'Australie, commemorant l'arrivee de la Premiere Flotte a Port Jackson en 1788. Elle est celebree avec des feux d'artifice, des barbecues, des ceremonies de citoyennete et des evenements communautaires, bien qu'elle soit aussi un jour de deuil et de protestation pour de nombreux Australiens autochtones qui l'appellent Jour de l'Invasion ou Jour de la Survie.",
    es: "El Dia de Australia, el 26 de enero, es el dia nacional oficial de Australia, que conmemora la llegada de la Primera Flota a Port Jackson en 1788. Se celebra con fuegos artificiales, barbacoas, ceremonias de ciudadania y eventos comunitarios, aunque tambien es un dia de duelo y protesta para muchos australianos indigenas que lo llaman Dia de la Invasion o Dia de la Supervivencia.",
  },

  history: {
    en: "Australia Day marks the date when Captain Arthur Phillip raised the British flag at Sydney Cove on January 26, 1788, establishing the first European settlement in Australia. The First Fleet carried around 750 convicts and over 250 free settlers, marines, and crew from Britain.\n\nThe day has been celebrated in various forms since the early 19th century, but it was not until 1994 that all states and territories began to consistently celebrate it as a public holiday on January 26. Before that, some states observed it on the nearest Monday.\n\nIn recent decades, the date has become increasingly controversial. Many Indigenous Australians and their allies view it as a day of mourning, marking the beginning of colonisation, dispossession, and the destruction of Indigenous cultures. The Invasion Day/Survival Day movement has grown significantly, with large rallies and marches held in major cities each year.",
    fr: "La Journee de l'Australie marque la date a laquelle le capitaine Arthur Phillip a hisse le drapeau britannique a Sydney Cove le 26 janvier 1788, etablissant la premiere colonie europeenne en Australie. La Premiere Flotte transportait environ 750 condamnes et plus de 250 colons libres, marines et equipages de Grande-Bretagne.\n\nLe jour est celebre sous differentes formes depuis le debut du XIXe siecle, mais ce n'est qu'en 1994 que tous les Etats et territoires ont commence a le celebrer uniformement comme jour ferie le 26 janvier. Avant cela, certains Etats l'observaient le lundi le plus proche.\n\nAu cours des dernieres decennies, la date est devenue de plus en plus controversee. De nombreux Australiens autochtones et leurs allies le considerent comme un jour de deuil, marquant le debut de la colonisation, de la depossession et de la destruction des cultures autochtones. Le mouvement du Jour de l'Invasion/Jour de la Survie s'est considerablement developpe, avec de grandes manifestations et marches organisees dans les grandes villes chaque annee.",
    es: "El Dia de Australia marca la fecha en que el capitan Arthur Phillip izo la bandera britanica en Sydney Cove el 26 de enero de 1788, estableciendo el primer asentamiento europeo en Australia. La Primera Flota transportaba alrededor de 750 convictos y mas de 250 colonos libres, marines y tripulacion de Gran Bretana.\n\nEl dia se ha celebrado de diversas formas desde principios del siglo XIX, pero no fue hasta 1994 que todos los estados y territorios comenzaron a celebrarlo de manera uniforme como dia festivo el 26 de enero. Antes de eso, algunos estados lo observaban el lunes mas cercano.\n\nEn las ultimas decadas, la fecha se ha vuelto cada vez mas controvertida. Muchos australianos indigenas y sus aliados la ven como un dia de duelo, que marca el inicio de la colonizacion, la desposesion y la destruccion de las culturas indigenas. El movimiento del Dia de la Invasion/Dia de la Supervivencia ha crecido significativamente, con grandes manifestaciones y marchas en las principales ciudades cada ano.",
  },

  traditions: {
    en: [
      'Attending community barbecues and outdoor picnics',
      'Watching fireworks displays in major cities',
      'Attending Australian of the Year award announcements',
      'Participating in or watching citizenship ceremonies',
      'Attending Invasion Day/Survival Day rallies and marches',
      'Going to the beach and enjoying summer activities',
      'Listening to the Triple J Hottest 100 countdown (moved from Jan 26 in 2018)',
    ],
    fr: [
      'Participer a des barbecues communautaires et pique-niques en plein air',
      'Regarder les feux d\'artifice dans les grandes villes',
      'Assister aux annonces des prix de l\'Australien de l\'annee',
      'Participer ou assister a des ceremonies de citoyennete',
      'Participer aux rassemblements et marches du Jour de l\'Invasion/Survie',
      'Aller a la plage et profiter des activites estivales',
      'Ecouter le classement Triple J Hottest 100 (deplace du 26 janvier en 2018)',
    ],
    es: [
      'Asistir a barbacoas comunitarias y picnics al aire libre',
      'Ver espectaculos de fuegos artificiales en las principales ciudades',
      'Asistir a los anuncios de los premios Australiano del Ano',
      'Participar o asistir a ceremonias de ciudadania',
      'Participar en manifestaciones y marchas del Dia de la Invasion/Supervivencia',
      'Ir a la playa y disfrutar de actividades de verano',
      'Escuchar la cuenta regresiva Triple J Hottest 100 (movida del 26 de enero en 2018)',
    ],
  },

  funFacts: {
    en: [
      'The First Fleet consisted of 11 ships that sailed over 15,000 miles from Portsmouth, England, to Botany Bay.',
      'Australia Day citizenship ceremonies are the largest in the country, with thousands of people becoming citizens on this day each year.',
      'The Triple J Hottest 100, once held on Australia Day, was moved to the fourth weekend in January in 2018 out of respect for Indigenous Australians.',
      'Australia Day was not uniformly celebrated on January 26 across all states until 1994.',
      'Some local councils in Australia have moved their citizenship ceremonies away from January 26 in recognition of Indigenous concerns.',
    ],
    fr: [
      'La Premiere Flotte etait composee de 11 navires qui ont parcouru plus de 24 000 kilometres de Portsmouth, en Angleterre, jusqu\'a Botany Bay.',
      'Les ceremonies de citoyennete du Jour de l\'Australie sont les plus grandes du pays, avec des milliers de personnes qui deviennent citoyens ce jour-la chaque annee.',
      'Le Triple J Hottest 100, autrefois organise le jour de l\'Australie, a ete deplace au quatrieme week-end de janvier en 2018 par respect pour les Australiens autochtones.',
      'La Journee de l\'Australie n\'a pas ete celebree uniformement le 26 janvier dans tous les Etats jusqu\'en 1994.',
      'Certains conseils locaux en Australie ont deplace leurs ceremonies de citoyennete hors du 26 janvier en reconnaissance des preoccupations autochtones.',
    ],
    es: [
      'La Primera Flota estaba compuesta por 11 barcos que navegaron mas de 24.000 kilometros desde Portsmouth, Inglaterra, hasta Botany Bay.',
      'Las ceremonias de ciudadania del Dia de Australia son las mas grandes del pais, con miles de personas que se convierten en ciudadanos ese dia cada ano.',
      'El Triple J Hottest 100, que antes se celebraba el Dia de Australia, fue trasladado al cuarto fin de semana de enero en 2018 por respeto a los australianos indigenas.',
      'El Dia de Australia no se celebro de manera uniforme el 26 de enero en todos los estados hasta 1994.',
      'Algunos consejos locales en Australia han trasladado sus ceremonias de ciudadania fuera del 26 de enero en reconocimiento de las preocupaciones indigenas.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan a barbecue or picnic with friends and family',
      'Check local council events for fireworks, concerts, and community celebrations',
      'Learn about Indigenous Australian perspectives on the day',
      'Apply sunscreen and stay hydrated — late January is peak summer',
      'Arrange transport if attending large public events',
    ],
    fr: [
      'Planifier un barbecue ou un pique-nique avec famille et amis',
      'Verifier les evenements locaux pour les feux d\'artifice, concerts et celebrations communautaires',
      'Se renseigner sur les perspectives des Australiens autochtones concernant ce jour',
      'Appliquer de la creme solaire et rester hydrate — fin janvier est en plein ete',
      'Organiser le transport si vous assistez a de grands evenements publics',
    ],
    es: [
      'Planificar una barbacoa o picnic con familia y amigos',
      'Consultar los eventos locales para fuegos artificiales, conciertos y celebraciones comunitarias',
      'Aprender sobre las perspectivas de los australianos indigenas sobre este dia',
      'Aplicar protector solar y mantenerse hidratado — finales de enero es pleno verano',
      'Organizar el transporte si asiste a grandes eventos publicos',
    ],
  },

  relatedHolidays: ['au_anzac-day', 'au_new-years-day'],

  seo: {
    en: {
      titleTemplate: 'Australia Day {year} — Countdown, History & Guide',
      descriptionTemplate: 'When is Australia Day {year}? Live countdown to January 26, history, traditions, and celebration guide.',
      keywords: ['Australia Day', 'January 26 Australia', 'Australia Day public holiday', 'Australia national day', 'Invasion Day'],
    },
    fr: {
      titleTemplate: "Journee de l'Australie {year} — Compte a rebours et guide",
      descriptionTemplate: "Quand est la Journee de l'Australie {year} ? Compte a rebours, histoire, traditions et guide de celebration.",
      keywords: ["Journee de l'Australie", '26 janvier Australie', 'fete nationale australienne', 'jour ferie Australie', 'Jour de l\'Invasion'],
    },
    es: {
      titleTemplate: 'Dia de Australia {year} — Cuenta regresiva e historia',
      descriptionTemplate: 'Cuando es el Dia de Australia {year}? Cuenta regresiva, historia, tradiciones y guia de celebracion.',
      keywords: ['Dia de Australia', '26 de enero Australia', 'fiesta nacional Australia', 'dia festivo Australia', 'Dia de la Invasion'],
    },
  },

  faq: [
    {
      question: { en: 'When is Australia Day {year}?', fr: "Quand est la Journee de l'Australie {year} ?", es: 'Cuando es el Dia de Australia {year}?' },
      answer: {
        en: 'Australia Day {year} is on {date}. It is always January 26. If it falls on a weekend, the public holiday may be observed on the following Monday in some jurisdictions.',
        fr: "La Journee de l'Australie {year} est le {date}. C'est toujours le 26 janvier. Si cela tombe un week-end, le jour ferie peut etre observe le lundi suivant dans certaines juridictions.",
        es: 'El Dia de Australia {year} es el {date}. Siempre es el 26 de enero. Si cae en fin de semana, el dia festivo puede observarse el lunes siguiente en algunas jurisdicciones.',
      },
    },
    {
      question: { en: 'Why is Australia Day controversial?', fr: "Pourquoi la Journee de l'Australie est-elle controversee ?", es: 'Por que es controvertido el Dia de Australia?' },
      answer: {
        en: "Australia Day is controversial because January 26 marks the date of British colonisation in 1788, which began a period of dispossession and suffering for Indigenous Australians. Many Indigenous Australians and allies refer to it as Invasion Day or Survival Day and hold rallies calling for the date to be changed.",
        fr: "La Journee de l'Australie est controversee car le 26 janvier marque la date de la colonisation britannique en 1788, qui a inaugure une periode de depossession et de souffrance pour les Australiens autochtones. De nombreux Australiens autochtones et allies l'appellent Jour de l'Invasion ou Jour de la Survie et organisent des manifestations pour changer la date.",
        es: "El Dia de Australia es controvertido porque el 26 de enero marca la fecha de la colonizacion britanica en 1788, que inicio un periodo de desposesion y sufrimiento para los australianos indigenas. Muchos australianos indigenas y aliados lo llaman Dia de la Invasion o Dia de la Supervivencia y realizan manifestaciones pidiendo que se cambie la fecha.",
      },
    },
    {
      question: { en: 'What is Invasion Day?', fr: "Qu'est-ce que le Jour de l'Invasion ?", es: 'Que es el Dia de la Invasion?' },
      answer: {
        en: "Invasion Day is the name used by many Indigenous Australians and allies for January 26, the date the British First Fleet arrived in 1788. Rather than celebrating, they mourn the loss of Indigenous lands, cultures, and lives that followed colonisation. Large Invasion Day rallies are held in major Australian cities each year.",
        fr: "Le Jour de l'Invasion est le nom utilise par de nombreux Australiens autochtones et allies pour le 26 janvier, date de l'arrivee de la Premiere Flotte britannique en 1788. Plutot que de celebrer, ils commemorent la perte des terres, cultures et vies autochtones qui a suivi la colonisation. De grandes manifestations du Jour de l'Invasion sont organisees dans les grandes villes australiennes chaque annee.",
        es: "El Dia de la Invasion es el nombre utilizado por muchos australianos indigenas y aliados para el 26 de enero, la fecha en que llego la Primera Flota britanica en 1788. En lugar de celebrar, lloran la perdida de tierras, culturas y vidas indigenas que siguio a la colonizacion. Grandes manifestaciones del Dia de la Invasion se realizan en las principales ciudades australianas cada ano.",
      },
    },
    {
      question: { en: 'Is Australia Day a public holiday?', fr: "La Journee de l'Australie est-elle un jour ferie ?", es: 'Es el Dia de Australia un dia festivo?' },
      answer: {
        en: "Yes, Australia Day is a national public holiday observed in all Australian states and territories on {dayOfWeek}, {date}. Most businesses, schools, and government offices are closed.",
        fr: "Oui, la Journee de l'Australie est un jour ferie national observe dans tous les Etats et territoires australiens le {dayOfWeek} {date}. La plupart des entreprises, ecoles et bureaux gouvernementaux sont fermes.",
        es: "Si, el Dia de Australia es un dia festivo nacional observado en todos los estados y territorios australianos el {dayOfWeek} {date}. La mayoria de los negocios, escuelas y oficinas gubernamentales estan cerrados.",
      },
    },
  ],

  colorTheme: 'blue-gold',
  icon: '\ud83c\udde6\ud83c\uddfa',
};

// ---------------------------------------------------------------------------
// ANZAC Day — April 25
// ---------------------------------------------------------------------------

const anzacDay: HolidayData = {
  id: 'au_anzac-day',
  countryCode: 'au',
  slugs: { en: 'anzac-day', fr: 'journee-de-lanzac', es: 'dia-del-anzac' },
  names: { en: 'ANZAC Day', fr: "La Journee de l'ANZAC", es: 'Dia del ANZAC' },

  dateType: 'fixed',
  fixedMonth: 4,
  fixedDay: 25,

  descriptions: {
    en: "ANZAC Day on April 25 is one of Australia's most important national occasions, commemorating the Australian and New Zealand Army Corps (ANZAC) who landed at Gallipoli in 1915. It is a day of remembrance for all Australians and New Zealanders who served and died in wars and peacekeeping operations.",
    fr: "La Journee de l'ANZAC, le 25 avril, est l'une des occasions nationales les plus importantes d'Australie, commemorant le Corps d'armee australien et neo-zelandais (ANZAC) qui a debarque a Gallipoli en 1915. C'est un jour de souvenir pour tous les Australiens et Neo-Zelandais qui ont servi et sont morts dans les guerres et operations de maintien de la paix.",
    es: "El Dia del ANZAC, el 25 de abril, es una de las ocasiones nacionales mas importantes de Australia, que conmemora al Cuerpo del Ejercito Australiano y Neozelandes (ANZAC) que desembarco en Gallipoli en 1915. Es un dia de recuerdo para todos los australianos y neozelandeses que sirvieron y murieron en guerras y operaciones de mantenimiento de la paz.",
  },

  history: {
    en: "On April 25, 1915, soldiers of the Australian and New Zealand Army Corps (ANZAC) landed on the Gallipoli Peninsula in Turkey as part of the Allied campaign to capture the Dardanelles strait during World War I. The campaign lasted eight months and resulted in heavy casualties on both sides, with over 8,000 Australian soldiers killed.\n\nThe first ANZAC Day commemorations were held in 1916. By the 1920s, the tradition of dawn services, marches, and reunions was well established. ANZAC Day became a national public holiday in all Australian states by 1927. The significance of the day has grown beyond Gallipoli to honour all Australian military service.\n\nThe dawn service tradition represents the time of the original Gallipoli landing. ANZAC Day is observed simultaneously in Australia and New Zealand, and ceremonies are also held at Gallipoli and at war memorials around the world where Australians served.",
    fr: "Le 25 avril 1915, les soldats du Corps d'armee australien et neo-zelandais (ANZAC) ont debarque sur la peninsule de Gallipoli en Turquie dans le cadre de la campagne alliee pour capturer le detroit des Dardanelles pendant la Premiere Guerre mondiale. La campagne a dure huit mois et a cause de lourdes pertes des deux cotes, avec plus de 8 000 soldats australiens tues.\n\nLes premieres commemorations de la Journee de l'ANZAC ont eu lieu en 1916. Dans les annees 1920, la tradition des ceremonies de l'aube, des defiles et des reunions etait bien etablie. La Journee de l'ANZAC est devenue un jour ferie national dans tous les Etats australiens en 1927. La signification du jour s'est etendue au-dela de Gallipoli pour honorer tout service militaire australien.\n\nLa tradition de la ceremonie de l'aube represente l'heure du debarquement original a Gallipoli. La Journee de l'ANZAC est observee simultanement en Australie et en Nouvelle-Zelande, et des ceremonies sont egalement organisees a Gallipoli et dans des memoriaux de guerre a travers le monde ou les Australiens ont servi.",
    es: "El 25 de abril de 1915, los soldados del Cuerpo del Ejercito Australiano y Neozelandes (ANZAC) desembarcaron en la Peninsula de Gallipoli en Turquia como parte de la campana aliada para capturar el estrecho de los Dardanelos durante la Primera Guerra Mundial. La campana duro ocho meses y resulto en fuertes bajas en ambos bandos, con mas de 8.000 soldados australianos muertos.\n\nLas primeras conmemoraciones del Dia del ANZAC se realizaron en 1916. Para la decada de 1920, la tradicion de los servicios del amanecer, desfiles y reuniones estaba bien establecida. El Dia del ANZAC se convirtio en dia festivo nacional en todos los estados australianos para 1927. El significado del dia se ha extendido mas alla de Gallipoli para honrar todo el servicio militar australiano.\n\nLa tradicion del servicio del amanecer representa la hora del desembarco original en Gallipoli. El Dia del ANZAC se observa simultaneamente en Australia y Nueva Zelanda, y tambien se realizan ceremonias en Gallipoli y en memoriales de guerra en todo el mundo donde sirvieron los australianos.",
  },

  traditions: {
    en: [
      'Attending dawn services at war memorials across the country',
      'Participating in or watching ANZAC Day marches',
      'Playing two-up, an Australian coin-tossing game traditionally allowed only on ANZAC Day',
      'Wearing rosemary or a red poppy as a symbol of remembrance',
      'Baking and sharing ANZAC biscuits',
      'Observing a minute of silence at ceremonies',
      'Visiting the Australian War Memorial in Canberra',
    ],
    fr: [
      'Assister aux ceremonies de l\'aube devant les memoriaux de guerre a travers le pays',
      'Participer ou assister aux defiles de la Journee de l\'ANZAC',
      'Jouer au two-up, un jeu de pile ou face australien traditionnellement autorise seulement le jour de l\'ANZAC',
      'Porter du romarin ou un coquelicot rouge comme symbole de souvenir',
      'Preparer et partager des biscuits ANZAC',
      'Observer une minute de silence lors des ceremonies',
      'Visiter le Memorial australien de la guerre a Canberra',
    ],
    es: [
      'Asistir a los servicios del amanecer en los memoriales de guerra de todo el pais',
      'Participar o ver los desfiles del Dia del ANZAC',
      'Jugar al two-up, un juego australiano de lanzamiento de monedas tradicionalmente permitido solo el Dia del ANZAC',
      'Llevar romero o una amapola roja como simbolo de recuerdo',
      'Hornear y compartir galletas ANZAC',
      'Observar un minuto de silencio en las ceremonias',
      'Visitar el Memorial Australiano de Guerra en Canberra',
    ],
  },

  funFacts: {
    en: [
      'Two-up is illegal in Australian casinos and pubs on every day except ANZAC Day, when it is traditionally permitted.',
      'ANZAC biscuits were originally sent by wives and mothers to soldiers overseas because the ingredients did not spoil easily.',
      'The word ANZAC is protected by law in Australia — it cannot be used commercially without government approval.',
      'The Australian War Memorial in Canberra holds a Last Post ceremony every day at closing time, naming a fallen soldier.',
      'Over 100,000 Australians served in the Gallipoli campaign, and more than 8,000 lost their lives.',
    ],
    fr: [
      'Le two-up est illegal dans les casinos et pubs australiens tous les jours sauf le jour de l\'ANZAC, ou il est traditionnellement autorise.',
      'Les biscuits ANZAC etaient a l\'origine envoyes par les epouses et meres aux soldats outre-mer car les ingredients ne se deterioraient pas facilement.',
      'Le mot ANZAC est protege par la loi en Australie — il ne peut pas etre utilise commercialement sans l\'approbation du gouvernement.',
      'Le Memorial australien de la guerre a Canberra organise une ceremonie du Last Post tous les jours a l\'heure de fermeture, nommant un soldat tombe au combat.',
      'Plus de 100 000 Australiens ont servi dans la campagne de Gallipoli, et plus de 8 000 ont perdu la vie.',
    ],
    es: [
      'El two-up es ilegal en los casinos y pubs australianos todos los dias excepto el Dia del ANZAC, cuando se permite tradicionalmente.',
      'Las galletas ANZAC fueron originalmente enviadas por esposas y madres a los soldados en el extranjero porque los ingredientes no se estropeaban facilmente.',
      'La palabra ANZAC esta protegida por ley en Australia — no puede usarse comercialmente sin la aprobacion del gobierno.',
      'El Memorial Australiano de Guerra en Canberra celebra una ceremonia del Last Post todos los dias a la hora de cierre, nombrando a un soldado caido.',
      'Mas de 100.000 australianos sirvieron en la campana de Gallipoli, y mas de 8.000 perdieron la vida.',
    ],
  },

  planningChecklist: {
    en: [
      'Set an early alarm for the dawn service — it typically begins at 4:30 or 5:00 AM',
      'Find your nearest war memorial or RSL club for ceremonies',
      'Bake ANZAC biscuits to share with family and friends',
      'Wear a red poppy or sprig of rosemary',
      'Teach children about the significance of the day and the ANZAC tradition',
    ],
    fr: [
      'Mettre un reveil tot pour la ceremonie de l\'aube — elle commence generalement a 4h30 ou 5h00',
      'Trouver le memorial de guerre ou le club RSL le plus proche pour les ceremonies',
      'Preparer des biscuits ANZAC a partager avec famille et amis',
      'Porter un coquelicot rouge ou un brin de romarin',
      'Expliquer aux enfants la signification de ce jour et la tradition ANZAC',
    ],
    es: [
      'Poner una alarma temprana para el servicio del amanecer — generalmente comienza a las 4:30 o 5:00 AM',
      'Encontrar el memorial de guerra o club RSL mas cercano para las ceremonias',
      'Hornear galletas ANZAC para compartir con familia y amigos',
      'Llevar una amapola roja o una ramita de romero',
      'Ensenar a los ninos sobre la importancia del dia y la tradicion ANZAC',
    ],
  },

  relatedHolidays: ['au_australia-day', 'au_queens-birthday'],

  seo: {
    en: {
      titleTemplate: 'ANZAC Day {year} Australia — Countdown & History',
      descriptionTemplate: 'When is ANZAC Day {year}? Live countdown to April 25, Gallipoli history, dawn service info, and traditions.',
      keywords: ['ANZAC Day', 'ANZAC Day Australia', 'Gallipoli', 'dawn service ANZAC', 'April 25 Australia'],
    },
    fr: {
      titleTemplate: "Journee de l'ANZAC {year} — Compte a rebours et histoire",
      descriptionTemplate: "Quand est la Journee de l'ANZAC {year} ? Compte a rebours, histoire de Gallipoli, ceremonies de l'aube et traditions.",
      keywords: ["Journee de l'ANZAC", 'ANZAC Australie', 'Gallipoli', "ceremonie de l'aube", '25 avril Australie'],
    },
    es: {
      titleTemplate: 'Dia del ANZAC {year} — Cuenta regresiva e historia',
      descriptionTemplate: 'Cuando es el Dia del ANZAC {year}? Cuenta regresiva, historia de Gallipoli, servicios del amanecer y tradiciones.',
      keywords: ['Dia del ANZAC', 'ANZAC Australia', 'Gallipoli', 'servicio del amanecer', '25 de abril Australia'],
    },
  },

  faq: [
    {
      question: { en: 'When is ANZAC Day {year}?', fr: "Quand est la Journee de l'ANZAC {year} ?", es: 'Cuando es el Dia del ANZAC {year}?' },
      answer: {
        en: 'ANZAC Day {year} falls on {date}. It is always April 25 and is a national public holiday in Australia.',
        fr: "La Journee de l'ANZAC {year} tombe le {date}. C'est toujours le 25 avril et c'est un jour ferie national en Australie.",
        es: 'El Dia del ANZAC {year} cae el {date}. Siempre es el 25 de abril y es un dia festivo nacional en Australia.',
      },
    },
    {
      question: { en: 'What does ANZAC stand for?', fr: 'Que signifie ANZAC ?', es: 'Que significa ANZAC?' },
      answer: {
        en: 'ANZAC stands for Australian and New Zealand Army Corps. It was formed in 1915 during World War I and fought at Gallipoli and on the Western Front.',
        fr: "ANZAC signifie Australian and New Zealand Army Corps (Corps d'armee australien et neo-zelandais). Il a ete forme en 1915 pendant la Premiere Guerre mondiale et a combattu a Gallipoli et sur le Front occidental.",
        es: 'ANZAC significa Australian and New Zealand Army Corps (Cuerpo del Ejercito Australiano y Neozelandes). Fue formado en 1915 durante la Primera Guerra Mundial y lucho en Gallipoli y en el Frente Occidental.',
      },
    },
    {
      question: { en: 'What is a dawn service?', fr: "Qu'est-ce qu'une ceremonie de l'aube ?", es: 'Que es un servicio del amanecer?' },
      answer: {
        en: "A dawn service is a commemorative ceremony held at sunrise on ANZAC Day. It originated from the military practice of standing to arms at dawn. The services include the Last Post bugle call, a minute of silence, and the laying of wreaths at war memorials.",
        fr: "Une ceremonie de l'aube est une ceremonie commemorative organisee au lever du soleil le jour de l'ANZAC. Elle trouve son origine dans la pratique militaire de se tenir pret au combat a l'aube. Les ceremonies comprennent la sonnerie du Last Post, une minute de silence et le depot de gerbes aux memoriaux de guerre.",
        es: "Un servicio del amanecer es una ceremonia conmemorativa realizada al amanecer en el Dia del ANZAC. Se origino de la practica militar de estar en pie de armas al amanecer. Los servicios incluyen el toque de corneta del Last Post, un minuto de silencio y la colocacion de coronas en los memoriales de guerra.",
      },
    },
    {
      question: { en: 'What is two-up?', fr: "Qu'est-ce que le two-up ?", es: 'Que es el two-up?' },
      answer: {
        en: "Two-up is a traditional Australian gambling game in which two coins are tossed in the air and players bet on whether they land on heads or tails. It was popular among soldiers in the trenches during World War I. On ANZAC Day, it is legally permitted to play two-up in pubs and RSL clubs across Australia.",
        fr: "Le two-up est un jeu de hasard traditionnel australien dans lequel deux pieces sont lancees en l'air et les joueurs parient sur le resultat pile ou face. Il etait populaire parmi les soldats dans les tranchees pendant la Premiere Guerre mondiale. Le jour de l'ANZAC, il est legalement autorise de jouer au two-up dans les pubs et clubs RSL a travers l'Australie.",
        es: "El two-up es un juego de azar tradicional australiano en el que se lanzan dos monedas al aire y los jugadores apuestan si caen en cara o cruz. Era popular entre los soldados en las trincheras durante la Primera Guerra Mundial. En el Dia del ANZAC, esta legalmente permitido jugar al two-up en pubs y clubes RSL en toda Australia.",
      },
    },
  ],

  colorTheme: 'red-gold',
  icon: '\ud83c\udf3a',
};

// ---------------------------------------------------------------------------
// Queen's Birthday — 2nd Monday of June (most states)
// ---------------------------------------------------------------------------

const queensBirthday: HolidayData = {
  id: 'au_queens-birthday',
  countryCode: 'au',
  slugs: { en: 'queens-birthday', fr: 'anniversaire-de-la-reine', es: 'cumpleanos-de-la-reina' },
  names: { en: "Queen's Birthday", fr: "Anniversaire de la Reine", es: "Cumpleanos de la Reina" },

  dateType: 'calculated',
  calculateDate: getQueensBirthdayAU,

  descriptions: {
    en: "The Queen's Birthday public holiday in Australia honours the reigning British monarch and is observed on the second Monday of June in most states. The date varies by state, with Western Australia and Queensland sometimes observing it on different dates. It is a day for community events, the Queen's Birthday Honours list, and an extra long weekend.",
    fr: "Le jour ferie de l'Anniversaire de la Reine en Australie honore le monarque britannique regnant et est observe le deuxieme lundi de juin dans la plupart des Etats. La date varie selon les Etats, l'Australie-Occidentale et le Queensland l'observant parfois a des dates differentes. C'est un jour d'evenements communautaires, de la liste des honneurs de l'anniversaire de la Reine et d'un long week-end supplementaire.",
    es: "El dia festivo del Cumpleanos de la Reina en Australia honra al monarca britanico reinante y se observa el segundo lunes de junio en la mayoria de los estados. La fecha varia segun el estado, con Australia Occidental y Queensland observandolo a veces en fechas diferentes. Es un dia para eventos comunitarios, la lista de honores del cumpleanos de la Reina y un fin de semana largo adicional.",
  },

  history: {
    en: "The tradition of celebrating the sovereign's birthday in Australia dates back to the colonial era. The holiday does not fall on the actual birthday of the reigning monarch but is instead set by each state government. For most states, it is the second Monday of June, a convention adopted for consistency.\n\nThe holiday was originally called the King's Birthday when a king reigned. With the accession of King Charles III in 2022, some states have considered renaming it, though the name and date remain the same in most jurisdictions as of recent years.\n\nThe Queen's Birthday Honours list, announced around this time, recognises Australians who have made outstanding contributions to their communities. The holiday also provides an opportunity for a mid-year long weekend, popular for short getaways.",
    fr: "La tradition de celebrer l'anniversaire du souverain en Australie remonte a l'epoque coloniale. Le jour ferie ne tombe pas le jour de l'anniversaire reel du monarque regnant mais est fixe par le gouvernement de chaque Etat. Pour la plupart des Etats, c'est le deuxieme lundi de juin, une convention adoptee pour plus de coherence.\n\nLe jour ferie s'appelait a l'origine Anniversaire du Roi lorsqu'un roi regnait. Avec l'accession du roi Charles III en 2022, certains Etats ont envisage de le renommer, bien que le nom et la date restent les memes dans la plupart des juridictions ces dernieres annees.\n\nLa liste des honneurs de l'Anniversaire de la Reine, annoncee a cette periode, reconnait les Australiens qui ont apporte des contributions exceptionnelles a leurs communautes. Le jour ferie offre egalement l'occasion d'un long week-end en milieu d'annee, populaire pour de courtes escapades.",
    es: "La tradicion de celebrar el cumpleanos del soberano en Australia se remonta a la era colonial. El dia festivo no cae en el cumpleanos real del monarca reinante, sino que es fijado por el gobierno de cada estado. Para la mayoria de los estados, es el segundo lunes de junio, una convencion adoptada por consistencia.\n\nEl dia festivo se llamaba originalmente Cumpleanos del Rey cuando reinaba un rey. Con la ascension del rey Carlos III en 2022, algunos estados han considerado renombrarlo, aunque el nombre y la fecha siguen siendo los mismos en la mayoria de las jurisdicciones en los ultimos anos.\n\nLa lista de honores del Cumpleanos de la Reina, anunciada por estas fechas, reconoce a los australianos que han hecho contribuciones excepcionales a sus comunidades. El dia festivo tambien ofrece la oportunidad de un fin de semana largo a mitad de ano, popular para escapadas cortas.",
  },

  traditions: {
    en: [
      'Enjoying a long weekend getaway during the Australian winter',
      'Following the announcement of the Queen\'s Birthday Honours list',
      'Attending community events and local festivals',
      'Visiting ski resorts as the snow season begins in June',
      'Watching football (AFL and NRL) fixtures scheduled for the long weekend',
    ],
    fr: [
      'Profiter d\'un long week-end d\'escapade pendant l\'hiver australien',
      'Suivre l\'annonce de la liste des honneurs de l\'Anniversaire de la Reine',
      'Assister a des evenements communautaires et festivals locaux',
      'Visiter des stations de ski au debut de la saison de neige en juin',
      'Regarder les matchs de football (AFL et NRL) programmes pour le long week-end',
    ],
    es: [
      'Disfrutar de una escapada de fin de semana largo durante el invierno australiano',
      'Seguir el anuncio de la lista de honores del Cumpleanos de la Reina',
      'Asistir a eventos comunitarios y festivales locales',
      'Visitar estaciones de esqui al comienzo de la temporada de nieve en junio',
      'Ver partidos de futbol (AFL y NRL) programados para el fin de semana largo',
    ],
  },

  funFacts: {
    en: [
      'The Queen\'s Birthday holiday does not fall on the actual birthday of any recent British monarch.',
      'Western Australia celebrates the Queen\'s Birthday in late September or October, not June.',
      'Queensland moved its Queen\'s Birthday holiday from June to October in 2012, then back to June in 2016.',
      'The holiday has been celebrated in Australia since at least 1788, when Governor Phillip marked George III\'s birthday.',
      'The Queen\'s Birthday Honours recognise everyday Australians alongside prominent public figures.',
    ],
    fr: [
      'Le jour ferie de l\'Anniversaire de la Reine ne tombe pas le jour de l\'anniversaire reel d\'un monarque britannique recent.',
      'L\'Australie-Occidentale celebre l\'Anniversaire de la Reine fin septembre ou octobre, pas en juin.',
      'Le Queensland a deplace son jour ferie de l\'Anniversaire de la Reine de juin a octobre en 2012, puis de nouveau en juin en 2016.',
      'Le jour ferie est celebre en Australie depuis au moins 1788, quand le gouverneur Phillip a marque l\'anniversaire de George III.',
      'Les honneurs de l\'Anniversaire de la Reine reconnaissent des Australiens ordinaires aux cotes de personnalites publiques eminentes.',
    ],
    es: [
      'El dia festivo del Cumpleanos de la Reina no cae en el cumpleanos real de ningun monarca britanico reciente.',
      'Australia Occidental celebra el Cumpleanos de la Reina a finales de septiembre u octubre, no en junio.',
      'Queensland traslado su dia festivo del Cumpleanos de la Reina de junio a octubre en 2012, y luego de nuevo a junio en 2016.',
      'El dia festivo se celebra en Australia desde al menos 1788, cuando el gobernador Phillip marco el cumpleanos de Jorge III.',
      'Los honores del Cumpleanos de la Reina reconocen a australianos comunes junto con figuras publicas prominentes.',
    ],
  },

  planningChecklist: {
    en: [
      'Book accommodation early if planning a long weekend trip — ski resorts fill up fast',
      'Check which date your state observes the holiday, as it varies between states',
      'Plan indoor or winter activities as June is mid-winter in Australia',
      'Follow the Queen\'s Birthday Honours announcements',
      'Check local event listings for community celebrations and festivals',
    ],
    fr: [
      'Reserver un hebergement tot si vous planifiez un voyage de long week-end — les stations de ski se remplissent vite',
      'Verifier la date a laquelle votre Etat observe le jour ferie, car elle varie selon les Etats',
      'Planifier des activites d\'interieur ou d\'hiver car juin est en plein hiver en Australie',
      'Suivre les annonces des honneurs de l\'Anniversaire de la Reine',
      'Consulter les listes d\'evenements locaux pour les celebrations et festivals communautaires',
    ],
    es: [
      'Reservar alojamiento temprano si planea un viaje de fin de semana largo — las estaciones de esqui se llenan rapido',
      'Verificar en que fecha su estado observa el dia festivo, ya que varia entre estados',
      'Planificar actividades de interior o de invierno ya que junio es pleno invierno en Australia',
      'Seguir los anuncios de honores del Cumpleanos de la Reina',
      'Consultar las listas de eventos locales para celebraciones y festivales comunitarios',
    ],
  },

  relatedHolidays: ['au_australia-day', 'au_anzac-day'],

  seo: {
    en: {
      titleTemplate: "Queen's Birthday {year} Australia — Date & Countdown",
      descriptionTemplate: "When is the Queen's Birthday {year} in Australia? Live countdown, state-by-state dates, Honours list, and long weekend guide.",
      keywords: ["Queen's Birthday Australia", "Queen's Birthday public holiday", 'June long weekend Australia', "King's Birthday Australia", 'Queens Birthday date'],
    },
    fr: {
      titleTemplate: "Anniversaire de la Reine {year} Australie — Date et compte a rebours",
      descriptionTemplate: "Quand est l'Anniversaire de la Reine {year} en Australie ? Compte a rebours, dates par Etat et guide du long week-end.",
      keywords: ["Anniversaire de la Reine Australie", "jour ferie juin Australie", "long week-end Australie", "fete du Roi Australie", "Anniversaire Reine date"],
    },
    es: {
      titleTemplate: "Cumpleanos de la Reina {year} Australia — Fecha y cuenta regresiva",
      descriptionTemplate: "Cuando es el Cumpleanos de la Reina {year} en Australia? Cuenta regresiva, fechas por estado y guia del fin de semana largo.",
      keywords: ['Cumpleanos de la Reina Australia', 'dia festivo junio Australia', 'fin de semana largo Australia', 'Cumpleanos del Rey Australia', 'Cumpleanos Reina fecha'],
    },
  },

  faq: [
    {
      question: { en: "When is the Queen's Birthday {year} in Australia?", fr: "Quand est l'Anniversaire de la Reine {year} en Australie ?", es: "Cuando es el Cumpleanos de la Reina {year} en Australia?" },
      answer: {
        en: "The Queen's Birthday {year} in most Australian states falls on {date} ({dayOfWeek}), the second Monday of June. Western Australia and Queensland may observe it on a different date.",
        fr: "L'Anniversaire de la Reine {year} dans la plupart des Etats australiens tombe le {date} ({dayOfWeek}), le deuxieme lundi de juin. L'Australie-Occidentale et le Queensland peuvent l'observer a une date differente.",
        es: "El Cumpleanos de la Reina {year} en la mayoria de los estados australianos cae el {date} ({dayOfWeek}), el segundo lunes de junio. Australia Occidental y Queensland pueden observarlo en una fecha diferente.",
      },
    },
    {
      question: { en: "Is it now called King's Birthday?", fr: "S'appelle-t-il maintenant Anniversaire du Roi ?", es: "Se llama ahora Cumpleanos del Rey?" },
      answer: {
        en: "With the accession of King Charles III in September 2022, some states have begun referring to the holiday as the King's Birthday. The date and observance remain the same regardless of the name used.",
        fr: "Avec l'accession du roi Charles III en septembre 2022, certains Etats ont commence a appeler le jour ferie Anniversaire du Roi. La date et l'observance restent les memes quel que soit le nom utilise.",
        es: "Con la ascension del rey Carlos III en septiembre de 2022, algunos estados han comenzado a referirse al dia festivo como el Cumpleanos del Rey. La fecha y la observancia siguen siendo las mismas independientemente del nombre utilizado.",
      },
    },
    {
      question: { en: "Why doesn't the holiday fall on the actual birthday?", fr: "Pourquoi le jour ferie ne tombe-t-il pas le jour du vrai anniversaire ?", es: "Por que el dia festivo no cae en el cumpleanos real?" },
      answer: {
        en: "The holiday is set on a convenient Monday to provide a long weekend, rather than on the actual birthday of the reigning monarch. This tradition dates back to the early 20th century and allows for consistent planning of the public holiday.",
        fr: "Le jour ferie est fixe a un lundi pratique pour offrir un long week-end, plutot que le jour de l'anniversaire reel du monarque regnant. Cette tradition remonte au debut du XXe siecle et permet une planification coherente du jour ferie.",
        es: "El dia festivo se fija en un lunes conveniente para proporcionar un fin de semana largo, en lugar del cumpleanos real del monarca reinante. Esta tradicion se remonta a principios del siglo XX y permite una planificacion consistente del dia festivo.",
      },
    },
    {
      question: { en: "Do all Australian states celebrate on the same date?", fr: "Tous les Etats australiens celebrent-ils a la meme date ?", es: "Todos los estados australianos celebran en la misma fecha?" },
      answer: {
        en: "No. Most states observe the Queen's Birthday on the second Monday of June, but Western Australia typically observes it in late September or October, and Queensland has changed its date several times in recent years.",
        fr: "Non. La plupart des Etats observent l'Anniversaire de la Reine le deuxieme lundi de juin, mais l'Australie-Occidentale l'observe generalement fin septembre ou octobre, et le Queensland a change sa date plusieurs fois ces dernieres annees.",
        es: "No. La mayoria de los estados observan el Cumpleanos de la Reina el segundo lunes de junio, pero Australia Occidental generalmente lo observa a finales de septiembre u octubre, y Queensland ha cambiado su fecha varias veces en los ultimos anos.",
      },
    },
  ],

  colorTheme: 'purple-gold',
  icon: '\ud83d\udc51',
};

// ---------------------------------------------------------------------------
// Melbourne Cup Day — 1st Tuesday of November
// ---------------------------------------------------------------------------

const melbourneCup: HolidayData = {
  id: 'au_melbourne-cup',
  countryCode: 'au',
  slugs: { en: 'melbourne-cup', fr: 'coupe-de-melbourne', es: 'copa-de-melbourne' },
  names: { en: 'Melbourne Cup Day', fr: 'Jour de la Coupe de Melbourne', es: 'Dia de la Copa de Melbourne' },

  dateType: 'calculated',
  calculateDate: getMelbourneCup,

  descriptions: {
    en: "Melbourne Cup Day, held on the first Tuesday of November, is known as \"the race that stops a nation.\" While officially a public holiday only in metropolitan Melbourne, the Melbourne Cup horse race captivates the entire country with office sweepstakes, fashion events, and long lunch celebrations.",
    fr: "Le Jour de la Coupe de Melbourne, le premier mardi de novembre, est connu comme \"la course qui arrete la nation\". Bien qu'officiellement jour ferie uniquement dans la region metropolitaine de Melbourne, la course hippique de la Coupe de Melbourne captive tout le pays avec des loteries de bureau, des evenements de mode et des dejeuners festifs.",
    es: "El Dia de la Copa de Melbourne, celebrado el primer martes de noviembre, es conocido como \"la carrera que detiene a la nacion\". Aunque oficialmente es dia festivo solo en el area metropolitana de Melbourne, la carrera de caballos de la Copa de Melbourne cautiva a todo el pais con sorteos de oficina, eventos de moda y almuerzos largos de celebracion.",
  },

  history: {
    en: "The Melbourne Cup was first run on November 7, 1861, at the Flemington Racecourse in Melbourne. It quickly became the most prestigious horse race in Australia and one of the richest turf races in the world, with prize money exceeding AUD $8 million.\n\nThe race gained its \"race that stops a nation\" reputation during the early 20th century, when workers across Australia would stop to listen to the race broadcast on radio. Today, offices across the country hold sweepstakes and many employers allow staff to watch the race during work hours.\n\nMelbourne Cup Day has been a public holiday in metropolitan Melbourne since 1877, making it one of the few public holidays in the world dedicated to a horse race. The Spring Racing Carnival surrounding the Cup has become a major fashion and social event.",
    fr: "La Coupe de Melbourne a ete courue pour la premiere fois le 7 novembre 1861 a l'hippodrome de Flemington a Melbourne. Elle est rapidement devenue la course hippique la plus prestigieuse d'Australie et l'une des courses sur gazon les plus riches au monde, avec des prix depassant 8 millions de dollars australiens.\n\nLa course a acquis sa reputation de \"course qui arrete la nation\" au debut du XXe siecle, lorsque les travailleurs de toute l'Australie s'arretaient pour ecouter la retransmission de la course a la radio. Aujourd'hui, les bureaux a travers le pays organisent des loteries et de nombreux employeurs permettent au personnel de regarder la course pendant les heures de travail.\n\nLe Jour de la Coupe de Melbourne est un jour ferie dans la region metropolitaine de Melbourne depuis 1877, ce qui en fait l'un des rares jours feries au monde dedie a une course hippique. Le carnaval des courses de printemps autour de la Coupe est devenu un evenement social et de mode majeur.",
    es: "La Copa de Melbourne se corrio por primera vez el 7 de noviembre de 1861 en el hipodromo de Flemington en Melbourne. Rapidamente se convirtio en la carrera de caballos mas prestigiosa de Australia y una de las carreras sobre cesped mas ricas del mundo, con premios que superan los 8 millones de dolares australianos.\n\nLa carrera gano su reputacion de \"la carrera que detiene a la nacion\" a principios del siglo XX, cuando los trabajadores de toda Australia se detenian para escuchar la transmision de la carrera por radio. Hoy en dia, las oficinas de todo el pais organizan sorteos y muchos empleadores permiten al personal ver la carrera durante el horario laboral.\n\nEl Dia de la Copa de Melbourne ha sido dia festivo en el area metropolitana de Melbourne desde 1877, lo que lo convierte en uno de los pocos dias festivos en el mundo dedicados a una carrera de caballos. El Carnaval de Carreras de Primavera que rodea la Copa se ha convertido en un importante evento social y de moda.",
  },

  traditions: {
    en: [
      'Running office sweepstakes — drawing horse names from a hat and betting small stakes',
      'Dressing up in fashionable outfits and elaborate hats and fascinators',
      'Attending long lunches at restaurants, pubs, and racecourses',
      'Watching the race live on television, usually around 3:00 PM AEDT',
      'Competing in Fashions on the Field contests at racecourses',
      'Having champagne and celebratory drinks during the afternoon',
    ],
    fr: [
      'Organiser des loteries de bureau — tirer des noms de chevaux d\'un chapeau et parier de petites sommes',
      'Se vetir de tenues elegantes et de chapeaux et bibis elabores',
      'Assister a de longs dejeuners dans des restaurants, pubs et hippodromes',
      'Regarder la course en direct a la television, generalement vers 15h00 AEDT',
      'Participer aux concours d\'elegance Fashions on the Field aux hippodromes',
      'Boire du champagne et des boissons de celebration pendant l\'apres-midi',
    ],
    es: [
      'Realizar sorteos de oficina — sacar nombres de caballos de un sombrero y apostar pequenas cantidades',
      'Vestirse con atuendos elegantes y sombreros y tocados elaborados',
      'Asistir a largos almuerzos en restaurantes, pubs e hipodromos',
      'Ver la carrera en vivo por television, generalmente alrededor de las 15:00 AEDT',
      'Competir en concursos de Fashions on the Field en los hipodromos',
      'Tomar champana y bebidas de celebracion durante la tarde',
    ],
  },

  funFacts: {
    en: [
      'The Melbourne Cup is run over 3,200 metres (about 2 miles) and typically lasts around 3 minutes and 20 seconds.',
      'Approximately 80% of Australian adults have some form of flutter on the Melbourne Cup, whether through sweepstakes or bookmakers.',
      'The famous mare Makybe Diva won three consecutive Melbourne Cups (2003-2005), the only horse ever to do so.',
      'The Melbourne Cup trophy is made of 18-carat gold and is worth over AUD $200,000.',
      'Phar Lap, Australia\'s most beloved racehorse, won the Melbourne Cup in 1930 during the Great Depression, lifting the nation\'s spirits.',
    ],
    fr: [
      'La Coupe de Melbourne se court sur 3 200 metres (environ 2 miles) et dure generalement environ 3 minutes et 20 secondes.',
      'Environ 80 % des adultes australiens parient d\'une maniere ou d\'une autre sur la Coupe de Melbourne, que ce soit par des loteries ou des bookmakers.',
      'La celebre jument Makybe Diva a remporte trois Coupes de Melbourne consecutives (2003-2005), le seul cheval a l\'avoir fait.',
      'Le trophee de la Coupe de Melbourne est en or 18 carats et vaut plus de 200 000 dollars australiens.',
      'Phar Lap, le cheval de course le plus aime d\'Australie, a remporte la Coupe de Melbourne en 1930 pendant la Grande Depression, remontant le moral de la nation.',
    ],
    es: [
      'La Copa de Melbourne se corre sobre 3.200 metros (aproximadamente 2 millas) y generalmente dura alrededor de 3 minutos y 20 segundos.',
      'Aproximadamente el 80% de los adultos australianos apuestan de alguna forma en la Copa de Melbourne, ya sea a traves de sorteos o casas de apuestas.',
      'La famosa yegua Makybe Diva gano tres Copas de Melbourne consecutivas (2003-2005), el unico caballo en lograrlo.',
      'El trofeo de la Copa de Melbourne esta hecho de oro de 18 quilates y vale mas de 200.000 dolares australianos.',
      'Phar Lap, el caballo de carreras mas querido de Australia, gano la Copa de Melbourne en 1930 durante la Gran Depresion, levantando el animo de la nacion.',
    ],
  },

  planningChecklist: {
    en: [
      'Organise an office sweepstake well before race day',
      'Plan your outfit and hat or fascinator for Cup Day celebrations',
      'Book a restaurant or venue for a Melbourne Cup lunch',
      'Check if your employer is allowing time to watch the race',
      'Place your bets early if participating in Cup wagering',
    ],
    fr: [
      'Organiser une loterie de bureau bien avant le jour de la course',
      'Planifier votre tenue et chapeau ou bibi pour les celebrations du jour de la Coupe',
      'Reserver un restaurant ou un lieu pour un dejeuner de la Coupe de Melbourne',
      'Verifier si votre employeur accorde du temps pour regarder la course',
      'Placer vos paris tot si vous participez aux mises de la Coupe',
    ],
    es: [
      'Organizar un sorteo de oficina con anticipacion al dia de la carrera',
      'Planificar su atuendo y sombrero o tocado para las celebraciones del dia de la Copa',
      'Reservar un restaurante o lugar para un almuerzo de la Copa de Melbourne',
      'Verificar si su empleador permite tiempo para ver la carrera',
      'Hacer sus apuestas temprano si participa en las apuestas de la Copa',
    ],
  },

  relatedHolidays: ['au_queens-birthday', 'au_christmas'],

  seo: {
    en: {
      titleTemplate: 'Melbourne Cup {year} — Date, Countdown & Race Guide',
      descriptionTemplate: 'When is Melbourne Cup Day {year}? Live countdown, race time, sweepstake tips, and fashion guide for the race that stops a nation.',
      keywords: ['Melbourne Cup', 'Melbourne Cup Day', 'race that stops a nation', 'Melbourne Cup date', 'Flemington races'],
    },
    fr: {
      titleTemplate: 'Coupe de Melbourne {year} — Date, compte a rebours et guide',
      descriptionTemplate: 'Quand est le Jour de la Coupe de Melbourne {year} ? Compte a rebours, heure de la course et guide de la course qui arrete la nation.',
      keywords: ['Coupe de Melbourne', 'Jour de la Coupe de Melbourne', 'course hippique Australie', 'Coupe de Melbourne date', 'Flemington'],
    },
    es: {
      titleTemplate: 'Copa de Melbourne {year} — Fecha, cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Dia de la Copa de Melbourne {year}? Cuenta regresiva, hora de la carrera y guia de la carrera que detiene a la nacion.',
      keywords: ['Copa de Melbourne', 'Dia de la Copa de Melbourne', 'carrera de caballos Australia', 'Copa de Melbourne fecha', 'Flemington'],
    },
  },

  faq: [
    {
      question: { en: 'When is Melbourne Cup Day {year}?', fr: 'Quand est le Jour de la Coupe de Melbourne {year} ?', es: 'Cuando es el Dia de la Copa de Melbourne {year}?' },
      answer: {
        en: 'Melbourne Cup Day {year} falls on {date} ({dayOfWeek}). It is always the first Tuesday of November.',
        fr: 'Le Jour de la Coupe de Melbourne {year} tombe le {date} ({dayOfWeek}). C\'est toujours le premier mardi de novembre.',
        es: 'El Dia de la Copa de Melbourne {year} cae el {date} ({dayOfWeek}). Siempre es el primer martes de noviembre.',
      },
    },
    {
      question: { en: 'Is Melbourne Cup Day a public holiday?', fr: 'Le Jour de la Coupe de Melbourne est-il un jour ferie ?', es: 'Es el Dia de la Copa de Melbourne un dia festivo?' },
      answer: {
        en: 'Melbourne Cup Day is a public holiday in metropolitan Melbourne and some parts of regional Victoria. It is not a public holiday in other Australian states, though many employers allow staff to watch the race.',
        fr: 'Le Jour de la Coupe de Melbourne est un jour ferie dans la region metropolitaine de Melbourne et certaines parties de l\'Etat de Victoria regional. Ce n\'est pas un jour ferie dans les autres Etats australiens, bien que de nombreux employeurs permettent au personnel de regarder la course.',
        es: 'El Dia de la Copa de Melbourne es un dia festivo en el area metropolitana de Melbourne y algunas partes de la region de Victoria. No es un dia festivo en otros estados australianos, aunque muchos empleadores permiten al personal ver la carrera.',
      },
    },
    {
      question: { en: 'What time is the Melbourne Cup race?', fr: 'A quelle heure est la course de la Coupe de Melbourne ?', es: 'A que hora es la carrera de la Copa de Melbourne?' },
      answer: {
        en: 'The Melbourne Cup race is traditionally run at 3:00 PM AEDT (Australian Eastern Daylight Time). The race lasts approximately 3 minutes and 20 seconds.',
        fr: 'La course de la Coupe de Melbourne est traditionnellement courue a 15h00 AEDT (heure d\'ete de l\'est de l\'Australie). La course dure environ 3 minutes et 20 secondes.',
        es: 'La carrera de la Copa de Melbourne se corre tradicionalmente a las 15:00 AEDT (hora de verano del este de Australia). La carrera dura aproximadamente 3 minutos y 20 segundos.',
      },
    },
    {
      question: { en: 'How do I run an office sweepstake?', fr: 'Comment organiser une loterie de bureau ?', es: 'Como organizo un sorteo de oficina?' },
      answer: {
        en: 'Write each horse\'s name on a slip of paper, put them in a hat, and have each participant draw one (or more) for a small entry fee. The person who draws the winning horse takes the prize pool. Many offices split prizes for first, second, and third place.',
        fr: 'Ecrivez le nom de chaque cheval sur un morceau de papier, mettez-les dans un chapeau et faites tirer a chaque participant un (ou plusieurs) pour un petit droit d\'entree. La personne qui tire le cheval gagnant remporte la cagnotte. De nombreux bureaux repartissent les prix pour la premiere, deuxieme et troisieme place.',
        es: 'Escriba el nombre de cada caballo en un papel, pongalos en un sombrero y haga que cada participante saque uno (o mas) por una pequena cuota de entrada. La persona que saque el caballo ganador se lleva el pozo de premios. Muchas oficinas dividen los premios para el primer, segundo y tercer lugar.',
      },
    },
  ],

  colorTheme: 'green-gold',
  icon: '\ud83c\udfc7',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmasDay: HolidayData = {
  id: 'au_christmas',
  countryCode: 'au',
  slugs: { en: 'christmas-day', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noel', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: "Christmas Day on December 25 is a national public holiday in Australia. Unlike the Northern Hemisphere, Christmas falls in the middle of summer, so Australians celebrate with beach barbecues, outdoor cricket, seafood feasts, and backyard pool parties alongside traditional decorations and gift-giving.",
    fr: "Le jour de Noel, le 25 decembre, est un jour ferie national en Australie. Contrairement a l'hemisphere nord, Noel tombe en plein ete, et les Australiens celebrent avec des barbecues a la plage, du cricket en plein air, des festins de fruits de mer et des fetes au bord de la piscine, en plus des decorations traditionnelles et des echanges de cadeaux.",
    es: "El dia de Navidad, el 25 de diciembre, es un dia festivo nacional en Australia. A diferencia del hemisferio norte, la Navidad cae en pleno verano, por lo que los australianos celebran con barbacoas en la playa, cricket al aire libre, banquetes de mariscos y fiestas junto a la piscina, ademas de las decoraciones tradicionales y el intercambio de regalos.",
  },

  history: {
    en: "Christmas has been celebrated in Australia since European settlement in 1788. Early settlers brought their British Christmas traditions, but the hot December weather gradually shaped a uniquely Australian style of celebration centred on outdoor activities and seafood.\n\nThe tradition of Christmas at Bondi Beach became iconic in the 20th century, attracting visitors from around the world. Backpackers and tourists flock to Australian beaches on Christmas Day, creating a festive beach atmosphere unlike anywhere else.\n\nAustralian Christmas carols often reflect the summer setting. \"Six White Boomers,\" written by Rolf Harris in 1960, imagines Santa's sleigh being pulled by kangaroos. Carols by Candlelight, an outdoor Christmas carol concert tradition, began in Melbourne in 1938 and is now held in cities across the country.",
    fr: "Noel est celebre en Australie depuis la colonisation europeenne en 1788. Les premiers colons ont apporte leurs traditions de Noel britanniques, mais le temps chaud de decembre a progressivement faconne un style de celebration uniquement australien centre sur les activites de plein air et les fruits de mer.\n\nLa tradition de Noel a Bondi Beach est devenue emblematique au XXe siecle, attirant des visiteurs du monde entier. Les routards et touristes affluent sur les plages australiennes le jour de Noel, creant une atmosphere de fete unique.\n\nLes chants de Noel australiens refletent souvent le cadre estival. \"Six White Boomers\", ecrit par Rolf Harris en 1960, imagine le traineau du Pere Noel tire par des kangourous. Carols by Candlelight, une tradition de concert de chants de Noel en plein air, a debute a Melbourne en 1938 et est maintenant organisee dans les villes de tout le pays.",
    es: "La Navidad se celebra en Australia desde la colonizacion europea en 1788. Los primeros colonos trajeron sus tradiciones navidenas britanicas, pero el clima caluroso de diciembre fue dando forma gradualmente a un estilo de celebracion unicamente australiano centrado en actividades al aire libre y mariscos.\n\nLa tradicion de Navidad en Bondi Beach se hizo iconica en el siglo XX, atrayendo visitantes de todo el mundo. Mochileros y turistas acuden a las playas australianas el dia de Navidad, creando un ambiente festivo playero unico.\n\nLos villancicos australianos a menudo reflejan el entorno veraniego. \"Six White Boomers\", escrita por Rolf Harris en 1960, imagina el trineo de Papa Noel tirado por canguros. Carols by Candlelight, una tradicion de conciertos de villancicos al aire libre, comenzo en Melbourne en 1938 y ahora se celebra en ciudades de todo el pais.",
  },

  traditions: {
    en: [
      'Having a Christmas barbecue with prawns, oysters, and other seafood',
      'Spending Christmas Day at the beach or by the pool',
      'Playing backyard cricket on Christmas afternoon',
      'Attending Carols by Candlelight concerts',
      'Decorating the Christmas tree and exchanging gifts on Christmas morning',
      'Eating pavlova and trifle for dessert',
      'Watching the Boxing Day Test cricket match that starts the next day',
    ],
    fr: [
      'Faire un barbecue de Noel avec crevettes, huitres et autres fruits de mer',
      'Passer le jour de Noel a la plage ou au bord de la piscine',
      'Jouer au cricket dans le jardin l\'apres-midi de Noel',
      'Assister aux concerts Carols by Candlelight',
      'Decorer le sapin de Noel et echanger des cadeaux le matin de Noel',
      'Manger de la pavlova et du trifle en dessert',
      'Regarder le match de cricket du Boxing Day Test qui commence le lendemain',
    ],
    es: [
      'Hacer una barbacoa navidena con langostinos, ostras y otros mariscos',
      'Pasar el dia de Navidad en la playa o junto a la piscina',
      'Jugar cricket en el jardin por la tarde de Navidad',
      'Asistir a los conciertos de Carols by Candlelight',
      'Decorar el arbol de Navidad e intercambiar regalos la manana de Navidad',
      'Comer pavlova y trifle de postre',
      'Ver el partido de cricket del Boxing Day Test que comienza al dia siguiente',
    ],
  },

  funFacts: {
    en: [
      'Bondi Beach attracts around 40,000 visitors on Christmas Day, many of them international backpackers.',
      'The Carols by Candlelight tradition began in 1938 when a Melbourne radio announcer saw an elderly woman listening to carols by candlelight through her window.',
      'Australian Christmas dinner often features cold seafood platters with prawns, oysters, and lobster rather than traditional roast turkey.',
      'Temperatures in Australian cities on Christmas Day can exceed 40 degrees Celsius (104 degrees Fahrenheit).',
      'Santa Claus is sometimes depicted surfing or riding a kangaroo in Australian Christmas imagery.',
    ],
    fr: [
      'Bondi Beach attire environ 40 000 visiteurs le jour de Noel, dont beaucoup sont des routards internationaux.',
      'La tradition Carols by Candlelight a commence en 1938 quand un animateur radio de Melbourne a vu une femme agee ecoutant des chants de Noel a la lueur d\'une bougie a travers sa fenetre.',
      'Le diner de Noel australien comprend souvent des plateaux de fruits de mer froids avec crevettes, huitres et homard plutot que la dinde rotie traditionnelle.',
      'Les temperatures dans les villes australiennes le jour de Noel peuvent depasser 40 degres Celsius.',
      'Le Pere Noel est parfois represente en train de surfer ou de monter un kangourou dans l\'imagerie de Noel australienne.',
    ],
    es: [
      'Bondi Beach atrae alrededor de 40.000 visitantes el dia de Navidad, muchos de ellos mochileros internacionales.',
      'La tradicion de Carols by Candlelight comenzo en 1938 cuando un locutor de radio de Melbourne vio a una anciana escuchando villancicos a la luz de las velas a traves de su ventana.',
      'La cena de Navidad australiana a menudo incluye bandejas de mariscos frios con langostinos, ostras y langosta en lugar del pavo asado tradicional.',
      'Las temperaturas en las ciudades australianas el dia de Navidad pueden superar los 40 grados Celsius.',
      'Papa Noel a veces es representado surfeando o montando un canguro en las imagenes navidenas australianas.',
    ],
  },

  planningChecklist: {
    en: [
      'Order fresh seafood (prawns, oysters, lobster) well in advance for Christmas lunch',
      'Plan beach activities and pack sunscreen, hats, and plenty of water',
      'Book Carols by Candlelight tickets early if attending the live event',
      'Buy and wrap gifts before the Christmas shopping rush',
      'Prepare for hot weather — have cold drinks, ice, and shade ready for outdoor celebrations',
    ],
    fr: [
      'Commander des fruits de mer frais (crevettes, huitres, homard) bien a l\'avance pour le dejeuner de Noel',
      'Planifier des activites a la plage et prevoir creme solaire, chapeaux et beaucoup d\'eau',
      'Reserver des billets pour Carols by Candlelight tot si vous assistez a l\'evenement en direct',
      'Acheter et emballer les cadeaux avant la ruee des achats de Noel',
      'Se preparer a la chaleur — avoir des boissons fraiches, de la glace et de l\'ombre pour les celebrations en plein air',
    ],
    es: [
      'Pedir mariscos frescos (langostinos, ostras, langosta) con mucha antelacion para el almuerzo de Navidad',
      'Planificar actividades en la playa y llevar protector solar, sombreros y mucha agua',
      'Reservar entradas para Carols by Candlelight temprano si asiste al evento en vivo',
      'Comprar y envolver regalos antes de la avalancha de compras navidenas',
      'Prepararse para el calor — tener bebidas frias, hielo y sombra listos para las celebraciones al aire libre',
    ],
  },

  relatedHolidays: ['au_boxing-day', 'au_new-years-day'],

  seo: {
    en: {
      titleTemplate: 'Christmas Day {year} Australia — Countdown & Summer Christmas Guide',
      descriptionTemplate: 'How many days until Christmas {year} in Australia? Live countdown to December 25, summer Christmas traditions, and celebration guide.',
      keywords: ['Christmas Australia', 'Australian Christmas', 'summer Christmas', 'Christmas countdown Australia', 'Bondi Beach Christmas'],
    },
    fr: {
      titleTemplate: 'Noel {year} Australie — Compte a rebours et guide',
      descriptionTemplate: "Combien de jours avant Noel {year} en Australie ? Compte a rebours, traditions de Noel en ete et guide de celebration.",
      keywords: ['Noel Australie', 'Noel australien', 'Noel en ete', 'compte a rebours Noel', 'Noel plage Australie'],
    },
    es: {
      titleTemplate: 'Navidad {year} Australia — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuantos dias faltan para Navidad {year} en Australia? Cuenta regresiva, tradiciones navidenas de verano y guia de celebracion.',
      keywords: ['Navidad Australia', 'Navidad australiana', 'Navidad en verano', 'cuenta regresiva Navidad', 'Navidad playa Australia'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas Day {year} in Australia?', fr: "Quand est le jour de Noel {year} en Australie ?", es: 'Cuando es el dia de Navidad {year} en Australia?' },
      answer: {
        en: 'Christmas Day {year} in Australia is on {date}. It is always December 25 and is a national public holiday.',
        fr: "Le jour de Noel {year} en Australie est le {date}. C'est toujours le 25 decembre et c'est un jour ferie national.",
        es: 'El dia de Navidad {year} en Australia es el {date}. Siempre es el 25 de diciembre y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'Why is Christmas in summer in Australia?', fr: 'Pourquoi Noel est-il en ete en Australie ?', es: 'Por que la Navidad es en verano en Australia?' },
      answer: {
        en: 'Australia is in the Southern Hemisphere, where December falls in summer. While Australians maintain many Northern Hemisphere Christmas traditions like decorated trees and gift-giving, they adapt celebrations to the warm weather with beach outings, barbecues, and cold seafood.',
        fr: "L'Australie se trouve dans l'hemisphere sud, ou decembre tombe en ete. Bien que les Australiens maintiennent de nombreuses traditions de Noel de l'hemisphere nord comme les sapins decores et les cadeaux, ils adaptent les celebrations au temps chaud avec des sorties a la plage, des barbecues et des fruits de mer frais.",
        es: 'Australia esta en el hemisferio sur, donde diciembre cae en verano. Aunque los australianos mantienen muchas tradiciones navidenas del hemisferio norte como arboles decorados y regalos, adaptan las celebraciones al clima calido con salidas a la playa, barbacoas y mariscos frios.',
      },
    },
    {
      question: { en: 'What do Australians eat for Christmas dinner?', fr: 'Que mangent les Australiens pour le diner de Noel ?', es: 'Que comen los australianos en la cena de Navidad?' },
      answer: {
        en: 'Many Australians enjoy cold seafood platters featuring prawns, oysters, and lobster. Others have a traditional roast, but served cold. Pavlova, a meringue dessert topped with cream and fruit, is the quintessential Australian Christmas dessert.',
        fr: "De nombreux Australiens degustent des plateaux de fruits de mer froids avec crevettes, huitres et homard. D'autres preparent un roti traditionnel, mais servi froid. La pavlova, un dessert a base de meringue garni de creme et de fruits, est le dessert de Noel australien par excellence.",
        es: 'Muchos australianos disfrutan de bandejas de mariscos frios con langostinos, ostras y langosta. Otros preparan un asado tradicional, pero servido frio. La pavlova, un postre de merengue cubierto con crema y frutas, es el postre navideno australiano por excelencia.',
      },
    },
    {
      question: { en: 'What is Carols by Candlelight?', fr: "Qu'est-ce que Carols by Candlelight ?", es: 'Que es Carols by Candlelight?' },
      answer: {
        en: 'Carols by Candlelight is an Australian tradition of outdoor Christmas carol concerts, first held in Melbourne in 1938. Thousands of people gather in parks and venues to sing carols while holding candles. The largest event at the Sidney Myer Music Bowl in Melbourne is broadcast nationally on television.',
        fr: "Carols by Candlelight est une tradition australienne de concerts de chants de Noel en plein air, organisee pour la premiere fois a Melbourne en 1938. Des milliers de personnes se rassemblent dans des parcs et des lieux pour chanter des chants de Noel en tenant des bougies. Le plus grand evenement au Sidney Myer Music Bowl de Melbourne est diffuse a la television nationale.",
        es: 'Carols by Candlelight es una tradicion australiana de conciertos de villancicos al aire libre, celebrada por primera vez en Melbourne en 1938. Miles de personas se reunen en parques y lugares para cantar villancicos sosteniendo velas. El evento mas grande en el Sidney Myer Music Bowl de Melbourne se transmite por television a nivel nacional.',
      },
    },
  ],

  colorTheme: 'red-green',
  icon: '\ud83c\udf84',
};

// ---------------------------------------------------------------------------
// Boxing Day — December 26
// ---------------------------------------------------------------------------

const boxingDay: HolidayData = {
  id: 'au_boxing-day',
  countryCode: 'au',
  slugs: { en: 'boxing-day', fr: 'lendemain-de-noel', es: 'dia-de-san-esteban' },
  names: { en: 'Boxing Day', fr: 'Lendemain de Noel', es: 'Dia de San Esteban' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 26,

  descriptions: {
    en: "Boxing Day on December 26 is a national public holiday in Australia, famous for the start of the Boxing Day Test cricket match at the Melbourne Cricket Ground (MCG), the Sydney to Hobart yacht race, and massive post-Christmas shopping sales. In South Australia, it is also known as Proclamation Day.",
    fr: "Le lendemain de Noel, le 26 decembre, est un jour ferie national en Australie, celebre pour le debut du match de cricket du Boxing Day Test au Melbourne Cricket Ground (MCG), la course de yachts Sydney-Hobart et les soldes massives d'apres Noel. En Australie-Meridionale, il est egalement connu sous le nom de Jour de la Proclamation.",
    es: "El Dia de San Esteban, el 26 de diciembre, es un dia festivo nacional en Australia, famoso por el inicio del partido de cricket del Boxing Day Test en el Melbourne Cricket Ground (MCG), la regata de yates de Sidney a Hobart y las grandes rebajas de despues de Navidad. En Australia Meridional, tambien se conoce como Dia de la Proclamacion.",
  },

  history: {
    en: "Boxing Day in Australia has evolved from its British origins into a distinctly Australian occasion. The Boxing Day Test, first played at the MCG in 1950, has become one of Australia's most cherished sporting traditions, attracting crowds of up to 90,000 on the first day.\n\nThe Sydney to Hobart Yacht Race, first run in 1945, starts on Boxing Day and covers 628 nautical miles from Sydney Harbour to Hobart, Tasmania. It is considered one of the most challenging ocean races in the world and is broadcast live across Australia.\n\nIn South Australia, December 26 is officially called Proclamation Day, commemorating the 1836 proclamation of South Australia as a British province. Boxing Day sales have become a major retail event, with shoppers queuing outside stores from the early hours of the morning.",
    fr: "Le lendemain de Noel en Australie a evolue de ses origines britanniques vers une occasion distinctement australienne. Le Boxing Day Test, joue pour la premiere fois au MCG en 1950, est devenu l'une des traditions sportives les plus cheris d'Australie, attirant des foules allant jusqu'a 90 000 personnes le premier jour.\n\nLa course de yachts Sydney-Hobart, courue pour la premiere fois en 1945, commence le lendemain de Noel et couvre 628 milles nautiques du port de Sydney a Hobart, en Tasmanie. Elle est consideree comme l'une des courses oceaniques les plus difficiles au monde et est diffusee en direct dans toute l'Australie.\n\nEn Australie-Meridionale, le 26 decembre est officiellement appele Jour de la Proclamation, commemorant la proclamation de 1836 de l'Australie-Meridionale en tant que province britannique. Les soldes du lendemain de Noel sont devenues un evenement commercial majeur, avec des acheteurs faisant la queue devant les magasins des les premieres heures du matin.",
    es: "El Dia de San Esteban en Australia ha evolucionado desde sus origenes britanicos hasta convertirse en una ocasion distintivamente australiana. El Boxing Day Test, jugado por primera vez en el MCG en 1950, se ha convertido en una de las tradiciones deportivas mas queridas de Australia, atrayendo multitudes de hasta 90.000 personas el primer dia.\n\nLa Regata de Yates de Sidney a Hobart, disputada por primera vez en 1945, comienza el Dia de San Esteban y cubre 628 millas nauticas desde el puerto de Sidney hasta Hobart, Tasmania. Es considerada una de las carreras oceanicas mas desafiantes del mundo y se transmite en vivo en toda Australia.\n\nEn Australia Meridional, el 26 de diciembre se llama oficialmente Dia de la Proclamacion, conmemorando la proclamacion de 1836 de Australia Meridional como provincia britanica. Las rebajas del Dia de San Esteban se han convertido en un importante evento comercial, con compradores haciendo fila frente a las tiendas desde las primeras horas de la manana.",
  },

  traditions: {
    en: [
      'Watching the Boxing Day Test cricket match at the MCG or on television',
      'Following the start of the Sydney to Hobart Yacht Race',
      'Going to the Boxing Day sales for post-Christmas bargains',
      'Spending the day at the beach or pool',
      'Eating Christmas leftovers and enjoying a relaxed day with family',
      'Playing backyard cricket and other outdoor games',
    ],
    fr: [
      'Regarder le match de cricket du Boxing Day Test au MCG ou a la television',
      'Suivre le depart de la course de yachts Sydney-Hobart',
      'Aller aux soldes du lendemain de Noel pour des bonnes affaires',
      'Passer la journee a la plage ou a la piscine',
      'Manger les restes de Noel et profiter d\'une journee detendue en famille',
      'Jouer au cricket dans le jardin et a d\'autres jeux en plein air',
    ],
    es: [
      'Ver el partido de cricket del Boxing Day Test en el MCG o por television',
      'Seguir la salida de la Regata de Yates de Sidney a Hobart',
      'Ir a las rebajas del Dia de San Esteban para ofertas de despues de Navidad',
      'Pasar el dia en la playa o la piscina',
      'Comer las sobras de Navidad y disfrutar de un dia relajado en familia',
      'Jugar cricket en el jardin y otros juegos al aire libre',
    ],
  },

  funFacts: {
    en: [
      'The Boxing Day Test at the MCG has attracted crowds exceeding 90,000 on the first day, making it one of the best-attended cricket matches in the world.',
      'The Sydney to Hobart Yacht Race covers 628 nautical miles and can take winning yachts under two days to complete.',
      'In South Australia, Boxing Day is officially called Proclamation Day, commemorating the founding of the colony in 1836.',
      'Australian Boxing Day sales rival Black Friday in other countries, with some shoppers camping outside stores overnight.',
      'The 1998 Sydney to Hobart race was one of the most dramatic in history, with severe storms causing six fatalities and forcing many boats to retire.',
    ],
    fr: [
      'Le Boxing Day Test au MCG a attire des foules depassant 90 000 personnes le premier jour, ce qui en fait l\'un des matchs de cricket les plus frequentes au monde.',
      'La course de yachts Sydney-Hobart couvre 628 milles nautiques et peut prendre moins de deux jours aux yachts gagnants pour la completer.',
      'En Australie-Meridionale, le lendemain de Noel est officiellement appele Jour de la Proclamation, commemorant la fondation de la colonie en 1836.',
      'Les soldes du lendemain de Noel en Australie rivalisent avec le Black Friday dans d\'autres pays, certains acheteurs campant devant les magasins toute la nuit.',
      'La course Sydney-Hobart de 1998 a ete l\'une des plus dramatiques de l\'histoire, avec de violentes tempetes causant six deces et forcant de nombreux bateaux a abandonner.',
    ],
    es: [
      'El Boxing Day Test en el MCG ha atraido multitudes que superan las 90.000 personas el primer dia, convirtiendolo en uno de los partidos de cricket con mayor asistencia del mundo.',
      'La Regata de Yates de Sidney a Hobart cubre 628 millas nauticas y puede tomar menos de dos dias para los yates ganadores completarla.',
      'En Australia Meridional, el Dia de San Esteban se llama oficialmente Dia de la Proclamacion, conmemorando la fundacion de la colonia en 1836.',
      'Las rebajas del Dia de San Esteban en Australia rivalizan con el Black Friday en otros paises, con algunos compradores acampando frente a las tiendas toda la noche.',
      'La carrera Sidney-Hobart de 1998 fue una de las mas dramaticas de la historia, con fuertes tormentas que causaron seis muertes y obligaron a muchos barcos a retirarse.',
    ],
  },

  planningChecklist: {
    en: [
      'Book MCG tickets early if you want to attend the Boxing Day Test in person',
      'Find a good vantage point at Sydney Harbour to watch the yacht race start',
      'Research Boxing Day sales and plan your shopping strategy',
      'Prepare beach essentials for another hot summer day',
      'Plan a relaxed family day with leftovers, cricket, and outdoor activities',
    ],
    fr: [
      'Reserver des billets pour le MCG tot si vous voulez assister au Boxing Day Test en personne',
      'Trouver un bon point de vue au port de Sydney pour regarder le depart de la course de yachts',
      'Rechercher les soldes du lendemain de Noel et planifier votre strategie d\'achat',
      'Preparer les essentiels de plage pour une autre journee chaude d\'ete',
      'Planifier une journee familiale detendue avec les restes, le cricket et les activites en plein air',
    ],
    es: [
      'Reservar entradas para el MCG temprano si desea asistir al Boxing Day Test en persona',
      'Encontrar un buen punto de observacion en el puerto de Sidney para ver la salida de la regata',
      'Investigar las rebajas del Dia de San Esteban y planificar su estrategia de compras',
      'Preparar los elementos esenciales de playa para otro dia caluroso de verano',
      'Planificar un dia familiar relajado con sobras, cricket y actividades al aire libre',
    ],
  },

  relatedHolidays: ['au_christmas', 'au_new-years-day'],

  seo: {
    en: {
      titleTemplate: 'Boxing Day {year} Australia — Countdown, Cricket & Sales',
      descriptionTemplate: 'When is Boxing Day {year} in Australia? Live countdown, Boxing Day Test cricket, Sydney to Hobart race, and sales guide.',
      keywords: ['Boxing Day Australia', 'Boxing Day Test', 'Sydney to Hobart', 'Boxing Day sales Australia', 'December 26 Australia'],
    },
    fr: {
      titleTemplate: 'Lendemain de Noel {year} Australie — Compte a rebours et guide',
      descriptionTemplate: 'Quand est le lendemain de Noel {year} en Australie ? Compte a rebours, Boxing Day Test, course Sydney-Hobart et soldes.',
      keywords: ['lendemain de Noel Australie', 'Boxing Day Test cricket', 'course Sydney Hobart', 'soldes Noel Australie', '26 decembre Australie'],
    },
    es: {
      titleTemplate: 'Dia de San Esteban {year} Australia — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Dia de San Esteban {year} en Australia? Cuenta regresiva, Boxing Day Test, regata Sidney-Hobart y rebajas.',
      keywords: ['Dia de San Esteban Australia', 'Boxing Day Test cricket', 'regata Sidney Hobart', 'rebajas Navidad Australia', '26 de diciembre Australia'],
    },
  },

  faq: [
    {
      question: { en: 'When is Boxing Day {year} in Australia?', fr: 'Quand est le lendemain de Noel {year} en Australie ?', es: 'Cuando es el Dia de San Esteban {year} en Australia?' },
      answer: {
        en: 'Boxing Day {year} in Australia is on {date}. It is always December 26 and is a national public holiday.',
        fr: "Le lendemain de Noel {year} en Australie est le {date}. C'est toujours le 26 decembre et c'est un jour ferie national.",
        es: 'El Dia de San Esteban {year} en Australia es el {date}. Siempre es el 26 de diciembre y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'What is the Boxing Day Test?', fr: "Qu'est-ce que le Boxing Day Test ?", es: 'Que es el Boxing Day Test?' },
      answer: {
        en: "The Boxing Day Test is a cricket Test match that starts on December 26 at the Melbourne Cricket Ground (MCG). It is one of the most anticipated cricket events in the world, drawing huge crowds and television audiences. Australia traditionally hosts a touring international team.",
        fr: "Le Boxing Day Test est un match de cricket Test qui commence le 26 decembre au Melbourne Cricket Ground (MCG). C'est l'un des evenements de cricket les plus attendus au monde, attirant d'enormes foules et audiences televisees. L'Australie accueille traditionnellement une equipe internationale en tournee.",
        es: "El Boxing Day Test es un partido de cricket Test que comienza el 26 de diciembre en el Melbourne Cricket Ground (MCG). Es uno de los eventos de cricket mas esperados del mundo, atrayendo grandes multitudes y audiencias televisivas. Australia tradicionalmente recibe a un equipo internacional de gira.",
      },
    },
    {
      question: { en: 'What is Proclamation Day?', fr: "Qu'est-ce que le Jour de la Proclamation ?", es: 'Que es el Dia de la Proclamacion?' },
      answer: {
        en: "Proclamation Day is the name used in South Australia for the December 26 public holiday. It commemorates the reading of the proclamation of South Australia as a British province on December 28, 1836, at the Old Gum Tree in Glenelg.",
        fr: "Le Jour de la Proclamation est le nom utilise en Australie-Meridionale pour le jour ferie du 26 decembre. Il commemore la lecture de la proclamation de l'Australie-Meridionale en tant que province britannique le 28 decembre 1836, sous le Old Gum Tree a Glenelg.",
        es: "El Dia de la Proclamacion es el nombre utilizado en Australia Meridional para el dia festivo del 26 de diciembre. Conmemora la lectura de la proclamacion de Australia Meridional como provincia britanica el 28 de diciembre de 1836, bajo el Old Gum Tree en Glenelg.",
      },
    },
    {
      question: { en: 'What is the Sydney to Hobart Yacht Race?', fr: "Qu'est-ce que la course de yachts Sydney-Hobart ?", es: 'Que es la Regata de Yates de Sidney a Hobart?' },
      answer: {
        en: "The Sydney to Hobart Yacht Race is an annual ocean race that starts on Boxing Day in Sydney Harbour and finishes in Hobart, Tasmania. First held in 1945, it covers 628 nautical miles and is regarded as one of the world's most challenging yacht races.",
        fr: "La course de yachts Sydney-Hobart est une course oceanique annuelle qui part le lendemain de Noel du port de Sydney et se termine a Hobart, en Tasmanie. Organisee pour la premiere fois en 1945, elle couvre 628 milles nautiques et est consideree comme l'une des courses de yachts les plus difficiles au monde.",
        es: "La Regata de Yates de Sidney a Hobart es una carrera oceanica anual que parte el Dia de San Esteban del puerto de Sidney y termina en Hobart, Tasmania. Celebrada por primera vez en 1945, cubre 628 millas nauticas y es considerada una de las carreras de yates mas desafiantes del mundo.",
      },
    },
  ],

  colorTheme: 'red-white',
  icon: '\ud83c\udf81',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const auHolidays: HolidayData[] = [
  newYearsDay,
  australiaDay,
  anzacDay,
  queensBirthday,
  melbourneCup,
  christmasDay,
  boxingDay,
];

export default auHolidays;
