import React from 'react';
import { useKiroEffects } from './hooks/useKiroEffects';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import ProgressBar from './components/ProgressBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ProblemSection from './components/ProblemSection';
import HowItWorksSection from './components/HowItWorksSection';
import LayersSection from './components/LayersSection';
import DemoSection from './components/DemoSection';
import PerfSection from './components/PerfSection';
import VoicesSection from './components/VoicesSection';
import PricingSection from './components/PricingSection';
import ChangelogSection from './components/ChangelogSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const MARQUEE_ITEMS_1 = [
  'COMPRESS 12×',
  '−72% TOKEN SPEND',
  '4M TOKEN HORIZON',
  '~38MS LATENCY',
  '99.98% RECALL',
  'ZERO CONTEXT DRIFT',
];

const MARQUEE_ITEMS_2 = [
  'SEMANTIC COMPACTION',
  'ATTENTION BUDGETING',
  'MEMORY FABRIC',
  'MODEL-AGNOSTIC',
  'STATELESS CORE',
  'DROP-IN SDK',
];

export default function App() {
  useKiroEffects();

  return (
    <>
      <div className="noise" />
      <CustomCursor />
      <ProgressBar />
      <Preloader />
      <Navbar />

      <main>
        <Hero />
        <Marquee items={MARQUEE_ITEMS_1} />
        <ProblemSection />
        <Marquee items={MARQUEE_ITEMS_2} reverse={true} />
        <HowItWorksSection />
        <LayersSection />
        <DemoSection />
        <PerfSection />
        <VoicesSection />
        <PricingSection />
        <ChangelogSection />
        <FaqSection />
        <CtaSection />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
