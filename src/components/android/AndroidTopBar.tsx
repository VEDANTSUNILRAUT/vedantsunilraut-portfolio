"use client";

import { siteConfig } from "@/constants/site";
import { User, Share2, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useAndroidToast } from "./AndroidToast";
import { useClipboard } from "@/hooks/useClipboard";

interface AndroidTopBarProps {
  activeScreen: string;
}

export function AndroidTopBar({ activeScreen }: AndroidTopBarProps) {
  const { theme, setTheme } = useTheme();
  const { showToast } = useAndroidToast();
  const { copy } = useClipboard();

  const handleShare = () => {
    copy("https://vedantsunilraut.vercel.app");
    showToast("Portfolio link copied to clipboard!", "sparkle");
  };

  const handleToggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    showToast(`Switched to ${nextTheme} theme`, "info");
  };

  const getScreenBadge = () => {
    switch (activeScreen) {
      case "home":
        return { label: "Overview", color: "text-purple-400 border-purple-500/30 bg-purple-500/10" };
      case "work":
        return { label: "Experience", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10" };
      case "projects":
        return { label: "Projects", color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10" };
      case "skills":
        return { label: "Tech Stack", color: "text-amber-400 border-amber-500/30 bg-amber-500/10" };
      case "contact":
        return { label: "Connect", color: "text-fuchsia-400 border-fuchsia-500/30 bg-fuchsia-500/10" };
      default:
        return { label: "Android", color: "text-purple-400 border-purple-500/30 bg-purple-500/10" };
    }
  };

  const badge = getScreenBadge();

  return (
    <header className="w-full px-3.5 py-2.5 bg-neutral-950/90 border-b border-white/10 backdrop-blur-2xl flex items-center justify-between z-30 select-none">
      {/* App Branding & Avatar */}
      <div className="flex items-center gap-2.5 min-w-0">
        <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-purple-600/30 to-neutral-900 border border-purple-500/40 flex items-center justify-center overflow-hidden shrink-0 shadow-md">
          <User className="w-4 h-4 text-purple-300" />
          <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-neutral-950 animate-pulse" />
        </div>
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold text-white tracking-tight truncate">
              {siteConfig.brand.fullName}
            </span>
            <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 font-mono font-semibold border border-purple-500/30">
              v2.0
            </span>
          </div>
          <span className="text-[10px] font-mono text-neutral-400 truncate">
            Software Engineer @ Logituit
          </span>
        </div>
      </div>

      {/* Action Controls */}
      <div className="flex items-center gap-1.5 shrink-0">
        {/* Active Tab Chip */}
        <div className={`px-2.5 py-0.5 rounded-full border text-[10px] font-mono font-semibold ${badge.color}`}>
          {badge.label}
        </div>

        {/* Share Button */}
        <button
          onClick={handleShare}
          aria-label="Share profile"
          className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 active:scale-90 flex items-center justify-center text-neutral-300 hover:text-white transition-all cursor-pointer shadow-sm"
        >
          <Share2 className="w-3.5 h-3.5" />
        </button>

        {/* Theme Toggle */}
        <button
          onClick={handleToggleTheme}
          aria-label="Toggle theme"
          className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 active:scale-90 flex items-center justify-center text-neutral-300 hover:text-white transition-all cursor-pointer shadow-sm"
        >
          {theme === "dark" ? (
            <Sun className="w-3.5 h-3.5 text-amber-300" />
          ) : (
            <Moon className="w-3.5 h-3.5 text-purple-400" />
          )}
        </button>
      </div>
    </header>
  );
}
