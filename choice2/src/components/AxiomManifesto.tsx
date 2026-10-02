import React from 'react';
import { EditableText } from './EditableText';

export const AxiomManifesto: React.FC = () => {
  return (
    <section className="relative w-full bg-[#ff3b00] text-black px-6 sm:px-12 lg:px-16 py-20 sm:py-28 lg:py-32 selection:bg-black selection:text-white">
      <div className="max-w-6xl mx-auto">
        <EditableText
          id="axiom_manifesto_statement"
          as="p"
          className="text-2xl sm:text-3xl lg:text-[2.65rem] font-medium leading-[1.28] tracking-[-0.02em] text-black"
          defaultText="Axiom Power supplies and operates hyperscale power systems built to meet the world’s most demanding resilience challenges. From AI factories to grid-scale battery storage, we engineer the physical foundation of the intelligent era."
        />
      </div>
    </section>
  );
};
