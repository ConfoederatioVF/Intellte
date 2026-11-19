---
title: "Settlement Gazetteer of the Pre-Columbian Atlantic Maritimes, Newfoundland and Labrador"
subtitle: "CENTAUR-II: Coordinates, Toponymy and Demographic Trajectories, 10000BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: maritimes_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_maritimes_spatial.png"
hero_caption: "Spatial distribution of 54 Palaeoindian, Maritime Archaic, Woodland, Dorset, Inuit and Norse settlements across the Atlantic Maritimes, Newfoundland and Labrador from 10000BC to 1600AD."
hero_label: "fig:hero-maritimes"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles WGS84 coordinates, Indigenous, Norse and French toponymy, occupation spans and population trajectories for 54 pre-contact settlements across the Atlantic Maritimes, Newfoundland and Labrador (484,19k km²) from 10000BC to 1600AD. Entries span from the 9000BC Debert Palaeoindian aggregation (90 peak) and 8000BC St. Peter's Bay (260 peak) through the 6000BC Maritime Archaic complex at L'Anse Amour (180) to long-lived shell-midden, estuarine and coastal sealing hubs at Metepenagiag (620), Kejimkujik-Merigomish (580), Meductic (480), Port au Choix (420), Beaubassin (380), Grand-Pré (340), Melanson (310), Malpeque (310), Okak (290) and Sheshatshiu (290), alongside the 1000AD Norse Vinland wintering station at L'Anse aux Meadows (110). All 54 included settlements reconcile with zero discrepancies against 55 ledger candidates in `maritimes_source_ledger.json5` with one duplicate-alias exclusion (Metepenagiag).

# Background

Coastal, tidal and estuarine resource concentrations structured residential persistence across Atlantic Canada [@prins1996; @renouf1999]. In New Brunswick, Nova Scotia and Prince Edward Island, stratified salmon-fishing terraces, dykeland tidal flats and shell middens at Metepenagiag, Meductic, Kejimkujik-Merigomish, Beaubassin, Grand-Pré and Malpeque sustained multi-century Wolastoqiyik and Mi'kmaq centres [@allen1981; @prins1996]. Across the Strait of Belle Isle, western Newfoundland and northern Labrador, Maritime Archaic, Groswater, Dorset, Recent Indian, Beothuk, Innu, Inuit and Norse sites anchored harp-seal hunting, soapstone and Ramah chert extraction and North Atlantic crossings [@tuck1976; @tuck1976b; @wallace2003; @fitzhugh1972].

# Methodology

Candidates enter `maritimes_source_ledger.json5` when excavated hearth floors, shell-midden volumes, burial complexes or Norse hall capacities permit bounded population estimates [@macdonald1968; @ingstad1985]. Overlapping close-pair records within 2 km of a canonical settlement are flagged as `excluded` under duplicate-alias rules rather than retained twice. Coordinates follow `[lat, lng]` decimal degrees in WGS84, and Table \ref{tab:summary} summarises site distribution across the four sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Included Sites</th><th class="crd-th">Sum of Site Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mi'kma'ki</strong></td><td class="crd-td">16</td><td class="crd-td">4,2k</td><td class="crd-td">Kejimkujik-Merigomish (580)</td></tr>
<tr><td class="crd-td"><strong>Wolastoq-NB</strong></td><td class="crd-td">12</td><td class="crd-td">3,1k</td><td class="crd-td">Metepenagiag (620)</td></tr>
<tr><td class="crd-td"><strong>Newfoundland</strong></td><td class="crd-td">13</td><td class="crd-td">2,5k</td><td class="crd-td">Port au Choix (420)</td></tr>
<tr><td class="crd-td"><strong>Labrador</strong></td><td class="crd-td">13</td><td class="crd-td">2,4k</td><td class="crd-td">Okak (290)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of included settlements and peak populations across the Atlantic Maritimes, Newfoundland and Labrador.</figcaption>
</figure>

