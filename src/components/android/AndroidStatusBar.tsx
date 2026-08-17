"use client";

import { useState, useEffect } from "react";
import { Wifi, Signal, Sparkles } from "lucide-react";

export function AndroidStatusBar() {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formatted = `${hours % 12 || 12}:${minutes < 10 ? "0" : ""}${minutes}`;
      setTimeStr(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full h-8 sm:h-9 px-4 sm:px-6 flex items-center justify-between text-neutral-200 bg-black/40 backdrop-blur-xl border-b border-white/5 select-none z-50 font-sans tracking-tight text-xs">
      {/* Left: Time & Notification Badges */}
      <div className="flex items-center gap-2.5">
        <span className="font-semibold text-[11px] sm:text-xs text-white tracking-wide">
          {timeStr || "10:24"}
        </span>

        {/* Small subtle Android app notifications */}
        <div className="hidden min-[360px]:flex items-center gap-1.5 opacity-70">
          <Sparkles className="w-3 h-3 text-purple-400" />
          <span className="w-1 h-1 rounded-full bg-emerald-400" />
        </div>
      </div>

      {/* Center: Punch-Hole Front Camera Lens */}
      <div className="flex items-center justify-center">
        <div className="w-3.5 h-3.5 rounded-full bg-black border border-neutral-800 shadow-[inset_0_0_2px_rgba(255,255,255,0.2)] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 border border-blue-500/40" />
        </div>
      </div>

      {/* Right: Android Status Icons (5G, Signal, Wi-Fi, Battery) */}
      <div className="flex items-center gap-2 sm:gap-2.5">
        {/* 5G Badge */}
        <span className="text-[9px] font-mono font-extrabold px-1 py-0.5 rounded bg-white/10 text-emerald-400 leading-none">
          5G
        </span>

        {/* Cellular Signal Strength */}
        <Signal className="w-3.5 h-3.5 text-neutral-200 stroke-[2.2]" />

        {/* Wi-Fi Wave */}
        <Wifi className="w-3.5 h-3.5 text-neutral-200 stroke-[2.2]" />

        {/* Realistic Android Battery */}
        <div className="flex items-center gap-1">
          <span className="text-[10px] font-mono font-medium text-neutral-300">92%</span>
          <div className="relative w-5 h-2.5 rounded-[3px] border border-neutral-300/80 p-[1px] flex items-center">
            {/* Battery Fill Bar */}
            <div className="h-full w-[92%] rounded-[1.5px] bg-emerald-400" />
            {/* Battery Positive Terminal Tip */}
            <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-1 rounded-r-[1px] bg-neutral-300/80" />
          </div>
        </div>
      </div>
    </header>
  );
}
