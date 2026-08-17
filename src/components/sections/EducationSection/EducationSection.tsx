"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  GraduationCap,
  Award,
  BookOpen,
  Calendar,
  MapPin,
  Sparkles,
  CheckCircle2,
  Trophy,
  ChevronDown,
  ChevronUp,
  School,
  Building2,
} from "lucide-react";
import { EDUCATION_DATA } from "@/constants/education";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { EducationSectionProps } from "./EducationSection.types";

export function EducationSection({ className = "" }: EducationSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [expandedCardId, setExpandedCardId] = useState<string | null>("graduation");
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 300, damping: 30 });

  const filteredEducation = selectedFilter === "all"
    ? EDUCATION_DATA
    : EDUCATION_DATA.filter((item) => item.id === selectedFilter);

  const toggleExpand = (id: string) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  const getIconForLevel = (id: string) => {
    switch (id) {
      case "graduation":
        return <GraduationCap className="w-6 h-6 text-purple-400" />;
      case "12th-hsc":
        return <BookOpen className="w-6 h-6 text-violet-400" />;
      case "10th-ssc":
        return <Award className="w-6 h-6 text-fuchsia-400" />;
      default:
        return <School className="w-6 h-6 text-purple-400" />;
    }
  };

  return (
    <section
      id="education"
      className={`w-full max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-24 relative z-10 scroll-mt-24 snap-start ${className}`}
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[250px] bg-violet-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono font-medium mb-4 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
          <span>ACADEMIC FOUNDATION & MILESTONES</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-eb-garamond text-3xl sm:text-5xl lg:text-6xl text-white font-normal leading-tight max-w-3xl"
        >
          Education & <br className="hidden sm:inline" />
          <span className="italic-gradient-text font-semibold">Qualifications</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-4 text-xs sm:text-sm font-source-code-pro text-neutral-400 max-w-2xl leading-relaxed"
        >
          A detailed breakdown of my academic journey, from secondary schooling to degree specialization in Computer Science & Engineering.
        </motion.p>

        {/* Quick Filter Pill Buttons */}
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
            All Milestones (3)
          </button>
          <button
            onClick={() => setSelectedFilter("graduation")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              selectedFilter === "graduation"
                ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25 font-semibold"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            Graduation (B.Tech)
          </button>
          <button
            onClick={() => setSelectedFilter("12th-hsc")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              selectedFilter === "12th-hsc"
                ? "bg-cyan-600 text-white shadow-lg shadow-cyan-500/25 font-semibold"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            12th Standard (HSC)
          </button>
          <button
            onClick={() => setSelectedFilter("10th-ssc")}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              selectedFilter === "10th-ssc"
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-500/25 font-semibold"
                : "text-neutral-400 hover:text-white hover:bg-white/5"
            }`}
          >
            10th Standard (SSC)
          </button>
        </motion.div>
      </div>

      {/* Top 3 KPI Summary Metrics Banner */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-5 rounded-2xl bg-neutral-950/70 border border-purple-500/20 backdrop-blur-xl relative overflow-hidden group hover:border-purple-500/40 transition-all shadow-lg"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all" />
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-purple-400 block mb-1">
                GRADUATION
              </span>
              <h4 className="text-xl font-bold text-white tracking-tight">8.85 CGPA</h4>
              <p className="text-xs text-neutral-400 mt-1 font-source-code-pro">
                B.Tech Computer Science & Eng.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300">
              <GraduationCap className="w-5 h-5" />
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
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-cyan-400 block mb-1">
                12TH CLASS (HSC)
              </span>
              <h4 className="text-xl font-bold text-white tracking-tight">91.80%</h4>
              <p className="text-xs text-neutral-400 mt-1 font-source-code-pro">
                Science (PCMB & CS Topper)
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
              <BookOpen className="w-5 h-5" />
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
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all" />
          <div className="flex items-start justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 block mb-1">
                10TH CLASS (SSC)
              </span>
              <h4 className="text-xl font-bold text-white tracking-tight">94.50%</h4>
              <p className="text-xs text-neutral-400 mt-1 font-source-code-pro">
                School Distinction Topper
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300">
              <Award className="w-5 h-5" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Connected Timeline & Education Cards Container */}
      <div ref={timelineRef} className="relative border-l-2 border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
        {/* Scroll-Linked Glowing Laser Spine */}
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-purple-500 via-violet-400 to-emerald-400 shadow-[0_0_12px_rgba(168,85,247,0.9)] z-10 pointer-events-none"
        />

        <AnimatePresence mode="popLayout">
          {filteredEducation.map((item, index) => {
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
                  {getIconForLevel(item.id)}
                </div>

                {/* Card Container with Spotlight */}
                <SpotlightCard
                  spotlightColor="rgba(168, 85, 247, 0.18)"
                  borderColor="rgba(168, 85, 247, 0.5)"
                  className={`bg-neutral-950/80 border border-white/10 backdrop-blur-xl p-6 sm:p-8 relative overflow-hidden shadow-2xl transition-all duration-500 ${item.colorScheme.border}`}
                >
                  {/* Card Background Ambient Radial Mesh */}
                  <div
                    className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${item.colorScheme.glow} blur-3xl pointer-events-none group-hover:opacity-100 transition-opacity opacity-60`}
                  />

                  {/* Card Header Row */}
                  <div className="flex flex-wrap items-start justify-between gap-4 relative z-10">
                    <div className="space-y-1.5 max-w-xl">
                      {/* Level Tag Pill */}
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase border ${item.colorScheme.badgeBg}`}
                        >
                          {item.levelTag}
                        </span>
                        <span className="px-3 py-1 rounded-full text-[10px] font-mono text-neutral-400 bg-white/5 border border-white/10">
                          {item.status}
                        </span>
                      </div>

                      {/* Degree Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                        {item.degree}
                      </h3>

                      {/* Field / Specialization */}
                      <p className={`text-sm sm:text-base font-semibold ${item.colorScheme.text}`}>
                        {item.field}
                      </p>

                      {/* Institution & Location & Duration Info Row */}
                      <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-neutral-400 pt-1">
                        <div className="flex items-center gap-1.5">
                          <Building2 className="w-3.5 h-3.5 text-neutral-500" />
                          <span>{item.institution}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                          <span>{item.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Side: Score Box & Grade Badge */}
                    <div className="flex flex-col items-start sm:items-end justify-between self-stretch pt-1 sm:pt-0">
                      <div className="p-3.5 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md text-left sm:text-right min-w-[140px] shadow-lg">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block mb-0.5">
                          {item.score.type} SCORE
                        </span>
                        <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight block">
                          {item.score.value}
                        </span>
                        <span className={`text-[11px] font-mono font-medium ${item.colorScheme.text}`}>
                          {item.score.label}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <div className="mt-5 pt-5 border-t border-white/10 relative z-10">
                    <p className="text-xs sm:text-sm font-source-code-pro text-neutral-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Expand / Collapse Toggle Row */}
                  <div className="mt-6 pt-4 flex items-center justify-between relative z-10">
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 hover:text-purple-300 transition-colors group/btn"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-purple-400 group-hover/btn:rotate-12 transition-transform" />
                      <span>
                        {isExpanded ? "Hide Details & Coursework" : "View Details, Highlights & Coursework"}
                      </span>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Collapsible Deep Details Panel */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden relative z-10"
                      >
                        <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-6">
                          {/* Key Highlights (7 Cols) */}
                          <div className="lg:col-span-7 space-y-3">
                            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-2">
                              <Trophy className="w-4 h-4 text-amber-400" />
                              <span>Key Highlights & Achievements</span>
                            </h4>
                            <div className="space-y-2.5">
                              {item.highlights.map((highlight, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-2.5">
                                  <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${item.colorScheme.text}`} />
                                  <span className="text-xs sm:text-sm font-source-code-pro text-neutral-200 leading-normal">
                                    {highlight}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Relevant Coursework & Subjects (5 Cols) */}
                          <div className="lg:col-span-5 space-y-3">
                            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-2">
                              <BookOpen className="w-4 h-4 text-purple-400" />
                              <span>Core Subjects & Focus Areas</span>
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {item.courses.map((course, cIdx) => (
                                <span
                                  key={cIdx}
                                  className={`px-3 py-1.5 rounded-xl text-xs font-mono border backdrop-blur-md ${item.colorScheme.pillBg}`}
                                >
                                  {course}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
