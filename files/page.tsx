import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Come funziona | ClaimPilot",
  description:
    "Scopri come ClaimPilot ti aiuta a contestare addebiti ingiusti nei noleggi auto in 3 semplici passi.",
  alternates: {
    languages: {
      it: "/come-funziona",
      de: "/come-funziona",
      en: "/come-funziona",
    },
  },
};

// ─── Static content (server component – no useLanguage) ──────────────────────
// Trilingual content rendered server-side. Language-specific deep links
// are handled by anchor IDs so users can share /come-funziona#de etc.

const sections = {
  hero: {
    it: {
      eyebrow: "Come funziona",
      heading: "Contesta un addebito in\u00a03 passi",
      sub: "Nessun avvocato, nessuna burocrazia. Solo la documentazione giusta e un'analisi chiara.",
    },
    de: {
      eyebrow: "So funktioniert es",
      heading: "Eine Forderung in\u00a03 Schritten anfechten",
      sub: "Kein Anwalt, kein Papierkram. Nur die richtigen Dokumente und eine klare Analyse.",
    },
    en: {
      eyebrow: "How it works",
      heading: "Dispute a charge in\u00a03 steps",
      sub: "No lawyer, no bureaucracy. Just the right documents and a clear analysis.",
    },
  },
  steps: [
    {
      number: "01",
      icon: "📋",
      it: {
        title: "Apri un caso",
        body: "Inserisci il paese di noleggio, la compagnia e una breve descrizione dell'addebito. Bastano 2 minuti.",
      },
      de: {
        title: "Fall eröffnen",
        body: "Gib das Mietland, das Unternehmen und eine kurze Beschreibung der Forderung ein. Dauert nur 2 Minuten.",
      },
      en: {
        title: "Open a case",
        body: "Enter the rental country, company and a brief description of the charge. Takes just 2 minutes.",
      },
    },
    {
      number: "02",
      icon: "📎",
      it: {
        title: "Carica i documenti",
        body: "Contratto di noleggio, foto del veicolo, email della compagnia. Più ne carichi, più l'analisi è precisa.",
      },
      de: {
        title: "Dokumente hochladen",
        body: "Mietvertrag, Fahrzeugfotos, E-Mails der Gesellschaft. Je mehr du hochlädst, desto präziser die Analyse.",
      },
      en: {
        title: "Upload documents",
        body: "Rental contract, vehicle photos, company emails. The more you upload, the more precise the analysis.",
      },
    },
    {
      number: "03",
      icon: "⚖️",
      it: {
        title: "Ottieni la tua analisi",
        body: "L'AI analizza il caso, valuta la fondatezza dell'addebito e genera una lettera di contestazione pronta all'uso.",
      },
      de: {
        title: "Analyse erhalten",
        body: "Die KI analysiert den Fall, bewertet die Forderung und erstellt ein fertiges Widerspruchsschreiben.",
      },
      en: {
        title: "Get your analysis",
        body: "The AI analyses your case, evaluates the validity of the charge and generates a ready-to-send dispute letter.",
      },
    },
  ],
  faq: [
    {
      it: {
        q: "ClaimPilot fornisce consulenza legale?",
        a: "No. ClaimPilot è uno strumento di supporto documentale. Le analisi AI sono indicative e non sostituiscono il parere di un avvocato.",
      },
      de: {
        q: "Bietet ClaimPilot Rechtsberatung an?",
        a: "Nein. ClaimPilot ist ein Dokumentationsunterstützungstool. KI-Analysen sind indikativ und ersetzen keine anwaltliche Beratung.",
      },
      en: {
        q: "Does ClaimPilot provide legal advice?",
        a: "No. ClaimPilot is a document support tool. AI analyses are indicative and do not replace advice from a qualified lawyer.",
      },
    },
    {
      it: {
        q: "I miei dati sono al sicuro?",
        a: "Sì. I documenti sono trattati secondo il GDPR. Puoi richiedere la cancellazione dei tuoi dati in qualsiasi momento dalla pagina Privacy.",
      },
      de: {
        q: "Sind meine Daten sicher?",
        a: "Ja. Dokumente werden gemäß DSGVO verarbeitet. Du kannst jederzeit die Löschung deiner Daten auf der Datenschutzseite beantragen.",
      },
      en: {
        q: "Is my data safe?",
        a: "Yes. Documents are processed in accordance with GDPR. You can request deletion of your data at any time from the Privacy page.",
      },
    },
    {
      it: {
        q: "Quali compagnie di noleggio sono supportate?",
        a: "Tutte. ClaimPilot funziona con qualsiasi compagnia di noleggio auto, indipendentemente dal paese o dalla dimensione.",
      },
      de: {
        q: "Welche Mietfirmen werden unterstützt?",
        a: "Alle. ClaimPilot funktioniert mit jeder Autovermietung, unabhängig von Land oder Größe.",
      },
      en: {
        q: "Which rental companies are supported?",
        a: "All of them. ClaimPilot works with any car rental company, regardless of country or size.",
      },
    },
  ],
};

// ─── Component ─────────────────────────────────────────────────────────────

export default function ComeFunction() {
  // Server component renders IT by default.
  // Client-side language switching is handled by the Header language selector
  // which re-renders client components; this static page is SEO-friendly.
  const lang = "it"; // default; users with DE/EN arrive via normal nav

  const hero = sections.hero[lang];

  return (
    <main
      className="min-h-screen bg-white"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
        {/* Grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-6 py-20 text-center">
          <span className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-widest">
            {hero.eyebrow}
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-5 leading-tight">
            {hero.heading}
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            {hero.sub}
          </p>
        </div>
      </section>

      {/* ── Steps ─────────────────────────────────────────────────────────── */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-3 gap-8">
          {sections.steps.map((step) => {
            const s = step[lang];
            return (
              <div key={step.number} className="relative group">
                {/* Connector line (desktop) */}
                <div className="hidden sm:block absolute top-8 left-full w-full h-px bg-slate-200 -translate-x-4 z-0" />

                <div className="relative z-10 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  {/* Number */}
                  <span className="block text-4xl font-black text-slate-100 mb-2 select-none">
                    {step.number}
                  </span>
                  {/* Icon */}
                  <div className="text-3xl mb-4">{step.icon}</div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {s.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="/cases/new"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-sm transition-colors"
          >
            Apri il tuo primo caso
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
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Domande frequenti
          </h2>
          <div className="space-y-4">
            {sections.faq.map((item, i) => {
              const f = item[lang];
              return (
                <details
                  key={i}
                  className="group bg-white border border-slate-200 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer list-none font-semibold text-sm text-slate-800 hover:bg-slate-50 transition-colors">
                    {f.q}
                    <svg
                      className="shrink-0 ml-3 text-slate-400 group-open:rotate-180 transition-transform"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                    {f.a}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Footer note ───────────────────────────────────────────────────── */}
      <div className="text-center py-8 text-xs text-slate-400 px-4">
        ClaimPilot è un servizio dimostrativo.{" "}
        <a href="/privacy" className="underline hover:text-slate-600">
          Privacy & GDPR
        </a>
      </div>
    </main>
  );
}
