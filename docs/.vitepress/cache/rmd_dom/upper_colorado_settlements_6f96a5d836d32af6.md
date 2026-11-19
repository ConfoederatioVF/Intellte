---
title: "Upper Colorado Hydrological Unit (HU 14): Settlement Gazetteer"
subtitle: "CENTAUR-II: Excavated Fremont, Chacoan and Mesa Verde Sites, 8500BC to 1600AD"
date: "17 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: upper_colorado_settlements.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_upper_colorado_spatial.png"
hero_caption: "Spatial distribution of 247 Fremont, Archaic and Ancestral Puebloan settlements across Upper Colorado Hydrological Unit 14, overlaid on three drainage masks."
hero_label: "fig:hero-upper-colorado"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles WGS84 coordinates, occupational spans and benchmark population trajectories for 247 excavated settlements and habitation clusters across Upper Colorado Hydrological Unit 14 (295,77k km²) between 8500BC and 1600AD [@kelly2025; @bird2022p3k14c]. The inventory links 24 northern Fremont and Archaic camps across the Wyoming Basin (led by Wardell-Green River at 310, Caldwell Village at 145 and early Holocene occupations at Finley Site from 8500BC) and 23 canyonland and headwater sites in Utah and Colorado (led by Snake Rock Village at 1,06k, Coombs Site at 1,06k, Red Knobs at 905, Turner-Look at 827, Range Creek at 640 and Nine Mile Canyon at 610) with 200 Ancestral Puebloan great houses and community centres across the San Juan Basin led by Pueblo Bonito (3,2k), Cliff Palace (1,85k), Aztec Ruins (1,45k) and Yellow Jacket Pueblo (1,35k) [@frison1973wardell; @finley2020fremont; @lekson2006chaco; @varien1999sedentism]. Source-ledger reconciliation confirms 247 included settlements and 9 excluded duplicate-alias entries out of 256 candidates with zero unaccounted records.



# Background

Settlement nucleation in Upper Colorado HU 14 followed contrasting ecological corridors from the Early Holocene through the late Puebloan and Fremont periods. Along the Upper Green River and the Tavaputs-Book Cliffs escarpment, Palaeoindian and Archaic hunters established early camps at Finley Site, Blue Point, Pine Spring, Cowboy Cave and Sudden Shelter before Fremont groups built pithouse villages, storage granaries and communal bison-processing camps at Wardell-Green River, Caldwell Village, Nine Mile Canyon, Range Creek, Coombs Site and Snake Rock Village [@frison1973wardell; @madsen1998fremont; @finley2020fremont].

South of the San Juan River and across the Colorado-New Mexico plateau, Ancestral Puebloan communities erected multi-storey sandstone great houses at Pueblo Bonito, Peñasco Blanco, Una Vida, Pueblo Alto, Kin Kletso and Kin Bineola in Chaco Canyon, outlier centres at Salmon Ruins, Salmon, Morris 41 and Aztec Ruins along the San Juan and Animas rivers, and defensive canyon villages across Mesa Verde and McElmo Dome at Cliff Palace, Yellow Jacket Pueblo, Sand Canyon Pueblo, Shields Pueblo, Woods Canyon Pueblo and Wallace Ruin [@lekson2006chaco; @reed2006salmon; @brown2008aztec; @varien1999sedentism].

# Methodology

## Gazetteer Compilation and Inclusion Criteria

Every documented archaeological complex in the regional corpus was evaluated against strict Stadestér 2.0 criteria requiring precise WGS84 coordinates, dated residential architecture or habitation middens and quantifiable phase populations [@kelly2025; @bird2022p3k14c]. Duplicate entries sharing coordinates or matching names within 2 to 25 km of a canonical settlement were logged in `upper_colorado_source_ledger.json5` under `duplicate_alias` exclusions rather than counted twice. Coordinates use decimal degrees in WGS84 and trajectories record active occupation benchmarks in GMT+0 calendar years. Table \ref{tab:summary-upper-colorado} reports included counts and peak sums across the three sub-regions.

