import React from "react";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "../data/siteContent";

export const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Solicitar orçamento pelo WhatsApp"
        className="group flex items-center gap-2.5 bg-[#00A86B] hover:bg-[#066839] text-white font-semibold pl-4 pr-4 sm:pr-5 py-3.5 rounded-full shadow-[0_8px_28px_-4px_rgba(0,168,107,0.55)] hover:shadow-[0_12px_32px_-4px_rgba(0,168,107,0.7)] transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
      >
        <span className="relative flex h-6 w-6 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-25" />
          <MessageCircle className="relative w-6 h-6 fill-current" />
        </span>
        <span className="text-xs sm:text-sm font-bold tracking-tight">
          Orçamento no WhatsApp
        </span>
      </a>
    </div>
  );
};

