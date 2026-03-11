import React from 'react';
import { useLang } from '@/contexts/LangContext';

const timelineItems = [
  {
    weeks: 'Week 1–2',
    days: 'Days 1–14',
    weeksAr: 'الأسبوع ١–٢',
    daysAr: 'الأيام ١–١٤',
    emoji: '🌱',
    colorVar: 'noorly-coral',
    titleEn: 'Foundations',
    titleAr: 'الأساسيات',
    descEn: 'Who is Allah? Understanding Iman, the Shahada, and Allah\'s infinite mercy.',
    descAr: 'من هو الله؟ فهم الإيمان والشهادة ورحمة الله اللانهائية.',
    topics: ['Shahada', 'Iman', 'Mercy', 'Tawhid'],
    topicsAr: ['الشهادة', 'الإيمان', 'الرحمة', 'التوحيد'],
    progress: 25,
  },
  {
    weeks: 'Week 3–4',
    days: 'Days 15–28',
    weeksAr: 'الأسبوع ٣–٤',
    daysAr: 'الأيام ١٥–٢٨',
    emoji: '🕌',
    colorVar: 'noorly-blue',
    titleEn: 'Prayer & Stability',
    titleAr: 'الصلاة والاستقرار',
    descEn: 'Wudu, Salah, connecting with the Quran, and daily Dhikr.',
    descAr: 'الوضوء والصلاة والتواصل مع القرآن والذكر اليومي.',
    topics: ['Wudu', 'Salah', 'Quran', 'Dhikr'],
    topicsAr: ['الوضوء', 'الصلاة', 'القرآن', 'الذكر'],
    progress: 50,
  },
  {
    weeks: 'Week 5–6',
    days: 'Days 29–42',
    weeksAr: 'الأسبوع ٥–٦',
    daysAr: 'الأيام ٢٩–٤٢',
    emoji: '📖',
    colorVar: 'noorly-purple',
    titleEn: 'Quran & Spiritual Life',
    titleAr: 'القرآن والحياة الروحية',
    descEn: 'Fasting, Zakat, Hajj, Tawakkul, and deepening your relationship with Allah.',
    descAr: 'الصيام والزكاة والحج والتوكل وتعميق علاقتك بالله.',
    topics: ['Fasting', 'Zakat', 'Hajj', 'Tawakkul'],
    topicsAr: ['الصيام', 'الزكاة', 'الحج', 'التوكل'],
    progress: 75,
  },
  {
    weeks: 'Week 7–9',
    days: 'Days 43–60',
    weeksAr: 'الأسبوع ٧–٩',
    daysAr: 'الأيام ٤٣–٦٠',
    emoji: '☪️',
    colorVar: 'noorly-gold',
    titleEn: 'Living Islam',
    titleAr: 'العيش في الإسلام',
    descEn: 'Honesty, mercy, humility, balance — carrying Islam into every part of your life.',
    descAr: 'الصدق والرحمة والتواضع والتوازن — حمل الإسلام في كل جزء من حياتك.',
    topics: ['Honesty', 'Mercy', 'Humility', 'Balance'],
    topicsAr: ['الصدق', 'الرحمة', 'التواضع', 'التوازن'],
    progress: 100,
  },
];

