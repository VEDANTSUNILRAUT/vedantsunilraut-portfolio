"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/constants/site";
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export function AndroidContactScreen() {
  return (
    <div className="w-full max-w-md mx-auto px-5 pt-12 pb-16 flex flex-col items-center justify-center space-y-6">
      
      {/* Android Contact Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full p-6 rounded-3xl bg-neutral-900/90 border border-white/10 backdrop-blur-xl shadow-2xl flex flex-col items-center text-center space-y-5"
      >
        <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
          <Mail className="w-7 h-7" />
        </div>

        <div>
          <h3 className="text-xl font-bold text-white tracking-tight">Let&apos;s Connect</h3>
          <p className="text-xs font-mono text-neutral-400 mt-1">
            Software Engineer at Logituit · Open for Tech Discussions & Networking
          </p>
        </div>

        {/* Action Button */}
        <a
          href={siteConfig.brand.connectMailto}
          className="w-full py-3.5 px-6 rounded-full bg-white text-black font-semibold text-sm flex items-center justify-center gap-2 active:scale-95 transition-all shadow-xl"
        >
          <span>Send Direct Email</span>
          <ArrowUpRight className="w-4 h-4 text-black" />
        </a>
      </motion.div>

      {/* Quick Action Grid */}
      <div className="w-full grid grid-cols-3 gap-3">
        <a
          href={siteConfig.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-neutral-300 hover:text-white hover:border-purple-500/30 transition-all active:scale-95"
        >
          <Github className="w-6 h-6 mb-1.5" />
          <span className="text-[10px] font-mono">GitHub</span>
        </a>

        <a
          href={siteConfig.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-neutral-300 hover:text-white hover:border-purple-500/30 transition-all active:scale-95"
        >
          <Linkedin className="w-6 h-6 mb-1.5 text-blue-400" />
          <span className="text-[10px] font-mono">LinkedIn</span>
        </a>

        <a
          href={siteConfig.socials.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-neutral-300 hover:text-white hover:border-purple-500/30 transition-all active:scale-95"
        >
          <Twitter className="w-6 h-6 mb-1.5 text-sky-400" />
          <span className="text-[10px] font-mono">Twitter / X</span>
        </a>
      </div>

    </div>
  );
}
