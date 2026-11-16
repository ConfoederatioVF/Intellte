# ==============================================================================
# Markdown Prose Templating Framework (core/framework/R/prose_templating.R)
# ==============================================================================
# Supports native R Markdown (.Rmd) prose authoring via a knitr `document` hook
# (`format_knitted_document`) that automatically applies European decimal commas,
# LaTeX math-comma `{,}` spacing protection, and Unicode-to-LaTeX normalisation
# without requiring `paste()` wrappers in `.Rmd` manuscripts. Also retains
# external `.md` file / pipe-table ingestion helpers (`render_markdown_prose`).
# ==============================================================================


#' Converts Markdown pipe tables (e.g. `knitr::kable(..., format = "pipe")`) inside a DOM-knitted
#' document into canonical CRD HTML `<figure class="crd-table-figure">` blocks via `render_table_template()`.
#'
#' @param arg0_text Character string or vector of knitted Markdown text.
#' @param arg1_options Optional named list (`euro_decimals`).
#' @return Character string with pipe tables converted to CRD HTML table figures.
#' @export
convert_dom_pipe_tables <- function (arg0_text, arg1_options = NULL) {
  #Convert from parameters
  text <- paste(as.character(arg0_text), collapse = "\n")
  options <- if (!is.null(arg1_options)) arg1_options else list()

  #Initialise options
  euro_decimals <- if (!is.null(options$euro_decimals)) isTRUE(options$euro_decimals) else TRUE

  #Declare local instance variables
  ends_with_nl <- grepl("\n$", text)
  html_block_tag <- ""
  i <- 1L
  in_fenced_block <- FALSE
  in_frontmatter <- FALSE
  lines_vec <- character(0)
  n_lines <- 0L
  out_lines <- character(0)

  #Guard clauses
  if (is.null(arg0_text) || length(arg0_text) == 0 || !nzchar(text)) return(arg0_text)

  lines_vec <- strsplit(text, "\n", fixed = TRUE)[[1]]
  n_lines <- length(lines_vec)

  split_pipe_row <- function (arg0_row_str) {
    inner <- sub("^\\|\\s*", "", sub("\\s*\\|$", "", trimws(arg0_row_str)))
    parts <- strsplit(paste0(inner, " "), "(?<!\\\\)\\|", perl = TRUE)[[1]]
    parts <- trimws(parts)
    parts <- gsub("\\\\\\|", "|", parts, perl = TRUE)
    return(parts)
  }

  while (i <= n_lines) {
    local_line <- lines_vec[i]
    local_trim <- trimws(local_line)

    if (i == 1L && identical(local_trim, "---")) {
      in_frontmatter <- TRUE
      out_lines <- c(out_lines, local_line)
      i <- i + 1L
      next
    }
    if (in_frontmatter) {
      if (identical(local_trim, "---") || identical(local_trim, "...")) {
        in_frontmatter <- FALSE
      }
      out_lines <- c(out_lines, local_line)
      i <- i + 1L
      next
    }

    if (grepl("^```", local_trim)) {
      in_fenced_block <- !in_fenced_block
      out_lines <- c(out_lines, local_line)
      i <- i + 1L
      next
    }
    if (in_fenced_block) {
      out_lines <- c(out_lines, local_line)
      i <- i + 1L
      next
    }

    if (nzchar(html_block_tag)) {
      if (grepl(paste0("</", html_block_tag, ">\\s*$"), local_trim, ignore.case = TRUE, perl = TRUE)) {
        html_block_tag <- ""
      }
      out_lines <- c(out_lines, local_line)
      i <- i + 1L
      next
    }
    if (grepl("^<(figure|table|div|header)\\b", local_trim, ignore.case = TRUE, perl = TRUE)) {
      open_tag <- tolower(sub("^<(figure|table|div|header)\\b.*$", "\\1", local_trim, ignore.case = TRUE, perl = TRUE))
      if (!grepl(paste0("</", open_tag, ">\\s*$"), local_trim, ignore.case = TRUE, perl = TRUE)) {
        html_block_tag <- open_tag
      }
      out_lines <- c(out_lines, local_line)
      i <- i + 1L
      next
    }

    if (
      i < n_lines &&
      grepl("^\\|.*\\|$", local_trim, perl = TRUE) &&
      grepl("^\\|[\\s:\\-\\|]+\\|$", trimws(lines_vec[i + 1L]), perl = TRUE) &&
      grepl("-", trimws(lines_vec[i + 1L]), fixed = TRUE)
    ) {
      header_raw <- local_trim
      sep_raw <- trimws(lines_vec[i + 1L])
      scan_idx <- i + 2L
      row_lines <- character(0)
      while (scan_idx <= n_lines && grepl("^\\|.*\\|$", trimws(lines_vec[scan_idx]), perl = TRUE)) {
        row_lines <- c(row_lines, trimws(lines_vec[scan_idx]))
        scan_idx <- scan_idx + 1L
      }

      col_headers <- split_pipe_row(header_raw)
      sep_cells <- split_pipe_row(sep_raw)
      n_cols <- length(col_headers)

      if (n_cols > 0L && length(row_lines) > 0L) {
        align_vec <- vapply(sep_cells, function (sc) {
          if (grepl("^:.*:$", sc)) return("c")
          if (grepl(":$", sc)) return("r")
          return("l")
        }, character(1))
        if (length(align_vec) != n_cols) {
          align_vec <- rep("l", n_cols)
        }

        mat_rows <- lapply(row_lines, function (rl) {
          cells <- split_pipe_row(rl)
          if (length(cells) < n_cols) {
            cells <- c(cells, rep("", n_cols - length(cells)))
          } else if (length(cells) > n_cols) {
            cells <- cells[seq_len(n_cols)]
          }
          cells
        })

        bold_first_col <- FALSE
        first_col_vals <- vapply(mat_rows, function (r) trimws(r[1L]), character(1))
        non_empty_first <- first_col_vals[nzchar(first_col_vals)]
        if (length(non_empty_first) > 0L && all(grepl("^\\*\\*.+\\*\\*$", non_empty_first, perl = TRUE))) {
          bold_first_col <- TRUE
          for (r_idx in seq_along(mat_rows)) {
            mat_rows[[r_idx]][1L] <- sub("^\\*\\*(.+)\\*\\*$", "\\1", trimws(mat_rows[[r_idx]][1L]), perl = TRUE)
          }
        }

        pending_caption <- ""
        back_idx <- length(out_lines)
        while (back_idx >= 1L && !nzchar(trimws(out_lines[back_idx]))) {
          back_idx <- back_idx - 1L
        }
        if (back_idx >= 1L) {
          cand_trim <- trimws(out_lines[back_idx])
          if (grepl("^(?:Table:|:)\\s+(.+)$", cand_trim, perl = TRUE)) {
            pending_caption <- sub("^(?:Table:|:)\\s+", "", cand_trim, perl = TRUE)
            out_lines <- if (back_idx > 1L) out_lines[seq_len(back_idx - 1L)] else character(0)
          } else if (grepl("^#{3,4}\\s+Table\\s+[0-9]+[:.]\\s*(.+)$", cand_trim, perl = TRUE)) {
            pending_caption <- sub("^#{3,4}\\s+Table\\s+[0-9]+[:.]\\s*", "", cand_trim, perl = TRUE)
            out_lines <- if (back_idx > 1L) out_lines[seq_len(back_idx - 1L)] else character(0)
          }
        }

        df_out <- as.data.frame(do.call(rbind, mat_rows), stringsAsFactors = FALSE)
        safe_colnames <- make.unique(ifelse(nzchar(col_headers), col_headers, paste0("V", seq_len(n_cols))))
        colnames(df_out) <- safe_colnames

        rendered_html <- as.character(render_table_template(
          df_out,
          list(
            align = unname(align_vec),
            bold_first_col = bold_first_col,
            caption = pending_caption,
            col_names = col_headers,
            euro_decimals = euro_decimals
          )
        ))
        out_lines <- c(out_lines, rendered_html)
        i <- scan_idx
        next
      }
    }

    out_lines <- c(out_lines, local_line)
    i <- i + 1L
  }

  out_str <- paste(out_lines, collapse = "\n")
  if (ends_with_nl && !grepl("\n$", out_str)) {
    out_str <- paste0(out_str, "\n")
  }

  #Return statement
  return(out_str)
}


