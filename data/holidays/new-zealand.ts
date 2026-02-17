/**
 * New Zealand holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getQueensBirthdayNZ, getMatarikiDate } from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'nz_new-years-day',
  countryCode: 'nz',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'dia-de-ano-nuevo' },
  names: { en: "New Year's Day", fr: 'Jour de l\'An', es: 'Día de Año Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 marks the beginning of the calendar year in New Zealand. It is a public holiday celebrated with fireworks, beach gatherings, and outdoor festivities, as January falls in the middle of the Southern Hemisphere summer.",
    fr: "Le Jour de l'An, le 1er janvier, marque le début de l'année civile en Nouvelle-Zélande. C'est un jour férié célébré avec des feux d'artifice, des rassemblements sur la plage et des festivités en plein air, car janvier se situe au cœur de l'été dans l'hémisphère sud.",
    es: 'El Día de Año Nuevo, el 1 de enero, marca el inicio del año calendario en Nueva Zelanda. Es un día festivo celebrado con fuegos artificiales, reuniones en la playa y festividades al aire libre, ya que enero cae en pleno verano del hemisferio sur.',
  },

  history: {
    en: "New Year's Day has been a public holiday in New Zealand since the Public Holidays Act of 1910. Auckland is among the first major cities in the world to welcome each new year due to New Zealand's position near the International Date Line. The celebrations at the Sky Tower in Auckland, with its spectacular fireworks display, have become an iconic event broadcast worldwide.\n\nNew Zealand's proximity to the Date Line means Kiwis are among the very first people on Earth to greet the new year, a fact that has made the country a popular New Year's Eve destination for international travellers.",
    fr: "Le Jour de l'An est un jour férié en Nouvelle-Zélande depuis la loi sur les jours fériés de 1910. Auckland est parmi les premières grandes villes du monde à accueillir chaque nouvelle année en raison de la position de la Nouvelle-Zélande près de la ligne de changement de date. Les célébrations à la Sky Tower d'Auckland, avec son spectaculaire feu d'artifice, sont devenues un événement emblématique diffusé dans le monde entier.\n\nLa proximité de la Nouvelle-Zélande avec la ligne de changement de date signifie que les Néo-Zélandais sont parmi les tout premiers au monde à accueillir la nouvelle année, un fait qui a rendu le pays une destination populaire pour le Nouvel An auprès des voyageurs internationaux.",
    es: 'El Día de Año Nuevo ha sido un día festivo en Nueva Zelanda desde la Ley de Días Festivos de 1910. Auckland se encuentra entre las primeras grandes ciudades del mundo en recibir cada nuevo año debido a la posición de Nueva Zelanda cerca de la Línea Internacional de Cambio de Fecha. Las celebraciones en la Sky Tower de Auckland, con su espectacular exhibición de fuegos artificiales, se han convertido en un evento icónico transmitido a nivel mundial.\n\nLa proximidad de Nueva Zelanda a la Línea de Cambio de Fecha significa que los neozelandeses están entre las primeras personas del planeta en recibir el nuevo año, un hecho que ha convertido al país en un destino popular de Año Nuevo para viajeros internacionales.',
  },

  traditions: {
    en: [
      'Watching the Sky Tower fireworks display in Auckland',
      'Celebrating on the beach with friends and family during summer',
      'Attending outdoor music festivals and concerts',
      'Going camping or on road trips during the summer holiday period',
      'Having a barbecue or picnic on New Year\'s Day',
      'Setting New Year\'s resolutions',
    ],
    fr: [
      'Regarder le feu d\'artifice de la Sky Tower à Auckland',
      'Célébrer sur la plage avec amis et famille pendant l\'été',
      'Assister à des festivals de musique et concerts en plein air',
      'Partir en camping ou en road trip pendant la période des vacances d\'été',
      'Organiser un barbecue ou un pique-nique le jour de l\'An',
      'Prendre des résolutions du Nouvel An',
    ],
    es: [
      'Ver la exhibición de fuegos artificiales de la Sky Tower en Auckland',
      'Celebrar en la playa con amigos y familiares durante el verano',
      'Asistir a festivales de música y conciertos al aire libre',
      'Ir de camping o de viaje por carretera durante el período de vacaciones de verano',
      'Hacer una barbacoa o un picnic el Día de Año Nuevo',
      'Establecer propósitos de Año Nuevo',
    ],
  },

  funFacts: {
    en: [
      'New Zealand is one of the first countries in the world to welcome the new year due to its proximity to the International Date Line.',
      'The Chatham Islands, part of New Zealand, are the first inhabited place to see the new year — 45 minutes before the NZ mainland.',
      'Auckland\'s Sky Tower fireworks display is broadcast live around the world.',
      'January 2 is also a public holiday in New Zealand, giving workers a guaranteed two-day break.',
      'Many Kiwis celebrate New Year\'s with a traditional beach barbecue, as it falls in the peak of summer.',
    ],
    fr: [
      'La Nouvelle-Zélande est l\'un des premiers pays au monde à accueillir la nouvelle année grâce à sa proximité avec la ligne de changement de date.',
      'Les îles Chatham, qui font partie de la Nouvelle-Zélande, sont le premier endroit habité à voir la nouvelle année — 45 minutes avant le continent néo-zélandais.',
      'Le feu d\'artifice de la Sky Tower d\'Auckland est diffusé en direct dans le monde entier.',
      'Le 2 janvier est également un jour férié en Nouvelle-Zélande, offrant aux travailleurs un congé garanti de deux jours.',
      'De nombreux Néo-Zélandais célèbrent le Nouvel An avec un barbecue traditionnel sur la plage, car il tombe en plein été.',
    ],
    es: [
      'Nueva Zelanda es uno de los primeros países del mundo en recibir el nuevo año debido a su proximidad con la Línea Internacional de Cambio de Fecha.',
      'Las Islas Chatham, parte de Nueva Zelanda, son el primer lugar habitado en ver el nuevo año — 45 minutos antes de la parte continental.',
      'La exhibición de fuegos artificiales de la Sky Tower de Auckland se transmite en vivo alrededor del mundo.',
      'El 2 de enero también es día festivo en Nueva Zelanda, dando a los trabajadores un descanso garantizado de dos días.',
      'Muchos neozelandeses celebran el Año Nuevo con una barbacoa tradicional en la playa, ya que cae en pleno verano.',
    ],
  },

  planningChecklist: {
    en: [
      'Book accommodation early if travelling — the summer holiday period is peak season',
      'Plan your NYE celebrations: beach party, city event, or quiet countryside retreat',
      'Pack sunscreen, hats, and summer essentials for outdoor celebrations',
      'Check local council events for free fireworks displays and community gatherings',
      'Stock up on food and drinks for your New Year\'s Day barbecue',
    ],
    fr: [
      'Réserver un hébergement tôt si vous voyagez — la période des vacances d\'été est la haute saison',
      'Planifier vos célébrations du Nouvel An : fête sur la plage, événement en ville ou retraite tranquille à la campagne',
      'Emporter crème solaire, chapeaux et essentiels d\'été pour les célébrations en plein air',
      'Consulter les événements des conseils locaux pour les feux d\'artifice gratuits et les rassemblements communautaires',
      'Faire le plein de nourriture et de boissons pour votre barbecue du jour de l\'An',
    ],
    es: [
      'Reservar alojamiento temprano si viaja — el período de vacaciones de verano es temporada alta',
      'Planificar sus celebraciones de Nochevieja: fiesta en la playa, evento en la ciudad o retiro tranquilo en el campo',
      'Llevar protector solar, sombreros y artículos esenciales de verano para las celebraciones al aire libre',
      'Consultar los eventos del consejo local para exhibiciones gratuitas de fuegos artificiales y reuniones comunitarias',
      'Abastecerse de comida y bebidas para la barbacoa del Día de Año Nuevo',
    ],
  },

  relatedHolidays: ['nz_christmas'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} New Zealand — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in New Zealand? Live countdown to January 1, public holiday info, and summer celebration guide.",
      keywords: ["New Year's Day NZ", 'New Zealand New Year', 'Auckland fireworks', "New Year's Day countdown", 'NZ public holiday'],
    },
    fr: {
      titleTemplate: 'Jour de l\'An {year} Nouvelle-Zélande — Compte à rebours et guide',
      descriptionTemplate: 'Quand est le Jour de l\'An {year} en Nouvelle-Zélande ? Compte à rebours, informations sur le jour férié et guide des célébrations estivales.',
      keywords: ['Jour de l\'An NZ', 'Nouvel An Nouvelle-Zélande', 'feux d\'artifice Auckland', 'compte à rebours Nouvel An', 'jour férié NZ'],
    },
    es: {
      titleTemplate: 'Día de Año Nuevo {year} Nueva Zelanda — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Día de Año Nuevo {year} en Nueva Zelanda? Cuenta regresiva, información del día festivo y guía de celebraciones de verano.',
      keywords: ['Año Nuevo NZ', 'Año Nuevo Nueva Zelanda', 'fuegos artificiales Auckland', 'cuenta regresiva Año Nuevo', 'día festivo NZ'],
    },
  },

  faq: [
    {
      question: {
        en: "When is New Year's Day {year} in New Zealand?",
        fr: 'Quand est le Jour de l\'An {year} en Nouvelle-Zélande ?',
        es: '¿Cuándo es el Día de Año Nuevo {year} en Nueva Zelanda?',
      },
      answer: {
        en: "New Year's Day {year} in New Zealand is on {date}. It is always January 1. If it falls on a weekend, the following Monday is observed as the public holiday.",
        fr: 'Le Jour de l\'An {year} en Nouvelle-Zélande est le {date}. C\'est toujours le 1er janvier. S\'il tombe un week-end, le lundi suivant est observé comme jour férié.',
        es: 'El Día de Año Nuevo {year} en Nueva Zelanda es el {date}. Siempre es el 1 de enero. Si cae en fin de semana, el lunes siguiente se observa como día festivo.',
      },
    },
    {
      question: {
        en: "Is January 2 also a public holiday in New Zealand?",
        fr: 'Le 2 janvier est-il aussi un jour férié en Nouvelle-Zélande ?',
        es: '¿El 2 de enero también es día festivo en Nueva Zelanda?',
      },
      answer: {
        en: "Yes, January 2 is also a public holiday in New Zealand, giving most workers a two-day break to start the year. This is a unique feature of New Zealand's public holiday calendar.",
        fr: 'Oui, le 2 janvier est également un jour férié en Nouvelle-Zélande, offrant à la plupart des travailleurs un congé de deux jours pour commencer l\'année. C\'est une particularité du calendrier des jours fériés néo-zélandais.',
        es: 'Sí, el 2 de enero también es día festivo en Nueva Zelanda, dando a la mayoría de los trabajadores un descanso de dos días para comenzar el año. Esta es una característica única del calendario de días festivos de Nueva Zelanda.',
      },
    },
    {
      question: {
        en: 'Why is New Zealand one of the first countries to celebrate New Year?',
        fr: 'Pourquoi la Nouvelle-Zélande est-elle l\'un des premiers pays à célébrer le Nouvel An ?',
        es: '¿Por qué Nueva Zelanda es uno de los primeros países en celebrar el Año Nuevo?',
      },
      answer: {
        en: "New Zealand's geographic position just west of the International Date Line means it is among the first major nations to enter each new day. The Chatham Islands, a New Zealand territory, are even earlier — 45 minutes ahead of mainland NZ.",
        fr: 'La position géographique de la Nouvelle-Zélande, juste à l\'ouest de la ligne de changement de date, signifie qu\'elle est parmi les premières grandes nations à entrer dans chaque nouveau jour. Les îles Chatham, un territoire néo-zélandais, sont encore plus en avance — 45 minutes avant le continent.',
        es: 'La posición geográfica de Nueva Zelanda, justo al oeste de la Línea Internacional de Cambio de Fecha, significa que es una de las primeras grandes naciones en entrar en cada nuevo día. Las Islas Chatham, un territorio neozelandés, son aún más tempranas — 45 minutos antes del continente.',
      },
    },
    {
      question: {
        en: "What is the weather like on New Year's Day in New Zealand?",
        fr: 'Quel temps fait-il le jour de l\'An en Nouvelle-Zélande ?',
        es: '¿Cómo es el clima el Día de Año Nuevo en Nueva Zelanda?',
      },
      answer: {
        en: "January is mid-summer in New Zealand, with average temperatures of 20-25°C (68-77°F). It is typically warm and sunny, making beach celebrations and outdoor barbecues the norm.",
        fr: 'Janvier est en plein été en Nouvelle-Zélande, avec des températures moyennes de 20-25°C. Il fait généralement chaud et ensoleillé, ce qui fait des célébrations sur la plage et des barbecues en plein air la norme.',
        es: 'Enero es pleno verano en Nueva Zelanda, con temperaturas promedio de 20-25°C. Típicamente hace calor y sol, lo que convierte las celebraciones en la playa y las barbacoas al aire libre en la norma.',
      },
    },
  ],

  colorTheme: 'gold-black',
  icon: '🎆',
};

// ---------------------------------------------------------------------------
// Waitangi Day — February 6
// ---------------------------------------------------------------------------

const waitangiDay: HolidayData = {
  id: 'nz_waitangi-day',
  countryCode: 'nz',
  slugs: { en: 'waitangi-day', fr: 'jour-de-waitangi', es: 'dia-de-waitangi' },
  names: { en: 'Waitangi Day', fr: 'Jour de Waitangi', es: 'Día de Waitangi' },

  dateType: 'fixed',
  fixedMonth: 2,
  fixedDay: 6,

  descriptions: {
    en: "Waitangi Day on February 6 is New Zealand's national day, commemorating the signing of the Treaty of Waitangi in 1840 between the British Crown and Māori chiefs. It is a day of cultural reflection, ceremonies, and celebrations at the historic Waitangi Treaty Grounds.",
    fr: "Le Jour de Waitangi, le 6 février, est la fête nationale de la Nouvelle-Zélande, commémorant la signature du traité de Waitangi en 1840 entre la Couronne britannique et les chefs māoris. C'est une journée de réflexion culturelle, de cérémonies et de célébrations sur le site historique du traité de Waitangi.",
    es: 'El Día de Waitangi, el 6 de febrero, es el día nacional de Nueva Zelanda, que conmemora la firma del Tratado de Waitangi en 1840 entre la Corona Británica y los jefes māoríes. Es un día de reflexión cultural, ceremonias y celebraciones en los históricos Terrenos del Tratado de Waitangi.',
  },

  history: {
    en: "The Treaty of Waitangi was signed on February 6, 1840, at the Waitangi Treaty Grounds in the Bay of Islands, Northland. It was an agreement between representatives of the British Crown and over 500 Māori chiefs. The Treaty is considered New Zealand's founding document, establishing British sovereignty while guaranteeing Māori rights to their lands, forests, fisheries, and other treasured possessions.\n\nWaitangi Day became a national public holiday in 1974. The day has evolved from simple commemorations to large-scale cultural events, though it is also a day of protest and debate about Treaty obligations and Māori rights. The Treaty Grounds at Waitangi remain the focal point of annual celebrations, with the dawn ceremony being the most significant event.\n\nThe Treaty exists in two versions — one in English and one in te reo Māori — and differences in translation have been a source of ongoing discussion about sovereignty, governance, and partnership between Māori and the Crown.",
    fr: "Le traité de Waitangi a été signé le 6 février 1840, sur le site du traité de Waitangi dans la Baie des Îles, dans le Northland. C'était un accord entre les représentants de la Couronne britannique et plus de 500 chefs māoris. Le traité est considéré comme le document fondateur de la Nouvelle-Zélande, établissant la souveraineté britannique tout en garantissant les droits des Māoris sur leurs terres, forêts, pêcheries et autres possessions précieuses.\n\nLe Jour de Waitangi est devenu un jour férié national en 1974. La journée a évolué, passant de simples commémorations à des événements culturels de grande envergure, bien qu'elle soit aussi une journée de protestation et de débat sur les obligations du traité et les droits des Māoris. Le site du traité à Waitangi reste le point focal des célébrations annuelles, la cérémonie de l'aube étant l'événement le plus significatif.\n\nLe traité existe en deux versions — une en anglais et une en te reo māori — et les différences de traduction sont une source de discussion continue sur la souveraineté, la gouvernance et le partenariat entre les Māoris et la Couronne.",
    es: "El Tratado de Waitangi fue firmado el 6 de febrero de 1840, en los Terrenos del Tratado de Waitangi en la Bahía de las Islas, Northland. Fue un acuerdo entre representantes de la Corona Británica y más de 500 jefes māoríes. El Tratado se considera el documento fundacional de Nueva Zelanda, estableciendo la soberanía británica mientras garantizaba los derechos māoríes sobre sus tierras, bosques, pesquerías y otras posesiones preciadas.\n\nEl Día de Waitangi se convirtió en día festivo nacional en 1974. El día ha evolucionado de simples conmemoraciones a eventos culturales a gran escala, aunque también es un día de protesta y debate sobre las obligaciones del Tratado y los derechos māoríes. Los Terrenos del Tratado en Waitangi siguen siendo el punto focal de las celebraciones anuales, siendo la ceremonia del amanecer el evento más significativo.\n\nEl Tratado existe en dos versiones — una en inglés y otra en te reo māori — y las diferencias en la traducción han sido una fuente de discusión continua sobre soberanía, gobernanza y asociación entre los māoríes y la Corona.",
  },

  traditions: {
    en: [
      'Attending the dawn ceremony at the Waitangi Treaty Grounds',
      'Watching traditional Māori cultural performances including kapa haka',
      'Enjoying waka (canoe) displays and races on the water',
      'Participating in community events and cultural festivals across the country',
      'Reflecting on the meaning of the Treaty and its ongoing significance',
      'Watching the ceremonial waka flotilla at the Treaty Grounds',
      'Enjoying a hāngi (traditional Māori earth oven feast)',
    ],
    fr: [
      'Assister à la cérémonie de l\'aube sur le site du traité de Waitangi',
      'Regarder les spectacles culturels māoris traditionnels, dont le kapa haka',
      'Profiter des démonstrations et courses de waka (pirogue) sur l\'eau',
      'Participer aux événements communautaires et festivals culturels à travers le pays',
      'Réfléchir à la signification du traité et à son importance continue',
      'Regarder la flottille cérémonielle de waka sur le site du traité',
      'Déguster un hāngi (festin traditionnel māori cuit dans un four souterrain)',
    ],
    es: [
      'Asistir a la ceremonia del amanecer en los Terrenos del Tratado de Waitangi',
      'Ver actuaciones culturales māoríes tradicionales, incluido el kapa haka',
      'Disfrutar de exhibiciones y carreras de waka (canoa) en el agua',
      'Participar en eventos comunitarios y festivales culturales en todo el país',
      'Reflexionar sobre el significado del Tratado y su importancia continua',
      'Ver la flotilla ceremonial de waka en los Terrenos del Tratado',
      'Disfrutar de un hāngi (festín tradicional māori cocinado en horno de tierra)',
    ],
  },

  funFacts: {
    en: [
      'The Treaty of Waitangi was signed by over 500 Māori chiefs between February and September 1840.',
      'The Treaty exists in two versions (English and Māori) that differ significantly in meaning, leading to ongoing scholarly debate.',
      'Waitangi Day was originally called "New Zealand Day" when it became a public holiday in 1974, and was renamed to Waitangi Day in 1976.',
      'The Waitangi Treaty Grounds are a National Trust property and one of New Zealand\'s most important historic sites.',
      'The largest waka (war canoe), Ngātokimatawhaorua, is launched at Waitangi each year — it is 35 metres long and requires 80 paddlers.',
    ],
    fr: [
      'Le traité de Waitangi a été signé par plus de 500 chefs māoris entre février et septembre 1840.',
      'Le traité existe en deux versions (anglaise et māorie) qui diffèrent considérablement en signification, menant à un débat académique continu.',
      'Le Jour de Waitangi s\'appelait à l\'origine « Jour de la Nouvelle-Zélande » lorsqu\'il est devenu jour férié en 1974, et a été rebaptisé Jour de Waitangi en 1976.',
      'Le site du traité de Waitangi est une propriété du National Trust et l\'un des sites historiques les plus importants de Nouvelle-Zélande.',
      'Le plus grand waka (pirogue de guerre), Ngātokimatawhaorua, est mis à l\'eau à Waitangi chaque année — il mesure 35 mètres de long et nécessite 80 pagayeurs.',
    ],
    es: [
      'El Tratado de Waitangi fue firmado por más de 500 jefes māoríes entre febrero y septiembre de 1840.',
      'El Tratado existe en dos versiones (inglés y māori) que difieren significativamente en significado, lo que genera un debate académico continuo.',
      'El Día de Waitangi originalmente se llamaba "Día de Nueva Zelanda" cuando se convirtió en día festivo en 1974, y fue renombrado a Día de Waitangi en 1976.',
      'Los Terrenos del Tratado de Waitangi son una propiedad del National Trust y uno de los sitios históricos más importantes de Nueva Zelanda.',
      'El waka (canoa de guerra) más grande, Ngātokimatawhaorua, se lanza al agua en Waitangi cada año — mide 35 metros de largo y requiere 80 remeros.',
    ],
  },

  planningChecklist: {
    en: [
      'Book accommodation in the Bay of Islands early if attending the Waitangi Treaty Grounds celebrations',
      'Check local council events for Waitangi Day celebrations in your area',
      'Learn about the Treaty of Waitangi and its significance to prepare for the day',
      'Attend a local kapa haka performance or cultural event',
      'Plan for warm summer weather — February is mid-summer in New Zealand',
    ],
    fr: [
      'Réserver un hébergement dans la Baie des Îles tôt si vous assistez aux célébrations du site du traité de Waitangi',
      'Consulter les événements des conseils locaux pour les célébrations du Jour de Waitangi dans votre région',
      'Se renseigner sur le traité de Waitangi et son importance pour se préparer à la journée',
      'Assister à un spectacle local de kapa haka ou à un événement culturel',
      'Prévoir un temps chaud d\'été — février est en plein été en Nouvelle-Zélande',
    ],
    es: [
      'Reservar alojamiento en la Bahía de las Islas temprano si asiste a las celebraciones de los Terrenos del Tratado de Waitangi',
      'Consultar los eventos del consejo local para las celebraciones del Día de Waitangi en su área',
      'Aprender sobre el Tratado de Waitangi y su importancia para prepararse para el día',
      'Asistir a una actuación local de kapa haka o evento cultural',
      'Planificar para clima cálido de verano — febrero es pleno verano en Nueva Zelanda',
    ],
  },

  relatedHolidays: ['nz_matariki', 'nz_anzac-day'],

  seo: {
    en: {
      titleTemplate: "Waitangi Day {year} — New Zealand's National Day Countdown",
      descriptionTemplate: 'When is Waitangi Day {year}? Live countdown to February 6, Treaty history, and celebration guide for New Zealand\'s national day.',
      keywords: ['Waitangi Day', 'Treaty of Waitangi', 'New Zealand national day', 'Waitangi Day date', 'February 6 NZ'],
    },
    fr: {
      titleTemplate: 'Jour de Waitangi {year} — Fête nationale de la Nouvelle-Zélande',
      descriptionTemplate: 'Quand est le Jour de Waitangi {year} ? Compte à rebours, histoire du traité et guide de célébration de la fête nationale néo-zélandaise.',
      keywords: ['Jour de Waitangi', 'Traité de Waitangi', 'fête nationale Nouvelle-Zélande', 'date Jour de Waitangi', '6 février NZ'],
    },
    es: {
      titleTemplate: 'Día de Waitangi {year} — Día Nacional de Nueva Zelanda',
      descriptionTemplate: '¿Cuándo es el Día de Waitangi {year}? Cuenta regresiva, historia del Tratado y guía de celebración del día nacional de Nueva Zelanda.',
      keywords: ['Día de Waitangi', 'Tratado de Waitangi', 'día nacional Nueva Zelanda', 'fecha Día de Waitangi', '6 de febrero NZ'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Waitangi Day {year}?',
        fr: 'Quand est le Jour de Waitangi {year} ?',
        es: '¿Cuándo es el Día de Waitangi {year}?',
      },
      answer: {
        en: 'Waitangi Day {year} is on {date}. It is always February 6. If it falls on a weekend, the following Monday is observed as the public holiday.',
        fr: 'Le Jour de Waitangi {year} est le {date}. C\'est toujours le 6 février. S\'il tombe un week-end, le lundi suivant est observé comme jour férié.',
        es: 'El Día de Waitangi {year} es el {date}. Siempre es el 6 de febrero. Si cae en fin de semana, el lunes siguiente se observa como día festivo.',
      },
    },
    {
      question: {
        en: 'What is the Treaty of Waitangi?',
        fr: 'Qu\'est-ce que le traité de Waitangi ?',
        es: '¿Qué es el Tratado de Waitangi?',
      },
      answer: {
        en: "The Treaty of Waitangi is New Zealand's founding document, signed on February 6, 1840, between the British Crown and Māori chiefs. It established British sovereignty and guaranteed Māori rights to their lands and resources. It remains central to New Zealand's governance and identity.",
        fr: 'Le traité de Waitangi est le document fondateur de la Nouvelle-Zélande, signé le 6 février 1840 entre la Couronne britannique et les chefs māoris. Il a établi la souveraineté britannique et garanti les droits des Māoris sur leurs terres et ressources. Il reste central dans la gouvernance et l\'identité de la Nouvelle-Zélande.',
        es: 'El Tratado de Waitangi es el documento fundacional de Nueva Zelanda, firmado el 6 de febrero de 1840 entre la Corona Británica y los jefes māoríes. Estableció la soberanía británica y garantizó los derechos māoríes sobre sus tierras y recursos. Sigue siendo central en la gobernanza e identidad de Nueva Zelanda.',
      },
    },
    {
      question: {
        en: 'What happens at the Waitangi Treaty Grounds on Waitangi Day?',
        fr: 'Que se passe-t-il sur le site du traité de Waitangi le Jour de Waitangi ?',
        es: '¿Qué sucede en los Terrenos del Tratado de Waitangi el Día de Waitangi?',
      },
      answer: {
        en: 'The Waitangi Treaty Grounds host a dawn ceremony, cultural performances including kapa haka, the launch of the great war canoe Ngātokimatawhaorua, hāngi feasts, and speeches by dignitaries. It is the main venue for national Waitangi Day celebrations.',
        fr: 'Le site du traité de Waitangi accueille une cérémonie de l\'aube, des spectacles culturels dont le kapa haka, la mise à l\'eau de la grande pirogue de guerre Ngātokimatawhaorua, des festins hāngi et des discours de dignitaires. C\'est le lieu principal des célébrations nationales du Jour de Waitangi.',
        es: 'Los Terrenos del Tratado de Waitangi albergan una ceremonia del amanecer, actuaciones culturales incluyendo kapa haka, el lanzamiento de la gran canoa de guerra Ngātokimatawhaorua, festines hāngi y discursos de dignatarios. Es el lugar principal de las celebraciones nacionales del Día de Waitangi.',
      },
    },
    {
      question: {
        en: 'Is Waitangi Day a public holiday in New Zealand?',
        fr: 'Le Jour de Waitangi est-il un jour férié en Nouvelle-Zélande ?',
        es: '¿Es el Día de Waitangi un día festivo en Nueva Zelanda?',
      },
      answer: {
        en: "Yes, Waitangi Day is one of New Zealand's most important public holidays. Since 2014, if it falls on a Saturday or Sunday, the following Monday is also observed as a public holiday (known as 'Mondayisation').",
        fr: 'Oui, le Jour de Waitangi est l\'un des jours fériés les plus importants de Nouvelle-Zélande. Depuis 2014, s\'il tombe un samedi ou un dimanche, le lundi suivant est également observé comme jour férié (appelé « Mondayisation »).',
        es: 'Sí, el Día de Waitangi es uno de los días festivos más importantes de Nueva Zelanda. Desde 2014, si cae en sábado o domingo, el lunes siguiente también se observa como día festivo (conocido como "Mondayisation").',
      },
    },
  ],

  colorTheme: 'red-white-black',
  icon: '🇳🇿',
};

// ---------------------------------------------------------------------------
// ANZAC Day — April 25
// ---------------------------------------------------------------------------

const anzacDay: HolidayData = {
  id: 'nz_anzac-day',
  countryCode: 'nz',
  slugs: { en: 'anzac-day', fr: 'jour-de-lanzac', es: 'dia-de-anzac' },
  names: { en: 'ANZAC Day', fr: 'Jour de l\'ANZAC', es: 'Día del ANZAC' },

  dateType: 'fixed',
  fixedMonth: 4,
  fixedDay: 25,

  descriptions: {
    en: 'ANZAC Day on April 25 commemorates the members of the Australian and New Zealand Army Corps (ANZAC) who landed at Gallipoli in Turkey during World War I in 1915. It is a solemn day of remembrance for all New Zealanders who served and died in wars and conflicts.',
    fr: "Le Jour de l'ANZAC, le 25 avril, commémore les membres du Corps d'armée australien et néo-zélandais (ANZAC) qui ont débarqué à Gallipoli en Turquie pendant la Première Guerre mondiale en 1915. C'est une journée solennelle de commémoration pour tous les Néo-Zélandais qui ont servi et sont morts dans des guerres et conflits.",
    es: 'El Día del ANZAC, el 25 de abril, conmemora a los miembros del Cuerpo del Ejército de Australia y Nueva Zelanda (ANZAC) que desembarcaron en Gallípoli, Turquía, durante la Primera Guerra Mundial en 1915. Es un día solemne de recuerdo para todos los neozelandeses que sirvieron y murieron en guerras y conflictos.',
  },

  history: {
    en: "On April 25, 1915, soldiers from Australia and New Zealand landed on the Gallipoli Peninsula in Turkey as part of an Allied campaign during World War I. The campaign lasted eight months and resulted in heavy casualties — New Zealand lost over 2,700 soldiers at Gallipoli. Despite the military defeat, the courage and sacrifice of the ANZAC troops became a defining moment in New Zealand's national identity.\n\nThe first ANZAC Day commemorations were held in 1916, just one year after the landings. By 1920, ANZAC Day had become a national day of remembrance. Dawn services, which recall the pre-dawn landing at Gallipoli, have been held since the 1920s and remain the most important observance of the day.\n\nToday, ANZAC Day honours not only those who served at Gallipoli but all New Zealanders who have served in military conflicts, including both World Wars, Korea, Vietnam, and modern peacekeeping operations.",
    fr: "Le 25 avril 1915, des soldats d'Australie et de Nouvelle-Zélande ont débarqué sur la péninsule de Gallipoli en Turquie dans le cadre d'une campagne alliée pendant la Première Guerre mondiale. La campagne a duré huit mois et a entraîné de lourdes pertes — la Nouvelle-Zélande a perdu plus de 2 700 soldats à Gallipoli. Malgré la défaite militaire, le courage et le sacrifice des troupes ANZAC sont devenus un moment déterminant de l'identité nationale néo-zélandaise.\n\nLes premières commémorations du Jour de l'ANZAC ont eu lieu en 1916, un an seulement après les débarquements. En 1920, le Jour de l'ANZAC était devenu une journée nationale de commémoration. Les services de l'aube, qui rappellent le débarquement avant l'aube à Gallipoli, sont organisés depuis les années 1920 et restent l'observance la plus importante de la journée.\n\nAujourd'hui, le Jour de l'ANZAC honore non seulement ceux qui ont servi à Gallipoli, mais tous les Néo-Zélandais qui ont servi dans des conflits militaires, y compris les deux guerres mondiales, la Corée, le Vietnam et les opérations de maintien de la paix modernes.",
    es: "El 25 de abril de 1915, soldados de Australia y Nueva Zelanda desembarcaron en la península de Gallípoli en Turquía como parte de una campaña aliada durante la Primera Guerra Mundial. La campaña duró ocho meses y resultó en numerosas bajas — Nueva Zelanda perdió más de 2.700 soldados en Gallípoli. A pesar de la derrota militar, el coraje y sacrificio de las tropas ANZAC se convirtieron en un momento definitorio de la identidad nacional neozelandesa.\n\nLas primeras conmemoraciones del Día del ANZAC se realizaron en 1916, apenas un año después de los desembarcos. Para 1920, el Día del ANZAC se había convertido en un día nacional de recuerdo. Los servicios del amanecer, que recuerdan el desembarco antes del amanecer en Gallípoli, se realizan desde la década de 1920 y siguen siendo la observancia más importante del día.\n\nHoy, el Día del ANZAC honra no solo a quienes sirvieron en Gallípoli, sino a todos los neozelandeses que han servido en conflictos militares, incluyendo ambas Guerras Mundiales, Corea, Vietnam y operaciones modernas de mantenimiento de la paz.",
  },

  traditions: {
    en: [
      'Attending dawn services at war memorials and cenotaphs across New Zealand',
      'Wearing red poppies as symbols of remembrance',
      'Observing a minute of silence at dawn services',
      'Participating in or watching civic parades with returned service members',
      'Playing "The Last Post" on a bugle at memorial services',
      'Visiting war graves and laying wreaths',
      'Playing two-up, a traditional ANZAC Day coin game',
    ],
    fr: [
      'Assister aux services de l\'aube aux monuments aux morts et cénotaphes à travers la Nouvelle-Zélande',
      'Porter des coquelicots rouges comme symboles du souvenir',
      'Observer une minute de silence lors des services de l\'aube',
      'Participer ou assister aux défilés civiques avec les anciens combattants',
      'Jouer « The Last Post » au clairon lors des services commémoratifs',
      'Visiter les tombes de guerre et déposer des couronnes',
      'Jouer au two-up, un jeu de pièces traditionnel du Jour de l\'ANZAC',
    ],
    es: [
      'Asistir a los servicios del amanecer en monumentos de guerra y cenotafios en toda Nueva Zelanda',
      'Llevar amapolas rojas como símbolos de recuerdo',
      'Observar un minuto de silencio en los servicios del amanecer',
      'Participar en o ver desfiles cívicos con veteranos de guerra',
      'Tocar "The Last Post" con un clarín en los servicios conmemorativos',
      'Visitar tumbas de guerra y colocar coronas de flores',
      'Jugar al two-up, un juego tradicional de monedas del Día del ANZAC',
    ],
  },

  funFacts: {
    en: [
      'ANZAC stands for Australian and New Zealand Army Corps.',
      'New Zealand lost more soldiers per capita than almost any other country during World War I.',
      'ANZAC biscuits, made with oats, coconut, and golden syrup, were sent to soldiers because the ingredients did not spoil easily.',
      'The Gallipoli campaign lasted from April 25 to December 20, 1915, and resulted in over 130,000 Allied casualties.',
      'ANZAC Day is observed in both New Zealand and Australia on the same date, April 25.',
    ],
    fr: [
      'ANZAC signifie Australian and New Zealand Army Corps (Corps d\'armée australien et néo-zélandais).',
      'La Nouvelle-Zélande a perdu plus de soldats par habitant que presque tout autre pays pendant la Première Guerre mondiale.',
      'Les biscuits ANZAC, faits avec des flocons d\'avoine, de la noix de coco et du sirop doré, étaient envoyés aux soldats car les ingrédients ne se détérioraient pas facilement.',
      'La campagne de Gallipoli a duré du 25 avril au 20 décembre 1915 et a causé plus de 130 000 pertes alliées.',
      'Le Jour de l\'ANZAC est observé en Nouvelle-Zélande et en Australie à la même date, le 25 avril.',
    ],
    es: [
      'ANZAC significa Australian and New Zealand Army Corps (Cuerpo del Ejército de Australia y Nueva Zelanda).',
      'Nueva Zelanda perdió más soldados per cápita que casi cualquier otro país durante la Primera Guerra Mundial.',
      'Las galletas ANZAC, hechas con avena, coco y jarabe dorado, se enviaban a los soldados porque los ingredientes no se echaban a perder fácilmente.',
      'La campaña de Gallípoli duró del 25 de abril al 20 de diciembre de 1915 y resultó en más de 130.000 bajas aliadas.',
      'El Día del ANZAC se observa tanto en Nueva Zelanda como en Australia en la misma fecha, el 25 de abril.',
    ],
  },

  planningChecklist: {
    en: [
      'Find your local dawn service — check your city or town council website for details',
      'Purchase and wear a red poppy in the days leading up to ANZAC Day',
      'Dress warmly for the dawn service — late April mornings can be cold in New Zealand',
      'Bake ANZAC biscuits to share with family and friends',
      'Research your family\'s military history through the Auckland War Memorial Museum or Archives NZ',
    ],
    fr: [
      'Trouver votre service de l\'aube local — consulter le site web de votre conseil municipal pour les détails',
      'Acheter et porter un coquelicot rouge dans les jours précédant le Jour de l\'ANZAC',
      'S\'habiller chaudement pour le service de l\'aube — les matinées de fin avril peuvent être froides en Nouvelle-Zélande',
      'Préparer des biscuits ANZAC à partager avec la famille et les amis',
      'Rechercher l\'histoire militaire de votre famille via le musée de guerre d\'Auckland ou les Archives NZ',
    ],
    es: [
      'Encontrar su servicio del amanecer local — consultar el sitio web de su consejo municipal para detalles',
      'Comprar y llevar una amapola roja en los días previos al Día del ANZAC',
      'Vestirse abrigadamente para el servicio del amanecer — las mañanas de finales de abril pueden ser frías en Nueva Zelanda',
      'Hornear galletas ANZAC para compartir con familia y amigos',
      'Investigar la historia militar de su familia a través del Museo de Guerra de Auckland o los Archivos de NZ',
    ],
  },

  relatedHolidays: ['nz_waitangi-day'],

  seo: {
    en: {
      titleTemplate: 'ANZAC Day {year} New Zealand — Countdown & Remembrance Guide',
      descriptionTemplate: 'When is ANZAC Day {year}? Live countdown to April 25, dawn service info, history, and traditions in New Zealand.',
      keywords: ['ANZAC Day NZ', 'ANZAC Day date', 'Gallipoli', 'New Zealand remembrance', 'dawn service NZ'],
    },
    fr: {
      titleTemplate: 'Jour de l\'ANZAC {year} Nouvelle-Zélande — Compte à rebours et guide',
      descriptionTemplate: 'Quand est le Jour de l\'ANZAC {year} ? Compte à rebours, informations sur les services de l\'aube, histoire et traditions en Nouvelle-Zélande.',
      keywords: ['Jour de l\'ANZAC NZ', 'date ANZAC', 'Gallipoli', 'commémoration Nouvelle-Zélande', 'service de l\'aube NZ'],
    },
    es: {
      titleTemplate: 'Día del ANZAC {year} Nueva Zelanda — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Día del ANZAC {year}? Cuenta regresiva, información de servicios del amanecer, historia y tradiciones en Nueva Zelanda.',
      keywords: ['Día del ANZAC NZ', 'fecha ANZAC', 'Gallípoli', 'conmemoración Nueva Zelanda', 'servicio del amanecer NZ'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is ANZAC Day {year}?',
        fr: 'Quand est le Jour de l\'ANZAC {year} ?',
        es: '¿Cuándo es el Día del ANZAC {year}?',
      },
      answer: {
        en: 'ANZAC Day {year} is on {date}. It is always April 25 and is a public holiday in New Zealand.',
        fr: 'Le Jour de l\'ANZAC {year} est le {date}. C\'est toujours le 25 avril et c\'est un jour férié en Nouvelle-Zélande.',
        es: 'El Día del ANZAC {year} es el {date}. Siempre es el 25 de abril y es un día festivo en Nueva Zelanda.',
      },
    },
    {
      question: {
        en: 'What does ANZAC stand for?',
        fr: 'Que signifie ANZAC ?',
        es: '¿Qué significa ANZAC?',
      },
      answer: {
        en: 'ANZAC stands for Australian and New Zealand Army Corps. It was the combined military force that fought at Gallipoli in 1915 during World War I.',
        fr: 'ANZAC signifie Australian and New Zealand Army Corps (Corps d\'armée australien et néo-zélandais). C\'était la force militaire combinée qui a combattu à Gallipoli en 1915 pendant la Première Guerre mondiale.',
        es: 'ANZAC significa Australian and New Zealand Army Corps (Cuerpo del Ejército de Australia y Nueva Zelanda). Fue la fuerza militar combinada que luchó en Gallípoli en 1915 durante la Primera Guerra Mundial.',
      },
    },
    {
      question: {
        en: 'What happens at an ANZAC Day dawn service?',
        fr: 'Que se passe-t-il lors d\'un service de l\'aube du Jour de l\'ANZAC ?',
        es: '¿Qué sucede en un servicio del amanecer del Día del ANZAC?',
      },
      answer: {
        en: 'Dawn services begin before sunrise, typically around 6 AM. They include the playing of "The Last Post," a minute of silence, the laying of wreaths, and readings. The timing recalls the pre-dawn landing at Gallipoli on April 25, 1915.',
        fr: 'Les services de l\'aube commencent avant le lever du soleil, généralement vers 6 heures du matin. Ils comprennent la sonnerie de « The Last Post », une minute de silence, le dépôt de couronnes et des lectures. L\'horaire rappelle le débarquement avant l\'aube à Gallipoli le 25 avril 1915.',
        es: 'Los servicios del amanecer comienzan antes del amanecer, típicamente alrededor de las 6 AM. Incluyen la interpretación de "The Last Post", un minuto de silencio, la colocación de coronas y lecturas. El horario recuerda el desembarco antes del amanecer en Gallípoli el 25 de abril de 1915.',
      },
    },
    {
      question: {
        en: 'Why do people wear poppies on ANZAC Day?',
        fr: 'Pourquoi les gens portent-ils des coquelicots le Jour de l\'ANZAC ?',
        es: '¿Por qué la gente lleva amapolas el Día del ANZAC?',
      },
      answer: {
        en: 'The red poppy became a symbol of remembrance after World War I, inspired by the poem "In Flanders Fields" by John McCrae. Poppies grew abundantly in the battlefields of France and Belgium. Wearing a poppy honours those who have served and sacrificed in military conflicts.',
        fr: 'Le coquelicot rouge est devenu un symbole du souvenir après la Première Guerre mondiale, inspiré par le poème « In Flanders Fields » de John McCrae. Les coquelicots poussaient abondamment sur les champs de bataille de France et de Belgique. Porter un coquelicot honore ceux qui ont servi et se sont sacrifiés dans les conflits militaires.',
        es: 'La amapola roja se convirtió en un símbolo de recuerdo después de la Primera Guerra Mundial, inspirada por el poema "In Flanders Fields" de John McCrae. Las amapolas crecían abundantemente en los campos de batalla de Francia y Bélgica. Llevar una amapola honra a quienes han servido y sacrificado en conflictos militares.',
      },
    },
  ],

  colorTheme: 'red-gold',
  icon: '🌺',
};

// ---------------------------------------------------------------------------
// Queen's Birthday — 1st Monday of June
// ---------------------------------------------------------------------------

const queensBirthday: HolidayData = {
  id: 'nz_queens-birthday',
  countryCode: 'nz',
  slugs: { en: 'queens-birthday', fr: 'anniversaire-de-la-reine', es: 'cumpleanos-de-la-reina' },
  names: { en: "Queen's Birthday", fr: 'Anniversaire de la Reine', es: 'Cumpleaños de la Reina' },

  dateType: 'calculated',
  calculateDate: getQueensBirthdayNZ,

  descriptions: {
    en: "The Queen's Birthday is a public holiday in New Zealand observed on the first Monday of June. Although it celebrates the birthday of the reigning British monarch, it does not fall on the actual birthday of the current sovereign. It provides a long weekend in early winter.",
    fr: "L'Anniversaire de la Reine est un jour férié en Nouvelle-Zélande observé le premier lundi de juin. Bien qu'il célèbre l'anniversaire du monarque britannique régnant, il ne tombe pas le jour de l'anniversaire réel du souverain actuel. Il offre un long week-end au début de l'hiver.",
    es: 'El Cumpleaños de la Reina es un día festivo en Nueva Zelanda que se observa el primer lunes de junio. Aunque celebra el cumpleaños del monarca británico reinante, no cae en el cumpleaños real del soberano actual. Proporciona un fin de semana largo a principios del invierno.',
  },

  history: {
    en: "The Queen's Birthday holiday has been observed in New Zealand since the colonial era as a way to honour the reigning British monarch. The date has changed over the years — it was previously held in different months depending on the actual birthday of the sovereign. In 1952, the date was fixed to the first Monday in June to provide a reliable long weekend.\n\nDespite New Zealand being an independent nation, it retains the British monarch as its head of state. The holiday continues to be called the Queen's Birthday (or King's Birthday) regardless of the actual birth date of the reigning monarch. It is one of the few remaining ties to New Zealand's British colonial heritage.\n\nThe long weekend is popular for winter getaways, ski season openings, and community events. It also coincides with the start of the school mid-year holidays in many regions.",
    fr: "Le jour férié de l'Anniversaire de la Reine est observé en Nouvelle-Zélande depuis l'ère coloniale comme moyen d'honorer le monarque britannique régnant. La date a changé au fil des années — elle était auparavant célébrée à différents mois selon l'anniversaire réel du souverain. En 1952, la date a été fixée au premier lundi de juin pour offrir un long week-end fiable.\n\nBien que la Nouvelle-Zélande soit une nation indépendante, elle conserve le monarque britannique comme chef d'État. Le jour férié continue de s'appeler l'Anniversaire de la Reine (ou du Roi) indépendamment de la date de naissance réelle du monarque régnant. C'est l'un des rares liens subsistants avec l'héritage colonial britannique de la Nouvelle-Zélande.\n\nLe long week-end est populaire pour les escapades hivernales, les ouvertures de saison de ski et les événements communautaires. Il coïncide également avec le début des vacances scolaires de mi-année dans de nombreuses régions.",
    es: "El día festivo del Cumpleaños de la Reina se ha observado en Nueva Zelanda desde la era colonial como una forma de honrar al monarca británico reinante. La fecha ha cambiado a lo largo de los años — anteriormente se celebraba en diferentes meses dependiendo del cumpleaños real del soberano. En 1952, la fecha se fijó en el primer lunes de junio para proporcionar un fin de semana largo confiable.\n\nA pesar de que Nueva Zelanda es una nación independiente, conserva al monarca británico como jefe de estado. El día festivo continúa llamándose Cumpleaños de la Reina (o del Rey) independientemente de la fecha de nacimiento real del monarca reinante. Es uno de los pocos vínculos restantes con la herencia colonial británica de Nueva Zelanda.\n\nEl fin de semana largo es popular para escapadas de invierno, aperturas de temporada de esquí y eventos comunitarios. También coincide con el inicio de las vacaciones escolares de mitad de año en muchas regiones.",
  },

  traditions: {
    en: [
      'Enjoying a long weekend getaway, often to ski fields as June marks the start of winter',
      'Attending Queen\'s Birthday Honours ceremonies recognising community contributions',
      'Participating in winter sports as ski season opens around this time',
      'Visiting family and friends over the long weekend',
      'Attending community events and winter festivals',
    ],
    fr: [
      'Profiter d\'un long week-end, souvent dans les stations de ski car juin marque le début de l\'hiver',
      'Assister aux cérémonies des honneurs de l\'Anniversaire de la Reine reconnaissant les contributions communautaires',
      'Participer aux sports d\'hiver alors que la saison de ski s\'ouvre à cette période',
      'Rendre visite à la famille et aux amis pendant le long week-end',
      'Assister à des événements communautaires et des festivals d\'hiver',
    ],
    es: [
      'Disfrutar de un fin de semana largo, a menudo en las pistas de esquí ya que junio marca el inicio del invierno',
      'Asistir a ceremonias de Honores del Cumpleaños de la Reina que reconocen contribuciones comunitarias',
      'Participar en deportes de invierno ya que la temporada de esquí se abre por estas fechas',
      'Visitar a familia y amigos durante el fin de semana largo',
      'Asistir a eventos comunitarios y festivales de invierno',
    ],
  },

  funFacts: {
    en: [
      "The Queen's Birthday is celebrated on a different date in New Zealand (first Monday of June) than in Australia (second Monday of June).",
      "The holiday does not fall on the actual birthday of any recent monarch — King Charles III was born on November 14.",
      "The Queen's Birthday Honours List recognises New Zealanders who have made outstanding contributions to their communities and country.",
      "June marks the start of winter in New Zealand, making the Queen's Birthday long weekend a popular time for the first ski trips of the season.",
      'New Zealand is one of several Commonwealth nations that still observe the sovereign\'s official birthday as a public holiday.',
    ],
    fr: [
      'L\'Anniversaire de la Reine est célébré à une date différente en Nouvelle-Zélande (premier lundi de juin) qu\'en Australie (deuxième lundi de juin).',
      'Le jour férié ne tombe pas le jour de l\'anniversaire réel d\'aucun monarque récent — le roi Charles III est né le 14 novembre.',
      'La liste des honneurs de l\'Anniversaire de la Reine reconnaît les Néo-Zélandais qui ont apporté des contributions exceptionnelles à leurs communautés et à leur pays.',
      'Juin marque le début de l\'hiver en Nouvelle-Zélande, faisant du long week-end de l\'Anniversaire de la Reine un moment populaire pour les premières sorties de ski de la saison.',
      'La Nouvelle-Zélande est l\'une des nombreuses nations du Commonwealth qui observent encore l\'anniversaire officiel du souverain comme jour férié.',
    ],
    es: [
      'El Cumpleaños de la Reina se celebra en una fecha diferente en Nueva Zelanda (primer lunes de junio) que en Australia (segundo lunes de junio).',
      'El día festivo no cae en el cumpleaños real de ningún monarca reciente — el rey Carlos III nació el 14 de noviembre.',
      'La Lista de Honores del Cumpleaños de la Reina reconoce a neozelandeses que han hecho contribuciones excepcionales a sus comunidades y país.',
      'Junio marca el inicio del invierno en Nueva Zelanda, haciendo del fin de semana largo del Cumpleaños de la Reina un momento popular para los primeros viajes de esquí de la temporada.',
      'Nueva Zelanda es una de varias naciones de la Commonwealth que todavía observan el cumpleaños oficial del soberano como día festivo.',
    ],
  },

  planningChecklist: {
    en: [
      'Book ski accommodation early if heading to the mountains for the long weekend',
      'Check if Queen\'s Birthday Honours have been announced — celebrate any local honourees',
      'Plan winter activities: skiing, hot springs, or cosy indoor events',
      'Prepare warm clothing for the winter long weekend',
      'Look for Queen\'s Birthday sales and promotions at retailers',
    ],
    fr: [
      'Réserver un hébergement de ski tôt si vous vous dirigez vers les montagnes pour le long week-end',
      'Vérifier si les honneurs de l\'Anniversaire de la Reine ont été annoncés — célébrer les lauréats locaux',
      'Planifier des activités hivernales : ski, sources chaudes ou événements confortables en intérieur',
      'Préparer des vêtements chauds pour le long week-end d\'hiver',
      'Chercher les soldes et promotions du Cumpleaños de la Reine chez les détaillants',
    ],
    es: [
      'Reservar alojamiento de esquí temprano si se dirige a las montañas para el fin de semana largo',
      'Verificar si se han anunciado los Honores del Cumpleaños de la Reina — celebrar a los homenajeados locales',
      'Planificar actividades de invierno: esquí, aguas termales o eventos acogedores en interiores',
      'Preparar ropa abrigada para el fin de semana largo de invierno',
      'Buscar ofertas y promociones del Cumpleaños de la Reina en los comercios',
    ],
  },

  relatedHolidays: ['nz_waitangi-day'],

  seo: {
    en: {
      titleTemplate: "Queen's Birthday {year} New Zealand — Date & Countdown",
      descriptionTemplate: "When is the Queen's Birthday {year} in New Zealand? Live countdown, public holiday info, and long weekend planning guide.",
      keywords: ["Queen's Birthday NZ", "King's Birthday NZ", 'NZ public holiday June', "Queen's Birthday date", 'long weekend NZ'],
    },
    fr: {
      titleTemplate: 'Anniversaire de la Reine {year} Nouvelle-Zélande — Date et compte à rebours',
      descriptionTemplate: 'Quand est l\'Anniversaire de la Reine {year} en Nouvelle-Zélande ? Compte à rebours, informations sur le jour férié et guide du long week-end.',
      keywords: ['Anniversaire de la Reine NZ', 'jour férié NZ juin', 'date Anniversaire de la Reine', 'long week-end NZ'],
    },
    es: {
      titleTemplate: 'Cumpleaños de la Reina {year} Nueva Zelanda — Fecha y cuenta regresiva',
      descriptionTemplate: '¿Cuándo es el Cumpleaños de la Reina {year} en Nueva Zelanda? Cuenta regresiva, información del día festivo y guía del fin de semana largo.',
      keywords: ['Cumpleaños de la Reina NZ', 'día festivo NZ junio', 'fecha Cumpleaños de la Reina', 'fin de semana largo NZ'],
    },
  },

  faq: [
    {
      question: {
        en: "When is the Queen's Birthday {year} in New Zealand?",
        fr: 'Quand est l\'Anniversaire de la Reine {year} en Nouvelle-Zélande ?',
        es: '¿Cuándo es el Cumpleaños de la Reina {year} en Nueva Zelanda?',
      },
      answer: {
        en: "The Queen's Birthday {year} in New Zealand falls on {date}. It is always the first Monday of June.",
        fr: 'L\'Anniversaire de la Reine {year} en Nouvelle-Zélande tombe le {date}. C\'est toujours le premier lundi de juin.',
        es: 'El Cumpleaños de la Reina {year} en Nueva Zelanda cae el {date}. Siempre es el primer lunes de junio.',
      },
    },
    {
      question: {
        en: "Is it now called the King's Birthday?",
        fr: 'S\'appelle-t-il maintenant l\'Anniversaire du Roi ?',
        es: '¿Se llama ahora el Cumpleaños del Rey?',
      },
      answer: {
        en: "With King Charles III now on the throne, the holiday is officially referred to as the King's Birthday in New Zealand. However, many people still informally call it the Queen's Birthday.",
        fr: 'Avec le roi Charles III maintenant sur le trône, le jour férié est officiellement appelé l\'Anniversaire du Roi en Nouvelle-Zélande. Cependant, beaucoup de gens l\'appellent encore officieusement l\'Anniversaire de la Reine.',
        es: 'Con el rey Carlos III ahora en el trono, el día festivo se denomina oficialmente el Cumpleaños del Rey en Nueva Zelanda. Sin embargo, muchas personas todavía lo llaman informalmente el Cumpleaños de la Reina.',
      },
    },
    {
      question: {
        en: "What are the Queen's Birthday Honours?",
        fr: 'Que sont les honneurs de l\'Anniversaire de la Reine ?',
        es: '¿Qué son los Honores del Cumpleaños de la Reina?',
      },
      answer: {
        en: "The Queen's Birthday Honours are awards given to New Zealanders who have made significant contributions to their community, profession, or the nation. Recipients may receive knighthoods, damehoods, and other distinctions in the New Zealand Royal Honours system.",
        fr: 'Les honneurs de l\'Anniversaire de la Reine sont des récompenses décernées aux Néo-Zélandais qui ont apporté des contributions significatives à leur communauté, profession ou nation. Les récipiendaires peuvent recevoir des titres de chevalier, de dame et d\'autres distinctions dans le système royal d\'honneurs néo-zélandais.',
        es: 'Los Honores del Cumpleaños de la Reina son premios otorgados a neozelandeses que han hecho contribuciones significativas a su comunidad, profesión o nación. Los receptores pueden recibir títulos de caballero, dama y otras distinciones en el sistema real de honores de Nueva Zelanda.',
      },
    },
    {
      question: {
        en: "Why doesn't the holiday fall on the monarch's actual birthday?",
        fr: 'Pourquoi le jour férié ne tombe-t-il pas le jour de l\'anniversaire réel du monarque ?',
        es: '¿Por qué el día festivo no cae en el cumpleaños real del monarca?',
      },
      answer: {
        en: "The official birthday celebration is set on a fixed Monday to provide a long weekend, regardless of the monarch's actual birth date. This practice is common across Commonwealth nations. King Charles III was born on November 14, but the NZ holiday remains on the first Monday in June.",
        fr: 'La célébration officielle de l\'anniversaire est fixée à un lundi pour offrir un long week-end, indépendamment de la date de naissance réelle du monarque. Cette pratique est courante dans les nations du Commonwealth. Le roi Charles III est né le 14 novembre, mais le jour férié néo-zélandais reste le premier lundi de juin.',
        es: 'La celebración oficial del cumpleaños se fija en un lunes para proporcionar un fin de semana largo, independientemente de la fecha de nacimiento real del monarca. Esta práctica es común en las naciones de la Commonwealth. El rey Carlos III nació el 14 de noviembre, pero el día festivo neozelandés permanece el primer lunes de junio.',
      },
    },
  ],

  colorTheme: 'purple-gold',
  icon: '👑',
};

// ---------------------------------------------------------------------------
// Matariki — varies (Māori New Year)
// ---------------------------------------------------------------------------

const matariki: HolidayData = {
  id: 'nz_matariki',
  countryCode: 'nz',
  slugs: { en: 'matariki', fr: 'matariki', es: 'matariki' },
  names: { en: 'Matariki', fr: 'Matariki', es: 'Matariki' },

  dateType: 'calculated',
  calculateDate: getMatarikiDate,

  descriptions: {
    en: 'Matariki is the Māori New Year, celebrated when the Matariki star cluster (Pleiades) rises in the mid-winter sky of New Zealand. It became an official public holiday in 2022 and is a time for reflection, remembrance of the departed, celebration of the present, and planning for the future.',
    fr: "Matariki est le Nouvel An māori, célébré lorsque l'amas d'étoiles Matariki (les Pléiades) se lève dans le ciel de mi-hiver en Nouvelle-Zélande. Il est devenu un jour férié officiel en 2022 et est un temps de réflexion, de souvenir des défunts, de célébration du présent et de planification pour l'avenir.",
    es: 'Matariki es el Año Nuevo māorí, celebrado cuando el cúmulo estelar Matariki (las Pléyades) se eleva en el cielo de invierno en Nueva Zelanda. Se convirtió en día festivo oficial en 2022 y es un tiempo de reflexión, recuerdo de los fallecidos, celebración del presente y planificación para el futuro.',
  },

  history: {
    en: "Matariki has been observed by Māori for centuries as the beginning of a new year, traditionally marked by the heliacal rising of the Matariki star cluster (known internationally as the Pleiades). The celebration was a time to remember those who had passed, give thanks for the harvest, and look ahead to the coming year.\n\nColonisation significantly disrupted Matariki observance, but a cultural revival beginning in the late 20th century brought renewed interest and celebration. In 2022, New Zealand became the first country in the world to create a public holiday based on a star cluster's rising. The date varies each year, determined by the Matariki Advisory Committee using both astronomical observation and traditional Māori knowledge.\n\nMatariki represents a uniquely New Zealand public holiday — it is not borrowed from another culture or country, but rooted entirely in Māori tradition and the Southern Hemisphere sky. The nine stars of the Matariki cluster each have names and significance in Māori cosmology, connecting to aspects of the natural world such as fresh water, crops, weather, and the ocean.",
    fr: "Matariki est observé par les Māoris depuis des siècles comme le début d'une nouvelle année, traditionnellement marqué par le lever héliaque de l'amas d'étoiles Matariki (connu internationalement sous le nom de Pléiades). La célébration était un temps pour se souvenir de ceux qui étaient décédés, rendre grâce pour la récolte et se tourner vers l'année à venir.\n\nLa colonisation a considérablement perturbé l'observance de Matariki, mais un renouveau culturel commencé à la fin du 20e siècle a suscité un regain d'intérêt et de célébrations. En 2022, la Nouvelle-Zélande est devenue le premier pays au monde à créer un jour férié basé sur le lever d'un amas d'étoiles. La date varie chaque année, déterminée par le Comité consultatif de Matariki en utilisant à la fois l'observation astronomique et les connaissances traditionnelles māories.\n\nMatariki représente un jour férié uniquement néo-zélandais — il n'est pas emprunté à une autre culture ou un autre pays, mais enraciné entièrement dans la tradition māorie et le ciel de l'hémisphère sud. Les neuf étoiles de l'amas Matariki ont chacune des noms et une signification dans la cosmologie māorie, liées à des aspects du monde naturel comme l'eau douce, les cultures, le temps et l'océan.",
    es: "Matariki ha sido observado por los māoríes durante siglos como el comienzo de un nuevo año, tradicionalmente marcado por la salida helíaca del cúmulo estelar Matariki (conocido internacionalmente como las Pléyades). La celebración era un tiempo para recordar a los que habían fallecido, dar gracias por la cosecha y mirar hacia el año venidero.\n\nLa colonización perturbó significativamente la observancia de Matariki, pero un renacimiento cultural que comenzó a finales del siglo XX trajo un renovado interés y celebración. En 2022, Nueva Zelanda se convirtió en el primer país del mundo en crear un día festivo basado en la salida de un cúmulo estelar. La fecha varía cada año, determinada por el Comité Asesor de Matariki utilizando tanto la observación astronómica como el conocimiento tradicional māorí.\n\nMatariki representa un día festivo exclusivamente neozelandés — no es prestado de otra cultura o país, sino arraigado enteramente en la tradición māorí y el cielo del hemisferio sur. Las nueve estrellas del cúmulo Matariki tienen cada una nombres y significados en la cosmología māorí, conectadas a aspectos del mundo natural como el agua dulce, los cultivos, el clima y el océano.",
  },

  traditions: {
    en: [
      'Gathering with whānau (family) to remember loved ones who have passed',
      'Lighting ceremonial fires at dawn to farewell the departed',
      'Stargazing to observe the Matariki star cluster rising before dawn',
      'Sharing kai (food) and preparing feasts with seasonal produce',
      'Participating in community festivals with Māori cultural performances',
      'Planting trees and gardens to symbolise new beginnings',
      'Setting intentions and goals for the year ahead',
    ],
    fr: [
      'Se rassembler avec la whānau (famille) pour se souvenir des proches décédés',
      'Allumer des feux cérémoniels à l\'aube pour dire adieu aux défunts',
      'Observer les étoiles pour voir l\'amas Matariki se lever avant l\'aube',
      'Partager du kai (nourriture) et préparer des festins avec des produits de saison',
      'Participer à des festivals communautaires avec des spectacles culturels māoris',
      'Planter des arbres et des jardins pour symboliser de nouveaux commencements',
      'Fixer des intentions et des objectifs pour l\'année à venir',
    ],
    es: [
      'Reunirse con la whānau (familia) para recordar a los seres queridos fallecidos',
      'Encender fuegos ceremoniales al amanecer para despedir a los difuntos',
      'Observar las estrellas para ver el cúmulo Matariki elevarse antes del amanecer',
      'Compartir kai (comida) y preparar festines con productos de temporada',
      'Participar en festivales comunitarios con actuaciones culturales māoríes',
      'Plantar árboles y jardines para simbolizar nuevos comienzos',
      'Establecer intenciones y metas para el año venidero',
    ],
  },

  funFacts: {
    en: [
      'Matariki became New Zealand\'s newest public holiday in 2022, making it the first new public holiday in over 100 years.',
      'New Zealand is the first country in the world to have a public holiday based on the rising of a star cluster.',
      'The Matariki star cluster has nine stars, each with a Māori name and associated meaning related to health, weather, food sources, and more.',
      'The date of Matariki shifts each year because it is based on the lunar calendar and the heliacal rising of the Pleiades.',
      'Matariki is visible to the naked eye and appears as a small cluster of bright stars in the winter sky.',
    ],
    fr: [
      'Matariki est devenu le plus récent jour férié de Nouvelle-Zélande en 2022, en faisant le premier nouveau jour férié en plus de 100 ans.',
      'La Nouvelle-Zélande est le premier pays au monde à avoir un jour férié basé sur le lever d\'un amas d\'étoiles.',
      'L\'amas d\'étoiles Matariki compte neuf étoiles, chacune avec un nom māori et une signification associée à la santé, au temps, aux sources de nourriture et plus encore.',
      'La date de Matariki change chaque année car elle est basée sur le calendrier lunaire et le lever héliaque des Pléiades.',
      'Matariki est visible à l\'œil nu et apparaît comme un petit amas d\'étoiles brillantes dans le ciel d\'hiver.',
    ],
    es: [
      'Matariki se convirtió en el día festivo más nuevo de Nueva Zelanda en 2022, siendo el primer nuevo día festivo en más de 100 años.',
      'Nueva Zelanda es el primer país del mundo en tener un día festivo basado en la salida de un cúmulo estelar.',
      'El cúmulo estelar Matariki tiene nueve estrellas, cada una con un nombre māorí y un significado asociado a la salud, el clima, las fuentes de alimento y más.',
      'La fecha de Matariki cambia cada año porque se basa en el calendario lunar y la salida helíaca de las Pléyades.',
      'Matariki es visible a simple vista y aparece como un pequeño cúmulo de estrellas brillantes en el cielo invernal.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the exact date of Matariki for this year — it changes annually',
      'Find local Matariki events and festivals in your community',
      'Learn the names and meanings of the nine Matariki stars',
      'Plan a stargazing session to observe the Matariki cluster before dawn',
      'Gather whānau for a shared meal and reflection on the past year',
    ],
    fr: [
      'Vérifier la date exacte de Matariki pour cette année — elle change annuellement',
      'Trouver les événements et festivals locaux de Matariki dans votre communauté',
      'Apprendre les noms et significations des neuf étoiles de Matariki',
      'Planifier une session d\'observation des étoiles pour voir l\'amas Matariki avant l\'aube',
      'Rassembler la whānau pour un repas partagé et une réflexion sur l\'année passée',
    ],
    es: [
      'Verificar la fecha exacta de Matariki para este año — cambia anualmente',
      'Encontrar eventos y festivales locales de Matariki en su comunidad',
      'Aprender los nombres y significados de las nueve estrellas de Matariki',
      'Planificar una sesión de observación de estrellas para ver el cúmulo Matariki antes del amanecer',
      'Reunir a la whānau para una comida compartida y reflexión sobre el año pasado',
    ],
  },

  relatedHolidays: ['nz_waitangi-day'],

  seo: {
    en: {
      titleTemplate: 'Matariki {year} — Māori New Year Countdown & Guide',
      descriptionTemplate: 'When is Matariki {year}? Live countdown to the Māori New Year, Pleiades star cluster info, and celebration guide for New Zealand.',
      keywords: ['Matariki', 'Māori New Year', 'Matariki date', 'Pleiades New Zealand', 'Matariki public holiday'],
    },
    fr: {
      titleTemplate: 'Matariki {year} — Nouvel An māori : compte à rebours et guide',
      descriptionTemplate: 'Quand est Matariki {year} ? Compte à rebours du Nouvel An māori, informations sur l\'amas des Pléiades et guide de célébration pour la Nouvelle-Zélande.',
      keywords: ['Matariki', 'Nouvel An māori', 'date Matariki', 'Pléiades Nouvelle-Zélande', 'jour férié Matariki'],
    },
    es: {
      titleTemplate: 'Matariki {year} — Año Nuevo māorí: cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es Matariki {year}? Cuenta regresiva del Año Nuevo māorí, información del cúmulo de las Pléyades y guía de celebración para Nueva Zelanda.',
      keywords: ['Matariki', 'Año Nuevo māorí', 'fecha Matariki', 'Pléyades Nueva Zelanda', 'día festivo Matariki'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Matariki {year}?',
        fr: 'Quand est Matariki {year} ?',
        es: '¿Cuándo es Matariki {year}?',
      },
      answer: {
        en: 'Matariki {year} falls on {date}. The date changes each year because it is based on the rising of the Matariki (Pleiades) star cluster.',
        fr: 'Matariki {year} tombe le {date}. La date change chaque année car elle est basée sur le lever de l\'amas d\'étoiles Matariki (Pléiades).',
        es: 'Matariki {year} cae el {date}. La fecha cambia cada año porque se basa en la salida del cúmulo estelar Matariki (Pléyades).',
      },
    },
    {
      question: {
        en: 'What is the Matariki star cluster?',
        fr: 'Qu\'est-ce que l\'amas d\'étoiles Matariki ?',
        es: '¿Qué es el cúmulo estelar Matariki?',
      },
      answer: {
        en: 'Matariki is the Māori name for the Pleiades star cluster, a group of nine stars visible to the naked eye in the winter sky. Each star has a Māori name and represents a different aspect of the natural world, such as freshwater, wind, rain, and food sources.',
        fr: 'Matariki est le nom māori de l\'amas d\'étoiles des Pléiades, un groupe de neuf étoiles visibles à l\'œil nu dans le ciel d\'hiver. Chaque étoile a un nom māori et représente un aspect différent du monde naturel, comme l\'eau douce, le vent, la pluie et les sources de nourriture.',
        es: 'Matariki es el nombre māorí del cúmulo estelar de las Pléyades, un grupo de nueve estrellas visibles a simple vista en el cielo invernal. Cada estrella tiene un nombre māorí y representa un aspecto diferente del mundo natural, como el agua dulce, el viento, la lluvia y las fuentes de alimento.',
      },
    },
    {
      question: {
        en: 'Why does Matariki fall on different dates each year?',
        fr: 'Pourquoi Matariki tombe-t-il à des dates différentes chaque année ?',
        es: '¿Por qué Matariki cae en fechas diferentes cada año?',
      },
      answer: {
        en: 'Matariki is tied to the heliacal rising of the Pleiades star cluster, which depends on astronomical conditions. The public holiday is set by the Matariki Advisory Committee using both astronomical data and traditional Māori knowledge. It typically falls between late June and mid-July.',
        fr: 'Matariki est lié au lever héliaque de l\'amas des Pléiades, qui dépend des conditions astronomiques. Le jour férié est fixé par le Comité consultatif de Matariki en utilisant à la fois des données astronomiques et des connaissances traditionnelles māories. Il tombe généralement entre fin juin et mi-juillet.',
        es: 'Matariki está vinculado a la salida helíaca del cúmulo de las Pléyades, que depende de las condiciones astronómicas. El día festivo es establecido por el Comité Asesor de Matariki utilizando tanto datos astronómicos como conocimiento tradicional māorí. Típicamente cae entre finales de junio y mediados de julio.',
      },
    },
    {
      question: {
        en: 'How is Matariki celebrated?',
        fr: 'Comment Matariki est-il célébré ?',
        es: '¿Cómo se celebra Matariki?',
      },
      answer: {
        en: 'Matariki is celebrated through gatherings with whānau (family), remembrance of those who have passed, feasting, stargazing, lighting fires at dawn, cultural performances, and community festivals. It is a time for reflection, gratitude, and looking forward to the new year.',
        fr: 'Matariki est célébré par des rassemblements avec la whānau (famille), le souvenir de ceux qui sont décédés, des festins, l\'observation des étoiles, l\'allumage de feux à l\'aube, des spectacles culturels et des festivals communautaires. C\'est un temps de réflexion, de gratitude et de regard vers la nouvelle année.',
        es: 'Matariki se celebra con reuniones con la whānau (familia), recuerdo de los que han fallecido, festines, observación de estrellas, encendido de fuegos al amanecer, actuaciones culturales y festivales comunitarios. Es un tiempo de reflexión, gratitud y mirada hacia el nuevo año.',
      },
    },
  ],

  colorTheme: 'navy-gold',
  icon: '✨',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmasDay: HolidayData = {
  id: 'nz_christmas',
  countryCode: 'nz',
  slugs: { en: 'christmas-day', fr: 'jour-de-noel', es: 'dia-de-navidad' },
  names: { en: 'Christmas Day', fr: 'Jour de Noël', es: 'Día de Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: "Christmas Day on December 25 is one of New Zealand's most cherished public holidays. Falling in the Southern Hemisphere summer, Christmas in New Zealand is celebrated with beach barbecues, outdoor gatherings, and the iconic blooming of the pōhutukawa tree, known as the New Zealand Christmas tree.",
    fr: "Le jour de Noël, le 25 décembre, est l'un des jours fériés les plus chers de Nouvelle-Zélande. Tombant en plein été dans l'hémisphère sud, Noël en Nouvelle-Zélande est célébré avec des barbecues sur la plage, des rassemblements en plein air et la floraison emblématique du pōhutukawa, connu comme l'arbre de Noël néo-zélandais.",
    es: 'El Día de Navidad, el 25 de diciembre, es uno de los días festivos más queridos de Nueva Zelanda. Al caer en el verano del hemisferio sur, la Navidad en Nueva Zelanda se celebra con barbacoas en la playa, reuniones al aire libre y la icónica floración del pōhutukawa, conocido como el árbol de Navidad neozelandés.',
  },

  history: {
    en: "Christmas has been celebrated in New Zealand since the arrival of European settlers in the early 19th century. However, the Southern Hemisphere summer setting gives New Zealand Christmas its distinctive character. While early settlers tried to replicate Northern Hemisphere traditions — heavy meals, warm clothing, and indoor celebrations — New Zealanders gradually adapted Christmas to suit the warm December climate.\n\nThe pōhutukawa tree, which blooms with vibrant red flowers in December, has become the unofficial symbol of a Kiwi Christmas. Its Māori name means \"sprinkled with spray\" referring to its coastal habitat. The tradition of celebrating Christmas at the beach, a bach (holiday home), or a campground is deeply embedded in New Zealand culture.\n\nToday, New Zealand Christmas blends traditional European customs — gift-giving, Christmas trees, and carols — with uniquely Kiwi traditions like seafood barbecues, pavlova desserts, and outdoor cricket matches on the beach.",
    fr: "Noël est célébré en Nouvelle-Zélande depuis l'arrivée des colons européens au début du 19e siècle. Cependant, le cadre estival de l'hémisphère sud donne au Noël néo-zélandais son caractère distinctif. Alors que les premiers colons essayaient de reproduire les traditions de l'hémisphère nord — repas copieux, vêtements chauds et célébrations en intérieur — les Néo-Zélandais ont progressivement adapté Noël au climat chaud de décembre.\n\nLe pōhutukawa, qui fleurit avec des fleurs rouges vibrantes en décembre, est devenu le symbole officieux d'un Noël kiwi. Son nom māori signifie « aspergé d'embruns », en référence à son habitat côtier. La tradition de célébrer Noël à la plage, dans un bach (maison de vacances) ou dans un camping est profondément ancrée dans la culture néo-zélandaise.\n\nAujourd'hui, Noël en Nouvelle-Zélande mélange les coutumes européennes traditionnelles — échange de cadeaux, sapins de Noël et chants — avec des traditions uniquement kiwi comme les barbecues de fruits de mer, les desserts pavlova et les matchs de cricket en plein air sur la plage.",
    es: "La Navidad se ha celebrado en Nueva Zelanda desde la llegada de los colonos europeos a principios del siglo XIX. Sin embargo, el entorno veraniego del hemisferio sur le da a la Navidad neozelandesa su carácter distintivo. Mientras los primeros colonos intentaban replicar las tradiciones del hemisferio norte — comidas pesadas, ropa abrigada y celebraciones en interiores — los neozelandeses gradualmente adaptaron la Navidad al clima cálido de diciembre.\n\nEl pōhutukawa, que florece con vibrantes flores rojas en diciembre, se ha convertido en el símbolo no oficial de la Navidad kiwi. Su nombre māorí significa \"rociado con rocío marino\", refiriéndose a su hábitat costero. La tradición de celebrar la Navidad en la playa, en un bach (casa de vacaciones) o en un campamento está profundamente arraigada en la cultura neozelandesa.\n\nHoy, la Navidad en Nueva Zelanda mezcla costumbres europeas tradicionales — intercambio de regalos, árboles de Navidad y villancicos — con tradiciones exclusivamente kiwi como barbacoas de mariscos, postres pavlova y partidos de cricket al aire libre en la playa.",
  },

  traditions: {
    en: [
      'Having a Christmas barbecue on the beach or at a bach (holiday home)',
      'Admiring blooming pōhutukawa trees, the "New Zealand Christmas tree"',
      'Preparing a summer Christmas feast with seafood, salads, and pavlova',
      'Playing cricket or other outdoor games on Christmas Day',
      'Attending Christmas in the Park concerts held in major cities',
      'Decorating the Christmas tree and exchanging gifts on Christmas morning',
      'Singing Christmas carols at community carol services',
    ],
    fr: [
      'Faire un barbecue de Noël sur la plage ou dans un bach (maison de vacances)',
      'Admirer les pōhutukawa en fleurs, l\'« arbre de Noël néo-zélandais »',
      'Préparer un festin de Noël d\'été avec fruits de mer, salades et pavlova',
      'Jouer au cricket ou à d\'autres jeux en plein air le jour de Noël',
      'Assister aux concerts « Christmas in the Park » dans les grandes villes',
      'Décorer le sapin de Noël et échanger des cadeaux le matin de Noël',
      'Chanter des chants de Noël lors des services communautaires de cantiques',
    ],
    es: [
      'Hacer una barbacoa de Navidad en la playa o en un bach (casa de vacaciones)',
      'Admirar los pōhutukawa en flor, el "árbol de Navidad neozelandés"',
      'Preparar un festín navideño de verano con mariscos, ensaladas y pavlova',
      'Jugar cricket u otros juegos al aire libre el Día de Navidad',
      'Asistir a conciertos de Christmas in the Park en las principales ciudades',
      'Decorar el árbol de Navidad e intercambiar regalos en la mañana de Navidad',
      'Cantar villancicos en servicios comunitarios de cantos navideños',
    ],
  },

  funFacts: {
    en: [
      'The pōhutukawa tree blooms bright red in December, earning it the name "New Zealand Christmas tree."',
      'New Zealanders eat approximately 1.2 million kg of ham and 500,000 pavlovas every Christmas.',
      'Christmas in New Zealand falls in the middle of summer, with temperatures often reaching 25-30°C (77-86°F).',
      'Santa Claus is sometimes depicted in shorts and jandals (flip-flops) in New Zealand Christmas imagery.',
      'The "Christmas in the Park" concert in Auckland attracts over 200,000 people, making it one of the largest free outdoor concerts in the Southern Hemisphere.',
    ],
    fr: [
      'Le pōhutukawa fleurit en rouge vif en décembre, ce qui lui a valu le surnom d\'« arbre de Noël néo-zélandais ».',
      'Les Néo-Zélandais consomment environ 1,2 million de kg de jambon et 500 000 pavlovas chaque Noël.',
      'Noël en Nouvelle-Zélande tombe en plein été, avec des températures atteignant souvent 25-30°C.',
      'Le Père Noël est parfois représenté en short et jandals (tongs) dans l\'imagerie de Noël néo-zélandaise.',
      'Le concert « Christmas in the Park » à Auckland attire plus de 200 000 personnes, en faisant l\'un des plus grands concerts gratuits en plein air de l\'hémisphère sud.',
    ],
    es: [
      'El pōhutukawa florece en rojo brillante en diciembre, ganándose el nombre de "árbol de Navidad neozelandés".',
      'Los neozelandeses consumen aproximadamente 1,2 millones de kg de jamón y 500.000 pavlovas cada Navidad.',
      'La Navidad en Nueva Zelanda cae en pleno verano, con temperaturas que a menudo alcanzan los 25-30°C.',
      'Santa Claus a veces se representa con pantalones cortos y jandals (chancletas) en las imágenes navideñas neozelandesas.',
      'El concierto "Christmas in the Park" en Auckland atrae a más de 200.000 personas, convirtiéndolo en uno de los conciertos gratuitos al aire libre más grandes del hemisferio sur.',
    ],
  },

  planningChecklist: {
    en: [
      'Book your bach, campground, or holiday accommodation months in advance — summer spots fill up fast',
      'Plan your summer Christmas menu: seafood, salads, pavlova, and barbecue favourites',
      'Buy Christmas gifts early to avoid the December rush',
      'Attend a "Christmas in the Park" concert in your city for a festive evening out',
      'Pack sunscreen, swimwear, and beach gear alongside your Christmas supplies',
    ],
    fr: [
      'Réserver votre bach, camping ou hébergement de vacances des mois à l\'avance — les places d\'été se remplissent vite',
      'Planifier votre menu de Noël d\'été : fruits de mer, salades, pavlova et favoris du barbecue',
      'Acheter les cadeaux de Noël tôt pour éviter la ruée de décembre',
      'Assister à un concert « Christmas in the Park » dans votre ville pour une soirée festive',
      'Emporter crème solaire, maillots de bain et équipement de plage en plus de vos fournitures de Noël',
    ],
    es: [
      'Reservar su bach, campamento o alojamiento vacacional con meses de anticipación — los lugares de verano se llenan rápido',
      'Planificar su menú navideño de verano: mariscos, ensaladas, pavlova y favoritos de la barbacoa',
      'Comprar regalos de Navidad temprano para evitar la prisa de diciembre',
      'Asistir a un concierto de "Christmas in the Park" en su ciudad para una velada festiva',
      'Llevar protector solar, trajes de baño y equipo de playa junto con sus suministros navideños',
    ],
  },

  relatedHolidays: ['nz_new-years-day'],

  seo: {
    en: {
      titleTemplate: 'Christmas Day {year} New Zealand — Countdown & Summer Christmas Guide',
      descriptionTemplate: 'How many days until Christmas {year} in New Zealand? Live countdown to December 25, summer Christmas traditions, and celebration guide.',
      keywords: ['Christmas NZ', 'Christmas New Zealand', 'summer Christmas', 'pōhutukawa Christmas tree', 'Christmas countdown NZ'],
    },
    fr: {
      titleTemplate: 'Noël {year} Nouvelle-Zélande — Compte à rebours et guide de Noël d\'été',
      descriptionTemplate: 'Combien de jours avant Noël {year} en Nouvelle-Zélande ? Compte à rebours, traditions de Noël d\'été et guide de célébration.',
      keywords: ['Noël NZ', 'Noël Nouvelle-Zélande', 'Noël d\'été', 'pōhutukawa arbre de Noël', 'compte à rebours Noël NZ'],
    },
    es: {
      titleTemplate: 'Navidad {year} Nueva Zelanda — Cuenta regresiva y guía de Navidad de verano',
      descriptionTemplate: '¿Cuántos días faltan para Navidad {year} en Nueva Zelanda? Cuenta regresiva, tradiciones de Navidad de verano y guía de celebración.',
      keywords: ['Navidad NZ', 'Navidad Nueva Zelanda', 'Navidad de verano', 'pōhutukawa árbol de Navidad', 'cuenta regresiva Navidad NZ'],
    },
  },

  faq: [
    {
      question: {
        en: 'When is Christmas Day {year} in New Zealand?',
        fr: 'Quand est le jour de Noël {year} en Nouvelle-Zélande ?',
        es: '¿Cuándo es el Día de Navidad {year} en Nueva Zelanda?',
      },
      answer: {
        en: 'Christmas Day {year} in New Zealand is on {date}. It is always December 25. If it falls on a weekend, the following Monday is observed as a public holiday.',
        fr: 'Le jour de Noël {year} en Nouvelle-Zélande est le {date}. C\'est toujours le 25 décembre. S\'il tombe un week-end, le lundi suivant est observé comme jour férié.',
        es: 'El Día de Navidad {year} en Nueva Zelanda es el {date}. Siempre es el 25 de diciembre. Si cae en fin de semana, el lunes siguiente se observa como día festivo.',
      },
    },
    {
      question: {
        en: 'What is a pōhutukawa tree?',
        fr: 'Qu\'est-ce qu\'un pōhutukawa ?',
        es: '¿Qué es un pōhutukawa?',
      },
      answer: {
        en: "The pōhutukawa (Metrosideros excelsa) is a coastal tree native to New Zealand that blooms with brilliant red flowers in December. It is known as the \"New Zealand Christmas tree\" because its flowering coincides with the Christmas season. It is an iconic symbol of Kiwi Christmas.",
        fr: 'Le pōhutukawa (Metrosideros excelsa) est un arbre côtier originaire de Nouvelle-Zélande qui fleurit avec de brillantes fleurs rouges en décembre. Il est connu comme l\'« arbre de Noël néo-zélandais » car sa floraison coïncide avec la saison de Noël. C\'est un symbole emblématique du Noël kiwi.',
        es: 'El pōhutukawa (Metrosideros excelsa) es un árbol costero nativo de Nueva Zelanda que florece con brillantes flores rojas en diciembre. Es conocido como el "árbol de Navidad neozelandés" porque su floración coincide con la temporada navideña. Es un símbolo icónico de la Navidad kiwi.',
      },
    },
    {
      question: {
        en: 'What do New Zealanders eat on Christmas Day?',
        fr: 'Que mangent les Néo-Zélandais le jour de Noël ?',
        es: '¿Qué comen los neozelandeses el Día de Navidad?',
      },
      answer: {
        en: 'A typical Kiwi Christmas meal features barbecued seafood (especially crayfish, prawns, and mussels), cold ham, fresh salads, and pavlova for dessert — a meringue-based cake topped with cream and fresh fruit. Many families also enjoy a traditional roast alongside lighter summer dishes.',
        fr: 'Un repas de Noël kiwi typique comprend des fruits de mer grillés (surtout langoustes, crevettes et moules), du jambon froid, des salades fraîches et de la pavlova en dessert — un gâteau à base de meringue garni de crème et de fruits frais. De nombreuses familles apprécient également un rôti traditionnel aux côtés de plats d\'été plus légers.',
        es: 'Una comida navideña kiwi típica incluye mariscos a la parrilla (especialmente langostas, camarones y mejillones), jamón frío, ensaladas frescas y pavlova de postre — un pastel a base de merengue cubierto con crema y fruta fresca. Muchas familias también disfrutan de un asado tradicional junto con platos de verano más ligeros.',
      },
    },
    {
      question: {
        en: 'Is Boxing Day also a public holiday in New Zealand?',
        fr: 'Le lendemain de Noël est-il aussi un jour férié en Nouvelle-Zélande ?',
        es: '¿El día después de Navidad también es festivo en Nueva Zelanda?',
      },
      answer: {
        en: "Yes, December 26 (Boxing Day) is also a public holiday in New Zealand. Combined with Christmas Day, it gives workers a two-day break. If either day falls on a weekend, the public holiday is 'Mondayised' to the next available working day.",
        fr: 'Oui, le 26 décembre (Boxing Day) est également un jour férié en Nouvelle-Zélande. Combiné avec le jour de Noël, il offre aux travailleurs un congé de deux jours. Si l\'un des jours tombe un week-end, le jour férié est reporté au prochain jour ouvrable disponible.',
        es: 'Sí, el 26 de diciembre (Boxing Day) también es día festivo en Nueva Zelanda. Combinado con el Día de Navidad, da a los trabajadores un descanso de dos días. Si alguno de los días cae en fin de semana, el día festivo se traslada al siguiente día laborable disponible.',
      },
    },
  ],

  colorTheme: 'red-green',
  icon: '🎄',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const nzHolidays: HolidayData[] = [
  newYearsDay,
  waitangiDay,
  anzacDay,
  queensBirthday,
  matariki,
  christmasDay,
];

export default nzHolidays;
