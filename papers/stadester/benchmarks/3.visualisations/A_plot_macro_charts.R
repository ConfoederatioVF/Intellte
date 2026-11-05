# Step A (R Charts): Renders Figures 26a, 26b, and 27 matching the scientific dual-axis
# and deviation line plot design of Stadestér 1.0 (Stadestér Sample Size Cells 0, 2, 3)
# with optically legible typography and collision-free callout annotations.

args <- commandArgs(trailingOnly = TRUE)
vis_dir <- if (length(args) >= 1) args[1] else getwd()
source(file.path(vis_dir, "plot_helpers.R"))

bench_dir <- normalizePath(file.path(vis_dir, ".."), winslash = "/")
project_root <- normalizePath(file.path(bench_dir, "..", "..", ".."), winslash = "/")
register_crd_fonts(project_root)

results_dir <- file.path(bench_dir, "2.results")
out_dir <- file.path(vis_dir, "1.macro_validation")
dir.create(out_dir, recursive = TRUE, showWarnings = FALSE)

pop_json <- fromJSON(file.path(results_dir, "macro_urban_population_and_sample.json"))
dev_json <- fromJSON(file.path(results_dir, "macro_hyde_un_deviation.json"))

n_cities_str <- fmt_eu(pop_json$dataset_counts$total_stadester_ghsl_cities, 0)
n_records_str <- fmt_eu(pop_json$dataset_counts$total_population_records, 0)

stad_ghsl_df <- as.data.frame(pop_json$stadester_ghsl_series) %>%
  filter(urban_population > 0)
hyde_df <- as.data.frame(pop_json$hyde_un_series) %>%
  filter(urban_population > 0)

# Base city count up to 1975 splice + GHSL 5-year benchmark epochs (1975-2025)
base_cnt_df <- as.data.frame(pop_json$stadester_base_series) %>%
  filter(year <= 1975, sample_size > 0)
ghsl_cnt_df <- as.data.frame(pop_json$ghsl_series) %>%
  filter(year >= 1975, year %% 5 == 0, sample_size > 0)

# Ensure continuous hand-off at 1975 on the secondary city-count curve
base_1975_row <- base_cnt_df %>% filter(year == 1975)
if (nrow(base_1975_row) > 0) {
  ghsl_cnt_df <- bind_rows(
    data.frame(year = 1975, sample_size = base_1975_row$sample_size[1], urban_population = base_1975_row$urban_population[1]),
    ghsl_cnt_df
  )
}

callouts_df <- as.data.frame(pop_json$callout_points) %>%
  mutate(
    disp_year = ifelse(year == 0, "0", as.character(year)),
    lbl = paste0(disp_year, "\n(", sample_size, ")")
  )

# Logarithmic horizontal gridline positions (10^4 to 10^10, sub-multiples 2..9)
log_majors <- 10^(4:10)
log_minors <- as.vector(outer(2:9, 10^(4:9), `*`))

# ==============================================================================
# 1. Figure 26a: Urban Population (Log10) & Number of Cities (Linear)
# ==============================================================================
log_p_min <- 4.30
log_p_max <- 9.88
cnt_min_lin <- -1700
max_cnt_lin <- max(c(base_cnt_df$sample_size, ghsl_cnt_df$sample_size), na.rm = TRUE) * 1.07

lin_to_logp <- function(cnt) {
  log_p_min + ((cnt - cnt_min_lin) / (max_cnt_lin - cnt_min_lin)) * (log_p_max - log_p_min)
}
logp_to_lin <- function(lp) {
  cnt_min_lin + ((lp - log_p_min) / (log_p_max - log_p_min)) * (max_cnt_lin - cnt_min_lin)
}

