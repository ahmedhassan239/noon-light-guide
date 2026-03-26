import React from 'react';
import { useLang } from '@/contexts/LangContext';

const AboutSection: React.FC = () => {
  const { t, lang } = useLang();

  return (
    <section id="about" className="relative z-10 py-[120px] px-6 md:px-12 section-light">
      <div className="max-w-noorly mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Text column */}
        <div className="space-y-8 scroll-reveal">
          <span className="text-noorly-blue text-sm font-medium tracking-wide">
            {t('✦ About NooRly ✦', '✦ حول نورلي ✦')}
          </span>

          <h2 className="font-body font-extrabold text-3xl md:text-4xl leading-tight" style={{ color: 'hsl(var(--noorly-navy-deep))' }}>
            {t('Islam is vast.', 'الإسلام واسع.')}
            <br />
            <span className="text-noorly-blue">{t('We make it simple.', 'نحن نبسّطه.')}</span>
          </h2>

          <p className="text-noorly-light-muted leading-relaxed">
            {t(
              'When you first accept Islam, you\'re handed a universe of knowledge: prayers, fasting, Quran, theology, community, and more. It\'s beautiful, but overwhelming. NooRly was built to guide you through that first chapter gently, day by day.',
              'عندما تقبل الإسلام لأول مرة، تُمنح عالمًا من المعرفة: الصلاة والصيام والقرآن والعقيدة والمجتمع والمزيد. إنه جميل، لكنه مُرهق. بُني نورلي ليرشدك خلال هذا الفصل الأول بلطف، يومًا بيوم.'
            )}
          </p>

          <p className="text-noorly-light-muted leading-relaxed">
            {t(
              'No jargon. No judgment. Just a clear, structured path from Day 1 to Day 60, with lessons, duas, Quran verses, and real human support for the moments when things feel hard.',
              'بدون مصطلحات معقدة. بدون أحكام. مجرد مسار واضح ومنظم من اليوم الأول إلى اليوم الستين، مع دروس وأدعية وآيات قرآنية ودعم حقيقي للحظات الصعبة.'
            )}
          </p>

          {/* Quran quote */}
          <blockquote className="border-s-[3px] border-noorly-gold ps-5 space-y-2">
            {lang === 'en' ? (
              <>
                <p className="text-noorly-navy-mid text-base italic leading-relaxed" style={{ color: 'hsl(var(--noorly-navy-mid))' }}>
                  "Say, 'O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.'"
                </p>
                <p className="text-noorly-light-muted text-sm">Surah Az-Zumar 39:53 (Saheeh International)</p>
              </>
            ) : (
              <>
                <p className="font-amiri text-lg leading-[2.2]" dir="rtl" style={{ color: 'hsl(var(--noorly-navy-mid))' }}>
                  قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا ۚ إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ
                </p>
                <p className="text-noorly-light-muted text-sm font-amiri" dir="rtl">سورة الزمر 39:53</p>
              </>
            )}
          </blockquote>

          <p className="text-noorly-light-muted text-sm italic">
            {t(
              'Think of it as your gentle guide into Islam. Structured, supportive, and always by your side.',
              'فكّر فيه كدليلك اللطيف إلى الإسلام. منظم وداعم ودائمًا بجانبك.'
            )}
          </p>
        </div>

        {/* Visual column - floating cards */}
        <div className="relative h-[400px] hidden md:block scroll-reveal" data-delay="200">
          <div
            className="absolute top-0 right-0 w-64 rounded-lg p-6 bg-white border"
            style={{ borderColor: 'rgba(27,79,168,0.15)', animation: 'cardFloat1 5s ease-in-out infinite' }}
          >
            <span className="text-2xl">🤲</span>
            <h3 className="mt-3 font-body font-bold text-noorly-orange">{t('If You Need Help Now', 'إذا احتجت مساعدة الآن')}</h3>
            <p className="mt-1 text-sm text-noorly-light-muted">{t('Immediate spiritual support', 'دعم روحي فوري')}</p>
          </div>

          <div
            className="absolute top-24 right-8 w-64 rounded-lg p-6 border"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--noorly-navy-mid)), hsl(var(--noorly-blue)))',
              borderColor: 'rgba(59,130,246,0.15)',
              animation: 'cardFloat2 6s ease-in-out infinite',
            }}
          >
            <span className="text-2xl">📖</span>
            <h3 className="mt-3 font-body font-bold text-white">{t('60-Day Curriculum', 'منهج ٦٠ يومًا')}</h3>
            <p className="mt-1 text-sm text-white/70">{t('Step by step learning', 'تعلم خطوة بخطوة')}</p>
          </div>

          <div
            className="absolute top-48 right-4 w-64 rounded-lg p-6 bg-white border"
            style={{ borderColor: 'rgba(27,79,168,0.15)', animation: 'cardFloat3 7s ease-in-out infinite' }}
          >
            <span className="text-2xl">✅</span>
            <h3 className="mt-3 font-body font-bold text-noorly-green">{t('Your Progress', 'تقدمك')}</h3>
            <p className="mt-1 text-sm text-noorly-light-muted">{t('Track your growth', 'تتبع نموك')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
