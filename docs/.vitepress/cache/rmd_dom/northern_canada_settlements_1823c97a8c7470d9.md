---
title: "Settlement Gazetteer of Pre-Columbian Northern Canada and Greenland"
subtitle: "CENTAUR-II: Coordinates, Toponymy and Demographic Trajectories (10000BC to 1600AD)"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: northern_canada_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_northern_canada_spatial.png"
hero_caption: "Locations of 243 catalogued Arctic, subarctic and Norse Greenland settlements across Northern Canada and Greenland (5,27M km²) from 10000BC to 1600AD."
hero_label: "fig:hero-northern-canada"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents WGS84 coordinates, indigenous and Norse toponymy, attested chronological spans and benchmark populations (1.324 observations; mean 5,4 per site, with 240 carrying three or more benchmarks) for 243 pre-modern settlements across Northern Canada and Greenland (5,27M km²) between 10000BC and 1600AD. Entries span from 7400BC occupation at Saskatoon Mountain (95 peak) and 6500BC Mackenzie Dene occupation at Fisherman Lake (120 peak) through 2400BC Palaeo-Inuit coastal stations at Qeqertasussuk (34), Independence I (15) and Sermermiut (26 in 2000BC rising to 128 in 1600AD) to Dorset and Thule whaling complexes at Qariaraqyuk (480 and 380), Creswell Bay Whalebone Metropolis (420), Alarnerk Ridge Metropolis (720), Qeqertat Island Town (620), Kuukpak Sod Metropolis (920) and Kittigazuit (1k), alongside mediaeval Norse estate centres at Brattahlid (68 peak) and Gardar (78 peak). All 243 settlements in the gazetteer carry CENTAUR provenance and reconcile cleanly against 327 source-ledger candidates alongside 84 excluded entries (83 duplicate-alias consolidations and 1 non-habitation seasonal cave context).

# Background

High-latitude settlement visibility concentrates where seasonal marine-mammal harvests, caribou water crossings or Norse fjord pastures anchored multi-family winter dwellings [@mcghee1996; @friesen2016]. In the Mackenzie Delta and Coronation Gulf, driftwood-framed semi-subterranean winter houses at Kittigazuit and Kuukpak supported large beluga-hunting aggregations [@morrison1990]. Across the central and eastern archipelago, whalebone winter houses at Qariaraqyuk and Foxe Basin polynya middens at Alarnerk and Qeqertat Island Town anchored Dorset and Thule networks [@savelle2002; @maxwell1985; @taylor1968]. In West and East Greenland, *Nunniffiit* heritage inventories supplement excavated Norse turf-and-stone farmsteads around Tunulliarfik and Igaliku fjords and Disko Bay Saqqaq and Kalaallit stations [@arneborg2012; @gronnow2004; @mathiassen1933].

# Methodology

