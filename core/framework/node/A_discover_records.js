let fs = require("fs");
let path = require("path");
let { BibCompiler } = require("./BibCompiler.js");
let { IntellteJson5Parser } = require("./json5_parser.js");
let { MarkdownRenderer } = require("./MarkdownRenderer.js");

let IntellteDiscovery = {
  /**
   * Step A: Discovers all working paper records, versions, tags and child repository paths across `common/metadata/*.json5`.
   *
   * @param {Object} [arg0_options] - Options (`root_dir`).
   * @return {Object} Manifest containing `defines`, `localisation` and enriched `records`.
   */
  A_discoverRecords: function (arg0_options) {
    //Convert from parameters
    let options = (arg0_options) ? arg0_options : {};

    //Initialise options
    let root_dir = (options.root_dir) ? options.root_dir : path.resolve(__dirname, "../../..");

    //Declare local instance variables
    let all_concept_ids = [];
    let bib_compiler = null;
    let defines_path = path.join(root_dir, "common/defines/intellte_defines.json5");
    let defines_obj = IntellteDiscovery.parseJson5File(defines_path);
    let enriched_records = [];
    let localisation_obj = IntellteDiscovery.loadLocalisationMap(root_dir);
    let metadata_dir = path.join(root_dir, defines_obj?.directories?.common_metadata ?? "common/metadata");
    let registry_obj = IntellteDiscovery.loadMetadataRegistry(metadata_dir);
    let renderer = new MarkdownRenderer({
      root_dir: root_dir,
      rscript_path: defines_obj.rscript_path
    });

    bib_compiler = new BibCompiler({
      cache_path: path.join(root_dir, defines_obj?.directories?.docs_bib_cache ?? "docs/.vitepress/cache/doi_bib_cache.json"),
      root_dir: root_dir
    });

    all_concept_ids = Object.keys(registry_obj);
    for (let i = 0; i < all_concept_ids.length; i++) {
      let local_key = all_concept_ids[i];
      let local_rec = registry_obj[local_key];
      let concept_id = local_rec.concept_id || local_key;
      let child_repo_rel = local_rec.child_repo_path || `papers/${concept_id}`;
      let child_repo_abs = path.join(root_dir, child_repo_rel);
      let enriched_versions = [];
      let raw_versions = Array.isArray(local_rec.versions) ? local_rec.versions : [];
      let resolved_latest_version = "";

      for (let x = 0; x < raw_versions.length; x++) {
        let local_ver = raw_versions[x];
        let fm = {};
        let pdf_abs = (local_ver.pdf_path) ? path.join(child_repo_abs, local_ver.pdf_path) : "";
        let rmd_abs = (local_ver.rmd_path) ? path.join(child_repo_abs, local_ver.rmd_path) : "";

        let has_pdf = Boolean(pdf_abs && fs.existsSync(pdf_abs));
        let has_rmd = Boolean(rmd_abs && fs.existsSync(rmd_abs));

        if (has_rmd) {
          let parsed = renderer.parseFrontmatter(fs.readFileSync(rmd_abs, "utf8"));
          fm = parsed.frontmatter;
        }

        let artefact_base_url = `/artefacts/${concept_id}/${local_ver.version}`;
        let local_author_meta = IntellteDiscovery.normaliseVersionAuthors(local_ver, fm, defines_obj);
        let local_bib_meta = IntellteDiscovery.resolveAndCompileVersionBib(
          local_ver,
          child_repo_abs,
          rmd_abs,
          fm,
          bib_compiler
        );
        let bib_abs = local_bib_meta.bib_abs;
        let local_published_date = local_ver.published_date || fm.date || "";
        let version_route_url = `/records/${concept_id}/${local_ver.version}/`;

        enriched_versions.push({
          abstract_excerpt: local_ver.abstract_excerpt || "",
          artefact_base_url: artefact_base_url,
          authors: local_author_meta.authors,
          authors_line: local_author_meta.authors_line,
          bib_abs: bib_abs,
          bib_filename: (bib_abs) ? path.basename(bib_abs) : "",
          date: local_published_date,
          divisions: local_author_meta.divisions,
          emails: Array.isArray(fm.emails) ? fm.emails : [],
          figures: Array.isArray(local_ver.figures) ? local_ver.figures : [],
          frontmatter: fm,
          has_pdf: has_pdf,
          has_rmd: has_rmd,
          hero_caption: fm.hero_caption || "",
          hero_figure_rel: local_ver.hero_figure || fm.hero_figure || "",
          is_latest: false,
          pdf_abs: pdf_abs,
          pdf_filename: (has_pdf) ? path.basename(pdf_abs) : "",
          pdf_url: (has_pdf) ? `${artefact_base_url}/${encodeURI(path.basename(pdf_abs))}` : null,
          published_date: local_published_date,
          published_timestamp: IntellteDiscovery.parsePublishedTimestamp(local_published_date),
          record_id: local_ver.record_id || `${concept_id}-${local_ver.version}`,
          rmd_abs: rmd_abs,
          rmd_filename: (has_rmd) ? path.basename(rmd_abs) : "",
          rmd_url: (has_rmd) ? `${artefact_base_url}/${encodeURI(path.basename(rmd_abs))}` : null,
          route_url: version_route_url,
          sources_abs: local_bib_meta.sources_abs,
          sources_filename: local_bib_meta.sources_filename,
          status: local_ver.status || "Published",
          subtitle: local_ver.subtitle || fm.subtitle || "",
          supplementary_markdown: Array.isArray(local_ver.supplementary_markdown) ? local_ver.supplementary_markdown : [],
          title: local_ver.title || fm.title || local_rec.project_name || concept_id,
          version: local_ver.version,
          version_route_url: version_route_url
        });
      }

      resolved_latest_version = IntellteDiscovery.resolveLatestVersion(enriched_versions);
      for (let x = 0; x < enriched_versions.length; x++) {
        enriched_versions[x].is_latest = (enriched_versions[x].version === resolved_latest_version);
        if (enriched_versions[x].is_latest) {
          enriched_versions[x].route_url = `/records/${concept_id}/`;
        }
      }

      enriched_records.push({
        child_repo_abs: child_repo_abs,
        child_repo_path: child_repo_rel,
        concept_id: concept_id,
        latest_version: resolved_latest_version,
        project_name: local_rec.project_name || concept_id,
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
   * Recursively collects all `.json5` and `.json` file paths inside a directory in deterministic sorted order.
   *
   * @param {string} arg0_dir_path - Absolute directory path to scan.
   * @return {string[]} Sorted array of absolute `.json5` / `.json` file paths.
   */
  collectJsonFilesRecursively: function (arg0_dir_path) {
    //Convert from parameters
    let dir_path = arg0_dir_path;

    //Declare local instance variables
    let entries_array = [];
    let file_paths_array = [];

    //Guard clauses
    if (!dir_path || !fs.existsSync(dir_path)) return file_paths_array;

    entries_array = fs.readdirSync(dir_path, { withFileTypes: true })
      .sort((arg0_a, arg1_b) => arg0_a.name.localeCompare(arg1_b.name));

    for (let i = 0; i < entries_array.length; i++) {
      let local_entry = entries_array[i];
      let full_path = path.join(dir_path, local_entry.name);

      if (local_entry.isDirectory()) {
        let nested_files = IntellteDiscovery.collectJsonFilesRecursively(full_path);
        for (let x = 0; x < nested_files.length; x++)
          file_paths_array.push(nested_files[x]);
      } else if (local_entry.isFile() && /\.json5?$/i.test(local_entry.name)) {
        file_paths_array.push(full_path);
      }
    }

    //Return statement
    return file_paths_array;
  },


  /**
   * Compares two dot/hyphen-separated version strings numerically per segment.
   *
   * @param {string} arg0_ver_a - First version identifier.
   * @param {string} arg1_ver_b - Second version identifier.
   * @return {number} Positive if `arg0_ver_a > arg1_ver_b`, negative if smaller, `0` if equal.
   */
  compareVersionStrings: function (arg0_ver_a, arg1_ver_b) {
    //Convert from parameters
    let ver_a = String(arg0_ver_a || "");
    let ver_b = String(arg1_ver_b || "");

    //Declare local instance variables
    let max_len = 0;
    let parts_a = ver_a.split(/[.\-_]/);
    let parts_b = ver_b.split(/[.\-_]/);

    max_len = Math.max(parts_a.length, parts_b.length);
    for (let i = 0; i < max_len; i++) {
      let seg_a = parts_a[i] ?? "0";
      let seg_b = parts_b[i] ?? "0";
      let num_a = Number(seg_a);
      let num_b = Number(seg_b);

      if (Number.isFinite(num_a) && Number.isFinite(num_b)) {
        if (num_a !== num_b) return num_a - num_b;
      } else if (Number.isFinite(num_a)) {
        return 1;
      } else if (Number.isFinite(num_b)) {
        return -1;
      } else {
        let lex_cmp = String(seg_a).localeCompare(String(seg_b), undefined, {
          numeric: true,
          sensitivity: "base"
        });
        if (lex_cmp !== 0) return lex_cmp;
      }
    }

    //Return statement
    return 0;
  },


  /**
   * Formats an array of strings as a natural-language list in non-Oxford British English (`A, B and C`).
   *
   * @param {string[]} arg0_items_array - Input display strings.
   * @return {string} Formatted natural-language list.
   */
  formatNaturalList: function (arg0_items_array) {
    //Convert from parameters
    let items_array = Array.isArray(arg0_items_array) ? arg0_items_array : [];

    //Declare local instance variables
    let clean_array = [];

    for (let i = 0; i < items_array.length; i++) {
      let local_item = String(items_array[i] || "").trim();
      if (local_item) clean_array.push(local_item);
    }

    //Guard clauses
    if (clean_array.length === 0) return "";
    if (clean_array.length === 1) return clean_array[0];
    if (clean_array.length === 2) return `${clean_array[0]} and ${clean_array[1]}`;

    //Return statement
    return `${clean_array.slice(0, -1).join(", ")} and ${clean_array[clean_array.length - 1]}`;
  },


  /**
   * Loads EN-GB, FR and DE localisation files from `/localisation/`.
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
   * Recursively scans `common/metadata/` and merges all per-project `.json5` / `.json` dictionaries into a single keyed object.
   *
   * @param {string} arg0_metadata_dir - Absolute path to the metadata directory.
   * @return {Object} Dictionary mapping `<concept_id>` to its project metadata object.
   */
  loadMetadataRegistry: function (arg0_metadata_dir) {
    //Convert from parameters
    let metadata_dir = arg0_metadata_dir;

    //Declare local instance variables
    let all_file_paths = [];
    let merged_registry_obj = {};

    //Guard clauses
    if (!metadata_dir || !fs.existsSync(metadata_dir)) {
      console.error(`[IntellteDiscovery] Metadata directory not found: ${metadata_dir}`);
      return merged_registry_obj;
    }

    all_file_paths = IntellteDiscovery.collectJsonFilesRecursively(metadata_dir);

    for (let i = 0; i < all_file_paths.length; i++) {
      let file_path = all_file_paths[i];
      let parsed_obj = IntellteDiscovery.parseJson5File(file_path);
      let all_keys = Object.keys(parsed_obj || {});

      for (let x = 0; x < all_keys.length; x++) {
        let local_key = all_keys[x];
        let local_val = parsed_obj[local_key];
        if (local_val && typeof local_val === "object" && !Array.isArray(local_val)) {
          merged_registry_obj[local_key] = local_val;
        }
      }
    }

    //Return statement
    return merged_registry_obj;
  },


  /**
   * Normalises per-version author objects, division affiliations and display `authors_line`.
   *
   * @param {Object} arg0_ver_obj - Raw version metadata entry from `common/metadata/*.json5`.
   * @param {Object} arg1_frontmatter_obj - Parsed `.Rmd` YAML frontmatter object.
   * @param {Object} arg2_defines_obj - Repository defines object containing `divisions`.
   * @return {Object} Normalised `{ authors, authors_line, divisions }` payload.
   */
  normaliseVersionAuthors: function (arg0_ver_obj, arg1_frontmatter_obj, arg2_defines_obj) {
    //Convert from parameters
    let ver_obj = (arg0_ver_obj) ? arg0_ver_obj : {};
    let frontmatter_obj = (arg1_frontmatter_obj) ? arg1_frontmatter_obj : {};
    let defines_obj = (arg2_defines_obj) ? arg2_defines_obj : {};

    //Declare local instance variables
    let authors_array = [];
    let authors_line = "";
    let default_div_obj = IntellteDiscovery.resolveDivisionEntry("", defines_obj);
    let divisions_array = [];
    let fallback_line = "";
    let has_explicit_authors = Array.isArray(ver_obj.authors) && ver_obj.authors.length > 0;
    let seen_divisions_obj = {};

    if (has_explicit_authors) {
      for (let i = 0; i < ver_obj.authors.length; i++) {
        let local_entry = ver_obj.authors[i];
        let local_div_key = "";
        let local_name = "";

        if (typeof local_entry === "string") {
          local_name = local_entry.trim();
        } else if (local_entry && typeof local_entry === "object") {
          local_div_key = String(local_entry.division || local_entry.affiliation || "").trim();
          local_name = String(local_entry.name || "").trim();
        }

        if (local_name) {
          let local_resolved = IntellteDiscovery.resolveDivisionEntry(local_div_key, defines_obj);
          authors_array.push({
            acronym: local_resolved.acronym,
            affiliation: local_resolved.affiliation,
            name: local_name
          });
        }
      }
    } else {
      fallback_line = String(ver_obj.authors_line || frontmatter_obj.authors_line || "").trim();
      if (fallback_line && fallback_line !== default_div_obj.affiliation) {
        let local_parts = fallback_line.split(/\s*;\s*|\s+and\s+/i);
        for (let i = 0; i < local_parts.length; i++) {
          let local_name = local_parts[i].trim();
          if (local_name) {
            authors_array.push({
              acronym: default_div_obj.acronym,
              affiliation: default_div_obj.affiliation,
              name: local_name
            });
          }
        }
      }
    }

    if (authors_array.length === 0) {
      authors_array.push({
        acronym: default_div_obj.acronym,
        affiliation: default_div_obj.affiliation,
        name: default_div_obj.affiliation
      });
    }

    if (ver_obj.authors_line) {
      authors_line = String(ver_obj.authors_line).trim();
    } else if (!has_explicit_authors && frontmatter_obj.authors_line) {
      authors_line = String(frontmatter_obj.authors_line).trim();
    } else {
      authors_line = IntellteDiscovery.formatNaturalList(
        authors_array.map((arg0_author) => arg0_author.name)
      );
    }

    for (let i = 0; i < authors_array.length; i++) {
      let local_author = authors_array[i];
      let local_div_id = local_author.acronym || local_author.affiliation;
      if (local_div_id && !seen_divisions_obj[local_div_id]) {
        seen_divisions_obj[local_div_id] = true;
        divisions_array.push({
          acronym: local_author.acronym,
          affiliation: local_author.affiliation
        });
      }
    }

    //Return statement
    return {
      authors: authors_array,
      authors_line: authors_line,
      divisions: divisions_array
    };
  },


  /**
   * Parses a JSON5 file into a JavaScript object or array via `IntellteJson5Parser`.
   *
   * @param {string} arg0_file_path - Path to the .json5 file.
   * @return {*} Parsed object or array.
   */
  parseJson5File: function (arg0_file_path) {
    //Convert from parameters
    let file_path = arg0_file_path;

    //Return statement
    return IntellteJson5Parser.parseFile(file_path);
  },


  /**
   * Parses an EN-GB or ISO publication date string into a GMT+0 epoch timestamp in milliseconds.
   *
   * @param {string} arg0_date_str - Human-readable EN-GB date (e.g. `"28 October 2026"`) or ISO date.
   * @return {number} Epoch milliseconds in GMT+0, or `0` if unparseable.
   */
  parsePublishedTimestamp: function (arg0_date_str) {
    //Convert from parameters
    let date_str = String(arg0_date_str || "").trim();

    //Declare local instance variables
    let dmy_match = null;
    let fallback_ms = 0;
    let iso_match = null;
    let month_map = {
      apr: 3, april: 3,
      aug: 7, august: 7,
      dec: 11, december: 11,
      feb: 1, february: 1,
      jan: 0, january: 0,
      jul: 6, july: 6,
      jun: 5, june: 5,
      mar: 2, march: 2,
      may: 4,
      nov: 10, november: 10,
      oct: 9, october: 9,
      sep: 8, sept: 8, september: 8
    };

    //Guard clauses
    if (!date_str) return 0;

    dmy_match = date_str.match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);
    if (dmy_match) {
      let day_num = Number(dmy_match[1]);
      let month_idx = month_map[dmy_match[2].toLowerCase()];
      let year_num = Number(dmy_match[3]);
      if (month_idx !== undefined) {
        return Date.UTC(year_num, month_idx, day_num);
      }
    }

    iso_match = date_str.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (iso_match) {
      return Date.UTC(Number(iso_match[1]), Number(iso_match[2]) - 1, Number(iso_match[3]));
    }

    fallback_ms = Date.parse(date_str);

    //Return statement
    if (Number.isFinite(fallback_ms)) {
      return fallback_ms;
    } else {
      return 0;
    }
  },


  /**
   * Resolves `.json5` bibliography sources and automatically compiles them into the version's `.bib` file.
   *
   * @param {Object} arg0_ver_obj - Raw version metadata object from `common/metadata/*.json5`.
   * @param {string} arg1_child_repo_abs - Absolute path to the child repository root.
   * @param {string} arg2_rmd_abs - Absolute path to the version's `.Rmd` manuscript (if any).
   * @param {Object} arg3_fm_obj - Parsed `.Rmd` YAML frontmatter object.
   * @param {BibCompiler} arg4_bib_compiler - Shared `BibCompiler` instance.
   * @return {Object} `{ bib_abs, sources_abs, sources_filename }`.
   */
  resolveAndCompileVersionBib: function (arg0_ver_obj, arg1_child_repo_abs, arg2_rmd_abs, arg3_fm_obj, arg4_bib_compiler) {
    //Convert from parameters
    let ver_obj = (arg0_ver_obj) ? arg0_ver_obj : {};
    let child_repo_abs = arg1_child_repo_abs;
    let rmd_abs = arg2_rmd_abs || "";
    let fm_obj = (arg3_fm_obj) ? arg3_fm_obj : {};
    let bib_compiler = arg4_bib_compiler;

    //Declare local instance variables
    let bib_abs = "";
    let paper_dir = (rmd_abs) ? path.dirname(rmd_abs) : "";
    let raw_bib_rel = String(ver_obj.bib_path || "").trim();
    let raw_sources_rel = String(ver_obj.sources_path || "").trim();
    let sources_abs = "";

    if (raw_sources_rel) {
      sources_abs = path.join(child_repo_abs, raw_sources_rel);
    } else if (/\.json5?$/i.test(raw_bib_rel)) {
      sources_abs = path.join(child_repo_abs, raw_bib_rel);
    } else if (paper_dir) {
      let default_sources_cand = path.join(paper_dir, "sources.json5");
      if (fs.existsSync(default_sources_cand)) {
        sources_abs = default_sources_cand;
      } else if (raw_bib_rel) {
        let stem_cand = path.join(child_repo_abs, raw_bib_rel).replace(/\.bib$/i, ".json5");
        if (fs.existsSync(stem_cand)) sources_abs = stem_cand;
      }
    }

    if (raw_bib_rel && !/\.json5?$/i.test(raw_bib_rel)) {
      bib_abs = path.join(child_repo_abs, raw_bib_rel);
    } else if (fm_obj.bibliography && paper_dir) {
      bib_abs = path.join(paper_dir, String(fm_obj.bibliography).trim());
    } else if (sources_abs) {
      bib_abs = sources_abs.replace(/\.json5?$/i, ".bib");
    }

    if (sources_abs && fs.existsSync(sources_abs) && bib_compiler) {
      let compiled_path = bib_compiler.compileSourcesToBibSync(sources_abs, bib_abs);
      if (compiled_path) bib_abs = compiled_path;
    }

    //Return statement
    return {
      bib_abs: bib_abs,
      sources_abs: sources_abs,
      sources_filename: (sources_abs) ? path.basename(sources_abs) : ""
    };
  },


  /**
   * Resolves a division acronym or affiliation string against `defines.divisions` in `common/defines/intellte_defines.json5`.
   *
   * @param {string} arg0_division_value - Division acronym (e.g. `"CRD"`, `"CTD"`) or custom affiliation string.
   * @param {Object} arg1_defines_obj - Parsed `intellte_defines.json5` object.
   * @return {Object} Resolved `{ acronym, affiliation }` entry.
   */
  resolveDivisionEntry: function (arg0_division_value, arg1_defines_obj) {
    //Convert from parameters
    let division_value = String(arg0_division_value || "").trim();
    let defines_obj = (arg1_defines_obj) ? arg1_defines_obj : {};

    //Declare local instance variables
    let all_div_keys = [];
    let default_key = (defines_obj.default_division) ? String(defines_obj.default_division) : "CRD";
    let divisions_obj = (defines_obj.divisions && typeof defines_obj.divisions === "object") ? defines_obj.divisions : {};
    let lookup_value = (division_value) ? division_value : default_key;

    if (divisions_obj[lookup_value]) {
      return {
        acronym: lookup_value,
        affiliation: String(divisions_obj[lookup_value])
      };
    }

    all_div_keys = Object.keys(divisions_obj);
    for (let i = 0; i < all_div_keys.length; i++) {
      let local_key = all_div_keys[i];
      let local_affil = String(divisions_obj[local_key] || "");
      if (
        local_key.toLowerCase() === lookup_value.toLowerCase() ||
        local_affil.toLowerCase() === lookup_value.toLowerCase()
      ) {
        return {
          acronym: local_key,
          affiliation: local_affil
        };
      }
    }

    //Return statement
    return {
      acronym: "",
      affiliation: lookup_value
    };
  },


  /**
   * Resolves the canonical latest version identifier from an enriched `versions` array.
   *
   * @param {Object[]} arg0_versions - Array of version metadata objects.
   * @return {string} Highest semantic/chronological version string, or `""` if empty.
   */
  resolveLatestVersion: function (arg0_versions) {
    //Convert from parameters
    let versions = Array.isArray(arg0_versions) ? arg0_versions : [];

    //Declare local instance variables
    let best_ver = null;

    //Guard clauses
    if (versions.length === 0) return "";

    best_ver = versions[0];
    for (let i = 1; i < versions.length; i++) {
      let best_ts = Number(best_ver.published_timestamp) || 0;
      let local_ver = versions[i];
      let local_ts = Number(local_ver.published_timestamp) || 0;
      let ver_cmp = IntellteDiscovery.compareVersionStrings(local_ver.version, best_ver.version);

      if (local_ts > 0 && best_ts > 0 && local_ts !== best_ts) {
        if (local_ts > best_ts) {
          best_ver = local_ver;
        }
      } else if (ver_cmp > 0 || (ver_cmp === 0 && local_ts > best_ts)) {
        best_ver = local_ver;
      }
    }

    //Return statement
    return String(best_ver.version || "");
  }
};

module.exports = { IntellteDiscovery };
