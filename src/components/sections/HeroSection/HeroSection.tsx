"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/constants/site";
import { TypewriterReveal } from "@/components/ui/TypewriterReveal";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { SparkleBurstButton } from "@/components/ui/SparkleBurstButton";
import { HorizonGlow } from "@/components/ui/HorizonGlow";
import { HeroSectionProps } from "./HeroSection.types";

export function HeroSection({ className = "" }: HeroSectionProps) {
  return (
    <section id="home" className={`relative w-full min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-36 sm:pb-44 overflow-hidden scroll-mt-36 snap-start ${className}`}>
      {/* Main Hero Container */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center z-10">
        
        {/* Hero Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-eb-garamond text-4xl sm:text-6xl lg:text-7xl leading-[1.25] max-w-3xl text-balance tracking-tight text-white font-normal"
        >
          I create digital journeys that spark innovation{" "}
          <span className="italic-gradient-text block sm:inline font-semibold">
            {siteConfig.hero.headline.gradientText}
          </span>
        </motion.h1>

        {/* Typewriter Subtitle */}
        <div className="mt-8 font-source-code-pro text-sm sm:text-base text-neutral-300 max-w-xl leading-relaxed min-h-[30px]">
          <TypewriterReveal text={siteConfig.hero.subtitle} delay={0.6} />
        </div>

        {/* Call to Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA: Let's Connect with Violet Sparkle Blast Effect */}
          <SparkleBurstButton
            text={siteConfig.hero.primaryCta.text}
            href={siteConfig.hero.primaryCta.href}
          />

          {/* Secondary CTA: Interactive Copy Email */}
          <CopyEmailButton />
        </motion.div>

      </div>

      {/* Bottom Horizon Arc Lighting Effect */}
      <HorizonGlow />
    </section>
  );
}
