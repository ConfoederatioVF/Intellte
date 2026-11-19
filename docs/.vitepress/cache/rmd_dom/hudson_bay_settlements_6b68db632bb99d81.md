---
title: "Settlement Gazetteer of the Pre-Columbian Hudson Bay and Boreal Shield"
subtitle: "CENTAUR-II: Coordinates, Toponymy and Demographic Trajectories, 10000BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: hudson_bay_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_hudson_bay_spatial.png"
hero_caption: "Spatial distribution of 89 catalogued subarctic, Woodland and coastal Arctic settlements across the Hudson Bay and Boreal Shield basin from 10000BC to 1600AD."
hero_label: "fig:hero-hudson-bay"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles WGS84 coordinates, indigenous and archaeological names, occupation spans and population trajectories for 89 persistent settlements across the Hudson Bay and Boreal Shield basin (`2,35M km²`) between `10000BC` and `1600AD`.

Early post-glacial occupations begin around `7500BC` at Cummins Site (`95` peak) on Lake Superior, `6000BC` at Migod (`110`) in Kivalliq and `5500BC` at Blanc-Sablon (`260`) on the Strait of Belle Isle, expanding through late-Holocene Woodland mounds at Grand Mound (`450`) and Kay-Nah-Chi-Wah-Nung (`440`) alongside estuarine and Arctic coastal hubs at Ivujivik-Nuvuk (`350`), Silumiut (`340`), Churchill-Seahorse Gully (`320`), Moose Factory-Moosonee (`320`), Nelson River-York Factory (`310`), Arvia'juaq (`310`), Chesterfield Inlet (Igluligaarjuk) (`290`), Baker Lake (Qamani'tuaq) (`280`) and Kuujjuaq (Ungava) (`280`). All `89` records carry `"CENTAUR"` provenance in `hudson_bay_settlements.json` and reconcile against `hudson_bay_source_ledger.json5` (`91` candidates, `89` included and `2` excluded).

# Background

Residential persistence across the Hudson Bay drainage anchored along three ecological niches [@wright1995; @pilon1987]. First, estuarine river mouths along western Hudson Bay and James Bay supported multi-season waterfowl, caribou and whitefish harvests at Churchill-Seahorse Gully, Nelson River-York Factory and Moose Factory-Moosonee [@nash1969; @pilon1987].

Second, Hudson Strait, Strait of Belle Isle headlands and Kivalliq caribou crossings concentrated Maritime Archaic, Pre-Dorset, Dorset and Thule sealing and Barrenland camps at Ivujivik-Nuvuk, Blanc-Sablon, Silumiut, Arvia'juaq and Baker Lake (Qamani'tuaq) [@plumet1994; @clark1977; @tuck1976].

Third, southern Shield-margin lake outlets and wild-rice basins sustained Archaic lithic workshops, native-copper exchange around northern Lake Superior and Laurel ceremonial mound precincts along Rainy River [@martin1999; @arzigian2008; @buchner1980].

# Methodology

Entries in `hudson_bay_source_ledger.json5` require dated habitation horizons, fixed coordinates and published band-aggregation, estuarine-camp or mound-precinct demographic counts [@arzigian2008; @plumet1994]. Duplicate or subordinate records (`Seahorse Gully` consolidated into `Churchill-Seahorse Gully`, and the Minnesota duplicate alias for `Grand Mound`) are excluded so no catchment is double-counted, while dispersed winter family hunting camps across the interior Shield are represented by the continuous kriging background. Table \ref{tab:summary} summarises site distribution across the three sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Included Sites</th><th class="crd-th">Sum of Site Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kivalliq Barrens</strong></td><td class="crd-td">11</td><td class="crd-td">2,4k</td><td class="crd-td">Silumiut (340)</td></tr>
<tr><td class="crd-td"><strong>Hudson-James Cree</strong></td><td class="crd-td">34</td><td class="crd-td">6,1k</td><td class="crd-td">Grand Mound (450)</td></tr>
<tr><td class="crd-td"><strong>Eastmain-Nunavik</strong></td><td class="crd-td">44</td><td class="crd-td">7,6k</td><td class="crd-td">Ivujivik-Nuvuk (350)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of included settlements and peak populations across the Hudson Bay basin.</figcaption>
</figure>

# Testing and Validation

