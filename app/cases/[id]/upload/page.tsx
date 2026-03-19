'use client'

import { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LanguageContext } from '@/components/LanguageProvider'
import { translations } from '@/lib/translations'

export default function UploadPage() {
  const { language } = useContext(LanguageContext)
  const t = translations[language]
  const router = useRouter()

  // Stato dei file selezionati
  const [contractFile, setContractFile] = useState<File | null>(null)
  const [invoiceFile, setInvoiceFile] = useState<File | null>(null)
  const [damageReportFile, setDamageReportFile] = useState<File | null>(null)
  const [pickupPhotosFile, setPickupPhotosFile] = useState<File | null>(null)
  const [returnPhotosFile, setReturnPhotosFile] = useState<File | null>(null)
  const [emailsFile, setEmailsFile] = useState<File | null>(null)

  // Stato del submit
  const [success, setSuccess] = useState(false)

  // Gestione del click su continua
  const handleContinue = () => {
    setSuccess(true)

    setTimeout(() => {
      router.push('/cases/mock-case-001/questionnaire')
    }, 1500)
  }

  // Card singola per ogni documento
  const UploadCard = ({
    title,
    description,
    file,
    onChange,
  }: {
    title: string
    description: string
    file: File | null
    onChange: (file: File | null) => void
  }) => (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{description}</p>

      <div className="mt-4 rounded-xl border-2 border-dashed border-slate-300 px-4 py-6 text-center">
        <p className="mb-3 text-sm text-slate-600">{t.uploadDocuments.uploadPrompt}</p>

        <label className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800">
          <input
            type="file"
            className="hidden"
            onChange={(e) => onChange(e.target.files?.[0] ?? null)}
          />
          {file ? t.uploadDocuments.fileSelected : t.uploadDocuments.step1}
        </label>

        {file && (
          <p className="mt-3 text-sm text-green-700">
            {t.uploadDocuments.fileSelected}: {file.name}
          </p>
        )}
      </div>
    </div>
  )

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            {t.uploadDocuments.pageTitle}
          </h1>
          <p className="mt-2 text-slate-600">{t.uploadDocuments.pageSubtitle}</p>
        </div>

        <div className="mb-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-800">{t.uploadDocuments.step1}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-800">{t.uploadDocuments.step2}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-sm font-medium text-slate-800">{t.uploadDocuments.step3}</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <UploadCard
            title={t.uploadDocuments.contract}
            description={t.uploadDocuments.contractDesc}
            file={contractFile}
            onChange={setContractFile}
          />

          <UploadCard
            title={t.uploadDocuments.invoice}
            description={t.uploadDocuments.invoiceDesc}
            file={invoiceFile}
            onChange={setInvoiceFile}
          />

          <UploadCard
            title={t.uploadDocuments.damageReport}
            description={t.uploadDocuments.damageReportDesc}
            file={damageReportFile}
            onChange={setDamageReportFile}
          />

          <UploadCard
            title={t.uploadDocuments.pickupPhotos}
            description={t.uploadDocuments.pickupPhotosDesc}
            file={pickupPhotosFile}
            onChange={setPickupPhotosFile}
          />

          <UploadCard
            title={t.uploadDocuments.returnPhotos}
            description={t.uploadDocuments.returnPhotosDesc}
            file={returnPhotosFile}
            onChange={setReturnPhotosFile}
          />

          <UploadCard
            title={t.uploadDocuments.emails}
            description={t.uploadDocuments.emailsDesc}
            file={emailsFile}
            onChange={setEmailsFile}
          />
        </div>

        {success && (
          <div className="mt-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-800">
            {t.uploadDocuments.successMessage}
          </div>
        )}

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => router.push('/cases/new')}
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
          >
            {t.uploadDocuments.back}
          </button>

          <button
            type="button"
            onClick={handleContinue}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:bg-slate-800"
          >
            {t.uploadDocuments.continue}
          </button>
        </div>
      </div>
    </main>
  )
}