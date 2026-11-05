"""
Shared rendering, formatting, Plotly/HTML-to-PNG, and XeLaTeX-to-PNG helpers
for the standardised Stadestér benchmark visualisation suite.
"""

import json
import math
import os
import re
import shutil
import subprocess
import sys
import tempfile

import plotly
import pymupdf as fitz
from PIL import Image

sys.stdout.reconfigure(encoding="utf-8")


def load_json5_file(file_path):
  """
  Loads a JSON or JSON5 configuration file, stripping // and /* */ comments
  and quoting unquoted object keys.

  @param file_path Absolute or relative path to JSON/JSON5 file.
  @return Parsed Python dictionary or list.
  """
  with open(file_path, "r", encoding="utf-8") as handle:
    raw_text = handle.read()

  out_chars = []
  in_str = False
  quote_ch = ""
  idx = 0
  length = len(raw_text)

  while idx < length:
    ch = raw_text[idx]
    nxt = raw_text[idx + 1] if idx + 1 < length else ""
    if in_str:
      out_chars.append(ch)
      if ch == "\\" and idx + 1 < length:
        out_chars.append(nxt)
        idx += 2
        continue
      if ch == quote_ch:
        in_str = False
      idx += 1
      continue

    if ch in ('"', "'"):
      in_str = True
      quote_ch = ch
      out_chars.append(ch)
      idx += 1
      continue

    if ch == "/" and nxt == "/":
      while idx < length and raw_text[idx] != "\n":
        idx += 1
      continue

    if ch == "/" and nxt == "*":
      idx += 2
      while idx + 1 < length and not (raw_text[idx] == "*" and raw_text[idx + 1] == "/"):
        idx += 1
      idx += 2
      continue

    out_chars.append(ch)
    idx += 1

  cleaned = "".join(out_chars)
  cleaned = re.sub(r'([{\s,])([A-Za-z_][A-Za-z0-9_]*)\s*:', r'\1"\2":', cleaned)
  cleaned = re.sub(r',\s*([}\]])', r'\1', cleaned)
  return json.loads(cleaned)


def get_project_paths(vis_dir=None):
  """
  Resolves standard benchmark directories and loads benchmarks_config.json5.

  @param vis_dir Optional path to 3.visualisations directory.
  @return Dictionary of resolved paths and loaded config.
  """
  if vis_dir is None:
    vis_dir = os.path.dirname(os.path.abspath(__file__))
  bench_dir = os.path.abspath(os.path.join(vis_dir, ".."))
  project_root = os.path.abspath(os.path.join(bench_dir, "..", "..", ".."))

  config_path = os.path.join(project_root, "common", "stadester", "benchmarks_config.json5")
  for idx, arg in enumerate(sys.argv):
    if arg == "--config" and idx + 1 < len(sys.argv):
      cand = sys.argv[idx + 1]
      config_path = cand if os.path.isabs(cand) else os.path.abspath(os.path.join(project_root, cand))

  config = load_json5_file(config_path)
  return {
    "vis_dir": vis_dir,
    "bench_dir": bench_dir,
    "compiled_dir": os.path.join(bench_dir, "1.compiler", "compiled"),
    "results_dir": os.path.join(bench_dir, "2.results"),
    "macro_dir": os.path.join(vis_dir, "1.macro_validation"),
    "meso_dir": os.path.join(vis_dir, "2.meso_validation"),
    "micro_dir": os.path.join(vis_dir, "3.micro_validation"),
    "project_root": project_root,
    "config": config
  }


def resolve_project_path(project_root, rel_or_abs):
  """
  Resolves a path relative to the workspace root if not already absolute.

  @param project_root Workspace root directory.
  @param rel_or_abs Relative or absolute file path.
  @return Absolute path string.
  """
  if os.path.isabs(rel_or_abs):
    return rel_or_abs
  return os.path.abspath(os.path.join(project_root, rel_or_abs))


def fmt_eu(val, digits=2):
  """
  Formats a numeric value using European comma decimals (',') and period thousands ('.').

  @param val Numeric value.
  @param digits Decimal places.
  @return Formatted string.
  """
  if val is None or (isinstance(val, float) and (math.isnan(val) or math.isinf(val))):
    return "N/A"
  num = float(val)
  neg = num < 0
  abs_str = f"{abs(num):.{digits}f}"
  parts = abs_str.split(".")
  int_part = parts[0]
  grouped = []
  while len(int_part) > 3:
    grouped.append(int_part[-3:])
    int_part = int_part[:-3]
  grouped.append(int_part)
  int_fmt = ".".join(reversed(grouped))
  sign = "-" if (neg and float(abs_str) > 0) else ""
  if digits > 0 and len(parts) > 1:
    return f"{sign}{int_fmt},{parts[1]}"
  return f"{sign}{int_fmt}"


