import React, { useState, useRef, useEffect } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { EditableText } from './EditableText';
import { ArrowRight, Copy, Check } from 'lucide-react';

interface HeroProps {
  onOpenPress: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPress }) => {
  return (
    <section
      className="relative flex h-[calc(100svh-5rem)] flex-col overflow-hidden bg-[#080808] border-b border-neutral-900 px-5 sm:px-8 lg:px-12 pt-4 pb-5 lg:pt-4 lg:pb-5 text-white lg:min-h-0"
    >

      {/* Drifting node network background */}
      <HeroNetwork />

      {/* Headline (left) + integration visual (right). Takes all remaining height. */}
      <div className="relative z-10 w-full flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center py-3 lg:py-2">
        <div className="lg:col-span-5">
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="text-4xl sm:text-6xl lg:text-[3rem] xl:text-[3.75rem] font-medium tracking-[-0.035em] text-white leading-[1.04]">
              <span className="relative inline-block bg-gradient-to-r from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
                <EditableText
                  id="hero_headline"
                  as="span"
                  defaultText="Tokens that think across horizons."
                />
              </span>
            </h1>
          </ScrollReveal>
        </div>

        <div className="lg:col-span-7 lg:h-full lg:min-h-0">
          <ScrollReveal direction="up" delay={0.2} className="lg:h-full">
            <HeroIntegration />
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom Row: Subtitle & Horizon Metrics */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3 lg:gap-5 shrink-0 lg:-translate-y-2">
        
        {/* Left Subtitle */}
        <ScrollReveal direction="up" delay={0.2} className="max-w-xl">
          <div className="space-y-2">
            <p className="max-w-xl text-xs sm:text-[13px] text-neutral-400 leading-snug font-medium">
              <EditableText
                id="hero_subtext"
                as="span"
                defaultText="Parsim compresses, optimizes, and scales attention state for frontier LLMs, autonomous agents, and multi-turn reasoning chains. 99.984% semantic fidelity, measured at 10M tokens."
              />
            </p>
            <a
              href="/auth"
              className="group inline-flex items-center gap-2 bg-[#ff3b00] px-4 py-3.5 text-[11px] font-semibold text-black transition-colors hover:bg-[#ff6a36]"
            >
              <span>Access Parsim</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </ScrollReveal>

        {/* Live Horizon Specs */}
        <ScrollReveal direction="up" delay={0.25} className="font-mono text-xs flex items-center gap-4 text-neutral-400">
          <div>
            <div className="text-[10px] uppercase text-neutral-400 font-semibold tracking-wider">RECALL P95</div>
            <div className="text-white font-bold text-sm">99.984%</div>
          </div>
          <div className="border-l border-neutral-800 pl-4">
            <div className="text-[10px] uppercase text-neutral-400 font-semibold tracking-wider">MAX HORIZON</div>
            <div className="text-[#ff3b00] font-bold text-sm">10.2M TOKENS</div>
          </div>
        </ScrollReveal>

      </div>

    </section>
  );
};

/* =========================================================
   Integration visual: raw output  ->  Parsim snippet
   All text below is SAMPLE content. Edit it freely.
   ========================================================= */

// Left panel: noisy raw output (kind: cmd | info | warn | err)
const RAW_LINES: [string, string][] = [
  ['$ vllm serve deepseek-r1 --max-model-len 10000000', 'cmd'],
  ['INFO  kv_cache alloc layers=0..60 size=960.0GB', 'info'],
  ['INFO  request id=9d1 ctx=8,412,330 tokens', 'info'],
  ['INFO  request id=9d2 ctx=8,413,118 tokens', 'info'],
  ['WARN  hbm usage 94% (75.2/80 GB)', 'warn'],
  ['ERROR torch.cuda.OutOfMemoryError: CUDA out of memory', 'err'],
  ['WARN  context exceeded, truncating 2,104,882 tokens', 'warn'],
  ['$ python agent.py --steps 100000', 'cmd'],
  ['INFO  step=41,022 recall=0.71', 'info'],
  ['INFO  step=41,023 recall=0.69', 'info'],
  ['WARN  attention sink collapse detected', 'warn'],
  ['ERROR agent lost system prompt at step 48,310', 'err'],
  ['INFO  kv_cache alloc layers=0..60 size=960.0GB', 'info'],
  ['WARN  hbm usage 97% (77.6/80 GB)', 'warn'],
  ['ERROR torch.cuda.OutOfMemoryError: CUDA out of memory', 'err'],
];

const RAW_CLASS: Record<string, string> = {
  cmd: 'text-neutral-200 font-semibold',
  info: 'text-neutral-500',
  warn: 'text-[#ff7700]',
  err: 'text-[#ff3b00] font-semibold',
};

// Right panel: integration snippets. Token = [text, styleKey?]
type Tok = [string, string?];

const TOK_CLASS: Record<string, string> = {
  k: 'text-[#ff3b00]',           // keyword
  s: 'text-emerald-400',         // string
  c: 'text-neutral-500',         // comment
  f: 'text-white font-semibold', // function
};

