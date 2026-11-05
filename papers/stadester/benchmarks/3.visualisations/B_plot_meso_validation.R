# Section B: Meso-Validation Visualisations (Figures 28, 29, 30, 31, 32, 33, 34, 35)

args <- commandArgs(trailingOnly = TRUE)
script_dir <- if (length(args) >= 1) args[1] else "."
source(file.path(script_dir, "plot_helpers.R"))

bench_root <- normalizePath(file.path(script_dir, ".."), winslash = "/", mustWork = TRUE)
compiled_dir <- file.path(bench_root, "1.compiler", "compiled")
results_dir <- file.path(bench_root, "2.results")
out_dir <- file.path(script_dir, "2.meso_validation")
dir.create(out_dir, recursive = TRUE, showWarnings = FALSE)

message("[3.visualisations/B] Loading Meso-Validation results...")
reg_cog_res <- fromJSON(file.path(results_dir, "meso_regional_cogs.json"), simplifyVector = FALSE)
st_res <- fromJSON(file.path(results_dir, "meso_global_30_spatiotemporal.json"), simplifyVector = FALSE)
top120_res <- fromJSON(file.path(results_dir, "meso_top_120_rankings.json"), simplifyDataFrame = TRUE)
basemap_raw <- fromJSON(file.path(compiled_dir, "world_basemap_polygons.json"), simplifyVector = FALSE)
ref_raw <- fromJSON(file.path(compiled_dir, "reference_datasets_compiled.json"), simplifyVector = FALSE)

world_df <- load_world_polygons_df(file.path(compiled_dir, "world_basemap_polygons.json"))
world_ee <- project_world_polygons_ee(world_df)
ee_outline <- build_equal_earth_outline()
version_lbl <- reg_cog_res$version_label

# ---------------------------------------------------------------------------
# 1. Figure 28: Regional Centres of Population (1975AD-2000AD) 4x3 Grid
# ---------------------------------------------------------------------------
message("[3.visualisations/B] Rendering Figure 28 (Regional Centres of Population 4x3)...")

