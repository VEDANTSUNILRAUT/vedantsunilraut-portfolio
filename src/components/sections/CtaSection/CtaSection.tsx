"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import { siteConfig } from "@/constants/site";
import { useClipboard } from "@/hooks/useClipboard";
import { CtaSectionProps } from "./CtaSection.types";

export function CtaSection({ className = "" }: CtaSectionProps) {
  const { copied, copy } = useClipboard();

  return (
    <section id="contact-banner" className={`w-full max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-12 relative z-10 snap-start ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-neutral-950/80 border border-white/15 backdrop-blur-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between text-left shadow-2xl group gap-6 sm:gap-8"
      >
        {/* Top Rim Glow Gradient */}
        <div className="absolute top-0 inset-x-0 mx-auto w-3/4 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.8)]" />

        {/* Text Content */}
        <div className="space-y-2 max-w-2xl text-center lg:text-left">
          <span className="text-[11px] sm:text-xs uppercase tracking-widest text-purple-400 font-mono font-medium block">
            NEED A SOFTWARE OR ANDROID DEVELOPER?
          </span>
          <h2 className="font-eb-garamond text-2xl sm:text-4xl lg:text-5xl text-white font-normal leading-tight">
            Have an idea? Let&apos;s shape the <span className="italic-gradient-text font-semibold">future</span> together.
          </h2>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3.5 shrink-0">
          <a
            href={siteConfig.brand.connectMailto}
            className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black font-sans font-medium text-xs sm:text-sm hover:bg-neutral-200 transition-all shadow-xl active:scale-95 group/btn whitespace-nowrap"
          >
            <span>Start a Conversation</span>
            <ArrowUpRight className="w-4 h-4 text-black group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>

          <button
            onClick={() => copy(siteConfig.brand.email)}
            className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/5 border border-white/15 text-xs sm:text-sm font-mono text-neutral-200 hover:border-purple-400/40 hover:bg-purple-500/10 transition-all active:scale-95 whitespace-nowrap"
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
    </section>
  );
}
