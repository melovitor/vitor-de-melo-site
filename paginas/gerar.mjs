// Gera as páginas de serviço (<slug>/index.html) a partir de paginas/conteudo.mjs.
// Roda antes do build: `npm run build` chama este arquivo e depois o Vite.
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, planos, paginas } from './conteudo.mjs';

const raiz = join(dirname(fileURLToPath(import.meta.url)), '..');
const HOJE = '2026-11-08';
const texto = (html) => html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const url = (p) => `${SITE}/${p.slug}/`;

const negocio = {
  '@type': 'ProfessionalService',
  '@id': `${SITE}/#negocio`,
  name: 'Vitor de Melo · Criação de Sites, Aplicativos e Sistemas',
  url: `${SITE}/`,
  telephone: '+55-11-97028-3255',
  image: `${SITE}/og.png`,
  priceRange: 'R$ 690 – sob consulta',
  address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
};

function jsonld(p) {
  const graph = [];
  if (p.artigo) {
    graph.push({
      '@type': 'Article', '@id': `${url(p)}#artigo`, headline: p.titulo, description: p.descricao,
      inLanguage: 'pt-BR', datePublished: HOJE, dateModified: HOJE, mainEntityOfPage: url(p), image: `${SITE}/og.png`,
      author: { '@type': 'Person', name: 'Vitor de Melo', url: `${SITE}/` }, publisher: negocio,
    });
  } else {
    const s = { '@type': 'Service', '@id': `${url(p)}#servico`, name: p.servico.nome, serviceType: p.servico.tipo, description: p.descricao,
      url: url(p), provider: negocio, areaServed: [{ '@type': 'City', name: 'São Paulo' }, { '@type': 'Country', name: 'Brasil' }] };
    if (p.servico.preco) s.offers = { '@type': 'Offer', priceCurrency: 'BRL', priceSpecification: { '@type': 'PriceSpecification', minPrice: p.servico.preco, priceCurrency: 'BRL' } };
    graph.push(s);
  }
  graph.push({ '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: texto(p.h1).replace(/\.$/, ''), item: url(p) },
  ] });
  graph.push({ '@type': 'FAQPage', mainEntity: p.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: texto(a) } })) });
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 1);
}

const fab = `<a class="fab" id="fab" href="https://wa.me/5511970283255" target="_blank" rel="noopener" aria-label="Falar no WhatsApp"><svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg></a>`;

const topo = (p) => `<header class="pg-top">
  <a class="pg-logo" href="/" aria-label="Vitor de Melo, página inicial">Vitor <i>de Melo</i></a>
  <nav class="pg-nav" aria-label="Serviços">${paginas.map((o) => `<a href="/${o.slug}/"${o.slug === p.slug ? ' aria-current="page"' : ''}>${o.menu}</a>`).join('')}</nav>
  <a class="btn btn--cy" data-wa-msg="${p.wa}" href="https://wa.me/5511970283255" target="_blank" rel="noopener">Orçamento</a>
</header>`;

const migalhas = (p) => `<nav class="pg-crumb" aria-label="Você está em"><a href="/">Início</a><span aria-hidden="true">/</span><span>${texto(p.h1).replace(/\.$/, '')}</span></nav>`;

const blocoPlanos = (b) => `<section class="plans">
  <div class="sec-head sec-head--c rv"><p class="eyebrow">Planos</p><h2>${b.h2}</h2></div>
  <div class="plans__grid">${planos.map((pl) => `
    <article class="plan glass rv${pl.hot ? ' plan--hot' : ''}">
      <p class="plan__tag${pl.hot ? ' plan__tag--hot' : ''}">${pl.tag}</p>
      <h3>${pl.nome}</h3>
      <p class="plan__price"><small>a partir de</small>${pl.preco}</p>
      <p class="plan__desc">${pl.desc}</p>
      <ul>${pl.itens.map((i) => `<li>${i}</li>`).join('')}</ul>
      <a class="btn ${pl.hot ? 'btn--cy' : 'btn--glass'}" data-wa="${pl.nome}" href="https://wa.me/5511970283255" target="_blank" rel="noopener">Quero este${pl.hot ? ' <span class="arr">→</span>' : ''}</a>
    </article>`).join('')}
  </div>
  <p class="plans__note">Precisa de login, pagamentos ou painel de gestão? <a href="/sistemas-web/">Conheça os sistemas sob medida →</a></p>
</section>`;

