---
title: "Settlement Gazetteer of the Pre-Columbian Hudson Bay and Boreal Shield"
subtitle: "CENTAUR-II: Coordinates, Toponymy and Demographic Trajectories (-10000 to 1600 AD)"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: hudson_bay_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_hudson_bay_spatial.png"
hero_caption: "Spatial distribution of 10 verified subarctic, Woodland and coastal Arctic settlements across the Hudson Bay and Boreal Shield basin from 10000 BC to 1600 AD."
hero_label: "fig:hero-hudson-bay"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles WGS84 coordinates, indigenous and archaeological names, occupation spans and population trajectories for 10 persistent settlements across the Hudson Bay and Boreal Shield basin (`2,35M km²`) between `10000 BC` and `1600 AD`. Sites span from the `6000 BC` Maritime Archaic burial mound at L'Anse Amour (`180` peak) and `3000 BC` Old Copper mining station on Isle Royale-Minong (`180`) to estuarine Cree-Dorset-Thule hubs at Ivujivik-Nuvuk (`350`), Churchill-Seahorse Gully (`320`), Moose Factory-Moosonee (`320`), Nelson River-York Factory (`310`) and Baker Lake-Qamani'tuaq (`280`), alongside southern Shield-margin Laurel mound centres at Grand Mound (`380`) and McKinstry (`340`). All `10` records carry `"CENTAUR"` provenance in `hudson_bay_settlements.json` and reconcile with `0` discrepancies against `hudson_bay_source_ledger.json5`.

# Background

Residential persistence across the Hudson Bay drainage anchored along three ecological niches [@wright1995; @pilon1987]. First, estuarine river mouths along western Hudson Bay and James Bay supported multi-season goose, caribou and whitefish harvests at Churchill, York Factory and Moose Factory [@nash1969; @pilon1987]. Second, Hudson Strait headlands and Kivalliq caribou crossings concentrated Dorset-Thule sealing villages at Ivujivik-Nuvuk and Qamani'tuaq [@plumet1994; @clark1977]. Third, southern Shield-margin lake outlets supported copper quarrying at Minong and Laurel ceremonial mounds along Rainy River [@martin1999; @arzigian2008].

# Methodology

Entries in `hudson_bay_source_ledger.json5` require dated habitation horizons, fixed coordinates and published band-aggregation or mound-precinct demographic counts [@arzigian2008; @plumet1994]. Transient interior shield lithic scatters without residential structures are excluded under `seasonal_encampment_unquantified` and represented via the rural kriging surface. Table \ref{tab:summary} summarises site distribution across the three sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Included Sites</th><th class="crd-th">Sum of Site Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kivalliq Barrens</strong></td><td class="crd-td">1</td><td class="crd-td">280</td><td class="crd-td">Baker Lake-Qamani'tuaq (280)</td></tr>
<tr><td class="crd-td"><strong>Hudson-James Cree</strong></td><td class="crd-td">7</td><td class="crd-td">2,2k</td><td class="crd-td">Grand Mound (380)</td></tr>
<tr><td class="crd-td"><strong>Eastmain-Nunavik</strong></td><td class="crd-td">2</td><td class="crd-td">530</td><td class="crd-td">Ivujivik-Nuvuk (350)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of included settlements and peak populations across the Hudson Bay basin.</figcaption>
</figure>

# Testing and Validation

Gazetteer validation confirms `10` included settlements, `1` excluded seasonal-camp aggregate, `0` unaccounted candidates and `0` schema errors. Coordinates span `48,03` to `64,32` N and `56,86` to `96,02` W; `.sources` cites `"CENTAUR"` on every entry. Figure \ref{fig:settlements} charts the rank-size curve.

<figure class="crd-figure-block" id="fig:settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-hudson-bay-settlements/fig4_hudson_bay_settlements.png" alt="fig:settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading peak populations across the 10 catalogued settlements of the Hudson Bay basin.</figcaption>
</figure>

# Results

## Catalogued Settlement Trajectories