reg_panels <- vector("list", length(reg_cog_res$regions))
for (i in seq_along(reg_cog_res$regions)) {
  reg <- reg_cog_res$regions[[i]]
  ann_df <- bind_rows(lapply(reg$annual_series, as.data.frame))

  lats_all <- c(ann_df$base_lat, ann_df$ghsl_lat)
  lons_all <- c(ann_df$base_lon, ann_df$ghsl_lon)
  clat <- mean(range(lats_all))
  clon <- mean(range(lons_all))
  cos_lat <- max(0.25, cos(clat * pi / 180.0))

  span_lat <- max(3.6, diff(range(lats_all)) * 2.6 + 2.2)
  span_lon <- max(span_lat * 1.65 / cos_lat, diff(range(lons_all)) * 2.4 + 3.2)

  xlim_r <- c(max(-179.5, clon - span_lon * 0.5), min(179.5, clon + span_lon * 0.5))
  ylim_r <- c(max(-85.0, clat - span_lat * 0.5), min(85.0, clat + span_lat * 0.5))

  # 200 km scale bar in degrees longitude at clat
  dlon_200 <- 200.0 / (111.32 * cos_lat)
  sb_x0 <- xlim_r[1] + 0.04 * diff(xlim_r)
  sb_x1 <- sb_x0 + dlon_200
  sb_y <- ylim_r[1] + 0.06 * diff(ylim_r)

  b_start <- ann_df[1, ]
  b_end <- ann_df[nrow(ann_df), ]
  b_mid <- ann_df[ceiling(nrow(ann_df) / 2), ]

  lbl_pts <- data.frame(
    lon = c(b_start$base_lon, b_end$base_lon, b_start$ghsl_lon, b_end$ghsl_lon, b_mid$base_lon, b_mid$ghsl_lon),
    lat = c(b_start$base_lat, b_end$base_lat, b_start$ghsl_lat, b_end$ghsl_lat, b_mid$base_lat, b_mid$ghsl_lat),
    txt = c("1975", "2000", "1975", "2000", "Base", "GHSL"),
    vx = c(-1, -1, 1, 1, -1.25, 1.25) * (0.048 * diff(xlim_r)),
    vy = c(1, -1, -1, 1, 1.35, -1.35) * (0.048 * diff(ylim_r)),
    face = c("plain", "plain", "plain", "plain", "bold", "bold")
  )

  p_main <- ggplot() +
    geom_polygon(
      data = world_df,
      aes(x = lon, y = lat, group = group),
      fill = "#d6d6d6",
      colour = "#5c6773",
      linewidth = 0.25
    ) +
    geom_path(
      data = ann_df,
      aes(x = base_lon, y = base_lat),
      colour = "#e63946",
      linewidth = 0.75
    ) +
    geom_point(
      data = ann_df,
      aes(x = base_lon, y = base_lat),
      colour = "#e63946",
      size = 0.9
    ) +
    geom_path(
      data = ann_df,
      aes(x = ghsl_lon, y = ghsl_lat),
      colour = "#1d6fd6",
      linewidth = 0.75
    ) +
    geom_point(
      data = ann_df,
      aes(x = ghsl_lon, y = ghsl_lat),
      colour = "#1d6fd6",
      size = 0.9
    ) +
    geom_label(
      data = lbl_pts,
      aes(x = lon + vx, y = lat + vy, label = txt, fontface = face),
      size = 2.25,
      colour = "#111111",
      fill = alpha("white", 0.74),
      linewidth = 0,
      label.padding = unit(0.08, "lines"),
      label.r = unit(0.06, "lines")
    ) +
    annotate("segment", x = sb_x0, xend = sb_x1, y = sb_y, yend = sb_y, colour = "#111111", linewidth = 0.65) +
    annotate("text", x = (sb_x0 + sb_x1) * 0.5, y = sb_y + 0.045 * diff(ylim_r), label = "200km", size = 2.2, colour = "#111111") +
    coord_fixed(ratio = 1.0 / cos_lat, xlim = xlim_r, ylim = ylim_r, expand = FALSE) +
    labs(title = reg$name) +
    theme_void(base_family = "sans") +
    theme(
      plot.title = element_text(hjust = 0.5, size = 8.8, face = "bold", margin = margin(b = 3)),
      panel.background = element_rect(fill = "#a8d5f2", colour = "#666666", linewidth = 0.45),
      plot.margin = margin(3, 4, 3, 4)
    )

  # World locator inset map at bottom-right
  inset_lon <- c(max(-175, clon - 45), min(175, clon + 45))
  inset_lat <- c(max(-65, clat - 28), min(80, clat + 28))
  box_df <- data.frame(xmin = xlim_r[1], xmax = xlim_r[2], ymin = ylim_r[1], ymax = ylim_r[2])

  p_inset <- ggplot() +
    geom_polygon(
      data = world_df,
      aes(x = lon, y = lat, group = group),
      fill = "#e6e8eb",
      colour = "#888888",
      linewidth = 0.15
    ) +
    geom_rect(
      data = box_df,
      aes(xmin = xmin, xmax = xmax, ymin = ymin, ymax = ymax),
      fill = NA,
      colour = "#dc2626",
      linewidth = 0.55
    ) +
    coord_cartesian(xlim = inset_lon, ylim = inset_lat, expand = FALSE) +
    theme_void() +
    theme(
      panel.background = element_rect(fill = "white", colour = "#222222", linewidth = 0.45),
      plot.background = element_rect(fill = NA, colour = NA),
      plot.margin = margin(0, 0, 0, 0)
    )

  reg_panels[[i]] <- p_main + inset_element(p_inset, left = 0.67, bottom = 0.01, right = 0.995, top = 0.35, align_to = "panel")
}

