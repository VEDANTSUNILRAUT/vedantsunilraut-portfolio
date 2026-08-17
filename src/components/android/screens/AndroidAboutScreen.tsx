"use client";

import { BentoGrid } from "@/components/sections/BentoGrid";
import { AboutSection } from "@/components/sections/AboutSection";
import { AndroidFooter } from "../AndroidFooter";

export function AndroidAboutScreen() {
  return (
    <div className="w-full flex flex-col items-center pt-2 pb-6 space-y-6">
      <AboutSection className="pt-6 sm:pt-10 pb-6" />
      <BentoGrid className="pt-2 sm:pt-4 pb-6" />
      <AndroidFooter />
    </div>
  );
}
