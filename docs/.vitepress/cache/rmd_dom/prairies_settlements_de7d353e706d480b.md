---
title: "Settlement Gazetteer of the Pre-Columbian Canadian Prairies"
subtitle: "CENTAUR-II: Coordinates, Toponymy and Demographic Trajectories (10000BC to 1600AD)"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: prairies_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_prairies_spatial.png"
hero_caption: "Spatial distribution of 66 catalogued bison-drive, horticultural and ceremonial sites across the four ecological divisions of the Canadian Prairies (1,07M km²) from 10000BC to 1600AD."
hero_label: "fig:hero-prairies"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles WGS84 coordinates, indigenous and archaeological names, occupation spans and population series for 66 persistent pre-contact aggregation centres across the Canadian Prairies (`1,07M km²`) from `10000BC` to `1600AD`. Because Plains hunter-gatherers moved seasonally across open grassland, bounded site-level estimates represent recurring winter-village, communal buffalo-jump, fishing-weir and riverine farming hubs: Lockport (`680` peak), Head-Smashed-In Buffalo Jump (`650`), Old Women's Buffalo Jump (`460`), Wanuskewin (`450`), Bushfield West (`440`), Gull Lake (`420`), Bodo Archaeological Site (`410`), Writing-On-Stone (`410`), Aschkibokahn (`390`), Avonlea (`390`), Lowton (`390`), Mortlach (`380`), Stott (`380`) and Cluny Fortified Village (`250`). All `66` entries carry CENTAUR provenance and pass ledger reconciliation alongside 1 consolidated duplicate-alias record across `67` candidates.

# Background

Archaeological settlement across the Canadian Plains combines mobile bison-hunting camps with recurring multi-band aggregation nodes [@peck2011; @vickers1994]. Along the Porcupine Hills and Bow-Oldman rivers, communal buffalo jumps and earthwork-ditch villages anchored winter-spring gatherings [@brink2008; @forbis1977]. Along the North and South Saskatchewan valleys, sheltered coulees at Wanuskewin, Bushfield West, Gull Lake and Avonlea served as multi-millennial wintering grounds [@walker1992; @walde2006]. Farther east, Lockport documents northern maize horticulture on the Red River alongside Vickers and Blackduck village hubs and Whiteshell boulder petroforms [@boyd2006; @buchner1980].

# Methodology

Inclusion in the source ledger requires persistent, spatially bounded aggregation footprints with published seasonal-band, kill-processing or village-size demographic reconstructions [@brink2008; @forbis1977]. Overlapping coordinate twins within `2 km` are consolidated as duplicate aliases, while transient tipi-ring stations without bounded populations remain allocated through the rural kriging surface. Table \ref{tab:summary} summarises included counts and summed site peaks across the four sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Included Sites</th><th class="crd-th">Sum of Site Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Foothills-Bow</strong></td><td class="crd-td">23</td><td class="crd-td">5,2k</td><td class="crd-td">Estipah-skikikini-kots (650)</td></tr>
<tr><td class="crd-td"><strong>Aspen Parkland</strong></td><td class="crd-td">13</td><td class="crd-td">2,8k</td><td class="crd-td">Wanuskewin (450)</td></tr>
<tr><td class="crd-td"><strong>Palliser Steppe</strong></td><td class="crd-td">17</td><td class="crd-td">3,5k</td><td class="crd-td">Gull Lake (420)</td></tr>
<tr><td class="crd-td"><strong>Red-Assiniboine</strong></td><td class="crd-td">13</td><td class="crd-td">4k</td><td class="crd-td">Lockport (680)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 66 included settlements and summed site peaks across the Canadian Prairies.</figcaption>
</figure>

# Testing and Validation

Ledger reconciliation confirms `66` included records, `1` excluded duplicate-alias entry (`67` total candidates), `0` unaccounted candidates and `0` schema faults. Coordinates fall cleanly between `49,03` and `55,78` N and `95,48` to `119,52` W; all provenance records cite CENTAUR. Figure \ref{fig:settlements} plots the rank-size hierarchy across the `66` catalogued hubs.

<figure class="crd-figure-block" id="fig:settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-prairies-settlements/fig4_prairies_settlements.png" alt="fig:settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and peak populations across the 66 catalogued settlements of the Canadian Prairies.</figcaption>
</figure>

# Results

## Leading Settlement Trajectories

