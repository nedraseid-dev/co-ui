import { useEffect } from 'react';

export function useKiroEffects() {
  useEffect(() => {
    // 1. Scroll reveal for elements with .reveal
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => revealObserver.observe(el));

    // 2. Section tags subtle parallax
    const handleScrollParallax = () => {
      const tags = document.querySelectorAll('.sec-tag');
      tags.forEach((el) => {
        const r = el.getBoundingClientRect();
        const p = (r.top - window.innerHeight / 2) / window.innerHeight;
        el.style.transform = `translateX(${p * -30}px)`;
      });
    };

    window.addEventListener('scroll', handleScrollParallax, { passive: true });

    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', handleScrollParallax);
    };
  }, []);
}