const SNIPPETS: Record<string, Tok[][]> = {
  Python: [
    [['# pip install parsim-attention', 'c']],
    [['import', 'k'], [' parsim']],
    [],
    [['model = parsim.'], ['wrap', 'f'], ['(model, horizon='], ['"10M"', 's'], [')']],
    [],
    [['# KV cache: 960 GB → 58.5 GB', 'c']],
    [['out = model.'], ['generate', 'f'], ['(prompt)']],
  ],
  vLLM: [
    [['# one flag, no code changes', 'c']],
    [['vllm', 'f'], [' serve deepseek-r1 \\']],
    [['  --attention-backend '], ['parsim', 'k'], [' \\']],
    [['  --max-model-len '], ['10000000', 's']],
  ],
  CLI: [
    [['$ ', 'k'], ['pip install parsim-attention']],
    [['$ ', 'k'], ['parsim bench --model deepseek-r1 \\']],
    [['    --context 10M --runs 5']],
    [],
    [['✓ recall 99.98%  kv 16.4x  p95 1.4ms', 's']],
  ],
};

function HeroIntegration() {
  const tabs = Object.keys(SNIPPETS);
  const [tab, setTab] = useState(tabs[0]);
  const [copied, setCopied] = useState(false);
  const lines = SNIPPETS[tab];

  const copy = () => {
    navigator.clipboard.writeText(lines.map((l) => l.map((t) => t[0]).join('')).join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  // fixed height on small screens, fills the available height on desktop
  const panel = 'flex flex-col min-h-0 h-[132px] sm:h-[158px] lg:h-full backdrop-blur-sm';

  return (
    <div className="grid grid-cols-2 lg:grid-cols-[1fr_56px_1.2fr] lg:grid-rows-[minmax(0,1fr)] gap-2 lg:gap-0 items-stretch lg:h-full lg:max-h-[360px]">
      <style>{`
        .hx-l { background: rgba(255,255,255,.04); }
        .hx-r { background: rgba(255,59,0,.075); }
        html[data-theme='light'] .hx-l { background: rgba(0,0,0,.04); }
        html[data-theme='light'] .hx-r { background: rgba(255,59,0,.08); }
        @keyframes parsimScroll { from { transform: translateY(0); } to { transform: translateY(-50%); } }
        .parsim-scroll { animation: parsimScroll 32s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .parsim-scroll { animation: none; } }
      `}</style>

      {/* LEFT: without Parsim */}
      <div className={`${panel} hx-l`}>
        <div className="px-2 pt-2 pb-1 sm:px-4 flex items-start justify-between gap-2 shrink-0">
          <div>
            <h3 className="font-serif text-base sm:text-lg text-white leading-none">without parsim</h3>
            <p className="mt-1 text-[9px] sm:text-[10px] text-neutral-400">kv cache · logs · errors</p>
          </div>
          <span className="hidden sm:block text-[10px] text-neutral-500 text-right leading-tight max-w-[80px]">what your model reads</span>
        </div>

        <div
          className="relative flex-1 min-h-0 overflow-hidden font-mono text-[8px] sm:text-[9px] leading-[1.45] px-2 sm:px-4"
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)',
            maskImage: 'linear-gradient(to bottom, transparent, #000 12%, #000 88%, transparent)',
          }}
        >
          <div className="parsim-scroll">
            {[...RAW_LINES, ...RAW_LINES].map(([text, kind], i) => (
              <div key={i} className={`whitespace-nowrap ${RAW_CLASS[kind]}`}>{text}</div>
            ))}
          </div>
        </div>
      </div>

      {/* CENTER: funnel + badge (desktop) */}
      <div className="relative hidden lg:flex items-center justify-center">
        <svg viewBox="0 0 72 300" preserveAspectRatio="none" className="absolute inset-0 w-full h-full" fill="none">
          <defs>
            <linearGradient id="hxFunnel" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8a8a8a" stopOpacity="0.10" />
              <stop offset="100%" stopColor="#ff3b00" stopOpacity="0.14" />
            </linearGradient>
          </defs>
          <path
            d="M0 0 C 26 0, 30 135, 36 135 C 42 135, 46 0, 72 0 L72 300 C 46 300, 42 165, 36 165 C 30 165, 26 300, 0 300 Z"
            fill="url(#hxFunnel)"
          />
        </svg>
        <div className="relative flex flex-col items-center gap-2">
          <div className="w-14 h-14 rounded-full bg-[#0e0e0e] border border-[#ff3b00]/50 flex items-center justify-center text-[#ff3b00] font-mono font-bold text-sm">
            ~16x
          </div>
          <div className="text-[9px] font-mono tracking-widest text-neutral-500 text-center leading-tight">COMPRESSION</div>
        </div>
      </div>

      {/* RIGHT: with Parsim */}
      <div className={`${panel} hx-r`}>
        <div className="px-2 pt-2 pb-1 sm:px-4 flex items-start justify-between gap-2 shrink-0">
          <div>
            <h3 className="font-serif text-base sm:text-lg text-white leading-none">with parsim</h3>
            <p className="mt-1 text-[9px] sm:text-[10px] text-neutral-400">a few lines to integrate</p>
          </div>
          <span className="hidden sm:block text-[10px] text-neutral-500 text-right leading-tight max-w-[80px]">what matters, kept</span>
        </div>

        {/* tabs */}
        <div className="flex items-center gap-2 sm:gap-3 px-2 sm:px-4 pb-1 shrink-0">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`pb-1 text-[9px] sm:text-[11px] font-mono cursor-pointer border-b transition-colors ${
                tab === t
                  ? 'border-[#ff3b00] text-white'
                  : 'border-transparent text-neutral-500 hover:text-neutral-300'
              }`}
            >
              {t}
            </button>
          ))}
          <button
            onClick={copy}
            className="ml-auto inline-flex items-center gap-1 text-[8px] sm:text-[10px] font-mono tracking-wider text-neutral-400 hover:text-white cursor-pointer"
            aria-label="Copy snippet"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#ff3b00]" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'COPIED' : 'COPY'}</span>
          </button>
        </div>

        {/* code */}
        <pre className="flex-1 min-h-0 overflow-auto px-2 sm:px-4 pt-1 font-mono text-[8px] sm:text-[9px] leading-[1.45] text-neutral-300">
          {lines.map((line, i) => (
            <div key={`${tab}-${i}`} className="whitespace-pre min-h-[1.45em]">
              {line.map(([text, key], j) => (
                <span key={j} className={key ? TOK_CLASS[key] : undefined}>{text}</span>
              ))}
            </div>
          ))}
        </pre>

        {/* result */}
        <div className="px-2 sm:px-4 py-1 font-mono text-[8px] sm:text-[9px] text-neutral-400 shrink-0">
          <span className="text-neutral-500">960 GB</span> → <span className="text-[#ff3b00] font-semibold">58.5 GB</span>
          <span className="text-neutral-600"> · </span>
          recall <span className="text-white font-semibold">99.98%</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   Background: faint network of drifting nodes and links,
   with a few orange pulses travelling along the connections.
   ========================================================= */

