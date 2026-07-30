"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function DriftScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.4, // Slower, steady linear glide
      easing: (t) => t, // Linear easing constant drift
      smoothWheel: true,
      wheelMultiplier: 0.7,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <div className="w-full">{children}</div>;
}
