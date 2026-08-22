"use client";

import React from "react";
import { motion } from "framer-motion";

interface AndroidEmulatorProps {
  children: React.ReactNode;
}

export function AndroidEmulator({ children }: AndroidEmulatorProps) {
  return (
    <section className="fixed inset-0 z-50 w-full h-[100dvh] flex items-center justify-center p-3 bg-black/95 backdrop-blur-3xl overflow-hidden select-none">
      {/* Interactive True-to-Scale Android Smartphone Chassis */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 320, damping: 28 }}
        className="relative flex items-center justify-center w-[385px] max-w-[calc(100vw-24px)] h-[min(790px,calc(100dvh-24px))] shrink-0"
      >
        {/* Device Chassis Outer Frame (Pixel 9 Pro geometry) */}
        <div className="relative w-full h-full rounded-[48px] p-[8px] bg-gradient-to-b from-neutral-750 via-neutral-900 to-neutral-950 shadow-[0_25px_80px_rgba(0,0,0,0.95),0_0_50px_rgba(168,85,247,0.15),inset_0_1px_2px_rgba(255,255,255,0.3)] ring-1 ring-white/15 flex flex-col">
          
          {/* Side Hardware Buttons */}
          {/* Right: Power Button */}
          <div className="absolute -right-[3px] top-[140px] w-[3px] h-10 bg-neutral-700 rounded-r-md ring-1 ring-white/10" />
          {/* Right: Volume Rocker */}
          <div className="absolute -right-[3px] top-[200px] w-[3px] h-20 bg-neutral-700 rounded-r-md ring-1 ring-white/10" />
          
          {/* Left: SIM Pin */}
          <div className="absolute -left-[3px] top-[170px] w-[3px] h-6 bg-neutral-700 rounded-l-md ring-1 ring-white/10" />

          {/* Top Speaker Earpiece Slit */}
          <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-12 h-[3px] bg-neutral-800 rounded-full z-30" />

          {/* Inner Screen Display Bezel */}
          <div 
            className="w-full h-full rounded-[40px] overflow-hidden bg-black relative flex flex-col ring-1 ring-black/90 shadow-[inset_0_0_15px_rgba(0,0,0,0.85)]"
            style={{
              isolation: "isolate",
              transform: "translateZ(0)",
            }}
          >
            {/* Screen Content (AndroidShell) */}
            <div className="w-full h-full relative flex flex-col min-h-0 overflow-hidden">
              {children}
            </div>

            {/* Bottom Android Home Pill Gesture Bar */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/40 rounded-full pointer-events-none z-50 hover:bg-white/70 transition-colors" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
