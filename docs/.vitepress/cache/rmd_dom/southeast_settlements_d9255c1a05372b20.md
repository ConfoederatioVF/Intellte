---
title: "Settlement Gazetteer of the Southeast Hydrological Unit (HU 03)"
subtitle: "CENTAUR-II: Archaic Shell Rings, Mississippian Capitals and Early Contact Colonies, -2000 BC to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: southeast_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_southeast_spatial.png"
hero_caption: "Locations of nineteen verified settlements across the four areal divisions of the Southeast Hydrological Unit (680,52k km²) from 2000 BC to 1600 AD."
hero_label: "fig:hero-southeast-gaz"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents `19` verified archaeological and early colonial settlements across the Southeast Hydrological Unit (HU 03) from `2000 BC` (`-2000 AD`) to `1600 AD`. Out of `21` candidates evaluated in `southeast_source_ledger.json5`, `19` sites meet spatial and demographic inclusion thresholds in `southeast_settlements.json`, whereas `2` entries (`Windover Bog` and `Calusa Satellite Towns (Tampete / Muspa)`) are excluded as a non-residential charnel pond and unlocated tributary toponyms. The inventory traces four millennia of nucleation from Late Archaic `Stallings Island` (`260` at `2000 BC`) and Middle Woodland `Kolomoki` (`1,65k` at `600 AD`) through major Mississippian capitals (`Etowah` `3,4k`, `Moundville` `3,2k`, `Ocmulgee` `2,1k`, `Mound Key` `1,85k`, `Coosa` `1,6k`, `Lake Jackson Mounds` `1,6k`, `Cofitachequi` `1,45k`, `Mabila` `1,45k` and `Bottle Creek` `1,4k`) to early French and English footholds at `Fort Caroline` (`300` in `1564 AD`) and `Roanoke Island` (`117` in `1587 AD`).

# Background

Archaeological fieldwork across the Atlantic Piedmont and Gulf Coastal Plain confirms repeated cycles of civic mound construction and regional dispersal [@knight1998; @king2003; @kelly2025]. While Kelly et al. [@kelly2025] radiocarbon curves (`N = 1.716`) peak around `1169 AD`, platform-mound capitals (`Etowah`, `Moundville`) reached their maximum residential footprints near `1250-1325 AD` before giving way to sixteenth-century regional provinces (`Cofitachequi`, `Coosa`, `Apalachee`, `Calusa`) encountered by Spanish and English expeditions [@hudson1997; @milanich1995; @quinn1985].

# Methodology

## Inclusion Criteria and Schema Audit

All `21` candidates in `southeast_source_ledger.json5` were checked for exact WGS84 coordinates, multi-phase residential footprint or garrison enumerations and unique non-overlapping boundaries. Verified settlements in `southeast_settlements.json` carry `.sources = ["CENTAUR"]` exclusively, with primary references documented here and in the ledger.

## Settlement Size Calibration

Precontact town counts combine palisaded village hectares, excavated structure floors and mound-precinct residential zones (`Etowah`, `Moundville`, `Town Creek`, `Bottle Creek`, `Mound Key`) [@knight1998; @king2003; @coe1995; @brown2003; @thompson2016]. Sixteenth-century colonial posts (`Fort Caroline`, `Roanoke Island`) reflect documented French Huguenot and English expeditionary rosters [@milanich1995; @quinn1985].

# Testing and Validation

Exhaustiveness checks on `southeast_settlements.json` and `southeast_source_ledger.json5` completed with `0` errors at `GMT+0`:

1. **Included Settlements**: `19` sites (`5` in Carolina Piedmont-Santee, `6` in Georgia Basins, `4` in Alabama-Tombigbee and `4` in Florida-Apalachicola).
2. **Excluded Candidates**: `1` subaqueous Archaic mortuary pond (`Windover Bog`) and `1` collective unlocated Fontaneda village list (`Calusa Satellite Towns`).

<figure class="crd-figure-block" id="fig:se-settlements">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-southeast-settlements/fig4_southeast_settlements.png" alt="fig:se-settlements" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size profile and leading peak populations across the nineteen verified settlements of Southeast (HU 03).</figcaption>
</figure>

