//Import dependencies
let fs = require("fs");
let path = require("path");
let BenchmarkIO = require("./io_helpers.js");

//Initialise namespace
global.CityDatasetCompiler = {
  /**
   * Builds a fast 12-region spatial classifier from regional_subdivisions.png with nearest-land fallback.
   *
   * @param {Object} arg0_config
   *
   * @returns {Object}
   */
  buildRegionLookup: function (arg0_config) {
    //Convert from parameters
    let config_obj = arg0_config;

    //Declare local instance variables.
    let png_rel_path = (config_obj.paths.voronoi_regions_png) ?
      config_obj.paths.voronoi_regions_png :
      config_obj.paths.regional_subdivisions_png;
    let png_path = BenchmarkIO.resolveProjectPath(png_rel_path);
    let region_png = BenchmarkIO.decodePNG(png_path);
    let regions_array = config_obj.regions;
    let rgb_to_idx_obj = {};

    if (!region_png) {
      console.error("CityDatasetCompiler.buildRegionLookup: Failed to load regional subdivisions PNG.");
      return null;
    }


    for (let i = 0; i < regions_array.length; i++) {
      let local_rgb = regions_array[i].rgb;
      rgb_to_idx_obj[`${local_rgb[0]},${local_rgb[1]},${local_rgb[2]}`] = i;
    }

    let pixel_count = region_png.width*region_png.height;
    let region_grid = new Int8Array(pixel_count);
    region_grid.fill(-1);

    for (let i = 0; i < pixel_count; i++) {
      let local_off = i*4;
      let local_r = region_png.rgba[local_off];
      let local_g = region_png.rgba[local_off + 1];
      let local_b = region_png.rgba[local_off + 2];
      let local_key = `${local_r},${local_g},${local_b}`;

      if (rgb_to_idx_obj[local_key] !== undefined)
        region_grid[i] = rgb_to_idx_obj[local_key];
    }

    //Return statement
    return {
      grid: region_grid,
      height: region_png.height,
      regions: regions_array,
      width: region_png.width
    };
  },


  /**
   * Resolves the world region metadata for a latitude/longitude pair using nearest-land-pixel search.
   *
   * @param {Object} arg0_lookup
   * @param {number} arg1_lat
   * @param {number} arg2_lon
   *
   * @returns {{id: string, name: string, rgb: number[], hex: string}}
   */
  classifyLatLonRegion: function (arg0_lookup, arg1_lat, arg2_lon) {
    //Convert from parameters
    let lookup_obj = arg0_lookup;
    let lat = Number(arg1_lat);
    let lon = Number(arg2_lon);

    //Declare local instance variables.
    let best_dist_sq = Infinity;
    let best_idx = 0;
    let pixel_pt = BenchmarkIO.latLonToPixel(lat, lon, lookup_obj.width, lookup_obj.height);

    let direct_idx = lookup_obj.grid[pixel_pt.y*lookup_obj.width + pixel_pt.x];
    if (direct_idx >= 0)
      return lookup_obj.regions[direct_idx];


    for (let i = 1; i <= 60; i++) {
      for (let x = -i; x <= i; x++) {
        for (let y = -i; y <= i; y++) {
          if (Math.abs(x) !== i && Math.abs(y) !== i) continue;

          let local_px = (pixel_pt.x + x + lookup_obj.width)%lookup_obj.width;
          let local_py = Math.max(0, Math.min(lookup_obj.height - 1, pixel_pt.y + y));
          let local_reg = lookup_obj.grid[local_py*lookup_obj.width + local_px];

          if (local_reg >= 0) {
            let local_d2 = x*x + y*y;
            if (local_d2 < best_dist_sq) {
              best_dist_sq = local_d2;
              best_idx = local_reg;
            }
          }
        }
      }
      if (best_dist_sq < Infinity) break;
    }

    //Return statement
    return lookup_obj.regions[best_idx];
  },


  /**
   * Step A: Compiles discrete city datasets (Stadestér Base Metro, Non-Metro, GHSL, and combined Stadestér-GHSL).
   *
   * @param {Object} arg0_config
   *
   * @returns {Object}
   */
  compileCityDatasets: function (arg0_config) {
    //Convert from parameters
    let config_obj = arg0_config;

    //Declare local instance variables.
    let compiled_dir = path.resolve(__dirname, "compiled");
    let ghsl_path = BenchmarkIO.resolveProjectPath(config_obj.paths.ghsl_cities_json);
    let max_year = config_obj.time_domains.max_year;
    let metro_path = BenchmarkIO.resolveProjectPath(config_obj.paths.stadester_cities_metro_json);
    let min_year = config_obj.time_domains.min_year;
    let non_metro_path = BenchmarkIO.resolveProjectPath(config_obj.paths.stadester_cities_non_metro_json);
    let region_lookup = CityDatasetCompiler.buildRegionLookup(config_obj);
    let splice_year = config_obj.time_domains.ghsl_splice_year;
    let stad_ghsl_path = BenchmarkIO.resolveProjectPath(config_obj.paths.stadester_ghsl_cities_json);

    console.log("[1.compiler/A] Loading discrete city datasets...");
    let ghsl_obj = JSON.parse(fs.readFileSync(ghsl_path, "utf8"));
    let metro_obj = JSON.parse(fs.readFileSync(metro_path, "utf8"));
    let non_metro_obj = JSON.parse(fs.readFileSync(non_metro_path, "utf8"));
    let stad_ghsl_obj = JSON.parse(fs.readFileSync(stad_ghsl_path, "utf8"));

    let all_ghsl_keys = Object.keys(ghsl_obj);
    let all_metro_keys = Object.keys(metro_obj);
    let all_non_metro_keys = Object.keys(non_metro_obj);
    let all_stad_ghsl_keys = Object.keys(stad_ghsl_obj);

    let base_population_records = 0;
    let cities_with_radial_buffers = 0;
    let ghsl_population_records = 0;

    for (let i = 0; i < all_metro_keys.length; i++) {
      let local_city = metro_obj[all_metro_keys[i]];
      let local_pop_map = CityDatasetCompiler.extractValidYearMap(local_city.population, min_year, max_year);
      base_population_records += Object.keys(local_pop_map).length;
      if (local_city.radial_buffers) cities_with_radial_buffers++;
    }

    for (let i = 0; i < all_ghsl_keys.length; i++) {
      let local_city = ghsl_obj[all_ghsl_keys[i]];
      let local_pop_map = CityDatasetCompiler.extractValidYearMap(local_city.population, min_year, max_year);
      ghsl_population_records += Object.keys(local_pop_map).length;
    }

    //Compile Top 120 rankings across area, density (<1975 Base centre_density), density_ghsl (>=1975 GHSL), and population
    console.log("[1.compiler/A] Compiling Top 120 city candidates across 4 metrics...");
    let area_candidates_array = [];
    let density_base_candidates_array = [];
    let density_ghsl_candidates_array = [];
    let pop_candidates_array = [];

    let min_pop_threshold = (config_obj.min_inhabitant_threshold !== undefined) ?
      Number(config_obj.min_inhabitant_threshold) : 1;
    let region_name_to_meta = {};
    let snapshot_cities_obj = {};
    let snapshot_years_array = config_obj.time_domains.snapshot_years;

    for (let i = 0; i < config_obj.regions.length; i++)
      region_name_to_meta[config_obj.regions[i].name] = config_obj.regions[i];
    for (let i = 0; i < snapshot_years_array.length; i++)
      snapshot_cities_obj[String(snapshot_years_array[i])] = [];

    for (let i = 0; i < all_stad_ghsl_keys.length; i++) {
      let local_full_key = all_stad_ghsl_keys[i];
      let local_city = stad_ghsl_obj[local_full_key];
      let local_is_ghsl = local_full_key.startsWith("ghsl-");
      let local_is_stad = local_full_key.startsWith("stadester-");
      let local_raw_key = local_full_key.replace(/^(stadester-|ghsl-)/, "");

      if (!local_city || !Array.isArray(local_city.coords) || local_city.coords.length < 2) continue;
      let local_lat = Number(local_city.coords[0]);
      let local_lon = Number(local_city.coords[1]);
      if (!Number.isFinite(local_lat) || !Number.isFinite(local_lon)) continue;

      if (local_city.population && typeof local_city.population === "object") {
        for (let x = 0; x < snapshot_years_array.length; x++) {
          let local_snap_yr = snapshot_years_array[x];
          let local_valid_src = (local_snap_yr < splice_year) ? local_is_stad : local_is_ghsl;
          if (local_valid_src) {
            let local_snap_val = Number(local_city.population[String(local_snap_yr)]);
            if (Number.isFinite(local_snap_val) && local_snap_val >= min_pop_threshold) {
              snapshot_cities_obj[String(local_snap_yr)].push([
                Number(local_lon.toFixed(4)),
                Number(local_lat.toFixed(4)),
                Math.round(local_snap_val)
              ]);
            }
          }
        }
      }

      let local_reg_meta = (local_city.region && region_name_to_meta[local_city.region]) ?
        region_name_to_meta[local_city.region] :
        CityDatasetCompiler.classifyLatLonRegion(region_lookup, local_lat, local_lon);

      let local_base_entry = {
        colour: local_reg_meta.rgb,
        coords: [local_lat, local_lon],
        hex: local_reg_meta.hex,
        key: local_full_key,
        name: (local_city.name) ? String(local_city.name) : local_raw_key.split("-")[0],
        region: local_reg_meta.name,
        region_id: local_reg_meta.id
      };

      let local_max_area = CityDatasetCompiler.extractMaxFieldValue(local_city.area, min_year, max_year);
      let local_max_pop = CityDatasetCompiler.extractMaxFieldValue(local_city.population, min_year, max_year);

      if (local_max_area > 0)
        area_candidates_array.push(Object.assign({ value: local_max_area }, local_base_entry));
      if (local_max_pop > 0)
        pop_candidates_array.push(Object.assign({ value: local_max_pop }, local_base_entry));

      if (local_is_stad) {
        let local_metro_src = metro_obj[local_raw_key];
        let local_centre_dens_obj = (local_metro_src && local_metro_src.centre_density) ?
          local_metro_src.centre_density :
          local_city.density;
        let local_max_dens = CityDatasetCompiler.extractMaxFieldValue(local_centre_dens_obj, min_year, splice_year - 1);
        if (local_max_dens > 0)
          density_base_candidates_array.push(Object.assign({ value: local_max_dens }, local_base_entry));
      } else if (local_is_ghsl) {
        let local_max_dens_ghsl = CityDatasetCompiler.extractMaxFieldValue(local_city.density, splice_year, max_year);
        if (local_max_dens_ghsl > 0)
          density_ghsl_candidates_array.push(Object.assign({ value: local_max_dens_ghsl }, local_base_entry));
      }
    }

    area_candidates_array.sort((a, b) => b.value - a.value);
    density_base_candidates_array.sort((a, b) => b.value - a.value);
    density_ghsl_candidates_array.sort((a, b) => b.value - a.value);
    pop_candidates_array.sort((a, b) => b.value - a.value);

    //Compile Global 30 Metro-Adjusted vs Non-Metro-Adjusted time series
    console.log("[1.compiler/A] Compiling Global 30 Metro vs Non-Metro series...");
    let global_30_compiled_obj = {};
    for (let i = 0; i < config_obj.global_30.length; i++) {
      let local_def = config_obj.global_30[i];
      let local_ghsl_city = CityDatasetCompiler.findCityEntry(ghsl_obj, local_def.ghsl_key, local_def);
      let local_metro_city = CityDatasetCompiler.findCityEntry(metro_obj, local_def.stadester_key, local_def);
      let local_non_metro_target_key = (local_def.non_metro_key) ? local_def.non_metro_key : local_def.stadester_key;
      let local_non_metro_city = CityDatasetCompiler.findCityEntry(non_metro_obj, local_non_metro_target_key, local_def);

      let local_ghsl_pop = (local_ghsl_city) ?
        CityDatasetCompiler.extractValidYearMap(local_ghsl_city.population, splice_year, max_year) : {};
      let local_metro_base_pop = (local_metro_city) ?
        CityDatasetCompiler.extractValidYearMap(local_metro_city.population, min_year, splice_year - 1) : {};
      let local_metro_base_full = (local_metro_city) ?
        CityDatasetCompiler.extractValidYearMap(local_metro_city.population, min_year, max_year) : {};
      let local_non_metro_base_pop = (local_non_metro_city) ?
        CityDatasetCompiler.extractValidYearMap(local_non_metro_city.population, min_year, splice_year - 1) : {};

      let local_metro_spliced = Object.assign({}, local_metro_base_pop, local_ghsl_pop);
      let local_non_metro_spliced = Object.assign({}, local_non_metro_base_pop, local_ghsl_pop);

      //Ensure year 1 fallback to year 0 (since Stadestér rasters/series encode 1AD as key "0")
      if (local_metro_spliced["1"] === undefined && local_metro_spliced["0"] !== undefined)
        local_metro_spliced["1"] = local_metro_spliced["0"];
      if (local_non_metro_spliced["1"] === undefined && local_non_metro_spliced["0"] !== undefined)
        local_non_metro_spliced["1"] = local_non_metro_spliced["0"];

      global_30_compiled_obj[local_def.id] = {
        ghsl_matched: Boolean(local_ghsl_city),
        id: local_def.id,
        lat: local_def.lat,
        lon: local_def.lon,
        metro_adjusted_population: local_metro_spliced,
        metro_base_full_population: local_metro_base_full,
        metro_matched: Boolean(local_metro_city),
        name: local_def.name,
        non_metro_adjusted_population: local_non_metro_spliced,
        non_metro_matched: Boolean(local_non_metro_city)
      };
    }

    let output_obj = {
      global_30_series: global_30_compiled_obj,
      summary: {
        base_population_records: base_population_records,
        cities_with_radial_buffers: cities_with_radial_buffers,
        ghsl_population_records: ghsl_population_records,
        total_base_metro_cities: all_metro_keys.length,
        total_base_non_metro_cities: all_non_metro_keys.length,
        total_ghsl_cities: all_ghsl_keys.length,
        total_population_records: base_population_records + ghsl_population_records,
        total_stadester_ghsl_cities: all_stad_ghsl_keys.length
      },
      top_120: {
        area: area_candidates_array.slice(0, 120),
        density: density_base_candidates_array.slice(0, 120),
        density_ghsl: density_ghsl_candidates_array.slice(0, 120),
        population: pop_candidates_array.slice(0, 120)
      },
      version_label: config_obj.version_label
    };

    for (let i = 0; i < snapshot_years_array.length; i++) {
      let local_ys = String(snapshot_years_array[i]);
      snapshot_cities_obj[local_ys].sort((a, b) => a[2] - b[2]);
    }

    let out_file = path.join(compiled_dir, "city_datasets_compiled.json");
    let out_snap_cities_file = path.join(compiled_dir, "urban_city_snapshots.json");
    BenchmarkIO.saveJSON(out_file, output_obj);
    BenchmarkIO.saveJSON(out_snap_cities_file, snapshot_cities_obj, { compact: true });
    console.log(`[1.compiler/A] Saved ${out_file} and ${out_snap_cities_file} (${output_obj.summary.total_stadester_ghsl_cities} combined cities, ${output_obj.summary.total_population_records} pop records).`);

    //Return statement
    return output_obj;
  },


  /**
   * Computes the maximum numeric value across valid integer years in [arg1_min_year, arg2_max_year].
   *
   * @param {Object} arg0_year_obj
   * @param {number} arg1_min_year
   * @param {number} arg2_max_year
   *
   * @returns {number}
   */
  extractMaxFieldValue: function (arg0_year_obj, arg1_min_year, arg2_max_year) {
    //Convert from parameters
    let year_obj = arg0_year_obj;
    let min_year = arg1_min_year;
    let max_year = arg2_max_year;

    //Declare local instance variables.
    let max_val = 0;

    if (!year_obj || typeof year_obj !== "object")
      return 0;


    let all_keys = Object.keys(year_obj);
    for (let i = 0; i < all_keys.length; i++) {
      let local_yr = Number(all_keys[i]);
      if (Number.isInteger(local_yr) && local_yr >= min_year && local_yr <= max_year) {
        let local_val = Number(year_obj[all_keys[i]]);
        if (Number.isFinite(local_val) && local_val > max_val)
          max_val = local_val;
      }
    }

    //Return statement
    return max_val;
  },


  /**
   * Extracts a clean dictionary of integer years in [arg1_min_year, arg2_max_year] mapped to finite numbers.
   *
   * @param {Object} arg0_year_obj
   * @param {number} arg1_min_year
   * @param {number} arg2_max_year
   *
   * @returns {Object}
   */
  extractValidYearMap: function (arg0_year_obj, arg1_min_year, arg2_max_year) {
    //Convert from parameters
    let year_obj = arg0_year_obj;
    let min_year = arg1_min_year;
    let max_year = arg2_max_year;

    //Declare local instance variables.
    let clean_obj = {};

    if (!year_obj || typeof year_obj !== "object")
      return clean_obj;


    let all_keys = Object.keys(year_obj);
    for (let i = 0; i < all_keys.length; i++) {
      let local_yr = Number(all_keys[i]);
      if (Number.isInteger(local_yr) && local_yr >= min_year && local_yr <= max_year) {
        let local_val = Number(year_obj[all_keys[i]]);
        if (Number.isFinite(local_val))
          clean_obj[String(local_yr)] = local_val;
      }
    }

    //Return statement
    return clean_obj;
  },


  /**
   * Finds a city entry by key with resilient fallback for replacement-character encoding and coordinate proximity.
   *
   * @param {Object} arg0_dict_obj
   * @param {string} arg1_target_key
   * @param {Object} [arg2_city_def]
   *
   * @returns {Object|null}
   */
  findCityEntry: function (arg0_dict_obj, arg1_target_key, arg2_city_def) {
    //Convert from parameters
    let dict_obj = arg0_dict_obj;
    let target_key = arg1_target_key;
    let city_def = (arg2_city_def) ? arg2_city_def : null;

    if (!dict_obj || !target_key)
      return null;
    if (dict_obj[target_key])
      return dict_obj[target_key];


    let stripped_key = target_key.replace(/^(stadester-|ghsl-)/, "");
    if (dict_obj[stripped_key])
      return dict_obj[stripped_key];

    //Fallback regex matching \ufffd wildcards against accented UTF-8 keys
    let escaped_pattern = stripped_key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\ufffd/g, ".{1,2}");
    let fallback_regex = new RegExp(`^${escaped_pattern}$`);
    let all_keys = Object.keys(dict_obj);

    for (let i = 0; i < all_keys.length; i++)
      if (fallback_regex.test(all_keys[i])) return dict_obj[all_keys[i]];

    //Coordinate-proximity fallback within 50 km for cross-version resilience
    if (city_def && Number.isFinite(city_def.lat) && Number.isFinite(city_def.lon)) {
      let best_entry = null;
      let best_score = -1;

      for (let i = 0; i < all_keys.length; i++) {
        let local_cand = dict_obj[all_keys[i]];
        if (!local_cand || !Array.isArray(local_cand.coords) || local_cand.coords.length < 2) continue;
        let local_dist = BenchmarkIO.calculateGeodesicKm(
          city_def.lat,
          city_def.lon,
          local_cand.coords[0],
          local_cand.coords[1]
        );
        if (local_dist <= 50) {
          let local_max_p = CityDatasetCompiler.extractMaxFieldValue(local_cand.population, -3000, 2025);
          let local_score = local_max_p/(1.0 + local_dist*0.05);
          if (local_score > best_score) {
            best_score = local_score;
            best_entry = local_cand;
          }
        }
      }
      if (best_entry)
        return best_entry;
    }

    console.error(`CityDatasetCompiler.findCityEntry: Could not resolve key ${target_key}`);

    //Return statement
    return null;
  }
};

if (require.main === module) {
  let config_obj = BenchmarkIO.loadConfig();
  CityDatasetCompiler.compileCityDatasets(config_obj);
}

module.exports = global.CityDatasetCompiler;
