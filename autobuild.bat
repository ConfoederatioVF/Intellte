@echo off
setlocal
cd /d "%~dp0"
call "%~dp0autorun.bat" --build %*
endlocal
