"use client";

import { useState } from "react";
import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/constants/site";
import { AndroidTabType } from "../AndroidBottomNav";
import { useAndroidToast } from "../AndroidToast";
import { useClipboard } from "@/hooks/useClipboard";
import ShinyText from "@/components/ShinyText";
import { 
  Smartphone, 
  Layers, 
  Terminal, 
  ArrowUpRight, 
  Copy, 
  Check, 
  Download, 
  Github, 
  Linkedin, 
  Cpu, 
  Sparkles,
  MapPin,
  Briefcase,
  Code2
} from "lucide-react";

const emptySubscribe = () => () => {};

function getGreetingSnapshot(): string {
  if (typeof window === "undefined") return "Good Day";
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) return "Good Morning";
  if (hour >= 12 && hour < 17) return "Good Afternoon";
  return "Good Evening";
}

interface AndroidHomeScreenProps {
  setActiveTab?: (tab: AndroidTabType) => void;
  onOpenAssistant?: () => void;
}

export function AndroidHomeScreen({ setActiveTab, onOpenAssistant }: AndroidHomeScreenProps) {
  const [imageError, setImageError] = useState(false);
  const { copied, copy } = useClipboard();
  const { showToast } = useAndroidToast();
  
  const greeting = useSyncExternalStore(
    emptySubscribe,
    getGreetingSnapshot,
    () => "Good Day"
  );

  const handleCopyEmail = () => {
    copy(siteConfig.brand.email);
    showToast("Email copied to clipboard!", "success");
  };

  const handleDownloadResume = () => {
    showToast("Downloading Vedant's Resume / CV...", "sparkle");
  };

  return (
    <div className="w-full flex flex-col items-center pt-1 pb-4 space-y-4 select-none">
      
      {/* 1. Android Material You Widget Shelf */}
      <div className="w-full grid grid-cols-2 gap-2">
        {/* Widget 1: Live Role & Company */}
        <div className="p-3 rounded-2xl bg-neutral-900/80 border border-white/10 backdrop-blur-xl flex flex-col justify-between shadow-lg">
          <div className="flex items-center justify-between">
            <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Briefcase className="w-3.5 h-3.5" />
            </div>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          </div>
          <div className="mt-3">
            <span className="text-[9px] font-mono uppercase text-neutral-400 tracking-wider">Current Role</span>
            <div className="text-xs font-bold text-white tracking-tight">Software Engineer</div>
            <div className="text-[10px] font-mono text-emerald-400">@ Logituit</div>
          </div>
        </div>

        {/* Widget 2: Location & Tech Specialization */}
        <div className="p-3 rounded-2xl bg-neutral-900/80 border border-white/10 backdrop-blur-xl flex flex-col justify-between shadow-lg">
          <div className="flex items-center justify-between">
            <div className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
              <Smartphone className="w-3.5 h-3.5" />
            </div>
            <span className="text-[9px] font-mono text-purple-300 bg-purple-500/10 px-1.5 py-0.2 rounded border border-purple-500/30">
              @Composable
            </span>
          </div>
          <div className="mt-3">
            <span className="text-[9px] font-mono uppercase text-neutral-400 tracking-wider">Specialist</span>
            <div className="text-xs font-bold text-white tracking-tight">Native Android & KMP</div>
            <div className="text-[10px] font-mono text-neutral-400 flex items-center gap-1">
              <MapPin className="w-2.5 h-2.5 text-neutral-400" />
              <span>India · Hybrid</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Hero Profile Card (Android App Style) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full p-4 rounded-3xl bg-gradient-to-b from-neutral-900/90 via-neutral-950 to-neutral-950 border border-white/10 backdrop-blur-2xl shadow-xl flex flex-col items-center text-center"
      >
        {/* Photo Container */}
        <div className="relative mb-3 w-36 h-36 rounded-2xl overflow-hidden ring-1 ring-white/15 shadow-2xl">
          {!imageError ? (
            <>
              <Image
                src="/vedant-hero.png"
                alt="Vedant Sunil Raut"
                fill
                sizes="144px"
                priority
                className="object-cover object-top rounded-2xl"
                onError={() => setImageError(true)}
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent pointer-events-none" />
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-purple-950/40 text-purple-300">
              <Code2 className="w-10 h-10 mb-1" />
              <span className="text-[10px] font-mono">Vedant Raut</span>
            </div>
          )}
        </div>

        {/* Greeting */}
        <div className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400">
          <span>Hello</span>
          <motion.span
            animate={{ rotate: [0, 20, -10, 20, -5, 12, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
            className="inline-block origin-[70%_70%]"
          >
            👋
          </motion.span>
          <span>, {greeting}!</span>
        </div>

        {/* Name Title */}
        <div className="mt-1 text-xl font-source-code-pro font-normal tracking-wide">
          <ShinyText
            text="I am Vedant Sunil Raut"
            disabled={false}
            speed={3}
            className="font-semibold text-white"
            color="#ffffff"
            shineColor="#c084fc"
            spread={120}
          />
        </div>

        {/* Core Tagline */}
        <h1 className="mt-1.5 font-eb-garamond text-xl leading-[1.25] text-balance text-white font-normal px-2">
          Architecting high-performance software & shaping{" "}
          <span className="italic-gradient-text font-semibold">
            Mobile Realities
          </span>
        </h1>

        <p className="mt-1.5 text-[11px] font-mono text-neutral-300 max-w-xs leading-relaxed px-1">
          Specializing in Kotlin, Jetpack Compose, Kotlin Multiplatform (KMP) & Full-Stack Systems at Logituit.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-3.5 flex flex-col gap-2 w-full">
          <div className="grid grid-cols-2 gap-2 w-full">
            <button
              onClick={() => setActiveTab && setActiveTab("contact")}
              className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(168,85,247,0.4)] active:scale-95 transition-all cursor-pointer"
            >
              <span>Connect / Hire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {onOpenAssistant && (
              <button
                onClick={onOpenAssistant}
                className="py-2.5 px-3 rounded-xl bg-purple-950/60 border border-purple-500/40 hover:border-purple-400 text-purple-200 font-semibold text-xs flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(168,85,247,0.25)] active:scale-95 transition-all cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-purple-300 animate-pulse" />
                <span>Ask AI Bot</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2 w-full">
            <button
              onClick={handleCopyEmail}
              className="py-2 px-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-neutral-200 text-[11px] font-mono flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-purple-400" />}
              <span>{copied ? "Copied!" : "Copy Email"}</span>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownloadResume}
              className="py-2 px-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-neutral-200 text-[11px] font-mono flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* 3. Android Engineering Pillars */}
      <div className="w-full space-y-2">
        <div className="flex items-center justify-between px-1">
          <span className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider">Engineering Focus</span>
          <button
            onClick={() => setActiveTab && setActiveTab("skills")}
            className="text-[10px] font-mono text-purple-400 flex items-center gap-0.5 hover:underline cursor-pointer"
          >
            <span>View All</span>
            <ArrowUpRight className="w-2.5 h-2.5" />
          </button>
        </div>

        {/* Card 1: Jetpack Compose */}
        <div className="p-3 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
            <Smartphone className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-white tracking-tight flex items-center justify-between">
              <span>Jetpack Compose UI</span>
              <span className="text-[9px] font-mono text-purple-300 bg-purple-500/20 px-1.5 py-0.2 rounded">60 FPS</span>
            </div>
            <p className="text-[10px] text-neutral-400 mt-0.5 leading-normal">
              Declarative state-driven UI, custom canvas drawing, baseline profiles & smooth physics animations.
            </p>
          </div>
        </div>

        {/* Card 2: Kotlin Multiplatform */}
        <div className="p-3 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
            <Layers className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-white tracking-tight flex items-center justify-between">
              <span>Kotlin Multiplatform (KMP)</span>
              <span className="text-[9px] font-mono text-cyan-300 bg-cyan-500/20 px-1.5 py-0.2 rounded">Cross-Platform</span>
            </div>
            <p className="text-[10px] text-neutral-400 mt-0.5 leading-normal">
              Shared architecture, domain logic, offline-first Room database & Ktor network stack across platforms.
            </p>
          </div>
        </div>

        {/* Card 3: Architecture & Performance */}
        <div className="p-3 rounded-2xl bg-neutral-900/60 border border-white/10 backdrop-blur-xl flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
            <Terminal className="w-4 h-4" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-white tracking-tight flex items-center justify-between">
              <span>Clean Architecture & Coroutines</span>
              <span className="text-[9px] font-mono text-emerald-300 bg-emerald-500/20 px-1.5 py-0.2 rounded">MVI / MVVM</span>
            </div>
            <p className="text-[10px] text-neutral-400 mt-0.5 leading-normal">
              Dependency Injection (Hilt/Koin), reactive Flow streams, memory profiling, and modular codebases.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Quick Links Footer Row */}
      <div className="w-full flex items-center justify-center gap-3 pt-2">
        <a
          href={siteConfig.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white flex items-center gap-1.5 text-xs font-mono active:scale-95 transition-all"
        >
          <Github className="w-3.5 h-3.5" />
          <span>GitHub</span>
        </a>

        <a
          href={siteConfig.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white flex items-center gap-1.5 text-xs font-mono active:scale-95 transition-all"
        >
          <Linkedin className="w-3.5 h-3.5 text-blue-400" />
          <span>LinkedIn</span>
        </a>
      </div>

    </div>
  );
}
