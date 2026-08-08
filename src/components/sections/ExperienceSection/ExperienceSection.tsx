"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Building2,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Clock,
  Smartphone,
  Zap,
  Award,
} from "lucide-react";
import { WORK_EXPERIENCE_DATA } from "@/constants/experience";
import { ExperienceSectionProps } from "./ExperienceSection.types";

export function ExperienceSection({ className = "" }: ExperienceSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [expandedCardId, setExpandedCardId] = useState<string | null>("fulltime-logituit");

  const filteredExperience = selectedFilter === "all"
    ? WORK_EXPERIENCE_DATA
    : selectedFilter === "full-time"
    ? WORK_EXPERIENCE_DATA.filter((item) => item.type === "Full-Time")
    : WORK_EXPERIENCE_DATA.filter((item) => item.type === "Internship");

  const fullTimeCount = WORK_EXPERIENCE_DATA.filter((item) => item.type === "Full-Time").length;
  const internshipCount = WORK_EXPERIENCE_DATA.filter((item) => item.type === "Internship").length;

  const toggleExpand = (id: string) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="experience"
      className={`w-full max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20 relative z-10 scroll-mt-24 snap-start ${className}`}
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-12 left-10 w-[380px] h-[260px] bg-violet-600/10 blur-[110px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono font-medium mb-4 shadow-sm"
        >
          <Briefcase className="w-3.5 h-3.5 text-purple-400" />
          <span>CAREER & PROFESSIONAL HISTORY</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-eb-garamond text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight max-w-3xl"
        >
          Work & Professional <br className="hidden sm:inline" />
          <span className="italic-gradient-text font-semibold">Experience</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-4 text-xs sm:text-sm font-source-code-pro text-neutral-400 max-w-2xl leading-relaxed"
        >
          My industry journey as a Software Engineer & Android Developer at Logituit, spanning full-time engineering roles and mobile dev internships.
        </motion.p>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-neutral-950/80 border border-white/10 backdrop-blur-md shadow-xl"
        >
          <button
            onClick={() => setSelectedFilter("all")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              selectedFilter === "all"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25 font-semibold"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            All Roles ({WORK_EXPERIENCE_DATA.length})
          </button>
          <button
            onClick={() => setSelectedFilter("full-time")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              selectedFilter === "full-time"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25 font-semibold"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            Full-Time ({fullTimeCount})
          </button>
          <button
            onClick={() => setSelectedFilter("internship")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              selectedFilter === "internship"
                ? "bg-violet-600 text-white shadow-lg shadow-violet-500/25 font-semibold"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            Internships ({internshipCount})
          </button>
        </motion.div>
      </div>

      {/* Career Overview Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-5 rounded-2xl bg-neutral-950/70 border border-purple-500/20 backdrop-blur-xl relative overflow-hidden group hover:border-purple-500/40 transition-all shadow-lg"
        >
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-purple-400 block mb-1">
                CURRENT ROLE
              </span>
              <h4 className="text-xl font-bold text-white tracking-tight">Software Engineer</h4>
              <p className="text-xs text-neutral-400 mt-1 font-source-code-pro">
                Logituit (Mar 2026 – Present)
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300">
              <Smartphone className="w-5 h-5" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-5 rounded-2xl bg-neutral-950/70 border border-cyan-500/20 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/40 transition-all shadow-lg"
        >
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-400 block mb-1">
                TOTAL EXPERIENCE
              </span>
              <h4 className="text-xl font-bold text-white tracking-tight">11 mos at Logituit</h4>
              <p className="text-xs text-neutral-400 mt-1 font-source-code-pro">
                1 Full-Time + 7 Internships
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
              <Clock className="w-5 h-5" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="p-5 rounded-2xl bg-neutral-950/70 border border-emerald-500/20 backdrop-blur-xl relative overflow-hidden group hover:border-emerald-500/40 transition-all shadow-lg"
        >
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 block mb-1">
                CORE DOMAIN
              </span>
              <h4 className="text-xl font-bold text-white tracking-tight">Native Mobile</h4>
              <p className="text-xs text-neutral-400 mt-1 font-source-code-pro">
                Kotlin, Jetpack Compose, Clean Arch
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
              <Zap className="w-5 h-5" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Connected Timeline */}
      <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
        <AnimatePresence mode="popLayout">
          {filteredExperience.map((item, index) => {
            const isExpanded = expandedCardId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Timeline Spine Icon Node */}
                <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-neutral-950 border border-white/15 flex items-center justify-center shadow-xl group-hover:border-purple-400 group-hover:scale-110 transition-all duration-300 z-20">
                  <Briefcase className={`w-5 h-5 ${item.colorScheme.text}`} />
                </div>

                {/* Card Container */}
                <div
                  className={`bg-neutral-950/80 border border-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl transition-all duration-500 ${item.colorScheme.border}`}
                >
                  {/* Card Background Ambient Radial Mesh */}
                  <div
                    className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${item.colorScheme.glow} blur-3xl pointer-events-none group-hover:opacity-100 transition-opacity opacity-60`}
                  />

                  {/* Top Header Row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 relative z-10">
                    <div className="space-y-1.5 max-w-xl">
                      {/* Status Badges */}
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {item.isCurrent && (
                          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-mono font-semibold">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            <span>CURRENT FULL-TIME ROLE</span>
                          </div>
                        )}

                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase border ${item.colorScheme.badgeBg}`}
                        >
                          {item.type}
                        </span>

                        <span className="px-3 py-1 rounded-full text-[10px] font-mono text-neutral-400 bg-white/5 border border-white/10">
                          {item.duration}
                        </span>
                      </div>

                      {/* Role Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {item.role}
                      </h3>

                      {/* Company Name & Tagline */}
                      <p className={`text-sm sm:text-base font-semibold ${item.colorScheme.text}`}>
                        {item.company}
                      </p>

                      {/* Location & Period Info */}
                      <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-neutral-400 pt-1">
                        <div className="flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-neutral-500" />
                          <span>{item.company}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right side tagline badge */}
                    <div className="self-start">
                      <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 backdrop-blur-md hidden sm:inline-block">
                        {item.tagline}
                      </span>
                    </div>
                  </div>

                  {/* Role Description */}
                  <div className="mt-5 pt-5 border-t border-white/10 relative z-10">
                    <p className="text-xs sm:text-sm font-source-code-pro text-neutral-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Skills / Tech Stack Pills */}
                  <div className="mt-5 relative z-10">
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className={`px-3 py-1 rounded-xl text-xs font-mono border backdrop-blur-md ${item.colorScheme.pillBg}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expand / Collapse Button */}
                  <div className="mt-6 pt-4 flex items-center justify-between relative z-10 border-t border-white/10">
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors group/btn"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-purple-400 group-hover/btn:rotate-12 transition-transform" />
                      <span>
                        {isExpanded ? "Hide Responsibilities & Impact" : "View Responsibilities & Key Accomplishments"}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Collapsible Key Accomplishments */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden relative z-10"
                      >
                        <div className="mt-4 pt-4 space-y-3">
                          <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-2">
                            <Award className="w-4 h-4 text-purple-400" />
                            <span>Key Responsibilities & Deliverables</span>
                          </h4>
                          <div className="space-y-2.5">
                            {item.achievements.map((achievement, aIdx) => (
                              <div key={aIdx} className="flex items-start gap-2.5">
                                <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${item.colorScheme.text}`} />
                                <span className="text-xs sm:text-sm font-source-code-pro text-neutral-200 leading-normal">
                                  {achievement}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
