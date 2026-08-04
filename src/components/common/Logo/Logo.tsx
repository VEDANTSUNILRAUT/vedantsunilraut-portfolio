"use client";

import Link from "next/link";
import Image from "next/image";
import { LogoProps } from "./Logo.types";

export function Logo({ className = "", size = 50 }: LogoProps) {
  return (
    <Link
      href="#home"
      className={`relative flex items-center justify-center transition-transform duration-300 ease-out hover:scale-110 ${className}`}
      aria-label="Home"
    >
      <Image
        src="/vr-logo.png"
        alt="Logo"
        width={size}
        height={size}
        className="relative text-white dark:text-white"
      />
    </Link>
  );
}
