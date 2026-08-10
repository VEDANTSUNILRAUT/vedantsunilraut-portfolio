"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, User, ArrowUpRight } from "lucide-react";
import { ChatMessage, PortfolioChatbotProps } from "./PortfolioChatbot.types";
import { getBotResponse, QUICK_QUESTIONS } from "@/constants/botKnowledge";

let messageCounter = 0;
function generateUniqueId(prefix: string): string {
  messageCounter += 1;
  return `${prefix}-${messageCounter}`;
}

{/* Minimalist Professional AI Avatar */}
function AiAvatar({ size = "md" }: { size?: "sm" | "md" }) {
  const containerClasses = size === "sm" ? "w-6 h-6 rounded-lg" : "w-8 h-8 rounded-xl";
  const iconClasses = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";

  return (
    <div className={`relative flex items-center justify-center shrink-0 bg-gradient-to-br from-purple-500/20 via-neutral-900 to-neutral-950 border border-purple-500/30 text-purple-300 shadow-sm ${containerClasses}`}>
      <Sparkles className={iconClasses} />
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
      text: "Hello! I am Vedant's AI Assistant. Ask me anything about his **Android Engineering**, **Tech Stack**, **Featured Projects**, or **Hiring Availability**.",
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
    }, 450);
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
            <strong key={pIdx} className="font-semibold text-purple-200">
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
              className="text-purple-300 hover:text-purple-100 underline font-medium transition-colors"
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
      
      {/* Sleek Minimalist Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-[92vw] sm:w-[380px] h-[500px] mb-4 bg-neutral-950/95 border border-white/15 backdrop-blur-2xl rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3 bg-neutral-900/80 border-b border-white/10 flex items-center justify-between z-10">
              <div className="flex items-center gap-2.5">
                <AiAvatar size="md" />
                <div>
                  <h3 className="text-sm font-semibold text-white tracking-tight">Vedant Assistant</h3>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
                className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages Feed */}
            <div 
              data-lenis-prevent
              className="flex-1 p-4 overflow-y-auto space-y-4 font-sans custom-scrollbar"
            >
              {messages.map((msg) => (
                <div key={msg.id} className="flex flex-col space-y-2">
                  <div
                    className={`flex items-start gap-2.5 ${
                      msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    {msg.sender === "user" ? (
                      <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/15 text-white flex items-center justify-center text-xs shrink-0 mt-0.5">
                        <User className="w-3.5 h-3.5" />
                      </div>
                    ) : (
                      <AiAvatar size="sm" />
                    )}

                    <div
                      className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-xs sm:text-sm shadow-sm ${
                        msg.sender === "user"
                          ? "bg-purple-600 text-white rounded-tr-xs font-medium"
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
                    <div className="flex flex-wrap gap-1.5 pl-8.5 mt-1">
                      {msg.quickReplies.map((reply, qIdx) => (
                        <button
                          key={qIdx}
                          onClick={() => handleSend(reply)}
                          className="px-3 py-1 rounded-full bg-white/5 hover:bg-purple-500/15 border border-white/10 hover:border-purple-500/40 text-[11px] text-neutral-300 hover:text-white transition-all active:scale-95 text-left flex items-center gap-1 group"
                        >
                          <span>{reply}</span>
                          <ArrowUpRight className="w-3 h-3 text-neutral-500 group-hover:text-purple-300 transition-colors" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2.5">
                  <AiAvatar size="sm" />
                  <div className="px-3.5 py-2.5 rounded-2xl bg-neutral-900/90 border border-white/10 rounded-tl-xs flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-bounce [animation-delay:0.3s]" />
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-neutral-900/80 border-t border-white/10 flex items-center gap-2">
              <input
                type="text"
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a question..."
                className="flex-1 px-3.5 py-2 rounded-full bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500/60 font-sans transition-colors"
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputMsg.trim()}
                aria-label="Send message"
                className="w-8 h-8 rounded-full bg-purple-600 hover:bg-purple-500 disabled:opacity-30 disabled:hover:bg-purple-600 text-white flex items-center justify-center transition-colors active:scale-95 shadow-md shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimalist Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Assistant"
        className="relative group flex items-center justify-center w-12 h-12 rounded-full bg-neutral-950 border border-white/20 text-white shadow-xl backdrop-blur-xl hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-300 active:scale-95 cursor-pointer"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center justify-center"
            >
              <X className="w-5 h-5 text-neutral-300" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: [1, 1.2, 1.05, 1.18, 1],
                rotate: [0, -16, 16, -12, 12, -6, 6, 0],
                x: [0, -2, 2, -2, 2, 0],
              }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                repeatDelay: 1.8,
                ease: "easeInOut",
              }}
              className="flex items-center justify-center"
            >
              <Sparkles className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Attention-grabbing Animated "Ask me" Tooltip (Top Positioned) */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 5, scale: 0.9 }}
              animate={{
                opacity: [0, 1, 1, 1, 1, 0],
                y: [5, 0, -3, 2, -2, 1, 0, 0],
                scale: [0.92, 1.05, 1, 1.03, 1, 0.95],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                repeatDelay: 2.2,
                ease: "easeInOut",
              }}
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(true);
              }}
              className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap cursor-pointer z-50 pointer-events-auto"
            >
              <div className="relative px-2.5 py-1 rounded-lg bg-neutral-900/95 border border-purple-500/40 text-[10px] sm:text-[11px] font-sans font-medium text-purple-200 shadow-[0_0_20px_rgba(168,85,247,0.3)] backdrop-blur-md flex items-center hover:border-purple-400 hover:scale-105 transition-all">
                <span>Ask me</span>
                {/* Pointer arrow pointing down to button */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900 border-r border-b border-purple-500/40 rotate-45" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </button>

    </div>
  );
}
