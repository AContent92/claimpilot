import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ClaimPilot",
  description:
    "Informativa sulla privacy e trattamento dei dati personali secondo il GDPR – ClaimPilot.",
  robots: { index: true, follow: false },
};

const lastUpdated = "2025-01-01";

export default function PrivacyPage() {
  return (
    <main
      className="min-h-screen bg-white"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* ── Header band ─────────────────────────────────────────────────── */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase text-slate-400">
              GDPR · Reg. UE 2016/679
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm">
            Ultimo aggiornamento:{" "}
            <time dateTime={lastUpdated}>
              {new Date(lastUpdated).toLocaleDateString("it-IT", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </p>
        </div>
      </div>

      {/* ── Body ────────────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 py-14 prose prose-slate prose-sm sm:prose-base max-w-none">
        {/* Language note */}
        <div className="not-prose mb-10 p-4 rounded-xl bg-blue-50 border border-blue-100 text-sm text-blue-800 flex gap-3">
          <span className="text-lg">🌐</span>
          <span>
            Questa informativa è disponibile in italiano. For English or German
            versions, please{" "}
            <a
              href="mailto:privacy@claimpilot.app"
              className="font-semibold underline"
            >
              contact us
            </a>
            .
          </span>
        </div>

        {/* ── 1. Titolare ─────────────────────────────────────────────── */}
        <Section number="1" title="Titolare del trattamento">
          <p>
            Il Titolare del trattamento è <strong>ClaimPilot</strong> (di
            seguito "Servizio"), raggiungibile all'indirizzo email{" "}
            <a href="mailto:privacy@claimpilot.app">privacy@claimpilot.app</a>.
          </p>
          <p>
            Nella versione attuale il Servizio è erogato a titolo dimostrativo
            (demo). I dati raccolti vengono trattati esclusivamente per testare
            le funzionalità del sistema.
          </p>
        </Section>

        {/* ── 2. Dati raccolti ─────────────────────────────────────────── */}
        <Section number="2" title="Dati personali raccolti">
          <p>Il Servizio raccoglie le seguenti categorie di dati:</p>
          <ul>
            <li>
              <strong>Dati di utilizzo automatici</strong>: indirizzo IP,
              browser, sistema operativo, pagine visitate, data e ora di
              accesso.
            </li>
            <li>
              <strong>Dati inseriti volontariamente</strong>: descrizione del
              caso, paese di noleggio, nome della compagnia.
            </li>
            <li>
              <strong>Documenti caricati</strong>: contratti di noleggio,
              fotografie del veicolo, comunicazioni email con la compagnia di
              noleggio. Questi documenti possono contenere dati personali (nome,
              indirizzo, dati di pagamento).
            </li>
          </ul>
          <div className="not-prose my-4 p-4 rounded-lg bg-amber-50 border border-amber-200 text-sm text-amber-800">
            ⚠️ <strong>Versione demo</strong>: in questa fase i documenti
            caricati non vengono analizzati da modelli AI reali né trasmessi a
            terze parti. L'analisi è simulata localmente.
          </div>
        </Section>

        {/* ── 3. Finalità e basi giuridiche ────────────────────────────── */}
        <Section number="3" title="Finalità del trattamento e basi giuridiche">
          <table>
            <thead>
              <tr>
                <th>Finalità</th>
                <th>Base giuridica (art. GDPR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Erogare il servizio richiesto</td>
                <td>Art. 6(1)(b) – esecuzione di un contratto</td>
              </tr>
              <tr>
                <td>Sicurezza e prevenzione frodi</td>
                <td>Art. 6(1)(f) – legittimo interesse</td>
              </tr>
              <tr>
                <td>Miglioramento del servizio (anonimizzato)</td>
                <td>Art. 6(1)(f) – legittimo interesse</td>
              </tr>
              <tr>
                <td>Adempimenti legali</td>
                <td>Art. 6(1)(c) – obbligo legale</td>
              </tr>
            </tbody>
          </table>
        </Section>

        {/* ── 4. Conservazione ─────────────────────────────────────────── */}
        <Section number="4" title="Periodo di conservazione">
          <ul>
            <li>
              <strong>Dati di utilizzo</strong>: massimo 90 giorni, poi
              eliminati automaticamente.
            </li>
            <li>
              <strong>Dati dei casi</strong>: conservati per 12 mesi dalla
              creazione, salvo diversa richiesta dell'utente.
            </li>
            <li>
              <strong>Documenti caricati</strong>: eliminati entro 30 giorni
              dalla chiusura del caso o su richiesta immediata.
            </li>
          </ul>
        </Section>

        {/* ── 5. Condivisione dati ─────────────────────────────────────── */}
        <Section number="5" title="Condivisione e trasferimento dei dati">
          <p>
            I dati non vengono venduti né ceduti a terzi per finalità
            pubblicitarie. Il Servizio si avvale dei seguenti sub-responsabili:
          </p>
          <ul>
            <li>
              <strong>Supabase Inc.</strong> (USA) – database e autenticazione.
              Trasferimento coperto da Standard Contractual Clauses (SCC) ex
              art. 46 GDPR.
            </li>
            <li>
              <strong>Vercel Inc.</strong> (USA) – hosting e CDN. Trasferimento
              coperto da SCC.
            </li>
          </ul>
          <p>
            Non vengono effettuati trasferimenti verso paesi privi di adeguate
            garanzie oltre quelli sopra elencati.
          </p>
        </Section>

        {/* ── 6. Diritti degli interessati ────────────────────────────── */}
        <Section number="6" title="Diritti degli interessati">
          <p>In qualità di interessato, hai il diritto di:</p>
          <ul>
            <li>
              <strong>Accesso</strong> (art. 15): ottenere copia dei dati che ti
              riguardano.
            </li>
            <li>
              <strong>Rettifica</strong> (art. 16): correggere dati inesatti.
            </li>
            <li>
              <strong>Cancellazione</strong> (art. 17): richiedere la
              cancellazione ("diritto all'oblio").
            </li>
            <li>
              <strong>Limitazione</strong> (art. 18): limitare il trattamento in
              determinati casi.
            </li>
            <li>
              <strong>Portabilità</strong> (art. 20): ricevere i dati in formato
              strutturato.
            </li>
            <li>
              <strong>Opposizione</strong> (art. 21): opporti al trattamento
              basato su legittimo interesse.
            </li>
          </ul>
          <p>
            Per esercitare i tuoi diritti, scrivi a{" "}
            <a href="mailto:privacy@claimpilot.app">privacy@claimpilot.app</a>.
            Risponderemo entro 30 giorni. Hai inoltre il diritto di proporre
            reclamo all'autorità di controllo competente (in Italia:{" "}
            <a
              href="https://www.garanteprivacy.it"
              target="_blank"
              rel="noopener noreferrer"
            >
              Garante per la protezione dei dati personali
            </a>
            ).
          </p>
        </Section>

        {/* ── 7. Cookie ────────────────────────────────────────────────── */}
        <Section number="7" title="Cookie e tecnologie di tracciamento">
          <p>
            Il Servizio utilizza esclusivamente cookie tecnici necessari al
            funzionamento (sessione, preferenze lingua). Non vengono utilizzati
            cookie di profilazione o pubblicitari.
          </p>
          <p>
            I cookie tecnici non richiedono consenso ai sensi dell'art. 122
            Codice Privacy e del Provvedimento del Garante dell'8 maggio 2014.
          </p>
        </Section>

        {/* ── 8. Sicurezza ─────────────────────────────────────────────── */}
        <Section number="8" title="Misure di sicurezza">
          <p>
            I dati sono protetti tramite cifratura TLS in transito e
            cifratura a riposo (AES-256). L'accesso è limitato al personale
            tecnico strettamente necessario. In caso di violazione dei dati
            (data breach) gli interessati saranno notificati nei tempi previsti
            dall'art. 34 GDPR.
          </p>
        </Section>

        {/* ── 9. Modifiche ─────────────────────────────────────────────── */}
        <Section number="9" title="Modifiche alla presente informativa">
          <p>
            La presente informativa può essere aggiornata. Le modifiche
            sostanziali saranno comunicate tramite avviso nella homepage o via
            email (se disponibile). La data di "Ultimo aggiornamento" in cima
            alla pagina indica la versione vigente.
          </p>
        </Section>
      </div>

      {/* ── Back link ───────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 pb-16">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors"
        >
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
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Torna alla homepage
        </a>
      </div>
    </main>
  );
}

// ─── Helper ──────────────────────────────────────────────────────────────────
function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="flex items-baseline gap-3 text-lg font-bold text-slate-900 mb-3 pb-2 border-b border-slate-100">
        <span className="text-blue-500 font-black text-base">{number}.</span>
        {title}
      </h2>
      <div className="text-slate-600 leading-relaxed space-y-3">{children}</div>
    </section>
  );
}
