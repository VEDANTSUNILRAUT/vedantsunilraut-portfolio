"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Logo } from "@/components/common/Logo";
import { NavPill } from "@/components/layout/NavPill";
import { WeatherWidget } from "@/components/common/WeatherWidget";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { HeaderProps } from "./Header.types";

export function Header({ className = "" }: HeaderProps) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = latest - previous;

    // Auto-hide when scrolling down past 80px, reveal when scrolling up
    if (latest > 80 && diff > 5) {
      setHidden(true);
    } else if (diff < -5 || latest <= 80) {
      setHidden(false);
    }

    setIsScrolled(latest > 20);
  });

  return (
    <motion.header
      variants={{
        visible: { y: "0%" },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full bg-transparent border-b border-transparent ${
        isScrolled ? "py-3" : "py-5"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <div className="flex items-center justify-start flex-1">
          <Logo />
        </div>

        {/* Center: Floating Pill Navigation */}
        <div className="flex items-center justify-center">
          <NavPill />
        </div>

        {/* Right: Weather Widget & Theme Toggle */}
        <div className="flex items-center justify-end flex-1 gap-3">
          <WeatherWidget />
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}


