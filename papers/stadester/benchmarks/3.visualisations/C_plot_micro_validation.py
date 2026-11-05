"""
Step C (Micro-Validation): Generates Figure 36 (Constele Red dark global urban snapshots),
Figure 40 (4x2 Plotly Scattergeo log-scale urban gridcell heatmaps), and invokes
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

from vis_helpers import fmt_semantic, get_project_paths, render_plotly_figure_to_png

sys.stdout.reconfigure(encoding="utf-8")


def build_fig36_constele_snapshots(paths_ctx, snapshots_meta, gridcells_by_yr):
  """
  Renders Figure 36 (3.micro_validation/fig36_global_urban_snapshots.png) matching the
  8-panel Constele Red dark world map composition in Stadestér 1.0 Figure 36 (page 52).
  """
  fig_w = 1600
  fig_h = 1920
  panel_w = 800
  panel_h = 465

  fig = go.Figure()
  overlay_parts = []

  years_order = [0, 1000, 1500, 1800, 1900, 1950, 1975, 2025]
  for idx, yr in enumerate(years_order):
    row = idx // 2
    col = idx % 2
    px0 = col * panel_w
    py0 = (18 if row < 2 else 42) + row * panel_h

    dom_x0 = (px0 + 12) / fig_w
    dom_x1 = (px0 + panel_w - 12) / fig_w
    dom_y1 = 1.0 - ((py0 + 10) / fig_h)
    dom_y0 = 1.0 - ((py0 + panel_h - 32) / fig_h)

    geo_key = "geo" if idx == 0 else f"geo{idx + 1}"
    cells = gridcells_by_yr.get(str(yr), [])

    if cells:
      lons = [c[0] for c in cells]
      lats = [c[1] for c in cells]
      pops = [max(1.0, float(c[2])) for c in cells]
      # Fine Constele Red 1ha=1ihb proportional sizing & cyan-to-emerald colour ramp
      sizes = [max(1.15, min(9.5, 0.55 + math.sqrt(p) * 0.0024)) for p in pops]
      log_p = [math.log10(p) for p in pops]

      fig.add_trace(go.Scattergeo(
        lon=lons,
        lat=lats,
        mode="markers",
        geo=geo_key,
        showlegend=False,
        hoverinfo="skip",
        marker=dict(
          size=sizes,
          color=log_p,
          cmin=2.5,
          cmax=7.2,
          colorscale=[
            [0.0, "#2563eb"],
            [0.35, "#38bdf8"],
            [0.70, "#2dd4bf"],
            [1.0, "#4ade80"]
          ],
          opacity=0.68,
          line=dict(width=0.25, color="rgba(10, 20, 30, 0.55)")
        )
      ))
    else:
      fig.add_trace(go.Scattergeo(lon=[], lat=[], geo=geo_key, showlegend=False))

    fig.layout[geo_key] = dict(
      domain=dict(x=[dom_x0, dom_x1], y=[dom_y0, dom_y1]),
      projection=dict(type="miller"),
      resolution=50,
      lonaxis=dict(range=[-168, 178]),
      lataxis=dict(range=[-56, 82]),
      showland=True,
      landcolor="#0a0a0a",
      showocean=True,
      oceancolor="#222222",
      showlakes=True,
      lakecolor="#222222",
      showcountries=True,
      countrycolor="#1b1b1b",
      countrywidth=0.45,
      showcoastlines=False,
      showframe=False,
      bgcolor="#222222"
    )

    disp_yr = "1" if yr == 0 else str(yr)
    overlay_parts.append(f"""
    <div style="position:absolute; left:{px0}px; top:{py0}px; width:{panel_w}px; height:{panel_h}px; pointer-events:none;">
      <div style="position:absolute; left:50%; bottom:15px; transform:translateX(-50%); text-align:center; font-family:'Karla',sans-serif; font-size:7.5px; color:rgba(229,231,235,0.78); line-height:1.25;">
        Stadestér-GHSL<br/>Estimated urban population (1 hectare = 1 inhabitant, metro-adjusted)
      </div>
      <div style="position:absolute; right:18px; bottom:10px; font-family:'Jost',sans-serif; font-size:26px; font-weight:400; color:#f9fafb; letter-spacing:0.01em;">
        {disp_yr}
      </div>
    </div>
    """)

  divider_y = 18 + 2 * panel_h + 12
  overlay_parts.append(f"""
  <div style="position:absolute; left:20px; top:14px; font-family:'Jost',sans-serif; font-size:26px; font-weight:400; color:#f9fafb;">
    Pre-modern (before 1800)
  </div>
  <div style="position:absolute; left:0; top:{divider_y}px; width:{fig_w}px; height:1.5px; background:#e5e7eb;"></div>
  <div style="position:absolute; left:20px; top:{divider_y + 12}px; font-family:'Jost',sans-serif; font-size:26px; font-weight:400; color:#f9fafb;">
    Modern (post-1800)
  </div>
  """)

  fig.update_layout(
    margin=dict(l=0, r=0, t=0, b=0),
    paper_bgcolor="#222222",
    plot_bgcolor="#222222"
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
    wait_ms=5500,
    bg="#222222"
  )


def build_fig40_urban_gridcell_heatmaps(paths_ctx, snapshots_meta, gridcells_by_yr):
  """
  Renders Figure 40 (3.micro_validation/fig40_urban_gridcell_heatmaps.png) ported directly
  from Stadestér 1.0's Stadestér Sample Size Cell 26 (stadester_benchmark_rasters.png).
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
    vertical_spacing=0.055,
    horizontal_spacing=0.095
  )

  # Pre-set layout geos so domains are available for per-subplot colourbars
  fig_w = 1480
  fig_h = 1760

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
      if pv > min_v * 1.35 and pv < max_v * 0.72:
        tick_vals.append(float(exp_i))
        tick_texts.append(fmt_semantic(pv, 0))
    tick_vals.append(math.log10(max_v))
    tick_texts.append(fmt_semantic(max_v, 0))

    # Compute colourbar placement aligned directly to this subplot's geo domain
    dom_x = list(fig.layout[geo_key].domain.x)
    dom_y = list(fig.layout[geo_key].domain.y)
    cb_x = dom_x[1] + 0.006
    cb_y = 0.5 * (dom_y[0] + dom_y[1])
    cb_len = (dom_y[1] - dom_y[0]) * 0.94

    fig.add_trace(
      go.Scattergeo(
        lon=lons,
        lat=lats,
        mode="markers",
        showlegend=False,
        hoverinfo="skip",
        marker=dict(
          size=2.1,
          color=log_pops,
          colorscale="deep",
          cmin=math.log10(min_v),
          cmax=math.log10(max_v),
          colorbar=dict(
            title=dict(text="Pop.", font=dict(size=10.5, family="Karla, sans-serif")),
            x=cb_x,
            xanchor="left",
            y=cb_y,
            yanchor="middle",
            len=cb_len,
            thickness=10,
            outlinewidth=0.6,
            outlinecolor="#4b5563",
            tickvals=tick_vals,
            ticktext=tick_texts,
            tickfont=dict(size=9.5, family="Karla, sans-serif")
          )
        )
      ),
      row=row,
      col=col
    )

    # Inside degree graticule labels matching page 79
    deg_lons = [-173, -173, -173, -173, -173, -172, -120, -60, 0, 60, 120, 170]
    deg_lats = [62, 32, 2, -28, -56, -57, -57, -57, -57, -57, -57, -57]
    deg_txts = ["60°N", "30°N", "0°N", "30°S", "60°S", "180°W", "120°W", "60°W", "0°E", "60°E", "120°E", "180°E"]
    fig.add_trace(
      go.Scattergeo(
        lon=deg_lons,
        lat=deg_lats,
        text=deg_txts,
        mode="text",
        textfont=dict(family="Karla, sans-serif", size=7.2, color="#374151"),
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
        gridcolor="#9ca3af",
        gridwidth=0.45
      ),
      lonaxis=dict(
        range=[-180, 180],
        showgrid=True,
        dtick=60,
        gridcolor="#9ca3af",
        gridwidth=0.45
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
      framecolor="#4b5563",
      framewidth=0.8
    )

  for ann in fig.layout.annotations:
    ann.font = dict(family="Karla, sans-serif", size=12, color="#1f2937")

  fig.update_layout(
    title=dict(
      text="Stadestér Urban Population Heatmaps by Year (Log Scale)",
      x=0.5,
      xanchor="center",
      font=dict(family="Jost, sans-serif", size=17, color="#1f2937")
    ),
    margin=dict(l=28, r=92, t=72, b=24),
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

  gridcells_path = os.path.join(paths_ctx["compiled_dir"], "urban_gridcell_snapshots.json")
  with open(gridcells_path, "r", encoding="utf-8") as handle:
    gridcells_by_yr = json.load(handle)

  build_fig36_constele_snapshots(paths_ctx, snap_meta, gridcells_by_yr)
  build_fig40_urban_gridcell_heatmaps(paths_ctx, snap_meta, gridcells_by_yr)
  run_micro_r_charts(paths_ctx)


if __name__ == "__main__":
  main()
