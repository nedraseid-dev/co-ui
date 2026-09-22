import React from 'react';

export default function VoicesSection() {
  return (
    <section id="voices" className="py-[clamp(90px,12vw,160px)] bg-bg2 overflow-hidden">
      <div className="wrap">
        <div className="sec-tag reveal">
          <b>N.06</b> &gt; FIELD REPORTS
        </div>

        <h2 className="display reveal">
          Less spend,
          <br />
          more <span className="blue-word">shipping.</span>
        </h2>

        <div className="voice-grid grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-line border border-line mt-[64px]">
          <div className="voice reveal bg-bg p-[36px_30px]" data-d="1">
            <div className="v-mark font-mono text-blue text-[20px]">◈</div>
            <p className="text-dim text-[14px] leading-[1.8] my-[18px_28px]">
              "Our research agents used to hit the context ceiling after three days of work. With Kiro they run for{' '}
              <b className="text-white font-medium">three weeks</b> on the same budget — and the summaries are honestly
              better than the raw logs."
            </p>
            <div className="v-who flex items-center gap-[12px]">
              <div className="v-av w-[36px] h-[36px] font-mono text-[12px] grid place-items-center bg-panel border border-line2 text-blue-2">
                MC
              </div>
              <div>
                <div className="v-name text-[13px]">Mara Chen</div>
                <div className="v-role font-mono text-[9px] tracking-[0.2em] text-dim2 mt-[3px]">
                  HEAD OF AI — NORTHWIND LABS
                </div>
              </div>
            </div>
          </div>

          <div className="voice reveal bg-bg p-[36px_30px]" data-d="2">
            <div className="v-mark font-mono text-blue text-[20px]">◈</div>
            <p className="text-dim text-[14px] leading-[1.8] my-[18px_28px]">
              "We plugged Kiro into our support pipeline on a Tuesday. By Friday our token bill had dropped{' '}
              <b className="text-white font-medium">71%</b> and resolution quality went <i>up</i>. I still don't fully
              believe the dashboard."
            </p>
            <div className="v-who flex items-center gap-[12px]">
              <div className="v-av w-[36px] h-[36px] font-mono text-[12px] grid place-items-center bg-panel border border-line2 text-blue-2">
                DO
              </div>
              <div>
                <div className="v-name text-[13px]">David Okafor</div>
                <div className="v-role font-mono text-[9px] tracking-[0.2em] text-dim2 mt-[3px]">
                  CTO — LOOPSTACK
                </div>
              </div>
            </div>
          </div>

          <div className="voice reveal bg-bg p-[36px_30px]" data-d="3">
            <div className="v-mark font-mono text-blue text-[20px]">◈</div>
            <p className="text-dim text-[14px] leading-[1.8] my-[18px_28px]">
              "Attention budgeting is the part nobody else does. Kiro treats context like{' '}
              <b className="text-white font-medium">memory, not a landfill</b>. Our coding agents stopped forgetting the
              architecture decisions from sprint one."
            </p>
            <div className="v-who flex items-center gap-[12px]">
              <div className="v-av w-[36px] h-[36px] font-mono text-[12px] grid place-items-center bg-panel border border-line2 text-blue-2">
                SK
              </div>
              <div>
                <div className="v-name text-[13px]">Sofia Katz</div>
                <div className="v-role font-mono text-[9px] tracking-[0.2em] text-dim2 mt-[3px]">
                  STAFF ENGINEER — PARALLAX
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
