---
title: "Pre-Columbian Atlantic Maritimes, Newfoundland and Labrador: Maritime Archaic, Mi'kmaq, Beothuk and Norse Vinland"
subtitle: "CENTAUR-II: Mi'kma'ki, Wolastoq Basin, Newfoundland and Labrador, -10000 to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: maritimes_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_maritimes_spatial.png"
hero_caption: "Four coastal and boreal divisions and eight catalogued settlements across the Atlantic Maritimes, Newfoundland and Labrador (484,19k km²) from 10000 BC to 1600 AD."
hero_label: "fig:hero-maritimes"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

The Atlantic Maritimes, Newfoundland and Labrador (`484,19k km²`, `9.788` 5-arcminute pixels) supported estuarine, shell-midden and marine-hunting populations from Palaeoindian caribou hunters at Debert (`9000` to `8000 BC`) through the Maritime Archaic florescence and late pre-contact Mi'kmaq, Wolastoqiyik, Beothuk and Innu networks [@macdonald1968; @tuck1976; @prins1996]. Reconstructed across four coastal and plateau divisions under CENTAUR-II, population rises from `0` in `10000 BC` to `300` in `9000 BC`, `8,9k` in `5000 BC` and `27,6k` at `0 AD`, reaching a pre-contact maximum of `36k` in `1500 AD` (`7,44` persons per 100 km²). In `1500 AD`, Mi'kma'ki (`45,8%`, `30,17` persons per 100 km²) and the Wolastoq-Miramichi basin (`30,6%`, `16,18` persons per 100 km²) hold `76,4%` of regional population across `25,3%` of land area, while Newfoundland (`9,7%`) and Labrador (`13,9%`) carry sparser subarctic densities. Sixteenth-century European migratory cod fleets and initial infectious-disease outbreaks drive a `22,78%` contraction to `27,8k` by `1600 AD` [@miller1976; @pastore1992].

# Background

Global population compilations [@mcevedy1978; @kleingoldewijk2017] compressed the Atlantic provinces and Labrador into a single subarctic band, obscuring both the steep coastal-to-interior ecological gradient and the short-lived `1000 AD` Norse Vinland outpost at L'Anse aux Meadows [@wallace2003; @ingstad1985]. CENTAUR-II divides `484.186 km²` into four coastal, island and plateau units (Table \ref{tab:subregions}).

