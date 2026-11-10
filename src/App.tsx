import React, { useState, useEffect, useCallback } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { Home } from "./pages/Home";
import { PortfolioPage } from "./pages/PortfolioPage";

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<"home" | "portfolio">(() => {
    const path = window.location.pathname.toLowerCase();
    return path === "/portfolio" ? "portfolio" : "home";
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      setCurrentPage(path === "/portfolio" ? "portfolio" : "home");
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const scrollToSection = useCallback((sectionId?: string) => {
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, []);

  const handleNavigate = useCallback(
    (page: "home" | "portfolio", sectionId?: string) => {
      if (page === "portfolio") {
        setCurrentPage("portfolio");
        window.history.pushState({}, "", "/portfolio");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (currentPage !== "home") {
        setCurrentPage("home");
        window.history.pushState(
          {},
          "",
          sectionId && sectionId !== "inicio" ? `/#${sectionId}` : "/"
        );
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 60);
      } else {
        scrollToSection(sectionId);
      }
    },
    [currentPage, scrollToSection]
  );

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111111]">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <div className="flex-1">
        {currentPage === "home" ? (
          <Home
            onExplorePortfolioSection={() => handleNavigate("home", "portfolio")}
            onOpenDedicatedPortfolio={() => handleNavigate("portfolio")}
          />
        ) : (
          <PortfolioPage onBackHome={() => handleNavigate("home", "inicio")} />
        )}
      </div>

      <Footer onNavigate={handleNavigate} />
      <WhatsAppButton />
    </div>
  );
};

export default App;

