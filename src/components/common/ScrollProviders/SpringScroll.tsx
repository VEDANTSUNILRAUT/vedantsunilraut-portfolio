"use client";

import { useEffect, useRef } from "react";
import { useScroll, useSpring, motion } from "framer-motion";

export function SpringScroll({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <div ref={containerRef} className="w-full relative">
      {/* Scroll Progress Bar at Top */}
      <motion.div
        style={{ scaleX: smoothProgress }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 origin-left z-[99] shadow-[0_0_12px_rgba(168,85,247,0.8)]"
      />
      {children}
    </div>
  );
}
