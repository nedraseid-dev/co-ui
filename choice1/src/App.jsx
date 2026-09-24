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
import DemoSection from './components/DemoSection';
import PerfSection from './components/PerfSection';
import SetupSection from './components/SetupSection';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const MARQUEE_ITEMS_1 = [
  'VIRO SDK',
  '−72% TOKEN SPEND',
  '4M TOKEN HORIZON',
  '~38MS RETRIEVAL',
  'MODEL AGNOSTIC',
  'ZERO WORKFLOW CHANGES',
];

const MARQUEE_ITEMS_2 = [
  'OBSERVE',
  'COMPRESS',
  'RETRIEVE ON DEMAND',
  'TRACEABLE CONTEXT',
  'STATELESS CORE',
  'DROP-IN RUNTIME',
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
        <SetupSection />
        <DemoSection />
        <PerfSection />
        <FaqSection />
        <CtaSection />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
