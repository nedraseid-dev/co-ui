import React from 'react';
import { ShieldCheck, Infinity, Cpu, Layers } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const WhyParsim: React.FC = () => {
  return (
    <section id="why-parsim" className="relative bg-[#080808] border-b border-neutral-900 py-24 sm:py-32 px-6 sm:px-8 lg:px-12 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading and intro */}
        <ScrollReveal direction="up" delay={0.1} className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
            <span className="text-[#ff3b00] text-sm">·</span>
            <span>WHY PARSIM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-medium tracking-tight text-white leading-[1.12]">
            Built to compress. <br />
            Engineered to <br />
            reason.
          </h2>

          <p className="text-sm text-neutral-400 leading-relaxed max-w-sm pt-2">
            Four algorithmic commitments we hold across every inference pass, from prefill to autoregressive decoding.
          </p>
        </ScrollReveal>

        {/* Right Column: 2x2 Grid of Commitment Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Card 1: Lossless KV-compression */}
          <ScrollReveal direction="up" delay={0.15}>
            <div className="bg-[#0e0e0e] border border-neutral-800/80 hover:border-neutral-700 p-6 sm:p-7 rounded-sm flex flex-col justify-between transition-colors min-h-[200px] shadow-lg group">
              <div className="flex items-center justify-between text-neutral-400">
                <ShieldCheck className="w-5 h-5 text-neutral-300 stroke-[1.5] group-hover:text-[#ff3b00] transition-colors" />
                <span className="font-mono text-xs text-neutral-400 font-medium tracking-wider">16X RATIO</span>
              </div>
              <div className="mt-8 space-y-2">
                <h3 className="text-base font-semibold text-white tracking-tight group-hover:text-[#ff3b00] transition-colors">
                  Lossless KV-compression, 16x factor
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-400 leading-relaxed">
                  Built with adaptive attention subspace projection backed by zero-perplexity-drift guarantees.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: 10M+ long-horizon context */}
          <ScrollReveal direction="up" delay={0.2}>
            <div className="bg-[#0e0e0e] border border-neutral-800/80 hover:border-neutral-700 p-6 sm:p-7 rounded-sm flex flex-col justify-between transition-colors min-h-[200px] shadow-lg group">
              <div className="flex items-center justify-between text-neutral-400">
                <Infinity className="w-5 h-5 text-neutral-300 stroke-[1.5] group-hover:text-[#ff3b00] transition-colors" />
                <span className="font-mono text-xs text-neutral-400 font-medium tracking-wider">10M+ TOKENS</span>
              </div>
              <div className="mt-8 space-y-2">
                <h3 className="text-base font-semibold text-white tracking-tight group-hover:text-[#ff3b00] transition-colors">
                  10M+ long-horizon context, sustained
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-400 leading-relaxed">
                  Proven stability across million-step agentic execution without degradation or attention sink collapse.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Zero-overhead kernel */}
          <ScrollReveal direction="up" delay={0.25}>
            <div className="bg-[#0e0e0e] border border-neutral-800/80 hover:border-neutral-700 p-6 sm:p-7 rounded-sm flex flex-col justify-between transition-colors min-h-[200px] shadow-lg group">
              <div className="flex items-center justify-between text-neutral-400">
                <Cpu className="w-5 h-5 text-neutral-300 stroke-[1.5] group-hover:text-[#ff3b00] transition-colors" />
                <span className="font-mono text-xs text-neutral-400 font-medium tracking-wider">&lt;1.2% O/H</span>
              </div>
              <div className="mt-8 space-y-2">
                <h3 className="text-base font-semibold text-white tracking-tight group-hover:text-[#ff3b00] transition-colors">
                  Zero-overhead kernel, Bare-metal CUDA
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-400 leading-relaxed">
                  Hand-tuned FlashAttention-3 and Triton kernels engineered for H100, B200, and TPU v5p clusters.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4: Needle-in-haystack recall */}
          <ScrollReveal direction="up" delay={0.3}>
            <div className="bg-[#0e0e0e] border border-neutral-800/80 hover:border-neutral-700 p-6 sm:p-7 rounded-sm flex flex-col justify-between transition-colors min-h-[200px] shadow-lg group">
              <div className="flex items-center justify-between text-neutral-400">
                <Layers className="w-5 h-5 text-neutral-300 stroke-[1.5] group-hover:text-[#ff3b00] transition-colors" />
                <span className="font-mono text-xs text-neutral-400 font-medium tracking-wider">100% RECALL</span>
              </div>
              <div className="mt-8 space-y-2">
                <h3 className="text-base font-semibold text-white tracking-tight group-hover:text-[#ff3b00] transition-colors">
                  Needle-in-haystack recall, 100% deterministic
                </h3>
                <p className="text-xs sm:text-[13px] text-neutral-400 leading-relaxed">
                  Designed so no critical instruction or faint semantic dependency is ever dropped in the context abyss.
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
