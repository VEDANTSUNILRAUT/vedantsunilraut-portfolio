"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Twitter, Instagram, Copy, Check } from "lucide-react";
import { siteConfig } from "@/constants/site";
import { Logo } from "@/components/common/Logo";
import { useClipboard } from "@/hooks/useClipboard";
import { FooterProps } from "./Footer.types";

export function Footer({ className = "" }: FooterProps) {
  const { copied, copy } = useClipboard();

  return (
    <footer id="contact" className={`w-full relative bg-black text-white overflow-hidden pt-36 sm:pt-44 pb-12 z-10 scroll-mt-36 sm:scroll-mt-44 snap-start ${className}`}>
      {/* Top Faded Soft Ambient Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Large Grand Call to Action Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 p-8 sm:p-14 rounded-3xl bg-neutral-900/60 border border-white/15 backdrop-blur-2xl relative overflow-hidden flex flex-col items-center text-center shadow-2xl group"
        >
          {/* Subtle Top Border Rim Glow */}
          <div className="absolute top-0 inset-x-0 mx-auto w-3/4 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.8)]" />

          <span className="text-xs uppercase tracking-widest text-purple-400 font-mono font-medium mb-4 block">
            NEED A SOFTWARE OR ANDROID DEVELOPER?
          </span>

          <h2 className="font-eb-garamond text-4xl sm:text-6xl text-white font-normal max-w-2xl leading-tight mb-8">
            Have an idea? Let&apos;s shape the <span className="italic-gradient-text font-semibold">future</span> together.
          </h2>

          {/* Dual Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href={siteConfig.brand.connectMailto}
              className="flex items-center gap-3 px-7 py-3.5 rounded-full bg-white text-black font-sans font-medium text-sm hover:bg-neutral-200 transition-all shadow-xl active:scale-95 group/btn"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4 text-black group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={() => copy(siteConfig.brand.email)}
              className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/5 border border-white/15 text-sm font-mono text-neutral-200 hover:border-purple-400/40 hover:bg-purple-500/10 transition-all active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300 font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-purple-400" />
                  <span>{siteConfig.brand.email}</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* 4-Column Footer Navigation & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Column 1: Brand Info (5 Cols) */}
          <div className="md:col-span-5 space-y-4">
            <Logo />
            <p className="font-source-code-pro text-xs text-neutral-400 max-w-sm leading-relaxed pt-2">
              Vedant Raut — Software Engineer & Android Developer. Building high-performance native apps, full-stack systems, and modern digital realities.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-neutral-300">Available for new opportunities</span>
            </div>
          </div>

          {/* Column 2: Quick Links (3 Cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-mono text-neutral-400">
              <li>
                <a href="/" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="/work" className="hover:text-white transition-colors">Featured Work</a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="/hire" className="hover:text-white transition-colors">Hire Me</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Links (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold mb-4">
              Connect & Socials
            </h4>
            <div className="flex flex-wrap gap-2">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white hover:border-purple-400/40 transition-colors"
              >
                <Github className="w-4 h-4 text-purple-400" />
                <span>GitHub</span>
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white hover:border-purple-400/40 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white hover:border-purple-400/40 transition-colors"
              >
                <Twitter className="w-4 h-4 text-sky-400" />
                <span>Twitter / X</span>
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white hover:border-purple-400/40 transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>© {new Date().getFullYear()} Vedant Raut. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Engineered with <span className="text-purple-400">Next.js & Tailwind</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
