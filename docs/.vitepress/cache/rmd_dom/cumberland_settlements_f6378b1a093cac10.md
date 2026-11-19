---
title: "Settlement Gazetteer of the Cumberland Hydrological Unit (HU 06)"
subtitle: "CENTAUR-II: Mississippian Mound Towns and Overhill Cherokee Centres, 1000 to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: cumberland_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_cumberland_spatial.png"
hero_caption: "Locations of ten verified Mississippian and protohistoric towns across the Cumberland-Tennessee Hydrological Unit (110,70k km²) from 1000 AD to 1600 AD."
hero_label: "fig:hero-cumberland-gaz"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents the verified settlement inventory of the Cumberland (Tennessee) Hydrological Unit (HU 06) from `1000 AD` to `1600 AD`. Out of `12` candidate sites audited in `cumberland_source_ledger.json5`, `10` palisaded mound towns and protohistoric villages are retained in `cumberland_settlements.json`, while `2` entries (`Russell Cave` and `Chiaha (De Soto)`) are excluded as seasonal rockshelter camps or unlocated chronicle toponyms. Enumerated centres span from `Etowah` (`3,4k` at `1300 AD`), `Kincaid Mounds` (`2,4k` at `1300 AD`) and `Coosa` (`1,6k` at `1500 AD`) to Middle-Lower Tennessee capitals `Mound Bottom` (`1,25k`), `Shiloh Indian Mounds` (`980`), `Toqua` (`950`), `Hiwassee Island` (`920`), `Joara` (`920`), `Jonathan Creek` (`780`) and early Overhill Cherokee `Chota-Tanasi` (`520` at `1600 AD`).

# Background

Excavations across the Tennessee, Harpeth and adjacent Coosa-Catawba valleys show a marked shift in settlement hierarchy between `1000 AD` and `1600 AD` [@lewis1946; @welch2006; @king2003]. During the twelfth and thirteenth centuries (`1100-1300 AD`), large platform-mound centres flourished across both the lower river (`Shiloh`, `Jonathan Creek`, `Kincaid`) and Middle Tennessee (`Mound Bottom`). By `1400-1500 AD`, Vacant Quarter depopulation abandoned the lower and middle reaches [@cobb2002; @cobb2023], concentrating settlement in Dallas, Mouse Creek, Lamar and early Cherokee towns across the Ridge-and-Valley and Appalachian foothills [@polhemus1987; @schroedl1986; @beck2016].

# Methodology

## Inclusion Criteria and Schema Audit

Sites listed in `cumberland_source_ledger.json5` enter `cumberland_settlements.json` only when they provide surveyed WGS84 coordinates, multi-phase structural or plaza area estimates and distinct site boundaries. All retained records carry `.sources = ["CENTAUR"]`, reserving monograph citations for this gazetteer and the ledger.

## Mound-Town Population Calibration

Town headcounts integrate palisade-enclosed domestic zone areas, excavated wall-trench house counts (`5-6` occupants per structure) and sixteenth-century Spanish household descriptions where documented (`Coosa`, `Joara`) [@polhemus1987; @muller1997; @hudson1997; @beck2016].

# Testing and Validation

Verification against `cumberland_settlements.json` and `cumberland_source_ledger.json5` completed with `0` errors at `GMT+0`:

1. **Included Settlements**: `10` towns (`6` in Upper East Tennessee and Appalachian borderlands, `1` in Middle Tennessee-Muscle Shoals and `3` in the Lower Tennessee-Kentucky confluence).
2. **Excluded Candidates**: `1` unquantified seasonal rockshelter (`Russell Cave`) and `1` unresolved De Soto island toponym (`Chiaha`).

<figure class="crd-figure-block" id="fig:cu-settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-cumberland-settlements/fig4_cumberland_settlements.png" alt="fig:cu-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size profile and leading peak populations across the ten verified settlements of Cumberland (HU 06).</figcaption>
</figure>

# Results

## Included Mound Towns and Historic Centres

Table \ref{tab:cu-included} lists all `10` verified settlements. `Etowah` (`3,4k` at `1300 AD`) and `Kincaid Mounds` (`2,4k` at `1300 AD`) represent the largest Mississippian regional capitals within the HU 06 perimeter and frontier [@king2003; @muller1997; @cobb2002]. Along the Middle and Lower Tennessee, `Mound Bottom` peaks at `1,25k` (`1200 AD`), `Shiloh Indian Mounds` at `980` (`1200 AD`) and `Jonathan Creek` at `780` (`1200 AD`) prior to `1400 AD` abandonment [@welch2006; @cobb2023].

