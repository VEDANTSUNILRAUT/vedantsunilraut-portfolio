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
      <div className="w-full flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {(["All", "Full-Time", "Internship"] as const).map((type) => {
          const isActive = filter === type;
          return (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all shrink-0 cursor-pointer active:scale-95 shadow-sm min-h-[36px] flex items-center justify-center ${
                isActive
                  ? "bg-purple-600/30 text-purple-300 border border-purple-500/60 shadow-[0_0_15px_rgba(168,85,247,0.35)]"
                  : "bg-white/5 border border-white/10 text-neutral-400 hover:text-neutral-200"
              }`}
            >
              {type}
            </button>
          );
        })}
      </div>

      {/* 2. Experience Cards Stack */}
      <div className="w-full space-y-3.5">
        {filteredData.map((item: WorkExperienceItem) => {
          const isExpanded = expandedId === item.id;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`w-full rounded-2xl border transition-all overflow-hidden shadow-lg ${
                item.isCurrent
                  ? "bg-neutral-900/90 border-purple-500/40 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                  : "bg-neutral-900/70 border-white/10"
              }`}
            >
              {/* Card Header (Clickable for Expand / Collapse) */}
              <button
                onClick={() => toggleExpand(item.id)}
                className="w-full p-4 flex flex-col text-left cursor-pointer transition-colors active:bg-white/5"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                      item.isCurrent 
                        ? "bg-purple-500/20 border-purple-500/40 text-purple-300 shadow-sm" 
                        : "bg-white/5 border-white/10 text-neutral-400"
                    }`}>
                      <Building2 className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white tracking-tight flex items-center gap-1.5">
                        <span>{item.role}</span>
                        {item.isCurrent && (
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                        )}
                      </div>
                      <div className="text-xs font-mono text-purple-300 font-semibold mt-0.5">
                        {item.company}
                      </div>
                    </div>
                  </div>

                  {/* Badge & Arrow */}
                  <div className="flex items-center gap-2">
                    <span className={`text-[9px] font-mono font-semibold px-2.5 py-0.5 rounded-full border ${
                      item.type === "Full-Time"
                        ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
                        : "bg-cyan-500/15 text-cyan-400 border-cyan-500/30"
                    }`}>
                      {item.type}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
                      isExpanded ? "rotate-180 text-purple-400" : ""
                    }`} />
                  </div>
                </div>

                {/* Sub-info: Period & Location */}
                <div className="mt-3 flex items-center gap-3 text-[11px] font-mono text-neutral-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{item.period}</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                    <span className="truncate max-w-[140px]">{item.location.split("·")[0]}</span>
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
                    className="overflow-hidden border-t border-white/10 px-4 pb-4 pt-3 bg-black/50 space-y-3.5"
                  >
                    <p className="text-xs text-neutral-300 leading-relaxed font-sans">
                      {item.description}
                    </p>

                    {/* Achievements List */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono uppercase text-purple-400 tracking-wider font-semibold block">
                        Key Engineering Highlights
                      </span>
                      {item.achievements.map((ach, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-[11px] text-neutral-300 leading-snug font-sans">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skills Chips */}
                    <div className="pt-1">
                      <span className="text-[10px] font-mono uppercase text-neutral-400 tracking-wider font-semibold block mb-2">
                        Technologies & Frameworks
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-purple-300 font-medium shadow-sm"
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
