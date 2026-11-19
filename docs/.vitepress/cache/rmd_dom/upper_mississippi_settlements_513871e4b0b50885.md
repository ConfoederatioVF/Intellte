---
title: "Upper Mississippi Hydrological Unit (HU 07): Settlement Gazetteer"
subtitle: "CENTAUR-II: Archaic, Hopewell, Mississippian and Oneota Centres, 9500BC-1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: upper_mississippi_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_upper_mississippi_spatial.png"
hero_caption: "Spatial distribution of 135 catalogued Archaic, Hopewell, Mississippian and Oneota settlements across Upper Mississippi Hydrological Unit 07 (486,8k km²)."
hero_label: "fig:hero-upper-mississippi"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---





# Abstract

This gazetteer compiles WGS84 coordinates, occupational spans and benchmark population series for `135` excavated settlements across Upper Mississippi Hydrological Unit 07 (`486.781 km²`) from `9500BC` to `1600AD` [@kelly2025; @bird2022p3k14c].
Spanning Illinois (`70` sites), Wisconsin (`26`), Minnesota (`23`), Iowa (`9`), Missouri (`5`) and northwestern Indiana (`2`), the inventory tracks Early and Middle Archaic riverine base camps (`Lang Farm`, `Apple Creek`, `Itasca Bison`, `Modoc Rockshelter` and `Koster`), Middle Woodland Hopewell mound complexes (`Albany Mounds`, `Kamp Mound` and `Trempealeau`), the Greater Cahokia urban hierarchy in the American Bottom (`Cahokia`, `East St. Louis Mound Center`, `St. Louis Mound Group`, `Emerald Acropolis` and `Pulcher`), Central Illinois Spoon River towns (`Dickson Mounds`, `Orendorf` and `Larson`), northern Mississippian outliers (`Aztalan`, `Silvernale` and `Bryan`) and late precontact Oneota-Illinois centres (`Zimmerman`, `Kathio`, `Carcajou Point`, `Midway Village` and `Valley View`) [@milner1998cahokia; @pauketat2004cahokia; @goldstein1991aztalan; @gibbon2012archaeology].
Synchronously active catalogued settlement totals peak at `33,38k` in `1100AD` (`11,5%` of the `290k` HU 07 population), ease to `23,17k` in `1200AD` and `3,18k` in `1500AD` following the Vacant Quarter dispersal, and stand at `5,27k` in `1600AD` [@cobb2002vacant; @benson2009cahokia].
Source-ledger reconciliation confirms `135` included sites and `1` excluded duplicate-alias entry (`Cahokia` merged within `2 km` into the canonical Cahokia record), accounting for all `136` candidates with zero missing records.



# Background

Nucleated settlement in Upper Mississippi HU 07 evolved across four major archaeological phases [@theler2003driftless].
During the Early and Middle Archaic (`9500BC-3000BC`), repeated occupations at deeply stratified terrace fans and bluff-base shelters such as `Koster` (`150` at `3000BC`) and `Modoc Rockshelter` (`65` at `5500BC`) anchored hunter-forager bands along the Illinois and Mississippi margins [@brown1983koster].
By `0AD-400AD`, Middle Woodland Havana-Hopewell societies built burial mound precincts and residential terraces at `Albany Mounds` (`680` at `200AD`), `Kamp Mound` (`420` at `150AD`) and `Twenhafel` (`410` at `1000AD` peak after long multi-component reuse).

Urbanisation culminated in the American Bottom during the Lohmann and Stirling phases (`1050-1200AD`), when `Cahokia` (`18k` at `1100AD`), `East St. Louis Mound Center` (`5,2k`), `St. Louis Mound Group` (`2,6k`), `Emerald Acropolis` (`1,6k`) and `Pulcher` (`1,6k` at `1150AD`) formed an interconnected ceremonial and residential metropolis [@milner1998cahokia; @pauketat2004cahokia].
Northward Mississippian expansion reached Spoon River at `Dickson Mounds` (`1,1k` in `1200AD`) and `Orendorf` (`860` in `1220AD`), the Crawfish River palisaded town of `Aztalan` (`750` in `1100AD`) and Red Wing locality towns at `Silvernale` (`950` in `1150AD`) and `Bryan` (`820` in `1200AD`) [@conrad1991middle; @goldstein1991aztalan; @gibbon2012archaeology].
After `1300AD`, drought and conflict emptied the southern American Bottom during the Vacant Quarter abandonment, while Oneota, Langford and Illinois towns flourished at `Zimmerman` (`1,8k` in `1600AD`), `Kathio` (`820` in `1600AD`), `Carcajou Point` (`690` in `1500AD`), `Midway Village` (`640` in `1450AD`) and `Valley View` (`620` in `1550AD`), paralleling contemporary Upper Mississippian centres along the Lake Michigan basin [@cobb2002vacant; @gibbon2012archaeology; @bettarel1973moccasin].

