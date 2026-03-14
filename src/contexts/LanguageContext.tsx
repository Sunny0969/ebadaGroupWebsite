import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

type Language = "ja" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  ja: {
    "nav.about": "会社概要",
    "nav.services": "サービス",
    "nav.jobSeekers": "求職者の方へ",
    "nav.employers": "採用企業の方へ",
    "nav.sustainability": "サステナビリティ",
    "nav.news": "ニュース",
    "nav.careers": "採用情報",
    "nav.contact": "お問い合わせ",
    "common.home": "ホーム",
    "common.contact": "お問い合わせ",
    "common.search": "検索",
    "common.apply": "応募する",
    "common.learnMore": "詳細を見る",
  },
  en: {
    "nav.about": "About Us",
    "nav.services": "Services",
    "nav.jobSeekers": "For Job Seekers",
    "nav.employers": "For Employers",
    "nav.sustainability": "Sustainability",
    "nav.news": "News & Events",
    "nav.careers": "Careers",
    "nav.contact": "Contact Us",
    "common.home": "Home",
    "common.contact": "Contact",
    "common.search": "Search",
    "common.apply": "Apply",
    "common.learnMore": "Learn More",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    // Auto-detect from browser
    const browserLang = navigator.language.split("-")[0];
    if (browserLang === "ja") return "ja";
    return "en";
  });

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem("cdp-language", language);
  }, [language]);

  useEffect(() => {
    // Load from localStorage on mount
    const savedLang = localStorage.getItem("cdp-language") as Language;
    if (savedLang && (savedLang === "ja" || savedLang === "en")) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
