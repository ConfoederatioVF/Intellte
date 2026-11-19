---
title: "Northern Plains Hydrological Unit (HU 10): Settlement Gazetteer"
subtitle: "CENTAUR-II: Earthlodge Towns, Buffalo Jumps and Confluence Centres, 600AD-1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: northern_plains_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_northern_plains_spatial.png"
hero_caption: "Spatial distribution of 17 verified earthlodge towns, communal bison jumps and Missouri-Mississippi confluence centres across Northern Plains Hydrological Unit 10."
hero_label: "fig:hero-northern-plains"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---





# Abstract

This gazetteer compiles verified WGS84 coordinates, occupational spans and benchmark population series for 17 excavated settlements across Northern Plains Hydrological Unit 10 and its Missouri-Mississippi confluence border between 600AD and 1600AD [@kelly2025; @bird2022p3k14c]. The inventory encompasses communal high-plains bison jumps and ceremonial complexes in Montana and Wyoming (First Peoples Buffalo Jump, Hagen, Medicine Wheel-Bighorn and Vore Buffalo Jump), fortified Middle Missouri and Oneota earthlodge towns (Devils Lake-Narrows, Double Ditch, Huff Indian Village, Crow Creek, Mitchell Prehistoric Village and Blood Run), Central Plains and Quivira towns (Steed-Kisker, El Quartelejo and Tobias-Quivira) and four American Bottom frontier centres (Cahokia, East St. Louis, Mitchell and Emerald) [@frison1991prehistoric; @lehmer1971middle; @wedel1959kansas; @pauketat2004cahokia]. Source-ledger reconciliation confirms 17 included monuments and 2 excluded Palaeoindian hunting camps (`Anzick` and `Lindenmeier`) with zero unaccounted candidates.



# Background

Nucleated habitation in HU 10 spans contrasting ecological niches. On the northern high plains, large seasonal aggregations formed around engineered bison drivelines at First Peoples Buffalo Jump and Vore Buffalo Jump, while late horticultural pioneers occupied the Hagen village on the Lower Yellowstone [@frison1991prehistoric; @reher1980vore; @mulloy1942hagen]. Along the Middle Missouri Trench, Mandan, Hidatsa and Initial Coalescent builders fortified bluff-top towns such as Mitchell Prehistoric Village, Crow Creek, Huff Indian Village and Double Ditch with ditches, bastioned palisades and tightly packed earthlodges [@lehmer1971middle; @wood1967huff; @willey1990crow]. Further south, Oneota and Wichita-Quivira settlements at Blood Run and Tobias-Quivira grew alongside the eastern confluence corridor linked to the Cahokia polity [@alex2000iowa; @wedel1959kansas; @pauketat2004cahokia].

# Methodology

## Gazetteer Inclusion and Boundary Assignment

Sites were evaluated under Stadestér 2.0 criteria requiring verified `[lat, lng]` coordinates, stratified radiocarbon or ceramic dating and quantifiable residential group totals [@bird2022p3k14c; @kelly2025]. Ephemeral Clovis and Folsom kill-and-cache camps lacking bounded residential structures (`Anzick` and `Lindenmeier`) are logged as excluded in `northern_plains_source_ledger.json5`. Frontier centres situated on the Missouri-Mississippi confluence seam (`Cahokia`, `East St. Louis Mound Center`, `Mitchell` and `Emerald`) and the Souris-Missouri divide (`Devils Lake-Narrows`) are retained for cross-frontier Matérn kriging conditioning, with all benchmarks stamped in GMT+0.

## Earthlodge and Camp Population Estimation

Middle Missouri and Oneota estimates multiply excavated or magnetically surveyed earthlodge counts by mean household size (8-12 persons per lodge) and phase contemporaneity factors [@lehmer1971middle; @wood1967huff]. Bison-jump and high-plains ceremonial aggregations reflect peak autumn communal procurement camp sizes inferred from bonebed processing volume and hearth counts [@reher1980vore; @frison1991prehistoric].

