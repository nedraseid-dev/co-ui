import React from 'react';
import { Zap, ShieldCheck, Activity, Cpu } from 'lucide-react';

export const TickerBar: React.FC = () => {
  const items = [
    { label: 'PARSIM ENGINE v2.8', icon: Zap },
    { label: '10.2M CONTEXT LOSSLESS', icon: Activity },
    { label: '16.4X KV REDUCTION', icon: Cpu },
    { label: 'SUB-QUADRATIC ATTENTION', icon: Zap },
    { label: '99.98% RECALL FIDELITY', icon: ShieldCheck },
    { label: 'BARE-METAL CUDA WHEELS', icon: Cpu },
    { label: '42.8T TOKENS VERIFIED', icon: Activity },
    { label: 'ZERO PERPLEXITY DRIFT', icon: ShieldCheck },
  ];

  return (
    <div className="w-full bg-[#0a0a0a] border-y border-neutral-900 py-3 overflow-hidden select-none">
      <div className="animate-marquee-infinite flex items-center gap-12 font-mono text-[11px] uppercase tracking-wider text-neutral-400">
        {/* Render twice for seamless continuous loop */}
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-2.5 shrink-0 hover:text-white transition-colors cursor-default">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00] animate-pulse" />
              <Icon className="w-3.5 h-3.5 text-[#ff3b00]" />
              <span className="font-semibold text-neutral-300">{item.label}</span>
              <span className="text-neutral-700">///</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
