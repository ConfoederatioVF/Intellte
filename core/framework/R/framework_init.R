# ==============================================================================
# Velkscala R Framework Bootstrapper (core/framework/R/framework_init.R)
# ==============================================================================
# Sources all core/framework/R/ templating, PDF embedding, pagination, and
# intellte/rticles modules and initialises `velkscala_defines` in the session.
# ==============================================================================

local({
  #Locate core/framework/R directory relative to this script or project root
  init_dir <- NULL
  for (i in sys.nframe():1) {
    ofile <- sys.frame(i)$ofile
    if (!is.null(ofile) && nzchar(ofile)) {
      init_dir <- dirname(normalizePath(ofile, winslash = "/", mustWork = FALSE))
      break
    }
  }
  if (is.null(init_dir)) {
    #Fallback search from working directory up to parent Intellte root
    fallback_cands <- c(
      file.path(getwd(), "core", "framework", "R"),
      file.path(getwd(), "..", "core", "framework", "R"),
      file.path(getwd(), "..", "..", "core", "framework", "R"),
      file.path(getwd(), "..", "..", "..", "core", "framework", "R"),
      file.path(getwd(), "..", "..", "..", "..", "core", "framework", "R"),
      file.path(getwd(), "..", "..", "..", "..", "..", "core", "framework", "R")
    )
    for (cand in fallback_cands) {
      if (dir.exists(cand)) {
        init_dir <- normalizePath(cand, winslash = "/")
        break
      }
    }
  }

  module_files <- c(
    "filepath_loader.R",
    "layout_pagination.R",
    "table_templating.R",
    "figure_templating.R",
    "prose_templating.R",
    "intellte_format.R"
  )

  for (mod in module_files) {
    mod_path <- file.path(init_dir, mod)
    if (file.exists(mod_path)) {
      source(mod_path, local = FALSE, encoding = "UTF-8")
    } else {
      stop(sprintf("Required R framework module missing: %s", mod_path))
    }
  }
})

#Load global filepath defines and stage intellte resources if knitting
velkscala_defines <- load_filepath_defines()
stage_intellte_resources(NULL, velkscala_defines)
crd_canonical_render_table_template <- render_table_template
crd_canonical_render_figure_template <- render_figure_template
crd_canonical_sanitize_latex_text <- sanitize_latex_text
crd_canonical_sanitize_prose_unicode_for_latex <- sanitize_prose_unicode_for_latex

if (requireNamespace("knitr", quietly = TRUE)) {
  env_g_init <- knitr::knit_global()
  assign("render_table_template", crd_canonical_render_table_template, envir = env_g_init)
  assign("render_figure_template", crd_canonical_render_figure_template, envir = env_g_init)
  assign("sanitize_latex_text", crd_canonical_sanitize_latex_text, envir = env_g_init)
  assign("sanitize_prose_unicode_for_latex", crd_canonical_sanitize_prose_unicode_for_latex, envir = env_g_init)

  knitr::opts_chunk$set(
    echo = FALSE,
    eval = TRUE,
    fig.align = "center",
    message = FALSE,
    warning = FALSE
  )

  # Ensure any inline setup chunk overrides of render_table_template are replaced
  # with the canonical borderless longtable template (captions below table, multi-page continuation)
  knitr::opts_hooks$set(echo = function (arg0_options) {
    env_g <- knitr::knit_global()
    if (exists("crd_canonical_render_table_template", inherits = TRUE)) {
      assign("render_table_template", crd_canonical_render_table_template, envir = env_g)
    }
    if (exists("crd_canonical_render_figure_template", inherits = TRUE)) {
      assign("render_figure_template", crd_canonical_render_figure_template, envir = env_g)
    }
    if (exists("crd_canonical_sanitize_latex_text", inherits = TRUE)) {
      assign("sanitize_latex_text", crd_canonical_sanitize_latex_text, envir = env_g)
    }
    if (exists("crd_canonical_sanitize_prose_unicode_for_latex", inherits = TRUE)) {
      assign("sanitize_prose_unicode_for_latex", crd_canonical_sanitize_prose_unicode_for_latex, envir = env_g)
    }
    return(arg0_options)
  })

  local({
    prev_doc_hook <- knitr::knit_hooks$get("document")
    if (!isTRUE(attr(prev_doc_hook, "intellte_prose_hook"))) {
      wrapped_doc_hook <- function (arg0_x) {
        formatted_x <- format_knitted_document(arg0_x)
        if (is.function(prev_doc_hook)) {
          return(prev_doc_hook(formatted_x))
        }
        return(formatted_x)
      }
      attr(wrapped_doc_hook, "intellte_prose_hook") <- TRUE
      knitr::knit_hooks$set(document = wrapped_doc_hook)
    }
  })
}

