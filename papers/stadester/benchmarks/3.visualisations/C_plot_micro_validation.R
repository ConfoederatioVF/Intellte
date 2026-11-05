# Section C: Micro-Validation Visualisations (Figures 36, 37, 38, 39 + Regional & Global 30 Ground Truth Tables + Margins of Error)

args <- commandArgs(trailingOnly = TRUE)
script_dir <- if (length(args) >= 1) args[1] else "."
source(file.path(script_dir, "plot_helpers.R"))

bench_root <- normalizePath(file.path(script_dir, ".."), winslash = "/", mustWork = TRUE)
compiled_dir <- file.path(bench_root, "1.compiler", "compiled")
results_dir <- file.path(bench_root, "2.results")
out_dir <- file.path(script_dir, "3.micro_validation")
dir.create(out_dir, recursive = TRUE, showWarnings = FALSE)

message("[3.visualisations/C] Loading Micro-Validation results...")
snap_meta <- fromJSON(file.path(results_dir, "micro_urban_gridcell_snapshots.json"), simplifyDataFrame = TRUE)
snap_raw <- fromJSON(file.path(compiled_dir, "urban_gridcell_snapshots.json"), simplifyVector = FALSE)
urb_res <- fromJSON(file.path(results_dir, "micro_regional_urbanisation.json"), simplifyVector = FALSE)
metro_res <- fromJSON(file.path(results_dir, "micro_global_30_metro_vs_non_metro.json"), simplifyVector = FALSE)
gt_res <- fromJSON(file.path(results_dir, "micro_global_30_ground_truth.json"), simplifyVector = FALSE)
moe_res <- fromJSON(file.path(results_dir, "margins_of_error_summary.json"), simplifyVector = FALSE)

world_df <- load_world_polygons_df(file.path(compiled_dir, "world_basemap_polygons.json"))
version_lbl <- gt_res$version_label

# ---------------------------------------------------------------------------
# 1. Figure 36: Global Urban Gridcell Snapshots (Pre-modern & Modern 4x2)
# ---------------------------------------------------------------------------
message("[3.visualisations/C] Rendering Figure 36 (Global Urban Snapshots 4x2)...")

build_snapshot_block <- function(years_vec, section_heading) {
  cell_rows <- list()
  lbl_rows <- list()

  for (idx in seq_along(years_vec)) {
    yr <- years_vec[idx]
    ys <- as.character(yr)
    disp_yr <- ifelse(yr == 0, "1", ys)
    raw_list <- snap_raw[[ys]]

    if (!is.null(raw_list) && length(raw_list) > 0) {
      mat <- do.call(rbind, lapply(raw_list, as.numeric))
      cell_rows[[idx]] <- data.frame(
        panel = disp_yr,
        lon = mat[, 1],
        lat = mat[, 2],
        pop = mat[, 3]
      )
    }
    lbl_rows[[idx]] <- data.frame(
      panel = disp_yr,
      yr_txt = disp_yr,
      cap_txt = paste0(version_lbl, "-GHSL\nGridcell urban population (5-arcmin)")
    )
  }

  lvls <- ifelse(years_vec == 0, "1", as.character(years_vec))
  df_cells <- bind_rows(cell_rows)
  df_cells$panel <- factor(df_cells$panel, levels = lvls)
  df_lbls <- bind_rows(lbl_rows)
  df_lbls$panel <- factor(df_lbls$panel, levels = lvls)

  ggplot() +
    geom_polygon(
      data = world_df %>% filter(lat >= -62),
      aes(x = lon, y = lat, group = group),
      fill = "#070707",
      colour = "#1a1a1a",
      linewidth = 0.12
    ) +
    geom_point(
      data = df_cells,
      aes(x = lon, y = lat, colour = log10(pmax(10, pop)), size = log10(pmax(10, pop))),
      shape = 16,
      alpha = 0.72
    ) +
    geom_text(
      data = df_lbls,
      aes(x = 168, y = -52, label = yr_txt),
      hjust = 1,
      vjust = 0,
      colour = "white",
      size = 5.4,
      fontface = "plain"
    ) +
    geom_text(
      data = df_lbls,
      aes(x = 0, y = -55, label = cap_txt),
      hjust = 0.5,
      vjust = 0,
      colour = "#aaaaaa",
      size = 1.9,
      lineheight = 0.9
    ) +
    facet_wrap(~ panel, ncol = 2) +
    scale_colour_viridis_c(option = "mako", limits = c(2.0, 7.2), oob = scales::squish, begin = 0.22, end = 0.96, guide = "none") +
    scale_size_continuous(range = c(0.18, 1.35), limits = c(2.0, 7.2), oob = scales::squish, guide = "none") +
    coord_cartesian(xlim = c(-172, 178), ylim = c(-58, 78), expand = FALSE) +
    labs(title = section_heading) +
    theme_void(base_family = "sans") +
    theme(
      plot.background = element_rect(fill = "#262626", colour = NA),
      panel.background = element_rect(fill = "#262626", colour = "#3a3a3a", linewidth = 0.25),
      strip.text = element_blank(),
      plot.title = element_text(colour = "white", size = 13.5, hjust = 0.01, margin = margin(t = 6, b = 4, l = 6)),
      panel.spacing = unit(0.08, "cm"),
      plot.margin = margin(4, 6, 6, 6)
    )
}

