'use client'

// /app/page.tsx

import Link from 'next/link'
import { useContext } from 'react'
import { LanguageContext } from '@/components/LanguageProvider'
import { translations } from '@/lib/translations'

export default function HomePage() {
  const { language } = useContext(LanguageContext)
  const t = translations[language]

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero section con messaggio principale e call to action */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-1 text-sm font-medium text-[#2563eb]">
            {t.homepage.badge}
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            {t.homepage.headline}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
            {t.homepage.subheadline}
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="/cases/new"
              className="rounded-xl bg-[#2563eb] px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              {t.homepage.cta}
            </Link>
          </div>

          <p className="mt-4 text-sm text-slate-500">{t.homepage.subtitle}</p>
        </div>
      </section>

      {/* Sezione esplicativa con i 3 passaggi principali */}
      <section
        id="come-funziona"
        className="border-t border-slate-200 bg-slate-50/60"
      >
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              {t.homepage.howItWorksTitle}
            </h2>
            <p className="mt-4 text-slate-600">
              {t.homepage.howItWorksSubtitle}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {/* Step 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-[#2563eb]">
                1
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {t.homepage.step1Title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {t.homepage.step1Desc}
              </p>
            </div>

            {/* Step 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-[#2563eb]">
                2
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {t.homepage.step2Title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {t.homepage.step2Desc}
              </p>
            </div>

            {/* Step 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-sm font-bold text-[#2563eb]">
                3
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {t.homepage.step3Title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {t.homepage.step3Desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer con disclaimer essenziale */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-6 text-center text-sm text-slate-500 md:px-8">
          {t.homepage.footer}
        </div>
      </footer>
    </main>
  )
}