#' Formats native Markdown prose lines in a knitted `.Rmd` document, applying
#' European decimal formatting (including `{,}` inside LaTeX `$...$` math) and
#' Unicode-to-LaTeX symbol conversion while skipping frontmatter, code blocks,
#' LaTeX float environments, and raw HTML blocks.
#'
#' @param arg0_doc_vec Character vector passed to `knitr::knit_hooks$get("document")`.
#' @param arg1_options Optional named list (`euro_decimals`, `is_latex`).
#' @return Formatted character string of the knitted document.
#' @export
format_knitted_document <- function (arg0_doc_vec, arg1_options = NULL) {
  #Convert from parameters
  doc_vec <- arg0_doc_vec
  options <- if (!is.null(arg1_options)) arg1_options else list()

  #Initialise options
  euro_decimals <- if (!is.null(options$euro_decimals)) isTRUE(options$euro_decimals) else TRUE
  is_latex <- if (!is.null(options$is_latex)) {
    isTRUE(options$is_latex)
  } else if (requireNamespace("knitr", quietly = TRUE)) {
    knitr::is_latex_output()
  } else {
    FALSE
  }

  #Guard clauses
  if (is.null(doc_vec) || length(doc_vec) == 0) return(doc_vec)

  #Declare local instance variables
  full_text <- paste(as.character(doc_vec), collapse = "\n")
  if (!is_latex && isTRUE(getOption("intellte.dom_mode", FALSE))) {
    full_text <- convert_dom_pipe_tables(full_text, list(euro_decimals = euro_decimals))
  }
  in_fenced_block <- FALSE
  in_frontmatter <- FALSE
  in_html_block <- FALSE
  in_latex_float <- FALSE
  lines_vec <- strsplit(full_text, "\n", fixed = TRUE)[[1]]
  n_lines <- length(lines_vec)

  for (i in seq_len(n_lines)) {
    local_line <- lines_vec[i]
    local_trim <- trimws(local_line)

    if (i == 1L && identical(local_trim, "---")) {
      in_frontmatter <- TRUE
      next
    }
    if (in_frontmatter) {
      if (identical(local_trim, "---") || identical(local_trim, "...")) {
        in_frontmatter <- FALSE
      }
      next
    }

    if (grepl("^```", local_trim)) {
      in_fenced_block <- !in_fenced_block
      next
    }
    if (in_fenced_block) next

    if (grepl("^\\\\begin\\{(?:table|figure|tabular)", local_trim, perl = TRUE)) {
      in_latex_float <- TRUE
    }
    if (in_latex_float) {
      if (grepl("^\\\\end\\{(?:table|figure|tabular)", local_trim, perl = TRUE)) {
        in_latex_float <- FALSE
      }
      next
    }

    if (grepl("^<(?:figure|table|div|header)\\b", local_trim, perl = TRUE)) {
      if (!grepl("</(?:figure|table|div|header)>\\s*$", local_trim, perl = TRUE)) {
        in_html_block <- TRUE
      }
      next
    }
    if (in_html_block) {
      if (grepl("</(?:figure|table|div|header)>\\s*$", local_trim, perl = TRUE)) {
        in_html_block <- FALSE
      }
      next
    }

    if (!nzchar(local_trim)) next

    if (euro_decimals) {
      local_line <- convert_euro_decimals_in_text(local_line, is_latex)
    }

    if (is_latex) {
      local_line <- sanitize_prose_unicode_for_latex(local_line)
    }

    lines_vec[i] <- local_line
  }

  #Return statement
  return(paste(lines_vec, collapse = "\n"))
}


