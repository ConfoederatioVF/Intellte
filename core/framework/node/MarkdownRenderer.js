let child_process = require("child_process");
let crypto = require("crypto");
let fs = require("fs");
let os = require("os");
let path = require("path");
let { MlaBibliographyFormatter } = require("./MlaBibliographyFormatter.js");

/**
 * Native R Markdown (.Rmd) and Mixed Markdown/HTML DOM Renderer for Intellte.
 * Evaluates R chunks via core/framework/R/, renders CRD Working Paper headers,
 * resolves BibTeX citations into numerical MLA format, endnotes, LaTeX cross-references,
 * and <pdf src> tags matching core/rticles/intellte specifications.
 */
class MarkdownRenderer {
  /**
   * Initialises a new MarkdownRenderer instance.
   *
   * @param {Object} [arg0_options] - Optional configuration (`root_dir`, `rscript_path`, `cache_dir`).
   */
  constructor (arg0_options) {
    //Convert from parameters
    let options = (arg0_options) ? arg0_options : {};

    //Initialise options
    this.bib_formatter = new MlaBibliographyFormatter();
    this.cache_dir = (options.cache_dir)
      ? options.cache_dir
      : path.resolve(__dirname, "../../../docs/.vitepress/cache/rmd_dom");
    this.root_dir = (options.root_dir)
      ? options.root_dir
      : path.resolve(__dirname, "../../..");
    this.rscript_path = (options.rscript_path)
      ? options.rscript_path
      : "C:/Program Files/R/R-4.6.1/bin/Rscript.exe";
    this.r_framework_hash = this.computeRFrameworkHash();
  }


  /**
   * Computes a deterministic short SHA-256 digest over all `core/framework/R/*.R` files
   * so framework updates invalidate RMarkdown DOM caches automatically without `--force-eval`.
   *
   * @return {string} 8-character hex digest.
   */
  computeRFrameworkHash () {
    //Declare local instance variables
    let hash = crypto.createHash("sha256");
    let r_dir = path.resolve(this.root_dir, "core/framework/R");

    //Function body
    if (fs.existsSync(r_dir)) {
      let r_files = fs.readdirSync(r_dir).filter(function (arg0_f) { return /\.R$/i.test(arg0_f); }).sort();
      for (let i = 0; i < r_files.length; i++) {
        let r_text = fs.readFileSync(path.join(r_dir, r_files[i]), "utf8").replace(/\r\n/g, "\n");
        hash.update(r_files[i]);
        hash.update(r_text);
      }
    }

    //Return statement
    return hash.digest("hex").slice(0, 8);
  }


