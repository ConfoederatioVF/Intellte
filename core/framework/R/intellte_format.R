# ==============================================================================
# Intellte Output Format & Compilation (core/framework/R/intellte_format.R)
# ==============================================================================
# Bridges core/rticles/intellte/ (Intellte CRD Working Paper Template) with the
# Velkscala R framework, staging LaTeX class/style assets for both RStudio Knit
# and command-line autorun.bat compilation.
# ==============================================================================


#' Automatically compiles a `.json5` bibliography array (e.g. `sources.json5`) in the paper directory
#' into the target `.bib` file consumed by Pandoc Citeproc and VitePress.
#'
#' @param arg0_target_dir Directory containing the `.Rmd` paper and `.json5` bibliography sources.
#' @param arg1_rmd_path Optional `.Rmd` path used to inspect YAML frontmatter `bibliography:`.
#' @param arg2_defines Optional loaded defines list from `load_filepath_defines()`.
#' @return Normalised path to the compiled `.bib` file, or `""` if no `.json5` bibliography source exists.
#' @export
compile_bib_sources <- function (arg0_target_dir, arg1_rmd_path = NULL, arg2_defines = NULL) {
  #Convert from parameters
  target_dir <- arg0_target_dir
  rmd_path <- arg1_rmd_path
  defines <- if (!is.null(arg2_defines)) arg2_defines else load_filepath_defines()

  #Declare local instance variables
  bib_compiler_js <- normalizePath(
    file.path(defines$directories$r_framework, "..", "node", "BibCompiler.js"),
    winslash = "/",
    mustWork = FALSE
  )
  bib_rel_name <- ""
  candidates <- character(0)
  node_bin <- Sys.which("node")
  out_bib_path <- ""
  sources_path <- ""

  #Guard clauses
  if (is.null(target_dir) || !nzchar(target_dir) || !dir.exists(target_dir)) return("")

  if (!is.null(rmd_path) && nzchar(rmd_path) && file.exists(rmd_path)) {
    head_lines <- readLines(rmd_path, n = 60L, warn = FALSE, encoding = "UTF-8")
    bib_matches <- grep("^\\s*bibliography\\s*:\\s*", head_lines, value = TRUE)
    if (length(bib_matches) > 0) {
      bib_rel_name <- sub("^\\s*bibliography\\s*:\\s*[\"']?([^\"']+)[\"']?\\s*$", "\\1", bib_matches[1])
      bib_rel_name <- trimws(bib_rel_name)
    }
  }

  candidates <- c(file.path(target_dir, "sources.json5"))
  if (nzchar(bib_rel_name)) {
    bib_stem <- tools::file_path_sans_ext(basename(bib_rel_name))
    candidates <- unique(c(
      candidates,
      file.path(target_dir, paste0(bib_stem, ".json5")),
      file.path(target_dir, paste0(bib_stem, "_sources.json5"))
    ))
  }

  for (cand in candidates) {
    if (file.exists(cand)) {
      sources_path <- normalizePath(cand, winslash = "/", mustWork = TRUE)
      break
    }
  }

  if (!nzchar(sources_path)) return("")

  if (nzchar(bib_rel_name)) {
    out_bib_path <- normalizePath(file.path(target_dir, bib_rel_name), winslash = "/", mustWork = FALSE)
  } else {
    out_bib_path <- sub("\\.json5?$", ".bib", sources_path, ignore.case = TRUE)
  }

  if (nzchar(node_bin) && file.exists(bib_compiler_js)) {
    res <- suppressWarnings(system2(
      node_bin,
      args = c(shQuote(bib_compiler_js), shQuote(sources_path), shQuote(out_bib_path)),
      stdout = TRUE,
      stderr = TRUE
    ))
    status_code <- attr(res, "status")
    if (!is.null(status_code) && status_code != 0L) {
      warning(sprintf("[Intellte] BibCompiler exited with status %s: %s", status_code, paste(res, collapse = "\n")))
    }
  }

  #Return statement
  return(out_bib_path)
}


