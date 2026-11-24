// ==========================================================================
// VÉRTICE ARQUITECTURA & HÁBITAT SOSTENIBLE - APPLICATION CONTROLLER
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});

const App = {
  currentProjectCategory: 'all',
  currentBlogCategory: 'all',
  projectSearchTerm: '',
  blogSearchTerm: '',
  activeArticleId: null,

  init() {
    this.initTheme();
    this.renderStats();
    this.renderServices();
    this.renderProjects();
    this.renderBlog();
    this.renderTeam();
    this.renderTestimonials();
    this.renderFaqs();
    this.initArchitecturalCalculator();
    this.initEventListeners();
    this.initScrollWatchers();
    this.refreshIcons();
  },

  // ------------------------------------------------------------------------
  // THEME MANAGEMENT (Dark / Light Mode)
  // ------------------------------------------------------------------------
  initTheme() {
    const savedTheme = localStorage.getItem('vertice_theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    this.updateThemeButton();
  },

  toggleTheme() {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('vertice_theme', isDark ? 'dark' : 'light');
    this.updateThemeButton();
    this.showToast(isDark ? 'Modo Oscuro (Carbón & Madera) activado' : 'Modo Claro (Lino & Piedra) activado', 'info');
  },

  updateThemeButton() {
    const isDark = document.documentElement.classList.contains('dark');
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
      themeIcon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
      this.refreshIcons();
    }
  },

  // ------------------------------------------------------------------------
  // STATS & SERVICES RENDERING
  // ------------------------------------------------------------------------
  renderStats() {
    const container = document.getElementById('stats-grid');
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.company.stats.map(stat => `
      <div class="arch-card rounded-2xl p-6 text-center border border-stone-200/80 dark:border-stone-800/80">
        <div class="text-3xl sm:text-4xl lg:text-5xl font-black text-amber-700 dark:text-amber-500 font-display mb-1 tracking-tight">
          ${stat.value}
        </div>
        <div class="font-bold text-stone-800 dark:text-stone-100 text-sm mb-1 uppercase tracking-wider">
          ${stat.label}
        </div>
        <div class="text-xs text-stone-500 dark:text-stone-400">
          ${stat.description}
        </div>
      </div>
    `).join('');
  },

  renderServices() {
    const container = document.getElementById('services-grid');
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.services.map(srv => `
      <div itemprop="itemListElement" itemscope itemtype="https://schema.org/Service" class="arch-card rounded-3xl p-8 flex flex-col justify-between relative group hover:border-amber-600/60 transition-all duration-300">
        <div>
          <div class="flex items-center justify-between mb-6">
            <div class="w-14 h-14 rounded-2xl bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 flex items-center justify-center group-hover:scale-105 group-hover:bg-amber-700 group-hover:text-white transition-all duration-300">
              <i data-lucide="${srv.icon}" class="w-7 h-7"></i>
            </div>
            <span class="text-xs font-bold px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 tracking-wide uppercase">
              ${srv.badge}
            </span>
          </div>

          <h3 itemprop="name" class="text-2xl font-bold text-stone-900 dark:text-white mb-3 font-display">
            ${srv.title}
          </h3>
          <p itemprop="description" class="text-stone-600 dark:text-stone-400 text-sm mb-6 leading-relaxed">
            ${srv.shortDesc}
          </p>

          <ul class="space-y-2.5 mb-8 text-sm text-stone-600 dark:text-stone-300">
            ${srv.details.map(item => `
              <li class="flex items-center gap-2.5">
                <i data-lucide="check" class="w-4 h-4 text-emerald-600 flex-shrink-0"></i>
                <span>${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="pt-6 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
          <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
            <meta itemprop="price" content="${srv.ratePerM2}" />
            <meta itemprop="priceCurrency" content="USD" />
            <link itemprop="availability" href="https://schema.org/InStock" />
            <div class="text-[11px] uppercase tracking-wider text-stone-400">Honorarios Base</div>
            <div class="text-sm font-bold text-stone-900 dark:text-white">
              <span>${srv.priceStarting}</span>
            </div>
          </div>
          <button onclick="App.selectServiceForCalculator('${srv.id}')" class="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl bg-amber-50 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 hover:bg-amber-700 hover:text-white transition-colors flex items-center gap-1.5">
            <span>Calcular m²</span>
            <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    `).join('');
  },

  // ------------------------------------------------------------------------
  // PORTFOLIO / OBRAS ARQUITECTÓNICAS
  // ------------------------------------------------------------------------
  renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container) return;

    let filtered = PORTFOLIO_DATA.projects.filter(p => {
      const matchesCat = this.currentProjectCategory === 'all' || p.category === this.currentProjectCategory;
      const search = this.projectSearchTerm.toLowerCase();
      const matchesSearch = !search || 
        p.title.toLowerCase().includes(search) || 
        p.location.toLowerCase().includes(search) ||
        p.materials.toLowerCase().includes(search) ||
        p.summary.toLowerCase().includes(search);
      return matchesCat && matchesSearch;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center">
          <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-stone-100 dark:bg-stone-800 text-stone-400 flex items-center justify-center">
            <i data-lucide="compass" class="w-8 h-8"></i>
          </div>
          <h4 class="text-lg font-bold text-stone-700 dark:text-stone-300 mb-1">No se encontraron obras</h4>
          <p class="text-sm text-stone-500 dark:text-stone-400 mb-4">Prueba con otra tipología de proyecto o ubicación.</p>
          <button onclick="App.resetProjectFilters()" class="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl bg-amber-700 text-white">
            Ver todas las obras
          </button>
        </div>
      `;
      this.refreshIcons();
      return;
    }

    container.innerHTML = filtered.map(p => `
      <article itemprop="subjectOf" itemscope itemtype="https://schema.org/CreativeWork" class="arch-card rounded-3xl overflow-hidden flex flex-col group cursor-pointer" onclick="App.openProjectModal('${p.id}')">
        <div class="relative aspect-[16/11] overflow-hidden bg-stone-100 dark:bg-stone-800">
          <img itemprop="image" src="${p.coverImage}" alt="${p.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
            <span class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/95 text-stone-900 text-xs font-bold uppercase tracking-wider shadow-lg backdrop-blur">
              Ver Memoria Arquitectónica <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
            </span>
          </div>
          <div class="absolute top-4 left-4">
            <span class="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-stone-950/80 backdrop-blur text-white border border-white/10">
              ${p.categoryLabel}
            </span>
          </div>
          <div class="absolute top-4 right-4">
            <span class="px-2.5 py-1 rounded-md text-xs font-bold bg-white/90 dark:bg-stone-900/90 backdrop-blur text-stone-800 dark:text-stone-200">
              ${p.area}
            </span>
          </div>
        </div>

        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div itemprop="locationCreated" itemscope itemtype="https://schema.org/Place" class="text-xs font-bold text-amber-700 dark:text-amber-500 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
              <span itemprop="name">${p.location}</span> • <span>${p.year}</span>
            </div>
            <h3 itemprop="name" class="text-xl font-bold text-stone-900 dark:text-white mb-2 font-display group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
              ${p.title}
            </h3>
            <p itemprop="description" class="text-stone-600 dark:text-stone-400 text-sm line-clamp-2 mb-4 leading-relaxed">
              ${p.summary}
            </p>
          </div>

          <div>
            <!-- Highlight passive impact -->
            <div class="flex items-center gap-2 mb-4 p-2.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-800">
              <i data-lucide="leaf" class="w-4 h-4 text-emerald-600 flex-shrink-0"></i>
              <span class="text-xs font-medium text-stone-700 dark:text-stone-300">
                <strong>${p.impact[0].value}</strong>: ${p.impact[0].label}
              </span>
            </div>

            <div class="text-[11px] text-stone-500 dark:text-stone-400 truncate pt-2 border-t border-stone-100 dark:border-stone-800">
              <strong>Materiales:</strong> <span itemprop="material">${p.materials}</span>
            </div>
          </div>
        </div>
      </article>
    `).join('');

    this.refreshIcons();
  },

  setProjectCategory(category) {
    this.currentProjectCategory = category;
    document.querySelectorAll('.project-cat-btn').forEach(btn => {
      const active = btn.dataset.category === category;
      btn.className = `project-cat-btn px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
        active 
          ? 'bg-amber-700 text-white shadow-md shadow-amber-700/25' 
          : 'bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700'
      }`;
    });
    this.renderProjects();
  },

  resetProjectFilters() {
    this.currentProjectCategory = 'all';
    this.projectSearchTerm = '';
    const searchInput = document.getElementById('project-search-input');
    if (searchInput) searchInput.value = '';
    this.setProjectCategory('all');
  },

  openProjectModal(id) {
    const project = PORTFOLIO_DATA.projects.find(p => p.id === id);
    if (!project) return;

    const modal = document.getElementById('project-modal');
    const container = document.getElementById('project-modal-body');
    if (!modal || !container) return;

    container.innerHTML = `
      <!-- Modal Header Image -->
      <div class="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl mb-6">
        <img src="${project.coverImage}" alt="${project.title}" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
        <div class="absolute bottom-6 left-6 right-6">
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-700 text-white">
              ${project.categoryLabel}
            </span>
            <span class="px-2.5 py-1 rounded-md text-xs font-semibold bg-white/20 backdrop-blur text-white flex items-center gap-1">
              <i data-lucide="map-pin" class="w-3 h-3"></i> ${project.location}
            </span>
            <span class="px-2.5 py-1 rounded-md text-xs font-semibold bg-white/20 backdrop-blur text-white">
              Área: ${project.area}
            </span>
            <span class="px-2.5 py-1 rounded-md text-xs font-semibold bg-white/20 backdrop-blur text-white">
              Año: ${project.year}
            </span>
          </div>
          <h2 class="text-2xl sm:text-3xl font-black text-white font-display">
            ${project.title}
          </h2>
        </div>
      </div>

      <!-- Awards banner if present -->
      ${project.awards ? `
        <div class="p-3 mb-6 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 text-xs font-bold flex items-center gap-2">
          <i data-lucide="award" class="w-4 h-4 text-amber-600 flex-shrink-0"></i>
          <span>${project.awards}</span>
        </div>
      ` : ''}

      <!-- Impact Metrics Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
        ${project.impact.map(imp => `
          <div class="p-4 rounded-2xl bg-stone-100/80 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 text-center">
            <div class="text-2xl sm:text-3xl font-black text-amber-700 dark:text-amber-500 font-display mb-0.5">
              ${imp.value}
            </div>
            <div class="text-xs text-stone-600 dark:text-stone-300 font-medium">
              ${imp.label}
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Memoria de Diseño: Challenge & Solution -->
      <div class="space-y-6 mb-8 text-stone-700 dark:text-stone-300">
        <div>
          <h4 class="text-lg font-bold text-stone-900 dark:text-white mb-2 flex items-center gap-2">
            <i data-lucide="mountain" class="w-5 h-5 text-amber-700"></i>
            El Desafío del Emplazamiento & Clima
          </h4>
          <p class="text-sm leading-relaxed text-stone-600 dark:text-stone-300">
            ${project.challenge}
          </p>
        </div>

        <div>
          <h4 class="text-lg font-bold text-stone-900 dark:text-white mb-2 flex items-center gap-2">
            <i data-lucide="drafting-compass" class="w-5 h-5 text-emerald-600"></i>
            Respuesta Arquitectónica & Sistema Constructivo
          </h4>
          <p class="text-sm leading-relaxed text-stone-600 dark:text-stone-300">
            ${project.solution}
          </p>
        </div>
      </div>

      <!-- Material Palette -->
      <div class="p-4 rounded-2xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-800 mb-8">
        <h4 class="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">Paleta de Materiales Predominante</h4>
        <p class="text-xs font-semibold text-stone-800 dark:text-stone-200">${project.materials}</p>
      </div>

      <!-- Visual Gallery -->
      ${project.gallery && project.gallery.length > 0 ? `
        <div class="mb-8">
          <h4 class="text-lg font-bold text-stone-900 dark:text-white mb-3">Vistas de Obra & Planimetría</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${project.gallery.map(img => `
              <div class="rounded-xl overflow-hidden aspect-video bg-stone-100 dark:bg-stone-800">
                <img src="${img}" alt="Registro de obra" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Testimonial -->
      ${project.testimonial ? `
        <div class="p-6 rounded-2xl bg-amber-50/40 dark:bg-stone-800/50 border border-amber-200/60 dark:border-stone-800 mb-8">
          <i data-lucide="quote" class="w-7 h-7 text-amber-600/50 mb-2"></i>
          <p class="italic text-sm text-stone-700 dark:text-stone-300 mb-4 leading-relaxed">
            "${project.testimonial.quote}"
          </p>
          <div class="font-bold text-stone-900 dark:text-white text-sm">
            ${project.testimonial.author}
          </div>
          <div class="text-xs text-stone-500 dark:text-stone-400">
            ${project.testimonial.role}
          </div>
        </div>
      ` : ''}

      <div class="pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-3">
        <button onclick="App.closeProjectModal()" class="px-5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 text-sm font-semibold text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors">
          Cerrar
        </button>
        <button onclick="App.closeProjectModal(); document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })" class="px-6 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-sm font-bold uppercase tracking-wider shadow-lg shadow-amber-700/25 transition-colors flex items-center gap-2">
          <span>Consultar por un proyecto similar</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.refreshIcons();
  },

  closeProjectModal() {
    const modal = document.getElementById('project-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  },

  // ------------------------------------------------------------------------
  // BITÁCORA / BLOG DE ARQUITECTURA & TEORÍA
  // ------------------------------------------------------------------------
  renderBlog() {
    const container = document.getElementById('blog-grid');
    const heroContainer = document.getElementById('blog-hero-post');
    if (!container) return;

    let posts = PORTFOLIO_DATA.blogPosts.filter(post => {
      const matchesCat = this.currentBlogCategory === 'all' || post.category === this.currentBlogCategory;
      const search = this.blogSearchTerm.toLowerCase();
      const matchesSearch = !search || 
        post.title.toLowerCase().includes(search) || 
        post.excerpt.toLowerCase().includes(search) ||
        post.author.name.toLowerCase().includes(search) ||
        post.tags.some(t => t.toLowerCase().includes(search));
      return matchesCat && matchesSearch;
    });

    if (posts.length === 0) {
      if (heroContainer) heroContainer.innerHTML = '';
      container.innerHTML = `
        <div class="col-span-full py-16 text-center">
          <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-stone-100 dark:bg-stone-800 text-stone-400 flex items-center justify-center">
            <i data-lucide="book-x" class="w-8 h-8"></i>
          </div>
          <h4 class="text-lg font-bold text-stone-700 dark:text-stone-300 mb-1">No se encontraron artículos en la bitácora</h4>
          <p class="text-sm text-stone-500 dark:text-stone-400 mb-4">Prueba con otra palabra clave o categoría temática.</p>
          <button onclick="App.resetBlogFilters()" class="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl bg-amber-700 text-white">
            Ver todas las entradas
          </button>
        </div>
      `;
      this.refreshIcons();
      return;
    }

    // Hero post rendering
    if (heroContainer) {
      if (this.currentBlogCategory === 'all' && !this.blogSearchTerm) {
        const hero = posts[0];
        heroContainer.innerHTML = `
          <div itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting" class="arch-card rounded-3xl overflow-hidden mb-12 border border-amber-600/30 hover:border-amber-600/60 transition-all duration-300 cursor-pointer" onclick="App.openArticleModal('${hero.id}')">
            <div class="grid grid-cols-1 lg:grid-cols-12">
              <div class="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img itemprop="image" src="${hero.coverImage}" alt="${hero.title}" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <div class="absolute top-4 left-4">
                  <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-700 text-white shadow-lg flex items-center gap-1.5">
                    <i data-lucide="bookmark" class="w-3.5 h-3.5 fill-white"></i> Ensayo Destacado
                  </span>
                </div>
              </div>
              <div class="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-3 text-xs font-semibold text-stone-500 dark:text-stone-400 mb-3">
                    <span class="text-amber-700 dark:text-amber-500 uppercase tracking-wider">${hero.categoryLabel}</span>
                    <span>•</span>
                    <span>${hero.readTime}</span>
                    <span>•</span>
                    <time itemprop="datePublished" datetime="2026-11-19">${hero.date}</time>
                  </div>
                  <h3 itemprop="headline" class="text-2xl sm:text-3xl font-black text-stone-900 dark:text-white mb-4 font-display leading-tight hover:text-amber-700 dark:hover:text-amber-500 transition-colors">
                    ${hero.title}
                  </h3>
                  <p itemprop="description" class="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    ${hero.excerpt}
                  </p>
                </div>

                <div class="pt-6 border-t border-stone-200 dark:border-stone-800 flex items-center justify-between">
                  <div itemprop="author" itemscope itemtype="https://schema.org/Person" class="flex items-center gap-3">
                    <img itemprop="image" src="${hero.author.avatar}" alt="${hero.author.name}" class="w-10 h-10 rounded-full object-cover border-2 border-amber-700" />
                    <div>
                      <div itemprop="name" class="text-sm font-bold text-stone-900 dark:text-white">${hero.author.name}</div>
                      <div itemprop="jobTitle" class="text-xs text-stone-500 dark:text-stone-400">${hero.author.role}</div>
                    </div>
                  </div>
                  <div class="flex items-center gap-1 text-stone-500 text-xs font-bold">
                    <i data-lucide="heart" class="w-4 h-4 text-rose-500 fill-rose-500"></i>
                    <span>${hero.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
        heroContainer.classList.remove('hidden');
        posts = posts.slice(1);
      } else {
        heroContainer.innerHTML = '';
        heroContainer.classList.add('hidden');
      }
    }

    container.innerHTML = posts.map(post => `
      <article itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting" class="arch-card rounded-3xl overflow-hidden flex flex-col group cursor-pointer" onclick="App.openArticleModal('${post.id}')">
        <div class="relative aspect-[16/10] overflow-hidden bg-stone-100 dark:bg-stone-800">
          <img itemprop="image" src="${post.coverImage}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
          <div class="absolute top-4 left-4">
            <span class="px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-stone-950/80 backdrop-blur text-white border border-white/10">
              ${post.categoryLabel}
            </span>
          </div>
          <div class="absolute bottom-4 right-4">
            <span class="px-2.5 py-1 rounded-md text-xs font-bold bg-white/90 dark:bg-stone-900/90 backdrop-blur text-stone-800 dark:text-stone-200">
              ${post.readTime}
            </span>
          </div>
        </div>

        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <div class="text-xs text-stone-400 mb-2">
              <time itemprop="datePublished" datetime="2026-11-10">${post.date}</time>
            </div>
            <h3 itemprop="headline" class="text-xl font-bold text-stone-900 dark:text-white mb-3 font-display group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors leading-snug">
              ${post.title}
            </h3>
            <p itemprop="description" class="text-stone-600 dark:text-stone-400 text-sm line-clamp-2 mb-6 leading-relaxed">
              ${post.excerpt}
            </p>
          </div>

          <div class="pt-4 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between">
            <div itemprop="author" itemscope itemtype="https://schema.org/Person" class="flex items-center gap-2.5">
              <img itemprop="image" src="${post.author.avatar}" alt="${post.author.name}" class="w-8 h-8 rounded-full object-cover border border-amber-600" />
              <span itemprop="name" class="text-xs font-bold text-stone-800 dark:text-stone-200">${post.author.name}</span>
            </div>
            <div class="flex items-center gap-1.5 text-xs text-stone-500 font-bold">
              <i data-lucide="heart" class="w-3.5 h-3.5 text-rose-500"></i>
              <span>${post.likes}</span>
            </div>
          </div>
        </div>
      </article>
    `).join('');

    this.refreshIcons();
  },

  setBlogCategory(category) {
    this.currentBlogCategory = category;
    document.querySelectorAll('.blog-cat-btn').forEach(btn => {
      const active = btn.dataset.category === category;
      btn.className = `blog-cat-btn px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 ${
        active 
          ? 'bg-amber-700 text-white shadow-md shadow-amber-700/25' 
          : 'bg-white dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-700'
      }`;
    });
    this.renderBlog();
  },

  resetBlogFilters() {
    this.currentBlogCategory = 'all';
    this.blogSearchTerm = '';
    const searchInput = document.getElementById('blog-search-input');
    if (searchInput) searchInput.value = '';
    this.setBlogCategory('all');
  },

  openArticleModal(id) {
    const post = PORTFOLIO_DATA.blogPosts.find(p => p.id === id);
    if (!post) return;

    this.activeArticleId = id;
    const modal = document.getElementById('article-modal');
    const container = document.getElementById('article-modal-body');
    if (!modal || !container) return;

    const storedLikes = localStorage.getItem(`vertice_post_likes_${id}`);
    const likesCount = storedLikes ? parseInt(storedLikes, 10) : post.likes;
    const commentsList = post.comments || [];

    container.innerHTML = `
      <!-- Cover Header -->
      <div class="relative h-64 sm:h-96 w-full overflow-hidden rounded-2xl mb-8">
        <img src="${post.coverImage}" alt="${post.title}" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent"></div>
        <div class="absolute bottom-6 left-6 right-6">
          <div class="flex flex-wrap items-center gap-2 mb-3">
            <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-700 text-white">
              ${post.categoryLabel}
            </span>
            <span class="px-2.5 py-1 rounded-md text-xs font-semibold bg-white/20 backdrop-blur text-white">
              ${post.readTime}
            </span>
            <span class="px-2.5 py-1 rounded-md text-xs font-semibold bg-white/20 backdrop-blur text-white">
              ${post.date}
            </span>
          </div>
          <h1 class="text-2xl sm:text-4xl font-black text-white font-display leading-tight">
            ${post.title}
          </h1>
        </div>
      </div>

      <!-- Author Bar & Actions -->
      <div class="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-stone-100/70 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-800 mb-8">
        <div class="flex items-center gap-3">
          <img src="${post.author.avatar}" alt="${post.author.name}" class="w-12 h-12 rounded-full object-cover border-2 border-amber-700" />
          <div>
            <div class="text-sm font-bold text-stone-900 dark:text-white">${post.author.name}</div>
            <div class="text-xs text-stone-500 dark:text-stone-400">${post.author.role}</div>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <!-- Like Button -->
          <button id="like-btn-${post.id}" onclick="App.likeArticle('${post.id}')" class="px-4 py-2 rounded-xl bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-900/50 text-xs font-bold flex items-center gap-2 transition-all">
            <i data-lucide="heart" class="w-4 h-4 fill-rose-600 text-rose-600"></i>
            <span id="likes-count-${post.id}">${likesCount}</span> Me gusta
          </button>

          <!-- Share button -->
          <button onclick="App.shareArticle('${post.title}')" class="px-4 py-2 rounded-xl border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 text-xs font-semibold flex items-center gap-2 transition-all">
            <i data-lucide="share-2" class="w-4 h-4"></i>
            <span>Compartir</span>
          </button>
        </div>
      </div>

      <!-- Article Rich Content -->
      <div class="prose-article text-stone-700 dark:text-stone-300 mb-10 leading-relaxed text-base">
        ${post.content}
      </div>

      <!-- Article Tags -->
      <div class="flex flex-wrap gap-2 mb-10 pt-6 border-t border-stone-200 dark:border-stone-800">
        <span class="text-xs font-bold uppercase tracking-wider text-stone-400 self-center mr-2">Temas:</span>
        ${post.tags.map(t => `
          <span class="px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300">
            #${t}
          </span>
        `).join('')}
      </div>

      <!-- Interactive Comments Section -->
      <div class="pt-8 border-t border-stone-200 dark:border-stone-800">
        <h3 class="text-xl font-bold text-stone-900 dark:text-white mb-6 font-display flex items-center gap-2">
          <i data-lucide="message-square" class="w-5 h-5 text-amber-700"></i>
          Debate & Comentarios (<span id="comments-count">${commentsList.length}</span>)
        </h3>

        <!-- Comment Form -->
        <form onsubmit="App.handleCommentSubmit(event, '${post.id}')" class="p-6 rounded-2xl bg-stone-100/70 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-800 mb-8 space-y-4">
          <h4 class="text-sm font-bold text-stone-800 dark:text-stone-200">Deja tu opinión o consulta técnica</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-bold text-stone-500 mb-1 uppercase tracking-wider">Tu Nombre</label>
              <input type="text" id="comment-author" required placeholder="Ej. Arq. Daniel Morales" class="w-full px-3.5 py-2 text-sm rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-600" />
            </div>
            <div>
              <label class="block text-xs font-bold text-stone-500 mb-1 uppercase tracking-wider">Tu Correo (privado)</label>
              <input type="email" id="comment-email" placeholder="correo@estudio.com" class="w-full px-3.5 py-2 text-sm rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-600" />
            </div>
          </div>
          <div>
            <label class="block text-xs font-bold text-stone-500 mb-1 uppercase tracking-wider">Comentario o Pregunta</label>
            <textarea id="comment-text" required rows="3" placeholder="Comparte tu experiencia con este material o enfoque constructivo..." class="w-full px-3.5 py-2 text-sm rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-900 text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-600"></textarea>
          </div>
          <div class="flex justify-end">
            <button type="submit" class="px-5 py-2 rounded-xl bg-amber-700 hover:bg-amber-800 text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow">
              <span>Publicar Aporte</span>
              <i data-lucide="send" class="w-3.5 h-3.5"></i>
            </button>
          </div>
        </form>

        <!-- Comments Feed -->
        <div id="comments-feed" class="space-y-4">
          ${commentsList.length === 0 ? `
            <p class="text-sm text-stone-400 italic">No hay comentarios aún en esta entrada. ¡Inicia la conversación!</p>
          ` : commentsList.map(c => `
            <div class="p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800">
              <div class="flex items-center justify-between mb-2">
                <span class="font-bold text-sm text-stone-900 dark:text-white">${c.author}</span>
                <span class="text-xs text-stone-400">${c.date}</span>
              </div>
              <p class="text-sm text-stone-600 dark:text-stone-300 leading-relaxed">${c.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    this.refreshIcons();
  },

  closeArticleModal() {
    const modal = document.getElementById('article-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      this.activeArticleId = null;
    }
  },

  likeArticle(id) {
    const post = PORTFOLIO_DATA.blogPosts.find(p => p.id === id);
    if (!post) return;

    const countElem = document.getElementById(`likes-count-${id}`);
    let current = parseInt(countElem.innerText, 10);
    current += 1;
    countElem.innerText = current;

    post.likes = current;
    localStorage.setItem(`vertice_post_likes_${id}`, current);

    if (typeof confetti === 'function') {
      confetti({
        particleCount: 45,
        spread: 60,
        origin: { y: 0.7 }
      });
    }

    this.showToast('¡Aporte apreciado! Has dejado tu huella en la bitácora.', 'success');
  },

  shareArticle(title) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      this.showToast('¡Enlace de la bitácora copiado al portapapeles!', 'success');
    } else {
      this.showToast(`Compartiendo: ${title}`, 'info');
    }
  },

  handleCommentSubmit(e, postId) {
    e.preventDefault();
    const nameInput = document.getElementById('comment-author');
    const textInput = document.getElementById('comment-text');
    if (!nameInput || !textInput) return;

    const newComment = {
      author: nameInput.value.trim(),
      date: 'Hace un momento',
      text: textInput.value.trim()
    };

    const post = PORTFOLIO_DATA.blogPosts.find(p => p.id === postId);
    if (post) {
      if (!post.comments) post.comments = [];
      post.comments.unshift(newComment);
    }

    const feed = document.getElementById('comments-feed');
    const countElem = document.getElementById('comments-count');
    if (feed) {
      const commentCard = document.createElement('div');
      commentCard.className = 'p-4 rounded-xl bg-white dark:bg-stone-900 border border-amber-600/50 shadow-md';
      commentCard.innerHTML = `
        <div class="flex items-center justify-between mb-2">
          <span class="font-bold text-sm text-amber-700 dark:text-amber-500">${newComment.author} (Nuevo)</span>
          <span class="text-xs text-stone-400">${newComment.date}</span>
        </div>
        <p class="text-sm text-stone-600 dark:text-stone-300">${newComment.text}</p>
      `;
      feed.prepend(commentCard);
    }

    if (countElem) {
      countElem.innerText = parseInt(countElem.innerText || '0', 10) + 1;
    }

    nameInput.value = '';
    textInput.value = '';
    this.showToast('¡Comentario publicado exitosamente en la bitácora!', 'success');
  },

  // ------------------------------------------------------------------------
  // CALCULADORA DE METROS CUADRADOS & ESTIMADOR DE OBRA
  // ------------------------------------------------------------------------
  initArchitecturalCalculator() {
    const inputs = document.querySelectorAll('.arch-calc-trigger');
    inputs.forEach(input => {
      input.addEventListener('input', () => this.updateArchitecturalCalculator());
      input.addEventListener('change', () => this.updateArchitecturalCalculator());
    });
    this.updateArchitecturalCalculator();
  },

  selectServiceForCalculator(serviceId) {
    const radio = document.querySelector(`input[name="calc_typology"][value="${serviceId}"]`);
    if (radio) {
      radio.checked = true;
      this.updateArchitecturalCalculator();
    }
    const calcSection = document.getElementById('cotizador');
    if (calcSection) {
      calcSection.scrollIntoView({ behavior: 'smooth' });
    }
  },

  updateArchitecturalCalculator() {
    const typology = document.querySelector('input[name="calc_typology"]:checked')?.value || 'residencial';
    const standard = document.querySelector('input[name="calc_standard"]:checked')?.value || 'premium';
    const areaSlider = document.getElementById('calc-area-slider');
    const area = areaSlider ? parseInt(areaSlider.value, 10) : 250;

    // Update area label display
    const areaDisplay = document.getElementById('calc-area-val');
    if (areaDisplay) {
      areaDisplay.innerText = `${area} m²`;
    }

    // Base cost per m² (design + construction estimation in USD)
    const baseRates = {
      'residencial': 950,
      'interiorismo': 480,
      'rehabilitacion': 820,
      'paisajismo': 280
    };

    const standardMultipliers = {
      'confort': 1.0,
      'premium': 1.35,
      'passivhaus': 1.65
    };

    let costPerM2 = (baseRates[typology] || 900) * (standardMultipliers[standard] || 1.2);
    let totalEstimate = costPerM2 * area;

    // Check optional features
    const addons = document.querySelectorAll('input[name="calc_addon"]:checked');
    addons.forEach(addon => {
      totalEstimate += parseInt(addon.value, 10);
    });

    const minEst = Math.round(totalEstimate * 0.92);
    const maxEst = Math.round(totalEstimate * 1.10);

    const priceResult = document.getElementById('calc-price-result');
    if (priceResult) {
      priceResult.innerText = `$${minEst.toLocaleString()} - $${maxEst.toLocaleString()} USD`;
    }

    // Time estimate
    const timeResult = document.getElementById('calc-time-result');
    if (timeResult) {
      let months = '6 a 9 meses';
      if (area < 150) months = '4 a 6 meses';
      else if (area > 500) months = '10 a 14 meses';
      timeResult.innerText = months;
    }

    // Carbon reduction metric
    const carbonResult = document.getElementById('calc-carbon-result');
    if (carbonResult) {
      const co2Tons = Math.round(area * 0.28);
      carbonResult.innerText = `~${co2Tons} Toneladas de CO₂`;
    }
  },

  applyCalculatorToContact() {
    const typology = document.querySelector('input[name="calc_typology"]:checked')?.value || 'residencial';
    const area = document.getElementById('calc-area-slider')?.value || '250';
    const price = document.getElementById('calc-price-result')?.innerText || '';

    const typologySelect = document.getElementById('contact-typology');
    if (typologySelect) {
      typologySelect.value = typology;
    }

    const messageInput = document.getElementById('contact-message');
    if (messageInput) {
      messageInput.value = `Hola equipo de Vértice, he utilizado su estimador para un proyecto de ${area} m² (${price}). Me gustaría coordinar una visita preliminar o reunión técnica con un arquitecto.`;
    }

    document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' });
    this.showToast('¡Metros cuadrados y tipología aplicados al formulario!', 'info');
  },

  // ------------------------------------------------------------------------
  // TEAM, TESTIMONIALS & FAQS
  // ------------------------------------------------------------------------
  renderTeam() {
    const container = document.getElementById('team-grid');
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.team.map(member => `
      <div itemprop="employee" itemscope itemtype="https://schema.org/Person" class="arch-card rounded-3xl p-6 text-center group">
        <div class="relative w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 border-amber-600/30 group-hover:border-amber-600 transition-colors">
          <img itemprop="image" src="${member.image}" alt="${member.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" />
        </div>
        <h4 itemprop="name" class="text-lg font-bold text-stone-900 dark:text-white font-display mb-1">${member.name}</h4>
        <div itemprop="jobTitle" class="text-xs font-bold text-amber-700 dark:text-amber-500 uppercase tracking-wider mb-3">${member.role}</div>
        <p itemprop="description" class="text-xs text-stone-600 dark:text-stone-400 leading-relaxed mb-4">${member.bio}</p>
        <div class="flex items-center justify-center gap-3 text-stone-400">
          <a href="#" class="hover:text-amber-700 transition-colors" title="Instagram"><i data-lucide="instagram" class="w-4 h-4"></i></a>
          <a href="#" class="hover:text-amber-700 transition-colors" title="LinkedIn"><i data-lucide="linkedin" class="w-4 h-4"></i></a>
        </div>
      </div>
    `).join('');
  },

  renderTestimonials() {
    const container = document.getElementById('testimonials-grid');
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.testimonials.map(t => `
      <div itemprop="review" itemscope itemtype="https://schema.org/Review" class="arch-card rounded-3xl p-8 flex flex-col justify-between">
        <div>
          <div itemprop="reviewRating" itemscope itemtype="https://schema.org/Rating" class="flex items-center gap-1 text-amber-500 mb-4">
            <meta itemprop="ratingValue" content="${t.rating}" />
            <meta itemprop="bestRating" content="5" />
            <meta itemprop="worstRating" content="1" />
            ${Array(t.rating).fill('<i data-lucide="star" class="w-4 h-4 fill-amber-500"></i>').join('')}
          </div>
          <p itemprop="reviewBody" class="text-sm text-stone-700 dark:text-stone-300 italic mb-6 leading-relaxed">
            "${t.quote}"
          </p>
        </div>
        <div class="flex items-center gap-3 pt-4 border-t border-stone-100 dark:border-stone-800">
          <img src="${t.avatar}" alt="${t.author}" class="w-11 h-11 rounded-full object-cover" />
          <div itemprop="author" itemscope itemtype="https://schema.org/Person">
            <div itemprop="name" class="font-bold text-sm text-stone-900 dark:text-white">${t.author}</div>
            <div class="text-xs text-stone-500 dark:text-stone-400">${t.company}</div>
          </div>
        </div>
      </div>
    `).join('');
  },

  renderFaqs() {
    const container = document.getElementById('faqs-container');
    if (!container) return;

    container.innerHTML = PORTFOLIO_DATA.faqs.map((faq, index) => `
      <div itemprop="mainEntity" itemscope itemtype="https://schema.org/Question" class="rounded-2xl border border-stone-200 dark:border-stone-800 bg-white/80 dark:bg-stone-900/80 overflow-hidden">
        <button onclick="App.toggleFaq(${index})" class="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-display font-bold text-stone-900 dark:text-white hover:text-amber-700 dark:hover:text-amber-500 transition-colors">
          <span itemprop="name">${faq.question}</span>
          <i data-lucide="chevron-down" id="faq-icon-${index}" class="w-5 h-5 text-stone-400 transform transition-transform duration-300"></i>
        </button>
        <div id="faq-content-${index}" itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer" class="hidden px-6 pb-5 text-sm text-stone-600 dark:text-stone-300 leading-relaxed border-t border-stone-100 dark:border-stone-800/60 pt-3">
          <div itemprop="text">${faq.answer}</div>
        </div>
      </div>
    `).join('');
  },

  toggleFaq(index) {
    const content = document.getElementById(`faq-content-${index}`);
    const icon = document.getElementById(`faq-icon-${index}`);
    if (!content) return;

    const isHidden = content.classList.contains('hidden');
    content.classList.toggle('hidden');
    if (icon) {
      icon.style.transform = isHidden ? 'rotate(180deg)' : 'rotate(0deg)';
    }
  },

  // ------------------------------------------------------------------------
  // SPOTLIGHT GLOBAL SEARCH (Ctrl+K or Header Button)
  // ------------------------------------------------------------------------
  openSpotlight() {
    const modal = document.getElementById('spotlight-modal');
    const input = document.getElementById('spotlight-input');
    if (!modal) return;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (input) {
      input.value = '';
      setTimeout(() => input.focus(), 100);
      this.handleSpotlightSearch('');
    }
  },

  closeSpotlight() {
    const modal = document.getElementById('spotlight-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  },

  handleSpotlightSearch(query) {
    const resultsContainer = document.getElementById('spotlight-results');
    if (!resultsContainer) return;

    const q = query.toLowerCase().trim();

    if (!q) {
      resultsContainer.innerHTML = `
        <div class="p-6 text-center text-xs text-stone-400">
          Escribe para buscar obras arquitectónicas, materiales o ensayos de la bitácora...
        </div>
      `;
      return;
    }

    const matchedProjects = PORTFOLIO_DATA.projects.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.location.toLowerCase().includes(q) ||
      p.materials.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q)
    );

    const matchedPosts = PORTFOLIO_DATA.blogPosts.filter(b => 
      b.title.toLowerCase().includes(q) || 
      b.categoryLabel.toLowerCase().includes(q) ||
      b.author.name.toLowerCase().includes(q)
    );

    if (matchedProjects.length === 0 && matchedPosts.length === 0) {
      resultsContainer.innerHTML = `
        <div class="p-8 text-center text-sm text-stone-500">
          No se encontraron resultados para "<strong>${query}</strong>"
        </div>
      `;
      return;
    }

    let html = '';

    if (matchedProjects.length > 0) {
      html += `
        <div class="px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-stone-400 bg-stone-50 dark:bg-stone-900/60">
          Obras Arquitectónicas (${matchedProjects.length})
        </div>
      `;
      html += matchedProjects.map(p => `
        <div onclick="App.closeSpotlight(); App.openProjectModal('${p.id}')" class="p-4 hover:bg-amber-50/60 dark:hover:bg-stone-800/80 cursor-pointer flex items-center gap-3 transition-colors">
          <img src="${p.coverImage}" class="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
          <div class="flex-1 min-w-0">
            <div class="text-xs font-bold text-amber-700 dark:text-amber-500">${p.categoryLabel} • ${p.area}</div>
            <div class="font-bold text-sm text-stone-900 dark:text-white truncate">${p.title}</div>
            <div class="text-xs text-stone-500 truncate">${p.location}</div>
          </div>
          <i data-lucide="arrow-right" class="w-4 h-4 text-stone-400"></i>
        </div>
      `).join('');
    }

    if (matchedPosts.length > 0) {
      html += `
        <div class="px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-stone-400 bg-stone-50 dark:bg-stone-900/60">
          Ensayos de la Bitácora (${matchedPosts.length})
        </div>
      `;
      html += matchedPosts.map(b => `
        <div onclick="App.closeSpotlight(); App.openArticleModal('${b.id}')" class="p-4 hover:bg-amber-50/60 dark:hover:bg-stone-800/80 cursor-pointer flex items-center gap-3 transition-colors">
          <img src="${b.coverImage}" class="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
          <div class="flex-1 min-w-0">
            <div class="text-xs font-bold text-amber-700 dark:text-amber-500">${b.categoryLabel} • ${b.readTime}</div>
            <div class="font-bold text-sm text-stone-900 dark:text-white truncate">${b.title}</div>
            <div class="text-xs text-stone-500 truncate">Por ${b.author.name}</div>
          </div>
          <i data-lucide="arrow-right" class="w-4 h-4 text-stone-400"></i>
        </div>
      `).join('');
    }

    resultsContainer.innerHTML = html;
    this.refreshIcons();
  },

  // ------------------------------------------------------------------------
  // EVENT LISTENERS & SCROLL
  // ------------------------------------------------------------------------
  initEventListeners() {
    const projectSearch = document.getElementById('project-search-input');
    if (projectSearch) {
      projectSearch.addEventListener('input', (e) => {
        this.projectSearchTerm = e.target.value;
        this.renderProjects();
      });
    }

    const blogSearch = document.getElementById('blog-search-input');
    if (blogSearch) {
      blogSearch.addEventListener('input', (e) => {
        this.blogSearchTerm = e.target.value;
        this.renderBlog();
      });
    }

    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        this.openSpotlight();
      }
      if (e.key === 'Escape') {
        this.closeProjectModal();
        this.closeArticleModal();
        this.closeSpotlight();
      }
    });

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => this.handleContactSubmit(e));
    }

    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = document.getElementById('newsletter-email');
        if (emailInput && emailInput.value) {
          if (typeof confetti === 'function') {
            confetti({ particleCount: 50, spread: 70, origin: { y: 0.8 } });
          }
          this.showToast('¡Te has suscrito al Cuaderno de Obra de Vértice!', 'success');
          emailInput.value = '';
        }
      });
    }
  },

  handleContactSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('contact-submit-btn');
    const originalText = btn.innerHTML;

    btn.disabled = true;
    btn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Registrando consulta...`;
    this.refreshIcons();

    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = originalText;
      this.refreshIcons();

      if (typeof confetti === 'function') {
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.6 }
        });
      }

      this.showToast('¡Consulta registrada! Un arquitecto director te responderá en breve.', 'success');
      e.target.reset();
    }, 1200);
  },

  initScrollWatchers() {
    const backToTopBtn = document.getElementById('back-to-top');
    const header = document.getElementById('main-header');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      if (backToTopBtn) {
        if (scrollY > 500) {
          backToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
          backToTopBtn.classList.add('opacity-100', 'pointer-events-auto');
        } else {
          backToTopBtn.classList.add('opacity-0', 'pointer-events-none');
          backToTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
        }
      }

      if (header) {
        if (scrollY > 50) {
          header.classList.add('shadow-md', 'bg-white/95', 'dark:bg-stone-950/95');
          header.classList.remove('bg-transparent');
        } else {
          header.classList.remove('shadow-md');
        }
      }
    });
  },

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
      menu.classList.toggle('hidden');
    }
  },

  showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');
    if (!toast || !toastMessage) return;

    toastMessage.innerText = message;

    const iconMap = {
      'success': 'check-circle-2',
      'error': 'alert-circle',
      'info': 'info'
    };

    if (toastIcon) {
      toastIcon.setAttribute('data-lucide', iconMap[type] || 'info');
    }

    toast.classList.add('show');
    this.refreshIcons();

    if (this._toastTimeout) clearTimeout(this._toastTimeout);
    this._toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3800);
  },

  refreshIcons() {
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }
};
