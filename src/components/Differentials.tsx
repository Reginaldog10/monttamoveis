import React from "react";
import { Award, ShieldCheck, Home, MessageCircle } from "lucide-react";
import {
  DIFFERENTIALS_SECTION,
  DifferentialItem,
} from "../data/siteContent";

const diffIconMap: Record<DifferentialItem["iconName"], React.ReactNode> = {
  Award: <Award className="w-6 h-6 text-[#00A86B]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#00A86B]" />,
  Home: <Home className="w-6 h-6 text-[#00A86B]" />,
  MessageCircle: <MessageCircle className="w-6 h-6 text-[#00A86B]" />,
};

export const Differentials: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00A86B] bg-[#E6F6F0] px-3.5 py-1.5 rounded-full mb-3">
            Nossos Diferenciais
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111111] tracking-tight">
            {DIFFERENTIALS_SECTION.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS_SECTION.items.map((item) => (
            <div
              key={item.id}
              className="group bg-[#F5F7F6]/70 hover:bg-white p-6 sm:p-7 rounded-2xl border border-gray-200/80 hover:border-[#00A86B]/40 shadow-subtle hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#E6F6F0] group-hover:bg-[#00A86B] flex items-center justify-center transition-colors duration-300">
                <div className="group-hover:[&_svg]:text-white transition-colors">
                  {diffIconMap[item.iconName]}
                </div>
              </div>

              <h3 className="font-display text-lg sm:text-xl font-bold text-[#111111] mt-5">
                {item.title}
              </h3>

              <p className="mt-2 text-sm sm:text-base text-[#6B7280] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

