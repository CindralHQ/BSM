"use client";

import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import { localizedContent } from "@/lib/content";
import { dictionary, type Locale } from "@/lib/i18n";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: keyof typeof dictionary.en) => string;
  content: (typeof localizedContent)["en"];
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const requestedLocale = new URLSearchParams(window.location.search).get("lang");
    if (requestedLocale === "mr" || requestedLocale === "en") {
      setLocaleState(requestedLocale);
      document.documentElement.lang = requestedLocale;
      window.localStorage.setItem("bsm-locale", requestedLocale);
      return;
    }

    const stored = window.localStorage.getItem("bsm-locale");
    if (stored === "mr" || stored === "en") {
      setLocaleState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    window.localStorage.setItem("bsm-locale", nextLocale);
    document.documentElement.lang = nextLocale;
  };

  const value = useMemo<LocaleContextValue>(() => {
    return {
      locale,
      setLocale,
      t: (key) => dictionary[locale][key] || dictionary.en[key],
      content: localizedContent[locale]
    };
  }, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used inside LocaleProvider");
  }
  return context;
}
