import { TestimonialItem, NewsItem, CapabilitySection } from '../types';

import heroImg from '../assets/images/hero_token_matrix_1790692674952.jpg';
import kvCacheImg from '../assets/images/capabilities_kv_cache_1790692687588.jpg';
import longHorizonImg from '../assets/images/capabilities_long_horizon_1790692700317.jpg';
import chipImg from '../assets/images/news_benchmark_chip_1790692711952.jpg';
import blueprintsImg from '../assets/images/news_blueprints_1790690559803.jpg';
import avatarElenaImg from '../assets/images/avatar_elena_1790690641253.jpg';

export const ASSETS = {
  hero: heroImg,
  kvCache: kvCacheImg,
  longHorizon: longHorizonImg,
  chip: chipImg,
  blueprints: blueprintsImg,
  avatarElena: avatarElenaImg,
};

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'elena-rostova',
    index: '01 / 03',
    name: 'Dr. Elena Rostova',
    role: 'Head of Inference Architecture',
    company: 'HELIX LABS',
    companyLogoText: 'HELIX LABS',
    avatar: avatarElenaImg,
    scope: '10M TOKEN RUNS',
    deployed: '16.4X FACTOR',
    since: '2024',
    quote: '“We reviewed every credible token optimization and context extension system in the industry. Parsim’s sub-quadratic kernel was the only one that preserved deep multi-step reasoning past 5 million tokens while slashing KV memory 85%. This is poised to become the new standard for compute in America.”',
    highlightPhrase: 'the new standard for compute in America.',
  },
  {
    id: 'marcus-vance',
    index: '02 / 03',
    name: 'Marcus Vance',
    role: 'Principal Agent Systems Engineer',
    company: 'ANTHROPOS CORE',
    companyLogoText: 'ANTHROPOS',
    avatar: avatarElenaImg,
    scope: 'AUTONOMOUS REPO-AGENT',
    deployed: '8.2M TOKENS',
    since: '2025',
    quote: '“Autonomous coding agents running across 100,000 steps normally suffer catastrophic context collapse. Parsim locks critical system prompt priors and needle tokens into compressed latent space with 100% deterministic recall.”',
    highlightPhrase: 'with 100% deterministic recall.',
  },
  {
    id: 'sarah-chen',
    index: '03 / 03',
    name: 'Sarah Chen, Ph.D.',
    role: 'Chief AI Infrastructure Architect',
    company: 'MERIDIAN COMPUTE',
    companyLogoText: 'MERIDIAN',
    avatar: avatarElenaImg,
    scope: 'FLASH ATTENTION v4',
    deployed: '42.8T TOKENS',
    since: '2025',
    quote: '“When serving frontier reasoning models, memory bandwidth is the single bottleneck choking throughput. Parsim unlocked 4.8x higher decoding speed by eliminating redundant KV heads before tensors hit memory buses.”',
    highlightPhrase: 'eliminating redundant KV heads before tensors hit memory buses.',
  },
];

export const CAPABILITIES: CapabilitySection[] = [
  {
    id: 'long-horizon-agents',
    label: 'LONG-HORIZON AGENTS',
    title: 'Infinite reasoning chains without memory collapse.',
    description: 'Measured on 10M+ token traces, not synthetic toy datasets. Pristine multi-turn coherence across millions of agentic decision steps.',
    metricLabel: 'TESTED HORIZON DEPTH',
    metricValue: '10.2M TOKENS',
    image: longHorizonImg,
  },
  {
    id: 'kv-cache-compression',
    label: 'KV-CACHE COMPRESSION',
    title: 'Sub-quadratic tensor memory at bare-metal line rate.',
    description: 'Dynamic singular subspace projection freeing up to 88% of high-bandwidth GPU memory without perplexity degradation.',
    metricLabel: 'MEMORY REDUCTION',
    metricValue: '16.4X COMPRESS',
    image: kvCacheImg,
  },
  {
    id: 'token-maximization',
    label: 'TOKEN MAXIMIZATION',
    title: 'Deterministic semantic density per inference dollar.',
    description: 'Transforming raw prompt bloat and verbose reasoning trees into compact latent structures with zero loss of reasoning acuity.',
    metricLabel: 'THROUGHPUT MULTIPLIER',
    metricValue: '4.8X DECODE',
    image: chipImg,
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'benchmark-10m',
    type: 'featured',
    category: 'DEAL',
    date: '24 APR 2026',
    title: 'Parsim and Helix Labs demonstrate lossless 10-million token reasoning on commodity clusters.',
    image: chipImg,
    readTime: '4 min read',
    excerpt: 'Frontier AI models sustain unbroken mathematical proofs and complex repository debugging across 10M tokens using Parsim sub-quadratic attention kernels.',
    fullContent: 'Parsim Technologies and Helix Labs today published definitive empirical benchmarks evaluating long-horizon autonomous agents across 10,000,000 active tokens. Running on standard H100 clusters, Parsim achieved 100% needle-in-a-haystack retrieval and unbroken multi-step logic while slashing memory footprints by 16.4x.',
  },
  {
    id: 'funding-series-a',
    type: 'featured',
    category: 'FINANCE',
    date: '21 APR 2026',
    title: 'Parsim closes $48M Series A to scale sub-quadratic token optimization.',
    image: blueprintsImg,
    readTime: '3 min read',
    excerpt: 'Premier deep tech investors back Parsim to accelerate custom CUDA/Triton kernels for next-generation reasoning architectures.',
    fullContent: 'Parsim Technologies has completed a $48 million Series A funding round to scale its attention compression engine. The capital will fund custom kernel co-design for upcoming Blackwell B200 and TPU v5p architectures, enabling real-time token maximization for enterprise foundation models.',
  },
  {
    id: 'kernel-v3',
    type: 'row',
    category: 'OPS',
    date: '16 JAN 2026',
    title: 'FlashParsim v3 released with zero-overhead PyTorch and vLLM bindings',
    readTime: '2 min read',
    excerpt: 'Drop-in acceleration layer integrates with vLLM, TensorRT-LLM, and SGLang in under 5 lines of configuration.',
    fullContent: 'The Parsim engineering team announced the open release of FlashParsim v3 runtime bindings, providing immediate drop-in compatibility with leading inference engines including vLLM and TensorRT-LLM with less than 1.2% kernel dispatch overhead.',
  },
  {
    id: 'helix-press',
    type: 'row',
    category: 'PRESS',
    date: '18 JUL 2026',
    title: 'Helix DC and Parsim deploy token optimization across 100,000 accelerator nodes',
    readTime: '3 min read',
    excerpt: 'Hyperscale colocation campuses adopt Parsim to maximize compute density per megawatt.',
    fullContent: 'Helix Data Centers has standardized on Parsim’s inference orchestration software across its premier AI training and serving campuses, multiplying usable concurrent context length by 16x without requiring additional physical HBM memory skids.',
  },
  {
    id: 'deepseek-support',
    type: 'row',
    category: 'GRID',
    date: '09 JUN 2026',
    title: 'Parsim validates native support for DeepSeek-R1 and Claude 3.7 reasoning formats',
    readTime: '4 min read',
    excerpt: 'Mathematical proofs and long-chain reflection loops compressed dynamically during autoregressive generation.',
    fullContent: 'Parsim has released specialized compression kernels tailored for long-horizon reflection tokens in chain-of-thought architectures, preserving intermediate reasoning coherence while preventing context blowout during open-ended problem solving.',
  },
];
