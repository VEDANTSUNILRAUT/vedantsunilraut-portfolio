"use client";

import { useState, useEffect } from "react";
import { Wifi, Battery, Signal } from "lucide-react";

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
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-8 px-5 flex items-center justify-between text-xs font-sans text-neutral-300 bg-black/60 backdrop-blur-md border-b border-white/5 select-none z-50">
      {/* Left: Current Time */}
      <span className="font-semibold text-[11px] tracking-tight">{timeStr || "10:15"}</span>

      {/* Right: Android Status Icons */}
      <div className="flex items-center gap-2.5 text-neutral-300">
        <span className="text-[10px] font-mono font-bold text-emerald-400">5G</span>
        <Signal className="w-3.5 h-3.5" />
        <Wifi className="w-3.5 h-3.5" />
        <div className="flex items-center gap-1">
          <span className="text-[9px] font-mono">98%</span>
          <Battery className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
        </div>
      </div>
    </div>
  );
}
