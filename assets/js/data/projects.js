/**
 * Estudos de direção visual — os quatro exemplos são CONCEITOS, não
 * trabalhos encomendados, produtos publicados ou resultados mensurados.
 * Cada campo descreve uma hipótese de projeto, sem atribuir clientes reais.
 */
export const projects = [
  {
    id: 'site-institucional',
    category: 'site',
    tag: 'INSTITUCIONAL / CONCEITO',
    title: 'Identidade editorial',
    conceptName: 'Instituto Raízes',
    type: 'Site institucional',
    index: '01',
    description: 'Uma presença digital que une cultura, território e pessoas em uma narrativa visual acolhedora.',
    intro: 'Como transformar uma identidade cultural em uma experiência digital que comunica antes mesmo da primeira leitura?',
    challengeTitle: 'Traduzir identidade em presença.',
    challenge: 'Neste cenário hipotético, a proposta é criar uma página institucional que transmita repertório, pertencimento e clareza, sem parecer uma vitrine corporativa comum.',
    approachTitle: 'Um ritmo mais editorial.',
    approach: 'A composição dá protagonismo às palavras, ao espaço em branco e aos elementos naturais. O conteúdo é organizado para apresentar o propósito da instituição e conduzir a navegação com leveza.',
    decisions: [
      { title: 'Tipografia com personalidade', text: 'Contraste entre títulos serifados e textos de leitura simples para criar hierarquia sem excesso de elementos.' },
      { title: 'Fotografia como linguagem', text: 'Texturas, luz e formas botânicas ajudam a dar tom e contexto à proposta.' },
      { title: 'Navegação sem ruído', text: 'Poucas escolhas por etapa, com o conteúdo como centro da experiência.' }
    ],
    flow: ['Conhecer', 'Explorar a proposta', 'Entrar em contato'],
    signature: 'Cultura que cria raízes.',
    direction: 'Editorial / orgânico / acolhedor',
    palette: ['#E5DAC6', '#647144', '#1B241C'],
    signatureInk: '#1A241B',
    features: ['Narrativa visual', 'Hierarquia editorial', 'Navegação objetiva'],
    image: 'assets/img/projects/site-institucional.jpg',
    imageAlt: 'Estudo visual Instituto Raízes, com tipografia editorial, papel em tom creme e folhagens verdes.'
  },
  {
    id: 'sistema-gestao',
    category: 'sistema',
    tag: 'SISTEMA / CONCEITO',
    title: 'Fluxos inteligentes',
    conceptName: 'Gestão de processos',
    type: 'Sistema de gestão',
    index: '02',
    description: 'Uma interface pensada para dar visibilidade ao andamento de processos e tornar as próximas ações mais claras.',
    intro: 'E se acompanhar um processo fosse tão simples quanto entender o que já aconteceu e qual é o próximo passo?',
    challengeTitle: 'Reduzir o atrito da rotina.',
    challenge: 'Em um sistema hipotético com várias tarefas e etapas, o desafio de interface é permitir que a pessoa identifique prioridades, progresso e pendências com pouco esforço.',
    approachTitle: 'Status, contexto e ação.',
    approach: 'A proposta organiza o trabalho por etapas conectadas, destaca o estado atual de cada fluxo e dá prioridade à informação útil antes de adicionar complexidade.',
    decisions: [
      { title: 'Etapas visíveis', text: 'Um fluxo de leitura sequencial ajuda a entender onde cada processo está.' },
      { title: 'Sinalização coerente', text: 'Indicadores de estado e confirmação tornam o acompanhamento mais previsível.' },
      { title: 'Densidade controlada', text: 'Informações operacionais agrupadas para não sobrecarregar a tela.' }
    ],
    flow: ['Visualizar status', 'Analisar pendências', 'Definir próxima ação'],
    signature: 'Menos ruído. Mais fluxo.',
    direction: 'Operacional / preciso / funcional',
    palette: ['#151C1D', '#32453C', '#C7F13B'],
    signatureInk: '#F1F8E9',
    features: ['Organização de tarefas', 'Visibilidade do processo', 'Sinalização de estados'],
    image: 'assets/img/projects/sistema-gestao.jpg',
    imageAlt: 'Estudo de sistema com etapas de trabalho conectadas, indicadores verde-lima e lista de tarefas em interface escura.'
  },
  {
    id: 'pagina-conversao',
    category: 'landing',
    tag: 'LANDING PAGE / CONCEITO',
    title: 'Campanha de impacto',
    conceptName: 'Energia em movimento',
    type: 'Landing page',
    index: '03',
    description: 'Uma landing page de linguagem expressiva, criada para destacar a mensagem e orientar a próxima ação.',
    intro: 'Como apresentar uma ideia em poucos segundos sem deixar a clareza desaparecer atrás do impacto visual?',
    challengeTitle: 'Chamar atenção com direção.',
    challenge: 'Em uma campanha conceitual, a primeira dobra precisa estabelecer o tema, criar interesse e indicar imediatamente o que o visitante pode fazer.',
    approachTitle: 'Uma mensagem, um caminho.',
    approach: 'Fotografia expressiva, contraste cromático e títulos de grande escala criam presença. Os pontos de ação ficam claramente ligados à mensagem principal.',
    decisions: [
      { title: 'Impacto na primeira dobra', text: 'A composição visual apresenta a ideia antes da rolagem.' },
      { title: 'Hierarquia direta', text: 'Título, argumento e chamada principal ocupam papéis distintos.' },
      { title: 'Cor com intenção', text: 'Contrastes intensos conduzem o olhar sem competir com a ação.' }
    ],
    flow: ['Descobrir', 'Entender a oferta', 'Agir'],
    signature: 'Uma ideia que se move.',
    direction: 'Expressivo / vibrante / direto',
    palette: ['#3A174F', '#DF642C', '#F3C553'],
    signatureInk: '#FFFFFF',
    features: ['Mensagem direta', 'Hierarquia de ação', 'Identidade expressiva'],
    image: 'assets/img/projects/landing-page.jpg',
    imageAlt: 'Estudo de landing page com retrato expressivo e composição intensa em laranja e roxo.'
  },
  {
    id: 'dashboard-negocios',
    category: 'sistema',
    tag: 'DASHBOARD / CONCEITO',
    title: 'Dados que orientam',
    conceptName: 'Visão de negócio',
    type: 'Dashboard analítico',
    index: '04',
    description: 'Indicadores organizados para que tendências e informações importantes apareçam antes do excesso de números.',
    intro: 'Um bom painel mostra tudo — ou ajuda a perceber primeiro o que merece atenção?',
    challengeTitle: 'Dar sentido aos indicadores.',
    challenge: 'O cenário hipotético reúne métricas de negócio. O desafio é organizar essas informações de modo que a leitura seja rápida, consistente e útil para uma decisão.',
    approachTitle: 'A informação certa, na ordem certa.',
    approach: 'Métricas em destaque, agrupamentos claros e visualizações de apoio criam uma visão progressiva: panorama primeiro, detalhes depois.',
    decisions: [
      { title: 'Prioridade visual', text: 'Indicadores de maior interesse recebem destaque e contexto.' },
      { title: 'Comparação facilitada', text: 'Gráficos e agrupamentos ajudam a identificar diferenças e tendências.' },
      { title: 'Interface discreta', text: 'O visual escuro e os acentos luminosos apoiam a leitura dos dados.' }
    ],
    flow: ['Ver panorama', 'Investigar variações', 'Planejar a decisão'],
    signature: 'Números com direção.',
    direction: 'Analítico / organizado / objetivo',
    palette: ['#121A1D', '#253932', '#CCFA39'],
    signatureInk: '#F2F8ED',
    features: ['Painel de indicadores', 'Leitura de tendências', 'Visão progressiva'],
    image: 'assets/img/projects/dashboard.jpg',
    imageAlt: 'Estudo de dashboard escuro com gráfico verde-lima, medidores circulares e cartões de indicadores.'
  }
];
