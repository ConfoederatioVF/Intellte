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
hero_caption: "Spatial distribution of 192 catalogued riverine, parkland and grassland settlements across the four ecological divisions of the Canadian Prairies (851.926 km²) from 10000BC to 1600AD."
hero_label: "fig:hero-prairies"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles WGS84 coordinates, indigenous and archaeological names, occupation spans and population series for 192 persistent pre-contact habitation centres across the Canadian Prairies (851.926 km²) from 10000BC to 1600AD, encompassing 632 site-period population estimates. Because Plains communities shifted seasonally across open grassland and parkland valleys, bounded site-level estimates represent recurring winter villages, sheltered valley camps, fishing-weir towns and riverine horticultural settlements: Lockport (680 peak), Estipah-skikikini-kots (650), Sagkeeng Fort Alexander Village (560), Cluny Earthlodge Town (520), Cumberland House Ancestral Town (520), Stott Blackduck Metropolis (520), Sjovold Layered Metropolis (510), Prince Albert River Town (490), Fort Qu'Appelle Calling Lakes Village (480), Winnipegosis Mossey River Town (470), Bushfield West River Town (460), Fairford River Town (460), North Battleford Confluence Town (460), Grand Mound (450) and Wanuskewin (450). All 192 entries carry CENTAUR provenance and pass ledger reconciliation alongside 215 excluded records across 407 candidates.

# Background

Archaeological settlement across the Canadian Plains combines mobile hunting camps with recurring multi-band habitation and aggregation nodes along sheltered river terraces and lakeshores [@peck2011; @vickers1994]. Along the Porcupine Hills and Bow-Oldman rivers, deep terraced valley occupations and fortified earthwork-ditch villages anchored winter-spring residential gatherings [@brink2008; @forbis1977]. Along the North and South Saskatchewan valleys, sheltered coulees and alluvial terraces at Wanuskewin, Sjovold Layered Metropolis, Bushfield West and Prince Albert served as multi-millennial residential grounds [@walker1992; @walde2006]. Farther east, Lockport documents northern maize horticulture on the Red River alongside Sagkeeng, Stott Blackduck Metropolis and Fairford lacustrine village hubs [@boyd2006; @buchner1980].

# Methodology

Inclusion in the source ledger requires persistent, spatially bounded habitation footprints with published seasonal-band, house-floor or village-size demographic reconstructions [@brink2008; @forbis1977]. Overlapping coordinate twins within 2 km are consolidated as duplicate aliases, while transient tipi-ring stations and non-habitation localities without bounded residential populations remain outside the point gazetteer and are represented through the rural kriging surface. Table \ref{tab:summary} summarises included counts and summed site peaks across the four sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Included Sites</th><th class="crd-th">Sum of Site Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Foothills-Bow</strong></td><td class="crd-td">24</td><td class="crd-td">6,1k</td><td class="crd-td">Estipah-skikikini-kots (650)</td></tr>
<tr><td class="crd-td"><strong>Aspen Parkland</strong></td><td class="crd-td">50</td><td class="crd-td">14,9k</td><td class="crd-td">Stott Blackduck Metropolis (520)</td></tr>
<tr><td class="crd-td"><strong>Palliser Steppe</strong></td><td class="crd-td">70</td><td class="crd-td">17,9k</td><td class="crd-td">Sjovold Layered Metropolis (510)</td></tr>
<tr><td class="crd-td"><strong>Red-Assiniboine</strong></td><td class="crd-td">48</td><td class="crd-td">15,8k</td><td class="crd-td">Lockport (680)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 192 included settlements and summed site peaks across the Canadian Prairies.</figcaption>
</figure>

# Testing and Validation

Ledger reconciliation records 192 included habitation entries (632 site-period observations, averaging 3,29 per site with 181 centres holding 3 or more estimates), 215 excluded candidates (210 consolidated duplicate aliases within 2 km and 5 unquantified seasonal or non-habitation entries across 407 total candidates), 0 unaccounted candidates and 0 schema faults. Coordinates fall cleanly between 48,51 and 54,68 N and 92,48 to 115,61 W; all provenance records cite CENTAUR. Figure \ref{fig:settlements} plots the rank-size hierarchy across the 192 catalogued hubs and highlights the leading fifteen centres.

