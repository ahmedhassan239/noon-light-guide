import React from 'react';
import { useLang } from '@/contexts/LangContext';

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 19.5v-15A2.5 2.5 0 016.5 2H20v20H6.5a2.5 2.5 0 010-5H20" />
        <path d="M8 7h8M8 11h5" />
      </svg>
    ),
    en: '60-Day Journey',
    ar: 'رحلة ٦٠ يومًا',
    descEn: 'A structured path from your first day to spiritual confidence, one lesson at a time.',
    descAr: 'مسار منظم من يومك الأول إلى الثقة الروحية، درس تلو درس.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
    en: 'Daily Inspiration',
    ar: 'إلهام يومي',
    descEn: 'A Quran verse and reflection delivered every morning to nourish your soul.',
    descAr: 'آية قرآنية وتأمل يصلك كل صباح لتغذية روحك.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453L2 22l5.547-1.043A9.96 9.96 0 0012 22z" />
        <path d="M12 8v4M12 16h.01" />
      </svg>
    ),
    en: 'Help Right Now',
    ar: 'المساعدة الفورية',
    descEn: 'Real guidance for real struggles. Doubt, family pressure, spiritual emptiness.',
    descAr: 'إرشاد حقيقي لصراعات حقيقية. الشك والضغط العائلي والفراغ الروحي.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 7h4v4H7zM13 7h4M13 11h4M7 15h10M7 19h6" />
      </svg>
    ),
    en: 'Islamic Library',
    ar: 'المكتبة الإسلامية',
    descEn: '415+ duas, adhkar, Quran verses, and essential Islamic knowledge.',
    descAr: 'أكثر من ٤١٥ دعاء وذكر وآية قرآنية ومعرفة إسلامية أساسية.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    ),
    en: 'Ramadan Guide',
    ar: 'دليل رمضان',
    descEn: 'Your first Ramadan? We walk you through fasting, taraweeh, and more.',
    descAr: 'أول رمضان لك؟ نرافقك في الصيام والتراويح والمزيد.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 01-3.46 0" />
      </svg>
    ),
    en: 'Smart Reminders',
    ar: 'تذكيرات ذكية',
    descEn: 'Gentle nudges for prayer, daily lessons, and Quran reading.',
    descAr: 'تنبيهات لطيفة للصلاة والدروس اليومية وقراءة القرآن.',
  },
];

const FeaturesSection: React.FC = () => {
  const { t } = useLang();

  return (
    <section id="features" className="relative z-10 py-[120px] px-6 md:px-12 pattern-girih" style={{ background: 'hsl(var(--noorly-navy-deep))' }}>
      <div className="max-w-noorly mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 scroll-reveal">
          <span className="text-noorly-blue text-sm font-medium tracking-wide">
            {t('✦ Features ✦', '✦ المميزات ✦')}
          </span>
          <h2 className="font-body font-extrabold text-foreground text-3xl md:text-4xl leading-tight">
            {t('Everything a new Muslim needs.', 'كل ما يحتاجه المسلم الجديد.')}
            <br />
            <span className="text-noorly-blue">{t('All in one place.', 'في مكان واحد.')}</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 grid-cols-1 border rounded-lg overflow-hidden" style={{ borderColor: 'rgba(59,130,246,0.15)' }}>
          {features.map((f, i) => (
            <div
              key={f.en}
              className="p-8 hover:bg-noorly-surface-2 transition-colors duration-300 scroll-reveal"
              style={{
                background: 'hsl(var(--noorly-surface))',
                borderBottom: '1px solid rgba(59,130,246,0.1)',
                borderRight: '1px solid rgba(59,130,246,0.1)',
              }}
              data-delay={String(i * 100)}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-noorly-blue"
                style={{
                  background: 'rgba(27,79,168,0.3)',
                }}
              >
                {f.icon}
              </div>
              <h3 className="font-body font-semibold text-foreground text-lg">{t(f.en, f.ar)}</h3>
              <p className="text-noorly-text-2 text-sm mt-3 leading-relaxed">{t(f.descEn, f.descAr)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