# Testing and Validation

Ledger reconciliation passes with 54 included sites, 1 excluded duplicate-alias entry, zero unaccounted candidates and zero coordinate or schema faults. Site latitudes extend from 43,86 to 59,96 N and longitudes from 52,88 to 67,5 W, with `CENTAUR` provenance logged on every entry. Figure \ref{fig:settlements} charts the rank-size curve across all 54 catalogued settlements alongside the 12 highest-peaking sites led by Metepenagiag (620) and Kejimkujik-Merigomish (580).

<figure class="crd-figure-block" id="fig:settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-maritimes-settlements/fig4_maritimes_settlements.png" alt="fig:settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and peak populations across the 54 catalogued settlements of the Atlantic Maritimes, Newfoundland and Labrador.</figcaption>
</figure>

# Results

## Leading Settlement Trajectories

Table \ref{tab:gazetteer} lists the top 45 settlements by peak population descending out of the 54 catalogued sites in `maritimes_settlements.json`.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Alternative Names</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">Benchmark Series</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Metepenagiag</strong></td><td class="crd-td">Oxbow; Red Bank</td><td class="crd-td">Wolastoq-NB</td><td class="crd-td">46,94 N, 65,81 W</td><td class="crd-td">1000BC - 1500AD</td><td class="crd-td">620</td><td class="crd-td">1000BC: 220; 600BC: 140; 300BC: 190; 800AD: 460; 1400AD: 580; 1500AD: 620</td></tr>
<tr><td class="crd-td"><strong>Kejimkujik-Merigomish</strong></td><td class="crd-td">Merigomish Harbour; Mi'kmaq Shellmidden</td><td class="crd-td">Mi'kma'ki</td><td class="crd-td">45,63 N, 62,43 W</td><td class="crd-td">1000BC - 1600AD</td><td class="crd-td">580</td><td class="crd-td">1000BC: 180; 400AD: 310; 1200AD: 460; 1500AD: 580; 1600AD: 480</td></tr>
<tr><td class="crd-td"><strong>Meductic</strong></td><td class="crd-td">Maliseet Fort; Wolastoq</td><td class="crd-td">Wolastoq-NB</td><td class="crd-td">45,99 N, 67,5 W</td><td class="crd-td">1300AD - 1600AD</td><td class="crd-td">480</td><td class="crd-td">1300AD: 320; 1500AD: 480; 1600AD: 450</td></tr>
<tr><td class="crd-td"><strong>Port au Choix</strong></td><td class="crd-td">Phillip's Garden; Newfoundland</td><td class="crd-td">Newfoundland</td><td class="crd-td">50,72 N, 57,37 W</td><td class="crd-td">2000BC - 1200AD</td><td class="crd-td">420</td><td class="crd-td">2000BC: 120; 200BC: 180; 300AD: 340; 400AD: 310; 700AD: 260; 1200AD: 260</td></tr>
<tr><td class="crd-td"><strong>Beaubassin</strong></td><td class="crd-td">Siknikt; Chignecto Isthmus Mi'kmaq</td><td class="crd-td">Mi'kma'ki</td><td class="crd-td">45,84 N, 64,26 W</td><td class="crd-td">1100AD - 1600AD</td><td class="crd-td">380</td><td class="crd-td">1100AD: 210; 1400AD: 320; 1600AD: 380</td></tr>
<tr><td class="crd-td"><strong>Grand-Pré</strong></td><td class="crd-td">Esgigeoag Minas Basin; Pre-Columbian Shell Heaps</td><td class="crd-td">Mi'kma'ki</td><td class="crd-td">45,11 N, 64,31 W</td><td class="crd-td">500BC - 1500AD</td><td class="crd-td">340</td><td class="crd-td">500BC: 140; 1000AD: 260; 1500AD: 340</td></tr>
<tr><td class="crd-td"><strong>Malpeque</strong></td><td class="crd-td">Epektwik; Hog Island Pitawelkek</td><td class="crd-td">Mi'kma'ki</td><td class="crd-td">46,54 N, 63,88 W</td><td class="crd-td">500AD - 1500AD</td><td class="crd-td">310</td><td class="crd-td">500AD: 140; 1100AD: 240; 1500AD: 310</td></tr>
<tr><td class="crd-td"><strong>Melanson</strong></td><td class="crd-td">Melanson Dyke; BgDb-7</td><td class="crd-td">Mi'kma'ki</td><td class="crd-td">45,08 N, 64,33 W</td><td class="crd-td">100AD - 1500AD</td><td class="crd-td">310</td><td class="crd-td">100AD: 140; 800AD: 240; 1100AD: 140; 1400AD: 190; 1500AD: 310</td></tr>
<tr><td class="crd-td"><strong>Okak</strong></td><td class="crd-td">Kivalekh; Okak Bay</td><td class="crd-td">Labrador</td><td class="crd-td">57,57 N, 61,97 W</td><td class="crd-td">1500BC - 1600AD</td><td class="crd-td">290</td><td class="crd-td">1500BC: 75; 500AD: 150; 1300AD: 240; 1600AD: 290</td></tr>
<tr><td class="crd-td"><strong>Sheshatshiu</strong></td><td class="crd-td">Hamilton Inlet Innu; Lake Melville</td><td class="crd-td">Labrador</td><td class="crd-td">53,52 N, 60,13 W</td><td class="crd-td">3000BC - 1500AD</td><td class="crd-td">290</td><td class="crd-td">3000BC: 85; 1000BC: 120; 600AD: 180; 1200AD: 240; 1500AD: 290</td></tr>
<tr><td class="crd-td"><strong>Geganisg</strong></td><td class="crd-td">Cape Breton Bras d'Or; Eskasoni</td><td class="crd-td">Mi'kma'ki</td><td class="crd-td">45,94 N, 60,59 W</td><td class="crd-td">600AD - 1600AD</td><td class="crd-td">280</td><td class="crd-td">600AD: 140; 1400AD: 240; 1600AD: 280</td></tr>
<tr><td class="crd-td"><strong>Boyd's Cove</strong></td><td class="crd-td">DiAp-3; Notre Dame Bay Beothuk</td><td class="crd-td">Newfoundland</td><td class="crd-td">49,44 N, 54,66 W</td><td class="crd-td">1000AD - 1600AD</td><td class="crd-td">260</td><td class="crd-td">1000AD: 110; 1400AD: 190; 1550AD: 160; 1600AD: 260</td></tr>
<tr><td class="crd-td"><strong>Eel Bridge</strong></td><td class="crd-td">Eel Weir; BaDg-2</td><td class="crd-td">Mi'kma'ki</td><td class="crd-td">44,36 N, 65,21 W</td><td class="crd-td">2000BC - 1500AD</td><td class="crd-td">260</td><td class="crd-td">2000BC: 95; 900AD: 180; 1500AD: 260</td></tr>
<tr><td class="crd-td"><strong>Minister's Island</strong></td><td class="crd-td">Ministers Island; BgDs-10</td><td class="crd-td">Wolastoq-NB</td><td class="crd-td">45,21 N, 67,04 W</td><td class="crd-td">500BC - 1400AD</td><td class="crd-td">260</td><td class="crd-td">500BC: 120; 100BC: 110; 600AD: 210; 700AD: 180; 800AD: 140; 1400AD: 260</td></tr>
<tr><td class="crd-td"><strong>Nain</strong></td><td class="crd-td">Unity Bay; Labrador Coast</td><td class="crd-td">Labrador</td><td class="crd-td">56,38 N, 61,71 W</td><td class="crd-td">1500BC - 1600AD</td><td class="crd-td">260</td><td class="crd-td">1500BC: 75; 500AD: 140; 1300AD: 220; 1600AD: 260</td></tr>
<tr><td class="crd-td"><strong>Rustico Island</strong></td><td class="crd-td">CcCt-1; Prince Edward Island North Shore</td><td class="crd-td">Mi'kma'ki</td><td class="crd-td">46,46 N, 63,26 W</td><td class="crd-td">300AD - 1600AD</td><td class="crd-td">260</td><td class="crd-td">300AD: 140; 1200AD: 220; 1600AD: 260</td></tr>
<tr><td class="crd-td"><strong>St. Peter's Bay</strong></td><td class="crd-td">Greenwich Jones Site; Poogoosumkek Boktaba</td><td class="crd-td">Mi'kma'ki</td><td class="crd-td">46,43 N, 62,66 W</td><td class="crd-td">8000BC - 1200AD</td><td class="crd-td">260</td><td class="crd-td">8000BC: 45; 700AD: 180; 1200AD: 260</td></tr>
<tr><td class="crd-td"><strong>St. Croix</strong></td><td class="crd-td">BfDd-1; Hants County Avon River</td><td class="crd-td">Mi'kma'ki</td><td class="crd-td">44,94 N, 64,04 W</td><td class="crd-td">500BC - 1500AD</td><td class="crd-td">240</td><td class="crd-td">500BC: 110; 500AD: 180; 1500AD: 240</td></tr>
<tr><td class="crd-td"><strong>Beaches</strong></td><td class="crd-td">DeAk-1; Bonavista Bay Beothuk and Archaic</td><td class="crd-td">Newfoundland</td><td class="crd-td">48,65 N, 53,11 W</td><td class="crd-td">3000BC - 1400AD</td><td class="crd-td">220</td><td class="crd-td">3000BC: 95; 0AD: 160; 1400AD: 220</td></tr>
<tr><td class="crd-td"><strong>Weir</strong></td><td class="crd-td">BgDq-6; Bliss Islands Passamaquoddy</td><td class="crd-td">Wolastoq-NB</td><td class="crd-td">45,12 N, 66,88 W</td><td class="crd-td">800BC - 1500AD</td><td class="crd-td">220</td><td class="crd-td">800BC: 95; 1000AD: 180; 1500AD: 220</td></tr>
<tr><td class="crd-td"><strong>Carson</strong></td><td class="crd-td">BgDr-5; Passamaquoddy Bay Ceramic Period</td><td class="crd-td">Wolastoq-NB</td><td class="crd-td">45,21 N, 67,04 W</td><td class="crd-td">800AD - 1400AD</td><td class="crd-td">210</td><td class="crd-td">800AD: 140; 1400AD: 210</td></tr>
<tr><td class="crd-td"><strong>Delorey Island</strong></td><td class="crd-td">BjCj-9; Tracadie Harbour Antigonish</td><td class="crd-td">Mi'kma'ki</td><td class="crd-td">45,63 N, 61,66 W</td><td class="crd-td">400AD - 1100AD</td><td class="crd-td">210</td><td class="crd-td">400AD: 130; 1100AD: 210</td></tr>
<tr><td class="crd-td"><strong>Hamilton Inlet (Groswater Bay)</strong></td><td class="crd-td">Rattlers Bight; GcBi-7</td><td class="crd-td">Labrador</td><td class="crd-td">54,12 N, 57,77 W</td><td class="crd-td">3000BC - 800AD</td><td class="crd-td">210</td><td class="crd-td">3000BC: 85; 1500BC: 160; 500BC: 210; 800AD: 180</td></tr>
<tr><td class="crd-td"><strong>Port Joli</strong></td><td class="crd-td">Port Joli No. 8; AlDf-8</td><td class="crd-td">Mi'kma'ki</td><td class="crd-td">43,86 N, 64,89 W</td><td class="crd-td">500AD - 1300AD</td><td class="crd-td">210</td><td class="crd-td">500AD: 110; 800AD: 160; 1300AD: 210</td></tr>
<tr><td class="crd-td"><strong>Skull Island</strong></td><td class="crd-td">Indian Island; Shediac Bay Mi'kmaq Burial</td><td class="crd-td">Wolastoq-NB</td><td class="crd-td">46,24 N, 64,54 W</td><td class="crd-td">1100AD - 1500AD</td><td class="crd-td">210</td><td class="crd-td">1100AD: 140; 1500AD: 210</td></tr>
<tr><td class="crd-td"><strong>Bunker Island</strong></td><td class="crd-td">AlDl-1; Yarmouth Harbour Shell Midden</td><td class="crd-td">Mi'kma'ki</td><td class="crd-td">43,88 N, 66,12 W</td><td class="crd-td">400AD - 1400AD</td><td class="crd-td">190</td><td class="crd-td">400AD: 120; 1400AD: 190</td></tr>
<tr><td class="crd-td"><strong>Fulton Island</strong></td><td class="crd-td">BlDn-12; Grand Lake Maquapit</td><td class="crd-td">Wolastoq-NB</td><td class="crd-td">45,92 N, 66,16 W</td><td class="crd-td">2500BC - 300AD</td><td class="crd-td">190</td><td class="crd-td">2500BC: 110; 2000BC: 140; 1000BC: 110; 300AD: 190</td></tr>
<tr><td class="crd-td"><strong>Gould</strong></td><td class="crd-td">EeBi-42; Port au Choix Recent Indian</td><td class="crd-td">Newfoundland</td><td class="crd-td">50,7 N, 57,34 W</td><td class="crd-td">3000BC - 500AD</td><td class="crd-td">190</td><td class="crd-td">3000BC: 85; 0AD: 140; 500AD: 190</td></tr>
<tr><td class="crd-td"><strong>Jemseg Crossing</strong></td><td class="crd-td">BkDm-14; Lower Saint John River</td><td class="crd-td">Wolastoq-NB</td><td class="crd-td">45,83 N, 66,11 W</td><td class="crd-td">1000BC - 400AD</td><td class="crd-td">190</td><td class="crd-td">1000BC: 110; 400AD: 190</td></tr>
<tr><td class="crd-td"><strong>Pointe Riche</strong></td><td class="crd-td">EeBi-20; Port au Choix Dorset</td><td class="crd-td">Newfoundland</td><td class="crd-td">50,7 N, 57,41 W</td><td class="crd-td">100AD - 400AD</td><td class="crd-td">190</td><td class="crd-td">100AD: 130; 400AD: 190</td></tr>
<tr><td class="crd-td"><strong>Rose Island</strong></td><td class="crd-td">Saglek Bay; IdCq-1</td><td class="crd-td">Labrador</td><td class="crd-td">58,46 N, 62,96 W</td><td class="crd-td">2000BC - 1400AD</td><td class="crd-td">190</td><td class="crd-td">2000BC: 60; 500BC: 110; 600AD: 160; 1400AD: 190</td></tr>
<tr><td class="crd-td"><strong>Cow Head</strong></td><td class="crd-td">Gros Morne; DlBk-1</td><td class="crd-td">Newfoundland</td><td class="crd-td">49,92 N, 57,8 W</td><td class="crd-td">1500BC - 1400AD</td><td class="crd-td">180</td><td class="crd-td">1500BC: 65; 1000BC: 95; 0AD: 110; 800AD: 150; 1000AD: 180; 1400AD: 180</td></tr>
<tr><td class="crd-td"><strong>Ferryland Pre-Contact</strong></td><td class="crd-td">CgAf-2; Avalon Peninsula Pre-Contact Beothuk</td><td class="crd-td">Newfoundland</td><td class="crd-td">47,02 N, 52,88 W</td><td class="crd-td">1400AD - 1600AD</td><td class="crd-td">180</td><td class="crd-td">1400AD: 120; 1600AD: 180</td></tr>
<tr><td class="crd-td"><strong>L'Anse Amour</strong></td><td class="crd-td">Strait of Belle Isle; Forteau Bay</td><td class="crd-td">Newfoundland</td><td class="crd-td">51,54 N, 56,88 W</td><td class="crd-td">6000BC - 1500AD</td><td class="crd-td">180</td><td class="crd-td">6000BC: 65; 5000BC: 95; 4500BC: 65; 2000BC: 85; 1200AD: 160; 1500AD: 180</td></tr>
<tr><td class="crd-td"><strong>Rattlers Bight 1</strong></td><td class="crd-td">GcBi-7; Hamilton Inlet Groswater Bay</td><td class="crd-td">Labrador</td><td class="crd-td">54,17 N, 57,95 W</td><td class="crd-td">2000BC - 0AD</td><td class="crd-td">180</td><td class="crd-td">2000BC: 140; 0AD: 180</td></tr>
<tr><td class="crd-td"><strong>Sand Point</strong></td><td class="crd-td">Sandy Point; BgDs-6</td><td class="crd-td">Wolastoq-NB</td><td class="crd-td">45,15 N, 67,14 W</td><td class="crd-td">0AD - 600AD</td><td class="crd-td">180</td><td class="crd-td">0AD: 110; 600AD: 180</td></tr>
<tr><td class="crd-td"><strong>Teacher's Cove</strong></td><td class="crd-td">Teachers Cove; BgDr-11</td><td class="crd-td">Wolastoq-NB</td><td class="crd-td">45,21 N, 67,04 W</td><td class="crd-td">100BC - 700AD</td><td class="crd-td">180</td><td class="crd-td">100BC: 110; 700AD: 180</td></tr>
<tr><td class="crd-td"><strong>Bear River</strong></td><td class="crd-td">BdDk-1; Annapolis Basin Shell Midden</td><td class="crd-td">Mi'kma'ki</td><td class="crd-td">44,61 N, 65,67 W</td><td class="crd-td">200BC - 300AD</td><td class="crd-td">170</td><td class="crd-td">200BC: 110; 300AD: 170</td></tr>
<tr><td class="crd-td"><strong>Bird Cove</strong></td><td class="crd-td">EgBf-4; Great Northern Peninsula Groswater</td><td class="crd-td">Newfoundland</td><td class="crd-td">51,05 N, 56,93 W</td><td class="crd-td">1000BC - 600AD</td><td class="crd-td">170</td><td class="crd-td">1000BC: 90; 0AD: 140; 600AD: 170</td></tr>
<tr><td class="crd-td"><strong>Nukasusutok</strong></td><td class="crd-td">Nain Archipelago; HcCh-5</td><td class="crd-td">Labrador</td><td class="crd-td">56,12 N, 61,46 W</td><td class="crd-td">3500BC - 1400AD</td><td class="crd-td">170</td><td class="crd-td">3500BC: 50; 1500BC: 95; 500AD: 140; 1400AD: 170</td></tr>
<tr><td class="crd-td"><strong>Norris Point</strong></td><td class="crd-td">DjBl-2; Bonne Bay Maritime Archaic and Groswater</td><td class="crd-td">Newfoundland</td><td class="crd-td">49,52 N, 57,88 W</td><td class="crd-td">2000BC - 400AD</td><td class="crd-td">160</td><td class="crd-td">2000BC: 85; 500BC: 130; 400AD: 160</td></tr>
<tr><td class="crd-td"><strong>Nulliak Cove 1</strong></td><td class="crd-td">IbCp-20; Northern Labrador Maritime Archaic</td><td class="crd-td">Labrador</td><td class="crd-td">58,29 N, 62,71 W</td><td class="crd-td">2000BC - 1000BC</td><td class="crd-td">160</td><td class="crd-td">2000BC: 120; 1000BC: 160</td></tr>
<tr><td class="crd-td"><strong>Partridge Island</strong></td><td class="crd-td">Saint John Harbour; Bay of Fundy</td><td class="crd-td">Wolastoq-NB</td><td class="crd-td">45,29 N, 66,12 W</td><td class="crd-td">500BC - 400AD</td><td class="crd-td">160</td><td class="crd-td">500BC: 95; 400AD: 160</td></tr>
<tr><td class="crd-td"><strong>Skora</strong></td><td class="crd-td">Whites Lake; BdCw-1</td><td class="crd-td">Mi'kma'ki</td><td class="crd-td">44,54 N, 63,75 W</td><td class="crd-td">500BC - 900AD</td><td class="crd-td">160</td><td class="crd-td">500BC: 95; 900AD: 160</td></tr>
<tr><td class="crd-td"><strong>The Meadows</strong></td><td class="crd-td">BlDn-26; Grand Lake Meadows</td><td class="crd-td">Wolastoq-NB</td><td class="crd-td">45,9 N, 66,24 W</td><td class="crd-td">200AD - 400AD</td><td class="crd-td">160</td><td class="crd-td">200AD: 120; 400AD: 160</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Top 45 settlements by peak population descending in the Atlantic Maritimes, Newfoundland and Labrador (10000BC to 1600AD).</figcaption>
</figure>