Table \ref{tab:gazetteer} documents the leading 45 settlements out of 66 total entries ordered by peak population descending, linking coordinates and alternative names to benchmark population series.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Alternative Names</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">Benchmark Series</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lockport</strong></td><td class="crd-td">EaLf-1; Red River Rapids Horticultural</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">50,09 N, 96,94 W</td><td class="crd-td">1000BC - 1550AD</td><td class="crd-td">680</td><td class="crd-td">1000BC: 95; 500AD: 210; 1100AD: 260; 1300AD: 420; 1450AD: 680; 1550AD: 420</td></tr>
<tr><td class="crd-td"><strong>Estipah-skikikini-kots</strong></td><td class="crd-td">Head-Smashed-In Buffalo Jump; Estipah-Sikikini-kots</td><td class="crd-td">Foothills-Bow</td><td class="crd-td">49,71 N, 113,65 W</td><td class="crd-td">3500BC - 1500AD</td><td class="crd-td">650</td><td class="crd-td">3500BC: 95; 3000BC: 180; 0AD: 210; 400AD: 420; 1400AD: 620; 1500AD: 650</td></tr>
<tr><td class="crd-td"><strong>Old Women's Buffalo Jump</strong></td><td class="crd-td">EcPl-1; Cayley Buffalo Jump</td><td class="crd-td">Foothills-Bow</td><td class="crd-td">50,48 N, 113,86 W</td><td class="crd-td">200AD - 1500AD</td><td class="crd-td">460</td><td class="crd-td">200AD: 210; 800AD: 340; 1200AD: 420; 1500AD: 460</td></tr>
<tr><td class="crd-td"><strong>Wanuskewin</strong></td><td class="crd-td">Opimihaw Creek; FbNp-1</td><td class="crd-td">Aspen Parkland</td><td class="crd-td">52,22 N, 106,59 W</td><td class="crd-td">4000BC - 1500AD</td><td class="crd-td">450</td><td class="crd-td">4000BC: 65; 2400BC: 95; 1200BC: 80; 700BC: 120; 1100AD: 160; 1500AD: 450</td></tr>
<tr><td class="crd-td"><strong>Bushfield West</strong></td><td class="crd-td">FhNa-10; Nipawin Bushfield Flats</td><td class="crd-td">Aspen Parkland</td><td class="crd-td">53,36 N, 104,33 W</td><td class="crd-td">1100BC - 1600AD</td><td class="crd-td">440</td><td class="crd-td">1100BC: 80; 500AD: 135; 1400AD: 280; 1480AD: 175; 1550AD: 410; 1600AD: 440</td></tr>
<tr><td class="crd-td"><strong>Gull Lake</strong></td><td class="crd-td">EaOd-1; Missouri Coteau Bison Jump</td><td class="crd-td">Palliser Steppe</td><td class="crd-td">50,02 N, 108,58 W</td><td class="crd-td">200AD - 1400AD</td><td class="crd-td">420</td><td class="crd-td">200AD: 210; 600AD: 340; 1100AD: 420; 1400AD: 360</td></tr>
<tr><td class="crd-td"><strong>Áísínai'pi</strong></td><td class="crd-td">Writing-On-Stone; Aisinai'pi</td><td class="crd-td">Foothills-Bow</td><td class="crd-td">49,08 N, 111,62 W</td><td class="crd-td">1000BC - 1550AD</td><td class="crd-td">410</td><td class="crd-td">1000BC: 140; 400AD: 240; 1200AD: 360; 1550AD: 410</td></tr>
<tr><td class="crd-td"><strong>Bodo Archaeological Site</strong></td><td class="crd-td">FaOm-1; Eye Hill Creek Bison Kill</td><td class="crd-td">Aspen Parkland</td><td class="crd-td">52,32 N, 110,11 W</td><td class="crd-td">500BC - 1600AD</td><td class="crd-td">410</td><td class="crd-td">500BC: 120; 1200AD: 280; 1500AD: 380; 1600AD: 410</td></tr>
<tr><td class="crd-td"><strong>Aschkibokahn</strong></td><td class="crd-td">FbMb-1; Duck River Island Fishing Village</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">52,21 N, 100,21 W</td><td class="crd-td">800AD - 1400AD</td><td class="crd-td">390</td><td class="crd-td">800AD: 240; 1100AD: 390; 1150AD: 340; 1350AD: 320; 1400AD: 280</td></tr>
<tr><td class="crd-td"><strong>Avonlea</strong></td><td class="crd-td">Morten-Avonlea; EaNg-1</td><td class="crd-td">Palliser Steppe</td><td class="crd-td">50,01 N, 105,07 W</td><td class="crd-td">400AD - 1500AD</td><td class="crd-td">390</td><td class="crd-td">400AD: 210; 800AD: 320; 1200AD: 360; 1500AD: 390</td></tr>
<tr><td class="crd-td"><strong>Lowton</strong></td><td class="crd-td">DiLv-3; Tiger Hills Vickers Type Site</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">49,41 N, 99,66 W</td><td class="crd-td">1380AD - 1560AD</td><td class="crd-td">390</td><td class="crd-td">1380AD: 260; 1480AD: 390; 1560AD: 310</td></tr>
<tr><td class="crd-td"><strong>Mortlach</strong></td><td class="crd-td">EcNl-1; Besant Valley Mortlach Type</td><td class="crd-td">Palliser Steppe</td><td class="crd-td">50,47 N, 106,32 W</td><td class="crd-td">500BC - 1580AD</td><td class="crd-td">380</td><td class="crd-td">500BC: 140; 300AD: 210; 1450AD: 320; 1580AD: 380</td></tr>
<tr><td class="crd-td"><strong>Stott</strong></td><td class="crd-td">DlMa-1; Brandon Assiniboine Mound-Kill</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">49,87 N, 100,09 W</td><td class="crd-td">900AD - 1500AD</td><td class="crd-td">380</td><td class="crd-td">900AD: 260; 1200AD: 380; 1500AD: 340</td></tr>
<tr><td class="crd-td"><strong>Duck Bay</strong></td><td class="crd-td">FbMb-2; Lake Winnipegosis Duck Bay</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">52,21 N, 100,21 W</td><td class="crd-td">800AD - 1400AD</td><td class="crd-td">340</td><td class="crd-td">800AD: 210; 1150AD: 340; 1400AD: 280</td></tr>
<tr><td class="crd-td"><strong>Francois-Finlay</strong></td><td class="crd-td">FhNa-1; Nipawin Saskatchewan River</td><td class="crd-td">Aspen Parkland</td><td class="crd-td">53,35 N, 104,3 W</td><td class="crd-td">1200AD - 1600AD</td><td class="crd-td">340</td><td class="crd-td">1200AD: 190; 1500AD: 290; 1600AD: 340</td></tr>
<tr><td class="crd-td"><strong>Saamis</strong></td><td class="crd-td">EaOq-7; Medicine Hat Seven Persons Creek</td><td class="crd-td">Foothills-Bow</td><td class="crd-td">50,02 N, 110,69 W</td><td class="crd-td">1200AD - 1580AD</td><td class="crd-td">320</td><td class="crd-td">1200AD: 180; 1450AD: 290; 1580AD: 320</td></tr>
<tr><td class="crd-td"><strong>Jackson</strong></td><td class="crd-td">DiMe-17; Lauder Sandhills Vickers</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">49,41 N, 100,69 W</td><td class="crd-td">1450AD - 1600AD</td><td class="crd-td">310</td><td class="crd-td">1450AD: 220; 1550AD: 310; 1600AD: 280</td></tr>
<tr><td class="crd-td"><strong>Twin Fawns</strong></td><td class="crd-td">DiMe-23; Lauder Sandhills Mortlach</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">49,42 N, 100,7 W</td><td class="crd-td">1480AD - 1600AD</td><td class="crd-td">310</td><td class="crd-td">1480AD: 190; 1560AD: 280; 1600AD: 310</td></tr>
<tr><td class="crd-td"><strong>Whiteshell Petroforms</strong></td><td class="crd-td">Bannock Point; Tie Creek</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">50,15 N, 95,48 W</td><td class="crd-td">500BC - 1500AD</td><td class="crd-td">310</td><td class="crd-td">500BC: 120; 0AD: 140; 500AD: 190; 600AD: 210; 1200AD: 280; 1500AD: 310</td></tr>
<tr><td class="crd-td"><strong>Majorville Medicine Wheel</strong></td><td class="crd-td">EdPc-1; Bow River Cairn</td><td class="crd-td">Foothills-Bow</td><td class="crd-td">50,59 N, 112,41 W</td><td class="crd-td">2500BC - 1400AD</td><td class="crd-td">290</td><td class="crd-td">2500BC: 120; 500BC: 180; 500AD: 240; 1400AD: 290</td></tr>
<tr><td class="crd-td"><strong>Ross</strong></td><td class="crd-td">DlPd-3; Oldman River Coaldale Camp</td><td class="crd-td">Foothills-Bow</td><td class="crd-td">49,83 N, 112,56 W</td><td class="crd-td">1200AD - 1550AD</td><td class="crd-td">280</td><td class="crd-td">1200AD: 190; 1450AD: 280; 1550AD: 240</td></tr>
<tr><td class="crd-td"><strong>Tailrace Bay</strong></td><td class="crd-td">GdKw-1; Grand Rapids Saskatchewan Mouth</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">53,17 N, 99,3 W</td><td class="crd-td">2000BC - 1450AD</td><td class="crd-td">280</td><td class="crd-td">2000BC: 110; 200AD: 195; 1000AD: 280; 1450AD: 240</td></tr>
<tr><td class="crd-td"><strong>Bakken-Wright</strong></td><td class="crd-td">DiOa-1; Frenchman River Bison Drive</td><td class="crd-td">Palliser Steppe</td><td class="crd-td">49,16 N, 108,16 W</td><td class="crd-td">800AD - 1500AD</td><td class="crd-td">270</td><td class="crd-td">800AD: 160; 1300AD: 240; 1500AD: 270</td></tr>
<tr><td class="crd-td"><strong>Estuary Bison Pound</strong></td><td class="crd-td">EfOk-16; Red Deer-South Saskatchewan Pound</td><td class="crd-td">Palliser Steppe</td><td class="crd-td">50,83 N, 109,75 W</td><td class="crd-td">700AD - 1200AD</td><td class="crd-td">270</td><td class="crd-td">700AD: 190; 1000AD: 270; 1200AD: 230</td></tr>
<tr><td class="crd-td"><strong>Melhagen</strong></td><td class="crd-td">EgNn-1; Aiktow Besant Bison Pound</td><td class="crd-td">Palliser Steppe</td><td class="crd-td">51,02 N, 106,58 W</td><td class="crd-td">100AD - 900AD</td><td class="crd-td">260</td><td class="crd-td">100AD: 180; 400AD: 260; 900AD: 210</td></tr>
<tr><td class="crd-td"><strong>Castle Forks Buffalo Jump</strong></td><td class="crd-td">DjPm-126; Oldman Dam Jump</td><td class="crd-td">Foothills-Bow</td><td class="crd-td">49,55 N, 113,92 W</td><td class="crd-td">1000AD - 1580AD</td><td class="crd-td">250</td><td class="crd-td">1000AD: 160; 1400AD: 230; 1580AD: 250</td></tr>
<tr><td class="crd-td"><strong>Cluny Fortified Village</strong></td><td class="crd-td">Blackfoot Crossing; EePf-1</td><td class="crd-td">Foothills-Bow</td><td class="crd-td">50,77 N, 112,88 W</td><td class="crd-td">1400AD - 1600AD</td><td class="crd-td">250</td><td class="crd-td">1400AD: 140; 1550AD: 220; 1600AD: 250</td></tr>
<tr><td class="crd-td"><strong>Goldsworthy</strong></td><td class="crd-td">FdMw-2; Barrier-Red Deer Fish Weir</td><td class="crd-td">Aspen Parkland</td><td class="crd-td">52,52 N, 103,53 W</td><td class="crd-td">900AD - 1500AD</td><td class="crd-td">250</td><td class="crd-td">900AD: 140; 1300AD: 220; 1500AD: 250</td></tr>
<tr><td class="crd-td"><strong>Morkin</strong></td><td class="crd-td">DlPk-2; Porcupine Hills Stratified</td><td class="crd-td">Foothills-Bow</td><td class="crd-td">49,84 N, 113,86 W</td><td class="crd-td">200AD - 1400AD</td><td class="crd-td">240</td><td class="crd-td">200AD: 140; 800AD: 210; 1400AD: 240</td></tr>
<tr><td class="crd-td"><strong>Tschetter</strong></td><td class="crd-td">FbNr-1; Dunfermline Prairie Side-Notched</td><td class="crd-td">Aspen Parkland</td><td class="crd-td">52,2 N, 107,02 W</td><td class="crd-td">850AD - 1100AD</td><td class="crd-td">240</td><td class="crd-td">850AD: 180; 1000AD: 240; 1100AD: 195</td></tr>
<tr><td class="crd-td"><strong>Fitzgerald</strong></td><td class="crd-td">ElNp-8; Moose Woods Besant</td><td class="crd-td">Palliser Steppe</td><td class="crd-td">51,97 N, 106,72 W</td><td class="crd-td">400AD - 800AD</td><td class="crd-td">220</td><td class="crd-td">400AD: 160; 650AD: 220; 800AD: 180</td></tr>
<tr><td class="crd-td"><strong>Kenney</strong></td><td class="crd-td">DjPk-1; Brocket Pincher Creek Camp</td><td class="crd-td">Foothills-Bow</td><td class="crd-td">49,55 N, 113,75 W</td><td class="crd-td">200AD - 1200AD</td><td class="crd-td">220</td><td class="crd-td">200AD: 140; 500AD: 220; 1200AD: 190</td></tr>
<tr><td class="crd-td"><strong>Nelson House (Nisichawayasihk)</strong></td><td class="crd-td">Footprint Lake; Burntwood River</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">55,78 N, 98,88 W</td><td class="crd-td">0AD - 1600AD</td><td class="crd-td">220</td><td class="crd-td">0AD: 65; 800AD: 130; 1400AD: 190; 1600AD: 220</td></tr>
<tr><td class="crd-td"><strong>Calderwood</strong></td><td class="crd-td">DkPj-27; Porcupine Hills Jump</td><td class="crd-td">Foothills-Bow</td><td class="crd-td">49,72 N, 113,69 W</td><td class="crd-td">1000BC - 1300AD</td><td class="crd-td">210</td><td class="crd-td">1000BC: 110; 400AD: 175; 1300AD: 210</td></tr>
<tr><td class="crd-td"><strong>Long Creek</strong></td><td class="crd-td">DgMr-1; Estevan Souris Stratified</td><td class="crd-td">Palliser Steppe</td><td class="crd-td">49,03 N, 103 W</td><td class="crd-td">3000BC - 1400AD</td><td class="crd-td">210</td><td class="crd-td">3000BC: 80; 1000BC: 130; 500AD: 180; 1400AD: 210</td></tr>
<tr><td class="crd-td"><strong>Sjovold</strong></td><td class="crd-td">EiNs-4; Outlook South Saskatchewan River</td><td class="crd-td">Palliser Steppe</td><td class="crd-td">51,42 N, 107,08 W</td><td class="crd-td">2000BC - 1400AD</td><td class="crd-td">210</td><td class="crd-td">2000BC: 95; 100AD: 160; 800AD: 210; 1400AD: 185</td></tr>
<tr><td class="crd-td"><strong>Cranford</strong></td><td class="crd-td">DlPb-2; Oldman River Tipi Rings</td><td class="crd-td">Foothills-Bow</td><td class="crd-td">49,81 N, 112,25 W</td><td class="crd-td">600BC - 1200AD</td><td class="crd-td">190</td><td class="crd-td">600BC: 95; 400AD: 160; 1200AD: 190</td></tr>
<tr><td class="crd-td"><strong>Sundial Hill</strong></td><td class="crd-td">EdPc-2; Carmangay Medicine Wheel</td><td class="crd-td">Foothills-Bow</td><td class="crd-td">50,15 N, 113,11 W</td><td class="crd-td">1000BC - 1200AD</td><td class="crd-td">190</td><td class="crd-td">1000BC: 90; 400AD: 150; 1200AD: 190</td></tr>
<tr><td class="crd-td"><strong>Whitemouth Falls</strong></td><td class="crd-td">EaLa-1; Winnipeg River Archaic-Laurel</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">50,12 N, 96,03 W</td><td class="crd-td">4500BC - 500AD</td><td class="crd-td">190</td><td class="crd-td">4500BC: 75; 1500BC: 125; 500AD: 190</td></tr>
<tr><td class="crd-td"><strong>Stampede</strong></td><td class="crd-td">DjOn-26; Cypress Hills Elkwater</td><td class="crd-td">Foothills-Bow</td><td class="crd-td">49,66 N, 110,22 W</td><td class="crd-td">5500BC - 1200AD</td><td class="crd-td">185</td><td class="crd-td">5500BC: 65; 2000BC: 110; 400AD: 160; 1200AD: 185</td></tr>
<tr><td class="crd-td"><strong>Strathcona</strong></td><td class="crd-td">FjPi-29; Edmonton North Saskatchewan Quarry</td><td class="crd-td">Aspen Parkland</td><td class="crd-td">53,55 N, 113,39 W</td><td class="crd-td">1900BC - 1400AD</td><td class="crd-td">175</td><td class="crd-td">1900BC: 80; 500AD: 140; 1400AD: 175</td></tr>
<tr><td class="crd-td"><strong>Garratt</strong></td><td class="crd-td">EcNj-7; Moose Jaw Creek Stratified</td><td class="crd-td">Palliser Steppe</td><td class="crd-td">50,38 N, 105,53 W</td><td class="crd-td">4100BC - 700AD</td><td class="crd-td">165</td><td class="crd-td">4100BC: 75; 1000BC: 120; 700AD: 165</td></tr>
<tr><td class="crd-td"><strong>Haines-Crowsnest</strong></td><td class="crd-td">DjPm-16; Bellevue Oldman</td><td class="crd-td">Foothills-Bow</td><td class="crd-td">49,59 N, 114,36 W</td><td class="crd-td">3000BC - 1200AD</td><td class="crd-td">155</td><td class="crd-td">3000BC: 70; 200AD: 125; 1200AD: 155</td></tr>
<tr><td class="crd-td"><strong>Chiniki Lake</strong></td><td class="crd-td">Iyarhe Nakoda; Bow Valley Foothills</td><td class="crd-td">Foothills-Bow</td><td class="crd-td">51,11 N, 114,91 W</td><td class="crd-td">6000BC - 1400AD</td><td class="crd-td">150</td><td class="crd-td">6000BC: 30; 2000BC: 65; 500AD: 110; 1400AD: 150</td></tr>
<tr><td class="crd-td"><strong>Manyberries</strong></td><td class="crd-td">DgOo-1; Manyberries Cairn and Medicine Wheel</td><td class="crd-td">Foothills-Bow</td><td class="crd-td">49,4 N, 110,69 W</td><td class="crd-td">2000BC - 1100AD</td><td class="crd-td">145</td><td class="crd-td">2000BC: 75; 200AD: 120; 1100AD: 145</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 pre-contact settlements ordered by peak population in the Canadian Prairies (10000BC to 1600AD).</figcaption>
</figure>