callouts_26a <- callouts_df %>%
  mutate(
    y_lp = lin_to_logp(sample_size),
    y_nudge = case_when(
      year == 2025 ~ 0.02,
      year == 2000 ~ -0.06,
      year == 1900 ~ 0.12,
      year >= 0 & year <= 1800 & (year %% 200 == 0) ~ 0.21,
      year >= 0 & year <= 1800 ~ -0.22,
      TRUE ~ 0.16
    ),
    x_nudge = case_when(
      year == 1900 ~ -125,
      year == 2000 ~ 115,
      year == 2025 ~ 105,
      TRUE ~ 0
    )
  )

legend_levels <- c(
  "Urban Population (Stadestér + GHSL)",
  "Global Urban Pop. Estimates (HYDE/UN)",
  "Number of Cities (Stadestér), 3000BC-2025AD",
  "Number of Cities (GHSL), 1975AD-2025AD"
)

p26a <- ggplot() +
  geom_hline(yintercept = log_minors[log_minors >= 10^log_p_min & log_minors <= 10^log_p_max],
             linetype = "dashed", linewidth = 0.26, colour = "#d6d6d6") +
  geom_hline(yintercept = log_majors[log_majors >= 10^log_p_min & log_majors <= 10^log_p_max],
             linetype = "solid", linewidth = 0.42, colour = "#bdbdbd") +
  geom_vline(xintercept = seq(-3000, 2000, by = 1000),
             linetype = "solid", linewidth = 0.42, colour = "#bdbdbd") +
  geom_line(
    data = stad_ghsl_df,
    aes(x = year, y = urban_population, colour = legend_levels[1], linetype = legend_levels[1]),
    linewidth = 0.80
  ) +
  geom_point(
    data = stad_ghsl_df,
    aes(x = year, y = urban_population, colour = legend_levels[1], shape = legend_levels[1]),
    size = 2.0
  ) +
  geom_line(
    data = hyde_df,
    aes(x = year, y = urban_population, colour = legend_levels[2], linetype = legend_levels[2]),
    linewidth = 0.80
  ) +
  geom_point(
    data = hyde_df,
    aes(x = year, y = urban_population, colour = legend_levels[2], shape = legend_levels[2]),
    size = 2.0
  ) +
  geom_line(
    data = base_cnt_df,
    aes(x = year, y = 10^lin_to_logp(sample_size), colour = legend_levels[3], linetype = legend_levels[3]),
    linewidth = 0.80
  ) +
  geom_line(
    data = ghsl_cnt_df,
    aes(x = year, y = 10^lin_to_logp(sample_size), colour = legend_levels[4], linetype = legend_levels[4]),
    linewidth = 0.90
  ) +
  geom_text(
    data = callouts_26a,
    aes(x = year + x_nudge, y = 10^(y_lp + y_nudge), label = lbl),
    size = 2.45,
    lineheight = 0.86,
    colour = "#1a1a1a",
    family = "Karla"
  ) +
  annotation_logticks(
    sides = "l",
    short = unit(1.2, "mm"),
    mid = unit(2.0, "mm"),
    long = unit(2.8, "mm"),
    linewidth = 0.42,
    colour = "#111111"
  ) +
  scale_x_continuous(
    name = "Year",
    breaks = seq(-3000, 2000, by = 1000),
    limits = c(-3220, 2240),
    expand = c(0, 0)
  ) +
  scale_y_log10(
    name = "Urban Population",
    breaks = c(1e5, 1e6, 1e7, 1e8, 1e9),
    labels = c("100k", "1M", "10M", "100M", "1B"),
    limits = c(10^log_p_min, 10^log_p_max),
    expand = c(0, 0),
    sec.axis = sec_axis(
      transform = ~ logp_to_lin(log10(.)),
      name = "Number of Cities",
      breaks = seq(0, 20000, by = 2500),
      labels = function(x) fmt_eu(x, 0)
    )
  ) +
  scale_colour_manual(
    name = NULL,
    breaks = legend_levels,
    values = c(
      rgb(120, 120, 255, maxColorValue = 255, alpha = 135),
      rgb(100, 165, 100, maxColorValue = 255, alpha = 175),
      rgb(255, 115, 115, maxColorValue = 255, alpha = 195),
      "#fa8072"
    )
  ) +
  scale_linetype_manual(
    name = NULL,
    breaks = legend_levels,
    values = c("solid", "dashed", "solid", "solid")
  ) +
  scale_shape_manual(
    name = NULL,
    breaks = legend_levels,
    values = c(16, 16, NA, NA)
  ) +
  guides(
    colour = guide_legend(override.aes = list(
      linetype = c("solid", "dashed", "solid", "solid"),
      shape = c(16, 16, NA, NA),
      linewidth = c(0.9, 0.9, 0.9, 1.0)
    )),
    linetype = "none",
    shape = "none"
  ) +
  labs(
    title = sprintf("Stadestér (Base + GHSL) Linear/Logarithmic, n=%s cities, %s records (pop.)", n_cities_str, n_records_str)
  ) +
  theme_bw(base_size = 13, base_family = "Karla") +
  theme(
    plot.title = element_text(hjust = 0.5, size = 15, face = "plain", colour = "#111111", margin = margin(b = 8)),
    panel.grid = element_blank(),
    panel.border = element_rect(colour = "#111111", fill = NA, linewidth = 0.75),
    axis.ticks = element_line(colour = "#111111", linewidth = 0.5),
    axis.ticks.length = unit(3.8, "pt"),
    axis.title = element_text(size = 13, colour = "#111111"),
    axis.title.y.right = element_text(angle = -90, vjust = 0.5, margin = margin(l = 8)),
    axis.text = element_text(size = 11.2, colour = "#111111"),
    legend.position = c(0.012, 0.982),
    legend.justification = c(0, 1),
    legend.background = element_rect(fill = alpha("white", 0.93), colour = "#cccccc", linewidth = 0.45),
    legend.key.width = unit(24, "pt"),
    legend.key.height = unit(14.5, "pt"),
    legend.text = element_text(size = 11, colour = "#111111"),
    legend.margin = margin(5, 10, 5, 8),
    plot.margin = margin(10, 14, 10, 12)
  )

