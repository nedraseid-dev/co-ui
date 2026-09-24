import React, { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [placeholder, setPlaceholder] = useState('you@lab.ai');

  const handleSubscribe = () => {
    if (email.includes('@')) {
      setEmail('');
      setPlaceholder('◈ YOU ARE IN. WATCH THE LOOP.');
    } else {
      setPlaceholder('◈ ENTER A VALID EMAIL');
    }
  };

  return (
    <footer className="py-[80px_0_40px] bg-bg2 border-t border-line">
      <div className="wrap">
        <div className="foot-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-[40px]">
          <div>
            <div className="foot-logo flex items-center gap-[12px] font-mono font-bold text-[20px] mb-[20px]">
              <svg className="logo-mark w-[30px] h-[30px]" viewBox="0 0 38 38">
                <use href="#kiro-mark" fill="#f4f5f7" />
              </svg>
              viro<span className="text-blue-2">.</span>
            </div>
            <p className="foot-desc text-dim text-[13px] leading-[1.8] max-w-[300px]">
              A context runtime for long-horizon AI. Keep the signal, reduce the replay.
            </p>
            <div className="newsletter flex mt-[26px] border border-line2 max-w-[320px]">
              <input
                type="email"
                placeholder={placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                className="flex-1 bg-transparent border-0 text-white font-mono text-[12px] p-[14px_16px] outline-none"
              />
              <button
                type="button"
                onClick={handleSubscribe}
                className="bg-blue text-white border-0 font-mono text-[10px] tracking-[0.2em] px-[20px] transition-opacity hover:opacity-90 cursor-none"
              >
                JOIN
              </button>
            </div>
          </div>

          <div className="foot-col">
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-dim2 mb-[20px]">DEVELOPER</h4>
            <a href="#how" className="block text-dim text-[13px] py-[6px] transition-all duration-250 hover:text-blue-2 hover:pl-[6px]">
              Docs
            </a>
            <a href="#layers" className="block text-dim text-[13px] py-[6px] transition-all duration-250 hover:text-blue-2 hover:pl-[6px]">
              API
            </a>
            <a href="#demo" className="block text-dim text-[13px] py-[6px] transition-all duration-250 hover:text-blue-2 hover:pl-[6px]">
              Examples
            </a>
            <a href="#pricing" className="block text-dim text-[13px] py-[6px] transition-all duration-250 hover:text-blue-2 hover:pl-[6px]">
              Pricing
            </a>
          </div>

          <div className="foot-col">
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-dim2 mb-[20px]">PROJECT</h4>
            <a href="#changelog" className="block text-dim text-[13px] py-[6px] transition-all duration-250 hover:text-blue-2 hover:pl-[6px]">
              GitHub
            </a>
            <a href="#faq" className="block text-dim text-[13px] py-[6px] transition-all duration-250 hover:text-blue-2 hover:pl-[6px]">
              FAQ
            </a>
            <a href="#perf" className="block text-dim text-[13px] py-[6px] transition-all duration-250 hover:text-blue-2 hover:pl-[6px]">
              Privacy
            </a>
            <a href="#voices" className="block text-dim text-[13px] py-[6px] transition-all duration-250 hover:text-blue-2 hover:pl-[6px]">
              Terms
            </a>
          </div>

          <div className="foot-col">
            <h4 className="font-mono text-[10px] tracking-[0.3em] text-dim2 mb-[20px]">VIRO</h4>
            <a href="#cta" className="block text-dim text-[13px] py-[6px] transition-all duration-250 hover:text-blue-2 hover:pl-[6px]">
              Careers
            </a>
            <a href="#cta" className="block text-dim text-[13px] py-[6px] transition-all duration-250 hover:text-blue-2 hover:pl-[6px]">
              Contact
            </a>
            <a href="#cta" className="block text-dim text-[13px] py-[6px] transition-all duration-250 hover:text-blue-2 hover:pl-[6px]">
              Press kit
            </a>
            <a href="#cta" className="block text-dim text-[13px] py-[6px] transition-all duration-250 hover:text-blue-2 hover:pl-[6px]">
              X / Twitter
            </a>
          </div>
        </div>

        <div className="foot-bottom flex justify-between flex-wrap gap-[14px] mt-[70px] pt-[26px] border-t border-line font-mono text-[10px] tracking-[0.15em] text-dim2">
          <span>© 2026 VIRO SYSTEMS — ALL TOKENS ACCOUNTED FOR</span>
          <span>BUILT FOR THE LONG HORIZON ◈</span>
        </div>
      </div>
    </footer>
  );
}
