// Conteúdo das páginas de serviço. Cada página mira UMA busca principal (o Google escolhe uma página por busca).
// Regras: só prometer o que o site já garante; nunca dizer que domínio/hospedagem estão inclusos; sem portfólio ou depoimento inventado.

export const SITE = 'https://vitordemelo.com.br';

export const planos = [
  { tag: 'Começando agora', nome: 'Essencial', preco: 'R$ 690', desc: 'Um site simples, elegante e profissional para sua marca entrar no ar sem pesar no bolso.',
    itens: ['Página única, visual limpo', 'Botão de WhatsApp integrado', 'Perfeito no celular', 'No ar em até 5 dias'] },
  { tag: 'Mais escolhido', nome: 'Landing que converte', preco: 'R$ 1.490', hot: true, desc: 'Feita para campanha, lançamento e anúncio. Cada seção conduz o visitante ao contato.',
    itens: ['Design exclusivo, sem template', 'Texto de venda escrito com você', 'Animações e identidade aplicadas', 'Otimizada para o Google', 'No ar em 1 a 2 semanas'] },
  { tag: 'Completo', nome: 'Site institucional', preco: 'R$ 2.990', desc: 'O site inteiro da sua empresa, com várias páginas e painel para você editar sozinho.',
    itens: ['Até 6 seções ou páginas', 'Painel para editar o conteúdo', 'Treinamento de uso', '30 dias de ajustes inclusos'] },
];

const passos = `
<ol>
  <li><span><strong>Conversa.</strong> Você me conta o objetivo pelo WhatsApp ou numa chamada de 15 minutos.</span></li>
  <li><span><strong>Proposta.</strong> Valor fechado e prazo claro, por escrito, antes de qualquer pagamento.</span></li>
  <li><span><strong>Construção.</strong> Você acompanha e aprova cada etapa. Uma parte para começar, o restante só quando aprovar.</span></li>
  <li><span><strong>No ar.</strong> Publico, confiro no celular e no computador e entrego tudo funcionando, com 30 dias de ajustes inclusos.</span></li>
</ol>`;

