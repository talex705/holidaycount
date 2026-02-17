/**
 * South Africa holidays data.
 */

import type { HolidayData } from '@/lib/types';

// ---------------------------------------------------------------------------
// Human Rights Day — March 21
// ---------------------------------------------------------------------------

const humanRightsDay: HolidayData = {
  id: 'za_human-rights-day',
  countryCode: 'za',
  slugs: { en: 'human-rights-day', fr: 'journee-des-droits-de-lhomme', es: 'dia-de-los-derechos-humanos' },
  names: { en: 'Human Rights Day', fr: 'Journée des droits de l\'homme', es: 'Día de los Derechos Humanos' },

  dateType: 'fixed',
  fixedMonth: 3,
  fixedDay: 21,

  descriptions: {
    en: 'Human Rights Day on March 21 commemorates the 1960 Sharpeville massacre and celebrates the rights enshrined in the South African Constitution. It is a national public holiday honouring the sacrifices made in the struggle for democracy and equality.',
    fr: 'La Journée des droits de l\'homme, le 21 mars, commémore le massacre de Sharpeville en 1960 et célèbre les droits inscrits dans la Constitution sud-africaine. C\'est un jour férié national qui honore les sacrifices faits dans la lutte pour la démocratie et l\'égalité.',
    es: 'El Día de los Derechos Humanos, el 21 de marzo, conmemora la masacre de Sharpeville de 1960 y celebra los derechos consagrados en la Constitución sudafricana. Es un feriado nacional que honra los sacrificios realizados en la lucha por la democracia y la igualdad.',
  },

  history: {
    en: 'On March 21, 1960, police opened fire on a crowd of peaceful protesters in Sharpeville, killing 69 people and wounding 180. The protesters had gathered to demonstrate against the apartheid pass laws that restricted the movement of Black South Africans. The massacre drew international condemnation and became a turning point in the anti-apartheid struggle.\n\nThe Sharpeville massacre led to the banning of the African National Congress (ANC) and the Pan Africanist Congress (PAC), pushing the liberation movements underground and into armed resistance. The United Nations declared March 21 as the International Day for the Elimination of Racial Discrimination.\n\nAfter the end of apartheid, the new democratic government declared March 21 as Human Rights Day to honour those who fought and died for the rights now protected by the South African Constitution, one of the most progressive in the world.',
    fr: 'Le 21 mars 1960, la police a ouvert le feu sur une foule de manifestants pacifiques à Sharpeville, tuant 69 personnes et en blessant 180. Les manifestants s\'étaient rassemblés pour protester contre les lois sur les laissez-passer de l\'apartheid qui restreignaient la circulation des Sud-Africains noirs. Le massacre a suscité la condamnation internationale et est devenu un tournant dans la lutte anti-apartheid.\n\nLe massacre de Sharpeville a conduit à l\'interdiction du Congrès national africain (ANC) et du Congrès panafricaniste (PAC), poussant les mouvements de libération dans la clandestinité et la résistance armée. Les Nations Unies ont déclaré le 21 mars Journée internationale pour l\'élimination de la discrimination raciale.\n\nAprès la fin de l\'apartheid, le nouveau gouvernement démocratique a déclaré le 21 mars Journée des droits de l\'homme pour honorer ceux qui ont combattu et sont morts pour les droits désormais protégés par la Constitution sud-africaine, l\'une des plus progressistes au monde.',
    es: 'El 21 de marzo de 1960, la policía abrió fuego contra una multitud de manifestantes pacíficos en Sharpeville, matando a 69 personas e hiriendo a 180. Los manifestantes se habían reunido para protestar contra las leyes de pases del apartheid que restringían el movimiento de los sudafricanos negros. La masacre provocó la condena internacional y se convirtió en un punto de inflexión en la lucha contra el apartheid.\n\nLa masacre de Sharpeville llevó a la prohibición del Congreso Nacional Africano (ANC) y del Congreso Panafricanista (PAC), empujando a los movimientos de liberación a la clandestinidad y a la resistencia armada. Las Naciones Unidas declararon el 21 de marzo como el Día Internacional de la Eliminación de la Discriminación Racial.\n\nTras el fin del apartheid, el nuevo gobierno democrático declaró el 21 de marzo como Día de los Derechos Humanos para honrar a quienes lucharon y murieron por los derechos ahora protegidos por la Constitución sudafricana, una de las más progresistas del mundo.',
  },

  traditions: {
    en: [
      'Attending memorial services at the Sharpeville Human Rights Precinct',
      'Participating in community marches and awareness campaigns',
      'Visiting the Apartheid Museum in Johannesburg',
      'Hosting human rights workshops and educational events',
      'Government officials delivering speeches on constitutional rights',
      'Laying wreaths at memorials honouring victims of apartheid violence',
    ],
    fr: [
      'Participer aux services commémoratifs au site des droits de l\'homme de Sharpeville',
      'Participer à des marches communautaires et des campagnes de sensibilisation',
      'Visiter le musée de l\'Apartheid à Johannesbourg',
      'Organiser des ateliers et des événements éducatifs sur les droits de l\'homme',
      'Discours de responsables gouvernementaux sur les droits constitutionnels',
      'Déposer des couronnes aux mémoriaux honorant les victimes de la violence de l\'apartheid',
    ],
    es: [
      'Asistir a servicios conmemorativos en el Recinto de Derechos Humanos de Sharpeville',
      'Participar en marchas comunitarias y campañas de concientización',
      'Visitar el Museo del Apartheid en Johannesburgo',
      'Organizar talleres y eventos educativos sobre derechos humanos',
      'Discursos de funcionarios del gobierno sobre derechos constitucionales',
      'Depositar coronas en memoriales que honran a las víctimas de la violencia del apartheid',
    ],
  },

  funFacts: {
    en: [
      'The South African Constitution is considered one of the most progressive in the world, with protections against discrimination based on race, gender, sexual orientation, and more.',
      'The Sharpeville massacre led to South Africa being expelled from the international community and facing economic sanctions for decades.',
      'March 21 is also observed globally as the International Day for the Elimination of Racial Discrimination, inspired by the Sharpeville events.',
      'The Sharpeville memorial site was declared a national heritage site in 2002.',
      'South Africa has 11 official languages recognised in its Constitution, reflecting its commitment to diversity and inclusion.',
    ],
    fr: [
      'La Constitution sud-africaine est considérée comme l\'une des plus progressistes au monde, avec des protections contre la discrimination fondée sur la race, le genre, l\'orientation sexuelle et plus encore.',
      'Le massacre de Sharpeville a conduit à l\'expulsion de l\'Afrique du Sud de la communauté internationale et à des sanctions économiques pendant des décennies.',
      'Le 21 mars est également observé dans le monde entier comme la Journée internationale pour l\'élimination de la discrimination raciale, inspirée par les événements de Sharpeville.',
      'Le site du mémorial de Sharpeville a été déclaré site du patrimoine national en 2002.',
      'L\'Afrique du Sud compte 11 langues officielles reconnues dans sa Constitution, reflétant son engagement envers la diversité et l\'inclusion.',
    ],
    es: [
      'La Constitución sudafricana es considerada una de las más progresistas del mundo, con protecciones contra la discriminación por raza, género, orientación sexual y más.',
      'La masacre de Sharpeville llevó a la expulsión de Sudáfrica de la comunidad internacional y a sanciones económicas durante décadas.',
      'El 21 de marzo también se observa globalmente como el Día Internacional de la Eliminación de la Discriminación Racial, inspirado por los eventos de Sharpeville.',
      'El sitio del memorial de Sharpeville fue declarado sitio de patrimonio nacional en 2002.',
      'Sudáfrica tiene 11 idiomas oficiales reconocidos en su Constitución, lo que refleja su compromiso con la diversidad y la inclusión.',
    ],
  },

  planningChecklist: {
    en: [
      'Check local memorial events and services in your area',
      'Visit the Sharpeville Human Rights Precinct or Apartheid Museum',
      'Organise or attend a community discussion on human rights',
      'Learn about the South African Bill of Rights in the Constitution',
      'Support local human rights organisations through volunteering or donations',
    ],
    fr: [
      'Vérifier les événements commémoratifs locaux dans votre région',
      'Visiter le site des droits de l\'homme de Sharpeville ou le musée de l\'Apartheid',
      'Organiser ou assister à une discussion communautaire sur les droits de l\'homme',
      'Se renseigner sur la Déclaration des droits dans la Constitution sud-africaine',
      'Soutenir les organisations locales de droits de l\'homme par le bénévolat ou des dons',
    ],
    es: [
      'Consultar los eventos conmemorativos locales en tu zona',
      'Visitar el Recinto de Derechos Humanos de Sharpeville o el Museo del Apartheid',
      'Organizar o asistir a una discusión comunitaria sobre derechos humanos',
      'Aprender sobre la Carta de Derechos en la Constitución sudafricana',
      'Apoyar a organizaciones locales de derechos humanos mediante voluntariado o donaciones',
    ],
  },

  relatedHolidays: ['za_freedom-day', 'za_youth-day', 'za_day-of-reconciliation'],

  seo: {
    en: {
      titleTemplate: 'Human Rights Day {year} South Africa — Countdown & Guide',
      descriptionTemplate: 'When is Human Rights Day {year} in South Africa? Live countdown to March 21, Sharpeville massacre history, and commemoration guide.',
      keywords: ['Human Rights Day South Africa', 'Sharpeville massacre', 'March 21 South Africa', 'South African public holidays', 'Human Rights Day countdown'],
    },
    fr: {
      titleTemplate: 'Journée des droits de l\'homme {year} Afrique du Sud — Compte à rebours et guide',
      descriptionTemplate: 'Quand est la Journée des droits de l\'homme {year} en Afrique du Sud ? Compte à rebours en direct jusqu\'au 21 mars, histoire du massacre de Sharpeville et guide de commémoration.',
      keywords: ['Journée des droits de l\'homme Afrique du Sud', 'massacre de Sharpeville', '21 mars Afrique du Sud', 'jours fériés sud-africains', 'droits de l\'homme'],
    },
    es: {
      titleTemplate: 'Día de los Derechos Humanos {year} Sudáfrica — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Día de los Derechos Humanos {year} en Sudáfrica? Cuenta regresiva en vivo hasta el 21 de marzo, historia de la masacre de Sharpeville y guía de conmemoración.',
      keywords: ['Día de los Derechos Humanos Sudáfrica', 'masacre de Sharpeville', '21 de marzo Sudáfrica', 'feriados sudafricanos', 'derechos humanos'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Human Rights Day {year} in South Africa?',
        fr: 'Quand est la Journée des droits de l\'homme {year} en Afrique du Sud ?',
        es: '¿Cuándo es el Día de los Derechos Humanos {year} en Sudáfrica?',
      },
      answer: {
        en: 'Human Rights Day {year} in South Africa is on {date} ({dayOfWeek}). It is always observed on March 21.',
        fr: 'La Journée des droits de l\'homme {year} en Afrique du Sud est le {date} ({dayOfWeek}). Elle est toujours observée le 21 mars.',
        es: 'El Día de los Derechos Humanos {year} en Sudáfrica es el {date} ({dayOfWeek}). Siempre se observa el 21 de marzo.',
      },
    },
    {
      question: {
        en: 'What happened at the Sharpeville massacre?',
        fr: 'Que s\'est-il passé lors du massacre de Sharpeville ?',
        es: '¿Qué sucedió en la masacre de Sharpeville?',
      },
      answer: {
        en: 'On March 21, 1960, South African police opened fire on peaceful protesters in Sharpeville who were demonstrating against apartheid pass laws. 69 people were killed and 180 were wounded, drawing worldwide condemnation.',
        fr: 'Le 21 mars 1960, la police sud-africaine a ouvert le feu sur des manifestants pacifiques à Sharpeville qui protestaient contre les lois sur les laissez-passer de l\'apartheid. 69 personnes ont été tuées et 180 blessées, provoquant la condamnation mondiale.',
        es: 'El 21 de marzo de 1960, la policía sudafricana abrió fuego contra manifestantes pacíficos en Sharpeville que protestaban contra las leyes de pases del apartheid. 69 personas murieron y 180 resultaron heridas, provocando la condena mundial.',
      },
    },
    {
      question: {
        en: 'Is Human Rights Day a public holiday in South Africa?',
        fr: 'La Journée des droits de l\'homme est-elle un jour férié en Afrique du Sud ?',
        es: '¿Es el Día de los Derechos Humanos un feriado en Sudáfrica?',
      },
      answer: {
        en: 'Yes, Human Rights Day is an official public holiday in South Africa. If March 21 falls on a Sunday, the following Monday is observed as the public holiday.',
        fr: 'Oui, la Journée des droits de l\'homme est un jour férié officiel en Afrique du Sud. Si le 21 mars tombe un dimanche, le lundi suivant est observé comme jour férié.',
        es: 'Sí, el Día de los Derechos Humanos es un feriado oficial en Sudáfrica. Si el 21 de marzo cae en domingo, el lunes siguiente se observa como feriado.',
      },
    },
    {
      question: {
        en: 'How is Human Rights Day celebrated in South Africa?',
        fr: 'Comment la Journée des droits de l\'homme est-elle célébrée en Afrique du Sud ?',
        es: '¿Cómo se celebra el Día de los Derechos Humanos en Sudáfrica?',
      },
      answer: {
        en: 'Human Rights Day is marked with memorial services, community marches, museum visits, educational workshops, and government ceremonies. The main national event is usually held at the Sharpeville memorial site.',
        fr: 'La Journée des droits de l\'homme est marquée par des services commémoratifs, des marches communautaires, des visites de musées, des ateliers éducatifs et des cérémonies gouvernementales. L\'événement national principal se tient généralement au site du mémorial de Sharpeville.',
        es: 'El Día de los Derechos Humanos se celebra con servicios conmemorativos, marchas comunitarias, visitas a museos, talleres educativos y ceremonias gubernamentales. El evento nacional principal generalmente se lleva a cabo en el sitio del memorial de Sharpeville.',
      },
    },
  ],

  colorTheme: 'green-gold',
  icon: '✊',
};

