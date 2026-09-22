import React, { useEffect, useRef } from 'react';

const lerp = (a, b, t) => a + (b - a) * t;

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let animId;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px';
        dotRef.current.style.top = my + 'px';
      }
    };

    const loop = () => {
      rx = lerp(rx, mx, 0.16);
      ry = lerp(ry, my, 0.16);
      if (ringRef.current) {
        ringRef.current.style.left = rx + 'px';
        ringRef.current.style.top = ry + 'px';
      }
      animId = requestAnimationFrame(loop);
    };

    const handleMouseOver = (e) => {
      if (ringRef.current) {
        const isHoverable = !!e.target.closest('a, button, textarea, .step, .tier, .layer, .faq-q');
        ringRef.current.classList.toggle('hovering', isHoverable);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div id="cursorDot" ref={dotRef} />
      <div id="cursorRing" ref={ringRef} />
    </>
  );
}
