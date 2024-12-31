"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function FireworksEffect() {
  useEffect(() => {
    const duration = 15 * 1000; // 15 seconds
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = end - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 200 * (timeLeft / duration);
      const angle = Math.random() * 360;

      // Simulating a realistic explosion with random origins and speeds
      confetti({
        particleCount,
        spread: 360,
        startVelocity: 30,
        angle: angle,
        origin: {
          x: Math.random(),
          y: Math.random() - 0.2,
        },
        gravity: 0.3,
        scalar: 1.2,
        shapes: ["circle", "square"],  // Added shapes for more variety
        colors: ["#ff1f1f", "#ffde00", "#ff5733", "#33ff57"],  // Firework colors
        drift: Math.random() * 0.5 - 0.25, // Randomized drift for realism
        ticks: 300,  // How long the fireworks should last
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return null;
}
