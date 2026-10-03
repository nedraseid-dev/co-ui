import React, { useEffect, useState, useRef } from 'react';

interface TextScrambleProps {
  text: string;
  className?: string;
  scrambleSpeed?: number;
  trigger?: boolean;
}

const GLYPHS = '01#%*+=-/<>_[]{}~XYZΩ⚡µ∆§';

export const TextScramble: React.FC<TextScrambleProps> = ({
  text,
  className = '',
  scrambleSpeed = 35,
  trigger = true,
}) => {
  const [displayText, setDisplayText] = useState(text);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!trigger) {
      setDisplayText(text);
      return;
    }

    let iteration = 0;
    const maxIterations = text.length;

    const interval = setInterval(() => {
      setDisplayText(() =>
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) {
              return text[index];
            }
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join('')
      );

      if (iteration >= maxIterations) {
        clearInterval(interval);
      }

      iteration += 1 / 2;
    }, scrambleSpeed);

    return () => {
      clearInterval(interval);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [text, scrambleSpeed, trigger]);

  return <span className={className}>{displayText}</span>;
};
