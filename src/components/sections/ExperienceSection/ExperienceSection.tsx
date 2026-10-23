"use client";

import { useState, useRef, useEffect } from "react";
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
  ArrowUpRight,
  X,
} from "lucide-react";
import { WORK_EXPERIENCE_DATA, WorkExperienceItem } from "@/constants/experience";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ExperienceSectionProps } from "./ExperienceSection.types";

export function ExperienceSection({ className = "" }: ExperienceSectionProps) {
  const [expandedCardId, setExpandedCardId] = useState<string | null>("fulltime-logituit");
  const [selectedInternship, setSelectedInternship] = useState<WorkExperienceItem | null>(null);
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedInternship(null);
      }
    };
    if (selectedInternship) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedInternship]);

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
          className="font-heading text-3xl sm:text-5xl lg:text-6xl text-white font-extrabold leading-tight tracking-tight max-w-3xl"
        >
          Work & Professional <br className="hidden sm:inline" />
          <span className="italic-gradient-text">Experience</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-4 text-sm sm:text-base font-sans text-neutral-400 max-w-2xl leading-relaxed font-normal"
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
              <h4 className="font-heading text-xl font-bold text-white tracking-tight">Software Engineer</h4>
              <p className="text-xs text-neutral-400 mt-1 font-sans font-normal">
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
              <h4 className="font-heading text-xl font-bold text-white tracking-tight">11 mos at Logituit</h4>
              <p className="text-xs text-neutral-400 mt-1 font-sans font-normal">
                1 Full-Time + 6 Internships
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
              <h4 className="font-heading text-xl font-bold text-white tracking-tight">Native Mobile</h4>
              <p className="text-xs text-neutral-400 mt-1 font-sans font-normal">
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

                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {item.role}
                      </h3>

                      <p className={`text-sm sm:text-base font-semibold font-sans ${item.colorScheme.text}`}>
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
                    <p className="text-sm sm:text-base font-sans text-neutral-300 leading-relaxed font-normal">
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
                                <span className="text-xs sm:text-sm font-sans text-neutral-200 leading-relaxed font-normal">
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

      {/* SECTION 2: Bitogrid Internship Experience Grid */}
      <div className="mt-16 sm:mt-20 pt-10 border-t border-white/10">
        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <h3 className="text-sm font-mono uppercase tracking-widest text-purple-300 font-semibold">
                Internship & Specialized Engagements
              </h3>
            </div>
            <p className="text-xs sm:text-sm font-sans text-neutral-400 max-w-xl leading-relaxed font-normal">
              Hands-on engineering apprenticeships, full-stack microservices, ML research, and cloud computing programs.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-purple-500/10 border border-purple-500/20 text-purple-300 shadow-sm">
              {internshipExperience.length} Completed Engagements
            </span>
          </div>
        </div>

        {/* Bitogrid Responsive Grid Pattern */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
          {internshipExperience.map((item, index) => {
            const desktopColSpan =
              item.colSpan?.desktop === 7
                ? "lg:col-span-7"
                : item.colSpan?.desktop === 5
                ? "lg:col-span-5"
                : item.colSpan?.desktop === 6
                ? "lg:col-span-6"
                : "lg:col-span-4";

            const tabletColSpan = "md:col-span-6";

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className={`col-span-1 ${tabletColSpan} ${desktopColSpan} flex flex-col`}
              >
                <SpotlightCard
                  spotlightColor="rgba(168, 85, 247, 0.15)"
                  borderColor="rgba(168, 85, 247, 0.4)"
                  className={`bg-neutral-950/80 border border-white/10 backdrop-blur-xl p-6 sm:p-7 relative overflow-hidden shadow-xl hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group h-full ${item.colorScheme.border}`}
                >
                  {/* Background Corner Glow */}
                  <div
                    className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${item.colorScheme.glow} blur-3xl pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity`}
                  />

                  {/* Top Content Area */}
                  <div className="relative z-10 space-y-4">
                    {/* Status & Compensation Badges Row */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        {/* Status Indicator Pill */}
                        <div
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase border ${
                            item.status === "Ongoing"
                              ? "bg-purple-500/10 border-purple-500/30 text-purple-300"
                              : item.status === "Open"
                              ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-300"
                              : item.status === "Closing Soon"
                              ? "bg-amber-500/10 border-amber-500/30 text-amber-300"
                              : "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              item.status === "Ongoing"
                                ? "bg-purple-400 animate-pulse"
                                : item.status === "Open"
                                ? "bg-cyan-400 animate-pulse"
                                : item.status === "Closing Soon"
                                ? "bg-amber-400 animate-pulse"
                                : "bg-emerald-400"
                            }`}
                          />
                          <span>{item.status || "Completed"}</span>
                        </div>

                        {/* Paid / Compensation Status */}
                        {item.compensation && (
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-neutral-300 bg-white/5 border border-white/10">
                            {item.compensation}
                          </span>
                        )}
                      </div>

                      {/* Duration Badge */}
                      <div className="flex items-center gap-1 text-[10px] font-mono text-neutral-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                        <Clock className="w-3 h-3 text-neutral-400 shrink-0" />
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    {/* Job Title & Company */}
                    <div>
                      <h4 className="font-heading text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-purple-200 transition-colors">
                        {item.role}
                      </h4>
                      <p className={`text-xs sm:text-sm font-semibold font-sans mt-1 flex items-center gap-1.5 ${item.colorScheme.text}`}>
                        <Building2 className="w-3.5 h-3.5 shrink-0 text-neutral-400" />
                        <span>{item.company}</span>
                      </p>
                    </div>

                    {/* Period & Location */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] font-mono text-neutral-400 pt-0.5">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-neutral-500 shrink-0" />
                        <span>{item.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-neutral-500 shrink-0" />
                        <span className="truncate">{item.location}</span>
                      </div>
                    </div>

                    {/* 2-3 Sentence Description */}
                    <p className="text-xs sm:text-sm font-sans text-neutral-300 leading-relaxed pt-1 font-normal">
                      {item.description}
                    </p>

                    {/* Skills & Tech Badges */}
                    <div className="pt-2">
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
                  </div>

                  {/* Card Bottom: Prominent CTA */}
                  <div className="mt-6 pt-4 border-t border-white/10 relative z-10 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedInternship(item)}
                      className="w-full inline-flex items-center justify-between px-4 py-2 rounded-xl bg-white/5 hover:bg-purple-500/20 text-xs font-mono font-medium text-neutral-200 hover:text-white border border-white/10 hover:border-purple-400/50 transition-all duration-200 group/cta shadow-sm cursor-pointer active:scale-[0.98]"
                    >
                      <span className="font-semibold text-purple-300 group-hover/cta:text-purple-200">
                        {item.ctaText || "View Experience"}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-purple-400 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal for Selected Internship */}
      <AnimatePresence>
        {selectedInternship && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedInternship(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-neutral-950 border border-purple-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10"
            >
              {/* Background ambient glow */}
              <div
                className={`absolute top-0 right-0 w-80 h-80 bg-gradient-to-br ${selectedInternship.colorScheme.glow} blur-3xl pointer-events-none opacity-40`}
              />

              {/* Modal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
                <div className="flex flex-wrap items-center gap-2">
                  <div
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase border ${
                      selectedInternship.status === "Ongoing"
                        ? "bg-purple-500/10 border-purple-500/30 text-purple-300"
                        : "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{selectedInternship.status || "Completed"}</span>
                  </div>

                  {selectedInternship.compensation && (
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-neutral-300 bg-white/5 border border-white/10">
                      {selectedInternship.compensation}
                    </span>
                  )}

                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-neutral-400 bg-white/5 border border-white/10">
                    {selectedInternship.duration}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedInternship(null)}
                  className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors border border-white/10 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="overflow-y-auto space-y-6 pt-5 pr-1 relative z-10">
                <div>
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {selectedInternship.role}
                  </h3>
                  <p className={`text-sm sm:text-base font-semibold font-sans mt-1 ${selectedInternship.colorScheme.text}`}>
                    {selectedInternship.company}
                  </p>
                  <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs font-mono text-neutral-400 pt-2">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{selectedInternship.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{selectedInternship.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-xs sm:text-sm font-sans text-neutral-200 leading-relaxed font-normal">
                    {selectedInternship.description}
                  </p>
                </div>

                {selectedInternship.achievements.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 flex items-center gap-2">
                      <Award className="w-4 h-4 text-purple-400" />
                      <span>Key Responsibilities & Deliverables</span>
                    </h4>
                    <div className="space-y-2.5">
                      {selectedInternship.achievements.map((achievement, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${selectedInternship.colorScheme.text}`} />
                          <span className="text-xs sm:text-sm font-sans text-neutral-300 leading-relaxed font-normal">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                    Technologies & Applied Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedInternship.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-3 py-1 rounded-xl text-xs font-mono border backdrop-blur-md ${selectedInternship.colorScheme.pillBg}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex justify-end relative z-10">
                <button
                  onClick={() => setSelectedInternship(null)}
                  className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-mono font-medium transition-colors shadow-lg shadow-purple-600/20 cursor-pointer"
                >
                  Close Details
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

