import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { ParsimLogo } from './ParsimLogo';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactDrawer: React.FC<ContactDrawerProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    horizon: '5M – 10M Tokens',
    models: 'DeepSeek-R1 / Reasoning CoT',
    hardware: 'NVIDIA H100 / H200 Clusters',
    notes: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-[#0e0e0e] border border-neutral-800 rounded-sm shadow-2xl p-6 sm:p-8 text-white max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white rounded hover:bg-neutral-800 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center mx-auto text-[#ff3b00]">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-semibold text-white tracking-tight">
              Inference Request Staged
            </h3>
            <p className="text-sm text-neutral-400 max-w-sm mx-auto leading-relaxed">
              Thank you, {formData.name || 'there'}. Our kernel architects will configure a custom Parsim evaluation container for {formData.company || 'your cluster'} within 2 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-5 py-2.5 bg-[#ff3b00] hover:bg-[#e03400] text-xs font-semibold rounded-sm text-black transition-colors cursor-pointer shadow-md"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2 pr-8">
              <div className="flex items-center gap-2">
                <ParsimLogo size={20} showWordmark={false} />
                <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase font-semibold">
                  · KERNEL DISPATCH INTAKE
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                Deploy Parsim on your inference cluster
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Unlock 10M+ token long-horizon reasoning and 16x KV-cache compression across your model deployments.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Dr. Elena Rostova"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#141414] border border-neutral-800 rounded-sm px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff3b00] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="elena@helixlabs.ai"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#141414] border border-neutral-800 rounded-sm px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff3b00] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                  Organization / AI Lab *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Helix Labs / Autonomous Systems"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-[#141414] border border-neutral-800 rounded-sm px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff3b00] transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                  Target Context Horizon
                </label>
                <select
                  value={formData.horizon}
                  onChange={(e) => setFormData({ ...formData, horizon: e.target.value })}
                  className="w-full bg-[#141414] border border-neutral-800 rounded-sm px-3 py-2 text-xs text-white focus:outline-none focus:border-[#ff3b00] transition-colors"
                >
                  <option value="1M – 2M Tokens">1M – 2M Tokens (Sub-quadratic baseline)</option>
                  <option value="5M – 10M Tokens">5M – 10M Tokens (Deep reasoning agents)</option>
                  <option value="10M+ Tokens">10M+ Tokens (Massive codebase indexing)</option>
                  <option value="Real-time Voice / Multimodal">Real-time Voice / Multimodal Context</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                  Frontier Model Architecture
                </label>
                <select
                  value={formData.models}
                  onChange={(e) => setFormData({ ...formData, models: e.target.value })}
                  className="w-full bg-[#141414] border border-neutral-800 rounded-sm px-3 py-2 text-xs text-white focus:outline-none focus:border-[#ff3b00] transition-colors"
                >
                  <option value="DeepSeek-R1 / Reasoning CoT">DeepSeek-R1 (671B MoE)</option>
                  <option value="Llama-3.3 70B & 405B">Llama-3.3 70B / 405B</option>
                  <option value="Qwen-2.5-Coder 32B">Qwen-2.5-Coder (32B / 72B)</option>
                  <option value="Custom Proprietary Architecture">Custom Proprietary Transformer</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                  Deployment Infrastructure
                </label>
                <select
                  value={formData.hardware}
                  onChange={(e) => setFormData({ ...formData, hardware: e.target.value })}
                  className="w-full bg-[#141414] border border-neutral-800 rounded-sm px-3 py-2 text-xs text-white focus:outline-none focus:border-[#ff3b00] transition-colors"
                >
                  <option value="NVIDIA H100 / H200 Clusters">NVIDIA H100 / H200 (FlashAttention-3)</option>
                  <option value="NVIDIA B200 / GB200 NVL72">NVIDIA B200 / GB200 NVL72</option>
                  <option value="Google Cloud TPU v5p">Google Cloud TPU v5p (Pallas)</option>
                  <option value="On-Prem Air-Gapped Supercluster">On-Prem Air-Gapped Supercluster</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                Deployment Objectives / Technical Constraints
              </label>
              <textarea
                rows={3}
                placeholder="E.g., We are serving 10M token repository reasoning agents with strict &lt;2ms per step decoding budget."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-[#141414] border border-neutral-800 rounded-sm px-3 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#ff3b00] transition-colors resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#ff3b00] hover:bg-[#e03400] text-black font-semibold text-xs py-3.5 rounded-sm transition-all duration-200 cursor-pointer shadow-lg shadow-[#ff3b00]/20"
              >
                <span>Request Benchmark Pod Access</span>
                <ArrowRight className="w-3.5 h-3.5 text-black" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
