"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AndroidStatusBar } from "./AndroidStatusBar";
import { AndroidQuickSettingsSheet } from "./AndroidQuickSettingsSheet";
import { AndroidBottomNav, AndroidTabType } from "./AndroidBottomNav";

import { AndroidHomeScreen } from "./screens/AndroidHomeScreen";
import { AndroidAboutScreen } from "./screens/AndroidAboutScreen";
import { AndroidWorkScreen } from "./screens/AndroidWorkScreen";
import { AndroidSkillsScreen } from "./screens/AndroidSkillsScreen";
import { AndroidContactScreen } from "./screens/AndroidContactScreen";

export interface AndroidShellProps {
  isEmulator?: boolean;
}

export function AndroidShell({ isEmulator = false }: AndroidShellProps) {
  const [activeTab, setActiveTab] = useState<AndroidTabType>("home");
  const [isQuickSettingsOpen, setIsQuickSettingsOpen] = useState<boolean>(false);
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
        return <AndroidHomeScreen setActiveTab={setActiveTab} />;
      case "about":
        return <AndroidAboutScreen />;
      case "work":
        return <AndroidWorkScreen />;
      case "skills":
        return <AndroidSkillsScreen />;
      case "contact":
        return <AndroidContactScreen />;
      default:
        return <AndroidHomeScreen setActiveTab={setActiveTab} />;
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
    <div
      className={`w-full flex flex-col justify-between bg-black text-white relative z-10 font-sans ${
        isEmulator ? "h-full min-h-0 overflow-hidden" : "min-h-screen"
      }`}
    >
      {/* 1. Top Android Status Bar: Rendered specifically for Emulator Preview */}
      {isEmulator && (
        <div className="shrink-0 sticky top-0 left-0 right-0 z-50">
          <AndroidStatusBar onOpenQuickSettings={() => setIsQuickSettingsOpen(true)} />
        </div>
      )}

      {/* 2. Android Quick Settings Pull-Down Sheet */}
      <AndroidQuickSettingsSheet
        isOpen={isQuickSettingsOpen}
        onClose={() => setIsQuickSettingsOpen(false)}
      />

      {/* 3. Central Active Android Screen with Material 3 Motion Transition */}
      <main
        ref={mainRef}
        onScroll={handleScroll}
        data-lenis-prevent
        className={`flex-1 w-full overflow-y-auto z-10 custom-scrollbar ${
          isEmulator ? "pt-2 pb-20 px-3 sm:px-4" : "pt-4 pb-24 px-4 sm:px-6"
        }`}
      >
        <div className="w-full max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.99 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="w-full"
            >
              {renderScreen()}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* 4. Bottom Android Material 3 Navigation Bar */}
      <div
        className={`shrink-0 z-40 ${
          isEmulator
            ? "sticky bottom-0 left-0 right-0 bg-black/90 backdrop-blur-xl"
            : "fixed bottom-0 left-0 right-0 pointer-events-none"
        }`}
      >
        <div className="w-full pointer-events-auto">
          <AndroidBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </div>
  );
}
