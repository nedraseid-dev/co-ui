import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { ArrowUpRight, Layers, Target } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { SpotlightCard } from './SpotlightCard';

const HEADLINE_A = 'Intelligence should scale with the problem,'.split(' ');
const HEADLINE_B = 'not the memory budget.'.split(' ');

const POINT_OF_VIEW =
  'Context is a resource to steward, not a buffer to fill. Parsim preserves the signals that matter, compresses redundant attention state, and keeps recall deterministic so reasoning can continue across longer horizons.';

const PRINCIPLES = [
  {
    number: '01',
    title: 'Protect the signal',
    description: 'Keep the instructions, decisions, and context that give each token its meaning.',
    icon: Target,
    visual: 'rings',
  },
  {
    number: '02',
    title: 'Compress the overhead',
    description: 'Reduce redundant attention state before memory limits reasoning depth.',
    icon: Layers,
    visual: 'layers',
  },
  {
    number: '03',
    title: 'Extend the horizon',
    description: 'Let agents carry coherent reasoning further, with deterministic recall.',
    icon: ArrowUpRight,
    visual: 'line',
  },
] as const;

/* Headline: words slide up one by one */
const Words: React.FC<{ words: string[]; start: number; wordClass?: string }> = ({ words, start, wordClass = '' }) => (
  <>
    {words.map((w, i) => (
      <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.14em] mr-[0.26em]">
        <motion.span
          className={`inline-block ${wordClass}`}
          initial={{ y: '115%' }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: start + i * 0.07, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {w}
        </motion.span>
      </span>
    ))}
  </>
);

/* Diagram: raw context collapses into a few anchor tokens */
const COLS = 10;
const CELLS = 60;
const ANCHORS = new Set([0, 1, 23, 36, 58, 59]);

const TokenDiagram: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const [compressed, setCompressed] = useState(false);

  useEffect(() => {
    if (!inView) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCompressed(true);
      return undefined;
    }
    const first = setTimeout(() => setCompressed(true), 900);
    const loop = setInterval(() => setCompressed((c) => !c), 3200);
    return () => {
      clearTimeout(first);
      clearInterval(loop);
    };
  }, [inView]);

  return (
    <div ref={ref} className="bg-[#0e0e0e] border border-neutral-800/80 rounded-sm p-5 sm:p-6 space-y-5">
      <div className="flex items-center justify-between font-mono text-[10px] tracking-widest uppercase">
        <span className={compressed ? 'text-neutral-500' : 'text-neutral-300'}>RAW CONTEXT · 10M TOKENS</span>
        <span className={compressed ? 'text-[#ff3b00]' : 'text-neutral-500'}>ANCHORS KEPT</span>
      </div>

      <div className="grid gap-[5px]" style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}>
        {Array.from({ length: CELLS }).map((_, i) => {
          const anchor = ANCHORS.has(i);
          return (
            <motion.span
              key={i}
              className="block aspect-square rounded-[2px]"
              initial={false}
              animate={
                compressed
                  ? anchor
                    ? { opacity: 1, scale: 1.1, backgroundColor: '#ff3b00', boxShadow: '0 0 14px rgba(255,59,0,0.75)' }
                    : { opacity: 0.12, scale: 0.4, backgroundColor: '#6b6b6b', boxShadow: '0 0 0 rgba(255,59,0,0)' }
                  : { opacity: 0.55, scale: 1, backgroundColor: '#6b6b6b', boxShadow: '0 0 0 rgba(255,59,0,0)' }
              }
              transition={{ duration: 0.6, delay: (i % COLS) * 0.025 + Math.floor(i / COLS) * 0.02, ease: 'easeOut' }}
            />
          );
        })}
      </div>

      <div className="flex items-end justify-between border-t border-neutral-800/80 pt-4">
        <div>
          <div className="text-4xl sm:text-5xl font-light text-white tabular-nums leading-none">
            16.4<span className="text-[#ff3b00] font-mono text-2xl ml-0.5">x</span>
          </div>
          <div className="mt-1.5 font-mono text-[10px] tracking-widest text-neutral-500 uppercase">KV compression</div>
        </div>
        <div className="font-mono text-xs text-neutral-400 text-right tabular-nums">
          <span className="text-neutral-500">960 GB</span> → <span className="text-[#ff3b00] font-semibold">58.5 GB</span>
          <div className="mt-1.5 text-[10px] tracking-widest text-neutral-500 uppercase">recall 99.98%</div>
        </div>
      </div>
    </div>
  );
};