def fmt_semantic(val, digits=1):
  """
  Formats large numbers with semantic suffixes (k, M, B, T) and European decimals.

  @param val Numeric value.
  @param digits Decimal places.
  @return Formatted semantic string.
  """
  if val is None or (isinstance(val, float) and (math.isnan(val) or math.isinf(val))):
    return "N/A"
  num = float(val)
  abs_v = abs(num)
  if abs_v >= 1e12:
    return f"{fmt_eu(num / 1e12, digits)}T"
  if abs_v >= 1e9:
    return f"{fmt_eu(num / 1e9, digits)}B"
  if abs_v >= 1e6:
    return f"{fmt_eu(num / 1e6, digits)}M"
  if abs_v >= 1e3:
    return f"{fmt_eu(num / 1e3, digits)}k"
  return fmt_eu(num, 0 if digits == 0 else digits)


def build_font_face_css(fonts_dir):
  """
  Builds CSS @font-face declarations pointing to Intellte CRD fonts on disk.

  @param fonts_dir Directory containing Jost, Karla, and Source Serif 4 fonts.
  @return CSS string.
  """
  f_url = fonts_dir.replace("\\", "/")
  return f"""
  @font-face {{
    font-family: 'Jost';
    src: url('file:///{f_url}/Jost-400-Book.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
  }}
  @font-face {{
    font-family: 'Jost';
    src: url('file:///{f_url}/Jost-500-Medium.otf') format('opentype');
    font-weight: 500;
    font-style: normal;
  }}
  @font-face {{
    font-family: 'Jost';
    src: url('file:///{f_url}/Jost-600-Semi.otf') format('opentype');
    font-weight: 600;
    font-style: normal;
  }}
  @font-face {{
    font-family: 'Jost';
    src: url('file:///{f_url}/Jost-700-Bold.otf') format('opentype');
    font-weight: 700;
    font-style: normal;
  }}
  @font-face {{
    font-family: 'Karla';
    src: url('file:///{f_url}/Karla-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }}
  @font-face {{
    font-family: 'Karla';
    src: url('file:///{f_url}/Karla-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }}
  @font-face {{
    font-family: 'Source Serif 4';
    src: url('file:///{f_url}/SourceSerif4-Regular.otf') format('opentype');
    font-weight: 400;
    font-style: normal;
  }}
  """


def find_headless_browser(config):
  """
  Finds an installed Chromium-based browser (Edge or Chrome) for headless rendering.

  @param config Benchmarks configuration dictionary.
  @return Executable path string.
  """
  candidates = list(config.get("paths", {}).get("headless_browser_bins", [])) + [
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Google\Chrome\Application\chrome.exe"
  ]
  for cand in candidates:
    if cand and os.path.exists(cand):
      return cand
  raise RuntimeError("No headless Chromium browser (Edge/Chrome) found on machine.")


def render_html_to_png(html_content, out_png_path, width_px, height_px, config, scale=2, wait_ms=3500, bg="#ffffff"):
  """
  Renders self-contained HTML/SVG/Canvas/Plotly content to an exact-dimension high-DPI PNG
  via headless Edge/Chrome, cropping to exact (width_px * scale, height_px * scale).

  @param html_content Complete HTML document string.
  @param out_png_path Output PNG path.
  @param width_px CSS viewport width in pixels.
  @param height_px CSS viewport height in pixels.
  @param config Benchmarks configuration dictionary.
  @param scale Device pixel ratio scale factor (default 2).
  @param wait_ms Virtual time budget in milliseconds.
  @param bg Fallback background hex colour.
  """
  os.makedirs(os.path.dirname(out_png_path), exist_ok=True)
  browser_bin = find_headless_browser(config)
  tmp_dir = tempfile.mkdtemp(prefix="stadester_vis_")

  try:
    html_path = os.path.join(tmp_dir, "render.html")
    raw_png_path = os.path.join(tmp_dir, "raw.png")
    with open(html_path, "w", encoding="utf-8") as handle:
      handle.write(html_content)

    win_w = int(width_px) + 40
    win_h = int(height_px) + 140
    file_url = "file:///" + os.path.abspath(html_path).replace("\\", "/")

    cmd = [
      browser_bin,
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--allow-file-access-from-files",
      "--no-first-run",
      "--no-default-browser-check",
      f"--force-device-scale-factor={scale}",
      f"--window-size={win_w},{win_h}",
      f"--virtual-time-budget={wait_ms}",
      f"--screenshot={raw_png_path}",
      file_url
    ]
    subprocess.run(cmd, capture_output=True, text=True, check=True)

    target_w = int(round(width_px * scale))
    target_h = int(round(height_px * scale))
    with Image.open(raw_png_path) as im:
      cropped = im.crop((0, 0, min(im.width, target_w), min(im.height, target_h)))
      if cropped.width < target_w or cropped.height < target_h:
        padded = Image.new("RGBA", (target_w, target_h), bg)
        padded.paste(cropped, (0, 0))
        cropped = padded
      cropped.convert("RGB").save(out_png_path, optimize=True)
    print(f"  -> Saved {out_png_path} ({target_w}x{target_h}px)")
  finally:
    shutil.rmtree(tmp_dir, ignore_errors=True)


