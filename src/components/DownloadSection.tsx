import React from 'react';
import { useLang } from '@/contexts/LangContext';

const DownloadSection: React.FC = () => {
  const { t } = useLang();

  return (
    <section id="download" className="relative z-10 py-[120px] px-6 md:px-12 geometric-pattern">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle at center, rgba(251,146,60,0.08) 0%, transparent 70%)' }}
      />

      <div className="max-w-noorly mx-auto text-center space-y-10 relative z-10">
        {/* Bismillah - always Arabic */}
        <p className="font-amiri text-noorly-gold text-3xl" dir="rtl">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>

        {/* Heading */}
        <h2 className="font-body font-extrabold text-foreground text-3xl md:text-5xl leading-tight scroll-reveal">
          {t('Begin your journey with ', 'ابدأ رحلتك مع ')}
          <span className="text-noorly-coral">NooRly</span>
          {t(' today.', ' اليوم.')}
        </h2>

        <p className="text-noorly-text-2 text-lg max-w-md mx-auto scroll-reveal">
          {t(
            'Free. Bilingual. Built with love for every new Muslim finding their way.',
            'مجاني. ثنائي اللغة. مبني بحب لكل مسلم جديد يجد طريقه.'
          )}
        </p>

        {/* Store buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center scroll-reveal">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-noorly-surface rounded-lg border border-border hover:border-noorly-coral/30 hover:scale-[1.04] transition-all duration-200"
          >
            <span className="text-2xl">🍎</span>
            <div className="text-start">
              <p className="text-xs text-noorly-text-3">{t('Download on the', 'حمّل من')}</p>
              <p className="font-body font-bold text-foreground">{t('App Store', 'آب ستور')}</p>
            </div>
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-noorly-surface rounded-lg border border-border hover:border-noorly-coral/30 hover:scale-[1.04] transition-all duration-200"
          >
            <span className="text-2xl">▶️</span>
            <div className="text-start">
              <p className="text-xs text-noorly-text-3">{t('Get it on', 'حمّل من')}</p>
              <p className="font-body font-bold text-foreground">{t('Google Play', 'جوجل بلاي')}</p>
            </div>
          </a>
        </div>

        {/* Divider */}
        <div className="py-8">
          <span className="islamic-divider text-lg select-none">ـــ ✦ ـــ ✦ ـــ</span>
        </div>

        {/* Fine print */}
        <p className="text-noorly-text-3 text-sm">
          {t(
            'Available on iOS & Android · Arabic & English · 100% Free',
            'متوفر على iOS و Android · عربي وإنجليزي · مجاني ١٠٠٪'
          )}
        </p>
      </div>
    </section>
  );
};

export default DownloadSection;
