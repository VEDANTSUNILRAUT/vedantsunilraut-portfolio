"use client";

import { siteConfig } from "@/constants/site";
import { Github, Linkedin, Instagram } from "lucide-react";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={siteConfig.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-purple-500/40 transition-colors"
      >
        <Github className="w-4 h-4" />
      </a>
      <a
        href={siteConfig.socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-purple-500/40 transition-colors"
      >
        <Linkedin className="w-4 h-4 text-blue-400" />
      </a>
      <a
        href={siteConfig.socials.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-purple-500/40 transition-colors"
      >
        <Instagram className="w-4 h-4 text-pink-400" />
      </a>
    </div>
  );
}
