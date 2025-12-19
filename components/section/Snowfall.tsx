'use client';

import { useEffect, useRef } from 'react';

export default function Snowfall() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    // Cấu hình tuyết
    const snowflakes: Snowflake[] = [];
    const snowflakeCount = 100; // Số lượng hạt tuyết

    class Snowflake {
      x: number;
      y: number;
      radius: number;
      speed: number;
      wind: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.radius = Math.random() * 2 + 1; // Kích thước hạt tuyết
        this.speed = Math.random() * 1 + 0.5; // Tốc độ rơi
        this.wind = Math.random() * 0.5 - 0.25; // Độ lướt ngang
        this.opacity = Math.random() * 0.5 + 0.3;
      }

      update() {
        this.y += this.speed;
        this.x += this.wind;

        // Nếu rơi hết màn hình thì quay lại đỉnh
        if (this.y > canvas!.height) {
          this.y = -10;
          this.x = Math.random() * canvas!.width;
        }
        if (this.x > canvas!.width) this.x = 0;
        if (this.x < 0) this.x = canvas!.width;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      resize();
      for (let i = 0; i < snowflakeCount; i++) {
        snowflakes.push(new Snowflake());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      snowflakes.forEach((flake) => {
        flake.update();
        flake.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[60]"
      style={{ filter: 'blur(0.5px)' }}
    />
  );
}
