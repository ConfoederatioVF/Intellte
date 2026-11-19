---
title: "Extreme Northern Plains Hydrological Unit (HU 09): Settlement Gazetteer"
subtitle: "CENTAUR-II: Woodland Mound, Earthlodge and Prairie-Border Sites, 9000BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: extreme_northern_plains_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_extreme_northern_plains_spatial.png"
hero_caption: "Spatial distribution of 61 Woodland, Northeastern Plains Village and Archaic complexes across Extreme Northern Plains Hydrological Unit 09."
hero_label: "fig:hero-extreme-northern-plains"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles WGS84 coordinates, occupational spans and benchmark population estimates for 61 excavated Woodland, Northeastern Plains Village and Archaic complexes across Extreme Northern Plains Hydrological Unit 09 (144,28k km²) between 9000BC and 1600AD [@kelly2025; @bird2022p3k14c]. The inventory spans 34 sites in the Red River of the North Valley (led by Biesterfeldt at 480, Arvilla at 360 and Shea at 310, alongside early strandline camps at Moon Lake from 9000BC and Ojata Beach from 8500BC), 16 complexes on the Souris Loop and Devils Lake Drift Prairie (led by Devils Lake-Narrows at 290, Sullys Hill Mounds at 230 and Horner-Kane at 210) and 11 Rainy River and Lake of the Woods boreal border stations (led by McKinstry at 360, Grand Mound at 320, Schocker at 290 and Nett Lake at 265) [@johnson1973arvilla; @stoltman1973laurel; @gregg1994plains; @lenius1990rainy]. Source-ledger reconciliation accounts for 61 included complexes and 1 excluded duplicate-alias entry across 62 candidates with zero unaccounted records.



# Background

Archaeological aggregations across HU 09 clustered around post-glacial strandlines, river confluences and seasonal resource bottlenecks rather than dense urban centres [@syms1977cultural]. Along the Rainy River at the outlet of Lake of the Woods and across northern Minnesota wild-rice basins, Laurel and Blackduck communities assembled each spring for lake-sturgeon spawning and erected major earthen burial mounds at McKinstry, Grand Mound, Hannaford, Schocker, Nett Lake and Big Rice [@stoltman1973laurel; @lenius1990rainy].

Further west along the Red River beach ridges, the Sheyenne River bend and the glacial narrows of Devils Lake, Arvilla, Devils Lake-Sourisford and Northeastern Plains Village groups built burial mounds and ditch-fortified earthlodge towns near bison-crossing corridors and woodland-margin farms at Arvilla, Devils Lake-Narrows, Sullys Hill Mounds, Shea, Sprunk and Biesterfeldt [@johnson1973arvilla; @gregg1994plains; @toom2004northeastern].

# Methodology

## Inclusion Criteria and Geospatial Encoding

Candidate complexes were screened against Stadestér 2.0 criteria requiring WGS84 point coordinates (`[lat, lng]`), dated ceramic, earthwork or mound stratigraphy and bounded seasonal-to-multi-season resident group estimates [@bird2022p3k14c; @kelly2025]. Close-pair records falling within 2 km of an existing canonical site under variant names are flagged as `excluded` under `duplicate_alias` consolidation in `extreme_northern_plains_source_ledger.json5` rather than entered twice. All temporal benchmarks use GMT+0 calendar years, and Table \ref{tab:summary-extreme-northern-plains} summarises site counts and peak sums across the three divisions.

<figure class="crd-table-figure" id="tab:summary-extreme-northern-plains">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Included Sites</th><th class="crd-th">Sum of Site Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Souris-Devils Lake</strong></td><td class="crd-td">16</td><td class="crd-td">2,3k</td><td class="crd-td">Devils Lake-Narrows (290)</td></tr>
<tr><td class="crd-td"><strong>Red River Valley</strong></td><td class="crd-td">34</td><td class="crd-td">6k</td><td class="crd-td">Biesterfeldt (480)</td></tr>
<tr><td class="crd-td"><strong>Rainy River Border</strong></td><td class="crd-td">11</td><td class="crd-td">2,7k</td><td class="crd-td">McKinstry (360)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of the 61 included sites and peak sums across Extreme Northern Plains HU 09.</figcaption>
</figure>

