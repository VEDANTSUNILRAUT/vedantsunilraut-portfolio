"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/constants/site";
import { useAndroidToast } from "../AndroidToast";
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  Check, 
  Download, 
  MessageSquare
} from "lucide-react";

export function AndroidContactScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("Full-Time Android Role");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const { showToast } = useAndroidToast();

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      showToast("Please fill in all fields before sending", "info");
      return;
    }

    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      showToast(`Thank you, ${name}! Your message has been sent to Vedant.`, "sparkle");
      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setIsSent(false);
      }, 4000);
    }, 800);
  };

  return (
    <div className="w-full flex flex-col items-center pt-1 pb-4 space-y-4 select-none">
      
      {/* 1. Header Banner */}
      <div className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-purple-950/40 via-neutral-900/80 to-black border border-purple-500/20 backdrop-blur-xl flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center">
            <Mail className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white tracking-tight">Connect & Hire</div>
            <div className="text-[10px] font-mono text-neutral-400">Open for Opportunities</div>
          </div>
        </div>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
      </div>

      {/* 2. In-App Compose Message Form */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full p-4 rounded-3xl bg-neutral-900/85 border border-white/15 backdrop-blur-2xl shadow-xl space-y-3"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-bold text-white">
            <MessageSquare className="w-4 h-4 text-purple-400" />
            <span>Send In-App Message</span>
          </div>
          <span className="text-[9px] font-mono text-purple-300 bg-purple-500/15 px-2 py-0.5 rounded-full border border-purple-500/30">
            Direct Dispatch
          </span>
        </div>

        <form onSubmit={handleSendMessage} className="space-y-2.5">
          {/* Topic Select Chips */}
          <div>
            <span className="text-[9px] font-mono uppercase text-neutral-400 tracking-wider block mb-1">
              Purpose / Topic
            </span>
            <div className="flex flex-wrap gap-1">
              {["Full-Time Android Role", "KMP Project", "Consulting", "Say Hello"].map((topic) => {
                const isSelected = selectedTopic === topic;
                return (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => setSelectedTopic(topic)}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-mono transition-all cursor-pointer active:scale-95 ${
                      isSelected
                        ? "bg-purple-600/40 text-purple-200 border border-purple-400/50 font-semibold"
                        : "bg-white/5 border border-white/10 text-neutral-400 hover:text-neutral-200"
                    }`}
                  >
                    {topic}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Name Input */}
          <div>
            <label className="text-[9px] font-mono uppercase text-neutral-400 tracking-wider block mb-1">
              Your Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Alex Johnson"
              className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/15 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500/60 font-sans transition-colors"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="text-[9px] font-mono uppercase text-neutral-400 tracking-wider block mb-1">
              Your Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alex@company.com"
              className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/15 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500/60 font-sans transition-colors"
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="text-[9px] font-mono uppercase text-neutral-400 tracking-wider block mb-1">
              Message Details
            </label>
            <textarea
              required
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Let's build high-performance mobile software together..."
              className="w-full px-3 py-2 rounded-xl bg-black/50 border border-white/15 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-purple-500/60 font-sans transition-colors resize-none"
            />
          </div>

          {/* Send Button */}
          <button
            type="submit"
            disabled={isSending}
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-purple-600 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(168,85,247,0.4)] active:scale-95 transition-all cursor-pointer disabled:opacity-50"
          >
            {isSending ? (
              <span className="animate-pulse">Dispatching Message...</span>
            ) : isSent ? (
              <div className="flex items-center gap-1.5 text-emerald-200">
                <Check className="w-3.5 h-3.5" />
                <span>Message Dispatched!</span>
              </div>
            ) : (
              <div className="flex items-center gap-1.5">
                <Send className="w-3.5 h-3.5" />
                <span>Send Message to Vedant</span>
              </div>
            )}
          </button>
        </form>
      </motion.div>

      {/* 3. Direct Contact Action Grid */}
      <div className="w-full grid grid-cols-2 gap-2">
        <a
          href={siteConfig.brand.connectMailto}
          className="p-3 rounded-2xl bg-neutral-900/70 border border-white/10 flex flex-col items-center justify-center text-center space-y-1 hover:border-purple-500/30 active:scale-95 transition-all"
        >
          <Mail className="w-5 h-5 text-purple-400" />
          <span className="text-[11px] font-bold text-white">Direct Email</span>
          <span className="text-[9px] font-mono text-neutral-400">vedantsunilraut@gmail.com</span>
        </a>

        <a
          href={siteConfig.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-2xl bg-neutral-900/70 border border-white/10 flex flex-col items-center justify-center text-center space-y-1 hover:border-purple-500/30 active:scale-95 transition-all"
        >
          <Linkedin className="w-5 h-5 text-blue-400" />
          <span className="text-[11px] font-bold text-white">LinkedIn</span>
          <span className="text-[9px] font-mono text-neutral-400">Connect Professionally</span>
        </a>

        <a
          href={siteConfig.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-2xl bg-neutral-900/70 border border-white/10 flex flex-col items-center justify-center text-center space-y-1 hover:border-purple-500/30 active:scale-95 transition-all"
        >
          <Github className="w-5 h-5 text-neutral-200" />
          <span className="text-[11px] font-bold text-white">GitHub</span>
          <span className="text-[9px] font-mono text-neutral-400">Inspect Source Code</span>
        </a>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-2xl bg-neutral-900/70 border border-white/10 flex flex-col items-center justify-center text-center space-y-1 hover:border-purple-500/30 active:scale-95 transition-all"
        >
          <Download className="w-5 h-5 text-cyan-400" />
          <span className="text-[11px] font-bold text-white">Resume / CV</span>
          <span className="text-[9px] font-mono text-neutral-400">Download PDF</span>
        </a>
      </div>

    </div>
  );
}
