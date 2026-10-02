import React from 'react';
import { ArrowRight } from 'lucide-react';
import { EditableText } from './EditableText';

interface AxiomFooterProps {
  onOpenContact: () => void;
  onNavigateSection: (id: string) => void;
  onOpenTemplatePage: (title: string) => void;
}

export const AxiomFooter: React.FC<AxiomFooterProps> = ({
  onOpenContact,
  onNavigateSection,
  onOpenTemplatePage,
}) => {
  return (
    <footer className="relative w-full bg-[#ff3b00] text-black pt-20 pb-12 sm:pb-16 px-6 sm:px-8 lg:px-12 selection:bg-black selection:text-[#ff3b00] overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Callout & Telemetry Bar */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 border-b border-black/20 pb-16">
          
          <div className="space-y-4 max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-medium tracking-tight text-black leading-[1.08]">
              <EditableText
                id="footer_headline"
                as="span"
                defaultText="Energy is complicated. Power keeps us on."
              />
            </h2>
            <p className="text-sm text-black/80 font-medium leading-relaxed max-w-md pt-2">
              <EditableText
                id="footer_subtext"
                as="span"
                defaultText="Describe your project footprint, utility interconnection constraints, or energization timeline requirements. Our systems engineers respond in 2 hours."
              />
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8">
            <div className="font-mono text-xs space-y-1">
              <div className="text-black/60 font-medium">FLEET UPTIME</div>
              <div className="text-lg font-bold text-black">99.98%</div>
            </div>
            <div className="font-mono text-xs space-y-1">
              <div className="text-black/60 font-medium">CAPACITY IN BUILD</div>
              <div className="text-lg font-bold text-black">3.00 GW</div>
            </div>
            <button
              onClick={onOpenContact}
              className="group flex items-center gap-3 bg-black hover:bg-neutral-900 text-white text-xs font-semibold px-5 py-3 rounded-sm transition-all duration-200 cursor-pointer shadow-xl"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#ff3b00] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* Directory Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 font-mono text-xs">
          
          {/* Col 1: NOC */}
          <div className="space-y-3">
            <span className="text-black/60 font-semibold tracking-wider">NOC 24/7</span>
            <div className="space-y-1.5 text-black font-medium">
              <div>+1 (312) 555-0184</div>
              <div>noc@axiompower.com</div>
              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-bold text-black">
                <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
                <span>ALL SYSTEMS OPERATIONAL</span>
              </div>
            </div>
          </div>

          {/* Col 2: SITE */}
          <div className="space-y-3">
            <span className="text-black/60 font-semibold tracking-wider">SITE</span>
            <ul className="space-y-1.5 text-black font-medium">
              <li>
                <button 
                  onClick={() => onNavigateSection('capabilities')} 
                  className="hover:underline cursor-pointer"
                >
                  Platform
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('why-axiom')} 
                  className="hover:underline cursor-pointer"
                >
                  Technology
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('testimonial')} 
                  className="hover:underline cursor-pointer"
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigateSection('news')} 
                  className="hover:underline cursor-pointer"
                >
                  News &amp; Releases
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: COMPANY */}
          <div className="space-y-3">
            <span className="text-black/60 font-semibold tracking-wider">COMPANY</span>
            <ul className="space-y-1.5 text-black font-medium">
              <li>
                <button onClick={() => onOpenTemplatePage('About Axiom')} className="hover:underline cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onOpenContact()} className="hover:underline cursor-pointer">
                  Careers (14 Open)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenTemplatePage('Investors & Governance')} className="hover:underline cursor-pointer">
                  Investors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('news')} className="hover:underline cursor-pointer">
                  Press Kit
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: TEMPLATE */}
          <div className="space-y-3">
            <span className="text-black/60 font-semibold tracking-wider">TEMPLATE</span>
            <ul className="space-y-1.5 text-black font-medium">
              <li>
                <button onClick={() => onOpenTemplatePage('Style Guide')} className="hover:underline cursor-pointer">
                  Style Guide
                </button>
              </li>
              <li>
                <button onClick={() => onOpenTemplatePage('Licensing & IP')} className="hover:underline cursor-pointer">
                  Licensing
                </button>
              </li>
              <li>
                <button onClick={() => onOpenTemplatePage('Change Log')} className="hover:underline cursor-pointer">
                  Change Log
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits & Giant Wordmark */}
        <div className="border-t border-black/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-black/70">
          <div>
            &copy; {new Date().getFullYear()} Axiom Power Infrastructure Inc. All rights reserved.
          </div>
          <div>
            Engineered for hyperscale resilience.
          </div>
        </div>

        {/* Giant Clipped Axiom Power Wordmark */}
        <div className="pt-8 select-none pointer-events-none opacity-90 overflow-hidden leading-none text-center">
          <span className="font-bold tracking-tighter text-black text-6xl sm:text-8xl md:text-9xl lg:text-[11.5rem] uppercase block">
            Axiom Power
          </span>
        </div>

      </div>
    </footer>
  );
};
