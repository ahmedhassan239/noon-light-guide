import React from 'react';
import { useLang } from '@/contexts/LangContext';

const PhoneMockup: React.FC = () => {
  const { t, lang } = useLang();

  return (
    <div className="relative">
      {/* Glow behind phone */}
      <div
        className="absolute inset-0 animate-glow-pulse rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.2) 0%, transparent 70%)',
          transform: 'scale(1.5)',
        }}
      />

      {/* Phone frame */}
      <div
        className="relative w-[260px] rounded-[40px] border border-foreground/10 overflow-hidden"
        style={{
          background: 'hsl(var(--noorly-surface))',
          boxShadow: '0 40px 80px rgba(0,0,0,0.6)',
          animation: 'float 4s ease-in-out infinite',
        }}
      >
        {/* Status bar */}
        <div className="h-10 flex items-center justify-center">
          <div className="w-20 h-5 bg-background rounded-full" />
        </div>

        {/* Content */}
        <div className="px-4 pb-4 space-y-3">
          {/* Greeting */}
          <p className={`font-arabic-ui text-foreground text-sm ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
            {t('Assalamu Alaikum, brother 👋', 'السلام عليكم، أخي 👋')}
          </p>

          {/* Journey card */}
          <div
            className="rounded-2xl p-4 space-y-2"
            style={{
              background: 'linear-gradient(135deg, hsl(var(--noorly-blue)), hsl(217 91% 45%))',
            }}
          >
            <p className="text-xs text-foreground/80">
              {t('📖 Day 7 of 60', '📖 اليوم ٧ من ٦٠')}
            </p>
            <p className="font-bold text-foreground text-sm">
              {t('The Meaning of Iman', 'معنى الإيمان')}
            </p>
            {lang === 'ar' && (
              <p className="font-amiri text-noorly-gold text-sm text-right">معنى الإيمان</p>
            )}
            {/* Progress bar */}
            <div className="w-full h-1.5 bg-foreground/20 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, hsl(var(--noorly-gold)), hsl(var(--noorly-coral)))',
                  width: '35%',
                  animation: 'progressFill 1.4s ease-out forwards',
                }}
              />
            </div>
          </div>

          {/* Verse card */}
          <div className="rounded-2xl p-4 bg-noorly-surface-2 border-l-2 border-noorly-purple space-y-2">
            <p className="text-xs text-noorly-purple font-medium">
              {t('✦ Today\'s Inspiration', '✦ إلهام اليوم')}
            </p>
            {lang === 'en' ? (
              <p className="text-foreground text-sm leading-relaxed italic">
                "The believers are only those who, when Allah is mentioned, their hearts become fearful..."
              </p>
            ) : (
              <p className="font-amiri text-foreground text-sm leading-[2] text-right" dir="rtl">
                إِنَّمَا الْمُؤْمِنُونَ الَّذِينَ إِذَا ذُكِرَ اللَّهُ وَجِلَتْ قُلُوبُهُمْ
              </p>
            )}
            <p className={`text-[10px] text-noorly-text-3 ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
              {t('Surah Al-Anfal 8:2', 'سورة الأنفال 8:2')}
            </p>
          </div>

          {/* Bottom nav */}
          <div className="flex justify-around items-center pt-2 border-t border-foreground/10">
            {['🕌', '📖', '📚', '🤲', '👤'].map((icon, i) => (
              <span
                key={i}
                className={`text-lg ${i === 0 ? 'opacity-100' : 'opacity-30'}`}
              >
                {icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
