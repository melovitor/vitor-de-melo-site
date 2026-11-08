import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Lenis from 'lenis';
import { linkWa } from './config.js';
import { startDust } from './fx.js';

gsap.registerPlugin(ScrollTrigger, SplitText);

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const hoverOk = matchMedia('(hover:hover)').matches;
const lite = document.documentElement.classList.contains('lite');

$$('[data-wa]').forEach((a) => (a.href = linkWa(a.dataset.wa)));
$('#fab').href = linkWa('geral');

// luz de fundo e rastro
if (!reduce) {
  startDust($('#dust'), { count: lite ? 34 : 110, lite });
}

// sempre começa do topo, inclusive ao recarregar
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
scrollTo(0, 0);
addEventListener('pageshow', () => scrollTo(0, 0));

// celular: tenta tela cheia. Os navegadores só permitem depois de um gesto da pessoa,
// então tenta no primeiro toque (e repete nos próximos até funcionar).
if (matchMedia('(pointer:coarse)').matches) {
  const events = ['pointerup', 'touchend', 'click'];
  const stop = () => events.forEach((ev) => removeEventListener(ev, goFull));
  const goFull = () => {
    const el = document.documentElement;
    const req = el.requestFullscreen || el.webkitRequestFullscreen;
    if (!req || document.fullscreenElement || document.webkitFullscreenElement) return stop();
    try { const p = req.call(el, { navigationUI: 'hide' }); if (p && p.catch) p.catch(() => {}); } catch (e) { /* sem suporte (ex.: iPhone) */ }
  };
  events.forEach((ev) => addEventListener(ev, goFull, { passive: true }));
  document.addEventListener('fullscreenchange', () => document.fullscreenElement && stop());
}

const lenis = new Lenis({ lerp: 0.09 });
lenis.stop();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((t) => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);
let jumping = false; // true enquanto um link de âncora está rolando a página
$$('a[href^="#"]').forEach((a) => {
  const id = a.getAttribute('href');
  if (id.length > 1) a.addEventListener('click', (e) => { e.preventDefault(); jumping = true; lenis.scrollTo(id, { onComplete: () => (jumping = false) }); });
});


// ---------- preloader ----------
function preloader() {
  const state = { v: 0 };
  let loaded = false;
  Promise.all([
    document.fonts.ready,
    document.readyState === 'complete' ? 1 : new Promise((r) => addEventListener('load', r, { once: true })),
  ]).then(() => (loaded = true));

  gsap.set('.pre__brand', { autoAlpha: 0 });
  Promise.all([document.fonts.load('600 40px Manrope'), document.fonts.load('italic 40px "Instrument Serif"')]).catch(() => {}).then(() => {
    gsap.set('.pre__brand', { autoAlpha: 1 });
    gsap.from('.pre__brand span', { yPercent: 110, duration: 1, stagger: 0.12, ease: 'power4.out' });
  });
  const t = gsap.to(state, {
    v: 100, duration: 2.2, ease: 'power2.inOut',
    onUpdate() {
      if (!loaded && state.v > 90) { t.pause(); const w = setInterval(() => loaded && (clearInterval(w), t.resume()), 80); }
      $('#preNum').textContent = Math.round(state.v);
      gsap.set('#preBar', { scaleX: state.v / 100 });
    },
    onComplete: reveal,
  });
}

function reveal() {
  const heroChars = SplitText.create('.hero__title .ln > span', { type: 'words,chars' }).chars;
  gsap.set(heroChars, { yPercent: 125, rotate: 6 });
  gsap.timeline({ onComplete: () => { $('#pre').remove(); document.body.classList.remove('is-loading'); scrollTo(0, 0); lenis.scrollTo(0, { immediate: true, force: true }); lenis.start(); setupScroll(); } })
    .to('.pre__bar,.pre__pct', { opacity: 0, duration: 0.4 })
    .to('.pre__brand span', { yPercent: -110, duration: 0.7, stagger: 0.08, ease: 'power4.in' }, '+=0.15')
    .to('.pre', { opacity: 0, duration: 0.8, ease: 'power2.inOut' }, '-=0.2')
    .to(heroChars, { yPercent: 0, rotate: 0, duration: 1.2, stagger: 0.028, ease: 'power4.out' }, '-=0.5')
    .from('.hero .eyebrow,.hero__sub,.hero__cta,.badge', { opacity: 0, y: 26, duration: 1, stagger: 0.09, ease: 'power3.out' }, '-=0.9');
}