p36_pre <- build_snapshot_block(c(0, 1000, 1500, 1800), "Pre-modern (before 1800)")
p36_mod <- build_snapshot_block(c(1900, 1950, 1975, 2025), "Modern (post-1800)")

p_fig36 <- (p36_pre / p36_mod) +
  plot_annotation(
    theme = theme(plot.background = element_rect(fill = "#262626", colour = NA))
  )

save_benchmark_png(
  p_fig36,
  file.path(out_dir, "fig36_global_urban_snapshots.png"),
  width_in = 13.0,
  height_in = 15.2,
  dpi = 220,
  bg = "#262626"
)

# ---------------------------------------------------------------------------
# 2. Figure 37: Regional Urbanisation Rates (3000BC-2025AD) 4x3 Grid
# ---------------------------------------------------------------------------
message("[3.visualisations/C] Rendering Figure 37 (Regional Urbanisation Rates 4x3)...")

df_urb_full <- bind_rows(lapply(urb_res$full_series, as.data.frame)) %>%
  filter(region != "world")

reg_order_names <- sapply(urb_res$tables_millions$total, function(r) r$name)
reg_order_names <- reg_order_names[reg_order_names != "World"]
df_urb_full$region_name <- factor(df_urb_full$region_name, levels = reg_order_names)

# Map share [0..1] onto log10 population range [3.8..9.7] so all 12 facets have uniform unclipped dual axes
lp_min <- 3.8
lp_max <- 9.7
share_to_pop <- function(sh) 10^(lp_min + sh * (lp_max - lp_min))
pop_to_share <- function(lp) ((lp - lp_min) / (lp_max - lp_min)) * 100.0

df_lines_37 <- bind_rows(
  df_urb_full %>% filter(rural_population > 0) %>% transmute(region_name, year, y_val = rural_population, metric = "Rural Population"),
  df_urb_full %>% transmute(region_name, year, y_val = share_to_pop(rural_share), metric = "Rural Share"),
  df_urb_full %>% filter(total_population > 0) %>% transmute(region_name, year, y_val = total_population, metric = "Total Population"),
  df_urb_full %>% filter(urban_population > 0) %>% transmute(region_name, year, y_val = urban_population, metric = "Urban Population"),
  df_urb_full %>% transmute(region_name, year, y_val = share_to_pop(urban_share), metric = "Urban Share")
)

metric_levels <- c("Rural Population", "Rural Share", "Total Population", "Urban Population", "Urban Share")
df_lines_37$metric <- factor(df_lines_37$metric, levels = metric_levels)

