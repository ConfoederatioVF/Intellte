let child_process = require("child_process");
let fs = require("fs");
let path = require("path");
let { DoiMetadataResolver } = require("./DoiMetadataResolver.js");
let { IntellteJson5Parser } = require("./json5_parser.js");

class BibCompiler {
  /**
   * Initialises the JSON5-to-BibTeX bibliography compiler.
   *
   * @param {Object} [arg0_options] - Options (`cache_path`, `root_dir`, `user_agent`).
   */
  constructor (arg0_options) {
    //Convert from parameters
    let options = (arg0_options) ? arg0_options : {};

    //Initialise options
    this.resolver = new DoiMetadataResolver(options);
    this.root_dir = this.resolver.root_dir;
  }


  /**
   * Asynchronously resolves an array of JSON5 source objects into a compiled BibTeX string.
   *
   * @param {Object[]} arg0_entries_array - Array of citation source objects.
   * @param {Object} [arg1_options] - Options (`refresh_cache`).
   * @return {Promise<string>} Compiled `.bib` file contents.
   */
  async compileSourcesArray (arg0_entries_array, arg1_options) {
    //Convert from parameters
    let entries_array = Array.isArray(arg0_entries_array) ? arg0_entries_array : [];
    let options = (arg1_options) ? arg1_options : {};

    //Initialise options
    let refresh_cache = Boolean(options.refresh_cache);

    //Declare local instance variables
    let bib_blocks_array = [];

    for (let i = 0; i < entries_array.length; i++) {
      let local_raw = entries_array[i];
      if (!local_raw || typeof local_raw !== "object") {
        console.error(`[BibCompiler] Skipping invalid source entry at index ${i}.`);
      } else {
        let base_fields = await this.resolver.resolveRemoteEntry(local_raw, refresh_cache);
        let merged_entry = this.mergeEntryFields(base_fields, local_raw);
        if (!merged_entry.id) merged_entry.id = this.deriveEntryId(merged_entry, i);
        let formatted_block = this.formatBibEntry(merged_entry);
        if (formatted_block) bib_blocks_array.push(formatted_block);
      }
    }

    this.resolver.saveCache();

    //Return statement
    return (bib_blocks_array.length > 0) ? `${bib_blocks_array.join("\n\n")}\n` : "";
  }


  /**
   * Synchronously compiles an array of JSON5 source objects using cached DOI/URL metadata.
   *
   * @param {Object[]} arg0_entries_array - Array of citation source objects.
   * @return {string} Compiled `.bib` file contents.
   */
  compileSourcesArrayFromCache (arg0_entries_array) {
    //Convert from parameters
    let entries_array = Array.isArray(arg0_entries_array) ? arg0_entries_array : [];

    //Declare local instance variables
    let bib_blocks_array = [];

    for (let i = 0; i < entries_array.length; i++) {
      let local_raw = entries_array[i];
      if (!local_raw || typeof local_raw !== "object") {
        console.error(`[BibCompiler] Skipping invalid source entry at index ${i}.`);
      } else {
        let base_fields = this.resolver.resolveCachedEntry(local_raw);
        let merged_entry = this.mergeEntryFields(base_fields, local_raw);
        if (!merged_entry.id) merged_entry.id = this.deriveEntryId(merged_entry, i);
        let formatted_block = this.formatBibEntry(merged_entry);
        if (formatted_block) bib_blocks_array.push(formatted_block);
      }
    }

    //Return statement
    return (bib_blocks_array.length > 0) ? `${bib_blocks_array.join("\n\n")}\n` : "";
  }


  /**
   * Asynchronously compiles a `.json5` bibliography array file into a `.bib` file on disk.
   *
   * @param {string} arg0_sources_path - Path to input `.json5` bibliography source file.
   * @param {string} [arg1_output_bib_path] - Path to output `.bib` file (defaults to `<stem>.bib`).
   * @param {Object} [arg2_options] - Options (`refresh_cache`).
   * @return {Promise<string>} Absolute path to the compiled `.bib` file.
   */
  async compileSourcesToBib (arg0_sources_path, arg1_output_bib_path, arg2_options) {
    //Convert from parameters
    let sources_path = arg0_sources_path;
    let output_bib_path = arg1_output_bib_path;
    let options = (arg2_options) ? arg2_options : {};

    //Declare local instance variables
    let bib_content = "";
    let entries_array = this.loadSourcesArray(sources_path);
    let resolved_bib_path = "";
    let resolved_sources_path = "";

    //Guard clauses
    if (!entries_array) return "";

    resolved_sources_path = path.resolve(sources_path);
    if (output_bib_path) {
      resolved_bib_path = path.resolve(output_bib_path);
    } else {
      resolved_bib_path = resolved_sources_path.replace(/\.json5?$/i, ".bib");
    }

    bib_content = await this.compileSourcesArray(entries_array, options);
    this.writeBibIfChanged(resolved_bib_path, bib_content);

    //Return statement
    return resolved_bib_path;
  }


