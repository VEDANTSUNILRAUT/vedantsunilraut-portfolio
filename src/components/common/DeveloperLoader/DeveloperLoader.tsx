"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Cpu } from "lucide-react";
import { DeveloperLoaderProps } from "./DeveloperLoader.types";

export function DeveloperLoader({ className = "", forceShow = false }: DeveloperLoaderProps) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  const getRouteDetails = (path: string) => {
    switch (path) {
      case "/":
        return "Home Dashboard";
      case "/about":
        return "About & Academic Journey";
      case "/work":
        return "Work Experience";
      case "/projects":
        return "Projects Showcase";
      case "/hire":
        return "Contact & Connect";
      case "/book":
        return "Book a Call";
      default:
        return "Loading Page";
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setProgress(0);

    const startTime = Date.now();
    const DURATION = 1350; // Completes over 1.35 seconds

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculatedProgress = Math.min(Math.floor((elapsed / DURATION) * 100), 100);
      setProgress(calculatedProgress);

      if (calculatedProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 150); // Total display time = 1.5 seconds
      }
    }, 25);

    return () => clearInterval(interval);
  }, [pathname]);

  const shouldShow = isLoading || forceShow;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          key="developer-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={`fixed inset-0 z-[9999] bg-black/90 backdrop-blur-2xl flex flex-col items-center justify-center p-6 font-mono select-none overflow-hidden ${className}`}
        >
          {/* Ambient Glowing Radial Orbs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/15 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-600/15 blur-[100px] rounded-full pointer-events-none" />

          {/* Pure Centered Loader Group */}
          <div className="relative z-10 flex flex-col items-center max-w-sm w-full space-y-6">
            
            {/* Elegant Spinning Dual Ring */}
            <div className="relative flex items-center justify-center w-20 h-20">
              {/* Outer Glowing Gradient Spinner */}
              <div className="w-20 h-20 rounded-full border-3 border-transparent border-t-purple-500 border-r-cyan-400 border-b-purple-600/30 border-l-transparent animate-spin shadow-[0_0_25px_rgba(168,85,247,0.5)]" />

              {/* Counter-Rotating Outer Dashed Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute w-14 h-14 rounded-full border border-dashed border-purple-400/40"
              />

              {/* Central Glowing Icon */}
              <div className="absolute inset-0 m-auto w-9 h-9 rounded-full bg-neutral-950 border border-purple-500/30 flex items-center justify-center text-purple-300 shadow-lg">
                <Code2 className="w-4 h-4 text-purple-400 animate-pulse" />
              </div>
            </div>

            {/* Centered Route Status Text */}
            <div className="flex flex-col items-center text-center space-y-1.5">
              <span className="text-xs font-mono font-semibold tracking-wider text-white flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-purple-400 animate-spin" />
                <span>{getRouteDetails(pathname)}</span>
              </span>

              <span className="text-[11px] font-mono text-neutral-400">
                Loading modules... <span className="text-purple-400 font-bold">{Math.min(progress, 100)}%</span>
              </span>
            </div>

            {/* Minimal Slim Progress Line */}
            <div className="w-48 h-1 rounded-full bg-neutral-900 border border-white/10 overflow-hidden relative">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
                className="h-full rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
