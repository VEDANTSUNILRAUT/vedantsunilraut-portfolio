"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/constants/site";
import { SparkleBurstButtonProps } from "./SparkleBurstButton.types";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  decay: number;
  color: string;
  rotation: number;
  rotSpeed: number;
  type: "star4" | "star8" | "diamond" | "circle";
}

interface Shockwave {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

export function SparkleBurstButton({
  text = siteConfig.hero.primaryCta.text,
  href = siteConfig.hero.primaryCta.href,
  className = "",
  onClick,
}: SparkleBurstButtonProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const triggerSparkleBlast = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Ensure canvas dimensions match viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = [
      "#a855f7", // Violet 500
      "#c084fc", // Purple 400
      "#e879f9", // Fuchsia 400
      "#d8b4fe", // Purple 300
      "#9333ea", // Purple 600
      "#38bdf8", // Sky 400 accent
      "#ffffff", // White star glow
    ];

    const types: ("star4" | "star8" | "diamond" | "circle")[] = [
      "star4",
      "star8",
      "diamond",
      "circle",
    ];

    // Spawn 45 explosive particles radially from click point
    const particles: Particle[] = Array.from({ length: 45 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 9 + 4; // Velocity outward
      return {
        x: clientX,
        y: clientY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 8 + 5,
        alpha: 1,
        decay: Math.random() * 0.02 + 0.015,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.25,
        type: types[Math.floor(Math.random() * types.length)],
      };
    });

    // Expanding violet shockwave ring
    const shockwaves: Shockwave[] = [
      {
        x: clientX,
        y: clientY,
        radius: 10,
        maxRadius: 90,
        alpha: 0.9,
      },
      {
        x: clientX,
        y: clientY,
        radius: 5,
        maxRadius: 130,
        alpha: 0.6,
      },
    ];

    let animId: number;

    const drawStar = (
      c: CanvasRenderingContext2D,
      cx: number,
      cy: number,
      r: number,
      points: number
    ) => {
      c.beginPath();
      for (let i = 0; i < points * 2; i++) {
        const radius = i % 2 === 0 ? r : r * 0.35;
        const angle = (i * Math.PI) / points;
        const x = cx + radius * Math.sin(angle);
        const y = cy - radius * Math.cos(angle);
        if (i === 0) c.moveTo(x, y);
        else c.lineTo(x, y);
      }
      c.closePath();
      c.stroke();
    };

    const drawDiamond = (c: CanvasRenderingContext2D, cx: number, cy: number, r: number) => {
      c.beginPath();
      c.moveTo(cx, cy - r * 1.2);
      c.lineTo(cx + r * 0.65, cy);
      c.lineTo(cx, cy + r * 1.2);
      c.lineTo(cx - r * 0.65, cy);
      c.closePath();
      c.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let aliveCount = 0;

      // 1. Draw shockwave rings
      shockwaves.forEach((wave) => {
        if (wave.alpha > 0.01) {
          wave.radius += (wave.maxRadius - wave.radius) * 0.15;
          wave.alpha *= 0.88;

          ctx.save();
          ctx.beginPath();
          ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(168, 85, 247, ${wave.alpha})`;
          ctx.lineWidth = 2;
          ctx.shadowColor = "#a855f7";
          ctx.shadowBlur = 15;
          ctx.stroke();
          ctx.restore();
          aliveCount++;
        }
      });

      // 2. Draw outline violet sparkle particles
      particles.forEach((p) => {
        if (p.alpha > 0.01) {
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.93; // Friction drag
          p.vy *= 0.93;
          p.vy += 0.08; // Subtle downward float
          p.rotation += p.rotSpeed;
          p.alpha -= p.decay;

          ctx.save();
          ctx.globalAlpha = Math.max(p.alpha, 0);
          ctx.strokeStyle = p.color;
          ctx.lineWidth = 1.3;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 10;

          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);

          if (p.type === "star4") {
            drawStar(ctx, 0, 0, p.size, 4);
          } else if (p.type === "star8") {
            drawStar(ctx, 0, 0, p.size * 0.85, 8);
          } else if (p.type === "diamond") {
            drawDiamond(ctx, 0, 0, p.size);
          } else {
            ctx.beginPath();
            ctx.arc(0, 0, p.size * 0.5, 0, Math.PI * 2);
            ctx.stroke();
          }

          ctx.restore();
          aliveCount++;
        }
      });

      if (aliveCount > 0) {
        animId = requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    animId = requestAnimationFrame(animate);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    // Get click center or event client coordinates
    const clientX = e.clientX || window.innerWidth / 2;
    const clientY = e.clientY || window.innerHeight / 2;

    triggerSparkleBlast(clientX, clientY);

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <>
      {/* Viewport-wide Overlay Canvas for Sparkle Blast Particles */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-50 w-full h-full"
      />

      <a
        href={href}
        onClick={handleClick}
        className={`w-full sm:w-auto inline-block ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          ref={buttonRef}
          className="group relative w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-neutral-900 text-white font-sans font-medium text-sm hover:bg-neutral-800 transition-all border border-white/15 shadow-xl hover:border-purple-400/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] active:scale-95 overflow-hidden"
        >
          {/* Subtle Ambient Pulsing Purple Rim Border Light */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 via-fuchsia-500/20 to-sky-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <span className="relative z-10 font-medium tracking-tight">
            {text}
          </span>

          <span className="relative z-10 flex items-center justify-center w-6 h-6 rounded-full bg-neutral-800 group-hover:bg-purple-600 transition-colors duration-300">
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 text-white" />
          </span>
        </button>
      </a>
    </>
  );
}