  /**
   * Synchronously compiles a `.json5` bibliography array file into a `.bib` file.
   * Uses in-memory cache directly when warm, or invokes `BibCompiler.js` CLI once to resolve uncached DOIs/URLs.
   *
   * @param {string} arg0_sources_path - Path to input `.json5` bibliography source file.
   * @param {string} [arg1_output_bib_path] - Path to output `.bib` file (defaults to `<stem>.bib`).
   * @param {Object} [arg2_options] - Options (`refresh_cache`).
   * @return {string} Absolute path to the compiled `.bib` file.
   */
  compileSourcesToBibSync (arg0_sources_path, arg1_output_bib_path, arg2_options) {
    //Convert from parameters
    let sources_path = arg0_sources_path;
    let output_bib_path = arg1_output_bib_path;
    let options = (arg2_options) ? arg2_options : {};

    //Initialise options
    let refresh_cache = Boolean(options.refresh_cache);

    //Declare local instance variables
    let bib_content = "";
    let cli_args = [];
    let entries_array = this.loadSourcesArray(sources_path);
    let resolved_bib_path = "";
    let resolved_sources_path = "";

    //Guard clauses
    if (!entries_array) return "";

    resolved_sources_path = path.resolve(sources_path);
    if (output_bib_path) {
      resolved_bib_path = path.resolve(output_bib_path);
    } else {
      resolved_bib_path = resolved_sources_path.replace(/\.json5?$/i, ".bib");
    }

    if (refresh_cache || this.resolver.hasUncachedEntries(entries_array)) {
      cli_args = [
        __filename,
        resolved_sources_path,
        resolved_bib_path,
        `--cache=${this.resolver.cache_path}`
      ];
      if (refresh_cache) cli_args.push("--refresh-cache");

      try {
        child_process.execFileSync(process.execPath, cli_args, {
          encoding: "utf8",
          stdio: ["ignore", "pipe", "pipe"],
          timeout: 60000
        });
        this.resolver.cache_obj = this.resolver.loadCache();
        return resolved_bib_path;
      } catch (err) {
        console.error(`[BibCompiler] Network metadata fetch encountered an error: ${err.message}`);
      }
    }

    bib_content = this.compileSourcesArrayFromCache(entries_array);
    this.writeBibIfChanged(resolved_bib_path, bib_content);

    //Return statement
    return resolved_bib_path;
  }


