---
title: "Settlement Gazetteer of the Pre-Colonial Central Plains (HU 11)"
subtitle: "CENTAUR-II: Mound Centres, Plains Villages and Frontier Pueblos, 0 AD to 1600 AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
bibliography: central_plains_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_central_plains_spatial.png"
hero_caption: "Geographic distribution of the 14 verified settlements across the Central Plains (HU 11) overlaid on the three sub-regional areal masks."
hero_label: "fig:hero-central-plains"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles 14 coordinate-anchored settlement trajectories (`central_plains_settlements.json`) and 3 excluded archaeological candidates (`central_plains_source_ledger.json5`) across the Central Plains (USGS Hydrological Unit 11, 645.292 km²) from 0 AD to 1600 AD. The settlement hierarchy traces four successive urban forms: Lower Mississippi and Plum Bayou Woodland mound centres at Marksville (780 in 200 AD), Greenhouse-Troyville (950 in 600 AD) and Toltec Mounds (1.450 in 800 AD) [@toth1988marksville; @rolingson1998toltec]; Mississippian-Caddoan towns led by Spiro (2.800 in 1300 AD) and Battle Mound (1.650 in 1400 AD) [@brown1996spiro; @perttula1992caddo]; High Plains stone-slab and eastern Pueblo settlements at Antelope Creek (1.200 in 1300 AD), Taos (1.800 in 1500 AD) and Pecos (2.100 in 1500 AD) [@lintz1986antelope; @kessell1979pecos]; and coalescent Wichita towns peaking at Etzanoa (14k in 1600 AD) and Tobias-Quivira (3.600 in 1550 AD) [@wedel1982quivira; @vehik2002wichita].

# Background

Archaeological documentation in HU 11 spans both monumental earthwork complexes in the humid eastern lowlands and dispersed Plains Village or frontier Pueblo communities in the semi-arid west [@wedel1959kansas; @brown1996spiro]. Palaeoindian type sites on the western High Plains, specifically Folsom and Clovis (Blackwater Draw) in New Mexico, represent short-duration bison and mammoth kill episodes around 9000 to 8800 BC without fixed residential architecture [@holliday1997clovis]. Similarly, Coronado's 1541 AD chronicled province of Quivira refers to a regional cluster of Wichita towns rather than a single coordinate, whose component centres are captured individually under Etzanoa and Tobias-Quivira [@wedel1982quivira].

# Methodology

## Inclusion Criteria and Demographic Reconstruction

All 17 documented localities in `central_plains_source_ledger.json5` follow Operation Viscount verification rules. Palaeoindian kill sites are excluded under `seasonal_encampment_unquantified`, and the aggregate 1541 AD province name Quivira is excluded under `unlocated_historical_toponym` to avoid double counting.

For the 14 included settlements, population series combine excavated pithouse or masonry room counts (5 to 7 persons per domestic unit at Antelope Creek, Washita-Duncan, Taos, Picuris and Pecos) [@lintz1986antelope; @drass1997washita; @kessell1979pecos], mound-plaza residential catchment estimates (Spiro, Battle Mound, Toltec Mounds and Carden Bottoms) [@brown1996spiro; @rolingson1998toltec; @perttula1992caddo] and early Spanish expedition league-and-house counts across Wichita settlements [@wedel1982quivira; @vehik2002wichita]. All records carry `.sources: ["CENTAUR"]`.

# Testing and Validation

Gazetteer auditing passed all verification gates at 0 errors at GMT+0:

