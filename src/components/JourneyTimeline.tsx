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
  },
  {
    weeks: 'Week 7–9',
    days: 'Days 43–60',
    weeksAr: 'الأسبوع ٧–٩',
    daysAr: 'الأيام ٤٣–٦٠',
    emoji: '✨',
    colorVar: 'noorly-gold',
    titleEn: 'Living Islam',
    titleAr: 'العيش في الإسلام',
    descEn: 'Honesty, mercy, humility, balance — carrying Islam into every part of your life.',
    descAr: 'الصدق والرحمة والتواضع والتوازن — حمل الإسلام في كل جزء من حياتك.',
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
          <p className="font-amiri text-noorly-gold text-lg italic" dir="rtl">الرحلة</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-noorly-coral via-noorly-blue via-noorly-purple to-noorly-gold md:-translate-x-px" />

          <div className="space-y-16">
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
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-noorly-surface border-2 border-border flex items-center justify-center z-10"
                    style={{ boxShadow: `0 0 20px hsl(var(--${item.colorVar}) / 0.4)` }}
                  >
                    <span className="text-lg">{item.emoji}</span>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-16 md:ml-0 md:w-[calc(50%-40px)] ${
                      isLeft ? 'md:pr-12 md:text-right rtl:md:text-left rtl:md:pl-12 rtl:md:pr-0' : 'md:pl-12 md:text-left rtl:md:text-right rtl:md:pr-12 rtl:md:pl-0'
                    }`}
                  >
                    <div className="bg-noorly-surface rounded-lg p-6 border border-border hover:border-foreground/10 transition-colors duration-300">
                      <p className="text-xs text-noorly-text-3 font-medium">
                        {t(item.weeks, item.weeksAr)} · {t(item.days, item.daysAr)}
                      </p>
                      <h3 className="font-body font-bold text-foreground text-xl mt-2">
                        {t(item.titleEn, item.titleAr)}
                      </h3>
                      <p className="font-amiri text-noorly-gold text-sm mt-1" dir="rtl">{item.titleAr}</p>
                      <p className="text-noorly-text-2 text-sm mt-3 leading-relaxed">
                        {t(item.descEn, item.descAr)}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-[calc(50%-40px)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;