// ---------- scroll ----------
function setupScroll() {
  // flare grande que segue o mouse
  if (hoverOk) {
    const fl = $('#flare');
    const x = gsap.quickTo(fl, 'x', { duration: 0.9, ease: 'power3' });
    const y = gsap.quickTo(fl, 'y', { duration: 0.9, ease: 'power3' });
    addEventListener('mousemove', (e) => { gsap.to(fl, { opacity: 1, duration: 0.6, overwrite: 'auto' }); x(e.clientX); y(e.clientY); });

    // profundidade no hero: título e selo andam em camadas com o mouse
    const qx = gsap.quickTo('.hero__title', 'x', { duration: 1, ease: 'power3' });
    const qy = gsap.quickTo('.hero__title', 'y', { duration: 1, ease: 'power3' });
    const bx = gsap.quickTo('.badge', 'x', { duration: 1.2, ease: 'power3' });
    const by = gsap.quickTo('.badge', 'y', { duration: 1.2, ease: 'power3' });
    addEventListener('mousemove', (e) => {
      const nx = e.clientX / innerWidth - 0.5, ny = e.clientY / innerHeight - 0.5;
      qx(nx * -22); qy(ny * -14); bx(nx * 40); by(ny * 28);
    });

    // cards inclinam em 3D e acendem onde o mouse está
    $$('.card, .plan').forEach((el) => {
      const rx = gsap.quickTo(el, 'rotationX', { duration: 0.5, ease: 'power3' });
      const ry = gsap.quickTo(el, 'rotationY', { duration: 0.5, ease: 'power3' });
      gsap.set(el, { transformPerspective: 900 });
      el.addEventListener('mousemove', (e) => {
        const r = el.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        ry((px - 0.5) * 10); rx((0.5 - py) * 10);
        el.style.setProperty('--mx', `${px * 100}%`); el.style.setProperty('--my', `${py * 100}%`);
      });
      el.addEventListener('mouseleave', () => { rx(0); ry(0); });
    });
  }

  // orbes e barra de progresso
  if (!lite) { // paralaxe das luzes só no desktop (pesa no celular)
    gsap.to('.orb--a', { y: 260, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 1 } });
    gsap.to('.orb--b', { y: -320, x: -80, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 1 } });
    gsap.to('.orb--c', { y: -500, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 1 } });
  }

  // botão do WhatsApp: aparece da segunda seção em diante e some na última (que já tem o botão grande)
  ScrollTrigger.create({
    trigger: '#manifesto', start: 'top 60%', endTrigger: '#final', end: 'top 60%',
    onToggle: (self) => $('#fab').classList.toggle('on', self.isActive),
  });
  gsap.to('#progress', { scaleX: 1, ease: 'none', scrollTrigger: { start: 0, end: 'max', scrub: 0.2 } });

  // hero sai com profundidade
  gsap.to('.hero__title,.hero__sub,.hero__cta', { yPercent: -14, scale: 0.96, opacity: 0.2, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

  // manifesto: letra por letra
  const words = $$('.mw');
  words.forEach((w) => { w.innerHTML = `<span class="mwi">${w.innerHTML}</span>`; });
  const splits = words.map((w) => SplitText.create($('.mwi', w), { type: 'words,chars' }).chars);
  gsap.set(words, { opacity: 1 });
  const BL = lite ? 'blur(0px)' : 'blur(10px)'; // blur animado pesa no celular
  gsap.set(splits.flat(), { opacity: 0, yPercent: 60, filter: BL });
  // toca sozinho ao chegar, com tempo para ler, e libera a rolagem na última frase
  const skip = $('#skip');
  let played = false, finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    gsap.to(skip, { opacity: 0, duration: 0.3, onComplete: () => (skip.style.pointerEvents = 'none') });
    lenis.start();
  };
  // terminou "Tem que ser seu.": segura um instante para ler e já puxa para a próxima seção
  let advanced = false;
  const advance = () => {
    if (advanced) return;
    advanced = true;
    finish();
    // desliza devagar: começa e termina suave (ease in-out)
    lenis.scrollTo('#pilares', { duration: 2.2, easing: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2) });
  };
  const mt = gsap.timeline({ paused: true, onComplete: () => gsap.delayedCall(0.4, advance) });
  // vai direto ao estado final, sem puxar a página (link de âncora ou movimento reduzido)
  const settle = () => { mt.eventCallback('onComplete', null); mt.progress(1); advanced = true; };
  // as frases dividem o mesmo palco: a próxima já entra enquanto a anterior sai (0,9s entre elas)
  const STEP = 1.1;
  splits.forEach((chars, i) => {
    const t = i * STEP;
    mt.to(chars, { opacity: 1, yPercent: 0, filter: 'blur(0px)', duration: 0.6, stagger: 0.02, ease: 'power3.out' }, t);
    if (i < splits.length - 1) mt.to(chars, { opacity: 0, yPercent: -55, filter: BL, duration: 0.4, stagger: 0.01, ease: 'power3.in' }, t + STEP - 0.15);
  });
  skip.addEventListener('click', () => { mt.eventCallback('onComplete', null); mt.progress(1); advance(); });
  if (reduce) { settle(); played = true; }
  ScrollTrigger.create({
    trigger: '.manifesto', start: 'top 65%',
    onEnter: () => {
      if (played) return;
      played = true;
      if (jumping) { settle(); return; } // veio por um link: não sequestra a rolagem
      // a primeira frase já começa a entrar enquanto a página alinha na seção
      mt.play();
      gsap.to(skip, { opacity: 1, duration: 0.6, delay: 1, onStart: () => (skip.style.pointerEvents = 'auto') });
      lenis.scrollTo('.manifesto', { duration: 0.6, force: true, lock: true, onComplete: () => { if (!finished) lenis.stop(); } });
    },
  });

  // títulos entram linha por linha, com máscara
  $$('.sec-head h2, .final__t').forEach((h) => SplitText.create(h, {
    type: 'lines', mask: 'lines', autoSplit: true,
    onSplit: (self) => (self.masks || []).forEach((m) => { m.style.paddingBottom = '.18em'; m.style.marginBottom = '-.18em'; }) || gsap.from(self.lines, { yPercent: 110, duration: 1.2, stagger: 0.14, ease: 'power4.out',
      scrollTrigger: { trigger: h, start: 'top 85%' } }),
  }));

  const rise = (sel, trig, o = {}) => gsap.from(sel, { opacity: 0, y: 60, duration: 1.1, stagger: 0.12, ease: 'power3.out',
    scrollTrigger: { trigger: trig, start: 'top 85%' }, ...o });
  $$('.sec-head').forEach((h) => rise($('.eyebrow', h), h));
  rise('.card', '.why__grid');
  rise('.plan', '.plans__grid', { stagger: 0.15 });
  rise('.plans__note', '.plans__note');
  rise('.trust__list li', '.trust__list', { stagger: 0.14 });
  rise('.steps__list li', '.steps__list', { stagger: 0.14 });

  // faixa que anda com o scroll
  // faixa: anda sozinha devagar, reage de leve ao scroll e pode ser arrastada (mouse esquerdo/direito ou dedo)
  const mqEl = $('.marquee'), track = $('.marquee__in');
  const BASE = 38; // px/s de deriva própria
  let pos = 0, half = track.scrollWidth / 2, inertia = 0, boost = 0, hoverK = 1, dragging = false, lastX = 0, lastT = 0;
  addEventListener('resize', () => (half = track.scrollWidth / 2));
  gsap.ticker.add(() => {
    const dt = Math.min(gsap.ticker.deltaRatio(60) / 60, 0.05);
    if (!dragging) {
      hoverK += (((hoverOk && mqEl.matches(':hover')) ? 0 : 1) - hoverK) * Math.min(1, dt * 5); // pausa com o mouse em cima
      const target = gsap.utils.clamp(-240, 240, -lenis.velocity * 5); // scroll para baixo empurra para a esquerda, para cima para a direita
      boost += (target - boost) * Math.min(1, dt * 5);
      pos += (-BASE * hoverK + boost + inertia) * dt;
      inertia *= Math.pow(0.05, dt);
    }
    pos = gsap.utils.wrap(-half, 0, pos);
    track.style.transform = `translate3d(${pos}px,0,0)`;
  });
  mqEl.addEventListener('pointerdown', (e) => {
    dragging = true; inertia = 0; lastX = e.clientX; lastT = performance.now();
    mqEl.setPointerCapture(e.pointerId); mqEl.classList.add('drag');
  });
  mqEl.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const now = performance.now(), dx = e.clientX - lastX;
    pos += dx;
    inertia = inertia * 0.5 + (dx / (Math.max(1, now - lastT) / 1000)) * 0.5;
    lastX = e.clientX; lastT = now;
  });
  const endDrag = () => {
    if (!dragging) return;
    dragging = false; mqEl.classList.remove('drag');
    inertia = performance.now() - lastT > 90 ? 0 : gsap.utils.clamp(-1800, 1800, inertia);
  };
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach((ev) => mqEl.addEventListener(ev, endDrag));
  mqEl.addEventListener('contextmenu', (e) => e.preventDefault()); // permite arrastar também com o botão direito

  gsap.to('#stepsFill', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '.steps__list', start: 'top 85%', end: 'bottom 60%', scrub: 0.5 } });

  gsap.from('.final .eyebrow,#magnet', { opacity: 0, y: 70, duration: 1.2, stagger: 0.25, ease: 'power4.out',
    scrollTrigger: { trigger: '.final', start: 'top 60%' } });

  if (hoverOk) {
    const m = $('#magnet');
    m.addEventListener('mousemove', (e) => {
      const r = m.getBoundingClientRect();
      gsap.to(m, { x: (e.clientX - r.left - r.width / 2) * 0.3, y: (e.clientY - r.top - r.height / 2) * 0.4, duration: 0.3 });
    });
    m.addEventListener('mouseleave', () => gsap.to(m, { x: 0, y: 0, duration: 0.7, ease: 'elastic.out(1,.4)' }));
  }
  ScrollTrigger.refresh();
}

if (reduce) { $('#pre').remove(); document.body.classList.remove('is-loading'); lenis.start(); setupScroll(); }
else preloader();

// perguntas frequentes: abrir/fechar muda a altura da página, então recalcula as animações de scroll
$$('.faq details').forEach((d) => d.addEventListener('toggle', () => ScrollTrigger.refresh()));
