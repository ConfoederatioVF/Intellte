"""
Step D (Publication Tables): Renders all standalone academic table PNG artefacts via
XeLaTeX + Intellte CRD typography (Karla Bold headers, Karla Regular stubs, Source Serif 4
body, borderless CRD working-paper layout, and centred captions underneath) at 300 DPI.
"""

import json
import os
import sys

from vis_helpers import compile_xelatex_to_png, fmt_eu, get_project_paths

sys.stdout.reconfigure(encoding="utf-8")

CYRILLIC_TRANSLIT = {
  "Шелепино": "Shelepino"
}


def tex_escape(raw_str):
  """
  Escapes special LaTeX characters in plain strings while preserving ~ tilde as \\textasciitilde{}.
  """
  if raw_str is None:
    return ""
  s = str(raw_str)
  replacements = [
    ("\\", "\\textbackslash{}"),
    ("&", "\\&"),
    ("%", "\\%"),
    ("$", "\\$"),
    ("#", "\\#"),
    ("_", "\\_"),
    ("{", "\\{"),
    ("}", "\\}"),
    ("^", "\\textasciicircum{}"),
    ("~", "\\textasciitilde{}"),
    ("<", "$<$"),
    (">", "$>$")
  ]
  for old_c, new_c in replacements:
    s = s.replace(old_c, new_c)
  return s


def clean_top120_city_name(item, dup_names_set):
  """
  Cleans Top-120 city names, mapping corrupted GHSL '????' labels to 'N/A' (matching
  Stadestér 1.0 Figure 34) and appending (GHSL)/(Base) when a city name appears in both.
  """
  if not item:
    return "N/A"
  raw = str(item.get("name", "")).strip()
  if not raw or "?" in raw or "\ufffd" in raw:
    return "N/A"
  if raw in CYRILLIC_TRANSLIT:
    raw = CYRILLIC_TRANSLIT[raw]
  if raw in dup_names_set:
    is_ghsl = str(item.get("key", "")).startswith("ghsl-")
    suffix = " (GHSL)" if is_ghsl else " (Base)"
    return raw + suffix
  return raw


def build_crd_caption(label_bold, caption_text, note_text=None):
  """
  Builds a centred CRD caption (and optional Note) placed underneath a borderless table.
  """
  parts = [
    "\\vspace{12pt}",
    "\\begin{center}",
    f"{{\\fontsize{{10pt}}{{14.5pt}}\\selectfont{{\\karlabold {tex_escape(label_bold)}.}} {tex_escape(caption_text)}\\par}}"
  ]
  if note_text:
    parts.append("\\vspace{6pt}")
    parts.append(
      f"{{\\fontsize{{9.5pt}}{{13.5pt}}\\selectfont{{\\karlabold Note.}} {tex_escape(note_text)}\\par}}"
    )
  parts.append("\\end{center}")
  return "\n".join(parts)


