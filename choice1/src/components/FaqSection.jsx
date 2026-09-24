import React, { useState } from 'react';

const FAQS = [
  {
    num: '//01',
    q: 'Does compaction hurt model accuracy?',
    a: 'No — when it\'s done selectively. parsim keeps decision-critical spans verbatim and only compresses redundant or low-salience content. In representative long-horizon runs, task success stays aligned with the full-context baseline while using fewer tokens.',
    delay: '1',
  },
  {
    num: '//02',
    q: 'Which models and providers are supported?',
    a: 'All of them, transparently. parsim sits between your application and any provider. It is a middleware layer, not a model, so nothing about your stack needs to change.',
    delay: '1',
  },
  {
    num: '//03',
    q: 'How does the memory fabric recall old context?',
    a: 'Everything is indexed into hot, warm and cold tiers. When a task needs something old, parsim fetches the exact spans, promoted to active context on demand. Your agent keeps continuity without replaying the entire session.',
    delay: '2',
  },
  {
    num: '//04',
    q: 'Can I control what gets compressed?',
    a: 'Yes. Pin critical spans losslessly with one line, set per-agent budget policies, and audit every compaction decision in the trace viewer. Defaults are safe; control is total.',
    delay: '2',
  },
  {
    num: '//05',
    q: 'Is my data used for training?',
    a: 'Never. All compaction runs in a stateless inference path. Enterprise plans add zero-retention guarantees, regional pinning and full audit exports.',
    delay: '3',
  },
];

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className={`faq-item border-b border-line ${isOpen ? 'open' : ''}`}>
      <button
        type="button"
        className="faq-q w-full bg-none border-0 text-white flex justify-between items-center gap-[20px] py-[28px] text-left font-display text-[clamp(17px,2vw,22px)] font-medium transition-colors duration-300 hover:text-[#FF6B00]"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="flex items-center">
          <span className="fi font-mono text-[10px] text-dim2 tracking-[0.2em] mr-[18px]">{item.num}</span>
          {item.q}
        </span>
        <span className="plus w-[14px] h-[14px] relative flex-none" />
      </button>
      <div
        className="faq-a overflow-hidden transition-[max-height] duration-550 ease-kiro-ease"
        style={{
          maxHeight: isOpen ? '500px' : '0px',
        }}
      >
        <p className="text-dim text-[14px] leading-[1.8] max-w-[720px] pb-[30px]">{item.a}</p>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="faq" className="py-[clamp(90px,12vw,160px)]">
      <div className="wrap">
        <div className="sec-tag reveal">
          <b>N.06</b> &gt; FAQ
        </div>

        <h2 className="display reveal">
          Technical
          <br />
          <em>answers.</em>
        </h2>

        <div className="faq-list mt-[64px] border-t border-line">
          {FAQS.map((faq, idx) => (
            <FaqItem
              key={idx}
              item={faq}
              isOpen={openIndex === idx}
              onToggle={() => toggleIndex(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
