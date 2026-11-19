---
title: "Settlement Gazetteer of the Cumberland Hydrological Unit (HU 06)"
subtitle: "CENTAUR-II: Archaic Caves, Mississippian Mound Towns and Cherokee Centres, 8500BC-1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: cumberland_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_cumberland_spatial.png"
hero_caption: "Locations of 46 catalogued Archaic, Woodland, Mississippian and protohistoric towns across the Cumberland-Tennessee Hydrological Unit (110,70k km²) from 8500BC to 1600AD."
hero_label: "fig:hero-cumberland-gaz"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents the `46`-site settlement inventory of the Cumberland (Tennessee) Hydrological Unit (HU 06; `110.698 km²`) from `8500BC` to `1600AD`.
Out of `47` candidate sites audited in `cumberland_source_ledger.json5`, `46` archaeological caves, shell middens, palisaded mound towns and Cherokee settlements (`25` in Tennessee, `11` in Alabama, `6` in North Carolina, `2` in Kentucky, `1` in Illinois and `1` in Virginia) are retained in `cumberland_settlements.json`, while `1` duplicate-alias record (`Toqua`, consolidated within `2 km` into the canonical `Toqua` entry) is excluded.
Catalogued centres span from Early Holocene bluff and cave sites (`Dust Cave` `8500BC-3500BC`, `Russell Cave` `8200BC-1500AD`, `Rose Island` `8200BC-7000BC` and `Stanfield-Worley Bluff Shelter` `8000BC-2000BC`) and Middle Woodland ceremonial hubs (`Florence Mound` `480`, `Old Stone Fort` `480`, `Garden Creek` `440`) to Mississippian and Overhill Cherokee towns led by `Kincaid Mounds` (`2,4k` at `1300AD`), `Hiwassee Island` (`1,2k` at `1400AD`), `Shiloh Indian Mounds` (`1,1k` at `1200AD`), `Toqua` (`1,1k` at `1400AD`), `Citico` (`920`), `Jonathan Creek` (`920`), `Citico (Overhill)` (`780`), `Tomotley` (`750`), `Dallas` (`740`), `Ledford Island` (`690`), `Kituhwa` (`680`) and `Nikwasi` (`620`).

# Background

Excavations across the Tennessee, Little Tennessee, Hiwassee and Elk valleys reveal a multi-stage shift in settlement nucleation between `8500BC` and `1600AD` [@griffin1974; @lewis1946; @welch2006].
Early and Middle Archaic foraging bands returned seasonally to stratified caves and shell-mound shoals at `Dust Cave`, `Russell Cave`, `Stanfield-Worley Bluff Shelter`, `Eva` and `Seven Mile Island` [@griffin1974], before Middle Woodland communities erected ceremonial stone walls and earthen mounds at `Old Stone Fort`, `Florence Mound` and `Oakville Indian Mounds`.
During the twelfth and thirteenth centuries (`1100AD-1300AD`), large Mississippian platform-mound towns flourished across both the lower river (`Kincaid Mounds`, `Shiloh Indian Mounds`, `Jonathan Creek`) and Middle Tennessee (`Hobbs Island`, `Kogers Island`) [@welch2006; @muller1997].

By `1400AD-1500AD`, Vacant Quarter depopulation abandoned the lower and middle reaches [@cobb2002; @cobb2023], shifting demographic weight toward Dallas, Mouse Creek and early Cherokee towns across the Ridge-and-Valley and Appalachian foothills (`Hiwassee Island`, `Toqua`, `Citico`, `Dallas`, `Ledford Island`, `Citico (Overhill)`, `Tomotley`, `Kituhwa`, `Nikwasi` and `Coweeta Creek`) [@polhemus1987; @schroedl1986; @lewis1946].
These upland communities maintained close exchange and political ties with adjacent Coosa, Etowah and Appalachian contact-era paramountcies recorded by sixteenth-century Spanish expeditions [@king2003; @hudson1997; @beck2016].

# Methodology

## Inclusion Criteria and Schema Audit

