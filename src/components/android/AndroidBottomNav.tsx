"use client";

import { Home, User, Briefcase, Cpu, Mail } from "lucide-react";

export type AndroidTabType = "home" | "about" | "work" | "skills" | "contact";

interface AndroidBottomNavProps {
  activeTab: AndroidTabType;
  setActiveTab: (tab: AndroidTabType) => void;
}

export function AndroidBottomNav({ activeTab, setActiveTab }: AndroidBottomNavProps) {
  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "work", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Cpu },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="w-full sm:max-w-md md:max-w-lg sm:mx-auto h-16 sm:mb-4 sm:rounded-2xl bg-black/75 border-t sm:border border-white/10 backdrop-blur-2xl px-2 sm:px-4 flex items-center justify-around z-50 select-none pb-1 sm:pb-1 shadow-2xl sm:shadow-[0_12px_36px_rgba(0,0,0,0.8)]">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as AndroidTabType)}
            className="flex flex-col items-center justify-center flex-1 py-1 group transition-all cursor-pointer"
          >
            {/* Active Pill Indicator */}
            <div
              className={`px-3.5 sm:px-5 py-1 rounded-full flex items-center justify-center transition-all duration-300 ${
                isActive
                  ? "bg-purple-600/30 text-fuchsia-300 border border-purple-500/40 scale-105 shadow-[0_0_12px_rgba(168,85,247,0.3)]"
                  : "text-neutral-400 group-hover:text-neutral-200"
              }`}
            >
              <Icon className={`w-5 h-5 transition-transform ${isActive ? "scale-110" : ""}`} />
            </div>

            {/* Label */}
            <span
              className={`text-[10px] sm:text-xs font-mono mt-0.5 transition-colors ${
                isActive ? "text-fuchsia-300 font-semibold" : "text-neutral-400"
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