Gazetteer reconciliation confirms `89` included settlements (`11` in Kivalliq Barrens, `34` in Hudson-James Lowlands and Cree Shield and `44` in Eastmain, Nunavik and Ungava), `2` excluded duplicate records (`91` total candidates), `0` unaccounted entries and `0` schema errors. Coordinates span `48,38` to `64,88` N and `57,12` to `101,33` W; `.sources` cites `"CENTAUR"` on every entry. Figure \ref{fig:settlements} charts the rank-size curve.

<figure class="crd-figure-block" id="fig:settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-hudson-bay-settlements/fig4_hudson_bay_settlements.png" alt="fig:settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading peak populations across the 89 catalogued settlements of the Hudson Bay basin.</figcaption>
</figure>

# Results

## Catalogued Settlement Trajectories

Table \ref{tab:gazetteer} documents the top `45` of 89 included settlements ordered by peak population descending.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Alternative Names</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">Benchmark Series</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Grand Mound</strong></td><td class="crd-td">21KC3; Smith Mounds</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">48,51 N, 93,71 W</td><td class="crd-td">200BC - 1200AD</td><td class="crd-td">450</td><td class="crd-td">200BC: 160; 0AD: 190; 400AD: 310; 700AD: 450; 1100AD: 320; 1200AD: 280</td></tr>
<tr><td class="crd-td"><strong>Kay-Nah-Chi-Wah-Nung</strong></td><td class="crd-td">Long Sault Mounds; Rainy River</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">48,64 N, 94,07 W</td><td class="crd-td">500BC - 1500AD</td><td class="crd-td">440</td><td class="crd-td">500BC: 120; 400AD: 260; 1100AD: 390; 1500AD: 440</td></tr>
<tr><td class="crd-td"><strong>Ivujivik-Nuvuk</strong></td><td class="crd-td">Nuvuk; Mansel-Ungava Strait</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">62,38 N, 77,88 W</td><td class="crd-td">1000BC - 1500AD</td><td class="crd-td">350</td><td class="crd-td">1000BC: 120; 400AD: 190; 1200AD: 310; 1500AD: 350</td></tr>
<tr><td class="crd-td"><strong>Silumiut</strong></td><td class="crd-td">Roes Welcome Sound; KkJg-1</td><td class="crd-td">Kivalliq Barrens</td><td class="crd-td">63,68 N, 90,67 W</td><td class="crd-td">1200AD - 1500AD</td><td class="crd-td">340</td><td class="crd-td">1200AD: 190; 1350AD: 340; 1500AD: 290</td></tr>
<tr><td class="crd-td"><strong>Churchill-Seahorse Gully</strong></td><td class="crd-td">Seahorse Gully; Dorset-Thule Point</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">58,79 N, 94,12 W</td><td class="crd-td">1000BC - 1500AD</td><td class="crd-td">320</td><td class="crd-td">1000BC: 110; 0AD: 170; 800AD: 210; 1300AD: 290; 1500AD: 320</td></tr>
<tr><td class="crd-td"><strong>Moose Factory-Moosonee</strong></td><td class="crd-td">Moose River Mouth; Wapiskaw</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">51,26 N, 80,61 W</td><td class="crd-td">1000BC - 1600AD</td><td class="crd-td">320</td><td class="crd-td">1000BC: 85; 400AD: 150; 500AD: 95; 1200AD: 180; 1500AD: 320; 1600AD: 290</td></tr>
<tr><td class="crd-td"><strong>Arvia'juaq</strong></td><td class="crd-td">Sentry Island; Arviat</td><td class="crd-td">Kivalliq Barrens</td><td class="crd-td">61,21 N, 94,04 W</td><td class="crd-td">1200AD - 1600AD</td><td class="crd-td">310</td><td class="crd-td">1200AD: 140; 1400AD: 240; 1600AD: 310</td></tr>
<tr><td class="crd-td"><strong>Nelson River-York Factory</strong></td><td class="crd-td">Kihciwaskahikan; Hayes-Nelson Confluence</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">57 N, 92,31 W</td><td class="crd-td">0AD - 1500AD</td><td class="crd-td">310</td><td class="crd-td">0AD: 95; 800AD: 160; 1300AD: 240; 1500AD: 310</td></tr>
<tr><td class="crd-td"><strong>Chesterfield Inlet (Igluligaarjuk)</strong></td><td class="crd-td">Igluligaarjuk; KiJ-1</td><td class="crd-td">Kivalliq Barrens</td><td class="crd-td">63,46 N, 90,71 W</td><td class="crd-td">1200AD - 1600AD</td><td class="crd-td">290</td><td class="crd-td">1200AD: 130; 1400AD: 230; 1600AD: 290</td></tr>
<tr><td class="crd-td"><strong>Baker Lake (Qamani'tuaq)</strong></td><td class="crd-td">Qamanituaq; Harvaqtuuq</td><td class="crd-td">Kivalliq Barrens</td><td class="crd-td">64,32 N, 96,02 W</td><td class="crd-td">1000BC - 1500AD</td><td class="crd-td">280</td><td class="crd-td">1000BC: 80; 400AD: 130; 1200AD: 220; 1500AD: 280</td></tr>
<tr><td class="crd-td"><strong>Kuujjuaq (Ungava)</strong></td><td class="crd-td">Koksoak River; Ungava Bay</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">58,11 N, 68,4 W</td><td class="crd-td">0AD - 1600AD</td><td class="crd-td">280</td><td class="crd-td">0AD: 85; 800AD: 160; 1400AD: 240; 1600AD: 280</td></tr>
<tr><td class="crd-td"><strong>Salluit</strong></td><td class="crd-td">Sugluk; Hudson Strait</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">62,2 N, 75,63 W</td><td class="crd-td">500BC - 1600AD</td><td class="crd-td">270</td><td class="crd-td">500BC: 80; 500AD: 160; 1300AD: 240; 1600AD: 270</td></tr>
<tr><td class="crd-td"><strong>Blanc-Sablon</strong></td><td class="crd-td">EiBg-7; Delta à Blanc-Sablon</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">51,54 N, 57,12 W</td><td class="crd-td">5500BC - 1500AD</td><td class="crd-td">260</td><td class="crd-td">5500BC: 35; 4000BC: 95; 2000BC: 85; 500AD: 140; 1000AD: 220; 1500AD: 260</td></tr>
<tr><td class="crd-td"><strong>Inukjuak</strong></td><td class="crd-td">Port Harrison; Inuksuak River</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">58,45 N, 78,1 W</td><td class="crd-td">500BC - 1600AD</td><td class="crd-td">260</td><td class="crd-td">500BC: 75; 500AD: 150; 1300AD: 230; 1600AD: 260</td></tr>
<tr><td class="crd-td"><strong>Fort George (Chisasibi)</strong></td><td class="crd-td">La Grande River Mouth; EiGk-1</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">53,8 N, 79 W</td><td class="crd-td">0AD - 1600AD</td><td class="crd-td">250</td><td class="crd-td">0AD: 75; 800AD: 150; 1400AD: 220; 1600AD: 250</td></tr>
<tr><td class="crd-td"><strong>Kamarvik</strong></td><td class="crd-td">Daly Bay; LeJh-1</td><td class="crd-td">Kivalliq Barrens</td><td class="crd-td">64,88 N, 87,38 W</td><td class="crd-td">1200AD - 1500AD</td><td class="crd-td">250</td><td class="crd-td">1200AD: 140; 1350AD: 250; 1500AD: 220</td></tr>
<tr><td class="crd-td"><strong>Kuujjuarapik</strong></td><td class="crd-td">Whapmagoostui; Great Whale River</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">55,27 N, 77,75 W</td><td class="crd-td">1000BC - 1600AD</td><td class="crd-td">240</td><td class="crd-td">1000BC: 65; 500AD: 130; 1300AD: 210; 1600AD: 240</td></tr>
<tr><td class="crd-td"><strong>Pic River</strong></td><td class="crd-td">Biigtigong; Marathon</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">48,62 N, 86,28 W</td><td class="crd-td">500AD - 1600AD</td><td class="crd-td">230</td><td class="crd-td">500AD: 85; 1100AD: 150; 1500AD: 210; 1600AD: 230</td></tr>
<tr><td class="crd-td"><strong>Ivujivik (Tayara)</strong></td><td class="crd-td">Tayara; Sugluk Island</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">62,38 N, 77,96 W</td><td class="crd-td">800BC - 1200AD</td><td class="crd-td">220</td><td class="crd-td">800BC: 75; 200BC: 140; 500AD: 180; 1200AD: 220</td></tr>
<tr><td class="crd-td"><strong>Lake Mistassini (Temiscamie)</strong></td><td class="crd-td">Albanel; Colline Blanche</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">50,93 N, 73,07 W</td><td class="crd-td">2000BC - 1500AD</td><td class="crd-td">220</td><td class="crd-td">2000BC: 65; 0AD: 120; 1000AD: 180; 1500AD: 220</td></tr>
<tr><td class="crd-td"><strong>Puvirnituq</strong></td><td class="crd-td">Povungnituk; IeGb-1</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">60,03 N, 77,28 W</td><td class="crd-td">600BC - 1580AD</td><td class="crd-td">210</td><td class="crd-td">600BC: 60; 500AD: 125; 1300AD: 185; 1580AD: 210</td></tr>
<tr><td class="crd-td"><strong>Tuvaaluk</strong></td><td class="crd-td">Quaqtaq; Diana Bay East</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">61,04 N, 69,62 W</td><td class="crd-td">500BC - 1500AD</td><td class="crd-td">210</td><td class="crd-td">500BC: 65; 500AD: 130; 1200AD: 180; 1500AD: 210</td></tr>
<tr><td class="crd-td"><strong>Waskaganish</strong></td><td class="crd-td">Rupert House; DhFs-1</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">51,48 N, 78,75 W</td><td class="crd-td">400BC - 1580AD</td><td class="crd-td">210</td><td class="crd-td">400BC: 65; 600AD: 125; 1300AD: 180; 1580AD: 210</td></tr>
<tr><td class="crd-td"><strong>Nunaingok 1</strong></td><td class="crd-td">JcDe-1; Killiniq McLelan Strait</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">60,33 N, 64,67 W</td><td class="crd-td">300AD - 1600AD</td><td class="crd-td">195</td><td class="crd-td">300AD: 85; 900AD: 145; 1450AD: 195; 1600AD: 175</td></tr>
<tr><td class="crd-td"><strong>Qilalugarsiuvik</strong></td><td class="crd-td">Ung.11; Pointe aux Bélougas</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">59,95 N, 69,86 W</td><td class="crd-td">300AD - 1400AD</td><td class="crd-td">195</td><td class="crd-td">300AD: 85; 900AD: 175; 1400AD: 195</td></tr>
<tr><td class="crd-td"><strong>Sanikiluaq</strong></td><td class="crd-td">Belcher Islands Flaherty; GbGk-1</td><td class="crd-td">Kivalliq Barrens</td><td class="crd-td">56,53 N, 79,23 W</td><td class="crd-td">500BC - 1580AD</td><td class="crd-td">195</td><td class="crd-td">500BC: 55; 600AD: 120; 1300AD: 175; 1580AD: 195</td></tr>
<tr><td class="crd-td"><strong>Waswanipi</strong></td><td class="crd-td">Broadback-Nottaway; EeGu-1</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">49,68 N, 76,5 W</td><td class="crd-td">500BC - 1600AD</td><td class="crd-td">195</td><td class="crd-td">500BC: 55; 500AD: 110; 1300AD: 170; 1600AD: 195</td></tr>
<tr><td class="crd-td"><strong>Diana Bay</strong></td><td class="crd-td">Tuvaaluk West; DIA.1</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">60,88 N, 70,04 W</td><td class="crd-td">0AD - 1300AD</td><td class="crd-td">190</td><td class="crd-td">0AD: 75; 700AD: 140; 1300AD: 190</td></tr>
<tr><td class="crd-td"><strong>Lake Abitibi</strong></td><td class="crd-td">Abitibi Narrows; DdGt-1</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">48,67 N, 79,75 W</td><td class="crd-td">2500BC - 1550AD</td><td class="crd-td">190</td><td class="crd-td">2500BC: 60; 200BC: 115; 900AD: 175; 1550AD: 190</td></tr>
<tr><td class="crd-td"><strong>Nemiscau</strong></td><td class="crd-td">Lac Nemiscau; Rupert River</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">51,32 N, 76,85 W</td><td class="crd-td">1000BC - 1600AD</td><td class="crd-td">190</td><td class="crd-td">1000BC: 55; 500AD: 110; 1300AD: 160; 1600AD: 190</td></tr>
<tr><td class="crd-td"><strong>South Indian Lake (Kame Hills)</strong></td><td class="crd-td">Opachuanau; Churchill River Manitoba</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">56,9 N, 98,85 W</td><td class="crd-td">1000BC - 1600AD</td><td class="crd-td">190</td><td class="crd-td">1000BC: 55; 500AD: 110; 1300AD: 160; 1600AD: 190</td></tr>
<tr><td class="crd-td"><strong>Oxford House</strong></td><td class="crd-td">Bunibonibee Cree; HcLl-1</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">54,95 N, 95,27 W</td><td class="crd-td">1000BC - 1580AD</td><td class="crd-td">185</td><td class="crd-td">1000BC: 50; 500AD: 110; 1250AD: 165; 1580AD: 185</td></tr>
<tr><td class="crd-td"><strong>Umiujaq</strong></td><td class="crd-td">Lac Guillaume-Delisle Shore; HaGf-1</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">56,55 N, 76,48 W</td><td class="crd-td">1500BC - 1550AD</td><td class="crd-td">185</td><td class="crd-td">1500BC: 55; 200AD: 115; 1100AD: 165; 1550AD: 185</td></tr>
<tr><td class="crd-td"><strong>Kangirsujuaq</strong></td><td class="crd-td">Wakeham Bay; JhEv-1</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">61,6 N, 71,97 W</td><td class="crd-td">500BC - 1550AD</td><td class="crd-td">180</td><td class="crd-td">500BC: 55; 500AD: 115; 1200AD: 165; 1550AD: 180</td></tr>
<tr><td class="crd-td"><strong>Saint-Augustin (Québec)</strong></td><td class="crd-td">EjEe-1; Basse-Côte-Nord Maritime Archaic</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">51,29 N, 58,62 W</td><td class="crd-td">5000BC - 1400AD</td><td class="crd-td">180</td><td class="crd-td">5000BC: 75; 2000BC: 120; 1400AD: 180</td></tr>
<tr><td class="crd-td"><strong>Attawapiskat</strong></td><td class="crd-td">Attawapiskat River Mouth; EgHh-1</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">52,93 N, 82,43 W</td><td class="crd-td">500BC - 1580AD</td><td class="crd-td">175</td><td class="crd-td">500BC: 50; 600AD: 105; 1300AD: 155; 1580AD: 175</td></tr>
<tr><td class="crd-td"><strong>Ballynacree</strong></td><td class="crd-td">DkKp-8; Winnipeg River Kenora</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">49,78 N, 94,53 W</td><td class="crd-td">1200AD - 1600AD</td><td class="crd-td">175</td><td class="crd-td">1200AD: 115; 1450AD: 175; 1600AD: 165</td></tr>
<tr><td class="crd-td"><strong>Eastmain</strong></td><td class="crd-td">Eastmain River Mouth; EaFs-1</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">52,25 N, 78,5 W</td><td class="crd-td">300BC - 1580AD</td><td class="crd-td">175</td><td class="crd-td">300BC: 55; 600AD: 110; 1300AD: 155; 1580AD: 175</td></tr>
<tr><td class="crd-td"><strong>Lac Mistassini Baie du Poste</strong></td><td class="crd-td">Waconichi-Mistassini; DcFa-1</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">50,42 N, 73,88 W</td><td class="crd-td">1500BC - 1580AD</td><td class="crd-td">175</td><td class="crd-td">1500BC: 50; 400AD: 105; 1200AD: 155; 1580AD: 175</td></tr>
<tr><td class="crd-td"><strong>Lac Seul</strong></td><td class="crd-td">English River Lac Seul; DjKa-1</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">50,4 N, 92,48 W</td><td class="crd-td">1500BC - 1550AD</td><td class="crd-td">175</td><td class="crd-td">1500BC: 55; 300AD: 115; 1100AD: 165; 1550AD: 175</td></tr>
<tr><td class="crd-td"><strong>Rivière Arnaud</strong></td><td class="crd-td">Payne River Mouth; Ung.11-Arnaud</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">59,98 N, 69,76 W</td><td class="crd-td">250AD - 1400AD</td><td class="crd-td">175</td><td class="crd-td">250AD: 75; 850AD: 145; 1400AD: 175</td></tr>
<tr><td class="crd-td"><strong>Fort Severn</strong></td><td class="crd-td">Severn River Mouth; GcJd-1</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">55,99 N, 87,64 W</td><td class="crd-td">800BC - 1580AD</td><td class="crd-td">170</td><td class="crd-td">800BC: 50; 500AD: 105; 1300AD: 150; 1580AD: 170</td></tr>
<tr><td class="crd-td"><strong>Heron Bay</strong></td><td class="crd-td">Pic-Heron Bay Laurel; DdIn-1</td><td class="crd-td">Hudson-James Cree</td><td class="crd-td">48,64 N, 86,33 W</td><td class="crd-td">150AD - 700AD</td><td class="crd-td">165</td><td class="crd-td">150AD: 95; 400AD: 165; 700AD: 145</td></tr>
<tr><td class="crd-td"><strong>Lac de la Hutte Sauvage</strong></td><td class="crd-td">Mushuau Nipi; HdDe-1</td><td class="crd-td">Eastmain-Nunavik</td><td class="crd-td">56,17 N, 64,73 W</td><td class="crd-td">3000BC - 1550AD</td><td class="crd-td">165</td><td class="crd-td">3000BC: 45; 500BC: 85; 900AD: 135; 1550AD: 165</td></tr>
<tr><td class="crd-td"><strong>Meliadine</strong></td><td class="crd-td">Rankin Inland Thule-Caribou; KfJm-1</td><td class="crd-td">Kivalliq Barrens</td><td class="crd-td">62,99 N, 92,16 W</td><td class="crd-td">500BC - 1550AD</td><td class="crd-td">165</td><td class="crd-td">500BC: 45; 600AD: 95; 1350AD: 165; 1550AD: 150</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Top 45 of 89 pre-contact settlements and aggregation hubs ordered by peak population in the Hudson Bay basin (10000BC to 1600AD).</figcaption>
</figure>

## Excluded Candidates and Source Ledger Audit

Table \ref{tab:excluded} reports the excluded candidate records from `hudson_bay_source_ledger.json5`.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Entry</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Seahorse Gully</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Consolidated 0 km matching-name/HYDE-centroid twin into canonical Churchill-Seahorse Gully-Canada.</td></tr>
<tr><td class="crd-td"><strong>Grand Mound</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Grand Mound' (Stoltman, James B. 1973. The Laurel Culture in Minnesota. Minnesota Prehistoric Archaeology Series No. 8, Minnesota Historical Society.).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded candidate records in the Hudson Bay source ledger (2 of 2 excluded entries shown).</figcaption>
</figure>

## Sub-Regional Settlement Summaries

Within the Hudson and James Bay Lowlands and Northern Ontario Shield (`34` entries), Rainy River Laurel mound hubs at Grand Mound (`450` peak) and Kay-Nah-Chi-Wah-Nung (`440`) pair with coastal river mouths at Churchill-Seahorse Gully (`320`), Moose Factory-Moosonee (`320`) and Nelson River-York Factory (`310`), alongside interior lake and copper-corridor centres at Pic River (`230`), Lake Abitibi (`190`), Wapekeka (`135`) and Cummins Site (`95`) [@arzigian2008; @martin1999; @pilon1987; @nash1969; @buchner1980].

In Eastmain, Nunavik and Ungava (`44` entries), northern sealing stations at Ivujivik-Nuvuk (`350`), Kuujjuaq (Ungava) (`280`), Salluit (`270`), Inukjuak (`260`) and Ivujivik (Tayara) (`220`) balance Gulf and Strait of Belle Isle Archaic sites at Blanc-Sablon (`260`) and Saint-Augustin (Québec) (`180`) as well as James Bay Cree hubs at Fort George (Chisasibi) (`250`), Kuujjuarapik (`240`) and Lake Mistassini (Temiscamie) (`220`) [@plumet1994; @tuck1976].

On the Kivalliq barrens (`11` entries), coastal Thule and interior caribou-crossing settlements cluster at Silumiut (`340`), Arvia'juaq (`310`), Chesterfield Inlet (Igluligaarjuk) (`290`), Baker Lake (Qamani'tuaq) (`280`), Kamarvik (`250`), Ennadai Lake (`125`) and Migod (`110`) [@clark1977].

# Limitations

Because Cree and Innu families dispersed across winter bush hunting territories in small extended-family bands, persistent archaeological villages are concentrated along estuarine river mouths, caribou crossings and southern Shield lake outlets, leaving scattered upland campsites represented through the continuous kriging surface [@wright1995; @pilon1987]. Rapid glacio-isostatic uplift around James Bay and western Hudson Bay has also elevated early shoreline stations tens of kilometres inland behind modern coastal marshes.

# Sources

<div id="refs"></div>
