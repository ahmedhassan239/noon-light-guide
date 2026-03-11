import React, { createContext, useContext, useState, useCallback } from 'react';

type Lang = 'en' | 'ar';

interface LangContextType {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  setLang: (lang: Lang) => void;
  t: (en: string, ar: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  dir: 'ltr',
  setLang: () => {},
  t: (en) => en,
});

export const useLang = () => useContext(LangContext);

export const LangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>('en');

  const setLang = useCallback((newLang: Lang) => {
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    setLangState(newLang);
  }, []);

  const t = useCallback((en: string, ar: string) => lang === 'en' ? en : ar, [lang]);

  return (
    <LangContext.Provider value={{ lang, dir: lang === 'ar' ? 'rtl' : 'ltr', setLang, t }}>
      {children}
    </LangContext.Provider>
  );
};
