"use client";

import { useState } from "react";
import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/constants/site";
import { AndroidTabType } from "../AndroidBottomNav";
import { AndroidFooter } from "../AndroidFooter";
import ShinyText from "@/components/ShinyText";
import { SparkleBurstButton } from "@/components/ui/SparkleBurstButton";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";
import { useClipboard } from "@/hooks/useClipboard";
import { 
  Layers, 
  User, 
  Smartphone,
  Github,
  Linkedin,
  Terminal,
  ExternalLink,
  Download,
  ArrowUpRight,
  Copy,
  Check
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
}

export function AndroidHomeScreen({ setActiveTab: _setActiveTab }: AndroidHomeScreenProps) {
  const [imageError, setImageError] = useState(false);
  const { copied, copy } = useClipboard();
  const greeting = useSyncExternalStore(
    emptySubscribe,
    getGreetingSnapshot,
    () => "Good Day"
  );

  return (
    <div className="w-full flex flex-col items-center pt-2 pb-6 space-y-6">
      
      {/* 1. Main Profile & Hero Showcase (Direct on Background) */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full flex flex-col items-center text-center pt-2 pb-2"
      >
        {/* Live Status Pill */}
        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] sm:text-xs font-mono text-neutral-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <span>Software Engineer @ Logituit</span>
        </div>

        {/* Vedant Photo with Bottom and Right Black Gradient Fade-out */}
        <div className="relative mb-4 w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden">
          {!imageError ? (
            <>
              <Image
                src="/vedant-hero.png"
                alt="Vedant Sunil Raut"
                fill
                sizes="(max-width: 640px) 176px, 208px"
                priority
                className="object-cover object-top rounded-3xl"
                onError={() => setImageError(true)}
              />
              {/* Bottom Side Black Gradient Fade */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-10" />
              {/* Right Edge Black Gradient Fade */}
              <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black via-black/30 to-transparent pointer-events-none z-10" />
              {/* Bottom-Right Corner Blend */}
              <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-black via-black/50 to-transparent pointer-events-none z-10" />
            </>
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-purple-950/40 text-purple-300">
              <User className="w-12 h-12 mb-1" />
              <span className="text-[10px] font-mono">VR</span>
            </div>
          )}
        </div>

        {/* Greeting with waving hand */}
        <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono text-neutral-400">
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

        {/* Dynamic Name Title */}
        <div className="mt-1 text-2xl sm:text-3xl font-source-code-pro font-normal tracking-wide">
          <ShinyText
            text="I am Vedant Sunil Raut"
            disabled={false}
            speed={3}
            className="font-semibold text-white cursor-default"
            color="#ffffff"
            shineColor="#c084fc"
            spread={120}
          />
        </div>

        {/* Main Headline */}
        <h1 className="mt-2 font-eb-garamond text-2xl sm:text-4xl leading-[1.3] text-balance text-white font-normal">
          Architecting high-performance software & shaping{" "}
          <span className="italic-gradient-text block sm:inline font-semibold">
            Mobile Realities
          </span>
        </h1>

        {/* Subtitle / Role */}
        <p className="mt-2 text-xs sm:text-sm font-mono text-neutral-300 max-w-md leading-relaxed">
          Native Android Engineer specializing in Kotlin, Jetpack Compose, Kotlin Multiplatform (KMP) & Full-Stack Systems.
        </p>

        {/* Primary Call-to-Actions */}
        <div className="mt-5 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <SparkleBurstButton
            text={siteConfig.hero.primaryCta.text}
            href={siteConfig.hero.primaryCta.href}
          />
          <CopyEmailButton />
        </div>

        {/* Quick Social Links & CV */}
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 pt-3 w-full">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/40 text-neutral-300 hover:text-white transition-all active:scale-95 flex items-center gap-1.5 text-xs font-mono"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
          </a>

          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/40 text-neutral-300 hover:text-white transition-all active:scale-95 flex items-center gap-1.5 text-xs font-mono"
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-400" />
            <span>LinkedIn</span>
            <ExternalLink className="w-2.5 h-2.5 opacity-60" />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/30 hover:bg-purple-500/20 text-purple-300 hover:text-white transition-all active:scale-95 flex items-center gap-1.5 text-xs font-mono"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Resume / CV</span>
          </a>
        </div>
      </motion.div>

      {/* 2. Core Tech Pillars Chip Row */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-wrap items-center justify-around gap-2 text-center text-xs font-mono text-neutral-300"
      >
        <div className="flex items-center gap-1.5">
          <Smartphone className="w-3.5 h-3.5 text-purple-400" />
          <span>Native Android</span>
        </div>
        <span className="text-white/20">•</span>
        <div className="flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5 text-emerald-400" />
          <span>Kotlin & Compose</span>
        </div>
        <span className="text-white/20">•</span>
        <div className="flex items-center gap-1.5">
          <Layers className="w-3.5 h-3.5 text-blue-400" />
          <span>KMP Architect</span>
        </div>
      </motion.div>

      {/* 3. CTA Banner Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full p-6 sm:p-8 rounded-3xl bg-neutral-950/70 border border-white/15 backdrop-blur-2xl relative overflow-hidden flex flex-col items-center text-center shadow-2xl space-y-4"
      >
        {/* Top Rim Glow Gradient */}
        <div className="absolute top-0 inset-x-0 mx-auto w-3/4 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.8)]" />

        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-purple-400 font-mono font-medium block">
          NEED A SOFTWARE OR ANDROID DEVELOPER?
        </span>

        <h2 className="font-eb-garamond text-xl sm:text-3xl text-white font-normal leading-tight">
          Have an idea? Let&apos;s shape the <span className="italic-gradient-text font-semibold">future</span> together.
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto pt-2">
          <a
            href={siteConfig.brand.connectMailto}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-sans font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-all shadow-xl active:scale-95 whitespace-nowrap"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4 text-black" />
          </a>

          <button
            onClick={() => copy(siteConfig.brand.email)}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white/5 border border-white/15 text-xs sm:text-sm font-mono text-neutral-200 hover:border-purple-400/40 hover:bg-purple-500/10 transition-all active:scale-95 whitespace-nowrap"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-300 font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{siteConfig.brand.email}</span>
              </>
            )}
          </button>
        </div>
      </motion.div>

      {/* 4. Reusable Mobile Footer */}
      <AndroidFooter />

    </div>
  );
}
