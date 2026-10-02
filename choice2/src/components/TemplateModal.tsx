import React from 'react';
import { X } from 'lucide-react';

interface TemplateModalProps {
  pageTitle: string | null;
  onClose: () => void;
}

export const TemplateModal: React.FC<TemplateModalProps> = ({ pageTitle, onClose }) => {
  if (!pageTitle) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-[#0e0e0e] border border-neutral-800 rounded-sm shadow-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Close template modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-6">
          <div className="space-y-2 pr-8">
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
              <span className="text-[#ff3b00] text-sm">·</span>
              <span>PARSIM INFERENCE CORE</span>
            </div>
            <h3 className="text-2xl font-semibold text-white tracking-tight">
              {pageTitle}
            </h3>
          </div>

          {pageTitle === 'Style Guide' && (
            <div className="space-y-4 text-xs font-mono text-white">
              <div className="p-3 bg-[#141414] border border-neutral-800 rounded-sm space-y-2">
                <span className="text-neutral-400 uppercase font-semibold">Background Base</span>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-[#080808] border border-neutral-700" />
                  <div>
                    <div className="text-white font-bold">#080808 / Obsidian Black</div>
                    <div className="text-neutral-400">Card Surface: #0e0e0e / #141414</div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#141414] border border-neutral-800 rounded-sm space-y-2">
                <span className="text-neutral-400 uppercase font-semibold">Signature Accent</span>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-sm bg-[#ff3b00] border border-neutral-700" />
                  <div>
                    <div className="text-[#ff3b00] font-bold">#ff3b00 / International Safety Orange</div>
                    <div className="text-neutral-400">High-visibility glow &amp; buttons</div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#141414] border border-neutral-800 rounded-sm space-y-2">
                <span className="text-neutral-400 uppercase font-semibold">Typography Colors</span>
                <div className="space-y-1">
                  <div className="text-white font-semibold">Headlines: #FFFFFF (Pure White)</div>
                  <div className="text-neutral-400">Body copy: #A3A3A3 / Neutral-400</div>
                  <div className="text-neutral-500">Monospace labels: JetBrains Mono</div>
                </div>
              </div>
            </div>
          )}

          {pageTitle !== 'Style Guide' && (
            <div className="space-y-3 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              <p>
                The {pageTitle} specifications outline the operational parameters and mathematical proofs underpinning Parsim’s sub-quadratic attention kernels.
              </p>
              <div className="p-4 bg-[#141414] border border-neutral-800 rounded-sm font-mono text-xs space-y-1 text-neutral-400">
                <div>Document: REF-PARSIM-2026-v4.2</div>
                <div>Status: Fully Ratified &amp; Active</div>
                <div>Security: Air-Gap Verified</div>
              </div>
              <p>
                For enterprise access keys, on-prem supercluster deployment blueprints, or specialized Triton kernel tuning, contact our systems engineering desk.
              </p>
            </div>
          )}

          <div className="pt-2">
            <button
              onClick={onClose}
              className="w-full py-2.5 bg-[#ff3b00] hover:bg-[#e03400] text-xs font-semibold text-black rounded-sm transition-colors cursor-pointer"
            >
              Dismiss Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
