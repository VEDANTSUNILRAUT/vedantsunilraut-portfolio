"use client";

import { motion } from "framer-motion";
import { row1Skills, row2Skills } from "@/constants/skills";
import { SkillsSectionProps } from "./SkillsSection.types";

export function SkillsSection({ className = "" }: SkillsSectionProps) {
  return (
    <section id="skills" className={`w-full max-w-6xl mx-auto px-6 pt-36 sm:pt-44 pb-28 relative z-10 overflow-hidden scroll-mt-36 sm:scroll-mt-44 snap-start ${className}`}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center relative z-10"
      >
        <h2 className="font-eb-garamond text-5xl sm:text-7xl text-white font-normal mb-4 tracking-tight">
          Skills & <span className="italic-gradient-text font-semibold">Tools</span>
        </h2>
        <p className="font-source-code-pro text-sm sm:text-base text-neutral-400 max-w-lg mx-auto leading-relaxed">
          Tools Behind the Magic: From code to deployment—tools that bring digital visions to life.
        </p>
      </motion.div>

      {/* Icons Grid Container */}
      <div className="flex flex-col items-center gap-4 relative z-10">
        
        {/* Row 1 Icons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-3 max-w-5xl"
        >
          {row1Skills.map((item, idx) => (
            <div
              key={idx}
              className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-purple-500/15 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl cursor-pointer"
            >
              {item.symbol}
              {/* Hover Tooltip */}
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-neutral-900 border border-white/15 text-[11px] font-mono text-purple-200 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-2xl z-30">
                {item.name}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Row 2 Icons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 max-w-3xl"
        >
          {row2Skills.map((item, idx) => (
            <div
              key={idx}
              className="group relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-purple-500/15 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-xl cursor-pointer"
            >
              {item.symbol}
              {/* Hover Tooltip */}
              <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-neutral-900 border border-white/15 text-[11px] font-mono text-purple-200 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-2xl z-30">
                {item.name}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
