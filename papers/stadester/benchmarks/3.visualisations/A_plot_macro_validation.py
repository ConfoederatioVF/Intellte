"""
Step A (Macro-Validation): Generates Figure 25 (Global Centres of Population map via
Plotly Scattergeo + Natural Earth 50m vectors) and invokes A_plot_macro_charts.R for
Figures 26a, 26b, and 27.
"""

import json
import os
import subprocess
import sys

import plotly.graph_objects as go

from vis_helpers import get_project_paths, render_plotly_figure_to_png

sys.stdout.reconfigure(encoding="utf-8")


def build_fig25_centres_of_population(paths_ctx):
  """
  Renders Figure 25 (1.macro_validation/fig25_centres_of_population.png) matching the
  original Stadestér 1.0 Centres of Population cartographic design.

  @param paths_ctx Project paths and config dictionary.
  """
  cog_path = os.path.join(paths_ctx["results_dir"], "macro_centres_of_gravity.json")
  with open(cog_path, "r", encoding="utf-8") as handle:
    cog_data = json.load(handle)

  trajs = cog_data["trajectories"]
  base_pts = trajs["stadester_base"]
  ghsl_pts = trajs["stadester_ghsl_post_1975"]
  reba_pts = trajs["reba_published"]
  mc_pts = trajs["mulligan_crampton_published"]

  base_bench_years = {-3000, 0, 1000, 1500, 1800, 1900, 1950, 1975, 2025}
  base_bench_pts = [pt for pt in base_pts if pt["year"] in base_bench_years]

  # Connect Base 1975 to GHSL 1975-2025 trajectory just as in Stadestér 1.0 Figure 25
  base_1975 = next((pt for pt in base_pts if pt["year"] == 1975), None)
  ghsl_line_lons = ([base_1975["lon"]] if base_1975 else []) + [pt["lon"] for pt in ghsl_pts]
  ghsl_line_lats = ([base_1975["lat"]] if base_1975 else []) + [pt["lat"] for pt in ghsl_pts]
  ghsl_bench_pts = [pt for pt in ghsl_pts if pt["year"] in {1975, 2025}]

  fig = go.Figure()

  # 1. Stadestér Base full trajectory (continuous royal blue line + benchmark dots)
  fig.add_trace(go.Scattergeo(
    lon=[pt["lon"] for pt in base_pts],
    lat=[pt["lat"] for pt in base_pts],
    mode="lines",
    line=dict(color="#0018f9", width=2.4),
    showlegend=False,
    hoverinfo="skip"
  ))
  fig.add_trace(go.Scattergeo(
    lon=[pt["lon"] for pt in base_bench_pts],
    lat=[pt["lat"] for pt in base_bench_pts],
    mode="markers",
    marker=dict(color="#0018f9", size=7.5),
    showlegend=False,
    hoverinfo="skip"
  ))

  # 2. Reba et al. trajectory & benchmark dots
  fig.add_trace(go.Scattergeo(
    lon=[pt["lon"] for pt in reba_pts],
    lat=[pt["lat"] for pt in reba_pts],
    mode="lines+markers",
    line=dict(color="#32d74b", width=2.4),
    marker=dict(color="#32d74b", size=7.5),
    showlegend=False,
    hoverinfo="skip"
  ))

  # 3. Mulligan & Crampton trajectory & benchmark dots
  fig.add_trace(go.Scattergeo(
    lon=[pt["lon"] for pt in mc_pts],
    lat=[pt["lat"] for pt in mc_pts],
    mode="lines+markers",
    line=dict(color="#9c6b78", width=2.4),
    marker=dict(color="#9c6b78", size=7.5),
    showlegend=False,
    hoverinfo="skip"
  ))

  # 4. Stadestér-GHSL post-1975 splice trajectory & benchmark dots
  fig.add_trace(go.Scattergeo(
    lon=ghsl_line_lons,
    lat=ghsl_line_lats,
    mode="lines",
    line=dict(color="#f90b0b", width=2.5),
    showlegend=False,
    hoverinfo="skip"
  ))
  fig.add_trace(go.Scattergeo(
    lon=[pt["lon"] for pt in ghsl_bench_pts],
    lat=[pt["lat"] for pt in ghsl_bench_pts],
    mode="markers",
    marker=dict(color="#f90b0b", size=7.5),
    showlegend=False,
    hoverinfo="skip"
  ))

  # Crisp collision-free benchmark year labels positioned directly in geo coordinates
  label_specs = []
  base_offsets = {
    -3000: (0.2, -1.05, "middle center"),
    0: (-1.15, -0.75, "middle right"),
    1000: (0.0, 0.95, "middle center"),
    1500: (-1.15, -0.15, "middle right"),
    1800: (-1.05, 0.85, "middle right"),
    1900: (0.0, -1.05, "middle center"),
    1950: (0.95, -0.75, "middle left"),
    1975: (-0.85, -1.05, "middle right"),
    2025: (-0.55, 1.05, "middle center")
  }
  for pt in base_bench_pts:
    yr = pt["year"]
    disp = "1" if yr == 0 else str(yr)
    dx, dy, pos = base_offsets.get(yr, (0.0, 0.9, "middle center"))
    label_specs.append((pt["lon"] + dx, pt["lat"] + dy, disp, pos))

  reba_offsets = {
    -3700: (1.55, -0.55, "middle left"),
    1: (0.55, -0.95, "middle left"),
    1000: (-0.9, 0.85, "middle right"),
    1500: (1.15, 0.45, "middle left"),
    1800: (0.0, 0.95, "middle center"),
    1900: (0.2, 1.0, "middle center"),
    2000: (1.15, 0.15, "middle left")
  }
  for pt in reba_pts:
    yr = pt["year"]
    if yr == 1000:
      continue
    dx, dy, pos = reba_offsets.get(yr, (0.8, 0.5, "middle left"))
    label_specs.append((pt["lon"] + dx, pt["lat"] + dy, str(yr), pos))

  mc_offsets = {
    1950: (1.15, 0.45, "middle left"),
    1975: (1.15, 0.55, "middle left"),
    2010: (1.05, -0.15, "middle left")
  }
  for pt in mc_pts:
    yr = pt["year"]
    dx, dy, pos = mc_offsets.get(yr, (0.9, 0.3, "middle left"))
    label_specs.append((pt["lon"] + dx, pt["lat"] + dy, str(yr), pos))

  ghsl_offsets = {
    1975: (1.15, -0.45, "middle left"),
    2025: (-0.2, -1.1, "middle center")
  }
  for pt in ghsl_bench_pts:
    yr = pt["year"]
    dx, dy, pos = ghsl_offsets.get(yr, (0.9, -0.5, "middle left"))
    label_specs.append((pt["lon"] + dx, pt["lat"] + dy, str(yr), pos))

  fig.add_trace(go.Scattergeo(
    lon=[it[0] for it in label_specs],
    lat=[it[1] for it in label_specs],
    text=[it[2] for it in label_specs],
    textposition=[it[3] for it in label_specs],
    mode="text",
    textfont=dict(family="Karla, sans-serif", size=12, color="#111827"),
    showlegend=False,
    hoverinfo="skip"
  ))

  fig.update_geos(
    projection_type="equirectangular",
    resolution=50,
    lonaxis=dict(range=[-4.5, 76.5]),
    lataxis=dict(range=[8.5, 54.2]),
    showland=True,
    landcolor="#e5ecf6",
    showocean=True,
    oceancolor="#ffffff",
    showlakes=True,
    lakecolor="#ffffff",
    showcountries=True,
    countrycolor="#64748b",
    countrywidth=0.75,
    showcoastlines=True,
    coastlinecolor="#64748b",
    coastlinewidth=0.75,
    showframe=False
  )

  fig.update_layout(
    margin=dict(l=0, r=0, t=0, b=0),
    paper_bgcolor="#ffffff",
    plot_bgcolor="#ffffff"
  )

  # Authentic 1.0 top-left title strips and bottom-right legend card in Jost/Karla
  overlay_html = """
  <div style="position:absolute; top:22px; left:0; display:flex; flex-direction:column; align-items:flex-start; pointer-events:none;">
    <div style="background:#ffffff; padding:6px 18px 4px 28px; font-family:'Jost',sans-serif; font-size:30px; font-weight:400; color:#111111; line-height:1.15; letter-spacing:0.01em;">
      Centres of Population by Dataset
    </div>
    <div style="background:#ffffff; padding:2px 20px 8px 28px; font-family:'Jost',sans-serif; font-size:30px; font-weight:400; color:#111111; line-height:1.15; letter-spacing:0.01em;">
      (3700BC - 2025AD)
    </div>
  </div>

  <div style="position:absolute; right:0; bottom:0; width:280px; background:#ffffff; padding:16px 22px 18px 22px; box-sizing:border-box; font-family:'Karla',sans-serif; color:#111111;">
    <div style="display:flex; align-items:center; gap:14px; margin-bottom:14px;">
      <span style="width:34px; text-align:center; font-size:12px; color:#374151;">1900</span>
      <span style="font-size:17px; font-weight:500;">Benchmark Year</span>
    </div>
    <div style="display:flex; align-items:flex-start; gap:14px; margin-bottom:10px;">
      <div style="width:34px; height:22px; position:relative; flex-shrink:0;">
        <div style="position:absolute; top:10px; left:2px; right:2px; height:2.5px; background:#9c6b78;"></div>
        <div style="position:absolute; top:6px; left:12px; width:10px; height:10px; border-radius:50%; background:#9c6b78;"></div>
      </div>
      <div style="font-size:17px; line-height:1.25;">Mulligan &amp;<br/>Crampton</div>
    </div>
    <div style="display:flex; align-items:center; gap:14px; margin-bottom:10px;">
      <div style="width:34px; height:20px; position:relative; flex-shrink:0;">
        <div style="position:absolute; top:9px; left:2px; right:2px; height:2.5px; background:#0018f9;"></div>
        <div style="position:absolute; top:5px; left:12px; width:10px; height:10px; border-radius:50%; background:#0018f9;"></div>
      </div>
      <div style="font-size:17px;">Stadestér Base</div>
    </div>
    <div style="display:flex; align-items:center; gap:14px; margin-bottom:10px;">
      <div style="width:34px; height:20px; position:relative; flex-shrink:0;">
        <div style="position:absolute; top:9px; left:2px; right:2px; height:2.5px; background:#f90b0b;"></div>
        <div style="position:absolute; top:5px; left:12px; width:10px; height:10px; border-radius:50%; background:#f90b0b;"></div>
      </div>
      <div style="font-size:17px;">Stadestér-GHSL</div>
    </div>
    <div style="display:flex; align-items:center; gap:14px;">
      <div style="width:34px; height:20px; position:relative; flex-shrink:0;">
        <div style="position:absolute; top:9px; left:2px; right:2px; height:2.5px; background:#32d74b;"></div>
        <div style="position:absolute; top:5px; left:12px; width:10px; height:10px; border-radius:50%; background:#32d74b;"></div>
      </div>
      <div style="font-size:17px;">Reba et al.</div>
    </div>
  </div>
  """

  out_png = os.path.join(paths_ctx["macro_dir"], "fig25_centres_of_population.png")
  render_plotly_figure_to_png(
    fig=fig,
    out_png_path=out_png,
    width_px=1400,
    height_px=790,
    paths_ctx=paths_ctx,
    scale=2,
    extra_html=overlay_html,
    wait_ms=4000
  )


def run_macro_r_charts(paths_ctx):
  """
  Executes A_plot_macro_charts.R to render Figures 26a, 26b, and 27.

  @param paths_ctx Project paths and config dictionary.
  """
  rscript_bin = paths_ctx["config"]["paths"].get("rscript_bin", "Rscript")
  if not os.path.exists(rscript_bin):
    rscript_bin = "Rscript"
  r_script = os.path.join(paths_ctx["vis_dir"], "A_plot_macro_charts.R")
  subprocess.run(
    [rscript_bin, r_script, paths_ctx["vis_dir"].replace("\\", "/")],
    cwd=paths_ctx["vis_dir"],
    check=True
  )


def main():
  paths_ctx = get_project_paths()
  print("[3.visualisations/A] Generating Macro-Validation figures (Figs 25, 26a, 26b, 27)...")
  build_fig25_centres_of_population(paths_ctx)
  run_macro_r_charts(paths_ctx)


if __name__ == "__main__":
  main()
