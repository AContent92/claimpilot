"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";

const navText = {
  it: { howItWorks: "Come funziona", newCase: "Nuovo caso" },
  de: { howItWorks: "So funktioniert's", newCase: "Neuer Fall" },
  en: { howItWorks: "How it works", newCase: "New case" },
};

const languages = [
  { code: "it", label: "IT" },
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
];

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const pathname = usePathname();
  const t = navText[language as keyof typeof navText] ?? navText.en;

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group shrink-0"
          aria-label="ClaimPilot – Home"
        >
          {/* Icon */}
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 shadow-sm group-hover:bg-blue-700 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </span>
          {/* Wordmark */}
          <span className="text-[15px] font-bold tracking-tight text-slate-900">
            Claim<span className="text-blue-600">Pilot</span>
          </span>
        </Link>

        {/* Nav + Language */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* How it works */}
          <Link
            href="/come-funziona"
            className={`hidden sm:inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
              isActive("/come-funziona")
                ? "bg-blue-50 text-blue-700"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            {t.howItWorks}
          </Link>

          {/* New case CTA */}
          <Link
            href="/cases/new"
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-semibold transition-colors ${
              isActive("/cases/new")
                ? "bg-blue-700 text-white"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span className="hidden xs:inline">{t.newCase}</span>
          </Link>

          {/* Divider */}
          <span className="hidden sm:block h-5 w-px bg-slate-200 mx-1" />

          {/* Language switcher */}
          <div className="flex items-center gap-0.5">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code as "it" | "de" | "en")}
                aria-label={`Switch to ${lang.code.toUpperCase()}`}
                className={`px-2 py-1 rounded text-xs font-semibold tracking-wide uppercase transition-colors ${
                  language === lang.code
                    ? "bg-slate-900 text-white"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: how it works bar */}
      <div className="sm:hidden border-t border-slate-100 px-4 py-1.5 flex items-center gap-2">
        <Link
          href="/come-funziona"
          className="text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors"
        >
          {t.howItWorks} →
        </Link>
      </div>
    </header>
  );
}
