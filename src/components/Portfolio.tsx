import React, { useState, useEffect, useCallback } from "react";
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_ITEMS,
  PORTFOLIO_SECTION_META,
  PortfolioCategoryId,
  PortfolioItem,
} from "../data/portfolio";
import { getWhatsAppUrl } from "../data/siteContent";
import {
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  MapPin,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface PortfolioProps {
  isDedicatedPage?: boolean;
  onOpenDedicatedPage?: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({
  isDedicatedPage = false,
  onOpenDedicatedPage,
}) => {
  const [activeCategory, setActiveCategory] =
    useState<PortfolioCategoryId>("todos");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems = PORTFOLIO_ITEMS.filter((item) => {
    if (activeCategory === "todos") return true;
    return (
      item.category === activeCategory ||
      (item.secondaryCategories &&
        item.secondaryCategories.includes(activeCategory))
    );
  });

  const handleOpenLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const handleCloseLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? filteredItems.length - 1 : prev - 1;
    });
  }, [filteredItems.length]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return null;
      return prev === filteredItems.length - 1 ? 0 : prev + 1;
    });
  }, [filteredItems.length]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleCloseLightbox();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleCloseLightbox, handlePrev, handleNext]);

  const currentLightboxItem: PortfolioItem | null =
    selectedIndex !== null && filteredItems[selectedIndex]
      ? filteredItems[selectedIndex]
      : null;

  const getSimilarServiceMessage = (item: PortfolioItem) =>
    `Olá! Vi no portfólio do site o serviço "${item.title}" e gostaria de solicitar um orçamento de um serviço semelhante.`;

  return (
    <section
      id="portfolio"
      className={`${
        isDedicatedPage ? "pt-28 pb-20 md:pt-36 md:pb-28" : "py-20 md:py-28"
      } bg-white`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00A86B] bg-[#E6F6F0] px-3.5 py-1.5 rounded-full mb-3">
            Portfólio Oficial
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight">
            {PORTFOLIO_SECTION_META.title}
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#6B7280] leading-relaxed">
            {PORTFOLIO_SECTION_META.subtitle}
          </p>
        </div>

        {/* Filtros por Categoria */}
        <div
          className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-3 mb-8 sm:mb-10 no-scrollbar"
          role="tablist"
          aria-label="Filtrar portfólio por categoria"
        >
          {PORTFOLIO_CATEGORIES.map((category) => {
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveCategory(category.id);
                  setSelectedIndex(null);
                }}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? "bg-[#00A86B] text-white shadow-sm"
                    : "bg-[#F5F7F6] text-[#6B7280] hover:bg-[#E6F6F0] hover:text-[#066839]"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Grid Responsivo (2 colunas no celular para ótima visualização, 3 no desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8">
          {filteredItems.map((item, index) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-subtle hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              {/* Fotografia com cantos arredondados e Lightbox ao clicar */}
              <div
                onClick={() => handleOpenLightbox(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOpenLightbox(index);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Ampliar fotografia: ${item.title}`}
                className="relative aspect-[4/5] sm:aspect-[4/4] overflow-hidden bg-[#F5F7F6] cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Etiqueta de Categoria */}
                <span className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md text-[#111111] text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-lg shadow-sm">
                  {item.categoryLabel}
                </span>

                {/* Ícone de Zoom */}
                <div className="absolute top-2.5 right-2.5 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-black/40 group-hover:bg-[#00A86B] text-white backdrop-blur-sm flex items-center justify-center transition-colors">
                  <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>

                {/* Resumo sobreposto no mobile/desktop */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                  <p className="text-[10px] sm:text-xs text-white/85 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#00A86B] shrink-0" />
                    <span>{item.location}</span>
                  </p>
                  <h3 className="font-display text-xs sm:text-base font-bold leading-snug mt-0.5 line-clamp-2">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Descrição e Botão de Orçamento Semelhante */}
              <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between bg-white">
                <p className="hidden sm:block text-xs sm:text-sm text-[#6B7280] leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>

                <a
                  href={getWhatsAppUrl(getSimilarServiceMessage(item))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#E6F6F0] hover:bg-[#00A86B] text-[#066839] hover:text-white font-semibold text-[11px] sm:text-xs transition-all duration-200 text-center"
                >
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  <span className="truncate">
                    Solicitar orçamento semelhante
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Rodapé da seção de portfólio */}
        {!isDedicatedPage && onOpenDedicatedPage && (
          <div className="mt-10 sm:mt-12 text-center">
            <button
              type="button"
              onClick={onOpenDedicatedPage}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#00A86B] hover:text-[#066839] bg-[#F5F7F6] hover:bg-[#E6F6F0] px-6 py-3.5 rounded-xl transition-all"
            >
              <span>Abrir página exclusiva do Portfólio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Modal Lightbox Profissional */}
      {currentLightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={currentLightboxItem.title}
          onClick={handleCloseLightbox}
        >
          <div
            className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão Fechar */}
            <button
              type="button"
              onClick={handleCloseLightbox}
              className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
              aria-label="Fechar visualização"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Área da Fotografia com Navegação */}
            <div className="lg:col-span-7 relative bg-[#111111] flex items-center justify-center min-h-[280px] sm:min-h-[420px] lg:min-h-[540px]">
              <img
                src={currentLightboxItem.image}
                alt={currentLightboxItem.title}
                className="max-h-[55vh] lg:max-h-[82vh] w-auto object-contain"
              />

              {/* Botões Anterior / Próxima */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#111111] shadow-lg flex items-center justify-center transition-transform active:scale-95"
                    aria-label="Fotografia anterior"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/90 hover:bg-white text-[#111111] shadow-lg flex items-center justify-center transition-transform active:scale-95"
                    aria-label="Próxima fotografia"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}

              {/* Contador */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs font-medium px-3 py-1 rounded-full">
                {(selectedIndex ?? 0) + 1} de {filteredItems.length}
              </div>
            </div>

            {/* Detalhes e Conversão no Lightbox */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00A86B]">
                  <span>{currentLightboxItem.categoryLabel}</span>
                  <span>•</span>
                  <span>{currentLightboxItem.location}</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#111111] mt-2">
                  {currentLightboxItem.title}
                </h3>

                <p className="mt-3 text-sm sm:text-base text-[#6B7280] leading-relaxed">
                  {currentLightboxItem.description}
                </p>

                <div className="mt-5 p-4 rounded-2xl bg-[#F5F7F6] border border-gray-100 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00A86B] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold text-[#111111] uppercase tracking-wide">
                      Padrão de Qualidade Montta
                    </p>
                    <p className="text-xs sm:text-sm text-[#6B7280] mt-1">
                      {currentLightboxItem.details}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-gray-100 space-y-3">
                <a
                  href={getWhatsAppUrl(
                    getSimilarServiceMessage(currentLightboxItem)
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#00A86B] hover:bg-[#066839] text-white font-semibold text-sm sm:text-base py-4 px-5 rounded-xl shadow-md transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                  <span>Solicitar orçamento de um serviço semelhante</span>
                </a>
                <button
                  type="button"
                  onClick={handleCloseLightbox}
                  className="w-full py-2.5 text-xs font-semibold text-[#6B7280] hover:text-[#111111] transition-colors"
                >
                  Voltar para a galeria
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