Table \ref{tab:gazetteer} documents all 10 included settlements ordered by earliest attested year.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Alternative Names</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">Benchmark Series</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>L'Anse Amour</strong></td><td class="crd-td">Strait of Belle Isle; Forteau Bay</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">51,48 N, 56,86 W</td><td class="crd-td">6000BC - 1500AD</td><td class="crd-td">180</td><td class="crd-td">6000BC: 65; 5000BC: 95; 3000BC: 110; 1200AD: 160; 1500AD: 180</td></tr>
<tr><td class="crd-td"><strong>Isle Royale-Minong</strong></td><td class="crd-td">Minong Copper Mines</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">48,03 N, 88,78 W</td><td class="crd-td">3000BC - 1000AD</td><td class="crd-td">180</td><td class="crd-td">3000BC: 140; 2000BC: 180; 1000BC: 110; 1000AD: 150</td></tr>
<tr><td class="crd-td"><strong>Baker Lake-Qamani'tuaq</strong></td><td class="crd-td">Qamanituaq; Harvaqtuuq Caribou Crossing</td><td class="crd-td">Kivalliq Barrens</td><td class="crd-td">64,32 N, 96,02 W</td><td class="crd-td">1000BC - 1500AD</td><td class="crd-td">280</td><td class="crd-td">1000BC: 80; 400AD: 130; 1200AD: 220; 1500AD: 280</td></tr>
<tr><td class="crd-td"><strong>Churchill-Seahorse Gully</strong></td><td class="crd-td">Seahorse Gully; Dorset-Thule Point</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">58,78 N, 94,23 W</td><td class="crd-td">1000BC - 1500AD</td><td class="crd-td">320</td><td class="crd-td">1000BC: 110; 0AD: 170; 800AD: 210; 1300AD: 290; 1500AD: 320</td></tr>
<tr><td class="crd-td"><strong>Ivujivik-Nuvuk</strong></td><td class="crd-td">Nuvuk; Mansel-Ungava Strait</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">62,42 N, 77,91 W</td><td class="crd-td">1000BC - 1500AD</td><td class="crd-td">350</td><td class="crd-td">1000BC: 120; 400AD: 190; 1200AD: 310; 1500AD: 350</td></tr>
<tr><td class="crd-td"><strong>Moose Factory-Moosonee</strong></td><td class="crd-td">Moose River Mouth; Wapiskaw</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">51,26 N, 80,61 W</td><td class="crd-td">1000BC - 1500AD</td><td class="crd-td">320</td><td class="crd-td">1000BC: 85; 400AD: 150; 1100AD: 240; 1500AD: 320</td></tr>
<tr><td class="crd-td"><strong>Grand Mound</strong></td><td class="crd-td">Laurel Grand Mound; Rainy River</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">48,56 N, 93,69 W</td><td class="crd-td">0AD - 1200AD</td><td class="crd-td">380</td><td class="crd-td">0AD: 190; 400AD: 310; 800AD: 380; 1200AD: 280</td></tr>
<tr><td class="crd-td"><strong>Nelson River-York Factory</strong></td><td class="crd-td">Kihciwaskahikan; Hayes-Nelson Confluence</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">57 N, 92,31 W</td><td class="crd-td">0AD - 1500AD</td><td class="crd-td">310</td><td class="crd-td">0AD: 95; 800AD: 160; 1300AD: 240; 1500AD: 310</td></tr>
<tr><td class="crd-td"><strong>Whiteshell Petroforms</strong></td><td class="crd-td">Bannock Point; Tie Creek</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">50,15 N, 95,48 W</td><td class="crd-td">0AD - 1500AD</td><td class="crd-td">310</td><td class="crd-td">0AD: 140; 600AD: 210; 1200AD: 280; 1500AD: 310</td></tr>
<tr><td class="crd-td"><strong>McKinstry</strong></td><td class="crd-td">Little Fork Rainy Confluence</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">48,52 N, 93,59 W</td><td class="crd-td">400AD - 1200AD</td><td class="crd-td">340</td><td class="crd-td">400AD: 220; 800AD: 340; 1200AD: 290</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Complete gazetteer of 10 pre-contact settlements and aggregation hubs in the Hudson Bay basin (10000 BC to 1600 AD).</figcaption>
</figure>

## Excluded Candidates and Source Ledger Audit

Table \ref{tab:excluded} reports the excluded seasonal-camp record from `hudson_bay_source_ledger.json5`.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Entry</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Unnamed seasonal camps</strong></td><td class="crd-td">seasonal encampment unquantified</td><td class="crd-td">Ephemeral seasonal lithic scatters within hudson bay incorporated into macro-regional carrying-capacity aggregates without discrete settlement coordinates.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded seasonal localities in the Hudson Bay source ledger.</figcaption>
</figure>

## Sub-Regional Settlement Summaries

Within the Hudson and James Bay Lowlands and Shield margin (`7` entries), Rainy River Laurel mound hubs at Grand Mound (`380`) and McKinstry (`340`) pair with Whiteshell Petroforms (`310`), Isle Royale-Minong copper quarries (`180`) and coastal estuaries at Churchill-Seahorse Gully (`320`), Nelson River-York Factory (`310`) and Moose Factory-Moosonee (`320`) [@arzigian2008; @martin1999; @pilon1987; @nash1969; @buchner1980]. In Eastmain-Nunavik (`2` entries), Ivujivik-Nuvuk (`350`) anchors Hudson Strait sea-mammal hunting alongside L'Anse Amour (`180`) [@plumet1994; @tuck1976]. On the Kivalliq barrens (`1` entry), Baker Lake-Qamani'tuaq (`280` peak) marks the interior caribou-crossing focus [@clark1977].

# Limitations

Because Cree and Innu families dispersed across winter bush hunting territories in small extended-family camps, fixed archaeological settlements are scarce outside coastal river mouths and southern Shield borderlands, leaving most regional inhabitants represented in the kriging background [@wright1995; @pilon1987].

# Sources

<div id="refs"></div>