p_fig28 <- wrap_plots(reg_panels, ncol = 3) +
  plot_annotation(
    title = paste0("Centres of population (Stadestér Base vs. Stadestér-GHSL) / 1975AD-2000AD [", version_lbl, "]"),
    caption = "*Areas highlighted in insets are approximate. Red = Stadestér Base; Blue = GHSL.",
    theme = theme(
      plot.title = element_text(hjust = 0.5, size = 14, face = "plain", margin = margin(b = 8)),
      plot.caption = element_text(hjust = 0, size = 8.5, colour = "#333333")
    )
  )

save_benchmark_png(
  p_fig28,
  file.path(out_dir, "fig28_regional_centres_of_population.png"),
  width_in = 13.5,
  height_in = 11.2,
  dpi = 220
)

# ---------------------------------------------------------------------------
# 2. Figure 29: Regional CoG Geodesic Distance Over Time (1975-2000)
# ---------------------------------------------------------------------------
message("[3.visualisations/B] Rendering Figure 29 (Regional CoG Distance 1975-2000)...")

dist_rows <- lapply(reg_cog_res$regions, function(r) {
  df <- bind_rows(lapply(r$annual_series, as.data.frame))
  df$region_name <- r$name
  df$hex <- r$hex
  df
})
df_reg_dist <- bind_rows(dist_rows)
reg_levels <- sapply(reg_cog_res$regions, function(r) r$name)
reg_hex_map <- setNames(sapply(reg_cog_res$regions, function(r) r$hex), reg_levels)
df_reg_dist$region_name <- factor(df_reg_dist$region_name, levels = reg_levels)

p_fig29 <- ggplot(df_reg_dist, aes(x = year, y = distance_km, colour = region_name)) +
  geom_line(linewidth = 0.75, alpha = 0.92) +
  scale_x_continuous(breaks = seq(1975, 2000, by = 5), expand = c(0.01, 0.01)) +
  scale_y_continuous(labels = function(v) fmt_eu(v, 0)) +
  scale_colour_manual(values = reg_hex_map, name = "Region") +
  labs(
    title = paste0("Distance between Base and GHSL Regional Centres of Gravity (1975-2000) [", version_lbl, "]"),
    x = "Year",
    y = "Geodesic Distance (km)"
  ) +
  theme_minimal(base_family = "sans") +
  theme(
    plot.title = element_text(hjust = 0.5, size = 11.0, colour = "#333333"),
    panel.grid.minor = element_blank(),
    panel.grid.major = element_line(colour = "#eeeeee", linewidth = 0.4),
    axis.line.x = element_line(colour = "#888888", linewidth = 0.4),
    legend.position = "right",
    legend.title = element_text(size = 8.5, face = "bold"),
    legend.text = element_text(size = 8.0),
    legend.key.height = unit(0.38, "cm")
  )

save_benchmark_png(
  p_fig29,
  file.path(out_dir, "fig29_regional_cog_distance_over_time.png"),
  width_in = 13.0,
  height_in = 4.6,
  dpi = 220
)

# ---------------------------------------------------------------------------
# 3. Figure 30: Regional CoG Deviations Table PNG
# ---------------------------------------------------------------------------
message("[3.visualisations/B] Rendering Figure 30 (Regional CoG Deviations Table)...")

fig30_rows <- lapply(reg_cog_res$regions, function(r) {
  c(
    r$name,
    fmt_eu(r$min_km, 2),
    fmt_eu(r$max_km, 2),
    paste0(fmt_eu(r$mean_km, 2), " (", fmt_eu(r$mean_pct_geodesic, 2), "%)"),
    paste0(fmt_eu(r$sd_km, 2), " (", fmt_eu(r$sd_pct_geodesic, 2), "%)"),
    paste0("~", fmt_eu(r$longest_geodesic_km, 0))
  )
})
wa <- reg_cog_res$world_average
fig30_mat <- do.call(rbind, c(fig30_rows, list(c(
  "World (Avg.)",
  fmt_eu(wa$min_km, 2),
  fmt_eu(wa$max_km, 2),
  paste0(fmt_eu(wa$mean_km, 2), " (", fmt_eu(wa$mean_pct_geodesic, 2), "%)"),
  paste0(fmt_eu(wa$sd_km, 2), " (", fmt_eu(wa$sd_pct_geodesic, 2), "%)"),
  "N/A"
))))

