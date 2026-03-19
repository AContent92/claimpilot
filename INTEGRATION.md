# ClaimPilot – Integration Guide
## Files delivered in this batch

```
components/
  DemoBanner.tsx      ← banner giallo "VERSIONE DEMO" dismissibile
  Header.tsx          ← header aggiornato con link "Come funziona"

app/
  come-funziona/
    page.tsx          ← pagina "Come funziona" (3 step + FAQ)
  privacy/
    page.tsx          ← Privacy Policy GDPR compliant

vercel.json           ← config deploy (region fra1 + security headers)
```

---

## 1. DemoBanner – come integrare

In `app/layout.tsx` (o direttamente in `app/page.tsx` se preferisci solo
sulla homepage), aggiungi il banner **sotto il `<Header />`**:

```tsx
// app/layout.tsx
import DemoBanner from "@/components/DemoBanner";
import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <Header />
        <DemoBanner />          {/* ← aggiunto */}
        <main>{children}</main>
      </body>
    </html>
  );
}
```

Se vuoi il banner **solo sulla homepage**, importalo in `app/page.tsx`
e inseriscilo come primo elemento del `<main>`.

---

## 2. Header – sostituzione

Sostituisci `components/Header.tsx` con il file consegnato.
Il link "Come funziona" è già cablato su `/come-funziona`.
Su mobile appare come sotto-barra sotto l'header principale.

---

## 3. Privacy link nel footer

Aggiungi il link alla privacy in ogni footer/page che ne ha bisogno:

```tsx
<a href="/privacy" className="text-xs text-slate-400 underline hover:text-slate-600">
  Privacy & GDPR
</a>
```

Il link è già presente nel footer di `come-funziona/page.tsx`.

---

## 4. Vercel – deploy

### Primo deploy
```bash
# Installa Vercel CLI se non presente
npm i -g vercel

# Dal root del progetto
vercel login
vercel --prod
```

### Variabili d'ambiente
Nel Vercel dashboard → Project → Settings → Environment Variables, aggiungi:

| Variabile                        | Valore                         | Ambiente       |
|----------------------------------|--------------------------------|----------------|
| `NEXT_PUBLIC_SUPABASE_URL`       | https://xxx.supabase.co        | Production     |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY`  | eyJ...                         | Production     |
| `NEXT_PUBLIC_APP_ENV`            | production                     | Production     |

### Region
Il `vercel.json` imposta `fra1` (Frankfurt) → latenza ottimale per utenti IT/DE.

---

## 5. Checklist GDPR minima pre-lancio

- [ ] Sostituire `privacy@claimpilot.app` con l'email reale del titolare
- [ ] Inserire la ragione sociale / P.IVA del titolare nella privacy policy
- [ ] Aggiungere banner cookie se integri analytics (es. Plausible o GA4)
- [ ] Verificare DPA con Supabase (già disponibile nel loro dashboard)
- [ ] Verificare DPA con Vercel (già disponibile nel loro dashboard)
- [ ] Aggiornare la data "lastUpdated" in `app/privacy/page.tsx`

---

## 6. Font (opzionale ma consigliato)

Il progetto usa `DM Sans`. Aggiungila in `app/layout.tsx`:

```tsx
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

// Nel body:
<body className={dmSans.variable}>
```

Poi sostituisci `fontFamily: "'DM Sans', sans-serif"` con
`fontFamily: "var(--font-dm-sans)"` nei componenti.
