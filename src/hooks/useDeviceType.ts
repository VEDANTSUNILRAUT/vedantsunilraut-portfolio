"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

function subscribeMobile(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia("(max-width: 1024px)");
  mql.addEventListener("change", callback);
  window.addEventListener("resize", callback, { passive: true });
  return () => {
    mql.removeEventListener("change", callback);
    window.removeEventListener("resize", callback);
  };
}

function getMobileSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  const isMobileOrTabletViewport = window.innerWidth <= 1024;
  const isTouchDevice = 
    typeof navigator !== "undefined" && 
    (navigator.maxTouchPoints > 0 || "ontouchstart" in window);
  const isMobileOrTabletUA = 
    typeof navigator !== "undefined" &&
    (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet|Silk/i.test(navigator.userAgent) ||
     (navigator.maxTouchPoints > 1 && /Macintosh/i.test(navigator.userAgent)));

  return isMobileOrTabletViewport || (isTouchDevice && isMobileOrTabletUA);
}

export function useDeviceType() {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const isMobile = useSyncExternalStore(
    subscribeMobile,
    getMobileSnapshot,
    () => false
  );

  return { isMobile, isMounted };
}


