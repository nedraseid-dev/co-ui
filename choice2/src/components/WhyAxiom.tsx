import React from 'react';
import { ShieldCheck, Infinity, Factory, Layers } from 'lucide-react';
import { EditableText } from './EditableText';

export const WhyAxiom: React.FC = () => {
  return (
    <section id="why-axiom" className="relative bg-[#080808] border-b border-neutral-900 py-24 sm:py-32 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading and intro */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
            <span className="text-[#ff3b00] text-sm">·</span>
            <span>WHY AXIOM POWER</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-medium tracking-tight text-white leading-[1.12]">
            <EditableText
              id="why_axiom_headline"
              as="span"
              defaultText="Built to be trusted. Engineered to endure."
            />
          </h2>

          <p className="text-sm text-neutral-400 leading-relaxed max-w-sm pt-2">
            <EditableText
              id="why_axiom_subtext"
              as="span"
              defaultText="Four commitments we hold to on every deployment, from procurement to dispatch."
            />
          </p>
        </div>

        {/* Right Column: 2x2 Grid of Commitment Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Card 1: Bankable Hardware */}
          <div className="bg-[#0e0e0e] border border-neutral-800/80 hover:border-neutral-700 p-6 sm:p-7 rounded-sm flex flex-col justify-between transition-colors min-h-[200px]">
            <div className="flex items-center justify-between text-neutral-400">
              <ShieldCheck className="w-5 h-5 text-neutral-300 stroke-[1.5]" />
              <span className="font-mono text-xs text-neutral-400 font-medium tracking-wider">20-YR</span>
            </div>
            <div className="mt-8 space-y-2">
              <h3 className="text-base font-semibold text-white tracking-tight">
                <EditableText
                  id="why_axiom_card_1_title"
                  as="span"
                  defaultText="Bankable hardware, Tier-1 components"
                />
              </h3>
              <p className="text-xs sm:text-[13px] text-neutral-400 leading-relaxed">
                <EditableText
                  id="why_axiom_card_1_desc"
                  as="span"
                  defaultText="Built with tier-1 components backed by decade-scale warranties."
                />
              </p>
            </div>
          </div>

          {/* Card 2: Gigawatt-scale supply chain */}
          <div className="bg-[#0e0e0e] border border-neutral-800/80 hover:border-neutral-700 p-6 sm:p-7 rounded-sm flex flex-col justify-between transition-colors min-h-[200px]">
            <div className="flex items-center justify-between text-neutral-400">
              <Infinity className="w-5 h-5 text-neutral-300 stroke-[1.5]" />
              <span className="font-mono text-xs text-neutral-400 font-medium tracking-wider">GW-SCALE</span>
            </div>
            <div className="mt-8 space-y-2">
              <h3 className="text-base font-semibold text-white tracking-tight">
                <EditableText
                  id="why_axiom_card_2_title"
                  as="span"
                  defaultText="Gigawatt-scale supply chain, contracted"
                />
              </h3>
              <p className="text-xs sm:text-[13px] text-neutral-400 leading-relaxed">
                <EditableText
                  id="why_axiom_card_2_desc"
                  as="span"
                  defaultText="Proven and fully secured for a gigawatt deployment cadence."
                />
              </p>
            </div>
          </div>

          {/* Card 3: Domestic Manufacturing */}
          <div className="bg-[#0e0e0e] border border-neutral-800/80 hover:border-neutral-700 p-6 sm:p-7 rounded-sm flex flex-col justify-between transition-colors min-h-[200px]">
            <div className="flex items-center justify-between text-neutral-400">
              <Factory className="w-5 h-5 text-neutral-300 stroke-[1.5]" />
              <span className="font-mono text-xs text-neutral-400 font-medium tracking-wider">DOMESTIC</span>
            </div>
            <div className="mt-8 space-y-2">
              <h3 className="text-base font-semibold text-white tracking-tight">
                <EditableText
                  id="why_axiom_card_3_title"
                  as="span"
                  defaultText="Dedicated domestic manufacturing capacity"
                />
              </h3>
              <p className="text-xs sm:text-[13px] text-neutral-400 leading-relaxed">
                <EditableText
                  id="why_axiom_card_3_desc"
                  as="span"
                  defaultText="Insulated from geopolitical bottleneck risk and import tariffs."
                />
              </p>
            </div>
          </div>

          {/* Card 4: Full lifecycle operations */}
          <div className="bg-[#0e0e0e] border border-neutral-800/80 hover:border-neutral-700 p-6 sm:p-7 rounded-sm flex flex-col justify-between transition-colors min-h-[200px]">
            <div className="flex items-center justify-between text-neutral-400">
              <Layers className="w-5 h-5 text-neutral-300 stroke-[1.5]" />
              <span className="font-mono text-xs text-neutral-400 font-medium tracking-wider">FULL CYCLE</span>
            </div>
            <div className="mt-8 space-y-2">
              <h3 className="text-base font-semibold text-white tracking-tight">
                <EditableText
                  id="why_axiom_card_4_title"
                  as="span"
                  defaultText="Full lifecycle operations & plant SLA"
                />
              </h3>
              <p className="text-xs sm:text-[13px] text-neutral-400 leading-relaxed">
                <EditableText
                  id="why_axiom_card_4_desc"
                  as="span"
                  defaultText="Guaranteed heat rate, availability SLAs, and 24/7 autonomous monitoring."
                />
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
