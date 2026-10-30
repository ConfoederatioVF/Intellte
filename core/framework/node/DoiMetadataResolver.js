let fs = require("fs");
let path = require("path");

class DoiMetadataResolver {
  /**
   * Initialises the DOI/URL bibliographic metadata resolver and local JSON cache.
   *
   * @param {Object} [arg0_options] - Options (`cache_path`, `root_dir`, `user_agent`).
   */
  constructor (arg0_options) {
    //Convert from parameters
    let options = (arg0_options) ? arg0_options : {};

    //Initialise options
    this.root_dir = (options.root_dir) ? options.root_dir : path.resolve(__dirname, "../../..");
    if (options.cache_path) {
      this.cache_path = options.cache_path;
    } else {
      this.cache_path = path.join(this.root_dir, "docs/.vitepress/cache/doi_bib_cache.json");
    }
    if (options.user_agent) {
      this.user_agent = options.user_agent;
    } else {
      this.user_agent = "Intellte-BibCompiler/1.0 (https://confoederatio.org; mailto:crd@confoederatio.org)";
    }

    this.cache_dirty = false;
    this.cache_obj = this.loadCache();
  }


  /**
   * Cleans HTML entities, inline JATS/HTML markup, Unicode dashes/spaces and BibTeX special characters.
   *
   * @param {string} arg0_raw_text - Raw metadata string.
   * @param {Object} [arg1_options] - Options (`escape_bibtex`, `preserve_url`).
   * @return {string} Sanitised text value suitable for BibTeX fields.
   */
  cleanTextValue (arg0_raw_text, arg1_options) {
    //Convert from parameters
    let raw_text = String(arg0_raw_text ?? "");
    let options = (arg1_options) ? arg1_options : {};

    //Initialise options
    let escape_bibtex = (options.escape_bibtex !== undefined) ? Boolean(options.escape_bibtex) : true;
    let preserve_url = Boolean(options.preserve_url);

    //Declare local instance variables
    let clean_str = "";

    //Guard clauses
    if (!raw_text) return "";
    if (preserve_url) return raw_text.trim();

    clean_str = this.decodeHtmlEntities(raw_text);
    clean_str = clean_str
      .replace(/<\/?[A-Za-z][A-Za-z0-9:_-]*(?:\s[^>]*)?>/g, "")
      .replace(/[\u00A0\u2009\u202F]/g, " ")
      .replace(/[\u2010\u2011\u2012\u2013\u2014\u2212]/g, "-")
      .replace(/--+/g, "-")
      .replace(/[\u2018\u2019]/g, "'")
      .replace(/[\u201C\u201D]/g, "\"")
      .replace(/\s+/g, " ")
      .trim();

    if (escape_bibtex) {
      clean_str = clean_str
        .replace(/(?<!\\)&/g, "\\&")
        .replace(/(?<!\\)%/g, "\\%");
    }

    //Return statement
    return clean_str;
  }


