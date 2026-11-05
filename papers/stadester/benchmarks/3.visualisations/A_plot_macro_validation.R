# Section A: Macro-Validation Visualisations (Figures 25, 26a, 26b, 27 + CoG Deviations Table)

args <- commandArgs(trailingOnly = TRUE)
script_dir <- if (length(args) >= 1) args[1] else "."
source(file.path(script_dir, "plot_helpers.R"))

bench_root <- normalizePath(file.path(script_dir, ".."), winslash = "/", mustWork = TRUE)
compiled_dir <- file.path(bench_root, "1.compiler", "compiled")
results_dir <- file.path(bench_root, "2.results")
out_dir <- file.path(script_dir, "1.macro_validation")
dir.create(out_dir, recursive = TRUE, showWarnings = FALSE)

message("[3.visualisations/A] Loading Macro-Validation results...")
cog_res <- fromJSON(file.path(results_dir, "macro_centres_of_gravity.json"), simplifyDataFrame = TRUE)
pop_res <- fromJSON(file.path(results_dir, "macro_urban_population_and_sample.json"), simplifyDataFrame = TRUE)
dev_res <- fromJSON(file.path(results_dir, "macro_hyde_un_deviation.json"), simplifyDataFrame = TRUE)
world_df <- load_world_polygons_df(file.path(compiled_dir, "world_basemap_polygons.json"))

version_lbl <- cog_res$version_label

# ---------------------------------------------------------------------------
# 1. Figure 25: Centres of Population by Dataset (-3700BC - 2025AD)
# ---------------------------------------------------------------------------
message("[3.visualisations/A] Rendering Figure 25 (Centres of Population)...")

merc_y <- function(lat) {
  rad <- pmax(-80, pmin(80, lat)) * pi / 180.0
  log(tan(pi / 4.0 + rad / 2.0)) * 180.0 / pi
}

world_merc <- world_df %>%
  mutate(my = merc_y(lat))

df_base <- cog_res$trajectories$stadester_base %>% mutate(my = merc_y(lat), series = "Stadestér Base")
df_base_hyde <- df_base %>% filter(year >= 0 | year %% 1000 == 0)
df_ghsl_post <- cog_res$trajectories$stadester_ghsl_post_1975 %>% mutate(my = merc_y(lat), series = "Stadestér-GHSL")
# Prepend 1974 Base point so the splice jump from Base -> GHSL in 1975 is drawn just as in 1.0 Figure 25
pt_pre_splice <- df_base %>% filter(year <= 1975) %>% slice_tail(n = 1) %>% mutate(series = "Stadestér-GHSL")
df_ghsl_line <- bind_rows(pt_pre_splice, df_ghsl_post)

df_reba <- cog_res$trajectories$reba_published %>% mutate(my = merc_y(lat), series = "Reba et al.")
df_mc <- cog_res$trajectories$mulligan_crampton_published %>% mutate(my = merc_y(lat), series = "Mulligan & Crampton")

base_bench_years <- c(-3000, 0, 1000, 1500, 1800, 1900, 1950, 1975, 2025)
df_base_pts <- df_base %>%
  filter(year %in% base_bench_years) %>%
  mutate(lbl = ifelse(year == 0, "1", as.character(year)))

df_ghsl_pts <- df_ghsl_post %>%
  filter(year %in% c(1975, 2025)) %>%
  mutate(lbl = as.character(year))

df_reba_pts <- df_reba %>%
  mutate(lbl = as.character(year))

df_mc_pts <- df_mc %>%
  mutate(lbl = as.character(year))

# Manual non-overlapping label nudges matching Figure 25 cartography
df_base_pts <- df_base_pts %>%
  mutate(
    nudge_x = case_when(
      year == -3000 ~ 0.8,
      year == 0 ~ -1.1,
      year == 1000 ~ -2.0,
      year == 1500 ~ -2.3,
      year == 1800 ~ -2.0,
      year == 1900 ~ 3.2,
      year == 1950 ~ 2.0,
      year == 1975 ~ -1.5,
      year == 2025 ~ -1.6,
      TRUE ~ 0
    ),
    nudge_y = case_when(
      year == -3000 ~ -1.3,
      year == 0 ~ -1.3,
      year == 1000 ~ -0.9,
      year == 1500 ~ -1.0,
      year == 1800 ~ -0.9,
      year == 1900 ~ -0.7,
      year == 1950 ~ -1.1,
      year == 1975 ~ -1.4,
      year == 2025 ~ 1.4,
      TRUE ~ 1.0
    )
  )