<figure class="crd-figure-block" id="fig:settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-prairies-settlements/fig4_prairies_settlements.png" alt="fig:settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading fifteen centres across the 192 catalogued settlements of the Canadian Prairies.</figcaption>
</figure>

# Results

## Leading Settlement Trajectories

Table \ref{tab:gazetteer} documents the leading 45 settlements out of 192 total entries ordered by peak population descending, linking coordinates and alternative names to benchmark population series.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Alternative Names</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">Benchmark Series</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lockport</strong></td><td class="crd-td">EaLf-1; Red River Rapids Horticultural</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">50,09 N, 96,94 W</td><td class="crd-td">1000BC - 1550AD</td><td class="crd-td">680</td><td class="crd-td">1000BC: 95; 500AD: 210; 1100AD: 260; 1300AD: 420; 1450AD: 680; 1550AD: 420</td></tr>
<tr><td class="crd-td"><strong>Estipah-skikikini-kots</strong></td><td class="crd-td">Estipah-Sikikini-kots; DkPj-1</td><td class="crd-td">Foothills-Bow</td><td class="crd-td">49,71 N, 113,65 W</td><td class="crd-td">3500BC - 1500AD</td><td class="crd-td">650</td><td class="crd-td">3500BC: 95; 3000BC: 180; 0AD: 210; 400AD: 420; 1400AD: 620; 1500AD: 650</td></tr>
<tr><td class="crd-td"><strong>Sagkeeng Fort Alexander Village</strong></td><td class="crd-td">Winnipeg River Mouth Capital</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">50,6 N, 96,32 W</td><td class="crd-td">200AD - 1350AD</td><td class="crd-td">560</td><td class="crd-td">200AD: 150; 800AD: 380; 1350AD: 560</td></tr>
<tr><td class="crd-td"><strong>Cluny Earthlodge Town</strong></td><td class="crd-td">Blackfoot Crossing Fortified Town</td><td class="crd-td">Foothills-Bow</td><td class="crd-td">50,78 N, 112,87 W</td><td class="crd-td">1300AD - 1550AD</td><td class="crd-td">520</td><td class="crd-td">1300AD: 220; 1450AD: 480; 1550AD: 520</td></tr>
<tr><td class="crd-td"><strong>Cumberland House Ancestral Town</strong></td><td class="crd-td">Saskatchewan River Delta Capital</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">53,95 N, 102,27 W</td><td class="crd-td">400AD - 1400AD</td><td class="crd-td">520</td><td class="crd-td">400AD: 140; 900AD: 360; 1400AD: 520</td></tr>
<tr><td class="crd-td"><strong>Stott Blackduck Metropolis</strong></td><td class="crd-td">Assiniboine River Stott Town</td><td class="crd-td">Aspen Parkland</td><td class="crd-td">49,83 N, 99,98 W</td><td class="crd-td">800AD - 1400AD</td><td class="crd-td">520</td><td class="crd-td">800AD: 160; 1100AD: 390; 1400AD: 520</td></tr>
<tr><td class="crd-td"><strong>Sjovold Layered Metropolis</strong></td><td class="crd-td">Sjovold South Saskatchewan Town</td><td class="crd-td">Palliser Steppe</td><td class="crd-td">51,47 N, 106,85 W</td><td class="crd-td">1500BC - 1250AD</td><td class="crd-td">510</td><td class="crd-td">1500BC: 110; 300BC: 240; 600AD: 420; 1250AD: 510</td></tr>
<tr><td class="crd-td"><strong>Prince Albert River Town</strong></td><td class="crd-td">North Saskatchewan River Capital</td><td class="crd-td">Palliser Steppe</td><td class="crd-td">53,2 N, 105,75 W</td><td class="crd-td">300AD - 1350AD</td><td class="crd-td">490</td><td class="crd-td">300AD: 140; 850AD: 350; 1350AD: 490</td></tr>
<tr><td class="crd-td"><strong>Fort Qu'Appelle Calling Lakes Village</strong></td><td class="crd-td">Qu'Appelle Lakes Capital</td><td class="crd-td">Aspen Parkland</td><td class="crd-td">50,77 N, 103,78 W</td><td class="crd-td">300AD - 1350AD</td><td class="crd-td">480</td><td class="crd-td">300AD: 140; 850AD: 340; 1350AD: 480</td></tr>
<tr><td class="crd-td"><strong>Winnipegosis Mossey River Town</strong></td><td class="crd-td">Mossey River Mouth Capital</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">51,65 N, 99,92 W</td><td class="crd-td">400AD - 1400AD</td><td class="crd-td">470</td><td class="crd-td">400AD: 130; 950AD: 320; 1400AD: 470</td></tr>
<tr><td class="crd-td"><strong>Bushfield West River Town</strong></td><td class="crd-td">Nipawin Saskatchewan River Village</td><td class="crd-td">Aspen Parkland</td><td class="crd-td">53,37 N, 104,02 W</td><td class="crd-td">800AD - 1450AD</td><td class="crd-td">460</td><td class="crd-td">800AD: 140; 1150AD: 340; 1450AD: 460</td></tr>
<tr><td class="crd-td"><strong>Fairford River Town</strong></td><td class="crd-td">Lake St. Martin Outlet Capital</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">51,58 N, 98,72 W</td><td class="crd-td">300AD - 1350AD</td><td class="crd-td">460</td><td class="crd-td">300AD: 130; 850AD: 310; 1350AD: 460</td></tr>
<tr><td class="crd-td"><strong>North Battleford Confluence Town</strong></td><td class="crd-td">Battle River Confluence Capital</td><td class="crd-td">Aspen Parkland</td><td class="crd-td">52,77 N, 108,28 W</td><td class="crd-td">200AD - 1350AD</td><td class="crd-td">460</td><td class="crd-td">200AD: 130; 800AD: 320; 1350AD: 460</td></tr>
<tr><td class="crd-td"><strong>Grand Mound</strong></td><td class="crd-td">21KC3; Smith Mounds</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">48,51 N, 93,71 W</td><td class="crd-td">200BC - 1200AD</td><td class="crd-td">450</td><td class="crd-td">200BC: 160; 0AD: 190; 400AD: 310; 700AD: 450; 1100AD: 320; 1200AD: 280</td></tr>
<tr><td class="crd-td"><strong>Wanuskewin</strong></td><td class="crd-td">Opimihaw Creek; FbNp-1</td><td class="crd-td">Palliser Steppe</td><td class="crd-td">52,22 N, 106,59 W</td><td class="crd-td">4000BC - 1500AD</td><td class="crd-td">450</td><td class="crd-td">4000BC: 65; 2400BC: 95; 1200BC: 80; 700BC: 120; 1100AD: 160; 1500AD: 450</td></tr>
<tr><td class="crd-td"><strong>Aschkibokahn Lacustrine Town</strong></td><td class="crd-td">Moosehorn Bay Laurel Village</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">51,58 N, 99,3 W</td><td class="crd-td">700AD - 1400AD</td><td class="crd-td">440</td><td class="crd-td">700AD: 130; 1050AD: 310; 1400AD: 440</td></tr>
<tr><td class="crd-td"><strong>Bushfield West</strong></td><td class="crd-td">FhNa-10; Nipawin Bushfield Flats</td><td class="crd-td">Aspen Parkland</td><td class="crd-td">53,36 N, 104,33 W</td><td class="crd-td">1100BC - 1600AD</td><td class="crd-td">440</td><td class="crd-td">1100BC: 80; 500AD: 135; 1400AD: 280; 1480AD: 175; 1550AD: 410; 1600AD: 440</td></tr>
<tr><td class="crd-td"><strong>Kay-Nah-Chi-Wah-Nung</strong></td><td class="crd-td">Long Sault Mounds; Rainy River</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">48,64 N, 94,07 W</td><td class="crd-td">500BC - 1500AD</td><td class="crd-td">440</td><td class="crd-td">500BC: 120; 400AD: 260; 1100AD: 390; 1500AD: 440</td></tr>
<tr><td class="crd-td"><strong>Gull Lake</strong></td><td class="crd-td">EaOd-1</td><td class="crd-td">Palliser Steppe</td><td class="crd-td">50,02 N, 108,58 W</td><td class="crd-td">200AD - 1400AD</td><td class="crd-td">420</td><td class="crd-td">200AD: 210; 600AD: 340; 1100AD: 420; 1400AD: 360</td></tr>
<tr><td class="crd-td"><strong>Portage la Prairie Delta Town</strong></td><td class="crd-td">Assiniboine River Portage Village</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">49,97 N, 98,28 W</td><td class="crd-td">400AD - 1400AD</td><td class="crd-td">420</td><td class="crd-td">400AD: 120; 950AD: 290; 1400AD: 420</td></tr>
<tr><td class="crd-td"><strong>Bodo Archaeological Site</strong></td><td class="crd-td">FaOm-1; Eye Hill Creek Bison Kill</td><td class="crd-td">Aspen Parkland</td><td class="crd-td">52,32 N, 110,11 W</td><td class="crd-td">500BC - 1600AD</td><td class="crd-td">410</td><td class="crd-td">500BC: 120; 1200AD: 280; 1500AD: 380; 1600AD: 410</td></tr>
<tr><td class="crd-td"><strong>Dauphin Valley Settlement</strong></td><td class="crd-td">Valley River Lake Dauphin Town</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">51,15 N, 100,05 W</td><td class="crd-td">300AD - 1350AD</td><td class="crd-td">410</td><td class="crd-td">300AD: 120; 850AD: 290; 1350AD: 410</td></tr>
<tr><td class="crd-td"><strong>Pinawa Winnipeg River Town</strong></td><td class="crd-td">Winnipeg River Pinawa Settlement</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">50,15 N, 95,88 W</td><td class="crd-td">300AD - 1350AD</td><td class="crd-td">410</td><td class="crd-td">300AD: 120; 850AD: 280; 1350AD: 410</td></tr>
<tr><td class="crd-td"><strong>Writing-On-Stone</strong></td><td class="crd-td">Aisinai'pi; DgOw-20</td><td class="crd-td">Palliser Steppe</td><td class="crd-td">49,08 N, 111,62 W</td><td class="crd-td">1000BC - 1550AD</td><td class="crd-td">410</td><td class="crd-td">1000BC: 140; 400AD: 240; 1200AD: 360; 1550AD: 410</td></tr>
<tr><td class="crd-td"><strong>Aschkibokahn</strong></td><td class="crd-td">FbMb-1; Duck River Island Fishing Village</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">52,21 N, 100,21 W</td><td class="crd-td">800AD - 1400AD</td><td class="crd-td">390</td><td class="crd-td">800AD: 240; 1100AD: 390; 1150AD: 340; 1350AD: 320; 1400AD: 280</td></tr>
<tr><td class="crd-td"><strong>Avonlea</strong></td><td class="crd-td">Morten-Avonlea; EaNg-1</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">50,01 N, 105,07 W</td><td class="crd-td">400AD - 1500AD</td><td class="crd-td">390</td><td class="crd-td">400AD: 210; 800AD: 320; 1200AD: 360; 1500AD: 390</td></tr>
<tr><td class="crd-td"><strong>Long Creek Town</strong></td><td class="crd-td">Estevan Souris River Village</td><td class="crd-td">Palliser Steppe</td><td class="crd-td">49,17 N, 103,02 W</td><td class="crd-td">1500BC - 1200AD</td><td class="crd-td">390</td><td class="crd-td">1500BC: 90; 200BC: 210; 600AD: 320; 1200AD: 390</td></tr>
<tr><td class="crd-td"><strong>Lowton</strong></td><td class="crd-td">DiLv-3; Tiger Hills Vickers Type Site</td><td class="crd-td">Aspen Parkland</td><td class="crd-td">49,41 N, 99,66 W</td><td class="crd-td">1380AD - 1560AD</td><td class="crd-td">390</td><td class="crd-td">1380AD: 260; 1480AD: 390; 1560AD: 310</td></tr>
<tr><td class="crd-td"><strong>Peguis Fisher River Town</strong></td><td class="crd-td">Fisher River Delta Capital</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">51,38 N, 97,3 W</td><td class="crd-td">400AD - 1400AD</td><td class="crd-td">390</td><td class="crd-td">400AD: 110; 950AD: 270; 1400AD: 390</td></tr>
<tr><td class="crd-td"><strong>Avonlea Creek Capital</strong></td><td class="crd-td">Avonlea Type Village</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">49,98 N, 105,05 W</td><td class="crd-td">450AD - 1250AD</td><td class="crd-td">380</td><td class="crd-td">450AD: 120; 800AD: 310; 1250AD: 380</td></tr>
<tr><td class="crd-td"><strong>Great Falls Winnipeg River Town</strong></td><td class="crd-td">Great Falls Rapids Settlement</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">50,53 N, 95,98 W</td><td class="crd-td">400AD - 1400AD</td><td class="crd-td">380</td><td class="crd-td">400AD: 110; 950AD: 270; 1400AD: 380</td></tr>
<tr><td class="crd-td"><strong>Lumsden Qu'Appelle Town</strong></td><td class="crd-td">Qu'Appelle Valley Lumsden Village</td><td class="crd-td">Palliser Steppe</td><td class="crd-td">50,65 N, 104,87 W</td><td class="crd-td">500AD - 1450AD</td><td class="crd-td">380</td><td class="crd-td">500AD: 120; 1050AD: 280; 1450AD: 380</td></tr>
<tr><td class="crd-td"><strong>Mortlach</strong></td><td class="crd-td">EcNl-1; Besant Valley Mortlach Type</td><td class="crd-td">Palliser Steppe</td><td class="crd-td">50,47 N, 106,32 W</td><td class="crd-td">500BC - 1580AD</td><td class="crd-td">380</td><td class="crd-td">500BC: 140; 300AD: 210; 1450AD: 320; 1580AD: 380</td></tr>
<tr><td class="crd-td"><strong>Sourisford River Town</strong></td><td class="crd-td">Linear Mounds Habitation Complex</td><td class="crd-td">Aspen Parkland</td><td class="crd-td">49,13 N, 101,02 W</td><td class="crd-td">900AD - 1480AD</td><td class="crd-td">380</td><td class="crd-td">900AD: 130; 1250AD: 310; 1480AD: 380</td></tr>
<tr><td class="crd-td"><strong>Stott</strong></td><td class="crd-td">DlMa-1; Brandon Assiniboine Mound-Kill</td><td class="crd-td">Aspen Parkland</td><td class="crd-td">49,87 N, 100,09 W</td><td class="crd-td">900AD - 1500AD</td><td class="crd-td">380</td><td class="crd-td">900AD: 260; 1200AD: 380; 1500AD: 340</td></tr>
<tr><td class="crd-td"><strong>The Pas Saskatchewan Town</strong></td><td class="crd-td">The Pas Riverine Village</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">53,82 N, 101,25 W</td><td class="crd-td">800AD - 1480AD</td><td class="crd-td">380</td><td class="crd-td">800AD: 120; 1200AD: 290; 1480AD: 380</td></tr>
<tr><td class="crd-td"><strong>Dauphin River Lake Town</strong></td><td class="crd-td">Lake Winnipegosis Outlet Town</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">51,97 N, 98,05 W</td><td class="crd-td">400AD - 1400AD</td><td class="crd-td">370</td><td class="crd-td">400AD: 110; 950AD: 260; 1400AD: 370</td></tr>
<tr><td class="crd-td"><strong>Treesbank Confluence Village</strong></td><td class="crd-td">Souris Assiniboine Confluence Town</td><td class="crd-td">Aspen Parkland</td><td class="crd-td">49,65 N, 99,6 W</td><td class="crd-td">300AD - 1350AD</td><td class="crd-td">370</td><td class="crd-td">300AD: 110; 850AD: 260; 1350AD: 370</td></tr>
<tr><td class="crd-td"><strong>Brockinton Souris Town</strong></td><td class="crd-td">Brockinton Settlement</td><td class="crd-td">Aspen Parkland</td><td class="crd-td">49,17 N, 101,03 W</td><td class="crd-td">800AD - 1500AD</td><td class="crd-td">360</td><td class="crd-td">800AD: 120; 1200AD: 280; 1500AD: 360</td></tr>
<tr><td class="crd-td"><strong>Eastend Frenchman River Town</strong></td><td class="crd-td">Frenchman River Valley Capital</td><td class="crd-td">Palliser Steppe</td><td class="crd-td">49,52 N, 108,82 W</td><td class="crd-td">300AD - 1350AD</td><td class="crd-td">360</td><td class="crd-td">300AD: 110; 850AD: 260; 1350AD: 360</td></tr>
<tr><td class="crd-td"><strong>Morris Red River Settlement</strong></td><td class="crd-td">Red River Morris Village</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">49,35 N, 97,37 W</td><td class="crd-td">300AD - 1400AD</td><td class="crd-td">360</td><td class="crd-td">300AD: 110; 900AD: 260; 1400AD: 360</td></tr>
<tr><td class="crd-td"><strong>Red Deer City River Settlement</strong></td><td class="crd-td">Red Deer Valley Town</td><td class="crd-td">Aspen Parkland</td><td class="crd-td">52,27 N, 113,82 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">350</td><td class="crd-td">400AD: 110; 950AD: 260; 1450AD: 350</td></tr>
<tr><td class="crd-td"><strong>Swan River Valley Town</strong></td><td class="crd-td">Swan River Settlement</td><td class="crd-td">Red-Assiniboine</td><td class="crd-td">52,12 N, 101,27 W</td><td class="crd-td">500AD - 1450AD</td><td class="crd-td">350</td><td class="crd-td">500AD: 100; 1050AD: 250; 1450AD: 350</td></tr>
<tr><td class="crd-td"><strong>Wascana Creek Settlement</strong></td><td class="crd-td">Regina Plains Town</td><td class="crd-td">Palliser Steppe</td><td class="crd-td">50,45 N, 104,62 W</td><td class="crd-td">300AD - 1400AD</td><td class="crd-td">350</td><td class="crd-td">300AD: 110; 900AD: 250; 1400AD: 350</td></tr>
<tr><td class="crd-td"><strong>Empress Confluence Town</strong></td><td class="crd-td">Red Deer South Saskatchewan Confluence</td><td class="crd-td">Palliser Steppe</td><td class="crd-td">50,95 N, 110,02 W</td><td class="crd-td">700AD - 1480AD</td><td class="crd-td">340</td><td class="crd-td">700AD: 110; 1150AD: 260; 1480AD: 340</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 pre-contact settlements ordered by peak population in the Canadian Prairies (10000BC to 1600AD).</figcaption>
</figure>

