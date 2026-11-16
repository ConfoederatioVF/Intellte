# -*- coding: utf-8 -*-
import os
import sys
import json
import math
from pathlib import Path
import numpy as np
from PIL import Image
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.patches import Polygon as MplPolygon, Patch
from matplotlib.collections import PatchCollection
from matplotlib.lines import Line2D
import matplotlib.colors as mcolors
import shapely
from shapely.geometry import shape, box, Polygon, LineString, mapping
from shapely.ops import unary_union, transform as shp_transform

polaris_root = Path(r"f:\Active Projects\Project 1509 - SVEA\histmap\1.data_raw\population_regional\POLARIS")
repo_root = Path(r"f:\Active Projects\Project 1509 - SVEA")
cache_dir = polaris_root / "_shared" / "_gis_cache"
hist_dir = cache_dir / "historical_layers"
fig_dir = polaris_root / "figures"
fig_dir.mkdir(parents=True, exist_ok=True)

sys.path.insert(0, str(cache_dir))
from polaris_map_helper import (
    AlbersEqualAreaConic, PROJ_WEST, PROJ_EAST,
    _prepare_and_project, _proj_geom_to_patches, _draw_proj_lines
)

with open(cache_dir / "polaris_data_dump.json", "r", encoding="utf-8") as f:
    DUMP = json.load(f)

with open(cache_dir / "polaris_choropleth_and_urban_data.json", "r", encoding="utf-8") as f:
    CHORO_DATA = json.load(f)["epochs"]

land_gj = json.loads((cache_dir / "ne_50m_land.geojson").read_text(encoding="utf-8"))
lakes_gj = json.loads((cache_dir / "ne_50m_lakes.geojson").read_text(encoding="utf-8"))
rivers_gj = json.loads((cache_dir / "ne_50m_rivers_lake_centerlines.geojson").read_text(encoding="utf-8"))
adm1_gj = json.loads((cache_dir / "ne_10m_admin_1_ru_ua_by.geojson").read_text(encoding="utf-8"))

def preproject_basemap(proj):
    land_p = []
    for f in land_gj["features"]:
        if f.get("geometry"):
            pg = _prepare_and_project(shape(f["geometry"]), proj, 0.35)
            land_p.extend(_proj_geom_to_patches(pg))
    lake_p = []
    for f in lakes_gj["features"]:
        if f.get("geometry"):
            pg = _prepare_and_project(shape(f["geometry"]), proj, 0.25)
            lake_p.extend(_proj_geom_to_patches(pg))
    river_g = []
    for f in rivers_gj["features"]:
        if f.get("geometry"):
            pg = _prepare_and_project(shape(f["geometry"]), proj, 0.25)
            if not pg.is_empty:
                river_g.append(pg)
    return land_p, lake_p, river_g

print("Pre-projecting basemaps...")
land_east, lakes_east, rivers_east = preproject_basemap(PROJ_EAST)

def draw_basemap(ax, land_p, lake_p, river_g):
    ax.set_facecolor("#d9ebf7")
    if land_p:
        ax.add_collection(PatchCollection([MplPolygon(p.get_xy(), closed=True) for p in land_p], facecolor="#f2efe9", edgecolor="#b8b2a6", linewidths=0.35, zorder=1.0))
    for rg in river_g:
        _draw_proj_lines(ax, rg, color="#2b6cb0", linewidth=0.38, alpha=0.50, zorder=4.0)
    if lake_p:
        ax.add_collection(PatchCollection([MplPolygon(p.get_xy(), closed=True) for p in lake_p], facecolor="#b3d9ff", edgecolor="#2b6cb0", linewidths=0.28, zorder=4.0))

def draw_clean_graticule(ax, proj, xlim, ylim, lats, lons, lon_span):
    lon_grid = np.linspace(lon_span[0], lon_span[1], 240)
    lat_grid = np.linspace(34.0, 82.0, 160)
    x0, x1 = xlim
    y0, y1 = ylim
    box_view = box(x0, y0, x1, y1)

    for lat_v in lats:
        px, py = proj.fwd_xy(lon_grid, np.full_like(lon_grid, float(lat_v)))
        ax.plot(px, py, linestyle="--", linewidth=0.36, color="#5f6f7f", alpha=0.38, zorder=4.2)
        ls = LineString(np.column_stack([px, py])).intersection(box_view)
        if not ls.is_empty:
            pts = list(ls.coords) if ls.geom_type == "LineString" else list(ls.geoms[0].coords)
            if pts:
                lx, ly = pts[0]
                # Omit 45°N label on left border to prevent collision with southwest borderland callout boxes
                if lat_v in [55, 65] and (y0 + (y1 - y0) * 0.10) < ly < (y1 - (y1 - y0) * 0.10) and lx < (x0 + (x1 - x0) * 0.10):
                    ax.text(
                        x0 + (x1 - x0) * 0.015, ly, f"{lat_v}°N",
                        fontsize=6.0, color="#3b4c5e", ha="left", va="center", zorder=4.5,
                        bbox=dict(boxstyle="round,pad=0.08", facecolor="white", edgecolor="none", alpha=0.65)
                    )

    for lon_v in lons:
        px, py = proj.fwd_xy(np.full_like(lat_grid, float(lon_v)), lat_grid)
        ax.plot(px, py, linestyle="--", linewidth=0.36, color="#5f6f7f", alpha=0.38, zorder=4.2)
        ls = LineString(np.column_stack([px, py])).intersection(box_view)
        if not ls.is_empty:
            pts = list(ls.coords) if ls.geom_type == "LineString" else list(ls.geoms[0].coords)
            if pts:
                bx, by = min(pts, key=lambda p: p[1])
                if by < y0 + (y1 - y0) * 0.14 and (x0 + (x1 - x0) * 0.10) < bx < (x1 - (x1 - x0) * 0.10):
                    lbl_lon = "180°" if lon_v == 180 else f"{lon_v}°E"
                    ax.text(
                        bx, y0 + (y1 - y0) * 0.018, lbl_lon,
                        fontsize=6.0, color="#3b4c5e", ha="center", va="bottom", zorder=4.5,
                        bbox=dict(boxstyle="round,pad=0.08", facecolor="white", edgecolor="none", alpha=0.65)
                    )

def place_callout_in_bounds(ax, lbl, x0, y0, dx, dy, xlim, ylim, fs=5.9, dot_col="#b91c1c", dot_sz=15):
    # Strictly clamp callout text centre so the entire box stays inside [xlim[0], xlim[1]] x [ylim[0], ylim[1]]
    span_x = xlim[1] - xlim[0]
    span_y = ylim[1] - ylim[0]
    half_w = max(260.0, len(lbl) * (span_x * 0.0030))
    half_h = max(55.0, span_y * 0.016)
    margin_x = 25.0
    margin_y = 25.0
    tx = max(xlim[0] + half_w + margin_x, min(xlim[1] - half_w - margin_x, x0 + dx * 120.0))
    ty = max(ylim[0] + half_h + margin_y, min(ylim[1] - half_h - margin_y, y0 + dy * 115.0))
    # Draw pointer line behind everything (zorder=6.0)
    ax.plot([x0, tx], [y0, ty], color="#374151", linewidth=0.52, zorder=6.0)
    # Draw point at zorder=7.0
    ax.scatter([x0], [y0], s=dot_sz, c=dot_col, edgecolors="white", linewidths=0.55, zorder=7.0)
    # Draw text box with fully opaque background at zorder=10.0 so lines never occlude text
    ax.text(
        tx, ty, lbl,
        fontsize=fs, fontweight="bold", color="#111827", ha="center", va="center", zorder=10.0,
        bbox=dict(boxstyle="round,pad=0.14", facecolor="white", edgecolor="#6b7280", alpha=1.0, linewidth=0.42)
    )

# ==============================================================================
# BUILD EXACT 14 SPECIALIST PAPER POLYGONS FROM ADM1 + *_areal_mask.png
# ==============================================================================
print("Building 14 specialist paper polygons (Kievan Rus & Regional divisions)...")
spec_keys = [
    "kiev_and_pereyaslavl",
    "chernigov_and_novgorod_seversk",
    "galicia_and_volhynia",
    "polotsk_turov_and_belarusian_principalities",
    "wild_fields",
    "crimea",
    "russian_core_principalities",
    "pontic_steppe",
    "lower_volga",
    "circassia",
    "chechnya_ingushetia",
    "dagestan",
    "siberia_ob_irtysh_steppe_and_yugra",
    "siberia_yenisei_lena_kolyma_pacific"
]

spec_masks_bool = {}
for k in spec_keys:
    jpath = repo_root / DUMP["areal_masks"][k]["json5_path"]
    mpath = jpath.parent / f"{k}_areal_mask.png"
    arr = np.array(Image.open(mpath).convert("RGBA"))
    spec_masks_bool[k] = arr[:, :, 3] > 0

spec_adm1_buckets = {k: [] for k in spec_keys}
for f in adm1_gj["features"]:
    pr = f["properties"]
    nm = str(pr.get("name") or pr.get("name_en") or "").strip().lower()
    if "kaliningrad" in nm:
        continue
    geom = shape(f["geometry"]).buffer(0)
    pt = geom.representative_point()
    col = min(4319, max(0, int((pt.x + 180.0) * 12)))
    row = min(2159, max(0, int((90.0 - pt.y) * 12)))

    matched = [k for k in spec_keys if spec_masks_bool[k][row, col]]
    if not matched:
        minx, miny, maxx, maxy = geom.bounds
        c0, c1 = max(0, int((minx + 180.0) * 12)), min(4320, int((maxx + 180.0) * 12) + 1)
        r0, r1 = max(0, int((90.0 - maxy) * 12)), min(2160, int((90.0 - miny) * 12) + 1)
        best_k = max(spec_keys, key=lambda k: spec_masks_bool[k][r0:r1, c0:c1].sum())
        matched = [best_k]
    spec_adm1_buckets[matched[0]].append(geom)

SPEC_GEOMS = {k: unary_union(glist).buffer(0) for k, glist in spec_adm1_buckets.items() if glist}

# Load DeepStateMAP liberated (Northern Ukraine Kyiv/Chernihiv/Sumy/Zhytomyr + Eastern Kharkiv/Lyman + Right-Bank Kherson) & occupied GeoJSONs
ds_lib_gj = json.loads((hist_dir / "deepstate_liberated.geojson").read_text(encoding="utf-8"))
ds_occ_gj = json.loads((hist_dir / "deepstate_occupied_full.geojson").read_text(encoding="utf-8"))
DS_LIB_PATCHES_EAST = []
for f in ds_lib_gj["features"]:
    if f.get("geometry"):
        DS_LIB_PATCHES_EAST.extend(_proj_geom_to_patches(_prepare_and_project(shape(f["geometry"]), PROJ_EAST, 0.12)))
DS_OCC_PATCHES_EAST = []
for f in ds_occ_gj["features"]:
    if f.get("geometry"):
        DS_OCC_PATCHES_EAST.extend(_proj_geom_to_patches(_prepare_and_project(shape(f["geometry"]), PROJ_EAST, 0.12)))

# ==============================================================================
# FIGURE 1: Hero / Cover Image - Areal Coverage & Shifting Borders (10000BC-2026AD)
# ==============================================================================
print("Generating Figure 1: polaris_areal_coverage_hero.png ...")

