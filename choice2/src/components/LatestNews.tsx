import React from 'react';
import { NEWS_ITEMS } from '../data/content';
import { NewsItem } from '../types';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { SpotlightCard } from './SpotlightCard';

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
              <span className="text-[#ff3b00] text-sm animate-pulse">·</span>
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

        {/* 2 Featured News Cards with 3D Tilt & Spotlight Glow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredNews.map((article, idx) => (
            <ScrollReveal key={article.id} direction="up" delay={0.15 + idx * 0.1}>
              <SpotlightCard enableTilt={true} className="rounded-sm">
                <a
                  href={`/research/${article.id}`}
                  className="group cursor-pointer bg-[#0e0e0e] border border-neutral-800 rounded-sm overflow-hidden flex flex-col justify-between transition-colors shadow-xl h-full"
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
                      <ArrowRight className="w-3.5 h-3.5 text-[#ff3b00] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>

        {/* 3 Compact Rows */}
        <div className="border-t border-neutral-900 divide-y divide-neutral-900">
          {rowNews.map((article, idx) => (
            <ScrollReveal key={article.id} direction="up" delay={0.1 + idx * 0.08}>
              <div
                onClick={() => onSelectArticle(article)}
                className="group py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-[#111111]/50 px-4 -mx-4 rounded-sm transition-colors"
              >
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                    <span className="text-[#ff3b00] font-medium">{article.category}</span>
                    <span>·</span>
                    <span>{article.date}</span>
                  </div>
                  <h4 className="text-base font-medium text-white group-hover:text-[#ff3b00] transition-colors">
                    {article.title}
                  </h4>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-neutral-500">
                  <span>{article.readTime}</span>
                  <ArrowRight className="w-4 h-4 text-neutral-600 group-hover:text-[#ff3b00] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-neutral-900 pt-8">
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-medium text-white">Put long-horizon intelligence to work.</h3>
              <p className="text-xs sm:text-sm text-neutral-400">Sign in to continue with Parsim.</p>
            </div>
            <a
              href="/auth"
              className="group inline-flex shrink-0 items-center gap-2.5 bg-[#ff3b00] px-5 py-3 text-xs font-semibold text-black transition-colors hover:bg-[#ff6a36]"
            >
              <span>Continue to Parsim</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
