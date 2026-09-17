"use client";

import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useMobileState } from "@/context/MobileStateContext";
import { AndroidTopBar } from "./AndroidTopBar";
import { AndroidAssistantSheet } from "./AndroidAssistantSheet";
import { AndroidBottomNav } from "./AndroidBottomNav";
import { AndroidToastProvider } from "./AndroidToast";

import { AndroidHomeScreen } from "./screens/AndroidHomeScreen";
import { AndroidWorkScreen } from "./screens/AndroidWorkScreen";
import { AndroidProjectsScreen } from "./screens/AndroidProjectsScreen";
import { AndroidSkillsScreen } from "./screens/AndroidSkillsScreen";
import { AndroidContactScreen } from "./screens/AndroidContactScreen";

export interface MobileAppProps {
  isEmulator?: boolean;
  className?: string;
}

export function MobileApp({ isEmulator = false, className = "" }: MobileAppProps) {
  const { activeTab, setActiveTab, isAssistantOpen, setIsAssistantOpen, brightness } = useMobileState();
  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTop = 0;
    }
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, [activeTab]);

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <AndroidHomeScreen setActiveTab={setActiveTab} onOpenAssistant={() => setIsAssistantOpen(true)} />;
      case "work":
        return <AndroidWorkScreen />;
      case "projects":
        return <AndroidProjectsScreen />;
      case "skills":
        return <AndroidSkillsScreen />;
      case "contact":
        return <AndroidContactScreen />;
      default:
        return <AndroidHomeScreen setActiveTab={setActiveTab} onOpenAssistant={() => setIsAssistantOpen(true)} />;
    }
  };

  const handleScroll = () => {
    if (mainRef.current) {
      window.dispatchEvent(
        new CustomEvent("mobilescroll", {
          detail: { scrollY: mainRef.current.scrollTop },
        })
      );
    }
  };

  return (
    <AndroidToastProvider>
      <div
        className={`w-full flex flex-col justify-between bg-slate-50 dark:bg-black text-neutral-900 dark:text-white relative z-20 font-sans transition-colors duration-300 ${
          isEmulator ? "h-full min-h-0 overflow-hidden" : "fixed inset-0 h-[100dvh] w-full overflow-hidden"
        } ${className}`}
      >
        {/* Real Mobile Software Backlight Dimming Overlay */}
        {!isEmulator && (
          <div
            aria-hidden="true"
            className="fixed inset-0 pointer-events-none z-[45] transition-opacity duration-75"
            style={{
              backgroundColor: "#000000",
              opacity: Math.max(0, Math.min(0.85, (100 - brightness) / 100 * 0.85)),
            }}
          />
        )}

        {/* 1. Top App Bar (Material 3 Native Navigation Header) */}
        <div className="shrink-0 sticky top-0 left-0 right-0 z-30">
          <AndroidTopBar activeScreen={activeTab} />
        </div>

        {/* 2. In-App Android Gemini AI Assistant Sheet */}
        <AndroidAssistantSheet
          isOpen={isAssistantOpen}
          onClose={() => setIsAssistantOpen(false)}
        />

        {/* 3. Central Active Mobile Screen with Jetpack Compose AnimatedNavHost Motion */}
        <main
          ref={mainRef}
          onScroll={handleScroll}
          data-lenis-prevent
          className="flex-1 w-full overflow-y-auto z-10 custom-scrollbar pt-2.5 pb-24 px-3 min-h-0 relative overscroll-contain"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="w-full max-w-md mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-full"
              >
                {renderScreen()}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>

        {/* 4. Floating Material 3 Android AI Assistant FAB (Positioned above bottom nav) */}
        <div className="absolute bottom-20 right-4 z-40">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsAssistantOpen(true)}
            aria-label="Open Android AI Assistant"
            className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 via-fuchsia-600 to-indigo-600 border border-purple-400/50 shadow-[0_0_25px_rgba(168,85,247,0.6)] flex items-center justify-center text-white cursor-pointer group"
          >
            <Sparkles className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-black animate-pulse" />
          </motion.button>
        </div>

        {/* 5. Bottom Android Material 3 Navigation Bar */}
        <div className="shrink-0 sticky bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-2xl border-t border-white/10">
          <AndroidBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </AndroidToastProvider>
  );
}
