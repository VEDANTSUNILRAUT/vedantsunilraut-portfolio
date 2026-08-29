"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { getBotResponse, QUICK_QUESTIONS } from "@/constants/botKnowledge";
import { ChatMessage } from "@/components/ui/PortfolioChatbot/PortfolioChatbot.types";

let messageCounter = 0;
function generateUniqueId(prefix: string): string {
  messageCounter += 1;
  return `${prefix}-${Date.now()}-${messageCounter}`;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: "welcome-init",
    sender: "bot",
    text: "Hello! I am Vedant's AI Assistant. Ask me anything about his **Android Engineering**, **Tech Stack**, **Featured Projects**, or **Hiring Availability**.",
    timestamp: "Just now",
    quickReplies: QUICK_QUESTIONS,
  },
];

interface AssistantContextType {
  messages: ChatMessage[];
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  inputMsg: string;
  setInputMsg: (msg: string) => void;
  isTyping: boolean;
  handleSend: (textToSend?: string) => void;
  clearHistory: () => void;
}

const AssistantContext = createContext<AssistantContextType | undefined>(undefined);

export function AssistantProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputMsg, setInputMsg] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = useCallback((textToSend?: string) => {
    const text = (textToSend ?? inputMsg).trim();
    if (!text) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    const userMessage: ChatMessage = {
      id: generateUniqueId("user"),
      sender: "user",
      text,
      timestamp: timeStr,
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
  }, [inputMsg]);

  const clearHistory = useCallback(() => {
    setMessages(INITIAL_MESSAGES);
  }, []);

  return (
    <AssistantContext.Provider
      value={{
        messages,
        setMessages,
        inputMsg,
        setInputMsg,
        isTyping,
        handleSend,
        clearHistory,
      }}
    >
      {children}
    </AssistantContext.Provider>
  );
}

export function useAssistant() {
  const context = useContext(AssistantContext);
  if (!context) {
    throw new Error("useAssistant must be used within an AssistantProvider");
  }
  return context;
}
