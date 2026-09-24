import React, { useEffect, useState, useRef } from 'react';

const GLYPHS = '█▓▒░<>/\\|01KIRO';

const NAV_LINKS = [
  { id: 'setup', label: 'DOCS' },
  { id: 'how', label: 'API' },
  { id: 'github', label: 'GITHUB', href: 'https://github.com' },
  { id: 'how', label: 'HOW IT WORKS' },
  { id: 'faq', label: 'FAQ' },
];

function NavLink({ id, label, isActive }) {
  const [displayText, setDisplayText] = useState(label);
  const isAnimating = useRef(false);
  const prevActive = useRef(isActive);

  const runScramble = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    let frame = 0;
    const len = label.length;

    function step() {
      frame++;
      const currentPos = Math.floor(frame / 2);
      const scrambled = label
        .split('')
        .map((c, i) => {
          if (c === ' ') return ' ';
          if (i < currentPos) return label[i];
          return GLYPHS[(Math.random() * GLYPHS.length) | 0];
        })
        .join('');

      setDisplayText(scrambled);

      if (currentPos < len) {
        requestAnimationFrame(step);
      } else {
        setDisplayText(label);
        isAnimating.current = false;
      }
    }

    requestAnimationFrame(step);
  };

  useEffect(() => {
    // When section becomes active upon scrolling, trigger the type/scramble effect
    if (isActive && !prevActive.current) {
      runScramble();
    }
    prevActive.current = isActive;
  }, [isActive]);

  return (
    <a
      href={id === 'github' ? 'https://github.com' : `#${id}`}
      className={`relative py-[4px] transition-colors duration-250 ${
        isActive ? 'text-white active' : 'text-dim hover:text-white'
      }`}
      onMouseEnter={runScramble}
    >
      {displayText}
    </a>
  );
}

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    let lastY = 0;

    const handleScroll = () => {
      const y = window.scrollY;
      setIsHidden(y > 140 && y > lastY);
      lastY = y;

      // Determine active section for navbar titles
      const scrollPos = y + 250;
      let current = '';

      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = link.id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

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
        viro<span className="text-blue-2">.</span>
      </a>

      <div className="hidden md:flex gap-[30px] font-mono text-[11px] tracking-[0.18em] text-dim nav-links">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.id}
            id={link.id}
            label={link.label}
            isActive={activeSection === link.id}
          />
        ))}
      </div>

      <div className="flex items-center gap-[16px]">
        <a className="btn solid" href="#setup">
          <span className="sq" />
          <span>INSTALL</span>
        </a>
      </div>
    </nav>
  );
}