## Aggregation-Camp Population Estimation

Site trajectories combine excavated habitation terrace area, hearth counts and contemporaneous seasonal camp sizes inferred from burial-mound demography, fortified village ditch perimeters and ethnographic sturgeon-fishery and wild-rice camp sizes [@stoltman1973laurel; @johnson1973arvilla; @toom2004northeastern]. Peak figures reflect maximum regular seasonal or semi-sedentary occupation rather than fleeting ceremonial gatherings.

# Testing and Validation

Ledger reconciliation confirms exact parity between the 61 included complexes in `extreme_northern_plains_source_ledger.json5` and `extreme_northern_plains_settlements.json`, plus 1 excluded duplicate-alias entry (`Devils Lake-Narrows`), totalling 62 accounted candidates. Site coordinates span 45,52 to 49,27 N and 91,58 to 113,75 W, with `CENTAUR` provenance stamped on every entry. Leading Woodland mound centres crest during the Middle-to-Late Woodland peak (Grand Mound 320 in 400AD; Arvilla 360 in 800AD; Devils Lake-Narrows 290 in 800AD; McKinstry 360 in 1100AD), while fortified Northeastern Plains Village towns on the lower Sheyenne crest later at Shea (310 in 1500AD) and Biesterfeldt (480 in 1600AD) [@kelly2025; @toom2004northeastern]. Figure \ref{fig:settlements-extreme-northern-plains} charts the rank-size hierarchy across all 61 catalogued sites.

<figure class="crd-figure-block" id="fig:settlements-extreme-northern-plains">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-extreme-northern-plains-settlements/fig4_extreme_northern_plains_settlements.png" alt="fig:settlements-extreme-northern-plains" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and peak hierarchy across the 61 catalogued complexes in Extreme Northern Plains HU 09.</figcaption>
</figure>

# Results

## Leading Settlement Gazetteer

Table \ref{tab:gazetteer-extreme-northern-plains} details the top 45 complexes by peak population descending out of the 61 catalogued sites in HU 09.