  /**
   * Cleans inline math inside raw HTML blocks (`<figcaption>`, `<th>`, `<td>`, `<div class="crd-panel-heading">`)
   * whilst protecting Markdown prose `$ ... $` and `$$ ... $$` expressions so VitePress MathJax renders them natively.
   *
   * @param {string} arg0_text - Input markdown text.
   * @return {string} Markdown with cleaned HTML captions/headers and preserved TeX math.
   */
  cleanDocumentInlineMath (arg0_text) {
    //Convert from parameters
    let text = String(arg0_text || "");

    //Declare local instance variables
    let code_blocks = [];
    let placeholder_prefix = "___CRD_CODE_BLOCK_";
    let processed_text = text;
    let self = this;

    //Guard clauses
    if (!text) return "";

    //Protect fenced code blocks
    processed_text = processed_text.replace(/(```[\s\S]*?```)/g, (arg0_match) => {
      let idx = code_blocks.length;
      code_blocks.push(arg0_match);
      return `${placeholder_prefix}${idx}___`;
    });

    //Protect inline code spans
    processed_text = processed_text.replace(/(`[^`]+`)/g, (arg0_match) => {
      let idx = code_blocks.length;
      code_blocks.push(arg0_match);
      return `${placeholder_prefix}${idx}___`;
    });

    //Protect display math blocks ($$ ... $$) so VitePress MathJax renders them natively
    processed_text = processed_text.replace(/(\$\$[\s\S]*?\$\$)/g, (arg0_match) => {
      let clean_math = arg0_match.replace(/\\text\{(?:--|\u2013|\u2014)\}/g, "\\text{-}");
      let idx = code_blocks.length;
      code_blocks.push(clean_math);
      return `${placeholder_prefix}${idx}___`;
    });

    //Protect inline math spans ($ ... $) so VitePress MathJax renders them natively
    processed_text = processed_text.replace(/(\$[^$\r\n]+\$)/g, (arg0_match) => {
      let clean_math = arg0_match.replace(/\\text\{(?:--|\u2013|\u2014)\}/g, "\\text{-}");
      let idx = code_blocks.length;
      code_blocks.push(clean_math);
      return `${placeholder_prefix}${idx}___`;
    });

    //Clean double-hyphen ranges in non-math prose
    processed_text = processed_text.replace(/([0-9A-Za-z)\]])\s*--\s*([0-9A-Za-z(\[])/g, "$1-$2");

    //Restore code and math blocks using function replacement so $$ is never collapsed by String.prototype.replace
    for (let i = 0; i < code_blocks.length; i++) {
      processed_text = processed_text.replace(`${placeholder_prefix}${i}___`, () => code_blocks[i]);
    }

    //Return statement
    return processed_text;
  }


  /**
   * Cleans and formats LaTeX/inline math within HTML blocks (<figcaption>, <th>, <td>, etc.).
   *
   * @param {string} arg0_text - Input markdown/HTML text.
   * @return {string} Text with converted inline math HTML entities.
   */
  cleanHtmlInlineMath (arg0_text) {
    //Convert from parameters
    let text = String(arg0_text || "");

    //Declare local instance variables
    let out_text = text;
    let self = this;

    //Convert inline math in figcaption
    out_text = out_text.replace(/<figcaption(\b[^>]*)>([\s\S]*?)<\/figcaption>/gi, function (arg0_m, arg1_attrs, arg2_cap) {
      return `<figcaption${arg1_attrs}>${self.formatInlineMathString(arg2_cap)}</figcaption>`;
    });

    //Convert inline math in th headers
    out_text = out_text.replace(/<th(\b[^>]*)>([\s\S]*?)<\/th>/gi, function (arg0_m, arg1_attrs, arg2_cell) {
      return `<th${arg1_attrs}>${self.formatInlineMathString(arg2_cell)}</th>`;
    });

    //Convert inline math in td cells and panel headings
    out_text = out_text.replace(/<td(\b[^>]*)>([\s\S]*?)<\/td>/gi, function (arg0_m, arg1_attrs, arg2_cell) {
      return `<td${arg1_attrs}>${self.formatInlineMathString(arg2_cell)}</td>`;
    });

    //Convert inline math in panel headings
    out_text = out_text.replace(/<div class="crd-panel-heading">([\s\S]*?)<\/div>/g, function (arg0_m, arg1_head) {
      return `<div class="crd-panel-heading">${self.formatInlineMathString(arg1_head)}</div>`;
    });

    //Return statement
    return out_text;
  }


  /**
   * Compiles an R Markdown (.Rmd) file into WYSIWYG DOM Markdown/HTML.
   *
   * @param {string} arg0_rmd_path - Absolute path to the source .Rmd file.
   * @param {Object} [arg1_options] - Options (`artefact_base_url`, `bib_path`, `force_eval`, `pdf_url`).
   * @return {Object} Object containing `frontmatter`, `header_html`, `body_md`, and `full_dom_md`.
   */
  compileRmdToDom (arg0_rmd_path, arg1_options) {
    //Convert from parameters
    let rmd_path = arg0_rmd_path;
    let options = (arg1_options) ? arg1_options : {};

    //Initialise options
    let artefact_base_url = (options.artefact_base_url) ? options.artefact_base_url : "";
    let bib_path = (options.bib_path) ? options.bib_path : "";
    let force_eval = Boolean(options.force_eval);

    //Declare local instance variables
    let bib_entries = {};
    let body_md = "";
    let evaluated_md = "";
    let frontmatter = {};
    let header_html = "";
    let parsed_doc = {};
    let raw_rmd = "";

    //Guard clauses
    if (!rmd_path || !fs.existsSync(rmd_path)) {
      console.error(`[MarkdownRenderer] .Rmd file not found: ${rmd_path}`);
      return { body_md: "", frontmatter: {}, full_dom_md: "", header_html: "" };
    }

    raw_rmd = fs.readFileSync(rmd_path, "utf8");
    parsed_doc = this.parseFrontmatter(raw_rmd);
    frontmatter = parsed_doc.frontmatter;

    if (!bib_path && frontmatter.bibliography) {
      bib_path = path.resolve(path.dirname(rmd_path), String(frontmatter.bibliography));
    }
    if (bib_path && fs.existsSync(bib_path)) {
      bib_entries = this.parseBibFile(bib_path);
    }

    evaluated_md = (options.pre_evaluated_md !== undefined && options.pre_evaluated_md !== null)
      ? options.pre_evaluated_md
      : this.evaluateRmdWithCache(rmd_path, {
          artefact_base_url: artefact_base_url,
          force_eval: force_eval,
          has_hero_figure: Boolean(frontmatter.hero_figure)
        });

    parsed_doc = this.parseFrontmatter(evaluated_md);
    body_md = parsed_doc.body;

    //Process LaTeX cross-references, citations, footnotes, <pdf src> tags, table HTML math and inline prose math
    body_md = this.stripLatexPaginationBlocks(body_md);
    body_md = this.resolveCrossReferences(body_md, Boolean(frontmatter.hero_figure), frontmatter.hero_label);
    body_md = this.resolveTableAndCaptionMarkdown(body_md);
    body_md = this.cleanHtmlInlineMath(body_md);
    body_md = this.resolveCitationsAndBibliography(body_md, bib_entries);
    body_md = this.resolveFootnotes(body_md);
    body_md = this.transformPdfTags(body_md, { artefact_base_url: artefact_base_url });
    body_md = this.cleanDocumentInlineMath(body_md);

    header_html = this.renderCrdHeaderHtml(frontmatter, {
      artefact_base_url: artefact_base_url
    });

    //Return statement
    return {
      body_md: body_md,
      frontmatter: frontmatter,
      full_dom_md: `${header_html}\n\n${body_md}`,
      header_html: header_html
    };
  }


  /**
   * Configures a VitePress markdown-it instance to natively support <pdf src> tags,
   * inline footnotes, and raw R Markdown constructs.
   *
   * @param {Object} arg0_md - VitePress markdown-it instance.
   * @param {Object} [arg1_options] - Optional configuration object.
   * @return {Object} Configured markdown-it instance.
   */
  configureVitePressMarkdown (arg0_md, arg1_options) {
    //Convert from parameters
    let md = arg0_md;
    let options = (arg1_options) ? arg1_options : {};

    //Declare local instance variables
    let orig_render = md.render.bind(md);
    let self = this;

    md.render = function (arg0_src, arg1_env) {
      //Convert from parameters
      let src = String(arg0_src || "");
      let env = arg1_env;

      //Transform <pdf src="..."> tags into <PdfEmbed ... /> before markdown-it rendering
      let processed_src = self.transformPdfTags(src, options);

      //Render math inside raw HTML blocks only when pre-rendered v-pre tables are not used
      if (processed_src.includes("$")) {
        if (!processed_src.includes(`class="crd-wysiwyg-table" v-pre`)) {
          processed_src = processed_src.replace(/<td\b([^>]*)>([\s\S]*?)<\/td>/g, function (arg0_full, arg1_attrs, arg2_content) {
            if (arg2_content.includes("$")) {
              return `<td${arg1_attrs}>${md.renderInline(arg2_content)}</td>`;
            }
            return arg0_full;
          });
          processed_src = processed_src.replace(/<th\b([^>]*)>([\s\S]*?)<\/th>/g, function (arg0_full, arg1_attrs, arg2_content) {
            if (arg2_content.includes("$")) {
              return `<th${arg1_attrs}>${md.renderInline(arg2_content)}</th>`;
            }
            return arg0_full;
          });
        }
        processed_src = processed_src.replace(/<figcaption\b([^>]*)>([\s\S]*?)<\/figcaption>/g, function (arg0_full, arg1_attrs, arg2_content) {
          if (arg2_content.includes("$")) {
            return `<figcaption${arg1_attrs}>${md.renderInline(arg2_content)}</figcaption>`;
          }
          return arg0_full;
        });
        processed_src = processed_src.replace(/<div class="crd-panel-heading">([\s\S]*?)<\/div>/g, function (arg0_full, arg1_content) {
          if (arg1_content.includes("$")) {
            return `<div class="crd-panel-heading">${md.renderInline(arg1_content)}</div>`;
          }
          return arg0_full;
        });
        processed_src = processed_src.replace(/<span class="crd-footnote-text">([\s\S]*?)<\/span>/g, function (arg0_full, arg1_content) {
          if (arg1_content.includes("$")) {
            return `<span class="crd-footnote-text">${md.renderInline(arg1_content)}</span>`;
          }
          return arg0_full;
        });
      }

      //Return statement
      let rendered_html = orig_render(processed_src, env);
      rendered_html = rendered_html.replace(/<table(\b[^>]*)>([\s\S]*?)<\/table>/gi, function (arg0_full, arg1_attrs) {
        if (/\bcrd-wysiwyg-table\b/i.test(arg1_attrs)) return arg0_full;
        return `<div class="crd-table-scroll">${arg0_full}</div>`;
      });

      return rendered_html;
    };

    //Return statement
    return md;
  }


  /**
   * Escapes HTML special characters for safe attribute/element interpolation.
   *
   * @param {string} arg0_str - Raw string.
   * @return {string} Escaped string.
   */
  escapeHtml (arg0_str) {
    //Convert from parameters
    let str = String(arg0_str || "");

    //Return statement
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }


  /**
   * Resolves deterministic cache file paths for an `.Rmd` evaluation job, incorporating
   * the SHA-256 digest of all `core/framework/R/*.R` files (`v10_<framework_hash>`).
   *
   * @param {string} arg0_rmd_path
   * @param {Object} [arg1_options]
   * @return {Object} Cache descriptor `{ cache_file, crlf_cache_file, rmd_base, rmd_norm, raw_rmd }`
   */
  getRmdCacheKeyInfo (arg0_rmd_path, arg1_options) {
    //Convert from parameters
    let rmd_path = arg0_rmd_path;
    let options = (arg1_options) ? arg1_options : {};

    //Initialise options
    let artefact_base_url = (options.artefact_base_url) ? options.artefact_base_url : "";
    let has_hero_figure = (options.has_hero_figure !== undefined) ? Boolean(options.has_hero_figure) : true;

    //Declare local instance variables
    let cache_file = "";
    let cache_hash = "";
    let crlf_cache_file = "";
    let crlf_hash = "";
    let norm_rmd = "";
    let raw_rmd = fs.readFileSync(rmd_path, "utf8");
    let rmd_base = path.basename(rmd_path, ".Rmd");
    let rmd_norm = rmd_path.replace(/\\/g, "/");
    let salt = `v10_${this.r_framework_hash || "0"}`;

    if (!fs.existsSync(this.cache_dir)) {
      fs.mkdirSync(this.cache_dir, { recursive: true });
    }

    norm_rmd = raw_rmd.replace(/\r\n/g, "\n");
    cache_hash = crypto
      .createHash("sha256")
      .update(`${norm_rmd}|${artefact_base_url}|${has_hero_figure}|${salt}`)
      .digest("hex")
      .slice(0, 16);
    cache_file = path.join(this.cache_dir, `${rmd_base}_${cache_hash}.md`).replace(/\\/g, "/");

    crlf_hash = crypto
      .createHash("sha256")
      .update(`${raw_rmd}|${artefact_base_url}|${has_hero_figure}|${salt}`)
      .digest("hex")
      .slice(0, 16);
    crlf_cache_file = path.join(this.cache_dir, `${rmd_base}_${crlf_hash}.md`).replace(/\\/g, "/");

    //Return statement
    return {
      artefact_base_url: artefact_base_url,
      cache_file: cache_file,
      crlf_cache_file: crlf_cache_file,
      has_hero_figure: has_hero_figure,
      raw_rmd: raw_rmd,
      rmd_base: rmd_base,
      rmd_norm: rmd_norm
    };
  }


  /**
   * Evaluates an array of `.Rmd` compilation jobs in parallel across persistent R workers
   * (`min(os.cpus().length, 8)` processes), checking the SHA-256 cache first and grouping uncached
   * jobs by source directory to avoid temporary asset races.
   *
   * @param {Array<Object>} arg0_jobs - Jobs `{ key, rmd_path, artefact_base_url, has_hero_figure }`
   * @param {Object} [arg1_options] - Options (`concurrency`, `force_eval`)
   * @return {Promise<Map<string, string>>} Map from `job.key` to evaluated Markdown
   */
  async evaluateRmdBatchParallel (arg0_jobs, arg1_options) {
    //Convert from parameters
    let jobs = Array.isArray(arg0_jobs) ? arg0_jobs : [];
    let options = (arg1_options) ? arg1_options : {};

    //Initialise options
    let force_eval = Boolean(options.force_eval);

    //Declare local instance variables
    let max_workers = Math.max(1, Math.min(Number(options.concurrency) || Math.min(os.cpus().length, 8), 8));
    let result_map = new Map();
    let rscript_bin = (fs.existsSync(this.rscript_path)) ? this.rscript_path : "Rscript";
    let uncached_jobs = [];
    let worker_r_path = path.resolve(__dirname, "r_dom_worker.R").replace(/\\/g, "/");

    //Function body
    for (let i = 0; i < jobs.length; i++) {
      let job = jobs[i];
      if (!job || !job.rmd_path || !fs.existsSync(job.rmd_path)) continue;
      let info = this.getRmdCacheKeyInfo(job.rmd_path, {
        artefact_base_url: job.artefact_base_url,
        has_hero_figure: job.has_hero_figure
      });

      if (!force_eval) {
        if (fs.existsSync(info.cache_file)) {
          let cached_md = fs.readFileSync(info.cache_file, "utf8");
          if (this.isValidEvaluatedMarkdown(cached_md)) {
            result_map.set(job.key, cached_md);
            continue;
          }
          try { fs.unlinkSync(info.cache_file); } catch (e) {}
        }
        if (fs.existsSync(info.crlf_cache_file)) {
          let crlf_md = fs.readFileSync(info.crlf_cache_file, "utf8");
          if (this.isValidEvaluatedMarkdown(crlf_md)) {
            result_map.set(job.key, crlf_md);
            continue;
          }
          try { fs.unlinkSync(info.crlf_cache_file); } catch (e) {}
        }
      }

      uncached_jobs.push({
        artefact_base_url: info.artefact_base_url,
        cache_file: info.cache_file,
        dir_key: path.dirname(job.rmd_path).toLowerCase(),
        has_hero_figure: info.has_hero_figure,
        key: job.key,
        rmd_path: info.rmd_norm
      });
    }

    if (uncached_jobs.length === 0) {
      return result_map;
    }

    //Group jobs by directory so two parallel workers never touch the same folder simultaneously
    let dir_map = new Map();
    for (let i = 0; i < uncached_jobs.length; i++) {
      let u_job = uncached_jobs[i];
      if (!dir_map.has(u_job.dir_key)) dir_map.set(u_job.dir_key, []);
      dir_map.get(u_job.dir_key).push(u_job);
    }

    let dir_groups = Array.from(dir_map.values());
    let actual_workers = Math.min(max_workers, dir_groups.length);
    let shards = Array.from({ length: actual_workers }, function () { return []; });
    for (let i = 0; i < dir_groups.length; i++) {
      let target_shard = shards[i % actual_workers];
      for (let x = 0; x < dir_groups[i].length; x++)
        target_shard.push(dir_groups[i][x]);
    }

    console.log(`[MarkdownRenderer] Compiling ${uncached_jobs.length} uncached .Rmd file(s) across ${actual_workers} persistent R worker(s)...`);

    let jobs_tmp_dir = path.join(os.tmpdir(), "intellte_rmd_workers");
    if (!fs.existsSync(jobs_tmp_dir)) fs.mkdirSync(jobs_tmp_dir, { recursive: true });

    let worker_promises = shards.map((arg0_shard, arg1_idx) => {
      if (arg0_shard.length === 0) return Promise.resolve();
      let job_json_path = path.join(jobs_tmp_dir, `worker_${process.pid}_${arg1_idx}.json`).replace(/\\/g, "/");
      fs.writeFileSync(job_json_path, JSON.stringify(arg0_shard, null, 2), "utf8");

      return new Promise((arg0_resolve) => {
        let child = child_process.spawn(rscript_bin, [worker_r_path, job_json_path], {
          cwd: this.root_dir,
          stdio: ["ignore", "pipe", "pipe"]
        });
        let stderr_chunks = [];
        child.stderr.on("data", function (arg0_chunk) { stderr_chunks.push(String(arg0_chunk)); });
        child.on("close", (arg0_code) => {
          try { fs.unlinkSync(job_json_path); } catch (e) {}
          if (arg0_code !== 0 && stderr_chunks.length > 0) {
            console.warn(`[MarkdownRenderer] R worker ${arg1_idx} exited with code ${arg0_code}: ${stderr_chunks.join("").slice(0, 400)}`);
          }
          arg0_resolve();
        });
        child.on("error", () => {
          try { fs.unlinkSync(job_json_path); } catch (e) {}
          arg0_resolve();
        });
      });
    });

    await Promise.all(worker_promises);

    //Collect outputs and fall back to evaluateRmdWithCache if any single file failed in batch
    for (let i = 0; i < uncached_jobs.length; i++) {
      let uj = uncached_jobs[i];
      if (fs.existsSync(uj.cache_file)) {
        let eval_md = fs.readFileSync(uj.cache_file, "utf8");
        if (this.isValidEvaluatedMarkdown(eval_md)) {
          result_map.set(uj.key, eval_md);
          continue;
        }
      }
      result_map.set(uj.key, this.evaluateRmdWithCache(uj.rmd_path, {
        artefact_base_url: uj.artefact_base_url,
        force_eval: force_eval,
        has_hero_figure: uj.has_hero_figure
      }));
    }

    //Return statement
    return result_map;
  }


  /**
   * Evaluates an .Rmd file via Rscript and knitr into DOM Markdown, using SHA-256 caching.
   *
   * @param {string} arg0_rmd_path - Absolute path to the .Rmd file.
   * @param {Object} [arg1_options] - Options (`artefact_base_url`, `force_eval`, `has_hero_figure`).
   * @return {string} Evaluated Markdown content.
   */
  evaluateRmdWithCache (arg0_rmd_path, arg1_options) {
    //Convert from parameters
    let rmd_path = arg0_rmd_path;
    let options = (arg1_options) ? arg1_options : {};

    //Initialise options
    let force_eval = Boolean(options.force_eval);

    //Declare local instance variables
    let fw_init_path = path.resolve(this.root_dir, "core/framework/R/framework_init.R").replace(/\\/g, "/");
    let info = this.getRmdCacheKeyInfo(rmd_path, options);
    let cache_file = info.cache_file;
    let crlf_cache_file = info.crlf_cache_file;
    let raw_rmd = info.raw_rmd;
    let rmd_base = info.rmd_base;
    let rscript_bin = (fs.existsSync(this.rscript_path)) ? this.rscript_path : "Rscript";

    if (!force_eval) {
      if (fs.existsSync(cache_file)) {
        let cached_md = fs.readFileSync(cache_file, "utf8");
        if (this.isValidEvaluatedMarkdown(cached_md)) {
          return cached_md;
        }
        try { fs.unlinkSync(cache_file); } catch (e) {}
      }
      if (fs.existsSync(crlf_cache_file)) {
        let crlf_md = fs.readFileSync(crlf_cache_file, "utf8");
        if (this.isValidEvaluatedMarkdown(crlf_md)) {
          return crlf_md;
        }
        try { fs.unlinkSync(crlf_cache_file); } catch (e) {}
      }
    }

    let r_expr = [
      `source('${fw_init_path}')`,
      `compile_rmd_to_dom_markdown('${info.rmd_norm}', '${cache_file}', list(artefact_base_url = '${info.artefact_base_url}', has_hero_figure = ${info.has_hero_figure ? "TRUE" : "FALSE"}))`
    ].join("; ");

    let proc_res = child_process.spawnSync(rscript_bin, ["-e", r_expr], {
      cwd: path.dirname(rmd_path),
      encoding: "utf8"
    });

    if (proc_res.status !== 0 || !fs.existsSync(cache_file) || !this.isValidEvaluatedMarkdown(fs.readFileSync(cache_file, "utf8"))) {
      if (fs.existsSync(cache_file) && !this.isValidEvaluatedMarkdown(fs.readFileSync(cache_file, "utf8"))) {
        try { fs.unlinkSync(cache_file); } catch (e) {}
      }
      if (fs.existsSync(crlf_cache_file)) {
        let crlf_md = fs.readFileSync(crlf_cache_file, "utf8");
        if (this.isValidEvaluatedMarkdown(crlf_md)) {
          return crlf_md;
        }
      }

      let all_cached = fs.readdirSync(this.cache_dir)
        .filter((arg0_f) => arg0_f.startsWith(`${rmd_base}_`) && arg0_f.endsWith(".md"))
        .map((arg0_f) => ({
          full_path: path.join(this.cache_dir, arg0_f),
          mtime: fs.statSync(path.join(this.cache_dir, arg0_f)).mtimeMs
        }))
        .sort((arg0_a, arg1_b) => arg1_b.mtime - arg0_a.mtime);
      for (let i = 0; i < all_cached.length; i++) {
        let fallback_md = fs.readFileSync(all_cached[i].full_path, "utf8");
        if (this.isValidEvaluatedMarkdown(fallback_md)) {
          return fallback_md;
        }
      }

      console.error(`[MarkdownRenderer] Rscript evaluation error for ${rmd_path}:`, proc_res.stderr);
      return raw_rmd;
    }

    //Return statement
    return fs.readFileSync(cache_file, "utf8");
  }


  /**
   * Formats raw LaTeX inline math fragments into clean semantic HTML (e.g. $R^2$ to <i>R</i><sup>2</sup>).
   *
   * @param {string} arg0_str - Text containing math delimiters.
   * @return {string} Semantic HTML with italic variables and superscripts.
   */
  formatInlineMathString (arg0_str) {
    //Convert from parameters
    let str = String(arg0_str || "");

    //Declare local instance variables
    let clean = str;

    clean = clean.replace(/\$\$([\s\S]*?)\$\$/g, function (arg0_m, arg1_inner) {
      return `$${arg1_inner}$`;
    });

    clean = clean.replace(/\$([^$\r\n]+)\$/g, function (arg0_m, arg1_inner) {
      let math_body = String(arg1_inner || "");
      let text_tokens = [];

      math_body = math_body
        .replace(/\{,\}/g, ",")
        .replace(/\\%/g, "%");

      math_body = math_body.replace(/\\(?:text|mathrm)\{([^}]*)\}/g, function (arg0_tm, arg1_txt) {
        let idx = text_tokens.length;
        let clean_txt = String(arg1_txt || "").replace(/(?:--|\u2013|\u2014)/g, "-");
        text_tokens.push(clean_txt);
        return `\x01${idx}\x02`;
      });

      math_body = math_body
        .replace(/\s*\\approx\s*/g, " ≈ ")
        .replace(/\s*\\(?:rightarrow|to)\s*/g, " → ")
        .replace(/\\times(?![A-Za-z])/g, "×")
        .replace(/\\cdot(?![A-Za-z])/g, "·")
        .replace(/\\sim\s*/g, "~")
        .replace(/\\nu(?![A-Za-z])/g, "ν")
        .replace(/\\tau(?![A-Za-z])/g, "τ")
        .replace(/\\sigma(?![A-Za-z])/g, "σ")
        .replace(/\\alpha(?![A-Za-z])/g, "α")
        .replace(/\\beta(?![A-Za-z])/g, "β")
        .replace(/\\gamma(?![A-Za-z])/g, "γ")
        .replace(/\\delta(?![A-Za-z])/g, "δ")
        .replace(/\\eta(?![A-Za-z])/g, "η")
        .replace(/\\kappa(?![A-Za-z])/g, "κ")
        .replace(/\\lambda(?![A-Za-z])/g, "λ")
        .replace(/\\mu(?![A-Za-z])/g, "μ")
        .replace(/\\rho(?![A-Za-z])/g, "ρ")
        .replace(/\\Delta(?![A-Za-z])/g, "Δ")
        .replace(/\\pm\s*([0-9]+)\s*σ/g, "±$1σ")
        .replace(/\\pm(?![A-Za-z])/g, "±")
        .replace(/\\leq?(?![A-Za-z])/g, "≤")
        .replace(/\\geq?(?![A-Za-z])/g, "≥")
        .replace(/\\neq(?![A-Za-z])/g, "≠")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

      math_body = math_body.replace(/(?<![A-Za-z0-9&_\\\x01])([A-Za-z])(?![A-Za-z;\x02])/g, "\x03$1\x04");

      for (let i = 0; i < text_tokens.length; i++) {
        math_body = math_body.replace(`\x01${i}\x02`, () => text_tokens[i]);
      }

      math_body = math_body
        .replace(/\^\{([^}]+)\}/g, "<sup>$1</sup>")
        .replace(/\^([0-9A-Za-z+\-]+)/g, "<sup>$1</sup>")
        .replace(/_\{([^}]+)\}/g, "<sub>$1</sub>")
        .replace(/_([0-9A-Za-z+\-]+)/g, "<sub>$1</sub>")
        .replace(/\x03([A-Za-z])\x04/g, "<i>$1</i>")
        .replace(/\s*--\s*/g, "-")
        .trim();

      return math_body;
    });

