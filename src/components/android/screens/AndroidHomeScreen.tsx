"use client";

import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/HeroSection";
import { Smartphone, Code2, Layers, ArrowRight } from "lucide-react";
import { AndroidTabType } from "../AndroidBottomNav";

interface AndroidHomeScreenProps {
  setActiveTab: (tab: AndroidTabType) => void;
}

export function AndroidHomeScreen({ setActiveTab }: AndroidHomeScreenProps) {
  return (
    <div className="w-full flex flex-col items-center pb-8">
      {/* SAME Hero Section */}
      <HeroSection className="pt-16 pb-12 min-h-0" />

      {/* Android Native Quick Feature Chips Feed */}
      <div className="w-full px-5 max-w-md space-y-4 z-10">
        
        {/* Android Native Card 1: Core Stack */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onClick={() => setActiveTab("skills")}
          className="p-5 rounded-2xl bg-neutral-900/80 border border-white/10 backdrop-blur-xl flex items-center justify-between group active:scale-98 transition-all cursor-pointer shadow-xl"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white tracking-tight">Android & Mobile Native</h4>
              <p className="text-xs font-mono text-neutral-400 mt-0.5">Kotlin • Jetpack Compose • KMP</p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
        </motion.div>

        {/* Android Native Card 2: Full-Stack Web */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onClick={() => setActiveTab("work")}
          className="p-5 rounded-2xl bg-neutral-900/80 border border-white/10 backdrop-blur-xl flex items-center justify-between group active:scale-98 transition-all cursor-pointer shadow-xl"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white tracking-tight">Featured Work & Apps</h4>
              <p className="text-xs font-mono text-neutral-400 mt-0.5">Projects & Experiments</p>
            </div>
          </div>
          <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:translate-x-1 transition-transform" />
        </motion.div>

      </div>
    </div>
  );
}
