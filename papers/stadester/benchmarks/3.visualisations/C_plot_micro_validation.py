"""
Step C (Micro-Validation): Generates Figure 36 (Constele Red dark global urban snapshots
using discrete metro-adjusted cities scaled by 1 hectare = 1 inhabitant), Figure 40
(square 4x2 Plotly Scattergeo log-scale urban gridcell heatmaps), and invokes
C_plot_micro_charts.R for Figure 37 (Regional Urbanisation Rates).
"""

import json
import math
import os
import subprocess
import sys

import numpy as np
import plotly.graph_objects as go
from plotly.subplots import make_subplots

from vis_helpers import fmt_semantic, get_project_paths, render_plotly_figure_to_png, resolve_project_path

sys.stdout.reconfigure(encoding="utf-8")

# Curated major country centroids matching Constele Red dark basemap labels in Stadestér 1.0 Fig 36
DARK_BASEMAP_COUNTRY_LABELS = [
  (-106.0, 58.0, "CANADA"),
  (-98.5, 39.5, "UNITED\nSTATES"),
  (-102.5, 24.0, "MEXICO"),
  (-42.5, 72.0, "GREENLAND"),
  (-52.5, -10.5, "BRAZIL"),
  (-64.5, -34.5, "ARGENTINA"),
  (-75.5, -9.5, "PERU"),
  (-73.0, 4.0, "COLOMBIA"),
  (-65.0, -17.0, "BOLIVIA"),
  (-66.0, 7.0, "VENEZUELA"),
  (-19.0, 65.0, "ICELAND"),
  (9.0, 61.5, "NORWAY"),
  (15.5, 62.5, "SWEDEN"),
  (26.0, 64.0, "FINLAND"),
  (96.0, 62.0, "RUSSIA"),
  (67.0, 48.0, "KAZAKHSTAN"),
  (103.5, 46.8, "MONGOLIA"),
  (104.0, 35.5, "CHINA"),
  (79.0, 22.5, "INDIA"),
  (53.5, 32.5, "IRAN"),
  (45.0, 24.0, "SAUDI\nARABIA"),
  (35.0, 39.0, "TURKEY"),
  (2.5, 28.0, "ALGERIA"),
  (17.5, 27.0, "LIBYA"),
  (30.0, 26.5, "EGYPT"),
  (-10.5, 20.5, "MAURITANIA"),
  (-2.0, 17.5, "MALI"),
  (9.5, 17.5, "NIGER"),
  (18.5, 15.5, "CHAD"),
  (30.0, 15.5, "SUDAN"),
  (39.5, 8.5, "ETHIOPIA"),
  (23.5, -2.5, "DR CONGO"),
  (17.5, -12.5, "ANGOLA"),
  (17.5, -22.0, "NAMIBIA"),
  (24.0, -29.5, "SOUTH\nAFRICA"),
  (46.8, -19.0, "MADAGASCAR"),
  (118.0, -2.0, "INDONESIA"),
  (134.5, -25.0, "AUSTRALIA"),
  (172.5, -42.0, "NEW\nZEALAND")
]


def constele_city_rgba(pop_val):
  """
  Maps a city population onto Stadestér 1.0 Figure 36's cornflower-blue -> sky-cyan ->
  sea-emerald colour ramp, returning (fill_rgba, stroke_rgba).
  """
  lp = math.log10(max(100.0, float(pop_val)))
  t = max(0.0, min(1.0, (lp - 3.3) / (7.3 - 3.3)))
  stops = [
    (0.00, (76, 134, 232)),
    (0.45, (72, 178, 218)),
    (0.75, (68, 194, 168)),
    (1.00, (74, 198, 126))
  ]
  r, g, b = 74, 198, 126
  for idx in range(len(stops) - 1):
    t0, c0 = stops[idx]
    t1, c1 = stops[idx + 1]
    if t <= t1:
      u = 0.0 if t1 == t0 else (t - t0) / (t1 - t0)
      r = int(round(c0[0] + u * (c1[0] - c0[0])))
      g = int(round(c0[1] + u * (c1[1] - c0[1])))
      b = int(round(c0[2] + u * (c1[2] - c0[2])))
      break
  return f"rgba({r},{g},{b},0.25)", f"rgba({r},{g},{b},0.80)"


