# Site Oficial — Montta Móveis (Nova Serrana – MG)

Site institucional estático de alta conversão desenvolvido em **React + Vite + TypeScript + Tailwind CSS**, focado em experiência **Mobile First**, **SEO Local** e **conversão pelo WhatsApp**.

---

## Como personalizar o Número do WhatsApp e Redes Sociais

Abra o arquivo [`src/data/siteContent.ts`](./src/data/siteContent.ts) e edite o bloco `CONTACT_CONFIG`:

```ts
export const CONTACT_CONFIG = {
  // Insira apenas números com DDI 55 e DDD (Ex: "5537999999999")
  whatsappNumber: "5537999595154",
  instagramUrl: "https://www.instagram.com/monttamoveis",
  googleBusinessProfileUrl: "https://g.page/r/...",
  ...
};
```

---

## Como adicionar novas fotos ao Portfólio

1. Coloque a nova fotografia na pasta `/public/images/portfolio/`.
2. Abra o arquivo [`src/data/portfolio.ts`](./src/data/portfolio.ts) e adicione um novo item ao array `PORTFOLIO_ITEMS`:

```ts
{
  id: 7,
  title: "Montagem de guarda-roupa",
  category: "guarda-roupas",
  categoryLabel: "Guarda-roupas",
  image: "/images/portfolio/nova-foto.jpg",
  description: "Montagem profissional de guarda-roupa.",
  details: "Alinhamento de portas e acabamento impecável.",
  location: "Nova Serrana – MG"
}
```

---

## Comandos do Projeto

- **Executar em desenvolvimento:** `npm run dev`
- **Gerar versão de produção (estática para Netlify):** `npm run build`
- **Visualizar build de produção:** `npm run preview`

