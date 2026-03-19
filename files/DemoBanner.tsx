"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

const bannerText = {
  it: {
    label: "VERSIONE DEMO",
    message:
      "Questa è una versione dimostrativa. Le analisi AI sono simulate e non costituiscono consulenza legale.",
    cta: "Scopri come funziona",
    close: "Chiudi",
  },
  de: {
    label: "DEMO-VERSION",
    message:
      "Dies ist eine Demo-Version. KI-Analysen sind simuliert und stellen keine Rechtsberatung dar.",
    cta: "So funktioniert es",
    close: "Schließen",
  },
  en: {
    label: "DEMO VERSION",
    message:
      "This is a demo version. AI analyses are simulated and do not constitute legal advice.",
    cta: "See how it works",
    close: "Dismiss",
  },
};

export default function DemoBanner() {
  const { language } = useLanguage();
  const [visible, setVisible] = useState(true);
  const t = bannerText[language as keyof typeof bannerText] ?? bannerText.en;

  if (!visible) return null;

  return (
    <div
      role="banner"
      aria-label="Demo version notice"
      className="relative w-full bg-amber-50 border-b border-amber-200"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Subtle left accent */}
      <div className="absolute inset-y-0 left-0 w-1 bg-amber-400" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 pl-6 flex items-center gap-3 flex-wrap">
        {/* Badge */}
        <span className="inline-flex items-center gap-1.5 shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
          </span>
          <span
            className="text-xs font-bold tracking-widest text-amber-700 uppercase"
            style={{ letterSpacing: "0.12em" }}
          >
            {t.label}
          </span>
        </span>

        {/* Divider */}
        <span className="hidden sm:block text-amber-300 text-sm">|</span>

        {/* Message */}
        <p className="text-xs sm:text-sm text-amber-800 flex-1 leading-snug">
          {t.message}
        </p>

        {/* CTA */}
        <a
          href="/come-funziona"
          className="shrink-0 text-xs font-semibold text-amber-700 underline underline-offset-2 hover:text-amber-900 transition-colors whitespace-nowrap"
        >
          {t.cta} →
        </a>

        {/* Close */}
        <button
          onClick={() => setVisible(false)}
          aria-label={t.close}
          className="shrink-0 text-amber-500 hover:text-amber-800 transition-colors p-0.5 rounded"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
}
