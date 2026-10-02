import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface PerformanceProps {
  onOpenTelemetry: () => void;
}

export const Performance: React.FC<PerformanceProps> = ({ onOpenTelemetry }) => {
  return (
    <section id="performance" className="relative bg-[#080808] border-b border-neutral-900 py-24 sm:py-36 px-6 sm:px-8 lg:px-12 overflow-hidden text-white">
      
      {/* Curved Glowing International Safety Orange Waveguide Ribbon */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <svg 
          viewBox="0 0 1440 600" 
          fill="none" 
          className="w-full h-full object-cover opacity-80 translate-y-12"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="performanceOrangeWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff3b00" stopOpacity="0" />
              <stop offset="35%" stopColor="#ff3b00" stopOpacity="0.85" />
              <stop offset="65%" stopColor="#ff7700" stopOpacity="1" />
              <stop offset="85%" stopColor="#ff3b00" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ff3b00" stopOpacity="0" />
            </linearGradient>
            <filter id="orangeWaveGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Broad Ambient Glow Ribbon */}
          <path
            d="M -100 450 C 350 480, 700 200, 1550 180"
            stroke="url(#performanceOrangeWave)"
            strokeWidth="34"
            strokeLinecap="round"
            className="opacity-20 blur-xl"
          />

          {/* Sharp Glowing Orange Core Line */}
          <path
            d="M -100 450 C 350 480, 700 200, 1550 180"
            stroke="url(#performanceOrangeWave)"
            strokeWidth="2.5"
            filter="url(#orangeWaveGlow)"
          />

          {/* Secondary Harmonic Wave */}
          <path
            d="M -100 440 C 400 460, 680 210, 1550 195"
            stroke="#ff3b00"
            strokeWidth="0.85"
            strokeDasharray="4 8"
            className="opacity-45"
          />
        </svg>

        {/* Ambient halo */}
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-[#ff3b00]/10 rounded-full blur-[120px]" />
      </div>

      {/* Top right utility equalizer indicator */}
      <div className="relative z-10 max-w-7xl mx-auto flex justify-end pb-8">
        <div className="flex items-center gap-[3px] h-3.5 opacity-60">
          <span className="w-[1.5px] h-3.5 bg-neutral-400" />
          <span className="w-[1.5px] h-3.5 bg-neutral-400" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal direction="up" delay={0.1} className="max-w-2xl space-y-6">
          
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
            <span className="text-[#ff3b00] text-sm">·</span>
            <span>TOKEN SCALE BENCHMARKS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[4.25rem] font-medium tracking-tight text-white leading-[1.08]">
            Performance <br />
            proven at scale.
          </h2>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-lg">
            Built for production clusters where latency and fidelity are non-negotiable. Every metric below is verified across 40 billion live inference tokens, P95, trailing thirty days.
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenTelemetry}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-sm bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white transition-all cursor-pointer shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff3b00] animate-pulse" />
              <span>LIVE NOC AUDIT LOGS</span>
              <span className="text-[#ff3b00] font-mono text-sm leading-none">+</span>
            </button>
          </div>

        </ScrollReveal>

        {/* Bottom Right Telemetry Kicker */}
        <div className="pt-24 sm:pt-32 flex justify-end">
          <div className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase flex items-center gap-2 font-medium">
            <span>KERNEL STATUS: NOMINAL</span>
            <span className="text-neutral-700">/</span>
            <span>P95 LATENCY: 1.4MS</span>
          </div>
        </div>

      </div>
    </section>
  );
};
