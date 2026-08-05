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
  // Core Brand Gradients & Primary Palette (Violet, White, Black, Charcoal)
  brand: {
    primaryStart: "#c084fc", // Radiant Violet start
    primaryMid: "#a855f7",   // Electric Violet primary mid
    primaryEnd: "#7c3aed",   // Deep Royal Violet end
    rgb: {
      primaryStart: "192, 132, 252",
      primaryMid: "168, 85, 247",
      primaryEnd: "124, 58, 237",
    },
  },

  // Base System Colors (Black, Charcoal, White)
  base: {
    background: "#050508",
    foreground: "#ffffff",
    surfaceCharcoal: "#121216",
    surfaceCard: "#18181c",
    borderCharcoal: "#272730",
    glassBgDark: "rgba(20, 20, 26, 0.65)",
    glassBorderDark: "rgba(255, 255, 255, 0.1)",
  },

  // Accent Palette mapping harmonized around Violet / Charcoal / White
  accents: {
    purple: {
      main: "#a855f7",
      light: "#c084fc",
      dark: "#6b21a8",
      textClass: "text-purple-300",
      badgeClass: "bg-purple-500/10 border-purple-500/30 text-purple-300",
      pillClass: "bg-purple-500/10 text-purple-300 border-purple-500/20",
      borderHoverClass: "hover:border-purple-500/50",
      glowClass: "from-purple-500/25 via-violet-500/10 to-transparent",
    },
    cyan: {
      main: "#c084fc",
      light: "#e9d5ff",
      dark: "#7e22ce",
      textClass: "text-purple-300",
      badgeClass: "bg-purple-500/10 border-purple-500/30 text-purple-300",
      pillClass: "bg-purple-500/10 text-purple-300 border-purple-500/20",
      borderHoverClass: "hover:border-purple-500/50",
      glowClass: "from-purple-400/20 via-violet-500/10 to-transparent",
    },
    emerald: {
      main: "#8b5cf6",
      light: "#ddd6fe",
      dark: "#5b21b6",
      textClass: "text-violet-300",
      badgeClass: "bg-violet-500/10 border-violet-500/30 text-violet-300",
      pillClass: "bg-violet-500/10 text-violet-300 border-violet-500/20",
      borderHoverClass: "hover:border-violet-500/50",
      glowClass: "from-violet-600/20 via-purple-600/10 to-transparent",
    },
    amber: {
      main: "#e879f9",
      light: "#f5d0fe",
      dark: "#86198f",
      textClass: "text-fuchsia-300",
      badgeClass: "bg-fuchsia-500/10 border-fuchsia-500/30 text-fuchsia-300",
      pillClass: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20",
      borderHoverClass: "hover:border-fuchsia-500/50",
      glowClass: "from-fuchsia-500/20 via-purple-500/10 to-transparent",
    },
    blue: {
      main: "#6366f1",
      light: "#c7d2fe",
      dark: "#3730a3",
      textClass: "text-indigo-300",
      badgeClass: "bg-indigo-500/10 border-indigo-500/30 text-indigo-300",
      pillClass: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
      borderHoverClass: "hover:border-indigo-500/50",
      glowClass: "from-indigo-500/20 via-violet-500/10 to-transparent",
    },
    rose: {
      main: "#d946ef",
      light: "#fae8ff",
      dark: "#701a75",
      textClass: "text-fuchsia-300",
      badgeClass: "bg-fuchsia-500/10 border-fuchsia-500/30 text-fuchsia-300",
      pillClass: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20",
      borderHoverClass: "hover:border-fuchsia-500/50",
      glowClass: "from-fuchsia-500/20 via-pink-500/10 to-transparent",
    },
    teal: {
      main: "#a78bfa",
      light: "#ede9fe",
      dark: "#4c1d95",
      textClass: "text-violet-300",
      badgeClass: "bg-violet-500/10 border-violet-500/30 text-violet-300",
      pillClass: "bg-violet-500/10 text-violet-300 border-violet-500/20",
      borderHoverClass: "hover:border-violet-500/50",
      glowClass: "from-violet-500/20 via-indigo-500/10 to-transparent",
    },
    sky: {
      main: "#9333ea",
      light: "#d8b4fe",
      dark: "#581c87",
      textClass: "text-purple-300",
      badgeClass: "bg-purple-500/10 border-purple-500/30 text-purple-300",
      pillClass: "bg-purple-500/10 text-purple-300 border-purple-500/20",
      borderHoverClass: "hover:border-purple-500/50",
      glowClass: "from-purple-600/20 via-violet-600/10 to-transparent",
    },
  },
};

export type ThemeConfig = typeof themeConfig;

