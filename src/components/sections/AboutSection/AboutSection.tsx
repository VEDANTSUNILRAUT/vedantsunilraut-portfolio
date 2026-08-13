"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, User } from "lucide-react";
import { SocialLinks } from "@/components/ui/SocialLinks";
import ShinyText from "@/components/ShinyText";
import { AboutSectionProps } from "./AboutSection.types";

export function AboutSection({ className = "" }: AboutSectionProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="more-about" className={`w-full max-w-6xl mx-auto px-6 pt-36 sm:pt-44 pb-28 relative z-10 scroll-mt-36 sm:scroll-mt-44 snap-start ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text Content & Social Links (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col justify-between"
        >
          {/* Section Sub-Label */}
          <span className="text-[11px] uppercase tracking-widest text-purple-400 font-mono font-semibold mb-3 block">
            MORE ABOUT ME
          </span>

          {/* Main Headline */}
          <h2 className="font-eb-garamond text-2xl sm:text-4xl lg:text-5xl text-white font-normal leading-[1.2] mb-5">
            I&apos;m{" "}
            <ShinyText
              text="Vedant"
              speed={3}
              color="#ffffff"
              shineColor="#c084fc"
              spread={120}
              className="cursor-default"
            />
            , a{" "}
            <span className="italic-gradient-text font-semibold whitespace-normal sm:whitespace-nowrap">
              Software Engineer @ Logituit
            </span>
          </h2>

          {/* Detailed Paragraph Text */}
          <div className="space-y-3.5 text-xs sm:text-sm font-source-code-pro text-neutral-300 leading-relaxed max-w-xl">
            <p>
              I&apos;m Vedant Raut, a Software Engineer at Logituit specializing in native Android development, Kotlin, Jetpack Compose, and clean mobile architecture. I love crafting high-performance apps and turning complex ideas into seamless digital experiences.
            </p>
            <p>
              My engineering journey spans building scalable mobile modules, cross-platform solutions with Kotlin Multiplatform (KMP), and modern web architectures. I thrive on clean code, UI precision, and continuous technical growth.
            </p>
            <p>
              Always excited to connect with fellow engineers, explore cutting-edge mobile technologies, and build impactful software that makes a difference!
            </p>
          </div>

          {/* Social Icons & Download CV Action Row */}
          <div className="mt-6 flex flex-wrap items-center gap-3.5">
            {/* Social Icons Container */}
            <SocialLinks />

            {/* Download CV Pill Button */}
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/5 border border-white/15 text-xs sm:text-sm font-mono text-neutral-200 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-white transition-all active:scale-95 shadow-lg group"
            >
              <Download className="w-4 h-4 text-purple-400 group-hover:translate-y-0.5 transition-transform" />
              <span>Download CV</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Floating Portrait Image with Black Gradient Fade-out */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          {!imageError ? (
            <div className="relative w-full max-w-[380px] rounded-3xl overflow-hidden">
              <img
                src="/vedant-hero.png"
                alt="Vedant Raut"
                onError={() => setImageError(true)}
                className="w-full h-auto object-cover rounded-3xl"
              />
              {/* Bottom Side Black Gradient Fade */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-10" />
              {/* Right Edge Black Gradient Fade - Shifted outward to edge */}
              <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black via-black/30 to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-black via-black/50 to-transparent pointer-events-none z-10" />
            </div>
          ) : (
            <div className="w-full max-w-[380px] aspect-square flex flex-col items-center justify-center p-6 border border-white/10 rounded-3xl bg-neutral-900/50">
              <div className="w-24 h-24 rounded-full border border-purple-500/30 bg-purple-950/30 flex items-center justify-center mb-3">
                <User className="w-14 h-14 text-purple-300" />
              </div>
              <span className="text-xs font-mono text-neutral-300">Vedant Raut</span>
            </div>
          )}
        </motion.div>

      </div>
    </section>
  );
}

