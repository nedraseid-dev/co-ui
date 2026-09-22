import React, { useEffect, useRef } from 'react';

export default function PerfSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext('2d');
    let prog = 0;
    let started = false;
    let animId;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      cv.width = cv.offsetWidth * dpr;
      cv.height = cv.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    resize();
    window.addEventListener('resize', resize);

    const N = 24;
    const base = Array.from({ length: N }, (_, i) => 20 + i * i * 0.55 + Math.random() * 10);
    const kiro = Array.from({ length: N }, (_, i) => 18 + i * 1.9 + Math.random() * 8);
    const labels = ['0', '250', '500', '750', '1000', '2000', '3000', '4000'];

    function draw() {
      const w = cv.offsetWidth;
      const h = cv.offsetHeight;
      const pad = { l: 44, r: 16, t: 16, b: 30 };
      ctx.clearRect(0, 0, w, h);

      const maxV = Math.max(...base) * 1.1;
      const X = (i) => pad.l + ((w - pad.l - pad.r) * i) / (N - 1);
      const Y = (v) => h - pad.b - ((h - pad.t - pad.b) * v) / maxV;

      // grid lines
      ctx.strokeStyle = 'rgba(255,255,255,0.06)';
      ctx.lineWidth = 1;
      for (let g = 0; g <= 4; g++) {
        const y = pad.t + ((h - pad.t - pad.b) * g) / 4;
        ctx.beginPath();
        ctx.moveTo(pad.l, y);
        ctx.lineTo(w - pad.r, y);
        ctx.stroke();
      }

      // x labels
      ctx.fillStyle = 'rgba(139,144,153,0.8)';
      ctx.font = '9px JetBrains Mono, monospace';
      labels.forEach((l, i) => {
        if (i < labels.length) {
          ctx.fillText(l, pad.l - 8 + ((w - pad.l - pad.r) * i) / (labels.length - 1) - 10, h - 10);
        }
      });

      const upto = Math.floor(prog * N);
      const line = (data, color, glow) => {
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.shadowColor = glow;
        ctx.shadowBlur = glow ? 8 : 0;
        ctx.beginPath();
        for (let i = 0; i < upto; i++) {
          const x = X(i);
          const y = Y(data[i]);
          i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
        }
        ctx.stroke();
        ctx.shadowBlur = 0;
        if (upto > 0) {
          const i = upto - 1;
          ctx.fillStyle = color;
          ctx.fillRect(X(i) - 3, Y(data[i]) - 3, 6, 6);
        }
      };

      if (upto > 0) {
        line(base, 'rgba(139,144,153,0.9)', null);
        line(kiro, '#2f54ff', '#2f54ff');
      }

      // area under kiro
      if (upto > 1) {
        ctx.beginPath();
        ctx.moveTo(X(0), Y(kiro[0]));
        for (let i = 1; i < upto; i++) ctx.lineTo(X(i), Y(kiro[i]));
        ctx.lineTo(X(upto - 1), h - pad.b);
        ctx.lineTo(X(0), h - pad.b);
        ctx.closePath();
        ctx.fillStyle = 'rgba(47,84,255,0.08)';
        ctx.fill();
      }

      // delta callout
      if (prog > 0.9) {
        const i = N - 1;
        const yb = Y(base[i]);
        const yk = Y(kiro[i]);
        ctx.setLineDash([3, 5]);
        ctx.strokeStyle = 'rgba(83,224,255,0.6)';
        ctx.beginPath();
        ctx.moveTo(X(i), yb);
        ctx.lineTo(X(i), yk);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.fillStyle = '#53e0ff';
        ctx.font = 'bold 12px JetBrains Mono, monospace';
        ctx.fillText('−72%', X(i) - 34, (yb + yk) / 2 + 4);
      }
    }

    draw();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || started) return;
          started = true;
          const t0 = performance.now();
          function anim(now) {
            prog = Math.min(1, (now - t0) / 1800);
            draw();
            if (prog < 1) {
              animId = requestAnimationFrame(anim);
            }
          }
          animId = requestAnimationFrame(anim);
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(cv);

    return () => {
      window.removeEventListener('resize', resize);
      observer.disconnect();
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section id="perf" className="py-[clamp(90px,12vw,160px)]">
      <div className="wrap">
        <div className="sec-tag reveal">
          <b>N.05</b> &gt; MEASURED
        </div>

        <h2 className="display reveal">
          Less spend.
          <br />
          Zero <em>drift.</em>
        </h2>

        <div className="perf-wrap reveal border border-line bg-panel p-[clamp(20px,3vw,40px)] mt-[64px]" data-d="2">
          <div className="perf-head flex justify-between flex-wrap gap-[14px] font-mono text-[10px] tracking-[0.2em] text-dim2 mb-[20px]">
            <span>◈ COST PER RESOLVED TASK — SESSION LENGTH (K TOKENS)</span>
            <div className="perf-legend flex gap-[20px]">
              <i className="not-italic inline-flex items-center gap-[7px] before:content-[''] before:w-[9px] before:h-[9px] before:inline-block before:bg-dim2">
                BASELINE
              </i>
              <i className="not-italic inline-flex items-center gap-[7px] before:content-[''] before:w-[9px] before:h-[9px] before:inline-block before:bg-blue">
                WITH KIRO
              </i>
            </div>
          </div>
          <canvas id="perfCanvas" ref={canvasRef} className="w-full h-[380px] block" />
        </div>
      </div>
    </section>
  );
}
