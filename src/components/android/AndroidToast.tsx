"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Info, Sparkles } from "lucide-react";

interface ToastMessage {
  id: string;
  text: string;
  type?: "success" | "info" | "sparkle";
}

interface ToastContextType {
  showToast: (text: string, type?: "success" | "info" | "sparkle") => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function AndroidToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = useCallback((text: string, type: "success" | "info" | "sparkle" = "success") => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, text, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2800);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Material 3 Floating Toast Stack (Positioned right above bottom navigation bar) */}
      <div className="absolute bottom-22 left-0 right-0 z-50 flex flex-col items-center pointer-events-none px-4 gap-2">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 15, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.92 }}
              transition={{ type: "spring", stiffness: 450, damping: 30 }}
              className="px-4 py-2.5 rounded-full bg-neutral-900/95 border border-purple-500/40 text-white shadow-2xl backdrop-blur-2xl flex items-center gap-2 max-w-[90%] pointer-events-auto"
            >
              {toast.type === "sparkle" ? (
                <Sparkles className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              ) : toast.type === "info" ? (
                <Info className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              ) : (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              )}
              <span className="text-xs font-mono font-medium text-neutral-200 tracking-tight">
                {toast.text}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useAndroidToast() {
  const context = useContext(ToastContext);
  if (!context) {
    // Return safe fallback if used outside provider
    return {
      showToast: (text: string) => console.log(`[Android Toast]: ${text}`),
    };
  }
  return context;
}
