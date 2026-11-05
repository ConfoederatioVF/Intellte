# Step C (R Charts): Renders Figure 37 (Regional Urbanisation Rates) ported faithfully
# from Stadestér 1.0's stadester_regional_urbanisation.R (4x3 grid with per-region
# auto-scaled log10 population and linear share secondary axes).

args <- commandArgs(trailingOnly = TRUE)
vis_dir <- if (length(args) >= 1) args[1] else getwd()
source(file.path(vis_dir, "plot_helpers.R"))

bench_dir <- normalizePath(file.path(vis_dir, ".."), winslash = "/")
project_root <- normalizePath(file.path(bench_dir, "..", "..", ".."), winslash = "/")
register_crd_fonts(project_root)

results_dir <- file.path(bench_dir, "2.results")
out_dir <- file.path(vis_dir, "3.micro_validation")
dir.create(out_dir, recursive = TRUE, showWarnings = FALSE)

urb_json <- fromJSON(file.path(results_dir, "micro_regional_urbanisation.json"))
full_df <- as.data.frame(urb_json$full_series) %>%
  filter(region != "world")

region_order <- c(
  "northern_america", "latin_america", "europe",
  "eastern_europe_and_russia", "central_asia", "middle_east",
  "maghreb_egypt", "sub_saharan_africa", "oceania",
  "indian_subcontinent", "southeast_asia", "eastasia"
)

metric_levels <- c(
  "Rural Population",
  "Rural Share",
  "Total Population",
  "Urban Population",
  "Urban Share"
)

metric_colours <- c(
  "Rural Population" = "darkgreen",
  "Rural Share" = "orange",
  "Total Population" = "black",
  "Urban Population" = "cornflowerblue",
  "Urban Share" = "red"
)

metric_linetypes <- c(
  "Rural Population" = "solid",
  "Rural Share" = "dashed",
  "Total Population" = "solid",
  "Urban Population" = "solid",
  "Urban Share" = "dashed"
)

label_si_en_gb <- function(vals) {
  sapply(vals, function(v) {
    if (is.na(v) || !is.finite(v) || v <= 0) return("")
    if (v >= 1e9) {
      paste0(fmt_eu(v / 1e9, 0), " B")
    } else if (v >= 1e6) {
      paste0(fmt_eu(v / 1e6, 0), " M")
    } else if (v >= 1e3) {
      paste0(fmt_eu(v / 1e3, 0), " k")
    } else {
      fmt_eu(v, 0)
    }
  })
}

build_region_subplot <- function(reg_id) {
  sub_df <- full_df %>%
    filter(region == reg_id) %>%
    arrange(year)

  reg_title <- sub_df$region_name[1]

  pos_pops <- c(
    sub_df$total_population[sub_df$total_population > 0],
    sub_df$rural_population[sub_df$rural_population > 0],
    sub_df$urban_population[sub_df$urban_population > 0]
  )
  min_p <- max(1e3, 10^floor(log10(min(pos_pops, na.rm = TRUE))))
  max_p <- max(1e7, 10^ceiling(log10(max(pos_pops, na.rm = TRUE))))

  log_min <- log10(min_p)
  log_max <- log10(max_p)
  if (log_max <= log_min) log_max <- log_min + 1

  share_to_pop <- function(sh) {
    10^(log_min + pmin(1.0, pmax(0.0, sh)) * (log_max - log_min))
  }
  pop_to_share <- function(pv) {
    (log10(pv) - log_min) / (log_max - log_min)
  }

  plot_rows <- bind_rows(
    sub_df %>% filter(rural_population > 0) %>%
      transmute(year = year, y_val = rural_population, metric = "Rural Population"),
    sub_df %>%
      transmute(year = year, y_val = share_to_pop(rural_share), metric = "Rural Share"),
    sub_df %>% filter(total_population > 0) %>%
      transmute(year = year, y_val = total_population, metric = "Total Population"),
    sub_df %>% filter(urban_population > 0) %>%
      transmute(year = year, y_val = urban_population, metric = "Urban Population"),
    sub_df %>%
      transmute(year = year, y_val = share_to_pop(urban_share), metric = "Urban Share")
  ) %>%
    mutate(metric = factor(metric, levels = metric_levels))

  pow_breaks <- 10^(seq(round(log_min), round(log_max), by = 1))

  ggplot(plot_rows, aes(x = year, y = y_val, colour = metric, linetype = metric)) +
    geom_line(linewidth = 0.65) +
    scale_x_continuous(
      name = "Year",
      breaks = c(-3000, -2000, -1000, 0, 1000, 2000),
      limits = c(-3050, 2050)
    ) +
    scale_y_log10(
      name = "Population (Log Scale)",
      breaks = pow_breaks,
      labels = label_si_en_gb,
      limits = c(min_p, max_p),
      sec.axis = sec_axis(
        transform = ~ pop_to_share(.),
        name = "Share (Linear Scale)",
        breaks = c(0, 0.25, 0.50, 0.75, 1.00),
        labels = c("0%", "25%", "50%", "75%", "100%")
      )
    ) +
    scale_colour_manual(name = "Metric", values = metric_colours, drop = FALSE) +
    scale_linetype_manual(name = "Metric", values = metric_linetypes, drop = FALSE) +
    labs(title = reg_title) +
    theme_minimal(base_size = 9.5, base_family = "Karla") +
    theme(
      plot.title = element_text(hjust = 0.5, face = "bold", size = 10.5, family = "Jost", colour = "#111111"),
      axis.title = element_text(size = 8.2, colour = "#374151"),
      axis.text = element_text(size = 7.2, colour = "#4b5563"),
      panel.grid.minor = element_line(colour = "#f3f4f6", linewidth = 0.25),
      panel.grid.major = element_line(colour = "#e5e7eb", linewidth = 0.35),
      plot.margin = margin(6, 8, 6, 8)
    )
}

subplot_list <- lapply(region_order, build_region_subplot)

combined_37 <- wrap_plots(subplot_list, ncol = 3, guides = "collect") +
  plot_annotation(
    title = "Stadestér-GHSL / Urbanisation rates by world region (3000BC-2025AD)",
    theme = theme(
      plot.title = element_text(
        hjust = 0.01,
        size = 18,
        face = "plain",
        family = "Jost",
        colour = "#111111",
        margin = margin(t = 6, b = 12)
      ),
      plot.margin = margin(10, 12, 10, 12)
    )
  ) &
  theme(
    legend.position = "bottom",
    legend.direction = "horizontal",
    legend.title = element_text(size = 9.2, face = "plain", colour = "#374151"),
    legend.text = element_text(size = 8.8, colour = "#374151"),
    legend.key.width = unit(18, "pt")
  )

save_benchmark_png(
  combined_37,
  file.path(out_dir, "fig37_regional_urbanisation_rates.png"),
  width_in = 17.5,
  height_in = 19.5,
  dpi = 300
)
