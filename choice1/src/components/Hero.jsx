import React from 'react';
import HeroCanvas from './HeroCanvas';
import CountUp from './CountUp';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-[110px] overflow-hidden border-b border-line relative">
      <HeroCanvas />
      <div className="grid-bg" />
      <div className="wrap relative z-[2] w-full">
        <div className="hero-badge reveal">
          <i className="w-[6px] h-[6px] bg-blue block animate-[blink_1.4s_infinite]" />
          KIRO V2.4 — LONG-HORIZON TOKEN ENGINE
        </div>

        <h1 className="hero-title text-[clamp(44px,8.4vw,124px)] leading-[0.98] font-medium tracking-[-0.03em] uppercase">
          <span className="row">
            <span>EVERY TOKEN,</span>
          </span>
          <span className="row">
            <span>
              <span className="outline glitch" data-text="OPTIMIZED">OPTIMIZED</span>
            </span>
          </span>
          <span className="row">
            <span>
              FOR THE <span className="fill-blue">LONG RUN.</span>
            </span>
          </span>
        </h1>

        <div className="hero-meta flex flex-wrap gap-[clamp(24px,5vw,80px)] items-end justify-between mt-[54px]">
          <p className="hero-desc reveal max-w-[420px] text-dim text-[15px] leading-[1.75]" data-d="2">
            Kiro is the intelligence layer that <b className="text-white font-medium">compresses, prunes and budgets context</b> across million-token windows — so your agents remember everything, pay for almost nothing, and never lose the plot.
          </p>
          <div className="hero-cta reveal flex gap-[14px] flex-wrap" data-d="3">
            <a className="btn solid" href="#demo">
              <span className="sq" />
              <span>RUN THE DEMO</span>
            </a>
            <a className="btn" href="#how">
              <span>READ THE FLOW</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="hero-stats reveal grid grid-cols-2 md:grid-cols-4 border border-line mt-[70px]" data-d="4">
          <div className="p-[22px_24px] border-r border-b md:border-b-0 border-line">
            <div className="num font-mono text-[clamp(20px,2.4vw,32px)] font-bold">
              <CountUp end={72} suffix="%" />
            </div>
            <div className="lbl font-mono text-[9px] tracking-[0.25em] text-dim2 mt-[6px] uppercase">
              Token spend reduced
            </div>
          </div>
          <div className="p-[22px_24px] md:border-r border-b md:border-b-0 border-line">
            <div className="num font-mono text-[clamp(20px,2.4vw,32px)] font-bold">
              <CountUp end={4} suffix="M" />
            </div>
            <div className="lbl font-mono text-[9px] tracking-[0.25em] text-dim2 mt-[6px] uppercase">
              Effective context horizon
            </div>
          </div>
          <div className="p-[22px_24px] border-r border-line">
            <div className="num font-mono text-[clamp(20px,2.4vw,32px)] font-bold">
              <CountUp end={38} prefix="~" suffix="ms" />
            </div>
            <div className="lbl font-mono text-[9px] tracking-[0.25em] text-dim2 mt-[6px] uppercase">
              Compaction latency
            </div>
          </div>
          <div className="p-[22px_24px]">
            <div className="num font-mono text-[clamp(20px,2.4vw,32px)] font-bold">
              <CountUp end={99} suffix=".98%" />
            </div>
            <div className="lbl font-mono text-[9px] tracking-[0.25em] text-dim2 mt-[6px] uppercase">
              Recall fidelity
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-hint absolute bottom-[26px] left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.4em] text-dim2 flex flex-col items-center gap-[10px] z-[2]">
        <span>SCROLL</span>
        <div className="wire w-[1px] h-[44px] bg-line2 relative overflow-hidden">
          <i className="absolute left-0 -top-[40%] w-full h-[40%] bg-blue animate-[wire_1.8s_cubic-bezier(0.16,1,0.3,1)_infinite]" />
        </div>
      </div>
    </section>
  );
}
