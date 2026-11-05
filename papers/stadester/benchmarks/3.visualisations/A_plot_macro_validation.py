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
  exact 809x500 optical proportions, map framing, and typography of Stadestér 1.0 Figure 25.

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
    line=dict(color="#0018f9", width=2.2),
    showlegend=False,
    hoverinfo="skip"
  ))
  fig.add_trace(go.Scattergeo(
    lon=[pt["lon"] for pt in base_bench_pts],
    lat=[pt["lat"] for pt in base_bench_pts],
    mode="markers",
    marker=dict(color="#0018f9", size=7.2),
    showlegend=False,
    hoverinfo="skip"
  ))

  # 2. Reba et al. trajectory & benchmark dots
  fig.add_trace(go.Scattergeo(
    lon=[pt["lon"] for pt in reba_pts],
    lat=[pt["lat"] for pt in reba_pts],
    mode="lines+markers",
    line=dict(color="#32d74b", width=2.2),
    marker=dict(color="#32d74b", size=7.2),
    showlegend=False,
    hoverinfo="skip"
  ))

  # 3. Mulligan & Crampton trajectory & benchmark dots
  fig.add_trace(go.Scattergeo(
    lon=[pt["lon"] for pt in mc_pts],
    lat=[pt["lat"] for pt in mc_pts],
    mode="lines+markers",
    line=dict(color="#9c6b78", width=2.2),
    marker=dict(color="#9c6b78", size=7.2),
    showlegend=False,
    hoverinfo="skip"
  ))

  # 4. Stadestér-GHSL post-1975 splice trajectory & benchmark dots
  fig.add_trace(go.Scattergeo(
    lon=ghsl_line_lons,
    lat=ghsl_line_lats,
    mode="lines",
    line=dict(color="#f90b0b", width=2.3),
    showlegend=False,
    hoverinfo="skip"
  ))
  fig.add_trace(go.Scattergeo(
    lon=[pt["lon"] for pt in ghsl_bench_pts],
    lat=[pt["lat"] for pt in ghsl_bench_pts],
    mode="markers",
    marker=dict(color="#f90b0b", size=7.2),
    showlegend=False,
    hoverinfo="skip"
  ))

  # Collision-free benchmark year labels using exact geometric centres ("middle center")
  label_specs = []
  base_offsets = {
    -3000: (-2.25, 0.55),
    0: (-1.35, -1.05),
    1000: (-1.65, 0.30),
    1500: (-2.30, -0.65),
    1800: (0.15, 1.35),
    1900: (0.0, 1.35),
    1950: (-1.95, -0.55),
    1975: (-0.25, -1.45),
    2025: (2.15, -0.35)
  }
  for pt in base_bench_pts:
    yr = pt["year"]
    disp = "1" if yr == 0 else str(yr)
    dx, dy = base_offsets.get(yr, (0.0, 1.2))
    label_specs.append((pt["lon"] + dx, pt["lat"] + dy, disp))

  reba_offsets = {
    -3700: (0.35, -1.35),
    1: (1.35, -0.85),
    1500: (1.95, 0.25),
    1800: (0.35, 1.35),
    1900: (1.95, -0.95),
    2000: (-2.15, 0.35)
  }
  for pt in reba_pts:
    yr = pt["year"]
    if yr == 1000:
      continue
    dx, dy = reba_offsets.get(yr, (1.2, 0.5))
    label_specs.append((pt["lon"] + dx, pt["lat"] + dy, str(yr)))

  mc_offsets = {
    1950: (0.25, 1.25),
    1975: (0.85, 1.20),
    2010: (-0.35, -1.35)
  }
  for pt in mc_pts:
    yr = pt["year"]
    dx, dy = mc_offsets.get(yr, (1.0, 0.5))
    label_specs.append((pt["lon"] + dx, pt["lat"] + dy, str(yr)))

  ghsl_offsets = {
    1975: (2.15, 0.15),
    2025: (-0.15, -1.45)
  }
  for pt in ghsl_bench_pts:
    yr = pt["year"]
    dx, dy = ghsl_offsets.get(yr, (1.5, -0.5))
    label_specs.append((pt["lon"] + dx, pt["lat"] + dy, str(yr)))

  fig.add_trace(go.Scattergeo(
    lon=[it[0] for it in label_specs],
    lat=[it[1] for it in label_specs],
    text=[it[2] for it in label_specs],
    textposition="middle center",
    mode="text",
    textfont=dict(family="Karla, sans-serif", size=11.5, color="#0f172a"),
    showlegend=False,
    hoverinfo="skip"
  ))

  # Exact 1.0 geographic window framing Italy to Western India (809x500 aspect)
  fig.update_geos(
    projection_type="equirectangular",
    resolution=50,
    lonaxis=dict(range=[6.5, 73.5]),
    lataxis=dict(range=[8.0, 49.5]),
    showland=True,
    landcolor="#e5ecf6",
    showocean=True,
    oceancolor="#ffffff",
    showlakes=True,
    lakecolor="#ffffff",
    showcountries=True,
    countrycolor="#526071",
    countrywidth=0.7,
    showcoastlines=True,
    coastlinecolor="#526071",
    coastlinewidth=0.7,
    showframe=False
  )

  fig.update_layout(
    margin=dict(l=0, r=0, t=0, b=0),
    paper_bgcolor="#ffffff",
    plot_bgcolor="#ffffff"
  )

  # Authentic 1.0 top-left title strips and bottom-right legend card scaled to 809x500 logical viewport
  overlay_html = """
  <div style="position:absolute; top:14px; left:0; display:flex; flex-direction:column; align-items:flex-start; pointer-events:none;">
    <div style="background:#ffffff; padding:4px 16px 2px 22px; font-family:'Jost',sans-serif; font-size:27px; font-weight:400; color:#111111; line-height:1.15; letter-spacing:0.01em;">
      Centres of Population by Dataset
    </div>
    <div style="background:#ffffff; padding:1px 18px 6px 22px; font-family:'Jost',sans-serif; font-size:27px; font-weight:400; color:#111111; line-height:1.15; letter-spacing:0.01em;">
      (3700BC - 2025AD)
    </div>
  </div>

  <div style="position:absolute; right:0; bottom:0; width:212px; background:#ffffff; padding:12px 14px 14px 16px; box-sizing:border-box; font-family:'Karla',sans-serif; color:#111111;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:11px;">
      <span style="width:28px; text-align:center; font-size:10.5px; color:#1f2937;">1900</span>
      <span style="font-size:15.5px; font-weight:400;">Benchmark Year</span>
    </div>
    <div style="display:flex; align-items:flex-start; gap:10px; margin-bottom:8px;">
      <div style="width:28px; height:20px; position:relative; flex-shrink:0;">
        <div style="position:absolute; top:9px; left:1px; right:1px; height:2.2px; background:#9c6b78;"></div>
        <div style="position:absolute; top:5.5px; left:9.5px; width:9px; height:9px; border-radius:50%; background:#9c6b78;"></div>
      </div>
      <div style="font-size:15.5px; line-height:1.22;">Mulligan &amp;<br/>Crampton</div>
    </div>
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
      <div style="width:28px; height:18px; position:relative; flex-shrink:0;">
        <div style="position:absolute; top:8px; left:1px; right:1px; height:2.2px; background:#0018f9;"></div>
        <div style="position:absolute; top:4.5px; left:9.5px; width:9px; height:9px; border-radius:50%; background:#0018f9;"></div>
      </div>
      <div style="font-size:15.5px;">Stadestér Base</div>
    </div>
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;">
      <div style="width:28px; height:18px; position:relative; flex-shrink:0;">
        <div style="position:absolute; top:8px; left:1px; right:1px; height:2.2px; background:#f90b0b;"></div>
        <div style="position:absolute; top:4.5px; left:9.5px; width:9px; height:9px; border-radius:50%; background:#f90b0b;"></div>
      </div>
      <div style="font-size:15.5px;">Stadestér-GHSL</div>
    </div>
    <div style="display:flex; align-items:center; gap:10px;">
      <div style="width:28px; height:18px; position:relative; flex-shrink:0;">
        <div style="position:absolute; top:8px; left:1px; right:1px; height:2.2px; background:#32d74b;"></div>
        <div style="position:absolute; top:4.5px; left:9.5px; width:9px; height:9px; border-radius:50%; background:#32d74b;"></div>
      </div>
      <div style="font-size:15.5px;">Reba et al.</div>
    </div>
  </div>
  """

  out_png = os.path.join(paths_ctx["macro_dir"], "fig25_centres_of_population.png")
  render_plotly_figure_to_png(
    fig=fig,
    out_png_path=out_png,
    width_px=809,
    height_px=500,
    paths_ctx=paths_ctx,
    scale=3,
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
