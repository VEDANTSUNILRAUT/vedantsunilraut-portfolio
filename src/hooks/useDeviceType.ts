"use client";

import { useSyncExternalStore } from "react";

export type DeviceType = "mobile" | "desktop";

const emptySubscribe = () => () => {};

function subscribeDevice(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mqlMobile = window.matchMedia("(max-width: 767px)");
  
  mqlMobile.addEventListener("change", callback);
  window.addEventListener("resize", callback, { passive: true });
  
  return () => {
    mqlMobile.removeEventListener("change", callback);
    window.removeEventListener("resize", callback);
  };
}

function getDeviceSnapshot(): DeviceType {
  if (typeof window === "undefined") return "desktop";
  
  const width = window.innerWidth;
  const isTouch = 
    typeof navigator !== "undefined" && 
    (navigator.maxTouchPoints > 0 || "ontouchstart" in window);
    
  const isPhoneUA = 
    typeof navigator !== "undefined" &&
    /Android.*Mobile|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  // Phone Viewport / Phone User Agent
  if (width < 768 || (isTouch && isPhoneUA && width <= 820)) {
    return "mobile";
  }

  return "desktop";
}

export function useDeviceType() {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const deviceType = useSyncExternalStore(
    subscribeDevice,
    getDeviceSnapshot,
    () => "desktop" as DeviceType
  );

  const isMobile = deviceType === "mobile";
  const isDesktop = deviceType === "desktop";

  return { deviceType, isMobile, isDesktop, isMounted };
}
