import React, { useEffect, useState } from 'react';

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastY = 0;
    const handleScroll = () => {
      const y = window.scrollY;
      setIsHidden(y > 140 && y > lastY);
      lastY = y;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      id="nav"
      className={`fixed top-0 left-0 right-0 z-[3000] flex items-center justify-between px-[clamp(20px,4vw,56px)] h-[64px] border-b border-line bg-[rgba(6,6,8,0.72)] backdrop-blur-[14px] transition-transform duration-[450ms] ease-kiro-ease ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <a className="flex items-center gap-[11px] font-mono font-bold text-[17px] tracking-[0.06em]" href="#hero">
        <svg className="w-[26px] h-[26px]" viewBox="0 0 38 38">
          <use href="#kiro-mark" fill="#f4f5f7" />
        </svg>
        kiro<span className="text-blue-2">.</span>
      </a>

      <div className="hidden md:flex gap-[30px] font-mono text-[11px] tracking-[0.18em] text-dim nav-links">
        <a href="#how">HOW IT WORKS</a>
        <a href="#layers">CAPABILITIES</a>
        <a href="#demo">DEMO</a>
        <a href="#perf">RESULTS</a>
        <a href="#pricing">PRICING</a>
        <a href="#faq">FAQ</a>
      </div>

      <div className="flex items-center gap-[16px]">
        <div className="hidden md:flex items-center gap-[7px] font-mono text-[10px] tracking-[0.15em] text-dim border border-line py-[6px] px-[12px] status-chip">
          <span className="dot" />
          SYSTEMS NOMINAL
        </div>
        <a className="btn solid" href="#pricing">
          <span className="sq" />
          <span>GET ACCESS</span>
        </a>
      </div>
    </nav>
  );
}
