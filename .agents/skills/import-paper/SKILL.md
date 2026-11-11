---
name: import-paper
description: Import and integrate a paper (along with companion settlement gazetteers, datasets, figures, bibliographies and source PDFs) from another project into Project Intellte for VitePress preview and reading, resolving relative, partial or incomplete file paths heuristically.
---

# Import Paper into Project Intellte (`/import-paper`)

This skill guides you through locating, staging, standardising and registering external RMarkdown manuscripts (`.Rmd`), compiled PDFs (`.pdf`), bibliographies (`.bib`), datasets (`.json` / `.json5`), figures (`figures/*.png`) and cited source literature (`papers/*.pdf`) into Project Intellte (`E:\Active Projects\Project 1746 - Intellte`).

---

## 1. Heuristic Path Resolution

The user may provide a full path, a relative path, a partial subpath, a folder name or a topic/region name (for example, `kievan_rus`, `histmap/population_regional/russia/kievan_rus/crimea`, `wild_fields`, or `SVEA/.../dagestan`).

When the path is relative, partial or incomplete, resolve it heuristically before asking the user:

1. **Check Known Source Repositories First**:
   - **Project 1509 - SVEA (Polaris / Viscount regional demographic syntheses)**:
     - `F:\Active Projects\Project 1509 - SVEA\histmap\1.data_raw\population_regional\`
     - `F:\Active Projects\Project 1509 - SVEA\`
   - **Project 2136 - Stadestér (Velkomin / Stadestér papers)**:
     - `E:\Active Projects\Project 2136 - Stadestér\`
     - `F:\Active Projects\Project 2136 - Stadestér\`
   - **All Active Project Directories**:
     - `E:\Active Projects\*`
     - `F:\Active Projects\*`

2. **Run a Heuristic Search Command**:
   If the exact path does not exist directly, search for matching folders or `.Rmd` / `.pdf` files across `E:\Active Projects` and `F:\Active Projects`:
   ```powershell
   $query = "<user_path_or_keyword>"
   $roots = @(
     "F:\Active Projects\Project 1509 - SVEA\histmap\1.data_raw\population_regional",
     "F:\Active Projects\Project 1509 - SVEA",
     "E:\Active Projects",
     "F:\Active Projects"
   )
   foreach ($r in $roots) {
     if (Test-Path $r) {
       Get-ChildItem -Path $r -Recurse -ErrorAction SilentlyContinue |
         Where-Object { $_.FullName -match [regex]::Escape($query) -or $_.Name -like "*$query*" } |
         Select-Object -First 30 FullName, LastWriteTime
     }
   }
   ```

3. **Identify the Complete Paper Bundle**:
   Once you locate the source directory or file stem `<stem>` (e.g. `crimea` or `wild_fields`), check for companion files in the same directory:
   - Main manuscript: `<stem>_literature_review.Rmd` (or `<stem>.Rmd`) and `.pdf`
   - Companion settlement gazetteer: `<stem>_settlements.Rmd` and `<stem>_settlements.pdf`
   - Bibliography and CSL: `<stem>_literature_review.bib` (or `<stem>.bib`), `crd-mla-numeric.csl`
   - Datasets & masks: `<stem>_settlements.json`, `<stem>.json5`, `<stem>_areal_mask.png`
   - Figures: `figures/<stem>*` (e.g. `<stem>_regional_map.png`, `<stem>_fig2_*.png`, etc.)
   - Source literature PDFs: `papers/*.pdf`

---

## 2. Target Repository & Directory Mapping

Determine which Intellte repository and project record the paper belongs to:

- **Viscount (`papers/viscount/` & `common/metadata/viscount.json5`)**:
  - Regional demographic histories and settlement gazetteers from `Project 1509 - SVEA\histmap\1.data_raw\population_regional\POLARIS\<folder_key>\<paper_subdir>` belong to **Project Polaris** (`id: "project_polaris"` in `common/metadata/viscount.json5`), staged under:
    `e:\Active Projects\Project 1746 - Intellte\papers\viscount\project_polaris\<folder_key>\<paper_subdir>\`
  - Examples of `<folder_key>` under `project_polaris`:
    - `1.entire_country` (`folder_label: "1. Entire Country"`)
    - `2.kievan_rus` (`folder_label: "2. Kievan Rus"`)
    - `3.european_russia` (`folder_label: "3. European Russia"`)
    - `3.north_caucasus` (`folder_label: "3. North Caucasus"`)
    - `3.pontic_steppe_and_lower_volga` (`folder_label: "3. Pontic Steppe & Lower Volga"`)
    - `3.siberia` (`folder_label: "3. Siberia"`)
- **Velkscala (`papers/velkscala/` & `common/metadata/velkscala.json5`)**:
  - Methodological papers (`project_stadester`, `project_velkomin`, etc.) belong under `e:\Active Projects\Project 1746 - Intellte\papers\velkscala\<project_id>\` and are registered in `common/metadata/velkscala.json5`.

---

## 3. Staging Assets into Intellte

Copy all relevant files from the resolved source directory into the target Intellte directory (`$dst`):

1. **Root Manuscript, Dataset & Bibliography Files**:
   - Copy `<stem>*.Rmd`, `<stem>*.pdf`, `<stem>*.bib`, `<stem>*.json`, `<stem>*.json5`, and `<stem>*_areal_mask.png` to `$dst`.
   - Ensure `crd-mla-numeric.csl` exists in `$dst` if referenced by `csl: crd-mla-numeric.csl` in the YAML frontmatter (copy from `e:\Active Projects\Project 1746 - Intellte\core\rticles\intellte\skeleton\crd-mla-numeric.csl` if missing).
2. **Figures (`figures/`)**:
   - Ensure `$dst\figures` exists and copy all `<stem>*.png` / `<stem>*.pdf` figures from the source `figures/` directory into `$dst\figures`.
3. **Cited Source Literature (`papers/`)**:
   - If the source directory contains a `papers/` folder of cited reference PDFs, ensure `$dst\papers` exists and copy any new `.pdf` files into `$dst\papers`.

---

## 4. Standardising `.Rmd` Files for WYSIWYG DOM Rendering

External `.Rmd` files (especially from SVEA) often contain hardcoded paths or local `{r setup, include=FALSE}` overrides of `render_table_template` that emit plain Markdown tables instead of Intellte's `<table class="crd-wysiwyg-table">` HTML tables when rendered outside LaTeX.

For every imported `.Rmd` file in `$dst`:

1. **Standardise YAML `output:` Template Path**:
   Compute the relative path from `$dst` to `core/rticles/intellte/resources/template.tex` (for `papers/viscount/project_polaris/<folder_key>/<paper_subdir>/`, this is `../../../../../core/rticles/intellte/resources/template.tex`):
   ```yaml
   output:
     pdf_document:
       template: ../../../../../core/rticles/intellte/resources/template.tex
       latex_engine: xelatex
       keep_tex: false
   ```

2. **Standardise `{r setup, include=FALSE}` Chunk**:
   Replace the `{r setup, include=FALSE}` chunk with a clean call to `framework_init.R` using the relative path from `$dst`:
   ````markdown
   ```{r setup, include=FALSE}
   source("../../../../../core/framework/R/framework_init.R")
   ```
   ````
   - **IMPORTANT**: Do **not** delete subsequent setup/data chunks such as `{r load-stadester-json, include=FALSE}` in `*_settlements.Rmd` files! Those chunks load `<stem>_settlements.json` and define helper functions (`settlements_list`, `first_year_num`, `fmt_other_names`, `fmt_span`, `fmt_coord_pair`, `fmt_pop_series`, etc.) required by the gazetteer R chunks.
   - Also ensure any `{r fig1-md-only}` chunk guards `render_figure_template(...)` with `if (!knitr::is_latex_output() && !isTRUE(getOption("intellte.dom_mode", FALSE)))` so the hero figure is not rendered twice in DOM mode.

3. **Verify Trailing Bibliography Heading**:
   Ensure the `.Rmd` ends with `# References`, `# Bibliography` or `# Sources` so `MarkdownRenderer.resolveCitationsAndBibliography` in `core/framework/node/MarkdownRenderer.js` automatically injects the numbered `<div class="crd-bibliography-list">` section.

---

## 5. Registering Metadata in `/common/metadata/<repo>.json5`

Edit `e:\Active Projects\Project 1746 - Intellte\common\metadata\viscount.json5` (or `velkscala.json5`):

1. **Supplementary Files on Root Synthesis (if applicable)**:
   For `project_polaris` regional papers, add the `<stem>_settlements.json` entry to `1.0-russia`'s `supplementary_files` array in order by `path`:
   ```json5
   {
     category: "Supplementary Material (JSON)",
     path: "project_polaris/<folder_key>/<paper_subdir>/<stem>_settlements.json",
     title: "<Region Title> Settlement Gazetteer (JSON)"
   },
   ```

2. **Main Version Entry (`1.0-<slug>`)**:
   Add the version object under the appropriate `<folder_key>` section in `versions`:
   ```json5
   {
     version: "1.0-<slug>",
     label: "<Region Label> (1.0)",
     folder_key: "<folder_key>",
     folder_label: "<Folder Label>",
     is_synthetic: true,
     published_date: "<DD Month YYYY>",
     status: "Published",
     authors: [
       { name: "Aust Kätzchen", division: "CRD" }
     ],
     rmd_path: "project_polaris/<folder_key>/<paper_subdir>/<stem>_literature_review.Rmd",
     pdf_path: "project_polaris/<folder_key>/<paper_subdir>/<stem>_literature_review.pdf",
     bib_path: "project_polaris/<folder_key>/<paper_subdir>/<stem>_literature_review.bib",
     csl_path: "../core/rticles/intellte/skeleton/crd-mla-numeric.csl",
     dataset_path: "project_polaris/<folder_key>/<paper_subdir>/<stem>_settlements.json",
     supplementary_files: [
       {
         category: "Supplementary Material (JSON5)",
         path: "project_polaris/<folder_key>/<paper_subdir>/<stem>.json5",
         title: "<Region Title> Regional Population Series (JSON5)"
       },
       {
         category: "Supplementary Material (PNG)",
         path: "project_polaris/<folder_key>/<paper_subdir>/<stem>_areal_mask.png",
         title: "<Region Title> Regional Areal Mask (PNG)"
       }
     ],
     source_papers_dir: "project_polaris/<folder_key>/<paper_subdir>/papers",
     hero_figure: "project_polaris/<folder_key>/<paper_subdir>/figures/<stem>_regional_map.png",
     figures: [
       // List all figures referenced by the paper with key, title, and path
     ]
   }
   ```

3. **Companion Settlement Gazetteer Version Entry (`1.0-<slug>-settlements`)**:
   If a `<stem>_settlements.Rmd` gazetteer exists, register it immediately after the main version with `parent_version: "1.0-<slug>"`:
   ```json5
   {
     version: "1.0-<slug>-settlements",
     label: "Settlement Gazetteer (1.0)",
     folder_key: "<folder_key>",
     folder_label: "<Folder Label>",
     parent_version: "1.0-<slug>",
     is_synthetic: true,
     published_date: "<DD Month YYYY>",
     status: "Published",
     authors: [
       { name: "Aust Kätzchen", division: "CRD" }
     ],
     rmd_path: "project_polaris/<folder_key>/<paper_subdir>/<stem>_settlements.Rmd",
     pdf_path: "project_polaris/<folder_key>/<paper_subdir>/<stem>_settlements.pdf",
     bib_path: "project_polaris/<folder_key>/<paper_subdir>/<stem>_literature_review.bib",
     csl_path: "../core/rticles/intellte/skeleton/crd-mla-numeric.csl",
     dataset_path: "project_polaris/<folder_key>/<paper_subdir>/<stem>_settlements.json",
     source_papers_dir: "project_polaris/<folder_key>/<paper_subdir>/papers",
     hero_figure: "project_polaris/<folder_key>/<paper_subdir>/figures/<stem>_regional_map.png",
     figures: [
       {
         key: "<stem>_regional_map",
         title: "<Hero caption or title>",
         path: "project_polaris/<folder_key>/<paper_subdir>/figures/<stem>_regional_map.png"
       }
     ]
   }
   ```

---

## 6. Running the Build Pipeline & Verifying Output

1. **Execute the Intellte Pipeline**:
   Run the full Node/R build pipeline from `e:\Active Projects\Project 1746 - Intellte`:
   ```powershell
   node core/framework/node/run_pipeline.js
   ```
   This runs:
   - `A_compile_rmd_Files.js` (evaluates R chunks in `.Rmd` into `.knitr.md` via `Rscript`)
   - `B_extract_pdf_metadata.js` (extracts PDF page counts, file sizes and metadata)
   - `C_convert_pdf_figures.js` (copies/converts figures and datasets into `docs/public/figures/...`)
   - `D_build_vitepress_docs.js` (renders `.knitr.md` into VitePress pages under `docs/records/<project>/<version>/index.md` and updates sidebar/index stubs)

2. **Verify Generated VitePress Markdown**:
   Inspect `docs/records/<project>/<version>/index.md` (and `<version>-settlements/index.md`) to confirm:
   - Tables render as `<table class="crd-wysiwyg-table">` with `<div class="crd-table-caption">`.
   - Figures render as `<figure class="crd-figure">` with valid `/Intellte/figures/...` image paths.
   - Inline citations resolve to numbered `<span class="crd-cite">[<a href="#ref-...">n</a>]</span>` links.
   - The trailing bibliography contains `<div class="crd-bibliography-list">` with linked source PDFs where available.

3. **Verify Static Site Build**:
   Run VitePress build to confirm there are no broken links or Vue template compilation errors:
   ```powershell
   npx vitepress build docs
   ```

