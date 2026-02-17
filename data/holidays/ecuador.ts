/**
 * Ecuador holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getCarnivalTuesday } from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'ec_new-years-day',
  countryCode: 'ec',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'ano-nuevo' },
  names: { en: "New Year's Day", fr: "Jour de l'An", es: 'Ano Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 is a festive public holiday in Ecuador, famous for the tradition of burning Ano Viejo effigies at midnight. Ecuadorians celebrate with family gatherings, fireworks, and symbolic rituals to leave the old year behind and welcome the new one.",
    fr: "Le Jour de l'An, le 1er janvier, est un jour ferie festif en Equateur, celebre pour la tradition de bruler des effigies de l'Ano Viejo (Vieille Annee) a minuit. Les Equatoriens celebrent avec des reunions familiales, des feux d'artifice et des rituels symboliques pour laisser l'annee ecoulee derriere eux.",
    es: 'El Ano Nuevo, el 1 de enero, es un dia festivo en Ecuador, famoso por la tradicion de quemar monigotes del Ano Viejo a medianoche. Los ecuatorianos celebran con reuniones familiares, fuegos artificiales y rituales simbolicos para dejar atras el viejo ano y dar la bienvenida al nuevo.',
  },

  history: {
    en: "New Year's celebrations in Ecuador are among the most distinctive in Latin America, centered on the tradition of burning Ano Viejo effigies. Weeks before December 31, families and communities create life-sized puppets — often resembling politicians, celebrities, or cartoon characters — stuffed with newspapers and sometimes firecrackers.\n\nAt midnight on December 31, these effigies are set ablaze in bonfires across the country, symbolizing the burning away of the old year's troubles and misfortunes. The tradition is believed to have roots in both indigenous customs and colonial Spanish practices.\n\nThe celebrations also include lively street parties, music, dancing, and the tradition of men dressing as viudas (widows) of the old year, blocking traffic to collect money from drivers. Ecuadorians follow many of the same luck-bringing customs found across Latin America, including eating twelve grapes and wearing colored underwear.",
    fr: "Les celebrations du Nouvel An en Equateur sont parmi les plus distinctives d'Amerique latine, centrees sur la tradition de bruler des effigies de l'Ano Viejo. Des semaines avant le 31 decembre, les familles et les communautes creent des marionnettes grandeur nature — ressemblant souvent a des politiciens, des celebrites ou des personnages de dessins animes — remplies de journaux et parfois de petards.\n\nA minuit le 31 decembre, ces effigies sont incendiees dans des buchers a travers le pays, symbolisant l'elimination des problemes et des malheurs de l'annee ecoulee. La tradition aurait des racines dans les coutumes indigenes et les pratiques coloniales espagnoles.\n\nLes celebrations comprennent egalement des fetes de rue animees, de la musique, de la danse et la tradition des hommes se deguisant en viudas (veuves) de l'ancienne annee, bloquant le trafic pour collecter de l'argent aupres des conducteurs. Les Equatoriens suivent de nombreuses coutumes porte-bonheur communes en Amerique latine, comme manger douze raisins et porter des sous-vetements colores.",
    es: "Las celebraciones de Ano Nuevo en Ecuador son de las mas distintivas de America Latina, centradas en la tradicion de quemar monigotes del Ano Viejo. Semanas antes del 31 de diciembre, las familias y comunidades crean municos de tamano real — a menudo parecidos a politicos, celebridades o personajes animados — rellenos de periodicos y a veces petardos.\n\nA medianoche del 31 de diciembre, estos monigotes se prenden fuego en hogueras por todo el pais, simbolizando la quema de los problemas y desgracias del ano viejo. Se cree que la tradicion tiene raices tanto en costumbres indigenas como en practicas coloniales espanolas.\n\nLas celebraciones tambien incluyen animadas fiestas callejeras, musica, baile y la tradicion de hombres disfrazados de viudas del ano viejo, bloqueando el trafico para recolectar dinero de los conductores. Los ecuatorianos siguen muchas de las mismas costumbres para atraer suerte comunes en America Latina, como comer doce uvas y usar ropa interior de colores.",
  },

  traditions: {
    en: [
      'Burning Ano Viejo effigies at midnight — life-sized puppets symbolizing the old year',
      'Men dressing as viudas (widows) of the old year to collect money in the streets',
      'Eating twelve grapes at midnight for good luck',
      'Wearing yellow underwear for prosperity or red for love',
      'Running around the block with a suitcase to ensure travel in the new year',
      'Watching fireworks displays in plazas and neighborhoods',
      'Gathering with family for a midnight dinner and celebration',
    ],
    fr: [
      "Bruler des effigies de l'Ano Viejo a minuit — des marionnettes grandeur nature symbolisant l'ancienne annee",
      "Hommes se deguisant en viudas (veuves) de l'ancienne annee pour collecter de l'argent dans les rues",
      'Manger douze raisins a minuit pour la bonne chance',
      "Porter des sous-vetements jaunes pour la prosperite ou rouges pour l'amour",
      'Courir autour du pate de maisons avec une valise pour assurer des voyages',
      "Regarder les feux d'artifice dans les places et les quartiers",
      'Se reunir en famille pour un diner et une celebration de minuit',
    ],
    es: [
      'Quemar monigotes del Ano Viejo a medianoche — municos de tamano real que simbolizan el ano viejo',
      'Hombres disfrazados de viudas del ano viejo para recolectar dinero en las calles',
      'Comer doce uvas a medianoche para la buena suerte',
      'Usar ropa interior amarilla para la prosperidad o roja para el amor',
      'Correr alrededor de la cuadra con una maleta para asegurar viajes en el nuevo ano',
      'Ver fuegos artificiales en plazas y vecindarios',
      'Reunirse en familia para una cena y celebracion de medianoche',
    ],
  },

  funFacts: {
    en: [
      'Ecuadorians spend weeks crafting elaborate Ano Viejo effigies, and competitions are held for the best ones in many cities.',
      'The viudas tradition involves men dressing in women\'s clothing and wigs to "mourn" the old year, often blocking traffic humorously to collect tips.',
      'In Quito, some Ano Viejo effigies can be several stories tall and require significant construction efforts.',
      'The smoke from thousands of burning effigies at midnight creates a haze that blankets Ecuadorian cities.',
      'Ecuador celebrates New Year\'s Eve with equal or greater enthusiasm than Christmas, making it the biggest party night of the year.',
    ],
    fr: [
      "Les Equatoriens passent des semaines a creer des effigies elaborees de l'Ano Viejo, et des concours sont organises pour les meilleures dans de nombreuses villes.",
      "La tradition des viudas implique des hommes se deguisant en vetements feminins et perruques pour « pleurer » l'ancienne annee, bloquant souvent le trafic avec humour pour collecter des pourboires.",
      "A Quito, certaines effigies de l'Ano Viejo peuvent atteindre plusieurs etages et necessitent des efforts de construction importants.",
      'La fumee de milliers d\'effigies brulees a minuit cree une brume qui recouvre les villes equatoriennes.',
      "L'Equateur celebre la veille du Nouvel An avec autant ou plus d'enthousiasme que Noel, ce qui en fait la plus grande soiree de fete de l'annee.",
    ],
    es: [
      'Los ecuatorianos pasan semanas creando elaborados monigotes del Ano Viejo, y se realizan concursos para los mejores en muchas ciudades.',
      'La tradicion de las viudas involucra a hombres vistiendose con ropa de mujer y pelucas para "llorar" al ano viejo, a menudo bloqueando el trafico humoristicamente para recolectar propinas.',
      'En Quito, algunos monigotes del Ano Viejo pueden tener varios pisos de altura y requieren esfuerzos significativos de construccion.',
      'El humo de miles de monigotes quemados a medianoche crea una neblina que cubre las ciudades ecuatorianas.',
      'Ecuador celebra la Noche Vieja con igual o mayor entusiasmo que la Navidad, haciendola la noche de fiesta mas grande del ano.',
    ],
  },

  planningChecklist: {
    en: [
      'Start building or buying your Ano Viejo effigy weeks in advance',
      'Prepare colored underwear — yellow for money, red for love',
      'Stock up on grapes, fireworks, and celebration supplies',
      'Plan your family dinner menu for New Year\'s Eve',
      'Watch for local Ano Viejo competitions and street celebrations',
    ],
    fr: [
      "Commencer a construire ou acheter votre effigie de l'Ano Viejo des semaines a l'avance",
      "Preparer des sous-vetements colores — jaune pour l'argent, rouge pour l'amour",
      "Faire le plein de raisins, de feux d'artifice et de fournitures de celebration",
      'Planifier le menu du diner familial pour la veille du Nouvel An',
      "Surveiller les concours locaux d'Ano Viejo et les celebrations de rue",
    ],
    es: [
      'Comenzar a construir o comprar tu monigote del Ano Viejo con semanas de anticipacion',
      'Preparar ropa interior de colores — amarilla para el dinero, roja para el amor',
      'Abastecerse de uvas, fuegos artificiales y suministros de celebracion',
      'Planificar el menu de la cena familiar para Noche Vieja',
      'Estar atento a concursos locales de Ano Viejo y celebraciones callejeras',
    ],
  },

  relatedHolidays: ['ec_christmas', 'ec_carnival'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Ecuador — Countdown & Traditions",
      descriptionTemplate: "When is New Year's Day {year} in Ecuador? Live countdown, Ano Viejo effigy burning tradition, and celebration guide.",
      keywords: ["New Year's Day Ecuador", 'Ano Viejo Ecuador', 'Ecuador New Year traditions', 'effigy burning Ecuador', "New Year's countdown"],
    },
    fr: {
      titleTemplate: "Jour de l'An {year} Equateur — Compte a rebours et traditions",
      descriptionTemplate: "Quand est le Jour de l'An {year} en Equateur ? Compte a rebours, tradition de l'Ano Viejo et guide de celebration.",
      keywords: ["Jour de l'An Equateur", 'Ano Viejo Equateur', 'traditions du Nouvel An Equateur', 'jours feries Equateur', 'compte a rebours Nouvel An'],
    },
    es: {
      titleTemplate: 'Ano Nuevo {year} Ecuador — Cuenta regresiva y tradiciones',
      descriptionTemplate: 'Cuando es Ano Nuevo {year} en Ecuador? Cuenta regresiva, tradicion de quema del Ano Viejo y guia de celebracion.',
      keywords: ['Ano Nuevo Ecuador', 'Ano Viejo Ecuador', 'tradiciones de Ano Nuevo Ecuador', 'feriados Ecuador', 'cuenta regresiva Ano Nuevo'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in Ecuador?", fr: "Quand est le Jour de l'An {year} en Equateur ?", es: 'Cuando es Ano Nuevo {year} en Ecuador?' },
      answer: {
        en: "New Year's Day {year} in Ecuador is on {date}. It is always January 1 and is a national public holiday.",
        fr: "Le Jour de l'An {year} en Equateur est le {date}. C'est toujours le 1er janvier et c'est un jour ferie national.",
        es: 'El Ano Nuevo {year} en Ecuador es el {date}. Siempre es el 1 de enero y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'What is the Ano Viejo tradition in Ecuador?', fr: "Qu'est-ce que la tradition de l'Ano Viejo en Equateur ?", es: 'Que es la tradicion del Ano Viejo en Ecuador?' },
      answer: {
        en: 'The Ano Viejo tradition involves creating life-sized effigies (monigotes) representing the old year, often made to look like politicians, celebrities, or fictional characters. At midnight on December 31, they are burned in bonfires to symbolize leaving behind the old year\'s problems.',
        fr: "La tradition de l'Ano Viejo consiste a creer des effigies grandeur nature (monigotes) representant l'ancienne annee, souvent faites pour ressembler a des politiciens, des celebrites ou des personnages fictifs. A minuit le 31 decembre, elles sont brulees dans des buchers pour symboliser l'abandon des problemes de l'annee ecoulee.",
        es: 'La tradicion del Ano Viejo consiste en crear monigotes de tamano real que representan el ano viejo, a menudo hechos para parecerse a politicos, celebridades o personajes ficticios. A medianoche del 31 de diciembre, se queman en hogueras para simbolizar dejar atras los problemas del ano viejo.',
      },
    },
    {
      question: { en: 'What are the viudas in Ecuadorian New Year celebrations?', fr: 'Que sont les viudas dans les celebrations du Nouvel An equatorien ?', es: 'Que son las viudas en las celebraciones de Ano Nuevo ecuatoriano?' },
      answer: {
        en: 'The viudas (widows) are men who dress in women\'s clothing, wigs, and exaggerated makeup to humorously "mourn" the death of the old year. They stand on streets blocking traffic and asking drivers for money to "pay for the funeral." It is a beloved and entertaining tradition.',
        fr: "Les viudas (veuves) sont des hommes qui se deguisent en vetements feminins, perruques et maquillage exagere pour « pleurer » avec humour la mort de l'ancienne annee. Ils se tiennent dans les rues, bloquant le trafic et demandant de l'argent aux conducteurs pour « payer les funerailles ». C'est une tradition bien-aimee et divertissante.",
        es: 'Las viudas son hombres que se visten con ropa de mujer, pelucas y maquillaje exagerado para "llorar" humoristicamente la muerte del ano viejo. Se paran en las calles bloqueando el trafico y pidiendo dinero a los conductores para "pagar el funeral". Es una tradicion querida y entretenida.',
      },
    },
    {
      question: { en: "Is New Year's Day a public holiday in Ecuador?", fr: "Le Jour de l'An est-il un jour ferie en Equateur ?", es: 'Es Ano Nuevo un dia festivo en Ecuador?' },
      answer: {
        en: "Yes, New Year's Day (January 1) is an official public holiday in Ecuador. Schools, government offices, banks, and most businesses are closed.",
        fr: "Oui, le Jour de l'An (1er janvier) est un jour ferie officiel en Equateur. Les ecoles, les bureaux gouvernementaux, les banques et la plupart des commerces sont fermes.",
        es: 'Si, el Ano Nuevo (1 de enero) es un dia festivo oficial en Ecuador. Las escuelas, oficinas gubernamentales, bancos y la mayoria de los negocios estan cerrados.',
      },
    },
  ],

  colorTheme: 'new-year',
  icon: '\ud83c\udf86',
};

// ---------------------------------------------------------------------------
// Carnival — Carnival Tuesday
// ---------------------------------------------------------------------------

const carnival: HolidayData = {
  id: 'ec_carnival',
  countryCode: 'ec',
  slugs: { en: 'carnival', fr: 'carnaval', es: 'carnaval' },
  names: { en: 'Carnival', fr: 'Carnaval', es: 'Carnaval' },

  dateType: 'calculated',
  calculateDate: getCarnivalTuesday,

  descriptions: {
    en: 'Carnival in Ecuador is a lively two-day celebration before Ash Wednesday, famous for massive water fights, foam spray battles, parades, and traditional festivals. It is one of the most fun and chaotic holidays in the country.',
    fr: "Le Carnaval en Equateur est une celebration animee de deux jours avant le mercredi des Cendres, celebre pour ses batailles d'eau massives, ses combats de mousse, ses defiles et ses festivals traditionnels. C'est l'un des jours feries les plus amusants et chaotiques du pays.",
    es: 'El Carnaval en Ecuador es una animada celebracion de dos dias antes del Miercoles de Ceniza, famosa por sus batallas de agua masivas, combates de espuma, desfiles y festivales tradicionales. Es uno de los dias festivos mas divertidos y caoticos del pais.',
  },

  history: {
    en: "Ecuadorian Carnival has roots in both pre-Columbian indigenous traditions and Spanish colonial celebrations. Indigenous peoples had long celebrated water-based purification rituals, which merged with the European carnival tradition preceding Lent. The result is one of the most exuberant and water-soaked celebrations in all of Latin America.\n\nThe famous water fights can range from gentle splashing to full-on drenching with buckets, water balloons, and even fire trucks. In recent decades, foam spray (espuma de carnaval) has been added to the arsenal. While some cities have attempted to regulate the water fighting, it remains a deeply beloved tradition.\n\nDifferent regions of Ecuador celebrate Carnival with unique local traditions. The Carnival of Guaranda in the highlands is one of the most famous, featuring traditional music, dancing, and the drinking of pajaro azul (a local blue-colored spirit). Ambato celebrates with a Festival of Flowers and Fruits instead of water fights.",
    fr: "Le Carnaval equatorien a des racines dans les traditions indigenes precolombiennes et les celebrations coloniales espagnoles. Les peuples indigenes celebraient depuis longtemps des rituels de purification a base d'eau, qui ont fusionne avec la tradition europeenne du carnaval precedant le Careme. Le resultat est l'une des celebrations les plus exuberantes et les plus arrosees de toute l'Amerique latine.\n\nLes fameuses batailles d'eau peuvent aller de legers eclaboussements a un trempage complet avec des seaux, des ballons d'eau et meme des camions de pompiers. Au cours des dernieres decennies, la mousse en spray (espuma de carnaval) a ete ajoutee a l'arsenal. Bien que certaines villes aient tente de reglementer les batailles d'eau, cela reste une tradition profondement aimee.\n\nDifferentes regions de l'Equateur celebrent le Carnaval avec des traditions locales uniques. Le Carnaval de Guaranda dans les hauts plateaux est l'un des plus celebres, avec de la musique traditionnelle, de la danse et la degustation de pajaro azul (une liqueur locale de couleur bleue). Ambato celebre avec un Festival des Fleurs et des Fruits au lieu de batailles d'eau.",
    es: "El Carnaval ecuatoriano tiene raices tanto en las tradiciones indigenas precolombinas como en las celebraciones coloniales espanolas. Los pueblos indigenas habian celebrado durante mucho tiempo rituales de purificacion con agua, que se fusionaron con la tradicion europea del carnaval que precede a la Cuaresma. El resultado es una de las celebraciones mas exuberantes y mojadas de toda America Latina.\n\nLas famosas batallas de agua pueden ir desde salpicaduras suaves hasta empapamientos completos con baldes, globos de agua e incluso camiones de bomberos. En las ultimas decadas, la espuma de carnaval se ha anadido al arsenal. Aunque algunas ciudades han intentado regular las batallas de agua, sigue siendo una tradicion profundamente querida.\n\nDiferentes regiones de Ecuador celebran el Carnaval con tradiciones locales unicas. El Carnaval de Guaranda en la sierra es uno de los mas famosos, con musica tradicional, baile y la bebida del pajaro azul (un licor local de color azul). Ambato celebra con un Festival de las Flores y las Frutas en lugar de batallas de agua.",
  },

  traditions: {
    en: [
      'Engaging in massive water fights using buckets, water balloons, and hoses',
      'Spraying foam (espuma de carnaval) on friends, family, and strangers',
      'Attending the Carnival of Guaranda with traditional highland music and pajaro azul',
      'Visiting the Ambato Festival of Flowers and Fruits',
      'Watching colorful parades with floats, dancers, and musicians',
      'Enjoying traditional carnival foods like fritada (fried pork) and mote (hominy)',
      'Traveling to the coast, highlands, or Amazon for the long carnival weekend',
    ],
    fr: [
      "Participer a des batailles d'eau massives avec des seaux, des ballons d'eau et des tuyaux",
      "Asperger de mousse (espuma de carnaval) les amis, la famille et les inconnus",
      'Assister au Carnaval de Guaranda avec la musique traditionnelle des hauts plateaux et le pajaro azul',
      'Visiter le Festival des Fleurs et des Fruits d\'Ambato',
      'Regarder des defiles colores avec des chars, des danseurs et des musiciens',
      'Deguster des plats traditionnels de carnaval comme la fritada (porc frit) et le mote (mais)',
      "Voyager vers la cote, les hauts plateaux ou l'Amazonie pour le long week-end de carnaval",
    ],
    es: [
      'Participar en batallas de agua masivas usando baldes, globos de agua y mangueras',
      'Lanzar espuma de carnaval a amigos, familia y desconocidos',
      'Asistir al Carnaval de Guaranda con musica tradicional serrana y pajaro azul',
      'Visitar el Festival de las Flores y las Frutas de Ambato',
      'Ver desfiles coloridos con carrozas, bailarines y musicos',
      'Disfrutar de comidas tradicionales de carnaval como fritada y mote',
      'Viajar a la costa, la sierra o la Amazonia para el largo fin de semana de carnaval',
    ],
  },

  funFacts: {
    en: [
      'Ecuadorian Carnival water fights are so intense that some people carry umbrellas and plastic bags to protect electronics.',
      'The Carnival of Guaranda features pajaro azul, a blue-tinted spirit made from sugarcane alcohol infused with herbs, which is unique to the region.',
      'Ambato\'s Festival of Flowers and Fruits was created specifically as a peaceful alternative to water fights after a devastating 1949 earthquake.',
      'Some Ecuadorian cities have tried to ban water fights during Carnival, but the tradition persists due to overwhelming popular support.',
      'During Carnival, it is considered acceptable to drench complete strangers — tourists included — with water or foam.',
    ],
    fr: [
      "Les batailles d'eau du Carnaval equatorien sont si intenses que certaines personnes portent des parapluies et des sacs en plastique pour proteger leurs appareils electroniques.",
      "Le Carnaval de Guaranda presente le pajaro azul, une liqueur bleutee a base d'alcool de canne a sucre infuse d'herbes, unique a la region.",
      "Le Festival des Fleurs et des Fruits d'Ambato a ete cree specifiquement comme alternative pacifique aux batailles d'eau apres un tremblement de terre devastateur en 1949.",
      "Certaines villes equatoriennes ont tente d'interdire les batailles d'eau pendant le Carnaval, mais la tradition persiste en raison d'un soutien populaire ecrasant.",
      "Pendant le Carnaval, il est considere acceptable de tremper de parfaits inconnus — touristes inclus — avec de l'eau ou de la mousse.",
    ],
    es: [
      'Las batallas de agua del Carnaval ecuatoriano son tan intensas que algunas personas llevan paraguas y bolsas de plastico para proteger sus electronicos.',
      'El Carnaval de Guaranda presenta el pajaro azul, un licor azulado hecho de alcohol de cana de azucar infusionado con hierbas, unico de la region.',
      'El Festival de las Flores y las Frutas de Ambato fue creado especificamente como una alternativa pacifica a las batallas de agua despues del devastador terremoto de 1949.',
      'Algunas ciudades ecuatorianas han intentado prohibir las batallas de agua durante el Carnaval, pero la tradicion persiste debido al abrumador apoyo popular.',
      'Durante el Carnaval, se considera aceptable empapar a completos desconocidos — turistas incluidos — con agua o espuma.',
    ],
  },

  planningChecklist: {
    en: [
      'Pack waterproof bags for electronics and valuables',
      'Bring a change of clothes if going out during Carnival',
      'Book accommodations early for Guaranda, Ambato, or coastal destinations',
      'Buy water balloons and espuma de carnaval in advance',
      'Plan indoor activities if you want to stay dry',
    ],
    fr: [
      "Preparer des sacs etanches pour l'electronique et les objets de valeur",
      'Apporter un change de vetements si vous sortez pendant le Carnaval',
      'Reserver les hebergements tot pour Guaranda, Ambato ou les destinations cotieres',
      "Acheter des ballons d'eau et de l'espuma de carnaval a l'avance",
      'Planifier des activites en interieur si vous voulez rester au sec',
    ],
    es: [
      'Empacar bolsas impermeables para electronicos y objetos de valor',
      'Llevar un cambio de ropa si va a salir durante el Carnaval',
      'Reservar alojamiento temprano para Guaranda, Ambato o destinos costeros',
      'Comprar globos de agua y espuma de carnaval con anticipacion',
      'Planificar actividades en interiores si desea mantenerse seco',
    ],
  },

  relatedHolidays: ['ec_new-years-day', 'ec_christmas'],

  seo: {
    en: {
      titleTemplate: 'Carnival {year} Ecuador — Countdown & Guide',
      descriptionTemplate: 'When is Carnival {year} in Ecuador? Live countdown, water fight traditions, Guaranda Carnival, and celebration guide.',
      keywords: ['Ecuador Carnival', 'Carnaval Ecuador', 'Ecuador water fights', 'Guaranda Carnival', 'Carnival countdown'],
    },
    fr: {
      titleTemplate: 'Carnaval {year} Equateur — Compte a rebours et guide',
      descriptionTemplate: "Quand est le Carnaval {year} en Equateur ? Compte a rebours, traditions des batailles d'eau, Carnaval de Guaranda et guide.",
      keywords: ['Carnaval Equateur', "batailles d'eau Equateur", 'Carnaval de Guaranda', 'jours feries Equateur', 'compte a rebours Carnaval'],
    },
    es: {
      titleTemplate: 'Carnaval {year} Ecuador — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Carnaval {year} en Ecuador? Cuenta regresiva, tradiciones de batallas de agua, Carnaval de Guaranda y guia.',
      keywords: ['Carnaval Ecuador', 'batallas de agua Ecuador', 'Carnaval de Guaranda', 'feriados Ecuador', 'cuenta regresiva Carnaval'],
    },
  },

  faq: [
    {
      question: { en: 'When is Carnival {year} in Ecuador?', fr: 'Quand est le Carnaval {year} en Equateur ?', es: 'Cuando es el Carnaval {year} en Ecuador?' },
      answer: {
        en: 'Carnival {year} in Ecuador falls on {date}. It is celebrated on the Monday and Tuesday before Ash Wednesday, and dates change each year.',
        fr: "Le Carnaval {year} en Equateur tombe le {date}. Il est celebre le lundi et le mardi precedant le mercredi des Cendres, et les dates changent chaque annee.",
        es: 'El Carnaval {year} en Ecuador cae el {date}. Se celebra el lunes y martes antes del Miercoles de Ceniza, y las fechas cambian cada ano.',
      },
    },
    {
      question: { en: 'Are water fights mandatory during Ecuador Carnival?', fr: "Les batailles d'eau sont-elles obligatoires pendant le Carnaval equatorien ?", es: 'Son obligatorias las batallas de agua durante el Carnaval de Ecuador?' },
      answer: {
        en: 'While not mandatory, water fights are so widespread during Carnival that staying dry is nearly impossible if you go outside. Many people embrace the tradition and come prepared to get soaked.',
        fr: "Bien que non obligatoires, les batailles d'eau sont si repandues pendant le Carnaval que rester au sec est presque impossible si vous sortez. De nombreuses personnes adoptent la tradition et viennent prepares a etre trempes.",
        es: 'Aunque no son obligatorias, las batallas de agua son tan extendidas durante el Carnaval que mantenerse seco es casi imposible si sales. Muchas personas aceptan la tradicion y vienen preparados para mojarse.',
      },
    },
    {
      question: { en: 'What is the Carnival of Guaranda?', fr: "Qu'est-ce que le Carnaval de Guaranda ?", es: 'Que es el Carnaval de Guaranda?' },
      answer: {
        en: "The Carnival of Guaranda is one of Ecuador's most famous carnival celebrations, held in the highland city of Guaranda in Bolivar province. It features traditional music, dancing, parades, and the drinking of pajaro azul, a blue-colored local spirit.",
        fr: "Le Carnaval de Guaranda est l'une des celebrations de carnaval les plus celebres de l'Equateur, tenue dans la ville des hauts plateaux de Guaranda dans la province de Bolivar. Il presente de la musique traditionnelle, de la danse, des defiles et la degustation de pajaro azul, une liqueur locale de couleur bleue.",
        es: 'El Carnaval de Guaranda es una de las celebraciones de carnaval mas famosas de Ecuador, realizada en la ciudad serrana de Guaranda en la provincia de Bolivar. Presenta musica tradicional, baile, desfiles y la bebida del pajaro azul, un licor local de color azul.',
      },
    },
    {
      question: { en: 'Is Carnival a public holiday in Ecuador?', fr: 'Le Carnaval est-il un jour ferie en Equateur ?', es: 'Es el Carnaval un dia festivo en Ecuador?' },
      answer: {
        en: 'Yes, Carnival Monday and Tuesday are official public holidays in Ecuador. Combined with the weekend, it creates a four-day holiday period and is one of the busiest travel weekends of the year.',
        fr: "Oui, le lundi et le mardi de Carnaval sont des jours feries officiels en Equateur. Combines avec le week-end, ils creent une periode de vacances de quatre jours et c'est l'un des week-ends de voyage les plus charges de l'annee.",
        es: 'Si, el lunes y martes de Carnaval son dias festivos oficiales en Ecuador. Combinados con el fin de semana, crean un periodo de vacaciones de cuatro dias y es uno de los fines de semana de viaje mas concurridos del ano.',
      },
    },
  ],

  colorTheme: 'carnival',
  icon: '\ud83c\udfad',
};

// ---------------------------------------------------------------------------
// Labour Day — May 1
// ---------------------------------------------------------------------------

const labourDay: HolidayData = {
  id: 'ec_labour-day',
  countryCode: 'ec',
  slugs: { en: 'labour-day', fr: 'fete-du-travail', es: 'dia-del-trabajo' },
  names: { en: 'Labour Day', fr: 'Fete du Travail', es: 'Dia del Trabajo' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 1,

  descriptions: {
    en: "Labour Day on May 1 is a public holiday in Ecuador honoring the rights and achievements of workers. It is observed with marches, rallies, and events organized by labor unions and workers' organizations across the country.",
    fr: "La Fete du Travail, le 1er mai, est un jour ferie en Equateur honorant les droits et les realisations des travailleurs. Elle est observee avec des marches, des rassemblements et des evenements organises par les syndicats et les organisations de travailleurs a travers le pays.",
    es: 'El Dia del Trabajo, el 1 de mayo, es un dia festivo en Ecuador que honra los derechos y logros de los trabajadores. Se observa con marchas, manifestaciones y eventos organizados por sindicatos y organizaciones de trabajadores en todo el pais.',
  },

  history: {
    en: "Labour Day in Ecuador, like in most of Latin America, is observed on May 1 in solidarity with the international workers' movement. The date commemorates the Haymarket affair of 1886 in Chicago, where workers rallied for an eight-hour workday, a struggle that resonated globally.\n\nIn Ecuador, the labor movement gained significant strength in the early 20th century, particularly with the general strike of November 15, 1922, in Guayaquil, which ended in a tragic massacre of workers. This event became a defining moment in Ecuadorian labor history and strengthened the resolve of workers' movements.\n\nToday, Labour Day is marked by peaceful marches, union rallies, and political speeches in major cities. It is a day to recognize workers' contributions to Ecuadorian society and to advocate for improved working conditions and labor rights.",
    fr: "La Fete du Travail en Equateur, comme dans la majeure partie de l'Amerique latine, est observee le 1er mai en solidarite avec le mouvement ouvrier international. La date commemore l'affaire de Haymarket de 1886 a Chicago, ou les travailleurs se sont rassembles pour une journee de travail de huit heures, une lutte qui a resonne dans le monde entier.\n\nEn Equateur, le mouvement ouvrier a gagne une force significative au debut du XXe siecle, notamment avec la greve generale du 15 novembre 1922 a Guayaquil, qui s'est terminee par un tragique massacre de travailleurs. Cet evenement est devenu un moment determinant de l'histoire ouvriere equatorienne et a renforce la determination des mouvements de travailleurs.\n\nAujourd'hui, la Fete du Travail est marquee par des marches pacifiques, des rassemblements syndicaux et des discours politiques dans les grandes villes. C'est un jour pour reconnaitre les contributions des travailleurs a la societe equatorienne et pour defendre l'amelioration des conditions de travail et des droits des travailleurs.",
    es: "El Dia del Trabajo en Ecuador, como en la mayor parte de America Latina, se observa el 1 de mayo en solidaridad con el movimiento obrero internacional. La fecha conmemora el asunto de Haymarket de 1886 en Chicago, donde los trabajadores se manifestaron por una jornada laboral de ocho horas, una lucha que resono a nivel mundial.\n\nEn Ecuador, el movimiento laboral gano fuerza significativa a principios del siglo XX, particularmente con la huelga general del 15 de noviembre de 1922 en Guayaquil, que termino en una tragica masacre de trabajadores. Este evento se convirtio en un momento definitorio en la historia laboral ecuatoriana y fortalecio la determinacion de los movimientos de trabajadores.\n\nHoy, el Dia del Trabajo se marca con marchas pacificas, manifestaciones sindicales y discursos politicos en las principales ciudades. Es un dia para reconocer las contribuciones de los trabajadores a la sociedad ecuatoriana y para abogar por mejores condiciones laborales y derechos de los trabajadores.",
  },

  traditions: {
    en: [
      'Attending worker marches and union rallies in major cities',
      'Listening to speeches by labor leaders and politicians',
      'Participating in cultural events celebrating workers',
      'Spending the day off with family and friends',
      'Reflecting on workers\' rights and labor achievements',
    ],
    fr: [
      'Assister aux marches de travailleurs et rassemblements syndicaux dans les grandes villes',
      'Ecouter les discours des dirigeants syndicaux et des politiciens',
      'Participer a des evenements culturels celebrant les travailleurs',
      'Passer la journee de conge avec la famille et les amis',
      'Reflechir aux droits des travailleurs et aux realisations syndicales',
    ],
    es: [
      'Asistir a marchas de trabajadores y manifestaciones sindicales en las principales ciudades',
      'Escuchar discursos de lideres sindicales y politicos',
      'Participar en eventos culturales que celebran a los trabajadores',
      'Pasar el dia libre con familia y amigos',
      'Reflexionar sobre los derechos de los trabajadores y los logros laborales',
    ],
  },

  funFacts: {
    en: [
      'Ecuador\'s most significant labor event, the Guayaquil general strike of November 15, 1922, is considered one of the most important moments in the country\'s social history.',
      'Labour Day marches in Quito typically proceed along major avenues to the government palace.',
      'Ecuador\'s labor code guarantees workers a minimum of 15 days of paid vacation per year.',
      'The eight-hour workday was officially established in Ecuador through labor reforms in the 1920s.',
      'Many Ecuadorians use the Labour Day holiday as an opportunity for a short getaway or family outing.',
    ],
    fr: [
      "L'evenement ouvrier le plus significatif de l'Equateur, la greve generale de Guayaquil du 15 novembre 1922, est considere comme l'un des moments les plus importants de l'histoire sociale du pays.",
      'Les marches de la Fete du Travail a Quito se deroulent generalement le long des grandes avenues jusqu\'au palais du gouvernement.',
      "Le code du travail equatorien garantit aux travailleurs un minimum de 15 jours de vacances payees par an.",
      "La journee de travail de huit heures a ete officiellement etablie en Equateur par des reformes du travail dans les annees 1920.",
      'De nombreux Equatoriens profitent du jour ferie de la Fete du Travail pour une courte escapade ou une sortie en famille.',
    ],
    es: [
      'El evento laboral mas significativo de Ecuador, la huelga general de Guayaquil del 15 de noviembre de 1922, es considerado uno de los momentos mas importantes en la historia social del pais.',
      'Las marchas del Dia del Trabajo en Quito tipicamente recorren las principales avenidas hasta el palacio de gobierno.',
      'El codigo laboral ecuatoriano garantiza a los trabajadores un minimo de 15 dias de vacaciones pagadas al ano.',
      'La jornada laboral de ocho horas fue oficialmente establecida en Ecuador mediante reformas laborales en los anos 1920.',
      'Muchos ecuatorianos aprovechan el feriado del Dia del Trabajo como una oportunidad para una escapada corta o una salida familiar.',
    ],
  },

  planningChecklist: {
    en: [
      'Check for any planned marches or rallies that may affect traffic',
      'Plan a day off activity with family or friends',
      'Be aware that banks, government offices, and many businesses will be closed',
      'Book travel in advance if planning a long weekend trip',
      'Attend local cultural events celebrating workers',
    ],
    fr: [
      'Verifier les marches ou rassemblements prevus qui pourraient affecter la circulation',
      'Planifier une activite pour le jour de conge avec la famille ou les amis',
      'Savoir que les banques, les bureaux gouvernementaux et de nombreux commerces seront fermes',
      'Reserver un voyage a l\'avance si vous planifiez un long week-end',
      'Assister aux evenements culturels locaux celebrant les travailleurs',
    ],
    es: [
      'Verificar si hay marchas o manifestaciones planificadas que puedan afectar el trafico',
      'Planificar una actividad para el dia libre con familia o amigos',
      'Tener en cuenta que bancos, oficinas gubernamentales y muchos negocios estaran cerrados',
      'Reservar viajes con anticipacion si planea un fin de semana largo',
      'Asistir a eventos culturales locales que celebran a los trabajadores',
    ],
  },

  relatedHolidays: ['ec_guayaquil-independence', 'ec_new-years-day'],

  seo: {
    en: {
      titleTemplate: 'Labour Day {year} Ecuador — Countdown & Info',
      descriptionTemplate: 'When is Labour Day {year} in Ecuador? Live countdown to May 1, workers\' rights history, and public holiday information.',
      keywords: ['Labour Day Ecuador', 'Dia del Trabajo Ecuador', 'May 1 Ecuador', 'Ecuador public holidays', 'workers day Ecuador'],
    },
    fr: {
      titleTemplate: 'Fete du Travail {year} Equateur — Compte a rebours et info',
      descriptionTemplate: 'Quand est la Fete du Travail {year} en Equateur ? Compte a rebours, histoire des droits des travailleurs et informations sur le jour ferie.',
      keywords: ['Fete du Travail Equateur', '1er mai Equateur', 'jours feries Equateur', 'droits des travailleurs Equateur', 'Dia del Trabajo'],
    },
    es: {
      titleTemplate: 'Dia del Trabajo {year} Ecuador — Cuenta regresiva e info',
      descriptionTemplate: 'Cuando es el Dia del Trabajo {year} en Ecuador? Cuenta regresiva al 1 de mayo, historia de los derechos laborales e informacion del feriado.',
      keywords: ['Dia del Trabajo Ecuador', '1 de mayo Ecuador', 'feriados Ecuador', 'derechos laborales Ecuador', 'dia festivo Ecuador'],
    },
  },

  faq: [
    {
      question: { en: 'When is Labour Day {year} in Ecuador?', fr: 'Quand est la Fete du Travail {year} en Equateur ?', es: 'Cuando es el Dia del Trabajo {year} en Ecuador?' },
      answer: {
        en: 'Labour Day {year} in Ecuador is on {date}. It is always May 1.',
        fr: 'La Fete du Travail {year} en Equateur est le {date}. C\'est toujours le 1er mai.',
        es: 'El Dia del Trabajo {year} en Ecuador es el {date}. Siempre es el 1 de mayo.',
      },
    },
    {
      question: { en: 'Is Labour Day a public holiday in Ecuador?', fr: 'La Fete du Travail est-elle un jour ferie en Equateur ?', es: 'Es el Dia del Trabajo un dia festivo en Ecuador?' },
      answer: {
        en: 'Yes, May 1 is an official public holiday in Ecuador. Government offices, banks, and most businesses are closed.',
        fr: 'Oui, le 1er mai est un jour ferie officiel en Equateur. Les bureaux gouvernementaux, les banques et la plupart des commerces sont fermes.',
        es: 'Si, el 1 de mayo es un dia festivo oficial en Ecuador. Las oficinas gubernamentales, bancos y la mayoria de los negocios estan cerrados.',
      },
    },
    {
      question: { en: 'What happened on November 15, 1922 in Ecuador?', fr: "Que s'est-il passe le 15 novembre 1922 en Equateur ?", es: 'Que sucedio el 15 de noviembre de 1922 en Ecuador?' },
      answer: {
        en: 'On November 15, 1922, a general strike in Guayaquil was violently suppressed, resulting in a massacre of workers. The event became a pivotal moment in Ecuadorian labor history and strengthened the workers\' movement.',
        fr: 'Le 15 novembre 1922, une greve generale a Guayaquil a ete violemment reprimee, entrainant un massacre de travailleurs. L\'evenement est devenu un moment charniere de l\'histoire ouvriere equatorienne et a renforce le mouvement des travailleurs.',
        es: 'El 15 de noviembre de 1922, una huelga general en Guayaquil fue violentamente reprimida, resultando en una masacre de trabajadores. El evento se convirtio en un momento crucial en la historia laboral ecuatoriana y fortalecio el movimiento obrero.',
      },
    },
    {
      question: { en: 'Are there marches on Labour Day in Ecuador?', fr: 'Y a-t-il des marches le jour de la Fete du Travail en Equateur ?', es: 'Hay marchas el Dia del Trabajo en Ecuador?' },
      answer: {
        en: 'Yes, labour unions and workers\' organizations typically hold marches and rallies in major Ecuadorian cities, particularly in Quito and Guayaquil. These are generally peaceful events.',
        fr: 'Oui, les syndicats et les organisations de travailleurs organisent generalement des marches et des rassemblements dans les grandes villes equatoriennes, en particulier a Quito et Guayaquil. Ce sont generalement des evenements pacifiques.',
        es: 'Si, los sindicatos y las organizaciones de trabajadores tipicamente realizan marchas y manifestaciones en las principales ciudades ecuatorianas, particularmente en Quito y Guayaquil. Generalmente son eventos pacificos.',
      },
    },
  ],

  colorTheme: 'spring',
  icon: '\u2692\ufe0f',
};

// ---------------------------------------------------------------------------
// Independence of Guayaquil — October 9
// ---------------------------------------------------------------------------

const guayaquilIndependence: HolidayData = {
  id: 'ec_guayaquil-independence',
  countryCode: 'ec',
  slugs: { en: 'guayaquil-independence', fr: 'independance-de-guayaquil', es: 'independencia-de-guayaquil' },
  names: { en: 'Independence of Guayaquil', fr: 'Independance de Guayaquil', es: 'Independencia de Guayaquil' },

  dateType: 'fixed',
  fixedMonth: 10,
  fixedDay: 9,

  descriptions: {
    en: "The Independence of Guayaquil on October 9 commemorates Guayaquil's liberation from Spanish colonial rule in 1820. It is a major national holiday celebrated with parades, civic ceremonies, and cultural events, particularly in Ecuador's largest city.",
    fr: "L'Independance de Guayaquil le 9 octobre commemore la liberation de Guayaquil du domaine colonial espagnol en 1820. C'est un jour ferie national majeur celebre avec des defiles, des ceremonies civiques et des evenements culturels, en particulier dans la plus grande ville de l'Equateur.",
    es: 'La Independencia de Guayaquil el 9 de octubre conmemora la liberacion de Guayaquil del dominio colonial espanol en 1820. Es un importante dia festivo nacional celebrado con desfiles, ceremonias civicas y eventos culturales, particularmente en la ciudad mas grande de Ecuador.',
  },

  history: {
    en: "On October 9, 1820, a group of Criollo patriots led a revolt against Spanish colonial authorities in Guayaquil, successfully declaring the city's independence. The revolution was led by figures including Jose Joaquin de Olmedo, who became the first leader of the Free Province of Guayaquil.\n\nThe independence of Guayaquil was a crucial step in Ecuador's broader independence movement. The port city's liberation preceded the Battle of Pichincha in 1822, which secured independence for the rest of the territory. Guayaquil briefly existed as an independent entity before joining Gran Colombia.\n\nToday, October 9 is celebrated with great enthusiasm in Guayaquil, where the city hosts its October festivals (Fiestas Octubrinas). The celebrations extend throughout the month and include parades, concerts, beauty pageants, and cultural events that showcase Guayaquil's vibrant identity.",
    fr: "Le 9 octobre 1820, un groupe de patriotes criollos a mene une revolte contre les autorites coloniales espagnoles a Guayaquil, declarant avec succes l'independance de la ville. La revolution a ete menee par des figures dont Jose Joaquin de Olmedo, qui est devenu le premier dirigeant de la Province Libre de Guayaquil.\n\nL'independance de Guayaquil a ete une etape cruciale dans le mouvement d'independance plus large de l'Equateur. La liberation de la ville portuaire a precede la Bataille de Pichincha en 1822, qui a assure l'independance du reste du territoire. Guayaquil a brievement existe comme entite independante avant de rejoindre la Grande Colombie.\n\nAujourd'hui, le 9 octobre est celebre avec grand enthousiasme a Guayaquil, ou la ville accueille ses festivites d'octobre (Fiestas Octubrinas). Les celebrations s'etendent tout au long du mois et comprennent des defiles, des concerts, des concours de beaute et des evenements culturels qui mettent en valeur l'identite vibrante de Guayaquil.",
    es: "El 9 de octubre de 1820, un grupo de patriotas criollos lidero una revuelta contra las autoridades coloniales espanolas en Guayaquil, declarando exitosamente la independencia de la ciudad. La revolucion fue liderada por figuras como Jose Joaquin de Olmedo, quien se convirtio en el primer lider de la Provincia Libre de Guayaquil.\n\nLa independencia de Guayaquil fue un paso crucial en el movimiento de independencia mas amplio de Ecuador. La liberacion de la ciudad portuaria precedio a la Batalla de Pichincha en 1822, que aseguro la independencia del resto del territorio. Guayaquil existio brevemente como entidad independiente antes de unirse a la Gran Colombia.\n\nHoy, el 9 de octubre se celebra con gran entusiasmo en Guayaquil, donde la ciudad acoge sus festividades de octubre (Fiestas Octubrinas). Las celebraciones se extienden durante todo el mes e incluyen desfiles, conciertos, concursos de belleza y eventos culturales que muestran la vibrante identidad de Guayaquil.",
  },

  traditions: {
    en: [
      'Attending the civic parade along the Malecon in Guayaquil',
      'Participating in Fiestas Octubrinas — month-long October celebrations',
      'Watching fireworks over the Guayas River',
      'Attending concerts, beauty pageants, and cultural exhibitions',
      'Visiting the Malecon 2000 and historic landmarks in Guayaquil',
    ],
    fr: [
      'Assister au defile civique le long du Malecon a Guayaquil',
      "Participer aux Fiestas Octubrinas — celebrations d'octobre d'un mois entier",
      "Regarder les feux d'artifice au-dessus du fleuve Guayas",
      'Assister a des concerts, concours de beaute et expositions culturelles',
      'Visiter le Malecon 2000 et les sites historiques de Guayaquil',
    ],
    es: [
      'Asistir al desfile civico a lo largo del Malecon en Guayaquil',
      'Participar en las Fiestas Octubrinas — celebraciones de un mes en octubre',
      'Ver fuegos artificiales sobre el rio Guayas',
      'Asistir a conciertos, concursos de belleza y exposiciones culturales',
      'Visitar el Malecon 2000 y lugares historicos de Guayaquil',
    ],
  },

  funFacts: {
    en: [
      'Guayaquil was the first major city in Ecuador to declare independence from Spain, on October 9, 1820.',
      'The Fiestas Octubrinas celebrations last the entire month of October, making it one of the longest municipal festivals in Ecuador.',
      'Jose Joaquin de Olmedo, who led the independence movement, later wrote "La Victoria de Junin," one of the most important poems of Latin American independence.',
      'The famous meeting between Simon Bolivar and Jose de San Martin took place in Guayaquil in July 1822.',
      'October 9 is followed closely by October 12, which commemorates Columbus Day and creates a period of national holidays.',
    ],
    fr: [
      "Guayaquil a ete la premiere grande ville de l'Equateur a declarer son independance de l'Espagne, le 9 octobre 1820.",
      "Les celebrations des Fiestas Octubrinas durent tout le mois d'octobre, ce qui en fait l'un des plus longs festivals municipaux de l'Equateur.",
      'Jose Joaquin de Olmedo, qui a mene le mouvement d\'independance, a ensuite ecrit "La Victoria de Junin", l\'un des poemes les plus importants de l\'independance latino-americaine.',
      'La celebre rencontre entre Simon Bolivar et Jose de San Martin a eu lieu a Guayaquil en juillet 1822.',
      'Le 9 octobre est suivi de pres par le 12 octobre, qui commemore le Jour de Christophe Colomb et cree une periode de jours feries nationaux.',
    ],
    es: [
      'Guayaquil fue la primera gran ciudad de Ecuador en declarar su independencia de Espana, el 9 de octubre de 1820.',
      'Las celebraciones de las Fiestas Octubrinas duran todo el mes de octubre, haciendolo uno de los festivales municipales mas largos de Ecuador.',
      'Jose Joaquin de Olmedo, quien lidero el movimiento de independencia, luego escribio "La Victoria de Junin", uno de los poemas mas importantes de la independencia latinoamericana.',
      'El famoso encuentro entre Simon Bolivar y Jose de San Martin tuvo lugar en Guayaquil en julio de 1822.',
      'El 9 de octubre es seguido de cerca por el 12 de octubre, que conmemora el Dia de la Raza y crea un periodo de feriados nacionales.',
    ],
  },

  planningChecklist: {
    en: [
      'Book hotels in Guayaquil early if visiting for the October festivities',
      'Check the Fiestas Octubrinas schedule for events and parades',
      'Plan visits to the Malecon 2000 and Las Penas neighborhood',
      'Be prepared for hot weather — October in Guayaquil is warm and humid',
      'Look for special cultural events and concerts during the festival month',
    ],
    fr: [
      "Reserver des hotels a Guayaquil tot si vous visitez pour les festivites d'octobre",
      'Verifier le programme des Fiestas Octubrinas pour les evenements et defiles',
      'Planifier des visites au Malecon 2000 et au quartier de Las Penas',
      'Etre prepare pour le temps chaud — octobre a Guayaquil est chaud et humide',
      'Rechercher les evenements culturels speciaux et concerts pendant le mois de festival',
    ],
    es: [
      'Reservar hoteles en Guayaquil con anticipacion si visita para las festividades de octubre',
      'Verificar el calendario de las Fiestas Octubrinas para eventos y desfiles',
      'Planificar visitas al Malecon 2000 y al barrio Las Penas',
      'Estar preparado para el clima calido — octubre en Guayaquil es calido y humedo',
      'Buscar eventos culturales especiales y conciertos durante el mes de festival',
    ],
  },

  relatedHolidays: ['ec_labour-day', 'ec_new-years-day'],

  seo: {
    en: {
      titleTemplate: 'Independence of Guayaquil {year} — Countdown & History',
      descriptionTemplate: 'When is Independence of Guayaquil {year}? Live countdown to October 9, history of the 1820 revolution, and Fiestas Octubrinas guide.',
      keywords: ['Independence of Guayaquil', 'October 9 Ecuador', 'Fiestas Octubrinas', 'Guayaquil independence 1820', 'Ecuador holidays'],
    },
    fr: {
      titleTemplate: 'Independance de Guayaquil {year} — Compte a rebours et histoire',
      descriptionTemplate: "Quand est l'Independance de Guayaquil {year} ? Compte a rebours, histoire de la revolution de 1820 et guide des Fiestas Octubrinas.",
      keywords: ['Independance de Guayaquil', '9 octobre Equateur', 'Fiestas Octubrinas', 'independance Guayaquil 1820', 'jours feries Equateur'],
    },
    es: {
      titleTemplate: 'Independencia de Guayaquil {year} — Cuenta regresiva e historia',
      descriptionTemplate: 'Cuando es la Independencia de Guayaquil {year}? Cuenta regresiva al 9 de octubre, historia de la revolucion de 1820 y guia de Fiestas Octubrinas.',
      keywords: ['Independencia de Guayaquil', '9 de octubre Ecuador', 'Fiestas Octubrinas', 'independencia Guayaquil 1820', 'feriados Ecuador'],
    },
  },

  faq: [
    {
      question: { en: 'When is the Independence of Guayaquil {year}?', fr: "Quand est l'Independance de Guayaquil {year} ?", es: 'Cuando es la Independencia de Guayaquil {year}?' },
      answer: {
        en: 'The Independence of Guayaquil {year} is on {date}. It is always October 9.',
        fr: "L'Independance de Guayaquil {year} est le {date}. C'est toujours le 9 octobre.",
        es: 'La Independencia de Guayaquil {year} es el {date}. Siempre es el 9 de octubre.',
      },
    },
    {
      question: { en: 'What are the Fiestas Octubrinas?', fr: 'Que sont les Fiestas Octubrinas ?', es: 'Que son las Fiestas Octubrinas?' },
      answer: {
        en: "The Fiestas Octubrinas are Guayaquil's month-long October celebrations that culminate on October 9. They include parades, concerts, beauty pageants, food festivals, and cultural events that showcase the city's vibrant character.",
        fr: "Les Fiestas Octubrinas sont les celebrations d'un mois d'octobre de Guayaquil qui culminent le 9 octobre. Elles comprennent des defiles, des concerts, des concours de beaute, des festivals gastronomiques et des evenements culturels qui mettent en valeur le caractere vibrant de la ville.",
        es: 'Las Fiestas Octubrinas son las celebraciones de un mes de octubre de Guayaquil que culminan el 9 de octubre. Incluyen desfiles, conciertos, concursos de belleza, festivales gastronomicos y eventos culturales que muestran el vibrante caracter de la ciudad.',
      },
    },
    {
      question: { en: 'Is October 9 a national holiday in Ecuador?', fr: 'Le 9 octobre est-il un jour ferie national en Equateur ?', es: 'Es el 9 de octubre un feriado nacional en Ecuador?' },
      answer: {
        en: 'Yes, October 9 is a national public holiday in Ecuador, though it is especially significant in Guayaquil where the independence revolution took place.',
        fr: "Oui, le 9 octobre est un jour ferie national en Equateur, bien qu'il soit particulierement significatif a Guayaquil ou la revolution d'independance a eu lieu.",
        es: 'Si, el 9 de octubre es un feriado nacional en Ecuador, aunque es especialmente significativo en Guayaquil donde tuvo lugar la revolucion de independencia.',
      },
    },
    {
      question: { en: 'What happened on October 9, 1820?', fr: "Que s'est-il passe le 9 octobre 1820 ?", es: 'Que sucedio el 9 de octubre de 1820?' },
      answer: {
        en: "On October 9, 1820, a group of Criollo patriots led by Jose Joaquin de Olmedo successfully revolted against Spanish colonial authorities in Guayaquil, declaring the city's independence. It was the first major independence declaration in what is now Ecuador.",
        fr: "Le 9 octobre 1820, un groupe de patriotes criollos menes par Jose Joaquin de Olmedo s'est revolte avec succes contre les autorites coloniales espagnoles a Guayaquil, declarant l'independance de la ville. C'etait la premiere grande declaration d'independance dans ce qui est aujourd'hui l'Equateur.",
        es: 'El 9 de octubre de 1820, un grupo de patriotas criollos liderados por Jose Joaquin de Olmedo se revolto exitosamente contra las autoridades coloniales espanolas en Guayaquil, declarando la independencia de la ciudad. Fue la primera gran declaracion de independencia en lo que hoy es Ecuador.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '\ud83c\uddea\ud83c\udde8',
};

// ---------------------------------------------------------------------------
// Day of the Dead — November 2
// ---------------------------------------------------------------------------

const dayOfTheDead: HolidayData = {
  id: 'ec_day-of-the-dead',
  countryCode: 'ec',
  slugs: { en: 'day-of-the-dead', fr: 'jour-des-morts', es: 'dia-de-los-difuntos' },
  names: { en: 'Day of the Dead', fr: 'Jour des Morts', es: 'Dia de los Difuntos' },

  dateType: 'fixed',
  fixedMonth: 11,
  fixedDay: 2,

  descriptions: {
    en: 'The Day of the Dead (Dia de los Difuntos) on November 2 is a deeply meaningful holiday in Ecuador, when families honor deceased loved ones by visiting cemeteries and sharing traditional foods like colada morada (a purple spiced drink) and guaguas de pan (bread figures shaped like babies).',
    fr: "Le Jour des Morts (Dia de los Difuntos) le 2 novembre est un jour ferie profondement significatif en Equateur, lorsque les familles honorent les proches decedes en visitant les cimetieres et en partageant des aliments traditionnels comme la colada morada (une boisson epicee violette) et les guaguas de pan (figurines de pain en forme de bebes).",
    es: 'El Dia de los Difuntos, el 2 de noviembre, es un dia festivo profundamente significativo en Ecuador, cuando las familias honran a los seres queridos fallecidos visitando cementerios y compartiendo alimentos tradicionales como la colada morada (una bebida morada especiada) y las guaguas de pan (figuras de pan en forma de bebes).',
  },

  history: {
    en: "The Day of the Dead in Ecuador is a syncretic celebration blending Catholic All Souls' Day traditions with pre-Columbian indigenous practices of honoring ancestors. For the indigenous peoples of the Andes, death was not an ending but a transition, and rituals to communicate with and nourish the dead were central to their worldview.\n\nThe Spanish colonization brought the Catholic tradition of praying for the souls of the departed on November 2, which merged with existing indigenous practices. The result is a uniquely Ecuadorian celebration that centers on family, remembrance, and distinctive foods.\n\nThe tradition of preparing colada morada — a thick, purple drink made from black cornflour, berries, spices, and sugar — alongside guaguas de pan (bread figures shaped like swaddled babies) is the culinary heart of the celebration. Families visit cemeteries to clean and decorate graves, share meals with the dead, and spend time reflecting on their memories.",
    fr: "Le Jour des Morts en Equateur est une celebration syncretique melant les traditions catholiques de la Toussaint avec les pratiques precolombiennes indigenes d'honorer les ancetres. Pour les peuples indigenes des Andes, la mort n'etait pas une fin mais une transition, et les rituels pour communiquer avec les morts et les nourrir etaient centraux dans leur vision du monde.\n\nLa colonisation espagnole a apporte la tradition catholique de prier pour les ames des defunts le 2 novembre, qui a fusionne avec les pratiques indigenes existantes. Le resultat est une celebration uniquement equatorienne centree sur la famille, le souvenir et des aliments distinctifs.\n\nLa tradition de preparer la colada morada — une boisson epaisse et violette a base de farine de mais noir, de baies, d'epices et de sucre — accompagnee de guaguas de pan (figurines de pain en forme de bebes emmaillotes) est le coeur culinaire de la celebration. Les familles visitent les cimetieres pour nettoyer et decorer les tombes, partager des repas avec les morts et passer du temps a reflechir a leurs souvenirs.",
    es: "El Dia de los Difuntos en Ecuador es una celebracion sincretica que mezcla las tradiciones catolicas del Dia de Todos los Santos con practicas precolombinas indigenas de honrar a los antepasados. Para los pueblos indigenas de los Andes, la muerte no era un final sino una transicion, y los rituales para comunicarse con los muertos y alimentarlos eran centrales en su cosmovision.\n\nLa colonizacion espanola trajo la tradicion catolica de rezar por las almas de los difuntos el 2 de noviembre, que se fusiono con las practicas indigenas existentes. El resultado es una celebracion unicamente ecuatoriana centrada en la familia, el recuerdo y alimentos distintivos.\n\nLa tradicion de preparar la colada morada — una bebida espesa y morada hecha de harina de maiz negro, bayas, especias y azucar — acompanada de guaguas de pan (figuras de pan en forma de bebes envueltos) es el corazon culinario de la celebracion. Las familias visitan los cementerios para limpiar y decorar las tumbas, compartir comidas con los muertos y pasar tiempo reflexionando sobre sus recuerdos.",
  },

  traditions: {
    en: [
      'Visiting cemeteries to clean and decorate the graves of loved ones',
      'Preparing and drinking colada morada — a purple spiced fruit drink made with black corn',
      'Baking and sharing guaguas de pan — bread figures shaped like swaddled babies',
      'Bringing flowers, especially marigolds, to cemeteries',
      'Sharing a meal at the gravesite as a family',
      'Praying for the souls of the departed',
      'Attending special Mass services for the deceased',
    ],
    fr: [
      'Visiter les cimetieres pour nettoyer et decorer les tombes des proches',
      'Preparer et boire la colada morada — une boisson aux fruits epicee violette faite avec du mais noir',
      'Cuire et partager des guaguas de pan — des figurines de pain en forme de bebes emmaillotes',
      'Apporter des fleurs, en particulier des soucis, aux cimetieres',
      'Partager un repas sur la tombe en famille',
      'Prier pour les ames des defunts',
      'Assister a des messes speciales pour les decedes',
    ],
    es: [
      'Visitar cementerios para limpiar y decorar las tumbas de los seres queridos',
      'Preparar y beber colada morada — una bebida de frutas especiada morada hecha con maiz negro',
      'Hornear y compartir guaguas de pan — figuras de pan en forma de bebes envueltos',
      'Llevar flores, especialmente crisantemos, a los cementerios',
      'Compartir una comida junto a la tumba en familia',
      'Rezar por las almas de los difuntos',
      'Asistir a misas especiales por los fallecidos',
    ],
  },

  funFacts: {
    en: [
      'Colada morada gets its distinctive purple color from black cornflour (harina de maiz negro) combined with blueberries, blackberries, and other fruits.',
      'Guaguas de pan can range from simple bread shapes to elaborate decorated figures that are true works of art.',
      'The word "guagua" comes from Quechua and means "baby" or "child," reflecting the indigenous roots of the tradition.',
      'In some Ecuadorian indigenous communities, families spend the entire night at the cemetery sharing food and drink with the dead.',
      'Bakeries across Ecuador produce millions of guaguas de pan in the weeks leading up to November 2.',
    ],
    fr: [
      'La colada morada tire sa couleur violette distinctive de la farine de mais noir (harina de maiz negro) combinee avec des myrtilles, des mures et d\'autres fruits.',
      'Les guaguas de pan peuvent aller de simples formes de pain a des figurines decorees elaborees qui sont de veritables oeuvres d\'art.',
      'Le mot "guagua" vient du quechua et signifie "bebe" ou "enfant", refletant les racines indigenes de la tradition.',
      'Dans certaines communautes indigenes equatoriennes, les familles passent toute la nuit au cimetiere a partager nourriture et boisson avec les morts.',
      'Les boulangeries a travers l\'Equateur produisent des millions de guaguas de pan dans les semaines precedant le 2 novembre.',
    ],
    es: [
      'La colada morada obtiene su distintivo color morado de la harina de maiz negro combinada con arandanos, moras y otras frutas.',
      'Las guaguas de pan pueden variar desde simples formas de pan hasta figuras decoradas elaboradas que son verdaderas obras de arte.',
      'La palabra "guagua" viene del quechua y significa "bebe" o "nino", reflejando las raices indigenas de la tradicion.',
      'En algunas comunidades indigenas ecuatorianas, las familias pasan toda la noche en el cementerio compartiendo comida y bebida con los muertos.',
      'Las panaderias en todo Ecuador producen millones de guaguas de pan en las semanas previas al 2 de noviembre.',
    ],
  },

  planningChecklist: {
    en: [
      'Buy or prepare colada morada and guaguas de pan in the days before November 2',
      'Plan a visit to the cemetery with flowers and cleaning supplies',
      'Attend special memorial Mass services at your parish',
      'Share the tradition with children and teach them about family history',
      'Visit local bakeries for freshly made guaguas de pan',
    ],
    fr: [
      'Acheter ou preparer la colada morada et les guaguas de pan dans les jours precedant le 2 novembre',
      'Planifier une visite au cimetiere avec des fleurs et des fournitures de nettoyage',
      'Assister aux messes commemoratives speciales de votre paroisse',
      'Partager la tradition avec les enfants et leur enseigner l\'histoire familiale',
      'Visiter les boulangeries locales pour des guaguas de pan fraichement preparees',
    ],
    es: [
      'Comprar o preparar colada morada y guaguas de pan en los dias previos al 2 de noviembre',
      'Planificar una visita al cementerio con flores y suministros de limpieza',
      'Asistir a misas conmemorativas especiales en su parroquia',
      'Compartir la tradicion con los ninos y ensenarles sobre la historia familiar',
      'Visitar panaderias locales para guaguas de pan recien hechas',
    ],
  },

  relatedHolidays: ['ec_christmas', 'ec_guayaquil-independence'],

  seo: {
    en: {
      titleTemplate: 'Day of the Dead {year} Ecuador — Countdown & Traditions',
      descriptionTemplate: 'When is the Day of the Dead {year} in Ecuador? Live countdown, colada morada and guaguas de pan traditions, and celebration guide.',
      keywords: ['Day of the Dead Ecuador', 'Dia de los Difuntos Ecuador', 'colada morada', 'guaguas de pan', 'Ecuador November 2'],
    },
    fr: {
      titleTemplate: 'Jour des Morts {year} Equateur — Compte a rebours et traditions',
      descriptionTemplate: 'Quand est le Jour des Morts {year} en Equateur ? Compte a rebours, traditions de colada morada et guaguas de pan, et guide.',
      keywords: ['Jour des Morts Equateur', 'Dia de los Difuntos', 'colada morada', 'guaguas de pan', 'jours feries Equateur'],
    },
    es: {
      titleTemplate: 'Dia de los Difuntos {year} Ecuador — Cuenta regresiva y tradiciones',
      descriptionTemplate: 'Cuando es el Dia de los Difuntos {year} en Ecuador? Cuenta regresiva, tradiciones de colada morada y guaguas de pan, y guia.',
      keywords: ['Dia de los Difuntos Ecuador', '2 de noviembre Ecuador', 'colada morada', 'guaguas de pan', 'feriados Ecuador'],
    },
  },

  faq: [
    {
      question: { en: 'When is the Day of the Dead {year} in Ecuador?', fr: 'Quand est le Jour des Morts {year} en Equateur ?', es: 'Cuando es el Dia de los Difuntos {year} en Ecuador?' },
      answer: {
        en: 'The Day of the Dead {year} in Ecuador is on {date}. It is always November 2.',
        fr: 'Le Jour des Morts {year} en Equateur est le {date}. C\'est toujours le 2 novembre.',
        es: 'El Dia de los Difuntos {year} en Ecuador es el {date}. Siempre es el 2 de noviembre.',
      },
    },
    {
      question: { en: 'What is colada morada?', fr: 'Qu\'est-ce que la colada morada ?', es: 'Que es la colada morada?' },
      answer: {
        en: 'Colada morada is a traditional Ecuadorian drink prepared for the Day of the Dead. It is a thick, purple beverage made from black cornflour, mixed berries (blackberries, blueberries, strawberries), spices (cinnamon, cloves, allspice), and sweetened with sugar. It is always served alongside guaguas de pan.',
        fr: 'La colada morada est une boisson traditionnelle equatorienne preparee pour le Jour des Morts. C\'est une boisson epaisse et violette faite de farine de mais noir, de baies melangees (mures, myrtilles, fraises), d\'epices (cannelle, clous de girofle, piment de la Jamaique) et sucree. Elle est toujours servie avec des guaguas de pan.',
        es: 'La colada morada es una bebida tradicional ecuatoriana preparada para el Dia de los Difuntos. Es una bebida espesa y morada hecha de harina de maiz negro, bayas mezcladas (moras, arandanos, fresas), especias (canela, clavo, pimienta de Jamaica) y endulzada con azucar. Siempre se sirve junto con guaguas de pan.',
      },
    },
    {
      question: { en: 'What are guaguas de pan?', fr: 'Que sont les guaguas de pan ?', es: 'Que son las guaguas de pan?' },
      answer: {
        en: 'Guaguas de pan are bread figures shaped like swaddled babies, traditionally baked for Ecuador\'s Day of the Dead. The word "guagua" comes from Quechua and means "baby." They are often decorated with colorful icing and filled with jam, chocolate, or dulce de leche.',
        fr: 'Les guaguas de pan sont des figurines de pain en forme de bebes emmaillotes, traditionnellement cuites pour le Jour des Morts en Equateur. Le mot "guagua" vient du quechua et signifie "bebe". Elles sont souvent decorees de glacage colore et fourrees de confiture, de chocolat ou de dulce de leche.',
        es: 'Las guaguas de pan son figuras de pan en forma de bebes envueltos, tradicionalmente horneadas para el Dia de los Difuntos en Ecuador. La palabra "guagua" viene del quechua y significa "bebe". A menudo se decoran con glaseado de colores y se rellenan de mermelada, chocolate o dulce de leche.',
      },
    },
    {
      question: { en: 'Is the Day of the Dead a public holiday in Ecuador?', fr: 'Le Jour des Morts est-il un jour ferie en Equateur ?', es: 'Es el Dia de los Difuntos un dia festivo en Ecuador?' },
      answer: {
        en: 'Yes, November 2 (Day of the Dead) is an official public holiday in Ecuador. Schools, government offices, and most businesses are closed.',
        fr: 'Oui, le 2 novembre (Jour des Morts) est un jour ferie officiel en Equateur. Les ecoles, les bureaux gouvernementaux et la plupart des commerces sont fermes.',
        es: 'Si, el 2 de noviembre (Dia de los Difuntos) es un dia festivo oficial en Ecuador. Las escuelas, oficinas gubernamentales y la mayoria de los negocios estan cerrados.',
      },
    },
  ],

  colorTheme: 'autumn',
  icon: '\ud83d\udc80',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'ec_christmas',
  countryCode: 'ec',
  slugs: { en: 'christmas', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noel', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: 'Christmas Day on December 25 is a beloved holiday in Ecuador, celebrated with family gatherings, traditional foods like pristinos (fried pastries) and bunuelos (fried dough balls), nativity scenes, and Midnight Mass. Ecuadorian Christmas combines Catholic devotion with warm family traditions.',
    fr: "Noel, le 25 decembre, est un jour ferie bien-aime en Equateur, celebre avec des reunions familiales, des aliments traditionnels comme les pristinos (patisseries frites) et les bunuelos (beignets), des creches et la messe de minuit. Le Noel equatorien combine la devotion catholique avec de chaleureuses traditions familiales.",
    es: 'La Navidad, el 25 de diciembre, es un dia festivo querido en Ecuador, celebrado con reuniones familiares, comidas tradicionales como pristinos (pasteles fritos) y bunuelos, nacimientos y Misa de Gallo. La Navidad ecuatoriana combina la devocion catolica con calidas tradiciones familiares.',
  },

  history: {
    en: "Christmas in Ecuador is a deeply religious and family-oriented celebration that reflects the country's strong Catholic heritage. The season begins with Advent and builds through a series of novenas (nine days of prayer) leading up to Christmas Eve. Many communities hold Pase del Nino processions, where children dress as biblical characters and parade through the streets.\n\nThe most famous Pase del Nino takes place in Cuenca on December 24, attracting thousands of participants. Children ride on decorated floats or walk alongside, dressed as Mary, Joseph, shepherds, and angels. The procession ends at the cathedral where a blessing is given.\n\nEcuadorian Christmas Eve dinner features traditional sweets like pristinos (fried pastries drizzled with syrup), bunuelos (deep-fried dough balls), and other regional specialties. Families gather after Midnight Mass to exchange gifts and share the meal together.",
    fr: "Noel en Equateur est une celebration profondement religieuse et orientee vers la famille qui reflete le fort heritage catholique du pays. La saison commence avec l'Avent et se construit a travers une serie de neuvaines (neuf jours de priere) menant a la veille de Noel. De nombreuses communautes organisent des processions du Pase del Nino, ou les enfants se deguisent en personnages bibliques et defilent dans les rues.\n\nLe Pase del Nino le plus celebre a lieu a Cuenca le 24 decembre, attirant des milliers de participants. Les enfants montent sur des chars decores ou marchent a cote, habilles en Marie, Joseph, bergers et anges. La procession se termine a la cathedrale ou une benediction est donnee.\n\nLe diner de la veille de Noel equatorien comprend des sucreries traditionnelles comme les pristinos (patisseries frites arrosees de sirop), les bunuelos (boules de pate frites) et d'autres specialites regionales. Les familles se reunissent apres la messe de minuit pour echanger des cadeaux et partager le repas ensemble.",
    es: "La Navidad en Ecuador es una celebracion profundamente religiosa y orientada a la familia que refleja la fuerte herencia catolica del pais. La temporada comienza con el Adviento y se construye a traves de una serie de novenas (nueve dias de oracion) que conducen a la Nochebuena. Muchas comunidades realizan procesiones del Pase del Nino, donde los ninos se visten como personajes biblicos y desfilan por las calles.\n\nEl Pase del Nino mas famoso tiene lugar en Cuenca el 24 de diciembre, atrayendo a miles de participantes. Los ninos montan en carrozas decoradas o caminan al lado, vestidos como Maria, Jose, pastores y angeles. La procesion termina en la catedral donde se da una bendicion.\n\nLa cena de Nochebuena ecuatoriana presenta dulces tradicionales como pristinos (pasteles fritos rociados con miel), bunuelos (bolas de masa frita) y otras especialidades regionales. Las familias se reunen despues de la Misa de Gallo para intercambiar regalos y compartir la comida juntos.",
  },

  traditions: {
    en: [
      'Attending the Pase del Nino procession, especially the famous one in Cuenca',
      'Setting up elaborate nativity scenes (pesebres) in homes and public spaces',
      'Attending Misa de Gallo (Midnight Mass) on Christmas Eve',
      'Preparing and eating pristinos (fried pastries with syrup) and bunuelos',
      'Exchanging gifts after Midnight Mass with family',
      'Singing Christmas carols (villancicos) during novenas',
      'Decorating homes with Christmas trees, lights, and nativity scenes',
    ],
    fr: [
      'Assister a la procession du Pase del Nino, en particulier la celebre procession de Cuenca',
      'Installer des creches (pesebres) elaborees dans les maisons et les espaces publics',
      'Assister a la Misa de Gallo (messe de minuit) la veille de Noel',
      'Preparer et manger des pristinos (patisseries frites avec du sirop) et des bunuelos',
      'Echanger des cadeaux apres la messe de minuit en famille',
      'Chanter des chants de Noel (villancicos) pendant les neuvaines',
      'Decorer les maisons avec des sapins de Noel, des lumieres et des creches',
    ],
    es: [
      'Asistir a la procesion del Pase del Nino, especialmente la famosa de Cuenca',
      'Montar nacimientos (pesebres) elaborados en hogares y espacios publicos',
      'Asistir a la Misa de Gallo en Nochebuena',
      'Preparar y comer pristinos (pasteles fritos con miel) y bunuelos',
      'Intercambiar regalos despues de la Misa de Gallo en familia',
      'Cantar villancicos durante las novenas',
      'Decorar hogares con arboles de Navidad, luces y nacimientos',
    ],
  },

  funFacts: {
    en: [
      'The Pase del Nino Viajero in Cuenca is one of the largest Christmas processions in all of Latin America, with thousands of participants.',
      'Pristinos are a distinctively Ecuadorian Christmas treat — fried pastry strips drizzled with panela (raw cane sugar) syrup.',
      'Many Ecuadorian families begin their Christmas celebrations during the novena, nine days before Christmas.',
      'Ecuador celebrates Christmas during summer, so the holiday features warm weather, unlike the winter celebrations of the Northern Hemisphere.',
      'In some Ecuadorian communities, children receive gifts from Baby Jesus (Nino Jesus) rather than Santa Claus.',
    ],
    fr: [
      'Le Pase del Nino Viajero a Cuenca est l\'une des plus grandes processions de Noel de toute l\'Amerique latine, avec des milliers de participants.',
      'Les pristinos sont une gourmandise de Noel typiquement equatorienne — des bandes de pate frite arrosees de sirop de panela (sucre de canne brut).',
      'De nombreuses familles equatoriennes commencent leurs celebrations de Noel pendant la neuvaine, neuf jours avant Noel.',
      "L'Equateur celebre Noel en ete, donc le jour ferie se deroule par temps chaud, contrairement aux celebrations hivernales de l'hemisphere nord.",
      'Dans certaines communautes equatoriennes, les enfants recoivent des cadeaux de l\'Enfant Jesus (Nino Jesus) plutot que du Pere Noel.',
    ],
    es: [
      'El Pase del Nino Viajero en Cuenca es una de las procesiones navidenas mas grandes de toda America Latina, con miles de participantes.',
      'Los pristinos son un dulce navideno distintivamente ecuatoriano — tiras de masa frita rociadas con miel de panela.',
      'Muchas familias ecuatorianas comienzan sus celebraciones navidenas durante la novena, nueve dias antes de Navidad.',
      'Ecuador celebra la Navidad en verano, por lo que el dia festivo presenta clima calido, a diferencia de las celebraciones invernales del hemisferio norte.',
      'En algunas comunidades ecuatorianas, los ninos reciben regalos del Nino Jesus en lugar de Papa Noel.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan a trip to Cuenca for the Pase del Nino Viajero on December 24',
      'Buy ingredients for pristinos and bunuelos in advance',
      'Set up your nativity scene (pesebre) in early December',
      'Attend or organize a novena in the days leading up to Christmas',
      'Book Midnight Mass attendance at your local church',
    ],
    fr: [
      'Planifier un voyage a Cuenca pour le Pase del Nino Viajero le 24 decembre',
      'Acheter les ingredients pour les pristinos et bunuelos a l\'avance',
      'Installer votre creche (pesebre) debut decembre',
      'Assister ou organiser une neuvaine dans les jours precedant Noel',
      'Reserver votre place pour la messe de minuit dans votre eglise locale',
    ],
    es: [
      'Planificar un viaje a Cuenca para el Pase del Nino Viajero el 24 de diciembre',
      'Comprar ingredientes para pristinos y bunuelos con anticipacion',
      'Montar su nacimiento (pesebre) a principios de diciembre',
      'Asistir u organizar una novena en los dias previos a la Navidad',
      'Reservar asistencia a la Misa de Gallo en su iglesia local',
    ],
  },

  relatedHolidays: ['ec_new-years-day', 'ec_day-of-the-dead'],

  seo: {
    en: {
      titleTemplate: 'Christmas {year} Ecuador — Countdown & Traditions',
      descriptionTemplate: 'How many days until Christmas {year} in Ecuador? Live countdown, pristinos, bunuelos, Pase del Nino, and Ecuadorian Christmas traditions.',
      keywords: ['Christmas Ecuador', 'Navidad Ecuador', 'pristinos', 'bunuelos', 'Pase del Nino'],
    },
    fr: {
      titleTemplate: 'Noel {year} Equateur — Compte a rebours et traditions',
      descriptionTemplate: 'Combien de jours avant Noel {year} en Equateur ? Compte a rebours, pristinos, bunuelos, Pase del Nino et traditions equatoriennes.',
      keywords: ['Noel Equateur', 'Navidad Ecuador', 'pristinos', 'bunuelos', 'traditions de Noel Equateur'],
    },
    es: {
      titleTemplate: 'Navidad {year} Ecuador — Cuenta regresiva y tradiciones',
      descriptionTemplate: 'Cuantos dias faltan para Navidad {year} en Ecuador? Cuenta regresiva, pristinos, bunuelos, Pase del Nino y tradiciones navidenas ecuatorianas.',
      keywords: ['Navidad Ecuador', 'tradiciones navidenas Ecuador', 'pristinos', 'bunuelos', 'Pase del Nino'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in Ecuador?', fr: 'Quand est Noel {year} en Equateur ?', es: 'Cuando es Navidad {year} en Ecuador?' },
      answer: {
        en: 'Christmas {year} in Ecuador is on {date}. It is always December 25.',
        fr: 'Noel {year} en Equateur est le {date}. C\'est toujours le 25 decembre.',
        es: 'La Navidad {year} en Ecuador es el {date}. Siempre es el 25 de diciembre.',
      },
    },
    {
      question: { en: 'What is the Pase del Nino?', fr: "Qu'est-ce que le Pase del Nino ?", es: 'Que es el Pase del Nino?' },
      answer: {
        en: 'The Pase del Nino is a traditional Ecuadorian Christmas procession where children dress as biblical characters and parade through the streets. The most famous one, the Pase del Nino Viajero, takes place in Cuenca on December 24.',
        fr: 'Le Pase del Nino est une procession de Noel traditionnelle equatorienne ou les enfants se deguisent en personnages bibliques et defilent dans les rues. Le plus celebre, le Pase del Nino Viajero, a lieu a Cuenca le 24 decembre.',
        es: 'El Pase del Nino es una procesion navidena tradicional ecuatoriana donde los ninos se visten como personajes biblicos y desfilan por las calles. El mas famoso, el Pase del Nino Viajero, tiene lugar en Cuenca el 24 de diciembre.',
      },
    },
    {
      question: { en: 'What are pristinos?', fr: 'Que sont les pristinos ?', es: 'Que son los pristinos?' },
      answer: {
        en: 'Pristinos are a traditional Ecuadorian Christmas pastry — thin strips of fried dough drizzled with panela (raw cane sugar) syrup. They are crispy, sweet, and a beloved part of the Ecuadorian Christmas table.',
        fr: 'Les pristinos sont une patisserie de Noel traditionnelle equatorienne — de fines bandes de pate frite arrosees de sirop de panela (sucre de canne brut). Ils sont croustillants, sucres et font partie integrante de la table de Noel equatorienne.',
        es: 'Los pristinos son un dulce navideno tradicional ecuatoriano — tiras delgadas de masa frita rociadas con miel de panela. Son crujientes, dulces y una parte querida de la mesa navidena ecuatoriana.',
      },
    },
    {
      question: { en: 'Is Christmas a public holiday in Ecuador?', fr: 'Noel est-il un jour ferie en Equateur ?', es: 'Es Navidad un dia festivo en Ecuador?' },
      answer: {
        en: 'Yes, December 25 is an official public holiday in Ecuador. Most businesses, schools, and government offices are closed for the day.',
        fr: 'Oui, le 25 decembre est un jour ferie officiel en Equateur. La plupart des commerces, ecoles et bureaux gouvernementaux sont fermes pour la journee.',
        es: 'Si, el 25 de diciembre es un dia festivo oficial en Ecuador. La mayoria de los negocios, escuelas y oficinas gubernamentales estan cerrados.',
      },
    },
  ],

  colorTheme: 'christmas',
  icon: '\ud83c\udf84',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const ecHolidays: HolidayData[] = [
  newYearsDay,
  carnival,
  labourDay,
  guayaquilIndependence,
  dayOfTheDead,
  christmas,
];

export default ecHolidays;
