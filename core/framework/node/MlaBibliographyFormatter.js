let fs = require("fs");

/**
 * BibTeX parser and numerical MLA DOM bibliography formatter matching `crd-mla-numeric.csl`.
 */
class MlaBibliographyFormatter {
  /**
   * Escapes HTML special characters for safe attribute and element interpolation.
   *
   * @param {string} arg0_str - Raw string.
   * @return {string} Escaped HTML string.
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
   * Formats a raw BibTeX author string according to MLA numeric guidelines (`et-al-min="3"`, `et-al-use-first="1"`).
   *
   * @param {string} arg0_raw_author - Raw author string from BibTeX.
   * @param {boolean} [arg1_is_corporate] - Whether the author is a corporate or institutional entity.
   * @return {string} Formatted MLA author string with terminal period.
   */
  formatMlaAuthor (arg0_raw_author, arg1_is_corporate) {
    //Convert from parameters
    let raw_author = String(arg0_raw_author || "").trim();
    let is_corporate = Boolean(arg1_is_corporate);

    //Declare local instance variables
    let author_tokens = [];
    let clean_author = raw_author.replace(/[{}]/g, "").trim();

    //Guard clauses
    if (!clean_author) return "";

    if (is_corporate || (raw_author.startsWith("{") && raw_author.endsWith("}"))) {
      return (clean_author.endsWith(".")) ? clean_author : `${clean_author}.`;
    }

    author_tokens = clean_author.split(/\s+and\s+/i);

    //Return statement
    if (author_tokens.length >= 3) {
      let first_auth = author_tokens[0].trim();
      return `${first_auth}, et al.`;
    } else if (author_tokens.length === 2) {
      let first_auth = author_tokens[0].trim();
      let second_auth = author_tokens[1].trim();
      if (second_auth.includes(",")) {
        let parts = second_auth.split(",");
        second_auth = `${parts[1].trim()} ${parts[0].trim()}`;
      }
      return `${first_auth}, and ${second_auth}.`;
    } else {
      return (clean_author.endsWith(".")) ? clean_author : `${clean_author}.`;
    }
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

    //Declare local instance variables
    let author_part = "";
    let container_group = [];
    let is_book_or_report = false;
    let out_parts = [];
    let title_part = "";
    let type = (entry && entry.type) ? entry.type.toLowerCase() : "";

    //Guard clauses
    if (!entry) return "";

    is_book_or_report = ["book", "dataset", "misc", "report", "techreport", "thesis"].includes(type);

    if (entry.author) {
      author_part = this.formatMlaAuthor(entry.author, entry.is_corporate_author);
    }

    if (entry.title) {
      let clean_title = entry.title.replace(/--|\u2013/g, "-").trim();
      if (is_book_or_report) {
        title_part = `<em>${this.escapeHtml(clean_title)}</em>.`;
      } else {
        clean_title = clean_title.replace(/\.$/, "");
        title_part = `"${this.escapeHtml(clean_title)}."`;
      }
    }

    if (entry.journal) {
      container_group.push(`<em>${this.escapeHtml(entry.journal)}</em>`);
    } else if (entry.booktitle) {
      let b_str = `<em>${this.escapeHtml(entry.booktitle)}</em>`;
      if (entry.editor) {
        b_str += `, edited by ${this.escapeHtml(this.formatMlaEditors(entry.editor))}`;
      }
      container_group.push(b_str);
    }

    if (entry.volume) {
      container_group.push(`vol. ${this.escapeHtml(entry.volume)}`);
    }
    if (entry.number) {
      container_group.push(`no. ${this.escapeHtml(entry.number)}`);
    }

    if (entry.publisher && !entry.journal) {
      container_group.push(this.escapeHtml(entry.publisher));
    } else if (entry.institution && !entry.journal) {
      container_group.push(this.escapeHtml(entry.institution));
    }

    if (entry.year) {
      container_group.push(this.escapeHtml(entry.year));
    }

    if (entry.pages) {
      let clean_pages = entry.pages.replace(/--|\u2013/g, "-");
      let page_label = clean_pages.includes("-") ? "pp." : "p.";
      container_group.push(`${page_label} ${this.escapeHtml(clean_pages)}`);
    }

    if (entry.doi) {
      let clean_doi = entry.doi.replace(/^https?:\/\/doi\.org\//i, "");
      container_group.push(`<a class="crd-bib-url" href="https://doi.org/${this.escapeHtml(clean_doi)}" target="_blank" rel="noopener">https://doi.org/${this.escapeHtml(clean_doi)}</a>`);
    } else if (entry.url) {
      container_group.push(`<a class="crd-bib-url" href="${this.escapeHtml(entry.url)}" target="_blank" rel="noopener">${this.escapeHtml(entry.url)}</a>`);
    }

    out_parts = [author_part, title_part].filter(Boolean);
    if (container_group.length > 0) {
      out_parts.push(`${container_group.join(", ")}.`);
    }

    //Return statement
    return out_parts.join(" ");
  }


  /**
   * Formats a raw BibTeX editor string into MLA editor syntax.
   *
   * @param {string} arg0_raw_editor - Raw editor string from BibTeX.
   * @return {string} Formatted editor string.
   */
  formatMlaEditors (arg0_raw_editor) {
    //Convert from parameters
    let raw_editor = String(arg0_raw_editor || "").trim();

    //Declare local instance variables
    let clean_editor = raw_editor.replace(/[{}]/g, "").trim();
    let ed_tokens = [];
    let formatted_eds = [];

    //Guard clauses
    if (!clean_editor) return "";

    ed_tokens = clean_editor.split(/\s+and\s+/i);
    formatted_eds = ed_tokens.map((arg0_ed) => {
      let trimmed = arg0_ed.trim();
      if (trimmed.includes(",")) {
        let parts = trimmed.split(",");
        return `${parts[1].trim()} ${parts[0].trim()}`;
      }
      return trimmed;
    });

    //Return statement
    if (formatted_eds.length === 1) {
      return formatted_eds[0];
    } else if (formatted_eds.length === 2) {
      return `${formatted_eds[0]} and ${formatted_eds[1]}`;
    } else {
      return `${formatted_eds[0]}, et al.`;
    }
  }


  /**
   * Parses a BibTeX (`.bib`) file into a dictionary of citation keys to structured metadata.
   *
   * @param {string} arg0_bib_path - Path to the `.bib` file.
   * @return {Object} Dictionary keyed by BibTeX citation key.
   */
  parseBibFile (arg0_bib_path) {
    //Convert from parameters
    let bib_path = arg0_bib_path;

    //Declare local instance variables
    let entries_obj = {};
    let entry_matches = [];
    let raw_bib = "";

    //Guard clauses
    if (!bib_path || !fs.existsSync(bib_path)) return entries_obj;

    raw_bib = fs.readFileSync(bib_path, "utf8");
    entry_matches = Array.from(raw_bib.matchAll(/@(\w+)\s*\{\s*([^,\s]+)\s*,([\s\S]*?)\n\}/g));

    for (let i = 0; i < entry_matches.length; i++) {
      let local_body = entry_matches[i][3];
      let local_field_matches = Array.from(local_body.matchAll(/^\s*(\w+)\s*=\s*\{(.*)\}\s*,?\s*$/gm));
      let local_fields = {};
      let local_is_corporate = false;
      let local_key = entry_matches[i][2].trim();
      let local_type = entry_matches[i][1].toLowerCase();

      for (let x = 0; x < local_field_matches.length; x++) {
        let local_f_name = local_field_matches[x][1].toLowerCase().trim();
        let local_raw_val = local_field_matches[x][2].trim();
        if (local_f_name === "author" && local_raw_val.startsWith("{") && local_raw_val.endsWith("}")) {
          local_is_corporate = true;
        }
        local_fields[local_f_name] = local_raw_val
          .replace(/\\&/g, "&")
          .replace(/\\%/g, "%")
          .replace(/\s+/g, " ")
          .replace(/[{}]/g, "")
          .trim();
      }

      entries_obj[local_key] = {
        author: local_fields.author || "",
        booktitle: local_fields.booktitle || "",
        doi: (local_fields.doi || "").replace(/^https?:\/\/doi\.org\//i, ""),
        editor: local_fields.editor || "",
        institution: local_fields.institution || "",
        is_corporate_author: local_is_corporate,
        journal: local_fields.journal || "",
        key: local_key,
        note: local_fields.note || "",
        number: local_fields.number || "",
        pages: (local_fields.pages || "").replace(/--|\u2013/g, "-"),
        publisher: local_fields.publisher || "",
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
}

module.exports = { MlaBibliographyFormatter };