const blocoCards = (b) => `<section class="pg-sec">
  <div class="sec-head sec-head--c rv"><p class="eyebrow">${b.eyebrow}</p><h2>${b.h2}</h2></div>
  <div class="pg-grid">${b.itens.map(([n, t, d]) => `
    <article class="card glass rv"><span class="card__n serif">${n}</span><h3>${t}</h3><p>${d}</p></article>`).join('')}
  </div>
</section>`;

const blocoFaq = (p) => `<section class="faq">
  <div class="sec-head sec-head--c rv"><p class="eyebrow">Perguntas frequentes</p><h2>Antes de chamar, <i class="serif">tire suas dúvidas.</i></h2></div>
  <div class="faq__list">${p.faq.map(([q, a]) => `
    <details><summary>${q}</summary><p>${a}</p></details>`).join('')}
  </div>
</section>`;

const resumo = {
  'criacao-de-sites': 'Sites profissionais a partir de R$ 690, rápidos e prontos para o Google.',
  'landing-page': 'Páginas de alta conversão para anúncios e campanhas, a partir de R$ 1.490.',
  'criacao-de-aplicativos': 'Apps para Android, iPhone e web, com agendamento, pedidos e pagamentos.',
  'sistemas-web': 'Área do cliente, gestão, pagamentos e integrações sob medida.',
  'quanto-custa-um-site': 'Preços reais, o que muda o valor e os custos que vêm à parte.',
};
const blocoRelacionados = (p) => `<section class="pg-sec">
  <div class="sec-head sec-head--c rv"><p class="eyebrow">Veja também</p><h2>Outros <i class="serif">serviços.</i></h2></div>
  <div class="pg-grid pg-grid--4">${paginas.filter((o) => o.slug !== p.slug).map((o) => `
    <a class="card glass rv" href="/${o.slug}/"><h3>${texto(o.h1).replace(/\.$/, '')}</h3><p>${resumo[o.slug]}</p><span class="more">Saiba mais →</span></a>`).join('')}
  </div>
</section>`;

const bloco = (p, b) => {
  if (b.tipo === 'prose') return `<section class="pg-sec"><div class="pg-prose rv">${b.html}</div></section>`;
  if (b.tipo === 'cards') return blocoCards(b);
  if (b.tipo === 'planos') return blocoPlanos(b);
  if (b.tipo === 'faq') return blocoFaq(p);
  if (b.tipo === 'relacionados') return blocoRelacionados(p);
  throw new Error(`bloco desconhecido: ${b.tipo}`);
};

const rodape = `<footer class="pg-foot">
  <div><b>Vitor de Melo</b><p>Criação de sites, aplicativos e sistemas.<br>São Paulo e todo o Brasil, com atendimento online.</p></div>
  <nav aria-label="Serviços"><b>Serviços</b>${paginas.filter((o) => !o.artigo).map((o) => `<a href="/${o.slug}/">${texto(o.h1).replace(/\.$/, '')}</a>`).join('')}</nav>
  <nav aria-label="Mais"><b>Mais</b><a href="/quanto-custa-um-site/">Quanto custa um site</a><a href="/#planos">Planos</a><a href="/#perguntas">Perguntas frequentes</a><a href="https://wa.me/5511970283255" target="_blank" rel="noopener">WhatsApp (11) 97028-3255</a></nav>
  <small>© Vitor de Melo</small>
</footer>`;