## Excluded Candidates and Source Ledger Audit

Table \ref{tab:excluded} displays the first 30 of 210 consolidated duplicate-alias localities (alongside 5 unquantified non-habitation exclusions for 215 total exclusions across 407 candidates) in the Canadian Prairies source ledger.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Entry</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lockport</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Lockport' (Flynn (2002); Buchner (1988), Historic Resources Branch Manitoba [EaLf-1]).</td></tr>
<tr><td class="crd-td"><strong>Wanuskewin</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Wanuskewin' (Walker (1988, 1999); Cyr et al. (2011), Wanuskewin Heritage Park Research [FbNp-1]).</td></tr>
<tr><td class="crd-td"><strong>Sjovold Layered Metropolis</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Sjovold Layered Metropolis' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Grand Mound</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Grand Mound' (Stoltman, James B. 1973. The Laurel Culture in Minnesota. Minnesota Prehistoric Archaeology Series No. 8, Minnesota Historical Society.).</td></tr>
<tr><td class="crd-td"><strong>Kay-Nah-Chi-Wah-Nung</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Kay-Nah-Chi-Wah-Nung' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Gull Lake</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Gull Lake' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Bodo Archaeological Site</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Bodo Archaeological Site' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Writing-On-Stone</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Writing-On-Stone' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Lockport</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Lockport' (Flynn, C.M. (1993). The Lockport Site (EaLf-1): Ceramic Analysis and Cultural Affiliation. MA thesis, University of Manitoba; Buchner, A.P. (1988).).</td></tr>
<tr><td class="crd-td"><strong>Avonlea</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Avonlea' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Long Creek Town</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Long Creek Town' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Grand Mound</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Grand Mound' (Stoltman (1973), The Laurel Culture in Minnesota; Lenius and Olinyk (1990) [21KC3]).</td></tr>
<tr><td class="crd-td"><strong>Mortlach</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Mortlach' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Wanuskewin</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Wanuskewin' (Walker, E.G. (1988). Archaeological Research at Wanuskewin Heritage Park; Walker, E.G. (1992). The Gowen Sites.).</td></tr>
<tr><td class="crd-td"><strong>Tailrace Bay</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Tailrace Bay' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Long Creek</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Long Creek' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Sjovold</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Sjovold' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Stampede</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Stampede' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Lac Seul</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Lac Seul' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Red Lake Ontario</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Red Lake Ontario' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Chiniki Lake</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Chiniki Lake' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Pikangikum</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Pikangikum' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Vermilion Lakes</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Vermilion Lakes' (Fedje, D.W. et al. (1995). Vermilion Lakes Site: Adaptations and Environments in the Canadian Rockies During the Latest Pleistocene and Early Holocene. American Antiquity 60(1).).</td></tr>
<tr><td class="crd-td"><strong>Sagkeeng Fort Alexander Village</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Sagkeeng Fort Alexander Village' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Cluny Earthlodge Town</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Cluny Earthlodge Town' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Cumberland House Ancestral Town</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Cumberland House Ancestral Town' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Stott Blackduck Metropolis</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Stott Blackduck Metropolis' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Prince Albert River Town</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Prince Albert River Town' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Fort Qu'Appelle Calling Lakes Village</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Fort Qu'Appelle Calling Lakes Village' (CENTAUR Monument Inventory).</td></tr>
<tr><td class="crd-td"><strong>Winnipegosis Mossey River Town</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Winnipegosis Mossey River Town' (CENTAUR Monument Inventory).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Representative consolidated duplicate-alias localities in the Canadian Prairies source ledger (first 30 of 210 entries).</figcaption>
</figure>

