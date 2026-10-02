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
  const leftSectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll spy: tracks the left side text scrolling to update activePageIndex and sync right side showcase
  useEffect(() => {
    const handleScroll = () => {
      const focusPoint = window.innerHeight * 0.42;

      let currentActive = 0;
      leftSectionRefs.current.forEach((el, idx) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= focusPoint) {
            currentActive = idx;
          }
        }
      });

      setActivePageIndex(currentActive);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToStep = useCallback((index: number) => {
    const targetEl = leftSectionRefs.current[index];
    if (targetEl) {
      const yOffset = -window.innerHeight * 0.28;
      const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActivePageIndex(index);
    }
  }, []);

  const activePage = CAPABILITY_PAGES[activePageIndex];
  const ActiveIcon = activePage.icon;

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

        {/* 2-Column Section-Scoped Sticky Architecture Layout:
            Left side: Clean typographic text stream (not a box).
            Right side: Stops (pins) until left side finishes scrolling. */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Text-like Narrative (NOT boxes) that scrolls past */}
          <div className="lg:col-span-6 space-y-36 sm:space-y-52 py-4 lg:py-8">
            {CAPABILITY_PAGES.map((page, idx) => {
              const isCurrent = activePageIndex === idx;

              return (
                <div 
                  key={page.id}
                  ref={(el) => { leftSectionRefs.current[idx] = el; }}
                  onClick={() => scrollToStep(idx)}
                  className={`group transition-all duration-500 cursor-pointer ${
                    isCurrent 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-35 hover:opacity-70'
                  }`}
                >
                  {/* Step Metadata & Tags */}
                  <div className="flex items-center gap-3 font-mono text-xs mb-4">
                    <span className={`inline-flex items-center justify-center w-6 h-6 rounded-xs text-[11px] font-bold transition-all duration-300 ${
                      isCurrent 
                        ? 'bg-[#ff3b00] text-black shadow-[0_0_12px_rgba(255,59,0,0.5)]' 
                        : 'bg-neutral-900 text-neutral-400 border border-neutral-800'
                    }`}>
                      0{idx + 1}
                    </span>
                    <span className={`font-semibold tracking-wider transition-colors duration-300 ${
                      isCurrent ? 'text-[#ff3b00]' : 'text-neutral-400'
                    }`}>
                      {page.label}
                    </span>
                    <span className="text-neutral-700">/</span>
                    <span className="text-neutral-500 text-[11px]">
                      {page.badge}
                    </span>
                  </div>

                  {/* Headline Title */}
                  <h3 className={`text-2xl sm:text-3xl lg:text-[2.25rem] font-semibold tracking-tight leading-snug mb-4 transition-colors duration-300 ${
                    isCurrent ? 'text-white' : 'text-neutral-300'
                  }`}>
                    {page.title}
                  </h3>

                  {/* Narrative Paragraph */}
                  <p className="text-sm sm:text-base text-neutral-400 leading-relaxed max-w-xl mb-6 font-normal">
                    {page.description}
                  </p>

                  {/* Metrics Specs Row */}
                  <div className="flex flex-wrap items-center gap-6 pt-5 border-t border-neutral-900 font-mono text-xs">
                    <div>
                      <div className="text-[10px] text-neutral-500 uppercase tracking-wider">{page.metricLabel}</div>
                      <div className={`font-bold text-sm mt-0.5 transition-colors duration-300 ${
                        isCurrent ? 'text-white' : 'text-neutral-300'
                      }`}>
                        {page.metricValue}
                      </div>
                    </div>
                    <div className="border-l border-neutral-900 pl-6">
                      <div className="text-[10px] text-neutral-500 uppercase tracking-wider">CONTEXT HORIZON</div>
                      <div className="text-[#ff3b00] font-bold text-sm mt-0.5">
                        {page.badge}
                      </div>
                    </div>
                    <div className="border-l border-neutral-900 pl-6">
                      <div className="text-[10px] text-neutral-500 uppercase tracking-wider">ARCHITECTURE STATE</div>
                      <div className="text-neutral-400 font-medium text-xs mt-0.5 flex items-center gap-1.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${isCurrent ? 'bg-[#ff3b00] animate-pulse' : 'bg-neutral-600'}`} />
                        <span>{isCurrent ? 'ACTIVE PROJECTION' : 'IDLE'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Side: Sticky Showcase Display that STOPS until left side finishes */}
          <div className="lg:col-span-6 lg:sticky lg:top-28 lg:top-32 self-start pb-8">
            <div className="relative bg-[#0e0e0e] border border-neutral-800 rounded-sm overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.85)] ring-1 ring-neutral-800/80 transition-all duration-500">
              
              {/* Header Bar */}
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-neutral-900 border border-[#ff3b00]/60 text-[#ff3b00] flex items-center justify-center rounded-sm shadow-[0_0_15px_rgba(255,59,0,0.2)]">
                    <ActiveIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-xs font-semibold text-white tracking-wider">
                      {activePage.label}
                    </div>
                    <div className="font-mono text-[10px] text-neutral-500">
                      INFERENCE ENGINE · MODULE 0{activePageIndex + 1} OF 03
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#ff3b00] animate-pulse" />
                  <span className="font-mono text-xs text-[#ff3b00] font-bold tracking-wider">
                    {activePage.badge}
                  </span>
                </div>
              </div>

              {/* Dynamic Image Display with smooth cross-fade */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-neutral-950">
                {CAPABILITY_PAGES.map((page, idx) => (
                  <img 
                    key={page.id}
                    src={page.image} 
                    alt={page.alt}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                      activePageIndex === idx 
                        ? 'opacity-100 scale-100 z-10' 
                        : 'opacity-0 scale-105 z-0 pointer-events-none'
                    }`}
                    referrerPolicy="no-referrer"
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent pointer-events-none z-20" />
              </div>

              {/* Footer HUD & Telemetry */}
              <div className="p-4 sm:p-5 bg-[#0e0e0e] border-t border-neutral-900 flex items-center justify-between text-xs font-mono">
                <div className="text-neutral-400">
                  <span className="text-neutral-500 uppercase text-[10px] tracking-wider block">BENCHMARK SPEC</span>
                  <span className="text-white font-medium text-xs">{activePage.metricLabel}</span>
                </div>
                <div className="text-right">
                  <span className="text-neutral-500 uppercase text-[10px] tracking-wider block">EFFICIENCY GAIN</span>
                  <span className="text-[#ff3b00] font-bold text-sm">{activePage.metricValue}</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
