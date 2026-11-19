---
title: "Pre-Columbian Saint Lawrence Basin and Huronia: Maize Agriculture, Palisaded Towns and Algonquian Networks"
subtitle: "CENTAUR-II: Ontario Peninsula, Ottawa Valley and St. Lawrence Lowlands, -10000 to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: saint_lawrence_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_saint_lawrence_spatial.png"
hero_caption: "Four ecological divisions and 10 catalogued settlements across the Saint Lawrence Basin and Huronia (630,15k km²) from 10000 BC to 1600 AD."
hero_label: "fig:hero-saint-lawrence"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

The Saint Lawrence Basin and Huronia (`630,15k km²`, `11.383` 5-arcminute pixels) supported the densest pre-contact agricultural populations in northern North America, anchored by Iroquoian maize-beans-squash towns along Lake Ontario, Georgian Bay and the St. Lawrence Lowlands [@trigger1976; @warrick2008]. Reconstructed across four ecological divisions under CENTAUR-II, population expands from `0` in `10000 BC` to `250` in `9000 BC`, `13,7k` in `5000 BC` and `48,1k` at `0 AD`, then accelerates with Late Woodland maize horticulture from `76,5k` in `1000 AD` to a pre-contact peak of `92k` in `1500 AD` (`14,60` persons per 100 km²). By `1500 AD`, Huronia, the Simcoe Uplands and the Ontario Peninsula account for `56,5%` of total inhabitants (`52k`, `33,41` persons per 100 km²), while the St. Lawrence Lowlands hold `20,1%` (`18,5k`). Between `1550` (`87,9k`) and `1600 AD` (`74,9k`), the dispersal of the St. Lawrence Iroquoians cuts lowland population from `18,5k` to `6,5k` (`-64,9%`), driving an `18,59%` regional decline prior to permanent French settlement [@pendergast1993; @chapdelaine2004].

# Background

Continental demographic grids [@mcevedy1978; @kleingoldewijk2017] smoothed over the abrupt agro-ecological divide separating palisaded Iroquoian towns of southern Ontario and the Montreal-Quebec river plain from Algonquian Shield-forest bands to the north [@heidenreich1971; @warrick2008]. CENTAUR-II partitions `630.150 km²` into four drainage and cultural provinces (Table \ref{tab:subregions}).

Huronia, the Simcoe Uplands and the Ontario Peninsula (`155.657 km²`, `24,7%`) comprise fertile grey-brown luvisol plains bordering Lakes Huron, Erie and Ontario occupied by Wendat (Huron), Tionontati (Petun) and Neutral confederacies [@trigger1976; @warrick2008]. North of the Ottawa River divide, the Ottawa-Rideau Valley and Algonquin Shield (`155.786 km²`, `24,7%`) formed the birchbark-canoe exchange artery of Algonquin and Nipissing bands [@clermont1999]. Downstream, the St. Lawrence Lowlands from Montreal to Quebec (`92.765 km²`, `14,7%`) hosted St. Lawrence Iroquoian farming towns such as Hochelaga and Stadacona [@pendergast1993; @chapdelaine2004]. Beyond the Laurentian escarpment, Saguenay-Lac-Saint-Jean, Cote-Nord and the Gaspe Peninsula (`225.942 km²`, `35,9%`) supported Innu hunters and Mi'kmaq coastal fishers [@wright1995].