// ---------------------------------------------------------------------------
// Freedom Day — April 27
// ---------------------------------------------------------------------------

const freedomDay: HolidayData = {
  id: 'za_freedom-day',
  countryCode: 'za',
  slugs: { en: 'freedom-day', fr: 'jour-de-la-liberte', es: 'dia-de-la-libertad' },
  names: { en: 'Freedom Day', fr: 'Jour de la liberté', es: 'Día de la Libertad' },

  dateType: 'fixed',
  fixedMonth: 4,
  fixedDay: 27,

  descriptions: {
    en: 'Freedom Day on April 27 celebrates the anniversary of South Africa\'s first democratic elections in 1994, marking the end of apartheid. It is one of the most important national holidays, symbolising the triumph of democracy and equality over racial oppression.',
    fr: 'Le Jour de la liberté, le 27 avril, célèbre l\'anniversaire des premières élections démocratiques d\'Afrique du Sud en 1994, marquant la fin de l\'apartheid. C\'est l\'un des jours fériés nationaux les plus importants, symbolisant le triomphe de la démocratie et de l\'égalité sur l\'oppression raciale.',
    es: 'El Día de la Libertad, el 27 de abril, celebra el aniversario de las primeras elecciones democráticas de Sudáfrica en 1994, marcando el fin del apartheid. Es uno de los feriados nacionales más importantes, simbolizando el triunfo de la democracia y la igualdad sobre la opresión racial.',
  },

  history: {
    en: 'On April 27, 1994, South Africa held its first fully democratic, non-racial general election. After decades of apartheid — a system of institutionalised racial segregation — millions of South Africans of all races stood in long queues to cast their votes for the first time. Nelson Mandela and the ANC won the election in a landslide.\n\nThe 1994 election was the culmination of years of negotiations between the apartheid government under F.W. de Klerk and the liberation movements, particularly the ANC led by Nelson Mandela. The transition was remarkably peaceful, earning South Africa the nickname "Rainbow Nation" — a term coined by Archbishop Desmond Tutu.\n\nNelson Mandela was inaugurated as the first Black president of South Africa on May 10, 1994. Freedom Day was subsequently declared a public holiday to commemorate the day when all South Africans were finally free to choose their own government.',
    fr: 'Le 27 avril 1994, l\'Afrique du Sud a tenu ses premières élections générales pleinement démocratiques et non raciales. Après des décennies d\'apartheid — un système de ségrégation raciale institutionnalisée — des millions de Sud-Africains de toutes races ont fait la queue pendant des heures pour voter pour la première fois. Nelson Mandela et l\'ANC ont remporté l\'élection par une victoire écrasante.\n\nL\'élection de 1994 a été l\'aboutissement d\'années de négociations entre le gouvernement de l\'apartheid sous F.W. de Klerk et les mouvements de libération, en particulier l\'ANC dirigé par Nelson Mandela. La transition a été remarquablement pacifique, ce qui a valu à l\'Afrique du Sud le surnom de « Nation arc-en-ciel » — un terme inventé par l\'archevêque Desmond Tutu.\n\nNelson Mandela a été investi comme premier président noir d\'Afrique du Sud le 10 mai 1994. Le Jour de la liberté a ensuite été déclaré jour férié pour commémorer le jour où tous les Sud-Africains ont enfin été libres de choisir leur propre gouvernement.',
    es: 'El 27 de abril de 1994, Sudáfrica celebró sus primeras elecciones generales plenamente democráticas y no raciales. Después de décadas de apartheid — un sistema de segregación racial institucionalizada — millones de sudafricanos de todas las razas hicieron largas filas para emitir su voto por primera vez. Nelson Mandela y el ANC ganaron las elecciones por una victoria aplastante.\n\nLas elecciones de 1994 fueron la culminación de años de negociaciones entre el gobierno del apartheid bajo F.W. de Klerk y los movimientos de liberación, particularmente el ANC liderado por Nelson Mandela. La transición fue notablemente pacífica, lo que le valió a Sudáfrica el apodo de "Nación Arcoíris" — un término acuñado por el arzobispo Desmond Tutu.\n\nNelson Mandela fue investido como el primer presidente negro de Sudáfrica el 10 de mayo de 1994. El Día de la Libertad fue posteriormente declarado feriado para conmemorar el día en que todos los sudafricanos finalmente fueron libres de elegir su propio gobierno.',
  },

  traditions: {
    en: [
      'Attending official government ceremonies and presidential addresses',
      'Raising the South African flag at public buildings and homes',
      'Visiting heritage sites such as Robben Island and the Constitutional Court',
      'Community celebrations with music, dance, and cultural performances',
      'Educational programmes about the history of democracy in South Africa',
      'Family gatherings and braais (barbecues) to celebrate the day',
      'Participating in voter registration drives and civic awareness campaigns',
    ],
    fr: [
      'Participer aux cérémonies officielles du gouvernement et aux discours présidentiels',
      'Hisser le drapeau sud-africain sur les bâtiments publics et les maisons',
      'Visiter des sites patrimoniaux tels que Robben Island et la Cour constitutionnelle',
      'Célébrations communautaires avec musique, danse et spectacles culturels',
      'Programmes éducatifs sur l\'histoire de la démocratie en Afrique du Sud',
      'Réunions familiales et braais (barbecues) pour célébrer la journée',
      'Participer à des campagnes d\'inscription sur les listes électorales et de sensibilisation civique',
    ],
    es: [
      'Asistir a ceremonias oficiales del gobierno y discursos presidenciales',
      'Izar la bandera sudafricana en edificios públicos y hogares',
      'Visitar sitios patrimoniales como Robben Island y el Tribunal Constitucional',
      'Celebraciones comunitarias con música, danza y espectáculos culturales',
      'Programas educativos sobre la historia de la democracia en Sudáfrica',
      'Reuniones familiares y braais (asados) para celebrar el día',
      'Participar en campañas de registro de votantes y concientización cívica',
    ],
  },

  funFacts: {
    en: [
      'Approximately 19.7 million South Africans voted in the 1994 election, with voter turnout estimated at 86%.',
      'Nelson Mandela spent 27 years in prison before becoming South Africa\'s first democratically elected president.',
      'The South African flag adopted in 1994 incorporates six colours and is one of the most distinctive flags in the world.',
      'Archbishop Desmond Tutu coined the term "Rainbow Nation" to describe the multicultural diversity of post-apartheid South Africa.',
      'The 1994 election took three days to complete (April 26-28) due to the massive voter turnout.',
    ],
    fr: [
      'Environ 19,7 millions de Sud-Africains ont voté lors de l\'élection de 1994, avec un taux de participation estimé à 86 %.',
      'Nelson Mandela a passé 27 ans en prison avant de devenir le premier président démocratiquement élu d\'Afrique du Sud.',
      'Le drapeau sud-africain adopté en 1994 comporte six couleurs et est l\'un des drapeaux les plus distinctifs au monde.',
      'L\'archevêque Desmond Tutu a inventé le terme « Nation arc-en-ciel » pour décrire la diversité multiculturelle de l\'Afrique du Sud post-apartheid.',
      'L\'élection de 1994 a pris trois jours (du 26 au 28 avril) en raison de l\'affluence massive des électeurs.',
    ],
    es: [
      'Aproximadamente 19,7 millones de sudafricanos votaron en las elecciones de 1994, con una participación estimada del 86%.',
      'Nelson Mandela pasó 27 años en prisión antes de convertirse en el primer presidente elegido democráticamente de Sudáfrica.',
      'La bandera sudafricana adoptada en 1994 incorpora seis colores y es una de las banderas más distintivas del mundo.',
      'El arzobispo Desmond Tutu acuñó el término "Nación Arcoíris" para describir la diversidad multicultural de la Sudáfrica post-apartheid.',
      'Las elecciones de 1994 tardaron tres días en completarse (del 26 al 28 de abril) debido a la masiva afluencia de votantes.',
    ],
  },

  planningChecklist: {
    en: [
      'Check for local Freedom Day events, concerts, and ceremonies in your area',
      'Plan a visit to a heritage site such as Robben Island, the Apartheid Museum, or Constitution Hill',
      'Organise a family braai or community gathering to celebrate',
      'Display the South African flag at your home or business',
      'Teach children about the significance of the 1994 elections and the end of apartheid',
    ],
    fr: [
      'Vérifier les événements locaux du Jour de la liberté, concerts et cérémonies dans votre région',
      'Planifier une visite à un site patrimonial tel que Robben Island, le musée de l\'Apartheid ou Constitution Hill',
      'Organiser un braai familial ou un rassemblement communautaire pour célébrer',
      'Afficher le drapeau sud-africain à votre domicile ou votre entreprise',
      'Enseigner aux enfants la signification des élections de 1994 et la fin de l\'apartheid',
    ],
    es: [
      'Consultar los eventos locales del Día de la Libertad, conciertos y ceremonias en tu zona',
      'Planificar una visita a un sitio patrimonial como Robben Island, el Museo del Apartheid o Constitution Hill',
      'Organizar un braai familiar o una reunión comunitaria para celebrar',
      'Exhibir la bandera sudafricana en tu hogar o negocio',
      'Enseñar a los niños sobre la importancia de las elecciones de 1994 y el fin del apartheid',
    ],
  },

  relatedHolidays: ['za_human-rights-day', 'za_youth-day', 'za_day-of-reconciliation'],

  seo: {
    en: {
      titleTemplate: 'Freedom Day {year} South Africa — Countdown & Guide',
      descriptionTemplate: 'When is Freedom Day {year} in South Africa? Live countdown to April 27, history of the 1994 elections, and celebration guide.',
      keywords: ['Freedom Day South Africa', 'April 27 South Africa', '1994 elections South Africa', 'end of apartheid', 'Freedom Day countdown'],
    },
    fr: {
      titleTemplate: 'Jour de la liberté {year} Afrique du Sud — Compte à rebours et guide',
      descriptionTemplate: 'Quand est le Jour de la liberté {year} en Afrique du Sud ? Compte à rebours en direct jusqu\'au 27 avril, histoire des élections de 1994 et guide de célébration.',
      keywords: ['Jour de la liberté Afrique du Sud', '27 avril Afrique du Sud', 'élections 1994 Afrique du Sud', 'fin de l\'apartheid', 'Jour de la liberté'],
    },
    es: {
      titleTemplate: 'Día de la Libertad {year} Sudáfrica — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Día de la Libertad {year} en Sudáfrica? Cuenta regresiva en vivo hasta el 27 de abril, historia de las elecciones de 1994 y guía de celebración.',
      keywords: ['Día de la Libertad Sudáfrica', '27 de abril Sudáfrica', 'elecciones 1994 Sudáfrica', 'fin del apartheid', 'Día de la Libertad'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Freedom Day {year} in South Africa?',
        fr: 'Quand est le Jour de la liberté {year} en Afrique du Sud ?',
        es: '¿Cuándo es el Día de la Libertad {year} en Sudáfrica?',
      },
      answer: {
        en: 'Freedom Day {year} in South Africa is on {date} ({dayOfWeek}). It is always observed on April 27.',
        fr: 'Le Jour de la liberté {year} en Afrique du Sud est le {date} ({dayOfWeek}). Il est toujours observé le 27 avril.',
        es: 'El Día de la Libertad {year} en Sudáfrica es el {date} ({dayOfWeek}). Siempre se observa el 27 de abril.',
      },
    },
    {
      question: {
        en: 'Why is April 27 celebrated as Freedom Day?',
        fr: 'Pourquoi le 27 avril est-il célébré comme Jour de la liberté ?',
        es: '¿Por qué se celebra el 27 de abril como Día de la Libertad?',
      },
      answer: {
        en: 'April 27 marks the date of South Africa\'s first fully democratic, non-racial general election in 1994. It was the first time all South Africans, regardless of race, could vote, ending decades of apartheid rule.',
        fr: 'Le 27 avril marque la date des premières élections générales pleinement démocratiques et non raciales d\'Afrique du Sud en 1994. C\'était la première fois que tous les Sud-Africains, quelle que soit leur race, pouvaient voter, mettant fin à des décennies de régime d\'apartheid.',
        es: 'El 27 de abril marca la fecha de las primeras elecciones generales plenamente democráticas y no raciales de Sudáfrica en 1994. Fue la primera vez que todos los sudafricanos, sin importar su raza, pudieron votar, poniendo fin a décadas de régimen de apartheid.',
      },
    },
    {
      question: {
        en: 'Is Freedom Day a public holiday in South Africa?',
        fr: 'Le Jour de la liberté est-il un jour férié en Afrique du Sud ?',
        es: '¿Es el Día de la Libertad un feriado en Sudáfrica?',
      },
      answer: {
        en: 'Yes, Freedom Day is an official public holiday in South Africa. If April 27 falls on a Sunday, the following Monday is observed as the public holiday.',
        fr: 'Oui, le Jour de la liberté est un jour férié officiel en Afrique du Sud. Si le 27 avril tombe un dimanche, le lundi suivant est observé comme jour férié.',
        es: 'Sí, el Día de la Libertad es un feriado oficial en Sudáfrica. Si el 27 de abril cae en domingo, el lunes siguiente se observa como feriado.',
      },
    },
    {
      question: {
        en: 'How do South Africans celebrate Freedom Day?',
        fr: 'Comment les Sud-Africains célèbrent-ils le Jour de la liberté ?',
        es: '¿Cómo celebran los sudafricanos el Día de la Libertad?',
      },
      answer: {
        en: 'South Africans celebrate Freedom Day with government ceremonies, flag-raising events, cultural performances, heritage site visits, family braais, and community gatherings. It is a day of national pride and reflection.',
        fr: 'Les Sud-Africains célèbrent le Jour de la liberté avec des cérémonies gouvernementales, des levées de drapeau, des spectacles culturels, des visites de sites patrimoniaux, des braais en famille et des rassemblements communautaires. C\'est un jour de fierté nationale et de réflexion.',
        es: 'Los sudafricanos celebran el Día de la Libertad con ceremonias gubernamentales, izamiento de bandera, espectáculos culturales, visitas a sitios patrimoniales, braais familiares y reuniones comunitarias. Es un día de orgullo nacional y reflexión.',
      },
    },
  ],

  colorTheme: 'rainbow',
  icon: '🇿🇦',
};

