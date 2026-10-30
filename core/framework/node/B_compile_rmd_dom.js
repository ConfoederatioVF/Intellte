let fs = require("fs");
let path = require("path");
let { MarkdownRenderer } = require("./MarkdownRenderer.js");

let IntellteRmdCompiler = {
  /**
   * Step B: Compiles each record version's .Rmd manuscript and supplementary .md reports
   * into WYSIWYG DOM Markdown/HTML via MarkdownRenderer.
   *
   * @param {Object} arg0_manifest - Manifest returned by A_discoverRecords.
   * @param {Object} [arg1_options] - Options (`force_eval`).
   * @return {Object} Updated manifest with compiled DOM payloads attached to each version.
   */
  B_compileRmdDom: function (arg0_manifest, arg1_options) {
    //Convert from parameters
    let manifest = arg0_manifest;
    let options = (arg1_options) ? arg1_options : {};

    //Initialise options
    let force_eval = Boolean(options.force_eval);

    //Declare local instance variables
    let records = (manifest && Array.isArray(manifest.records)) ? manifest.records : [];
    let renderer = new MarkdownRenderer({
      root_dir: manifest.root_dir,
      rscript_path: (manifest.defines && manifest.defines.rscript_path) ? manifest.defines.rscript_path : undefined
    });

    for (let i = 0; i < records.length; i++) {
      let local_rec = records[i];
      let versions = local_rec.versions;

      for (let x = 0; x < versions.length; x++) {
        let local_ver = versions[x];
        let compiled_dom = { body_md: "", frontmatter: {}, full_dom_md: "", header_html: "" };

        if (local_ver.has_rmd && local_ver.rmd_abs && fs.existsSync(local_ver.rmd_abs)) {
          compiled_dom = renderer.compileRmdToDom(local_ver.rmd_abs, {
            artefact_base_url: local_ver.artefact_base_url,
            bib_path: local_ver.bib_abs,
            force_eval: force_eval,
            pdf_url: local_ver.pdf_url
          });
        }

        local_ver.compiled_dom = compiled_dom;
        if (compiled_dom.body_md) {
          local_ver.abstract_excerpt = IntellteRmdCompiler.extractAbstractExcerpt(compiled_dom.body_md);
        }

        //Compile supplementary Markdown reports (e.g. cdt.md, ndt.md) with <pdf src> & image resolution
        let compiled_supp = [];
        let supp_markdown = Array.isArray(local_ver.supplementary_markdown) ? local_ver.supplementary_markdown : [];
        for (let y = 0; y < supp_markdown.length; y++) {
          let supp_item = supp_markdown[y];
          let supp_abs = path.join(local_rec.child_repo_abs, supp_item.path);
          if (fs.existsSync(supp_abs)) {
            let raw_supp = fs.readFileSync(supp_abs, "utf8");
            let clean_supp = renderer.transformPdfTags(raw_supp, {
              artefact_base_url: local_ver.artefact_base_url
            });
            clean_supp = clean_supp.replace(
              /!\[([^\]]*)\]\(([^)]+\.png)\)/g,
              (arg0_m, arg1_alt, arg2_img) => `![${arg1_alt}](${local_ver.artefact_base_url}/${path.basename(arg2_img)})`
            );
            compiled_supp.push({
              content_md: clean_supp,
              filename: path.basename(supp_abs),
              key: supp_item.key,
              route_url: `/records/${local_rec.concept_id}/${local_ver.version}-${supp_item.key}/`,
              source_abs: supp_abs,
              title: supp_item.title
            });
          }
        }
        local_ver.compiled_supplementary = compiled_supp;
      }
    }

    //Return statement
    return manifest;
  },


  /**
   * Extracts the plain-text Abstract paragraph from the compiled DOM Markdown for search cards.
   *
   * @param {string} arg0_body_md - Evaluated Markdown body.
   * @return {string} Plain-text abstract summary.
   */
  extractAbstractExcerpt: function (arg0_body_md) {
    //Convert from parameters
    let body_md = String(arg0_body_md || "");

    //Declare local instance variables
    let abs_match = body_md.match(/^#\s+Abstract\s*\r?\n+([\s\S]*?)(?=\r?\n+#\s+)/m);
    let raw_abs = (abs_match) ? abs_match[1] : "";

    raw_abs = raw_abs
      .replace(/<i>R<\/i><sup>2<\/sup>/gi, "R²")
      .replace(/<[^>]+>/g, "")
      .replace(/\\text\{([^}]+)\}/g, "$1")
      .replace(/\$R\^2\$/g, "R²")
      .replace(/\$([^$]+)\$/g, "$1")
      .replace(/--/g, "–")
      .replace(/\s+/g, " ")
      .trim();

    //Return statement
    return raw_abs;
  }
};

module.exports = { IntellteRmdCompiler };

