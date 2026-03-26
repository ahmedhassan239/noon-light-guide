import React from 'react';
import { useLang } from '@/contexts/LangContext';

const situations = [
  {
    emoji: '💭',
    titleEn: 'Feeling Doubt About Islam',
    titleAr: 'الشعور بالشك حول الإسلام',
    descEn: 'It\'s natural. Doubt isn\'t the opposite of faith. It\'s a part of the journey. We help you find clarity.',
    descAr: 'هذا طبيعي. الشك ليس نقيض الإيمان. إنه جزء من الرحلة. نساعدك على إيجاد الوضوح.',
  },
  {
    emoji: '👨‍👩‍👧',
    titleEn: 'Family Doesn\'t Accept Your Islam',
    titleAr: 'عائلتك لا تتقبل إسلامك',
    descEn: 'One of the hardest parts. We offer practical advice, emotional support, and Quran-based comfort.',
    descAr: 'من أصعب الأمور. نقدم نصائح عملية ودعم عاطفي وراحة مبنية على القرآن.',
  },
  {
    emoji: '😔',
    titleEn: 'Feeling Spiritually Empty',
    titleAr: 'الشعور بالفراغ الروحي',
    descEn: 'Iman goes up and down. That\'s normal. We help you reconnect, gently and without judgment.',
    descAr: 'الإيمان يرتفع وينخفض. هذا طبيعي. نساعدك على إعادة الاتصال بلطف وبدون أحكام.',
  },
  {
    emoji: '🔄',
    titleEn: 'I Fell Back Into Old Habits',
    titleAr: 'عدت إلى عاداتي القديمة',
    descEn: 'Tawbah is always open. Allah\'s mercy is greater than any mistake. We guide you back.',
    descAr: 'باب التوبة مفتوح دائمًا. رحمة الله أعظم من أي خطأ. نرشدك للعودة.',
  },
];

const HelpSection: React.FC = () => {
  const { t } = useLang();

  return (
    <section id="support" className="relative z-10 py-[120px] px-6 md:px-12 pattern-stars8" style={{ background: 'hsl(var(--noorly-navy-deep))' }}>
      <div className="max-w-noorly mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4 scroll-reveal">
          <span className="text-noorly-green text-sm font-medium tracking-wide">
            {t('✦ Real Support ✦', '✦ دعم حقيقي ✦')}
          </span>
          <h2 className="font-body font-extrabold text-foreground text-3xl md:text-4xl leading-tight">
            {t('"If You Need Help Now" ', '"إذا احتجت مساعدة الآن" ')}
            <span className="text-noorly-green">{t('We\'re here.', 'نحن هنا.')}</span>
          </h2>
          <p className="text-noorly-text-2 max-w-xl mx-auto">
            {t(
              'Most apps don\'t talk about the hard parts. NooRly does. Because real support means showing up when things feel impossible.',
              'معظم التطبيقات لا تتحدث عن الأجزاء الصعبة. نورلي يفعل. لأن الدعم الحقيقي يعني التواجد عندما تبدو الأمور مستحيلة.'
            )}
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {situations.map((s, i) => (
            <div
              key={s.titleEn}
              className="rounded-lg p-6 border-l-[3px] border-noorly-blue hover:-translate-y-[3px] transition-all duration-300 scroll-reveal"
              style={{
                background: 'hsl(var(--noorly-surface))',
                borderTop: '1px solid rgba(59,130,246,0.1)',
                borderRight: '1px solid rgba(59,130,246,0.1)',
                borderBottom: '1px solid rgba(59,130,246,0.1)',
              }}
              data-delay={String(i * 100)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(59,130,246,0.1)';
                e.currentTarget.style.borderLeftColor = 'hsl(217 91% 60%)';
              }}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(27,79,168,0.3)' }}>
                <span className="text-xl">{s.emoji}</span>
              </div>
              <h3 className="font-body font-bold text-foreground">{t(s.titleEn, s.titleAr)}</h3>
              <p className="text-noorly-text-2 text-sm mt-2 leading-relaxed">{t(s.descEn, s.descAr)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
