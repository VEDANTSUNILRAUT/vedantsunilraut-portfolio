"use client";

import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  X, 
  Send, 
  User, 
  Bot, 
  ArrowUpRight 
} from "lucide-react";
import { useAssistant } from "@/context/AssistantContext";

interface AndroidAssistantSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AndroidAssistantSheet({ isOpen, onClose }: AndroidAssistantSheetProps) {
  const { messages, inputMsg, setInputMsg, isTyping, handleSend } = useAssistant();
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen, messages, isTyping]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const renderFormattedText = (text: string) => {
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      const boldParts = line.split(/(\*\*.*?\*\*)/g);
      const formattedLine = boldParts.map((part, pIdx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={pIdx} className="text-purple-300 font-semibold">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      return (
        <p key={idx} className="leading-relaxed text-xs my-0.5 font-sans">
          {formattedLine}
        </p>
      );
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="absolute inset-0 z-50 flex flex-col justify-end bg-black/70 backdrop-blur-md">
          {/* Animated Android Assistant Bottom Sheet */}
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 420, damping: 32 }}
            className="w-full h-[88%] bg-neutral-950 border-t border-purple-500/30 rounded-t-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Top Drag Handle & Header */}
            <div className="px-4 pt-3 pb-2.5 bg-neutral-900/90 border-b border-white/10 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 via-fuchsia-600 to-indigo-600 flex items-center justify-center text-white shadow-md">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="text-xs font-bold text-white tracking-tight">Android AI Assistant</h3>
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 font-mono">
                      Gemini
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-neutral-400 block">
                    Ask about Vedant & Logituit
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close Assistant"
                className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages Feed */}
            <div 
              data-lenis-prevent
              className="flex-1 p-3.5 overflow-y-auto space-y-3 font-sans custom-scrollbar min-h-0"
            >
              {messages.map((msg) => (
                <div key={msg.id} className="flex flex-col space-y-1.5">
                  <div
                    className={`flex items-start gap-2 ${
                      msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    {msg.sender === "user" ? (
                      <div className="w-6 h-6 rounded-lg bg-white/15 text-white flex items-center justify-center text-xs shrink-0 mt-0.5">
                        <User className="w-3.5 h-3.5" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-lg bg-purple-600/30 border border-purple-500/40 text-purple-300 flex items-center justify-center text-xs shrink-0 mt-0.5">
                        <Bot className="w-3.5 h-3.5" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] px-3 py-2 rounded-2xl text-xs shadow-sm ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-tr-xs font-medium"
                          : "bg-neutral-900/90 border border-white/10 text-neutral-200 rounded-tl-xs"
                      }`}
                    >
                      {renderFormattedText(msg.text)}
                      <span className="text-[9px] text-neutral-400 mt-1 block text-right opacity-60">
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>

                  {/* Quick Suggestion Pills */}
                  {msg.quickReplies && msg.quickReplies.length > 0 && (
                    <div className="flex flex-wrap gap-1 pl-8 mt-1">
                      {msg.quickReplies.map((reply, qIdx) => (
                        <button
                          key={qIdx}
                          onClick={() => handleSend(reply)}
                          className="px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/40 text-[10px] font-mono text-neutral-300 hover:text-white transition-all active:scale-95 text-left flex items-center gap-1 cursor-pointer"
                        >
                          <span>{reply}</span>
                          <ArrowUpRight className="w-2.5 h-2.5 text-neutral-500" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-purple-600/30 border border-purple-500/40 text-purple-300 flex items-center justify-center text-xs shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="px-3 py-2 rounded-2xl bg-neutral-900/90 border border-white/10 rounded-tl-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0.3s]" />
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-2.5 bg-neutral-900/90 border-t border-white/10 flex items-center gap-2 shrink-0">
              <input
                type="text"
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask Android Assistant..."
                className="flex-1 px-3 py-2 rounded-full bg-black/60 border border-white/15 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500/60 font-sans transition-colors"
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputMsg.trim()}
                aria-label="Send query"
                className="w-8 h-8 rounded-full bg-purple-600 hover:bg-purple-500 disabled:opacity-30 text-white flex items-center justify-center transition-colors active:scale-95 shadow-md shrink-0 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
