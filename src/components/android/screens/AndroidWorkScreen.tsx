"use client";

import { FeaturedWorkSection } from "@/components/sections/FeaturedWorkSection";
import { AndroidFooter } from "../AndroidFooter";

export function AndroidWorkScreen() {
  return (
    <div className="w-full flex flex-col items-center pt-2 pb-6 space-y-6">
      <FeaturedWorkSection className="pt-6 sm:pt-10 pb-6" />
      <AndroidFooter />
    </div>
  );
}
