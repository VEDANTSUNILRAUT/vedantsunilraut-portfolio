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
      <div className="w-full grid grid-cols-2 gap-2.5">
        {/* Widget 1: Live Role & Company */}
        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-neutral-900/90 via-neutral-900/70 to-neutral-950/90 border border-white/10 backdrop-blur-2xl flex flex-col justify-between shadow-xl">
          <div className="flex items-center justify-between">
            <div className="w-7 h-7 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shadow-sm">
              <Briefcase className="w-3.5 h-3.5" />
            </div>
            <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span className="text-[9px] font-mono text-emerald-300 font-semibold">Active</span>
            </div>
          </div>
          <div className="mt-3">
            <span className="text-[9px] font-mono uppercase text-neutral-400 tracking-wider">Current Role</span>
            <div className="text-xs font-bold text-white tracking-tight">Software Engineer</div>
            <div className="text-[11px] font-mono text-emerald-400 font-medium">@ Logituit</div>
          </div>
        </div>

        {/* Widget 2: Location & Tech Specialization */}
        <div className="p-3.5 rounded-2xl bg-gradient-to-br from-neutral-900/90 via-neutral-900/70 to-neutral-950/90 border border-white/10 backdrop-blur-2xl flex flex-col justify-between shadow-xl">
          <div className="flex items-center justify-between">
            <div className="w-7 h-7 rounded-xl bg-purple-500/20 border border-purple-500/30 text-purple-400 flex items-center justify-center shadow-sm">
              <Smartphone className="w-3.5 h-3.5" />
            </div>
            <span className="text-[9px] font-mono text-purple-300 bg-purple-500/15 px-2 py-0.5 rounded-full border border-purple-500/30 font-semibold">
              @Composable
            </span>
          </div>
          <div className="mt-3">
            <span className="text-[9px] font-mono uppercase text-neutral-400 tracking-wider">Specialist</span>
            <div className="text-xs font-bold text-white tracking-tight">Native Android & KMP</div>
            <div className="text-[11px] font-mono text-neutral-300 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-purple-400" />
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
        className="w-full p-4.5 rounded-3xl bg-gradient-to-b from-neutral-900/90 via-neutral-950 to-neutral-950 border border-white/15 backdrop-blur-2xl shadow-2xl flex flex-col items-center text-center space-y-3"
      >
        {/* Photo Container with Vibrant Glow Ring */}
        <div className="relative w-32 h-32 rounded-2xl p-0.5 bg-gradient-to-tr from-purple-500/50 via-fuchsia-500/40 to-indigo-500/50 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
          <div className="relative w-full h-full rounded-[14px] overflow-hidden bg-neutral-950">
            {!imageError ? (
              <>
                <Image
                  src="/vedant-hero.webp"
                  alt="Vedant Sunil Raut"
                  fill
                  sizes="128px"
                  priority
                  className="object-cover object-top rounded-[14px]"
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
        </div>

        {/* Greeting Chip */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 shadow-sm">
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
        <div className="text-xl font-heading font-bold tracking-tight">
          <ShinyText
            text="I am Vedant Sunil Raut"
            disabled={false}
            speed={3}
            className="font-bold text-white text-lg sm:text-xl"
            color="#ffffff"
            shineColor="#c084fc"
            spread={120}
          />
        </div>

        {/* Core Tagline */}
        <h1 className="font-heading text-xl sm:text-2xl font-extrabold leading-tight text-balance text-white tracking-tight px-2">
          Architecting high-performance software & shaping{" "}
          <span className="italic-gradient-text font-extrabold">
            Mobile Realities
          </span>
        </h1>

        <p className="text-xs font-sans text-neutral-300 max-w-xs leading-relaxed px-1 font-normal">
          Specializing in Kotlin, Jetpack Compose, Kotlin Multiplatform (KMP) & Full-Stack Systems at Logituit.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col gap-2 w-full pt-1">
          <div className="grid grid-cols-2 gap-2.5 w-full">
            <button
              onClick={() => setActiveTab && setActiveTab("contact")}
              className="py-3 px-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 hover:brightness-110 text-white font-semibold text-xs flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(168,85,247,0.45)] active:scale-95 transition-all cursor-pointer min-h-[44px]"
            >
              <span>Connect / Hire</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {onOpenAssistant && (
              <button
                onClick={onOpenAssistant}
                className="py-3 px-3.5 rounded-xl bg-purple-950/50 border border-purple-500/40 hover:bg-purple-900/40 hover:border-purple-400 text-purple-200 font-semibold text-xs flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(168,85,247,0.25)] active:scale-95 transition-all cursor-pointer min-h-[44px]"
              >
                <Sparkles className="w-4 h-4 text-purple-300 animate-pulse" />
                <span>Ask AI Assistant</span>
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2.5 w-full">
            <button
              onClick={handleCopyEmail}
              className="py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-neutral-200 text-xs font-mono font-medium flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer min-h-[40px] shadow-sm"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-purple-400" />}
              <span>{copied ? "Copied!" : "Copy Email"}</span>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleDownloadResume}
              className="py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-neutral-200 text-xs font-mono font-medium flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer min-h-[40px] shadow-sm"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Resume PDF</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* 3. Android Engineering Pillars */}
      <div className="w-full space-y-2.5">
        <div className="flex items-center justify-between px-1">
          <span className="text-[11px] font-mono uppercase text-neutral-400 tracking-wider font-semibold">Engineering Focus</span>
          <button
            onClick={() => setActiveTab && setActiveTab("skills")}
            className="text-[11px] font-mono text-purple-400 flex items-center gap-0.5 hover:underline cursor-pointer font-semibold"
          >
            <span>View All</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>

        {/* Card 1: Jetpack Compose */}
        <div className="p-3.5 rounded-2xl bg-neutral-900/70 border border-white/10 backdrop-blur-2xl flex items-start gap-3 shadow-lg hover:border-purple-500/30 transition-all">
          <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-400 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
            <Smartphone className="w-4.5 h-4.5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-white tracking-tight flex items-center justify-between">
              <span>Jetpack Compose UI</span>
              <span className="text-[9px] font-mono text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded-full border border-purple-500/30 font-semibold">60 FPS</span>
            </div>
            <p className="text-[11px] text-neutral-300 mt-1 leading-normal font-sans">
              Declarative state-driven UI, custom canvas drawing, baseline profiles & smooth physics animations.
            </p>
          </div>
        </div>

        {/* Card 2: Kotlin Multiplatform */}
        <div className="p-3.5 rounded-2xl bg-neutral-900/70 border border-white/10 backdrop-blur-2xl flex items-start gap-3 shadow-lg hover:border-cyan-500/30 transition-all">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
            <Layers className="w-4.5 h-4.5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-white tracking-tight flex items-center justify-between">
              <span>Kotlin Multiplatform (KMP)</span>
              <span className="text-[9px] font-mono text-cyan-300 bg-cyan-500/20 px-2 py-0.5 rounded-full border border-cyan-500/30 font-semibold">Cross-Platform</span>
            </div>
            <p className="text-[11px] text-neutral-300 mt-1 leading-normal font-sans">
              Shared architecture, domain logic, offline-first Room database & Ktor network stack across platforms.
            </p>
          </div>
        </div>

        {/* Card 3: Architecture & Performance */}
        <div className="p-3.5 rounded-2xl bg-neutral-900/70 border border-white/10 backdrop-blur-2xl flex items-start gap-3 shadow-lg hover:border-emerald-500/30 transition-all">
          <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
            <Terminal className="w-4.5 h-4.5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs font-bold text-white tracking-tight flex items-center justify-between">
              <span>Clean Architecture & Coroutines</span>
              <span className="text-[9px] font-mono text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30 font-semibold">MVI / MVVM</span>
            </div>
            <p className="text-[11px] text-neutral-300 mt-1 leading-normal font-sans">
              Dependency Injection (Hilt/Koin), reactive Flow streams, memory profiling, and modular codebases.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Quick Links Footer Row */}
      <div className="w-full grid grid-cols-2 gap-2.5 pt-1">
        <a
          href={siteConfig.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-2xl bg-neutral-900/70 border border-white/10 text-neutral-300 hover:text-white flex items-center justify-center gap-2 text-xs font-mono active:scale-95 transition-all shadow-sm hover:border-purple-500/30"
        >
          <Github className="w-4 h-4" />
          <span className="font-semibold">GitHub Profile</span>
        </a>

        <a
          href={siteConfig.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-2xl bg-neutral-900/70 border border-white/10 text-neutral-300 hover:text-white flex items-center justify-center gap-2 text-xs font-mono active:scale-95 transition-all shadow-sm hover:border-purple-500/30"
        >
          <Linkedin className="w-4 h-4 text-blue-400" />
          <span className="font-semibold">LinkedIn Profile</span>
        </a>
      </div>

    </div>
  );
}
