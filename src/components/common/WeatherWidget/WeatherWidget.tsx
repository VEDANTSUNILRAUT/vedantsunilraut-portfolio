"use client";

import { Clock, Calendar } from "lucide-react";
import { useLiveDateTime } from "@/hooks/useLiveDateTime";
import { WeatherWidgetProps } from "./WeatherWidget.types";

export function WeatherWidget({ className = "" }: WeatherWidgetProps) {
  const { timeStr, dateStr } = useLiveDateTime();

  return (
    <div
      className={`hidden sm:flex items-center justify-center px-4 py-1.5 rounded-full glass-nav border border-white/10 bg-black/40 backdrop-blur-xl h-8 text-[11px] font-mono select-none cursor-default shadow-sm ${className}`}
    >
      <div className="flex items-center gap-2 text-neutral-300 font-medium whitespace-nowrap justify-center">
        <span className="flex items-center gap-1.5 text-neutral-300">
          <Calendar className="w-3.5 h-3.5 text-purple-400 shrink-0" />
          <span>{dateStr || "Aug 10"}</span>
        </span>
        <span className="text-neutral-600">•</span>
        <span className="flex items-center gap-1.5 text-white font-semibold">
          <Clock className="w-3.5 h-3.5 text-purple-400 shrink-0" />
          <span>{timeStr || "10:27 PM"}</span>
        </span>
      </div>
    </div>
  );
}
