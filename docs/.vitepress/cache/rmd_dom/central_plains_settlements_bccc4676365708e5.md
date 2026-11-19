---
title: "Settlement Gazetteer of the Pre-Colonial Central Plains (HU 11)"
subtitle: "CENTAUR-II: Mound Centres, Plains Villages and Coalescent Towns, 9500BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
bibliography: central_plains_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_central_plains_spatial.png"
hero_caption: "Geographic distribution of the 68 catalogued settlements across the Central Plains (HU 11) overlaid on the three sub-regional areal masks."
hero_label: "fig:hero-central-plains"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles `68` coordinate-anchored settlement trajectories (`central_plains_settlements.json`) and `1` excluded candidate (`central_plains_source_ledger.json5`, `69` total reviewed entries) across the Central Plains (USGS Hydrological Unit 11, `645.292 km²`) from `9500BC` to `1600AD`.

The archaeological sequence spans High Plains Palaeoindian bison-kill locales (`Miami`, `Cooper Bison Kill`, `Lipscomb`, `Folsom`, `Olsen-Chubbuck`, `Winger`) [@holliday1997clovis], Woodland floodplain earthworks at `Toltec Mounds` (`1.450` at `800AD`) [@rolingson1998toltec], Caddoan mound complexes led by `Spiro` (`3.100` at `1350AD`), `Battle Mound` (`1.650` at `1400AD`), `Carden Bottoms` (`1.450` at `1500AD`) and `Hatchel` (`1.100` at `1450AD`) [@brown1996spiro; @perttula1992caddo], Plains Village settlements at `Antelope Creek-Alibates` (`1.200` at `1300AD`) and `Washita-Duncan` (`820` at `1400AD`) [@lintz1986antelope; @drass1997washita] and coalescent Wichita towns peaking at `Etzanoa` (`14,0k` at `1600AD`) and `Tobias-Quivira` (`3.600` at `1550AD`) [@wedel1982quivira; @vehik2002wichita].

# Background

Archaeological documentation across HU 11 bridges humid Arkansas-Red alluvial mound landscapes in the east and semi-arid High Plains canyons in the west [@wedel1959kansas; @brown1996spiro]. Early Holocene western sites (`Miami` `9500BC-9200BC`, `Folsom` `8700BC-8300BC`, `Lipscomb` `8900BC-8600BC`) capture specialised *Bison antiquus* procurement events adjacent to classic Llano Estacado Clovis localities [@holliday1997clovis].

In the eastern bottomlands, Plum Bayou mounds at `Toltec Mounds` (`600AD-1000AD`) evolved alongside Lower Mississippi Valley Middle Woodland centres [@toth1988marksville; @rolingson1998toltec] prior to Caddoan florescence along the Arkansas and Red rivers [@brown1996spiro; @perttula1992caddo]. Western Panhandle quarries at `Antelope Creek-Alibates` simultaneously channeled chert and maize across Southern Plains trade paths linked westward toward Upper Rio Grande frontier pueblos [@lintz1986antelope; @kessell1979pecos].

Following fifteenth-century abandonment of small High Plains and Washita farmsteads, Arkansas-Walnut and Little Arkansas river terraces supported aggregated Wichita grass-lodge towns documented by Spanish entradas at `1541AD` and `1601AD` [@wedel1982quivira; @vehik2002wichita].

# Methodology

## Inclusion Criteria and Demographic Reconstruction

All `69` documented candidates in `central_plains_source_ledger.json5` follow Operation Viscount attribution rules. `68` distinct coordinates pass spatial deduplication (`18` High Plains, `23` Middle Arkansas and `27` Lower Arkansas), while `1` duplicate alias of `Battle Mound` within `2 km` is excluded under `duplicate_alias` to prevent double counting.

For the `68` included entries, population series integrate three independent evidentiary streams:

