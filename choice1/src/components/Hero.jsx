import React from 'react';
import HeroCanvas from './HeroCanvas';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-[110px] overflow-hidden border-b border-line relative">
      <HeroCanvas />
      <div className="grid-bg" />
      <div className="wrap relative z-[2] w-full">
        <div className="hero-badge reveal">
          <i className="w-[6px] h-[6px] bg-blue block animate-[blink_1.4s_infinite]" />
          VIRO / LONG-HORIZON CONTEXT RUNTIME
        </div>

        <h1 className="hero-title text-[clamp(44px,8.4vw,124px)] leading-[0.98] font-medium tracking-[-0.03em] uppercase">
          <span className="row">
              <span>LONG RUNS,</span>
          </span>
          <span className="row">
            <span>
                <span className="outline glitch" data-text="LESS WASTE">LESS WASTE</span>
            </span>
          </span>
          <span className="row">
            <span>
              FOR YOUR <span className="fill-blue">AGENTS.</span>
            </span>
          </span>
        </h1>

        <div className="hero-meta flex flex-wrap gap-[clamp(24px,5vw,80px)] items-end justify-between mt-[54px]">
          <p className="hero-desc reveal max-w-[420px] text-dim text-[15px] leading-[1.75]" data-d="2">
            VIRO compresses redundant context across long AI runs, lowering token cost without changing your prompts, model or workflow.
          </p>
          <div className="hero-cta reveal flex gap-[14px] flex-wrap" data-d="3">
            <a className="btn solid" href="#setup">
              <span className="sq" />
              <span>npm install viro-sdk</span>
            </a>
            <a className="btn" href="#faq">
              <span>VIEW DOCS</span>
              <span>→</span>
            </a>
          </div>
        </div>

        <div className="hero-terminal reveal border border-line bg-panel mt-[70px] font-mono text-[12px] leading-[2]" data-d="4">
          <div className="flex justify-between border-b border-line px-[20px] py-[12px] text-[10px] tracking-[0.2em] text-dim2"><span>VIRO TRACE // SESSION 8471-B</span><span>LIVE</span></div>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-[20px] items-center p-[24px]">
            <div><div className="text-dim2 mb-[8px]">RAW CONTEXT</div><div className="text-[#ff5470]">128,420 tokens</div><div className="text-dim2">history + tool output + repeats</div></div>
            <div className="text-blue-2 text-[18px]">&#8594; VIRO &#8594;</div>
            <div><div className="text-dim2 mb-[8px]">ACTIVE CONTEXT</div><div className="text-cyan">35,910 tokens</div><div className="text-dim2">signal retained / noise pruned</div></div>
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
