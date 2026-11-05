"""
Step B (Meso-Validation): Generates Figures 28, 29, 31, 32, and 33 matching the exact
cartographic and Plotly specifications of Stadestér 1.0.
"""

import base64
import io
import json
import math
import os
import sys

import numpy as np
import plotly.graph_objects as go
from PIL import Image
from plotly.subplots import make_subplots

from vis_helpers import (
  build_font_face_css,
  fmt_eu,
  get_project_paths,
  render_html_to_png,
  render_plotly_figure_to_png,
  resolve_project_path
)

sys.stdout.reconfigure(encoding="utf-8")

PLOTLY_QUAL = [
  "#636EFA", "#EF553B", "#00CC96", "#AB63FA", "#FFA15A", "#19D3F3",
  "#FF6692", "#B6E880", "#FF97FF", "#FECB52", "#1F77B4", "#FF7F0E"
]

# Viridis 17-stop control points for smooth 1800-2000 colour interpolation
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

# Regional overview bounds for bottom-right locator insets in Figure 28
REGION_OVERVIEW_BOXES = {
  "northern_america": (-135, -55, 18, 62),
  "latin_america": (-95, -32, -52, 24),
  "europe": (-14, 38, 34, 68),
  "eastern_europe_and_russia": (18, 145, 40, 72),
  "central_asia": (44, 92, 26, 56),
  "middle_east": (24, 64, 12, 43),
  "maghreb_egypt": (-18, 38, 16, 39),
  "sub_saharan_africa": (-20, 52, -36, 18),
  "oceania": (110, 180, -48, -4),
  "indian_subcontinent": (64, 96, 5, 37),
  "southeast_asia": (92, 142, -12, 24),
  "eastasia": (96, 148, 18, 52)
}


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


def place_non_overlapping_labels(candidates, panel_w, panel_h, inset_box):
  """
  Resolves label positions in pixel space inside a panel so labels never overlap each other,
  trajectory anchors, panel edges, the bottom-left scale bar, or the bottom-right inset.

  @param candidates List of dicts: {text, ax, ay, w, h, pref_dx, pref_dy}
  @param panel_w Panel width in px.
  @param panel_h Panel height in px.
  @param inset_box Tuple (ix0, iy0, ix1, iy1) of forbidden inset region.
  @return List of placed dicts {text, x, y}.
  """
  offsets = [
    (0, -13), (0, 13), (-24, 0), (24, 0),
    (-22, -12), (22, -12), (-22, 12), (22, 12),
    (0, -22), (0, 22), (-34, -6), (34, -6),
    (-32, 14), (32, 14), (-16, -24), (16, -24)
  ]
  placed = []
  ix0, iy0, ix1, iy1 = inset_box
  sb_box = (0, panel_h - 28, 76, panel_h)

  def overlaps(b1, b2):
    return not (b1[2] < b2[0] or b1[0] > b2[2] or b1[3] < b2[1] or b1[1] > b2[3])

  for cand in candidates:
    ax, ay = cand["ax"], cand["ay"]
    w, h = cand["w"], cand["h"]
    ordered_offs = [(cand["pref_dx"], cand["pref_dy"])] + offsets
    best_pos = None
    best_pen = 1e9

    for dx, dy in ordered_offs:
      cx = max(w / 2 + 4, min(panel_w - w / 2 - 4, ax + dx))
      cy = max(h / 2 + 4, min(panel_h - h / 2 - 4, ay + dy))
      box = (cx - w / 2 - 2, cy - h / 2 - 1, cx + w / 2 + 2, cy + h / 2 + 1)

      pen = 0.0
      if overlaps(box, (ix0 - 3, iy0 - 3, ix1, iy1)):
        pen += 5000.0
      if overlaps(box, sb_box):
        pen += 3000.0
      for prev in placed:
        if overlaps(box, prev["box"]):
          pen += 2000.0
      for other in candidates:
        o_pt = (other["ax"] - 3, other["ay"] - 3, other["ax"] + 3, other["ay"] + 3)
        if overlaps(box, o_pt):
          pen += 250.0
      pen += 0.15 * math.hypot(cx - (ax + cand["pref_dx"]), cy - (ay + cand["pref_dy"]))
      if pen < best_pen:
        best_pen = pen
        best_pos = (cx, cy, box)
        if pen < 1.0:
          break

    placed.append({
      "text": cand["text"],
      "x": best_pos[0],
      "y": best_pos[1],
      "box": best_pos[2]
    })
  return placed


