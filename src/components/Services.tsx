import React from "react";
import {
  Wrench,
  PackageOpen,
  Truck,
  Settings,
  DoorClosed,
  Tv,
  MessageCircle,
  Check,
  ArrowUpRight,
} from "lucide-react";
import {
  SERVICES_SECTION,
  ALL_SERVICES_LIST,
  ServiceCategory,
  getWhatsAppUrl,
} from "../data/siteContent";

const iconMap: Record<ServiceCategory["iconName"], React.ReactNode> = {
  Wrench: <Wrench className="w-5 h-5 text-[#00A86B]" />,
  PackageOpen: <PackageOpen className="w-5 h-5 text-[#00A86B]" />,
  Truck: <Truck className="w-5 h-5 text-[#00A86B]" />,
  Settings: <Settings className="w-5 h-5 text-[#00A86B]" />,
  DoorClosed: <DoorClosed className="w-5 h-5 text-[#00A86B]" />,
  Tv: <Tv className="w-5 h-5 text-[#00A86B]" />,
};

export const Services: React.FC = () => {
  return (
    <section
      id="servicos"
      className="py-20 md:py-28 bg-[#F5F7F6] border-y border-gray-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00A86B] bg-[#E6F6F0] px-3.5 py-1.5 rounded-full mb-3">
            Nossos Serviços
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight">
            {SERVICES_SECTION.title}
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#6B7280] leading-relaxed">
            {SERVICES_SECTION.subtitle}
          </p>
        </div>

        {/* Grid de Cards de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_SECTION.categories.map((service) => (
            <article
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200/80 shadow-subtle hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Fotografia Real com Ícone Discreto */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-gray-100">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                {/* Ícone Discreto */}
                <div className="absolute top-4 left-4 w-11 h-11 rounded-xl bg-white/95 backdrop-blur-md shadow-sm flex items-center justify-center border border-white">
                  {iconMap[service.iconName]}
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-[#111111] group-hover:text-[#00A86B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#6B7280] leading-relaxed">
                    {service.description}
                  </p>

                  {/* Destaques rápidos */}
                  <ul className="mt-4 space-y-1.5 border-t border-gray-100 pt-3.5">
                    {service.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs font-medium text-[#111111]/80"
                      >
                        <Check className="w-3.5 h-3.5 text-[#00A86B] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Link para Solicitar Orçamento */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a
                    href={getWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-4 py-3 rounded-xl bg-[#F5F7F6] group-hover:bg-[#00A86B] text-[#111111] group-hover:text-white font-semibold text-sm transition-all duration-200"
                  >
                    <span className="inline-flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-[#00A86B] group-hover:text-white transition-colors" />
                      Solicitar orçamento
                    </span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Lista Completa das 10 Especialidades Oferecidas */}
        <div className="mt-14 bg-white rounded-2xl p-6 sm:p-8 border border-gray-200/80 shadow-subtle">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-xl">
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#111111]">
                Atendimento completo para todos os tipos de móveis
              </h3>
              <p className="text-sm text-[#6B7280] mt-1">
                Atendemos exclusivamente em domicílio ou no seu estabelecimento comercial em Nova Serrana e região.
              </p>
            </div>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#00A86B] hover:bg-[#066839] text-white text-sm font-semibold px-5 py-3 rounded-xl transition-all shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Consultar meu móvel no WhatsApp</span>
            </a>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {ALL_SERVICES_LIST.map((serviceName) => (
              <div
                key={serviceName}
                className="flex items-center gap-2.5 bg-[#F5F7F6] px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-[#111111]"
              >
                <span className="w-2 h-2 rounded-full bg-[#00A86B] shrink-0" />
                <span>{serviceName}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

