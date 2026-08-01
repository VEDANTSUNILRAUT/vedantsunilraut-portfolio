"use client";

import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/constants/site";
import { SparkleBurstButtonProps } from "./SparkleBurstButton.types";

export function SparkleBurstButton({
  text = siteConfig.hero.primaryCta.text,
  href = siteConfig.hero.primaryCta.href,
  className = "",
  onClick,
}: SparkleBurstButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`w-full sm:w-auto inline-block ${className}`}
    >
      <button
        className="group relative w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-neutral-900 text-white font-sans font-medium text-sm hover:bg-neutral-800 transition-all border border-white/15 shadow-xl hover:border-purple-400/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.25)] active:scale-95 overflow-hidden"
      >
        <span className="relative z-10 font-medium tracking-tight">
          {text}
        </span>

        <span className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-neutral-800 group-hover:bg-purple-600 transition-colors duration-300">
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 text-white" />
        </span>
      </button>
    </a>
  );
}