cols_37 <- c(
  "Rural Population" = "#1b7837",
  "Rural Share" = "#f59e0b",
  "Total Population" = "#111111",
  "Urban Population" = "#3b82f6",
  "Urban Share" = "#ef4444"
)
ltys_37 <- c(
  "Rural Population" = "solid",
  "Rural Share" = "dashed",
  "Total Population" = "solid",
  "Urban Population" = "solid",
  "Urban Share" = "dashed"
)

p_fig37 <- ggplot(df_lines_37, aes(x = year, y = y_val, colour = metric, linetype = metric)) +
  geom_line(linewidth = 0.6) +
  facet_wrap(~ region_name, ncol = 3) +
  scale_x_continuous(breaks = c(-3000, -2000, -1000, 0, 1000, 2000)) +
  scale_y_log10(
    limits = c(10^lp_min, 10^lp_max),
    oob = scales::squish,
    breaks = c(1e4, 1e5, 1e6, 1e7, 1e8, 1e9),
    labels = c("10k", "100k", "1M", "10M", "100M", "1B"),
    sec.axis = sec_axis(
      transform = ~ pop_to_share(log10(.)),
      name = "Share (Linear Scale)",
      breaks = c(0, 25, 50, 75, 100),
      labels = function(v) paste0(v, "%")
    )
  ) +
  scale_colour_manual(values = cols_37, name = "Metric") +
  scale_linetype_manual(values = ltys_37, name = "Metric") +
  labs(
    title = paste0(version_lbl, "-GHSL / Urbanisation rates by world region (3000BC-2025AD)"),
    x = "Year",
    y = "Population (Log Scale)"
  ) +
  theme_minimal(base_family = "sans") +
  theme(
    plot.title = element_text(size = 13.0, face = "plain", hjust = 0.02, margin = margin(b = 8)),
    strip.text = element_text(size = 9.5, face = "bold", colour = "#111111"),
    panel.grid.major = element_line(colour = "#eaeaea", linewidth = 0.35),
    panel.grid.minor = element_blank(),
    axis.text = element_text(size = 6.8, colour = "#555555"),
    axis.title = element_text(size = 8.5, colour = "#333333"),
    legend.position = "bottom",
    legend.title = element_text(size = 8.5, face = "bold"),
    legend.text = element_text(size = 8.2),
    panel.spacing = unit(0.45, "cm")
  )

save_benchmark_png(
  p_fig37,
  file.path(out_dir, "fig37_regional_urbanisation_rates.png"),
  width_in = 14.0,
  height_in = 13.5,
  dpi = 220
)

# Regional Benchmark Population Tables (Total, Urban, Rural in Millions)
bench_yrs_reg <- unlist(urb_res$benchmark_years)
yr_hdrs_reg <- ifelse(bench_yrs_reg < 0, paste0(abs(bench_yrs_reg), "BC"), ifelse(bench_yrs_reg == 0, "1AD", paste0(bench_yrs_reg, "AD")))

build_reg_pop_rows <- function(tbl_list, tag_prefix) {
  lapply(tbl_list, function(r) {
    vals_vec <- sapply(as.character(bench_yrs_reg), function(ys) {
      v <- r$values[[ys]]
      fmt_eu(as.numeric(v), 2)
    })
    c(paste0(r$name, " (", tag_prefix, ")"), vals_vec)
  })
}

reg_comb_mat <- do.call(rbind, c(
  build_reg_pop_rows(urb_res$tables_millions$total, "Total"),
  build_reg_pop_rows(urb_res$tables_millions$urban, "Urban")
))

