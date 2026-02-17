/**
 * Puerto Rico holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getGoodFriday } from './_shared-dates';

// ---------------------------------------------------------------------------
// Three Kings Day — January 6
// ---------------------------------------------------------------------------

const threeKingsDay: HolidayData = {
  id: 'pr_three-kings-day',
  countryCode: 'pr',
  slugs: { en: 'three-kings-day', fr: 'jour-des-rois', es: 'dia-de-reyes' },
  names: { en: 'Three Kings Day', fr: 'Jour des Rois', es: 'D\u00eda de Reyes' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 6,

  descriptions: {
    en: "Three Kings Day (D\u00eda de Reyes) on January 6 is the most anticipated gift-giving holiday in Puerto Rico, often bigger than Christmas for children. Kids place boxes filled with grass under their beds for the Three Kings' camels and wake up to find gifts.",
    fr: "Le Jour des Rois (D\u00eda de Reyes), le 6 janvier, est la f\u00eate de cadeaux la plus attendue \u00e0 Porto Rico, souvent plus importante que No\u00ebl pour les enfants. Les enfants placent des bo\u00eetes remplies d'herbe sous leur lit pour les chameaux des Rois Mages et se r\u00e9veillent avec des cadeaux.",
    es: "El D\u00eda de Reyes, el 6 de enero, es la festividad de regalos m\u00e1s esperada en Puerto Rico, a menudo m\u00e1s grande que Navidad para los ni\u00f1os. Los ni\u00f1os colocan cajas llenas de hierba debajo de sus camas para los camellos de los Tres Reyes Magos y despiertan para encontrar regalos.",
  },

  history: {
    en: "Three Kings Day, also known as Epiphany, celebrates the biblical arrival of the Three Wise Men (Melchior, Gaspar, and Balthasar) who brought gifts to the baby Jesus. In Puerto Rico, this tradition has become the most important gift-giving occasion of the holiday season.\n\nThe Puerto Rican tradition of placing a box of grass under the bed dates back centuries. Children collect fresh grass or hay to feed the camels of the Three Kings. In the morning, the grass is gone, replaced by gifts \u2014 much like the American tradition of Santa Claus.\n\nThe celebration begins on the evening of January 5 (V\u00edspera de Reyes) and continues through January 6. In Juana D\u00edaz, a town in southern Puerto Rico, a massive Three Kings festival attracts visitors from across the island with live nativity scenes, parades, and cultural events.",
    fr: "Le Jour des Rois, aussi connu sous le nom d'\u00c9piphanie, c\u00e9l\u00e8bre l'arriv\u00e9e biblique des Rois Mages (Melchior, Gaspard et Balthazar) qui apport\u00e8rent des pr\u00e9sents \u00e0 l'enfant J\u00e9sus. \u00c0 Porto Rico, cette tradition est devenue l'occasion de cadeaux la plus importante de la saison des f\u00eates.\n\nLa tradition portoricaine de placer une bo\u00eete d'herbe sous le lit remonte \u00e0 des si\u00e8cles. Les enfants r\u00e9coltent de l'herbe fra\u00eeche ou du foin pour nourrir les chameaux des Rois Mages. Le matin, l'herbe a disparu, remplac\u00e9e par des cadeaux.\n\n\u00c0 Juana D\u00edaz, une ville du sud de Porto Rico, un immense festival des Rois Mages attire des visiteurs de toute l'\u00eele avec des cr\u00e8ches vivantes, des d\u00e9fil\u00e9s et des \u00e9v\u00e9nements culturels.",
    es: "El D\u00eda de Reyes, tambi\u00e9n conocido como la Epifan\u00eda, celebra la llegada b\u00edblica de los Tres Reyes Magos (Melchor, Gaspar y Baltasar) que trajeron regalos al ni\u00f1o Jes\u00fas. En Puerto Rico, esta tradici\u00f3n se ha convertido en la ocasi\u00f3n de regalos m\u00e1s importante de la temporada navide\u00f1a.\n\nLa tradici\u00f3n puertorrique\u00f1a de colocar una caja de hierba debajo de la cama data de hace siglos. Los ni\u00f1os recolectan hierba fresca o heno para alimentar a los camellos de los Reyes Magos. Por la ma\u00f1ana, la hierba ha desaparecido, reemplazada por regalos, similar a la tradici\u00f3n estadounidense de Santa Claus.\n\nLa celebraci\u00f3n comienza la noche del 5 de enero (V\u00edspera de Reyes) y contin\u00faa hasta el 6 de enero. En Juana D\u00edaz, un pueblo en el sur de Puerto Rico, un masivo festival de Reyes atrae visitantes de toda la isla con nacimientos vivientes, desfiles y eventos culturales.",
  },

  traditions: {
    en: [
      'Children placing boxes filled with grass under their beds for the camels',
      'Waking up on January 6 to find gifts from the Three Kings',
      'Attending the massive Three Kings festival in Juana D\u00edaz',
      'Singing traditional aguinaldos (Puerto Rican Christmas carols)',
      'Gathering for a family meal featuring lechon asado and arroz con gandules',
      'Attending live nativity scenes and religious services',
      'Enjoying parrandas (musical house-to-house visits) through the holiday season',
    ],
    fr: [
      'Les enfants placent des bo\u00eetes remplies d\'herbe sous leur lit pour les chameaux',
      'Se r\u00e9veiller le 6 janvier pour trouver les cadeaux des Rois Mages',
      'Assister au grand festival des Rois Mages \u00e0 Juana D\u00edaz',
      'Chanter des aguinaldos traditionnels (chants de No\u00ebl portoricains)',
      'Se r\u00e9unir en famille pour un repas avec lech\u00f3n asado et arroz con gandules',
      'Assister \u00e0 des cr\u00e8ches vivantes et des services religieux',
      'Profiter des parrandas (visites musicales de maison en maison) pendant la saison des f\u00eates',
    ],
    es: [
      'Los ni\u00f1os colocan cajas llenas de hierba debajo de sus camas para los camellos',
      'Despertar el 6 de enero para encontrar regalos de los Reyes Magos',
      'Asistir al masivo festival de Reyes en Juana D\u00edaz',
      'Cantar aguinaldos tradicionales (villancicos puertorrique\u00f1os)',
      'Reunirse en familia para una comida con lech\u00f3n asado y arroz con gandules',
      'Asistir a nacimientos vivientes y servicios religiosos',
      'Disfrutar de parrandas (visitas musicales de casa en casa) durante la temporada navide\u00f1a',
    ],
  },

  funFacts: {
    en: [
      'For many Puerto Rican children, Three Kings Day is a bigger gift-giving occasion than Christmas.',
      'Juana D\u00edaz is known as "La Ciudad de los Reyes Magos" (The City of the Three Kings) for its famous festival.',
      'The tradition of placing grass in a box mimics the idea of feeding the camels on their long journey.',
      'Puerto Rico\'s holiday season is one of the longest in the world, running from Thanksgiving through mid-January.',
      'Aguinaldos, the traditional Christmas songs of Puerto Rico, are performed during parrandas that can last until dawn.',
    ],
    fr: [
      'Pour de nombreux enfants portoricains, le Jour des Rois est une occasion de cadeaux plus importante que No\u00ebl.',
      'Juana D\u00edaz est connue comme \u00ab La Ciudad de los Reyes Magos \u00bb (La Ville des Rois Mages) pour son c\u00e9l\u00e8bre festival.',
      'La tradition de placer de l\'herbe dans une bo\u00eete imite l\'id\u00e9e de nourrir les chameaux lors de leur long voyage.',
      'La saison des f\u00eates de Porto Rico est l\'une des plus longues au monde, s\'\u00e9tendant de Thanksgiving \u00e0 la mi-janvier.',
      'Les aguinaldos, les chants de No\u00ebl traditionnels de Porto Rico, sont interpr\u00e9t\u00e9s lors de parrandas qui peuvent durer jusqu\'\u00e0 l\'aube.',
    ],
    es: [
      'Para muchos ni\u00f1os puertorrique\u00f1os, el D\u00eda de Reyes es una ocasi\u00f3n de regalos m\u00e1s grande que Navidad.',
      'Juana D\u00edaz es conocida como "La Ciudad de los Reyes Magos" por su famoso festival.',
      'La tradici\u00f3n de colocar hierba en una caja imita la idea de alimentar a los camellos en su largo viaje.',
      'La temporada festiva de Puerto Rico es una de las m\u00e1s largas del mundo, extendi\u00e9ndose desde Acci\u00f3n de Gracias hasta mediados de enero.',
      'Los aguinaldos, las canciones navide\u00f1as tradicionales de Puerto Rico, se interpretan durante parrandas que pueden durar hasta el amanecer.',
    ],
  },

  planningChecklist: {
    en: [
      'Help children collect grass for the Three Kings\' camels on January 5',
      'Purchase gifts to place under children\'s beds or next to their boxes',
      'Plan to attend the festival in Juana D\u00edaz if possible',
      'Prepare a traditional meal with lech\u00f3n and arroz con gandules',
      'Learn and sing aguinaldos with family and friends',
    ],
    fr: [
      'Aider les enfants \u00e0 r\u00e9colter de l\'herbe pour les chameaux des Rois Mages le 5 janvier',
      'Acheter des cadeaux \u00e0 placer sous le lit des enfants ou \u00e0 c\u00f4t\u00e9 de leurs bo\u00eetes',
      'Pr\u00e9voir d\'assister au festival de Juana D\u00edaz si possible',
      'Pr\u00e9parer un repas traditionnel avec lech\u00f3n et arroz con gandules',
      'Apprendre et chanter des aguinaldos en famille et entre amis',
    ],
    es: [
      'Ayudar a los ni\u00f1os a recolectar hierba para los camellos de los Reyes Magos el 5 de enero',
      'Comprar regalos para colocar debajo de las camas de los ni\u00f1os o junto a sus cajas',
      'Planear asistir al festival en Juana D\u00edaz si es posible',
      'Preparar una comida tradicional con lech\u00f3n y arroz con gandules',
      'Aprender y cantar aguinaldos con familia y amigos',
    ],
  },

  relatedHolidays: ['pr_good-friday', 'pr_constitution-day'],

  seo: {
    en: {
      titleTemplate: 'Three Kings Day {year} Puerto Rico \u2014 D\u00eda de Reyes Countdown',
      descriptionTemplate: 'When is Three Kings Day {year} in Puerto Rico? Live countdown to January 6, traditions, and celebration guide.',
      keywords: ['Three Kings Day Puerto Rico', 'D\u00eda de Reyes', 'Epiphany Puerto Rico', 'Puerto Rico holiday', 'Juana D\u00edaz festival'],
    },
    fr: {
      titleTemplate: 'Jour des Rois {year} Porto Rico \u2014 Compte \u00e0 rebours du D\u00eda de Reyes',
      descriptionTemplate: 'Quand est le Jour des Rois {year} \u00e0 Porto Rico ? Compte \u00e0 rebours, traditions et guide de c\u00e9l\u00e9bration.',
      keywords: ['Jour des Rois Porto Rico', 'D\u00eda de Reyes', '\u00c9piphanie Porto Rico', 'f\u00eate Porto Rico', 'festival Juana D\u00edaz'],
    },
    es: {
      titleTemplate: 'D\u00eda de Reyes {year} Puerto Rico \u2014 Cuenta regresiva',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda de Reyes {year} en Puerto Rico? Cuenta regresiva, tradiciones y gu\u00eda de celebraci\u00f3n.',
      keywords: ['D\u00eda de Reyes Puerto Rico', 'Reyes Magos', 'Epifan\u00eda Puerto Rico', 'fiesta puertorrique\u00f1a', 'festival Juana D\u00edaz'],
    },
  },

  faq: [
    {
      question: { en: 'When is Three Kings Day {year} in Puerto Rico?', fr: 'Quand est le Jour des Rois {year} \u00e0 Porto Rico ?', es: '\u00bfCu\u00e1ndo es el D\u00eda de Reyes {year} en Puerto Rico?' },
      answer: {
        en: 'Three Kings Day {year} in Puerto Rico is on {date}. It is always January 6.',
        fr: "Le Jour des Rois {year} \u00e0 Porto Rico est le {date}. C'est toujours le 6 janvier.",
        es: 'El D\u00eda de Reyes {year} en Puerto Rico es el {date}. Siempre es el 6 de enero.',
      },
    },
    {
      question: { en: 'Why do Puerto Rican children put grass in boxes?', fr: 'Pourquoi les enfants portoricains mettent-ils de l\'herbe dans des bo\u00eetes ?', es: '\u00bfPor qu\u00e9 los ni\u00f1os puertorrique\u00f1os ponen hierba en cajas?' },
      answer: {
        en: 'Puerto Rican children place boxes filled with grass or hay under their beds on the night of January 5 to feed the Three Kings\' camels. In the morning, the grass is replaced with gifts, similar to how cookies are left for Santa Claus.',
        fr: "Les enfants portoricains placent des bo\u00eetes remplies d'herbe ou de foin sous leur lit la nuit du 5 janvier pour nourrir les chameaux des Rois Mages. Le matin, l'herbe est remplac\u00e9e par des cadeaux.",
        es: 'Los ni\u00f1os puertorrique\u00f1os colocan cajas llenas de hierba o heno debajo de sus camas la noche del 5 de enero para alimentar a los camellos de los Reyes Magos. Por la ma\u00f1ana, la hierba es reemplazada por regalos, similar a como se dejan galletas para Santa Claus.',
      },
    },
    {
      question: { en: 'Is Three Kings Day bigger than Christmas in Puerto Rico?', fr: 'Le Jour des Rois est-il plus important que No\u00ebl \u00e0 Porto Rico ?', es: '\u00bfEs el D\u00eda de Reyes m\u00e1s grande que Navidad en Puerto Rico?' },
      answer: {
        en: 'For many Puerto Rican families, especially children, Three Kings Day is the primary gift-giving occasion. While Christmas is also celebrated, D\u00eda de Reyes holds a special place in Puerto Rican culture as the day children receive their main gifts.',
        fr: "Pour de nombreuses familles portoricaines, surtout les enfants, le Jour des Rois est l'occasion principale d'\u00e9change de cadeaux. Bien que No\u00ebl soit aussi c\u00e9l\u00e9br\u00e9, le D\u00eda de Reyes occupe une place sp\u00e9ciale dans la culture portoricaine.",
        es: 'Para muchas familias puertorrique\u00f1as, especialmente los ni\u00f1os, el D\u00eda de Reyes es la ocasi\u00f3n principal de regalos. Aunque la Navidad tambi\u00e9n se celebra, el D\u00eda de Reyes tiene un lugar especial en la cultura puertorrique\u00f1a como el d\u00eda en que los ni\u00f1os reciben sus regalos principales.',
      },
    },
    {
      question: { en: 'Is Three Kings Day a public holiday in Puerto Rico?', fr: 'Le Jour des Rois est-il un jour f\u00e9ri\u00e9 \u00e0 Porto Rico ?', es: '\u00bfEs el D\u00eda de Reyes un d\u00eda festivo en Puerto Rico?' },
      answer: {
        en: 'Yes, Three Kings Day is an official public holiday in Puerto Rico. Schools, government offices, and many businesses are closed.',
        fr: "Oui, le Jour des Rois est un jour f\u00e9ri\u00e9 officiel \u00e0 Porto Rico. Les \u00e9coles, les bureaux gouvernementaux et de nombreuses entreprises sont ferm\u00e9s.",
        es: 'S\u00ed, el D\u00eda de Reyes es un d\u00eda festivo oficial en Puerto Rico. Las escuelas, oficinas gubernamentales y muchos negocios est\u00e1n cerrados.',
      },
    },
  ],

  icon: '\ud83d\udc51',
};

// ---------------------------------------------------------------------------
// Abolition Day — March 22
// ---------------------------------------------------------------------------

const abolitionDay: HolidayData = {
  id: 'pr_abolition-day',
  countryCode: 'pr',
  slugs: { en: 'abolition-day', fr: 'jour-de-labolition', es: 'dia-de-la-abolicion' },
  names: { en: 'Abolition Day', fr: "Jour de l'Abolition", es: 'D\u00eda de la Abolici\u00f3n' },

  dateType: 'fixed',
  fixedMonth: 3,
  fixedDay: 22,

  descriptions: {
    en: 'Abolition Day (D\u00eda de la Abolici\u00f3n) on March 22 commemorates the abolition of slavery in Puerto Rico in 1873. It honors the memory of enslaved people and celebrates the end of one of the darkest chapters in the island\'s history.',
    fr: "Le Jour de l'Abolition (D\u00eda de la Abolici\u00f3n), le 22 mars, comm\u00e9more l'abolition de l'esclavage \u00e0 Porto Rico en 1873. Il honore la m\u00e9moire des personnes r\u00e9duites en esclavage et c\u00e9l\u00e8bre la fin de l'un des chapitres les plus sombres de l'histoire de l'\u00eele.",
    es: 'El D\u00eda de la Abolici\u00f3n, el 22 de marzo, conmemora la abolici\u00f3n de la esclavitud en Puerto Rico en 1873. Honra la memoria de las personas esclavizadas y celebra el fin de uno de los cap\u00edtulos m\u00e1s oscuros de la historia de la isla.',
  },

  history: {
    en: "On March 22, 1873, the Spanish National Assembly passed the Moret Law, which abolished slavery in Puerto Rico. The law freed approximately 31,000 enslaved people on the island, though the process of full emancipation was gradual, with a mandatory three-year labor contract period.\n\nThe abolition movement in Puerto Rico was led by figures such as Ram\u00f3n Emeterio Betances, Segundo Ruiz Belvis, and Julio Vizcarrondo, who advocated passionately for the end of slavery. Their efforts, combined with changing political dynamics in Spain, led to the historic decree.\n\nToday, Abolition Day is observed with educational events, cultural celebrations highlighting Afro-Puerto Rican heritage, and commemorative ceremonies. It serves as an important reminder of the suffering endured by enslaved people and the ongoing struggle for equality.",
    fr: "Le 22 mars 1873, l'Assembl\u00e9e nationale espagnole adopta la loi Moret, qui abolit l'esclavage \u00e0 Porto Rico. La loi lib\u00e9ra environ 31 000 personnes r\u00e9duites en esclavage sur l'\u00eele, bien que le processus de pleine \u00e9mancipation f\u00fbt progressif.\n\nLe mouvement abolitionniste \u00e0 Porto Rico fut men\u00e9 par des figures telles que Ram\u00f3n Emeterio Betances, Segundo Ruiz Belvis et Julio Vizcarrondo, qui plaid\u00e8rent passionn\u00e9ment pour la fin de l'esclavage.\n\nAujourd'hui, le Jour de l'Abolition est observ\u00e9 avec des \u00e9v\u00e9nements \u00e9ducatifs, des c\u00e9l\u00e9brations culturelles mettant en valeur l'h\u00e9ritage afro-portoricain et des c\u00e9r\u00e9monies comm\u00e9moratives.",
    es: "El 22 de marzo de 1873, la Asamblea Nacional Espa\u00f1ola aprob\u00f3 la Ley Moret, que aboli\u00f3 la esclavitud en Puerto Rico. La ley liber\u00f3 a aproximadamente 31,000 personas esclavizadas en la isla, aunque el proceso de emancipaci\u00f3n completa fue gradual, con un per\u00edodo obligatorio de contrato laboral de tres a\u00f1os.\n\nEl movimiento abolicionista en Puerto Rico fue liderado por figuras como Ram\u00f3n Emeterio Betances, Segundo Ruiz Belvis y Julio Vizcarrondo, quienes abogaron apasionadamente por el fin de la esclavitud. Sus esfuerzos, combinados con la din\u00e1mica pol\u00edtica cambiante en Espa\u00f1a, llevaron al hist\u00f3rico decreto.\n\nHoy, el D\u00eda de la Abolici\u00f3n se observa con eventos educativos, celebraciones culturales destacando la herencia afro-puertorrique\u00f1a y ceremonias conmemorativas. Sirve como un recordatorio importante del sufrimiento soportado por las personas esclavizadas y la lucha continua por la igualdad.",
  },

  traditions: {
    en: [
      'Attending educational events about the history of slavery and abolition in Puerto Rico',
      'Celebrating Afro-Puerto Rican culture through music, dance, and art',
      'Visiting museums and historical sites related to the slavery era',
      'Participating in community commemorations and wreath-laying ceremonies',
      'Enjoying bomba and plena music, traditional Afro-Puerto Rican art forms',
    ],
    fr: [
      'Assister \u00e0 des \u00e9v\u00e9nements \u00e9ducatifs sur l\'histoire de l\'esclavage et de l\'abolition \u00e0 Porto Rico',
      'C\u00e9l\u00e9brer la culture afro-portoricaine \u00e0 travers la musique, la danse et l\'art',
      'Visiter des mus\u00e9es et des sites historiques li\u00e9s \u00e0 l\'\u00e8re de l\'esclavage',
      'Participer \u00e0 des comm\u00e9morations communautaires et des c\u00e9r\u00e9monies de d\u00e9p\u00f4t de gerbes',
      'Profiter de la musique bomba et plena, formes d\'art traditionnelles afro-portoricaines',
    ],
    es: [
      'Asistir a eventos educativos sobre la historia de la esclavitud y la abolici\u00f3n en Puerto Rico',
      'Celebrar la cultura afro-puertorrique\u00f1a a trav\u00e9s de la m\u00fasica, la danza y el arte',
      'Visitar museos y sitios hist\u00f3ricos relacionados con la era de la esclavitud',
      'Participar en conmemoraciones comunitarias y ceremonias de colocaci\u00f3n de ofrendas florales',
      'Disfrutar de m\u00fasica bomba y plena, formas de arte tradicionales afro-puertorrique\u00f1as',
    ],
  },

  funFacts: {
    en: [
      'Puerto Rico abolished slavery 12 years before Spain freed enslaved people in Cuba (1886).',
      'Ram\u00f3n Emeterio Betances, a key abolitionist, also played a crucial role in Puerto Rico\'s independence movement.',
      'Approximately 31,000 enslaved people were freed by the 1873 abolition decree.',
      'Bomba music and dance, born from the enslaved African community in Puerto Rico, is now celebrated as a vital cultural heritage.',
      'The abolition came with a requirement that freed people work under contract for three more years before full freedom.',
    ],
    fr: [
      'Porto Rico abolit l\'esclavage 12 ans avant que l\'Espagne ne lib\u00e8re les esclaves \u00e0 Cuba (1886).',
      'Ram\u00f3n Emeterio Betances, un abolitionniste cl\u00e9, joua aussi un r\u00f4le crucial dans le mouvement d\'ind\u00e9pendance de Porto Rico.',
      'Environ 31 000 personnes r\u00e9duites en esclavage furent lib\u00e9r\u00e9es par le d\u00e9cret d\'abolition de 1873.',
      'La musique et la danse bomba, n\u00e9es de la communaut\u00e9 africaine r\u00e9duite en esclavage \u00e0 Porto Rico, sont maintenant c\u00e9l\u00e9br\u00e9es comme un patrimoine culturel vital.',
      'L\'abolition s\'accompagnait d\'une obligation pour les personnes lib\u00e9r\u00e9es de travailler sous contrat pendant trois ann\u00e9es suppl\u00e9mentaires avant la pleine libert\u00e9.',
    ],
    es: [
      'Puerto Rico aboli\u00f3 la esclavitud 12 a\u00f1os antes de que Espa\u00f1a liberara a los esclavizados en Cuba (1886).',
      'Ram\u00f3n Emeterio Betances, un abolicionista clave, tambi\u00e9n jug\u00f3 un papel crucial en el movimiento independentista de Puerto Rico.',
      'Aproximadamente 31,000 personas esclavizadas fueron liberadas por el decreto de abolici\u00f3n de 1873.',
      'La m\u00fasica y danza bomba, nacida de la comunidad africana esclavizada en Puerto Rico, ahora se celebra como un patrimonio cultural vital.',
      'La abolici\u00f3n vino con el requisito de que las personas liberadas trabajaran bajo contrato durante tres a\u00f1os m\u00e1s antes de la libertad completa.',
    ],
  },

  planningChecklist: {
    en: [
      'Attend a bomba and plena cultural event in your community',
      'Visit a museum or historical site related to Afro-Puerto Rican history',
      'Learn about the abolitionists who fought to end slavery in Puerto Rico',
      'Support Afro-Puerto Rican artists, musicians, and cultural organizations',
      'Participate in educational events and commemorative ceremonies',
    ],
    fr: [
      'Assister \u00e0 un \u00e9v\u00e9nement culturel de bomba et plena dans votre communaut\u00e9',
      'Visiter un mus\u00e9e ou un site historique li\u00e9 \u00e0 l\'histoire afro-portoricaine',
      'Se renseigner sur les abolitionnistes qui ont combattu pour mettre fin \u00e0 l\'esclavage \u00e0 Porto Rico',
      'Soutenir les artistes, musiciens et organisations culturelles afro-portoricains',
      'Participer \u00e0 des \u00e9v\u00e9nements \u00e9ducatifs et des c\u00e9r\u00e9monies comm\u00e9moratives',
    ],
    es: [
      'Asistir a un evento cultural de bomba y plena en su comunidad',
      'Visitar un museo o sitio hist\u00f3rico relacionado con la historia afro-puertorrique\u00f1a',
      'Aprender sobre los abolicionistas que lucharon para terminar la esclavitud en Puerto Rico',
      'Apoyar a artistas, m\u00fasicos y organizaciones culturales afro-puertorrique\u00f1as',
      'Participar en eventos educativos y ceremonias conmemorativas',
    ],
  },

  relatedHolidays: ['pr_constitution-day', 'pr_discovery-day'],

  seo: {
    en: {
      titleTemplate: 'Puerto Rico Abolition Day {year} \u2014 March 22 Countdown',
      descriptionTemplate: 'When is Abolition Day {year} in Puerto Rico? Live countdown to March 22, abolition history, and celebration guide.',
      keywords: ['Abolition Day Puerto Rico', 'D\u00eda de la Abolici\u00f3n', 'March 22 Puerto Rico', 'slavery abolition PR', 'Afro-Puerto Rican'],
    },
    fr: {
      titleTemplate: "Jour de l'Abolition {year} Porto Rico \u2014 Compte \u00e0 rebours du 22 mars",
      descriptionTemplate: "Quand est le Jour de l'Abolition {year} \u00e0 Porto Rico ? Compte \u00e0 rebours, histoire de l'abolition et guide de c\u00e9l\u00e9bration.",
      keywords: ["Jour de l'Abolition Porto Rico", 'D\u00eda de la Abolici\u00f3n', '22 mars Porto Rico', 'abolition esclavage Porto Rico', 'afro-portoricain'],
    },
    es: {
      titleTemplate: 'D\u00eda de la Abolici\u00f3n {year} Puerto Rico \u2014 Cuenta regresiva del 22 de marzo',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda de la Abolici\u00f3n {year} en Puerto Rico? Cuenta regresiva, historia de la abolici\u00f3n y gu\u00eda de celebraci\u00f3n.',
      keywords: ['D\u00eda de la Abolici\u00f3n Puerto Rico', 'abolici\u00f3n esclavitud Puerto Rico', '22 de marzo', 'herencia afro-puertorrique\u00f1a', 'fiesta Puerto Rico'],
    },
  },

  faq: [
    {
      question: { en: 'When is Abolition Day {year} in Puerto Rico?', fr: "Quand est le Jour de l'Abolition {year} \u00e0 Porto Rico ?", es: '\u00bfCu\u00e1ndo es el D\u00eda de la Abolici\u00f3n {year} en Puerto Rico?' },
      answer: {
        en: 'Abolition Day {year} in Puerto Rico is on {date}. It is always March 22.',
        fr: "Le Jour de l'Abolition {year} \u00e0 Porto Rico est le {date}. C'est toujours le 22 mars.",
        es: 'El D\u00eda de la Abolici\u00f3n {year} en Puerto Rico es el {date}. Siempre es el 22 de marzo.',
      },
    },
    {
      question: { en: 'When was slavery abolished in Puerto Rico?', fr: "Quand l'esclavage a-t-il \u00e9t\u00e9 aboli \u00e0 Porto Rico ?", es: '\u00bfCu\u00e1ndo fue abolida la esclavitud en Puerto Rico?' },
      answer: {
        en: 'Slavery was abolished in Puerto Rico on March 22, 1873, by decree of the Spanish National Assembly, freeing approximately 31,000 enslaved people.',
        fr: "L'esclavage fut aboli \u00e0 Porto Rico le 22 mars 1873, par d\u00e9cret de l'Assembl\u00e9e nationale espagnole, lib\u00e9rant environ 31 000 personnes r\u00e9duites en esclavage.",
        es: 'La esclavitud fue abolida en Puerto Rico el 22 de marzo de 1873, por decreto de la Asamblea Nacional Espa\u00f1ola, liberando a aproximadamente 31,000 personas esclavizadas.',
      },
    },
    {
      question: { en: 'What is bomba music?', fr: "Qu'est-ce que la musique bomba ?", es: '\u00bfQu\u00e9 es la m\u00fasica bomba?' },
      answer: {
        en: 'Bomba is a traditional Afro-Puerto Rican music and dance form that originated among enslaved Africans on the island. It features drums, call-and-response singing, and expressive dancing, and is celebrated as an important part of Puerto Rican cultural heritage.',
        fr: "La bomba est une forme de musique et de danse traditionnelle afro-portoricaine qui a pris naissance parmi les Africains r\u00e9duits en esclavage sur l'\u00eele. Elle pr\u00e9sente des tambours, des chants en appel-r\u00e9ponse et une danse expressive.",
        es: 'La bomba es una forma de m\u00fasica y danza tradicional afro-puertorrique\u00f1a que se origin\u00f3 entre los africanos esclavizados en la isla. Presenta tambores, cantos de llamada y respuesta y baile expresivo, y se celebra como una parte importante del patrimonio cultural puertorrique\u00f1o.',
      },
    },
    {
      question: { en: 'Is Abolition Day a public holiday in Puerto Rico?', fr: "Le Jour de l'Abolition est-il un jour f\u00e9ri\u00e9 \u00e0 Porto Rico ?", es: '\u00bfEs el D\u00eda de la Abolici\u00f3n un d\u00eda festivo en Puerto Rico?' },
      answer: {
        en: 'Yes, March 22 is an official public holiday in Puerto Rico, commemorating the abolition of slavery in 1873.',
        fr: "Oui, le 22 mars est un jour f\u00e9ri\u00e9 officiel \u00e0 Porto Rico, comm\u00e9morant l'abolition de l'esclavage en 1873.",
        es: 'S\u00ed, el 22 de marzo es un d\u00eda festivo oficial en Puerto Rico, conmemorando la abolici\u00f3n de la esclavitud en 1873.',
      },
    },
  ],

  icon: '\u270a',
};

// ---------------------------------------------------------------------------
// Good Friday
// ---------------------------------------------------------------------------

const goodFriday: HolidayData = {
  id: 'pr_good-friday',
  countryCode: 'pr',
  slugs: { en: 'good-friday', fr: 'vendredi-saint', es: 'viernes-santo' },
  names: { en: 'Good Friday', fr: 'Vendredi Saint', es: 'Viernes Santo' },

  dateType: 'calculated',
  calculateDate: getGoodFriday,

  descriptions: {
    en: 'Good Friday (Viernes Santo) is a deeply observed religious holiday in Puerto Rico, marking the crucifixion of Jesus Christ. The island\'s strong Catholic heritage makes this one of the most solemn days of the year.',
    fr: "Le Vendredi Saint (Viernes Santo) est un jour f\u00e9ri\u00e9 religieux profond\u00e9ment observ\u00e9 \u00e0 Porto Rico, marquant la crucifixion de J\u00e9sus-Christ. Le fort h\u00e9ritage catholique de l'\u00eele en fait l'un des jours les plus solennels de l'ann\u00e9e.",
    es: 'El Viernes Santo es un d\u00eda festivo religioso profundamente observado en Puerto Rico, que marca la crucifixi\u00f3n de Jesucristo. La fuerte herencia cat\u00f3lica de la isla hace de este uno de los d\u00edas m\u00e1s solemnes del a\u00f1o.',
  },

  history: {
    en: "Good Friday observance in Puerto Rico reflects centuries of Catholic tradition dating back to Spanish colonization. The island's deeply religious culture means that Semana Santa (Holy Week) is one of the most significant periods of the year.\n\nPuerto Rican Good Friday traditions include religious processions, Stations of the Cross, and passion plays performed in towns across the island. Many communities organize solemn processions carrying statues of Christ through the streets.\n\nThe day is marked by widespread fasting and abstinence from meat. Families attend church services together and spend the day in quiet reflection, making it one of the few days when Puerto Rico's typically vibrant social life pauses for solemnity.",
    fr: "L'observance du Vendredi Saint \u00e0 Porto Rico refl\u00e8te des si\u00e8cles de tradition catholique remontant \u00e0 la colonisation espagnole. La culture profond\u00e9ment religieuse de l'\u00eele fait de la Semana Santa l'une des p\u00e9riodes les plus importantes de l'ann\u00e9e.\n\nLes traditions du Vendredi Saint portoricain comprennent des processions religieuses, le Chemin de Croix et des repr\u00e9sentations de la Passion dans les villes de toute l'\u00eele.\n\nLe jour est marqu\u00e9 par un je\u00fbne g\u00e9n\u00e9ralis\u00e9 et l'abstinence de viande. Les familles assistent ensemble aux services religieux.",
    es: "La observancia del Viernes Santo en Puerto Rico refleja siglos de tradici\u00f3n cat\u00f3lica que data de la colonizaci\u00f3n espa\u00f1ola. La cultura profundamente religiosa de la isla hace de la Semana Santa uno de los per\u00edodos m\u00e1s significativos del a\u00f1o.\n\nLas tradiciones del Viernes Santo puertorrique\u00f1o incluyen procesiones religiosas, V\u00eda Crucis y representaciones de la Pasi\u00f3n realizadas en pueblos de toda la isla. Muchas comunidades organizan procesiones solemnes llevando estatuas de Cristo por las calles.\n\nEl d\u00eda est\u00e1 marcado por el ayuno generalizado y la abstinencia de carne. Las familias asisten juntas a los servicios religiosos y pasan el d\u00eda en reflexi\u00f3n tranquila, haciendo de este uno de los pocos d\u00edas en que la t\u00edpicamente vibrante vida social de Puerto Rico se pausa por la solemnidad.",
  },

  traditions: {
    en: [
      'Attending the Stations of the Cross at local churches',
      'Watching religious processions through town streets',
      'Fasting and abstaining from meat',
      'Eating bacalao (salt cod) dishes, a traditional Good Friday meal',
      'Attending passion plays and re-enactments of the crucifixion',
      'Spending the day in prayer and family reflection',
    ],
    fr: [
      'Assister au Chemin de Croix dans les \u00e9glises locales',
      'Regarder les processions religieuses dans les rues des villes',
      'Je\u00fbner et s\'abstenir de viande',
      'Manger des plats de bacalao (morue sal\u00e9e), un repas traditionnel du Vendredi Saint',
      'Assister \u00e0 des repr\u00e9sentations de la Passion et des reconstitutions de la crucifixion',
      'Passer la journ\u00e9e en pri\u00e8re et en r\u00e9flexion familiale',
    ],
    es: [
      'Asistir al V\u00eda Crucis en las iglesias locales',
      'Ver procesiones religiosas por las calles del pueblo',
      'Ayunar y abstenerse de carne',
      'Comer platos de bacalao (bacalao salado), una comida tradicional de Viernes Santo',
      'Asistir a representaciones de la Pasi\u00f3n y recreaciones de la crucifixi\u00f3n',
      'Pasar el d\u00eda en oraci\u00f3n y reflexi\u00f3n familiar',
    ],
  },

  funFacts: {
    en: [
      'Puerto Rico\'s Semana Santa celebrations are among the most elaborate in the Caribbean.',
      'Bacalao (salt cod) dishes are so popular on Good Friday that prices for the fish rise significantly before Easter.',
      'Some Puerto Rican towns have been performing the same passion plays for over 100 years.',
      'Good Friday is one of the quietest days in Puerto Rico \u2014 even nightlife and entertainment largely shut down.',
      'Many Puerto Ricans head to the beach during Semana Santa week, combining religious observance with vacation.',
    ],
    fr: [
      'Les c\u00e9l\u00e9brations de la Semana Santa de Porto Rico sont parmi les plus \u00e9labor\u00e9es des Cara\u00efbes.',
      'Les plats de bacalao (morue sal\u00e9e) sont si populaires le Vendredi Saint que les prix du poisson augmentent significativement avant P\u00e2ques.',
      'Certaines villes portoricaines jouent les m\u00eames repr\u00e9sentations de la Passion depuis plus de 100 ans.',
      'Le Vendredi Saint est l\'un des jours les plus calmes \u00e0 Porto Rico \u2014 m\u00eame la vie nocturne ferme en grande partie.',
      'De nombreux Portoricains vont \u00e0 la plage pendant la semaine de Semana Santa, combinant observance religieuse et vacances.',
    ],
    es: [
      'Las celebraciones de Semana Santa de Puerto Rico est\u00e1n entre las m\u00e1s elaboradas del Caribe.',
      'Los platos de bacalao son tan populares el Viernes Santo que los precios del pescado suben significativamente antes de Pascua.',
      'Algunos pueblos puertorrique\u00f1os han estado representando las mismas obras de la Pasi\u00f3n por m\u00e1s de 100 a\u00f1os.',
      'El Viernes Santo es uno de los d\u00edas m\u00e1s tranquilos en Puerto Rico \u2014 incluso la vida nocturna y el entretenimiento cierran en gran medida.',
      'Muchos puertorrique\u00f1os van a la playa durante la semana de Semana Santa, combinando observancia religiosa con vacaciones.',
    ],
  },

  planningChecklist: {
    en: [
      'Attend church services and the Stations of the Cross',
      'Prepare traditional bacalao dishes for the Good Friday meal',
      'If attending a passion play, check local schedules in advance',
      'Plan a Semana Santa beach trip if combining religious and vacation activities',
      'Spend time in quiet reflection with family',
    ],
    fr: [
      'Assister aux services religieux et au Chemin de Croix',
      'Pr\u00e9parer des plats de bacalao traditionnels pour le repas du Vendredi Saint',
      'Si vous assistez \u00e0 une repr\u00e9sentation de la Passion, v\u00e9rifier les horaires locaux \u00e0 l\'avance',
      'Planifier un voyage \u00e0 la plage pendant la Semana Santa si vous combinez activit\u00e9s religieuses et vacances',
      'Passer du temps en r\u00e9flexion tranquille en famille',
    ],
    es: [
      'Asistir a servicios religiosos y al V\u00eda Crucis',
      'Preparar platos tradicionales de bacalao para la comida del Viernes Santo',
      'Si asiste a una representaci\u00f3n de la Pasi\u00f3n, verificar los horarios locales con anticipaci\u00f3n',
      'Planificar un viaje a la playa durante Semana Santa si combina actividades religiosas con vacaciones',
      'Pasar tiempo en reflexi\u00f3n tranquila con la familia',
    ],
  },

  relatedHolidays: ['pr_three-kings-day', 'pr_constitution-day'],

  seo: {
    en: {
      titleTemplate: 'Good Friday {year} Puerto Rico \u2014 Viernes Santo Countdown',
      descriptionTemplate: 'When is Good Friday {year} in Puerto Rico? Live countdown, Semana Santa traditions, and celebration guide.',
      keywords: ['Good Friday Puerto Rico', 'Viernes Santo', 'Semana Santa PR', 'Puerto Rico Easter', 'bacalao Good Friday'],
    },
    fr: {
      titleTemplate: 'Vendredi Saint {year} Porto Rico \u2014 Compte \u00e0 rebours',
      descriptionTemplate: 'Quand est le Vendredi Saint {year} \u00e0 Porto Rico ? Compte \u00e0 rebours, traditions de la Semana Santa et guide de c\u00e9l\u00e9bration.',
      keywords: ['Vendredi Saint Porto Rico', 'Viernes Santo', 'Semana Santa Porto Rico', 'P\u00e2ques Porto Rico', 'bacalao Vendredi Saint'],
    },
    es: {
      titleTemplate: 'Viernes Santo {year} Puerto Rico \u2014 Cuenta regresiva',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el Viernes Santo {year} en Puerto Rico? Cuenta regresiva, tradiciones de Semana Santa y gu\u00eda de celebraci\u00f3n.',
      keywords: ['Viernes Santo Puerto Rico', 'Semana Santa Puerto Rico', 'bacalao Viernes Santo', 'tradiciones Pascua PR', 'fiesta Puerto Rico'],
    },
  },

  faq: [
    {
      question: { en: 'When is Good Friday {year} in Puerto Rico?', fr: 'Quand est le Vendredi Saint {year} \u00e0 Porto Rico ?', es: '\u00bfCu\u00e1ndo es el Viernes Santo {year} en Puerto Rico?' },
      answer: {
        en: 'Good Friday {year} in Puerto Rico falls on {date}. The date changes each year based on Easter.',
        fr: "Le Vendredi Saint {year} \u00e0 Porto Rico tombe le {date}. La date change chaque ann\u00e9e selon P\u00e2ques.",
        es: 'El Viernes Santo {year} en Puerto Rico cae el {date}. La fecha cambia cada a\u00f1o seg\u00fan la Pascua.',
      },
    },
    {
      question: { en: 'What do Puerto Ricans eat on Good Friday?', fr: 'Que mangent les Portoricains le Vendredi Saint ?', es: '\u00bfQu\u00e9 comen los puertorrique\u00f1os el Viernes Santo?' },
      answer: {
        en: 'Traditional Good Friday meals in Puerto Rico feature bacalao (salt cod) prepared in various ways, along with viandas (root vegetables) and rice. Meat is avoided as part of the fasting tradition.',
        fr: "Les repas traditionnels du Vendredi Saint \u00e0 Porto Rico pr\u00e9sentent du bacalao (morue sal\u00e9e) pr\u00e9par\u00e9 de diverses fa\u00e7ons, avec des viandas (l\u00e9gumes-racines) et du riz. La viande est \u00e9vit\u00e9e dans le cadre de la tradition du je\u00fbne.",
        es: 'Las comidas tradicionales de Viernes Santo en Puerto Rico presentan bacalao preparado de varias maneras, junto con viandas (vegetales de ra\u00edz) y arroz. Se evita la carne como parte de la tradici\u00f3n de ayuno.',
      },
    },
    {
      question: { en: 'Is Good Friday a public holiday in Puerto Rico?', fr: 'Le Vendredi Saint est-il un jour f\u00e9ri\u00e9 \u00e0 Porto Rico ?', es: '\u00bfEs el Viernes Santo un d\u00eda festivo en Puerto Rico?' },
      answer: {
        en: 'Yes, Good Friday is an official public holiday in Puerto Rico. Government offices, schools, and most businesses are closed.',
        fr: "Oui, le Vendredi Saint est un jour f\u00e9ri\u00e9 officiel \u00e0 Porto Rico. Les bureaux gouvernementaux, les \u00e9coles et la plupart des entreprises sont ferm\u00e9s.",
        es: 'S\u00ed, el Viernes Santo es un d\u00eda festivo oficial en Puerto Rico. Las oficinas gubernamentales, escuelas y la mayor\u00eda de los negocios est\u00e1n cerrados.',
      },
    },
    {
      question: { en: 'What is Semana Santa like in Puerto Rico?', fr: "Comment est la Semana Santa \u00e0 Porto Rico ?", es: '\u00bfC\u00f3mo es la Semana Santa en Puerto Rico?' },
      answer: {
        en: 'Semana Santa in Puerto Rico combines solemn religious observance with vacation time. Religious processions and church services are held throughout the week, while many families also take beach vacations during the school break.',
        fr: "La Semana Santa \u00e0 Porto Rico combine observance religieuse solennelle et p\u00e9riode de vacances. Des processions religieuses et des services ont lieu toute la semaine, tandis que de nombreuses familles profitent de vacances \u00e0 la plage.",
        es: 'La Semana Santa en Puerto Rico combina la observancia religiosa solemne con tiempo de vacaciones. Se realizan procesiones religiosas y servicios de iglesia durante toda la semana, mientras que muchas familias tambi\u00e9n toman vacaciones en la playa durante el receso escolar.',
      },
    },
  ],

  colorTheme: 'easter',
  icon: '\u271d\ufe0f',
};

// ---------------------------------------------------------------------------
// US Independence Day — July 4
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'pr_independence-day',
  countryCode: 'pr',
  slugs: { en: 'us-independence-day', fr: 'jour-de-lindependance-americaine', es: 'dia-de-la-independencia-de-eeuu' },
  names: { en: 'US Independence Day', fr: "Jour de l'Ind\u00e9pendance am\u00e9ricaine", es: 'D\u00eda de la Independencia de EE.UU.' },

  dateType: 'fixed',
  fixedMonth: 7,
  fixedDay: 4,

  descriptions: {
    en: 'US Independence Day on July 4 is observed in Puerto Rico as a US territory. While it celebrates American independence, the holiday also holds complex local significance in the context of Puerto Rico\'s own political status and identity.',
    fr: "Le Jour de l'Ind\u00e9pendance am\u00e9ricaine, le 4 juillet, est observ\u00e9 \u00e0 Porto Rico en tant que territoire am\u00e9ricain. Bien qu'il c\u00e9l\u00e8bre l'ind\u00e9pendance am\u00e9ricaine, ce jour f\u00e9ri\u00e9 rev\u00eat aussi une signification locale complexe dans le contexte du statut politique de Porto Rico.",
    es: 'El D\u00eda de la Independencia de EE.UU., el 4 de julio, se observa en Puerto Rico como territorio estadounidense. Aunque celebra la independencia americana, el d\u00eda festivo tambi\u00e9n tiene un significado local complejo en el contexto del estatus pol\u00edtico y la identidad de Puerto Rico.',
  },

  history: {
    en: "Puerto Rico became a US territory in 1898 following the Spanish-American War. Since then, July 4 has been observed as a public holiday on the island. Puerto Ricans became US citizens in 1917, and the holiday has been celebrated ever since.\n\nThe observance of July 4 in Puerto Rico is unique, as it exists alongside the island's own cultural identity and ongoing political status debate. For some, it represents the benefits of US citizenship and the shared democratic values. For others, it is a reminder of Puerto Rico's colonial relationship with the United States.\n\nDespite the complex political context, July 4 is widely observed with barbecues, beach outings, fireworks, and family gatherings. It marks the beginning of the summer holiday season for many Puerto Rican families.",
    fr: "Porto Rico devint un territoire am\u00e9ricain en 1898 \u00e0 la suite de la Guerre hispano-am\u00e9ricaine. Depuis lors, le 4 juillet est observ\u00e9 comme jour f\u00e9ri\u00e9 sur l'\u00eele. Les Portoricains devinrent citoyens am\u00e9ricains en 1917.\n\nL'observance du 4 juillet \u00e0 Porto Rico est unique, car elle coexiste avec l'identit\u00e9 culturelle propre de l'\u00eele et le d\u00e9bat continu sur son statut politique.\n\nMalgr\u00e9 le contexte politique complexe, le 4 juillet est largement observ\u00e9 avec des barbecues, des sorties \u00e0 la plage, des feux d'artifice et des r\u00e9unions familiales.",
    es: "Puerto Rico se convirti\u00f3 en territorio estadounidense en 1898 tras la Guerra Hispanoamericana. Desde entonces, el 4 de julio se observa como d\u00eda festivo en la isla. Los puertorrique\u00f1os se convirtieron en ciudadanos estadounidenses en 1917, y la festividad se ha celebrado desde entonces.\n\nLa observancia del 4 de julio en Puerto Rico es \u00fanica, ya que existe junto con la propia identidad cultural de la isla y el debate continuo sobre su estatus pol\u00edtico. Para algunos, representa los beneficios de la ciudadan\u00eda estadounidense y los valores democr\u00e1ticos compartidos. Para otros, es un recordatorio de la relaci\u00f3n colonial de Puerto Rico con Estados Unidos.\n\nA pesar del complejo contexto pol\u00edtico, el 4 de julio es ampliamente observado con parrilladas, salidas a la playa, fuegos artificiales y reuniones familiares. Marca el inicio de la temporada de vacaciones de verano para muchas familias puertorrique\u00f1as.",
  },

  traditions: {
    en: [
      'Enjoying barbecues and beach outings with family and friends',
      'Watching fireworks displays in major cities',
      'Attending local festivals and community celebrations',
      'Grilling traditional Puerto Rican foods alongside American BBQ staples',
      'Spending time at the beach during the summer holiday',
    ],
    fr: [
      'Profiter de barbecues et sorties \u00e0 la plage en famille et entre amis',
      'Regarder des spectacles de feux d\'artifice dans les grandes villes',
      'Assister \u00e0 des festivals locaux et c\u00e9l\u00e9brations communautaires',
      'Griller des plats portoricains traditionnels aux c\u00f4t\u00e9s des classiques du BBQ am\u00e9ricain',
      'Passer du temps \u00e0 la plage pendant les vacances d\'\u00e9t\u00e9',
    ],
    es: [
      'Disfrutar de parrilladas y salidas a la playa con familia y amigos',
      'Ver espect\u00e1culos de fuegos artificiales en las principales ciudades',
      'Asistir a festivales locales y celebraciones comunitarias',
      'Asar comidas puertorrique\u00f1as tradicionales junto con cl\u00e1sicos del BBQ americano',
      'Pasar tiempo en la playa durante las vacaciones de verano',
    ],
  },

  funFacts: {
    en: [
      'Puerto Ricans are US citizens but cannot vote in presidential elections unless they reside in a US state.',
      'July 4 celebrations in Puerto Rico often feature a unique blend of American and Puerto Rican food traditions.',
      'The holiday marks the unofficial start of summer vacation season on the island.',
      'Puerto Rico has observed July 4 as a public holiday since becoming a US territory in 1898.',
      'San Juan and other major cities host fireworks displays that attract large crowds to the waterfront.',
    ],
    fr: [
      'Les Portoricains sont citoyens am\u00e9ricains mais ne peuvent voter aux \u00e9lections pr\u00e9sidentielles que s\'ils r\u00e9sident dans un \u00c9tat am\u00e9ricain.',
      'Les c\u00e9l\u00e9brations du 4 juillet \u00e0 Porto Rico pr\u00e9sentent souvent un m\u00e9lange unique de traditions culinaires am\u00e9ricaines et portoricaines.',
      'Ce jour f\u00e9ri\u00e9 marque le d\u00e9but officieux de la saison des vacances d\'\u00e9t\u00e9 sur l\'\u00eele.',
      'Porto Rico observe le 4 juillet comme jour f\u00e9ri\u00e9 depuis qu\'il est devenu territoire am\u00e9ricain en 1898.',
      'San Juan et d\'autres grandes villes accueillent des spectacles de feux d\'artifice qui attirent de grandes foules au bord de l\'eau.',
    ],
    es: [
      'Los puertorrique\u00f1os son ciudadanos estadounidenses pero no pueden votar en elecciones presidenciales a menos que residan en un estado de EE.UU.',
      'Las celebraciones del 4 de julio en Puerto Rico a menudo presentan una mezcla \u00fanica de tradiciones culinarias americanas y puertorrique\u00f1as.',
      'El d\u00eda festivo marca el inicio no oficial de la temporada de vacaciones de verano en la isla.',
      'Puerto Rico ha observado el 4 de julio como d\u00eda festivo desde que se convirti\u00f3 en territorio estadounidense en 1898.',
      'San Juan y otras ciudades principales realizan espect\u00e1culos de fuegos artificiales que atraen grandes multitudes al malec\u00f3n.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan a beach outing or barbecue with family and friends',
      'Check local fireworks display schedules in your area',
      'Stock up on grilling supplies and traditional foods',
      'Book beach accommodations early as July 4 weekend is popular',
      'Prepare for hot summer weather with plenty of water and sunscreen',
    ],
    fr: [
      'Planifier une sortie \u00e0 la plage ou un barbecue en famille et entre amis',
      'V\u00e9rifier les horaires des spectacles de feux d\'artifice locaux',
      'S\'approvisionner en fournitures pour le gril et en plats traditionnels',
      'R\u00e9server les h\u00e9bergements de plage t\u00f4t car le week-end du 4 juillet est populaire',
      'Se pr\u00e9parer au temps chaud d\'\u00e9t\u00e9 avec beaucoup d\'eau et de cr\u00e8me solaire',
    ],
    es: [
      'Planificar una salida a la playa o parrillada con familia y amigos',
      'Verificar los horarios de espect\u00e1culos de fuegos artificiales locales',
      'Abastecerse de suministros para la parrilla y comidas tradicionales',
      'Reservar alojamientos de playa con anticipaci\u00f3n ya que el fin de semana del 4 de julio es popular',
      'Prepararse para el clima caluroso de verano con mucha agua y protector solar',
    ],
  },

  relatedHolidays: ['pr_constitution-day', 'pr_three-kings-day'],

  seo: {
    en: {
      titleTemplate: 'July 4th {year} Puerto Rico \u2014 Independence Day Countdown',
      descriptionTemplate: 'When is July 4th {year} in Puerto Rico? Live countdown, celebration guide, and local significance.',
      keywords: ['July 4 Puerto Rico', 'Independence Day PR', 'Puerto Rico holiday', '4th of July PR', 'Puerto Rico celebrations'],
    },
    fr: {
      titleTemplate: '4 juillet {year} Porto Rico \u2014 Compte \u00e0 rebours du Jour de l\'Ind\u00e9pendance',
      descriptionTemplate: "Quand est le 4 juillet {year} \u00e0 Porto Rico ? Compte \u00e0 rebours, guide de c\u00e9l\u00e9bration et signification locale.",
      keywords: ['4 juillet Porto Rico', 'Jour de l\'Ind\u00e9pendance Porto Rico', 'f\u00eate Porto Rico', 'feux d\'artifice Porto Rico', 'c\u00e9l\u00e9brations Porto Rico'],
    },
    es: {
      titleTemplate: '4 de julio {year} Puerto Rico \u2014 Cuenta regresiva del D\u00eda de la Independencia',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el 4 de julio {year} en Puerto Rico? Cuenta regresiva, gu\u00eda de celebraci\u00f3n y significado local.',
      keywords: ['4 de julio Puerto Rico', 'D\u00eda de la Independencia Puerto Rico', 'fiesta Puerto Rico', 'fuegos artificiales PR', 'celebraciones Puerto Rico'],
    },
  },

  faq: [
    {
      question: { en: 'When is July 4th {year} in Puerto Rico?', fr: 'Quand est le 4 juillet {year} \u00e0 Porto Rico ?', es: '\u00bfCu\u00e1ndo es el 4 de julio {year} en Puerto Rico?' },
      answer: {
        en: 'July 4th {year} in Puerto Rico is on {date}. It is always July 4.',
        fr: "Le 4 juillet {year} \u00e0 Porto Rico est le {date}. C'est toujours le 4 juillet.",
        es: 'El 4 de julio {year} en Puerto Rico es el {date}. Siempre es el 4 de julio.',
      },
    },
    {
      question: { en: 'Does Puerto Rico celebrate July 4th?', fr: 'Porto Rico c\u00e9l\u00e8bre-t-il le 4 juillet ?', es: '\u00bfPuerto Rico celebra el 4 de julio?' },
      answer: {
        en: 'Yes, as a US territory, Puerto Rico observes July 4 as an official public holiday. Celebrations include fireworks, barbecues, and beach outings.',
        fr: "Oui, en tant que territoire am\u00e9ricain, Porto Rico observe le 4 juillet comme jour f\u00e9ri\u00e9 officiel. Les c\u00e9l\u00e9brations comprennent des feux d'artifice, des barbecues et des sorties \u00e0 la plage.",
        es: 'S\u00ed, como territorio estadounidense, Puerto Rico observa el 4 de julio como d\u00eda festivo oficial. Las celebraciones incluyen fuegos artificiales, parrilladas y salidas a la playa.',
      },
    },
    {
      question: { en: 'Can Puerto Ricans vote in US presidential elections?', fr: 'Les Portoricains peuvent-ils voter aux \u00e9lections pr\u00e9sidentielles am\u00e9ricaines ?', es: '\u00bfPueden los puertorrique\u00f1os votar en las elecciones presidenciales de EE.UU.?' },
      answer: {
        en: 'Puerto Ricans are US citizens but cannot vote in presidential elections unless they reside in one of the 50 US states or Washington, D.C. They can vote in presidential primaries.',
        fr: "Les Portoricains sont citoyens am\u00e9ricains mais ne peuvent voter aux \u00e9lections pr\u00e9sidentielles que s'ils r\u00e9sident dans l'un des 50 \u00c9tats am\u00e9ricains ou \u00e0 Washington, D.C. Ils peuvent voter aux primaires pr\u00e9sidentielles.",
        es: 'Los puertorrique\u00f1os son ciudadanos estadounidenses pero no pueden votar en las elecciones presidenciales a menos que residan en uno de los 50 estados de EE.UU. o Washington, D.C. Pueden votar en las primarias presidenciales.',
      },
    },
    {
      question: { en: 'Is July 4 a public holiday in Puerto Rico?', fr: 'Le 4 juillet est-il un jour f\u00e9ri\u00e9 \u00e0 Porto Rico ?', es: '\u00bfEs el 4 de julio un d\u00eda festivo en Puerto Rico?' },
      answer: {
        en: 'Yes, July 4 is an official public holiday in Puerto Rico.',
        fr: "Oui, le 4 juillet est un jour f\u00e9ri\u00e9 officiel \u00e0 Porto Rico.",
        es: 'S\u00ed, el 4 de julio es un d\u00eda festivo oficial en Puerto Rico.',
      },
    },
  ],

  icon: '\ud83c\uddf5\ud83c\uddf7',
};

// ---------------------------------------------------------------------------
// Constitution Day — July 25
// ---------------------------------------------------------------------------

const constitutionDay: HolidayData = {
  id: 'pr_constitution-day',
  countryCode: 'pr',
  slugs: { en: 'constitution-day', fr: 'jour-de-la-constitution', es: 'dia-de-la-constitucion' },
  names: { en: 'Constitution Day', fr: 'Jour de la Constitution', es: 'D\u00eda de la Constituci\u00f3n' },

  dateType: 'fixed',
  fixedMonth: 7,
  fixedDay: 25,

  descriptions: {
    en: "Constitution Day on July 25 commemorates the establishment of the Commonwealth of Puerto Rico's constitution in 1952. It marks a significant milestone in Puerto Rico's political self-governance.",
    fr: "Le Jour de la Constitution, le 25 juillet, comm\u00e9more l'\u00e9tablissement de la constitution de l'\u00c9tat libre associ\u00e9 de Porto Rico en 1952. Il marque une \u00e9tape importante dans l'autonomie politique de Porto Rico.",
    es: "El D\u00eda de la Constituci\u00f3n, el 25 de julio, conmemora el establecimiento de la constituci\u00f3n del Estado Libre Asociado de Puerto Rico en 1952. Marca un hito significativo en la autonom\u00eda pol\u00edtica de Puerto Rico.",
  },

  history: {
    en: "On July 25, 1952, the Constitution of the Commonwealth of Puerto Rico came into effect, establishing a new political framework for the island. The constitution created the Estado Libre Asociado (Free Associated State), giving Puerto Rico significant internal self-governance while remaining a US territory.\n\nThe date itself holds dual significance in Puerto Rican history. July 25, 1898 was also the day US forces landed in Gu\u00e1nica during the Spanish-American War, beginning the American presence on the island. The choice of this date for the constitution was deliberate.\n\nConstitution Day is observed with patriotic ceremonies, government events, and cultural activities. It serves as an occasion for Puerto Ricans to reflect on their unique political status and the ongoing debate about the island's future relationship with the United States.",
    fr: "Le 25 juillet 1952, la Constitution de l'\u00c9tat libre associ\u00e9 de Porto Rico entra en vigueur, \u00e9tablissant un nouveau cadre politique pour l'\u00eele. La constitution cr\u00e9a l'Estado Libre Asociado, donnant \u00e0 Porto Rico une autonomie interne significative tout en restant territoire am\u00e9ricain.\n\nLa date a une double signification dans l'histoire portoricaine. Le 25 juillet 1898 fut aussi le jour o\u00f9 les forces am\u00e9ricaines d\u00e9barqu\u00e8rent \u00e0 Gu\u00e1nica pendant la Guerre hispano-am\u00e9ricaine.\n\nLe Jour de la Constitution est observ\u00e9 avec des c\u00e9r\u00e9monies patriotiques, des \u00e9v\u00e9nements gouvernementaux et des activit\u00e9s culturelles.",
    es: "El 25 de julio de 1952, la Constituci\u00f3n del Estado Libre Asociado de Puerto Rico entr\u00f3 en vigor, estableciendo un nuevo marco pol\u00edtico para la isla. La constituci\u00f3n cre\u00f3 el Estado Libre Asociado, dando a Puerto Rico una significativa autogobernan\u00eda interna mientras permanec\u00eda como territorio estadounidense.\n\nLa fecha tiene una doble significaci\u00f3n en la historia puertorrique\u00f1a. El 25 de julio de 1898 fue tambi\u00e9n el d\u00eda en que las fuerzas estadounidenses desembarcaron en Gu\u00e1nica durante la Guerra Hispanoamericana, comenzando la presencia americana en la isla. La elecci\u00f3n de esta fecha para la constituci\u00f3n fue deliberada.\n\nEl D\u00eda de la Constituci\u00f3n se observa con ceremonias patri\u00f3ticas, eventos gubernamentales y actividades culturales. Sirve como una ocasi\u00f3n para que los puertorrique\u00f1os reflexionen sobre su estatus pol\u00edtico \u00fanico y el debate continuo sobre la futura relaci\u00f3n de la isla con Estados Unidos.",
  },

  traditions: {
    en: [
      'Attending government ceremonies and official events',
      'Flying the Puerto Rican flag at homes and businesses',
      'Participating in cultural events and educational programs',
      'Listening to speeches about Puerto Rico\'s political history',
      'Engaging in community discussions about the island\'s political status',
    ],
    fr: [
      'Assister \u00e0 des c\u00e9r\u00e9monies gouvernementales et des \u00e9v\u00e9nements officiels',
      'Hisser le drapeau portoricain aux maisons et entreprises',
      'Participer \u00e0 des \u00e9v\u00e9nements culturels et des programmes \u00e9ducatifs',
      '\u00c9couter des discours sur l\'histoire politique de Porto Rico',
      'Participer \u00e0 des discussions communautaires sur le statut politique de l\'\u00eele',
    ],
    es: [
      'Asistir a ceremonias gubernamentales y eventos oficiales',
      'Izar la bandera puertorrique\u00f1a en hogares y negocios',
      'Participar en eventos culturales y programas educativos',
      'Escuchar discursos sobre la historia pol\u00edtica de Puerto Rico',
      'Participar en discusiones comunitarias sobre el estatus pol\u00edtico de la isla',
    ],
  },

  funFacts: {
    en: [
      'July 25 is significant twice in Puerto Rican history \u2014 both for the US invasion in 1898 and the constitution in 1952.',
      'The Puerto Rican constitution was approved by a popular vote with approximately 82% in favor.',
      'The Estado Libre Asociado (Commonwealth) status is unique in the US political system.',
      'Puerto Rico\'s constitution guarantees many rights, including the right to education and human dignity.',
      'The debate over Puerto Rico\'s political status \u2014 statehood, independence, or commonwealth \u2014 continues to this day.',
    ],
    fr: [
      'Le 25 juillet est significatif deux fois dans l\'histoire portoricaine \u2014 pour l\'invasion am\u00e9ricaine de 1898 et la constitution de 1952.',
      'La constitution portoricaine fut approuv\u00e9e par vote populaire avec environ 82% en faveur.',
      'Le statut d\'Estado Libre Asociado (Commonwealth) est unique dans le syst\u00e8me politique am\u00e9ricain.',
      'La constitution de Porto Rico garantit de nombreux droits, dont le droit \u00e0 l\'\u00e9ducation et \u00e0 la dignit\u00e9 humaine.',
      'Le d\u00e9bat sur le statut politique de Porto Rico \u2014 \u00e9tat, ind\u00e9pendance ou commonwealth \u2014 se poursuit \u00e0 ce jour.',
    ],
    es: [
      'El 25 de julio es significativo dos veces en la historia puertorrique\u00f1a \u2014 tanto por la invasi\u00f3n estadounidense de 1898 como por la constituci\u00f3n de 1952.',
      'La constituci\u00f3n puertorrique\u00f1a fue aprobada por voto popular con aproximadamente 82% a favor.',
      'El estatus de Estado Libre Asociado (Commonwealth) es \u00fanico en el sistema pol\u00edtico estadounidense.',
      'La constituci\u00f3n de Puerto Rico garantiza muchos derechos, incluyendo el derecho a la educaci\u00f3n y la dignidad humana.',
      'El debate sobre el estatus pol\u00edtico de Puerto Rico \u2014 estadidad, independencia o estado libre asociado \u2014 contin\u00faa hasta el d\u00eda de hoy.',
    ],
  },

  planningChecklist: {
    en: [
      'Display the Puerto Rican flag at your home',
      'Attend a local Constitution Day ceremony or event',
      'Learn about the history of Puerto Rico\'s political status',
      'Engage in community discussions about the island\'s future',
      'Visit historical sites related to the 1898 invasion and the 1952 constitution',
    ],
    fr: [
      'Afficher le drapeau portoricain chez vous',
      'Assister \u00e0 une c\u00e9r\u00e9monie ou un \u00e9v\u00e9nement local du Jour de la Constitution',
      'Se renseigner sur l\'histoire du statut politique de Porto Rico',
      'Participer aux discussions communautaires sur l\'avenir de l\'\u00eele',
      'Visiter des sites historiques li\u00e9s \u00e0 l\'invasion de 1898 et \u00e0 la constitution de 1952',
    ],
    es: [
      'Exhibir la bandera puertorrique\u00f1a en su hogar',
      'Asistir a una ceremonia o evento local del D\u00eda de la Constituci\u00f3n',
      'Aprender sobre la historia del estatus pol\u00edtico de Puerto Rico',
      'Participar en discusiones comunitarias sobre el futuro de la isla',
      'Visitar sitios hist\u00f3ricos relacionados con la invasi\u00f3n de 1898 y la constituci\u00f3n de 1952',
    ],
  },

  relatedHolidays: ['pr_independence-day', 'pr_discovery-day'],

  seo: {
    en: {
      titleTemplate: 'Puerto Rico Constitution Day {year} \u2014 July 25 Countdown',
      descriptionTemplate: 'When is Constitution Day {year} in Puerto Rico? Live countdown to July 25, Commonwealth history, and celebration guide.',
      keywords: ['Puerto Rico Constitution Day', 'July 25 Puerto Rico', 'Commonwealth Puerto Rico', 'Estado Libre Asociado', 'PR holiday'],
    },
    fr: {
      titleTemplate: 'Jour de la Constitution Porto Rico {year} \u2014 Compte \u00e0 rebours du 25 juillet',
      descriptionTemplate: 'Quand est le Jour de la Constitution {year} \u00e0 Porto Rico ? Compte \u00e0 rebours, histoire du Commonwealth et guide de c\u00e9l\u00e9bration.',
      keywords: ['Jour de la Constitution Porto Rico', '25 juillet Porto Rico', 'Commonwealth Porto Rico', 'Estado Libre Asociado', 'f\u00eate Porto Rico'],
    },
    es: {
      titleTemplate: 'D\u00eda de la Constituci\u00f3n Puerto Rico {year} \u2014 Cuenta regresiva del 25 de julio',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda de la Constituci\u00f3n {year} en Puerto Rico? Cuenta regresiva, historia del Estado Libre Asociado y gu\u00eda.',
      keywords: ['D\u00eda de la Constituci\u00f3n Puerto Rico', '25 de julio Puerto Rico', 'Estado Libre Asociado', 'constituci\u00f3n Puerto Rico', 'fiesta Puerto Rico'],
    },
  },

  faq: [
    {
      question: { en: 'When is Constitution Day {year} in Puerto Rico?', fr: 'Quand est le Jour de la Constitution {year} \u00e0 Porto Rico ?', es: '\u00bfCu\u00e1ndo es el D\u00eda de la Constituci\u00f3n {year} en Puerto Rico?' },
      answer: {
        en: 'Constitution Day {year} in Puerto Rico is on {date}. It is always July 25.',
        fr: "Le Jour de la Constitution {year} \u00e0 Porto Rico est le {date}. C'est toujours le 25 juillet.",
        es: 'El D\u00eda de la Constituci\u00f3n {year} en Puerto Rico es el {date}. Siempre es el 25 de julio.',
      },
    },
    {
      question: { en: 'What is the Estado Libre Asociado?', fr: "Qu'est-ce que l'Estado Libre Asociado ?", es: '\u00bfQu\u00e9 es el Estado Libre Asociado?' },
      answer: {
        en: 'The Estado Libre Asociado (Free Associated State or Commonwealth) is Puerto Rico\'s political status since 1952. It grants internal self-governance while maintaining the island as a US territory.',
        fr: "L'Estado Libre Asociado (\u00c9tat libre associ\u00e9 ou Commonwealth) est le statut politique de Porto Rico depuis 1952. Il accorde une autonomie interne tout en maintenant l'\u00eele comme territoire am\u00e9ricain.",
        es: 'El Estado Libre Asociado (Commonwealth) es el estatus pol\u00edtico de Puerto Rico desde 1952. Otorga autogobernan\u00eda interna mientras mantiene a la isla como territorio estadounidense.',
      },
    },
    {
      question: { en: 'Why is July 25 significant?', fr: 'Pourquoi le 25 juillet est-il significatif ?', es: '\u00bfPor qu\u00e9 es significativo el 25 de julio?' },
      answer: {
        en: 'July 25 has dual significance: it marks both the US invasion of Puerto Rico in 1898 during the Spanish-American War and the establishment of the Commonwealth constitution in 1952.',
        fr: "Le 25 juillet a une double signification : il marque \u00e0 la fois l'invasion am\u00e9ricaine de Porto Rico en 1898 pendant la Guerre hispano-am\u00e9ricaine et l'\u00e9tablissement de la constitution du Commonwealth en 1952.",
        es: 'El 25 de julio tiene una doble significaci\u00f3n: marca tanto la invasi\u00f3n estadounidense de Puerto Rico en 1898 durante la Guerra Hispanoamericana como el establecimiento de la constituci\u00f3n del Estado Libre Asociado en 1952.',
      },
    },
    {
      question: { en: 'Is Constitution Day a public holiday?', fr: 'Le Jour de la Constitution est-il un jour f\u00e9ri\u00e9 ?', es: '\u00bfEs el D\u00eda de la Constituci\u00f3n un d\u00eda festivo?' },
      answer: {
        en: 'Yes, July 25 is an official public holiday in Puerto Rico.',
        fr: "Oui, le 25 juillet est un jour f\u00e9ri\u00e9 officiel \u00e0 Porto Rico.",
        es: 'S\u00ed, el 25 de julio es un d\u00eda festivo oficial en Puerto Rico.',
      },
    },
  ],

  icon: '\ud83d\udcdc',
};

// ---------------------------------------------------------------------------
// Discovery of Puerto Rico Day — November 19
// ---------------------------------------------------------------------------

const discoveryDay: HolidayData = {
  id: 'pr_discovery-day',
  countryCode: 'pr',
  slugs: { en: 'discovery-day', fr: 'jour-de-la-decouverte', es: 'dia-del-descubrimiento' },
  names: { en: 'Discovery of Puerto Rico Day', fr: 'Jour de la D\u00e9couverte de Porto Rico', es: 'D\u00eda del Descubrimiento de Puerto Rico' },

  dateType: 'fixed',
  fixedMonth: 11,
  fixedDay: 19,

  descriptions: {
    en: "Discovery of Puerto Rico Day on November 19 marks Christopher Columbus's arrival on the island in 1493 during his second voyage to the Americas. The holiday acknowledges this historical event while also prompting reflection on its complex legacy.",
    fr: "Le Jour de la D\u00e9couverte de Porto Rico, le 19 novembre, marque l'arriv\u00e9e de Christophe Colomb sur l'\u00eele en 1493 lors de son deuxi\u00e8me voyage aux Am\u00e9riques. Ce jour f\u00e9ri\u00e9 reconna\u00eet cet \u00e9v\u00e9nement historique tout en invitant \u00e0 r\u00e9fl\u00e9chir sur son h\u00e9ritage complexe.",
    es: "El D\u00eda del Descubrimiento de Puerto Rico, el 19 de noviembre, marca la llegada de Crist\u00f3bal Col\u00f3n a la isla en 1493 durante su segundo viaje a las Am\u00e9ricas. El d\u00eda festivo reconoce este evento hist\u00f3rico mientras tambi\u00e9n invita a reflexionar sobre su legado complejo.",
  },

  history: {
    en: "On November 19, 1493, Christopher Columbus arrived on the island during his second voyage to the New World. He named it San Juan Bautista (Saint John the Baptist), though it would later become known as Puerto Rico (Rich Port).\n\nThe island was inhabited by the Ta\u00edno people, who called it Borik\u00e9n. Columbus's arrival marked the beginning of Spanish colonization, which would profoundly transform the island's culture, demographics, and history over the following centuries.\n\nToday, the holiday is observed with mixed sentiments. While it marks a significant historical event, many Puerto Ricans also use the day to honor the Ta\u00edno heritage and reflect on the impact of colonization on indigenous peoples.",
    fr: "Le 19 novembre 1493, Christophe Colomb arriva sur l'\u00eele lors de son deuxi\u00e8me voyage vers le Nouveau Monde. Il la nomma San Juan Bautista, bien qu'elle devienne plus tard Porto Rico.\n\nL'\u00eele \u00e9tait habit\u00e9e par le peuple Ta\u00edno, qui l'appelait Borik\u00e9n. L'arriv\u00e9e de Colomb marqua le d\u00e9but de la colonisation espagnole.\n\nAujourd'hui, ce jour f\u00e9ri\u00e9 est observ\u00e9 avec des sentiments mitig\u00e9s. Bien qu'il marque un \u00e9v\u00e9nement historique significatif, de nombreux Portoricains utilisent aussi cette journ\u00e9e pour honorer l'h\u00e9ritage ta\u00edno et r\u00e9fl\u00e9chir \u00e0 l'impact de la colonisation.",
    es: "El 19 de noviembre de 1493, Crist\u00f3bal Col\u00f3n lleg\u00f3 a la isla durante su segundo viaje al Nuevo Mundo. La nombr\u00f3 San Juan Bautista, aunque m\u00e1s tarde ser\u00eda conocida como Puerto Rico (Puerto Rico).\n\nLa isla estaba habitada por el pueblo ta\u00edno, que la llamaba Borik\u00e9n. La llegada de Col\u00f3n marc\u00f3 el inicio de la colonizaci\u00f3n espa\u00f1ola, que transformar\u00eda profundamente la cultura, demograf\u00eda e historia de la isla durante los siglos siguientes.\n\nHoy, el d\u00eda festivo se observa con sentimientos mixtos. Aunque marca un evento hist\u00f3rico significativo, muchos puertorrique\u00f1os tambi\u00e9n usan el d\u00eda para honrar la herencia ta\u00edna y reflexionar sobre el impacto de la colonizaci\u00f3n en los pueblos ind\u00edgenas.",
  },

  traditions: {
    en: [
      'Attending educational events about Puerto Rican history',
      'Learning about Ta\u00edno culture and indigenous heritage',
      'Visiting historical sites from the colonial era',
      'Participating in cultural celebrations honoring Puerto Rico\'s diverse heritage',
      'Reflecting on the island\'s complex history of colonization',
    ],
    fr: [
      'Assister \u00e0 des \u00e9v\u00e9nements \u00e9ducatifs sur l\'histoire de Porto Rico',
      'Se renseigner sur la culture ta\u00edno et le patrimoine indig\u00e8ne',
      'Visiter des sites historiques de l\'\u00e8re coloniale',
      'Participer \u00e0 des c\u00e9l\u00e9brations culturelles honorant le patrimoine diversifi\u00e9 de Porto Rico',
      'R\u00e9fl\u00e9chir \u00e0 l\'histoire complexe de colonisation de l\'\u00eele',
    ],
    es: [
      'Asistir a eventos educativos sobre la historia de Puerto Rico',
      'Aprender sobre la cultura ta\u00edna y la herencia ind\u00edgena',
      'Visitar sitios hist\u00f3ricos de la era colonial',
      'Participar en celebraciones culturales que honran la herencia diversa de Puerto Rico',
      'Reflexionar sobre la compleja historia de colonizaci\u00f3n de la isla',
    ],
  },

  funFacts: {
    en: [
      'Columbus originally named the island San Juan Bautista, while the port city was called Puerto Rico \u2014 the names were eventually swapped.',
      'The Ta\u00edno people called the island Borik\u00e9n, meaning "Land of the Valiant Lord."',
      'Puerto Rico was the first Spanish colony in the Americas to establish a representative form of government.',
      'Many modern Puerto Rican words, foods, and place names come from the Ta\u00edno language, including "hamaca" (hammock) and "barbacoa" (barbecue).',
      'DNA studies show that a significant percentage of Puerto Ricans carry Ta\u00edno genetic heritage.',
    ],
    fr: [
      'Colomb nomma initialement l\'\u00eele San Juan Bautista, tandis que la ville portuaire s\'appelait Puerto Rico \u2014 les noms furent finalement \u00e9chang\u00e9s.',
      'Le peuple Ta\u00edno appelait l\'\u00eele Borik\u00e9n, signifiant \u00ab Terre du Seigneur Vaillant \u00bb.',
      'Porto Rico fut la premi\u00e8re colonie espagnole des Am\u00e9riques \u00e0 \u00e9tablir une forme repr\u00e9sentative de gouvernement.',
      'De nombreux mots, plats et noms de lieux portoricains modernes viennent de la langue ta\u00edno, dont \u00ab hamaca \u00bb et \u00ab barbacoa \u00bb.',
      'Des \u00e9tudes ADN montrent qu\'un pourcentage significatif de Portoricains portent un h\u00e9ritage g\u00e9n\u00e9tique ta\u00edno.',
    ],
    es: [
      'Col\u00f3n originalmente nombr\u00f3 a la isla San Juan Bautista, mientras que la ciudad portuaria se llamaba Puerto Rico \u2014 los nombres eventualmente se intercambiaron.',
      'El pueblo ta\u00edno llamaba a la isla Borik\u00e9n, que significa "Tierra del Valiente Se\u00f1or".',
      'Puerto Rico fue la primera colonia espa\u00f1ola en las Am\u00e9ricas en establecer una forma representativa de gobierno.',
      'Muchas palabras, comidas y nombres de lugares puertorrique\u00f1os modernos provienen del idioma ta\u00edno, incluyendo "hamaca" y "barbacoa".',
      'Estudios de ADN muestran que un porcentaje significativo de puertorrique\u00f1os llevan herencia gen\u00e9tica ta\u00edna.',
    ],
  },

  planningChecklist: {
    en: [
      'Visit the Caguana Indigenous Ceremonial Park to learn about Ta\u00edno heritage',
      'Explore Old San Juan\'s colonial-era architecture and museums',
      'Attend educational events about Puerto Rico\'s pre-Columbian history',
      'Learn about the Ta\u00edno language and its influence on modern Puerto Rican culture',
      'Reflect on the island\'s diverse cultural heritage',
    ],
    fr: [
      'Visiter le parc c\u00e9r\u00e9moniel indig\u00e8ne de Caguana pour en apprendre sur l\'h\u00e9ritage ta\u00edno',
      'Explorer l\'architecture coloniale et les mus\u00e9es du Vieux San Juan',
      'Assister \u00e0 des \u00e9v\u00e9nements \u00e9ducatifs sur l\'histoire pr\u00e9colombienne de Porto Rico',
      'Se renseigner sur la langue ta\u00edno et son influence sur la culture portoricaine moderne',
      'R\u00e9fl\u00e9chir au patrimoine culturel diversifi\u00e9 de l\'\u00eele',
    ],
    es: [
      'Visitar el Parque Ceremonial Ind\u00edgena de Caguana para aprender sobre la herencia ta\u00edna',
      'Explorar la arquitectura colonial y los museos del Viejo San Juan',
      'Asistir a eventos educativos sobre la historia precolombina de Puerto Rico',
      'Aprender sobre el idioma ta\u00edno y su influencia en la cultura puertorrique\u00f1a moderna',
      'Reflexionar sobre la diversa herencia cultural de la isla',
    ],
  },

  relatedHolidays: ['pr_constitution-day', 'pr_abolition-day'],

  seo: {
    en: {
      titleTemplate: 'Discovery of Puerto Rico Day {year} \u2014 November 19 Countdown',
      descriptionTemplate: 'When is Discovery Day {year} in Puerto Rico? Live countdown to November 19, Columbus history, Ta\u00edno heritage, and guide.',
      keywords: ['Discovery Day Puerto Rico', 'November 19 Puerto Rico', 'Columbus Puerto Rico', 'Ta\u00edno heritage', 'Borik\u00e9n'],
    },
    fr: {
      titleTemplate: 'Jour de la D\u00e9couverte de Porto Rico {year} \u2014 Compte \u00e0 rebours du 19 novembre',
      descriptionTemplate: 'Quand est le Jour de la D\u00e9couverte {year} \u00e0 Porto Rico ? Compte \u00e0 rebours, histoire de Colomb, h\u00e9ritage ta\u00edno et guide.',
      keywords: ['Jour de la D\u00e9couverte Porto Rico', '19 novembre Porto Rico', 'Colomb Porto Rico', 'h\u00e9ritage ta\u00edno', 'Borik\u00e9n'],
    },
    es: {
      titleTemplate: 'D\u00eda del Descubrimiento de Puerto Rico {year} \u2014 Cuenta regresiva del 19 de noviembre',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda del Descubrimiento {year} en Puerto Rico? Cuenta regresiva, historia de Col\u00f3n, herencia ta\u00edna y gu\u00eda.',
      keywords: ['D\u00eda del Descubrimiento Puerto Rico', '19 de noviembre Puerto Rico', 'Col\u00f3n Puerto Rico', 'herencia ta\u00edna', 'Borik\u00e9n'],
    },
  },

  faq: [
    {
      question: { en: 'When is Discovery Day {year} in Puerto Rico?', fr: 'Quand est le Jour de la D\u00e9couverte {year} \u00e0 Porto Rico ?', es: '\u00bfCu\u00e1ndo es el D\u00eda del Descubrimiento {year} en Puerto Rico?' },
      answer: {
        en: 'Discovery of Puerto Rico Day {year} is on {date}. It is always November 19.',
        fr: "Le Jour de la D\u00e9couverte de Porto Rico {year} est le {date}. C'est toujours le 19 novembre.",
        es: 'El D\u00eda del Descubrimiento de Puerto Rico {year} es el {date}. Siempre es el 19 de noviembre.',
      },
    },
    {
      question: { en: 'When did Columbus arrive in Puerto Rico?', fr: 'Quand Colomb est-il arriv\u00e9 \u00e0 Porto Rico ?', es: '\u00bfCu\u00e1ndo lleg\u00f3 Col\u00f3n a Puerto Rico?' },
      answer: {
        en: 'Christopher Columbus arrived in Puerto Rico on November 19, 1493, during his second voyage to the Americas.',
        fr: "Christophe Colomb arriva \u00e0 Porto Rico le 19 novembre 1493, lors de son deuxi\u00e8me voyage aux Am\u00e9riques.",
        es: 'Crist\u00f3bal Col\u00f3n lleg\u00f3 a Puerto Rico el 19 de noviembre de 1493, durante su segundo viaje a las Am\u00e9ricas.',
      },
    },
    {
      question: { en: 'Who were the Ta\u00edno?', fr: 'Qui \u00e9taient les Ta\u00ednos ?', es: '\u00bfQui\u00e9nes eran los ta\u00ednos?' },
      answer: {
        en: 'The Ta\u00edno were the indigenous people who inhabited Puerto Rico (which they called Borik\u00e9n) before European colonization. Their culture, language, and traditions continue to influence modern Puerto Rican identity.',
        fr: "Les Ta\u00ednos \u00e9taient le peuple indig\u00e8ne qui habitait Porto Rico (qu'ils appelaient Borik\u00e9n) avant la colonisation europ\u00e9enne. Leur culture, langue et traditions continuent d'influencer l'identit\u00e9 portoricaine moderne.",
        es: 'Los ta\u00ednos eran el pueblo ind\u00edgena que habitaba Puerto Rico (que llamaban Borik\u00e9n) antes de la colonizaci\u00f3n europea. Su cultura, idioma y tradiciones contin\u00faan influyendo en la identidad puertorrique\u00f1a moderna.',
      },
    },
    {
      question: { en: 'Is Discovery Day a public holiday in Puerto Rico?', fr: 'Le Jour de la D\u00e9couverte est-il un jour f\u00e9ri\u00e9 \u00e0 Porto Rico ?', es: '\u00bfEs el D\u00eda del Descubrimiento un d\u00eda festivo en Puerto Rico?' },
      answer: {
        en: 'Yes, November 19 is an official public holiday in Puerto Rico.',
        fr: "Oui, le 19 novembre est un jour f\u00e9ri\u00e9 officiel \u00e0 Porto Rico.",
        es: 'S\u00ed, el 19 de noviembre es un d\u00eda festivo oficial en Puerto Rico.',
      },
    },
  ],

  icon: '\u26f5',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const prHolidays: HolidayData[] = [
  threeKingsDay,
  abolitionDay,
  goodFriday,
  independenceDay,
  constitutionDay,
  discoveryDay,
];

export default prHolidays;
