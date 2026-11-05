@echo off
setlocal
cd /d "%~dp0"

echo [1/3] Compiling Stadester benchmark inputs...
node --max-old-space-size=8192 "1.compiler\compile_all.js" %*
if errorlevel 1 exit /b %errorlevel%

echo [2/3] Evaluating Macro, Meso, and Micro benchmark results...
node "2.results\run_all_results.js" %*
if errorlevel 1 exit /b %errorlevel%

echo [3/3] Generating benchmark visualisations and tables...
node "3.visualisations\run_all_visualisations.js" %*
if errorlevel 1 exit /b %errorlevel%

echo All Stadester benchmarks completed successfully.
endlocal
