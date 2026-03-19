// /lib/types.ts

/**
 * Rappresenta un caso di contestazione aperto dall'utente
 * relativo a un addebito ritenuto ingiusto nel noleggio auto.
 */
export type CaseStatus =
  | 'draft'
  | 'submitted'
  | 'analyzing'
  | 'ready'
  | 'sent'
  | 'closed'

/**
 * Caso principale creato dall'utente.
 * Contiene i dati essenziali della pratica.
 */
export type Case = {
  id: string
  userId: string
  rentalCompany: string
  issueType: string
  country: string
  pickupDate: string
  returnDate: string
  disputedAmount: number
  userStatement: string
  status: CaseStatus
  createdAt: string
}

/**
 * Categorie possibili per i documenti allegati al caso.
 * Servono a classificare correttamente le prove caricate.
 */
export type CaseDocumentCategory =
  | 'contract'
  | 'invoice'
  | 'damage_report'
  | 'pickup_photos'
  | 'return_photos'
  | 'emails'

/**
 * File/documento allegato a un caso.
 * Può essere un contratto, una fattura, foto o email.
 */
export type CaseDocument = {
  id: string
  caseId: string
  fileName: string
  fileType: string
  fileUrl: string
  documentCategory: CaseDocumentCategory
}

/**
 * Risposta fornita dall'utente nel questionario del caso.
 * Ogni risposta è associata a una chiave domanda specifica.
 */
export type CaseAnswer = {
  id: string
  caseId: string
  questionKey: string
  answerValue: string
}

/**
 * Analisi generata dall'AI sul caso.
 * Riassume timeline, punti forti/deboli, prove mancanti
 * e suggerisce i prossimi passi, includendo bozze email.
 */
export type CaseAnalysis = {
  id: string
  caseId: string
  timelineSummary: string
  strengths: string[]
  weaknesses: string[]
  missingEvidence: string[]
  nextSteps: string[]
  complaintEmail: string
  shortEmail: string
  createdAt: string
}

/**
 * Tipologie supportate per una domanda del questionario.
 * yes_no = risposta chiusa sì/no
 * text = risposta libera testuale
 */
export type QuestionnaireQuestionType = 'yes_no' | 'text'

/**
 * Definisce una singola domanda del questionario.
 * Viene usata per raccogliere informazioni strutturate dall'utente.
 */
export type QuestionnaireQuestion = {
  key: string
  label: string
  type: QuestionnaireQuestionType
}