"use client";

import { MobileApp, MobileAppProps } from "./MobileApp";

export type AndroidShellProps = MobileAppProps;

/**
 * AndroidShell is the unified mobile application root.
 * Delegates directly to the shared MobileApp architecture.
 */
export function AndroidShell(props: AndroidShellProps) {
  return <MobileApp {...props} />;
}
