"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AndroidStatusBar } from "./AndroidStatusBar";
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

  const handleScroll = () => {
    if (mainRef.current) {
      window.dispatchEvent(new CustomEvent("mobilescroll", { detail: { scrollY: mainRef.current.scrollTop } }));
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-transparent text-white relative z-10 font-sans">
      {/* Top Realistic Android Status Bar */}
      <div className="sticky top-0 left-0 right-0 z-50">
        <AndroidStatusBar />
      </div>

      {/* Central Active Android Screen with Material 3 Motion Transition */}
      <main 
        ref={mainRef} 
        onScroll={handleScroll}
        data-lenis-prevent 
        className="flex-1 w-full overflow-y-auto z-10 pt-2 pb-24 sm:pb-28 custom-scrollbar"
      >
        <div className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
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
        </div>
      </main>

      {/* Bottom Sticky Android Material 3 Navigation Bar */}
      <div className="fixed sm:sticky bottom-0 left-0 right-0 z-50 pointer-events-none">
        <div className="w-full pointer-events-auto">
          <AndroidBottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </div>
  );
}

