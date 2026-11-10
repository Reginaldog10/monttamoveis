import React from "react";
import { Portfolio } from "../components/Portfolio";
import { Contact } from "../components/Contact";
import { ArrowLeft } from "lucide-react";

interface PortfolioPageProps {
  onBackHome: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onBackHome }) => {
  return (
    <main>
      <div className="pt-24 sm:pt-28 bg-[#F5F7F6] border-b border-gray-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#00A86B]">
              Montta Móveis • Nova Serrana e região
            </p>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-[#111111] mt-1">
              Galeria Completa de Serviços Realizados
            </h1>
          </div>

          <button
            type="button"
            onClick={onBackHome}
            className="inline-flex items-center gap-2 self-start sm:self-auto text-sm font-semibold text-[#111111] bg-white hover:bg-[#E6F6F0] hover:text-[#066839] px-4 py-2.5 rounded-xl border border-gray-200 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#00A86B]" />
            <span>Voltar para a Página Inicial</span>
          </button>
        </div>
      </div>

      <Portfolio isDedicatedPage={false} />
      <Contact />
    </main>
  );
};

