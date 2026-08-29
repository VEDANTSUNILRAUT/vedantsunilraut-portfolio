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
  resetMobileState: () => void;
}

const MobileStateContext = createContext<MobileStateContextType | undefined>(undefined);

export function MobileStateProvider({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTabState] = useState<AndroidTabType>("home");
  const [isAssistantOpen, setIsAssistantOpen] = useState<boolean>(false);
  const [isQuickSettingsOpen, setIsQuickSettingsOpen] = useState<boolean>(false);
  const [scrollPositions, setScrollPositions] = useState<Record<string, number>>({});

  const setActiveTab = useCallback((tab: AndroidTabType) => {
    setActiveTabState(tab);
  }, []);

  const setScrollPosition = useCallback((key: string, pos: number) => {
    setScrollPositions((prev) => ({ ...prev, [key]: pos }));
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
