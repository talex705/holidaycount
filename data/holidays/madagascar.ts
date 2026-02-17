/**
 * Madagascar holidays data.
 */

import type { HolidayData } from '@/lib/types';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'mg_new-years-day',
  countryCode: 'mg',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'ano-nuevo' },
  names: { en: "New Year's Day", fr: "Jour de l'An", es: 'Dia de Ano Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 marks the start of the calendar year in Madagascar. It is a public holiday celebrated with family gatherings, church services, festive meals, and traditional Malagasy music.",
    fr: "Le Jour de l'An, le 1er janvier, marque le debut de l'annee civile a Madagascar. C'est un jour ferie celebre par des reunions familiales, des services religieux, des repas festifs et de la musique traditionnelle malgache.",
    es: "El Dia de Ano Nuevo, el 1 de enero, marca el inicio del ano calendario en Madagascar. Es un dia festivo celebrado con reuniones familiares, servicios religiosos, comidas festivas y musica tradicional malgache.",
  },

  history: {
    en: "New Year's Day has been observed as a public holiday in Madagascar since independence in 1960. The celebration blends French colonial traditions with distinctly Malagasy customs, reflecting the island's unique cultural identity.\n\nMadagascar, the world's fourth-largest island, has a rich cultural heritage that combines Southeast Asian, African, and French influences. New Year's celebrations often feature traditional Malagasy music, including hira gasy (traditional theatrical performances) and valiha (bamboo tube zither) music.\n\nFor many Malagasy families, New Year's Day is a time to honour family bonds and ancestors, a central value in Malagasy culture known as fihavanana (solidarity and kinship).",
    fr: "Le Jour de l'An est observe comme jour ferie a Madagascar depuis l'independance en 1960. La celebration melange les traditions coloniales francaises avec des coutumes distinctement malgaches, refletant l'identite culturelle unique de l'ile.\n\nMadagascar, la quatrieme plus grande ile du monde, possede un riche patrimoine culturel qui combine des influences d'Asie du Sud-Est, africaines et francaises. Les celebrations du Nouvel An presentent souvent de la musique traditionnelle malgache, notamment le hira gasy (spectacles theatraux traditionnels) et la musique de valiha (cithare en tube de bambou).\n\nPour de nombreuses familles malgaches, le Jour de l'An est un moment pour honorer les liens familiaux et les ancetres, une valeur centrale de la culture malgache connue sous le nom de fihavanana (solidarite et parente).",
    es: "El Dia de Ano Nuevo se ha observado como dia festivo en Madagascar desde la independencia en 1960. La celebracion mezcla tradiciones coloniales francesas con costumbres distintamente malgaches, reflejando la identidad cultural unica de la isla.\n\nMadagascar, la cuarta isla mas grande del mundo, tiene un rico patrimonio cultural que combina influencias del sudeste asiatico, africanas y francesas. Las celebraciones de Ano Nuevo a menudo presentan musica tradicional malgache, incluyendo hira gasy (espectaculos teatrales tradicionales) y musica de valiha (citara de tubo de bambu).\n\nPara muchas familias malgaches, el Dia de Ano Nuevo es un momento para honrar los lazos familiares y los ancestros, un valor central en la cultura malgache conocido como fihavanana (solidaridad y parentesco).",
  },

  traditions: {
    en: [
      'Attending church services and prayer gatherings',
      'Family reunions with festive meals featuring romazava and rice',
      'Enjoying traditional hira gasy performances',
      'Exchanging New Year greetings and visiting neighbours',
      'Wearing new clothes to mark the fresh start of the year',
      'Playing valiha music and singing traditional songs',
    ],
    fr: [
      'Assister aux services religieux et aux reunions de priere',
      'Reunions familiales avec des repas festifs a base de romazava et de riz',
      'Profiter de spectacles traditionnels de hira gasy',
      'Echanger des voeux de Nouvel An et rendre visite aux voisins',
      "Porter de nouveaux vetements pour marquer le debut de l'annee",
      'Jouer de la valiha et chanter des chansons traditionnelles',
    ],
    es: [
      'Asistir a servicios religiosos y reuniones de oracion',
      'Reuniones familiares con comidas festivas con romazava y arroz',
      'Disfrutar de espectaculos tradicionales de hira gasy',
      'Intercambiar saludos de Ano Nuevo y visitar a los vecinos',
      'Estrenar ropa nueva para marcar el comienzo del ano',
      'Tocar valiha y cantar canciones tradicionales',
    ],
  },

  funFacts: {
    en: [
      'Madagascar is the fourth-largest island in the world, after Greenland, New Guinea, and Borneo.',
      'The Malagasy language is related to languages of Southeast Asia, reflecting ancient maritime migration from Borneo.',
      'Rice is so central to Malagasy culture that the word for eating is "mihinam-bary" — literally "eating rice."',
      'Madagascar is home to over 11,000 plant species found nowhere else on Earth.',
      'The valiha, a bamboo tube zither, is the national instrument of Madagascar.',
    ],
    fr: [
      "Madagascar est la quatrieme plus grande ile du monde, apres le Groenland, la Nouvelle-Guinee et Borneo.",
      "La langue malgache est apparentee aux langues d'Asie du Sud-Est, refletant une ancienne migration maritime depuis Borneo.",
      'Le riz est si central dans la culture malgache que le mot pour manger est "mihinam-bary" — litteralement "manger du riz".',
      "Madagascar abrite plus de 11 000 especes vegetales qu'on ne trouve nulle part ailleurs sur Terre.",
      'La valiha, une cithare en tube de bambou, est l\'instrument national de Madagascar.',
    ],
    es: [
      'Madagascar es la cuarta isla mas grande del mundo, despues de Groenlandia, Nueva Guinea y Borneo.',
      'El idioma malgache esta relacionado con los idiomas del sudeste asiatico, reflejando una antigua migracion maritima desde Borneo.',
      'El arroz es tan central en la cultura malgache que la palabra para comer es "mihinam-bary" — literalmente "comer arroz".',
      'Madagascar alberga mas de 11.000 especies de plantas que no se encuentran en ningun otro lugar de la Tierra.',
      'La valiha, una citara de tubo de bambu, es el instrumento nacional de Madagascar.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan family gatherings and confirm guests',
      'Purchase ingredients for traditional Malagasy dishes like romazava',
      'Buy new clothes for the family',
      'Check local listings for hira gasy performances',
      'Prepare rice-based dishes — the centrepiece of any Malagasy celebration',
    ],
    fr: [
      "Planifier les reunions familiales et confirmer les invites",
      'Acheter les ingredients pour les plats traditionnels malgaches comme le romazava',
      'Acheter de nouveaux vetements pour la famille',
      'Consulter les programmes locaux pour les spectacles de hira gasy',
      'Preparer des plats a base de riz — la piece maitresse de toute celebration malgache',
    ],
    es: [
      'Planificar reuniones familiares y confirmar invitados',
      'Comprar ingredientes para platos tradicionales malgaches como romazava',
      'Comprar ropa nueva para la familia',
      'Consultar los programas locales de espectaculos de hira gasy',
      'Preparar platos a base de arroz — la pieza central de cualquier celebracion malgache',
    ],
  },

  relatedHolidays: ['mg_christmas', 'mg_independence-day'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Madagascar — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in Madagascar? Live countdown to January 1, holiday info, and celebration guide.",
      keywords: ["New Year's Day Madagascar", 'Madagascar public holidays', "Jour de l'An Madagascar", "New Year's Antananarivo", 'Madagascar holidays'],
    },
    fr: {
      titleTemplate: "Jour de l'An {year} Madagascar — Compte a rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'An {year} a Madagascar ? Compte a rebours, informations et guide de celebration.",
      keywords: ["Jour de l'An Madagascar", 'jours feries Madagascar', 'Nouvel An Antananarivo', 'fetes malgaches', 'Madagascar ferie'],
    },
    es: {
      titleTemplate: 'Dia de Ano Nuevo {year} Madagascar — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Dia de Ano Nuevo {year} en Madagascar? Cuenta regresiva, informacion y guia de celebracion.',
      keywords: ['Ano Nuevo Madagascar', 'dias festivos Madagascar', 'feriados Madagascar', 'Ano Nuevo Antananarivo', 'fiestas malgaches'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in Madagascar?", fr: "Quand est le Jour de l'An {year} a Madagascar ?", es: 'Cuando es el Dia de Ano Nuevo {year} en Madagascar?' },
      answer: {
        en: "New Year's Day {year} in Madagascar is on {date}. It is always January 1 and is a national public holiday.",
        fr: "Le Jour de l'An {year} a Madagascar est le {date}. C'est toujours le 1er janvier et c'est un jour ferie national.",
        es: 'El Dia de Ano Nuevo {year} en Madagascar es el {date}. Siempre es el 1 de enero y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'What is fihavanana?', fr: "Qu'est-ce que le fihavanana ?", es: 'Que es el fihavanana?' },
      answer: {
        en: 'Fihavanana is a Malagasy cultural value meaning solidarity, kinship, and community bonds. It emphasises the importance of relationships and mutual support, and is central to how Malagasy people celebrate holidays.',
        fr: "Le fihavanana est une valeur culturelle malgache signifiant solidarite, parente et liens communautaires. Il met l'accent sur l'importance des relations et de l'entraide, et est central dans la facon dont les Malgaches celebrent les fetes.",
        es: 'El fihavanana es un valor cultural malgache que significa solidaridad, parentesco y lazos comunitarios. Enfatiza la importancia de las relaciones y el apoyo mutuo, y es central en la forma en que los malgaches celebran las festividades.',
      },
    },
    {
      question: { en: 'What is hira gasy?', fr: "Qu'est-ce que le hira gasy ?", es: 'Que es el hira gasy?' },
      answer: {
        en: 'Hira gasy is a traditional Malagasy performance art that combines music, dance, theatre, and oratory. Groups perform in colourful traditional costumes and deliver moral messages through song and storytelling.',
        fr: "Le hira gasy est un art de la scene traditionnel malgache qui combine musique, danse, theatre et art oratoire. Les groupes se produisent en costumes traditionnels colores et delivrent des messages moraux a travers le chant et le conte.",
        es: 'El hira gasy es un arte escenico tradicional malgache que combina musica, danza, teatro y oratoria. Los grupos actuan en coloridos trajes tradicionales y transmiten mensajes morales a traves del canto y la narracion.',
      },
    },
    {
      question: { en: "Is New Year's Day a public holiday in Madagascar?", fr: "Le Jour de l'An est-il un jour ferie a Madagascar ?", es: 'Es el Dia de Ano Nuevo un dia festivo en Madagascar?' },
      answer: {
        en: "Yes, New Year's Day is an official public holiday in Madagascar.",
        fr: "Oui, le Jour de l'An est un jour ferie officiel a Madagascar.",
        es: 'Si, el Dia de Ano Nuevo es un dia festivo oficial en Madagascar.',
      },
    },
  ],

  colorTheme: 'new-year',
  icon: '🎆',
};

