import React, { useState } from 'react';

const lerp = (a, b, t) => a + (b - a) * t;

export default function PricingSection() {
  const [billingMode, setBillingMode] = useState('m'); // 'm' or 'y'
  const [prices, setPrices] = useState({ starter: 0, pro: 29, scale: 199 });

  const handleToggle = (mode) => {
    if (mode === billingMode) return;
    setBillingMode(mode);

    const targetPro = mode === 'y' ? 23 : 29;
    const targetScale = mode === 'y' ? 159 : 199;
    const fromPro = prices.pro;
    const fromScale = prices.scale;
    const t0 = performance.now();

    function tick(now) {
      const p = Math.min(1, (now - t0) / 400);
      const ease = 1 - Math.pow(1 - p, 3);
      setPrices({
        starter: 0,
        pro: Math.round(lerp(fromPro, targetPro, ease)),
        scale: Math.round(lerp(fromScale, targetScale, ease)),
      });

      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        setPrices({ starter: 0, pro: targetPro, scale: targetScale });
      }
    }

    requestAnimationFrame(tick);
  };

  return (
    <section id="pricing" className="py-[clamp(90px,12vw,160px)]">
      <div className="wrap">
        <div className="sec-tag reveal">
          <b>N.07</b> &gt; PRICING
        </div>

        <h2 className="display reveal">
          Simple pricing.
          <br />
          Pay for <em>tokens saved.</em>
        </h2>

        <div className="bill-toggle reveal inline-flex border border-line2 font-mono text-[10px] tracking-[0.2em] mt-[44px]" data-d="1">
          <button
            type="button"
            className={`p-[12px_22px] bg-transparent border-0 tracking-inherit transition-colors duration-300 ${
              billingMode === 'm' ? 'bg-white text-black font-medium' : 'text-dim'
            }`}
            onClick={() => handleToggle('m')}
          >
            MONTHLY
          </button>
          <button
            type="button"
            className={`p-[12px_22px] bg-transparent border-0 tracking-inherit transition-colors duration-300 ${
              billingMode === 'y' ? 'bg-white text-black font-medium' : 'text-dim'
            }`}
            onClick={() => handleToggle('y')}
          >
            ANNUALLY <span className="text-blue-2">-20%</span>
          </button>
        </div>

        <div className="price-grid grid grid-cols-1 lg:grid-cols-3 gap-[1px] bg-line border border-line mt-[36px]">
          {/* Starter */}
          <div className="tier reveal bg-bg p-[44px_36px_48px] relative flex flex-col transition-[background] duration-400 hover:bg-panel" data-d="1">
            <h3 className="text-[15px] font-mono tracking-[0.2em] text-dim">// STARTER</h3>
            <div className="price font-mono text-[clamp(38px,4vw,56px)] font-bold my-[26px_4px]">
              ${prices.starter}
              <small className="text-[12px] text-dim font-normal">/mo</small>
            </div>
            <div className="t-desc text-dim2 text-[12px] font-mono tracking-[0.05em]">
              For solo builders testing long-horizon agents
            </div>
            <ul className="list-none my-[34px_38px] flex-1">
              <li className="text-[13px] text-dim p-[9px_0_9px_22px] relative border-b border-dashed border-line before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-[8px] before:h-[8px] before:bg-blue">
                1M token horizon
              </li>
              <li className="text-[13px] text-dim p-[9px_0_9px_22px] relative border-b border-dashed border-line before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-[8px] before:h-[8px] before:bg-blue">
                Semantic compaction core
              </li>
              <li className="text-[13px] text-dim p-[9px_0_9px_22px] relative border-b border-dashed border-line before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-[8px] before:h-[8px] before:bg-blue">
                2 active agents
              </li>
              <li className="text-[13px] text-dim p-[9px_0_9px_22px] relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-[8px] before:h-[8px] before:bg-blue">
                Community support
              </li>
            </ul>
            <a className="btn" href="#cta">
              <span>START FREE</span>
            </a>
          </div>

          {/* Pro (Featured) */}
          <div className="tier featured reveal bg-panel outline outline-1 outline-blue -outline-offset-1 z-[1] p-[44px_36px_48px] relative flex flex-col transition-[background] duration-400" data-d="2">
            <div className="t-badge absolute top-0 right-0 bg-blue text-white font-mono text-[9px] tracking-[0.25em] p-[7px_14px]">
              MOST POPULAR
            </div>
            <h3 className="text-[15px] font-mono tracking-[0.2em] text-dim">// PRO</h3>
            <div className="price font-mono text-[clamp(38px,4vw,56px)] font-bold my-[26px_4px]">
              ${prices.pro}
              <small className="text-[12px] text-dim font-normal">/mo</small>
            </div>
            <div className="t-desc text-dim2 text-[12px] font-mono tracking-[0.05em]">
              For teams shipping agents to production
            </div>
            <ul className="list-none my-[34px_38px] flex-1">
              <li className="text-[13px] text-dim p-[9px_0_9px_22px] relative border-b border-dashed border-line before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-[8px] before:h-[8px] before:bg-blue">
                4M token horizon
              </li>
              <li className="text-[13px] text-dim p-[9px_0_9px_22px] relative border-b border-dashed border-line before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-[8px] before:h-[8px] before:bg-blue">
                Attention budgeting engine
              </li>
              <li className="text-[13px] text-dim p-[9px_0_9px_22px] relative border-b border-dashed border-line before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-[8px] before:h-[8px] before:bg-blue">
                Tiered memory fabric
              </li>
              <li className="text-[13px] text-dim p-[9px_0_9px_22px] relative border-b border-dashed border-line before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-[8px] before:h-[8px] before:bg-blue">
                50 active agents
              </li>
              <li className="text-[13px] text-dim p-[9px_0_9px_22px] relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-[8px] before:h-[8px] before:bg-blue">
                Usage analytics + alerts
              </li>
            </ul>
            <a className="btn solid" href="#cta">
              <span className="sq" />
              <span>GET PRO</span>
            </a>
          </div>

          {/* Scale */}
          <div className="tier reveal bg-bg p-[44px_36px_48px] relative flex flex-col transition-[background] duration-400 hover:bg-panel" data-d="3">
            <h3 className="text-[15px] font-mono tracking-[0.2em] text-dim">// SCALE</h3>
            <div className="price font-mono text-[clamp(38px,4vw,56px)] font-bold my-[26px_4px]">
              ${prices.scale}
              <small className="text-[12px] text-dim font-normal">/mo</small>
            </div>
            <div className="t-desc text-dim2 text-[12px] font-mono tracking-[0.05em]">
              For fleets and enterprise horizons
            </div>
            <ul className="list-none my-[34px_38px] flex-1">
              <li className="text-[13px] text-dim p-[9px_0_9px_22px] relative border-b border-dashed border-line before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-[8px] before:h-[8px] before:bg-blue">
                Unlimited horizon
              </li>
              <li className="text-[13px] text-dim p-[9px_0_9px_22px] relative border-b border-dashed border-line before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-[8px] before:h-[8px] before:bg-blue">
                Custom compaction policies
              </li>
              <li className="text-[13px] text-dim p-[9px_0_9px_22px] relative border-b border-dashed border-line before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-[8px] before:h-[8px] before:bg-blue">
                SSO, audit logs, SLA
              </li>
              <li className="text-[13px] text-dim p-[9px_0_9px_22px] relative border-b border-dashed border-line before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-[8px] before:h-[8px] before:bg-blue">
                Dedicated inference lane
              </li>
              <li className="text-[13px] text-dim p-[9px_0_9px_22px] relative before:content-[''] before:absolute before:left-0 before:top-[15px] before:w-[8px] before:h-[8px] before:bg-blue">
                Priority support
              </li>
            </ul>
            <a className="btn" href="#cta">
              <span>TALK TO US</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
