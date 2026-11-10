import React from "react";
import { Star, ExternalLink, MessageCircle, ShieldCheck } from "lucide-react";
import {
  TESTIMONIALS_SECTION,
  CONTACT_CONFIG,
  getWhatsAppUrl,
} from "../data/siteContent";

export const Testimonials: React.FC = () => {
  const hasReviews = TESTIMONIALS_SECTION.reviews.length > 0;

  return (
    <section className="py-20 md:py-24 bg-[#F5F7F6] border-y border-gray-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00A86B] bg-[#E6F6F0] px-3.5 py-1.5 rounded-full mb-3">
            Avaliações de Clientes
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight">
            {TESTIMONIALS_SECTION.title}
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#6B7280] leading-relaxed">
            {TESTIMONIALS_SECTION.subtitle}
          </p>
        </div>

        {hasReviews ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_SECTION.reviews.map((review) => (
              <article
                key={review.id}
                className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-subtle flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-[#00A86B] mb-3">
                    {Array.from({ length: review.rating }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-[#111111] leading-relaxed">
                    "{review.comment}"
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-sm font-bold text-[#111111]">
                    {review.author}
                  </span>
                  <span className="text-xs text-[#6B7280]">{review.date}</span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* Estrutura preparada para avaliações reais do Google sem inventar depoimentos */
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-gray-200/90 shadow-subtle text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#E6F6F0] text-[#00A86B] mb-5">
              <ShieldCheck className="w-7 h-7" />
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[#00A86B] mb-3">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>

            <h3 className="font-display text-xl sm:text-2xl font-bold text-[#111111]">
              Transparência e compromisso real em cada atendimento
            </h3>

            <p className="mt-3 text-sm sm:text-base text-[#6B7280] max-w-xl mx-auto leading-relaxed">
              Há mais de 8 anos construímos nossa reputação em Nova Serrana e região pelo atendimento caprichoso e pela indicação direta de clientes satisfeitos. Já foi atendido pela Montta Móveis ou deseja conhecer mais sobre nosso trabalho?
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              {CONTACT_CONFIG.googleBusinessProfileUrl ? (
                <a
                  href={CONTACT_CONFIG.googleBusinessProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#111111] hover:bg-black text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all"
                >
                  <span>Ver perfil da empresa no Google</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : null}

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00A86B] hover:bg-[#066839] text-white font-semibold text-sm px-6 py-3.5 rounded-xl shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Solicitar orçamento pelo WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

