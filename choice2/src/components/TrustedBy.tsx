import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const TrustedBy: React.FC = () => {
  const labs = [
    {
      name: 'HELIX LABS',
      icon: <path d="M12 2L13.5 8.5L20 7L15 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L9 12L4 7L10.5 8.5L12 2Z" />,
      filled: true,
    },
    {
      name: 'ANTHROPOS',
      icon: <><circle cx="12" cy="12" r="9" /><polygon points="12 6 17 15 7 15" fill="currentColor" /></>,
    },
    {
      name: 'MERIDIAN',
      icon: <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />,
    },
    {
      name: 'NEURAL GRID',
      icon: <><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="12" y1="3" x2="12" y2="21" /></>,
    },
    {
      name: 'TENSOR CORE',
      icon: <><path d="M4 18V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V18" /><line x1="2" y1="18" x2="22" y2="18" /></>,
    },
  ];

  const renderLogoGroup = (duplicate = false) => (
    <div className="trusted-by-logo-group" aria-hidden={duplicate || undefined}>
      {labs.map((lab) => (
        <div key={lab.name} className="flex shrink-0 items-center gap-2 text-neutral-400 font-semibold tracking-wider text-xs transition-colors hover:text-white">
          <svg
            viewBox="0 0 24 24"
            className={`h-4 w-4 ${lab.filled ? 'fill-current' : 'fill-none stroke-current stroke-2'}`}
          >
            {lab.icon}
          </svg>
          <span>{lab.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="bg-[#080808] border-b border-neutral-900 py-12 px-6 sm:px-8 lg:px-12 overflow-hidden text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
        
        {/* Kicker */}
        <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-neutral-400 uppercase shrink-0">
          <span className="text-[#ff3b00] text-sm">·</span>
          <span>TRUSTED BY INFERENCE LABS</span>
        </div>

        {/* Logos Container */}
        <ScrollReveal direction="up" delay={0.1} className="min-w-0 flex-1 opacity-80 transition-opacity hover:opacity-100">
          <div className="trusted-by-logos-window">
            <div className="animate-marquee-infinite trusted-by-logo-track">
              {renderLogoGroup()}
              {renderLogoGroup(true)}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
