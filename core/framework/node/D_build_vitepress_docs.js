let fs = require("fs");
let path = require("path");
let { IntellteDiscovery } = require("./A_discover_records.js");

let IntellteVitePressBuilder = {
  /**
   * Step D: Emits VitePress Markdown pages (`docs/index.md`, `docs/records/<concept_id>/<version>.md`,
   * project/folder stub pages, supplementary report pages, `docs/data/search_index.json`, and `docs/public/search_index.json`).
   *
   * @param {Object} arg0_manifest - Manifest returned by C_stageArtefacts.
   * @return {Object} Summary of generated VitePress pages.
   */
  D_buildVitePressDocs: function (arg0_manifest) {
    //Convert from parameters
    let manifest = arg0_manifest;

    //Declare local instance variables
    let active_concepts_obj = {};
    let docs_data = path.join(manifest.root_dir, "docs/data");
    let docs_dir = path.join(manifest.root_dir, "docs");
    let docs_public = path.join(docs_dir, "public");
    let docs_records = path.join(docs_dir, "records");
    let generated_files = [];
    let loc_data_json_path = "";
    let loc_json_path = "";
    let loc_string = "";
    let records = (manifest && Array.isArray(manifest.records)) ? manifest.records : [];
    let root_index_path = "";
    let search_data_json_path = "";
    let search_json_path = "";
    let search_records = [];
    let search_string = "";

    fs.mkdirSync(docs_data, { recursive: true });
    fs.mkdirSync(docs_public, { recursive: true });
    fs.mkdirSync(docs_records, { recursive: true });

    //Write localisation dictionary for client components
    loc_data_json_path = path.join(docs_data, "localisation.json");
    loc_json_path = path.join(docs_public, "localisation.json");
    loc_string = JSON.stringify(manifest.localisation, null, 2);

    fs.writeFileSync(loc_data_json_path, loc_string, "utf8");
    fs.writeFileSync(loc_json_path, loc_string, "utf8");
    generated_files.push(loc_data_json_path);
    generated_files.push(loc_json_path);

    for (let i = 0; i < records.length; i++) {
      let local_expected_entries_obj = {};
      let local_folders_map = {};
      let local_rec = records[i];
      let rec_dir = path.join(docs_records, local_rec.concept_id);
      active_concepts_obj[String(local_rec.concept_id)] = true;
      fs.mkdirSync(rec_dir, { recursive: true });

      let version_summaries = local_rec.versions.map((arg0_v) => ({
        dataset_filename: arg0_v.dataset_filename || "",
        dataset_url: arg0_v.dataset_url || null,
        date: arg0_v.published_date,
        folder_key: arg0_v.folder_key || "",
        folder_label: arg0_v.folder_label || "",
        folder_route_url: arg0_v.folder_route_url || "",
        is_latest: arg0_v.is_latest,
        is_synthetic: Boolean(arg0_v.is_synthetic),
        label: arg0_v.label || arg0_v.version,
        parent_version: arg0_v.parent_version || "",
        pdf_size_euro: arg0_v.pdf_size_euro,
        pdf_url: arg0_v.pdf_url,
        route_url: arg0_v.version_route_url || arg0_v.route_url,
        status: arg0_v.status,
        subtitle: arg0_v.subtitle || "",
        title: arg0_v.title || "",
        version: arg0_v.version
      }));

      if (local_rec.has_folder_tree) {
        let project_stub_md = IntellteVitePressBuilder.buildProjectStubPageMarkdown(local_rec, version_summaries);
        let index_md_path = path.join(rec_dir, "index.md");
        fs.writeFileSync(index_md_path, project_stub_md, "utf8");
        generated_files.push(index_md_path);
        local_expected_entries_obj["index.md"] = true;

        for (let x = 0; x < local_rec.versions.length; x++) {
          let local_v = local_rec.versions[x];
          if (local_v.folder_key && !local_folders_map[local_v.folder_key]) {
            local_folders_map[local_v.folder_key] = local_v.folder_label || local_v.folder_key;
          }
        }

        let all_folder_keys = Object.keys(local_folders_map);
        for (let x = 0; x < all_folder_keys.length; x++) {
          let local_fkey = all_folder_keys[x];
          let local_flabel = local_folders_map[local_fkey];
          let folder_stub_md = IntellteVitePressBuilder.buildProjectStubPageMarkdown(local_rec, version_summaries, {
            folder_key: local_fkey,
            folder_label: local_flabel
          });

          let folder_dir = path.join(rec_dir, local_fkey);
          fs.mkdirSync(folder_dir, { recursive: true });
          let folder_index_path = path.join(folder_dir, "index.md");
          fs.writeFileSync(folder_index_path, folder_stub_md, "utf8");
          generated_files.push(folder_index_path);
          local_expected_entries_obj[local_fkey] = true;

          let folder_md_path = path.join(rec_dir, `${local_fkey}.md`);
          fs.writeFileSync(folder_md_path, folder_stub_md, "utf8");
          generated_files.push(folder_md_path);
          local_expected_entries_obj[`${local_fkey}.md`] = true;
        }
      }

      for (let x = 0; x < local_rec.versions.length; x++) {
        let local_ver = local_rec.versions[x];
        let page_md = IntellteVitePressBuilder.buildVersionPageMarkdown(local_rec, local_ver, version_summaries, {
          canonical_route: `/records/${local_rec.concept_id}/${local_ver.version}/`
        });

        // 1. Version directory index (for route /records/<concept_id>/<version>/)
        let ver_dir = path.join(rec_dir, local_ver.version);
        fs.mkdirSync(ver_dir, { recursive: true });
        let ver_index_path = path.join(ver_dir, "index.md");
        fs.writeFileSync(ver_index_path, page_md, "utf8");
        generated_files.push(ver_index_path);
        local_expected_entries_obj[String(local_ver.version)] = true;

        // 2. Version flat markdown file (for route /records/<concept_id>/<version>)
        let ver_md_path = path.join(rec_dir, `${local_ver.version}.md`);
        fs.writeFileSync(ver_md_path, page_md, "utf8");
        generated_files.push(ver_md_path);
        local_expected_entries_obj[`${local_ver.version}.md`] = true;

        if (local_ver.is_latest && !local_rec.has_folder_tree) {
          let root_page_md = IntellteVitePressBuilder.buildVersionPageMarkdown(local_rec, local_ver, version_summaries, {
            canonical_route: `/records/${local_rec.concept_id}/`
          });
          let index_md_path = path.join(rec_dir, "index.md");
          fs.writeFileSync(index_md_path, root_page_md, "utf8");
          generated_files.push(index_md_path);
          local_expected_entries_obj["index.md"] = true;
        }

        // Emit supplementary validation report pages
        let supp_reports = Array.isArray(local_ver.compiled_supplementary) ? local_ver.compiled_supplementary : [];
        for (let y = 0; y < supp_reports.length; y++) {
          let supp = supp_reports[y];
          let supp_page_md = IntellteVitePressBuilder.buildSupplementaryPageMarkdown(local_rec, local_ver, supp);

          let supp_dir = path.join(rec_dir, `${local_ver.version}-${supp.key}`);
          fs.mkdirSync(supp_dir, { recursive: true });
          let supp_index_path = path.join(supp_dir, "index.md");
          fs.writeFileSync(supp_index_path, supp_page_md, "utf8");
          generated_files.push(supp_index_path);
          local_expected_entries_obj[`${local_ver.version}-${supp.key}`] = true;

          let supp_md_path = path.join(rec_dir, `${local_ver.version}-${supp.key}.md`);
          fs.writeFileSync(supp_md_path, supp_page_md, "utf8");
          generated_files.push(supp_md_path);
          local_expected_entries_obj[`${local_ver.version}-${supp.key}.md`] = true;
        }

        //Add to client search index
        search_records.push({
          abstract_excerpt: local_ver.abstract_excerpt,
          abstract_html: local_ver.abstract_html || "",
          authors: local_ver.authors,
          authors_line: local_ver.authors_line,
          citation_mla: IntellteVitePressBuilder.formatMlaCitation(local_rec, local_ver),
          concept_id: local_rec.concept_id,
          dataset_filename: local_ver.dataset_filename || "",
          dataset_url: local_ver.dataset_url || null,
          divisions: local_ver.divisions,
          folder_key: local_ver.folder_key || "",
          folder_label: local_ver.folder_label || "",
          folder_route_url: local_ver.folder_route_url || "",
          hero_img_url: (local_ver.hero_figure_rel) ? `${local_ver.artefact_base_url}/${path.basename(local_ver.hero_figure_rel)}` : null,
          is_latest: local_ver.is_latest,
          is_synthetic: Boolean(local_ver.is_synthetic),
          label: local_ver.label || local_ver.version,
          latest_route_url: `/records/${local_rec.concept_id}/`,
          latest_version: local_rec.latest_version,
          parent_version: local_ver.parent_version || "",
          pdf_size_euro: local_ver.pdf_size_euro,
          pdf_url: local_ver.pdf_url,
          project_name: local_rec.project_name,
          published_date: local_ver.published_date,
          published_timestamp: local_ver.published_timestamp,
          record_id: local_ver.record_id,
          record_type: local_rec.record_type,
          rmd_url: local_ver.rmd_url,
          route_url: local_ver.route_url,
          source_papers: local_ver.source_papers || [],
          staged_files: local_ver.staged_files,
          subtitle: local_ver.subtitle,
          supplementary_links: supp_reports.map((arg0_s) => ({
            key: arg0_s.key,
            route_url: arg0_s.route_url,
            title: arg0_s.title
          })),
          tags: local_ver.tags || local_rec.tags,
          title: local_ver.title,
          version: local_ver.version,
          versions: version_summaries
        });
      }

      if (fs.existsSync(rec_dir)) {
        let existing_rec_entries = fs.readdirSync(rec_dir);
        for (let x = 0; x < existing_rec_entries.length; x++) {
          let local_entry_name = existing_rec_entries[x];
          if (!local_expected_entries_obj[local_entry_name]) {
            try {
              fs.rmSync(path.join(rec_dir, local_entry_name), { force: true, recursive: true });
            } catch (e) {
              console.error(`[IntellteVitePressBuilder] Could not remove stale record entry: ${local_entry_name}`);
            }
          }
        }
      }
    }

    if (fs.existsSync(docs_records)) {
      let existing_concepts = fs.readdirSync(docs_records, { withFileTypes: true });
      for (let i = 0; i < existing_concepts.length; i++) {
        let local_entry = existing_concepts[i];
        if (local_entry.isDirectory() && !active_concepts_obj[local_entry.name]) {
          try {
            fs.rmSync(path.join(docs_records, local_entry.name), { force: true, recursive: true });
          } catch (e) {}
        }
      }
    }

    //Write search_index.json
    search_data_json_path = path.join(docs_data, "search_index.json");
    search_json_path = path.join(docs_public, "search_index.json");
    search_string = JSON.stringify({ records: search_records }, null, 2);

    fs.writeFileSync(search_data_json_path, search_string, "utf8");
    fs.writeFileSync(search_json_path, search_string, "utf8");
    generated_files.push(search_data_json_path);
    generated_files.push(search_json_path);

    //Write top-level docs/index.md portal page
    root_index_path = path.join(docs_dir, "index.md");
    fs.writeFileSync(root_index_path, IntellteVitePressBuilder.buildPortalHomeMarkdown(), "utf8");
    generated_files.push(root_index_path);

    //Return statement
    return {
      generated_files: generated_files,
      record_count: search_records.length
    };
  },


  /**
   * Builds the multi-column HTML author and division affiliation block for PDF-only record headers.
   *
   * @param {Object} arg0_ver - Enriched version metadata object.
   * @return {string} Indented HTML string for `.crd-authors-block`.
   */
  buildAuthorsBlockHtml: function (arg0_ver) {
    //Convert from parameters
    let ver = (arg0_ver) ? arg0_ver : {};

    //Declare local instance variables
    let authors_array = Array.isArray(ver.authors) ? ver.authors : [];
    let html_lines = [];

    //Format html_lines
    html_lines.push(`    <div class="crd-authors-block">`);
    for (let i = 0; i < authors_array.length; i++) {
      let local_author = authors_array[i];
      let local_affil = String(local_author.affiliation || "").trim();
      let local_name = String(local_author.name || "").trim();

      html_lines.push(`      <div class="crd-author-item">`);
      html_lines.push(`        <div class="crd-author-name">${IntellteVitePressBuilder.escapeHtml(local_name)}</div>`);
      if (local_affil && local_affil !== local_name) {
        html_lines.push(`        <div class="crd-author-affil">${IntellteVitePressBuilder.escapeHtml(local_affil)}</div>`);
      }
      html_lines.push(`      </div>`);
    }
    html_lines.push(`    </div>`);

    //Return statement
    return html_lines.join("\n");
  },


  /**
   * Builds YAML frontmatter lines including `<title>`, `<meta name="description">`, OpenGraph (`og:title`, `og:description`, `og:url`) and Twitter card tags for search crawlers and Discord/social media embeds.
   *
   * @param {Object} arg0_options - Frontmatter configuration (`canonical_route`, `description`, `og_title`, `title`, `title_template`).
   * @return {string[]} Array of YAML frontmatter lines (including `---` delimiters).
   */
  buildFrontmatterLines: function (arg0_options) {
    //Convert from parameters
    let options = (arg0_options) ? arg0_options : {};

    //Initialise options
    let canonical_route = String(options.canonical_route || "/");
    let description = String(options.description || "Confoederatio, Research Division (CRD) Working Papers").trim();
    let og_title = String(options.og_title || options.title || "Intellte (CRD)").trim();
    let title = String(options.title || "Intellte (CRD)").trim();
    let title_template = options.title_template;

    //Declare local instance variables
    let canonical_url = `https://intellte.confoederatio.org${canonical_route.startsWith("/") ? canonical_route : "/" + canonical_route}`;
    let esc_desc = IntellteVitePressBuilder.escapeYamlDoubleQuoted(description);
    let esc_og_title = IntellteVitePressBuilder.escapeYamlDoubleQuoted(og_title);
    let esc_title = IntellteVitePressBuilder.escapeYamlDoubleQuoted(title);
    let esc_url = IntellteVitePressBuilder.escapeYamlDoubleQuoted(canonical_url);
    let fm_lines = [];

    //Format fm_lines
    fm_lines.push("---");
    fm_lines.push(`title: "${esc_title}"`);
    if (title_template === false) {
      fm_lines.push("titleTemplate: false");
    }
    fm_lines.push(`description: "${esc_desc}"`);
    fm_lines.push("layout: page");
    fm_lines.push("sidebar: false");
    fm_lines.push("aside: false");
    fm_lines.push("head:");
    fm_lines.push("  - - meta");
    fm_lines.push("    - property: og:type");
    fm_lines.push("      content: website");
    fm_lines.push("  - - meta");
    fm_lines.push("    - property: og:site_name");
    fm_lines.push("      content: \"Intellte (CRD)\"");
    fm_lines.push("  - - meta");
    fm_lines.push("    - property: og:title");
    fm_lines.push(`      content: "${esc_og_title}"`);
    fm_lines.push("  - - meta");
    fm_lines.push("    - property: og:description");
    fm_lines.push(`      content: "${esc_desc}"`);
    fm_lines.push("  - - meta");
    fm_lines.push("    - property: og:url");
    fm_lines.push(`      content: "${esc_url}"`);
    fm_lines.push("  - - meta");
    fm_lines.push("    - name: twitter:card");
    fm_lines.push("      content: summary");
    fm_lines.push("  - - meta");
    fm_lines.push("    - name: twitter:title");
    fm_lines.push(`      content: "${esc_og_title}"`);
    fm_lines.push("  - - meta");
    fm_lines.push("    - name: twitter:description");
    fm_lines.push(`      content: "${esc_desc}"`);
    fm_lines.push("---");

    //Return statement
    return fm_lines;
  },


  /**
   * Builds the top-level Intellte Working Papers Portal home page (`docs/index.md`).
   *
   * @return {string} Markdown content for `docs/index.md`.
   */
  buildPortalHomeMarkdown: function () {
    //Declare local instance variables
    let fm_lines = IntellteVitePressBuilder.buildFrontmatterLines({
      canonical_route: "/",
      description: "Confoederatio, Research Division (CRD) Working Papers Catalogue.",
      og_title: "Intellte (CRD)",
      title: "Intellte (CRD)",
      title_template: false
    });
    let lines = [
      ...fm_lines,
      "",
      "<RecordSearchCatalogue />",
      ""
    ];

    //Return statement
    return lines.join("\n");
  },


  /**
   * Builds a concise `<meta name="description">` and OpenGraph summary listing the direct papers contained beneath a project or folder endpoint.
   *
   * @param {Object} arg0_rec - Parent record metadata object.
   * @param {Object} [arg1_options] - Optional filter (`folder_key`, `folder_label`).
   * @return {string} Meta description string listing direct papers underneath the endpoint.
   */
  buildProjectMetaDescription: function (arg0_rec, arg1_options) {
    //Convert from parameters
    let rec = (arg0_rec) ? arg0_rec : {};
    let options = (arg1_options) ? arg1_options : {};

    //Initialise options
    let folder_key = String(options.folder_key || "");
    let folder_label = String(options.folder_label || "");

    //Declare local instance variables
    let all_versions = Array.isArray(rec.versions) ? rec.versions : [];
    let child_count = 0;
    let direct_labels = [];
    let scoped_versions = [];

    for (let i = 0; i < all_versions.length; i++) {
      let local_v = all_versions[i];
      if (!folder_key || local_v.folder_key === folder_key) {
        scoped_versions.push(local_v);
      }
    }

    if (!folder_key) {
      for (let i = 0; i < scoped_versions.length; i++) {
        let local_v = scoped_versions[i];
        if (local_v.parent_version) {
          child_count++;
        } else {
          direct_labels.push(`${local_v.title} (${local_v.version})`);
        }
      }
      if (child_count > 0) {
        direct_labels.push(`${child_count} accompanying Settlement Gazetteers`);
      }
      return `${rec.project_name} contains ${scoped_versions.length} working papers: ${IntellteDiscovery.formatNaturalList(direct_labels)}.`;
    }

    for (let i = 0; i < scoped_versions.length; i++) {
      let local_v = scoped_versions[i];
      direct_labels.push(`${local_v.title} (${local_v.version})`);
    }

    //Return statement
    return `${rec.project_name} / ${folder_label} contains ${scoped_versions.length} working papers: ${IntellteDiscovery.formatNaturalList(direct_labels)}.`;
  },


  /**
   * Builds an auto-generated formulaic stub page (`docs/records/<concept_id>/index.md` or `docs/records/<concept_id>/<folder_key>/index.md`) when no single working paper exists at that project or folder layer.
   *
   * @param {Object} arg0_rec - Parent record metadata object.
   * @param {Array} arg1_version_summaries - Summary list of all versions for this concept.
   * @param {Object} [arg2_options] - Optional folder filter (`folder_key`, `folder_label`).
   * @return {string} Markdown content for the project or folder stub page.
   */
  buildProjectStubPageMarkdown: function (arg0_rec, arg1_version_summaries, arg2_options) {
    //Convert from parameters
    let rec = (arg0_rec) ? arg0_rec : {};
    let version_summaries = Array.isArray(arg1_version_summaries) ? arg1_version_summaries : [];
    let options = (arg2_options) ? arg2_options : {};

    //Initialise options
    let folder_key = String(options.folder_key || "");
    let folder_label = String(options.folder_label || "");

    //Declare local instance variables
    let aggregated_authors = [];
    let aggregated_source_papers = [];
    let aggregated_staged_files = [];
    let aggregated_tags = [];
    let all_versions = Array.isArray(rec.versions) ? rec.versions : [];
    let canonical_route = (folder_key)
      ? `/records/${rec.concept_id}/${folder_key}/`
      : `/records/${rec.concept_id}/`;
    let folder_groups = [];
    let folder_map = {};
    let html_lines = [];
    let latest_ver = all_versions.find((arg0_v) => Boolean(arg0_v.is_latest)) || all_versions[0] || {};
    let meta_description = IntellteVitePressBuilder.buildProjectMetaDescription(rec, {
      folder_key: folder_key,
      folder_label: folder_label
    });
    let page_title = (folder_key)
      ? `${rec.project_name} / ${folder_label}`
      : rec.project_name;
    let scoped_versions = [];
    let seen_authors_obj = {};
    let seen_files_obj = {};
    let seen_sources_obj = {};

    for (let i = 0; i < all_versions.length; i++) {
      let local_v = all_versions[i];
      if (!folder_key || local_v.folder_key === folder_key) {
        scoped_versions.push(local_v);
      }
    }

    for (let i = 0; i < scoped_versions.length; i++) {
      let local_v = scoped_versions[i];
      let local_authors = Array.isArray(local_v.authors) ? local_v.authors : [];
      let local_files = Array.isArray(local_v.staged_files) ? local_v.staged_files : [];
      let local_sources = Array.isArray(local_v.source_papers) ? local_v.source_papers : [];
      let local_tags = Array.isArray(local_v.tags) ? local_v.tags : [];

      for (let x = 0; x < local_authors.length; x++) {
        let local_name = String(local_authors[x].name || "").trim();
        if (local_name && !seen_authors_obj[local_name]) {
          seen_authors_obj[local_name] = true;
          aggregated_authors.push(local_name);
        }
      }

      for (let x = 0; x < local_tags.length; x++) {
        let local_tg = local_tags[x];
        if (local_tg && !aggregated_tags.includes(local_tg)) {
          aggregated_tags.push(local_tg);
        }
      }

      for (let x = 0; x < local_files.length; x++) {
        let local_f = local_files[x];
        if (
          (local_f.category === "Supplementary Material (JSON)" || local_f.category === "PDF Manuscript") &&
          !seen_files_obj[local_f.filename]
        ) {
          seen_files_obj[local_f.filename] = true;
          aggregated_staged_files.push(local_f);
        }
      }

      for (let x = 0; x < local_sources.length; x++) {
        let local_sp = local_sources[x];
        if (local_sp && local_sp.filename && !seen_sources_obj[local_sp.filename]) {
          seen_sources_obj[local_sp.filename] = true;
          aggregated_source_papers.push(local_sp);
        }
      }

      let f_key = local_v.folder_key || "general";
      let f_label = local_v.folder_label || "General";
      if (!folder_map[f_key]) {
        folder_map[f_key] = {
          items: [],
          key: f_key,
          label: f_label,
          route_url: local_v.folder_route_url || `/records/${rec.concept_id}/${f_key}/`,
          versions: []
        };
        folder_groups.push(folder_map[f_key]);
      }
      folder_map[f_key].versions.push(local_v);
    }

    for (let i = 0; i < folder_groups.length; i++) {
      let local_fg = folder_groups[i];
      let by_ver_obj = {};
      for (let x = 0; x < local_fg.versions.length; x++) {
        let v = local_fg.versions[x];
        by_ver_obj[v.version] = { children: [], ver: v };
      }
      for (let x = 0; x < local_fg.versions.length; x++) {
        let v = local_fg.versions[x];
        let node = by_ver_obj[v.version];
        if (v.parent_version && by_ver_obj[v.parent_version]) {
          by_ver_obj[v.parent_version].children.push(node);
        } else {
          local_fg.items.push(node);
        }
      }
    }

    let authors_line_str = (aggregated_authors.length > 0)
      ? IntellteDiscovery.formatNaturalList(aggregated_authors)
      : (latest_ver.authors_line || "Confoederatio, Research Division (CRD)");
    let header_title_upper = (folder_key)
      ? `${rec.project_name.toUpperCase()}: ${folder_label.toUpperCase()}.`
      : `${rec.project_name.toUpperCase()}.`;
    let stub_intro_html = (folder_key)
      ? `This folder contains <strong>${scoped_versions.length}</strong> papers within <a href="/records/${rec.concept_id}/">${IntellteVitePressBuilder.escapeHtml(rec.project_name)}</a>, structured as follows.`
      : `This project contains <strong>${scoped_versions.length}</strong> papers, structured as follows.`;

    //Format html_lines
    html_lines.push(`<div class="crd-wysiwyg-paper crd-project-stub-view">`);
    html_lines.push(`  <header class="crd-paper-header">`);
    html_lines.push(`    <div class="crd-banner-row">`);
    html_lines.push(`      <img class="crd-banner-logo" src="/artefacts/crd_logo.png" alt="CRD Emblem" />`);
    html_lines.push(`      <div class="crd-banner-text">`);
    html_lines.push(`        <div class="crd-banner-line">CONFOEDERATIO,</div>`);
    html_lines.push(`        <div class="crd-banner-line">RESEARCH DIVISION (CRD).</div>`);
    html_lines.push(`      </div>`);
    html_lines.push(`    </div>`);
    html_lines.push(`    <div class="crd-paper-title">${IntellteVitePressBuilder.escapeHtml(header_title_upper)}</div>`);
    html_lines.push(`    <div class="crd-paper-byline">${IntellteVitePressBuilder.escapeHtml(latest_ver.published_date || "")} - ${IntellteVitePressBuilder.escapeHtml(authors_line_str)}</div>`);
    html_lines.push(`  </header>`);
    html_lines.push(`  <p class="crd-stub-lead">${stub_intro_html}</p>`);
    html_lines.push(`  <div class="crd-stub-heading">File Structure:</div>`);
    html_lines.push(`  <div class="crd-file-structure-tree">`);
    html_lines.push(`    <div class="crd-fs-project-root">`);
    html_lines.push(`      <a href="/records/${rec.concept_id}/" class="crd-fs-root-link">${IntellteVitePressBuilder.escapeHtml(rec.project_name)} (<code>/records/${IntellteVitePressBuilder.escapeHtml(rec.concept_id)}/</code>)</a>`);
    html_lines.push(`    </div>`);
    html_lines.push(`    <ul class="crd-fs-folder-list">`);

    for (let i = 0; i < folder_groups.length; i++) {
      let fg = folder_groups[i];
      html_lines.push(`      <li class="crd-fs-folder-item">`);
      html_lines.push(`        <div class="crd-fs-folder-header">`);
      html_lines.push(`          <a href="${fg.route_url}" class="crd-fs-folder-link">${IntellteVitePressBuilder.escapeHtml(fg.label)}</a>`);
      html_lines.push(`          <code class="crd-fs-folder-path">${IntellteVitePressBuilder.escapeHtml(fg.key)}/</code>`);
      html_lines.push(`        </div>`);
      html_lines.push(`        <ul class="crd-fs-paper-list">`);

      for (let x = 0; x < fg.items.length; x++) {
        let item_node = fg.items[x];
        let v = item_node.ver;
        html_lines.push(`          <li class="crd-fs-paper-item">`);
        html_lines.push(`            <div class="crd-fs-paper-row">`);
        html_lines.push(`              <div class="crd-fs-paper-main">`);
        html_lines.push(`                <a href="${v.version_route_url || v.route_url}" class="crd-fs-paper-title">${IntellteVitePressBuilder.escapeHtml(v.title)}</a>`);
        html_lines.push(`                <span class="crd-fs-paper-meta">${IntellteVitePressBuilder.escapeHtml(v.label || v.version)} · ${IntellteVitePressBuilder.escapeHtml(v.published_date)}</span>`);
        html_lines.push(`              </div>`);
        html_lines.push(`              <div class="crd-fs-paper-actions">`);
        html_lines.push(`                <a href="${v.version_route_url || v.route_url}" class="crd-fs-action-link">Read Paper</a>`);
        if (v.pdf_url) {
          html_lines.push(`                <a href="${v.pdf_url}" download class="crd-fs-action-link">PDF (${IntellteVitePressBuilder.escapeHtml(v.pdf_size_euro || "")})</a>`);
        }
        if (v.dataset_url) {
          html_lines.push(`                <a href="${v.dataset_url}" download class="crd-fs-action-link">${IntellteVitePressBuilder.escapeHtml(v.dataset_filename || "JSON")}</a>`);
        }
        html_lines.push(`              </div>`);
        html_lines.push(`            </div>`);

        if (item_node.children.length > 0) {
          html_lines.push(`            <ul class="crd-fs-child-list">`);
          for (let y = 0; y < item_node.children.length; y++) {
            let cv = item_node.children[y].ver;
            html_lines.push(`              <li class="crd-fs-child-item">`);
            html_lines.push(`                <div class="crd-fs-paper-row">`);
            html_lines.push(`                  <div class="crd-fs-paper-main">`);
            html_lines.push(`                    <a href="${cv.version_route_url || cv.route_url}" class="crd-fs-paper-title">${IntellteVitePressBuilder.escapeHtml(cv.title)}</a>`);
            html_lines.push(`                    <span class="crd-fs-paper-meta">${IntellteVitePressBuilder.escapeHtml(cv.label || cv.version)} · ${IntellteVitePressBuilder.escapeHtml(cv.published_date)}</span>`);
            html_lines.push(`                  </div>`);
            html_lines.push(`                  <div class="crd-fs-paper-actions">`);
            html_lines.push(`                    <a href="${cv.version_route_url || cv.route_url}" class="crd-fs-action-link">Read Paper</a>`);
            if (cv.pdf_url) {
              html_lines.push(`                    <a href="${cv.pdf_url}" download class="crd-fs-action-link">PDF (${IntellteVitePressBuilder.escapeHtml(cv.pdf_size_euro || "")})</a>`);
            }
            if (cv.dataset_url) {
              html_lines.push(`                    <a href="${cv.dataset_url}" download class="crd-fs-action-link">${IntellteVitePressBuilder.escapeHtml(cv.dataset_filename || "JSON")}</a>`);
            }
            html_lines.push(`                  </div>`);
            html_lines.push(`                </div>`);
            html_lines.push(`              </li>`);
          }
          html_lines.push(`            </ul>`);
        }

        html_lines.push(`          </li>`);
      }

      html_lines.push(`        </ul>`);
      html_lines.push(`      </li>`);
    }

    html_lines.push(`    </ul>`);
    html_lines.push(`  </div>`);
    html_lines.push(`</div>`);

    let meta_payload = {
      authors: latest_ver.authors || [],
      authors_line: authors_line_str,
      citation_mla: `${authors_line_str}. "${page_title}." Confoederatio, Research Division (CRD), ${rec.record_type || "Working Paper"} Series (${scoped_versions.length} papers), ${latest_ver.published_date || "2026"}.`,
      concept_id: rec.concept_id,
      divisions: latest_ver.divisions || [],
      folder_key: folder_key,
      folder_label: folder_label,
      folder_route_url: (folder_key) ? canonical_route : "",
      has_dom: true,
      is_folder_stub: Boolean(folder_key),
      is_latest: false,
      is_project_stub: !folder_key,
      is_synthetic: Boolean(rec.is_synthetic),
      label: (folder_key) ? folder_label : rec.project_name,
      latest_route_url: `/records/${rec.concept_id}/`,
      latest_version: rec.latest_version,
      pdf_size_euro: "",
      pdf_url: null,
      project_name: rec.project_name,
      published_date: latest_ver.published_date || "",
      record_id: (folder_key) ? `${rec.concept_id}-${folder_key}` : rec.concept_id,
      record_type: rec.record_type,
      rmd_url: null,
      source_papers: aggregated_source_papers,
      staged_files: aggregated_staged_files,
      status: "Published",
      supplementary_links: [],
      tags: (aggregated_tags.length > 0) ? aggregated_tags : (rec.tags || []),
      title: page_title,
      version: "",
      versions: version_summaries
    };
    let meta_json_b64 = Buffer.from(JSON.stringify(meta_payload), "utf8").toString("base64");

    let fm_lines = IntellteVitePressBuilder.buildFrontmatterLines({
      canonical_route: canonical_route,
      description: meta_description,
      og_title: page_title,
      title: page_title
    });

    let lines = [
      ...fm_lines,
      "",
      `<PdfSplitWorkspace record-b64="${meta_json_b64}">`,
      "",
      ...html_lines,
      "",
      `</PdfSplitWorkspace>`,
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
    let fm_lines = IntellteVitePressBuilder.buildFrontmatterLines({
      canonical_route: supp.route_url || `/records/${rec.concept_id}/${ver.version}-${supp.key}/`,
      description: `${supp.title} - Supplementary report for ${rec.project_name} (${ver.version}).`,
      og_title: `${supp.title} | ${rec.project_name}`,
      title: supp.title
    });
    let lines = [
      ...fm_lines,
      "",
      `<div class="crd-supp-page-shell">`,
      `  <div class="crd-supp-breadcrumb">`,
      `    <a href="/">Intellte Catalogue</a> <span>/</span> `,
      `    <a href="${ver.route_url}">${rec.project_name} (${ver.version})</a> <span>/</span> `,
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
   * @param {Object} [arg3_options] - Optional settings (`canonical_route`).
   * @return {string} Markdown content for the versioned working paper page.
   */
  buildVersionPageMarkdown: function (arg0_rec, arg1_ver, arg2_version_summaries, arg3_options) {
    //Convert from parameters
    let rec = arg0_rec;
    let ver = arg1_ver;
    let version_summaries = arg2_version_summaries;
    let options = (arg3_options) ? arg3_options : {};

    //Initialise options
    let canonical_route = options.canonical_route || ver.route_url || `/records/${rec.concept_id}/${ver.version}/`;

    //Declare local instance variables
    let content_lines = [];
    let has_dom = Boolean(ver.compiled_dom && (ver.compiled_dom.full_dom_md || ver.compiled_dom.body_md));
    let meta_description = String(ver.abstract_excerpt || ver.subtitle || `${rec.project_name} Working Paper (${ver.version})`).trim();
    let supp_links = Array.isArray(ver.compiled_supplementary) ? ver.compiled_supplementary : [];

    let meta_payload = {
      authors: ver.authors,
      authors_line: ver.authors_line,
      citation_mla: IntellteVitePressBuilder.formatMlaCitation(rec, ver),
      concept_id: rec.concept_id,
      dataset_filename: ver.dataset_filename || "",
      dataset_url: ver.dataset_url || null,
      divisions: ver.divisions,
      folder_key: ver.folder_key || "",
      folder_label: ver.folder_label || "",
      folder_route_url: ver.folder_route_url || "",
      has_dom: has_dom,
      is_folder_stub: false,
      is_latest: ver.is_latest,
      is_project_stub: false,
      is_synthetic: Boolean(ver.is_synthetic),
      label: ver.label || ver.version,
      latest_route_url: `/records/${rec.concept_id}/`,
      latest_version: rec.latest_version,
      parent_version: ver.parent_version || "",
      pdf_size_euro: ver.pdf_size_euro,
      pdf_url: ver.pdf_url,
      project_name: rec.project_name,
      published_date: ver.published_date,
      record_id: ver.record_id,
      record_type: rec.record_type,
      rmd_url: ver.rmd_url,
      source_papers: ver.source_papers || [],
      staged_files: ver.staged_files,
      status: ver.status || "Published",
      supplementary_links: supp_links.map((arg0_s) => ({
        key: arg0_s.key,
        route_url: arg0_s.route_url,
        title: arg0_s.title
      })),
      tags: ver.tags || rec.tags,
      title: ver.title,
      version: ver.version,
      versions: version_summaries
    };
    let meta_json_b64 = Buffer.from(JSON.stringify(meta_payload), "utf8").toString("base64");

    if (has_dom) {
      content_lines.push(
        `<div class="crd-wysiwyg-paper">`,
        "",
        ver.compiled_dom.full_dom_md,
        "",
        `</div>`
      );
    } else {
      let local_abstract_html = "";
      let local_authors_html = IntellteVitePressBuilder.buildAuthorsBlockHtml(ver);
      let local_eyebrow = IntellteVitePressBuilder.formatDivisionEyebrow(rec, ver);
      let local_pdf_html = "";
      let local_subtitle_html = "";

      if (ver.abstract_excerpt) {
        local_abstract_html = `    <div class="crd-abstract-box"><p class="crd-abstract-heading">ABSTRACT</p><p class="crd-abstract-text">${IntellteVitePressBuilder.escapeHtml(ver.abstract_excerpt)}</p></div>`;
      }
      if (ver.pdf_url) {
        local_pdf_html = `  <pdf src="${ver.pdf_url}" title="${ver.title.replace(/"/g, '&quot;')}" height="850px" default-open="true" size="${ver.pdf_size_euro || ''}" />`;
      }
      if (ver.subtitle) {
        local_subtitle_html = `    <p class="crd-paper-subtitle">${IntellteVitePressBuilder.escapeHtml(ver.subtitle)}</p>`;
      }

      content_lines.push(
        `<div class="crd-wysiwyg-paper crd-pdf-only-view">`,
        `  <header class="crd-paper-header crd-pdf-only-header">`,
        `    <div class="crd-eyebrow">${IntellteVitePressBuilder.escapeHtml(local_eyebrow)}</div>`,
        `    <h1 class="crd-paper-title">${IntellteVitePressBuilder.escapeHtml(ver.title)}</h1>`,
        local_subtitle_html,
        local_authors_html,
        local_abstract_html,
        `  </header>`,
        "",
        local_pdf_html,
        `</div>`
      );
    }

    let fm_lines = IntellteVitePressBuilder.buildFrontmatterLines({
      canonical_route: canonical_route,
      description: meta_description,
      og_title: ver.title,
      title: ver.title
    });

    let lines = [
      ...fm_lines,
      "",
      `<PdfSplitWorkspace record-b64="${meta_json_b64}">`,
      "",
      ...content_lines.filter((arg0_l) => arg0_l !== ""),
      "",
      `</PdfSplitWorkspace>`,
      ""
    ];

    //Return statement
    return lines.join("\n");
  },


  /**
   * Escapes special HTML characters in text content.
   *
   * @param {string} arg0_text - Raw string to escape.
   * @return {string} HTML-escaped string.
   */
  escapeHtml: function (arg0_text) {
    //Convert from parameters
    let text = String(arg0_text || "");

    //Return statement
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  },


  /**
   * Escapes backslashes, double quotes and newlines for safe interpolation inside double-quoted YAML frontmatter scalars.
   *
   * @param {string} arg0_text - Raw string to escape.
   * @return {string} YAML-safe string.
   */
  escapeYamlDoubleQuoted: function (arg0_text) {
    //Convert from parameters
    let text = String(arg0_text || "");

    //Return statement
    return text
      .replace(/\\/g, "\\\\")
      .replace(/"/g, "\\\"")
      .replace(/\r?\n/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  },


  /**
   * Formats the uppercase division eyebrow label for PDF-only working paper headers.
   *
   * @param {Object} arg0_rec - Parent record metadata.
   * @param {Object} arg1_ver - Enriched version metadata.
   * @return {string} Formatted eyebrow string (e.g. `"CRD / CTD WORKING PAPER · VERSION 1.0"`).
   */
  formatDivisionEyebrow: function (arg0_rec, arg1_ver) {
    //Convert from parameters
    let rec = (arg0_rec) ? arg0_rec : {};
    let ver = (arg1_ver) ? arg1_ver : {};

    //Declare local instance variables
    let acronyms_array = [];
    let divisions_array = Array.isArray(ver.divisions) ? ver.divisions : [];
    let division_prefix = "";
    let record_type_upper = String(rec.record_type || "Working Paper").toUpperCase();

    for (let i = 0; i < divisions_array.length; i++) {
      let local_acronym = String(divisions_array[i].acronym || "").trim();
      if (local_acronym && !acronyms_array.includes(local_acronym)) {
        acronyms_array.push(local_acronym);
      }
    }

    division_prefix = (acronyms_array.length > 0) ? acronyms_array.join(" / ") : "CRD";

    //Return statement
    return `${division_prefix} ${record_type_upper} · VERSION ${ver.version}`;
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
    let rec = (arg0_rec) ? arg0_rec : {};
    let ver = (arg1_ver) ? arg1_ver : {};

    //Declare local instance variables
    let clean_sub = String(ver.subtitle || "").replace(/\.$/, "");
    let clean_title = String(ver.title || "").replace(/\.$/, "");
    let divisions_array = Array.isArray(ver.divisions) ? ver.divisions : [];
    let full_title = clean_title;
    let publisher_labels_array = [];
    let publisher_str = "";
    let record_type_str = String(rec.record_type || "Working Paper");

    if (clean_sub && !clean_title.toLowerCase().includes(clean_sub.toLowerCase())) {
      full_title = `${clean_title}: ${clean_sub}`;
    }

    for (let i = 0; i < divisions_array.length; i++) {
      let local_acronym = String(divisions_array[i].acronym || "").trim();
      let local_affil = String(divisions_array[i].affiliation || "").trim();
      if (local_affil) {
        if (local_acronym && !local_affil.includes(`(${local_acronym})`)) {
          publisher_labels_array.push(`${local_affil} (${local_acronym})`);
        } else {
          publisher_labels_array.push(local_affil);
        }
      }
    }

    if (publisher_labels_array.length > 0) {
      publisher_str = IntellteDiscovery.formatNaturalList(publisher_labels_array);
    } else {
      publisher_str = "Confoederatio, Research Division (CRD)";
    }

    //Return statement
    return `${ver.authors_line}. "${full_title}." ${publisher_str}, ${record_type_str} (${ver.version}), ${ver.published_date}.`;
  }
};

module.exports = { IntellteVitePressBuilder };
