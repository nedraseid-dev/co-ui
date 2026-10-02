import React, { useState } from 'react';
import { Server, Activity, BatteryCharging } from 'lucide-react';
import { AXIOM_ASSETS } from '../data/axiomContent';

export const AxiomCapabilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ai-factories' | 'mission-critical' | 'grid-stability'>('ai-factories');

  const scrollToCard = (id: string, tab: 'ai-factories' | 'mission-critical' | 'grid-stability') => {
    setActiveTab(tab);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="capabilities" className="relative bg-[#080808] border-b border-neutral-900 py-24 sm:py-32 px-6 sm:px-8 lg:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl mb-16">
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
            <span className="text-[#ff3b00] text-sm">·</span>
            <span>CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-medium tracking-tight text-white leading-[1.12]">
            Complex demand. <br />
            Definitive power.
          </h2>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed pt-1">
            We build and operate bespoke power delivery systems engineered for three demanding operational profiles.
          </p>
        </div>

        {/* Layout: Sticky Left Tabs + Stacked Right Visual Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Sticky Nav Controls */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 space-y-4">
            <div className="flex flex-col space-y-1 font-mono text-xs tracking-wider border-l border-neutral-900 pl-4">
              
              <button
                onClick={() => scrollToCard('card-ai-factories', 'ai-factories')}
                className={`flex items-center gap-2 py-2 text-left transition-colors cursor-pointer ${
                  activeTab === 'ai-factories'
                    ? 'text-white font-semibold'
                    : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                {activeTab === 'ai-factories' && (
                  <span className="w-1.5 h-1.5 bg-[#ff3b00] inline-block shrink-0 shadow-[0_0_6px_#ff3b00]" />
                )}
                <span>AI FACTORIES</span>
              </button>

              <button
                onClick={() => scrollToCard('card-mission-critical', 'mission-critical')}
                className={`flex items-center gap-2 py-2 text-left transition-colors cursor-pointer ${
                  activeTab === 'mission-critical'
                    ? 'text-white font-semibold'
                    : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                {activeTab === 'mission-critical' && (
                  <span className="w-1.5 h-1.5 bg-[#ff3b00] inline-block shrink-0 shadow-[0_0_6px_#ff3b00]" />
                )}
                <span>MISSION-CRITICAL POWER</span>
              </button>

              <button
                onClick={() => scrollToCard('card-grid-stability', 'grid-stability')}
                className={`flex items-center gap-2 py-2 text-left transition-colors cursor-pointer ${
                  activeTab === 'grid-stability'
                    ? 'text-white font-semibold'
                    : 'text-neutral-500 hover:text-neutral-300'
                }`}
              >
                {activeTab === 'grid-stability' && (
                  <span className="w-1.5 h-1.5 bg-[#ff3b00] inline-block shrink-0 shadow-[0_0_6px_#ff3b00]" />
                )}
                <span>GRID STABILITY</span>
              </button>

            </div>
          </div>

          {/* Right Visual Stacked Cards */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Card 1: AI FACTORIES */}
            <div 
              id="card-ai-factories"
              className="bg-[#0e0e0e] border border-neutral-800 rounded-sm overflow-hidden flex flex-col justify-between shadow-2xl transition-all"
            >
              <div className="p-6 sm:p-8 flex items-center justify-between border-b border-neutral-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 bg-neutral-900 border border-neutral-800 flex items-center justify-center rounded-sm text-[#ff3b00]">
                    <Server className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs text-neutral-400 font-semibold tracking-wider">AI FACTORIES</span>
                </div>
                <span className="font-mono text-xs text-[#ff3b00] font-medium tracking-wider">500 MW+ DEDICATED</span>
              </div>

              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                <img 
                  src={AXIOM_ASSETS.datacenter} 
                  alt="Axiom AI Factory hyperscale datacenter power delivery"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent" />
              </div>

              <div className="p-6 sm:p-8 space-y-3">
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  Hyperscale Substation & Fast-Track Interconnects
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-xl">
                  Purpose-built 230kV / 500kV interconnects designed for 90%+ capacity factors and extreme GPU step-load swings without voltage sag.
                </p>
              </div>
            </div>

            {/* Card 2: MISSION-CRITICAL POWER */}
            <div 
              id="card-mission-critical"
              className="bg-[#0e0e0e] border border-neutral-800 rounded-sm overflow-hidden flex flex-col justify-between shadow-2xl transition-all"
            >
              <div className="p-6 sm:p-8 flex items-center justify-between border-b border-neutral-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 bg-neutral-900 border border-neutral-800 flex items-center justify-center rounded-sm text-[#ff3b00]">
                    <Activity className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs text-neutral-400 font-semibold tracking-wider">MISSION-CRITICAL POWER</span>
                </div>
                <span className="font-mono text-xs text-[#ff3b00] font-medium tracking-wider">99.999% SLA</span>
              </div>

              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                <img 
                  src={AXIOM_ASSETS.switchgear} 
                  alt="Axiom medium voltage switchgear room"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent" />
              </div>

              <div className="p-6 sm:p-8 space-y-3">
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  Medium-Voltage Switchgear & Redundant Topology
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-xl">
                  Arc-resistant medium-voltage switchgear integrated with localized generator microgrids to maintain zero-loss continuous power.
                </p>
              </div>
            </div>

            {/* Card 3: GRID STABILITY */}
            <div 
              id="card-grid-stability"
              className="bg-[#0e0e0e] border border-neutral-800 rounded-sm overflow-hidden flex flex-col justify-between shadow-2xl transition-all"
            >
              <div className="p-6 sm:p-8 flex items-center justify-between border-b border-neutral-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 bg-neutral-900 border border-neutral-800 flex items-center justify-center rounded-sm text-[#ff3b00]">
                    <BatteryCharging className="w-4 h-4" />
                  </div>
                  <span className="font-mono text-xs text-neutral-400 font-semibold tracking-wider">GRID STABILITY</span>
                </div>
                <span className="font-mono text-xs text-[#ff3b00] font-medium tracking-wider">1.5 GWh BESS</span>
              </div>

              <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-900">
                <img 
                  src={AXIOM_ASSETS.bess} 
                  alt="Axiom utility-scale BESS battery storage installation"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-transparent" />
              </div>

              <div className="p-6 sm:p-8 space-y-3">
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
                  Utility-Scale BESS & Fast Frequency Response
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-xl">
                  Multi-hour battery energy storage systems dispatching active reserve power within sub-second thresholds to safeguard regional stability.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