save_benchmark_png(
  p26a,
  file.path(out_dir, "fig26a_urban_pop_sample_size_linear_log.png"),
  width_in = 13.5,
  height_in = 6.75,
  dpi = 300
)

# ==============================================================================
# 2. Figure 26b: Urban Population (Log10) & Number of Cities (Log10)
# ==============================================================================
log_c_min <- 0.15
log_c_max <- 4.48

logc_to_logp <- function(cnt) {
  lc <- log10(pmax(cnt, 1))
  log_p_min + ((lc - log_c_min) / (log_c_max - log_c_min)) * (log_p_max - log_p_min)
}
logp_to_logc <- function(lp) {
  log_c_min + ((lp - log_p_min) / (log_p_max - log_p_min)) * (log_c_max - log_c_min)
}

callouts_26b <- callouts_df %>%
  mutate(
    y_lp = logc_to_logp(sample_size),
    y_nudge = case_when(
      year == 2025 ~ 0.02,
      year == 2000 ~ 0.22,
      year == 1900 ~ 0.15,
      year == 700 ~ -0.26,
      year == 600 ~ 0.25,
      year >= 700 & year <= 1800 & (year %% 200 == 0) ~ 0.21,
      year >= 700 & year <= 1800 ~ -0.22,
      year >= 0 & year <= 600 & (year %% 200 == 0) ~ 0.24,
      year >= 0 & year <= 600 ~ -0.28,
      TRUE ~ 0.18
    ),
    x_nudge = case_when(
      year == 600 ~ -35,
      year == 700 ~ 60,
      year == 1900 ~ -140,
      year == 2000 ~ -85,
      year == 2025 ~ 105,
      TRUE ~ 0
    )
  )

