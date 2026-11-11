export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  iconName: 'Wrench' | 'PackageOpen' | 'Truck' | 'Settings' | 'DoorClosed' | 'Tv';
  image: string;
  imageAlt: string;
  highlights: string[];
  whatsappMessage: string;
}

export interface DifferentialItem {
  id: number;
  title: string;
  description: string;
  iconName: 'Award' | 'ShieldCheck' | 'Home' | 'MessageCircle';
}

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
  iconName: 'MessageSquare' | 'Camera' | 'FileCheck' | 'CalendarCheck';
}

export interface GoogleReviewItem {
  id: number;
  author: string;
  rating: number;
  date: string;
  comment: string;
}

/**
 * CONFIGURAÇÃO CENTRAL DA MONTTA MÓVEIS
 * Insira abaixo o número oficial do WhatsApp (apenas números, com DDI 55 e DDD, ex: "5537999999999")
 * e os links oficiais do Instagram e Perfil da Empresa no Google quando desejar.
 */
export const CONTACT_CONFIG = {
  // Número oficial da Montta Móveis
  whatsappNumber: "5537998585154",
  whatsappDisplay: "(37) 99858-5154",
  defaultWhatsappMessage:
    "Olá! Vim pelo site da Montta Móveis e gostaria de solicitar um orçamento.",
  instagramUrl: "https://www.instagram.com/monttamoveis/",
  instagramHandle: "@monttamoveis",
  googleBusinessProfileUrl: "", // Insira o link do Perfil da Empresa no Google / Google Maps quando disponível
  city: "Nova Serrana",
  state: "Minas Gerais",
  stateShort: "MG",
  serviceArea: "Nova Serrana e região",
  attendanceModel: "Atendimento exclusivamente na residência ou estabelecimento dos clientes",
  experienceYears: "Mais de 8 anos de experiência",
};

