"use client";

import { SkillsSection } from "@/components/sections/SkillsSection";
import { AndroidFooter } from "../AndroidFooter";

export function AndroidSkillsScreen() {
  return (
    <div className="w-full flex flex-col items-center pt-2 pb-6 space-y-6">
      <SkillsSection className="pt-6 sm:pt-10 pb-6" />
      <AndroidFooter />
    </div>
  );
}