def render_plotly_figure_to_png(fig, out_png_path, width_px, height_px, paths_ctx, scale=2, extra_html="", wait_ms=4500, bg="#ffffff"):
  """
  Renders a Plotly Figure offline using bundled plotly.min.js + local Natural Earth TopoJSON
  and Intellte CRD fonts.

  @param fig Plotly Figure object.
  @param out_png_path Output PNG path.
  @param width_px Logical figure width in CSS pixels.
  @param height_px Logical figure height in CSS pixels.
  @param paths_ctx Result of get_project_paths().
  @param scale Device pixel ratio (default 2).
  @param extra_html Optional overlay HTML placed inside #capture-root above #plotly-root.
  @param wait_ms Virtual time budget in ms.
  @param bg Background hex colour.
  """
  config = paths_ctx["config"]
  project_root = paths_ctx["project_root"]
  fonts_dir = resolve_project_path(project_root, config["paths"]["intellte_fonts_dir"])
  font_css = build_font_face_css(fonts_dir)

  plotly_pkg_dir = os.path.dirname(plotly.__file__)
  plotly_js_path = os.path.join(plotly_pkg_dir, "package_data", "plotly.min.js").replace("\\", "/")

  topo_50_path = resolve_project_path(project_root, config["paths"]["world_50m_topojson"])
  topo_110_path = resolve_project_path(project_root, config["paths"]["world_110m_topojson"])
  topo_dir_url = "file:///" + os.path.dirname(topo_50_path).replace("\\", "/") + "/"

  with open(topo_50_path, "r", encoding="utf-8") as h50:
    topo_50_raw = h50.read()
  with open(topo_110_path, "r", encoding="utf-8") as h110:
    topo_110_raw = h110.read()

  fig_json = fig.to_json()

  html_doc = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<style>
{font_css}
html, body {{
  margin: 0;
  padding: 0;
  width: {width_px}px;
  height: {height_px}px;
  overflow: hidden;
  background: {bg};
  -webkit-font-smoothing: antialiased;
}}
#capture-root {{
  position: fixed;
  top: 0;
  left: 0;
  width: {width_px}px;
  height: {height_px}px;
  overflow: hidden;
  background: {bg};
}}
#plotly-root {{
  position: absolute;
  top: 0;
  left: 0;
  width: {width_px}px;
  height: {height_px}px;
}}
</style>
<script>
// Pre-populate PlotlyGeoAssets in memory so Scattergeo renders 100% offline & synchronously
window.PlotlyGeoAssets = {{
  topojson: {{
    "world_50m": {topo_50_raw},
    "world_110m": {topo_110_raw}
  }}
}};
</script>
<script src="file:///{plotly_js_path}"></script>
</head>
<body>
<div id="capture-root">
  <div id="plotly-root"></div>
  {extra_html}
</div>
<script>
window.PlotlyGeoAssets = window.PlotlyGeoAssets || {{ topojson: {{}} }};
const spec = {fig_json};
spec.layout = spec.layout || {{}};
spec.layout.width = {width_px};
spec.layout.height = {height_px};
Plotly.newPlot("plotly-root", spec.data, spec.layout, {{
  staticPlot: true,
  displayModeBar: false,
  topojsonURL: "{topo_dir_url}"
}});
</script>
</body>
</html>"""

  render_html_to_png(
    html_content=html_doc,
    out_png_path=out_png_path,
    width_px=width_px,
    height_px=height_px,
    config=config,
    scale=scale,
    wait_ms=wait_ms,
    bg=bg
  )


def compile_xelatex_to_png(tex_body, out_png_path, paths_ctx, paper_width_in=7.5, paper_height_in=22.0, dpi=300, pad_px=38):
  """
  Compiles a standalone XeLaTeX document styled with Intellte CRD working-paper fonts
  (Karla Bold headers, Source Serif 4 body, Jost headings) and renders a tightly cropped
  300 DPI PNG via PyMuPDF.

  @param tex_body LaTeX document body between \\begin{document} and \\end{document}.
  @param out_png_path Output PNG path.
  @param paths_ctx Result of get_project_paths().
  @param paper_width_in Page width in inches.
  @param paper_height_in Tall page height in inches prior to tight ink cropping.
  @param dpi Render resolution in dots per inch (default 300).
  @param pad_px Uniform white margin in pixels around cropped ink bounds.
  """
  os.makedirs(os.path.dirname(out_png_path), exist_ok=True)
  config = paths_ctx["config"]
  project_root = paths_ctx["project_root"]
  fonts_dir = resolve_project_path(project_root, config["paths"]["intellte_fonts_dir"]).replace("\\", "/") + "/"
  xelatex_bin = config["paths"].get("xelatex_bin", "xelatex")
  if not os.path.exists(xelatex_bin):
    xelatex_bin = "xelatex"

  full_tex = f"""\\documentclass[10pt]{{extarticle}}