1. **Ledger Parity**: All 17 ledger entries (14 included, 3 excluded) match `central_plains_settlements.json` keys without residual discrepancies.
2. **Coordinate and Schema Compliance**: All 14 trajectories hold valid `[lat, lng]` coordinates (`31,13 N` to `38,68 N`, `91,82 W` to `105,71 W`), strictly positive integer populations and compliant `["CENTAUR"]` `.sources` arrays.
3. **Hierarchical Coherence**: Settlement sums remain cleanly bounded within sub-regional targets, accounting for 14,5% of total HU 11 population at the 1500 AD peak (23.230 of 160k) and 19,2% in 1600 AD (24.000 of 125k) as rural populations concentrated into nucleated Wichita towns.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Etzanoa</strong></td><td class="crd-td">Kansas</td><td class="crd-td">Middle Arkansas</td><td class="crd-td">37,06 N, 97 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">14.000</td></tr>
<tr><td class="crd-td"><strong>Tobias-Quivira</strong></td><td class="crd-td">Kansas</td><td class="crd-td">Middle Arkansas</td><td class="crd-td">38,34 N, 98,07 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1550AD</td><td class="crd-td">3.600</td></tr>
<tr><td class="crd-td"><strong>Spiro</strong></td><td class="crd-td">Oklahoma</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">35,31 N, 94,57 W</td><td class="crd-td">1000AD-1400AD</td><td class="crd-td">1300AD</td><td class="crd-td">2.800</td></tr>
<tr><td class="crd-td"><strong>Pecos Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">High Plains</td><td class="crd-td">35,55 N, 105,69 W</td><td class="crd-td">1300AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">2.100</td></tr>
<tr><td class="crd-td"><strong>Taos Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">High Plains</td><td class="crd-td">36,44 N, 105,55 W</td><td class="crd-td">1100AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">1.800</td></tr>
<tr><td class="crd-td"><strong>Battle Mound</strong></td><td class="crd-td">Arkansas</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">33,24 N, 93,76 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">1400AD</td><td class="crd-td">1.650</td></tr>
<tr><td class="crd-td"><strong>Carden Bottoms</strong></td><td class="crd-td">Arkansas</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">35,15 N, 92,95 W</td><td class="crd-td">1400AD-1550AD</td><td class="crd-td">1500AD</td><td class="crd-td">1.450</td></tr>
<tr><td class="crd-td"><strong>Toltec Mounds</strong></td><td class="crd-td">Arkansas</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">34,65 N, 92,06 W</td><td class="crd-td">600AD-1000AD</td><td class="crd-td">800AD</td><td class="crd-td">1.450</td></tr>
<tr><td class="crd-td"><strong>Picuris Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">High Plains</td><td class="crd-td">36,2 N, 105,71 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">1500AD</td><td class="crd-td">1.350</td></tr>
<tr><td class="crd-td"><strong>Antelope Creek-Alibates</strong></td><td class="crd-td">Texas</td><td class="crd-td">High Plains</td><td class="crd-td">35,58 N, 101,67 W</td><td class="crd-td">1200AD-1500AD</td><td class="crd-td">1300AD</td><td class="crd-td">1.200</td></tr>
<tr><td class="crd-td"><strong>Greenhouse-Troyville</strong></td><td class="crd-td">Louisiana</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">31,63 N, 91,82 W</td><td class="crd-td">400AD-800AD</td><td class="crd-td">600AD</td><td class="crd-td">950</td></tr>
<tr><td class="crd-td"><strong>Washita-Duncan</strong></td><td class="crd-td">Oklahoma</td><td class="crd-td">Middle Arkansas</td><td class="crd-td">35,33 N, 98,82 W</td><td class="crd-td">1200AD-1400AD</td><td class="crd-td">1400AD</td><td class="crd-td">820</td></tr>
<tr><td class="crd-td"><strong>Marksville</strong></td><td class="crd-td">Louisiana</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">31,13 N, 92,05 W</td><td class="crd-td">0AD-400AD</td><td class="crd-td">200AD</td><td class="crd-td">780</td></tr>
<tr><td class="crd-td"><strong>El Quartelejo</strong></td><td class="crd-td">Kansas</td><td class="crd-td">High Plains</td><td class="crd-td">38,68 N, 100,92 W</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">380</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Verified settlements in the Central Plains (HU 11) gazetteer ordered by peak population.</figcaption>
</figure>

# Results

## Caddoan Mound Centres and Woodland Predecessors

