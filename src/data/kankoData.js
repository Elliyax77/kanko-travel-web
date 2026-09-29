// Base de datos de Kanko Travel (観光)
export const agencyInfo = {
  name: "Kanko Travel",
  tagline: "Agencia de Viajes — Experiencias & Destinos Mundiales",
  kanji: "旅", // Tabi = Viaje / Travesía
  kanjiMeaning: "Tabi (Viaje en japonés)",
  whatsappNumber: "584120000000", // Número WhatsApp para reservas
  displayPhone: "+58 (412) 000-0000",
  email: "contacto@kankotravel.com",
  instagram: "@kankotravel",
  instagramUrl: "https://instagram.com/kankotravel",
  location: "Caracas, Venezuela — Operador Internacional",
  yearsOfExperience: "6+ años",
  satisfiedTravelers: "+4,500 viajeros felices"
};

export const heroSlides = [
  {
    id: "japon-imperial",
    badge: "🎌 RUTA IMPERIAL ASIA",
    title: "Japón Fascinante: Tokio, Kioto & Monte Fuji",
    subtitle: "Rascacielos futuristas, templos zen y la magia del país del sol naciente. Incluye vuelos, tren bala Shinkansen y hoteles premium.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80",
    price: "$2,490",
    days: "11 Días / 10 Noches",
    waMessage: "¡Hola Kanko Travel! 🎌 Me interesa cotizar el paquete de Japón Fascinante (Tokio, Kioto y Monte Fuji). ¿Podrían darme fechas disponibles y plan de pago?"
  },
  {
    id: "europa-magica",
    badge: "🏰 CLÁSICO INTERNACIONAL",
    title: "Europa Soñada: París, Roma, Venecia & Madrid",
    subtitle: "Descubre la historia viva del viejo continente con guías expertos en español, traslados de lujo y desayunos buffet incluidos.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80",
    price: "$1,890",
    days: "14 Días / 13 Noches",
    waMessage: "¡Hola Kanko Travel! 🏰 Deseo información sobre el tour Europa Soñada (París, Roma, Venecia y Madrid). ¿Cuáles son las próximas salidas?"
  },
  {
    id: "maldivas-dubai",
    badge: "✨ EXPERIENCIA EXÓTICA",
    title: "Dubái & Maldivas: Lujo en el Índico",
    subtitle: "Villas privadas sobre aguas turquesa cristalinas combinadas con la modernidad deslumbrante y safari en el desierto de Dubái.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=80",
    price: "$2,250",
    days: "9 Días / 8 Noches",
    waMessage: "¡Hola Kanko Travel! ✨ Me gustaría cotizar el viaje combinado de Dubái y Maldivas. ¿Tienen opciones para luna de miel o vacaciones familiares?"
  },
  {
    id: "caribe-punta-cana",
    badge: "🏝️ ALL INCLUSIVE 5★",
    title: "Punta Cana: Paraíso Caribeño Todo Incluido",
    subtitle: "Playas de ensueño, resorts 5 estrellas de primera línea, gastronomía ilimitada y la mejor desconexión tropical.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
    price: "$890",
    days: "5 Días / 4 Noches",
    waMessage: "¡Hola Kanko Travel! 🏝️ Quisiera cotizar el paquete todo incluido a Punta Cana con vuelos y resort 5 estrellas."
  }
];

export const destinationCategories = [
  { id: "todos", label: "Todos", icon: "Globe" },
  { id: "asia", label: "Japón & Asia", icon: "Compass" },
  { id: "europa", label: "Europa", icon: "Landmark" },
  { id: "caribe", label: "Caribe & Playas", icon: "Palmtree" },
  { id: "fulldays", label: "Full Days", icon: "Sun" },
  { id: "vuelos", label: "Boletos & Visas", icon: "Plane" }
];

