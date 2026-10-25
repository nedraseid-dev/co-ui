import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ScrollReveal } from './ScrollReveal';
import { EditableText } from './EditableText';
import { ArrowRight, Copy, Check } from 'lucide-react';

interface HeroProps {
  onOpenPress: () => void;
}

type SdkTab = 'python' | 'vllm' | 'cli';
type HorizonPresetId = '1M' | '4M' | '10M' | '32M';

interface HorizonPreset {
  id: HorizonPresetId;
  label: string;
  rawKvGb: number;
  compressedKvGb: number;
  compressionRatio: number;
  recallP95: number;
  maxHorizonMillions: number;
}

const HORIZON_PRESETS: Record<HorizonPresetId, HorizonPreset> = {
  '1M': {
    id: '1M',
    label: '1M',
    rawKvGb: 96,
    compressedKvGb: 6.4,
    compressionRatio: 15.0,
    recallP95: 99.994,
    maxHorizonMillions: 10.2,
  },
  '4M': {
    id: '4M',
    label: '4M',
    rawKvGb: 384,
    compressedKvGb: 24.0,
    compressionRatio: 16.0,
    recallP95: 99.989,
    maxHorizonMillions: 10.2,
  },
  '10M': {
    id: '10M',
    label: '10M',
    rawKvGb: 960,
    compressedKvGb: 58.5,
    compressionRatio: 16.4,
    recallP95: 99.984,
    maxHorizonMillions: 10.2,
  },
  '32M': {
    id: '32M',
    label: '32M',
    rawKvGb: 3072,
    compressedKvGb: 172.6,
    compressionRatio: 17.8,
    recallP95: 99.971,
    maxHorizonMillions: 32.0,
  },
};