df_reba_pts <- df_reba_pts %>%
  mutate(
    nudge_x = case_when(
      year == -3700 ~ 2.0,
      year == 1 ~ 1.3,
      year == 1500 ~ 2.5,
      year == 1800 ~ 0.3,
      year == 1900 ~ 0.3,
      year == 2000 ~ 2.1,
      TRUE ~ 0
    ),
    nudge_y = case_when(
      year == -3700 ~ -1.0,
      year == 1 ~ -1.3,
      year == 1500 ~ 1.0,
      year == 1800 ~ 1.4,
      year == 1900 ~ 1.4,
      year == 2000 ~ 0.3,
      TRUE ~ 1.0
    )
  )

df_mc_pts <- df_mc_pts %>%
  mutate(
    nudge_x = c(-1.8, 1.9, 2.3),
    nudge_y = c(1.3, 1.0, 0.0)
  )

df_ghsl_pts <- df_ghsl_pts %>%
  mutate(
    nudge_x = c(2.2, -0.4),
    nudge_y = c(-0.8, -1.6)
  )

all_lines <- bind_rows(
  df_mc %>% select(lon, my, series),
  df_base_hyde %>% select(lon, my, series),
  df_ghsl_line %>% select(lon, my, series),
  df_reba %>% select(lon, my, series)
)
all_lines$series <- factor(
  all_lines$series,
  levels = c("Mulligan & Crampton", "Stadestér Base", "Stadestér-GHSL", "Reba et al.")
)

all_dots <- bind_rows(
  df_mc_pts %>% select(lon, my, series, lbl, nudge_x, nudge_y),
  df_base_pts %>% select(lon, my, series, lbl, nudge_x, nudge_y),
  df_ghsl_pts %>% select(lon, my, series, lbl, nudge_x, nudge_y),
  df_reba_pts %>% select(lon, my, series, lbl, nudge_x, nudge_y)
)
all_dots$series <- factor(
  all_dots$series,
  levels = c("Mulligan & Crampton", "Stadestér Base", "Stadestér-GHSL", "Reba et al.")
)

cog_cols <- c(
  "Mulligan & Crampton" = "#9c5f78",
  "Stadestér Base" = "#0026ff",
  "Stadestér-GHSL" = "#e60000",
  "Reba et al." = "#2eb844"
)

xlim_merc <- c(2.0, 81.5)
ylim_merc <- merc_y(c(8.0, 53.5))

p_fig25 <- ggplot() +
  geom_polygon(
    data = world_merc,
    aes(x = lon, y = my, group = group),
    fill = "#eef2f6",
    colour = "#7d8a96",
    linewidth = 0.28
  ) +
  geom_path(
    data = df_base,
    aes(x = lon, y = my),
    colour = "#0026ff",
    linewidth = 0.32,
    alpha = 0.22
  ) +
  geom_path(
    data = all_lines,
    aes(x = lon, y = my, colour = series),
    linewidth = 0.95,
    alpha = 0.95
  ) +
  geom_point(
    data = all_dots,
    aes(x = lon, y = my, colour = series),
    size = 2.5
  ) +
  geom_label(
    data = all_dots,
    aes(x = lon + nudge_x, y = my + nudge_y, label = lbl),
    size = 2.8,
    colour = "#111111",
    fill = alpha("white", 0.78),
    linewidth = 0,
    label.padding = unit(0.10, "lines"),
    label.r = unit(0.08, "lines"),
    fontface = "plain",
    family = "sans"
  ) +
  annotate(
    "label",
    x = 3.5,
    y = ylim_merc[2] - 1.5,
    label = paste0("Centres of Population by Dataset\n(3700BC - 2025AD) [", version_lbl, "]"),
    hjust = 0,
    vjust = 1,
    size = 5.0,
    fontface = "plain",
    fill = "white",
    colour = "#111111",
    linewidth = 0,
    label.padding = unit(0.45, "lines")
  ) +
  scale_colour_manual(values = cog_cols, name = "Benchmark Year / Dataset") +
  coord_fixed(ratio = 1.0, xlim = xlim_merc, ylim = ylim_merc, expand = FALSE) +
  theme_void(base_family = "sans") +
  theme(
    panel.background = element_rect(fill = "#dce8f5", colour = "#b0bec5", linewidth = 0.5),
    plot.background = element_rect(fill = "white", colour = NA),
    legend.position = c(0.84, 0.22),
    legend.background = element_rect(fill = "white", colour = "#e0e0e0", linewidth = 0.3),
    legend.margin = margin(8, 12, 8, 12),
    legend.title = element_text(size = 9.5, face = "bold", colour = "#222222"),
    legend.text = element_text(size = 9.5, colour = "#111111"),
    plot.margin = margin(10, 10, 10, 10)
  )