# Right-spine minor logarithmic tick positions mapped into primary Y log space
right_minor_logc <- log10(as.vector(outer(2:9, 10^(0:4), `*`)))
right_minor_logc <- right_minor_logc[right_minor_logc >= log_c_min & right_minor_logc <= log_c_max]
right_minor_y <- 10^(log_p_min + ((right_minor_logc - log_c_min) / (log_c_max - log_c_min)) * (log_p_max - log_p_min))
right_ticks_df <- data.frame(
  x0 = 2190,
  x1 = 2240,
  y = right_minor_y
)

p26b <- ggplot() +
  geom_hline(yintercept = log_minors[log_minors >= 10^log_p_min & log_minors <= 10^log_p_max],
             linetype = "dashed", linewidth = 0.26, colour = "#d6d6d6") +
  geom_hline(yintercept = log_majors[log_majors >= 10^log_p_min & log_majors <= 10^log_p_max],
             linetype = "solid", linewidth = 0.42, colour = "#bdbdbd") +
  geom_vline(xintercept = seq(-3000, 2000, by = 1000),
             linetype = "solid", linewidth = 0.42, colour = "#bdbdbd") +
  geom_segment(
    data = right_ticks_df,
    aes(x = x0, xend = x1, y = y, yend = y),
    linewidth = 0.40,
    colour = "#111111"
  ) +
  geom_line(
    data = stad_ghsl_df,
    aes(x = year, y = urban_population, colour = legend_levels[1], linetype = legend_levels[1]),
    linewidth = 0.80
  ) +
  geom_point(
    data = stad_ghsl_df,
    aes(x = year, y = urban_population, colour = legend_levels[1], shape = legend_levels[1]),
    size = 2.0
  ) +
  geom_line(
    data = hyde_df,
    aes(x = year, y = urban_population, colour = legend_levels[2], linetype = legend_levels[2]),
    linewidth = 0.80
  ) +
  geom_point(
    data = hyde_df,
    aes(x = year, y = urban_population, colour = legend_levels[2], shape = legend_levels[2]),
    size = 2.0
  ) +
  geom_line(
    data = base_cnt_df,
    aes(x = year, y = 10^logc_to_logp(sample_size), colour = legend_levels[3], linetype = legend_levels[3]),
    linewidth = 0.80
  ) +
  geom_line(
    data = ghsl_cnt_df,
    aes(x = year, y = 10^logc_to_logp(sample_size), colour = legend_levels[4], linetype = legend_levels[4]),
    linewidth = 0.90
  ) +
  geom_text(
    data = callouts_26b,
    aes(x = year + x_nudge, y = 10^(y_lp + y_nudge), label = lbl),
    size = 2.45,
    lineheight = 0.86,
    colour = "#1a1a1a",
    family = "Karla"
  ) +
  annotation_logticks(
    sides = "l",
    short = unit(1.2, "mm"),
    mid = unit(2.0, "mm"),
    long = unit(2.8, "mm"),
    linewidth = 0.42,
    colour = "#111111"
  ) +
  scale_x_continuous(
    name = "Year",
    breaks = seq(-3000, 2000, by = 1000),
    limits = c(-3220, 2240),
    expand = c(0, 0)
  ) +
  scale_y_log10(
    name = "Urban Population",
    breaks = c(1e5, 1e6, 1e7, 1e8, 1e9),
    labels = c("100k", "1M", "10M", "100M", "1B"),
    limits = c(10^log_p_min, 10^log_p_max),
    expand = c(0, 0),
    sec.axis = sec_axis(
      transform = ~ 10^logp_to_logc(log10(.)),
      name = "Number of Cities",
      breaks = c(10, 100, 1000, 10000),
      labels = expression(10^1, 10^2, 10^3, 10^4)
    )
  ) +
  scale_colour_manual(
    name = NULL,
    breaks = legend_levels,
    values = c(
      rgb(120, 120, 255, maxColorValue = 255, alpha = 135),
      rgb(100, 165, 100, maxColorValue = 255, alpha = 175),
      rgb(255, 115, 115, maxColorValue = 255, alpha = 195),
      "#fa8072"
    )
  ) +
  scale_linetype_manual(
    name = NULL,
    breaks = legend_levels,
    values = c("solid", "dashed", "solid", "solid")
  ) +
  scale_shape_manual(
    name = NULL,
    breaks = legend_levels,
    values = c(16, 16, NA, NA)
  ) +
  guides(
    colour = guide_legend(override.aes = list(
      linetype = c("solid", "dashed", "solid", "solid"),
      shape = c(16, 16, NA, NA),
      linewidth = c(0.9, 0.9, 0.9, 1.0)
    )),
    linetype = "none",
    shape = "none"
  ) +
  labs(
    title = sprintf("Stadestér (Base + GHSL) Logarithmic, n=%s cities, %s records (pop.)", n_cities_str, n_records_str)
  ) +
  theme_bw(base_size = 13, base_family = "Karla") +
  theme(
    plot.title = element_text(hjust = 0.5, size = 15, face = "plain", colour = "#111111", margin = margin(b = 8)),
    panel.grid = element_blank(),
    panel.border = element_rect(colour = "#111111", fill = NA, linewidth = 0.75),
    axis.ticks = element_line(colour = "#111111", linewidth = 0.5),
    axis.ticks.length = unit(3.8, "pt"),
    axis.title = element_text(size = 13, colour = "#111111"),
    axis.title.y.right = element_text(angle = -90, vjust = 0.5, margin = margin(l = 8)),
    axis.text = element_text(size = 11.2, colour = "#111111"),
    legend.position = c(0.012, 0.982),
    legend.justification = c(0, 1),
    legend.background = element_rect(fill = alpha("white", 0.93), colour = "#cccccc", linewidth = 0.45),
    legend.key.width = unit(24, "pt"),
    legend.key.height = unit(14.5, "pt"),
    legend.text = element_text(size = 11, colour = "#111111"),
    legend.margin = margin(5, 10, 5, 8),
    plot.margin = margin(10, 14, 10, 12)
  )

