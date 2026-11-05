//Import dependencies
let fs = require("fs");
let path = require("path");
let BenchmarkIO = require("./io_helpers.js");

//Initialise namespace
global.RasterSummaryCompiler = {
  /**
   * Builds a 4320x2160 Int8Array region map with multi-source BFS coastal Voronoi dilation.
   *
   * @param {Object} arg0_config
   *
   * @returns {Int8Array}
   */
  buildDilatedRegionGrid: function (arg0_config) {
    //Convert from parameters
    let config_obj = arg0_config;

    //Declare local instance variables.
    let height = config_obj.raster_dimensions.height;
    let png_rel_path = (config_obj.paths.voronoi_regions_png) ?
      config_obj.paths.voronoi_regions_png :
      config_obj.paths.regional_subdivisions_png;
    let png_path = BenchmarkIO.resolveProjectPath(png_rel_path);
    let region_png = BenchmarkIO.decodePNG(png_path);
    let regions_array = config_obj.regions;
    let rgb_to_idx_obj = {};
    let width = config_obj.raster_dimensions.width;

    let total_pixels = width*height;
    let region_grid = new Int8Array(total_pixels);
    region_grid.fill(-1);

    if (!region_png) {
      console.error("RasterSummaryCompiler.buildDilatedRegionGrid: Missing regional subdivisions PNG.");
      return region_grid;
    }


    for (let i = 0; i < regions_array.length; i++) {
      let local_rgb = regions_array[i].rgb;
      rgb_to_idx_obj[`${local_rgb[0]},${local_rgb[1]},${local_rgb[2]}`] = i;
    }

    let queue_indices = new Int32Array(total_pixels);
    let queue_head = 0;
    let queue_tail = 0;

    for (let i = 0; i < total_pixels; i++) {
      let local_off = i*4;
      let local_key = `${region_png.rgba[local_off]},${region_png.rgba[local_off + 1]},${region_png.rgba[local_off + 2]}`;
      let local_reg = rgb_to_idx_obj[local_key];

      if (local_reg !== undefined) {
        region_grid[i] = local_reg;
        queue_indices[queue_tail] = i;
        queue_tail++;
      }
    }

    //Multi-source 4-neighbour BFS expansion up to 18 pixels from land to capture coastal & island gridcells
    let dist_grid = new Uint8Array(total_pixels);
    let dx_array = [-1, 1, 0, 0];
    let dy_array = [0, 0, -1, 1];

    for (let i = 0; i < total_pixels; i++) {
      if (queue_head >= queue_tail) break;
      let local_curr = queue_indices[queue_head];
      queue_head++;

      let local_dist = dist_grid[local_curr];
      if (local_dist >= 18) continue;

      let local_cx = local_curr%width;
      let local_cy = Math.floor(local_curr/width);
      let local_reg = region_grid[local_curr];

      for (let x = 0; x < 4; x++) {
        let local_ny = local_cy + dy_array[x];
        if (local_ny < 0 || local_ny >= height) continue;
        let local_nx = (local_cx + dx_array[x] + width)%width;
        let local_nidx = local_ny*width + local_nx;

        if (region_grid[local_nidx] === -1) {
          region_grid[local_nidx] = local_reg;
          dist_grid[local_nidx] = local_dist + 1;
          queue_indices[queue_tail] = local_nidx;
          queue_tail++;
        }
      }
    }

    //Return statement
    return region_grid;
  },


  /**
   * Step B: Streams Stadestér Base, GHSL, and Rural GeoPNG rasters into compiled summary JSON artefacts.
   *
   * @param {Object} arg0_config
   *
   * @returns {Object}
   */
  compileRasterSummaries: function (arg0_config) {
    //Convert from parameters
    let config_obj = arg0_config;

    //Declare local instance variables.
    let base_dir = BenchmarkIO.resolveProjectPath(config_obj.paths.stadester_base_rasters_dir);
    let box_half = config_obj.time_domains.spatiotemporal_box_half_px;
    let compiled_dir = path.resolve(__dirname, "compiled");
    let ghsl_dir = BenchmarkIO.resolveProjectPath(config_obj.paths.ghsl_urban_rasters_dir);
    let height = config_obj.raster_dimensions.height;
    let max_year = config_obj.time_domains.max_year;
    let min_year = config_obj.time_domains.min_year;
    let region_grid = RasterSummaryCompiler.buildDilatedRegionGrid(config_obj);
    let regions_array = config_obj.regions;
    let rural_dir = BenchmarkIO.resolveProjectPath(config_obj.paths.stadester_rural_rasters_dir);
    let snapshot_set = new Set(config_obj.time_domains.snapshot_years);
    let splice_year = config_obj.time_domains.ghsl_splice_year;
    let st_max_yr = config_obj.time_domains.spatiotemporal_max_year;
    let st_min_yr = config_obj.time_domains.spatiotemporal_min_year;
    let width = config_obj.raster_dimensions.width;

    let base_years_array = RasterSummaryCompiler.listRasterYears(
      base_dir,
      config_obj.paths.stadester_base_raster_prefix,
      min_year,
      max_year
    );
    let ghsl_years_array = RasterSummaryCompiler.listRasterYears(
      ghsl_dir,
      config_obj.paths.ghsl_urban_raster_prefix,
      splice_year,
      max_year
    );
    let rural_years_array = RasterSummaryCompiler.listRasterYears(
      rural_dir,
      config_obj.paths.stadester_rural_raster_prefix,
      min_year,
      max_year
    );

    console.log(`[1.compiler/B] Found ${base_years_array.length} Base rasters, ${ghsl_years_array.length} GHSL rasters, ${rural_years_array.length} Rural rasters.`);

    //Precompute Global 30 40x40 bounding boxes and pixel accumulators
    let city_boxes_array = [];
    let g30_base_pixels_obj = {};
    let g30_spliced_pixels_obj = {};

    for (let i = 0; i < config_obj.global_30.length; i++) {
      let local_city = config_obj.global_30[i];
      let local_pt = BenchmarkIO.latLonToPixel(local_city.lat, local_city.lon, width, height);
      let local_x0 = Math.max(0, local_pt.x - box_half);
      let local_x1 = Math.min(width, local_pt.x + box_half);
      let local_y0 = Math.max(0, local_pt.y - box_half);
      let local_y1 = Math.min(height, local_pt.y + box_half);

      city_boxes_array.push({
        center_x: local_pt.x,
        center_y: local_pt.y,
        id: local_city.id,
        lat: local_city.lat,
        lon: local_city.lon,
        name: local_city.name,
        x0: local_x0,
        x1: local_x1,
        y0: local_y0,
        y1: local_y1
      });
      g30_base_pixels_obj[local_city.id] = {};
      g30_spliced_pixels_obj[local_city.id] = {};
    }

    let base_global_cog_obj = {};
    let base_regional_cog_obj = {};
    let base_regional_urban_obj = {};
    let ghsl_global_cog_obj = {};
    let ghsl_regional_cog_obj = {};
    let ghsl_regional_urban_obj = {};
    let snapshots_obj = {};

    for (let i = 0; i < regions_array.length; i++) {
      base_regional_cog_obj[regions_array[i].id] = {};
      ghsl_regional_cog_obj[regions_array[i].id] = {};
    }

    //1. Stream Stadestér Base rasters
    console.log("[1.compiler/B] Streaming Stadestér Base rasters...");
    for (let i = 0; i < base_years_array.length; i++) {
      let local_yr = base_years_array[i];
      let local_path = path.join(base_dir, `${config_obj.paths.stadester_base_raster_prefix}${local_yr}.png`);
      let local_raster = BenchmarkIO.decodeNumberRaster(local_path, config_obj.paths.stadester_base_raster_encoding);
      if (!local_raster) continue;

      let local_stats = RasterSummaryCompiler.summariseUrbanRaster(
        local_raster.values,
        width,
        height,
        region_grid,
        regions_array.length
      );

      base_global_cog_obj[String(local_yr)] = local_stats.global;
      base_regional_urban_obj[String(local_yr)] = local_stats.regional_totals;

      for (let x = 0; x < regions_array.length; x++) {
        let local_reg_id = regions_array[x].id;
        base_regional_cog_obj[local_reg_id][String(local_yr)] = local_stats.regional_cogs[x];
      }

      if (local_yr >= st_min_yr && local_yr <= st_max_yr) {
        RasterSummaryCompiler.updateGlobal30Boxes(
          local_raster.values,
          width,
          local_yr,
          city_boxes_array,
          g30_base_pixels_obj
        );
        if (local_yr < splice_year) {
          RasterSummaryCompiler.updateGlobal30Boxes(
            local_raster.values,
            width,
            local_yr,
            city_boxes_array,
            g30_spliced_pixels_obj
          );
        }
      }

      if (snapshot_set.has(local_yr) && local_yr < splice_year) {
        snapshots_obj[String(local_yr)] = RasterSummaryCompiler.extractNonZeroGridcells(
          local_raster.values,
          width,
          height
        );
      }
    }

    //2. Stream GHSL Urban rasters (1975-2025)
    console.log("[1.compiler/B] Streaming GHSL Urban rasters (1975-2025)...");
    for (let i = 0; i < ghsl_years_array.length; i++) {
      let local_yr = ghsl_years_array[i];
      let local_path = path.join(ghsl_dir, `${config_obj.paths.ghsl_urban_raster_prefix}${local_yr}.png`);
      let local_raster = BenchmarkIO.decodeNumberRaster(local_path, config_obj.paths.ghsl_urban_raster_encoding);
      if (!local_raster) continue;

      let local_stats = RasterSummaryCompiler.summariseUrbanRaster(
        local_raster.values,
        width,
        height,
        region_grid,
        regions_array.length
      );

      ghsl_global_cog_obj[String(local_yr)] = local_stats.global;
      ghsl_regional_urban_obj[String(local_yr)] = local_stats.regional_totals;

      for (let x = 0; x < regions_array.length; x++) {
        let local_reg_id = regions_array[x].id;
        ghsl_regional_cog_obj[local_reg_id][String(local_yr)] = local_stats.regional_cogs[x];
      }

      if (local_yr >= splice_year && local_yr <= st_max_yr) {
        RasterSummaryCompiler.updateGlobal30Boxes(
          local_raster.values,
          width,
          local_yr,
          city_boxes_array,
          g30_spliced_pixels_obj
        );
      }

      if (snapshot_set.has(local_yr) && local_yr >= splice_year) {
        snapshots_obj[String(local_yr)] = RasterSummaryCompiler.extractNonZeroGridcells(
          local_raster.values,
          width,
          height
        );
      }
    }

    //3. Stream Stadestér Rural rasters for regional & world urbanisation shares
    console.log("[1.compiler/B] Streaming Stadestér Rural rasters (-3000 to 2025)...");
    let regional_urbanisation_series_array = [];
    let spliced_global_cog_obj = {};

    for (let i = 0; i < base_years_array.length; i++) {
      let local_yr = base_years_array[i];
      let local_ys = String(local_yr);
      if (local_yr < splice_year) {
        spliced_global_cog_obj[local_ys] = base_global_cog_obj[local_ys];
      } else if (ghsl_global_cog_obj[local_ys]) {
        spliced_global_cog_obj[local_ys] = ghsl_global_cog_obj[local_ys];
      }
    }

    for (let i = 0; i < rural_years_array.length; i++) {
      let local_yr = rural_years_array[i];
      let local_ys = String(local_yr);
      let local_path = path.join(rural_dir, `${config_obj.paths.stadester_rural_raster_prefix}${local_yr}.png`);
      let local_raster = BenchmarkIO.decodeNumberRaster(local_path, config_obj.paths.stadester_rural_raster_encoding);
      if (!local_raster) continue;

      let local_rural_reg = new Float64Array(regions_array.length);
      let local_world_rural = 0;
      let local_vals = local_raster.values;

      for (let x = 0; x < local_vals.length; x++) {
        let local_v = local_vals[x];
        if (local_v > 0) {
          local_world_rural += local_v;
          let local_r = region_grid[x];
          if (local_r >= 0) local_rural_reg[local_r] += local_v;
        }
      }

      let local_urban_spliced = (local_yr < splice_year) ?
        base_regional_urban_obj[local_ys] :
        ghsl_regional_urban_obj[local_ys];
      let local_urban_base_only = base_regional_urban_obj[local_ys];

      let local_world_urban_spliced = 0;
      let local_world_urban_base = 0;

      for (let x = 0; x < regions_array.length; x++) {
        let local_u_sp = (local_urban_spliced) ? local_urban_spliced[x] : 0;
        let local_u_bs = (local_urban_base_only) ? local_urban_base_only[x] : 0;
        let local_r_val = local_rural_reg[x];
        let local_tot_sp = local_r_val + local_u_sp;

        local_world_urban_spliced += local_u_sp;
        local_world_urban_base += local_u_bs;

        regional_urbanisation_series_array.push({
          region: regions_array[x].id,
          region_name: regions_array[x].name,
          rural_population: Math.round(local_r_val),
          rural_share: (local_tot_sp > 0) ? local_r_val/local_tot_sp : 0,
          total_population: Math.round(local_tot_sp),
          urban_population: Math.round(local_u_sp),
          urban_population_base_only: Math.round(local_u_bs),
          urban_share: (local_tot_sp > 0) ? local_u_sp/local_tot_sp : 0,
          year: local_yr
        });
      }

      let local_world_tot = local_world_rural + local_world_urban_spliced;
      regional_urbanisation_series_array.push({
        region: "world",
        region_name: "World",
        rural_population: Math.round(local_world_rural),
        rural_share: (local_world_tot > 0) ? local_world_rural/local_world_tot : 0,
        total_population: Math.round(local_world_tot),
        urban_population: Math.round(local_world_urban_spliced),
        urban_population_base_only: Math.round(local_world_urban_base),
        urban_share: (local_world_tot > 0) ? local_world_urban_spliced/local_world_tot : 0,
        year: local_yr
      });
    }

    //Serialise Global 30 pixel dictionaries into clean arrays
    let g30_spatiotemporal_out = {};
    for (let i = 0; i < city_boxes_array.length; i++) {
      let local_box = city_boxes_array[i];
      g30_spatiotemporal_out[local_box.id] = {
        base_pixels: Object.values(g30_base_pixels_obj[local_box.id]),
        box: local_box,
        spliced_pixels: Object.values(g30_spliced_pixels_obj[local_box.id])
      };
    }

    let summary_out = {
      available_years: {
        base: base_years_array,
        ghsl: ghsl_years_array,
        rural: rural_years_array
      },
      global_30_spatiotemporal: g30_spatiotemporal_out,
      global_cogs: {
        base: base_global_cog_obj,
        ghsl: ghsl_global_cog_obj,
        stadester_ghsl: spliced_global_cog_obj
      },
      regional_cogs: {
        base: base_regional_cog_obj,
        ghsl: ghsl_regional_cog_obj
      },
      regional_urbanisation: regional_urbanisation_series_array,
      version_label: config_obj.version_label
    };

    let out_summary_path = path.join(compiled_dir, "raster_summaries_compiled.json");
    let out_snapshots_path = path.join(compiled_dir, "urban_gridcell_snapshots.json");
    BenchmarkIO.saveJSON(out_summary_path, summary_out);
    BenchmarkIO.saveJSON(out_snapshots_path, snapshots_obj, { compact: true });
    console.log(`[1.compiler/B] Saved ${out_summary_path} and ${out_snapshots_path}.`);

    //Return statement
    return summary_out;
  },


  /**
   * Extracts sorted non-zero gridcells [lon, lat, pop] for global heatmap visualisations.
   *
   * @param {Float64Array} arg0_values
   * @param {number} arg1_width
   * @param {number} arg2_height
   *
   * @returns {Array<number[]>}
   */
  extractNonZeroGridcells: function (arg0_values, arg1_width, arg2_height) {
    //Convert from parameters
    let values_array = arg0_values;
    let width = arg1_width;
    let height = arg2_height;

    //Declare local instance variables.
    let cells_array = [];

    for (let i = 0; i < values_array.length; i++) {
      let local_v = values_array[i];
      if (local_v > 0) {
        let local_px = i%width;
        let local_py = Math.floor(i/width);
        let local_lon = ((local_px + 0.5)/width)*360.0 - 180.0;
        let local_lat = 90.0 - ((local_py + 0.5)/height)*180.0;
        cells_array.push([
          Number(local_lon.toFixed(4)),
          Number(local_lat.toFixed(4)),
          Math.round(local_v)
        ]);
      }
    }

    cells_array.sort((a, b) => a[2] - b[2]);

    //Return statement
    return cells_array;
  },


  /**
   * Lists sorted integer years available in a raster directory matching a filename prefix.
   *
   * @param {string} arg0_dir_path
   * @param {string} arg1_prefix
   * @param {number} arg2_min_year
   * @param {number} arg3_max_year
   *
   * @returns {number[]}
   */
  listRasterYears: function (arg0_dir_path, arg1_prefix, arg2_min_year, arg3_max_year) {
    //Convert from parameters
    let dir_path = arg0_dir_path;
    let prefix = arg1_prefix;
    let min_year = arg2_min_year;
    let max_year = arg3_max_year;

    //Declare local instance variables.
    let years_array = [];

    if (!fs.existsSync(dir_path)) {
      console.error(`RasterSummaryCompiler.listRasterYears: Missing folder ${dir_path}`);
      return years_array;
    }


    let all_files = fs.readdirSync(dir_path);
    let escaped_prefix = prefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    let matcher = new RegExp(`^${escaped_prefix}(-?\\d+)\\.png$`, "i");

    for (let i = 0; i < all_files.length; i++) {
      let local_match = all_files[i].match(matcher);
      if (local_match) {
        let local_yr = Number(local_match[1]);
        if (Number.isInteger(local_yr) && local_yr >= min_year && local_yr <= max_year)
          years_array.push(local_yr);
      }
    }

    years_array.sort((a, b) => a - b);

    //Return statement
    return years_array;
  },


  /**
   * Computes global & regional Centres of Gravity and population totals from a single raster array.
   *
   * @param {Float64Array} arg0_values
   * @param {number} arg1_width
   * @param {number} arg2_height
   * @param {Int8Array} arg3_region_grid
   * @param {number} arg4_region_count
   *
   * @returns {Object}
   */
  summariseUrbanRaster: function (arg0_values, arg1_width, arg2_height, arg3_region_grid, arg4_region_count) {
    //Convert from parameters
    let values_array = arg0_values;
    let width = arg1_width;
    let height = arg2_height;
    let region_grid = arg3_region_grid;
    let region_count = arg4_region_count;

    //Declare local instance variables.
    let global_pop = 0;
    let global_px_count = 0;
    let global_wx = 0;
    let global_wy = 0;
    let reg_pop = new Float64Array(region_count);
    let reg_px = new Int32Array(region_count);
    let reg_wx = new Float64Array(region_count);
    let reg_wy = new Float64Array(region_count);

    for (let i = 0; i < values_array.length; i++) {
      let local_v = values_array[i];
      if (local_v > 0) {
        let local_px = i%width;
        let local_py = Math.floor(i/width);

        global_pop += local_v;
        global_px_count++;
        global_wx += local_px*local_v;
        global_wy += local_py*local_v;

        let local_r = region_grid[i];
        if (local_r >= 0) {
          reg_pop[local_r] += local_v;
          reg_px[local_r]++;
          reg_wx[local_r] += local_px*local_v;
          reg_wy[local_r] += local_py*local_v;
        }
      }
    }

    let global_cog = null;
    if (global_pop > 0) {
      let local_mx = global_wx/global_pop;
      let local_my = global_wy/global_pop;
      let local_ll = BenchmarkIO.pixelToLatLon(local_mx, local_my, width, height);
      global_cog = {
        lat: Number(local_ll.lat.toFixed(6)),
        lon: Number(local_ll.lon.toFixed(6)),
        pixel_x: Number(local_mx.toFixed(4)),
        pixel_y: Number(local_my.toFixed(4)),
        population: Math.round(global_pop),
        sample_size: global_px_count
      };
    } else {
      global_cog = {
        lat: null,
        lon: null,
        pixel_x: null,
        pixel_y: null,
        population: 0,
        sample_size: 0
      };
    }

    let regional_cogs_array = [];
    let regional_totals_array = [];
    for (let i = 0; i < region_count; i++) {
      regional_totals_array.push(reg_pop[i]);
      if (reg_pop[i] > 0) {
        let local_rx = reg_wx[i]/reg_pop[i];
        let local_ry = reg_wy[i]/reg_pop[i];
        let local_rll = BenchmarkIO.pixelToLatLon(local_rx, local_ry, width, height);
        regional_cogs_array.push({
          lat: Number(local_rll.lat.toFixed(6)),
          lon: Number(local_rll.lon.toFixed(6)),
          pixel_x: Number(local_rx.toFixed(4)),
          pixel_y: Number(local_ry.toFixed(4)),
          population: Math.round(reg_pop[i]),
          sample_size: reg_px[i]
        });
      } else {
        regional_cogs_array.push({
          lat: null,
          lon: null,
          pixel_x: null,
          pixel_y: null,
          population: 0,
          sample_size: 0
        });
      }
    }

    //Return statement
    return {
      global: global_cog,
      regional_cogs: regional_cogs_array,
      regional_totals: regional_totals_array
    };
  },


  /**
   * Updates first-appearance year and maximum population for Global 30 40x40 city windows.
   *
   * @param {Float64Array} arg0_values
   * @param {number} arg1_width
   * @param {number} arg2_year
   * @param {Array<Object>} arg3_city_boxes
   * @param {Object} arg4_accumulator_obj
   */
  updateGlobal30Boxes: function (arg0_values, arg1_width, arg2_year, arg3_city_boxes, arg4_accumulator_obj) {
    //Convert from parameters
    let values_array = arg0_values;
    let width = arg1_width;
    let year = arg2_year;
    let city_boxes_array = arg3_city_boxes;
    let accumulator_obj = arg4_accumulator_obj;

    for (let i = 0; i < city_boxes_array.length; i++) {
      let local_box = city_boxes_array[i];
      let local_city_acc = accumulator_obj[local_box.id];

      for (let x = local_box.x0; x < local_box.x1; x++) {
        for (let y = local_box.y0; y < local_box.y1; y++) {
          let local_v = values_array[y*width + x];
          if (local_v > 0) {
            let local_key = `${x},${y}`;
            let local_existing = local_city_acc[local_key];

            if (!local_existing) {
              local_city_acc[local_key] = {
                first_year: year,
                gx: x - local_box.x0,
                gy: y - local_box.y0,
                last_population: Math.round(local_v),
                last_year: year,
                max_population: Math.round(local_v),
                px: x,
                py: y
              };
            } else {
              if (year < local_existing.first_year) local_existing.first_year = year;
              local_existing.max_population = Math.max(local_existing.max_population, Math.round(local_v));
              if (year >= local_existing.last_year) {
                local_existing.last_year = year;
                local_existing.last_population = Math.round(local_v);
              }
            }
          }
        }
      }
    }
  }
};

if (require.main === module) {
  let config_obj = BenchmarkIO.loadConfig();
  RasterSummaryCompiler.compileRasterSummaries(config_obj);
}

module.exports = global.RasterSummaryCompiler;
