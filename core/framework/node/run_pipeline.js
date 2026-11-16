let path = require("path");
let { IntellteDiscovery } = require("./A_discover_records.js");
let { IntellteRmdCompiler } = require("./B_compile_rmd_dom.js");
let { IntellteArtefactStager } = require("./C_stage_artefacts.js");
let { IntellteVitePressBuilder } = require("./D_build_vitepress_docs.js");

let IntelltePipeline = {
  /**
   * Executes steps A through D of the Intellte static site generation pipeline.
   *
   * @param {Object} [arg0_options] - Options (`force_eval`, `only_concept_id`, `root_dir`).
   * @return {Promise<Object>} Build result object.
   */
  runAll: async function (arg0_options) {
    //Convert from parameters
    let options = (arg0_options) ? arg0_options : {};

    //Initialise options
    let force_eval = Boolean(options.force_eval);
    let only_concept_id = (options.only_concept_id) ? String(options.only_concept_id).trim() : "";
    let root_dir = (options.root_dir) ? options.root_dir : path.resolve(__dirname, "../../..");

    console.log("[Intellte] Step A: Discovering child repositories & working paper records...");
    let manifest = IntellteDiscovery.A_discoverRecords({
      only_concept_id: only_concept_id,
      root_dir: root_dir
    });

    console.log("[Intellte] Step B: Compiling .Rmd & .md documents into WYSIWYG DOM Markdown/HTML...");
    manifest = await IntellteRmdCompiler.B_compileRmdDom(manifest, {
      concurrency: options.concurrency,
      force_eval: force_eval
    });

    console.log("[Intellte] Step C: Staging PDFs, RMarkdown sources, BibTeX, figures & CRD fonts...");
    manifest = IntellteArtefactStager.C_stageArtefacts(manifest);

    console.log("[Intellte] Step D: Generating versioned VitePress pages & search catalogue index...");
    let result = IntellteVitePressBuilder.D_buildVitePressDocs(manifest);

    console.log(`[Intellte] Pipeline complete: ${result.record_count} versioned record(s), ${result.generated_files.length} files written.`);

    //Return statement
    return result;
  }
};

if (require.main === module) {
  let force_flag = process.argv.includes("--force-eval");
  let only_arg = process.argv.find(function (arg0_a) { return arg0_a.startsWith("--only="); });
  let only_id = only_arg ? only_arg.slice(7).trim() : "";
  IntelltePipeline.runAll({
    force_eval: force_flag,
    only_concept_id: only_id
  }).catch(function (arg0_err) {
    console.error("[Intellte] Pipeline fatal error:", arg0_err);
    process.exit(1);
  });
}

module.exports = { IntelltePipeline };

