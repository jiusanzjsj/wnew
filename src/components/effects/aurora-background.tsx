"use client";

import { useRef, useEffect } from "react";

export function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;

      // Draw multiple aurora blobs
      for (let i = 0; i < 3; i++) {
        const gradient = ctx.createRadialGradient(
          w * (0.3 + 0.4 * Math.sin(time + i * 2.1)),
          h * (0.3 + 0.2 * Math.cos(time * 0.7 + i * 1.5)),
          0,
          w * (0.3 + 0.4 * Math.sin(time + i * 2.1)),
          h * (0.3 + 0.2 * Math.cos(time * 0.7 + i * 1.5)),
          w * 0.5
        );

        const hue = 260 + i * 30 + Math.sin(time + i) * 20;
        gradient.addColorStop(0, `hsla(${hue}, 80%, 50%, 0.08)`);
        gradient.addColorStop(0.4, `hsla(${hue + 20}, 70%, 40%, 0.04)`);
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
