---
title: "Pre-Columbian Canadian Prairies: Bison-Hunting Nomads, Aspen Parklands and Woodland Outliers"
subtitle: "CENTAUR-II: Foothill Plains, Saskatchewan Basins and Red-Assiniboine Lowlands, -10000 to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: prairies_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_prairies_spatial.png"
hero_caption: "Four ecological divisions and six catalogued ceremonial and village sites across the Canadian Prairies (1,07M km²) from 10000 BC to 1600 AD."
hero_label: "fig:hero-prairies"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

The Canadian Prairies (`1,07M km²`, `21.191` 5-arcminute pixels) form the northernmost grassland and parkland extension of the Great Plains bison-hunting economy. Reconstructed across four ecological divisions under CENTAUR-II, population grows from `150` early foothill hunters in `10000 BC` to `12,9k` in `5000 BC` and `36,3k` at `0 AD` as communal buffalo pounds, jumps and Oxbow-Besant winter encampments expand across the Saskatchewan and Red-Assiniboine drainages [@brink2008; @peck2011]. Numbers climb to a late-precontact plateau of `46k` in `1500-1550 AD` (`4,29` persons per 100 km²) before dipping `1,52%` to `45,3k` by `1600 AD`. Peak regional density concentrates in the Rocky Mountain Foothills and Bow-Oldman Plains (`9,18` persons per 100 km², `27,2%` of regional total), while the expansive Aspen Parkland and North Saskatchewan Valley holds the largest population share (`29,3%`, `13,5k`). Anchored to `sites_p3k14c_na` Matérn ($\nu = 3/2$) kriging priors and six verified settlement complexes (`0` ledger discrepancies), the dataset links continuously to northern U.S. hydrological units across the 49th parallel.

# Background

Macro-scale atlases [@mcevedy1978; @kleingoldewijk2017] treated the northern plains as uniform low-density steppe, missing the ecological contrast between chinook-warmed foothill wintering valleys, semi-arid Palliser mixedgrass steppe and fertile Red River horticultural floodplains [@bamforth1988; @boyd2006]. CENTAUR-II divides `1.071.166 km²` into four physiographic sub-regions (Table \ref{tab:subregions}).

The Rocky Mountain Foothills and Bow-Oldman Plains (`136.211 km²`, `12,7%`) trace the sheltered fescue-grassland wintering belt of Niitsitapi (Blackfoot) bison-drive complexes such as Head-Smashed-In and Cluny [@brink2008; @forbis1977]. Across the northern ecotone, the Aspen Parkland and North Saskatchewan Valley (`456.477 km²`, `42,6%`) spans the forest-grassland margin where Oxbow, Besant and Plains Cree bands wintered in sheltered coulees around Wanuskewin [@walker1992; @peck2011]. Southward, the South Saskatchewan Mixedgrass Steppe and Qu'Appelle (`217.723 km²`, `20,3%`) covers drier Palliser grasslands linked to Avonlea and Mortlach bow-and-arrow bison hunters [@walde2006]. Eastward, the Red-Assiniboine Plains and Lake Manitoba Lowlands (`260.755 km²`, `24,3%`) integrate glacial Lake Agassiz clay plains with northern Laurel-Blackduck wild-rice and Lockport maize-farming sites [@boyd2006].

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area km2 (Share)</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th><th class="crd-th">1500AD Density</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Rocky Mountain Foothills and Bow-Oldman Plains (Niitsitapi/Blackfoot)</strong></td><td class="crd-td">136.211 (12,7%)</td><td class="crd-td">3,4k</td><td class="crd-td">9,6k</td><td class="crd-td">12,1k</td><td class="crd-td">12,5k</td><td class="crd-td">12,4k</td><td class="crd-td">9,18</td></tr>
<tr><td class="crd-td"><strong>2. Aspen Parkland and North Saskatchewan Valley (Plains Cree and Oxbow-Besant)</strong></td><td class="crd-td">456.477 (42,6%)</td><td class="crd-td">3,7k</td><td class="crd-td">10,6k</td><td class="crd-td">12,9k</td><td class="crd-td">13,5k</td><td class="crd-td">13,3k</td><td class="crd-td">2,96</td></tr>
<tr><td class="crd-td"><strong>3. South Saskatchewan Mixedgrass Steppe and Qu'Appelle (Assiniboine and Avonlea)</strong></td><td class="crd-td">217.723 (20,3%)</td><td class="crd-td">2,6k</td><td class="crd-td">7,2k</td><td class="crd-td">8,8k</td><td class="crd-td">9k</td><td class="crd-td">8,8k</td><td class="crd-td">4,13</td></tr>
<tr><td class="crd-td"><strong>4. Red-Assiniboine Plains and Lake Manitoba Lowlands (Laurel-Blackduck)</strong></td><td class="crd-td">260.755 (24,3%)</td><td class="crd-td">3,2k</td><td class="crd-td">8,9k</td><td class="crd-td">10,7k</td><td class="crd-td">11k</td><td class="crd-td">10,8k</td><td class="crd-td">4,22</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">1.071.166 (100%)</td><td class="crd-td">12,9k</td><td class="crd-td">36,3k</td><td class="crd-td">44,5k</td><td class="crd-td">46k</td><td class="crd-td">45,3k</td><td class="crd-td">4,29</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional land area, benchmark populations and 1500 AD density (persons per 100 km2) across the Canadian Prairies.</figcaption>
</figure>

