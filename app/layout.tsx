import type { Metadata } from 'next'
import './globals.css'
import LanguageProvider from '@/components/LanguageProvider'
import Header from '@/components/Header'
import DemoBanner from '@/components/DemoBanner'

export const metadata: Metadata = {
  title: 'ClaimPilot - Contesta addebiti ingiusti sul noleggio auto',
  description:
    'Carica i documenti, rispondi alle domande e ricevi una bozza di contestazione pronta in pochi minuti.',
  openGraph: {
    title: 'ClaimPilot',
    description: 'Contestazione addebiti noleggio auto',
    type: 'website',
  },
  twitter: {
    card: 'summary',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <LanguageProvider>
          <Header />
          <DemoBanner />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}