    clean = clean
      .replace(/\{,\}/g, ",")
      .replace(/\\%/g, "%")
      .replace(/\\Delta(?![A-Za-z])/g, "Δ")
      .replace(/\\pm(?![A-Za-z])/g, "±")
      .replace(/\s*\\approx\s*/g, " ≈ ")
      .replace(/([0-9A-Za-z)\]])\s*--\s*([0-9A-Za-z(\[])/g, "$1-$2");

    //Return statement
    return clean;
  }


  /**
   * Formats a single BibTeX entry into an MLA-compliant citation body matching `crd-mla-numeric.csl`.
   *
   * @param {Object} arg0_entry - Parsed BibTeX entry object.
   * @return {string} Formatted MLA bibliography entry HTML string.
   */
  formatMlaBibliographyEntry (arg0_entry) {
    //Convert from parameters
    let entry = arg0_entry;

    //Return statement
    return this.bib_formatter.formatMlaBibliographyEntry(entry);
  }


  /**
   * Checks whether an evaluated `.md` cache string contains non-empty body prose beyond its YAML frontmatter.
   *
   * @param {string} arg0_md_text - Evaluated Markdown content.
   * @return {boolean} True if the document body after YAML frontmatter is non-empty.
   */
  isValidEvaluatedMarkdown (arg0_md_text) {
    //Convert from parameters
    let md_text = String(arg0_md_text || "");

    //Declare local instance variables
    let parsed_doc = {};

    //Guard clauses
    if (!md_text) return false;

    parsed_doc = this.parseFrontmatter(md_text);

    //Return statement
    return Boolean(parsed_doc.body && parsed_doc.body.trim().length > 0);
  }


  /**
   * Parses a BibTeX (`.bib`) file into a map of citation keys to structured metadata.
   *
   * @param {string} arg0_bib_path - Path to the `.bib` file.
   * @return {Object} Dictionary keyed by BibTeX citation key.
   */
  parseBibFile (arg0_bib_path) {
    //Convert from parameters
    let bib_path = arg0_bib_path;

    //Return statement
    return this.bib_formatter.parseBibFile(bib_path);
  }


  /**
   * Parses YAML frontmatter and body from a Markdown or R Markdown document.
   *
   * @param {string} arg0_text - Full document string.
   * @return {Object} Object with `frontmatter` (object), `raw_frontmatter` (string), and `body` (string).
   */
  parseFrontmatter (arg0_text) {
    //Convert from parameters
    let text = String(arg0_text || "");

    //Declare local instance variables
    let current_list_key = "";
    let fm_match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
    let frontmatter = {};
    let lines = [];

    //Guard clauses
    if (!fm_match) {
      return { body: text, frontmatter: {}, raw_frontmatter: "" };
    }

    lines = fm_match[1].split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
      let local_line = lines[i];
      let list_item_match = local_line.match(/^\s*-\s+(.+)$/);
      let kv_match = local_line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);

      if (list_item_match && current_list_key) {
        if (!Array.isArray(frontmatter[current_list_key])) {
          frontmatter[current_list_key] = [];
        }
        frontmatter[current_list_key].push(list_item_match[1].replace(/^["']|["']$/g, "").trim());
      } else if (kv_match) {
        let local_key = kv_match[1].trim();
        let local_val = kv_match[2].trim();
        if (!local_val) {
          current_list_key = local_key;
          frontmatter[local_key] = [];
        } else {
          current_list_key = "";
          frontmatter[local_key] = local_val.replace(/^["']|["']$/g, "");
        }
      }
    }

    //Return statement
    return {
      body: text.slice(fm_match[0].length),
      frontmatter: frontmatter,
      raw_frontmatter: fm_match[1]
    };
  }


  /**
   * Renders the CRD Working Paper Header HTML block matching intellte.cls typography.
   *
   * @param {Object} arg0_frontmatter - Parsed frontmatter dictionary.
   * @param {Object} [arg1_options] - Options (`artefact_base_url`).
   * @return {string} HTML string for the CRD working paper header and hero figure.
   */
  renderCrdHeaderHtml (arg0_frontmatter, arg1_options) {
    //Convert from parameters
    let frontmatter = (arg0_frontmatter) ? arg0_frontmatter : {};
    let options = (arg1_options) ? arg1_options : {};

    //Initialise options
    let artefact_base_url = (options.artefact_base_url) ? options.artefact_base_url.replace(/\/+$/, "") : "";

    //Declare local instance variables
    let authors_line = frontmatter.authors_line || "";
    let date_str = frontmatter.date || "";
    let emails_list = Array.isArray(frontmatter.emails) ? frontmatter.emails : [];
    let emails_html = "";
    let hero_caption = frontmatter.hero_caption || "";
    let hero_figure = frontmatter.hero_figure || "";
    let hero_html = "";
    let hero_label = frontmatter.hero_label || "fig:hero";
    let html_parts = [];
    let subtitle_str = frontmatter.subtitle || "";
    let title_str = frontmatter.title || "";

    if (emails_list.length > 0) {
      let email_links = [];
      for (let i = 0; i < emails_list.length; i++) {
        let local_em = emails_list[i];
        email_links.push(`<a class="crd-email-link" href="mailto:${this.escapeHtml(local_em)}">${this.escapeHtml(local_em)}</a>`);
      }
      emails_html = ` | ${email_links.join(", ")}`;
    }

    if (hero_figure) {
      let hero_filename = path.basename(hero_figure);
      let hero_src = (artefact_base_url) ? `${artefact_base_url}/${hero_filename}` : hero_figure;
      let clean_cap = (hero_caption) ? hero_caption : "";
      hero_html = [
        `<figure class="crd-hero-figure" id="${this.escapeHtml(hero_label)}">`,
        `  <img class="crd-hero-img" src="${this.escapeHtml(hero_src)}" alt="${this.escapeHtml(title_str)}" />`,
        `  <figcaption class="crd-caption"><span class="crd-caption-label">Figure 1.</span> ${clean_cap}</figcaption>`,
        `</figure>`
      ].join("\n");
    }

    //Format html_parts
    html_parts.push(`<header class="crd-paper-header">`);
    html_parts.push(`  <div class="crd-banner-row">`);
    html_parts.push(`    <img class="crd-banner-logo" src="/artefacts/crd_logo.png" alt="CRD Emblem" />`);
    html_parts.push(`    <div class="crd-banner-text">`);
    html_parts.push(`      <div class="crd-banner-line">CONFOEDERATIO,</div>`);
    html_parts.push(`      <div class="crd-banner-line">RESEARCH DIVISION (CRD).</div>`);
    html_parts.push(`    </div>`);
    html_parts.push(`  </div>`);
    if (title_str) {
      html_parts.push(`  <div class="crd-paper-title">${this.escapeHtml(title_str.toUpperCase())}</div>`);
    }
    if (subtitle_str) {
      html_parts.push(`  <div class="crd-paper-subtitle">${this.escapeHtml(subtitle_str)}</div>`);
    }
    if (date_str || authors_line) {
      let meta_prefix = [date_str, authors_line].filter(Boolean).join(" - ");
      html_parts.push(`  <div class="crd-paper-byline">${this.escapeHtml(meta_prefix)}${emails_html}</div>`);
    }
    if (hero_html) {
      html_parts.push(hero_html);
    }
    html_parts.push(`</header>`);

    //Return statement
    return html_parts.join("\n");
  }


  /**
   * Resolves Pandoc/RMarkdown inline citations (`[@key]` or `[@k1; @k2]`) into
   * inline non-superscripted Wikipedia-style numerical hyperlinks (`[1]`, `[7][8]`) and populates `::: {#refs}`.
   *
   * @param {string} arg0_md_text - Markdown body text.
   * @param {Object} arg1_bib_entries - Parsed BibTeX entries dictionary.
   * @return {string} Markdown text with hyperlinked citations and formatted MLA bibliography.
   */
  resolveCitationsAndBibliography (arg0_md_text, arg1_bib_entries) {
    //Convert from parameters
    let md_text = String(arg0_md_text || "");
    let bib_entries = (arg1_bib_entries) ? arg1_bib_entries : {};

    //Declare local instance variables
    let cited_keys = [];
    let key_to_num = {};
    let updated_text = "";

    updated_text = md_text.replace(/\[(@[A-Za-z0-9_:-]+(?:\s*,\s*[^;\]]+)?(?:\s*;\s*@[A-Za-z0-9_:-]+(?:\s*,\s*[^;\]]+)?)*)\]/g, (arg0_full, arg1_inner) => {
      let link_parts = [];
      let raw_tokens = arg1_inner.split(";");
      let resolved_items = [];

      for (let i = 0; i < raw_tokens.length; i++) {
        let key_match = raw_tokens[i].match(/@([A-Za-z0-9_:-]+)/);
        if (!key_match) continue;
        let local_key = key_match[1];
        if (!key_to_num[local_key]) {
          cited_keys.push(local_key);
          key_to_num[local_key] = cited_keys.length;
        }
        resolved_items.push({ key: local_key, num: key_to_num[local_key] });
      }

      resolved_items.sort((arg0_a, arg1_b) => arg0_a.num - arg1_b.num);
      for (let i = 0; i < resolved_items.length; i++) {
        let local_item = resolved_items[i];
        link_parts.push(`<a class="crd-cite-link" href="#ref-${local_item.key}">[${local_item.num}]</a>`);
      }

      return `<span class="crd-cite-bracket">${link_parts.join("")}</span>`;
    });

    if (cited_keys.length > 0) {
      let bib_lines = [`<div class="crd-bibliography-list" v-pre>`];
      for (let i = 0; i < cited_keys.length; i++) {
        let local_key = cited_keys[i];
        let local_num = i + 1;
        let entry = bib_entries[local_key];
        let body_html = (entry) ? this.formatMlaBibliographyEntry(entry) : this.escapeHtml(local_key);

        bib_lines.push(
          `<div class="crd-bib-entry" id="ref-${this.escapeHtml(local_key)}">` +
          `<span class="crd-bib-num">${local_num}.</span>` +
          `<span class="crd-bib-body">${body_html}</span>` +
          `</div>`
        );
      }
      bib_lines.push(`</div>`);
      let bib_html = bib_lines.join("\n");
      if (/<div\b[^>]*\bid=["']refs["'][^>]*>(?:[\s\S]*?<\/div>)?/i.test(updated_text)) {
        updated_text = updated_text.replace(/<div\b[^>]*\bid=["']refs["'][^>]*>(?:[\s\S]*?<\/div>)?/gi, bib_html);
      } else if (/:::\s*\{?#refs\}?\s*:::/i.test(updated_text)) {
        updated_text = updated_text.replace(/:::\s*\{?#refs\}?\s*:::/gi, bib_html);
      } else if (/(^|\r?\n)(#{1,2}\s+(?:References|Sources|Bibliography)\b[^\r\n]*)/i.test(updated_text)) {
        let heading_matches = [...updated_text.matchAll(/(^|\r?\n)(#{1,2}\s+(?:References|Sources|Bibliography)\b[^\r\n]*)/gi)];
        let last_match = heading_matches[heading_matches.length - 1];
        let insert_idx = last_match.index + last_match[0].length;
        updated_text = `${updated_text.slice(0, insert_idx)}\n\n${bib_html}\n${updated_text.slice(insert_idx)}`;
      } else {
        updated_text = `${updated_text.trimEnd()}\n\n# Sources\n\n${bib_html}\n`;
      }
    }

    //Return statement
    return updated_text;
  }


  /**
   * Resolves LaTeX cross-references (`Figure \ref{...}`, `Table \ref{...}`, `\autoref{...}`, `\crdxref{...}{...}`)
   * so the entire reference label and number (`Figure 2`, `Table 3`) is a single hyperlink.
   *
   * @param {string} arg0_md_text - Markdown body text.
   * @param {boolean} [arg1_has_hero_figure] - Whether Figure 1 is the hero figure.
   * @param {string} [arg2_hero_label] - Custom hero figure label from frontmatter.
   * @return {string} Markdown text with resolved figure and table anchor links.
   */
  resolveCrossReferences (arg0_md_text, arg1_has_hero_figure, arg2_hero_label) {
    //Convert from parameters
    let md_text = String(arg0_md_text || "");
    let has_hero_figure = Boolean(arg1_has_hero_figure);
    let hero_label = (arg2_hero_label) ? String(arg2_hero_label).trim() : "";

    //Declare local instance variables
    let fig_map = {};
    let fig_matches = Array.from(md_text.matchAll(/<figure\s+class="crd-figure-block"\s+id="([^"]+)"/g));
    let next_fig = (has_hero_figure) ? 2 : 1;
    let next_tab = 1;
    let out_text = "";
    let resolve_num = null;
    let tab_map = {};
    let tab_matches = Array.from(md_text.matchAll(/<figure\s+class="crd-table-figure"\s+id="([^"]+)"/g));

    if (has_hero_figure) {
      fig_map["fig:cdt-dashboard"] = 1;
      fig_map["fig:hero"] = 1;
      fig_map["fig:hero-map"] = 1;
      fig_map["fig:principalities_map"] = 1;
      if (hero_label) {
        fig_map[hero_label] = 1;
      }
    }

    for (let i = 0; i < fig_matches.length; i++) {
      let local_fid = fig_matches[i][1];
      if (!fig_map[local_fid]) {
        fig_map[local_fid] = next_fig;
        next_fig++;
      }
    }

    for (let i = 0; i < tab_matches.length; i++) {
      let local_tid = tab_matches[i][1];
      if (!tab_map[local_tid]) {
        tab_map[local_tid] = next_tab;
        next_tab++;
      }
    }

    resolve_num = (arg0_lbl) => {
      let lbl = arg0_lbl.trim();
      if (fig_map[lbl]) return String(fig_map[lbl]);
      if (tab_map[lbl]) return String(tab_map[lbl]);
      return lbl;
    };

    out_text = md_text.replace(/\\crdxref\{([^}]+)\}\{([^}]+)\}/g, (arg0_full, arg1_prefix, arg2_label) => {
      let lbl = arg2_label.trim();
      return `<a class="crd-xref" href="#${lbl}">${arg1_prefix.trim()} ${resolve_num(lbl)}</a>`;
    });

    out_text = out_text.replace(/\\autoref\{([^}]+)\}/g, (arg0_full, arg1_label) => {
      let lbl = arg1_label.trim();
      let prefix = "Section";
      if (fig_map[lbl] || lbl.startsWith("fig:")) {
        prefix = "Figure";
      } else if (tab_map[lbl] || lbl.startsWith("tab:")) {
        prefix = "Table";
      } else if (lbl.startsWith("img:")) {
        prefix = "Image";
      } else if (lbl.startsWith("def:")) {
        prefix = "Definition";
      }
      return `<a class="crd-xref" href="#${lbl}">${prefix} ${resolve_num(lbl)}</a>`;
    });

    out_text = out_text.replace(
      /\b(Figures?|Figs?\.|Tables?|Tabs?\.|Images?|Definitions?|Sections?|Appendix)(?:\s+|~)\\ref\{([^}]+)\}/g,
      (arg0_full, arg1_prefix, arg2_label) => {
        let lbl = arg2_label.trim();
        return `<a class="crd-xref" href="#${lbl}">${arg1_prefix} ${resolve_num(lbl)}</a>`;
      }
    );

    out_text = out_text.replace(/\\ref\{([^}]+)\}/g, (arg0_full, arg1_label) => {
      let lbl = arg1_label.trim();
      return `<a class="crd-xref" href="#${lbl}">${resolve_num(lbl)}</a>`;
    });

    //Strip optional Pandoc unnumbered heading attributes ({.unnumbered}, {unnumbered}, {-})
    out_text = out_text.replace(/^(#{1,6}\s+.+?)\s*\{(?:\.?unnumbered|-)\}\s*$/gm, "$1");

    //Return statement
    return out_text;
  }


  /**
   * Resolves inline Markdown footnotes (`^[...]`) into hyperlinked superscripts and
   * populates the CRD Footnotes endnote block.
   *
   * @param {string} arg0_md_text - Markdown body text.
   * @return {string} Markdown text with hyperlinked footnotes and rendered endnotes list.
   */
  resolveFootnotes (arg0_md_text) {
    //Convert from parameters
    let md_text = String(arg0_md_text || "");

    //Declare local instance variables
    let footnotes_array = [];
    let i = 0;
    let n = md_text.length;
    let out_chars = [];

    while (i < n) {
      if (md_text[i] === "^" && i + 1 < n && md_text[i + 1] === "[") {
        let depth = 1;
        let x = i + 2;
        while (x < n && depth > 0) {
          if (md_text[x] === "[") {
            depth++;
          } else if (md_text[x] === "]") {
            depth--;
          }
          x++;
        }
        if (depth === 0) {
          let fn_body = md_text.slice(i + 2, x - 1).trim();
          footnotes_array.push(fn_body);
          let fn_num = footnotes_array.length;
          out_chars.push(`<sup class="crd-fn-sup"><a id="crdfn-ref-${fn_num}" class="crd-fn-link" href="#crdfn-${fn_num}">${fn_num}</a></sup>`);
          i = x;
          continue;
        }
      }
      out_chars.push(md_text[i]);
      i++;
    }

    let updated_text = out_chars.join("");

    if (footnotes_array.length > 0) {
      let fn_lines = [
        `<div class="crd-footnotes-container">`,
        `  <hr class="crd-footnotes-rule" />`,
        `  <div class="crd-footnotes-list">`
      ];
      for (let y = 0; y < footnotes_array.length; y++) {
        let fn_num = y + 1;
        let fn_clean = footnotes_array[y];
        fn_lines.push(
          `    <div class="crd-footnote-item" id="crdfn-${fn_num}">` +
          `<a class="crd-footnote-backref" href="#crdfn-ref-${fn_num}"><sup>${fn_num}</sup></a> ` +
          `<span class="crd-footnote-text">${fn_clean}</span>` +
          `</div>`
        );
      }
      fn_lines.push(`  </div>`);
      fn_lines.push(`</div>`);

      let fn_block = fn_lines.join("\n");
      if (updated_text.includes(`data-crd-footnotes="true"`)) {
        updated_text = updated_text.replace(/<div class="crd-footnotes-slot" data-crd-footnotes="true"><\/div>/g, fn_block);
      } else {
        updated_text = `${updated_text}\n\n${fn_block}`;
      }
    }

    //Return statement
    return updated_text;
  }


  /**
   * Parses inline Markdown (`**bold**`, `*italic*`, `` `code` ``) inside raw HTML table cells (`<td>`, `<th>`) and `<figcaption>` blocks where `markdown-it` skips inline tokenisation.
   *
   * @param {string} arg0_md_text - Markdown body text containing HTML `<figure>` / `<table>` blocks.
   * @return {string} Markdown text with table cell and caption inline Markdown converted to HTML tags.
   */
  resolveTableAndCaptionMarkdown (arg0_md_text) {
    //Convert from parameters
    let md_text = String(arg0_md_text || "");

    //Declare local instance variables
    let updated_text = md_text;

    updated_text = updated_text.replace(
      /<(td|th|figcaption)(\b[^>]*)>([\s\S]*?)<\/\1>/gi,
      (arg0_m, arg1_tag, arg2_attrs, arg3_inner) => {
        let local_inner = String(arg3_inner || "")
          .replace(/\*\*([^*<\r\n]+)\*\*/g, "<strong>$1</strong>")
          .replace(/\*([^*<\r\n]+)\*/g, "<em>$1</em>")
          .replace(/`([^`<\r\n]+)`/g, "<code>$1</code>");
        return `<${arg1_tag}${arg2_attrs}>${local_inner}</${arg1_tag}>`;
      }
    );

    //Return statement
    return updated_text;
  }


  /**
   * Strips LaTeX-only pagination commands (`\FloatBarrier`, ```` ```{=latex} ```` blocks)
   * that are irrelevant in continuous DOM rendering.
   *
   * @param {string} arg0_md_text - Markdown body text.
   * @return {string} Cleaned Markdown text.
   */
  stripLatexPaginationBlocks (arg0_md_text) {
    //Convert from parameters
    let md_text = String(arg0_md_text || "");

    //Declare local instance variables
    let cleaned = md_text;

    cleaned = cleaned.replace(/```\{=latex\}[\s\S]*?```/g, (arg0_block) => {
      if (arg0_block.includes("\\printcrdfootnotes")) {
        return `<div class="crd-footnotes-slot" data-crd-footnotes="true"></div>`;
      }
      return "";
    });
    cleaned = cleaned.replace(/^\\FloatBarrier\s*$/gm, "");

    //Return statement
    return cleaned;
  }


  /**
   * Transforms `<pdf src="...">` HTML/Markdown tags into `<PdfEmbed ... />` Vue components,
   * resolving relative `src` URLs against `artefact_base_url` when provided.
   *
   * @param {string} arg0_content - Input Markdown/HTML string.
   * @param {Object} [arg1_options] - Options (`artefact_base_url`).
   * @return {string} Transformed string with `<PdfEmbed>` components.
   */
  transformPdfTags (arg0_content, arg1_options) {
    //Convert from parameters
    let content = String(arg0_content || "");
    let options = (arg1_options) ? arg1_options : {};

    //Initialise options
    let artefact_base_url = (options.artefact_base_url) ? options.artefact_base_url.replace(/\/+$/, "") : "";

    //Declare local instance variables
    let pdf_tag_regex = /<pdf\b([^>]*?)(?:\/>|>\s*<\/pdf>)/gi;

    let out_content = content.replace(pdf_tag_regex, (arg0_match, arg1_attrs) => {
      let attrs_str = String(arg1_attrs || "");
      let src_match = attrs_str.match(/\bsrc\s*=\s*["']([^"']+)["']/i);
      if (src_match && artefact_base_url) {
        let raw_src = src_match[1];
        if (!raw_src.startsWith("/") && !raw_src.startsWith("http://") && !raw_src.startsWith("https://")) {
          let resolved_src = `${artefact_base_url}/${raw_src.replace(/^\.\//, "")}`;
          attrs_str = attrs_str.replace(src_match[0], `src="${resolved_src}"`);
        }
      }
      return `<PdfEmbed${attrs_str} />`;
    });

    //Return statement
    return out_content;
  }
}

module.exports = { MarkdownRenderer };
