//Import dependencies
let fs = require("fs");
let path = require("path");
let BenchmarkIO = require("../1.compiler/io_helpers.js");

//Initialise namespace
global.MesoValidation = {
  /**
   * Computes exact 30-arcsec (329x329) spatial Jaccard index between a 40x40 Stadestér pixel set and Angel's study-window mask.
   *
   * @param {Array<Object>} arg0_pixels
   * @param {Object} arg1_angel_png
   * @param {number} arg2_tile_row
   * @param {number} arg3_tile_col
   *
   * @returns {Object}
   */
  computeAngelTileJaccard: function (arg0_pixels, arg1_angel_png, arg2_tile_row, arg3_tile_col) {
    //Convert from parameters
    let pixels_array = arg0_pixels;
    let angel_png = arg1_angel_png;
    let tile_row = arg2_tile_row;
    let tile_col = arg3_tile_col;

    //Declare local instance variables.
    let angel_urban_px = 0;
    let grid_dim = 40;
    let intersection_px = 0;
    let stad_clipped_px = 0;
    let stad_grid = new Uint8Array(329*329);
    let tile_size = 329;
    let union_px = 0;
    let window_px = 0;

    if (!angel_png) {
      return {
        angel_urban_px: 0,
        intersection_px: 0,
        jaccard: 0,
        stad_clipped_px: 0,
        union_px: 0,
        window_px: 0
      };
    }


    for (let i = 0; i < pixels_array.length; i++) {
      let local_p = pixels_array[i];
      if (!local_p || local_p.max_population <= 0) continue;

      let local_gx = local_p.gx;
      let local_gy = local_p.gy;
      if (local_gx < 0 || local_gx >= grid_dim || local_gy < 0 || local_gy >= grid_dim) continue;

      let local_tx0 = Math.round((local_gx*tile_size)/grid_dim);
      let local_tx1 = Math.round(((local_gx + 1)*tile_size)/grid_dim);
      let local_ty0 = Math.round((local_gy*tile_size)/grid_dim);
      let local_ty1 = Math.round(((local_gy + 1)*tile_size)/grid_dim);

      for (let x = local_tx0; x < local_tx1; x++) {
        for (let y = local_ty0; y < local_ty1; y++)
          stad_grid[y*tile_size + x] = 1;
      }
    }

    for (let x = 0; x < tile_size; x++) {
      for (let y = 0; y < tile_size; y++) {
        let local_ax = tile_col*tile_size + x;
        let local_ay = tile_row*tile_size + y;
        let local_off = (local_ay*angel_png.width + local_ax)*4;
        let local_alpha = angel_png.rgba[local_off + 3];

        if (local_alpha > 0) {
          window_px++;
          let local_is_angel = (local_alpha >= 200);
          let local_is_stad = (stad_grid[y*tile_size + x] === 1);

          if (local_is_angel) angel_urban_px++;
          if (local_is_stad) stad_clipped_px++;
          if (local_is_angel && local_is_stad) intersection_px++;
          if (local_is_angel || local_is_stad) union_px++;
        }
      }
    }

    let jaccard_val = (union_px > 0) ? intersection_px/union_px : 0;

    //Return statement
    return {
      angel_urban_px: angel_urban_px,
      intersection_px: intersection_px,
      jaccard: Number(jaccard_val.toFixed(4)),
      stad_clipped_px: stad_clipped_px,
      union_px: union_px,
      window_px: window_px
    };
  },


  /**
   * Computes 5-arcmin gridcell Jaccard similarity between Base and Spliced Stadestér-GHSL 40x40 footprints.
   *
   * @param {Array<Object>} arg0_base_pixels
   * @param {Array<Object>} arg1_spliced_pixels
   *
   * @returns {number}
   */
  computeGridJaccard: function (arg0_base_pixels, arg1_spliced_pixels) {
    //Convert from parameters
    let base_pixels = arg0_base_pixels;
    let spliced_pixels = arg1_spliced_pixels;

    //Declare local instance variables.
    let base_set = new Set();
    let inter_count = 0;
    let spliced_set = new Set();
    let union_set = new Set();

    for (let i = 0; i < base_pixels.length; i++) {
      if (base_pixels[i].max_population > 0) {
        let local_k = `${base_pixels[i].gx},${base_pixels[i].gy}`;
        base_set.add(local_k);
        union_set.add(local_k);
      }
    }

    for (let i = 0; i < spliced_pixels.length; i++) {
      if (spliced_pixels[i].max_population > 0) {
        let local_k = `${spliced_pixels[i].gx},${spliced_pixels[i].gy}`;
        spliced_set.add(local_k);
        union_set.add(local_k);
        if (base_set.has(local_k)) inter_count++;
      }
    }

    //Return statement
    return (union_set.size > 0) ? Number((inter_count/union_set.size).toFixed(4)) : 0;
  },


  /**
   * Formats compiled Global 30 pixel records with exact cell-centre WGS84 coordinates.
   *
   * @param {Array<Object>} arg0_pixels
   * @param {number} arg1_width
   * @param {number} arg2_height
   *
   * @returns {Array<Object>}
   */
  enrichSpacetimePixels: function (arg0_pixels, arg1_width, arg2_height) {
    //Convert from parameters
    let pixels_array = arg0_pixels;
    let width = arg1_width;
    let height = arg2_height;

    //Declare local instance variables.
    let enriched_array = [];

    for (let i = 0; i < pixels_array.length; i++) {
      let local_p = pixels_array[i];
      let local_lon = ((local_p.px + 0.5)/width)*360.0 - 180.0;
      let local_lat = 90.0 - ((local_p.py + 0.5)/height)*180.0;

      enriched_array.push({
        first_year: local_p.first_year,
        gx: local_p.gx,
        gy: local_p.gy,
        last_population: local_p.last_population,
        last_year: local_p.last_year,
        lat: Number(local_lat.toFixed(4)),
        lon: Number(local_lon.toFixed(4)),
        max_population: local_p.max_population
      });
    }

    enriched_array.sort((a, b) => a.max_population - b.max_population);

    //Return statement
    return enriched_array;
  },


  /**
   * Step B: Computes all Meso-Validation benchmarks (12-Region CoGs 1975-2000, Global 30 Spatiotemporal & Angel Jaccard, Top 120 Rankings).
   *
   * @param {Object} arg0_config
   *
   * @returns {Object}
   */
  runMesoValidation: function (arg0_config) {
    //Convert from parameters
    let config_obj = arg0_config;

    //Declare local instance variables.
    let angel_atlas_path = BenchmarkIO.resolveProjectPath(config_obj.paths.angel_global_30_atlas_png);
    let compiled_dir = path.resolve(__dirname, "..", "1.compiler", "compiled");
    let height = config_obj.raster_dimensions.height;
    let reg_years_array = config_obj.time_domains.regional_cog_years;
    let regions_array = config_obj.regions;
    let results_dir = __dirname;
    let width = config_obj.raster_dimensions.width;

    let city_data = JSON.parse(fs.readFileSync(path.join(compiled_dir, "city_datasets_compiled.json"), "utf8"));
    let raster_data = JSON.parse(fs.readFileSync(path.join(compiled_dir, "raster_summaries_compiled.json"), "utf8"));
    let ref_data = JSON.parse(fs.readFileSync(path.join(compiled_dir, "reference_datasets_compiled.json"), "utf8"));

    //1. Regional Centres of Gravity (1975-2000): Stadestér Base vs GHSL (Figures 28, 29, 30)
    console.log("[2.results/B] Computing 12-Region Centres of Gravity (1975-2000)...");
    let longest_geo_list = [];
    let max_km_list = [];
    let mean_km_list = [];
    let mean_pct_list = [];
    let min_km_list = [];
    let pop_sd_km_list = [];
    let pop_sd_pct_list = [];
    let regional_results_array = [];
    let sd_km_list = [];
    let sd_pct_list = [];

    for (let i = 0; i < regions_array.length; i++) {
      let local_reg = regions_array[i];
      let local_base_series = raster_data.regional_cogs.base[local_reg.id] || {};
      let local_ghsl_series = raster_data.regional_cogs.ghsl[local_reg.id] || {};
      let local_annual_array = [];
      let local_dists_array = [];
      let local_max_km = -Infinity;
      let local_max_yr = null;
      let local_min_km = Infinity;
      let local_min_yr = null;

      for (let x = 0; x < reg_years_array.length; x++) {
        let local_yr = reg_years_array[x];
        let local_ys = String(local_yr);
        let local_b = local_base_series[local_ys];
        let local_g = local_ghsl_series[local_ys];

        if (!local_b || !local_g || local_b.lat === null || local_g.lat === null) continue;

        let local_dkm = BenchmarkIO.calculateGeodesicKm(local_b.lat, local_b.lon, local_g.lat, local_g.lon);
        let local_pct = (local_dkm/local_reg.longest_geodesic_km)*100.0;

        local_dists_array.push(local_dkm);
        if (local_dkm < local_min_km) {
          local_min_km = local_dkm;
          local_min_yr = local_yr;
        }
        if (local_dkm > local_max_km) {
          local_max_km = local_dkm;
          local_max_yr = local_yr;
        }

        local_annual_array.push({
          base_lat: Number(local_b.lat.toFixed(5)),
          base_lon: Number(local_b.lon.toFixed(5)),
          base_population: local_b.population,
          distance_km: Number(local_dkm.toFixed(2)),
          ghsl_lat: Number(local_g.lat.toFixed(5)),
          ghsl_lon: Number(local_g.lon.toFixed(5)),
          ghsl_population: local_g.population,
          pct_geodesic: Number(local_pct.toFixed(3)),
          year: local_yr
        });
      }

      let local_mean_km = BenchmarkIO.calculateMean(local_dists_array);
      let local_sd_km = BenchmarkIO.calculateStdDev(local_dists_array, { is_sample: true });
      let local_pop_sd_km = BenchmarkIO.calculateStdDev(local_dists_array, { is_sample: false });
      let local_mean_pct = (local_mean_km/local_reg.longest_geodesic_km)*100.0;
      let local_sd_pct = (local_sd_km/local_reg.longest_geodesic_km)*100.0;
      let local_pop_sd_pct = (local_pop_sd_km/local_reg.longest_geodesic_km)*100.0;

      longest_geo_list.push(local_reg.longest_geodesic_km);
      min_km_list.push((local_dists_array.length > 0) ? local_min_km : 0);
      max_km_list.push((local_dists_array.length > 0) ? local_max_km : 0);
      mean_km_list.push(local_mean_km);
      mean_pct_list.push(local_mean_pct);
      sd_km_list.push(local_sd_km);
      sd_pct_list.push(local_sd_pct);
      pop_sd_km_list.push(local_pop_sd_km);
      pop_sd_pct_list.push(local_pop_sd_pct);

      regional_results_array.push({
        annual_series: local_annual_array,
        hex: local_reg.hex,
        id: local_reg.id,
        longest_geodesic_km: local_reg.longest_geodesic_km,
        max_km: (local_dists_array.length > 0) ? Number(local_max_km.toFixed(2)) : 0,
        max_year: local_max_yr,
        mean_km: Number(local_mean_km.toFixed(2)),
        mean_pct_geodesic: Number(local_mean_pct.toFixed(2)),
        min_km: (local_dists_array.length > 0) ? Number(local_min_km.toFixed(2)) : 0,
        min_year: local_min_yr,
        name: local_reg.name,
        pop_sd_km: Number(local_pop_sd_km.toFixed(2)),
        pop_sd_pct_geodesic: Number(local_pop_sd_pct.toFixed(2)),
        rgb: local_reg.rgb,
        sd_km: Number(local_sd_km.toFixed(2)),
        sd_pct_geodesic: Number(local_sd_pct.toFixed(2))
      });
    }

    let regional_cog_output = {
      regions: regional_results_array,
      stadester_1_0_baselines: config_obj.stadester_1_0_baselines.meso,
      version_label: config_obj.version_label,
      world_average: {
        longest_geodesic_km: Number(BenchmarkIO.calculateMean(longest_geo_list).toFixed(2)),
        max_km: Number(BenchmarkIO.calculateMean(max_km_list).toFixed(2)),
        mean_km: Number(BenchmarkIO.calculateMean(mean_km_list).toFixed(2)),
        mean_pct_geodesic: Number(BenchmarkIO.calculateMean(mean_pct_list).toFixed(2)),
        min_km: Number(BenchmarkIO.calculateMean(min_km_list).toFixed(2)),
        name: "World (Avg.)",
        pop_sd_km: Number(BenchmarkIO.calculateMean(pop_sd_km_list).toFixed(2)),
        pop_sd_pct_geodesic: Number(BenchmarkIO.calculateMean(pop_sd_pct_list).toFixed(2)),
        sd_km: Number(BenchmarkIO.calculateMean(sd_km_list).toFixed(2)),
        sd_pct_geodesic: Number(BenchmarkIO.calculateMean(sd_pct_list).toFixed(2))
      },
      years: reg_years_array
    };

    //2. Global 30 Spatiotemporal Development (1800-2000) & Angel Spatial Jaccard (Figures 31 & 32)
    console.log("[2.results/B] Computing Global 30 Spatiotemporal Footprints & Angel Spatial Jaccard...");
    let angel_png = BenchmarkIO.decodePNG(angel_atlas_path);
    let angel_jaccards_array = [];
    let base_spliced_jaccards_array = [];
    let cities_spatiotemporal_array = [];
    let pooled_base_inter = 0;
    let pooled_base_union = 0;
    let pooled_spliced_inter = 0;
    let pooled_spliced_union = 0;

    let panel_meta_by_id = {};
    if (ref_data.angel_atlas_panels) {
      for (let i = 0; i < ref_data.angel_atlas_panels.length; i++)
        panel_meta_by_id[ref_data.angel_atlas_panels[i].id] = ref_data.angel_atlas_panels[i];
    }

    for (let i = 0; i < config_obj.global_30.length; i++) {
      let local_city = config_obj.global_30[i];
      let local_panel = panel_meta_by_id[local_city.id];
      let local_st = raster_data.global_30_spatiotemporal[local_city.id];
      let local_tile_col = (local_panel) ? local_panel.tile_col : (i%5);
      let local_tile_row = (local_panel) ? local_panel.tile_row : Math.floor(i/5);

      let local_base_j = MesoValidation.computeAngelTileJaccard(
        local_st.base_pixels,
        angel_png,
        local_tile_row,
        local_tile_col
      );
      let local_spliced_j = MesoValidation.computeAngelTileJaccard(
        local_st.spliced_pixels,
        angel_png,
        local_tile_row,
        local_tile_col
      );
      let local_bs_grid_j = MesoValidation.computeGridJaccard(local_st.base_pixels, local_st.spliced_pixels);

      pooled_base_inter += local_base_j.intersection_px;
      pooled_base_union += local_base_j.union_px;
      pooled_spliced_inter += local_spliced_j.intersection_px;
      pooled_spliced_union += local_spliced_j.union_px;

      angel_jaccards_array.push(local_base_j.jaccard);
      base_spliced_jaccards_array.push(local_bs_grid_j);

      let local_box = local_st.box;
      let local_lon_min = (local_box.x0/width)*360.0 - 180.0;
      let local_lon_max = (local_box.x1/width)*360.0 - 180.0;
      let local_lat_max = 90.0 - (local_box.y0/height)*180.0;
      let local_lat_min = 90.0 - (local_box.y1/height)*180.0;

      cities_spatiotemporal_array.push({
        angel_jaccard: local_base_j.jaccard,
        angel_stats: local_base_j,
        base_pixels: MesoValidation.enrichSpacetimePixels(local_st.base_pixels, width, height),
        base_vs_spliced_jaccard: local_bs_grid_j,
        bbox: {
          lat_max: Number(local_lat_max.toFixed(4)),
          lat_min: Number(local_lat_min.toFixed(4)),
          lon_max: Number(local_lon_max.toFixed(4)),
          lon_min: Number(local_lon_min.toFixed(4))
        },
        id: local_city.id,
        lat: local_city.lat,
        lon: local_city.lon,
        name: local_city.name,
        spliced_angel_jaccard: local_spliced_j.jaccard,
        spliced_pixels: MesoValidation.enrichSpacetimePixels(local_st.spliced_pixels, width, height),
        stadester_1_0_jaccard: (local_panel) ? local_panel.stadester_1_0_jaccard : null,
        tile_col: local_tile_col,
        tile_row: local_tile_row
      });
    }

    let pooled_angel_jaccard = (pooled_base_union > 0) ? pooled_base_inter/pooled_base_union : 0;
    let pooled_spliced_jaccard = (pooled_spliced_union > 0) ? pooled_spliced_inter/pooled_spliced_union : 0;

    let spatiotemporal_output = {
      cities: cities_spatiotemporal_array,
      domain_years: [
        config_obj.time_domains.spatiotemporal_min_year,
        config_obj.time_domains.spatiotemporal_max_year
      ],
      summary: {
        mean_angel_jaccard: Number(BenchmarkIO.calculateMean(angel_jaccards_array).toFixed(3)),
        mean_base_vs_spliced_jaccard: Number(BenchmarkIO.calculateMean(base_spliced_jaccards_array).toFixed(3)),
        pooled_angel_jaccard: Number(pooled_angel_jaccard.toFixed(3)),
        pooled_intersection_px: pooled_base_inter,
        pooled_spliced_angel_jaccard: Number(pooled_spliced_jaccard.toFixed(3)),
        pooled_union_px: pooled_base_union,
        sd_angel_jaccard: Number(BenchmarkIO.calculateStdDev(angel_jaccards_array, { is_sample: false }).toFixed(3)),
        stadester_1_0_pooled_jaccard: config_obj.stadester_1_0_baselines.meso.angel_pooled_jaccard
      },
      version_label: config_obj.version_label
    };

    //3. Top 120 Rankings across Area, Density (<1975 Base), Density (>=1975 GHSL), and Population (Figures 33, 34, 35)
    console.log("[2.results/B] Compiling Top 120 Rankings & Regional Counts...");
    let categories_array = ["area", "density", "density_ghsl", "population"];
    let ranked_lists_obj = {};
    let reg_counts_map = {};

    for (let i = 0; i < regions_array.length; i++) {
      let local_r = regions_array[i];
      reg_counts_map[local_r.id] = {
        area: 0,
        density: 0,
        density_ghsl: 0,
        hex: local_r.hex,
        id: local_r.id,
        name: local_r.name,
        population: 0
      };
    }

    for (let i = 0; i < categories_array.length; i++) {
      let local_cat = categories_array[i];
      let local_src_list = city_data.top_120[local_cat] || [];
      let local_ranked_array = [];

      for (let x = 0; x < local_src_list.length; x++) {
        let local_item = local_src_list[x];
        local_ranked_array.push({
          coords: local_item.coords,
          hex: local_item.hex,
          key: local_item.key,
          lat: local_item.coords[0],
          lon: local_item.coords[1],
          name: local_item.name,
          rank: x + 1,
          region: local_item.region,
          region_id: local_item.region_id,
          value: Number(local_item.value.toFixed(2))
        });

        if (reg_counts_map[local_item.region_id])
          reg_counts_map[local_item.region_id][local_cat]++;
      }
      ranked_lists_obj[local_cat] = local_ranked_array;
    }

    let reg_counts_array = [];
    for (let i = 0; i < regions_array.length; i++)
      reg_counts_array.push(reg_counts_map[regions_array[i].id]);

    let top_120_output = {
      rankings: ranked_lists_obj,
      regional_counts: reg_counts_array,
      units: {
        area: "km^2",
        density: "inhabitants/ha (<1975 Stadestér Base)",
        density_ghsl: "inhabitants/km^2 (>=1975 GHSL)",
        population: "inhabitants"
      },
      version_label: config_obj.version_label
    };

    BenchmarkIO.saveJSON(path.join(results_dir, "meso_regional_cogs.json"), regional_cog_output);
    BenchmarkIO.saveJSON(path.join(results_dir, "meso_global_30_spatiotemporal.json"), spatiotemporal_output);
    BenchmarkIO.saveJSON(path.join(results_dir, "meso_top_120_rankings.json"), top_120_output);
    console.log("[2.results/B] Saved meso_regional_cogs.json, meso_global_30_spatiotemporal.json, meso_top_120_rankings.json.");

    //Return statement
    return {
      global_30_spatiotemporal: spatiotemporal_output,
      regional_cogs: regional_cog_output,
      top_120_rankings: top_120_output
    };
  }
};

if (require.main === module) {
  let config_obj = BenchmarkIO.loadConfig();
  MesoValidation.runMesoValidation(config_obj);
}

module.exports = global.MesoValidation;

