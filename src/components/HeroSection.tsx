import React from 'react';
import { useLang } from '@/contexts/LangContext';
import PhoneMockup from './PhoneMockup';

const HeroSection: React.FC = () => {
  const { t } = useLang();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12 geometric-pattern overflow-hidden">
      <div className="max-w-noorly mx-auto flex flex-col items-center text-center z-10 space-y-8">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-pill border"
          style={{
            background: 'rgba(167,139,250,0.12)',
            borderColor: 'rgba(167,139,250,0.25)',
            animation: 'fadeUp 0.8s 0s ease both',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-noorly-purple animate-breathe" />
          <span className="text-noorly-purple text-sm font-medium">
            {t('✦ A Companion for New Muslims ✦', '✦ رفيق المسلمين الجدد ✦')}
          </span>
        </div>

        {/* Arabic subtitle */}
        <p
          className="font-amiri text-noorly-gold text-xl md:text-2xl"
          style={{ animation: 'fadeUp 0.8s 0.1s ease both' }}
          dir="rtl"
        >
          رفيق المسلمين الجدد
        </p>

        {/* Main headline */}
        <h1
          className="font-body font-extrabold text-foreground text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight max-w-3xl"
          style={{ animation: 'fadeUp 0.8s 0.2s ease both' }}
        >
          {t('Your ', 'رحلتك ')}
          <span className="text-noorly-blue">
            {t('Islamic', 'الإسلامية')}
          </span>
          {t(' Journey Starts Here', ' تبدأ هنا')}
        </h1>

        {/* Body text */}
        <p
          className="text-noorly-text-2 text-lg md:text-xl max-w-xl leading-relaxed"
          style={{ animation: 'fadeUp 0.8s 0.3s ease both' }}
        >
          {t(
            'A gentle 60-day companion guiding new Muslims step by step through ',
            'رفيق لطيف لمدة ٦٠ يومًا يرشد المسلمين الجدد خطوة بخطوة من خلال '
          )}
          <span className="text-noorly-green">
            {t('lessons, duas, and real support', 'الدروس والأدعية والدعم الحقيقي')}
          </span>
          .
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4"
          style={{ animation: 'fadeUp 0.8s 0.4s ease both' }}
        >
          <a
            href="#download"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium bg-noorly-coral text-foreground rounded-pill transition-all duration-200 hover:scale-[1.04]"
            style={{ position: 'relative' }}
          >
            <span>🌙</span> {t('Start Your Journey', 'ابدأ رحلتك')}
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium text-foreground rounded-pill border border-foreground/20 transition-all duration-200 hover:border-foreground/40 hover:scale-[1.04]"
          >
            {t('Explore Features →', '← استكشف المميزات')}
          </a>
        </div>

        {/* Phone mockup */}
        <div
          className="mt-8 md:mt-12"
          style={{ animation: 'fadeUp 0.8s 0.5s ease both' }}
        >
          <PhoneMockup />
        </div>

        {/* Scroll hint */}
        <div className="animate-breathe text-noorly-text-3 text-xs tracking-[4px] uppercase mt-8">
          {t('SCROLL ↓', '↓ مرر للأسفل')}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
