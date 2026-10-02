import React, { useState } from 'react';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';
import { ParsimLogo } from './ParsimLogo';

interface NavbarProps {
  onOpenContact: () => void;
  onNavigateSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onNavigateSection }) => {
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#080808]/90 backdrop-blur-md border-b border-neutral-900 transition-all text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        
        {/* Brand Zone with Parsim Logo */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="cursor-pointer"
        >
          <ParsimLogo size={24} showWordmark={true} />
        </a>

        {/* Navigation Links in Muted Neutral */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-neutral-400">
          <button 
            onClick={() => onNavigateSection('capabilities')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            Architecture
          </button>

          <button 
            onClick={() => onNavigateSection('token-maximizer')} 
            className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Token Maximizer</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff3b00] animate-pulse" />
          </button>
          
          <button 
            onClick={() => onNavigateSection('why-parsim')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            Why Parsim
          </button>

          <button 
            onClick={() => onNavigateSection('performance')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            Benchmarks
          </button>
          
          <button 
            onClick={() => onNavigateSection('news')} 
            className="hover:text-white transition-colors cursor-pointer"
          >
            Research
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
              <div className="absolute top-full left-0 w-60 pt-2 z-50">
                <div className="bg-[#0e0e0e] border border-neutral-800 rounded-sm p-2 shadow-2xl backdrop-blur-xl">
                  <a 
                    href="#why-parsim" 
                    onClick={(e) => { e.preventDefault(); onNavigateSection('why-parsim'); setCompanyDropdownOpen(false); }}
                    className="block px-3 py-2 text-xs text-neutral-300 hover:text-white hover:bg-neutral-900 rounded transition-colors"
                  >
                    Why Parsim Philosophy
                  </a>
                  <a 
                    href="#testimonial" 
                    onClick={(e) => { e.preventDefault(); onNavigateSection('testimonial'); setCompanyDropdownOpen(false); }}
                    className="block px-3 py-2 text-xs text-neutral-300 hover:text-white hover:bg-neutral-900 rounded transition-colors"
                  >
                    Frontier AI Testimonials
                  </a>
                  <button 
                    onClick={() => { onOpenContact(); setCompanyDropdownOpen(false); }}
                    className="w-full text-left px-3 py-2 text-xs text-neutral-300 hover:text-white hover:bg-neutral-900 rounded transition-colors flex items-center justify-between"
                  >
                    <span>Inference Kernel Engineers</span>
                    <span className="text-[10px] text-[#ff3b00] font-mono font-semibold">Hiring</span>
                  </button>
                  <a 
                    href="#news" 
                    onClick={(e) => { e.preventDefault(); onNavigateSection('news'); setCompanyDropdownOpen(false); }}
                    className="block px-3 py-2 text-xs text-neutral-300 hover:text-white hover:bg-neutral-900 rounded transition-colors"
                  >
                    Technical Papers &amp; Weights
                  </a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* CTA Button: International Safety Orange #ff3b00 */}
        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={onOpenContact}
            className="group flex items-center gap-2.5 bg-[#ff3b00] hover:bg-[#e03400] text-black text-xs font-semibold px-4 py-2.5 rounded-sm transition-all duration-200 active:scale-[0.98] shadow-lg shadow-[#ff3b00]/20 cursor-pointer"
          >
            <span>Deploy Engine</span>
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
            <span>Deploy</span>
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
            Architecture
          </button>
          <button 
            onClick={() => { onNavigateSection('token-maximizer'); setMobileMenuOpen(false); }}
            className="block w-full text-left text-sm text-neutral-300 hover:text-white py-1 flex items-center justify-between"
          >
            <span>Token Maximizer</span>
            <span className="text-[10px] bg-[#ff3b00] text-black font-semibold px-1.5 py-0.5 rounded">NEW</span>
          </button>
          <button 
            onClick={() => { onNavigateSection('why-parsim'); setMobileMenuOpen(false); }}
            className="block w-full text-left text-sm text-neutral-300 hover:text-white py-1"
          >
            Why Parsim
          </button>
          <button 
            onClick={() => { onNavigateSection('performance'); setMobileMenuOpen(false); }}
            className="block w-full text-left text-sm text-neutral-300 hover:text-white py-1"
          >
            Benchmarks
          </button>
          <button 
            onClick={() => { onNavigateSection('news'); setMobileMenuOpen(false); }}
            className="block w-full text-left text-sm text-neutral-300 hover:text-white py-1"
          >
            Research
          </button>
          <div className="pt-2">
            <button
              onClick={() => { onOpenContact(); setMobileMenuOpen(false); }}
              className="w-full flex items-center justify-center gap-2 bg-[#ff3b00] text-black text-xs font-semibold py-3 rounded-sm"
            >
              <span>Deploy Engine</span>
              <ArrowRight className="w-3 h-3 text-black" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
