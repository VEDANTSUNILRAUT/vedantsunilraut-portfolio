"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Check, Smartphone, Layers, Sparkles, Send } from "lucide-react";
import { siteConfig } from "@/constants/site";

const CONSULTATION_TOPICS = [
  { id: "android", name: "Native Android & Jetpack Compose", icon: Smartphone },
  { id: "kmp", name: "Kotlin Multiplatform (KMP) Architecture", icon: Layers },
  { id: "fullstack", name: "Next.js & Web System Architecture", icon: Sparkles },
];

export default function BookPage() {
  const [selectedTopic, setSelectedTopic] = useState("android");
  const [duration, setDuration] = useState("30");

  const handleBooking = () => {
    const topicObj = CONSULTATION_TOPICS.find((t) => t.id === selectedTopic);
    const subject = `1-on-1 Session: ${topicObj?.name || "Tech Discussion"} (${duration} mins)`;
    const mailtoUrl = `mailto:${siteConfig.brand.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Hi Vedant,\n\nI would like to book a ${duration}-minute consultation session regarding ${topicObj?.name}.\n\nPlease let me know your preferred availability!`
    )}`;
    window.open(mailtoUrl, "_blank");
  };

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-36 sm:pt-44 pb-28 flex-1 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full bg-neutral-950/80 border border-white/10 backdrop-blur-xl rounded-3xl p-7 sm:p-12 shadow-2xl flex flex-col items-center text-center space-y-8"
      >
        <div className="w-14 h-14 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center text-fuchsia-400">
          <Calendar className="w-7 h-7" />
        </div>

        <div>
          <span className="text-xs uppercase tracking-widest text-fuchsia-400 font-mono font-semibold mb-2 block">
            1-ON-1 CONSULTATION & STRATEGY
          </span>
          <h1 className="font-eb-garamond text-4xl sm:text-6xl text-white font-normal tracking-tight">
            Schedule a <span className="italic-gradient-text font-semibold">1-on-1 Session</span>
          </h1>
          <p className="font-source-code-pro text-sm sm:text-base text-neutral-300 max-w-xl mx-auto mt-3 leading-relaxed">
            Select a topic and duration for technical discussions, mobile architecture reviews, or project consultations.
          </p>
        </div>

        {/* Topic Selection Cards */}
        <div className="w-full space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block text-left">
            1. Select Session Topic
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {CONSULTATION_TOPICS.map((topic) => {
              const Icon = topic.icon;
              const isSelected = selectedTopic === topic.id;
              return (
                <button
                  key={topic.id}
                  onClick={() => setSelectedTopic(topic.id)}
                  className={`p-4 rounded-2xl border text-left flex flex-col justify-between space-y-3 transition-all ${
                    isSelected
                      ? "bg-purple-600/20 border-purple-400 text-white shadow-lg shadow-purple-500/15"
                      : "bg-white/5 border-white/10 text-neutral-300 hover:border-purple-400/40 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Icon className={`w-5 h-5 ${isSelected ? "text-purple-300" : "text-neutral-400"}`} />
                    {isSelected && <Check className="w-4 h-4 text-purple-300" />}
                  </div>
                  <span className="text-xs font-bold leading-snug">{topic.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Duration Selection */}
        <div className="w-full space-y-3">
          <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block text-left">
            2. Select Session Duration
          </span>
          <div className="flex gap-3">
            <button
              onClick={() => setDuration("30")}
              className={`flex-1 py-3 px-4 rounded-xl border text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all ${
                duration === "30"
                  ? "bg-fuchsia-600 text-white border-fuchsia-400 shadow-lg shadow-fuchsia-500/20"
                  : "bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10"
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>30 Minutes Strategy</span>
            </button>
            <button
              onClick={() => setDuration("45")}
              className={`flex-1 py-3 px-4 rounded-xl border text-xs font-mono font-semibold flex items-center justify-center gap-2 transition-all ${
                duration === "45"
                  ? "bg-fuchsia-600 text-white border-fuchsia-400 shadow-lg shadow-fuchsia-500/20"
                  : "bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10"
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>45 Minutes Deep Dive</span>
            </button>
          </div>
        </div>

        {/* Schedule Trigger Button */}
        <button
          onClick={handleBooking}
          className="w-full max-w-md py-4 px-8 rounded-full bg-white text-black font-sans font-medium text-sm hover:bg-neutral-200 transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 group"
        >
          <span>Confirm & Request Session</span>
          <Send className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
        </button>

      </motion.div>
    </section>
  );
}
