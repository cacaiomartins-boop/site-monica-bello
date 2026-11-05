// Todos os textos, links e imagens do site ficam aqui.
// Fonte: perfil da profissional no Doctoralia, Instagram e Linktree (04/11/2026).
// Valores de sessão NÃO aparecem no site (decisão padrão; confirmar com ela se quiser exibir).

export const clinic = {
  name: "Monica Bello",
  shortName: "Monica Bello",
  title: "Psicóloga e Psicanalista",
  crp: "CRP 06/236284",
  whatsapp: "5519991776573",
  whatsappLabel: "(19) 99177-6573",
  whatsappMessage: "Olá, Monica! Vi seu site e gostaria de agendar uma sessão.",
  doctoralia: "https://www.doctoralia.com.br/perfil/monica-bello",
  instagram: "https://www.instagram.com/psi.monicabello",
  instagramHandle: "@psi.monicabello",
  ebook: "https://sun.eduzz.com/Z0BBX6N70A",
  // Rótulo único do botão de ação, repetido no menu, no topo e no fim da página.
  cta: "Agendar sessão",
  images: {
    portrait: "/img/monica-2.webp",
    portraitSet: "/img/monica-2-640.webp 640w, /img/monica-2.webp 988w",
    space: "/img/monica-3.webp",
  },
};

export const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#para-quem", label: "Para quem" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "/ansiedade/", label: "Ansiedade" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#duvidas", label: "Dúvidas" },
];

// Menu da página da campanha (/ansiedade/)
export const landingNav = [
  { href: "#sinais", label: "Você se identifica?" },
  { href: "#como-ajuda", label: "Como a terapia ajuda" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "/", label: "Início" },
];

// Página dedicada à especialidade, usada como destino dos anúncios.
export const ansiedade = {
  eyebrow: "Psicóloga para mulheres · Atendimento online",
  title: "Ansiedade não precisa ser o seu normal",
  text: "Atendimento psicológico online para mulheres que vivem com preocupação constante, autocobrança e a sensação de nunca dar conta. Sessões por vídeo, com escuta ética e sem julgamentos.",
  points: [
    "100% online, de onde você estiver",
    "Vagas normalmente na mesma semana ou na seguinte",
    "Psicóloga e psicanalista, CRP 06/236284",
  ],
  signs: {
    title: "Você se identifica?",
    intro: "A ansiedade nem sempre aparece como medo. Muitas vezes ela se disfarça de responsabilidade. Pode ser hora de buscar ajuda se:",
    items: [
      "Seus pensamentos não desligam, mesmo quando você está cansada",
      "Nada do que você faz parece bom o bastante",
      "Você sente culpa ao dizer não ou ao descansar",
      "Tem medo de errar, de desagradar ou de ficar sozinha",
      "O corpo reclama: tensão, insônia, cansaço, aperto no peito",
      "Você depende da aprovação ou da presença de alguém para se sentir bem",
    ],
  },
  help: {
    title: "Como a terapia ajuda",
    items: [
      {
        title: "Entender de onde vem",
        text: "Na escuta psicanalítica, você olha para o que se repete na sua história e dá sentido ao que sente.",
      },
      {
        title: "Aprender a lidar",
        text: "Com a Inteligência Emocional, você reconhece o que sente e ganha recursos para responder sem se desgastar.",
      },
      {
        title: "Ganhar autonomia",
        text: "Aos poucos, as escolhas deixam de ser guiadas pelo medo e passam a refletir o que você deseja.",
      },
    ],
  },
  about: {
    title: "Quem vai te atender",
    text: "Sou Monica Bello, psicóloga e psicanalista, com atendimento voltado à saúde mental das mulheres. Tenho especialização em Inteligência Emocional, estudo Neuropsicanálise e sou colunista da Psiquê Feminina.",
  },
  faq: [
    {
      q: "A terapia resolve a ansiedade?",
      a: "A terapia ajuda você a entender e lidar melhor com a ansiedade, no seu ritmo. Quando for necessária uma avaliação médica, eu oriento o encaminhamento.",
    },
    {
      q: "Quanto tempo dura o tratamento?",
      a: "Depende de cada pessoa. Na primeira sessão conversamos sobre o que você vive e combinamos juntas como seguir.",
    },
    {
      q: "Como funcionam as sessões online?",
      a: "Por videochamada, em um lugar reservado. Você precisa só de celular ou computador com internet.",
    },
    {
      q: "Como agendo?",
      a: "Pelo botão de WhatsApp desta página ou pelo calendário do Doctoralia. O pagamento é por Pix e não há convênio.",
    },
    {
      q: "E se eu estiver em crise agora?",
      a: "Se você sente que pode se machucar ou está em sofrimento intenso, procure um pronto-socorro ou ligue para o CVV, no 188, que atende 24 horas, de graça.",
    },
  ],
};

export const hero = {
  title: "Um espaço de escuta para você se reencontrar",
  text: "Psicóloga e psicanalista especializada em mulheres. Atendimento online, com escuta ética e sem julgamentos, para você cuidar da ansiedade, da autoestima e dos seus relacionamentos.",
  secondary: "Conhecer o trabalho",
};