def build_fig36_constele_snapshots(paths_ctx, city_snapshots_by_yr):
  """
  Renders Figure 36 (3.micro_validation/fig36_global_urban_snapshots.png) matching the
  seamless 4x2 Constele Red dark world map composition in Stadestér 1.0 Figure 36 (page 52).
  """
  fig_w = 1580
  fig_h = 1984
  panel_w = 790
  panel_h = 496
  bg_ocean = "#262626"

  lbl_lons = [it[0] for it in DARK_BASEMAP_COUNTRY_LABELS]
  lbl_lats = [it[1] for it in DARK_BASEMAP_COUNTRY_LABELS]
  lbl_txts = [it[2] for it in DARK_BASEMAP_COUNTRY_LABELS]

  fig = go.Figure()
  overlay_parts = []

  years_order = [0, 1000, 1500, 1800, 1900, 1950, 1975, 2025]
  for idx, yr in enumerate(years_order):
    row = idx // 2
    col = idx % 2
    px0 = col * panel_w
    py0 = row * panel_h

    dom_x0 = px0 / fig_w
    dom_x1 = (px0 + panel_w) / fig_w
    dom_y1 = 1.0 - (py0 / fig_h)
    dom_y0 = 1.0 - ((py0 + panel_h) / fig_h)

    geo_key = "geo" if idx == 0 else f"geo{idx + 1}"

    # Subtle uppercase country labels on dark continents
    fig.add_trace(go.Scattergeo(
      lon=lbl_lons,
      lat=lbl_lats,
      text=lbl_txts,
      mode="text",
      geo=geo_key,
      textfont=dict(family="Karla, sans-serif", size=5.5, color="#5a5a5a"),
      showlegend=False,
      hoverinfo="skip"
    ))

    cities = city_snapshots_by_yr.get(str(yr), [])
    if cities:
      lons = [c[0] for c in cities]
      lats = [c[1] for c in cities]
      pops = [max(1.0, float(c[2])) for c in cities]

      # Physical 1 hectare = 1 inhabitant circle diameter projected onto Miller panel width
      diams = []
      fills = []
      strokes = []
      px_per_deg_lon = panel_w / 348.0
      for lon_v, lat_v, pop_v in zip(lons, lats, pops):
        rad_km = math.sqrt((pop_v * 0.01) / math.pi)
        cos_lat = max(0.35, math.cos(math.radians(min(72.0, abs(lat_v)))))
        rad_deg = rad_km / (111.32 * cos_lat)
        d_px = max(1.65, 2.0 * rad_deg * px_per_deg_lon)
        diams.append(d_px)
        f_col, s_col = constele_city_rgba(pop_v)
        fills.append(f_col)
        strokes.append(s_col)

      fig.add_trace(go.Scattergeo(
        lon=lons,
        lat=lats,
        mode="markers",
        geo=geo_key,
        showlegend=False,
        hoverinfo="skip",
        marker=dict(
          size=diams,
          sizemode="diameter",
          color=fills,
          line=dict(width=0.85, color=strokes)
        )
      ))

    fig.layout[geo_key] = dict(
      domain=dict(x=[dom_x0, dom_x1], y=[dom_y0, dom_y1]),
      projection=dict(type="miller"),
      resolution=50,
      lonaxis=dict(range=[-170, 178]),
      lataxis=dict(range=[-56, 80]),
      showland=True,
      landcolor="#0c0c0c",
      showocean=True,
      oceancolor=bg_ocean,
      showlakes=True,
      lakecolor=bg_ocean,
      showcountries=True,
      countrycolor="#232323",
      countrywidth=0.45,
      showcoastlines=False,
      showframe=False,
      bgcolor=bg_ocean
    )

    disp_yr = "1" if yr == 0 else str(yr)
    overlay_parts.append(f"""
    <div style="position:absolute; left:{px0}px; top:{py0}px; width:{panel_w}px; height:{panel_h}px; pointer-events:none;">
      <div style="position:absolute; left:50%; bottom:12px; transform:translateX(-50%); text-align:center; font-family:'Karla',sans-serif; color:#e5e7eb; line-height:1.28; white-space:nowrap;">
        <div style="font-size:11px; font-weight:400;">Stadestér-GHSL</div>
        <div style="font-size:8.5px; color:#d1d5db;">(Estimated urban populations, 1 hectare = 1 inhabitant, metro-adjusted)</div>
      </div>
      <div style="position:absolute; right:16px; bottom:7px; font-family:'Jost',sans-serif; font-size:35px; font-weight:400; color:#ffffff; letter-spacing:0.01em;">
        {disp_yr}
      </div>
    </div>
    """)

  divider_y = 2 * panel_h
  overlay_parts.append(f"""
  <div style="position:absolute; left:18px; top:12px; font-family:'Jost',sans-serif; font-size:32px; font-weight:400; color:#ffffff;">
    Pre-modern (before 1800)
  </div>
  <div style="position:absolute; left:0; top:{divider_y}px; width:{fig_w}px; height:2px; background:#f3f4f6;"></div>
  <div style="position:absolute; left:18px; top:{divider_y + 12}px; font-family:'Jost',sans-serif; font-size:32px; font-weight:400; color:#ffffff;">
    Modern (post-1800)
  </div>
  """)

  fig.update_layout(
    margin=dict(l=0, r=0, t=0, b=0),
    paper_bgcolor=bg_ocean,
    plot_bgcolor=bg_ocean
  )

  out_png = os.path.join(paths_ctx["micro_dir"], "fig36_global_urban_snapshots.png")
  render_plotly_figure_to_png(
    fig=fig,
    out_png_path=out_png,
    width_px=fig_w,
    height_px=fig_h,
    paths_ctx=paths_ctx,
    scale=2,
    extra_html="\n".join(overlay_parts),
    wait_ms=6000,
    bg=bg_ocean
  )


