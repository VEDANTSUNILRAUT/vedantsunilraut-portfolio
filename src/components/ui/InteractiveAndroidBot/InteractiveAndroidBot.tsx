"use client";

import React, { useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { Sparkles, Zap } from "lucide-react";

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  angle: number;
  speed: number;
}

const BOT_MESSAGES = [
  "🚀 Jetpack Compose & KMP Ready!",
  "⚡ Clean Architecture + MVI!",
  "📱 60 FPS Native Performance!",
  "✨ Material 3 & Fluid Motion!",
  "🤖 Vedant's Android Bot is Active!",
];

export function InteractiveAndroidBot() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeMessage, setActiveMessage] = useState<string | null>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [clickCount, setClickCount] = useState(0);

  // Mouse tracking for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-60, 60], [20, -20]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-60, 60], [-20, 20]), springConfig);
  const translateX = useSpring(useTransform(mouseX, [-60, 60], [-10, 10]), springConfig);
  const translateY = useSpring(useTransform(mouseY, [-60, 60], [-10, 10]), springConfig);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    },
    [mouseX, mouseY]
  );

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const handleClick = () => {
    const nextIdx = clickCount % BOT_MESSAGES.length;
    setActiveMessage(BOT_MESSAGES[nextIdx]);
    setClickCount((prev) => prev + 1);

    // Create particle burst
    const colors = ["#34d399", "#a78bfa", "#38bdf8", "#f43f5e", "#fbbf24"];
    const newParticles: Particle[] = Array.from({ length: 16 }, (_, i) => ({
      id: Date.now() + i,
      x: 0,
      y: 0,
      color: colors[i % colors.length],
      size: Math.random() * 6 + 4,
      angle: (i * (360 / 16) * Math.PI) / 180,
      speed: Math.random() * 50 + 40,
    }));

    setParticles(newParticles);

    // Clear message after 3 seconds
    setTimeout(() => {
      setActiveMessage(null);
    }, 3000);

    // Clear particles
    setTimeout(() => {
      setParticles([]);
    }, 1000);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ perspective: 600 }}
      className="relative w-24 h-24 flex items-center justify-center cursor-pointer select-none group"
      title="Click Android Bot for Easter Egg!"
    >
      {/* Interactive 3D Android Bot Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
        }}
        whileTap={{ scale: 0.88 }}
        whileHover={{ scale: 1.15 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="relative flex items-center justify-center p-3 rounded-full bg-neutral-900/60 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_25px_rgba(52,211,153,0.3)] group-hover:border-emerald-400 group-hover:shadow-[0_0_35px_rgba(167,139,250,0.5)] transition-colors duration-300"
      >
        {/* Ambient Ring Pulse */}
        <div className="absolute inset-0 rounded-full border border-emerald-500/40 animate-ping opacity-40 pointer-events-none" />

        {/* Android Bot SVG */}
        <img
          src="/tech-icons/android.svg"
          alt="Android Bot"
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-[0_0_16px_rgba(52,211,153,0.8)] filter transition-all duration-300 group-hover:drop-shadow-[0_0_20px_rgba(167,139,250,0.9)]"
        />

        {/* Mini floating sparkles badge */}
        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-violet-600/90 border border-violet-400 text-white flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform">
          <Sparkles className="w-2.5 h-2.5 text-white" />
        </div>
      </motion.div>

      {/* Particle Burst Elements */}
      <AnimatePresence>
        {particles.map((p) => {
          const targetX = Math.cos(p.angle) * p.speed;
          const targetY = Math.sin(p.angle) * p.speed;

          return (
            <motion.span
              key={p.id}
              initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
              animate={{
                x: targetX,
                y: targetY,
                scale: 0,
                opacity: 0,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{
                backgroundColor: p.color,
                width: p.size,
                height: p.size,
                boxShadow: `0 0 10px ${p.color}`,
              }}
              className="absolute rounded-full pointer-events-none z-30"
            />
          );
        })}
      </AnimatePresence>

      {/* Speech Bubble on Click */}
      <AnimatePresence>
        {activeMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.85 }}
            animate={{ opacity: 1, y: -50, scale: 1 }}
            exit={{ opacity: 0, y: -65, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            className="absolute -top-6 whitespace-nowrap px-3.5 py-1.5 rounded-full bg-neutral-900/95 border border-purple-500/40 text-purple-200 text-[11px] font-mono font-medium shadow-2xl backdrop-blur-xl pointer-events-none z-40 flex items-center gap-1.5"
          >
            <Zap className="w-3 h-3 text-purple-400 shrink-0 fill-purple-400" />
            <span>{activeMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