## Sub-Regional Settlement Summaries

In the Rocky Mountain Foothills and Bow-Oldman Plains (24 entries, 82 observations, 6.075 summed peak), Estipah-skikikini-kots (650 peak, 3500BC to 1500AD) anchors valley residential occupation alongside Cluny Earthlodge Town (520 peak, 1300AD to 1550AD), Cochrane Ranche Valley Village (310), Taber River Settlement (310), Fort Macleod Valley Village (290), FM Ranch Village (280), High River Valley Village (280), Ross (280), Pincher Creek Habitation (270), the fortified earthwork village at Cluny (250 peak, 1400AD to 1600AD) and Majorville River Village (190), supplemented by early post-glacial sites at Vermilion Lakes (85, 8800BC) and Fletcher (75, 7800BC) [@brink2008; @forbis1977]. Along the Aspen Parkland and North Saskatchewan (50 entries, 157 observations, 14.885 summed peak), Stott Blackduck Metropolis (520 peak, 800AD to 1400AD), Fort Qu'Appelle Calling Lakes Village (480 peak, 300AD to 1350AD), Bushfield West River Town (460), North Battleford Confluence Town (460), Bushfield West (440), Bodo Archaeological Site (410), Lowton (390), Stott (380), Red Deer City River Settlement (350), Francois-Finlay (340), Jackson (310), Twin Fawns (310) and Goldsworthy (250) track wintering valley and parkland camps [@walker1992].

