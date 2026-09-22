import React, { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [cellCount, setCellCount] = useState(() =>
    typeof window !== 'undefined' ? Math.ceil(window.innerWidth / 14) : 100
  );
  const [litCount, setLitCount] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setCellCount(Math.ceil(window.innerWidth / 14));
    };

    const handleScroll = () => {
      const h = document.documentElement;
      const maxScroll = h.scrollHeight - h.clientHeight;
      const pct = maxScroll > 0 ? h.scrollTop / maxScroll : 0;
      setLitCount(Math.round(pct * cellCount));
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [cellCount]);

  return (
    <div id="progress">
      {Array.from({ length: cellCount }).map((_, i) => (
        <i key={i} className={i < litCount ? 'on' : ''} />
      ))}
    </div>
  );
}
