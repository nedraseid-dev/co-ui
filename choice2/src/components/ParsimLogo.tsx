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
          viewBox="0 0 36 36" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="parsimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff5500" />
              <stop offset="50%" stopColor="#ff3b00" />
              <stop offset="100%" stopColor="#ff1a00" />
            </linearGradient>
            <filter id="parsimGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Glowing Ambient Core */}
          <circle cx="18" cy="18" r="15" fill="#ff3b00" fillOpacity="0.12" />

          {/* Outer compressed token diamond boundary */}
          <path 
            d="M18 3L33 18L18 33L3 18L18 3Z" 
            stroke="url(#parsimGrad)" 
            strokeWidth="1.8" 
            strokeLinejoin="round"
            filter="url(#parsimGlow)"
            className="transition-all duration-300 group-hover:stroke-white"
          />

          {/* Inner orthogonal attention vectors */}
          <path 
            d="M8 18C13 18 18 13 18 8" 
            stroke="#ff3b00" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            className="transition-colors duration-300 group-hover:stroke-[#ff7700]"
          />
          <path 
            d="M28 18C23 18 18 23 18 28" 
            stroke="#ff3b00" 
            strokeWidth="2.2" 
            strokeLinecap="round" 
            className="transition-colors duration-300 group-hover:stroke-[#ff7700]"
          />

          {/* Sub-quadratic singularity token node */}
          <rect 
            x="15" 
            y="15" 
            width="6" 
            height="6" 
            transform="rotate(45 18 18)" 
            fill="#ffffff" 
            className="transition-all duration-300 group-hover:fill-[#ff3b00]"
          />

          {/* Horizontal quantum context axis */}
          <line 
            x1="11" 
            y1="18" 
            x2="25" 
            y2="18" 
            stroke="#ffffff" 
            strokeWidth="1.2" 
            strokeLinecap="round" 
            strokeDasharray="1.5 2.5"
            className="opacity-70 group-hover:opacity-100 transition-opacity"
          />
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
