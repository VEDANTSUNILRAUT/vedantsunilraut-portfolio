"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, Copy, Check, MessageSquare, Briefcase, Github, Linkedin } from "lucide-react";
import { siteConfig } from "@/constants/site";
import { useClipboard } from "@/hooks/useClipboard";

export default function HirePage() {
  const { copied, copy } = useClipboard();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Android / Full-Stack Collaboration",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Trigger mailto as backup action
      const mailtoUrl = `mailto:${siteConfig.brand.email}?subject=${encodeURIComponent(
        formData.subject + " - From " + formData.name
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.open(mailtoUrl, "_blank");
    }, 600);
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-36 sm:pt-44 pb-28 flex-1 flex flex-col items-center">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-14 text-center max-w-3xl"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono font-medium mb-4">
          <Briefcase className="w-3.5 h-3.5 text-purple-400" />
          <span>SOFTWARE ENGINEER AT LOGITUIT</span>
        </div>

        <h1 className="font-eb-garamond text-4xl sm:text-6xl text-white font-normal tracking-tight mb-4">
          Get in Touch with <span className="italic-gradient-text font-semibold">Vedant Raut</span>
        </h1>

        <p className="font-source-code-pro text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl mx-auto">
          Currently working full-time at Logituit. Open for technical discussions, native Android consultations, open-source projects, and engineering networking.
        </p>
      </motion.div>

      {/* Main 12-Col Grid */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Info & Quick Channels (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Card 1: Direct Email & Copy */}
          <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
              <Mail className="w-6 h-6" />
            </div>

            <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 font-semibold block mb-1">
              DIRECT INBOX
            </span>
            <h3 className="text-xl font-bold text-white tracking-tight mb-2">
              Send an Email
            </h3>
            <p className="text-xs font-source-code-pro text-neutral-400 mb-5 leading-relaxed">
              Reach out directly to my primary mailbox for fast responses.
            </p>

            <button
              onClick={() => copy(siteConfig.brand.email)}
              className="w-full py-3 px-4 rounded-xl bg-white/5 border border-white/15 text-xs font-mono text-neutral-200 hover:border-purple-400/40 hover:bg-purple-500/10 flex items-center justify-between transition-all active:scale-98"
            >
              <span className="truncate">{siteConfig.brand.email}</span>
              {copied ? (
                <div className="flex items-center gap-1 text-emerald-400 font-semibold text-xs shrink-0">
                  <Check className="w-3.5 h-3.5" />
                  <span>Copied!</span>
                </div>
              ) : (
                <Copy className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              )}
            </button>
          </div>

          {/* Card 2: Social Channels Grid */}
          <div className="p-7 rounded-3xl bg-neutral-950/80 border border-white/10 backdrop-blur-xl shadow-2xl space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 font-semibold block">
              ENGINEERING SOCIALS
            </span>

            <div className="grid grid-cols-2 gap-3">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-neutral-300 hover:text-white hover:border-purple-400/40 transition-all active:scale-95 text-center"
              >
                <Github className="w-5 h-5 mb-1.5 text-purple-400" />
                <span className="text-[10px] font-mono">GitHub</span>
              </a>

              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center text-neutral-300 hover:text-white hover:border-purple-400/40 transition-all active:scale-95 text-center"
              >
                <Linkedin className="w-5 h-5 mb-1.5 text-blue-400" />
                <span className="text-[10px] font-mono">LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Message Form (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-7 bg-neutral-950/80 border border-white/10 backdrop-blur-xl rounded-3xl p-7 sm:p-10 shadow-2xl"
        >
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shadow-xl">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Message Dispatched!
              </h3>
              <p className="font-source-code-pro text-xs sm:text-sm text-neutral-300 max-w-md leading-relaxed">
                Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your message draft has been initialized in your mail client and sent to <span className="text-purple-400 font-semibold">{siteConfig.brand.email}</span>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-white/5 border border-white/15 text-xs font-mono text-neutral-300 hover:text-white transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="w-4 h-4 text-purple-400" />
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Direct Contact Form
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-purple-400 transition-colors font-sans"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-purple-400 transition-colors font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                  Subject / Topic
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-purple-400 transition-colors font-sans"
                >
                  <option value="Android / Full-Stack Collaboration">Android / Full-Stack Collaboration</option>
                  <option value="Kotlin Multiplatform (KMP) Discussion">Kotlin Multiplatform (KMP) Discussion</option>
                  <option value="Technical Networking & Meetups">Technical Networking & Meetups</option>
                  <option value="General Professional Inquiry">General Professional Inquiry</option>
                </select>
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 block mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details about your idea, project, or question..."
                  className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-purple-400 transition-colors font-sans resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-full bg-white text-black font-sans font-medium text-sm hover:bg-neutral-200 transition-all shadow-xl active:scale-98 flex items-center justify-center gap-2 group disabled:opacity-50"
              >
                {loading ? (
                  <span className="font-mono text-xs animate-pulse">Dispatching...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