#' Interpolates variables into a prose template using £1£, £2£ or £key£ delimiters.
#'
#' @param arg0_template_text Character string or vector containing `£...£` placeholders.
#' @param arg1_vars_list List or vector of replacement values.
#' @return Interpolated character string.
#' @export
interpolate_prose_template <- function (arg0_template_text, arg1_vars_list = NULL) {
  #Convert from parameters
  template_text <- paste(as.character(arg0_template_text), collapse = "\n")
  vars_list <- if (!is.null(arg1_vars_list)) arg1_vars_list else list()

  #Guard clauses
  if (!nzchar(template_text) || length(vars_list) == 0) return(template_text)

  out_text <- template_text
  var_names <- names(vars_list)

  #Replace positional £1£, £2£, ...
  for (i in seq_along(vars_list)) {
    pos_token <- paste0("\u00a3", i, "\u00a3")
    val_str <- as.character(vars_list[[i]])
    out_text <- gsub(pos_token, val_str, out_text, fixed = TRUE)
  }

  #Replace named £key£ and {{key}}
  if (!is.null(var_names)) {
    for (i in seq_along(var_names)) {
      k <- var_names[i]
      if (nzchar(k)) {
        named_pound <- paste0("\u00a3", k, "\u00a3")
        named_brace <- paste0("{{", k, "}}")
        val_str <- as.character(vars_list[[i]])
        out_text <- gsub(named_pound, val_str, out_text, fixed = TRUE)
        out_text <- gsub(named_brace, val_str, out_text, fixed = TRUE)
      }
    }
  }

  #Return statement
  return(out_text)
}


