import React, { useEffect, useState } from 'react';
import { useLang } from '@/contexts/LangContext';

interface SeasonData {
  icon: string;
  color: string;
  glowColor: string;
  badge_en: string;
  badge_ar: string;
  title_en: string;
  title_ar: string;
  desc_en: string;
  desc_ar: string;
  cta_en: string;
  cta_ar: string;
}

const seasons: Record<number, SeasonData> = {
  1: {
    icon: '🌙',
    color: '#3B82F6',
    glowColor: 'rgba(59,130,246,0.10)',
    badge_en: 'Islamic New Year — Muharram',
    badge_ar: 'السنة الهجرية الجديدة — المحرم',
    title_en: 'A New Hijri Year Begins',
    title_ar: 'تبدأ سنة هجرية جديدة',
    desc_en: 'Muharram is one of the four sacred months. Learn about the Islamic New Year and the significance of the Day of Ashura.',
    desc_ar: 'المحرم من الأشهر الحرم. تعرّف على رأس السنة الهجرية وفضل يوم عاشوراء.',
    cta_en: 'Learn About Muharram',
    cta_ar: 'تعرّف على المحرم',
  },
  7: {
    icon: '✨',
    color: '#A78BFA',
    glowColor: 'rgba(167,139,250,0.10)',
    badge_en: 'Sacred Month — Rajab',
    badge_ar: 'الشهر الحرام — رجب',
    title_en: 'Rajab & the Night Journey',
    title_ar: 'رجب والإسراء والمعراج',
    desc_en: 'Rajab is a sacred month and the month of the miraculous Night Journey of Prophet Muhammad ﷺ.',
    desc_ar: 'رجب شهر حرام وشهر الإسراء والمعراج المعجز للنبي محمد ﷺ.',
    cta_en: 'Learn About Rajab',
    cta_ar: 'تعرّف على رجب',
  },
  8: {
    icon: '🌙',
    color: '#A78BFA',
    glowColor: 'rgba(167,139,250,0.10)',
    badge_en: "Ramadan is coming — Sha'ban",
    badge_ar: 'رمضان قادم — شعبان',
    title_en: 'Prepare for Your First Ramadan',
    title_ar: 'استعدّ لرمضانك الأول',
    desc_en: 'Ramadan is just weeks away. Start preparing now — learn what to expect, how to fast, and how to make the most of it.',
    desc_ar: 'رمضان على وشك الحلول. ابدأ الاستعداد الآن — تعرّف على ما ينتظرك وكيف تصوم وكيف تستفيد منه.',
    cta_en: 'Prepare for Ramadan',
    cta_ar: 'استعدّ لرمضان',
  },
  9: {
    icon: '🌙',
    color: '#A78BFA',
    glowColor: 'rgba(167,139,250,0.12)',
    badge_en: 'Ramadan is here',
    badge_ar: 'رمضان كريم',
    title_en: 'Your First Ramadan Guide',
    title_ar: 'دليل رمضانك الأول',
    desc_en: 'Fasting, Tarawih, Laylatul Qadr, Zakat al-Fitr — everything a new Muslim needs for their first Ramadan.',
    desc_ar: 'الصيام والتراويح وليلة القدر وزكاة الفطر — كل ما يحتاجه المسلم الجديد في رمضانه الأول.',
    cta_en: 'Open Ramadan Guide',
    cta_ar: 'افتح دليل رمضان',
  },
  10: {
    icon: '🎉',
    color: '#F59E0B',
    glowColor: 'rgba(245,158,11,0.10)',
    badge_en: 'Eid Mubarak 🎊',
    badge_ar: 'عيد مبارك 🎊',
    title_en: 'Your First Eid al-Fitr',
    title_ar: 'عيدك الأول',
    desc_en: "Eid prayer, giving Zakat al-Fitr, celebrating with family — here's how to experience your first Eid.",
    desc_ar: 'صلاة العيد وزكاة الفطر والاحتفال مع الأسرة — إليك كيف تعيش عيدك الأول.',
    cta_en: 'Celebrate Your First Eid',
    cta_ar: 'احتفل بعيدك الأول',
  },
  11: {
    icon: '☪️',
    color: '#10B981',
    glowColor: 'rgba(16,185,129,0.10)',
    badge_en: "Sacred Month — Dhul Qi'dah",
    badge_ar: 'الشهر الحرام — ذو القعدة',
    title_en: 'The Sacred Months in Islam',
    title_ar: 'الأشهر الحرم في الإسلام',
    desc_en: 'We are now in one of the four sacred months. Learn what they mean and how to honor them.',
    desc_ar: 'نحن الآن في أحد الأشهر الحرم الأربعة. تعرّف على معناها وكيف تُعظّمها.',
    cta_en: 'Learn About Sacred Months',
    cta_ar: 'تعرّف على الأشهر الحرم',
  },
  12: {
    icon: '🕋',
    color: '#F59E0B',
    glowColor: 'rgba(245,158,11,0.12)',
    badge_en: 'Hajj Season is here',
    badge_ar: 'موسم الحج',
    title_en: 'The Season of Hajj & Dhul Hijjah',
    title_ar: 'موسم الحج وذي الحجة',
    desc_en: 'The best 10 days of the year are here. Learn about Hajj, the Day of Arafah, Eid al-Adha, and how to honor this blessed season.',
    desc_ar: 'أفضل عشرة أيام في العام. تعرّف على الحج ويوم عرفة وعيد الأضحى وكيف تُحيي هذا الموسم المبارك.',
    cta_en: 'Open Hajj & Dhul Hijjah Guide',
    cta_ar: 'افتح دليل الحج وذي الحجة',
  },
};

