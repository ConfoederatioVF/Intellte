let child_process = require("child_process");
let crypto = require("crypto");
let fs = require("fs");
let path = require("path");

/**
 * Native R Markdown (.Rmd) and Mixed Markdown/HTML DOM Renderer for Intellte.
 * Evaluates R chunks via core/framework/R/, renders CRD Working Paper headers,
 * resolves BibTeX citations, endnotes, LaTeX cross-references, and <pdf src> tags.
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
    this.cache_dir = (options.cache_dir)
      ? options.cache_dir
      : path.resolve(__dirname, "../../../docs/.vitepress/cache/rmd_dom");
    this.root_dir = (options.root_dir)
      ? options.root_dir
      : path.resolve(__dirname, "../../..");
    this.rscript_path = (options.rscript_path)
      ? options.rscript_path
      : "C:/Program Files/R/R-4.6.1/bin/Rscript.exe";
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

    evaluated_md = this.evaluateRmdWithCache(rmd_path, {
      artefact_base_url: artefact_base_url,
      force_eval: force_eval,
      has_hero_figure: Boolean(frontmatter.hero_figure)
    });

    parsed_doc = this.parseFrontmatter(evaluated_md);
    body_md = parsed_doc.body;

    //Process LaTeX cross-references, citations, footnotes, and <pdf src> tags
    body_md = this.stripLatexPaginationBlocks(body_md);
    body_md = this.resolveCrossReferences(body_md, Boolean(frontmatter.hero_figure));
    body_md = this.resolveCitationsAndBibliography(body_md, bib_entries);
    body_md = this.resolveFootnotes(body_md);
    body_md = this.transformPdfTags(body_md, { artefact_base_url: artefact_base_url });

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

      //Return statement
      return orig_render(processed_src, env);
    };

    //Return statement
    return md;
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
    let artefact_base_url = (options.artefact_base_url) ? options.artefact_base_url : "";
    let force_eval = Boolean(options.force_eval);
    let has_hero_figure = (options.has_hero_figure !== undefined) ? Boolean(options.has_hero_figure) : true;

    //Declare local instance variables
    let cache_file = "";
    let cache_hash = "";
    let fw_init_path = path.resolve(this.root_dir, "core/framework/R/framework_init.R").replace(/\\/g, "/");
    let raw_rmd = fs.readFileSync(rmd_path, "utf8");
    let rmd_norm = rmd_path.replace(/\\/g, "/");
    let rscript_bin = (fs.existsSync(this.rscript_path)) ? this.rscript_path : "Rscript";

    if (!fs.existsSync(this.cache_dir)) {
      fs.mkdirSync(this.cache_dir, { recursive: true });
    }

    cache_hash = crypto
      .createHash("sha256")
      .update(`${raw_rmd}|${artefact_base_url}|${has_hero_figure}|v3`)
      .digest("hex")
      .slice(0, 16);
    cache_file = path.join(this.cache_dir, `${path.basename(rmd_path, ".Rmd")}_${cache_hash}.md`).replace(/\\/g, "/");

    if (!force_eval && fs.existsSync(cache_file)) {
      return fs.readFileSync(cache_file, "utf8");
    }

    let r_expr = [
      `source('${fw_init_path}')`,
      `compile_rmd_to_dom_markdown('${rmd_norm}', '${cache_file}', list(artefact_base_url = '${artefact_base_url}', has_hero_figure = ${has_hero_figure ? "TRUE" : "FALSE"}))`
    ].join("; ");

    let proc_res = child_process.spawnSync(rscript_bin, ["-e", r_expr], {
      cwd: path.dirname(rmd_path),
      encoding: "utf8"
    });

    if (proc_res.status !== 0 || !fs.existsSync(cache_file)) {
      console.error(`[MarkdownRenderer] Rscript evaluation error for ${rmd_path}:`, proc_res.stderr);
      return raw_rmd;
    }

    //Return statement
    return fs.readFileSync(cache_file, "utf8");
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
   * Parses a BibTeX (.bib) file into a map of citation keys to structured metadata.
   *
   * @param {string} arg0_bib_path - Path to the .bib file.
   * @return {Object} Dictionary keyed by BibTeX citation key.
   */
  parseBibFile (arg0_bib_path) {
    //Convert from parameters
    let bib_path = arg0_bib_path;

    //Declare local instance variables
    let entries_obj = {};
    let entry_regex = /@(\w+)\s*\{\s*([^,\s]+)\s*,([\s\S]*?)\n\}/g;
    let match = null;
    let raw_bib = "";

    //Guard clauses
    if (!bib_path || !fs.existsSync(bib_path)) return entries_obj;

    raw_bib = fs.readFileSync(bib_path, "utf8");

    while ((match = entry_regex.exec(raw_bib)) !== null) {
      let local_body = match[3];
      let local_fields = {};
      let local_key = match[2].trim();
      let local_type = match[1].toLowerCase();
      let field_regex = /(\w+)\s*=\s*\{([\s\S]*?)\}\s*(?:,|$)/g;
      let f_match = null;

      while ((f_match = field_regex.exec(local_body)) !== null) {
        let f_name = f_match[1].toLowerCase().trim();
        let f_val = f_match[2].replace(/\s+/g, " ").replace(/[{}]/g, "").trim();
        local_fields[f_name] = f_val;
      }

      entries_obj[local_key] = {
        author: local_fields.author || "",
        journal: local_fields.journal || local_fields.booktitle || local_fields.institution || local_fields.publisher || "",
        key: local_key,
        note: local_fields.note || "",
        number: local_fields.number || "",
        pages: (local_fields.pages || "").replace(/--/g, "–"),
        title: local_fields.title || "",
        type: local_type,
        url: local_fields.url || "",
        volume: local_fields.volume || "",
        year: local_fields.year || ""
      };
    }

    //Return statement
    return entries_obj;
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
      let clean_cap = hero_caption.replace(/--/g, "–");
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
      html_parts.push(`  <h1 class="crd-paper-title">${this.escapeHtml(title_str.toUpperCase())}</h1>`);
    }
    if (subtitle_str) {
      html_parts.push(`  <p class="crd-paper-subtitle">${this.escapeHtml(subtitle_str)}</p>`);
    }
    if (date_str || authors_line) {
      let meta_prefix = [date_str, authors_line].filter(Boolean).join(" - ");
      html_parts.push(`  <p class="crd-paper-byline">${this.escapeHtml(meta_prefix)}${emails_html}</p>`);
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
   * numerical MLA hyperlinks (`[1]`, `[2, 3]`) and populates `::: {#refs}`.
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

    updated_text = md_text.replace(/\[(@[A-Za-z0-9_:-]+(?:\s*;\s*@[A-Za-z0-9_:-]+)*)\]/g, (arg0_full, arg1_inner) => {
      let raw_tokens = arg1_inner.split(";");
      let link_parts = [];
      for (let i = 0; i < raw_tokens.length; i++) {
        let local_key = raw_tokens[i].replace(/^[\s@]+|[\s]+$/g, "");
        if (!key_to_num[local_key]) {
          cited_keys.push(local_key);
          key_to_num[local_key] = cited_keys.length;
        }
        let local_num = key_to_num[local_key];
        link_parts.push(`<a class="crd-cite-link" href="#ref-${local_key}">${local_num}</a>`);
      }
      return `<span class="crd-cite-bracket">[${link_parts.join(", ")}]</span>`;
    });

    if (cited_keys.length > 0) {
      let bib_lines = [`<div class="crd-bibliography-list">`];
      for (let i = 0; i < cited_keys.length; i++) {
        let local_key = cited_keys[i];
        let local_num = i + 1;
        let entry = bib_entries[local_key];
        if (entry) {
          let author_str = entry.author ? `${this.escapeHtml(entry.author)}. ` : "";
          let title_str = entry.title ? `"${this.escapeHtml(entry.title)}." ` : "";
          let journal_str = entry.journal ? `<em>${this.escapeHtml(entry.journal)}</em>` : "";
          let vol_str = entry.volume ? `, vol. ${this.escapeHtml(entry.volume)}` : "";
          let no_str = entry.number ? `, no. ${this.escapeHtml(entry.number)}` : "";
          let yr_str = entry.year ? `, ${this.escapeHtml(entry.year)}` : "";
          let pg_str = entry.pages ? `, pp. ${this.escapeHtml(entry.pages)}` : "";
          let url_str = entry.url
            ? ` <a class="crd-bib-url" href="${this.escapeHtml(entry.url)}" target="_blank" rel="noopener">${this.escapeHtml(entry.url)}</a>.`
            : ".";
          bib_lines.push(
            `<div class="crd-bib-entry" id="ref-${this.escapeHtml(local_key)}">` +
            `<span class="crd-bib-num">[${local_num}]</span>` +
            `<span class="crd-bib-body">${author_str}${title_str}${journal_str}${vol_str}${no_str}${yr_str}${pg_str}${url_str}</span>` +
            `</div>`
          );
        } else {
          bib_lines.push(
            `<div class="crd-bib-entry" id="ref-${this.escapeHtml(local_key)}">` +
            `<span class="crd-bib-num">[${local_num}]</span>` +
            `<span class="crd-bib-body">${this.escapeHtml(local_key)}</span>` +
            `</div>`
          );
        }
      }
      bib_lines.push(`</div>`);
      updated_text = updated_text.replace(/:::\s*\{#refs\}\s*:::/g, bib_lines.join("\n"));
    }

    //Return statement
    return updated_text;
  }


  /**
   * Resolves LaTeX `\ref{fig:...}` and `\ref{tab:...}` into clickable DOM anchor links.
   *
   * @param {string} arg0_md_text - Markdown body text.
   * @param {boolean} [arg1_has_hero_figure] - Whether Figure 1 is the hero figure.
   * @return {string} Markdown text with resolved figure and table numbers.
   */
  resolveCrossReferences (arg0_md_text, arg1_has_hero_figure) {
    //Convert from parameters
    let md_text = String(arg0_md_text || "");
    let has_hero_figure = Boolean(arg1_has_hero_figure);

    //Declare local instance variables
    let fig_map = {};
    let fig_regex = /<figure\s+class="crd-figure-block"\s+id="([^"]+)"/g;
    let f_match = null;
    let next_fig = (has_hero_figure) ? 2 : 1;
    let next_tab = 1;
    let tab_map = {};
    let tab_regex = /<figure\s+class="crd-table-figure"\s+id="([^"]+)"/g;
    let t_match = null;

    if (has_hero_figure) {
      fig_map["fig:cdt-dashboard"] = 1;
      fig_map["fig:hero"] = 1;
    }

    while ((f_match = fig_regex.exec(md_text)) !== null) {
      let fid = f_match[1];
      if (!fig_map[fid]) {
        fig_map[fid] = next_fig;
        next_fig++;
      }
    }

    while ((t_match = tab_regex.exec(md_text)) !== null) {
      let tid = t_match[1];
      if (!tab_map[tid]) {
        tab_map[tid] = next_tab;
        next_tab++;
      }
    }

    let out_text = md_text.replace(/\\ref\{([^}]+)\}/g, (arg0_full, arg1_label) => {
      let lbl = arg1_label.trim();
      if (fig_map[lbl]) {
        return `<a class="crd-xref" href="#${lbl}">${fig_map[lbl]}</a>`;
      } else if (tab_map[lbl]) {
        return `<a class="crd-xref" href="#${lbl}">${tab_map[lbl]}</a>`;
      }
      return `<a class="crd-xref" href="#${lbl}">${lbl}</a>`;
    });

    //Strip Pandoc {.unnumbered} heading attributes
    out_text = out_text.replace(/\s*\{\.unnumbered\}/g, "");

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
        fn_lines.push(
          `    <div class="crd-footnote-item" id="crdfn-${fn_num}">` +
          `<a class="crd-footnote-backref" href="#crdfn-ref-${fn_num}"><sup>${fn_num}</sup></a> ` +
          `<span class="crd-footnote-text">${footnotes_array[y]}</span>` +
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

