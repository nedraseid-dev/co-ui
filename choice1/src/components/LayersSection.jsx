import React, { useRef, useEffect } from 'react';

export function LayerCard({ idx, title, desc, tags, delay }) {
  const cardRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const cv = canvasRef.current;
    if (!card || !cv) return;
    const ctx = cv.getContext('2d');

    const handleResize = () => {
      cv.width = card.offsetWidth;
      cv.height = card.offsetHeight;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      ctx.clearRect(0, 0, cv.width, cv.height);
      ctx.strokeStyle = 'rgba(255,107,0,0.35)';
      for (let i = 1; i < 4; i++) {
        ctx.beginPath();
        ctx.arc(x, y, i * 22, 0, 6.29);
        ctx.stroke();
      }
      ctx.fillStyle = 'rgba(255,107,0,0.9)';
      ctx.fillRect(x - 2, y - 2, 4, 4);
    };

    const handleMouseLeave = () => {
      ctx.clearRect(0, 0, cv.width, cv.height);
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('resize', handleResize);
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="layer reveal bg-bg p-[40px_32px_48px] relative overflow-hidden min-h-[340px] flex flex-col transition-[background] duration-400 hover:bg-panel group"
      data-d={delay}
    >
      <div className="l-glow absolute -top-[60px] -right-[60px] w-[180px] h-[180px] bg-[radial-gradient(circle,rgba(255,107,0,0.35),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
      <canvas ref={canvasRef} className="lfx absolute inset-0 pointer-events-none opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
      <div className="l-idx font-mono text-[10px] text-dim2 tracking-[0.3em]">{idx}</div>
      <h3 className="text-[24px] font-medium my-[70px_14px]">{title}</h3>
      <p className="text-dim text-[13px] leading-[1.75] flex-1">{desc}</p>
      <div className="l-tags flex gap-[8px] flex-wrap mt-[26px]">
        {tags.map((tag, i) => (
          <i key={i} className="not-italic font-mono text-[9px] tracking-[0.15em] text-dim border border-line p-[5px_10px]">
            {tag}
          </i>
        ))}
      </div>
    </div>
  );
}

export default function LayersSection() {
  return (
    <section id="layers" className="py-[clamp(90px,12vw,160px)]">
      <div className="wrap">
        <div className="sec-tag reveal">
          <b>N.03</b> &gt; CORE CAPABILITIES
        </div>

        <h2 className="display reveal">
          Three layers.
          <br />
          One <em>seamless</em> system.
        </h2>

        <div className="layers-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-line border border-line mt-[64px]">
          <LayerCard
            idx="LAYER //001"
            title="Semantic Compaction"
            desc="Lossy where it should be, lossless where it counts. Kiro compresses repetitive context up to 12× while keeping decision-critical spans byte-exact and retrievable on demand."
            tags={['12× COMPRESSION', 'FAITHFUL RECALL', 'ON-DEMAND SPAN FETCH']}
            delay="1"
          />
          <LayerCard
            idx="LAYER //002"
            title="Attention Budgeting"
            desc="A live allocator that prices attention across the full horizon. Critical memory gets prime positions; filler gets summarized, demoted or dropped — before it ever hits the model."
            tags={['HORIZON-AWARE', 'REAL-TIME ALLOCATION', 'MODEL-AGNOSTIC']}
            delay="2"
          />
          <LayerCard
            idx="LAYER //003"
            title="Tiered Memory Fabric"
            desc="Hot, warm and cold memory tiers with automatic promotion. Agents recall anything from 4M tokens of history at near-hot latency — without carrying it all in the prompt."
            tags={['4M HORIZON', 'AUTO-PROMOTION', '<40MS RECALL']}
            delay="3"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mt-[60px] under-layers">
          <div className="reveal" data-d="1">
            <h4 className="font-mono text-[12px] tracking-[0.25em] mb-[12px]">◈ PLUGS INTO YOUR STACK</h4>
            <p className="text-dim text-[13px] leading-[1.75]">
              One-line middleware for any provider — OpenAI, Anthropic, Gemini, or your own weights. No retraining. No lock-in.
            </p>
          </div>
          <div className="reveal" data-d="2">
            <h4 className="font-mono text-[12px] tracking-[0.25em] mb-[12px]">◈ MINIMAL BY DEFAULT</h4>
            <p className="text-dim text-[13px] leading-[1.75]">
              Drop-in SDK with sane defaults. Spend five minutes integrating, then tune budgets only if you want to.
            </p>
          </div>
          <div className="reveal" data-d="3">
            <h4 className="font-mono text-[12px] tracking-[0.25em] mb-[12px]">◈ BUILT TO SCALE</h4>
            <p className="text-dim text-[13px] leading-[1.75]">
              From a single agent notebook to fleets of 10,000 concurrent sessions. Stateless core, horizontal by design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