// Faixa de confiança logo abaixo do topo
export const trust = [
  { value: "5,0", label: "no Doctoralia, em 9 avaliações", href: clinic.doctoralia },
  { value: "100% online", label: "para todo o Brasil e exterior" },
  { value: "Pontual", label: "e atenciosa, segundo as pacientes" },
];

export const about = {
  title: "Sobre mim",
  paragraphs: [
    "Sou psicóloga e psicanalista, e dedico meu trabalho à saúde mental das mulheres. Acredito que a terapia é um lugar para falar sem medo de ser julgada, entender o que se repete na sua história e construir mais autonomia emocional.",
    "Tenho especialização em Inteligência Emocional e estudo Neuropsicanálise, que aproxima a escuta psicanalítica do que a ciência hoje sabe sobre o cérebro. Também escrevo como colunista da Psiquê Feminina e faço palestras e workshops sobre saúde mental feminina.",
  ],
  credentials: [
    "Graduação em Psicologia, Faculdade Anhanguera de Piracicaba",
    "Pós-graduação, Faculdade Metropolitana",
    "Instituto Brasileiro de Psicanálise Clínica (IBPC)",
    "Especialização em Inteligência Emocional",
    "Colunista da Psiquê Feminina",
  ],
  caption: "Monica Bello, psicóloga e psicanalista",
};

export const topics = {
  eyebrow: "Para quem",
  title: "Quando procurar terapia",
  intro:
    "Atendo mulheres que sentem que estão sempre se cobrando demais, ou que perderam o rumo nas relações e em si mesmas. Alguns motivos que trazem as pacientes:",
  items: [
    "Ansiedade e preocupação constante",
    "Autoexigência e perfeccionismo",
    "Baixa autoestima e insegurança",
    "Dependência afetiva e emocional",
    "Conflitos em relacionamentos",
    "Instabilidade emocional, tristeza e solidão",
    "Ansiedade de separação",
    "Estresse e sobrecarga",
    "Desejo de autoconhecimento",
    "Mudanças de vida e de país",
  ],
};

export const steps = {
  eyebrow: "Como funciona",
  title: "Do primeiro contato à sessão",
  items: [
    {
      title: "Você me chama no WhatsApp",
      text: "Conversamos rapidamente sobre o que você busca e escolhemos um horário que caiba na sua rotina.",
    },
    {
      title: "A sessão é por vídeo",
      text: "O atendimento é online, de onde você estiver, com sigilo e a mesma qualidade de uma sessão presencial.",
    },
    {
      title: "Construímos o seu processo",
      text: "A cada encontro, você entende melhor seus padrões e ganha mais clareza para fazer suas escolhas.",
    },
  ],
  info: [
    { label: "Onde", value: "Online, por videochamada, de onde você estiver." },
    { label: "Horários", value: "Combinados pelo WhatsApp. Costuma haver vaga na mesma semana ou na seguinte." },
    { label: "Pagamento", value: "Particular, por Pix. Não aceito convênios." },
    { label: "Remarcação", value: "Sem custo, com aviso prévio." },
  ],
  abroad: {
    title: "Psicanálise para brasileiras no exterior",
    text: "Vive fora do Brasil? Atendo em português, no fuso que for melhor para você, para quem sente falta de uma escuta na própria língua.",
  },
};

export const reviews = {
  eyebrow: "Depoimentos",
  title: "O que dizem as pacientes",
  source: "Avaliações verificadas no Doctoralia",
  items: [
    { text: "Como sempre uma profissional maravilhosa, super indico." },
    { text: "Ótima ouvinte. Indico sem dúvidas!" },
    { text: "Excelente profissional, indico de olhos fechados!" },
  ],
};

export const ebook = {
  title: "E-book: Como ser um psicanalista",
  text: "Material para quem está começando na psicanálise, escrito por Monica.",
  cta: "Conhecer o e-book",
};

export const faq = {
  title: "Dúvidas frequentes",
  items: [
    {
      q: "O atendimento é online ou presencial?",
      a: "É 100% online, por videochamada. Você pode ficar em casa ou em qualquer lugar reservado, no Brasil ou no exterior.",
    },
    {
      q: "Para quem é o atendimento?",
      a: "Para mulheres adultas. Meu trabalho é voltado à saúde mental feminina, com foco em ansiedade, autoestima, relacionamentos e autonomia emocional.",
    },
    {
      q: "Como agendo a primeira sessão?",
      a: "Pelo WhatsApp ou pelo calendário do Doctoralia. Normalmente há horários livres na mesma semana ou na seguinte.",
    },
    {
      q: "Vocês aceitam convênios?",
      a: "Não. O atendimento é particular, com pagamento por Pix. A sessão pode ser remarcada ou cancelada sem custo, com aviso prévio.",
    },
    {
      q: "Qual é a linha de trabalho?",
      a: "Psicanálise, com atenção à inteligência emocional e aos aportes da Neuropsicanálise. A escuta é ética, sem julgamentos, no seu ritmo.",
    },
  ],
};

export const cta = {
  title: "Você não precisa dar conta de tudo sozinha",
  text: "Se você sente que é hora de cuidar de você, dê o primeiro passo. Vou ficar feliz em te ouvir.",
};
