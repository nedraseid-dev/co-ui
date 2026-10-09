import React, { useEffect, useRef, useState } from 'react';

interface Token {
  x: number;
  y: number;
  speed: number;
  waste: boolean;
  glyph: string;
  size: number;
  fade: number;
  phase: number;
}

const GLYPHS = '01<>[]{}#$%&PARSIM';

export const LiveTokenStream: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [streamStat, setStreamStat] = useState('TOKENS: 0 / WASTE REMOVED: 0%');

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let tokens: Token[] = [];
    let width = 0;
    let height = 0;
    let frameCount = 0;
    let animationFrame = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      const tokenCount = Math.max(40, Math.floor(width / 9));
      tokens = Array.from({ length: tokenCount }, () => createToken(true));
    };

    const createToken = (initial: boolean): Token => ({
      x: initial ? Math.random() * width : width + 10,
      y: 14 + Math.random() * Math.max(1, height - 28),
      speed: 0.6 + Math.random() * 1.6,
      waste: Math.random() < 0.62,
      glyph: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
      size: 6 + Math.random() * 6,
      fade: 0,
      phase: Math.random() * Math.PI * 2,
    });

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const compactorX = width * 0.55;
      const isLightTheme = document.documentElement.dataset.theme === 'light';

      context.strokeStyle = 'rgba(255, 59, 0, 0.35)';
      context.setLineDash([4, 6]);
      context.beginPath();
      context.moveTo(compactorX, 0);
      context.lineTo(compactorX, height);
      context.stroke();
      context.setLineDash([]);

      context.fillStyle = '#ff3b00';
      context.font = '9px "JetBrains Mono", monospace';
      context.fillText('◈ COMPACTOR', Math.max(6, compactorX - 40), height - 8);

      let removed = 0;
      tokens.forEach((token, index) => {
        token.x -= token.speed;
        if (token.waste && token.x < compactorX) {
          token.fade = Math.min(1, token.fade + 0.05);
          removed += 1;
        }

        if (token.x < -12 || token.fade >= 1) {
          tokens[index] = createToken(false);
          return;
        }

        const jitter = Math.sin((token.phase += 0.1)) * 1.5;
        context.font = `${token.size}px "JetBrains Mono", monospace`;
        if (token.fade > 0) {
          context.fillStyle = `rgba(255, 59, 0, ${0.9 - token.fade * 0.9})`;
          context.fillText(token.glyph, token.x, token.y + token.fade * token.fade * 40 + jitter);
        } else {
          context.fillStyle = token.waste
            ? (isLightTheme ? 'rgba(110, 110, 110, 0.8)' : 'rgba(139, 144, 153, 0.8)')
            : (isLightTheme ? 'rgba(20, 20, 20, 0.92)' : 'rgba(244, 245, 247, 0.95)');
          context.fillText(token.glyph, token.x, token.y + jitter);
        }
      });

      frameCount += 1;
      if (frameCount % 6 === 0 || reducedMotion) {
        const alive = tokens.filter((token) => token.fade === 0 && token.x > 0 && token.x < width);
        setStreamStat(`TOKENS: ${(alive.length * 18341).toLocaleString()} / WASTE REMOVED: ${Math.min(99, removed)}%`);
      }

      if (!reducedMotion) animationFrame = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-sm border border-neutral-800 bg-[#0e0e0e] p-5 text-white shadow-2xl sm:p-[26px]">
      <div className="mb-4 flex flex-col justify-between gap-3 font-mono text-[10px] tracking-[0.16em] text-neutral-400 sm:flex-row sm:items-center sm:gap-5">
        <span className="text-neutral-300">◈ LIVE TOKEN STREAM — COMPACTION PASS</span>
        <span className="text-[#ff3b00] sm:text-right" aria-live="polite">{streamStat}</span>
      </div>
      <canvas
        ref={canvasRef}
        className="block h-[150px] w-full"
        aria-label="Live visualization of tokens passing through compaction"
      />
    </div>
  );
};