<figure class="crd-table-figure" id="tab:summary-upper-colorado">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Included Sites</th><th class="crd-th">Sum of Site Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Green River-WY</strong></td><td class="crd-td">24</td><td class="crd-td">1,7k</td><td class="crd-td">Wardell-Green River (310)</td></tr>
<tr><td class="crd-td"><strong>CO Headwaters</strong></td><td class="crd-td">23</td><td class="crd-td">6,8k</td><td class="crd-td">Coombs Site (1,1k)</td></tr>
<tr><td class="crd-td"><strong>San Juan-Four Corners</strong></td><td class="crd-td">200</td><td class="crd-td">82,8k</td><td class="crd-td">Tsé Bíyó' Áshkhii (3,2k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of the 247 included settlements and peak sums across Upper Colorado HU 14.</figcaption>
</figure>

## Household and Room-Count Estimation

Puebloan great-house and cliff-dwelling estimates combine excavated room counts, contemporaneous suite occupancy ratios and kiva-to-household multipliers reconciled with Southwest Social Networks and Village Ecodynamics Project habitation series [@lekson2006chaco; @varien1999sedentism; @reed2006salmon]. Fremont village figures derive from mapped pithouse and surface-structure clusters across canyon floor surveys in Range Creek, Nine Mile Canyon and the Uinta Basin, scaled by radiocarbon-dated occupation spans [@finley2020fremont; @madsen1998fremont].

# Testing and Validation

Ledger reconciliation confirms 247 included settlements and 9 excluded duplicate-alias records across 256 candidates in `upper_colorado_source_ledger.json5`, matching `upper_colorado_settlements.json` with zero unaccounted records. Site latitudes span 35,67 to 42,84 N and longitudes 107,31 to 111,55 W, with `CENTAUR` provenance recorded on all entries. Chronological ordering confirms that northern Fremont sites (Wardell-Green River peaking at 310 in 800AD; Nine Mile Canyon at 610 in 1000AD) precede or crest earlier than the Chacoan-Animas-Mesa Verde great-house maxima (Pueblo Bonito 3,2k in 1100AD; Aztec Ruins 1,45k and Cliff Palace 1,85k in 1200AD; Yellow Jacket Pueblo 1,35k in 1275AD) [@lekson2006chaco; @brown2008aztec; @robinson2021dendro]. Figure \ref{fig:settlements-upper-colorado} charts the rank-size hierarchy across all 247 settlements.

<figure class="crd-figure-block" id="fig:settlements-upper-colorado">
<img class="crd-figure-img" src="/artefacts/project_centaur/1.0-upper-colorado-settlements/fig4_upper_colorado_settlements.png" alt="fig:settlements-upper-colorado" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading peak hierarchy across the 247 catalogued sites in Upper Colorado HU 14.</figcaption>
</figure>

# Results

## Leading Settlement Gazetteer

Table \ref{tab:gazetteer-upper-colorado} presents the top 45 settlements by peak population descending out of the 247 catalogued sites across Upper Colorado HU 14.

