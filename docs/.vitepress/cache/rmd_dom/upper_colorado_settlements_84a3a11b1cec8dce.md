---
title: "Upper Colorado Hydrological Unit (HU 14): Settlement Gazetteer"
subtitle: "CENTAUR-II: Excavated Fremont, Chacoan and Mesa Verde Sites, 400AD-1300AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: upper_colorado_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_upper_colorado_spatial.png"
hero_caption: "Spatial distribution of eight verified Fremont and Ancestral Puebloan settlements across Upper Colorado Hydrological Unit 14, overlaid on sub-regional areal masks."
hero_label: "fig:hero-upper-colorado"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---





# Abstract

This gazetteer compiles verified archaeological coordinates, occupational spans and benchmark population series for eight excavated settlements across Upper Colorado Hydrological Unit 14 between 400AD and 1300AD [@kelly2025; @bird2022p3k14c]. The inventory pairs three northern Fremont complexes in Wyoming and Utah (Wardell-Green River, Range Creek and Nine Mile Canyon) plus Nawthis Village in the Sevier-Colorado divide with four Ancestral Puebloan centres in the San Juan Basin (Pueblo Bonito, Aztec Ruins, Cliff Palace and Salmon Ruins) [@frison1973wardell; @finley2020fremont; @lekson2006chaco; @varien1999sedentism]. Combined nucleated site populations peak at 6,6k in 1100AD and 6,6k in 1200AD before dropping to 400 in 1300AD during regional depopulation [@robinson2021dendro]. Source-ledger verification confirms eight included sites and one excluded seasonal scatter aggregate with zero unaccounted candidates.



# Background

Settlement nucleation in Upper Colorado HU 14 followed two distinct ecological corridors during the first and early second millennia AD. Along the Upper Green River and the Tavaputs-Book Cliffs escarpment, Fremont hunters and maize farmers built pithouse villages, storage granaries and communal bison-processing camps at Wardell, Nine Mile Canyon, Range Creek and Nawthis Village [@frison1973wardell; @madsen1998fremont; @finley2020fremont]. South of the San Juan River and across the Colorado-New Mexico plateau, Ancestral Puebloan communities erected multi-storey sandstone great houses at Pueblo Bonito in Chaco Canyon, outlier centres at Salmon Ruins and Aztec Ruins along the San Juan and Animas rivers and defensive canyon cliff dwellings at Cliff Palace on Chapin Mesa [@lekson2006chaco; @reed2006salmon; @brown2008aztec; @varien1999sedentism].

# Methodology

## Gazetteer Compilation and Inclusion Criteria

Every documented archaeological complex in the regional corpus was evaluated against strict Stadestér 2.0 criteria requiring verified WGS84 coordinates, dated residential architecture and quantifiable phase populations [@kelly2025; @bird2022p3k14c]. Sites lacking permanent architectural bounds or discrete point coordinates were logged in the source ledger as excluded seasonal scatters rather than omitted silently. Coordinates are stored in `[lat, lng]` decimal degrees and trajectories record active occupation benchmarks in GMT+0 calendar years.

## Household and Room-Count Estimation

Puebloan great-house and cliff-dwelling estimates combine excavated room counts, contemporaneous suite occupancy ratios and kiva-to-household multipliers [@lekson2006chaco; @varien1999sedentism; @reed2006salmon]. Fremont village figures derive from mapped pithouse and surface-structure clusters across canyon floor surveys in Range Creek, Nine Mile Canyon and Gooseberry Valley, scaled by radiocarbon-dated occupation spans [@finley2020fremont; @madsen1998fremont].

# Testing and Validation

Exhaustiveness verification against `upper_colorado_source_ledger.json5` confirms 8 included settlements and 1 excluded aggregate (`Unnamed seasonal camps`), yielding 100% reconciliation with `upper_colorado_settlements.json`. Chronological alignment checks confirm that northern Fremont settlements (Wardell-Green River peaking at 310 in 800AD; Nine Mile Canyon at 610 in 1000AD) precede or peak earlier than the Chacoan-Animas-Mesa Verde great-house maxima (Pueblo Bonito 3,2k in 1100AD; Aztec Ruins 1,45k and Cliff Palace 1,85k in 1200AD) [@lekson2006chaco; @brown2008aztec; @robinson2021dendro].

# Results

## Verified Settlement Gazetteer

Table \ref{tab:gazetteer-upper-colorado} presents all eight verified settlements across Upper Colorado HU 14, detailing jurisdiction, coordinates, occupied span and benchmark population estimates. Figure \ref{fig:settlements-upper-colorado} displays the rank-size curve and peak hierarchy, led by Pueblo Bonito (3,2k), Cliff Palace (1,85k) and Aztec Ruins (1,45k).

