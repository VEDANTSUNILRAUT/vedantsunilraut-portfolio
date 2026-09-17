"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useIsMounted } from "@/hooks/useIsMounted";
import { ThemeToggleProps } from "./ThemeToggle.types";

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const mounted = useIsMounted();

  if (!mounted) {
    return (
      <div className={`p-2 rounded-full glass-panel opacity-0 w-8 h-8 ${className}`} />
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={`w-8 h-8 flex items-center justify-center rounded-full glass-nav hover:bg-black/5 dark:hover:bg-white/10 active:scale-95 transition-all duration-200 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white border border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur-xl shrink-0 shadow-sm ${className}`}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4 text-amber-300" />
      ) : (
        <Moon className="h-4 w-4 text-violet-600" />
      )}
    </button>
  );
}