def render_macro_cog_table(paths_ctx):
  """
  Renders 1.macro_validation/table_macro_cog_deviations.png.
  """
  with open(os.path.join(paths_ctx["results_dir"], "macro_centres_of_gravity.json"), "r", encoding="utf-8") as h:
    cog = json.load(h)
  pw = cog["pairwise_deviations"]

  rows = [
    (
      "Stadestér Base vs. Reba et al. (3000BC-2000AD)",
      fmt_eu(pw["base_vs_reba_published"]["min_km"], 2),
      f"{fmt_eu(pw['base_vs_reba_published']['max_km'], 2)} ({pw['base_vs_reba_published']['max_year']})",
      f"{fmt_eu(pw['base_vs_reba_published']['mean_km'], 2)} ({fmt_eu(pw['base_vs_reba_published']['mean_pct_great_circle'], 2)}%)",
      f"{fmt_eu(pw['base_vs_reba_published']['sd_km'], 2)} ({fmt_eu(pw['base_vs_reba_published']['sd_pct_great_circle'], 2)}%)",
      "~220 to 1.170 km"
    ),
    (
      "Stadestér Base vs. Reba et al. (Pre-1900AD)",
      fmt_eu(pw["base_vs_reba_pre_1900"]["min_km"], 2),
      f"{fmt_eu(pw['base_vs_reba_pre_1900']['max_km'], 2)} ({pw['base_vs_reba_pre_1900']['max_year']})",
      f"{fmt_eu(pw['base_vs_reba_pre_1900']['mean_km'], 2)} ({fmt_eu(pw['base_vs_reba_pre_1900']['mean_pct_great_circle'], 2)}%)",
      f"{fmt_eu(pw['base_vs_reba_pre_1900']['sd_km'], 2)} ({fmt_eu(pw['base_vs_reba_pre_1900']['sd_pct_great_circle'], 2)}%)",
      "Max ~1.170 km (1500AD)"
    ),
    (
      "Stadestér Base vs. Mulligan & Crampton (1950-2010AD)",
      fmt_eu(pw["base_vs_mulligan_crampton_published"]["min_km"], 2),
      f"{fmt_eu(pw['base_vs_mulligan_crampton_published']['max_km'], 2)} ({pw['base_vs_mulligan_crampton_published']['max_year']})",
      f"{fmt_eu(pw['base_vs_mulligan_crampton_published']['mean_km'], 2)} ({fmt_eu(pw['base_vs_mulligan_crampton_published']['mean_pct_great_circle'], 2)}%)",
      f"{fmt_eu(pw['base_vs_mulligan_crampton_published']['sd_km'], 2)} ({fmt_eu(pw['base_vs_mulligan_crampton_published']['sd_pct_great_circle'], 2)}%)",
      "410-450 km (max ~935 km)"
    ),
    (
      "Stadestér-GHSL vs. Mulligan & Crampton (1975-2010AD)",
      fmt_eu(pw["ghsl_vs_mulligan_crampton_published"]["min_km"], 2),
      f"{fmt_eu(pw['ghsl_vs_mulligan_crampton_published']['max_km'], 2)} ({pw['ghsl_vs_mulligan_crampton_published']['max_year']})",
      f"{fmt_eu(pw['ghsl_vs_mulligan_crampton_published']['mean_km'], 2)} ({fmt_eu(pw['ghsl_vs_mulligan_crampton_published']['mean_pct_great_circle'], 2)}%)",
      f"{fmt_eu(pw['ghsl_vs_mulligan_crampton_published']['sd_km'], 2)} ({fmt_eu(pw['ghsl_vs_mulligan_crampton_published']['sd_pct_great_circle'], 2)}%)",
      "~2.323,52 km (11,60%)"
    ),
    (
      "Stadestér Base vs. Stadestér-GHSL (1975-2025AD)",
      fmt_eu(pw["base_vs_ghsl_1975_2025"]["min_km"], 2),
      f"{fmt_eu(pw['base_vs_ghsl_1975_2025']['max_km'], 2)} ({pw['base_vs_ghsl_1975_2025']['max_year']})",
      f"{fmt_eu(pw['base_vs_ghsl_1975_2025']['mean_km'], 2)} ({fmt_eu(pw['base_vs_ghsl_1975_2025']['mean_pct_great_circle'], 2)}%)",
      f"{fmt_eu(pw['base_vs_ghsl_1975_2025']['sd_km'], 2)} ({fmt_eu(pw['base_vs_ghsl_1975_2025']['sd_pct_great_circle'], 2)}%)",
      "Post-1975 GHSL shift"
    )
  ]

  body_lines = [
    "\\renewcommand{\\arraystretch}{1.35}",
    "\\setlength{\\tabcolsep}{6pt}",
    "\\begin{tabular*}{\\textwidth}{@{\\extracolsep{\\fill}}llllll@{}}",
    "{\\karlabold Comparison Pair} & {\\karlabold\\begin{tabular}[t]{@{}l@{}}Min.\\\\[-2pt]Deviation\\end{tabular}} & {\\karlabold\\begin{tabular}[t]{@{}l@{}}Max.\\\\[-2pt]Deviation\\end{tabular}} & {\\karlabold\\begin{tabular}[t]{@{}l@{}}Mean\\\\[-2pt](\\% Great Circle)\\end{tabular}} & {\\karlabold\\begin{tabular}[t]{@{}l@{}}SD\\\\[-2pt](\\% Great Circle)\\end{tabular}} & {\\karlabold\\begin{tabular}[t]{@{}l@{}}Stadestér 1.0\\\\[-2pt]Reference\\end{tabular}} \\\\[6pt]"
  ]
  for r_item in rows:
    cells = [f"{{\\karlaregular {tex_escape(r_item[0])}}}"] + [tex_escape(c) for c in r_item[1:]]
    body_lines.append(" & ".join(cells) + " \\\\")
  body_lines.append("\\end{tabular*}")
  body_lines.append(build_crd_caption(
    "Table 1",
    "Global centre of population geodesic deviations across reference datasets in kilometres (% of Earth half-great-circle = 20.003,93 km)."
  ))

  compile_xelatex_to_png(
    "\n".join(body_lines),
    os.path.join(paths_ctx["macro_dir"], "table_macro_cog_deviations.png"),
    paths_ctx,
    paper_width_in=10.8
  )


