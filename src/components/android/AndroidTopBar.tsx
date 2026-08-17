"use client";

import { siteConfig } from "@/constants/site";
import { User, Sparkles } from "lucide-react";

interface AndroidTopBarProps {
  activeScreen: string;
}

export function AndroidTopBar({ activeScreen }: AndroidTopBarProps) {
  return (
    <div className="w-full px-4 py-3 bg-black/60 border-b border-white/10 backdrop-blur-xl flex items-center justify-between z-40">
      {/* App Branding & Avatar */}
      <div className="flex items-center gap-3">
        <div className="relative w-9 h-9 rounded-full bg-purple-950/60 border border-purple-500/30 flex items-center justify-center overflow-hidden shadow-lg">
          <User className="w-5 h-5 text-purple-300" />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border border-black" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-bold text-white tracking-tight leading-none">
            {siteConfig.brand.fullName}
          </span>
          <span className="text-[10px] font-mono text-purple-400 mt-1">
            Android & Software Engineer
          </span>
        </div>
      </div>

      {/* Screen Title Chip */}
      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300">
        <Sparkles className="w-3 h-3 text-purple-400" />
        <span className="capitalize">{activeScreen}</span>
      </div>
    </div>
  );
}