save_publication_table_png(
  headers = c("Region (Metric)", yr_hdrs_reg),
  rows_matrix = reg_comb_mat,
  out_path = file.path(out_dir, "table_regional_populations_benchmark_years.png"),
  title_text = paste0("Regional Total & Urban Populations at Benchmark Years in Millions (", version_lbl, "-GHSL)"),
  subtitle_text = "Derived from 5-arcmin Voronoi-classified Stadestér Base (<1975), GHSL (>=1975), and Stadestér Rural rasters.",
  col_widths = c(0.19, rep(0.81 / length(yr_hdrs_reg), length(yr_hdrs_reg))),
  font_size = 7.4,
  row_height_in = 0.22,
  width_in = 18.0
)

# ---------------------------------------------------------------------------
# 3. Figure 38: Global 30 Metro-Adjusted vs Non-Metro-Adjusted Table
# ---------------------------------------------------------------------------
message("[3.visualisations/C] Rendering Figure 38 (Global 30 Metro vs Non-Metro Table)...")

m_yrs <- unlist(metro_res$table_years)
m_yr_hdrs <- ifelse(m_yrs == 0, "1AD", paste0(m_yrs, "AD"))

m_rows <- list()
for (idx in seq_along(metro_res$cities)) {
  c_obj <- metro_res$cities[[idx]]
  ma_cells <- sapply(as.character(m_yrs), function(ys) {
    v <- c_obj$ma_population[[ys]]
    if (is.null(v)) "-" else fmt_eu(round(as.numeric(v) / 1000.0), 0)
  })
  nma_cells <- sapply(as.character(m_yrs), function(ys) {
    v <- c_obj$nma_population[[ys]]
    if (is.null(v)) "-" else fmt_eu(round(as.numeric(v) / 1000.0), 0)
  })
  m_rows[[length(m_rows) + 1]] <- c(paste0(c_obj$name, " (MA)"), ma_cells, paste0(fmt_eu(c_obj$mean_abs_pct_diff_pre_1975, 1), "%"))
  m_rows[[length(m_rows) + 1]] <- c(paste0(c_obj$name, " (N-MA)"), nma_cells, "-")
}
fig38_mat <- do.call(rbind, m_rows)

save_publication_table_png(
  headers = c("City (Series)", m_yr_hdrs, "|Diff| <1975"),
  rows_matrix = fig38_mat,
  out_path = file.path(out_dir, "fig38_global_30_metro_vs_non_metro_table.png"),
  title_text = paste0("Figure 38. Global 30 Metro-Adjusted (MA) vs. Non-Metro-Adjusted (N-MA) Populations in Thousands (", version_lbl, ")"),
  subtitle_text = "Values in thousands; post-1975 values splice GHSL urban centre populations.",
  col_widths = c(0.16, rep(0.76 / length(m_yr_hdrs), length(m_yr_hdrs)), 0.08),
  font_size = 7.3,
  row_height_in = 0.20,
  width_in = 17.5
)

# ---------------------------------------------------------------------------
# 4. Figure 39 & Tables 12-42: Global 30 Scholarly Ground Truth Validation
# ---------------------------------------------------------------------------
message("[3.visualisations/C] Rendering Figure 39 & Global 30 Ground Truth Tables...")

gt_summary_rows <- lapply(gt_res$cities, function(c_obj) {
  c(
    c_obj$name,
    paste0(fmt_eu(c_obj$lower_m_pct, 1), "%"),
    paste0(fmt_eu(c_obj$upper_m_pct, 1), "%"),
    paste0(fmt_eu(c_obj$lower_sd_pct, 1), "%"),
    paste0(fmt_eu(c_obj$upper_sd_pct, 1), "%"),
    fmt_eu(c_obj$jaccard_index, 3)
  )
})
tot_r <- gt_res$totals_row
fig39_mat <- do.call(rbind, c(gt_summary_rows, list(c(
  "Total (Avg.)",
  paste0(fmt_eu(tot_r$lower_m_pct, 2), "%"),
  paste0(fmt_eu(tot_r$upper_m_pct, 2), "%"),
  paste0(fmt_eu(tot_r$lower_sd_pct, 2), "%"),
  paste0(fmt_eu(tot_r$upper_sd_pct, 2), "%"),
  fmt_eu(tot_r$jaccard_index, 3)
))))

