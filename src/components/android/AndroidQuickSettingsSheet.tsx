"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { 
  Wifi, 
  Signal, 
  Plane, 
  Sun, 
  Moon, 
  Bluetooth, 
  Flashlight, 
  RotateCw, 
  BellOff, 
  Settings, 
  Power, 
  ChevronUp, 
  Sliders
} from "lucide-react";

interface AndroidQuickSettingsSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AndroidQuickSettingsSheet({ isOpen, onClose }: AndroidQuickSettingsSheetProps) {
  const { theme, setTheme } = useTheme();

  // Simulated visual toggle states for other buttons
  const [isDataOn, setIsDataOn] = useState(true);
  const [isWifiOn, setIsWifiOn] = useState(true);
  const [isPlaneOn, setIsPlaneOn] = useState(false);
  const [isBluetoothOn, setIsBluetoothOn] = useState(true);
  const [isTorchOn, setIsTorchOn] = useState(false);
  const [isRotateOn, setIsRotateOn] = useState(true);
  const [isDndOn, setIsDndOn] = useState(false);
  const [brightness, setBrightness] = useState(80);

  // Time & Date formatting for Material You header
  const [timeStr, setTimeStr] = useState("");
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      setTimeStr(`${hours % 12 || 12}:${minutes < 10 ? "0" : ""}${minutes}`);

      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      setDateStr(`${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const isDarkMode = theme === "dark" || !theme;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Translucent Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100]"
          />

          {/* Quick Settings Top Sheet Panel */}
          <motion.div
            initial={{ y: "-100%", opacity: 0.8 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0.8 }}
            transition={{ type: "spring", stiffness: 350, damping: 32 }}
            className="fixed top-0 left-0 right-0 z-[101] max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto rounded-b-[32px] bg-neutral-950/95 border-b border-x border-white/15 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col text-white font-sans select-none"
          >
            {/* 1. Material You Top Header */}
            <div className="pt-3 px-6 pb-2 flex items-center justify-between border-b border-white/5">
              {/* Left: Clock & Date */}
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-bold tracking-tight leading-none text-white">
                  {timeStr || "10:30"}
                </span>
                <span className="text-[11px] font-mono text-neutral-400 mt-0.5">
                  {dateStr || "Mon, Aug 17"}
                </span>
              </div>

              {/* Right: Quick Action Buttons (Edit, Settings, Power) */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-neutral-300 active:scale-95 transition-all"
                  aria-label="Settings"
                >
                  <Settings className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-neutral-300 active:scale-95 transition-all"
                  aria-label="Power menu"
                >
                  <Power className="w-4 h-4 text-rose-400" />
                </button>
              </div>
            </div>

            {/* 2. Quick Settings Tiles Grid (2 columns on mobile, 4 columns on tablet) */}
            <div className="p-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              
              {/* Tile 1: Mobile Data */}
              <button
                type="button"
                onClick={() => setIsDataOn(!isDataOn)}
                className={`p-3 rounded-2xl flex items-center gap-3 transition-all cursor-pointer text-left active:scale-95 border ${
                  isDataOn
                    ? "bg-purple-600/30 border-purple-500/50 text-white shadow-[0_0_15px_rgba(168,85,247,0.25)]"
                    : "bg-white/5 border-white/10 text-neutral-400 hover:bg-white/10"
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  isDataOn ? "bg-purple-500 text-black" : "bg-white/10 text-neutral-400"
                }`}>
                  <Signal className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold tracking-tight truncate">Mobile Data</div>
                  <div className="text-[10px] font-mono text-neutral-400 truncate">{isDataOn ? "5G Active" : "Turned Off"}</div>
                </div>
              </button>

              {/* Tile 2: Wi-Fi */}
              <button
                type="button"
                onClick={() => setIsWifiOn(!isWifiOn)}
                className={`p-3 rounded-2xl flex items-center gap-3 transition-all cursor-pointer text-left active:scale-95 border ${
                  isWifiOn
                    ? "bg-purple-600/30 border-purple-500/50 text-white shadow-[0_0_15px_rgba(168,85,247,0.25)]"
                    : "bg-white/5 border-white/10 text-neutral-400 hover:bg-white/10"
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  isWifiOn ? "bg-purple-500 text-black" : "bg-white/10 text-neutral-400"
                }`}>
                  <Wifi className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold tracking-tight truncate">Wi-Fi</div>
                  <div className="text-[10px] font-mono text-neutral-400 truncate">{isWifiOn ? "Vedant-5G" : "Disconnected"}</div>
                </div>
              </button>

              {/* Tile 3: Airplane Mode */}
              <button
                type="button"
                onClick={() => setIsPlaneOn(!isPlaneOn)}
                className={`p-3 rounded-2xl flex items-center gap-3 transition-all cursor-pointer text-left active:scale-95 border ${
                  isPlaneOn
                    ? "bg-amber-600/30 border-amber-500/50 text-white shadow-[0_0_15px_rgba(245,158,11,0.25)]"
                    : "bg-white/5 border-white/10 text-neutral-400 hover:bg-white/10"
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  isPlaneOn ? "bg-amber-400 text-black" : "bg-white/10 text-neutral-400"
                }`}>
                  <Plane className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold tracking-tight truncate">Airplane</div>
                  <div className="text-[10px] font-mono text-neutral-400 truncate">{isPlaneOn ? "Enabled" : "Off"}</div>
                </div>
              </button>

              {/* Tile 4: Dark & Light Mode (FULLY FUNCTIONAL) */}
              <button
                type="button"
                onClick={() => setTheme(isDarkMode ? "light" : "dark")}
                className="p-3 rounded-2xl flex items-center gap-3 transition-all cursor-pointer text-left active:scale-95 border bg-purple-600/30 border-purple-500/50 text-white shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:bg-purple-600/40"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-purple-400 text-black">
                  {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-950" />}
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold tracking-tight truncate">Theme</div>
                  <div className="text-[10px] font-mono text-purple-300 font-bold truncate capitalize">
                    {theme || "Dark"} Mode
                  </div>
                </div>
              </button>

              {/* Tile 5: Bluetooth */}
              <button
                type="button"
                onClick={() => setIsBluetoothOn(!isBluetoothOn)}
                className={`p-3 rounded-2xl flex items-center gap-3 transition-all cursor-pointer text-left active:scale-95 border ${
                  isBluetoothOn
                    ? "bg-purple-600/30 border-purple-500/50 text-white shadow-[0_0_15px_rgba(168,85,247,0.25)]"
                    : "bg-white/5 border-white/10 text-neutral-400 hover:bg-white/10"
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  isBluetoothOn ? "bg-purple-500 text-black" : "bg-white/10 text-neutral-400"
                }`}>
                  <Bluetooth className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold tracking-tight truncate">Bluetooth</div>
                  <div className="text-[10px] font-mono text-neutral-400 truncate">{isBluetoothOn ? "Connected" : "Off"}</div>
                </div>
              </button>

              {/* Tile 6: Flashlight */}
              <button
                type="button"
                onClick={() => setIsTorchOn(!isTorchOn)}
                className={`p-3 rounded-2xl flex items-center gap-3 transition-all cursor-pointer text-left active:scale-95 border ${
                  isTorchOn
                    ? "bg-yellow-500/30 border-yellow-400/50 text-white shadow-[0_0_15px_rgba(234,179,8,0.25)]"
                    : "bg-white/5 border-white/10 text-neutral-400 hover:bg-white/10"
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  isTorchOn ? "bg-yellow-400 text-black" : "bg-white/10 text-neutral-400"
                }`}>
                  <Flashlight className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold tracking-tight truncate">Torch</div>
                  <div className="text-[10px] font-mono text-neutral-400 truncate">{isTorchOn ? "On" : "Off"}</div>
                </div>
              </button>

              {/* Tile 7: Auto-Rotate */}
              <button
                type="button"
                onClick={() => setIsRotateOn(!isRotateOn)}
                className={`p-3 rounded-2xl flex items-center gap-3 transition-all cursor-pointer text-left active:scale-95 border ${
                  isRotateOn
                    ? "bg-purple-600/30 border-purple-500/50 text-white shadow-[0_0_15px_rgba(168,85,247,0.25)]"
                    : "bg-white/5 border-white/10 text-neutral-400 hover:bg-white/10"
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  isRotateOn ? "bg-purple-500 text-black" : "bg-white/10 text-neutral-400"
                }`}>
                  <RotateCw className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold tracking-tight truncate">Auto-Rotate</div>
                  <div className="text-[10px] font-mono text-neutral-400 truncate">{isRotateOn ? "Portrait" : "Locked"}</div>
                </div>
              </button>

              {/* Tile 8: Do Not Disturb */}
              <button
                type="button"
                onClick={() => setIsDndOn(!isDndOn)}
                className={`p-3 rounded-2xl flex items-center gap-3 transition-all cursor-pointer text-left active:scale-95 border ${
                  isDndOn
                    ? "bg-rose-600/30 border-rose-500/50 text-white shadow-[0_0_15px_rgba(244,63,94,0.25)]"
                    : "bg-white/5 border-white/10 text-neutral-400 hover:bg-white/10"
                }`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  isDndOn ? "bg-rose-500 text-white" : "bg-white/10 text-neutral-400"
                }`}>
                  <BellOff className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold tracking-tight truncate">DND</div>
                  <div className="text-[10px] font-mono text-neutral-400 truncate">{isDndOn ? "Priority only" : "Off"}</div>
                </div>
              </button>

            </div>

            {/* 3. Brightness Slider Bar */}
            <div className="px-5 pb-3">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                <Sun className="w-4 h-4 text-purple-300 shrink-0" />
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={brightness}
                  onChange={(e) => setBrightness(Number(e.target.value))}
                  className="w-full accent-purple-400 bg-neutral-800 h-2 rounded-lg cursor-pointer"
                />
                <Sliders className="w-4 h-4 text-neutral-400 shrink-0" />
              </div>
            </div>

            {/* 4. Bottom Close Drag Handle Button */}
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 bg-white/5 hover:bg-white/10 border-t border-white/10 flex flex-col items-center justify-center gap-1 cursor-pointer transition-colors"
            >
              <div className="w-10 h-1 rounded-full bg-white/30" />
              <div className="flex items-center gap-1 text-[10px] font-mono text-neutral-400">
                <ChevronUp className="w-3 h-3" />
                <span>Swipe up or tap to close</span>
              </div>
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
