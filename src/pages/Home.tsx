import React from "react";
import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Portfolio } from "../components/Portfolio";
import { About } from "../components/About";
import { Differentials } from "../components/Differentials";
import { Testimonials } from "../components/Testimonials";
import { HowItWorks } from "../components/HowItWorks";
import { Contact } from "../components/Contact";

interface HomeProps {
  onExplorePortfolioSection: () => void;
  onOpenDedicatedPortfolio: () => void;
}

export const Home: React.FC<HomeProps> = ({
  onExplorePortfolioSection,
  onOpenDedicatedPortfolio,
}) => {
  return (
    <main>
      <Hero onExplorePortfolio={onExplorePortfolioSection} />
      <Services />
      <Portfolio onOpenDedicatedPage={onOpenDedicatedPortfolio} />
      <About />
      <Differentials />
      <Testimonials />
      <HowItWorks />
      <Contact />
    </main>
  );
};