function pagina(p) {
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#03080a">
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">
<title>${p.titulo}</title>
<meta name="description" content="${p.descricao}">
<link rel="canonical" href="${url(p)}">
<link rel="alternate" hreflang="pt-BR" href="${url(p)}">
<meta name="author" content="Vitor de Melo">
<link rel="manifest" href="/manifest.webmanifest">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<meta property="og:type" content="${p.artigo ? 'article' : 'website'}">
<meta property="og:locale" content="pt_BR">
<meta property="og:site_name" content="Vitor de Melo">
<meta property="og:url" content="${url(p)}">
<meta property="og:title" content="${p.titulo}">
<meta property="og:description" content="${p.descricao}">
<meta property="og:image" content="${SITE}/og.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${p.titulo}">
<meta name="twitter:description" content="${p.descricao}">
<meta name="twitter:image" content="${SITE}/og.png">
<script type="application/ld+json">
${jsonld(p)}
</script>
<link rel="stylesheet" href="/src/styles.css">
<link rel="stylesheet" href="/src/page.css">
<style>html,body{background:#03080a}</style>
<script>if (matchMedia('(pointer:coarse)').matches || innerWidth < 700) document.documentElement.classList.add('lite');</script>
<script type="module" src="/src/page.js"></script>
</head>
<body class="pg-body">
<!-- arquivo gerado por paginas/gerar.mjs: edite paginas/conteudo.mjs, não este HTML -->
<div class="atmos" aria-hidden="true"><i class="orb orb--a"></i><i class="orb orb--b"></i><i class="orb orb--c"></i></div>
<div class="grain" aria-hidden="true"></div>
<div class="vignette" aria-hidden="true"></div>
${fab}
<div class="pg">
${topo(p)}
${migalhas(p)}
<main>
  <section class="pg-hero">
    <p class="eyebrow">${p.eyebrow}</p>
    <h1>${p.h1}</h1>
    <p class="pg-lead">${p.lead}</p>
    <div class="pg-cta">
      <a class="btn btn--cy" data-wa-msg="${p.wa}" href="https://wa.me/5511970283255" target="_blank" rel="noopener">Pedir orçamento no WhatsApp <span class="arr">→</span></a>
      <a class="btn btn--glass" href="${p.artigo ? '/#planos' : '/quanto-custa-um-site/'}">${p.artigo ? 'Ver os planos' : 'Quanto custa?'}</a>
    </div>
    <div class="pg-facts">${p.fatos.map(([b, s]) => `<div class="glass"><b>${b}</b><span>${s}</span></div>`).join('')}</div>
  </section>
${p.blocos.map((b) => bloco(p, b)).join('\n')}
  <section class="pg-final">
    <p class="eyebrow">Próximo passo</p>
    <h2>Vamos conversar sobre <i class="serif">o seu projeto?</i></h2>
    <p>Resposta em até 1h, direto comigo, sem intermediário. Valor e prazo por escrito antes de começar.</p>
    <a class="btn btn--cy btn--xl" data-wa-msg="${p.wa}" href="https://wa.me/5511970283255" target="_blank" rel="noopener">Falar no WhatsApp <span class="arr">→</span></a>
    ${rodape}
  </section>
</main>
</div>
</body>
</html>
`;
}

for (const p of paginas) {
  const arq = join(raiz, p.slug, 'index.html');
  mkdirSync(dirname(arq), { recursive: true });
  writeFileSync(arq, pagina(p));
}

// sitemap com a home e todas as páginas
const urls = [`${SITE}/`, ...paginas.map(url)];
writeFileSync(join(raiz, 'public', 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u, i) => `  <url>
    <loc>${u}</loc>
    <lastmod>${HOJE}</lastmod>
    <priority>${i === 0 ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>
`);

console.log(`páginas geradas: ${paginas.map((p) => p.slug).join(', ')}`);
export const entradas = paginas.map((p) => p.slug);
