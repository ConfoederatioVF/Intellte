let child_process = require("child_process");
let fs = require("fs");
let path = require("path");
let { IntellteDiscovery } = require("./A_discover_records.js");
let { IntellteJson5Parser } = require("./json5_parser.js");
let { MarkdownRenderer } = require("./MarkdownRenderer.js");

let sync_viscount_region = {
  /**
   * Parses CLI arguments of the form `--key=value` or `--flag`.
   *
   * @param {Array<string>} arg0_argv
   *
   * @returns {Object}
   */
  parseArgs: function (arg0_argv) {
    //Convert from parameters
    let argv = Array.isArray(arg0_argv) ? arg0_argv : [];

    //Declare local instance variables
    let args_obj = {};

    //Function body
    for (let i = 0; i < argv.length; i++) {
      let token = String(argv[i] || "");
      if (!token.startsWith("--")) continue;
      let eq_idx = token.indexOf("=");
      if (eq_idx > 2) {
        args_obj[token.slice(2, eq_idx)] = token.slice(eq_idx + 1);
      } else {
        args_obj[token.slice(2)] = true;
      }
    }

    //Return statement
    return args_obj;
  },


  /**
   * Copies `arg0_src` to `arg1_dst` only when missing or modified (comparing size and mtimeMs).
   *
   * @param {string} arg0_src
   * @param {string} arg1_dst
   *
   * @returns {boolean} True if file was copied
   */
  copyFileIfChanged: function (arg0_src, arg1_dst) {
    //Convert from parameters
    let dst_path = arg1_dst;
    let src_path = arg0_src;

    //Guard clauses
    if (!src_path || !fs.existsSync(src_path)) return false;

    //Declare local instance variables
    let src_stat = fs.statSync(src_path);

    //Function body
    if (fs.existsSync(dst_path)) {
      let dst_stat = fs.statSync(dst_path);
      if (dst_stat.size === src_stat.size && Math.abs(dst_stat.mtimeMs - src_stat.mtimeMs) <= 1000)
        return false;
    }

    fs.mkdirSync(path.dirname(dst_path), { recursive: true });
    fs.copyFileSync(src_path, dst_path);
    try {
      fs.utimesSync(dst_path, src_stat.atime, src_stat.mtime);
    } catch (e) {}

    //Return statement
    return true;
  },


  /**
   * Formats a directory segment such as `1.entire_country` into `"1. Entire Country"`.
   *
   * @param {string} arg0_folder_key
   *
   * @returns {string}
   */
  formatFolderLabel: function (arg0_folder_key) {
    //Convert from parameters
    let raw = String(arg0_folder_key || "").trim();

    //Guard clauses
    if (!raw) return "General";

    //Declare local instance variables
    let match = raw.match(/^(\d+)\.(.+)$/);
    let prefix = match ? `${match[1]}. ` : "";
    let slug = match ? match[2] : raw;
    let words = slug.split("_").filter(Boolean).map(function (arg0_w) {
      let lower = arg0_w.toLowerCase();
      if (lower === "and" || lower === "of" || lower === "in" || lower === "the")
        return lower;
      return arg0_w.charAt(0).toUpperCase() + arg0_w.slice(1);
    });

    //Return statement
    return prefix + words.join(" ");
  },


  /**
   * Recursively collects relevant Viscount working-paper artefacts inside SVEA's `population_regional/<PROJECT>`.
   *
   * @param {string} arg0_dir_abs
   * @param {string} arg1_rel_prefix
   * @param {Array<Object>} arg2_out
   *
   * @returns {Array<Object>}
   */
  collectSyncableFiles: function (arg0_dir_abs, arg1_rel_prefix, arg2_out) {
    //Convert from parameters
    let dir_abs = arg0_dir_abs;
    let rel_prefix = (arg1_rel_prefix) ? arg1_rel_prefix : "";
    let out = Array.isArray(arg2_out) ? arg2_out : [];

    //Guard clauses
    if (!dir_abs || !fs.existsSync(dir_abs)) return out;

    //Declare local instance variables
    let entries = fs.readdirSync(dir_abs, { withFileTypes: true }).sort(function (arg0_a, arg1_b) {
      return arg0_a.name.localeCompare(arg1_b.name);
    });

    //Function body
    for (let i = 0; i < entries.length; i++) {
      let entry = entries[i];
      let abs_path = path.join(dir_abs, entry.name);
      let rel_path = rel_prefix ? `${rel_prefix}/${entry.name}` : entry.name;

      if (entry.isDirectory()) {
        if (entry.name === "1.kriged_rasters" || entry.name === "2.population_rasters" || entry.name === "_gis_cache" || entry.name === "diagnostics_visual" || entry.name === "geojson" || entry.name === "images" || entry.name.endsWith("_files"))
          continue;
        sync_viscount_region.collectSyncableFiles(abs_path, rel_path, out);
      } else if (entry.isFile()) {
        if (
          /\.(Rmd|pdf|bib|json5|R|py|cls|csl|md)$/i.test(entry.name) ||
          /_(?:settlements|metadata|diagnostics|manifest)\.json$/i.test(entry.name) ||
          (/\.(png)$/i.test(entry.name) && (rel_path.includes("/figures/") || rel_path.startsWith("figures/") || entry.name.endsWith("_areal_mask.png")))
        ) {
          if (entry.name === "template.tex") continue;
          out.push({ abs: abs_path, rel: rel_path });
        }
      }
    }

    //Return statement
    return out;
  },


  /**
   * Synchronises one Operation Viscount regional project from SVEA into Intellte (`papers/viscount/<concept_id>/`
   * and `common/metadata/viscount/<concept_id>.json5`).
   *
   * @param {Object} arg0_options
   *  @param {string} arg0_options.project - Viscount key (e.g. `"POLARIS"`) or concept id (`"project_polaris"`)
   *  @param {string} [arg0_options.intellte_root]
   *  @param {string} [arg0_options.svea_root="F:/Active Projects/Project 1509 - SVEA"]
   *  @param {boolean} [arg0_options.build=false]
   *
   * @returns {Object} Sync summary
   */
  syncProject: function (arg0_options) {
    //Convert from parameters
    let options = (arg0_options) ? arg0_options : {};

    //Declare local instance variables
    let build_after = Boolean(options.build);
    let copied_count = 0;
    let intellte_root = path.resolve(options.intellte_root || path.resolve(__dirname, "../../.."));
    let project_arg = String(options.project || "").trim();
    let svea_root = path.resolve(options.svea_root || "F:/Active Projects/Project 1509 - SVEA");
    let viscount_reg_path = path.join(svea_root, "histmap/2.data_cleaning/population_Stadester/config/viscount_precedence.json5");

    //Guard clauses
    if (!project_arg) {
      console.error("[sync_viscount_region] Missing required --project=<KEY> argument.");
      return { copied_count: 0, success: false };
    }
    if (!fs.existsSync(viscount_reg_path)) {
      console.error(`[sync_viscount_region] Registry missing at ${viscount_reg_path}`);
      return { copied_count: 0, success: false };
    }

    //Function body
    let reg_obj = IntellteJson5Parser.parseFile(viscount_reg_path);
    let projects = Array.isArray(reg_obj && reg_obj.projects) ? reg_obj.projects : [];
    let norm_arg = project_arg.toLowerCase();
    let matched_proj = null;

    for (let i = 0; i < projects.length; i++) {
      let p = projects[i];
      if (
        String(p.key).toLowerCase() === norm_arg ||
        String(p.slug).toLowerCase() === norm_arg ||
        String(p.intellte_concept_id).toLowerCase() === norm_arg
      ) {
        matched_proj = p;
        break;
      }
    }

    if (!matched_proj) {
      console.error(`[sync_viscount_region] Unknown Viscount project: ${project_arg}`);
      return { copied_count: 0, success: false };
    }

    let concept_id = matched_proj.intellte_concept_id;
    let dst_paper_dir = path.join(intellte_root, "papers/viscount", concept_id);
    let src_paper_dir = path.join(svea_root, "histmap/1.data_raw/population_regional", matched_proj.key);

    if (!fs.existsSync(src_paper_dir)) {
      console.error(`[sync_viscount_region] Source folder missing: ${src_paper_dir}`);
      return { copied_count: 0, success: false };
    }

    let files_to_sync = sync_viscount_region.collectSyncableFiles(src_paper_dir, "", []);
    for (let i = 0; i < files_to_sync.length; i++) {
      let f = files_to_sync[i];
      let dst_abs = path.join(dst_paper_dir, f.rel);
      if (sync_viscount_region.copyFileIfChanged(f.abs, dst_abs))
        copied_count++;
    }

    //Sync shared regional helpers if present inside population_regional/_shared
    let shared_src = path.join(svea_root, "histmap/1.data_raw/population_regional/_shared");
    let shared_dst = path.join(intellte_root, "papers/viscount/_shared");
    if (fs.existsSync(shared_src)) {
      let shared_files = sync_viscount_region.collectSyncableFiles(shared_src, "", []);
      for (let i = 0; i < shared_files.length; i++) {
        let sf = shared_files[i];
        if (sync_viscount_region.copyFileIfChanged(sf.abs, path.join(shared_dst, sf.rel)))
          copied_count++;
      }
    }

    //Discover .Rmd manuscripts and incrementally update common/metadata/viscount/<concept_id>.json5
    let meta_path = path.join(intellte_root, "common/metadata/viscount", `${concept_id}.json5`);
    let existing_meta = fs.existsSync(meta_path) ? IntellteJson5Parser.parseFile(meta_path) : {};
    let existing_proj = (existing_meta && existing_meta[concept_id]) ? existing_meta[concept_id] : {
      child_repo_path: "papers/viscount",
      is_synthetic: true,
      project_name: `Project ${matched_proj.key.charAt(0)}${matched_proj.key.slice(1).toLowerCase()}`,
      record_type: "Working Paper",
      tags: ["synthetic", "anthropology", "archaeology", "cartography", "demography", "historiography", "urban-history", "urban-statistics"],
      versions: []
    };

    let existing_by_rmd = new Map();
    let existing_versions = Array.isArray(existing_proj.versions) ? existing_proj.versions : [];
    for (let i = 0; i < existing_versions.length; i++) {
      if (existing_versions[i].rmd_path)
        existing_by_rmd.set(existing_versions[i].rmd_path.replace(/\\/g, "/"), existing_versions[i]);
    }

    let renderer = new MarkdownRenderer({ root_dir: intellte_root });
    let rmd_rel_files = files_to_sync
      .filter(function (arg0_f) { return arg0_f.rel.toLowerCase().endsWith(".rmd"); })
      .map(function (arg0_f) { return arg0_f.rel.replace(/\\/g, "/"); });

    let added_versions = 0;
    for (let i = 0; i < rmd_rel_files.length; i++) {
      let rel_rmd = rmd_rel_files[i];
      let full_rmd_rel = `${concept_id}/${rel_rmd}`;
      if (existing_by_rmd.has(full_rmd_rel)) continue;

      let rmd_abs = path.join(dst_paper_dir, rel_rmd);
      let fm = renderer.parseFrontmatter(fs.readFileSync(rmd_abs, "utf8")).frontmatter || {};
      let segments = rel_rmd.split("/");
      let folder_key = segments.length >= 2 ? segments[0] : "";
      let is_settlements = rel_rmd.endsWith("_settlements.Rmd");
      let is_top = segments.length === 1;
      let stem_base = path.basename(rel_rmd, ".Rmd").replace(/_literature_review$|_settlements$/i, "");
      let fig_dir = path.join(path.dirname(rmd_abs), "figures");
      let fig_list = [];

      if (fs.existsSync(fig_dir)) {
        let pngs = fs.readdirSync(fig_dir).filter(function (arg0_f) { return arg0_f.toLowerCase().endsWith(".png"); }).sort();
        for (let x = 0; x < pngs.length; x++) {
          let fig_rel = `${concept_id}/${path.dirname(rel_rmd) === "." ? "" : path.dirname(rel_rmd) + "/"}figures/${pngs[x]}`;
          fig_list.push({ key: path.basename(pngs[x], ".png"), path: fig_rel.replace(/\\/g, "/") });
        }
      }

      let ver_slug = is_top ? "1.0" : (is_settlements ? `1.0-${stem_base.replace(/_/g, "-")}-settlements` : `1.0-${stem_base.replace(/_/g, "-")}`);
      let rel_dir_prefix = path.dirname(rel_rmd) === "." ? concept_id : `${concept_id}/${path.dirname(rel_rmd)}`;
      let pdf_cand = path.basename(rel_rmd, ".Rmd") + ".pdf";
      let bib_cand = path.basename(rel_rmd, ".Rmd").replace(/_settlements$/i, "_literature_review") + ".bib";
      let alt_bib_cand = path.basename(rel_rmd, ".Rmd") + ".bib";
      let resolved_bib = fs.existsSync(path.join(path.dirname(rmd_abs), alt_bib_cand)) ? `${rel_dir_prefix}/${alt_bib_cand}` :
        (fs.existsSync(path.join(path.dirname(rmd_abs), bib_cand)) ? `${rel_dir_prefix}/${bib_cand}` : undefined);

      let new_entry = {
        authors: fm.author ? [{ division: "CRD", name: String(fm.author).trim() }] : [{ division: "CRD", name: "Aust Kätzchen" }],
        bib_path: resolved_bib,
        csl_path: "../core/rticles/intellte/skeleton/crd-mla-numeric.csl",
        dataset_path: fs.existsSync(path.join(path.dirname(rmd_abs), `${stem_base}_settlements.json`)) ? `${rel_dir_prefix}/${stem_base}_settlements.json` : undefined,
        figures: fig_list,
        folder_key: folder_key || undefined,
        folder_label: folder_key ? sync_viscount_region.formatFolderLabel(folder_key) : undefined,
        hero_figure: fm.hero_figure ? `${rel_dir_prefix}/${String(fm.hero_figure).replace(/^\.\//, "")}` : (fig_list[0] ? fig_list[0].path : undefined),
        is_latest: is_top,
        is_synthetic: true,
        label: is_top ? `${matched_proj.key} (1.0)` : (is_settlements ? "Settlement Gazetteer (1.0)" : `${sync_viscount_region.formatFolderLabel(stem_base)} (1.0)`),
        parent_version: is_settlements ? `1.0-${stem_base.replace(/_/g, "-")}` : undefined,
        pdf_path: fs.existsSync(path.join(path.dirname(rmd_abs), pdf_cand)) ? `${rel_dir_prefix}/${pdf_cand}` : undefined,
        published_date: fm.date ? String(fm.date).trim() : undefined,
        rmd_path: full_rmd_rel,
        source_papers_dir: fs.existsSync(path.join(path.dirname(rmd_abs), "papers")) ? `${rel_dir_prefix}/papers` : undefined,
        status: "Published",
        version: ver_slug
      };

      //Remove undefined keys cleanly
      Object.keys(new_entry).forEach(function (arg0_k) {
        if (new_entry[arg0_k] === undefined) delete new_entry[arg0_k];
      });
      existing_versions.push(new_entry);
      existing_by_rmd.set(full_rmd_rel, new_entry);
      added_versions++;
    }

    if (added_versions > 0 || !fs.existsSync(meta_path)) {
      fs.mkdirSync(path.dirname(meta_path), { recursive: true });
      let out_obj = {};
      out_obj[concept_id] = existing_proj;
      fs.writeFileSync(meta_path, JSON.stringify(out_obj, null, 2), "utf8");
    }

    console.log(`[sync_viscount_region] ${matched_proj.key} -> ${concept_id}: copied ${copied_count} changed file(s), ${added_versions} new version(s) registered.`);

    if (build_after) {
      let pipeline_js = path.join(intellte_root, "core/framework/node/run_pipeline.js");
      let build_res = child_process.spawnSync(process.execPath, [pipeline_js, `--only=${concept_id}`], {
        cwd: intellte_root,
        stdio: "inherit"
      });
      if (build_res.status !== 0) {
        console.error(`[sync_viscount_region] Pipeline compilation failed for ${concept_id} (exit=${build_res.status}).`);
        return {
          added_versions: added_versions,
          concept_id: concept_id,
          copied_count: copied_count,
          meta_path: meta_path,
          success: false
        };
      }
    }

    //Return statement
    return {
      added_versions: added_versions,
      concept_id: concept_id,
      copied_count: copied_count,
      meta_path: meta_path,
      success: true
    };
  }
};

if (require.main === module) {
  let cli_args = sync_viscount_region.parseArgs(process.argv.slice(2));
  let res = sync_viscount_region.syncProject({
    build: Boolean(cli_args.build),
    project: cli_args.project,
    svea_root: cli_args["svea-root"] || cli_args.svea_root
  });
  process.exit(res.success ? 0 : 1);
}

module.exports = { sync_viscount_region };