All `47` candidate sites in `cumberland_source_ledger.json5` were audited for surveyed WGS84 coordinates, dated residential, cave or plaza area series and distinct geographic bounds.
One overlapping coordinate-alias entry within `2 km` of `Toqua` (`40MR6`) was consolidated under `duplicate_alias` in `cumberland_source_ledger.json5`, leaving `46` unique entries in `cumberland_settlements.json`.
All retained records carry canonical `["CENTAUR"]` provenance, reserving detailed monograph citations for this gazetteer and the ledger.

## Mound-Town Population Calibration

Town headcounts integrate palisade-enclosed domestic zone areas, excavated wall-trench house counts (`5-6` occupants per structure adjusted for timber replacement spans) and sixteenth-century Spanish household chronicles where documented across neighbouring Appalachian chiefdoms [@polhemus1987; @muller1997; @hudson1997; @beck2016].
Early Holocene cave and river-bluff shelters (`Dust Cave`, `Russell Cave`, `Stanfield-Worley Bluff Shelter` and `Rose Island`) follow hearth-area foraging group multipliers (`50-65` occupants at peak) calibrated against radiocarbon-dated occupational strata [@griffin1974; @kelly2025].

# Testing and Validation

Ledger reconciliation between `cumberland_settlements.json` and `cumberland_source_ledger.json5` passed with `0` unaccounted candidates and `0` coordinate or schema errors at `GMT+0`:

1. **Included Settlements**: `46` sites (`24` in Upper East Tennessee and Ridge-and-Valley, `15` in Middle Tennessee Bend and Muscle Shoals, and `7` in the Lower Tennessee-Kentucky confluence), whose individual peaks sum to `22,91k` (Table \ref{tab:cu-summary}).
2. **Excluded Candidates**: `1` consolidated duplicate-alias entry (`Toqua`, merged within `2 km` into canonical `Toqua`, making `47` candidates total).

