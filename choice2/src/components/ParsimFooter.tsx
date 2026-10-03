import React, { useState } from 'react';
import { ArrowRight, Terminal, Copy, Check } from 'lucide-react';

interface ParsimFooterProps {
  onOpenContact: () => void;
  onNavigateSection: (id: string) => void;
  onOpenTemplatePage: (title: string) => void;
}

export const ParsimFooter: React.FC<ParsimFooterProps> = ({
  onOpenContact,
  onNavigateSection,
  onOpenTemplatePage,
}) => {
  const [copied, setCopied] = useState(false);
  const installCmd = 'pip install parsim-attention';

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="relative w-full bg-[#ff3b00] text-black pt-10 sm:pt-14 pb-4 sm:pb-6 px-6 sm:px-8 lg:px-12 selection:bg-black selection:text-[#ff3b00] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        
        {/* Top Callout & Quick Action Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 border-b border-black/20 pb-8">
          
          <div className="space-y-2 max-w-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-black leading-tight">
              Tokens that think across horizons.
            </h2>
            <p className="text-xs sm:text-sm text-black/85 font-medium leading-relaxed max-w-lg">
              Describe your model architecture, KV cache constraints, or agentic loop requirements. Inference kernel architects respond in 2 hours.
            </p>

            {/* Quick terminal pip command */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2.5 bg-black/15 border border-black/25 rounded px-3 py-1.5 font-mono text-xs text-black">
                <Terminal className="w-3.5 h-3.5 text-black" />
                <span className="text-black/60">$</span>
                <span className="font-semibold">{installCmd}</span>
                <button
                  onClick={handleCopy}
                  className="ml-1.5 p-1 text-black/70 hover:text-black transition-colors cursor-pointer"
                  title="Copy command"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-black" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          </div>

          {/* Quick Metrics & Deploy Button */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <div className="font-mono text-xs space-y-0.5">
              <div className="text-black/70 font-semibold text-[10px] tracking-wider">10M RECALL FIDELITY</div>
              <div className="text-lg sm:text-xl font-bold text-black">99.98%</div>
            </div>
            <div className="font-mono text-xs space-y-0.5">
              <div className="text-black/70 font-semibold text-[10px] tracking-wider">KV REDUCTION FACTOR</div>
              <div className="text-lg sm:text-xl font-bold text-black">16.4x</div>
            </div>
            <button
              onClick={onOpenContact}
              className="group flex items-center gap-2.5 bg-black hover:bg-neutral-900 text-white text-xs font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-sm transition-all duration-200 cursor-pointer shadow-lg"
            >
              <span>Deploy Engine</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#ff3b00] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Directory Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-mono text-xs">
          
          {/* Col 1: KERNEL NOC */}
          <div className="space-y-2.5">
            <span className="text-black/60 font-semibold tracking-wider text-[11px]">KERNEL NOC 24/7</span>
            <div className="space-y-1 text-black font-medium">
              <div>+1 (415) 890-5231</div>
              <div>kernels@parsim.ai</div>
              <div className="pt-1 flex items-center gap-1.5 text-[10px] font-bold text-black">
                <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                <span>KERNELS 100% OPERATIONAL</span>
              </div>
            </div>
          </div>

          {/* Col 2: ARCHITECTURE */}
          <div className="space-y-2.5">
            <span className="text-black/60 font-semibold tracking-wider text-[11px]">ARCHITECTURE</span>
            <ul className="space-y-1 text-black font-medium">
              <li>
                <button onClick={() => onNavigateSection('capabilities')} className="hover:underline cursor-pointer">
                  Long-Horizon Agents
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('token-maximizer')} className="hover:underline cursor-pointer">
                  KV-Cache Reducer
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('why-parsim')} className="hover:underline cursor-pointer">
                  Sub-quadratic Kernels
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('performance')} className="hover:underline cursor-pointer">
                  10M Needle Audits
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: RESEARCH & MODELS */}
          <div className="space-y-2.5">
            <span className="text-black/60 font-semibold tracking-wider text-[11px]">MODELS &amp; PAPERS</span>
            <ul className="space-y-1 text-black font-medium">
              <li>
                <button onClick={() => onNavigateSection('news')} className="hover:underline cursor-pointer">
                  DeepSeek-R1 (671B)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('news')} className="hover:underline cursor-pointer">
                  Llama-3.3 70B &amp; 405B
                </button>
              </li>
              <li>
                <button onClick={() => onOpenTemplatePage('Subspace Projection Paper')} className="hover:underline cursor-pointer">
                  ArXiv:2602.10928
                </button>
              </li>
              <li>
                <button onClick={() => onOpenTemplatePage('H100/B200 Kernel Benchmarks')} className="hover:underline cursor-pointer">
                  Triton / CUDA Wheels
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: COMPANY & LEGAL */}
          <div className="space-y-2.5">
            <span className="text-black/60 font-semibold tracking-wider text-[11px]">COMPANY</span>
            <ul className="space-y-1 text-black font-medium">
              <li>
                <button onClick={() => onOpenContact()} className="hover:underline cursor-pointer">
                  Careers (Kernel Eng)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenTemplatePage('Security & Air-gap Policy')} className="hover:underline cursor-pointer">
                  Security Whitepaper
                </button>
              </li>
              <li>
                <button onClick={() => onOpenTemplatePage('Privacy Notice')} className="hover:underline cursor-pointer">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onOpenTemplatePage('Licensing & IP')} className="hover:underline cursor-pointer">
                  Enterprise SLA
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits Bar */}
        <div className="border-t border-black/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-black/75">
          <div>
            &copy; {new Date().getFullYear()} Parsim Compute Architecture Inc. All rights reserved.
          </div>
          <div>
            Engineered for infinite-horizon compute.
          </div>
        </div>

        {/* Big "parsim" Wordmark with Vertical Half Blur (Lower part of every letter blurred) */}
        <div className="relative pt-4 sm:pt-6 pb-6 sm:pb-8 overflow-hidden select-none pointer-events-none text-center leading-none">
          <div className="relative inline-block mx-auto max-w-full">
            
            {/* Layer 1: Razor-Sharp Upper Half of Every Letter */}
            <div 
              className="font-serif tracking-tighter text-black text-8xl sm:text-[11rem] md:text-[14rem] lg:text-[16.5rem] leading-[0.82] font-normal"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, #000 45%, transparent 54%)',
                maskImage: 'linear-gradient(to bottom, #000 0%, #000 45%, transparent 54%)',
              }}
            >
              parsim<span className="text-black">.</span>
            </div>

            {/* Layer 2: Distinctly Blurred Lower Part of Every Letter */}
            <div 
              className="absolute inset-0 font-serif tracking-tighter text-black text-8xl sm:text-[11rem] md:text-[14rem] lg:text-[16.5rem] leading-[0.82] font-normal"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 38%, #000 48%, #000 100%)',
                maskImage: 'linear-gradient(to bottom, transparent 38%, #000 48%, #000 100%)',
                filter: 'blur(12px)',
                WebkitFilter: 'blur(12px)',
                opacity: 0.92,
              }}
              aria-hidden="true"
            >
              parsim<span className="text-black">.</span>
            </div>

            {/* Layer 3: Deep Ambient Blur Diffusion on the Lower Part */}
            <div 
              className="absolute inset-0 font-serif tracking-tighter text-black text-8xl sm:text-[11rem] md:text-[14rem] lg:text-[16.5rem] leading-[0.82] font-normal"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 40%, #000 52%, #000 100%)',
                maskImage: 'linear-gradient(to bottom, transparent 40%, #000 52%, #000 100%)',
                filter: 'blur(26px)',
                WebkitFilter: 'blur(26px)',
                opacity: 0.65,
              }}
              aria-hidden="true"
            >
              parsim<span className="text-black">.</span>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};