<figure class="crd-table-figure" id="tab:gazetteer-extreme-northern-plains">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">Benchmark Series</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Biesterfeldt</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">Red River Valley</td><td class="crd-td">46,4 N, 97,49 W</td><td class="crd-td">1550AD - 1600AD</td><td class="crd-td">480</td><td class="crd-td">1550AD: 320; 1600AD: 480</td></tr>
<tr><td class="crd-td"><strong>Arvilla</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">Red River Valley</td><td class="crd-td">47,92 N, 97,48 W</td><td class="crd-td">600AD - 1300AD</td><td class="crd-td">360</td><td class="crd-td">600AD: 240; 800AD: 360; 1000AD: 310; 1300AD: 240</td></tr>
<tr><td class="crd-td"><strong>McKinstry</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Rainy River Border</td><td class="crd-td">48,52 N, 93,57 W</td><td class="crd-td">100BC - 1200AD</td><td class="crd-td">360</td><td class="crd-td">100BC: 140; 400AD: 220; 500AD: 290; 800AD: 340; 1100AD: 360; 1200AD: 290</td></tr>
<tr><td class="crd-td"><strong>Grand Mound</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Rainy River Border</td><td class="crd-td">48,51 N, 93,66 W</td><td class="crd-td">100BC - 900AD</td><td class="crd-td">320</td><td class="crd-td">100BC: 140; 400AD: 320; 900AD: 240</td></tr>
<tr><td class="crd-td"><strong>Shea</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">Red River Valley</td><td class="crd-td">46,78 N, 97,45 W</td><td class="crd-td">1400AD - 1550AD</td><td class="crd-td">310</td><td class="crd-td">1400AD: 240; 1480AD: 310; 1550AD: 210</td></tr>
<tr><td class="crd-td"><strong>Devils Lake-Narrows</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">Souris-Devils Lake</td><td class="crd-td">48,03 N, 98,92 W</td><td class="crd-td">600AD - 1500AD</td><td class="crd-td">290</td><td class="crd-td">600AD: 180; 800AD: 290; 1000AD: 260; 1400AD: 210; 1500AD: 220</td></tr>
<tr><td class="crd-td"><strong>Schocker</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Rainy River Border</td><td class="crd-td">47,74 N, 94,61 W</td><td class="crd-td">800AD - 1550AD</td><td class="crd-td">290</td><td class="crd-td">800AD: 150; 1100AD: 260; 1400AD: 290; 1550AD: 235</td></tr>
<tr><td class="crd-td"><strong>Nett Lake</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Rainy River Border</td><td class="crd-td">48,11 N, 93,11 W</td><td class="crd-td">500BC - 1500AD</td><td class="crd-td">265</td><td class="crd-td">500BC: 85; 400AD: 175; 1000AD: 240; 1500AD: 265</td></tr>
<tr><td class="crd-td"><strong>Waskish Upper Red Lake</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Rainy River Border</td><td class="crd-td">48,16 N, 94,51 W</td><td class="crd-td">500AD - 1550AD</td><td class="crd-td">250</td><td class="crd-td">500AD: 110; 1000AD: 215; 1350AD: 250; 1550AD: 220</td></tr>
<tr><td class="crd-td"><strong>Big Rice</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Rainy River Border</td><td class="crd-td">47,69 N, 92,49 W</td><td class="crd-td">100BC - 1450AD</td><td class="crd-td">245</td><td class="crd-td">100BC: 95; 500AD: 180; 1100AD: 245; 1450AD: 210</td></tr>
<tr><td class="crd-td"><strong>Orwell</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Red River Valley</td><td class="crd-td">46,29 N, 96,08 W</td><td class="crd-td">2200BC - 1100AD</td><td class="crd-td">240</td><td class="crd-td">2200BC: 65; 200AD: 190; 600AD: 240; 1100AD: 175</td></tr>
<tr><td class="crd-td"><strong>Sprunk</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">Red River Valley</td><td class="crd-td">46,72 N, 97,14 W</td><td class="crd-td">1100AD - 1500AD</td><td class="crd-td">240</td><td class="crd-td">1100AD: 140; 1350AD: 240; 1500AD: 215</td></tr>
<tr><td class="crd-td"><strong>Warroad</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Red River Valley</td><td class="crd-td">48,91 N, 95,31 W</td><td class="crd-td">500BC - 1500AD</td><td class="crd-td">235</td><td class="crd-td">500BC: 75; 500AD: 165; 1100AD: 235; 1500AD: 210</td></tr>
<tr><td class="crd-td"><strong>Sullys Hill Mounds</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">Souris-Devils Lake</td><td class="crd-td">47,99 N, 98,98 W</td><td class="crd-td">400AD - 1500AD</td><td class="crd-td">230</td><td class="crd-td">400AD: 110; 800AD: 195; 1200AD: 230; 1500AD: 175</td></tr>
<tr><td class="crd-td"><strong>Baldhill Mound</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">Red River Valley</td><td class="crd-td">47,04 N, 98,08 W</td><td class="crd-td">100AD - 1200AD</td><td class="crd-td">210</td><td class="crd-td">100AD: 135; 400AD: 210; 800AD: 180; 1200AD: 145</td></tr>
<tr><td class="crd-td"><strong>Hannaford</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Rainy River Border</td><td class="crd-td">48,54 N, 93,3 W</td><td class="crd-td">300AD - 1400AD</td><td class="crd-td">210</td><td class="crd-td">300AD: 135; 600AD: 210; 1000AD: 195; 1400AD: 165</td></tr>
<tr><td class="crd-td"><strong>Horner-Kane</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">Souris-Devils Lake</td><td class="crd-td">48,04 N, 99,06 W</td><td class="crd-td">900AD - 1500AD</td><td class="crd-td">210</td><td class="crd-td">900AD: 140; 1150AD: 210; 1350AD: 185; 1500AD: 140</td></tr>
<tr><td class="crd-td"><strong>Northwest Angle</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Rainy River Border</td><td class="crd-td">49,27 N, 95,05 W</td><td class="crd-td">200BC - 1550AD</td><td class="crd-td">210</td><td class="crd-td">200BC: 80; 500AD: 160; 1100AD: 210; 1550AD: 195</td></tr>
<tr><td class="crd-td"><strong>Round Mound</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Red River Valley</td><td class="crd-td">45,77 N, 96,64 W</td><td class="crd-td">100BC - 1200AD</td><td class="crd-td">210</td><td class="crd-td">100BC: 95; 300AD: 170; 800AD: 210; 1200AD: 165</td></tr>
<tr><td class="crd-td"><strong>Kindred Sheyenne</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">Red River Valley</td><td class="crd-td">46,65 N, 97,02 W</td><td class="crd-td">1000BC - 1500AD</td><td class="crd-td">195</td><td class="crd-td">1000BC: 55; 500AD: 120; 1250AD: 195; 1500AD: 170</td></tr>
<tr><td class="crd-td"><strong>Lake Bronson</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Red River Valley</td><td class="crd-td">48,73 N, 96,66 W</td><td class="crd-td">500AD - 1100AD</td><td class="crd-td">195</td><td class="crd-td">500AD: 130; 800AD: 195; 1100AD: 160</td></tr>
<tr><td class="crd-td"><strong>Haarstad Mound</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Red River Valley</td><td class="crd-td">48,36 N, 96,37 W</td><td class="crd-td">1500BC - 1100AD</td><td class="crd-td">190</td><td class="crd-td">1500BC: 60; 400AD: 135; 750AD: 190; 1100AD: 155</td></tr>
<tr><td class="crd-td"><strong>Maplewood</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Red River Valley</td><td class="crd-td">46,53 N, 95,95 W</td><td class="crd-td">950BC - 1350AD</td><td class="crd-td">190</td><td class="crd-td">950BC: 75; 200AD: 145; 950AD: 190; 1350AD: 160</td></tr>
<tr><td class="crd-td"><strong>Pelican Lake Orr</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Rainy River Border</td><td class="crd-td">48,06 N, 92,9 W</td><td class="crd-td">200BC - 1450AD</td><td class="crd-td">185</td><td class="crd-td">200BC: 75; 400AD: 140; 1000AD: 185; 1450AD: 165</td></tr>
<tr><td class="crd-td"><strong>Warner Mound</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Red River Valley</td><td class="crd-td">47,88 N, 96,27 W</td><td class="crd-td">500AD - 1200AD</td><td class="crd-td">185</td><td class="crd-td">500AD: 120; 850AD: 185; 1200AD: 155</td></tr>
<tr><td class="crd-td"><strong>Crane Lake</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Rainy River Border</td><td class="crd-td">48,29 N, 92,48 W</td><td class="crd-td">1500BC - 1500AD</td><td class="crd-td">180</td><td class="crd-td">1500BC: 55; 300AD: 125; 1000AD: 180; 1500AD: 170</td></tr>
<tr><td class="crd-td"><strong>Roseau River</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Red River Valley</td><td class="crd-td">48,85 N, 95,76 W</td><td class="crd-td">800BC - 1500AD</td><td class="crd-td">180</td><td class="crd-td">800BC: 60; 600AD: 130; 1200AD: 180; 1500AD: 160</td></tr>
<tr><td class="crd-td"><strong>Crookston Red Lake River</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Red River Valley</td><td class="crd-td">47,77 N, 96,61 W</td><td class="crd-td">1200BC - 1450AD</td><td class="crd-td">175</td><td class="crd-td">1200BC: 55; 400AD: 120; 1000AD: 175; 1450AD: 150</td></tr>
<tr><td class="crd-td"><strong>Minot Souris Terrace</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">Souris-Devils Lake</td><td class="crd-td">48,24 N, 101,28 W</td><td class="crd-td">1500BC - 1450AD</td><td class="crd-td">175</td><td class="crd-td">1500BC: 60; 300AD: 115; 1000AD: 175; 1450AD: 150</td></tr>
<tr><td class="crd-td"><strong>Warwick Sheyenne</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">Souris-Devils Lake</td><td class="crd-td">47,85 N, 98,7 W</td><td class="crd-td">100AD - 1200AD</td><td class="crd-td">175</td><td class="crd-td">100AD: 105; 450AD: 175; 850AD: 150; 1200AD: 120</td></tr>
<tr><td class="crd-td"><strong>Little Floyd Lake</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Red River Valley</td><td class="crd-td">46,87 N, 95,83 W</td><td class="crd-td">2400BC - 1200AD</td><td class="crd-td">165</td><td class="crd-td">2400BC: 55; 500BC: 95; 650AD: 165; 1200AD: 140</td></tr>
<tr><td class="crd-td"><strong>Miller Mound</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Red River Valley</td><td class="crd-td">45,52 N, 96,51 W</td><td class="crd-td">700AD - 1300AD</td><td class="crd-td">165</td><td class="crd-td">700AD: 115; 1000AD: 165; 1300AD: 140</td></tr>
<tr><td class="crd-td"><strong>Thief River Falls</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Red River Valley</td><td class="crd-td">48,12 N, 96,18 W</td><td class="crd-td">1000BC - 1500AD</td><td class="crd-td">165</td><td class="crd-td">1000BC: 50; 500AD: 115; 1150AD: 165; 1500AD: 145</td></tr>
<tr><td class="crd-td"><strong>Irvin Nelson</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">Souris-Devils Lake</td><td class="crd-td">48,07 N, 99,36 W</td><td class="crd-td">800BC - 1400AD</td><td class="crd-td">160</td><td class="crd-td">800BC: 95; 400AD: 145; 1400AD: 160</td></tr>
<tr><td class="crd-td"><strong>Lisbon Burial</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">Red River Valley</td><td class="crd-td">46,44 N, 97,68 W</td><td class="crd-td">600BC - 1300AD</td><td class="crd-td">160</td><td class="crd-td">600BC: 65; 400AD: 115; 850AD: 160; 1300AD: 135</td></tr>
<tr><td class="crd-td"><strong>Femco</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Red River Valley</td><td class="crd-td">46,36 N, 96,47 W</td><td class="crd-td">450BC - 1450AD</td><td class="crd-td">155</td><td class="crd-td">450BC: 70; 400AD: 125; 1100AD: 155; 1450AD: 135</td></tr>
<tr><td class="crd-td"><strong>Grafton Park River</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">Red River Valley</td><td class="crd-td">48,41 N, 97,41 W</td><td class="crd-td">1500BC - 1450AD</td><td class="crd-td">155</td><td class="crd-td">1500BC: 50; 400AD: 110; 1000AD: 155; 1450AD: 135</td></tr>
<tr><td class="crd-td"><strong>North Twin Lake</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Red River Valley</td><td class="crd-td">47,33 N, 95,81 W</td><td class="crd-td">500BC - 1400AD</td><td class="crd-td">155</td><td class="crd-td">500BC: 65; 400AD: 120; 1000AD: 155; 1400AD: 135</td></tr>
<tr><td class="crd-td"><strong>Basswood Lake</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Rainy River Border</td><td class="crd-td">48,07 N, 91,58 W</td><td class="crd-td">2000BC - 1500AD</td><td class="crd-td">145</td><td class="crd-td">2000BC: 45; 200AD: 105; 1000AD: 145; 1500AD: 135</td></tr>
<tr><td class="crd-td"><strong>Cavalier Tongue River</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">Red River Valley</td><td class="crd-td">48,79 N, 97,62 W</td><td class="crd-td">2000BC - 1450AD</td><td class="crd-td">145</td><td class="crd-td">2000BC: 45; 500AD: 105; 1100AD: 145; 1450AD: 130</td></tr>
<tr><td class="crd-td"><strong>Cooperstown Sheyenne</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">Red River Valley</td><td class="crd-td">47,44 N, 98,12 W</td><td class="crd-td">500BC - 1500AD</td><td class="crd-td">145</td><td class="crd-td">500BC: 50; 600AD: 110; 1200AD: 145; 1500AD: 120</td></tr>
<tr><td class="crd-td"><strong>Hoff Deep</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Red River Valley</td><td class="crd-td">47,46 N, 96,81 W</td><td class="crd-td">1500BC - 1300AD</td><td class="crd-td">145</td><td class="crd-td">1500BC: 60; 300AD: 110; 850AD: 145; 1300AD: 130</td></tr>
<tr><td class="crd-td"><strong>Towner Mouse River</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">Souris-Devils Lake</td><td class="crd-td">48,35 N, 100,41 W</td><td class="crd-td">1000BC - 1500AD</td><td class="crd-td">140</td><td class="crd-td">1000BC: 45; 400AD: 95; 1100AD: 140; 1500AD: 125</td></tr>
<tr><td class="crd-td"><strong>Kenmare Souris Camp</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">Souris-Devils Lake</td><td class="crd-td">48,67 N, 102,07 W</td><td class="crd-td">2000BC - 1400AD</td><td class="crd-td">135</td><td class="crd-td">2000BC: 45; 200AD: 90; 900AD: 135; 1400AD: 110</td></tr>
<tr><td class="crd-td"><strong>Mooney</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Red River Valley</td><td class="crd-td">47,35 N, 96,83 W</td><td class="crd-td">1200BC - 1400AD</td><td class="crd-td">135</td><td class="crd-td">1200BC: 75; 500AD: 115; 1400AD: 135</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Top 45 complexes by peak population descending in Extreme Northern Plains HU 09 with coordinates, spans and series.</figcaption>
</figure>

