"use client";

import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import { ProjectCardProps } from "./ProjectCard.types";

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
    >
      {/* Left Column: Interactive App Preview Window (6 Cols) */}
      <div className="lg:col-span-6 z-10">
        <div 
          className={`w-full aspect-[16/10] rounded-3xl border border-white/15 bg-gradient-to-br ${project.bgGradient} p-4 sm:p-6 shadow-2xl relative overflow-hidden group hover:border-purple-500/40 transition-all duration-500`}
          style={{
            boxShadow: `0 20px 50px -10px ${project.glowColor}`,
          }}
        >
          {/* Mockup Header Bar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-6">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-neutral-400">preview</span>
            </div>
          </div>

          {/* Mockup Center Graphic */}
          <div className="relative h-[80%] flex flex-col items-center justify-center text-center p-6 bg-neutral-950/70 border border-white/10 rounded-2xl backdrop-blur-md group-hover:scale-[1.02] transition-transform duration-500">
            <div className="w-14 h-14 rounded-2xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4 shadow-lg">
              <Smartphone className="w-7 h-7" />
            </div>
            <h4 className="font-eb-garamond text-3xl text-white font-semibold mb-2">
              {project.previewTitle}
            </h4>
            <p className="font-source-code-pro text-xs text-neutral-400">
              {project.previewSubtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Project Title, Subtitle, Highlights & Badges (6 Cols) */}
      <div className="lg:col-span-6 z-10 space-y-6">
        {/* Project Title */}
        <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          {project.title}
        </h3>

        {/* Subtitle / Description */}
        <p className="font-source-code-pro text-sm text-neutral-300 leading-relaxed">
          {project.subtitle}
        </p>

        {/* Bullet Highlights */}
        <ul className="space-y-3">
          {project.highlights.map((highlight, hIdx) => (
            <li key={hIdx} className="flex items-start gap-3">
              <span className="text-purple-400 text-sm mt-0.5 select-none font-bold">✦</span>
              <span className="font-source-code-pro text-[11px] text-neutral-300 tracking-wider leading-relaxed uppercase">
                {highlight}
              </span>
            </li>
          ))}
        </ul>

        {/* Tech Stack Badges Cloud */}
        <div className="pt-2 flex flex-wrap gap-2">
          {project.techStack.map((tech, tIdx) => (
            <span
              key={tIdx}
              className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-medium text-neutral-200 hover:border-purple-400/40 hover:bg-purple-500/10 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
