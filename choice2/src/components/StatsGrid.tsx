import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { AnimatedCounter } from './AnimatedCounter';
import { SpotlightCard } from './SpotlightCard';

export const StatsGrid: React.FC = () => {
  return (
    <section className="bg-[#080808] border-b border-neutral-900 py-16 sm:py-24 px-6 sm:px-8 lg:px-12 text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Stat 1: PROCESSED */}
          <ScrollReveal direction="up" delay={0.1}>
            <SpotlightCard enableTilt={false} className="rounded-sm">
              <div className="bg-[#0e0e0e] border border-neutral-800/80 p-8 sm:p-10 rounded-sm flex flex-col justify-between min-h-[300px] shadow-lg">
                <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-medium">
                  <span className="text-[#ff3b00] text-sm animate-pulse">·</span>
                  <span>PROCESSED</span>
                </div>

                <div className="my-auto py-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl sm:text-7xl lg:text-[5.5rem] font-light tracking-tight text-white tabular-nums">
                      <AnimatedCounter value={42.8} decimals={1} duration={2400} />
                    </span>
                    <span className="text-xl sm:text-2xl font-light text-neutral-400 font-mono">
                      T
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 border-t border-neutral-900 pt-4">
                  <h3 className="text-sm font-semibold text-white tracking-tight">
                    Cumulative tokens optimized
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
                    Firm, lossless inference tokens decoded and verified across enterprise deployments.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Stat 2: RECALL */}
          <ScrollReveal direction="up" delay={0.15}>
            <SpotlightCard enableTilt={false} className="rounded-sm">
              <div className="bg-[#0e0e0e] border border-neutral-800/80 p-8 sm:p-10 rounded-sm flex flex-col justify-between min-h-[300px] shadow-lg">
                <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-medium">
                  <span className="text-[#ff3b00] text-sm animate-pulse">·</span>
                  <span>RECALL</span>
                </div>

                <div className="my-auto py-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl sm:text-7xl lg:text-[5.5rem] font-light tracking-tight text-white tabular-nums">
                      <AnimatedCounter value={99.98} decimals={2} duration={2200} />
                    </span>
                    <span className="text-2xl sm:text-3xl font-light text-neutral-400 font-mono">
                      %
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 border-t border-neutral-900 pt-4">
                  <h3 className="text-sm font-semibold text-white tracking-tight">
                    10M Needle retrieval fidelity
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
                    Exceeds standard attention benchmarks across 12-hop dependency chains.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Stat 3: RATIO */}
          <ScrollReveal direction="up" delay={0.2}>
            <SpotlightCard enableTilt={false} className="rounded-sm">
              <div className="bg-[#0e0e0e] border border-neutral-800/80 p-8 sm:p-10 rounded-sm flex flex-col justify-between min-h-[300px] shadow-lg">
                <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-medium">
                  <span className="text-[#ff3b00] text-sm animate-pulse">·</span>
                  <span>COMPRESSION</span>
                </div>

                <div className="my-auto py-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl sm:text-7xl lg:text-[5.5rem] font-light tracking-tight text-white tabular-nums">
                      <AnimatedCounter value={16.4} decimals={1} duration={2000} />
                    </span>
                    <span className="text-xl sm:text-2xl font-light text-neutral-400 font-mono">
                      x
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 border-t border-neutral-900 pt-4">
                  <h3 className="text-sm font-semibold text-white tracking-tight">
                    KV-Cache memory reduction
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
                    Average footprint reduction across Llama-3.3 70B and DeepSeek-R1 inference clusters.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>

          {/* Stat 4: DISPATCHABLE / ZERO-DRIFT */}
          <ScrollReveal direction="up" delay={0.25}>
            <SpotlightCard enableTilt={false} className="rounded-sm">
              <div className="bg-[#0e0e0e] border border-neutral-800/80 p-8 sm:p-10 rounded-sm flex flex-col justify-between min-h-[300px] shadow-lg">
                <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-medium">
                  <span className="text-[#ff3b00] text-sm animate-pulse">·</span>
                  <span>ACCURACY</span>
                </div>

                <div className="my-auto py-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl sm:text-7xl lg:text-[5.5rem] font-light tracking-tight text-white tabular-nums">
                      <AnimatedCounter value={100} decimals={0} duration={1800} />
                    </span>
                    <span className="text-2xl sm:text-3xl font-light text-neutral-400 font-mono">
                      %
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5 border-t border-neutral-900 pt-4">
                  <h3 className="text-sm font-semibold text-white tracking-tight">
                    Deterministic token recall
                  </h3>
                  <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
                    Exact preservation of needle dependencies without catastrophic hallucination or context collapse.
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};
