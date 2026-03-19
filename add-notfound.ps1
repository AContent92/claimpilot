# add-notfound.ps1
# Esegui con:
# .\add-notfound.ps1

$ErrorActionPreference = "Stop"

$filePath = Join-Path (Get-Location) "lib\translations.ts"

if (-not (Test-Path $filePath)) {
    Write-Error "File non trovato: $filePath"
}

# Legge tutte le righe del file
$lines = Get-Content -Path $filePath

# Funzione per inserire un blocco DOPO una riga specifica (indice 1-based)
function Insert-AfterLine {
    param(
        [System.Collections.Generic.List[string]]$List,
        [int]$LineNumber,
        [string[]]$Block
    )

    if ($LineNumber -lt 1 -or $LineNumber -gt $List.Count) {
        throw "Numero di riga non valido: $LineNumber. Il file ha $($List.Count) righe."
    }

    $insertIndex = $LineNumber
    foreach ($line in $Block) {
        $List.Insert($insertIndex, $line)
        $insertIndex++
    }
}

# Converte l'array in lista modificabile
$list = [System.Collections.Generic.List[string]]::new()
foreach ($line in $lines) {
    $list.Add($line)
}

# Blocchi da aggiungere nel tipo Translations
$typeBlock = @(
"    notFound: {",
"      title: string",
"      subtitle: string",
"      back: string",
"    }"
)

# Blocchi da aggiungere nelle lingue
$itBlock = @(
"      notFound: {",
"        title: 'Pagina non trovata',",
"        subtitle: 'La pagina che cerchi non esiste o è stata spostata.',",
"        back: '← Torna alla home',",
"      },"
)

$deBlock = @(
"      notFound: {",
"        title: 'Seite nicht gefunden',",
"        subtitle: 'Die gesuchte Seite existiert nicht oder wurde verschoben.',",
"        back: '← Zur Startseite',",
"      },"
)

$enBlock = @(
"      notFound: {",
"        title: 'Page not found',",
"        subtitle: 'The page you are looking for does not exist or has been moved.',",
"        back: '← Back to home',",
"      },"
)

# Controllo minimo anti-duplicazione
if ($list -match "notFound:\s*\{") {
    Write-Error "La sezione notFound sembra essere già presente nel file. Interrompo per evitare duplicati."
}

# Inserimenti nel tipo:
# Ordine dal basso verso l'alto per non sfasare i numeri di riga originali
Insert-AfterLine -List $list -LineNumber 287 -Block $typeBlock
Insert-AfterLine -List $list -LineNumber 193 -Block $typeBlock
Insert-AfterLine -List $list -LineNumber 99  -Block $typeBlock

# Inserimenti nelle lingue:
# Uso i numeri già aggiustati indicati da te
Insert-AfterLine -List $list -LineNumber 608 -Block $enBlock
Insert-AfterLine -List $list -LineNumber 510 -Block $deBlock
Insert-AfterLine -List $list -LineNumber 397 -Block $itBlock

# Salva il file aggiornato
Set-Content -Path $filePath -Value $list -Encoding UTF8

Write-Host "Aggiornamento completato: $filePath" -ForegroundColor Green