save_benchmark_png(
  p_fig25,
  file.path(out_dir, "fig25_centres_of_population.png"),
  width_in = 12.0,
  height_in = 7.5,
  dpi = 240
)

# Macro CoG Deviations Summary Table PNG
pw <- cog_res$pairwise_deviations
macro_tbl_rows <- rbind(
  c("Stadestér Base vs. Reba et al. (-3000 to 2000)",
    fmt_eu(pw$base_vs_reba_published$min_km),
    paste0(fmt_eu(pw$base_vs_reba_published$max_km), " (", pw$base_vs_reba_published$max_year, ")"),
    paste0(fmt_eu(pw$base_vs_reba_published$mean_km), " (", fmt_eu(pw$base_vs_reba_published$mean_pct_great_circle), "%)"),
    paste0(fmt_eu(pw$base_vs_reba_published$sd_km), " (", fmt_eu(pw$base_vs_reba_published$sd_pct_great_circle), "%)"),
    "~220 to 1.170 km (1,1-2,8%)"),
  c("Stadestér Base vs. Reba et al. (Pre-1900)",
    fmt_eu(pw$base_vs_reba_pre_1900$min_km),
    paste0(fmt_eu(pw$base_vs_reba_pre_1900$max_km), " (", pw$base_vs_reba_pre_1900$max_year, ")"),
    paste0(fmt_eu(pw$base_vs_reba_pre_1900$mean_km), " (", fmt_eu(pw$base_vs_reba_pre_1900$mean_pct_great_circle), "%)"),
    paste0(fmt_eu(pw$base_vs_reba_pre_1900$sd_km), " (", fmt_eu(pw$base_vs_reba_pre_1900$sd_pct_great_circle), "%)"),
    "Max ~1.170 km at 1500AD"),
  c("Stadestér Base vs. Mulligan & Crampton (1950-2010)",
    fmt_eu(pw$base_vs_mulligan_crampton_published$min_km),
    paste0(fmt_eu(pw$base_vs_mulligan_crampton_published$max_km), " (", pw$base_vs_mulligan_crampton_published$max_year, ")"),
    paste0(fmt_eu(pw$base_vs_mulligan_crampton_published$mean_km), " (", fmt_eu(pw$base_vs_mulligan_crampton_published$mean_pct_great_circle), "%)"),
    paste0(fmt_eu(pw$base_vs_mulligan_crampton_published$sd_km), " (", fmt_eu(pw$base_vs_mulligan_crampton_published$sd_pct_great_circle), "%)"),
    "410-450 km (max ~935 km)"),
  c("GHSL vs. Mulligan & Crampton (1975-2010)",
    fmt_eu(pw$ghsl_vs_mulligan_crampton_published$min_km),
    paste0(fmt_eu(pw$ghsl_vs_mulligan_crampton_published$max_km), " (", pw$ghsl_vs_mulligan_crampton_published$max_year, ")"),
    paste0(fmt_eu(pw$ghsl_vs_mulligan_crampton_published$mean_km), " (", fmt_eu(pw$ghsl_vs_mulligan_crampton_published$mean_pct_great_circle), "%)"),
    paste0(fmt_eu(pw$ghsl_vs_mulligan_crampton_published$sd_km), " (", fmt_eu(pw$ghsl_vs_mulligan_crampton_published$sd_pct_great_circle), "%)"),
    "~2.323,52 km (11,60%)"),
  c("Stadestér Base vs. GHSL Global CoG (1975-2025)",
    fmt_eu(pw$base_vs_ghsl_1975_2025$min_km),
    paste0(fmt_eu(pw$base_vs_ghsl_1975_2025$max_km), " (", pw$base_vs_ghsl_1975_2025$max_year, ")"),
    paste0(fmt_eu(pw$base_vs_ghsl_1975_2025$mean_km), " (", fmt_eu(pw$base_vs_ghsl_1975_2025$mean_pct_great_circle), "%)"),
    paste0(fmt_eu(pw$base_vs_ghsl_1975_2025$sd_km), " (", fmt_eu(pw$base_vs_ghsl_1975_2025$sd_pct_great_circle), "%)"),
    "Post-1975 GHSL shift")
)