def build_fig40_urban_gridcell_heatmaps(paths_ctx, snapshots_meta, gridcells_by_yr):
  """
  Renders Figure 40 (3.micro_validation/fig40_urban_gridcell_heatmaps.png) on the exact
  square 1200x1200 logical layout (2400x2400 at scale=2) of Stadestér 1.0 Cell 26.
  """
  meta_map = {m["year"]: m for m in snapshots_meta}
  years_order = [0, 1000, 1500, 1800, 1900, 1950, 1975, 2025]

  subplot_titles = []
  for yr in years_order:
    m = meta_map[yr]
    ds_lbl = "Stadestér" if yr < 1975 else "Stadestér-GHSL"
    yr_lbl = "1AD" if yr == 0 else f"{yr}AD"
    subplot_titles.append(f"{ds_lbl}<br>{yr_lbl}, n={m['gridcell_count']}")

  fig = make_subplots(
    rows=4,
    cols=2,
    specs=[[{"type": "geo"}, {"type": "geo"}] for _ in range(4)],
    subplot_titles=tuple(subplot_titles),
    vertical_spacing=0.046,
    horizontal_spacing=0.105
  )

  fig_w = 1200
  fig_h = 1200

  for idx, yr in enumerate(years_order):
    row = idx // 2 + 1
    col = idx % 2 + 1
    geo_key = "geo" if idx == 0 else f"geo{idx + 1}"
    cells = gridcells_by_yr.get(str(yr), [])

    lons = [c[0] for c in cells]
    lats = [c[1] for c in cells]
    pops = np.array([max(1.0, float(c[2])) for c in cells])
    log_pops = np.log10(pops)

    min_v = float(np.min(pops))
    max_v = float(np.max(pops))
    min_exp = int(math.ceil(math.log10(max(1.0, min_v))))
    max_exp = int(math.floor(math.log10(max(10.0, max_v))))

    tick_vals = [math.log10(min_v)]
    tick_texts = [fmt_semantic(min_v, 0)]
    for exp_i in range(min_exp, max_exp + 1):
      pv = 10.0 ** exp_i
      if pv > min_v * 1.45 and pv < max_v * 0.68:
        tick_vals.append(float(exp_i))
        tick_texts.append(fmt_semantic(pv, 0))
    tick_vals.append(math.log10(max_v))
    tick_texts.append(fmt_semantic(max_v, 0))

    dom_x = list(fig.layout[geo_key].domain.x)
    dom_y = list(fig.layout[geo_key].domain.y)
    cb_x = dom_x[1] + 0.008
    cb_y = 0.5 * (dom_y[0] + dom_y[1])
    cb_len = (dom_y[1] - dom_y[0]) * 0.96

    fig.add_trace(
      go.Scattergeo(
        lon=lons,
        lat=lats,
        mode="markers",
        showlegend=False,
        hoverinfo="skip",
        marker=dict(
          size=2.15,
          color=log_pops,
          colorscale="deep",
          cmin=math.log10(min_v),
          cmax=math.log10(max_v),
          colorbar=dict(
            title=dict(text="Pop.", font=dict(size=12.5, family="Karla, sans-serif")),
            x=cb_x,
            xanchor="left",
            y=cb_y,
            yanchor="middle",
            len=cb_len,
            thickness=11,
            outlinewidth=0.65,
            outlinecolor="#4b5563",
            tickvals=tick_vals,
            ticktext=tick_texts,
            tickfont=dict(size=11, family="Karla, sans-serif")
          )
        )
      ),
      row=row,
      col=col
    )

    # Collision-free inside degree graticule labels matching page 79
    deg_lons = [-171, -171, -171, -171, -171, -161, -120, -60, 0, 60, 120, 169]
    deg_lats = [54.5, 32, 2, -28, -48.5, -56.5, -56.5, -56.5, -56.5, -56.5, -56.5, -56.5]
    deg_txts = ["60°N", "30°N", "0°N", "30°S", "60°S", "180°W", "120°W", "60°W", "0°E", "60°E", "120°E", "180°E"]
    fig.add_trace(
      go.Scattergeo(
        lon=deg_lons,
        lat=deg_lats,
        text=deg_txts,
        mode="text",
        textfont=dict(family="Karla, sans-serif", size=8.2, color="#1f2937"),
        showlegend=False,
        hoverinfo="skip"
      ),
      row=row,
      col=col
    )

    fig.layout[geo_key].update(
      projection=dict(type="equirectangular"),
      resolution=50,
      lataxis=dict(
        range=[-60, 88],
        showgrid=True,
        dtick=30,
        gridcolor="#8b95a5",
        gridwidth=0.5
      ),
      lonaxis=dict(
        range=[-180, 180],
        showgrid=True,
        dtick=60,
        gridcolor="#8b95a5",
        gridwidth=0.5
      ),
      showocean=True,
      oceancolor="#add8e6",
      showland=True,
      landcolor="#d3d3d3",
      showlakes=True,
      lakecolor="#add8e6",
      showcountries=True,
      countrycolor="#888888",
      countrywidth=0.45,
      showcoastlines=True,
      coastlinecolor="#777777",
      coastlinewidth=0.45,
      showframe=True,
      framecolor="#374151",
      framewidth=0.85
    )

  for ann in fig.layout.annotations:
    ann.font = dict(family="Karla, sans-serif", size=14.5, color="#1f2937")
    ann.y = ann.y - 0.004

  fig.update_layout(
    title=dict(
      text="Stadestér Urban Population Heatmaps by Year (Log Scale)",
      x=0.5,
      y=0.982,
      xanchor="center",
      font=dict(family="Jost, sans-serif", size=20, color="#1f2937")
    ),
    margin=dict(l=28, r=86, t=92, b=22),
    paper_bgcolor="#ffffff",
    plot_bgcolor="#ffffff"
  )

  out_png = os.path.join(paths_ctx["micro_dir"], "fig40_urban_gridcell_heatmaps.png")
  render_plotly_figure_to_png(
    fig=fig,
    out_png_path=out_png,
    width_px=fig_w,
    height_px=fig_h,
    paths_ctx=paths_ctx,
    scale=2,
    wait_ms=5500
  )


