//Import dependencies
let BenchmarkIO = require("../1.compiler/io_helpers.js");
let MacroValidation = require("./A_macro_validation.js");
let MesoValidation = require("./B_meso_validation.js");
let MicroValidation = require("./C_micro_validation.js");

//Initialise namespace
global.BenchmarkResultsRunner = {
  /**
   * Executes the full 2.results benchmark evaluation pipeline sequentially (A -> B -> C).
   *
   * @param {string[]} [arg0_argv]
   *
   * @returns {Object}
   */
  runAllResults: function (arg0_argv) {
    //Convert from parameters
    let argv_array = (arg0_argv) ? arg0_argv : process.argv.slice(2);

    //Declare local instance variables.
    let config_obj = BenchmarkIO.loadConfig(argv_array);
    let start_ms = Date.now();

    console.log(`=== Stadestér Benchmark Results (${config_obj.version_label}) ===`);
    let macro_res = MacroValidation.runMacroValidation(config_obj);
    let meso_res = MesoValidation.runMesoValidation(config_obj);
    let micro_res = MicroValidation.runMicroValidation(config_obj);

    let elapsed_sec = ((Date.now() - start_ms)/1000.0).toFixed(2);
    console.log(`=== Benchmark Results finished in ${elapsed_sec}s ===`);

    //Return statement
    return {
      macro: macro_res,
      meso: meso_res,
      micro: micro_res
    };
  }
};

if (require.main === module)
  BenchmarkResultsRunner.runAllResults();

module.exports = global.BenchmarkResultsRunner;

