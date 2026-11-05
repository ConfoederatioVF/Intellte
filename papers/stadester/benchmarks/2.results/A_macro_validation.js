//Import dependencies
let fs = require("fs");
let path = require("path");
let BenchmarkIO = require("../1.compiler/io_helpers.js");

//Initialise namespace
global.MacroValidation = {
  /**
   * Computes pairwise geodesic distances and summary statistics between two Centre of Gravity series.
   *
   * @param {Object} arg0_series_a
   * @param {Object} arg1_series_b
   * @param {number} arg2_great_circle_km
   * @param {Object} [arg3_options]
   * @param {number} [arg3_options.max_year=2025]
   * @param {number} [arg3_options.min_year=-4000]
   * @param {boolean} [arg3_options.use_compare_year_b=false]
   *
   * @returns {Object}
   */
  computePairwiseCoGDeviation: function (arg0_series_a, arg1_series_b, arg2_great_circle_km, arg3_options) {
    //Convert from parameters
    let series_a_obj = arg0_series_a;
    let series_b_obj = arg1_series_b;
    let great_circle_km = Number(arg2_great_circle_km);
    let options = (arg3_options) ? arg3_options : {};

    //Initialise options
    if (options.max_year === undefined) options.max_year = 2025;
    if (options.min_year === undefined) options.min_year = -4000;
    if (options.use_compare_year_b === undefined) options.use_compare_year_b = false;

    //Declare local instance variables.
    let all_b_keys = [];
    let distances_array = [];
    let max_km = -Infinity;
    let max_year = null;
    let min_km = Infinity;
    let min_year = null;
    let pairs_array = [];

    if (!series_a_obj || !series_b_obj) {
      console.error("MacroValidation.computePairwiseCoGDeviation: Missing input series.");
      return { count: 0, series: [] };
    }


    all_b_keys = Object.keys(series_b_obj).sort((a, b) => Number(a) - Number(b));
    for (let i = 0; i < all_b_keys.length; i++) {
      let local_b_key = all_b_keys[i];
      let local_b_pt = series_b_obj[local_b_key];
      if (!local_b_pt || local_b_pt.lat === null || local_b_pt.lon === null) continue;

      let local_display_yr = (local_b_pt.year !== undefined) ? Number(local_b_pt.year) : Number(local_b_key);
      if (local_display_yr < options.min_year || local_display_yr > options.max_year) continue;

      let local_lookup_yr = (options.use_compare_year_b && local_b_pt.compare_year !== undefined) ?
        String(local_b_pt.compare_year) :
        String(local_display_yr);
      let local_a_pt = series_a_obj[local_lookup_yr];

      if (!local_a_pt && local_lookup_yr === "1" && series_a_obj["0"])
        local_a_pt = series_a_obj["0"];

      if (!local_a_pt || local_a_pt.lat === null || local_a_pt.lon === null) continue;

      let local_dist_km = BenchmarkIO.calculateGeodesicKm(
        local_a_pt.lat,
        local_a_pt.lon,
        local_b_pt.lat,
        local_b_pt.lon
      );
      let local_pct_gc = (local_dist_km/great_circle_km)*100.0;

      distances_array.push(local_dist_km);
      if (local_dist_km < min_km) {
        min_km = local_dist_km;
        min_year = local_display_yr;
      }
      if (local_dist_km > max_km) {
        max_km = local_dist_km;
        max_year = local_display_yr;
      }

      pairs_array.push({
        a_lat: Number(local_a_pt.lat.toFixed(4)),
        a_lon: Number(local_a_pt.lon.toFixed(4)),
        a_year: Number(local_lookup_yr),
        b_lat: Number(local_b_pt.lat.toFixed(4)),
        b_lon: Number(local_b_pt.lon.toFixed(4)),
        distance_km: Number(local_dist_km.toFixed(2)),
        pct_great_circle: Number(local_pct_gc.toFixed(3)),
        year: local_display_yr
      });
    }

    let mean_km = BenchmarkIO.calculateMean(distances_array);
    let sd_km = BenchmarkIO.calculateStdDev(distances_array, { is_sample: true });
    let pop_sd_km = BenchmarkIO.calculateStdDev(distances_array, { is_sample: false });

    //Return statement
    return {
      count: pairs_array.length,
      max_km: (distances_array.length > 0) ? Number(max_km.toFixed(2)) : 0,
      max_pct_great_circle: (distances_array.length > 0) ? Number(((max_km/great_circle_km)*100.0).toFixed(3)) : 0,
      max_year: max_year,
      mean_km: Number(mean_km.toFixed(2)),
      mean_pct_great_circle: Number(((mean_km/great_circle_km)*100.0).toFixed(3)),
      min_km: (distances_array.length > 0) ? Number(min_km.toFixed(2)) : 0,
      min_pct_great_circle: (distances_array.length > 0) ? Number(((min_km/great_circle_km)*100.0).toFixed(3)) : 0,
      min_year: min_year,
      pop_sd_km: Number(pop_sd_km.toFixed(2)),
      sd_km: Number(sd_km.toFixed(2)),
      sd_pct_great_circle: Number(((sd_km/great_circle_km)*100.0).toFixed(3)),
      series: pairs_array
    };
  },


  /**
   * Converts a year-keyed trajectory dictionary into a chronologically sorted array.
   *
   * @param {Object} arg0_year_dict
   * @param {Object} [arg1_options]
   * @param {number} [arg1_options.min_year=-4000]
   * @param {number} [arg1_options.max_year=2025]
   *
   * @returns {Array<Object>}
   */
  convertTrajectoryToArray: function (arg0_year_dict, arg1_options) {
    //Convert from parameters
    let year_dict = arg0_year_dict;
    let options = (arg1_options) ? arg1_options : {};

    //Initialise options
    if (options.max_year === undefined) options.max_year = 2025;
    if (options.min_year === undefined) options.min_year = -4000;

    //Declare local instance variables.
    let out_array = [];

    if (!year_dict || typeof year_dict !== "object")
      return out_array;


    let all_keys = Object.keys(year_dict).sort((a, b) => Number(a) - Number(b));
    for (let i = 0; i < all_keys.length; i++) {
      let local_yr = Number(all_keys[i]);
      if (!Number.isFinite(local_yr) || local_yr < options.min_year || local_yr > options.max_year) continue;

      let local_entry = year_dict[all_keys[i]];
      if (!local_entry || local_entry.lat === null || local_entry.lon === null) continue;

      out_array.push({
        label: (local_entry.label !== undefined) ? String(local_entry.label) : String(local_yr),
        lat: Number(local_entry.lat),
        lon: Number(local_entry.lon),
        population: (local_entry.population !== undefined) ? Number(local_entry.population) : null,
        sample_size: (local_entry.sample_size !== undefined) ? Number(local_entry.sample_size) : null,
        year: local_yr
      });
    }

    //Return statement
    return out_array;
  },


  /**
   * Step A: Computes all Macro-Validation benchmarks (Centres of Gravity, Sample Size & Urban Pop, HYDE/UN Deviation).
   *
   * @param {Object} arg0_config
   *
   * @returns {Object}
   */
  runMacroValidation: function (arg0_config) {
    //Convert from parameters
    let config_obj = arg0_config;

    //Declare local instance variables.
    let compiled_dir = path.resolve(__dirname, "..", "1.compiler", "compiled");
    let great_circle_km = config_obj.earth_great_circle_half_km;
    let results_dir = __dirname;
    let splice_year = config_obj.time_domains.ghsl_splice_year;

    let city_data = JSON.parse(fs.readFileSync(path.join(compiled_dir, "city_datasets_compiled.json"), "utf8"));
    let raster_data = JSON.parse(fs.readFileSync(path.join(compiled_dir, "raster_summaries_compiled.json"), "utf8"));
    let ref_data = JSON.parse(fs.readFileSync(path.join(compiled_dir, "reference_datasets_compiled.json"), "utf8"));

    console.log("[2.results/A] Computing Macro-Validation Centres of Gravity...");
    let base_cogs = raster_data.global_cogs.base;
    let ghsl_cogs = raster_data.global_cogs.ghsl;
    let spliced_cogs = raster_data.global_cogs.stadester_ghsl;

    let base_vs_reba = MacroValidation.computePairwiseCoGDeviation(
      base_cogs,
      ref_data.reba_published_cog,
      great_circle_km,
      { use_compare_year_b: true }
    );
    let base_vs_reba_pre1900 = MacroValidation.computePairwiseCoGDeviation(
      base_cogs,
      ref_data.reba_published_cog,
      great_circle_km,
      { max_year: 1850, use_compare_year_b: true }
    );
    let spliced_vs_reba = MacroValidation.computePairwiseCoGDeviation(
      spliced_cogs,
      ref_data.reba_published_cog,
      great_circle_km,
      { use_compare_year_b: true }
    );
    let base_vs_mc_pub = MacroValidation.computePairwiseCoGDeviation(
      base_cogs,
      ref_data.mulligan_crampton_published_cog,
      great_circle_km,
      { max_year: 2010, min_year: 1950 }
    );
    let ghsl_vs_mc_pub = MacroValidation.computePairwiseCoGDeviation(
      ghsl_cogs,
      ref_data.mulligan_crampton_published_cog,
      great_circle_km,
      { max_year: 2010, min_year: 1975 }
    );
    let base_vs_unwpp_annual = MacroValidation.computePairwiseCoGDeviation(
      base_cogs,
      ref_data.mulligan_crampton_unwpp_cog,
      great_circle_km,
      { max_year: 2010, min_year: 1950 }
    );
    let ghsl_vs_unwpp_annual = MacroValidation.computePairwiseCoGDeviation(
      ghsl_cogs,
      ref_data.mulligan_crampton_unwpp_cog,
      great_circle_km,
      { max_year: 2010, min_year: 1975 }
    );
    let base_vs_ghsl = MacroValidation.computePairwiseCoGDeviation(
      base_cogs,
      ghsl_cogs,
      great_circle_km,
      { max_year: 2025, min_year: splice_year }
    );

    let cog_output_obj = {
      earth_great_circle_half_km: great_circle_km,
      pairwise_deviations: {
        base_vs_ghsl_1975_2025: base_vs_ghsl,
        base_vs_mulligan_crampton_published: base_vs_mc_pub,
        base_vs_reba_pre_1900: base_vs_reba_pre1900,
        base_vs_reba_published: base_vs_reba,
        base_vs_unwpp_annual_1950_2010: base_vs_unwpp_annual,
        ghsl_vs_mulligan_crampton_published: ghsl_vs_mc_pub,
        ghsl_vs_unwpp_annual_1975_2010: ghsl_vs_unwpp_annual,
        stadester_ghsl_vs_reba_published: spliced_vs_reba
      },
      stadester_1_0_baselines: config_obj.stadester_1_0_baselines.macro,
      trajectories: {
        ghsl: MacroValidation.convertTrajectoryToArray(ghsl_cogs, { min_year: splice_year }),
        mulligan_crampton_published: MacroValidation.convertTrajectoryToArray(ref_data.mulligan_crampton_published_cog),
        mulligan_crampton_unwpp_annual: MacroValidation.convertTrajectoryToArray(ref_data.mulligan_crampton_unwpp_cog),
        reba_published: MacroValidation.convertTrajectoryToArray(ref_data.reba_published_cog),
        stadester_base: MacroValidation.convertTrajectoryToArray(base_cogs),
        stadester_ghsl: MacroValidation.convertTrajectoryToArray(spliced_cogs),
        stadester_ghsl_post_1975: MacroValidation.convertTrajectoryToArray(spliced_cogs, { min_year: splice_year })
      },
      version_label: config_obj.version_label
    };

    //2. Urban population & sample size series (Figure 26a & 26b)
    console.log("[2.results/A] Computing Urban Population & Sample Size trajectories...");
    let base_pop_series = [];
    let callout_years_set = new Set([
      -3000, -2000, -1000, 0, 100, 200, 300, 400, 500, 600, 700, 800, 900,
      1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2025
    ]);
    let callouts_array = [];
    let ghsl_pop_series = [];
    let hyde_series_array = [];
    let spliced_pop_series = [];

    let all_spliced_years = Object.keys(spliced_cogs).map(Number).sort((a, b) => a - b);
    for (let i = 0; i < all_spliced_years.length; i++) {
      let local_yr = all_spliced_years[i];
      let local_entry = spliced_cogs[String(local_yr)];
      if (!local_entry) continue;

      let local_item = {
        sample_size: local_entry.sample_size,
        source: (local_yr < splice_year) ? "Stadestér Base" : "GHSL",
        urban_population: local_entry.population,
        year: local_yr
      };
      spliced_pop_series.push(local_item);
      if (callout_years_set.has(local_yr)) callouts_array.push(local_item);
    }

    let all_base_years = Object.keys(base_cogs).map(Number).sort((a, b) => a - b);
    for (let i = 0; i < all_base_years.length; i++) {
      let local_yr = all_base_years[i];
      let local_entry = base_cogs[String(local_yr)];
      if (!local_entry) continue;
      base_pop_series.push({
        sample_size: local_entry.sample_size,
        urban_population: local_entry.population,
        year: local_yr
      });
    }

    let all_ghsl_years = Object.keys(ghsl_cogs).map(Number).sort((a, b) => a - b);
    for (let i = 0; i < all_ghsl_years.length; i++) {
      let local_yr = all_ghsl_years[i];
      let local_entry = ghsl_cogs[String(local_yr)];
      if (!local_entry) continue;
      ghsl_pop_series.push({
        sample_size: local_entry.sample_size,
        urban_population: local_entry.population,
        year: local_yr
      });
    }

    let all_hyde_years = Object.keys(ref_data.hyde_un_world).map(Number).sort((a, b) => a - b);
    for (let i = 0; i < all_hyde_years.length; i++) {
      let local_yr = all_hyde_years[i];
      let local_h = ref_data.hyde_un_world[String(local_yr)];
      if (!local_h) continue;
      hyde_series_array.push({
        rural_population: Math.round(local_h.rural_population),
        total_population: Math.round(local_h.total_population),
        urban_population: Math.round(local_h.urban_population),
        year: local_yr
      });
    }

    let pop_sample_output_obj = {
      callout_points: callouts_array,
      dataset_counts: city_data.summary,
      ghsl_series: ghsl_pop_series,
      hyde_un_series: hyde_series_array,
      stadester_base_series: base_pop_series,
      stadester_ghsl_series: spliced_pop_series,
      version_label: config_obj.version_label
    };

    //3. Percentage deviation between Stadestér+GHSL and HYDE/UN urban population (Figure 27)
    console.log("[2.results/A] Computing Percentage Deviation vs HYDE/UN...");
    let abs_pct_array = [];
    let base_pct_array = [];
    let dev_series_array = [];
    let max_dev_pct = -Infinity;
    let max_dev_year = null;
    let min_dev_pct = Infinity;
    let min_dev_year = null;
    let post1800_pct_array = [];
    let pre1800_pct_array = [];
    let spliced_pct_array = [];

    for (let i = 0; i < all_hyde_years.length; i++) {
      let local_yr = all_hyde_years[i];
      let local_ys = String(local_yr);
      let local_h = ref_data.hyde_un_world[local_ys];
      let local_sp = spliced_cogs[local_ys];
      let local_bs = base_cogs[local_ys];

      if (!local_h || !local_sp || local_h.urban_population <= 0) continue;

      let local_hyde_u = local_h.urban_population;
      let local_sp_u = local_sp.population;
      let local_bs_u = (local_bs) ? local_bs.population : null;

      let local_pct_sp = ((local_sp_u - local_hyde_u)/local_hyde_u)*100.0;
      let local_pct_bs = (local_bs_u !== null) ? ((local_bs_u - local_hyde_u)/local_hyde_u)*100.0 : null;

      spliced_pct_array.push(local_pct_sp);
      abs_pct_array.push(Math.abs(local_pct_sp));
      if (local_pct_bs !== null) base_pct_array.push(local_pct_bs);

      if (local_yr < 1800) {
        pre1800_pct_array.push(local_pct_sp);
      } else {
        post1800_pct_array.push(local_pct_sp);
      }

      if (local_pct_sp < min_dev_pct) {
        min_dev_pct = local_pct_sp;
        min_dev_year = local_yr;
      }
      if (local_pct_sp > max_dev_pct) {
        max_dev_pct = local_pct_sp;
        max_dev_year = local_yr;
      }

      dev_series_array.push({
        abs_diff_spliced: Math.round(local_sp_u - local_hyde_u),
        hyde_un_urban: Math.round(local_hyde_u),
        pct_deviation_base: (local_pct_bs !== null) ? Number(local_pct_bs.toFixed(3)) : null,
        pct_deviation_spliced: Number(local_pct_sp.toFixed(3)),
        stadester_base_urban: local_bs_u,
        stadester_ghsl_urban: local_sp_u,
        year: local_yr
      });
    }

    let sorted_pct = spliced_pct_array.slice().sort((a, b) => a - b);
    let median_pct = 0;
    if (sorted_pct.length > 0) {
      let local_mid = Math.floor(sorted_pct.length/2);
      median_pct = (sorted_pct.length%2 === 1) ?
        sorted_pct[local_mid] :
        (sorted_pct[local_mid - 1] + sorted_pct[local_mid])*0.5;
    }

    let hyde_dev_output_obj = {
      series: dev_series_array,
      stadester_1_0_baselines: config_obj.stadester_1_0_baselines.macro,
      summary: {
        base_only_mean_pct: Number(BenchmarkIO.calculateMean(base_pct_array).toFixed(2)),
        base_only_sd_pct: Number(BenchmarkIO.calculateStdDev(base_pct_array, { is_sample: true }).toFixed(2)),
        count: spliced_pct_array.length,
        max_pct: (spliced_pct_array.length > 0) ? Number(max_dev_pct.toFixed(2)) : 0,
        max_year: max_dev_year,
        mean_abs_pct: Number(BenchmarkIO.calculateMean(abs_pct_array).toFixed(2)),
        mean_pct: Number(BenchmarkIO.calculateMean(spliced_pct_array).toFixed(2)),
        median_pct: Number(median_pct.toFixed(2)),
        min_pct: (spliced_pct_array.length > 0) ? Number(min_dev_pct.toFixed(2)) : 0,
        min_year: min_dev_year,
        pop_sd_pct: Number(BenchmarkIO.calculateStdDev(spliced_pct_array, { is_sample: false }).toFixed(2)),
        post_1800_mean_pct: Number(BenchmarkIO.calculateMean(post1800_pct_array).toFixed(2)),
        post_1800_sd_pct: Number(BenchmarkIO.calculateStdDev(post1800_pct_array, { is_sample: true }).toFixed(2)),
        pre_1800_mean_pct: Number(BenchmarkIO.calculateMean(pre1800_pct_array).toFixed(2)),
        pre_1800_sd_pct: Number(BenchmarkIO.calculateStdDev(pre1800_pct_array, { is_sample: true }).toFixed(2)),
        sd_pct: Number(BenchmarkIO.calculateStdDev(spliced_pct_array, { is_sample: true }).toFixed(2))
      },
      version_label: config_obj.version_label
    };

    BenchmarkIO.saveJSON(path.join(results_dir, "macro_centres_of_gravity.json"), cog_output_obj);
    BenchmarkIO.saveJSON(path.join(results_dir, "macro_urban_population_and_sample.json"), pop_sample_output_obj);
    BenchmarkIO.saveJSON(path.join(results_dir, "macro_hyde_un_deviation.json"), hyde_dev_output_obj);
    console.log("[2.results/A] Saved macro_centres_of_gravity.json, macro_urban_population_and_sample.json, macro_hyde_un_deviation.json.");

    //Return statement
    return {
      centres_of_gravity: cog_output_obj,
      hyde_un_deviation: hyde_dev_output_obj,
      urban_population_and_sample: pop_sample_output_obj
    };
  }
};

if (require.main === module) {
  let config_obj = BenchmarkIO.loadConfig();
  MacroValidation.runMacroValidation(config_obj);
}

module.exports = global.MacroValidation;

