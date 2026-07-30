"use client";

import { Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { siteConfig } from "@/constants/site";
import { Logo } from "@/components/common/Logo";
import { FooterProps } from "./Footer.types";

export function Footer({ className = "" }: FooterProps) {
  return (
    <footer id="contact" className={`w-full relative bg-black text-white overflow-hidden pt-12 sm:pt-16 pb-8 z-10 scroll-mt-12 sm:scroll-mt-16 snap-start ${className}`}>
      {/* Top Faded Soft Ambient Line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* 4-Column Footer Navigation & Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/10">
          
          {/* Column 1: Brand Info (5 Cols) */}
          <div className="md:col-span-5 space-y-2.5">
            <Logo />
            <p className="font-source-code-pro text-xs text-neutral-400 max-w-sm leading-relaxed">
              Vedant Raut — Software Engineer & Android Developer. Building high-performance native apps, full-stack systems, and modern digital realities.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono text-neutral-300">Available for new opportunities</span>
            </div>
          </div>

          {/* Column 2: Quick Links (3 Cols) */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold mb-2.5">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs font-mono text-neutral-400">
              <li>
                <a href="/" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">About</a>
              </li>
              <li>
                <a href="/work" className="hover:text-white transition-colors">Work Experience</a>
              </li>
              <li>
                <a href="/projects" className="hover:text-white transition-colors">Projects</a>
              </li>
              <li>
                <a href="/hire" className="hover:text-white transition-colors">Hire Me</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Links (4 Cols) */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold mb-2.5">
              Connect & Socials
            </h4>
            <div className="flex flex-wrap gap-2">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white hover:border-purple-400/40 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-purple-400" />
                <span>GitHub</span>
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white hover:border-purple-400/40 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={siteConfig.socials.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white hover:border-purple-400/40 transition-colors"
              >
                <Twitter className="w-3.5 h-3.5 text-sky-400" />
                <span>Twitter / X</span>
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 hover:text-white hover:border-purple-400/40 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Bar */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-neutral-500">
          <p>© {new Date().getFullYear()} Vedant Raut. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Engineered with <span className="text-purple-400">Next.js & Tailwind</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
