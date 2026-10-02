import React from 'react';

export const AxiomStatsGrid: React.FC = () => {
  return (
    <section className="bg-[#080808] border-b border-neutral-900 py-16 sm:py-24 px-6 sm:px-8 lg:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Stat 1: IN BUILD */}
          <div className="bg-[#0e0e0e] border border-neutral-800/80 hover:border-neutral-700 p-8 sm:p-10 rounded-sm flex flex-col justify-between min-h-[300px] shadow-lg transition-colors group">
            <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-medium">
              <span className="text-[#ff3b00] text-sm">·</span>
              <span>IN BUILD</span>
            </div>

            <div className="my-auto py-6">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl sm:text-7xl lg:text-[5.5rem] font-light tracking-tight text-white tabular-nums">
                  3.00
                </span>
                <span className="text-xl sm:text-2xl font-light text-neutral-400 font-mono">
                  GW
                </span>
              </div>
            </div>

            <div className="space-y-1.5 border-t border-neutral-900 pt-4">
              <h3 className="text-sm font-semibold text-white tracking-tight">
                Capacity under construction
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
                Utility-scale substations and microgrids actively contracted and in civil engineering phases across North America.
              </p>
            </div>
          </div>

          {/* Stat 2: RELIABILITY */}
          <div className="bg-[#0e0e0e] border border-neutral-800/80 hover:border-neutral-700 p-8 sm:p-10 rounded-sm flex flex-col justify-between min-h-[300px] shadow-lg transition-colors group">
            <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-medium">
              <span className="text-[#ff3b00] text-sm">·</span>
              <span>RELIABILITY</span>
            </div>

            <div className="my-auto py-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl sm:text-7xl lg:text-[5.5rem] font-light tracking-tight text-white tabular-nums">
                  99.98
                </span>
                <span className="text-2xl sm:text-3xl font-light text-neutral-400 font-mono">
                  %
                </span>
              </div>
            </div>

            <div className="space-y-1.5 border-t border-neutral-900 pt-4">
              <h3 className="text-sm font-semibold text-white tracking-tight">
                Fleet uptime standard
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
                Trailing 12-month commercial availability across all energized customer substations and BESS assets.
              </p>
            </div>
          </div>

          {/* Stat 3: DEPLOYMENT */}
          <div className="bg-[#0e0e0e] border border-neutral-800/80 hover:border-neutral-700 p-8 sm:p-10 rounded-sm flex flex-col justify-between min-h-[300px] shadow-lg transition-colors group">
            <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-medium">
              <span className="text-[#ff3b00] text-sm">·</span>
              <span>TIMELINE</span>
            </div>

            <div className="my-auto py-6">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl sm:text-7xl lg:text-[5.5rem] font-light tracking-tight text-white tabular-nums">
                  18
                </span>
                <span className="text-xl sm:text-2xl font-light text-neutral-400 font-mono">
                  Mo
                </span>
              </div>
            </div>

            <div className="space-y-1.5 border-t border-neutral-900 pt-4">
              <h3 className="text-sm font-semibold text-white tracking-tight">
                Average energization timeline
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
                From initial interconnection study to first power on site, compressed via reserved domestic equipment slots.
              </p>
            </div>
          </div>

          {/* Stat 4: DISPATCHABLE */}
          <div className="bg-[#0e0e0e] border border-neutral-800/80 hover:border-neutral-700 p-8 sm:p-10 rounded-sm flex flex-col justify-between min-h-[300px] shadow-lg transition-colors group">
            <div className="flex items-center gap-1.5 text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-medium">
              <span className="text-[#ff3b00] text-sm">·</span>
              <span>RESILIENCE</span>
            </div>

            <div className="my-auto py-6">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl sm:text-7xl lg:text-[5.5rem] font-light tracking-tight text-white tabular-nums">
                  100
                </span>
                <span className="text-2xl sm:text-3xl font-light text-neutral-400 font-mono">
                  %
                </span>
              </div>
            </div>

            <div className="space-y-1.5 border-t border-neutral-900 pt-4">
              <h3 className="text-sm font-semibold text-white tracking-tight">
                Dispatchable capacity guarantee
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
                Contractual capacity guarantees backed by redundant localized generation and dual utility feed architecture.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
