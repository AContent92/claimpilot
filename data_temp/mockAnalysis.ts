// /data/mockAnalysis.ts

import type { CaseAnalysis } from '../lib/types'

export const mockAnalysisIT: CaseAnalysis = {
  id: 'mock-it-001',
  caseId: 'mock-case-001',
  timelineSummary:
    "Il veicolo è stato ritirato presso Europcar in Italia il 10/03/2024 e riconsegnato il 17/03/2024. Successivamente, al cliente è stato contestato un graffio sul paraurti con un addebito di €340. L’utente sostiene che il danno fosse già presente oppure che non vi sia prova sufficiente che sia stato causato durante il periodo di noleggio. La valutazione del caso dipende quindi dalla coerenza tra report di consegna, eventuali fotografie e comunicazioni inviate dalla società.",
  strengths: [
    "Le date di ritiro e riconsegna sono chiare e permettono una ricostruzione precisa della sequenza degli eventi.",
    "L’addebito è specifico sia nell’importo sia nella natura del danno, rendendo la contestazione ben circoscritta.",
    "La presenza di eventuali foto del veicolo al ritiro o alla riconsegna può rafforzare in modo significativo la posizione del cliente."
  ],
  weaknesses: [
    "Se mancano immagini nitide del paraurti al momento del ritiro, potrebbe essere difficile dimostrare che il danno fosse preesistente.",
    "Se il cliente non ha contestato immediatamente il danno al momento della riconsegna, la società potrebbe usare questo elemento contro di lui."
  ],
  missingEvidence: [
    "Copia del report di check-out/check-in con indicazione dettagliata dei danni preesistenti.",
    "Fotografie complete e datate del paraurti scattate sia al ritiro sia alla riconsegna del veicolo."
  ],
  nextSteps: [
    "Raccogliere in un unico fascicolo contratto di noleggio, fattura, report danni, email e fotografie disponibili.",
    "Inviare una contestazione scritta formale chiedendo le prove che collegano il danno al periodo di utilizzo del veicolo.",
    "Richiedere copia delle immagini originali, dei timestamp e del report ispettivo utilizzato per giustificare l’addebito."
  ],
  complaintEmail: `Oggetto: Contestazione formale addebito danno – Noleggio Europcar dal 10/03/2024 al 17/03/2024

Gentile Servizio Clienti Europcar,

con la presente desidero contestare formalmente l’addebito di €340 relativo a un presunto graffio sul paraurti del veicolo da me noleggiato in Italia dal 10/03/2024 al 17/03/2024.

Ritengo che l’addebito non sia stato adeguatamente dimostrato. Vi chiedo pertanto di trasmettermi copia completa della documentazione a supporto, incluse fotografie datate del veicolo, report di ispezione al ritiro e alla riconsegna, nonché ogni altro elemento utile a provare che il danno sia sorto durante il mio periodo di utilizzo.

In assenza di tale documentazione, vi invito a sospendere e riesaminare l’addebito applicato. Resto disponibile a condividere eventuali materiali in mio possesso, comprese fotografie e comunicazioni relative al noleggio.

In attesa di un vostro riscontro scritto entro un termine ragionevole, porgo cordiali saluti.`,
  shortEmail: `Oggetto: Contestazione addebito danno Europcar

Gentile Europcar,
contesto l’addebito di €340 per il presunto graffio sul paraurti relativo al noleggio dal 10/03/2024 al 17/03/2024. Vi chiedo di inviarmi fotografie datate, report di ispezione e prove concrete che dimostrino che il danno sia avvenuto durante il mio utilizzo del veicolo.
Cordiali saluti.`,
  createdAt: '2024-03-18T10:00:00Z'
}

