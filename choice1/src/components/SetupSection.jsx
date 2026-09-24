import React from 'react';

export default function SetupSection() {
  return (
    <section id="setup" className="py-[clamp(90px,12vw,160px)] bg-bg2">
      <div className="wrap">
        <div className="sec-tag reveal"><b>N.03</b> &gt; SETUP</div>
        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-[clamp(40px,8vw,120px)] items-end">
          <div>
            <h2 className="display reveal">One command.<br /><span className="blue-word">Same agent.</span></h2>
            <p className="sub reveal" data-d="1">VIRO sits beside your runtime. Your prompts, model calls and orchestration stay exactly where they are.</p>
          </div>
          <div className="reveal border border-line bg-panel font-mono text-[12px] leading-[2]" data-d="2">
            <div className="flex justify-between border-b border-line px-[20px] py-[12px] text-[10px] tracking-[0.2em] text-dim2"><span>TERMINAL</span><span>VIRO // READY</span></div>
            <div className="p-[22px] text-dim">
              <div><span className="text-blue-2">$</span> npm install viro-sdk</div>
              <div className="text-dim2">added 1 package in 1.8s</div>
              <div className="mt-[12px]"><span className="text-blue-2">$</span> viro init</div>
              <div className="text-white">&#9656; context observer online</div>
              <div className="text-white">&#9656; retrieval policy: on-demand</div>
              <div className="text-blue-2">&#9656; no prompt or model changes detected</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}