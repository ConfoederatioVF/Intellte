let fs = require("fs");
let path = require("path");
let { MarkdownRenderer } = require("./MarkdownRenderer.js");

let IntellteDiscovery = {
  /**
   * Step A: Discovers all working paper records, versions, tags, and child repository paths.
   *
   * @param {Object} [arg0_options] - Options (`root_dir`).
   * @return {Object} Manifest containing `defines`, `localisation`, and enriched `records`.
   */
  A_discoverRecords: function (arg0_options) {
    //Convert from parameters
    let options = (arg0_options) ? arg0_options : {};

    //Initialise options
    let root_dir = (options.root_dir) ? options.root_dir : path.resolve(__dirname, "../../..");

    //Declare local instance variables
    let defines_path = path.join(root_dir, "common/defines/intellte_defines.json5");
    let defines_obj = IntellteDiscovery.parseJson5File(defines_path);
    let enriched_records = [];
    let localisation_obj = IntellteDiscovery.loadLocalisationMap(root_dir);
    let registry_path = path.join(root_dir, "common/metadata/records_registry.json5");
    let registry_obj = IntellteDiscovery.parseJson5File(registry_path);
    let renderer = new MarkdownRenderer({
      root_dir: root_dir,
      rscript_path: defines_obj.rscript_path
    });
    let raw_records = (registry_obj && Array.isArray(registry_obj.records)) ? registry_obj.records : [];

    for (let i = 0; i < raw_records.length; i++) {
      let local_rec = raw_records[i];
      let child_repo_abs = path.join(root_dir, local_rec.child_repo_path || "");
      let enriched_versions = [];
      let raw_versions = Array.isArray(local_rec.versions) ? local_rec.versions : [];

      for (let x = 0; x < raw_versions.length; x++) {
        let local_ver = raw_versions[x];
        let rmd_abs = path.join(child_repo_abs, local_ver.rmd_path || "");
        let pdf_abs = path.join(child_repo_abs, local_ver.pdf_path || "");
        let bib_abs = path.join(child_repo_abs, local_ver.bib_path || "");
        let fm = {};

        if (fs.existsSync(rmd_abs)) {
          let parsed = renderer.parseFrontmatter(fs.readFileSync(rmd_abs, "utf8"));
          fm = parsed.frontmatter;
        }

        let artefact_base_url = `/artefacts/${local_rec.concept_id}/${local_ver.version}`;
        enriched_versions.push({
          artefact_base_url: artefact_base_url,
          authors_line: fm.authors_line || "Confoederatio, Research Division",
          bib_abs: bib_abs,
          bib_filename: path.basename(bib_abs),
          date: fm.date || local_ver.published_date || "",
          emails: Array.isArray(fm.emails) ? fm.emails : [],
          figures: Array.isArray(local_ver.figures) ? local_ver.figures : [],
          frontmatter: fm,
          hero_caption: fm.hero_caption || "",
          hero_figure_rel: local_ver.hero_figure || fm.hero_figure || "",
          is_latest: (local_ver.version === local_rec.latest_version),
          pdf_abs: pdf_abs,
          pdf_filename: path.basename(pdf_abs),
          pdf_url: `${artefact_base_url}/${path.basename(pdf_abs)}`,
          published_date: local_ver.published_date || fm.date || "",
          published_iso_gmt: local_ver.published_iso_gmt || "2026-10-28T00:00:00Z",
          record_id: local_ver.record_id || `${local_rec.concept_id}-${local_ver.version}`,
          rmd_abs: rmd_abs,
          rmd_filename: path.basename(rmd_abs),
          rmd_url: `${artefact_base_url}/${path.basename(rmd_abs)}`,
          route_url: (local_ver.version === local_rec.latest_version) ? `/records/${local_rec.concept_id}/` : `/records/${local_rec.concept_id}/${local_ver.version}/`,
          status: local_ver.status || "Published",
          subtitle: fm.subtitle || "",
          supplementary_markdown: Array.isArray(local_ver.supplementary_markdown) ? local_ver.supplementary_markdown : [],
          title: fm.title || local_rec.project_name || local_rec.concept_id,
          version: local_ver.version,
          version_route_url: `/records/${local_rec.concept_id}/${local_ver.version}/`
        });
      }

      enriched_records.push({
        child_repo_abs: child_repo_abs,
        child_repo_path: local_rec.child_repo_path,
        concept_id: local_rec.concept_id,
        latest_version: local_rec.latest_version,
        project_id: local_rec.project_id,
        project_name: local_rec.project_name,
        record_type: local_rec.record_type || "Working Paper",
        tags: Array.isArray(local_rec.tags) ? local_rec.tags : [],
        versions: enriched_versions
      });
    }

    //Return statement
    return {
      defines: defines_obj,
      localisation: localisation_obj,
      records: enriched_records,
      root_dir: root_dir
    };
  },


  /**
   * Loads EN-GB, FR, and DE localisation files from `/localisation/`.
   *
   * @param {string} arg0_root_dir - Intellte root directory.
   * @return {Object} Map of locale code to localisation strings.
   */
  loadLocalisationMap: function (arg0_root_dir) {
    //Convert from parameters
    let root_dir = arg0_root_dir;

    //Declare local instance variables
    let loc_dir = path.join(root_dir, "localisation");
    let loc_files = ["en_gb.json5", "fr.json5", "de.json5"];
    let loc_map = {};

    for (let i = 0; i < loc_files.length; i++) {
      let f_path = path.join(loc_dir, loc_files[i]);
      if (fs.existsSync(f_path)) {
        let parsed = IntellteDiscovery.parseJson5File(f_path);
        if (parsed && parsed.locale) {
          loc_map[parsed.locale] = parsed;
        }
      }
    }

    //Return statement
    return loc_map;
  },


  /**
   * Parses a JSON5 file into a JavaScript object.
   *
   * @param {string} arg0_file_path - Path to the .json5 file.
   * @return {Object} Parsed object.
   */
  parseJson5File: function (arg0_file_path) {
    //Convert from parameters
    let file_path = arg0_file_path;

    //Declare local instance variables
    let clean_lines = [];
    let json_text = "";
    let raw_lines = [];

    //Guard clauses
    if (!file_path || !fs.existsSync(file_path)) {
      console.error(`[IntellteDiscovery] JSON5 file not found: ${file_path}`);
      return {};
    }

    raw_lines = fs.readFileSync(file_path, "utf8").split(/\r?\n/);
    for (let i = 0; i < raw_lines.length; i++) {
      let local_line = raw_lines[i];
      local_line = local_line.replace(/^\s*\/\/.*$/, "");
      local_line = local_line.replace(/(?<![:\\])\/\/.*$/, "");
      if (local_line.trim().length > 0) {
        clean_lines.push(local_line);
      }
    }

    json_text = clean_lines.join("\n");
    json_text = json_text.replace(/\/\*[\s\S]*?\*\//g, "");
    json_text = json_text.replace(/([\{,\n]\s*)([A-Za-z0-9_-]+)\s*:/g, '$1"$2":');
    json_text = json_text.replace(/,(\s*[\}\]])/g, "$1");

    //Return statement
    return JSON.parse(json_text);
  }
};

module.exports = { IntellteDiscovery };