export const paginas = [
  // ---------------------------------------------------------------- CRIAÇÃO DE SITES
  {
    slug: 'criacao-de-sites',
    menu: 'Sites',
    titulo: 'Criação de Sites Profissionais a partir de R$ 690 | Vitor de Melo',
    descricao: 'Criação de sites profissionais para empresas e profissionais: rápidos, bonitos e prontos para o Google. A partir de R$ 690, no ar em até 5 dias. Peça seu orçamento.',
    servico: { nome: 'Criação de sites profissionais', tipo: 'Criação de sites', preco: 690 },
    eyebrow: 'Criação de sites · São Paulo e todo o Brasil',
    h1: 'Criação de sites <i class="serif">profissionais.</i>',
    lead: 'Sites rápidos, bonitos no celular e com texto pensado para <strong>transformar visita em cliente</strong>. Você fala direto com quem desenvolve e recebe valor e prazo por escrito antes de começar.',
    wa: 'Olá! Vi a página de criação de sites e quero um orçamento.',
    fatos: [['R$ 690', 'a partir de, para o site Essencial'], ['5 dias', 'para o Essencial ir ao ar'], ['1h', 'para responder seu WhatsApp']],
    blocos: [
      { tipo: 'prose', html: `
<h2>Um site profissional <i class="serif">trabalha por você.</i></h2>
<p>Hoje, antes de ligar, mandar mensagem ou visitar, o cliente pesquisa. Se ele encontra um site lento, confuso ou que quebra no celular, vai para o concorrente sem nem avisar. Um site profissional resolve isso: <strong>passa confiança em segundos, explica o que você faz e leva a pessoa direto para o contato.</strong></p>
<p>Não é sobre ter "um site". É sobre ter um site que <strong>carrega rápido, aparece no Google e vende</strong>. É assim que eu desenvolvo cada projeto, do mais simples ao mais completo.</p>` },
      { tipo: 'cards', eyebrow: 'O que vem em todo site', h2: 'Feito para ser encontrado <i class="serif">e para vender.</i>', itens: [
        ['01', 'Perfeito no celular', 'A maioria dos seus clientes chega pelo celular. O site é pensado primeiro para a tela pequena.'],
        ['02', 'Carrega rápido', 'Site lento perde cliente. Imagens e código otimizados para abrir quase na hora.'],
        ['03', 'Pronto para o Google', 'Títulos, descrição, dados estruturados e sitemap configurados para o Google entender o seu negócio.'],
        ['04', 'WhatsApp a um toque', 'Botão que abre a conversa já com uma mensagem pronta. Menos atrito, mais contatos.'],
        ['05', 'Texto que convence', 'Escrevo junto com você as frases que explicam o seu diferencial e levam ao botão.'],
        ['06', 'Você aprova cada etapa', 'Nada vai ao ar sem o seu ok. E o restante do pagamento só depois que você aprovar.'],
      ] },
      { tipo: 'planos', h2: 'Escolha o tamanho <i class="serif">do seu site.</i>' },
      { tipo: 'prose', html: `
<h2>Qual site é o certo <i class="serif">para você?</i></h2>
<h3>Essencial: para começar com presença profissional</h3>
<p>Uma página única, elegante, com quem você é, o que faz, como contratar e o botão do WhatsApp. Ideal para profissionais liberais, prestadores de serviço e negócios que ainda não têm site ou têm um site que envergonha.</p>
<h3>Landing page: para anúncios e campanhas</h3>
<p>Uma página com um único objetivo, como gerar contatos, vendas ou inscrições. É o que você precisa se vai investir em Google Ads, Instagram ou Facebook. <a href="/landing-page/">Veja como funciona a landing page</a>.</p>
<h3>Site institucional: para empresas com vários serviços</h3>
<p>Várias páginas (empresa, serviços, contato e o que mais fizer sentido) e um painel para você atualizar textos e imagens sozinho.</p>
<h3>Precisa de login, pagamentos ou área do cliente?</h3>
<p>Aí já é um sistema. <a href="/sistemas-web/">Conheça os sistemas web sob medida</a>.</p>` },
      { tipo: 'prose', html: `
<h2>Como funciona, <i class="serif">do oi ao site no ar.</i></h2>
${passos}` },
      { tipo: 'prose', html: `
<h2>Para quem <i class="serif">eu faço sites.</i></h2>
<ul>
  <li><span><strong>Profissionais liberais:</strong> advogados, dentistas, psicólogos, nutricionistas, arquitetos e consultores.</span></li>
  <li><span><strong>Clínicas, consultórios e estúdios</strong> que querem receber agendamentos pelo WhatsApp.</span></li>
  <li><span><strong>Restaurantes, cafés e delivery</strong> que precisam de cardápio, localização e contato num lugar só.</span></li>
  <li><span><strong>Prestadores de serviço</strong> (reformas, eventos, beleza, manutenção) que vivem de indicação e querem aparecer no Google.</span></li>
  <li><span><strong>Pequenas e médias empresas</strong> que precisam passar a mesma confiança que a concorrência grande.</span></li>
</ul>
<p>O atendimento é online, pelo WhatsApp e por videochamada. Atendo <strong>São Paulo e empresas de todo o Brasil</strong> com o mesmo cuidado.</p>` },
      { tipo: 'faq' },
      { tipo: 'relacionados' },
    ],
    faq: [
      ['Quanto custa criar um site profissional?', 'O site Essencial, de página única, começa em R$ 690. Landing pages começam em R$ 1.490 e sites institucionais em R$ 2.990. O valor final é fechado por escrito antes de começar. <a href="/quanto-custa-um-site/">Entenda o que muda o preço de um site</a>.'],
      ['Quanto tempo leva para o site ficar pronto?', 'O Essencial fica no ar em até 5 dias. Landing pages levam de 1 a 2 semanas. Sites institucionais têm o prazo definido na proposta, de acordo com o número de páginas.'],
      ['O domínio e a hospedagem estão inclusos?', 'Não. O domínio (o endereço, como seunegocio.com.br) e a hospedagem são contratados à parte e ficam no seu nome, o que é bom: o endereço do site é seu. Eu oriento na escolha e cuido da configuração para o site ir ao ar.'],
      ['Posso alterar o site depois de pronto?', 'Todo projeto tem 30 dias de ajustes inclusos depois de publicado. No site institucional você também ganha um painel para editar textos e imagens sozinho.'],
      ['Meu site vai aparecer no Google?', 'O site é entregue com a estrutura que o Google usa para entender e indexar páginas: títulos, descrição, velocidade, dados estruturados e sitemap. A posição nas buscas depende também da concorrência e do tempo, então ninguém sério promete primeiro lugar garantido.'],
      ['Vocês atendem fora de São Paulo?', 'Sim. O atendimento é online, pelo WhatsApp e por videochamada, para empresas de todo o Brasil.'],
    ],
  },

  // ---------------------------------------------------------------- LANDING PAGE
  {
    slug: 'landing-page',
    menu: 'Landing page',
    titulo: 'Landing Page Profissional que Converte | a partir de R$ 1.490',
    descricao: 'Criação de landing page profissional para anúncios, lançamentos e campanhas: design exclusivo, texto de venda e carregamento rápido. A partir de R$ 1.490, no ar em 1 a 2 semanas.',
    servico: { nome: 'Criação de landing page', tipo: 'Landing page', preco: 1490 },
    eyebrow: 'Landing page · para anúncios e campanhas',
    h1: 'Landing page que <i class="serif">converte.</i>',
    lead: 'Uma página com <strong>um único objetivo</strong>: transformar o clique do seu anúncio em contato, venda ou inscrição. Design exclusivo, texto de venda escrito com você e carregamento rápido no celular.',
    wa: 'Olá! Vi a página de landing page e quero um orçamento.',
    fatos: [['R$ 1.490', 'a partir de'], ['1 a 2 semanas', 'para ir ao ar'], ['1h', 'para responder seu WhatsApp']],
    blocos: [
      { tipo: 'prose', html: `
<h2>O que é uma landing page <i class="serif">e por que ela vende mais.</i></h2>
<p>Landing page (ou página de destino) é uma página feita para <strong>uma única ação</strong>: chamar no WhatsApp, preencher um formulário, comprar ou se inscrever. Diferente de um site comum, ela não tem menu cheio de caminhos para distrair. Cada seção existe para responder a próxima dúvida do visitante e levar ele até o botão.</p>
<p>É por isso que ela é a página certa para quem <strong>investe em anúncios</strong>. Você paga por cada clique, então cada visita precisa ter a melhor chance possível de virar cliente.</p>` },
      { tipo: 'cards', eyebrow: 'O que faz uma landing converter', h2: 'Cada seção tem <i class="serif">um trabalho.</i>', itens: [
        ['01', 'Promessa clara no topo', 'Em três segundos a pessoa entende o que você oferece e para quem é.'],
        ['02', 'Benefícios, não só características', 'O texto fala do resultado que o cliente quer, na língua dele.'],
        ['03', 'Prova e confiança', 'Garantias, números reais, como funciona e quem está por trás.'],
        ['04', 'Respostas antes da dúvida', 'Perguntas frequentes que derrubam as objeções mais comuns.'],
        ['05', 'Um botão, um caminho', 'Chamadas para a mesma ação ao longo da página, sem distração.'],
        ['06', 'Rápida e pronta para medir', 'Carrega rápido no celular e fica pronta para as tags de conversão do Google Ads e da Meta.'],
      ] },
      { tipo: 'prose', html: `
<h2>Quando usar <i class="serif">uma landing page.</i></h2>
<ul>
  <li><span><strong>Campanhas no Google Ads, Instagram ou Facebook</strong>: o anúncio leva para uma página que fala exatamente do que foi anunciado.</span></li>
  <li><span><strong>Lançamento de produto, curso ou serviço novo</strong>, com data, oferta e inscrição.</span></li>
  <li><span><strong>Captação de contatos (leads)</strong> para a sua equipe comercial ou para o seu WhatsApp.</span></li>
  <li><span><strong>Um serviço principal</strong> que merece uma página só dele, sem competir com o resto do site.</span></li>
  <li><span><strong>Eventos e promoções</strong> com prazo, em que a página precisa ir ao ar rápido.</span></li>
</ul>
<p>Se você precisa apresentar a empresa inteira, com vários serviços, o caminho é um <a href="/criacao-de-sites/">site institucional</a>. E nada impede de ter os dois: o site para quem procura a empresa e a landing para quem vem do anúncio.</p>` },
      { tipo: 'planos', h2: 'Landing page <i class="serif">e outros formatos.</i>' },
      { tipo: 'prose', html: `
<h2>Como eu construo <i class="serif">a sua landing.</i></h2>
${passos}
<p>Antes do design, a gente define juntos <strong>quem é o público, qual é a oferta e qual ação a pessoa deve tomar</strong>. A página é desenhada a partir disso, e não o contrário.</p>` },
      { tipo: 'faq' },
      { tipo: 'relacionados' },
    ],
    faq: [
      ['Quanto custa uma landing page?', 'A landing page começa em R$ 1.490, com design exclusivo, texto de venda escrito com você e otimização para o Google. O valor final é fechado por escrito antes de começar.'],
      ['Quanto tempo leva para ficar pronta?', 'Normalmente de 1 a 2 semanas, contando a definição da oferta, o texto, o design e os seus ajustes.'],
      ['Landing page ou site: qual eu preciso?', 'Se você vai anunciar ou tem um objetivo único (contato, venda, inscrição), landing page. Se precisa apresentar a empresa e vários serviços, site institucional. Muitas empresas usam os dois.'],
      ['A landing funciona com Google Ads e Meta Ads?', 'Sim. Ela é feita para receber tráfego de anúncio: carrega rápido, tem a mensagem alinhada ao anúncio e fica pronta para instalar as tags de conversão do Google Ads e da Meta.'],
      ['O domínio e a hospedagem estão inclusos?', 'Não. Domínio e hospedagem são contratados à parte e ficam no seu nome. Eu oriento na escolha e cuido da configuração para a página ir ao ar.'],
      ['E se eu quiser mudar algo depois?', 'Todo projeto tem 30 dias de ajustes inclusos depois de publicado.'],
    ],
  },

  // ---------------------------------------------------------------- APLICATIVOS
  {
    slug: 'criacao-de-aplicativos',
    menu: 'Aplicativos',
    titulo: 'Criação de Aplicativos para Android e iPhone | Vitor de Melo',
    descricao: 'Desenvolvimento de aplicativos sob medida para Android, iPhone e web: agendamentos, área do cliente, pedidos e pagamentos. Orçamento por escrito e resposta em até 1h.',
    servico: { nome: 'Desenvolvimento de aplicativos', tipo: 'Desenvolvimento de aplicativos' },
    eyebrow: 'Aplicativos · Android, iPhone e web',
    h1: 'Criação de <i class="serif">aplicativos.</i>',
    lead: 'Aplicativos sob medida para <strong>atender, vender e fidelizar seus clientes pelo celular</strong>: agendamentos, pedidos, pagamentos e área do cliente. Do primeiro rascunho à publicação.',
    wa: 'Olá! Vi a página de aplicativos e quero conversar sobre um app.',
    fatos: [['Android e iPhone', 'ou direto no navegador'], ['Por escrito', 'valor e prazo antes de começar'], ['1h', 'para responder seu WhatsApp']],
    blocos: [
      { tipo: 'prose', html: `
<h2>Um app que o seu cliente <i class="serif">usa de verdade.</i></h2>
<p>Aplicativo bom não é o que tem mais funções. É o que resolve <strong>uma coisa importante, rápido e sem complicação</strong>: marcar um horário, refazer um pedido, acompanhar um serviço, pagar sem sair do celular.</p>
<p>Por isso cada projeto começa entendendo o seu cliente e o seu processo. A partir daí eu desenho as telas, você aprova, e só então o app é construído.</p>` },
      { tipo: 'cards', eyebrow: 'O que o seu app pode ter', h2: 'Funções que <i class="serif">fazem diferença.</i>', itens: [
        ['01', 'Login e área do cliente', 'Cada cliente com o seu histórico, dados e pedidos.'],
        ['02', 'Agendamento', 'Horários disponíveis em tempo real, confirmação e lembrete.'],
        ['03', 'Pedidos e catálogo', 'Produtos, carrinho e acompanhamento do pedido.'],
        ['04', 'Pagamentos', 'Pix e cartão integrados, sem o cliente sair do app.'],
        ['05', 'Notificações', 'Avisos de confirmação, promoção e status direto na tela do celular.'],
        ['06', 'Painel de gestão', 'Você acompanha tudo pelo computador: clientes, pedidos e números.'],
      ] },
      { tipo: 'prose', html: `
<h2>App na loja <i class="serif">ou no navegador?</i></h2>
<h3>Aplicativo nas lojas (Android e iPhone)</h3>
<p>Fica na Google Play e na App Store, com acesso mais completo aos recursos do celular. É o caminho quando a presença nas lojas faz parte da estratégia. As lojas cobram taxas do dono do app (a Apple, anual; o Google, uma vez) e cada atualização passa pela revisão delas.</p>
<h3>Aplicativo web (instalável pelo navegador)</h3>
<p>Abre pelo navegador e pode ser instalado na tela inicial como um app, sem passar pelas lojas. Costuma sair <strong>mais rápido e mais barato</strong>, e as atualizações chegam na hora para todo mundo. Para muitos negócios, é o melhor ponto de partida.</p>
<p>Na conversa inicial eu te digo, com sinceridade, qual dos dois faz mais sentido para o seu caso.</p>` },
      { tipo: 'prose', html: `
<h2>Quanto custa <i class="serif">um aplicativo?</i></h2>
<p>Depende do que ele precisa fazer. O que mais pesa no valor:</p>
<ul>
  <li><span><strong>Quantidade de telas e funções</strong> (um app de agendamento é bem diferente de um marketplace).</span></li>
  <li><span><strong>Integrações</strong> com pagamento, sistemas que você já usa, WhatsApp ou ERP.</span></li>
  <li><span><strong>Painel de gestão</strong> para a sua equipe operar o app.</span></li>
  <li><span><strong>Publicação nas lojas</strong> ou versão web.</span></li>
</ul>
<p>O orçamento é sob consulta e sai <strong>por escrito, com valor fechado e prazo</strong>. Se fizer sentido, começamos por uma primeira versão enxuta com o essencial e evoluímos com o uso real.</p>` },
      { tipo: 'prose', html: `
<h2>Como funciona <i class="serif">o projeto.</i></h2>
${passos}` },
      { tipo: 'faq' },
      { tipo: 'relacionados' },
    ],
    faq: [
      ['Quanto custa criar um aplicativo?', 'Depende das telas, funções e integrações. O orçamento é sob consulta e sai por escrito, com valor fechado e prazo, antes de começar.'],
      ['Quanto tempo leva para desenvolver um app?', 'O prazo é definido na proposta, de acordo com as funções. Começar por uma primeira versão enxuta encurta bastante o caminho até o app estar nas mãos dos clientes.'],
      ['Vocês desenvolvem para Android e iPhone?', 'Sim. Desenvolvo aplicativos para Android e iPhone e também aplicativos web, que funcionam no navegador e podem ser instalados na tela inicial.'],
      ['O app pode ter pagamento por Pix e cartão?', 'Sim. Pagamentos por Pix e cartão podem ser integrados ao app, junto com área do cliente, agendamentos e notificações.'],
      ['Dá para começar pequeno e crescer depois?', 'Sim, e geralmente é o melhor caminho: uma primeira versão com o essencial, colocada em uso rápido, e as próximas funções guiadas pelo que os clientes realmente usam.'],
      ['Atendem empresas fora de São Paulo?', 'Sim. O atendimento é online, pelo WhatsApp e por videochamada, para empresas de todo o Brasil.'],
    ],
  },

  // ---------------------------------------------------------------- SISTEMAS WEB
  {
    slug: 'sistemas-web',
    menu: 'Sistemas',
    titulo: 'Sistemas Web Sob Medida para Empresas | Vitor de Melo',
    descricao: 'Desenvolvimento de sistemas web sob medida: agendamentos, área do cliente, pagamentos, painéis de gestão e integrações com ERP e WhatsApp. Valor e prazo por escrito.',
    servico: { nome: 'Desenvolvimento de sistemas web sob medida', tipo: 'Desenvolvimento de sistemas' },
    eyebrow: 'Sistemas web · sob medida para a sua empresa',
    h1: 'Sistemas web <i class="serif">sob medida.</i>',
    lead: 'Quando a planilha não dá mais conta, um sistema feito para o <strong>seu</strong> processo organiza a operação, elimina retrabalho e mostra os números que importam. No navegador, no computador e no celular.',
    wa: 'Olá! Vi a página de sistemas web e quero conversar sobre um sistema.',
    fatos: [['Sob medida', 'para o seu processo, não o contrário'], ['Por escrito', 'valor e prazo antes de começar'], ['1h', 'para responder seu WhatsApp']],
    blocos: [
      { tipo: 'prose', html: `
<h2>Quando a sua empresa <i class="serif">precisa de um sistema.</i></h2>
<ul>
  <li><span>A operação depende de <strong>várias planilhas</strong> que ninguém sabe qual está atualizada.</span></li>
  <li><span>A equipe <strong>digita a mesma informação</strong> em dois ou três lugares.</span></li>
  <li><span>Os clientes pedem status pelo WhatsApp e alguém precisa <strong>parar para responder</strong>.</span></li>
  <li><span>Você só sabe como o mês foi <strong>depois que ele acabou</strong>.</span></li>
  <li><span>As ferramentas prontas <strong>obrigam você a mudar o jeito</strong> que a empresa funciona.</span></li>
</ul>
<p>Se você se reconheceu em dois desses pontos, um sistema web sob medida provavelmente se paga rápido em tempo economizado e erro evitado.</p>` },
      { tipo: 'cards', eyebrow: 'Exemplos do que dá para construir', h2: 'O processo da sua empresa, <i class="serif">automatizado.</i>', itens: [
        ['01', 'Agendamento online', 'Agenda com horários, profissionais, confirmações e lembretes automáticos.'],
        ['02', 'Área do cliente', 'Portal onde o cliente acompanha pedidos, documentos, boletos e status.'],
        ['03', 'Pedidos e estoque', 'Entrada de pedidos, separação, estoque e entrega num fluxo só.'],
        ['04', 'Financeiro e cobranças', 'Cobranças por Pix e cartão, conciliação e relatórios.'],
        ['05', 'Painéis de gestão', 'Os números do negócio atualizados, sem montar relatório na mão.'],
        ['06', 'Integrações', 'Conexão com ERPs (como NetSuite), WhatsApp, planilhas e meios de pagamento.'],
      ] },
      { tipo: 'prose', html: `
<h2>Como eu desenvolvo <i class="serif">o seu sistema.</i></h2>
<p>Antes de qualquer tela, eu entendo <strong>como o trabalho acontece hoje</strong>: quem faz o quê, onde a informação nasce e onde ela trava. O sistema é desenhado a partir disso.</p>
<p>A entrega é feita <strong>em etapas que você testa</strong>, com o seu time usando de verdade, e não num "grande dia da entrega" cheio de surpresas. Login, permissões por perfil e cuidado com os dados dos seus clientes fazem parte do projeto desde o início.</p>
${passos}` },
      { tipo: 'prose', html: `
<h2>Sistema pronto <i class="serif">ou sob medida?</i></h2>
<p>Se existe uma ferramenta pronta que resolve 90% do seu problema, use a ferramenta pronta. Eu mesmo vou te dizer isso. O sistema sob medida vale a pena quando o seu processo é <strong>o seu diferencial</strong>, quando as ferramentas prontas exigem gambiarras ou quando você precisa <strong>integrar</strong> o que já usa em vez de trocar tudo.</p>
<p>E se a necessidade for mais simples, como apresentar a empresa e receber contatos, talvez você precise de um <a href="/criacao-de-sites/">site</a> ou de um <a href="/criacao-de-aplicativos/">aplicativo</a>, e não de um sistema.</p>` },
      { tipo: 'faq' },
      { tipo: 'relacionados' },
    ],
    faq: [
      ['Quanto custa um sistema web sob medida?', 'Depende das funções, do número de perfis de usuário e das integrações. O orçamento é sob consulta e sai por escrito, com valor fechado e prazo, antes de começar.'],
      ['Quanto tempo leva para desenvolver?', 'O prazo é definido na proposta. Como a entrega é feita em etapas, a primeira parte do sistema começa a ser usada antes do projeto inteiro terminar.'],
      ['O sistema integra com o que eu já uso?', 'Sim. É possível integrar com ERPs (como NetSuite), WhatsApp, planilhas, meios de pagamento e outras ferramentas que tenham integração disponível.'],
      ['Funciona no celular?', 'Sim. O sistema roda no navegador e é pensado para funcionar bem no computador e no celular.'],
      ['Sistema web ou aplicativo?', 'Para uso interno da equipe e portais de cliente, o sistema web costuma ser o melhor caminho. Se o foco é o cliente final usando pelo celular todo dia, vale considerar um aplicativo.'],
      ['Atendem empresas fora de São Paulo?', 'Sim. O atendimento é online, pelo WhatsApp e por videochamada, para empresas de todo o Brasil.'],
    ],
  },

  // ---------------------------------------------------------------- QUANTO CUSTA UM SITE
  {
    slug: 'quanto-custa-um-site',
    menu: 'Preços',
    artigo: true,
    titulo: 'Quanto Custa um Site em 2026? Preços e o que Muda o Valor',
    descricao: 'Quanto custa fazer um site em 2026: preços de site simples, landing page e site institucional, custos de domínio e hospedagem e o que faz o valor subir. Guia direto ao ponto.',
    eyebrow: 'Guia de preços · atualizado em novembro de 2026',
    h1: 'Quanto custa <i class="serif">um site?</i>',
    lead: 'Resposta direta: <strong>um site profissional simples começa em R$ 690</strong>, uma landing page em R$ 1.490 e um site institucional em R$ 2.990. Abaixo, o que muda esse valor e quais custos vêm à parte.',
    wa: 'Olá! Li o guia de quanto custa um site e quero um orçamento.',
    fatos: [['R$ 690', 'site de página única'], ['R$ 1.490', 'landing page'], ['R$ 2.990', 'site institucional']],
    blocos: [
      { tipo: 'prose', html: `
<h2>Preços, <i class="serif">sem rodeio.</i></h2>
<p>Estes são os valores de partida dos meus planos. O valor final de cada projeto é fechado <strong>por escrito, antes de começar</strong>.</p>
<table class="pg-table">
  <thead><tr><th>Tipo de site</th><th>A partir de</th><th>Prazo</th><th>Para quem</th></tr></thead>
  <tbody>
    <tr><td>Essencial (página única)</td><td>R$ 690</td><td>até 5 dias</td><td>Quem está começando ou precisa sair do zero</td></tr>
    <tr><td>Landing page</td><td>R$ 1.490</td><td>1 a 2 semanas</td><td>Anúncios, lançamentos e captação de contatos</td></tr>
    <tr><td>Site institucional</td><td>R$ 2.990</td><td>na proposta</td><td>Empresas com vários serviços</td></tr>
    <tr><td>Sistemas e aplicativos</td><td>sob consulta</td><td>na proposta</td><td>Login, pagamentos, área do cliente, gestão</td></tr>
  </tbody>
</table>` },
      { tipo: 'prose', html: `
<h2>O que faz o preço <i class="serif">de um site subir.</i></h2>
<ol>
  <li><span><strong>Número de páginas.</strong> Uma página única é bem diferente de um site com dez páginas de serviço.</span></li>
  <li><span><strong>Design exclusivo ou modelo.</strong> Um layout desenhado para a sua marca leva mais tempo que adaptar um modelo pronto.</span></li>
  <li><span><strong>Textos.</strong> Escrever o texto de venda junto com você é trabalho, e é o que mais influencia a conversão.</span></li>
  <li><span><strong>Funções especiais.</strong> Agendamento, loja virtual, área de membros e formulários com regras aumentam o escopo.</span></li>
  <li><span><strong>Integrações</strong> com CRM, ERP, meios de pagamento ou ferramentas de e-mail.</span></li>
  <li><span><strong>Painel para editar sozinho.</strong> Dá autonomia, mas precisa ser configurado e ensinado.</span></li>
  <li><span><strong>Urgência.</strong> Prazo apertado exige reorganizar a agenda.</span></li>
</ol>` },
      { tipo: 'prose', html: `
<h2>Custos que vêm <i class="serif">além do desenvolvimento.</i></h2>
<p>Todo site precisa de duas coisas para ficar no ar, e elas são contratadas <strong>à parte, no seu nome</strong>. Isso é bom: o endereço do seu site é seu, e não de quem desenvolveu.</p>
<ul>
  <li><span><strong>Domínio:</strong> o endereço (como seunegocio.com.br). Para .com.br, é registrado no Registro.br com uma taxa anual baixa.</span></li>
  <li><span><strong>Hospedagem:</strong> onde o site fica guardado. O custo varia muito: sites leves e rápidos podem ter um custo bem baixo; sistemas com banco de dados custam mais.</span></li>
  <li><span><strong>E-mail profissional (opcional):</strong> contato@seunegocio.com.br, cobrado pelo provedor de e-mail.</span></li>
</ul>
<p>Desconfie de preço que parece completo demais: às vezes o domínio fica no nome de quem fez o site, e trocar de fornecedor vira um problema.</p>` },
      { tipo: 'prose', html: `
<h2>Construtor de sites <i class="serif">ou site sob medida?</i></h2>
<p>Construtores de site (as plataformas de "arraste e solte") cobram <strong>mensalidade</strong> e são uma boa opção para testar uma ideia sozinho. O custo é que você paga para sempre, fica preso à plataforma e o resultado costuma ficar parecido com o de todo mundo, além de nem sempre ser rápido no celular.</p>
<p>Um site sob medida tem <strong>um investimento de desenvolvimento</strong>, é feito para a sua marca e para carregar rápido, e você só paga os custos de domínio e hospedagem depois. Para quem quer ser levado a sério e aparecer no Google, costuma valer mais a pena.</p>` },
      { tipo: 'prose', html: `
<h2>Como não pagar caro <i class="serif">por um site ruim.</i></h2>
<ul>
  <li><span><strong>Valor e prazo por escrito</strong>, com o que está e o que não está incluso.</span></li>
  <li><span><strong>Domínio no seu nome</strong>, sempre.</span></li>
  <li><span><strong>Pagamento em etapas</strong>, com uma parte só depois de aprovar o resultado.</span></li>
  <li><span><strong>Teste a velocidade no celular</strong> no PageSpeed Insights, a ferramenta gratuita do Google.</span></li>
  <li><span><strong>Fale com quem vai fazer</strong>, não só com quem vende.</span></li>
</ul>
<p>É exatamente assim que eu trabalho. Se quiser ver os planos em detalhe, eles estão abaixo.</p>` },
      { tipo: 'planos', h2: 'Os planos <i class="serif">em detalhe.</i>' },
      { tipo: 'faq' },
      { tipo: 'relacionados' },
    ],
    faq: [
      ['Quanto custa um site simples?', 'Um site profissional de página única, com WhatsApp e pronto para celular, começa em R$ 690 e fica no ar em até 5 dias.'],
      ['Quanto custa uma landing page?', 'Uma landing page com design exclusivo e texto de venda começa em R$ 1.490 e fica pronta em 1 a 2 semanas.'],
      ['Quanto custa um site institucional?', 'Um site institucional com até 6 seções ou páginas e painel para editar o conteúdo começa em R$ 2.990.'],
      ['Domínio e hospedagem estão inclusos no preço?', 'Não. Domínio e hospedagem são contratados à parte e ficam no seu nome. Eu oriento na escolha e cuido da configuração para o site ir ao ar.'],
      ['Como é feito o pagamento?', 'Uma parte para começar e o restante só quando você aprovar o resultado. Prazo e valor ficam combinados por escrito.'],
      ['Vale a pena pagar barato em um site?', 'Vale pagar o justo por um site que carrega rápido, funciona no celular e explica bem o seu negócio. Um site barato que ninguém encontra ou que afasta clientes sai caro.'],
    ],
  },
];