#' Parses a Markdown string or file into alternating prose blocks and structured data.frame tables.
#'
#' @param arg0_md_source Path to a `.md` file or raw Markdown character string.
#' @return List of block objects (`list(type = "prose", text = ...)` or `list(type = "table", caption = ..., df = ..., align = ...)`).
#' @export
parse_markdown_document <- function (arg0_md_source) {
  #Convert from parameters
  md_source <- arg0_md_source

  #Declare local instance variables
  blocks <- list()
  i <- 1L
  lines_vec <- character(0)
  n_lines <- 0L
  pending_caption <- ""
  prose_buffer <- character(0)

  #Guard clauses
  if (is.null(md_source) || length(md_source) == 0) return(blocks)

  if (length(md_source) == 1L && !grepl("\n", md_source) && file.exists(md_source)) {
    lines_vec <- readLines(md_source, warn = FALSE, encoding = "UTF-8")
  } else {
    lines_vec <- unlist(strsplit(paste(md_source, collapse = "\n"), "\r?\n"))
  }

  n_lines <- length(lines_vec)

  flush_prose <- function () {
    if (length(prose_buffer) > 0) {
      joined <- trimws(paste(prose_buffer, collapse = "\n"))
      if (nzchar(joined)) {
        blocks[[length(blocks) + 1L]] <<- list(
          text = joined,
          type = "prose"
        )
      }
      prose_buffer <<- character(0)
    }
  }

  while (i <= n_lines) {
    curr_line <- lines_vec[i]
    trimmed <- trimws(curr_line)

    #Check if this is a "### Table X: ..." or "### A. Region ..." heading right before a pipe table
    if (grepl("^#{2,4}\\s+", trimmed, perl = TRUE)) {
      #Look ahead skipping blank lines to see if a pipe table follows immediately
      look_idx <- i + 1L
      while (look_idx <= n_lines && !nzchar(trimws(lines_vec[look_idx]))) {
        look_idx <- look_idx + 1L
      }
      if (look_idx < n_lines &&
          grepl("^\\|.*\\|$", trimws(lines_vec[look_idx]), perl = TRUE) &&
          grepl("^\\|[\\s:\\-\\|]+\\|$", trimws(lines_vec[look_idx + 1L]), perl = TRUE)) {
        pending_caption <- sub("^#{2,4}\\s+", "", trimmed, perl = TRUE)
        i <- look_idx
        next
      }
    }

    #Detect pipe table start: header line + separator line | :---: | ... |
    if (i < n_lines &&
        grepl("^\\|.*\\|$", trimmed, perl = TRUE) &&
        grepl("^\\|[\\s:\\-\\|]+\\|$", trimws(lines_vec[i + 1L]), perl = TRUE)) {
      flush_prose()

      header_raw <- trimmed
      sep_raw <- trimws(lines_vec[i + 1L])
      i <- i + 2L

      row_lines <- character(0)
      while (i <= n_lines && grepl("^\\|.*\\|$", trimws(lines_vec[i]), perl = TRUE)) {
        row_lines <- c(row_lines, trimws(lines_vec[i]))
        i <- i + 1L
      }

      split_pipe <- function (line_str) {
        inner <- sub("^\\|\\s*", "", sub("\\s*\\|$", "", line_str))
        trimws(strsplit(inner, "\\|", fixed = FALSE)[[1]])
      }

      col_headers <- split_pipe(header_raw)
      sep_cells <- split_pipe(sep_raw)
      n_cols <- length(col_headers)

      align_vec <- vapply(sep_cells, function (sc) {
        if (grepl("^:.*:$", sc)) return("c")
        if (grepl(":$", sc)) return("r")
        return("l")
      }, character(1))
      if (length(align_vec) != n_cols) {
        align_vec <- c("l", rep("r", max(0L, n_cols - 1L)))
      }

      mat_rows <- lapply(row_lines, function (rl) {
        cells <- split_pipe(rl)
        if (length(cells) < n_cols) {
          cells <- c(cells, rep("", n_cols - length(cells)))
        } else if (length(cells) > n_cols) {
          cells <- cells[seq_len(n_cols)]
        }
        cells
      })

      df_out <- if (length(mat_rows) > 0) {
        as.data.frame(do.call(rbind, mat_rows), stringsAsFactors = FALSE)
      } else {
        as.data.frame(matrix(character(0), nrow = 0, ncol = n_cols), stringsAsFactors = FALSE)
      }
      colnames(df_out) <- col_headers

      blocks[[length(blocks) + 1L]] <- list(
        align = unname(align_vec),
        caption = pending_caption,
        col_names = col_headers,
        df = df_out,
        type = "table"
      )
      pending_caption <- ""
      next
    }

    prose_buffer <- c(prose_buffer, curr_line)
    i <- i + 1L
  }

  flush_prose()

  #Return statement
  return(blocks)
}