save_publication_table_png(
  headers = c("City", "Lower M", "Upper M", "Lower SD", "Upper SD", "Jaccard Index"),
  rows_matrix = fig39_mat,
  out_path = file.path(out_dir, "fig39_global_30_ground_truth_summary_table.png"),
  title_text = paste0("Figure 39. Summary Error Margins & Spatial Jaccard Indices for the Global 30 (", version_lbl, ")"),
  subtitle_text = "Mean (M) and population standard deviation (SD) percentage deviations vs. scholarly Ground Truth (1AD-2025AD); pooled Jaccard in Total.",
  col_widths = c(0.24, 0.15, 0.15, 0.15, 0.15, 0.16),
  highlight_last_row = TRUE,
  width_in = 11.5
)

# Visual companion chart for Figure 39 (Lower..Upper Mean Error % + Angel Jaccard Index)
df_gt_chart <- bind_rows(lapply(gt_res$cities, function(c_obj) {
  data.frame(
    name = c_obj$name,
    lower_m = c_obj$lower_m_pct,
    upper_m = c_obj$upper_m_pct,
    mid_m = 0.5 * (c_obj$lower_m_pct + c_obj$upper_m_pct),
    jaccard = c_obj$jaccard_index
  )
}))
df_gt_chart$name <- factor(df_gt_chart$name, levels = rev(df_gt_chart$name))

p39_err <- ggplot(df_gt_chart, aes(y = name)) +
  geom_vline(xintercept = 0, colour = "#888888", linetype = "dashed", linewidth = 0.5) +
  geom_segment(aes(x = lower_m, xend = upper_m, yend = name), colour = "#2563eb", linewidth = 2.0, alpha = 0.75) +
  geom_point(aes(x = lower_m), colour = "#1d4ed8", size = 2.2) +
  geom_point(aes(x = upper_m), colour = "#dc2626", size = 2.2) +
  scale_x_continuous(
    transform = scales::pseudo_log_trans(sigma = 10, base = 10),
    breaks = c(-50, -25, -10, 0, 10, 25, 50, 150, 400),
    labels = function(v) paste0(fmt_eu(v, 0), "%")
  ) +
  labs(
    title = "Scholarly Ground Truth Mean Error Range (Lower M to Upper M)",
    x = "Mean Percentage Deviation (%, Symmetric Pseudo-Log Scale)",
    y = NULL
  ) +
  theme_minimal(base_family = "sans") +
  theme(
    plot.title = element_text(size = 10.5, face = "bold"),
    panel.grid.minor = element_blank()
  )

p39_jac <- ggplot(df_gt_chart, aes(x = jaccard, y = name)) +
  geom_vline(xintercept = tot_r$jaccard_index, colour = "#d97706", linetype = "dashed", linewidth = 0.6) +
  geom_col(fill = "#059669", width = 0.68, alpha = 0.85) +
  scale_x_continuous(limits = c(0, 0.85), labels = function(v) fmt_eu(v, 2)) +
  labs(
    title = paste0("Angel Spatial Jaccard (Pooled = ", fmt_eu(tot_r$jaccard_index, 3), ")"),
    x = "Jaccard Similarity Index (1800-2000)",
    y = NULL
  ) +
  theme_minimal(base_family = "sans") +
  theme(
    plot.title = element_text(size = 10.5, face = "bold"),
    axis.text.y = element_blank(),
    panel.grid.minor = element_blank()
  )

p_fig39_chart <- (p39_err | p39_jac) +
  plot_layout(widths = c(1.35, 1.0)) +
  plot_annotation(
    title = paste0("Global 30 Micro & Meso Validation Profile (", version_lbl, ")"),
    theme = theme(plot.title = element_text(size = 13.0, face = "bold", hjust = 0.5))
  )

save_benchmark_png(
  p_fig39_chart,
  file.path(out_dir, "fig39_global_30_error_and_jaccard_chart.png"),
  width_in = 13.5,
  height_in = 8.5,
  dpi = 220
)

