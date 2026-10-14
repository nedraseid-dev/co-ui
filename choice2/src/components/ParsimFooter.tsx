import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ASSETS } from '../data/content';
import { ParsimLogo } from './ParsimLogo';

interface ParsimFooterProps {
  onOpenContact: () => void;
  onNavigateSection: (id: string) => void;
  onOpenTemplatePage: (title: string) => void;
}

export const ParsimFooter: React.FC<ParsimFooterProps> = ({
  onOpenContact,
  onNavigateSection,
  onOpenTemplatePage,
}) => (
  <footer className="site-footer-dark border-t border-neutral-800 px-6 pb-8 pt-14 text-white sm:px-8 sm:pt-16 lg:px-12">
    <div className="mx-auto max-w-7xl">
      <div className="mb-14 grid gap-10 sm:grid-cols-2 lg:mb-16 lg:grid-cols-[2fr_1fr_1fr_1.5fr] lg:gap-10">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <ParsimLogo size={34} showWordmark={false} />
            <h2 className="text-lg font-semibold text-white">Parsim</h2>
          </div>
          <p className="max-w-[32ch] text-[13px] leading-relaxed text-neutral-400">
            Practical AI token automation and persistent agent architecture for high-performing engineering teams.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[#ff3b00]">Navigation</h3>
          <ul className="flex flex-col gap-2.5 text-[13px] text-neutral-400">
            <li><button onClick={() => onNavigateSection('capabilities')} className="transition-colors hover:text-white">Capabilities</button></li>
            <li><button onClick={() => onNavigateSection('why-parsim')} className="transition-colors hover:text-white">Architecture</button></li>
            <li><button onClick={() => onNavigateSection('testimonial')} className="transition-colors hover:text-white">Parsim Philosophy</button></li>
            <li><button onClick={() => onNavigateSection('news')} className="transition-colors hover:text-white">Research</button></li>
          </ul>
        </nav>

        <nav aria-label="Company links">
          <h3 className="mb-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[#ff3b00]">Company</h3>
          <ul className="flex flex-col gap-2.5 text-[13px] text-neutral-400">
            <li><button onClick={() => onNavigateSection('testimonial')} className="transition-colors hover:text-white">Our philosophy</button></li>
            <li><button onClick={() => onNavigateSection('faq')} className="transition-colors hover:text-white">FAQ</button></li>
            <li><button onClick={onOpenContact} className="transition-colors hover:text-white">Contact</button></li>
            <li><button onClick={() => onOpenTemplatePage('Privacy Notice')} className="transition-colors hover:text-white">Privacy Policy</button></li>
          </ul>
        </nav>

        <div className="site-footer-chat-card flex items-center rounded-lg p-4">
          <img
            src={ASSETS.avatarElena}
            alt="Parsim support"
            className="mr-3 h-12 w-12 shrink-0 rounded-md object-cover grayscale-[40%]"
          />
          <div>
            <p className="text-xs text-neutral-500">LIVE SUPPORT</p>
            <p className="mt-0.5 text-[13px] font-medium text-white">Need help with your AI project?</p>
            <a href="/auth" className="mt-1 inline-flex items-center gap-1 font-mono text-[11px] text-[#ff3b00] hover:text-[#ff765f]">
              START A CONVERSATION <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div aria-hidden="true" className="select-none overflow-hidden py-2 text-center text-[clamp(4rem,15vw,13.125rem)] font-semibold leading-[0.85] text-white/[0.07]">
        PARSIM
      </div>

      <div className="mt-8 flex flex-col gap-3 border-t border-white/[0.06] pt-6 font-mono text-[10px] uppercase tracking-wider text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <span>&copy; {new Date().getFullYear()} Parsim Inc. All rights reserved.</span>
        <span className="flex items-center gap-1.5">Autonomous token systems for long horizons <ArrowUpRight className="h-3 w-3" aria-hidden="true" /></span>
      </div>
    </div>
  </footer>
);