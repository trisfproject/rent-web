document.addEventListener('DOMContentLoaded', () => {
    renderPageContent();
    initNavbarScroll();
    initMobileMenu();
    initFaqAccordion();
    initScrollReveal();
});
const BENEFITS_DATA = [
    { icon: 'currency', title: 'Tanpa Investasi Besar', desc: 'Hemat CAPEX. Sewa AC tanpa perlu investasi beli unit baru.' },
    { icon: 'refresh', title: 'Maintenance Berkala', desc: 'Pencucian AC berkala dilakukan rutin setiap 2-3 bulan sekali.' },
    { icon: 'shield', title: 'Support Teknis', desc: 'Respon perbaikan teknisi dan penggantian unit cadangan jika diperlukan.' },
    { icon: 'calendar', title: 'Biaya Terencana', desc: 'Pengeluaran OPEX bulanan transparan mencakup risiko kerusakan.' }
];
const WHY_US_DATA = [
    { icon: 'wrench', title: 'Instalasi Sesuai SOP', desc: 'Pemasangan rapi dan presisi mengikuti standar teknis.' },
    { icon: 'badge', title: 'Unit AC Terawat', desc: 'Unit AC hemat energi dari brand global seperti Gree, Daikin, Panasonic, dan Sharp.' },
    { icon: 'wrench', title: 'Teknisi Berpengalaman', desc: 'Didukung oleh tenaga ahli bersertifikat menguasai perbaikan AC.' },
    { icon: 'clock', title: 'Respon Cepat', desc: 'Layanan tanggap darurat yang siap melayani keluhan teknis Anda.' },
    { icon: 'refresh', title: 'Maintenance Berkala', desc: 'Jadwal perawatan periodik otomatis menjaga suhu udara tetap dingin.' },
    { icon: 'arrows', title: 'Fleksibel', desc: 'Kemudahan penyesuaian sewa (upgrade/downgrade PK) sesuai kebutuhan.' }
];
const SERVICES_DATA = [
    { icon: 'home', title: 'Rumah Tinggal', desc: 'Udara bersih, dingin, dan segar untuk menjaga istirahat keluarga Anda.' },
    { icon: 'office', title: 'Kantor', desc: 'Tingkatkan konsentrasi dan produktivitas tim dengan suhu ruang nyaman.' },
    { icon: 'box', title: 'Gudang', desc: 'Jaga kelembapan optimal untuk mutu bahan baku dan inventaris barang.' },
    { icon: 'school', title: 'Sekolah / Kampus', desc: 'Ciptakan lingkungan belajar sejuk mendukung fokus para siswa.' },
    { icon: 'project', title: 'Site Office / Proyek', desc: 'Site office kontainer direksi keet proyek tetap dingin di lapangan.' },
    { icon: 'store', title: 'Tempat Usaha / Ruko', desc: 'Buat pelanggan toko, ruko, cafe, atau butik Anda betah berbelanja.' }
];
const WORKFLOW_DATA = [
    { title: 'Konsultasi', desc: 'Hubungi tim kami untuk konsultasi kapasitas AC (PK) yang sesuai.' },
    { title: 'Survey', desc: 'Teknisi kami mengunjungi lokasi menentukan letak unit dan jalur pipa.' },
    { title: 'Penawaran', desc: 'Kami mengirimkan rincian surat penawaran harga sewa resmi.' },
    { title: 'Instalasi', desc: 'Pemasangan unit AC secara rapi dan aman sesuai standar teknis.' },
    { title: 'Maintenance', desc: 'Pengecekan freon dan pencucian AC berkala 2-3 bulan sekali.' },
    { title: 'Support', desc: 'Dukungan respon perbaikan cepat dan penggantian unit cadangan.' }
];
const GALLERY_DATA = [
    { title: 'Ruang Kantor Modern', category: 'Komersial', img: 'assets/images/hero-office.webp' },
    { title: 'Rumah Tinggal Minimalis', category: 'Hunian', img: 'assets/images/hero-office.webp' },
    { title: 'Site Office Proyek', category: 'Industri', img: 'assets/images/hero-office.webp' },
    { title: 'Ruang Kelas Sekolah', category: 'Fasilitas Publik', img: 'assets/images/hero-office.webp' }
];
const FAQ_DATA = [
    { q: 'Berapa minimal durasi sewa AC bulanan?', a: 'Minimal sewa AC bulanan adalah 1 tahun dengan fleksibilitas perpanjangan kontrak.' },
    { q: 'Apakah harga sewa bulanan sudah termasuk perawatan cuci AC?', a: 'Ya, seluruh paket mencakup pemeliharaan dan pencucian AC berkala setiap 3-4 bulan.' },
    { q: 'Bagaimana jika terjadi kerusakan unit AC?', a: 'Teknisi kami siap merespon cepat dan memberikan penggantian unit cadangan jika terjadi kendala.' },
    { q: 'Berapa biaya penanganan bongkar pasang unit AC?', a: 'Dikenakan sekali di awal: Rp350.000 (0.5-1 PK) dan Rp450.000 (2 PK).' },
    { q: 'Berapa lama proses survey dan pengiriman unit ke lokasi?', a: 'Tim kami melayani survey lokasi dalam 1x24 jam dan pemasangan dilakukan sesuai jadwal.' },
    { q: 'Wilayah mana saja yang dijangkau oleh Sewa AC Cikarang?', a: 'Kami melayani area Cikarang, Kabupaten Bekasi.' },
    { q: 'Apakah melayani sewa AC untuk kantor, gudang, dan proyek?', a: 'Ya, melayani rumah tinggal, perkantoran, gudang industri, sekolah, hingga site office proyek.' },
    { q: 'Merek unit AC apa saja yang disewakan?', a: 'Menyediakan unit AC hemat energi dari brand ternama seperti Gree, Daikin, Panasonic, dan Sharp.' },
    { q: 'Apa saja syarat dokumen untuk sewa AC bulanan?', a: 'Cukup foto KTP penanggung jawab dan bukti domisili lokasi atau legalitas usaha.' },
    { q: 'Bagaimana prosedur sistem pembayaran sewa bulanan?', a: 'Pembayaran dilakukan bulanan via transfer bank resmi dengan invoice tepat waktu.' }
];
function renderPageContent() {
    const bGrid = document.getElementById('benefits-grid');
    if (bGrid) {
        bGrid.innerHTML = BENEFITS_DATA.map(i => `
<div class="card reveal" tabindex="0">
<div class="card-icon-box" aria-hidden="true"><svg width="24" height="24"><use href="#icon-${i.icon}"/></svg></div>
<h3 class="card-title">${i.title}</h3>
<p class="card-desc">${i.desc}</p>
</div>
`).join('');
    }
    const wGrid = document.getElementById('why-grid');
    if (wGrid) {
        wGrid.innerHTML = WHY_US_DATA.map(i => `
<div class="card reveal" tabindex="0">
<div class="card-icon-box" aria-hidden="true"><svg width="22" height="22"><use href="#icon-${i.icon}"/></svg></div>
<h3 class="card-title">${i.title}</h3>
<p class="card-desc">${i.desc}</p>
</div>
`).join('');
    }
    const sGrid = document.getElementById('services-grid');
    if (sGrid) {
        sGrid.innerHTML = SERVICES_DATA.map(i => `
<div class="card reveal" tabindex="0">
<div class="card-icon-box" aria-hidden="true"><svg width="24" height="24"><use href="#icon-${i.icon}"/></svg></div>
<h3 class="card-title">${i.title}</h3>
<p class="card-desc">${i.desc}</p>
</div>
`).join('');
    }
    const tGrid = document.getElementById('timeline-grid');
    if (tGrid) {
        tGrid.innerHTML = WORKFLOW_DATA.map((i, idx) => `
<div class="timeline-step reveal">
<div class="timeline-number" aria-label="Langkah ${idx + 1}">${idx + 1}</div>
<div class="timeline-content">
<h3 class="timeline-title">${i.title}</h3>
<p class="timeline-desc">${i.desc}</p>
</div>
</div>
`).join('');
    }
    const gGrid = document.getElementById('gallery-grid');
    if (gGrid) {
        gGrid.innerHTML = GALLERY_DATA.map(i => `
<div class="gallery-card reveal" tabindex="0">
<div class="gallery-img-wrapper">
<img src="${i.img}" alt="${i.title}" class="gallery-img" loading="lazy" width="400" height="250">
</div>
<div class="gallery-info">
<span class="gallery-category">${i.category}</span>
<h3 class="gallery-title">${i.title}</h3>
</div>
</div>
`).join('');
    }
    const faqContainer = document.getElementById('faq-accordion');
    if (faqContainer) {
        faqContainer.innerHTML = FAQ_DATA.map((i, idx) => `
<div class="faq-item reveal">
<button class="faq-trigger" aria-expanded="false" aria-controls="faq-ans-${idx}" id="faq-head-${idx}">
<span>${i.q}</span>
<svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg>
</button>
<div class="faq-panel" id="faq-ans-${idx}" aria-labelledby="faq-head-${idx}" hidden>
<div class="faq-content">
<p>${i.a}</p>
</div>
</div>
</div>
`).join('');
    }
}
function initFaqAccordion() {
    const accordion = document.getElementById('faq-accordion');
    if (!accordion) return;
    accordion.addEventListener('click', (e) => {
        const trigger = e.target.closest('.faq-trigger');
        if (!trigger) return;
        const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
        const panelId = trigger.getAttribute('aria-controls');
        const panel = document.getElementById(panelId);
        document.querySelectorAll('.faq-trigger').forEach(btn => {
            btn.setAttribute('aria-expanded', 'false');
            const p = document.getElementById(btn.getAttribute('aria-controls'));
            if (p) p.hidden = true;
        });
        if (!isExpanded && panel) {
            trigger.setAttribute('aria-expanded', 'true');
            panel.hidden = false;
        }
    });
}
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
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
}
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