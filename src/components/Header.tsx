import React, { useState, useEffect } from "react";
import { Menu, X, MessageCircle, ArrowUpRight, Grid } from "lucide-react";
import { SITE_IMAGES, getWhatsAppUrl } from "../data/siteContent";

interface HeaderProps {
  currentPage: "home" | "portfolio";
  onNavigate: (page: "home" | "portfolio", sectionId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: "home" | "portfolio",
    sectionId?: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(page, sectionId);
  };

  const navItems = [
    { label: "Início", sectionId: "inicio", page: "home" as const },
    { label: "Serviços", sectionId: "servicos", page: "home" as const },
    { label: "Portfólio", sectionId: "portfolio", page: "home" as const },
    { label: "Sobre nós", sectionId: "sobre", page: "home" as const },
    { label: "Contato", sectionId: "contato", page: "home" as const },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md transition-all duration-300 ${
        isScrolled
          ? "shadow-[0_4px_24px_-4px_rgba(17,17,17,0.06)] border-b border-gray-100 py-3"
          : "border-b border-gray-100/80 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logomarca Oficial Montta Móveis */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, "home", "inicio")}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Montta Móveis - Página Inicial"
          >
            <img
              src={SITE_IMAGES.logo.dark}
              alt="Logomarca Montta Móveis - Montagem de Móveis em Geral"
              className="h-10 sm:h-11 md:h-12 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </a>

          {/* Navegação Desktop */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Navegação Principal"
          >
            {navItems.map((item) => {
              const isPortfolioActive =
                currentPage === "portfolio" && item.sectionId === "portfolio";
              return (
                <a
                  key={item.label}
                  href={`#${item.sectionId}`}
                  onClick={(e) => handleNavClick(e, item.page, item.sectionId)}
                  className={`text-sm font-medium transition-colors duration-200 relative py-1 ${
                    isPortfolioActive
                      ? "text-[#00A86B] font-semibold"
                      : "text-[#111111]/80 hover:text-[#00A86B]"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <button
              type="button"
              onClick={() =>
                onNavigate(
                  currentPage === "portfolio" ? "home" : "portfolio",
                  currentPage === "portfolio" ? "inicio" : undefined
                )
              }
              className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-200 ${
                currentPage === "portfolio"
                  ? "border-[#00A86B] bg-[#E6F6F0] text-[#00A86B]"
                  : "border-gray-200 text-[#6B7280] hover:border-[#00A86B]/40 hover:text-[#00A86B]"
              }`}
            >
              <Grid className="w-3.5 h-3.5" />
              {currentPage === "portfolio"
                ? "Voltar à Página Inicial"
                : "Galeria Completa"}
            </button>
          </nav>

          {/* CTA Principal Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#00A86B] hover:bg-[#066839] text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 active:scale-[0.99]"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Solicitar orçamento</span>
            </a>
          </div>

          {/* Botão Menu Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex md:hidden items-center justify-center gap-1.5 bg-[#00A86B] hover:bg-[#066839] text-white font-semibold text-xs px-3.5 py-2.5 rounded-xl shadow-sm transition-all"
              aria-label="Solicitar orçamento pelo WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Orçamento</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#111111] hover:bg-[#F5F7F6] transition-colors focus:outline-none focus:ring-2 focus:ring-[#00A86B]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu de navegação"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-[#111111]" />
              ) : (
                <Menu className="w-6 h-6 text-[#111111]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile Responsivo */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl animate-fade-in">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-1.5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`#${item.sectionId}`}
                onClick={(e) => handleNavClick(e, item.page, item.sectionId)}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium text-[#111111] hover:bg-[#F5F7F6] hover:text-[#00A86B] transition-colors"
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#6B7280]" />
              </a>
            ))}

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate(
                  currentPage === "portfolio" ? "home" : "portfolio",
                  currentPage === "portfolio" ? "inicio" : undefined
                );
              }}
              className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium text-[#00A86B] bg-[#F5F7F6] hover:bg-[#E6F6F0] transition-colors"
            >
              <span className="flex items-center gap-2">
                <Grid className="w-4 h-4" />
                {currentPage === "portfolio"
                  ? "Voltar para a Página Inicial"
                  : "Página exclusiva de Portfólio"}
              </span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="pt-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2.5 bg-[#00A86B] hover:bg-[#066839] text-white font-semibold text-base py-4 px-6 rounded-xl shadow-md transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Solicitar orçamento pelo WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

