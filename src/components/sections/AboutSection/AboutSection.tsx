"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Download, User } from "lucide-react";
import { SocialLinks } from "@/components/ui/SocialLinks";
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
          <h2 className="font-eb-garamond text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-[1.15] mb-5">
            I&apos;m Vedant, a <br />
            <span className="italic-gradient-text font-semibold">Innovative Creator</span>
          </h2>

          {/* Detailed Paragraph Text */}
          <div className="space-y-3.5 text-xs sm:text-sm font-source-code-pro text-neutral-300 leading-relaxed max-w-xl">
            <p>
              I&apos;m Vedant Raut, a passionate software engineer and Android developer who loves turning ideas into interactive digital experiences. From designing responsive frontends to building efficient backends & native apps, I thrive on creating solutions that just work.
            </p>
            <p>
              When I&apos;m not coding, I enjoy exploring new technologies, experimenting with creative projects, and challenging myself to grow every day. Curiosity and learning are what keep me moving forward.
            </p>
            <p>
              I believe in making the most of every day and building things that leave a positive impact!
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

        {/* Right Column: Developer Photo Card (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 bg-neutral-900/90 shadow-2xl group hover:border-purple-500/30 transition-all duration-500">
            {/* Ambient Inner Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-neutral-900 to-black" />

            {!imageError ? (
              <img
                src="/vedant-hero.png"
                alt="Vedant Raut"
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-top relative z-10"
              />
            ) : (
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6">
                <div className="w-28 h-28 rounded-full border border-purple-500/20 bg-purple-950/20 flex items-center justify-center mb-4 shadow-xl">
                  <User className="w-16 h-16 text-neutral-500" />
                </div>
                <span className="text-xs font-mono text-neutral-400">Vedant Raut</span>
              </div>
            )}

            {/* Bottom Dark Vignette Fade */}
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black via-black/60 to-transparent z-20" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
