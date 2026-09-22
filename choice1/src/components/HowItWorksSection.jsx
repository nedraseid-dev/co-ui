import React from 'react';
import StreamCanvas from './StreamCanvas';

export default function HowItWorksSection() {
  return (
    <section id="how" className="py-[clamp(90px,12vw,160px)] bg-bg2">
      <div className="wrap">
        <div className="sec-tag reveal">
          <b>N.02</b> &gt; THE FLOW
        </div>

        <h2 className="display reveal">
          From raw stream
          <br />
          to <span className="blue-word">lean context.</span>
        </h2>

        <div className="steps grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-line mt-[64px]">
          <div className="step reveal p-[34px_28px_40px] border-r border-b lg:border-b-0 border-line relative transition-[background] duration-350 hover:bg-[rgba(47,84,255,0.06)]" data-d="1">
            <div className="idx font-mono text-[10px] text-dim2 tracking-[0.3em]">//001</div>
            <svg className="glyph absolute top-[30px] right-[26px] w-[38px] h-[38px]" viewBox="0 0 38 38">
              <g fill="none" stroke="#8b9099" strokeWidth="1.5">
                <path d="M4 30V10l15 12 15-14v22" />
              </g>
            </svg>
            <h3 className="text-[21px] font-medium my-[52px_14px]">Ingest the stream</h3>
            <p className="text-dim text-[13px] leading-[1.7]">
              Conversation, docs, tool traces and memory enter a unified token graph — deduplicated at the semantic level, not the string level.
            </p>
          </div>

          <div className="step reveal p-[34px_28px_40px] border-r border-b lg:border-b-0 border-line relative transition-[background] duration-350 hover:bg-[rgba(47,84,255,0.06)]" data-d="2">
            <div className="idx font-mono text-[10px] text-dim2 tracking-[0.3em]">//002</div>
            <svg className="glyph absolute top-[30px] right-[26px] w-[38px] h-[38px]" viewBox="0 0 38 38">
              <g fill="#2f54ff">
                <rect x="4" y="16" width="8" height="8" />
                <rect x="16" y="8" width="8" height="8" />
                <rect x="16" y="24" width="8" height="8" />
                <rect x="28" y="16" width="6" height="6" />
              </g>
            </svg>
            <h3 className="text-[21px] font-medium my-[52px_14px]">Score every token</h3>
            <p className="text-dim text-[13px] leading-[1.7]">
              Each span is ranked by decision-criticality: recency, salience, task relevance and downstream dependencies — in real time.
            </p>
          </div>

          <div className="step reveal p-[34px_28px_40px] border-r border-b sm:border-b-0 border-line relative transition-[background] duration-350 hover:bg-[rgba(47,84,255,0.06)]" data-d="3">
            <div className="idx font-mono text-[10px] text-dim2 tracking-[0.3em]">//003</div>
            <svg className="glyph absolute top-[30px] right-[26px] w-[38px] h-[38px]" viewBox="0 0 38 38">
              <g fill="none" stroke="#8b9099" strokeWidth="1.5">
                <rect x="5" y="5" width="12" height="12" />
                <rect x="21" y="5" width="12" height="12" />
                <rect x="5" y="21" width="12" height="12" />
                <path d="M21 27h12M27 21v12" stroke="#2f54ff" />
              </g>
            </svg>
            <h3 className="text-[21px] font-medium my-[52px_14px]">Compact &amp; budget</h3>
            <p className="text-dim text-[13px] leading-[1.7]">
              Low-value spans collapse into lossy summaries. High-value spans stay verbatim. Attention is budgeted across the horizon, not the window.
            </p>
          </div>

          <div className="step reveal p-[34px_28px_40px] relative transition-[background] duration-350 hover:bg-[rgba(47,84,255,0.06)]" data-d="4">
            <div className="idx font-mono text-[10px] text-dim2 tracking-[0.3em]">//004</div>
            <svg className="glyph absolute top-[30px] right-[26px] w-[38px] h-[38px]" viewBox="0 0 38 38">
              <g fill="none" stroke="#8b9099" strokeWidth="1.5">
                <path d="M6 19a13 13 0 0 1 22-9M32 19a13 13 0 0 1-22 9" />
                <path d="M28 4v6h-6M10 34v-6h6" stroke="#2f54ff" />
              </g>
            </svg>
            <h3 className="text-[21px] font-medium my-[52px_14px]">Refine on a loop</h3>
            <p className="text-dim text-[13px] leading-[1.7]">
              Every completed task writes distilled memory back. The system gets leaner the longer it runs — the opposite of context bloat.
            </p>
          </div>
        </div>

        <StreamCanvas />
      </div>
    </section>
  );
}
