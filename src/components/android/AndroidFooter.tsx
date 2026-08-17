"use client";

import { siteConfig } from "@/constants/site";
import { Logo } from "@/components/common/Logo";
import { Github, Linkedin, Instagram } from "lucide-react";

export function AndroidFooter() {
  return (
    <footer className="w-full pt-8 pb-4 border-t border-white/10 flex flex-col items-center text-center space-y-4">
      {/* Brand Logo & Name */}
      <div className="flex flex-col items-center gap-2">
        <Logo size={42} />
        <h3 className="text-sm font-bold tracking-tight text-white">{siteConfig.brand.fullName}</h3>
        <p className="text-xs font-mono text-neutral-400 max-w-xs leading-relaxed">
          Software Engineer at Logituit. Building native mobile apps & modern digital systems.
        </p>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-2.5 pt-1">
        <a
          href={siteConfig.socials.github}
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-purple-400/40 transition-colors active:scale-95"
          aria-label="GitHub"
        >
          <Github className="w-4 h-4 text-purple-400" />
        </a>
        <a
          href={siteConfig.socials.linkedin}
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-purple-400/40 transition-colors active:scale-95"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-4 h-4 text-blue-400" />
        </a>
        <a
          href={siteConfig.socials.instagram}
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white hover:border-purple-400/40 transition-colors active:scale-95"
          aria-label="Instagram"
        >
          <Instagram className="w-4 h-4 text-pink-400" />
        </a>
      </div>

      {/* Copyright & Tech Stamp */}
      <div className="text-[11px] font-mono text-neutral-500 pt-2 space-y-1">
        <p>© {new Date().getFullYear()} Vedant Raut. All rights reserved.</p>
        <p className="text-[10px] text-neutral-600">Built with Next.js, Kotlin spirit & Tailwind</p>
      </div>
    </footer>
  );
}
