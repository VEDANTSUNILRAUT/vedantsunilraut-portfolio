/**
 * Centralized Theme & Design Tokens Configuration
 * 
 * Single source of truth for all colors, brand gradients, accent palettes,
 * and design system variables across the entire portfolio.
 * 
 * Modifying colors here or in CSS custom properties in `globals.css`
 * updates the entire UI, including SVGs, Tailwind classes, and 3D Canvas elements.
 */

export const themeConfig = {
  // Core Brand Gradients & Primary Palette
  brand: {
    primaryStart: "#e879f9", // Pink/Fuchsia accent start
    primaryMid: "#a855f7",   // Violet/Purple primary mid
    primaryEnd: "#38bdf8",   // Cyan/Sky accent end
    rgb: {
      primaryStart: "232, 121, 249",
      primaryMid: "168, 85, 247",
      primaryEnd: "56, 189, 248",
    },
  },

  // Base System Colors
  base: {
    background: "#000000",
    foreground: "#ffffff",
    surfaceLight: "#18181b",
    glassBgDark: "rgba(255, 255, 255, 0.04)",
    glassBorderDark: "rgba(255, 255, 255, 0.08)",
  },

  // Accent Palette mapping for skills, experience timeline, and project highlights
  accents: {
    purple: {
      main: "#a855f7",
      light: "#c084fc",
      dark: "#6b21a8",
      textClass: "text-primary-mid",
      badgeClass: "bg-purple-500/10 border-purple-500/30 text-purple-300",
      pillClass: "bg-purple-500/10 text-purple-300 border-purple-500/20",
      borderHoverClass: "hover:border-purple-500/50",
      glowClass: "from-purple-500/20 via-indigo-500/10 to-transparent",
    },
    cyan: {
      main: "#06b6d4",
      light: "#22d3ee",
      dark: "#0e7490",
      textClass: "text-accent-cyan",
      badgeClass: "bg-cyan-500/10 border-cyan-500/30 text-cyan-300",
      pillClass: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
      borderHoverClass: "hover:border-cyan-500/50",
      glowClass: "from-cyan-500/20 via-blue-500/10 to-transparent",
    },
    emerald: {
      main: "#10b981",
      light: "#34d399",
      dark: "#047857",
      textClass: "text-accent-emerald",
      badgeClass: "bg-emerald-500/10 border-emerald-500/30 text-emerald-300",
      pillClass: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
      borderHoverClass: "hover:border-emerald-500/50",
      glowClass: "from-emerald-500/20 via-teal-500/10 to-transparent",
    },
    amber: {
      main: "#f59e0b",
      light: "#fbbf24",
      dark: "#b45309",
      textClass: "text-accent-amber",
      badgeClass: "bg-amber-500/10 border-amber-500/30 text-amber-300",
      pillClass: "bg-amber-500/10 text-amber-300 border-amber-500/20",
      borderHoverClass: "hover:border-amber-500/50",
      glowClass: "from-amber-500/20 via-orange-500/10 to-transparent",
    },
    blue: {
      main: "#3b82f6",
      light: "#60a5fa",
      dark: "#1d4ed8",
      textClass: "text-accent-blue",
      badgeClass: "bg-blue-500/10 border-blue-500/30 text-blue-300",
      pillClass: "bg-blue-500/10 text-blue-300 border-blue-500/20",
      borderHoverClass: "hover:border-blue-500/50",
      glowClass: "from-blue-500/20 via-indigo-500/10 to-transparent",
    },
    rose: {
      main: "#f43f5e",
      light: "#fb7185",
      dark: "#be123c",
      textClass: "text-accent-rose",
      badgeClass: "bg-rose-500/10 border-rose-500/30 text-rose-300",
      pillClass: "bg-rose-500/10 text-rose-300 border-rose-500/20",
      borderHoverClass: "hover:border-rose-500/50",
      glowClass: "from-rose-500/20 via-pink-500/10 to-transparent",
    },
    teal: {
      main: "#14b8a6",
      light: "#2dd4bf",
      dark: "#0f766e",
      textClass: "text-teal-400",
      badgeClass: "bg-teal-500/10 border-teal-500/30 text-teal-300",
      pillClass: "bg-teal-500/10 text-teal-300 border-teal-500/20",
      borderHoverClass: "hover:border-teal-500/50",
      glowClass: "from-teal-500/20 via-emerald-500/10 to-transparent",
    },
    sky: {
      main: "#0ea5e9",
      light: "#38bdf8",
      dark: "#0369a1",
      textClass: "text-sky-400",
      badgeClass: "bg-sky-500/10 border-sky-500/30 text-sky-300",
      pillClass: "bg-sky-500/10 text-sky-300 border-sky-500/20",
      borderHoverClass: "hover:border-sky-500/50",
      glowClass: "from-sky-500/20 via-blue-500/10 to-transparent",
    },
  },
};

export type ThemeConfig = typeof themeConfig;
