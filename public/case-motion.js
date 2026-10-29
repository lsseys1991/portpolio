// Shared motion behaviours for the v.2 case-detail pages.
// Cursor glow, scroll progress bar, mask/fade reveals, count-ups, contribution bars.

export function setupCaseMotion(root, getProps) {
  const props = () => (getProps ? getProps() : {}) || {};
  const cleanups = [];
  const observers = [];
  let raf = null;

  const on = (target, type, fn, opts) => {
    target.addEventListener(type, fn, opts);
    cleanups.push(() => target.removeEventListener(type, fn, opts));
  };

  const grain = root.querySelector('[data-grain]');
  const syncGrain = () => {
    if (grain) grain.style.display = (props().grain ?? true) ? '' : 'none';
  };
  syncGrain();

  // cursor glow
  const glow = root.querySelector('[data-glow]');
  let gx = -600, gy = -600, cx = -600, cy = -600;
  on(window, 'pointermove', e => {
    cx = e.clientX; cy = e.clientY;
    if (glow && (props().cursorGlow ?? true) && glow.style.opacity !== '1') glow.style.opacity = '1';
  });
  const tick = () => {
    if (glow && (props().cursorGlow ?? true)) {
      gx += (cx - gx) * 0.09;
      gy += (cy - gy) * 0.09;
      const tf = 'translate3d(' + gx.toFixed(1) + 'px,' + gy.toFixed(1) + 'px,0)';
      if (glow._tf !== tf) { glow.style.transform = tf; glow._tf = tf; }
    } else if (glow && glow.style.opacity !== '0') {
      glow.style.opacity = '0';
    }
    raf = requestAnimationFrame(tick);
  };
  const start = () => { if (!raf) raf = requestAnimationFrame(tick); };
  const stop = () => { if (raf) { cancelAnimationFrame(raf); raf = null; } };
  on(document, 'visibilitychange', () => { document.hidden ? stop() : start(); });
  start();

  // sequential (gif-like) video players: data-seq="a.mp4|b.mp4|c.mp4"
  root.querySelectorAll('video').forEach(v => { v.defaultMuted = true; v.muted = true; });
  root.querySelectorAll('video[data-seq]').forEach(v => {
    const list = (v.dataset.seq || '').split('|').map(s => s.trim()).filter(Boolean);
    if (list.length < 2) return;
    let i = 0;
    const play = () => { v.muted = true; const p = v.play(); if (p && p.catch) p.catch(() => {}); };
    const next = () => { i = (i + 1) % list.length; v.src = list[i]; v.load(); play(); };
    v.loop = false;
    v.src = list[0];
    on(v, 'ended', next);
    on(v, 'error', next);
    play();
  });

  const bar = root.querySelector('[data-scroll-bar]');
  if (bar) {
    const update = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      const p = h > 0 ? (window.scrollY / h) * 100 : 0;
      const w = Math.max(0, Math.min(100, p)).toFixed(2) + '%';
      if (bar._w !== w) { bar.style.width = w; bar._w = w; }
    };
    on(window, 'scroll', update, { passive: true });
    on(window, 'resize', update);
    update();
  }

  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) {
    const masks = Array.from(root.querySelectorAll('[data-mask] > *'));
    masks.forEach((el, i) => {
      el.style.transform = 'translateY(108%)';
      el.style.transition = 'transform 1s cubic-bezier(.16,.84,.26,1) ' + (120 + i * 110) + 'ms';
    });
    requestAnimationFrame(() => masks.forEach(el => { el.style.transform = 'translateY(0)'; }));

    const items = Array.from(root.querySelectorAll('[data-reveal]'));
    items.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(14px)';
      const d = el.dataset.delay || 0;
      el.style.transition = 'opacity .8s cubic-bezier(.2,.7,.2,1) ' + d + 'ms, transform .8s cubic-bezier(.2,.7,.2,1) ' + d + 'ms';
    });
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        en.target.style.opacity = '1';
        en.target.style.transform = 'translateY(0)';
        io.unobserve(en.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -6% 0px' });
    items.forEach(el => io.observe(el));
    observers.push(io);

    const cio = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        const el = en.target;
        cio.unobserve(el);
        const target = parseFloat(el.dataset.count) || 0;
        const comma = el.dataset.comma === '1';
        const t0 = performance.now(), d = 1400;
        const step = now => {
          const p = Math.min(1, (now - t0) / d);
          const v = Math.round(target * (1 - Math.pow(1 - p, 3)));
          el.textContent = comma ? v.toLocaleString('en-US') : String(v);
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.4 });
    root.querySelectorAll('[data-count]').forEach(el => cio.observe(el));
    observers.push(cio);

    const bars = Array.from(root.querySelectorAll('[data-bar]'));
    bars.forEach(el => { el.style.transition = 'width 1.2s cubic-bezier(.2,.7,.2,1)'; });
    const bio = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        bio.unobserve(en.target);
        const pct = parseFloat(en.target.dataset.bar) || 0;
        setTimeout(() => { en.target.style.width = pct + '%'; }, 120);
      });
    }, { threshold: 0.5 });
    bars.forEach(el => bio.observe(el));
    observers.push(bio);
  }

  return {
    syncGrain,
    teardown() {
      stop();
      cleanups.forEach(fn => fn());
      cleanups.length = 0;
      observers.forEach(o => o.disconnect());
      observers.length = 0;
    }
  };
}
