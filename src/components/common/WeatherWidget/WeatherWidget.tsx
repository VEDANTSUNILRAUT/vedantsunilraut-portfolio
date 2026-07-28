"use client";

import { CloudRain } from "lucide-react";
import { siteConfig } from "@/constants/site";
import { useLiveDateTime } from "@/hooks/useLiveDateTime";
import { WeatherWidgetProps } from "./WeatherWidget.types";

export function WeatherWidget({ className = "" }: WeatherWidgetProps) {
  const { timeStr, dateStr } = useLiveDateTime();

  return (
    <div className={`hidden sm:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-nav text-[11px] font-mono text-neutral-300 border border-white/10 bg-black/40 backdrop-blur-xl ${className}`}>
      {/* 1. Temp */}
      <div className="flex items-center gap-1.5 text-sky-400">
        <CloudRain className="h-3.5 w-3.5" />
        <span className="font-semibold text-white">{siteConfig.weatherWidget.temp}</span>
      </div>
      
      <span className="text-neutral-500">•</span>
      
      {/* 2. Date */}
      <span className="text-neutral-300 font-medium">
        {dateStr || "Jul 22"}
      </span>
      
      <span className="text-neutral-500">•</span>
      
      {/* 3. Time */}
      <span className="text-white font-medium">
        {timeStr || "10:28 PM"}
      </span>
    </div>
  );
}