#' Compiles an RMarkdown paper (e.g. `papers/velkscala_1.0/main.Rmd`) into PDF,
#' optionally executing visualisation scripts beforehand so all figures are fresh.
#'
#' @param arg0_rmd_path Path or defines key to the target `.Rmd` file.
#' @param arg1_options Optional named list (`run_visualisations`, `clean_staged_cls`, `quiet`).
#' @return Normalised path to the compiled output PDF.
#' @export
compile_velkscala_paper <- function (arg0_rmd_path = "velkscala_1_0_rmd", arg1_options = NULL) {
  #Convert from parameters
  defines <- load_filepath_defines()
  rmd_path <- resolve_project_path(arg0_rmd_path, defines)
  options <- if (!is.null(arg1_options)) arg1_options else list()

  #Initialise options
  clean_staged_cls <- if (!is.null(options$clean_staged_cls)) isTRUE(options$clean_staged_cls) else TRUE
  quiet_flag <- if (!is.null(options$quiet)) isTRUE(options$quiet) else FALSE
  run_visualisations <- if (!is.null(options$run_visualisations)) isTRUE(options$run_visualisations) else TRUE

  #Declare local instance variables
  paper_dir <- dirname(rmd_path)
  staged_files <- character(0)

  #Guard clauses
  if (!file.exists(rmd_path)) {
    stop(sprintf("Target RMarkdown file not found: %s", rmd_path))
  }

  if (run_visualisations) {
    cdt_script <- defines$paths$cdt_plot_script
    ndt_script <- defines$paths$ndt_plot_script
    if (file.exists(cdt_script)) {
      message("[Velkscala] Rendering CDT validation figures (PNG)...")
      sys.source(cdt_script, envir = new.env(parent = globalenv()))
    }
    if (file.exists(ndt_script)) {
      message("[Velkscala] Rendering NDT paleodemographic figures (PNG)...")
      sys.source(ndt_script, envir = new.env(parent = globalenv()))
    }
  }

  compile_bib_sources(paper_dir, rmd_path, defines)
  staged_files <- stage_intellte_resources(paper_dir, defines)
  if (clean_staged_cls) {
    on.exit({
      transient_assets <- c(
        "intellte.cls",
        "crd-mla-numeric.csl",
        "crd_logo.png",
        "intellte-sample.bib"
      )
      for (fname in transient_assets) {
        f_path <- file.path(paper_dir, fname)
        if (file.exists(f_path)) unlink(f_path)
      }
    }, add = TRUE)
  }

  message(sprintf("[Velkscala] Compiling RMarkdown manuscript: %s ...", rmd_path))
  out_pdf <- rmarkdown::render(
    input = rmd_path,
    output_dir = paper_dir,
    envir = new.env(parent = globalenv()),
    quiet = quiet_flag
  )

  #Clean auxiliary LaTeX build files (.log, .aux, .out, .bbl, .blg, .fls, .fdb_latexmk)
  aux_exts <- c("aux", "bbl", "blg", "fdb_latexmk", "fls", "log", "out", "synctex.gz", "tex")
  stem <- tools::file_path_sans_ext(basename(rmd_path))
  for (ext in aux_exts) {
    aux_cand <- file.path(paper_dir, paste0(stem, ".", ext))
    if (file.exists(aux_cand)) unlink(aux_cand)
  }

  message(sprintf("[Velkscala] Successfully compiled PDF: %s", out_pdf))

  #Return statement
  return(normalizePath(out_pdf, winslash = "/", mustWork = FALSE))
}


#' Emits the CRD Footnotes endnote block (`\printcrdfootnotes`) in LaTeX or DOM output.
#'
#' @return A `knitr::asis_output` object.
#' @export
emit_crd_footnotes <- function () {
  #Guard clauses
  if (requireNamespace("knitr", quietly = TRUE) && !knitr::is_latex_output()) {
    if (isTRUE(getOption("intellte.dom_mode", FALSE))) {
      return(knitr::asis_output("<div class=\"crd-footnotes-slot\" data-crd-footnotes=\"true\"></div>"))
    }
    return(knitr::asis_output(""))
  }

  #Return statement
  return(knitr::asis_output("```{=latex}\n\\printcrdfootnotes\n```"))
}


#' Compiles an RMarkdown manuscript (`.Rmd`) into a DOM-ready Markdown/HTML file
#' for VitePress WYSIWYG rendering via `MarkdownRenderer`.
#'
#' @param arg0_rmd_path Path or defines key to the `.Rmd` file.
#' @param arg1_out_md_path Destination path for the evaluated `.md` file.
#' @param arg2_options Optional named list (`artefact_base_url`, `has_hero_figure`).
#' @return Normalised path to the evaluated `.md` output file.
#' @export
compile_rmd_to_dom_markdown <- function (arg0_rmd_path, arg1_out_md_path, arg2_options = NULL) {
  #Convert from parameters
  defines <- load_filepath_defines()
  rmd_path <- resolve_project_path(arg0_rmd_path, defines)
  out_md_path <- arg1_out_md_path
  options <- if (!is.null(arg2_options)) arg2_options else list()

  #Initialise options
  artefact_base_url <- if (!is.null(options$artefact_base_url)) as.character(options$artefact_base_url) else ""
  has_hero_figure <- if (!is.null(options$has_hero_figure)) isTRUE(options$has_hero_figure) else TRUE

  #Guard clauses
  if (!file.exists(rmd_path)) {
    stop(sprintf("Target RMarkdown file not found for DOM compilation: %s", rmd_path))
  }

  out_dir <- dirname(out_md_path)
  if (!dir.exists(out_dir)) dir.create(out_dir, recursive = TRUE)

  old_opts <- options(
    intellte.artefact_base_url = artefact_base_url,
    intellte.dom_mode = TRUE,
    intellte.figure_counter = if (has_hero_figure) 1L else 0L,
    intellte.table_counter = 0L
  )
  on.exit(options(old_opts), add = TRUE)

  old_wd <- getwd()
  on.exit({
    transient_assets <- c(
      "intellte.cls",
      "crd-mla-numeric.csl",
      "crd_logo.png",
      "intellte-sample.bib"
    )
    for (fname in transient_assets) {
      f_path <- file.path(dirname(rmd_path), fname)
      if (file.exists(f_path)) unlink(f_path)
    }
    setwd(old_wd)
  }, add = TRUE)
  setwd(dirname(rmd_path))

  knitr::knit(
    input = basename(rmd_path),
    output = out_md_path,
    envir = new.env(parent = globalenv()),
    quiet = TRUE,
    encoding = "UTF-8"
  )

  #Return statement
  return(normalizePath(out_md_path, winslash = "/", mustWork = FALSE))
}