def build_fig28_regional_cogs(paths_ctx):
  """
  Renders Figure 28 (2.meso_validation/fig28_regional_centres_of_population.png) using
  4x3 Plotly Scattergeo regional subplots + bottom-right locator insets + 200km scale bars,
  matching the published Stadestér 1.0 Figure 28 design.
  """
  rc_path = os.path.join(paths_ctx["results_dir"], "meso_regional_cogs.json")
  with open(rc_path, "r", encoding="utf-8") as handle:
    rc_data = json.load(handle)

  regions = rc_data["regions"]
  fig_w = 1420
  fig_h = 1090

  # Exact pixel layout for 4x3 uniform 1.84:1 regional panels
  cols, rows = 3, 4
  panel_w = 408
  panel_h = 216
  left_pad = 48
  top_pad = 78
  h_gap = 50
  v_gap = 38

  fig = go.Figure()
  overlay_parts = [
    f"""<div style="position:absolute; top:16px; left:0; width:{fig_w}px; text-align:center; font-family:'Jost',sans-serif; font-size:27px; font-weight:400; color:#111111;">
      Centres of population (Stadestér Base vs. Stadestér-GHSL) / 1975AD-2000AD
    </div>"""
  ]

  trace_palette = [
    ("#ef553b", "#636efa"),
    ("#ab63fa", "#00cc96"),
    ("#ffa15a", "#19d3f3"),
    ("#ff6692", "#2ca02c"),
    ("#eeca3b", "#d62728"),
    ("#ef553b", "#636efa"),
    ("#ab63fa", "#00cc96"),
    ("#ffa15a", "#19d3f3"),
    ("#b6e880", "#ff6692"),
    ("#fbbf24", "#ec4899"),
    ("#ef553b", "#636efa"),
    ("#00cc96", "#ab63fa")
  ]

  geo_idx = 1
  for idx, reg in enumerate(regions):
    r_row = idx // cols
    r_col = idx % cols
    px0 = left_pad + r_col * (panel_w + h_gap)
    py0 = top_pad + r_row * (panel_h + v_gap)

    dom_x0 = px0 / fig_w
    dom_x1 = (px0 + panel_w) / fig_w
    dom_y1 = 1.0 - (py0 / fig_h)
    dom_y0 = 1.0 - ((py0 + panel_h) / fig_h)

    series = reg["annual_series"]
    b_lons = [pt["base_lon"] for pt in series]
    b_lats = [pt["base_lat"] for pt in series]
    g_lons = [pt["ghsl_lon"] for pt in series]
    g_lats = [pt["ghsl_lat"] for pt in series]
    all_lons = b_lons + g_lons
    all_lats = b_lats + g_lats

    min_lon, max_lon = min(all_lons), max(all_lons)
    min_lat, max_lat = min(all_lats), max(all_lats)
    mid_lat = 0.5 * (min_lat + max_lat)
    cos_lat = max(0.25, math.cos(math.radians(mid_lat)))

    # Choose zoom window whose degree aspect matches panel_w / panel_h in equirectangular
    panel_aspect = panel_w / panel_h
    lat_span = max(3.6, (max_lat - min_lat) * 2.35)
    lon_span = max((max_lon - min_lon) * 2.45, lat_span * panel_aspect)
    lat_span = lon_span / panel_aspect

    # Ensure 200km scale bar fits cleanly (between 38px and 110px)
    deg_200km = 200.0 / (111.32 * cos_lat)
    sb_px = (deg_200km / lon_span) * panel_w
    if sb_px > 110.0:
      scale_adj = sb_px / 90.0
      lon_span *= scale_adj
      lat_span *= scale_adj
      sb_px = (deg_200km / lon_span) * panel_w

    # Shift window centre slightly up-left so trajectories stay clear of bottom-right inset
    c_lon = 0.5 * (min_lon + max_lon) + 0.08 * lon_span
    c_lat = 0.5 * (min_lat + max_lat) - 0.06 * lat_span
    lon_r0, lon_r1 = c_lon - 0.5 * lon_span, c_lon + 0.5 * lon_span
    lat_r0, lat_r1 = c_lat - 0.5 * lat_span, c_lat + 0.5 * lat_span

    main_geo = "geo" if geo_idx == 1 else f"geo{geo_idx}"
    geo_idx += 1
    col_base, col_ghsl = trace_palette[idx % len(trace_palette)]

    fig.add_trace(go.Scattergeo(
      lon=b_lons,
      lat=b_lats,
      mode="lines+markers",
      line=dict(color=col_base, width=1.6),
      marker=dict(color=col_base, size=4.2),
      geo=main_geo,
      showlegend=False,
      hoverinfo="skip"
    ))
    fig.add_trace(go.Scattergeo(
      lon=g_lons,
      lat=g_lats,
      mode="lines+markers",
      line=dict(color=col_ghsl, width=1.6),
      marker=dict(color=col_ghsl, size=4.2),
      geo=main_geo,
      showlegend=False,
      hoverinfo="skip"
    ))

    fig.layout[main_geo] = dict(
      domain=dict(x=[dom_x0, dom_x1], y=[dom_y0, dom_y1]),
      projection=dict(type="equirectangular"),
      resolution=50,
      lonaxis=dict(range=[lon_r0, lon_r1]),
      lataxis=dict(range=[lat_r0, lat_r1]),
      showland=True,
      landcolor="#d3d3d3",
      showocean=True,
      oceancolor="#add8e6",
      showlakes=True,
      lakecolor="#0000ff",
      showrivers=True,
      rivercolor="#0000ff",
      riverwidth=0.75,
      showcoastlines=True,
      coastlinecolor="#663399",
      coastlinewidth=0.85,
      showcountries=False,
      showframe=False
    )

    # Bottom-right locator inset geo
    ins_w, ins_h = 114, 62
    ins_px0 = px0 + panel_w - ins_w
    ins_py0 = py0 + panel_h - ins_h
    ins_geo = f"geo{geo_idx}"
    geo_idx += 1

    ov_lon0, ov_lon1, ov_lat0, ov_lat1 = REGION_OVERVIEW_BOXES.get(
      reg["id"], (lon_r0 - 15, lon_r1 + 15, lat_r0 - 10, lat_r1 + 10)
    )
    ins_aspect = ins_w / ins_h
    ov_lon_span = ov_lon1 - ov_lon0
    ov_lat_span = ov_lat1 - ov_lat0
    if ov_lon_span / ov_lat_span < ins_aspect:
      ov_cx = 0.5 * (ov_lon0 + ov_lon1)
      ov_lon_span = ov_lat_span * ins_aspect
      ov_lon0, ov_lon1 = ov_cx - 0.5 * ov_lon_span, ov_cx + 0.5 * ov_lon_span
    else:
      ov_cy = 0.5 * (ov_lat0 + ov_lat1)
      ov_lat_span = ov_lon_span / ins_aspect
      ov_lat0, ov_lat1 = max(-85.0, ov_cy - 0.5 * ov_lat_span), min(85.0, ov_cy + 0.5 * ov_lat_span)
    fig.add_trace(go.Scattergeo(
      lon=[lon_r0, lon_r1, lon_r1, lon_r0, lon_r0],
      lat=[lat_r0, lat_r0, lat_r1, lat_r1, lat_r0],
      mode="lines",
      line=dict(color="#dc2626", width=1.35),
      geo=ins_geo,
      showlegend=False,
      hoverinfo="skip"
    ))
    fig.layout[ins_geo] = dict(
      domain=dict(
        x=[ins_px0 / fig_w, (ins_px0 + ins_w) / fig_w],
        y=[1.0 - ((ins_py0 + ins_h) / fig_h), 1.0 - (ins_py0 / fig_h)]
      ),
      projection=dict(type="equirectangular"),
      resolution=110,
      lonaxis=dict(range=[ov_lon0, ov_lon1]),
      lataxis=dict(range=[ov_lat0, ov_lat1]),
      showland=True,
      landcolor="#e5ecf6",
      showocean=True,
      oceancolor="#ffffff",
      showlakes=False,
      showcountries=True,
      countrycolor="#cbd5e1",
      countrywidth=0.45,
      showcoastlines=True,
      coastlinecolor="#94a3b8",
      coastlinewidth=0.5,
      showframe=False
    )

    # Convert trajectory endpoints & midpoints to panel pixel coords for collision-free labels
    def to_panel_px(lon_v, lat_v):
      x_p = ((lon_v - lon_r0) / (lon_r1 - lon_r0)) * panel_w
      y_p = ((lat_r1 - lat_v) / (lat_r1 - lat_r0)) * panel_h
      return x_p, y_p

    b0x, b0y = to_panel_px(b_lons[0], b_lats[0])
    b1x, b1y = to_panel_px(b_lons[-1], b_lats[-1])
    bmx, bmy = to_panel_px(b_lons[len(b_lons) // 2], b_lats[len(b_lats) // 2])
    g0x, g0y = to_panel_px(g_lons[0], g_lats[0])
    g1x, g1y = to_panel_px(g_lons[-1], g_lats[-1])
    gmx, gmy = to_panel_px(g_lons[len(g_lons) // 2], g_lats[len(g_lats) // 2])

    cands = [
      {"text": "Base", "ax": bmx, "ay": bmy, "w": 28, "h": 12, "pref_dx": 0, "pref_dy": -12},
      {"text": "GHSL", "ax": gmx, "ay": gmy, "w": 30, "h": 12, "pref_dx": 0, "pref_dy": 12},
      {"text": "1975", "ax": b0x, "ay": b0y, "w": 26, "h": 11, "pref_dx": 18, "pref_dy": -6},
      {"text": "2000", "ax": b1x, "ay": b1y, "w": 28, "h": 11, "pref_dx": -20, "pref_dy": -6},
      {"text": "1975", "ax": g0x, "ay": g0y, "w": 26, "h": 11, "pref_dx": 18, "pref_dy": 8},
      {"text": "2000", "ax": g1x, "ay": g1y, "w": 28, "h": 11, "pref_dx": -20, "pref_dy": 8}
    ]
    placed_lbls = place_non_overlapping_labels(
      cands, panel_w, panel_h, (panel_w - ins_w, panel_h - ins_h, panel_w, panel_h)
    )

    lbl_divs = []
    for lb in placed_lbls:
      lbl_divs.append(
        f'<div style="position:absolute; left:{lb["x"]:.1f}px; top:{lb["y"]:.1f}px; transform:translate(-50%,-50%); font-family:\'Karla\',sans-serif; font-size:10.5px; font-weight:500; color:#111111; white-space:nowrap;">{lb["text"]}</div>'
      )

    disp_name = reg["name"].replace("&", "and")
    overlay_parts.append(f"""
    <div style="position:absolute; left:{px0}px; top:{py0 - 18}px; width:{panel_w}px; text-align:center; font-family:'Jost',sans-serif; font-size:13px; font-weight:500; color:#111111;">
      {disp_name}
    </div>
    <div style="position:absolute; left:{px0}px; top:{py0}px; width:{panel_w}px; height:{panel_h}px; border:1px solid #777777; box-sizing:border-box; pointer-events:none;">
      {''.join(lbl_divs)}
      <div style="position:absolute; left:8px; bottom:6px; display:flex; flex-direction:column; align-items:flex-start;">
        <span style="font-family:'Karla',sans-serif; font-size:10px; color:#111111; margin-bottom:2px; text-shadow:0 0 3px rgba(211,211,211,0.9);">200km</span>
        <div style="width:{sb_px:.1f}px; height:1.8px; background:#111111;"></div>
      </div>
      <div style="position:absolute; right:-1px; bottom:-1px; width:{ins_w}px; height:{ins_h}px; border:1.2px solid #111111; box-sizing:border-box;"></div>
    </div>
    """)

  foot_y = top_pad + 4 * panel_h + 3 * v_gap + 10
  overlay_parts.append(
    f'<div style="position:absolute; left:{left_pad}px; top:{foot_y}px; font-family:\'Karla\',sans-serif; font-size:12.5px; color:#111111;">*Areas highlighted in insets are approximate.</div>'
  )

  fig.update_layout(
    margin=dict(l=0, r=0, t=0, b=0),
    paper_bgcolor="#ffffff",
    plot_bgcolor="#ffffff"
  )

  out_png = os.path.join(paths_ctx["meso_dir"], "fig28_regional_centres_of_population.png")
  render_plotly_figure_to_png(
    fig=fig,
    out_png_path=out_png,
    width_px=fig_w,
    height_px=fig_h,
    paths_ctx=paths_ctx,
    scale=2,
    extra_html="\n".join(overlay_parts),
    wait_ms=5000
  )


def build_fig29_regional_cog_distance(paths_ctx):
  """
  Renders Figure 29 (2.meso_validation/fig29_regional_cog_distance_over_time.png)
  matching the wide panoramic Plotly line chart in Stadestér 1.0 Figure 29.
  """
  rc_path = os.path.join(paths_ctx["results_dir"], "meso_regional_cogs.json")
  with open(rc_path, "r", encoding="utf-8") as handle:
    rc_data = json.load(handle)

  fig = go.Figure()
  for idx, reg in enumerate(rc_data["regions"]):
    series = reg["annual_series"]
    fig.add_trace(go.Scatter(
      x=[pt["year"] for pt in series],
      y=[pt["distance_km"] for pt in series],
      mode="lines",
      name=reg["name"],
      line=dict(color=PLOTLY_QUAL[idx % len(PLOTLY_QUAL)], width=1.8)
    ))

  fig.update_layout(
    title=dict(
      text="Distance between Base and GHSL Regional Centres of Gravity (1975-2000)",
      x=0.46,
      xanchor="center",
      font=dict(family="Karla, sans-serif", size=15, color="#374151")
    ),
    font=dict(family="Karla, sans-serif", size=12, color="#374151"),
    paper_bgcolor="#ffffff",
    plot_bgcolor="#ffffff",
    margin=dict(l=72, r=210, t=54, b=52),
    xaxis=dict(
      title=dict(text="Year", font=dict(size=12.5)),
      tickvals=[1975, 1980, 1985, 1990, 1995, 2000],
      showgrid=True,
      gridcolor="#f1f5f9",
      zeroline=False,
      linecolor="#cbd5e1"
    ),
    yaxis=dict(
      title=dict(text="Euclidean Distance (km)", font=dict(size=12.5)),
      rangemode="tozero",
      showgrid=True,
      gridcolor="#f1f5f9",
      zeroline=True,
      zerolinecolor="#cbd5e1",
      zerolinewidth=1.0
    ),
    legend=dict(
      title=dict(text="Region", font=dict(size=12.5)),
      x=1.01,
      y=0.98,
      xanchor="left",
      yanchor="top",
      bgcolor="rgba(255,255,255,0)",
      font=dict(size=11.5)
    )
  )

  out_png = os.path.join(paths_ctx["meso_dir"], "fig29_regional_cog_distance_over_time.png")
  render_plotly_figure_to_png(
    fig=fig,
    out_png_path=out_png,
    width_px=1680,
    height_px=450,
    paths_ctx=paths_ctx,
    scale=2,
    wait_ms=3000
  )


def build_angel_tile_data_uris(paths_ctx):
  """
  Slices the 6x5 Angel Global 30 atlas PNG (329x329 per city) into semi-transparent
  chartreuse-amber PNG data URIs so Figure 32 overlays Angel's urban expansion footprint
  cleanly on top of Stadestér Base's spatiotemporal circles.
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
    mask = sub[:, :, 3] >= 180
    out_rgba = np.zeros_like(sub)
    out_rgba[mask, 0] = 212
    out_rgba[mask, 1] = 226
    out_rgba[mask, 2] = 68
    out_rgba[mask, 3] = 112

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
  angel_uris=None
):
  """
  Renders a high-DPI dark cartographic dual 6x5 Global 30 spatiotemporal grid (Figures 31 & 32)
  with Natural Earth 10m vector coastlines, 5x5 European-decimal degree ticks on every tile,
  proportional Viridis circles (1800-2000), and full-height Viridis colourbars.
  """
  fonts_dir = resolve_project_path(
    paths_ctx["project_root"],
    paths_ctx["config"]["paths"]["intellte_fonts_dir"]
  )
  font_css = build_font_face_css(fonts_dir)

  tile_s = 152
  col_step = 188
  row_step = 186
  grid_top = 82
  left_grid_x0 = 46
  right_grid_x0 = 1152
  cbar_dx = 5 * col_step + 4
  cbar_w = 14
  cbar_h = 5 * row_step + tile_s
  fig_w = 2205
  fig_h = 1235 if footer_lines else 1205

  svg_elems = []
  # Header titles
  svg_elems.append(
    f'<text x="{left_grid_x0 - 16}" y="42" fill="#f3f4f6" font-family="Jost, sans-serif" font-size="25" font-weight="400">{title_left}</text>'
  )
  if title_right:
    svg_elems.append(
      f'<text x="{fig_w - 42}" y="42" text-anchor="end" fill="#f3f4f6" font-family="Jost, sans-serif" font-size="20" font-weight="400">{title_right}</text>'
    )

  # Viridis vertical linear gradient definition
  grad_stops = []
  for t_stop, rgb_t in VIRIDIS_STOPS:
    y_pct = (1.0 - t_stop) * 100.0
    grad_stops.append(
      f'<stop offset="{y_pct:.1f}%" stop-color="rgb({rgb_t[0]},{rgb_t[1]},{rgb_t[2]})"/>'
    )

  defs_elems = [
    f'<linearGradient id="viridis-vert" x1="0%" y1="0%" x2="0%" y2="100%">{"".join(grad_stops)}</linearGradient>'
  ]

  def draw_6x5_block(block_tag, grid_x0, pixel_key, use_angel):
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

      # Tile background & city title
      svg_elems.append(
        f'<rect x="{tx}" y="{ty}" width="{tile_s}" height="{tile_s}" fill="#333333"/>'
      )
      svg_elems.append(
        f'<text x="{tx + tile_s / 2:.1f}" y="{ty - 5.5:.1f}" text-anchor="middle" fill="#f3f4f6" font-family="Karla, sans-serif" font-size="8.8" font-weight="500">{city["name"]}</text>'
      )

      # 5x5 dashed graticule lines & degree tick labels
      lon_ticks = np.linspace(lon0, lon1, 5)
      lat_ticks = np.linspace(lat0, lat1, 5)
      for k_idx, lv in enumerate(lon_ticks):
        gx = tx + (k_idx / 4.0) * tile_s
        if 0 < k_idx < 4:
          svg_elems.append(
            f'<line x1="{gx:.2f}" y1="{ty}" x2="{gx:.2f}" y2="{ty + tile_s}" stroke="#666666" stroke-width="0.45" stroke-dasharray="2.2,2.2" stroke-opacity="0.65"/>'
          )
        svg_elems.append(
          f'<line x1="{gx:.2f}" y1="{ty + tile_s}" x2="{gx:.2f}" y2="{ty + tile_s + 2.5}" stroke="#cccccc" stroke-width="0.55"/>'
        )
        svg_elems.append(
          f'<text x="{gx:.2f}" y="{ty + tile_s + 9.5:.2f}" text-anchor="middle" fill="#d4d4d4" font-family="Karla, sans-serif" font-size="6.1">{fmt_eu(lv, 1)}</text>'
        )

      for k_idx, ltv in enumerate(lat_ticks):
        gy = ty + (1.0 - k_idx / 4.0) * tile_s
        if 0 < k_idx < 4:
          svg_elems.append(
            f'<line x1="{tx}" y1="{gy:.2f}" x2="{tx + tile_s}" y2="{gy:.2f}" stroke="#666666" stroke-width="0.45" stroke-dasharray="2.2,2.2" stroke-opacity="0.65"/>'
          )
        svg_elems.append(
          f'<line x1="{tx - 2.5}" y1="{gy:.2f}" x2="{tx}" y2="{gy:.2f}" stroke="#cccccc" stroke-width="0.55"/>'
        )
        svg_elems.append(
          f'<text x="{tx - 4.0:.2f}" y="{gy + 2.0:.2f}" text-anchor="end" fill="#d4d4d4" font-family="Karla, sans-serif" font-size="6.1">{fmt_eu(ltv, 1)}</text>'
        )

      # Clipped group: proportional Viridis circles -> optional Angel overlay -> 10m coastlines
      inner = [f'<g clip-path="url(#{clip_id})">']
      px_list = sorted(city.get(pixel_key, []), key=lambda item: item.get("first_year", 2000))
      for p_item in px_list:
        pop_val = p_item.get("last_population", 0)
        if pop_val <= 0:
          pop_val = p_item.get("max_population", 1)
        fy = p_item.get("first_year", 1800)
        t_norm = (fy - 1800.0) / 200.0
        col_hex = viridis_hex(t_norm)
        cx, cy = to_xy(p_item["lon"], p_item["lat"])
        rad = max(1.05, min(11.5, math.sqrt(max(1.0, float(pop_val))) * 0.0041))
        inner.append(
          f'<circle cx="{cx:.2f}" cy="{cy:.2f}" r="{rad:.2f}" fill="{col_hex}" fill-opacity="0.72"/>'
        )

      if use_angel and angel_uris and city["id"] in angel_uris:
        inner.append(
          f'<image href="{angel_uris[city["id"]]}" x="{tx}" y="{ty}" width="{tile_s}" height="{tile_s}" preserveAspectRatio="none"/>'
        )

      # 10m Natural Earth vector coastlines & lakes
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
          f'<path d="{"".join(pts_str)}" fill="none" stroke="#f3f4f6" stroke-width="0.72" stroke-linejoin="round" stroke-linecap="round"/>'
        )

      inner.append("</g>")
      svg_elems.append("".join(inner))

      # Crisp white subplot frame on top
      svg_elems.append(
        f'<rect x="{tx}" y="{ty}" width="{tile_s}" height="{tile_s}" fill="none" stroke="#e5e5e5" stroke-width="0.75"/>'
      )

    # Full-height Viridis colourbar on the right of the 6x5 block
    cb_x = grid_x0 + cbar_dx
    cb_y = grid_top
    svg_elems.append(
      f'<rect x="{cb_x}" y="{cb_y}" width="{cbar_w}" height="{cbar_h}" fill="url(#viridis-vert)" stroke="#e5e5e5" stroke-width="0.75"/>'
    )
    for yr_tick in range(1800, 2001, 25):
      frac = (yr_tick - 1800.0) / 200.0
      ty_pos = cb_y + (1.0 - frac) * cbar_h
      svg_elems.append(
        f'<line x1="{cb_x + cbar_w}" y1="{ty_pos:.2f}" x2="{cb_x + cbar_w + 3.0}" y2="{ty_pos:.2f}" stroke="#d4d4d4" stroke-width="0.6"/>'
      )
      svg_elems.append(
        f'<text x="{cb_x + cbar_w + 5.0:.2f}" y="{ty_pos + 2.3:.2f}" fill="#d4d4d4" font-family="Karla, sans-serif" font-size="6.8">{yr_tick}</text>'
      )
    lbl_cx = cb_x + cbar_w + 32.0
    lbl_cy = cb_y + cbar_h / 2.0
    svg_elems.append(
      f'<text x="{lbl_cx:.2f}" y="{lbl_cy:.2f}" text-anchor="middle" fill="#e5e5e5" font-family="Karla, sans-serif" font-size="8.2" transform="rotate(-90 {lbl_cx:.2f} {lbl_cy:.2f})">First Year of Population (&gt;0)</text>'
    )

  draw_6x5_block("left", left_grid_x0, left_pixel_key, use_angel=(angel_uris is not None))
  draw_6x5_block("right", right_grid_x0, right_pixel_key, use_angel=False)

  if footer_lines:
    fy0 = grid_top + cbar_h + 26
    for idx_f, fline in enumerate(footer_lines):
      svg_elems.append(
        f'<text x="{left_grid_x0 - 16}" y="{fy0 + idx_f * 13}" fill="#e5e5e5" font-family="Karla, sans-serif" font-size="8.8">{fline}</text>'
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
  background: #2b2b2b;
}}
</style>
</head>
<body>
<svg xmlns="http://www.w3.org/2000/svg" width="{fig_w}" height="{fig_h}" viewBox="0 0 {fig_w} {fig_h}" style="background:#2b2b2b; display:block;">
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
    bg="#2b2b2b"
  )


def build_fig31_and_fig32_spatiotemporal(paths_ctx):
  """
  Renders Figure 31 (Base vs. Stadestér-GHSL) and Figure 32 (Base + Angel Atlas overlay vs. Base).
  """
  g30_path = os.path.join(paths_ctx["results_dir"], "meso_global_30_spatiotemporal.json")
  with open(g30_path, "r", encoding="utf-8") as handle:
    g30_data = json.load(handle)

  coast_path = resolve_project_path(
    paths_ctx["project_root"],
    paths_ctx["config"]["paths"]["global_30_coastlines_10m_json"]
  )
  with open(coast_path, "r", encoding="utf-8") as handle:
    coastlines_10m = json.load(handle)["global_30_coastlines"]

  cities_data = g30_data["cities"]

  # Figure 31: Stadestér Base vs. Stadestér-GHSL
  render_spatiotemporal_dual_grid(
    paths_ctx=paths_ctx,
    cities_data=cities_data,
    coastlines_10m=coastlines_10m,
    left_pixel_key="base_pixels",
    right_pixel_key="spliced_pixels",
    title_left="Spatiotemporal Development / Global 30 (Stadestér Base - Stadestér-GHSL)",
    title_right="1pt = 1ihb",
    footer_lines=[],
    out_png_path=os.path.join(paths_ctx["meso_dir"], "fig31_global_30_base_vs_ghsl.png"),
    angel_uris=None
  )

  # Figure 32: Stadestér Base + Angel Atlas overlay vs. Stadestér Base reference
  angel_uris = build_angel_tile_data_uris(paths_ctx)
  render_spatiotemporal_dual_grid(
    paths_ctx=paths_ctx,
    cities_data=cities_data,
    coastlines_10m=coastlines_10m,
    left_pixel_key="base_pixels",
    right_pixel_key="base_pixels",
    title_left="Spatiotemporal Development / Global 30 / Stadestér",
    title_right="",
    footer_lines=[
      "*Final year populations for Stadestér-Base (2000AD) are presented proportionally by area underneath the spatial expansion grid. Angel's work on urban expansion (~1800AD-2000AD) is overlaid on top of our proxy model of urban expansion (~1800AD-2000AD).",
      "The less the two overlap, the less accurate Stadestér-Base is at inferring spatial expansion over time."
    ],
    out_png_path=os.path.join(paths_ctx["meso_dir"], "fig32_global_30_base_vs_angel.png"),
    angel_uris=angel_uris
  )


def build_fig33_top_120(paths_ctx):
  """
  Renders Figure 33 (2.meso_validation/fig33_top_120_area_density_population.png)
  ported directly from Stadestér 1.0's Stadester Area_Density_Population (Top 120) Plotly script.
  """
  t120_path = os.path.join(paths_ctx["results_dir"], "meso_top_120_rankings.json")
  with open(t120_path, "r", encoding="utf-8") as handle:
    t120_data = json.load(handle)

  region_colors = {reg["name"]: reg["hex"] for reg in paths_ctx["config"]["regions"]}
  region_order = [reg["name"] for reg in paths_ctx["config"]["regions"]]

  fig = make_subplots(
    rows=2,
    cols=4,
    specs=[
      [{"type": "geo"}, {"type": "geo"}, {"type": "geo"}, {"type": "geo"}],
      [{"type": "xy"}, {"type": "xy"}, {"type": "xy"}, {"type": "xy"}]
    ],
    subplot_titles=(
      "City Area Map",
      "City Centre Density Map (<1975, Stadestér)",
      "City Centre Density Map (>=1975, GHSL)",
      "City Population Map",
      "City Area by Rank",
      "City Centre Density by Rank (<1975, Stadestér)",
      "City Centre Density by Rank (>=1975, GHSL)",
      "City Population by Rank"
    ),
    row_heights=[0.46, 0.54],
    vertical_spacing=0.11,
    horizontal_spacing=0.045
  )

  metrics = [
    ("area", "Area"),
    ("density", "Density (ihb/ha)"),
    ("density_ghsl", "Density (ihb/km^2)"),
    ("population", "Population")
  ]

  legend_added = set()
  for col_idx, (m_key, y_title) in enumerate(metrics, start=1):
    items = t120_data["rankings"][m_key]
    vals = [max(0.0, float(it["value"])) for it in items]
    v_min, v_max = min(vals), max(vals)
    denom = (v_max - v_min) if v_max > v_min else 1.0

    # Group markers by region so Plotly builds a clean regional legend on top-right
    for reg_name in region_order:
      reg_items = [it for it in items if it["region"] == reg_name]
      if not reg_items:
        continue
      sizes = [9.0 + ((float(it["value"]) - v_min) / denom) * 34.0 for it in reg_items]
      show_leg = reg_name not in legend_added
      if show_leg:
        legend_added.add(reg_name)

      fig.add_trace(
        go.Scattergeo(
          lon=[it["lon"] for it in reg_items],
          lat=[it["lat"] for it in reg_items],
          mode="markers",
          name=reg_name,
          legendgroup=reg_name,
          showlegend=show_leg,
          marker=dict(
            size=sizes,
            color=region_colors.get(reg_name, "#888888"),
            opacity=0.82,
            line=dict(width=0.9, color="#1f2937")
          ),
          hoverinfo="skip"
        ),
        row=1,
        col=col_idx
      )

    # Row 2: 120 rank-ordered bars coloured by world region
    fig.add_trace(
      go.Bar(
        x=[it["rank"] for it in items],
        y=[it["value"] for it in items],
        marker=dict(
          color=[region_colors.get(it["region"], "#888888") for it in items],
          line=dict(width=0.35, color="#1f2937")
        ),
        showlegend=False,
        hoverinfo="skip"
      ),
      row=2,
      col=col_idx
    )

    fig.update_xaxes(
      title_text="Rank",
      tickvals=[20, 40, 60, 80, 100, 120],
      range=[0.5, 120.5],
      showgrid=False,
      title_font=dict(size=11),
      tickfont=dict(size=10),
      row=2,
      col=col_idx
    )
    fig.update_yaxes(
      title_text=y_title,
      showgrid=True,
      gridcolor="#ffffff",
      zeroline=True,
      zerolinecolor="#ffffff",
      title_font=dict(size=11),
      tickfont=dict(size=10),
      row=2,
      col=col_idx
    )

  for g_idx in range(1, 5):
    g_name = "geo" if g_idx == 1 else f"geo{g_idx}"
    fig.layout[g_name].update(
      projection=dict(type="equal earth"),
      resolution=50,
      showland=True,
      landcolor="#dcdcdc",
      showocean=True,
      oceancolor="#ffffff",
      showcountries=True,
      countrycolor="#888888",
      countrywidth=0.45,
      showcoastlines=True,
      coastlinecolor="#777777",
      coastlinewidth=0.5,
      showframe=True,
      framecolor="#333333",
      framewidth=1.0
    )

  for ann in fig.layout.annotations:
    ann.font = dict(family="Karla, sans-serif", size=12.5, color="#1f2937")

  fig.update_layout(
    title=dict(
      text="Top 120 cities by maximum area/density/population (no outliers removed, proxy model)",
      x=0.02,
      xanchor="left",
      font=dict(family="Jost, sans-serif", size=20, color="#1f2937")
    ),
    font=dict(family="Karla, sans-serif", size=11, color="#1f2937"),
    paper_bgcolor="#ffffff",
    plot_bgcolor="#e5ecf6",
    bargap=0.0,
    margin=dict(l=62, r=190, t=72, b=48),
    legend=dict(
      title=dict(text="Region", font=dict(size=12)),
      x=1.008,
      y=0.98,
      xanchor="left",
      yanchor="top",
      font=dict(size=11)
    )
  )

  out_png = os.path.join(paths_ctx["meso_dir"], "fig33_top_120_area_density_population.png")
  render_plotly_figure_to_png(
    fig=fig,
    out_png_path=out_png,
    width_px=2100,
    height_px=830,
    paths_ctx=paths_ctx,
    scale=2,
    wait_ms=5000
  )


def main():
  paths_ctx = get_project_paths()
  print("[3.visualisations/B] Generating Meso-Validation figures (Figs 28, 29, 31, 32, 33)...")
  build_fig28_regional_cogs(paths_ctx)
  build_fig29_regional_cog_distance(paths_ctx)
  build_fig31_and_fig32_spatiotemporal(paths_ctx)
  build_fig33_top_120(paths_ctx)


if __name__ == "__main__":
  main()
