import React from 'react';
import { ArrowLeft, ArrowUpRight, Calendar, Clock } from 'lucide-react';
import { NewsItem } from '../types';

interface ResearchDetailPageProps {
  article: NewsItem;
}

export const ResearchDetailPage: React.FC<ResearchDetailPageProps> = ({ article }) => (
  <main className="min-h-screen bg-[#080808] text-white selection:bg-[#ff3b00] selection:text-black">
    <header className="border-b border-neutral-900 px-6 py-5 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <a href="/" className="font-['Poppins',sans-serif] text-lg font-extrabold tracking-tight text-white">
          parsim<span className="text-[#ff3b00]">.</span>
        </a>
        <a href="/#news" className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 transition-colors hover:text-white">
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to research
        </a>
      </div>
    </header>

    <article className="mx-auto max-w-5xl px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-mono uppercase tracking-widest text-neutral-400">
          <span className="border border-neutral-800 px-2.5 py-1 text-[#ff3b00]">{article.category}</span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3 w-3 text-[#ff3b00]" aria-hidden="true" />
            {article.date}
          </span>
          {article.readTime && (
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3 w-3 text-[#ff3b00]" aria-hidden="true" />
              {article.readTime}
            </span>
          )}
        </div>

        <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          {article.title}
        </h1>
        {article.excerpt && (
          <p className="mt-5 text-base leading-relaxed text-neutral-400 sm:text-lg">
            {article.excerpt}
          </p>
        )}
      </div>

      {article.image && (
        <div className="mt-10 aspect-[16/9] overflow-hidden border border-neutral-800 bg-neutral-900 sm:mt-12">
          <img src={article.image} alt={article.title} className="h-full w-full object-cover" />
        </div>
      )}

      <div className="mx-auto mt-10 max-w-3xl sm:mt-12">
        <p className="text-sm leading-8 text-neutral-300 sm:text-base">
          {article.fullContent || article.excerpt}
        </p>
        <div className="mt-10 flex flex-col gap-4 border-t border-neutral-900 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <a href="/#news" className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to research
          </a>
          <a href="/auth" className="inline-flex items-center gap-2 bg-[#ff3b00] px-4 py-3 text-xs font-semibold text-black transition-colors hover:bg-[#ff6a36]">
            Continue to Parsim
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  </main>
);