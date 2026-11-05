//Import dependencies
let BenchmarkIO = require("./io_helpers.js");
let CityDatasetCompiler = require("./A_compile_city_datasets.js");
let RasterSummaryCompiler = require("./B_compile_raster_summaries.js");
let ReferenceDatasetCompiler = require("./C_compile_reference_datasets.js");

//Initialise namespace
global.BenchmarkCompiler = {
  /**
   * Executes the full 1.compiler pipeline sequentially (A -> B -> C).
   *
   * @param {string[]} [arg0_argv]
   *
   * @returns {Object}
   */
  runCompilerPipeline: function (arg0_argv) {
    //Convert from parameters
    let argv_array = (arg0_argv) ? arg0_argv : process.argv.slice(2);

    //Declare local instance variables.
    let config_obj = BenchmarkIO.loadConfig(argv_array);
    let start_ms = Date.now();

    console.log(`=== Stadestér Benchmark Compiler (${config_obj.version_label}) ===`);
    let city_data = CityDatasetCompiler.compileCityDatasets(config_obj);
    let raster_data = RasterSummaryCompiler.compileRasterSummaries(config_obj);
    let reference_data = ReferenceDatasetCompiler.compileReferenceDatasets(config_obj);

    let elapsed_sec = ((Date.now() - start_ms)/1000.0).toFixed(2);
    console.log(`=== Compiler finished in ${elapsed_sec}s ===`);

    //Return statement
    return {
      city_data: city_data,
      raster_data: raster_data,
      reference_data: reference_data
    };
  }
};

if (require.main === module)
  BenchmarkCompiler.runCompilerPipeline();

module.exports = global.BenchmarkCompiler;

