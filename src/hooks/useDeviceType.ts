"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

function subscribeMobile(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia("(max-width: 767px)");
  mql.addEventListener("change", callback);
  window.addEventListener("resize", callback, { passive: true });
  return () => {
    mql.removeEventListener("change", callback);
    window.removeEventListener("resize", callback);
  };
}

function getMobileSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  const isMobileViewport = window.innerWidth < 768;
  const isMobileUA = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
  return isMobileViewport || isMobileUA;
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