// ---------------------------------------------------------------------------
// Youth Day — June 16
// ---------------------------------------------------------------------------

const youthDay: HolidayData = {
  id: 'za_youth-day',
  countryCode: 'za',
  slugs: { en: 'youth-day', fr: 'journee-de-la-jeunesse', es: 'dia-de-la-juventud' },
  names: { en: 'Youth Day', fr: 'Journée de la jeunesse', es: 'Día de la Juventud' },

  dateType: 'fixed',
  fixedMonth: 6,
  fixedDay: 16,

  descriptions: {
    en: 'Youth Day on June 16 commemorates the 1976 Soweto uprising, when students protested against apartheid-era education policies. It honours the bravery of young South Africans who sacrificed their lives in the struggle for equality and quality education.',
    fr: 'La Journée de la jeunesse, le 16 juin, commémore le soulèvement de Soweto en 1976, lorsque des étudiants ont protesté contre les politiques éducatives de l\'ère de l\'apartheid. Elle honore le courage des jeunes Sud-Africains qui ont sacrifié leur vie dans la lutte pour l\'égalité et une éducation de qualité.',
    es: 'El Día de la Juventud, el 16 de junio, conmemora el levantamiento de Soweto de 1976, cuando estudiantes protestaron contra las políticas educativas de la era del apartheid. Honra la valentía de los jóvenes sudafricanos que sacrificaron sus vidas en la lucha por la igualdad y la educación de calidad.',
  },

  history: {
    en: 'On June 16, 1976, thousands of Black students in Soweto took to the streets to protest the apartheid government\'s mandate that Afrikaans be used as a medium of instruction in schools. The students saw Afrikaans as the language of the oppressor and demanded the right to be taught in English or their native languages.\n\nPolice responded to the peaceful march with tear gas and live ammunition. Twelve-year-old Hector Pieterson was among the first to be killed, and the iconic photograph of his lifeless body being carried became a symbol of the uprising. The violence sparked months of protests across South Africa, resulting in an estimated 700 deaths.\n\nThe Soweto uprising marked a turning point in the anti-apartheid struggle, galvanising international opposition to the regime and inspiring a new generation of activists. After the end of apartheid, June 16 was declared Youth Day to honour the courage and sacrifice of the students of 1976.',
    fr: 'Le 16 juin 1976, des milliers d\'étudiants noirs de Soweto sont descendus dans la rue pour protester contre l\'obligation du gouvernement de l\'apartheid d\'utiliser l\'afrikaans comme langue d\'enseignement dans les écoles. Les étudiants considéraient l\'afrikaans comme la langue de l\'oppresseur et exigeaient le droit d\'être enseignés en anglais ou dans leurs langues maternelles.\n\nLa police a répondu à la marche pacifique avec des gaz lacrymogènes et des munitions réelles. Hector Pieterson, âgé de douze ans, a été parmi les premiers tués, et la photographie emblématique de son corps sans vie porté par un camarade est devenue un symbole du soulèvement. La violence a déclenché des mois de protestations à travers l\'Afrique du Sud, faisant environ 700 morts.\n\nLe soulèvement de Soweto a marqué un tournant dans la lutte anti-apartheid, galvanisant l\'opposition internationale au régime et inspirant une nouvelle génération de militants. Après la fin de l\'apartheid, le 16 juin a été déclaré Journée de la jeunesse pour honorer le courage et le sacrifice des étudiants de 1976.',
    es: 'El 16 de junio de 1976, miles de estudiantes negros en Soweto salieron a las calles para protestar contra el mandato del gobierno del apartheid de usar el afrikáans como medio de instrucción en las escuelas. Los estudiantes veían el afrikáans como el idioma del opresor y exigían el derecho a recibir enseñanza en inglés o en sus lenguas nativas.\n\nLa policía respondió a la marcha pacífica con gases lacrimógenos y munición real. Hector Pieterson, de doce años, fue uno de los primeros en ser asesinados, y la icónica fotografía de su cuerpo sin vida siendo cargado se convirtió en un símbolo del levantamiento. La violencia desencadenó meses de protestas en toda Sudáfrica, resultando en un estimado de 700 muertes.\n\nEl levantamiento de Soweto marcó un punto de inflexión en la lucha contra el apartheid, galvanizando la oposición internacional al régimen e inspirando a una nueva generación de activistas. Tras el fin del apartheid, el 16 de junio fue declarado Día de la Juventud para honrar el coraje y el sacrificio de los estudiantes de 1976.',
  },

  traditions: {
    en: [
      'Visiting the Hector Pieterson Memorial and Museum in Soweto',
      'Attending youth rallies and motivational events',
      'Participating in educational seminars and career expos for young people',
      'Government officials delivering speeches honouring the youth of 1976',
      'Community sports events and cultural performances by young artists',
      'School-based programmes teaching the history of the Soweto uprising',
    ],
    fr: [
      'Visiter le mémorial et musée Hector Pieterson à Soweto',
      'Participer à des rassemblements de jeunes et des événements de motivation',
      'Participer à des séminaires éducatifs et des salons de carrière pour les jeunes',
      'Discours de responsables gouvernementaux honorant la jeunesse de 1976',
      'Événements sportifs communautaires et spectacles culturels par de jeunes artistes',
      'Programmes scolaires enseignant l\'histoire du soulèvement de Soweto',
    ],
    es: [
      'Visitar el Memorial y Museo Hector Pieterson en Soweto',
      'Asistir a concentraciones juveniles y eventos motivacionales',
      'Participar en seminarios educativos y ferias de carreras para jóvenes',
      'Discursos de funcionarios del gobierno honrando a la juventud de 1976',
      'Eventos deportivos comunitarios y espectáculos culturales de jóvenes artistas',
      'Programas escolares que enseñan la historia del levantamiento de Soweto',
    ],
  },

  funFacts: {
    en: [
      'The iconic photograph of Hector Pieterson being carried by Mbuyisa Makhubo was taken by photojournalist Sam Nzima and became one of the most recognisable images of the anti-apartheid struggle.',
      'The students\' protest was initially planned as a peaceful march, but police confrontation turned it into a violent uprising.',
      'Approximately 20,000 students participated in the initial Soweto march on June 16, 1976.',
      'The Soweto uprising led to a significant increase in young South Africans joining the liberation movements in exile.',
      'South Africa\'s youth population (under 35) makes up approximately 66% of the total population, making Youth Day especially significant.',
    ],
    fr: [
      'La photographie emblématique d\'Hector Pieterson porté par Mbuyisa Makhubo a été prise par le photojournaliste Sam Nzima et est devenue l\'une des images les plus reconnaissables de la lutte anti-apartheid.',
      'La protestation des étudiants était initialement prévue comme une marche pacifique, mais la confrontation policière l\'a transformée en soulèvement violent.',
      'Environ 20 000 étudiants ont participé à la marche initiale de Soweto le 16 juin 1976.',
      'Le soulèvement de Soweto a entraîné une augmentation significative du nombre de jeunes Sud-Africains rejoignant les mouvements de libération en exil.',
      'La population jeune de l\'Afrique du Sud (moins de 35 ans) représente environ 66 % de la population totale, ce qui rend la Journée de la jeunesse particulièrement significative.',
    ],
    es: [
      'La icónica fotografía de Hector Pieterson siendo cargado por Mbuyisa Makhubo fue tomada por el fotoperiodista Sam Nzima y se convirtió en una de las imágenes más reconocibles de la lucha contra el apartheid.',
      'La protesta de los estudiantes estaba inicialmente planeada como una marcha pacífica, pero la confrontación policial la convirtió en un levantamiento violento.',
      'Aproximadamente 20.000 estudiantes participaron en la marcha inicial de Soweto el 16 de junio de 1976.',
      'El levantamiento de Soweto llevó a un aumento significativo de jóvenes sudafricanos que se unieron a los movimientos de liberación en el exilio.',
      'La población joven de Sudáfrica (menores de 35 años) representa aproximadamente el 66% de la población total, lo que hace que el Día de la Juventud sea especialmente significativo.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan a visit to the Hector Pieterson Memorial and Museum in Soweto',
      'Check for local youth events, rallies, and educational programmes',
      'Encourage young people to learn about the history of the Soweto uprising',
      'Attend community events celebrating youth achievements and potential',
      'Support youth development organisations through volunteering or donations',
    ],
    fr: [
      'Planifier une visite au mémorial et musée Hector Pieterson à Soweto',
      'Vérifier les événements locaux pour les jeunes, rassemblements et programmes éducatifs',
      'Encourager les jeunes à s\'informer sur l\'histoire du soulèvement de Soweto',
      'Participer à des événements communautaires célébrant les réalisations et le potentiel des jeunes',
      'Soutenir les organisations de développement des jeunes par le bénévolat ou des dons',
    ],
    es: [
      'Planificar una visita al Memorial y Museo Hector Pieterson en Soweto',
      'Consultar los eventos locales para jóvenes, concentraciones y programas educativos',
      'Animar a los jóvenes a aprender sobre la historia del levantamiento de Soweto',
      'Asistir a eventos comunitarios que celebren los logros y el potencial de la juventud',
      'Apoyar organizaciones de desarrollo juvenil mediante voluntariado o donaciones',
    ],
  },

  relatedHolidays: ['za_human-rights-day', 'za_freedom-day', 'za_day-of-reconciliation'],

  seo: {
    en: {
      titleTemplate: 'Youth Day {year} South Africa — Countdown & Guide',
      descriptionTemplate: 'When is Youth Day {year} in South Africa? Live countdown to June 16, Soweto uprising history, and commemoration guide.',
      keywords: ['Youth Day South Africa', 'Soweto uprising', 'June 16 South Africa', 'Hector Pieterson', 'Youth Day countdown'],
    },
    fr: {
      titleTemplate: 'Journée de la jeunesse {year} Afrique du Sud — Compte à rebours et guide',
      descriptionTemplate: 'Quand est la Journée de la jeunesse {year} en Afrique du Sud ? Compte à rebours en direct jusqu\'au 16 juin, histoire du soulèvement de Soweto et guide de commémoration.',
      keywords: ['Journée de la jeunesse Afrique du Sud', 'soulèvement de Soweto', '16 juin Afrique du Sud', 'Hector Pieterson', 'Journée de la jeunesse'],
    },
    es: {
      titleTemplate: 'Día de la Juventud {year} Sudáfrica — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Día de la Juventud {year} en Sudáfrica? Cuenta regresiva en vivo hasta el 16 de junio, historia del levantamiento de Soweto y guía de conmemoración.',
      keywords: ['Día de la Juventud Sudáfrica', 'levantamiento de Soweto', '16 de junio Sudáfrica', 'Hector Pieterson', 'Día de la Juventud'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Youth Day {year} in South Africa?',
        fr: 'Quand est la Journée de la jeunesse {year} en Afrique du Sud ?',
        es: '¿Cuándo es el Día de la Juventud {year} en Sudáfrica?',
      },
      answer: {
        en: 'Youth Day {year} in South Africa is on {date} ({dayOfWeek}). It is always observed on June 16.',
        fr: 'La Journée de la jeunesse {year} en Afrique du Sud est le {date} ({dayOfWeek}). Elle est toujours observée le 16 juin.',
        es: 'El Día de la Juventud {year} en Sudáfrica es el {date} ({dayOfWeek}). Siempre se observa el 16 de junio.',
      },
    },
    {
      question: {
        en: 'What was the Soweto uprising?',
        fr: 'Qu\'est-ce que le soulèvement de Soweto ?',
        es: '¿Qué fue el levantamiento de Soweto?',
      },
      answer: {
        en: 'The Soweto uprising began on June 16, 1976, when thousands of Black students marched against the apartheid government\'s mandate to use Afrikaans as a language of instruction. Police opened fire on the students, killing and injuring hundreds and sparking months of nationwide protests.',
        fr: 'Le soulèvement de Soweto a commencé le 16 juin 1976, lorsque des milliers d\'étudiants noirs ont marché contre l\'obligation du gouvernement de l\'apartheid d\'utiliser l\'afrikaans comme langue d\'enseignement. La police a ouvert le feu sur les étudiants, tuant et blessant des centaines de personnes et déclenchant des mois de protestations nationales.',
        es: 'El levantamiento de Soweto comenzó el 16 de junio de 1976, cuando miles de estudiantes negros marcharon contra el mandato del gobierno del apartheid de usar el afrikáans como idioma de instrucción. La policía abrió fuego contra los estudiantes, matando e hiriendo a cientos y desencadenando meses de protestas a nivel nacional.',
      },
    },
    {
      question: {
        en: 'Who was Hector Pieterson?',
        fr: 'Qui était Hector Pieterson ?',
        es: '¿Quién fue Hector Pieterson?',
      },
      answer: {
        en: 'Hector Pieterson was a 12-year-old student who was among the first to be shot and killed by police during the Soweto uprising on June 16, 1976. The photograph of his body being carried became an iconic symbol of the anti-apartheid struggle. A memorial and museum in Soweto are named in his honour.',
        fr: 'Hector Pieterson était un élève de 12 ans qui a été parmi les premiers à être abattus par la police lors du soulèvement de Soweto le 16 juin 1976. La photographie de son corps porté par un camarade est devenue un symbole emblématique de la lutte anti-apartheid. Un mémorial et un musée à Soweto portent son nom.',
        es: 'Hector Pieterson fue un estudiante de 12 años que estuvo entre los primeros en ser disparados y asesinados por la policía durante el levantamiento de Soweto el 16 de junio de 1976. La fotografía de su cuerpo siendo cargado se convirtió en un símbolo icónico de la lucha contra el apartheid. Un memorial y museo en Soweto llevan su nombre.',
      },
    },
    {
      question: {
        en: 'Is Youth Day a public holiday in South Africa?',
        fr: 'La Journée de la jeunesse est-elle un jour férié en Afrique du Sud ?',
        es: '¿Es el Día de la Juventud un feriado en Sudáfrica?',
      },
      answer: {
        en: 'Yes, Youth Day is an official public holiday in South Africa. If June 16 falls on a Sunday, the following Monday is observed as the public holiday.',
        fr: 'Oui, la Journée de la jeunesse est un jour férié officiel en Afrique du Sud. Si le 16 juin tombe un dimanche, le lundi suivant est observé comme jour férié.',
        es: 'Sí, el Día de la Juventud es un feriado oficial en Sudáfrica. Si el 16 de junio cae en domingo, el lunes siguiente se observa como feriado.',
      },
    },
  ],

  colorTheme: 'red-black-green',
  icon: '🎓',
};