const JourneyTimeline: React.FC = () => {
  const { t } = useLang();

  return (
    <section id="journey" className="relative z-10 py-[120px] px-6 md:px-12">
      <div className="max-w-noorly mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 scroll-reveal">
          <span className="text-noorly-coral text-sm font-medium tracking-wide">
            {t('✦ The 60-Day Path ✦', '✦ مسار الستين يومًا ✦')}
          </span>
          <h2 className="font-body font-extrabold text-foreground text-3xl md:text-4xl leading-tight">
            {t('Your journey, ', 'رحلتك، ')}
            <span className="text-noorly-coral">{t('beautifully mapped.', 'مرسومة بجمال.')}</span>
          </h2>
          <p className="text-noorly-text-2 max-w-lg mx-auto">
            {t(
              'A structured 60-day path from your first steps to living Islam with confidence.',
              'مسار منظم من ٦٠ يومًا من خطواتك الأولى إلى العيش بالإسلام بثقة.'
            )}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px overflow-hidden">
            <div
              className="w-full h-full"
              style={{
                background: 'linear-gradient(to bottom, hsl(var(--noorly-coral)), hsl(var(--noorly-blue)), hsl(var(--noorly-purple)), hsl(var(--noorly-gold)))',
              }}
            />
          </div>

          <div className="space-y-20">
            {timelineItems.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={item.titleEn}
                  className={`relative flex flex-col md:flex-row items-start md:items-center scroll-reveal ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  data-delay={String(i * 150)}
                >
                  {/* Dot with glow ring */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className="absolute inset-0 rounded-full animate-breathe"
                      style={{
                        background: `radial-gradient(circle, hsl(var(--${item.colorVar}) / 0.3), transparent 70%)`,
                        transform: 'scale(3)',
                      }}
                    />
                    <div
                      className="relative w-12 h-12 rounded-full bg-noorly-surface border-2 flex items-center justify-center"
                      style={{
                        borderColor: `hsl(var(--${item.colorVar}))`,
                        boxShadow: `0 0 24px hsl(var(--${item.colorVar}) / 0.5)`,
                      }}
                    >
                      <span className="text-xl">{item.emoji}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${
                      isLeft ? 'md:pr-12 md:text-right rtl:md:text-left rtl:md:pl-12 rtl:md:pr-0' : 'md:pl-12 md:text-left rtl:md:text-right rtl:md:pr-12 rtl:md:pl-0'
                    }`}
                  >
                    <div
                      className="group bg-noorly-surface rounded-2xl p-6 border border-border hover:border-foreground/15 transition-all duration-500 hover:-translate-y-1"
                      style={{
                        boxShadow: `0 0 0 0 hsl(var(--${item.colorVar}) / 0)`,
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 8px 32px hsl(var(--${item.colorVar}) / 0.15)`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = `0 0 0 0 hsl(var(--${item.colorVar}) / 0)`;
                      }}
                    >
                      {/* Week badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="inline-flex items-center px-3 py-1 rounded-pill text-xs font-medium text-foreground"
                          style={{ background: `hsl(var(--${item.colorVar}) / 0.15)` }}
                        >
                          {t(item.weeks, item.weeksAr)}
                        </span>
                        <span className="text-xs text-noorly-text-3">
                          {t(item.days, item.daysAr)}
                        </span>
                      </div>

                      <h3 className="font-body font-bold text-foreground text-xl">
                        {t(item.titleEn, item.titleAr)}
                      </h3>

                      <p className="text-noorly-text-2 text-sm mt-2 leading-relaxed">
                        {t(item.descEn, item.descAr)}
                      </p>

                      {/* Topic pills */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {(t(item.topics.join(','), item.topicsAr.join(','))).split(',').map((topic) => (
                          <span
                            key={topic}
                            className="px-2.5 py-0.5 rounded-pill text-[11px] text-noorly-text-2 border border-border"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      {/* Mini progress */}
                      <div className="mt-4 flex items-center gap-3">
                        <div className="flex-1 h-1 bg-foreground/10 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{
                              width: `${item.progress}%`,
                              background: `linear-gradient(90deg, hsl(var(--${item.colorVar})), hsl(var(--${item.colorVar}) / 0.5))`,
                            }}
                          />
                        </div>
                        <span className="text-[10px] text-noorly-text-3 font-medium">
                          {item.progress}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-[calc(50%-40px)]" />
                </div>
              );
            })}
          </div>

          {/* End marker */}
          <div className="flex flex-col items-center mt-16 scroll-reveal">
            <div className="relative group">
              {/* Outer glow rings */}
              <div
                className="absolute inset-0 rounded-full animate-breathe"
                style={{
                  background: 'radial-gradient(circle, hsl(var(--noorly-gold) / 0.15), transparent 70%)',
                  transform: 'scale(5)',
                }}
              />
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, hsl(var(--noorly-coral) / 0.1), transparent 70%)',
                  transform: 'scale(3.5)',
                  animation: 'breathe 3s ease-in-out infinite 1s',
                }}
              />

              {/* Main circle */}
              <div
                className="relative w-20 h-20 rounded-full bg-noorly-surface border-2 border-noorly-gold flex items-center justify-center transition-transform duration-500 group-hover:scale-110"
                style={{
                  boxShadow: '0 0 32px hsl(var(--noorly-gold) / 0.5), inset 0 0 20px hsl(var(--noorly-gold) / 0.1)',
                }}
              >
                <span className="text-3xl">☪️</span>
              </div>
            </div>

            {/* Text */}
            <div className="mt-6 text-center space-y-2">
              <p className="font-body font-bold text-foreground text-lg">
                {t('Your new life begins', 'حياتك الجديدة تبدأ')}
              </p>
              <p className="text-noorly-text-3 text-sm max-w-xs">
                {t(
                  'Day 60 is not the end — it\'s the beginning of a lifetime of faith.',
                  'اليوم الستون ليس النهاية — إنه بداية حياة كاملة من الإيمان.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