save_publication_table_png(
  headers = c("Dataset Comparison Pair", "Min. (km)", "Max. (km)", "Mean (% Great Circle)", "SD (% Great Circle)", "Stadestér 1.0 Reference"),
  rows_matrix = macro_tbl_rows,
  out_path = file.path(out_dir, "table_macro_cog_deviations.png"),
  title_text = paste0("Macro-Validation: Global Centre of Population Deviations (", version_lbl, ")"),
  subtitle_text = "Geodesic distance in kilometres and percentage of Earth's half-great-circle (20.003,93 km).",
  col_widths = c(0.30, 0.11, 0.14, 0.16, 0.14, 0.15),
  width_in = 14.0
)

# ---------------------------------------------------------------------------
# 2. Figures 26a & 26b: Urban Population & Sample Size (Linear/Log & Log/Log)
# ---------------------------------------------------------------------------
message("[3.visualisations/A] Rendering Figures 26a & 26b (Sample Size & Urban Population)...")

df_sp_pop <- pop_res$stadester_ghsl_series %>% filter(urban_population > 0, sample_size > 0)
df_hy_pop <- pop_res$hyde_un_series %>% filter(urban_population > 0)
df_callouts <- pop_res$callout_points %>%
  filter(sample_size > 0) %>%
  mutate(lbl = paste0(year, "\n(", sample_size, ")"))

n_cities_str <- fmt_eu(pop_res$dataset_counts$total_stadester_ghsl_cities, 0)
n_recs_str <- fmt_eu(pop_res$dataset_counts$total_population_records, 0)

# 26a: Left axis Log10 Urban Pop [10^4.2..10^9.8], Right axis Linear Sample Size [0..20000]
log_p_min <- 4.2
log_p_max <- 9.8
max_n_lin <- max(20000, ceiling(max(df_sp_pop$sample_size) / 2500) * 2500)

n_to_logp_lin <- function(n_val) {
  log_p_min + (n_val / max_n_lin) * (log_p_max - log_p_min)
}
logp_to_n_lin <- function(lp_val) {
  ((lp_val - log_p_min) / (log_p_max - log_p_min)) * max_n_lin
}

df_n_base_26a <- df_sp_pop %>%
  filter(year <= 1975) %>%
  mutate(y_mapped = 10^n_to_logp_lin(sample_size), series = "Number of Cities (Stadestér), 3000BC-2025AD")
df_n_ghsl_26a <- df_sp_pop %>%
  filter(year >= 1975) %>%
  mutate(y_mapped = 10^n_to_logp_lin(sample_size), series = "Number of Cities (GHSL), 1975AD-2025AD")
df_callouts_26a <- df_callouts %>%
  mutate(y_mapped = 10^(n_to_logp_lin(sample_size) + 0.11))

legend_cols_26 <- c(
  "Urban Population (Stadestér + GHSL)" = "#8f94f0",
  "Global Urban Pop. Estimates (HYDE/UN)" = "#68a38b",
  "Number of Cities (Stadestér), 3000BC-2025AD" = "#ff8585",
  "Number of Cities (GHSL), 1975AD-2025AD" = "#e63939"
)

