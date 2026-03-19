'use client'

// /app/cases/[id]/questionnaire/page.tsx

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useContext, useState } from 'react'
import { LanguageContext } from '@/components/LanguageProvider'
import { translations } from '@/lib/translations'

type YesNoAnswer = 'yes' | 'no' | null

export default function QuestionnairePage() {
  const router = useRouter()
  const { language } = useContext(LanguageContext)
  const t = translations[language]

  // Stato locale delle risposte sì/no
  const [pickupPhotos, setPickupPhotos] = useState<YesNoAnswer>(null)
  const [returnPhotos, setReturnPhotos] = useState<YesNoAnswer>(null)
  const [signedAtReturn, setSignedAtReturn] = useState<YesNoAnswer>(null)
  const [contactedCompany, setContactedCompany] = useState<YesNoAnswer>(null)
  const [writtenCharge, setWrittenCharge] = useState<YesNoAnswer>(null)

  // Stato dei campi testuali
  const [chargeReceivedWhen, setChargeReceivedWhen] = useState('')
  const [userVersion, setUserVersion] = useState('')

  /**
   * Componente riutilizzabile per le risposte sì/no.
   * Evidenzia in blu la scelta selezionata.
   */
  const YesNoButtons = ({
    value,
    onChange,
  }: {
    value: YesNoAnswer
    onChange: (value: YesNoAnswer) => void
  }) => (
    <div className="flex gap-3">
      <button
        type="button"
        onClick={() => onChange('yes')}
        className={`rounded-xl border px-5 py-2.5 text-sm font-medium transition ${
          value === 'yes'
            ? 'border-[#2563eb] bg-[#2563eb] text-white'
            : 'border-slate-300 bg-white text-slate-700 hover:border-[#2563eb] hover:text-[#2563eb]'
        }`}
      >
        {t.questionnaire.yes}
      </button>

      <button
        type="button"
        onClick={() => onChange('no')}
        className={`rounded-xl border px-5 py-2.5 text-sm font-medium transition ${
          value === 'no'
            ? 'border-[#2563eb] bg-[#2563eb] text-white'
            : 'border-slate-300 bg-white text-slate-700 hover:border-[#2563eb] hover:text-[#2563eb]'
        }`}
      >
        {t.questionnaire.no}
      </button>
    </div>
  )

  /**
   * Per ora il bottone porta direttamente alla pagina risultato mock.
   */
  const handleAnalyze = () => {
    router.push('/cases/mock-case-001/result')
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-4xl px-6 py-10 md:py-14">
        {/* Titolo pagina */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {t.questionnaire.pageTitle}
          </h1>
          <p className="mt-3 text-base text-slate-600">
            {t.questionnaire.pageSubtitle}
          </p>
        </div>

        {/* Indicatore di progresso */}
        <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 md:p-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-sm font-semibold text-slate-700">
                1
              </span>
              <span className="text-sm font-medium text-slate-600">
                {translations[language].uploadDocuments.step1}
              </span>
            </div>

            <div className="hidden h-px flex-1 bg-slate-200 md:block" />

            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-sm font-semibold text-slate-700">
                2
              </span>
              <span className="text-sm font-medium text-slate-600">
                {translations[language].uploadDocuments.step2}
              </span>
            </div>

            <div className="hidden h-px flex-1 bg-slate-200 md:block" />

            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2563eb] text-sm font-semibold text-white">
                3
              </span>
              <span className="text-sm font-semibold text-[#2563eb]">
                {translations[language].uploadDocuments.step3}
              </span>
            </div>
          </div>
        </div>

        {/* Elenco domande in card separate */}
        <div className="mt-8 space-y-5">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">
              {t.questionnaire.q1}
            </h2>
            <div className="mt-4">
              <YesNoButtons value={pickupPhotos} onChange={setPickupPhotos} />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">
              {t.questionnaire.q2}
            </h2>
            <div className="mt-4">
              <YesNoButtons value={returnPhotos} onChange={setReturnPhotos} />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">
              {t.questionnaire.q3}
            </h2>
            <div className="mt-4">
              <YesNoButtons value={signedAtReturn} onChange={setSignedAtReturn} />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">
              {t.questionnaire.q4}
            </h2>
            <div className="mt-4">
              <YesNoButtons
                value={contactedCompany}
                onChange={setContactedCompany}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-base font-semibold text-slate-900">
              {t.questionnaire.q5}
            </h2>

            <div className="mt-4">
              <YesNoButtons value={writtenCharge} onChange={setWrittenCharge} />
            </div>

            {writtenCharge === 'yes' ? (
              <div className="mt-5">
                <label
                  htmlFor="chargeReceivedWhen"
                  className="mb-2 block text-sm font-medium text-slate-800"
                >
                  {t.questionnaire.q5followup}
                </label>
                <input
                  id="chargeReceivedWhen"
                  type="text"
                  value={chargeReceivedWhen}
                  onChange={(event) => setChargeReceivedWhen(event.target.value)}
                  placeholder="Es. il giorno dopo via email"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100"
                />
              </div>
            ) : null}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <label
              htmlFor="userVersion"
              className="block text-base font-semibold text-slate-900"
            >
              {t.questionnaire.q6}
            </label>
            <textarea
              id="userVersion"
              rows={6}
              value={userVersion}
              onChange={(event) => setUserVersion(event.target.value)}
              placeholder={t.questionnaire.q6placeholder}
              className="mt-4 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#2563eb] focus:ring-2 focus:ring-blue-100"
            />
          </div>
        </div>

        {/* Azioni finali */}
        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Link
            href="/cases/mock-case-001/upload"
            className="text-sm font-medium text-slate-600 transition hover:text-[#2563eb]"
          >
            {t.questionnaire.back}
          </Link>

          <button
            type="button"
            onClick={handleAnalyze}
            className="inline-flex items-center justify-center rounded-xl bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            {t.questionnaire.analyze}
          </button>
        </div>
      </section>
    </main>
  )
}