def render_fig30_regional_cog_table(paths_ctx):
  """
  Renders 2.meso_validation/fig30_regional_cog_deviations_table.png matching Stadestér 1.0
  Figure 30 (page 44).
  """
  with open(os.path.join(paths_ctx["results_dir"], "meso_regional_cogs.json"), "r", encoding="utf-8") as h:
    rc = json.load(h)

  body_lines = [
    "\\renewcommand{\\arraystretch}{1.32}",
    "\\setlength{\\tabcolsep}{5pt}",
    "\\begin{tabular*}{\\textwidth}{@{\\extracolsep{\\fill}}>{\\raggedright\\arraybackslash}p{1.62in}lllll@{}}",
    "{\\karlabold Region} & {\\karlabold\\begin{tabular}[t]{@{}l@{}}Min.\\\\[-2pt]Deviation\\end{tabular}} & {\\karlabold\\begin{tabular}[t]{@{}l@{}}Max.\\\\[-2pt]Deviation\\end{tabular}} & {\\karlabold Mean (\\% Error)} & {\\karlabold SD (\\% Error)} & {\\karlabold\\begin{tabular}[t]{@{}l@{}}Longest\\\\[-2pt]Geodesic\\end{tabular}} \\\\[6pt]"
  ]

  for reg in rc["regions"]:
    c0 = f"{{\\karlaregular {tex_escape(reg['name'])}}}"
    c1 = tex_escape(fmt_eu(reg["min_km"], 2))
    c2 = tex_escape(fmt_eu(reg["max_km"], 2))
    c3 = tex_escape(f"{fmt_eu(reg['mean_km'], 2)} ({fmt_eu(reg['mean_pct_geodesic'], 2)}%)")
    c4 = tex_escape(f"{fmt_eu(reg['sd_km'], 2)} ({fmt_eu(reg['sd_pct_geodesic'], 2)}%)")
    c5 = tex_escape(f"~{fmt_eu(reg['longest_geodesic_km'], 0)}")
    body_lines.append(f"{c0} & {c1} & {c2} & {c3} & {c4} & {c5} \\\\")

  wa = rc["world_average"]
  wa_mean_s = f"{fmt_eu(wa['mean_km'], 2)} ({fmt_eu(wa['mean_pct_geodesic'], 2)}%)"
  wa_sd_s = f"{fmt_eu(wa['sd_km'], 2)} ({fmt_eu(wa['sd_pct_geodesic'], 2)}%)"
  body_lines.append(
    f"{{\\karlabold World (Avg.)}} & {tex_escape(fmt_eu(wa['min_km'], 2))} & {tex_escape(fmt_eu(wa['max_km'], 2))} & "
    f"{tex_escape(wa_mean_s)} & {tex_escape(wa_sd_s)} & N/A \\\\"
  )
  body_lines.append("\\end{tabular*}")
  body_lines.append(build_crd_caption(
    "Figure 30",
    "Comparisons of deviations between Stadestér-Base and Stadestér-GHSL by each world region’s centre of population in kilometres.",
    "Longest geodesic figures are approximate and are the diagonal of the bounding box of the largest contiguous geometry after per-pixel kNN-binning."
  ))

  compile_xelatex_to_png(
    "\n".join(body_lines),
    os.path.join(paths_ctx["meso_dir"], "fig30_regional_cog_deviations_table.png"),
    paths_ctx,
    paper_width_in=7.2
  )