#' Renders Markdown prose (from a file or string) into RMarkdown/LaTeX output,
#' routing any embedded pipe tables through `render_table_template()` so Pandoc
#' never emits two-column-incompatible `longtable` environments.
#'
#' @param arg0_md_source Path to a `.md` file, defines key, or raw Markdown string.
#' @param arg1_options Optional named list (`include_tables`, `euro_decimals`, `strip_top_h1`,
#'   `strip_hr`, `strip_generated_footer`, `vars`, `table_options`).
#' @return A `knitr::asis_output` object.
#' @export
render_markdown_prose <- function (arg0_md_source, arg1_options = NULL) {
  #Convert from parameters
  options <- if (!is.null(arg1_options)) arg1_options else list()

  #Initialise options
  euro_decimals <- if (!is.null(options$euro_decimals)) isTRUE(options$euro_decimals) else TRUE
  include_tables <- if (!is.null(options$include_tables)) isTRUE(options$include_tables) else TRUE
  is_latex <- if (requireNamespace("knitr", quietly = TRUE)) knitr::is_latex_output() else FALSE
  strip_generated_footer <- if (!is.null(options$strip_generated_footer)) isTRUE(options$strip_generated_footer) else TRUE
  strip_hr <- if (!is.null(options$strip_hr)) isTRUE(options$strip_hr) else TRUE
  strip_top_h1 <- if (!is.null(options$strip_top_h1)) isTRUE(options$strip_top_h1) else TRUE
  table_options <- if (!is.null(options$table_options)) options$table_options else list()
  vars_list <- options$vars

  #Declare local instance variables
  blocks <- list()
  out_pieces <- character(0)
  resolved_source <- arg0_md_source
  table_counter <- 0L

  if (length(arg0_md_source) == 1L && !grepl("\n", arg0_md_source)) {
    cand_path <- tryCatch(resolve_project_path(arg0_md_source), error = function (e) arg0_md_source)
    if (file.exists(cand_path)) {
      resolved_source <- cand_path
    }
  }

  blocks <- parse_markdown_document(resolved_source)

  for (b_idx in seq_along(blocks)) {
    blk <- blocks[[b_idx]]
    if (identical(blk$type, "prose")) {
      txt <- blk$text
      if (!is.null(vars_list)) {
        txt <- interpolate_prose_template(txt, vars_list)
      }
      p_lines <- unlist(strsplit(txt, "\r?\n"))
      if (strip_top_h1 && b_idx == 1L && length(p_lines) > 0 && grepl("^#\\s+", p_lines[1])) {
        p_lines <- p_lines[-1]
      }
      if (strip_hr) {
        p_lines <- p_lines[!grepl("^\\s*---\\s*$", p_lines)]
      }
      if (strip_generated_footer) {
        p_lines <- p_lines[!grepl("^\\*Generated autonomously by Project", trimws(p_lines))]
      }
      if (!include_tables) {
        #Also remove standalone "### Table X..." lines if tables are excluded
        p_lines <- p_lines[!grepl("^#{2,4}\\s+Table\\s+[0-9]", trimws(p_lines))]
      }

      clean_txt <- trimws(paste(p_lines, collapse = "\n"))
      if (nzchar(clean_txt)) {
        if (euro_decimals) {
          clean_txt <- convert_euro_decimals_in_text(clean_txt, is_latex)
        }
        if (is_latex) {
          #Replace Unicode arrows, multiplication, delta, and superscripts so pdflatex compiles cleanly
          clean_txt <- gsub("\u2192", "\\rightarrow ", clean_txt, fixed = TRUE)
          clean_txt <- gsub("\u00d7", "\\times ", clean_txt, fixed = TRUE)
          clean_txt <- gsub("\u0394", "\\Delta ", clean_txt, fixed = TRUE)
          clean_txt <- gsub("km\u00b2", "$\\text{km}^2$", clean_txt, fixed = TRUE)
          clean_txt <- gsub("m\u00b2", "$\\text{m}^2$", clean_txt, fixed = TRUE)
          clean_txt <- gsub("R\u00b2", "$R^2$", clean_txt, fixed = TRUE)
          clean_txt <- gsub("\u2013", "-", clean_txt, fixed = TRUE)
          clean_txt <- gsub("\u2014", "---", clean_txt, fixed = TRUE)
        }
        out_pieces <- c(out_pieces, clean_txt)
      }
    } else if (identical(blk$type, "table") && include_tables) {
      table_counter <- table_counter + 1L
      t_opts <- modifyList(
        list(
          align = blk$align,
          caption = blk$caption,
          col_names = blk$col_names,
          euro_decimals = euro_decimals,
          font_size = if (ncol(blk$df) >= 8L) "scriptsize" else "footnotesize",
          scale_to_fit = (ncol(blk$df) >= 6L),
          span_columns = (ncol(blk$df) >= 6L)
        ),
        table_options
      )
      rendered_tbl <- render_table_template(blk$df, t_opts)
      out_pieces <- c(out_pieces, as.character(rendered_tbl))
    }
  }

  #Return statement
  return(knitr::asis_output(paste(out_pieces, collapse = "\n\n")))
}