# Results

## Included Precontact and Contact Settlements

Table \ref{tab:se-included} enumerates all `19` verified settlements. Earliest occupation appears at `Stallings Island` (`260` at `2000 BC`) on the Savannah River [@sassaman2006] and Middle-Late Woodland `Kolomoki` (`1,65k` at `600 AD`). High Mississippian urbanism centres on `Etowah` (`3,4k` at `1300 AD`), `Moundville` (`3,2k` at `1300 AD`), `Ocmulgee` (`2,1k` at `1100 AD`), `Bottle Creek` (`1,4k` at `1400 AD`), `Irene Mound` (`1,15k` at `1300 AD`) and `Town Creek` (`820` at `1300 AD`) [@king2003; @knight1998; @brown2003; @caldwell1941; @coe1995].

In the late precontact and early contact era (`1450-1600 AD`), `Mound Key` (`1,85k` at `1500 AD`), `Coosa` (`1,6k` at `1500 AD`), `Lake Jackson Mounds` (`1,6k` at `1500 AD`), `Cofitachequi` (`1,45k` at `1500 AD`), `Mabila` (`1,45k` at `1500 AD`), `Werowocomoco` (`1,45k` at `1600 AD`) and `Joara` (`920` at `1550 AD`) dominate their respective provinces [@thompson2016; @hudson1997; @gallivan2016; @beck2016], alongside short-lived European outposts at `Fort Caroline` (`300` in `1564 AD`) and `Roanoke Island` (`117` in `1587 AD`) [@milanich1995; @quinn1985].

<figure class="crd-table-figure" id="tab:se-included">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Hiwassee Island (Georgia Basins)</strong></td><td class="crd-td">1000AD-1500AD</td><td class="crd-td">920 (1500AD)</td><td class="crd-td">35,41, -85,01</td></tr>
<tr><td class="crd-td"><strong>Shiloh Indian Mounds (Alabama-Tombigbee)</strong></td><td class="crd-td">1100AD-1300AD</td><td class="crd-td">980 (1200AD)</td><td class="crd-td">35,15, -88,32</td></tr>
<tr><td class="crd-td"><strong>Town Creek (Carolina Piedmont)</strong></td><td class="crd-td">1100AD-1400AD</td><td class="crd-td">820 (1300AD)</td><td class="crd-td">35,18, -79,93</td></tr>
<tr><td class="crd-td"><strong>Joara (Carolina Piedmont)</strong></td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">920 (1550AD)</td><td class="crd-td">35,78, -81,75</td></tr>
<tr><td class="crd-td"><strong>Cofitachequi (Carolina Piedmont)</strong></td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">1,4k (1500AD)</td><td class="crd-td">34,23, -80,63</td></tr>
<tr><td class="crd-td"><strong>Stallings Island (Carolina Piedmont)</strong></td><td class="crd-td">2000BC-1000BC</td><td class="crd-td">260 (2000BC)</td><td class="crd-td">33,54, -82,06</td></tr>
<tr><td class="crd-td"><strong>Etowah (Georgia Basins)</strong></td><td class="crd-td">1000AD-1500AD</td><td class="crd-td">3,4k (1300AD)</td><td class="crd-td">34,13, -84,81</td></tr>
<tr><td class="crd-td"><strong>Ocmulgee (Georgia Basins)</strong></td><td class="crd-td">1000AD-1500AD</td><td class="crd-td">2,1k (1100AD)</td><td class="crd-td">32,84, -83,6</td></tr>
<tr><td class="crd-td"><strong>Kolomoki (Georgia Basins)</strong></td><td class="crd-td">400AD-800AD</td><td class="crd-td">1,6k (600AD)</td><td class="crd-td">31,47, -84,93</td></tr>
<tr><td class="crd-td"><strong>Coosa (Georgia Basins)</strong></td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1,6k (1500AD)</td><td class="crd-td">34,6, -84,67</td></tr>
<tr><td class="crd-td"><strong>Irene Mound (Georgia Basins)</strong></td><td class="crd-td">1200AD-1400AD</td><td class="crd-td">1,1k (1300AD)</td><td class="crd-td">32,12, -81,14</td></tr>
<tr><td class="crd-td"><strong>Moundville (Alabama-Tombigbee)</strong></td><td class="crd-td">1100AD-1500AD</td><td class="crd-td">3,2k (1300AD)</td><td class="crd-td">33, -87,63</td></tr>
<tr><td class="crd-td"><strong>Bottle Creek (Alabama-Tombigbee)</strong></td><td class="crd-td">1200AD-1550AD</td><td class="crd-td">1,4k (1400AD)</td><td class="crd-td">31, -87,93</td></tr>
<tr><td class="crd-td"><strong>Mabila (Alabama-Tombigbee)</strong></td><td class="crd-td">1500AD-1550AD</td><td class="crd-td">1,4k (1500AD)</td><td class="crd-td">32,02, -87,35</td></tr>
<tr><td class="crd-td"><strong>Lake Jackson Mounds (Florida-Apalachicola)</strong></td><td class="crd-td">1200AD-1500AD</td><td class="crd-td">1,6k (1500AD)</td><td class="crd-td">30,5, -84,32</td></tr>
<tr><td class="crd-td"><strong>Mound Key (Florida-Apalachicola)</strong></td><td class="crd-td">800AD-1600AD</td><td class="crd-td">1,8k (1500AD)</td><td class="crd-td">26,42, -81,86</td></tr>
<tr><td class="crd-td"><strong>Werowocomoco (Carolina Piedmont)</strong></td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1,4k (1600AD)</td><td class="crd-td">37,34, -76,65</td></tr>
<tr><td class="crd-td"><strong>Fort Caroline (Florida-Apalachicola)</strong></td><td class="crd-td">1564AD-1568AD</td><td class="crd-td">300 (1564AD)</td><td class="crd-td">30,39, -81,5</td></tr>
<tr><td class="crd-td"><strong>Roanoke Island (Carolina Piedmont)</strong></td><td class="crd-td">1585AD-1590AD</td><td class="crd-td">117 (1587AD)</td><td class="crd-td">35,91, -75,68</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Verified settlements in Southeast (HU 03) with occupied spans, peak populations and WGS84 coordinates.</figcaption>
</figure>

