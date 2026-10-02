import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { EditableText } from './EditableText';

export const Manifesto: React.FC = () => {
  return (
    <section className="relative w-full bg-[#ff3b00] text-black px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-32 selection:bg-black selection:text-white">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up" delay={0.1}>
          <EditableText
            id="manifesto_text"
            as="p"
            className="text-2xl sm:text-3xl lg:text-[2.65rem] font-medium leading-[1.28] tracking-[-0.02em] text-black"
            defaultText="Parsim maximizes and orchestrates frontier token bandwidth to solve artificial intelligence’s deepest bottleneck: the quadratic context wall. From autonomous engineering agents to multi-million token repository reasoning, Parsim delivers sub-quadratic KV-cache compression and dynamic semantic pruning, setting new global benchmarks for reasoning depth and token throughput."
          />
        </ScrollReveal>
      </div>
    </section>
  );
};
