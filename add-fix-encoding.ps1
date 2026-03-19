$ErrorActionPreference = "Stop"
$filePath = Join-Path (Get-Location) "lib\translations.ts"
$content = Get-Content -Path $filePath -Raw
$content = $content -replace "La pagina che cerchi non esiste o [^']*\.", "La pagina che cerchi non esiste."
$content = $content -replace "Die gesuchte Seite existiert nicht oder wurde verschoben\.", "Diese Seite existiert nicht."
$content = $content -replace "[^\x00-\x7F←]+ Torna alla home", "Torna alla home"
$content = $content -replace "[^\x00-\x7F←]+ Zur Startseite", "Zur Startseite"
$content = $content -replace "[^\x00-\x7F←]+ Back to home", "Back to home"
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($filePath, $content, $utf8NoBom)
Write-Host "Fatto." -ForegroundColor Green