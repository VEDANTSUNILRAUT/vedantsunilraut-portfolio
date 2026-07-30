"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function LenisScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      lerp: 0.07,
      smoothWheel: true,
      wheelMultiplier: 0.9,
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