def render_fig34_and_fig35_top120_tables(paths_ctx):
  """
  Renders Figure 34 (fig34_top_120_rank_ordinal_table.png) and Figure 35
  (fig35_top_120_regional_counts_table.png) matching Stadestér 1.0 pages 47-51.
  """
  with open(os.path.join(paths_ctx["results_dir"], "meso_top_120_rankings.json"), "r", encoding="utf-8") as h:
    t120 = json.load(h)

  # Identify city names occurring in both Base and GHSL within each metric column
  dup_sets = {}
  for m_key in ["area", "density", "density_ghsl", "population"]:
    by_name = {}
    for it in t120["rankings"][m_key]:
      nm = it["name"]
      src = "ghsl" if str(it.get("key", "")).startswith("ghsl-") else "base"
      by_name.setdefault(nm, set()).add(src)
    dup_sets[m_key] = {nm for nm, srcs in by_name.items() if len(srcs) > 1}

  def build_half_block(start_idx, end_idx):
    lines = [
      "\\fontsize{8.2pt}{11.2pt}\\selectfont",
      "\\renewcommand{\\arraystretch}{1.08}",
      "\\setlength{\\tabcolsep}{3.5pt}",
      "\\begin{tabular}{@{}l>{\\raggedright\\arraybackslash}p{1.15in}>{\\raggedright\\arraybackslash}p{1.22in}>{\\raggedright\\arraybackslash}p{1.22in}>{\\raggedright\\arraybackslash}p{1.15in}@{}}",
      "{\\karlabold Rank} & {\\karlabold Area (Proxy)} & {\\karlabold\\begin{tabular}[t]{@{}l@{}}City Centre Density,\\\\[-2pt]$<$1975, Base\\end{tabular}} & {\\karlabold\\begin{tabular}[t]{@{}l@{}}City Centre Density,\\\\[-2pt]$>=$1975, GHSL\\end{tabular}} & {\\karlabold Population} \\\\[4pt]"
    ]
    for r_i in range(start_idx, end_idx):
      a_nm = tex_escape(clean_top120_city_name(t120["rankings"]["area"][r_i], dup_sets["area"]))
      db_nm = tex_escape(clean_top120_city_name(t120["rankings"]["density"][r_i], dup_sets["density"]))
      dg_nm = tex_escape(clean_top120_city_name(t120["rankings"]["density_ghsl"][r_i], dup_sets["density_ghsl"]))
      p_nm = tex_escape(clean_top120_city_name(t120["rankings"]["population"][r_i], dup_sets["population"]))
      lines.append(f"{r_i + 1} & {a_nm} & {db_nm} & {dg_nm} & {p_nm} \\\\")
    lines.append("\\end{tabular}")
    return "\n".join(lines)

  fig34_tex = "\n".join([
    "\\noindent",
    "\\begin{minipage}[t]{0.488\\textwidth}",
    build_half_block(0, 60),
    "\\end{minipage}\\hfill",
    "\\begin{minipage}[t]{0.488\\textwidth}",
    build_half_block(60, 120),
    "\\end{minipage}",
    "\\vspace{10pt}",
    "\\par\\noindent{\\fontsize{9.5pt}{13.5pt}\\selectfont{\\karlabold Note:} This is metro-adjusted Stadestér Base, meaning that large metropolitan areas are disaggregated compared to GHSL. The rank is given by a city’s maximum area/density/population, not that of its last year.\\par}",
    build_crd_caption(
      "Figure 34",
      "Rank-ordinal tables of the top 120 cities in each category (area, city centre density, population) over the entire time domain."
    )
  ])

  compile_xelatex_to_png(
    fig34_tex,
    os.path.join(paths_ctx["meso_dir"], "fig34_top_120_rank_ordinal_table.png"),
    paths_ctx,
    paper_width_in=12.8,
    paper_height_in=16.0
  )

  # Figure 35: Regional counts in Global Top 120
  f35_lines = [
    "\\renewcommand{\\arraystretch}{1.28}",
    "\\setlength{\\tabcolsep}{6pt}",
    "\\begin{tabular*}{\\textwidth}{@{\\extracolsep{\\fill}}>{\\raggedright\\arraybackslash}p{1.72in}llll@{}}",
    "{\\karlabold Region} & {\\karlabold\\begin{tabular}[t]{@{}l@{}}Area, City\\\\[-2pt]Count\\end{tabular}} & {\\karlabold\\begin{tabular}[t]{@{}l@{}}Centre Density City\\\\[-2pt]Count, $<$1975, Base\\end{tabular}} & {\\karlabold\\begin{tabular}[t]{@{}l@{}}Centre Density City\\\\[-2pt]Count, $>=$1975, GHSL\\end{tabular}} & {\\karlabold\\begin{tabular}[t]{@{}l@{}}Population, City\\\\[-2pt]Count\\end{tabular}} \\\\[6pt]"
  ]
  for rc_row in t120["regional_counts"]:
    f35_lines.append(
      f"{{\\karlaregular {tex_escape(rc_row['name'])}}} & {rc_row['area']} & {rc_row['density']} & {rc_row['density_ghsl']} & {rc_row['population']} \\\\"
    )
  f35_lines.append("\\end{tabular*}")
  f35_lines.append(build_crd_caption(
    "Figure 35",
    "Table of the number of cities in the top Global 120 per variable listed above."
  ))

  compile_xelatex_to_png(
    "\n".join(f35_lines),
    os.path.join(paths_ctx["meso_dir"], "fig35_top_120_regional_counts_table.png"),
    paths_ctx,
    paper_width_in=7.6
  )


