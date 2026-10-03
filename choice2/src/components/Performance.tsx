import React, { useRef, useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal';

interface PerformanceProps {
  onOpenTelemetry: () => void;
}

// Bezier points of the wave in SVG units (viewBox 1440 x 600): start, control 1, control 2, end
const MAIN: [number, number][] = [[-100, 450], [350, 480], [700, 200], [1550, 180]];
const SECOND: [number, number][] = [[-100, 440], [400, 460], [680, 210], [1550, 195]];

const toPath = (p: [number, number][], c1: number[], c2: number[]) =>
  `M ${p[0][0]} ${p[0][1]} C ${c1[0]} ${c1[1]}, ${c2[0]} ${c2[1]}, ${p[3][0]} ${p[3][1]}`;

export const Performance: React.FC<PerformanceProps> = ({ onOpenTelemetry }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const glowPathRef = useRef<SVGPathElement>(null);
  const corePathRef = useRef<SVGPathElement>(null);
  const dashPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const wrap = wrapRef.current;
    const svg = svgRef.current;
    if (!section || !wrap || !svg) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const REACH = 380;      // how far the cursor's pull reaches (SVG units)
    const PULL = 0.65;      // how strongly the wave bends toward the cursor
    const IDLE_PULL = 0.4;  // pull strength for the self-drifting wave

    // spring state for the 2 control points of each wave
    const mk = (pts: [number, number][]) =>
      [1, 2].map((i) => ({ x: pts[i][0], y: pts[i][1], vx: 0, vy: 0 }));
    const main = mk(MAIN);
    const second = mk(SECOND);

    let hovering = false;
    let visible = true;
    let t = 0;
    let raf = 0;
    const mouse = { x: 0, y: 0 }; // relative to the section, in px

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return;
      const r = wrap.getBoundingClientRect();
      mouse.x = e.clientX - r.left;
      mouse.y = e.clientY - r.top;
      hovering = true;
    };
    const onLeave = () => { hovering = false; };

    const step = (
      state: { x: number; y: number; vx: number; vy: number }[],
      base: [number, number][],
      mx: number,
      my: number,
      pull: number,
      k: number
    ) => {
      state.forEach((s, idx) => {
        const b = base[idx + 1];
        const dx = mx - b[0];
        const dy = my - b[1];
        const f = Math.exp(-(dx * dx + dy * dy) / (2 * REACH * REACH)) * pull;
        const tx = b[0] + dx * f;
        const ty = b[1] + dy * f;
        s.vx += (tx - s.x) * k;
        s.vy += (ty - s.y) * k;
        s.vx *= 0.8;
        s.vy *= 0.8;
        s.x += s.vx;
        s.y += s.vy;
      });
    };

    const tick = () => {
      if (visible) {
        t += 0.016;
        const wr = wrap.getBoundingClientRect();
        const sr = svg.getBoundingClientRect();

        if (!hovering) {
          // idle / touch: virtual cursor drifts across the section
          mouse.x = wr.width * (0.5 + 0.35 * Math.sin(t * 0.4));
          mouse.y = wr.height * (0.45 + 0.3 * Math.sin(t * 0.7 + 1));
        }

        // pixels -> SVG units
        const mx = (mouse.x / sr.width) * 1440;
        const my = ((mouse.y - (sr.top - wr.top)) / sr.height) * 600;
        const pull = hovering ? PULL : IDLE_PULL;

        step(main, MAIN, mx, my, pull, 0.08);
        step(second, SECOND, mx, my, pull * 0.8, 0.05); // lags behind for a harmonic feel

        const dMain = toPath(MAIN, [main[0].x, main[0].y], [main[1].x, main[1].y]);
        const dSecond = toPath(SECOND, [second[0].x, second[0].y], [second[1].x, second[1].y]);
        glowPathRef.current?.setAttribute('d', dMain);
        corePathRef.current?.setAttribute('d', dMain);
        dashPathRef.current?.setAttribute('d', dSecond);

        wrap.style.setProperty('--gx', `${mouse.x}px`);
        wrap.style.setProperty('--gy', `${mouse.y}px`);
      }
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    io.observe(section);
    section.addEventListener('pointermove', onMove);
    section.addEventListener('pointerleave', onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      section.removeEventListener('pointermove', onMove);
      section.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <section ref={sectionRef} id="performance" className="relative bg-[#080808] border-b border-neutral-900 py-24 sm:py-36 px-6 sm:px-8 lg:px-12 overflow-hidden text-white">
      
      {/* Curved Glowing International Safety Orange Waveguide Ribbon (reacts to cursor) */}
      <div
        ref={wrapRef}
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        style={{ '--gx': '65%', '--gy': '45%' } as React.CSSProperties}
      >
        <svg 
          ref={svgRef}
          viewBox="0 0 1440 600" 
          fill="none" 
          className="w-full h-full object-cover opacity-80 translate-y-12"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="performanceOrangeWave" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff3b00" stopOpacity="0" />
              <stop offset="35%" stopColor="#ff3b00" stopOpacity="0.85" />
              <stop offset="65%" stopColor="#ff7700" stopOpacity="1" />
              <stop offset="85%" stopColor="#ff3b00" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ff3b00" stopOpacity="0" />
            </linearGradient>
            <filter id="orangeWaveGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Broad Ambient Glow Ribbon */}
          <path
            ref={glowPathRef}
            d="M -100 450 C 350 480, 700 200, 1550 180"
            stroke="url(#performanceOrangeWave)"
            strokeWidth="34"
            strokeLinecap="round"
            className="opacity-20 blur-xl"
          />

          {/* Sharp Glowing Orange Core Line */}
          <path
            ref={corePathRef}
            d="M -100 450 C 350 480, 700 200, 1550 180"
            stroke="url(#performanceOrangeWave)"
            strokeWidth="2.5"
            filter="url(#orangeWaveGlow)"
          />

          {/* Secondary Harmonic Wave */}
          <path
            ref={dashPathRef}
            d="M -100 440 C 400 460, 680 210, 1550 195"
            stroke="#ff3b00"
            strokeWidth="0.85"
            strokeDasharray="4 8"
            className="opacity-45"
          />
        </svg>

        {/* Ambient halo */}
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-[#ff3b00]/10 rounded-full blur-[120px]" />

        {/* Cursor glow */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(circle 280px at var(--gx) var(--gy), rgba(255,59,0,.16), transparent 70%)' }}
        />
      </div>

      {/* Top right utility equalizer indicator */}
      <div className="relative z-10 max-w-7xl mx-auto flex justify-end pb-8">
        <div className="flex items-center gap-[3px] h-3.5 opacity-60">
          <span className="w-[1.5px] h-3.5 bg-neutral-400" />
          <span className="w-[1.5px] h-3.5 bg-neutral-400" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal direction="up" delay={0.1} className="max-w-2xl space-y-6">
          
          <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-neutral-400 uppercase">
            <span className="text-[#ff3b00] text-sm">·</span>
            <span>TOKEN SCALE BENCHMARKS</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-[4.25rem] font-medium tracking-tight text-white leading-[1.08]">
            Performance <br />
            proven at scale.
          </h2>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-lg">
            Built for production clusters where latency and fidelity are non-negotiable. Every metric below is verified across 40 billion live inference tokens, P95, trailing thirty days.
          </p>

          <div className="pt-2">
            <button
              onClick={onOpenTelemetry}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-sm bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white transition-all cursor-pointer shadow-lg"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff3b00] animate-pulse" />
              <span>LIVE NOC AUDIT LOGS</span>
              <span className="text-[#ff3b00] font-mono text-sm leading-none">+</span>
            </button>
          </div>

        </ScrollReveal>

        {/* Bottom Right Telemetry Kicker */}
        <div className="pt-24 sm:pt-32 flex justify-end">
          <div className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase flex items-center gap-2 font-medium">
            <span>KERNEL STATUS: NOMINAL</span>
            <span className="text-neutral-700">/</span>
            <span>P95 LATENCY: 1.4MS</span>
          </div>
        </div>

      </div>
    </section>
  );
};