/* Small animated visual for each card */
const Visual: React.FC<{ kind: (typeof PRINCIPLES)[number]['visual'] }> = ({ kind }) => {
  if (kind === 'rings') {
    return (
      <svg viewBox="0 0 120 80" className="w-full h-full" fill="none">
        {[36, 24, 12].map((r) => (
          <circle key={r} cx="60" cy="40" r={r} stroke="currentColor" strokeWidth="1" className="text-neutral-600" />
        ))}
        <circle cx="60" cy="40" r="12" stroke="#ff3b00" strokeWidth="1.2" className="hx-ring" />
        <circle cx="60" cy="40" r="12" stroke="#ff3b00" strokeWidth="1.2" className="hx-ring hx-ring-b" />
        <rect x="53" y="38" width="4" height="4" fill="#ff3b00" />
        <rect x="59" y="38" width="4" height="4" fill="#ff3b00" />
        <rect x="65" y="38" width="4" height="4" fill="#ff3b00" />
      </svg>
    );
  }

  if (kind === 'layers') {
    return (
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative w-4/5 h-[72px]">
          <span className="absolute inset-x-0 top-0 h-5 rounded-[3px] bg-neutral-700 transition-all duration-500 group-hover:translate-y-[26px] group-hover:bg-[#ff3b00]" />
          <span className="absolute inset-x-0 top-[26px] h-5 rounded-[3px] bg-neutral-600 transition-all duration-500 group-hover:bg-[#ff3b00]" />
          <span className="absolute inset-x-0 top-[52px] h-5 rounded-[3px] bg-neutral-700 transition-all duration-500 group-hover:-translate-y-[26px] group-hover:bg-[#ff3b00]" />
        </div>
      </div>
    );
  }

  return (
    <svg viewBox="0 0 120 80" className="w-full h-full" fill="none">
      <line x1="4" y1="64" x2="116" y2="64" stroke="currentColor" strokeWidth="1" className="text-neutral-700" />
      <line x1="4" y1="56" x2="40" y2="56" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" className="text-neutral-600" />
      <text x="4" y="50" fontSize="7" fill="currentColor" className="text-neutral-500 font-mono">128K</text>
      <motion.path
        d="M4 60 C 30 58, 52 50, 72 34 S 104 14, 112 10"
        stroke="#ff3b00"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      />
      <motion.circle
        cx="112"
        cy="10"
        r="3.5"
        fill="#ff3b00"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.6, duration: 0.4 }}
      />
      <text x="84" y="8" fontSize="8" fill="#ff3b00" className="font-mono" fontWeight="700">10M</text>
    </svg>
  );
};

export const Testimonial: React.FC = () => (
  <section
    id="testimonial"
    className="relative scroll-mt-20 overflow-hidden border-b border-neutral-900 bg-[#080808] px-6 py-20 text-white sm:px-8 sm:py-28 lg:px-12"
  >
    <style>{`
      @keyframes hxSweep { 0% { background-position: 160% 0; } 55%, 100% { background-position: -60% 0; } }
      .hx-sweep {
        background-image: linear-gradient(100deg, #ff3b00 40%, #ffc2ad 50%, #ff3b00 60%);
        background-size: 250% 100%;
        -webkit-background-clip: text; background-clip: text;
        color: transparent; -webkit-text-fill-color: transparent;
        animation: hxSweep 6s ease-in-out 1.6s infinite;
      }
      @keyframes hxRing { 0% { transform: scale(1); opacity: .7; } 100% { transform: scale(3); opacity: 0; } }
      .hx-ring { transform-box: fill-box; transform-origin: center; animation: hxRing 3s ease-out infinite; }
      .hx-ring-b { animation-delay: 1.5s; }
      @media (prefers-reduced-motion: reduce) { .hx-sweep, .hx-ring { animation: none; } }
    `}</style>

    <div className="relative mx-auto max-w-7xl">

      {/* Top labels */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-800 pt-5">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
          <span className="text-[#ff3b00]">·</span>
          <span>The philosophy of Parsim</span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">A system for longer reasoning</span>
      </div>

      {/* Headline + point of view (left), live diagram (right) */}
      <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-7 space-y-10">
          <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-medium tracking-[-0.03em] leading-[1.08] text-white">
            <Words words={HEADLINE_A} start={0} />
            <br />
            <Words words={HEADLINE_B} start={0.45} wordClass="hx-sweep" />
          </h2>

          <ScrollReveal direction="up" delay={0.3} className="space-y-3 max-w-xl">
            <div className="font-mono text-[11px] tracking-widest uppercase text-neutral-500">Our point of view</div>
            <p className="text-base leading-relaxed text-neutral-300 sm:text-lg">{POINT_OF_VIEW}</p>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-5">
          <ScrollReveal direction="up" delay={0.25}>
            <TokenDiagram />
          </ScrollReveal>
        </div>
      </div>

      {/* Three principles */}
      <div className="mt-16 sm:mt-20 border-t border-neutral-900 pt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
        {PRINCIPLES.map((p, index) => {
          const Icon = p.icon;
          return (
            <ScrollReveal key={p.number} direction="up" delay={0.1 + index * 0.1}>
              <SpotlightCard enableTilt={false} className="rounded-sm h-full">
                <div className="relative h-full min-h-[320px] overflow-hidden bg-[#0e0e0e] border border-neutral-800/80 rounded-sm p-6 sm:p-7 flex flex-col shadow-lg">
                  {/* top line draws on hover */}
                  <span className="absolute top-0 left-0 h-px w-full bg-[#ff3b00] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                  {/* big faded numeral */}
                  <span className="pointer-events-none select-none absolute -right-3 -bottom-8 text-[9rem] font-semibold leading-none text-[#ff3b00]/10">
                    {p.number}
                  </span>

                  <div className="relative flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center border border-neutral-800 bg-neutral-900/60 text-[#ff3b00]">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <span className="font-mono text-[11px] tracking-wider text-neutral-400">{p.number} / 03</span>
                  </div>

                  <div className="relative my-6 h-24 text-neutral-600">
                    <Visual kind={p.visual} />
                  </div>

                  <div className="relative mt-auto space-y-2">
                    <h3 className="text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-[#ff3b00]">
                      {p.title}
                    </h3>
                    <p className="max-w-[30ch] text-sm leading-relaxed text-neutral-300">{p.description}</p>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  </section>
);