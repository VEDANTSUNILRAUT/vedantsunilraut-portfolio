"use client";

import { motion } from "framer-motion";
import { Briefcase, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/constants/site";

export default function HirePage() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 pt-36 sm:pt-44 pb-28 flex-1 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-14 shadow-2xl flex flex-col items-center text-center"
      >
        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400 mb-6">
          <Briefcase className="w-7 h-7" />
        </div>

        <span className="text-xs uppercase tracking-widest text-purple-400 font-mono font-semibold mb-3 block">
          SOFTWARE ENGINEER AT LOGITUIT
        </span>

        <h1 className="font-eb-garamond text-4xl sm:text-6xl text-white font-normal mb-4 tracking-tight">
          Get in Touch with <span className="italic-gradient-text font-semibold">Vedant Raut</span>
        </h1>

        <p className="font-source-code-pro text-sm sm:text-base text-neutral-300 max-w-lg leading-relaxed mb-8">
          Currently working full-time as a Software Engineer at Logituit. Feel free to reach out for professional networking, technical discussions, or collaboration.
        </p>

        <a
          href={siteConfig.brand.connectMailto}
          className="flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-black font-sans font-medium text-sm hover:bg-neutral-200 transition-all shadow-xl active:scale-95 group"
        >
          <span>Get in Touch</span>
          <ArrowUpRight className="w-4 h-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </motion.div>
    </section>
  );
}
