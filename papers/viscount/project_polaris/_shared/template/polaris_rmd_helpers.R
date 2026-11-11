# Shared RMarkdown & XeLaTeX environment initialiser for Project POLARIS (population_regional/russia)
local({
  tpl_candidates <- c("../../_shared/template", "../_shared/template", "_shared/template")
  for (cand in tpl_candidates) {
    if (dir.exists(cand)) {
      abs_tpl <- normalizePath(cand, winslash = "/", mustWork = FALSE)
      cur_tex <- Sys.getenv("TEXINPUTS", unset = "")
      sep_ch <- if (.Platform$OS.type == "windows") ";" else ":"
      if (!grepl(abs_tpl, cur_tex, fixed = TRUE)) {
        Sys.setenv(TEXINPUTS = paste0(abs_tpl, "//", sep_ch, cur_tex, sep_ch))
      }
      break
    }
  }
})


