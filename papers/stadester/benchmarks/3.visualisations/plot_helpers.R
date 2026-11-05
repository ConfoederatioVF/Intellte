# Shared plotting, Equal-Earth projection, European formatting, and publication table helpers for Stadestér Benchmarks

suppressPackageStartupMessages({
  library(ggplot2)
  library(patchwork)
  library(dplyr)
  library(jsonlite)
  library(scales)
  library(viridisLite)
  library(ragg)
  library(grid)
})

# Closed-form Equal-Earth projection (Savric et al. 2018)
project_equal_earth <- function(lon_deg, lat_deg) {
  a1 <- 1.340264
  a2 <- -0.081106
  a3 <- 0.000893
  a4 <- 0.003796
  m_const <- sqrt(3.0) / 2.0

  lam <- lon_deg * pi / 180.0
  phi <- lat_deg * pi / 180.0
  sin_theta <- pmax(-1.0, pmin(1.0, m_const * sin(phi)))
  theta <- asin(sin_theta)

  t2 <- theta * theta
  t6 <- t2 * t2 * t2
  t8 <- t6 * t2

  denom <- 3.0 * (a1 + 3.0 * a2 * t2 + t6 * (7.0 * a3 + 9.0 * a4 * t2))
  x <- (2.0 * sqrt(3.0) * lam * cos(theta)) / denom
  y <- theta * (a1 + a2 * t2 + t6 * (a3 + a4 * t2))

  data.frame(x = x, y = y)
}

# Builds outer Equal-Earth globe outline polygon
build_equal_earth_outline <- function(n_pts = 361) {
  lats_up <- seq(-90, 90, length.out = n_pts)
  lats_dn <- seq(90, -90, length.out = n_pts)
  left_edge <- project_equal_earth(rep(-180, n_pts), lats_up)
  right_edge <- project_equal_earth(rep(180, n_pts), lats_dn)
  rbind(left_edge, right_edge, left_edge[1, , drop = FALSE])
}

# Converts compiled world_basemap_polygons.json into a flat data.frame for ggplot2
load_world_polygons_df <- function(basemap_json_path) {
  raw <- fromJSON(basemap_json_path, simplifyVector = FALSE)
  rings <- raw$world_rings
  rows_list <- vector("list", length(rings))

  for (i in seq_along(rings)) {
    coords_mat <- do.call(rbind, lapply(rings[[i]]$coords, as.numeric))
    rows_list[[i]] <- data.frame(
      lon = coords_mat[, 1],
      lat = coords_mat[, 2],
      group = rings[[i]]$group
    )
  }
  bind_rows(rows_list)
}