Nova Scotia, Unama'ki (Cape Breton) and Epekwitk (Prince Edward Island) (`54.697 km²`, `11,3%`) form the Mi'kma'ki maritime core enriched by Bay of Fundy tidal flats and Gulf of St. Lawrence shellfishing bays [@prins1996; @miller1976]. Westward, the Wolastoq (Saint John) Basin, Miramichi and Passamaquoddy (`67.993 km²`, `14,0%`) encompass salmon rivers and copper-trade corridors shared by Wolastoqiyik and Mi'kmaq groups. Across Cabot Strait, the Island of Newfoundland and Saint-Pierre-et-Miquelon (`104.102 km²`, `21,5%`) supported Maritime Archaic, Groswater-Dorset, Beothuk and brief Norse occupations [@tuck1976; @renouf1999; @wallace2003]. Northward, the Labrador Plateau and Nunatsiavut Coast (`257.394 km²`, `53,2%`) unite interior Innu caribou corridors around Hamilton Inlet with coastal Thule-Inuit sealing headlands [@fitzhugh1972].

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area km2 (Share)</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th><th class="crd-th">1500AD Density</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Nova Scotia, Unama'ki (Cape Breton) and Epekwitk (PEI) (Mi'kma'ki)</strong></td><td class="crd-td">54.697 (11,3%)</td><td class="crd-td">3,6k</td><td class="crd-td">11,8k</td><td class="crd-td">15,5k</td><td class="crd-td">16,5k</td><td class="crd-td">12,2k</td><td class="crd-td">30,17</td></tr>
<tr><td class="crd-td"><strong>2. Wolastoq (Saint John) Basin, Miramichi and Passamaquoddy (Wolastoqiyik and Mi'kmaq)</strong></td><td class="crd-td">67.993 (14%)</td><td class="crd-td">2,7k</td><td class="crd-td">8,3k</td><td class="crd-td">10,5k</td><td class="crd-td">11k</td><td class="crd-td">8,6k</td><td class="crd-td">16,18</td></tr>
<tr><td class="crd-td"><strong>3. Island of Newfoundland and Saint-Pierre-et-Miquelon (Beothuk, Dorset and L'Anse aux Meadows)</strong></td><td class="crd-td">104.102 (21,5%)</td><td class="crd-td">1,2k</td><td class="crd-td">3,4k</td><td class="crd-td">3,6k</td><td class="crd-td">3,5k</td><td class="crd-td">2,4k</td><td class="crd-td">3,36</td></tr>
<tr><td class="crd-td"><strong>4. Labrador Plateau and Nunatsiavut Coast (Maritime Archaic, Innu and Inuit)</strong></td><td class="crd-td">257.394 (53,2%)</td><td class="crd-td">1,4k</td><td class="crd-td">4,1k</td><td class="crd-td">4,8k</td><td class="crd-td">5k</td><td class="crd-td">4,6k</td><td class="crd-td">1,94</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">484.186 (100%)</td><td class="crd-td">8,9k</td><td class="crd-td">27,6k</td><td class="crd-td">34,4k</td><td class="crd-td">36k</td><td class="crd-td">27,8k</td><td class="crd-td">7,44</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional land area, benchmark populations and 1500 AD density (persons per 100 km2) across the Atlantic Maritimes, Newfoundland and Labrador.</figcaption>
</figure>

# Methodology

Spatial allocation employs `sites_p3k14c_na` non-stationary Matérn ($\nu = 3/2$) kriging over `481.752` terrestrial 5-arcminute cells (`1.359` domestic Voronoi catchments plus `171` cross-frontier buffers), driven by `p3k14c` [@bird2022p3k14c] and `c14bazAAR` dates anchored to Kelly et al. [@kelly2025]. Cross-frontier conditioning across the Maine-New Brunswick border and Gaspe corridor aligns coastal densities with `01.new_england` and `5.saint_lawrence`. Inside `ViscountSubstrataMosaic`, `8` catalogued settlement trajectories are subtracted from sub-regional targets before scaling rural cells within `maritimes_areal_mask.png` and applying two 4-pixel smoothing passes, retaining `+/- 8%` uncertainty bounds [@ubelaker2006].

# Testing and Validation

All regional gates verify with `0` errors at `GMT+0`:

1. **Kriging Sharpness**: Across all `10` Holocene horizons of `sites_p3k14c_na`, `tau1 = 1,25` (`<= 1,80`), `nugget_to_sill = 0,04` to `0,22` (`< 0,45`) and residual pseudo-$R^2$ lies between `0,9733` and `0,9992`.
2. **Gazetteer Exhaustiveness**: Cross-checking `maritimes_settlements.json` against `maritimes_source_ledger.json5` yields `8` included sites, `1` excluded seasonal-camp aggregate, `0` unaccounted candidates and `0` schema errors.
3. **Seam Continuity**: Borders shared with `4.hudson_bay`, `5.saint_lawrence` and `01.new_england` satisfy `p99_soft <= 1,25`.

# Results

## Debert Palaeoindians to Maritime Archaic and Woodland Networks (-9000 to 1000 AD)

Following Wisconsinan ice retreat, Palaeoindian caribou hunters settled central Nova Scotia at Debert by `9000 BC` (`300` regional total), expanding to `1k` in `8000 BC` [@macdonald1968]. Between `6000 BC` (`5,3k`) and `2000 BC` (`21k`), Maritime Archaic sea-mammal and swordfish fishers proliferated along the Strait of Belle Isle (`L'Anse Amour`) and western Newfoundland (`Port au Choix`), while Adena-influenced Woodland mound and burial complexes emerged at Metepenagiag on the Miramichi by `1000 BC` (`24,4k` regional total) [@tuck1976; @fitzhugh1972]. Around `1000 AD` (`34,4k`), the brief Norse Vinland wintering station at L'Anse aux Meadows (`110` inhabitants) coincided with Beothuk and late Dorset occupation across Newfoundland (`3,6k`) [@wallace2003; @ingstad1985; @renouf1999].

## Pre-Contact Equilibrium and Sixteenth-Century Atlantic Contact Decline (1000 to 1600 AD)

Growth slowed between `1000` (`34,4k`) and `1500 AD` (`36k`), anchored by Mi'kmaq coastal estates at Kejimkujik-Merigomish (`580`) and Wolastoqiyik fortified centres at Meductic (`480`) [@prins1996]. Immediately after `1500 AD`, seasonal Basque, Norman, Breton, Portuguese and English cod-fishing stations along Newfoundland, Cape Breton and the Gulf of St. Lawrence introduced acute European infectious diseases and violent coastal displacement [@miller1976; @pastore1992]. Regional population drops from `36k` in `1500 AD` to `33k` in `1550 AD` and `27,8k` in `1600 AD` (`-22,78%`), led by sharp declines in Mi'kma'ki (`-26,1%`) and Newfoundland (`-31,4%`). Figures \ref{fig:traj} and \ref{fig:shares} chart these trajectories and Table \ref{tab:master} compiles the `23` benchmarks.

<figure class="crd-figure-block" id="fig:traj">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-maritimes/fig2_maritimes_trajectory.png" alt="fig:traj" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of the Atlantic Maritimes, Newfoundland and Labrador from 10000 BC to 1600 AD showing the 1500 AD peak (36k) and post-1500 AD contact decline.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-maritimes/fig3_maritimes_shares.png" alt="fig:shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional population shares across the Atlantic Maritimes, Newfoundland and Labrador from 9000 BC to 1600 AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:master">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Mi'kma'ki</th><th class="crd-th">Wolastoq-NB</th><th class="crd-th">Newfoundland</th><th class="crd-th">Labrador</th><th class="crd-th">Total</th><th class="crd-th">8 pct Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0 - 0</td></tr>
<tr><td class="crd-td"><strong>9000BC</strong></td><td class="crd-td">200</td><td class="crd-td">100</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">300</td><td class="crd-td">276 - 324</td></tr>
<tr><td class="crd-td"><strong>8000BC</strong></td><td class="crd-td">600</td><td class="crd-td">400</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">1k</td><td class="crd-td">920 - 1,1k</td></tr>
<tr><td class="crd-td"><strong>7000BC</strong></td><td class="crd-td">1,3k</td><td class="crd-td">900</td><td class="crd-td">200</td><td class="crd-td">200</td><td class="crd-td">2,6k</td><td class="crd-td">2,4k - 2,8k</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">2,3k</td><td class="crd-td">1,7k</td><td class="crd-td">600</td><td class="crd-td">700</td><td class="crd-td">5,3k</td><td class="crd-td">4,9k - 5,7k</td></tr>
<tr><td class="crd-td"><strong>5000BC</strong></td><td class="crd-td">3,6k</td><td class="crd-td">2,7k</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">8,9k</td><td class="crd-td">8,2k - 9,6k</td></tr>
<tr><td class="crd-td"><strong>4000BC</strong></td><td class="crd-td">5,1k</td><td class="crd-td">3,8k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">13k</td><td class="crd-td">12k - 14k</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">6,8k</td><td class="crd-td">5k</td><td class="crd-td">2,6k</td><td class="crd-td">2,9k</td><td class="crd-td">17,3k</td><td class="crd-td">15,9k - 18,7k</td></tr>
<tr><td class="crd-td"><strong>2000BC</strong></td><td class="crd-td">8,5k</td><td class="crd-td">6,2k</td><td class="crd-td">2,9k</td><td class="crd-td">3,4k</td><td class="crd-td">21k</td><td class="crd-td">19,3k - 22,7k</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">10,2k</td><td class="crd-td">7,3k</td><td class="crd-td">3,1k</td><td class="crd-td">3,8k</td><td class="crd-td">24,4k</td><td class="crd-td">22,4k - 26,4k</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">11,8k</td><td class="crd-td">8,3k</td><td class="crd-td">3,4k</td><td class="crd-td">4,1k</td><td class="crd-td">27,6k</td><td class="crd-td">25,4k - 29,8k</td></tr>
<tr><td class="crd-td"><strong>200AD</strong></td><td class="crd-td">12,7k</td><td class="crd-td">8,9k</td><td class="crd-td">3,6k</td><td class="crd-td">4,3k</td><td class="crd-td">29,5k</td><td class="crd-td">27,1k - 31,9k</td></tr>
<tr><td class="crd-td"><strong>400AD</strong></td><td class="crd-td">13,5k</td><td class="crd-td">9,4k</td><td class="crd-td">3,7k</td><td class="crd-td">4,4k</td><td class="crd-td">31,1k</td><td class="crd-td">28,6k - 33,5k</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">14,2k</td><td class="crd-td">9,8k</td><td class="crd-td">3,5k</td><td class="crd-td">4,6k</td><td class="crd-td">32,1k</td><td class="crd-td">29,5k - 34,7k</td></tr>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">14,9k</td><td class="crd-td">10,2k</td><td class="crd-td">3,3k</td><td class="crd-td">4,7k</td><td class="crd-td">33,1k</td><td class="crd-td">30,5k - 35,7k</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">15,5k</td><td class="crd-td">10,5k</td><td class="crd-td">3,6k</td><td class="crd-td">4,8k</td><td class="crd-td">34,4k</td><td class="crd-td">31,6k - 37,2k</td></tr>
<tr><td class="crd-td"><strong>1100AD</strong></td><td class="crd-td">15,8k</td><td class="crd-td">10,6k</td><td class="crd-td">3,5k</td><td class="crd-td">4,8k</td><td class="crd-td">34,8k</td><td class="crd-td">32k - 37,5k</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">16k</td><td class="crd-td">10,8k</td><td class="crd-td">3,5k</td><td class="crd-td">4,9k</td><td class="crd-td">35,1k</td><td class="crd-td">32,3k - 38k</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">16,2k</td><td class="crd-td">10,8k</td><td class="crd-td">3,5k</td><td class="crd-td">5k</td><td class="crd-td">35,5k</td><td class="crd-td">32,7k - 38,3k</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">16,4k</td><td class="crd-td">10,9k</td><td class="crd-td">3,5k</td><td class="crd-td">5k</td><td class="crd-td">35,9k</td><td class="crd-td">33k - 38,7k</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">16,5k</td><td class="crd-td">11k</td><td class="crd-td">3,5k</td><td class="crd-td">5k</td><td class="crd-td">36k</td><td class="crd-td">33,1k - 38,9k</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">14,8k</td><td class="crd-td">10,2k</td><td class="crd-td">3,1k</td><td class="crd-td">4,9k</td><td class="crd-td">33k</td><td class="crd-td">30,4k - 35,6k</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">12,2k</td><td class="crd-td">8,6k</td><td class="crd-td">2,4k</td><td class="crd-td">4,6k</td><td class="crd-td">27,8k</td><td class="crd-td">25,6k - 30k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Complete 23-benchmark population series for the Atlantic Maritimes, Newfoundland and Labrador (10000 BC to 1600 AD) with +/- 8% aggregate bounds.</figcaption>
</figure>

# Limitations

Mid-Holocene sea-level rise along the Scotian Shelf and southern Gulf of St. Lawrence submerged early Archaic coastal shell middens, biasing `p3k14c` dates toward elevated river terraces and post-glacial raised beaches in northern Newfoundland and Labrador [@tuck1976; @bird2022p3k14c]. In addition, sixteenth-century mortality estimates between `1500` and `1600 AD` rely on retrospective ethnohistoric ratios rather than continuous sixteenth-century parish tallies [@miller1976; @prins1996].

# Sources

<div id="refs"></div>
