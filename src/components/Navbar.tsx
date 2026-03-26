import React, { useState, useEffect } from 'react';
import { useLang } from '@/contexts/LangContext';

const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about', en: 'About', ar: 'حول' },
    { href: '#features', en: 'Features', ar: 'المميزات' },
    { href: '#journey', en: 'Journey', ar: 'الرحلة' },
    { href: '#support', en: 'Support', ar: 'الدعم' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-noorly-navy-deep/95' : 'bg-noorly-navy-deep/80'
      } backdrop-blur-xl`}
      style={{ borderBottom: '1px solid rgba(201,168,76,0.15)' }}
    >
      <div className="max-w-noorly mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="text-lg">🌙</span>
          <span className="font-body font-bold text-foreground animate-noorly-reveal">
            {t('NooR', 'نور')}
            <span className="text-noorly-orange">{t('ly', 'لي')}</span>
          </span>
        </a>

        {/* Links - hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-noorly-text-2 hover:text-foreground transition-colors duration-200"
            >
              {t(link.en, link.ar)}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div className="flex items-center bg-noorly-surface-2 rounded-pill p-[3px] border border-border">
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 text-xs font-semibold rounded-pill transition-all duration-250 font-arabic-ui ${
                lang === 'en'
                  ? 'bg-noorly-orange text-noorly-navy-deep shadow-[0_2px_12px_rgba(245,166,35,0.3)]'
                  : 'text-noorly-text-3 hover:text-noorly-text-2'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('ar')}
              className={`px-3 py-1 text-xs font-semibold rounded-pill transition-all duration-250 font-arabic-ui ${
                lang === 'ar'
                  ? 'bg-noorly-orange text-noorly-navy-deep shadow-[0_2px_12px_rgba(245,166,35,0.3)]'
                  : 'text-noorly-text-3 hover:text-noorly-text-2'
              }`}
            >
              ع
            </button>
          </div>

          {/* CTA */}
          <a
            href="#download"
            className="hidden sm:inline-flex items-center px-5 py-2 text-sm font-medium bg-noorly-orange text-noorly-navy-deep rounded-pill transition-transform duration-200 hover:scale-[1.04]"
          >
            {t('Download Free', 'تحميل مجاني')}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