# Projects world polygons into Equal-Earth coordinates, dropping antimeridian-crossing jump artefacts
project_world_polygons_ee <- function(world_df) {
  proj <- project_equal_earth(world_df$lon, world_df$lat)
  out <- data.frame(
    lon = world_df$lon,
    lat = world_df$lat,
    x = proj$x,
    y = proj$y,
    group = world_df$group
  )
  # Split groups if adjacent vertices jump across the antimeridian (> 150 deg lon)
  out <- out %>%
    group_by(group) %>%
    mutate(
      jump = abs(lon - lag(lon, default = first(lon))) > 150,
      sub_id = cumsum(jump)
    ) %>%
    ungroup() %>%
    mutate(plot_group = paste0(group, "_", sub_id))
  out
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

# Formats large numbers with semantic suffixes (k, M, B)
fmt_semantic <- function(vals, digits = 0) {
  sapply(vals, function(v) {
    if (is.null(v) || length(v) == 0 || is.na(v) || !is.finite(v)) return("")
    av <- abs(v)
    if (av >= 1e9) {
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
save_benchmark_png <- function(plot_obj, out_path, width_in = 14, height_in = 9, dpi = 220, bg = "white") {
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

# Renders a clean publication-grade table directly to PNG using base R grid graphics
# Enforces EN-GB / European styling: bold ONLY in column headers and column 1 (never in data cells)
save_publication_table_png <- function(
  headers,
  rows_matrix,
  out_path,
  title_text = NULL,
  subtitle_text = NULL,
  footnote_text = NULL,
  col_widths = NULL,
  col_align = NULL,
  highlight_last_row = FALSE,
  font_size = 9.5,
  row_height_in = 0.27,
  width_in = 13.5,
  dpi = 220
) {
  dir.create(dirname(out_path), recursive = TRUE, showWarnings = FALSE)
  n_rows <- nrow(rows_matrix)
  n_cols <- ncol(rows_matrix)

  if (is.null(col_widths)) {
    col_widths <- rep(1.0 / n_cols, n_cols)
  } else {
    col_widths <- col_widths / sum(col_widths)
  }

  if (is.null(col_align)) {
    col_align <- c("left", rep("right", max(0, n_cols - 1)))
  }

  top_pad_in <- 0.35 +
    ifelse(!is.null(title_text), 0.36, 0) +
    ifelse(!is.null(subtitle_text), 0.26, 0)
  bot_pad_in <- 0.30 + ifelse(!is.null(footnote_text), 0.32, 0)
  hdr_height_in <- row_height_in * 1.35
  total_height_in <- top_pad_in + hdr_height_in + (n_rows * row_height_in) + bot_pad_in

  ragg::agg_png(
    filename = out_path,
    width = width_in,
    height = total_height_in,
    units = "in",
    res = dpi,
    background = "white"
  )
  grid.newpage()

  margin_x <- 0.035
  usable_w <- 1.0 - 2.0 * margin_x
  col_x0 <- margin_x + c(0, cumsum(col_widths)[-n_cols]) * usable_w
  col_w <- col_widths * usable_w

  cur_y_in <- total_height_in - 0.26
  if (!is.null(title_text)) {
    grid.text(
      label = title_text,
      x = margin_x,
      y = unit(cur_y_in, "inches"),
      just = c("left", "top"),
      gp = gpar(fontsize = font_size + 3.0, fontface = "bold", col = "#111111", fontfamily = "sans")
    )
    cur_y_in <- cur_y_in - 0.34
  }
  if (!is.null(subtitle_text)) {
    grid.text(
      label = subtitle_text,
      x = margin_x,
      y = unit(cur_y_in, "inches"),
      just = c("left", "top"),
      gp = gpar(fontsize = font_size - 0.5, fontface = "plain", col = "#444444", fontfamily = "sans")
    )
    cur_y_in <- cur_y_in - 0.26
  }

  table_top_in <- cur_y_in - 0.06
  hdr_bot_in <- table_top_in - hdr_height_in

  # Header background & top/bottom rules
  grid.rect(
    x = margin_x,
    y = unit(hdr_bot_in, "inches"),
    width = usable_w,
    height = unit(hdr_height_in, "inches"),
    just = c("left", "bottom"),
    gp = gpar(fill = "#f3f5f8", col = NA)
  )
  grid.lines(
    x = c(margin_x, margin_x + usable_w),
    y = unit(c(table_top_in, table_top_in), "inches"),
    gp = gpar(col = "#1a1a1a", lwd = 1.6)
  )
  grid.lines(
    x = c(margin_x, margin_x + usable_w),
    y = unit(c(hdr_bot_in, hdr_bot_in), "inches"),
    gp = gpar(col = "#1a1a1a", lwd = 1.1)
  )

  for (j in seq_len(n_cols)) {
    al <- col_align[j]
    tx <- if (al == "left") col_x0[j] + 0.006 else if (al == "center") col_x0[j] + col_w[j] * 0.5 else col_x0[j] + col_w[j] - 0.006
    grid.text(
      label = headers[j],
      x = tx,
      y = unit((table_top_in + hdr_bot_in) * 0.5, "inches"),
      just = c(al, "center"),
      gp = gpar(fontsize = font_size, fontface = "bold", col = "#111111", fontfamily = "sans")
    )
  }

  # Data rows
  for (i in seq_len(n_rows)) {
    r_top <- hdr_bot_in - (i - 1) * row_height_in
    r_bot <- r_top - row_height_in
    is_total <- (highlight_last_row && i == n_rows)

    bg_col <- if (is_total) "#eef2f7" else if (i %% 2 == 0) "#fafbfc" else "#ffffff"
    grid.rect(
      x = margin_x,
      y = unit(r_bot, "inches"),
      width = usable_w,
      height = unit(row_height_in, "inches"),
      just = c("left", "bottom"),
      gp = gpar(fill = bg_col, col = NA)
    )

    if (is_total) {
      grid.lines(
        x = c(margin_x, margin_x + usable_w),
        y = unit(c(r_top, r_top), "inches"),
        gp = gpar(col = "#333333", lwd = 1.0)
      )
    } else if (i < n_rows) {
      grid.lines(
        x = c(margin_x, margin_x + usable_w),
        y = unit(c(r_bot, r_bot), "inches"),
        gp = gpar(col = "#e4e7ec", lwd = 0.6)
      )
    }

    for (j in seq_len(n_cols)) {
      al <- col_align[j]
      tx <- if (al == "left") col_x0[j] + 0.006 else if (al == "center") col_x0[j] + col_w[j] * 0.5 else col_x0[j] + col_w[j] - 0.006
      # Bold strictly restricted to column 1 when highlighting label/summary row
      cell_face <- if (j == 1) "bold" else "plain"
      grid.text(
        label = as.character(rows_matrix[i, j]),
        x = tx,
        y = unit((r_top + r_bot) * 0.5, "inches"),
        just = c(al, "center"),
        gp = gpar(fontsize = font_size - 0.3, fontface = cell_face, col = "#1a1a1a", fontfamily = "sans")
      )
    }
  }

  table_bot_in <- hdr_bot_in - n_rows * row_height_in
  grid.lines(
    x = c(margin_x, margin_x + usable_w),
    y = unit(c(table_bot_in, table_bot_in), "inches"),
    gp = gpar(col = "#1a1a1a", lwd = 1.5)
  )

  if (!is.null(footnote_text)) {
    grid.text(
      label = footnote_text,
      x = margin_x,
      y = unit(table_bot_in - 0.14, "inches"),
      just = c("left", "top"),
      gp = gpar(fontsize = font_size - 1.2, fontface = "italic", col = "#444444", fontfamily = "sans")
    )
  }

  dev.off()
  message(sprintf("  -> Saved table %s", out_path))
}
