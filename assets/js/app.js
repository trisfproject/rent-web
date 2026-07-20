/**
 * Sewa AC Cikarang - Client Render & Scroll Logic
 * Budgets: HTML < 20KB, CSS < 25KB, JS < 10KB
 */

document.addEventListener('DOMContentLoaded', () => {
  renderPageContent();
  initNavbarScroll();
  initMobileMenu();
  initScrollReveal();
});

/* Content Data Models */
const BENEFITS_DATA = [
  { icon: 'currency', title: 'Tanpa Investasi Besar', desc: 'Hemat CAPEX Anda. Nikmati udara dingin berkualitas tanpa perlu membeli unit AC baru.' },
  { icon: 'refresh', title: 'Maintenance Berkala', desc: 'Perawatan cuci AC berkala otomatis kami lakukan setiap 2-3 bulan sekali gratis demi sirkulasi udara bersih.' },
  { icon: 'shield', title: 'Support Teknis', desc: 'Garansi respon perbaikan cepat teknisi handal dan penggantian unit cadangan bebas biaya tambahan.' },
  { icon: 'calendar', title: 'Biaya Lebih Terencana', desc: 'Arus kas stabil dengan pengeluaran tetap operasional (OPEX) bulanan transparan mencakup risiko kerusakan.' }
];

const WHY_US_DATA = [
  { icon: 'wrench', title: 'Instalasi Profesional', desc: 'Pemasangan rapi dan presisi mengikuti standard operation procedure (SOP) keamanan teknis.' },
  { icon: 'badge', title: 'Unit Berkualitas', desc: 'Kami menyewakan unit AC prima dari merek global terkemuka yang hemat energi dan berkinerja maksimal.' },
  { icon: 'wrench', title: 'Teknisi Berpengalaman', desc: 'Didukung oleh tenaga ahli bersertifikat resmi yang menguasai trouble-shooting mesin AC.' },
  { icon: 'clock', title: 'Fast Response', desc: 'Layanan keluhan tanggap darurat yang siap melayani segala kebutuhan dan keluhan teknis Anda dengan sigap.' },
  { icon: 'refresh', title: 'Maintenance Berkala', desc: 'Jadwal perawatan periodik otomatis untuk memastikan kualitas suhu udara tetap prima sepanjang waktu.' },
  { icon: 'arrows', title: 'Fleksibel', desc: 'Kemudahan penyesuaian unit sewa (upgrade/downgrade PK) sesuai kebutuhan ruangan Anda.' }
];

const SERVICES_DATA = [
  { icon: 'home', title: 'Rumah Tinggal', desc: 'Sirkulasi udara bersih, dingin, dan segar untuk menjaga kualitas tidur dan istirahat keluarga Anda.' },
  { icon: 'office', title: 'Kantor', desc: 'Tingkatkan fokus, semangat, dan produktivitas tim dengan suhu ruang kerja nyaman dan kondusif.' },
  { icon: 'box', title: 'Gudang', desc: 'Pertahankan kelembapan optimal untuk menjaga kualitas bahan baku atau inventaris barang berharga.' },
  { icon: 'school', title: 'Sekolah / Kampus', desc: 'Ciptakan lingkungan belajar sejuk demi konsentrasi penuh para pelajar dan pengajar.' },
  { icon: 'project', title: 'Site Office / Proyek', desc: 'Site office kontainer direksi keet proyek konstruksi tetap dingin meski di lapangan terbuka.' },
  { icon: 'office', title: 'Tempat Usaha / Ruko', desc: 'Buat pelanggan toko, ruko, cafe, atau butik Anda betah berbelanja dengan kenyamanan udara dingin.' }
];

const WORKFLOW_DATA = [
  { title: 'Konsultasi', desc: 'Hubungi tim kami untuk konsultasi kapasitas AC (PK) yang sesuai dengan ruangan.' },
  { title: 'Survey', desc: 'Teknisi kami mengunjungi lokasi untuk menentukan letak unit dan jalur instalasi pipa.' },
  { title: 'Penawaran', desc: 'Kami mengirimkan rincian surat penawaran harga sewa bulanan tertulis resmi.' },
  { title: 'Instalasi', desc: 'Pemasangan unit AC secara rapi dan aman sesuai standard operation procedure (SOP).' },
  { title: 'Maintenance', desc: 'Pengecekan freon dan pencucian AC berkala gratis terjadwal setiap 2-3 bulan sekali.' },
  { title: 'Support', desc: 'Dukungan respon perbaikan cepat dan penggantian unit cadangan bebas biaya.' }
];

/**
 * Dynamically renders grid content to compress HTML file size
 */
function renderPageContent() {
  const benefitsGrid = document.getElementById('benefits-grid');
  if (benefitsGrid) {
    benefitsGrid.innerHTML = BENEFITS_DATA.map(item => `
      <div class="card reveal" tabindex="0">
        <div class="card-icon-box" aria-hidden="true"><svg width="24" height="24"><use href="#icon-${item.icon}"/></svg></div>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.desc}</p>
      </div>
    `).join('');
  }

  const whyGrid = document.getElementById('why-grid');
  if (whyGrid) {
    whyGrid.innerHTML = WHY_US_DATA.map(item => `
      <div class="card reveal" tabindex="0">
        <div class="card-icon-box" aria-hidden="true"><svg width="22" height="22"><use href="#icon-${item.icon}"/></svg></div>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.desc}</p>
      </div>
    `).join('');
  }

  const servicesGrid = document.getElementById('services-grid');
  if (servicesGrid) {
    servicesGrid.innerHTML = SERVICES_DATA.map(item => `
      <div class="card reveal" tabindex="0">
        <div class="card-icon-box" aria-hidden="true"><svg width="24" height="24"><use href="#icon-${item.icon}"/></svg></div>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">${item.desc}</p>
      </div>
    `).join('');
  }

  const timelineGrid = document.getElementById('timeline-grid');
  if (timelineGrid) {
    timelineGrid.innerHTML = WORKFLOW_DATA.map((item, idx) => `
      <div class="timeline-step reveal">
        <div class="timeline-number" aria-label="Langkah ${idx + 1}">${idx + 1}</div>
        <div class="timeline-content">
          <h3 class="timeline-title">${item.title}</h3>
          <p class="timeline-desc">${item.desc}</p>
        </div>
      </div>
    `).join('');
  }
}

/**
 * Monitors scroll offset to toggle navbar sticky/scrolled styles
 */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * Manages responsive mobile burger menu drawer state
 */
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-link');

  if (!hamburger || !navLinks) return;

  const toggleMenu = () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = isExpanded ? '' : 'hidden';
  };

  const closeMenu = () => {
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', toggleMenu);
  links.forEach(link => link.addEventListener('click', closeMenu));
}

/**
 * Initializes IntersectionObserver animations on revealed elements
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('reveal-active'));
  }
}