## Excluded Candidates and Source Ledger Audit

Table \ref{tab:excluded} displays the excluded duplicate-alias record from `maritimes_source_ledger.json5`, capped at 30 rows for display.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Entry</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Metepenagiag</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Metepenagiag' (Allen, Patricia. 1981. The Oxbow Site: Chronology and Prehistory in Northeastern New Brunswick. New Brunswick Manuscripts in Archaeology Series 2.).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded candidate entries in the Maritimes source ledger.</figcaption>
</figure>

## Sub-Regional Settlement Summaries

In Mi'kma'ki (16 entries, peak sum 4.250), the 9000BC to 8000BC caribou-intercept camp at Debert (90) and 8000BC St. Peter's Bay (260) precede late Holocene coastal-inland hubs at Kejimkujik-Merigomish (580), Beaubassin (380), Grand-Pré (340), Melanson (310), Malpeque (310), Geganisg (280), Rustico Island (260) and Eel Bridge (260) [@macdonald1968; @prins1996]. Across the Wolastoq-Miramichi basin (12 entries, peak sum 3.060), Metepenagiag (620 peak) and the fortified Wolastoqiyik village at Meductic (480) lead Passamaquoddy and Saint John Valley sites at Minister's Island (260), Weir (220), Carson (210) and Skull Island (210) [@allen1981; @prins1996].

