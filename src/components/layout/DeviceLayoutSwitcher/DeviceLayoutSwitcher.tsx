"use client";

import React from "react";
import { useDeviceType } from "@/hooks/useDeviceType";
import { useViewMode } from "@/context/ViewModeContext";
import { AndroidShell } from "@/components/android/AndroidShell";
import { AndroidEmulator } from "@/components/android/AndroidEmulator";

interface DeviceLayoutSwitcherProps {
  children: React.ReactNode;
}

export function DeviceLayoutSwitcher({ children }: DeviceLayoutSwitcherProps) {
  const { isMobile, isMounted } = useDeviceType();
  const { viewMode } = useViewMode();

  // 1. SSR / Hydration Safety
  if (!isMounted) {
    return <>{children}</>;
  }

  // 2. Real Mobile Device Viewport (<768px or phone device):
  // Direct AndroidShell with native presentation
  if (isMobile) {
    return <AndroidShell isEmulator={false} />;
  }

  // 3. Desktop View with Mobile Emulator Switcher:
  if (viewMode === "mobile") {
    return (
      <AndroidEmulator>
        <AndroidShell isEmulator={true} />
      </AndroidEmulator>
    );
  }

  // Default: Desktop View
  return <>{children}</>;
}
