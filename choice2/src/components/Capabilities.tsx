import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Cpu, Layers, Zap } from 'lucide-react';
import { ASSETS } from '../data/content';
import { ScrollReveal } from './ScrollReveal';

interface CapabilityPage {
  id: string;
  label: string;
  badge: string;
  icon: React.ElementType;
  image: string;
  alt: string;
  title: string;
  description: string;
  metricLabel: string;
  metricValue: string;
}

const CAPABILITY_PAGES: CapabilityPage[] = [
  {
    id: 'card-long-horizon',
    label: 'LONG-HORIZON AGENTS',
    badge: '10M+ WINDOWS',
    icon: Cpu,
    image: ASSETS.longHorizon,
    alt: 'Parsim Long Horizon autonomous agent neural context trajectory',
    title: 'Deterministic Memory Across 100,000 Step Loops',
    description: 'Autonomous coding and research agents repeatedly crash when prompt history fills standard attention buffers. Parsim retains permanent system prompt anchors while compacting historical reasoning chains.',
    metricLabel: 'RETAINED REASONING',
    metricValue: '100% DETERMINISTIC',
  },
  {
    id: 'card-kv-cache',
    label: 'KV-CACHE COMPRESSION',
    badge: '16.4X FACTOR',
    icon: Layers,
    image: ASSETS.kvCache,
    alt: 'Parsim KV cache memory compression architecture',
    title: 'Subspace Low-Rank Key-Value Head Projection',
    description: 'By dynamically identifying shared attention manifolds across decoder heads, Parsim eliminates up to 85% of redundant key-value tensors before they consume High Bandwidth Memory (HBM3e).',
    metricLabel: 'HBM3e REDUCTION',
    metricValue: '85.4% SAVED',
  },
  {
    id: 'card-token-maximization',
    label: 'SUB-QUADRATIC PROJECTION',
    badge: 'O(N log N) SCALING',
    icon: Zap,
    image: ASSETS.hero,
    alt: 'Parsim sub quadratic token projection matrix',
    title: 'Triton-Accelerated Dynamic Sparse Kernel',
    description: 'Custom fused CUDA and Triton kernels route tokens to relevant receptive fields in sub-quadratic time, avoiding quadratic memory wall blowouts on frontier models like DeepSeek-R1 and Llama-3.3.',
    metricLabel: 'ATTENTION SCALING',
    metricValue: 'O(N log N)',
  },
];

