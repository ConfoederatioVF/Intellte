//Import dependencies
let fs = require("fs");
let path = require("path");
let BenchmarkIO = require("../1.compiler/io_helpers.js");

//Initialise namespace
global.MarkdownTableExporter = {
  /**
   * Formats a Markdown table from headers and string rows (bold restricted to first column when requested).
   *
   * @param {string[]} arg0_headers
   * @param {Array<string[]>} arg1_rows
   * @param {Object} [arg2_options]
   * @param {string[]} [arg2_options.alignments]
   * @param {boolean} [arg2_options.bold_first_col=true]
   *
   * @returns {string}
   */
  buildMarkdownTable: function (arg0_headers, arg1_rows, arg2_options) {
    //Convert from parameters
    let headers_array = arg0_headers;
    let rows_array = arg1_rows;
    let options = (arg2_options) ? arg2_options : {};

    //Initialise options
    if (options.bold_first_col === undefined) options.bold_first_col = true;

    //Declare local instance variables.
    let align_row_array = [];
    let lines_array = [];

    lines_array.push(`| ${headers_array.join(" | ")} |`);
    for (let i = 0; i < headers_array.length; i++) {
      let local_al = (options.alignments && options.alignments[i]) ? options.alignments[i] : ((i === 0) ? "left" : "right");
      if (local_al === "left") {
        align_row_array.push(":---");
      } else if (local_al === "center") {
        align_row_array.push(":---:");
      } else {
        align_row_array.push("---:");
      }
    }
    lines_array.push(`| ${align_row_array.join(" | ")} |`);

    for (let i = 0; i < rows_array.length; i++) {
      let local_cells = [];
      for (let x = 0; x < rows_array[i].length; x++) {
        let local_val = (rows_array[i][x] !== undefined && rows_array[i][x] !== null) ? String(rows_array[i][x]) : "";
        let local_clean = local_val.replace(/\|/g, "\\|");
        if (x === 0 && options.bold_first_col && local_clean.length > 0 && !local_clean.startsWith("**")) {
          local_cells.push(`**${local_clean}**`);
        } else {
          local_cells.push(local_clean);
        }
      }
      lines_array.push(`| ${local_cells.join(" | ")} |`);
    }

    //Return statement
    return lines_array.join("\n");
  },


  /**
   * Step D: Exports formatted Markdown benchmark tables into 1.macro_validation, 2.meso_validation, and 3.micro_validation.
   *
   * @param {Object} arg0_config
   *
   * @returns {Object}
   */
  exportAllMarkdownTables: function (arg0_config) {
    //Convert from parameters
    let config_obj = arg0_config;

    //Declare local instance variables.
    let fmt = BenchmarkIO.formatEuropeanNumber;
    let fmtSem = BenchmarkIO.formatSemanticNumber;
    let macro_dir = BenchmarkIO.ensureDirectory(path.resolve(__dirname, "1.macro_validation"));
    let meso_dir = BenchmarkIO.ensureDirectory(path.resolve(__dirname, "2.meso_validation"));
    let micro_dir = BenchmarkIO.ensureDirectory(path.resolve(__dirname, "3.micro_validation"));
    let results_dir = path.resolve(__dirname, "..", "2.results");
    let v_lbl = config_obj.version_label;

    let macro_cog = JSON.parse(fs.readFileSync(path.join(results_dir, "macro_centres_of_gravity.json"), "utf8"));
    let macro_hyde = JSON.parse(fs.readFileSync(path.join(results_dir, "macro_hyde_un_deviation.json"), "utf8"));
    let macro_pop = JSON.parse(fs.readFileSync(path.join(results_dir, "macro_urban_population_and_sample.json"), "utf8"));
    let meso_reg = JSON.parse(fs.readFileSync(path.join(results_dir, "meso_regional_cogs.json"), "utf8"));
    let meso_top = JSON.parse(fs.readFileSync(path.join(results_dir, "meso_top_120_rankings.json"), "utf8"));
    let micro_gt = JSON.parse(fs.readFileSync(path.join(results_dir, "micro_global_30_ground_truth.json"), "utf8"));
    let micro_metro = JSON.parse(fs.readFileSync(path.join(results_dir, "micro_global_30_metro_vs_non_metro.json"), "utf8"));
    let micro_moe = JSON.parse(fs.readFileSync(path.join(results_dir, "margins_of_error_summary.json"), "utf8"));
    let micro_urb = JSON.parse(fs.readFileSync(path.join(results_dir, "micro_regional_urbanisation.json"), "utf8"));

    //1. Macro-Validation Markdown Tables
    let pw = macro_cog.pairwise_deviations;
    let macro_cog_rows = [
      [
        "Stadestér Base vs. Reba et al. (-3000 to 2000)",
        fmt(pw.base_vs_reba_published.min_km, 2),
        `${fmt(pw.base_vs_reba_published.max_km, 2)} (${pw.base_vs_reba_published.max_year})`,
        `${fmt(pw.base_vs_reba_published.mean_km, 2)} (${fmt(pw.base_vs_reba_published.mean_pct_great_circle, 2)}%)`,
        `${fmt(pw.base_vs_reba_published.sd_km, 2)} (${fmt(pw.base_vs_reba_published.sd_pct_great_circle, 2)}%)`,
        "~220 to 1.170 km (1,1-2,8%)"
      ],
      [
        "Stadestér Base vs. Reba et al. (Pre-1900)",
        fmt(pw.base_vs_reba_pre_1900.min_km, 2),
        `${fmt(pw.base_vs_reba_pre_1900.max_km, 2)} (${pw.base_vs_reba_pre_1900.max_year})`,
        `${fmt(pw.base_vs_reba_pre_1900.mean_km, 2)} (${fmt(pw.base_vs_reba_pre_1900.mean_pct_great_circle, 2)}%)`,
        `${fmt(pw.base_vs_reba_pre_1900.sd_km, 2)} (${fmt(pw.base_vs_reba_pre_1900.sd_pct_great_circle, 2)}%)`,
        "Max ~1.170 km at 1500AD"
      ],
      [
        "Stadestér Base vs. Mulligan & Crampton (1950-2010)",
        fmt(pw.base_vs_mulligan_crampton_published.min_km, 2),
        `${fmt(pw.base_vs_mulligan_crampton_published.max_km, 2)} (${pw.base_vs_mulligan_crampton_published.max_year})`,
        `${fmt(pw.base_vs_mulligan_crampton_published.mean_km, 2)} (${fmt(pw.base_vs_mulligan_crampton_published.mean_pct_great_circle, 2)}%)`,
        `${fmt(pw.base_vs_mulligan_crampton_published.sd_km, 2)} (${fmt(pw.base_vs_mulligan_crampton_published.sd_pct_great_circle, 2)}%)`,
        "410-450 km (max ~935 km)"
      ],
      [
        "GHSL vs. Mulligan & Crampton (1975-2010)",
        fmt(pw.ghsl_vs_mulligan_crampton_published.min_km, 2),
        `${fmt(pw.ghsl_vs_mulligan_crampton_published.max_km, 2)} (${pw.ghsl_vs_mulligan_crampton_published.max_year})`,
        `${fmt(pw.ghsl_vs_mulligan_crampton_published.mean_km, 2)} (${fmt(pw.ghsl_vs_mulligan_crampton_published.mean_pct_great_circle, 2)}%)`,
        `${fmt(pw.ghsl_vs_mulligan_crampton_published.sd_km, 2)} (${fmt(pw.ghsl_vs_mulligan_crampton_published.sd_pct_great_circle, 2)}%)`,
        "~2.323,52 km (11,60%)"
      ],
      [
        "Stadestér Base vs. GHSL Global CoG (1975-2025)",
        fmt(pw.base_vs_ghsl_1975_2025.min_km, 2),
        `${fmt(pw.base_vs_ghsl_1975_2025.max_km, 2)} (${pw.base_vs_ghsl_1975_2025.max_year})`,
        `${fmt(pw.base_vs_ghsl_1975_2025.mean_km, 2)} (${fmt(pw.base_vs_ghsl_1975_2025.mean_pct_great_circle, 2)}%)`,
        `${fmt(pw.base_vs_ghsl_1975_2025.sd_km, 2)} (${fmt(pw.base_vs_ghsl_1975_2025.sd_pct_great_circle, 2)}%)`,
        "Post-1975 GHSL shift"
      ]
    ];

    let macro_md = [
      `# Macro-Validation Tables (${v_lbl})`,
      "",
      "### Global Centre of Population Deviations",
      "",
      MarkdownTableExporter.buildMarkdownTable(
        ["Comparison Pair", "Min. (km)", "Max. (km)", "Mean (% Great Circle)", "SD (% Great Circle)", "Stadestér 1.0 Reference"],
        macro_cog_rows
      ),
      "",
      "### Sample Size & HYDE/UN Urban Population Summary",
      "",
      MarkdownTableExporter.buildMarkdownTable(
        ["Metric", v_lbl],
        [
          ["Combined Stadestér + GHSL Discrete Cities", fmt(macro_pop.dataset_counts.total_stadester_ghsl_cities, 0)],
          ["Total Discrete Population Records", fmt(macro_pop.dataset_counts.total_population_records, 0)],
          ["Stadestér Base Cities (Metro / Non-Metro)", `${fmt(macro_pop.dataset_counts.total_base_metro_cities, 0)} / ${fmt(macro_pop.dataset_counts.total_base_non_metro_cities, 0)}`],
          ["GHSL Urban Centres", fmt(macro_pop.dataset_counts.total_ghsl_cities, 0)],
          ["HYDE/UN Intersecting Benchmark Years (n)", String(macro_hyde.summary.count)],
          ["Mean Percentage Deviation vs. HYDE/UN", `${fmt(macro_hyde.summary.mean_pct, 2)}%`],
          ["Standard Deviation vs. HYDE/UN", `${fmt(macro_hyde.summary.sd_pct, 2)}%`],
          ["Median Percentage Deviation vs. HYDE/UN", `${fmt(macro_hyde.summary.median_pct, 2)}%`]
        ]
      ),
      ""
    ].join("\n");
    fs.writeFileSync(path.join(macro_dir, "macro_validation_tables.md"), macro_md, "utf8");

    //2. Meso-Validation Markdown Tables
    let reg_cog_rows = [];
    for (let i = 0; i < meso_reg.regions.length; i++) {
      let local_r = meso_reg.regions[i];
      reg_cog_rows.push([
        local_r.name,
        fmt(local_r.min_km, 2),
        fmt(local_r.max_km, 2),
        `${fmt(local_r.mean_km, 2)} (${fmt(local_r.mean_pct_geodesic, 2)}%)`,
        `${fmt(local_r.sd_km, 2)} (${fmt(local_r.sd_pct_geodesic, 2)}%)`,
        `~${fmt(local_r.longest_geodesic_km, 0)}`
      ]);
    }
    let wa = meso_reg.world_average;
    reg_cog_rows.push([
      "World (Avg.)",
      fmt(wa.min_km, 2),
      fmt(wa.max_km, 2),
      `${fmt(wa.mean_km, 2)} (${fmt(wa.mean_pct_geodesic, 2)}%)`,
      `${fmt(wa.sd_km, 2)} (${fmt(wa.sd_pct_geodesic, 2)}%)`,
      "N/A"
    ]);

    let top_counts_rows = [];
    let sum_area = 0;
    let sum_db = 0;
    let sum_dg = 0;
    let sum_pop = 0;
    for (let i = 0; i < meso_top.regional_counts.length; i++) {
      let local_rc = meso_top.regional_counts[i];
      sum_area += local_rc.area;
      sum_db += local_rc.density;
      sum_dg += local_rc.density_ghsl;
      sum_pop += local_rc.population;
      top_counts_rows.push([
        local_rc.name,
        String(local_rc.area),
        String(local_rc.density),
        String(local_rc.density_ghsl),
        String(local_rc.population)
      ]);
    }
    top_counts_rows.push(["Total", String(sum_area), String(sum_db), String(sum_dg), String(sum_pop)]);

    let top_rank_rows = [];
    for (let i = 0; i < 120; i++) {
      let local_a = meso_top.rankings.area[i];
      let local_db = meso_top.rankings.density[i];
      let local_dg = meso_top.rankings.density_ghsl[i];
      let local_p = meso_top.rankings.population[i];

      top_rank_rows.push([
        String(i + 1),
        (local_a) ? `${local_a.name} (${fmt(local_a.value, 0)})` : "-",
        (local_db) ? `${local_db.name} (${fmt(local_db.value, 0)})` : "-",
        (local_dg) ? `${local_dg.name} (${fmtSem(local_dg.value, 1)})` : "-",
        (local_p) ? `${local_p.name} (${fmtSem(local_p.value, 2)})` : "-"
      ]);
    }

    let meso_md = [
      `# Meso-Validation Tables (${v_lbl})`,
      "",
      "### Figure 30. Regional Centre of Population Deviations (1975AD-2000AD, km)",
      "",
      MarkdownTableExporter.buildMarkdownTable(
        ["Region", "Min. Deviation", "Max. Deviation", "Mean (% Error)", "SD (% Error)", "Longest Geodesic"],
        reg_cog_rows
      ),
      "",
      "### Figure 35. Number of Cities in the Global Top 120 by World Region",
      "",
      MarkdownTableExporter.buildMarkdownTable(
        ["Region", "Area", "Centre Density (<1975)", "Centre Density (>=1975 GHSL)", "Population"],
        top_counts_rows
      ),
      "",
      "### Figure 34. Top 120 Rank-Ordinal Table Across All Four Metrics",
      "",
      MarkdownTableExporter.buildMarkdownTable(
        ["Rank", "Area (km^2)", "Centre Density <1975 (ihb/ha)", "Centre Density >=1975 (ihb/km^2)", "Population"],
        top_rank_rows,
        { alignments: ["right", "left", "left", "left", "left"] }
      ),
      ""
    ].join("\n");
    fs.writeFileSync(path.join(meso_dir, "meso_validation_tables.md"), meso_md, "utf8");

    //3. Micro-Validation Markdown Tables (Regional Benchmarks, Metro vs Non-Metro, All 30 GT Tables + Summary + Margins of Error)
    let reg_yrs = micro_urb.benchmark_years;
    let reg_yr_hdrs = reg_yrs.map((yr) => (yr < 0) ? `${Math.abs(yr)}BC` : ((yr === 0) ? "1AD" : `${yr}AD`));

    let buildRegMillionsRows = function (arg0_tbl_rows) {
      //Convert from parameters
      let tbl_rows = arg0_tbl_rows;

      //Declare local instance variables.
      let out_r = [];

      for (let i = 0; i < tbl_rows.length; i++) {
        let local_item = tbl_rows[i];
        let local_line = [local_item.name];
        for (let x = 0; x < reg_yrs.length; x++)
          local_line.push(fmt(local_item.values[String(reg_yrs[x])], 2));
        out_r.push(local_line);
      }

      //Return statement
      return out_r;
    };

    let m_yrs = micro_metro.table_years;
    let m_hdrs = ["City (Series)"].concat(m_yrs.map((yr) => (yr === 0) ? "1AD" : `${yr}AD`), ["Mean |Diff| <1975"]);
    let metro_rows = [];
    for (let i = 0; i < micro_metro.cities.length; i++) {
      let local_c = micro_metro.cities[i];
      let local_ma_line = [`${local_c.name} (MA)`];
      let local_nma_line = [`${local_c.name} (N-MA)`];

      for (let x = 0; x < m_yrs.length; x++) {
        let local_ys = String(m_yrs[x]);
        let local_mv = local_c.ma_population[local_ys];
        let local_nv = local_c.nma_population[local_ys];
        local_ma_line.push((local_mv !== null && local_mv !== undefined) ? fmt(Math.round(local_mv/1000), 0) : "-");
        local_nma_line.push((local_nv !== null && local_nv !== undefined) ? fmt(Math.round(local_nv/1000), 0) : "-");
      }
      local_ma_line.push(`${fmt(local_c.mean_abs_pct_diff_pre_1975, 2)}%`);
      local_nma_line.push("-");
      metro_rows.push(local_ma_line, local_nma_line);
    }

    let gt_summary_rows = [];
    for (let i = 0; i < micro_gt.cities.length; i++) {
      let local_c = micro_gt.cities[i];
      gt_summary_rows.push([
        local_c.name,
        `${fmt(local_c.lower_m_pct, 1)}%`,
        `${fmt(local_c.upper_m_pct, 1)}%`,
        `${fmt(local_c.lower_sd_pct, 1)}%`,
        `${fmt(local_c.upper_sd_pct, 1)}%`,
        fmt(local_c.jaccard_index, 3)
      ]);
    }
    let tr = micro_gt.totals_row;
    gt_summary_rows.push([
      "Total (Avg.)",
      `${fmt(tr.lower_m_pct, 2)}%`,
      `${fmt(tr.upper_m_pct, 2)}%`,
      `${fmt(tr.lower_sd_pct, 2)}%`,
      `${fmt(tr.upper_sd_pct, 2)}%`,
      fmt(tr.jaccard_index, 3)
    ]);

    let gt_individual_sections = [];
    let gt_hdrs = ["Series"].concat(micro_gt.benchmark_years.map((yr) => `${yr}AD`));
    for (let i = 0; i < micro_gt.cities.length; i++) {
      let local_c = micro_gt.cities[i];
      let local_stad_row = ["STAD"];
      let local_gt_row = ["GT"];

      for (let x = 0; x < local_c.years_table.length; x++) {
        let local_cell = local_c.years_table[x];
        local_stad_row.push((local_cell.stad_thousands_rounded !== null) ? fmt(local_cell.stad_thousands_rounded, 0) : "-");
        let local_gdisp = (local_cell.gt_display) ? local_cell.gt_display : "-";
        if (local_cell.exclude_pre_relocation) local_gdisp += "*";
        local_gt_row.push(local_gdisp);
      }

      gt_individual_sections.push(
        `#### Table ${local_c.table_number}. ${local_c.name} — Populations in Thousands (Sources: ${local_c.sources})`,
        "",
        MarkdownTableExporter.buildMarkdownTable(gt_hdrs, [local_stad_row, local_gt_row]),
        "",
        `Lower M: ${fmt(local_c.lower_m_pct, 1)}% | Upper M: ${fmt(local_c.upper_m_pct, 1)}% | Lower SD: ${fmt(local_c.lower_sd_pct, 1)}% | Upper SD: ${fmt(local_c.upper_sd_pct, 1)}% | Angel Jaccard: ${fmt(local_c.jaccard_index, 3)}`,
        ""
      );
    }

    let moe_rows = [
      [
        "Macro: Base vs. Reba et al. CoG (3000BC-2000AD)",
        `${fmt(micro_moe.macro.base_vs_reba_min_km, 1)} to ${fmt(micro_moe.macro.base_vs_reba_max_km, 1)} km`,
        "~220 to 1.170 km"
      ],
      [
        "Macro: Base vs. Mulligan & Crampton CoG (1950-2010)",
        `Mean ${fmt(micro_moe.macro.base_vs_mulligan_crampton_mean_km, 1)} km (Max ${fmt(micro_moe.macro.base_vs_mulligan_crampton_max_km, 1)} km)`,
        "410-450 km (Max ~935 km)"
      ],
      [
        "Macro: GHSL vs. Mulligan & Crampton CoG (1975-2010)",
        `Mean ${fmt(micro_moe.macro.ghsl_vs_mulligan_crampton_mean_km, 2)} km`,
        "~2.323,52 km"
      ],
      [
        "Macro: Urban Pop. Deviation vs. HYDE/UN (3000BC-2025AD)",
        `M = ${fmt(micro_moe.macro.hyde_un_mean_pct_error, 2)}% (SD = ${fmt(micro_moe.macro.hyde_un_sd_pct_error, 2)}%)`,
        "M = -17,4% (SD = 13,0%)"
      ],
      [
        "Meso: 12-Region CoG Deviation Base vs. GHSL (1975-2000)",
        `M = ${fmt(micro_moe.meso.regional_cog_world_mean_km, 2)} km (${fmt(micro_moe.meso.regional_cog_world_mean_pct, 2)}%); SD = ${fmt(micro_moe.meso.regional_cog_world_sd_km, 2)} km`,
        `M = ${fmt(micro_moe.meso.stadester_1_0.regional_cog_world_mean_km, 2)} km (${fmt(micro_moe.meso.stadester_1_0.regional_cog_world_mean_pct, 2)}%); SD = ${fmt(micro_moe.meso.stadester_1_0.regional_cog_world_sd_km, 2)} km`
      ],
      [
        "Meso: Global 30 Spatial Jaccard vs. Angel (1800-2000)",
        `Pooled J = ${fmt(micro_moe.meso.angel_pooled_jaccard, 3)} Base / ${fmt(micro_moe.meso.angel_spliced_pooled_jaccard, 3)} Spliced (Mean = ${fmt(micro_moe.meso.angel_mean_jaccard, 3)})`,
        "Pooled J = 0,532 (Unweighted M = 0,496)"
      ],
      [
        "Micro: Global 30 Scholarly Ground Truth (Non-Metro, All 30)",
        `Lower M = ${fmt(micro_moe.micro.global_30_lower_m_pct, 2)}% (SD ${fmt(micro_moe.micro.global_30_lower_sd_pct, 2)}%); Upper M = ${fmt(micro_moe.micro.global_30_upper_m_pct, 2)}% (SD ${fmt(micro_moe.micro.global_30_upper_sd_pct, 2)}%)`,
        "Lower M = 2,66% (SD 37,47%); Upper M = 3,91% (SD 39,35%)"
      ],
      [
        `Micro: Global 30 Site-Matched (Excl. 2 Ancient Predecessor Merges, n=${micro_moe.micro.global_30_site_matched_city_count})`,
        `Lower M = ${fmt(micro_moe.micro.global_30_site_matched_lower_m_pct, 2)}% (SD ${fmt(micro_moe.micro.global_30_site_matched_lower_sd_pct, 2)}%); Upper M = ${fmt(micro_moe.micro.global_30_site_matched_upper_m_pct, 2)}% (SD ${fmt(micro_moe.micro.global_30_site_matched_upper_sd_pct, 2)}%)`,
        "Excludes Hooghly->Kolkata & Sopara->Mumbai merges"
      ],
      [
        "Micro: Global 30 Scholarly Ground Truth (Metro-Adjusted)",
        `Lower M = ${fmt(micro_moe.micro.global_30_metro_lower_m_pct, 2)}%; Upper M = ${fmt(micro_moe.micro.global_30_metro_upper_m_pct, 2)}%`,
        "Consolidated agglomeration comparison"
      ]
    ];

    let micro_md = [
      `# Micro-Validation & Consolidated Margins of Error (${v_lbl})`,
      "",
      "### Summary of Benchmark Margins of Error",
      "",
      MarkdownTableExporter.buildMarkdownTable(
        ["Validation Scale & Metric", v_lbl, micro_moe.baseline_version_label],
        moe_rows,
        { alignments: ["left", "left", "left"] }
      ),
      "",
      "### Figure 39 (Table 42). Global 30 Error Margins & Spatial Jaccard Summary",
      "",
      MarkdownTableExporter.buildMarkdownTable(
        ["City", "Lower M", "Upper M", "Lower SD", "Upper SD", "Jaccard Index"],
        gt_summary_rows
      ),
      "",
      "### Regional Total Population at Benchmark Years (Millions)",
      "",
      MarkdownTableExporter.buildMarkdownTable(["Region"].concat(reg_yr_hdrs), buildRegMillionsRows(micro_urb.tables_millions.total)),
      "",
      "### Regional Urban Population at Benchmark Years (Millions)",
      "",
      MarkdownTableExporter.buildMarkdownTable(["Region"].concat(reg_yr_hdrs), buildRegMillionsRows(micro_urb.tables_millions.urban)),
      "",
      "### Regional Rural Population at Benchmark Years (Millions)",
      "",
      MarkdownTableExporter.buildMarkdownTable(["Region"].concat(reg_yr_hdrs), buildRegMillionsRows(micro_urb.tables_millions.rural)),
      "",
      "### Figure 38. Global 30 Metro-Adjusted vs. Non-Metro-Adjusted Populations (Thousands)",
      "",
      MarkdownTableExporter.buildMarkdownTable(m_hdrs, metro_rows),
      "",
      "### Individual Global 30 Scholarly Ground Truth Comparisons (Tables 12–41)",
      ""
    ].concat(gt_individual_sections).join("\n");

    fs.writeFileSync(path.join(micro_dir, "micro_validation_tables.md"), micro_md, "utf8");
    console.log("[3.visualisations/D] Exported Markdown tables across macro, meso, and micro directories.");

    //Return statement
    return {
      macro_md_path: path.join(macro_dir, "macro_validation_tables.md"),
      meso_md_path: path.join(meso_dir, "meso_validation_tables.md"),
      micro_md_path: path.join(micro_dir, "micro_validation_tables.md")
    };
  }
};

if (require.main === module) {
  let config_obj = BenchmarkIO.loadConfig();
  MarkdownTableExporter.exportAllMarkdownTables(config_obj);
}

module.exports = global.MarkdownTableExporter;