Across the South Saskatchewan Palliser Steppe (70 entries, 228 observations, 17.880 summed peak), Sjovold Layered Metropolis (510 peak, 1500BC to 1250AD), Prince Albert River Town (490), Wanuskewin (450 peak, 4000BC to 1500AD), Gull Lake (420), Writing-On-Stone (410), Long Creek Town (390), Mortlach (380), Bakken-Wright (270), Melhagen (260) and Tschetter (240) document long-term riverine and upland wintering occupation [@walde2006; @vickers1994]. In the eastern Red-Assiniboine lowlands (48 entries, 165 observations, 15.750 summed peak), Lockport (680 peak, 1000BC to 1550AD) anchors Red River maize horticulture alongside Sagkeeng Fort Alexander Village (560 peak, 200AD to 1350AD), Cumberland House Ancestral Town (520), Winnipegosis Mossey River Town (470), Fairford River Town (460), Grand Mound (450), Aschkibokahn Lacustrine Town (440), Kay-Nah-Chi-Wah-Nung (440), Avonlea (390) and Tailrace Bay (280) [@boyd2006; @buchner1980].

# Limitations

Small seasonal hunting camps account for most dispersed prairie mobility yet leave shallow surface traces, so site-level records capture primary aggregation hubs while dispersed nomadic bands remain represented in the rural kriging surface [@peck2011; @walde2006].

# Sources

<div id="refs"></div>
