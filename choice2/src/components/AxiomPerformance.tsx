import React from 'react';

interface AxiomPerformanceProps {
  onOpenTelemetry: () => void;
}

export const AxiomPerformance: React.FC<AxiomPerformanceProps> = ({ onOpenTelemetry }) => {
  return (
    <section id="performance" className="relative bg-[#080808] border-b border-neutral-900 py-24 sm:py-36 px-6 sm:px-8 lg:px-12 overflow-hidden text-white">
      
      {/* Sinuous Glowing Copper-Orange Wave Ribbon */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <svg 
          viewBox="0 0 1440 600" 
          fill="none" 
          className="w-full h-full object-cover opacity-80 translate-y-12"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="axiomOrangeWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff3b00" stopOpacity="0" />
              <stop offset="30%" stopColor="#ff3b00" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#ff7700" stopOpacity="1" />
              <stop offset="100%" stopColor="#ff3b00" stopOpacity="0" />
            </linearGradient>
            <filter id="axiomGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Broad Ambient Glow */}
          <path
            d="M -100 450 C 350 480, 700 200, 1550 180"
            stroke="url(#axiomOrangeWave)"
            strokeWidth="32"
            strokeLinecap="round"
            className="opacity-20 blur-xl"
          />

          {/* Core Sinuous Line */}
          <path
            d="M -100 450 C 350 480, 700 200, 1550 180"
            stroke="url(#axiomOrangeWave)"
            strokeWidth="2.5"
            filter="url(#axiomGlow)"
          />

          {/* Secondary Track */}
          <path
            d="M -100 440 C 400 460, 680 210, 1550 195"
            stroke="#ff3b00"
            strokeWidth="1"
            strokeDasharray="4 8"
            className="opacity-40"
          />
        </svg>

        {/* Ambient Halo */}
        <div className="absolute top-1/2 right-1/4 w-[450px] h-[250px] bg-[#ff3b00]/10 rounded-full blur-[100px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-2xl space-y-6">
          
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
            <span className="text-[#ff3b00] text-sm">·</span>
            <span>PERFORMANCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-medium tracking-tight text-white leading-[1.12]">
            Proven at scale. <br />
            Sub-second response.
          </h2>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed pt-1">
            Real-time telemetry from operating substations confirms instantaneous seamless transfer during high-voltage disruptions.
          </p>

          <div className="pt-4">
            <button
              onClick={onOpenTelemetry}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white transition-all cursor-pointer shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff3b00] animate-pulse" />
              <span>LIVE NOC TELEMETRY LOGS</span>
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};
