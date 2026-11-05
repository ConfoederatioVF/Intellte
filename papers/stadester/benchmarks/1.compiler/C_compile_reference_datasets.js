//Import dependencies
let fs = require("fs");
let path = require("path");
let BenchmarkIO = require("./io_helpers.js");

//Initialise namespace
global.ReferenceDatasetCompiler = {
  /**
   * Step C: Compiles external scholarly reference series, Angel Global 30 footprints, and world basemap polygons.
   *
   * @param {Object} arg0_config
   *
   * @returns {Object}
   */
  compileReferenceDatasets: function (arg0_config) {
    //Convert from parameters
    let config_obj = arg0_config;

    //Declare local instance variables.
    let angel_atlas_path = BenchmarkIO.resolveProjectPath(config_obj.paths.angel_global_30_atlas_png);
    let coast_10m_path = (config_obj.paths.global_30_coastlines_10m_json) ?
      BenchmarkIO.resolveProjectPath(config_obj.paths.global_30_coastlines_10m_json) :
      null;
    let compiled_dir = path.resolve(__dirname, "compiled");
    let cshapes_path = BenchmarkIO.resolveProjectPath(config_obj.paths.cshapes_geojson);
    let gt_path = BenchmarkIO.resolveProjectPath(config_obj.paths.global_30_ground_truth_json5);
    let ref_series_path = BenchmarkIO.resolveProjectPath(config_obj.paths.reference_series_json5);
    let reg_png_path = BenchmarkIO.resolveProjectPath(config_obj.paths.regional_subdivisions_png);

    console.log("[1.compiler/C] Loading reference series and Ground Truth configs...");
    let gt_obj = BenchmarkIO.loadJSON5(gt_path);
    let ref_series_obj = BenchmarkIO.loadJSON5(ref_series_path);

    //1. Compile Angel Global 30 visual overlay tiles (downsampled 110x110 for crisp plotting; full 329x329 evaluated in 2.results)
    console.log("[1.compiler/C] Extracting Angel Global 30 spatial overlay points...");
    let angel_png = BenchmarkIO.decodePNG(angel_atlas_path);
    let angel_visual_overlays_obj = {};
    let box_half = config_obj.time_domains.spatiotemporal_box_half_px;
    let height = config_obj.raster_dimensions.height;
    let tile_size = 329;
    let width = config_obj.raster_dimensions.width;

    if (angel_png) {
      for (let i = 0; i < config_obj.global_30.length; i++) {
        let local_city = config_obj.global_30[i];
        let local_col = i%5;
        let local_pt = BenchmarkIO.latLonToPixel(local_city.lat, local_city.lon, width, height);
        let local_row = Math.floor(i/5);
        let local_x0 = Math.max(0, local_pt.x - box_half);
        let local_x1 = Math.min(width, local_pt.x + box_half);
        let local_y0 = Math.max(0, local_pt.y - box_half);
        let local_y1 = Math.min(height, local_pt.y + box_half);

        let local_lat_max = 90.0 - (local_y0/height)*180.0;
        let local_lat_min = 90.0 - (local_y1/height)*180.0;
        let local_lon_max = (local_x1/width)*360.0 - 180.0;
        let local_lon_min = (local_x0/width)*360.0 - 180.0;

        let local_points_array = [];
        let local_step = 2;

        for (let x = 0; x < tile_size; x += local_step) {
          for (let y = 0; y < tile_size; y += local_step) {
            let local_ax = local_col*tile_size + x;
            let local_ay = local_row*tile_size + y;
            let local_off = (local_ay*angel_png.width + local_ax)*4;
            let local_alpha = angel_png.rgba[local_off + 3];

            if (local_alpha >= 200) {
              let local_plon = local_lon_min + ((x + 0.5)/tile_size)*(local_lon_max - local_lon_min);
              let local_plat = local_lat_max - ((y + 0.5)/tile_size)*(local_lat_max - local_lat_min);
              local_points_array.push([
                Number(local_plon.toFixed(4)),
                Number(local_plat.toFixed(4))
              ]);
            }
          }
        }
        angel_visual_overlays_obj[local_city.id] = local_points_array;
      }
    }

    //2. Extract modern basemap polygons from CShapes-2.0.geojson + high-res Global 30 vector coastlines
    console.log("[1.compiler/C] Compiling world & city basemap geometries...");
    let basemap_obj = ReferenceDatasetCompiler.extractWorldBasemap(cshapes_path, reg_png_path, config_obj);
    if (coast_10m_path && fs.existsSync(coast_10m_path)) {
      let coast_10m_obj = JSON.parse(fs.readFileSync(coast_10m_path, "utf8"));
      basemap_obj.global_30_coastlines_10m = coast_10m_obj.global_30_coastlines;
    }

    let reference_out = {
      angel_atlas_panels: gt_obj.angel_atlas_panels,
      angel_visual_overlays: angel_visual_overlays_obj,
      global_30_ground_truth: gt_obj,
      hyde_un_world: ref_series_obj.hyde_un_world,
      mulligan_crampton_published_cog: ref_series_obj.mulligan_crampton_published_cog,
      mulligan_crampton_unwpp_cog: ref_series_obj.mulligan_crampton_unwpp_cog,
      reba_centres_of_gravity: ref_series_obj.reba_centres_of_gravity,
      reba_published_cog: ref_series_obj.reba_published_cog
    };

    let out_ref_path = path.join(compiled_dir, "reference_datasets_compiled.json");
    let out_map_path = path.join(compiled_dir, "world_basemap_polygons.json");
    BenchmarkIO.saveJSON(out_ref_path, reference_out);
    BenchmarkIO.saveJSON(out_map_path, basemap_obj, { compact: true });
    console.log(`[1.compiler/C] Saved ${out_ref_path} and ${out_map_path}.`);

    //Return statement
    return reference_out;
  },


  /**
   * Extracts modern sovereign polygons (simplified for global/regional maps + full-res within Global 30 & CoG windows).
   *
   * @param {string} arg0_cshapes_path
   * @param {string} arg1_reg_png_path
   * @param {Object} arg2_config
   *
   * @returns {Object}
   */
  extractWorldBasemap: function (arg0_cshapes_path, arg1_reg_png_path, arg2_config) {
    //Convert from parameters
    let cshapes_path = arg0_cshapes_path;
    let reg_png_path = arg1_reg_png_path;
    let config_obj = arg2_config;

    //Declare local instance variables.
    let cshapes_obj = JSON.parse(fs.readFileSync(cshapes_path, "utf8"));
    let features_array = cshapes_obj.features;
    let global_rings_array = [];
    let latest_year = 0;
    let ring_id = 1;

    for (let i = 0; i < features_array.length; i++) {
      let local_props = features_array[i].properties;
      if (local_props && Number(local_props.gweyear) > latest_year)
        latest_year = Number(local_props.gweyear);
    }

    for (let i = 0; i < features_array.length; i++) {
      let local_feat = features_array[i];
      let local_props = local_feat.properties;
      if (!local_props) continue;
      if (Number(local_props.gwsyear) > latest_year || Number(local_props.gweyear) < latest_year) continue;

      let local_geom = local_feat.geometry;
      if (!local_geom || !local_geom.coordinates) continue;

      let local_polys = (local_geom.type === "Polygon") ? [local_geom.coordinates] : local_geom.coordinates;
      for (let x = 0; x < local_polys.length; x++) {
        let local_outer_ring = local_polys[x][0];
        if (!local_outer_ring || local_outer_ring.length < 4) continue;

        let local_simplified = ReferenceDatasetCompiler.simplifyRing(local_outer_ring, 0.08);
        if (local_simplified.length >= 4) {
          global_rings_array.push({
            coords: local_simplified,
            group: ring_id
          });
          ring_id++;
        }
      }
    }

    //Supplement non-sovereign landmasses (e.g. Greenland, Antarctica north of -65, Svalbard) from regional_subdivisions.png
    let reg_png = BenchmarkIO.decodePNG(reg_png_path);
    let city_land_cells_obj = {};
    if (reg_png) {
      let local_greenland_rings = ReferenceDatasetCompiler.traceBoxLandBoxes(reg_png, -75, -10, 59, 84, 4);
      for (let i = 0; i < local_greenland_rings.length; i++) {
        global_rings_array.push({
          coords: local_greenland_rings[i],
          group: ring_id
        });
        ring_id++;
      }

      //Extract exact 5-arcmin land cells & coastline segments for each Global 30 40x40 city window
      let box_half = config_obj.time_domains.spatiotemporal_box_half_px;
      let width = config_obj.raster_dimensions.width;
      let height = config_obj.raster_dimensions.height;

      for (let i = 0; i < config_obj.global_30.length; i++) {
        let local_city = config_obj.global_30[i];
        let local_pt = BenchmarkIO.latLonToPixel(local_city.lat, local_city.lon, width, height);
        let local_x0 = Math.max(0, local_pt.x - box_half);
        let local_x1 = Math.min(width, local_pt.x + box_half);
        let local_y0 = Math.max(0, local_pt.y - box_half);
        let local_y1 = Math.min(height, local_pt.y + box_half);

        let local_coast_segs = [];
        let local_land_tiles = [];

        for (let x = local_x0; x < local_x1; x++) {
          for (let y = local_y0; y < local_y1; y++) {
            let local_is_land = ReferenceDatasetCompiler.isLandPixel(reg_png, x, y);
            if (!local_is_land) continue;

            let local_lon0 = (x/width)*360.0 - 180.0;
            let local_lon1 = ((x + 1)/width)*360.0 - 180.0;
            let local_lat0 = 90.0 - ((y + 1)/height)*180.0;
            let local_lat1 = 90.0 - (y/height)*180.0;

            local_land_tiles.push([
              Number(((local_lon0 + local_lon1)*0.5).toFixed(4)),
              Number(((local_lat0 + local_lat1)*0.5).toFixed(4))
            ]);

            if (!ReferenceDatasetCompiler.isLandPixel(reg_png, x - 1, y))
              local_coast_segs.push([Number(local_lon0.toFixed(4)), Number(local_lat0.toFixed(4)), Number(local_lon0.toFixed(4)), Number(local_lat1.toFixed(4))]);
            if (!ReferenceDatasetCompiler.isLandPixel(reg_png, x + 1, y))
              local_coast_segs.push([Number(local_lon1.toFixed(4)), Number(local_lat0.toFixed(4)), Number(local_lon1.toFixed(4)), Number(local_lat1.toFixed(4))]);
            if (!ReferenceDatasetCompiler.isLandPixel(reg_png, x, y - 1))
              local_coast_segs.push([Number(local_lon0.toFixed(4)), Number(local_lat1.toFixed(4)), Number(local_lon1.toFixed(4)), Number(local_lat1.toFixed(4))]);
            if (!ReferenceDatasetCompiler.isLandPixel(reg_png, x, y + 1))
              local_coast_segs.push([Number(local_lon0.toFixed(4)), Number(local_lat0.toFixed(4)), Number(local_lon1.toFixed(4)), Number(local_lat0.toFixed(4))]);
          }
        }

        city_land_cells_obj[local_city.id] = {
          coast_segments: local_coast_segs,
          land_centres: local_land_tiles
        };
      }
    }

    //Return statement
    return {
      city_windows: city_land_cells_obj,
      latest_cshapes_year: latest_year,
      world_rings: global_rings_array
    };
  },


  /**
   * Checks whether a pixel in regional_subdivisions.png is a non-ocean land pixel.
   *
   * @param {Object} arg0_png
   * @param {number} arg1_x
   * @param {number} arg2_y
   *
   * @returns {boolean}
   */
  isLandPixel: function (arg0_png, arg1_x, arg2_y) {
    //Convert from parameters
    let png_obj = arg0_png;
    let px = arg1_x;
    let py = arg2_y;

    if (py < 0 || py >= png_obj.height)
      return false;

    let wrapped_x = (px + png_obj.width)%png_obj.width;
    let off = (py*png_obj.width + wrapped_x)*4;
    let r = png_obj.rgba[off];
    let g = png_obj.rgba[off + 1];
    let b = png_obj.rgba[off + 2];
    let a = png_obj.rgba[off + 3];

    //Ocean/background in regional_subdivisions.png is black [0,0,0] or white [255,255,255] or transparent
    let is_black = (r < 5 && g < 5 && b < 5);
    let is_white = (r > 250 && g > 250 && b > 250);

    //Return statement
    return (a > 0 && !is_black && !is_white);
  },


  /**
   * Downsamples a polygon coordinate ring using minimum vertex spacing in degrees.
   *
   * @param {Array<number[]>} arg0_ring
   * @param {number} arg1_min_deg
   *
   * @returns {Array<number[]>}
   */
  simplifyRing: function (arg0_ring, arg1_min_deg) {
    //Convert from parameters
    let ring_array = arg0_ring;
    let min_deg = arg1_min_deg;

    //Declare local instance variables.
    let min_sq = min_deg*min_deg;
    let out_array = [];

    if (!ring_array || ring_array.length === 0)
      return out_array;


    out_array.push([Number(ring_array[0][0].toFixed(3)), Number(ring_array[0][1].toFixed(3))]);
    let prev_pt = ring_array[0];

    for (let i = 1; i < ring_array.length - 1; i++) {
      let local_dx = ring_array[i][0] - prev_pt[0];
      let local_dy = ring_array[i][1] - prev_pt[1];
      if (local_dx*local_dx + local_dy*local_dy >= min_sq) {
        out_array.push([Number(ring_array[i][0].toFixed(3)), Number(ring_array[i][1].toFixed(3))]);
        prev_pt = ring_array[i];
      }
    }

    let first_pt = out_array[0];
    let last_pt = out_array[out_array.length - 1];
    if (first_pt[0] !== last_pt[0] || first_pt[1] !== last_pt[1])
      out_array.push([first_pt[0], first_pt[1]]);

    //Return statement
    return out_array;
  },


  /**
   * Traces merged horizontal scanline rectangles for non-CShapes polar landmasses such as Greenland.
   *
   * @param {Object} arg0_png
   * @param {number} arg1_lon_min
   * @param {number} arg2_lon_max
   * @param {number} arg3_lat_min
   * @param {number} arg4_lat_max
   * @param {number} arg5_step_px
   *
   * @returns {Array<Array<number[]>>}
   */
  traceBoxLandBoxes: function (arg0_png, arg1_lon_min, arg2_lon_max, arg3_lat_min, arg4_lat_max, arg5_step_px) {
    //Convert from parameters
    let png_obj = arg0_png;
    let lon_min = arg1_lon_min;
    let lon_max = arg2_lon_max;
    let lat_min = arg3_lat_min;
    let lat_max = arg4_lat_max;
    let step_px = arg5_step_px;

    //Declare local instance variables.
    let p0 = BenchmarkIO.latLonToPixel(lat_max, lon_min, png_obj.width, png_obj.height);
    let p1 = BenchmarkIO.latLonToPixel(lat_min, lon_max, png_obj.width, png_obj.height);
    let rings_array = [];

    for (let i = p0.y; i < p1.y; i += step_px) {
      let local_in_run = false;
      let local_run_start = 0;

      for (let x = p0.x; x <= p1.x; x++) {
        let local_land = (x < p1.x) ? ReferenceDatasetCompiler.isLandPixel(png_obj, x, i) : false;
        if (local_land && !local_in_run) {
          local_in_run = true;
          local_run_start = x;
        } else if (!local_land && local_in_run) {
          local_in_run = false;
          let local_lon0 = Number(((local_run_start/png_obj.width)*360.0 - 180.0).toFixed(3));
          let local_lon1 = Number(((x/png_obj.width)*360.0 - 180.0).toFixed(3));
          let local_lat1 = Number((90.0 - (i/png_obj.height)*180.0).toFixed(3));
          let local_lat0 = Number((90.0 - ((i + step_px)/png_obj.height)*180.0).toFixed(3));
          rings_array.push([
            [local_lon0, local_lat0],
            [local_lon1, local_lat0],
            [local_lon1, local_lat1],
            [local_lon0, local_lat1],
            [local_lon0, local_lat0]
          ]);
        }
      }
    }

    //Return statement
    return rings_array;
  }
};

if (require.main === module) {
  let config_obj = BenchmarkIO.loadConfig();
  ReferenceDatasetCompiler.compileReferenceDatasets(config_obj);
}

module.exports = global.ReferenceDatasetCompiler;
