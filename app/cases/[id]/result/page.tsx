'use client'

// /app/cases/[id]/result/page.tsx

import Link from 'next/link'
import { useContext, useMemo, useState } from 'react'
import { LanguageContext } from '@/components/LanguageProvider'
import {
  mockAnalysisIT,
  mockAnalysisDE,
  mockAnalysisEN,
} from '@/data/mockAnalysis'
import { translations } from '@/lib/translations'

export default function CaseResultPage() {
  /**
   * Leggiamo la lingua attuale dal context globale.
   */
  const { language } = useContext(LanguageContext)
  const t = translations[language]

  /**
   * Selezione del mock corretto in base alla lingua attiva.
   */
  const analysis = useMemo(() => {
    if (language === 'de') return mockAnalysisDE
    if (language === 'en') return mockAnalysisEN
    return mockAnalysisIT
  }, [language])

  /**
   * Stato locale per il feedback visivo dei pulsanti copia.
   */
  const [copiedField, setCopiedField] = useState<'formal' | 'short' | null>(
    null
  )

  /**
   * Copia il testo negli appunti e mostra feedback per 2 secondi.
   */
  const handleCopy = async (
    text: string,
    field: 'formal' | 'short'
  ): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedField(field)

      window.setTimeout(() => {
        setCopiedField(null)
      }, 2000)
    } catch {
      window.alert('Impossibile copiare il testo negli appunti.')
    }
  }

  /**
   * Placeholder temporaneo per il download PDF.
   */
  const handleDownloadPdf = (): void => {
    window.alert(t.result.pdfAlert)
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-5xl px-6 py-10 md:py-14">
        {/* Titolo pagina con badge stato */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              {t.result.pageTitle}
            </h1>
          </div>

          <span className="inline-flex w-fit items-center rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            {t.result.badge}
          </span>
        </div>

        {/* Sezione timeline */}
        <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            {t.result.timeline}
          </h2>
          <p className="mt-4 whitespace-pre-line leading-7 text-slate-700">
            {analysis.timelineSummary}
          </p>
        </section>

        {/* Sezione punti forti e deboli */}
        <section className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-green-900">
              {t.result.strengths}
            </h2>
            <ul className="mt-4 space-y-3">
              {analysis.strengths.map((item, index) => (
                <li
                  key={`strength-${index}`}
                  className="rounded-xl bg-white/70 px-4 py-3 text-sm leading-6 text-slate-800"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-red-200 bg-red-50 p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-red-900">
              {t.result.weaknesses}
            </h2>
            <ul className="mt-4 space-y-3">
              {analysis.weaknesses.map((item, index) => (
                <li
                  key={`weakness-${index}`}
                  className="rounded-xl bg-white/70 px-4 py-3 text-sm leading-6 text-slate-800"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Sezione prove mancanti */}
        <section className="mt-6 rounded-2xl border border-yellow-200 bg-yellow-50 p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-yellow-900">
            {t.result.missingEvidence}
          </h2>
          <ul className="mt-4 space-y-3">
            {analysis.missingEvidence.map((item, index) => (
              <li
                key={`missing-${index}`}
                className="rounded-xl bg-white/80 px-4 py-3 text-sm leading-6 text-slate-800"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Sezione prossimi passi */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">
            {t.result.nextSteps}
          </h2>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-slate-700">
            {analysis.nextSteps.map((item, index) => (
              <li key={`step-${index}`} className="pl-1 leading-7">
                {item}
              </li>
            ))}
          </ol>
        </section>

        {/* Sezione email formale */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-xl font-semibold text-slate-900">
              {t.result.formalEmail}
            </h2>

            <button
              type="button"
              onClick={() => handleCopy(analysis.complaintEmail, 'formal')}
              className="inline-flex items-center justify-center rounded-xl bg-[#2563eb] px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              {copiedField === 'formal' ? t.result.copied : t.result.copyEmail}
            </button>
          </div>

          <div className="mt-4 rounded-2xl bg-slate-100 p-5">
            <pre className="whitespace-pre-wrap font-sans text-sm leading-7 text-slate-800">
              {analysis.complaintEmail}
            </pre>
          </div>
        </section>

        {/* Sezione email breve */}
        <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-xl font-semibold text-slate-900">
              {t.result.shortEmail}
            </h2>

            <button
              type="button"
              onClick={() => handleCopy(analysis.shortEmail, 'short')}
              className="inline-flex items-center justify-center rounded-xl bg-[#2563eb] px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              {copiedField === 'short' ? t.result.copied : t.result.copyEmail}
            </button>
          </div>

          <div className="mt-4 rounded-2xl bg-slate-100 p-5">
            <pre className="whitespace-pre-wrap font-sans text-sm leading-7 text-slate-800">
              {analysis.shortEmail}
            </pre>
          </div>
        </section>

        {/* Bottoni finali */}
        <section className="mt-8 flex flex-col gap-4 md:flex-row md:items-center">
          <button
            type="button"
            onClick={handleDownloadPdf}
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
          >
            {t.result.downloadPdf}
          </button>

          <Link
            href="/cases/new"
            className="inline-flex items-center justify-center rounded-xl bg-[#2563eb] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            {t.result.newCase}
          </Link>
        </section>
      </section>
    </main>
  )
}