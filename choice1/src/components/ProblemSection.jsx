import React from 'react';
import WasteCanvas from './WasteCanvas';
import CountUp from './CountUp';

export default function ProblemSection() {
  return (
    <section id="problem" className="py-[clamp(90px,12vw,160px)]">
      <div className="wrap">
        <div className="sec-tag reveal">
          <b>N.01</b> &gt; THE BOTTLENECK
        </div>

        <div className="problem-grid grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[clamp(40px,6vw,100px)] items-start">
          <div>
            <h2 className="display reveal">
              Context is expensive.
              <br />
              <em>Redundancy</em> is the tax.
            </h2>
            <p className="sub reveal" data-d="1">
              Long-horizon agents drown in their own history. Every replayed document, every repeated system prompt, every stale tool result burns budget and attention. Kiro removes what doesn't matter — surgically.
            </p>

            <div className="big-counter reveal font-mono text-[clamp(48px,7vw,96px)] font-bold leading-none my-[26px_8px]" data-d="2">
              <CountUp end={68} suffix="%" />
              <span className="text-blue-2">_</span>
            </div>

            <p className="dim reveal font-mono text-[11px] tracking-[0.2em]" data-d="2">
              OF TOKENS IN A TYPICAL 1M-TOKEN SESSION CARRY ZERO DECISION VALUE.
            </p>

            <div className="mini-stats reveal grid grid-cols-2 border border-line mt-[44px]" data-d="3">
              <div className="p-[22px] border-r border-b border-line">
                <div className="n font-mono text-[26px] font-bold">
                  <CountUp end={41} suffix="%" />
                </div>
                <div className="l font-mono text-[10px] tracking-[0.2em] text-dim2 mt-[5px] uppercase">
                  Prompt duplication
                </div>
              </div>
              <div className="p-[22px] border-b border-line">
                <div className="n font-mono text-[26px] font-bold">
                  <CountUp end={19} suffix="%" />
                </div>
                <div className="l font-mono text-[10px] tracking-[0.2em] text-dim2 mt-[5px] uppercase">
                  Stale tool output
                </div>
              </div>
              <div className="p-[22px] border-r border-line">
                <div className="n font-mono text-[26px] font-bold">
                  <CountUp end={8} suffix="%" />
                </div>
                <div className="l font-mono text-[10px] tracking-[0.2em] text-dim2 mt-[5px] uppercase">
                  Re-explained context
                </div>
              </div>
              <div className="p-[22px]">
                <div className="n font-mono text-[26px] font-bold">
                  <CountUp end={31} suffix="×" />
                </div>
                <div className="l font-mono text-[10px] tracking-[0.2em] text-dim2 mt-[5px] uppercase">
                  Cheaper per resolved task
                </div>
              </div>
            </div>
          </div>

          <div className="problem-visual reveal relative border border-line bg-panel p-[26px] min-h-[420px] overflow-hidden" data-d="2">
            <div className="pv-head flex justify-between font-mono text-[10px] tracking-[0.2em] text-dim2 border-b border-line pb-[14px] mb-[14px]">
              <span>SESSION // 8471-B</span>
              <span>RAW STREAM</span>
            </div>
            <WasteCanvas />
            <div className="pv-foot font-mono text-[10px] text-dim2 tracking-[0.15em] flex justify-between mt-[12px]">
              <span>■ NECESSARY CONTEXT</span>
              <span className="text-[#ff5470]">■ REDUNDANT WASTE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
