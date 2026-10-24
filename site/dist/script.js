(() => {
  const phone = '558184445268';
  const greeting = 'Olá, Marcone! Conheci seu site e gostaria de saber mais sobre o acompanhamento nutricional.';
  const url = message => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  document.querySelectorAll('[data-whatsapp]').forEach(link => {
    link.href = url(greeting); link.target = '_blank'; link.rel = 'noopener noreferrer';
  });
  document.querySelectorAll('[data-plan]').forEach(link => {
    const update = () => {
      const selected = document.querySelector(`input[name="${link.dataset.plan}"]:checked`).value;
      const modality = link.dataset.plan === 'online' ? 'online sem teleconsulta' : 'online com teleconsulta';
      link.href = url(`Olá, Marcone! Conheci seu site e gostaria de saber mais sobre o acompanhamento ${modality}, na opção ${selected.toLowerCase()}.`);
    };
    link.target = '_blank'; link.rel = 'noopener noreferrer';
    document.querySelectorAll(`input[name="${link.dataset.plan}"]`).forEach(input => input.addEventListener('change', update));
    update();
  });
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
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  const privacy = document.querySelector('#privacy');
  document.querySelector('#open-privacy').addEventListener('click', () => privacy.showModal());
  document.querySelector('#close-privacy').addEventListener('click', () => privacy.close());
  privacy.addEventListener('click', e => { if (e.target === privacy) { const bounds = privacy.getBoundingClientRect(); if (e.clientX < bounds.left || e.clientX > bounds.right || e.clientY < bounds.top || e.clientY > bounds.bottom) privacy.close(); } });
  document.querySelector('#year').textContent = new Date().getFullYear();
  const carousel = document.querySelector('.review-carousel');
  if (carousel) {
    const track = carousel.querySelector('.review-track');
    const cards = [...track.querySelectorAll('.review-card')];
    const motion = matchMedia('(prefers-reduced-motion: reduce)');
    let paused = motion.matches;
    let hovered = false;
    let focused = false;
    let touching = false;
    let visible = !('IntersectionObserver' in window);
    let timer = null;
    const step = () => cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : track.clientWidth;
    const limit = () => Math.max(0, track.scrollWidth - track.clientWidth);
    const schedule = () => {
      clearTimeout(timer);
      if (!paused && !hovered && !focused && !touching && visible && !document.hidden && limit() > 1) {
        timer = setTimeout(() => move(1), 6500);
      }
    };
    const move = direction => {
      const current = track.scrollLeft;
      const max = limit();
      let next = current + direction * step();
      if (direction > 0 && current >= max - 2) next = 0;
      if (direction < 0 && current <= 2) next = max;
      track.scrollTo({ left: Math.max(0, Math.min(max, next)), behavior: motion.matches ? 'instant' : 'smooth' });
      schedule();
    };
    track.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault();
        move(event.key === 'ArrowLeft' ? -1 : 1);
      }
    });
    carousel.addEventListener('pointerenter', event => { if (event.pointerType === 'mouse') { hovered = true; schedule(); } });
    carousel.addEventListener('pointerleave', () => { hovered = false; schedule(); });
    carousel.addEventListener('focusin', () => { focused = true; schedule(); });
    carousel.addEventListener('focusout', event => { focused = carousel.contains(event.relatedTarget); schedule(); });
    track.addEventListener('pointerdown', () => { touching = true; schedule(); }, { passive: true });
    window.addEventListener('pointerup', () => { if (touching) { touching = false; schedule(); } }, { passive: true });
    track.addEventListener('pointercancel', () => { touching = false; schedule(); }, { passive: true });
    track.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    document.addEventListener('visibilitychange', schedule);
    motion.addEventListener('change', () => { paused = motion.matches; schedule(); });
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(entries => { visible = entries[0].isIntersecting; schedule(); }, { threshold: .2 }).observe(carousel);
    }
    schedule();
  }
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('js-motion');
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), {threshold: .08});
    document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  }
})();
