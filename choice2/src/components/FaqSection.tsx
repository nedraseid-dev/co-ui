import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: 'What types of businesses do you work with?',
    answer: 'We partner with businesses of all sizes across engineering, logistics, finance, and professional services, helping teams identify practical AI opportunities and implement robust systems that improve everyday operations.',
  },
  {
    question: 'Do we need existing AI experience or infrastructure?',
    answer: 'Not at all. We assess your existing software stack and operations to build solutions that integrate seamlessly with your current tools and workflows, requiring zero prompt engineering on your side.',
  },
  {
    question: 'What does "Token Automation for Long Horizons" mean?',
    answer: 'Standard LLM apps break when tasks take more than 10 minutes or exceed 100k tokens because memory degrades and costs explode. Parsim implements continuous checkpointing, hierarchical working memory, and token budget pruning so tasks can run autonomously for days without drift.',
  },
  {
    question: 'How long does an implementation project typically take?',
    answer: 'Our initial discovery and roadmap sprint takes 2 to 4 weeks. Full custom production agent deployments typically launch within 6 to 8 weeks, complete with safety guardrails and regression suites.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="scroll-mt-20 border-y border-neutral-900 bg-[#080808] px-6 py-16 text-white sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
          <span className="mb-3 inline-block font-mono text-[11px] uppercase tracking-[0.12em] text-[#ff3b00]">
            Clear answers
          </span>
          <h2 className="mb-4 text-3xl font-medium leading-tight tracking-tight text-neutral-100 sm:text-4xl lg:text-5xl">
            Frequently Asked <span className="text-[#ff3b00]">Questions</span>
          </h2>
          <p className="text-sm leading-relaxed text-neutral-400 sm:text-base">
            Find answers to common questions about Parsim&apos;s token automation services, architecture, and how we help teams adopt AI safely.
          </p>
        </header>

        <div className="mx-auto flex max-w-3xl flex-col gap-3">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index + 1}`;

            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-md border bg-[#0e0e0e] transition-colors ${isOpen ? 'border-[#ff3b00]/50' : 'border-neutral-800 hover:border-neutral-600'}`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex min-h-14 w-full items-center justify-between gap-4 px-4 py-4 text-left text-sm font-medium text-neutral-100 sm:px-6 sm:text-base"
                >
                  <span>{item.question}</span>
                  <ChevronDown className={`h-4 w-4 shrink-0 text-[#ff3b00] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                <div
                  id={answerId}
                  role="region"
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-4 pb-5 text-sm leading-relaxed text-neutral-400 sm:px-6 sm:pb-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};