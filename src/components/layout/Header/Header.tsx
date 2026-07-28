"use client";

import { Logo } from "@/components/common/Logo";
import { NavPill } from "@/components/layout/NavPill";
import { WeatherWidget } from "@/components/common/WeatherWidget";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { HeaderProps } from "./Header.types";

export function Header({ className = "" }: HeaderProps) {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 py-5 max-w-7xl mx-auto w-full ${className}`}>
      {/* Left: Brand Logo (flex-1 to balance right side width) */}
      <div className="flex items-center justify-start flex-1">
        <Logo />
      </div>

      {/* Center: Floating Pill Navigation (Guaranteed 100% True Centered) */}
      <div className="flex items-center justify-center">
        <NavPill />
      </div>

      {/* Right: Weather Widget & Theme Toggle (flex-1 to balance left side width) */}
      <div className="flex items-center justify-end flex-1 gap-3">
        <WeatherWidget />
        <ThemeToggle />
      </div>
    </header>
  );
}
