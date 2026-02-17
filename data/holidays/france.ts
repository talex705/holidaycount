/**
 * France holidays data.
 */

import type { HolidayData } from '@/lib/types';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'fr_new-years-day',
  countryCode: 'fr',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'dia-de-ano-nuevo' },
  names: { en: "New Year's Day", fr: "Jour de l'An", es: 'Dia de Ano Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 is a public holiday in France, marking the start of the calendar year. Celebrations begin the night before with le reveillon de la Saint-Sylvestre, featuring festive dinners, champagne toasts, and fireworks across major cities.",
    fr: "Le Jour de l'An, le 1er janvier, est un jour ferie en France qui marque le debut de la nouvelle annee. Les festivites commencent la veille avec le reveillon de la Saint-Sylvestre, ses diners festifs, ses coupes de champagne et ses feux d'artifice dans toutes les grandes villes.",
    es: "El Dia de Ano Nuevo, el 1 de enero, es un dia festivo en Francia que marca el inicio del ano calendario. Las celebraciones comienzan la noche anterior con la cena de San Silvestre, con cenas festivas, brindis con champan y fuegos artificiales en las principales ciudades.",
  },

  history: {
    en: "January 1 was officially established as the start of the new year in France by the Edict of Roussillon in 1564, issued by King Charles IX. Before this decree, the new year was celebrated at various dates depending on the region, including Easter and March 25.\n\nThe tradition of the reveillon — an elaborate late-night dinner on New Year's Eve — dates back centuries in French culture. Champagne, invented in the region of the same name, became synonymous with New Year's celebrations worldwide.\n\nToday, the Champs-Elysees in Paris hosts one of Europe's largest New Year's Eve gatherings, with hundreds of thousands of people counting down to midnight beneath spectacular light shows.",
    fr: "Le 1er janvier a ete officiellement etabli comme debut de l'annee en France par l'edit de Roussillon en 1564, promulgue par le roi Charles IX. Avant ce decret, le nouvel an etait celebre a differentes dates selon les regions, notamment a Paques ou le 25 mars.\n\nLa tradition du reveillon — un diner tardif et elabore le soir du Nouvel An — remonte a des siecles dans la culture francaise. Le champagne, invente dans la region du meme nom, est devenu synonyme de celebrations du Nouvel An dans le monde entier.\n\nAujourd'hui, les Champs-Elysees a Paris accueillent l'un des plus grands rassemblements du Nouvel An en Europe, avec des centaines de milliers de personnes comptant les secondes jusqu'a minuit sous de spectaculaires jeux de lumieres.",
    es: "El 1 de enero fue establecido oficialmente como inicio del nuevo ano en Francia por el Edicto de Roussillon en 1564, emitido por el rey Carlos IX. Antes de este decreto, el ano nuevo se celebraba en diferentes fechas segun la region, incluyendo Pascua y el 25 de marzo.\n\nLa tradicion del reveillon — una elaborada cena nocturna en la vispera de Ano Nuevo — se remonta a siglos en la cultura francesa. El champan, inventado en la region del mismo nombre, se convirtio en sinonimo de las celebraciones de Ano Nuevo en todo el mundo.\n\nHoy en dia, los Campos Eliseos en Paris albergan una de las mayores concentraciones de Nochevieja de Europa, con cientos de miles de personas contando los segundos hasta la medianoche bajo espectaculares juegos de luces.",
  },

  traditions: {
    en: [
      'Hosting a reveillon dinner on New Year\'s Eve with foie gras, oysters, and champagne',
      'Gathering on the Champs-Elysees in Paris to watch fireworks and light shows',
      'Exchanging "les voeux" — New Year\'s wishes — with friends, family, and colleagues throughout January',
      'Kissing under the mistletoe (le gui) at midnight for good luck',
      'Eating a galette des rois (king cake) in early January to celebrate Epiphany',
      'Making New Year\'s resolutions (bonnes resolutions)',
    ],
    fr: [
      'Organiser un reveillon de la Saint-Sylvestre avec foie gras, huitres et champagne',
      'Se rassembler sur les Champs-Elysees a Paris pour admirer les feux d\'artifice et les jeux de lumieres',
      'Echanger les voeux de bonne annee avec ses proches et collegues tout au long du mois de janvier',
      'S\'embrasser sous le gui a minuit pour porter bonheur',
      'Deguster une galette des rois debut janvier pour celebrer l\'Epiphanie',
      'Prendre de bonnes resolutions pour la nouvelle annee',
    ],
    es: [
      'Organizar una cena de reveillon en Nochevieja con foie gras, ostras y champan',
      'Reunirse en los Campos Eliseos de Paris para ver fuegos artificiales y espectaculos de luces',
      'Intercambiar deseos de Ano Nuevo con amigos, familiares y colegas durante todo enero',
      'Besarse bajo el muerdago a medianoche para atraer la buena suerte',
      'Comer una galette des rois (roscon de reyes) a principios de enero para celebrar la Epifania',
      'Hacer propositos de Ano Nuevo (bonnes resolutions)',
    ],
  },

  funFacts: {
    en: [
      'France produces approximately 300 million bottles of champagne each year, with a significant portion consumed during the holiday season.',
      'The French tradition of exchanging New Year\'s wishes (les voeux) extends throughout the entire month of January — it is not considered late to wish someone "Bonne annee!" until January 31.',
      'The Eiffel Tower\'s New Year\'s Eve light show attracts an estimated 300,000 spectators each year.',
      'In some French regions, it is traditional to eat 12 grapes at midnight — one for each month of the coming year.',
      'The word "reveillon" comes from the French word "reveiller" (to wake up), referring to the tradition of staying awake past midnight.',
    ],
    fr: [
      'La France produit environ 300 millions de bouteilles de champagne par an, dont une part importante est consommee pendant les fetes de fin d\'annee.',
      'La tradition francaise d\'echanger les voeux s\'etend sur tout le mois de janvier — il n\'est pas considere comme tard de souhaiter "Bonne annee !" jusqu\'au 31 janvier.',
      'Le spectacle de lumieres de la Tour Eiffel au Nouvel An attire environ 300 000 spectateurs chaque annee.',
      'Dans certaines regions de France, il est de tradition de manger 12 raisins a minuit — un pour chaque mois de l\'annee a venir.',
      'Le mot "reveillon" vient du verbe francais "reveiller", en reference a la tradition de rester eveille apres minuit.',
    ],
    es: [
      'Francia produce aproximadamente 300 millones de botellas de champan al ano, y una parte significativa se consume durante las fiestas.',
      'La tradicion francesa de intercambiar deseos de Ano Nuevo se extiende durante todo el mes de enero — no se considera tarde desear "Bonne annee!" hasta el 31 de enero.',
      'El espectaculo de luces de la Torre Eiffel en Nochevieja atrae a unos 300 000 espectadores cada ano.',
      'En algunas regiones francesas, es tradicion comer 12 uvas a medianoche — una por cada mes del ano entrante.',
      'La palabra "reveillon" proviene del verbo frances "reveiller" (despertar), en referencia a la tradicion de quedarse despierto pasada la medianoche.',
    ],
  },

  planningChecklist: {
    en: [
      'Book restaurant reservations for reveillon dinner well in advance — popular venues sell out months ahead',
      'Purchase champagne, foie gras, and oysters for a traditional French New Year\'s Eve celebration',
      'Plan travel to Paris early if attending the Champs-Elysees celebrations',
      'Prepare your list of "voeux" — New Year\'s greeting cards and messages to send throughout January',
      'Order a galette des rois from your local boulangerie for the first week of January',
    ],
    fr: [
      'Reserver le restaurant pour le reveillon bien a l\'avance — les meilleures adresses affichent complet des mois a l\'avance',
      'Acheter champagne, foie gras et huitres pour un reveillon de la Saint-Sylvestre traditionnel',
      'Planifier son voyage a Paris si l\'on souhaite assister aux celebrations des Champs-Elysees',
      'Preparer sa liste de voeux — cartes et messages de bonne annee a envoyer tout au long de janvier',
      'Commander une galette des rois chez son boulanger pour la premiere semaine de janvier',
    ],
    es: [
      'Reservar restaurante para la cena de reveillon con mucha antelacion — los mejores sitios se agotan meses antes',
      'Comprar champan, foie gras y ostras para una celebracion tradicional francesa de Nochevieja',
      'Planificar el viaje a Paris con antelacion si se desea asistir a las celebraciones de los Campos Eliseos',
      'Preparar la lista de deseos de Ano Nuevo — tarjetas y mensajes para enviar durante todo enero',
      'Encargar una galette des rois en la panaderia local para la primera semana de enero',
    ],
  },

  relatedHolidays: ['fr_christmas'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} France — Countdown & Celebration Guide",
      descriptionTemplate: "When is New Year's Day {year} in France? Live countdown to January 1, reveillon traditions, and celebration guide.",
      keywords: ["New Year's Day France", 'Jour de l\'An', 'French New Year', 'reveillon Saint-Sylvestre', 'Paris New Year\'s Eve'],
    },
    fr: {
      titleTemplate: "Jour de l'An {year} France — Compte a rebours et guide",
      descriptionTemplate: "Quand tombe le Jour de l'An {year} ? Compte a rebours jusqu'au 1er janvier, traditions du reveillon et guide des celebrations.",
      keywords: ['Jour de l\'An France', 'reveillon Saint-Sylvestre', 'Nouvel An France', '1er janvier ferie', 'fete du Nouvel An'],
    },
    es: {
      titleTemplate: 'Dia de Ano Nuevo {year} Francia — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Dia de Ano Nuevo {year} en Francia? Cuenta regresiva hasta el 1 de enero, tradiciones del reveillon y guia de celebraciones.',
      keywords: ['Ano Nuevo Francia', 'Jour de l\'An', 'reveillon', 'Nochevieja Paris', 'festivos Francia'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in France?", fr: "Quand tombe le Jour de l'An {year} en France ?", es: 'Cuando es el Dia de Ano Nuevo {year} en Francia?' },
      answer: {
        en: "New Year's Day {year} in France is on {date} ({dayOfWeek}). It is always January 1 and is a national public holiday (jour ferie).",
        fr: "Le Jour de l'An {year} tombe le {date} ({dayOfWeek}). C'est toujours le 1er janvier et c'est un jour ferie national.",
        es: 'El Dia de Ano Nuevo {year} en Francia es el {date} ({dayOfWeek}). Siempre es el 1 de enero y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'What is a French reveillon?', fr: 'Qu\'est-ce que le reveillon de la Saint-Sylvestre ?', es: 'Que es un reveillon frances?' },
      answer: {
        en: 'A reveillon is a festive late-night dinner held on New Year\'s Eve (and also Christmas Eve) in France. It typically features luxurious dishes such as foie gras, oysters, smoked salmon, and champagne, and celebrations continue well past midnight.',
        fr: 'Le reveillon est un diner festif tardif organise le soir du Nouvel An (et aussi la veille de Noel). Il comprend generalement des plats luxueux tels que le foie gras, les huitres, le saumon fume et le champagne, et les festivites se poursuivent bien apres minuit.',
        es: 'Un reveillon es una cena festiva nocturna que se celebra en Nochevieja (y tambien en Nochebuena) en Francia. Suele incluir platos lujosos como foie gras, ostras, salmon ahumado y champan, y las celebraciones continuan mucho despues de medianoche.',
      },
    },
    {
      question: { en: "Is New Year's Day a public holiday in France?", fr: "Le Jour de l'An est-il un jour ferie en France ?", es: 'Es el Dia de Ano Nuevo un dia festivo en Francia?' },
      answer: {
        en: "Yes, January 1 is one of France's 11 official public holidays (jours feries). Most businesses, shops, and public services are closed.",
        fr: "Oui, le 1er janvier est l'un des 11 jours feries officiels en France. La plupart des commerces, entreprises et services publics sont fermes.",
        es: 'Si, el 1 de enero es uno de los 11 dias festivos oficiales de Francia. La mayoria de los comercios, empresas y servicios publicos estan cerrados.',
      },
    },
    {
      question: { en: 'What do French people eat on New Year\'s Eve?', fr: 'Que mange-t-on au reveillon du Nouvel An en France ?', es: 'Que comen los franceses en Nochevieja?' },
      answer: {
        en: 'The traditional French reveillon features foie gras, oysters, smoked salmon, lobster, and champagne. Dessert often includes a buche de Noel (yule log cake) or macarons. Each region has its own specialities.',
        fr: 'Le reveillon traditionnel francais comprend du foie gras, des huitres, du saumon fume, du homard et du champagne. Le dessert inclut souvent une buche de Noel ou des macarons. Chaque region a ses propres specialites.',
        es: 'El reveillon tradicional frances incluye foie gras, ostras, salmon ahumado, langosta y champan. El postre suele incluir un buche de Noel (tronco de Navidad) o macarons. Cada region tiene sus propias especialidades.',
      },
    },
  ],

  colorTheme: 'gold-black',
  icon: '\ud83c\udf86',
};

