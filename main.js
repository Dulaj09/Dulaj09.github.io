/* =====================================================================
   THE COLOR BAR — shared script (navbar, mobile menu, reveal, back-to-top)
===================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();

  /* ---------- Loader ---------- */
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => loader && loader.classList.add('hide'), 450);
  });

  /* ---------- Sticky navbar background on scroll ---------- */
  const navbar = document.getElementById('navbar');
  function updateNavbar(){
    if (!navbar) return;
    navbar.classList.toggle('glass', window.scrollY > 40);
  }
  window.addEventListener('scroll', updateNavbar);
  updateNavbar();

  /* ---------- Mobile menu ---------- */
  const menuBtn = document.getElementById('menuBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuOverlay = document.getElementById('menuOverlay');

  function openMenu(){
    mobileMenu.classList.add('open');
    menuOverlay.classList.remove('hidden');
    menuBtn.setAttribute('aria-expanded','true');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu(){
    mobileMenu.classList.remove('open');
    menuOverlay.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded','false');
    document.body.style.overflow = '';
  }
  if (menuBtn){
    menuBtn.addEventListener('click', openMenu);
    closeMenuBtn.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);
    document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', closeMenu));
  }

  /* ---------- Scroll reveal ---------- */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ---------- Back to top ---------- */
  const backToTop = document.getElementById('backToTop');
  if (backToTop){
    window.addEventListener('scroll', () => {
      backToTop.classList.toggle('show', window.scrollY > 500);
    });
    backToTop.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  }

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Hero fade-in (index only) ---------- */
  document.querySelectorAll('.hero-fade').forEach((el,i) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity .9s ease ${0.25 + i*0.15}s, transform .9s ease ${0.25 + i*0.15}s`;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }));
  });
});