export const mockAnalysisDE: CaseAnalysis = {
  id: 'mock-de-001',
  caseId: 'mock-case-001',
  timelineSummary:
    "Das Fahrzeug wurde am 10.03.2024 in Italien bei Europcar übernommen und am 17.03.2024 zurückgegeben. Im Anschluss wurde dem Kunden ein Kratzer an der Stoßstange mit einer Belastung von 340 € in Rechnung gestellt. Der Nutzer bestreitet, dass der Schaden während der Mietzeit entstanden ist, oder hält den Nachweis dafür für unzureichend. Entscheidend ist daher, ob Übergabeprotokoll, Rückgabeunterlagen, Fotos und Mitteilungen des Vermieters inhaltlich übereinstimmen.",
  strengths: [
    "Die Übernahme- und Rückgabedaten sind eindeutig und erlauben eine nachvollziehbare zeitliche Rekonstruktion.",
    "Der beanstandete Betrag und die Art des Schadens sind klar benannt, wodurch der Widerspruch konkret formuliert werden kann.",
    "Vorhandene Fotos vom Fahrzeug bei Übernahme oder Rückgabe könnten die Position des Kunden deutlich stärken."
  ],
  weaknesses: [
    "Ohne klare Bilder der Stoßstange bei Mietbeginn ist es schwer nachzuweisen, dass der Kratzer bereits vorher vorhanden war.",
    "Falls der Schaden bei der Rückgabe nicht sofort beanstandet wurde, könnte Europcar dies als Argument gegen den Kunden verwenden."
  ],
  missingEvidence: [
    "Kopie des Übergabe- und Rückgabeprotokolls mit genauer Dokumentation bereits vorhandener Schäden.",
    "Vollständige datierte Fotos der Stoßstange sowohl bei Fahrzeugübernahme als auch bei Rückgabe."
  ],
  nextSteps: [
    "Alle Unterlagen wie Mietvertrag, Rechnung, Schadensbericht, E-Mails und Fotos in einer Akte zusammenstellen.",
    "Einen formellen schriftlichen Widerspruch senden und einen konkreten Nachweis für die Zuordnung des Schadens zur Mietzeit verlangen.",
    "Die Originalfotos, Zeitstempel und den Prüfbericht anfordern, auf deren Grundlage die Belastung berechnet wurde."
  ],
  complaintEmail: `Betreff: Formeller Widerspruch gegen Schadensbelastung – Europcar-Miete vom 10.03.2024 bis 17.03.2024

Sehr geehrtes Europcar-Kundendienstteam,

hiermit lege ich formell Widerspruch gegen die Belastung in Höhe von 340 € wegen eines angeblichen Kratzers an der Stoßstange des von mir in Italien vom 10.03.2024 bis 17.03.2024 gemieteten Fahrzeugs ein.

Nach meiner Auffassung ist die Belastung derzeit nicht ausreichend belegt. Ich bitte Sie daher um Übersendung sämtlicher Unterlagen, die Ihrer Forderung zugrunde liegen, insbesondere datierter Fotos, Übergabe- und Rückgabeprotokolle sowie aller sonstigen Nachweise, aus denen hervorgeht, dass der Schaden tatsächlich während meiner Mietzeit entstanden ist.

Bis zur vollständigen Klärung bitte ich um Aussetzung und erneute Prüfung der Belastung. Ich bin bereit, eigene Unterlagen, einschließlich Fotos und relevanter Kommunikation, zur Verfügung zu stellen.

Ich bitte um eine schriftliche Rückmeldung innerhalb einer angemessenen Frist.

Mit freundlichen Grüßen`,
  shortEmail: `Betreff: Widerspruch gegen Schadensbelastung bei Europcar

Sehr geehrte Damen und Herren,
ich widerspreche der Belastung von 340 € wegen des angeblichen Kratzers an der Stoßstange. Bitte senden Sie mir datierte Fotos, Prüfberichte und alle Nachweise, die belegen, dass der Schaden während meiner Mietzeit vom 10.03.2024 bis 17.03.2024 entstanden ist.
Mit freundlichen Grüßen`,
  createdAt: '2024-03-18T10:00:00Z'
}

export const mockAnalysisEN: CaseAnalysis = {
  id: 'mock-en-001',
  caseId: 'mock-case-001',
  timelineSummary:
    "The vehicle was picked up from Europcar in Italy on 2024-03-10 and returned on 2024-03-17. After the rental ended, the customer was charged €340 for an alleged scratch on the bumper. The user disputes that the damage occurred during the rental period or argues that the evidence provided is insufficient. The strength of the case depends on whether the inspection reports, photos, and follow-up communications are consistent and properly documented.",
  strengths: [
    "The pickup and return dates are clearly defined, which helps establish an accurate timeline of events.",
    "The disputed charge is specific in both amount and damage type, making the complaint focused and easy to support.",
    "Any photos taken at pickup or return could provide strong factual support for the customer’s position."
  ],
  weaknesses: [
    "If there are no clear images of the bumper from the pickup stage, it may be difficult to prove the scratch was pre-existing.",
    "If the damage was not challenged immediately at return, the rental company may argue that this weakens the customer’s claim."
  ],
  missingEvidence: [
    "A copy of the pickup and return inspection report showing any pre-existing vehicle damage.",
    "Complete dated photos of the bumper taken both at pickup and at vehicle return."
  ],
  nextSteps: [
    "Collect the rental agreement, invoice, damage report, emails, and all available photos into one organized file.",
    "Send a formal written complaint requesting proof that the damage occurred during the rental period.",
    "Request the original inspection photos, timestamps, and the report used to justify the charge."
  ],
  complaintEmail: `Subject: Formal dispute of damage charge – Europcar rental from 2024-03-10 to 2024-03-17

Dear Europcar Customer Service,

I am writing to formally dispute the €340 charge relating to an alleged scratch on the bumper of the vehicle I rented in Italy from 2024-03-10 to 2024-03-17.

At this stage, I do not believe the charge has been sufficiently supported by evidence. I therefore request full copies of all documents relied upon, including dated vehicle photos, pickup and return inspection reports, and any other material showing that the damage actually occurred during my rental period.

Until such documentation is provided, I ask that the charge be suspended and reviewed. I remain available to provide any materials in my possession, including photos and communications relating to the rental.

I would appreciate a written response within a reasonable timeframe.

Kind regards,`,
  shortEmail: `Subject: Dispute of Europcar damage charge

Dear Europcar,
I dispute the €340 charge for the alleged bumper scratch relating to my rental from 2024-03-10 to 2024-03-17. Please provide dated photos, inspection reports, and clear evidence showing that the damage occurred during my rental period.
Kind regards,`,
  createdAt: '2024-03-18T10:00:00Z'
}

export const mockAnalysis = mockAnalysisIT