(() => {
  // WhatsApp links (number and prefilled messages) live in index.html as plain wa.me URLs,
  // so contact works even if this script never runs. Phone: 558184445268.
  // To change a message, edit the href's ?text= value (URL-encoded) in index.html.
  const menu = document.querySelector('.menu-toggle');
  const header = document.querySelector('.header');
  let scrollFrame = null;
  const updateHeader = () => {
    // Hysteresis prevents flicker when the sticky header becomes shorter.
    const compact = header.classList.contains('is-scrolled');
    header.classList.toggle('is-scrolled', window.scrollY > (compact ? 12 : 80));
    scrollFrame = null;
  };
  window.addEventListener('scroll', () => {
    if (scrollFrame === null) scrollFrame = requestAnimationFrame(updateHeader);
  }, { passive: true });
  updateHeader();
  const nav = document.querySelector('#navigation');
  const closeMenu = () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Abrir menu'); };
  menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); }
  });
  document.addEventListener('click', e => {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !menu.contains(e.target)) closeMenu();
  });
  const privacy = document.querySelector('#privacy');
  document.querySelector('#open-privacy').addEventListener('click', e => { e.preventDefault(); privacy.showModal(); });
  document.querySelector('#close-privacy').addEventListener('click', () => privacy.close());
  privacy.addEventListener('click', e => { if (e.target === privacy) { const bounds = privacy.getBoundingClientRect(); if (e.clientX < bounds.left || e.clientX > bounds.right || e.clientY < bounds.top || e.clientY > bounds.bottom) privacy.close(); } });
  document.querySelector('#year').textContent = new Date().getFullYear();
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('js-motion');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), {threshold: .08});
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  }
})();
