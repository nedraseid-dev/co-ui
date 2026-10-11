import React from 'react';
import { ArrowUpRight, Layers, Target } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

const PRINCIPLES = [
  {
    number: '01',
    title: 'Protect the signal',
    description: 'Keep the instructions, decisions, and context that give each token its meaning.',
    icon: Target,
  },
  {
    number: '02',
    title: 'Compress the overhead',
    description: 'Reduce redundant attention state before memory limits reasoning depth.',
    icon: Layers,
  },
  {
    number: '03',
    title: 'Extend the horizon',
    description: 'Let agents carry coherent reasoning further, with deterministic recall.',
    icon: ArrowUpRight,
  },
];

export const Testimonial: React.FC = () => (
  <section
    id="testimonial"
    className="relative scroll-mt-20 overflow-hidden border-b border-neutral-900 bg-[#080808] px-6 py-20 text-white sm:px-8 sm:py-24 lg:px-12"
  >
    <div className="pointer-events-none absolute right-[12%] top-1/3 h-72 w-72 rounded-full bg-[#ff3b00]/[0.04] blur-[110px]" />

    <div className="relative mx-auto max-w-7xl">
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-neutral-800 pt-5">
        <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
          <span className="text-[#ff3b00]">·</span>
          <span>The philosophy of Parsim</span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">A system for longer reasoning</span>
      </div>

      <div className="mt-14 sm:mt-20">
        <ScrollReveal direction="up" delay={0.08}>
          <h2 className="max-w-5xl text-3xl font-medium leading-[1.12] tracking-tight text-neutral-100 sm:text-4xl lg:text-5xl">
            Intelligence should scale with the problem, <span className="text-[#ff3b00]">not the memory budget.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.16} className="mt-8 grid gap-6 border-b border-neutral-900 pb-10 md:grid-cols-12 md:gap-8">
          <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 md:col-span-3 md:pt-2">
            Our point of view
          </p>
          <p className="max-w-3xl text-base leading-relaxed text-neutral-300 sm:text-lg md:col-span-8 md:col-start-5">
            Context is a resource to steward, not a buffer to fill. Parsim preserves the signals that matter, compresses redundant attention state, and keeps recall deterministic so reasoning can continue across longer horizons.
          </p>
        </ScrollReveal>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-3 sm:gap-4">
        {PRINCIPLES.map((principle, index) => (
          <ScrollReveal
            key={principle.number}
            direction="up"
            delay={0.12 + index * 0.08}
            className="group min-h-48 border border-neutral-800 bg-[#0e0e0e] p-5 transition-colors hover:border-[#ff3b00]/60 sm:p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center border border-neutral-800 bg-neutral-900 text-[#ff3b00] transition-colors group-hover:border-[#ff3b00]/50">
                <principle.icon className="h-4 w-4" aria-hidden="true" />
              </div>
              <span className="font-mono text-[10px] tracking-widest text-neutral-500">{principle.number} / 03</span>
            </div>
            <h3 className="mt-6 text-lg font-semibold tracking-tight text-neutral-100 sm:text-xl">{principle.title}</h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-neutral-400">{principle.description}</p>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);