save_publication_table_png(
  headers = c("Region", "Min. Deviation", "Max. Deviation", "Mean (% Error)", "SD (% Error)", "Longest Geodesic"),
  rows_matrix = fig30_mat,
  out_path = file.path(out_dir, "fig30_regional_cog_deviations_table.png"),
  title_text = paste0("Figure 30. Regional Centre of Population Deviations: Stadestér Base vs. GHSL (", version_lbl, ")"),
  subtitle_text = "Deviations in kilometres over 1975AD-2000AD; percentages relative to each region's longest geodesic.",
  footnote_text = "Note. Longest geodesic figures are approximate diagonals of the largest contiguous geometry after per-pixel Voronoi binning.",
  col_widths = c(0.24, 0.14, 0.14, 0.18, 0.17, 0.13),
  highlight_last_row = TRUE,
  width_in = 12.5
)

# ---------------------------------------------------------------------------
# 4. Figures 31 & 32: Global 30 Spatiotemporal Development (1800-2000)
# ---------------------------------------------------------------------------
message("[3.visualisations/B] Rendering Figures 31 & 32 (Global 30 Spatiotemporal Development)...")

city_order_names <- sapply(st_res$cities, function(c) c$name)
city_order_angel_lbls <- sapply(st_res$cities, function(c) {
  paste0(c$name, " (J=", fmt_eu(c$angel_jaccard, 3), ")")
})

build_spatiotemporal_layers <- function(use_spliced = FALSE, use_angel_labels = FALSE) {
  land_list <- list()
  coast_list <- list()
  bounds_list <- list()
  px_list <- list()
  angel_list <- list()

  for (idx in seq_along(st_res$cities)) {
    c_obj <- st_res$cities[[idx]]
    cid <- c_obj$id
    panel_lbl <- if (use_angel_labels) city_order_angel_lbls[idx] else city_order_names[idx]

    # Bounds
    bb <- c_obj$bbox
    bounds_list[[idx]] <- data.frame(
      panel = panel_lbl,
      lon = c(bb$lon_min, bb$lon_max),
      lat = c(bb$lat_min, bb$lat_max)
    )

    # Land cells & coastlines
    cw <- basemap_raw$city_windows[[cid]]
    if (!is.null(cw) && length(cw$land_centres) > 0) {
      lc_mat <- do.call(rbind, lapply(cw$land_centres, as.numeric))
      land_list[[idx]] <- data.frame(panel = panel_lbl, lon = lc_mat[, 1], lat = lc_mat[, 2])
    }
    if (!is.null(cw) && length(cw$coast_segments) > 0) {
      cs_mat <- do.call(rbind, lapply(cw$coast_segments, as.numeric))
      coast_list[[idx]] <- data.frame(
        panel = panel_lbl,
        x0 = cs_mat[, 1],
        y0 = cs_mat[, 2],
        x1 = cs_mat[, 3],
        y1 = cs_mat[, 4]
      )
    }

    # Urban pixels
    raw_px <- if (use_spliced) c_obj$spliced_pixels else c_obj$base_pixels
    if (length(raw_px) > 0) {
      px_df <- bind_rows(lapply(raw_px, as.data.frame))
      px_df$panel <- panel_lbl
      px_list[[idx]] <- px_df
    }

    # Angel overlay
    ov <- ref_raw$angel_visual_overlays[[cid]]
    if (!is.null(ov) && length(ov) > 0) {
      ov_mat <- do.call(rbind, lapply(ov, as.numeric))
      angel_list[[idx]] <- data.frame(panel = panel_lbl, lon = ov_mat[, 1], lat = ov_mat[, 2])
    }
  }

  lvls <- if (use_angel_labels) city_order_angel_lbls else city_order_names
  fix_f <- function(df) {
    if (is.null(df) || nrow(df) == 0) return(df)
    df$panel <- factor(df$panel, levels = lvls)
    df
  }

  list(
    bounds = fix_f(bind_rows(bounds_list)),
    land = fix_f(bind_rows(land_list)),
    coast = fix_f(bind_rows(coast_list)),
    pixels = fix_f(bind_rows(px_list)),
    angel = fix_f(bind_rows(angel_list))
  )
}