## Excluded Candidates and Source Ledger Audit

Table \ref{tab:ledger-extreme-northern-plains} documents the single excluded duplicate-alias entry from `extreme_northern_plains_source_ledger.json5`, capped at 30 rows for display.

<figure class="crd-table-figure" id="tab:ledger-extreme-northern-plains">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Devils Lake-Narrows</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Devils Lake-Narrows' (CENTAUR Existing Verified Monument Inventory).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded duplicate-alias candidate in the Extreme Northern Plains HU 09 source ledger.</figcaption>
</figure>

# Limitations

Site-level documentation in HU 09 faces three constraints. First, Laurel and Arvilla occupations represent semi-sedentary seasonal aggregations rather than year-round nucleated towns, so site estimates measure peak seasonal co-residence [@stoltman1973laurel; @johnson1973arvilla]. Second, Devils Lake water-level fluctuations submerged or eroded shoreline camps across mid- and late-Holocene highstands [@gregg1994plains]. Third, late pre-contact Blackduck and Selkirk winter hunting camps north of the Rainy River fall outside the USGS HUC-2 polygon and are resolved in the Canadian Prairies and Hudson Bay chapters [@lenius1990rainy; @syms1977cultural].

# Conclusion

Cataloguing 61 complexes across 144,28k km² documents the full archaeological hierarchy of the Glacial Lake Agassiz basin from 9000BC beach-ridge camps to sixteenth-century fortified Sheyenne earthlodge villages.

# Sources

<div id="refs"></div>