1. **Stone-Slab and Earthlodge Room Counts**: Excavated floor plans and household multipliers (`5-7` persons per residential structure) at `Antelope Creek-Alibates`, `Buried City`, `Washita-Duncan` and Plains Village components [@lintz1986antelope; @drass1997washita; @wedel1959kansas].
2. **Mound-Plaza Catchment Areas**: Residential precinct density reconstructions across `Toltec Mounds`, `Spiro`, `Harlan`, `Crenshaw`, `Battle Mound`, `Hatchel` and `Carden Bottoms` [@rolingson1998toltec; @brown1996spiro; @perttula1992caddo].
3. **Chronicled League-and-Lodge Tallies**: Cross-checked `1541AD` and `1601AD` Spanish observations paired with Great Bend excavated lodge rings across `Etzanoa`, `Tobias-Quivira`, `Tobias`, `Little River` and `Malone` [@wedel1982quivira; @vehik2002wichita].

All entries carry `.sources: ["CENTAUR"]` and subtract cleanly from rural radiocarbon suitability grids across every benchmark [@kelly2025].

# Testing and Validation

Gazetteer reconciliation passed all structural checks with `0` errors at `GMT+0`:

1. **Ledger Parity**: All `69` ledger entries (`68` included, `1` excluded duplicate alias) reconcile without gaps against `central_plains_settlements.json`.
2. **Coordinate and Schema Integrity**: All `68` trajectories hold valid `[lat, lng]` coordinates (`31,73 N` to `38,68 N`, `90,51 W` to `104,58 W`), strictly positive integer populations and compliant `["CENTAUR"]` `.sources` tags.
3. **Hierarchical Coherence**: Summed settlement populations stay bounded below sub-regional totals across all `23` horizons, rising from `95` inhabitants (`2,24%` of `4.250`) at `8000BC` and `6.600` (`4,30%`) at `1200AD` to `9.680` (`6,12%` of `158,2k`) in `1300AD`, `15.770` (`9,86%` of `160,0k`) in `1500AD` and `27.440` (`21,95%` of `125,0k`) in `1600AD`.

