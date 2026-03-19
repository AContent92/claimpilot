// /lib/ai.ts

import type { Case, CaseAnswer, CaseAnalysis } from './types'
import {
  mockAnalysisIT,
  mockAnalysisDE,
  mockAnalysisEN,
} from '../data/mockAnalysis'

/**
 * Lingue supportate per l'analisi del caso.
 */
type SupportedLanguage = 'it' | 'de' | 'en'

/**
 * Simula la chiamata all'AI per analizzare un caso ClaimPilot.
 * Per ora restituisce dati mock diversi in base alla lingua selezionata.
 *
 * @param caseData - Dati principali del caso aperto dall'utente
 * @param answers - Risposte fornite dall'utente nel questionario
 * @param language - Lingua desiderata per l'output dell'analisi
 * @returns Un oggetto CaseAnalysis simulato
 */
export async function analyzeCase(
  caseData: Case,
  answers: CaseAnswer[],
  language: SupportedLanguage = 'it'
): Promise<CaseAnalysis> {
  // Evita warning sui parametri non ancora utilizzati nella versione mock.
  void caseData
  void answers

  const analysisByLanguage: Record<SupportedLanguage, CaseAnalysis> = {
    it: mockAnalysisIT,
    de: mockAnalysisDE,
    en: mockAnalysisEN,
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      // TODO: sostituire questo blocco con la vera chiamata API
      // che invierà caseData e answers al backend / provider AI.
      resolve(analysisByLanguage[language])
    }, 1500)
  })
}