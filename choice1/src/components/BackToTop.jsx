import React, { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      id="toTop"
      type="button"
      title="Back to top"
      onClick={scrollToTop}
      className={`fixed right-[26px] bottom-[26px] w-[48px] h-[48px] bg-bg border border-line2 text-white font-mono text-[14px] z-[2500] transition-all duration-400 hover:bg-[#FF6B00] hover:border-[#FF6B00] flex items-center justify-center cursor-none ${
        isVisible ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}
    >
      ↑
    </button>
  );
}
