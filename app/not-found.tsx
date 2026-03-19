'use client'

import Link from 'next/link'
import { useContext } from 'react'
import { LanguageContext } from '@/components/LanguageProvider'
import { translations } from '@/lib/translations'

export default function NotFoundPage() {
  const { language } = useContext(LanguageContext)
  const t = translations[language]

  return (
    <main className="min-h-screen bg-white flex items-center justify-center text-center px-4">
      <div>
        <div className="text-8xl font-bold text-[#2563eb]">404</div>
        <h1 className="text-2xl font-bold text-slate-900 mt-6">
          {t.notFound.title}
        </h1>
        <p className="text-slate-600 mt-3">
          {t.notFound.subtitle}
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#2563eb] px-5 py-3 font-medium text-white transition hover:opacity-90"
        >
          {t.notFound.back}
        </Link>
      </div>
    </main>
  )
}