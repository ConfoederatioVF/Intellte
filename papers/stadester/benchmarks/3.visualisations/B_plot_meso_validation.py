"""
Step B (Meso-Validation): Generates Figures 28, 29, 31, 32, and 33 matching the exact
cartographic, optical typography, and Plotly specifications of Stadestér 1.0.
"""

import json
import math
import os
import sys

import plotly.graph_objects as go
from plotly.subplots import make_subplots

from meso_spatiotemporal_helpers import build_angel_tile_data_uris, render_spatiotemporal_dual_grid
from vis_helpers import get_project_paths, render_plotly_figure_to_png, resolve_project_path

sys.stdout.reconfigure(encoding="utf-8")

PLOTLY_QUAL = [
  "#636EFA", "#EF553B", "#00CC96", "#AB63FA", "#FFA15A", "#19D3F3",
  "#FF6692", "#B6E880", "#FF97FF", "#FECB52", "#1F77B4", "#FF7F0E"
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


def place_non_overlapping_labels(candidates, panel_w, panel_h, inset_box, traj_pts_px=None):
  """
  Resolves label positions in pixel space inside a panel so labels never overlap each other,
  full trajectory segments, panel edges, the bottom-left scale bar, or the bottom-right inset.
  """
  offsets = []
  for rad in (15, 24, 34, 46, 58):
    for ang_deg in (270, 90, 180, 0, 225, 315, 135, 45):
      ang_rad = math.radians(ang_deg)
      offsets.append((round(rad * math.cos(ang_rad) * 1.25, 1), round(rad * math.sin(ang_rad), 1)))

  placed = []
  ix0, iy0, ix1, iy1 = inset_box
  sb_box = (0, panel_h - 32, 92, panel_h)
  traj_pts = traj_pts_px or []

  def overlaps(b1, b2):
    return not (b1[2] < b2[0] or b1[0] > b2[2] or b1[3] < b2[1] or b1[1] > b2[3])

  for cand in candidates:
    ax, ay = cand["ax"], cand["ay"]
    w, h = cand["w"], cand["h"]
    ordered_offs = [(cand["pref_dx"], cand["pref_dy"])] + offsets
    best_pos = None
    best_pen = 1e9

    for dx, dy in ordered_offs:
      cx = max(w / 2 + 5, min(panel_w - w / 2 - 5, ax + dx))
      cy = max(h / 2 + 5, min(panel_h - h / 2 - 5, ay + dy))
      box = (cx - w / 2 - 3, cy - h / 2 - 2, cx + w / 2 + 3, cy + h / 2 + 2)

      pen = 0.0
      if overlaps(box, (ix0 - 4, iy0 - 4, ix1, iy1)):
        pen += 5000.0
      if overlaps(box, sb_box):
        pen += 3000.0
      for prev in placed:
        if overlaps(box, prev["box"]):
          pen += 2600.0
      for other in candidates:
        o_pt = (other["ax"] - 4, other["ay"] - 4, other["ax"] + 4, other["ay"] + 4)
        if overlaps(box, o_pt):
          pen += 450.0
      for tx_p, ty_p in traj_pts:
        if (box[0] - 4.0) <= tx_p <= (box[2] + 4.0) and (box[1] - 4.0) <= ty_p <= (box[3] + 4.0):
          pen += 650.0
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
  matching the published Stadestér 1.0 Figure 28 design and optical text proportions.
  """
  rc_path = os.path.join(paths_ctx["results_dir"], "meso_regional_cogs.json")
  with open(rc_path, "r", encoding="utf-8") as handle:
    rc_data = json.load(handle)

  regions = rc_data["regions"]
  fig_w = 1360
  fig_h = 990

  cols = 3
  panel_w = 404
  panel_h = 204
  left_pad = 32
  top_pad = 78
  h_gap = 42
  v_gap = 30

  fig = go.Figure()
  overlay_parts = [
    f"""<div style="position:absolute; top:14px; left:0; width:{fig_w}px; text-align:center; font-family:'Jost',sans-serif; font-size:31px; font-weight:400; color:#111111;">
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
    ("#84cc16", "#ff6692"),
    ("#f59e0b", "#ec4899"),
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

    panel_aspect = panel_w / panel_h
    lat_span = max(3.6, (max_lat - min_lat) * 2.40)
    lon_span = max((max_lon - min_lon) * 2.50, lat_span * panel_aspect)
    lat_span = lon_span / panel_aspect

    deg_200km = 200.0 / (111.32 * cos_lat)
    sb_px = (deg_200km / lon_span) * panel_w
    if sb_px > 106.0:
      scale_adj = sb_px / 88.0
      lon_span *= scale_adj
      lat_span *= scale_adj
      sb_px = (deg_200km / lon_span) * panel_w

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
      line=dict(color=col_base, width=1.8),
      marker=dict(color=col_base, size=4.6),
      geo=main_geo,
      showlegend=False,
      hoverinfo="skip"
    ))
    fig.add_trace(go.Scattergeo(
      lon=g_lons,
      lat=g_lats,
      mode="lines+markers",
      line=dict(color=col_ghsl, width=1.8),
      marker=dict(color=col_ghsl, size=4.6),
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
      lakecolor="#add8e6",
      showrivers=True,
      rivercolor="#2563eb",
      riverwidth=0.55,
      showcoastlines=True,
      coastlinecolor="#663399",
      coastlinewidth=0.85,
      showcountries=False,
      showframe=False
    )

    ins_w, ins_h = 112, 60
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
      line=dict(color="#dc2626", width=1.4),
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

    def densify_px(lons_seq, lats_seq):
      pts_out = []
      raw_px = [to_panel_px(lv, ltv) for lv, ltv in zip(lons_seq, lats_seq)]
      for idx_s in range(len(raw_px) - 1):
        x_a, y_a = raw_px[idx_s]
        x_b, y_b = raw_px[idx_s + 1]
        for step_k in range(6):
          u_f = step_k / 6.0
          pts_out.append((x_a + u_f * (x_b - x_a), y_a + u_f * (y_b - y_a)))
      if raw_px:
        pts_out.append(raw_px[-1])
      return pts_out

    traj_pts_px = densify_px(b_lons, b_lats) + densify_px(g_lons, g_lats)

    cands = [
      {"text": "Base", "ax": bmx, "ay": bmy, "w": 33, "h": 14, "pref_dx": 0, "pref_dy": -16},
      {"text": "GHSL", "ax": gmx, "ay": gmy, "w": 35, "h": 14, "pref_dx": 0, "pref_dy": 16},
      {"text": "1975", "ax": b0x, "ay": b0y, "w": 31, "h": 13, "pref_dx": 24, "pref_dy": -9},
      {"text": "2000", "ax": b1x, "ay": b1y, "w": 33, "h": 13, "pref_dx": -26, "pref_dy": -9},
      {"text": "1975", "ax": g0x, "ay": g0y, "w": 31, "h": 13, "pref_dx": 24, "pref_dy": 11},
      {"text": "2000", "ax": g1x, "ay": g1y, "w": 33, "h": 13, "pref_dx": -26, "pref_dy": 11}
    ]
    placed_lbls = place_non_overlapping_labels(
      cands,
      panel_w,
      panel_h,
      (panel_w - ins_w, panel_h - ins_h, panel_w, panel_h),
      traj_pts_px=traj_pts_px
    )

    lbl_divs = []
    for lb in placed_lbls:
      lbl_divs.append(
        f'<div style="position:absolute; left:{lb["x"]:.1f}px; top:{lb["y"]:.1f}px; transform:translate(-50%,-50%); font-family:\'Karla\',sans-serif; font-size:12.2px; font-weight:500; color:#111111; text-shadow:0 0 3px rgba(215,220,225,0.95); white-space:nowrap;">{lb["text"]}</div>'
      )

    disp_name = reg["name"].replace("&", "and")
    overlay_parts.append(f"""
    <div style="position:absolute; left:{px0}px; top:{py0 - 20}px; width:{panel_w}px; text-align:center; font-family:'Jost',sans-serif; font-size:15px; font-weight:500; color:#111111;">
      {disp_name}
    </div>
    <div style="position:absolute; left:{px0}px; top:{py0}px; width:{panel_w}px; height:{panel_h}px; border:1px solid #666666; box-sizing:border-box; pointer-events:none;">
      {''.join(lbl_divs)}
      <div style="position:absolute; left:8px; bottom:6px; display:flex; flex-direction:column; align-items:flex-start;">
        <span style="font-family:'Karla',sans-serif; font-size:11.8px; font-weight:500; color:#111111; margin-bottom:2px; text-shadow:0 0 3.5px rgba(225,230,235,0.95);">200km</span>
        <div style="width:{sb_px:.1f}px; height:2.1px; background:#111111;"></div>
      </div>
      <div style="position:absolute; right:-1px; bottom:-1px; width:{ins_w}px; height:{ins_h}px; border:1.25px solid #111111; box-sizing:border-box;"></div>
    </div>
    """)

  foot_y = top_pad + 4 * panel_h + 3 * v_gap + 10
  overlay_parts.append(
    f'<div style="position:absolute; left:{left_pad}px; top:{foot_y}px; font-family:\'Karla\',sans-serif; font-size:14px; color:#111111;">*Areas highlighted in insets are approximate.</div>'
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
  matching the panoramic Plotly line chart in Stadestér 1.0 Figure 29 with optically legible text.
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
      line=dict(color=PLOTLY_QUAL[idx % len(PLOTLY_QUAL)], width=2.15)
    ))

  fig.update_layout(
    title=dict(
      text="Distance between Base and GHSL Regional Centres of Gravity (1975-2000)",
      x=0.45,
      xanchor="center",
      font=dict(family="Jost, sans-serif", size=19, color="#1f2937")
    ),
    font=dict(family="Karla, sans-serif", size=13, color="#374151"),
    paper_bgcolor="#ffffff",
    plot_bgcolor="#ffffff",
    margin=dict(l=76, r=230, t=54, b=54),
    xaxis=dict(
      title=dict(text="Year", font=dict(size=14.5)),
      tickvals=[1975, 1980, 1985, 1990, 1995, 2000],
      tickfont=dict(size=13),
      showgrid=True,
      gridcolor="#e2e8f0",
      zeroline=False,
      linecolor="#cbd5e1"
    ),
    yaxis=dict(
      title=dict(text="Euclidean Distance (km)", font=dict(size=14.5)),
      tickfont=dict(size=13),
      rangemode="tozero",
      showgrid=True,
      gridcolor="#e2e8f0",
      zeroline=True,
      zerolinecolor="#94a3b8",
      zerolinewidth=1.1
    ),
    legend=dict(
      title=dict(text="Region", font=dict(size=14.5)),
      x=1.01,
      y=0.99,
      xanchor="left",
      yanchor="top",
      bgcolor="rgba(255,255,255,0)",
      font=dict(size=12.8)
    )
  )

  out_png = os.path.join(paths_ctx["meso_dir"], "fig29_regional_cog_distance_over_time.png")
  render_plotly_figure_to_png(
    fig=fig,
    out_png_path=out_png,
    width_px=1440,
    height_px=400,
    paths_ctx=paths_ctx,
    scale=2,
    wait_ms=3000
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

  # Figure 31: Stadestér Base vs. Stadestér-GHSL (1pt = 1ihb proportional circles)
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
    render_mode="proportional",
    show_mid_cbar_label=False,
    angel_uris=None
  )

  # Figure 32: Stadestér Base dual-layer expansion + authentic Angel Atlas overlay vs. Base reference
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
    render_mode="dual_expansion",
    show_mid_cbar_label=True,
    angel_uris=angel_uris
  )


