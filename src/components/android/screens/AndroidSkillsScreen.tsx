"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck } from "lucide-react";

interface SkillCategory {
  name: string;
  category: "Android" | "Architecture" | "Backend" | "Tools";
  level: number;
  badge: string;
  description: string;
}

const ANDROID_SKILLS: SkillCategory[] = [
  {
    name: "Kotlin & Java",
    category: "Android",
    level: 95,
    badge: "Core Language",
    description: "Coroutines, Flow, Extension Functions, Sealed Classes, Type-safe builders & DSLs.",
  },
  {
    name: "Jetpack Compose",
    category: "Android",
    level: 92,
    badge: "Modern UI",
    description: "Declarative UI, State Hoisting, Custom Layouts, Canvas, Recomposition optimizations.",
  },
  {
    name: "Kotlin Multiplatform (KMP)",
    category: "Android",
    level: 88,
    badge: "Cross-Platform",
    description: "Shared business logic, multiplatform Room DB, Ktor client, Expect/Actual mechanisms.",
  },
  {
    name: "Clean Architecture & MVI/MVVM",
    category: "Architecture",
    level: 90,
    badge: "Architecture",
    description: "Domain/Data/UI separation, Repository pattern, UDF (Unidirectional Data Flow), StateFlow.",
  },
  {
    name: "Dependency Injection (Hilt / Koin)",
    category: "Architecture",
    level: 88,
    badge: "Architecture",
    description: "Dagger Hilt, Koin, component scopes, ViewModel injection, and testing modules.",
  },
  {
    name: "Android Jetpack Suite",
    category: "Android",
    level: 92,
    badge: "Libraries",
    description: "Navigation Compose, Room DB, WorkManager, DataStore, CameraX, Paging 3.",
  },
  {
    name: "REST APIs & Networking",
    category: "Backend",
    level: 90,
    badge: "Networking",
    description: "Retrofit, OkHttp, Ktor Client, Serialization, Interceptors, and caching strategies.",
  },
  {
    name: "Full-Stack Web (React & Next.js)",
    category: "Backend",
    level: 85,
    badge: "Full-Stack",
    description: "Next.js, TypeScript, Tailwind CSS, Node.js, Spring Boot, MySQL, MongoDB.",
  },
  {
    name: "Android Studio & Profiler",
    category: "Tools",
    level: 92,
    badge: "Tooling",
    description: "Memory profiling, CPU layout inspector, Baseline profiles, Gradle build scripts, ProGuard.",
  },
  {
    name: "Git, GitHub & CI/CD",
    category: "Tools",
    level: 90,
    badge: "DevOps",
    description: "Branching workflows, GitHub Actions, automated builds, APK signing, and release pipelines.",
  },
];

export function AndroidSkillsScreen() {
  const [activeCategory, setActiveCategory] = useState<"All" | "Android" | "Architecture" | "Backend" | "Tools">("All");

  const filteredSkills = ANDROID_SKILLS.filter((s) => {
    if (activeCategory === "All") return true;
    return s.category === activeCategory;
  });

  return (
    <div className="w-full flex flex-col items-center pt-1 pb-4 space-y-4 select-none">
      
      {/* 1. Header Banner */}
      <div className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-neutral-900/90 via-purple-950/40 to-black border border-purple-500/20 backdrop-blur-xl flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white tracking-tight">Android Tech Stack</div>
            <div className="text-[10px] font-mono text-neutral-400">Jetpack, Kotlin & Systems</div>
          </div>
        </div>
        <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
          Senior Level
        </span>
      </div>

      {/* 2. Category Filter Chips */}
      <div className="w-full flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {(["All", "Android", "Architecture", "Backend", "Tools"] as const).map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-all shrink-0 cursor-pointer active:scale-95 ${
                isActive
                  ? "bg-purple-600/30 text-purple-300 border border-purple-500/50 shadow-[0_0_12px_rgba(168,85,247,0.3)]"
                  : "bg-white/5 border border-white/10 text-neutral-400 hover:text-neutral-200"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* 3. Skills Cards Grid */}
      <div className="w-full space-y-2.5">
        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.04 }}
            className="w-full p-3 rounded-2xl bg-neutral-900/70 border border-white/10 backdrop-blur-xl shadow-md space-y-2"
          >
            {/* Top Row: Skill Name + Level Badge */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white tracking-tight">{skill.name}</span>
                <span className="text-[9px] font-mono text-purple-300 bg-purple-500/15 px-1.5 py-0.2 rounded border border-purple-500/30">
                  {skill.badge}
                </span>
              </div>
              <span className="text-[10px] font-mono font-semibold text-neutral-300">
                {skill.level}%
              </span>
            </div>

            {/* Jetpack Progress Meter */}
            <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-emerald-400 shadow-[0_0_8px_rgba(168,85,247,0.6)]"
              />
            </div>

            {/* Description */}
            <p className="text-[10px] text-neutral-400 font-mono leading-relaxed">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 4. Architecture Verification Stamp */}
      <div className="w-full p-3 rounded-2xl bg-emerald-950/20 border border-emerald-500/20 flex items-center gap-2.5">
        <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
        <div className="text-[10px] font-mono text-neutral-300">
          <span className="font-semibold text-emerald-300">Clean Architecture Certified: </span>
          Modularized multi-module Gradle setups adhering to Google Android standards.
        </div>
      </div>

    </div>
  );
}