export const travelPackages = [
  {
    id: "pkg-japon",
    category: "asia",
    title: "Japón Esencial & Ruta del Té",
    destination: "Tokio, Kioto, Osaka & Nara",
    country: "Japón",
    duration: "10 Días / 9 Noches",
    price: "2,350",
    badge: "DESTACADO VIP",
    flightIncluded: true,
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=900&q=80",
    highlights: ["Pase JR Shinkansen ilimitado", "Hotel 4★ con desayuno buffet", "Guía en español bilingüe", "Ceremonia del té en Kioto"],
    waMessage: "¡Hola Kanko Travel! Me gustaría recibir el itinerario detallado y cotización para el paquete 'Japón Esencial & Ruta del Té'."
  },
  {
    id: "pkg-europa",
    category: "europa",
    title: "Joyas de Europa: Madrid, Roma & París",
    destination: "España, Italia y Francia",
    country: "Europa Multidestino",
    duration: "12 Días / 11 Noches",
    price: "1,790",
    badge: "MÁS VENDIDO",
    flightIncluded: true,
    image: "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=900&q=80",
    highlights: ["Vuelo transatlántico incluido", "Visita guiada al Coliseo y Louvre", "Hoteles céntricos con traslados", "Seguro Schengen gratis"],
    waMessage: "¡Hola Kanko Travel! Quiero más información sobre el paquete 'Joyas de Europa: Madrid, Roma & París'."
  },
  {
    id: "pkg-bali",
    category: "asia",
    title: "Bali Espiritual & Playas de Lombok",
    destination: "Ubud, Seminyak & Islas Gili",
    country: "Indonesia",
    duration: "8 Días / 7 Noches",
    price: "1,290",
    badge: "TENDENCIA 2026",
    flightIncluded: false,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
    highlights: ["Villa privada con piscina", "Visita a terrazas de arroz Tegallalang", "Tour en bote a Islas Gili", "Desayunos flotantes"],
    waMessage: "¡Hola Kanko Travel! Deseo cotizar 'Bali Espiritual & Playas de Lombok' para mis próximas vacaciones."
  },
  {
    id: "pkg-curazao",
    category: "caribe",
    title: "Curazao Colors & Diving Resort",
    destination: "Willemstad, Kenepa Grandi & Mambo Beach",
    country: "Curazao",
    duration: "5 Días / 4 Noches",
    price: "680",
    badge: "SOL Y PLAYA",
    flightIncluded: true,
    image: "https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?auto=format&fit=crop&w=900&q=80",
    highlights: ["Boleto aéreo directo", "Hotel resort 4 estrellas", "City tour histórico", "Traslados in/out aeropuerto"],
    waMessage: "¡Hola Kanko Travel! Por favor envíenme opciones para viajar a Curazao (Curazao Colors & Diving Resort)."
  },
  {
    id: "pkg-roques",
    category: "caribe",
    title: "Los Roques: Cayo de Agua & Madrisquí",
    destination: "Gran Roque, Francisquí & Cayo de Agua",
    country: "Venezuela",
    duration: "4 Días / 3 Noches",
    price: "590",
    badge: "CARIBE SUPREMO",
    flightIncluded: true,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    highlights: ["Vuelo chárter ida y vuelta", "Posada VIP con pensión completa", "Paseos diarios en lancha a cayos", "Hielo, sombrillas y snack en playa"],
    waMessage: "¡Hola Kanko Travel! Me interesa el paquete VIP para Los Roques. ¿Cuáles son las fechas disponibles?"
  },
  {
    id: "pkg-madrid",
    category: "europa",
    title: "Madrid Castizo & Toledo Histórico",
    destination: "Madrid, Toledo & Segovia",
    country: "España",
    duration: "7 Días / 6 Noches",
    price: "1,150",
    badge: "CULTURAL",
    flightIncluded: true,
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=900&q=80",
    highlights: ["Boleto ida y vuelta directo", "Hotel 4★ en Gran Vía", "Tour de tapas y vino", "Excursión en tren a Toledo"],
    waMessage: "¡Hola Kanko Travel! Quiero detalles del tour Madrid Castizo & Toledo Histórico."
  }
];

export const fullDaysList = [
  {
    id: "fd-morrocoy",
    title: "Morrocoy VIP: Cayo Sombrero & Playuela",
    price: "$45",
    perPerson: "por persona",
    duration: "1 Día Completo",
    image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80",
    includes: [
      "Transporte ejecutivo ida y vuelta con aire acondicionado",
      "Traslado marítimo en lancha rápida a Cayo Sombrero",
      "Almuerzo playero con pescado fresco o pollo",
      "Hidratación continua (agua mineral, hielo y refresco)",
      "Atención personalizada y fotografías grupales"
    ],
    waMessage: "¡Hola Kanko Travel! 🌊 Quiero reservar cupos para el Full Day Morrocoy VIP (Cayo Sombrero). ¿Cuál es la próxima fecha?"
  },
  {
    id: "fd-isla-larga",
    title: "Isla Larga: Aguas Cristalinas & Barco Hundido",
    price: "$40",
    perPerson: "por persona",
    duration: "1 Día Completo",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
    includes: [
      "Traslado terrestre privado desde Caracas/Valencia",
      "Lancha ida y vuelta a Isla Larga (Parque San Esteban)",
      "Almuerzo playero completo",
      "Snorkeling guiado en el barco hundido Sesostris",
      "Guías y botiquín de primeros auxilios"
    ],
    waMessage: "¡Hola Kanko Travel! 🐠 Deseo reservar para el Full Day Isla Larga. ¿Tienen salidas este fin de semana?"
  },
  {
    id: "fd-colonia-tovar",
    title: "Colonia Tovar: Fresas, Cerveza & Ruta del Café",
    price: "$35",
    perPerson: "por persona",
    duration: "1 Día Completo",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80",
    includes: [
      "Transporte turístico panorámico ida y vuelta",
      "Tour guiado por el casco colonial y museo histórico",
      "Degustación de cervezas artesanales y fresas con crema",
      "Visita a fábrica de chocolate artesanal y miradores",
      "Tiempo libre para compras y fotos"
    ],
    waMessage: "¡Hola Kanko Travel! 🍓 Quiero reservar para el Full Day a la Colonia Tovar. ¿Cuáles son los puntos de partida?"
  }
];

