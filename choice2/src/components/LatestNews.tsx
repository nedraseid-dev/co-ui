import React from 'react';
import { NEWS_ITEMS } from '../data/content';
import { NewsItem } from '../types';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface LatestNewsProps {
  onSelectArticle: (article: NewsItem) => void;
  onViewAllNews: () => void;
}

export const LatestNews: React.FC<LatestNewsProps> = ({ onSelectArticle, onViewAllNews }) => {
  const featuredNews = NEWS_ITEMS.filter((item) => item.type === 'featured');
  const rowNews = NEWS_ITEMS.filter((item) => item.type === 'row');

  return (
    <section id="news" className="bg-[#080808] border-b border-neutral-900 py-24 sm:py-32 px-6 sm:px-8 lg:px-12 text-white">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1} className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
          <div className="space-y-4 max-w-xl">
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
              <span className="text-[#ff3b00] text-sm">·</span>
              <span>RESEARCH &amp; PAPERS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-medium tracking-tight text-white leading-[1.12]">
              Latest benchmarks.
            </h2>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Parsim engineers the mathematical foundation of long-horizon intelligence. A chronicle of what we have proven, published, and deployed.
            </p>
          </div>

          <div>
            <button
              onClick={onViewAllNews}
              className="group flex items-center gap-2 text-xs font-mono tracking-wider text-neutral-400 hover:text-white uppercase transition-colors cursor-pointer"
            >
              <span>SEE THE RECORD</span>
              <span className="text-[#ff3b00] font-semibold text-sm group-hover:translate-x-1 transition-transform">+</span>
            </button>
          </div>
        </ScrollReveal>

        {/* 2 Featured News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredNews.map((article, idx) => (
            <ScrollReveal key={article.id} direction="up" delay={0.15 + idx * 0.1}>
              <div
                onClick={() => onSelectArticle(article)}
                className="group cursor-pointer bg-[#0e0e0e] border border-neutral-800 hover:border-neutral-700 rounded-sm overflow-hidden flex flex-col justify-between transition-colors shadow-xl"
              >
                {/* Image Banner */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                  {article.image && (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute top-4 left-4">
                    <span className="bg-black/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider font-semibold text-[#ff3b00] border border-neutral-800 rounded-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Card Meta & Title */}
                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center gap-3 text-xs font-mono text-neutral-500">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight group-hover:text-[#ff3b00] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>

                  <div className="pt-2 flex items-center gap-1.5 text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                    <span>Read release</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#ff3b00]" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 3 Compact Rows */}
        <div className="border-t border-neutral-900 divide-y divide-neutral-900">
          {rowNews.map((item, idx) => (
            <ScrollReveal key={item.id} direction="up" delay={0.1 + idx * 0.05}>
              <div
                onClick={() => onSelectArticle(item)}
                className="group py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-neutral-950/60 px-2 transition-colors rounded-sm"
              >
                <div className="flex items-center gap-4 sm:gap-6 flex-1">
                  <span className="text-[10px] font-mono tracking-widest text-[#ff3b00] uppercase font-semibold shrink-0 w-12">
                    [{item.category}]
                  </span>
                  <h4 className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">
                    {item.title}
                  </h4>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-6 shrink-0 text-xs font-mono text-neutral-500">
                  <span>{item.date}</span>
                  <span className="text-[#ff3b00] text-sm group-hover:translate-x-1 transition-transform">
                    +
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
