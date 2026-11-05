//Import dependencies
let child_process = require("child_process");
let fs = require("fs");
let path = require("path");
let BenchmarkIO = require("../1.compiler/io_helpers.js");
let MarkdownTableExporter = require("./D_export_markdown_tables.js");

//Initialise namespace
global.BenchmarkVisualisationsRunner = {
  /**
   * Executes a single R visualisation script via Rscript.exe.
   *
   * @param {string} arg0_rscript_bin
   * @param {string} arg1_script_name
   *
   * @returns {boolean}
   */
  executeRScript: function (arg0_rscript_bin, arg1_script_name) {
    //Convert from parameters
    let rscript_bin = arg0_rscript_bin;
    let script_name = arg1_script_name;

    //Declare local instance variables.
    let script_path = path.resolve(__dirname, script_name);
    let vis_dir = path.resolve(__dirname).replace(/\\/g, "/");

    if (!fs.existsSync(script_path)) {
      console.error(`BenchmarkVisualisationsRunner.executeRScript: Missing script ${script_path}`);
      return false;
    }


    console.log(`[3.visualisations] Executing ${script_name}...`);
    child_process.execFileSync(rscript_bin, [script_path, vis_dir], {
      cwd: __dirname,
      stdio: "inherit"
    });

    //Return statement
    return true;
  },


  /**
   * Runs all Macro, Meso, and Micro R visualisation scripts plus Markdown table exports (A -> B -> C -> D).
   *
   * @param {string[]} [arg0_argv]
   *
   * @returns {Object}
   */
  runAllVisualisations: function (arg0_argv) {
    //Convert from parameters
    let argv_array = (arg0_argv) ? arg0_argv : process.argv.slice(2);

    //Declare local instance variables.
    let config_obj = BenchmarkIO.loadConfig(argv_array);
    let rscript_bin = (config_obj.paths && config_obj.paths.rscript_bin && fs.existsSync(config_obj.paths.rscript_bin)) ?
      config_obj.paths.rscript_bin :
      "Rscript";
    let start_ms = Date.now();

    console.log(`=== Stadestér Benchmark Visualisations (${config_obj.version_label}) ===`);
    BenchmarkVisualisationsRunner.executeRScript(rscript_bin, "A_plot_macro_validation.R");
    BenchmarkVisualisationsRunner.executeRScript(rscript_bin, "B_plot_meso_validation.R");
    BenchmarkVisualisationsRunner.executeRScript(rscript_bin, "C_plot_micro_validation.R");
    let md_paths = MarkdownTableExporter.exportAllMarkdownTables(config_obj);

    let elapsed_sec = ((Date.now() - start_ms)/1000.0).toFixed(2);
    console.log(`=== Benchmark Visualisations finished in ${elapsed_sec}s ===`);

    //Return statement
    return md_paths;
  }
};

if (require.main === module)
  BenchmarkVisualisationsRunner.runAllVisualisations();

module.exports = global.BenchmarkVisualisationsRunner;