<figure class="crd-table-figure" id="tab:subregions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area km2 (Share)</th><th class="crd-th">5000BC</th><th class="crd-th">0AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">1600AD</th><th class="crd-th">1500AD Density</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Huronia, Simcoe Uplands and Ontario Peninsula (Wendat, Tionontati and Neutral)</strong></td><td class="crd-td">155.657 (24,7%)</td><td class="crd-td">5k</td><td class="crd-td">19,5k</td><td class="crd-td">39k</td><td class="crd-td">52k</td><td class="crd-td">49k</td><td class="crd-td">33,41</td></tr>
<tr><td class="crd-td"><strong>2. Ottawa-Rideau Valley and Algonquin Shield (Algonquin and Nipissing)</strong></td><td class="crd-td">155.786 (24,7%)</td><td class="crd-td">2,7k</td><td class="crd-td">8,1k</td><td class="crd-td">10,1k</td><td class="crd-td">10,5k</td><td class="crd-td">9,8k</td><td class="crd-td">6,74</td></tr>
<tr><td class="crd-td"><strong>3. St. Lawrence Lowlands: Hochelaga to Stadacona (St. Lawrence Iroquoians)</strong></td><td class="crd-td">92.765 (14,7%)</td><td class="crd-td">3,4k</td><td class="crd-td">12,2k</td><td class="crd-td">17k</td><td class="crd-td">18,5k</td><td class="crd-td">6,5k</td><td class="crd-td">19,94</td></tr>
<tr><td class="crd-td"><strong>4. Saguenay-Lac-Saint-Jean, Cote-Nord and Gaspe Peninsula (Innu and Gespe'gewa'gi Mi'kmaq)</strong></td><td class="crd-td">225.942 (35,9%)</td><td class="crd-td">2,6k</td><td class="crd-td">8,3k</td><td class="crd-td">10,4k</td><td class="crd-td">11k</td><td class="crd-td">9,6k</td><td class="crd-td">4,87</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">630.150 (100%)</td><td class="crd-td">13,7k</td><td class="crd-td">48,1k</td><td class="crd-td">76,5k</td><td class="crd-td">92k</td><td class="crd-td">74,9k</td><td class="crd-td">14,6</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional land area, benchmark populations and 1500 AD density (persons per 100 km2) across the Saint Lawrence Basin.</figcaption>
</figure>

# Methodology

Spatial disaggregation relies on `sites_p3k14c_na` non-stationary Matérn ($\nu = 3/2$) kriging across `481.752` terrestrial 5-arcminute cells (`1.359` domestic Voronoi catchments plus `171` cross-frontier buffers), using `p3k14c` [@bird2022p3k14c] and `c14bazAAR` dates anchored to Kelly et al. [@kelly2025]. Conditioning across Lakes Huron, Erie and Ontario, the Adirondack uplands and Maine links southern Ontario continuously with adjacent U.S. Hydrological Units (`04.great_lakes` and `01.new_england`). `ViscountSubstrataMosaic` subtracts `10` catalogued town and fishery trajectories from sub-regional anchors before scaling rural cells within `saint_lawrence_areal_mask.png` and smoothing borders across two 4-pixel passes, preserving `+/- 8%` uncertainty bounds [@ubelaker2006].

# Testing and Validation

All regional gates verify with `0` errors at `GMT+0`:

1. **Kriging Sharpness**: Across all `10` Holocene horizons of `sites_p3k14c_na`, `tau1 = 1,25` (`<= 1,80`), `nugget_to_sill = 0,04` to `0,22` (`< 0,45`) and residual pseudo-$R^2$ lies between `0,9733` and `0,9992`.
2. **Gazetteer Exhaustiveness**: Auditing `saint_lawrence_settlements.json` against `saint_lawrence_source_ledger.json5` confirms `10` included settlements, `1` excluded seasonal station (`Kanesatake-Oka Precontact Locality`), `0` unaccounted candidates and `0` schema errors.
3. **Seam Continuity**: Boundaries shared with `4.hudson_bay`, `6.maritimes`, `04.great_lakes` and `01.new_england` meet `p99_soft <= 1,25`.

# Results

## Archaic Copper Trade to Woodland Maize Intensification (-9000 to 1500 AD)

Following Champlain Sea regression, early Palaeoindian and Archaic bands expanded from `250` in `9000 BC` to `13,7k` in `5000 BC` [@wright1995]. Along the Ottawa River, Laurentian Archaic copper-working camps at Allumette-Morrison Island anchored riverine trade by `3000 BC` (`26,5k` module total) [@clermont1999]. After `500 AD`, Early-to-Late Iroquoian maize horticulture drove rapid demographic acceleration across southern Ontario and the St. Lawrence Lowlands: total population rose from `48,1k` at `0 AD` to `76,5k` in `1000 AD` and `92k` in `1500 AD` [@warrick2008; @birch2012]. Coalescent palisaded towns such as Draper (`1,95k`), Mantle (`1,8k`), Hochelaga (`2,6k`), Stadacona (`1,8k`) and Ripley-Erie (`1,65k`) concentrated longhouse lineages of `1,5k` to `3,5k` inhabitants along defensive bluff ridges [@finlayson1985; @birch2012].

## Sixteenth-Century Consolidation and St. Lawrence Dispersal (1500 to 1600 AD)

Between Jacques Cartier's `1535 AD` voyages to Stadacona and Hochelaga and Samuel de Champlain's `1603 AD` survey, warfare, climatic cooling and early introduced epidemics dispersed the St. Lawrence Iroquoians [@pendergast1993; @chapdelaine2004]. St. Lawrence Lowlands population drops from `18,5k` in `1500 AD` to `14k` in `1550 AD` and `6,5k` in `1600 AD`, pulling the regional total down from `92k` to `74,9k` (`-18,59%`). Concurrently, Wendat confederacy consolidation in Simcoe County sustains large towns at Cahiague (`3,5k`) and Ossossane (`1,8k`), holding Huronia-Ontario at `49k` (`65,4%` of module population) by `1600 AD` [@heidenreich1971; @warrick2008]. Figures \ref{fig:traj} and \ref{fig:shares} chart these trajectories and Table \ref{tab:master} reports all `23` benchmark dates.

<figure class="crd-figure-block" id="fig:traj">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-saint-lawrence/fig2_saint_lawrence_trajectory.png" alt="fig:traj" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of the Saint Lawrence Basin and Huronia from 10000 BC to 1600 AD showing the 1500 AD peak (92k) and late sixteenth-century St. Lawrence Iroquoian contraction.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:shares">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-saint-lawrence/fig3_saint_lawrence_shares.png" alt="fig:shares" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Sub-regional population shares across the Saint Lawrence Basin from 9000 BC to 1600 AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:master">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Huronia-Ontario</th><th class="crd-th">Ottawa-Shield</th><th class="crd-th">St. Lawrence</th><th class="crd-th">Saguenay-Gaspe</th><th class="crd-th">Total</th><th class="crd-th">8 pct Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>10000BC</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0 - 0</td></tr>
<tr><td class="crd-td"><strong>9000BC</strong></td><td class="crd-td">250</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">250</td><td class="crd-td">230 - 270</td></tr>
<tr><td class="crd-td"><strong>8000BC</strong></td><td class="crd-td">800</td><td class="crd-td">250</td><td class="crd-td">200</td><td class="crd-td">150</td><td class="crd-td">1,4k</td><td class="crd-td">1,3k - 1,5k</td></tr>
<tr><td class="crd-td"><strong>7000BC</strong></td><td class="crd-td">1,8k</td><td class="crd-td">800</td><td class="crd-td">900</td><td class="crd-td">600</td><td class="crd-td">4,1k</td><td class="crd-td">3,8k - 4,4k</td></tr>
<tr><td class="crd-td"><strong>6000BC</strong></td><td class="crd-td">3,2k</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">1,5k</td><td class="crd-td">8,4k</td><td class="crd-td">7,7k - 9,1k</td></tr>
<tr><td class="crd-td"><strong>5000BC</strong></td><td class="crd-td">5k</td><td class="crd-td">2,7k</td><td class="crd-td">3,4k</td><td class="crd-td">2,6k</td><td class="crd-td">13,7k</td><td class="crd-td">12,6k - 14,8k</td></tr>
<tr><td class="crd-td"><strong>4000BC</strong></td><td class="crd-td">7,2k</td><td class="crd-td">3,8k</td><td class="crd-td">5k</td><td class="crd-td">3,8k</td><td class="crd-td">19,8k</td><td class="crd-td">18,2k - 21,4k</td></tr>
<tr><td class="crd-td"><strong>3000BC</strong></td><td class="crd-td">9,8k</td><td class="crd-td">4,9k</td><td class="crd-td">6,8k</td><td class="crd-td">5k</td><td class="crd-td">26,5k</td><td class="crd-td">24,4k - 28,6k</td></tr>
<tr><td class="crd-td"><strong>2000BC</strong></td><td class="crd-td">12,5k</td><td class="crd-td">6k</td><td class="crd-td">8,6k</td><td class="crd-td">6,2k</td><td class="crd-td">33,3k</td><td class="crd-td">30,6k - 36k</td></tr>
<tr><td class="crd-td"><strong>1000BC</strong></td><td class="crd-td">15,5k</td><td class="crd-td">7,1k</td><td class="crd-td">10,4k</td><td class="crd-td">7,3k</td><td class="crd-td">40,3k</td><td class="crd-td">37,1k - 43,5k</td></tr>
<tr><td class="crd-td"><strong>0AD</strong></td><td class="crd-td">19,5k</td><td class="crd-td">8,1k</td><td class="crd-td">12,2k</td><td class="crd-td">8,3k</td><td class="crd-td">48,1k</td><td class="crd-td">44,3k - 51,9k</td></tr>
<tr><td class="crd-td"><strong>200AD</strong></td><td class="crd-td">22k</td><td class="crd-td">8,6k</td><td class="crd-td">13,2k</td><td class="crd-td">8,8k</td><td class="crd-td">52,6k</td><td class="crd-td">48,4k - 56,8k</td></tr>
<tr><td class="crd-td"><strong>400AD</strong></td><td class="crd-td">25k</td><td class="crd-td">9k</td><td class="crd-td">14,2k</td><td class="crd-td">9,3k</td><td class="crd-td">57,5k</td><td class="crd-td">52,9k - 62,1k</td></tr>
<tr><td class="crd-td"><strong>600AD</strong></td><td class="crd-td">29k</td><td class="crd-td">9,4k</td><td class="crd-td">15,2k</td><td class="crd-td">9,7k</td><td class="crd-td">63,3k</td><td class="crd-td">58,2k - 68,4k</td></tr>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">34k</td><td class="crd-td">9,8k</td><td class="crd-td">16,2k</td><td class="crd-td">10,1k</td><td class="crd-td">70,1k</td><td class="crd-td">64,5k - 75,7k</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">39k</td><td class="crd-td">10,1k</td><td class="crd-td">17k</td><td class="crd-td">10,4k</td><td class="crd-td">76,5k</td><td class="crd-td">70,4k - 82,6k</td></tr>
<tr><td class="crd-td"><strong>1100AD</strong></td><td class="crd-td">42k</td><td class="crd-td">10,2k</td><td class="crd-td">17,4k</td><td class="crd-td">10,6k</td><td class="crd-td">80,2k</td><td class="crd-td">73,7k - 86,6k</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">45k</td><td class="crd-td">10,3k</td><td class="crd-td">17,8k</td><td class="crd-td">10,7k</td><td class="crd-td">83,8k</td><td class="crd-td">77,1k - 90,5k</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">48k</td><td class="crd-td">10,4k</td><td class="crd-td">18,1k</td><td class="crd-td">10,8k</td><td class="crd-td">87,3k</td><td class="crd-td">80,4k - 94,3k</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">50,5k</td><td class="crd-td">10,4k</td><td class="crd-td">18,4k</td><td class="crd-td">10,9k</td><td class="crd-td">90,3k</td><td class="crd-td">83,1k - 97,5k</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">52k</td><td class="crd-td">10,5k</td><td class="crd-td">18,5k</td><td class="crd-td">11k</td><td class="crd-td">92k</td><td class="crd-td">84,6k - 99,4k</td></tr>
<tr><td class="crd-td"><strong>1550AD</strong></td><td class="crd-td">51,5k</td><td class="crd-td">10,3k</td><td class="crd-td">15,5k</td><td class="crd-td">10,6k</td><td class="crd-td">87,9k</td><td class="crd-td">80,9k - 94,9k</td></tr>
<tr><td class="crd-td"><strong>1600AD</strong></td><td class="crd-td">49k</td><td class="crd-td">9,8k</td><td class="crd-td">6,5k</td><td class="crd-td">9,6k</td><td class="crd-td">74,9k</td><td class="crd-td">68,9k - 80,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Complete 23-benchmark population series for the Saint Lawrence Basin and Huronia (10000 BC to 1600 AD) with +/- 8% aggregate bounds.</figcaption>
</figure>

# Limitations

Iroquoian villages shifted locations every `10` to `30` years as local firewood and soil fertility exhausted, creating multiple sequential village footprints that risk double-counting if radiocarbon dates overlap within a single century [@warrick2008; @birch2012]. Conversely, mobile Algonquin and Innu summer camps along the Ottawa and Saguenay basins remain under-represented in `p3k14c` relative to extensively excavated Ontario CRM subdivisions [@bird2022p3k14c].

# Sources

<div id="refs"></div>
