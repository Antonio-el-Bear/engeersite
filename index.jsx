import React from "react";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatSection";
import FeaturedProjects from "./components/FeaturedProjects";

export default function Home() {
  return (
    <div className="bg-[#0A0A0A] page-enter">
      <HeroSection />
      <div className="fade-in delay-300">
        <StatsSection />
      </div>
      <div className="slide-up delay-400">
        <FeaturedProjects />
      </div>
    </div>
  );
}