# Methodology

## Gazetteer Inclusion and Ledger Screening

All `136` candidate sites in `upper_mississippi_source_ledger.json5` were screened against Stadestér 2.0 standards requiring surveyed WGS84 coordinates, dated mound, pit or residential features and bounded phase population trajectories [@bird2022p3k14c; @kelly2025].
Where overlapping site reports fell within a `2 km` radius of an existing canonical centre, duplicate entries were consolidated in `upper_mississippi_source_ledger.json5` (`Cahokia` duplicate alias merged into canonical `Cahokia`), leaving `135` distinct entries in `upper_mississippi_settlements.json`.
All retained records carry `"CENTAUR"` provenance attribution, with benchmark timestamps standardised to GMT+0.

## Household and Mound-Precinct Estimation

Mississippian town totals combine excavated wall-trench house densities, domestic precinct areas and contemporaneous occupation spans adjusted for timber-post replacement rates [@milner1998cahokia; @pauketat2004cahokia].
Archaic base-camp, Hopewell and Oneota estimates integrate stratified hearth counts, mapped residential terrace extents, storage-pit densities and burial-mound catchment populations [@brown1983koster; @theler2003driftless; @gibbon2012archaeology].

# Testing and Validation

Ledger checks confirm exact `135`-to-`135` parity between `upper_mississippi_source_ledger.json5` and `upper_mississippi_settlements.json`, plus `1` documented duplicate-alias exclusion (`136` candidates total; zero unaccounted rows).
Sub-regional coverage places `51` sites in the Upper Mississippi Headwaters, Minnesota River and Driftless Zone, `39` in the Iowa-Des Moines, Rock and Upper Illinois Drift Plains, and `45` in the American Bottom, Lower Illinois and Confluence (Table \ref{tab:um-subregion-summary}).
Chronological cross-checks capture the sequential regional shifts: Hopewellian `Albany Mounds` peaks in `200AD` (`680`); the Greater Cahokia cluster peaks simultaneously in `1100-1150AD` (`Cahokia` `18k`, `East St. Louis` `5,2k`, `St. Louis` `2,6k`, `Emerald Acropolis` `1,6k`, `Pulcher` `1,6k`, alongside `Aztalan` `750`); Spoon River towns peak in `1200-1250AD` (`Dickson Mounds` `1,1k`, `Orendorf` `860`, `Larson` `720`); and northern Oneota-Dakota-Illinois centres reach maximum scale in `1450-1600AD` (`Zimmerman` `1,8k`, `Kathio` `820`, `Carcajou Point` `690`) [@benson2009cahokia; @cobb2002vacant; @gibbon2012archaeology].

