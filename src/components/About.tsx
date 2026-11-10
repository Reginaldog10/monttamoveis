import React from "react";
import { CheckCircle2, HeartHandshake, MessageCircle } from "lucide-react";
import { ABOUT_SECTION, SITE_IMAGES, getWhatsAppUrl } from "../data/siteContent";

export const About: React.FC = () => {
  return (
    <section
      id="sobre"
      className="py-20 md:py-28 bg-[#F5F7F6] border-y border-gray-200/60 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Coluna da Fotografia Real da Família Montta Móveis */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              <div
                aria-hidden="true"
                className="absolute -inset-4 bg-[#00A86B]/10 rounded-full blur-2xl -z-10"
              />
              <div className="bg-white p-5 sm:p-7 rounded-3xl border border-gray-200/80 shadow-card">
                <img
                  src={SITE_IMAGES.familia.portrait}
                  alt="Família Montta Móveis - Tradição, confiança e cuidado em cada montagem"
                  loading="lazy"
                  className="w-full h-auto object-contain rounded-2xl"
                />
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[#E6F6F0] flex items-center justify-center shrink-0">
                      <HeartHandshake className="w-5 h-5 text-[#00A86B]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#111111]">
                        Dedicação de família para família
                      </p>
                      <p className="text-[11px] text-[#6B7280]">
                        Nova Serrana – Minas Gerais
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-extrabold text-[#00A86B] bg-[#E6F6F0] px-3 py-1 rounded-full">
                    8+ Anos
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna de Conteúdo Institucional */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00A86B] bg-[#E6F6F0] px-3.5 py-1.5 rounded-full mb-3">
                Sobre a Montta
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111] leading-tight tracking-tight">
                {ABOUT_SECTION.title}
              </h2>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#6B7280] leading-relaxed">
              {ABOUT_SECTION.paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className={
                    idx === ABOUT_SECTION.paragraphs.length - 1
                      ? "font-semibold text-[#111111] bg-white p-4 sm:p-5 rounded-2xl border-l-4 border-[#00A86B] shadow-subtle"
                      : ""
                  }
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Pilares de Atendimento */}
            <div className="pt-2 space-y-2.5">
              {ABOUT_SECTION.highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#00A86B] shrink-0" />
                  <span className="text-sm sm:text-base font-medium text-[#111111]">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#00A86B] hover:bg-[#066839] text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Falar diretamente com a Montta Móveis</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

