import React from "react";
import { MessageCircle, Instagram, MapPin } from "lucide-react";
import {
  SITE_IMAGES,
  FOOTER_CONTENT,
  CONTACT_CONFIG,
  ALL_SERVICES_LIST,
  getWhatsAppUrl,
} from "../data/siteContent";

interface FooterProps {
  onNavigate: (page: "home" | "portfolio", sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLink = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: "home" | "portfolio",
    sectionId?: string
  ) => {
    e.preventDefault();
    onNavigate(page, sectionId);
  };

  return (
    <footer className="bg-white border-t border-gray-200/80 pt-16 pb-24 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-100">
          {/* Coluna 1: Logomarca e Descrição */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#inicio"
              onClick={(e) => handleLink(e, "home", "inicio")}
              className="inline-block"
            >
              <img
                src={SITE_IMAGES.logo.dark}
                alt="Montta Móveis - Montagem de Móveis em Geral"
                className="h-12 w-auto object-contain mix-blend-multiply"
              />
            </a>
            <p className="text-sm text-[#6B7280] leading-relaxed max-w-sm">
              {FOOTER_CONTENT.description}
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#111111] pt-1">
              <MapPin className="w-4 h-4 text-[#00A86B] shrink-0" />
              <span>
                Área de atendimento: {CONTACT_CONFIG.serviceArea} – {CONTACT_CONFIG.stateShort}
              </span>
            </div>
          </div>

          {/* Coluna 2: Links de Navegação */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#111111]">
              Navegação
            </h3>
            <ul className="space-y-2.5 text-sm text-[#6B7280]">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => handleLink(e, "home", "inicio")}
                  className="hover:text-[#00A86B] transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#servicos"
                  onClick={(e) => handleLink(e, "home", "servicos")}
                  className="hover:text-[#00A86B] transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  onClick={(e) => handleLink(e, "home", "portfolio")}
                  className="hover:text-[#00A86B] transition-colors"
                >
                  Portfólio
                </a>
              </li>
              <li>
                <a
                  href="/portfolio"
                  onClick={(e) => handleLink(e, "portfolio")}
                  className="hover:text-[#00A86B] transition-colors"
                >
                  Galeria Completa
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  onClick={(e) => handleLink(e, "home", "sobre")}
                  className="hover:text-[#00A86B] transition-colors"
                >
                  Sobre nós
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={(e) => handleLink(e, "home", "contato")}
                  className="hover:text-[#00A86B] transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Serviços */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#111111]">
              Principais Serviços
            </h3>
            <ul className="space-y-2 text-sm text-[#6B7280]">
              {ALL_SERVICES_LIST.slice(0, 6).map((service) => (
                <li key={service} className="truncate">
                  <a
                    href="#servicos"
                    onClick={(e) => handleLink(e, "home", "servicos")}
                    className="hover:text-[#00A86B] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Canais de Atendimento */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#111111]">
              Canais de Contato
            </h3>
            <p className="text-xs text-[#6B7280] leading-relaxed">
              Atendimento exclusivo na residência ou estabelecimento do cliente em Nova Serrana e região.
            </p>

            <div className="space-y-2.5">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#00A86B] hover:bg-[#066839] text-white font-semibold text-xs sm:text-sm py-3 px-4 rounded-xl transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chamar no WhatsApp</span>
              </a>

              <a
                href={CONTACT_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#F5F7F6] hover:bg-[#E6F6F0] text-[#111111] hover:text-[#066839] font-semibold text-xs sm:text-sm py-3 px-4 rounded-xl transition-all"
              >
                <Instagram className="w-4 h-4 text-[#00A86B]" />
                <span>Instagram Oficial</span>
              </a>
            </div>
          </div>
        </div>

        {/* Direitos Autorais */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <p>{FOOTER_CONTENT.copyright}</p>
          <p>
            Montta Móveis • Nova Serrana – MG e região
          </p>
        </div>
      </div>
    </footer>
  );
};

