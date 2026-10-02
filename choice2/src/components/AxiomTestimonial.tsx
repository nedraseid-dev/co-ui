import React, { useState } from 'react';
import { AXIOM_TESTIMONIALS } from '../data/axiomContent';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

export const AxiomTestimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = AXIOM_TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? AXIOM_TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === AXIOM_TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const renderQuote = (fullQuote: string, highlight: string) => {
    if (!highlight || !fullQuote.includes(highlight)) {
      return <span>{fullQuote}</span>;
    }
    const [before, after] = fullQuote.split(highlight);
    return (
      <>
        <span>{before}</span>
        <span className="text-white font-semibold underline decoration-[#ff3b00]/60 underline-offset-4">{highlight}</span>
        <span>{after}</span>
      </>
    );
  };

  return (
    <section id="testimonial" className="relative bg-[#080808] border-b border-neutral-900 py-24 sm:py-32 px-6 sm:px-8 lg:px-12 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Speaker profile & metadata */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
            <span className="text-[#ff3b00] text-sm">·</span>
            <span>TESTIMONIAL</span>
          </div>

          <div className="font-mono text-xs text-neutral-400 tracking-wider">
            {current.index}
          </div>

          {/* Avatar and Name */}
          <div className="pt-2 flex items-center gap-4">
            <img 
              src={current.avatar} 
              alt={current.name}
              className="w-12 h-12 rounded-full object-cover border border-neutral-800"
              referrerPolicy="no-referrer"
            />
            <div>
              <h4 className="text-sm font-semibold text-white tracking-tight">{current.name}</h4>
              <p className="text-xs text-neutral-400">{current.role}</p>
            </div>
          </div>

          {/* Company Logo lockup */}
          <div className="flex items-center gap-2 pt-1 text-xs font-bold tracking-wider text-neutral-300">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
              <path d="M12 2L13.5 8.5L20 7L15 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9 12L4 7L10.5 8.5L12 2Z" />
            </svg>
            <span>{current.companyLogoText}</span>
          </div>

          {/* Structured metadata table */}
          <div className="pt-4 border-t border-neutral-900 space-y-2.5 max-w-xs text-xs font-mono">
            <div className="flex items-center justify-between text-neutral-400">
              <span className="tracking-wider">SCOPE</span>
              <span className="text-white font-medium">{current.scope}</span>
            </div>
            <div className="flex items-center justify-between text-neutral-400">
              <span className="tracking-wider">DEPLOYED</span>
              <span className="text-white font-medium">{current.deployed}</span>
            </div>
            <div className="flex items-center justify-between text-neutral-400">
              <span className="tracking-wider">SINCE</span>
              <span className="text-white font-medium">{current.since}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Statement & Carousel controls */}
        <div className="lg:col-span-8 flex flex-col justify-between min-h-[300px]">
          
          <div className="relative">
            <div className="text-neutral-800 mb-2 select-none pointer-events-none">
              <Quote className="w-12 h-12 stroke-[1] text-neutral-700" />
            </div>

            <blockquote className="text-2xl sm:text-3xl lg:text-[2.25rem] text-neutral-100 font-normal leading-snug tracking-[-0.015em]">
              {renderQuote(current.quote, current.highlightPhrase)}
            </blockquote>
          </div>

          {/* Carousel arrows */}
          <div className="pt-12 flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 text-neutral-400 hover:text-white transition-all cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-900 text-neutral-400 hover:text-white transition-all cursor-pointer"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