In Upper East Tennessee and the Blue Ridge borderlands, `Toqua` reaches `950` in `1400 AD` [@polhemus1987], `Hiwassee Island` peaks at `920` in `1500 AD` [@lewis1946], `Coosa` (`Little Egypt`) peaks at `1,6k` in `1500 AD` [@hudson1997] and `Joara` (`Berry Site`) reaches `920` in `1550 AD` [@beck2016], while `Chota-Tanasi` emerges at `450` in `1500 AD` and grows to `520` by `1600 AD` [@schroedl1986].

<figure class="crd-table-figure" id="tab:cu-included">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Hiwassee Island (Upper E. Tennessee)</strong></td><td class="crd-td">1000-1500AD</td><td class="crd-td">920 (1500AD)</td><td class="crd-td">35,41, -85,01</td></tr>
<tr><td class="crd-td"><strong>Toqua (Upper E. Tennessee)</strong></td><td class="crd-td">1200-1600AD</td><td class="crd-td">950 (1400AD)</td><td class="crd-td">35,57, -84,18</td></tr>
<tr><td class="crd-td"><strong>Chota-Tanasi (Upper E. Tennessee)</strong></td><td class="crd-td">1500-1600AD</td><td class="crd-td">520 (1600AD)</td><td class="crd-td">35,55, -84,13</td></tr>
<tr><td class="crd-td"><strong>Mound Bottom (Middle Tennessee)</strong></td><td class="crd-td">1000-1300AD</td><td class="crd-td">1,2k (1200AD)</td><td class="crd-td">36,12, -87,11</td></tr>
<tr><td class="crd-td"><strong>Shiloh Indian Mounds (Lower Confluence)</strong></td><td class="crd-td">1100-1300AD</td><td class="crd-td">980 (1200AD)</td><td class="crd-td">35,15, -88,32</td></tr>
<tr><td class="crd-td"><strong>Jonathan Creek (Lower Confluence)</strong></td><td class="crd-td">1100-1300AD</td><td class="crd-td">780 (1200AD)</td><td class="crd-td">36,82, -88,24</td></tr>
<tr><td class="crd-td"><strong>Joara (Upper E. Tennessee)</strong></td><td class="crd-td">1400-1600AD</td><td class="crd-td">920 (1550AD)</td><td class="crd-td">35,78, -81,75</td></tr>
<tr><td class="crd-td"><strong>Etowah (Upper E. Tennessee)</strong></td><td class="crd-td">1000-1500AD</td><td class="crd-td">3,4k (1300AD)</td><td class="crd-td">34,13, -84,81</td></tr>
<tr><td class="crd-td"><strong>Coosa (Upper E. Tennessee)</strong></td><td class="crd-td">1400-1600AD</td><td class="crd-td">1,6k (1500AD)</td><td class="crd-td">34,6, -84,67</td></tr>
<tr><td class="crd-td"><strong>Kincaid Mounds (Lower Confluence)</strong></td><td class="crd-td">1100-1400AD</td><td class="crd-td">2,4k (1300AD)</td><td class="crd-td">37,08, -88,49</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Verified settlements in Cumberland (HU 06) with occupied spans, peak populations and WGS84 coordinates.</figcaption>
</figure>

## Excluded Ledger Candidates

Two candidate entries in `cumberland_source_ledger.json5` are excluded from settlement totals. `Russell Cave` (Alabama) functioned as a seasonal Archaic and Woodland winter shelter lacking village-scale demography [@griffin1974], whereas `Chiaha (De Soto)` (Tennessee) remains split between competing French Broad archaeological candidates (`Zimmerman's Island` and `McMahan`) [@hudson1997].

<figure class="crd-table-figure" id="tab:cu-excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Russell Cave (Alabama)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">seasonal encampment unquantified</td><td class="crd-td">Archaic-Woodland seasonal winter rockshelter camp lacking village-scale headcount.</td></tr>
<tr><td class="crd-td"><strong>Chiaha (De Soto) (Tennessee)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">unlocated historical toponym</td><td class="crd-td">1540 De Soto island town on the French Broad/Tennessee River with competing archaeological candidates (Zimmerman's Island vs. McMahan).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Excluded candidate sites documented in the Cumberland (HU 06) source ledger.</figcaption>
</figure>

# Limitations

Frontier overlap assigns borderland capitals such as `Etowah`, `Coosa`, `Joara` and `Kincaid Mounds` within the HU 06 gazetteer perimeter; mosaic reconciliation with HU 03 (`Southeast`) and HU 05 (`Ohio River`) prevents double-counting in continental pixel sums. Several Middle Cumberland stone-box villages (`Castalian Springs`, `Sellars Farm`) remain aggregated within rural catchment densities pending unified house-count re-excavation [@cobb2023].

# Sources

<div id="refs"></div>