# Individual 30-City Ground Truth Comparison Tables (Part 1: Cities 1-15, Part 2: Cities 16-30)
gt_yrs <- unlist(gt_res$benchmark_years)
gt_yr_hdrs <- paste0(gt_yrs, "AD")

render_gt_part <- function(city_subset, part_num, fname) {
  rows_out <- list()
  for (c_obj in city_subset) {
    yt <- c_obj$years_table
    stad_cells <- sapply(yt, function(r) {
      if (is.null(r$stad_thousands_rounded)) "-" else fmt_eu(as.numeric(r$stad_thousands_rounded), 0)
    })
    gt_cells <- sapply(yt, function(r) {
      d <- if (is.null(r$gt_display) || r$gt_display == "") "-" else as.character(r$gt_display)
      if (isTRUE(r$exclude_pre_relocation)) paste0(d, "*") else d
    })
    err_lbl <- paste0(fmt_eu(c_obj$lower_m_pct, 1), "% / ", fmt_eu(c_obj$upper_m_pct, 1), "%")
    src_short <- substr(c_obj$sources, 1, 36)

    rows_out[[length(rows_out) + 1]] <- c(paste0(c_obj$name, " (STAD)"), stad_cells, err_lbl, src_short)
    rows_out[[length(rows_out) + 1]] <- c(paste0(c_obj$name, " (GT)"), gt_cells, "-", "")
  }

  mat_part <- do.call(rbind, rows_out)
  save_publication_table_png(
    headers = c("City (Row)", gt_yr_hdrs, "Lower/Upper M", "Scholarly Sources"),
    rows_matrix = mat_part,
    out_path = file.path(out_dir, fname),
    title_text = paste0("Global 30 City Ground Truth Comparisons - Part ", part_num, " (Populations in Thousands, ", version_lbl, ")"),
    subtitle_text = "STAD = Stadestér Non-Metro (<1975) + GHSL (>=1975); GT = Scholarly Ground Truth (* = pre-relocation settlement excluded from error).",
    col_widths = c(0.13, rep(0.59 / length(gt_yr_hdrs), length(gt_yr_hdrs)), 0.10, 0.18),
    col_align = c("left", rep("right", length(gt_yr_hdrs)), "right", "left"),
    font_size = 7.2,
    row_height_in = 0.21,
    width_in = 18.5
  )
}

render_gt_part(gt_res$cities[1:15], 1, "global_30_city_ground_truth_tables_part1.png")
render_gt_part(gt_res$cities[16:30], 2, "global_30_city_ground_truth_tables_part2.png")

# ---------------------------------------------------------------------------
# 5. Consolidated Margins of Error Summary Table (Stadestér 1.1 vs 1.0)
# ---------------------------------------------------------------------------
message("[3.visualisations/C] Rendering Consolidated Margins of Error Summary Table...")

