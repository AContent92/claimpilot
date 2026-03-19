'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

export type Language = 'it' | 'de' | 'en'

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
}

export const LanguageContext = createContext<LanguageContextValue>({
  language: 'it',
  setLanguage: () => {},
})

export default function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('it')

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem('claimpilot_lang')
    if (savedLanguage === 'it' || savedLanguage === 'de' || savedLanguage === 'en') {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('claimpilot_lang', language)
  }, [language])

  const value = useMemo(() => ({ language, setLanguage }), [language])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}