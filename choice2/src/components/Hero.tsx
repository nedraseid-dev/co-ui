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
   Integration snippet. All text below is SAMPLE content.
   ========================================================= */

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
  const [copyFailed, setCopyFailed] = useState(false);
  const lines = SNIPPETS[tab];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(lines.map((l) => l.map((t) => t[0]).join('')).join('\n'));
      setCopied(true);
      setCopyFailed(false);
    } catch (error) {
      console.error('Unable to copy the integration snippet.', error);
      setCopied(false);
      setCopyFailed(true);
    }
    setTimeout(() => {
      setCopied(false);
      setCopyFailed(false);
    }, 1800);
  };

  // Give the single code card more room while letting it fill the desktop hero.
  const panel = 'flex h-[230px] min-h-0 flex-col backdrop-blur-sm sm:h-[260px] lg:h-full';
  const fileName = tab === 'Python' ? 'quickstart.py' : tab === 'vLLM' ? 'config.yaml' : 'terminal';
  const highlightedLine = tab === 'Python' ? 3 : tab === 'vLLM' ? 2 : 1;

  return (
    <div className="grid min-h-0 grid-cols-1 items-center lg:h-full">
      <style>{`
        .hx-r { background: rgba(255,59,0,.075); }
        .hx-editor-surface { background: rgba(8,8,8,.66); }
        .hx-status-dot { animation: hxStatusPulse 2s ease-in-out infinite; }
        .hx-active-line { background: linear-gradient(90deg, rgba(255,59,0,.12), transparent); }
        html[data-theme='light'] .hx-r { background: rgba(255,59,0,.08); }
        html[data-theme='light'] .hx-editor-surface { background: rgba(255,255,255,.72); }
        @keyframes hxStatusPulse { 50% { opacity: .45; box-shadow: 0 0 3px rgba(255,59,0,.25); } }
        @media (prefers-reduced-motion: reduce) { .hx-status-dot { animation: none; } }
      `}</style>

      <div className="relative mx-auto w-full max-w-2xl lg:max-h-[440px] lg:rotate-[-1deg]">
        <div aria-hidden="true" className="absolute inset-0 translate-x-2 translate-y-2 rotate-[2deg] rounded-xl border border-[#ff3b00]/25 bg-[#ff3b00]/[0.035]" />
        <div aria-hidden="true" className="absolute inset-0 -translate-x-2 -translate-y-1 rotate-[-2deg] rounded-xl border border-neutral-700/60" />
        <div className={`${panel} hx-r relative z-10 overflow-hidden rounded-lg border border-[#ff3b00]/20 shadow-[0_0_50px_rgba(255,59,0,0.08)]`}>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,59,0,0.11),transparent_58%)]" />
          <div className="hx-editor-surface relative flex h-full min-h-0 flex-col">
          <div className="flex items-center justify-between gap-1.5 border-b border-white/[0.07] px-2 py-1.5 sm:px-3">
            <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#ff3b00]/20 bg-[#ff3b00]/10 text-[#ff6a36]">
                <span className="font-mono text-[10px] font-bold">&gt;_</span>
              </div>
              <div className="min-w-0">
                <div className="truncate text-[9px] font-semibold uppercase tracking-[0.12em] text-neutral-200 sm:text-[10px]">with parsim</div>
                <div className="truncate font-mono text-[8px] text-neutral-500 sm:text-[9px]">{fileName}</div>
                </div>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-1 text-[7px] font-mono uppercase tracking-wider text-neutral-500 sm:text-[8px]">
              <span className="hx-status-dot h-1.5 w-1.5 rounded-full bg-[#ff5a2f]" />
              READY
            </div>
          </div>

          <div className="flex shrink-0 items-center justify-between gap-1 border-b border-white/[0.06] px-2 py-1 sm:px-3">
            <div className="flex items-center gap-0.5 rounded-md border border-white/[0.06] bg-black/20 p-0.5">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  aria-pressed={tab === t}
                  className={`cursor-pointer rounded px-1.5 py-0.5 text-[8px] font-mono transition-colors sm:px-2 sm:text-[9px] ${
                    tab === t
                      ? 'bg-[#ff3b00]/15 text-[#ff6a36]'
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <button
              onClick={copy}
              className="inline-flex shrink-0 cursor-pointer items-center gap-1 font-mono text-[7px] tracking-wider text-neutral-400 transition-colors hover:text-white sm:text-[8px]"
              aria-label="Copy snippet"
              aria-live="polite"
            >
              {copied ? <Check className="h-3 w-3 text-[#ff3b00]" /> : <Copy className="h-3 w-3" />}
              <span>{copied ? 'COPIED' : copyFailed ? 'FAILED' : 'COPY'}</span>
            </button>
          </div>

          <pre className="flex-1 min-h-0 overflow-auto py-1 font-mono text-[8px] leading-[1.55] text-neutral-300 sm:text-[9px]">
            {lines.map((line, i) => (
              <div
                key={`${tab}-${i}`}
                className={`flex min-h-[1.55em] whitespace-pre pr-2 ${i === highlightedLine ? 'hx-active-line border-l border-[#ff3b00]/60' : 'border-l border-transparent'}`}
              >
                <span className="w-7 shrink-0 select-none pr-2 text-right text-[7px] text-neutral-600 sm:w-8 sm:text-[8px]">{String(i + 1).padStart(2, '0')}</span>
                <span>
                  {line.map(([text, key], j) => (
                    <span key={j} className={key ? TOK_CLASS[key] : undefined}>{text}</span>
                  ))}
                </span>
              </div>
            ))}
          </pre>

          <div className="flex shrink-0 items-center justify-between gap-1 border-t border-white/[0.07] px-2 py-1 sm:px-3">
            <div className="flex items-center gap-1 font-mono text-[7px] sm:gap-1.5 sm:text-[8px]">
              <span className="text-neutral-500">960 GB</span>
              <span className="text-neutral-600">→</span>
              <span className="font-semibold text-[#ff6a36]">58.5 GB</span>
              <span className="rounded border border-[#ff3b00]/20 bg-[#ff3b00]/10 px-1 py-px text-[#ff6a36]">16.4×</span>
            </div>
            <div className="shrink-0 font-mono text-[7px] text-neutral-500 sm:text-[8px]">
              RECALL <span className="font-semibold text-neutral-200">99.98%</span>
            </div>
          </div>
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