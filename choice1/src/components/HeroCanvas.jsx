import React, { useEffect, useRef } from 'react';

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    let animId;
    let cols, rows;
    let cells = [];
    const CELL = 26;
    let mouse = { x: -999, y: -999 };

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      cv.width = cv.offsetWidth * dpr;
      cv.height = cv.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(cv.offsetWidth / CELL);
      rows = Math.ceil(cv.offsetHeight / CELL);
      cells = [];
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          if (Math.random() > 0.16) continue;
          cells.push({
            x,
            y,
            a: Math.random(),
            s: Math.random() * 0.015 + 0.003,
            blue: Math.random() > 0.9,
          });
        }
      }
    }

    resize();
    window.addEventListener('resize', resize);

    const parent = cv.parentElement;
    const handleMouseMove = (e) => {
      const r = cv.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
    };
    if (parent) {
      parent.addEventListener('mousemove', handleMouseMove);
    }

    function draw() {
      const w = cv.offsetWidth;
      const h = cv.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      for (const c of cells) {
        c.a += c.s;
        if (c.a > 1 || c.a < 0) {
          c.s *= -1;
          c.a = Math.max(0, Math.min(1, c.a));
        }
        const px = c.x * CELL;
        const py = c.y * CELL;
        const dx = px + CELL / 2 - mouse.x;
        const dy = py + CELL / 2 - mouse.y;
        const d = Math.hypot(dx, dy);
        const boost = Math.max(0, 1 - d / 220);
        const al = c.a * 0.25 + boost * 0.8;
        ctx.fillStyle = c.blue
          ? `rgba(47,84,255,${al})`
          : `rgba(244,245,247,${al * 0.5})`;
        const sz = 2 + c.a * 5 + boost * 5;
        ctx.fillRect(px, py, sz, sz);
        if (boost > 0.35) {
          ctx.strokeStyle = `rgba(47,84,255,${boost * 0.6})`;
          ctx.strokeRect(px - 2, py - 2, sz + 4, sz + 4);
        }
      }
      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      if (parent) {
        parent.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas id="heroCanvas" ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />;
}