def build_fig33_top_120(paths_ctx):
  """
  Renders Figure 33 (2.meso_validation/fig33_top_120_area_density_population.png)
  ported directly from Stadestér 1.0's Stadester Area_Density_Population (Top 120) Plotly script
  with uniform legend symbols and scaled-up optical typography.
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
    row_heights=[0.48, 0.52],
    vertical_spacing=0.075,
    horizontal_spacing=0.048
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

    for reg_name in region_order:
      reg_items = [it for it in items if it["region"] == reg_name]
      if not reg_items:
        continue
      sizes = [9.5 + ((float(it["value"]) - v_min) / denom) * 34.0 for it in reg_items]
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
            line=dict(width=0.95, color="#1f2937")
          ),
          hoverinfo="skip"
        ),
        row=1,
        col=col_idx
      )

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
      title_font=dict(size=13.5),
      tickfont=dict(size=11.8),
      row=2,
      col=col_idx
    )
    fig.update_yaxes(
      title_text=y_title,
      showgrid=True,
      gridcolor="#ffffff",
      zeroline=True,
      zerolinecolor="#ffffff",
      title_font=dict(size=13.5),
      tickfont=dict(size=11.8),
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
    ann.font = dict(family="Karla, sans-serif", size=14.5, color="#1f2937")

  fig.update_layout(
    title=dict(
      text="Top 120 cities by maximum area/density/population (no outliers removed, proxy model)",
      x=0.015,
      xanchor="left",
      font=dict(family="Jost, sans-serif", size=23, color="#111827")
    ),
    font=dict(family="Karla, sans-serif", size=12.5, color="#1f2937"),
    paper_bgcolor="#ffffff",
    plot_bgcolor="#e5ecf6",
    bargap=0.0,
    margin=dict(l=66, r=210, t=76, b=52),
    legend=dict(
      title=dict(text="Region", font=dict(size=14.5)),
      itemsizing="constant",
      x=1.008,
      y=0.98,
      xanchor="left",
      yanchor="top",
      font=dict(size=13)
    )
  )

  out_png = os.path.join(paths_ctx["meso_dir"], "fig33_top_120_area_density_population.png")
  render_plotly_figure_to_png(
    fig=fig,
    out_png_path=out_png,
    width_px=1920,
    height_px=760,
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
