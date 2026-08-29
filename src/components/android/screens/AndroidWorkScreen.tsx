"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WORK_EXPERIENCE_DATA, WorkExperienceItem } from "@/constants/experience";
import { Calendar, MapPin, ChevronDown, CheckCircle2, Building2 } from "lucide-react";

export function AndroidWorkScreen() {
  const [filter, setFilter] = useState<"All" | "Full-Time" | "Internship">("All");
  const [expandedId, setExpandedId] = useState<string>("fulltime-logituit");

  const filteredData = WORK_EXPERIENCE_DATA.filter((item) => {
    if (filter === "All") return true;
    return item.type === filter;
  });

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? "" : id));
  };

  return (
    <div className="w-full flex flex-col items-center pt-1 pb-4 space-y-4 select-none">
      
      {/* 1. Filter Chips Row */}
      <div className="w-full flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {(["All", "Full-Time", "Internship"] as const).map((type) => {
          const isActive = filter === type;
          return (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-all shrink-0 cursor-pointer active:scale-95 ${
                isActive
                  ? "bg-purple-600/30 text-purple-300 border border-purple-500/50 shadow-[0_0_12px_rgba(168,85,247,0.3)]"
                  : "bg-white/5 border border-white/10 text-neutral-400 hover:text-neutral-200"
              }`}
            >
              {type}
            </button>
          );
        })}
      </div>

      {/* 2. Experience Cards Stack */}
      <div className="w-full space-y-3">
        {filteredData.map((item: WorkExperienceItem) => {
          const isExpanded = expandedId === item.id;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`w-full rounded-2xl border transition-all overflow-hidden ${
                item.isCurrent
                  ? "bg-neutral-900/90 border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.15)]"
                  : "bg-neutral-950/80 border-white/10"
              }`}
            >
              {/* Card Header (Clickable for Expand / Collapse) */}
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full p-3.5 flex flex-col text-left cursor-pointer transition-colors active:bg-white/5"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                      item.isCurrent ? "bg-purple-500/20 text-purple-400" : "bg-white/5 text-neutral-400"
                    }`}>
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white tracking-tight flex items-center gap-1.5">
                        <span>{item.role}</span>
                        {item.isCurrent && (
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        )}
                      </div>
                      <div className="text-[11px] font-mono text-purple-300 font-medium">
                        {item.company}
                      </div>
                    </div>
                  </div>

                  {/* Badge & Arrow */}
                  <div className="flex items-center gap-2">
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border ${
                      item.type === "Full-Time"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                        : "bg-cyan-500/10 text-cyan-400 border-cyan-500/30"
                    }`}>
                      {item.type}
                    </span>
                    <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-purple-400" : ""
                    }`} />
                  </div>
                </div>

                {/* Sub-info: Period & Location */}
                <div className="mt-2.5 flex items-center gap-3 text-[10px] font-mono text-neutral-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-neutral-400" />
                    <span>{item.period}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-neutral-400" />
                    <span className="truncate max-w-[120px]">{item.location.split("·")[0]}</span>
                  </div>
                </div>
              </button>

              {/* Expandable Details Body */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden border-t border-white/10 px-3.5 pb-3.5 pt-2.5 bg-black/40 space-y-3"
                  >
                    <p className="text-[11px] text-neutral-300 leading-relaxed font-sans">
                      {item.description}
                    </p>

                    {/* Achievements List */}
                    <div className="space-y-1.5">
                      <span className="text-[9px] font-mono uppercase text-purple-400 tracking-wider block">
                        Key Engineering Highlights
                      </span>
                      {item.achievements.map((ach, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[10px] text-neutral-300 leading-snug">
                          <CheckCircle2 className="w-3 h-3 text-purple-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skills Chips */}
                    <div className="pt-1">
                      <span className="text-[9px] font-mono uppercase text-neutral-400 tracking-wider block mb-1.5">
                        Tech Stack
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[9px] font-mono text-purple-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}