def run_micro_r_charts(paths_ctx):
  """
  Executes C_plot_micro_charts.R to render Figure 37 (Regional Urbanisation Rates).
  """
  rscript_bin = paths_ctx["config"]["paths"].get("rscript_bin", "Rscript")
  if not os.path.exists(rscript_bin):
    rscript_bin = "Rscript"
  r_script = os.path.join(paths_ctx["vis_dir"], "C_plot_micro_charts.R")
  subprocess.run(
    [rscript_bin, r_script, paths_ctx["vis_dir"].replace("\\", "/")],
    cwd=paths_ctx["vis_dir"],
    check=True
  )


def main():
  paths_ctx = get_project_paths()
  print("[3.visualisations/C] Generating Micro-Validation figures (Figs 36, 37, 40)...")

  snap_meta_path = os.path.join(paths_ctx["results_dir"], "micro_urban_gridcell_snapshots.json")
  with open(snap_meta_path, "r", encoding="utf-8") as handle:
    snap_meta = json.load(handle)["snapshots"]

  city_snaps_path = os.path.join(paths_ctx["compiled_dir"], "urban_city_snapshots.json")
  with open(city_snaps_path, "r", encoding="utf-8") as handle:
    city_snaps_by_yr = json.load(handle)

  gridcells_path = os.path.join(paths_ctx["compiled_dir"], "urban_gridcell_snapshots.json")
  with open(gridcells_path, "r", encoding="utf-8") as handle:
    gridcells_by_yr = json.load(handle)

  build_fig36_constele_snapshots(paths_ctx, city_snaps_by_yr)
  build_fig40_urban_gridcell_heatmaps(paths_ctx, snap_meta, gridcells_by_yr)
  run_micro_r_charts(paths_ctx)


if __name__ == "__main__":
  main()
