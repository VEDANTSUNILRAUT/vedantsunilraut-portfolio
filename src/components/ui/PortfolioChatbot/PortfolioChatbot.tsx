"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, User, ChevronRight } from "lucide-react";
import { ChatMessage, PortfolioChatbotProps } from "./PortfolioChatbot.types";
import { getBotResponse, QUICK_QUESTIONS } from "@/constants/botKnowledge";

let messageCounter = 0;
function generateUniqueId(prefix: string): string {
  messageCounter += 1;
  return `${prefix}-${messageCounter}`;
}


{/* Infinite Design Monogram Bot Logo SVG */}
function ExecutiveBotMonogramLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} filter drop-shadow-[0_2px_8px_rgba(56,189,248,0.5)]`}
    >
      <defs>
        <linearGradient id="bot-head-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--primary-start)" />
          <stop offset="0.5" stopColor="var(--primary-mid)" />
          <stop offset="1" stopColor="var(--primary-end)" />
        </linearGradient>
        <linearGradient id="bot-visor-grad" x1="16" y1="26" x2="48" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--primary-end)" />
          <stop offset="1" stopColor="var(--accent-cyan)" />
        </linearGradient>
        <linearGradient id="bot-infinity-grad" x1="8" y1="16" x2="56" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--accent-amber)" />
          <stop offset="0.5" stopColor="var(--primary-start)" />
          <stop offset="1" stopColor="var(--primary-end)" />
        </linearGradient>
      </defs>

      {/* Infinite Monogram Orbit Loop */}
      <path
        d="M20 20C14 20 10 24 10 32C10 40 14 44 20 44C28 44 36 20 44 20C50 20 54 24 54 32C54 40 50 44 44 44C36 44 28 20 20 20Z"
        stroke="url(#bot-infinity-grad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="opacity-60"
      />

      {/* Cybernetic Bot Head Contour */}
      <path
        d="M18 18L32 10L46 18V36L32 50L18 36V18Z"
        fill="#09090b"
        stroke="url(#bot-head-grad)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Bot Antenna Beam */}
      <circle cx="32" cy="7" r="2.5" fill="#f59e0b" className="animate-pulse" />
      <line x1="32" y1="7" x2="32" y2="10" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />

      {/* Neon Cyber Visor */}
      <rect
        x="20"
        y="25"
        width="24"
        height="9"
        rx="4.5"
        fill="url(#bot-visor-grad)"
      />

      {/* Dual Eye LED Sensors */}
      <circle cx="27" cy="29.5" r="1.8" fill="#ffffff" />
      <circle cx="37" cy="29.5" r="1.8" fill="#ffffff" />

      {/* Monogram V Chin Cutout */}
      <path
        d="M26 39L32 45L38 39"
        stroke="url(#bot-head-grad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

{/* Fusion Emblem: Embossed Titanium Shield + 3D Geometric Infinite Monogram Bot Logo */}
function VedantExecutiveVEmblem({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-7 h-7 rounded-full",
    md: "w-10 h-10 rounded-full",
    lg: "w-12 h-12 rounded-full",
  };

  const logoSizes = {
    sm: "w-4.5 h-4.5",
    md: "w-6 h-6",
    lg: "w-7.5 h-7.5",
  };

  return (
    <div className={`relative flex items-center justify-center select-none group shrink-0 ${sizeClasses[size]}`}>
      {/* Metallic Titanium Halo Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-tr from-neutral-600 via-purple-500/30 to-amber-500/30 rounded-full blur-[3px] opacity-50 group-hover:opacity-100 transition-opacity" />
      
      {/* Stealth Dark Executive Container */}
      <div className="relative w-full h-full bg-neutral-950 border border-white/25 rounded-full flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] overflow-hidden">
        {/* Subtle Geometric Mesh Texture */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:6px_6px]" />

        {/* Infinite Monogram Bot Logo */}
        <ExecutiveBotMonogramLogo className={logoSizes[size]} />
        
        {/* Top Metallic Border Highlight */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      </div>
    </div>
  );
}

export function PortfolioChatbot({ className = "" }: PortfolioChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "💼 **VEDANT EXECUTIVE AI ASSISTANT**\n\nWelcome! How may I assist you with Vedant's **Android Engineering**, **Architecture Stack**, **Featured Projects**, or **Hiring Availability**?",
      timestamp: "Just now",
      quickReplies: QUICK_QUESTIONS,
    },
  ]);

  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping, isOpen]);

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputMsg;
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: generateUniqueId("user"),
      sender: "user",
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) setInputMsg("");
    setIsTyping(true);

    setTimeout(() => {
      const responseData = getBotResponse(text);
      const botMessage: ChatMessage = {
        id: generateUniqueId("bot"),
        sender: "bot",
        text: responseData.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        quickReplies: responseData.quickReplies,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 550);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const renderFormattedText = (content: string) => {
    const lines = content.split("\n");
    return lines.map((line, idx) => {
      if (!line.trim()) return <div key={idx} className="h-1.5" />;
      
      const parts = line.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
      const formattedLine = parts.map((part, pIdx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={pIdx} className="font-semibold text-amber-200">
              {part.slice(2, -2)}
            </strong>
          );
        }
        const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
        if (linkMatch) {
          return (
            <a
              key={pIdx}
              href={linkMatch[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300 underline hover:text-cyan-100 font-medium transition-colors"
            >
              {linkMatch[1]}
            </a>
          );
        }
        return part;
      });

      return (
        <p key={idx} className="leading-relaxed text-xs sm:text-sm my-0.5">
          {formattedLine}
        </p>
      );
    });
  };

  return (
    <div className={`fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end ${className}`}>
      
      {/* Stealth Executive Glass Chat Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="w-[92vw] sm:w-96 h-[520px] mb-4 bg-neutral-950/95 border border-white/20 backdrop-blur-2xl rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-5 py-3.5 bg-neutral-900/90 border-b border-white/10 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                <VedantExecutiveVEmblem size="md" />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-sm font-bold text-white tracking-tight">VEDANT AI</h3>
                    <span className="px-1.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/30 text-[9px] font-mono text-amber-300 font-semibold">
                      EXECUTIVE AGENT
                    </span>
                  </div>
                  <p className="text-[10px] font-mono text-neutral-400">🟢 ONLINE • PORTFOLIO AGENT</p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Feed */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 font-sans scrollbar-thin scrollbar-thumb-white/10">
              {messages.map((msg) => (
                <div key={msg.id} className="flex flex-col space-y-2">
                  <div
                    className={`flex items-start gap-2.5 ${
                      msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    {msg.sender === "user" ? (
                      <div className="w-7.5 h-7.5 rounded-lg bg-white text-black font-bold flex items-center justify-center text-xs shrink-0 mt-0.5 shadow-md">
                        <User className="w-4 h-4" />
                      </div>
                    ) : (
                      <VedantExecutiveVEmblem size="sm" />
                    )}

                    <div
                      className={`max-w-[82%] px-4 py-3 rounded-xl text-xs sm:text-sm shadow-md ${
                        msg.sender === "user"
                          ? "bg-white text-black font-semibold rounded-tr-none"
                          : "bg-neutral-900/90 border border-white/10 text-neutral-200 rounded-tl-none font-sans"
                      }`}
                    >
                      {renderFormattedText(msg.text)}
                      <span className="text-[9px] font-mono text-neutral-400 mt-1 block text-right opacity-70">
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>

                  {/* Quick Suggestion Pills */}
                  {msg.quickReplies && msg.quickReplies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pl-9 mt-1">
                      {msg.quickReplies.map((reply, qIdx) => (
                        <button
                          key={qIdx}
                          onClick={() => handleSend(reply)}
                          className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-amber-400/50 text-[11px] font-mono text-neutral-300 hover:text-white transition-all active:scale-95 text-left flex items-center gap-1 group"
                        >
                          <span>{reply}</span>
                          <ChevronRight className="w-3 h-3 text-neutral-500 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2.5">
                  <VedantExecutiveVEmblem size="sm" />
                  <div className="px-4 py-2.5 rounded-xl bg-neutral-900/90 border border-white/10 rounded-tl-none flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-neutral-900/90 border-t border-white/10 flex items-center gap-2">
              <input
                type="text"
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask Executive AI..."
                className="flex-1 px-4 py-2.5 rounded-xl bg-black border border-white/15 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400/60 font-sans"
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputMsg.trim()}
                className="w-9 h-9 rounded-xl bg-white hover:bg-neutral-200 disabled:opacity-40 text-black font-bold flex items-center justify-center transition-colors active:scale-95 shadow-md shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Titanium Circular "V" Executive Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Executive AI Assistant"
        className="relative group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-neutral-950 border border-white/25 text-white shadow-[0_0_35px_rgba(255,255,255,0.15)] backdrop-blur-2xl hover:border-amber-400/70 transition-all duration-300 active:scale-95 cursor-pointer"
      >
        {/* Outer Halo Glow */}
        <div className="absolute -inset-0.5 bg-gradient-to-tr from-neutral-600 via-amber-500/30 to-purple-500/30 rounded-full blur-[3px] opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />

        {/* Inner Circle Content */}
        <div className="relative w-full h-full rounded-full bg-neutral-950 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="relative flex items-center justify-center"
              >
                <ExecutiveBotMonogramLogo className="w-6.5 h-6.5 sm:w-7.5 sm:h-7.5" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hover Tooltip Label */}
        <div className="absolute right-full mr-3 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 translate-x-2 group-hover:translate-x-0 whitespace-nowrap hidden sm:block">
          <div className="px-3 py-1.5 rounded-xl bg-neutral-900/95 border border-white/20 text-xs font-mono font-semibold text-white shadow-xl flex items-center gap-1.5 backdrop-blur-md">
            <span>ASK VEDANT AI</span>
            <Sparkles className="w-3 h-3 text-amber-300" />
          </div>
        </div>

        {/* Online Status Dot Indicator */}
        {!isOpen && (
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-black shadow-[0_0_8px_var(--accent-emerald)]" />
        )}
      </button>

    </div>
  );
}
