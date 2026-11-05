//Import dependencies
let child_process = require("child_process");
let fs = require("fs");
let path = require("path");
let BenchmarkIO = require("../1.compiler/io_helpers.js");
let MarkdownTableExporter = require("./E_export_markdown_tables.js");

//Initialise namespace
global.BenchmarkVisualisationsRunner = {
  /**
   * Executes a single Python visualisation pipeline step synchronously.
   *
   * @param {string} arg0_python_bin
   * @param {string} arg1_script_name
   * @param {string[]} arg2_argv
   *
   * @returns {boolean}
   */
  executePythonScript: function (arg0_python_bin, arg1_script_name, arg2_argv) {
    //Convert from parameters
    let python_bin = arg0_python_bin;
    let script_name = arg1_script_name;
    let argv_array = (arg2_argv) ? arg2_argv : [];

    //Declare local instance variables.
    let script_path = path.resolve(__dirname, script_name);

    if (!fs.existsSync(script_path)) {
      console.error(`BenchmarkVisualisationsRunner.executePythonScript: Missing script ${script_path}`);
      return false;
    }


    console.log(`[3.visualisations] Executing ${script_name}...`);
    child_process.execFileSync(python_bin, [script_path].concat(argv_array), {
      cwd: __dirname,
      stdio: "inherit"
    });

    //Return statement
    return true;
  },


  /**
   * Runs all Macro, Meso, Micro, XeLaTeX Publication Table, and Markdown Table steps (A -> B -> C -> D -> E).
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
    let elapsed_sec = "0.00";
    let md_paths = {};
    let python_bin = (config_obj.paths && config_obj.paths.python_bin) ?
      config_obj.paths.python_bin :
      "python";
    let start_ms = Date.now();

    console.log(`=== Stadestér Benchmark Visualisations (${config_obj.version_label}) ===`);
    BenchmarkVisualisationsRunner.executePythonScript(python_bin, "A_plot_macro_validation.py", argv_array);
    BenchmarkVisualisationsRunner.executePythonScript(python_bin, "B_plot_meso_validation.py", argv_array);
    BenchmarkVisualisationsRunner.executePythonScript(python_bin, "C_plot_micro_validation.py", argv_array);
    BenchmarkVisualisationsRunner.executePythonScript(python_bin, "D_render_publication_tables.py", argv_array);
    md_paths = MarkdownTableExporter.exportAllMarkdownTables(config_obj);

    elapsed_sec = ((Date.now() - start_ms)/1000.0).toFixed(2);
    console.log(`=== Benchmark Visualisations finished in ${elapsed_sec}s ===`);

    //Return statement
    return md_paths;
  }
};

if (require.main === module)
  BenchmarkVisualisationsRunner.runAllVisualisations();

module.exports = global.BenchmarkVisualisationsRunner;