export const Capabilities: React.FC = () => {
  const [activePageIndex, setActivePageIndex] = useState(0);
  const rightCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll spy: tracks the right side scrolling to update the active page and light up the left stacked text
  useEffect(() => {
    const handleScroll = () => {
      const focusPoint = window.innerHeight * 0.45;

      const card2 = rightCardRefs.current[2];
      const card1 = rightCardRefs.current[1];
      const card0 = rightCardRefs.current[0];

      if (card2 && card2.getBoundingClientRect().top <= focusPoint) {
        setActivePageIndex(2);
      } else if (card1 && card1.getBoundingClientRect().top <= focusPoint) {
        setActivePageIndex(1);
      } else if (card0 && card0.getBoundingClientRect().top <= focusPoint + 100) {
        setActivePageIndex(0);
      } else {
        setActivePageIndex(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToSection = useCallback((index: number) => {
    const targetEl = rightCardRefs.current[index];
    if (targetEl) {
      const yOffset = -120;
      const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActivePageIndex(index);
    }
  }, []);

  return (
    <section 
      id="capabilities" 
      className="relative bg-[#080808] border-b border-neutral-900 py-24 sm:py-32 px-6 sm:px-8 lg:px-12 text-white"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1} className="space-y-4 max-w-2xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
            <span className="text-[#ff3b00] text-sm">·</span>
            <span>INFERENCE ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-medium tracking-tight text-white leading-[1.12]">
            Complex context. <br />
            Parsimonious compute.
          </h2>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed pt-1">
            We engineer context optimization designed for frontier models: three critical bottlenecks, one unified engine.
          </p>
        </ScrollReveal>

        {/* 3 Consecutive Rows: Left items stack on top while right side scrolls */}
        <div className="space-y-24 sm:space-y-36 pb-20">
          {CAPABILITY_PAGES.map((page, idx) => {
            const isLit = activePageIndex === idx;
            const isStackedUnder = activePageIndex > idx;
            const IconComp = page.icon;

            // Stack on top design for the left side
            const leftTopOffset = idx === 0 
              ? 'top-24 sm:top-28 z-10' 
              : idx === 1 
                ? 'top-32 sm:top-36 z-20' 
                : 'top-40 sm:top-44 z-30';

            return (
              <div 
                key={page.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start"
              >
                
                {/* Left Side: Stacks as you scroll */}
                <div className={`lg:col-span-4 sticky ${leftTopOffset} transition-all duration-300`}>
                  <div 
                    onClick={() => scrollToSection(idx)}
                    className={`bg-[#0e0e0e] border rounded-sm p-5 sm:p-6 transition-all duration-300 cursor-pointer shadow-[0_-10px_30px_rgba(0,0,0,0.85),0_12px_35px_rgba(0,0,0,0.9)] ${
                      isLit
                        ? 'border-[#ff3b00]/70 shadow-[0_-10px_30px_rgba(0,0,0,0.85),0_0_35px_rgba(255,59,0,0.2)] ring-1 ring-[#ff3b00]/40'
                        : isStackedUnder
                          ? 'border-neutral-800 bg-[#090909]/95 opacity-80 scale-[0.98]'
                          : 'border-neutral-800/90 opacity-75 hover:opacity-100'
                    }`}
                  >
                    {/* Header info */}
                    <div className="flex items-center justify-between mb-3 text-[11px] font-mono">
                      <span className="text-neutral-500 uppercase tracking-wider">
                        ARCHITECTURE PAGES · 0{idx + 1}
                      </span>
                      <span className="text-[#ff3b00] font-bold tracking-wider">
                        {page.badge}
                      </span>
                    </div>

                    {/* Active lighted label */}
                    <div className="flex items-center gap-2.5">
                      <span 
                        className={`w-2 h-2 inline-block shrink-0 rounded-[1px] transition-all duration-300 ${
                          isLit
                            ? 'bg-[#ff3b00] shadow-[0_0_10px_#ff3b00] opacity-100 scale-100'
                            : 'opacity-0 scale-75'
                        }`} 
                      />
                      <span className={`font-mono text-xs sm:text-sm tracking-wider transition-colors duration-300 ${
                        isLit
                          ? 'text-white font-bold drop-shadow-[0_0_12px_rgba(255,59,0,0.65)]'
                          : 'text-neutral-400 font-medium hover:text-neutral-200'
                      }`}>
                        {page.label}
                      </span>
                    </div>

                    {/* Subtext info */}
                    <div className="pt-3 mt-3 border-t border-neutral-900 flex items-center justify-between text-[11px] font-mono text-neutral-500">
                      <span>{page.metricLabel}</span>
                      <span className="text-neutral-300 font-medium">{page.metricValue}</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Scrolls past naturally */}
                <div 
                  ref={(el) => { rightCardRefs.current[idx] = el; }}
                  id={page.id}
                  className="lg:col-span-8"
                >
                  <div className={`bg-[#0e0e0e] border rounded-sm overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-500 ${
                    isLit
                      ? 'border-[#ff3b00]/50 shadow-[0_0_40px_rgba(255,59,0,0.1)] ring-1 ring-[#ff3b00]/20'
                      : 'border-neutral-800/80 opacity-90'
                  }`}>
                    
                    {/* Card Header Bar */}
                    <div className="p-4 sm:p-6 lg:p-7 flex items-center justify-between border-b border-neutral-800/80 bg-neutral-950/60">
                      <div className="flex items-center gap-3">
                        <div className={`w-7 h-7 bg-neutral-900 border flex items-center justify-center rounded-sm transition-colors duration-300 ${
                          isLit ? 'border-[#ff3b00]/60 text-[#ff3b00]' : 'border-neutral-800 text-neutral-400'
                        }`}>
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className={`font-mono text-xs font-semibold tracking-wider transition-colors duration-300 ${
                          isLit ? 'text-white' : 'text-neutral-400'
                        }`}>
                          {page.label}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="hidden sm:inline font-mono text-[10px] text-neutral-400">
                          {page.metricLabel}:
                        </span>
                        <span className="font-mono text-xs text-[#ff3b00] font-bold tracking-wider">
                          {page.badge}
                        </span>
                      </div>
                    </div>

                    {/* Card Main Image */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                      <img 
                        src={page.image} 
                        alt={page.alt}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Card Footer Statement */}
                    <div className="p-4 sm:p-6 lg:p-7 space-y-2 bg-[#0e0e0e]">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white tracking-tight">
                        {page.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-2xl">
                        {page.description}
                      </p>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