<figure class="crd-table-figure" id="tab:gazetteer-upper-colorado">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">State</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak</th><th class="crd-th">Benchmark Series</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tsé Bíyó' Áshkhii</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">36,06 N, 107,96 W</td><td class="crd-td">500AD - 1600AD</td><td class="crd-td">3,2k</td><td class="crd-td">500AD: 411; 1000AD: 1,8k; 1075AD: 85; 1110AD: 680; 1150AD: 110; 1600AD: 337</td></tr>
<tr><td class="crd-td"><strong>Cliff Palace</strong></td><td class="crd-td">Colorado</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">37,17 N, 108,47 W</td><td class="crd-td">700AD - 1300AD</td><td class="crd-td">1,8k</td><td class="crd-td">700AD: 35; 950AD: 55; 1200AD: 1,8k; 1230AD: 60; 1265AD: 135; 1300AD: 180</td></tr>
<tr><td class="crd-td"><strong>Aztec Ruins</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">36,84 N, 108 W</td><td class="crd-td">1100AD - 1300AD</td><td class="crd-td">1,4k</td><td class="crd-td">1100AD: 950; 1130AD: 160; 1150AD: 125; 1220AD: 520; 1230AD: 240; 1300AD: 220</td></tr>
<tr><td class="crd-td"><strong>Yellow Jacket Pueblo</strong></td><td class="crd-td">Colorado</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">37,53 N, 108,73 W</td><td class="crd-td">1150AD - 1275AD</td><td class="crd-td">1,4k</td><td class="crd-td">1150AD: 450; 1180AD: 110; 1240AD: 1,1k; 1250AD: 165; 1275AD: 1,4k</td></tr>
<tr><td class="crd-td"><strong>Aztec</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">36,75 N, 107,93 W</td><td class="crd-td">200AD - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">200AD: 583; 900AD: 1,1k; 1600AD: 477</td></tr>
<tr><td class="crd-td"><strong>Badger House</strong></td><td class="crd-td">Colorado</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">37,19 N, 108,53 W</td><td class="crd-td">200AD - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">200AD: 583; 900AD: 1,1k; 1050AD: 55; 1210AD: 110; 1240AD: 50; 1600AD: 477</td></tr>
<tr><td class="crd-td"><strong>Bis'saani East</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">36,16 N, 107,86 W</td><td class="crd-td">200AD - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">200AD: 583; 900AD: 1,1k; 1600AD: 477</td></tr>
<tr><td class="crd-td"><strong>Bluff Great House</strong></td><td class="crd-td">Utah</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">37,29 N, 109,56 W</td><td class="crd-td">200AD - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">200AD: 583; 900AD: 1,1k; 1075AD: 85; 1120AD: 110; 1600AD: 477</td></tr>
<tr><td class="crd-td"><strong>Castle Rock Pueblo</strong></td><td class="crd-td">Colorado</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">37,43 N, 108,83 W</td><td class="crd-td">200AD - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">200AD: 583; 400AD: 583; 900AD: 1,1k; 1000AD: 1,1k; 1600AD: 477</td></tr>
<tr><td class="crd-td"><strong>Coombs Site</strong></td><td class="crd-td">Utah</td><td class="crd-td">CO Headwaters</td><td class="crd-td">37,92 N, 111,53 W</td><td class="crd-td">600AD - 1320AD</td><td class="crd-td">1,1k</td><td class="crd-td">600AD: 583; 960AD: 1,1k; 1320AD: 477</td></tr>
<tr><td class="crd-td"><strong>Edge of the Cedars</strong></td><td class="crd-td">Utah</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">37,63 N, 109,49 W</td><td class="crd-td">200AD - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">200AD: 583; 850AD: 65; 900AD: 1,1k; 1110AD: 110; 1220AD: 95; 1600AD: 477</td></tr>
<tr><td class="crd-td"><strong>Escalante GH</strong></td><td class="crd-td">Colorado</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">37,58 N, 108,62 W</td><td class="crd-td">200AD - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">200AD: 583; 900AD: 1,1k; 1600AD: 477</td></tr>
<tr><td class="crd-td"><strong>Escalante Pueblo</strong></td><td class="crd-td">Colorado</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">37,48 N, 108,55 W</td><td class="crd-td">575AD - 1280AD</td><td class="crd-td">1,1k</td><td class="crd-td">575AD: 583; 928AD: 1,1k; 1075AD: 55; 1130AD: 75; 1150AD: 30; 1280AD: 477</td></tr>
<tr><td class="crd-td"><strong>Inscription House</strong></td><td class="crd-td">Arizona</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">36,67 N, 110,82 W</td><td class="crd-td">400AD - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">400AD: 583; 1000AD: 1,1k; 1250AD: 65; 1280AD: 95; 1600AD: 477</td></tr>
<tr><td class="crd-td"><strong>Kiet Siel</strong></td><td class="crd-td">Arizona</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">36,82 N, 110,41 W</td><td class="crd-td">500AD - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">500AD: 583; 1050AD: 1,1k; 1600AD: 477</td></tr>
<tr><td class="crd-td"><strong>Kin Kletso</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">35,98 N, 107,86 W</td><td class="crd-td">400AD - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">400AD: 583; 1000AD: 1,1k; 1600AD: 477</td></tr>
<tr><td class="crd-td"><strong>Lowry</strong></td><td class="crd-td">Colorado</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">37,48 N, 109,03 W</td><td class="crd-td">200AD - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">200AD: 583; 900AD: 1,1k; 1600AD: 477</td></tr>
<tr><td class="crd-td"><strong>McPhee Village</strong></td><td class="crd-td">Colorado</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">37,54 N, 108,56 W</td><td class="crd-td">400AD - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">400AD: 583; 780AD: 40; 850AD: 380; 860AD: 65; 1000AD: 1,1k; 1600AD: 477</td></tr>
<tr><td class="crd-td"><strong>Morris 41</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">36,91 N, 108,13 W</td><td class="crd-td">200AD - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">200AD: 583; 900AD: 1,1k; 1600AD: 477</td></tr>
<tr><td class="crd-td"><strong>Peñasco Blanco</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">36,08 N, 108 W</td><td class="crd-td">400AD - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">400AD: 583; 915AD: 110; 950AD: 481; 1065AD: 240; 1125AD: 140; 1600AD: 477</td></tr>
<tr><td class="crd-td"><strong>Pueblo Alto</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">36,05 N, 107,87 W</td><td class="crd-td">300AD - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">300AD: 583; 950AD: 1,1k; 1600AD: 477</td></tr>
<tr><td class="crd-td"><strong>Pueblo de los Golondrinas</strong></td><td class="crd-td">Colorado</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">37,53 N, 108,49 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">1,1k</td><td class="crd-td">400AD: 583; 925AD: 1,1k; 1450AD: 477</td></tr>
<tr><td class="crd-td"><strong>Salmon</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">36,63 N, 107,94 W</td><td class="crd-td">300AD - 1400AD</td><td class="crd-td">1,1k</td><td class="crd-td">300AD: 583; 850AD: 1,1k; 1400AD: 477</td></tr>
<tr><td class="crd-td"><strong>Sand Canyon Pueblo</strong></td><td class="crd-td">Colorado</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">37,47 N, 108,67 W</td><td class="crd-td">200AD - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">200AD: 583; 900AD: 1,1k; 1240AD: 380; 1270AD: 520; 1275AD: 540; 1600AD: 477</td></tr>
<tr><td class="crd-td"><strong>Segazlin Mesa Group</strong></td><td class="crd-td">Utah</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">37,11 N, 110,68 W</td><td class="crd-td">500AD - 1450AD</td><td class="crd-td">1,1k</td><td class="crd-td">500AD: 583; 975AD: 1,1k; 1450AD: 477</td></tr>
<tr><td class="crd-td"><strong>Shields Pueblo</strong></td><td class="crd-td">Colorado</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">37,44 N, 108,72 W</td><td class="crd-td">200AD - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">200AD: 583; 575AD: 193; 928AD: 350; 1050AD: 180; 1280AD: 158; 1600AD: 477</td></tr>
<tr><td class="crd-td"><strong>Snake Rock Village</strong></td><td class="crd-td">Utah</td><td class="crd-td">CO Headwaters</td><td class="crd-td">38,69 N, 111,42 W</td><td class="crd-td">550AD - 1285AD</td><td class="crd-td">1,1k</td><td class="crd-td">550AD: 583; 918AD: 1,1k; 1050AD: 110; 1180AD: 145; 1285AD: 477</td></tr>
<tr><td class="crd-td"><strong>Three Dog Site</strong></td><td class="crd-td">Utah</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">37,01 N, 110,83 W</td><td class="crd-td">575AD - 1320AD</td><td class="crd-td">1,1k</td><td class="crd-td">575AD: 583; 948AD: 1,1k; 1320AD: 477</td></tr>
<tr><td class="crd-td"><strong>Una Vida</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">36,14 N, 108,04 W</td><td class="crd-td">200AD - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">200AD: 583; 860AD: 60; 900AD: 1,1k; 1050AD: 155; 1120AD: 120; 1600AD: 477</td></tr>
<tr><td class="crd-td"><strong>Upper Desha Pueblo</strong></td><td class="crd-td">Arizona</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">37 N, 110,83 W</td><td class="crd-td">600AD - 1450AD</td><td class="crd-td">1,1k</td><td class="crd-td">600AD: 583; 1025AD: 1,1k; 1450AD: 477</td></tr>
<tr><td class="crd-td"><strong>Wallace Ruin</strong></td><td class="crd-td">Colorado</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">37,34 N, 108,51 W</td><td class="crd-td">300AD - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">300AD: 583; 950AD: 1,1k; 1075AD: 85; 1120AD: 75; 1220AD: 115; 1600AD: 477</td></tr>
<tr><td class="crd-td"><strong>Woods Canyon Pueblo</strong></td><td class="crd-td">Colorado</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">37,45 N, 108,85 W</td><td class="crd-td">200AD - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">200AD: 583; 900AD: 1,1k; 1210AD: 180; 1265AD: 270; 1600AD: 477</td></tr>
<tr><td class="crd-td"><strong>Yellow Jacket</strong></td><td class="crd-td">Colorado</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">37,51 N, 108,73 W</td><td class="crd-td">200AD - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">200AD: 583; 900AD: 1,1k; 1600AD: 477</td></tr>
<tr><td class="crd-td"><strong>Kin Bineola</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">36,02 N, 108,16 W</td><td class="crd-td">500AD - 1600AD</td><td class="crd-td">1,1k</td><td class="crd-td">500AD: 582; 940AD: 75; 1050AD: 1,1k; 1115AD: 150; 1160AD: 60; 1600AD: 476</td></tr>
<tr><td class="crd-td"><strong>Flora Vista</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">36,85 N, 108,09 W</td><td class="crd-td">200AD - 1600AD</td><td class="crd-td">1k</td><td class="crd-td">200AD: 562; 550AD: 101; 900AD: 1k; 1075AD: 183; 1600AD: 460</td></tr>
<tr><td class="crd-td"><strong>Mitchell Springs</strong></td><td class="crd-td">Colorado</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">37,32 N, 108,6 W</td><td class="crd-td">200AD - 1600AD</td><td class="crd-td">980</td><td class="crd-td">200AD: 539; 900AD: 980; 950AD: 80; 1150AD: 180; 1600AD: 441</td></tr>
<tr><td class="crd-td"><strong>Casa del Rio</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">35,99 N, 108,1 W</td><td class="crd-td">200AD - 1600AD</td><td class="crd-td">952</td><td class="crd-td">200AD: 524; 500AD: 193; 900AD: 952; 1050AD: 350; 1600AD: 428</td></tr>
<tr><td class="crd-td"><strong>Morris 39</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">36,94 N, 108,19 W</td><td class="crd-td">400AD - 1600AD</td><td class="crd-td">930</td><td class="crd-td">400AD: 512; 1000AD: 930; 1050AD: 95; 1200AD: 175; 1600AD: 418</td></tr>
<tr><td class="crd-td"><strong>Salmon Ruins</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">36,7 N, 108,03 W</td><td class="crd-td">1090AD - 1240AD</td><td class="crd-td">920</td><td class="crd-td">1090AD: 280; 1100AD: 750; 1130AD: 340; 1200AD: 920; 1240AD: 260</td></tr>
<tr><td class="crd-td"><strong>Red Knobs</strong></td><td class="crd-td">Utah</td><td class="crd-td">CO Headwaters</td><td class="crd-td">37,76 N, 109,64 W</td><td class="crd-td">200AD - 1600AD</td><td class="crd-td">905</td><td class="crd-td">200AD: 498; 900AD: 905; 1600AD: 407</td></tr>
<tr><td class="crd-td"><strong>Turner-Look</strong></td><td class="crd-td">Utah</td><td class="crd-td">CO Headwaters</td><td class="crd-td">39,2 N, 109,31 W</td><td class="crd-td">200AD - 1600AD</td><td class="crd-td">827</td><td class="crd-td">200AD: 455; 900AD: 827; 1000AD: 45; 1025AD: 40; 1100AD: 60; 1600AD: 372</td></tr>
<tr><td class="crd-td"><strong>Cottonwood Falls</strong></td><td class="crd-td">Utah</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">37,62 N, 109,52 W</td><td class="crd-td">200AD - 1600AD</td><td class="crd-td">780</td><td class="crd-td">200AD: 429; 900AD: 780; 1600AD: 351</td></tr>
<tr><td class="crd-td"><strong>Holmes Group</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">36,95 N, 108,3 W</td><td class="crd-td">200AD - 1600AD</td><td class="crd-td">700</td><td class="crd-td">200AD: 385; 900AD: 700; 1080AD: 120; 1220AD: 240; 1600AD: 315</td></tr>
<tr><td class="crd-td"><strong>Pueblo Pintado</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">35,98 N, 107,67 W</td><td class="crd-td">500AD - 1600AD</td><td class="crd-td">699</td><td class="crd-td">500AD: 384; 1050AD: 699; 1060AD: 140; 1120AD: 180; 1200AD: 45; 1600AD: 315</td></tr>
<tr><td class="crd-td"><strong>Padilla Well</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">San Juan-Four Corners</td><td class="crd-td">36,08 N, 107,95 W</td><td class="crd-td">500AD - 1600AD</td><td class="crd-td">682</td><td class="crd-td">500AD: 375; 1050AD: 682; 1600AD: 307</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Top 45 settlements by peak population descending in Upper Colorado HU 14 with coordinates, spans and trajectories.</figcaption>
</figure>

