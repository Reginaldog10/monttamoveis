import React from "react";
import {
  MessageCircle,
  MapPin,
  Home,
  Instagram,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import {
  CONTACT_SECTION,
  CONTACT_CONFIG,
  getWhatsAppUrl,
} from "../data/siteContent";

export const Contact: React.FC = () => {
  return (
    <section
      id="contato"
      className="py-20 md:py-28 bg-[#F5F7F6] border-t border-gray-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-[#111111] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl">
          {/* Detalhe luminoso em verde */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#00A86B]/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#00A86B]/15 blur-3xl"
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Texto e Botão Principal de Conversão */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00A86B] bg-[#00A86B]/15 border border-[#00A86B]/30 px-3.5 py-1.5 rounded-full">
                Atendimento Rápido
              </span>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
                {CONTACT_SECTION.title}
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
                {CONTACT_SECTION.subtitle}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-[#00A86B] hover:bg-[#066839] text-white font-bold text-base sm:text-lg px-8 py-4 sm:py-5 rounded-2xl shadow-[0_10px_30px_-5px_rgba(0,168,107,0.5)] transition-all duration-200 active:scale-[0.99]"
                >
                  <MessageCircle className="w-6 h-6 fill-current shrink-0" />
                  <span>Solicitar orçamento pelo WhatsApp</span>
                </a>

                <a
                  href={CONTACT_CONFIG.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base px-6 py-4 sm:py-5 rounded-2xl border border-white/15 transition-all"
                >
                  <Instagram className="w-5 h-5 text-[#00A86B]" />
                  <span>Siga no Instagram</span>
                </a>
              </div>

              {CONTACT_CONFIG.googleBusinessProfileUrl ? (
                <div className="pt-1">
                  <a
                    href={CONTACT_CONFIG.googleBusinessProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-300 hover:text-[#00A86B] transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-[#00A86B]" />
                    <span>Ver localização de atendimento no Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : null}
            </div>

            {/* Cards Informativos de Atendimento */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#00A86B]/20 text-[#00A86B] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-white">
                      Região de Atendimento
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Atendemos em <strong className="text-white">Nova Serrana – MG e região</strong> com agilidade e pontualidade.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#00A86B]/20 text-[#00A86B] flex items-center justify-center shrink-0">
                    <Home className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-white">
                      Atendimento Exclusivo no Local
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      {CONTACT_CONFIG.attendanceModel}. Vamos até você com todas as ferramentas necessárias.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#00A86B]/20 text-[#00A86B] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-white">
                      Orçamento Prático e Sem Compromisso
                    </h3>
                    <p className="text-sm text-gray-300 mt-1">
                      Envie uma foto ou o modelo do móvel pelo WhatsApp e receba sua avaliação rapidamente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

