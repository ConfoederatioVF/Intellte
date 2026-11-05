"""
Shared Global 30 dark cartographic dual-grid SVG renderer and Angel Atlas tile extractor
for Stadestér Meso-Validation Figures 31 and 32.
"""

import base64
import io
import math
import os

import numpy as np
from PIL import Image

from vis_helpers import build_font_face_css, fmt_eu, render_html_to_png, resolve_project_path

# Viridis 16-stop control points for smooth 1800-2000 colour interpolation
VIRIDIS_STOPS = [
  (0.000, (68, 1, 84)),
  (0.067, (72, 24, 106)),
  (0.133, (71, 45, 123)),
  (0.200, (66, 64, 134)),
  (0.267, (59, 82, 139)),
  (0.333, (51, 99, 141)),
  (0.400, (44, 114, 142)),
  (0.467, (38, 130, 142)),
  (0.533, (33, 145, 140)),
  (0.600, (31, 160, 136)),
  (0.667, (40, 174, 128)),
  (0.733, (63, 188, 115)),
  (0.800, (94, 201, 98)),
  (0.867, (132, 212, 75)),
  (0.933, (176, 221, 47)),
  (1.000, (253, 231, 37))
]


def viridis_hex(t_val):
  """
  Maps a normalised value in [0, 1] to a hex colour along the Viridis palette.
  """
  t = max(0.0, min(1.0, float(t_val)))
  for idx in range(len(VIRIDIS_STOPS) - 1):
    t0, c0 = VIRIDIS_STOPS[idx]
    t1, c1 = VIRIDIS_STOPS[idx + 1]
    if t <= t1:
      u = 0.0 if t1 == t0 else (t - t0) / (t1 - t0)
      r = int(round(c0[0] + u * (c1[0] - c0[0])))
      g = int(round(c0[1] + u * (c1[1] - c0[1])))
      b = int(round(c0[2] + u * (c1[2] - c0[2])))
      return f"#{r:02x}{g:02x}{b:02x}"
  return "#fde725"


def build_angel_tile_data_uris(paths_ctx):
  """
  Slices the 6x5 Angel Global 30 atlas PNG (329x329 per city) into semi-transparent
  RGBA PNG data URIs preserving Angel's authentic multi-epoch historical colours
  (purple/rose/peach/tan) while stripping neutral-grey callout box artefacts.
  """
  atlas_path = resolve_project_path(
    paths_ctx["project_root"],
    paths_ctx["config"]["paths"]["angel_global_30_atlas_png"]
  )
  uris = {}
  if not os.path.exists(atlas_path):
    return uris

  atlas_im = Image.open(atlas_path).convert("RGBA")
  arr = np.array(atlas_im)
  tile_sz = 329

  for idx, city_cfg in enumerate(paths_ctx["config"]["global_30"]):
    col = idx % 5
    row = idx // 5
    sub = arr[row * tile_sz:(row + 1) * tile_sz, col * tile_sz:(col + 1) * tile_sz].copy()
    rgb = sub[:, :, :3].astype(np.int16)
    chroma = np.max(rgb, axis=2) - np.min(rgb, axis=2)
    mask = (sub[:, :, 3] >= 140) & (chroma >= 10)

    out_rgba = np.zeros_like(sub)
    out_rgba[mask, :3] = sub[mask, :3]
    out_rgba[mask, 3] = 142

    pil_tile = Image.fromarray(out_rgba, mode="RGBA")
    buf = io.BytesIO()
    pil_tile.save(buf, format="PNG", optimize=True)
    b64 = base64.b64encode(buf.getvalue()).decode("ascii")
    uris[city_cfg["id"]] = f"data:image/png;base64,{b64}"
  return uris