Between 0 AD and 1400 AD, the largest nucleated centres in HU 11 clustered along the Lower Arkansas and Red River corridors (Table 1). Marksville (780 in 200 AD), Greenhouse-Troyville (950 in 600 AD) and Toltec Mounds (1.450 in 800 AD) established multi-mound civic-ceremonial precincts [@toth1988marksville; @rolingson1998toltec]. Spiro (`35,31 N, 94,57 W`) subsequently grew from 850 residents in 1000 AD to 2.400 in 1200 AD and 2.800 at its 1300 AD apex before declining to 1.450 in 1400 AD [@brown1996spiro]. Further south and east, Battle Mound on the Red River Great Bend peaked at 1.650 in 1400 AD (1.050 in 1600 AD) and Carden Bottoms reached 1.450 in 1500 AD [@perttula1992caddo].

<figure class="crd-figure-block" id="fig:sett-central-plains">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-central-plains-settlements/fig4_central_plains_settlements.png" alt="fig:sett-central-plains" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement peaks in the Central Plains (HU 11) gazetteer.</figcaption>
</figure>

## Wichita Coalescence and High Plains Frontier Pueblos

After 1400 AD, settlement gravity shifted onto the Middle Arkansas prairies and Upper Arkansas High Plains edges (Figure 1). Etzanoa (`37,06 N, 97,00 W`) expanded fivefold from 2.800 inhabitants in 1400 AD to 8.500 in 1500 AD and 14k by 1600 AD, paired upstream with Tobias-Quivira (3.200 in 1500 AD, 3.600 in 1550 AD, 2.800 in 1600 AD) [@wedel1982quivira; @vehik2002wichita]. On the western High Plains headwaters, Antelope Creek-Alibates peaked at 1.200 in 1300 AD and contracted to 450 by 1500 AD [@lintz1986antelope], while Pecos Pueblo (2.100 in 1500 AD, 1.500 in 1600 AD), Taos Pueblo (1.800 in 1500 AD, 1.650 in 1600 AD) and Picuris Pueblo (1.350 in 1500 AD) sustained dense multi-storey adobe towns [@kessell1979pecos], alongside the Apache-Pueblo refuge at El Quartelejo (380 in 1600 AD) [@wedel1959kansas].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">State</th><th class="crd-th">Status</th><th class="crd-th">Disposition Reason</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Taos Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Pecos Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Picuris Pueblo</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Toltec Mounds</strong></td><td class="crd-td">Arkansas</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Marksville</strong></td><td class="crd-td">Louisiana</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Greenhouse-Troyville</strong></td><td class="crd-td">Louisiana</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Antelope Creek-Alibates</strong></td><td class="crd-td">Texas</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>El Quartelejo</strong></td><td class="crd-td">Kansas</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Etzanoa</strong></td><td class="crd-td">Kansas</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Tobias-Quivira</strong></td><td class="crd-td">Kansas</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Washita-Duncan</strong></td><td class="crd-td">Oklahoma</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Spiro</strong></td><td class="crd-td">Oklahoma</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Carden Bottoms</strong></td><td class="crd-td">Arkansas</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Battle Mound</strong></td><td class="crd-td">Arkansas</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Folsom</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">excluded</td><td class="crd-td">seasonal encampment unquantified</td></tr>
<tr><td class="crd-td"><strong>Clovis (Blackwater Draw)</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">excluded</td><td class="crd-td">seasonal encampment unquantified</td></tr>
<tr><td class="crd-td"><strong>Quivira (Coronado Town)</strong></td><td class="crd-td">Kansas</td><td class="crd-td">excluded</td><td class="crd-td">unlocated historical toponym</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Source ledger disposition for all 17 Central Plains (HU 11) candidate sites.</figcaption>
</figure>

# Limitations

Etzanoa and Tobias-Quivira carry wider demographic uncertainty bands than excavated Pueblo or Antelope Creek towns because their sprawling grass-lodge compounds span discontinuous river terraces reported in 1541 and 1601 AD Spanish chronicles [@wedel1982quivira; @vehik2002wichita]. Small Washita River and Plains Woodland hamlets lacking concentrated architectural cores remain folded into the continuous radiocarbon rural substratum [@drass1997washita; @kelly2025].

# Sources

<div id="refs"></div>