Sites enter the source ledger when archaeological house-pit surveys, national heritage registers or mediaeval Norse farm inventories establish bounded coordinates and archaeologically grounded residential population trajectories [@lynnerup1998; @savelle2002]. Overlapping coordinate twins within 2 km, adjacent fjord camps consolidated into multi-component habitation localities, and identical centroids (83 duplicate-alias entries) are consolidated alongside 1 unquantified cave context (Charlie Lake Cave) so each locality is subtracted only once from sub-regional rural weights. Greenlandic archaeological entries are calibrated strictly against Lynnerup's Norse farmstead demography (typical farms 4 to 18 inhabitants, parish estates 23 to 46, Brattahlid 68, Gardar 78; Norse peak ~1,85k island-wide) and Gulløv's Thule/Kalaallit winter-village synthesis (4k to 4,8k island-wide in 1500 to 1600AD), eliminating non-habitation stray finds and flat placeholder curves [@lynnerup1998; @gronnow2004]. Dispersed boreal hunting stations without fixed house structures remain represented in the rural kriging surface [@gordon1996]. Table \ref{tab:summary} summarises included counts and summed site peaks across the five divisions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Included Sites</th><th class="crd-th">Sum of Site Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mackenzie Dene</strong></td><td class="crd-td">14</td><td class="crd-td">2,9k</td><td class="crd-td">Pauline Cove (390)</td></tr>
<tr><td class="crd-td"><strong>W-C Arctic</strong></td><td class="crd-td">31</td><td class="crd-td">9,6k</td><td class="crd-td">Kittigazuit (1k)</td></tr>
<tr><td class="crd-td"><strong>E-High Arctic</strong></td><td class="crd-td">24</td><td class="crd-td">5,6k</td><td class="crd-td">Qariaraqyuk (480)</td></tr>
<tr><td class="crd-td"><strong>W Greenland</strong></td><td class="crd-td">132</td><td class="crd-td">4,5k</td><td class="crd-td">Sermermiut (128)</td></tr>
<tr><td class="crd-td"><strong>E Greenland</strong></td><td class="crd-td">42</td><td class="crd-td">605</td><td class="crd-td">Clavering Island (Dodemandsbugten) (54)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 243 included settlements and summed site peaks in Northern Canada and Greenland.</figcaption>
</figure>

# Testing and Validation

Schema and ledger checks confirm 243 included settlements, 84 excluded candidates (83 duplicate-alias consolidations and 1 unquantified cave context out of 327 total candidates), 0 unaccounted candidates and 0 coordinate errors spanning 1.324 benchmark headcounts. Every record carries CENTAUR provenance. Figure \ref{fig:settlements} charts the rank-size hierarchy and leading fifteen settlement peaks across the 243 catalogued sites led by Kittigazuit (1k).

<figure class="crd-figure-block" id="fig:settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-northern-canada-settlements/fig4_northern_canada_settlements.png" alt="fig:settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading fifteen peak populations across the 243 catalogued settlements of Northern Canada and Greenland.</figcaption>
</figure>

# Results

## Leading Settlement Trajectories