render_global_30_grid <- function(layers_obj, show_angel = FALSE, subtitle_tag = "") {
  cell_w <- 360.0 / 4320.0
  cell_h <- 180.0 / 2160.0

  p <- ggplot() +
    geom_blank(data = layers_obj$bounds, aes(x = lon, y = lat)) +
    geom_tile(
      data = layers_obj$land,
      aes(x = lon, y = lat),
      width = cell_w * 1.02,
      height = cell_h * 1.02,
      fill = "#333333",
      colour = NA
    ) +
    geom_segment(
      data = layers_obj$coast,
      aes(x = x0, y = y0, xend = x1, yend = y1),
      colour = "#e8e8e8",
      linewidth = 0.22
    ) +
    geom_point(
      data = layers_obj$pixels,
      aes(x = lon, y = lat, colour = first_year, size = pmax(100, last_population)),
      alpha = 0.88
    )

  if (show_angel && !is.null(layers_obj$angel) && nrow(layers_obj$angel) > 0) {
    p <- p + geom_point(
      data = layers_obj$angel,
      aes(x = lon, y = lat),
      shape = 15,
      size = 0.42,
      colour = "#f2c88b",
      alpha = 0.36
    )
  }

  p +
    facet_wrap(~ panel, ncol = 5, scales = "free") +
    scale_colour_viridis_c(
      limits = c(1800, 2000),
      breaks = seq(1800, 2000, by = 50),
      name = "First Year of Appearance"
    ) +
    scale_size_area(max_size = 3.8, guide = "none") +
    scale_x_continuous(expand = c(0, 0), n.breaks = 3) +
    scale_y_continuous(expand = c(0, 0), n.breaks = 3) +
    labs(subtitle = subtitle_tag) +
    theme_minimal(base_family = "sans") +
    theme(
      aspect.ratio = 1.0,
      plot.background = element_rect(fill = "#2b2b2b", colour = NA),
      panel.background = element_rect(fill = "#080808", colour = "#555555", linewidth = 0.3),
      panel.grid.major = element_line(colour = "#444444", linewidth = 0.16, linetype = "dotted"),
      panel.grid.minor = element_blank(),
      strip.background = element_rect(fill = "#2b2b2b", colour = NA),
      strip.text = element_text(colour = "#f2f2f2", size = 6.2, face = "bold", margin = margin(b = 1.5, t = 1.5)),
      axis.text = element_text(colour = "#aaaaaa", size = 4.2),
      axis.title = element_blank(),
      plot.subtitle = element_text(colour = "#e0e0e0", size = 9.5, face = "bold", hjust = 0.5, margin = margin(b = 4)),
      legend.position = "right",
      legend.background = element_rect(fill = "#2b2b2b", colour = NA),
      legend.title = element_text(colour = "#eeeeee", size = 7.5, angle = 90),
      legend.text = element_text(colour = "#dddddd", size = 6.8),
      legend.key.height = unit(1.6, "cm"),
      legend.key.width = unit(0.28, "cm"),
      panel.spacing = unit(0.14, "cm")
    ) +
    guides(colour = guide_colourbar(title.position = "right", title.hjust = 0.5))
}

layers_base <- build_spatiotemporal_layers(use_spliced = FALSE, use_angel_labels = FALSE)
layers_spliced <- build_spatiotemporal_layers(use_spliced = TRUE, use_angel_labels = FALSE)
layers_angel <- build_spatiotemporal_layers(use_spliced = FALSE, use_angel_labels = TRUE)

