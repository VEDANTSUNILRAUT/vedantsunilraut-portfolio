"use client";

import { motion } from "framer-motion";
import { MapPin, Copy, Check, Smartphone, Layers, PenTool, Activity, Compass, Sparkles, Zap } from "lucide-react";
import { siteConfig } from "@/constants/site";
import { techBadges, projectTags } from "@/constants/skills";
import { useClipboard } from "@/hooks/useClipboard";
import { TechBadge } from "@/components/ui/TechBadge";
import { BentoGridProps } from "./BentoGrid.types";

export function BentoGrid({ className = "" }: BentoGridProps) {
  const { copied, copy } = useClipboard();

  return (
    <section id="about" className={`w-full max-w-6xl mx-auto px-4 sm:px-6 pt-36 sm:pt-44 pb-28 relative z-10 scroll-mt-36 sm:scroll-mt-44 snap-start ${className}`}>
      {/* 12-Column Compact Asymmetrical Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch relative z-10">
        
        {/* ========================================================================= */}
        {/* CARD 1: Time-Zone Agnostic (Top Left - 7 Cols, Height ~240px) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 bg-neutral-950/80 border border-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-7 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1 shadow-2xl flex flex-col justify-between min-h-[240px]"
        >
          {/* Top Icon Badge */}
          <div className="flex items-center justify-between z-10">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-200">
              <MapPin className="w-4 h-4 text-purple-400" />
            </div>
          </div>

          {/* Glowing 3D Wireframe Globe Backdrop Graphic */}
          <div className="absolute right-[-40px] top-[-30px] w-72 h-72 opacity-50 pointer-events-none group-hover:opacity-75 transition-opacity duration-500">
            <svg viewBox="0 0 200 200" className="w-full h-full text-purple-400">
              <defs>
                <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="var(--primary-mid)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="var(--primary-mid)" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="100" cy="100" r="85" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.3" />
              <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
              <ellipse cx="100" cy="100" rx="85" ry="32" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
              <ellipse cx="100" cy="100" rx="32" ry="85" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
              <circle cx="145" cy="75" r="4" fill="var(--primary-start)" />
              <circle cx="145" cy="75" r="12" fill="url(#globeGlow)" />
            </svg>
          </div>

          {/* Card Typography */}
          <div className="mt-8 z-10 max-w-sm">
            <p className="text-[13px] font-mono text-neutral-400 leading-relaxed mb-1">
              Productive collaboration across global teams, without time barriers.
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Time-Zone Agnostic
            </h3>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* CARD 2: About Me / Developer Portrait (Top Right - 5 Cols, Height ~496px) */}
        {/* ========================================================================= */}
        {/* ========================================================================= */}
        {/* CARD 2: Live Status & Focus Dashboard (Top Right - 5 Cols, Height ~496px) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5 lg:row-span-2 bg-neutral-950/80 border border-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-7 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1 shadow-2xl flex flex-col justify-between min-h-[496px]"
        >
          {/* Top Header Row */}
          <div className="flex items-center justify-between z-10 mb-4">
            <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-200">
              <Activity className="w-4 h-4 text-purple-400" />
            </div>

            {/* Live Status Badge */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span>Software Engineer @ Logituit</span>
            </div>
          </div>

          {/* Central Live Status & Focus Widgets */}
          <div className="relative z-10 flex-1 flex flex-col justify-center space-y-3.5 my-2">
            
            {/* Widget 1: Location & Timezone */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md group-hover:border-purple-500/20 transition-colors">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-300 mb-1">
                <Compass className="w-3.5 h-3.5" />
                <span>LOCATION & TIMEZONE</span>
              </div>
              <p className="text-sm font-semibold text-white">
                India (IST / UTC +5:30)
              </p>
              <p className="text-[11px] font-mono text-neutral-400 mt-0.5">
                Flexible for worldwide async & live sync
              </p>
            </div>

            {/* Widget 2: Currently Building */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md group-hover:border-purple-500/20 transition-colors">
              <div className="flex items-center gap-2 text-xs font-mono text-purple-300 mb-1">
                <Zap className="w-3.5 h-3.5" />
                <span>CURRENTLY BUILDING</span>
              </div>
              <p className="text-sm font-semibold text-white">
                Native Android & Full-Stack Architectures
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                <span className="px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/20 text-[10px] font-mono text-purple-300">
                  Jetpack Compose
                </span>
                <span className="px-2 py-0.5 rounded-md bg-violet-500/10 border border-violet-500/20 text-[10px] font-mono text-violet-300">
                  Next.js 16
                </span>
                <span className="px-2 py-0.5 rounded-md bg-fuchsia-500/10 border border-fuchsia-500/20 text-[10px] font-mono text-fuchsia-300">
                  Clean Arch
                </span>
              </div>
            </div>

            {/* Widget 3: Active Focus & Exploration */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md group-hover:border-purple-500/20 transition-colors">
              <div className="flex items-center gap-2 text-xs font-mono text-violet-300 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>ACTIVE EXPLORATION</span>
              </div>
              <p className="text-sm font-semibold text-white">
                Kotlin Multiplatform (KMP) & AI Agents
              </p>
              <p className="text-[11px] font-mono text-neutral-400 mt-0.5">
                Creating cross-platform & intelligent UX
              </p>
            </div>

          </div>

          {/* Card Bottom Typography */}
          <div className="z-20 mt-4">
            <p className="text-[13px] font-mono text-neutral-400 mb-1">
              Real-time engineering pursuits
            </p>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Live Status & Focus
            </h3>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* CARD 4: Let's Build CTA (Middle Center - 7 Cols, Height ~240px) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-7 bg-neutral-950/80 border border-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-7 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1 shadow-2xl flex flex-col justify-between items-center text-center min-h-[240px]"
        >
          {/* Top Edge Neon Purple Accent Light Rim Line */}
          <div className="absolute top-0 inset-x-0 mx-auto w-3/4 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_15px_rgba(192,132,252,0.9)]" />

          <div className="mt-4">
            <h3 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight font-eb-garamond leading-snug">
              Let&apos;s build your next product, <br /> the right way.
            </h3>
          </div>

          {/* Interactive Copy Email Pill Button */}
          <div className="mb-2 z-10">
            <button
              onClick={() => copy(siteConfig.brand.email)}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/15 text-xs sm:text-sm font-mono text-neutral-200 hover:border-purple-400/40 hover:bg-purple-500/10 transition-all active:scale-95 shadow-lg"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-purple-300" />
                  <span className="text-purple-300 font-medium">Copied to clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-purple-400" />
                  <span>{siteConfig.brand.email}</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* CARD 3: Skillset & Futuristic Tech (Bottom Left - 5 Cols, Height ~496px) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-5 bg-neutral-950/80 border border-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-7 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1 shadow-2xl flex flex-col justify-between min-h-[496px]"
        >
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-eb-garamond tracking-wide leading-tight mb-5">
              Enthusiastic About Innovative and futuristic Tech
            </h3>

            {/* Structured Tech Stack Badges Grid */}
            <div className="flex flex-wrap gap-2 my-4">
              {techBadges.map((badge, idx) => (
                <TechBadge key={idx} name={badge.name} color={badge.color} />
              ))}
            </div>
          </div>

          {/* Bottom Violet / Charcoal App Window UI Mockup */}
          <div className="mt-6 w-full rounded-2xl border border-purple-500/30 bg-gradient-to-b from-purple-950/40 via-neutral-900 to-neutral-950 p-4 shadow-[0_-10px_25px_rgba(168,85,247,0.15)] z-10">
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            </div>

            <div className="space-y-2">
              <div className="h-3 w-3/4 bg-purple-400/30 rounded-md" />
              <div className="h-2.5 w-1/2 bg-white/15 rounded-md" />
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="h-12 rounded-lg bg-purple-900/30 border border-purple-500/20" />
                <div className="h-12 rounded-lg bg-purple-900/30 border border-purple-500/20" />
                <div className="h-12 rounded-lg bg-purple-900/30 border border-purple-500/20" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* CARD 5: Real-Time Projects (Bottom Right - 7 Cols, Height ~240px) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="lg:col-span-7 bg-neutral-950/80 border border-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-7 relative overflow-hidden group hover:border-purple-500/30 transition-all duration-500 hover:-translate-y-1 shadow-2xl grid grid-cols-1 sm:grid-cols-12 gap-6 items-center min-h-[240px]"
        >
          <div className="sm:col-span-7 flex flex-col justify-between h-full z-10">
            <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 mb-3">
              <PenTool className="w-4 h-4" />
            </div>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {projectTags.map((tag, i) => (
                <span key={i} className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-purple-300">
                  {tag}
                </span>
              ))}
            </div>

            <div>
              <p className="text-[12px] font-mono text-neutral-400 mb-0.5">
                Design, motion & development experiments
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Real-Time Projects
              </h3>
            </div>
          </div>

          <div className="sm:col-span-5 z-10">
            <div className="w-full rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-900/30 via-neutral-900 to-neutral-950 p-3.5 shadow-2xl">
              <div className="flex items-center gap-1.5 mb-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
              </div>
              <div className="space-y-2">
                <div className="h-10 rounded-xl bg-purple-950/50 border border-purple-500/20 p-2 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-purple-400" />
                  <div className="h-2 w-16 bg-purple-300/30 rounded" />
                </div>
                <div className="h-10 rounded-xl bg-purple-950/50 border border-purple-500/20 p-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-400" />
                  <div className="h-2 w-20 bg-indigo-300/30 rounded" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
