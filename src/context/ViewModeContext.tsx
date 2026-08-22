"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export type ViewMode = "desktop" | "mobile";

interface ViewModeContextType {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  toggleViewMode: () => void;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
}

const ViewModeContext = createContext<ViewModeContextType | undefined>(undefined);

export function ViewModeProvider({ children }: { children: React.ReactNode }) {
  const [viewMode, setViewModeState] = useState<ViewMode>("desktop");
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Professional Fullscreen Toggle Controller
  const toggleFullscreen = useCallback(async () => {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    try {
      if (!document.fullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          await document.documentElement.requestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        }
      }
    } catch {
      // Graceful fallback
    }
  }, []);

  // View Mode Switcher with Native Fullscreen on Mobile View
  const setViewMode = useCallback((mode: ViewMode) => {
    setViewModeState(mode);

    if (typeof window !== "undefined" && typeof document !== "undefined") {
      if (mode === "mobile") {
        if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen().catch(() => {});
        }
      } else {
        if (document.fullscreenElement && document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        }
      }
    }
  }, []);

  const toggleViewMode = useCallback(() => {
    setViewMode(viewMode === "desktop" ? "mobile" : "desktop");
  }, [viewMode, setViewMode]);

  // Sync state cleanly with browser native fullscreen events
  useEffect(() => {
    const handleFullscreenChange = () => {
      const active = !!document.fullscreenElement;
      setIsFullscreen(active);
      if (!active && viewMode === "mobile") {
        // User exited fullscreen via Escape key -> restore desktop view
        setViewModeState("desktop");
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      document.removeEventListener("MSFullscreenChange", handleFullscreenChange);
    };
  }, [viewMode]);

  // Professional Keyboard Shortcuts: 'Alt + M' for Mobile View, 'Alt + F' for Fullscreen
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey && (e.key === "m" || e.key === "M")) {
        e.preventDefault();
        toggleViewMode();
      }
      if (e.altKey && (e.key === "f" || e.key === "F")) {
        e.preventDefault();
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleViewMode, toggleFullscreen]);

  return (
    <ViewModeContext.Provider value={{ viewMode, setViewMode, toggleViewMode, isFullscreen, toggleFullscreen }}>
      {children}
    </ViewModeContext.Provider>
  );
}

export function useViewMode() {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error("useViewMode must be used within a ViewModeProvider");
  }
  return context;
}