p31_left <- render_global_30_grid(layers_base, show_angel = FALSE, subtitle_tag = "Stadestér Base (1800AD-2000AD)")
p31_right <- render_global_30_grid(layers_spliced, show_angel = FALSE, subtitle_tag = "Stadestér-GHSL Spliced (1800AD-2000AD)")

p_fig31 <- (p31_left | p31_right) +
  plot_annotation(
    title = paste0("Spatiotemporal Development / Global 30 (Stadestér Base - Stadestér-GHSL) [", version_lbl, "]          1pt = 1ihb"),
    theme = theme(
      plot.background = element_rect(fill = "#2b2b2b", colour = NA),
      plot.title = element_text(colour = "white", size = 12.5, face = "plain", hjust = 0.02, margin = margin(t = 6, b = 4))
    )
  )

save_benchmark_png(
  p_fig31,
  file.path(out_dir, "fig31_global_30_base_vs_ghsl.png"),
  width_in = 18.0,
  height_in = 10.6,
  dpi = 220,
  bg = "#2b2b2b"
)

pooled_j_str <- fmt_eu(st_res$summary$pooled_angel_jaccard, 3)
mean_j_str <- fmt_eu(st_res$summary$mean_angel_jaccard, 3)

p32_left <- render_global_30_grid(
  layers_angel,
  show_angel = TRUE,
  subtitle_tag = paste0("Stadestér Base + Angel Atlas of Urban Expansion Overlay (Pooled J = ", pooled_j_str, "; Mean J = ", mean_j_str, ")")
)
p32_right <- render_global_30_grid(
  layers_base,
  show_angel = FALSE,
  subtitle_tag = "Stadestér Base Reference Without Overlay (1800AD-2000AD)"
)

p_fig32 <- (p32_left | p32_right) +
  plot_annotation(
    title = paste0("Spatiotemporal Development / Global 30 / ", version_lbl, " vs. Angel Atlas of Urban Expansion"),
    caption = "*Warm amber overlay shows Angel et al. Atlas of Urban Expansion urban footprint (1800AD-2000AD). Per-city J values denote exact 30-arcsec spatial Jaccard similarity.",
    theme = theme(
      plot.background = element_rect(fill = "#2b2b2b", colour = NA),
      plot.title = element_text(colour = "white", size = 12.5, face = "plain", hjust = 0.02, margin = margin(t = 6, b = 4)),
      plot.caption = element_text(colour = "#cccccc", size = 8.0, hjust = 0.01, margin = margin(t = 4, b = 4))
    )
  )

save_benchmark_png(
  p_fig32,
  file.path(out_dir, "fig32_global_30_base_vs_angel.png"),
  width_in = 18.0,
  height_in = 10.8,
  dpi = 220,
  bg = "#2b2b2b"
)

# ---------------------------------------------------------------------------
# 5. Figure 33: Top 120 Cities by Area, Density (<1975 & >=1975), Population
# ---------------------------------------------------------------------------
message("[3.visualisations/B] Rendering Figure 33 (Top 120 Maps & Rank Bars)...")