def render_fig38_metro_vs_non_metro_table(paths_ctx):
  """
  Renders 3.micro_validation/fig38_global_30_metro_vs_non_metro_table.png using the exact
  iconic 5-cities-across x 6-blocks shaded/unshaded layout of Stadestér 1.0 Figure 38 (pages 54-56).
  """
  with open(os.path.join(paths_ctx["results_dir"], "micro_global_30_metro_vs_non_metro.json"), "r", encoding="utf-8") as h:
    metro_data = json.load(h)

  cities = metro_data["cities"]
  t_years = metro_data["table_years"]

  lines = [
    "\\begin{center}",
    "{\\fontsize{10pt}{14pt}\\selectfont [{\\textcolor{metrogray}{\\rule{0.62em}{0.62em}}}] Metro-adjusted / [\\phantom{\\rule{0.62em}{0.62em}}] Non-metro adjusted. Figures are given in thousands.\\par}",
    "\\end{center}",
    "\\vspace{4pt}",
    "\\fontsize{8.8pt}{12.2pt}\\selectfont",
    "\\renewcommand{\\arraystretch}{1.12}",
    "\\setlength{\\tabcolsep}{4.2pt}",
    "\\begin{tabular*}{\\textwidth}{@{\\extracolsep{\\fill}}l*{5}{>{\\columncolor{metrogray}}rr}@{}}"
  ]

  for blk_idx in range(6):
    grp = cities[blk_idx * 5:(blk_idx + 1) * 5]
    yr_hdr = "{\\karlabold Year}" if blk_idx == 0 else ""
    hdr_cells = [yr_hdr] + [f"\\multicolumn{{2}}{{c}}{{\\karlabold {tex_escape(c['name'])}}}" for c in grp]
    if blk_idx > 0:
      lines.append("\\addlinespace[4pt]")
    lines.append(" & ".join(hdr_cells) + " \\\\[2pt]")

    for yr in t_years:
      ys = str(yr)
      disp_yr = "1" if yr == 0 else str(yr)
      row_cells = [f"{{\\karlaregular {disp_yr}}}"]
      for c in grp:
        mv = c["ma_population"].get(ys)
        nv = c["nma_population"].get(ys)
        m_str = fmt_eu(round(mv / 1000.0), 0) if (mv is not None and mv > 0) else "0"
        n_str = fmt_eu(round(nv / 1000.0), 0) if (nv is not None and nv > 0) else "0"
        row_cells.extend([tex_escape(m_str), tex_escape(n_str)])
      lines.append(" & ".join(row_cells) + " \\\\")

  lines.append("\\end{tabular*}")
  lines.append(build_crd_caption(
    "Figure 38",
    "Population tables for the Global 30 (metro vs. no metro adjustment) as compared to Angel and Wikipedia for selected benchmark years (1AD-2025AD), Thousands."
  ))

  compile_xelatex_to_png(
    "\n".join(lines),
    os.path.join(paths_ctx["micro_dir"], "fig38_global_30_metro_vs_non_metro_table.png"),
    paths_ctx,
    paper_width_in=7.6,
    paper_height_in=26.0
  )