ZONE_COLOURS = {
    "ukraine": "#e09f3e",              # Warm gold: Ukraine / Kievan & Southern Rus'
    "belarus": "#2a9d8f",              # Emerald teal: Belarus / Polotsk-Turov & GDL Rus'
    "core_european_ru": "#3b7ea1",     # Deep slate blue: European Russia, Steppe & North Caucasus
    "core_siberia": "#5c9e78",         # Boreal sage green: Urals, Siberia & Arctic
    "baltic_moldova_plc": "#d97706",   # Amber terracotta: Baltic Provinces/SSRs, Core Lithuania & Bessarabia/Moldova
    "finland_poland": "#8e5ea2",       # Royal purple: Grand Duchy of Finland & Congress Poland
    "far_east_kaliningrad": "#0284c7", # Cerulean cyan: Priamurye/Far East (1858-60), Tuva (1944) & Kaliningrad (1945)
    "deoccupied_ukr": "#0f9d58",       # DeepStateMAP green: De-Occupied / Liberated Ukraine (North, Kharkiv & Kherson)
    "occupied_war": "#c0392b"          # Crimson: Russian-Occupied Ukrainian Territory (2014-2026AD)
}

def classify_feature_zone(epoch_id, reg_id):
    rid = str(reg_id).lower()
    if any(k in rid for k in ["finland", "vyborg", "kexholm", "congress_poland", "warsaw", "vistula"]):
        return "finland_poland"
    if any(k in rid for k in [
        "estland", "livonia", "livland", "courland", "ostsee", "estonian", "latvian", "lithuanian",
        "vilnius", "vilna", "kovno", "samogitia", "moldav", "bessarabia"
    ]):
        return "baltic_moldova_plc"
    if any(k in rid for k in [
        "polotsk", "vitebsk", "minsk", "mogilev", "grodno", "novogrudok", "brest", "pinsk", "turov",
        "belarus", "byelorussia"
    ]) or rid.startswith("by_"):
        return "belarus"
    if any(k in rid for k in [
        "kiev", "kyiv", "chernigov", "chernihiv", "poltava", "sloboda", "kharkov", "kharkiv", "galicia",
        "volhynia", "podolia", "bratslav", "hetmanate", "zaporozh", "little_russia", "malorossiya",
        "right_bank", "left_bank", "ukrain", "novorossiya", "ekaterinoslav", "kherson", "taurida",
        "odessa", "odesa", "donbas", "dnipro", "crimea"
    ]) or rid.startswith("ua_"):
        return "ukraine"
    if any(k in rid for k in ["priamurye", "amur_primorye", "kaliningrad", "tuva", "dalstroy", "southern_far_east", "sakhalin"]):
        if epoch_id != "migration_period":
            return "far_east_kaliningrad"
    if any(k in rid for k in [
        "siberia", "ob_irtysh", "yenisei", "yakut", "baikal", "kuzbass", "yamal", "khanty", "norilsk",
        "magadan", "altai", "buryat", "tobolsk", "tomsk", "irkutsk", "kamchatka", "chukotka", "transbaikal",
        "dauria", "lena", "mangazeya", "tara", "ural_industrial", "sverdlovsk", "chelyabinsk", "tyumen"
    ]):
        return "core_siberia"
    return "core_european_ru"

SPEC_ZONE_MAP = {
    "kiev_and_pereyaslavl": "ukraine",
    "chernigov_and_novgorod_seversk": "ukraine",
    "galicia_and_volhynia": "ukraine",
    "wild_fields": "ukraine",
    "crimea": "ukraine",
    "polotsk_turov_and_belarusian_principalities": "belarus",
    "russian_core_principalities": "core_european_ru",
    "pontic_steppe": "core_european_ru",
    "lower_volga": "core_european_ru",
    "circassia": "core_european_ru",
    "chechnya_ingushetia": "core_european_ru",
    "dagestan": "core_european_ru",
    "siberia_ob_irtysh_steppe_and_yugra": "core_siberia",
    "siberia_yenisei_lena_kolyma_pacific": "core_siberia"
}

hero_panels = [
    {
        "epoch_id": "specialist_14",
        "title": "A. 10000BC-1400AD: Pre-Modern Baseline & Regional Divisions",
        "subtitle": "17,92M km² across 2.360 raions with 14 specialist regional divisions, Pop. 87.820 in 10000BC to 11,84M in 1200AD",
        "annotations": [
            ("Kiev & Pereyaslavl", 30.5, 50.4, 2.5, -2.8),
            ("Galicia-Volhynia", 24.7, 49.5, -1.0, -1.5),
            ("Polotsk-Turov (BY)", 28.0, 53.8, 1.2, 3.2),
            ("Novgorod & Rus' Core", 35.0, 57.5, 3.5, 3.0),
            ("Volga Bulgaria", 49.5, 55.0, 3.5, 2.0),
            ("Wild Fields & Crimea", 34.5, 45.5, 3.5, -3.0),
            ("Alania & Caucasus", 45.5, 43.0, 3.0, -3.0),
            ("Ob-Irtysh & Yenisei", 82.0, 58.0, 0.0, 4.0)
        ]
    },
    {
        "epoch_id": "tsardom_of_russia",
        "title": "B. 1400-1721AD: Tsardom of Russia & Western Borderlands",
        "subtitle": "18,12M km² across 38 regions covering Muscovy, Lithuania, Ukraine and Siberia, Pop. 11,36M to 22,83M",
        "annotations": [
            ("Estland, Livland & GDL", 24.5, 56.8, 1.0, 3.5),
            ("GDL Belarus (Minsk)", 28.0, 53.9, 1.2, 2.0),
            ("Cossack Hetmanate", 31.5, 49.8, 3.2, -3.0),
            ("Moscow & Belgorod Line", 37.6, 55.7, 4.0, 2.5),
            ("Kazan & Astrakhan", 48.0, 46.5, 3.0, -3.0),
            ("Tobolsk & Ob Ostrogi", 68.2, 58.2, 0.0, 4.0),
            ("Yakutsk & Okhotsk", 129.7, 62.0, -2.0, 3.0)
        ]
    },
    {
        "epoch_id": "imperial_russia_pre_1815",
        "title": "C. 1721-1815AD: Early Russian Empire",
        "subtitle": "18,50M km² across 40 regions following Baltic, Polish, Crimean and Finnish acquisitions, Pop. 23,89M to 51,17M",
        "annotations": [
            ("Finland (+1809)", 25.5, 62.5, -0.8, 2.5),
            ("Belarus & Lithuania", 27.5, 53.8, -0.5, 2.5),
            ("Right-Bank & Novorossiya", 31.0, 48.5, 3.8, -3.0),
            ("St Petersburg Capital", 30.3, 59.9, 3.0, -2.0),
            ("Ural Metallurgy", 60.0, 57.5, 3.0, 3.0),
            ("Irkutsk & Transbaikal", 104.3, 52.3, 0.0, -3.0)
        ]
    },
    {
        "epoch_id": "imperial_russia_post_1815",
        "title": "D. 1815-1926AD: Late Russian Empire & Civil War",
        "subtitle": "18,61M km² across 48 regions including Congress Poland and Far Eastern territories, Pop. 57,87M to 167,95M",
        "annotations": [
            ("Congress Poland (+1815)", 20.5, 52.0, 5.2, 2.5),
            ("Pale of Settlement", 28.5, 50.5, 3.0, -3.5),
            ("Caucasus Conquest", 43.0, 43.5, 3.0, -3.0),
            ("Stolypin Steppe", 78.0, 54.5, 0.0, -3.0),
            ("Amur & Primorye (+1858)", 133.5, 46.0, -2.0, 3.0),
            ("Sakhalin (+1875)", 142.8, 50.0, -2.0, 3.0)
        ]
    },
    {
        "epoch_id": "soviet_post_stalin",
        "title": "E. 1926-1991AD: Soviet Union",
        "subtitle": "18,18M km² across 45 and 41 interwar and post-war all-union regions, Pop. 145,07M to 224,55M",
        "annotations": [
            ("Baltic SSRs & Kaliningrad", 23.5, 56.8, 2.2, 3.5),
            ("Byelorussian SSR", 27.6, 53.9, -0.8, 2.2),
            ("Ukrainian SSR (+Galicia)", 31.0, 49.0, 3.8, -3.5),
            ("Yugra-Yamal Oil & Gas", 73.5, 62.5, 0.0, 3.0),
            ("Tuva (+1944) & Angara", 96.0, 53.0, -1.0, -3.0),
            ("BAM & S. Sakhalin (+1945)", 135.0, 51.0, -2.0, 3.0)
        ]
    },
    {
        "epoch_id": "post_soviet_invasion",
        "title": "F. 1991-2026AD: Post-Soviet Space & the Russo-Ukrainian War",
        "subtitle": "17,96M km² across the post-Soviet space with frontline and occupied zones, Pop. 212,26M to 188,56M",
        "annotations": [
            ("Liberated North & Kharkiv", 31.5, 51.3, 3.6, -2.5),
            ("Occupied Donbas/South", 36.8, 47.2, 3.8, -3.2),
            ("Independent Belarus", 27.6, 53.9, 1.0, 3.0),
            ("Moscow Metro Magnet", 37.6, 55.8, 3.5, 2.5),
            ("Dagestan Population Growth", 47.2, 43.0, 3.0, -3.0),
            ("Arctic & Far East Outflow", 129.7, 62.0, -2.0, 3.0)
        ]
    }
]

xlim_e = (-4450.0, 3820.0)
ylim_e = (-1080.0, 3240.0)

fig, axes = plt.subplots(2, 3, figsize=(19.2, 11.0), dpi=300)
plt.subplots_adjust(left=0.015, right=0.985, top=0.895, bottom=0.088, wspace=0.04, hspace=0.165)