// ---------------------------------------------------------------------------
// Heritage Day — September 24
// ---------------------------------------------------------------------------

const heritageDay: HolidayData = {
  id: 'za_heritage-day',
  countryCode: 'za',
  slugs: { en: 'heritage-day', fr: 'journee-du-patrimoine', es: 'dia-del-patrimonio' },
  names: { en: 'Heritage Day', fr: 'Journée du patrimoine', es: 'Día del Patrimonio' },

  dateType: 'fixed',
  fixedMonth: 9,
  fixedDay: 24,

  descriptions: {
    en: 'Heritage Day on September 24 celebrates the rich and diverse cultural heritage of South Africa. Also affectionately known as "National Braai Day," it brings together people of all backgrounds to celebrate their traditions through food, music, and cultural expression.',
    fr: 'La Journée du patrimoine, le 24 septembre, célèbre le riche et divers patrimoine culturel de l\'Afrique du Sud. Également connue affectueusement sous le nom de « Journée nationale du braai », elle rassemble des personnes de tous horizons pour célébrer leurs traditions à travers la nourriture, la musique et l\'expression culturelle.',
    es: 'El Día del Patrimonio, el 24 de septiembre, celebra el rico y diverso patrimonio cultural de Sudáfrica. También conocido cariñosamente como "Día Nacional del Braai," reúne a personas de todos los orígenes para celebrar sus tradiciones a través de la comida, la música y la expresión cultural.',
  },

  history: {
    en: 'Heritage Day has its roots in the Zulu celebration of King Shaka Day, which honoured the legendary Zulu king Shaka kaSenzangakhona. When the new democratic government created the public holiday calendar after 1994, September 24 was designated as Heritage Day to celebrate the cultural diversity of all South Africans rather than focusing on a single ethnic group.\n\nIn 2005, South African media personality Jan Scannell launched the "National Braai Day" campaign, promoting the idea that all South Africans, regardless of background, share the tradition of gathering around a fire to cook meat. Archbishop Desmond Tutu endorsed the campaign, and "Braai Day" has since become an informal but widely celebrated aspect of Heritage Day.\n\nToday, Heritage Day serves as a reminder of South Africa\'s extraordinary cultural diversity, with 11 official languages and a multitude of traditions, customs, and cuisines that make up the Rainbow Nation.',
    fr: 'La Journée du patrimoine trouve ses racines dans la célébration zouloue du Jour du roi Shaka, qui honorait le légendaire roi zoulou Shaka kaSenzangakhona. Lorsque le nouveau gouvernement démocratique a créé le calendrier des jours fériés après 1994, le 24 septembre a été désigné comme Journée du patrimoine pour célébrer la diversité culturelle de tous les Sud-Africains plutôt que de se concentrer sur un seul groupe ethnique.\n\nEn 2005, la personnalité médiatique sud-africaine Jan Scannell a lancé la campagne « Journée nationale du braai », promouvant l\'idée que tous les Sud-Africains, quelle que soit leur origine, partagent la tradition de se rassembler autour d\'un feu pour cuire de la viande. L\'archevêque Desmond Tutu a soutenu la campagne, et la « Journée du braai » est depuis devenue un aspect informel mais largement célébré de la Journée du patrimoine.\n\nAujourd\'hui, la Journée du patrimoine rappelle l\'extraordinaire diversité culturelle de l\'Afrique du Sud, avec 11 langues officielles et une multitude de traditions, coutumes et cuisines qui composent la Nation arc-en-ciel.',
    es: 'El Día del Patrimonio tiene sus raíces en la celebración zulú del Día del Rey Shaka, que honraba al legendario rey zulú Shaka kaSenzangakhona. Cuando el nuevo gobierno democrático creó el calendario de feriados después de 1994, el 24 de septiembre fue designado como Día del Patrimonio para celebrar la diversidad cultural de todos los sudafricanos en lugar de centrarse en un solo grupo étnico.\n\nEn 2005, la personalidad mediática sudafricana Jan Scannell lanzó la campaña "Día Nacional del Braai", promoviendo la idea de que todos los sudafricanos, sin importar su origen, comparten la tradición de reunirse alrededor del fuego para cocinar carne. El arzobispo Desmond Tutu respaldó la campaña, y el "Día del Braai" se ha convertido desde entonces en un aspecto informal pero ampliamente celebrado del Día del Patrimonio.\n\nHoy, el Día del Patrimonio sirve como recordatorio de la extraordinaria diversidad cultural de Sudáfrica, con 11 idiomas oficiales y una multitud de tradiciones, costumbres y cocinas que conforman la Nación Arcoíris.',
  },

  traditions: {
    en: [
      'Hosting a braai (South African barbecue) with family and friends',
      'Wearing traditional cultural attire representing one\'s heritage',
      'Attending cultural festivals showcasing music, dance, and art',
      'Cooking traditional dishes from various South African cultures',
      'Visiting cultural heritage sites and museums',
      'Participating in community events celebrating diversity',
      'Sharing stories and traditions across different cultural groups',
    ],
    fr: [
      'Organiser un braai (barbecue sud-africain) avec famille et amis',
      'Porter des tenues culturelles traditionnelles représentant son patrimoine',
      'Assister à des festivals culturels présentant musique, danse et art',
      'Cuisiner des plats traditionnels des diverses cultures sud-africaines',
      'Visiter des sites et musées du patrimoine culturel',
      'Participer à des événements communautaires célébrant la diversité',
      'Partager des histoires et traditions entre différents groupes culturels',
    ],
    es: [
      'Organizar un braai (asado sudafricano) con familia y amigos',
      'Vestir atuendos culturales tradicionales que representen el patrimonio propio',
      'Asistir a festivales culturales que muestren música, danza y arte',
      'Cocinar platos tradicionales de las diversas culturas sudafricanas',
      'Visitar sitios y museos del patrimonio cultural',
      'Participar en eventos comunitarios que celebren la diversidad',
      'Compartir historias y tradiciones entre diferentes grupos culturales',
    ],
  },

  funFacts: {
    en: [
      'The word "braai" comes from Afrikaans and is used across all of South Africa\'s cultural groups, making it one of the few truly unifying traditions.',
      'South Africa has 11 official languages: Zulu, Xhosa, Afrikaans, English, Northern Sotho, Tswana, Sotho, Tsonga, Swazi, Venda, and Ndebele.',
      'Heritage Day was originally known as Shaka Day, celebrating the Zulu king. It was broadened to include all cultures after 1994.',
      'Archbishop Desmond Tutu was among the most prominent supporters of the National Braai Day initiative.',
      'South Africa is sometimes called the "Rainbow Nation" because of its incredible cultural, ethnic, and linguistic diversity.',
    ],
    fr: [
      'Le mot « braai » vient de l\'afrikaans et est utilisé par tous les groupes culturels d\'Afrique du Sud, ce qui en fait l\'une des rares traditions véritablement unificatrices.',
      'L\'Afrique du Sud compte 11 langues officielles : zoulou, xhosa, afrikaans, anglais, sotho du Nord, tswana, sotho, tsonga, swazi, venda et ndébélé.',
      'La Journée du patrimoine était à l\'origine connue sous le nom de Jour de Shaka, célébrant le roi zoulou. Elle a été élargie pour inclure toutes les cultures après 1994.',
      'L\'archevêque Desmond Tutu était parmi les partisans les plus éminents de l\'initiative de la Journée nationale du braai.',
      'L\'Afrique du Sud est parfois appelée la « Nation arc-en-ciel » en raison de son incroyable diversité culturelle, ethnique et linguistique.',
    ],
    es: [
      'La palabra "braai" proviene del afrikáans y se usa en todos los grupos culturales de Sudáfrica, lo que la convierte en una de las pocas tradiciones verdaderamente unificadoras.',
      'Sudáfrica tiene 11 idiomas oficiales: zulú, xhosa, afrikáans, inglés, sotho del norte, tswana, sotho, tsonga, suazi, venda y ndebele.',
      'El Día del Patrimonio se conocía originalmente como el Día de Shaka, celebrando al rey zulú. Se amplió para incluir todas las culturas después de 1994.',
      'El arzobispo Desmond Tutu fue uno de los partidarios más prominentes de la iniciativa del Día Nacional del Braai.',
      'Sudáfrica a veces se llama la "Nación Arcoíris" debido a su increíble diversidad cultural, étnica y lingüística.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan a braai with family and friends — stock up on meat, boerewors, and sides',
      'Prepare or wear traditional cultural attire for the day',
      'Check for local cultural festivals and heritage events in your area',
      'Learn about a South African culture different from your own',
      'Visit a cultural heritage site or museum to deepen your understanding of South Africa\'s diversity',
    ],
    fr: [
      'Planifier un braai avec famille et amis — se procurer de la viande, du boerewors et des accompagnements',
      'Préparer ou porter des tenues culturelles traditionnelles pour la journée',
      'Vérifier les festivals culturels et événements patrimoniaux locaux dans votre région',
      'Découvrir une culture sud-africaine différente de la vôtre',
      'Visiter un site du patrimoine culturel ou un musée pour approfondir votre compréhension de la diversité sud-africaine',
    ],
    es: [
      'Planificar un braai con familia y amigos — abastecerse de carne, boerewors y acompañamientos',
      'Preparar o vestir atuendos culturales tradicionales para el día',
      'Consultar los festivales culturales y eventos patrimoniales locales en tu zona',
      'Aprender sobre una cultura sudafricana diferente a la tuya',
      'Visitar un sitio del patrimonio cultural o un museo para profundizar tu comprensión de la diversidad sudafricana',
    ],
  },

  relatedHolidays: ['za_freedom-day', 'za_day-of-reconciliation', 'za_christmas'],

  seo: {
    en: {
      titleTemplate: 'Heritage Day {year} South Africa — Countdown & Guide',
      descriptionTemplate: 'When is Heritage Day {year} in South Africa? Live countdown to September 24, National Braai Day traditions, and celebration guide.',
      keywords: ['Heritage Day South Africa', 'National Braai Day', 'September 24 South Africa', 'South African culture', 'Heritage Day countdown'],
    },
    fr: {
      titleTemplate: 'Journée du patrimoine {year} Afrique du Sud — Compte à rebours et guide',
      descriptionTemplate: 'Quand est la Journée du patrimoine {year} en Afrique du Sud ? Compte à rebours en direct jusqu\'au 24 septembre, traditions du braai national et guide de célébration.',
      keywords: ['Journée du patrimoine Afrique du Sud', 'Journée nationale du braai', '24 septembre Afrique du Sud', 'culture sud-africaine', 'Journée du patrimoine'],
    },
    es: {
      titleTemplate: 'Día del Patrimonio {year} Sudáfrica — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Día del Patrimonio {year} en Sudáfrica? Cuenta regresiva en vivo hasta el 24 de septiembre, tradiciones del Día Nacional del Braai y guía de celebración.',
      keywords: ['Día del Patrimonio Sudáfrica', 'Día Nacional del Braai', '24 de septiembre Sudáfrica', 'cultura sudafricana', 'Día del Patrimonio'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Heritage Day {year} in South Africa?',
        fr: 'Quand est la Journée du patrimoine {year} en Afrique du Sud ?',
        es: '¿Cuándo es el Día del Patrimonio {year} en Sudáfrica?',
      },
      answer: {
        en: 'Heritage Day {year} in South Africa is on {date} ({dayOfWeek}). It is always observed on September 24.',
        fr: 'La Journée du patrimoine {year} en Afrique du Sud est le {date} ({dayOfWeek}). Elle est toujours observée le 24 septembre.',
        es: 'El Día del Patrimonio {year} en Sudáfrica es el {date} ({dayOfWeek}). Siempre se observa el 24 de septiembre.',
      },
    },
    {
      question: {
        en: 'What is National Braai Day?',
        fr: 'Qu\'est-ce que la Journée nationale du braai ?',
        es: '¿Qué es el Día Nacional del Braai?',
      },
      answer: {
        en: 'National Braai Day is an informal name for Heritage Day, promoted since 2005 as a way to unite all South Africans around the shared tradition of the braai (barbecue). It was endorsed by Archbishop Desmond Tutu and has become a beloved part of Heritage Day celebrations.',
        fr: 'La Journée nationale du braai est un nom informel pour la Journée du patrimoine, promu depuis 2005 comme moyen d\'unir tous les Sud-Africains autour de la tradition partagée du braai (barbecue). Elle a été soutenue par l\'archevêque Desmond Tutu et est devenue une partie appréciée des célébrations de la Journée du patrimoine.',
        es: 'El Día Nacional del Braai es un nombre informal para el Día del Patrimonio, promovido desde 2005 como una forma de unir a todos los sudafricanos en torno a la tradición compartida del braai (asado). Fue respaldado por el arzobispo Desmond Tutu y se ha convertido en una parte querida de las celebraciones del Día del Patrimonio.',
      },
    },
    {
      question: {
        en: 'Is Heritage Day a public holiday in South Africa?',
        fr: 'La Journée du patrimoine est-elle un jour férié en Afrique du Sud ?',
        es: '¿Es el Día del Patrimonio un feriado en Sudáfrica?',
      },
      answer: {
        en: 'Yes, Heritage Day is an official public holiday in South Africa. If September 24 falls on a Sunday, the following Monday is observed as the public holiday.',
        fr: 'Oui, la Journée du patrimoine est un jour férié officiel en Afrique du Sud. Si le 24 septembre tombe un dimanche, le lundi suivant est observé comme jour férié.',
        es: 'Sí, el Día del Patrimonio es un feriado oficial en Sudáfrica. Si el 24 de septiembre cae en domingo, el lunes siguiente se observa como feriado.',
      },
    },
    {
      question: {
        en: 'What is a braai?',
        fr: 'Qu\'est-ce qu\'un braai ?',
        es: '¿Qué es un braai?',
      },
      answer: {
        en: 'A braai is the South African term for a barbecue. It involves grilling meat — typically boerewors (sausage), steak, lamb chops, and chicken — over wood or charcoal. The braai is a central social tradition in South Africa, enjoyed by all cultural groups.',
        fr: 'Un braai est le terme sud-africain pour un barbecue. Il consiste à griller de la viande — généralement du boerewors (saucisse), du steak, des côtelettes d\'agneau et du poulet — sur du bois ou du charbon. Le braai est une tradition sociale centrale en Afrique du Sud, appréciée par tous les groupes culturels.',
        es: 'Un braai es el término sudafricano para una barbacoa. Consiste en asar carne — típicamente boerewors (salchicha), bistec, chuletas de cordero y pollo — sobre leña o carbón. El braai es una tradición social central en Sudáfrica, disfrutada por todos los grupos culturales.',
      },
    },
  ],

  colorTheme: 'multi-color',
  icon: '🔥',
};