moe_mat <- rbind(
  c("Macro: Base vs. Reba et al. CoG (3000BC-2000AD)",
    paste0(fmt_eu(moe_res$macro$base_vs_reba_min_km, 1), " to ", fmt_eu(moe_res$macro$base_vs_reba_max_km, 1), " km"),
    "~220 to 1.170 km"),
  c("Macro: Base vs. Mulligan & Crampton CoG (1950-2010)",
    paste0("Mean ", fmt_eu(moe_res$macro$base_vs_mulligan_crampton_mean_km, 1), " km (Max ", fmt_eu(moe_res$macro$base_vs_mulligan_crampton_max_km, 1), " km)"),
    "410-450 km (Max ~935 km)"),
  c("Macro: GHSL vs. Mulligan & Crampton CoG (1975-2010)",
    paste0("Mean ", fmt_eu(moe_res$macro$ghsl_vs_mulligan_crampton_mean_km, 2), " km"),
    "~2.323,52 km"),
  c("Macro: Urban Pop. Deviation vs. HYDE/UN (3000BC-2025AD)",
    paste0("M = ", fmt_eu(moe_res$macro$hyde_un_mean_pct_error, 2), "% (SD = ", fmt_eu(moe_res$macro$hyde_un_sd_pct_error, 2), "%)"),
    "M = -17,4% (SD = 13,0%)"),
  c("Meso: 12-Region CoG Deviation Base vs. GHSL (1975-2000)",
    paste0("M = ", fmt_eu(moe_res$meso$regional_cog_world_mean_km, 2), " km (", fmt_eu(moe_res$meso$regional_cog_world_mean_pct, 2), "%); SD = ", fmt_eu(moe_res$meso$regional_cog_world_sd_km, 2), " km"),
    paste0("M = ", fmt_eu(moe_res$meso$stadester_1_0$regional_cog_world_mean_km, 2), " km (", fmt_eu(moe_res$meso$stadester_1_0$regional_cog_world_mean_pct, 2), "%); SD = ", fmt_eu(moe_res$meso$stadester_1_0$regional_cog_world_sd_km, 2), " km")),
  c("Meso: Global 30 Spatial Jaccard vs. Angel (1800-2000)",
    paste0("Pooled J = ", fmt_eu(moe_res$meso$angel_pooled_jaccard, 3), " Base / ", fmt_eu(moe_res$meso$angel_spliced_pooled_jaccard, 3), " Spliced (M = ", fmt_eu(moe_res$meso$angel_mean_jaccard, 3), ")"),
    "Pooled J = 0,532 (Unweighted M = 0,496)"),
  c("Micro: Global 30 Scholarly Ground Truth (Non-Metro, All 30)",
    paste0("Lower M = ", fmt_eu(moe_res$micro$global_30_lower_m_pct, 2), "% (SD ", fmt_eu(moe_res$micro$global_30_lower_sd_pct, 2), "%); Upper M = ", fmt_eu(moe_res$micro$global_30_upper_m_pct, 2), "% (SD ", fmt_eu(moe_res$micro$global_30_upper_sd_pct, 2), "%)"),
    "Lower M = 2,66% (SD 37,47%); Upper M = 3,91% (SD 39,35%)"),
  c(paste0("Micro: Global 30 Site-Matched (Excl. 2 Predecessor Merges, n=", moe_res$micro$global_30_site_matched_city_count, ")"),
    paste0("Lower M = ", fmt_eu(moe_res$micro$global_30_site_matched_lower_m_pct, 2), "% (SD ", fmt_eu(moe_res$micro$global_30_site_matched_lower_sd_pct, 2), "%); Upper M = ", fmt_eu(moe_res$micro$global_30_site_matched_upper_m_pct, 2), "% (SD ", fmt_eu(moe_res$micro$global_30_site_matched_upper_sd_pct, 2), "%)"),
    "Excludes Hooghly->Kolkata & Sopara->Mumbai merges"),
  c("Micro: Global 30 Scholarly Ground Truth (Metro-Adjusted)",
    paste0("Lower M = ", fmt_eu(moe_res$micro$global_30_metro_lower_m_pct, 2), "%; Upper M = ", fmt_eu(moe_res$micro$global_30_metro_upper_m_pct, 2), "%"),
    "Consolidated agglomeration comparison")
)

save_publication_table_png(
  headers = c("Validation Scale & Benchmark Metric", version_lbl, moe_res$baseline_version_label),
  rows_matrix = moe_mat,
  out_path = file.path(out_dir, "table_margins_of_error_summary.png"),
  title_text = paste0("Summary of Benchmark Margins of Error: ", version_lbl, " vs. ", moe_res$baseline_version_label),
  subtitle_text = "Synthesised across Macro-Validation, Meso-Validation, and Micro-Validation test suites.",
  col_widths = c(0.42, 0.31, 0.27),
  col_align = c("left", "left", "left"),
  width_in = 14.5
)

message("[3.visualisations/C] Micro-Validation visualisations complete.")