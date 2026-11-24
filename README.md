# VÉRTICE — Arquitectura Bioclimática & Hábitat Sostenible

**VÉRTICE** es un proyecto web moderno y completo que representa el **portafolio profesional** y la **bitácora de diseño (blog)** de un estudio de arquitectura bioclimática, interiorismo sensorial y construcción regenerativa en Medellín, Colombia.

---

## 🌐 Web Semántica & Schema.org con Microdata

El proyecto implementa el estándar oficial de **Microdata** de [Schema.org](https://schema.org/) para enriquecer el árbol DOM y maximizar el posicionamiento en motores de búsqueda (**SEO Semántico y Rich Snippets**), con **1 tipo principal contenedor** (`ProfessionalService`) que engloba un ecosistema completo de **20 tipos semánticos** con **0 errores y 0 advertencias**:

### 1. Tipo Principal Contenedor (1)
* [`https://schema.org/ProfessionalService`](https://schema.org/ProfessionalService): Aplicado en `<body itemscope itemtype="https://schema.org/ProfessionalService">`. Representa a la firma arquitectónica como entidad de servicios profesionales globales y locales.

### 2. Ecosistema de 19 Tipos Semánticos Contenidos

#### Identidad y Ubicación Corporativa
1. [`https://schema.org/Brand`](https://schema.org/Brand): Identidad de marca (`name: VÉRTICE`, `slogan`).
2. [`https://schema.org/ContactPoint`](https://schema.org/ContactPoint): Punto de contacto directo y atención técnica multilingüe.
3. [`https://schema.org/PostalAddress`](https://schema.org/PostalAddress): Dirección física de la sede en El Poblado, Medellín (`streetAddress`, `addressLocality`, `addressRegion`, `addressCountry`).
4. [`https://schema.org/GeoCoordinates`](https://schema.org/GeoCoordinates): Coordenadas decimales numéricas puras de latitud (`6.2087`) y longitud (`-75.5684`) para indexación cartográfica y búsquedas locales.
5. [`https://schema.org/OpeningHoursSpecification`](https://schema.org/OpeningHoursSpecification): Días hábiles referenciados mediante URIs canónicas de Schema.org (`Monday` a `Friday`) y horario de atención (`08:30` a `18:00`).

#### Servicios Comerciales & Ofertas
6. [`https://schema.org/OfferCatalog`](https://schema.org/OfferCatalog): Catálogo estructurado de líneas de intervención arquitectónica.
7. [`https://schema.org/Service`](https://schema.org/Service): Servicios individuales de arquitectura residencial, interiorismo, rehabilitación patrimonial y paisajismo biofílico.
8. [`https://schema.org/Offer`](https://schema.org/Offer): Precios unitarios base en USD por metro cuadrado con disponibilidad en stock.

#### Portafolio de Obras Arquitectónicas
9. [`https://schema.org/CreativeWork`](https://schema.org/CreativeWork): Obras y proyectos arquitectónicos singulares (Casa Bruma, Hotel Umbral, Pabellón Botánico, Loft Textil, Casa del Acantilado, Restaurante Origen).
10. [`https://schema.org/Place`](https://schema.org/Place): Emplazamiento geográfico de cada obra (Villa de Leyva, Barichara, Rionegro, Guatapé, Cartagena).

#### Equipo Humano & Talento
11. [`https://schema.org/Person`](https://schema.org/Person): Perfil de los arquitectos directores del estudio (`name`, `jobTitle`, `image`, `description`) y autores de artículos y reseñas.

#### Reputación, Auditoría & Testimonios
12. [`https://schema.org/AggregateRating`](https://schema.org/AggregateRating): Puntuación media de satisfacción (`5.0` / `5`) basada en 92 valoraciones auditadas, activando estrellas enriquecidas en Google.
13. [`https://schema.org/Review`](https://schema.org/Review): Reseñas testimoniales de clientes y directores de proyectos con cuerpo de texto (`reviewBody`).
14. [`https://schema.org/Rating`](https://schema.org/Rating): Puntuación cuantitativa de cada reseña individual (`ratingValue: 5`, `bestRating: 5`).

#### Bitácora Técnica / Blog de Pensamiento
15. [`https://schema.org/Blog`](https://schema.org/Blog): Revista digital técnica y ensayos arquitectónicos del estudio.
16. [`https://schema.org/BlogPosting`](https://schema.org/BlogPosting): Artículos y ensayos sobre CLT, tapia pisada, neuroarquitectura y fitodepuración con fechas de publicación e imágenes.

#### Centro de Conocimiento & Preguntas Frecuentes
17. [`https://schema.org/FAQPage`](https://schema.org/FAQPage): Página de preguntas frecuentes para activación de desplegables en los resultados de búsqueda de Google.
18. [`https://schema.org/Question`](https://schema.org/Question): Consultas frecuentes sobre honorarios, bioclimática, permisos y materiales.
19. [`https://schema.org/Answer`](https://schema.org/Answer): Respuestas técnicas detalladas dadas por el estudio.

---

> **Total de Types:** **20 tipos de Schema.org** integrados en un único árbol semántico bajo `ProfessionalService`.  
> **Resultado en `validator.schema.org`:** **0 ERRORES** y **0 ADVERTENCIAS**.
# VERTICE
