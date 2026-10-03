import React from 'react';

export const CyberNoiseBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30 select-none">
      {/* Static GPU-friendly deep orange atmospheric ambient glow */}
      <div className="absolute -top-[15%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-radial from-[#ff3b00]/12 via-[#ff3b00]/3 to-transparent blur-3xl transform-gpu" />
      <div className="absolute top-[40%] -right-[10%] w-[45vw] h-[45vw] rounded-full bg-radial from-[#ff6a00]/10 via-[#ff3b00]/2 to-transparent blur-3xl transform-gpu" />

      {/* Micro tech grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
    </div>
  );
};
