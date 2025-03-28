"use client";
import { useCanvas } from "@/hooks/useCanvas";
import { useCallback, useRef } from "react";

class Particle {
  x: number;
  y: number;
  velocity: { x: number; y: number };
  radius: number;
  color: string;
  glowColor: string;

  constructor(ctx: CanvasRenderingContext2D) {
    this.x = Math.random() * ctx.canvas.width;
    this.y = Math.random() * ctx.canvas.height;
    this.velocity = {
      x: (Math.random() - 0.5) * 2,
      y: (Math.random() - 0.5) * 2
    };
    this.radius = Math.random() * 2.2 + 1.2; 
    this.color = `rgba(20, 40, 100, 0.95)`; // Bleu nuit
    this.glowColor = `rgba(50, 120, 255, 0.9)`; 
  }

  update(ctx: CanvasRenderingContext2D) {
    this.x += this.velocity.x;
    this.y += this.velocity.y;

    if (this.x < 0 || this.x > ctx.canvas.width) this.velocity.x *= -1;
    if (this.y < 0 || this.y > ctx.canvas.height) this.velocity.y *= -1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.shadowBlur = 30; // Augmentation de la lueur
    ctx.shadowColor = this.glowColor;

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();

    ctx.shadowBlur = 0; 
  }
}

export function ParticleCanvas() {
  const particles = useRef<Particle[]>([]);

  const draw = useCallback((ctx: CanvasRenderingContext2D) => {
    if (particles.current.length === 0) {
      particles.current = Array.from({ length: 55 }, () => new Particle(ctx)); // Légère augmentation du nombre de particules
    }

    // Effet de traînée plus clair et plus contrasté
    ctx.fillStyle = 'rgba(5, 5, 15, 0.12)'; 
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Mise à jour et affichage des particules
    particles.current.forEach(particle => {
      particle.update(ctx);
      particle.draw(ctx);
    });

    // Création des lignes de connexion avec effet lumineux renforcé
    ctx.lineWidth = 1.8;
    ctx.strokeStyle = 'rgba(40, 75, 255, 0.6)'; 
    for (let i = 0; i < particles.current.length; i++) {
      for (let j = i; j < particles.current.length; j++) {
        const dx = particles.current[i].x - particles.current[j].x;
        const dy = particles.current[i].y - particles.current[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 110) {
          ctx.beginPath();
          ctx.moveTo(particles.current[i].x, particles.current[i].y);
          ctx.lineTo(particles.current[j].x, particles.current[j].y);
          ctx.stroke();
        }
      }
    }
  }, []);

  const canvasRef = useCanvas(draw);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full opacity-55" />
    </div>
  );
}
