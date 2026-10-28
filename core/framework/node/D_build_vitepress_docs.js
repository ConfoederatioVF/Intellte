let fs = require("fs");
let path = require("path");

let IntellteVitePressBuilder = {
  /**
   * Step D: Emits VitePress Markdown pages (`docs/index.md`, `docs/records/<concept_id>/<version>.md`,
   * supplementary report pages, and `docs/public/search_index.json`).
   *
   * @param {Object} arg0_manifest - Manifest returned by C_stageArtefacts.
   * @return {Object} Summary of generated VitePress pages.
   */
  D_buildVitePressDocs: function (arg0_manifest) {
    //Convert from parameters
    let manifest = arg0_manifest;

    //Declare local instance variables
    let docs_dir = path.join(manifest.root_dir, "docs");
    let docs_public = path.join(docs_dir, "public");
    let docs_records = path.join(docs_dir, "records");
    let generated_files = [];
    let records = (manifest && Array.isArray(manifest.records)) ? manifest.records : [];
    let search_records = [];

    fs.mkdirSync(docs_public, { recursive: true });
    fs.mkdirSync(docs_records, { recursive: true });

    //Write localisation dictionary for client components
    let loc_json_path = path.join(docs_public, "localisation.json");
    fs.writeFileSync(loc_json_path, JSON.stringify(manifest.localisation, null, 2), "utf8");
    generated_files.push(loc_json_path);

    for (let i = 0; i < records.length; i++) {
      let local_rec = records[i];
      let rec_dir = path.join(docs_records, local_rec.concept_id);
      fs.mkdirSync(rec_dir, { recursive: true });

      let version_summaries = local_rec.versions.map((arg0_v) => ({
        date: arg0_v.published_date,
        is_latest: arg0_v.is_latest,
        pdf_size_euro: arg0_v.pdf_size_euro,
        pdf_url: arg0_v.pdf_url,
        route_url: arg0_v.route_url,
        status: arg0_v.status,
        version: arg0_v.version
      }));

      for (let x = 0; x < local_rec.versions.length; x++) {
        let local_ver = local_rec.versions[x];
        let page_md = IntellteVitePressBuilder.buildVersionPageMarkdown(local_rec, local_ver, version_summaries);
        let ver_md_path = path.join(rec_dir, `${local_ver.version}.md`);
        fs.writeFileSync(ver_md_path, page_md, "utf8");
        generated_files.push(ver_md_path);

        if (local_ver.is_latest) {
          let index_md_path = path.join(rec_dir, "index.md");
          fs.writeFileSync(index_md_path, page_md, "utf8");
          generated_files.push(index_md_path);
        }

        //Emit supplementary validation report pages
        for (let y = 0; y < local_ver.compiled_supplementary.length; y++) {
          let supp = local_ver.compiled_supplementary[y];
          let supp_page_md = IntellteVitePressBuilder.buildSupplementaryPageMarkdown(local_rec, local_ver, supp);
          let supp_md_path = path.join(rec_dir, `${local_ver.version}-${supp.key}.md`);
          fs.writeFileSync(supp_md_path, supp_page_md, "utf8");
          generated_files.push(supp_md_path);
        }

        //Add to client search index
        search_records.push({
          abstract_excerpt: local_ver.abstract_excerpt,
          authors_line: local_ver.authors_line,
          citation_mla: IntellteVitePressBuilder.formatMlaCitation(local_rec, local_ver),
          concept_id: local_rec.concept_id,
          hero_img_url: `${local_ver.artefact_base_url}/${path.basename(local_ver.hero_figure_rel || "cdt_proxy_vs_empirical.png")}`,
          is_latest: local_ver.is_latest,
          latest_version: local_rec.latest_version,
          pdf_size_euro: local_ver.pdf_size_euro,
          pdf_url: local_ver.pdf_url,
          project_id: local_rec.project_id,
          project_name: local_rec.project_name,
          published_date: local_ver.published_date,
          published_iso_gmt: local_ver.published_iso_gmt,
          record_id: local_ver.record_id,
          record_type: local_rec.record_type,
          rmd_url: local_ver.rmd_url,
          route_url: local_ver.route_url,
          staged_files: local_ver.staged_files,
          subtitle: local_ver.subtitle,
          supplementary_links: local_ver.compiled_supplementary.map((s) => ({
            key: s.key,
            route_url: s.route_url,
            title: s.title
          })),
          tags: local_rec.tags,
          title: local_ver.title,
          version: local_ver.version,
          versions: version_summaries
        });
      }
    }

    //Write search_index.json
    let search_json_path = path.join(docs_public, "search_index.json");
    fs.writeFileSync(search_json_path, JSON.stringify({ records: search_records }, null, 2), "utf8");
    generated_files.push(search_json_path);

    //Write top-level docs/index.md portal page
    let root_index_path = path.join(docs_dir, "index.md");
    fs.writeFileSync(root_index_path, IntellteVitePressBuilder.buildPortalHomeMarkdown(), "utf8");
    generated_files.push(root_index_path);

    //Return statement
    return {
      generated_files: generated_files,
      record_count: search_records.length
    };
  },


  /**
   * Builds the top-level Intellte Working Papers Portal home page (`docs/index.md`).
   *
   * @return {string} Markdown content for `docs/index.md`.
   */
  buildPortalHomeMarkdown: function () {
    //Declare local instance variables
    let lines = [
      "---",
      "title: \"Intellte — CRD Working Papers Repository\"",
      "layout: page",
      "sidebar: false",
      "aside: false",
      "---",
      "",
      "<RecordSearchCatalogue />",
      ""
    ];

    //Return statement
    return lines.join("\n");
  },


  /**
   * Builds a VitePress page for a supplementary validation Markdown report (e.g. `cdt.md`, `ndt.md`).
   *
   * @param {Object} arg0_rec - Record object.
   * @param {Object} arg1_ver - Version object.
   * @param {Object} arg2_supp - Compiled supplementary report item.
   * @return {string} Markdown content.
   */
  buildSupplementaryPageMarkdown: function (arg0_rec, arg1_ver, arg2_supp) {
    //Convert from parameters
    let rec = arg0_rec;
    let ver = arg1_ver;
    let supp = arg2_supp;

    //Declare local instance variables
    let lines = [
      "---",
      `title: "${supp.title.replace(/"/g, '\\"')}"`,
      "layout: page",
      "sidebar: false",
      "aside: false",
      "---",
      "",
      `<div class="crd-supp-page-shell">`,
      `  <div class="crd-supp-breadcrumb">`,
      `    <a href="/">Intellte Catalogue</a> <span>/</span> `,
      `    <a href="${ver.route_url}">${rec.project_name} (v${ver.version})</a> <span>/</span> `,
      `    <strong>${supp.title}</strong>`,
      `  </div>`,
      `  <div class="crd-wysiwyg-paper crd-supp-paper">`,
      "",
      supp.content_md,
      "",
      `  </div>`,
      `</div>`,
      ""
    ];

    //Return statement
    return lines.join("\n");
  },


  /**
   * Builds a versioned working paper VitePress page (`docs/records/<concept_id>/<version>.md`)
   * wrapping the WYSIWYG R Markdown DOM output inside `<PdfSplitWorkspace>`.
   *
   * @param {Object} arg0_rec - Parent record metadata.
   * @param {Object} arg1_ver - Version metadata and compiled DOM content.
   * @param {Array} arg2_version_summaries - Summary list of all versions for this concept.
   * @return {string} Markdown content for the versioned working paper page.
   */
  buildVersionPageMarkdown: function (arg0_rec, arg1_ver, arg2_version_summaries) {
    //Convert from parameters
    let rec = arg0_rec;
    let ver = arg1_ver;
    let version_summaries = arg2_version_summaries;

    //Declare local instance variables
    let meta_payload = {
      authors_line: ver.authors_line,
      citation_mla: IntellteVitePressBuilder.formatMlaCitation(rec, ver),
      concept_id: rec.concept_id,
      is_latest: ver.is_latest,
      latest_route_url: `/records/${rec.concept_id}/${rec.latest_version}`,
      latest_version: rec.latest_version,
      pdf_size_euro: ver.pdf_size_euro,
      pdf_url: ver.pdf_url,
      project_id: rec.project_id,
      project_name: rec.project_name,
      published_date: ver.published_date,
      record_id: ver.record_id,
      record_type: rec.record_type,
      rmd_url: ver.rmd_url,
      staged_files: ver.staged_files,
      supplementary_links: ver.compiled_supplementary.map((s) => ({
        key: s.key,
        route_url: s.route_url,
        title: s.title
      })),
      tags: rec.tags,
      title: ver.title,
      version: ver.version,
      versions: version_summaries
    };
    let meta_json_b64 = Buffer.from(JSON.stringify(meta_payload), "utf8").toString("base64");

    let lines = [
      "---",
      `title: "${ver.title.replace(/"/g, '\\"')} (v${ver.version})"`,
      "layout: page",
      "sidebar: false",
      "aside: false",
      "---",
      "",
      `<PdfSplitWorkspace record-b64="${meta_json_b64}">`,
      "",
      `<div class="crd-wysiwyg-paper">`,
      "",
      ver.compiled_dom.full_dom_md,
      "",
      `</div>`,
      "",
      `</PdfSplitWorkspace>`,
      ""
    ];

    //Return statement
    return lines.join("\n");
  },


  /**
   * Formats an MLA-style citation string for a working paper version.
   *
   * @param {Object} arg0_rec - Record object.
   * @param {Object} arg1_ver - Version object.
   * @return {string} Formatted MLA citation.
   */
  formatMlaCitation: function (arg0_rec, arg1_ver) {
    //Convert from parameters
    let rec = arg0_rec;
    let ver = arg1_ver;

    //Declare local instance variables
    let clean_title = String(ver.title || "").replace(/\.$/, "");
    let clean_sub = String(ver.subtitle || "").replace(/\.$/, "");
    let full_title = (clean_sub) ? `${clean_title}: ${clean_sub}` : clean_title;

    //Return statement
    return `${ver.authors_line}. "${full_title}." Confoederatio, Research Division (CRD), Working Paper ${rec.project_id} (v${ver.version}), ${ver.published_date}.`;
  }
};

module.exports = { IntellteVitePressBuilder };

