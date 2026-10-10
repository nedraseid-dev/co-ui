import React from 'react';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { NEWS_ITEMS } from '../data/content';

export const ResearchIndexPage: React.FC = () => {
  const researchItems = NEWS_ITEMS.filter((article) => article.type === 'featured');

  return (
    <main className="min-h-screen bg-[#080808] text-white selection:bg-[#ff3b00] selection:text-black">
      <header className="border-b border-neutral-900 px-6 py-5 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          <a href="/" className="font-['Poppins',sans-serif] text-lg font-extrabold tracking-tight text-white">
            parsim<span className="text-[#ff3b00]">.</span>
          </a>
          <a href="/" className="inline-flex items-center gap-2 text-xs font-medium text-neutral-400 transition-colors hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to home
          </a>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ff3b00]">Research &amp; papers</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">Research, results, and releases.</h1>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400 sm:text-base">
            Benchmarks and company updates from the Parsim team.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-14">
          {researchItems.map((article) => (
            <a
              key={article.id}
              href={`/research/${article.id}`}
              className="group overflow-hidden border border-neutral-800 bg-[#0e0e0e] transition-colors hover:border-neutral-600"
            >
              {article.image && (
                <div className="aspect-[16/9] overflow-hidden bg-neutral-900">
                  <img src={article.image} alt={article.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" />
                </div>
              )}
              <div className="p-5 sm:p-7">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-mono uppercase tracking-widest text-neutral-500">
                  <span className="text-[#ff3b00]">{article.category}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    {article.date}
                  </span>
                  {article.readTime && (
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3 w-3" aria-hidden="true" />
                      {article.readTime}
                    </span>
                  )}
                </div>
                <h2 className="mt-4 text-lg font-semibold leading-snug text-white transition-colors group-hover:text-[#ff3b00] sm:text-xl">
                  {article.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{article.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-mono text-neutral-300">
                  Read research
                  <ArrowRight className="h-3.5 w-3.5 text-[#ff3b00] transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};