p_fig26a <- ggplot() +
  geom_line(
    data = df_sp_pop,
    aes(x = year, y = urban_population, colour = "Urban Population (Stadestér + GHSL)"),
    linewidth = 0.65,
    alpha = 0.85
  ) +
  geom_point(
    data = df_sp_pop,
    aes(x = year, y = urban_population, colour = "Urban Population (Stadestér + GHSL)"),
    size = 1.4,
    alpha = 0.7
  ) +
  geom_line(
    data = df_hy_pop,
    aes(x = year, y = urban_population, colour = "Global Urban Pop. Estimates (HYDE/UN)"),
    linewidth = 0.65,
    linetype = "dashed",
    alpha = 0.85
  ) +
  geom_point(
    data = df_hy_pop,
    aes(x = year, y = urban_population, colour = "Global Urban Pop. Estimates (HYDE/UN)"),
    size = 1.4,
    alpha = 0.75
  ) +
  geom_line(
    data = df_n_base_26a,
    aes(x = year, y = y_mapped, colour = "Number of Cities (Stadestér), 3000BC-2025AD"),
    linewidth = 0.75
  ) +
  geom_line(
    data = df_n_ghsl_26a,
    aes(x = year, y = y_mapped, colour = "Number of Cities (GHSL), 1975AD-2025AD"),
    linewidth = 0.85
  ) +
  geom_text(
    data = df_callouts_26a,
    aes(x = year, y = y_mapped, label = lbl),
    size = 2.0,
    lineheight = 0.88,
    colour = "#1a1a1a"
  ) +
  scale_x_continuous(breaks = seq(-3000, 2000, by = 1000), limits = c(-3150, 2180)) +
  scale_y_log10(
    limits = c(10^log_p_min, 10^log_p_max),
    breaks = c(1e5, 1e6, 1e7, 1e8, 1e9),
    labels = c("100k", "1M", "10M", "100M", "1B"),
    minor_breaks = as.vector(outer(1:9, 10^(4:9))),
    sec.axis = sec_axis(
      transform = ~ logp_to_n_lin(log10(.)),
      name = "Number of Cities",
      breaks = seq(0, max_n_lin, by = 2500),
      labels = function(v) fmt_eu(v, 0)
    )
  ) +
  scale_colour_manual(
    name = NULL,
    values = legend_cols_26,
    breaks = names(legend_cols_26)
  ) +
  labs(
    title = paste0(version_lbl, " (Base + GHSL) Linear/Logarithmic, n=", n_cities_str, " cities, ", n_recs_str, " records (pop.)"),
    x = "Year",
    y = "Urban Population"
  ) +
  theme_bw(base_family = "sans") +
  theme(
    plot.title = element_text(hjust = 0.5, size = 11.5, face = "plain"),
    panel.grid.major = element_line(colour = "#e2e5ea", linewidth = 0.35),
    panel.grid.minor = element_line(colour = "#f0f2f5", linewidth = 0.2),
    legend.position = c(0.18, 0.88),
    legend.background = element_rect(fill = alpha("white", 0.92), colour = "#cccccc", linewidth = 0.3),
    legend.text = element_text(size = 8.5),
    legend.key.height = unit(0.42, "cm")
  )

save_benchmark_png(
  p_fig26a,
  file.path(out_dir, "fig26a_urban_pop_sample_size_linear_log.png"),
  width_in = 13.5,
  height_in = 7.2,
  dpi = 220
)

# 26b: Both axes Log10 (Left Urban Pop [10^4.2..10^9.8], Right Sample Size [1,26..30000])
log_n_min <- 0.1
log_n_max <- 4.45
n_to_logp_log <- function(n_val) {
  log_p_min + ((log10(pmax(1, n_val)) - log_n_min) / (log_n_max - log_n_min)) * (log_p_max - log_p_min)
}
logp_to_n_log <- function(lp_val) {
  10^(log_n_min + ((lp_val - log_p_min) / (log_p_max - log_p_min)) * (log_n_max - log_n_min))
}

df_n_base_26b <- df_sp_pop %>%
  filter(year <= 1975) %>%
  mutate(y_mapped = 10^n_to_logp_log(sample_size))
df_n_ghsl_26b <- df_sp_pop %>%
  filter(year >= 1975) %>%
  mutate(y_mapped = 10^n_to_logp_log(sample_size))
df_callouts_26b <- df_callouts %>%
  mutate(y_mapped = 10^(n_to_logp_log(sample_size) + 0.12))

