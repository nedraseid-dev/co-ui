import React from 'react';

interface ParsimLogoProps {
  className?: string;
  size?: number;
  showWordmark?: boolean;
}

export const ParsimLogo: React.FC<ParsimLogoProps> = ({ 
  className = '', 
  size = 28, 
  showWordmark = true 
}) => {
  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Geometric Parsim Quantum Token Glyph */}
      <div 
        className="relative flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          <rect x="1" y="1" width="62" height="62" rx="10" fill="#08080b" stroke="#242429" strokeWidth="1.5" />
          <g fill="#f5f5f5">
            <rect x="13" y="16" width="8" height="8" />
            <rect x="23" y="16" width="8" height="8" />
            <rect x="33" y="16" width="8" height="8" />
            <rect x="43" y="16" width="8" height="8" />
            <rect x="18" y="28" width="8" height="8" />
            <rect x="28" y="28" width="8" height="8" />
            <rect x="38" y="28" width="8" height="8" />
            <rect x="23" y="40" width="8" height="8" />
            <rect x="33" y="40" width="8" height="8" />
          </g>
        </svg>
      </div>

      {showWordmark && (
        <div className="flex items-baseline">
          <span className="font-sans font-bold tracking-tight text-white text-[21px] lowercase transition-colors">
            parsim
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff3b00] ml-0.5 group-hover:animate-ping" />
        </div>
      )}
    </div>
  );
};
