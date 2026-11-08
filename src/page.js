// Páginas de serviço: leves de propósito (sem preloader, sem GSAP), porque o Google mede a velocidade delas.
import { linkWa, linkTexto } from './config.js';

const $$ = (s) => [...document.querySelectorAll(s)];

// links do WhatsApp: data-wa="Plano" usa a mensagem do plano; data-wa-msg="texto" abre com o assunto da página
$$('[data-wa]').forEach((a) => (a.href = linkWa(a.dataset.wa)));
$$('[data-wa-msg]').forEach((a) => (a.href = linkTexto(a.dataset.waMsg)));

// botão flutuante do WhatsApp aparece depois do topo e some no fechamento (que já tem o botão grande)
const fab = document.getElementById('fab');
const fim = document.querySelector('.pg-final');
if (fab) {
  let noFim = false;
  const upd = () => fab.classList.toggle('on', scrollY > innerHeight * 0.5 && !noFim);
  if (fim) new IntersectionObserver(([e]) => { noFim = e.isIntersecting; upd(); }).observe(fim);
  addEventListener('scroll', upd, { passive: true });
  upd();
}

// entrada suave dos blocos ao aparecer na tela (só CSS; sem efeito para quem pede menos movimento)
if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { rootMargin: '0px 0px -8% 0px' });
  $$('.rv').forEach((el) => { el.classList.add('rv-on'); io.observe(el); });
}