# Testing and Validation

Ledger reconciliation confirms 17 included entries matching `northern_plains_settlements.json` and 2 excluded Palaeoindian entries (`Anzick` and `Lindenmeier`) with zero discrepancies. Chronological validation confirms the east-west structural lag: Mitchell Prehistoric Village (peak 720 in 1100AD) and Steed-Kisker (680 in 1200AD) precede the fortified Coalescent and late Mandan maxima at Huff Indian Village (1,15k in 1400AD), Double Ditch (1,85k in 1600AD), Blood Run (2,4k in 1600AD) and Tobias-Quivira (3,6k in 1550AD) [@wood1967huff; @alex2000iowa; @wedel1959kansas].

# Results

## Verified Settlement Gazetteer

Table \ref{tab:gazetteer-northern-plains} lists all 17 verified settlements across HU 10, and Figure \ref{fig:settlements-northern-plains} plots the rank-size curve dominated by the American Bottom frontier centres alongside protohistoric Tobias-Quivira (3,6k), Blood Run (2,4k) and Double Ditch (1,85k).

<figure class="crd-table-figure" id="tab:gazetteer-northern-plains">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">800AD</th><th class="crd-th">1100AD</th><th class="crd-th">1400AD</th><th class="crd-th">1600AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Devils Lake-Narrows</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">48,03, -98,92</td><td class="crd-td">600-1500AD</td><td class="crd-td">290</td><td class="crd-td">290</td><td class="crd-td">-</td><td class="crd-td">210</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>First Peoples Buffalo Jump</strong></td><td class="crd-td">Montana</td><td class="crd-td">47,48, -111,53</td><td class="crd-td">800-1500AD</td><td class="crd-td">520</td><td class="crd-td">340</td><td class="crd-td">-</td><td class="crd-td">510</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Hagen</strong></td><td class="crd-td">Montana</td><td class="crd-td">47,09, -104,74</td><td class="crd-td">1300-1500AD</td><td class="crd-td">420</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">420</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Medicine Wheel-Bighorn</strong></td><td class="crd-td">Wyoming</td><td class="crd-td">44,83, -107,92</td><td class="crd-td">800-1500AD</td><td class="crd-td">240</td><td class="crd-td">180</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Vore Buffalo Jump</strong></td><td class="crd-td">Wyoming</td><td class="crd-td">44,52, -104,15</td><td class="crd-td">1500-1600AD</td><td class="crd-td">390</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">390</td></tr>
<tr><td class="crd-td"><strong>Double Ditch</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">46,96, -100,93</td><td class="crd-td">1500-1600AD</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Huff Indian Village</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">46,62, -100,65</td><td class="crd-td">1400-1500AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Crow Creek</strong></td><td class="crd-td">South Dakota</td><td class="crd-td">43,97, -99,33</td><td class="crd-td">1300-1300AD</td><td class="crd-td">850</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mitchell Prehistoric Village</strong></td><td class="crd-td">South Dakota</td><td class="crd-td">43,73, -98,02</td><td class="crd-td">1000-1200AD</td><td class="crd-td">720</td><td class="crd-td">-</td><td class="crd-td">720</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Blood Run</strong></td><td class="crd-td">Iowa</td><td class="crd-td">43,46, -96,58</td><td class="crd-td">1500-1600AD</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Steed-Kisker</strong></td><td class="crd-td">Missouri</td><td class="crd-td">39,27, -94,78</td><td class="crd-td">1100-1300AD</td><td class="crd-td">680</td><td class="crd-td">-</td><td class="crd-td">480</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Cahokia</strong></td><td class="crd-td">Illinois</td><td class="crd-td">38,66, -90,06</td><td class="crd-td">800-1400AD</td><td class="crd-td">18k</td><td class="crd-td">1,5k</td><td class="crd-td">18k</td><td class="crd-td">350</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>East St. Louis Mound Center</strong></td><td class="crd-td">Illinois</td><td class="crd-td">38,63, -90,15</td><td class="crd-td">1000-1300AD</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mitchell</strong></td><td class="crd-td">Illinois</td><td class="crd-td">38,76, -90,09</td><td class="crd-td">1100-1200AD</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Emerald</strong></td><td class="crd-td">Illinois</td><td class="crd-td">38,63, -89,78</td><td class="crd-td">1000-1200AD</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>El Quartelejo</strong></td><td class="crd-td">Kansas</td><td class="crd-td">38,68, -100,92</td><td class="crd-td">1500-1600AD</td><td class="crd-td">380</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">380</td></tr>
<tr><td class="crd-td"><strong>Tobias-Quivira</strong></td><td class="crd-td">Kansas</td><td class="crd-td">38,34, -98,07</td><td class="crd-td">1400-1600AD</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Verified settlements in Northern Plains HU 10 with coordinates, active spans and benchmark populations.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:settlements-northern-plains">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-northern-plains-settlements/fig4_northern_plains_settlements.png" alt="fig:settlements-northern-plains" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement hierarchy across the 17 verified sites in Northern Plains HU 10.</figcaption>
</figure>