<figure class="crd-table-figure" id="tab:cp-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Sub-region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Etzanoa</strong></td><td class="crd-td">Kansas</td><td class="crd-td">Middle Arkansas</td><td class="crd-td">37,06 N, 97 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">14.000</td></tr>
<tr><td class="crd-td"><strong>Tobias-Quivira</strong></td><td class="crd-td">Kansas</td><td class="crd-td">Middle Arkansas</td><td class="crd-td">38,34 N, 98,07 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1550AD</td><td class="crd-td">3.600</td></tr>
<tr><td class="crd-td"><strong>Spiro</strong></td><td class="crd-td">Oklahoma</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">35,31 N, 94,57 W</td><td class="crd-td">900AD-1450AD</td><td class="crd-td">1350AD</td><td class="crd-td">3.100</td></tr>
<tr><td class="crd-td"><strong>Battle Mound</strong></td><td class="crd-td">Arkansas</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">33,24 N, 93,76 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">1400AD</td><td class="crd-td">1.650</td></tr>
<tr><td class="crd-td"><strong>Carden Bottoms</strong></td><td class="crd-td">Arkansas</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">35,15 N, 92,95 W</td><td class="crd-td">1400AD-1550AD</td><td class="crd-td">1500AD</td><td class="crd-td">1.450</td></tr>
<tr><td class="crd-td"><strong>Toltec Mounds</strong></td><td class="crd-td">Arkansas</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">34,65 N, 92,06 W</td><td class="crd-td">600AD-1000AD</td><td class="crd-td">800AD</td><td class="crd-td">1.450</td></tr>
<tr><td class="crd-td"><strong>Tobias</strong></td><td class="crd-td">Kansas</td><td class="crd-td">Middle Arkansas</td><td class="crd-td">38,48 N, 98,12 W</td><td class="crd-td">1450AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.400</td></tr>
<tr><td class="crd-td"><strong>Antelope Creek-Alibates</strong></td><td class="crd-td">Texas</td><td class="crd-td">High Plains</td><td class="crd-td">35,58 N, 101,67 W</td><td class="crd-td">8000BC-1500AD</td><td class="crd-td">1300AD</td><td class="crd-td">1.200</td></tr>
<tr><td class="crd-td"><strong>Little River</strong></td><td class="crd-td">Kansas</td><td class="crd-td">Middle Arkansas</td><td class="crd-td">38,35 N, 98,08 W</td><td class="crd-td">1480AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.180</td></tr>
<tr><td class="crd-td"><strong>Hatchel</strong></td><td class="crd-td">Texas</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">33,55 N, 94,08 W</td><td class="crd-td">1200AD-1600AD</td><td class="crd-td">1450AD</td><td class="crd-td">1.100</td></tr>
<tr><td class="crd-td"><strong>Malone</strong></td><td class="crd-td">Kansas</td><td class="crd-td">Middle Arkansas</td><td class="crd-td">38,37 N, 98,2 W</td><td class="crd-td">1450AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">1.100</td></tr>
<tr><td class="crd-td"><strong>Crenshaw</strong></td><td class="crd-td">Arkansas</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">33,5 N, 93,75 W</td><td class="crd-td">950AD-1350AD</td><td class="crd-td">1150AD</td><td class="crd-td">980</td></tr>
<tr><td class="crd-td"><strong>Deer Creek</strong></td><td class="crd-td">Oklahoma</td><td class="crd-td">Middle Arkansas</td><td class="crd-td">36,84 N, 97,03 W</td><td class="crd-td">1450AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">980</td></tr>
<tr><td class="crd-td"><strong>Harlan</strong></td><td class="crd-td">Oklahoma</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">35,91 N, 95 W</td><td class="crd-td">950AD-1250AD</td><td class="crd-td">1100AD</td><td class="crd-td">980</td></tr>
<tr><td class="crd-td"><strong>Sharps Creek</strong></td><td class="crd-td">Kansas</td><td class="crd-td">Middle Arkansas</td><td class="crd-td">38,39 N, 97,65 W</td><td class="crd-td">1480AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">950</td></tr>
<tr><td class="crd-td"><strong>Bryson-Paddock</strong></td><td class="crd-td">Oklahoma</td><td class="crd-td">Middle Arkansas</td><td class="crd-td">36,82 N, 97,14 W</td><td class="crd-td">1450AD-1600AD</td><td class="crd-td">1600AD</td><td class="crd-td">920</td></tr>
<tr><td class="crd-td"><strong>Roitsch</strong></td><td class="crd-td">Texas</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">33,88 N, 94,96 W</td><td class="crd-td">1100AD-1600AD</td><td class="crd-td">1400AD</td><td class="crd-td">920</td></tr>
<tr><td class="crd-td"><strong>Saxman</strong></td><td class="crd-td">Kansas</td><td class="crd-td">Middle Arkansas</td><td class="crd-td">38,27 N, 98,12 W</td><td class="crd-td">1450AD-1600AD</td><td class="crd-td">1540AD</td><td class="crd-td">820</td></tr>
<tr><td class="crd-td"><strong>Washita-Duncan</strong></td><td class="crd-td">Oklahoma</td><td class="crd-td">Middle Arkansas</td><td class="crd-td">35,33 N, 98,82 W</td><td class="crd-td">1200AD-1480AD</td><td class="crd-td">1400AD</td><td class="crd-td">820</td></tr>
<tr><td class="crd-td"><strong>Belcher</strong></td><td class="crd-td">Louisiana</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">32,75 N, 93,82 W</td><td class="crd-td">1100AD-1550AD</td><td class="crd-td">1400AD</td><td class="crd-td">780</td></tr>
<tr><td class="crd-td"><strong>Norman</strong></td><td class="crd-td">Oklahoma</td><td class="crd-td">Middle Arkansas</td><td class="crd-td">35,89 N, 95,28 W</td><td class="crd-td">950AD-1300AD</td><td class="crd-td">1150AD</td><td class="crd-td">740</td></tr>
<tr><td class="crd-td"><strong>T.M. Sanders</strong></td><td class="crd-td">Texas</td><td class="crd-td">Middle Arkansas</td><td class="crd-td">33,87 N, 95,73 W</td><td class="crd-td">1100AD-1450AD</td><td class="crd-td">1300AD</td><td class="crd-td">720</td></tr>
<tr><td class="crd-td"><strong>Pratt</strong></td><td class="crd-td">Kansas</td><td class="crd-td">Middle Arkansas</td><td class="crd-td">37,66 N, 98,72 W</td><td class="crd-td">1400AD-1600AD</td><td class="crd-td">1540AD</td><td class="crd-td">710</td></tr>
<tr><td class="crd-td"><strong>Buried City</strong></td><td class="crd-td">Texas</td><td class="crd-td">High Plains</td><td class="crd-td">36,23 N, 100,66 W</td><td class="crd-td">1150AD-1450AD</td><td class="crd-td">1300AD</td><td class="crd-td">680</td></tr>
<tr><td class="crd-td"><strong>Ferguson</strong></td><td class="crd-td">Arkansas</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">33,78 N, 93,58 W</td><td class="crd-td">1150AD-1500AD</td><td class="crd-td">1350AD</td><td class="crd-td">680</td></tr>
<tr><td class="crd-td"><strong>Foster</strong></td><td class="crd-td">Arkansas</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">33,37 N, 93,74 W</td><td class="crd-td">1300AD-1550AD</td><td class="crd-td">1450AD</td><td class="crd-td">680</td></tr>
<tr><td class="crd-td"><strong>Powers Fort</strong></td><td class="crd-td">Missouri</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">36,62 N, 90,51 W</td><td class="crd-td">1250AD-1380AD</td><td class="crd-td">1325AD</td><td class="crd-td">640</td></tr>
<tr><td class="crd-td"><strong>Reed</strong></td><td class="crd-td">Oklahoma</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">36,6 N, 94,76 W</td><td class="crd-td">1050AD-1350AD</td><td class="crd-td">1250AD</td><td class="crd-td">640</td></tr>
<tr><td class="crd-td"><strong>Bowman</strong></td><td class="crd-td">Arkansas</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">33,59 N, 94,39 W</td><td class="crd-td">1100AD-1450AD</td><td class="crd-td">1300AD</td><td class="crd-td">620</td></tr>
<tr><td class="crd-td"><strong>Holdeman</strong></td><td class="crd-td">Texas</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">33,85 N, 95,03 W</td><td class="crd-td">1150AD-1550AD</td><td class="crd-td">1400AD</td><td class="crd-td">580</td></tr>
<tr><td class="crd-td"><strong>Tom Jones</strong></td><td class="crd-td">Arkansas</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">33,73 N, 93,67 W</td><td class="crd-td">1325AD-1425AD</td><td class="crd-td">1425AD</td><td class="crd-td">540</td></tr>
<tr><td class="crd-td"><strong>Brackett</strong></td><td class="crd-td">Oklahoma</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">35,88 N, 94,92 W</td><td class="crd-td">1050AD-1350AD</td><td class="crd-td">1250AD</td><td class="crd-td">520</td></tr>
<tr><td class="crd-td"><strong>Grant</strong></td><td class="crd-td">Oklahoma</td><td class="crd-td">Middle Arkansas</td><td class="crd-td">34,65 N, 97,17 W</td><td class="crd-td">1250AD-1450AD</td><td class="crd-td">1350AD</td><td class="crd-td">520</td></tr>
<tr><td class="crd-td"><strong>Mineral Springs</strong></td><td class="crd-td">Arkansas</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">33,88 N, 93,92 W</td><td class="crd-td">1050AD-1400AD</td><td class="crd-td">1250AD</td><td class="crd-td">520</td></tr>
<tr><td class="crd-td"><strong>Mounds Plantation</strong></td><td class="crd-td">Louisiana</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">32,69 N, 93,82 W</td><td class="crd-td">950AD-1350AD</td><td class="crd-td">1150AD</td><td class="crd-td">520</td></tr>
<tr><td class="crd-td"><strong>Gahagan</strong></td><td class="crd-td">Louisiana</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">32,05 N, 93,41 W</td><td class="crd-td">1000AD-1350AD</td><td class="crd-td">1200AD</td><td class="crd-td">480</td></tr>
<tr><td class="crd-td"><strong>Hughes</strong></td><td class="crd-td">Oklahoma</td><td class="crd-td">Middle Arkansas</td><td class="crd-td">35,78 N, 95,3 W</td><td class="crd-td">1050AD-1400AD</td><td class="crd-td">1250AD</td><td class="crd-td">480</td></tr>
<tr><td class="crd-td"><strong>Landergin Mesa</strong></td><td class="crd-td">Texas</td><td class="crd-td">High Plains</td><td class="crd-td">35,42 N, 102,39 W</td><td class="crd-td">1200AD-1450AD</td><td class="crd-td">1350AD</td><td class="crd-td">480</td></tr>
<tr><td class="crd-td"><strong>McLemore</strong></td><td class="crd-td">Oklahoma</td><td class="crd-td">Middle Arkansas</td><td class="crd-td">35,34 N, 98,7 W</td><td class="crd-td">1250AD-1450AD</td><td class="crd-td">1350AD</td><td class="crd-td">480</td></tr>
<tr><td class="crd-td"><strong>Pilgrim's Pride</strong></td><td class="crd-td">Texas</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">32,97 N, 94,98 W</td><td class="crd-td">1280AD-1580AD</td><td class="crd-td">1450AD</td><td class="crd-td">480</td></tr>
<tr><td class="crd-td"><strong>Heerwald</strong></td><td class="crd-td">Oklahoma</td><td class="crd-td">High Plains</td><td class="crd-td">35,51 N, 99,02 W</td><td class="crd-td">1250AD-1450AD</td><td class="crd-td">1350AD</td><td class="crd-td">440</td></tr>
<tr><td class="crd-td"><strong>Arthur</strong></td><td class="crd-td">Oklahoma</td><td class="crd-td">Middle Arkansas</td><td class="crd-td">34,77 N, 97,23 W</td><td class="crd-td">1250AD-1450AD</td><td class="crd-td">1350AD</td><td class="crd-td">420</td></tr>
<tr><td class="crd-td"><strong>Cedar Grove</strong></td><td class="crd-td">Arkansas</td><td class="crd-td">Lower Ark.-Spiro</td><td class="crd-td">33,26 N, 93,78 W</td><td class="crd-td">1500AD-1600AD</td><td class="crd-td">1550AD</td><td class="crd-td">420</td></tr>
<tr><td class="crd-td"><strong>Cooper Lake</strong></td><td class="crd-td">Texas</td><td class="crd-td">Middle Arkansas</td><td class="crd-td">33,32 N, 95,62 W</td><td class="crd-td">1000BC-1350AD</td><td class="crd-td">1350AD</td><td class="crd-td">420</td></tr>
<tr><td class="crd-td"><strong>Footprint</strong></td><td class="crd-td">Texas</td><td class="crd-td">High Plains</td><td class="crd-td">35,61 N, 101,65 W</td><td class="crd-td">1200AD-1450AD</td><td class="crd-td">1350AD</td><td class="crd-td">360</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in the Central Plains (HU 11) gazetteer ordered by peak population (of 68 included).</figcaption>
</figure>