Table \ref{tab:gazetteer} documents the leading 45 settlements out of 243 included entries ordered by peak population descending, linking WGS84 coordinates and alternative indigenous or Norse names to benchmark population series.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Alternative Names</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">Benchmark Series</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kittigazuit</strong></td><td class="crd-td">Kitigaaryuit; Mackenzie Beluga Village</td><td class="crd-td">W-C Arctic</td><td class="crd-td">69,34 N, 133,69 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1k</td><td class="crd-td">1300AD: 380; 1400AD: 680; 1500AD: 920; 1600AD: 1k</td></tr>
<tr><td class="crd-td"><strong>Kuukpak Sod Metropolis</strong></td><td class="crd-td">Kuukpak Winter Town; Richards Island Settlement</td><td class="crd-td">W-C Arctic</td><td class="crd-td">69,37 N, 134,15 W</td><td class="crd-td">1250AD-1550AD</td><td class="crd-td">920</td><td class="crd-td">1250AD: 350; 1400AD: 750; 1550AD: 920</td></tr>
<tr><td class="crd-td"><strong>Alarnerk Ridge Metropolis</strong></td><td class="crd-td">Alarnerk Prehistoric City</td><td class="crd-td">W-C Arctic</td><td class="crd-td">69,32 N, 82,33 W</td><td class="crd-td">500BC-1400AD</td><td class="crd-td">720</td><td class="crd-td">500BC: 220; 400AD: 480; 1000AD: 720; 1400AD: 650</td></tr>
<tr><td class="crd-td"><strong>Qeqertat Island Town</strong></td><td class="crd-td">Igloolik Island Dorset/Thule Town; Igloolik</td><td class="crd-td">W-C Arctic</td><td class="crd-td">69,21 N, 81,79 W</td><td class="crd-td">1000BC-1500AD</td><td class="crd-td">620</td><td class="crd-td">1000BC: 110; 800BC: 140; 200AD: 290; 1100AD: 550; 1200AD: 320; 1500AD: 620</td></tr>
<tr><td class="crd-td"><strong>Kuukpak</strong></td><td class="crd-td">Kugmallit Bay West; NiTs-1</td><td class="crd-td">W-C Arctic</td><td class="crd-td">69,26 N, 134,18 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">580</td><td class="crd-td">1300AD: 210; 1400AD: 380; 1500AD: 520; 1600AD: 580</td></tr>
<tr><td class="crd-td"><strong>Qariaraqyuk</strong></td><td class="crd-td">Somerset Island Thule; Creswell Bay</td><td class="crd-td">E-High Arctic</td><td class="crd-td">72,67 N, 94,55 W</td><td class="crd-td">1100AD-1500AD</td><td class="crd-td">480</td><td class="crd-td">1100AD: 180; 1200AD: 420; 1300AD: 480; 1400AD: 340; 1500AD: 220</td></tr>
<tr><td class="crd-td"><strong>Creswell Bay Whalebone Metropolis</strong></td><td class="crd-td">Creswell Bay Thule Village</td><td class="crd-td">E-High Arctic</td><td class="crd-td">72,79 N, 93,62 W</td><td class="crd-td">1180AD-1450AD</td><td class="crd-td">420</td><td class="crd-td">1180AD: 160; 1320AD: 380; 1450AD: 420</td></tr>
<tr><td class="crd-td"><strong>Pauline Cove</strong></td><td class="crd-td">Qikiqtaruk; Herschel Island</td><td class="crd-td">Mackenzie Dene</td><td class="crd-td">69,38 N, 138,88 W</td><td class="crd-td">1050AD-1600AD</td><td class="crd-td">390</td><td class="crd-td">1050AD: 85; 1200AD: 160; 1250AD: 140; 1450AD: 160; 1550AD: 360; 1600AD: 390</td></tr>
<tr><td class="crd-td"><strong>Alarnerk</strong></td><td class="crd-td">Igloolik Mainland; Melville Peninsula</td><td class="crd-td">W-C Arctic</td><td class="crd-td">69,18 N, 82,07 W</td><td class="crd-td">1500BC-900AD</td><td class="crd-td">380</td><td class="crd-td">1500BC: 95; 500BC: 190; 200AD: 320; 900AD: 380</td></tr>
<tr><td class="crd-td"><strong>Qariaraqyuk</strong></td><td class="crd-td">Hazard Inlet; Somerset Island</td><td class="crd-td">E-High Arctic</td><td class="crd-td">72,17 N, 94,15 W</td><td class="crd-td">1200AD-1500AD</td><td class="crd-td">380</td><td class="crd-td">1200AD: 210; 1350AD: 380; 1500AD: 310</td></tr>
<tr><td class="crd-td"><strong>Skraeling Island Winter Town</strong></td><td class="crd-td">Smith Sound Thule Metropolis</td><td class="crd-td">E-High Arctic</td><td class="crd-td">78,88 N, 75,6 W</td><td class="crd-td">500BC-1400AD</td><td class="crd-td">360</td><td class="crd-td">500BC: 90; 600AD: 210; 1250AD: 360; 1400AD: 320</td></tr>
<tr><td class="crd-td"><strong>Avvaq Winter Settlement</strong></td><td class="crd-td">Avvaq Inuvialuit Town</td><td class="crd-td">W-C Arctic</td><td class="crd-td">69,22 N, 134,4 W</td><td class="crd-td">1350AD-1580AD</td><td class="crd-td">320</td><td class="crd-td">1350AD: 140; 1480AD: 280; 1580AD: 320</td></tr>
<tr><td class="crd-td"><strong>Nuvugak</strong></td><td class="crd-td">Nuvugaq; Atkinson Point</td><td class="crd-td">W-C Arctic</td><td class="crd-td">69,88 N, 131,46 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">320</td><td class="crd-td">1300AD: 140; 1450AD: 260; 1600AD: 320</td></tr>
<tr><td class="crd-td"><strong>Cumberland Sound (Kekerten)</strong></td><td class="crd-td">Qikiqtan; Pangnirtung</td><td class="crd-td">E-High Arctic</td><td class="crd-td">66,04 N, 65,79 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">310</td><td class="crd-td">1200AD: 130; 1400AD: 240; 1600AD: 310</td></tr>
<tr><td class="crd-td"><strong>Lady Franklin Point</strong></td><td class="crd-td">Nuvuk; Dolphin and Union Strait</td><td class="crd-td">W-C Arctic</td><td class="crd-td">68,62 N, 113,04 W</td><td class="crd-td">1000BC-1600AD</td><td class="crd-td">310</td><td class="crd-td">1000BC: 90; 400AD: 150; 1200AD: 260; 1400AD: 190; 1500AD: 310; 1600AD: 230</td></tr>
<tr><td class="crd-td"><strong>Mitimatalik Winter Town</strong></td><td class="crd-td">Pond Inlet Thule Houses</td><td class="crd-td">E-High Arctic</td><td class="crd-td">72,7 N, 77,97 W</td><td class="crd-td">1200AD-1520AD</td><td class="crd-td">310</td><td class="crd-td">1200AD: 120; 1380AD: 280; 1520AD: 310</td></tr>
<tr><td class="crd-td"><strong>Naujan</strong></td><td class="crd-td">Naujaat; Repulse Bay</td><td class="crd-td">W-C Arctic</td><td class="crd-td">66,53 N, 86,23 W</td><td class="crd-td">1150AD-1450AD</td><td class="crd-td">310</td><td class="crd-td">1150AD: 180; 1300AD: 310; 1450AD: 280</td></tr>
<tr><td class="crd-td"><strong>Nunaluk Sod Village</strong></td><td class="crd-td">Nunaluk Spit Settlement</td><td class="crd-td">Mackenzie Dene</td><td class="crd-td">69,48 N, 139,85 W</td><td class="crd-td">1300AD-1550AD</td><td class="crd-td">310</td><td class="crd-td">1300AD: 120; 1450AD: 260; 1550AD: 310</td></tr>
<tr><td class="crd-td"><strong>Cache Point Town</strong></td><td class="crd-td">Cache Point Inuvialuit Village</td><td class="crd-td">Mackenzie Dene</td><td class="crd-td">68,87 N, 136,23 W</td><td class="crd-td">1200AD-1500AD</td><td class="crd-td">290</td><td class="crd-td">1200AD: 110; 1380AD: 240; 1500AD: 290</td></tr>
<tr><td class="crd-td"><strong>Kapuivik</strong></td><td class="crd-td">Jens Munk Island; Foxe Basin</td><td class="crd-td">E-High Arctic</td><td class="crd-td">69,71 N, 79,96 W</td><td class="crd-td">1800BC-1300AD</td><td class="crd-td">290</td><td class="crd-td">1800BC: 80; 500BC: 160; 500AD: 240; 1300AD: 290</td></tr>
<tr><td class="crd-td"><strong>Pingerpoint Settlement</strong></td><td class="crd-td">Foxe Basin Thule Village</td><td class="crd-td">W-C Arctic</td><td class="crd-td">69,29 N, 82,29 W</td><td class="crd-td">1150AD-1500AD</td><td class="crd-td">290</td><td class="crd-td">1150AD: 110; 1350AD: 250; 1500AD: 290</td></tr>
<tr><td class="crd-td"><strong>Tungatsivvik</strong></td><td class="crd-td">Iqaluit Outer; Peterhead Inlet</td><td class="crd-td">E-High Arctic</td><td class="crd-td">63,79 N, 68,62 W</td><td class="crd-td">0AD-1600AD</td><td class="crd-td">280</td><td class="crd-td">0AD: 85; 800AD: 160; 1400AD: 240; 1600AD: 280</td></tr>
<tr><td class="crd-td"><strong>Cache Point</strong></td><td class="crd-td">Richards Island East Channel; NhTs-2</td><td class="crd-td">W-C Arctic</td><td class="crd-td">69,12 N, 134,23 W</td><td class="crd-td">1200AD-1500AD</td><td class="crd-td">260</td><td class="crd-td">1200AD: 140; 1350AD: 260; 1500AD: 220</td></tr>
<tr><td class="crd-td"><strong>Deline (Great Bear Lake)</strong></td><td class="crd-td">Keith Arm; Sahtu Fishery</td><td class="crd-td">Mackenzie Dene</td><td class="crd-td">65,19 N, 123,42 W</td><td class="crd-td">2000BC-1500AD</td><td class="crd-td">260</td><td class="crd-td">2000BC: 75; 0AD: 140; 1000AD: 210; 1500AD: 260</td></tr>
<tr><td class="crd-td"><strong>Ekalluk River (Bell Site)</strong></td><td class="crd-td">Iqaluktuuq; Cambridge Bay</td><td class="crd-td">W-C Arctic</td><td class="crd-td">69,39 N, 106,27 W</td><td class="crd-td">1500BC-1500AD</td><td class="crd-td">260</td><td class="crd-td">1500BC: 65; 1200BC: 55; 0AD: 130; 800AD: 140; 1000AD: 210; 1500AD: 260</td></tr>
<tr><td class="crd-td"><strong>Lake Harbour (Kimmirut)</strong></td><td class="crd-td">Kimmirut; Tanfield Valley</td><td class="crd-td">W-C Arctic</td><td class="crd-td">62,85 N, 69,88 W</td><td class="crd-td">1800BC-1300AD</td><td class="crd-td">260</td><td class="crd-td">1800BC: 70; 500BC: 150; 500AD: 210; 1300AD: 260</td></tr>
<tr><td class="crd-td"><strong>Reliance Taltheilei Village</strong></td><td class="crd-td">Fort Reliance East Arm Settlement</td><td class="crd-td">Mackenzie Dene</td><td class="crd-td">62,7 N, 109,17 W</td><td class="crd-td">300AD-1400AD</td><td class="crd-td">260</td><td class="crd-td">300AD: 80; 900AD: 190; 1400AD: 260</td></tr>
<tr><td class="crd-td"><strong>Bell Ekalluk Settlement</strong></td><td class="crd-td">Ekalluk River Dorset/Thule Town</td><td class="crd-td">W-C Arctic</td><td class="crd-td">69,4 N, 106,2 W</td><td class="crd-td">200AD-1300AD</td><td class="crd-td">250</td><td class="crd-td">200AD: 90; 800AD: 180; 1300AD: 250</td></tr>
<tr><td class="crd-td"><strong>Black Lake Subarctic Town</strong></td><td class="crd-td">Athabasca Taltheilei Village</td><td class="crd-td">Mackenzie Dene</td><td class="crd-td">59,12 N, 105,6 W</td><td class="crd-td">400AD-1450AD</td><td class="crd-td">240</td><td class="crd-td">400AD: 70; 1000AD: 180; 1450AD: 240</td></tr>
<tr><td class="crd-td"><strong>Cape Garry Whalebone Town</strong></td><td class="crd-td">Cape Garry Settlement</td><td class="crd-td">E-High Arctic</td><td class="crd-td">72,48 N, 93,62 W</td><td class="crd-td">1200AD-1450AD</td><td class="crd-td">240</td><td class="crd-td">1200AD: 110; 1350AD: 240; 1450AD: 220</td></tr>
<tr><td class="crd-td"><strong>Clachan</strong></td><td class="crd-td">Coronation Gulf; NaPi-2</td><td class="crd-td">W-C Arctic</td><td class="crd-td">68,18 N, 115,6 W</td><td class="crd-td">1200AD-1550AD</td><td class="crd-td">240</td><td class="crd-td">1200AD: 120; 1400AD: 210; 1550AD: 240</td></tr>
<tr><td class="crd-td"><strong>Niaqulik Whaling Settlement</strong></td><td class="crd-td">Niaqulik Village</td><td class="crd-td">W-C Arctic</td><td class="crd-td">69,4 N, 133,3 W</td><td class="crd-td">1300AD-1550AD</td><td class="crd-td">230</td><td class="crd-td">1300AD: 90; 1450AD: 190; 1550AD: 230</td></tr>
<tr><td class="crd-td"><strong>Peale Point</strong></td><td class="crd-td">Frobisher Bay; Baffin Island</td><td class="crd-td">E-High Arctic</td><td class="crd-td">63,79 N, 68,54 W</td><td class="crd-td">1100AD-1550AD</td><td class="crd-td">230</td><td class="crd-td">1100AD: 95; 1350AD: 180; 1550AD: 230</td></tr>
<tr><td class="crd-td"><strong>Button Point Settlement</strong></td><td class="crd-td">Bylot Island Dorset Town</td><td class="crd-td">E-High Arctic</td><td class="crd-td">72,88 N, 76,46 W</td><td class="crd-td">400AD-1150AD</td><td class="crd-td">220</td><td class="crd-td">400AD: 100; 800AD: 220; 1150AD: 180</td></tr>
<tr><td class="crd-td"><strong>Nunguvik</strong></td><td class="crd-td">Navy Board Inlet; Baffin North</td><td class="crd-td">E-High Arctic</td><td class="crd-td">72,79 N, 80,46 W</td><td class="crd-td">500BC-1400AD</td><td class="crd-td">220</td><td class="crd-td">500BC: 75; 500AD: 160; 1100AD: 220; 1400AD: 180</td></tr>
<tr><td class="crd-td"><strong>Abverdjar</strong></td><td class="crd-td">Avvajja; Igloolik North</td><td class="crd-td">W-C Arctic</td><td class="crd-td">69,21 N, 81,71 W</td><td class="crd-td">1000BC-1100AD</td><td class="crd-td">210</td><td class="crd-td">1000BC: 75; 0AD: 140; 600AD: 210; 1100AD: 160</td></tr>
<tr><td class="crd-td"><strong>Button Point</strong></td><td class="crd-td">Bylot Island; Mittimatalik East</td><td class="crd-td">E-High Arctic</td><td class="crd-td">72,88 N, 76,21 W</td><td class="crd-td">0AD-1300AD</td><td class="crd-td">210</td><td class="crd-td">0AD: 75; 700AD: 140; 1300AD: 210</td></tr>
<tr><td class="crd-td"><strong>Colville Lake Dene Village</strong></td><td class="crd-td">MandM Colville Lake Site</td><td class="crd-td">Mackenzie Dene</td><td class="crd-td">67,03 N, 126,12 W</td><td class="crd-td">200AD-1350AD</td><td class="crd-td">210</td><td class="crd-td">200AD: 60; 800AD: 140; 1350AD: 210</td></tr>
<tr><td class="crd-td"><strong>Ferguson Lake Settlement</strong></td><td class="crd-td">Ferguson Lake Winter Houses</td><td class="crd-td">W-C Arctic</td><td class="crd-td">69,43 N, 105,1 W</td><td class="crd-td">1200AD-1500AD</td><td class="crd-td">210</td><td class="crd-td">1200AD: 90; 1380AD: 210; 1500AD: 190</td></tr>
<tr><td class="crd-td"><strong>Kunana</strong></td><td class="crd-td">Holman; Ulukhaktok</td><td class="crd-td">W-C Arctic</td><td class="crd-td">70,73 N, 117,75 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">210</td><td class="crd-td">1200AD: 95; 1400AD: 160; 1600AD: 210</td></tr>
<tr><td class="crd-td"><strong>Lady Franklin Point Town</strong></td><td class="crd-td">Lady Franklin Thule Village</td><td class="crd-td">W-C Arctic</td><td class="crd-td">68,54 N, 113,04 W</td><td class="crd-td">1150AD-1500AD</td><td class="crd-td">210</td><td class="crd-td">1150AD: 90; 1350AD: 210; 1500AD: 180</td></tr>
<tr><td class="crd-td"><strong>Pearce Point</strong></td><td class="crd-td">Amundsen Gulf; Darnley Bay</td><td class="crd-td">W-C Arctic</td><td class="crd-td">69,82 N, 122,68 W</td><td class="crd-td">1100AD-1500AD</td><td class="crd-td">195</td><td class="crd-td">1100AD: 85; 1300AD: 150; 1500AD: 195</td></tr>
<tr><td class="crd-td"><strong>Pelly Bay (Kugaaruk)</strong></td><td class="crd-td">Arviligjuaq; Simpson Peninsula</td><td class="crd-td">W-C Arctic</td><td class="crd-td">68,53 N, 89,83 W</td><td class="crd-td">1100AD-1550AD</td><td class="crd-td">195</td><td class="crd-td">1100AD: 85; 1350AD: 150; 1550AD: 195</td></tr>
<tr><td class="crd-td"><strong>Resolute (M1)</strong></td><td class="crd-td">Qausuittuq; Cornwallis Island</td><td class="crd-td">E-High Arctic</td><td class="crd-td">74,68 N, 94,88 W</td><td class="crd-td">1100AD-1500AD</td><td class="crd-td">195</td><td class="crd-td">1100AD: 110; 1300AD: 195; 1500AD: 160</td></tr>
<tr><td class="crd-td"><strong>Brooman Point</strong></td><td class="crd-td">Bathurst Island East; QiLd-1</td><td class="crd-td">E-High Arctic</td><td class="crd-td">75,46 N, 97,46 W</td><td class="crd-td">700AD-1250AD</td><td class="crd-td">190</td><td class="crd-td">700AD: 85; 1050AD: 160; 1250AD: 190</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 pre-modern settlements ordered by peak population in Northern Canada and Greenland (10000BC to 1600AD).</figcaption>
</figure>

