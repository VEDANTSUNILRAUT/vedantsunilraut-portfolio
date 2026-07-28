"use client";

import { useDeviceType } from "@/hooks/useDeviceType";
import { AndroidShell } from "@/components/android/AndroidShell";

interface DeviceLayoutSwitcherProps {
  children: React.ReactNode;
}

export function DeviceLayoutSwitcher({ children }: DeviceLayoutSwitcherProps) {
  const { isMobile, isMounted } = useDeviceType();

  // Before mounting, render children to avoid layout shift / flash
  if (!isMounted) {
    return <>{children}</>;
  }

  // If viewed on mobile viewport or smartphone device -> automatically render Android App View!
  if (isMobile) {
    return <AndroidShell />;
  }

  // Desktop / Laptop View
  return <>{children}</>;
}
