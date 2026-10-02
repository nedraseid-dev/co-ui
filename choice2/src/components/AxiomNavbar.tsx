import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';

interface AxiomNavbarProps {
  onOpenContact: () => void;
  onNavigateSection: (id: string) => void;
}

export const AxiomNavbar: React.FC<AxiomNavbarProps> = ({ onOpenContact, onNavigateSection }) => {
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#080808]/90 backdrop-blur-md border-b border-neutral-900 text-white transition-all">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Brand Zone */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-5 h-5 bg-[#ff3b00] flex items-center justify-center text-black font-black text-xs group-hover:rotate-45 transition-transform duration-300">
            ✱
          </div>
          <span className="font-semibold tracking-tight text-base text-white">
            Axiom Power
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-neutral-400">
          <button 
            onClick={() => onNavigateSection('capabilities')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            Platform
          </button>
          
          <button 
            onClick={() => onNavigateSection('why-axiom')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            Technology
          </button>

          <button 
            onClick={() => onNavigateSection('testimonial')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            Case Studies
          </button>

          {/* Company with dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setCompanyDropdownOpen(true)}
            onMouseLeave={() => setCompanyDropdownOpen(false)}
          >
            <button 
              onClick={() => setCompanyDropdownOpen(!companyDropdownOpen)}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer py-2"
              aria-expanded={companyDropdownOpen}
            >
              <span>Company</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${companyDropdownOpen ? 'rotate-180 text-[#ff3b00]' : 'text-neutral-400'}`} />
            </button>

            {companyDropdownOpen && (
              <div className="absolute top-full left-0 w-56 pt-2 z-50">
                <div className="bg-[#0e0e0e] border border-neutral-800 rounded-sm p-2 shadow-2xl backdrop-blur-xl">
                  <a 
                    href="#why-axiom" 
                    onClick={(e) => { e.preventDefault(); onNavigateSection('why-axiom'); setCompanyDropdownOpen(false); }}
                    className="block px-3 py-2 text-xs text-neutral-300 hover:text-white hover:bg-neutral-900 rounded transition-colors"
                  >
                    Commitments & Specs
                  </a>
                  <a 
                    href="#performance" 
                    onClick={(e) => { e.preventDefault(); onNavigateSection('performance'); setCompanyDropdownOpen(false); }}
                    className="block px-3 py-2 text-xs text-neutral-300 hover:text-white hover:bg-neutral-900 rounded transition-colors"
                  >
                    Fleet Telemetry & Grid
                  </a>
                  <button 
                    onClick={() => { onOpenContact(); setCompanyDropdownOpen(false); }}
                    className="w-full text-left px-3 py-2 text-xs text-neutral-300 hover:text-white hover:bg-neutral-900 rounded transition-colors flex items-center justify-between"
                  >
                    <span>Careers</span>
                    <span className="text-[10px] text-[#ff3b00] font-mono font-semibold">14 Open</span>
                  </button>
                  <a 
                    href="#news" 
                    onClick={(e) => { e.preventDefault(); onNavigateSection('news'); setCompanyDropdownOpen(false); }}
                    className="block px-3 py-2 text-xs text-neutral-300 hover:text-white hover:bg-neutral-900 rounded transition-colors"
                  >
                    Press & Releases
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* CTA Button: Safety Orange */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="group flex items-center gap-2.5 bg-[#ff3b00] hover:bg-[#e03400] text-black text-xs font-semibold px-4 py-2.5 rounded-sm transition-all duration-200 active:scale-[0.98] cursor-pointer"
          >
            <span>Get in touch</span>
            <span className="w-4 h-4 bg-black/15 flex items-center justify-center rounded-sm transition-transform duration-200 group-hover:translate-x-0.5">
              <ArrowRight className="w-2.5 h-2.5 text-black" />
            </span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 bg-[#ff3b00] text-black text-xs font-semibold px-3 py-2 rounded-sm"
          >
            <span>Contact</span>
            <ArrowRight className="w-3 h-3 text-black" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080808] border-b border-neutral-800 px-6 py-5 space-y-4">
          <button 
            onClick={() => { onNavigateSection('capabilities'); setMobileMenuOpen(false); }}
            className="block w-full text-left text-sm text-neutral-300 hover:text-white py-1"
          >
            Platform
          </button>
          <button 
            onClick={() => { onNavigateSection('why-axiom'); setMobileMenuOpen(false); }}
            className="block w-full text-left text-sm text-neutral-300 hover:text-white py-1"
          >
            Technology
          </button>
          <button 
            onClick={() => { onNavigateSection('testimonial'); setMobileMenuOpen(false); }}
            className="block w-full text-left text-sm text-neutral-300 hover:text-white py-1"
          >
            Case Studies
          </button>
          <button 
            onClick={() => { onNavigateSection('news'); setMobileMenuOpen(false); }}
            className="block w-full text-left text-sm text-neutral-300 hover:text-white py-1"
          >
            Press
          </button>
          <div className="pt-2">
            <button
              onClick={() => { onOpenContact(); setMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 bg-[#ff3b00] text-black text-xs font-semibold py-3 rounded-sm"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-3 h-3 text-black" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