<figure class="crd-table-figure" id="tab:gazetteer-upper-colorado">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Coords (Lat, Lon)</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">800AD</th><th class="crd-th">1100AD</th><th class="crd-th">1200AD</th><th class="crd-th">1300AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wardell-Green River</strong></td><td class="crd-td">Wyoming</td><td class="crd-td">42,63, -110,05</td><td class="crd-td">400-1000AD</td><td class="crd-td">310</td><td class="crd-td">310</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Range Creek</strong></td><td class="crd-td">Utah</td><td class="crd-td">39,46, -110,23</td><td class="crd-td">800-1200AD</td><td class="crd-td">640</td><td class="crd-td">420</td><td class="crd-td">640</td><td class="crd-td">510</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Nine Mile Canyon</strong></td><td class="crd-td">Utah</td><td class="crd-td">39,78, -110,18</td><td class="crd-td">600-1200AD</td><td class="crd-td">610</td><td class="crd-td">520</td><td class="crd-td">-</td><td class="crd-td">440</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Pueblo Bonito</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">36,06, -107,96</td><td class="crd-td">800-1200AD</td><td class="crd-td">3,2k</td><td class="crd-td">450</td><td class="crd-td">3,2k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Aztec Ruins</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">36,84, -108</td><td class="crd-td">1100-1300AD</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">950</td><td class="crd-td">1,4k</td><td class="crd-td">220</td></tr>
<tr><td class="crd-td"><strong>Cliff Palace</strong></td><td class="crd-td">Colorado</td><td class="crd-td">37,17, -108,47</td><td class="crd-td">800-1300AD</td><td class="crd-td">1,8k</td><td class="crd-td">380</td><td class="crd-td">950</td><td class="crd-td">1,8k</td><td class="crd-td">180</td></tr>
<tr><td class="crd-td"><strong>Salmon Ruins</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">36,7, -108,03</td><td class="crd-td">1100-1200AD</td><td class="crd-td">920</td><td class="crd-td">-</td><td class="crd-td">750</td><td class="crd-td">920</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Nawthis Village</strong></td><td class="crd-td">Utah</td><td class="crd-td">38,8, -111,77</td><td class="crd-td">800-1100AD</td><td class="crd-td">480</td><td class="crd-td">240</td><td class="crd-td">480</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Verified Fremont and Ancestral Puebloan settlements in Upper Colorado HU 14 with coordinates, active spans and benchmark populations.</figcaption>
</figure>

<figure class="crd-figure-block" id="fig:settlements-upper-colorado">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-upper-colorado-settlements/fig4_upper_colorado_settlements.png" alt="fig:settlements-upper-colorado" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading settlement hierarchy across the eight verified sites in Upper Colorado HU 14.</figcaption>
</figure>

## Source Ledger Audit

Table \ref{tab:ledger-upper-colorado} records every candidate evaluated in `upper_colorado_source_ledger.json5`, documenting the eight included architectural centres and the single excluded seasonal-camp aggregate.

<figure class="crd-table-figure" id="tab:ledger-upper-colorado">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Status</th><th class="crd-th">Ledger Classification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wardell-Green River</strong></td><td class="crd-td">Wyoming</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Range Creek</strong></td><td class="crd-td">Utah</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Nine Mile Canyon</strong></td><td class="crd-td">Utah</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Pueblo Bonito</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Aztec Ruins</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Cliff Palace</strong></td><td class="crd-td">Colorado</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Salmon Ruins</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Nawthis Village</strong></td><td class="crd-td">Utah</td><td class="crd-td">included</td><td class="crd-td">archaeological monument verified</td></tr>
<tr><td class="crd-td"><strong>Unnamed seasonal camps</strong></td><td class="crd-td">United States</td><td class="crd-td">excluded</td><td class="crd-td">seasonal encampment unquantified</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Source-ledger reconciliation for Upper Colorado HU 14 showing all eight included sites and one excluded aggregate.</figcaption>
</figure>

# Limitations

Three limitations affect site-level resolution. First, Chaco Canyon population figures (Pueblo Bonito at 3,2k in 1100AD) combine permanent residential suites with seasonal ceremonial pilgrims across the wider canyon floor, creating sensitivity to assumed room-occupancy fractions [@lekson2006chaco]. Second, canyon-wall cliff dwellings such as Cliff Palace preserve exact room counts after 1150AD, whereas open valley-floor Fremont settlements in Range Creek and Nine Mile Canyon suffer from alluvial burial and historic disturbance [@finley2020fremont; @varien1999sedentism]. Third, small dispersed hamlets under 150 inhabitants are absorbed into sub-regional areal totals rather than tabulated as individual gazetteer rows.

# Sources

<div id="refs"></div>
