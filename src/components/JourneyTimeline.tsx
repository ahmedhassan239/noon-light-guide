import React from 'react';
import { useLang } from '@/contexts/LangContext';

const timelineItems = [
  {
    weeks: 'Week 1–2',
    days: 'Days 1–14',
    weeksAr: 'الأسبوع ١–٢',
    daysAr: 'الأيام ١–١٤',
    emoji: '🌱',
    colorHex: '#F5A623',
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
    colorHex: '#1B4FA8',
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
    colorHex: '#3B82F6',
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
    emoji: '📿',
    colorHex: '#C9A84C',
    titleEn: 'Living Islam',
    titleAr: 'العيش في الإسلام',
    descEn: 'Honesty, mercy, humility, balance. Carrying Islam into every part of your life.',
    descAr: 'الصدق والرحمة والتواضع والتوازن. حمل الإسلام في كل جزء من حياتك.',
    topics: ['Honesty', 'Mercy', 'Humility', 'Balance'],
    topicsAr: ['الصدق', 'الرحمة', 'التواضع', 'التوازن'],
    progress: 100,
  },
];

const JourneyTimeline: React.FC = () => {
  const { t } = useLang();

  return (
    <section id="journey" className="relative z-10 py-[120px] px-6 md:px-12 section-light">
      <div className="max-w-noorly mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 scroll-reveal">
          <span className="text-noorly-blue text-sm font-medium tracking-wide">
            {t('✦ The 60-Day Path ✦', '✦ مسار الستين يومًا ✦')}
          </span>
          <h2 className="font-body font-extrabold text-3xl md:text-4xl leading-tight" style={{ color: 'hsl(var(--noorly-navy-deep))' }}>
            {t('Your journey, ', 'رحلتك، ')}
            <span className="text-noorly-orange">{t('beautifully mapped.', 'مرسومة بجمال.')}</span>
          </h2>
          <p className="text-noorly-light-muted max-w-lg mx-auto">
            {t(
              'A structured 60-day path from your first steps to living Islam with confidence.',
              'مسار منظم من ٦٠ يومًا من خطواتك الأولى إلى العيش بالإسلام بثقة.'
            )}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 w-px md:-translate-x-px overflow-hidden" style={{ height: 'calc(100% - 200px)' }}>
            <div
              className="w-full h-full"
              style={{
                background: 'linear-gradient(to bottom, #1B4FA8, #3B82F6, #C9A84C, transparent)',
              }}
            />
          </div>

          <div className="space-y-14">
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
                        background: `radial-gradient(circle, ${item.colorHex}33, transparent 70%)`,
                        transform: 'scale(3)',
                      }}
                    />
                    <div
                      className="relative w-12 h-12 rounded-full bg-white flex items-center justify-center"
                      style={{
                        border: `2px solid ${item.colorHex}`,
                        boxShadow: `0 0 24px ${item.colorHex}55`,
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
                      className="group bg-white rounded-2xl p-6 border hover:-translate-y-1 transition-all duration-500"
                      style={{ borderColor: 'rgba(27,79,168,0.15)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 8px 32px ${item.colorHex}22`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {/* Week badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="inline-flex items-center px-3 py-1 rounded-pill text-xs font-medium text-white"
                          style={{ background: '#1B4FA8' }}
                        >
                          {t(item.weeks, item.weeksAr)}
                        </span>
                        <span className="text-xs text-noorly-light-muted">
                          {t(item.days, item.daysAr)}
                        </span>
                      </div>

                      <h3 className="font-body font-bold text-xl" style={{ color: 'hsl(var(--noorly-navy-deep))' }}>
                        {t(item.titleEn, item.titleAr)}
                      </h3>

                      <p className="text-noorly-light-muted text-sm mt-2 leading-relaxed">
                        {t(item.descEn, item.descAr)}
                      </p>

                      {/* Topic pills */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {(t(item.topics.join(','), item.topicsAr.join(','))).split(',').map((topic) => (
                          <span
                            key={topic}
                            className="px-2.5 py-0.5 rounded-pill text-[11px] text-noorly-light-muted"
                            style={{ border: '1px solid rgba(27,79,168,0.2)' }}
                          >
                            {topic}
                          </span>
                        ))}
                      </div>

                      {/* Mini progress */}
                      <div className="mt-4 flex items-center gap-3">
                        <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ background: 'rgba(27,79,168,0.1)' }}>
                          <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{
                              width: `${item.progress}%`,
                              background: `linear-gradient(90deg, ${item.colorHex}, ${item.colorHex}88)`,
                            }}
                          />
                        </div>
                        <span className="text-[10px] text-noorly-light-muted font-medium">
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

          {/* Final stage marker */}
          <div className="relative flex flex-col items-center mt-14 scroll-reveal">
            <div className="relative z-10 mb-6">
              <div
                className="absolute inset-0 rounded-full animate-breathe"
                style={{
                  background: 'radial-gradient(circle, rgba(201,168,76,0.2), transparent 70%)',
                  transform: 'scale(4)',
                }}
              />
              <div
                className="relative w-14 h-14 rounded-full bg-white border-2 border-noorly-gold flex items-center justify-center"
                style={{
                  boxShadow: '0 0 24px rgba(201,168,76,0.4)',
                }}
              >
                <span className="text-2xl">☪️</span>
              </div>
            </div>

            <div className="text-center space-y-2">
              <p className="font-body font-extrabold text-xl tracking-tight" style={{ color: 'hsl(var(--noorly-navy-deep))' }}>
                {t('Your new life begins', 'حياتك الجديدة تبدأ')}
              </p>
              <p className="text-noorly-light-muted text-sm max-w-sm mx-auto leading-relaxed">
                {t(
                  'Day 60 is not the end. It\'s the beginning of a lifetime of faith.',
                  'اليوم الستون ليس النهاية. إنه بداية حياة كاملة من الإيمان.'
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
