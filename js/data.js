// ==========================================================================
// VÉRTICE ARQUITECTURA & HÁBITAT SOSTENIBLE - DATA STORE
// Portafolio de Obras Arquitectónicas & Bitácora de Diseño (Blog)
// ==========================================================================

const PORTFOLIO_DATA = {
  company: {
    name: "Vértice",
    surname: "Arquitectura & Hábitat",
    tagline: "Estudio de Arquitectura Bioclimática, Interiorismo Sensorial & Hábitat Consciente",
    description: "Concebimos obras arquitectónicas que dialogan con el paisaje, respetan los ciclos naturales y crean experiencias habitables conmovedoras mediante el uso honesto de materiales nobles.",
    location: "Sede Central: Calle 10 # 43D-28, El Poblado, Medellín • Proyectos Internacionales",
    email: "estudio@vertice-arquitectura.co",
    phone: "+57 (604) 448-9120",
    hours: "Lunes a Viernes: 8:30 AM - 6:00 PM (COT)",
    socials: {
      instagram: "https://instagram.com",
      behance: "https://behance.net",
      linkedin: "https://linkedin.com",
      pinterest: "https://pinterest.com"
    },
    stats: [
      { value: "92+", label: "Obras Construidas", description: "En 6 países de América y Europa" },
      { value: "54.000 m²", label: "Superficie Diseñada", description: "Viviendas, retail y cultura" },
      { value: "14", label: "Premios de Arquitectura", description: "Bienales, ArchDaily & LEED Gold" },
      { value: "100%", label: "Eficiencia Pasiva", description: "Enfoque bioclimático sin carbono" }
    ]
  },

  services: [
    {
      id: "residencial",
      icon: "home",
      title: "Arquitectura Residencial de Autor",
      badge: "Viviendas Singulares",
      shortDesc: "Diseño integral de casas unifamiliares, fincas de recreo y villas bioclimáticas personalizadas a la medida del estilo de vida de cada familia.",
      details: [
        "Estudios Topográficos y Asoleamiento Solar",
        "Diseño Arquitectónico Bioclimático Passivhaus",
        "Selección de Materiales Nobles (Madera, Piedra, Tierra)",
        "Planos Ejecutivos de Construcción y Detalles 1:1",
        "Dirección Arquitectónica y Supervisión en Obra"
      ],
      priceStarting: "Desde $45 USD / m² proyectado",
      deliveryTime: "Fase de diseño: 8 a 14 semanas"
    },
    {
      id: "interiorismo",
      icon: "sofa",
      title: "Diseño Interior & Retail Experiencial",
      badge: "Espacios Sensoriales",
      shortDesc: "Transformamos interiores residenciales, restaurantes, hoteles boutique y tiendas conceptuales en atmósferas envolventes de bienestar y textura.",
      details: [
        "Diseño de Mobiliario a Medida y Carpintería Fina",
        "Iluminación Escenográfica y Circadiana",
        "Paletas Cromáticas Orgánicas y Acabados de Barro",
        "Acondicionamiento Acústico y Confort Térmico",
        "Selección Curada de Arte y Decoración Textil"
      ],
      priceStarting: "Desde $30 USD / m² proyectado",
      deliveryTime: "Fase de diseño: 6 a 10 semanas"
    },
    {
      id: "rehabilitacion",
      icon: "landmark",
      title: "Rehabilitación Patrimonial & Reciclaje",
      badge: "Valor Histórico",
      shortDesc: "Rescatamos inmuebles antiguos, naves industriales y casas de valor patrimonial otorgándoles una segunda vida contemporánea sin borrar su memoria.",
      details: [
        "Diagnóstico Estructural y Patológico del Inmueble",
        "Consolidación de Muros Antiguos y Cubiertas",
        "Integración de Redes Modernas Invisibles",
        "Trámite de Licencias ante Entidades Patrimoniales",
        "Eficiencia Energética en Estructuras Preexistentes"
      ],
      priceStarting: "Desde $50 USD / m² proyectado",
      deliveryTime: "Fase de diseño: 10 a 16 semanas"
    },
    {
      id: "paisajismo",
      icon: "trees",
      title: "Paisajismo & Jardines Biofílicos",
      badge: "Regeneración Ecológica",
      shortDesc: "Integración radical del entorno botánico con la arquitectura mediante especies nativas, humedales de fitodepuración y cubiertas vegetales vivas.",
      details: [
        "Estudio Botánico de Flora Autóctona",
        "Diseño de Jardines de Bajo Consumo Hídrico",
        "Piscinas Naturales y Espejos de Agua Vivos",
        "Sistemas de Cosecha y Reutilización de Lluvia",
        "Cubiertas Verdes y Patios Interiores Vivos"
      ],
      priceStarting: "Desde $20 USD / m² proyectado",
      deliveryTime: "Fase de diseño: 4 a 8 semanas"
    }
  ],

  projects: [
    {
      id: "casa-bruma",
      title: "Casa Bruma - Residencia Bioclimática en el Bosque",
      category: "residencial",
      categoryLabel: "Residencial Campestre",
      location: "Villa de Leyva, Boyacá",
      year: "2026",
      area: "480 m²",
      materials: "Tierra apisonada, madera de teca reciclada, piedra pizarra y vidrio térmico",
      featured: true,
      coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80"
      ],
      summary: "Una vivienda privada incrustada en la ladera de montaña que prescinde de calefacción artificial aprovechando la inercia térmica de la tierra y la radiación solar pasiva.",
      challenge: "El terreno presentaba una pendiente pronunciada del 38% y vientos helados nocturnos provenientes del páramo. El cliente requería una vivienda espaciosa que no alterara la silueta natural de la montaña y mantuviera 21°C constantes todo el año sin consumo eléctrico para climatización.",
      solution: "Esculpimos la casa en terrazas semienterradas con muros portantes de tierra apisonada de 45 cm de grosor extraída del mismo lote. Los grandes ventanales capturan el sol matutino y un patio central de doble altura distribuye la ventilación cruzada.",
      impact: [
        { label: "Consumo Energético para Climatizar", value: "0 kWh" },
        { label: "Material Local del Sitio Utilizado", value: "85%" },
        { label: "Reducción de Huella de Carbono", value: "-74%" }
      ],
      awards: "Premio Nacional de Arquitectura Bioclimática 2026",
      testimonial: {
        quote: "Vértice logró que la casa se sienta como una extensión de la montaña. Despertar viendo la bruma colarse entre los árboles sin sentir frío es una experiencia casi mística.",
        author: "Santiago & Mariana Cárdenas",
        role: "Propietarios de Casa Bruma"
      }
    },
    {
      id: "hotel-umbral",
      title: "Hotel Boutique Umbral - Ecoturismo de Alta Gama",
      category: "hospitalidad",
      categoryLabel: "Hospitalidad & Turismo",
      location: "Barichara, Santander",
      year: "2025",
      area: "1.850 m²",
      materials: "Tapia pisada tradicional, mampostería en piedra caliza, caña brava y cal viva",
      featured: true,
      coverImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
      ],
      summary: "Complejo de 14 suites independientes articuladas en torno a huertos de olivos y albercas de agua de manantial, celebrando la técnica ancestral de tapia pisada.",
      challenge: "Respetar la rigurosa normativa de conservación de Barichara sin caer en réplicas pastiche coloniales, ofreciendo comodidades contemporáneas de lujo y total silencio acústico.",
      solution: "Colaboramos con maestros tapiadores locales para levantar muros monolíticos de tierra compactada con acabado de cal viva y pigmentos minerales del cañón del Chicamocha.",
      impact: [
        { label: "Ocupación Media Anual", value: "94%" },
        { label: "Empleo de Artesanos Locales", value: "48 Familias" },
        { label: "Certificación de Sostenibilidad", value: "Green Key" }
      ],
      awards: "Mención de Honor Bienal Panamericana de Arquitectura",
      testimonial: {
        quote: "El proyecto se convirtió en el referente de hospitalidad regenerativa de la región. Los huéspedes destacan la paz y la temperatura perfecta de las habitaciones de barro.",
        author: "Felipe Echeverri",
        role: "Director de Operaciones Umbral Hotels"
      }
    },
    {
      id: "pabellon-botanico",
      title: "Pabellón Botánico & Café Orquidiario",
      category: "comercial",
      categoryLabel: "Comercial & Paisajismo",
      location: "Rionegro, Antioquia",
      year: "2026",
      area: "620 m²",
      materials: "Madera laminada cruzada (CLT), guadua certificada, policarbonato difusor y piedra laja",
      featured: true,
      coverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1000&q=80"
      ],
      summary: "Invernadero bioclimático, tostaduría de café y espacio de eventos cubierto por una bóveda ligera de madera ensamblada mediante encajes carpinteros de precisión milimétrica.",
      challenge: "Generar una estructura de gran luz libre (22 metros sin columnas intermedias) con un presupuesto ajustado y montaje en seco que no dañara los árboles centenarios del predio.",
      solution: "Estructura paramétrica de madera de pino pátula reforestado prefabricada en taller mediante corte CNC y montada en sitio en tan solo 18 días hábiles.",
      impact: [
        { label: "Tiempo de Montaje de Estructura", value: "18 Días" },
        { label: "Captura Neta de CO₂ de la Madera", value: "120 Ton" },
        { label: "Aumento en Visitas Comerciales", value: "+320%" }
      ],
      awards: "Finalista ArchDaily Building of the Year 2026",
      testimonial: {
        quote: "La luz tamizada que entra por la cubierta de madera crea una atmósfera mágica. El café se convirtió en el punto de encuentro cultural por excelencia.",
        author: "Lucía Vélez",
        role: "Propietaria de Café Orquidiario"
      }
    },
    {
      id: "loft-poblado",
      title: "Loft Textil - Reconversión de Nave Industrial",
      category: "interiorismo",
      categoryLabel: "Interiorismo & Reciclaje",
      location: "Medellín, Antioquia",
      year: "2025",
      area: "310 m²",
      materials: "Concreto pulido original, perfiles de acero oxidado tratado, roble salvaje y lino crudo",
      featured: false,
      coverImage: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80"
      ],
      summary: "Transformación de una antigua fábrica de hilados de los años 60 en una residencia contemporánea y taller de arte con dobles alturas y patios de luz biofílicos.",
      challenge: "El espacio original era oscuro, acústicamente ruidoso y carecía de aislamiento térmico, con vigas de hormigón deterioradas por décadas de uso industrial.",
      solution: "Consolidamos los pórticos originales, perforamos un lucernario central para bañar el salón de sol y diseñamos mamparas de cristal estriado y acero para modular la intimidad.",
      impact: [
        { label: "Estructura Original Conservada", value: "92%" },
        { label: "Iluminación Natural Diurna", value: "100%" },
        { label: "Valor de Tasación Inmobiliaria", value: "+185%" }
      ],
      awards: "Premio Diseño de Interiores Revista AXXIS",
      testimonial: {
        quote: "Vértice supo leer la historia del edificio y le dio un confort y elegancia que jamás imaginé posibles en una fábrica vieja.",
        author: "Sebastián Montoya",
        role: "Coleccionista de Arte & Artista Visual"
      }
    },
    {
      id: "casa-acantilado",
      title: "Casa del Acantilado - Refugio Marino Desconectado",
      category: "residencial",
      categoryLabel: "Residencial de Playa",
      location: "Nuquí, Chocó Pacífico",
      year: "2026",
      area: "360 m²",
      materials: "Madera de choibá certificada, cubiertas de palma esterillada y pilotes antisísmicos",
      featured: false,
      coverImage: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=1000&q=80"
      ],
      summary: "Vivienda autosuficiente elevada sobre pilotes en la selva pacífica colombiana, 100% desconectada de la red eléctrica convencional con energía solar y agua de lluvia purificada.",
      challenge: "Zona de altísima pluviosidad (más de 6.000 mm anuales), humedad relativa extrema del 95% y acceso exclusivamente por lancha marítima.",
      solution: "Diseño palafítico que permite el paso libre del agua y fauna bajo la casa, con techos hiperventilados a cuatro aguas y pantallas móviles de madera que frenan la lluvia sin cortar la brisa.",
      impact: [
        { label: "Autosuficiencia en Agua & Luz", value: "100% Off-Grid" },
        { label: "Impacto en Suelo de Selva", value: "0% Deforestación" },
        { label: "Vida Útil Estimada de Maderas", value: "70+ Años" }
      ],
      awards: "Premio Hábitat Tropical 2026",
      testimonial: {
        quote: "Poder vivir en mitad de la selva tropical con el sonido de las ballenas y absoluto confort sin tocar una sola rama de la jungla es el mayor lujo del mundo.",
        author: "Dra. Carolina Restrepo",
        role: "Bióloga Marina"
      }
    },
    {
      id: "restaurante-origen",
      title: "Restaurante Origen - Espacio Gastronómico & Huerto",
      category: "hospitalidad",
      categoryLabel: "Gastronomía & Espacio",
      location: "El Retiro, Antioquia",
      year: "2025",
      area: "490 m²",
      materials: "Ladrillo de tejar cocido a leña, concreto ocre, hierro forjado y cubiertas ajardinadas",
      featured: false,
      coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80"
      ],
      summary: "Un viaje sensorial donde la cocina abierta al fuego de leña se funde con mesas incrustadas en un huerto agroecológico comestible de vegetales y aromáticas.",
      challenge: "Eliminar la barrera tradicional entre los comensales, la cocina y los cultivos, manteniendo la salubridad y una temperatura cálida en las noches frías de altiplano.",
      solution: "Un pabellón longitudinal protegido por chimeneas de masa térmica y celosías de ladrillo calado que tamizan la luz del atardecer y guían la mirada hacia el fogón.",
      impact: [
        { label: "Ingredientes del Huerto en Menú", value: "65%" },
        { label: "Mesa Promedio de Reserva", value: "2.8 Horas" },
        { label: "Premio de Diseño Gastronómico", value: "50 Best Spaces" }
      ],
      awards: "Premio Arquitectura Gastronómica Iberoamericana",
      testimonial: {
        quote: "La arquitectura de Vértice potenció el sabor de nuestra comida. Los clientes no vienen solo a almorzar, vienen a vivir una tarde de campo y contemplación.",
        author: "Chef Mateo Arango",
        role: "Chef Fundador de Origen"
      }
    }
  ],

  blogPosts: [
    {
      id: "madera-clt-arquitectura-futuro",
      title: "El Renacer de la Madera Laminada Cruzada (CLT): Por Qué Sustituirá al Hormigón en 2030",
      category: "materiales",
      categoryLabel: "Materiales & Innovación",
      date: "19 Nov 2026",
      readTime: "6 min de lectura",
      coverImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80",
      excerpt: "La madera de ingeniería no es una moda campestre: es el único material de construcción estructural que captura carbono en lugar de emitirlo. Analizamos su resistencia al fuego, sismos y velocidad de montaje.",
      author: {
        name: "Arq. Tomás Valenzuela",
        role: "Director de Innovación Estructural",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
      },
      likes: 142,
      tags: ["Madera CLT", "Sostenibilidad", "Estructuras", "Huella de Carbono"],
      content: `
        <p class="lead text-lg font-medium text-slate-700 dark:text-slate-300 mb-6">
          La industria de la construcción representa cerca del 40% de las emisiones globales de dióxido de carbono en el planeta. La gran mayoría de esa cifra proviene de dos materiales insaciables en consumo fósil: el hormigón armado y el acero estructural.
        </p>

        <h3 class="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. El Material que Come Carbono en Lugar de Producirlo</h3>
        <p class="mb-4 text-slate-600 dark:text-slate-400">
          Mientras que fabricar una tonelada de cemento libera casi una tonelada de CO₂ a la atmósfera, cada metro cúbico de madera laminada cruzada (CLT) almacena aproximadamente una tonelada de carbono capturado por el árbol durante su crecimiento en bosques manejados de manera responsable.
        </p>

        <blockquote class="p-4 my-6 border-l-4 border-amber-600 bg-amber-50/50 dark:bg-amber-950/30 rounded-r-lg italic text-slate-700 dark:text-amber-200">
          "Un edificio de hormigón es un deudor ecológico desde el día de su colado; un edificio de madera es un banco de carbono que protege el aire de las próximas generaciones."
        </blockquote>

        <h3 class="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Resistencia Estructural y el Mito del Fuego</h3>
        <p class="mb-4 text-slate-600 dark:text-slate-400">
          El mito más común contra la madera es el riesgo de incendio. En piezas macizas de CLT de 15 a 30 cm de espesor, la madera no arde repentinamente: se carboniza a una velocidad calculable y predecible (aprox. 0.65 mm por minuto). Esta capa superficial de carbón aísla el núcleo interior, que conserva su capacidad portante durante horas, superando en estabilidad a vigas de acero que colapsan por pandeo térmico a 600°C.
        </p>

        <h3 class="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. Montaje en Seco: Obras Silenciosas y Precisas</h3>
        <p class="mb-4 text-slate-600 dark:text-slate-400">
          Construir con CLT se parece más al montaje de un reloj de precisión suizo que a una obra tradicional. Los paneles llegan al terreno cortados por robots CNC con tolerancias de medio milímetro, con los pases de tuberías y ventanas listos. Una vivienda de 350 m² puede tener su estructura ensamblada en solo 10 a 14 días con 4 operarios y una grúa pequeña, reduciendo el ruido vecinal un 80%.
        </p>
      `,
      comments: [
        {
          author: "Ing. Bernardo Duque",
          date: "Hace 2 días",
          text: "Excelente desglose sobre el comportamiento al fuego. El código sismorresistente NSR-10 en Colombia ya necesita una actualización urgente para facilitar el cálculo de CLT en edificios de más de 6 pisos."
        },
        {
          author: "Valentina Prieto",
          date: "Hace 1 día",
          text: "El olor y la calidez táctil de una casa de madera son incomparables con el hormigón pintado. Es salud mental pura."
        }
      ]
    },
    {
      id: "climatizacion-pasiva-sin-aire",
      title: "Cómo Diseñar Espacios con Confort Térmico Pasivo sin Depender del Aire Acondicionado",
      category: "sostenibilidad",
      categoryLabel: "Sostenibilidad & Bioclimática",
      date: "11 Nov 2026",
      readTime: "7 min de lectura",
      coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
      excerpt: "Antes de inventar los compresores eléctricos, la arquitectura vernácula resolvía el calor extremo con geometría, sombra, inercia térmica y viento. Recuperamos esas lecciones para el cambio climático.",
      author: {
        name: "Arq. Natalia Zuluaga",
        role: "Socia Fundadora & Directora Bioclimática",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
      },
      likes: 119,
      tags: ["Bioclimática", "Passivhaus", "Ahorro Energético", "Confort Térmico"],
      content: `
        <p class="lead text-lg font-medium text-slate-700 dark:text-slate-300 mb-6">
          Encender un equipo de aire acondicionado para enfriar una habitación caliente es el equivalente arquitectónico a tomar analgésicos para curar una fractura: trata el síntoma, pero ignora la causa.
        </p>

        <h3 class="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">1. La Orientación Solar es Sagrada</h3>
        <p class="mb-4 text-slate-600 dark:text-slate-400">
          En el trópico y latitudes templadas, el peor error es colocar ventanales gigantes hacia el poniente (oeste) sin aleros profundos. La radiación solar que penetra por un cristal genera el temido "efecto invernadero": una vez dentro, el calor queda atrapado. Diseñar aleros calculados según el ángulo solar del solsticio permite que entre luz en invierno pero bloquea el sol duro del mediodía.
        </p>

        <h3 class="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">2. Ventilación Cruzada y el Efecto Chimenea</h3>
        <p class="mb-4 text-slate-600 dark:text-slate-400">
          El aire caliente es menos denso y sube de forma natural. Si diseñamos aberturas bajas en la fachada norte (por donde entra aire fresco) y claraboyas o linternillas altas regulables en la parte superior del techo, se crea una corriente de convección continua que renueva el aire interior varias veces por hora de forma completamente silenciosa y gratuita.
        </p>

        <h3 class="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">3. La Masa Térmica como Batería Natural</h3>
        <p class="mb-4 text-slate-600 dark:text-slate-400">
          Materiales como la tierra apisonada, el adobe, el ladrillo macizo o la piedra actúan como esponjas térmicas: absorben el calor del día impidiendo que ingrese a las habitaciones y lo liberan suavemente durante las horas frías de la noche, amortiguando las oscilaciones térmicas extremas.
        </p>
      `,
      comments: [
        {
          author: "Carlos E. Benítez",
          date: "Hace 4 días",
          text: "En nuestra casa en Girón aplicamos muros dobles de tapia con cámara de aire y no hemos necesitado encender un solo ventilador en todo el año."
        }
      ]
    },
    {
      id: "interiores-biofilicos-bienestar",
      title: "Interiores Biofílicos: Mucho Más Que Poner Tres Plantas en una Estantería",
      category: "interiorismo",
      categoryLabel: "Diseño Interior & Bienestar",
      date: "03 Nov 2026",
      readTime: "5 min de lectura",
      coverImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80",
      excerpt: "La biofilia es la afinidad innata del ser humano con los sistemas vivos. Descubre cómo la luz circadiana, las texturas fractales y los materiales no sintéticos reducen los niveles de cortisol.",
      author: {
        name: "Arq. Natalia Zuluaga",
        role: "Socia Fundadora & Directora Bioclimática",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
      },
      likes: 98,
      tags: ["Biofilia", "Salud Mental", "Interiorismo", "Neuroarquitectura"],
      content: `
        <p class="lead text-lg font-medium text-slate-700 dark:text-slate-300 mb-6">
          Pasamos más del 90% de nuestras vidas en espacios interiores cerrados. La neuroarquitectura ha demostrado que las superficies de plástico estéril, las luces fluorescentes blancas y la falta de contacto con elementos naturales provocan fatiga cognitiva crónica y estrés biológico.
        </p>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">El Poder de las Texturas Hápticas Naturales</h3>
        <p class="mb-4 text-slate-600 dark:text-slate-400">
          Tocar una barandilla de madera maciza aceitada, caminar descalzo sobre piedra caliza o contemplar los nudos imperfectos de un muro de arcilla estimula terminaciones nerviosas que envían señales de calma al sistema nervioso parasimpático. La perfección matemática y la frialdad sintética no son naturales para nuestra especie.
        </p>
      `,
      comments: []
    },
    {
      id: "rehabilitacion-vs-demolicion",
      title: "Rehabilitación vs. Demolición: La Huella de Carbono Que Evitamos al Reciclar Edificios",
      category: "teoria",
      categoryLabel: "Teoría & Patrimonio",
      date: "25 Oct 2026",
      readTime: "6 min de lectura",
      coverImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80",
      excerpt: "El edificio más ecológico del mundo es aquel que ya está construido. Por qué demoler para volver a levantar es un lujo ecológico que el planeta ya no puede permitirse.",
      author: {
        name: "Arq. Tomás Valenzuela",
        role: "Director de Innovación Estructural",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
      },
      likes: 85,
      tags: ["Patrimonio", "Economía Circular", "Rehabilitación", "Ciudad"],
      content: `
        <p class="lead text-lg font-medium text-slate-700 dark:text-slate-300 mb-6">
          Cuando demueles un edificio de hormigón de 50 años, estás desperdiciando todo el carbono incorporado que costó erigirlo y generando miles de toneladas de escombros que van a parar a vertederos ilegales.
        </p>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">La Cirugía Arquitectónica</h3>
        <p class="mb-4 text-slate-600 dark:text-slate-400">
          La rehabilitación contemporánea no congela el edificio como si fuera una pieza de museo intocable. Al contrario: introduce núcleos de luz, refuerza estructuras con fibras de carbono y dota de nueva tecnología a viejas naves para transformarlas en viviendas vibrantes, estudios creativos y centros comunitarios.
        </p>
      `,
      comments: []
    },
    {
      id: "guia-etapas-proyecto-arquitectura",
      title: "Guía para Clientes: Qué Ocurre Realmente en Cada Etapa de un Proyecto Arquitectónico",
      category: "teoria",
      categoryLabel: "Guía Práctica para Clientes",
      date: "14 Oct 2026",
      readTime: "8 min de lectura",
      coverImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
      excerpt: "De la primera servilleta con bocetos al día de entrega de llaves. Desmitificamos presupuestos, tiempos de trámite de licencias, planos de detalle y supervisión técnica de obra.",
      author: {
        name: "Arq. Natalia Zuluaga",
        role: "Socia Fundadora & Directora Bioclimática",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
      },
      likes: 134,
      tags: ["Guía", "Construcción", "Presupuesto", "Licencias"],
      content: `
        <p class="lead text-lg font-medium text-slate-700 dark:text-slate-300 mb-6">
          Construir una casa propia suele ser la mayor inversión financiera y emocional en la vida de una familia. Sin embargo, el proceso genera angustia cuando no existe un mapa de ruta transparente.
        </p>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-4">Las 4 Fases Clave de Nuestro Estudio</h3>
        <p class="mb-4 text-slate-600 dark:text-slate-400">
          <strong>1. Diagnóstico & Programa (Semanas 1-2):</strong> Entendemos cómo vive tu familia, el terreno, el presupuesto real y las limitaciones normativas.<br>
          <strong>2. Anteproyecto & Maqueta 3D (Semanas 3-6):</strong> Exploramos la volumetría, vistas, asoleamiento y recorridos espaciales en realidad virtual.<br>
          <strong>3. Proyecto Ejecutivo & Licencias (Semanas 7-14):</strong> Elaboramos planos estructurales, hidrosanitarios, eléctricos y tramitamos la licencia de construcción ante curaduría.<br>
          <strong>4. Dirección de Obra & Entrega:</strong> Supervisamos cada colado, encaje de carpintería y acabado hasta el día que te entregamos la llave.
        </p>
      `,
      comments: [
        {
          author: "Marcela Hoyos",
          date: "Hace 2 semanas",
          text: "¡Ojalá hubiera leído esto antes de construir mi primera casa con un contratista informal! El proyecto ejecutivo te ahorra millones en sobrecostos."
        }
      ]
    }
  ],

  team: [
    {
      name: "Arq. Natalia Zuluaga",
      role: "Socia Directora & Arquitectura Bioclimática",
      bio: "Máster en Arquitectura Sostenible por la Universidad Politécnica de Cataluña. Más de 15 años liderando proyectos de hábitat pasivo y tierra apisonada.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      social: { instagram: "#", linkedin: "#" }
    },
    {
      name: "Arq. Tomás Valenzuela",
      role: "Socio Director & Estructuras de Madera",
      bio: "Especialista en sistemas constructivos en CLT y prefabricación modular de alta precisión. Conferencista internacional en arquitectura regenerativa.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      social: { instagram: "#", linkedin: "#" }
    },
    {
      name: "Arq. Camila Henao",
      role: "Directora de Interiorismo & Materialidades",
      bio: "Enfocada en diseño sensorial, neuroarquitectura y curaduría de artesanías vivas y textiles orgánicos para espacios de hospitalidad de lujo.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      social: { instagram: "#", pinterest: "#" }
    },
    {
      name: "Ing. Julián Restrepo",
      role: "Director Técnico & Gerencia de Obra",
      bio: "Ingeniero civil con certificación LEED AP BD+C. Garantiza el estricto cumplimiento de cronogramas, presupuestos y control de calidad en obra.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
      social: { linkedin: "#" }
    }
  ],

  testimonials: [
    {
      quote: "Vértice no solo diseñó nuestra casa, entendió cómo queríamos vivir los próximos 30 años. La conexión entre los patios interiores y el bosque es sublime.",
      author: "Santiago & Mariana Cárdenas",
      company: "Propietarios de Casa Bruma",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      projectTag: "Casa Unifamiliar 480 m²"
    },
    {
      quote: "El rigor técnico en el presupuesto y el respeto reverencial por los materiales locales convirtieron al Hotel Umbral en el mayor referente de turismo sostenible del país.",
      author: "Felipe Echeverri",
      company: "Gerente General Umbral Hotels",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      projectTag: "Hotel Boutique 1.850 m²"
    },
    {
      quote: "Su capacidad para resolver estructuras complejas de madera con elegancia poética es asombrosa. El pabellón se construyó en tiempo récord sin retrasos.",
      author: "Lucía Vélez",
      company: "Café & Jardín Orquidiario",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      projectTag: "Pabellón Comercial 620 m²"
    }
  ],

  faqs: [
    {
      question: "¿Cómo se calculan los honorarios arquitectónicos en Vértice?",
      answer: "Nuestros honorarios se establecen de forma transparente según los metros cuadrados (m²) a intervenir y la complejidad tipológica. Trabajamos con tarifas fijas por hito entregable (diagnóstico, anteproyecto, proyecto ejecutivo y dirección de obra), sin porcentajes ambiguos sobre compras de materiales."
    },
    {
      question: "¿Diseñan proyectos fuera de Colombia o en zonas rurales remotas?",
      answer: "Sí. Más del 40% de nuestras obras se sitúan en entornos campestres, montañosos o costeros remotos (Boyacá, Santander, Chocó, Eje Cafetero, México y Costa Rica). Realizamos levantamientos con drones, estudios de asoleamiento digital y visitas presenciales programadas en fases críticas."
    },
    {
      question: "¿Qué significa exactamente que una vivienda sea 'bioclimática'?",
      answer: "Significa que la vivienda utiliza el sol, la sombra, la lluvia, el viento y la inercia térmica de los materiales del lugar para mantenerse fresca en climas cálidos o abrigada en climas fríos, reduciendo entre un 70% y un 100% el consumo eléctrico por aire acondicionado o calefacción artificial."
    },
    {
      question: "¿Ustedes mismos construyen la obra o contratan terceros?",
      answer: "Ofrecemos dos modalidades: 1) Proyecto Llave en Mano, donde nuestra área técnica ejecuta la construcción total con nuestro equipo de contratistas y artesanos certificados, o 2) Dirección Arquitectónica de Obra, donde supervisamos minuciosamente al constructor elegido por el cliente para asegurar fidelidad milimétrica a los planos."
    },
    {
      question: "¿Cuánto tiempo toma el proceso de diseño antes de iniciar la construcción?",
      answer: "Un proyecto residencial unifamiliar promedio toma entre 8 y 12 semanas para completar todas las ingenierías y planos de detalle. Paralelamente, los trámites de licencia de construcción ante curaduría o secretaría de planeación suelen tardar entre 4 y 8 semanas dependiendo del municipio."
    }
  ]
};
