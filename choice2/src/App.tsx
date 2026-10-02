import React, { useState } from 'react';

// Parsim Core Components
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
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
        
        {/* Navigation Header */}
        <Navbar 
          onOpenContact={() => setIsContactOpen(true)}
          onNavigateSection={handleNavigateSection}
        />

        <main className="flex-1">
          {/* Hero Section with Scroll Animations */}
          <Hero 
            onOpenPress={handleOpenPressHero}
          />

          {/* Full-Bleed Safety Orange Manifesto Banner */}
          <Manifesto />

          {/* Interactive Token Maximizer & Horizon Lab */}
          <section id="token-maximizer" className="bg-[#080808] border-b border-neutral-900 py-20 sm:py-28 px-6 sm:px-8 lg:px-12 text-white">
            <div className="max-w-7xl mx-auto">
              <ScrollReveal direction="up" delay={0.1}>
                <TokenMaximizerWidget />
              </ScrollReveal>
            </div>
          </section>

          {/* Why Parsim 4-Commitment Architecture Grid */}
          <WhyParsim />

          {/* Frontier Case Studies / Testimonials Carousel */}
          <Testimonial />

          {/* Trusted By Leading Inference Labs Logos */}
          <TrustedBy />

          {/* Capabilities Deep-Dive (Long-Horizon Agents, KV-Cache Compression, Token Maximization) */}
          <Capabilities />

          {/* Performance Waveguide Ribbon & NOC Telemetry Link */}
          <Performance 
            onOpenTelemetry={() => setIsTelemetryOpen(true)}
          />

          {/* Empirical Stats Grid (42.8T Tokens, 99.98% Recall, 16.4x Reduction, 10M Context) */}
          <StatsGrid />

          {/* Latest Research & Papers */}
          <LatestNews 
            onSelectArticle={(article) => setSelectedArticle(article)}
            onViewAllNews={() => handleNavigateSection('news')}
          />
        </main>

        {/* High-Tech Parsim Engineering Footer */}
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