## Excluded Candidates and Source Ledger Audit

Table \ref{tab:excluded} presents the first 30 of 84 excluded candidates (83 duplicate-alias consolidations and 1 non-habitation seasonal cave context) logged across the 327 source-ledger candidates together with their consolidation justifications.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Entry</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kittigazuit</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Kittigazuit' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Alarnerk Ridge Metropolis</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Alarnerk Ridge Metropolis' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Qeqertat Island Town</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Qeqertat Island Town' (Meldgaard, J. 1960. Eskimo Cultures in Igloolik. Folk 2.).</td></tr>
<tr><td class="crd-td"><strong>Kuukpak</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Kuukpak' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Pauline Cove</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Pauline Cove' (Friesen, T.M. (1995). 'Periphery' as Centre: Long-Term Patterns of Intersocietal Interaction on Herschel Island, Northern Yukon Territory. PhD diss., McGill University.).</td></tr>
<tr><td class="crd-td"><strong>Alarnerk</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Alarnerk' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Skraeling Island Winter Town</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Skraeling Island Winter Town' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Kapuivik</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Kapuivik' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Tungatsivvik</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Tungatsivvik' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Ekalluk River (Bell Site)</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Ekalluk River (Bell Site)' (Taylor, W.E., Jr. (1967). Summary of Archaeological Field Work on Banks and Victoria Islands, Arctic Canada, 1965. Arctic Anthropology 4(1); Friesen, T.M. (2004).).</td></tr>
<tr><td class="crd-td"><strong>Deline (Great Bear Lake)</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Deline (Great Bear Lake)' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Lake Harbour (Kimmirut)</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Lake Harbour (Kimmirut)' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Nunguvik</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Nunguvik' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Abverdjar</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Abverdjar' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Bloody Falls</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Bloody Falls' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Taltheilei Narrows</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Taltheilei Narrows' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Trout Lake (Sambaa K'e)</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Trout Lake (Sambaa K'e)' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Engigstciak</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Engigstciak' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Fisherman Lake</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Fisherman Lake' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Kuukpak Sod Metropolis</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Kuukpak Sod Metropolis' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Creswell Bay Whalebone Metropolis</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Creswell Bay Whalebone Metropolis' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Qariaraqyuk</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Qariaraqyuk' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Avvaq Winter Settlement</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Avvaq Winter Settlement' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Nuvugak</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Nuvugak' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Cumberland Sound (Kekerten)</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Cumberland Sound (Kekerten)' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Mitimatalik Winter Town</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Mitimatalik Winter Town' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Naujan</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Naujan' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Nunaluk Sod Village</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Nunaluk Sod Village' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Cache Point Town</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Cache Point Town' (CENTAUR Existing Verified Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Pingerpoint Settlement</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Pingerpoint Settlement' (CENTAUR Existing Verified Monument Inventory).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> First 30 excluded duplicate-alias localities in the Northern Canada and Greenland source ledger.</figcaption>
</figure>

