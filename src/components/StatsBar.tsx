import React, { useRef } from 'react';
import { useLang } from '@/contexts/LangContext';
import { useCountUp } from '@/hooks/useScrollReveal';

const StatItem: React.FC<{ value: number; label: string; arLabel: string }> = ({ value, label, arLabel }) => {
  const { t, lang } = useLang();
  const numRef = useRef<HTMLSpanElement>(null);
  useCountUp(numRef as React.RefObject<HTMLElement>, value);

  return (
    <div className="flex flex-col items-center gap-1 py-8">
      <span ref={numRef} className="font-body font-black text-5xl text-noorly-blue">
        0
      </span>
      <span className="text-noorly-text-2 text-sm">{t(label, arLabel)}</span>
    </div>
  );
};

const StatsBar: React.FC = () => {
  const stats = [
    { value: 60, label: 'Day Journey', arLabel: 'رحلة ٦٠ يومًا' },
    { value: 215, label: 'Library Items', arLabel: 'أذكار وأدعية وآيات' },
    { value: 30, label: 'Help Situations', arLabel: 'موقف دعم فوري' },
    { value: 2, label: 'Languages', arLabel: 'عربي + إنجليزي' },
  ];

  return (
    <section
      className="relative z-10 pattern-girih"
      style={{
        background: 'hsl(var(--noorly-surface))',
        borderTop: '1px solid rgba(201,168,76,0.15)',
        borderBottom: '1px solid rgba(201,168,76,0.15)',
      }}
    >
      <div className="max-w-noorly mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border rtl:divide-x-reverse">
        {stats.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
