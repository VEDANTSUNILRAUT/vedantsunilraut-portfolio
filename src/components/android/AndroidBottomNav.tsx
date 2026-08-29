"use client";

import { motion } from "framer-motion";
import { Home, Briefcase, Layers, Cpu, Mail } from "lucide-react";

export type AndroidTabType = "home" | "work" | "projects" | "skills" | "contact";

interface AndroidBottomNavProps {
  activeTab: AndroidTabType;
  setActiveTab: (tab: AndroidTabType) => void;
}

export function AndroidBottomNav({ activeTab, setActiveTab }: AndroidBottomNavProps) {
  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "work", label: "Work", icon: Briefcase },
    { id: "projects", label: "Projects", icon: Layers },
    { id: "skills", label: "Skills", icon: Cpu },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Android Bottom Navigation"
      className="w-full h-15 bg-neutral-950/95 border-t border-white/10 backdrop-blur-2xl px-1 flex items-center justify-around z-40 select-none pb-2 pt-1"
    >
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as AndroidTabType)}
            className="relative flex flex-col items-center justify-center flex-1 py-0.5 group transition-all cursor-pointer"
            aria-current={isActive ? "page" : undefined}
          >
            {/* Jetpack Compose Material 3 Pill Indicator */}
            <div className="relative px-3.5 py-1 rounded-full flex items-center justify-center">
              {isActive && (
                <motion.div
                  layoutId="androidBottomNavPill"
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/40 to-fuchsia-600/40 border border-purple-500/40 shadow-[0_0_12px_rgba(168,85,247,0.3)]"
                />
              )}
              <Icon
                className={`w-4.5 h-4.5 relative z-10 transition-all duration-200 ${
                  isActive ? "text-purple-300 scale-110" : "text-neutral-400 group-hover:text-neutral-200"
                }`}
              />
            </div>

            {/* Label */}
            <span
              className={`text-[9px] font-mono mt-0.5 transition-colors ${
                isActive ? "text-purple-300 font-semibold" : "text-neutral-400"
              }`}
            >
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