# Methodology

Spatial allocation draws on `sites_p3k14c_na` non-stationary Matérn ($\nu = 3/2$) kriging across `481.752` terrestrial cells (`1.359` domestic Voronoi catchments plus `171` cross-frontier buffers), combining `p3k14c` [@bird2022p3k14c] and `c14bazAAR` dates with Kelly et al. [@kelly2025] Holocene probability curves. Cross-frontier conditioning across the Montana-North Dakota-Minnesota border guarantees continuous density gradients into the `02.extreme_northern_plains` and `05.souris_red_rainy` U.S. Hydrological Units. Inside `ViscountSubstrataMosaic`, `6` catalogued settlement and ceremonial centres are subtracted from regional totals before scaling rural cells within `prairies_areal_mask.png` and applying two 4-pixel smoothing passes. Every sub-regional benchmark carries `+/- 8%` uncertainty intervals [@ubelaker2006].

# Testing and Validation

All regional gates verify with `0` errors at `GMT+0`:

1. **Kriging Sharpness**: Across all `10` Holocene horizons of `sites_p3k14c_na`, `tau1 = 1,25` (`<= 1,80`), `nugget_to_sill = 0,04` to `0,22` (`< 0,45`) and residual pseudo-$R^2$ spans `0,9733` to `0,9992`.
2. **Gazetteer Exhaustiveness**: Cross-checking `prairies_settlements.json` against `prairies_source_ledger.json5` yields `6` included sites, `1` excluded seasonal-camp aggregate, `0` unaccounted candidates and `0` schema errors.
3. **Seam Continuity**: Boundaries shared with `1.northern_cascadia_and_alaska`, `2.northern_canada`, `4.hudson_bay` and U.S. northern plains units meet `p99_soft <= 1,25`.

# Results

## Glacial Lake Retreat and Middle Holocene Bison Hunters (-10000 to -1000 BC)

In `10000 BC`, glacial Lake Agassiz and Laurentide ice restricted human presence to the Rocky Mountain foothills (`150`), before rapid post-glacial drainage opened the parkland and Red River plains between `9000 BC` (`800`) and `6000 BC` (`8,8k`) [@walker1992]. Mid-Holocene Altithermal warming concentrated herds in the Aspen Parkland and foothill coulees, raising population from `12,9k` in `5000 BC` to `22,3k` in `3000 BC` as communal jump procurement intensified at Head-Smashed-In and Oxbow-Wanuskewin [@brink2008; @walker1992]. By `1000 BC`, Pelican Lake and McKean-Hanna bands lifted total prairie numbers to `32k` (`10,6k` in Aspen Parkland by `0 AD`).

