import React from 'react';

export default function CtaSection() {
  return (
    <section id="cta" className="py-[clamp(110px,15vw,200px)] text-center overflow-hidden relative">
      <div className="grid-bg" />
      <div className="wrap relative z-[1]">
        <div className="sec-tag reveal justify-center">
          <b>N.10</b> &gt; BEGIN
        </div>

        <div className="mega reveal" data-d="1">
          STOP PAYING
          <br />
          <span className="outline">FOR NOISE.</span>
        </div>

        <div className="mega reveal mt-[10px]" data-d="2">
          START SHIPPING <span className="fill">SIGNAL.</span>
        </div>

        <div className="cta-sub reveal font-mono text-[11px] tracking-[0.3em] text-dim my-[34px_44px]" data-d="3">
          FREE TIER — NO CARD — 5 MINUTE SETUP
        </div>

        <div className="reveal" data-d="4">
          <a className="btn solid text-[13px] p-[20px_44px]" href="#hero">
            <span className="sq" />
            <span>DEPLOY KIRO ▸</span>
          </a>
        </div>
      </div>
    </section>
  );
}
