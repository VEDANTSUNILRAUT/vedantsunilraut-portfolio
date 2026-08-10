"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Clock } from "lucide-react";
import { useLiveDateTime } from "@/hooks/useLiveDateTime";
import { useVisitorCount } from "@/hooks/useVisitorCount";
import { WeatherWidgetProps } from "./WeatherWidget.types";

export function WeatherWidget({ className = "", showVisitors = true }: WeatherWidgetProps) {
  const { timeStr, dateStr } = useLiveDateTime();
  const { formattedCount, isLoading } = useVisitorCount();
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    if (!showVisitors) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, [showVisitors]);

  return (
    <div className={`hidden sm:flex items-center justify-center px-3.5 py-1.5 rounded-full glass-nav border border-white/10 bg-black/40 backdrop-blur-xl h-8 overflow-hidden text-[11px] font-mono select-none cursor-default shadow-sm ${className}`}>
      <AnimatePresence mode="wait">
        {activeStep === 0 || !showVisitors ? (
          <motion.div
            key="date-time-step"
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -14, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 text-neutral-300 font-medium whitespace-nowrap"
          >
            <Clock className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span className="text-neutral-300">{dateStr || "Aug 10"}</span>
            <span className="text-neutral-600">•</span>
            <span className="text-white font-semibold">{timeStr || "10:27 PM"}</span>
          </motion.div>
        ) : (
          <motion.div
            key="visitor-count-step"
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -14, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 text-neutral-300 font-medium whitespace-nowrap"
            title="Total Website Visitors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <Users className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span className="text-white font-bold tracking-tight">
              {isLoading ? "..." : formattedCount}
            </span>
            <span className="text-neutral-400 font-normal">Profile Visitors</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}