save_benchmark_png(
  p26b,
  file.path(out_dir, "fig26b_urban_pop_sample_size_log_log.png"),
  width_in = 13.5,
  height_in = 6.75,
  dpi = 300
)

# ==============================================================================
# 3. Figure 27: Percentage Deviation between Stadestér-GHSL and HYDE/UN
# ==============================================================================
dev_df <- as.data.frame(dev_json$series)

p27 <- ggplot(dev_df, aes(x = year, y = pct_deviation_spliced)) +
  geom_line(colour = "#1f77b4", linewidth = 1.05) +
  geom_point(colour = "#1f77b4", size = 2.65) +
  scale_x_continuous(
    name = "Year",
    breaks = seq(-3000, 2000, by = 1000),
    limits = c(-3250, 2250),
    expand = c(0, 0)
  ) +
  scale_y_continuous(
    name = "Percentage Deviation (%)",
    breaks = seq(-100, 140, by = 20)
  ) +
  labs(
    title = "Percentage Deviation between Stadestér-GHSL and HYDE/UN"
  ) +
  theme_bw(base_size = 13, base_family = "Karla") +
  theme(
    plot.title = element_text(hjust = 0.5, size = 15, face = "plain", colour = "#111111", margin = margin(b = 8)),
    panel.grid.major = element_line(colour = "#b5b5b5", linewidth = 0.45),
    panel.grid.minor = element_blank(),
    panel.border = element_rect(colour = "#111111", fill = NA, linewidth = 0.75),
    axis.ticks = element_line(colour = "#111111", linewidth = 0.5),
    axis.ticks.length = unit(3.8, "pt"),
    axis.title = element_text(size = 13, colour = "#111111"),
    axis.text = element_text(size = 11.5, colour = "#111111"),
    plot.margin = margin(10, 14, 10, 12)
  )

save_benchmark_png(
  p27,
  file.path(out_dir, "fig27_percentage_deviation_hyde_un.png"),
  width_in = 10.5,
  height_in = 5.7,
  dpi = 300
)
