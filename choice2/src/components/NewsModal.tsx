import React from 'react';
import { X, ArrowRight, Calendar, Clock } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsModalProps {
  article: NewsItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const NewsModal: React.FC<NewsModalProps> = ({ article, onClose, onOpenContact }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#0e0e0e] border border-neutral-800 rounded-sm shadow-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        <article className="space-y-6">
          <div className="space-y-3 pr-8">
            <div className="flex items-center gap-3 text-[11px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
              <span className="px-2 py-0.5 bg-neutral-900 border border-neutral-800 text-[#ff3b00] rounded-sm">
                {article.category}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#ff3b00]" />
                {article.date}
              </span>
              {article.readTime && (
                <>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#ff3b00]" />
                    {article.readTime}
                  </span>
                </>
              )}
            </div>

            <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-snug">
              {article.title}
            </h2>
          </div>

          {article.image && (
            <div className="w-full aspect-[16/9] rounded-sm overflow-hidden border border-neutral-800 bg-neutral-900">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          )}

          <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
            <p className="text-base text-neutral-200 font-medium">
              {article.excerpt || "Comprehensive architectural evaluation across multi-turn reasoning chains and distributed GPU memory clusters."}
            </p>

            <p>
              Under standard quadratic self-attention algorithms, serving contexts extending past 1M tokens consumes extreme High Bandwidth Memory (HBM) capacity, creating severe latency bottlenecks. Parsim resolves this through sub-quadratic manifold projection, achieving up to 16.4x memory reduction while preserving needle retrieval accuracy.
            </p>

            <div className="p-4 bg-[#141414] border border-neutral-800 rounded-sm font-mono text-xs space-y-2">
              <div className="text-[10px] text-neutral-400 uppercase font-bold tracking-wider">
                EMPIRICAL VERIFICATION BENCHMARK
              </div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <div>Tested Horizon: <span className="text-white font-semibold">10,240,000 Tokens</span></div>
                <div>Memory Footprint: <span className="text-[#ff3b00] font-semibold">-87.4% VRAM</span></div>
                <div>Perplexity Drift: <span className="text-emerald-400 font-semibold">&lt; 0.002 Delta</span></div>
                <div>Needle Retention: <span className="text-emerald-400 font-semibold">100.0% P95</span></div>
              </div>
            </div>

            <p>
              Frontier research labs are integrating the Parsim Triton attention kernel into production inference fleets to support deep multi-turn agents without paying the traditional memory penalty.
            </p>
          </div>

          <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#ff3b00] hover:bg-[#e03400] text-black text-xs font-semibold px-4 py-2.5 rounded-sm transition-colors cursor-pointer"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </button>

            <button
              onClick={onClose}
              className="text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              Back to Overview
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};
