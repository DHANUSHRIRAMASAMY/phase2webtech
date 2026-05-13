@echo off
title AgriSmart - Starting...
color 0A

echo.
echo  ==========================================
echo   AgriSmart - Full Stack Launcher
echo  ==========================================
echo.

:: Step 1 - Start MySQL if not running
echo  [1/2] Checking MySQL...
net start MySQL80 >nul 2>&1
if %errorlevel% == 0 (
    echo  MySQL started successfully.
) else (
    echo  MySQL is already running.
)

:: Step 2 - Start Backend
echo.
echo  [2/2] Starting Backend...
start "AgriSmart Backend" cmd /k "cd /d %~dp0backend && npm run dev"

:: Wait for backend to start
timeout /t 4 /nobreak >nul

:: Step 3 - Open browser
start "" "http://localhost:5000/index.html"

echo.
echo  ==========================================
echo   AgriSmart is running!
echo   Open: http://localhost:5000/index.html
echo  ==========================================
echo.
pause