export const kankoFeatures = [
  {
    icon: "Compass",
    title: "Especialistas en Rutas Mundiales",
    description: "Dominamos itinerarios hacia Asia (Japón, Bali, Tailandia), Europa y el Caribe con proveedores directos y tarifas preferenciales."
  },
  {
    icon: "CreditCard",
    title: "Reserva Flexible en Cuotas",
    description: "Congela tu paquete con solo un 30% inicial y abona pagos mensuales cómodos y sin intereses hasta 15 días antes de tu vuelo."
  },
  {
    icon: "ShieldCheck",
    title: "Seguro y Asistencia al Viajero",
    description: "Cobertura médica internacional integral, asistencia por equipaje y requisitos consulares (100% aprobatorio para visa Schengen)."
  },
  {
    icon: "Headphones",
    title: "Asesoría Humana 24/7",
    description: "Un asesor dedicado te acompañará antes, durante y después de tu viaje por WhatsApp ante cualquier inquietud o cambio de vuelo."
  }
];

export const paymentMethods = [
  {
    name: "Zelle",
    badge: "Recomendado USD",
    description: "Transferencias directas y seguras sin comisiones adicionales.",
    icon: "DollarSign"
  },
  {
    name: "Pago Móvil / Transferencia",
    badge: "Moneda Nacional",
    description: "Tasa oficial del Banco Central de Venezuela (BCV) del día.",
    icon: "Smartphone"
  },
  {
    name: "Binance Pay / Cripto",
    badge: "USDT / Sin Comisiones",
    description: "Pago instantáneo y sin fricciones mediante Binance ID o QR.",
    icon: "Cpu"
  },
  {
    name: "Efectivo USD / EUR",
    badge: "Atención en Oficina",
    description: "Recepción de efectivo en oficina comercial o entrega acordada.",
    icon: "Wallet"
  },
  {
    name: "Tarjetas Internacionales",
    badge: "Visa / Mastercard",
    description: "Link de pago seguro para tarjetas de crédito y débito del exterior.",
    icon: "CreditCard"
  }
];

export const aboutKanko = {
  title: "Sobre Kanko Travel (観光)",
  mission: "En Kanko Travel creemos que viajar no es solo trasladarse de un punto a otro; es una transformación personal. Inspirados en la filosofía japonesa de la hospitalidad y la atención minuciosa al detalle, diseñamos travesías memorables con acompañamiento de principio a fin.",
  pillars: [
    { title: "Atención Honesta", desc: "Sin costos ocultos ni letras pequeñas en tus contratos y reservas." },
    { title: "Respaldo Certificado", desc: "Alianzas formales con aerolíneas, cadenas hoteleras y operadores locales de primer nivel." },
    { title: "Flexibilidad Total", desc: "Planes a la medida para viajeros solitarios, parejas, familias y grupos corporativos." }
  ]
};

export const travelInsuranceInfo = {
  title: "Seguro de Viaje & Asistencia Médica Internacional",
  subtitle: "Tu tranquilidad en cualquier rincón del mundo",
  coverage: [
    "Asistencia médica por accidentes o enfermedad hasta $100,000 USD",
    "Cobertura COVID-19 y telemedicina 24/7 en español",
    "Compensación por demora o pérdida de equipaje",
    "Repatriación médica y sanitaria internacional",
    "Certificado de seguro oficial válido para visado Schengen y requisitos migratorios"
  ],
  waMessage: "¡Hola Kanko Travel! 🛡️ Me gustaría cotizar un Seguro de Viaje y Asistencia Internacional para mis próximas fechas de viaje."
};
