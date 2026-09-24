import React, { useState } from 'react';

const INITIAL_TEXT = `System prompt: You are a helpful assistant. System prompt: You are a helpful assistant. As I was saying earlier, as I was saying earlier, the quarterly report shows that revenue grew 12% quarter over quarter, and margins expanded meaningfully due to reduced infrastructure spend on redundant token processing. Note to self: the meeting originally scheduled for Tuesday has been moved to Thursday, then moved again to Friday, and is now back on Tuesday. Reminder: the API rate limit is 10,000 requests per minute per workspace, and this limit has not changed in six months. In summary, to summarize, in conclusion, the key takeaway is that long documents contain enormous amounts of repeated, low-information filler that costs real money at scale.`;

export default function DemoSection() {
  const [inputText, setInputText] = useState(INITIAL_TEXT);
  const [optimizedHtml, setOptimizedHtml] = useState(null);
  const [meterPct, setMeterPct] = useState(0);
  const [savingsText, setSavingsText] = useState('—');
  const [savingsSub, setSavingsSub] = useState('TOKEN SAVINGS');

  const est = (s) => Math.max(1, Math.round(s.length / 4));
  const tokensIn = est(inputText);

  const handleOptimize = () => {
    const toks = est(inputText);
    const filler = /\b(as i was saying earlier|in summary|to summarize|in conclusion|note to self|reminder:|has not changed in six months|originally scheduled|moved again)\b/gi;
    const words = inputText.split(/(\s+)/);

    let html = '';
    let kept = 0;
    let cut = 0;

    words.forEach((w) => {
      if (!w.trim()) {
        html += w;
        return;
      }
      const isFiller = filler.test(w);
      filler.lastIndex = 0;
      if (isFiller || Math.random() < 0.22) {
        html += `<span class="cut" style="opacity:0.5">${w}</span>`;
        cut += est(w);
      } else {
        html += `<span class="keep">${w}</span>`;
        kept += est(w);
      }
    });

    const summary = `<br><span class="summ">◈ VIRO_SUMMARY → quarterly report: revenue +12% QoQ, margins up on reduced infra spend; meeting confirmed Tuesday; API rate limit 10k req/min/workspace unchanged.</span>`;
    setOptimizedHtml(html + summary);

    const newToks = Math.round(kept + 34);
    const pctSave = Math.max(31, Math.min(88, Math.round(100 - (newToks / toks) * 100)));
    const pctKeep = 100 - pctSave;

    setMeterPct(pctKeep);
    setSavingsSub(`TOKEN SAVINGS (${toks.toLocaleString()} → ~${newToks.toLocaleString()})`);

    // Animate percentage counter
    let v = 0;
    const step = pctSave / 40;
    function anim() {
      v += step;
      if (v < pctSave) {
        setSavingsText('−' + Math.round(v) + '%');
        requestAnimationFrame(anim);
      } else {
        setSavingsText('−' + pctSave + '%');
      }
    }
    requestAnimationFrame(anim);
  };

  return (
    <section id="demo" className="py-[clamp(90px,12vw,160px)] bg-bg2">
      <div className="wrap">
        <div className="sec-tag reveal">
          <b>N.05</b> &gt; CONTEXT TRACE
        </div>

        <h2 className="display reveal">
          Inspect the pass.
          <br />
          See what <em>survives.</em>
        </h2>
        <p className="sub reveal" data-d="1">
          Run a local example through VIRO's compaction pass. Kept spans remain visible; discarded repetition is marked in the trace.
        </p>

        <div className="demo-grid grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-line border border-line mt-[64px]">
          {/* Input Pane */}
          <div className="demo-pane reveal bg-bg p-[34px]" data-d="2">
            <div className="dp-head font-mono text-[10px] tracking-[0.25em] text-dim2 flex justify-between mb-[20px]">
              <span>◈ INPUT CONTEXT</span>
              <span>PLAIN TEXT</span>
            </div>

            <textarea
              id="demoInput"
              spellCheck="false"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="w-full h-[220px] bg-panel border border-line text-white font-mono text-[13px] leading-[1.8] p-[18px] resize-none outline-none transition-[border-color] duration-300 focus:border-blue"
            />

            <div className="demo-actions flex items-center justify-between mt-[18px] gap-[14px] flex-wrap">
              <span className="tok-count font-mono text-[11px] text-dim tracking-[0.1em]">
                EST. TOKENS: <b className="text-white">{tokensIn.toLocaleString()}</b>
              </span>
              <button className="btn solid" id="optimizeBtn" onClick={handleOptimize}>
                <span className="sq" />
                <span>OPTIMIZE ▸</span>
              </button>
            </div>
          </div>

          {/* Output Pane */}
          <div className="demo-pane reveal bg-bg p-[34px]" data-d="3">
            <div className="dp-head font-mono text-[10px] tracking-[0.25em] text-dim2 flex justify-between mb-[20px]">
                <span>◈ VIRO OUTPUT</span>
              <span>COMPACTED</span>
            </div>

            <div
              className="demo-out bg-panel border border-line h-[220px] p-[18px] overflow-y-auto font-mono text-[12.5px] leading-[1.9] text-dim"
              id="demoOut"
            >
              {optimizedHtml ? (
                <div dangerouslySetInnerHTML={{ __html: optimizedHtml }} />
              ) : (
                <span className="text-dim2">// awaiting input — press COMPACT</span>
              )}
            </div>

            <div className="demo-meter mt-[20px]">
              <div className="m-lbl flex justify-between font-mono text-[10px] tracking-[0.2em] text-dim2 mb-[8px]">
                <span>CONTEXT RETAINED</span>
                <span id="mPct">{meterPct}% / 100%</span>
              </div>
              <div className="m-track h-[8px] border border-line relative overflow-hidden">
                <div
                  className="m-fill absolute inset-0 bg-[repeating-linear-gradient(90deg,var(--blue)_0_6px,transparent_6px_9px)] transition-[width] duration-1200 ease-kiro-ease"
                  style={{ width: `${meterPct}%` }}
                />
              </div>
            </div>

            <div className="demo-savings font-mono text-[clamp(28px,3vw,44px)] font-bold mt-[22px]">
              <span id="savePct">{savingsText}</span>{' '}
              <small className="text-[12px] text-dim font-normal tracking-[0.15em] ml-2" id="saveSub">
                {savingsSub}
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