#' Custom RMarkdown output format wrapper for `core/rticles/intellte/` (Intellte).
#'
#' @param ... Additional arguments passed to `rmarkdown::pdf_document`.
#' @param keep_tex Logical; whether to keep the intermediate `.tex` file.
#' @param latex_engine Character; LaTeX engine to use (defaults to `"xelatex"`).
#' @return An RMarkdown output format object.
#' @export
intellte_article <- function (..., keep_tex = FALSE, latex_engine = "xelatex") {
  #Declare local instance variables
  defines <- load_filepath_defines()
  template_path <- file.path(defines$directories$rticles_intellte_resources, "template.tex")

  #Ensure TEXINPUTS includes the intellte skeleton directory
  stage_intellte_resources(NULL, defines)

  fmt <- rmarkdown::pdf_document(
    ...,
    keep_tex = keep_tex,
    latex_engine = latex_engine,
    pandoc_args = c("--metadata=link-citations:true"),
    template = template_path
  )

  #Return statement
  return(fmt)
}


#' Configures TEXINPUTS/BIBINPUTS and stages `core/rticles/intellte/skeleton/`
#' class and style files into the target render directory so `xelatex` resolves
#' `intellte.cls`, `crd-mla-numeric.csl`, and `crd_logo.png` in RStudio.
#'
#' @param arg0_target_dir Optional directory where RMarkdown is rendering (defaults to knitr input dir).
#' @param arg1_defines Optional loaded defines list.
#' @return Character vector of newly copied files in `arg0_target_dir` (for optional cleanup).
#' @export
stage_intellte_resources <- function (arg0_target_dir = NULL, arg1_defines = NULL) {
  #Convert from parameters
  defines <- if (!is.null(arg1_defines)) arg1_defines else load_filepath_defines()
  target_dir <- arg0_target_dir

  #Declare local instance variables
  copied_files <- character(0)
  res_dir <- defines$directories$rticles_intellte_resources
  skel_dir <- defines$directories$rticles_intellte_skeleton

  if (is.null(target_dir) && requireNamespace("knitr", quietly = TRUE)) {
    knit_in <- tryCatch(knitr::current_input(dir = TRUE), error = function (e) NULL)
    if (!is.null(knit_in) && nzchar(knit_in)) {
      target_dir <- dirname(knit_in)
      compile_bib_sources(target_dir, knit_in, defines)
    }
  }

  #Prepend intellte skeleton & resources directories to TEXINPUTS, BIBINPUTS, BSTINPUTS
  path_sep <- if (.Platform$OS.type == "windows") ";" else ":"
  curr_tex <- Sys.getenv("TEXINPUTS", unset = "")
  new_tex <- paste(c(skel_dir, res_dir, curr_tex, ""), collapse = path_sep)
  Sys.setenv(
    BIBINPUTS = new_tex,
    BSTINPUTS = new_tex,
    TEXINPUTS = new_tex
  )

  #Also copy required LaTeX class/csl/logo assets into target_dir if missing
  if (!is.null(target_dir) && dir.exists(target_dir) && dir.exists(skel_dir)) {
    asset_names <- c(
      "intellte.cls",
      "crd-mla-numeric.csl",
      "crd_logo.png",
      "intellte-sample.bib"
    )
    for (fname in asset_names) {
      src_file <- file.path(skel_dir, fname)
      dst_file <- file.path(target_dir, fname)
      if (file.exists(src_file)) {
        file.copy(src_file, dst_file, overwrite = TRUE)
        copied_files <- c(copied_files, dst_file)
      }
    }
  }

  #Return statement
  return(copied_files)
}