## Excluded Ledger Candidates

Two candidates in `southeast_source_ledger.json5` are excluded from settlement point totals. `Windover Bog` (Florida) preserves Early Archaic peat-buried human remains (`c. 5400 BC`) without an associated permanent village footprint [@doran2002], while `Calusa Satellite Towns (Tampete / Muspa)` captures sixteenth-century Spanish tributary place names lacking surveyed coordinates outside `Mound Key` [@milanich1995; @thompson2016].

<figure class="crd-table-figure" id="tab:se-excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Period</th><th class="crd-th">Population</th><th class="crd-th">Bounds</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Windover Bog (Florida)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">seasonal encampment unquantified</td><td class="crd-td">Early Archaic subaqueous charnel pond (~5400 BCE) without contiguous residential village footprint.</td></tr>
<tr><td class="crd-td"><strong>Calusa Satellite Towns (Tampete / Muspa) (Florida)</strong></td><td class="crd-td">Excluded</td><td class="crd-td">unlocated historical toponym</td><td class="crd-td">16th-century Fontaneda/Spanish tributary village names lacking precise surveyed coordinates outside Mound Key.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Excluded candidate sites documented in the Southeast (HU 03) source ledger.</figcaption>
</figure>

# Limitations

Notice that `Etowah`, `Coosa`, `Joara`, `Hiwassee Island` and `Shiloh Indian Mounds` straddle drainage margins shared with HU 06 (`Cumberland`); composite Stadestér 2.0 export deduplicates shared settlement keys across units. In addition, dispersed Late Woodland and Lamar farmsteads across interior pinewoods remain represented through sub-regional rural density layers rather than discrete town entries [@anderson1994; @milner2010].

# Sources

<div id="refs"></div>