# Results

## Archaic Bison Hunts, Woodland Earthworks and Caddoan Mound Centres

Early Holocene sites on the High Plains caprock (`Miami` `30` at `9200BC`, `Cooper Bison Kill` `40`, `Lipscomb` `40`, `Folsom` `55` at `8700BC`, `Olsen-Chubbuck` `75` at `7500BC`, `Winger` `65`) document brief mobile bison-procurement camps prior to Middle Archaic riverine base camps at `William Young` (`95` at `3200BC`).

Between `600AD` and `1450AD`, the largest nucleated towns clustered along the Lower Arkansas and Red River corridors (Table \ref{tab:cp-gazetteer}). Plum Bayou earthwork builders established `Toltec Mounds` (`1.450` at `800AD`), prefiguring regional Caddoan mound-centre networks led by `Harlan` (`980` at `1100AD`), `Crenshaw` (`980` at `1150AD`) and `Spiro` (`3.100` at `1350AD`, `35,31 N, 94,57 W`) [@rolingson1998toltec; @brown1996spiro]. Downstream along the Red River Great Bend and Arkansas valleys, `Battle Mound` peaked at `1.650` in `1400AD`, `Hatchel` reached `1.100` in `1450AD`, `Roitsch` hit `920` in `1400AD` and `Carden Bottoms` crested at `1.450` in `1500AD` [@perttula1992caddo].

