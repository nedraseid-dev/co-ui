import React, { useEffect, useRef, useState } from 'react';

export default function CountUp({ end, prefix = '', suffix = '', duration = 1600, className = '' }) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(prefix + '0' + suffix);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            observer.unobserve(el);

            const t0 = performance.now();
            const targetNum = Number(end);

            function tick(now) {
              const p = Math.min(1, (now - t0) / duration);
              const ease = 1 - Math.pow(1 - p, 3);
              const current = Math.round(targetNum * ease);
              setDisplayValue(prefix + current + suffix);

              if (p < 1) {
                requestAnimationFrame(tick);
              } else {
                setDisplayValue(prefix + targetNum + suffix);
              }
            }

            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [end, prefix, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
