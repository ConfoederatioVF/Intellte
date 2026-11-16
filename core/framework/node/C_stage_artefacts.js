let fs = require("fs");
let path = require("path");

let IntellteArtefactStager = {
  /**
   * Copies a static artefact only when the destination is missing or size/mtime differs.
   *
   * @param {string} arg0_src - Absolute source path.
   * @param {string} arg1_dst - Absolute destination path.
   * @return {boolean} True when a copy was written.
   */
  copyFileIfChanged: function (arg0_src, arg1_dst) {
    //Convert from parameters
    let dst_path = arg1_dst;
    let src_path = arg0_src;

    //Guard clauses
    if (!src_path || !fs.existsSync(src_path)) return false;

    //Declare local instance variables
    let src_stat = fs.statSync(src_path);

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
   * Step C: Stages static artefacts (.pdf, .Rmd, .bib, .md, high-DPI .png figures,
   * CRD emblem, and web fonts) into `docs/public/` and computes European-formatted file sizes.
   *
   * @param {Object} arg0_manifest - Manifest returned by B_compileRmdDom.
   * @return {Object} Updated manifest with staged file metadata attached to each version.
   */
  C_stageArtefacts: function (arg0_manifest) {
    //Convert from parameters
    let manifest = arg0_manifest;

    //Declare local instance variables
    let docs_public = path.join(manifest.root_dir, "docs/public");
    let fonts_dst = path.join(docs_public, "fonts");
    let fonts_src = path.join(manifest.root_dir, "core/rticles/intellte/resources/fonts");
    let logo_dst = path.join(docs_public, "artefacts/crd_logo.png");
    let logo_src = path.join(manifest.root_dir, "core/rticles/intellte/resources/crd_logo.png");
    let records = (manifest && Array.isArray(manifest.records)) ? manifest.records : [];

    //Stage CRD logo
    fs.mkdirSync(path.dirname(logo_dst), { recursive: true });
    IntellteArtefactStager.copyFileIfChanged(logo_src, logo_dst);

    //Stage .nojekyll for GitHub Pages
    let nojekyll_path = path.join(docs_public, ".nojekyll");
    if (!fs.existsSync(nojekyll_path)) {
      fs.writeFileSync(nojekyll_path, "", "utf8");
    }

    //Stage web fonts (Jost*, Karla, Source Serif 4) for WYSIWYG DOM typography
    fs.mkdirSync(fonts_dst, { recursive: true });
    if (fs.existsSync(fonts_src)) {
      let font_files = fs.readdirSync(fonts_src);
      for (let i = 0; i < font_files.length; i++) {
        let f_name = font_files[i];
        if (/\.(otf|ttf|woff|woff2)$/i.test(f_name)) {
          IntellteArtefactStager.copyFileIfChanged(path.join(fonts_src, f_name), path.join(fonts_dst, f_name));
        }
      }
    }

    //Stage per-record, per-version artefacts
    let active_concepts_obj = {};
    let artefacts_root_dir = path.join(docs_public, "artefacts");

    for (let i = 0; i < records.length; i++) {
      let local_active_versions_obj = {};
      let local_concept_stage_dir = path.join(docs_public, "artefacts", records[i].concept_id);
      let local_rec = records[i];
      active_concepts_obj[String(local_rec.concept_id)] = true;

      for (let x = 0; x < local_rec.versions.length; x++) {
        let local_ver = local_rec.versions[x];
        let stage_dir = path.join(docs_public, "artefacts", local_rec.concept_id, local_ver.version);
        let staged_files = [];

        local_active_versions_obj[String(local_ver.version)] = true;
        fs.mkdirSync(stage_dir, { recursive: true });

        //1. Compiled PDF
        if (local_ver.pdf_abs && fs.existsSync(local_ver.pdf_abs)) {
          let dst_pdf = path.join(stage_dir, local_ver.pdf_filename);
          IntellteArtefactStager.copyFileIfChanged(local_ver.pdf_abs, dst_pdf);
          let sz = fs.statSync(dst_pdf).size;
          staged_files.push({
            category: "PDF Manuscript",
            filename: local_ver.pdf_filename,
            size_bytes: sz,
            size_euro: IntellteArtefactStager.formatEuroFileSize(sz),
            url: `${local_ver.artefact_base_url}/${encodeURI(local_ver.pdf_filename)}`
          });
        }

        //2. Executable R Markdown (.Rmd)
        if (local_ver.rmd_abs && fs.existsSync(local_ver.rmd_abs)) {
          let dst_rmd = path.join(stage_dir, local_ver.rmd_filename);
          IntellteArtefactStager.copyFileIfChanged(local_ver.rmd_abs, dst_rmd);
          let sz = fs.statSync(dst_rmd).size;
          staged_files.push({
            category: "R Markdown Source",
            filename: local_ver.rmd_filename,
            size_bytes: sz,
            size_euro: IntellteArtefactStager.formatEuroFileSize(sz),
            url: `${local_ver.artefact_base_url}/${encodeURI(local_ver.rmd_filename)}`
          });
        }

        //3. BibTeX Bibliography (.bib)
        if (local_ver.bib_abs && fs.existsSync(local_ver.bib_abs)) {
          let dst_bib = path.join(stage_dir, local_ver.bib_filename);
          IntellteArtefactStager.copyFileIfChanged(local_ver.bib_abs, dst_bib);
          let sz = fs.statSync(dst_bib).size;
          staged_files.push({
            category: "BibTeX Sources",
            filename: local_ver.bib_filename,
            size_bytes: sz,
            size_euro: IntellteArtefactStager.formatEuroFileSize(sz),
            url: `${local_ver.artefact_base_url}/${encodeURI(local_ver.bib_filename)}`
          });
        }

        //3b. Supplementary Dataset (.json) & Additional Supplementary Files
        if (local_ver.dataset_abs && fs.existsSync(local_ver.dataset_abs)) {
          let dst_dataset = path.join(stage_dir, local_ver.dataset_filename);
          IntellteArtefactStager.copyFileIfChanged(local_ver.dataset_abs, dst_dataset);
          let sz = fs.statSync(dst_dataset).size;
          staged_files.push({
            category: "Supplementary Material (JSON)",
            filename: local_ver.dataset_filename,
            size_bytes: sz,
            size_euro: IntellteArtefactStager.formatEuroFileSize(sz),
            url: `${local_ver.artefact_base_url}/${encodeURI(local_ver.dataset_filename)}`
          });
        }

        let supp_files_array = Array.isArray(local_ver.supplementary_files) ? local_ver.supplementary_files : [];
        for (let a = 0; a < supp_files_array.length; a++) {
          let local_supp_file = supp_files_array[a];
          let local_src_supp = (local_supp_file && local_supp_file.path)
            ? path.join(local_rec.child_repo_abs, local_supp_file.path)
            : "";
          if (local_src_supp && fs.existsSync(local_src_supp)) {
            let local_supp_name = path.basename(local_src_supp);
            let local_dst_supp = path.join(stage_dir, local_supp_name);
            IntellteArtefactStager.copyFileIfChanged(local_src_supp, local_dst_supp);
            let sz = fs.statSync(local_dst_supp).size;
            staged_files.push({
              category: local_supp_file.category || "Supplementary Material (JSON)",
              filename: local_supp_name,
              size_bytes: sz,
              size_euro: IntellteArtefactStager.formatEuroFileSize(sz),
              title: local_supp_file.title || local_supp_name,
              url: `${local_ver.artefact_base_url}/${encodeURI(local_supp_name)}`
            });
          }
        }

        //4. High-DPI Figures (.png)
        for (let y = 0; y < local_ver.figures.length; y++) {
          let fig_obj = local_ver.figures[y];
          let src_fig = path.join(local_rec.child_repo_abs, fig_obj.path);
          if (fs.existsSync(src_fig)) {
            let fig_name = path.basename(src_fig);
            let dst_fig = path.join(stage_dir, fig_name);
            IntellteArtefactStager.copyFileIfChanged(src_fig, dst_fig);
            let sz = fs.statSync(dst_fig).size;
            staged_files.push({
              category: "Figure (PNG)",
              filename: fig_name,
              size_bytes: sz,
              size_euro: IntellteArtefactStager.formatEuroFileSize(sz),
              title: fig_obj.title,
              url: `${local_ver.artefact_base_url}/${fig_name}`
            });
          }
        }

        //5. Supplementary Markdown Reports (.md)
        for (let z = 0; z < local_ver.compiled_supplementary.length; z++) {
          let supp = local_ver.compiled_supplementary[z];
          if (fs.existsSync(supp.source_abs)) {
            let dst_md = path.join(stage_dir, supp.filename);
            IntellteArtefactStager.copyFileIfChanged(supp.source_abs, dst_md);
            let sz = fs.statSync(dst_md).size;
            staged_files.push({
              category: "Validation Report",
              filename: supp.filename,
              size_bytes: sz,
              size_euro: IntellteArtefactStager.formatEuroFileSize(sz),
              title: supp.title,
              url: `${local_ver.artefact_base_url}/${supp.filename}`
            });
          }
        }

        local_ver.staged_files = staged_files;
        let pdf_staged = staged_files.find((arg0_f) => arg0_f.category === "PDF Manuscript");
        local_ver.pdf_size_euro = (pdf_staged) ? pdf_staged.size_euro : "";
      }

      if (fs.existsSync(local_concept_stage_dir)) {
        let existing_dirs = fs.readdirSync(local_concept_stage_dir);
        for (let x = 0; x < existing_dirs.length; x++) {
          let local_entry_name = existing_dirs[x];
          if (local_entry_name === "project_versions.json") continue;
          if (!local_active_versions_obj[local_entry_name]) {
            try {
              fs.rmSync(path.join(local_concept_stage_dir, local_entry_name), { force: true, recursive: true });
            } catch (e) {
              console.error(`[IntellteArtefactStager] Could not remove stale artefact directory: ${local_entry_name}`);
            }
          }
        }
      }
    }

    if (!manifest.only_concept_id && fs.existsSync(artefacts_root_dir)) {
      let existing_concepts = fs.readdirSync(artefacts_root_dir, { withFileTypes: true });
      for (let i = 0; i < existing_concepts.length; i++) {
        let local_entry = existing_concepts[i];
        if (local_entry.isDirectory() && !active_concepts_obj[local_entry.name]) {
          try {
            fs.rmSync(path.join(artefacts_root_dir, local_entry.name), { force: true, recursive: true });
          } catch (e) {}
        }
      }
    }

    //Return statement
    return manifest;
  },


  /**
   * Formats byte counts using European decimal commas and semantic units (B, kB, MB, GB).
   *
   * @param {number} arg0_bytes - File size in bytes.
   * @return {string} Formatted European file size string (e.g. `1,04 MB`).
   */
  formatEuroFileSize: function (arg0_bytes) {
    //Convert from parameters
    let bytes = Number(arg0_bytes || 0);

    //Guard clauses
    if (!Number.isFinite(bytes) || bytes <= 0) return "0 B";

    if (bytes >= 1024*1024*1024) {
      return `${(bytes / (1024*1024*1024)).toFixed(2).replace(".", ",")} GB`;
    } else if (bytes >= 1024*1024) {
      return `${(bytes / (1024*1024)).toFixed(2).replace(".", ",")} MB`;
    } else if (bytes >= 1024) {
      return `${(bytes / 1024).toFixed(2).replace(".", ",")} kB`;
    }

    //Return statement
    return `${bytes} B`;
  }
};

module.exports = { IntellteArtefactStager };

