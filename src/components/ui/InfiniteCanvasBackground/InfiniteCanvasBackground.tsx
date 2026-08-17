"use client";

import { useEffect, useRef } from "react";
import { InfiniteCanvasBackgroundProps } from "./InfiniteCanvasBackground.types";
import { themeConfig } from "@/constants/theme";

interface StarParticle {
  x: number;
  y: number;
  z: number;
  baseRadius: number;
  alpha: number;
  pulseSpeed: number;
  pulseOffset: number;
  color: string;
}

interface GeometricWireframe {
  x: number;
  y: number;
  z: number;
  size: number;
  vx: number;
  vy: number;
  angleX: number;
  angleY: number;
  rotSpeedX: number;
  rotSpeedY: number;
  type: "cube" | "diamond" | "ring" | "tesseract";
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  dx: number;
  dy: number;
  life: number;
  maxLife: number;
  active: boolean;
}

export function InfiniteCanvasBackground({ className = "" }: InfiniteCanvasBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse & Touch & Scroll Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollY = 0;
    let targetScrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX - width / 2;
      targetMouseY = e.clientY - height / 2;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        targetMouseX = (e.touches[0].clientX - width / 2) * 1.2;
        targetMouseY = (e.touches[0].clientY - height / 2) * 1.2;
      }
    };

    const handleScroll = () => {
      targetScrollY = window.scrollY || window.pageYOffset;
    };

    const handleMobileScroll = (e: Event) => {
      const customEvent = e as CustomEvent<{ scrollY: number }>;
      if (customEvent.detail && typeof customEvent.detail.scrollY === "number") {
        targetScrollY = customEvent.detail.scrollY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchstart", handleTouchMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mobilescroll", handleMobileScroll, { passive: true });

    // Initialize Particles & Geometry
    let stars: StarParticle[] = [];
    let shapes: GeometricWireframe[] = [];

    const initCanvasSize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      const isMobile = width < 768;

      // Populate Star Dots
      const starDensityDivisor = isMobile ? 7500 : 11000;
      const starCount = Math.floor((width * height) / starDensityDivisor);
      stars = Array.from({ length: Math.max(starCount, isMobile ? 90 : 120) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height * 3.5, // Spans down smoothly across scrolls
        z: Math.random() * 0.8 + 0.2,
        baseRadius: Math.random() * 1.4 + 0.4,
        alpha: Math.random() * 0.75 + 0.25,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulseOffset: Math.random() * Math.PI * 2,
        color: "#ffffff",
      }));

      // Populate Spaced-Out 3D Wireframe Shapes
      const shapeTypes: ("cube" | "diamond" | "ring" | "tesseract")[] = ["cube", "diamond", "ring", "tesseract"];
      const maxShapes = isMobile ? 4 : 6;
      const minDistance = Math.min(width, height) * (isMobile ? 0.35 : 0.28);
      const padding = isMobile ? 30 : 80;

      shapes = [];
      let attempts = 0;
      while (shapes.length < maxShapes && attempts < 120) {
        attempts++;
        const candidateX = Math.random() * Math.max(width - padding * 2, 50) + padding;
        const candidateY = Math.random() * height * 2.5;

        const isTooClose = shapes.some((s) => {
          const dx = s.x - candidateX;
          const dy = s.y - candidateY;
          return Math.sqrt(dx * dx + dy * dy) < minDistance;
        });

        if (!isTooClose || attempts > 90) {
          const type = shapeTypes[shapes.length % shapeTypes.length];
          const baseSize = isMobile ? (Math.random() * 6 + 11) : (Math.random() * 8 + 14);
          shapes.push({
            x: candidateX,
            y: candidateY,
            z: Math.random() * 0.45 + 0.45,
            size: baseSize,
            vx: (Math.random() - 0.5) * 0.12,
            vy: (Math.random() - 0.5) * 0.12,
            angleX: Math.random() * Math.PI * 2,
            angleY: Math.random() * Math.PI * 2,
            rotSpeedX: (Math.random() - 0.5) * 0.008,
            rotSpeedY: (Math.random() - 0.5) * 0.008,
            type,
          });
        }
      }
    };

    initCanvasSize();
    window.addEventListener("resize", initCanvasSize, { passive: true });

    const getPrimaryMidRgb = () => {
      if (typeof window === "undefined") return themeConfig.brand.rgb.primaryMid;
      const val = getComputedStyle(document.documentElement).getPropertyValue("--primary-mid-rgb").trim();
      return val || themeConfig.brand.rgb.primaryMid;
    };
    let primaryMidRgb = getPrimaryMidRgb();

    // Draw 3D Wireframe Cube
    const drawCube = (cx: number, cy: number, size: number, ax: number, ay: number, alpha: number) => {
      const vertices = [
        [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
        [-1, -1, 1],  [1, -1, 1],  [1, 1, 1],  [-1, 1, 1],
      ];

      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7],
      ];

      const cosX = Math.cos(ax), sinX = Math.sin(ax);
      const cosY = Math.cos(ay), sinY = Math.sin(ay);

      const projected = vertices.map(([x, y, z]) => {
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;

        const scale = 180 / (180 + z2);
        return [cx + x1 * size * scale, cy + y2 * size * scale];
      });

      ctx.strokeStyle = `rgba(${primaryMidRgb}, ${alpha})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      edges.forEach(([i, j]) => {
        ctx.moveTo(projected[i][0], projected[i][1]);
        ctx.lineTo(projected[j][0], projected[j][1]);
      });
      ctx.stroke();
    };

    // Draw 3D Diamond / Octahedron Wireframe
    const drawDiamond = (cx: number, cy: number, size: number, ax: number, ay: number, alpha: number) => {
      const vertices = [
        [0, -1.4, 0], [1, 0, 0], [0, 0, 1], [-1, 0, 0], [0, 0, -1], [0, 1.4, 0]
      ];
      const edges = [
        [0, 1], [0, 2], [0, 3], [0, 4],
        [5, 1], [5, 2], [5, 3], [5, 4],
        [1, 2], [2, 3], [3, 4], [4, 1]
      ];

      const cosX = Math.cos(ax), sinX = Math.sin(ax);
      const cosY = Math.cos(ay), sinY = Math.sin(ay);

      const projected = vertices.map(([x, y, z]) => {
        const x1 = x * cosY - z * sinY;
        const z1 = x * sinY + z * cosY;
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;
        const scale = 180 / (180 + z2);
        return [cx + x1 * size * scale, cy + y2 * size * scale];
      });

      ctx.strokeStyle = `rgba(${primaryMidRgb}, ${alpha})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      edges.forEach(([i, j]) => {
        ctx.moveTo(projected[i][0], projected[i][1]);
        ctx.lineTo(projected[j][0], projected[j][1]);
      });
      ctx.stroke();
    };

    // Draw Energy Ring Wireframe
    const drawRing = (cx: number, cy: number, size: number, ax: number, alpha: number) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(ax);
      ctx.strokeStyle = `rgba(${primaryMidRgb}, ${alpha * 0.85})`;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.65, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${primaryMidRgb}, ${alpha * 0.5})`;
      ctx.stroke();
      ctx.restore();
    };

    // Draw 4D Wireframe Tesseract
    const drawTesseract = (cx: number, cy: number, size: number, ax: number, ay: number, alpha: number) => {
      const vertices4D: [number, number, number, number][] = [];
      for (const x of [-1, 1]) {
        for (const y of [-1, 1]) {
          for (const z of [-1, 1]) {
            for (const w of [-1, 1]) {
              vertices4D.push([x, y, z, w]);
            }
          }
        }
      }

      const edges: [number, number][] = [];
      for (let i = 0; i < 16; i++) {
        for (let j = i + 1; j < 16; j++) {
          let diff = 0;
          for (let k = 0; k < 4; k++) {
            if (vertices4D[i][k] !== vertices4D[j][k]) diff++;
          }
          if (diff === 1) edges.push([i, j]);
        }
      }

      const cosX = Math.cos(ax), sinX = Math.sin(ax);
      const cosY = Math.cos(ay), sinY = Math.sin(ay);
      const cosW = Math.cos(ax * 1.5), sinW = Math.sin(ax * 1.5);

      const projected = vertices4D.map(([x, y, z, w]) => {
        const x4 = x * cosW - w * sinW;
        const w4 = x * sinW + w * cosW;

        const distance4D = 2.5;
        const scale4D = distance4D / (distance4D - w4);
        const x3 = x4 * scale4D;
        const y3 = y * scale4D;
        const z3 = z * scale4D;

        const x1 = x3 * cosY - z3 * sinY;
        const z1 = x3 * sinY + z3 * cosY;
        const y2 = y3 * cosX - z1 * sinX;
        const z2 = y3 * sinX + z1 * cosX;

        const scale3D = 180 / (180 + z2);
        return [cx + x1 * size * 0.45 * scale3D, cy + y2 * size * 0.45 * scale3D];
      });

      ctx.strokeStyle = `rgba(${primaryMidRgb}, ${alpha * 1.15})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      edges.forEach(([i, j]) => {
        ctx.moveTo(projected[i][0], projected[i][1]);
        ctx.lineTo(projected[j][0], projected[j][1]);
      });
      ctx.stroke();
    };

    // Shooting Star Manager
    let currentShootingStar: ShootingStar | null = null;
    let nextShootingStarTime = 1.5;

    const spawnShootingStar = () => {
      const edge = Math.floor(Math.random() * 3);
      let startX = 0;
      let startY = 0;
      let targetX = 0;
      let targetY = 0;

      if (edge === 0) {
        startX = Math.random() * width;
        startY = -30;
        targetX = Math.random() * width;
        targetY = height + 60;
      } else if (edge === 1) {
        startX = -30;
        startY = Math.random() * (height * 0.7);
        targetX = width + 60;
        targetY = Math.random() * height;
      } else {
        startX = width + 30;
        startY = Math.random() * (height * 0.7);
        targetX = -60;
        targetY = Math.random() * height;
      }

      const angle = Math.atan2(targetY - startY, targetX - startX);
      const speed = Math.random() * 8 + 14;
      const length = Math.random() * 90 + 110;
      const maxLife = Math.floor(Math.random() * 40 + 65);

      currentShootingStar = {
        x: startX,
        y: startY,
        length,
        speed,
        angle,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        life: 0,
        maxLife,
        active: true,
      };
    };

    // Main Render Loop
    let time = 0;
    const render = () => {
      time += 0.015;
      primaryMidRgb = getPrimaryMidRgb();

      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      scrollY += (targetScrollY - scrollY) * 0.08;

      // Base Clear
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      // Star Particles & Neural Connections
      const visibleStars: { x: number; y: number; z: number }[] = [];

      stars.forEach((star) => {
        let renderY = (star.y - scrollY * star.z) % (height * 3.5);
        if (renderY < -50) renderY += height * 3.5;
        if (renderY > height + 50) return;

        const renderX = star.x + mouseX * 0.025 * star.z;
        const currentAlpha = star.alpha * (0.6 + 0.4 * Math.sin(time * 2 + star.pulseOffset));
        const radius = star.baseRadius * star.z;

        ctx.fillStyle = star.color;
        ctx.globalAlpha = currentAlpha;
        ctx.beginPath();
        ctx.arc(renderX, renderY, radius, 0, Math.PI * 2);
        ctx.fill();

        visibleStars.push({ x: renderX, y: renderY, z: star.z });
      });
      ctx.globalAlpha = 1.0;

      // Draw Neural Connections between nearby stars
      ctx.lineWidth = 0.5;
      const maxConnectionDistSq = width < 768 ? 7000 : 9000;
      for (let i = 0; i < visibleStars.length; i++) {
        for (let j = i + 1; j < visibleStars.length; j++) {
          const s1 = visibleStars[i];
          const s2 = visibleStars[j];
          const dx = s1.x - s2.x;
          const dy = s1.y - s2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxConnectionDistSq) {
            const alpha = (1 - distSq / maxConnectionDistSq) * 0.12 * Math.min(s1.z, s2.z);
            ctx.strokeStyle = `rgba(${primaryMidRgb}, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(s1.x, s1.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.stroke();
          }
        }
      }

      // Floating Geometric 3D Wireframes
      shapes.forEach((shape) => {
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.angleX += shape.rotSpeedX;
        shape.angleY += shape.rotSpeedY;

        if (shape.x < -100) shape.x = width + 100;
        if (shape.x > width + 100) shape.x = -100;

        let renderY = (shape.y - scrollY * shape.z * 0.4) % (height * 2.8);
        if (renderY < -100) renderY += height * 2.8;
        if (renderY > height + 100) return;

        const renderX = shape.x + mouseX * 0.04 * shape.z;
        const alpha = 0.28 * shape.z;

        switch (shape.type) {
          case "cube":
            drawCube(renderX, renderY, shape.size * shape.z, shape.angleX, shape.angleY, alpha);
            break;
          case "diamond":
            drawDiamond(renderX, renderY, shape.size * shape.z, shape.angleX, shape.angleY, alpha);
            break;
          case "ring":
            drawRing(renderX, renderY, shape.size * shape.z, shape.angleX, alpha);
            break;
          case "tesseract":
            drawTesseract(renderX, renderY, shape.size * 1.4 * shape.z, shape.angleX, shape.angleY, alpha);
            break;
        }
      });

      // Falling / Shooting Star
      if (!currentShootingStar || !currentShootingStar.active) {
        if (time >= nextShootingStarTime) {
          spawnShootingStar();
          nextShootingStarTime = time + (2.5 + Math.random() * 2.0);
        }
      } else {
        const star = currentShootingStar;
        star.life += 1;
        star.x += star.dx;
        star.y += star.dy;

        const progress = star.life / star.maxLife;
        const alpha = Math.sin(progress * Math.PI);

        if (progress >= 1 || star.x < -150 || star.x > width + 150 || star.y < -150 || star.y > height + 150) {
          star.active = false;
        } else {
          const tailX = star.x - Math.cos(star.angle) * star.length;
          const tailY = star.y - Math.sin(star.angle) * star.length;

          const streakGrad = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
          streakGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
          streakGrad.addColorStop(0.6, `rgba(${primaryMidRgb}, ${alpha * 0.6})`);
          streakGrad.addColorStop(1, `rgba(255, 255, 255, ${alpha * 0.95})`);

          ctx.strokeStyle = streakGrad;
          ctx.lineWidth = 1.8;
          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(star.x, star.y);
          ctx.stroke();

          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.beginPath();
          ctx.arc(star.x, star.y, 1.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(animId);
      } else {
        animId = requestAnimationFrame(render);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mobilescroll", handleMobileScroll);
      window.removeEventListener("resize", initCanvasSize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
    />
  );
}
