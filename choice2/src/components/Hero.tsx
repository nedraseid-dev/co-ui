import React, { useState } from 'react';
import { ASSETS } from '../data/content';
import { ScrollReveal } from './ScrollReveal';
import { EditableText } from './EditableText';

interface HeroProps {
  onOpenPress: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPress }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const toggleSound = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#080808] border-b border-neutral-900 px-6 sm:px-8 lg:px-12 pt-12 pb-16 text-white">
      
      {/* Background Neural Token Matrix & Deep Charcoal Vignette */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <img
          src={ASSETS.hero}
          alt="Parsim neural token matrix and attention convergence"
          className="w-full h-full object-cover object-right-top opacity-35 mix-blend-screen scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent" />
      </div>

      {/* Luminous International Safety Orange Wave Graphics Weaving Across Right Side */}
      <div className="absolute top-0 right-0 w-full sm:w-2/3 h-full pointer-events-none select-none z-0 overflow-hidden">
        <svg
          viewBox="0 0 900 700"
          fill="none"
          className="w-full h-full object-cover opacity-75 translate-x-12 -translate-y-8"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="heroOrangeWave" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff3b00" stopOpacity="0.1" />
              <stop offset="35%" stopColor="#ff3b00" stopOpacity="0.9" />
              <stop offset="65%" stopColor="#ff7700" stopOpacity="1" />
              <stop offset="100%" stopColor="#ff3b00" stopOpacity="0.2" />
            </linearGradient>
            <filter id="orangeGlowBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="12" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Broad Luminous Orange Wave */}
          <path
            d="M 50 250 C 300 120, 550 480, 850 180"
            stroke="url(#heroOrangeWave)"
            strokeWidth="38"
            className="opacity-25 blur-xl"
          />

          {/* Core Sinuous Lines */}
          <path
            d="M 50 250 C 300 120, 550 480, 850 180"
            stroke="url(#heroOrangeWave)"
            strokeWidth="2.5"
            filter="url(#orangeGlowBlur)"
          />

          <path
            d="M 120 320 C 350 160, 600 520, 890 220"
            stroke="#ff3b00"
            strokeWidth="1.5"
            strokeDasharray="5 7"
            className="opacity-75"
          />

          <path
            d="M 80 200 C 280 80, 520 420, 820 140"
            stroke="#ff7700"
            strokeWidth="1"
            className="opacity-60"
          />

          <path
            d="M 180 390 C 400 230, 640 560, 920 280"
            stroke="#ff3b00"
            strokeWidth="1"
            className="opacity-45"
          />

          {/* Radial ambient halo */}
          <circle cx="620" cy="340" r="160" fill="#ff3b00" fillOpacity="0.08" className="blur-3xl" />
        </svg>
      </div>

      {/* Top utility row: Audio telemetry toggle */}
      <div className="relative z-10 w-full flex justify-end">
        <button
          onClick={toggleSound}
          className="group flex items-center justify-center w-8 h-8 rounded-sm border border-neutral-800 bg-[#0e0e0e]/80 hover:bg-neutral-900 text-neutral-300 transition-all cursor-pointer backdrop-blur-sm shadow-md"
          title={isPlayingAudio ? "Mute kernel telemetry pulse" : "Listen to inference token stream"}
          aria-label="Toggle inference kernel audio feedback"
        >
          {isPlayingAudio ? (
            <div className="flex items-center gap-[2px] h-3">
              <span className="w-[2px] h-3 bg-[#ff3b00] animate-pulse" />
              <span className="w-[2px] h-2 bg-[#ff3b00] animate-bounce" />
              <span className="w-[2px] h-3.5 bg-[#ff3b00] animate-pulse" />
            </div>
          ) : (
            <div className="flex items-center gap-[3px] h-3 opacity-60 group-hover:opacity-100">
              <span className="w-[1.5px] h-3.5 bg-neutral-400" />
              <span className="w-[1.5px] h-3.5 bg-neutral-400" />
            </div>
          )}
        </button>
      </div>

      {/* Main Massive Headline */}
      <ScrollReveal direction="up" delay={0.1} className="relative z-10 my-auto py-12 max-w-5xl">
        <h1 className="text-5xl sm:text-7xl lg:text-[5.75rem] font-medium tracking-[-0.035em] text-white leading-[1.04]">
          <EditableText
            id="hero_headline"
            as="span"
            defaultText="Tokens that think across horizons."
          />
        </h1>
      </ScrollReveal>

      {/* Bottom Row: Subtitle & Horizon Metrics */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-8 pt-8">
        
        {/* Left Subtitle */}
        <ScrollReveal direction="up" delay={0.2} className="max-w-xl">
          <p className="text-[13px] sm:text-sm text-neutral-400 leading-relaxed font-normal">
            <EditableText
              id="hero_subtext"
              as="span"
              defaultText="Parsim compresses, optimizes, and scales attention state for frontier LLMs, autonomous agents, and multi-turn reasoning chains. 99.984% semantic fidelity, measured at 10M tokens."
            />
          </p>
        </ScrollReveal>

        {/* Live Horizon Specs */}
        <ScrollReveal direction="up" delay={0.25} className="font-mono text-xs flex items-center gap-6 text-neutral-400">
          <div>
            <div className="text-[10px] uppercase text-neutral-400 font-semibold tracking-wider">RECALL P95</div>
            <div className="text-white font-bold text-sm">99.984%</div>
          </div>
          <div className="border-l border-neutral-800 pl-6">
            <div className="text-[10px] uppercase text-neutral-400 font-semibold tracking-wider">MAX HORIZON</div>
            <div className="text-[#ff3b00] font-bold text-sm">10.2M TOKENS</div>
          </div>
        </ScrollReveal>

      </div>

    </section>
  );
};