build_top120_pair <- function(df_cat, map_title, bar_title, y_label, y_fmt_fn) {
  ee_pts <- project_equal_earth(df_cat$lon, df_cat$lat)
  df_cat$x <- ee_pts$x
  df_cat$y <- ee_pts$y
  df_plot <- df_cat %>% arrange(value)

  p_map <- ggplot() +
    geom_polygon(data = ee_outline, aes(x = x, y = y), fill = "white", colour = "#888888", linewidth = 0.35) +
    geom_polygon(data = world_ee, aes(x = x, y = y, group = plot_group), fill = "#dedede", colour = "#aaaaaa", linewidth = 0.15) +
    geom_point(
      data = df_plot,
      aes(x = x, y = y, size = value, fill = hex),
      shape = 21,
      colour = "#222222",
      stroke = 0.25,
      alpha = 0.72
    ) +
    scale_fill_identity() +
    scale_size_area(max_size = 7.5, guide = "none") +
    coord_fixed(ratio = 1.0) +
    labs(title = map_title) +
    theme_void(base_family = "sans") +
    theme(
      plot.title = element_text(hjust = 0.5, size = 8.5, colour = "#333333", margin = margin(b = 2)),
      plot.margin = margin(2, 4, 4, 4)
    )

  p_bar <- ggplot(df_cat, aes(x = rank, y = value, fill = hex)) +
    geom_col(width = 0.88) +
    scale_fill_identity() +
    scale_x_continuous(breaks = seq(20, 120, by = 20), expand = c(0.01, 0.01)) +
    scale_y_continuous(labels = y_fmt_fn, expand = expansion(mult = c(0, 0.05))) +
    labs(title = bar_title, x = "Rank", y = y_label) +
    theme_minimal(base_family = "sans") +
    theme(
      plot.title = element_text(hjust = 0.5, size = 8.5, colour = "#333333"),
      panel.background = element_rect(fill = "#e8eef5", colour = NA),
      panel.grid.major.y = element_line(colour = "white", linewidth = 0.45),
      panel.grid.major.x = element_blank(),
      panel.grid.minor = element_blank(),
      axis.title = element_text(size = 7.5, colour = "#333333"),
      axis.text = element_text(size = 6.8, colour = "#444444"),
      plot.margin = margin(4, 6, 4, 6)
    )

  list(map = p_map, bar = p_bar)
}

pair_area <- build_top120_pair(
  top120_res$rankings$area,
  "City Area Map",
  "City Area by Rank",
  "Area (km^2)",
  function(v) fmt_semantic(v, 0)
)
pair_dens_base <- build_top120_pair(
  top120_res$rankings$density,
  "City Centre Density Map (<1975, Stadestér)",
  "City Centre Density by Rank (<1975, Stadestér)",
  "Density (ihb/ha)",
  function(v) fmt_eu(v, 0)
)
pair_dens_ghsl <- build_top120_pair(
  top120_res$rankings$density_ghsl,
  "City Centre Density Map (>=1975, GHSL)",
  "City Centre Density by Rank (>=1975, GHSL)",
  "Density (ihb/km^2)",
  function(v) fmt_semantic(v, 0)
)
pair_pop <- build_top120_pair(
  top120_res$rankings$population,
  "City Population Map",
  "City Population by Rank",
  "Population",
  function(v) fmt_semantic(v, 0)
)

# Region colour key strip (2x6 layout for spacious label separation)
reg_key_df <- top120_res$regional_counts %>%
  mutate(
    idx = row_number(),
    col_i = ((idx - 1) %% 6) + 1,
    row_i = ifelse(idx <= 6, 2, 1)
  )
p_reg_legend <- ggplot(reg_key_df, aes(x = col_i, y = row_i)) +
  geom_point(aes(colour = hex), size = 3.2) +
  geom_text(aes(label = name), hjust = 0, nudge_x = 0.09, size = 2.65, colour = "#222222") +
  scale_colour_identity() +
  scale_x_continuous(limits = c(0.85, 7.05), expand = c(0, 0)) +
  scale_y_continuous(limits = c(0.5, 2.5), expand = c(0, 0)) +
  theme_void() +
  theme(plot.margin = margin(2, 10, 2, 10))

p_fig33 <- (
  (pair_area$map | pair_dens_base$map | pair_dens_ghsl$map | pair_pop$map) /
  (pair_area$bar | pair_dens_base$bar | pair_dens_ghsl$bar | pair_pop$bar) /
  p_reg_legend
) +
  plot_layout(heights = c(1.0, 1.05, 0.18)) +
  plot_annotation(
    title = paste0("Top 120 cities by maximum area/density/population (no outliers removed, proxy model) [", version_lbl, "]"),
    theme = theme(plot.title = element_text(size = 12.5, face = "plain", hjust = 0.01, margin = margin(t = 6, b = 4)))
  )

save_benchmark_png(
  p_fig33,
  file.path(out_dir, "fig33_top_120_area_density_population.png"),
  width_in = 16.5,
  height_in = 7.6,
  dpi = 220
)

