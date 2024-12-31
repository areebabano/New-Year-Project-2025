declare module 'fireworks-js' {
    export interface FireworksOptions {
      hue?: { min: number; max: number };
      rocketsPoint?: number;
      speed?: number;
      acceleration?: number;
      friction?: number;
      gravity?: number;
      particles?: number;
      trace?: number;
      explosion?: number;
      autoresize?: boolean;
      brightness?: { min: number; max: number };
      decay?: { min: number; max: number };
      delay?: { min: number; max: number };
      mouse?: { click: boolean; move: boolean; max: number };
      boundaries?: { x: number; y: number; width: number; height: number };
    }
  
    export class Fireworks {
      constructor(container: HTMLElement, options?: FireworksOptions);
      start(): void;
      stop(): void;
      pause(): void;
      clear(): void;
      launch(x?: number, y?: number): void;
    }
  }
  