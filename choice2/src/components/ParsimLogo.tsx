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
          <g fill="#f4f5f7" transform="translate(8 14) scale(1.15)">
            <rect x="4" y="2" width="7" height="7" />
            <rect x="13" y="2" width="7" height="7" />
            <rect x="22" y="2" width="7" height="7" />
            <rect x="31" y="2" width="7" height="7" />
            <rect x="8" y="12" width="7" height="7" />
            <rect x="17" y="12" width="7" height="7" />
            <rect x="26" y="12" width="7" height="7" />
            <rect x="13" y="22" width="7" height="7" />
            <rect x="22" y="22" width="7" height="7" />
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
