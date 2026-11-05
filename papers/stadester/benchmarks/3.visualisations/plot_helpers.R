# Shared R plotting, font registration, and European formatting helpers for Stadestér Benchmarks

suppressPackageStartupMessages({
  library(ggplot2)
  library(patchwork)
  library(dplyr)
  library(jsonlite)
  library(scales)
  library(ragg)
  library(systemfonts)
})

# Registers Intellte CRD fonts (Jost & Karla) with systemfonts so ragg renders crisp typography
register_crd_fonts <- function(project_root) {
  fonts_dir <- file.path(project_root, "core", "rticles", "intellte", "resources", "fonts")
  jost_reg <- file.path(fonts_dir, "Jost-400-Book.otf")
  jost_bold <- file.path(fonts_dir, "Jost-700-Bold.otf")
  karla_reg <- file.path(fonts_dir, "Karla-Regular.ttf")
  karla_bold <- file.path(fonts_dir, "Karla-Bold.ttf")

  if (file.exists(jost_reg) && file.exists(jost_bold)) {
    tryCatch({
      systemfonts::register_font(
        name = "Jost",
        plain = jost_reg,
        bold = jost_bold
      )
    }, error = function(e) NULL)
  }
  if (file.exists(karla_reg) && file.exists(karla_bold)) {
    tryCatch({
      systemfonts::register_font(
        name = "Karla",
        plain = karla_reg,
        bold = karla_bold
      )
    }, error = function(e) NULL)
  }
}

# Formats numeric vector using European comma decimals (",") and period thousands (".")
fmt_eu <- function(vals, digits = 2) {
  sapply(vals, function(v) {
    if (is.null(v) || length(v) == 0 || is.na(v) || !is.finite(v)) return("N/A")
    neg <- v < 0
    s <- formatC(abs(v), format = "f", digits = digits)
    parts <- strsplit(s, "\\.")[[1]]
    int_part <- gsub("(?<=\\d)(?=(\\d{3})+$)", ".", parts[1], perl = TRUE)
    sgn <- ifelse(neg && as.numeric(s) > 0, "-", "")
    if (digits > 0 && length(parts) > 1) {
      paste0(sgn, int_part, ",", parts[2])
    } else {
      paste0(sgn, int_part)
    }
  })
}

# Formats large numbers with semantic suffixes (k, M, B, T)
fmt_semantic <- function(vals, digits = 0) {
  sapply(vals, function(v) {
    if (is.null(v) || length(v) == 0 || is.na(v) || !is.finite(v)) return("")
    av <- abs(v)
    if (av >= 1e12) {
      paste0(fmt_eu(v / 1e12, digits), "T")
    } else if (av >= 1e9) {
      paste0(fmt_eu(v / 1e9, digits), "B")
    } else if (av >= 1e6) {
      paste0(fmt_eu(v / 1e6, digits), "M")
    } else if (av >= 1e3) {
      paste0(fmt_eu(v / 1e3, digits), "k")
    } else {
      fmt_eu(v, digits)
    }
  })
}

# Saves a ggplot/patchwork object via high-DPI ragg::agg_png
save_benchmark_png <- function(plot_obj, out_path, width_in = 16, height_in = 8, dpi = 300, bg = "white") {
  dir.create(dirname(out_path), recursive = TRUE, showWarnings = FALSE)
  ragg::agg_png(
    filename = out_path,
    width = width_in,
    height = height_in,
    units = "in",
    res = dpi,
    background = bg
  )
  print(plot_obj)
  dev.off()
  message(sprintf("  -> Saved %s", out_path))
}
