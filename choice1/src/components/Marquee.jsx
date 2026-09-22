import React from 'react';

export default function Marquee({ items, reverse = false }) {
  // Duplicate array so it scrolls seamlessly
  const fullItems = [...items, ...items];

  return (
    <div className={`marquee ${reverse ? 'rev' : ''}`}>
      <div className="track">
        {fullItems.map((item, idx) => {
          const isHl = idx % 2 === 1;
          return (
            <span key={idx} className={`item ${isHl ? 'hl' : ''}`}>
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