def render_fig39_and_gt_city_tables(paths_ctx):
  """
  Renders Figure 39 (fig39_global_30_ground_truth_summary_table.png) matching pages 77-78
  and the 30 individual city Ground Truth sub-tables (global_30_city_ground_truth_tables_part1.png
  and _part2.png) matching pages 57-77 of Stadestér 1.0.
  """
  with open(os.path.join(paths_ctx["results_dir"], "micro_global_30_ground_truth.json"), "r", encoding="utf-8") as h:
    gt_data = json.load(h)

  # 1. Figure 39 Summary Table
  f39_lines = [
    "\\renewcommand{\\arraystretch}{1.22}",
    "\\setlength{\\tabcolsep}{6pt}",
    "\\begin{tabular*}{\\textwidth}{@{\\extracolsep{\\fill}}llllll@{}}",
    "{\\karlabold City} & {\\karlabold Lower M} & {\\karlabold Upper M} & {\\karlabold Lower SD} & {\\karlabold Upper SD} & {\\karlabold Jaccard Index} \\\\[5pt]"
  ]
  for c in gt_data["cities"]:
    f39_lines.append(
      f"{{\\karlaregular {tex_escape(c['name'])}}} & "
      f"{tex_escape(fmt_eu(c['lower_m_pct'], 1))}\\% & "
      f"{tex_escape(fmt_eu(c['upper_m_pct'], 1))}\\% & "
      f"{tex_escape(fmt_eu(c['lower_sd_pct'], 1))}\\% & "
      f"{tex_escape(fmt_eu(c['upper_sd_pct'], 1))}\\% & "
      f"{tex_escape(fmt_eu(c['jaccard_index'], 3))} \\\\"
    )

  tr = gt_data["totals_row"]
  f39_lines.append(
    f"{{\\karlabold Total (Avg.)}} & "
    f"{tex_escape(fmt_eu(tr['lower_m_pct'], 2))}\\% & "
    f"{tex_escape(fmt_eu(tr['upper_m_pct'], 2))}\\% & "
    f"{tex_escape(fmt_eu(tr['lower_sd_pct'], 2))}\\% & "
    f"{tex_escape(fmt_eu(tr['upper_sd_pct'], 2))}\\% & "
    f"{tex_escape(fmt_eu(tr['jaccard_index'], 3))} \\\\"
  )

  sm = gt_data.get("site_matched_no_predecessor_merge")
  note_39 = None
  if sm:
    note_39 = (
      f"Excluding the 2 ancient predecessor-settlement merges in Stadestér 1.1 (Hooghly to Kolkata and Sopara to Mumbai, n={sm['city_count']}), "
      f"site-matched Global 30 averages are Lower M = {fmt_eu(sm['lower_m_pct'], 2)}% (SD = {fmt_eu(sm['lower_sd_pct'], 2)}%) "
      f"and Upper M = {fmt_eu(sm['upper_m_pct'], 2)}% (SD = {fmt_eu(sm['upper_sd_pct'], 2)}%)."
    )

  f39_lines.append("\\end{tabular*}")
  f39_lines.append(build_crd_caption(
    "Figure 39",
    "Mean deviations and Jaccard indices for each of the Global 30 for population and spatial expansion.",
    note_39
  ))

  compile_xelatex_to_png(
    "\n".join(f39_lines),
    os.path.join(paths_ctx["micro_dir"], "fig39_global_30_ground_truth_summary_table.png"),
    paths_ctx,
    paper_width_in=7.2,
    paper_height_in=16.0
  )

  # 2. Individual Global 30 Ground Truth Tables (Tables 12-41) in exact 1.0 STAD/GT horizontal layout
  b_years = gt_data["benchmark_years"]
  yr_hdr_cells = [""] + [f"{{\\karlabold {yr}}}" for yr in b_years]

  def render_city_gt_sheet(city_slice, part_num, out_name):
    blocks = []
    for c in city_slice:
      stad_cells = ["{\\karlaregular STAD}"]
      gt_cells = ["{\\karlaregular GT}"]
      for cell in c["years_table"]:
        sv = cell["stad_thousands_rounded"]
        stad_cells.append(tex_escape(fmt_eu(sv, 0)) if (sv is not None and sv > 0) else "")
        gv = cell["gt_display"] if cell["gt_display"] else ""
        if gv and cell.get("exclude_pre_relocation"):
          gv += "*"
        gt_cells.append(tex_escape(gv))

      sub = [
        "\\noindent\\begin{minipage}{\\textwidth}",
        f"{{\\karlabold Table {c['table_number']}. {tex_escape(c['name'])}}}\\\\[3pt]",
        "{\\fontsize{8.2pt}{11.5pt}\\selectfont",
        "\\setlength{\\tabcolsep}{3.0pt}",
        "\\renewcommand{\\arraystretch}{1.12}",
        "\\begin{tabular*}{\\textwidth}{@{\\extracolsep{\\fill}}l*{13}{l}@{}}",
        " & ".join(yr_hdr_cells) + " \\\\[2pt]",
        " & ".join(stad_cells) + " \\\\",
        " & ".join(gt_cells) + " \\\\",
        "\\end{tabular*}}",
        "\\vspace{3pt}",
        f"\\begin{{center}}{{\\fontsize{{8.4pt}}{{11.5pt}}\\selectfont STAD = Stadestér, GT = Ground Truth ({tex_escape(c['sources'])}); Thousands. "
        f"(M = {tex_escape(fmt_eu(c['lower_m_pct'], 1))}\\% to {tex_escape(fmt_eu(c['upper_m_pct'], 1))}\\%)\\par}}\\end{{center}}",
        "\\end{minipage}\\vspace{8pt}"
      ]
      blocks.append("\n".join(sub))

    # Arrange 15 city sub-tables cleanly into 8 left + 7 right two-column academic sheet
    mid = (len(blocks) + 1) // 2
    sheet_tex = "\n".join([
      "\\noindent\\begin{minipage}[t]{0.486\\textwidth}",
      "\n".join(blocks[:mid]),
      "\\end{minipage}\\hfill",
      "\\begin{minipage}[t]{0.486\\textwidth}",
      "\n".join(blocks[mid:]),
      "\\end{minipage}",
      build_crd_caption(
        f"Tables {city_slice[0]['table_number']}--{city_slice[-1]['table_number']}",
        f"Individual Global 30 scholarly Ground Truth population comparisons (Part {part_num} of 2, Non-Metro <1975 + GHSL >=1975, Thousands)."
      )
    ])

    compile_xelatex_to_png(
      sheet_tex,
      os.path.join(paths_ctx["micro_dir"], out_name),
      paths_ctx,
      paper_width_in=14.2,
      paper_height_in=19.0
    )

  render_city_gt_sheet(gt_data["cities"][:15], 1, "global_30_city_ground_truth_tables_part1.png")
  render_city_gt_sheet(gt_data["cities"][15:], 2, "global_30_city_ground_truth_tables_part2.png")


