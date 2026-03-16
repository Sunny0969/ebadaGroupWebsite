@echo off
echo Starting Backend Server...
echo.
cd /d %~dp0
echo Current directory: %CD%
echo.
echo Installing dependencies if needed...
call npm install
echo.
echo Starting server...
call npm run dev
pause