## Excluded Candidates and Source Ledger Audit

Table \ref{tab:ledger-upper-colorado} documents the 9 excluded duplicate-alias candidates from `upper_colorado_source_ledger.json5`, capped at 30 display rows.

<figure class="crd-table-figure" id="tab:ledger-upper-colorado">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Antelope House</strong></td><td class="crd-td">Arizona</td><td class="crd-td">duplicate alias</td><td class="crd-td">Consolidated 15,22 km matching-name/HYDE-centroid twin into canonical Antelope House-Arizona.</td></tr>
<tr><td class="crd-td"><strong>Bee Burrow</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Consolidated 19,11 km matching-name/HYDE-centroid twin into canonical Bee Burrow-New Mexico.</td></tr>
<tr><td class="crd-td"><strong>McPhee Village</strong></td><td class="crd-td">Colorado</td><td class="crd-td">duplicate alias</td><td class="crd-td">Consolidated 16,88 km matching-name/HYDE-centroid twin into canonical McPhee Village-Colorado.</td></tr>
<tr><td class="crd-td"><strong>Penasco Blanco</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Consolidated 2,47 km matching-name/HYDE-centroid twin into canonical Peñasco Blanco-New Mexico.</td></tr>
<tr><td class="crd-td"><strong>Sand Canyon Pueblo</strong></td><td class="crd-td">Colorado</td><td class="crd-td">duplicate alias</td><td class="crd-td">Consolidated 16,04 km matching-name/HYDE-centroid twin into canonical Sand Canyon Pueblo-Colorado.</td></tr>
<tr><td class="crd-td"><strong>Shields Pueblo</strong></td><td class="crd-td">Colorado</td><td class="crd-td">duplicate alias</td><td class="crd-td">Consolidated 18,96 km matching-name/HYDE-centroid twin into canonical Shields Pueblo-Colorado.</td></tr>
<tr><td class="crd-td"><strong>Turner-Look</strong></td><td class="crd-td">Utah</td><td class="crd-td">duplicate alias</td><td class="crd-td">Consolidated 24,22 km matching-name/HYDE-centroid twin into canonical Turner-Look-Utah.</td></tr>
<tr><td class="crd-td"><strong>Una Vida</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Consolidated 16 km matching-name/HYDE-centroid twin into canonical Una Vida-New Mexico.</td></tr>
<tr><td class="crd-td"><strong>Pueblo Bonito</strong></td><td class="crd-td">New Mexico</td><td class="crd-td">duplicate alias</td><td class="crd-td">Merged duplicate coordinate/alias within 2 km into 'Pueblo Bonito' (Lekson 2006).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded duplicate-alias candidates in the Upper Colorado HU 14 source ledger.</figcaption>
</figure>

# Limitations

Three constraints affect site-level resolution. First, Chaco Canyon estimates (Pueblo Bonito at 3,2k in 1100AD) combine permanent residential suites with seasonal ceremonial pilgrims across the wider canyon floor, creating sensitivity to assumed room-occupancy fractions [@lekson2006chaco]. Second, canyon-wall cliff dwellings such as Cliff Palace preserve exact room counts after 1150AD, whereas open valley-floor Fremont settlements in Range Creek and Nine Mile Canyon suffer from alluvial burial and historic disturbance [@finley2020fremont; @varien1999sedentism]. Third, small dispersed seasonal camps lacking discrete residential bounds are routed into sub-regional rural grids rather than catalogued individually.

# Conclusion

Cataloguing 247 settlements across 295,77k km² captures the full Upper Colorado demographic gradient from 8500BC Wyoming Basin camps and first-millennium Fremont canyons to the Pueblo II-III masonry capitals of the San Juan Basin.

# Sources

<div id="refs"></div>