// ---------------------------------------------------------------------------
// Martyrs' Day — March 29
// ---------------------------------------------------------------------------

const martyrsDay: HolidayData = {
  id: 'mg_martyrs-day',
  countryCode: 'mg',
  slugs: { en: 'martyrs-day', fr: 'journee-des-martyrs', es: 'dia-de-los-martires' },
  names: { en: "Martyrs' Day", fr: 'Journee des Martyrs', es: 'Dia de los Martires' },

  dateType: 'fixed',
  fixedMonth: 3,
  fixedDay: 29,

  descriptions: {
    en: "Martyrs' Day on March 29 commemorates the 1947 insurrection against French colonial rule in Madagascar. It honours the tens of thousands of Malagasy who died in the uprising and the subsequent French repression.",
    fr: "La Journee des Martyrs, le 29 mars, commemore l'insurrection de 1947 contre la domination coloniale francaise a Madagascar. Elle honore les dizaines de milliers de Malgaches qui sont morts lors du soulevement et de la repression francaise qui a suivi.",
    es: "El Dia de los Martires, el 29 de marzo, conmemora la insurreccion de 1947 contra el dominio colonial frances en Madagascar. Honra a las decenas de miles de malgaches que murieron en el levantamiento y la posterior represion francesa.",
  },

  history: {
    en: "On March 29, 1947, a massive insurrection erupted across eastern Madagascar against French colonial rule. The uprising, driven by demands for independence, was met with brutal French military repression that lasted nearly two years.\n\nThe death toll from the insurrection and its aftermath remains disputed, with estimates ranging from 11,000 to over 100,000 Malagasy killed. The French used air bombardment, summary executions, and forced displacement to suppress the rebellion, making it one of the bloodiest chapters of Madagascar's colonial history.\n\nThe leaders of the uprising, including Joseph Raseta, Joseph Ravoahangy, and Jacques Rabemananjara, were arrested and sentenced. The insurrection, though crushed, planted the seeds of the independence movement that would succeed 13 years later. Martyrs' Day is a solemn national holiday that honours the sacrifice of those who fought for Malagasy freedom.",
    fr: "Le 29 mars 1947, une insurrection massive a eclate dans l'est de Madagascar contre la domination coloniale francaise. Le soulevement, motive par des revendications d'independance, a ete confronte a une repression militaire francaise brutale qui a dure pres de deux ans.\n\nLe bilan humain de l'insurrection et de ses consequences reste conteste, avec des estimations allant de 11 000 a plus de 100 000 Malgaches tues. Les Francais ont utilise des bombardements aeriens, des executions sommaires et des deplacements forces pour reprimer la rebellion, ce qui en fait l'un des chapitres les plus sanglants de l'histoire coloniale de Madagascar.\n\nLes dirigeants du soulevement, dont Joseph Raseta, Joseph Ravoahangy et Jacques Rabemananjara, ont ete arretes et condamnes. L'insurrection, bien qu'ecrasee, a plante les graines du mouvement d'independance qui reussirait 13 ans plus tard. La Journee des Martyrs est un jour ferie national solennel qui honore le sacrifice de ceux qui se sont battus pour la liberte malgache.",
    es: "El 29 de marzo de 1947, una insurreccion masiva estallo en el este de Madagascar contra el dominio colonial frances. El levantamiento, impulsado por demandas de independencia, fue recibido con una brutal represion militar francesa que duro casi dos anos.\n\nEl numero de muertos de la insurreccion y sus consecuencias sigue siendo disputado, con estimaciones que van desde 11.000 hasta mas de 100.000 malgaches muertos. Los franceses utilizaron bombardeos aereos, ejecuciones sumarias y desplazamientos forzados para suprimir la rebelion, convirtiendolo en uno de los capitulos mas sangrientos de la historia colonial de Madagascar.\n\nLos lideres del levantamiento, incluyendo a Joseph Raseta, Joseph Ravoahangy y Jacques Rabemananjara, fueron arrestados y condenados. La insurreccion, aunque aplastada, planto las semillas del movimiento de independencia que tendria exito 13 anos despues. El Dia de los Martires es un dia festivo nacional solemne que honra el sacrificio de quienes lucharon por la libertad malgache.",
  },

  traditions: {
    en: [
      'Laying wreaths at memorials honouring the 1947 martyrs',
      'Official government ceremonies and presidential addresses',
      'Moments of silence to honour the fallen',
      'Educational events about the 1947 insurrection',
      'Community gatherings to reflect on national history',
      'Media broadcasts of documentaries about the uprising',
    ],
    fr: [
      'Deposer des gerbes de fleurs aux memoriaux honorant les martyrs de 1947',
      'Ceremonies officielles du gouvernement et discours presidentiels',
      'Minutes de silence pour honorer les disparus',
      "Evenements educatifs sur l'insurrection de 1947",
      "Rassemblements communautaires pour reflechir a l'histoire nationale",
      'Diffusions mediatiques de documentaires sur le soulevement',
    ],
    es: [
      'Depositar coronas en memoriales que honran a los martires de 1947',
      'Ceremonias oficiales del gobierno y discursos presidenciales',
      'Momentos de silencio para honrar a los caidos',
      'Eventos educativos sobre la insurreccion de 1947',
      'Reuniones comunitarias para reflexionar sobre la historia nacional',
      'Transmisiones mediaticas de documentales sobre el levantamiento',
    ],
  },

  funFacts: {
    en: [
      'The 1947 insurrection is one of the least-known anti-colonial uprisings in history, despite its enormous death toll.',
      'France did not officially acknowledge the scale of the repression until decades after the events.',
      'The three main leaders — Raseta, Ravoahangy, and Rabemananjara — were all members of the French National Assembly at the time.',
      'The insurrection began simultaneously in multiple locations across eastern Madagascar, suggesting extensive planning.',
      'Martyrs\' Day is observed with solemnity similar to Remembrance Day in other countries.',
    ],
    fr: [
      "L'insurrection de 1947 est l'un des soulevements anticoloniaux les moins connus de l'histoire, malgre son enorme bilan humain.",
      "La France n'a officiellement reconnu l'ampleur de la repression que des decennies apres les evenements.",
      "Les trois principaux dirigeants — Raseta, Ravoahangy et Rabemananjara — etaient tous deputes a l'Assemblee nationale francaise a l'epoque.",
      "L'insurrection a commence simultanement en plusieurs endroits de l'est de Madagascar, suggerant une planification extensive.",
      "La Journee des Martyrs est observee avec une solennite similaire au Jour du Souvenir dans d'autres pays.",
    ],
    es: [
      'La insurreccion de 1947 es uno de los levantamientos anticoloniales menos conocidos de la historia, a pesar de su enorme numero de muertos.',
      'Francia no reconocio oficialmente la escala de la represion hasta decadas despues de los eventos.',
      'Los tres principales lideres — Raseta, Ravoahangy y Rabemananjara — eran todos miembros de la Asamblea Nacional francesa en ese momento.',
      'La insurreccion comenzo simultaneamente en multiples ubicaciones del este de Madagascar, sugiriendo una planificacion extensa.',
      'El Dia de los Martires se observa con solemnidad similar al Dia del Recuerdo en otros paises.',
    ],
  },

  planningChecklist: {
    en: [
      'Learn about the history of the 1947 insurrection',
      'Attend official commemorative ceremonies if possible',
      'Observe moments of silence to honour the martyrs',
      'Share the history with younger family members',
      'Visit memorials and historical sites related to the insurrection',
    ],
    fr: [
      "S'informer sur l'histoire de l'insurrection de 1947",
      'Assister aux ceremonies commemoratives officielles si possible',
      'Observer des minutes de silence pour honorer les martyrs',
      "Partager l'histoire avec les plus jeunes membres de la famille",
      "Visiter les memoriaux et sites historiques lies a l'insurrection",
    ],
    es: [
      'Aprender sobre la historia de la insurreccion de 1947',
      'Asistir a las ceremonias conmemorativas oficiales si es posible',
      'Observar momentos de silencio para honrar a los martires',
      'Compartir la historia con los miembros mas jovenes de la familia',
      'Visitar memoriales y sitios historicos relacionados con la insurreccion',
    ],
  },

  relatedHolidays: ['mg_independence-day', 'mg_labour-day'],

  seo: {
    en: {
      titleTemplate: "Martyrs' Day {year} Madagascar — Countdown & History",
      descriptionTemplate: "When is Martyrs' Day {year} in Madagascar? Live countdown to March 29, 1947 insurrection history, and commemoration guide.",
      keywords: ["Martyrs' Day Madagascar", 'March 29 Madagascar', '1947 insurrection Madagascar', 'Madagascar independence history', 'Madagascar holidays'],
    },
    fr: {
      titleTemplate: 'Journee des Martyrs {year} Madagascar — Compte a rebours et histoire',
      descriptionTemplate: 'Quand est la Journee des Martyrs {year} a Madagascar ? Compte a rebours, histoire de l\'insurrection de 1947 et guide de commemoration.',
      keywords: ['Journee des Martyrs Madagascar', '29 mars Madagascar', 'insurrection 1947 Madagascar', 'histoire independance Madagascar', 'jours feries Madagascar'],
    },
    es: {
      titleTemplate: 'Dia de los Martires {year} Madagascar — Cuenta regresiva e historia',
      descriptionTemplate: 'Cuando es el Dia de los Martires {year} en Madagascar? Cuenta regresiva, historia de la insurreccion de 1947 y guia de conmemoracion.',
      keywords: ['Dia de los Martires Madagascar', '29 de marzo Madagascar', 'insurreccion 1947 Madagascar', 'historia independencia Madagascar', 'dias festivos Madagascar'],
    },
  },

  faq: [
    {
      question: { en: "When is Martyrs' Day {year} in Madagascar?", fr: 'Quand est la Journee des Martyrs {year} a Madagascar ?', es: 'Cuando es el Dia de los Martires {year} en Madagascar?' },
      answer: {
        en: "Martyrs' Day {year} in Madagascar is on {date}. It is always March 29.",
        fr: "La Journee des Martyrs {year} a Madagascar est le {date}. C'est toujours le 29 mars.",
        es: 'El Dia de los Martires {year} en Madagascar es el {date}. Siempre es el 29 de marzo.',
      },
    },
    {
      question: { en: 'What happened on March 29, 1947?', fr: "Que s'est-il passe le 29 mars 1947 ?", es: 'Que ocurrio el 29 de marzo de 1947?' },
      answer: {
        en: 'On March 29, 1947, a massive insurrection erupted across eastern Madagascar against French colonial rule. The uprising was brutally repressed, resulting in tens of thousands of Malagasy deaths.',
        fr: "Le 29 mars 1947, une insurrection massive a eclate dans l'est de Madagascar contre la domination coloniale francaise. Le soulevement a ete brutalement reprime, entrainant la mort de dizaines de milliers de Malgaches.",
        es: 'El 29 de marzo de 1947, una insurreccion masiva estallo en el este de Madagascar contra el dominio colonial frances. El levantamiento fue brutalmente reprimido, resultando en decenas de miles de muertes malgaches.',
      },
    },
    {
      question: { en: 'How many people died in the 1947 insurrection?', fr: "Combien de personnes sont mortes lors de l'insurrection de 1947 ?", es: 'Cuantas personas murieron en la insurreccion de 1947?' },
      answer: {
        en: 'The death toll remains disputed, with estimates ranging from 11,000 to over 100,000 Malagasy killed during the insurrection and subsequent French repression.',
        fr: "Le bilan humain reste conteste, avec des estimations allant de 11 000 a plus de 100 000 Malgaches tues lors de l'insurrection et de la repression francaise qui a suivi.",
        es: 'El numero de muertos sigue siendo disputado, con estimaciones que van desde 11.000 hasta mas de 100.000 malgaches muertos durante la insurreccion y la posterior represion francesa.',
      },
    },
    {
      question: { en: "Is Martyrs' Day a public holiday?", fr: "La Journee des Martyrs est-elle un jour ferie ?", es: 'Es el Dia de los Martires un dia festivo?' },
      answer: {
        en: "Yes, Martyrs' Day on March 29 is an official public holiday in Madagascar, observed with solemn commemorations.",
        fr: "Oui, la Journee des Martyrs le 29 mars est un jour ferie officiel a Madagascar, observe avec des commemorations solennelles.",
        es: 'Si, el Dia de los Martires el 29 de marzo es un dia festivo oficial en Madagascar, observado con conmemoraciones solemnes.',
      },
    },
  ],

  colorTheme: 'autumn',
  icon: '🕯️',
};

