"use client";

import { Users } from "lucide-react";
import { useLiveDateTime } from "@/hooks/useLiveDateTime";
import { useVisitorCount } from "@/hooks/useVisitorCount";
import { WeatherWidgetProps } from "./WeatherWidget.types";


export function WeatherWidget({ className = "", showVisitors = true }: WeatherWidgetProps) {
  const { timeStr, dateStr } = useLiveDateTime();
  const { formattedCount, isLoading } = useVisitorCount();

  return (
    <div className={`hidden sm:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-nav text-[11px] font-mono text-neutral-300 border border-white/10 bg-black/40 backdrop-blur-xl ${className}`}>
      {/* 1. Date */}
      <span className="text-neutral-300 font-medium">
        {dateStr || "Jul 30"}
      </span>

      
      <span className="text-neutral-500">•</span>
      
      {/* 3. Time */}
      <span className="text-white font-medium">
        {timeStr || "11:30 PM"}
      </span>

      {/* 4. Visitor Count */}
      {showVisitors && (
        <>
          <span className="text-neutral-500">•</span>
          <div 
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors cursor-default" 
            title="Total Website Visitors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <Users className="h-3.5 w-3.5" />
            <span className="font-semibold text-white">
              {isLoading ? "..." : formattedCount}
            </span>
          </div>
        </>
      )}
    </div>
  );
}

