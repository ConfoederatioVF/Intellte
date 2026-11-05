//Import dependencies
let fs = require("fs");
let path = require("path");
let BenchmarkIO = require("../1.compiler/io_helpers.js");

//Initialise namespace
global.MicroValidation = {
  /**
   * Computes Lower/Upper Mean & SD percentage errors for a city's population series against scholarly Ground Truth bounds.
   *
   * @param {Object} arg0_pop_series
   * @param {Object} arg1_gt_thousands
   * @param {number[]} arg2_benchmark_years
   *
   * @returns {Object}
   */
  evaluateCityGroundTruth: function (arg0_pop_series, arg1_gt_thousands, arg2_benchmark_years) {
    //Convert from parameters
    let pop_series_obj = arg0_pop_series;
    let gt_thousands_obj = arg1_gt_thousands;
    let benchmark_years = arg2_benchmark_years;

    //Declare local instance variables.
    let lower_errs_array = [];
    let upper_errs_array = [];
    let year_rows_array = [];

    for (let i = 0; i < benchmark_years.length; i++) {
      let local_yr = benchmark_years[i];
      let local_ys = String(local_yr);
      let local_raw_pop = pop_series_obj[local_ys];
      if (local_raw_pop === undefined && local_yr === 1 && pop_series_obj["0"] !== undefined)
        local_raw_pop = pop_series_obj["0"];

      let local_stad_k_exact = (local_raw_pop !== undefined && local_raw_pop > 0) ? local_raw_pop/1000.0 : null;
      let local_stad_k_round = (local_stad_k_exact !== null) ? Math.round(local_stad_k_exact) : null;
      let local_gt = (gt_thousands_obj) ? gt_thousands_obj[local_ys] : null;

      let local_excl = Boolean(local_gt && local_gt.exclude_pre_relocation);
      let local_included = false;
      let local_lower_err = null;
      let local_upper_err = null;

      if (
        local_stad_k_round !== null &&
        local_stad_k_round > 0 &&
        local_gt &&
        local_gt.lower_k > 0 &&
        local_gt.upper_k > 0 &&
        !local_excl
      ) {
        local_lower_err = ((local_stad_k_round - local_gt.upper_k)/local_gt.upper_k)*100.0;
        local_upper_err = ((local_stad_k_round - local_gt.lower_k)/local_gt.lower_k)*100.0;
        lower_errs_array.push(local_lower_err);
        upper_errs_array.push(local_upper_err);
        local_included = true;
      }

      year_rows_array.push({
        exclude_pre_relocation: local_excl,
        gt_display: (local_gt) ? local_gt.display : "",
        gt_lower_k: (local_gt) ? local_gt.lower_k : null,
        gt_upper_k: (local_gt) ? local_gt.upper_k : null,
        included_in_error: local_included,
        lower_err_pct: (local_lower_err !== null) ? Number(local_lower_err.toFixed(2)) : null,
        stad_1_0_display: (local_gt && local_gt.stadester_1_0_display) ? local_gt.stadester_1_0_display : "",
        stad_thousands_exact: (local_stad_k_exact !== null) ? Number(local_stad_k_exact.toFixed(3)) : null,
        stad_thousands_rounded: (local_stad_k_round !== null && local_stad_k_round > 0) ? local_stad_k_round : null,
        upper_err_pct: (local_upper_err !== null) ? Number(local_upper_err.toFixed(2)) : null,
        year: local_yr
      });
    }

    let lower_m = BenchmarkIO.calculateMean(lower_errs_array);
    let upper_m = BenchmarkIO.calculateMean(upper_errs_array);
    let lower_sd = BenchmarkIO.calculateStdDev(lower_errs_array, { is_sample: false });
    let upper_sd = BenchmarkIO.calculateStdDev(upper_errs_array, { is_sample: false });

    //Return statement
    return {
      compared_years_count: lower_errs_array.length,
      lower_m_pct: Number(lower_m.toFixed(2)),
      lower_sd_pct: Number(lower_sd.toFixed(2)),
      upper_m_pct: Number(upper_m.toFixed(2)),
      upper_sd_pct: Number(upper_sd.toFixed(2)),
      years_table: year_rows_array
    };
  },


  /**
   * Step C: Computes all Micro-Validation benchmarks (Global Snapshots, 12-Region Urbanisation, Metro vs Non-Metro, Global 30 Ground Truth, Margins of Error).
   *
   * @param {Object} arg0_config
   *
   * @returns {Object}
   */
  runMicroValidation: function (arg0_config) {
    //Convert from parameters
    let config_obj = arg0_config;

    //Declare local instance variables.
    let compiled_dir = path.resolve(__dirname, "..", "1.compiler", "compiled");
    let results_dir = __dirname;

    let city_data = JSON.parse(fs.readFileSync(path.join(compiled_dir, "city_datasets_compiled.json"), "utf8"));
    let macro_cog = JSON.parse(fs.readFileSync(path.join(results_dir, "macro_centres_of_gravity.json"), "utf8"));
    let macro_hyde = JSON.parse(fs.readFileSync(path.join(results_dir, "macro_hyde_un_deviation.json"), "utf8"));
    let meso_reg = JSON.parse(fs.readFileSync(path.join(results_dir, "meso_regional_cogs.json"), "utf8"));
    let meso_st = JSON.parse(fs.readFileSync(path.join(results_dir, "meso_global_30_spatiotemporal.json"), "utf8"));
    let raster_data = JSON.parse(fs.readFileSync(path.join(compiled_dir, "raster_summaries_compiled.json"), "utf8"));
    let ref_data = JSON.parse(fs.readFileSync(path.join(compiled_dir, "reference_datasets_compiled.json"), "utf8"));
    let snapshots_raw = JSON.parse(fs.readFileSync(path.join(compiled_dir, "urban_gridcell_snapshots.json"), "utf8"));

    //1. Global Urban Gridcell Snapshots summary (Figure 36)
    console.log("[2.results/C] Summarising Global Urban Gridcell Snapshots...");
    let snap_years = config_obj.time_domains.snapshot_years;
    let snapshot_summaries_array = [];

    for (let i = 0; i < snap_years.length; i++) {
      let local_yr = snap_years[i];
      let local_cells = snapshots_raw[String(local_yr)] || [];
      let local_pops = [];
      let local_tot = 0;

      for (let x = 0; x < local_cells.length; x++) {
        let local_v = local_cells[x][2];
        local_pops.push(local_v);
        local_tot += local_v;
      }

      let local_n = local_pops.length;
      snapshot_summaries_array.push({
        display_year: (local_yr === 0) ? "1AD" : `${local_yr}AD`,
        gridcell_count: local_n,
        max_cell_population: (local_n > 0) ? local_pops[local_n - 1] : 0,
        mean_cell_population: (local_n > 0) ? Math.round(local_tot/local_n) : 0,
        median_cell_population: (local_n > 0) ? local_pops[Math.floor(local_n*0.5)] : 0,
        min_cell_population: (local_n > 0) ? local_pops[0] : 0,
        p90_cell_population: (local_n > 0) ? local_pops[Math.min(local_n - 1, Math.floor(local_n*0.9))] : 0,
        p99_cell_population: (local_n > 0) ? local_pops[Math.min(local_n - 1, Math.floor(local_n*0.99))] : 0,
        total_urban_population: local_tot,
        year: local_yr
      });
    }

    let snapshots_output = {
      compiled_gridcells_file: "../1.compiler/compiled/urban_gridcell_snapshots.json",
      snapshots: snapshot_summaries_array,
      version_label: config_obj.version_label
    };

    //2. Regional Urbanisation Rates & Benchmark Tables in Millions (Figure 37 & Tables 5-7)
    console.log("[2.results/C] Compiling Regional Urbanisation Tables & Series...");
    let reg_bench_years = config_obj.time_domains.regional_table_years;
    let reg_lookup_map = {};
    let urb_series = raster_data.regional_urbanisation;

    for (let i = 0; i < urb_series.length; i++) {
      let local_row = urb_series[i];
      if (!reg_lookup_map[local_row.region]) reg_lookup_map[local_row.region] = {};
      reg_lookup_map[local_row.region][String(local_row.year)] = local_row;
    }

    let region_order_array = config_obj.regions.map((r) => ({ id: r.id, name: r.name }));
    region_order_array.push({ id: "world", name: "World" });

    let rural_millions_rows = [];
    let total_millions_rows = [];
    let urban_millions_rows = [];
    let urban_share_pct_rows = [];

    for (let i = 0; i < region_order_array.length; i++) {
      let local_reg = region_order_array[i];
      let local_rmap = reg_lookup_map[local_reg.id] || {};
      let local_r_vals = {};
      let local_t_vals = {};
      let local_u_vals = {};
      let local_us_vals = {};

      for (let x = 0; x < reg_bench_years.length; x++) {
        let local_yr = reg_bench_years[x];
        let local_ys = String(local_yr);
        let local_rec = local_rmap[local_ys];

        local_t_vals[local_ys] = (local_rec) ? Number((local_rec.total_population/1e6).toFixed(2)) : 0;
        local_u_vals[local_ys] = (local_rec) ? Number((local_rec.urban_population/1e6).toFixed(2)) : 0;
        local_r_vals[local_ys] = (local_rec) ? Number((local_rec.rural_population/1e6).toFixed(2)) : 0;
        local_us_vals[local_ys] = (local_rec) ? Number((local_rec.urban_share*100.0).toFixed(2)) : 0;
      }

      total_millions_rows.push({ id: local_reg.id, name: local_reg.name, values: local_t_vals });
      urban_millions_rows.push({ id: local_reg.id, name: local_reg.name, values: local_u_vals });
      rural_millions_rows.push({ id: local_reg.id, name: local_reg.name, values: local_r_vals });
      urban_share_pct_rows.push({ id: local_reg.id, name: local_reg.name, values: local_us_vals });
    }

    let regional_urbanisation_output = {
      benchmark_years: reg_bench_years,
      full_series: urb_series,
      tables_millions: {
        rural: rural_millions_rows,
        total: total_millions_rows,
        urban: urban_millions_rows,
        urban_share_pct: urban_share_pct_rows
      },
      version_label: config_obj.version_label
    };

    //3. Global 30 Metro-Adjusted vs Non-Metro-Adjusted Comparison (Figure 38)
    console.log("[2.results/C] Computing Global 30 Metro-Adjusted vs Non-Metro-Adjusted table...");
    let g30_table_years = config_obj.time_domains.global_30_table_years;
    let metro_vs_non_metro_cities = [];
    let pre1975_abs_diffs_all = [];

    for (let i = 0; i < config_obj.global_30.length; i++) {
      let local_def = config_obj.global_30[i];
      let local_c = city_data.global_30_series[local_def.id];
      let local_abs_diffs = [];
      let local_ma_obj = {};
      let local_nma_obj = {};
      let local_pct_obj = {};

      for (let x = 0; x < g30_table_years.length; x++) {
        let local_yr = g30_table_years[x];
        let local_ys = String(local_yr);
        let local_ma_v = (local_c.metro_adjusted_population[local_ys] !== undefined) ?
          Math.round(local_c.metro_adjusted_population[local_ys]) : null;
        let local_nma_v = (local_c.non_metro_adjusted_population[local_ys] !== undefined) ?
          Math.round(local_c.non_metro_adjusted_population[local_ys]) : null;

        local_ma_obj[local_ys] = local_ma_v;
        local_nma_obj[local_ys] = local_nma_v;

        if (local_ma_v !== null && local_nma_v !== null && local_nma_v > 0) {
          let local_pdiff = ((local_ma_v - local_nma_v)/local_nma_v)*100.0;
          local_pct_obj[local_ys] = Number(local_pdiff.toFixed(2));
          if (local_yr < config_obj.time_domains.ghsl_splice_year) {
            local_abs_diffs.push(Math.abs(local_pdiff));
            pre1975_abs_diffs_all.push(Math.abs(local_pdiff));
          }
        } else {
          local_pct_obj[local_ys] = null;
        }
      }

      metro_vs_non_metro_cities.push({
        id: local_def.id,
        ma_population: local_ma_obj,
        mean_abs_pct_diff_pre_1975: Number(BenchmarkIO.calculateMean(local_abs_diffs).toFixed(2)),
        name: local_def.name,
        nma_population: local_nma_obj,
        pct_diff_vs_nma: local_pct_obj
      });
    }

    let metro_vs_non_metro_output = {
      cities: metro_vs_non_metro_cities,
      summary: {
        overall_mean_abs_pct_diff_pre_1975: Number(BenchmarkIO.calculateMean(pre1975_abs_diffs_all).toFixed(2))
      },
      table_years: g30_table_years,
      version_label: config_obj.version_label
    };

    //4. Global 30 Scholarly Ground Truth Error Margins & Jaccard Summary (Tables 12-42 / Figure 39)
    console.log("[2.results/C] Evaluating Global 30 Scholarly Ground Truth (Tables 12-42)...");
    let gt_config = ref_data.global_30_ground_truth;
    let gt_bench_years = gt_config.benchmark_years;
    let jaccard_by_id = {};

    for (let i = 0; i < meso_st.cities.length; i++)
      jaccard_by_id[meso_st.cities[i].id] = meso_st.cities[i];

    let gt_city_results_array = [];
    let lower_m_list = [];
    let lower_sd_list = [];
    let metro_lower_m_list = [];
    let metro_lower_sd_list = [];
    let metro_upper_m_list = [];
    let metro_upper_sd_list = [];
    let site_matched_lower_m_list = [];
    let site_matched_lower_sd_list = [];
    let site_matched_upper_m_list = [];
    let site_matched_upper_sd_list = [];
    let upper_m_list = [];
    let upper_sd_list = [];

    for (let i = 0; i < config_obj.global_30.length; i++) {
      let local_def = config_obj.global_30[i];
      let local_c = city_data.global_30_series[local_def.id];
      let local_gt_city = gt_config.cities[local_def.id];
      let local_j_info = jaccard_by_id[local_def.id];

      let local_nma_eval = MicroValidation.evaluateCityGroundTruth(
        local_c.non_metro_adjusted_population,
        local_gt_city.ground_truth_thousands,
        gt_bench_years
      );
      let local_ma_eval = MicroValidation.evaluateCityGroundTruth(
        local_c.metro_adjusted_population,
        local_gt_city.ground_truth_thousands,
        gt_bench_years
      );

      //Attach Metro-Adjusted thousands alongside Non-Metro-Adjusted thousands in years_table
      for (let x = 0; x < local_nma_eval.years_table.length; x++) {
        local_nma_eval.years_table[x].stad_metro_thousands_rounded =
          local_ma_eval.years_table[x].stad_thousands_rounded;
      }

      lower_m_list.push(local_nma_eval.lower_m_pct);
      upper_m_list.push(local_nma_eval.upper_m_pct);
      lower_sd_list.push(local_nma_eval.lower_sd_pct);
      upper_sd_list.push(local_nma_eval.upper_sd_pct);

      if (!local_def.has_ancient_predecessor_merge) {
        site_matched_lower_m_list.push(local_nma_eval.lower_m_pct);
        site_matched_upper_m_list.push(local_nma_eval.upper_m_pct);
        site_matched_lower_sd_list.push(local_nma_eval.lower_sd_pct);
        site_matched_upper_sd_list.push(local_nma_eval.upper_sd_pct);
      }

      metro_lower_m_list.push(local_ma_eval.lower_m_pct);
      metro_upper_m_list.push(local_ma_eval.upper_m_pct);
      metro_lower_sd_list.push(local_ma_eval.lower_sd_pct);
      metro_upper_sd_list.push(local_ma_eval.upper_sd_pct);

      gt_city_results_array.push({
        compared_years_count: local_nma_eval.compared_years_count,
        has_ancient_predecessor_merge: Boolean(local_def.has_ancient_predecessor_merge),
        id: local_def.id,
        jaccard_index: (local_j_info) ? Number(local_j_info.angel_jaccard.toFixed(3)) : 0,
        lower_m_pct: local_nma_eval.lower_m_pct,
        lower_sd_pct: local_nma_eval.lower_sd_pct,
        metro_adjusted_summary: {
          lower_m_pct: local_ma_eval.lower_m_pct,
          lower_sd_pct: local_ma_eval.lower_sd_pct,
          upper_m_pct: local_ma_eval.upper_m_pct,
          upper_sd_pct: local_ma_eval.upper_sd_pct
        },
        name: local_def.name,
        sources: local_gt_city.sources,
        stadester_1_0_summary: local_gt_city.stadester_1_0_summary,
        table_number: 12 + i,
        upper_m_pct: local_nma_eval.upper_m_pct,
        upper_sd_pct: local_nma_eval.upper_sd_pct,
        years_table: local_nma_eval.years_table
      });
    }

    let site_matched_summary_obj = {
      city_count: site_matched_lower_m_list.length,
      lower_m_pct: Number(BenchmarkIO.calculateMean(site_matched_lower_m_list).toFixed(2)),
      lower_sd_pct: Number(BenchmarkIO.calculateMean(site_matched_lower_sd_list).toFixed(2)),
      upper_m_pct: Number(BenchmarkIO.calculateMean(site_matched_upper_m_list).toFixed(2)),
      upper_sd_pct: Number(BenchmarkIO.calculateMean(site_matched_upper_sd_list).toFixed(2))
    };

    let gt_totals_row = {
      jaccard_index: meso_st.summary.pooled_angel_jaccard,
      lower_m_pct: Number(BenchmarkIO.calculateMean(lower_m_list).toFixed(2)),
      lower_sd_pct: Number(BenchmarkIO.calculateMean(lower_sd_list).toFixed(2)),
      metro_adjusted: {
        lower_m_pct: Number(BenchmarkIO.calculateMean(metro_lower_m_list).toFixed(2)),
        lower_sd_pct: Number(BenchmarkIO.calculateMean(metro_lower_sd_list).toFixed(2)),
        upper_m_pct: Number(BenchmarkIO.calculateMean(metro_upper_m_list).toFixed(2)),
        upper_sd_pct: Number(BenchmarkIO.calculateMean(metro_upper_sd_list).toFixed(2))
      },
      name: "Total (Avg.)",
      site_matched_no_predecessor_merge: site_matched_summary_obj,
      unweighted_mean_jaccard: meso_st.summary.mean_angel_jaccard,
      upper_m_pct: Number(BenchmarkIO.calculateMean(upper_m_list).toFixed(2)),
      upper_sd_pct: Number(BenchmarkIO.calculateMean(upper_sd_list).toFixed(2))
    };

    let ground_truth_output = {
      benchmark_years: gt_bench_years,
      cities: gt_city_results_array,
      site_matched_no_predecessor_merge: site_matched_summary_obj,
      stadester_1_0_totals: gt_config.stadester_1_0_totals,
      totals_row: gt_totals_row,
      version_label: config_obj.version_label
    };

    //5. Consolidated Margins of Error Summary across Macro, Meso, and Micro scales
    let margins_of_error_output = {
      baseline_version_label: config_obj.baseline_version_label,
      macro: {
        base_vs_mulligan_crampton_mean_km: macro_cog.pairwise_deviations.base_vs_mulligan_crampton_published.mean_km,
        base_vs_mulligan_crampton_max_km: macro_cog.pairwise_deviations.base_vs_mulligan_crampton_published.max_km,
        base_vs_reba_max_km: macro_cog.pairwise_deviations.base_vs_reba_published.max_km,
        base_vs_reba_min_km: macro_cog.pairwise_deviations.base_vs_reba_published.min_km,
        ghsl_vs_mulligan_crampton_mean_km: macro_cog.pairwise_deviations.ghsl_vs_mulligan_crampton_published.mean_km,
        hyde_un_mean_pct_error: macro_hyde.summary.mean_pct,
        hyde_un_sd_pct_error: macro_hyde.summary.sd_pct,
        stadester_1_0: config_obj.stadester_1_0_baselines.macro
      },
      meso: {
        angel_mean_jaccard: meso_st.summary.mean_angel_jaccard,
        angel_pooled_jaccard: meso_st.summary.pooled_angel_jaccard,
        angel_spliced_pooled_jaccard: meso_st.summary.pooled_spliced_angel_jaccard,
        regional_cog_world_mean_km: meso_reg.world_average.mean_km,
        regional_cog_world_mean_pct: meso_reg.world_average.mean_pct_geodesic,
        regional_cog_world_sd_km: meso_reg.world_average.sd_km,
        regional_cog_world_sd_pct: meso_reg.world_average.sd_pct_geodesic,
        stadester_1_0: config_obj.stadester_1_0_baselines.meso
      },
      micro: {
        global_30_lower_m_pct: gt_totals_row.lower_m_pct,
        global_30_lower_sd_pct: gt_totals_row.lower_sd_pct,
        global_30_metro_lower_m_pct: gt_totals_row.metro_adjusted.lower_m_pct,
        global_30_metro_upper_m_pct: gt_totals_row.metro_adjusted.upper_m_pct,
        global_30_site_matched_city_count: site_matched_summary_obj.city_count,
        global_30_site_matched_lower_m_pct: site_matched_summary_obj.lower_m_pct,
        global_30_site_matched_lower_sd_pct: site_matched_summary_obj.lower_sd_pct,
        global_30_site_matched_upper_m_pct: site_matched_summary_obj.upper_m_pct,
        global_30_site_matched_upper_sd_pct: site_matched_summary_obj.upper_sd_pct,
        global_30_upper_m_pct: gt_totals_row.upper_m_pct,
        global_30_upper_sd_pct: gt_totals_row.upper_sd_pct,
        stadester_1_0: config_obj.stadester_1_0_baselines.micro
      },
      version_label: config_obj.version_label
    };

    BenchmarkIO.saveJSON(path.join(results_dir, "micro_urban_gridcell_snapshots.json"), snapshots_output);
    BenchmarkIO.saveJSON(path.join(results_dir, "micro_regional_urbanisation.json"), regional_urbanisation_output);
    BenchmarkIO.saveJSON(path.join(results_dir, "micro_global_30_metro_vs_non_metro.json"), metro_vs_non_metro_output);
    BenchmarkIO.saveJSON(path.join(results_dir, "micro_global_30_ground_truth.json"), ground_truth_output);
    BenchmarkIO.saveJSON(path.join(results_dir, "margins_of_error_summary.json"), margins_of_error_output);
    console.log("[2.results/C] Saved all 5 Micro-Validation & Margins-of-Error JSON files.");

    //Return statement
    return {
      global_30_ground_truth: ground_truth_output,
      global_30_metro_vs_non_metro: metro_vs_non_metro_output,
      margins_of_error: margins_of_error_output,
      regional_urbanisation: regional_urbanisation_output,
      urban_gridcell_snapshots: snapshots_output
    };
  }
};

if (require.main === module) {
  let config_obj = BenchmarkIO.loadConfig();
  MicroValidation.runMicroValidation(config_obj);
}

module.exports = global.MicroValidation;