/**
 * Gera o link oficial wa.me com mensagem personalizada pré-configurada.
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = encodeURIComponent(
    customMessage || CONTACT_CONFIG.defaultWhatsappMessage
  );
  const cleanPhone = CONTACT_CONFIG.whatsappNumber.replace(/\D/g, "");
  if (cleanPhone) {
    return `https://wa.me/${cleanPhone}?text=${message}`;
  }
  return `https://wa.me/?text=${message}`;
}

export const SITE_IMAGES = {
  logo: {
    dark: "/images/logo/logo-montta-escuro.png",
    light: "/images/logo/logo-montta-claro.png",
  },
  banners: {
    heroBanner: "/images/banners/banner-hero-montta.png",
    ogShareImage: "/images/banners/og-montta-moveis.png",
    heroMainPhoto: "/images/portfolio/guarda-roupa-6-portas-01.jpg",
    heroSecondaryPhoto: "/images/portfolio/painel-rack-tv-01.jpg",
  },
  familia: {
    portrait: "/images/familia/retrato-familiar-montta.png",
  },
};

export const HERO_CONTENT = {
  badge: "Mais de 8 anos de experiência atendendo Nova Serrana e região.",
  titleLine1: "Seu móvel bem montado.",
  titleHighlight: "Sua casa ainda melhor.",
  subtitle:
    "Montagem, desmontagem e reparos de móveis com profissionalismo, cuidado e atenção aos detalhes.",
  primaryCta: "Solicitar orçamento pelo WhatsApp",
  secondaryCta: "Conhecer nosso portfólio",
  trustIndicators: [
    {
      label: "8+ anos de experiência",
      sublabel: "Tradição e confiança",
    },
    {
      label: "Atendimento em domicílio",
      sublabel: "Na sua casa ou empresa",
    },
    {
      label: "Nova Serrana e região",
      sublabel: "Agilidade no atendimento",
    },
  ],
};

export const ALL_SERVICES_LIST: string[] = [
  "Montagem de móveis novos",
  "Montagem de móveis usados",
  "Desmontagem de móveis",
  "Montagem e desmontagem para mudanças",
  "Reparos e ajustes em móveis",
  "Montagem de guarda-roupas",
  "Montagem de camas e cômodas",
  "Montagem de painéis e racks",
  "Montagem de móveis de cozinha",
  "Montagem de móveis em geral",
];

export const SERVICES_SECTION = {
  title: "Especialistas em montagem de móveis.",
  subtitle:
    "Da montagem de um móvel novo aos ajustes e reparos, conte com a Montta.",
  categories: [
    {
      id: "montagem-de-moveis",
      title: "Montagem de móveis",
      description:
        "Montagem técnica de móveis novos e usados adquiridos na internet ou em lojas físicas, garantindo alinhamento, firmeza e acabamento impecável.",
      iconName: "Wrench",
      image: "/images/servicos/servico-montagem-moveis.jpg",
      imageAlt: "Guarda-roupa novo montado pela Montta Móveis em Nova Serrana",
      highlights: ["Móveis novos na caixa", "Móveis usados", "Todas as marcas e modelos"],
      whatsappMessage:
        "Olá! Conheci a Montta Móveis pelo site e gostaria de solicitar um orçamento para *Montagem de móveis*.",
    },
    {
      id: "desmontagem-de-moveis",
      title: "Desmontagem de móveis",
      description:
        "Desmontagem cuidadosa preservando a integridade das peças, ferragens e parafusos para transporte seguro ou reorganização do ambiente.",
      iconName: "PackageOpen",
      image: "/images/servicos/servico-desmontagem.jpg",
      imageAlt: "Serviço de desmontagem e montagem profissional Montta Móveis",
      highlights: ["Organização de ferragens", "Cuidado com as peças", "Preparo seguro"],
      whatsappMessage:
        "Olá! Conheci a Montta Móveis pelo site e gostaria de solicitar um orçamento para *Desmontagem de móveis*.",
    },
    {
      id: "montagem-para-mudancas",
      title: "Montagem para mudanças",
      description:
        "Serviço completo de desmontagem no endereço de origem e remontagem no novo lar, com ajustes finos para que seus móveis fiquem perfeitos.",
      iconName: "Truck",
      image: "/images/servicos/servico-reparos-mudancas.jpg",
      imageAlt: "Guarda-roupa montado com precisão em mudança residencial",
      highlights: ["Desmontagem e remontagem", "Nivelamento no novo espaço", "Agilidade para sua mudança"],
      whatsappMessage:
        "Olá! Conheci a Montta Móveis pelo site e gostaria de solicitar um orçamento para *Montagem e desmontagem para mudanças*.",
    },
    {
      id: "reparos-e-ajustes",
      title: "Reparos e ajustes",
      description:
        "Regulagem de portas desalinhadas, substituição de dobradiças, corrediças de gavetas, puxadores e reforço estrutural para renovar seus móveis.",
      iconName: "Settings",
      image: "/images/servicos/servico-guarda-roupas.jpg",
      imageAlt: "Guarda-roupa com portas de correr e gavetas perfeitamente alinhadas",
      highlights: ["Regulagem de portas e gavetas", "Troca de dobradiças e corrediças", "Reforço estrutural"],
      whatsappMessage:
        "Olá! Conheci a Montta Móveis pelo site e gostaria de solicitar um orçamento para *Reparos e ajustes em móveis*.",
    },
    {
      id: "guarda-roupas-e-dormitorios",
      title: "Guarda-roupas e dormitórios",
      description:
        "Especialidade em guarda-roupas de portas de correr ou bater, com espelho, camas, cabeceiras, beliches e cômodas de todos os portes.",
      iconName: "DoorClosed",
      image: "/images/portfolio/guarda-roupa-correr-espelho-01.jpg",
      imageAlt: "Montagem de guarda-roupa com espelho e gavetas pela Montta Móveis",
      highlights: ["Portas de correr e bater", "Camas e cômodas", "Instalação segura de espelhos"],
      whatsappMessage:
        "Olá! Conheci a Montta Móveis pelo site e gostaria de solicitar um orçamento para *Montagem de guarda-roupas ou dormitório*.",
    },
    {
      id: "paineis-racks-e-cozinhas",
      title: "Painéis, racks e cozinhas",
      description:
        "Instalação nivelada de painéis de TV, racks, armários modulados de cozinha, balcões e conjuntos de mesa de jantar com máxima segurança.",
      iconName: "Tv",
      image: "/images/servicos/servico-paineis-racks.jpg",
      imageAlt: "Painel e rack de TV montados pela Montta Móveis",
      highlights: ["Fixação segura na parede", "Móveis de cozinha e jantar", "Painéis ripados e racks"],
      whatsappMessage:
        "Olá! Conheci a Montta Móveis pelo site e gostaria de solicitar um orçamento para *Montagem de painel, rack ou cozinha*.",
    },
  ] as ServiceCategory[],
};

export const ABOUT_SECTION = {
  title: "Mais do que montar móveis, construímos confiança.",
  paragraphs: [
    "A Montta Móveis nasceu com o propósito de oferecer serviços de montagem e manutenção de móveis com qualidade, responsabilidade e atenção aos detalhes.",
    "São mais de 8 anos de experiência, atendendo famílias de Nova Serrana e região, sempre buscando entregar um serviço bem-feito e a satisfação de cada cliente.",
    "Nosso compromisso é cuidar de cada móvel como se fosse para nossa própria casa.",
  ],
  highlights: [
    "Empresa com identidade familiar e atendimento próximo",
    "Pontualidade, limpeza e respeito ao seu lar",
    "Ferramentas profissionais adequadas para cada montagem",
  ],
};

export const DIFFERENTIALS_SECTION = {
  title: "Por que escolher a Montta Móveis?",
  items: [
    {
      id: 1,
      title: "Experiência",
      description: "Mais de 8 anos de experiência no segmento.",
      iconName: "Award",
    },
    {
      id: 2,
      title: "Compromisso",
      description: "Responsabilidade e cuidado em cada montagem.",
      iconName: "ShieldCheck",
    },
    {
      id: 3,
      title: "Atendimento",
      description: "Atendimento diretamente na sua residência.",
      iconName: "Home",
    },
    {
      id: 4,
      title: "Praticidade",
      description: "Solicite seu orçamento de forma rápida pelo WhatsApp.",
      iconName: "MessageCircle",
    },
  ] as DifferentialItem[],
};

/**
 * SEÇÃO DE AVALIAÇÕES DO GOOGLE
 * Nenhuma avaliação falsa foi inventada. Quando tiver avaliações reais do Google,
 * basta adicioná-las na lista `reviews` abaixo.
 */
