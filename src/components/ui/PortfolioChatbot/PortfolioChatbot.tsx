"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, User, Shield, ChevronRight } from "lucide-react";
import { ChatMessage, PortfolioChatbotProps } from "./PortfolioChatbot.types";
import { getBotResponse, QUICK_QUESTIONS } from "@/constants/botKnowledge";

{/* Fusion Emblem: Embossed Titanium Shield + 3D Geometric Wireframe "V" */}
function VedantExecutiveVEmblem({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const sizeClasses = {
    sm: "w-7 h-7 text-xs rounded-lg",
    md: "w-9.5 h-9.5 text-sm rounded-xl",
    lg: "w-12 h-12 text-lg rounded-2xl",
  };

  return (
    <div className={`relative flex items-center justify-center select-none group ${sizeClasses[size]}`}>
      {/* Metallic Titanium Halo Glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-tr from-neutral-600 via-purple-500/30 to-amber-500/30 rounded-xl blur-[3px] opacity-50 group-hover:opacity-100 transition-opacity" />
      
      {/* Stealth Dark Executive Container */}
      <div className="relative w-full h-full bg-neutral-950 border border-white/25 rounded-xl flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] overflow-hidden">
        {/* Subtle Geometric Mesh Texture */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:6px_6px]" />

        {/* Embossed Metallic 3D Wireframe "V" Monogram */}
        <div className="relative flex items-center justify-center z-10 font-mono font-black tracking-tighter">
          <span className="font-eb-garamond italic font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 text-lg leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            V
          </span>
          {/* Subtle Golden/Purple Geometric Sparkle Accent */}
          <Sparkles className="absolute -top-1 -right-1.5 w-2.5 h-2.5 text-amber-300 animate-pulse" />
        </div>
        
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
      id: `user-${Date.now()}`,
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
        id: `bot-${Date.now()}`,
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
      
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const formattedLine = parts.map((part, pIdx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={pIdx} className="font-semibold text-amber-200">
              {part.slice(2, -2)}
            </strong>
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
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col items-end ${className}`}>
      
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

      {/* Titanium Wireframe "V" Executive Trigger Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group flex items-center gap-3 px-4 py-3 rounded-xl bg-neutral-950 border border-white/25 text-white shadow-[0_0_35px_rgba(255,255,255,0.12)] backdrop-blur-2xl hover:border-amber-400/60 transition-all duration-300 active:scale-95 cursor-pointer"
      >
        <VedantExecutiveVEmblem size="md" />

        <div className="flex flex-col items-start text-left">
          <span className="text-xs font-bold text-white tracking-tight flex items-center gap-1.5">
            ASK VEDANT AI
            <Sparkles className="w-3 h-3 text-amber-300" />
          </span>
          <span className="text-[10px] font-mono text-neutral-400">EXECUTIVE BOT</span>
        </div>

        {/* Ambient Pulsing Aura */}
        <span className="absolute -inset-0.5 rounded-xl bg-white/10 animate-pulse pointer-events-none" />

        {/* Status Indicator */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-black shadow-[0_0_8px_#10b981]" />
        )}
      </button>

    </div>
  );
}
