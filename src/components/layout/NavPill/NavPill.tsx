"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/constants/site";
import { NavPillProps } from "./NavPill.types";

export function NavPill({ className = "" }: NavPillProps) {
  const pathname = usePathname();

  const handleNavClick = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  };

  return (
    <nav className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-nav shadow-lg border border-white/10 dark:border-white/10 backdrop-blur-xl bg-black/40 dark:bg-black/40 ${className}`}>
      {siteConfig.navigation.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/" && pathname?.startsWith(item.href));

        if (item.isButton) {
          return (
            <Link
              key={item.label}
              href={item.href}
              onClick={handleNavClick}
              className="ml-1 px-3.5 py-1 rounded-full border border-white/30 dark:border-white/30 text-xs font-semibold text-white hover:bg-white/10 transition-all duration-200"
            >
              {item.label}
            </Link>
          );
        }

        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={handleNavClick}
            className={`relative px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
              isActive
                ? "text-fuchsia-400 font-semibold"
                : "text-neutral-300 hover:text-white"
            }`}
          >
            {item.label}
            {isActive && (
              <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-fuchsia-400" />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

