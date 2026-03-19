'use client'

import { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LanguageContext } from '@/components/LanguageProvider'
import { translations } from '@/lib/translations'

export default function NewCasePage() {
  const { language } = useContext(LanguageContext)
  const t = translations[language]
  const router = useRouter()

  // Stato dei campi del form
  const [rentalCompany, setRentalCompany] = useState('')
  const [issueType, setIssueType] = useState('')
  const [country, setCountry] = useState('')
  const [pickupDate, setPickupDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [disputedAmount, setDisputedAmount] = useState('')
  const [userStatement, setUserStatement] = useState('')

  // Stato del submit
  const [success, setSuccess] = useState(false)

  // Gestione submit del form
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setSuccess(true)

    setTimeout(() => {
      router.push('/cases/mock-case-001/upload')
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              {t.newCase.pageTitle}
            </h1>
            <p className="mt-2 text-slate-600">{t.newCase.pageSubtitle}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="rentalCompany"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                {t.newCase.rentalCompany}
              </label>
              <input
                id="rentalCompany"
                type="text"
                value={rentalCompany}
                onChange={(e) => setRentalCompany(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                required
              />
            </div>

            <div>
              <label
                htmlFor="issueType"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                {t.newCase.issueType}
              </label>
              <select
                id="issueType"
                value={issueType}
                onChange={(e) => setIssueType(e.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                required
              >
                <option value="">{t.newCase.issueTypePlaceholder}</option>
                <option value="issue1">{t.newCase.issue1}</option>
                <option value="issue2">{t.newCase.issue2}</option>
                <option value="issue3">{t.newCase.issue3}</option>
                <option value="issue4">{t.newCase.issue4}</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="country"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                {t.newCase.country}
              </label>
              <input
                id="country"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                required
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label
                  htmlFor="pickupDate"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  {t.newCase.pickupDate}
                </label>
                <input
                  id="pickupDate"
                  type="date"
                  value={pickupDate}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="returnDate"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  {t.newCase.returnDate}
                </label>
                <input
                  id="returnDate"
                  type="date"
                  value={returnDate}
                  onChange={(e) => setReturnDate(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="disputedAmount"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                {t.newCase.disputedAmount}
              </label>
              <input
                id="disputedAmount"
                type="number"
                min="0"
                step="0.01"
                value={disputedAmount}
                onChange={(e) => setDisputedAmount(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                required
              />
            </div>

            <div>
              <label
                htmlFor="userStatement"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                {t.newCase.userStatement}
              </label>
              <textarea
                id="userStatement"
                value={userStatement}
                onChange={(e) => setUserStatement(e.target.value)}
                placeholder={t.newCase.userStatementPlaceholder}
                rows={5}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
                required
              />
            </div>

            {success && (
              <div className="mt-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-800">
                {t.newCase.successMessage}
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => router.push('/')}
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
              >
                {t.newCase.back}
              </button>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-800"
              >
                {t.newCase.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}