// ---------------------------------------------------------------------------
// Day of Reconciliation — December 16
// ---------------------------------------------------------------------------

const dayOfReconciliation: HolidayData = {
  id: 'za_day-of-reconciliation',
  countryCode: 'za',
  slugs: { en: 'day-of-reconciliation', fr: 'jour-de-la-reconciliation', es: 'dia-de-la-reconciliacion' },
  names: { en: 'Day of Reconciliation', fr: 'Jour de la réconciliation', es: 'Día de la Reconciliación' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 16,

  descriptions: {
    en: 'The Day of Reconciliation on December 16 promotes national unity and reconciliation among all South Africans. Previously known as the Day of the Vow by Afrikaners and the Day of Umkhonto we Sizwe by the liberation movements, it now serves as a day to foster understanding and heal the divisions of the past.',
    fr: 'Le Jour de la réconciliation, le 16 décembre, promeut l\'unité nationale et la réconciliation entre tous les Sud-Africains. Anciennement connu sous le nom de Jour du Vœu par les Afrikaners et Jour d\'Umkhonto we Sizwe par les mouvements de libération, il sert désormais de journée pour favoriser la compréhension et guérir les divisions du passé.',
    es: 'El Día de la Reconciliación, el 16 de diciembre, promueve la unidad nacional y la reconciliación entre todos los sudafricanos. Anteriormente conocido como el Día del Voto por los afrikáneres y el Día de Umkhonto we Sizwe por los movimientos de liberación, ahora sirve como un día para fomentar la comprensión y sanar las divisiones del pasado.',
  },

  history: {
    en: 'December 16 holds deep significance for multiple groups in South African history. For Afrikaners, it commemorated the Battle of Blood River on December 16, 1838, when a small group of Voortrekkers defeated a large Zulu army. They believed their victory was divinely ordained and made a vow to God, hence the holiday was known as the "Day of the Vow" or "Geloftedag."\n\nFor the liberation movements, December 16, 1961, marked the founding of Umkhonto we Sizwe (MK), the armed wing of the African National Congress, co-founded by Nelson Mandela. This date was deliberately chosen to reclaim the significance of December 16 from its Afrikaner associations.\n\nAfter the transition to democracy in 1994, the new government renamed the holiday the "Day of Reconciliation" to bridge these opposing historical narratives. It serves as a symbol of South Africa\'s commitment to healing, unity, and building a shared future beyond the divisions of apartheid and colonialism.',
    fr: 'Le 16 décembre revêt une signification profonde pour plusieurs groupes dans l\'histoire sud-africaine. Pour les Afrikaners, il commémorait la bataille de Blood River le 16 décembre 1838, lorsqu\'un petit groupe de Voortrekkers a vaincu une grande armée zouloue. Ils croyaient que leur victoire était ordonnée par Dieu et firent un vœu, d\'où le nom de « Jour du Vœu » ou « Geloftedag ».\n\nPour les mouvements de libération, le 16 décembre 1961 a marqué la fondation d\'Umkhonto we Sizwe (MK), la branche armée du Congrès national africain, co-fondée par Nelson Mandela. Cette date a été délibérément choisie pour revendiquer la signification du 16 décembre face à ses associations afrikaners.\n\nAprès la transition vers la démocratie en 1994, le nouveau gouvernement a renommé le jour férié « Jour de la réconciliation » pour relier ces récits historiques opposés. Il sert de symbole de l\'engagement de l\'Afrique du Sud envers la guérison, l\'unité et la construction d\'un avenir partagé au-delà des divisions de l\'apartheid et du colonialisme.',
    es: 'El 16 de diciembre tiene un significado profundo para múltiples grupos en la historia sudafricana. Para los afrikáneres, conmemoraba la Batalla de Blood River el 16 de diciembre de 1838, cuando un pequeño grupo de Voortrekkers derrotó a un gran ejército zulú. Creían que su victoria fue ordenada divinamente e hicieron un voto a Dios, de ahí que el feriado se conociera como el "Día del Voto" o "Geloftedag."\n\nPara los movimientos de liberación, el 16 de diciembre de 1961 marcó la fundación de Umkhonto we Sizwe (MK), el brazo armado del Congreso Nacional Africano, cofundado por Nelson Mandela. Esta fecha fue deliberadamente elegida para reclamar la importancia del 16 de diciembre de sus asociaciones afrikáneres.\n\nTras la transición a la democracia en 1994, el nuevo gobierno renombró el feriado como "Día de la Reconciliación" para tender un puente entre estas narrativas históricas opuestas. Sirve como símbolo del compromiso de Sudáfrica con la sanación, la unidad y la construcción de un futuro compartido más allá de las divisiones del apartheid y el colonialismo.',
  },

  traditions: {
    en: [
      'Attending national reconciliation ceremonies and presidential addresses',
      'Participating in interfaith and multicultural dialogue events',
      'Visiting heritage sites such as the Voortrekker Monument or Freedom Park',
      'Community gatherings promoting unity across racial and cultural lines',
      'Reflection on South Africa\'s journey from division to democracy',
      'Volunteer work and community service projects',
    ],
    fr: [
      'Participer aux cérémonies nationales de réconciliation et aux discours présidentiels',
      'Participer à des événements de dialogue interconfessionnel et multiculturel',
      'Visiter des sites patrimoniaux tels que le Monument Voortrekker ou Freedom Park',
      'Rassemblements communautaires promouvant l\'unité au-delà des lignes raciales et culturelles',
      'Réflexion sur le parcours de l\'Afrique du Sud de la division à la démocratie',
      'Travail bénévole et projets de service communautaire',
    ],
    es: [
      'Asistir a ceremonias nacionales de reconciliación y discursos presidenciales',
      'Participar en eventos de diálogo interreligioso y multicultural',
      'Visitar sitios patrimoniales como el Monumento Voortrekker o Freedom Park',
      'Reuniones comunitarias que promueven la unidad más allá de las líneas raciales y culturales',
      'Reflexión sobre el camino de Sudáfrica desde la división hasta la democracia',
      'Trabajo voluntario y proyectos de servicio comunitario',
    ],
  },

  funFacts: {
    en: [
      'The Battle of Blood River in 1838 saw approximately 470 Voortrekkers face an estimated 10,000-15,000 Zulu warriors, with the river reportedly running red with blood.',
      'Umkhonto we Sizwe (meaning "Spear of the Nation") carried out its first acts of sabotage on December 16, 1961, the same date as the Afrikaner holiday.',
      'Freedom Park in Pretoria and the Voortrekker Monument stand on opposite hills, symbolically facing each other — representing reconciliation between opposing historical narratives.',
      'The Day of Reconciliation is one of the few holidays in the world specifically designed to bridge conflicting historical perspectives.',
      'Nelson Mandela deliberately chose December 16, 1961, for the launch of MK to reclaim the date from its Afrikaner nationalist associations.',
    ],
    fr: [
      'La bataille de Blood River en 1838 a vu environ 470 Voortrekkers affronter un nombre estimé de 10 000 à 15 000 guerriers zoulous, la rivière ayant prétendument coulé rouge de sang.',
      'Umkhonto we Sizwe (signifiant « Lance de la Nation ») a mené ses premiers actes de sabotage le 16 décembre 1961, la même date que le jour férié afrikaner.',
      'Freedom Park à Pretoria et le Monument Voortrekker se dressent sur des collines opposées, se faisant symboliquement face — représentant la réconciliation entre des récits historiques opposés.',
      'Le Jour de la réconciliation est l\'un des rares jours fériés au monde spécifiquement conçu pour relier des perspectives historiques contradictoires.',
      'Nelson Mandela a délibérément choisi le 16 décembre 1961 pour le lancement de MK afin de revendiquer cette date face à ses associations nationalistes afrikaners.',
    ],
    es: [
      'La Batalla de Blood River en 1838 vio a aproximadamente 470 Voortrekkers enfrentar a un estimado de 10.000-15.000 guerreros zulúes, y se dice que el río corrió rojo de sangre.',
      'Umkhonto we Sizwe (que significa "Lanza de la Nación") llevó a cabo sus primeros actos de sabotaje el 16 de diciembre de 1961, la misma fecha que el feriado afrikáner.',
      'Freedom Park en Pretoria y el Monumento Voortrekker se encuentran en colinas opuestas, mirándose simbólicamente — representando la reconciliación entre narrativas históricas opuestas.',
      'El Día de la Reconciliación es uno de los pocos feriados en el mundo diseñado específicamente para tender un puente entre perspectivas históricas conflictivas.',
      'Nelson Mandela eligió deliberadamente el 16 de diciembre de 1961 para el lanzamiento de MK con el fin de reclamar la fecha de sus asociaciones nacionalistas afrikáneres.',
    ],
  },

  planningChecklist: {
    en: [
      'Check for local reconciliation events, dialogues, and ceremonies',
      'Plan a visit to Freedom Park or the Voortrekker Monument in Pretoria',
      'Organise a multicultural community gathering or meal',
      'Reflect on South Africa\'s history and the importance of reconciliation',
      'Participate in community service or volunteer projects promoting unity',
    ],
    fr: [
      'Vérifier les événements locaux de réconciliation, dialogues et cérémonies',
      'Planifier une visite à Freedom Park ou au Monument Voortrekker à Pretoria',
      'Organiser un rassemblement communautaire ou un repas multiculturel',
      'Réfléchir à l\'histoire de l\'Afrique du Sud et à l\'importance de la réconciliation',
      'Participer à des projets de service communautaire ou de bénévolat promouvant l\'unité',
    ],
    es: [
      'Consultar los eventos locales de reconciliación, diálogos y ceremonias',
      'Planificar una visita a Freedom Park o al Monumento Voortrekker en Pretoria',
      'Organizar una reunión comunitaria o comida multicultural',
      'Reflexionar sobre la historia de Sudáfrica y la importancia de la reconciliación',
      'Participar en proyectos de servicio comunitario o voluntariado que promuevan la unidad',
    ],
  },

  relatedHolidays: ['za_human-rights-day', 'za_freedom-day', 'za_christmas'],

  seo: {
    en: {
      titleTemplate: 'Day of Reconciliation {year} South Africa — Countdown & Guide',
      descriptionTemplate: 'When is the Day of Reconciliation {year} in South Africa? Live countdown to December 16, history, and guide to this important national holiday.',
      keywords: ['Day of Reconciliation South Africa', 'December 16 South Africa', 'South African reconciliation', 'Day of the Vow', 'Day of Reconciliation countdown'],
    },
    fr: {
      titleTemplate: 'Jour de la réconciliation {year} Afrique du Sud — Compte à rebours et guide',
      descriptionTemplate: 'Quand est le Jour de la réconciliation {year} en Afrique du Sud ? Compte à rebours en direct jusqu\'au 16 décembre, histoire et guide de ce jour férié national important.',
      keywords: ['Jour de la réconciliation Afrique du Sud', '16 décembre Afrique du Sud', 'réconciliation sud-africaine', 'Jour du Vœu', 'Jour de la réconciliation'],
    },
    es: {
      titleTemplate: 'Día de la Reconciliación {year} Sudáfrica — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Día de la Reconciliación {year} en Sudáfrica? Cuenta regresiva en vivo hasta el 16 de diciembre, historia y guía de este importante feriado nacional.',
      keywords: ['Día de la Reconciliación Sudáfrica', '16 de diciembre Sudáfrica', 'reconciliación sudafricana', 'Día del Voto', 'Día de la Reconciliación'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is the Day of Reconciliation {year} in South Africa?',
        fr: 'Quand est le Jour de la réconciliation {year} en Afrique du Sud ?',
        es: '¿Cuándo es el Día de la Reconciliación {year} en Sudáfrica?',
      },
      answer: {
        en: 'The Day of Reconciliation {year} in South Africa is on {date} ({dayOfWeek}). It is always observed on December 16.',
        fr: 'Le Jour de la réconciliation {year} en Afrique du Sud est le {date} ({dayOfWeek}). Il est toujours observé le 16 décembre.',
        es: 'El Día de la Reconciliación {year} en Sudáfrica es el {date} ({dayOfWeek}). Siempre se observa el 16 de diciembre.',
      },
    },
    {
      question: {
        en: 'What was the Day of the Vow?',
        fr: 'Qu\'est-ce que le Jour du Vœu ?',
        es: '¿Qué fue el Día del Voto?',
      },
      answer: {
        en: 'The Day of the Vow (Geloftedag) was the Afrikaner name for December 16, commemorating the 1838 Battle of Blood River. The Voortrekkers reportedly made a vow to God before the battle, promising to honour the day if they were victorious. After 1994, the holiday was renamed the Day of Reconciliation.',
        fr: 'Le Jour du Vœu (Geloftedag) était le nom afrikaner pour le 16 décembre, commémorant la bataille de Blood River en 1838. Les Voortrekkers auraient fait un vœu à Dieu avant la bataille, promettant d\'honorer ce jour s\'ils étaient victorieux. Après 1994, le jour férié a été renommé Jour de la réconciliation.',
        es: 'El Día del Voto (Geloftedag) era el nombre afrikáner para el 16 de diciembre, conmemorando la Batalla de Blood River de 1838. Los Voortrekkers supuestamente hicieron un voto a Dios antes de la batalla, prometiendo honrar el día si salían victoriosos. Después de 1994, el feriado fue renombrado como Día de la Reconciliación.',
      },
    },
    {
      question: {
        en: 'What is Umkhonto we Sizwe?',
        fr: 'Qu\'est-ce qu\'Umkhonto we Sizwe ?',
        es: '¿Qué es Umkhonto we Sizwe?',
      },
      answer: {
        en: 'Umkhonto we Sizwe (MK), meaning "Spear of the Nation," was the armed wing of the African National Congress, co-founded by Nelson Mandela on December 16, 1961. It conducted sabotage operations against the apartheid government and was dissolved after the transition to democracy.',
        fr: 'Umkhonto we Sizwe (MK), signifiant « Lance de la Nation », était la branche armée du Congrès national africain, co-fondée par Nelson Mandela le 16 décembre 1961. Elle a mené des opérations de sabotage contre le gouvernement de l\'apartheid et a été dissoute après la transition vers la démocratie.',
        es: 'Umkhonto we Sizwe (MK), que significa "Lanza de la Nación," fue el brazo armado del Congreso Nacional Africano, cofundado por Nelson Mandela el 16 de diciembre de 1961. Llevó a cabo operaciones de sabotaje contra el gobierno del apartheid y fue disuelto después de la transición a la democracia.',
      },
    },
    {
      question: {
        en: 'Is the Day of Reconciliation a public holiday?',
        fr: 'Le Jour de la réconciliation est-il un jour férié ?',
        es: '¿Es el Día de la Reconciliación un feriado?',
      },
      answer: {
        en: 'Yes, the Day of Reconciliation is an official public holiday in South Africa. If December 16 falls on a Sunday, the following Monday is observed as the public holiday.',
        fr: 'Oui, le Jour de la réconciliation est un jour férié officiel en Afrique du Sud. Si le 16 décembre tombe un dimanche, le lundi suivant est observé comme jour férié.',
        es: 'Sí, el Día de la Reconciliación es un feriado oficial en Sudáfrica. Si el 16 de diciembre cae en domingo, el lunes siguiente se observa como feriado.',
      },
    },
  ],

  colorTheme: 'green-gold',
  icon: '🤝',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmasDay: HolidayData = {
  id: 'za_christmas',
  countryCode: 'za',
  slugs: { en: 'christmas-day', fr: 'jour-de-noel', es: 'dia-de-navidad' },
  names: { en: 'Christmas Day', fr: 'Jour de Noël', es: 'Día de Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: 'Christmas Day on December 25 is one of the most widely celebrated holidays in South Africa. Falling during the Southern Hemisphere summer, South African Christmas is characterised by outdoor celebrations, braais, beach outings, and warm-weather festivities that set it apart from the Northern Hemisphere\'s winter Christmas traditions.',
    fr: 'Le jour de Noël, le 25 décembre, est l\'un des jours fériés les plus largement célébrés en Afrique du Sud. Tombant pendant l\'été de l\'hémisphère sud, le Noël sud-africain se caractérise par des célébrations en plein air, des braais, des sorties à la plage et des festivités par temps chaud qui le distinguent des traditions de Noël hivernal de l\'hémisphère nord.',
    es: 'El Día de Navidad, el 25 de diciembre, es uno de los feriados más ampliamente celebrados en Sudáfrica. Al caer durante el verano del hemisferio sur, la Navidad sudafricana se caracteriza por celebraciones al aire libre, braais, salidas a la playa y festividades de clima cálido que la distinguen de las tradiciones navideñas invernales del hemisferio norte.',
  },

  history: {
    en: 'Christmas was introduced to South Africa by European settlers, with the Dutch and British colonial traditions blending over centuries with indigenous African customs. In the Cape Colony, Christmas celebrations began in the 17th century with the arrival of Dutch settlers.\n\nDuring the apartheid era, Christmas was celebrated differently across racial lines, with many Black South Africans unable to fully participate due to economic hardship and restrictive laws. The post-apartheid era has seen Christmas evolve into a more inclusive celebration that embraces the country\'s multicultural character.\n\nToday, South African Christmas is a unique blend of European traditions adapted to the summer climate. While Christmas trees, gift-giving, and carols remain popular, the emphasis on outdoor activities — particularly the braai and beach outings — gives South African Christmas its distinctive character.',
    fr: 'Noël a été introduit en Afrique du Sud par les colons européens, les traditions coloniales néerlandaises et britanniques se mêlant au fil des siècles aux coutumes africaines autochtones. Dans la colonie du Cap, les célébrations de Noël ont commencé au XVIIe siècle avec l\'arrivée des colons néerlandais.\n\nPendant l\'ère de l\'apartheid, Noël était célébré différemment selon les lignes raciales, de nombreux Sud-Africains noirs ne pouvant pas pleinement participer en raison de difficultés économiques et de lois restrictives. L\'ère post-apartheid a vu Noël évoluer vers une célébration plus inclusive qui embrasse le caractère multiculturel du pays.\n\nAujourd\'hui, le Noël sud-africain est un mélange unique de traditions européennes adaptées au climat estival. Bien que les sapins de Noël, les cadeaux et les chants restent populaires, l\'accent mis sur les activités de plein air — en particulier le braai et les sorties à la plage — confère au Noël sud-africain son caractère distinctif.',
    es: 'La Navidad fue introducida en Sudáfrica por los colonos europeos, con las tradiciones coloniales holandesas y británicas mezclándose a lo largo de los siglos con las costumbres africanas indígenas. En la Colonia del Cabo, las celebraciones navideñas comenzaron en el siglo XVII con la llegada de los colonos holandeses.\n\nDurante la era del apartheid, la Navidad se celebraba de manera diferente según las líneas raciales, con muchos sudafricanos negros incapaces de participar plenamente debido a dificultades económicas y leyes restrictivas. La era post-apartheid ha visto la Navidad evolucionar hacia una celebración más inclusiva que abraza el carácter multicultural del país.\n\nHoy, la Navidad sudafricana es una mezcla única de tradiciones europeas adaptadas al clima veraniego. Si bien los árboles de Navidad, los regalos y los villancicos siguen siendo populares, el énfasis en las actividades al aire libre — particularmente el braai y las salidas a la playa — le da a la Navidad sudafricana su carácter distintivo.',
  },

  traditions: {
    en: [
      'Hosting a Christmas braai with family and friends in the summer sunshine',
      'Spending Christmas Day at the beach or pool',
      'Decorating with Christmas trees, lights, and indigenous flowers like proteas',
      'Exchanging gifts on Christmas morning',
      'Attending Christmas church services',
      'Preparing a Christmas feast featuring roast meats, malva pudding, and trifle',
      'Singing Christmas carols, including Afrikaans and indigenous language versions',
    ],
    fr: [
      'Organiser un braai de Noël avec famille et amis sous le soleil d\'été',
      'Passer le jour de Noël à la plage ou à la piscine',
      'Décorer avec des sapins de Noël, des lumières et des fleurs indigènes comme les protéas',
      'Échanger des cadeaux le matin de Noël',
      'Assister aux services religieux de Noël',
      'Préparer un festin de Noël avec des viandes rôties, du malva pudding et du trifle',
      'Chanter des chants de Noël, y compris des versions en afrikaans et en langues autochtones',
    ],
    es: [
      'Organizar un braai navideño con familia y amigos bajo el sol de verano',
      'Pasar el día de Navidad en la playa o la piscina',
      'Decorar con árboles de Navidad, luces y flores autóctonas como las proteas',
      'Intercambiar regalos en la mañana de Navidad',
      'Asistir a servicios religiosos navideños',
      'Preparar un festín navideño con carnes asadas, malva pudding y trifle',
      'Cantar villancicos, incluyendo versiones en afrikáans y lenguas indígenas',
    ],
  },

  funFacts: {
    en: [
      'Christmas in South Africa falls during summer, with temperatures often reaching 30°C (86°F) or higher in many parts of the country.',
      'South Africans often substitute the traditional Northern Hemisphere roast dinner with a braai, featuring boerewors, steak, and lamb chops.',
      'The protea, South Africa\'s national flower, is commonly used as a Christmas decoration alongside traditional European ornaments.',
      'In Cape Town, thousands of people spend Christmas Day at the beach, creating a uniquely South African festive atmosphere.',
      'Malva pudding, a sweet and spongy apricot dessert, is a beloved South African Christmas dessert.',
    ],
    fr: [
      'Noël en Afrique du Sud tombe pendant l\'été, avec des températures atteignant souvent 30°C ou plus dans de nombreuses régions du pays.',
      'Les Sud-Africains remplacent souvent le rôti traditionnel de l\'hémisphère nord par un braai, avec du boerewors, du steak et des côtelettes d\'agneau.',
      'La protéa, fleur nationale de l\'Afrique du Sud, est couramment utilisée comme décoration de Noël aux côtés des ornements européens traditionnels.',
      'Au Cap, des milliers de personnes passent le jour de Noël à la plage, créant une atmosphère festive typiquement sud-africaine.',
      'Le malva pudding, un dessert sucré et spongieux à l\'abricot, est un dessert de Noël sud-africain très apprécié.',
    ],
    es: [
      'La Navidad en Sudáfrica cae durante el verano, con temperaturas que a menudo alcanzan los 30°C o más en muchas partes del país.',
      'Los sudafricanos a menudo sustituyen la cena asada tradicional del hemisferio norte con un braai, con boerewors, bistec y chuletas de cordero.',
      'La protea, la flor nacional de Sudáfrica, se usa comúnmente como decoración navideña junto con los adornos europeos tradicionales.',
      'En Ciudad del Cabo, miles de personas pasan el día de Navidad en la playa, creando un ambiente festivo típicamente sudafricano.',
      'El malva pudding, un postre dulce y esponjoso de albaricoque, es un querido postre navideño sudafricano.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan your Christmas braai menu and stock up on meat, boerewors, and sides',
      'Book beach or holiday accommodation early — December is peak season',
      'Buy gifts and decorations, including South African touches like protea arrangements',
      'Plan outdoor activities suitable for the summer weather',
      'Prepare traditional South African desserts like malva pudding or peppermint tart',
    ],
    fr: [
      'Planifier votre menu de braai de Noël et vous procurer de la viande, du boerewors et des accompagnements',
      'Réserver un hébergement de vacances ou à la plage tôt — décembre est la haute saison',
      'Acheter des cadeaux et décorations, y compris des touches sud-africaines comme des arrangements de protéas',
      'Planifier des activités en plein air adaptées au temps estival',
      'Préparer des desserts traditionnels sud-africains comme le malva pudding ou la tarte à la menthe poivrée',
    ],
    es: [
      'Planificar tu menú de braai navideño y abastecerte de carne, boerewors y acompañamientos',
      'Reservar alojamiento de playa o vacaciones con anticipación — diciembre es temporada alta',
      'Comprar regalos y decoraciones, incluyendo toques sudafricanos como arreglos de proteas',
      'Planificar actividades al aire libre adecuadas para el clima veraniego',
      'Preparar postres tradicionales sudafricanos como malva pudding o tarta de menta',
    ],
  },

  relatedHolidays: ['za_heritage-day', 'za_day-of-reconciliation'],

  seo: {
    en: {
      titleTemplate: 'Christmas Day {year} South Africa — Countdown & Guide',
      descriptionTemplate: 'When is Christmas {year} in South Africa? Live countdown to December 25, summer Christmas traditions, braai ideas, and celebration guide.',
      keywords: ['Christmas South Africa', 'South African Christmas', 'summer Christmas', 'Christmas braai', 'Christmas Day countdown'],
    },
    fr: {
      titleTemplate: 'Jour de Noël {year} Afrique du Sud — Compte à rebours et guide',
      descriptionTemplate: 'Quand est Noël {year} en Afrique du Sud ? Compte à rebours en direct jusqu\'au 25 décembre, traditions de Noël d\'été, idées de braai et guide de célébration.',
      keywords: ['Noël Afrique du Sud', 'Noël sud-africain', 'Noël en été', 'braai de Noël', 'Jour de Noël'],
    },
    es: {
      titleTemplate: 'Día de Navidad {year} Sudáfrica — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es Navidad {year} en Sudáfrica? Cuenta regresiva en vivo hasta el 25 de diciembre, tradiciones navideñas de verano, ideas de braai y guía de celebración.',
      keywords: ['Navidad Sudáfrica', 'Navidad sudafricana', 'Navidad en verano', 'braai navideño', 'Día de Navidad'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Christmas Day {year} in South Africa?',
        fr: 'Quand est le jour de Noël {year} en Afrique du Sud ?',
        es: '¿Cuándo es el Día de Navidad {year} en Sudáfrica?',
      },
      answer: {
        en: 'Christmas Day {year} in South Africa is on {date} ({dayOfWeek}). It is always observed on December 25.',
        fr: 'Le jour de Noël {year} en Afrique du Sud est le {date} ({dayOfWeek}). Il est toujours observé le 25 décembre.',
        es: 'El Día de Navidad {year} en Sudáfrica es el {date} ({dayOfWeek}). Siempre se observa el 25 de diciembre.',
      },
    },
    {
      question: {
        en: 'What is a South African Christmas like?',
        fr: 'À quoi ressemble un Noël sud-africain ?',
        es: '¿Cómo es una Navidad sudafricana?',
      },
      answer: {
        en: 'South African Christmas is a summer celebration. Families typically gather for a braai, go to the beach, or enjoy outdoor activities in the warm weather. While Christmas trees and gift-giving are popular, the festive atmosphere is distinctly different from the Northern Hemisphere\'s winter traditions.',
        fr: 'Le Noël sud-africain est une célébration estivale. Les familles se réunissent généralement pour un braai, vont à la plage ou profitent d\'activités en plein air par temps chaud. Bien que les sapins de Noël et les cadeaux soient populaires, l\'atmosphère festive est nettement différente des traditions hivernales de l\'hémisphère nord.',
        es: 'La Navidad sudafricana es una celebración de verano. Las familias típicamente se reúnen para un braai, van a la playa o disfrutan de actividades al aire libre en el clima cálido. Si bien los árboles de Navidad y los regalos son populares, el ambiente festivo es claramente diferente de las tradiciones invernales del hemisferio norte.',
      },
    },
    {
      question: {
        en: 'What do South Africans eat on Christmas Day?',
        fr: 'Que mangent les Sud-Africains le jour de Noël ?',
        es: '¿Qué comen los sudafricanos el Día de Navidad?',
      },
      answer: {
        en: 'South Africans enjoy a variety of festive foods including braai meats (boerewors, steak, lamb chops), roast chicken or turkey, yellow rice, green bean salad, and desserts like malva pudding, peppermint tart, and trifle.',
        fr: 'Les Sud-Africains dégustent une variété de plats festifs, notamment des viandes au braai (boerewors, steak, côtelettes d\'agneau), du poulet ou de la dinde rôtis, du riz jaune, de la salade de haricots verts et des desserts comme le malva pudding, la tarte à la menthe poivrée et le trifle.',
        es: 'Los sudafricanos disfrutan de una variedad de comidas festivas que incluyen carnes al braai (boerewors, bistec, chuletas de cordero), pollo o pavo asado, arroz amarillo, ensalada de judías verdes y postres como malva pudding, tarta de menta y trifle.',
      },
    },
    {
      question: {
        en: 'Is Christmas Day a public holiday in South Africa?',
        fr: 'Le jour de Noël est-il un jour férié en Afrique du Sud ?',
        es: '¿Es el Día de Navidad un feriado en Sudáfrica?',
      },
      answer: {
        en: 'Yes, Christmas Day is an official public holiday in South Africa. If December 25 falls on a Sunday, the following Monday is observed as the public holiday.',
        fr: 'Oui, le jour de Noël est un jour férié officiel en Afrique du Sud. Si le 25 décembre tombe un dimanche, le lundi suivant est observé comme jour férié.',
        es: 'Sí, el Día de Navidad es un feriado oficial en Sudáfrica. Si el 25 de diciembre cae en domingo, el lunes siguiente se observa como feriado.',
      },
    },
  ],

  colorTheme: 'red-green',
  icon: '🎄',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const zaHolidays: HolidayData[] = [
  humanRightsDay,
  freedomDay,
  youthDay,
  heritageDay,
  dayOfReconciliation,
  christmasDay,
];

export default zaHolidays;
