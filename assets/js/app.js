document.addEventListener("DOMContentLoaded", () => {
    renderPageContent();
    initNavbarScroll();
    initMobileMenu();
    initFaqAccordion();
    initScrollReveal();
    initMobileBottomNav();
});

const BENEFITS_DATA = [
    { icon: "wallet", title: "Tanpa Investasi Besar", desc: "Hemat CAPEX. Sewa AC tanpa perlu investasi beli unit baru." },
    { icon: "refresh-cw", title: "Maintenance Berkala", desc: "Maintenance berkala dilakukan setiap 3–4 bulan untuk menjaga performa dan efisiensi AC tetap optimal." },
    { icon: "headset", title: "Support Teknis", desc: "Respon perbaikan teknisi dan penggantian unit cadangan jika diperlukan." },
    { icon: "calendar-clock", title: "Biaya Terencana", desc: "Pengeluaran OPEX bulanan transparan mencakup risiko kerusakan." }
];

const WHY_US_DATA = [
    { icon: "shield-check", title: "Instalasi Sesuai SOP", desc: "Pemasangan rapi dan presisi mengikuti standar teknis." },
    { icon: "badge-check", title: "Unit AC Terawat", desc: "Unit AC hemat energi dari brand global seperti Daikin dan Gree." },
    { icon: "hard-hat", title: "Teknisi Berpengalaman", desc: "Didukung oleh tenaga ahli bersertifikat menguasai perbaikan AC." },
    { icon: "clock", title: "Respon Cepat", desc: "Layanan tanggap darurat yang siap melayani keluhan teknis Anda." },
    { icon: "refresh-cw", title: "Maintenance Berkala", desc: "Jadwal perawatan periodik otomatis menjaga suhu udara tetap dingin." },
    { icon: "arrow-left-right", title: "Fleksibel", desc: "Kemudahan penyesuaian sewa (upgrade/downgrade PK) sesuai kebutuhan." }
];

const SERVICES_DATA = [
    { icon: "house", title: "Rumah Tinggal", desc: "Hunian &amp; Apartemen" },
    { icon: "building-2", title: "Kantor", desc: "Perkantoran Modern" },
    { icon: "warehouse", title: "Gudang", desc: "Warehouse &amp; Logistik" },
    { icon: "graduation-cap", title: "Sekolah / Kampus", desc: "Sekolah &amp; Kampus" },
    { icon: "construction", title: "Site Office / Proyek", desc: "Proyek Konstruksi" },
    { icon: "store", title: "Tempat Usaha / Ruko", desc: "Ruko &amp; Komersial" }
];

const WORKFLOW_DATA = [
    { title: "Konsultasi", desc: "Hubungi tim kami untuk konsultasi kapasitas AC (PK) yang sesuai." },
    { title: "Survey", desc: "Teknisi kami mengunjungi lokasi menentukan letak unit dan jalur pipa." },
    { title: "Penawaran", desc: "Kami mengirimkan rincian surat penawaran harga sewa resmi." },
    { title: "Instalasi", desc: "Pemasangan unit AC secara rapi dan aman sesuai standar teknis." },
    { title: "Maintenance", desc: "Maintenance berkala setiap 3–4 bulan." },
    { title: "Support", desc: "Dukungan respon perbaikan cepat dan penggantian unit cadangan." }
];

const FAQ_DATA = [
    { q: "Berapa minimal durasi sewa AC bulanan?", a: "Minimal sewa AC bulanan adalah 12 bulan." },
    { q: "Apakah harga sewa bulanan sudah termasuk perawatan cuci AC?", a: "Ya, seluruh paket mencakup maintenance berkala dilakukan setiap 3–4 bulan untuk menjaga performa dan efisiensi AC tetap optimal." },
    { q: "Bagaimana jika terjadi kerusakan unit AC?", a: "Teknisi kami siap merespon cepat dan memberikan penggantian unit cadangan jika terjadi kendala." },
    { q: "Berapa biaya penanganan bongkar pasang unit AC?", a: "Dikenakan sekali di awal: Rp350.000 (0.5-1 PK) dan Rp450.000 (2 PK)." },
    { q: "Berapa lama proses survey dan pengiriman unit ke lokasi?", a: "Tim kami melayani survey lokasi dalam 1x24 jam dan pemasangan dilakukan sesuai jadwal." },
    { q: "Wilayah mana saja yang dijangkau oleh Sewa AC Cikarang?", a: "Kami melayani area Cikarang, Kabupaten Bekasi." },
    { q: "Melayani sewa AC kantor, gudang & proyek?", a: "Ya, melayani rumah, kantor, gudang & proyek." },
    { q: "Merek unit AC apa saja yang disewakan?", a: "Menyediakan unit AC hemat energi dari brand ternama seperti Gree & Daikin." },
    { q: "Apa saja syarat dokumen untuk sewa AC bulanan?", a: "Cukup foto KTP penanggung jawab dan bukti domisili lokasi atau legalitas usaha." },
    { q: "Bagaimana prosedur sistem pembayaran sewa bulanan?", a: "Pembayaran dilakukan bulanan via transfer bank resmi dengan invoice tepat waktu." }
];

