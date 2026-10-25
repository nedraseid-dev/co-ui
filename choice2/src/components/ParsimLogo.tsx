import React from 'react';

interface ParsimLogoProps {
  size?: number;
  showWordmark?: boolean;
  className?: string;
}

export const ParsimLogo: React.FC<ParsimLogoProps> = ({
  size = 24,
  showWordmark = true,
  className = '',
}) => {
  const badgeSize = Math.round(size * 1.25);

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Locked Black & White 4-3-2 Inverted Pyramid Badge (never changes in light or dark mode) */}
      <svg
        width={badgeSize}
        height={badgeSize}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
        aria-hidden="true"
      >
        {/* Pitch-black rounded square container */}
        <rect x="0" y="0" width="100" height="100" rx="22" fill="#0a0a0a" />

        {/* Row 1: 4 white squares */}
        <rect x="18" y="25.5" width="13" height="13" fill="#f5f5f5" />
        <rect x="35" y="25.5" width="13" height="13" fill="#f5f5f5" />
        <rect x="52" y="25.5" width="13" height="13" fill="#f5f5f5" />
        <rect x="69" y="25.5" width="13" height="13" fill="#f5f5f5" />

        {/* Row 2: 3 white squares */}
        <rect x="26.5" y="43.5" width="13" height="13" fill="#f5f5f5" />
        <rect x="43.5" y="43.5" width="13" height="13" fill="#f5f5f5" />
        <rect x="60.5" y="43.5" width="13" height="13" fill="#f5f5f5" />

        {/* Row 3: 2 white squares */}
        <rect x="35" y="61.5" width="13" height="13" fill="#f5f5f5" />
        <rect x="52" y="61.5" width="13" height="13" fill="#f5f5f5" />
      </svg>

      {showWordmark && (
        <span className="text-lg font-bold tracking-tight text-white">
          parsim<span className="text-[#ff3b00]">.</span>
        </span>
      )}
    </div>
  );
};