def render_spatiotemporal_dual_grid(
  paths_ctx,
  cities_data,
  coastlines_10m,
  left_pixel_key,
  right_pixel_key,
  title_left,
  title_right,
  footer_lines,
  out_png_path,
  render_mode="proportional",
  show_mid_cbar_label=False,
  angel_uris=None
):
  """
  Renders a high-DPI dark cartographic dual 6x5 Global 30 spatiotemporal grid (Figures 31 & 32)
  matching the exact 4612x2576 / 4656x2676 pixel geometry and typography of Stadestér 1.0.
  """
  fonts_dir = resolve_project_path(
    paths_ctx["project_root"],
    paths_ctx["config"]["paths"]["intellte_fonts_dir"]
  )
  font_css = build_font_face_css(fonts_dir)

  g30_vis_cfg = paths_ctx["config"].get("visualisations", {}).get("global_30", {})
  circle_scale = float(g30_vis_cfg.get("circle_scale", 0.0086))
  max_circle_pop = float(g30_vis_cfg.get("max_circle_population", 1000000.0))
  max_circle_rad = float(g30_vis_cfg.get("max_circle_radius_px", 8.6))
  min_circle_rad = float(g30_vis_cfg.get("min_circle_radius_px", 1.25))

  tile_s = 165
  col_step = 214
  row_step = 210
  grid_top = 108
  left_grid_x0 = 42
  cbar_dx = 4 * col_step + tile_s + 16
  cbar_w = 13
  cbar_h = 5 * row_step + tile_s

  right_grid_x0 = 1204 if show_mid_cbar_label else 1172
  fig_w = right_grid_x0 + cbar_dx + cbar_w + 70
  fig_h = 1428 if footer_lines else 1378
  bg_hex = "#333333"

  svg_elems = []
  svg_elems.append(
    f'<text x="{left_grid_x0}" y="60" fill="#ffffff" font-family="Jost, sans-serif" font-size="36" font-weight="400">{title_left}</text>'
  )
  if title_right:
    svg_elems.append(
      f'<text x="{fig_w - 30}" y="60" text-anchor="end" fill="#ffffff" font-family="Jost, sans-serif" font-size="36" font-weight="400">{title_right}</text>'
    )

  # SVG linearGradient stops MUST be emitted in non-decreasing offset order (0% -> 100%)
  grad_stops = []
  for t_stop, rgb_t in reversed(VIRIDIS_STOPS):
    y_pct = (1.0 - t_stop) * 100.0
    grad_stops.append(
      f'<stop offset="{y_pct:.1f}%" stop-color="rgb({rgb_t[0]},{rgb_t[1]},{rgb_t[2]})"/>'
    )

  defs_elems = [
    f'<linearGradient id="viridis-vert" x1="0%" y1="0%" x2="0%" y2="100%">{"".join(grad_stops)}</linearGradient>'
  ]

  def draw_6x5_block(block_tag, grid_x0, pixel_key, use_angel, draw_cbar_title):
    for idx, city in enumerate(cities_data):
      c_col = idx % 5
      c_row = idx // 5
      tx = grid_x0 + c_col * col_step
      ty = grid_top + c_row * row_step
      clip_id = f"clip-{block_tag}-{city['id']}"
      defs_elems.append(
        f'<clipPath id="{clip_id}"><rect x="{tx}" y="{ty}" width="{tile_s}" height="{tile_s}"/></clipPath>'
      )

      bbox = city["bbox"]
      lon0, lon1 = bbox["lon_min"], bbox["lon_max"]
      lat0, lat1 = bbox["lat_min"], bbox["lat_max"]

      def to_xy(lon_v, lat_v):
        px = tx + ((lon_v - lon0) / (lon1 - lon0)) * tile_s
        py = ty + ((lat1 - lat_v) / (lat1 - lat0)) * tile_s
        return px, py

      svg_elems.append(
        f'<rect x="{tx}" y="{ty}" width="{tile_s}" height="{tile_s}" fill="{bg_hex}"/>'
      )
      svg_elems.append(
        f'<text x="{tx + tile_s / 2:.1f}" y="{ty - 7.5:.1f}" text-anchor="middle" fill="#ffffff" font-family="Karla, sans-serif" font-size="12.5" font-weight="400">{city["name"]}</text>'
      )

      lon_ticks = np.linspace(lon0, lon1, 5)
      lat_ticks = np.linspace(lat0, lat1, 5)
      for k_idx, lv in enumerate(lon_ticks):
        gx = tx + (k_idx / 4.0) * tile_s
        if 0 < k_idx < 4:
          svg_elems.append(
            f'<line x1="{gx:.2f}" y1="{ty}" x2="{gx:.2f}" y2="{ty + tile_s}" stroke="#777777" stroke-width="0.55" stroke-dasharray="2.4,2.4" stroke-opacity="0.65"/>'
          )
        svg_elems.append(
          f'<line x1="{gx:.2f}" y1="{ty + tile_s}" x2="{gx:.2f}" y2="{ty + tile_s + 3.2}" stroke="#e5e5e5" stroke-width="0.65"/>'
        )
        svg_elems.append(
          f'<text x="{gx:.2f}" y="{ty + tile_s + 13.5:.2f}" text-anchor="middle" fill="#e5e5e5" font-family="Karla, sans-serif" font-size="9.6">{fmt_eu(lv, 1)}</text>'
        )

      for k_idx, ltv in enumerate(lat_ticks):
        gy = ty + (1.0 - k_idx / 4.0) * tile_s
        if 0 < k_idx < 4:
          svg_elems.append(
            f'<line x1="{tx}" y1="{gy:.2f}" x2="{tx + tile_s}" y2="{gy:.2f}" stroke="#777777" stroke-width="0.55" stroke-dasharray="2.4,2.4" stroke-opacity="0.65"/>'
          )
        svg_elems.append(
          f'<line x1="{tx - 3.2}" y1="{gy:.2f}" x2="{tx}" y2="{gy:.2f}" stroke="#e5e5e5" stroke-width="0.65"/>'
        )
        svg_elems.append(
          f'<text x="{tx - 5.5:.2f}" y="{gy + 3.2:.2f}" text-anchor="end" fill="#e5e5e5" font-family="Karla, sans-serif" font-size="9.6">{fmt_eu(ltv, 1)}</text>'
        )

      inner = [f'<g clip-path="url(#{clip_id})">']
      px_list = sorted(city.get(pixel_key, []), key=lambda item: item.get("first_year", 2000))

      if render_mode == "dual_expansion":
        # Layer 1: Faint proportional 2000AD circles underneath spatial expansion grid (clamped to 1.0 max radius)
        for p_item in px_list:
          last_pop = p_item.get("last_population", 0)
          if last_pop <= 0:
            continue
          fy = p_item.get("first_year", 1800)
          col_hex = viridis_hex((fy - 1800.0) / 200.0)
          cx, cy = to_xy(p_item["lon"], p_item["lat"])
          clamped_pop = min(float(last_pop), max_circle_pop)
          rad = min(max_circle_rad, max(min_circle_rad, math.sqrt(clamped_pop) * circle_scale))
          inner.append(
            f'<circle cx="{cx:.2f}" cy="{cy:.2f}" r="{rad:.2f}" fill="{col_hex}" fill-opacity="0.26"/>'
          )
        # Layer 2: Uniform 5-arcminute spatial expansion grid dots coloured by first_year
        for p_item in px_list:
          fy = p_item.get("first_year", 1800)
          col_hex = viridis_hex((fy - 1800.0) / 200.0)
          cx, cy = to_xy(p_item["lon"], p_item["lat"])
          inner.append(
            f'<circle cx="{cx:.2f}" cy="{cy:.2f}" r="2.05" fill="{col_hex}" fill-opacity="0.88"/>'
          )
      else:
        # Figure 31: 1pt = 1ihb proportional circles coloured by first_year (clamped to 1.0 max radius)
        for p_item in px_list:
          pop_val = p_item.get("last_population", 0)
          if pop_val <= 0:
            pop_val = p_item.get("max_population", 1)
          fy = p_item.get("first_year", 1800)
          col_hex = viridis_hex((fy - 1800.0) / 200.0)
          cx, cy = to_xy(p_item["lon"], p_item["lat"])
          clamped_pop = min(max(1.0, float(pop_val)), max_circle_pop)
          rad = min(max_circle_rad, max(min_circle_rad, math.sqrt(clamped_pop) * circle_scale))
          inner.append(
            f'<circle cx="{cx:.2f}" cy="{cy:.2f}" r="{rad:.2f}" fill="{col_hex}" fill-opacity="0.74"/>'
          )

      if use_angel and angel_uris and city["id"] in angel_uris:
        inner.append(
          f'<image href="{angel_uris[city["id"]]}" x="{tx}" y="{ty}" width="{tile_s}" height="{tile_s}" preserveAspectRatio="none"/>'
        )

      segs = coastlines_10m.get(city["id"], [])
      for seg in segs:
        if len(seg) < 2:
          continue
        pts_str = []
        for idx_pt, (slon, slat) in enumerate(seg):
          sx, sy = to_xy(slon, slat)
          cmd = "M" if idx_pt == 0 else "L"
          pts_str.append(f"{cmd}{sx:.2f},{sy:.2f}")
        inner.append(
          f'<path d="{"".join(pts_str)}" fill="none" stroke="#f3f4f6" stroke-width="0.82" stroke-linejoin="round" stroke-linecap="round"/>'
        )

      inner.append("</g>")
      svg_elems.append("".join(inner))
      svg_elems.append(
        f'<rect x="{tx}" y="{ty}" width="{tile_s}" height="{tile_s}" fill="none" stroke="#e5e5e5" stroke-width="0.8"/>'
      )

    # Full-height Viridis colourbar on the right of the 6x5 block
    cb_x = grid_x0 + cbar_dx
    cb_y = grid_top
    svg_elems.append(
      f'<rect x="{cb_x}" y="{cb_y}" width="{cbar_w}" height="{cbar_h}" fill="url(#viridis-vert)" stroke="#e5e5e5" stroke-width="0.8"/>'
    )
    for yr_tick in range(1800, 2001, 25):
      frac = (yr_tick - 1800.0) / 200.0
      ty_pos = cb_y + (1.0 - frac) * cbar_h
      svg_elems.append(
        f'<line x1="{cb_x + cbar_w}" y1="{ty_pos:.2f}" x2="{cb_x + cbar_w + 3.5}" y2="{ty_pos:.2f}" stroke="#e5e5e5" stroke-width="0.7"/>'
      )
      svg_elems.append(
        f'<text x="{cb_x + cbar_w + 6.0:.2f}" y="{ty_pos + 3.5:.2f}" fill="#e5e5e5" font-family="Karla, sans-serif" font-size="10.5">{yr_tick}</text>'
      )
    if draw_cbar_title:
      lbl_cx = cb_x + cbar_w + 46.0
      lbl_cy = cb_y + cbar_h / 2.0
      svg_elems.append(
        f'<text x="{lbl_cx:.2f}" y="{lbl_cy:.2f}" text-anchor="middle" fill="#f3f4f6" font-family="Karla, sans-serif" font-size="12.5" transform="rotate(-90 {lbl_cx:.2f} {lbl_cy:.2f})">First Year of Population (&gt;0)</text>'
      )

  draw_6x5_block(
    "left",
    left_grid_x0,
    left_pixel_key,
    use_angel=(angel_uris is not None),
    draw_cbar_title=show_mid_cbar_label
  )
  draw_6x5_block(
    "right",
    right_grid_x0,
    right_pixel_key,
    use_angel=False,
    draw_cbar_title=True
  )

  if footer_lines:
    fy0 = grid_top + cbar_h + 36
    for idx_f, fline in enumerate(footer_lines):
      svg_elems.append(
        f'<text x="{left_grid_x0}" y="{fy0 + idx_f * 17}" fill="#f3f4f6" font-family="Karla, sans-serif" font-size="12.0">{fline}</text>'
      )

  html_doc = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<style>
{font_css}
html, body {{
  margin: 0;
  padding: 0;
  width: {fig_w}px;
  height: {fig_h}px;
  overflow: hidden;
  background: {bg_hex};
}}
</style>
</head>
<body>
<svg xmlns="http://www.w3.org/2000/svg" width="{fig_w}" height="{fig_h}" viewBox="0 0 {fig_w} {fig_h}" style="background:{bg_hex}; display:block;">
  <defs>{"".join(defs_elems)}</defs>
  {"".join(svg_elems)}
</svg>
</body>
</html>"""

  render_html_to_png(
    html_content=html_doc,
    out_png_path=out_png_path,
    width_px=fig_w,
    height_px=fig_h,
    config=paths_ctx["config"],
    scale=2,
    wait_ms=3500,
    bg=bg_hex
  )

