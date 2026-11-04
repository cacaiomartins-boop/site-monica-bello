// Todos os textos, links e imagens do site ficam aqui.
// Fonte: perfil da profissional no Doctoralia, Instagram e Linktree (04/11/2026).
// Valores de sessão NÃO aparecem no site (decisão padrão; confirmar com ela se quiser exibir).

export const clinic = {
  name: "Mônica Bello",
  shortName: "Mônica Bello",
  title: "Psicóloga e Psicanalista",
  crp: "CRP 06/236284",
  city: "Piracicaba, SP",
  whatsapp: "5519991776573",
  whatsappLabel: "(19) 99177-6573",
  whatsappMessage: "Olá, Mônica! Vi seu site e gostaria de agendar uma sessão.",
  doctoralia: "https://www.doctoralia.com.br/perfil/monica-bello",
  instagram: "https://www.instagram.com/psi.monicabello",
  instagramHandle: "@psi.monicabello",
  ebook: "https://sun.eduzz.com/Z0BBX6N70A",
  // Rótulo único do botão de ação, repetido no menu, no topo e no fim da página.
  cta: "Agendar sessão",
  images: {
    portrait: "/img/monica.webp",
    space: "/img/espaco.png",
  },
};

export const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#para-quem", label: "Para quem" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#duvidas", label: "Dúvidas" },
];

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
  caption: "Meu espaço de atendimento",
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
  text: "Material para quem está começando na psicanálise, escrito por Mônica.",
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
