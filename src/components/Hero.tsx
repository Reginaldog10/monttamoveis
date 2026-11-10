import React from "react";
import {
  MessageCircle,
  ShieldCheck,
  Home,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { HERO_CONTENT, SITE_IMAGES, getWhatsAppUrl } from "../data/siteContent";

interface HeroProps {
  onExplorePortfolio: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePortfolio }) => {
  const indicatorIcons = [
    <ShieldCheck key="exp" className="w-5 h-5 text-[#00A86B] shrink-0" />,
    <Home key="home" className="w-5 h-5 text-[#00A86B] shrink-0" />,
    <MapPin key="loc" className="w-5 h-5 text-[#00A86B] shrink-0" />,
  ];

  return (
    <section
      id="inicio"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 bg-gradient-to-b from-[#F5F7F6]/70 via-white to-white overflow-hidden"
    >
      {/* Elementos gráficos discretos em verde */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 right-0 w-96 h-96 rounded-full bg-[#00A86B]/[0.05] blur-3xl -z-10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-10 w-72 h-72 rounded-full bg-[#00A86B]/[0.04] blur-2xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Coluna Esquerda: Texto Comercial e Conversão */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            {/* Destaque de Experiência */}
            <div className="inline-flex items-center gap-2.5 bg-[#E6F6F0] border border-[#00A86B]/20 text-[#066839] px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#00A86B] animate-pulse shrink-0" />
              <span>{HERO_CONTENT.badge}</span>
            </div>

            {/* Título Principal H1 */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#111111] leading-[1.12] tracking-tight">
              {HERO_CONTENT.titleLine1}{" "}
              <span className="text-[#00A86B] block sm:inline">
                {HERO_CONTENT.titleHighlight}
              </span>
            </h1>

            {/* Subtítulo */}
            <p className="text-base sm:text-lg md:text-xl text-[#6B7280] leading-relaxed max-w-xl font-normal">
              {HERO_CONTENT.subtitle}
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#00A86B] hover:bg-[#066839] text-white font-semibold text-base px-7 py-4 rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,168,107,0.35)] hover:shadow-[0_15px_30px_-5px_rgba(0,168,107,0.45)] transition-all duration-200 active:scale-[0.99]"
              >
                <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                <span>{HERO_CONTENT.primaryCta}</span>
              </a>

              <button
                type="button"
                onClick={onExplorePortfolio}
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-[#F5F7F6] text-[#111111] font-semibold text-base px-6 py-4 rounded-2xl border border-gray-200 hover:border-[#00A86B]/40 transition-all duration-200"
              >
                <span>{HERO_CONTENT.secondaryCta}</span>
                <ArrowRight className="w-4 h-4 text-[#00A86B]" />
              </button>
            </div>

            {/* Pequenos Indicadores de Confiança */}
            <div className="pt-4 border-t border-gray-200/80">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                {HERO_CONTENT.trustIndicators.map((indicator, index) => (
                  <div
                    key={indicator.label}
                    className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-subtle"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#E6F6F0] flex items-center justify-center shrink-0">
                      {indicatorIcons[index]}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-[#111111] leading-tight">
                        {indicator.label}
                      </p>
                      <p className="text-[11px] text-[#6B7280] mt-0.5">
                        {indicator.sublabel}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna Direita: Fotografia Profissional de Móvel Montado + Identidade Oficial */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Moldura decorativa discreta */}
              <div
                aria-hidden="true"
                className="absolute -inset-3 bg-gradient-to-tr from-[#00A86B]/15 via-[#00A86B]/5 to-transparent rounded-3xl -z-10"
              />

              {/* Imagem Principal: Móvel real montado pela Montta Móveis */}
              <div className="relative rounded-3xl overflow-hidden bg-[#F5F7F6] border border-gray-200/80 shadow-card">
                <img
                  src={SITE_IMAGES.banners.heroMainPhoto}
                  alt="Guarda-roupa de 6 portas montado com perfeição pela Montta Móveis em Nova Serrana"
                  className="w-full h-[360px] sm:h-[440px] lg:h-[500px] object-cover object-center"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                {/* Selo sobre a fotografia real */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-sm flex items-center gap-2 border border-white/60">
                  <CheckCircle2 className="w-4 h-4 text-[#00A86B] shrink-0" />
                  <span className="text-xs font-semibold text-[#111111]">
                    Serviço real executado pela Montta Móveis
                  </span>
                </div>

                {/* Legenda inferior da foto principal */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-gray-100 max-w-xs">
                  <p className="text-xs font-bold uppercase tracking-wider text-[#00A86B]">
                    Acabamento Profissional
                  </p>
                  <p className="text-sm font-semibold text-[#111111] mt-0.5">
                    Portas alinhadas, estrutura firme e cuidado com o seu ambiente.
                  </p>
                </div>
              </div>

              {/* Card Secundário Destacado: Banner Oficial Montta Móveis */}
              <div className="mt-4 bg-white rounded-2xl p-3 sm:p-4 border border-gray-200/90 shadow-subtle flex items-center gap-4">
                <img
                  src={SITE_IMAGES.banners.heroBanner}
                  alt="Banner Oficial Montta Móveis - Profissional Uniformizado"
                  className="w-28 sm:w-36 h-16 sm:h-20 object-cover object-left rounded-xl border border-gray-100 shrink-0"
                />
                <div className="min-w-0">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#00A86B]">
                    Atendimento Especializado
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-[#111111] leading-snug mt-0.5">
                    Profissional identificado, pontual e preparado para cuidar dos seus móveis em Nova Serrana e região.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

