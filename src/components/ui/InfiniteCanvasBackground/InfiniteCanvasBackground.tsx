"use client";

import { useEffect, useRef } from "react";
import { InfiniteCanvasBackgroundProps } from "./InfiniteCanvasBackground.types";

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
  type: "cube" | "diamond" | "ring" | "diagram" | "tesseract";
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

    // Mouse & Scroll Tracking
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

    const handleScroll = () => {
      targetScrollY = window.scrollY || window.pageYOffset;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

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

      // Populate White Star Dots
      const starCount = Math.floor((width * height) / 12000);
      stars = Array.from({ length: Math.max(starCount, 80) }, () => ({
        x: Math.random() * width,
        y: Math.random() * height * 3, // Spans down infinitely
        z: Math.random() * 0.8 + 0.2,
        baseRadius: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.7 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulseOffset: Math.random() * Math.PI * 2,
        color: "#ffffff",
      }));

      // Populate Geometric 3D Wireframes & Compact Tesseract
      const shapeTypes: ("cube" | "diamond" | "ring" | "diagram" | "tesseract")[] = [
        "cube",
        "diamond",
        "ring",
        "diagram",
        "tesseract",
      ];
      shapes = Array.from({ length: 14 }, (_, idx) => {
        let type: "cube" | "diamond" | "ring" | "diagram" | "tesseract" =
          shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        if (idx === 0 || idx === 7) type = "tesseract";
        return {
          x: Math.random() * width,
          y: Math.random() * height * 2.5,
          z: Math.random() * 0.6 + 0.4,
          size: type === "tesseract" ? Math.random() * 8 + 20 : Math.random() * 25 + 20,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          angleX: Math.random() * Math.PI * 2,
          angleY: Math.random() * Math.PI * 2,
          rotSpeedX: (Math.random() - 0.5) * 0.008,
          rotSpeedY: (Math.random() - 0.5) * 0.008,
          type,
        };
      });
    };

    initCanvasSize();
    window.addEventListener("resize", initCanvasSize, { passive: true });

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
        let x1 = x * cosY - z * sinY;
        let z1 = x * sinY + z * cosY;
        let y2 = y * cosX - z1 * sinX;
        let z2 = y * sinX + z1 * cosX;

        const scale = 180 / (180 + z2);
        return [cx + x1 * size * scale, cy + y2 * size * scale];
      });

      ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
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
        let x1 = x * cosY - z * sinY;
        let z1 = x * sinY + z * cosY;
        let y2 = y * cosX - z1 * sinX;
        let z2 = y * sinX + z1 * cosX;
        const scale = 180 / (180 + z2);
        return [cx + x1 * size * scale, cy + y2 * size * scale];
      });

      ctx.strokeStyle = `rgba(192, 132, 252, ${alpha})`;
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
      ctx.strokeStyle = `rgba(114, 9, 183, ${alpha * 0.8})`;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.arc(0, 0, size, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.beginPath();
      ctx.arc(0, 0, size * 0.7, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(168, 85, 247, ${alpha * 0.5})`;
      ctx.stroke();
      ctx.restore();
    };

    // Draw 4D Wireframe Tesseract (Hypercube - Compact Noticeable Size)
    const drawTesseract = (cx: number, cy: number, size: number, ax: number, ay: number, alpha: number) => {
      const vertices4D: [number, number, number, number][] = [];
      for (let x of [-1, 1]) {
        for (let y of [-1, 1]) {
          for (let z of [-1, 1]) {
            for (let w of [-1, 1]) {
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
        let x4 = x * cosW - w * sinW;
        let w4 = x * sinW + w * cosW;

        const distance4D = 2.5;
        const scale4D = distance4D / (distance4D - w4);
        let x3 = x4 * scale4D;
        let y3 = y * scale4D;
        let z3 = z * scale4D;

        let x1 = x3 * cosY - z3 * sinY;
        let z1 = x3 * sinY + z3 * cosY;
        let y2 = y3 * cosX - z1 * sinX;
        let z2 = y3 * sinX + z1 * cosX;

        const scale3D = 180 / (180 + z2);
        return [cx + x1 * size * 0.45 * scale3D, cy + y2 * size * 0.45 * scale3D];
      });

      ctx.strokeStyle = `rgba(192, 132, 252, ${alpha * 1.2})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      edges.forEach(([i, j]) => {
        ctx.moveTo(projected[i][0], projected[i][1]);
        ctx.lineTo(projected[j][0], projected[j][1]);
      });
      ctx.stroke();
    };

    // Shooting Star Manager (Single at a time, starting from screen borders, traveling straight across out of screen)
    let currentShootingStar: ShootingStar | null = null;
    let nextShootingStarTime = 2;

    const spawnShootingStar = () => {
      const edge = Math.floor(Math.random() * 3); // 0: Top, 1: Left, 2: Right
      let startX = 0;
      let startY = 0;
      let targetX = 0;
      let targetY = 0;

      if (edge === 0) {
        // Top border -> travels downward across screen
        startX = Math.random() * width;
        startY = -30;
        targetX = Math.random() * width;
        targetY = height + 60;
      } else if (edge === 1) {
        // Left border -> travels rightward across screen
        startX = -30;
        startY = Math.random() * (height * 0.8);
        targetX = width + 60;
        targetY = Math.random() * height;
      } else {
        // Right border -> travels leftward across screen
        startX = width + 30;
        startY = Math.random() * (height * 0.8);
        targetX = -60;
        targetY = Math.random() * height;
      }

      const angle = Math.atan2(targetY - startY, targetX - startX);
      const speed = Math.random() * 8 + 14;
      const length = Math.random() * 90 + 110;
      const maxLife = Math.floor(Math.random() * 40 + 70);

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

      // Smooth mouse lerping
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      scrollY += (targetScrollY - scrollY) * 0.08;

      // 1. Base Clear (Pitch Black)
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      // 2. Star Particles & Neural Network Connections
      const visibleStars: { x: number; y: number; z: number }[] = [];

      stars.forEach((star) => {
        let renderY = (star.y - scrollY * star.z) % (height * 3);
        if (renderY < -50) renderY += height * 3;
        if (renderY > height + 50) return;

        const renderX = star.x + mouseX * 0.02 * star.z;
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

      // Draw Neural Connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < visibleStars.length; i++) {
        for (let j = i + 1; j < visibleStars.length; j++) {
          const s1 = visibleStars[i];
          const s2 = visibleStars[j];
          const dx = s1.x - s2.x;
          const dy = s1.y - s2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < 10000) {
            const alpha = (1 - distSq / 10000) * 0.12 * Math.min(s1.z, s2.z);
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(s1.x, s1.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.stroke();
          }
        }
      }

      // 3. Floating Geometric 3D Wireframes & Tesseract
      shapes.forEach((shape) => {
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.angleX += shape.rotSpeedX;
        shape.angleY += shape.rotSpeedY;

        if (shape.x < -100) shape.x = width + 100;
        if (shape.x > width + 100) shape.x = -100;

        let renderY = (shape.y - scrollY * shape.z * 0.4) % (height * 2.5);
        if (renderY < -100) renderY += height * 2.5;
        if (renderY > height + 100) return;

        const renderX = shape.x + mouseX * 0.04 * shape.z;
        const alpha = 0.25 * shape.z;

        if (shape.type === "cube") {
          drawCube(renderX, renderY, shape.size * shape.z, shape.angleX, shape.angleY, alpha);
        } else if (shape.type === "diamond") {
          drawDiamond(renderX, renderY, shape.size * shape.z, shape.angleX, shape.angleY, alpha);
        } else if (shape.type === "ring") {
          drawRing(renderX, renderY, shape.size * shape.z, shape.angleX, alpha);
        } else if (shape.type === "tesseract") {
          drawTesseract(renderX, renderY, shape.size * shape.z, shape.angleX, shape.angleY, alpha);
        } else {
          drawCube(renderX, renderY, shape.size * 0.8 * shape.z, shape.angleY, shape.angleX, alpha * 0.8);
        }
      });

      // 4. Single Falling / Shooting Star (Triggers randomly ~4s, 1 at a time, any direction)
      if (!currentShootingStar || !currentShootingStar.active) {
        if (time >= nextShootingStarTime) {
          spawnShootingStar();
          nextShootingStarTime = time + (3.5 + Math.random() * 1.5);
        }
      } else {
        const star = currentShootingStar;
        star.life += 1;
        star.x += star.dx;
        star.y += star.dy;

        const progress = star.life / star.maxLife;
        let alpha = Math.sin(progress * Math.PI);

        if (progress >= 1 || star.x < -150 || star.x > width + 150 || star.y < -150 || star.y > height + 150) {
          star.active = false;
        } else {
          const tailX = star.x - Math.cos(star.angle) * star.length;
          const tailY = star.y - Math.sin(star.angle) * star.length;

          const streakGrad = ctx.createLinearGradient(tailX, tailY, star.x, star.y);
          streakGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
          streakGrad.addColorStop(0.6, `rgba(192, 132, 252, ${alpha * 0.6})`);
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
      window.removeEventListener("scroll", handleScroll);
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
