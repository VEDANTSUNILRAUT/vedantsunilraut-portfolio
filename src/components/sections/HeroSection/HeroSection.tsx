"use client";

import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/constants/site";
import { TypewriterReveal } from "@/components/ui/TypewriterReveal";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { SparkleBurstButton } from "@/components/ui/SparkleBurstButton";
import { HorizonGlow } from "@/components/ui/HorizonGlow";
import ShinyText from "@/components/ShinyText";
import { HeroSectionProps } from "./HeroSection.types";

const emptySubscribe = () => () => {};

function getGreetingSnapshot(): string {
  if (typeof window === "undefined") return "Good Morning";
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Good Morning";
  if (hour >= 12 && hour < 17) return "Good Afternoon";
  return "Good Evening";
}

export function HeroSection({ className = "" }: HeroSectionProps) {
  const greeting = useSyncExternalStore(
    emptySubscribe,
    getGreetingSnapshot,
    () => "Good Morning"
  );


  return (
    <section id="home" className={`relative w-full min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-36 sm:pb-44 overflow-hidden scroll-mt-36 snap-start ${className}`}>
      {/* Main Hero Container */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center z-10">
        
        {/* Time-Based Greeting with Hello and Waving Hand Animation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-1.5 inline-flex items-center gap-1.5 text-sm sm:text-base md:text-lg font-source-code-pro font-medium tracking-wide text-neutral-300"
        >
          <span>Hello</span>
          <motion.span
            animate={{ rotate: [0, 20, -10, 20, -5, 12, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut",
            }}
            className="inline-block origin-[70%_70%] text-lg sm:text-xl"
          >
            👋
          </motion.span>
          <span>, {greeting}!</span>
        </motion.div>

        {/* Professional Intro Line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-5 text-xl sm:text-2xl md:text-3xl font-source-code-pro font-normal tracking-wide"
        >
          <ShinyText
            text="I am Vedant"
            disabled={false}
            speed={3}
            className="font-semibold text-white cursor-default"
            color="#ffffff"
            shineColor="#c084fc"
            spread={120}
          />
        </motion.p>

        {/* Hero Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-eb-garamond text-4xl sm:text-6xl lg:text-7xl leading-[1.25] max-w-3xl text-balance tracking-tight text-white font-normal"
        >
          I create digital journeys that spark innovation{" "}
          <span className="italic-gradient-text block sm:inline font-semibold">
            {siteConfig.hero.headline.gradientText}
          </span>
        </motion.h1>

        {/* Typewriter Subtitle */}
        <div className="mt-6 font-source-code-pro text-sm sm:text-base text-neutral-300 max-w-2xl leading-relaxed min-h-[30px]">
          <TypewriterReveal text={siteConfig.hero.subtitle} delay={0.6} />
        </div>

        {/* Call to Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA: Let's Connect */}
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


