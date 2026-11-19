---
title: "Settlement Gazetteer of the Ohio River Hydrological Unit (HU 05)"
subtitle: "CENTAUR-II: Archaic Shell Middens, Adena-Hopewell Earthworks and Fort Ancient-Mississippian Towns, -3000 BC to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: ohio_river_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_ohio_river_spatial.png"
hero_caption: "Locations of eighteen verified settlements across the four areal divisions of the Ohio River Hydrological Unit (424,10k km²) from 3000 BC to 1600 AD."
hero_label: "fig:hero-ohio-river-gaz"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles verified settlement series for the Ohio River Hydrological Unit (HU 05) from `3000 BC` (`-3000 AD`) to `1600 AD`. Of `19` documented archaeological candidates evaluated in `ohio_river_source_ledger.json5`, `18` bounded settlements and monumental precincts enter `ohio_river_settlements.json`, while `1` entry (`Meadowcroft Rockshelter`) is excluded as a seasonal multi-millennia campsite without permanent settlement demography. Enumerated centres span from Green River Late Archaic `Indian Knoll` (`340` at `2000 BC`) and Early-Middle Woodland `Grave Creek Mound` (`420`), `Newark Earthworks` (`1,85k` at `200 AD`), `Hopewell Mound Group` (`1,65k` at `200 AD`) and `Mann Site` (`950` at `200 AD`) to Late Precontact Mississippian, Fort Ancient, Monongahela and Erie capitals led by `Angel Mounds` (`2,8k` at `1300 AD`), `Kincaid Mounds` (`2,4k` at `1300 AD`), `Ripley-Erie` (`1,65k` at `1600 AD`) and `Mound Bottom` (`1,25k` at `1200 AD`).

# Background

Excavations across the Ohio basin record three distinct urban-ceremonial horizons. During the Late Archaic (`3000-1000 BC`), deep riverine shell middens formed along the Green River (`Indian Knoll`) [@webb1974]. Between `500 BC` and `400 AD`, Adena burial mounds (`Grave Creek Mound`) and monumental Hopewell geometric earthwork precincts (`Newark`, `Hopewell Mound Group`, `Fort Ancient`, `Mann Site`) concentrated seasonal populations across southern Ohio and southwestern Indiana [@clay1998; @dancey1997; @charles2006]. Finally, between `1000 AD` and `1600 AD`, Mississippian palisaded towns (`Angel`, `Kincaid`, `Mound Bottom`), Fort Ancient circular villages (`SunWatch`), Oliver-phase enclosures (`Strawtown`), Monongahela stockades (`Johnston Site`) and Erie shore towns (`Ripley-Erie`) carried the basin to its `1295 AD` radiocarbon peak (`N = 1.828`) [@kelly2025; @hilgeman2000; @cook2017; @cobb2002; @sullivan1996].

# Methodology

## Inclusion Criteria and Schema Audit

All `19` candidate records in `ohio_river_source_ledger.json5` were checked for exact WGS84 coordinates, multi-phase residential or ritual-precinct bounds and distinct spatial identities. Retained records in `ohio_river_settlements.json` carry `.sources = ["CENTAUR"]` exclusively, with bibliographic references documented here and in the ledger.

## Settlement Size Calibration

Woodland earthwork figures (`Newark`, `Hopewell Mound Group`, `Grave Creek Mound`, `Mann Site`) reflect sustained resident caretaker and adjacent hamlet clusters rather than peak seasonal festival crowds [@dancey1997; @charles2006]. Mississippian and Fort Ancient town totals (`Angel Mounds`, `Kincaid Mounds`, `SunWatch`, `Mound Bottom`, `Joara`, `Ripley-Erie`) derive from excavated house-basin counts and stockaded village hectares [@hilgeman2000; @cook2017; @cobb2002; @sullivan1996].

# Testing and Validation

Exhaustiveness verification on `ohio_river_settlements.json` and `ohio_river_source_ledger.json5` completed with `0` errors at `GMT+0`:

