---
title: "Pre-Columbian Hudson Bay and Boreal Shield: Subarctic Cree, Innu and Caribou Inuit Demography"
subtitle: "CENTAUR-II: Kivalliq Barrens, Hudson-James Lowlands and Ungava-Nunavik, -10000 to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: hudson_bay_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_hudson_bay_spatial.png"
hero_caption: "Three subarctic and coastal divisions and 10 catalogued settlements across the Hudson Bay and Boreal Shield basin (2,35M km²) from 10000 BC to 1600 AD."
hero_label: "fig:hero-hudson-bay"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

The Hudson Bay and Boreal Shield basin (`2,35M km²`, `52.021` 5-arcminute pixels) experienced the latest post-glacial human colonisation in continental Canada because the Laurentide ice sheet, glacial Lake Agassiz-Ojibway and the marine Tyrrell Sea covered the lowlands until roughly `7500 BC` [@dyke2004; @wright1995]. Across three sub-regions reconstructed under CENTAUR-II, population remains `0` from `10000 BC` to `8000 BC`, emerges at `450` in `7000 BC`, reaches `3,9k` in `5000 BC` and `16,3k` at `0 AD` and peaks at `23k` in `1500-1550 AD` (`0,98` persons per 100 km²) before easing `1,52%` to `22,65k` in `1600 AD`. In `1500 AD`, the Hudson and James Bay Lowlands and Northern Ontario Shield (`45,7%` of population) together with Eastmain, Nunavik and Ungava (`34,8%`) hold `80,4%` of inhabitants, while Kivalliq barrens contribute `19,6%` at `1,38` persons per 100 km². Reconciled with `10` verified settlements and `sites_p3k14c_na` Matérn ($\nu = 3/2$) kriging priors, the series preserves cross-border continuity into northern Minnesota and Michigan.

# Background

Previous world population models [@mcevedy1978; @kleingoldewijk2017] assigned static subarctic background values across the entire Canadian Shield without accounting for rapid post-glacial isostatic rebound or the ecological boundary between boreal Algonquian woodlands and coastal tundra [@helm1981]. CENTAUR-II partitions `2.346.015 km²` into three drainage and biome units (Table \ref{tab:subregions}).

The Kivalliq and Western Hudson Bay Barren Grounds (`326.116 km²`, `13,9%` of module area) encompass tundra caribou-migration corridors around Baker Lake and Chesterfield Inlet occupied by Sayisi Dene and Caribou Inuit [@clark1977]. South and west of the bay, the Hudson and James Bay Lowlands and Northern Ontario Shield (`999.205 km²`, `42,6%`) unite peatland river mouths (Churchill, Nelson, Severn, Albany and Moose) with Shield copper and wild-rice lake basins inhabited by Swampy Cree, Severn Ojibwe and earlier Laurel communities [@pilon1987; @dawson1983; @martin1999]. East of James Bay, Eastmain, Nunavik and the Ungava Peninsula (`1.020.694 km²`, `43,5%`) span boreal Eeyou-Naskapi interiors and Strait-of-Hudson Dorset-Thule sealing coasts [@plumet1994].

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area km2 (Share)</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th><th class="crd-th">1500AD Density</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Kivalliq and Western Hudson Bay Barren Grounds (Caribou Inuit and Sayisi Dene)</strong></td><td class="crd-td">326.116 (13,9%)</td><td class="crd-td">800</td><td class="crd-td">3,1k</td><td class="crd-td">4,2k</td><td class="crd-td">4,5k</td><td class="crd-td">4,4k</td><td class="crd-td">1,38</td></tr>
<tr><td class="crd-td"><strong>2. Hudson and James Bay Lowlands and Northern Ontario Shield (Swampy Cree and Severn Ojibwe)</strong></td><td class="crd-td">999.205 (42,6%)</td><td class="crd-td">2,2k</td><td class="crd-td">7,9k</td><td class="crd-td">9,9k</td><td class="crd-td">10,5k</td><td class="crd-td">10,3k</td><td class="crd-td">1,05</td></tr>
<tr><td class="crd-td"><strong>3. Eastmain, James Bay East, Nunavik and Ungava Peninsula (Eeyou, Naskapi and Inuit)</strong></td><td class="crd-td">1.020.694 (43,5%)</td><td class="crd-td">900</td><td class="crd-td">5,3k</td><td class="crd-td">7,3k</td><td class="crd-td">8k</td><td class="crd-td">7,9k</td><td class="crd-td">0,78</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">2.346.015 (100%)</td><td class="crd-td">3,9k</td><td class="crd-td">16,3k</td><td class="crd-td">21,4k</td><td class="crd-td">23k</td><td class="crd-td">22,6k</td><td class="crd-td">0,98</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional land area, benchmark populations and 1500 AD density (persons per 100 km2) across the Hudson Bay basin.</figcaption>
</figure>