// ---------------------------------------------------------------------------
// Labour Day — May 1
// ---------------------------------------------------------------------------

const labourDay: HolidayData = {
  id: 'mg_labour-day',
  countryCode: 'mg',
  slugs: { en: 'labour-day', fr: 'fete-du-travail', es: 'dia-del-trabajo' },
  names: { en: 'Labour Day', fr: 'Fete du Travail', es: 'Dia del Trabajo' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 1,

  descriptions: {
    en: "Labour Day on May 1 is a public holiday in Madagascar honouring workers and the labour movement. Known as Fete du Travail, it features trade union rallies and celebrations of workers' contributions to the nation.",
    fr: "La Fete du Travail, le 1er mai, est un jour ferie a Madagascar honorant les travailleurs et le mouvement ouvrier. Elle est marquee par des rassemblements syndicaux et des celebrations des contributions des travailleurs a la nation.",
    es: "El Dia del Trabajo, el 1 de mayo, es un dia festivo en Madagascar que honra a los trabajadores y al movimiento obrero. Conocido como Fete du Travail, presenta concentraciones sindicales y celebraciones de las contribuciones de los trabajadores a la nacion.",
  },

  history: {
    en: "Labour Day has been observed in Madagascar since independence, following the French tradition of celebrating May 1 as International Workers' Day. Madagascar's economy is predominantly agricultural, with the majority of the workforce engaged in rice farming, vanilla cultivation, and other agricultural activities.\n\nThe labour movement in Madagascar has historically focused on issues of agricultural workers' rights, fair wages, and working conditions. Vanilla workers in the northeastern SAVA region, in particular, have been central to labour discussions, as Madagascar produces the majority of the world's vanilla.\n\nToday, Labour Day is marked by union rallies, government addresses on employment policy, and celebrations honouring workers across all sectors of the Malagasy economy.",
    fr: "La Fete du Travail est observee a Madagascar depuis l'independance, suivant la tradition francaise de celebrer le 1er mai comme Journee internationale des travailleurs. L'economie de Madagascar est principalement agricole, avec la majorite de la main-d'oeuvre engagee dans la riziculture, la culture de la vanille et d'autres activites agricoles.\n\nLe mouvement ouvrier a Madagascar s'est historiquement concentre sur les questions de droits des travailleurs agricoles, de salaires equitables et de conditions de travail. Les travailleurs de la vanille dans la region nord-est du SAVA, en particulier, ont ete au centre des discussions sur le travail, car Madagascar produit la majorite de la vanille mondiale.\n\nAujourd'hui, la Fete du Travail est marquee par des rassemblements syndicaux, des discours gouvernementaux sur la politique de l'emploi et des celebrations honorant les travailleurs de tous les secteurs de l'economie malgache.",
    es: "El Dia del Trabajo se ha observado en Madagascar desde la independencia, siguiendo la tradicion francesa de celebrar el 1 de mayo como Dia Internacional de los Trabajadores. La economia de Madagascar es predominantemente agricola, con la mayoria de la fuerza laboral dedicada al cultivo de arroz, vainilla y otras actividades agricolas.\n\nEl movimiento obrero en Madagascar se ha centrado historicamente en los derechos de los trabajadores agricolas, salarios justos y condiciones de trabajo. Los trabajadores de la vainilla en la region noreste de SAVA, en particular, han sido centrales en las discusiones laborales, ya que Madagascar produce la mayoria de la vainilla del mundo.\n\nHoy, el Dia del Trabajo se marca con concentraciones sindicales, discursos gubernamentales sobre politica de empleo y celebraciones que honran a los trabajadores de todos los sectores de la economia malgache.",
  },

  traditions: {
    en: [
      'Trade union rallies and marches in Antananarivo and other cities',
      'Government speeches addressing workers\' issues',
      'Celebrations honouring workers in agriculture, industry, and services',
      'Family gatherings and relaxation on the day off',
      'Community events and cultural performances',
    ],
    fr: [
      "Rassemblements syndicaux et marches a Antananarivo et dans d'autres villes",
      'Discours gouvernementaux traitant des questions des travailleurs',
      "Celebrations honorant les travailleurs de l'agriculture, de l'industrie et des services",
      'Reunions familiales et detente pendant le jour de conge',
      'Evenements communautaires et spectacles culturels',
    ],
    es: [
      'Concentraciones sindicales y marchas en Antananarivo y otras ciudades',
      'Discursos gubernamentales sobre temas laborales',
      'Celebraciones honrando a los trabajadores de la agricultura, industria y servicios',
      'Reuniones familiares y descanso en el dia libre',
      'Eventos comunitarios y espectaculos culturales',
    ],
  },

  funFacts: {
    en: [
      'Madagascar produces about 80% of the world\'s vanilla, making vanilla workers central to the economy.',
      'Rice farming is the primary occupation of Malagasy workers, with rice paddies covering much of the island\'s highlands.',
      'The Malagasy economy relies heavily on agriculture, which employs roughly 80% of the workforce.',
      'Madagascar\'s minimum wage is among the lowest in the world, making workers\' rights a crucial Labour Day issue.',
      'The SAVA region in northeastern Madagascar is named after its four districts and is the heartland of vanilla production.',
    ],
    fr: [
      "Madagascar produit environ 80% de la vanille mondiale, faisant des travailleurs de la vanille un element central de l'economie.",
      "La riziculture est l'occupation principale des travailleurs malgaches, avec des rizieres couvrant une grande partie des hauts plateaux de l'ile.",
      "L'economie malgache repose fortement sur l'agriculture, qui emploie environ 80% de la main-d'oeuvre.",
      "Le salaire minimum de Madagascar est parmi les plus bas au monde, faisant des droits des travailleurs une question cruciale de la Fete du Travail.",
      "La region SAVA dans le nord-est de Madagascar tire son nom de ses quatre districts et est le coeur de la production de vanille.",
    ],
    es: [
      'Madagascar produce aproximadamente el 80% de la vainilla del mundo, haciendo de los trabajadores de la vainilla un elemento central de la economia.',
      'El cultivo de arroz es la ocupacion principal de los trabajadores malgaches, con arrozales cubriendo gran parte de las tierras altas de la isla.',
      'La economia malgache depende en gran medida de la agricultura, que emplea a aproximadamente el 80% de la fuerza laboral.',
      'El salario minimo de Madagascar esta entre los mas bajos del mundo, haciendo de los derechos de los trabajadores un tema crucial del Dia del Trabajo.',
      'La region SAVA en el noreste de Madagascar lleva el nombre de sus cuatro distritos y es el corazon de la produccion de vainilla.',
    ],
  },

  planningChecklist: {
    en: [
      'Check for union rallies and events in your area',
      'Plan a day of rest and family activities',
      'Follow media coverage of Labour Day speeches',
      'Prepare a festive meal for the family',
      'Learn about workers\' rights and labour issues in Madagascar',
    ],
    fr: [
      'Verifier les rassemblements et evenements syndicaux dans votre region',
      "Planifier une journee de repos et d'activites familiales",
      'Suivre la couverture mediatique des discours de la Fete du Travail',
      'Preparer un repas festif pour la famille',
      "S'informer sur les droits des travailleurs et les questions de travail a Madagascar",
    ],
    es: [
      'Verificar las concentraciones y eventos sindicales en su area',
      'Planificar un dia de descanso y actividades familiares',
      'Seguir la cobertura mediatica de los discursos del Dia del Trabajo',
      'Preparar una comida festiva para la familia',
      'Aprender sobre los derechos de los trabajadores y temas laborales en Madagascar',
    ],
  },

  relatedHolidays: ['mg_independence-day', 'mg_martyrs-day'],

  seo: {
    en: {
      titleTemplate: 'Labour Day {year} Madagascar — Countdown & Guide',
      descriptionTemplate: 'When is Labour Day {year} in Madagascar? Live countdown to May 1, holiday info, and celebration guide.',
      keywords: ['Labour Day Madagascar', 'Fete du Travail Madagascar', 'May 1 Madagascar', 'Madagascar workers holiday', 'Madagascar public holidays'],
    },
    fr: {
      titleTemplate: 'Fete du Travail {year} Madagascar — Compte a rebours et guide',
      descriptionTemplate: 'Quand est la Fete du Travail {year} a Madagascar ? Compte a rebours, informations et guide de celebration.',
      keywords: ['Fete du Travail Madagascar', '1er mai Madagascar', 'jour ferie Madagascar', 'travailleurs Madagascar', 'jours feries Madagascar'],
    },
    es: {
      titleTemplate: 'Dia del Trabajo {year} Madagascar — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Dia del Trabajo {year} en Madagascar? Cuenta regresiva, informacion y guia de celebracion.',
      keywords: ['Dia del Trabajo Madagascar', '1 de mayo Madagascar', 'dia festivo Madagascar', 'trabajadores Madagascar', 'feriados Madagascar'],
    },
  },

  faq: [
    {
      question: { en: 'When is Labour Day {year} in Madagascar?', fr: 'Quand est la Fete du Travail {year} a Madagascar ?', es: 'Cuando es el Dia del Trabajo {year} en Madagascar?' },
      answer: {
        en: 'Labour Day {year} in Madagascar is on {date}. It is always May 1 and is a national public holiday.',
        fr: "La Fete du Travail {year} a Madagascar est le {date}. C'est toujours le 1er mai et c'est un jour ferie national.",
        es: 'El Dia del Trabajo {year} en Madagascar es el {date}. Siempre es el 1 de mayo y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'Is Labour Day a public holiday in Madagascar?', fr: 'La Fete du Travail est-elle un jour ferie a Madagascar ?', es: 'Es el Dia del Trabajo un dia festivo en Madagascar?' },
      answer: {
        en: 'Yes, Labour Day is an official public holiday in Madagascar.',
        fr: 'Oui, la Fete du Travail est un jour ferie officiel a Madagascar.',
        es: 'Si, el Dia del Trabajo es un dia festivo oficial en Madagascar.',
      },
    },
    {
      question: { en: 'Why is vanilla important for Madagascar\'s economy?', fr: "Pourquoi la vanille est-elle importante pour l'economie de Madagascar ?", es: 'Por que es importante la vainilla para la economia de Madagascar?' },
      answer: {
        en: 'Madagascar produces about 80% of the world\'s natural vanilla, making it the country\'s most valuable export. The vanilla industry employs thousands of workers, primarily in the SAVA region of northeastern Madagascar.',
        fr: "Madagascar produit environ 80% de la vanille naturelle mondiale, ce qui en fait l'exportation la plus precieuse du pays. L'industrie de la vanille emploie des milliers de travailleurs, principalement dans la region SAVA du nord-est de Madagascar.",
        es: 'Madagascar produce aproximadamente el 80% de la vainilla natural del mundo, convirtiendola en la exportacion mas valiosa del pais. La industria de la vainilla emplea a miles de trabajadores, principalmente en la region SAVA del noreste de Madagascar.',
      },
    },
    {
      question: { en: 'What is the main occupation in Madagascar?', fr: "Quelle est l'occupation principale a Madagascar ?", es: 'Cual es la ocupacion principal en Madagascar?' },
      answer: {
        en: 'Agriculture is the main occupation in Madagascar, employing roughly 80% of the workforce. Rice farming is the most common activity, followed by vanilla, coffee, and clove cultivation.',
        fr: "L'agriculture est l'occupation principale a Madagascar, employant environ 80% de la main-d'oeuvre. La riziculture est l'activite la plus courante, suivie de la culture de la vanille, du cafe et du girofle.",
        es: 'La agricultura es la ocupacion principal en Madagascar, empleando a aproximadamente el 80% de la fuerza laboral. El cultivo de arroz es la actividad mas comun, seguida del cultivo de vainilla, cafe y clavo.',
      },
    },
  ],

  colorTheme: 'spring',
  icon: '⚒️',
};

// ---------------------------------------------------------------------------
// Independence Day — June 26
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'mg_independence-day',
  countryCode: 'mg',
  slugs: { en: 'independence-day', fr: 'fete-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Fete de l'Independance", es: 'Dia de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 6,
  fixedDay: 26,

  descriptions: {
    en: "Independence Day on June 26 commemorates Madagascar's independence from France in 1960. It is the most important national holiday, celebrated with military parades, hira gasy performances, traditional festivities, and patriotic ceremonies.",
    fr: "La Fete de l'Independance, le 26 juin, commemore l'independance de Madagascar vis-a-vis de la France en 1960. C'est la fete nationale la plus importante, celebree par des defiles militaires, des spectacles de hira gasy, des festivites traditionnelles et des ceremonies patriotiques.",
    es: "El Dia de la Independencia, el 26 de junio, conmemora la independencia de Madagascar de Francia en 1960. Es la fiesta nacional mas importante, celebrada con desfiles militares, espectaculos de hira gasy, festividades tradicionales y ceremonias patrioticas.",
  },

  history: {
    en: "Madagascar gained independence from France on June 26, 1960, after decades of colonial rule. The independence movement was deeply influenced by the sacrifice of the 1947 insurrection martyrs, whose uprising had demonstrated the Malagasy people's determination to be free.\n\nPhilibert Tsiranana became the first president of the Malagasy Republic. The transition to independence was relatively peaceful, following negotiations with France. However, the memory of the 1947 repression cast a long shadow over relations with the former colonial power.\n\nIndependence Day is celebrated across Madagascar with great enthusiasm. The festivities include military parades, traditional hira gasy performances, zebu wrestling (tolon'omby), and communal feasts. The celebration reflects the unique Malagasy identity — a blend of Southeast Asian, African, and French influences.",
    fr: "Madagascar a obtenu son independance de la France le 26 juin 1960, apres des decennies de domination coloniale. Le mouvement d'independance a ete profondement influence par le sacrifice des martyrs de l'insurrection de 1947, dont le soulevement avait demontre la determination du peuple malgache a etre libre.\n\nPhilibert Tsiranana est devenu le premier president de la Republique malgache. La transition vers l'independance a ete relativement pacifique, suite a des negociations avec la France. Cependant, le souvenir de la repression de 1947 a projete une longue ombre sur les relations avec l'ancienne puissance coloniale.\n\nLa Fete de l'Independance est celebree a travers Madagascar avec grand enthousiasme. Les festivites comprennent des defiles militaires, des spectacles traditionnels de hira gasy, des luttes de zebus (tolon'omby) et des festins communautaires. La celebration reflete l'identite malgache unique — un melange d'influences d'Asie du Sud-Est, africaines et francaises.",
    es: "Madagascar obtuvo su independencia de Francia el 26 de junio de 1960, despues de decadas de dominio colonial. El movimiento de independencia estuvo profundamente influenciado por el sacrificio de los martires de la insurreccion de 1947, cuyo levantamiento habia demostrado la determinacion del pueblo malgache de ser libre.\n\nPhilibert Tsiranana se convirtio en el primer presidente de la Republica Malgache. La transicion a la independencia fue relativamente pacifica, tras negociaciones con Francia. Sin embargo, el recuerdo de la represion de 1947 proyecto una larga sombra sobre las relaciones con la antigua potencia colonial.\n\nEl Dia de la Independencia se celebra en toda Madagascar con gran entusiasmo. Las festividades incluyen desfiles militares, espectaculos tradicionales de hira gasy, lucha de cebus (tolon'omby) y banquetes comunitarios. La celebracion refleja la identidad malgache unica — una mezcla de influencias del sudeste asiatico, africanas y francesas.",
  },

  traditions: {
    en: [
      'Military parades in Antananarivo and regional capitals',
      'Hira gasy performances featuring traditional music, dance, and oratory',
      'Zebu wrestling (tolon\'omby) competitions',
      'Communal feasts featuring rice, zebu meat, and romazava',
      'Displaying the Malagasy flag on homes and buildings',
      'Presidential address to the nation',
      'Traditional moraingy (bare-fist boxing) displays',
    ],
    fr: [
      'Defiles militaires a Antananarivo et dans les capitales regionales',
      'Spectacles de hira gasy mettant en vedette musique, danse et art oratoire traditionnels',
      "Competitions de lutte de zebus (tolon'omby)",
      'Festins communautaires avec du riz, de la viande de zebu et du romazava',
      'Afficher le drapeau malgache sur les maisons et les batiments',
      'Discours presidentiel a la nation',
      'Demonstrations de moraingy (boxe a mains nues) traditionnel',
    ],
    es: [
      'Desfiles militares en Antananarivo y capitales regionales',
      'Espectaculos de hira gasy con musica, danza y oratoria tradicionales',
      "Competiciones de lucha de cebus (tolon'omby)",
      'Banquetes comunitarios con arroz, carne de cebu y romazava',
      'Exhibir la bandera malgache en hogares y edificios',
      'Discurso presidencial a la nacion',
      'Exhibiciones de moraingy (boxeo a punos desnudos) tradicional',
    ],
  },

  funFacts: {
    en: [
      'Madagascar\'s national dish, romazava (a mixed greens and meat stew), is a centrepiece of Independence Day feasts.',
      'Zebu cattle are sacred in Malagasy culture and zebu wrestling is a popular Independence Day tradition.',
      'Madagascar\'s flag features white, red, and green — symbolising purity, sovereignty, and hope.',
      'Hira gasy performances can last for hours and feature competing troupes of musicians and orators.',
      'Madagascar is the only country in the world where lemurs live in the wild.',
    ],
    fr: [
      "Le plat national de Madagascar, le romazava (un ragout de verdures et de viande melangees), est la piece maitresse des festins de la Fete de l'Independance.",
      "Les zebus sont sacres dans la culture malgache et la lutte de zebus est une tradition populaire de la Fete de l'Independance.",
      "Le drapeau de Madagascar presente du blanc, du rouge et du vert — symbolisant la purete, la souverainete et l'espoir.",
      'Les spectacles de hira gasy peuvent durer des heures et mettent en scene des troupes concurrentes de musiciens et d\'orateurs.',
      'Madagascar est le seul pays au monde ou les lemuriens vivent a l\'etat sauvage.',
    ],
    es: [
      'El plato nacional de Madagascar, el romazava (un guiso de verduras mixtas y carne), es la pieza central de los banquetes del Dia de la Independencia.',
      'Los cebus son sagrados en la cultura malgache y la lucha de cebus es una tradicion popular del Dia de la Independencia.',
      'La bandera de Madagascar presenta blanco, rojo y verde — simbolizando pureza, soberania y esperanza.',
      'Los espectaculos de hira gasy pueden durar horas y presentan troupes competidoras de musicos y oradores.',
      'Madagascar es el unico pais del mundo donde los lemures viven en estado salvaje.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan to attend the military parade in Antananarivo or regional events',
      'Display the Malagasy flag at home',
      'Prepare romazava and other traditional dishes for family celebrations',
      'Attend hira gasy performances and cultural events',
      'Learn about independence history to share with children',
    ],
    fr: [
      "Prevoir d'assister au defile militaire a Antananarivo ou aux evenements regionaux",
      'Afficher le drapeau malgache a la maison',
      'Preparer du romazava et d\'autres plats traditionnels pour les celebrations familiales',
      'Assister aux spectacles de hira gasy et evenements culturels',
      "S'informer sur l'histoire de l'independance pour la partager avec les enfants",
    ],
    es: [
      'Planificar asistir al desfile militar en Antananarivo o a eventos regionales',
      'Exhibir la bandera malgache en casa',
      'Preparar romazava y otros platos tradicionales para las celebraciones familiares',
      'Asistir a espectaculos de hira gasy y eventos culturales',
      'Aprender sobre la historia de la independencia para compartir con los ninos',
    ],
  },

  relatedHolidays: ['mg_martyrs-day', 'mg_labour-day'],

  seo: {
    en: {
      titleTemplate: 'Madagascar Independence Day {year} — Countdown & History',
      descriptionTemplate: 'When is Madagascar Independence Day {year}? Live countdown to June 26, independence history, hira gasy, and celebration guide.',
      keywords: ['Madagascar Independence Day', 'June 26 Madagascar', 'Madagascar national holiday', 'hira gasy', 'Madagascar holidays'],
    },
    fr: {
      titleTemplate: "Fete de l'Independance de Madagascar {year} — Compte a rebours et histoire",
      descriptionTemplate: "Quand est la Fete de l'Independance de Madagascar {year} ? Compte a rebours, histoire, hira gasy et guide de celebration.",
      keywords: ["Fete de l'Independance Madagascar", '26 juin Madagascar', 'fete nationale Madagascar', 'hira gasy', 'jours feries Madagascar'],
    },
    es: {
      titleTemplate: 'Dia de la Independencia de Madagascar {year} — Cuenta regresiva e historia',
      descriptionTemplate: 'Cuando es el Dia de la Independencia de Madagascar {year}? Cuenta regresiva, historia, hira gasy y guia de celebracion.',
      keywords: ['Dia de la Independencia Madagascar', '26 de junio Madagascar', 'fiesta nacional Madagascar', 'hira gasy', 'dias festivos Madagascar'],
    },
  },

  faq: [
    {
      question: { en: 'When is Madagascar Independence Day {year}?', fr: "Quand est la Fete de l'Independance de Madagascar {year} ?", es: 'Cuando es el Dia de la Independencia de Madagascar {year}?' },
      answer: {
        en: 'Madagascar Independence Day {year} is on {date}. It is always June 26.',
        fr: "La Fete de l'Independance de Madagascar {year} est le {date}. C'est toujours le 26 juin.",
        es: 'El Dia de la Independencia de Madagascar {year} es el {date}. Siempre es el 26 de junio.',
      },
    },
    {
      question: { en: 'What is romazava?', fr: "Qu'est-ce que le romazava ?", es: 'Que es el romazava?' },
      answer: {
        en: "Romazava is Madagascar's national dish — a stew made with mixed greens (bredes), meat (typically zebu beef), tomatoes, and ginger, served with rice. It is the centrepiece of festive meals, including Independence Day celebrations.",
        fr: "Le romazava est le plat national de Madagascar — un ragout fait de verdures melangees (bredes), de viande (generalement du zebu), de tomates et de gingembre, servi avec du riz. C'est la piece maitresse des repas festifs, y compris les celebrations de la Fete de l'Independance.",
        es: 'El romazava es el plato nacional de Madagascar — un guiso hecho con verduras mixtas (bredes), carne (tipicamente carne de cebu), tomates y jengibre, servido con arroz. Es la pieza central de las comidas festivas, incluyendo las celebraciones del Dia de la Independencia.',
      },
    },
    {
      question: { en: 'What is zebu wrestling?', fr: "Qu'est-ce que la lutte de zebus ?", es: 'Que es la lucha de cebus?' },
      answer: {
        en: "Zebu wrestling (tolon'omby) is a traditional Malagasy sport where young men wrestle zebu cattle as a test of strength and bravery. It is a popular spectacle at Independence Day celebrations and other festive occasions.",
        fr: "La lutte de zebus (tolon'omby) est un sport traditionnel malgache ou de jeunes hommes luttent contre des zebus comme epreuve de force et de bravoure. C'est un spectacle populaire lors des celebrations de la Fete de l'Independance et d'autres occasions festives.",
        es: "La lucha de cebus (tolon'omby) es un deporte tradicional malgache donde jovenes luchan contra cebus como prueba de fuerza y valentia. Es un espectaculo popular en las celebraciones del Dia de la Independencia y otras ocasiones festivas.",
      },
    },
    {
      question: { en: 'Is Independence Day the biggest holiday in Madagascar?', fr: "La Fete de l'Independance est-elle la plus grande fete a Madagascar ?", es: 'Es el Dia de la Independencia la fiesta mas grande en Madagascar?' },
      answer: {
        en: 'Yes, Independence Day on June 26 is the most important national holiday in Madagascar, featuring the grandest celebrations including military parades, hira gasy performances, and zebu wrestling.',
        fr: "Oui, la Fete de l'Independance le 26 juin est la fete nationale la plus importante de Madagascar, avec les celebrations les plus grandioses, y compris des defiles militaires, des spectacles de hira gasy et de la lutte de zebus.",
        es: 'Si, el Dia de la Independencia el 26 de junio es la fiesta nacional mas importante de Madagascar, con las celebraciones mas grandiosas incluyendo desfiles militares, espectaculos de hira gasy y lucha de cebus.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '🇲🇬',
};

// ---------------------------------------------------------------------------
// Assumption of Mary — August 15
// ---------------------------------------------------------------------------

const assumption: HolidayData = {
  id: 'mg_assumption',
  countryCode: 'mg',
  slugs: { en: 'assumption-of-mary', fr: 'assomption', es: 'asuncion-de-maria' },
  names: { en: 'Assumption of Mary', fr: 'Assomption', es: 'Asuncion de Maria' },

  dateType: 'fixed',
  fixedMonth: 8,
  fixedDay: 15,

  descriptions: {
    en: "The Assumption of Mary on August 15 is a public holiday in Madagascar, particularly important for the Catholic Malagasy population. It is celebrated with special masses, processions, and community gatherings across the island.",
    fr: "L'Assomption de Marie, le 15 aout, est un jour ferie a Madagascar, particulierement important pour la population malgache catholique. Elle est celebree par des messes speciales, des processions et des rassemblements communautaires a travers l'ile.",
    es: "La Asuncion de Maria, el 15 de agosto, es un dia festivo en Madagascar, particularmente importante para la poblacion malgache catolica. Se celebra con misas especiales, procesiones y reuniones comunitarias en toda la isla.",
  },

  history: {
    en: "The Assumption has been observed in Madagascar since the introduction of Christianity by European missionaries in the 19th century. Catholicism was brought primarily by French missionaries and has become one of the major religions on the island, with approximately 25% of the population identifying as Catholic.\n\nThe holiday blends Catholic tradition with Malagasy cultural elements. In many communities, the celebration incorporates traditional beliefs about ancestors and the spiritual world, reflecting the unique syncretism of Malagasy religious practice.\n\nChurches across Madagascar hold special masses and processions on August 15, with some of the largest celebrations taking place at the Cathedrale d'Andohalo in Antananarivo. The day is also an occasion for family gatherings and community festivals.",
    fr: "L'Assomption est observee a Madagascar depuis l'introduction du christianisme par les missionnaires europeens au XIXe siecle. Le catholicisme a ete apporte principalement par les missionnaires francais et est devenu l'une des principales religions de l'ile, avec environ 25% de la population se declarant catholique.\n\nCette fete melange la tradition catholique avec des elements culturels malgaches. Dans de nombreuses communautes, la celebration incorpore des croyances traditionnelles sur les ancetres et le monde spirituel, refletant le syncretisme unique de la pratique religieuse malgache.\n\nLes eglises a travers Madagascar organisent des messes speciales et des processions le 15 aout, certaines des plus grandes celebrations ayant lieu a la Cathedrale d'Andohalo a Antananarivo. Ce jour est aussi l'occasion de reunions familiales et de festivals communautaires.",
    es: "La Asuncion se ha observado en Madagascar desde la introduccion del cristianismo por misioneros europeos en el siglo XIX. El catolicismo fue traido principalmente por misioneros franceses y se ha convertido en una de las principales religiones de la isla, con aproximadamente el 25% de la poblacion identificandose como catolica.\n\nLa festividad mezcla la tradicion catolica con elementos culturales malgaches. En muchas comunidades, la celebracion incorpora creencias tradicionales sobre los ancestros y el mundo espiritual, reflejando el sincretismo unico de la practica religiosa malgache.\n\nLas iglesias de toda Madagascar celebran misas especiales y procesiones el 15 de agosto, con algunas de las mayores celebraciones teniendo lugar en la Catedral de Andohalo en Antananarivo. El dia es tambien una ocasion para reuniones familiares y festivales comunitarios.",
  },

  traditions: {
    en: [
      'Attending special masses at churches across Madagascar',
      'Religious processions through cities and villages',
      'Pilgrimage to major churches and cathedrals',
      'Family gatherings and festive meals',
      'Community festivals combining Catholic and traditional Malagasy elements',
      'Singing hymns in Malagasy and French',
    ],
    fr: [
      'Assister a des messes speciales dans les eglises a travers Madagascar',
      'Processions religieuses a travers les villes et villages',
      'Pelerinage aux grandes eglises et cathedrales',
      'Reunions familiales et repas festifs',
      'Festivals communautaires combinant elements catholiques et malgaches traditionnels',
      'Chanter des hymnes en malgache et en francais',
    ],
    es: [
      'Asistir a misas especiales en iglesias de toda Madagascar',
      'Procesiones religiosas por ciudades y pueblos',
      'Peregrinacion a grandes iglesias y catedrales',
      'Reuniones familiares y comidas festivas',
      'Festivales comunitarios que combinan elementos catolicos y malgaches tradicionales',
      'Cantar himnos en malgache y frances',
    ],
  },

  funFacts: {
    en: [
      'Madagascar has a unique religious landscape where Christianity, Islam, and traditional ancestor worship coexist.',
      'About 25% of Malagasy are Catholic, making Catholicism one of the largest religious groups on the island.',
      'The Cathedral of Andohalo in Antananarivo is one of the most important Catholic churches in Madagascar.',
      'Malagasy Catholic practice often incorporates elements of traditional ancestor veneration.',
      'French missionaries first arrived in Madagascar in the 1600s, but Catholicism grew significantly during the colonial period.',
    ],
    fr: [
      "Madagascar a un paysage religieux unique ou le christianisme, l'islam et le culte traditionnel des ancetres coexistent.",
      "Environ 25% des Malgaches sont catholiques, faisant du catholicisme l'un des plus grands groupes religieux de l'ile.",
      "La Cathedrale d'Andohalo a Antananarivo est l'une des eglises catholiques les plus importantes de Madagascar.",
      "La pratique catholique malgache incorpore souvent des elements de veneration traditionnelle des ancetres.",
      "Les missionnaires francais sont arrives a Madagascar dans les annees 1600, mais le catholicisme s'est considerablement developpe pendant la periode coloniale.",
    ],
    es: [
      'Madagascar tiene un paisaje religioso unico donde el cristianismo, el islam y el culto tradicional a los ancestros coexisten.',
      'Aproximadamente el 25% de los malgaches son catolicos, haciendo del catolicismo uno de los grupos religiosos mas grandes de la isla.',
      'La Catedral de Andohalo en Antananarivo es una de las iglesias catolicas mas importantes de Madagascar.',
      'La practica catolica malgache a menudo incorpora elementos de veneracion tradicional de los ancestros.',
      'Los misioneros franceses llegaron por primera vez a Madagascar en los anos 1600, pero el catolicismo crecio significativamente durante el periodo colonial.',
    ],
  },

  planningChecklist: {
    en: [
      'Check mass schedules at local churches for Assumption Day services',
      'Plan to attend religious processions',
      'Prepare festive meals for family gatherings',
      'Visit the Cathedral of Andohalo if in Antananarivo',
      'Arrange family visits and community celebrations',
    ],
    fr: [
      "Verifier les horaires des messes dans les eglises locales pour les services de l'Assomption",
      "Prevoir d'assister aux processions religieuses",
      'Preparer des repas festifs pour les reunions familiales',
      "Visiter la Cathedrale d'Andohalo si vous etes a Antananarivo",
      'Organiser les visites familiales et les celebrations communautaires',
    ],
    es: [
      'Consultar los horarios de misas en las iglesias locales para los servicios de la Asuncion',
      'Planificar asistir a procesiones religiosas',
      'Preparar comidas festivas para reuniones familiares',
      'Visitar la Catedral de Andohalo si esta en Antananarivo',
      'Organizar visitas familiares y celebraciones comunitarias',
    ],
  },

  relatedHolidays: ['mg_christmas', 'mg_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Assumption of Mary {year} Madagascar — Countdown & Guide',
      descriptionTemplate: 'When is the Assumption {year} in Madagascar? Live countdown to August 15, Catholic traditions, and celebration guide.',
      keywords: ['Assumption Madagascar', 'August 15 Madagascar', 'Madagascar Catholic holidays', 'Assomption Madagascar', 'Madagascar holidays'],
    },
    fr: {
      titleTemplate: 'Assomption {year} Madagascar — Compte a rebours et guide',
      descriptionTemplate: "Quand est l'Assomption {year} a Madagascar ? Compte a rebours, traditions catholiques et guide de celebration.",
      keywords: ['Assomption Madagascar', '15 aout Madagascar', 'fetes catholiques Madagascar', 'jours feries Madagascar', 'Madagascar ferie'],
    },
    es: {
      titleTemplate: 'Asuncion de Maria {year} Madagascar — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es la Asuncion {year} en Madagascar? Cuenta regresiva, tradiciones catolicas y guia de celebracion.',
      keywords: ['Asuncion Madagascar', '15 de agosto Madagascar', 'fiestas catolicas Madagascar', 'dias festivos Madagascar', 'Madagascar feriados'],
    },
  },

  faq: [
    {
      question: { en: 'When is the Assumption {year} in Madagascar?', fr: "Quand est l'Assomption {year} a Madagascar ?", es: 'Cuando es la Asuncion {year} en Madagascar?' },
      answer: {
        en: 'The Assumption {year} in Madagascar is on {date}. It is always August 15.',
        fr: "L'Assomption {year} a Madagascar est le {date}. C'est toujours le 15 aout.",
        es: 'La Asuncion {year} en Madagascar es el {date}. Siempre es el 15 de agosto.',
      },
    },
    {
      question: { en: 'Is the Assumption a public holiday in Madagascar?', fr: "L'Assomption est-elle un jour ferie a Madagascar ?", es: 'Es la Asuncion un dia festivo en Madagascar?' },
      answer: {
        en: 'Yes, the Assumption of Mary on August 15 is an official public holiday in Madagascar.',
        fr: "Oui, l'Assomption de Marie le 15 aout est un jour ferie officiel a Madagascar.",
        es: 'Si, la Asuncion de Maria el 15 de agosto es un dia festivo oficial en Madagascar.',
      },
    },
    {
      question: { en: 'What percentage of Madagascar is Catholic?', fr: 'Quel pourcentage de Madagascar est catholique ?', es: 'Que porcentaje de Madagascar es catolico?' },
      answer: {
        en: 'Approximately 25% of the Malagasy population is Catholic, with another 20% belonging to Protestant churches. Traditional beliefs and Islam also have significant followings.',
        fr: "Environ 25% de la population malgache est catholique, avec 20% supplementaires appartenant a des eglises protestantes. Les croyances traditionnelles et l'islam ont egalement des adeptes significatifs.",
        es: 'Aproximadamente el 25% de la poblacion malgache es catolica, con otro 20% perteneciendo a iglesias protestantes. Las creencias tradicionales y el islam tambien tienen seguidores significativos.',
      },
    },
    {
      question: { en: 'Where is the main Assumption celebration?', fr: "Ou se trouve la principale celebration de l'Assomption ?", es: 'Donde esta la principal celebracion de la Asuncion?' },
      answer: {
        en: 'One of the largest Assumption celebrations takes place at the Cathedral of Andohalo in Antananarivo, the capital of Madagascar. Churches across the island also hold special services and processions.',
        fr: "L'une des plus grandes celebrations de l'Assomption a lieu a la Cathedrale d'Andohalo a Antananarivo, la capitale de Madagascar. Les eglises a travers l'ile organisent egalement des services speciaux et des processions.",
        es: 'Una de las mayores celebraciones de la Asuncion tiene lugar en la Catedral de Andohalo en Antananarivo, la capital de Madagascar. Las iglesias de toda la isla tambien celebran servicios especiales y procesiones.',
      },
    },
  ],

  colorTheme: 'spring',
  icon: '✝️',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'mg_christmas',
  countryCode: 'mg',
  slugs: { en: 'christmas', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noel', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: "Christmas Day on December 25, known as Noely in Malagasy, is a public holiday in Madagascar. It is celebrated with church services, family feasts, and community gatherings, blending Christian traditions with Malagasy cultural customs.",
    fr: "Le jour de Noel, le 25 decembre, connu sous le nom de Noely en malgache, est un jour ferie a Madagascar. Il est celebre par des services religieux, des festins familiaux et des rassemblements communautaires, melant traditions chretiennes et coutumes culturelles malgaches.",
    es: "El dia de Navidad, el 25 de diciembre, conocido como Noely en malgache, es un dia festivo en Madagascar. Se celebra con servicios religiosos, banquetes familiares y reuniones comunitarias, mezclando tradiciones cristianas con costumbres culturales malgaches.",
  },

  history: {
    en: "Christmas has been celebrated in Madagascar since the arrival of European missionaries. The holiday, called Noely in the Malagasy language, has become one of the most popular celebrations on the island, embraced by both Christians and many non-Christians as a festive occasion.\n\nMalagasy Christmas traditions blend French influences with local customs. The celebration falls during the southern hemisphere's summer, meaning warm weather, fresh tropical fruits, and outdoor gatherings are part of the festivities.\n\nChristmas in Madagascar places strong emphasis on community and the value of fihavanana. Churches hold vibrant services with singing in Malagasy, and families gather for elaborate meals centred around rice and zebu meat. The holiday also features gift-giving, particularly for children.",
    fr: "Noel est celebre a Madagascar depuis l'arrivee des missionnaires europeens. Cette fete, appelee Noely en langue malgache, est devenue l'une des celebrations les plus populaires de l'ile, adoptee par les chretiens et de nombreux non-chretiens comme une occasion festive.\n\nLes traditions de Noel malgaches melangent les influences francaises avec les coutumes locales. La celebration tombe pendant l'ete de l'hemisphere sud, ce qui signifie que le temps chaud, les fruits tropicaux frais et les rassemblements en plein air font partie des festivites.\n\nNoel a Madagascar met fortement l'accent sur la communaute et la valeur du fihavanana. Les eglises organisent des services vibrants avec des chants en malgache, et les familles se reunissent pour des repas elabores centres sur le riz et la viande de zebu. La fete comprend egalement des echanges de cadeaux, en particulier pour les enfants.",
    es: "La Navidad se celebra en Madagascar desde la llegada de los misioneros europeos. La festividad, llamada Noely en el idioma malgache, se ha convertido en una de las celebraciones mas populares de la isla, acogida tanto por los cristianos como por muchos no cristianos como una ocasion festiva.\n\nLas tradiciones navidenas malgaches mezclan influencias francesas con costumbres locales. La celebracion cae durante el verano del hemisferio sur, lo que significa que el clima calido, las frutas tropicales frescas y las reuniones al aire libre son parte de las festividades.\n\nLa Navidad en Madagascar pone un fuerte enfasis en la comunidad y el valor del fihavanana. Las iglesias celebran servicios vibrantes con cantos en malgache, y las familias se reunen para comidas elaboradas centradas en arroz y carne de cebu. La festividad tambien incluye intercambio de regalos, particularmente para los ninos.",
  },

  traditions: {
    en: [
      'Attending church services with singing in Malagasy and French',
      'Preparing festive meals featuring rice, zebu meat, and tropical fruits',
      'Exchanging gifts, especially for children',
      'Decorating homes with tropical flowers and greenery',
      'Community celebrations and outdoor gatherings',
      'Singing Noely (Christmas) songs in Malagasy',
    ],
    fr: [
      'Assister aux services religieux avec des chants en malgache et en francais',
      'Preparer des repas festifs avec du riz, de la viande de zebu et des fruits tropicaux',
      'Echanger des cadeaux, surtout pour les enfants',
      'Decorer les maisons avec des fleurs tropicales et de la verdure',
      'Celebrations communautaires et rassemblements en plein air',
      'Chanter des chansons de Noely (Noel) en malgache',
    ],
    es: [
      'Asistir a servicios religiosos con cantos en malgache y frances',
      'Preparar comidas festivas con arroz, carne de cebu y frutas tropicales',
      'Intercambiar regalos, especialmente para los ninos',
      'Decorar hogares con flores tropicales y verdor',
      'Celebraciones comunitarias y reuniones al aire libre',
      'Cantar canciones de Noely (Navidad) en malgache',
    ],
  },

  funFacts: {
    en: [
      'Christmas in Madagascar falls during summer, with temperatures often above 25°C (77°F).',
      'The Malagasy word for Christmas is "Noely," derived from the French "Noel."',
      'Lychees and mangoes are in season during Christmas in Madagascar, making them popular holiday treats.',
      'Many Malagasy churches feature vibrant Christmas services with traditional music and dancing.',
      'Rice is served at every Malagasy Christmas meal — it is the absolute centrepiece of Malagasy cuisine.',
    ],
    fr: [
      "Noel a Madagascar tombe pendant l'ete, avec des temperatures depassant souvent 25°C.",
      'Le mot malgache pour Noel est "Noely", derive du francais "Noel".',
      'Les litchis et les mangues sont de saison pendant Noel a Madagascar, ce qui en fait des friandises de vacances populaires.',
      'De nombreuses eglises malgaches proposent des services de Noel vibrants avec de la musique traditionnelle et de la danse.',
      'Le riz est servi a chaque repas de Noel malgache — c\'est la piece maitresse absolue de la cuisine malgache.',
    ],
    es: [
      'La Navidad en Madagascar cae durante el verano, con temperaturas que a menudo superan los 25°C.',
      'La palabra malgache para Navidad es "Noely", derivada del frances "Noel".',
      'Los lichis y los mangos estan en temporada durante la Navidad en Madagascar, convirtiendolos en dulces festivos populares.',
      'Muchas iglesias malgaches presentan vibrantes servicios navidenos con musica tradicional y baile.',
      'El arroz se sirve en cada comida navidena malgache — es la pieza central absoluta de la cocina malgache.',
    ],
  },

  planningChecklist: {
    en: [
      'Check church service schedules for Christmas Eve and Christmas Day',
      'Purchase gifts for children and family members',
      'Prepare ingredients for festive meals with rice, zebu meat, and tropical fruits',
      'Decorate the home with tropical flowers',
      'Plan family gatherings and community celebrations',
    ],
    fr: [
      'Verifier les horaires des services religieux pour le reveillon et le jour de Noel',
      'Acheter des cadeaux pour les enfants et les membres de la famille',
      'Preparer les ingredients pour les repas festifs avec du riz, de la viande de zebu et des fruits tropicaux',
      'Decorer la maison avec des fleurs tropicales',
      'Planifier les reunions familiales et les celebrations communautaires',
    ],
    es: [
      'Consultar los horarios de servicios religiosos para Nochebuena y el dia de Navidad',
      'Comprar regalos para los ninos y miembros de la familia',
      'Preparar ingredientes para comidas festivas con arroz, carne de cebu y frutas tropicales',
      'Decorar el hogar con flores tropicales',
      'Planificar reuniones familiares y celebraciones comunitarias',
    ],
  },

  relatedHolidays: ['mg_new-years-day', 'mg_assumption'],

  seo: {
    en: {
      titleTemplate: 'Christmas Day {year} Madagascar — Countdown & Guide',
      descriptionTemplate: 'When is Christmas {year} in Madagascar? Live countdown to December 25, Noely traditions, and celebration guide.',
      keywords: ['Christmas Madagascar', 'Noely Madagascar', 'Noel Madagascar', 'December 25 Madagascar', 'Madagascar holidays'],
    },
    fr: {
      titleTemplate: 'Noel {year} Madagascar — Compte a rebours et guide',
      descriptionTemplate: 'Quand est Noel {year} a Madagascar ? Compte a rebours, traditions de Noely et guide de celebration.',
      keywords: ['Noel Madagascar', 'Noely Madagascar', '25 decembre Madagascar', 'Noel Antananarivo', 'jours feries Madagascar'],
    },
    es: {
      titleTemplate: 'Navidad {year} Madagascar — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es Navidad {year} en Madagascar? Cuenta regresiva, tradiciones de Noely y guia de celebracion.',
      keywords: ['Navidad Madagascar', 'Noely Madagascar', '25 de diciembre Madagascar', 'Navidad Antananarivo', 'dias festivos Madagascar'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in Madagascar?', fr: 'Quand est Noel {year} a Madagascar ?', es: 'Cuando es Navidad {year} en Madagascar?' },
      answer: {
        en: 'Christmas {year} in Madagascar is on {date}. It is always December 25 and is a national public holiday.',
        fr: "Noel {year} a Madagascar est le {date}. C'est toujours le 25 decembre et c'est un jour ferie national.",
        es: 'Navidad {year} en Madagascar es el {date}. Siempre es el 25 de diciembre y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'What is Noely?', fr: "Qu'est-ce que Noely ?", es: 'Que es Noely?' },
      answer: {
        en: 'Noely is the Malagasy word for Christmas, derived from the French word "Noel." It is widely used in Madagascar to refer to the Christmas holiday.',
        fr: 'Noely est le mot malgache pour Noel. Il est largement utilise a Madagascar pour designer la fete de Noel.',
        es: 'Noely es la palabra malgache para Navidad, derivada de la palabra francesa "Noel." Es ampliamente utilizada en Madagascar para referirse a la festividad navidena.',
      },
    },
    {
      question: { en: 'Is Christmas during summer in Madagascar?', fr: 'Noel est-il pendant l\'ete a Madagascar ?', es: 'La Navidad es durante el verano en Madagascar?' },
      answer: {
        en: 'Yes, Madagascar is in the southern hemisphere, so Christmas falls during summer. Temperatures are warm, and tropical fruits like lychees and mangoes are in season.',
        fr: "Oui, Madagascar est dans l'hemisphere sud, donc Noel tombe pendant l'ete. Les temperatures sont chaudes et les fruits tropicaux comme les litchis et les mangues sont de saison.",
        es: 'Si, Madagascar esta en el hemisferio sur, por lo que la Navidad cae durante el verano. Las temperaturas son calidas y las frutas tropicales como lichis y mangos estan en temporada.',
      },
    },
    {
      question: { en: 'What is a typical Malagasy Christmas meal?', fr: 'Quel est un repas de Noel malgache typique ?', es: 'Cual es una comida navidena tipica malgache?' },
      answer: {
        en: 'A typical Malagasy Christmas meal centres around rice (as always in Madagascar), served with zebu meat, romazava, chicken, and fresh tropical fruits like lychees and mangoes for dessert.',
        fr: "Un repas de Noel malgache typique est centre sur le riz (comme toujours a Madagascar), servi avec de la viande de zebu, du romazava, du poulet et des fruits tropicaux frais comme les litchis et les mangues pour le dessert.",
        es: 'Una comida navidena tipica malgache se centra en el arroz (como siempre en Madagascar), servido con carne de cebu, romazava, pollo y frutas tropicales frescas como lichis y mangos de postre.',
      },
    },
  ],

  colorTheme: 'christmas',
  icon: '🎄',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const mgHolidays: HolidayData[] = [
  newYearsDay,
  martyrsDay,
  labourDay,
  independenceDay,
  assumption,
  christmas,
];

export default mgHolidays;