## Communal Jumps, Horticulture and Protohistoric Plateau (0 to 1600 AD)

Adoption of the bow and arrow alongside Avonlea and Besant pottery (`200` to `800 AD`) expanded winter pound logistics across the Palliser steppe, carrying total population from `36,3k` at `0 AD` to `43,5k` in `800 AD` [@vickers1994; @walde2006]. Around `1100` to `1500 AD`, northern maize cultivation appeared along the Red River at Lockport (`520` peak) while fortified earthwork trade centres later emerged at Cluny (`480` in `1550-1600 AD`) on the Bow River, bringing regional totals to `44,5k` in `1000 AD` and `46k` in `1500-1550 AD` [@boyd2006; @forbis1977]. Early protohistoric trade disruptions trim numbers slightly to `45,3k` in `1600 AD`. Figures \ref{fig:traj} and \ref{fig:shares} chart the regional trajectory and Table \ref{tab:master} reports the full `23`-benchmark series.

<figure class="crd-figure-block" id="fig:traj">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-prairies/fig2_prairies_trajectory.png" alt="fig:traj" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of the Canadian Prairies from 10000 BC to 1600 AD with +/- 8% uncertainty bounds and four sub-regional curves.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-prairies/fig3_prairies_shares.png" alt="fig:shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional population shares across the Canadian Prairies from 10000 BC to 1600 AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:master">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Foothills-Bow</th><th class="crd-th">Aspen Parkland</th><th class="crd-th">Palliser Steppe</th><th class="crd-th">Red-Assiniboine</th><th class="crd-th">Total</th><th class="crd-th">8 pct Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">150</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">150</td><td class="crd-td">138 - 162</td></tr>
<tr><td class="crd-td"><strong>9000BC</strong></td><td class="crd-td">450</td><td class="crd-td">200</td><td class="crd-td">150</td><td class="crd-td">0</td><td class="crd-td">800</td><td class="crd-td">736 - 864</td></tr>
<tr><td class="crd-td"><strong>8000BC</strong></td><td class="crd-td">950</td><td class="crd-td">700</td><td class="crd-td">550</td><td class="crd-td">300</td><td class="crd-td">2,5k</td><td class="crd-td">2,3k - 2,7k</td></tr>
<tr><td class="crd-td"><strong>7000BC</strong></td><td class="crd-td">1,6k</td><td class="crd-td">1,5k</td><td class="crd-td">1,1k</td><td class="crd-td">1k</td><td class="crd-td">5,2k</td><td class="crd-td">4,8k - 5,6k</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">2,4k</td><td class="crd-td">2,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">8,8k</td><td class="crd-td">8,1k - 9,5k</td></tr>
<tr><td class="crd-td"><strong>5000BC</strong></td><td class="crd-td">3,4k</td><td class="crd-td">3,7k</td><td class="crd-td">2,6k</td><td class="crd-td">3,2k</td><td class="crd-td">12,9k</td><td class="crd-td">11,9k - 13,9k</td></tr>
<tr><td class="crd-td"><strong>4000BC</strong></td><td class="crd-td">4,5k</td><td class="crd-td">5k</td><td class="crd-td">3,5k</td><td class="crd-td">4,4k</td><td class="crd-td">17,4k</td><td class="crd-td">16k - 18,8k</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">5,8k</td><td class="crd-td">6,4k</td><td class="crd-td">4,5k</td><td class="crd-td">5,6k</td><td class="crd-td">22,3k</td><td class="crd-td">20,5k - 24,1k</td></tr>
<tr><td class="crd-td"><strong>2000BC</strong></td><td class="crd-td">7,1k</td><td class="crd-td">7,9k</td><td class="crd-td">5,5k</td><td class="crd-td">6,8k</td><td class="crd-td">27,3k</td><td class="crd-td">25,1k - 29,5k</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">8,4k</td><td class="crd-td">9,3k</td><td class="crd-td">6,4k</td><td class="crd-td">7,9k</td><td class="crd-td">32k</td><td class="crd-td">29,4k - 34,6k</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">9,6k</td><td class="crd-td">10,6k</td><td class="crd-td">7,2k</td><td class="crd-td">8,9k</td><td class="crd-td">36,3k</td><td class="crd-td">33,4k - 39,2k</td></tr>
<tr><td class="crd-td"><strong>200AD</strong></td><td class="crd-td">10,2k</td><td class="crd-td">11,2k</td><td class="crd-td">7,6k</td><td class="crd-td">9,4k</td><td class="crd-td">38,4k</td><td class="crd-td">35,3k - 41,5k</td></tr>
<tr><td class="crd-td"><strong>400AD</strong></td><td class="crd-td">10,8k</td><td class="crd-td">11,7k</td><td class="crd-td">8k</td><td class="crd-td">9,8k</td><td class="crd-td">40,3k</td><td class="crd-td">37,1k - 43,5k</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">11,3k</td><td class="crd-td">12,2k</td><td class="crd-td">8,3k</td><td class="crd-td">10,2k</td><td class="crd-td">42k</td><td class="crd-td">38,6k - 45,4k</td></tr>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">11,8k</td><td class="crd-td">12,6k</td><td class="crd-td">8,6k</td><td class="crd-td">10,5k</td><td class="crd-td">43,5k</td><td class="crd-td">40k - 47k</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">12,1k</td><td class="crd-td">12,9k</td><td class="crd-td">8,8k</td><td class="crd-td">10,7k</td><td class="crd-td">44,5k</td><td class="crd-td">40,9k - 48,1k</td></tr>
<tr><td class="crd-td"><strong>1100AD</strong></td><td class="crd-td">12,2k</td><td class="crd-td">13,1k</td><td class="crd-td">8,9k</td><td class="crd-td">10,8k</td><td class="crd-td">45k</td><td class="crd-td">41,4k - 48,7k</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">12,3k</td><td class="crd-td">13,2k</td><td class="crd-td">9k</td><td class="crd-td">10,9k</td><td class="crd-td">45,5k</td><td class="crd-td">41,9k - 49,1k</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">12,4k</td><td class="crd-td">13,3k</td><td class="crd-td">9k</td><td class="crd-td">10,9k</td><td class="crd-td">45,7k</td><td class="crd-td">42k - 49,4k</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">12,4k</td><td class="crd-td">13,4k</td><td class="crd-td">9k</td><td class="crd-td">11k</td><td class="crd-td">45,9k</td><td class="crd-td">42,2k - 49,6k</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">12,5k</td><td class="crd-td">13,5k</td><td class="crd-td">9k</td><td class="crd-td">11k</td><td class="crd-td">46k</td><td class="crd-td">42,3k - 49,7k</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">12,5k</td><td class="crd-td">13,5k</td><td class="crd-td">9k</td><td class="crd-td">11k</td><td class="crd-td">46k</td><td class="crd-td">42,3k - 49,7k</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">12,4k</td><td class="crd-td">13,3k</td><td class="crd-td">8,8k</td><td class="crd-td">10,8k</td><td class="crd-td">45,3k</td><td class="crd-td">41,7k - 48,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Complete 23-benchmark population series for the Canadian Prairies (10000 BC to 1600 AD) with +/- 8% aggregate bounds.</figcaption>
</figure>

# Limitations

Mobile tipis leave shallow, wind-deflated tipi-ring camps that are far less visible in `p3k14c` than deeply stratified jump bonebeds such as Head-Smashed-In [@frison2004; @bird2022p3k14c]. In the Red and Assiniboine valleys, modern plough cultivation and spring flooding obscure early woodland camps beneath alluvial silt [@boyd2006].

# Sources

<div id="refs"></div>
