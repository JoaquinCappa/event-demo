export const businessInfo = {
  name: "Lumina Eventos",
  description: "Creamos experiencias que se recuerdan. Espacios únicos y servicios premium para que tu evento sea inolvidable.",
  address: "Av. Libertador 1234, Buenos Aires",
  phone: "+54 9 11 1234-5678",
  email: "hola@luminaeventos.com",
  instagram: "@luminaeventos",
  stats: [
    { label: "Eventos realizados", value: "+150" },
    { label: "Años de experiencia", value: "+5" },
    { label: "Servicios premium", value: "+20" },
  ]
};

export const services = [
  {
    id: "salon",
    name: "Salón Principal",
    description: "Espacio elegante con capacidad para 200 personas. Incluye pista de baile y jardín.",
    price: "Desde $150.000",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&auto=format&fit=crop",
    active: true,
  },
  {
    id: "catering",
    name: "Catering Premium",
    description: "Menú en 3 pasos, mesa dulce y barra de tragos de autor.",
    price: "Consultar",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&auto=format&fit=crop",
    active: true,
  },
  {
    id: "decoracion",
    name: "Decoración y Ambientación",
    description: "Diseño floral, iluminación cálida y mobiliario de estilo.",
    price: "Desde $80.000",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop",
    active: true,
  },
  {
    id: "fotografia",
    name: "Fotografía y Video",
    description: "Cobertura completa, drone y álbum digital de alta resolución.",
    price: "Desde $60.000",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop",
    active: true,
  },
  {
    id: "dj",
    name: "DJ y Música",
    description: "Sonido profesional, iluminación rítmica y repertorio personalizado.",
    price: "Desde $45.000",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800&auto=format&fit=crop",
    active: true,
  }
];

export const eventTypes = [
  { id: "boda", name: "Bodas", image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop" },
  { id: "15anos", name: "15 Años", image: "https://images.unsplash.com/photo-1549335223-c89505707f65?q=80&w=800&auto=format&fit=crop" },
  { id: "cumpleanos", name: "Cumpleaños", image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&auto=format&fit=crop" },
  { id: "corporativo", name: "Eventos Corporativos", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop" },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=800&h=1000&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&h=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=800&h=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&h=1200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&h=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=800&h=1000&auto=format&fit=crop",
];

export const mockRequests = [
  {
    id: "req-1",
    client: "María Gómez",
    whatsapp: "+5491144445555",
    eventType: "Boda",
    date: "2026-10-15",
    guests: 120,
    service: "Salón Principal, Catering Premium",
    status: "Pendiente",
    message: "Hola, queremos hacer nuestra boda en el salón. Nos gustaría saber opciones de menú.",
  },
  {
    id: "req-2",
    client: "Juan Pérez",
    whatsapp: "+5491133332222",
    eventType: "Evento Corporativo",
    date: "2026-11-10",
    guests: 50,
    service: "Salón Principal, Catering",
    status: "Confirmada",
    message: "Fiesta de fin de año de la empresa.",
  },
  {
    id: "req-3",
    client: "Lucía Fernández",
    whatsapp: "+5491122221111",
    eventType: "15 Años",
    date: "2026-09-20",
    guests: 80,
    service: "Decoración, Fotografía, DJ",
    status: "Rechazada",
    message: "Consulto si tienen disponibilidad y fotocabina.",
  }
];

export const mockCustomers = [
  {
    id: "cli-1",
    name: "María Gómez",
    whatsapp: "+5491144445555",
    email: "maria.g@email.com",
    events: 1,
    lastBooking: "2026-10-15",
    status: "Nuevo cliente"
  },
  {
    id: "cli-2",
    name: "Juan Pérez",
    whatsapp: "+5491133332222",
    email: "jperez@empresa.com",
    events: 3,
    lastBooking: "2026-11-10",
    status: "Cliente recurrente"
  }
];

export const bookedDates = [
  "2026-09-12",
  "2026-09-19",
  "2026-09-20",
  "2026-10-02",
  "2026-10-15",
  "2026-11-10",
];
