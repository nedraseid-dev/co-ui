import React, { useEffect, useRef } from 'react';

export default function WasteCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    let animId;
    let t = 0;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      cv.width = cv.offsetWidth * dpr;
      cv.height = cv.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener('resize', resize);

    const bars = [];
    for (let i = 0; i < 46; i++) {
      bars.push({
        h: 0.25 + Math.random() * 0.75,
        waste: Math.random() < 0.62,
        blue: Math.random() > 0.5,
      });
    }

    function draw() {
      t++;
      const w = cv.offsetWidth;
      const h = cv.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      const bw = w / bars.length;

      bars.forEach((b, i) => {
        const wave = Math.sin(t * 0.02 + i * 0.5) * 0.08;
        const bh = (b.h + wave) * h * 0.92;
        const x = i * bw + 1;
        const y = h - bh;

        if (b.waste) {
          ctx.fillStyle = 'rgba(255,84,112,0.75)';
          ctx.fillRect(x, y, bw - 2, bh * 0.55);
          ctx.fillStyle = 'rgba(244,245,247,0.9)';
          ctx.fillRect(x, y + bh * 0.55, bw - 2, bh * 0.45);
        } else {
          ctx.fillStyle = b.blue ? 'rgba(47,84,255,0.9)' : 'rgba(244,245,247,0.85)';
          ctx.fillRect(x, y, bw - 2, bh);
        }
      });

      ctx.fillStyle = 'rgba(255,255,255,0.06)';
      ctx.fillRect(0, h - 1, w, 1);
      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas id="wasteCanvas" ref={canvasRef} className="w-full h-[340px] block" />;
}
