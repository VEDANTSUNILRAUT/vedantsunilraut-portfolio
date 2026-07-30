"use client";

import { AboutSection } from "@/components/sections/AboutSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { BentoGrid } from "@/components/sections/BentoGrid";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col items-center pt-8">
      <AboutSection />
      <EducationSection />
      <BentoGrid />
    </div>
  );
}
