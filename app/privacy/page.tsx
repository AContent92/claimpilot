import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ClaimPilot",
  description: "Informativa sulla privacy e trattamento dei dati personali secondo il GDPR.",
};

export default function PrivacyPage() {
  return (
    <main style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <div className="bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-slate-400">
            GDPR · Reg. UE 2016/679
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight mt-3 mb-3">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm">Ultimo aggiornamento: 1 gennaio 2025</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-14 space-y-10 text-slate-600 text-sm leading-relaxed">
        <Section number="1" title="Titolare del trattamento">
          Il Titolare del trattamento è <strong>ClaimPilot</strong>, raggiungibile a{" "}
          <a href="mailto:allmotivationalspace@gmail.com" className="text-blue-600 underline">allmotivationalspace@gmail.com</a>.
          Nella versione attuale il Servizio è erogato a titolo dimostrativo (demo).
        </Section>

        <Section number="2" title="Dati personali raccolti">
          Il Servizio raccoglie: dati di utilizzo automatici (IP, browser, pagine visitate),
          dati inseriti volontariamente (descrizione caso, paese, compagnia) e documenti caricati
          (contratti, foto, email) che possono contenere dati personali.
          <div className="mt-3 p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-800">
            ⚠️ <strong>Versione demo</strong>: i documenti non vengono analizzati da AI reali né trasmessi a terze parti.
          </div>
        </Section>

        <Section number="3" title="Finalità e basi giuridiche">
          Erogazione del servizio (art. 6(1)(b)), sicurezza e prevenzione frodi (art. 6(1)(f)),
          miglioramento del servizio anonimizzato (art. 6(1)(f)), adempimenti legali (art. 6(1)(c)).
        </Section>

        <Section number="4" title="Periodo di conservazione">
          Dati di utilizzo: max 90 giorni. Dati dei casi: 12 mesi dalla creazione.
          Documenti caricati: eliminati entro 30 giorni dalla chiusura del caso o su richiesta immediata.
        </Section>

        <Section number="5" title="Sub-responsabili del trattamento">
          <strong>Supabase Inc.</strong> (USA) – database e autenticazione, coperto da SCC ex art. 46 GDPR.{" "}
          <strong>Vercel Inc.</strong> (USA) – hosting e CDN, coperto da SCC.
        </Section>

        <Section number="6" title="Diritti degli interessati">
          Hai diritto di accesso (art. 15), rettifica (art. 16), cancellazione (art. 17),
          limitazione (art. 18), portabilità (art. 20) e opposizione (art. 21).
          Scrivi a{" "}
          <a href="mailto:allmotivationalspace@gmail.com" className="text-blue-600 underline">allmotivationalspace@gmail.com</a>.
          Puoi inoltre proporre reclamo al{" "}
          <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            Garante per la protezione dei dati personali
          </a>.
        </Section>

        <Section number="7" title="Cookie">
          Utilizziamo esclusivamente cookie tecnici necessari al funzionamento.
          Nessun cookie di profilazione o pubblicitario.
        </Section>

        <Section number="8" title="Sicurezza">
          I dati sono protetti tramite cifratura TLS in transito e AES-256 a riposo.
        </Section>
      </div>

      <div className="max-w-3xl mx-auto px-6 pb-16">
        <a href="/" className="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">
          ← Torna alla homepage
        </a>
      </div>
    </main>
  );
}

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="flex items-baseline gap-2 text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
        <span className="text-blue-500 font-black">{number}.</span>
        {title}
      </h2>
      <div>{children}</div>
    </section>
  );
}