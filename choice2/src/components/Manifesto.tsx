import React from 'react';
import { SplitTextReveal } from './SplitTextReveal';

export const Manifesto: React.FC = () => {
  const manifestoText = "Parsim maximizes and orchestrates frontier token bandwidth to solve artificial intelligence’s deepest bottleneck: the quadratic context wall. From autonomous engineering agents to multi-million token repository reasoning, Parsim delivers sub-quadratic KV-cache compression and dynamic semantic pruning, setting new global benchmarks for reasoning depth and token throughput.";

  return (
    <section className="relative w-full bg-[#ff3b00] text-black px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-32 selection:bg-black selection:text-white overflow-hidden">
      {/* Subtle background tech line graphics */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(black 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-2xl sm:text-3xl lg:text-[2.65rem] font-medium leading-[1.28] tracking-[-0.02em] text-black">
          <SplitTextReveal 
            text={manifestoText}
            delay={0.08}
            wordClassName="hover:text-neutral-900 transition-colors"
          />
        </div>
      </div>
    </section>
  );
};
