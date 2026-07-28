"use client";

import { BentoGrid } from "@/components/sections/BentoGrid";
import { AboutSection } from "@/components/sections/AboutSection";

export function AndroidAboutScreen() {
  return (
    <div className="w-full flex flex-col items-center pt-2 pb-10 space-y-6">
      <AboutSection className="pt-8 sm:pt-12 pb-6" />
      <BentoGrid className="pt-4 sm:pt-6 pb-6" />
    </div>
  );
}
