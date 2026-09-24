/* ═══════════════════════════════════════════════════════════════════════════
   SERVIGÁS — núcleo da loja (compartilhado pelos 3 modelos de design)
   ═══════════════════════════════════════════════════════════════════════════
   Aqui fica tudo o que NÃO é visual: catálogo, carrinho, WhatsApp, modal do
   produto e gaveta do carrinho. Cada modelo (a-oficina, b-quente-fria,
   c-planta) só desenha a página do seu jeito e chama estas funções.

   ⚙️ WHATSAPP: número da loja, só dígitos, com 55 na frente (55 + DDD + número).
   Hoje: (47) 9 9150-0164.                                                    */
const WHATSAPP = '5547991500164';

/* 🗄️ BANCO DE DADOS (Supabase) — os produtos vêm da aba "Loja" do sistema de
   gestão. Chave "publishable": feita para ficar pública, só leitura.        */
const SUPABASE_URL = 'https://nwjyxpsbvcvaxfaoeedu.supabase.co';
const SUPABASE_ANON = 'sb_publishable_R_yCIszFgcdWSNjkOWuHZg_XsmDwX-S';

/* 📦 PRODUTOS DE DEMONSTRAÇÃO — só aparecem se o banco estiver fora do ar.  */
const PRODUTOS_EXEMPLO = [

  /* ──────────── AQUECEDORES A GÁS ──────────── */
  { id: 'aq-rheem-18', nome: 'Aquecedor a gás Rheem 18 litros digital', marca: 'Rheem',
    categoria: 'aquecedores', sub: 'Rheem', preco: 2590, precoAntigo: 2890, destaque: false,
    descricao: 'Aquecedor de passagem digital com exaustão forçada, ideal para atender 2 pontos de água quente simultâneos com conforto.',
    specs: ['Vazão: 18 L/min', 'Gás: GN ou GLP', 'Exaustão forçada', 'Painel digital', 'Garantia de 5 anos'],
    fotos: [] },

  { id: 'aq-rheem-26', nome: 'Aquecedor a gás Rheem 26 litros digital', marca: 'Rheem',
    categoria: 'aquecedores', sub: 'Rheem', preco: 3790, precoAntigo: null, destaque: false,
    descricao: 'Alta vazão para residências com 3 ou mais pontos de água quente. Controle preciso de temperatura.',
    specs: ['Vazão: 26 L/min', 'Gás: GN ou GLP', 'Exaustão forçada', 'Painel digital', 'Garantia de 5 anos'],
    fotos: [] },

  { id: 'aq-rinnai-15', nome: 'Aquecedor a gás Rinnai REU-E15 15 litros', marca: 'Rinnai',
    categoria: 'aquecedores', sub: 'Rinnai', preco: 1990, precoAntigo: null, destaque: true,
    descricao: 'O queridinho das instalações residenciais: compacto, silencioso e muito econômico. Atende banho + pia com folga.',
    specs: ['Vazão: 15 L/min', 'Gás: GN ou GLP', 'Exaustão forçada', 'Bivolt', 'Garantia de 5 anos'],
    fotos: [] },

  { id: 'aq-rinnai-21', nome: 'Aquecedor a gás Rinnai REU-E21 21 litros', marca: 'Rinnai',
    categoria: 'aquecedores', sub: 'Rinnai', preco: 2890, precoAntigo: null, destaque: true,
    descricao: 'Equilíbrio perfeito entre vazão e economia. Atende 2 chuveiros simultâneos mantendo a temperatura estável.',
    specs: ['Vazão: 21 L/min', 'Gás: GN ou GLP', 'Exaustão forçada', 'Controle digital de temperatura', 'Garantia de 5 anos'],
    fotos: [] },

  { id: 'aq-rinnai-27', nome: 'Aquecedor a gás Rinnai REU-E27 27 litros', marca: 'Rinnai',
    categoria: 'aquecedores', sub: 'Rinnai', preco: 3990, precoAntigo: null, destaque: false,
    descricao: 'Para casas grandes e alto consumo: vazão de sobra para vários pontos ao mesmo tempo, com tecnologia japonesa.',
    specs: ['Vazão: 27 L/min', 'Gás: GN ou GLP', 'Exaustão forçada', 'Controle digital de temperatura', 'Garantia de 5 anos'],
    fotos: [] },

  { id: 'aq-komeco-16', nome: 'Aquecedor a gás Komeco KO 16D 16 litros', marca: 'Komeco',
    categoria: 'aquecedores', sub: 'Komeco', preco: 1690, precoAntigo: 1890, destaque: false,
    descricao: 'Ótimo custo-benefício com display digital e chama modulante. Ideal para apartamentos e casas menores.',
    specs: ['Vazão: 16 L/min', 'Gás: GN ou GLP', 'Exaustão forçada', 'Display digital', 'Garantia de 3 anos'],
    fotos: [] },

  { id: 'aq-komeco-22', nome: 'Aquecedor a gás Komeco KO 22D 22 litros', marca: 'Komeco',
    categoria: 'aquecedores', sub: 'Komeco', preco: 2490, precoAntigo: null, destaque: false,
    descricao: 'Vazão generosa por um preço acessível. Atende banheira e chuveiros com estabilidade de temperatura.',
    specs: ['Vazão: 22 L/min', 'Gás: GN ou GLP', 'Exaustão forçada', 'Display digital', 'Garantia de 3 anos'],
    fotos: [] },

  { id: 'aq-lorenz-15', nome: 'Aquecedor a gás Lorenzetti LZ 1600DE 15 litros', marca: 'Lorenzetti',
    categoria: 'aquecedores', sub: 'Lorenzetti', preco: 1590, precoAntigo: null, destaque: false,
    descricao: 'Marca brasileira consagrada, fácil manutenção e peças sempre disponíveis. Excelente primeira instalação.',
    specs: ['Vazão: 15 L/min', 'Gás: GN ou GLP', 'Exaustão forçada', 'Acendimento eletrônico', 'Garantia de 3 anos'],
    fotos: [] },

  { id: 'aq-lorenz-25', nome: 'Aquecedor a gás Lorenzetti LZ 2500DE 25 litros', marca: 'Lorenzetti',
    categoria: 'aquecedores', sub: 'Lorenzetti', preco: 2790, precoAntigo: null, destaque: false,
    descricao: 'Alta vazão nacional com comando digital de temperatura e proteção contra superaquecimento.',
    specs: ['Vazão: 25 L/min', 'Gás: GN ou GLP', 'Exaustão forçada', 'Comando digital', 'Garantia de 3 anos'],
    fotos: [] },

  /* ──────────── BOMBAS PRESSURIZADORAS ──────────── */
  { id: 'bb-komeco-120', nome: 'Bomba pressurizadora Komeco TP 820 G2 120W', marca: 'Komeco',
    categoria: 'bombas', sub: 'Komeco', preco: 890, precoAntigo: 990, destaque: false,
    descricao: 'Acaba com o banho fraco: pressuriza chuveiro e aquecedor com acionamento automático e operação silenciosa.',
    specs: ['Potência: 120 W', 'Vazão máx.: 30 L/min', 'Acionamento automático por fluxo', 'Silenciosa', 'Garantia de 2 anos'],
    fotos: [] },

  { id: 'bb-komeco-245', nome: 'Bomba pressurizadora Komeco TP 825 G4 245W', marca: 'Komeco',
    categoria: 'bombas', sub: 'Komeco', preco: 1190, precoAntigo: null, destaque: false,
    descricao: 'Mais potência para casas com 2 banheiros ou tubulação longa. Pressão constante em todos os pontos.',
    specs: ['Potência: 245 W', 'Vazão máx.: 40 L/min', 'Acionamento automático por fluxo', 'Corpo em latão', 'Garantia de 2 anos'],
    fotos: [] },

  { id: 'bb-rinnai-250', nome: 'Bomba pressurizadora Rinnai RB 250W', marca: 'Rinnai',
    categoria: 'bombas', sub: 'Rinnai', preco: 1290, precoAntigo: null, destaque: true,
    descricao: 'Qualidade Rinnai também na pressurização: robusta, estável e perfeita para trabalhar junto com o aquecedor.',
    specs: ['Potência: 250 W', 'Vazão máx.: 42 L/min', 'Acionamento automático', 'Baixo ruído', 'Garantia de 2 anos'],
    fotos: [] },

  /* ──────────── MANGUEIRAS ──────────── */
  { id: 'mg-gas-120', nome: 'Mangueira de gás flexível inox 1,20 m', marca: 'Universal',
    categoria: 'mangueiras', sub: 'Gás', preco: 89, precoAntigo: null, destaque: false,
    descricao: 'Mangueira em aço inox trançado com certificação, conexões 1/2" — segurança total na ligação do gás.',
    specs: ['Comprimento: 1,20 m', 'Conexão: 1/2 pol.', 'Aço inox trançado', 'Certificada NBR 14177'],
    fotos: [] },

  { id: 'mg-gas-200', nome: 'Mangueira de gás flexível inox 2,00 m', marca: 'Universal',
    categoria: 'mangueiras', sub: 'Gás', preco: 129, precoAntigo: null, destaque: false,
    descricao: 'Versão mais longa para instalações onde o ponto de gás fica distante do aquecedor.',
    specs: ['Comprimento: 2,00 m', 'Conexão: 1/2 pol.', 'Aço inox trançado', 'Certificada NBR 14177'],
    fotos: [] },

  { id: 'mg-agua-40', nome: 'Ligação flexível de água quente 40 cm', marca: 'Universal',
    categoria: 'mangueiras', sub: 'Água', preco: 45, precoAntigo: null, destaque: false,
    descricao: 'Flexível trançado em inox próprio para água quente, faz a ligação limpa entre o aquecedor e a tubulação.',
    specs: ['Comprimento: 40 cm', 'Conexão: 1/2 pol.', 'Suporta água quente', 'Inox trançado'],
    fotos: [] },

  /* ──────────── REGISTROS DE GÁS ──────────── */
  { id: 'rg-esfera-12', nome: 'Registro de gás esfera 1/2"', marca: 'Universal',
    categoria: 'registros', sub: '', preco: 55, precoAntigo: null, destaque: false,
    descricao: 'Registro tipo esfera com corpo em latão, fechamento rápido a 90° — item obrigatório de segurança.',
    specs: ['Bitola: 1/2 pol.', 'Corpo em latão', 'Fechamento 1/4 de volta', 'Certificado'],
    fotos: [] },

  { id: 'rg-esfera-34', nome: 'Registro de gás esfera 3/4"', marca: 'Universal',
    categoria: 'registros', sub: '', preco: 75, precoAntigo: null, destaque: false,
    descricao: 'Para tubulações de maior bitola, mesma segurança e qualidade do modelo 1/2".',
    specs: ['Bitola: 3/4 pol.', 'Corpo em latão', 'Fechamento 1/4 de volta', 'Certificado'],
    fotos: [] },

  /* ──────────── ACABAMENTOS ──────────── */
  { id: 'ac-canopla-inox', nome: 'Kit canopla de acabamento inox', marca: 'Universal',
    categoria: 'acabamentos', sub: '', preco: 69, precoAntigo: null, destaque: false,
    descricao: 'Acabamento em inox escovado para a passagem do duto na parede — instalação com cara de obra terminada.',
    specs: ['Material: inox escovado', 'Diâmetro: 60 mm', 'Fixação por encaixe'],
    fotos: [] },

  { id: 'ac-canopla-branca', nome: 'Canopla decorativa branca 60 mm', marca: 'Universal',
    categoria: 'acabamentos', sub: '', preco: 39, precoAntigo: null, destaque: false,
    descricao: 'Opção discreta em ABS branco para acabamento da exaustão em áreas internas.',
    specs: ['Material: ABS', 'Cor: branca', 'Diâmetro: 60 mm'],
    fotos: [] },

  /* ──────────── DUTO DE EXAUSTÃO ──────────── */
  { id: 'dt-aluminio-15', nome: 'Duto de exaustão alumínio Ø60 mm × 1,5 m', marca: 'Universal',
    categoria: 'dutos', sub: '', preco: 119, precoAntigo: null, destaque: false,
    descricao: 'Duto flexível em alumínio para conduzir os gases da combustão com total segurança até a área externa.',
    specs: ['Diâmetro: 60 mm', 'Comprimento: 1,5 m (extensível)', 'Alumínio', 'Compatível com exaustão forçada'],
    fotos: [] },

  { id: 'dt-terminal', nome: 'Terminal de exaustão inox Ø60 mm', marca: 'Universal',
    categoria: 'dutos', sub: '', preco: 149, precoAntigo: null, destaque: false,
    descricao: 'Terminal externo em inox com proteção contra chuva e entrada de pássaros. Acabamento profissional.',
    specs: ['Diâmetro: 60 mm', 'Inox 430', 'Proteção contra chuva e vento'],
    fotos: [] },

  { id: 'dt-sob-medida', nome: 'Kit de exaustão sob medida (projeto)', marca: 'Servigás',
    categoria: 'dutos', sub: '', preco: null, precoAntigo: null, destaque: false,
    descricao: 'Instalações especiais (prumadas longas, shafts, coletivos): nossa equipe dimensiona e monta o kit ideal.',
    specs: ['Projeto personalizado', 'Visita técnica', 'Materiais certificados'],
    fotos: [] },
];