On the Island of Newfoundland (13 entries, peak sum 2.480), Maritime Archaic, Dorset and Beothuk hubs at Port au Choix (420), Boyd's Cove (260), Beaches (220), Gould (190), Pointe Riche (190), Cow Head (180), Ferryland Pre-Contact (180) and L'Anse Amour (180) flank the brief 1000AD Norse base at L'Anse aux Meadows (110) [@tuck1976; @tuck1976b; @wallace2003; @ingstad1985; @renouf1999]. Northward in Labrador (13 entries, peak sum 2.380), Innu interior-estuarine aggregations at Sheshatshiu (290) pair with Inuit and Archaic coastal centres at Okak (290), Nain (260), Hamilton Inlet Groswater Bay (210), Rose Island (190) and Rattlers Bight 1 (180) [@fitzhugh1972].

# Limitations

Submerged coastal shell middens in the Bay of Fundy and along southern Nova Scotia skew surviving archaeological sites toward interior river terraces and isostatically uplifted northern beaches [@tuck1976; @renouf1999].

# Conclusion

Cataloguing 54 coastal, estuarine and riverine settlements across 484,19k km² documents the full archaeological hierarchy of pre-contact Atlantic Canada from 9000BC caribou stations to sixteenth-century coastal confederacies.

# Sources

<div id="refs"></div>
