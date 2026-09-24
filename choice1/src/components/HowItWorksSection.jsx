import React from 'react';
import StreamCanvas from './StreamCanvas';

export default function HowItWorksSection() {
  return (
    <section id="how" className="py-[clamp(90px,12vw,160px)] bg-bg2">
      <div className="wrap">
        <div className="sec-tag reveal">
          <b>N.02</b> &gt; HOW PARSIM WORKS
        </div>

        <h2 className="display reveal">
          Observe the stream.
          <br />
          Return only <span className="blue-word">what matters.</span>
        </h2>

        <div className="steps grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-line mt-[64px]">
          <div className="step reveal p-[34px_28px_40px] border-r border-b lg:border-b-0 border-line relative transition-[background] duration-350 hover:bg-[rgba(255,107,0,0.06)]" data-d="1">
            <div className="idx font-mono text-[10px] text-dim2 tracking-[0.3em]">//001</div>
            <svg className="glyph absolute top-[30px] right-[26px] w-[38px] h-[38px]" viewBox="0 0 38 38">
              <g fill="none" stroke="#8b9099" strokeWidth="1.5">
                <path d="M4 30V10l15 12 15-14v22" />
              </g>
            </svg>
            <h3 className="text-[21px] font-medium my-[52px_14px]">Observe</h3>
            <p className="text-dim text-[13px] leading-[1.7]">
              parsim maps conversation, tool traces and memory as they arrive without changing the model call.
            </p>
          </div>

          <div className="step reveal p-[34px_28px_40px] border-r border-b lg:border-b-0 border-line relative transition-[background] duration-350 hover:bg-[rgba(255,107,0,0.06)]" data-d="2">
            <div className="idx font-mono text-[10px] text-dim2 tracking-[0.3em]">//002</div>
            <svg className="glyph absolute top-[30px] right-[26px] w-[38px] h-[38px]" viewBox="0 0 38 38">
              <g fill="#FF6B00">
                <rect x="4" y="16" width="8" height="8" />
                <rect x="16" y="8" width="8" height="8" />
                <rect x="16" y="24" width="8" height="8" />
                <rect x="28" y="16" width="6" height="6" />
              </g>
            </svg>
            <h3 className="text-[21px] font-medium my-[52px_14px]">Compress</h3>
            <p className="text-dim text-[13px] leading-[1.7]">
              Redundant history collapses; decision-critical spans stay intact and the active context gets a smaller budget.
            </p>
          </div>

          <div className="step reveal p-[34px_28px_40px] border-r border-b sm:border-b-0 border-line relative transition-[background] duration-350 hover:bg-[rgba(255,107,0,0.06)]" data-d="3">
            <div className="idx font-mono text-[10px] text-dim2 tracking-[0.3em]">//003</div>
            <svg className="glyph absolute top-[30px] right-[26px] w-[38px] h-[38px]" viewBox="0 0 38 38">
              <g fill="none" stroke="#8b9099" strokeWidth="1.5">
                <rect x="5" y="5" width="12" height="12" />
                <rect x="21" y="5" width="12" height="12" />
                <rect x="5" y="21" width="12" height="12" />
                <path d="M21 27h12M27 21v12" stroke="#FF6B00" />
              </g>
            </svg>
            <h3 className="text-[21px] font-medium my-[52px_14px]">Retrieve on demand</h3>
            <p className="text-dim text-[13px] leading-[1.7]">
              Older signal returns when the task needs it, with the original workflow and prompt contract preserved.
            </p>
          </div>

        </div>

        <StreamCanvas />
      </div>
    </section>
  );
}