## Source Ledger Audit

Table \ref{tab:ledger-northern-plains} records all 19 evaluated ledger candidates, accounting for the 17 verified monuments and 2 excluded Palaeoindian hunting camps.

<figure class="crd-table-figure" id="tab:ledger-northern-plains">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Status</th><th class="crd-th">Ledger Classification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Devils Lake-Narrows</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>First Peoples Buffalo Jump</strong></td><td class="crd-td">Montana</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Hagen</strong></td><td class="crd-td">Montana</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Medicine Wheel-Bighorn</strong></td><td class="crd-td">Wyoming</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Vore Buffalo Jump</strong></td><td class="crd-td">Wyoming</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Double Ditch</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Huff Indian Village</strong></td><td class="crd-td">North Dakota</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Crow Creek</strong></td><td class="crd-td">South Dakota</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Mitchell Prehistoric Village</strong></td><td class="crd-td">South Dakota</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Blood Run</strong></td><td class="crd-td">Iowa</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Steed-Kisker</strong></td><td class="crd-td">Missouri</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Cahokia</strong></td><td class="crd-td">Illinois</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>East St. Louis Mound Center</strong></td><td class="crd-td">Illinois</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Mitchell</strong></td><td class="crd-td">Illinois</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Emerald</strong></td><td class="crd-td">Illinois</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>El Quartelejo</strong></td><td class="crd-td">Kansas</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Tobias-Quivira</strong></td><td class="crd-td">Kansas</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Anzick</strong></td><td class="crd-td">Montana</td><td class="crd-td">excluded</td><td class="crd-td">seasonal encampment unquantified</td></tr>
<tr><td class="crd-td"><strong>Lindenmeier</strong></td><td class="crd-td">Colorado</td><td class="crd-td">excluded</td><td class="crd-td">seasonal encampment unquantified</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Source-ledger reconciliation for Northern Plains HU 10 showing 17 included sites and 2 excluded Palaeoindian camps.</figcaption>
</figure>

# Limitations

Three constraints govern HU 10 site data. First, frontier boundary conditioning includes American Bottom centres on the HU 10-HU 07 seam; in continental Stadestér 2.0 compilation, duplicate settlement keys are resolved deterministically without double counting [@pauketat2004cahokia]. Second, Crow Creek reflects a single catastrophic 1300AD fortification and massacre horizon (850 inhabitants) rather than a multi-century sequence [@willey1990crow; @bamforth2018warfare]. Third, bison-jump population figures represent peak autumn communal congregations rather than year-round town residency [@reher1980vore].

# Sources

<div id="refs"></div>
