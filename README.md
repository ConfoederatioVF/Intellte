# Intellte

**Intellte** is the static Working Papers and Empirical Validation Repository for **Confoederatio, Research Division (CRD)**.

## Overview

Intellte aggregates working papers (`.Rmd` and `.pdf`), validation suites (`.md`), bibliographies (`.bib`), and high-resolution figures (`.png`) across child research repositories (such as `velkscala`) into a VitePress portal featuring:

- **Native R Markdown (`.Rmd`) WYSIWYG DOM Rendering**: `core/framework/node/MarkdownRenderer.js` evaluates R chunks via `core/framework/R/` and renders CRD working papers directly into the DOM with **Jost\*** headers, **Karla** badges and table headers, and **Source Serif 4** (`10pt`/`15pt`) body prose.
- **Inline & Side-by-Side Collapsible PDF Viewing**: Attached record PDFs can be minimised or expanded beside the body text (`PdfSplitWorkspace.vue`), or embedded inline in any Markdown/HTML/Rmd document via `<pdf src="..." />` (`PdfEmbed.vue`).
- **Lite InvenioRDM Lookup, Versioning & Tagging**: Fast client-side search, multi-tag filtering, and version switching (`v1.0`, etc.) configured via per-project dictionaries in `common/metadata/<project_key>.json5`.

## Usage

Run `autorun.bat` (or `./autorun.sh`) at the repository root to compile `.Rmd` sources into WYSIWYG DOM pages, stage static artefacts into `docs/public/`, and build the static VitePress site into `docs/.vitepress/dist/`.
