/**
 * Sewa AC Cikarang - Phase 2 Logic
 * Sticky navbar scrolled states, accessible mobile navigation, and viewport scroll reveal animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initScrollReveal();
});

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
 * Triggers fade-up animations as components enter the viewport
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  if (!('IntersectionObserver' in window)) {
    // Fallback: immediately show elements if IntersectionObserver is not supported
    revealElements.forEach(el => el.classList.add('reveal-active'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-active');
        // Unobserve after showing the animation to avoid recalculations
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}
