import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Come funziona | ClaimPilot",
  description: "Scopri come ClaimPilot ti aiuta a contestare addebiti ingiusti nei noleggi auto in 3 semplici passi.",
};

const steps = [
  { number: "01", icon: "📋", title: "Apri un caso", body: "Inserisci il paese di noleggio, la compagnia e una breve descrizione. Bastano 2 minuti." },
  { number: "02", icon: "📎", title: "Carica i documenti", body: "Contratto di noleggio, foto del veicolo, email della compagnia. Piu ne carichi, piu l'analisi e precisa." },
  { number: "03", icon: "⚖️", title: "Ottieni la tua analisi", body: "L'AI analizza il caso e genera una lettera di contestazione pronta all'uso." },
];

const faqs = [
  { q: "ClaimPilot fornisce consulenza legale?", a: "No. Le analisi AI sono indicative e non sostituiscono il parere di un avvocato." },
  { q: "I miei dati sono al sicuro?", a: "Si. I documenti sono trattati secondo il GDPR. Puoi richiedere la cancellazione in qualsiasi momento." },
  { q: "Quali compagnie sono supportate?", a: "Tutte. ClaimPilot funziona con qualsiasi compagnia di noleggio auto." },
];

export default function ComeFunziona() {
  return (
    <main>
      <section className="bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-black mb-5">
            Contesta un addebito in 3 passi
          </h1>
          <p className="text-lg text-slate-300">
            Nessun avvocato, nessuna burocrazia.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid sm:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="border border-slate-200 rounded-2xl p-6">
              <span className="block text-4xl font-black text-slate-100 mb-2">{step.number}</span>
              <div className="text-3xl mb-4">{step.icon}</div>
              <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500">{step.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a href="/cases/new" className="bg-blue-600 text-white font-semibold text-sm px-6 py-3 rounded-xl">
            Apri il tuo primo caso
          </a>
        </div>
      </section>

      <section className="bg-slate-50 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">Domande frequenti</h2>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details key={i} className="bg-white border border-slate-200 rounded-xl overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-sm text-slate-800">
                  {item.q}
                </summary>
                <div className="px-5 pb-4 text-sm text-slate-500 border-t border-slate-100 pt-3">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <div className="text-center py-8 text-xs text-slate-400">
        <a href="/privacy" className="underline">Privacy &amp; GDPR</a>
      </div>
    </main>
  );
}