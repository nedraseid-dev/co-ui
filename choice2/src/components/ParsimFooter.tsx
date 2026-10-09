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
    <footer className="relative w-full bg-[#ff3b00] text-black pt-10 sm:pt-14 pb-4 sm:pb-6 px-6 sm:px-8 lg:px-12 overflow-hidden selection:bg-black selection:text-[#ff3b00]">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        
        {/* Top Callout & Quick Action Row */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 border-b border-black/20 pb-8">
          
          <div className="space-y-2 max-w-xl">
            <h2 className="inline-block px-2.5 py-1 -mx-2.5 rounded transition-all duration-200 hover:bg-black hover:text-[#ff3b00] text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight text-black leading-tight cursor-default">
              Tokens that think across horizons.
            </h2>
            <p className="inline-block px-2.5 py-1 -mx-2.5 rounded transition-all duration-200 hover:bg-black hover:text-[#ff3b00] text-xs sm:text-sm text-black/90 font-medium leading-relaxed max-w-lg cursor-default">
              Describe your model architecture, KV cache constraints, or agentic loop requirements. Inference kernel architects respond in 2 hours.
            </p>

            {/* Quick terminal pip command */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2.5 bg-black/15 hover:bg-black border border-black/25 hover:border-black rounded px-3 py-1.5 font-mono text-xs text-black hover:text-[#ff3b00] transition-all group">
                <Terminal className="w-3.5 h-3.5 text-black group-hover:text-[#ff3b00] transition-colors" />
                <span className="text-black/60 group-hover:text-[#ff3b00]/70 transition-colors">$</span>
                <span className="font-semibold select-all">{installCmd}</span>
                <button
                  onClick={handleCopy}
                  className="ml-1.5 p-1 rounded-sm text-black group-hover:text-[#ff3b00] hover:bg-white/10 transition-colors cursor-pointer"
                  title="Copy command"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-black group-hover:text-[#ff3b00]" /> : <Copy className="w-3.5 h-3.5 text-black group-hover:text-[#ff3b00]" />}
                </button>
              </div>
            </div>
          </div>

          {/* Quick Metrics & Deploy Button */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            <div className="font-mono text-xs space-y-0.5 px-3 py-1.5 -mx-3 rounded transition-all duration-200 hover:bg-black group cursor-default">
              <div className="text-black/70 group-hover:text-[#ff3b00]/80 font-semibold text-[10px] tracking-wider transition-colors">10M RECALL FIDELITY</div>
              <div className="text-lg sm:text-xl font-bold text-black group-hover:text-[#ff3b00] transition-colors">99.98%</div>
            </div>
            <div className="font-mono text-xs space-y-0.5 px-3 py-1.5 -mx-3 rounded transition-all duration-200 hover:bg-black group cursor-default">
              <div className="text-black/70 group-hover:text-[#ff3b00]/80 font-semibold text-[10px] tracking-wider transition-colors">KV REDUCTION FACTOR</div>
              <div className="text-lg sm:text-xl font-bold text-black group-hover:text-[#ff3b00] transition-colors">16.4x</div>
            </div>
            <button
              onClick={onOpenContact}
              className="group flex items-center gap-2.5 bg-black hover:bg-neutral-950 text-white hover:text-[#ff3b00] text-xs font-semibold px-4 sm:px-5 py-2.5 sm:py-3 rounded-sm transition-all duration-200 cursor-pointer shadow-lg"
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
            <span className="inline-block px-2 py-0.5 -mx-2 rounded-sm text-black/70 hover:text-[#ff3b00] hover:bg-black font-semibold tracking-wider text-[11px] transition-all cursor-default">
              KERNEL NOC 24/7
            </span>
            <div className="space-y-1 text-black font-medium">
              <div>
                <a 
                  href="tel:+14158905231" 
                  className="inline-block px-2 py-0.5 -mx-2 rounded-sm hover:bg-black hover:text-[#ff3b00] transition-all cursor-pointer"
                >
                  +1 (415) 890-5231
                </a>
              </div>
              <div>
                <a 
                  href="mailto:kernels@parsim.ai" 
                  className="inline-block px-2 py-0.5 -mx-2 rounded-sm hover:bg-black hover:text-[#ff3b00] transition-all cursor-pointer"
                >
                  kernels@parsim.ai
                </a>
              </div>
              <div className="pt-1">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 -mx-2 rounded-sm hover:bg-black hover:text-[#ff3b00] text-[10px] font-bold text-black transition-all group cursor-default">
                  <span className="w-1.5 h-1.5 rounded-full bg-black group-hover:bg-[#ff3b00] animate-pulse transition-colors" />
                  <span>KERNELS 100% OPERATIONAL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2: ARCHITECTURE */}
          <div className="space-y-2.5">
            <span className="inline-block px-2 py-0.5 -mx-2 rounded-sm text-black/70 hover:text-[#ff3b00] hover:bg-black font-semibold tracking-wider text-[11px] transition-all cursor-default">
              ARCHITECTURE
            </span>
            <ul className="space-y-1 text-black font-medium">
              <li>
                <button 
                  onClick={() => onNavigateSection('capabilities')} 
                  className="inline-block px-2 py-0.5 -mx-2 rounded-sm hover:bg-black hover:text-[#ff3b00] transition-all text-left cursor-pointer"
                >
                  Long-Horizon Agents
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('live-token-stream')} 
                  className="inline-block px-2 py-0.5 -mx-2 rounded-sm hover:bg-black hover:text-[#ff3b00] transition-all text-left cursor-pointer"
                >
                  Live Token Stream
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('why-parsim')} 
                  className="inline-block px-2 py-0.5 -mx-2 rounded-sm hover:bg-black hover:text-[#ff3b00] transition-all text-left cursor-pointer"
                >
                  Sub-quadratic Kernels
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('performance')} 
                  className="inline-block px-2 py-0.5 -mx-2 rounded-sm hover:bg-black hover:text-[#ff3b00] transition-all text-left cursor-pointer"
                >
                  10M Needle Audits
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: MODELS & PAPERS */}
          <div className="space-y-2.5">
            <span className="inline-block px-2 py-0.5 -mx-2 rounded-sm text-black/70 hover:text-[#ff3b00] hover:bg-black font-semibold tracking-wider text-[11px] transition-all cursor-default">
              MODELS &amp; PAPERS
            </span>
            <ul className="space-y-1 text-black font-medium">
              <li>
                <button 
                  onClick={() => onNavigateSection('news')} 
                  className="inline-block px-2 py-0.5 -mx-2 rounded-sm hover:bg-black hover:text-[#ff3b00] transition-all text-left cursor-pointer"
                >
                  DeepSeek-R1 (671B)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('news')} 
                  className="inline-block px-2 py-0.5 -mx-2 rounded-sm hover:bg-black hover:text-[#ff3b00] transition-all text-left cursor-pointer"
                >
                  Llama-3.3 70B &amp; 405B
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenTemplatePage('Subspace Projection Paper')} 
                  className="inline-block px-2 py-0.5 -mx-2 rounded-sm hover:bg-black hover:text-[#ff3b00] transition-all text-left cursor-pointer"
                >
                  ArXiv:2602.10928
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenTemplatePage('H100/B200 Kernel Benchmarks')} 
                  className="inline-block px-2 py-0.5 -mx-2 rounded-sm hover:bg-black hover:text-[#ff3b00] transition-all text-left cursor-pointer"
                >
                  Triton / CUDA Wheels
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: COMPANY & LEGAL */}
          <div className="space-y-2.5">
            <span className="inline-block px-2 py-0.5 -mx-2 rounded-sm text-black/70 hover:text-[#ff3b00] hover:bg-black font-semibold tracking-wider text-[11px] transition-all cursor-default">
              COMPANY
            </span>
            <ul className="space-y-1 text-black font-medium">
              <li>
                <button 
                  onClick={() => onOpenContact()} 
                  className="inline-block px-2 py-0.5 -mx-2 rounded-sm hover:bg-black hover:text-[#ff3b00] transition-all text-left cursor-pointer"
                >
                  Careers (Kernel Eng)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenTemplatePage('Security & Air-gap Policy')} 
                  className="inline-block px-2 py-0.5 -mx-2 rounded-sm hover:bg-black hover:text-[#ff3b00] transition-all text-left cursor-pointer"
                >
                  Security Whitepaper
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenTemplatePage('Privacy Notice')} 
                  className="inline-block px-2 py-0.5 -mx-2 rounded-sm hover:bg-black hover:text-[#ff3b00] transition-all text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenTemplatePage('Licensing & IP')} 
                  className="inline-block px-2 py-0.5 -mx-2 rounded-sm hover:bg-black hover:text-[#ff3b00] transition-all text-left cursor-pointer"
                >
                  Enterprise SLA
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits Bar */}
        <div className="border-t border-black/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-black/75">
          <div>
            <span className="inline-block px-2 py-0.5 -mx-2 rounded-sm hover:bg-black hover:text-[#ff3b00] transition-all cursor-default">
              &copy; {new Date().getFullYear()} Parsim Compute Architecture Inc. All rights reserved.
            </span>
          </div>
          <div>
            <span className="inline-block px-2 py-0.5 -mx-2 rounded-sm hover:bg-black hover:text-[#ff3b00] transition-all cursor-default">
              Engineered for infinite-horizon compute.
            </span>
          </div>
        </div>

        {/* Big "parsim" Wordmark with Vertical Half Blur & Interactive Orange-on-Black Hover */}
        <div className="relative pt-4 sm:pt-6 pb-6 sm:pb-8 overflow-hidden text-center leading-none">
          <div className="relative inline-block mx-auto max-w-full group px-4 py-2 sm:px-8 sm:py-3 rounded-2xl transition-all duration-300 hover:bg-black cursor-pointer">
            
            {/* Layer 1: Razor-Sharp Upper Half of Every Letter */}
            <div 
              className="font-serif tracking-tighter text-black group-hover:text-[#ff3b00] transition-colors duration-300 text-8xl sm:text-[11rem] md:text-[14rem] lg:text-[16.5rem] leading-[0.82] font-normal"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, #000 45%, transparent 54%)',
                maskImage: 'linear-gradient(to bottom, #000 0%, #000 45%, transparent 54%)',
              }}
            >
              parsim<span className="text-black group-hover:text-[#ff3b00] transition-colors duration-300">.</span>
            </div>

            {/* Layer 2: Distinctly Blurred Lower Part of Every Letter */}
            <div 
              className="absolute inset-0 font-serif tracking-tighter text-black group-hover:text-[#ff3b00] transition-colors duration-300 text-8xl sm:text-[11rem] md:text-[14rem] lg:text-[16.5rem] leading-[0.82] font-normal"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 38%, #000 48%, #000 100%)',
                maskImage: 'linear-gradient(to bottom, transparent 38%, #000 48%, #000 100%)',
                filter: 'blur(12px)',
                WebkitFilter: 'blur(12px)',
                opacity: 0.92,
              }}
              aria-hidden="true"
            >
              parsim<span className="text-black group-hover:text-[#ff3b00] transition-colors duration-300">.</span>
            </div>

            {/* Layer 3: Deep Ambient Blur Diffusion on the Lower Part */}
            <div 
              className="absolute inset-0 font-serif tracking-tighter text-black group-hover:text-[#ff3b00] transition-colors duration-300 text-8xl sm:text-[11rem] md:text-[14rem] lg:text-[16.5rem] leading-[0.82] font-normal"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 40%, #000 52%, #000 100%)',
                maskImage: 'linear-gradient(to bottom, transparent 40%, #000 52%, #000 100%)',
                filter: 'blur(26px)',
                WebkitFilter: 'blur(26px)',
                opacity: 0.65,
              }}
              aria-hidden="true"
            >
              parsim<span className="text-black group-hover:text-[#ff3b00] transition-colors duration-300">.</span>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
};
