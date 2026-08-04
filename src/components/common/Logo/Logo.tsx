"use client";

import Link from "next/link";
import { LogoProps } from "./Logo.types";

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link 
      href="#home" 
      className={`group relative flex items-center justify-center transition-transform hover:scale-105 ${className}`}
      aria-label="Home"
    >
      <div className="relative flex items-center justify-center">
        {/* Subtle glow behind logo */}
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary-mid/30 to-primary-start/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Monogram VR SVG Logo */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative text-white dark:text-white"
        >
          <text
            x="6"
            y="35"
            fontFamily="var(--font-eb-garamond), serif"
            fontSize="32"
            fontWeight="600"
            fill="currentColor"
            letterSpacing="-3"
          >
            V
          </text>
          <text
            x="24"
            y="37"
            fontFamily="var(--font-eb-garamond), serif"
            fontSize="32"
            fontWeight="500"
            fill="url(#logo-grad)"
            letterSpacing="-2"
          >
            R
          </text>
          <defs>
            <linearGradient id="logo-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--primary-start)" />
              <stop offset="1" stopColor="var(--primary-end)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </Link>
  );
}
