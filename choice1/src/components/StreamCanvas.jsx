import React, { useEffect, useRef, useState } from 'react';

export default function StreamCanvas() {
  const canvasRef = useRef(null);
  const [streamStat, setStreamStat] = useState('TOKENS: 0 / WASTE REMOVED: 0%');

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    let animId;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      cv.width = cv.offsetWidth * dpr;
      cv.height = cv.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener('resize', resize);

    const glyphs = '01<>[]{}#$%&KIROTOKEN';

    class Tok {
      constructor() {
        this.reset(true);
      }

      reset(init) {
        this.x = init ? Math.random() * cv.offsetWidth : cv.offsetWidth + 10;
        this.y = 14 + Math.random() * (cv.offsetHeight - 28);
        this.v = 0.6 + Math.random() * 1.6;
        this.waste = Math.random() < 0.62;
        this.g = glyphs[(Math.random() * glyphs.length) | 0];
        this.sz = 6 + Math.random() * 6;
        this.dead = false;
        this.dying = 0;
        this.jit = Math.random() * 6.28;
      }

      step() {
        this.x -= this.v;
        if (this.waste && this.x < cv.offsetWidth * 0.55) {
          this.dying += 0.05;
          if (this.dying >= 1) this.reset(false);
        } else if (this.x < -12) {
          this.reset(false);
        }
      }

      draw() {
        const j = Math.sin((this.jit += 0.1)) * 1.5;
        if (this.dying > 0) {
          const p = this.dying;
          ctx.fillStyle = `rgba(255,84,112,${0.9 - p * 0.9})`;
          ctx.font = `${this.sz}px JetBrains Mono, monospace`;
          const yy = this.y + p * p * 40 + j;
          ctx.fillText(this.g, this.x, yy);
          if (Math.random() < 0.3) {
            ctx.fillStyle = `rgba(83,224,255,${1 - p})`;
            ctx.fillText(this.g, this.x, yy - 14);
          }
        } else {
          ctx.fillStyle = this.waste ? 'rgba(139,144,153,0.8)' : 'rgba(244,245,247,0.95)';
          ctx.font = `${this.sz}px JetBrains Mono, monospace`;
          ctx.fillText(this.g, this.x, this.y + j);
        }
      }
    }

    const toks = Array.from({ length: 110 }, () => new Tok());
    let frameCount = 0;

    function draw() {
      const w = cv.offsetWidth;
      const h = cv.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      ctx.strokeStyle = 'rgba(47,84,255,0.25)';
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.moveTo(w * 0.55, 0);
      ctx.lineTo(w * 0.55, h);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = 'rgba(47,84,255,0.9)';
      ctx.font = '9px JetBrains Mono, monospace';
      ctx.fillText('◈ COMPACTOR', w * 0.55 - 38, h - 10);

      toks.forEach((t) => {
        t.step();
        t.draw();
      });

      frameCount++;
      if (frameCount % 6 === 0) {
        const alive = toks.filter((t) => t.dying === 0 && t.x > 0 && t.x < w);
        const removed = toks.filter((t) => t.dying > 0 || (t.x < w * 0.55 && t.waste)).length;
        setStreamStat(`TOKENS: ${(alive.length * 18341).toLocaleString()} / WASTE REMOVED: ${Math.min(99, removed)}%`);
      }

      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="pipeline reveal border border-line bg-panel p-[26px] relative overflow-hidden mt-[70px]">
      <div className="pl-head flex justify-between items-center font-mono text-[10px] tracking-[0.25em] text-dim2 mb-[16px]">
        <span>◈ LIVE TOKEN STREAM — COMPACTION PASS</span>
        <span id="streamStat">{streamStat}</span>
      </div>
      <canvas id="streamCanvas" ref={canvasRef} className="w-full h-[150px] block" />
    </div>
  );
}
