/**
 * Cameroon holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getEidAlFitrDate } from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'cm_new-years-day',
  countryCode: 'cm',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'ano-nuevo' },
  names: { en: "New Year's Day", fr: "Jour de l'An", es: 'Dia de Ano Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 marks the start of the calendar year in Cameroon. It is a public holiday celebrated with family gatherings, festive meals, church services, and outdoor celebrations in Douala, Yaounde, and across the country.",
    fr: "Le Jour de l'An, le 1er janvier, marque le debut de l'annee civile au Cameroun. C'est un jour ferie celebre par des reunions familiales, des repas festifs, des services religieux et des celebrations en plein air a Douala, Yaounde et a travers le pays.",
    es: "El Dia de Ano Nuevo, el 1 de enero, marca el inicio del ano calendario en Camerun. Es un dia festivo celebrado con reuniones familiares, comidas festivas, servicios religiosos y celebraciones al aire libre en Douala, Yaounde y en todo el pais.",
  },

  history: {
    en: "New Year's Day has been observed as a public holiday in Cameroon since independence. The celebrations reflect Cameroon's remarkable cultural diversity, with over 250 ethnic groups and two official languages — French and English — earning it the nickname 'Africa in miniature.'\n\nCameroonians typically attend church services or mosque prayers before gathering with family. In major cities like Douala and Yaounde, the night of December 31 features concerts, fireworks, and vibrant nightlife.\n\nThe holiday is an occasion for Cameroonians to come together regardless of their linguistic, ethnic, or religious background, celebrating national unity and hope for the year ahead.",
    fr: "Le Jour de l'An est observe comme jour ferie au Cameroun depuis l'independance. Les celebrations refletent la remarquable diversite culturelle du Cameroun, avec plus de 250 groupes ethniques et deux langues officielles — le francais et l'anglais — lui valant le surnom d'\"Afrique en miniature\".\n\nLes Camerounais assistent generalement a des services religieux ou des prieres a la mosquee avant de se reunir en famille. Dans les grandes villes comme Douala et Yaounde, la nuit du 31 decembre est marquee par des concerts, des feux d'artifice et une vie nocturne animee.\n\nCette fete est l'occasion pour les Camerounais de se rassembler quel que soit leur milieu linguistique, ethnique ou religieux, celebrant l'unite nationale et l'espoir pour l'annee a venir.",
    es: "El Dia de Ano Nuevo se ha observado como dia festivo en Camerun desde la independencia. Las celebraciones reflejan la notable diversidad cultural de Camerun, con mas de 250 grupos etnicos y dos idiomas oficiales — frances e ingles — lo que le vale el apodo de 'Africa en miniatura'.\n\nLos cameruneses suelen asistir a servicios religiosos o rezos en la mezquita antes de reunirse con la familia. En las principales ciudades como Douala y Yaounde, la noche del 31 de diciembre presenta conciertos, fuegos artificiales y una vibrante vida nocturna.\n\nLa festividad es una ocasion para que los cameruneses se reunan sin importar su origen linguistico, etnico o religioso, celebrando la unidad nacional y la esperanza para el ano venidero.",
  },

  traditions: {
    en: [
      'Attending church services and mosque prayers on New Year\'s morning',
      'Gathering with extended family for festive meals',
      'Preparing traditional dishes like ndole, eru, and grilled fish',
      'Attending outdoor concerts and parties on New Year\'s Eve',
      'Children receiving new clothes and small gifts',
      'Exchanging New Year greetings in French and English',
    ],
    fr: [
      "Assister aux services religieux et aux prieres a la mosquee le matin du Nouvel An",
      'Se reunir en famille elargie pour des repas festifs',
      'Preparer des plats traditionnels comme le ndole, l\'eru et le poisson grille',
      'Assister a des concerts et des fetes en plein air le soir du Nouvel An',
      'Les enfants recoivent de nouveaux vetements et de petits cadeaux',
      'Echanger des voeux de Nouvel An en francais et en anglais',
    ],
    es: [
      'Asistir a servicios religiosos y rezos en la mezquita la manana de Ano Nuevo',
      'Reunirse con la familia extendida para comidas festivas',
      'Preparar platos tradicionales como ndole, eru y pescado a la parrilla',
      'Asistir a conciertos y fiestas al aire libre en Nochevieja',
      'Los ninos reciben ropa nueva y pequenos regalos',
      'Intercambiar saludos de Ano Nuevo en frances e ingles',
    ],
  },

  funFacts: {
    en: [
      'Cameroon is called "Africa in miniature" because it features nearly every type of African landscape and climate.',
      'Cameroon has two official languages — French and English — a legacy of its colonial history under France and Britain.',
      'Ndole, a stew made with bitter leaves and peanuts, is considered the national dish of Cameroon.',
      'Douala and Yaounde host some of the most vibrant New Year celebrations in Central Africa.',
      'Cameroon has over 250 ethnic groups, making it one of the most culturally diverse countries in Africa.',
    ],
    fr: [
      "Le Cameroun est appele \"Afrique en miniature\" car il presente presque tous les types de paysages et de climats africains.",
      "Le Cameroun a deux langues officielles — le francais et l'anglais — un heritage de son histoire coloniale sous la France et la Grande-Bretagne.",
      'Le ndole, un ragout fait de feuilles ameres et d\'arachides, est considere comme le plat national du Cameroun.',
      "Douala et Yaounde accueillent certaines des celebrations du Nouvel An les plus animees d'Afrique centrale.",
      "Le Cameroun compte plus de 250 groupes ethniques, ce qui en fait l'un des pays les plus diversifies culturellement en Afrique.",
    ],
    es: [
      'Camerun se llama "Africa en miniatura" porque presenta casi todos los tipos de paisajes y climas africanos.',
      'Camerun tiene dos idiomas oficiales — frances e ingles — un legado de su historia colonial bajo Francia y Gran Bretana.',
      'El ndole, un guiso hecho con hojas amargas y cacahuetes, se considera el plato nacional de Camerun.',
      'Douala y Yaounde albergan algunas de las celebraciones de Ano Nuevo mas vibrantes de Africa Central.',
      'Camerun tiene mas de 250 grupos etnicos, lo que lo convierte en uno de los paises mas culturalmente diversos de Africa.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan family gatherings and confirm guest lists in advance',
      'Purchase ingredients for traditional Cameroonian dishes',
      'Check local event listings for concerts in Douala and Yaounde',
      'Buy new clothes for the family',
      'Arrange transportation for family visits',
    ],
    fr: [
      "Planifier les reunions familiales et confirmer les listes d'invites a l'avance",
      'Acheter les ingredients pour les plats traditionnels camerounais',
      'Consulter les programmes locaux pour les concerts a Douala et Yaounde',
      'Acheter de nouveaux vetements pour la famille',
      'Organiser le transport pour les visites familiales',
    ],
    es: [
      'Planificar reuniones familiares y confirmar listas de invitados con anticipacion',
      'Comprar ingredientes para platos tradicionales cameruneses',
      'Consultar los programas locales de conciertos en Douala y Yaounde',
      'Comprar ropa nueva para la familia',
      'Organizar transporte para visitas familiares',
    ],
  },

  relatedHolidays: ['cm_christmas', 'cm_national-day'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Cameroon — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in Cameroon? Live countdown to January 1, holiday info, and celebration guide.",
      keywords: ["New Year's Day Cameroon", 'Cameroon public holidays', "Jour de l'An Cameroun", "New Year's Yaounde", 'Cameroon holidays'],
    },
    fr: {
      titleTemplate: "Jour de l'An {year} Cameroun — Compte a rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'An {year} au Cameroun ? Compte a rebours, informations et guide de celebration.",
      keywords: ["Jour de l'An Cameroun", 'jours feries Cameroun', 'Nouvel An Yaounde', 'fetes camerounaises', 'Cameroun ferie'],
    },
    es: {
      titleTemplate: 'Dia de Ano Nuevo {year} Camerun — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Dia de Ano Nuevo {year} en Camerun? Cuenta regresiva, informacion y guia de celebracion.',
      keywords: ['Ano Nuevo Camerun', 'dias festivos Camerun', 'feriados Camerun', 'Ano Nuevo Yaounde', 'fiestas camerunesas'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in Cameroon?", fr: "Quand est le Jour de l'An {year} au Cameroun ?", es: 'Cuando es el Dia de Ano Nuevo {year} en Camerun?' },
      answer: {
        en: "New Year's Day {year} in Cameroon is on {date}. It is always January 1 and is a national public holiday.",
        fr: "Le Jour de l'An {year} au Cameroun est le {date}. C'est toujours le 1er janvier et c'est un jour ferie national.",
        es: 'El Dia de Ano Nuevo {year} en Camerun es el {date}. Siempre es el 1 de enero y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'Why is Cameroon called "Africa in miniature"?', fr: 'Pourquoi le Cameroun est-il appele "Afrique en miniature" ?', es: 'Por que Camerun se llama "Africa en miniatura"?' },
      answer: {
        en: 'Cameroon features nearly every type of African landscape — from tropical rainforests and beaches to savannas, deserts, and mountains. With over 250 ethnic groups and two official languages, it encapsulates the diversity of the entire continent.',
        fr: "Le Cameroun presente presque tous les types de paysages africains — des forets tropicales et plages aux savanes, deserts et montagnes. Avec plus de 250 groupes ethniques et deux langues officielles, il resume la diversite de tout le continent.",
        es: 'Camerun presenta casi todos los tipos de paisajes africanos — desde selvas tropicales y playas hasta sabanas, desiertos y montanas. Con mas de 250 grupos etnicos y dos idiomas oficiales, encapsula la diversidad de todo el continente.',
      },
    },
    {
      question: { en: 'What is ndole?', fr: "Qu'est-ce que le ndole ?", es: 'Que es el ndole?' },
      answer: {
        en: "Ndole is considered Cameroon's national dish. It is a rich stew made from bitter leaves (ndoleh) cooked with peanuts, often accompanied by shrimp, beef, or fish, served with plantains or bobolo (cassava sticks).",
        fr: "Le ndole est considere comme le plat national du Cameroun. C'est un ragout riche fait de feuilles ameres (ndoleh) cuisinees avec des arachides, souvent accompagne de crevettes, de boeuf ou de poisson, servi avec des plantains ou du bobolo (batons de manioc).",
        es: 'El ndole se considera el plato nacional de Camerun. Es un guiso rico hecho de hojas amargas (ndoleh) cocinadas con cacahuetes, a menudo acompanado de camarones, carne o pescado, servido con platanos o bobolo (barras de yuca).',
      },
    },
    {
      question: { en: "Is New Year's Day a public holiday in Cameroon?", fr: "Le Jour de l'An est-il un jour ferie au Cameroun ?", es: 'Es el Dia de Ano Nuevo un dia festivo en Camerun?' },
      answer: {
        en: "Yes, New Year's Day is an official public holiday in Cameroon. Government offices, banks, and most businesses are closed.",
        fr: "Oui, le Jour de l'An est un jour ferie officiel au Cameroun. Les bureaux gouvernementaux, les banques et la plupart des commerces sont fermes.",
        es: 'Si, el Dia de Ano Nuevo es un dia festivo oficial en Camerun. Las oficinas gubernamentales, bancos y la mayoria de los negocios estan cerrados.',
      },
    },
  ],

  colorTheme: 'new-year',
  icon: '🎆',
};

// ---------------------------------------------------------------------------
// Youth Day — February 11
// ---------------------------------------------------------------------------

const youthDay: HolidayData = {
  id: 'cm_youth-day',
  countryCode: 'cm',
  slugs: { en: 'youth-day', fr: 'fete-de-la-jeunesse', es: 'dia-de-la-juventud' },
  names: { en: 'Youth Day', fr: 'Fete de la Jeunesse', es: 'Dia de la Juventud' },

  dateType: 'fixed',
  fixedMonth: 2,
  fixedDay: 11,

  descriptions: {
    en: "Youth Day on February 11 celebrates Cameroon's young people and their vital role in the nation's future. Known as Fete de la Jeunesse, it features colourful school parades, cultural performances, and official ceremonies honouring the youth.",
    fr: "La Fete de la Jeunesse, le 11 fevrier, celebre les jeunes Camerounais et leur role essentiel dans l'avenir de la nation. Elle est marquee par des defiles scolaires colores, des spectacles culturels et des ceremonies officielles honorant la jeunesse.",
    es: "El Dia de la Juventud, el 11 de febrero, celebra a los jovenes cameruneses y su papel vital en el futuro de la nacion. Conocido como Fete de la Jeunesse, presenta coloridos desfiles escolares, espectaculos culturales y ceremonias oficiales en honor a la juventud.",
  },

  history: {
    en: "Youth Day was established to commemorate the February 11, 1961 plebiscite in which the people of the former British Southern Cameroons voted to reunify with the French-speaking Republic of Cameroon. The holiday honours the role of young people in shaping the nation's destiny.\n\nThe plebiscite was a pivotal moment in Cameroonian history, as it brought together two territories that had been separated by colonial rule. The reunification created the Federal Republic of Cameroon, later becoming the United Republic of Cameroon in 1972.\n\nToday, Youth Day is one of the most vibrant holidays in Cameroon, with elaborate parades by schoolchildren in their uniforms, cultural displays, and presidential messages encouraging the country's youth. The celebration highlights education, national unity, and the aspirations of the younger generation.",
    fr: "La Fete de la Jeunesse a ete etablie pour commemorer le plebiscite du 11 fevrier 1961, au cours duquel les habitants de l'ancien Cameroun meridional britannique ont vote pour se reunifier avec la Republique francophone du Cameroun. Cette fete honore le role des jeunes dans la construction du destin de la nation.\n\nLe plebiscite a ete un moment crucial de l'histoire camerounaise, car il a reuni deux territoires separes par la domination coloniale. La reunification a cree la Republique federale du Cameroun, devenue plus tard la Republique unie du Cameroun en 1972.\n\nAujourd'hui, la Fete de la Jeunesse est l'une des fetes les plus animees du Cameroun, avec des defiles elabores d'ecoliers en uniformes, des demonstrations culturelles et des messages presidentiels encourageant la jeunesse du pays. La celebration met en avant l'education, l'unite nationale et les aspirations de la jeune generation.",
    es: "El Dia de la Juventud fue establecido para conmemorar el plebiscito del 11 de febrero de 1961, en el que los habitantes del antiguo Camerun Meridional Britanico votaron por reunificarse con la Republica francofona de Camerun. La festividad honra el papel de los jovenes en la construccion del destino de la nacion.\n\nEl plebiscito fue un momento crucial en la historia camerunesa, ya que reunio dos territorios que habian sido separados por el dominio colonial. La reunificacion creo la Republica Federal de Camerun, que luego se convirtio en la Republica Unida de Camerun en 1972.\n\nHoy, el Dia de la Juventud es una de las festividades mas vibrantes de Camerun, con elaborados desfiles de escolares en sus uniformes, exhibiciones culturales y mensajes presidenciales alentando a la juventud del pais. La celebracion destaca la educacion, la unidad nacional y las aspiraciones de la generacion mas joven.",
  },

  traditions: {
    en: [
      'School parades through city streets with students in colourful uniforms',
      'Cultural performances including traditional dance and music',
      'Official ceremonies with presidential addresses to the youth',
      'Sports competitions and academic awards',
      'Community celebrations honouring outstanding young Cameroonians',
      'Traditional dress displays from various ethnic groups',
      'Marching bands and musical performances by school groups',
    ],
    fr: [
      'Defiles scolaires dans les rues des villes avec des eleves en uniformes colores',
      'Spectacles culturels incluant danse et musique traditionnelles',
      'Ceremonies officielles avec des discours presidentiels a la jeunesse',
      'Competitions sportives et remises de prix academiques',
      'Celebrations communautaires honorant les jeunes Camerounais meritants',
      'Presentations de costumes traditionnels de divers groupes ethniques',
      'Fanfares et spectacles musicaux par des groupes scolaires',
    ],
    es: [
      'Desfiles escolares por las calles de las ciudades con estudiantes en uniformes coloridos',
      'Espectaculos culturales incluyendo danza y musica tradicionales',
      'Ceremonias oficiales con discursos presidenciales a la juventud',
      'Competiciones deportivas y premios academicos',
      'Celebraciones comunitarias honrando a jovenes cameruneses destacados',
      'Exhibiciones de vestimenta tradicional de diversos grupos etnicos',
      'Bandas de marcha y espectaculos musicales de grupos escolares',
    ],
  },

  funFacts: {
    en: [
      'Youth Day parades in Cameroon are among the most elaborate school marching events in Africa.',
      'Over 60% of Cameroon\'s population is under the age of 25, making Youth Day especially relevant.',
      'The February 11 plebiscite offered two choices: joining Nigeria or reunifying with French-speaking Cameroon. The vote chose reunification.',
      'Youth Day celebrations often feature traditional dance styles from all 10 regions of Cameroon.',
      'Schools compete for the best parade performance, with awards given for discipline, uniforms, and creativity.',
    ],
    fr: [
      "Les defiles de la Fete de la Jeunesse au Cameroun comptent parmi les evenements de marche scolaire les plus elabores d'Afrique.",
      "Plus de 60% de la population camerounaise a moins de 25 ans, ce qui rend la Fete de la Jeunesse particulierement pertinente.",
      "Le plebiscite du 11 fevrier offrait deux choix : rejoindre le Nigeria ou se reunifier avec le Cameroun francophone. Le vote a choisi la reunification.",
      'Les celebrations de la Fete de la Jeunesse presentent souvent des styles de danse traditionnelle des 10 regions du Cameroun.',
      'Les ecoles rivalisent pour la meilleure prestation de defile, avec des prix decernes pour la discipline, les uniformes et la creativite.',
    ],
    es: [
      'Los desfiles del Dia de la Juventud en Camerun estan entre los eventos de marcha escolar mas elaborados de Africa.',
      'Mas del 60% de la poblacion de Camerun tiene menos de 25 anos, lo que hace el Dia de la Juventud especialmente relevante.',
      'El plebiscito del 11 de febrero ofrecia dos opciones: unirse a Nigeria o reunificarse con el Camerun francofono. El voto eligio la reunificacion.',
      'Las celebraciones del Dia de la Juventud a menudo presentan estilos de danza tradicional de las 10 regiones de Camerun.',
      'Las escuelas compiten por la mejor actuacion de desfile, con premios otorgados por disciplina, uniformes y creatividad.',
    ],
  },

  planningChecklist: {
    en: [
      'Prepare school uniforms and ensure they are in excellent condition for the parade',
      'Check parade routes and timing in your city',
      'Attend cultural performances and youth celebrations',
      'Encourage children to participate in sports and academic competitions',
      'Learn about the 1961 plebiscite and reunification history',
    ],
    fr: [
      'Preparer les uniformes scolaires et s\'assurer qu\'ils sont en excellent etat pour le defile',
      'Verifier les itineraires et les horaires des defiles dans votre ville',
      'Assister aux spectacles culturels et aux celebrations de la jeunesse',
      'Encourager les enfants a participer aux competitions sportives et academiques',
      "S'informer sur le plebiscite de 1961 et l'histoire de la reunification",
    ],
    es: [
      'Preparar los uniformes escolares y asegurar que esten en excelente condicion para el desfile',
      'Verificar las rutas y horarios de los desfiles en su ciudad',
      'Asistir a espectaculos culturales y celebraciones de la juventud',
      'Animar a los ninos a participar en competiciones deportivas y academicas',
      'Aprender sobre el plebiscito de 1961 y la historia de la reunificacion',
    ],
  },

  relatedHolidays: ['cm_national-day', 'cm_new-years-day'],

  seo: {
    en: {
      titleTemplate: 'Youth Day {year} Cameroon — Countdown & Guide',
      descriptionTemplate: 'When is Youth Day {year} in Cameroon? Live countdown to February 11, Fete de la Jeunesse history, parades, and celebration guide.',
      keywords: ['Youth Day Cameroon', 'Fete de la Jeunesse Cameroun', 'February 11 Cameroon', 'Cameroon school parades', 'Cameroon holidays'],
    },
    fr: {
      titleTemplate: 'Fete de la Jeunesse {year} Cameroun — Compte a rebours et guide',
      descriptionTemplate: 'Quand est la Fete de la Jeunesse {year} au Cameroun ? Compte a rebours, histoire, defiles et guide de celebration.',
      keywords: ['Fete de la Jeunesse Cameroun', '11 fevrier Cameroun', 'defiles scolaires Cameroun', 'jeunesse Cameroun', 'jours feries Cameroun'],
    },
    es: {
      titleTemplate: 'Dia de la Juventud {year} Camerun — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Dia de la Juventud {year} en Camerun? Cuenta regresiva, historia, desfiles y guia de celebracion.',
      keywords: ['Dia de la Juventud Camerun', '11 de febrero Camerun', 'desfiles escolares Camerun', 'juventud Camerun', 'dias festivos Camerun'],
    },
  },

  faq: [
    {
      question: { en: 'When is Youth Day {year} in Cameroon?', fr: 'Quand est la Fete de la Jeunesse {year} au Cameroun ?', es: 'Cuando es el Dia de la Juventud {year} en Camerun?' },
      answer: {
        en: 'Youth Day {year} in Cameroon is on {date}. It is always February 11 and is a national public holiday.',
        fr: "La Fete de la Jeunesse {year} au Cameroun est le {date}. C'est toujours le 11 fevrier et c'est un jour ferie national.",
        es: 'El Dia de la Juventud {year} en Camerun es el {date}. Siempre es el 11 de febrero y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'Why is February 11 Youth Day in Cameroon?', fr: 'Pourquoi le 11 fevrier est-il la Fete de la Jeunesse au Cameroun ?', es: 'Por que el 11 de febrero es el Dia de la Juventud en Camerun?' },
      answer: {
        en: 'February 11 commemorates the 1961 plebiscite in which British Southern Cameroons voted to reunify with the Republic of Cameroon. The day was designated as Youth Day to honour young people\'s role in building the united nation.',
        fr: "Le 11 fevrier commemore le plebiscite de 1961 au cours duquel le Cameroun meridional britannique a vote pour se reunifier avec la Republique du Cameroun. Cette journee a ete designee Fete de la Jeunesse pour honorer le role des jeunes dans la construction de la nation unie.",
        es: 'El 11 de febrero conmemora el plebiscito de 1961 en el que el Camerun Meridional Britanico voto por reunificarse con la Republica de Camerun. El dia fue designado como Dia de la Juventud para honrar el papel de los jovenes en la construccion de la nacion unida.',
      },
    },
    {
      question: { en: 'What happens during Youth Day parades?', fr: 'Que se passe-t-il pendant les defiles de la Fete de la Jeunesse ?', es: 'Que sucede durante los desfiles del Dia de la Juventud?' },
      answer: {
        en: 'Schools across Cameroon organise elaborate parades where students march in uniform through city streets. The parades feature marching bands, traditional dance performances, and cultural displays representing the country\'s diverse ethnic groups.',
        fr: "Les ecoles a travers le Cameroun organisent des defiles elabores ou les eleves marchent en uniforme dans les rues des villes. Les defiles comprennent des fanfares, des spectacles de danse traditionnelle et des presentations culturelles representant les divers groupes ethniques du pays.",
        es: 'Las escuelas de todo Camerun organizan elaborados desfiles donde los estudiantes marchan en uniforme por las calles de las ciudades. Los desfiles incluyen bandas de marcha, espectaculos de danza tradicional y exhibiciones culturales que representan los diversos grupos etnicos del pais.',
      },
    },
    {
      question: { en: 'Is Youth Day a public holiday in Cameroon?', fr: 'La Fete de la Jeunesse est-elle un jour ferie au Cameroun ?', es: 'Es el Dia de la Juventud un dia festivo en Camerun?' },
      answer: {
        en: 'Yes, Youth Day on February 11 is an official public holiday in Cameroon. Schools participate in parades rather than regular classes, and many businesses are closed.',
        fr: "Oui, la Fete de la Jeunesse le 11 fevrier est un jour ferie officiel au Cameroun. Les ecoles participent a des defiles au lieu des cours reguliers, et de nombreuses entreprises sont fermees.",
        es: 'Si, el Dia de la Juventud el 11 de febrero es un dia festivo oficial en Camerun. Las escuelas participan en desfiles en lugar de clases regulares, y muchos negocios estan cerrados.',
      },
    },
  ],

  colorTheme: 'spring',
  icon: '🎓',
};

// ---------------------------------------------------------------------------
// Labour Day — May 1
// ---------------------------------------------------------------------------

const labourDay: HolidayData = {
  id: 'cm_labour-day',
  countryCode: 'cm',
  slugs: { en: 'labour-day', fr: 'fete-du-travail', es: 'dia-del-trabajo' },
  names: { en: 'Labour Day', fr: 'Fete du Travail', es: 'Dia del Trabajo' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 1,

  descriptions: {
    en: "Labour Day on May 1 is a public holiday in Cameroon honouring workers and the labour movement. It is marked by union rallies, workers' marches, and government addresses on labour issues.",
    fr: "La Fete du Travail, le 1er mai, est un jour ferie au Cameroun honorant les travailleurs et le mouvement ouvrier. Elle est marquee par des rassemblements syndicaux, des marches de travailleurs et des discours gouvernementaux sur les questions de travail.",
    es: "El Dia del Trabajo, el 1 de mayo, es un dia festivo en Camerun que honra a los trabajadores y al movimiento obrero. Se marca con concentraciones sindicales, marchas de trabajadores y discursos gubernamentales sobre temas laborales.",
  },

  history: {
    en: "Labour Day has been observed in Cameroon since independence, following the French tradition of celebrating May 1 as International Workers' Day. Cameroon's labour movement has roots in the colonial era, when plantation workers organised for better conditions.\n\nThe country's diverse economy — from agriculture and oil to services — means Labour Day addresses a wide range of workers' concerns. Trade unions in both the Francophone and Anglophone regions organise events and rallies.\n\nToday, Labour Day continues to be an important occasion for dialogue between workers, unions, and the government on issues such as wages, working conditions, and employment opportunities for the country's large youth population.",
    fr: "La Fete du Travail est observee au Cameroun depuis l'independance, suivant la tradition francaise de celebrer le 1er mai comme Journee internationale des travailleurs. Le mouvement ouvrier camerounais a des racines dans l'ere coloniale, quand les travailleurs des plantations s'organisaient pour de meilleures conditions.\n\nL'economie diversifiee du pays — de l'agriculture et du petrole aux services — signifie que la Fete du Travail aborde un large eventail de preoccupations des travailleurs. Les syndicats des regions francophone et anglophone organisent des evenements et des rassemblements.\n\nAujourd'hui, la Fete du Travail continue d'etre une occasion importante de dialogue entre les travailleurs, les syndicats et le gouvernement sur des questions telles que les salaires, les conditions de travail et les opportunites d'emploi pour la nombreuse population jeune du pays.",
    es: "El Dia del Trabajo se ha observado en Camerun desde la independencia, siguiendo la tradicion francesa de celebrar el 1 de mayo como Dia Internacional de los Trabajadores. El movimiento obrero camerunes tiene raices en la era colonial, cuando los trabajadores de las plantaciones se organizaron por mejores condiciones.\n\nLa economia diversa del pais — desde la agricultura y el petroleo hasta los servicios — significa que el Dia del Trabajo aborda una amplia gama de preocupaciones de los trabajadores. Los sindicatos de las regiones francofona y anglofona organizan eventos y concentraciones.\n\nHoy, el Dia del Trabajo sigue siendo una ocasion importante para el dialogo entre trabajadores, sindicatos y el gobierno sobre temas como salarios, condiciones de trabajo y oportunidades de empleo para la numerosa poblacion joven del pais.",
  },

  traditions: {
    en: [
      'Trade union rallies and marches through major cities',
      'Government and presidential addresses on labour issues',
      'Workers\' celebrations and community events',
      'Cultural performances at union gatherings',
      'Family relaxation and outings on the day off',
    ],
    fr: [
      'Rassemblements syndicaux et marches a travers les grandes villes',
      'Discours gouvernementaux et presidentiels sur les questions du travail',
      'Celebrations des travailleurs et evenements communautaires',
      'Spectacles culturels lors des rassemblements syndicaux',
      'Detente en famille et sorties pendant le jour de conge',
    ],
    es: [
      'Concentraciones sindicales y marchas por las principales ciudades',
      'Discursos gubernamentales y presidenciales sobre temas laborales',
      'Celebraciones de trabajadores y eventos comunitarios',
      'Espectaculos culturales en reuniones sindicales',
      'Descanso familiar y paseos en el dia libre',
    ],
  },

  funFacts: {
    en: [
      'Cameroon\'s economy is one of the most diversified in Central Africa, spanning agriculture, oil, mining, and services.',
      'Agriculture employs about 70% of Cameroon\'s workforce, with cocoa, coffee, and bananas among the top exports.',
      'Cameroon is the largest economy in the Central African Economic and Monetary Community (CEMAC).',
      'The bilingual nature of Cameroon means Labour Day speeches are delivered in both French and English.',
      'Youth unemployment is a major theme of Labour Day discussions, as over 60% of the population is under 25.',
    ],
    fr: [
      "L'economie du Cameroun est l'une des plus diversifiees d'Afrique centrale, couvrant l'agriculture, le petrole, les mines et les services.",
      "L'agriculture emploie environ 70% de la main-d'oeuvre camerounaise, avec le cacao, le cafe et les bananes parmi les principales exportations.",
      'Le Cameroun est la plus grande economie de la Communaute Economique et Monetaire de l\'Afrique Centrale (CEMAC).',
      'La nature bilingue du Cameroun signifie que les discours de la Fete du Travail sont prononces en francais et en anglais.',
      "Le chomage des jeunes est un theme majeur des discussions de la Fete du Travail, car plus de 60% de la population a moins de 25 ans.",
    ],
    es: [
      'La economia de Camerun es una de las mas diversificadas de Africa Central, abarcando agricultura, petroleo, mineria y servicios.',
      'La agricultura emplea a cerca del 70% de la fuerza laboral de Camerun, con cacao, cafe y bananas entre las principales exportaciones.',
      'Camerun es la economia mas grande de la Comunidad Economica y Monetaria de Africa Central (CEMAC).',
      'La naturaleza bilingue de Camerun significa que los discursos del Dia del Trabajo se pronuncian en frances e ingles.',
      'El desempleo juvenil es un tema importante en las discusiones del Dia del Trabajo, ya que mas del 60% de la poblacion tiene menos de 25 anos.',
    ],
  },

  planningChecklist: {
    en: [
      'Check for union marches and events in your area',
      'Plan a day of rest and family activities',
      'Follow media coverage of Labour Day addresses',
      'Prepare a festive meal for the family',
      'Learn about workers\' rights and labour history in Cameroon',
    ],
    fr: [
      'Verifier les marches et evenements syndicaux dans votre region',
      "Planifier une journee de repos et d'activites familiales",
      'Suivre la couverture mediatique des discours de la Fete du Travail',
      'Preparer un repas festif pour la famille',
      "S'informer sur les droits des travailleurs et l'histoire du travail au Cameroun",
    ],
    es: [
      'Verificar las marchas y eventos sindicales en su area',
      'Planificar un dia de descanso y actividades familiares',
      'Seguir la cobertura mediatica de los discursos del Dia del Trabajo',
      'Preparar una comida festiva para la familia',
      'Aprender sobre los derechos de los trabajadores y la historia laboral en Camerun',
    ],
  },

  relatedHolidays: ['cm_national-day', 'cm_youth-day'],

  seo: {
    en: {
      titleTemplate: 'Labour Day {year} Cameroon — Countdown & Guide',
      descriptionTemplate: 'When is Labour Day {year} in Cameroon? Live countdown to May 1, holiday info, and celebration guide.',
      keywords: ['Labour Day Cameroon', 'Fete du Travail Cameroun', 'May 1 Cameroon', 'Cameroon workers holiday', 'Cameroon public holidays'],
    },
    fr: {
      titleTemplate: 'Fete du Travail {year} Cameroun — Compte a rebours et guide',
      descriptionTemplate: 'Quand est la Fete du Travail {year} au Cameroun ? Compte a rebours, informations et guide de celebration.',
      keywords: ['Fete du Travail Cameroun', '1er mai Cameroun', 'jour ferie Cameroun', 'travailleurs Cameroun', 'jours feries Cameroun'],
    },
    es: {
      titleTemplate: 'Dia del Trabajo {year} Camerun — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Dia del Trabajo {year} en Camerun? Cuenta regresiva, informacion y guia de celebracion.',
      keywords: ['Dia del Trabajo Camerun', '1 de mayo Camerun', 'dia festivo Camerun', 'trabajadores Camerun', 'feriados Camerun'],
    },
  },

  faq: [
    {
      question: { en: 'When is Labour Day {year} in Cameroon?', fr: 'Quand est la Fete du Travail {year} au Cameroun ?', es: 'Cuando es el Dia del Trabajo {year} en Camerun?' },
      answer: {
        en: 'Labour Day {year} in Cameroon is on {date}. It is always May 1 and is a national public holiday.',
        fr: "La Fete du Travail {year} au Cameroun est le {date}. C'est toujours le 1er mai et c'est un jour ferie national.",
        es: 'El Dia del Trabajo {year} en Camerun es el {date}. Siempre es el 1 de mayo y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'Is Labour Day a public holiday in Cameroon?', fr: 'La Fete du Travail est-elle un jour ferie au Cameroun ?', es: 'Es el Dia del Trabajo un dia festivo en Camerun?' },
      answer: {
        en: 'Yes, Labour Day is an official public holiday in Cameroon. Government offices, banks, and most businesses are closed.',
        fr: 'Oui, la Fete du Travail est un jour ferie officiel au Cameroun. Les bureaux gouvernementaux, les banques et la plupart des commerces sont fermes.',
        es: 'Si, el Dia del Trabajo es un dia festivo oficial en Camerun. Las oficinas gubernamentales, bancos y la mayoria de los negocios estan cerrados.',
      },
    },
    {
      question: { en: 'What is the main economy of Cameroon?', fr: "Quelle est l'economie principale du Cameroun ?", es: 'Cual es la economia principal de Camerun?' },
      answer: {
        en: "Cameroon has one of the most diversified economies in Central Africa, with agriculture (cocoa, coffee, bananas), oil production, and services as major sectors. Agriculture employs about 70% of the workforce.",
        fr: "Le Cameroun a l'une des economies les plus diversifiees d'Afrique centrale, avec l'agriculture (cacao, cafe, bananes), la production petroliere et les services comme secteurs majeurs. L'agriculture emploie environ 70% de la main-d'oeuvre.",
        es: 'Camerun tiene una de las economias mas diversificadas de Africa Central, con la agricultura (cacao, cafe, bananas), la produccion petrolera y los servicios como sectores principales. La agricultura emplea a cerca del 70% de la fuerza laboral.',
      },
    },
    {
      question: { en: 'Are Labour Day speeches in French or English?', fr: 'Les discours de la Fete du Travail sont-ils en francais ou en anglais ?', es: 'Los discursos del Dia del Trabajo son en frances o ingles?' },
      answer: {
        en: 'Both. Cameroon is a bilingual country with French and English as official languages, so Labour Day speeches and events are conducted in both languages.',
        fr: 'Les deux. Le Cameroun est un pays bilingue avec le francais et l\'anglais comme langues officielles, donc les discours et evenements de la Fete du Travail sont menes dans les deux langues.',
        es: 'Ambos. Camerun es un pais bilingue con frances e ingles como idiomas oficiales, por lo que los discursos y eventos del Dia del Trabajo se realizan en ambos idiomas.',
      },
    },
  ],

  colorTheme: 'spring',
  icon: '⚒️',
};

// ---------------------------------------------------------------------------
// National Day — May 20
// ---------------------------------------------------------------------------

const nationalDay: HolidayData = {
  id: 'cm_national-day',
  countryCode: 'cm',
  slugs: { en: 'national-day', fr: 'fete-nationale', es: 'dia-nacional' },
  names: { en: 'National Day', fr: 'Fete Nationale', es: 'Dia Nacional' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 20,

  descriptions: {
    en: "National Day on May 20 is Cameroon's most important patriotic holiday, commemorating the 1972 referendum that unified the Federal Republic into the United Republic of Cameroon. It features grand military parades, cultural performances, and celebrations of national unity.",
    fr: "La Fete Nationale, le 20 mai, est la fete patriotique la plus importante du Cameroun, commemorant le referendum de 1972 qui a unifie la Republique federale en Republique unie du Cameroun. Elle comprend de grands defiles militaires, des spectacles culturels et des celebrations de l'unite nationale.",
    es: "El Dia Nacional, el 20 de mayo, es la festividad patriotica mas importante de Camerun, conmemorando el referendum de 1972 que unifico la Republica Federal en la Republica Unida de Camerun. Presenta grandes desfiles militares, espectaculos culturales y celebraciones de la unidad nacional.",
  },

  history: {
    en: "National Day commemorates the May 20, 1972 referendum in which Cameroonians voted to abolish the federal system and create a unitary state. The Federal Republic of Cameroon, which had consisted of French-speaking East Cameroon and English-speaking West Cameroon, became the United Republic of Cameroon.\n\nThe reunification of the two Cameroons had occurred in 1961, but the country maintained a federal structure with separate regional governments. The 1972 referendum, championed by President Ahmadou Ahidjo, created a more centralised government.\n\nToday, May 20 is the grandest celebration in the Cameroonian calendar, with an elaborate military parade in Yaounde attended by the president, dignitaries, and thousands of citizens. The day celebrates national unity, territorial integrity, and the diverse cultures that make up the Cameroonian nation.",
    fr: "La Fete Nationale commemore le referendum du 20 mai 1972 au cours duquel les Camerounais ont vote pour abolir le systeme federal et creer un Etat unitaire. La Republique federale du Cameroun, qui comprenait le Cameroun oriental francophone et le Cameroun occidental anglophone, est devenue la Republique unie du Cameroun.\n\nLa reunification des deux Cameroun avait eu lieu en 1961, mais le pays maintenait une structure federale avec des gouvernements regionaux separes. Le referendum de 1972, defendu par le president Ahmadou Ahidjo, a cree un gouvernement plus centralise.\n\nAujourd'hui, le 20 mai est la celebration la plus grandiose du calendrier camerounais, avec un defile militaire elabore a Yaounde auquel assistent le president, les dignitaires et des milliers de citoyens. Cette journee celebre l'unite nationale, l'integrite territoriale et les diverses cultures qui composent la nation camerounaise.",
    es: "El Dia Nacional conmemora el referendum del 20 de mayo de 1972 en el que los cameruneses votaron por abolir el sistema federal y crear un estado unitario. La Republica Federal de Camerun, que habia consistido en el Camerun Oriental francofono y el Camerun Occidental anglofono, se convirtio en la Republica Unida de Camerun.\n\nLa reunificacion de los dos Camerunes habia ocurrido en 1961, pero el pais mantuvo una estructura federal con gobiernos regionales separados. El referendum de 1972, defendido por el presidente Ahmadou Ahidjo, creo un gobierno mas centralizado.\n\nHoy, el 20 de mayo es la celebracion mas grandiosa del calendario camerunes, con un elaborado desfile militar en Yaounde al que asisten el presidente, dignatarios y miles de ciudadanos. El dia celebra la unidad nacional, la integridad territorial y las diversas culturas que componen la nacion camerunesa.",
  },

  traditions: {
    en: [
      'Watching the grand military parade at the Boulevard du 20 mai in Yaounde',
      'Cultural performances showcasing all 10 regions of Cameroon',
      'Displaying the Cameroonian flag on homes and public buildings',
      'Presidential address to the nation',
      'Community celebrations with traditional music and dance',
      'Sports events and competitions',
      'Wearing green, red, and yellow to show national pride',
    ],
    fr: [
      'Regarder le grand defile militaire au Boulevard du 20 mai a Yaounde',
      'Spectacles culturels representant les 10 regions du Cameroun',
      'Afficher le drapeau camerounais sur les maisons et les batiments publics',
      'Discours presidentiel a la nation',
      'Celebrations communautaires avec musique et danse traditionnelles',
      'Evenements sportifs et competitions',
      'Porter du vert, du rouge et du jaune pour montrer la fierte nationale',
    ],
    es: [
      'Ver el gran desfile militar en el Boulevard du 20 mai en Yaounde',
      'Espectaculos culturales representando las 10 regiones de Camerun',
      'Exhibir la bandera camerunesa en hogares y edificios publicos',
      'Discurso presidencial a la nacion',
      'Celebraciones comunitarias con musica y danza tradicionales',
      'Eventos deportivos y competiciones',
      'Vestir verde, rojo y amarillo para mostrar orgullo nacional',
    ],
  },

  funFacts: {
    en: [
      'The Boulevard du 20 mai in Yaounde is named after National Day and hosts the main parade each year.',
      'Cameroon\'s flag features green, red, and yellow stripes with a star, representing vegetation, unity, and the sun.',
      'The 1972 referendum passed with over 99% approval, creating the United Republic of Cameroon.',
      'National Day parades in Yaounde can last several hours, featuring military units, school groups, and cultural delegations.',
      'Cameroon\'s national football team, the Indomitable Lions, is a major source of national pride featured in National Day celebrations.',
    ],
    fr: [
      "Le Boulevard du 20 mai a Yaounde tire son nom de la Fete Nationale et accueille le defile principal chaque annee.",
      "Le drapeau du Cameroun presente des bandes vertes, rouges et jaunes avec une etoile, representant la vegetation, l'unite et le soleil.",
      "Le referendum de 1972 a ete approuve a plus de 99%, creant la Republique unie du Cameroun.",
      "Les defiles de la Fete Nationale a Yaounde peuvent durer plusieurs heures, avec des unites militaires, des groupes scolaires et des delegations culturelles.",
      "L'equipe nationale de football du Cameroun, les Lions Indomptables, est une source majeure de fierte nationale mise en vedette dans les celebrations de la Fete Nationale.",
    ],
    es: [
      'El Boulevard du 20 mai en Yaounde lleva el nombre del Dia Nacional y alberga el desfile principal cada ano.',
      'La bandera de Camerun presenta franjas verdes, rojas y amarillas con una estrella, representando la vegetacion, la unidad y el sol.',
      'El referendum de 1972 fue aprobado con mas del 99%, creando la Republica Unida de Camerun.',
      'Los desfiles del Dia Nacional en Yaounde pueden durar varias horas, con unidades militares, grupos escolares y delegaciones culturales.',
      'La seleccion nacional de futbol de Camerun, los Leones Indomables, es una fuente importante de orgullo nacional destacada en las celebraciones del Dia Nacional.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the schedule for the military parade at Boulevard du 20 mai',
      'Display the Cameroonian flag at home or on your vehicle',
      'Plan to attend cultural performances and community events',
      'Wear national colours — green, red, and yellow',
      'Prepare traditional Cameroonian dishes for family celebrations',
    ],
    fr: [
      'Verifier le programme du defile militaire au Boulevard du 20 mai',
      'Afficher le drapeau camerounais a la maison ou sur votre vehicule',
      "Prevoir d'assister aux spectacles culturels et evenements communautaires",
      'Porter les couleurs nationales — vert, rouge et jaune',
      'Preparer des plats traditionnels camerounais pour les celebrations familiales',
    ],
    es: [
      'Consultar el horario del desfile militar en el Boulevard du 20 mai',
      'Exhibir la bandera camerunesa en casa o en su vehiculo',
      'Planificar asistir a espectaculos culturales y eventos comunitarios',
      'Vestir los colores nacionales — verde, rojo y amarillo',
      'Preparar platos tradicionales cameruneses para las celebraciones familiares',
    ],
  },

  relatedHolidays: ['cm_youth-day', 'cm_new-years-day'],

  seo: {
    en: {
      titleTemplate: 'Cameroon National Day {year} — Countdown & History',
      descriptionTemplate: 'When is Cameroon National Day {year}? Live countdown to May 20, reunification history, military parade, and celebration guide.',
      keywords: ['Cameroon National Day', 'Fete Nationale Cameroun', 'May 20 Cameroon', 'Cameroon reunification', 'Cameroon holidays'],
    },
    fr: {
      titleTemplate: 'Fete Nationale du Cameroun {year} — Compte a rebours et histoire',
      descriptionTemplate: 'Quand est la Fete Nationale du Cameroun {year} ? Compte a rebours, histoire de la reunification et guide de celebration.',
      keywords: ['Fete Nationale Cameroun', '20 mai Cameroun', 'reunification Cameroun', 'defile militaire Cameroun', 'jours feries Cameroun'],
    },
    es: {
      titleTemplate: 'Dia Nacional de Camerun {year} — Cuenta regresiva e historia',
      descriptionTemplate: 'Cuando es el Dia Nacional de Camerun {year}? Cuenta regresiva, historia de la reunificacion y guia de celebracion.',
      keywords: ['Dia Nacional Camerun', '20 de mayo Camerun', 'reunificacion Camerun', 'desfile militar Camerun', 'dias festivos Camerun'],
    },
  },

  faq: [
    {
      question: { en: 'When is Cameroon National Day {year}?', fr: 'Quand est la Fete Nationale du Cameroun {year} ?', es: 'Cuando es el Dia Nacional de Camerun {year}?' },
      answer: {
        en: 'Cameroon National Day {year} is on {date}. It is always May 20, commemorating the 1972 reunification referendum.',
        fr: "La Fete Nationale du Cameroun {year} est le {date}. C'est toujours le 20 mai, commemorant le referendum de reunification de 1972.",
        es: 'El Dia Nacional de Camerun {year} es el {date}. Siempre es el 20 de mayo, conmemorando el referendum de reunificacion de 1972.',
      },
    },
    {
      question: { en: 'What does May 20 commemorate?', fr: 'Que commemore le 20 mai ?', es: 'Que conmemora el 20 de mayo?' },
      answer: {
        en: 'May 20 commemorates the 1972 referendum that abolished the federal system and created the United Republic of Cameroon, unifying the French-speaking and English-speaking regions into one nation.',
        fr: "Le 20 mai commemore le referendum de 1972 qui a aboli le systeme federal et cree la Republique unie du Cameroun, unifiant les regions francophones et anglophones en une seule nation.",
        es: 'El 20 de mayo conmemora el referendum de 1972 que abolio el sistema federal y creo la Republica Unida de Camerun, unificando las regiones francofona y anglofona en una sola nacion.',
      },
    },
    {
      question: { en: 'Where is the main National Day parade held?', fr: 'Ou se tient le defile principal de la Fete Nationale ?', es: 'Donde se celebra el desfile principal del Dia Nacional?' },
      answer: {
        en: 'The main National Day parade is held at the Boulevard du 20 mai in Yaounde, the capital. Similar celebrations take place in regional capitals across the country.',
        fr: "Le defile principal de la Fete Nationale se tient au Boulevard du 20 mai a Yaounde, la capitale. Des celebrations similaires ont lieu dans les capitales regionales a travers le pays.",
        es: 'El desfile principal del Dia Nacional se celebra en el Boulevard du 20 mai en Yaounde, la capital. Celebraciones similares tienen lugar en las capitales regionales de todo el pais.',
      },
    },
    {
      question: { en: 'Who are the Indomitable Lions?', fr: 'Qui sont les Lions Indomptables ?', es: 'Quienes son los Leones Indomables?' },
      answer: {
        en: "The Indomitable Lions is the nickname of Cameroon's national football team. They are one of Africa's most successful football teams and a major source of national pride, often celebrated during National Day festivities.",
        fr: "Les Lions Indomptables est le surnom de l'equipe nationale de football du Cameroun. Ils sont l'une des equipes de football les plus performantes d'Afrique et une source majeure de fierte nationale, souvent celebrates lors des festivites de la Fete Nationale.",
        es: "Los Leones Indomables es el apodo de la seleccion nacional de futbol de Camerun. Son uno de los equipos de futbol mas exitosos de Africa y una fuente importante de orgullo nacional, a menudo celebrados durante las festividades del Dia Nacional.",
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '🇨🇲',
};

// ---------------------------------------------------------------------------
// Eid al-Fitr
// ---------------------------------------------------------------------------

const eidAlFitr: HolidayData = {
  id: 'cm_eid-al-fitr',
  countryCode: 'cm',
  slugs: { en: 'eid-al-fitr', fr: 'eid-al-fitr', es: 'eid-al-fitr' },
  names: { en: 'Eid al-Fitr', fr: "Eid al-Fitr", es: 'Eid al-Fitr' },

  dateType: 'calculated',
  calculateDate: getEidAlFitrDate,

  descriptions: {
    en: "Eid al-Fitr marks the end of Ramadan in Cameroon and is a public holiday celebrated by the country's significant Muslim population, concentrated primarily in the north. It features communal prayers, family feasts, and gift-giving.",
    fr: "L'Eid al-Fitr marque la fin du Ramadan au Cameroun et est un jour ferie celebre par l'importante population musulmane du pays, concentree principalement dans le nord. Il comprend des prieres communautaires, des festins familiaux et des echanges de cadeaux.",
    es: "El Eid al-Fitr marca el fin del Ramadan en Camerun y es un dia festivo celebrado por la significativa poblacion musulmana del pais, concentrada principalmente en el norte. Presenta oraciones comunitarias, banquetes familiares e intercambio de regalos.",
  },

  history: {
    en: "Islam has been present in Cameroon for centuries, introduced through trans-Saharan trade routes to the northern regions. The Fulani and Hausa peoples, among others, have long traditions of Islamic observance. Eid al-Fitr is deeply woven into the cultural fabric of northern Cameroon.\n\nThe Adamawa and Far North regions are predominantly Muslim, with ancient cities like Foumban and Maroua serving as important centres of Islamic culture. The lamidos (traditional rulers) play a significant role in organising Eid celebrations.\n\nAs a bilingual and multi-religious nation, Cameroon recognises both Christian and Muslim holidays as public holidays. Eid al-Fitr celebrations in northern Cameroon are among the most colourful in Central Africa, featuring horseback parades, traditional music, and elaborate feasts.",
    fr: "L'islam est present au Cameroun depuis des siecles, introduit par les routes commerciales transsahariennes vers les regions du nord. Les peuples Peuls et Haoussa, entre autres, ont de longues traditions d'observance islamique. L'Eid al-Fitr est profondement ancre dans le tissu culturel du nord du Cameroun.\n\nLes regions de l'Adamaoua et de l'Extreme-Nord sont a predominance musulmane, avec des villes anciennes comme Foumban et Maroua servant de centres importants de la culture islamique. Les lamidos (chefs traditionnels) jouent un role significatif dans l'organisation des celebrations de l'Eid.\n\nEn tant que nation bilingue et multi-religieuse, le Cameroun reconnait les fetes chretiennes et musulmanes comme jours feries. Les celebrations de l'Eid al-Fitr dans le nord du Cameroun sont parmi les plus colorees d'Afrique centrale, avec des defiles equestres, de la musique traditionnelle et des festins elabores.",
    es: "El islam ha estado presente en Camerun durante siglos, introducido a traves de rutas comerciales transaharianas hacia las regiones del norte. Los pueblos Fulani y Hausa, entre otros, tienen largas tradiciones de observancia islamica. El Eid al-Fitr esta profundamente entrelazado en el tejido cultural del norte de Camerun.\n\nLas regiones de Adamawa y Extremo Norte son predominantemente musulmanas, con ciudades antiguas como Foumban y Maroua sirviendo como importantes centros de cultura islamica. Los lamidos (gobernantes tradicionales) juegan un papel significativo en la organizacion de las celebraciones del Eid.\n\nComo nacion bilingue y multi-religiosa, Camerun reconoce tanto las fiestas cristianas como musulmanas como dias festivos. Las celebraciones del Eid al-Fitr en el norte de Camerun estan entre las mas coloridas de Africa Central, con desfiles ecuestres, musica tradicional y elaborados banquetes.",
  },

  traditions: {
    en: [
      'Attending communal Eid prayers at mosques and open prayer grounds',
      'Horseback parades led by lamidos (traditional rulers) in northern Cameroon',
      'Wearing new or finest traditional garments',
      'Preparing festive meals with grilled meat and regional specialities',
      'Children receiving gifts of money and sweets',
      'Visiting family and friends to exchange Eid greetings',
    ],
    fr: [
      "Assister aux prieres communautaires de l'Eid dans les mosquees et les espaces de priere en plein air",
      'Defiles equestres menes par les lamidos (chefs traditionnels) dans le nord du Cameroun',
      'Porter des vetements traditionnels neufs ou ses plus beaux habits',
      'Preparer des repas festifs avec de la viande grillee et des specialites regionales',
      "Les enfants recoivent des cadeaux d'argent et des friandises",
      "Rendre visite a la famille et aux amis pour echanger des voeux de l'Eid",
    ],
    es: [
      'Asistir a oraciones comunitarias del Eid en mezquitas y espacios de oracion al aire libre',
      'Desfiles ecuestres liderados por lamidos (gobernantes tradicionales) en el norte de Camerun',
      'Vestir ropa tradicional nueva o la mejor vestimenta',
      'Preparar comidas festivas con carne a la parrilla y especialidades regionales',
      'Los ninos reciben regalos de dinero y dulces',
      'Visitar a familiares y amigos para intercambiar saludos del Eid',
    ],
  },

  funFacts: {
    en: [
      'Eid celebrations in Maroua and Garoua feature spectacular horseback parades with riders in traditional Fulani regalia.',
      'The Sultanate of Foumban has celebrated Eid al-Fitr for centuries and is one of the most important Islamic cultural centres in Central Africa.',
      'Northern Cameroon\'s Eid celebrations blend Islamic tradition with local Fulani, Hausa, and Kanuri cultural elements.',
      'Cameroon is one of the most religiously diverse countries in Central Africa, with approximately 40% Muslim and 40% Christian populations.',
      'The lamido\'s palace in Foumban hosts one of the most elaborate Eid celebrations in the country.',
    ],
    fr: [
      "Les celebrations de l'Eid a Maroua et Garoua comprennent des defiles equestres spectaculaires avec des cavaliers en tenue traditionnelle peule.",
      "Le Sultanat de Foumban celebre l'Eid al-Fitr depuis des siecles et est l'un des centres culturels islamiques les plus importants d'Afrique centrale.",
      "Les celebrations de l'Eid dans le nord du Cameroun melangent la tradition islamique avec des elements culturels peuls, haoussa et kanouri locaux.",
      "Le Cameroun est l'un des pays les plus diversifies religieusement d'Afrique centrale, avec environ 40% de musulmans et 40% de chretiens.",
      "Le palais du lamido a Foumban accueille l'une des celebrations de l'Eid les plus elaborees du pays.",
    ],
    es: [
      'Las celebraciones del Eid en Maroua y Garoua presentan espectaculares desfiles ecuestres con jinetes en atuendo tradicional Fulani.',
      'El Sultanato de Foumban ha celebrado el Eid al-Fitr durante siglos y es uno de los centros culturales islamicos mas importantes de Africa Central.',
      'Las celebraciones del Eid en el norte de Camerun mezclan la tradicion islamica con elementos culturales locales Fulani, Hausa y Kanuri.',
      'Camerun es uno de los paises mas diversos religiosamente de Africa Central, con aproximadamente 40% musulmanes y 40% cristianos.',
      'El palacio del lamido en Foumban alberga una de las celebraciones del Eid mas elaboradas del pais.',
    ],
  },

  planningChecklist: {
    en: [
      'Purchase new clothes for the family to wear on Eid',
      'Stock up on ingredients for festive meals',
      'Prepare gifts and sweets for children',
      'Plan visits to family and friends',
      'Follow moon sighting announcements for the exact date',
    ],
    fr: [
      "Acheter de nouveaux vetements pour la famille a porter pour l'Eid",
      "S'approvisionner en ingredients pour les repas festifs",
      'Preparer des cadeaux et des friandises pour les enfants',
      'Planifier les visites a la famille et aux amis',
      "Suivre les annonces d'observation de la lune pour la date exacte",
    ],
    es: [
      'Comprar ropa nueva para que la familia use en el Eid',
      'Abastecerse de ingredientes para las comidas festivas',
      'Preparar regalos y dulces para los ninos',
      'Planificar visitas a familiares y amigos',
      'Seguir los anuncios de avistamiento de la luna para la fecha exacta',
    ],
  },

  relatedHolidays: ['cm_christmas', 'cm_national-day'],

  seo: {
    en: {
      titleTemplate: 'Eid al-Fitr {year} Cameroon — Countdown & Guide',
      descriptionTemplate: 'When is Eid al-Fitr {year} in Cameroon? Live countdown, northern Cameroon traditions, and celebration guide.',
      keywords: ['Eid al-Fitr Cameroon', 'Ramadan Cameroon', 'Cameroon Muslim holidays', 'Eid Maroua', 'Cameroon holidays'],
    },
    fr: {
      titleTemplate: "Eid al-Fitr {year} Cameroun — Compte a rebours et guide",
      descriptionTemplate: "Quand est l'Eid al-Fitr {year} au Cameroun ? Compte a rebours, traditions du nord du Cameroun et guide de celebration.",
      keywords: ['Eid al-Fitr Cameroun', 'Ramadan Cameroun', 'fetes musulmanes Cameroun', 'Eid Maroua', 'jours feries Cameroun'],
    },
    es: {
      titleTemplate: 'Eid al-Fitr {year} Camerun — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Eid al-Fitr {year} en Camerun? Cuenta regresiva, tradiciones del norte de Camerun y guia de celebracion.',
      keywords: ['Eid al-Fitr Camerun', 'Ramadan Camerun', 'fiestas musulmanas Camerun', 'Eid Maroua', 'dias festivos Camerun'],
    },
  },

  faq: [
    {
      question: { en: 'When is Eid al-Fitr {year} in Cameroon?', fr: "Quand est l'Eid al-Fitr {year} au Cameroun ?", es: 'Cuando es el Eid al-Fitr {year} en Camerun?' },
      answer: {
        en: 'Eid al-Fitr {year} in Cameroon is expected around {date}. The exact date depends on the sighting of the new moon.',
        fr: "L'Eid al-Fitr {year} au Cameroun est prevu aux alentours du {date}. La date exacte depend de l'observation du nouveau croissant de lune.",
        es: 'El Eid al-Fitr {year} en Camerun se espera alrededor del {date}. La fecha exacta depende del avistamiento de la luna nueva.',
      },
    },
    {
      question: { en: 'Is Eid al-Fitr a public holiday in Cameroon?', fr: "L'Eid al-Fitr est-il un jour ferie au Cameroun ?", es: 'Es el Eid al-Fitr un dia festivo en Camerun?' },
      answer: {
        en: 'Yes, Eid al-Fitr is an official public holiday in Cameroon, reflecting the country\'s recognition of its significant Muslim population.',
        fr: "Oui, l'Eid al-Fitr est un jour ferie officiel au Cameroun, refletant la reconnaissance par le pays de son importante population musulmane.",
        es: 'Si, el Eid al-Fitr es un dia festivo oficial en Camerun, reflejando el reconocimiento del pais de su significativa poblacion musulmana.',
      },
    },
    {
      question: { en: 'What are the horseback parades?', fr: 'Que sont les defiles equestres ?', es: 'Que son los desfiles ecuestres?' },
      answer: {
        en: 'In northern Cameroon, traditional rulers (lamidos) lead spectacular horseback parades during Eid celebrations. Riders wear elaborate traditional Fulani garments and perform equestrian displays as part of the festivities.',
        fr: "Dans le nord du Cameroun, les chefs traditionnels (lamidos) menent des defiles equestres spectaculaires pendant les celebrations de l'Eid. Les cavaliers portent des vetements traditionnels peuls elabores et effectuent des demonstrations equestres dans le cadre des festivites.",
        es: 'En el norte de Camerun, los gobernantes tradicionales (lamidos) lideran espectaculares desfiles ecuestres durante las celebraciones del Eid. Los jinetes visten elaborados atuendos tradicionales Fulani y realizan exhibiciones ecuestres como parte de las festividades.',
      },
    },
    {
      question: { en: 'Where are Eid celebrations biggest in Cameroon?', fr: "Ou les celebrations de l'Eid sont-elles les plus importantes au Cameroun ?", es: 'Donde son mas grandes las celebraciones del Eid en Camerun?' },
      answer: {
        en: 'The largest Eid celebrations in Cameroon take place in the northern cities of Maroua, Garoua, and Foumban, which have the highest Muslim populations and the strongest Islamic cultural traditions.',
        fr: "Les plus grandes celebrations de l'Eid au Cameroun ont lieu dans les villes du nord comme Maroua, Garoua et Foumban, qui ont les populations musulmanes les plus importantes et les traditions culturelles islamiques les plus fortes.",
        es: 'Las mayores celebraciones del Eid en Camerun tienen lugar en las ciudades del norte como Maroua, Garoua y Foumban, que tienen las mayores poblaciones musulmanas y las tradiciones culturales islamicas mas fuertes.',
      },
    },
  ],

  colorTheme: 'autumn',
  icon: '🌙',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'cm_christmas',
  countryCode: 'cm',
  slugs: { en: 'christmas', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noel', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: "Christmas Day on December 25 is a major public holiday in Cameroon, celebrated with great enthusiasm by the country's approximately 40% Christian population. Festivities include church services, family feasts, and vibrant community celebrations.",
    fr: "Le jour de Noel, le 25 decembre, est un jour ferie majeur au Cameroun, celebre avec grand enthousiasme par les environ 40% de la population chretienne du pays. Les festivites comprennent des services religieux, des festins familiaux et des celebrations communautaires animees.",
    es: "El dia de Navidad, el 25 de diciembre, es un dia festivo importante en Camerun, celebrado con gran entusiasmo por aproximadamente el 40% de la poblacion cristiana del pais. Las festividades incluyen servicios religiosos, banquetes familiares y vibrantes celebraciones comunitarias.",
  },

  history: {
    en: "Christmas has been celebrated in Cameroon since the introduction of Christianity by European missionaries in the 19th century. Both Catholic and Protestant missionaries established communities throughout the country, and Christmas became deeply embedded in Cameroonian culture.\n\nThe bilingual nature of Cameroon means Christmas traditions draw from both French and British influences. In the Francophone regions, the French tradition of a reveillon (Christmas Eve feast) is common, while Anglophone regions may follow British-style Christmas morning celebrations.\n\nToday, Christmas in Cameroon is a vibrant celebration that blends European holiday traditions with distinctly African cultural elements, including traditional music, dance, and cuisine.",
    fr: "Noel est celebre au Cameroun depuis l'introduction du christianisme par les missionnaires europeens au XIXe siecle. Les missionnaires catholiques et protestants ont etabli des communautes a travers le pays, et Noel est devenu profondement ancre dans la culture camerounaise.\n\nLa nature bilingue du Cameroun signifie que les traditions de Noel puisent dans les influences francaises et britanniques. Dans les regions francophones, la tradition francaise du reveillon (festin de la veille de Noel) est courante, tandis que les regions anglophones peuvent suivre les celebrations de la matinee de Noel a la britannique.\n\nAujourd'hui, Noel au Cameroun est une celebration vibrante qui melange les traditions festives europeennes avec des elements culturels distinctement africains, notamment la musique, la danse et la cuisine traditionnelles.",
    es: "La Navidad se celebra en Camerun desde la introduccion del cristianismo por misioneros europeos en el siglo XIX. Misioneros catolicos y protestantes establecieron comunidades en todo el pais, y la Navidad quedo profundamente arraigada en la cultura camerunesa.\n\nLa naturaleza bilingue de Camerun significa que las tradiciones navidenas se nutren de influencias francesas y britanicas. En las regiones francofona, la tradicion francesa del reveillon (cena de Nochebuena) es comun, mientras que las regiones anglofona pueden seguir celebraciones navidenas matutinas al estilo britanico.\n\nHoy, la Navidad en Camerun es una vibrante celebracion que mezcla tradiciones festivas europeas con elementos culturales distintamente africanos, incluyendo musica, danza y cocina tradicionales.",
  },

  traditions: {
    en: [
      'Attending midnight mass and Christmas morning church services',
      'Preparing elaborate meals including ndole, grilled fish, and plantains',
      'Exchanging gifts among family and friends',
      'Community celebrations with traditional music and makossa dance',
      'Children receiving new clothes and presents',
      'Family gatherings bringing together extended family members',
    ],
    fr: [
      'Assister a la messe de minuit et aux services religieux du matin de Noel',
      'Preparer des repas elabores incluant du ndole, du poisson grille et des plantains',
      'Echanger des cadeaux entre famille et amis',
      'Celebrations communautaires avec musique traditionnelle et danse makossa',
      'Les enfants recoivent de nouveaux vetements et des cadeaux',
      'Reunions familiales rassemblant les membres de la famille elargie',
    ],
    es: [
      'Asistir a la misa de medianoche y servicios religiosos de la manana de Navidad',
      'Preparar comidas elaboradas incluyendo ndole, pescado a la parrilla y platanos',
      'Intercambiar regalos entre familia y amigos',
      'Celebraciones comunitarias con musica tradicional y danza makossa',
      'Los ninos reciben ropa nueva y regalos',
      'Reuniones familiares que reunen a miembros de la familia extendida',
    ],
  },

  funFacts: {
    en: [
      'Cameroon celebrates Christmas in warm tropical weather, with temperatures often above 25°C (77°F).',
      'Makossa music, originating from Cameroon, provides the soundtrack for many Christmas celebrations.',
      'The Francophone tradition of reveillon means many Cameroonian families have their main feast on Christmas Eve.',
      'Cameroon is one of the few countries where both French and British Christmas traditions are observed side by side.',
      'Palm wine and local beer (such as 33 Export) are popular drinks at Cameroonian Christmas celebrations.',
    ],
    fr: [
      "Le Cameroun celebre Noel sous un temps tropical chaud, avec des temperatures depassant souvent 25°C.",
      "La musique makossa, originaire du Cameroun, fournit la bande sonore de nombreuses celebrations de Noel.",
      "La tradition francophone du reveillon signifie que de nombreuses familles camerounaises prennent leur repas principal la veille de Noel.",
      "Le Cameroun est l'un des rares pays ou les traditions de Noel francaises et britanniques sont observees cote a cote.",
      "Le vin de palme et la biere locale (comme la 33 Export) sont des boissons populaires lors des celebrations de Noel camerounaises.",
    ],
    es: [
      'Camerun celebra la Navidad con clima tropical calido, con temperaturas que a menudo superan los 25°C.',
      'La musica makossa, originaria de Camerun, proporciona la banda sonora de muchas celebraciones navidenas.',
      'La tradicion francofona del reveillon significa que muchas familias camerunesas tienen su comida principal en Nochebuena.',
      'Camerun es uno de los pocos paises donde las tradiciones navidenas francesas y britanicas se observan lado a lado.',
      'El vino de palma y la cerveza local (como la 33 Export) son bebidas populares en las celebraciones navidenas camerunesas.',
    ],
  },

  planningChecklist: {
    en: [
      'Check mass schedules at local churches for Christmas Eve and Christmas Day',
      'Purchase gifts for family and friends',
      'Prepare ingredients for traditional Cameroonian Christmas dishes',
      'Arrange travel if visiting family in other regions',
      'Plan community celebrations and gatherings',
    ],
    fr: [
      'Verifier les horaires des messes pour le reveillon et le jour de Noel',
      'Acheter des cadeaux pour la famille et les amis',
      'Preparer les ingredients pour les plats de Noel traditionnels camerounais',
      'Organiser le voyage si vous rendez visite a la famille dans d\'autres regions',
      'Planifier les celebrations et rassemblements communautaires',
    ],
    es: [
      'Consultar los horarios de misas para Nochebuena y el dia de Navidad',
      'Comprar regalos para familia y amigos',
      'Preparar ingredientes para platos navidenos tradicionales cameruneses',
      'Organizar viajes si visita a la familia en otras regiones',
      'Planificar celebraciones y reuniones comunitarias',
    ],
  },

  relatedHolidays: ['cm_new-years-day', 'cm_eid-al-fitr'],

  seo: {
    en: {
      titleTemplate: 'Christmas Day {year} Cameroon — Countdown & Guide',
      descriptionTemplate: 'When is Christmas {year} in Cameroon? Live countdown to December 25, Noel traditions, and celebration guide.',
      keywords: ['Christmas Cameroon', 'Noel Cameroun', 'Cameroon Christmas', 'December 25 Cameroon', 'Cameroon holidays'],
    },
    fr: {
      titleTemplate: 'Noel {year} Cameroun — Compte a rebours et guide',
      descriptionTemplate: 'Quand est Noel {year} au Cameroun ? Compte a rebours, traditions et guide de celebration.',
      keywords: ['Noel Cameroun', 'fete de Noel Cameroun', '25 decembre Cameroun', 'Noel Yaounde', 'jours feries Cameroun'],
    },
    es: {
      titleTemplate: 'Navidad {year} Camerun — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es Navidad {year} en Camerun? Cuenta regresiva, tradiciones y guia de celebracion.',
      keywords: ['Navidad Camerun', 'Noel Camerun', '25 de diciembre Camerun', 'Navidad Yaounde', 'dias festivos Camerun'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in Cameroon?', fr: 'Quand est Noel {year} au Cameroun ?', es: 'Cuando es Navidad {year} en Camerun?' },
      answer: {
        en: 'Christmas {year} in Cameroon is on {date}. It is always December 25 and is a national public holiday.',
        fr: "Noel {year} au Cameroun est le {date}. C'est toujours le 25 decembre et c'est un jour ferie national.",
        es: 'Navidad {year} en Camerun es el {date}. Siempre es el 25 de diciembre y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'Is Christmas a public holiday in Cameroon?', fr: 'Noel est-il un jour ferie au Cameroun ?', es: 'Es la Navidad un dia festivo en Camerun?' },
      answer: {
        en: 'Yes, Christmas is an official public holiday in Cameroon. Both Christian and Muslim holidays are recognised in this religiously diverse nation.',
        fr: 'Oui, Noel est un jour ferie officiel au Cameroun. Les fetes chretiennes et musulmanes sont reconnues dans cette nation religieusement diverse.',
        es: 'Si, la Navidad es un dia festivo oficial en Camerun. Tanto las fiestas cristianas como musulmanas son reconocidas en esta nacion religiosamente diversa.',
      },
    },
    {
      question: { en: 'What is reveillon?', fr: "Qu'est-ce que le reveillon ?", es: 'Que es el reveillon?' },
      answer: {
        en: 'Reveillon is the French tradition of a festive Christmas Eve feast. In Francophone Cameroon, many families follow this tradition, gathering for an elaborate meal on the evening of December 24.',
        fr: "Le reveillon est la tradition francaise d'un festin de la veille de Noel. Au Cameroun francophone, de nombreuses familles suivent cette tradition, se reunissant pour un repas elabore le soir du 24 decembre.",
        es: 'El reveillon es la tradicion francesa de un festin de Nochebuena. En el Camerun francofono, muchas familias siguen esta tradicion, reuniendose para una comida elaborada la noche del 24 de diciembre.',
      },
    },
    {
      question: { en: 'What is makossa?', fr: "Qu'est-ce que le makossa ?", es: 'Que es el makossa?' },
      answer: {
        en: 'Makossa is a popular Cameroonian music genre that originated in Douala. It combines traditional Cameroonian rhythms with modern elements and is a staple of festive celebrations, including Christmas.',
        fr: "Le makossa est un genre musical populaire camerounais originaire de Douala. Il combine des rythmes traditionnels camerounais avec des elements modernes et est un incontournable des celebrations festives, y compris Noel.",
        es: 'El makossa es un genero musical popular camerunes originario de Douala. Combina ritmos tradicionales cameruneses con elementos modernos y es un elemento basico de las celebraciones festivas, incluyendo la Navidad.',
      },
    },
  ],

  colorTheme: 'christmas',
  icon: '🎄',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const cmHolidays: HolidayData[] = [
  newYearsDay,
  youthDay,
  labourDay,
  nationalDay,
  eidAlFitr,
  christmas,
];

export default cmHolidays;
