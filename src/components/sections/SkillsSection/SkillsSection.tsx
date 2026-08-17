"use client";

import React from "react";
import { motion } from "framer-motion";
import CircularText from "@/components/CircularText";
import { DevTechIcon } from "@/components/ui/DevTechIcon/DevTechIcon";
import { Smartphone, Globe, Server, Wrench, Sparkles } from "lucide-react";
import { InteractiveAndroidBot } from "@/components/ui/InteractiveAndroidBot";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SkillsSectionProps } from "./SkillsSection.types";

interface SkillItem {
  name: string;
  symbol: React.ReactNode;
}

const mobileSkills: SkillItem[] = [
  { name: "Android Native", symbol: <DevTechIcon name="Android" slug="android" className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Kotlin", symbol: <DevTechIcon name="Kotlin" slug="kotlin" className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Jetpack Compose", symbol: <DevTechIcon name="Jetpack Compose" slug="jetpackcompose" className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Kotlin Multiplatform", symbol: <DevTechIcon name="Kotlin Multiplatform" slug="kmp" className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Java", symbol: <DevTechIcon name="Java" slug="java" className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Android Studio", symbol: <DevTechIcon name="Android Studio" slug="androidstudio" className="w-5 h-5 sm:w-6 sm:h-6" /> },
];

const frontendSkills: SkillItem[] = [
  { name: "Next.js", symbol: <DevTechIcon name="Next.js" slug="nextjs" invertOnDark className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "React.js", symbol: <DevTechIcon name="React" slug="react" className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "TypeScript", symbol: <DevTechIcon name="TypeScript" slug="typescript" className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Tailwind CSS", symbol: <DevTechIcon name="Tailwind CSS" slug="tailwindcss" className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "HTML5 / CSS3", symbol: <DevTechIcon name="HTML5" slug="html5" className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "JavaScript", symbol: <DevTechIcon name="JavaScript" slug="javascript" className="w-5 h-5 sm:w-6 sm:h-6" /> },
];

const backendSkills: SkillItem[] = [
  { name: "Node.js", symbol: <DevTechIcon name="Node.js" slug="nodedotjs" className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Express.js", symbol: <DevTechIcon name="Express" slug="express" invertOnDark className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "MySQL", symbol: <DevTechIcon name="MySQL" slug="mysql" className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "PostgreSQL", symbol: <DevTechIcon name="PostgreSQL" slug="postgresql" className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "PHP", symbol: <DevTechIcon name="PHP" slug="php" className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "REST APIs", symbol: <DevTechIcon name="Postman" slug="postman" className="w-5 h-5 sm:w-6 sm:h-6" /> },
];

const toolsSkills: SkillItem[] = [
  { name: "Git / GitHub", symbol: <DevTechIcon name="Git" slug="git" className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Docker", symbol: <DevTechIcon name="Docker" slug="docker" className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Gradle (Kotlin DSL)", symbol: <DevTechIcon name="Gradle" slug="gradle" invertOnDark className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Firebase", symbol: <DevTechIcon name="Firebase" slug="firebase" className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "VS Code", symbol: <DevTechIcon name="VS Code" slug="visualstudiocode" className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Jira / Agile", symbol: <DevTechIcon name="Jira" slug="jira" className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "Figma", symbol: <DevTechIcon name="Figma" slug="figma" className="w-5 h-5 sm:w-6 sm:h-6" /> },
  { name: "AI Dev Tools", symbol: <DevTechIcon name="OpenAI" slug="openai" invertOnDark className="w-5 h-5 sm:w-6 sm:h-6" /> },
];

export function SkillsSection({ className = "" }: SkillsSectionProps) {
  return (
    <section id="skills" className={`w-full max-w-6xl mx-auto px-6 pt-36 sm:pt-44 pb-28 relative z-10 overflow-hidden scroll-mt-36 sm:scroll-mt-44 snap-start ${className}`}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center relative z-10"
      >
        <h2 className="font-eb-garamond text-5xl sm:text-7xl text-white font-normal mb-4 tracking-tight">
          Skills & <span className="italic-gradient-text font-semibold">Tools</span>
        </h2>
        <p className="font-source-code-pro text-sm sm:text-base text-neutral-400 max-w-lg mx-auto leading-relaxed">
          Tools Behind the Magic: From code to deployment—tools that bring digital visions to life.
        </p>
      </motion.div>

      {/* Spinning React Bits CircularText Badge with Interactive Android Bot */}
      <div className="relative mb-12 flex items-center justify-center z-10">
        <div className="relative w-48 h-48 rounded-full flex items-center justify-center">
          <CircularText
            text="KMP • KOTLIN • COMPOSE • ANDROID • "
            spinDuration={20}
            onHover="speedUp"
            className="text-[10.5px] font-mono tracking-widest text-emerald-300 font-bold"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
            <InteractiveAndroidBot />
          </div>
        </div>
      </div>

      {/* Asymmetrical Bento Grid for Skills Categories */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 relative z-10">
        
        {/* ========================================================================= */}
        {/* BENTO CARD 1: Android & Mobile Architecture (Big Featured Box - 7 Cols) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <SpotlightCard
            spotlightColor="rgba(52, 211, 153, 0.18)"
            borderColor="rgba(52, 211, 153, 0.5)"
            className="bg-neutral-950/80 border border-white/10 backdrop-blur-xl p-6 sm:p-7 relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-500 hover:-translate-y-1 shadow-2xl flex flex-col justify-between min-h-[260px] h-full"
          >
            {/* Accent Glow Backdrop */}
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500" />

            {/* Heading Header */}
            <div className="flex items-center justify-between mb-5 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    Android & Mobile
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                      Core Specialization
                    </span>
                  </h3>
                  <p className="text-xs font-mono text-neutral-400 mt-0.5">
                    Native Android, Jetpack Compose & Kotlin Multiplatform
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Grid Inside Bento Box */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 z-10 mt-2">
              {mobileSkills.map((item, idx) => (
                <div
                  key={idx}
                  className="group/item flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-400/50 hover:bg-emerald-500/10 transition-all duration-300 cursor-pointer shadow-md"
                >
                  <div className="w-6 h-6 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                    {item.symbol}
                  </div>
                  <span className="text-xs font-mono text-neutral-200 group-hover/item:text-white truncate font-medium">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>

        {/* ========================================================================= */}
        {/* BENTO CARD 2: Web & Frontend Stack (Medium Box - 5 Cols) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <SpotlightCard
            spotlightColor="rgba(59, 130, 246, 0.18)"
            borderColor="rgba(59, 130, 246, 0.5)"
            className="bg-neutral-950/80 border border-white/10 backdrop-blur-xl p-6 sm:p-7 relative overflow-hidden group hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-1 shadow-2xl flex flex-col justify-between min-h-[260px] h-full"
          >
            {/* Accent Glow Backdrop */}
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500" />

            {/* Heading Header */}
            <div className="flex items-center justify-between mb-5 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Web & Frontend
                  </h3>
                  <p className="text-xs font-mono text-neutral-400 mt-0.5">
                    Modern React & Next.js Ecosystem
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Grid Inside Bento Box */}
            <div className="grid grid-cols-2 gap-2.5 z-10 mt-2">
              {frontendSkills.map((item, idx) => (
                <div
                  key={idx}
                  className="group/item flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-blue-500/10 transition-all duration-300 cursor-pointer shadow-md"
                >
                  <div className="w-6 h-6 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                    {item.symbol}
                  </div>
                  <span className="text-xs font-mono text-neutral-200 group-hover/item:text-white truncate font-medium">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>

        {/* ========================================================================= */}
        {/* BENTO CARD 3: Backend & Databases (Medium Box - 5 Cols) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-5"
        >
          <SpotlightCard
            spotlightColor="rgba(168, 85, 247, 0.18)"
            borderColor="rgba(168, 85, 247, 0.5)"
            className="bg-neutral-950/80 border border-white/10 backdrop-blur-xl p-6 sm:p-7 relative overflow-hidden group hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-1 shadow-2xl flex flex-col justify-between min-h-[260px] h-full"
          >
            {/* Accent Glow Backdrop */}
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-purple-500/20 transition-all duration-500" />

            {/* Heading Header */}
            <div className="flex items-center justify-between mb-5 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Server className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Backend & DB
                  </h3>
                  <p className="text-xs font-mono text-neutral-400 mt-0.5">
                    Microservices, REST APIs & Data Systems
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Grid Inside Bento Box */}
            <div className="grid grid-cols-2 gap-2.5 z-10 mt-2">
              {backendSkills.map((item, idx) => (
                <div
                  key={idx}
                  className="group/item flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-purple-500/10 transition-all duration-300 cursor-pointer shadow-md"
                >
                  <div className="w-6 h-6 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                    {item.symbol}
                  </div>
                  <span className="text-xs font-mono text-neutral-200 group-hover/item:text-white truncate font-medium">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>

        {/* ========================================================================= */}
        {/* BENTO CARD 4: Tools & AI Infrastructure (Wide Box - 7 Cols) */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-7"
        >
          <SpotlightCard
            spotlightColor="rgba(245, 158, 11, 0.18)"
            borderColor="rgba(245, 158, 11, 0.5)"
            className="bg-neutral-950/80 border border-white/10 backdrop-blur-xl p-6 sm:p-7 relative overflow-hidden group hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-1 shadow-2xl flex flex-col justify-between min-h-[260px] h-full"
          >
            {/* Accent Glow Backdrop */}
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-amber-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-amber-500/20 transition-all duration-500" />

            {/* Heading Header */}
            <div className="flex items-center justify-between mb-5 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    Tools & AI Infrastructure
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> AI Powered
                    </span>
                  </h3>
                  <p className="text-xs font-mono text-neutral-400 mt-0.5">
                    CI/CD, Containers, IDEs & Agentic Workflows
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Grid Inside Bento Box */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 z-10 mt-2">
              {toolsSkills.map((item, idx) => (
                <div
                  key={idx}
                  className="group/item flex items-center gap-2.5 p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 hover:bg-amber-500/10 transition-all duration-300 cursor-pointer shadow-md"
                >
                  <div className="w-6 h-6 flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                    {item.symbol}
                  </div>
                  <span className="text-xs font-mono text-neutral-200 group-hover/item:text-white truncate font-medium">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </SpotlightCard>
        </motion.div>

      </div>
    </section>
  );
}
