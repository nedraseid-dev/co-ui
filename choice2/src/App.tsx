import React, { useState } from 'react';

// Parsim Core Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { TickerBar } from './components/TickerBar';
import { WhyParsim } from './components/WhyParsim';
import { TokenMaximizerWidget } from './components/TokenMaximizerWidget';
import { Testimonial } from './components/Testimonial';
import { TrustedBy } from './components/TrustedBy';
import { Capabilities } from './components/Capabilities';
import { Performance } from './components/Performance';
import { StatsGrid } from './components/StatsGrid';
import { LatestNews } from './components/LatestNews';
import { ParsimFooter } from './components/ParsimFooter';
import { ScrollReveal } from './components/ScrollReveal';

// High-Performance Visual Enhancements
import { CyberNoiseBackground } from './components/CyberNoiseBackground';

// Shared UI & Interactive Modals
import { ContactDrawer } from './components/ContactDrawer';
import { TelemetryModal } from './components/TelemetryModal';
import { NewsModal } from './components/NewsModal';
import { TemplateModal } from './components/TemplateModal';
import { TextEditorProvider } from './context/TextEditorContext';
import { NewsItem } from './types';
import { NEWS_ITEMS } from './data/content';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isTelemetryOpen, setIsTelemetryOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);
  const [templatePageTitle, setTemplatePageTitle] = useState<string | null>(null);

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPressHero = () => {
    setSelectedArticle(NEWS_ITEMS[0]);
  };

  return (
    <TextEditorProvider>
      <div className="min-h-screen bg-[#080808] text-white flex flex-col font-['Poppins',sans-serif] relative selection:bg-[#ff3b00] selection:text-black">
        
        {/* Zero-latency Ambient Background */}
        <CyberNoiseBackground />

        {/* Navigation Header */}
        <Navbar 
          onOpenContact={() => setIsContactOpen(true)}
          onNavigateSection={handleNavigateSection}
        />

        <main className="flex-1 relative z-10">
          {/* Hero Section with Parallax, Shimmer, and Status Radar */}
          <Hero 
            onOpenPress={handleOpenPressHero}
          />

          {/* High-Velocity Telemetry Ticker Ribbon */}
          <TickerBar />

          {/* Full-Bleed Safety Orange Manifesto Banner with Word-by-Word Split Reveal */}
          <Manifesto />

          {/* Interactive Token Maximizer & Horizon Lab with Spotlight Glow */}
          <section id="token-maximizer" className="bg-[#080808] border-b border-neutral-900 py-20 sm:py-28 px-6 sm:px-8 lg:px-12 text-white">
            <div className="max-w-7xl mx-auto">
              <ScrollReveal direction="up" delay={0.08}>
                <TokenMaximizerWidget />
              </ScrollReveal>
            </div>
          </section>

          {/* Why Parsim with 3D Tilt Cards & Spotlight Hover */}
          <WhyParsim />

          {/* Frontier Case Studies / Testimonials Carousel */}
          <Testimonial />

          {/* Trusted By Leading Inference Labs Logos */}
          <TrustedBy />

          {/* Capabilities Deep-Dive (Stacked Left Side Navigation & Right Side Scroll Lighting) */}
          <Capabilities />

          {/* Performance Waveguide Ribbon & NOC Telemetry Link */}
          <Performance 
            onOpenTelemetry={() => setIsTelemetryOpen(true)}
          />

          {/* Empirical Stats Grid with Dynamic Count-Up Numbers */}
          <StatsGrid />

          {/* Latest Research & Papers with Staggered 3D Tilt Cards */}
          <LatestNews 
            onSelectArticle={(article) => setSelectedArticle(article)}
            onViewAllNews={() => handleNavigateSection('news')}
          />
        </main>

        {/* High-Tech Parsim Engineering Footer with Big Wordmark & Vertical Half Blur */}
        <ParsimFooter 
          onOpenContact={() => setIsContactOpen(true)}
          onNavigateSection={handleNavigateSection}
          onOpenTemplatePage={(title) => setTemplatePageTitle(title)}
        />

        {/* Interactive Drawers & Modals */}
        <ContactDrawer 
          isOpen={isContactOpen} 
          onClose={() => setIsContactOpen(false)} 
        />

        <TelemetryModal 
          isOpen={isTelemetryOpen} 
          onClose={() => setIsTelemetryOpen(false)} 
        />

        <NewsModal 
          article={selectedArticle} 
          onClose={() => setSelectedArticle(null)}
          onOpenContact={() => setIsContactOpen(true)}
        />

        <TemplateModal 
          pageTitle={templatePageTitle}
          onClose={() => setTemplatePageTitle(null)}
        />

      </div>
    </TextEditorProvider>
  );
}
