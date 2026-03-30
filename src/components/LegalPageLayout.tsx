import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLang } from '@/contexts/LangContext';

interface LegalPageLayoutProps {
  titleEn: string;
  titleAr: string;
  children: React.ReactNode;
}

const LegalPageLayout: React.FC<LegalPageLayoutProps> = ({ titleEn, titleAr, children }) => {
  const { lang, setLang, t, dir } = useLang();
  const navigate = useNavigate();

  useEffect(() => {
    const browserLang = navigator.language?.toLowerCase();
    if (browserLang?.startsWith('ar')) {
      setLang('ar');
    }
  }, []);

  const BackArrow = dir === 'rtl' ? ArrowRight : ArrowLeft;

  return (
    <div className="min-h-screen bg-noorly-navy-deep text-foreground" dir={dir}>
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border backdrop-blur-md bg-noorly-navy-deep/90">
        <div className="max-w-2xl mx-auto flex items-center justify-between px-4 py-3">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1.5 text-noorly-text-2 hover:text-foreground transition-colors text-sm"
          >
            <BackArrow className="w-4 h-4" />
            <span>{t('Back', 'رجوع')}</span>
          </button>

          <h1 className="font-semibold text-base text-foreground">
            {t(titleEn, titleAr)}
          </h1>

          <button
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="text-xs font-medium px-3 py-1.5 rounded-full border border-noorly-gold/30 text-noorly-gold hover:bg-noorly-gold/10 transition-colors"
          >
            {lang === 'en' ? 'AR' : 'EN'}
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 text-center">
        <p className="text-noorly-text-3 text-sm">
          {t('Made with care for new Muslims 🤍', 'صُنع بعناية للمسلمين الجدد 🤍')}
        </p>
      </footer>
    </div>
  );
};

export default LegalPageLayout;

export const Section: React.FC<{ titleEn: string; titleAr: string; children: React.ReactNode }> = ({
  titleEn,
  titleAr,
  children,
}) => {
  const { t } = useLang();
  return (
    <div className="rounded-2xl border border-border bg-noorly-surface p-5 space-y-3">
      <h2 className="text-noorly-gold font-semibold text-lg">{t(titleEn, titleAr)}</h2>
      <div className="text-noorly-text-2 text-sm leading-relaxed space-y-2">{children}</div>
    </div>
  );
};

export const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-1.5 ps-4">
    {items.map((item, i) => (
      <li key={i} className="list-disc text-noorly-text-2 text-sm">{item}</li>
    ))}
  </ul>
);
