"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Smartphone } from "lucide-react";
import { useViewMode, ViewMode } from "@/context/ViewModeContext";
import { useDeviceType } from "@/hooks/useDeviceType";

interface DeviceViewToggleProps {
  className?: string;
  variant?: "header" | "floating" | "compact" | "circle";
}

export function DeviceViewToggle({ className = "", variant = "floating" }: DeviceViewToggleProps) {
  const { viewMode, setViewMode } = useViewMode();
  const { isMobile, isMounted } = useDeviceType();

  // If opened directly on a real mobile device, hide the toggle button completely
  if (isMounted && isMobile) {
    return null;
  }

  // Circular Floating Button variant (matches PortfolioChatbot design exactly)
  if (variant === "floating" || variant === "circle") {
    const isDesktop = viewMode === "desktop";
    const nextMode = isDesktop ? "mobile" : "desktop";
    const tooltipText = isDesktop ? "Mobile View" : "Desktop View";

    return (
      <div className={`relative ${className}`}>
        <button
          onClick={() => setViewMode(nextMode)}
          aria-label={`Switch to ${tooltipText}`}
          className="relative group flex items-center justify-center w-12 h-12 rounded-full bg-neutral-950 border border-white/20 text-white shadow-xl backdrop-blur-xl hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 active:scale-95 cursor-pointer"
        >
          <AnimatePresence mode="wait">
            {isDesktop ? (
              <motion.div
                key="desktop-mode"
                initial={{ scale: 0.8, rotate: -15, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0.8, rotate: 15, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative flex items-center justify-center"
              >
                <Smartphone className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </motion.div>
            ) : (
              <motion.div
                key="mobile-mode"
                initial={{ scale: 0.8, rotate: 15, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                exit={{ scale: 0.8, rotate: -15, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative flex items-center justify-center"
              >
                <Monitor className="w-5 h-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Attention-grabbing Animated Tooltip matching Chatbot style */}
          <motion.div
            initial={{ opacity: 0, y: 5, scale: 0.9 }}
            animate={{
              opacity: [0, 1, 1, 1, 1, 0],
              y: [5, 0, -3, 2, -2, 1, 0, 0],
              scale: [0.92, 1.05, 1, 1.03, 1, 0.95],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              repeatDelay: 2.2,
              ease: "easeInOut",
            }}
            className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap cursor-pointer z-50 pointer-events-auto"
          >
            <div className="relative px-2.5 py-1 rounded-lg bg-neutral-900/95 border border-purple-500/40 text-[10px] sm:text-[11px] font-sans font-medium text-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.3)] backdrop-blur-md flex items-center hover:border-purple-400 hover:scale-105 transition-all">
              <span>{tooltipText}</span>
              {/* Pointer arrow */}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900 border-r border-b border-purple-500/40 rotate-45" />
            </div>
          </motion.div>
        </button>
      </div>
    );
  }

  // Header / Capsule Pill Switcher variant
  const options: { id: ViewMode; label: string; icon: typeof Monitor }[] = [
    { id: "desktop", label: "Desktop", icon: Monitor },
    { id: "mobile", label: "Mobile", icon: Smartphone },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      role="group"
      aria-label="Device View Switcher"
      className={`inline-flex items-center p-1 rounded-full bg-neutral-950/90 dark:bg-neutral-950/90 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-2xl select-none ${className}`}
    >
      {options.map((option) => {
        const isActive = viewMode === option.id;
        const Icon = option.icon;

        return (
          <button
            key={option.id}
            type="button"
            onClick={() => setViewMode(option.id)}
            className={`relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-full transition-all duration-200 cursor-pointer active:scale-95 ${
              isActive ? "text-white" : "text-neutral-400 hover:text-neutral-200"
            }`}
            aria-pressed={isActive}
            title={`Switch to ${option.label} View`}
          >
            {isActive && (
              <motion.div
                layoutId={`deviceToggleActiveIndicator-${variant}`}
                transition={{ type: "spring", stiffness: 450, damping: 30 }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/90 to-fuchsia-600/90 border border-purple-400/50 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              <Icon className="w-3.5 h-3.5" />
              <span className={variant === "compact" ? "hidden sm:inline" : "inline"}>
                {option.label}
              </span>
            </span>
          </button>
        );
      })}
    </motion.div>
  );
}