function renderPageContent() {
    const mkCard = (i, w) => `<div class="card" tabindex="0"><div class="card-icon-box" aria-hidden="true"><svg width="${w}" height="${w}"><use href="#icon-${i.icon}"/></svg></div><h3 class="card-title">${i.title}</h3><p class="card-desc">${i.desc}</p></div>`;
    const fill = (id, data, w) => { const el = document.getElementById(id); if (el) el.innerHTML = data.map(i => mkCard(i, w)).join(""); };
    fill("benefits-grid", BENEFITS_DATA, 24);
    fill("why-grid", WHY_US_DATA, 22);
    fill("services-grid", SERVICES_DATA, 24);
    const tg = document.getElementById("timeline-grid");
    if (tg) tg.innerHTML = WORKFLOW_DATA.map((i, n) => `<div class="timeline-step"><div class="timeline-number" aria-label="Langkah ${n + 1}">${n + 1}</div><div class="timeline-content"><h3 class="timeline-title">${i.title}</h3><p class="timeline-desc">${i.desc}</p></div></div>`).join("");
    const fq = document.getElementById("faq-accordion");
    if (fq) fq.innerHTML = FAQ_DATA.map((i, n) => `<div class="faq-item"><button class="faq-trigger" aria-expanded="false" aria-controls="faq-ans-${n}" id="faq-head-${n}"><span>${i.q}</span><svg class="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="6 9 12 15 18 9"></polyline></svg></button><div class="faq-panel" id="faq-ans-${n}" aria-labelledby="faq-head-${n}" hidden><div class="faq-content"><p>${i.a}</p></div></div></div>`).join("");
}

function initFaqAccordion() {
    const acc = document.getElementById("faq-accordion");
    if (!acc) return;
    acc.addEventListener("click", (e) => {
        const t = e.target.closest(".faq-trigger");
        if (!t) return;
        const wasOpen = t.getAttribute("aria-expanded") === "true";
        const panel = document.getElementById(t.getAttribute("aria-controls"));
        document.querySelectorAll(".faq-trigger").forEach(b => {
            b.setAttribute("aria-expanded", "false");
            const p = document.getElementById(b.getAttribute("aria-controls"));
            if (p) p.hidden = true;
        });
        if (!wasOpen && panel) {
            t.setAttribute("aria-expanded", "true");
            panel.hidden = false;
        }
    });
}

function initNavbarScroll() {
    const nav = document.querySelector(".navbar");
    if (!nav) return;
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
}

function initMobileMenu() {
    const btn = document.querySelector(".hamburger");
    const menu = document.querySelector(".nav-links");
    if (!btn || !menu) return;
    const close = () => {
        btn.setAttribute("aria-expanded", "false");
        btn.classList.remove("active");
        menu.classList.remove("active");
        document.body.style.overflow = "";
    };
    btn.addEventListener("click", () => {
        const open = btn.getAttribute("aria-expanded") === "true";
        btn.setAttribute("aria-expanded", String(!open));
        btn.classList.toggle("active");
        menu.classList.toggle("active");
        document.body.style.overflow = open ? "" : "hidden";
    });
    menu.querySelectorAll(".nav-link").forEach(l => l.addEventListener("click", close));
    document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });
}

function initScrollReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    const show = el => el.classList.add("reveal-active");
    // Safety fallback: force-reveal ALL .reveal elements after 1.2s
    // This guarantees content is always visible regardless of observer state
    const fallback = setTimeout(() => els.forEach(show), 1200);
    if ("IntersectionObserver" in window) {
        const obs = new IntersectionObserver((entries, ob) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    show(e.target);
                    ob.unobserve(e.target);
                }
            });
        }, { threshold: 0, rootMargin: "0px 0px -10px 0px" });
        els.forEach(e => obs.observe(e));
    } else {
        clearTimeout(fallback);
        els.forEach(show);
    }
}

function initMobileBottomNav() {
    const items = document.querySelectorAll(".mobile-nav-item");
    if (!items.length) return;
    const secs = document.querySelectorAll("section[id], footer[id]");
    const onScroll = () => {
        let cur = "";
        secs.forEach(s => { if (window.scrollY >= s.offsetTop - 140) cur = s.id; });
        items.forEach(i => i.classList.toggle("active", i.getAttribute("href") === "#" + cur));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
}