1. **Included Settlements**: `18` sites (`4` in Upper Ohio-Allegheny, `5` in Scioto-Miami, `7` in Cumberland-Green and `2` in Wabash-Lower Ohio).
2. **Excluded Candidates**: `1` seasonal rockshelter campsite (`Meadowcroft Rockshelter`).

<figure class="crd-figure-block" id="fig:oh-settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-ohio-river-settlements/fig4_ohio_river_settlements.png" alt="fig:oh-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size profile and leading peak populations across the eighteen verified settlements of Ohio River (HU 05).</figcaption>
</figure>

# Results

## Included Woodland, Mississippian and Fort Ancient Settlements

Table \ref{tab:oh-included} presents all `18` verified settlements. Earliest occupation appears at `Indian Knoll` (`220-340`, `3000-1000 BC`) [@webb1974], followed by Adena-Hopewell sites `Grave Creek Mound` (`420` at `0 AD`) [@clay1998], `Newark Earthworks` (`1,85k` at `200 AD`), `Hopewell Mound Group` (`1,65k` at `200 AD`), `Fort Ancient` (`980` at `200 AD`, later Fort Ancient `920` at `1300 AD`) and `Mann Site` (`950` at `200 AD`) [@dancey1997; @charles2006].

Late Precontact centres (`1000-1600 AD`) peak across the lower Ohio and tributaries: `Angel Mounds` reaches `2,8k` (`1300 AD`) [@hilgeman2000], `Kincaid Mounds` reaches `2,4k` (`1300 AD`) [@cobb2002], `Mound Bottom` peaks at `1,25k` (`1200 AD`), `Hiwassee Island` reaches `920` (`1500 AD`) [@lewis1946], `Jonathan Creek` peaks at `780` (`1200 AD`), `Strawtown Enclosure` reaches `720` (`1300 AD`), `Johnston Site` peaks at `580` (`1300 AD`), `SunWatch` reaches `560` (`1300 AD`) [@cook2017] and `Serpent Mound` reaches `480` (`1300 AD`). Peripheral late centres `Moccasin Bluff` (`950` at `1500 AD`), `Joara` (`920` at `1550 AD`) and `Ripley-Erie` (`1,65k` at `1600 AD`) persist past `1500 AD` [@bettarel1973; @beck2016; @sullivan1996].

