"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AndroidStatusBar } from "./AndroidStatusBar";
import { AndroidTopBar } from "./AndroidTopBar";
import { AndroidBottomNav, AndroidTabType } from "./AndroidBottomNav";

import { AndroidHomeScreen } from "./screens/AndroidHomeScreen";
import { AndroidAboutScreen } from "./screens/AndroidAboutScreen";
import { AndroidWorkScreen } from "./screens/AndroidWorkScreen";
import { AndroidSkillsScreen } from "./screens/AndroidSkillsScreen";
import { AndroidContactScreen } from "./screens/AndroidContactScreen";

export function AndroidShell() {
  const [activeTab, setActiveTab] = useState<AndroidTabType>("home");
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

  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-black text-white relative z-10 font-sans">
      {/* Top Fixed Android System Bar + App Bar */}
      <div className="sticky top-0 left-0 right-0 z-50 flex flex-col">
        <AndroidStatusBar />
        <AndroidTopBar activeScreen={activeTab} />
      </div>

      {/* Central Active Android Screen with Material 3 Motion Transition */}
      <main ref={mainRef} data-lenis-prevent className="flex-1 w-full overflow-y-auto z-10 pt-2 pb-6 custom-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.99 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-full"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Sticky Android Material 3 Navigation Bar */}
      <div className="sticky bottom-0 left-0 right-0 z-50">
        <AndroidBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

