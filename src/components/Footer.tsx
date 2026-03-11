import React from 'react';
import { useLang } from '@/contexts/LangContext';

const Footer: React.FC = () => {
  const { t } = useLang();

  return (
    <footer className="relative z-10 border-t border-border py-10 px-6 md:px-12">
      <div className="max-w-noorly mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-noorly-text-3 text-sm">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span>🌙</span>
          <span className="font-body font-bold text-foreground">NooRly</span>
          <span className="font-amiri text-noorly-gold">نورلي</span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          {[
            { href: '#about', en: 'About', ar: 'حول' },
            { href: '#features', en: 'Features', ar: 'المميزات' },
            { href: '#journey', en: 'Journey', ar: 'الرحلة' },
            { href: '#download', en: 'Download', ar: 'تحميل' },
          ].map(link => (
            <a key={link.href} href={link.href} className="hover:text-noorly-text-2 transition-colors">
              {t(link.en, link.ar)}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p>
          {t('© 2025 NooRly · Made with 🤍 for new Muslims everywhere', '© ٢٠٢٥ نورلي · صُنع بـ 🤍 للمسلمين الجدد في كل مكان')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