## Excluded Candidates and Source Ledger Audit

Table \ref{tab:excluded} displays the excluded duplicate-alias record from `67` total candidates in the Canadian Prairies source ledger.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Entry</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Head-Smashed-In Buffalo Jump</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Head-Smashed-In Buffalo Jump' (Reeves (1978); Brink and Dawe (1989); Brink (2008), Imagining Head-Smashed-In [DkPj-1]).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded duplicate-alias locality in the Canadian Prairies source ledger.</figcaption>
</figure>

## Sub-Regional Settlement Summaries

In the Rocky Mountain Foothills and Bow-Oldman Plains (`23` entries), Head-Smashed-In Buffalo Jump (`650` peak, `3500BC` to `1500AD`) anchors communal jump procurement alongside Old Women's Buffalo Jump (`460`), Writing-On-Stone (`410`), Saamis (`320`), Majorville Medicine Wheel (`290`), Ross (`280`), Castle Forks (`250`) and the fortified earthwork village at Cluny (`250` peak, `1400AD` to `1600AD`), supplemented by early post-glacial sites at Vermilion Lakes (`85`, `8800BC`) and Fletcher (`75`, `7800BC`) [@brink2008; @forbis1977]. Along the Aspen Parkland (`13` entries), Wanuskewin (`450` peak, `4000BC` to `1500AD`), Bushfield West (`440`), Bodo (`410`) and Francois-Finlay (`340`) track wintering valley camps [@walker1992].

Across the South Saskatchewan Mixedgrass Steppe (`17` entries), Gull Lake (`420`), Avonlea (`390`), Mortlach (`380`), Estuary Bison Pound (`270`), Bakken-Wright (`270`) and Melhagen (`260`) document Plains bison-pound intensification [@walde2006; @vickers1994]. In the eastern Red-Assiniboine lowlands (`13` entries), Lockport (`680` peak, `1000BC` to `1550AD`) anchors Red River maize horticulture alongside Aschkibokahn (`390`), Lowton (`390`), Stott (`380`), Duck Bay (`340`), Jackson (`310`), Twin Fawns (`310`), Whiteshell Petroforms (`310`) and Tailrace Bay (`280`) [@boyd2006; @buchner1980].

# Limitations

Small seasonal hunting camps account for most dispersed prairie mobility yet leave shallow surface traces, so site-level records capture primary aggregation hubs while dispersed nomadic bands remain represented in the rural kriging surface [@peck2011; @walde2006].

# Sources

<div id="refs"></div>