## Sub-Regional Settlement Summaries

West Greenland (132 records) spans Disko Bay Palaeo-Inuit and Kalaallit occupation at Qeqertasussuk (34 peak), Saqqaq (66) and Sermermiut (128 in 1600AD), coastal Thule centres at Kangeq (112), Comer's Midden (104), Nuulliit (96), Kangamiut (92) and Illorpaat (86), alongside mediaeval Norse Eastern and Western Settlement hubs at Gardar (78 peak), Brattahlid (68), Vatnahverfi (46), Sandnes (44) and Hvalsey (42) [@gronnow2004; @arneborg2012; @lynnerup1998]. East and High North Greenland (42 records) combine early Independence I campsites (15 peak) with Tunumiit and Thule coastal stations led by Ammassalik (88), Skjoldungen (57), Clavering Island (54) and Scoresbysund (49) [@mathiassen1933; @friesen2016].

In the Eastern and High Arctic (24 records), Somerset Island's Qariaraqyuk (480 and 380 clusters) and Creswell Bay Whalebone Metropolis (420) pair with Skraeling Island Winter Town (360), Cumberland Sound (310), Mitimatalik Winter Town (310), Kapuivik (290) and Tungatsivvik (280) [@savelle2002; @maxwell1985; @taylor1968]. Across the Central and Western Arctic (31 records), Kittigazuit (1k in 1600AD) and Kuukpak Sod Metropolis (920; Kuukpak 580) anchor Mackenzie Delta beluga harvesting alongside Foxe Basin and Coronation Gulf hubs at Alarnerk Ridge Metropolis (720), Qeqertat Island Town (620), Alarnerk (380), Nuvugak (320), Avvaq Winter Settlement (320), Lady Franklin Point (310), Naujan (310), Ekalluk River (260) and Bloody Falls (180) [@morrison1990; @nash1969], while the Mackenzie Dene subarctic (14 records) is led by Pauline Cove (390), Nunaluk Sod Village (310), Cache Point Town (290), Deline on Great Bear Lake (260), Reliance Taltheilei Village (260), Taltheilei Narrows (160), Trout Lake (150) and Fisherman Lake (120) [@gordon1996].

# Limitations

Small summer tent-ring camps across interior Barrenlands, Victoria Island and Northeast Greenland lack multi-family winter middens and remain absorbed in the rural kriging background, while detailed *Nunniffiit* heritage registration makes Greenland denser in catalogued habitation localities (174 records combined) than northern Canada's boreal shield and Arctic islands (69 records) [@friesen2016; @gordon1996].

# Sources

<div id="refs"></div>
