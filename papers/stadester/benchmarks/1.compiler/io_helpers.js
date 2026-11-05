//Import dependencies
let fs = require("fs");
let path = require("path");
let zlib = require("zlib");

//Initialise namespace
global.BenchmarkIO = {
  /**
   * Computes WGS84 ellipsoidal geodesic distance in kilometres between two coordinates.
   *
   * @param {number} arg0_lat1
   * @param {number} arg1_lon1
   * @param {number} arg2_lat2
   * @param {number} arg3_lon2
   *
   * @returns {number}
   */
  calculateGeodesicKm: function (arg0_lat1, arg1_lon1, arg2_lat2, arg3_lon2) {
    //Convert from parameters
    let lat1 = Number(arg0_lat1);
    let lon1 = Number(arg1_lon1);
    let lat2 = Number(arg2_lat2);
    let lon2 = Number(arg3_lon2);

    //Declare local instance variables.
    let a_axis = 6378137.0;
    let b_axis = 6356752.314245;
    let converged = false;
    let cos2_sigma_m = 0;
    let cos_sq_alpha = 0;
    let deg_to_rad = Math.PI/180.0;
    let delta_lon = (lon2 - lon1)*deg_to_rad;
    let flattening = 1.0/298.257223563;
    let lambda = delta_lon;
    let sin_sigma = 0;
    let cos_sigma = 0;
    let sigma = 0;
    let u1 = Math.atan((1.0 - flattening)*Math.tan(lat1*deg_to_rad));
    let u2 = Math.atan((1.0 - flattening)*Math.tan(lat2*deg_to_rad));

    let cos_u1 = Math.cos(u1);
    let cos_u2 = Math.cos(u2);
    let sin_u1 = Math.sin(u1);
    let sin_u2 = Math.sin(u2);

    if (!Number.isFinite(lat1) || !Number.isFinite(lon1) || !Number.isFinite(lat2) || !Number.isFinite(lon2)) {
      console.error("BenchmarkIO.calculateGeodesicKm: Invalid coordinate input.");
      return 0;
    }
    if (Math.abs(lat1 - lat2) < 1e-12 && Math.abs(lon1 - lon2) < 1e-12)
      return 0;


    for (let i = 0; i < 100; i++) {
      let local_cos_lambda = Math.cos(lambda);
      let local_sin_lambda = Math.sin(lambda);
      let local_t1 = cos_u2*local_sin_lambda;
      let local_t2 = cos_u1*sin_u2 - sin_u1*cos_u2*local_cos_lambda;

      sin_sigma = Math.sqrt(local_t1*local_t1 + local_t2*local_t2);
      if (sin_sigma === 0)
        return 0;
      cos_sigma = sin_u1*sin_u2 + cos_u1*cos_u2*local_cos_lambda;
      sigma = Math.atan2(sin_sigma, cos_sigma);

      let local_sin_alpha = (cos_u1*cos_u2*local_sin_lambda)/sin_sigma;
      cos_sq_alpha = 1.0 - local_sin_alpha*local_sin_alpha;
      if (cos_sq_alpha !== 0) {
        cos2_sigma_m = cos_sigma - (2.0*sin_u1*sin_u2)/cos_sq_alpha;
      } else {
        cos2_sigma_m = 0;
      }

      let local_c = (flattening/16.0)*cos_sq_alpha*(4.0 + flattening*(4.0 - 3.0*cos_sq_alpha));
      let local_prev_lambda = lambda;
      lambda = delta_lon + (1.0 - local_c)*flattening*local_sin_alpha*(
        sigma + local_c*sin_sigma*(cos2_sigma_m + local_c*cos_sigma*(-1.0 + 2.0*cos2_sigma_m*cos2_sigma_m))
      );

      if (Math.abs(lambda - local_prev_lambda) < 1e-12) {
        converged = true;
        break;
      }
    }

    if (!converged) {
      let local_dlat = (lat2 - lat1)*deg_to_rad;
      let local_dlon = (lon2 - lon1)*deg_to_rad;
      let local_hav = Math.sin(local_dlat/2.0)*Math.sin(local_dlat/2.0) +
        Math.cos(lat1*deg_to_rad)*Math.cos(lat2*deg_to_rad)*Math.sin(local_dlon/2.0)*Math.sin(local_dlon/2.0);
      return 6371.0088*2.0*Math.atan2(Math.sqrt(local_hav), Math.sqrt(Math.max(0, 1.0 - local_hav)));
    }

    let u_sq = cos_sq_alpha*(a_axis*a_axis - b_axis*b_axis)/(b_axis*b_axis);
    let coeff_a = 1.0 + (u_sq/16384.0)*(4096.0 + u_sq*(-768.0 + u_sq*(320.0 - 175.0*u_sq)));
    let coeff_b = (u_sq/1024.0)*(256.0 + u_sq*(-128.0 + u_sq*(74.0 - 47.0*u_sq)));
    let delta_sigma = coeff_b*sin_sigma*(
      cos2_sigma_m + (coeff_b/4.0)*(
        cos_sigma*(-1.0 + 2.0*cos2_sigma_m*cos2_sigma_m) -
        (coeff_b/6.0)*cos2_sigma_m*(-3.0 + 4.0*sin_sigma*sin_sigma)*(-3.0 + 4.0*cos2_sigma_m*cos2_sigma_m)
      )
    );
    let distance_km = (b_axis*coeff_a*(sigma - delta_sigma))/1000.0;

    //Return statement
    return distance_km;
  },


  /**
   * Computes arithmetic mean of a numeric array.
   *
   * @param {number[]} arg0_values
   *
   * @returns {number}
   */
  calculateMean: function (arg0_values) {
    //Convert from parameters
    let values_array = arg0_values;

    //Declare local instance variables.
    let valid_count = 0;
    let value_sum = 0;

    if (!Array.isArray(values_array) || values_array.length === 0)
      return 0;


    for (let i = 0; i < values_array.length; i++) {
      if (Number.isFinite(values_array[i])) {
        value_sum += values_array[i];
        valid_count++;
      }
    }

    //Return statement
    return (valid_count > 0) ? value_sum/valid_count : 0;
  },


  /**
   * Computes standard deviation of a numeric array.
   *
   * @param {number[]} arg0_values
   * @param {Object} [arg1_options]
   * @param {boolean} [arg1_options.is_sample=false]
   *
   * @returns {number}
   */
  calculateStdDev: function (arg0_values, arg1_options) {
    //Convert from parameters
    let values_array = arg0_values;
    let options = (arg1_options) ? arg1_options : {};

    //Initialise options
    if (options.is_sample === undefined) options.is_sample = false;

    //Declare local instance variables.
    let filtered_array = [];
    let mean_value = 0;
    let sq_diff_sum = 0;

    if (!Array.isArray(values_array) || values_array.length === 0)
      return 0;


    for (let i = 0; i < values_array.length; i++)
      if (Number.isFinite(values_array[i])) filtered_array.push(values_array[i]);

    if (filtered_array.length === 0)
      return 0;
    if (options.is_sample && filtered_array.length < 2)
      return 0;

    mean_value = BenchmarkIO.calculateMean(filtered_array);
    for (let i = 0; i < filtered_array.length; i++) {
      let local_diff = filtered_array[i] - mean_value;
      sq_diff_sum += local_diff*local_diff;
    }

    let denominator = filtered_array.length;
    if (options.is_sample) denominator = filtered_array.length - 1;

    //Return statement
    return Math.sqrt(sq_diff_sum/denominator);
  },


  /**
   * Computes value-weighted geometric mean of positive numbers.
   *
   * @param {number[]} arg0_values
   *
   * @returns {number}
   */
  calculateWeightedGeometricMean: function (arg0_values) {
    //Convert from parameters
    let values_array = arg0_values;

    //Declare local instance variables.
    let positive_array = [];
    let total_weight = 0;
    let weighted_log_sum = 0;

    if (!Array.isArray(values_array) || values_array.length === 0)
      return 0;


    for (let i = 0; i < values_array.length; i++) {
      let local_val = Number(values_array[i]);
      if (Number.isFinite(local_val) && local_val > 0) {
        positive_array.push(local_val);
        total_weight += local_val;
      }
    }

    if (positive_array.length === 0)
      return 0;
    if (positive_array.length === 1)
      return positive_array[0];

    for (let i = 0; i < positive_array.length; i++) {
      let local_weight = positive_array[i]/total_weight;
      weighted_log_sum += local_weight*Math.log(positive_array[i]);
    }

    //Return statement
    return Math.exp(weighted_log_sum);
  },


  /**
   * Decodes a 4-byte-per-pixel numeric GeoPNG (big-endian float32 or uint32) into a Float64Array.
   *
   * @param {string} arg0_file_path
   * @param {string} arg1_encoding - Either "float32_be" or "uint32_be".
   *
   * @returns {{width: number, height: number, values: Float64Array}|null}
   */
  decodeNumberRaster: function (arg0_file_path, arg1_encoding) {
    //Convert from parameters
    let file_path = arg0_file_path;
    let encoding = arg1_encoding;

    //Declare local instance variables.
    let decoded_png = BenchmarkIO.decodePNG(file_path);

    if (!decoded_png) {
      console.error(`BenchmarkIO.decodeNumberRaster: Could not decode ${file_path}`);
      return null;
    }


    let data_view = new DataView(decoded_png.rgba.buffer, decoded_png.rgba.byteOffset, decoded_png.rgba.byteLength);
    let is_float = (encoding === "float32_be");
    let pixel_count = decoded_png.width*decoded_png.height;
    let values_array = new Float64Array(pixel_count);

    for (let i = 0; i < pixel_count; i++) {
      let local_offset = i*4;
      let local_u32 = data_view.getUint32(local_offset, false);

      if (local_u32 === 0) {
        values_array[i] = 0;
      } else if (is_float) {
        let local_f32 = data_view.getFloat32(local_offset, false);
        values_array[i] = (Number.isFinite(local_f32) && local_f32 > 0) ? local_f32 : 0;
      } else {
        values_array[i] = local_u32;
      }
    }

    //Return statement
    return {
      height: decoded_png.height,
      values: values_array,
      width: decoded_png.width
    };
  },


  /**
   * Pure Node.js PNG decoder supporting 8-bit RGB, RGBA, and Greyscale images.
   *
   * @param {string} arg0_file_path
   *
   * @returns {{width: number, height: number, rgba: Uint8Array}|null}
   */
  decodePNG: function (arg0_file_path) {
    //Convert from parameters
    let file_path = arg0_file_path;

    //Declare local instance variables.
    let bit_depth = 0;
    let bytes_per_pixel = 4;
    let color_type = 0;
    let file_buffer = null;
    let height = 0;
    let idat_chunks_array = [];
    let palette_rgb = null;
    let trns_alpha = null;
    let width = 0;

    if (!fs.existsSync(file_path)) {
      console.error(`BenchmarkIO.decodePNG: Missing PNG file at ${file_path}`);
      return null;
    }


    file_buffer = fs.readFileSync(file_path);
    for (let i = 8; i + 8 <= file_buffer.length;) {
      let local_length = file_buffer.readUInt32BE(i);
      let local_type = file_buffer.toString("ascii", i + 4, i + 8);
      let local_data_start = i + 8;

      if (local_type === "IHDR") {
        width = file_buffer.readUInt32BE(local_data_start);
        height = file_buffer.readUInt32BE(local_data_start + 4);
        bit_depth = file_buffer[local_data_start + 8];
        color_type = file_buffer[local_data_start + 9];
      } else if (local_type === "PLTE") {
        palette_rgb = file_buffer.subarray(local_data_start, local_data_start + local_length);
      } else if (local_type === "tRNS") {
        trns_alpha = file_buffer.subarray(local_data_start, local_data_start + local_length);
      } else if (local_type === "IDAT") {
        idat_chunks_array.push(file_buffer.subarray(local_data_start, local_data_start + local_length));
      } else if (local_type === "IEND") {
        break;
      }
      i += 12 + local_length;
    }

    if (bit_depth !== 8) {
      console.error(`BenchmarkIO.decodePNG: Unsupported bit depth ${bit_depth} in ${file_path}`);
      return null;
    }

    if (color_type === 6) {
      bytes_per_pixel = 4;
    } else if (color_type === 2) {
      bytes_per_pixel = 3;
    } else if (color_type === 3) {
      bytes_per_pixel = 1;
    } else if (color_type === 0) {
      bytes_per_pixel = 1;
    } else if (color_type === 4) {
      bytes_per_pixel = 2;
    } else {
      console.error(`BenchmarkIO.decodePNG: Unsupported color type ${color_type} in ${file_path}`);
      return null;
    }

    let compressed_buffer = Buffer.concat(idat_chunks_array);
    let inflated_buffer = zlib.inflateSync(compressed_buffer);
    let raw_scanlines = new Uint8Array(width*height*bytes_per_pixel);
    let stride = width*bytes_per_pixel;

    for (let i = 0; i < height; i++) {
      let local_filter = inflated_buffer[i*(stride + 1)];
      let local_in_offset = i*(stride + 1) + 1;
      let local_out_offset = i*stride;
      let local_prev_offset = (i - 1)*stride;

      for (let x = 0; x < stride; x++) {
        let local_raw = inflated_buffer[local_in_offset + x];
        let local_left = (x >= bytes_per_pixel) ? raw_scanlines[local_out_offset + x - bytes_per_pixel] : 0;
        let local_up = (i > 0) ? raw_scanlines[local_prev_offset + x] : 0;
        let local_up_left = (i > 0 && x >= bytes_per_pixel) ? raw_scanlines[local_prev_offset + x - bytes_per_pixel] : 0;

        if (local_filter === 0) {
          raw_scanlines[local_out_offset + x] = local_raw;
        } else if (local_filter === 1) {
          raw_scanlines[local_out_offset + x] = (local_raw + local_left) & 255;
        } else if (local_filter === 2) {
          raw_scanlines[local_out_offset + x] = (local_raw + local_up) & 255;
        } else if (local_filter === 3) {
          raw_scanlines[local_out_offset + x] = (local_raw + ((local_left + local_up) >> 1)) & 255;
        } else if (local_filter === 4) {
          raw_scanlines[local_out_offset + x] = (local_raw + BenchmarkIO.paethPredictor(local_left, local_up, local_up_left)) & 255;
        }
      }
    }

    if (color_type === 6) {
      return {
        height: height,
        rgba: raw_scanlines,
        width: width
      };
    }

    let rgba_array = new Uint8Array(width*height*4);
    let total_pixels = width*height;
    for (let i = 0; i < total_pixels; i++) {
      let local_dst = i*4;
      let local_src = i*bytes_per_pixel;

      if (color_type === 2) {
        rgba_array[local_dst] = raw_scanlines[local_src];
        rgba_array[local_dst + 1] = raw_scanlines[local_src + 1];
        rgba_array[local_dst + 2] = raw_scanlines[local_src + 2];
        rgba_array[local_dst + 3] = 255;
      } else if (color_type === 3 && palette_rgb) {
        let local_pidx = raw_scanlines[local_src];
        let local_poff = local_pidx*3;
        rgba_array[local_dst] = palette_rgb[local_poff] || 0;
        rgba_array[local_dst + 1] = palette_rgb[local_poff + 1] || 0;
        rgba_array[local_dst + 2] = palette_rgb[local_poff + 2] || 0;
        rgba_array[local_dst + 3] = (trns_alpha && local_pidx < trns_alpha.length) ? trns_alpha[local_pidx] : 255;
      } else if (color_type === 0) {
        let local_g = raw_scanlines[local_src];
        rgba_array[local_dst] = local_g;
        rgba_array[local_dst + 1] = local_g;
        rgba_array[local_dst + 2] = local_g;
        rgba_array[local_dst + 3] = 255;
      } else {
        let local_g = raw_scanlines[local_src];
        rgba_array[local_dst] = local_g;
        rgba_array[local_dst + 1] = local_g;
        rgba_array[local_dst + 2] = local_g;
        rgba_array[local_dst + 3] = raw_scanlines[local_src + 1];
      }
    }

    //Return statement
    return {
      height: height,
      rgba: rgba_array,
      width: width
    };
  },


  /**
   * Ensures a directory path exists recursively.
   *
   * @param {string} arg0_dir_path
   *
   * @returns {string}
   */
  ensureDirectory: function (arg0_dir_path) {
    //Convert from parameters
    let dir_path = arg0_dir_path;

    if (!fs.existsSync(dir_path))
      fs.mkdirSync(dir_path, { recursive: true });

    //Return statement
    return dir_path;
  },


  /**
   * Formats a number using European decimals (",") and period thousands separators (".").
   *
   * @param {number} arg0_number
   * @param {number} [arg1_decimals=2]
   *
   * @returns {string}
   */
  formatEuropeanNumber: function (arg0_number, arg1_decimals) {
    //Convert from parameters
    let number_val = Number(arg0_number);
    let decimals = (arg1_decimals !== undefined) ? arg1_decimals : 2;

    //Declare local instance variables.
    let fixed_str = "";
    let formatted_int = "";
    let is_negative = false;
    let parts_array = [];

    if (!Number.isFinite(number_val))
      return "N/A";


    is_negative = (number_val < 0);
    fixed_str = Math.abs(number_val).toFixed(decimals);
    parts_array = fixed_str.split(".");
    formatted_int = parts_array[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    let sign_prefix = "";
    if (is_negative && Number(fixed_str) > 0) sign_prefix = "-";

    //Return statement
    return (decimals > 0) ? `${sign_prefix}${formatted_int},${parts_array[1]}` : `${sign_prefix}${formatted_int}`;
  },


  /**
   * Formats large numbers with semantic abbreviations (k, M, B, T) and European decimals.
   *
   * @param {number} arg0_number
   * @param {number} [arg1_decimals=2]
   *
   * @returns {string}
   */
  formatSemanticNumber: function (arg0_number, arg1_decimals) {
    //Convert from parameters
    let number_val = Number(arg0_number);
    let decimals = (arg1_decimals !== undefined) ? arg1_decimals : 2;

    //Declare local instance variables.
    let abs_val = Math.abs(number_val);
    let scaled_val = number_val;
    let suffix = "";

    if (!Number.isFinite(number_val))
      return "N/A";


    if (abs_val >= 1e12) {
      scaled_val = number_val/1e12;
      suffix = "T";
    } else if (abs_val >= 1e9) {
      scaled_val = number_val/1e9;
      suffix = "B";
    } else if (abs_val >= 1e6) {
      scaled_val = number_val/1e6;
      suffix = "M";
    } else if (abs_val >= 1e3) {
      scaled_val = number_val/1e3;
      suffix = "k";
    }

    //Return statement
    return `${BenchmarkIO.formatEuropeanNumber(scaled_val, decimals)}${suffix}`;
  },


  /**
   * Converts WGS84 latitude/longitude into Equirectangular pixel coordinates.
   *
   * @param {number} arg0_lat
   * @param {number} arg1_lon
   * @param {number} [arg2_width=4320]
   * @param {number} [arg3_height=2160]
   *
   * @returns {{x: number, y: number}}
   */
  latLonToPixel: function (arg0_lat, arg1_lon, arg2_width, arg3_height) {
    //Convert from parameters
    let lat = Number(arg0_lat);
    let lon = Number(arg1_lon);
    let width = (arg2_width !== undefined) ? arg2_width : 4320;
    let height = (arg3_height !== undefined) ? arg3_height : 2160;

    //Declare local instance variables.
    let px = Math.floor(((lon + 180.0)/360.0)*width);
    let py = Math.floor(((90.0 - lat)/180.0)*height);

    px = Math.max(0, Math.min(width - 1, px));
    py = Math.max(0, Math.min(height - 1, py));

    //Return statement
    return { x: px, y: py };
  },


  /**
   * Loads the benchmark configuration JSON5 file, applying optional CLI overrides.
   *
   * @param {string[]} [arg0_argv]
   *
   * @returns {Object}
   */
  loadConfig: function (arg0_argv) {
    //Convert from parameters
    let argv_array = (arg0_argv) ? arg0_argv : process.argv.slice(2);

    //Declare local instance variables.
    let config_path = BenchmarkIO.resolveProjectPath("common/stadester/benchmarks_config.json5");
    let source_root_override = null;

    for (let i = 0; i < argv_array.length; i++) {
      if (argv_array[i] === "--config" && argv_array[i + 1]) {
        config_path = path.resolve(argv_array[i + 1]);
      } else if (argv_array[i] === "--source-root" && argv_array[i + 1]) {
        source_root_override = argv_array[i + 1].replace(/\\/g, "/");
      }
    }

    let config_obj = BenchmarkIO.loadJSON5(config_path);
    if (source_root_override && config_obj && config_obj.paths) {
      let all_path_keys = Object.keys(config_obj.paths);
      let default_root = "F:/Active Projects/Project 1509 - SVEA/histmap";

      for (let i = 0; i < all_path_keys.length; i++) {
        let local_key = all_path_keys[i];
        let local_val = config_obj.paths[local_key];
        if (typeof local_val === "string" && local_val.startsWith(default_root))
          config_obj.paths[local_key] = source_root_override + local_val.slice(default_root.length);
      }
    }

    //Return statement
    return config_obj;
  },


  /**
   * Parses a JSON or JSON5 configuration file cleanly without external packages.
   *
   * @param {string} arg0_file_path
   *
   * @returns {Object|null}
   */
  loadJSON5: function (arg0_file_path) {
    //Convert from parameters
    let file_path = arg0_file_path;

    //Declare local instance variables.
    let in_block_comment = false;
    let in_double_string = false;
    let in_line_comment = false;
    let in_single_string = false;
    let out_chars_array = [];
    let raw_text = "";

    if (!fs.existsSync(file_path)) {
      console.error(`BenchmarkIO.loadJSON5: Missing file ${file_path}`);
      return null;
    }


    raw_text = fs.readFileSync(file_path, "utf8");
    for (let i = 0; i < raw_text.length; i++) {
      let local_ch = raw_text[i];
      let local_next = raw_text[i + 1];

      if (in_line_comment) {
        if (local_ch === "\n") {
          in_line_comment = false;
          out_chars_array.push(local_ch);
        }
      } else if (in_block_comment) {
        if (local_ch === "*" && local_next === "/") {
          in_block_comment = false;
          i++;
        }
      } else if (in_double_string) {
        out_chars_array.push(local_ch);
        if (local_ch === "\\" && local_next !== undefined) {
          out_chars_array.push(local_next);
          i++;
        } else if (local_ch === "\"") {
          in_double_string = false;
        }
      } else if (in_single_string) {
        if (local_ch === "\\" && local_next !== undefined) {
          if (local_next === "'") {
            out_chars_array.push("'");
          } else {
            out_chars_array.push(local_ch, local_next);
          }
          i++;
        } else if (local_ch === "\"") {
          out_chars_array.push("\\\"");
        } else if (local_ch === "'") {
          in_single_string = false;
          out_chars_array.push("\"");
        } else {
          out_chars_array.push(local_ch);
        }
      } else {
        if (local_ch === "/" && local_next === "/") {
          in_line_comment = true;
          i++;
        } else if (local_ch === "/" && local_next === "*") {
          in_block_comment = true;
          i++;
        } else if (local_ch === "\"") {
          in_double_string = true;
          out_chars_array.push(local_ch);
        } else if (local_ch === "'") {
          in_single_string = true;
          out_chars_array.push("\"");
        } else {
          out_chars_array.push(local_ch);
        }
      }
    }

    let stripped_str = out_chars_array.join("");
    let final_chars_array = [];
    let is_in_str = false;

    for (let i = 0; i < stripped_str.length; i++) {
      let local_ch = stripped_str[i];

      if (is_in_str) {
        final_chars_array.push(local_ch);
        if (local_ch === "\\" && stripped_str[i + 1] !== undefined) {
          final_chars_array.push(stripped_str[i + 1]);
          i++;
        } else if (local_ch === "\"") {
          is_in_str = false;
        }
      } else {
        if (local_ch === "\"") {
          is_in_str = true;
          final_chars_array.push(local_ch);
        } else if (local_ch === "{" || local_ch === ",") {
          final_chars_array.push(local_ch);
          let local_rest = stripped_str.slice(i + 1);
          let local_match = local_rest.match(/^(\s*)([A-Za-z_$][A-Za-z0-9_$]*)(\s*:)/);
          if (local_match) {
            final_chars_array.push(local_match[1], "\"", local_match[2], "\"", local_match[3]);
            i += local_match[0].length;
          }
        } else {
          final_chars_array.push(local_ch);
        }
      }
    }

    let quoted_keys_str = final_chars_array.join("");
    let clean_json_str = quoted_keys_str.replace(/,(\s*[}\]])/g, "$1");

    //Return statement
    return JSON.parse(clean_json_str);
  },


  /**
   * Computes PNG Paeth predictor byte value.
   *
   * @param {number} arg0_left
   * @param {number} arg1_up
   * @param {number} arg2_up_left
   *
   * @returns {number}
   */
  paethPredictor: function (arg0_left, arg1_up, arg2_up_left) {
    //Convert from parameters
    let left_val = arg0_left;
    let up_val = arg1_up;
    let up_left_val = arg2_up_left;

    //Declare local instance variables.
    let base_p = left_val + up_val - up_left_val;
    let pa = Math.abs(base_p - left_val);
    let pb = Math.abs(base_p - up_val);
    let pc = Math.abs(base_p - up_left_val);

    //Return statement
    if (pa <= pb && pa <= pc) {
      return left_val;
    } else if (pb <= pc) {
      return up_val;
    } else {
      return up_left_val;
    }
  },


  /**
   * Converts Equirectangular pixel coordinates to WGS84 latitude and longitude.
   *
   * @param {number} arg0_x
   * @param {number} arg1_y
   * @param {number} [arg2_width=4320]
   * @param {number} [arg3_height=2160]
   *
   * @returns {{lat: number, lon: number}}
   */
  pixelToLatLon: function (arg0_x, arg1_y, arg2_width, arg3_height) {
    //Convert from parameters
    let px = Number(arg0_x);
    let py = Number(arg1_y);
    let width = (arg2_width !== undefined) ? arg2_width : 4320;
    let height = (arg3_height !== undefined) ? arg3_height : 2160;

    //Declare local instance variables.
    let lat = 90.0 - (py/height)*180.0;
    let lon = (px/width)*360.0 - 180.0;

    //Return statement
    return { lat: lat, lon: lon };
  },


  /**
   * Resolves a workspace-relative or absolute path from the Intellte repository root.
   *
   * @param {string} arg0_target_path
   *
   * @returns {string}
   */
  resolveProjectPath: function (arg0_target_path) {
    //Convert from parameters
    let target_path = arg0_target_path;

    //Declare local instance variables.
    let project_root = path.resolve(__dirname, "..", "..", "..", "..");

    if (!target_path) {
      console.error("BenchmarkIO.resolveProjectPath: Empty target_path.");
      return project_root;
    }

    //Return statement
    return (path.isAbsolute(target_path)) ? target_path : path.resolve(project_root, target_path);
  },


  /**
   * Writes an object to disk as UTF-8 JSON, creating parent folders if needed.
   *
   * @param {string} arg0_file_path
   * @param {Object} arg1_data_obj
   * @param {Object} [arg2_options]
   * @param {boolean} [arg2_options.compact=false]
   *
   * @returns {string}
   */
  saveJSON: function (arg0_file_path, arg1_data_obj, arg2_options) {
    //Convert from parameters
    let file_path = arg0_file_path;
    let data_obj = arg1_data_obj;
    let options = (arg2_options) ? arg2_options : {};

    //Initialise options
    if (options.compact === undefined) options.compact = false;

    //Declare local instance variables.
    let parent_dir = path.dirname(file_path);

    BenchmarkIO.ensureDirectory(parent_dir);
    let json_str = (options.compact) ? JSON.stringify(data_obj) : JSON.stringify(data_obj, null, 2);
    fs.writeFileSync(file_path, json_str, "utf8");

    //Return statement
    return file_path;
  }
};

module.exports = global.BenchmarkIO;