# ---------------------------------------------------------------------------
# 6. Figures 34 & 35: Top 120 Rank-Ordinal Table & Regional Counts Table
# ---------------------------------------------------------------------------
message("[3.visualisations/B] Rendering Figures 34 & 35 (Top 120 Tables)...")

fmt_rank_entry <- function(df, r_idx, mode_str) {
  if (r_idx > nrow(df)) return("")
  nm <- substr(df$name[r_idx], 1, 18)
  val <- df$value[r_idx]
  v_str <- if (mode_str == "pop") fmt_semantic(val, 1) else if (mode_str == "dghsl") fmt_semantic(val, 1) else fmt_eu(val, 0)
  paste0(nm, " (", v_str, ")")
}

r1_60_rows <- lapply(1:60, function(k) {
  k2 <- k + 60
  c(
    as.character(k),
    fmt_rank_entry(top120_res$rankings$area, k, "area"),
    fmt_rank_entry(top120_res$rankings$density, k, "dbase"),
    fmt_rank_entry(top120_res$rankings$density_ghsl, k, "dghsl"),
    fmt_rank_entry(top120_res$rankings$population, k, "pop"),
    as.character(k2),
    fmt_rank_entry(top120_res$rankings$area, k2, "area"),
    fmt_rank_entry(top120_res$rankings$density, k2, "dbase"),
    fmt_rank_entry(top120_res$rankings$density_ghsl, k2, "dghsl"),
    fmt_rank_entry(top120_res$rankings$population, k2, "pop")
  )
})
fig34_mat <- do.call(rbind, r1_60_rows)

save_publication_table_png(
  headers = c(
    "#", "Area (km^2)", "Dens. <1975 (ihb/ha)", "Dens. >=1975 (ihb/km^2)", "Population",
    "#", "Area (km^2)", "Dens. <1975 (ihb/ha)", "Dens. >=1975 (ihb/km^2)", "Population"
  ),
  rows_matrix = fig34_mat,
  out_path = file.path(out_dir, "fig34_top_120_rank_ordinal_table.png"),
  title_text = paste0("Figure 34. Top 120 Global Cities by Maximum Area, Centre Density, and Population (", version_lbl, ")"),
  subtitle_text = "Ranks 1-60 (left block) and Ranks 61-120 (right block) over 3000BC-2025AD.",
  col_widths = c(0.035, 0.115, 0.115, 0.12, 0.115, 0.035, 0.115, 0.115, 0.12, 0.115),
  col_align = c("right", "left", "left", "left", "left", "right", "left", "left", "left", "left"),
  font_size = 7.4,
  row_height_in = 0.21,
  width_in = 18.0
)

rc_df <- top120_res$regional_counts
fig35_rows <- lapply(seq_len(nrow(rc_df)), function(i) {
  c(
    rc_df$name[i],
    as.character(rc_df$area[i]),
    as.character(rc_df$density[i]),
    as.character(rc_df$density_ghsl[i]),
    as.character(rc_df$population[i])
  )
})
fig35_mat <- do.call(rbind, c(fig35_rows, list(c(
  "Total",
  as.character(sum(rc_df$area)),
  as.character(sum(rc_df$density)),
  as.character(sum(rc_df$density_ghsl)),
  as.character(sum(rc_df$population))
))))

save_publication_table_png(
  headers = c("Region", "Area (Top 120)", "Centre Density <1975", "Centre Density >=1975 (GHSL)", "Population (Top 120)"),
  rows_matrix = fig35_mat,
  out_path = file.path(out_dir, "fig35_top_120_regional_counts_table.png"),
  title_text = paste0("Figure 35. Number of Cities in the Global Top 120 by World Region (", version_lbl, ")"),
  subtitle_text = "Counts of top-120 urban settlements per metric across the 12 Stadestér world regions.",
  col_widths = c(0.28, 0.17, 0.18, 0.20, 0.17),
  highlight_last_row = TRUE,
  width_in = 11.5
)

message("[3.visualisations/B] Meso-Validation visualisations complete.")
