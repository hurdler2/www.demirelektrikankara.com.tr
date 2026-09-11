# dist/ klasörünü cPanel Dosya Yöneticisi'ne yüklemeye hazır bir zip'e paketler.
# Kullanım: npm run package   (önce build alır, sonra zip üretir)
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$dist = Join-Path $root 'dist'
$zip = Join-Path $root 'demir-elektrik-site.zip'

if (-not (Test-Path (Join-Path $dist 'index.html'))) {
  Write-Error "dist/index.html bulunamadı. Önce 'npm run build' çalıştır."
}
if (-not (Test-Path (Join-Path $dist '.htaccess'))) {
  Write-Error "dist/.htaccess bulunamadı. public/.htaccess dosyasının var olduğundan emin ol."
}

if (Test-Path $zip) { Remove-Item $zip -Force }

# Compress-Archive gizli dosyaları (.htaccess) atlayabildiği için .NET ile paketliyoruz
Add-Type -AssemblyName System.IO.Compression.FileSystem
[System.IO.Compression.ZipFile]::CreateFromDirectory($dist, $zip, [System.IO.Compression.CompressionLevel]::Optimal, $false)

$size = [math]::Round((Get-Item $zip).Length / 1MB, 2)
$count = (Get-ChildItem $dist -Recurse -File -Force).Count
Write-Host ""
Write-Host "Paket hazir: $zip ($size MB, $count dosya)" -ForegroundColor Green
Write-Host "cPanel > Dosya Yoneticisi > public_html icine yukleyip 'Extract' ile ac." -ForegroundColor Yellow
