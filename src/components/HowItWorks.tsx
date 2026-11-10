import React from "react";
import {
  MessageSquare,
  Camera,
  FileCheck,
  CalendarCheck,
  MessageCircle,
} from "lucide-react";
import {
  HOW_IT_WORKS_SECTION,
  HowItWorksStep,
  getWhatsAppUrl,
} from "../data/siteContent";

const stepIconMap: Record<HowItWorksStep["iconName"], React.ReactNode> = {
  MessageSquare: <MessageSquare className="w-5 h-5 text-[#00A86B]" />,
  Camera: <Camera className="w-5 h-5 text-[#00A86B]" />,
  FileCheck: <FileCheck className="w-5 h-5 text-[#00A86B]" />,
  CalendarCheck: <CalendarCheck className="w-5 h-5 text-[#00A86B]" />,
};

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00A86B] bg-[#E6F6F0] px-3.5 py-1.5 rounded-full mb-3">
            Passo a Passo
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight">
            {HOW_IT_WORKS_SECTION.title}
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-[#6B7280] leading-relaxed">
            {HOW_IT_WORKS_SECTION.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative">
          {HOW_IT_WORKS_SECTION.steps.map((item) => (
            <div
              key={item.step}
              className="relative bg-[#F5F7F6]/60 hover:bg-white rounded-2xl p-6 sm:p-7 border border-gray-200/80 hover:border-[#00A86B]/40 shadow-subtle hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#00A86B]">
                    {item.step}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-[#E6F6F0] flex items-center justify-center">
                    {stepIconMap[item.iconName]}
                  </div>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-[#111111]">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-sm sm:text-base text-[#6B7280] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-[#00A86B] hover:bg-[#066839] text-white font-semibold text-base px-8 py-4 rounded-2xl shadow-md hover:shadow-lg transition-all"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Começar meu atendimento agora</span>
          </a>
        </div>
      </div>
    </section>
  );
};

