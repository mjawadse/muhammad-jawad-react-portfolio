@echo off
set "PORTFOLIO_FILE=%~dp0dist\index.html"
if not exist "%PORTFOLIO_FILE%" (
  echo Preview file was not found. Please keep the dist folder beside this file.
  pause
  exit /b 1
)
start "Muhammad Jawad React Portfolio" "%PORTFOLIO_FILE%"