  /**
   * Derives a deterministic BibTeX citation key (`<surname><year>`) when `id`/`key` is omitted.
   *
   * @param {Object} arg0_entry_obj - Normalised bibliographic entry object.
   * @param {number} arg1_index - Zero-based entry index fallback.
   * @return {string} Sanitised citation key.
   */
  deriveEntryId (arg0_entry_obj, arg1_index) {
    //Convert from parameters
    let entry_obj = (arg0_entry_obj) ? arg0_entry_obj : {};
    let index = Number(arg1_index) || 0;

    //Declare local instance variables
    let author_str = String(entry_obj.author || "").trim();
    let base_slug = "";
    let first_chunk = "";
    let year_str = String(entry_obj.year || "").replace(/[^0-9]/g, "");

    if (author_str) {
      first_chunk = author_str.split(/\s+and\s+/i)[0].split(",")[0];
      base_slug = first_chunk
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^A-Za-z0-9]/g, "")
        .toLowerCase();
    }

    if (!base_slug) base_slug = `source${index + 1}`;

    //Return statement
    return `${base_slug}${year_str}`;
  }


  /**
   * Formats a normalised bibliographic entry object into deterministic multi-line BibTeX.
   *
   * @param {Object} arg0_entry_obj - Normalised entry (`id`, `type`, `author`, `title`, etc.).
   * @return {string} Formatted `@<type>{<id>, ... }` block.
   */
  formatBibEntry (arg0_entry_obj) {
    //Convert from parameters
    let entry_obj = (arg0_entry_obj) ? arg0_entry_obj : {};

    //Declare local instance variables
    let entry_id = String(entry_obj.id || "").trim();
    let entry_type = String(entry_obj.type || "misc").toLowerCase().trim();
    let field_lines = [];
    let formatted_rows = [];
    let ordered_keys = [
      "author", "title", "journal", "booktitle", "editor", "institution",
      "publisher", "year", "volume", "number", "pages", "note", "doi", "url"
    ];

    //Guard clauses
    if (!entry_id) {
      console.error("[BibCompiler] Cannot format BibTeX entry without an id.");
      return "";
    }

    for (let i = 0; i < ordered_keys.length; i++) {
      let local_key = ordered_keys[i];
      let raw_val = entry_obj[local_key];

      if (local_key === "publisher" && entry_type === "article" && !entry_obj.keep_article_publisher) {
        raw_val = "";
      }
      if (local_key === "url" && entry_obj.doi && !entry_obj.keep_url_with_doi) {
        raw_val = "";
      }

      if (raw_val !== undefined && raw_val !== null && String(raw_val).trim() !== "") {
        let formatted_val = "";
        if (local_key === "doi") {
          formatted_val = this.resolver.normaliseDoi(raw_val);
        } else if (local_key === "url") {
          formatted_val = this.resolver.cleanTextValue(raw_val, { preserve_url: true });
        } else if (local_key === "pages") {
          formatted_val = this.resolver.normalisePages(raw_val);
        } else if (local_key === "author") {
          let clean_auth = this.resolver.cleanTextValue(raw_val);
          if (entry_obj.corporate_author && !(clean_auth.startsWith("{") && clean_auth.endsWith("}"))) {
            formatted_val = `{${clean_auth}}`;
          } else {
            formatted_val = clean_auth;
          }
        } else {
          formatted_val = this.resolver.cleanTextValue(raw_val);
        }

        if (formatted_val) field_lines.push({ key: local_key, value: formatted_val });
      }
    }

    for (let i = 0; i < field_lines.length; i++) {
      let row_suffix = (i === field_lines.length - 1) ? "" : ",";
      formatted_rows.push(`  ${field_lines[i].key} = {${field_lines[i].value}}${row_suffix}`);
    }

    //Return statement
    return `@${entry_type}{${entry_id},\n${formatted_rows.join("\n")}\n}`;
  }


  /**
   * Normalises an explicit `author` / `authors` / `editor` value (string or array of strings) into BibTeX syntax.
   *
   * @param {string|string[]} arg0_author_input - Explicit author or editor specification.
   * @return {string} BibTeX `and`-delimited contributor string.
   */
  formatExplicitAuthors (arg0_author_input) {
    //Convert from parameters
    let author_input = arg0_author_input;

    //Declare local instance variables
    let parts_array = [];

    if (Array.isArray(author_input)) {
      for (let i = 0; i < author_input.length; i++) {
        let local_name = String(author_input[i] || "").trim();
        if (local_name) parts_array.push(local_name);
      }
      return parts_array.join(" and ");
    }

    //Return statement
    return String(author_input || "").trim();
  }


  /**
   * Reads and validates an array of bibliographic source objects from a `.json5` file.
   *
   * @param {string} arg0_sources_path - Path to the `.json5` file.
   * @return {Object[]|null} Parsed array of source objects, or `null` if invalid/missing.
   */
  loadSourcesArray (arg0_sources_path) {
    //Convert from parameters
    let sources_path = arg0_sources_path;

    //Declare local instance variables
    let parsed_data = null;

    //Guard clauses
    if (!sources_path || !fs.existsSync(sources_path)) {
      console.error(`[BibCompiler] Bibliography source file not found: ${sources_path}`);
      return null;
    }

    parsed_data = IntellteJson5Parser.parseFile(path.resolve(sources_path));
    if (Array.isArray(parsed_data)) return parsed_data;
    if (parsed_data && Array.isArray(parsed_data.sources)) return parsed_data.sources;

    console.error(`[BibCompiler] Expected JSON5 array of citation objects in: ${sources_path}`);

    //Return statement
    return null;
  }


  /**
   * Merges resolved base metadata with explicit user overrides from a `.json5` source object.
   *
   * @param {Object} arg0_base_fields - Resolved DOI/URL base fields.
   * @param {Object} arg1_override_entry - Explicit `.json5` source entry object.
   * @return {Object} Merged normalised entry object.
   */
  mergeEntryFields (arg0_base_fields, arg1_override_entry) {
    //Convert from parameters
    let base_fields = (arg0_base_fields) ? arg0_base_fields : {};
    let override_entry = (arg1_override_entry) ? arg1_override_entry : {};

    //Declare local instance variables
    let copy_keys = [
      "booktitle", "institution", "journal", "note", "number",
      "pages", "publisher", "url", "volume", "year"
    ];
    let explicit_doi = this.resolver.normaliseDoi(override_entry.doi);
    let merged_obj = Object.assign({ type: "misc" }, base_fields);

    if (override_entry.id || override_entry.key) {
      merged_obj.id = String(override_entry.id || override_entry.key).trim();
    }
    if (override_entry.type) {
      merged_obj.type = String(override_entry.type).toLowerCase().trim();
    }

    if (override_entry.author !== undefined || override_entry.authors !== undefined) {
      let raw_auth = (override_entry.author !== undefined) ? override_entry.author : override_entry.authors;
      merged_obj.author = this.formatExplicitAuthors(raw_auth);
    }

    if (override_entry.corporate_author !== undefined) {
      merged_obj.corporate_author = Boolean(override_entry.corporate_author);
    }

    if (override_entry.title !== undefined) {
      if (override_entry.preserve_title_case) {
        merged_obj.title = String(override_entry.title).trim();
      } else {
        merged_obj.title = this.resolver.formatMlaTitleCase(String(override_entry.title));
      }
    }

    for (let i = 0; i < copy_keys.length; i++) {
      let local_k = copy_keys[i];
      if (override_entry[local_k] !== undefined && override_entry[local_k] !== null) {
        merged_obj[local_k] = String(override_entry[local_k]).trim();
      }
    }

    if (override_entry.editor !== undefined || override_entry.editors !== undefined) {
      let raw_ed = (override_entry.editor !== undefined) ? override_entry.editor : override_entry.editors;
      merged_obj.editor = this.formatExplicitAuthors(raw_ed);
    }

    if (override_entry.publisher !== undefined && merged_obj.type === "article") {
      merged_obj.keep_article_publisher = true;
    }
    if (override_entry.url !== undefined && explicit_doi) {
      merged_obj.keep_url_with_doi = Boolean(override_entry.keep_url_with_doi);
    }
    if (explicit_doi) merged_obj.doi = explicit_doi;

    //Return statement
    return merged_obj;
  }


  /**
   * Writes compiled BibTeX text to `arg0_bib_path` only when its content differs from disk.
   *
   * @param {string} arg0_bib_path - Destination `.bib` file path.
   * @param {string} arg1_bib_content - Compiled BibTeX string.
   */
  writeBibIfChanged (arg0_bib_path, arg1_bib_content) {
    //Convert from parameters
    let bib_path = arg0_bib_path;
    let bib_content = String(arg1_bib_content || "");

    //Declare local instance variables
    let existing_bib = "";

    fs.mkdirSync(path.dirname(bib_path), { recursive: true });
    if (fs.existsSync(bib_path)) {
      existing_bib = fs.readFileSync(bib_path, "utf8");
    }
    if (existing_bib !== bib_content) {
      fs.writeFileSync(bib_path, bib_content, "utf8");
    }
  }
}

if (require.main === module) {
  let cli_args = process.argv.slice(2);
  let cache_arg = cli_args.find((arg0_a) => arg0_a.startsWith("--cache="));
  let positional_args = cli_args.filter((arg0_a) => !arg0_a.startsWith("--"));
  let refresh_flag = cli_args.includes("--refresh-cache");

  if (positional_args.length < 1) {
    console.error("Usage: node BibCompiler.js <sources.json5> [output.bib] [--cache=<path>] [--refresh-cache]");
    process.exit(1);
  }

  let compiler = new BibCompiler({
    cache_path: (cache_arg) ? cache_arg.slice("--cache=".length) : undefined
  });

  compiler.compileSourcesToBib(positional_args[0], positional_args[1], { refresh_cache: refresh_flag })
    .then((arg0_out_path) => {
      if (!arg0_out_path) process.exit(1);
    })
    .catch((arg0_err) => {
      console.error(`[BibCompiler] Fatal error: ${arg0_err.message}`);
      process.exit(1);
    });
}

module.exports = { BibCompiler };
