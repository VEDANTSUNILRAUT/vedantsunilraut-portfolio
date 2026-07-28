"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function BlogPage() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 pt-36 sm:pt-44 pb-28 flex-1 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-14 shadow-2xl flex flex-col items-center text-center"
      >
        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 mb-6">
          <BookOpen className="w-7 h-7" />
        </div>

        <span className="text-xs uppercase tracking-widest text-purple-400 font-mono font-semibold mb-3 block">
          ARTICLES & INSIGHTS
        </span>

        <h1 className="font-eb-garamond text-4xl sm:text-6xl text-white font-normal mb-4 tracking-tight">
          Blog & <span className="italic-gradient-text font-semibold">Writing</span>
        </h1>

        <p className="font-source-code-pro text-sm sm:text-base text-neutral-300 max-w-lg leading-relaxed mb-8">
          Thoughts, technical deep dives, and tutorials on Native Android engineering, Jetpack Compose, Next.js, and System Architecture.
        </p>

        <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/15 text-xs font-mono text-neutral-400">
          Articles Coming Soon — Stay Tuned!
        </div>
      </motion.div>
    </section>
  );
}
