"use client";

import { motion } from "framer-motion";
import { HorizonGlowProps } from "./HorizonGlow.types";

export function HorizonGlow({ className = "" }: HorizonGlowProps) {
  return (
    <div className={`absolute bottom-0 inset-x-0 w-full overflow-hidden pointer-events-none z-0 ${className}`}>
      {/* Outer Radial Glow Orb */}
      <div className="absolute left-1/2 bottom-[-150px] -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-t from-purple-600/20 via-indigo-500/10 to-transparent blur-[120px] rounded-full" />
      
      {/* Pulsing Arc Beam */}
      <motion.div
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_20px_rgba(168,85,247,0.8)]"
      />
    </div>
  );
}