<figure class="crd-table-figure" id="tab:oh-included">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Hiwassee Island (Cumberland-Green)</strong></td><td class="crd-td">1000AD-1500AD</td><td class="crd-td">920 (1500AD)</td><td class="crd-td">35,41, -85,01</td></tr>
<tr><td class="crd-td"><strong>Mound Bottom (Cumberland-Green)</strong></td><td class="crd-td">1000AD-1300AD</td><td class="crd-td">1,2k (1200AD)</td><td class="crd-td">36,12, -87,11</td></tr>
<tr><td class="crd-td"><strong>Jonathan Creek (Cumberland-Green)</strong></td><td class="crd-td">1100AD-1300AD</td><td class="crd-td">780 (1200AD)</td><td class="crd-td">36,82, -88,24</td></tr>
<tr><td class="crd-td"><strong>Joara (Upper Ohio-Allegheny)</strong></td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">920 (1550AD)</td><td class="crd-td">35,78, -81,75</td></tr>
<tr><td class="crd-td"><strong>Grave Creek Mound (Upper Ohio-Allegheny)</strong></td><td class="crd-td">1000BC-200AD</td><td class="crd-td">420 (0AD)</td><td class="crd-td">39,92, -80,75</td></tr>
<tr><td class="crd-td"><strong>Johnston Site (Upper Ohio-Allegheny)</strong></td><td class="crd-td">1100AD-1400AD</td><td class="crd-td">580 (1300AD)</td><td class="crd-td">40,43, -79,3</td></tr>
<tr><td class="crd-td"><strong>Newark Earthworks (Scioto-Miami)</strong></td><td class="crd-td">0AD-400AD</td><td class="crd-td">1,8k (200AD)</td><td class="crd-td">40,04, -82,43</td></tr>
<tr><td class="crd-td"><strong>Hopewell Mound Group (Scioto-Miami)</strong></td><td class="crd-td">0AD-400AD</td><td class="crd-td">1,6k (200AD)</td><td class="crd-td">39,35, -83,1</td></tr>
<tr><td class="crd-td"><strong>Fort Ancient (Scioto-Miami)</strong></td><td class="crd-td">0AD-1300AD</td><td class="crd-td">980 (200AD)</td><td class="crd-td">39,41, -84,09</td></tr>
<tr><td class="crd-td"><strong>Serpent Mound (Scioto-Miami)</strong></td><td class="crd-td">1000BC-1300AD</td><td class="crd-td">480 (1300AD)</td><td class="crd-td">39,03, -83,43</td></tr>
<tr><td class="crd-td"><strong>SunWatch (Scioto-Miami)</strong></td><td class="crd-td">1200AD-1300AD</td><td class="crd-td">560 (1300AD)</td><td class="crd-td">39,71, -84,23</td></tr>
<tr><td class="crd-td"><strong>Indian Knoll (Cumberland-Green)</strong></td><td class="crd-td">3000BC-1000BC</td><td class="crd-td">340 (2000BC)</td><td class="crd-td">37,27, -86,99</td></tr>
<tr><td class="crd-td"><strong>Angel Mounds (Cumberland-Green)</strong></td><td class="crd-td">1100AD-1400AD</td><td class="crd-td">2,8k (1300AD)</td><td class="crd-td">37,94, -87,46</td></tr>
<tr><td class="crd-td"><strong>Kincaid Mounds (Cumberland-Green)</strong></td><td class="crd-td">1100AD-1400AD</td><td class="crd-td">2,4k (1300AD)</td><td class="crd-td">37,08, -88,49</td></tr>
<tr><td class="crd-td"><strong>Mann Site (Cumberland-Green)</strong></td><td class="crd-td">200AD-400AD</td><td class="crd-td">950 (200AD)</td><td class="crd-td">37,92, -87,83</td></tr>
<tr><td class="crd-td"><strong>Strawtown Enclosure (Wabash-Lower Ohio)</strong></td><td class="crd-td">1200AD-1400AD</td><td class="crd-td">720 (1300AD)</td><td class="crd-td">40,12, -85,95</td></tr>
<tr><td class="crd-td"><strong>Moccasin Bluff (Wabash-Lower Ohio)</strong></td><td class="crd-td">1100AD-1500AD</td><td class="crd-td">950 (1500AD)</td><td class="crd-td">41,84, -86,34</td></tr>
<tr><td class="crd-td"><strong>Ripley-Erie (Upper Ohio-Allegheny)</strong></td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1,6k (1600AD)</td><td class="crd-td">42,27, -79,73</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Verified settlements in Ohio River (HU 05) with occupied spans, peak populations and WGS84 coordinates.</figcaption>
</figure>

## Excluded Ledger Candidates

One entry in `ohio_river_source_ledger.json5`, `Meadowcroft Rockshelter` (Pennsylvania), is excluded from urban point totals because its stratified Palaeolithic-Woodland deposits reflect intermittent seasonal rockshelter visits rather than a permanent nucleated village [@adovasio1999].

<figure class="crd-table-figure" id="tab:oh-excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Meadowcroft Rockshelter (Pennsylvania)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">seasonal encampment unquantified</td><td class="crd-td">Multi-millennia seasonal rockshelter campsite without bounded permanent settlement counts.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Excluded candidate site documented in the Ohio River (HU 05) source ledger.</figcaption>
</figure>

# Limitations

Frontier assignments place `Hiwassee Island`, `Mound Bottom`, `Jonathan Creek`, `Kincaid Mounds` and `Joara` inside HU 05 (`ohio_river_settlements.json`) as well as neighbouring HU 06 or HU 08 gazetteers; macro-regional Stadestér 2.0 export deduplicates identical settlement keys across hydrological boundaries. Notice also that `Indian Knoll` (`oh_kentucky_cumberland_green`) precedes Mississippian settlement by three millennia and represents a concentrated seasonal-to-semi-sedentary shell-midden camp rather than a farming town [@webb1974].

# Sources

<div id="refs"></div>