  /**
   * Decodes common named and numeric HTML entities returned by CrossRef or web `<meta>` tags.
   *
   * @param {string} arg0_text - String potentially containing HTML entities.
   * @return {string} Decoded Unicode string.
   */
  decodeHtmlEntities (arg0_text) {
    //Convert from parameters
    let text = String(arg0_text || "");

    //Declare local instance variables
    let entity_map = {
      "&amp;": "&", "&apos;": "'", "&gt;": ">", "&ldquo;": "\"",
      "&lsquo;": "'", "&lt;": "<", "&mdash;": "—", "&nbsp;": " ",
      "&ndash;": "–", "&quot;": "\"", "&rdquo;": "\"", "&rsquo;": "'"
    };

    //Guard clauses
    if (!text.includes("&")) return text;

    text = text.replace(/&#(\d+);/g, (arg0_match, arg1_dec) => String.fromCodePoint(Number(arg1_dec)));
    text = text.replace(/&#x([0-9A-Fa-f]+);/g, (arg0_match, arg1_hex) => String.fromCodePoint(parseInt(arg1_hex, 16)));
    text = text.replace(/&[A-Za-z]+;/g, (arg0_match) => {
      let lower_ent = arg0_match.toLowerCase();
      return (entity_map[lower_ent] !== undefined) ? entity_map[lower_ent] : arg0_match;
    });

    //Return statement
    return text;
  }


  /**
   * Extracts a 4-digit publication year from CSL-JSON date fields (`published-print`, `issued`, `published-online`, `created`).
   *
   * @param {Object} arg0_csl_obj - CSL-JSON work metadata object.
   * @return {string} Four-digit publication year, or `""` if unavailable.
   */
  extractYearFromCsl (arg0_csl_obj) {
    //Convert from parameters
    let csl_obj = (arg0_csl_obj) ? arg0_csl_obj : {};

    //Declare local instance variables
    let date_keys = ["published-print", "issued", "published-online", "published", "created"];

    for (let i = 0; i < date_keys.length; i++) {
      let local_date_obj = csl_obj[date_keys[i]];
      let parts = local_date_obj?.["date-parts"];
      if (Array.isArray(parts) && Array.isArray(parts[0]) && parts[0].length > 0) {
        let local_year = Number(parts[0][0]);
        if (Number.isFinite(local_year) && local_year > 0) {
          return String(local_year);
        }
      }
    }

    //Return statement
    return "";
  }


  /**
   * Fetches structured bibliographic metadata for a DOI via `doi.org` CSL-JSON content negotiation,
   * with CrossRef API fallback and parent-volume editor lookup for Springer-style book chapters.
   *
   * @param {string} arg0_doi - Normalised DOI string.
   * @return {Promise<Object|null>} Normalised bibliographic fields object, or `null` on failure.
   */
  async fetchDoiMetadata (arg0_doi) {
    //Convert from parameters
    let doi = this.normaliseDoi(arg0_doi);

    //Declare local instance variables
    let csl_obj = null;
    let doi_url = "";

    //Guard clauses
    if (!doi) return null;

    doi_url = `https://doi.org/${encodeURI(doi)}`;
    try {
      let response = await fetch(doi_url, {
        headers: {
          "Accept": "application/vnd.citationstyles.csl+json",
          "User-Agent": this.user_agent
        }
      });
      if (response.ok) {
        let raw_body = await response.text();
        if (raw_body && raw_body.trim().startsWith("{")) {
          csl_obj = JSON.parse(raw_body);
        }
      }
    } catch (err) {
      console.error(`[DoiMetadataResolver] Primary DOI lookup failed for ${doi}: ${err.message}`);
    }

    if (!csl_obj) {
      try {
        let cr_res = await fetch(`https://api.crossref.org/works/${encodeURIComponent(doi)}`, {
          headers: { "User-Agent": this.user_agent }
        });
        if (cr_res.ok) {
          let cr_json = await cr_res.json();
          if (cr_json && cr_json.message) csl_obj = cr_json.message;
        }
      } catch (err) {
        console.error(`[DoiMetadataResolver] CrossRef fallback failed for ${doi}: ${err.message}`);
      }
    }

    if (!csl_obj) {
      console.error(`[DoiMetadataResolver] Unable to resolve metadata for DOI: ${doi}`);
      return null;
    }

    if (
      (csl_obj.type === "book-chapter" || csl_obj.type === "chapter") &&
      (!Array.isArray(csl_obj.editor) || csl_obj.editor.length === 0) &&
      /_\d+$/.test(doi)
    ) {
      let parent_doi = doi.replace(/_\d+$/, "");
      try {
        let parent_res = await fetch(`https://doi.org/${encodeURI(parent_doi)}`, {
          headers: {
            "Accept": "application/vnd.citationstyles.csl+json",
            "User-Agent": this.user_agent
          }
        });
        if (parent_res.ok) {
          let parent_text = await parent_res.text();
          if (parent_text && parent_text.trim().startsWith("{")) {
            let parent_csl = JSON.parse(parent_text);
            if (Array.isArray(parent_csl.editor) && parent_csl.editor.length > 0) {
              csl_obj.editor = parent_csl.editor;
            }
          }
        }
      } catch (err) {
        //Ignore optional parent book lookup failure
      }
    }

    //Return statement
    return this.mapCslToBibFields(csl_obj, doi);
  }


  /**
   * Fetches HTML `<meta>` citation/OpenGraph/DublinCore metadata from a URL when no DOI exists.
   *
   * @param {string} arg0_url - Target HTTP/HTTPS URL.
   * @return {Promise<Object|null>} Normalised bibliographic fields object, or `null` on failure.
   */
  async fetchUrlMetadata (arg0_url) {
    //Convert from parameters
    let url = String(arg0_url || "").trim();

    //Declare local instance variables
    let html_head = "";
    let meta_obj = null;

    //Guard clauses
    if (!url || !/^https?:\/\//i.test(url)) return null;

    try {
      let response = await fetch(url, {
        headers: {
          "Accept": "text/html,application/xhtml+xml",
          "User-Agent": this.user_agent
        }
      });
      if (!response.ok) return null;
      let full_html = await response.text();
      let head_match = full_html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
      html_head = (head_match) ? head_match[1] : full_html.slice(0, 32768);
    } catch (err) {
      console.error(`[DoiMetadataResolver] Failed to fetch URL metadata (${url}): ${err.message}`);
      return null;
    }

    meta_obj = this.parseHtmlMetaTags(html_head);

    //Return statement
    return this.mapHtmlMetaToBibFields(meta_obj, url);
  }


  /**
   * Formats an array of CSL-JSON contributor objects (`[{ family, given, literal }]`) into BibTeX `and`-separated names.
   *
   * @param {Object[]} arg0_names_array - CSL-JSON `author` or `editor` array.
   * @return {Object} `{ corporate: boolean, formatted: string }`.
   */
  formatCslNames (arg0_names_array) {
    //Convert from parameters
    let names_array = Array.isArray(arg0_names_array) ? arg0_names_array : [];

    //Declare local instance variables
    let formatted_list = [];
    let is_corporate = false;

    for (let i = 0; i < names_array.length; i++) {
      let local_person = names_array[i];
      if (local_person && typeof local_person === "object") {
        let dropping = this.cleanTextValue(local_person["dropping-particle"] || local_person["non-dropping-particle"] || "", { escape_bibtex: false });
        let family = this.cleanTextValue(local_person.family || "", { escape_bibtex: false });
        let given = this.cleanTextValue(local_person.given || "", { escape_bibtex: false });
        let literal = this.cleanTextValue(local_person.literal || local_person.name || "", { escape_bibtex: false });

        if (family) {
          let full_family = (dropping) ? `${dropping} ${family}` : family;
          formatted_list.push((given) ? `${full_family}, ${given}` : full_family);
        } else if (literal) {
          formatted_list.push(literal);
          if (names_array.length === 1) is_corporate = true;
        }
      }
    }

    //Return statement
    return {
      corporate: is_corporate,
      formatted: formatted_list.join(" and ")
    };
  }


  /**
   * Converts sentence-cased scholarly titles into MLA Title Case while preserving acronyms (`HYDE`, `UN`, `LBK`) and proper nouns.
   *
   * @param {string} arg0_title_str - Input work or container title.
   * @return {string} MLA Title-Cased string.
   */
  formatMlaTitleCase (arg0_title_str) {
    //Convert from parameters
    let title_str = this.cleanTextValue(arg0_title_str || "", { escape_bibtex: false });

    //Declare local instance variables
    let force_next_cap = true;
    let minor_words_obj = {
      "a": true, "an": true, "and": true, "as": true, "at": true, "but": true,
      "by": true, "en": true, "for": true, "from": true, "if": true, "in": true,
      "into": true, "nor": true, "of": true, "on": true, "onto": true, "or": true,
      "per": true, "so": true, "the": true, "to": true, "up": true, "v.": true,
      "via": true, "vs.": true, "with": true, "yet": true
    };
    let out_tokens = [];
    let raw_tokens = [];

    //Guard clauses
    if (!title_str) return "";

    raw_tokens = title_str.split(/\s+/);

    for (let i = 0; i < raw_tokens.length; i++) {
      let is_first = (i === 0);
      let is_last = (i === raw_tokens.length - 1);
      let local_tok = raw_tokens[i];

      if (local_tok === "-" || local_tok === "--" || local_tok === "---") {
        out_tokens.push("-");
        force_next_cap = true;
      } else {
        let lead_match = local_tok.match(/^([("'\[{]*)(.*?)([)"'\]}.,;:!?]*)$/);
        let core = (lead_match) ? lead_match[2] : local_tok;
        let formatted_core = core;
        let prefix = (lead_match) ? lead_match[1] : "";
        let suffix = (lead_match) ? lead_match[3] : "";

        if (/[A-Za-z]/.test(core)) {
          let has_internal_caps = /[A-Z]/.test(core.slice(1));
          if (core.includes("-") && !core.includes("--")) {
            let cased_parts = [];
            let sub_parts = core.split("-");
            for (let x = 0; x < sub_parts.length; x++) {
              let sub = sub_parts[x];
              let sub_internal_caps = /[A-Z]/.test(sub.slice(1));
              let sub_lower = sub.toLowerCase();
              if (!/[A-Za-z]/.test(sub) || sub_internal_caps) {
                cased_parts.push(sub);
              } else if (x > 0 && x < sub_parts.length - 1 && minor_words_obj[sub_lower]) {
                cased_parts.push(sub_lower);
              } else {
                cased_parts.push(sub.charAt(0).toUpperCase() + sub.slice(1));
              }
            }
            formatted_core = cased_parts.join("-");
          } else if (has_internal_caps) {
            formatted_core = core;
          } else {
            let core_lower = core.toLowerCase();
            if (!is_first && !is_last && !force_next_cap && minor_words_obj[core_lower]) {
              formatted_core = core_lower;
            } else {
              formatted_core = core.charAt(0).toUpperCase() + core.slice(1);
            }
          }
        }

        out_tokens.push(`${prefix}${formatted_core}${suffix}`);
        force_next_cap = /[:?!]$/.test(suffix);
      }
    }

    //Return statement
    return out_tokens.join(" ");
  }


  /**
   * Checks whether any source entry requires a live network lookup not yet present in `this.cache_obj`.
   *
   * @param {Object[]} arg0_entries_array - Array of raw `.json5` source objects.
   * @return {boolean} `true` if at least one DOI or title-less URL is missing from the local cache.
   */
  hasUncachedEntries (arg0_entries_array) {
    //Convert from parameters
    let entries_array = Array.isArray(arg0_entries_array) ? arg0_entries_array : [];

    for (let i = 0; i < entries_array.length; i++) {
      let local_raw = entries_array[i];
      if (local_raw && typeof local_raw === "object") {
        let clean_doi = this.normaliseDoi(local_raw.doi);
        let clean_url = String(local_raw.url || "").trim();

        if (clean_doi) {
          if (!this.cache_obj[`doi:${clean_doi.toLowerCase()}`]) return true;
        } else if (clean_url && !local_raw.title) {
          if (!this.cache_obj[`url:${clean_url}`]) return true;
        }
      }
    }

    //Return statement
    return false;
  }


  /**
   * Loads the persistent DOI/URL bibliographic cache from disk.
   *
   * @return {Object} Dictionary mapping `doi:<doi>` or `url:<url>` to normalised field objects.
   */
  loadCache () {
    //Guard clauses
    if (!this.cache_path || !fs.existsSync(this.cache_path)) return {};

    try {
      let parsed = JSON.parse(fs.readFileSync(this.cache_path, "utf8"));
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        return parsed;
      }
    } catch (err) {
      console.error(`[DoiMetadataResolver] Failed to parse DOI cache (${this.cache_path}): ${err.message}`);
    }

    //Return statement
    return {};
  }


  /**
   * Maps a CSL-JSON work record into normalised BibTeX field properties.
   *
   * @param {Object} arg0_csl_obj - CSL-JSON metadata payload.
   * @param {string} arg1_doi - Normalised DOI string.
   * @return {Object} Normalised BibTeX field map.
   */
  mapCslToBibFields (arg0_csl_obj, arg1_doi) {
    //Convert from parameters
    let csl_obj = (arg0_csl_obj) ? arg0_csl_obj : {};
    let doi = this.normaliseDoi(arg1_doi || csl_obj.DOI);

    //Declare local instance variables
    let author_info = this.formatCslNames(csl_obj.author);
    let bib_type = "misc";
    let booktitle_val = "";
    let container_raw = "";
    let csl_type = String(csl_obj.type || "").toLowerCase();
    let editor_info = this.formatCslNames(csl_obj.editor);
    let pages_raw = "";
    let publisher_clean = "";
    let raw_title = "";

    if (csl_type === "article-journal" || csl_type === "journal-article" || csl_type === "article") {
      bib_type = "article";
    } else if (csl_type === "book-chapter" || csl_type === "chapter") {
      bib_type = "incollection";
    } else if (csl_type === "paper-conference" || csl_type === "proceedings-article") {
      bib_type = "inproceedings";
    } else if (csl_type === "book" || csl_type === "monograph" || csl_type === "edited-book") {
      bib_type = "book";
    } else if (csl_type === "report") {
      bib_type = "techreport";
    } else if (csl_type === "thesis") {
      bib_type = "phdthesis";
    } else {
      bib_type = "misc";
    }

    if (Array.isArray(csl_obj.title)) {
      raw_title = String(csl_obj.title[0] || "");
    } else {
      raw_title = String(csl_obj.title || "");
    }
    if (Array.isArray(csl_obj["container-title"])) {
      container_raw = String(csl_obj["container-title"][0] || "");
    } else {
      container_raw = String(csl_obj["container-title"] || "");
    }

    pages_raw = String(csl_obj.page || csl_obj["article-number"] || "").trim();
    publisher_clean = this.cleanTextValue(csl_obj.publisher || "", { escape_bibtex: false });
    if (/^Springer\b/i.test(publisher_clean)) publisher_clean = "Springer";

    if (bib_type === "incollection" || bib_type === "inproceedings") {
      booktitle_val = this.formatMlaTitleCase(container_raw);
    }

    //Return statement
    return {
      author: author_info.formatted,
      booktitle: booktitle_val,
      corporate_author: author_info.corporate,
      doi: doi,
      editor: editor_info.formatted,
      institution: (bib_type === "techreport") ? publisher_clean : "",
      journal: (bib_type === "article") ? this.formatMlaTitleCase(container_raw) : "",
      number: String(csl_obj.issue || "").trim(),
      pages: this.normalisePages(pages_raw),
      publisher: (bib_type !== "article" && bib_type !== "techreport") ? publisher_clean : "",
      title: this.formatMlaTitleCase(raw_title),
      type: bib_type,
      volume: String(csl_obj.volume || "").trim(),
      year: this.extractYearFromCsl(csl_obj)
    };
  }


  /**
   * Maps scraped HTML `<meta>` fields (`citation_*`, `dc.*`, `og:*`, `<title>`) into normalised BibTeX fields.
   *
   * @param {Object} arg0_meta_obj - Parsed HTML meta tag dictionary.
   * @param {string} arg1_url - Source URL.
   * @return {Object} Normalised BibTeX field map.
   */
  mapHtmlMetaToBibFields (arg0_meta_obj, arg1_url) {
    //Convert from parameters
    let meta_obj = (arg0_meta_obj) ? arg0_meta_obj : {};
    let url = String(arg1_url || "").trim();

    //Declare local instance variables
    let authors_list = meta_obj["citation_author"] || meta_obj["dc.creator"] || [];
    let bib_type = "misc";
    let citation_doi = "";
    let date_raw = "";
    let first_page = (meta_obj["citation_firstpage"] && meta_obj["citation_firstpage"][0]) || "";
    let journal_raw = (meta_obj["citation_journal_title"] && meta_obj["citation_journal_title"][0]) || "";
    let last_page = (meta_obj["citation_lastpage"] && meta_obj["citation_lastpage"][0]) || "";
    let pages_val = "";
    let publisher_raw = "";
    let title_raw = "";
    let year_match = null;

    title_raw = (meta_obj["citation_title"] && meta_obj["citation_title"][0])
      || (meta_obj["dc.title"] && meta_obj["dc.title"][0])
      || (meta_obj["og:title"] && meta_obj["og:title"][0])
      || meta_obj.__html_title
      || "";

    publisher_raw = (meta_obj["citation_publisher"] && meta_obj["citation_publisher"][0])
      || (meta_obj["dc.publisher"] && meta_obj["dc.publisher"][0])
      || (meta_obj["og:site_name"] && meta_obj["og:site_name"][0])
      || "";

    date_raw = (meta_obj["citation_publication_date"] && meta_obj["citation_publication_date"][0])
      || (meta_obj["citation_date"] && meta_obj["citation_date"][0])
      || (meta_obj["dc.date"] && meta_obj["dc.date"][0])
      || "";
    year_match = String(date_raw).match(/\b(1[5-9]\d{2}|20\d{2})\b/);

    if (first_page && last_page) {
      pages_val = `${first_page}-${last_page}`;
    } else if (first_page) {
      pages_val = first_page;
    }

    if (journal_raw) {
      bib_type = "article";
    } else if (meta_obj["citation_technical_report_institution"]) {
      bib_type = "techreport";
    }

    if (meta_obj["citation_doi"] && meta_obj["citation_doi"][0]) {
      citation_doi = this.normaliseDoi(meta_obj["citation_doi"][0]);
    }

    //Return statement
    return {
      author: Array.isArray(authors_list) ? authors_list.join(" and ") : String(authors_list || ""),
      corporate_author: false,
      doi: citation_doi,
      institution: (meta_obj["citation_technical_report_institution"] && meta_obj["citation_technical_report_institution"][0]) || "",
      journal: (journal_raw) ? this.formatMlaTitleCase(journal_raw) : "",
      number: (meta_obj["citation_issue"] && meta_obj["citation_issue"][0]) || "",
      pages: pages_val,
      publisher: (bib_type !== "article") ? publisher_raw : "",
      title: (title_raw) ? this.formatMlaTitleCase(title_raw) : "",
      type: bib_type,
      url: url,
      volume: (meta_obj["citation_volume"] && meta_obj["citation_volume"][0]) || "",
      year: (year_match) ? year_match[1] : ""
    };
  }


  /**
   * Strips `https://doi.org/`, `http://dx.doi.org/` or `doi:` prefixes from a DOI string.
   *
   * @param {string} arg0_raw_doi - Input DOI string or URL.
   * @return {string} Clean canonical DOI identifier.
   */
  normaliseDoi (arg0_raw_doi) {
    //Convert from parameters
    let raw_doi = String(arg0_raw_doi || "").trim();

    //Guard clauses
    if (!raw_doi) return "";

    //Return statement
    return raw_doi
      .replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, "")
      .replace(/^doi:\s*/i, "")
      .trim();
  }


  /**
   * Normalises page numbers and ranges into single-hyphen `-` notation.
   *
   * @param {string} arg0_pages_str - Raw page string.
   * @return {string} Normalised page range (`"641-647"`).
   */
  normalisePages (arg0_pages_str) {
    //Convert from parameters
    let pages_str = String(arg0_pages_str || "").trim();

    //Guard clauses
    if (!pages_str) return "";

    //Return statement
    return pages_str
      .replace(/[\u2010\u2011\u2012\u2013\u2014\u2212]/g, "-")
      .replace(/\s*-+\s*/g, "-");
  }


  /**
   * Parses `<meta>` name/property tags and `<title>` from an HTML `<head>` fragment.
   *
   * @param {string} arg0_html_str - HTML `<head>` string.
   * @return {Object} Map of lowercase meta keys to arrays of content strings, plus `__html_title`.
   */
  parseHtmlMetaTags (arg0_html_str) {
    //Convert from parameters
    let html_str = String(arg0_html_str || "");

    //Declare local instance variables
    let meta_map = {};
    let meta_tags = html_str.match(/<meta\b[^>]*>/gi) || [];
    let title_match = html_str.match(/<title[^>]*>([\s\S]*?)<\/title>/i);

    if (title_match) {
      meta_map.__html_title = this.decodeHtmlEntities(title_match[1]).replace(/\s+/g, " ").trim();
    }

    for (let i = 0; i < meta_tags.length; i++) {
      let tag_str = meta_tags[i];
      let content_match = tag_str.match(/\bcontent\s*=\s*(?:"([^"]*)"|'([^']*)')/i);
      let name_match = tag_str.match(/\b(?:name|property)\s*=\s*(?:"([^"]*)"|'([^']*)')/i);

      if (name_match && content_match) {
        let key_str = (name_match[1] || name_match[2] || "").toLowerCase().trim();
        let val_str = this.decodeHtmlEntities(content_match[1] || content_match[2] || "").trim();
        if (key_str && val_str) {
          if (!Array.isArray(meta_map[key_str])) meta_map[key_str] = [];
          meta_map[key_str].push(val_str);
        }
      }
    }

    //Return statement
    return meta_map;
  }


  /**
   * Resolves cached base metadata synchronously for a single `.json5` source entry if available.
   *
   * @param {Object} arg0_entry_obj - Raw `.json5` source entry.
   * @return {Object} Cached base fields object (or `{}` if uncached/manual).
   */
  resolveCachedEntry (arg0_entry_obj) {
    //Convert from parameters
    let entry_obj = (arg0_entry_obj) ? arg0_entry_obj : {};

    //Declare local instance variables
    let clean_doi = this.normaliseDoi(entry_obj.doi);
    let clean_url = String(entry_obj.url || "").trim();

    if (clean_doi) {
      let cached_doi = this.cache_obj[`doi:${clean_doi.toLowerCase()}`];
      if (cached_doi) return Object.assign({}, cached_doi);
    } else if (clean_url && !entry_obj.title) {
      let cached_url = this.cache_obj[`url:${clean_url}`];
      if (cached_url) return Object.assign({}, cached_url);
    }

    //Return statement
    return {};
  }


  /**
   * Resolves base metadata asynchronously (consulting cache first unless `arg1_refresh` is true) for a `.json5` source entry.
   *
   * @param {Object} arg0_entry_obj - Raw `.json5` source entry.
   * @param {boolean} [arg1_refresh] - Whether to bypass existing cache entries.
   * @return {Promise<Object>} Resolved base fields object.
   */
  async resolveRemoteEntry (arg0_entry_obj, arg1_refresh) {
    //Convert from parameters
    let entry_obj = (arg0_entry_obj) ? arg0_entry_obj : {};
    let refresh = Boolean(arg1_refresh);

    //Declare local instance variables
    let clean_doi = this.normaliseDoi(entry_obj.doi);
    let clean_url = String(entry_obj.url || "").trim();

    if (clean_doi) {
      let cache_key = `doi:${clean_doi.toLowerCase()}`;
      if (!refresh && this.cache_obj[cache_key]) {
        return Object.assign({}, this.cache_obj[cache_key]);
      }
      let fetched_doi = await this.fetchDoiMetadata(clean_doi);
      if (fetched_doi && fetched_doi.title) {
        this.cache_obj[cache_key] = fetched_doi;
        this.cache_dirty = true;
        return Object.assign({}, fetched_doi);
      }
    } else if (clean_url && !entry_obj.title) {
      let cache_key = `url:${clean_url}`;
      if (!refresh && this.cache_obj[cache_key]) {
        return Object.assign({}, this.cache_obj[cache_key]);
      }
      let fetched_url = await this.fetchUrlMetadata(clean_url);
      if (fetched_url && fetched_url.title) {
        this.cache_obj[cache_key] = fetched_url;
        this.cache_dirty = true;
        return Object.assign({}, fetched_url);
      }
    }

    //Return statement
    return {};
  }


  /**
   * Persists `this.cache_obj` to disk when modified during DOI/URL metadata resolution.
   */
  saveCache () {
    //Guard clauses
    if (!this.cache_dirty || !this.cache_path) return;

    try {
      fs.mkdirSync(path.dirname(this.cache_path), { recursive: true });
      fs.writeFileSync(this.cache_path, `${JSON.stringify(this.cache_obj, null, 2)}\n`, "utf8");
      this.cache_dirty = false;
    } catch (err) {
      console.error(`[DoiMetadataResolver] Failed to write DOI cache (${this.cache_path}): ${err.message}`);
    }
  }
}

module.exports = { DoiMetadataResolver };
