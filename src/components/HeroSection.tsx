import React from 'react';
import { useLang } from '@/contexts/LangContext';
import PhoneMockup from './PhoneMockup';

const HeroSection: React.FC = () => {
  const { t, lang } = useLang();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-12 pattern-stars8 overflow-hidden"
      style={{ background: 'hsl(var(--noorly-navy-deep))' }}
    >
      {/* Gold arcs */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] pointer-events-none opacity-[0.06]">
        <svg viewBox="0 0 900 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="450" cy="300" rx="400" ry="200" stroke="#C9A84C" strokeWidth="1" />
          <ellipse cx="450" cy="300" rx="300" ry="150" stroke="#C9A84C" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-noorly mx-auto flex flex-col items-center text-center z-10 space-y-8">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-5 py-2 rounded-pill border"
          style={{
            background: 'rgba(59,130,246,0.12)',
            borderColor: 'rgba(59,130,246,0.25)',
            animation: 'fadeUp 0.8s 0s ease both',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-noorly-blue animate-breathe" />
          <span className="text-noorly-blue text-sm font-medium">
            {t('✦ A Companion for New Muslims ✦', '✦ رفيق المسلمين الجدد ✦')}
          </span>
        </div>

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
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium bg-noorly-orange text-noorly-navy-deep rounded-pill transition-all duration-200 hover:scale-[1.04]"
          >
            <span>🌙</span> {t('Start Your Journey', 'ابدأ رحلتك')}
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-medium text-foreground rounded-pill border border-noorly-orange/30 transition-all duration-200 hover:border-noorly-orange/60 hover:scale-[1.04]"
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