const CATEGORIAS = [
  { id: 'aquecedores', nome: 'Aquecedores a gás',      curto: 'Aquecedores', sub: ['Rheem', 'Rinnai', 'Komeco', 'Lorenzetti'] },
  { id: 'bombas',      nome: 'Bombas pressurizadoras', curto: 'Bombas',      sub: ['Komeco', 'Rinnai'] },
  { id: 'mangueiras',  nome: 'Mangueiras',             curto: 'Mangueiras',  sub: ['Gás', 'Água'] },
  { id: 'registros',   nome: 'Registros de gás',       curto: 'Registros',   sub: [] },
  { id: 'acabamentos', nome: 'Acabamentos',            curto: 'Acabamentos', sub: [] },
  { id: 'dutos',       nome: 'Duto de exaustão',       curto: 'Dutos',       sub: [] },
];

/* ════════════════════════════════════════════════════════════════════════════
   A partir daqui é o funcionamento da loja — não precisa mexer. 🙂
   ════════════════════════════════════════════════════════════════════════════ */
const Loja = (() => {
  const MAX_FOTOS = 4;
  const CHAVE_CARRINHO = 'servigas-carrinho';   // a mesma do site atual
  const CHAVE_TEMA = 'servigas-tema';

  let produtos = [];
  let carregando = true;
  const ouvintes = {};
  const on = (ev, fn) => { (ouvintes[ev] = ouvintes[ev] || []).push(fn); };
  const emitir = (ev, dado) => (ouvintes[ev] || []).forEach(fn => fn(dado));

  const $ = (id) => document.getElementById(id);
  const brl = (n) => Number(n).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const lerJSON = (k, padrao) => { try { return JSON.parse(localStorage.getItem(k)) ?? padrao; } catch { return padrao; } };
  const gravar = (k, v) => { try { localStorage.setItem(k, typeof v === 'string' ? v : JSON.stringify(v)); } catch {} };

  /* ─────────── Catálogo ─────────── */
  async function carregarCatalogo() {
    try {
      const r = await fetch(`${SUPABASE_URL}/rest/v1/loja_produtos?select=*&ativo=eq.true&order=criado_em.desc`, {
        headers: { apikey: SUPABASE_ANON, Authorization: `Bearer ${SUPABASE_ANON}` }
      });
      if (!r.ok) throw new Error('HTTP ' + r.status);
      produtos = (await r.json()).map(p => ({
        id: p.id, nome: p.nome, marca: p.marca, categoria: p.categoria, sub: p.sub,
        preco: p.preco == null ? null : Number(p.preco),
        precoAntigo: p.preco_antigo == null ? null : Number(p.preco_antigo),
        destaque: p.destaque, descricao: p.descricao, specs: p.specs || [], fotos: p.fotos || []
      }));
    } catch (e) {
      console.warn('Banco indisponível, mostrando catálogo de demonstração:', e.message);
      produtos = PRODUTOS_EXEMPLO;
    }
    carregando = false;
    emitir('catalogo', produtos);
    renderCarrinho();
  }
  const achar = (id) => produtos.find(p => String(p.id) === String(id));

  /* Vazão (L/min) lida das especificações: "Vazão: 21 L/min" → 21 */
  function vazao(p) {
    for (const s of (p.specs || [])) {
      const m = /vaz[aã]o[^0-9]*([0-9]+(?:[.,][0-9]+)?)\s*l/i.exec(s);
      if (m && !/m[aá]x/i.test(s)) return Number(m[1].replace(',', '.'));
    }
    const m = /([0-9]{2})\s*(?:litros|l\b)/i.exec(p.nome || '');
    return p.categoria === 'aquecedores' && m ? Number(m[1]) : null;
  }
  /* Quantos banhos ao mesmo tempo o aquecedor atende (regra de bolso;
     a visita técnica confirma): até 16 L/min → 1 · 17 a 22 → 2 · 23+ → 3 */
  function banhos(p) {
    if (p.categoria !== 'aquecedores') return null;
    const v = vazao(p);
    if (!v) return null;
    return v <= 16 ? 1 : v <= 22 ? 2 : 3;
  }
  const textoBanhos = (n) => n === 1 ? '1 banho por vez' : n === 2 ? '2 banhos ao mesmo tempo' : '3 ou mais banhos ao mesmo tempo';
  const desconto = (p) => (p.precoAntigo && p.preco && p.precoAntigo > p.preco) ? Math.round((1 - p.preco / p.precoAntigo) * 100) : 0;

  /* Menor aquecedor (com preço) que dá conta de `litros` L/min */
  function recomendar(litros) {
    const aq = produtos.filter(p => p.categoria === 'aquecedores' && vazao(p) && p.preco != null)
      .sort((a, b) => vazao(a) - vazao(b) || a.preco - b.preco);
    return aq.find(p => vazao(p) >= litros) || aq[aq.length - 1] || null;
  }

  function filtrar({ cat = null, sub = null, busca = '', ordem = 'relevancia', banhos: nb = null, so = null } = {}) {
    const q = busca.trim().toLowerCase();
    let lista = produtos.filter(p =>
      (!cat || p.categoria === cat) &&
      (!sub || p.sub === sub) &&
      (!nb || banhos(p) === nb) &&
      (so !== 'destaque' || p.destaque) &&
      (so !== 'promocao' || desconto(p) > 0) &&
      (!q || (p.nome + ' ' + p.marca + ' ' + p.descricao + ' ' + (p.specs || []).join(' ')).toLowerCase().includes(q))
    );
    if (ordem === 'menor') lista = lista.slice().sort((a, b) => (a.preco ?? 1e9) - (b.preco ?? 1e9));
    if (ordem === 'maior') lista = lista.slice().sort((a, b) => (b.preco ?? -1) - (a.preco ?? -1));
    if (ordem === 'nome')  lista = lista.slice().sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
    if (ordem === 'relevancia') lista = lista.slice().sort((a, b) => (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0));
    return lista;
  }

  /* ─────────── Ícones (traço único 1.8) ─────────── */
  const I = (d, extra = '') => `<svg class="lj-ic" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;
  const ICONES = {
    carrinho: I('<path d="M3 4h2.2l2.1 10.6a1.6 1.6 0 0 0 1.6 1.3h8.4a1.6 1.6 0 0 0 1.6-1.2L20.6 8H6.1"/><circle cx="9.5" cy="19.8" r="1.2"/><circle cx="17.5" cy="19.8" r="1.2"/>'),
    busca: I('<circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.2-4.2"/>'),
    fechar: I('<path d="M6 6l12 12M18 6L6 18"/>'),
    seta: I('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    diagonal: I('<path d="M7 17L17 7M9 7h8v8"/>'),
    esquerda: I('<path d="M15 18l-6-6 6-6"/>'),
    direita: I('<path d="M9 6l6 6-6 6"/>'),
    mais: I('<path d="M12 5v14M5 12h14"/>'),
    menos: I('<path d="M5 12h14"/>'),
    lixo: I('<path d="M4 7h16M9 7V4.8c0-.4.4-.8.8-.8h4.4c.4 0 .8.4.8.8V7M6.5 7l.8 12.2c.1.9.8 1.6 1.7 1.6h6c.9 0 1.6-.7 1.7-1.6L17.5 7"/>'),
    check: I('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
    lua: I('<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>'),
    sol: I('<circle cx="12" cy="12" r="4"/><path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4"/>'),
    menu: I('<path d="M4 7h16M4 12h16M4 17h10"/>'),
    coracao: I('<path d="M12 20s-7.5-4.4-7.5-10A4.2 4.2 0 0 1 12 7.6 4.2 4.2 0 0 1 19.5 10c0 5.6-7.5 10-7.5 10z"/>'),
    chama: I('<path d="M12 21c-3.6 0-6-2.4-6-5.6 0-3.4 2.6-5 3.4-8.4.2-.8 1.2-1 1.6-.3 1.8 2.6 1.4 4.2 1.4 4.2s1.2-.6 1.6-2.4c.2-.7 1.1-.8 1.4-.2C16.6 10.4 18 12.6 18 15.4 18 18.6 15.6 21 12 21z"/>'),
    ferramenta: I('<path d="M14.7 6.3a4 4 0 0 0 5 5L21 12.6l-1.3 1.3-1.4-1.4-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9-1.4-1.4L15.2 6.8"/><path d="M14.7 6.3 12 3.6 9.5 6.1"/>'),
    escudo: I('<path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6z"/><path d="M8.8 12.2l2.2 2.2 4.3-4.4"/>'),
    loja: I('<path d="M4 10v10h16V10"/><path d="M3 10l1.8-6h14.4L21 10c0 1.5-1.2 2.5-2.6 2.5S15.8 11.5 15.8 10c0 1.5-1.2 2.5-2.6 2.5h-2.4C9.4 12.5 8.2 11.5 8.2 10c0 1.5-1.2 2.5-2.6 2.5S3 11.5 3 10z"/><path d="M10 20v-5h4v5"/>'),
    prancheta: I('<rect x="5" y="4.5" width="14" height="16.5" rx="2"/><path d="M9 4.5V3h6v1.5M8.5 10h7M8.5 13.5h7M8.5 17h4"/>'),
    relogio: I('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),
    gota: I('<path d="M12 3.5s6 6.4 6 10.7a6 6 0 0 1-12 0C6 9.9 12 3.5 12 3.5z"/>'),
    chuveiro: I('<path d="M5 21V8a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4"/><path d="M10 11h8a4 4 0 0 0-8 0z"/><path d="M11.5 14v1M14 14.5v1M16.5 14v1M12.5 17.5v1M15.5 17.5v1"/>'),
    whats: `<svg class="lj-ic" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.28-.2-.58-.35zM12.04 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 1 1 7.99 4.42zm8.02-17.46A11.34 11.34 0 0 0 12.04.7C5.78.7.69 5.79.69 12.04c0 2 .52 3.95 1.52 5.67L.6 23.3l5.72-1.5a11.33 11.33 0 0 0 5.72 1.46h.01c6.25 0 11.34-5.09 11.35-11.34 0-3.03-1.18-5.88-3.33-8.02z"/></svg>`,
  };

  /* ─────────── Ilustrações (produto sem foto) ───────────
     Cores vêm de variáveis CSS de cada modelo: --ilu-corpo, --ilu-linha,
     --ilu-metal, --ilu-escuro, --ilu-quente, --ilu-frio, --ilu-gas         */
  const V = (n, d) => `var(--ilu-${n},${d})`;
  const C = { corpo: V('corpo', '#fff'), linha: V('linha', '#22262b'), metal: V('metal', '#c9ced4'), escuro: V('escuro', '#1d2126'), quente: V('quente', '#ea580c'), frio: V('frio', '#4f7fa8'), gas: V('gas', '#e0a80d') };
  function ilustracao(p) {
    const cat = p.categoria;
    const L = `stroke="${C.linha}" stroke-width="2" stroke-linejoin="round"`;
    let svg = '';
    if (cat === 'aquecedores') {
      const v = vazao(p);
      svg = `
        <rect x="88" y="6" width="24" height="22" rx="3" fill="${C.metal}" ${L}/>
        <path d="M88 13h24M88 20h24" stroke="${C.linha}" stroke-width="1.2" opacity=".5"/>
        <rect x="52" y="26" width="96" height="136" rx="10" fill="${C.corpo}" ${L}/>
        <rect x="64" y="40" width="72" height="34" rx="5" fill="${C.escuro}"/>
        <text x="100" y="64" text-anchor="middle" font-size="19" font-weight="700" fill="${C.quente}" font-family="inherit" letter-spacing="1">${v ? v + 'L' : '38°'}</text>
        <text x="100" y="96" text-anchor="middle" font-size="9" font-weight="700" fill="${C.linha}" opacity=".55" font-family="inherit" letter-spacing="2">${esc((p.marca || '').toUpperCase().slice(0, 12))}</text>
        <rect x="84" y="108" width="32" height="24" rx="4" fill="${C.escuro}"/>
        <path d="M100 128c-5 0-7.5-3-7.5-6.4 0-3.8 3.6-5.2 4.6-9 .9 2.6 3.2 3.4 3.2 3.4s.9-1.6.6-3.8c3.6 2.4 6.6 5.6 6.6 9.4 0 3.4-2.5 6.4-7.5 6.4z" fill="${C.quente}"/>
        <circle cx="80" cy="146" r="4.5" fill="none" ${L}/><circle cx="120" cy="146" r="4.5" fill="none" ${L}/>
        <path d="M76 162v22M100 162v22M124 162v22" stroke-width="7" stroke-linecap="round" stroke="${C.metal}"/>
        <path d="M76 162v22" stroke="${C.frio}" stroke-width="3" stroke-linecap="round"/>
        <path d="M100 162v22" stroke="${C.gas}" stroke-width="3" stroke-linecap="round"/>
        <path d="M124 162v22" stroke="${C.quente}" stroke-width="3" stroke-linecap="round"/>
        <rect x="70" y="182" width="12" height="9" rx="1.5" fill="${C.metal}" ${L}/><rect x="94" y="182" width="12" height="9" rx="1.5" fill="${C.metal}" ${L}/><rect x="118" y="182" width="12" height="9" rx="1.5" fill="${C.metal}" ${L}/>`;
    } else if (cat === 'bombas') {
      svg = `
        <rect x="30" y="150" width="140" height="12" rx="3" fill="${C.escuro}"/>
        <rect x="34" y="72" width="82" height="72" rx="12" fill="${C.corpo}" ${L}/>
        ${[48, 60, 72, 84, 96].map(x => `<path d="M${x} 80v56" stroke="${C.linha}" stroke-width="1.4" opacity=".35"/>`).join('')}
        <rect x="116" y="78" width="10" height="60" fill="${C.metal}" ${L}/>
        <circle cx="146" cy="108" r="28" fill="${C.metal}" ${L}/>
        <circle cx="146" cy="108" r="11" fill="${C.corpo}" ${L}/>
        <path d="M146 80V50" stroke="${C.metal}" stroke-width="16"/><path d="M146 80V50" ${L} fill="none" stroke-width="0"/>
        <rect x="134" y="40" width="24" height="12" rx="2" fill="${C.metal}" ${L}/>
        <path d="M174 108h14" stroke="${C.metal}" stroke-width="16"/>
        <rect x="184" y="96" width="10" height="24" rx="2" fill="${C.metal}" ${L}/>
        <rect x="58" y="90" width="34" height="18" rx="3" fill="${C.quente}"/>
        <path d="M146 58v14" stroke="${C.frio}" stroke-width="3" stroke-linecap="round"/>`;
    } else if (cat === 'mangueiras') {
      const cor = /g[aá]s/i.test(p.sub + p.nome) ? C.gas : C.frio;
      svg = `
        <path d="M40 150c0-60 20-100 60-100s60 30 50 70-50 40-60 10 30-40 60-10" fill="none" stroke="${C.metal}" stroke-width="16" stroke-linecap="round"/>
        <path d="M40 150c0-60 20-100 60-100s60 30 50 70-50 40-60 10 30-40 60-10" fill="none" stroke="${C.linha}" stroke-width="16" stroke-dasharray="1.5 4" opacity=".35"/>
        <rect x="28" y="148" width="24" height="26" rx="3" fill="${C.metal}" ${L}/><rect x="31" y="172" width="18" height="10" fill="${cor}"/>
        <rect x="146" y="112" width="26" height="24" rx="3" fill="${C.metal}" ${L} transform="rotate(35 159 124)"/>`;
    } else if (cat === 'registros') {
      svg = `
        <path d="M20 118h160" stroke="${C.metal}" stroke-width="30"/>
        <path d="M20 103h160M20 133h160" stroke="${C.linha}" stroke-width="2"/>
        <rect x="30" y="98" width="30" height="40" rx="3" fill="${C.metal}" ${L}/>
        <rect x="140" y="98" width="30" height="40" rx="3" fill="${C.metal}" ${L}/>
        <rect x="70" y="92" width="60" height="52" rx="14" fill="${C.metal}" ${L}/>
        <rect x="94" y="72" width="12" height="22" fill="${C.metal}" ${L}/>
        <rect x="60" y="56" width="110" height="18" rx="9" fill="${C.gas}" ${L}/>
        <circle cx="100" cy="65" r="5" fill="${C.corpo}" ${L}/>`;
    } else if (cat === 'acabamentos') {
      svg = `
        <circle cx="100" cy="100" r="70" fill="${C.metal}" ${L}/>
        <circle cx="100" cy="100" r="54" fill="${C.corpo}" ${L}/>
        <circle cx="100" cy="100" r="32" fill="${C.escuro}"/>
        <path d="M62 70a50 50 0 0 1 30-18" stroke="${C.corpo}" stroke-width="5" stroke-linecap="round" opacity=".8" fill="none"/>`;
    } else {
      svg = `
        <path d="M30 60h60a40 40 0 0 1 40 40v70" fill="none" stroke="${C.metal}" stroke-width="34"/>
        <path d="M30 60h60a40 40 0 0 1 40 40v70" fill="none" stroke="${C.linha}" stroke-width="34" stroke-dasharray="2 6" opacity=".28"/>
        <rect x="16" y="38" width="20" height="44" rx="3" fill="${C.escuro}"/>
        <rect x="104" y="166" width="52" height="16" rx="3" fill="${C.metal}" ${L}/>
        <path d="M112 174h36" stroke="${C.linha}" stroke-width="2" stroke-dasharray="4 3"/>`;
    }
    return `<svg class="lj-ilu" viewBox="0 0 200 200" role="img" aria-label="${esc(p.nome)}">${svg}</svg>`;
  }
  /* Foto de capa ou ilustração */
  function foto(p, { eager = false } = {}) {
    const f = (p.fotos || [])[0];
    return f
      ? `<img class="lj-foto" src="${esc(f)}" alt="${esc(p.nome)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`
      : ilustracao(p);
  }

  /* ─────────── Estrutura injetada: modal, gaveta, toast ─────────── */
  const CSS_BASE = `
  .lj-ilu{width:100%;height:100%;display:block}
  .lj-foto{width:100%;height:100%;object-fit:contain;display:block}
  .lj-fundo{position:fixed;inset:0;z-index:80;background:var(--lj-veu,rgba(10,10,12,.55));opacity:0;pointer-events:none;transition:opacity .3s}
  .lj-fundo.aberto{opacity:1;pointer-events:auto}
  .lj-modal-fundo{display:grid;place-items:center;padding:16px}
  .lj-modal{position:relative;background:var(--lj-superficie,#fff);color:var(--lj-texto,#111);width:min(980px,100%);max-height:calc(100dvh - 32px);overflow:auto;border-radius:var(--lj-raio,16px);transform:translateY(24px) scale(.98);transition:transform .45s cubic-bezier(.16,1,.3,1);box-shadow:0 30px 80px -20px rgba(0,0,0,.45)}
  .lj-fundo.aberto .lj-modal{transform:none}
  .lj-modal-grid{display:grid;grid-template-columns:1.05fr 1fr}
  .lj-galeria{position:relative;background:var(--lj-palco,#f2f2f4);min-height:320px;display:flex;flex-direction:column}
  .lj-trilho{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;flex:1}
  .lj-trilho::-webkit-scrollbar{display:none}
  .lj-slide{flex:0 0 100%;scroll-snap-align:center;display:flex;align-items:center;justify-content:center;padding:32px;min-height:100%}
  .lj-slide img{max-width:100%;max-height:100%;object-fit:contain}
  .lj-slide .lj-ilu{width:72%;max-width:380px;height:auto;max-height:100%}
  .lj-nav{position:absolute;top:50%;translate:0 -50%;width:44px;height:44px;border-radius:999px;border:0;display:grid;place-items:center;background:var(--lj-superficie,#fff);color:var(--lj-texto,#111);box-shadow:0 4px 14px rgba(0,0,0,.15);cursor:pointer}
  .lj-nav.ant{left:12px}.lj-nav.prox{right:12px}
  .lj-miniaturas{display:flex;gap:8px;padding:0 16px 16px;justify-content:center}
  .lj-miniaturas button{width:56px;height:56px;padding:4px;border-radius:calc(var(--lj-raio,16px)/2);border:2px solid transparent;background:var(--lj-superficie,#fff);cursor:pointer;opacity:.6}
  .lj-miniaturas button[aria-current="true"]{border-color:var(--lj-acento,#ea580c);opacity:1}
  .lj-miniaturas img{width:100%;height:100%;object-fit:contain}
  .lj-info{padding:40px 36px 32px;display:flex;flex-direction:column;gap:16px}
  .lj-marca{font-size:14px;font-weight:500;color:var(--lj-texto-2,#666);margin-top:-8px}
  .lj-modal h2{font-family:var(--lj-fonte-titulo,inherit);font-size:clamp(22px,2.6vw,30px);line-height:1.12;letter-spacing:-.02em;margin:0;text-wrap:balance}
  .lj-banhos{display:flex;align-items:center;gap:10px;font-weight:600;font-size:15px;color:var(--lj-acento-escuro,var(--lj-acento,#ea580c))}
  .lj-desc{color:var(--lj-texto-2,#555);font-size:15.5px;line-height:1.6;margin:0}
  .lj-specs{list-style:none;margin:0;padding:0;display:grid;gap:0;border-top:1px solid var(--lj-linha,#e5e5e5)}
  .lj-specs li{display:flex;justify-content:space-between;gap:16px;padding:10px 0;border-bottom:1px solid var(--lj-linha,#e5e5e5);font-size:14px}
  .lj-specs li span:first-child{color:var(--lj-texto-2,#666)}
  .lj-specs li span:last-child{font-weight:600;text-align:right}
  .lj-precos{display:flex;flex-direction:column;gap:2px}
  .lj-precos s{color:var(--lj-texto-2,#777);font-size:14px}
  .lj-precos strong{font-family:var(--lj-fonte-preco,var(--lj-fonte-titulo,inherit));font-size:32px;line-height:1.1;letter-spacing:-.02em;font-variant-numeric:tabular-nums}
  .lj-precos small{color:var(--lj-texto-2,#666);font-size:13px}
  .lj-compra{display:flex;gap:12px;flex-wrap:wrap}
  .lj-qtd{display:inline-flex;align-items:center;border:1px solid var(--lj-linha-forte,var(--lj-linha,#ddd));border-radius:var(--lj-raio-btn,999px);overflow:hidden}
  .lj-qtd button{width:44px;height:48px;border:0;background:transparent;color:inherit;display:grid;place-items:center;cursor:pointer}
  .lj-qtd output{min-width:32px;text-align:center;font-weight:700;font-variant-numeric:tabular-nums}
  .lj-btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:48px;padding:0 24px;border-radius:var(--lj-raio-btn,999px);border:0;font:inherit;font-weight:700;font-size:15px;cursor:pointer;text-decoration:none;transition:filter .2s,transform .2s}
  .lj-btn:active{transform:scale(.98)}
  .lj-btn-principal{background:var(--lj-acento,#ea580c);color:var(--lj-acento-texto,#fff);flex:1}
  .lj-btn-principal:hover{filter:brightness(1.08)}
  .lj-btn-zap{background:transparent;color:var(--lj-texto,#111);border:1px solid var(--lj-linha-forte,var(--lj-linha,#ddd))}
  .lj-btn-zap .lj-ic{color:#1f9d55}
  .lj-btn-zap:hover{border-color:currentColor}
  .lj-nota{display:flex;gap:10px;align-items:flex-start;font-size:13.5px;line-height:1.5;color:var(--lj-texto-2,#666);margin:0;padding-top:4px}
  .lj-nota .lj-ic{flex:none;color:var(--lj-acento,#ea580c)}
  .lj-x{position:absolute;top:12px;right:12px;z-index:3;width:44px;height:44px;border-radius:999px;border:0;display:grid;place-items:center;background:var(--lj-superficie,#fff);color:var(--lj-texto,#111);cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.12)}
  .lj-gaveta{position:fixed;top:0;right:0;bottom:0;z-index:81;width:min(420px,100%);background:var(--lj-superficie,#fff);color:var(--lj-texto,#111);display:flex;flex-direction:column;transform:translateX(100%);transition:transform .45s cubic-bezier(.16,1,.3,1);box-shadow:-20px 0 60px -20px rgba(0,0,0,.35);visibility:hidden}
  .lj-gaveta.aberto{transform:none;visibility:visible}
  .lj-gaveta header{display:flex;align-items:center;justify-content:space-between;padding:20px 24px;border-bottom:1px solid var(--lj-linha,#eee)}
  .lj-gaveta h2{font-family:var(--lj-fonte-titulo,inherit);font-size:22px;margin:0;letter-spacing:-.01em}
  .lj-gaveta header .lj-x{position:static;box-shadow:none;background:transparent}
  .lj-itens{flex:1;overflow:auto;padding:8px 24px}
  .lj-item{display:grid;grid-template-columns:64px 1fr auto;gap:14px;align-items:center;padding:16px 0;border-bottom:1px solid var(--lj-linha,#eee)}
  .lj-item-foto{width:64px;height:64px;border-radius:calc(var(--lj-raio,16px)/2);background:var(--lj-palco,#f2f2f4);padding:6px;overflow:hidden}
  .lj-item b{display:block;font-size:14px;line-height:1.35;font-weight:600}
  .lj-item .lj-qtd{margin-top:8px}.lj-item .lj-qtd button{width:36px;height:36px}
  .lj-item-valor{font-weight:700;font-variant-numeric:tabular-nums;font-size:14px;text-align:right;display:flex;flex-direction:column;align-items:flex-end;gap:6px}
  .lj-item-valor button{border:0;background:transparent;color:var(--lj-texto-2,#777);width:44px;height:44px;display:grid;place-items:center;cursor:pointer;margin-right:-10px}
  .lj-vazio{padding:48px 8px;text-align:center;color:var(--lj-texto-2,#666);line-height:1.6}
  .lj-vazio .lj-ic{width:40px;height:40px;margin:0 auto 12px;display:block;color:var(--lj-linha-forte,#ccc)}
  .lj-gaveta footer{padding:20px 24px 24px;border-top:1px solid var(--lj-linha,#eee);display:grid;gap:12px}
  .lj-total{display:flex;justify-content:space-between;align-items:baseline}
  .lj-total strong{font-family:var(--lj-fonte-preco,var(--lj-fonte-titulo,inherit));font-size:28px;font-variant-numeric:tabular-nums;letter-spacing:-.02em}
  .lj-btn-fechar{background:var(--lj-zap,#15803d);color:#fff;width:100%}
  .lj-btn-fechar:hover{filter:brightness(1.1)}
  .lj-btn-fechar:disabled{opacity:.45;cursor:not-allowed}
  .lj-toast{position:fixed;left:50%;bottom:24px;z-index:90;transform:translate(-50%,calc(100% + 48px));visibility:hidden;background:var(--lj-texto,#111);color:var(--lj-superficie,#fff);padding:12px 20px;border-radius:var(--lj-raio-btn,999px);font-weight:600;font-size:14px;display:flex;gap:10px;align-items:center;transition:transform .4s cubic-bezier(.16,1,.3,1),visibility .4s;box-shadow:0 12px 30px -10px rgba(0,0,0,.4);white-space:nowrap}
  .lj-toast.show{transform:translate(-50%,0);visibility:visible}
  @media (max-width:760px){
    .lj-modal-fundo{padding:0;align-items:end}
    .lj-modal{border-radius:var(--lj-raio,16px) var(--lj-raio,16px) 0 0;max-height:92dvh;transform:translateY(100%)}
    .lj-modal-grid{grid-template-columns:1fr}
    .lj-galeria{min-height:0}
    .lj-slide{aspect-ratio:4/3;padding:20px}
    .lj-slide .lj-ilu{width:auto;height:100%}
    .lj-info{padding:24px 20px 28px}
    .lj-precos strong{font-size:28px}
  }
  @media (prefers-reduced-motion:reduce){.lj-modal,.lj-gaveta,.lj-toast,.lj-fundo{transition:none}}
  `;

  function injetar() {
    const st = document.createElement('style');
    st.textContent = CSS_BASE;
    document.head.prepend(st);   // antes do CSS do modelo, que pode sobrescrever
    document.body.insertAdjacentHTML('beforeend', `
      <div class="lj-fundo lj-modal-fundo" id="ljModalFundo">
        <div class="lj-modal" id="ljModal" role="dialog" aria-modal="true" aria-labelledby="ljModalTitulo" tabindex="-1"></div>
      </div>
      <div class="lj-fundo" id="ljGavetaFundo"></div>
      <aside class="lj-gaveta" id="ljGaveta" role="dialog" aria-modal="true" aria-labelledby="ljGavetaTitulo" tabindex="-1">
        <header><h2 id="ljGavetaTitulo">Seu pedido</h2>
          <button class="lj-x" type="button" data-fechar-gaveta aria-label="Fechar carrinho">${ICONES.fechar}</button></header>
        <div class="lj-itens" id="ljItens"></div>
        <footer>
          <div class="lj-total"><span>Total</span><strong id="ljTotal">R$ 0,00</strong></div>
          <button class="lj-btn lj-btn-fechar" id="ljFinalizar" type="button">${ICONES.whats} Fechar pedido no WhatsApp</button>
          <p class="lj-nota">${ICONES.loja}<span>Pagamento, retirada na loja ou instalação: você combina tudo com a gente na conversa.</span></p>
        </footer>
      </aside>
      <div class="lj-toast" id="ljToast" role="status" aria-live="polite"></div>`);

    $('ljModalFundo').addEventListener('click', e => { if (e.target.id === 'ljModalFundo') fecharProduto(); });
    $('ljGavetaFundo').addEventListener('click', fecharCarrinho);
    document.querySelector('[data-fechar-gaveta]').addEventListener('click', fecharCarrinho);
    $('ljFinalizar').addEventListener('click', finalizar);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { fecharProduto(); fecharCarrinho(); }
      if (galeria.n > 1 && $('ljModalFundo').classList.contains('aberto')) {
        if (e.key === 'ArrowLeft') irFoto(galeria.i - 1);
        if (e.key === 'ArrowRight') irFoto(galeria.i + 1);
      }
    });
    // Qualquer elemento com data-produto / data-add / data-carrinho funciona sozinho
    document.addEventListener('click', e => {
      const add = e.target.closest('[data-add]');
      if (add) { e.preventDefault(); e.stopPropagation(); adicionar(add.dataset.add, 1); return; }
      const cons = e.target.closest('[data-consultar]');
      if (cons) { e.preventDefault(); e.stopPropagation(); consultar(cons.dataset.consultar); return; }
      const prod = e.target.closest('[data-produto]');
      if (prod) { e.preventDefault(); abrirProduto(prod.dataset.produto); return; }
      if (e.target.closest('[data-carrinho]')) { e.preventDefault(); abrirCarrinho(); return; }
      if (e.target.closest('[data-whats]')) { e.preventDefault(); whats(); return; }
      if (e.target.closest('[data-tema]')) { e.preventDefault(); alternarTema(); }
    });
  }

  /* ─────────── Modal do produto ─────────── */
  let focoAntes = null;
  const galeria = { i: 0, n: 0 };
  let qtd = 1;

  function linhaSpec(s) {
    const i = s.indexOf(':');
    return i > 0
      ? `<li><span>${esc(s.slice(0, i))}</span><span>${esc(s.slice(i + 1).trim())}</span></li>`
      : `<li><span>${esc(s)}</span><span>${ICONES.check}</span></li>`;
  }

  function abrirProduto(id) {
    const p = achar(id);
    if (!p) return;
    qtd = 1;
    const fotos = (p.fotos || []).slice(0, MAX_FOTOS);
    galeria.i = 0; galeria.n = fotos.length;
    const nb = banhos(p), v = vazao(p);
    const comInstalacao = p.categoria === 'aquecedores' || p.categoria === 'bombas';
    $('ljModal').innerHTML = `
      <button class="lj-x" type="button" id="ljFecharModal" aria-label="Fechar">${ICONES.fechar}</button>
      <div class="lj-modal-grid">
        <div class="lj-galeria">
          <div class="lj-trilho" id="ljTrilho" aria-label="Fotos do produto">
            ${fotos.length
              ? fotos.map((f, i) => `<div class="lj-slide"><img src="${esc(f)}" alt="${esc(p.nome)}, foto ${i + 1} de ${fotos.length}" draggable="false"></div>`).join('')
              : `<div class="lj-slide">${ilustracao(p)}</div>`}
          </div>
          ${fotos.length > 1 ? `
            <button class="lj-nav ant" type="button" data-foto="-1" aria-label="Foto anterior">${ICONES.esquerda}</button>
            <button class="lj-nav prox" type="button" data-foto="1" aria-label="Próxima foto">${ICONES.direita}</button>
            <div class="lj-miniaturas">${fotos.map((f, i) => `<button type="button" data-ir="${i}" aria-label="Ver foto ${i + 1}" aria-current="${i === 0}"><img src="${esc(f)}" alt=""></button>`).join('')}</div>` : ''}
        </div>
        <div class="lj-info">
          <h2 id="ljModalTitulo">${esc(p.nome)}</h2>
          <span class="lj-marca">${esc(p.marca)}${p.categoria ? ` · ${esc((CATEGORIAS.find(c => c.id === p.categoria) || {}).nome || '')}` : ''}</span>
          ${nb ? `<p class="lj-banhos">${ICONES.chuveiro}<span>Indicado para ${textoBanhos(nb)} · ${v} L/min</span></p>` : ''}
          <p class="lj-desc">${esc(p.descricao)}</p>
          ${(p.specs || []).length ? `<ul class="lj-specs">${p.specs.map(linhaSpec).join('')}</ul>` : ''}
          <div class="lj-precos">
            ${p.preco != null ? `
              ${p.precoAntigo ? `<s>De ${brl(p.precoAntigo)}</s>` : ''}
              <strong>${brl(p.preco)}</strong>
              <small>ou em até 10x de ${brl(p.preco / 10)}</small>`
            : `<strong>Sob consulta</strong><small>Mandamos o orçamento pelo WhatsApp.</small>`}
          </div>
          <div class="lj-compra">
            ${p.preco != null ? `
              <div class="lj-qtd" role="group" aria-label="Quantidade">
                <button type="button" id="ljMenos" aria-label="Diminuir quantidade">${ICONES.menos}</button>
                <output id="ljQtd">1</output>
                <button type="button" id="ljMais" aria-label="Aumentar quantidade">${ICONES.mais}</button>
              </div>
              <button type="button" class="lj-btn lj-btn-principal" id="ljAdd">${ICONES.carrinho} Adicionar ao pedido</button>`
            : `<button type="button" class="lj-btn lj-btn-principal" data-consultar="${esc(p.id)}">${ICONES.whats} Pedir orçamento</button>`}
          </div>
          ${p.preco != null ? `<button type="button" class="lj-btn lj-btn-zap" data-consultar="${esc(p.id)}">${ICONES.whats} Tirar dúvida no WhatsApp</button>` : ''}
          ${comInstalacao ? `<p class="lj-nota">${ICONES.ferramenta}<span>Instalação inclusa, feita pela equipe da Servigás, assistência técnica autorizada.</span></p>` : ''}
        </div>
      </div>`;
    const m = $('ljModal');
    m.querySelector('#ljFecharModal').onclick = fecharProduto;
    m.querySelectorAll('[data-foto]').forEach(b => b.onclick = () => irFoto(galeria.i + Number(b.dataset.foto)));
    m.querySelectorAll('[data-ir]').forEach(b => b.onclick = () => irFoto(Number(b.dataset.ir)));
    const trilho = $('ljTrilho');
    trilho.addEventListener('scroll', () => {
      const i = Math.round(trilho.scrollLeft / trilho.clientWidth);
      if (i !== galeria.i) marcarFoto(i);
    }, { passive: true });
    if ($('ljAdd')) {
      $('ljMenos').onclick = () => { qtd = Math.max(1, qtd - 1); $('ljQtd').textContent = qtd; };
      $('ljMais').onclick = () => { qtd++; $('ljQtd').textContent = qtd; };
      $('ljAdd').onclick = () => { adicionar(p.id, qtd); fecharProduto(); };
    }
    focoAntes = document.activeElement;
    $('ljModalFundo').classList.add('aberto');
    document.documentElement.style.overflow = 'hidden';
    m.scrollTop = 0;
    m.focus({ preventScroll: true });
  }
  function marcarFoto(i) {
    galeria.i = i;
    document.querySelectorAll('.lj-miniaturas [data-ir]').forEach((b, j) => b.setAttribute('aria-current', j === i));
  }
  function irFoto(i) {
    if (galeria.n < 2) return;
    i = (i + galeria.n) % galeria.n;
    const t = $('ljTrilho');
    t.scrollTo({ left: i * t.clientWidth, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    marcarFoto(i);
  }
  function fecharProduto() {
    const f = $('ljModalFundo');
    if (!f || !f.classList.contains('aberto')) return;
    f.classList.remove('aberto');
    document.documentElement.style.overflow = '';
    galeria.n = 0;
    if (focoAntes && focoAntes.focus) focoAntes.focus({ preventScroll: true });
  }

  /* ─────────── Carrinho ─────────── */
  let carrinho = lerJSON(CHAVE_CARRINHO, []);
  const salvar = () => gravar(CHAVE_CARRINHO, carrinho);
  const qtdCarrinho = () => carrinho.reduce((s, i) => s + i.qtd, 0);

  function adicionar(id, q = 1) {
    const p = achar(id);
    if (!p) return;
    if (p.preco == null) { consultar(id); return; }
    const item = carrinho.find(i => String(i.id) === String(id));
    if (item) item.qtd += q; else carrinho.push({ id: p.id, qtd: q });
    salvar(); renderCarrinho();
    toast(`${ICONES.check} Adicionado ao pedido`);
  }
  function mudarQtd(id, d) {
    const item = carrinho.find(i => String(i.id) === String(id));
    if (!item) return;
    item.qtd += d;
    if (item.qtd <= 0) carrinho = carrinho.filter(i => i !== item);
    salvar(); renderCarrinho();
  }
  function remover(id) { carrinho = carrinho.filter(i => String(i.id) !== String(id)); salvar(); renderCarrinho(); }

  function renderCarrinho() {
    const alvo = $('ljItens');
    if (!alvo) return;
    let total = 0;
    const linhas = carrinho.map(i => {
      const p = achar(i.id);
      if (!p) return '';
      const sub = (p.preco || 0) * i.qtd;
      total += sub;
      return `<div class="lj-item">
        <div class="lj-item-foto">${foto(p)}</div>
        <div><b>${esc(p.nome)}</b>
          <div class="lj-qtd" role="group" aria-label="Quantidade de ${esc(p.nome)}">
            <button type="button" data-q="-1" data-id="${esc(p.id)}" aria-label="Diminuir">${ICONES.menos}</button>
            <output>${i.qtd}</output>
            <button type="button" data-q="1" data-id="${esc(p.id)}" aria-label="Aumentar">${ICONES.mais}</button>
          </div></div>
        <div class="lj-item-valor">${brl(sub)}
          <button type="button" data-rm="${esc(p.id)}" aria-label="Remover ${esc(p.nome)}">${ICONES.lixo}</button></div>
      </div>`;
    }).join('');
    alvo.innerHTML = linhas || `<div class="lj-vazio">${ICONES.carrinho}<p><b>Seu pedido está vazio.</b><br>Escolha um produto e ele aparece aqui.</p></div>`;
    alvo.querySelectorAll('[data-q]').forEach(b => b.onclick = () => mudarQtd(b.dataset.id, Number(b.dataset.q)));
    alvo.querySelectorAll('[data-rm]').forEach(b => b.onclick = () => remover(b.dataset.rm));
    $('ljTotal').textContent = brl(total);
    $('ljFinalizar').disabled = !linhas;
    emitir('carrinho', qtdCarrinho());
  }
  let focoGaveta = null;
  function abrirCarrinho() {
    focoGaveta = document.activeElement;
    $('ljGaveta').classList.add('aberto'); $('ljGavetaFundo').classList.add('aberto');
    document.documentElement.style.overflow = 'hidden';
    $('ljGaveta').focus({ preventScroll: true });
  }
  function fecharCarrinho() {
    if (!$('ljGaveta').classList.contains('aberto')) return;
    $('ljGaveta').classList.remove('aberto'); $('ljGavetaFundo').classList.remove('aberto');
    document.documentElement.style.overflow = '';
    if (focoGaveta && focoGaveta.focus) focoGaveta.focus({ preventScroll: true });
  }

  /* ─────────── WhatsApp ─────────── */
  const linkWhats = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg || 'Olá! Vim pelo site da Servigás e gostaria de mais informações.')}`;
  function whats(msg) { window.open(linkWhats(msg), '_blank', 'noopener'); }
  function consultar(id) {
    const p = achar(id);
    if (!p) return;
    whats(`Olá! Tenho interesse no produto: *${p.nome}*${p.preco != null ? ` (${brl(p.preco)})` : ''}. Pode me passar mais informações?`);
  }
  function mensagemPedido() {
    let total = 0;
    const linhas = carrinho.map(i => {
      const p = achar(i.id);
      if (!p) return null;
      total += (p.preco || 0) * i.qtd;
      return `• ${i.qtd}x ${p.nome} — ${brl((p.preco || 0) * i.qtd)}`;
    }).filter(Boolean);
    return `Olá! Gostaria de fazer um pedido pelo site:\n\n${linhas.join('\n')}\n\n*Total: ${brl(total)}*\n\nComo faço para combinar o pagamento e a retirada ou instalação?`;
  }
  function finalizar() { if (carrinho.length) whats(mensagemPedido()); }

  /* ─────────── Toast ─────────── */
  let tt;
  function toast(html) {
    const t = $('ljToast');
    t.innerHTML = html;
    t.classList.add('show');
    clearTimeout(tt);
    tt = setTimeout(() => t.classList.remove('show'), 2200);
  }

  /* ─────────── Tema claro/escuro ─────────── */
  function aplicarTema(t) {
    document.documentElement.dataset.theme = t;
    document.querySelectorAll('[data-tema]').forEach(b => {
      b.innerHTML = t === 'dark' ? ICONES.sol : ICONES.lua;
      b.setAttribute('aria-label', t === 'dark' ? 'Usar tema claro' : 'Usar tema escuro');
    });
    emitir('tema', t);
  }
  function alternarTema() {
    const novo = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    gravar(CHAVE_TEMA, novo); aplicarTema(novo);
  }

  function iniciar() {
    injetar();
    let t = null; try { t = localStorage.getItem(CHAVE_TEMA); } catch {}
    aplicarTema(t || 'light');
    renderCarrinho();
    carregarCatalogo();
  }

  return {
    iniciar, on,
    get produtos() { return produtos; }, get carregando() { return carregando; },
    categorias: CATEGORIAS, achar, filtrar, vazao, banhos, textoBanhos, desconto, recomendar,
    abrirProduto, fecharProduto, adicionar, abrirCarrinho, fecharCarrinho, qtdCarrinho,
    whats, linkWhats, consultar, finalizar, toast, alternarTema,
    foto, ilustracao, icone: (n) => ICONES[n] || '', brl, esc,
  };
})();
