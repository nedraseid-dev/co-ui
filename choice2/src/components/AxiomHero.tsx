import React, { useState } from 'react';
import { AXIOM_ASSETS } from '../data/axiomContent';
import { EditableText } from './EditableText';

interface AxiomHeroProps {
  onOpenPress: () => void;
}

export const AxiomHero: React.FC<AxiomHeroProps> = ({ onOpenPress }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#080808] border-b border-neutral-900 px-6 sm:px-8 lg:px-12 pt-12 pb-16 text-white">
      
      {/* Background Power Cabinet & Dark Vignette */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <img
          src={AXIOM_ASSETS.hero}
          alt="Axiom Power industrial power cabinet infrastructure"
          className="w-full h-full object-cover object-right-top opacity-40 mix-blend-screen scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />
      </div>

      {/* Top utility row: Audio/Telemetry toggle */}
      <div className="relative z-10 w-full flex justify-end">
        <button
          onClick={() => setIsPlayingAudio(!isPlayingAudio)}
          className="group flex items-center justify-center w-8 h-8 rounded-sm border border-neutral-800 bg-[#0e0e0e]/80 hover:bg-neutral-900 text-neutral-300 transition-all cursor-pointer backdrop-blur-sm"
          title={isPlayingAudio ? "Mute telemetry hum" : "Listen to plant telemetry"}
          aria-label="Toggle audio telemetry"
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
      <div className="relative z-10 my-auto py-12 max-w-5xl">
        <EditableText
          id="axiom_hero_title"
          as="h1"
          className="text-5xl sm:text-7xl lg:text-[5.75rem] font-medium tracking-[-0.035em] text-white leading-[1.04]"
          defaultText="Power the world’s most critical compute."
        />
      </div>

      {/* Bottom Row: Subtitle + Floating Card */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-8">
        
        {/* Left Subtitle & Fleet Stat */}
        <div className="max-w-md space-y-4">
          <EditableText
            id="axiom_hero_subtext"
            as="p"
            className="text-[13px] sm:text-sm text-neutral-400 leading-relaxed font-normal"
            defaultText="Axiom Power supplies and operates hyperscale power systems built to meet the world’s most demanding resilience challenges. 3.0 GW under construction across North America."
          />
        </div>

        {/* Right Floating Card */}
        <div 
          onClick={onOpenPress}
          className="group flex items-center justify-between gap-4 p-3.5 sm:p-4 rounded-sm bg-[#0e0e0e] hover:bg-[#141414] border border-neutral-800 hover:border-neutral-700 transition-all duration-200 cursor-pointer max-w-sm sm:max-w-md shadow-2xl"
        >
          <div className="space-y-1.5 flex-1 pr-2">
            <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-widest text-neutral-400 font-medium uppercase">
              <span className="text-[#ff3b00] text-xs">·</span>
              <span>LATEST CONTRACT</span>
            </div>
            <p className="text-xs text-neutral-200 group-hover:text-white font-medium leading-snug line-clamp-2 transition-colors">
              Port of Virginia awards Axiom 1.2 GW shore power contract for deepwater berths.
            </p>
          </div>

          <div className="w-16 h-12 rounded-sm overflow-hidden shrink-0 border border-neutral-800 relative bg-neutral-900">
            <img 
              src={AXIOM_ASSETS.portCranes} 
              alt="Port of Virginia shore power project thumbnail"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

      </div>

    </section>
  );
};
