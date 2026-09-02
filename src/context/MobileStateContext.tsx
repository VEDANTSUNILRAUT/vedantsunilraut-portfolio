"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { AndroidTabType } from "@/components/android/AndroidBottomNav";

interface MobileStateContextType {
  activeTab: AndroidTabType;
  setActiveTab: (tab: AndroidTabType) => void;
  isAssistantOpen: boolean;
  setIsAssistantOpen: (open: boolean) => void;
  isQuickSettingsOpen: boolean;
  setIsQuickSettingsOpen: (open: boolean) => void;
  scrollPositions: Record<string, number>;
  setScrollPosition: (key: string, pos: number) => void;
  brightness: number;
  setBrightness: (val: number) => void;
  resetMobileState: () => void;
}

const MobileStateContext = createContext<MobileStateContextType | undefined>(undefined);

export function MobileStateProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTabState] = useState<AndroidTabType>("home");
  const [isAssistantOpen, setIsAssistantOpen] = useState<boolean>(false);
  const [isQuickSettingsOpen, setIsQuickSettingsOpen] = useState<boolean>(false);
  const [scrollPositions, setScrollPositions] = useState<Record<string, number>>({});
  const [brightness, setBrightnessState] = useState<number>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("android_emulator_brightness");
        if (saved) {
          const parsed = Number(saved);
          if (!isNaN(parsed) && parsed >= 15 && parsed <= 100) return parsed;
        }
      } catch {}
    }
    return 85;
  });

  const setActiveTab = useCallback((tab: AndroidTabType) => {
    setActiveTabState(tab);
  }, []);

  const setScrollPosition = useCallback((key: string, pos: number) => {
    setScrollPositions((prev) => ({ ...prev, [key]: pos }));
  }, []);

  const setBrightness = useCallback((val: number) => {
    const clamped = Math.max(15, Math.min(100, Math.round(val)));
    setBrightnessState(clamped);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem("android_emulator_brightness", String(clamped));
      } catch {}
    }
  }, []);

  const resetMobileState = useCallback(() => {
    setActiveTabState("home");
    setIsAssistantOpen(false);
    setIsQuickSettingsOpen(false);
    setScrollPositions({});
  }, []);

  return (
    <MobileStateContext.Provider
      value={{
        activeTab,
        setActiveTab,
        isAssistantOpen,
        setIsAssistantOpen,
        isQuickSettingsOpen,
        setIsQuickSettingsOpen,
        scrollPositions,
        setScrollPosition,
        brightness,
        setBrightness,
        resetMobileState,
      }}
    >
      {children}
    </MobileStateContext.Provider>
  );
}

export function useMobileState() {
  const context = useContext(MobileStateContext);
  if (!context) {
    throw new Error("useMobileState must be used within a MobileStateProvider");
  }
  return context;
}
