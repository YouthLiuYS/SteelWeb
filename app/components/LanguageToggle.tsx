"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/content/siteData";

const STORAGE_KEY = "site-locale";

function isLocale(value: string | null): value is Locale {
  return value === "zh" || value === "en";
}

function applyLocale(locale: Locale) {
  if (typeof document === "undefined") {
    return;
  }
  document.documentElement.dataset.lang = locale;
  document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
}

export default function LanguageToggle() {
  const [locale, setLocale] = useState<Locale>("zh");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) {
      setLocale(stored);
      applyLocale(stored);
      return;
    }

    const browserLang = navigator.language.toLowerCase();
    const defaultLocale: Locale = browserLang.startsWith("en") ? "en" : "zh";
    setLocale(defaultLocale);
    applyLocale(defaultLocale);
  }, []);

  const handleSwitch = (nextLocale: Locale) => {
    setLocale(nextLocale);
    localStorage.setItem(STORAGE_KEY, nextLocale);
    applyLocale(nextLocale);
  };

  return (
    <div className="lang-toggle" role="group" aria-label="Language switch">
      <button
        type="button"
        className={locale === "zh" ? "active" : ""}
        onClick={() => handleSwitch("zh")}
      >
        中文
      </button>
      <button
        type="button"
        className={locale === "en" ? "active" : ""}
        onClick={() => handleSwitch("en")}
      >
        EN
      </button>
    </div>
  );
}
