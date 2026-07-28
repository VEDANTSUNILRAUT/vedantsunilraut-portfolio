export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  quickReplies?: string[];
}

export interface PortfolioChatbotProps {
  className?: string;
}
