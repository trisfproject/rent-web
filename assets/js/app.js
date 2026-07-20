/**
 * Raja Sewa AC Cikarang - Client Logic
 * Handles interactive elements, accessibility, navbar scrolls, and animations.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initFaqAccordion();
  initScrollReveal();
});

/**
 * Adds active class to navbar when user scrolls down
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

  // Run immediately in case page is refreshed while scrolled
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
}

/**
 * Mobile navigation menu toggle with ARIA accessibility roles
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
    
    // Prevent background scrolling when mobile menu is open
    document.body.style.overflow = isExpanded ? '' : 'hidden';
  };

  const closeMenu = () => {
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', toggleMenu);

  // Close menu when links are clicked (useful for single-page navigations)
  links.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/**
 * Toggles accordion panels for the FAQ section
 * Uses hardware-accelerated CSS Grid transition (grid-template-rows 0fr -> 1fr)
 */
function initFaqAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    
    if (!header) return;

    header.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other items for a clean accordion effect
      accordionItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherHeader = otherItem.querySelector('.accordion-header');
          if (otherHeader) {
            otherHeader.setAttribute('aria-expanded', 'false');
          }
        }
      });

      // Toggle current item
      if (isActive) {
        item.classList.remove('active');
        header.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
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