#' Converts Unicode mathematical/typographic symbols in a Markdown prose line into
#' LaTeX-compatible equivalents while respecting `$...$` math boundaries.
#'
#' @param arg0_line Single Markdown prose line.
#' @return Line with LaTeX-compatible symbol commands.
#' @export
sanitize_prose_unicode_for_latex <- function (arg0_line) {
  #Convert from parameters
  line_str <- as.character(arg0_line)

  #Guard clauses
  if (length(line_str) == 0 || is.na(line_str) || !nzchar(line_str)) return(line_str)

  parts <- strsplit(line_str, "(?<=\\$)|(?=\\$)", perl = TRUE)[[1]]
  in_math <- FALSE
  for (i in seq_along(parts)) {
    p <- parts[i]
    if (identical(p, "$")) {
      in_math <- !in_math
    } else if (in_math) {
      p <- gsub("\u2192", " \\rightarrow ", p, fixed = TRUE)
      p <- gsub("\u00d7", " \\times ", p, fixed = TRUE)
      p <- gsub("\u0394", "\\Delta ", p, fixed = TRUE)
      p <- gsub("\u2248", " \\approx ", p, fixed = TRUE)
      p <- gsub("\u2011", "-", p, fixed = TRUE)
      p <- gsub("\u2013", "-", p, fixed = TRUE)
      p <- gsub("\u2014", "-", p, fixed = TRUE)
      parts[i] <- p
    } else {
      p <- gsub(
        "\\b(Figures?|Figs?\\.|Tables?|Tabs?\\.|Images?|Definitions?|Sections?|Appendix)(?:\\s+|~)\\\\ref\\{([^}]+)\\}",
        "\\\\crdxref{\\1}{\\2}",
        p,
        perl = TRUE
      )
      p <- gsub("\u2192", " to ", p, fixed = TRUE)
      p <- gsub("\u00d7", "x", p, fixed = TRUE)
      p <- gsub("\u0394", "$\\Delta$", p, fixed = TRUE)
      p <- gsub("\u2248", "~", p, fixed = TRUE)
      p <- gsub("km\u00b2", "km\\textsuperscript{2}", p, fixed = TRUE)
      p <- gsub("m\u00b2", "m\\textsuperscript{2}", p, fixed = TRUE)
      p <- gsub("R\u00b2", "R\\textsuperscript{2}", p, fixed = TRUE)
      p <- gsub("\u00b2", "\\textsuperscript{2}", p, fixed = TRUE)
      p <- gsub("\u2011", "-", p, fixed = TRUE)
      p <- gsub("\u2013", "-", p, fixed = TRUE)
      p <- gsub("\u2014", " - ", p, fixed = TRUE)
      p <- gsub("---", " - ", p, fixed = TRUE)
      p <- gsub("--", "-", p, fixed = TRUE)
      parts[i] <- p
    }
  }

  #Return statement
  return(paste(parts, collapse = ""))
}

