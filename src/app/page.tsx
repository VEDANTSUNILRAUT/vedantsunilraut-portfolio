"use client";

import { HeroSection } from "@/components/sections/HeroSection";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* SECTION 1: HERO */}
      <HeroSection />

      {/* SECTION 2: ASYMMETRICAL BENTO GRID */}
      <BentoGrid />

      {/* SECTION 3: MORE ABOUT ME */}
      <AboutSection />

      {/* SECTION 4: SKILLS & TOOLS */}
      <SkillsSection />

      {/* SECTION 5: FEATURED WORK */}
      <FeaturedWorkSection />
    </div>
  );
}
