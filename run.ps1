$envFile = Get-Content .env | Where-Object { $_ -match "APP_ENV" }
$appEnv = ($envFile -split "=")[1].Trim()

if ($appEnv -eq "production") {
    Write-Host "Starting in production mode..."
    docker-compose up --build
} else {
    Write-Host "Starting in development mode (live reload on :5173)..."
    docker-compose -f docker-compose.dev.yml up --build
}
