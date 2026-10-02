import React, { useState, useRef, useEffect, useCallback } from 'react';
import { TESTIMONIALS } from '../data/content';
import { Quote } from 'lucide-react';

export const Testimonial: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelLockRef = useRef(false);

  // Mouse drag support for desktop non-trackpad users
  const isPointerDownRef = useRef(false);
  const pointerStartXRef = useRef(0);
  const scrollStartXRef = useRef(0);
  const hasMovedRef = useRef(false);

  const goToSlide = useCallback((idx: number) => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth;
    containerRef.current.scrollTo({
      left: idx * width,
      behavior: 'smooth',
    });
    setCurrentIndex(idx);
  }, []);

  const slideNext = useCallback(() => {
    if (!containerRef.current) return;
    const nextIndex = (currentIndex + 1) % TESTIMONIALS.length;
    goToSlide(nextIndex);
  }, [currentIndex, goToSlide]);

  const slidePrev = useCallback(() => {
    if (!containerRef.current) return;
    const prevIndex = (currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    goToSlide(prevIndex);
  }, [currentIndex, goToSlide]);

  // Handle scroll events to keep indicator tabs synchronized
  const handleScroll = () => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth;
    if (width === 0) return;
    const scrollPos = containerRef.current.scrollLeft;
    const newIndex = Math.round(scrollPos / width);
    if (newIndex >= 0 && newIndex < TESTIMONIALS.length && newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
    }
  };

  // Trackpad two-finger horizontal slide detection & wheel gestures
  const handleWheel = (e: React.WheelEvent) => {
    // If the user performs a horizontal slide gesture with trackpad or mouse wheel
    if (Math.abs(e.deltaX) > 25 && !wheelLockRef.current) {
      wheelLockRef.current = true;
      if (e.deltaX > 25) {
        slideNext();
      } else {
        slidePrev();
      }
      setTimeout(() => {
        wheelLockRef.current = false;
      }, 500);
    }
  };

  // Pointer drag event handlers for mouse users
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    if (!containerRef.current) return;
    isPointerDownRef.current = true;
    hasMovedRef.current = false;
    pointerStartXRef.current = e.clientX;
    scrollStartXRef.current = containerRef.current.scrollLeft;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current || !containerRef.current) return;
    const delta = e.clientX - pointerStartXRef.current;
    if (Math.abs(delta) > 5) {
      hasMovedRef.current = true;
      containerRef.current.scrollLeft = scrollStartXRef.current - delta;
    }
  };

  const handlePointerUpOrCancel = (e: React.PointerEvent) => {
    if (!isPointerDownRef.current || !containerRef.current) return;
    isPointerDownRef.current = false;
    const delta = e.clientX - pointerStartXRef.current;
    
    if (hasMovedRef.current) {
      if (delta < -35) {
        slideNext();
      } else if (delta > 35) {
        slidePrev();
      } else {
        goToSlide(currentIndex);
      }
    }
  };

  // Auto-advance sliding (slides every 6.5s when not hovered/interacting)
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      if (!isPointerDownRef.current && !wheelLockRef.current) {
        slideNext();
      }
    }, 6500);
    return () => clearInterval(timer);
  }, [isHovered, slideNext]);

  // Keep scroll aligned on window resize
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      containerRef.current.scrollLeft = currentIndex * width;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentIndex]);

  const renderQuote = (fullQuote: string, highlight: string) => {
    if (!highlight || !fullQuote.includes(highlight)) {
      return <span>{fullQuote}</span>;
    }
    const [before, after] = fullQuote.split(highlight);
    return (
      <>
        <span>{before}</span>
        <span className="text-white font-semibold underline decoration-[#ff3b00]/70 underline-offset-4">{highlight}</span>
        <span>{after}</span>
      </>
    );
  };

  return (
    <section 
      id="testimonial" 
      className="relative bg-[#080808] border-b border-neutral-900 py-24 sm:py-32 px-6 sm:px-8 lg:px-12 text-white overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background ambient orange flare */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#ff3b00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Horizontal Native Sliding Viewport */}
        <div
          ref={containerRef}
          onScroll={handleScroll}
          onWheel={handleWheel}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUpOrCancel}
          onPointerCancel={handlePointerUpOrCancel}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar select-none cursor-grab active:cursor-grabbing touch-pan-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {TESTIMONIALS.map((item) => (
            <div 
              key={item.id}
              className="w-full min-w-full flex-shrink-0 snap-center snap-always pr-4 sm:pr-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                
                {/* Left Column: Speaker profile & metadata */}
                <div className="lg:col-span-4 space-y-6">
                  <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
                    <span className="text-[#ff3b00] text-sm">·</span>
                    <span>FRONTIER INFERENCE TESTIMONIAL</span>
                  </div>

                  <div className="font-mono text-xs text-neutral-400 tracking-wider flex items-center gap-2">
                    <span className="text-white font-bold">{item.index}</span>
                    <span className="text-neutral-600">/ 03</span>
                  </div>

                  {/* Avatar and Name */}
                  <div className="pt-2 flex items-center gap-4">
                    <img 
                      src={item.avatar} 
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border border-neutral-800 shadow-md"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-white tracking-tight">{item.name}</h4>
                      <p className="text-xs text-neutral-400">{item.role}</p>
                    </div>
                  </div>

                  {/* Company Logo lockup */}
                  <div className="flex items-center gap-2 pt-1 text-xs font-bold tracking-wider text-neutral-300">
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white">
                      <path d="M12 2L13.5 8.5L20 7L15 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9 12L4 7L10.5 8.5L12 2Z" />
                    </svg>
                    <span>{item.companyLogoText}</span>
                  </div>

                  {/* Structured metadata table */}
                  <div className="pt-4 border-t border-neutral-900 space-y-2.5 max-w-xs text-xs font-mono">
                    <div className="flex items-center justify-between text-neutral-400">
                      <span className="tracking-wider">SCOPE</span>
                      <span className="text-white font-medium">{item.scope}</span>
                    </div>
                    <div className="flex items-center justify-between text-neutral-400">
                      <span className="tracking-wider">DEPLOYED</span>
                      <span className="text-white font-medium">{item.deployed}</span>
                    </div>
                    <div className="flex items-center justify-between text-neutral-400">
                      <span className="tracking-wider">SINCE</span>
                      <span className="text-white font-medium">{item.since}</span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Statement */}
                <div className="lg:col-span-8 flex flex-col justify-between min-h-[300px]">
                  <div className="relative">
                    <div className="text-neutral-800 mb-2 select-none pointer-events-none">
                      <Quote className="w-12 h-12 stroke-[1] text-neutral-700" />
                    </div>

                    <blockquote className="text-2xl sm:text-3xl lg:text-[2.25rem] text-neutral-100 font-normal leading-snug tracking-[-0.015em]">
                      {renderQuote(item.quote, item.highlightPhrase)}
                    </blockquote>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Sliding Progress Track & Gesture Indicator (No Arrows) */}
        <div className="mt-12 pt-8 border-t border-neutral-900/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          {/* Segmented Slide Indicators */}
          <div className="flex items-center gap-3">
            {TESTIMONIALS.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => goToSlide(idx)}
                  className="group py-2 flex items-center gap-2 text-xs font-mono transition-all cursor-pointer"
                  title={`Slide to testimonial 0${idx + 1}`}
                >
                  <div 
                    className={`h-[3px] rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'w-12 bg-[#ff3b00]' 
                        : 'w-5 bg-neutral-800 group-hover:bg-neutral-600'
                    }`}
                  />
                  <span className={`transition-colors ${isActive ? 'text-white font-bold' : 'text-neutral-500 group-hover:text-neutral-300'}`}>
                    0{idx + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sliding Gesture Hint */}
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 select-none">
            <span className="text-[#ff3b00] animate-pulse">←</span>
            <span>Slide left or right · Auto-slides</span>
            <span className="text-[#ff3b00] animate-pulse">→</span>
          </div>

        </div>

      </div>
    </section>
  );
};
