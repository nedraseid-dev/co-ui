import React, { useState } from 'react';

export const NomineeBadge: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <aside 
      aria-label="Awards Recognition"
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center select-none"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <div 
        tabIndex={0}
        role="button"
        aria-label="Awwwards Site of the Day Nominee"
        className="group relative flex flex-col items-center bg-[#124B56] hover:bg-[#0E3D46] transition-colors rounded-l-md shadow-2xl overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#D4A359] border-l border-y border-[#A67C38]/40"
      >
        {/* Top W. box */}
        <div className="w-9 h-9 bg-[#D4A359] flex items-center justify-center font-bold text-sm text-[#18120B]">
          W.
        </div>
        {/* Vertical text */}
        <div className="py-3 px-1.5 flex items-center justify-center">
          <span 
            className="text-[11px] font-semibold text-[#FFFFFF] tracking-widest uppercase"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            Nominee
          </span>
        </div>
      </div>

      {showTooltip && (
        <div className="absolute right-12 top-1/2 -translate-y-1/2 bg-[#1C1712] border border-[#A67C38]/40 text-[#F3EFEA] font-medium text-xs px-3 py-1.5 rounded shadow-2xl whitespace-nowrap pointer-events-none animate-fadeIn">
          Awwwards Site of the Day · Nominee 2026
        </div>
      )}
    </aside>
  );
};