export const TESTIMONIALS_SECTION = {
  title: "A satisfação dos nossos clientes é nossa prioridade.",
  subtitle:
    "Nosso maior orgulho é ver cada móvel bem montado e cada família satisfeita em Nova Serrana e região.",
  reviews: [] as GoogleReviewItem[],
};

export const HOW_IT_WORKS_SECTION = {
  title: "Contratar a Montta é simples.",
  subtitle: "Veja como é rápido e prático agendar a montagem ou reparo do seu móvel.",
  steps: [
    {
      step: "01",
      title: "Entre em contato.",
      description: "Envie uma mensagem pelo WhatsApp.",
      iconName: "MessageSquare",
    },
    {
      step: "02",
      title: "Envie as informações.",
      description:
        "Informe qual móvel precisa de montagem ou reparo. Se possível, envie fotografias.",
      iconName: "Camera",
    },
    {
      step: "03",
      title: "Receba seu orçamento.",
      description: "Aguarde nossa avaliação e proposta.",
      iconName: "FileCheck",
    },
    {
      step: "04",
      title: "Agende seu atendimento.",
      description: "Combine o melhor dia e horário para realizar o serviço.",
      iconName: "CalendarCheck",
    },
  ] as HowItWorksStep[],
};

export const CONTACT_SECTION = {
  title: "Precisando montar seus móveis?",
  subtitle: "Fale com a Montta Móveis e solicite seu orçamento.",
  attendanceNote:
    "Atendemos exclusivamente em domicílio (na sua residência ou empresa) em Nova Serrana – MG e região.",
};

export const FOOTER_CONTENT = {
  description:
    "Especialistas em montagem, desmontagem e reparos de móveis em geral. Mais de 8 anos levando profissionalismo, cuidado e confiança para lares e empresas de Nova Serrana e região.",
  copyright: "© 2026 Montta Móveis. Todos os direitos reservados.",
};

