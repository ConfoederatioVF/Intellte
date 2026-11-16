args <- commandArgs(trailingOnly = TRUE)
if (length(args) < 1) {
  stop("Usage: Rscript r_dom_worker.R <jobs.json>")
}

jobs_path <- args[1]
worker_init_dir <- getwd()

fw_candidates <- c(
  file.path(worker_init_dir, "core", "framework", "R", "framework_init.R"),
  file.path(dirname(jobs_path), "..", "..", "..", "core", "framework", "R", "framework_init.R")
)
fw_init <- ""
for (cand in fw_candidates) {
  if (file.exists(cand)) {
    fw_init <- normalizePath(cand, winslash = "/")
    break
  }
}
if (!nzchar(fw_init)) {
  stop("Could not locate core/framework/R/framework_init.R for R worker.")
}

source(fw_init, local = FALSE, encoding = "UTF-8")

parse_jobs_json <- function (arg0_path) {
  txt <- paste(readLines(arg0_path, warn = FALSE, encoding = "UTF-8"), collapse = "\n")
  if (requireNamespace("jsonlite", quietly = TRUE)) {
    return(jsonlite::fromJSON(txt, simplifyVector = FALSE))
  }
  stop("Package 'jsonlite' is required for parallel batch R DOM compilation.")
}

jobs <- parse_jobs_json(jobs_path)
for (idx in seq_along(jobs)) {
  job <- jobs[[idx]]
  rmd_path <- as.character(job$rmd_path)
  cache_file <- as.character(job$cache_file)
  artefact_base_url <- as.character(job$artefact_base_url)
  has_hero_figure <- isTRUE(job$has_hero_figure)

  tryCatch({
    compile_rmd_to_dom_markdown(
      rmd_path,
      cache_file,
      list(
        artefact_base_url = artefact_base_url,
        has_hero_figure = has_hero_figure
      )
    )
  }, error = function (e) {
    message(sprintf("[r_dom_worker] Error compiling %s: %s", rmd_path, conditionMessage(e)))
  })
}
