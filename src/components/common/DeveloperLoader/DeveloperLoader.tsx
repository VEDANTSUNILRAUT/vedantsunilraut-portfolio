"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMounted } from "@/hooks/useIsMounted";
import { DeveloperLoaderProps } from "./DeveloperLoader.types";

export function DeveloperLoader({ className = "", forceShow = false }: DeveloperLoaderProps) {
  const isMounted = useIsMounted();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const DURATION = 1400; // Time in ms to complete 1 full infinity cycle

  useEffect(() => {
    const alreadyLoaded = typeof window !== "undefined" && Boolean(sessionStorage.getItem("hasLoaded"));
    if (!forceShow && alreadyLoaded) {
      return;
    }

    setIsLoading(true);

    const timer = setTimeout(() => {
      if (typeof window !== "undefined") {
        sessionStorage.setItem("hasLoaded", "true");
      }
      setIsLoading(false);
    }, DURATION);

    return () => clearTimeout(timer);
  }, [forceShow]);

  if (!isMounted) return null;

  const shouldShow = isLoading || forceShow;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          key="developer-loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className={`fixed inset-0 z-[9999] bg-black/60 backdrop-blur-xl flex flex-col items-center justify-center p-6 select-none overflow-hidden ${className}`}
        >
          {/* Minimalist Central Container */}
          <div className="relative flex flex-col items-center">
            
            {/* Theme-Matched Infinity Line Loader */}
            <div className="relative flex items-center justify-center w-24 h-14">
              <svg viewBox="0 0 100 60" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="infinity-theme-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--primary-start, #c084fc)" />
                    <stop offset="50%" stopColor="var(--primary-mid, #a855f7)" />
                    <stop offset="100%" stopColor="var(--accent-indigo, #6366f1)" />
                  </linearGradient>
                  
                  {/* Soft Ambient Glow Filter */}
                  <filter id="infinity-glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="3.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Subtle Static Track Path */}
                <path
                  d="M 50,30 C 65,12 90,12 90,30 C 90,48 65,48 50,30 C 35,12 10,12 10,30 C 10,48 35,48 50,30 Z"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.08)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Active Infinity Glowing Line completing 1 cycle across loading time */}
                <motion.path
                  d="M 50,30 C 65,12 90,12 90,30 C 90,48 65,48 50,30 C 35,12 10,12 10,30 C 10,48 35,48 50,30 Z"
                  fill="none"
                  stroke="url(#infinity-theme-gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  filter="url(#infinity-glow)"
                  initial={{ pathLength: 0.25, pathOffset: 0 }}
                  animate={{ pathOffset: 1 }}
                  transition={{
                    duration: DURATION / 1000,
                    ease: "easeInOut",
                    repeat: forceShow ? Infinity : 0,
                  }}
                />
              </svg>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