\\usepackage[paperwidth={paper_width_in}in,paperheight={paper_height_in}in,left=0.35in,right=0.35in,top=0.3in,bottom=0.3in]{{geometry}}
\\pagestyle{{empty}}
\\usepackage{{fontspec}}
\\usepackage{{xcolor}}
\\usepackage{{colortbl}}
\\usepackage{{booktabs}}
\\usepackage{{array}}
\\usepackage{{tabularx}}
\\usepackage{{amssymb}}
\\usepackage{{amsmath}}
\\defaultfontfeatures{{Ligatures=TeX}}
\\setmainfont{{SourceSerif4}}[
  Path={fonts_dir},
  Extension=.otf,
  UprightFont=*-Regular,
  ItalicFont=*-It,
  BoldFont=*-Bold,
  BoldItalicFont=*-BoldIt
]
\\setsansfont{{Jost}}[
  Path={fonts_dir},
  Extension=.otf,
  UprightFont=*-400-Book,
  ItalicFont=*-400-BookItalic,
  BoldFont=*-700-Bold,
  BoldItalicFont=*-700-BoldItalic
]
\\newfontfamily\\karlafont{{Karla}}[
  Path={fonts_dir},
  Extension=.ttf,
  UprightFont=*-Regular,
  ItalicFont=*-Italic,
  BoldFont=*-Bold,
  BoldItalicFont=*-BoldItalic
]
\\newcommand{{\\karlaregular}}{{\\karlafont\\mdseries}}
\\newcommand{{\\karlabold}}{{\\karlafont\\bfseries}}
\\definecolor{{metrogray}}{{HTML}}{{EAEAEA}}
\\definecolor{{metroswatch}}{{HTML}}{{C2C2C2}}
\\definecolor{{crdmeta}}{{RGB}}{{45,45,45}}
\\setlength{{\\parindent}}{{0pt}}
\\renewcommand{{\\normalsize}}{{\\fontsize{{10pt}}{{14.5pt}}\\selectfont}}
\\begin{{document}}
\\normalsize\\normalfont\\rmfamily\\mdseries
{tex_body}
\\end{{document}}
"""

  tmp_dir = tempfile.mkdtemp(prefix="stadester_tex_")
  try:
    tex_path = os.path.join(tmp_dir, "table.tex")
    pdf_path = os.path.join(tmp_dir, "table.pdf")
    with open(tex_path, "w", encoding="utf-8") as handle:
      handle.write(full_tex)

    proc = subprocess.run(
      [xelatex_bin, "-interaction=nonstopmode", "-halt-on-error", "table.tex"],
      cwd=tmp_dir,
      capture_output=True,
      text=True,
      encoding="utf-8",
      errors="replace"
    )
    if proc.returncode != 0 or not os.path.exists(pdf_path):
      raise RuntimeError(f"XeLaTeX failed for {out_png_path}:\n{proc.stdout[-1500:]}\n{proc.stderr[-500:]}")

    doc = fitz.open(pdf_path)
    page_imgs = []
    for pg in doc:
      pix = pg.get_pixmap(dpi=dpi, alpha=False)
      im = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
      gray = im.convert("L")
      inv = gray.point(lambda p: 255 if p < 252 else 0)
      bbox = inv.getbbox()
      if bbox:
        x0 = max(0, bbox[0] - pad_px)
        y0 = max(0, bbox[1] - pad_px)
        x1 = min(im.width, bbox[2] + pad_px)
        y1 = min(im.height, bbox[3] + pad_px)
        page_imgs.append(im.crop((x0, y0, x1, y1)))
    doc.close()

    if not page_imgs:
      raise RuntimeError(f"Rendered PDF had no visible ink for {out_png_path}")

    if len(page_imgs) == 1:
      final_im = page_imgs[0]
    else:
      max_w = max(p.width for p in page_imgs)
      total_h = sum(p.height for p in page_imgs) + 20 * (len(page_imgs) - 1)
      final_im = Image.new("RGB", (max_w, total_h), (255, 255, 255))
      cur_y = 0
      for p in page_imgs:
        final_im.paste(p, ((max_w - p.width) // 2, cur_y))
        cur_y += p.height + 20

    final_im.save(out_png_path, optimize=True)
    print(f"  -> Saved {out_png_path} ({final_im.width}x{final_im.height}px)")
  finally:
    shutil.rmtree(tmp_dir, ignore_errors=True)
