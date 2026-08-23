"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { AndroidStatusBar } from "./AndroidStatusBar";
import { AndroidTopBar } from "./AndroidTopBar";
import { AndroidQuickSettingsSheet } from "./AndroidQuickSettingsSheet";
import { AndroidAssistantSheet } from "./AndroidAssistantSheet";
import { AndroidBottomNav, AndroidTabType } from "./AndroidBottomNav";
import { AndroidToastProvider } from "./AndroidToast";

import { AndroidHomeScreen } from "./screens/AndroidHomeScreen";
import { AndroidWorkScreen } from "./screens/AndroidWorkScreen";
import { AndroidProjectsScreen } from "./screens/AndroidProjectsScreen";
import { AndroidSkillsScreen } from "./screens/AndroidSkillsScreen";
import { AndroidContactScreen } from "./screens/AndroidContactScreen";

export interface AndroidShellProps {
  isEmulator?: boolean;
}

export function AndroidShell({ isEmulator = false }: AndroidShellProps) {
  const [activeTab, setActiveTab] = useState<AndroidTabType>("home");
  const [isQuickSettingsOpen, setIsQuickSettingsOpen] = useState<boolean>(false);
  const [isAssistantOpen, setIsAssistantOpen] = useState<boolean>(false);
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
        className={`w-full flex flex-col justify-between bg-black text-white relative z-10 font-sans ${
          isEmulator ? "h-full min-h-0 overflow-hidden" : "min-h-screen"
        }`}
      >
        {/* 1. Top Android Status Bar: Interactive (Tapping pulls down Quick Settings) */}
        {isEmulator && (
          <div className="shrink-0 sticky top-0 left-0 right-0 z-50">
            <AndroidStatusBar onOpenQuickSettings={() => setIsQuickSettingsOpen(true)} />
          </div>
        )}

        {/* 2. Top App Bar (Material 3 Native Navigation Header) */}
        <div className="shrink-0 sticky top-0 left-0 right-0 z-30">
          <AndroidTopBar activeScreen={activeTab} />
        </div>

        {/* 3. Android Quick Settings Pull-Down Sheet */}
        <AndroidQuickSettingsSheet
          isOpen={isQuickSettingsOpen}
          onClose={() => setIsQuickSettingsOpen(false)}
        />

        {/* 4. In-App Android Gemini AI Assistant Sheet */}
        <AndroidAssistantSheet
          isOpen={isAssistantOpen}
          onClose={() => setIsAssistantOpen(false)}
        />

        {/* 5. Central Active Android Screen with Jetpack Compose AnimatedNavHost Motion */}
        <main
          ref={mainRef}
          onScroll={handleScroll}
          data-lenis-prevent
          className="flex-1 w-full overflow-y-auto z-10 custom-scrollbar pt-2.5 pb-6 px-3 min-h-0 relative"
        >
          <div className="w-full max-w-sm mx-auto">
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

        {/* 6. Floating Material 3 Android AI Assistant FAB (Positioned above bottom nav) */}
        <div className="absolute bottom-17 right-3.5 z-40">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsAssistantOpen(true)}
            aria-label="Open Android AI Assistant"
            className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-purple-600 via-fuchsia-600 to-indigo-600 border border-purple-400/50 shadow-[0_0_20px_rgba(168,85,247,0.5)] flex items-center justify-center text-white cursor-pointer group"
          >
            <Sparkles className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-black" />
          </motion.button>
        </div>

        {/* 7. Bottom Android Material 3 Navigation Bar */}
        <div className="shrink-0 sticky bottom-0 left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-xl">
          <AndroidBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </AndroidToastProvider>
  );
}
