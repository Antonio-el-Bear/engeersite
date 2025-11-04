import React, { useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const lines = [];
    const numLines = 30;

    for (let i = 0; i < numLines; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 100 + 50,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      lines.forEach((line) => {
        line.y -= line.speed;
        if (line.y < -line.length) {
          line.y = canvas.height + line.length;
          line.x = Math.random() * canvas.width;
        }

        ctx.strokeStyle = `rgba(79, 209, 197, ${line.opacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(
          line.x + Math.cos(line.angle) * line.length,
          line.y + Math.sin(line.angle) * line.length
        );
        ctx.stroke();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden blueprint-grid">
      {/* Animated Blueprint Lines */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/50 via-transparent to-[#0A0A0A]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <div className="fade-in delay-200">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-white slide-up delay-300">
            ENGITECH
          </h1>
          
          <p className="text-xl md:text-2xl text-teal-300 mb-8 font-light tracking-wide slide-up delay-400">
            Civil and Structural Engineers
          </p>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white slide-up delay-500">
            Building Tomorrow,
            <br />
            <span className="text-teal-400">Today.</span>
          </h2>

          <p className="text-lg md:text-xl text-teal-300 max-w-3xl mx-auto mb-12 leading-relaxed fade-in delay-600">
            Where innovation meets structure. We engineer precision and design progress for a sustainable future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center slide-up delay-700">
            <Link to={createPageUrl("Projects")}>
              <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 text-lg font-medium group btn-animate hover-glow">
                View Our Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to={createPageUrl("Contact")}>
              <Button variant="outline" className="border-teal-500/30 text-white hover:bg-teal-500/10 px-8 py-6 text-lg font-medium btn-animate">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 fade-in delay-500">
          <div className="flex flex-col items-center gap-2 text-teal-400 text-sm">
            <span>Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-teal-500/30 rounded-full flex justify-center pt-2 float">
              <div className="w-1 h-2 bg-teal-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}