<figure class="crd-table-figure" id="tab:cu-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Included Sites</th><th class="crd-th">Sum of Site Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Upper E. Tennessee</strong></td><td class="crd-td">24</td><td class="crd-td">12,7k</td><td class="crd-td">Hiwassee Island (1,2k)</td></tr>
<tr><td class="crd-td"><strong>Middle Tennessee</strong></td><td class="crd-td">15</td><td class="crd-td">4,5k</td><td class="crd-td">Hobbs Island (560)</td></tr>
<tr><td class="crd-td"><strong>Lower Confluence</strong></td><td class="crd-td">7</td><td class="crd-td">5,7k</td><td class="crd-td">Kincaid Mounds (2,4k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of the 46 catalogued settlements and peak populations in Cumberland HU 06.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:cu-settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-cumberland-settlements/fig4_cumberland_settlements.png" alt="fig:cu-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size profile and leading peak populations across the 46 catalogued settlements of Cumberland HU 06.</figcaption>
</figure>

# Results

## Top 45 Archaic, Mississippian and Cherokee Centres

Out of `46` catalogued settlements in `cumberland_settlements.json`, Table \ref{tab:cu-included} lists the top `45` centres ranked by peak population descending, from `Kincaid Mounds` (`2,4k` at `1300AD`) down to `Rose Island` (`50` at `7000BC`), omitting only rank `46` (`Stanfield-Worley Bluff Shelter`, `50` at `5000BC`, `8000BC-2000BC`) to preserve compact single-gazetteer table pagination.
Figure \ref{fig:cu-settlements} charts the full rank-size distribution across all `46` settlements and the leading `12` sites.
Along the Middle and Lower Tennessee, `Kincaid Mounds` peaks at `2,4k` (`1300AD`), `Shiloh Indian Mounds` at `1,1k` (`1200AD`), `Jonathan Creek` at `920` (`1200AD`) and `Hobbs Island` at `560` (`1350AD`) prior to Vacant Quarter abandonment [@welch2006; @cobb2002; @cobb2023].

In Upper East Tennessee and the Blue Ridge valleys, `Hiwassee Island` peaks at `1,2k` (`1400AD`), `Toqua` at `1,1k` (`1400AD`), `Citico` at `920` (`1400AD`), `Dallas` at `740` (`1450AD`), `Ledford Island` at `690` (`1500AD`) and `Rymer` at `540` (`1500AD`) [@lewis1946; @polhemus1987].
Early Overhill and Middle Cherokee centres continue through `1600AD`, led by `Citico (Overhill)` (`780`), `Tomotley` (`750` at `1500AD`), `Kituhwa` (`680`), `Nikwasi` (`620`) and `Coweeta Creek` (`480` at `1550AD`) [@schroedl1986; @hudson1997].
Synchronously active catalogued settlements across the `46`-site corpus total `6,13k` in `1200AD`, `5,96k` in `1400AD`, `5,42k` in `1500AD` and `4,68k` in `1600AD`.

<figure class="crd-table-figure" id="tab:cu-included">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kincaid Mounds</strong></td><td class="crd-td">Illinois</td><td class="crd-td">Lower Confluence</td><td class="crd-td">37,08 N, 88,49 W</td><td class="crd-td">1100AD-1400AD</td><td class="crd-td">2,4k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Hiwassee Island</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Upper E. Tennessee</td><td class="crd-td">35,41 N, 85,01 W</td><td class="crd-td">1000AD-1500AD</td><td class="crd-td">1,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Shiloh Indian Mounds</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Lower Confluence</td><td class="crd-td">35,15 N, 88,32 W</td><td class="crd-td">1100AD-1300AD</td><td class="crd-td">1,1k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Toqua</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Upper E. Tennessee</td><td class="crd-td">35,57 N, 84,18 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">1,1k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Citico</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Upper E. Tennessee</td><td class="crd-td">35,07 N, 85,28 W</td><td class="crd-td">1250AD-1550AD</td><td class="crd-td">920 (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Jonathan Creek</strong></td><td class="crd-td">Kentucky</td><td class="crd-td">Lower Confluence</td><td class="crd-td">36,82 N, 88,24 W</td><td class="crd-td">1100AD-1300AD</td><td class="crd-td">920 (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Citico (Overhill)</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Upper E. Tennessee</td><td class="crd-td">35,55 N, 84,1 W</td><td class="crd-td">1350AD-1600AD</td><td class="crd-td">780 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Tomotley</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Upper E. Tennessee</td><td class="crd-td">35,54 N, 84,14 W</td><td class="crd-td">1250AD-1600AD</td><td class="crd-td">750 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Dallas</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Upper E. Tennessee</td><td class="crd-td">35,16 N, 85,16 W</td><td class="crd-td">1300AD-1550AD</td><td class="crd-td">740 (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Ledford Island</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Upper E. Tennessee</td><td class="crd-td">35,33 N, 84,84 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">690 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kituhwa</strong></td><td class="crd-td">North Carolina</td><td class="crd-td">Upper E. Tennessee</td><td class="crd-td">35,44 N, 83,4 W</td><td class="crd-td">1100AD-1600AD</td><td class="crd-td">680 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Nikwasi</strong></td><td class="crd-td">North Carolina</td><td class="crd-td">Upper E. Tennessee</td><td class="crd-td">35,19 N, 83,37 W</td><td class="crd-td">1100AD-1600AD</td><td class="crd-td">620 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Hobbs Island</strong></td><td class="crd-td">Alabama</td><td class="crd-td">Middle Tennessee</td><td class="crd-td">34,54 N, 86,53 W</td><td class="crd-td">1100AD-1550AD</td><td class="crd-td">560 (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Rymer</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Upper E. Tennessee</td><td class="crd-td">35,3 N, 84,81 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">540 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bussell Island</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Upper E. Tennessee</td><td class="crd-td">35,78 N, 84,26 W</td><td class="crd-td">3000BC-1450AD</td><td class="crd-td">480 (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Coweeta Creek</strong></td><td class="crd-td">North Carolina</td><td class="crd-td">Upper E. Tennessee</td><td class="crd-td">35,09 N, 83,41 W</td><td class="crd-td">1350AD-1600AD</td><td class="crd-td">480 (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Davis</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Upper E. Tennessee</td><td class="crd-td">35,13 N, 85,17 W</td><td class="crd-td">1100AD-1500AD</td><td class="crd-td">480 (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Florence Mound</strong></td><td class="crd-td">Alabama</td><td class="crd-td">Middle Tennessee</td><td class="crd-td">34,79 N, 87,67 W</td><td class="crd-td">0AD-400AD</td><td class="crd-td">480 (200AD)</td></tr>
<tr><td class="crd-td"><strong>Old Stone Fort</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Middle Tennessee</td><td class="crd-td">35,48 N, 86,11 W</td><td class="crd-td">50AD-450AD</td><td class="crd-td">480 (250AD)</td></tr>
<tr><td class="crd-td"><strong>Swallow Bluff</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Lower Confluence</td><td class="crd-td">35,33 N, 88,15 W</td><td class="crd-td">1100AD-1350AD</td><td class="crd-td">480 (1250AD)</td></tr>
<tr><td class="crd-td"><strong>Kogers Island</strong></td><td class="crd-td">Alabama</td><td class="crd-td">Middle Tennessee</td><td class="crd-td">34,81 N, 87,92 W</td><td class="crd-td">1150AD-1500AD</td><td class="crd-td">460 (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Peachtree</strong></td><td class="crd-td">North Carolina</td><td class="crd-td">Upper E. Tennessee</td><td class="crd-td">35,18 N, 83,95 W</td><td class="crd-td">1100AD-1550AD</td><td class="crd-td">460 (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Garden Creek</strong></td><td class="crd-td">North Carolina</td><td class="crd-td">Upper E. Tennessee</td><td class="crd-td">35,53 N, 82,89 W</td><td class="crd-td">100AD-1200AD</td><td class="crd-td">440 (400AD)</td></tr>
<tr><td class="crd-td"><strong>Warren Wilson</strong></td><td class="crd-td">North Carolina</td><td class="crd-td">Upper E. Tennessee</td><td class="crd-td">35,61 N, 82,44 W</td><td class="crd-td">1000BC-1450AD</td><td class="crd-td">420 (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Oakville Indian Mounds</strong></td><td class="crd-td">Alabama</td><td class="crd-td">Middle Tennessee</td><td class="crd-td">34,43 N, 87,17 W</td><td class="crd-td">100BC-450AD</td><td class="crd-td">380 (200AD)</td></tr>
<tr><td class="crd-td"><strong>Chambers</strong></td><td class="crd-td">Kentucky</td><td class="crd-td">Lower Confluence</td><td class="crd-td">36,88 N, 88,34 W</td><td class="crd-td">900AD-1500AD</td><td class="crd-td">360 (1250AD)</td></tr>
<tr><td class="crd-td"><strong>Murphy Hill</strong></td><td class="crd-td">Alabama</td><td class="crd-td">Middle Tennessee</td><td class="crd-td">34,37 N, 86,31 W</td><td class="crd-td">0AD-1350AD</td><td class="crd-td">360 (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Hoge</strong></td><td class="crd-td">Virginia</td><td class="crd-td">Upper E. Tennessee</td><td class="crd-td">37,13 N, 81,56 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">340 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>McDonald</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Upper E. Tennessee</td><td class="crd-td">35,61 N, 84,92 W</td><td class="crd-td">800AD-1300AD</td><td class="crd-td">340 (1100AD)</td></tr>
<tr><td class="crd-td"><strong>Seven Mile Island</strong></td><td class="crd-td">Alabama</td><td class="crd-td">Middle Tennessee</td><td class="crd-td">34,77 N, 87,84 W</td><td class="crd-td">6000BC-1300AD</td><td class="crd-td">340 (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Coffee Bluff</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Lower Confluence</td><td class="crd-td">35,23 N, 88,3 W</td><td class="crd-td">2000BC-1250AD</td><td class="crd-td">320 (1250AD)</td></tr>
<tr><td class="crd-td"><strong>Owl Hollow</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Middle Tennessee</td><td class="crd-td">35,15 N, 86,1 W</td><td class="crd-td">150AD-800AD</td><td class="crd-td">320 (450AD)</td></tr>
<tr><td class="crd-td"><strong>Martin Farm</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Upper E. Tennessee</td><td class="crd-td">35,55 N, 84,16 W</td><td class="crd-td">500AD-1200AD</td><td class="crd-td">280 (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Phipps Bend</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Upper E. Tennessee</td><td class="crd-td">36,44 N, 82,95 W</td><td class="crd-td">1500BC-1250AD</td><td class="crd-td">280 (1250AD)</td></tr>
<tr><td class="crd-td"><strong>Candy Creek</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Upper E. Tennessee</td><td class="crd-td">35,31 N, 84,84 W</td><td class="crd-td">300AD-1100AD</td><td class="crd-td">260 (700AD)</td></tr>
<tr><td class="crd-td"><strong>Walling</strong></td><td class="crd-td">Alabama</td><td class="crd-td">Middle Tennessee</td><td class="crd-td">34,76 N, 86,55 W</td><td class="crd-td">300BC-450AD</td><td class="crd-td">260 (200AD)</td></tr>
<tr><td class="crd-td"><strong>Flint River</strong></td><td class="crd-td">Alabama</td><td class="crd-td">Middle Tennessee</td><td class="crd-td">34,57 N, 86,48 W</td><td class="crd-td">3000BC-1200AD</td><td class="crd-td">240 (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Yearwood</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Middle Tennessee</td><td class="crd-td">35,14 N, 86,59 W</td><td class="crd-td">400BC-700AD</td><td class="crd-td">240 (200AD)</td></tr>
<tr><td class="crd-td"><strong>Banks III</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Middle Tennessee</td><td class="crd-td">35,49 N, 86,07 W</td><td class="crd-td">4000BC-1250AD</td><td class="crd-td">210 (1250AD)</td></tr>
<tr><td class="crd-td"><strong>Icehouse Bottom</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Upper E. Tennessee</td><td class="crd-td">35,62 N, 84,18 W</td><td class="crd-td">7500BC-750AD</td><td class="crd-td">210 (300AD)</td></tr>
<tr><td class="crd-td"><strong>Higgs</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Upper E. Tennessee</td><td class="crd-td">35,73 N, 84,31 W</td><td class="crd-td">2200BC-700AD</td><td class="crd-td">190 (700AD)</td></tr>
<tr><td class="crd-td"><strong>Eva</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Lower Confluence</td><td class="crd-td">36,07 N, 87,98 W</td><td class="crd-td">6000BC-1500BC</td><td class="crd-td">95 (3500BC)</td></tr>
<tr><td class="crd-td"><strong>Russell Cave</strong></td><td class="crd-td">Alabama</td><td class="crd-td">Middle Tennessee</td><td class="crd-td">34,97 N, 85,82 W</td><td class="crd-td">8200BC-1500AD</td><td class="crd-td">65 (4000BC)</td></tr>
<tr><td class="crd-td"><strong>Dust Cave</strong></td><td class="crd-td">Alabama</td><td class="crd-td">Middle Tennessee</td><td class="crd-td">34,78 N, 87,72 W</td><td class="crd-td">8500BC-3500BC</td><td class="crd-td">55 (6000BC)</td></tr>
<tr><td class="crd-td"><strong>Rose Island</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">Upper E. Tennessee</td><td class="crd-td">35,59 N, 84,2 W</td><td class="crd-td">8200BC-7000BC</td><td class="crd-td">50 (7000BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Top 45 settlements in Cumberland HU 06 ranked by peak population descending, with coordinates, active spans and peak dates.</figcaption>
</figure>

## Excluded Ledger Candidates

One candidate entry in `cumberland_source_ledger.json5` is excluded from point totals to prevent double-counting (Table \ref{tab:cu-excluded}): a duplicate coordinate-alias entry for `Toqua` (`40MR6`) merged within `2 km` into the canonical `Toqua` record (`1,1k` at `1400AD`) [@polhemus1987; @schroedl1986].

<figure class="crd-table-figure" id="tab:cu-excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Classification</th><th class="crd-th">Ledger Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Toqua</strong></td><td class="crd-td">Tennessee</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Toqua' (Polhemus 1987; Schroedl 1998 (40MR6)).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded duplicate-alias record documented in the Cumberland HU 06 source ledger (47 candidates total).</figcaption>
</figure>

# Limitations

Frontier overlap places borderland capitals such as `Kincaid Mounds` (along the Ohio River edge in southern Illinois) and `Kituhwa` and `Nikwasi` (along the Little Tennessee headwaters) within the HU 06 gazetteer perimeter; mosaic reconciliation with HU 03 (`Southeast`) and HU 05 (`Ohio River`) prevents double-counting in continental pixel sums.
In addition, twentieth-century reservoir flooding beneath Tennessee Valley Authority impoundments submerged unexcavated bottomland hamlets, leaving dispersed farmsteads represented through sub-regional rural carrying capacities rather than individual site rows [@welch2006; @cobb2023].

# Sources

<div id="refs"></div>
