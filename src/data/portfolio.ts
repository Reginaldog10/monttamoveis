export type PortfolioCategoryId =
  | "todos"
  | "guarda-roupas"
  | "quartos"
  | "paineis-e-racks"
  | "cozinhas"
  | "outros-moveis";

export interface PortfolioCategory {
  id: PortfolioCategoryId;
  label: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: Exclude<PortfolioCategoryId, "todos">;
  secondaryCategories?: Exclude<PortfolioCategoryId, "todos">[];
  categoryLabel: string;
  image: string;
  description: string;
  details: string;
  location: string;
}

export const PORTFOLIO_SECTION_META = {
  title: "Nosso trabalho fala por nós.",
  subtitle: "Confira alguns dos serviços realizados pela Montta Móveis.",
};

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  { id: "todos", label: "Todos" },
  { id: "guarda-roupas", label: "Guarda-roupas" },
  { id: "quartos", label: "Quartos" },
  { id: "paineis-e-racks", label: "Painéis e racks" },
  { id: "cozinhas", label: "Cozinhas" },
  { id: "outros-moveis", label: "Outros móveis" },
];

/**
 * CADASTRO DE FOTOGRAFIAS REAIS DO PORTFÓLIO MONTTA MÓVEIS
 * Para adicionar novas fotos futuramente, basta colocar o arquivo em /public/images/portfolio/
 * e incluir um novo objeto na lista abaixo.
 */
export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    title: "Conjunto Painel Ripado e Rack para TV com Cristaleira",
    category: "paineis-e-racks",
    categoryLabel: "Painéis e racks",
    image: "/images/portfolio/painel-rack-tv-01.jpg",
    description:
      "Montagem completa e fixação nivelada de painel de TV amadeirado com prateleira superior, torre lateral com nichos e bancada com portas ripadas.",
    details: "Nivelamento de precisão, passagem oculta de cabos e fixação segura na parede.",
    location: "Nova Serrana – MG",
  },
  {
    id: 2,
    title: "Guarda-Roupa Casal 6 Portas com Moldura Amadeirada",
    category: "guarda-roupas",
    secondaryCategories: ["quartos"],
    categoryLabel: "Guarda-roupas",
    image: "/images/portfolio/guarda-roupa-6-portas-01.jpg",
    description:
      "Montagem profissional de guarda-roupa amplo de 6 portas em tom fendi/off-white com moldura estrutural e puxadores longos em madeira.",
    details: "Regulagem fina de todas as dobradiças para alinhamento simétrico das portas.",
    location: "Nova Serrana – MG",
  },
  {
    id: 3,
    title: "Guarda-Roupa 3 Portas de Correr com Espelho e 9 Gavetas",
    category: "guarda-roupas",
    secondaryCategories: ["quartos"],
    categoryLabel: "Guarda-roupas / Quartos",
    image: "/images/portfolio/guarda-roupa-correr-espelho-01.jpg",
    description:
      "Montagem de guarda-roupa com 3 portas de correr, espelho central integrado e 9 gavetas externas com corrediças perfeitamente ajustadas.",
    details: "Ajuste suave dos trilhos de correr, nivelamento das 9 gavetas e instalação segura do espelho.",
    location: "Nova Serrana – MG",
  },
  {
    id: 4,
    title: "Conjunto de Mesa de Jantar com 6 Cadeiras Estofadas",
    category: "outros-moveis",
    secondaryCategories: ["cozinhas"],
    categoryLabel: "Cozinhas / Sala de Jantar",
    image: "/images/portfolio/mesa-jantar-6-cadeiras-01.jpg",
    description:
      "Montagem de mesa de jantar moderna com base estrutural central, tampo com acabamento em vidro off-white e 6 cadeiras estofadas em matelassê.",
    details: "Firmeza estrutural na base e nas cadeiras, garantindo estabilidade e conforto no uso diário.",
    location: "Nova Serrana – MG",
  },
  {
    id: 5,
    title: "Guarda-Roupa 6 Portas Alto Brilho para Dormitório",
    category: "quartos",
    secondaryCategories: ["guarda-roupas"],
    categoryLabel: "Quartos",
    image: "/images/portfolio/guarda-roupa-6-portas-02.jpg",
    description:
      "Montagem de guarda-roupa de 6 portas em acabamento alto brilho com rodapé amadeirado e puxadores duplos centralizados.",
    details: "Esquadro rigoroso da caixa e regulagem das portas para fechamento macio e alinhado.",
    location: "Nova Serrana – MG",
  },
  {
    id: 6,
    title: "Guarda-Roupa Casal 6 Portas com Puxadores Alongados",
    category: "guarda-roupas",
    secondaryCategories: ["quartos"],
    categoryLabel: "Guarda-roupas",
    image: "/images/portfolio/guarda-roupa-6-portas-03.jpg",
    description:
      "Montagem residencial de guarda-roupa 6 portas com puxadores verticais em madeira e acabamento impecável.",
    details: "Montagem limpa, rápida e com total cuidado com o piso e o ambiente do cliente.",
    location: "Nova Serrana – MG",
  },
];