async function getHijriMonth(): Promise<number | null> {
  try {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
    const res = await fetch(`https://api.aladhan.com/v1/gToH?date=${dd}-${mm}-${yyyy}`);
    const data = await res.json();
    return parseInt(data.data.hijri.month.number);
  } catch {
    return null;
  }
}

const SeasonalSection: React.FC = () => {
  const { t } = useLang();
  const [season, setSeason] = useState<SeasonData | null>(null);

  useEffect(() => {
    getHijriMonth().then((month) => {
      if (month && seasons[month]) {
        setSeason(seasons[month]);
      }
    });
  }, []);

  if (!season) return null;

  return (
    <section className="relative z-10 py-16 px-6 md:px-12">
      <div
        className="max-w-[900px] mx-auto rounded-3xl p-10 md:p-12 border relative overflow-hidden scroll-reveal"
        style={{
          background: `hsl(var(--noorly-surface))`,
          borderColor: `${season.color}40`,
        }}
      >
        {/* Glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(circle at 70% 50%, ${season.glowColor}, transparent 70%)` }}
        />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Text side */}
          <div className="flex-1 space-y-5">
            {/* Badge */}
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-pill text-sm font-medium text-foreground"
              style={{ background: `${season.color}20` }}
            >
              <span>{season.icon}</span>
              {t(season.badge_en, season.badge_ar)}
            </span>

            <h3 className="font-body font-extrabold text-foreground text-2xl md:text-3xl leading-tight">
              {t(season.title_en, season.title_ar)}
            </h3>

            <p className="text-noorly-text-2 leading-relaxed">
              {t(season.desc_en, season.desc_ar)}
            </p>

            <a
              href="#download"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-foreground rounded-pill transition-all duration-200 hover:scale-[1.04]"
              style={{ background: season.color }}
            >
              {t(season.cta_en, season.cta_ar)}
            </a>
          </div>

          {/* Icon side */}
          <div className="hidden md:flex items-center justify-center w-32 h-32 text-7xl geometric-pattern rounded-2xl shrink-0">
            {season.icon}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeasonalSection;
