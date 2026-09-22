import React, { useEffect, useState } from 'react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    let p = 0;
    const timer = setInterval(() => {
      p = Math.min(100, p + Math.random() * 14 + 4);
      setProgress(p);

      if (p >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          setIsDone(true);
        }, 350);
      }
    }, 120);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      id="loader"
      className={`fixed inset-0 bg-bg z-[5000] flex flex-col items-center justify-center gap-7 transition-all duration-700 ease-kiro-ease ${
        isDone ? 'opacity-0 invisible' : 'opacity-100 visible'
      }`}
    >
      <svg className="w-[72px] h-[72px]" viewBox="0 0 38 38">
        <use href="#kiro-mark" fill="#fff" />
      </svg>
      <div className="w-[220px] h-[2px] bg-line relative overflow-hidden">
        <i
          className="absolute left-0 top-0 h-full bg-blue block transition-[width] duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="font-mono text-[11px] tracking-[0.35em] text-dim">
        CALIBRATING CONTEXT <span className="font-mono text-[11px] text-blue-2">{Math.floor(progress)}%</span>
      </div>
    </div>
  );
}
