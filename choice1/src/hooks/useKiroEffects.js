import { useEffect } from 'react';

const CH = '█▓▒░<>/\\|01KIRO';

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

    // 3. Scramble / typing effect on display headings when scrolled into view
    const scrambleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          scrambleObserver.unobserve(entry.target);
          const el = entry.target;

          const originalHTML = el.innerHTML;
          const textNodes = [];
          const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
          let node;
          while ((node = walker.nextNode())) {
            // Ignore empty whitespace nodes
            if (node.nodeValue.trim().length > 0) {
              textNodes.push({ node, orig: node.nodeValue });
            }
          }

          if (textNodes.length === 0) return;

          let frame = 0;
          const totalLength = textNodes.reduce((acc, t) => acc + t.orig.length, 0);

          function step() {
            frame++;
            const currentPos = Math.floor(frame / 2);
            let charsCount = 0;

            for (const item of textNodes) {
              const str = item.orig;
              const nodeStart = charsCount;
              charsCount += str.length;

              if (currentPos <= nodeStart) {
                // Scrambled
                item.node.nodeValue = str
                  .split('')
                  .map((c) => (c === ' ' || c === '\n' ? c : CH[(Math.random() * CH.length) | 0]))
                  .join('');
              } else if (currentPos >= charsCount) {
                // Fully revealed
                item.node.nodeValue = str;
              } else {
                // Partially revealed
                const localPos = currentPos - nodeStart;
                item.node.nodeValue = str
                  .split('')
                  .map((c, i) =>
                    c === ' ' || c === '\n'
                      ? c
                      : i < localPos
                      ? str[i]
                      : CH[(Math.random() * CH.length) | 0]
                  )
                  .join('');
              }
            }

            if (currentPos < totalLength) {
              requestAnimationFrame(step);
            } else {
              el.innerHTML = originalHTML;
            }
          }

          requestAnimationFrame(step);
        });
      },
      { threshold: 0.35 }
    );

    const headings = document.querySelectorAll('h2.display');
    headings.forEach((el) => scrambleObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      scrambleObserver.disconnect();
      window.removeEventListener('scroll', handleScrollParallax);
    };
  }, []);
}
