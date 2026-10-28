@echo off
setlocal
cd /d "%~dp0"
call "%~dp0autorun.bat" --build --force-eval
endlocal
