// save as: add-notfound-to-translations.js
// esegui con: node add-notfound-to-translations.js

const fs = require('fs')
const path = require('path')

const filePath = path.join(process.cwd(), 'lib', 'translations.ts')

if (!fs.existsSync(filePath)) {
  console.error('File non trovato:', filePath)
  process.exit(1)
}

let content = fs.readFileSync(filePath, 'utf8')

// Blocco da aggiungere nel tipo Translations
const typeBlock = `    notFound: {
      title: string
      subtitle: string
      back: string
    }
`

// Aggiunge il tipo notFound solo se manca
if (!content.includes('notFound: {\n      title: string\n      subtitle: string\n      back: string\n    }')) {
  const typeRegex = /(result:\s*\{[\s\S]*?\n\s*\}\n)(\s*\}\n)/

  if (typeRegex.test(content)) {
    content = content.replace(typeRegex, `$1${typeBlock}$2`)
  } else {
    console.error('Non sono riuscito a trovare il punto giusto per aggiornare il tipo Translations.')
    process.exit(1)
  }
}

// Blocchi notFound per ciascuna lingua
const notFoundBlocks = {
  it: `    notFound: {
      title: "Pagina non trovata",
      subtitle: "La pagina che cerchi non esiste o è stata spostata.",
      back: "← Torna alla home",
    },
`,
  de: `    notFound: {
      title: "Seite nicht gefunden",
      subtitle: "Die gesuchte Seite existiert nicht oder wurde verschoben.",
      back: "← Zur Startseite",
    },
`,
  en: `    notFound: {
      title: "Page not found",
      subtitle: "The page you are looking for does not exist or has been moved.",
      back: "← Back to home",
    },
`,
}

// Funzione che inserisce notFound subito dopo result dentro una lingua
function insertNotFoundForLanguage(source, lang, block) {
  const langStart = new RegExp(`${lang}:\\s*\\{`)
  const startMatch = source.match(langStart)

  if (!startMatch) {
    throw new Error(`Sezione lingua "${lang}" non trovata.`)
  }

  const startIndex = startMatch.index + startMatch[0].length
  let i = startIndex
  let depth = 1

  while (i < source.length && depth > 0) {
    const char = source[i]
    if (char === '{') depth++
    if (char === '}') depth--
    i++
  }

  const langBlock = source.slice(startMatch.index, i)

  if (langBlock.includes('notFound: {')) {
    return source
  }

  const resultRegex = /(    result:\s*\{[\s\S]*?\n    \},\n)/

  if (!resultRegex.test(langBlock)) {
    throw new Error(`Blocco result non trovato dentro la lingua "${lang}".`)
  }

  const updatedLangBlock = langBlock.replace(resultRegex, `$1${block}`)

  return source.slice(0, startMatch.index) + updatedLangBlock + source.slice(i)
}

// Inserisce notFound per it, de, en
for (const lang of ['it', 'de', 'en']) {
  content = insertNotFoundForLanguage(content, lang, notFoundBlocks[lang])
}

fs.writeFileSync(filePath, content, 'utf8')

console.log('translations.ts aggiornato con successo.')
console.log('File modificato:', filePath)