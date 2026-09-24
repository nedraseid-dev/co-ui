import React from 'react';

const METRICS = [
  ['TOKENS SAVED', '9.42M', 'across 2,184 runs'],
  ['COMPRESSION', '72.4%', 'median over 30 days'],
  ['SESSIONS OPTIMIZED', '1,906', 'active long-horizon jobs'],
  ['RETRIEVAL P95', '38ms', 'on-demand context return'],
];

export default function PerfSection() {
  return (
    <section id="perf" className="py-[clamp(90px,12vw,160px)]">
      <div className="wrap">
        <div className="sec-tag reveal"><b>N.05</b> &gt; LIVE METRICS</div>
        <div className="flex flex-wrap justify-between gap-[24px] items-end">
          <h2 className="display reveal">Less context.<br /><span className="blue-word">Same signal.</span></h2>
          <p className="sub reveal max-w-[320px]" data-d="1">A representative parsim workspace view. Numbers are synthetic, the accounting model is real.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-line mt-[64px] bg-panel">
          {METRICS.map(([label, value, detail], index) => (
            <div key={label} className={`reveal p-[26px] min-h-[170px] ${index < 3 ? 'border-r border-b lg:border-b-0 border-line' : 'border-b lg:border-b-0 border-line'}`} data-d={String(index + 1)}>
              <div className="font-mono text-[10px] tracking-[0.2em] text-dim2">{label}</div>
              <div className="font-mono text-[clamp(30px,4vw,52px)] font-bold leading-none mt-[38px] text-white">{value}</div>
              <div className="font-mono text-[10px] tracking-[0.12em] text-[#FF6B00] mt-[12px]">{detail}</div>
            </div>
          ))}
        </div>
        <div className="reveal border border-line border-t-0 bg-panel p-[24px]" data-d="4">
          <div className="flex justify-between font-mono text-[10px] tracking-[0.18em] text-dim2 mb-[14px]"><span>CONTEXT UTILIZATION / 24H</span><span className="text-white">TARGET &lt; 40%</span></div>
          <div className="flex items-end gap-[4px] h-[86px]">
            {[82, 76, 88, 71, 69, 63, 59, 57, 51, 48, 44, 39, 35, 38, 32, 29, 31, 26, 24, 28, 22, 25, 20, 18].map((height, index) => <i key={index} className="flex-1 bg-white opacity-[0.85]" style={{ height: `${height}%` }} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
