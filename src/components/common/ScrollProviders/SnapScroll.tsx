"use client";

export function SnapScroll({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full snap-y snap-mandatory scroll-smooth">
      {children}
    </div>
  );
}