for idx, pinfo in enumerate(hero_panels):
    ax = axes[idx // 3, idx % 3]
    ep_id = pinfo["epoch_id"]
    draw_basemap(ax, land_east, lakes_east, rivers_east)

    all_geoms = []

    if ep_id == "specialist_14":
        for f_adm in adm1_gj["features"]:
            nm = str(f_adm["properties"].get("name") or "").lower()
            if "kaliningrad" in nm:
                continue
            pg_a = _prepare_and_project(shape(f_adm["geometry"]), PROJ_EAST, 0.30)
            ap = _proj_geom_to_patches(pg_a)
            if ap:
                ax.add_collection(PatchCollection(ap, facecolor="none", edgecolor="#475569", linewidths=0.18, alpha=0.45, zorder=2.4))

        for s_i, sk in enumerate(spec_keys):
            if sk not in SPEC_GEOMS or SPEC_GEOMS[sk].is_empty:
                continue
            geom_s = SPEC_GEOMS[sk]
            all_geoms.append(geom_s)
            zcat = SPEC_ZONE_MAP[sk]
            col_hex = ZONE_COLOURS[zcat]
            pg_s = _prepare_and_project(geom_s, PROJ_EAST, 0.30)
            mpatches = _proj_geom_to_patches(pg_s)
            if mpatches:
                ax.add_collection(PatchCollection(
                    mpatches, facecolor=col_hex, edgecolor="none",
                    alpha=0.78, zorder=2.1 + s_i * 0.005
                ))
                ax.add_collection(PatchCollection(
                    [MplPolygon(p.get_xy(), closed=True) for p in mpatches],
                    facecolor="none", edgecolor="#111827",
                    linewidths=0.95, linestyle="--", zorder=3.5
                ))

    elif ep_id == "post_soviet_invasion":
        gj_ps = json.loads((cache_dir / "post_soviet_space_polygons.geojson").read_text(encoding="utf-8"))
        feats_ps = sorted(gj_ps["features"], key=lambda f: shape(f["geometry"]).area if f.get("geometry") else 0.0, reverse=True)
        for f_i, f in enumerate(feats_ps):
            if not f.get("geometry"):
                continue
            geom_raw = shape(f["geometry"])
            all_geoms.append(geom_raw)
            rid = f.get("properties", {}).get("id", "")
            zcat = classify_feature_zone("post_soviet_space", rid)
            col_hex = ZONE_COLOURS[zcat]
            pg = _prepare_and_project(geom_raw, PROJ_EAST, 0.30)
            mpatches = _proj_geom_to_patches(pg)
            if mpatches:
                ax.add_collection(PatchCollection(
                    mpatches, facecolor=col_hex, edgecolor="#1f2937",
                    linewidths=0.30, alpha=0.78, zorder=2.2 + f_i * 0.002
                ))
        # Overlay exact DeepStateMAP De-Occupied / Liberated Ukrainian territories (Northern Ukraine: Kyiv, Chernihiv, Sumy, Zhytomyr + Eastern Kharkiv/Izium/Lyman + Right-Bank Kherson) in green!
        if DS_LIB_PATCHES_EAST:
            ax.add_collection(PatchCollection(
                [MplPolygon(p.get_xy(), closed=True) for p in DS_LIB_PATCHES_EAST],
                facecolor=ZONE_COLOURS["deoccupied_ukr"], edgecolor="#065f46",
                linewidths=0.55, alpha=0.92, zorder=3.55
            ))
        # Overlay exact DeepStateMAP Occupied Ukrainian territories (Crimea, ORDLO, 2022-2026 occupied East/South) in crimson!
        if DS_OCC_PATCHES_EAST:
            ax.add_collection(PatchCollection(
                [MplPolygon(p.get_xy(), closed=True) for p in DS_OCC_PATCHES_EAST],
                facecolor=ZONE_COLOURS["occupied_war"], edgecolor="#7f1d1d",
                linewidths=0.60, alpha=0.92, zorder=3.65
            ))

    else:
        poly_path = cache_dir / f"{ep_id}_polygons.geojson"
        gj = json.loads(poly_path.read_text(encoding="utf-8"))
        feats = sorted(
            gj["features"],
            key=lambda f: shape(f["geometry"]).area if f.get("geometry") else 0.0,
            reverse=True
        )
        for f_i, f in enumerate(feats):
            if not f.get("geometry"):
                continue
            geom_raw = shape(f["geometry"])
            all_geoms.append(geom_raw)
            rid = f.get("properties", {}).get("id", "")
            zcat = classify_feature_zone(ep_id, rid)
            col_hex = ZONE_COLOURS[zcat]
            pg = _prepare_and_project(geom_raw, PROJ_EAST, 0.30)
            mpatches = _proj_geom_to_patches(pg)
            if mpatches:
                ax.add_collection(PatchCollection(
                    mpatches, facecolor=col_hex, edgecolor="#1f2937",
                    linewidths=0.32, alpha=0.78, zorder=2.2 + f_i * 0.002
                ))

    if all_geoms:
        try:
            env_geom = unary_union(all_geoms)
            pg_env = _prepare_and_project(env_geom, PROJ_EAST, 0.30)
            env_patches = _proj_geom_to_patches(pg_env)
            if env_patches:
                ax.add_collection(PatchCollection(
                    env_patches, facecolor="none", edgecolor="#111827",
                    linewidths=0.95, zorder=3.8
                ))
        except Exception:
            pass

    if ep_id == "tsardom_of_russia":
        p_het = hist_dir / "cossack_hetmanate_1649.geojson"
        if p_het.exists():
            gj_h = json.loads(p_het.read_text(encoding="utf-8"))
            for fh in gj_h.get("features", []):
                if fh.get("geometry"):
                    pgh = _prepare_and_project(shape(fh["geometry"]), PROJ_EAST, 0.25)
                    hp = _proj_geom_to_patches(pgh)
                    if hp:
                        ax.add_collection(PatchCollection(hp, facecolor="none", edgecolor="#991b1b", linewidths=0.9, linestyle="--", zorder=4.2))
    elif ep_id == "imperial_russia_post_1815":
        p_pale = hist_dir / "pale_of_settlement_1835.geojson"
        if p_pale.exists():
            gj_p = json.loads(p_pale.read_text(encoding="utf-8"))
            for fp in gj_p.get("features", []):
                if fp.get("geometry"):
                    pgp = _prepare_and_project(shape(fp["geometry"]), PROJ_EAST, 0.25)
                    pp = _proj_geom_to_patches(pgp)
                    if pp:
                        ax.add_collection(PatchCollection(pp, facecolor="none", edgecolor="#581c87", linewidths=0.85, linestyle="--", zorder=4.2))

    draw_clean_graticule(ax, PROJ_EAST, xlim_e, ylim_e, [45, 55, 65], [20, 60, 100, 140, 180], (5.0, 194.0))

    for lbl, lon, lat, dx, dy in pinfo["annotations"]:
        x0, y0 = PROJ_EAST.fwd_pt(lon, lat)
        place_callout_in_bounds(ax, lbl, x0, y0, dx, dy, xlim_e, ylim_e, fs=5.8)

    ax.set_xlim(*xlim_e)
    ax.set_ylim(*ylim_e)
    ax.set_aspect("equal", adjustable="box")
    ax.set_xticks([])
    ax.set_yticks([])
    ax.text(0.5, 1.052, pinfo["title"], transform=ax.transAxes, fontsize=8.0, fontweight="bold", ha="center", va="bottom", color="#111827")
    ax.text(0.5, 1.010, pinfo["subtitle"], transform=ax.transAxes, fontsize=6.3, ha="center", va="bottom", color="#374151")

fig.suptitle(
    "Historical Coverage of POLARIS, 10000BC-2026AD",
    fontsize=13.0, fontweight="bold", y=0.972, color="#111827"
)

legend_handles = [
    Patch(facecolor=ZONE_COLOURS["ukraine"], edgecolor="#1f2937", alpha=0.82, label="Ukraine / Kievan & Southern Rus' (Independent Ukraine 1991-2026AD)"),
    Patch(facecolor=ZONE_COLOURS["belarus"], edgecolor="#1f2937", alpha=0.82, label="Belarus / Polotsk-Turov & GDL Rus' (Independent Belarus 1991-2026AD)"),
    Patch(facecolor=ZONE_COLOURS["core_european_ru"], edgecolor="#1f2937", alpha=0.82, label="European Russia, Don-Volga Steppe & North Caucasus Substrata"),
    Patch(facecolor=ZONE_COLOURS["core_siberia"], edgecolor="#1f2937", alpha=0.82, label="Urals, Siberia & Arctic Substrata"),
    Patch(facecolor=ZONE_COLOURS["baltic_moldova_plc"], edgecolor="#1f2937", alpha=0.82, label="Baltic Provinces/SSRs, Core Lithuania & Bessarabia/Moldova (1400-1991AD)"),
    Patch(facecolor=ZONE_COLOURS["finland_poland"], edgecolor="#1f2937", alpha=0.82, label="Grand Duchy of Finland (1809-1917AD) & Congress Poland (1815-1917AD)"),
    Patch(facecolor=ZONE_COLOURS["far_east_kaliningrad"], edgecolor="#1f2937", alpha=0.82, label="Priamurye/Far East (1858-60AD), Tuva (1944AD) & Kaliningrad (1945AD)"),
    Patch(facecolor=ZONE_COLOURS["deoccupied_ukr"], edgecolor="#065f46", alpha=0.92, label="De-Occupied / Liberated Ukraine (2022AD: North, Kharkiv & Right-Bank Kherson)"),
    Patch(facecolor=ZONE_COLOURS["occupied_war"], edgecolor="#7f1d1d", alpha=0.92, label="Russian-Occupied Ukrainian Territory (2014-2026AD: Crimea, Donbas & South)")
]
fig.legend(
    handles=legend_handles, loc="lower center", ncol=3, frameon=True,
    facecolor="white", edgecolor="#cbd5e1", fontsize=7.0, bbox_to_anchor=(0.5, 0.005)
)

out_hero = fig_dir / "polaris_areal_coverage_hero.png"
fig.savefig(out_hero, dpi=300)
plt.close(fig)
print("Saved:", out_hero)

# ==============================================================================
# FIGURE 2: ARCHAEOLOGICAL SUBSTRATA & SINGLE-MOSAIC KRIGING IN FULL PROJ_EAST GRID
# ==============================================================================
print("Generating Figure 2: polaris_kriging_mosaic.png (full PROJ_EAST normal 2x2 grid)...")

meta_ru = json.loads((polaris_root / "_shared" / "sites_IA_RAS" / "config" / "oanmap_kriging_metadata.json").read_text(encoding="utf-8"))
meta_byua = json.loads((polaris_root / "_shared" / "sites_belarus_ukraine" / "config" / "belarus_ukraine_kriging_metadata.json").read_text(encoding="utf-8"))
gj_ru = json.loads((polaris_root / "_shared" / "sites_IA_RAS" / "geojson" / "09_middle_ages_e37.geojson").read_text(encoding="utf-8"))
gj_byua = json.loads((polaris_root / "_shared" / "sites_belarus_ukraine" / "geojson" / "09_middle_ages_e37.geojson").read_text(encoding="utf-8"))

ru_pts = [(f["geometry"]["coordinates"][0], f["geometry"]["coordinates"][1], max(1, f["properties"].get("total_sites_all_periods", f["properties"].get("site_count", 1))))
          for f in gj_ru["features"] if not f["properties"].get("is_unspecified_subregion")]
byua_pts = [(f["geometry"]["coordinates"][0], f["geometry"]["coordinates"][1], max(1, f["properties"].get("total_sites_all_periods", f["properties"].get("site_count", 1))))
            for f in gj_byua["features"] if not f["properties"].get("is_unspecified_subregion")]
ru_arr = np.array(ru_pts, dtype=float)
byua_arr = np.array(byua_pts, dtype=float)

def haversine_min_dist_km(lons1, lats1, lons2, lats2):
    r = 6371.0
    lat1, lon1 = np.radians(lats1)[:, None], np.radians(lons1)[:, None]
    lat2, lon2 = np.radians(lats2)[None, :], np.radians(lons2)[None, :]
    a = np.sin((lat2 - lat1) / 2.0)**2 + np.cos(lat1) * np.cos(lat2) * np.sin((lon2 - lon1) / 2.0)**2
    return (2.0 * r * np.arcsin(np.sqrt(np.clip(a, 0.0, 1.0)))).min(axis=1)

ru_cond = haversine_min_dist_km(ru_arr[:, 0], ru_arr[:, 1], byua_arr[:, 0], byua_arr[:, 1]) <= 250.0
byua_cond = haversine_min_dist_km(byua_arr[:, 0], byua_arr[:, 1], ru_arr[:, 0], ru_arr[:, 1]) <= 250.0

def decode_f32_png(p):
    im = Image.open(p).convert("RGBA")
    arr = np.frombuffer(im.tobytes(), dtype=">f4").reshape(2160, 4320)
    return np.where(np.isfinite(arr) & (arr > 0), arr, 0.0)

krig_mosaic = decode_f32_png(polaris_root / "_shared" / "sites_IA_RAS" / "1.kriged_rasters" / "09_middle_ages_e37.png") + \
              decode_f32_png(polaris_root / "_shared" / "sites_belarus_ukraine" / "1.kriged_rasters" / "09_middle_ages_e37.png")
pop_mosaic_1000 = decode_f32_png(polaris_root / "_shared" / "sites_IA_RAS" / "2.population_rasters" / "popc_1000.png") + \
                  decode_f32_png(polaris_root / "_shared" / "sites_belarus_ukraine" / "2.population_rasters" / "popc_1000.png")

W_CANVAS, H_CANVAS = 1440, 752
xs_1d = np.linspace(xlim_e[0], xlim_e[1], W_CANVAS)
ys_1d = np.linspace(ylim_e[1], ylim_e[0], H_CANVAS)
X_GRID, Y_GRID = np.meshgrid(xs_1d, ys_1d)

dx_g = X_GRID
dy_g = PROJ_EAST.rho_0 - Y_GRID
rho_g = np.hypot(dx_g, dy_g)
theta_g = np.arctan2(dx_g, dy_g)
lam_g = PROJ_EAST.lon_0 + theta_g / PROJ_EAST.n
lon_deg_g = np.degrees(lam_g)
lon_deg_wrapped = ((lon_deg_g + 180.0) % 360.0) - 180.0
sin_phi_g = (PROJ_EAST.C - (rho_g * PROJ_EAST.n / PROJ_EAST.R)**2) / (2.0 * PROJ_EAST.n)
valid_lat = (sin_phi_g >= -1.0) & (sin_phi_g <= 1.0) & (lon_deg_g >= -15.0) & (lon_deg_g <= 198.0)
lat_deg_g = np.degrees(np.arcsin(np.clip(sin_phi_g, -1.0, 1.0)))

col_idx = np.clip(((lon_deg_wrapped + 180.0) * 12.0).astype(int), 0, 4319)
row_idx = np.clip(((90.0 - lat_deg_g) * 12.0).astype(int), 0, 2159)

krig_proj_east = np.where(valid_lat, krig_mosaic[row_idx, col_idx], 0.0)
pop_proj_east  = np.where(valid_lat, pop_mosaic_1000[row_idx, col_idx], 0.0)

gj_post = json.loads((cache_dir / "post_soviet_space_polygons.geojson").read_text(encoding="utf-8"))
post_east_patches = []
for f in gj_post["features"]:
    if f.get("geometry"):
        post_east_patches.extend(_proj_geom_to_patches(_prepare_and_project(shape(f["geometry"]), PROJ_EAST, 0.25)))

spec_east_dashed = []
for sk in spec_keys:
    if sk in SPEC_GEOMS and not SPEC_GEOMS[sk].is_empty:
        spec_east_dashed.extend(_proj_geom_to_patches(_prepare_and_project(SPEC_GEOMS[sk], PROJ_EAST, 0.30)))

fig, axes = plt.subplots(2, 2, figsize=(18.8, 10.6), dpi=300)
fig.patch.set_facecolor("white")
plt.subplots_adjust(left=0.025, right=0.975, top=0.895, bottom=0.055, wspace=0.08, hspace=0.20)

fig.suptitle(
    "Archaeological Substrata for Russia, Belarus and Ukraine",
    fontsize=13.5, fontweight="bold", y=0.968, color="#111827"
)

axA = axes[0, 0]
draw_basemap(axA, land_east, lakes_east, rivers_east)
if spec_east_dashed:
    axA.add_collection(PatchCollection([MplPolygon(p.get_xy(), closed=True) for p in spec_east_dashed],
                                       facecolor="#e5e0d5", edgecolor="#475569", linewidths=0.45, linestyle="--", alpha=0.65, zorder=2.0))
draw_clean_graticule(axA, PROJ_EAST, xlim_e, ylim_e, [45, 55, 65], [20, 60, 100, 140, 180], (5.0, 194.0))

ru_x, ru_y = PROJ_EAST.fwd_xy(ru_arr[:, 0], ru_arr[:, 1])
by_x, by_y = PROJ_EAST.fwd_xy(byua_arr[:, 0], byua_arr[:, 1])
s_ru = 3.5 + 8.5 * np.log10(ru_arr[:, 2] + 1.0)
s_by = 3.5 + 8.5 * np.log10(byua_arr[:, 2] + 1.0)

axA.scatter(ru_x[~ru_cond], ru_y[~ru_cond], s=s_ru[~ru_cond], c="#1d4ed8", alpha=0.72, edgecolors="none", zorder=5.0,
            label="IA RAS Russia & Crimea ADM2 raions (n=1.765, 67.205 sites)")
axA.scatter(by_x[~byua_cond], by_y[~byua_cond], s=s_by[~byua_cond], c="#d97706", alpha=0.78, edgecolors="none", zorder=5.2,
            label="Belarus & Ukraine ADM2 raions (n=595, 43.437 sites)")
axA.scatter(ru_x[ru_cond], ru_y[ru_cond], s=s_ru[ru_cond]*1.15, c="#2563eb", edgecolors="#fde047", linewidths=0.45, alpha=0.92, zorder=6.0,
            label="250 km Cross-Frontier Conditioning Belt (n=616 raions: 294 BY/UA + 322 RU)")
axA.scatter(by_x[byua_cond], by_y[byua_cond], s=s_by[byua_cond]*1.15, c="#db2777", edgecolors="#fde047", linewidths=0.45, alpha=0.92, zorder=6.2)

axA.set_xlim(*xlim_e)
axA.set_ylim(*ylim_e)
axA.set_aspect("equal", adjustable="box")
axA.set_xticks([])
axA.set_yticks([])
axA.text(0.5, 1.052, "A. Second-Level Administrative Raions & Frontier Conditioning Belt",
         transform=axA.transAxes, fontsize=8.6, fontweight="bold", ha="center", va="bottom", color="#111827")
axA.text(0.5, 1.010, "110.642 site-epoch records across 2.360 raions with Voronoi support catchments (median 2.467 km² Russia, 1.232 km² Belarus-Ukraine)",
         transform=axA.transAxes, fontsize=6.9, ha="center", va="bottom", color="#374151")
axA.legend(loc="lower left", fontsize=6.6, frameon=True, facecolor="white", edgecolor="#cbd5e1", framealpha=0.92)

axB = axes[0, 1]
draw_basemap(axB, land_east, lakes_east, rivers_east)

krig_m = np.ma.masked_where(krig_proj_east <= 1e-4, krig_proj_east)
imB = axB.imshow(
    krig_m,
    extent=[xlim_e[0], xlim_e[1], ylim_e[0], ylim_e[1]],
    origin="upper",
    cmap="YlOrRd",
    norm=mcolors.LogNorm(vmin=0.005, vmax=max(3.5, float(np.percentile(krig_proj_east[krig_proj_east > 0], 99.5)))),
    interpolation="bilinear",
    zorder=2.5
)
if post_east_patches:
    axB.add_collection(PatchCollection([MplPolygon(p.get_xy(), closed=True) for p in post_east_patches],
                                       facecolor="none", edgecolor="#1f2937", linewidths=0.35, linestyle="--", alpha=0.65, zorder=3.6))
draw_clean_graticule(axB, PROJ_EAST, xlim_e, ylim_e, [45, 55, 65], [20, 60, 100, 140, 180], (5.0, 194.0))

for lbl, lon, lat, dx, dy in [
    ("Middle Dnieper (Kiev)", 30.5, 50.4, -2, -3),
    ("Galicia-Volhynia", 24.5, 49.5, 1, -4),
    ("Polotsk-Smolensk Seam", 30.5, 55.0, -2, 4),
    ("Vladimir-Suzdal Opolye", 40.4, 56.3, 3, 4),
    ("Volga Bulgaria", 49.5, 55.0, 4, -3),
    ("Crimea & Caucasus", 36.5, 45.0, 2, -4),
    ("Minusinsk & Altai", 91.5, 53.7, 0, -3),
    ("Lena-Yakutsk Alaas", 129.7, 62.0, -2, 3),
]:
    x0, y0 = PROJ_EAST.fwd_pt(lon, lat)
    place_callout_in_bounds(axB, lbl, x0, y0, dx, dy, xlim_e, ylim_e, fs=5.9, dot_col="#111827")

axB.set_xlim(*xlim_e)
axB.set_ylim(*ylim_e)
axB.set_aspect("equal", adjustable="box")
axB.set_xticks([])
axB.set_yticks([])
axB.text(0.5, 1.052, "B. Mediaeval Archaeological Intensity Mosaic (400-1600AD)",
         transform=axB.transAxes, fontsize=8.6, fontweight="bold", ha="center", va="bottom", color="#111827")
axB.text(0.5, 1.010, "5-arcminute kriged surface combining Russian Academy of Sciences and Belarusian-Ukrainian registries",
         transform=axB.transAxes, fontsize=6.9, ha="center", va="bottom", color="#374151")

axB.add_patch(plt.Rectangle((0.015, 0.020), 0.345, 0.090, transform=axB.transAxes,
                            facecolor="white", alpha=0.92, edgecolor="#cbd5e1", linewidth=0.5, zorder=6.0))
caxB = axB.inset_axes([0.025, 0.054, 0.325, 0.034], zorder=7.0)
cbB = fig.colorbar(imB, cax=caxB, orientation="horizontal")
caxB.xaxis.set_label_position("top")
caxB.xaxis.tick_bottom()
cbB.set_label("Kriged Intensity (sites / 5' cell)", fontsize=6.8, fontweight="bold", color="#111827", labelpad=2.8)
cbB.set_ticks([0.01, 0.1, 1.0, 3.0])
cbB.set_ticklabels(["0,01", "0,1", "1", "3"])
cbB.ax.tick_params(labelsize=6.2)
caxB.set_facecolor("white")

axC = axes[1, 0]
draw_basemap(axC, land_east, lakes_east, rivers_east)

pop_m = np.ma.masked_where(pop_proj_east <= 0.02, pop_proj_east)
imC = axC.imshow(
    pop_m,
    extent=[xlim_e[0], xlim_e[1], ylim_e[0], ylim_e[1]],
    origin="upper",
    cmap="viridis",
    norm=mcolors.LogNorm(vmin=0.1, vmax=max(350.0, float(np.percentile(pop_proj_east[pop_proj_east > 0], 99.7)))),
    interpolation="bilinear",
    zorder=2.5
)
if post_east_patches:
    axC.add_collection(PatchCollection([MplPolygon(p.get_xy(), closed=True) for p in post_east_patches],
                                       facecolor="none", edgecolor="#e2e8f0", linewidths=0.32, linestyle="--", alpha=0.55, zorder=3.6))
draw_clean_graticule(axC, PROJ_EAST, xlim_e, ylim_e, [45, 55, 65], [20, 60, 100, 140, 180], (5.0, 194.0))

cities_1000 = [
    ("Kiev (45k)", 30.52, 50.45, 45, -2, -3),
    ("Bulgar (35k)", 49.06, 54.98, 35, 4, 3),
    ("Novgorod (25k)", 31.27, 58.52, 25, -2, 4),
    ("Chersonesos (25k)", 33.49, 44.61, 25, -3, -3),
    ("Chernigov (22k)", 31.29, 51.49, 22, -2, 2),
    ("Derbent (18k)", 48.29, 42.06, 18, 4, 2),
    ("Polotsk (10k)", 28.78, 55.49, 10, -2, 3),
    ("Rostov (10k)", 39.41, 57.19, 10, 3, 4),
    ("Sarkel (10k)", 42.17, 47.71, 10, -3, 2),
]
for cname, lon, lat, popk, dx, dy in cities_1000:
    x0, y0 = PROJ_EAST.fwd_pt(lon, lat)
    place_callout_in_bounds(axC, cname, x0, y0, dx, dy, xlim_e, ylim_e, fs=5.9, dot_col="#ef4444", dot_sz=15 + popk * 0.9)

axC.set_xlim(*xlim_e)
axC.set_ylim(*ylim_e)
axC.set_aspect("equal", adjustable="box")
axC.set_xticks([])
axC.set_yticks([])
axC.text(0.5, 1.052, "C. Disaggregated Population Density & Urban Centres (1000AD)",
         transform=axC.transAxes, fontsize=8.6, fontweight="bold", ha="center", va="bottom", color="#111827")
axC.text(0.5, 1.010, "Log-linear residual kriging combined with historical town coordinates and steppe ecological envelope (n=7,74M)",
         transform=axC.transAxes, fontsize=6.9, ha="center", va="bottom", color="#374151")

axC.add_patch(plt.Rectangle((0.015, 0.018), 0.345, 0.115, transform=axC.transAxes,
                            facecolor="white", alpha=0.95, edgecolor="#cbd5e1", linewidth=0.5, zorder=6.0))
caxC = axC.inset_axes([0.025, 0.038, 0.325, 0.032], zorder=7.0)
cbC = fig.colorbar(imC, cax=caxC, orientation="horizontal")
caxC.xaxis.set_label_position("top")
caxC.xaxis.tick_bottom()
cbC.set_label("Inhabitants per 5' cell (1000AD)", fontsize=6.8, fontweight="bold", color="#111827", labelpad=3.2)
cbC.set_ticks([0.1, 1.0, 10.0, 100.0, 300.0])
cbC.set_ticklabels(["0,1", "1", "10", "100", "300"])
cbC.ax.tick_params(labelsize=6.2, pad=1.5)
caxC.set_facecolor("white")

axD = axes[1, 1]
axD.set_box_aspect(4320.0 / 8270.0)

vg_ru = meta_ru["variogram_models"]["middle_ages"]
vg_by = meta_byua["variogram_models"]["middle_ages"]
u_ru = vg_ru["empirical_u_lags"]
g_ru = [g / vg_ru["total_sill"] for g in vg_ru["empirical_gammas"]]
u_by = vg_by["empirical_u_lags"]
g_by = [g / vg_by["total_sill"] for g in vg_by["empirical_gammas"]]

u_grid = np.linspace(0.0, 18.5, 300)
def matern32_corr(u, tau1, tau2, w1=0.72, w2=0.28):
    s1, s2 = np.sqrt(3.0) * u / tau1, np.sqrt(3.0) * u / tau2
    return w1 * (1.0 + s1) * np.exp(-s1) + w2 * (1.0 + s2) * np.exp(-s2)

nug_ru = vg_ru["c0_nugget"] / vg_ru["total_sill"]
nug_by = vg_by["c0_nugget"] / vg_by["total_sill"]
fit_ru = nug_ru + (1.0 - nug_ru) * (1.0 - matern32_corr(u_grid, vg_ru["tau1_dimensionless"], vg_ru["tau2_dimensionless"]))
fit_by = nug_by + (1.0 - nug_by) * (1.0 - matern32_corr(u_grid, vg_by["tau1_dimensionless"], vg_by["tau2_dimensionless"]))

axD.plot(u_grid, fit_ru, color="#1d4ed8", lw=2.2, label=r"IA RAS Matérn $\nu=3/2$ fit ($\tau_1=1{,}06$, $\tau_2=3{,}01$, $c_0/\mathrm{sill}=0{,}04$)")
axD.scatter(u_ru, g_ru, color="#1d4ed8", s=38, zorder=5, edgecolors="white", linewidths=0.7, label="IA RAS Matheron bins (n=2.059 raions: 1.765 RU/Crimea + 294 BY/UA)")
axD.plot(u_grid, fit_by, color="#d97706", lw=2.2, linestyle="--", label=r"BY/UA Matérn $\nu=3/2$ fit ($\tau_1=1{,}09$, $\tau_2=3{,}01$, $c_0/\mathrm{sill}=0{,}11$)")
axD.scatter(u_by, g_by, color="#d97706", marker="s", s=34, zorder=5, edgecolors="white", linewidths=0.7, label="BY/UA Matheron bins (n=917 raions: 595 BY/UA + 322 RU/Crimea)")

axD.set_xlim(0, 18.5)
axD.set_ylim(0, 1.25)
axD.set_xlabel(r"Dimensionless Voronoi-normalised geodesic lag $u_{ij} = d_{ij} / \sqrt{r_i \cdot r_j}$", fontsize=8.2)
axD.set_ylabel(r"Normalised semivariance $\gamma(u) / \sigma^2$", fontsize=8.2)
axD.grid(True, linestyle=":", alpha=0.5)
axD.tick_params(labelsize=7.4)
axD.legend(loc="upper left", fontsize=6.8, frameon=True, facecolor="white", edgecolor="#cbd5e1")
axD.text(0.5, 1.052, "D. Empirical Semivariograms & Chronological Distribution",
         transform=axD.transAxes, fontsize=8.6, fontweight="bold", ha="center", va="bottom", color="#111827")
axD.text(0.5, 1.010, "Geodesic lag correlation functions and site counts across twelve archaeological periods",
         transform=axD.transAxes, fontsize=6.9, ha="center", va="bottom", color="#374151")

ax_in = axD.inset_axes([0.48, 0.075, 0.49, 0.48])
epochs_order = [
    ("stone_age", "01 Stone Age"), ("eneolithic", "02 Eneolithic"), ("palaeometal", "03 Palaeometal"),
    ("early_metal_age", "04 Early Metal"), ("bronze_age", "05 Bronze Age"), ("iron_age", "06 Iron Age"),
    ("classical_antiquity", "07 Classical"), ("migration_period", "08 Migration"), ("middle_ages", "09 Middle Ages"),
    ("early_modern_17_18c", "10 Early Modern"), ("modern", "11 Modern"), ("unspecified", "12 Unspecified"),
]
# Compact bars so rightmost background orange square (u=15.57, g=0.790) sits completely clear above the inset
y_pos = np.arange(len(epochs_order)) + 0.80
ru_counts = [meta_ru["variogram_models"][k]["total_sites"] / 1000.0 for k, _ in epochs_order]
by_counts = [meta_byua["variogram_models"][k]["total_sites"] / 1000.0 for k, _ in epochs_order]

# Right-align bars: invert x-axis
ax_in.set_xlim(52.0, 0.0)

ax_in.barh(y_pos, ru_counts, color="#1d4ed8", height=0.68, label="IA RAS (n=67.200)")
ax_in.barh(y_pos, by_counts, left=ru_counts, color="#d97706", height=0.68, label="BY+UA (n=43.400)")

for i in range(len(epochs_order)):
    tot = ru_counts[i] + by_counts[i]
    lbl = epochs_order[i][1]
    # Sits TO THE LEFT of the bar, non-bold, ha="right" in inverted coordinates
    ax_in.text(tot + 0.8, y_pos[i], lbl, va="center", ha="right", fontsize=5.8, color="#1e293b", fontweight="normal")

ax_in.set_yticks([])
ax_in.set_ylim(13.4, -0.6)

# Breaks to bottom, title retained at top:
ax_in.xaxis.tick_bottom()
ax_in.set_title("Sites (thousands, n=110.600)", fontsize=6.5, pad=3.5, color="#1e293b")
ax_in.tick_params(axis="x", labelsize=6.0, top=False, labeltop=False, bottom=True, labelbottom=True, pad=2.0)

# Set sub-panel background to TRANSPARENT so as not to occlude orange squares/blue dots in background!
ax_in.patch.set_alpha(0.0)
ax_in.set_facecolor("none")
for spine in ax_in.spines.values():
    spine.set_edgecolor("#94a3b8")
    spine.set_linewidth(0.8)

# Legend placed in upper-left clear region of inset to avoid occluding '12 Unspecified'
ax_in.legend(loc="upper left", bbox_to_anchor=(0.02, 0.90), fontsize=6.0, frameon=True, facecolor="white", edgecolor="#cbd5e1", framealpha=0.92)

out_fig2 = fig_dir / "polaris_kriging_mosaic.png"
fig.savefig(out_fig2, dpi=300)
plt.close(fig)
print("Saved:", out_fig2)

# ==============================================================================
# FIGURE 3: HOLOCENE DEMOGRAPHIC TRAJECTORIES (STRICTLY IN-BOUNDS CALLOUTS)
# ==============================================================================
print("Generating Figure 3: polaris_holocene_trajectories.png ...")

fig, axes = plt.subplots(2, 2, figsize=(18.4, 11.4), dpi=300)
fig.patch.set_facecolor("white")
plt.subplots_adjust(left=0.055, right=0.955, top=0.895, bottom=0.065, wspace=0.18, hspace=0.25)

fig.suptitle(
    "Demographic Trajectory and Estimates of Urbanisation, 10000BC-2026AD",
    fontsize=13.5, fontweight="bold", y=0.968, color="#111827"
)

axA = axes[0, 0]
yrs_pre = np.array([-10000, -8000, -6000, -5000, -4000, -3000, -2000, -1000, -500, 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400], dtype=float)
def map_x_pre(y_arr):
    out = np.zeros_like(y_arr, dtype=float)
    for i, y in enumerate(y_arr):
        if y < -1000:
            out[i] = (y + 10000.0) / 9000.0 * 45.0
        else:
            out[i] = 45.0 + (y + 1000.0) / 2400.0 * 55.0
    return out

x_pre = map_x_pre(yrs_pre)
rus_by_ua = np.array([38.5, 70.0, 117.5, 191.5, 455.0, 559.0, 592.0, 925.0, 1246.8, 1282.5, 1375.0, 1600.0, 1795.5, 1515.0, 1425.5, 1502.5, 1672.5, 1945.0, 2390.0, 3095.0, 3960.0, 4880.0, 3440.0, 3550.0]) / 1000.0
rus_core  = np.array([13.0, 22.0, 44.5, 61.9, 86.0, 122.0, 182.0, 278.0, 444.0, 610.0, 665.0, 725.0, 780.5, 845.0, 920.0, 1015.0, 1180.0, 1450.0, 1820.0, 2510.0, 3480.0, 4670.0, 4330.0, 4850.0]) / 1000.0
steppe_cr = np.array([10.0, 17.3, 33.9, 57.0, 100.2, 182.5, 290.9, 379.3, 670.6, 710.0, 745.0, 710.0, 639.6, 515.0, 465.0, 540.0, 680.0, 820.0, 958.7, 743.6, 790.0, 863.3, 1095.6, 980.0]) / 1000.0
n_cauc    = np.array([3.5, 6.2, 14.2, 24.3, 53.5, 133.0, 188.0, 376.0, 503.0, 585.0, 600.0, 580.0, 555.0, 570.0, 597.5, 635.0, 685.0, 740.0, 800.0, 865.0, 910.0, 952.0, 750.0, 770.0]) / 1000.0
siberia   = np.array([22.8, 35.9, 61.2, 82.1, 104.4, 141.9, 207.5, 337.6, 420.2, 440.9, 441.0, 441.0, 441.0, 445.0, 451.7, 465.0, 485.0, 505.0, 527.4, 522.1, 500.0, 483.1, 442.1, 460.0]) / 1000.0
tot_pre   = rus_by_ua + rus_core + steppe_cr + n_cauc + siberia

axA.stackplot(
    x_pre, rus_by_ua, rus_core, steppe_cr, n_cauc, siberia,
    labels=[
        "East Slavic Forest & Forest-Steppe (BY/UA)",
        "Russian Forest Core & Middle Volga",
        "Pontic-Caspian Steppe, Crimea & Lower Volga",
        "North Caucasus (Circassia, Vainakh, Dagestan)",
        "Urals, Siberia & Far East"
    ],
    colors=["#e09f3e", "#3b7ea1", "#d97706", "#8e5ea2", "#5c9e78"],
    alpha=0.82
)
axA.plot(x_pre, tot_pre, color="#111827", lw=2.0, label="POLARIS Consolidated Total (14 Specialist Masks)")
axA.fill_between(x_pre, tot_pre * 0.74, tot_pre * 1.28, color="#111827", alpha=0.12, label="±25-30% Synthesis Uncertainty Band")

bench_yrs = np.array([-4000, -2000, -1000, 0, 500, 1000, 1200, 1300, 1400], dtype=float)
bench_mcej = np.array([0.55, 1.15, 1.85, 3.10, 3.35, 6.80, 10.60, 9.20, 10.40])
axA.scatter(map_x_pre(bench_yrs), bench_mcej, color="#dc2626", marker="D", s=28, zorder=6, edgecolors="white", linewidths=0.6, label="McEvedy & Jones (1978) / HYDE 3.2 Benchmark")

xtick_yrs = [-10000, -6000, -3000, -1000, 0, 300, 500, 900, 1200, 1400]
xtick_lbls = ["10000BC", "6000BC", "3000BC", "1000BC", "1AD", "300AD", "500AD", "900AD", "1200AD", "1400AD"]
axA.set_xticks(map_x_pre(np.array(xtick_yrs, dtype=float)))
axA.set_xticklabels(xtick_lbls, fontsize=7.2, rotation=20)
axA.set_xlim(0, 100)
axA.set_ylim(0, 15.6)
axA.set_ylabel("Population (Millions)", fontsize=8.3)
axA.grid(True, linestyle=":", alpha=0.5)
axA.tick_params(axis="y", labelsize=7.8)
axA.legend(loc="upper left", fontsize=6.6, frameon=True, facecolor="white", edgecolor="#cbd5e1", ncol=1)
axA.set_title("A. Pre-Modern Demographic Trajectory by Macro-Region (10000BC-1400AD)\nReconstructed population across 14 specialist regional divisions with historical benchmark comparisons", fontsize=8.6, fontweight="bold", pad=6)

for lbl, yr, yval, dx, dy in [
    ("Trypillia Peak\n(1,14M, 3000BC)", -3000, 1.14, -10, 22),
    ("Chernyakhov\n(4,21M, 300AD)", 300, 4.21, -26, 24),
    ("500AD Trough\n(3,86M)", 500, 3.86, 18, 22),
    ("Pre-Mongol Peak\n(11,84M, 1200AD)", 1200, 11.84, -46, 14),
    ("Post-Mongol\n(10,06M, 1300AD)", 1300, 10.06, -34, -26),
]:
    xp = float(map_x_pre(np.array([yr], dtype=float))[0])
    axA.annotate(lbl, xy=(xp, yval), xytext=(dx, dy), textcoords="offset points",
                 fontsize=6.2, fontweight="bold", color="#111827", ha="center", zorder=10.0,
                 bbox=dict(boxstyle="round,pad=0.12", fc="white", ec="#6b7280", lw=0.4, alpha=1.0),
                 arrowprops=dict(arrowstyle="->", color="#374151", lw=0.6, zorder=6.0))

axB = axes[0, 1]
epochs_post = [
    ("Tsardom of Russia & Borderlands (1400-1720AD)", "#1d4ed8", [1400, 1450, 1500, 1550, 1600, 1615, 1648, 1667, 1678, 1700, 1710, 1720],
     [11.36, 12.69, 14.29, 16.21, 17.78, 16.80, 20.70, 18.60, 19.96, 22.06, 21.55, 22.83]),
    ("Early Imperial Russia (1721-1815AD)", "#0284c7", [1721, 1744, 1762, 1782, 1795, 1811, 1815],
     [23.89, 27.49, 32.34, 38.42, 43.70, 49.49, 51.17]),
    ("Late Imperial Russia (1815-1917AD, +Poland)", "#7c3aed", [1815, 1835, 1850, 1858, 1870, 1885, 1897, 1914, 1917],
     [57.87, 68.71, 78.34, 83.92, 94.58, 111.69, 123.89, 167.95, 165.38]),
    ("First World War & Civil War (1914-1926AD)", "#ea580c", [1914, 1917, 1920, 1922, 1926],
     [167.95, 165.38, 152.05, 148.66, 167.78]),
    ("Soviet Lenin-Stalin (1926-1953AD, -Fin/Pol)", "#dc2626", [1926, 1930, 1933, 1937, 1939, 1941, 1945, 1947, 1950, 1953],
     [145.07, 153.85, 149.93, 157.32, 166.20, 172.58, 142.62, 146.24, 155.12, 165.35]),
    ("Soviet Post-Stalin (1953-1991AD)", "#b91c1c", [1953, 1959, 1970, 1979, 1989, 1991],
     [165.35, 177.40, 197.91, 210.07, 222.88, 224.55]),
    ("Post-Soviet Space RU+UA+BY (1991-2021AD)", "#059669", [1991, 1995, 2000, 2005, 2010, 2014, 2018, 2021],
     [212.26, 212.82, 208.48, 203.24, 200.77, 199.90, 199.49, 198.08]),
    ("Russian Invasion of Ukraine (2021-2026AD)", "#111827", [2021, 2022, 2023, 2024, 2025, 2026],
     [198.08, 192.05, 190.47, 190.08, 189.40, 188.56])
]

for lbl, col, yrs, vals in epochs_post:
    axB.plot(yrs, vals, color=col, lw=2.1, marker="o", markersize=3.5, label=lbl)

axB.plot([1815, 1815], [51.17, 57.87], color="#7c3aed", linestyle=":", lw=1.4)
axB.plot([1926, 1926], [167.78, 145.07], color="#dc2626", linestyle=":", lw=1.4)
axB.plot([1991, 1991], [224.55, 212.26], color="#059669", linestyle=":", lw=1.4)

for lbl, x, y, dx, dy in [
    ("Time of Troubles\n& Ruin (1615-67)", 1615, 16.80, -10, 22),
    ("Congress Poland\nSplice (+6,7M, 1815)", 1815, 57.87, -42, 18),
    ("1897 Census\n(123,9M)", 1897, 123.89, -46, -26),
    ("1914 Peak (168,0M)", 1914, 167.95, -52, 14),
    ("1922 Famine & -22,7M\nFin/Pol Splice (145,1M)", 1926, 145.07, -56, 18),
    ("1933 Famine (149,9M)\n& 1941 Peak (172,6M)", 1941, 172.58, -44, 20),
    ("1945 WWII Trough\n(142,6M, -30,0M)", 1945, 142.62, 18, -28),
    ("1991 Peak (224,6M)\n& -12,3M Baltic/Mold.", 1991, 224.55, -52, 10),
    ("2022 Invasion\n(192,1M)", 2022, 192.05, 24, 16),
]:
    axB.annotate(lbl, xy=(x, y), xytext=(dx, dy), textcoords="offset points",
                 fontsize=6.0, fontweight="bold", color="#111827", ha="center", zorder=10.0,
                 bbox=dict(boxstyle="round,pad=0.12", fc="white", ec="#6b7280", lw=0.4, alpha=1.0),
                 arrowprops=dict(arrowstyle="->", color="#374151", lw=0.55, zorder=6.0))

axB.set_xlim(1390, 2038)
axB.set_ylim(0, 252)
axB.set_xlabel("Year (AD)", fontsize=8.3)
axB.set_ylabel("Population (Millions)", fontsize=8.3)
axB.grid(True, linestyle=":", alpha=0.5)
axB.tick_params(labelsize=7.8)
axB.legend(loc="upper left", fontsize=6.4, frameon=True, facecolor="white", edgecolor="#cbd5e1")
axB.set_title("B. National Epoch Trajectories, Border Splices & Demographic Shocks (1400AD-2026AD)\nPriority 3 national masks showing territorial boundary splices (dotted) and crisis troughs", fontsize=8.6, fontweight="bold", pad=6)

axC = axes[1, 0]
hor_labels = ["10000BC", "4000BC", "1000BC", "1AD", "500AD", "1000AD", "1200AD", "1500AD", "1700AD", "1815AD", "1897AD", "1926AD", "1959AD", "1989AD", "2026AD"]
x_hor = np.arange(len(hor_labels))

sh_ua_by = np.array([43.8, 56.9, 40.3, 35.3, 36.9, 40.0, 41.2, 29.5, 27.8, 24.5, 23.2, 24.8, 25.1, 23.4, 24.8])
sh_ru_eu = np.array([14.8, 10.8, 12.1, 16.8, 23.8, 32.4, 39.4, 43.2, 45.4, 41.2, 36.5, 42.5, 40.2, 36.8, 41.2])
sh_step  = np.array([15.4, 19.2, 32.9, 35.7, 27.5, 20.8, 15.3, 11.8, 10.6, 11.8, 15.1, 16.2, 14.8, 16.5, 16.8])
sh_sib   = np.array([26.0, 13.1, 14.7, 12.2, 11.8,  6.8,  4.1,  4.5,  5.2,  6.5,  9.2, 16.5, 15.4, 17.8, 17.2])
sh_west  = np.array([ 0.0,  0.0,  0.0,  0.0,  0.0,  0.0,  0.0, 11.0, 11.0, 16.0, 16.0,  0.0,  4.5,  5.5,  0.0])

tot_sh = sh_ua_by + sh_ru_eu + sh_step + sh_sib + sh_west
axC.stackplot(
    x_hor,
    sh_ua_by / tot_sh * 100.0,
    sh_ru_eu / tot_sh * 100.0,
    sh_step  / tot_sh * 100.0,
    sh_sib   / tot_sh * 100.0,
    sh_west  / tot_sh * 100.0,
    labels=[
        "Ukraine & Belarus (Dnieper, Volhynia, Galicia, Polotsk-Minsk)",
        "European Russia Core & Middle Volga (Oka-Volga, Novgorod, Central Black-Earth)",
        "Southern Steppe, Crimea & North Caucasus (Novorossiya, Don-Kuban, Lower Volga, Caucasus)",
        "Urals, Siberia & Russian Far East (Perm-Sverdlovsk, Ob-Irtysh, Yenisei-Lena, Pacific)",
        "Western Borderlands in Scope (Baltic Provinces/SSRs, Finland, Congress Poland, Moldavia)"
    ],
    colors=["#e09f3e", "#3b7ea1", "#d97706", "#5c9e78", "#8e5ea2"],
    alpha=0.85
)
axC.set_xticks(x_hor)
axC.set_xticklabels(hor_labels, fontsize=7.0, rotation=25)
axC.set_xlim(0, len(hor_labels) - 1)
axC.set_ylim(0, 100)
axC.set_ylabel("Share of POLARIS Total Population (%)", fontsize=8.3)
axC.grid(True, linestyle=":", alpha=0.45, color="white")
axC.tick_params(axis="y", labelsize=7.8)
axC.legend(loc="lower left", fontsize=6.3, frameon=True, facecolor="white", edgecolor="#cbd5e1", framealpha=0.92)
axC.set_title("C. Structural Shift of Macro-Regional Population Shares Across the Holocene (10000BC-2026AD)\nTransition from Trypillia/Dnieper dominance to the Oka-Volga forest core, Southern Steppe & Trans-Ural East", fontsize=8.6, fontweight="bold", pad=6)

axD = axes[1, 1]
urb_horizons = ["1000BC", "500BC", "1AD", "500AD", "1000AD", "1200AD", "1300AD", "1500AD", "1678AD", "1795AD", "1858AD", "1897AD", "1914AD", "1926AD", "1939AD", "1959AD", "1989AD", "2021AD", "2026AD"]
x_urb = np.arange(len(urb_horizons))
tot_pop_u = np.array([2.30, 3.28, 3.63, 3.86, 7.74, 11.84, 10.06, 14.29, 19.96, 43.70, 83.92, 123.89, 167.95, 145.07, 166.20, 177.40, 222.88, 198.08, 188.56])
urb_sh_pct = np.array([0.8, 2.5, 3.1, 1.6, 5.4, 6.8, 5.2, 4.1, 4.6, 5.8, 7.8, 13.4, 15.8, 17.9, 32.8, 48.7, 66.4, 73.9, 74.8])
urb_pop_m = tot_pop_u * (urb_sh_pct / 100.0)
rur_pop_m = tot_pop_u - urb_pop_m

axD.bar(x_urb, rur_pop_m, width=0.66, color="#5c9e78", alpha=0.85, label="Rural Substrata Population (Millions)")
axD.bar(x_urb, urb_pop_m, width=0.66, bottom=rur_pop_m, color="#1d4ed8", alpha=0.90, label="Urban Settlement Population (Stadestér, Millions)")

axD2 = axD.twinx()
axD2.plot(x_urb, urb_sh_pct, color="#dc2626", lw=2.3, marker="s", markersize=4.5, label="Urban Population Share (%)")
axD2.set_ylabel("Urban Share of Total Population (%)", fontsize=8.3, color="#dc2626")
axD2.tick_params(axis="y", labelsize=7.8, colors="#dc2626")
axD2.set_ylim(0, 88)

axD.set_xticks(x_urb)
axD.set_xticklabels(urb_horizons, fontsize=6.8, rotation=28)
axD.set_ylabel("Total Population (Millions)", fontsize=8.3)
axD.set_ylim(0, 248)
axD.grid(True, axis="y", linestyle=":", alpha=0.5)
axD.tick_params(axis="y", labelsize=7.8)

lines1, labels1 = axD.get_legend_handles_labels()
lines2, labels2 = axD2.get_legend_handles_labels()
axD.legend(lines1 + lines2, labels1 + labels2, loc="upper left", fontsize=6.8, frameon=True, facecolor="white", edgecolor="#cbd5e1")
axD.set_title("D. Long-Run Urbanisation and Settlement Trajectories (1000BC-2026AD)\n5.099 settlement trajectories across 3.242 geo-referenced historical centres", fontsize=8.6, fontweight="bold", pad=6)

out_fig3 = fig_dir / "polaris_holocene_trajectories.png"
fig.savefig(out_fig3, dpi=300)
plt.close(fig)
print("Saved:", out_fig3)

# ==============================================================================
# FIGURE 4: PRE-MODERN REGIONAL DENSITY CHOROPLETHS (14 SPECIALIST DIVISIONS!)
# ==============================================================================
print("Generating Figure 4: polaris_premodern_choropleths.png ...")

def interp_spec_pop_k(spec_key, yr_int):
    pdict = DUMP["areal_masks"][spec_key]["pop_totals_k"]
    if str(yr_int) in pdict:
        return float(pdict[str(yr_int)])
    yrs = sorted(int(k) for k in pdict.keys())
    if yr_int <= yrs[0]:
        return float(pdict[str(yrs[0])])
    if yr_int >= yrs[-1]:
        return float(pdict[str(yrs[-1])])
    for i in range(len(yrs) - 1):
        if yrs[i] <= yr_int <= yrs[i+1]:
            a = (yr_int - yrs[i]) / (yrs[i+1] - yrs[i])
            return (1.0 - a) * float(pdict[str(yrs[i])]) + a * float(pdict[str(yrs[i+1])])
    return 0.0

print("Saved:", out_fig3)

# ==============================================================================
# FIGURE 4: PRE-MODERN REGIONAL DENSITY CHOROPLETHS (14 SPECIALIST DIVISIONS!)
# ==============================================================================
print("Generating Figure 4: polaris_premodern_choropleths.png ...")

def interp_spec_pop_k(spec_key, yr_int):
    pdict = DUMP["areal_masks"][spec_key]["pop_totals_k"]
    if str(yr_int) in pdict:
        return float(pdict[str(yr_int)])
    yrs = sorted(int(k) for k in pdict.keys())
    if yr_int <= yrs[0]:
        return float(pdict[str(yrs[0])])
    if yr_int >= yrs[-1]:
        return float(pdict[str(yrs[-1])])
    for i in range(len(yrs) - 1):
        if yrs[i] <= yr_int <= yrs[i+1]:
            a = (yr_int - yrs[i]) / (yrs[i+1] - yrs[i])
            return (1.0 - a) * float(pdict[str(yrs[i])]) + a * float(pdict[str(yrs[i+1])])
    return 0.0

pre_panels = [
    {
        "year": -3500,
        "title": "A. 3500BC: Eneolithic Trypillia Mega-Sites & Yamnaya Horizon",
        "subtitle": "Proto-urban mega-sites across the forest-steppe and early pastoralist settlement on the open steppe (n=1,14M)",
        "sites": [
            ("Talianki (15k)", 30.53, 48.80, 0.6, 5.0),
            ("Maidanetske (12k)", 30.69, 48.81, 4.5, 2.2),
            ("Nebelivka (10k)", 30.57, 48.64, 0.8, -4.5),
            ("Sredny Stog / Dnieper", 35.15, 47.85, 4.2, -3.5),
            ("Khvalynsk (Volga)", 48.10, 52.50, 3.5, 3.0),
            ("Karelia Rock Art", 34.50, 62.00, 3.0, 4.0),
            ("Minusinsk Afanasievo", 91.70, 53.70, 0.0, 4.0)
        ]
    },
    {
        "year": 100,
        "title": "B. 100AD: Classical Antiquity & Sarmatian Pastoralism",
        "subtitle": "Black Sea trading poleis, Late Scythian agriculture in Crimea, and northern woodland settlements (n=3,92M)",
        "sites": [
            ("Olbia (15k)", 31.90, 46.70, 2.5, 3.5),
            ("Tanais (10k)", 39.34, 47.27, 3.5, 4.0),
            ("Panticapaeum (32k)", 36.47, 45.35, 4.5, -1.0),
            ("Chersonesos (22k)", 33.49, 44.61, 2.8, -4.5),
            ("Derbent Pass (12k)", 48.29, 42.06, 4.0, 2.0),
            ("Dyakovo (Moskva)", 37.66, 55.66, 3.0, 4.0),
            ("Tashtyk (Yenisei)", 91.40, 53.70, 0.0, 4.0)
        ]
    },
    {
        "year": 500,
        "title": "C. 500AD: Migration Period Demographic Contraction",
        "subtitle": "Pastoralist withdrawal across the steppe and Slavic-Baltic woodland refuge zones (n=3,86M)",
        "sites": [
            ("Chersonesos (20k)", 33.49, 44.61, 2.5, -3.5),
            ("Derbent (15k)", 48.29, 42.06, 4.0, 2.0),
            ("Kiev / Korchak (5k)", 30.52, 50.45, 2.0, -2.5),
            ("Zimno (Volhynia)", 24.33, 50.80, 2.2, 2.0),
            ("Pskov / Izborsk", 28.33, 57.82, 2.5, 3.5),
            ("Imenkovo (Kama-Volga)", 49.20, 55.30, 3.5, 2.5),
            ("Upper Ob Forest", 83.00, 54.00, 0.0, 4.0)
        ]
    },
    {
        "year": 1200,
        "title": "D. 1200AD: Pre-Mongol Urban & Agrarian Flourishing",
        "subtitle": "Mediaeval settlement peak across Kievan Rus, Volga Bulgaria and Alania before the Mongol invasion (n=11,84M)",
        "sites": [
            ("Halych (20k)", 24.73, 49.12, 2.2, 2.5),
            ("Chernigov (30k)", 31.29, 51.49, 2.5, 3.0),
            ("Kiev (50k)", 30.52, 50.45, 1.5, -2.5),
            ("Vladimir (25k)", 40.41, 56.13, 3.0, 3.0),
            ("Novgorod (35k)", 31.27, 58.52, -1.5, 3.0),
            ("Bulgar (50k)", 49.06, 54.98, 3.0, 2.0),
            ("Bilyar (40k)", 50.39, 54.99, 3.0, -2.0),
            ("Maghas / Alania (20k)", 44.68, 43.02, 3.5, -2.5)
        ]
    }
]

fig, axes = plt.subplots(2, 2, figsize=(18.6, 11.4), dpi=300)
fig.patch.set_facecolor("white")
plt.subplots_adjust(left=0.02, right=0.92, top=0.895, bottom=0.055, wspace=0.05, hspace=0.18)

fig.suptitle(
    "Premodern Population Density by Region, 3500BC-1200AD",
    fontsize=13.5, fontweight="bold", y=0.968, color="#111827"
)

cmap_pre = plt.cm.YlOrBr
norm_pre = mcolors.LogNorm(vmin=0.005, vmax=35.0)

for idx, pinfo in enumerate(pre_panels):
    ax = axes[idx // 2, idx % 2]
    yr = pinfo["year"]
    draw_basemap(ax, land_east, lakes_east, rivers_east)

    for s_i, sk in enumerate(spec_keys):
        if sk not in SPEC_GEOMS or SPEC_GEOMS[sk].is_empty:
            continue
        area = float(DUMP["areal_masks"][sk]["total_area_km2"])
        pop = interp_spec_pop_k(sk, yr) * 1000.0
        dens = max(0.005, pop / max(1.0, area))
        col_rgba = cmap_pre(norm_pre(dens))
        pg = _prepare_and_project(SPEC_GEOMS[sk], PROJ_EAST, 0.30)
        mpatches = _proj_geom_to_patches(pg)
        if mpatches:
            ax.add_collection(PatchCollection(
                mpatches, facecolor=col_rgba, edgecolor="#111827",
                linewidths=0.65, linestyle="--", alpha=0.88, zorder=2.2 + s_i * 0.005
            ))

    draw_clean_graticule(ax, PROJ_EAST, xlim_e, ylim_e, [45, 55, 65], [20, 60, 100, 140, 180], (5.0, 194.0))

    for lbl, lon, lat, dx, dy in pinfo["sites"]:
        x0, y0 = PROJ_EAST.fwd_pt(lon, lat)
        place_callout_in_bounds(ax, lbl, x0, y0, dx, dy, xlim_e, ylim_e, fs=6.0, dot_col="#dc2626", dot_sz=20)

    ax.set_xlim(*xlim_e)
    ax.set_ylim(*ylim_e)
    ax.set_aspect("equal", adjustable="box")
    ax.set_xticks([])
    ax.set_yticks([])
    ax.text(0.5, 1.052, pinfo["title"], transform=ax.transAxes, fontsize=8.6, fontweight="bold", ha="center", va="bottom", color="#111827")
    ax.text(0.5, 1.010, pinfo["subtitle"], transform=ax.transAxes, fontsize=6.9, ha="center", va="bottom", color="#374151")

cbar_ax4 = fig.add_axes([0.935, 0.14, 0.016, 0.70])
sm4 = plt.cm.ScalarMappable(cmap=cmap_pre, norm=norm_pre)
sm4.set_array([])
cb4 = fig.colorbar(sm4, cax=cbar_ax4)
cb4.set_ticks([0.01, 0.1, 1.0, 10.0, 35.0])
cb4.set_ticklabels(["0,01", "0,1", "1", "10", "35"])
cb4.set_label("Regional Population Density (inhabitants / km²)", fontsize=8.8, fontweight="bold")
cb4.ax.tick_params(labelsize=7.8)

out_fig4 = fig_dir / "polaris_premodern_choropleths.png"
fig.savefig(out_fig4, dpi=300)
plt.close(fig)
print("Saved:", out_fig4)

print("Generating Figure 5: polaris_modern_choropleths.png ...")

def get_reg_pop(epoch_key, reg_id, yr_int):
    pdict = CHORO_DATA[epoch_key][reg_id]["population"]
    if str(yr_int) in pdict:
        return float(pdict[str(yr_int)])
    yrs = sorted(int(k) for k in pdict.keys())
    if yr_int <= yrs[0]:
        return float(pdict[str(yrs[0])])
    if yr_int >= yrs[-1]:
        return float(pdict[str(yrs[-1])])
    for i in range(len(yrs) - 1):
        if yrs[i] <= yr_int <= yrs[i+1]:
            a = (yr_int - yrs[i]) / (yrs[i+1] - yrs[i])
            return (1.0 - a) * float(pdict[str(yrs[i])]) + a * float(pdict[str(yrs[i+1])])
    return 0.0

mod_panels = [
    {
        "epoch_id": "tsardom_of_russia",
        "year": 1678,
        "title": "A. 1678AD: Tsardom of Russia, Polish-Lithuanian Borderlands and Siberian Frontier",
        "subtitle": "Seventeenth-century household registrations and eastern settlements across 38 regions (n=19,96M)",
        "cities": [
            ("Moscow (200k)", 37.62, 55.75, 3.5, 2.5),
            ("Vilnius (25k)", 25.28, 54.69, -1.2, 3.2),
            ("Lviv (25k)", 24.03, 49.84, 1.8, 2.0),
            ("Kiev (18k)", 30.52, 50.45, 2.5, -2.5),
            ("Yaroslavl (35k)", 39.87, 57.63, 4.0, 4.0),
            ("Astrakhan (20k)", 48.03, 46.35, 4.0, -3.0),
            ("Tobolsk (15k)", 68.25, 58.20, 0.0, 4.0),
            ("Yakutsk (3k)", 129.73, 62.03, -2.0, 4.0)
        ]
    },
    {
        "epoch_id": "imperial_russia_post_1815",
        "year": 1914,
        "title": "B. 1914AD: Late Russian Empire on the Eve of the First World War",
        "subtitle": "Demographic expansion, agrarian resettlement and industrial basins across 48 provinces (n=167,95M)",
        "cities": [
            ("St Petersburg (2,12M)", 30.31, 59.94, 3.0, 3.5),
            ("Moscow (1,76M)", 37.62, 55.75, 4.0, 2.0),
            ("Warsaw (885k)", 21.01, 52.23, 2.0, -2.0),
            ("Odessa (631k)", 30.73, 46.48, 2.0, -3.2),
            ("Kyiv (626k)", 30.52, 50.45, 2.5, -2.5),
            ("Riga (518k)", 24.11, 56.95, -1.2, 3.2),
            ("Tomsk / Omsk (135k)", 73.37, 54.99, 0.0, 4.0),
            ("Vladivostok (95k)", 131.89, 43.12, -2.0, 3.0)
        ]
    },
    {
        "epoch_id": "soviet_post_stalin",
        "year": 1989,
        "title": "C. 1989AD: Soviet Union at the Final All-Union Census",
        "subtitle": "Peak Soviet urban and industrial distribution across 41 core divisions prior to dissolution (n=222,88M)",
        "cities": [
            ("Moscow (8,97M)", 37.62, 55.75, 3.5, 3.5),
            ("Leningrad (5,02M)", 30.31, 59.94, -1.5, 3.5),
            ("Kyiv (2,59M)", 30.52, 50.45, -1.0, 1.8),
            ("Minsk (1,61M)", 27.56, 53.90, -1.2, 2.5),
            ("Kharkiv (1,61M)", 36.23, 49.99, 2.5, -2.5),
            ("Sverdlovsk (1,37M)", 60.60, 56.84, 2.0, 4.0),
            ("Novosibirsk (1,44M)", 82.92, 55.03, 0.0, -4.0),
            ("Vladivostok (634k)", 131.89, 43.12, -2.0, 3.0)
        ]
    },
    {
        "epoch_id": "russian_invasion_of_ukraine",
        "year": 2026,
        "title": "D. 2026AD: Post-Soviet Space & the Russo-Ukrainian War",
        "subtitle": "Post-Soviet space across 123 divisions, showing frontline and occupied territories (n=188,56M)",
        "cities": [
            ("Moscow (13,1M)", 37.62, 55.75, 3.0, 3.0),
            ("St Petersburg (5,6M)", 30.31, 59.94, -1.5, 3.5),
            ("Kyiv (2,95M)", 30.52, 50.45, 2.5, -2.5),
            ("Minsk (1,99M)", 27.56, 53.90, -1.2, 2.5),
            ("Krasnodar (1,1M)", 38.98, 45.04, 3.0, -3.0),
            ("Tyumen (850k)", 65.53, 57.15, 2.0, 4.0),
            ("Novosibirsk (1,63M)", 82.92, 55.03, 0.0, -4.0),
            ("Vladivostok (600k)", 131.89, 43.12, -2.0, 3.0)
        ]
    }
]

fig, axes = plt.subplots(2, 2, figsize=(18.6, 11.4), dpi=300)
fig.patch.set_facecolor("white")
plt.subplots_adjust(left=0.02, right=0.92, top=0.895, bottom=0.055, wspace=0.05, hspace=0.18)

fig.suptitle(
    "Modern Population Density by Region, 1678AD-2026AD",
    fontsize=13.5, fontweight="bold", y=0.968, color="#111827"
)

cmap_mod = plt.cm.plasma_r
norm_mod = mcolors.LogNorm(vmin=0.02, vmax=250.0)

for idx, pinfo in enumerate(mod_panels):
    ax = axes[idx // 2, idx % 2]
    ep_id = pinfo["epoch_id"]
    yr = pinfo["year"]
    draw_basemap(ax, land_east, lakes_east, rivers_east)

    if ep_id == "russian_invasion_of_ukraine":
        gj_base = json.loads((cache_dir / "post_soviet_space_polygons.geojson").read_text(encoding="utf-8"))
        for f in gj_base["features"]:
            if not f.get("geometry"):
                continue
            rid = f["properties"]["id"]
            area = float(CHORO_DATA["post_soviet_space"][rid]["area_km2"])
            pop = get_reg_pop("post_soviet_space", rid, 2021) * 0.90
            dens = max(0.02, pop / max(1.0, area))
            col_rgba = cmap_mod(norm_mod(dens))
            pg = _prepare_and_project(shape(f["geometry"]), PROJ_EAST, 0.30)
            mpatches = _proj_geom_to_patches(pg)
            if mpatches:
                ax.add_collection(PatchCollection(mpatches, facecolor=col_rgba, edgecolor="none", alpha=0.86, zorder=2.1))

    gj = json.loads((cache_dir / f"{ep_id}_polygons.geojson").read_text(encoding="utf-8"))
    feats = sorted(gj["features"], key=lambda f: shape(f["geometry"]).area if f.get("geometry") else 0.0, reverse=True)

    for f_i, f in enumerate(feats):
        if not f.get("geometry"):
            continue
        rid = f["properties"]["id"]
        area = float(CHORO_DATA[ep_id][rid]["area_km2"])
        pop = get_reg_pop(ep_id, rid, yr)
        dens = max(0.02, pop / max(1.0, area))
        col_rgba = cmap_mod(norm_mod(dens))
        pg = _prepare_and_project(shape(f["geometry"]), PROJ_EAST, 0.30)
        mpatches = _proj_geom_to_patches(pg)
        if mpatches:
            ax.add_collection(PatchCollection(
                mpatches, facecolor=col_rgba, edgecolor="#1f2937",
                linewidths=0.32 if ep_id != "russian_invasion_of_ukraine" else 0.22,
                alpha=0.86, zorder=2.2 + f_i * 0.002
            ))

    if ep_id == "russian_invasion_of_ukraine":
        if DS_LIB_PATCHES_EAST:
            ax.add_collection(PatchCollection([MplPolygon(p.get_xy(), closed=True) for p in DS_LIB_PATCHES_EAST],
                                              facecolor="none", edgecolor="#10b981", linewidths=0.85, linestyle="--", zorder=4.4))
        if DS_OCC_PATCHES_EAST:
            ax.add_collection(PatchCollection([MplPolygon(p.get_xy(), closed=True) for p in DS_OCC_PATCHES_EAST],
                                              facecolor="none", edgecolor="#ef4444", linewidths=0.95, zorder=4.5))

    draw_clean_graticule(ax, PROJ_EAST, xlim_e, ylim_e, [45, 55, 65], [20, 60, 100, 140, 180], (5.0, 194.0))

    for lbl, lon, lat, dx, dy in pinfo["cities"]:
        x0, y0 = PROJ_EAST.fwd_pt(lon, lat)
        place_callout_in_bounds(ax, lbl, x0, y0, dx, dy, xlim_e, ylim_e, fs=6.0, dot_col="#10b981", dot_sz=20)

    ax.set_xlim(*xlim_e)
    ax.set_ylim(*ylim_e)
    ax.set_aspect("equal", adjustable="box")
    ax.set_xticks([])
    ax.set_yticks([])
    ax.text(0.5, 1.052, pinfo["title"], transform=ax.transAxes, fontsize=8.6, fontweight="bold", ha="center", va="bottom", color="#111827")
    ax.text(0.5, 1.010, pinfo["subtitle"], transform=ax.transAxes, fontsize=6.9, ha="center", va="bottom", color="#374151")

cbar_ax5 = fig.add_axes([0.935, 0.14, 0.016, 0.70])
sm5 = plt.cm.ScalarMappable(cmap=cmap_mod, norm=norm_mod)
sm5.set_array([])
cb5 = fig.colorbar(sm5, cax=cbar_ax5)
cb5.set_ticks([0.1, 1.0, 10.0, 100.0, 250.0])
cb5.set_ticklabels(["0,1", "1", "10", "100", "250"])
cb5.set_label("Regional Population Density (inhabitants / km²)", fontsize=8.8, fontweight="bold")
cb5.ax.tick_params(labelsize=7.8)

out_fig5 = fig_dir / "polaris_modern_choropleths.png"
fig.savefig(out_fig5, dpi=300)
plt.close(fig)
print("Saved:", out_fig5)