<figure class="crd-table-figure" id="tab:um-subregion-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Included Sites</th><th class="crd-th">Sum of Site Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Headwaters-Driftless</strong></td><td class="crd-td">51</td><td class="crd-td">17,3k</td><td class="crd-td">Silvernale (950)</td></tr>
<tr><td class="crd-td"><strong>Drift Plains</strong></td><td class="crd-td">39</td><td class="crd-td">15k</td><td class="crd-td">Zimmerman (1,8k)</td></tr>
<tr><td class="crd-td"><strong>American Bottom</strong></td><td class="crd-td">45</td><td class="crd-td">41,2k</td><td class="crd-td">Cahokia (18k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of the 135 catalogued settlements and peak populations across Upper Mississippi HU 07.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Out of `135` catalogued settlements in `upper_mississippi_settlements.json` (whose individual peak populations sum to `73,43k`), Table \ref{tab:gazetteer-upper-mississippi} presents the top `45` centres ranked by peak population descending, down to `360` inhabitants at `Lebanon`.
Figure \ref{fig:settlements-upper-mississippi} displays the full rank-size distribution across all `135` settlements alongside the leading `12` sites, anchored by `Cahokia` (`18k`), `East St. Louis Mound Center` (`5,2k`), `St. Louis Mound Group` (`2,6k`), `Zimmerman` (`1,8k`), `Emerald Acropolis` (`1,6k`) and `Pulcher` (`1,6k`).

<figure class="crd-table-figure" id="tab:gazetteer-upper-mississippi">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cahokia</strong></td><td class="crd-td">Illinois</td><td class="crd-td">American Bottom</td><td class="crd-td">38,66 N, 90,06 W</td><td class="crd-td">800AD-1400AD</td><td class="crd-td">18k (1100AD)</td></tr>
<tr><td class="crd-td"><strong>East St. Louis Mound Center</strong></td><td class="crd-td">Illinois</td><td class="crd-td">American Bottom</td><td class="crd-td">38,63 N, 90,15 W</td><td class="crd-td">300BC-1300AD</td><td class="crd-td">5,2k (1100AD)</td></tr>
<tr><td class="crd-td"><strong>St. Louis Mound Group</strong></td><td class="crd-td">Missouri</td><td class="crd-td">American Bottom</td><td class="crd-td">38,64 N, 90,19 W</td><td class="crd-td">1000AD-1300AD</td><td class="crd-td">2,6k (1100AD)</td></tr>
<tr><td class="crd-td"><strong>Zimmerman</strong></td><td class="crd-td">Illinois</td><td class="crd-td">Drift Plains</td><td class="crd-td">41,32 N, 88,93 W</td><td class="crd-td">1350AD-1600AD</td><td class="crd-td">1,8k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Emerald Acropolis</strong></td><td class="crd-td">Illinois</td><td class="crd-td">American Bottom</td><td class="crd-td">38,63 N, 89,78 W</td><td class="crd-td">1000AD-1200AD</td><td class="crd-td">1,6k (1100AD)</td></tr>
<tr><td class="crd-td"><strong>Pulcher</strong></td><td class="crd-td">Illinois</td><td class="crd-td">American Bottom</td><td class="crd-td">38,49 N, 90,23 W</td><td class="crd-td">950AD-1250AD</td><td class="crd-td">1,6k (1150AD)</td></tr>
<tr><td class="crd-td"><strong>Dickson Mounds</strong></td><td class="crd-td">Illinois</td><td class="crd-td">Drift Plains</td><td class="crd-td">40,39 N, 90,12 W</td><td class="crd-td">1000AD-1300AD</td><td class="crd-td">1,1k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Silvernale</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Headwaters-Driftless</td><td class="crd-td">44,58 N, 92,59 W</td><td class="crd-td">1050AD-1250AD</td><td class="crd-td">950 (1150AD)</td></tr>
<tr><td class="crd-td"><strong>Orendorf</strong></td><td class="crd-td">Illinois</td><td class="crd-td">Drift Plains</td><td class="crd-td">40,49 N, 89,95 W</td><td class="crd-td">1150AD-1300AD</td><td class="crd-td">860 (1220AD)</td></tr>
<tr><td class="crd-td"><strong>Bryan</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Headwaters-Driftless</td><td class="crd-td">44,57 N, 92,62 W</td><td class="crd-td">1000AD-1350AD</td><td class="crd-td">820 (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Kathio</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Headwaters-Driftless</td><td class="crd-td">46,13 N, 93,75 W</td><td class="crd-td">1000AD-1600AD</td><td class="crd-td">820 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Aztalan</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">Headwaters-Driftless</td><td class="crd-td">43,07 N, 88,86 W</td><td class="crd-td">1000AD-1200AD</td><td class="crd-td">750 (1100AD)</td></tr>
<tr><td class="crd-td"><strong>Larson</strong></td><td class="crd-td">Illinois</td><td class="crd-td">Drift Plains</td><td class="crd-td">40,34 N, 90,13 W</td><td class="crd-td">0AD-1350AD</td><td class="crd-td">720 (1250AD)</td></tr>
<tr><td class="crd-td"><strong>Carcajou Point</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">Headwaters-Driftless</td><td class="crd-td">42,9 N, 88,98 W</td><td class="crd-td">1000AD-1500AD</td><td class="crd-td">690 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Albany Mounds</strong></td><td class="crd-td">Illinois</td><td class="crd-td">Drift Plains</td><td class="crd-td">41,78 N, 90,23 W</td><td class="crd-td">0AD-400AD</td><td class="crd-td">680 (200AD)</td></tr>
<tr><td class="crd-td"><strong>Horseshoe Lake</strong></td><td class="crd-td">Illinois</td><td class="crd-td">American Bottom</td><td class="crd-td">38,7 N, 90,07 W</td><td class="crd-td">1000AD-1200AD</td><td class="crd-td">650 (1100AD)</td></tr>
<tr><td class="crd-td"><strong>Trempealeau</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">Headwaters-Driftless</td><td class="crd-td">44,01 N, 91,44 W</td><td class="crd-td">200AD-1300AD</td><td class="crd-td">650 (1100AD)</td></tr>
<tr><td class="crd-td"><strong>Midway Village</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">Headwaters-Driftless</td><td class="crd-td">43,92 N, 91,28 W</td><td class="crd-td">1350AD-1550AD</td><td class="crd-td">640 (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Range</strong></td><td class="crd-td">Illinois</td><td class="crd-td">American Bottom</td><td class="crd-td">38,56 N, 90,12 W</td><td class="crd-td">1500BC-1300AD</td><td class="crd-td">620 (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Valley View</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">Headwaters-Driftless</td><td class="crd-td">43,88 N, 91,17 W</td><td class="crd-td">1450AD-1600AD</td><td class="crd-td">620 (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Crable</strong></td><td class="crd-td">Illinois</td><td class="crd-td">Drift Plains</td><td class="crd-td">40,18 N, 90,22 W</td><td class="crd-td">1250AD-1450AD</td><td class="crd-td">580 (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Tremaine</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">Headwaters-Driftless</td><td class="crd-td">43,96 N, 91,26 W</td><td class="crd-td">350AD-1600AD</td><td class="crd-td">560 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Sand Lake</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">Headwaters-Driftless</td><td class="crd-td">43,88 N, 91,24 W</td><td class="crd-td">1350AD-1550AD</td><td class="crd-td">520 (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Bartron</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Headwaters-Driftless</td><td class="crd-td">44,62 N, 92,64 W</td><td class="crd-td">1050AD-1250AD</td><td class="crd-td">480 (1150AD)</td></tr>
<tr><td class="crd-td"><strong>Diamond Bluff</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">Headwaters-Driftless</td><td class="crd-td">44,65 N, 92,63 W</td><td class="crd-td">950AD-1350AD</td><td class="crd-td">480 (1150AD)</td></tr>
<tr><td class="crd-td"><strong>Fisher</strong></td><td class="crd-td">Illinois</td><td class="crd-td">Drift Plains</td><td class="crd-td">41,32 N, 88,25 W</td><td class="crd-td">1150AD-1450AD</td><td class="crd-td">480 (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Lohmann</strong></td><td class="crd-td">Illinois</td><td class="crd-td">American Bottom</td><td class="crd-td">38,58 N, 90,13 W</td><td class="crd-td">950AD-1150AD</td><td class="crd-td">480 (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Mero</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">Headwaters-Driftless</td><td class="crd-td">44,64 N, 92,61 W</td><td class="crd-td">1000AD-1400AD</td><td class="crd-td">480 (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Hoxie Farm</strong></td><td class="crd-td">Illinois</td><td class="crd-td">Drift Plains</td><td class="crd-td">41,6 N, 87,6 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">460 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lawrenz Gun Club</strong></td><td class="crd-td">Illinois</td><td class="crd-td">Drift Plains</td><td class="crd-td">39,98 N, 90,25 W</td><td class="crd-td">820AD-1325AD</td><td class="crd-td">460 (1100AD)</td></tr>
<tr><td class="crd-td"><strong>Washausen</strong></td><td class="crd-td">Illinois</td><td class="crd-td">American Bottom</td><td class="crd-td">38,44 N, 90,25 W</td><td class="crd-td">850AD-1100AD</td><td class="crd-td">450 (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Fred Edwards</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">Headwaters-Driftless</td><td class="crd-td">42,73 N, 90,72 W</td><td class="crd-td">1000AD-1200AD</td><td class="crd-td">440 (1100AD)</td></tr>
<tr><td class="crd-td"><strong>McKinney</strong></td><td class="crd-td">Iowa</td><td class="crd-td">Drift Plains</td><td class="crd-td">41,22 N, 91,26 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">430 (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Effigy Mounds</strong></td><td class="crd-td">Iowa</td><td class="crd-td">Headwaters-Driftless</td><td class="crd-td">43,09 N, 91,19 W</td><td class="crd-td">300BC-1200AD</td><td class="crd-td">420 (900AD)</td></tr>
<tr><td class="crd-td"><strong>Julien</strong></td><td class="crd-td">Illinois</td><td class="crd-td">American Bottom</td><td class="crd-td">38,53 N, 90,19 W</td><td class="crd-td">950AD-1350AD</td><td class="crd-td">420 (1150AD)</td></tr>
<tr><td class="crd-td"><strong>Kamp Mound</strong></td><td class="crd-td">Illinois</td><td class="crd-td">American Bottom</td><td class="crd-td">39,24 N, 90,61 W</td><td class="crd-td">0AD-300AD</td><td class="crd-td">420 (150AD)</td></tr>
<tr><td class="crd-td"><strong>Overhead</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">Headwaters-Driftless</td><td class="crd-td">43,77 N, 91,21 W</td><td class="crd-td">200AD-1550AD</td><td class="crd-td">420 (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Twenhafel</strong></td><td class="crd-td">Illinois</td><td class="crd-td">American Bottom</td><td class="crd-td">37,78 N, 89,44 W</td><td class="crd-td">1500BC-1400AD</td><td class="crd-td">410 (1000AD)</td></tr>
<tr><td class="crd-td"><strong>BBB Motor</strong></td><td class="crd-td">Illinois</td><td class="crd-td">American Bottom</td><td class="crd-td">38,69 N, 90,03 W</td><td class="crd-td">900AD-1150AD</td><td class="crd-td">380 (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Crescent Bay Hunt Club</strong></td><td class="crd-td">Wisconsin</td><td class="crd-td">Headwaters-Driftless</td><td class="crd-td">42,87 N, 88,96 W</td><td class="crd-td">1000AD-1400AD</td><td class="crd-td">380 (1250AD)</td></tr>
<tr><td class="crd-td"><strong>Palos</strong></td><td class="crd-td">Illinois</td><td class="crd-td">Drift Plains</td><td class="crd-td">41,67 N, 87,84 W</td><td class="crd-td">1450AD-1600AD</td><td class="crd-td">380 (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Rench</strong></td><td class="crd-td">Illinois</td><td class="crd-td">Drift Plains</td><td class="crd-td">40,85 N, 89,57 W</td><td class="crd-td">3000BC-1200AD</td><td class="crd-td">380 (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Blue Earth Cambria</strong></td><td class="crd-td">Minnesota</td><td class="crd-td">Headwaters-Driftless</td><td class="crd-td">44,16 N, 94,01 W</td><td class="crd-td">1000AD-1550AD</td><td class="crd-td">360 (1150AD)</td></tr>
<tr><td class="crd-td"><strong>Janey B. Goode</strong></td><td class="crd-td">Illinois</td><td class="crd-td">American Bottom</td><td class="crd-td">38,51 N, 90,23 W</td><td class="crd-td">650AD-1300AD</td><td class="crd-td">360 (900AD)</td></tr>
<tr><td class="crd-td"><strong>Lebanon</strong></td><td class="crd-td">Illinois</td><td class="crd-td">American Bottom</td><td class="crd-td">38,6 N, 89,81 W</td><td class="crd-td">900AD-1150AD</td><td class="crd-td">360 (1050AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Top 45 Archaic, Hopewell, Mississippian and Oneota settlements in Upper Mississippi HU 07 ranked by peak population descending.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:settlements-upper-mississippi">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-upper-mississippi-settlements/fig4_upper_mississippi_settlements.png" alt="fig:settlements-upper-mississippi" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement hierarchy across all 135 catalogued sites in Upper Mississippi HU 07.</figcaption>
</figure>

## Source Ledger Audit

Table \ref{tab:ledger-upper-mississippi} documents the excluded duplicate-alias consolidation from the `136`-candidate inventory in `upper_mississippi_source_ledger.json5`, complementing the `135` included entries in `upper_mississippi_settlements.json`.

<figure class="crd-table-figure" id="tab:ledger-upper-mississippi">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Status</th><th class="crd-th">Classification</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cahokia</strong></td><td class="crd-td">Illinois</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Cahokia' (CENTAUR Existing Verified Monument Inventory).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded source-ledger candidate for Upper Mississippi HU 07 (out of 136 evaluated records, alongside 135 included settlements).</figcaption>
</figure>

# Limitations

Three limitations affect site-level resolution in HU 07.
First, Greater Cahokia population estimates remain sensitive to assumed wall-trench house longevity and seasonal ceremonial aggregation versus year-round residency [@milner1998cahokia; @pauketat2004cahokia].
Second, `Cahokia`, `East St. Louis Mound Center`, `St. Louis Mound Group`, `Pulcher` and `Modoc Rockshelter` sit near the HU 07-HU 10 seam and require cross-unit deduplication prior to continental Stadestér 2.0 export.
Third, nineteenth-century urban construction in St. Louis and East St. Louis, reservoir flooding and deep agricultural ploughing across the Illinois Valley truncated smaller mound peripheries and shallow floodplain hamlets.

# Sources

<div id="refs"></div>
