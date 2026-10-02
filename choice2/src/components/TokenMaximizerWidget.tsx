import React, { useState } from 'react';
import { Zap, Database, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';

export const TokenMaximizerWidget: React.FC = () => {
  const [horizonTokens, setHorizonTokens] = useState<number>(5000000); // 5M tokens default
  const [selectedModel, setSelectedModel] = useState<'deepseek-r1' | 'llama-70b' | 'claude-reason'>('deepseek-r1');

  // Mathematical compression curves based on horizon
  const horizonMillions = horizonTokens / 1000000;
  
  // Standard KV cache VRAM calculation
  const baseVramPerMillion = selectedModel === 'deepseek-r1' ? 96 : selectedModel === 'llama-70b' ? 72 : 88;
  const standardVram = Math.round(horizonMillions * baseVramPerMillion);
  
  // Parsim compressed VRAM
  const parsimVram = Math.max(12, Math.round(standardVram / 16.4));
  const memorySavedPercent = Math.round(((standardVram - parsimVram) / standardVram) * 100);
  
  // Cost calculations
  const standardCost = (horizonMillions * 24.5).toFixed(1);
  const parsimCost = (horizonMillions * 2.1).toFixed(1);

  return (
    <div className="bg-[#0e0e0e] border border-neutral-800 rounded-sm p-6 sm:p-8 space-y-8 shadow-2xl relative overflow-hidden text-white">
      
      {/* Background ambient orange glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#ff3b00]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-neutral-400 font-semibold uppercase">
            <span className="text-[#ff3b00] text-sm">·</span>
            <span>INTERACTIVE COMPUTATIONAL BENCHMARK</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mt-1">
            Token Maximization &amp; KV-Cache Reducer
          </h3>
        </div>

        {/* Model Architecture Switcher */}
        <div className="flex items-center gap-1.5 p-1 bg-[#141414] border border-neutral-800 rounded-sm text-xs font-mono">
          <button
            onClick={() => setSelectedModel('deepseek-r1')}
            className={`px-3 py-1.5 rounded-sm transition-all cursor-pointer ${
              selectedModel === 'deepseek-r1'
                ? 'bg-[#ff3b00] text-black font-semibold shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            DeepSeek-R1
          </button>
          <button
            onClick={() => setSelectedModel('llama-70b')}
            className={`px-3 py-1.5 rounded-sm transition-all cursor-pointer ${
              selectedModel === 'llama-70b'
                ? 'bg-[#ff3b00] text-black font-semibold shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Llama-3.3 70B
          </button>
          <button
            onClick={() => setSelectedModel('claude-reason')}
            className={`px-3 py-1.5 rounded-sm transition-all cursor-pointer ${
              selectedModel === 'claude-reason'
                ? 'bg-[#ff3b00] text-black font-semibold shadow-md'
                : 'text-neutral-400 hover:text-white'
            }`}
          >
            Claude 3.7 CoT
          </button>
        </div>
      </div>

      {/* Context Length Slider */}
      <div className="space-y-3">
        <div className="flex items-center justify-between font-mono text-xs">
          <span className="text-neutral-400 font-medium uppercase tracking-wider flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-[#ff3b00]" />
            Active Horizon Length
          </span>
          <span className="text-white font-semibold text-sm bg-[#141414] border border-neutral-800 px-3 py-1 rounded-sm tabular-nums">
            {(horizonTokens / 1000000).toFixed(1)}M Tokens ({horizonTokens.toLocaleString()} tokens)
          </span>
        </div>

        <input
          type="range"
          min="500000"
          max="10000000"
          step="500000"
          value={horizonTokens}
          onChange={(e) => setHorizonTokens(Number(e.target.value))}
          className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#ff3b00]"
        />

        <div className="flex justify-between text-[10px] font-mono text-neutral-500 pt-1">
          <span>500K Tokens</span>
          <span>2.5M Tokens</span>
          <span>5M Tokens (Deep CoT)</span>
          <span>7.5M Tokens</span>
          <span>10M+ Tokens</span>
        </div>
      </div>

      {/* Metric Cards Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Metric 1: KV Cache Memory */}
        <div className="bg-[#141414] border border-neutral-800/80 p-5 rounded-sm space-y-3 shadow-lg">
          <div className="flex items-center justify-between text-neutral-400">
            <span className="text-[11px] font-mono tracking-wider uppercase font-semibold">KV-Cache VRAM</span>
            <Database className="w-4 h-4 text-[#ff3b00]" />
          </div>

          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-white tabular-nums">{parsimVram}</span>
              <span className="text-xs text-[#ff3b00] font-mono">GB (Parsim)</span>
            </div>
            <div className="text-[11px] text-neutral-500 line-through tabular-nums">
              {standardVram} GB (Standard Uncompressed)
            </div>
          </div>

          <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-[#ff3b00]">
            <span className="text-neutral-400">MEM SAVED</span>
            <span className="font-semibold">-{memorySavedPercent}% HBM</span>
          </div>
        </div>

        {/* Metric 2: Decoding Throughput */}
        <div className="bg-[#141414] border border-neutral-800/80 p-5 rounded-sm space-y-3 shadow-lg">
          <div className="flex items-center justify-between text-neutral-400">
            <span className="text-[11px] font-mono tracking-wider uppercase font-semibold">Decoding Throughput</span>
            <Zap className="w-4 h-4 text-[#ff3b00]" />
          </div>

          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-white tabular-nums">4.8x</span>
              <span className="text-xs text-[#ff3b00] font-mono">Tokens/Sec</span>
            </div>
            <div className="text-[11px] text-neutral-400">
              Zero memory bandwidth stall at deep horizons
            </div>
          </div>

          <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-white">
            <span className="text-neutral-400">P95 LATENCY</span>
            <span className="font-semibold text-[#ff3b00]">1.4 ms/step</span>
          </div>
        </div>

        {/* Metric 3: Horizon Inference Cost */}
        <div className="bg-[#141414] border border-neutral-800/80 p-5 rounded-sm space-y-3 shadow-lg">
          <div className="flex items-center justify-between text-neutral-400">
            <span className="text-[11px] font-mono tracking-wider uppercase font-semibold">Compute Cost / Run</span>
            <TrendingUp className="w-4 h-4 text-[#ff3b00]" />
          </div>

          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-white tabular-nums">${parsimCost}</span>
              <span className="text-xs text-[#ff3b00] font-mono">/ Horizon Run</span>
            </div>
            <div className="text-[11px] text-neutral-500 line-through tabular-nums">
              ${standardCost} / Run (Unoptimized)
            </div>
          </div>

          <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-[#ff3b00]">
            <span className="text-neutral-400">COST YIELD</span>
            <span className="font-semibold">91.4% REDUCTION</span>
          </div>
        </div>

      </div>

      {/* Visual Attention Tensor Grid Simulation */}
      <div className="bg-[#141414] border border-neutral-800/80 p-4 rounded-sm space-y-3">
        <div className="flex items-center justify-between text-[11px] font-mono text-neutral-400">
          <span>PARSIM ADAPTIVE ATTENTION PROJECTION MAP (10M HORIZON)</span>
          <span className="text-[#ff3b00] font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#ff3b00]" />
            100% NEEDLE RETRIEVAL
          </span>
        </div>

        {/* Matrix cells simulating multi-head attention compression with Safety Orange */}
        <div className="grid grid-cols-16 sm:grid-cols-32 gap-1 h-12 overflow-hidden py-1">
          {Array.from({ length: 64 }).map((_, i) => {
            const isCriticalPriors = i < 4 || i === 23 || i === 42 || i > 58;
            return (
              <div
                key={i}
                title={isCriticalPriors ? "Lossless Anchor Token" : "Sub-quadratic Compressed Latent Block"}
                className={`h-full rounded-[1px] transition-all duration-300 ${
                  isCriticalPriors
                    ? 'bg-[#ff3b00] opacity-100 shadow-[0_0_8px_#ff3b00]'
                    : i % 3 === 0 
                      ? 'bg-[#ff7700] opacity-60' 
                      : 'bg-neutral-900 opacity-40'
                }`}
              />
            );
          })}
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pt-1">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#ff3b00] inline-block shadow-[0_0_4px_#ff3b00]" />
            <span className="text-white font-medium">Exact Semantic Anchors</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#ff7700] inline-block" />
            <span>Subspace Compressed Latents (16x)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-neutral-900 inline-block border border-neutral-700" />
            <span>Pruned Redundancy</span>
          </div>
        </div>
      </div>

    </div>
  );
};