export const Hero: React.FC<HeroProps> = ({ onOpenPress }) => {
  const [sdkTab, setSdkTab] = useState<SdkTab>('python');
  const [horizonId, setHorizonId] = useState<HorizonPresetId>('10M');
  const metrics = HORIZON_PRESETS[horizonId];

  return (
    <section className="relative flex h-[calc(100svh-5rem)] flex-col justify-between overflow-hidden bg-[#080808] border-b border-neutral-900 px-6 pt-8 pb-4 lg:px-12 lg:pt-10 lg:pb-5 text-white select-none">
      {/* Load Bricolage Grotesque, Plus Jakarta Sans & JetBrains Mono automatically */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700&family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .parsim-display-headline {
          font-family: 'Bricolage Grotesque', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .parsim-body-copy {
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .parsim-mono {
          font-family: 'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace;
          font-variant-numeric: tabular-nums;
        }
      `}</style>

      {/* Background Attention Constellation Graph (Strictly in Open Empty Space) */}
      <AttentionConstellation />

      {/* Center Band: Stylish Display Headline (Left) + Generated Workbench Card (Right) */}
      <div className="relative z-10 my-auto w-full grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        {/* Left Column: Bricolage Grotesque Headline with generous bottom spacing */}
        <div className="lg:col-span-5 pb-12 lg:pb-16">
          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="parsim-display-headline text-[clamp(3.1rem,5vw,4.75rem)] font-semibold leading-[1.03] tracking-[-0.035em] text-white [text-wrap:balance]">
              <EditableText
                id="hero_headline"
                as="span"
                defaultText="Tokens that think across horizons."
              />
            </h1>
          </ScrollReveal>
        </div>

        {/* Right Column: Generated Tilted Code & KV Cache Card */}
        <div className="lg:col-span-7">
          <ScrollReveal direction="up" delay={0.2}>
            <HeroWorkbenchCard
              sdkTab={sdkTab}
              onSelectSdkTab={setSdkTab}
              horizonId={horizonId}
              onSelectHorizon={setHorizonId}
              metrics={metrics}
            />
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom Edge Band: Solid Black Description + Orange/Black Button anchored close to edge */}
      <div className="relative z-10 w-full flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        {/* Bottom-Left Edge: Description + Access Parsim CTA */}
        <ScrollReveal direction="up" delay={0.2} className="max-w-[540px]">
          <div>
            <p className="parsim-body-copy text-[15px] font-normal leading-[1.6] text-white">
              <EditableText
                id="hero_subtext"
                as="span"
                defaultText="Parsim compresses, optimizes, and scales attention state for frontier LLMs, autonomous agents, and multi-turn reasoning chains. 99.984% semantic fidelity, measured at 10M tokens"
              />
            </p>

            <div className="mt-4">
              <a
                href="/auth"
                className="parsim-body-copy group inline-flex items-center gap-3.5 bg-[#FF4400] px-6 py-3.5 text-[13px] font-bold tracking-tight text-[#111111] shadow-[0_10px_24px_-6px_rgba(255,68,0,0.45)] hover:bg-[#FF551A] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span className="text-[#111111]">Access Parsim</span>
                <ArrowRight className="h-4 w-4 stroke-[2.2] text-[#111111] transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom-Right Edge: RECALL P95 | MAX HORIZON */}
        <ScrollReveal direction="up" delay={0.25} className="flex items-center gap-6 pb-0.5">
          <div>
            <div className="parsim-mono text-[10px] font-medium tracking-[0.08em] text-[#6E675F] uppercase">
              RECALL P95
            </div>
            <div className="parsim-mono mt-0.5 text-[18px] font-bold tracking-tight text-white">
              {metrics.recallP95}%
            </div>
          </div>

          <div className="h-9 w-px bg-neutral-800" aria-hidden="true" />

          <div>
            <div className="parsim-mono text-[10px] font-medium tracking-[0.08em] text-[#6E675F] uppercase">
              MAX HORIZON
            </div>
            <div className="parsim-mono mt-0.5 text-[18px] font-bold tracking-tight text-[#FF4400]">
              {metrics.maxHorizonMillions}M TOKENS
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

/* =========================================================
   Generated Code Snippet Workbench Card
   ========================================================= */

interface CodeLine {
  lineNumber: string;
  code: string;
  highlighted?: boolean;
  tokens: Array<{ text: string; type: 'comment' | 'keyword' | 'plain' | 'method' | 'string' }>;
}

function generateSdkCodeLines(
  tab: SdkTab,
  horizonId: HorizonPresetId,
  metrics: HorizonPreset
): { filename: string; lines: CodeLine[]; rawText: string } {
  const rawStr = `${metrics.rawKvGb} GB`;
  const compStr = `${metrics.compressedKvGb} GB`;

  if (tab === 'python') {
    const lines: CodeLine[] = [
      {
        lineNumber: '01',
        code: '# pip install parsim-attention',
        tokens: [{ text: '# pip install parsim-attention', type: 'comment' }],
      },
      {
        lineNumber: '02',
        code: 'import parsim',
        tokens: [
          { text: 'import ', type: 'keyword' },
          { text: 'parsim', type: 'plain' },
        ],
      },
      { lineNumber: '03', code: '', tokens: [] },
      {
        lineNumber: '04',
        code: `model = parsim.wrap(model, horizon="${horizonId}")`,
        highlighted: true,
        tokens: [
          { text: 'model = parsim.', type: 'plain' },
          { text: 'wrap', type: 'method' },
          { text: '(model, horizon=', type: 'plain' },
          { text: `"${horizonId}"`, type: 'string' },
          { text: ')', type: 'plain' },
        ],
      },
      { lineNumber: '05', code: '', tokens: [] },
      {
        lineNumber: '06',
        code: `# KV cache: ${rawStr} → ${compStr}`,
        tokens: [{ text: `# KV cache: ${rawStr} → ${compStr}`, type: 'comment' }],
      },
      {
        lineNumber: '07',
        code: 'out = model.generate(prompt)',
        tokens: [
          { text: 'out = model.', type: 'plain' },
          { text: 'generate', type: 'method' },
          { text: '(prompt)', type: 'plain' },
        ],
      },
    ];
    return {
      filename: 'quickstart.py',
      lines,
      rawText: lines.map((l) => l.code).join('\n'),
    };
  }

  if (tab === 'vllm') {
    const lines: CodeLine[] = [
      {
        lineNumber: '01',
        code: '# Launch vLLM with Parsim Sparse-Horizon backend',
        tokens: [{ text: '# Launch vLLM with Parsim Sparse-Horizon backend', type: 'comment' }],
      },
      {
        lineNumber: '02',
        code: 'from vllm import LLM, SamplingParams',
        tokens: [
          { text: 'from ', type: 'keyword' },
          { text: 'vllm ', type: 'plain' },
          { text: 'import ', type: 'keyword' },
          { text: 'LLM, SamplingParams', type: 'plain' },
        ],
      },
      { lineNumber: '03', code: '', tokens: [] },
      {
        lineNumber: '04',
        code: `llm = LLM(model="Llama-3.3-70B-Instruct", kv_backend="parsim:${horizonId}")`,
        highlighted: true,
        tokens: [
          { text: 'llm = ', type: 'plain' },
          { text: 'LLM', type: 'method' },
          { text: '(model="Llama-3.3-70B-Instruct", kv_backend=', type: 'plain' },
          { text: `"parsim:${horizonId}"`, type: 'string' },
          { text: ')', type: 'plain' },
        ],
      },
      { lineNumber: '05', code: '', tokens: [] },
      {
        lineNumber: '06',
        code: `# KV cache: ${rawStr} → ${compStr} (${metrics.compressionRatio}× density)`,
        tokens: [
          {
            text: `# KV cache: ${rawStr} → ${compStr} (${metrics.compressionRatio}× density)`,
            type: 'comment',
          },
        ],
      },
      {
        lineNumber: '07',
        code: 'outputs = llm.generate(prompts, SamplingParams(max_tokens=4096))',
        tokens: [
          { text: 'outputs = llm.', type: 'plain' },
          { text: 'generate', type: 'method' },
          { text: '(prompts, SamplingParams(max_tokens=4096))', type: 'plain' },
        ],
      },
    ];
    return {
      filename: 'serve_vllm.py',
      lines,
      rawText: lines.map((l) => l.code).join('\n'),
    };
  }

  const lines: CodeLine[] = [
    {
      lineNumber: '01',
      code: '# Start distributed Parsim attention daemon',
      tokens: [{ text: '# Start distributed Parsim attention daemon', type: 'comment' }],
    },
    {
      lineNumber: '02',
      code: 'parsim init --runtime cuda-12.4 --ring-flash',
      tokens: [
        { text: 'parsim ', type: 'keyword' },
        { text: 'init --runtime cuda-12.4 --ring-flash', type: 'plain' },
      ],
    },
    { lineNumber: '03', code: '', tokens: [] },
    {
      lineNumber: '04',
      code: `parsim serve llama-3.3-70b --horizon "${horizonId}" --recall-floor 0.9998`,
      highlighted: true,
      tokens: [
        { text: 'parsim ', type: 'keyword' },
        { text: 'serve ', type: 'method' },
        { text: 'llama-3.3-70b --horizon ', type: 'plain' },
        { text: `"${horizonId}"`, type: 'string' },
        { text: ' --recall-floor 0.9998', type: 'plain' },
      ],
    },
    { lineNumber: '05', code: '', tokens: [] },
    {
      lineNumber: '06',
      code: `# KV pool allocated: ${compStr} (replaces ${rawStr} raw FP16)`,
      tokens: [
        { text: `# KV pool allocated: ${compStr} (replaces ${rawStr} raw FP16)`, type: 'comment' },
      ],
    },
    {
      lineNumber: '07',
      code: 'parsim bench --needle-depth 10000000 --verify-fidelity',
      tokens: [
        { text: 'parsim ', type: 'keyword' },
        { text: 'bench ', type: 'method' },
        { text: '--needle-depth 10000000 --verify-fidelity', type: 'plain' },
      ],
    },
  ];
  return {
    filename: 'parsim-cli.sh',
    lines,
    rawText: lines.map((l) => l.code).join('\n'),
  };
}

function HeroWorkbenchCard({
  sdkTab,
  onSelectSdkTab,
  horizonId,
  onSelectHorizon,
  metrics,
}: {
  sdkTab: SdkTab;
  onSelectSdkTab: (tab: SdkTab) => void;
  horizonId: HorizonPresetId;
  onSelectHorizon: (horizon: HorizonPresetId) => void;
  metrics: HorizonPreset;
}) {
  const [copied, setCopied] = useState(false);
  const snippet = useMemo(
    () => generateSdkCodeLines(sdkTab, horizonId, metrics),
    [sdkTab, horizonId, metrics]
  );

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(snippet.rawText).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const horizonKeys: HorizonPresetId[] = ['1M', '4M', '10M', '32M'];

  return (
    <div className="relative mx-auto w-full max-w-[530px] lg:mr-6 lg:ml-auto select-none">
      {/* Outer Tilted Wireframe Outlines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-2.5 -inset-y-2 translate-x-2.5 translate-y-2.5 rounded-[16px] border border-[#FF6B35]/35 bg-[#FFE8DF]/25"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-1.5 -inset-y-1 -rotate-[1.85deg] rounded-[16px] border border-[#1E1E1C]/45"
      />

      {/* Main Tilted Code & Telemetry Card */}
      <div className="relative -rotate-[1.15deg] rounded-[14px] border border-[#F3C6B4] bg-gradient-to-br from-[#FFF9F6] via-[#FDEBE3] to-[#FBDCCF] p-4 sm:p-4.5 shadow-[0_24px_55px_-16px_rgba(255,68,0,0.18),0_6px_18px_-6px_rgba(24,24,22,0.07)] transition-transform duration-200 hover:rotate-0">
        {/* Card Header: Icon Box + WITH PARSIM / quickstart.py + Horizon Preset Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-2.5">
          <div className="flex items-center gap-2.5">
            <div className="parsim-mono flex h-7 w-7 items-center justify-center rounded-md border border-[#FF551A]/25 bg-[#FFEDE5] text-[11px] font-bold text-[#FF4400]">
              &gt;_
            </div>
            <div>
              <div className="parsim-mono text-[10px] font-bold tracking-[0.06em] text-[#2B2927] uppercase">
                WITH PARSIM
              </div>
              <div className="parsim-mono text-[10px] text-[#6E675F]">{snippet.filename}</div>
            </div>
          </div>

          {/* Interactive Horizon Selector */}
          <div className="flex items-center gap-1" role="group" aria-label="Context horizon">
            {horizonKeys.map((hKey) => {
              const active = horizonId === hKey;
              return (
                <button
                  key={hKey}
                  type="button"
                  onClick={() => onSelectHorizon(hKey)}
                  className={`parsim-mono rounded px-1.5 py-0.5 text-[9.5px] font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    active
                      ? 'bg-[#FF4400] text-white'
                      : 'bg-white/65 text-[#5E5850] hover:bg-white hover:text-[#1D1D1B]'
                  }`}
                >
                  {HORIZON_PRESETS[hKey].label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Inner Code Surface */}
        <div className="rounded-lg border border-[#F2C5B3]/80 bg-gradient-to-b from-[#F9DDD0]/75 via-[#FCECE4]/90 to-[#F9DFD3]/80 px-3.5 py-2.5 shadow-inner">
          {/* SDK Tabs (Python / vLLM / CLI) + COPY Button */}
          <div className="flex items-center justify-between gap-2 pb-2">
            <div
              className="inline-flex items-center rounded-md border border-[#1D1D1B]/12 bg-[#ACA39B]/35 p-0.5"
              role="tablist"
              aria-label="SDK Language"
            >
              {(
                [
                  { id: 'python', label: 'Python' },
                  { id: 'vllm', label: 'vLLM' },
                  { id: 'cli', label: 'CLI' },
                ] as const
              ).map((tab) => {
                const isSelected = sdkTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => onSelectSdkTab(tab.id)}
                    className={`parsim-mono rounded-[4px] px-2 py-0.5 text-[10px] font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-[#FF551A]/20 text-[#D93800] border border-[#FF4400]/35 shadow-2xs'
                        : 'text-[#4A4642] hover:text-[#1D1D1B]'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={handleCopy}
              className="parsim-mono inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[9.5px] font-semibold text-[#5E5850] hover:bg-white/60 hover:text-[#1D1D1B] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="h-2.5 w-2.5 text-[#0D7A5F]" />
                  <span>COPIED</span>
                </>
              ) : (
                <>
                  <Copy className="h-2.5 w-2.5" />
                  <span>COPY</span>
                </>
              )}
            </button>
          </div>

          {/* Code Lines 01 - 07 */}
          <div className="parsim-mono text-[11.5px] leading-[1.58] overflow-x-auto">
            {snippet.lines.map((line) => (
              <div
                key={line.lineNumber}
                className={`flex items-baseline -mx-3.5 px-3.5 ${
                  line.highlighted
                    ? 'bg-gradient-to-r from-[#FF4400]/16 via-[#FF4400]/8 to-transparent border-l-2 border-[#FF4400]'
                    : ''
                }`}
              >
                <span className="w-6 shrink-0 select-none text-[10px] text-[#9A8F86]">
                  {line.lineNumber}
                </span>
                <div className="whitespace-pre">
                  {line.tokens.length === 0 ? (
                    <span>&nbsp;</span>
                  ) : (
                    line.tokens.map((tok, i) => {
                      if (tok.type === 'comment') {
                        return (
                          <span key={i} className="text-[#786F68]">
                            {tok.text}
                          </span>
                        );
                      }
                      if (tok.type === 'keyword') {
                        return (
                          <span key={i} className="font-semibold text-[#E03C00]">
                            {tok.text}
                          </span>
                        );
                      }
                      if (tok.type === 'method') {
                        return (
                          <span key={i} className="font-bold text-[#1D1D1B]">
                            {tok.text}
                          </span>
                        );
                      }
                      if (tok.type === 'string') {
                        return (
                          <span key={i} className="font-semibold text-[#0D7A5F]">
                            {tok.text}
                          </span>
                        );
                      }
                      return (
                        <span key={i} className="text-[#2B2927]">
                          {tok.text}
                        </span>
                      );
                    })
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Card Footer Telemetry Row */}
          <div className="parsim-mono mt-2.5 flex items-center justify-between border-t border-[#1D1D1B]/8 pt-2 text-[10px]">
            <div className="flex items-center gap-1.5">
              <span className="text-[#6E675F]">{metrics.rawKvGb} GB</span>
              <span className="text-[#9A8F86]" aria-hidden="true">
                →
              </span>
              <span className="font-bold text-[#FF4400]">{metrics.compressedKvGb} GB</span>
              <span className="rounded border border-[#FF4400]/35 bg-[#FF4400]/10 px-1.5 py-0.5 text-[9.5px] font-bold text-[#E03C00]">
                {metrics.compressionRatio}×
              </span>
            </div>

            <div className="flex items-center gap-1 text-[10px]">
              <span className="text-[#786F68] uppercase">RECALL</span>
              <span className="font-bold text-[#2B2927]">{metrics.recallP95.toFixed(2)}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   Generated SVG Constellation Animation (In Open Empty Space)
   ========================================================= */

interface ConstellationNode {
  id: string;
  x: number;
  y: number;
  radius: number;
  tier: 'sink' | 'landmark' | 'passive';
}

interface ConstellationEdge {
  from: string;
  to: string;
  active: boolean;
}

const INITIAL_CONSTELLATION_NODES: ConstellationNode[] = [
  { id: 'n0', x: 75, y: 72, radius: 3.5, tier: 'passive' },
  { id: 'n1', x: 195, y: 118, radius: 4, tier: 'passive' },
  { id: 'n2', x: 310, y: 78, radius: 4.5, tier: 'passive' },
  { id: 'n3', x: 385, y: 152, radius: 3.5, tier: 'sink' },
  { id: 'n4', x: 485, y: 96, radius: 5, tier: 'passive' },
  { id: 'n5', x: 575, y: 178, radius: 4, tier: 'sink' },
  { id: 'n6', x: 645, y: 115, radius: 3.5, tier: 'passive' },
  { id: 'n7', x: 618, y: 268, radius: 4, tier: 'landmark' },
  { id: 'n8', x: 585, y: 382, radius: 4.5, tier: 'passive' },
  { id: 'n9', x: 662, y: 335, radius: 3.5, tier: 'sink' },
  { id: 'n10', x: 748, y: 162, radius: 4, tier: 'landmark' },
  { id: 'n11', x: 835, y: 92, radius: 3.5, tier: 'passive' },
  { id: 'n12', x: 465, y: 538, radius: 4, tier: 'passive' },
  { id: 'n13', x: 575, y: 515, radius: 3.5, tier: 'sink' },
  { id: 'n14', x: 685, y: 565, radius: 4.5, tier: 'landmark' },
  { id: 'n15', x: 785, y: 605, radius: 3.5, tier: 'sink' },
  { id: 'n16', x: 642, y: 685, radius: 4.5, tier: 'passive' },
  { id: 'n17', x: 755, y: 725, radius: 4, tier: 'passive' },
  { id: 'n18', x: 895, y: 668, radius: 4, tier: 'passive' },
  { id: 'n19', x: 1015, y: 625, radius: 4.5, tier: 'passive' },
  { id: 'n20', x: 1065, y: 148, radius: 4.5, tier: 'landmark' },
  { id: 'n21', x: 1155, y: 78, radius: 5, tier: 'passive' },
  { id: 'n22', x: 1255, y: 145, radius: 4, tier: 'sink' },
  { id: 'n23', x: 1365, y: 98, radius: 4, tier: 'passive' },
];

const INITIAL_CONSTELLATION_EDGES: ConstellationEdge[] = [
  { from: 'n0', to: 'n1', active: false },
  { from: 'n1', to: 'n2', active: false },
  { from: 'n2', to: 'n3', active: false },
  { from: 'n2', to: 'n4', active: false },
  { from: 'n3', to: 'n5', active: true },
  { from: 'n4', to: 'n5', active: false },
  { from: 'n5', to: 'n6', active: false },
  { from: 'n6', to: 'n10', active: false },
  { from: 'n10', to: 'n11', active: false },
  { from: 'n5', to: 'n7', active: true },
  { from: 'n7', to: 'n9', active: true },
  { from: 'n7', to: 'n8', active: false },
  { from: 'n8', to: 'n9', active: false },
  { from: 'n8', to: 'n13', active: false },
  { from: 'n9', to: 'n13', active: true },
  { from: 'n12', to: 'n13', active: false },
  { from: 'n13', to: 'n14', active: true },
  { from: 'n14', to: 'n15', active: true },
  { from: 'n14', to: 'n16', active: false },
  { from: 'n15', to: 'n17', active: false },
  { from: 'n16', to: 'n17', active: false },
  { from: 'n15', to: 'n18', active: false },
  { from: 'n18', to: 'n19', active: false },
  { from: 'n11', to: 'n20', active: false },
  { from: 'n20', to: 'n21', active: false },
  { from: 'n21', to: 'n22', active: true },
  { from: 'n20', to: 'n22', active: false },
  { from: 'n22', to: 'n23', active: false },
];

const POLYGON_GROUPS: string[][] = [
  ['n2', 'n3', 'n4'],
  ['n4', 'n5', 'n6'],
  ['n7', 'n8', 'n9'],
  ['n13', 'n14', 'n16'],
  ['n14', 'n15', 'n17'],
  ['n20', 'n21', 'n22'],
];

const WAVE_ROUTES: Array<[string, string]> = [
  ['n1', 'n3'],
  ['n3', 'n5'],
  ['n5', 'n10'],
  ['n10', 'n20'],
  ['n20', 'n22'],
  ['n7', 'n13'],
  ['n13', 'n15'],
  ['n15', 'n19'],
];

function AttentionConstellation() {
  const svgRef = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    let rafId: number;
    let startTime: number | null = null;
    const pointer = { x: 720, y: 415, active: false };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = svg.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        pointer.x = ((e.clientX - rect.left) / rect.width) * 1440;
        pointer.y = ((e.clientY - rect.top) / rect.height) * 830;
        pointer.active = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const nodeCircles = new Map<string, SVGCircleElement>();
    const sinkRings = new Map<string, SVGCircleElement>();
    const rippleRings = new Map<string, SVGCircleElement>();
    for (const node of INITIAL_CONSTELLATION_NODES) {
      const c = svg.querySelector<SVGCircleElement>(`[data-node="${node.id}"]`);
      if (c) nodeCircles.set(node.id, c);
      const r = svg.querySelector<SVGCircleElement>(`[data-ring="${node.id}"]`);
      if (r) sinkRings.set(node.id, r);
      const rp = svg.querySelector<SVGCircleElement>(`[data-ripple="${node.id}"]`);
      if (rp) rippleRings.set(node.id, rp);
    }

    const edgeLines = INITIAL_CONSTELLATION_EDGES.map((_, idx) =>
      svg.querySelector<SVGLineElement>(`[data-edge="${idx}"]`)
    );
    const edgePulses = INITIAL_CONSTELLATION_EDGES.map((_, idx) =>
      svg.querySelector<SVGCircleElement>(`[data-pulse="${idx}"]`)
    );
    const waveLines = WAVE_ROUTES.map((_, idx) =>
      svg.querySelector<SVGLineElement>(`[data-wave-edge="${idx}"]`)
    );
    const waveBeams = WAVE_ROUTES.map((_, idx) =>
      svg.querySelector<SVGLineElement>(`[data-wave-beam="${idx}"]`)
    );
    const polyElements = POLYGON_GROUPS.map((_, idx) =>
      svg.querySelector<SVGPolygonElement>(`[data-poly="${idx}"]`)
    );

    const currentCoords = new Map<string, { x: number; y: number }>();

    const tick = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      const waveFrontX = ((elapsed * 195) % 1800) - 180;

      for (let i = 0; i < INITIAL_CONSTELLATION_NODES.length; i++) {
        const node = INITIAL_CONSTELLATION_NODES[i];
        const angle = elapsed * (0.48 + (i % 4) * 0.12) + i * 0.95;
        const radiusX = 9 + (i % 4) * 2.5;
        const radiusY = 7 + (i % 3) * 2.5;

        let x =
          node.x +
          Math.sin(angle) * radiusX +
          Math.cos(angle * 0.5 - elapsed * 0.3) * (radiusX * 0.3);
        let y =
          node.y +
          Math.sin(angle * 2) * (radiusY * 0.55) +
          Math.cos(angle + i) * (radiusY * 0.45);

        if (pointer.active) {
          const dx = pointer.x - x;
          const dy = pointer.y - y;
          const dist = Math.hypot(dx, dy);
          if (dist < 260 && dist > 1) {
            const pull = (1 - dist / 260) * 14;
            x += (dx / dist) * pull;
            y += (dy / dist) * pull;
          }
        }

        currentCoords.set(node.id, { x, y });

        const waveDist = Math.abs(x - waveFrontX);
        const waveExcitation = Math.max(0, 1 - waveDist / 220);

        const circle = nodeCircles.get(node.id);
        if (circle) {
          circle.setAttribute('cx', x.toFixed(2));
          circle.setAttribute('cy', y.toFixed(2));
          const dynamicRadius = node.radius + waveExcitation * 1.8;
          circle.setAttribute('r', dynamicRadius.toFixed(2));
          if (node.tier !== 'sink') {
            circle.setAttribute(
              'stroke',
              waveExcitation > 0.35
                ? `rgba(255, 68, 0, ${(0.35 + waveExcitation * 0.55).toFixed(2)})`
                : 'rgba(130, 130, 125, 0.45)'
            );
          }
        }

        const ring = sinkRings.get(node.id);
        if (ring) {
          ring.setAttribute('cx', x.toFixed(2));
          ring.setAttribute('cy', y.toFixed(2));
          const pulsePhase = (elapsed * 0.8 + i * 0.33) % 1;
          ring.setAttribute('r', (node.radius + 3 + pulsePhase * 14).toFixed(2));
          ring.setAttribute('stroke-opacity', ((1 - pulsePhase) * 0.55).toFixed(2));
        }

        const ripple = rippleRings.get(node.id);
        if (ripple) {
          ripple.setAttribute('cx', x.toFixed(2));
          ripple.setAttribute('cy', y.toFixed(2));
          ripple.setAttribute('r', (node.radius + 2 + waveExcitation * 10).toFixed(2));
          ripple.setAttribute('stroke-opacity', (waveExcitation * 0.45).toFixed(2));
        }
      }

      for (let idx = 0; idx < INITIAL_CONSTELLATION_EDGES.length; idx++) {
        const edge = INITIAL_CONSTELLATION_EDGES[idx];
        const from = currentCoords.get(edge.from);
        const to = currentCoords.get(edge.to);
        if (!from || !to) continue;

        const line = edgeLines[idx];
        if (line) {
          line.setAttribute('x1', from.x.toFixed(2));
          line.setAttribute('y1', from.y.toFixed(2));
          line.setAttribute('x2', to.x.toFixed(2));
          line.setAttribute('y2', to.y.toFixed(2));
        }

        const pulse = edgePulses[idx];
        if (pulse) {
          const t = (elapsed * 0.65 + idx * 0.31) % 1;
          const px = from.x + (to.x - from.x) * t;
          const py = from.y + (to.y - from.y) * t;
          pulse.setAttribute('cx', px.toFixed(2));
          pulse.setAttribute('cy', py.toFixed(2));
        }
      }

      for (let wIdx = 0; wIdx < WAVE_ROUTES.length; wIdx++) {
        const [fromId, toId] = WAVE_ROUTES[wIdx];
        const from = currentCoords.get(fromId);
        const to = currentCoords.get(toId);
        if (!from || !to) continue;

        const wLine = waveLines[wIdx];
        if (wLine) {
          wLine.setAttribute('x1', from.x.toFixed(2));
          wLine.setAttribute('y1', from.y.toFixed(2));
          wLine.setAttribute('x2', to.x.toFixed(2));
          wLine.setAttribute('y2', to.y.toFixed(2));
        }

        const wBeam = waveBeams[wIdx];
        if (wBeam) {
          const cycle = (elapsed * 0.52 + wIdx * 0.19) % 1;
          const tailT = Math.max(0, cycle - 0.28);
          const headT = cycle;
          const x1 = from.x + (to.x - from.x) * tailT;
          const y1 = from.y + (to.y - from.y) * tailT;
          const x2 = from.x + (to.x - from.x) * headT;
          const y2 = from.y + (to.y - from.y) * headT;
          wBeam.setAttribute('x1', x1.toFixed(2));
          wBeam.setAttribute('y1', y1.toFixed(2));
          wBeam.setAttribute('x2', x2.toFixed(2));
          wBeam.setAttribute('y2', y2.toFixed(2));
          const opacity = Math.sin(cycle * Math.PI) * 0.75;
          wBeam.setAttribute('stroke-opacity', opacity.toFixed(2));
        }
      }

      for (let pIdx = 0; pIdx < POLYGON_GROUPS.length; pIdx++) {
        const poly = polyElements[pIdx];
        if (!poly) continue;
        const pts = POLYGON_GROUPS[pIdx]
          .map((id) => {
            const c = currentCoords.get(id);
            return c ? `${c.x.toFixed(1)},${c.y.toFixed(1)}` : '0,0';
          })
          .join(' ');
        poly.setAttribute('points', pts);
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const nodeMap = useMemo(() => {
    const map = new Map<string, { x: number; y: number }>();
    for (const n of INITIAL_CONSTELLATION_NODES) {
      map.set(n.id, { x: n.x, y: n.y });
    }
    return map;
  }, []);

  const initialPolyPoints = (ids: string[]) =>
    ids
      .map((id) => {
        const p = nodeMap.get(id) ?? { x: 0, y: 0 };
        return `${p.x},${p.y}`;
      })
      .join(' ');

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      <svg
        ref={svgRef}
        viewBox="0 0 1440 830"
        preserveAspectRatio="none"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="parsimActiveEdge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF4400" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#FF551A" stopOpacity="0.85" />
          </linearGradient>
          <radialGradient id="cardAmbientGlow" cx="67%" cy="48%" r="28%">
            <stop offset="0%" stopColor="#FF5B22" stopOpacity="0.12" />
            <stop offset="60%" stopColor="#FF5B22" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#F6F5F2" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect x="0" y="0" width="1440" height="830" fill="url(#cardAmbientGlow)" />

        {POLYGON_GROUPS.map((group, idx) => (
          <polygon
            key={idx}
            data-poly={idx}
            points={initialPolyPoints(group)}
            fill={idx === 4 ? 'rgba(255,68,0,0.025)' : 'rgba(120,120,115,0.02)'}
            stroke={idx === 4 ? 'rgba(255,68,0,0.09)' : 'rgba(120,120,115,0.07)'}
            strokeWidth="0.6"
          />
        ))}

        {WAVE_ROUTES.map(([fromId, toId], idx) => {
          const fromPos = nodeMap.get(fromId) ?? { x: 0, y: 0 };
          const toPos = nodeMap.get(toId) ?? { x: 0, y: 0 };
          return (
            <g key={`wave-${fromId}-${toId}-${idx}`}>
              <line
                data-wave-edge={idx}
                x1={fromPos.x}
                y1={fromPos.y}
                x2={toPos.x}
                y2={toPos.y}
                stroke="rgba(120, 120, 115, 0.14)"
                strokeWidth="0.75"
                strokeDasharray="3 5"
              />
              <line
                data-wave-beam={idx}
                x1={fromPos.x}
                y1={fromPos.y}
                x2={fromPos.x}
                y2={fromPos.y}
                stroke="#FF4400"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeOpacity="0.6"
              />
            </g>
          );
        })}

        {INITIAL_CONSTELLATION_EDGES.map((edge, idx) => {
          const fromPos = nodeMap.get(edge.from) ?? { x: 0, y: 0 };
          const toPos = nodeMap.get(edge.to) ?? { x: 0, y: 0 };

          return (
            <g key={`${edge.from}-${edge.to}-${idx}`}>
              <line
                data-edge={idx}
                x1={fromPos.x}
                y1={fromPos.y}
                x2={toPos.x}
                y2={toPos.y}
                stroke={edge.active ? 'url(#parsimActiveEdge)' : 'rgba(120, 120, 115, 0.18)'}
                strokeWidth={edge.active ? 1.35 : 0.8}
              />
              {edge.active && (
                <circle
                  data-pulse={idx}
                  cx={fromPos.x}
                  cy={fromPos.y}
                  r={2.5}
                  fill="#FF4400"
                  opacity={0.9}
                />
              )}
            </g>
          );
        })}

        {INITIAL_CONSTELLATION_NODES.map((node) => {
          const isSink = node.tier === 'sink';
          return (
            <g key={node.id}>
              {isSink ? (
                <circle
                  data-ring={node.id}
                  cx={node.x}
                  cy={node.y}
                  r={node.radius + 4}
                  fill="none"
                  stroke="#FF4400"
                  strokeOpacity={0.35}
                  strokeWidth={1.1}
                />
              ) : (
                <circle
                  data-ripple={node.id}
                  cx={node.x}
                  cy={node.y}
                  r={node.radius + 2}
                  fill="none"
                  stroke="#FF4400"
                  strokeOpacity={0}
                  strokeWidth={0.9}
                />
              )}
              <circle
                data-node={node.id}
                cx={node.x}
                cy={node.y}
                r={node.radius}
                fill={isSink ? '#FF4400' : '#F6F5F2'}
                stroke={isSink ? '#FF4400' : 'rgba(130, 130, 125, 0.45)'}
                strokeWidth={isSink ? 1.2 : 1.05}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}