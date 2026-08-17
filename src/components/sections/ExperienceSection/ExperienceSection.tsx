"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { WORK_EXPERIENCE_DATA, WorkExperienceItem } from "@/constants/experience";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ExperienceSectionProps } from "./ExperienceSection.types";

export function ExperienceSection({ className = "" }: ExperienceSectionProps) {
  const [expandedCardId, setExpandedCardId] = useState<string | null>("fulltime-logituit");
  const carouselRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 300, damping: 30 });

  const fullTimeExperience = WORK_EXPERIENCE_DATA.filter((item) => item.type === "Full-Time");
  const internshipExperience = WORK_EXPERIENCE_DATA.filter((item) => item.type === "Internship");

  const toggleExpand = (id: string) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = direction === "left" ? -360 : 360;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
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
          My engineering journey as a Software Engineer & Android Developer at Logituit, including full-time industry impact and mobile internships.
        </motion.p>
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

      {/* SECTION 1: Full-Time Experience Card(s) */}
      <div className="mb-16">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase className="w-4 h-4 text-purple-400" />
          <h3 className="text-sm font-mono uppercase tracking-widest text-purple-300 font-semibold">
            Full-Time Software Engineering
          </h3>
          <div className="h-px bg-purple-500/20 flex-1 ml-2" />
        </div>

        <div ref={timelineRef} className="relative border-l-2 border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
          {/* Scroll-Linked Glowing Laser Spine */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-violet-400 to-emerald-400 shadow-[0_0_12px_rgba(168,85,247,0.9)] z-10 pointer-events-none"
          />

          {fullTimeExperience.map((item, index) => {
            const isExpanded = expandedCardId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative group"
              >
                {/* Timeline Spine Icon Node */}
                <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-neutral-950 border border-white/15 flex items-center justify-center shadow-xl group-hover:border-purple-400 group-hover:scale-110 transition-all duration-300 z-20">
                  <Briefcase className={`w-5 h-5 ${item.colorScheme.text}`} />
                </div>

                {/* Main Full-Time Card Container with Spotlight */}
                <SpotlightCard
                  spotlightColor="rgba(168, 85, 247, 0.18)"
                  borderColor="rgba(168, 85, 247, 0.5)"
                  className={`bg-neutral-950/80 border border-white/10 backdrop-blur-xl p-6 sm:p-8 relative overflow-hidden shadow-2xl transition-all duration-500 ${item.colorScheme.border}`}
                >
                  <div
                    className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${item.colorScheme.glow} blur-3xl pointer-events-none group-hover:opacity-100 transition-opacity opacity-60`}
                  />

                  {/* Top Header Row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 relative z-10">
                    <div className="space-y-1.5 max-w-xl">
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

                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {item.role}
                      </h3>

                      <p className={`text-sm sm:text-base font-semibold ${item.colorScheme.text}`}>
                        {item.company}
                      </p>

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

                    <div className="self-start">
                      <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 backdrop-blur-md hidden sm:inline-block">
                        {item.tagline}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 pt-5 border-t border-white/10 relative z-10">
                    <p className="text-xs sm:text-sm font-source-code-pro text-neutral-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

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
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* SECTION 2: Horizontal Spinning / Sliding Internships Carousel */}
      <div className="mt-12">
        {/* Carousel Header Row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <h3 className="text-sm font-mono uppercase tracking-widest text-purple-300 font-semibold">
              Internship Engagements & Roles
            </h3>
          </div>

          {/* Navigation Scroll Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollCarousel("left")}
              className="p-2 rounded-xl bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white hover:border-purple-400/50 hover:bg-neutral-800 transition-all active:scale-95 shadow-md"
              aria-label="Previous internships"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollCarousel("right")}
              className="p-2 rounded-xl bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white hover:border-purple-400/50 hover:bg-neutral-800 transition-all active:scale-95 shadow-md"
              aria-label="Next internships"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Scroll Track */}
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {internshipExperience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="w-[320px] sm:w-[400px] shrink-0 snap-start h-full"
            >
              <SpotlightCard
                spotlightColor="rgba(168, 85, 247, 0.15)"
                borderColor="rgba(168, 85, 247, 0.4)"
                className={`bg-neutral-950/80 border border-white/10 backdrop-blur-xl p-6 relative overflow-hidden shadow-xl transition-all duration-300 flex flex-col justify-between group h-full ${item.colorScheme.border}`}
              >
                {/* Background Glow */}
                <div
                  className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${item.colorScheme.glow} blur-3xl pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity`}
                />

                <div className="relative z-10 space-y-4">
                  {/* Header Badge & Duration */}
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-mono font-semibold uppercase border ${item.colorScheme.badgeBg}`}
                    >
                      {item.type}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-neutral-400 bg-white/5 border border-white/10">
                      {item.duration}
                    </span>
                  </div>

                  {/* Role & Company */}
                  <div>
                    <h4 className="text-lg font-bold text-white tracking-tight group-hover:text-purple-200 transition-colors">
                      {item.role}
                    </h4>
                    <p className={`text-xs font-semibold mt-0.5 ${item.colorScheme.text}`}>
                      {item.company}
                    </p>
                  </div>

                  {/* Period & Location */}
                  <div className="flex flex-col gap-1 text-[11px] font-mono text-neutral-400 pt-1">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-neutral-500 shrink-0" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-neutral-500 shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs font-source-code-pro text-neutral-300 line-clamp-3 leading-relaxed pt-1">
                    {item.description}
                  </p>

                  {/* Key Achievements Bullets */}
                  {item.achievements.length > 0 && (
                    <div className="space-y-1.5 pt-2 border-t border-white/10">
                      {item.achievements.slice(0, 2).map((achievement, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2">
                          <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${item.colorScheme.text}`} />
                          <span className="text-[11px] font-source-code-pro text-neutral-300 line-clamp-2 leading-tight">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Tech Pills */}
                <div className="mt-5 pt-3 border-t border-white/10 relative z-10">
                  <div className="flex flex-wrap gap-1.5">
                    {item.skills.slice(0, 4).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-2.5 py-0.5 rounded-lg text-[10px] font-mono border backdrop-blur-md ${item.colorScheme.pillBg}`}
                      >
                        {skill}
                      </span>
                    ))}
                    {item.skills.length > 4 && (
                      <span className="px-2 py-0.5 rounded-lg text-[10px] font-mono text-neutral-400 bg-white/5 border border-white/10">
                        +{item.skills.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