# Methodology

Rural population allocation uses `sites_p3k14c_na` non-stationary Matérn ($\nu = 3/2$) kriging across `481.752` terrestrial 5-arcminute cells (`1.359` domestic Voronoi catchments plus `171` cross-frontier buffers), driven by `p3k14c` [@bird2022p3k14c] and `c14bazAAR` radiocarbon densities tied to Kelly et al. [@kelly2025] regional curves. Cross-frontier conditioning across the Rainy River and Lake Superior shorelines ensures smooth density continuity into northern Minnesota and Upper Michigan. Within `ViscountSubstrataMosaic`, `10` catalogued settlements are subtracted from sub-regional totals before scaling rural cells inside `hudson_bay_areal_mask.png` and smoothing seams via two 4-pixel passes. All sub-regional series carry `+/- 8%` uncertainty bounds [@ubelaker2006].

# Testing and Validation

All quantitative gatekeepers pass with `0` errors at `GMT+0`:

1. **Kriging Sharpness**: Across all `10` Holocene horizons of `sites_p3k14c_na`, `tau1 = 1,25` (`<= 1,80`), `nugget_to_sill = 0,04` to `0,22` (`< 0,45`) and residual pseudo-$R^2$ ranges from `0,9733` to `0,9992`.
2. **Gazetteer Exhaustiveness**: Verification of `hudson_bay_settlements.json` against `hudson_bay_source_ledger.json5` confirms `10` included settlements, `1` excluded seasonal-camp record, `0` unaccounted candidates and `0` schema errors.
3. **Seam Continuity**: Borders shared with `2.northern_canada`, `3.prairies`, `5.saint_lawrence`, `6.maritimes` and `04.great_lakes` satisfy `p99_soft <= 1,25`.

# Results

## Deglaciation, Shield Archaic and Copper Networks (-10000 to 0 AD)

Final drainage of glacial Lake Agassiz-Ojibway around `6500-6000 BC` and steady post-glacial uplift of the Tyrrell Sea beaches opened interior river corridors to Shield Archaic hunters [@dyke2004; @wright1995]. Module totals rise from `0` in `8000 BC` to `450` in `7000 BC`, `1,85k` in `6000 BC` and `3,9k` in `5000 BC`. By `3000-1000 BC`, Shield Archaic and Old Copper miners at Isle Royale-Minong (`180` peak) exchanged native copper across the Great Lakes-Hudson divide, while Arctic Small Tool and Pre-Dorset bands occupied coastal Kivalliq and Ungava (`Churchill-Seahorse Gully`, `Baker Lake` and `Ivujivik-Nuvuk`), lifting total population to `14k` in `1000 BC` and `16,3k` at `0 AD` [@martin1999; @nash1969; @plumet1994].

## Woodland Mounds, Cree Lowlands and Thule Coastal Shifts (0 to 1600 AD)

Between `0` and `1200 AD`, Laurel Woodland mound-building communities along the Rainy River margin (`Grand Mound` at `380` peak and `McKinstry` at `340`) paired with Selkirk-Blackduck boreal fishers across the Severn, Nelson and Moose river estuaries (`Pilon` [@pilon1987]; `Arzigian` [@arzigian2008]). Farther north, Dorset groups gave way to Thule and Caribou Inuit expansion across Kivalliq and Nunavik [@clark1977; @plumet1994], raising total Hudson Bay population from `17,6k` in `200 AD` to `21,4k` in `1000 AD` and `23k` in `1500-1550 AD`. Early indirect coastal contact and shifts in northern caribou herds reduce totals marginally (`-1,52%`) to `22,65k` by `1600 AD`. Figures \ref{fig:traj} and \ref{fig:shares} illustrate these trajectories and Table \ref{tab:master} compiles the `23`-benchmark series.