<figure class="crd-figure-block" id="fig:sett-central-plains">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-central-plains-settlements/fig4_central_plains_settlements.png" alt="fig:sett-central-plains" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement peaks across the 68 sites in the Central Plains (HU 11) gazetteer.</figcaption>
</figure>

## Wichita Coalescence and Western Caprock Contraction

During the fifteenth and sixteenth centuries, settlement gravity migrated onto the Middle Arkansas and Walnut prairies (Figure \ref{fig:hero-central-plains}). `Etzanoa` (`37,06 N, 97,00 W`) expanded dramatically across `1400AD` to `1600AD` (`14,0k` at `1600AD`), accompanied across the Great Bend and Salt Fork valleys by `Tobias-Quivira` (`3.600` at `1550AD`), `Tobias` (`1.400`), `Little River` (`1.180`), `Malone` (`1.100`), `Deer Creek` (`980`) and `Sharps Creek` (`950`) [@wedel1982quivira; @vehik2002wichita].

On the western High Plains headwaters, `Antelope Creek-Alibates` peaked at `1.200` in `1300AD` alongside `Buried City` (`680` at `1300AD`) before contracting and abandoning permanent masonry rooms by `1500AD` (`1.880` High Plains urban total in `1300AD` dropping to `0` after `1500AD`) [@lintz1986antelope]. In Middle Arkansas, meanwhile, aggregated towns lifted urbanised shares from `16,25%` (`11.700` of `72,0k`) at `1500AD` to `43,32%` (`24.690` of `57,0k`) by `1600AD`.

<figure class="crd-table-figure" id="tab:cp-excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">State</th><th class="crd-th">Status</th><th class="crd-th">Exclusion Reason</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Battle Mound</strong></td><td class="crd-td">Arkansas</td><td class="crd-td">excluded</td><td class="crd-td">duplicate alias</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Excluded archaeological candidate records in the Central Plains (HU 11) source ledger.</figcaption>
</figure>

# Limitations

Sprawling protohistoric Wichita towns (`Etzanoa`, `Tobias-Quivira`) carry broader headcount bounds than masonry-walled Antelope Creek compounds because grass-lodge clusters extended unevenly across kilometres of river terrace recorded in `1541AD` and `1601AD` Spanish itineraries [@wedel1982quivira; @vehik2002wichita].

Small Washita River and Plains Woodland farmsteads lacking distinct architectural cores remain absorbed into the `sites_northern_america` radiocarbon substratum [@drass1997washita; @kelly2025].

# Sources

<div id="refs"></div>
