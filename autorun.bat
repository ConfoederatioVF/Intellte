@echo off
setlocal
cd /d "%~dp0"

echo ============================================================================
echo   Intellte - CRD Working Papers Static Site Generation Pipeline
echo ============================================================================

if not exist "node_modules\vitepress\bin\vitepress.js" (
  echo [Intellte] Installing VitePress and static site dependencies...
  call npm install --no-audit --no-fund
  if %ERRORLEVEL% neq 0 (
    echo.
    echo [ERROR] npm install failed with exit code %ERRORLEVEL%.
    pause
    exit /b %ERRORLEVEL%
  )
)

echo [Intellte] Running A-D RMarkdown WYSIWYG DOM ^& Artefact Staging Pipeline...
node "core/framework/node/run_pipeline.js" %*
if %ERRORLEVEL% neq 0 (
  echo.
  echo [ERROR] Intellte pipeline failed with exit code %ERRORLEVEL%.
  pause
  exit /b %ERRORLEVEL%
)

if "%~1"=="--build" (
  echo [Intellte] Building static VitePress site into docs/.vitepress/dist ...
  node "node_modules\vitepress\bin\vitepress.js" build docs
  if %ERRORLEVEL% neq 0 (
    echo.
    echo [ERROR] VitePress static build failed with exit code %ERRORLEVEL%.
    pause
    exit /b %ERRORLEVEL%
  )
  echo.
  echo [OK] Static site docs generated in docs/ and built to docs/.vitepress/dist.
  exit /b 0
)

if "%~1"=="--preview" (
  echo [Intellte] Starting local static preview server...
  node "node_modules\vitepress\bin\vitepress.js" preview docs --port 4173
  if %ERRORLEVEL% neq 0 pause
  exit /b %ERRORLEVEL%
)

if "%~1"=="--serve" (
  echo [Intellte] Starting local static preview server...
  node "node_modules\vitepress\bin\vitepress.js" preview docs --port 4173
  if %ERRORLEVEL% neq 0 pause
  exit /b %ERRORLEVEL%
)

echo [Intellte] Starting VitePress development server...
node "node_modules\vitepress\bin\vitepress.js" dev docs
if %ERRORLEVEL% neq 0 (
  echo.
  echo [ERROR] VitePress development server stopped with exit code %ERRORLEVEL%.
  pause
  exit /b %ERRORLEVEL%
)

endlocal