p_fig26b <- ggplot() +
  geom_line(
    data = df_sp_pop,
    aes(x = year, y = urban_population, colour = "Urban Population (Stadestér + GHSL)"),
    linewidth = 0.65,
    alpha = 0.85
  ) +
  geom_point(
    data = df_sp_pop,
    aes(x = year, y = urban_population, colour = "Urban Population (Stadestér + GHSL)"),
    size = 1.4,
    alpha = 0.7
  ) +
  geom_line(
    data = df_hy_pop,
    aes(x = year, y = urban_population, colour = "Global Urban Pop. Estimates (HYDE/UN)"),
    linewidth = 0.65,
    linetype = "dashed",
    alpha = 0.85
  ) +
  geom_point(
    data = df_hy_pop,
    aes(x = year, y = urban_population, colour = "Global Urban Pop. Estimates (HYDE/UN)"),
    size = 1.4,
    alpha = 0.75
  ) +
  geom_line(
    data = df_n_base_26b,
    aes(x = year, y = y_mapped, colour = "Number of Cities (Stadestér), 3000BC-2025AD"),
    linewidth = 0.75
  ) +
  geom_line(
    data = df_n_ghsl_26b,
    aes(x = year, y = y_mapped, colour = "Number of Cities (GHSL), 1975AD-2025AD"),
    linewidth = 0.85
  ) +
  geom_text(
    data = df_callouts_26b,
    aes(x = year, y = y_mapped, label = lbl),
    size = 2.0,
    lineheight = 0.88,
    colour = "#1a1a1a"
  ) +
  scale_x_continuous(breaks = seq(-3000, 2000, by = 1000), limits = c(-3150, 2180)) +
  scale_y_log10(
    limits = c(10^log_p_min, 10^log_p_max),
    breaks = c(1e5, 1e6, 1e7, 1e8, 1e9),
    labels = c("100k", "1M", "10M", "100M", "1B"),
    minor_breaks = as.vector(outer(1:9, 10^(4:9))),
    sec.axis = sec_axis(
      transform = ~ logp_to_n_log(log10(.)),
      name = "Number of Cities",
      breaks = c(10, 100, 1000, 10000),
      labels = c("10", "100", "1.000", "10.000")
    )
  ) +
  scale_colour_manual(
    name = NULL,
    values = legend_cols_26,
    breaks = names(legend_cols_26)
  ) +
  labs(
    title = paste0(version_lbl, " (Base + GHSL) Logarithmic, n=", n_cities_str, " cities, ", n_recs_str, " records (pop.)"),
    x = "Year",
    y = "Urban Population"
  ) +
  theme_bw(base_family = "sans") +
  theme(
    plot.title = element_text(hjust = 0.5, size = 11.5, face = "plain"),
    panel.grid.major = element_line(colour = "#e2e5ea", linewidth = 0.35),
    panel.grid.minor = element_line(colour = "#f0f2f5", linewidth = 0.2),
    legend.position = c(0.18, 0.88),
    legend.background = element_rect(fill = alpha("white", 0.92), colour = "#cccccc", linewidth = 0.3),
    legend.text = element_text(size = 8.5),
    legend.key.height = unit(0.42, "cm")
  )

save_benchmark_png(
  p_fig26b,
  file.path(out_dir, "fig26b_urban_pop_sample_size_log_log.png"),
  width_in = 13.5,
  height_in = 7.2,
  dpi = 220
)

# ---------------------------------------------------------------------------
# 3. Figure 27: Percentage Deviation between Stadestér-GHSL and HYDE/UN
# ---------------------------------------------------------------------------
message("[3.visualisations/A] Rendering Figure 27 (Percentage Deviation vs HYDE/UN)...")

df_dev <- dev_res$series
sum_dev <- dev_res$summary
sub_txt <- paste0(
  "n = ", sum_dev$count,
  " | M = ", fmt_eu(sum_dev$mean_pct, 2), "%",
  " | SD = ", fmt_eu(sum_dev$sd_pct, 2), "%",
  " | Median = ", fmt_eu(sum_dev$median_pct, 2), "%"
)

p_fig27 <- ggplot(df_dev, aes(x = year, y = pct_deviation_spliced)) +
  geom_hline(yintercept = 0, colour = "#888888", linetype = "dashed", linewidth = 0.45) +
  geom_line(colour = "#1f77b4", linewidth = 0.8) +
  geom_point(colour = "#1f77b4", size = 2.1) +
  scale_x_continuous(breaks = seq(-3000, 2000, by = 1000)) +
  scale_y_continuous(labels = function(v) fmt_eu(v, 0)) +
  labs(
    title = paste0("Percentage Deviation between ", version_lbl, "-GHSL and HYDE/UN"),
    subtitle = sub_txt,
    x = "Year",
    y = "Percentage Deviation (%)"
  ) +
  theme_bw(base_family = "sans") +
  theme(
    plot.title = element_text(hjust = 0.5, size = 12.0, face = "plain"),
    plot.subtitle = element_text(hjust = 0.5, size = 9.5, colour = "#444444"),
    panel.grid.major = element_line(colour = "#cccccc", linewidth = 0.45),
    panel.grid.minor = element_blank()
  )

save_benchmark_png(
  p_fig27,
  file.path(out_dir, "fig27_percentage_deviation_hyde_un.png"),
  width_in = 11.5,
  height_in = 6.2,
  dpi = 220
)

message("[3.visualisations/A] Macro-Validation visualisations complete.")
