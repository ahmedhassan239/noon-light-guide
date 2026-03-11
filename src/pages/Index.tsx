import React, { useEffect } from 'react';
import Starfield from '@/components/Starfield';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsBar from '@/components/StatsBar';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import SeasonalSection from '@/components/SeasonalSection';
import JourneyTimeline from '@/components/JourneyTimeline';
import HelpSection from '@/components/HelpSection';
import DownloadSection from '@/components/DownloadSection';
import Footer from '@/components/Footer';
import IslamicDivider from '@/components/IslamicDivider';
import { useCustomCursor } from '@/hooks/useCustomCursor';

const Index: React.FC = () => {
  useCustomCursor();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.delay ? parseInt(el.dataset.delay) : 0;
            setTimeout(() => el.classList.add('visible'), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.scroll-reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <Starfield />
      <Navbar />
      <HeroSection />
      <StatsBar />
      <IslamicDivider />
      <AboutSection />
      <IslamicDivider />
      <FeaturesSection />
      <IslamicDivider />
      <SeasonalSection />
      <IslamicDivider />
      <JourneyTimeline />
      <IslamicDivider />
      <HelpSection />
      <IslamicDivider />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