type NetNode = { x: number; y: number; vx: number; vy: number; r: number };
type Pulse = { a: number; b: number; t: number; sp: number };

function HeroNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !host || !ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const LINK = 170;      // max distance for two nodes to connect
    const DENSITY = 20000; // px² per node (smaller = more nodes)
    const SPEED = 0.25;    // drift speed
    const PULSES = 4;      // orange pulses at a time

    let nodes: NetNode[] = [];
    let pulses: Pulse[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;

    const newPulse = (): Pulse | null => {
      for (let n = 0; n < 40; n++) {
        const a = Math.floor(Math.random() * nodes.length);
        const b = Math.floor(Math.random() * nodes.length);
        if (a === b) continue;
        const d = Math.hypot(nodes[a].x - nodes[b].x, nodes[a].y - nodes[b].y);
        if (d < LINK) return { a, b, t: 0, sp: 0.005 + Math.random() * 0.006 };
      }
      return null;
    };

    const build = () => {
      const r = host.getBoundingClientRect();
      w = r.width;
      h = r.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(70, Math.round((w * h) / DENSITY));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        r: 2.5 + Math.random() * 2.5,
      }));

      pulses = [];
      if (!reduced) {
        for (let i = 0; i < PULSES; i++) {
          const p = newPulse();
          if (p) pulses.push(p);
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const light = document.documentElement.dataset.theme === 'light';
      const base = light ? '0,0,0' : '255,255,255';

      if (!reduced) {
        for (const n of nodes) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
        }
      }

      // links
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
          if (d < LINK) {
            ctx.strokeStyle = `rgba(${base}, ${(1 - d / LINK) * 0.16})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // hollow nodes
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${base}, 0.05)`;
        ctx.fill();
        ctx.strokeStyle = `rgba(${base}, 0.26)`;
        ctx.stroke();
      }

      // orange pulses travelling along a link
      pulses.forEach((p, idx) => {
        const a = nodes[p.a];
        const b = nodes[p.b];
        if (!a || !b || Math.hypot(a.x - b.x, a.y - b.y) > LINK * 1.15) {
          const np = newPulse();
          if (np) pulses[idx] = np;
          return;
        }
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        ctx.strokeStyle = 'rgba(255,59,0,0.55)';
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.fillStyle = '#ff3b00';
        ctx.beginPath();
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fill();
        p.t += p.sp;
        if (p.t >= 1) {
          const np = newPulse();
          if (np) pulses[idx] = np;
          else p.t = 0;
        }
      });
    };

    const tick = () => {
      if (visible) draw();
      raf = requestAnimationFrame(tick);
    };

    build();
    const ro = new ResizeObserver(build);
    ro.observe(host);

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    io.observe(host);

    if (reduced) draw();
    else raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="absolute inset-0 z-0 pointer-events-none" />;
}