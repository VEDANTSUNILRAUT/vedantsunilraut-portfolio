"use client";

import { Maximize2, Minimize2 } from "lucide-react";
import { useViewMode } from "@/context/ViewModeContext";
import { useIsMounted } from "@/hooks/useIsMounted";

interface FullscreenToggleProps {
  className?: string;
}

export function FullscreenToggle({ className = "" }: FullscreenToggleProps) {
  const { isFullscreen, toggleFullscreen } = useViewMode();
  const mounted = useIsMounted();

  if (!mounted) {
    return (
      <div className={`w-8 h-8 rounded-full glass-panel opacity-0 ${className}`} />
    );
  }

  return (
    <button
      onClick={toggleFullscreen}
      className={`w-8 h-8 flex items-center justify-center rounded-full glass-nav hover:bg-white/10 active:scale-95 transition-all duration-200 text-neutral-300 hover:text-white border border-white/10 bg-black/40 backdrop-blur-xl shrink-0 cursor-pointer ${className}`}
      aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen Website"}
      title={isFullscreen ? "Exit Fullscreen (Alt+F)" : "Enter Fullscreen (Alt+F)"}
    >
      {isFullscreen ? (
        <Minimize2 className="h-3.5 w-3.5 text-purple-400" />
      ) : (
        <Maximize2 className="h-3.5 w-3.5 text-neutral-300" />
      )}
    </button>
  );
}
