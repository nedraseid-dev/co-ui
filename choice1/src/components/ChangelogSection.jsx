import React from 'react';

const CHANGELOGS = [
  {
    date: 'SEP 14, 2026',
    tag: 'FEATURE',
    title: 'Memory Fabric v2 — cross-agent shared tiers',
    delay: '1',
  },
  {
    date: 'AUG 02, 2026',
    tag: 'PERF',
    title: 'Compaction latency cut to ~38ms at p99',
    delay: '1',
  },
  {
    date: 'JUN 21, 2026',
    tag: 'FEATURE',
    title: 'Attention Budget API — price context like currency',
    delay: '2',
  },
  {
    date: 'APR 30, 2026',
    tag: 'FIX',
    title: 'Recall fidelity raised to 99.98% on nested summaries',
    delay: '2',
  },
];

export default function ChangelogSection() {
  return (
    <section id="changelog" className="py-[clamp(90px,12vw,160px)] bg-bg2">
      <div className="wrap">
        <div className="sec-tag reveal">
          <b>N.08</b> &gt; CHANGELOG
        </div>

        <h2 className="display reveal">
          We ship fast.
          <br />
          Always <em>improving.</em>
        </h2>

        <div className="cl-list mt-[64px] border-t border-line">
          {CHANGELOGS.map((item, idx) => (
            <div
              key={idx}
              className="cl-row reveal grid grid-cols-1 md:grid-cols-[130px_130px_1fr_auto] gap-[8px] md:gap-[20px] items-center py-[26px] border-b border-line transition-all duration-300 ease-kiro-ease hover:pl-[16px] hover:bg-[rgba(47,84,255,0.05)] group"
              data-d={item.delay}
            >
              <span className="cl-date font-mono text-[11px] text-dim2">{item.date}</span>
              <span className="cl-tag font-mono text-[9px] tracking-[0.2em] border border-line2 p-[5px_10px] text-dim justify-self-start">
                {item.tag}
              </span>
              <span className="cl-title text-[17px]">{item.title}</span>
              <span className="cl-arr font-mono text-dim2 transition-all duration-300 group-hover:text-blue group-hover:translate-x-[6px]">
                →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