<figure class="crd-figure-block" id="fig:traj">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-hudson-bay/fig2_hudson_bay_trajectory.png" alt="fig:traj" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of the Hudson Bay and Boreal Shield basin from 10000 BC to 1600 AD showing post-glacial emergence after 8000 BC and +/- 8% bounds.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-hudson-bay/fig3_hudson_bay_shares.png" alt="fig:shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional population composition across the Hudson Bay basin from 7000 BC to 1600 AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:master">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Kivalliq Barrens</th><th class="crd-th">Hudson-James Cree</th><th class="crd-th">Eastmain-Nunavik</th><th class="crd-th">Total</th><th class="crd-th">8 pct Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0 - 0</td></tr>
<tr><td class="crd-td"><strong>9000BC</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0 - 0</td></tr>
<tr><td class="crd-td"><strong>8000BC</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0 - 0</td></tr>
<tr><td class="crd-td"><strong>7000BC</strong></td><td class="crd-td">150</td><td class="crd-td">300</td><td class="crd-td">0</td><td class="crd-td">450</td><td class="crd-td">414 - 486</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">450</td><td class="crd-td">1,1k</td><td class="crd-td">300</td><td class="crd-td">1,8k</td><td class="crd-td">1,7k - 2k</td></tr>
<tr><td class="crd-td"><strong>5000BC</strong></td><td class="crd-td">800</td><td class="crd-td">2,2k</td><td class="crd-td">900</td><td class="crd-td">3,9k</td><td class="crd-td">3,6k - 4,2k</td></tr>
<tr><td class="crd-td"><strong>4000BC</strong></td><td class="crd-td">1,2k</td><td class="crd-td">3,4k</td><td class="crd-td">1,7k</td><td class="crd-td">6,3k</td><td class="crd-td">5,8k - 6,8k</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">1,6k</td><td class="crd-td">4,6k</td><td class="crd-td">2,6k</td><td class="crd-td">8,8k</td><td class="crd-td">8,1k - 9,5k</td></tr>
<tr><td class="crd-td"><strong>2000BC</strong></td><td class="crd-td">2,1k</td><td class="crd-td">5,8k</td><td class="crd-td">3,6k</td><td class="crd-td">11,5k</td><td class="crd-td">10,6k - 12,4k</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">2,6k</td><td class="crd-td">6,9k</td><td class="crd-td">4,5k</td><td class="crd-td">14k</td><td class="crd-td">12,9k - 15,1k</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">3,1k</td><td class="crd-td">7,9k</td><td class="crd-td">5,3k</td><td class="crd-td">16,3k</td><td class="crd-td">15k - 17,6k</td></tr>
<tr><td class="crd-td"><strong>200AD</strong></td><td class="crd-td">3,4k</td><td class="crd-td">8,4k</td><td class="crd-td">5,8k</td><td class="crd-td">17,6k</td><td class="crd-td">16,2k - 19k</td></tr>
<tr><td class="crd-td"><strong>400AD</strong></td><td class="crd-td">3,6k</td><td class="crd-td">8,9k</td><td class="crd-td">6,2k</td><td class="crd-td">18,7k</td><td class="crd-td">17,2k - 20,2k</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">3,8k</td><td class="crd-td">9,3k</td><td class="crd-td">6,6k</td><td class="crd-td">19,7k</td><td class="crd-td">18,1k - 21,3k</td></tr>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">4k</td><td class="crd-td">9,6k</td><td class="crd-td">7k</td><td class="crd-td">20,6k</td><td class="crd-td">19k - 22,2k</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">4,2k</td><td class="crd-td">9,9k</td><td class="crd-td">7,3k</td><td class="crd-td">21,4k</td><td class="crd-td">19,7k - 23,1k</td></tr>
<tr><td class="crd-td"><strong>1100AD</strong></td><td class="crd-td">4,3k</td><td class="crd-td">10,1k</td><td class="crd-td">7,5k</td><td class="crd-td">21,9k</td><td class="crd-td">20,1k - 23,7k</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">4,3k</td><td class="crd-td">10,2k</td><td class="crd-td">7,7k</td><td class="crd-td">22,3k</td><td class="crd-td">20,5k - 24,1k</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">4,4k</td><td class="crd-td">10,3k</td><td class="crd-td">7,8k</td><td class="crd-td">22,6k</td><td class="crd-td">20,8k - 24,4k</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">4,4k</td><td class="crd-td">10,4k</td><td class="crd-td">8k</td><td class="crd-td">22,9k</td><td class="crd-td">21k - 24,7k</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">4,5k</td><td class="crd-td">10,5k</td><td class="crd-td">8k</td><td class="crd-td">23k</td><td class="crd-td">21,2k - 24,8k</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">4,5k</td><td class="crd-td">10,5k</td><td class="crd-td">8k</td><td class="crd-td">23k</td><td class="crd-td">21,2k - 24,8k</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">4,4k</td><td class="crd-td">10,3k</td><td class="crd-td">7,9k</td><td class="crd-td">22,6k</td><td class="crd-td">20,8k - 24,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Complete 23-benchmark population series for the Hudson Bay and Boreal Shield basin (10000 BC to 1600 AD) with +/- 8% aggregate bounds.</figcaption>
</figure>

# Limitations

Acidic boreal podzol and peatland soils destroy uncharred organic bone across much of the Shield interior, skewing `p3k14c` dates toward raised marine beach ridges along Hudson Bay and stratified riverbanks on the Rainy and Moose rivers [@wright1995; @bird2022p3k14c]. Rapid glacio-isostatic uplift also stranded early Holocene shorelines dozens of kilometres inland, requiring paleoshoreline caution when interpreting early Archaic coastal densities [@dyke2004].

# Sources

<div id="refs"></div>