def render_regional_populations_and_moe_tables(paths_ctx):
  """
  Renders table_regional_populations_benchmark_years.png (matching Stadestér 1.0 Figures 22-24)
  and table_margins_of_error_summary.png.
  """
  with open(os.path.join(paths_ctx["results_dir"], "micro_regional_urbanisation.json"), "r", encoding="utf-8") as h:
    urb = json.load(h)
  with open(os.path.join(paths_ctx["results_dir"], "margins_of_error_summary.json"), "r", encoding="utf-8") as h:
    moe = json.load(h)

  b_yrs = urb["benchmark_years"]
  hdr_yrs = ["1" if y == 0 else str(y) for y in b_yrs]

  def build_reg_subtable(rows_list, sub_label, cap_desc):
    lines = [
      "{\\fontsize{8.5pt}{12pt}\\selectfont",
      "\\renewcommand{\\arraystretch}{1.18}",
      "\\setlength{\\tabcolsep}{3.2pt}",
      f"\\begin{{tabular*}}{{\\textwidth}}{{@{{\\extracolsep{{\\fill}}}}>{{ \\raggedright\\arraybackslash }}p{{1.48in}}*{{{len(b_yrs)}}}{{l}}@{{}}}}",
      "{\\karlabold Region} & " + " & ".join(f"{{\\karlabold {hy}}}" for hy in hdr_yrs) + " \\\\[4pt]"
    ]
    for item in rows_list:
      is_world = item["name"].lower().startswith("world")
      stub = f"{{\\karlabold {tex_escape(item['name'])}}}" if is_world else f"{{\\karlaregular {tex_escape(item['name'])}}}"
      vals = [tex_escape(fmt_eu(item["values"].get(str(y), 0.0), 2)) for y in b_yrs]
      lines.append(stub + " & " + " & ".join(vals) + " \\\\")
    lines.append("\\end{tabular*}}")
    lines.append(build_crd_caption(sub_label, cap_desc))
    return "\n".join(lines)

  reg_all_tex = "\n\n\\vspace{14pt}\n\n".join([
    build_reg_subtable(
      urb["tables_millions"]["total"],
      "Table A1 (cf. Figure 22)",
      "Table of regional and global total populations for selected benchmark years, Millions."
    ),
    build_reg_subtable(
      urb["tables_millions"]["urban"],
      "Table A2 (cf. Figure 23)",
      "Table of regional and global urban populations for selected benchmark years, Millions."
    ),
    build_reg_subtable(
      urb["tables_millions"]["rural"],
      "Table A3 (cf. Figure 24)",
      "Table of regional and global rural and peri-urban populations for selected benchmark years, Millions."
    )
  ])

  compile_xelatex_to_png(
    reg_all_tex,
    os.path.join(paths_ctx["micro_dir"], "table_regional_populations_benchmark_years.png"),
    paths_ctx,
    paper_width_in=11.1,
    paper_height_in=22.0
  )

  # Consolidated Margins of Error Table
  v_lbl = moe["version_label"]
  b_lbl = moe["baseline_version_label"]
  moe_rows = [
    (
      "Macro: Base vs. Reba et al. CoG (3000BC-2000AD)",
      f"{fmt_eu(moe['macro']['base_vs_reba_min_km'], 1)} to {fmt_eu(moe['macro']['base_vs_reba_max_km'], 1)} km",
      "~220 to 1.170 km (1,1-2,8%)"
    ),
    (
      "Macro: Base vs. Mulligan & Crampton CoG (1950-2010AD)",
      f"M = {fmt_eu(moe['macro']['base_vs_mulligan_crampton_mean_km'], 1)} km (Max {fmt_eu(moe['macro']['base_vs_mulligan_crampton_max_km'], 1)} km)",
      "410-450 km (Max ~935 km)"
    ),
    (
      "Macro: GHSL vs. Mulligan & Crampton CoG (1975-2010AD)",
      f"M = {fmt_eu(moe['macro']['ghsl_vs_mulligan_crampton_mean_km'], 2)} km",
      "~2.323,52 km (11,60%)"
    ),
    (
      "Macro: Urban Sum Deviation vs. HYDE/UN (3000BC-2025AD)",
      f"M = {fmt_eu(moe['macro']['hyde_un_mean_pct_error'], 2)}%; SD = {fmt_eu(moe['macro']['hyde_un_sd_pct_error'], 2)}%",
      "M = -17,4%; SD = 13,0%"
    ),
    (
      "Meso: 12-Region CoG Deviation Base vs. GHSL (1975-2000AD)",
      f"M = {fmt_eu(moe['meso']['regional_cog_world_mean_km'], 2)} km ({fmt_eu(moe['meso']['regional_cog_world_mean_pct'], 2)}%); SD = {fmt_eu(moe['meso']['regional_cog_world_sd_km'], 2)} km",
      f"M = 214,23 km (3,80%); SD = 175,86 km"
    ),
    (
      "Meso: Global 30 Spatial Jaccard vs. Angel (1800-2000AD)",
      f"Pooled J = {fmt_eu(moe['meso']['angel_pooled_jaccard'], 3)} Base / {fmt_eu(moe['meso']['angel_spliced_pooled_jaccard'], 3)} Spliced",
      "Pooled J = 0,532 (Unweighted M = 0,496)"
    ),
    (
      "Micro: Global 30 Ground Truth (Non-Metro, All 30 Cities)",
      f"Lower M = {fmt_eu(moe['micro']['global_30_lower_m_pct'], 2)}% (SD {fmt_eu(moe['micro']['global_30_lower_sd_pct'], 2)}%); Upper M = {fmt_eu(moe['micro']['global_30_upper_m_pct'], 2)}%",
      "Lower M = 2,66% (SD 37,47%); Upper M = 3,91%"
    ),
    (
      f"Micro: Global 30 Site-Matched (Excl. 2 Predecessor Merges, n={moe['micro']['global_30_site_matched_city_count']})",
      f"Lower M = {fmt_eu(moe['micro']['global_30_site_matched_lower_m_pct'], 2)}% (SD {fmt_eu(moe['micro']['global_30_site_matched_lower_sd_pct'], 2)}%); Upper M = {fmt_eu(moe['micro']['global_30_site_matched_upper_m_pct'], 2)}%",
      "Site-matched benchmark without ancient predecessor merges"
    )
  ]

  moe_lines = [
    "\\renewcommand{\\arraystretch}{1.34}",
    "\\setlength{\\tabcolsep}{6pt}",
    "\\begin{tabular*}{\\textwidth}{@{\\extracolsep{\\fill}}>{\\raggedright\\arraybackslash}p{3.10in}>{\\raggedright\\arraybackslash}p{2.80in}>{\\raggedright\\arraybackslash}p{2.45in}@{}}",
    f"{{\\karlabold Validation Scale \\& Benchmark Metric}} & {{\\karlabold {tex_escape(v_lbl)}}} & {{\\karlabold {tex_escape(b_lbl)} Reference}} \\\\[6pt]"
  ]
  for r0, r1, r2 in moe_rows:
    moe_lines.append(f"{{\\karlaregular {tex_escape(r0)}}} & {tex_escape(r1)} & {tex_escape(r2)} \\\\")
  moe_lines.append("\\end{tabular*}")
  moe_lines.append(build_crd_caption(
    "Table 2",
    f"Consolidated macro-, meso-, and micro-validation margins of error comparing {v_lbl} against {b_lbl}."
  ))

  compile_xelatex_to_png(
    "\n".join(moe_lines),
    os.path.join(paths_ctx["micro_dir"], "table_margins_of_error_summary.png"),
    paths_ctx,
    paper_width_in=9.6
  )


def main():
  paths_ctx = get_project_paths()
  print("[3.visualisations/D] Rendering XeLaTeX CRD publication table PNGs...")
  render_macro_cog_table(paths_ctx)
  render_fig30_regional_cog_table(paths_ctx)
  render_fig34_and_fig35_top120_tables(paths_ctx)
  render_fig38_metro_vs_non_metro_table(paths_ctx)
  render_fig39_and_gt_city_tables(paths_ctx)
  render_regional_populations_and_moe_tables(paths_ctx)


if __name__ == "__main__":
  main()