// ---------------------------------------------------------------------------
// Labour Day — May 1
// ---------------------------------------------------------------------------

const labourDay: HolidayData = {
  id: 'fr_labour-day',
  countryCode: 'fr',
  slugs: { en: 'labour-day', fr: 'fete-du-travail', es: 'dia-del-trabajo' },
  names: { en: 'Labour Day', fr: 'Fete du Travail', es: 'Dia del Trabajo' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 1,

  descriptions: {
    en: 'Labour Day on May 1 is a public holiday in France celebrating workers\' rights. It is unique in France for its tradition of giving lily of the valley (muguet) to loved ones as a symbol of good luck and the return of spring.',
    fr: "La Fete du Travail, le 1er mai, est un jour ferie en France celebrant les droits des travailleurs. Elle est marquee par la tradition unique d'offrir du muguet a ses proches, symbole de bonheur et du retour du printemps.",
    es: 'El Dia del Trabajo, el 1 de mayo, es un dia festivo en Francia que celebra los derechos de los trabajadores. Es unico en Francia por su tradicion de regalar lirio de los valles (muguet) a los seres queridos como simbolo de buena suerte y del regreso de la primavera.',
  },

  history: {
    en: "May 1 became an official public holiday in France in 1947, but its roots as a workers' day go back much further. In 1889, the Second International in Paris chose May 1 to commemorate the 1886 Haymarket affair in Chicago and to advocate for an eight-hour workday.\n\nThe tradition of giving lily of the valley on May 1 dates back to 1561, when King Charles IX received a sprig of the flower as a good-luck charm and was so charmed that he decided to offer it to the ladies of the court every year on that date.\n\nMay 1 is the only French public holiday on which employers are legally required to give workers a paid day off. On this day, anyone is permitted to sell muguet on the street without a licence or tax — a unique legal exception.",
    fr: "Le 1er mai est devenu un jour ferie officiel en France en 1947, mais ses racines en tant que journee des travailleurs remontent bien plus loin. En 1889, la Deuxieme Internationale a Paris choisit le 1er mai pour commemorer les evenements de Haymarket a Chicago en 1886 et militer pour la journee de travail de huit heures.\n\nLa tradition d'offrir du muguet le 1er mai remonte a 1561, lorsque le roi Charles IX recut un brin de cette fleur comme porte-bonheur et fut si charme qu'il decida d'en offrir aux dames de la cour chaque annee a cette date.\n\nLe 1er mai est le seul jour ferie francais ou les employeurs sont legalement tenus d'accorder un jour de conge paye aux salaries. Ce jour-la, toute personne est autorisee a vendre du muguet dans la rue sans licence ni taxe — une exception juridique unique.",
    es: "El 1 de mayo se convirtio en dia festivo oficial en Francia en 1947, pero sus raices como dia de los trabajadores se remontan mucho mas atras. En 1889, la Segunda Internacional en Paris eligio el 1 de mayo para conmemorar los sucesos de Haymarket en Chicago en 1886 y defender la jornada laboral de ocho horas.\n\nLa tradicion de regalar lirio de los valles el 1 de mayo se remonta a 1561, cuando el rey Carlos IX recibio una ramita de la flor como amuleto de buena suerte y quedo tan encantado que decidio ofrecerla a las damas de la corte cada ano en esa fecha.\n\nEl 1 de mayo es el unico dia festivo frances en el que los empleadores estan legalmente obligados a conceder un dia libre remunerado a los trabajadores. Ese dia, cualquier persona puede vender muguet en la calle sin licencia ni impuestos — una excepcion legal unica.",
  },

  traditions: {
    en: [
      'Offering sprigs of lily of the valley (muguet) to friends and family for good luck',
      'Street vendors selling muguet on corners and in markets throughout France',
      'Trade union marches and demonstrations advocating for workers\' rights',
      'Enjoying a day off from work — the only French holiday with a legal guarantee of a paid day off',
      'Pinning a sprig of muguet to clothing as a sign of spring and solidarity',
      'Gathering wild muguet in forests and woodlands',
      'Political rallies and speeches by major unions and parties',
    ],
    fr: [
      'Offrir des brins de muguet a ses proches pour porter bonheur',
      'Vendeurs ambulants proposant du muguet a chaque coin de rue et sur les marches de toute la France',
      'Defiles et manifestations syndicales pour defendre les droits des travailleurs',
      'Profiter d\'un jour de repos — le seul jour ferie francais avec une garantie legale de jour chome paye',
      'Epingler un brin de muguet sur ses vetements en signe de printemps et de solidarite',
      'Cueillir du muguet sauvage dans les forets et les sous-bois',
      'Rassemblements politiques et discours des grands syndicats et partis',
    ],
    es: [
      'Regalar ramitas de lirio de los valles (muguet) a amigos y familiares para la buena suerte',
      'Vendedores ambulantes ofreciendo muguet en esquinas y mercados de toda Francia',
      'Marchas y manifestaciones sindicales por los derechos de los trabajadores',
      'Disfrutar de un dia libre — el unico festivo frances con garantia legal de dia libre remunerado',
      'Prender una ramita de muguet en la ropa como senal de primavera y solidaridad',
      'Recoger muguet silvestre en bosques y arboledas',
      'Mitines politicos y discursos de los principales sindicatos y partidos',
    ],
  },

  funFacts: {
    en: [
      'Approximately 60 million sprigs of lily of the valley are sold in France every May 1.',
      'The tradition of giving muguet on May 1 was started by King Charles IX in 1561.',
      'May 1 is the only French public holiday where street selling of muguet is allowed without a licence or tax.',
      'Lily of the valley is actually toxic if ingested — despite its delicate appearance, it contains cardiac glycosides.',
      'The largest May Day union marches in France regularly draw hundreds of thousands of participants across all major cities.',
    ],
    fr: [
      'Environ 60 millions de brins de muguet sont vendus en France chaque 1er mai.',
      'La tradition d\'offrir du muguet le 1er mai a ete inauguree par le roi Charles IX en 1561.',
      'Le 1er mai est le seul jour ferie francais ou la vente de muguet dans la rue est autorisee sans licence ni taxe.',
      'Le muguet est en realite toxique s\'il est ingere — malgre son apparence delicate, il contient des glycosides cardiaques.',
      'Les plus grands defiles syndicaux du 1er mai en France rassemblent regulierement des centaines de milliers de participants dans toutes les grandes villes.',
    ],
    es: [
      'Aproximadamente 60 millones de ramitas de lirio de los valles se venden en Francia cada 1 de mayo.',
      'La tradicion de regalar muguet el 1 de mayo fue iniciada por el rey Carlos IX en 1561.',
      'El 1 de mayo es el unico dia festivo frances en el que se permite la venta callejera de muguet sin licencia ni impuestos.',
      'El lirio de los valles es en realidad toxico si se ingiere — a pesar de su delicada apariencia, contiene glucosidos cardiacos.',
      'Las mayores marchas sindicales del 1 de mayo en Francia reunen regularmente a cientos de miles de participantes en todas las grandes ciudades.',
    ],
  },

  planningChecklist: {
    en: [
      'Buy muguet early in the morning on May 1 — the best sprigs sell out quickly',
      'Plan ahead for closures — nearly all shops and businesses are closed on this day',
      'Check local union march routes if you want to participate or need to plan around road closures',
      'Gather muguet from the countryside if you prefer wild-picked flowers (but respect private property)',
      'Stock up on groceries the day before, as supermarkets will be closed',
    ],
    fr: [
      'Acheter son muguet tot le matin du 1er mai — les plus beaux brins partent vite',
      'Prevoir les fermetures — presque tous les commerces et entreprises sont fermes ce jour-la',
      'Verifier les itineraires des defiles syndicaux si l\'on souhaite y participer ou les eviter',
      'Cueillir du muguet a la campagne si l\'on prefere les fleurs sauvages (mais respecter la propriete privee)',
      'Faire ses courses la veille, car les supermarches seront fermes',
    ],
    es: [
      'Comprar el muguet temprano por la manana del 1 de mayo — las mejores ramitas se agotan rapido',
      'Planificar con antelacion los cierres — casi todas las tiendas y negocios estan cerrados ese dia',
      'Consultar las rutas de las marchas sindicales si se desea participar o evitar los cortes de trafico',
      'Recoger muguet del campo si se prefieren flores silvestres (pero respetar la propiedad privada)',
      'Hacer la compra el dia anterior, ya que los supermercados estaran cerrados',
    ],
  },

  relatedHolidays: ['fr_bastille-day'],

  seo: {
    en: {
      titleTemplate: 'Labour Day {year} France — May 1 Countdown & Guide',
      descriptionTemplate: 'When is Labour Day {year} in France? Live countdown to May 1, muguet tradition, and French Fete du Travail history.',
      keywords: ['Labour Day France', 'Fete du Travail', 'May 1 France', 'muguet lily of the valley', 'French public holiday May'],
    },
    fr: {
      titleTemplate: 'Fete du Travail {year} France — Compte a rebours et guide',
      descriptionTemplate: 'Quand tombe la Fete du Travail {year} ? Compte a rebours jusqu\'au 1er mai, tradition du muguet et histoire de ce jour ferie.',
      keywords: ['Fete du Travail France', '1er mai', 'muguet 1er mai', 'jour ferie mai France', 'fete des travailleurs'],
    },
    es: {
      titleTemplate: 'Dia del Trabajo {year} Francia — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Dia del Trabajo {year} en Francia? Cuenta regresiva hasta el 1 de mayo, tradicion del muguet e historia.',
      keywords: ['Dia del Trabajo Francia', '1 de mayo Francia', 'muguet lirio de los valles', 'festivo mayo Francia', 'Fete du Travail'],
    },
  },

  faq: [
    {
      question: { en: 'When is Labour Day {year} in France?', fr: 'Quand tombe la Fete du Travail {year} en France ?', es: 'Cuando es el Dia del Trabajo {year} en Francia?' },
      answer: {
        en: 'Labour Day {year} in France is on {date} ({dayOfWeek}). It is always May 1 and is a national public holiday.',
        fr: 'La Fete du Travail {year} tombe le {date} ({dayOfWeek}). C\'est toujours le 1er mai et c\'est un jour ferie national.',
        es: 'El Dia del Trabajo {year} en Francia es el {date} ({dayOfWeek}). Siempre es el 1 de mayo y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'Why do the French give lily of the valley on May 1?', fr: 'Pourquoi offre-t-on du muguet le 1er mai ?', es: 'Por que los franceses regalan lirio de los valles el 1 de mayo?' },
      answer: {
        en: 'The tradition dates back to 1561, when King Charles IX received lily of the valley as a good-luck charm and decided to offer it to the ladies of his court every May 1. The custom spread to the general population and has been a beloved French tradition ever since.',
        fr: 'La tradition remonte a 1561, lorsque le roi Charles IX recut du muguet comme porte-bonheur et decida d\'en offrir aux dames de sa cour chaque 1er mai. La coutume s\'est repandue dans la population et reste une tradition francaise cherie depuis.',
        es: 'La tradicion se remonta a 1561, cuando el rey Carlos IX recibio lirio de los valles como amuleto de buena suerte y decidio ofrecerlo a las damas de su corte cada 1 de mayo. La costumbre se extendio a la poblacion general y ha sido una querida tradicion francesa desde entonces.',
      },
    },
    {
      question: { en: 'Is May 1 the only mandatory paid day off in France?', fr: 'Le 1er mai est-il le seul jour chome obligatoirement paye en France ?', es: 'Es el 1 de mayo el unico dia libre obligatorio y pagado en Francia?' },
      answer: {
        en: 'Yes, May 1 is the only French public holiday on which employers are legally required to give workers a paid day off. For the other 10 public holidays, employers may require employees to work (with additional compensation).',
        fr: 'Oui, le 1er mai est le seul jour ferie francais ou les employeurs sont legalement tenus d\'accorder un jour chome paye a leurs salaries. Pour les 10 autres jours feries, les employeurs peuvent demander aux salaries de travailler (avec une compensation supplementaire).',
        es: 'Si, el 1 de mayo es el unico dia festivo frances en el que los empleadores estan legalmente obligados a conceder un dia libre remunerado. Para los otros 10 dias festivos, los empleadores pueden exigir que los empleados trabajen (con compensacion adicional).',
      },
    },
    {
      question: { en: 'Are shops open on May 1 in France?', fr: 'Les magasins sont-ils ouverts le 1er mai en France ?', es: 'Estan abiertas las tiendas el 1 de mayo en Francia?' },
      answer: {
        en: 'Almost all shops, businesses, and public services are closed on May 1. It is the most strictly observed public holiday in France. Some restaurants and tourist attractions may open, but expect limited availability.',
        fr: 'Presque tous les commerces, entreprises et services publics sont fermes le 1er mai. C\'est le jour ferie le plus strictement observe en France. Certains restaurants et sites touristiques peuvent ouvrir, mais la disponibilite est limitee.',
        es: 'Casi todas las tiendas, negocios y servicios publicos estan cerrados el 1 de mayo. Es el dia festivo mas estrictamente observado en Francia. Algunos restaurantes y atracciones turisticas pueden abrir, pero la disponibilidad es limitada.',
      },
    },
  ],

  colorTheme: 'red-white',
  icon: '\ud83d\udc90',
};

// ---------------------------------------------------------------------------
// Bastille Day — July 14
// ---------------------------------------------------------------------------

const bastilleDay: HolidayData = {
  id: 'fr_bastille-day',
  countryCode: 'fr',
  slugs: { en: 'bastille-day', fr: 'fete-nationale', es: 'dia-de-la-bastilla' },
  names: { en: 'Bastille Day', fr: 'Fete nationale', es: 'Dia de la Bastilla' },

  dateType: 'fixed',
  fixedMonth: 7,
  fixedDay: 14,

  descriptions: {
    en: "Bastille Day on July 14 is France's national holiday, commemorating the storming of the Bastille fortress in 1789 and the Fete de la Federation in 1790. It features the famous military parade on the Champs-Elysees, spectacular fireworks at the Eiffel Tower, and the beloved bals des pompiers (firefighters' balls) across the country.",
    fr: "La Fete nationale du 14 juillet est le jour de fete nationale de la France, commemorant la prise de la Bastille en 1789 et la Fete de la Federation en 1790. Elle est marquee par le celebre defile militaire sur les Champs-Elysees, le spectaculaire feu d'artifice de la Tour Eiffel et les traditionnels bals des pompiers dans tout le pays.",
    es: 'El Dia de la Bastilla, el 14 de julio, es la fiesta nacional de Francia, que conmemora la toma de la Bastilla en 1789 y la Fiesta de la Federacion en 1790. Cuenta con el famoso desfile militar en los Campos Eliseos, espectaculares fuegos artificiales en la Torre Eiffel y los queridos bailes de los bomberos en todo el pais.',
  },

  history: {
    en: "The storming of the Bastille on July 14, 1789, is one of the defining moments of the French Revolution. The Bastille was a royal fortress and prison in Paris that symbolised the authority of the monarchy. When revolutionaries stormed and captured it, it became a powerful symbol of the people's uprising against tyranny.\n\nThe following year, on July 14, 1790, the Fete de la Federation was held on the Champ de Mars to celebrate the first anniversary of the revolution and the unity of the French nation. It is actually this event of national reconciliation, rather than the storming itself, that the holiday officially commemorates.\n\nJuly 14 was declared the French national holiday in 1880 under the Third Republic. The military parade on the Champs-Elysees, the oldest and largest regular military parade in Europe, has been held annually since 1880 and is reviewed by the President of the Republic.",
    fr: "La prise de la Bastille le 14 juillet 1789 est l'un des moments fondateurs de la Revolution francaise. La Bastille etait une forteresse royale et une prison a Paris qui symbolisait l'autorite de la monarchie. Lorsque les revolutionnaires la prirent d'assaut, elle devint un puissant symbole du soulevement populaire contre la tyrannie.\n\nL'annee suivante, le 14 juillet 1790, la Fete de la Federation se tint au Champ de Mars pour celebrer le premier anniversaire de la Revolution et l'unite de la nation francaise. C'est en fait cet evenement de reconciliation nationale, plutot que la prise de la Bastille elle-meme, que la fete commemoree officiellement.\n\nLe 14 juillet a ete declare fete nationale francaise en 1880 sous la Troisieme Republique. Le defile militaire sur les Champs-Elysees, le plus ancien et le plus grand defile militaire regulier d'Europe, est organise chaque annee depuis 1880 et est passe en revue par le President de la Republique.",
    es: "La toma de la Bastilla el 14 de julio de 1789 es uno de los momentos definitorios de la Revolucion Francesa. La Bastilla era una fortaleza real y prision en Paris que simbolizaba la autoridad de la monarquia. Cuando los revolucionarios la asaltaron y capturaron, se convirtio en un poderoso simbolo del levantamiento popular contra la tirania.\n\nAl ano siguiente, el 14 de julio de 1790, se celebro la Fiesta de la Federacion en el Campo de Marte para celebrar el primer aniversario de la revolucion y la unidad de la nacion francesa. En realidad es este evento de reconciliacion nacional, y no el asalto en si, lo que la festividad conmemora oficialmente.\n\nEl 14 de julio fue declarado fiesta nacional francesa en 1880 bajo la Tercera Republica. El desfile militar en los Campos Eliseos, el mas antiguo y grande desfile militar regular de Europa, se celebra anualmente desde 1880 y es supervisado por el Presidente de la Republica.",
  },

  traditions: {
    en: [
      'Watching the military parade on the Champs-Elysees — the oldest and largest regular military parade in Europe',
      'Attending the spectacular fireworks display at the Eiffel Tower',
      'Dancing at the bals des pompiers (firefighters\' balls) held at fire stations across France on July 13 and 14',
      'Enjoying communal meals, picnics, and outdoor celebrations with family and friends',
      'Flying the tricolour flag and decorating in blue, white, and red',
      'Watching the aerial displays by the Patrouille de France at the parade',
      'Attending local fireworks shows in towns and villages across the country',
    ],
    fr: [
      'Regarder le defile militaire sur les Champs-Elysees — le plus ancien et le plus grand defile militaire regulier d\'Europe',
      'Assister au spectaculaire feu d\'artifice de la Tour Eiffel',
      'Danser aux bals des pompiers organises dans les casernes de toute la France les 13 et 14 juillet',
      'Profiter de repas en commun, de pique-niques et de celebrations en plein air en famille et entre amis',
      'Arborer le drapeau tricolore et decorer en bleu, blanc et rouge',
      'Admirer les demonstrations aeriennes de la Patrouille de France lors du defile',
      'Assister aux feux d\'artifice locaux dans les villes et villages du pays',
    ],
    es: [
      'Ver el desfile militar en los Campos Eliseos — el mas antiguo y grande desfile militar regular de Europa',
      'Asistir al espectacular show de fuegos artificiales en la Torre Eiffel',
      'Bailar en los bailes de los bomberos celebrados en cuarteles de toda Francia los dias 13 y 14 de julio',
      'Disfrutar de comidas comunitarias, picnics y celebraciones al aire libre con familia y amigos',
      'Ondear la bandera tricolor y decorar en azul, blanco y rojo',
      'Ver las exhibiciones aereas de la Patrouille de France durante el desfile',
      'Asistir a fuegos artificiales locales en ciudades y pueblos de todo el pais',
    ],
  },

  funFacts: {
    en: [
      'The Bastille Day military parade on the Champs-Elysees has been held every year since 1880, making it the oldest and largest regular military parade in Europe.',
      'The bals des pompiers (firefighters\' balls) began in 1937 in Paris and have since spread to fire stations across the entire country.',
      'The Eiffel Tower fireworks show on July 14 is watched by an estimated 500,000 people from the Champ de Mars and surrounding areas.',
      'The Patrouille de France, the French Air Force aerobatic team, opens the parade by trailing the colours of the French flag across the sky.',
      'When the Bastille was stormed in 1789, there were only seven prisoners inside — far fewer than the popular image suggests.',
    ],
    fr: [
      'Le defile militaire du 14 juillet sur les Champs-Elysees est organise chaque annee depuis 1880, ce qui en fait le plus ancien et le plus grand defile militaire regulier d\'Europe.',
      'Les bals des pompiers ont debute en 1937 a Paris et se sont depuis etendus aux casernes de tout le pays.',
      'Le feu d\'artifice de la Tour Eiffel le 14 juillet est regarde par environ 500 000 personnes depuis le Champ de Mars et les alentours.',
      'La Patrouille de France, la formation acrobatique de l\'Armee de l\'air, ouvre le defile en tracant les couleurs du drapeau francais dans le ciel.',
      'Lorsque la Bastille fut prise d\'assaut en 1789, il n\'y avait que sept prisonniers a l\'interieur — bien moins que ce que l\'imagerie populaire laisse croire.',
    ],
    es: [
      'El desfile militar del 14 de julio en los Campos Eliseos se celebra cada ano desde 1880, siendo el mas antiguo y grande desfile militar regular de Europa.',
      'Los bailes de los bomberos comenzaron en 1937 en Paris y desde entonces se han extendido a cuarteles de todo el pais.',
      'El espectaculo de fuegos artificiales de la Torre Eiffel el 14 de julio es visto por unas 500 000 personas desde el Campo de Marte y alrededores.',
      'La Patrouille de France, el equipo acrobatico de la Fuerza Aerea, abre el desfile trazando los colores de la bandera francesa en el cielo.',
      'Cuando la Bastilla fue asaltada en 1789, solo habia siete prisioneros dentro — mucho menos de lo que la imagen popular sugiere.',
    ],
  },

  planningChecklist: {
    en: [
      'Arrive early at the Champs-Elysees to secure a good viewing spot for the military parade',
      'Book accommodation in Paris well in advance if attending the celebrations — July 14 is peak tourist season',
      'Check the schedule for bals des pompiers at local fire stations on the evenings of July 13 and 14',
      'Find a good spot along the Seine or on the Champ de Mars for the Eiffel Tower fireworks',
      'Wear blue, white, and red to join in the patriotic spirit',
    ],
    fr: [
      'Arriver tot sur les Champs-Elysees pour avoir un bon emplacement pour le defile militaire',
      'Reserver un hebergement a Paris bien a l\'avance si l\'on assiste aux celebrations — le 14 juillet est en pleine saison touristique',
      'Consulter les horaires des bals des pompiers dans les casernes locales les soirs des 13 et 14 juillet',
      'Trouver un bon emplacement le long de la Seine ou sur le Champ de Mars pour le feu d\'artifice de la Tour Eiffel',
      'Porter du bleu, du blanc et du rouge pour participer a l\'esprit patriotique',
    ],
    es: [
      'Llegar temprano a los Campos Eliseos para asegurar un buen lugar para ver el desfile militar',
      'Reservar alojamiento en Paris con mucha antelacion si se asiste a las celebraciones — el 14 de julio es temporada alta de turismo',
      'Consultar los horarios de los bailes de los bomberos en los cuarteles locales las noches del 13 y 14 de julio',
      'Encontrar un buen lugar a lo largo del Sena o en el Campo de Marte para los fuegos artificiales de la Torre Eiffel',
      'Vestir de azul, blanco y rojo para unirse al espiritu patriotico',
    ],
  },

  relatedHolidays: ['fr_armistice-day'],

  seo: {
    en: {
      titleTemplate: 'Bastille Day {year} France — July 14 Countdown & Guide',
      descriptionTemplate: 'When is Bastille Day {year}? Live countdown to July 14, military parade, Eiffel Tower fireworks, and celebration guide.',
      keywords: ['Bastille Day', 'July 14 France', 'Fete nationale', 'French national holiday', 'Champs-Elysees parade'],
    },
    fr: {
      titleTemplate: 'Fete nationale {year} France — Compte a rebours du 14 juillet',
      descriptionTemplate: 'Quand tombe la Fete nationale {year} ? Compte a rebours du 14 juillet, defile militaire, feu d\'artifice et guide des celebrations.',
      keywords: ['Fete nationale France', '14 juillet', 'defile 14 juillet', 'feu d\'artifice Tour Eiffel', 'bal des pompiers'],
    },
    es: {
      titleTemplate: 'Dia de la Bastilla {year} Francia — Cuenta regresiva del 14 de julio',
      descriptionTemplate: 'Cuando es el Dia de la Bastilla {year}? Cuenta regresiva hasta el 14 de julio, desfile militar, fuegos artificiales y guia de celebraciones.',
      keywords: ['Dia de la Bastilla', '14 de julio Francia', 'Fete nationale', 'fiesta nacional francesa', 'fuegos artificiales Torre Eiffel'],
    },
  },

  faq: [
    {
      question: { en: 'When is Bastille Day {year}?', fr: 'Quand tombe la Fete nationale {year} ?', es: 'Cuando es el Dia de la Bastilla {year}?' },
      answer: {
        en: 'Bastille Day {year} is on {date} ({dayOfWeek}). It is always July 14 and is France\'s national holiday.',
        fr: 'La Fete nationale {year} tombe le {date} ({dayOfWeek}). C\'est toujours le 14 juillet et c\'est la fete nationale de la France.',
        es: 'El Dia de la Bastilla {year} es el {date} ({dayOfWeek}). Siempre es el 14 de julio y es la fiesta nacional de Francia.',
      },
    },
    {
      question: { en: 'What are the bals des pompiers?', fr: 'Que sont les bals des pompiers ?', es: 'Que son los bailes de los bomberos?' },
      answer: {
        en: 'The bals des pompiers are popular dance parties held at fire stations across France on the evenings of July 13 and 14. Started in Paris in 1937, they have become a beloved Bastille Day tradition featuring music, dancing, drinks, and a festive atmosphere.',
        fr: 'Les bals des pompiers sont des fetes dansantes populaires organisees dans les casernes de pompiers de toute la France les soirs des 13 et 14 juillet. Nes a Paris en 1937, ils sont devenus une tradition incontournable du 14 juillet avec musique, danse, boissons et ambiance festive.',
        es: 'Los bailes de los bomberos son fiestas populares de baile celebradas en cuarteles de bomberos de toda Francia las noches del 13 y 14 de julio. Comenzaron en Paris en 1937 y se han convertido en una querida tradicion del Dia de la Bastilla con musica, baile, bebidas y un ambiente festivo.',
      },
    },
    {
      question: { en: 'What happened at the storming of the Bastille?', fr: "Que s'est-il passe lors de la prise de la Bastille ?", es: 'Que ocurrio en la toma de la Bastilla?' },
      answer: {
        en: 'On July 14, 1789, Parisian revolutionaries stormed the Bastille fortress, a royal prison symbolising monarchical tyranny. The event is considered the spark of the French Revolution. Although only seven prisoners were found inside, the fall of the Bastille represented the collapse of royal authority.',
        fr: 'Le 14 juillet 1789, des revolutionnaires parisiens prirent d\'assaut la Bastille, une prison royale symbolisant la tyrannie monarchique. L\'evenement est considere comme l\'etincelle de la Revolution francaise. Bien que seuls sept prisonniers aient ete trouves a l\'interieur, la chute de la Bastille representait l\'effondrement de l\'autorite royale.',
        es: 'El 14 de julio de 1789, revolucionarios parisinos asaltaron la fortaleza de la Bastilla, una prision real que simbolizaba la tirania monarquica. El evento se considera la chispa de la Revolucion Francesa. Aunque solo se encontraron siete prisioneros dentro, la caida de la Bastilla represento el colapso de la autoridad real.',
      },
    },
    {
      question: { en: 'What time are the Eiffel Tower fireworks on Bastille Day?', fr: 'A quelle heure est le feu d\'artifice de la Tour Eiffel le 14 juillet ?', es: 'A que hora son los fuegos artificiales de la Torre Eiffel el Dia de la Bastilla?' },
      answer: {
        en: 'The Eiffel Tower fireworks display typically begins at 11:00 PM on July 14 and lasts about 30-35 minutes. It is best viewed from the Champ de Mars, the Trocadero, or along the banks of the Seine. Arrive early to secure a good spot.',
        fr: 'Le feu d\'artifice de la Tour Eiffel commence generalement a 23h00 le 14 juillet et dure environ 30 a 35 minutes. Les meilleurs points de vue sont le Champ de Mars, le Trocadero ou les berges de la Seine. Arrivez tot pour avoir une bonne place.',
        es: 'El espectaculo de fuegos artificiales de la Torre Eiffel suele comenzar a las 23:00 del 14 de julio y dura unos 30-35 minutos. Se ve mejor desde el Campo de Marte, el Trocadero o a lo largo de las orillas del Sena. Llegue temprano para asegurar un buen lugar.',
      },
    },
  ],

  colorTheme: 'blue-white-red',
  icon: '\ud83c\uddeb\ud83c\uddf7',
};

// ---------------------------------------------------------------------------
// Assumption of Mary — August 15
// ---------------------------------------------------------------------------

const assumption: HolidayData = {
  id: 'fr_assumption',
  countryCode: 'fr',
  slugs: { en: 'assumption-of-mary', fr: 'assomption', es: 'asuncion-de-maria' },
  names: { en: 'Assumption of Mary', fr: "L'Assomption", es: 'Asuncion de Maria' },

  dateType: 'fixed',
  fixedMonth: 8,
  fixedDay: 15,

  descriptions: {
    en: "The Assumption of Mary on August 15 is a public holiday in France, celebrating the Catholic belief that the Virgin Mary was assumed body and soul into heaven. It is marked by church services, processions, and pilgrimages, and falls during the peak of France's summer holiday season.",
    fr: "L'Assomption, le 15 aout, est un jour ferie en France celebrant la croyance catholique selon laquelle la Vierge Marie a ete elevee au ciel en corps et en ame. Elle est marquee par des offices religieux, des processions et des pelerinages, et tombe au coeur de la saison estivale.",
    es: 'La Asuncion de Maria, el 15 de agosto, es un dia festivo en Francia que celebra la creencia catolica de que la Virgen Maria fue asunta en cuerpo y alma al cielo. Se celebra con oficios religiosos, procesiones y peregrinaciones, y coincide con el pico de la temporada de vacaciones de verano en Francia.',
  },

  history: {
    en: "The feast of the Assumption has been celebrated in France since the early centuries of Christianity. In 1638, King Louis XIII consecrated France to the Virgin Mary and declared August 15 a national holiday, making it one of the oldest continuously observed public holidays in the country.\n\nThe dogma of the Assumption was formally defined by Pope Pius XII in 1950 in the apostolic constitution Munificentissimus Deus, though the belief had been part of Catholic tradition for centuries.\n\nThe date of August 15 holds additional historical significance for France: Napoleon Bonaparte was born on this day in 1769 in Corsica, and during his reign he used the holiday to promote his personal cult of celebration.",
    fr: "La fete de l'Assomption est celebree en France depuis les premiers siecles du christianisme. En 1638, le roi Louis XIII consacra la France a la Vierge Marie et declara le 15 aout fete nationale, en faisant l'un des plus anciens jours feries continuellement observes dans le pays.\n\nLe dogme de l'Assomption a ete formellement defini par le pape Pie XII en 1950 dans la constitution apostolique Munificentissimus Deus, bien que cette croyance fasse partie de la tradition catholique depuis des siecles.\n\nLe 15 aout revet une signification historique supplementaire pour la France : Napoleon Bonaparte est ne ce jour-la en 1769 en Corse, et sous son regne, il utilisa cette fete pour promouvoir son propre culte de la celebration.",
    es: "La fiesta de la Asuncion se celebra en Francia desde los primeros siglos del cristianismo. En 1638, el rey Luis XIII consagro Francia a la Virgen Maria y declaro el 15 de agosto fiesta nacional, convirtiendola en una de las fiestas publicas mas antiguas continuamente observadas en el pais.\n\nEl dogma de la Asuncion fue formalmente definido por el Papa Pio XII en 1950 en la constitucion apostolica Munificentissimus Deus, aunque la creencia formaba parte de la tradicion catolica desde siglos atras.\n\nEl 15 de agosto tiene un significado historico adicional para Francia: Napoleon Bonaparte nacio en esta fecha en 1769 en Corcega, y durante su reinado utilizo la festividad para promover su propio culto a la celebracion.",
  },

  traditions: {
    en: [
      'Attending special Mass and church services dedicated to the Virgin Mary',
      'Watching or participating in religious processions through towns and villages',
      'Making pilgrimages to Marian shrines, especially Lourdes',
      'Blessing of the sea ceremonies in coastal towns, with decorated boats and floral tributes',
      'Enjoying the day as part of summer holidays — August 15 falls during the peak vacation period',
    ],
    fr: [
      'Assister a la messe speciale et aux offices religieux dedies a la Vierge Marie',
      'Regarder ou participer aux processions religieuses dans les villes et villages',
      'Effectuer des pelerinages aux sanctuaires marials, en particulier a Lourdes',
      'Ceremonies de benediction de la mer dans les villes cotieres, avec des bateaux decores et des hommages floraux',
      'Profiter de la journee dans le cadre des vacances d\'ete — le 15 aout tombe en pleine periode de conges',
    ],
    es: [
      'Asistir a misa especial y oficios religiosos dedicados a la Virgen Maria',
      'Ver o participar en procesiones religiosas por pueblos y ciudades',
      'Realizar peregrinaciones a santuarios marianos, especialmente a Lourdes',
      'Ceremonias de bendicion del mar en localidades costeras, con barcos decorados y ofrendas florales',
      'Disfrutar del dia como parte de las vacaciones de verano — el 15 de agosto cae en plena temporada vacacional',
    ],
  },

  funFacts: {
    en: [
      'France has been officially consecrated to the Virgin Mary since 1638, when King Louis XIII issued the Vow of Louis XIII.',
      'Napoleon Bonaparte was born on August 15, 1769 — the same date as the Assumption, which he later used for his own celebrations during his reign.',
      'The pilgrimage site of Lourdes attracts approximately 6 million visitors each year, with many arriving around August 15.',
      'In many French coastal towns, the Assumption is marked by a "benediction de la mer" — a blessing of the sea with decorated fishing boats.',
      'August 15 falls during the "grandes vacances" — the French summer holiday period when many businesses close and families leave for vacation.',
    ],
    fr: [
      'La France est officiellement consacree a la Vierge Marie depuis 1638, lorsque le roi Louis XIII prononca le Voeu de Louis XIII.',
      'Napoleon Bonaparte est ne le 15 aout 1769 — la meme date que l\'Assomption, qu\'il utilisa plus tard pour ses propres celebrations pendant son regne.',
      'Le site de pelerinage de Lourdes attire environ 6 millions de visiteurs par an, dont beaucoup arrivent autour du 15 aout.',
      'Dans de nombreuses villes cotieres francaises, l\'Assomption est marquee par une "benediction de la mer" avec des bateaux de peche decores.',
      'Le 15 aout tombe pendant les grandes vacances — la periode de vacances d\'ete ou de nombreuses entreprises ferment et les familles partent en conge.',
    ],
    es: [
      'Francia esta oficialmente consagrada a la Virgen Maria desde 1638, cuando el rey Luis XIII pronuncio el Voto de Luis XIII.',
      'Napoleon Bonaparte nacio el 15 de agosto de 1769 — la misma fecha de la Asuncion, que mas tarde utilizo para sus propias celebraciones durante su reinado.',
      'El santuario de Lourdes atrae aproximadamente 6 millones de visitantes al ano, muchos de los cuales llegan alrededor del 15 de agosto.',
      'En muchas ciudades costeras francesas, la Asuncion se celebra con una "bendicion del mar" con barcos pesqueros decorados.',
      'El 15 de agosto cae durante las "grandes vacaciones" — el periodo vacacional de verano en que muchas empresas cierran y las familias se van de vacaciones.',
    ],
  },

  planningChecklist: {
    en: [
      'Check Mass and procession schedules at your local church or nearby pilgrimage site',
      'Book travel and accommodation early — August 15 is peak vacation season in France',
      'Plan for closures — many shops and businesses are closed on this public holiday',
      'Consider visiting a coastal town for the blessing of the sea ceremony',
      'If visiting Lourdes, book well in advance as it is extremely busy around August 15',
    ],
    fr: [
      'Verifier les horaires des messes et processions dans votre eglise locale ou un site de pelerinage proche',
      'Reserver transport et hebergement tot — le 15 aout est en pleine saison vacanciere en France',
      'Prevoir les fermetures — de nombreux commerces et entreprises sont fermes ce jour ferie',
      'Envisager de visiter une ville cotiere pour la ceremonie de benediction de la mer',
      'Si vous visitez Lourdes, reservez bien a l\'avance car c\'est extremement frequente autour du 15 aout',
    ],
    es: [
      'Consultar los horarios de misas y procesiones en su iglesia local o un santuario cercano',
      'Reservar transporte y alojamiento con antelacion — el 15 de agosto es temporada alta de vacaciones en Francia',
      'Planificar los cierres — muchas tiendas y negocios estan cerrados en este dia festivo',
      'Considerar visitar una localidad costera para la ceremonia de bendicion del mar',
      'Si visita Lourdes, reserve con mucha antelacion ya que esta extremadamente concurrido alrededor del 15 de agosto',
    ],
  },

  relatedHolidays: ['fr_all-saints-day', 'fr_christmas'],

  seo: {
    en: {
      titleTemplate: 'Assumption of Mary {year} France — August 15 Countdown & Guide',
      descriptionTemplate: 'When is the Assumption {year} in France? Live countdown to August 15, religious traditions, and celebration guide.',
      keywords: ['Assumption France', 'August 15 France', 'Assomption', 'French public holiday August', 'Lourdes pilgrimage'],
    },
    fr: {
      titleTemplate: "L'Assomption {year} France — Compte a rebours du 15 aout",
      descriptionTemplate: "Quand tombe l'Assomption {year} ? Compte a rebours jusqu'au 15 aout, traditions religieuses et guide des celebrations.",
      keywords: ['Assomption France', '15 aout ferie', 'Assomption de Marie', 'jour ferie aout France', 'pelerinage Lourdes'],
    },
    es: {
      titleTemplate: 'Asuncion de Maria {year} Francia — Cuenta regresiva del 15 de agosto',
      descriptionTemplate: 'Cuando es la Asuncion {year} en Francia? Cuenta regresiva hasta el 15 de agosto, tradiciones religiosas y guia de celebraciones.',
      keywords: ['Asuncion Francia', '15 de agosto Francia', 'Assomption', 'festivo agosto Francia', 'peregrinacion Lourdes'],
    },
  },

  faq: [
    {
      question: { en: 'When is the Assumption of Mary {year} in France?', fr: "Quand tombe l'Assomption {year} en France ?", es: 'Cuando es la Asuncion de Maria {year} en Francia?' },
      answer: {
        en: 'The Assumption of Mary {year} in France is on {date} ({dayOfWeek}). It is always August 15 and is a national public holiday.',
        fr: "L'Assomption {year} tombe le {date} ({dayOfWeek}). C'est toujours le 15 aout et c'est un jour ferie national.",
        es: 'La Asuncion de Maria {year} en Francia es el {date} ({dayOfWeek}). Siempre es el 15 de agosto y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'Why is August 15 a holiday in France?', fr: 'Pourquoi le 15 aout est-il ferie en France ?', es: 'Por que es festivo el 15 de agosto en Francia?' },
      answer: {
        en: 'August 15 has been a public holiday in France since 1638, when King Louis XIII consecrated France to the Virgin Mary. It celebrates the Catholic belief that Mary was assumed body and soul into heaven.',
        fr: "Le 15 aout est ferie en France depuis 1638, lorsque le roi Louis XIII consacra la France a la Vierge Marie. Il celebre la croyance catholique selon laquelle Marie a ete elevee au ciel en corps et en ame.",
        es: 'El 15 de agosto es festivo en Francia desde 1638, cuando el rey Luis XIII consagro Francia a la Virgen Maria. Celebra la creencia catolica de que Maria fue asunta en cuerpo y alma al cielo.',
      },
    },
    {
      question: { en: 'Are shops open on August 15 in France?', fr: 'Les magasins sont-ils ouverts le 15 aout en France ?', es: 'Estan abiertas las tiendas el 15 de agosto en Francia?' },
      answer: {
        en: 'Most shops and businesses are closed on August 15, as it is a national public holiday. Additionally, many businesses are already closed for the August summer holidays. Tourist areas may have some shops and restaurants open.',
        fr: "La plupart des commerces et entreprises sont fermes le 15 aout, car c'est un jour ferie national. De plus, de nombreuses entreprises sont deja fermees pour les vacances d'ete. Les zones touristiques peuvent avoir quelques commerces et restaurants ouverts.",
        es: 'La mayoria de las tiendas y negocios estan cerrados el 15 de agosto, ya que es un dia festivo nacional. Ademas, muchas empresas ya estan cerradas por las vacaciones de verano. Las zonas turisticas pueden tener algunas tiendas y restaurantes abiertos.',
      },
    },
    {
      question: { en: 'What is the blessing of the sea on August 15?', fr: "Qu'est-ce que la benediction de la mer le 15 aout ?", es: 'Que es la bendicion del mar el 15 de agosto?' },
      answer: {
        en: 'The blessing of the sea is a traditional ceremony held in many French coastal towns on August 15. Fishing boats are decorated with flowers and flags, and a priest blesses the sea and the boats, praying for the safety of fishermen and sailors.',
        fr: "La benediction de la mer est une ceremonie traditionnelle organisee dans de nombreuses villes cotieres francaises le 15 aout. Les bateaux de peche sont decores de fleurs et de drapeaux, et un pretre benit la mer et les bateaux, priant pour la securite des pecheurs et des marins.",
        es: 'La bendicion del mar es una ceremonia tradicional celebrada en muchas localidades costeras francesas el 15 de agosto. Los barcos pesqueros se decoran con flores y banderas, y un sacerdote bendice el mar y los barcos, rezando por la seguridad de los pescadores y marineros.',
      },
    },
  ],

  colorTheme: 'blue-white',
  icon: '\u271d\ufe0f',
};

// ---------------------------------------------------------------------------
// All Saints' Day — November 1
// ---------------------------------------------------------------------------

const allSaintsDay: HolidayData = {
  id: 'fr_all-saints-day',
  countryCode: 'fr',
  slugs: { en: 'all-saints-day', fr: 'toussaint', es: 'dia-de-todos-los-santos' },
  names: { en: "All Saints' Day", fr: 'La Toussaint', es: 'Dia de Todos los Santos' },

  dateType: 'fixed',
  fixedMonth: 11,
  fixedDay: 1,

  descriptions: {
    en: "All Saints' Day on November 1 is a public holiday in France, honouring all Christian saints. In practice, the French use this day primarily to visit the graves of departed loved ones, decorating them with chrysanthemum flowers — a deeply rooted tradition that makes it more akin to a day of remembrance.",
    fr: "La Toussaint, le 1er novembre, est un jour ferie en France qui honore tous les saints chretiens. En pratique, les Francais utilisent surtout cette journee pour se rendre sur les tombes de leurs proches disparus et les fleurir de chrysanthemes — une tradition profondement enracinee qui en fait avant tout un jour de recueillement.",
    es: "El Dia de Todos los Santos, el 1 de noviembre, es un dia festivo en Francia que honra a todos los santos cristianos. En la practica, los franceses usan este dia principalmente para visitar las tumbas de sus seres queridos fallecidos, decorandolas con crisantemos — una tradicion profundamente arraigada que lo convierte mas bien en un dia de recuerdo.",
  },

  history: {
    en: "All Saints' Day has been celebrated on November 1 since the early Middle Ages, with Pope Gregory III designating the date in the 8th century. In France, it became an official public holiday after the Concordat of 1801 between Napoleon and the Pope.\n\nAlthough November 1 is technically the feast of All Saints, the French have merged it with the spirit of November 2, the Day of the Dead (Jour des Morts), making it the primary day for visiting cemeteries and honouring deceased family members.\n\nThe tradition of placing chrysanthemums on graves became widespread after World War I, when French President Raymond Poincare called on citizens to place flowers on the graves of fallen soldiers on November 11, 1919. The practice naturally extended to All Saints' Day and has become one of France's most recognisable cultural traditions.",
    fr: "La Toussaint est celebree le 1er novembre depuis le haut Moyen Age, le pape Gregoire III ayant designe cette date au VIIIe siecle. En France, elle est devenue un jour ferie officiel apres le Concordat de 1801 entre Napoleon et le pape.\n\nBien que le 1er novembre soit techniquement la fete de tous les saints, les Francais l'ont fusionnee avec l'esprit du 2 novembre, le Jour des Morts, en faisant le principal jour pour visiter les cimetieres et honorer les membres defunts de la famille.\n\nLa tradition de deposer des chrysanthemes sur les tombes s'est repandue apres la Premiere Guerre mondiale, lorsque le president Raymond Poincare appela les citoyens a fleurir les tombes des soldats tombes le 11 novembre 1919. Cette pratique s'est naturellement etendue a la Toussaint et est devenue l'une des traditions culturelles les plus reconnaissables de France.",
    es: "El Dia de Todos los Santos se celebra el 1 de noviembre desde la Alta Edad Media, cuando el Papa Gregorio III designo esta fecha en el siglo VIII. En Francia, se convirtio en dia festivo oficial tras el Concordato de 1801 entre Napoleon y el Papa.\n\nAunque el 1 de noviembre es tecnicamente la fiesta de todos los santos, los franceses la han fusionado con el espiritu del 2 de noviembre, el Dia de los Muertos (Jour des Morts), conviertiendolo en el dia principal para visitar cementerios y honrar a los familiares fallecidos.\n\nLa tradicion de colocar crisantemos en las tumbas se generalizo despues de la Primera Guerra Mundial, cuando el presidente Raymond Poincare pidio a los ciudadanos que colocaran flores en las tumbas de los soldados caidos el 11 de noviembre de 1919. La practica se extendio naturalmente al Dia de Todos los Santos y se ha convertido en una de las tradiciones culturales mas reconocibles de Francia.",
  },

  traditions: {
    en: [
      'Visiting the graves of deceased family members and friends',
      'Placing pots of chrysanthemums on graves — France\'s most iconic Toussaint tradition',
      'Attending church services to honour all saints',
      'Cleaning and maintaining family graves and tombs before November 1',
      'Enjoying the autumn school holiday — Toussaint marks a two-week school break (vacances de la Toussaint)',
      'Lighting candles on graves as a symbol of remembrance',
      'Preparing traditional autumn dishes with chestnuts and root vegetables',
    ],
    fr: [
      'Visiter les tombes des proches defunts',
      'Deposer des pots de chrysanthemes sur les tombes — la tradition la plus emblematique de la Toussaint',
      'Assister aux offices religieux en l\'honneur de tous les saints',
      'Nettoyer et entretenir les tombes familiales avant le 1er novembre',
      'Profiter des vacances scolaires d\'automne — la Toussaint marque deux semaines de conge (vacances de la Toussaint)',
      'Allumer des bougies sur les tombes en signe de recueillement',
      'Preparer des plats d\'automne traditionnels a base de chataignes et de legumes-racines',
    ],
    es: [
      'Visitar las tumbas de familiares y amigos fallecidos',
      'Colocar macetas de crisantemos en las tumbas — la tradicion mas emblematica de la Toussaint',
      'Asistir a oficios religiosos en honor de todos los santos',
      'Limpiar y mantener las tumbas familiares antes del 1 de noviembre',
      'Disfrutar de las vacaciones escolares de otono — la Toussaint marca dos semanas de vacaciones',
      'Encender velas en las tumbas como simbolo de recuerdo',
      'Preparar platos tradicionales de otono con castanas y verduras de raiz',
    ],
  },

  funFacts: {
    en: [
      'The French buy approximately 23 million pots of chrysanthemums for Toussaint each year, representing about 25% of all annual flower sales in France.',
      'In France, giving chrysanthemums as a gift is considered inappropriate because of their strong association with death and cemeteries.',
      'Toussaint coincides with the French autumn school holidays (vacances de la Toussaint), giving families two weeks off.',
      'November 2, the actual Day of the Dead (Jour des Morts), is not a public holiday in France, so most cemetery visits happen on November 1.',
      'The tradition of chrysanthemums on graves originated after World War I and has been maintained for over a century.',
    ],
    fr: [
      'Les Francais achetent environ 23 millions de pots de chrysanthemes pour la Toussaint chaque annee, soit environ 25 % des ventes annuelles de fleurs en France.',
      'En France, offrir des chrysanthemes en cadeau est considere comme inappropriate en raison de leur forte association avec la mort et les cimetieres.',
      'La Toussaint coincide avec les vacances scolaires d\'automne (vacances de la Toussaint), offrant aux familles deux semaines de conge.',
      'Le 2 novembre, le veritable Jour des Morts, n\'est pas un jour ferie en France, c\'est pourquoi la plupart des visites au cimetiere ont lieu le 1er novembre.',
      'La tradition des chrysanthemes sur les tombes est nee apres la Premiere Guerre mondiale et est maintenue depuis plus d\'un siecle.',
    ],
    es: [
      'Los franceses compran aproximadamente 23 millones de macetas de crisantemos para la Toussaint cada ano, lo que representa alrededor del 25% de todas las ventas anuales de flores en Francia.',
      'En Francia, regalar crisantemos se considera inapropiado debido a su fuerte asociacion con la muerte y los cementerios.',
      'La Toussaint coincide con las vacaciones escolares de otono, que dan a las familias dos semanas de descanso.',
      'El 2 de noviembre, el verdadero Dia de los Muertos, no es festivo en Francia, por lo que la mayoria de las visitas al cementerio se realizan el 1 de noviembre.',
      'La tradicion de los crisantemos en las tumbas se origino despues de la Primera Guerra Mundial y se ha mantenido durante mas de un siglo.',
    ],
  },

  planningChecklist: {
    en: [
      'Buy chrysanthemum pots early — they sell out quickly in the days before November 1',
      'Plan to visit family graves and coordinate with relatives for a joint visit',
      'Clean and prepare the family grave site before November 1',
      'Check church service schedules for special Toussaint Masses',
      'Take advantage of the school holidays to plan a family gathering',
    ],
    fr: [
      'Acheter les pots de chrysanthemes tot — ils se vendent vite dans les jours precedant le 1er novembre',
      'Planifier la visite des tombes familiales et se coordonner avec les proches',
      'Nettoyer et preparer la sepulture familiale avant le 1er novembre',
      'Verifier les horaires des messes speciales de la Toussaint',
      'Profiter des vacances scolaires pour organiser une reunion de famille',
    ],
    es: [
      'Comprar macetas de crisantemos con antelacion — se agotan rapidamente en los dias previos al 1 de noviembre',
      'Planificar la visita a las tumbas familiares y coordinarse con los parientes',
      'Limpiar y preparar el lugar de la sepultura familiar antes del 1 de noviembre',
      'Consultar los horarios de misas especiales de la Toussaint',
      'Aprovechar las vacaciones escolares para organizar una reunion familiar',
    ],
  },

  relatedHolidays: ['fr_armistice-day', 'fr_assumption'],

  seo: {
    en: {
      titleTemplate: "All Saints' Day {year} France — November 1 Countdown & Guide",
      descriptionTemplate: "When is All Saints' Day {year} in France? Live countdown to November 1, Toussaint traditions, and celebration guide.",
      keywords: ["All Saints' Day France", 'Toussaint', 'November 1 France', 'chrysanthemums France', 'French public holiday November'],
    },
    fr: {
      titleTemplate: 'La Toussaint {year} France — Compte a rebours du 1er novembre',
      descriptionTemplate: 'Quand tombe la Toussaint {year} ? Compte a rebours jusqu\'au 1er novembre, traditions et guide du jour ferie.',
      keywords: ['Toussaint France', '1er novembre ferie', 'chrysanthemes Toussaint', 'jour ferie novembre France', 'vacances Toussaint'],
    },
    es: {
      titleTemplate: 'Dia de Todos los Santos {year} Francia — Cuenta regresiva del 1 de noviembre',
      descriptionTemplate: 'Cuando es el Dia de Todos los Santos {year} en Francia? Cuenta regresiva hasta el 1 de noviembre, tradiciones y guia.',
      keywords: ['Dia de Todos los Santos Francia', 'Toussaint', '1 de noviembre Francia', 'crisantemos Francia', 'festivo noviembre Francia'],
    },
  },

  faq: [
    {
      question: { en: "When is All Saints' Day {year} in France?", fr: 'Quand tombe la Toussaint {year} en France ?', es: 'Cuando es el Dia de Todos los Santos {year} en Francia?' },
      answer: {
        en: "All Saints' Day {year} in France is on {date} ({dayOfWeek}). It is always November 1 and is a national public holiday.",
        fr: "La Toussaint {year} tombe le {date} ({dayOfWeek}). C'est toujours le 1er novembre et c'est un jour ferie national.",
        es: 'El Dia de Todos los Santos {year} en Francia es el {date} ({dayOfWeek}). Siempre es el 1 de noviembre y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'Why do the French put chrysanthemums on graves?', fr: 'Pourquoi les Francais mettent-ils des chrysanthemes sur les tombes ?', es: 'Por que los franceses ponen crisantemos en las tumbas?' },
      answer: {
        en: 'The tradition began after World War I when French citizens were encouraged to place flowers on soldiers\' graves. Chrysanthemums, which bloom in autumn and are hardy enough to withstand cold weather, became the flower of choice. The practice has continued for over a century.',
        fr: 'La tradition a commence apres la Premiere Guerre mondiale, lorsque les citoyens francais furent encourages a deposer des fleurs sur les tombes des soldats. Les chrysanthemes, qui fleurissent en automne et resistent bien au froid, sont devenus la fleur de predilection. Cette pratique perdure depuis plus d\'un siecle.',
        es: 'La tradicion comenzo despues de la Primera Guerra Mundial, cuando se animo a los ciudadanos franceses a colocar flores en las tumbas de los soldados. Los crisantemos, que florecen en otono y resisten el frio, se convirtieron en la flor elegida. La practica continua desde hace mas de un siglo.',
      },
    },
    {
      question: { en: "Is All Saints' Day a school holiday in France?", fr: "La Toussaint est-elle une periode de vacances scolaires ?", es: "Es el Dia de Todos los Santos vacaciones escolares en Francia?" },
      answer: {
        en: "Yes, the Toussaint school holidays typically span two weeks around November 1, making it one of France's major school holiday periods. The exact dates vary slightly by academic zone each year.",
        fr: "Oui, les vacances de la Toussaint s'etendent generalement sur deux semaines autour du 1er novembre, ce qui en fait l'une des principales periodes de vacances scolaires en France. Les dates exactes varient legerement selon les zones academiques chaque annee.",
        es: 'Si, las vacaciones escolares de la Toussaint suelen abarcar dos semanas alrededor del 1 de noviembre, convirtiendola en uno de los principales periodos vacacionales escolares de Francia. Las fechas exactas varian ligeramente segun la zona academica cada ano.',
      },
    },
    {
      question: { en: 'Should I give chrysanthemums as a gift in France?', fr: 'Peut-on offrir des chrysanthemes en cadeau en France ?', es: 'Debo regalar crisantemos en Francia?' },
      answer: {
        en: 'No — in France, chrysanthemums are strongly associated with death and cemeteries. Giving them as a gift to a living person is considered a faux pas. Choose other flowers for gifts and celebrations.',
        fr: 'Non — en France, les chrysanthemes sont fortement associes a la mort et aux cimetieres. En offrir en cadeau a une personne vivante est considere comme un impair. Choisissez d\'autres fleurs pour vos cadeaux et celebrations.',
        es: 'No — en Francia, los crisantemos estan fuertemente asociados con la muerte y los cementerios. Regalarlos a una persona viva se considera un error de etiqueta. Elija otras flores para regalos y celebraciones.',
      },
    },
  ],

  colorTheme: 'purple-gold',
  icon: '\ud83d\udd6f\ufe0f',
};

// ---------------------------------------------------------------------------
// Armistice Day — November 11
// ---------------------------------------------------------------------------

const armisticeDay: HolidayData = {
  id: 'fr_armistice-day',
  countryCode: 'fr',
  slugs: { en: 'armistice-day', fr: 'armistice', es: 'dia-del-armisticio' },
  names: { en: 'Armistice Day', fr: "Jour de l'Armistice", es: 'Dia del Armisticio' },

  dateType: 'fixed',
  fixedMonth: 11,
  fixedDay: 11,

  descriptions: {
    en: 'Armistice Day on November 11 is a public holiday in France commemorating the armistice signed on November 11, 1918, which ended World War I. The centrepiece is the solemn ceremony at the Arc de Triomphe in Paris, where the President of the Republic rekindles the eternal flame at the Tomb of the Unknown Soldier.',
    fr: "Le Jour de l'Armistice, le 11 novembre, est un jour ferie en France commemorant l'armistice signe le 11 novembre 1918, qui mit fin a la Premiere Guerre mondiale. La piece maitresse est la ceremonie solennelle a l'Arc de Triomphe a Paris, ou le President de la Republique ravive la flamme eternelle sur la Tombe du Soldat inconnu.",
    es: 'El Dia del Armisticio, el 11 de noviembre, es un dia festivo en Francia que conmemora el armisticio firmado el 11 de noviembre de 1918, que puso fin a la Primera Guerra Mundial. El acto central es la solemne ceremonia en el Arco de Triunfo de Paris, donde el Presidente de la Republica reaviva la llama eterna en la Tumba del Soldado Desconocido.',
  },

  history: {
    en: "The armistice of November 11, 1918, was signed at 5:10 AM in a railway carriage in the forest of Compiegne, taking effect at the 11th hour of the 11th day of the 11th month. It ended four years of devastating conflict that claimed the lives of approximately 1.4 million French soldiers and left millions more wounded.\n\nNovember 11 became a public holiday in France in 1922. In 1920, the remains of an unknown soldier were interred beneath the Arc de Triomphe, and in 1923, an eternal flame was lit there — the first of its kind in Europe.\n\nSince 2012, November 11 has also been designated as a day to honour all those who died for France in all conflicts, broadening its significance beyond World War I alone.",
    fr: "L'armistice du 11 novembre 1918 fut signe a 5h10 dans un wagon de chemin de fer dans la foret de Compiegne, prenant effet a la 11e heure du 11e jour du 11e mois. Il mit fin a quatre annees d'un conflit devastateur qui couta la vie a environ 1,4 million de soldats francais et en blessa des millions d'autres.\n\nLe 11 novembre est devenu un jour ferie en France en 1922. En 1920, les restes d'un soldat inconnu furent inhumes sous l'Arc de Triomphe, et en 1923, une flamme eternelle y fut allumee — la premiere du genre en Europe.\n\nDepuis 2012, le 11 novembre est egalement designe comme journee d'hommage a tous ceux qui sont morts pour la France dans tous les conflits, elargissant sa signification au-dela de la seule Premiere Guerre mondiale.",
    es: "El armisticio del 11 de noviembre de 1918 fue firmado a las 5:10 de la manana en un vagon de ferrocarril en el bosque de Compiegne, entrando en vigor a la 11a hora del 11o dia del 11o mes. Puso fin a cuatro anos de un conflicto devastador que cobro la vida de aproximadamente 1,4 millones de soldados franceses y dejo a millones mas heridos.\n\nEl 11 de noviembre se convirtio en dia festivo en Francia en 1922. En 1920, los restos de un soldado desconocido fueron enterrados bajo el Arco de Triunfo, y en 1923, se encendio alli una llama eterna — la primera de su tipo en Europa.\n\nDesde 2012, el 11 de noviembre tambien ha sido designado como dia de homenaje a todos los que murieron por Francia en todos los conflictos, ampliando su significado mas alla de la Primera Guerra Mundial.",
  },

  traditions: {
    en: [
      'Attending the presidential ceremony at the Arc de Triomphe with the rekindling of the eternal flame',
      'Observing a minute of silence at 11:00 AM',
      'Laying wreaths and flowers at war memorials across France',
      'Attending commemorative ceremonies at local monuments aux morts (war memorials)',
      'Wearing a bleuet de France (cornflower) — the French equivalent of the British poppy',
      'Watching the televised national ceremony from the Arc de Triomphe',
    ],
    fr: [
      'Assister a la ceremonie presidentielle a l\'Arc de Triomphe avec le ravivage de la flamme eternelle',
      'Observer une minute de silence a 11h00',
      'Deposer des gerbes et des fleurs aux monuments aux morts de toute la France',
      'Assister aux ceremonies commemoratives devant les monuments aux morts locaux',
      'Porter un bleuet de France — l\'equivalent francais du coquelicot britannique',
      'Regarder la ceremonie nationale televisee depuis l\'Arc de Triomphe',
    ],
    es: [
      'Asistir a la ceremonia presidencial en el Arco de Triunfo con el reavivamiento de la llama eterna',
      'Guardar un minuto de silencio a las 11:00',
      'Depositar coronas y flores en los monumentos a los caidos de toda Francia',
      'Asistir a ceremonias conmemorativas en los monumentos locales a los caidos',
      'Llevar un aciano de Francia (bleuet) — el equivalente frances de la amapola britanica',
      'Ver la ceremonia nacional televisada desde el Arco de Triunfo',
    ],
  },

  funFacts: {
    en: [
      'The armistice was signed at 5:10 AM but did not take effect until 11:00 AM — the "eleventh hour of the eleventh day of the eleventh month."',
      'France has approximately 36,000 war memorials (monuments aux morts), with almost every commune in the country having at least one.',
      'The eternal flame at the Arc de Triomphe, lit in 1923, was the first such flame in Europe and has been rekindled every evening since.',
      'The bleuet de France (cornflower) was chosen as a symbol of remembrance because it was one of the few flowers that could grow in the devastated battlefields.',
      'The original railway carriage where the armistice was signed was brought back to the same spot in 1940 when France signed its armistice with Germany in World War II.',
    ],
    fr: [
      'L\'armistice a ete signe a 5h10 mais n\'est entre en vigueur qu\'a 11h00 — la "onzieme heure du onzieme jour du onzieme mois".',
      'La France compte environ 36 000 monuments aux morts, chaque commune du pays en possedant au moins un.',
      'La flamme eternelle de l\'Arc de Triomphe, allumee en 1923, fut la premiere du genre en Europe et est ravivee chaque soir depuis.',
      'Le bleuet de France a ete choisi comme symbole du souvenir car c\'etait l\'une des rares fleurs pouvant pousser sur les champs de bataille devastes.',
      'Le wagon original ou l\'armistice fut signe a ete ramene au meme endroit en 1940 lorsque la France signa l\'armistice avec l\'Allemagne lors de la Seconde Guerre mondiale.',
    ],
    es: [
      'El armisticio se firmo a las 5:10 pero no entro en vigor hasta las 11:00 — la "undecima hora del undecimo dia del undecimo mes".',
      'Francia tiene aproximadamente 36 000 monumentos a los caidos, con casi cada municipio del pais teniendo al menos uno.',
      'La llama eterna del Arco de Triunfo, encendida en 1923, fue la primera de su tipo en Europa y se reaviva cada noche desde entonces.',
      'El aciano de Francia fue elegido como simbolo de recuerdo porque era una de las pocas flores que podia crecer en los campos de batalla devastados.',
      'El vagon de ferrocarril original donde se firmo el armisticio fue llevado de vuelta al mismo lugar en 1940 cuando Francia firmo su armisticio con Alemania en la Segunda Guerra Mundial.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the schedule of the Arc de Triomphe ceremony if you wish to attend in person',
      'Purchase or wear a bleuet de France (cornflower) to show remembrance',
      'Find your local monument aux morts ceremony time and attend with family',
      'Plan for closures — most public services and many shops are closed on November 11',
      'Visit a WWI battlefield or memorial site such as Verdun, the Somme, or the Chemin des Dames',
    ],
    fr: [
      'Verifier le programme de la ceremonie de l\'Arc de Triomphe si l\'on souhaite y assister',
      'Acheter ou porter un bleuet de France en signe de souvenir',
      'Se renseigner sur l\'horaire de la ceremonie au monument aux morts local et y assister en famille',
      'Prevoir les fermetures — la plupart des services publics et de nombreux commerces sont fermes le 11 novembre',
      'Visiter un champ de bataille ou un site memorial de la Premiere Guerre mondiale comme Verdun, la Somme ou le Chemin des Dames',
    ],
    es: [
      'Consultar el horario de la ceremonia del Arco de Triunfo si se desea asistir en persona',
      'Comprar o llevar un aciano de Francia en senal de recuerdo',
      'Averiguar el horario de la ceremonia en el monumento local a los caidos y asistir en familia',
      'Planificar los cierres — la mayoria de los servicios publicos y muchas tiendas estan cerrados el 11 de noviembre',
      'Visitar un campo de batalla o sitio memorial de la Primera Guerra Mundial como Verdun, el Somme o el Chemin des Dames',
    ],
  },

  relatedHolidays: ['fr_bastille-day', 'be_armistice-day'],

  seo: {
    en: {
      titleTemplate: 'Armistice Day {year} France — November 11 Countdown & Guide',
      descriptionTemplate: 'When is Armistice Day {year} in France? Live countdown to November 11, Arc de Triomphe ceremony, and commemoration guide.',
      keywords: ['Armistice Day France', 'November 11 France', '11 novembre', 'Arc de Triomphe ceremony', 'French public holiday November'],
    },
    fr: {
      titleTemplate: "Jour de l'Armistice {year} France — Compte a rebours du 11 novembre",
      descriptionTemplate: "Quand tombe le 11 novembre {year} ? Compte a rebours, ceremonie de l'Arc de Triomphe et guide de commemoration.",
      keywords: ['11 novembre France', 'Armistice 1918', 'jour ferie 11 novembre', 'flamme eternelle Arc de Triomphe', 'bleuet de France'],
    },
    es: {
      titleTemplate: 'Dia del Armisticio {year} Francia — Cuenta regresiva del 11 de noviembre',
      descriptionTemplate: 'Cuando es el Dia del Armisticio {year} en Francia? Cuenta regresiva hasta el 11 de noviembre, ceremonia del Arco de Triunfo y guia.',
      keywords: ['Dia del Armisticio Francia', '11 de noviembre Francia', 'Armisticio 1918', 'Arco de Triunfo ceremonia', 'festivo noviembre Francia'],
    },
  },

  faq: [
    {
      question: { en: 'When is Armistice Day {year} in France?', fr: "Quand tombe le Jour de l'Armistice {year} en France ?", es: 'Cuando es el Dia del Armisticio {year} en Francia?' },
      answer: {
        en: 'Armistice Day {year} in France is on {date} ({dayOfWeek}). It is always November 11 and is a national public holiday.',
        fr: "Le Jour de l'Armistice {year} tombe le {date} ({dayOfWeek}). C'est toujours le 11 novembre et c'est un jour ferie national.",
        es: 'El Dia del Armisticio {year} en Francia es el {date} ({dayOfWeek}). Siempre es el 11 de noviembre y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'What is the bleuet de France?', fr: "Qu'est-ce que le bleuet de France ?", es: 'Que es el aciano de Francia?' },
      answer: {
        en: 'The bleuet de France (cornflower) is the French symbol of remembrance for fallen soldiers, equivalent to the British and Commonwealth poppy. It was chosen because cornflowers could grow in the devastated soil of World War I battlefields.',
        fr: "Le bleuet de France est le symbole francais du souvenir des soldats tombes, l'equivalent du coquelicot britannique et du Commonwealth. Il a ete choisi car le bleuet pouvait pousser dans le sol devaste des champs de bataille de la Premiere Guerre mondiale.",
        es: 'El aciano de Francia es el simbolo frances de recuerdo de los soldados caidos, equivalente a la amapola britanica y de la Commonwealth. Fue elegido porque los acianos podian crecer en el suelo devastado de los campos de batalla de la Primera Guerra Mundial.',
      },
    },
    {
      question: { en: 'What happens at the Arc de Triomphe on November 11?', fr: "Que se passe-t-il a l'Arc de Triomphe le 11 novembre ?", es: 'Que ocurre en el Arco de Triunfo el 11 de noviembre?' },
      answer: {
        en: 'The President of the Republic leads a solemn ceremony at the Tomb of the Unknown Soldier beneath the Arc de Triomphe. The eternal flame is rekindled, wreaths are laid, and a minute of silence is observed. Veterans, military officials, and dignitaries attend.',
        fr: "Le President de la Republique preside une ceremonie solennelle devant la Tombe du Soldat inconnu sous l'Arc de Triomphe. La flamme eternelle est ravivee, des gerbes sont deposees et une minute de silence est observee. Des anciens combattants, des officiels militaires et des dignitaires y assistent.",
        es: 'El Presidente de la Republica preside una solemne ceremonia en la Tumba del Soldado Desconocido bajo el Arco de Triunfo. Se reaviva la llama eterna, se depositan coronas y se guarda un minuto de silencio. Asisten veteranos, oficiales militares y dignatarios.',
      },
    },
    {
      question: { en: 'Is November 11 a public holiday in France?', fr: 'Le 11 novembre est-il un jour ferie en France ?', es: 'Es el 11 de noviembre un dia festivo en Francia?' },
      answer: {
        en: 'Yes, November 11 has been a public holiday in France since 1922. Most businesses, schools, and public services are closed. Since 2012, it also serves as a day to honour all those who died for France in all conflicts.',
        fr: "Oui, le 11 novembre est un jour ferie en France depuis 1922. La plupart des entreprises, ecoles et services publics sont fermes. Depuis 2012, il sert egalement de journee d'hommage a tous ceux qui sont morts pour la France dans tous les conflits.",
        es: 'Si, el 11 de noviembre es un dia festivo en Francia desde 1922. La mayoria de las empresas, escuelas y servicios publicos estan cerrados. Desde 2012, tambien sirve como dia de homenaje a todos los que murieron por Francia en todos los conflictos.',
      },
    },
  ],

  colorTheme: 'blue-white-red',
  icon: '\ud83c\udf96\ufe0f',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'fr_christmas',
  countryCode: 'fr',
  slugs: { en: 'christmas-day', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noel', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: "Christmas Day on December 25 is one of France's most cherished public holidays. French Christmas is centred around the reveillon de Noel — an elaborate Christmas Eve dinner — and traditions such as the buche de Noel (yule log cake), the creche (nativity scene), and the festive Christmas markets found across the country.",
    fr: "Noel, le 25 decembre, est l'un des jours feries les plus chers aux Francais. Le Noel francais est centre autour du reveillon de Noel — un diner elabore le soir du 24 decembre — et de traditions telles que la buche de Noel, la creche et les marches de Noel que l'on trouve partout dans le pays.",
    es: "El dia de Navidad, el 25 de diciembre, es uno de los dias festivos mas queridos de Francia. La Navidad francesa se centra en el reveillon de Noel — una elaborada cena de Nochebuena — y tradiciones como el buche de Noel (tronco de Navidad), el belen (creche) y los mercadillos navidenos que se encuentran por todo el pais.",
  },

  history: {
    en: "Christmas has been celebrated in France since the early centuries of Christianity. The tradition of the creche (nativity scene) was popularised in France during the 13th century following St. Francis of Assisi's first living nativity in Italy. The Provencal creche, with its distinctive santons (small clay figurines), is a uniquely French tradition dating from the 18th century.\n\nThe buche de Noel (yule log cake) has its origins in the medieval custom of burning a large log in the fireplace throughout Christmas. When homes began to have smaller fireplaces, the tradition evolved into a log-shaped cake that has become one of France's most iconic Christmas desserts.\n\nFrench Christmas markets (marches de Noel), particularly in Alsace, are among the oldest in Europe. The Strasbourg Christmas market, known as the Christkindelsmärik, has been held since 1570 and is one of the most famous in the world.",
    fr: "Noel est celebre en France depuis les premiers siecles du christianisme. La tradition de la creche a ete popularisee en France au XIIIe siecle a la suite de la premiere creche vivante de saint Francois d'Assise en Italie. La creche provencale, avec ses santons distinctifs (petites figurines en argile), est une tradition uniquement francaise datant du XVIIIe siecle.\n\nLa buche de Noel tire ses origines de la coutume medievale de bruler une grosse buche dans la cheminee pendant toute la periode de Noel. Lorsque les maisons ont commence a avoir des cheminees plus petites, la tradition a evolue vers un gateau en forme de buche qui est devenu l'un des desserts de Noel les plus emblematiques de France.\n\nLes marches de Noel francais, en particulier en Alsace, comptent parmi les plus anciens d'Europe. Le marche de Noel de Strasbourg, connu sous le nom de Christkindelsmärik, est organise depuis 1570 et est l'un des plus celebres au monde.",
    es: "La Navidad se celebra en Francia desde los primeros siglos del cristianismo. La tradicion del belen fue popularizada en Francia durante el siglo XIII tras el primer belen viviente de San Francisco de Asis en Italia. El belen provenzal, con sus distintivos santons (pequenas figuritas de arcilla), es una tradicion unicamente francesa que data del siglo XVIII.\n\nEl buche de Noel tiene sus origenes en la costumbre medieval de quemar un gran tronco en la chimenea durante toda la Navidad. Cuando las casas empezaron a tener chimeneas mas pequenas, la tradicion evoluciono hacia un pastel en forma de tronco que se ha convertido en uno de los postres navidenos mas iconicos de Francia.\n\nLos mercadillos navidenos franceses, particularmente en Alsacia, se encuentran entre los mas antiguos de Europa. El mercadillo de Navidad de Estrasburgo, conocido como Christkindelsmärik, se celebra desde 1570 y es uno de los mas famosos del mundo.",
  },

  traditions: {
    en: [
      'Hosting a reveillon de Noel — an elaborate Christmas Eve dinner with foie gras, oysters, smoked salmon, and champagne',
      'Serving a buche de Noel (yule log cake) for dessert — available in countless flavours from French patisseries',
      'Setting up a creche (nativity scene) in the home, often with Provencal santons',
      'Attending Midnight Mass (la Messe de Minuit) on Christmas Eve',
      'Visiting Christmas markets (marches de Noel), especially the famous ones in Strasbourg and Colmar',
      'Leaving shoes by the fireplace for Pere Noel (Father Christmas) to fill with gifts',
      'Enjoying 13 desserts on Christmas Eve in Provence — a tradition representing Jesus and the 12 apostles',
    ],
    fr: [
      'Organiser un reveillon de Noel — un diner elabore le soir du 24 decembre avec foie gras, huitres, saumon fume et champagne',
      'Servir une buche de Noel pour le dessert — disponible dans d\'innombrables saveurs chez les patissiers',
      'Installer une creche dans la maison, souvent avec des santons provencaux',
      'Assister a la Messe de Minuit le soir du 24 decembre',
      'Visiter les marches de Noel, en particulier les celebres marches de Strasbourg et Colmar',
      'Deposer les chaussures devant la cheminee pour que le Pere Noel les remplisse de cadeaux',
      'Deguster les 13 desserts le soir de Noel en Provence — une tradition representant Jesus et les 12 apotres',
    ],
    es: [
      'Organizar un reveillon de Noel — una elaborada cena de Nochebuena con foie gras, ostras, salmon ahumado y champan',
      'Servir un buche de Noel (tronco de Navidad) de postre — disponible en innumerables sabores en las pastelerias francesas',
      'Montar un belen (creche) en casa, a menudo con santons provenzales',
      'Asistir a la Misa del Gallo (Messe de Minuit) en Nochebuena',
      'Visitar mercadillos navidenos, especialmente los famosos de Estrasburgo y Colmar',
      'Dejar los zapatos junto a la chimenea para que Pere Noel los llene de regalos',
      'Disfrutar de los 13 postres en Nochebuena en Provenza — una tradicion que representa a Jesus y los 12 apostoles',
    ],
  },

  funFacts: {
    en: [
      'The Strasbourg Christmas market (Christkindelsmärik) has been held annually since 1570, making it one of the oldest in Europe.',
      'In Provence, the tradition of 13 desserts on Christmas Eve represents Jesus and the 12 apostles, and typically includes nougat, dried fruits, and calissons.',
      'The buche de Noel was created in the 19th century by Parisian patissiers as a tribute to the medieval tradition of burning a Yule log.',
      'Pere Noel (Father Christmas) traditionally delivers gifts on Christmas Eve in France, not on Christmas morning as in many English-speaking countries.',
      'French Christmas markets are a major tourist attraction, with the Strasbourg market alone welcoming over 2 million visitors each year.',
    ],
    fr: [
      'Le marche de Noel de Strasbourg (Christkindelsmärik) est organise chaque annee depuis 1570, ce qui en fait l\'un des plus anciens d\'Europe.',
      'En Provence, la tradition des 13 desserts le soir de Noel represente Jesus et les 12 apotres, et comprend generalement du nougat, des fruits secs et des calissons.',
      'La buche de Noel a ete creee au XIXe siecle par des patissiers parisiens en hommage a la tradition medievale de bruler une buche de Noel.',
      'Le Pere Noel distribue traditionnellement les cadeaux le soir du 24 decembre en France, et non le matin de Noel comme dans de nombreux pays anglophones.',
      'Les marches de Noel francais sont une attraction touristique majeure, le seul marche de Strasbourg accueillant plus de 2 millions de visiteurs chaque annee.',
    ],
    es: [
      'El mercadillo de Navidad de Estrasburgo (Christkindelsmärik) se celebra anualmente desde 1570, siendo uno de los mas antiguos de Europa.',
      'En Provenza, la tradicion de los 13 postres en Nochebuena representa a Jesus y los 12 apostoles, e incluye tipicamente turron, frutas secas y calissons.',
      'El buche de Noel fue creado en el siglo XIX por pasteleros parisinos como tributo a la tradicion medieval de quemar un tronco de Navidad.',
      'Pere Noel (Papa Noel) tradicionalmente entrega los regalos en Nochebuena en Francia, no en la manana de Navidad como en muchos paises anglosajones.',
      'Los mercadillos navidenos franceses son una gran atraccion turistica, y solo el de Estrasburgo recibe mas de 2 millones de visitantes al ano.',
    ],
  },

  planningChecklist: {
    en: [
      'Order your buche de Noel from a local patisserie well in advance — they sell out quickly',
      'Plan your reveillon menu and shop for foie gras, oysters, and champagne early',
      'Visit Alsatian Christmas markets in Strasbourg or Colmar during the weeks before Christmas',
      'Set up the creche and decorate the tree in early December',
      'Book Midnight Mass seats if attending a popular church — especially Notre-Dame or Sacre-Coeur in Paris',
    ],
    fr: [
      'Commander sa buche de Noel chez un patissier bien a l\'avance — elles partent vite',
      'Planifier le menu du reveillon et acheter foie gras, huitres et champagne a l\'avance',
      'Visiter les marches de Noel alsaciens a Strasbourg ou Colmar dans les semaines precedant Noel',
      'Installer la creche et decorer le sapin debut decembre',
      'Reserver ses places pour la Messe de Minuit dans une eglise populaire — notamment Notre-Dame ou le Sacre-Coeur a Paris',
    ],
    es: [
      'Encargar el buche de Noel en una pasteleria local con antelacion — se agotan rapidamente',
      'Planificar el menu del reveillon y comprar foie gras, ostras y champan con antelacion',
      'Visitar los mercadillos navidenos alsacianos en Estrasburgo o Colmar durante las semanas previas a Navidad',
      'Montar el belen y decorar el arbol a principios de diciembre',
      'Reservar asientos para la Misa del Gallo en una iglesia popular — especialmente Notre-Dame o Sacre-Coeur en Paris',
    ],
  },

  relatedHolidays: ['fr_new-years-day'],

  seo: {
    en: {
      titleTemplate: 'Christmas Day {year} France — Countdown & Traditions',
      descriptionTemplate: 'When is Christmas {year} in France? Live countdown to December 25, French Christmas traditions, reveillon, and celebration guide.',
      keywords: ['Christmas France', 'Noel France', 'French Christmas traditions', 'buche de Noel', 'Strasbourg Christmas market'],
    },
    fr: {
      titleTemplate: 'Noel {year} France — Compte a rebours et traditions',
      descriptionTemplate: 'Combien de jours avant Noel {year} ? Compte a rebours jusqu\'au 25 decembre, traditions du reveillon et guide des celebrations.',
      keywords: ['Noel France', 'reveillon de Noel', 'buche de Noel', 'marche de Noel Strasbourg', 'traditions Noel France'],
    },
    es: {
      titleTemplate: 'Navidad {year} Francia — Cuenta regresiva y tradiciones',
      descriptionTemplate: 'Cuando es Navidad {year} en Francia? Cuenta regresiva hasta el 25 de diciembre, tradiciones navidenas francesas y guia de celebraciones.',
      keywords: ['Navidad Francia', 'Noel Francia', 'tradiciones navidenas francesas', 'buche de Noel', 'mercadillo Navidad Estrasburgo'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas Day {year} in France?', fr: 'Quand tombe Noel {year} en France ?', es: 'Cuando es Navidad {year} en Francia?' },
      answer: {
        en: 'Christmas Day {year} in France is on {date} ({dayOfWeek}). It is always December 25 and is a national public holiday.',
        fr: "Noel {year} tombe le {date} ({dayOfWeek}). C'est toujours le 25 decembre et c'est un jour ferie national.",
        es: 'Navidad {year} en Francia es el {date} ({dayOfWeek}). Siempre es el 25 de diciembre y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'What is the French reveillon de Noel?', fr: "Qu'est-ce que le reveillon de Noel ?", es: 'Que es el reveillon de Noel frances?' },
      answer: {
        en: 'The reveillon de Noel is the traditional French Christmas Eve dinner, typically held late on December 24. It is an elaborate, multi-course meal featuring delicacies such as foie gras, oysters, smoked salmon, lobster, and champagne, followed by a buche de Noel for dessert.',
        fr: "Le reveillon de Noel est le diner traditionnel francais du soir du 24 decembre. C'est un repas elabore de plusieurs plats comprenant des mets tels que le foie gras, les huitres, le saumon fume, le homard et le champagne, suivi d'une buche de Noel en dessert.",
        es: 'El reveillon de Noel es la cena tradicional francesa de Nochebuena, que se celebra normalmente tarde el 24 de diciembre. Es una elaborada comida de varios platos con manjares como foie gras, ostras, salmon ahumado, langosta y champan, seguida de un buche de Noel de postre.',
      },
    },
    {
      question: { en: 'What is a buche de Noel?', fr: "Qu'est-ce qu'une buche de Noel ?", es: 'Que es un buche de Noel?' },
      answer: {
        en: 'A buche de Noel (yule log cake) is the traditional French Christmas dessert — a rolled sponge cake frosted and decorated to resemble a log. It was inspired by the medieval tradition of burning a real Yule log. Modern versions come in countless flavours including chocolate, chestnut, and fruit.',
        fr: "La buche de Noel est le dessert de Noel traditionnel francais — un gateau roule glace et decore pour ressembler a une buche. Elle s'inspire de la tradition medievale de bruler une veritable buche de Noel. Les versions modernes existent dans d'innombrables saveurs dont chocolat, marron et fruits.",
        es: 'Un buche de Noel (tronco de Navidad) es el postre navideno tradicional frances — un bizcocho enrollado glaseado y decorado para parecer un tronco. Se inspiro en la tradicion medieval de quemar un verdadero tronco de Navidad. Las versiones modernas vienen en innumerables sabores como chocolate, castana y frutas.',
      },
    },
    {
      question: { en: 'Are shops open on Christmas Day in France?', fr: 'Les magasins sont-ils ouverts le jour de Noel en France ?', es: 'Estan abiertas las tiendas el dia de Navidad en Francia?' },
      answer: {
        en: 'No, almost all shops and businesses are closed on Christmas Day in France. December 25 is one of the most strictly observed public holidays. Some restaurants in tourist areas may open, but expect very limited availability.',
        fr: "Non, presque tous les commerces et entreprises sont fermes le jour de Noel en France. Le 25 decembre est l'un des jours feries les plus strictement observes. Quelques restaurants dans les zones touristiques peuvent ouvrir, mais la disponibilite est tres limitee.",
        es: 'No, casi todas las tiendas y negocios estan cerrados el dia de Navidad en Francia. El 25 de diciembre es uno de los dias festivos mas estrictamente observados. Algunos restaurantes en zonas turisticas pueden abrir, pero la disponibilidad es muy limitada.',
      },
    },
  ],

  colorTheme: 'red-green',
  icon: '\ud83c\udf84',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const frHolidays: HolidayData[] = [
  newYearsDay,
  labourDay,
  bastilleDay,
  assumption,
  allSaintsDay,
  armisticeDay,
  christmas,
];

export default frHolidays;
