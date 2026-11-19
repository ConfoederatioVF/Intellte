---
title: "Settlement Gazetteer of Bolivia after Independence"
subtitle: "Toponymy, Geographic Coordinates and Municipal Trajectories across Nine Departments, 1825AD to 2026AD"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: bolivia_after_independence_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_bolivia_after_independence_spatial.png"
hero_caption: "Spatial distribution of 369 catalogued settlements and nine administrative departments across Bolivia (1,12M km²) from 1825AD to 2026AD, illustrating the demographic contrast between Altiplano basins and lowland agricultural frontiers."
hero_label: "fig:hero-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This settlement gazetteer compiles geographic coordinates, administrative affiliations and longitudinal population series for 369 catalogued urban settlements and municipal sections across the nine departments of Bolivia from 1825AD to 2026AD.

The dataset integrates the official national censuses of 1846, 1900, 1950, 1976, 1992, 2001, 2012 and 2024, published by José María Dalence and the Instituto Nacional de Estadística (INE), supplemented by historical municipal rolls and provincial registers [@dalence1851bosquejo; @ine1900censo; @ine1950censo; @ine2024censo; @copa2026censosbo].

The spatial coverage of the gazetteer reflects the historical shifts that transformed republican settlement patterns over two centuries. In the early nineteenth century, sedentary municipal units were confined almost entirely to the high Altiplano and inter-Andean valleys, where silver mining, estate agriculture and indigenous peasant communities sustained traditional administrative capitals such as La Paz, Potosí, Sucre and Cochabamba.

Across the late twentieth and early twenty-first centuries, state-directed colonisation, transport infrastructure and agro-industrial commercialisation produced rapid urbanisation in the eastern lowlands, led by Santa Cruz de la Sierra (2,15M residents in 2024AD), Montero (116,9k), Warnes (84,2k), La Guardia (114,8k) and Yapacaní (50,5k), alongside the dramatic expansion of El Alto (885k) and Cochabamba (957,1k) along the central transport axis.

Every catalogued locality is anchored to precise WGS84 geographic coordinates, assigned to its canonical administrative department and reconciled against 467 candidate records in the project source ledger (369 included municipalities and 98 documented exclusions).

By subtracting active settlement populations from departmental aggregates, the gazetteer supplies the nucleated component of the Operation Viscount demographic model, preventing artificial concentration in rural raster cells and ensuring an accurate spatial representation of Bolivian settlement history.

# Methodology and Source Ledger Audit

Settlement inclusion in the gazetteer follows three rigorous demographic and archival criteria:
1. **Administrative Autonomy and Census Continuity**: All 336 official Bolivian municipal sections recognized in modern national censuses (2001, 2012 and 2024) are included as autonomous spatial units, supplemented by 33 historical mining towns, canton capitals and rubber ports that possessed independent demographic significance prior to mid-twentieth-century municipal consolidations [@copa2026censosbo].
2. **Geographic Coordinate Validation**: All settlement coordinates are verified against Instituto Geográfico Militar (IGM) cartography and high-resolution satellite imagery, ensuring that every coordinate pair falls strictly within its respective departmental boundaries.
3. **Reconciliation against Excluded Candidates**: Among the 467 candidates evaluated in the source ledger, 98 records are documented as excluded. These comprise dependent canton hamlets subsumed within larger municipal sections, duplicate toponymic variants within 2 km of canonical centres, and non-urban military forts that lacked permanent civilian populations.

<figure class="crd-table-figure" id="tab:dept-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Department</th><th class="crd-th">Settlements</th><th class="crd-th">1850AD Sum</th><th class="crd-th">1900AD Sum</th><th class="crd-th">1950AD Sum</th><th class="crd-th">1980AD Sum</th><th class="crd-th">2000AD Sum</th><th class="crd-th">2024AD Sum</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Chuquisaca</strong></td><td class="crd-td">34</td><td class="crd-td">161,9k</td><td class="crd-td">214,2k</td><td class="crd-td">300,9k</td><td class="crd-td">406k</td><td class="crd-td">549,9k</td><td class="crd-td">631,7k</td></tr>
<tr><td class="crd-td"><strong>Cochabamba</strong></td><td class="crd-td">49</td><td class="crd-td">317,5k</td><td class="crd-td">373,9k</td><td class="crd-td">558,9k</td><td class="crd-td">932,4k</td><td class="crd-td">1,62M</td><td class="crd-td">2,3M</td></tr>
<tr><td class="crd-td"><strong>El Beni</strong></td><td class="crd-td">23</td><td class="crd-td">55k</td><td class="crd-td">34,5k</td><td class="crd-td">128,3k</td><td class="crd-td">209,2k</td><td class="crd-td">378,1k</td><td class="crd-td">517,4k</td></tr>
<tr><td class="crd-td"><strong>La Paz</strong></td><td class="crd-td">93</td><td class="crd-td">451,9k</td><td class="crd-td">489,8k</td><td class="crd-td">1,04M</td><td class="crd-td">1,73M</td><td class="crd-td">2,53M</td><td class="crd-td">3,54M</td></tr>
<tr><td class="crd-td"><strong>Oruro</strong></td><td class="crd-td">35</td><td class="crd-td">92,3k</td><td class="crd-td">83,7k</td><td class="crd-td">204,5k</td><td class="crd-td">309,1k</td><td class="crd-td">375,5k</td><td class="crd-td">559,2k</td></tr>
<tr><td class="crd-td"><strong>Pando</strong></td><td class="crd-td">15</td><td class="crd-td">14,6k</td><td class="crd-td">17,1k</td><td class="crd-td">28,4k</td><td class="crd-td">50,8k</td><td class="crd-td">73k</td><td class="crd-td">160,2k</td></tr>
<tr><td class="crd-td"><strong>Potosí</strong></td><td class="crd-td">42</td><td class="crd-td">212,8k</td><td class="crd-td">283,3k</td><td class="crd-td">465k</td><td class="crd-td">569,7k</td><td class="crd-td">610,8k</td><td class="crd-td">763,1k</td></tr>
<tr><td class="crd-td"><strong>Santa Cruz</strong></td><td class="crd-td">69</td><td class="crd-td">137k</td><td class="crd-td">230,2k</td><td class="crd-td">318,6k</td><td class="crd-td">973,3k</td><td class="crd-td">2,18M</td><td class="crd-td">3,61M</td></tr>
<tr><td class="crd-td"><strong>Tarija</strong></td><td class="crd-td">9</td><td class="crd-td">58k</td><td class="crd-td">92,2k</td><td class="crd-td">113,5k</td><td class="crd-td">191k</td><td class="crd-td">340,5k</td><td class="crd-td">475k</td></tr>
<tr><td class="crd-td"><strong>National Total</strong></td><td class="crd-td">369</td><td class="crd-td">1,5M</td><td class="crd-td">1,82M</td><td class="crd-td">3,16M</td><td class="crd-td">5,37M</td><td class="crd-td">8,65M</td><td class="crd-td">12,56M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Departmental distribution of 369 catalogued settlements and aggregate urban population sums across benchmark years from 1850AD to 2024AD.</figcaption>
</figure>

# Departmental Settlement Trajectories

## Department of La Paz

The Department of La Paz encompasses 93 catalogued settlements, representing the most extensive municipal network in Bolivia. Settlement geography is bifurcated between the dense Aymara agricultural cantons of the Lake Titicaca basin and the rapid urbanization of the metropolitan area in the La Paz river canyon and high Altiplano rim [@arbona2008urban].

Table \ref{tab:gaz-lapaz} documents the leading 25 settlements in the department, ordered by 2024 population.

<figure class="crd-table-figure" id="tab:gaz-lapaz">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Municipality</th><th class="crd-th">Coordinates</th><th class="crd-th">1850AD</th><th class="crd-th">1900AD</th><th class="crd-th">1950AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2024AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>La Paz</strong></td><td class="crd-td">16,5 S, 68,15 W</td><td class="crd-td">302,9k</td><td class="crd-td">328,5k</td><td class="crd-td">699,2k</td><td class="crd-td">1,16M</td><td class="crd-td">1,7M</td><td class="crd-td">2,23M</td></tr>
<tr><td class="crd-td"><strong>Viacha</strong></td><td class="crd-td">16,65 S, 68,3 W</td><td class="crd-td">8,1k</td><td class="crd-td">8,8k</td><td class="crd-td">18,8k</td><td class="crd-td">31,2k</td><td class="crd-td">45,6k</td><td class="crd-td">113,6k</td></tr>
<tr><td class="crd-td"><strong>Caranavi</strong></td><td class="crd-td">15,83 S, 67,57 W</td><td class="crd-td">7,5k</td><td class="crd-td">8,2k</td><td class="crd-td">17,4k</td><td class="crd-td">28,8k</td><td class="crd-td">42,1k</td><td class="crd-td">59,7k</td></tr>
<tr><td class="crd-td"><strong>Pucarani</strong></td><td class="crd-td">16,4 S, 68,48 W</td><td class="crd-td">4,3k</td><td class="crd-td">4,7k</td><td class="crd-td">9,9k</td><td class="crd-td">16,5k</td><td class="crd-td">24k</td><td class="crd-td">49,9k</td></tr>
<tr><td class="crd-td"><strong>Achacachi</strong></td><td class="crd-td">16,05 S, 68,69 W</td><td class="crd-td">8k</td><td class="crd-td">8,7k</td><td class="crd-td">18,5k</td><td class="crd-td">30,7k</td><td class="crd-td">44,9k</td><td class="crd-td">47,3k</td></tr>
<tr><td class="crd-td"><strong>Achocalla</strong></td><td class="crd-td">16,57 S, 68,15 W</td><td class="crd-td">2,6k</td><td class="crd-td">2,9k</td><td class="crd-td">6,1k</td><td class="crd-td">10,1k</td><td class="crd-td">14,8k</td><td class="crd-td">46,2k</td></tr>
<tr><td class="crd-td"><strong>La Asunta</strong></td><td class="crd-td">16,03 S, 67,17 W</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k</td><td class="crd-td">7,3k</td><td class="crd-td">12,1k</td><td class="crd-td">17,6k</td><td class="crd-td">45,6k</td></tr>
<tr><td class="crd-td"><strong>Laja</strong></td><td class="crd-td">16,53 S, 68,38 W</td><td class="crd-td">2,9k</td><td class="crd-td">3,1k</td><td class="crd-td">6,6k</td><td class="crd-td">10,9k</td><td class="crd-td">16k</td><td class="crd-td">38,7k</td></tr>
<tr><td class="crd-td"><strong>Sorata</strong></td><td class="crd-td">15,77 S, 68,65 W</td><td class="crd-td">3,3k</td><td class="crd-td">3,6k</td><td class="crd-td">7,6k</td><td class="crd-td">12,7k</td><td class="crd-td">18,5k</td><td class="crd-td">30,1k</td></tr>
<tr><td class="crd-td"><strong>Coroico</strong></td><td class="crd-td">16,19 S, 67,73 W</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">4,9k</td><td class="crd-td">8,2k</td><td class="crd-td">12k</td><td class="crd-td">27,7k</td></tr>
<tr><td class="crd-td"><strong>Palos Blancos</strong></td><td class="crd-td">15,42 S, 67,23 W</td><td class="crd-td">2,9k</td><td class="crd-td">3,2k</td><td class="crd-td">6,8k</td><td class="crd-td">11,2k</td><td class="crd-td">16,4k</td><td class="crd-td">27,1k</td></tr>
<tr><td class="crd-td"><strong>Patacamaya</strong></td><td class="crd-td">17,24 S, 67,91 W</td><td class="crd-td">3,5k</td><td class="crd-td">3,8k</td><td class="crd-td">8,1k</td><td class="crd-td">13,4k</td><td class="crd-td">19,6k</td><td class="crd-td">25,1k</td></tr>
<tr><td class="crd-td"><strong>Coripata</strong></td><td class="crd-td">16,3 S, 67,6 W</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">4,6k</td><td class="crd-td">7,7k</td><td class="crd-td">11,2k</td><td class="crd-td">23,5k</td></tr>
<tr><td class="crd-td"><strong>Colquiri</strong></td><td class="crd-td">17,39 S, 67,13 W</td><td class="crd-td">3,2k</td><td class="crd-td">3,5k</td><td class="crd-td">7,4k</td><td class="crd-td">12,3k</td><td class="crd-td">18k</td><td class="crd-td">23,5k</td></tr>
<tr><td class="crd-td"><strong>Irupana</strong></td><td class="crd-td">16,47 S, 67,45 W</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">4,6k</td><td class="crd-td">7,6k</td><td class="crd-td">11,1k</td><td class="crd-td">23,3k</td></tr>
<tr><td class="crd-td"><strong>Mapiri</strong></td><td class="crd-td">15,25 S, 68,17 W</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td><td class="crd-td">3,9k</td><td class="crd-td">6,5k</td><td class="crd-td">9,4k</td><td class="crd-td">21,8k</td></tr>
<tr><td class="crd-td"><strong>Palca</strong></td><td class="crd-td">16,67 S, 67,83 W</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td><td class="crd-td">5,7k</td><td class="crd-td">9,5k</td><td class="crd-td">13,9k</td><td class="crd-td">21,7k</td></tr>
<tr><td class="crd-td"><strong>Batallas</strong></td><td class="crd-td">16,3 S, 68,53 W</td><td class="crd-td">3,7k</td><td class="crd-td">4k</td><td class="crd-td">8,4k</td><td class="crd-td">14k</td><td class="crd-td">20,5k</td><td class="crd-td">20,6k</td></tr>
<tr><td class="crd-td"><strong>Mecapaca</strong></td><td class="crd-td">16,67 S, 68,02 W</td><td class="crd-td">2,1k</td><td class="crd-td">2,2k</td><td class="crd-td">4,8k</td><td class="crd-td">7,9k</td><td class="crd-td">11,5k</td><td class="crd-td">20,4k</td></tr>
<tr><td class="crd-td"><strong>Apolo</strong></td><td class="crd-td">14,72 S, 68,41 W</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td><td class="crd-td">5,4k</td><td class="crd-td">8,9k</td><td class="crd-td">13k</td><td class="crd-td">19,2k</td></tr>
<tr><td class="crd-td"><strong>Inquisivi</strong></td><td class="crd-td">16,92 S, 67,17 W</td><td class="crd-td">2,8k</td><td class="crd-td">3,1k</td><td class="crd-td">6,5k</td><td class="crd-td">10,8k</td><td class="crd-td">15,8k</td><td class="crd-td">18,7k</td></tr>
<tr><td class="crd-td"><strong>Chulumani</strong></td><td class="crd-td">16,41 S, 67,53 W</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td><td class="crd-td">5,3k</td><td class="crd-td">8,8k</td><td class="crd-td">12,9k</td><td class="crd-td">18,3k</td></tr>
<tr><td class="crd-td"><strong>Chuma</strong></td><td class="crd-td">15,48 S, 68,9 W</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">5,2k</td><td class="crd-td">8,6k</td><td class="crd-td">12,6k</td><td class="crd-td">17,8k</td></tr>
<tr><td class="crd-td"><strong>Mocomoco</strong></td><td class="crd-td">15,46 S, 69 W</td><td class="crd-td">3k</td><td class="crd-td">3,3k</td><td class="crd-td">7k</td><td class="crd-td">11,5k</td><td class="crd-td">16,9k</td><td class="crd-td">17,8k</td></tr>
<tr><td class="crd-td"><strong>Copacabana</strong></td><td class="crd-td">16,17 S, 69,08 W</td><td class="crd-td">2,5k</td><td class="crd-td">2,8k</td><td class="crd-td">5,9k</td><td class="crd-td">9,8k</td><td class="crd-td">14,3k</td><td class="crd-td">17,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading twenty-five settlements in the Department of La Paz ordered by 2024AD population.</figcaption>
</figure>

## Department of Santa Cruz

The Department of Santa Cruz contains 69 catalogued settlements, displaying an extraordinary transition from pre-industrial pastoral isolation to intensive commercial agriculture [@fifer1972bolivia; @schoop1980verstaedterung].

The integrated northern agricultural belt—including Montero, Warnes, Mineros and San Pedro—exhibits sustained population growth driven by mechanized soybean, sugarcane and dairy production.

Table \ref{tab:gaz-santacruz} presents the leading 25 settlements across the department.

<figure class="crd-table-figure" id="tab:gaz-santacruz">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Municipality</th><th class="crd-th">Coordinates</th><th class="crd-th">1850AD</th><th class="crd-th">1900AD</th><th class="crd-th">1950AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2024AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Santa Cruz de la Sierra</strong></td><td class="crd-td">17,79 S, 63,18 W</td><td class="crd-td">89,2k</td><td class="crd-td">144,4k</td><td class="crd-td">197,2k</td><td class="crd-td">602,4k</td><td class="crd-td">1,35M</td><td class="crd-td">2,15M</td></tr>
<tr><td class="crd-td"><strong>Warnes</strong></td><td class="crd-td">17,52 S, 63,17 W</td><td class="crd-td">2,9k</td><td class="crd-td">4,7k</td><td class="crd-td">6,4k</td><td class="crd-td">19,5k</td><td class="crd-td">43,7k</td><td class="crd-td">151,2k</td></tr>
<tr><td class="crd-td"><strong>La Guardia</strong></td><td class="crd-td">18,05 S, 63,23 W</td><td class="crd-td">2,5k</td><td class="crd-td">4,1k</td><td class="crd-td">5,6k</td><td class="crd-td">17k</td><td class="crd-td">38,1k</td><td class="crd-td">147,7k</td></tr>
<tr><td class="crd-td"><strong>Montero</strong></td><td class="crd-td">17,34 S, 63,25 W</td><td class="crd-td">-</td><td class="crd-td">8,3k</td><td class="crd-td">11,3k</td><td class="crd-td">34,6k</td><td class="crd-td">77,4k</td><td class="crd-td">126,9k</td></tr>
<tr><td class="crd-td"><strong>Cotoca</strong></td><td class="crd-td">17,82 S, 63,05 W</td><td class="crd-td">2,3k</td><td class="crd-td">3,8k</td><td class="crd-td">5,1k</td><td class="crd-td">15,7k</td><td class="crd-td">35,1k</td><td class="crd-td">106,6k</td></tr>
<tr><td class="crd-td"><strong>Yapacaní</strong></td><td class="crd-td">16,75 S, 64,36 W</td><td class="crd-td">2k</td><td class="crd-td">3,3k</td><td class="crd-td">4,4k</td><td class="crd-td">13,6k</td><td class="crd-td">30,4k</td><td class="crd-td">57,8k</td></tr>
<tr><td class="crd-td"><strong>El Torno</strong></td><td class="crd-td">18 S, 63,39 W</td><td class="crd-td">2,4k</td><td class="crd-td">3,9k</td><td class="crd-td">5,4k</td><td class="crd-td">16,4k</td><td class="crd-td">36,6k</td><td class="crd-td">55,7k</td></tr>
<tr><td class="crd-td"><strong>Pailón</strong></td><td class="crd-td">17,76 S, 61,92 W</td><td class="crd-td">1,8k</td><td class="crd-td">2,9k</td><td class="crd-td">4k</td><td class="crd-td">12,3k</td><td class="crd-td">27,5k</td><td class="crd-td">54,5k</td></tr>
<tr><td class="crd-td"><strong>San Julián</strong></td><td class="crd-td">16,79 S, 62,81 W</td><td class="crd-td">2,4k</td><td class="crd-td">3,9k</td><td class="crd-td">5,4k</td><td class="crd-td">16,4k</td><td class="crd-td">36,6k</td><td class="crd-td">44,9k</td></tr>
<tr><td class="crd-td"><strong>Ascención de Guarayos</strong></td><td class="crd-td">15,34 S, 63,43 W</td><td class="crd-td">1,1k</td><td class="crd-td">1,8k</td><td class="crd-td">2,4k</td><td class="crd-td">7,3k</td><td class="crd-td">16,4k</td><td class="crd-td">34,1k</td></tr>
<tr><td class="crd-td"><strong>Cabezas</strong></td><td class="crd-td">18,79 S, 63,32 W</td><td class="crd-td">1,4k</td><td class="crd-td">2,3k</td><td class="crd-td">3,1k</td><td class="crd-td">9,6k</td><td class="crd-td">21,5k</td><td class="crd-td">33k</td></tr>
<tr><td class="crd-td"><strong>Camiri</strong></td><td class="crd-td">20,04 S, 63,52 W</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">13,3k</td><td class="crd-td">29,8k</td><td class="crd-td">32,3k</td></tr>
<tr><td class="crd-td"><strong>Concepción</strong></td><td class="crd-td">15,3 S, 62,11 W</td><td class="crd-td">926</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">6,3k</td><td class="crd-td">14k</td><td class="crd-td">30,1k</td></tr>
<tr><td class="crd-td"><strong>San Ignacio de Velasco</strong></td><td class="crd-td">16,38 S, 60,96 W</td><td class="crd-td">1,1k</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td><td class="crd-td">7,8k</td><td class="crd-td">17,3k</td><td class="crd-td">27,6k</td></tr>
<tr><td class="crd-td"><strong>Cuatro Cañadas</strong></td><td class="crd-td">17,27 S, 62,56 W</td><td class="crd-td">1,1k</td><td class="crd-td">1,8k</td><td class="crd-td">2,5k</td><td class="crd-td">7,6k</td><td class="crd-td">16,9k</td><td class="crd-td">25,3k</td></tr>
<tr><td class="crd-td"><strong>Porongo</strong></td><td class="crd-td">17,75 S, 63,36 W</td><td class="crd-td">707</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td><td class="crd-td">4,8k</td><td class="crd-td">10,7k</td><td class="crd-td">23,1k</td></tr>
<tr><td class="crd-td"><strong>Mineros</strong></td><td class="crd-td">17,12 S, 63,23 W</td><td class="crd-td">1,3k</td><td class="crd-td">2k</td><td class="crd-td">2,8k</td><td class="crd-td">8,5k</td><td class="crd-td">19,1k</td><td class="crd-td">23,1k</td></tr>
<tr><td class="crd-td"><strong>Ascención de Guarayos</strong></td><td class="crd-td">15,89 S, 63,19 W</td><td class="crd-td">916</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">6,2k</td><td class="crd-td">13,8k</td><td class="crd-td">22,1k</td></tr>
<tr><td class="crd-td"><strong>Villa Yapacaní</strong></td><td class="crd-td">17,4 S, 63,83 W</td><td class="crd-td">886</td><td class="crd-td">1,4k</td><td class="crd-td">2k</td><td class="crd-td">6k</td><td class="crd-td">13,4k</td><td class="crd-td">21,3k</td></tr>
<tr><td class="crd-td"><strong>Portachuelo</strong></td><td class="crd-td">17,35 S, 63,4 W</td><td class="crd-td">1k</td><td class="crd-td">1,7k</td><td class="crd-td">2,3k</td><td class="crd-td">7,1k</td><td class="crd-td">15,8k</td><td class="crd-td">20,7k</td></tr>
<tr><td class="crd-td"><strong>San Carlos</strong></td><td class="crd-td">17,4 S, 63,73 W</td><td class="crd-td">1,1k</td><td class="crd-td">1,7k</td><td class="crd-td">2,3k</td><td class="crd-td">7,1k</td><td class="crd-td">15,9k</td><td class="crd-td">18,9k</td></tr>
<tr><td class="crd-td"><strong>Roboré</strong></td><td class="crd-td">18,33 S, 59,76 W</td><td class="crd-td">972</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">6,6k</td><td class="crd-td">14,7k</td><td class="crd-td">18,8k</td></tr>
<tr><td class="crd-td"><strong>Puerto Quijarro</strong></td><td class="crd-td">18,43 S, 57,69 W</td><td class="crd-td">823</td><td class="crd-td">1,3k</td><td class="crd-td">1,8k</td><td class="crd-td">5,6k</td><td class="crd-td">12,4k</td><td class="crd-td">18k</td></tr>
<tr><td class="crd-td"><strong>Puerto Suárez</strong></td><td class="crd-td">18,97 S, 57,8 W</td><td class="crd-td">970</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">6,6k</td><td class="crd-td">14,7k</td><td class="crd-td">17,4k</td></tr>
<tr><td class="crd-td"><strong>El Puente</strong></td><td class="crd-td">16,15 S, 63,48 W</td><td class="crd-td">551</td><td class="crd-td">892</td><td class="crd-td">1,2k</td><td class="crd-td">3,7k</td><td class="crd-td">8,3k</td><td class="crd-td">17,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five settlements in the Department of Santa Cruz ordered by 2024AD population.</figcaption>
</figure>

## Department of Cochabamba

The Department of Cochabamba contains 49 catalogued settlements, forming the dense demographic heartland of the central valleys [@blanes1984campesinos].

The central valley conurbation connects Cochabamba with Quillacollo, Sacaba, Colcapirhua, Tiquipaya and Vinto, while the tropical Chapare to the northeast encompasses Villa Tunari, Puerto Villarroel, Shinahota and Chimoré.

Table \ref{tab:gaz-cochabamba} presents the leading 20 settlements in Cochabamba.

<figure class="crd-table-figure" id="tab:gaz-cochabamba">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Municipality</th><th class="crd-th">Coordinates</th><th class="crd-th">1850AD</th><th class="crd-th">1900AD</th><th class="crd-th">1950AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2024AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cochabamba</strong></td><td class="crd-td">17,38 S, 66,16 W</td><td class="crd-td">133k</td><td class="crd-td">156,6k</td><td class="crd-td">234,1k</td><td class="crd-td">390,5k</td><td class="crd-td">676,4k</td><td class="crd-td">957,1k</td></tr>
<tr><td class="crd-td"><strong>Sacaba</strong></td><td class="crd-td">17,4 S, 66,04 W</td><td class="crd-td">22,4k</td><td class="crd-td">26,4k</td><td class="crd-td">39,5k</td><td class="crd-td">65,8k</td><td class="crd-td">114k</td><td class="crd-td">219,1k</td></tr>
<tr><td class="crd-td"><strong>Quillacollo</strong></td><td class="crd-td">17,39 S, 66,28 W</td><td class="crd-td">27,2k</td><td class="crd-td">32,1k</td><td class="crd-td">48k</td><td class="crd-td">80k</td><td class="crd-td">138,6k</td><td class="crd-td">196,1k</td></tr>
<tr><td class="crd-td"><strong>Villa Tunari</strong></td><td class="crd-td">16,63 S, 65,57 W</td><td class="crd-td">10,1k</td><td class="crd-td">11,9k</td><td class="crd-td">17,8k</td><td class="crd-td">29,7k</td><td class="crd-td">51,5k</td><td class="crd-td">93,7k</td></tr>
<tr><td class="crd-td"><strong>Tiquipaya</strong></td><td class="crd-td">17,34 S, 66,22 W</td><td class="crd-td">9,9k</td><td class="crd-td">11,7k</td><td class="crd-td">17,4k</td><td class="crd-td">29,1k</td><td class="crd-td">50,4k</td><td class="crd-td">71,3k</td></tr>
<tr><td class="crd-td"><strong>Vinto</strong></td><td class="crd-td">17,39 S, 66,32 W</td><td class="crd-td">9,3k</td><td class="crd-td">10,9k</td><td class="crd-td">16,3k</td><td class="crd-td">27,3k</td><td class="crd-td">47,2k</td><td class="crd-td">66,8k</td></tr>
<tr><td class="crd-td"><strong>Colcapirhua</strong></td><td class="crd-td">17,39 S, 66,24 W</td><td class="crd-td">8k</td><td class="crd-td">9,5k</td><td class="crd-td">14,1k</td><td class="crd-td">23,6k</td><td class="crd-td">40,9k</td><td class="crd-td">66,5k</td></tr>
<tr><td class="crd-td"><strong>Puerto Villarroel</strong></td><td class="crd-td">16,84 S, 64,8 W</td><td class="crd-td">7,8k</td><td class="crd-td">9,2k</td><td class="crd-td">13,7k</td><td class="crd-td">22,9k</td><td class="crd-td">39,7k</td><td class="crd-td">64,6k</td></tr>
<tr><td class="crd-td"><strong>Sipe Sipe</strong></td><td class="crd-td">17,45 S, 66,36 W</td><td class="crd-td">7,4k</td><td class="crd-td">8,8k</td><td class="crd-td">13,1k</td><td class="crd-td">21,8k</td><td class="crd-td">37,8k</td><td class="crd-td">53,5k</td></tr>
<tr><td class="crd-td"><strong>Punata</strong></td><td class="crd-td">17,54 S, 65,83 W</td><td class="crd-td">5k</td><td class="crd-td">5,9k</td><td class="crd-td">8,8k</td><td class="crd-td">14,7k</td><td class="crd-td">25,5k</td><td class="crd-td">35,2k</td></tr>
<tr><td class="crd-td"><strong>Mizque</strong></td><td class="crd-td">17,94 S, 65,34 W</td><td class="crd-td">4,8k</td><td class="crd-td">5,7k</td><td class="crd-td">8,5k</td><td class="crd-td">14,1k</td><td class="crd-td">24,5k</td><td class="crd-td">34,7k</td></tr>
<tr><td class="crd-td"><strong>Arbieto</strong></td><td class="crd-td">17,57 S, 66,02 W</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">3,2k</td><td class="crd-td">5,3k</td><td class="crd-td">9,2k</td><td class="crd-td">29,4k</td></tr>
<tr><td class="crd-td"><strong>Chimoré</strong></td><td class="crd-td">16,99 S, 65,15 W</td><td class="crd-td">2,8k</td><td class="crd-td">3,3k</td><td class="crd-td">5k</td><td class="crd-td">8,3k</td><td class="crd-td">14,4k</td><td class="crd-td">27,5k</td></tr>
<tr><td class="crd-td"><strong>Shinahota</strong></td><td class="crd-td">16,99 S, 65,25 W</td><td class="crd-td">2,8k</td><td class="crd-td">3,3k</td><td class="crd-td">5k</td><td class="crd-td">8,3k</td><td class="crd-td">14,3k</td><td class="crd-td">27,2k</td></tr>
<tr><td class="crd-td"><strong>Tapacarí</strong></td><td class="crd-td">17,52 S, 66,62 W</td><td class="crd-td">5k</td><td class="crd-td">5,8k</td><td class="crd-td">8,7k</td><td class="crd-td">14,6k</td><td class="crd-td">25,2k</td><td class="crd-td">24,7k</td></tr>
<tr><td class="crd-td"><strong>Aiquile</strong></td><td class="crd-td">18,2 S, 65,18 W</td><td class="crd-td">5k</td><td class="crd-td">5,9k</td><td class="crd-td">8,9k</td><td class="crd-td">14,8k</td><td class="crd-td">25,6k</td><td class="crd-td">23,1k</td></tr>
<tr><td class="crd-td"><strong>Colomi</strong></td><td class="crd-td">17,35 S, 65,87 W</td><td class="crd-td">3,3k</td><td class="crd-td">3,9k</td><td class="crd-td">5,9k</td><td class="crd-td">9,8k</td><td class="crd-td">16,9k</td><td class="crd-td">21,8k</td></tr>
<tr><td class="crd-td"><strong>Cliza</strong></td><td class="crd-td">17,59 S, 65,93 W</td><td class="crd-td">3,8k</td><td class="crd-td">4,5k</td><td class="crd-td">6,7k</td><td class="crd-td">11,1k</td><td class="crd-td">19,2k</td><td class="crd-td">21,2k</td></tr>
<tr><td class="crd-td"><strong>Cocapata</strong></td><td class="crd-td">16,49 S, 66,55 W</td><td class="crd-td">3,3k</td><td class="crd-td">3,8k</td><td class="crd-td">5,7k</td><td class="crd-td">9,6k</td><td class="crd-td">16,6k</td><td class="crd-td">19,6k</td></tr>
<tr><td class="crd-td"><strong>Capinota</strong></td><td class="crd-td">17,71 S, 66,26 W</td><td class="crd-td">3,2k</td><td class="crd-td">3,8k</td><td class="crd-td">5,7k</td><td class="crd-td">9,5k</td><td class="crd-td">16,5k</td><td class="crd-td">19,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading twenty settlements in the Department of Cochabamba ordered by 2024AD population.</figcaption>
</figure>

## Department of Potosí

The Department of Potosí encompasses 42 catalogued settlements, reflecting centuries of mineral extraction across the southern Andes [@platt1982estado; @dunkerley1984rebellion].

Mining centres such as Potosí, Llallagua, Uncía and Uyuni contrast with agricultural valley settlements in Betanzos, Cotagaita and Tupiza.

Table \ref{tab:gaz-potosi} documents the leading 20 settlements in Potosí.

<figure class="crd-table-figure" id="tab:gaz-potosi">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Municipality</th><th class="crd-th">Coordinates</th><th class="crd-th">1850AD</th><th class="crd-th">1900AD</th><th class="crd-th">1950AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2024AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Potosí</strong></td><td class="crd-td">19,58 S, 65,75 W</td><td class="crd-td">50k</td><td class="crd-td">66,6k</td><td class="crd-td">109,3k</td><td class="crd-td">134k</td><td class="crd-td">143,6k</td><td class="crd-td">218,7k</td></tr>
<tr><td class="crd-td"><strong>Villazón</strong></td><td class="crd-td">22,09 S, 65,59 W</td><td class="crd-td">12,5k</td><td class="crd-td">16,7k</td><td class="crd-td">27,3k</td><td class="crd-td">33,5k</td><td class="crd-td">35,9k</td><td class="crd-td">49,3k</td></tr>
<tr><td class="crd-td"><strong>Tupiza</strong></td><td class="crd-td">21,44 S, 65,72 W</td><td class="crd-td">13,2k</td><td class="crd-td">17,6k</td><td class="crd-td">28,9k</td><td class="crd-td">35,4k</td><td class="crd-td">38k</td><td class="crd-td">45,6k</td></tr>
<tr><td class="crd-td"><strong>Llallagua</strong></td><td class="crd-td">18,42 S, 66,58 W</td><td class="crd-td">12,7k</td><td class="crd-td">16,9k</td><td class="crd-td">27,8k</td><td class="crd-td">34,1k</td><td class="crd-td">36,5k</td><td class="crd-td">41,7k</td></tr>
<tr><td class="crd-td"><strong>Pocoata</strong></td><td class="crd-td">18,7 S, 66,16 W</td><td class="crd-td">6,9k</td><td class="crd-td">9,2k</td><td class="crd-td">15,2k</td><td class="crd-td">18,6k</td><td class="crd-td">19,9k</td><td class="crd-td">32,6k</td></tr>
<tr><td class="crd-td"><strong>Betanzos</strong></td><td class="crd-td">19,55 S, 65,45 W</td><td class="crd-td">12,5k</td><td class="crd-td">16,7k</td><td class="crd-td">27,4k</td><td class="crd-td">33,5k</td><td class="crd-td">35,9k</td><td class="crd-td">31,9k</td></tr>
<tr><td class="crd-td"><strong>Cotagaita</strong></td><td class="crd-td">20,82 S, 65,66 W</td><td class="crd-td">8,3k</td><td class="crd-td">11k</td><td class="crd-td">18,1k</td><td class="crd-td">22,2k</td><td class="crd-td">23,8k</td><td class="crd-td">29,2k</td></tr>
<tr><td class="crd-td"><strong>Tinguipaya</strong></td><td class="crd-td">19,22 S, 65,82 W</td><td class="crd-td">7,5k</td><td class="crd-td">10k</td><td class="crd-td">16,4k</td><td class="crd-td">20,1k</td><td class="crd-td">21,6k</td><td class="crd-td">28,9k</td></tr>
<tr><td class="crd-td"><strong>Uncía</strong></td><td class="crd-td">18,47 S, 66,57 W</td><td class="crd-td">6,5k</td><td class="crd-td">8,6k</td><td class="crd-td">14,1k</td><td class="crd-td">17,3k</td><td class="crd-td">18,5k</td><td class="crd-td">22,8k</td></tr>
<tr><td class="crd-td"><strong>Puna</strong></td><td class="crd-td">19,79 S, 65,51 W</td><td class="crd-td">8,1k</td><td class="crd-td">10,8k</td><td class="crd-td">17,8k</td><td class="crd-td">21,8k</td><td class="crd-td">23,4k</td><td class="crd-td">16,4k</td></tr>
<tr><td class="crd-td"><strong>Colquechaca</strong></td><td class="crd-td">18,7 S, 66 W</td><td class="crd-td">4,8k</td><td class="crd-td">6,3k</td><td class="crd-td">10,4k</td><td class="crd-td">12,8k</td><td class="crd-td">13,7k</td><td class="crd-td">16,4k</td></tr>
<tr><td class="crd-td"><strong>Chayanta</strong></td><td class="crd-td">18,45 S, 66,46 W</td><td class="crd-td">4,9k</td><td class="crd-td">6,5k</td><td class="crd-td">10,7k</td><td class="crd-td">13,1k</td><td class="crd-td">14k</td><td class="crd-td">16k</td></tr>
<tr><td class="crd-td"><strong>Porco</strong></td><td class="crd-td">19,8 S, 65,98 W</td><td class="crd-td">2,1k</td><td class="crd-td">2,7k</td><td class="crd-td">4,5k</td><td class="crd-td">5,5k</td><td class="crd-td">5,9k</td><td class="crd-td">14,7k</td></tr>
<tr><td class="crd-td"><strong>Ocurí</strong></td><td class="crd-td">18,89 S, 65,77 W</td><td class="crd-td">6,4k</td><td class="crd-td">8,5k</td><td class="crd-td">14k</td><td class="crd-td">17,1k</td><td class="crd-td">18,3k</td><td class="crd-td">14,5k</td></tr>
<tr><td class="crd-td"><strong>Tacobamba</strong></td><td class="crd-td">19,2 S, 65,55 W</td><td class="crd-td">4,4k</td><td class="crd-td">5,9k</td><td class="crd-td">9,6k</td><td class="crd-td">11,8k</td><td class="crd-td">12,6k</td><td class="crd-td">14,4k</td></tr>
<tr><td class="crd-td"><strong>Caiza D</strong></td><td class="crd-td">20,01 S, 65,65 W</td><td class="crd-td">3,8k</td><td class="crd-td">5k</td><td class="crd-td">8,2k</td><td class="crd-td">10,1k</td><td class="crd-td">10,8k</td><td class="crd-td">13k</td></tr>
<tr><td class="crd-td"><strong>Colchani</strong></td><td class="crd-td">20,3 S, 66,93 W</td><td class="crd-td">3,5k</td><td class="crd-td">4,7k</td><td class="crd-td">7,7k</td><td class="crd-td">9,5k</td><td class="crd-td">10,2k</td><td class="crd-td">12,4k</td></tr>
<tr><td class="crd-td"><strong>Yocalla</strong></td><td class="crd-td">19,39 S, 65,91 W</td><td class="crd-td">2,8k</td><td class="crd-td">3,7k</td><td class="crd-td">6,1k</td><td class="crd-td">7,4k</td><td class="crd-td">8k</td><td class="crd-td">12,3k</td></tr>
<tr><td class="crd-td"><strong>Uyuni</strong></td><td class="crd-td">20,46 S, 66,83 W</td><td class="crd-td">3k</td><td class="crd-td">4k</td><td class="crd-td">6,6k</td><td class="crd-td">8,1k</td><td class="crd-td">8,7k</td><td class="crd-td">11,5k</td></tr>
<tr><td class="crd-td"><strong>Toro Toro</strong></td><td class="crd-td">18,23 S, 65,69 W</td><td class="crd-td">3,6k</td><td class="crd-td">4,8k</td><td class="crd-td">7,9k</td><td class="crd-td">9,7k</td><td class="crd-td">10,4k</td><td class="crd-td">10,7k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading twenty settlements in the Department of Potosí ordered by 2024AD population.</figcaption>
</figure>

## Department of Oruro

The Department of Oruro contains 35 catalogued settlements across the central Altiplano.

Urban concentration is pronounced around the departmental capital, which acts as the transport junction linking Bolivia with northern Chilean ports, complemented by agricultural and pastoral settlements in Challapata, Caracollo, Toledo and Salinas de Garci Mendoza.

Table \ref{tab:gaz-oruro} records the leading 15 settlements in Oruro.

<figure class="crd-table-figure" id="tab:gaz-oruro">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Municipality</th><th class="crd-th">Coordinates</th><th class="crd-th">1850AD</th><th class="crd-th">1900AD</th><th class="crd-th">1950AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2024AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Oruro</strong></td><td class="crd-td">17,97 S, 67,09 W</td><td class="crd-td">48,8k</td><td class="crd-td">44,3k</td><td class="crd-td">108,1k</td><td class="crd-td">163,4k</td><td class="crd-td">198,5k</td><td class="crd-td">298,4k</td></tr>
<tr><td class="crd-td"><strong>Challapata</strong></td><td class="crd-td">18,9 S, 66,77 W</td><td class="crd-td">5,9k</td><td class="crd-td">5,4k</td><td class="crd-td">13,1k</td><td class="crd-td">19,8k</td><td class="crd-td">24k</td><td class="crd-td">35,4k</td></tr>
<tr><td class="crd-td"><strong>Caracollo</strong></td><td class="crd-td">17,69 S, 67,29 W</td><td class="crd-td">5k</td><td class="crd-td">4,5k</td><td class="crd-td">11,1k</td><td class="crd-td">16,7k</td><td class="crd-td">20,3k</td><td class="crd-td">22,9k</td></tr>
<tr><td class="crd-td"><strong>Huanuni</strong></td><td class="crd-td">18,29 S, 66,84 W</td><td class="crd-td">4,7k</td><td class="crd-td">4,3k</td><td class="crd-td">10,4k</td><td class="crd-td">15,8k</td><td class="crd-td">19,1k</td><td class="crd-td">20,1k</td></tr>
<tr><td class="crd-td"><strong>Corque</strong></td><td class="crd-td">18,35 S, 67,68 W</td><td class="crd-td">2,1k</td><td class="crd-td">1,9k</td><td class="crd-td">4,6k</td><td class="crd-td">6,9k</td><td class="crd-td">8,4k</td><td class="crd-td">16,1k</td></tr>
<tr><td class="crd-td"><strong>Santiago de Huari</strong></td><td class="crd-td">19,02 S, 66,74 W</td><td class="crd-td">2,7k</td><td class="crd-td">2,4k</td><td class="crd-td">5,9k</td><td class="crd-td">8,9k</td><td class="crd-td">10,8k</td><td class="crd-td">15,6k</td></tr>
<tr><td class="crd-td"><strong>Sabaya</strong></td><td class="crd-td">19,02 S, 68,37 W</td><td class="crd-td">1,1k</td><td class="crd-td">1k</td><td class="crd-td">2,5k</td><td class="crd-td">3,8k</td><td class="crd-td">4,6k</td><td class="crd-td">15,5k</td></tr>
<tr><td class="crd-td"><strong>Totora</strong></td><td class="crd-td">17,85 S, 68,18 W</td><td class="crd-td">3,1k</td><td class="crd-td">2,8k</td><td class="crd-td">6,9k</td><td class="crd-td">10,5k</td><td class="crd-td">12,7k</td><td class="crd-td">14,8k</td></tr>
<tr><td class="crd-td"><strong>Toledo</strong></td><td class="crd-td">18,28 S, 67,41 W</td><td class="crd-td">1,9k</td><td class="crd-td">1,7k</td><td class="crd-td">4,2k</td><td class="crd-td">6,3k</td><td class="crd-td">7,6k</td><td class="crd-td">12,2k</td></tr>
<tr><td class="crd-td"><strong>El Choro</strong></td><td class="crd-td">18,36 S, 67,12 W</td><td class="crd-td">1,4k</td><td class="crd-td">1,3k</td><td class="crd-td">3,1k</td><td class="crd-td">4,6k</td><td class="crd-td">5,6k</td><td class="crd-td">10k</td></tr>
<tr><td class="crd-td"><strong>Poopó</strong></td><td class="crd-td">18,38 S, 66,97 W</td><td class="crd-td">1,5k</td><td class="crd-td">1,4k</td><td class="crd-td">3,3k</td><td class="crd-td">5k</td><td class="crd-td">6,1k</td><td class="crd-td">9,2k</td></tr>
<tr><td class="crd-td"><strong>Curahuara de Carangas</strong></td><td class="crd-td">17,84 S, 68,41 W</td><td class="crd-td">1,3k</td><td class="crd-td">1,2k</td><td class="crd-td">2,8k</td><td class="crd-td">4,3k</td><td class="crd-td">5,2k</td><td class="crd-td">6,7k</td></tr>
<tr><td class="crd-td"><strong>Machacamarca</strong></td><td class="crd-td">18,17 S, 67,02 W</td><td class="crd-td">1k</td><td class="crd-td">918</td><td class="crd-td">2,2k</td><td class="crd-td">3,4k</td><td class="crd-td">4,1k</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Andamarca</strong></td><td class="crd-td">18,78 S, 67,51 W</td><td class="crd-td">1k</td><td class="crd-td">908</td><td class="crd-td">2,2k</td><td class="crd-td">3,4k</td><td class="crd-td">4,1k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Turco</strong></td><td class="crd-td">18,18 S, 68,19 W</td><td class="crd-td">1k</td><td class="crd-td">914</td><td class="crd-td">2,2k</td><td class="crd-td">3,4k</td><td class="crd-td">4,1k</td><td class="crd-td">5,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Leading fifteen settlements in the Department of Oruro ordered by 2024AD population.</figcaption>
</figure>

## Department of Chuquisaca

The Department of Chuquisaca encompasses 34 catalogued settlements spanning the constitutional capital of Sucre, the Cinti wine valleys and the eastern Chaco hills [@klein2011history].

Table \ref{tab:gaz-chuquisaca} records the leading 15 settlements across the department.

<figure class="crd-table-figure" id="tab:gaz-chuquisaca">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Municipality</th><th class="crd-th">Coordinates</th><th class="crd-th">1850AD</th><th class="crd-th">1900AD</th><th class="crd-th">1950AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2024AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Sucre</strong></td><td class="crd-td">19,03 S, 65,26 W</td><td class="crd-td">62,6k</td><td class="crd-td">82,7k</td><td class="crd-td">114,4k</td><td class="crd-td">154,6k</td><td class="crd-td">211,4k</td><td class="crd-td">296,7k</td></tr>
<tr><td class="crd-td"><strong>San Lucas</strong></td><td class="crd-td">20,1 S, 65,13 W</td><td class="crd-td">9,4k</td><td class="crd-td">12,3k</td><td class="crd-td">17,1k</td><td class="crd-td">23,1k</td><td class="crd-td">31,6k</td><td class="crd-td">26,7k</td></tr>
<tr><td class="crd-td"><strong>Monteagudo</strong></td><td class="crd-td">19,8 S, 63,96 W</td><td class="crd-td">7,7k</td><td class="crd-td">10,2k</td><td class="crd-td">14,1k</td><td class="crd-td">19,1k</td><td class="crd-td">26,1k</td><td class="crd-td">24,5k</td></tr>
<tr><td class="crd-td"><strong>Ravelo</strong></td><td class="crd-td">18,81 S, 65,51 W</td><td class="crd-td">7,1k</td><td class="crd-td">9,4k</td><td class="crd-td">15,5k</td><td class="crd-td">19k</td><td class="crd-td">20,3k</td><td class="crd-td">16,9k</td></tr>
<tr><td class="crd-td"><strong>Incahuasi</strong></td><td class="crd-td">20,78 S, 64,87 W</td><td class="crd-td">3,1k</td><td class="crd-td">4,1k</td><td class="crd-td">5,7k</td><td class="crd-td">7,7k</td><td class="crd-td">10,5k</td><td class="crd-td">16,5k</td></tr>
<tr><td class="crd-td"><strong>Culpina</strong></td><td class="crd-td">20,87 S, 64,57 W</td><td class="crd-td">5,1k</td><td class="crd-td">6,8k</td><td class="crd-td">9,4k</td><td class="crd-td">12,6k</td><td class="crd-td">17,3k</td><td class="crd-td">14,8k</td></tr>
<tr><td class="crd-td"><strong>Camargo</strong></td><td class="crd-td">20,64 S, 65,21 W</td><td class="crd-td">4,2k</td><td class="crd-td">5,5k</td><td class="crd-td">7,7k</td><td class="crd-td">10,4k</td><td class="crd-td">14,2k</td><td class="crd-td">14,7k</td></tr>
<tr><td class="crd-td"><strong>Ckochas</strong></td><td class="crd-td">19,91 S, 64,86 W</td><td class="crd-td">5,8k</td><td class="crd-td">7,8k</td><td class="crd-td">12,7k</td><td class="crd-td">15,6k</td><td class="crd-td">16,7k</td><td class="crd-td">14,3k</td></tr>
<tr><td class="crd-td"><strong>Villa Charcas</strong></td><td class="crd-td">20,72 S, 64,88 W</td><td class="crd-td">3,6k</td><td class="crd-td">4,7k</td><td class="crd-td">6,5k</td><td class="crd-td">8,8k</td><td class="crd-td">12,1k</td><td class="crd-td">14,3k</td></tr>
<tr><td class="crd-td"><strong>Zudáñez</strong></td><td class="crd-td">19,12 S, 64,7 W</td><td class="crd-td">2,2k</td><td class="crd-td">2,9k</td><td class="crd-td">4k</td><td class="crd-td">5,3k</td><td class="crd-td">7,3k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Poroma</strong></td><td class="crd-td">18,62 S, 65,39 W</td><td class="crd-td">4,9k</td><td class="crd-td">6,5k</td><td class="crd-td">9k</td><td class="crd-td">12,2k</td><td class="crd-td">16,7k</td><td class="crd-td">13,6k</td></tr>
<tr><td class="crd-td"><strong>Tarabuco</strong></td><td class="crd-td">19,18 S, 64,92 W</td><td class="crd-td">5,7k</td><td class="crd-td">7,5k</td><td class="crd-td">10,4k</td><td class="crd-td">14,1k</td><td class="crd-td">19,2k</td><td class="crd-td">13,3k</td></tr>
<tr><td class="crd-td"><strong>Presto</strong></td><td class="crd-td">18,93 S, 64,94 W</td><td class="crd-td">2,6k</td><td class="crd-td">3,4k</td><td class="crd-td">4,7k</td><td class="crd-td">6,4k</td><td class="crd-td">8,7k</td><td class="crd-td">12,5k</td></tr>
<tr><td class="crd-td"><strong>Yotala</strong></td><td class="crd-td">19,16 S, 65,26 W</td><td class="crd-td">2,8k</td><td class="crd-td">3,7k</td><td class="crd-td">5,1k</td><td class="crd-td">6,8k</td><td class="crd-td">9,3k</td><td class="crd-td">9,3k</td></tr>
<tr><td class="crd-td"><strong>Padilla</strong></td><td class="crd-td">19,31 S, 64,3 W</td><td class="crd-td">3,6k</td><td class="crd-td">4,8k</td><td class="crd-td">6,6k</td><td class="crd-td">9k</td><td class="crd-td">12,3k</td><td class="crd-td">9,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Leading fifteen settlements in the Department of Chuquisaca ordered by 2024AD population.</figcaption>
</figure>

## Department of El Beni

The Department of El Beni contains 23 catalogued settlements across the Llanos de Moxos.

Urban settlements cluster along navigable river channels and savanna cattle stations, led by Trinidad, Riberalta, Guayaramerín and San Borja [@langer1989economic].

Table \ref{tab:gaz-beni} presents the leading 15 settlements in El Beni.

<figure class="crd-table-figure" id="tab:gaz-beni">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Municipality</th><th class="crd-th">Coordinates</th><th class="crd-th">1850AD</th><th class="crd-th">1900AD</th><th class="crd-th">1950AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2024AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Trinidad</strong></td><td class="crd-td">14,83 S, 64,9 W</td><td class="crd-td">12,6k</td><td class="crd-td">7,1k</td><td class="crd-td">26,4k</td><td class="crd-td">43,1k</td><td class="crd-td">77,8k</td><td class="crd-td">128,6k</td></tr>
<tr><td class="crd-td"><strong>Riberalta</strong></td><td class="crd-td">11,01 S, 66,05 W</td><td class="crd-td">13,5k</td><td class="crd-td">7,6k</td><td class="crd-td">28,1k</td><td class="crd-td">45,9k</td><td class="crd-td">82,9k</td><td class="crd-td">112,1k</td></tr>
<tr><td class="crd-td"><strong>San Borja</strong></td><td class="crd-td">14,85 S, 66,75 W</td><td class="crd-td">5,4k</td><td class="crd-td">3k</td><td class="crd-td">11,4k</td><td class="crd-td">18,5k</td><td class="crd-td">33,5k</td><td class="crd-td">45,8k</td></tr>
<tr><td class="crd-td"><strong>Guayaramerín</strong></td><td class="crd-td">10,83 S, 65,36 W</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">13,4k</td><td class="crd-td">21,8k</td><td class="crd-td">39,4k</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td"><strong>San Ignacio</strong></td><td class="crd-td">15,45 S, 65,62 W</td><td class="crd-td">3k</td><td class="crd-td">1,7k</td><td class="crd-td">6,4k</td><td class="crd-td">10,4k</td><td class="crd-td">18,7k</td><td class="crd-td">21,6k</td></tr>
<tr><td class="crd-td"><strong>San Andrés</strong></td><td class="crd-td">15,37 S, 64,14 W</td><td class="crd-td">1,7k</td><td class="crd-td">940</td><td class="crd-td">3,5k</td><td class="crd-td">5,7k</td><td class="crd-td">10,3k</td><td class="crd-td">15,6k</td></tr>
<tr><td class="crd-td"><strong>San Javier</strong></td><td class="crd-td">14,42 S, 64,43 W</td><td class="crd-td">1,8k</td><td class="crd-td">1k</td><td class="crd-td">3,7k</td><td class="crd-td">6,1k</td><td class="crd-td">11k</td><td class="crd-td">14,9k</td></tr>
<tr><td class="crd-td"><strong>Santa Ana de Yacuma</strong></td><td class="crd-td">13,74 S, 65,43 W</td><td class="crd-td">1,7k</td><td class="crd-td">975</td><td class="crd-td">3,6k</td><td class="crd-td">5,9k</td><td class="crd-td">10,7k</td><td class="crd-td">14,5k</td></tr>
<tr><td class="crd-td"><strong>Santa Ana</strong></td><td class="crd-td">14,24 S, 65,98 W</td><td class="crd-td">1,7k</td><td class="crd-td">975</td><td class="crd-td">3,6k</td><td class="crd-td">5,9k</td><td class="crd-td">10,7k</td><td class="crd-td">14,3k</td></tr>
<tr><td class="crd-td"><strong>Puerto Menor de Rurrenabaque</strong></td><td class="crd-td">14,44 S, 67,53 W</td><td class="crd-td">1,6k</td><td class="crd-td">896</td><td class="crd-td">3,3k</td><td class="crd-td">5,4k</td><td class="crd-td">9,8k</td><td class="crd-td">13,2k</td></tr>
<tr><td class="crd-td"><strong>Magdalena</strong></td><td class="crd-td">12,99 S, 63,69 W</td><td class="crd-td">1,6k</td><td class="crd-td">880</td><td class="crd-td">3,3k</td><td class="crd-td">5,3k</td><td class="crd-td">9,6k</td><td class="crd-td">12,8k</td></tr>
<tr><td class="crd-td"><strong>Reyes</strong></td><td class="crd-td">13,4 S, 67,06 W</td><td class="crd-td">1,8k</td><td class="crd-td">988</td><td class="crd-td">3,7k</td><td class="crd-td">6k</td><td class="crd-td">10,8k</td><td class="crd-td">11,5k</td></tr>
<tr><td class="crd-td"><strong>San Ignacio de Moxo</strong></td><td class="crd-td">14,99 S, 65,64 W</td><td class="crd-td">1,4k</td><td class="crd-td">767</td><td class="crd-td">2,9k</td><td class="crd-td">4,7k</td><td class="crd-td">8,4k</td><td class="crd-td">11,4k</td></tr>
<tr><td class="crd-td"><strong>San Ramón</strong></td><td class="crd-td">13,27 S, 64,62 W</td><td class="crd-td">895</td><td class="crd-td">502</td><td class="crd-td">1,9k</td><td class="crd-td">3k</td><td class="crd-td">5,5k</td><td class="crd-td">8,5k</td></tr>
<tr><td class="crd-td"><strong>Reyes</strong></td><td class="crd-td">14,3 S, 67,34 W</td><td class="crd-td">1k</td><td class="crd-td">562</td><td class="crd-td">2,1k</td><td class="crd-td">3,4k</td><td class="crd-td">6,2k</td><td class="crd-td">8,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Leading fifteen settlements in the Department of El Beni ordered by 2024AD population.</figcaption>
</figure>

## Department of Pando

The Department of Pando comprises 15 catalogued settlements across the northern Amazonian rainforest [@zuidema2002demography].

All 15 settlements are documented in Table \ref{tab:gaz-pando}, led by the departmental capital of Cobija on the Brazilian frontier.

<figure class="crd-table-figure" id="tab:gaz-pando">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Municipality</th><th class="crd-th">Coordinates</th><th class="crd-th">1850AD</th><th class="crd-th">1900AD</th><th class="crd-th">1950AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2024AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cobija</strong></td><td class="crd-td">11,03 S, 68,77 W</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,4k</td><td class="crd-td">15k</td><td class="crd-td">21,6k</td><td class="crd-td">55,1k</td></tr>
<tr><td class="crd-td"><strong>San Pedro</strong></td><td class="crd-td">11,03 S, 66,59 W</td><td class="crd-td">4,3k</td><td class="crd-td">5k</td><td class="crd-td">5,5k</td><td class="crd-td">9,9k</td><td class="crd-td">14,2k</td><td class="crd-td">15,2k</td></tr>
<tr><td class="crd-td"><strong>Puerto Gonzalo Moreno</strong></td><td class="crd-td">11,08 S, 66,17 W</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td><td class="crd-td">2,6k</td><td class="crd-td">3,7k</td><td class="crd-td">12,4k</td></tr>
<tr><td class="crd-td"><strong>Santa Rosa</strong></td><td class="crd-td">10,73 S, 67,28 W</td><td class="crd-td">2,6k</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k</td><td class="crd-td">6,1k</td><td class="crd-td">8,7k</td><td class="crd-td">11,1k</td></tr>
<tr><td class="crd-td"><strong>Sena</strong></td><td class="crd-td">11,49 S, 67,25 W</td><td class="crd-td">654</td><td class="crd-td">768</td><td class="crd-td">845</td><td class="crd-td">1,5k</td><td class="crd-td">2,2k</td><td class="crd-td">10,5k</td></tr>
<tr><td class="crd-td"><strong>San Lorenzo</strong></td><td class="crd-td">11,6 S, 66,82 W</td><td class="crd-td">1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">2,3k</td><td class="crd-td">3,4k</td><td class="crd-td">9,8k</td></tr>
<tr><td class="crd-td"><strong>Porvenir</strong></td><td class="crd-td">11,24 S, 68,79 W</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td><td class="crd-td">2,5k</td><td class="crd-td">3,6k</td><td class="crd-td">9,4k</td></tr>
<tr><td class="crd-td"><strong>Filadelfia</strong></td><td class="crd-td">11,35 S, 68,76 W</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">2,1k</td><td class="crd-td">3k</td><td class="crd-td">8k</td></tr>
<tr><td class="crd-td"><strong>Puerto Rico</strong></td><td class="crd-td">11,33 S, 67,54 W</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td><td class="crd-td">2,7k</td><td class="crd-td">3,9k</td><td class="crd-td">7,4k</td></tr>
<tr><td class="crd-td"><strong>Bolpebra</strong></td><td class="crd-td">10,95 S, 69,56 W</td><td class="crd-td">625</td><td class="crd-td">733</td><td class="crd-td">807</td><td class="crd-td">1,4k</td><td class="crd-td">2,1k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Nueva Esperanza</strong></td><td class="crd-td">10,11 S, 65,54 W</td><td class="crd-td">625</td><td class="crd-td">733</td><td class="crd-td">807</td><td class="crd-td">1,4k</td><td class="crd-td">2,1k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Bella Flor</strong></td><td class="crd-td">10,93 S, 67,93 W</td><td class="crd-td">673</td><td class="crd-td">790</td><td class="crd-td">869</td><td class="crd-td">1,6k</td><td class="crd-td">2,2k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Ingavi</strong></td><td class="crd-td">10,5 S, 66,75 W</td><td class="crd-td">262</td><td class="crd-td">308</td><td class="crd-td">339</td><td class="crd-td">606</td><td class="crd-td">872</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Villa Nueva</strong></td><td class="crd-td">10,65 S, 66,11 W</td><td class="crd-td">290</td><td class="crd-td">340</td><td class="crd-td">374</td><td class="crd-td">669</td><td class="crd-td">963</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Santos Mercado</strong></td><td class="crd-td">9,95 S, 66,62 W</td><td class="crd-td">149</td><td class="crd-td">174</td><td class="crd-td">192</td><td class="crd-td">343</td><td class="crd-td">493</td><td class="crd-td">2,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Catalogued settlements in the Department of Pando ordered by 2024AD population.</figcaption>
</figure>

## Department of Tarija

The Department of Tarija contains 9 catalogued settlements, all of which are documented in Table \ref{tab:gaz-tarija}.

The departmental capital of Tarija in the Guadalquivir valley contrasts with the rapidly growing Chaco hydrocarbon centres of Yacuiba, Villa Montes, Bermejo and Caraparí [@fifer1972bolivia].

<figure class="crd-table-figure" id="tab:gaz-tarija">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Municipality</th><th class="crd-th">Coordinates</th><th class="crd-th">1850AD</th><th class="crd-th">1900AD</th><th class="crd-th">1950AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2024AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tarija</strong></td><td class="crd-td">21,54 S, 64,73 W</td><td class="crd-td">25,4k</td><td class="crd-td">40,4k</td><td class="crd-td">49,7k</td><td class="crd-td">83,6k</td><td class="crd-td">149,1k</td><td class="crd-td">238,7k</td></tr>
<tr><td class="crd-td"><strong>Yacuiba</strong></td><td class="crd-td">22,02 S, 63,68 W</td><td class="crd-td">13,8k</td><td class="crd-td">22k</td><td class="crd-td">27,1k</td><td class="crd-td">45,5k</td><td class="crd-td">81,2k</td><td class="crd-td">97,6k</td></tr>
<tr><td class="crd-td"><strong>Villa Montes</strong></td><td class="crd-td">21,26 S, 63,47 W</td><td class="crd-td">5,3k</td><td class="crd-td">8,5k</td><td class="crd-td">10,4k</td><td class="crd-td">17,6k</td><td class="crd-td">31,3k</td><td class="crd-td">44,6k</td></tr>
<tr><td class="crd-td"><strong>Bermejo</strong></td><td class="crd-td">22,73 S, 64,34 W</td><td class="crd-td">5,5k</td><td class="crd-td">8,8k</td><td class="crd-td">10,8k</td><td class="crd-td">18,2k</td><td class="crd-td">32,4k</td><td class="crd-td">37k</td></tr>
<tr><td class="crd-td"><strong>Padcaya</strong></td><td class="crd-td">21,89 S, 64,71 W</td><td class="crd-td">3,2k</td><td class="crd-td">5,1k</td><td class="crd-td">6,2k</td><td class="crd-td">10,5k</td><td class="crd-td">18,7k</td><td class="crd-td">17,8k</td></tr>
<tr><td class="crd-td"><strong>Uriondo</strong></td><td class="crd-td">21,7 S, 64,66 W</td><td class="crd-td">2k</td><td class="crd-td">3,2k</td><td class="crd-td">4k</td><td class="crd-td">6,7k</td><td class="crd-td">12k</td><td class="crd-td">15,9k</td></tr>
<tr><td class="crd-td"><strong>Caraparí</strong></td><td class="crd-td">21,82 S, 63,9 W</td><td class="crd-td">1,5k</td><td class="crd-td">2,4k</td><td class="crd-td">2,9k</td><td class="crd-td">4,9k</td><td class="crd-td">8,8k</td><td class="crd-td">15,6k</td></tr>
<tr><td class="crd-td"><strong>Yunchará</strong></td><td class="crd-td">21,82 S, 65,23 W</td><td class="crd-td">856</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">2,8k</td><td class="crd-td">5k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Entre Ríos</strong></td><td class="crd-td">21,53 S, 64,17 W</td><td class="crd-td">359</td><td class="crd-td">571</td><td class="crd-td">704</td><td class="crd-td">1,2k</td><td class="crd-td">2,1k</td><td class="crd-td">3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 10.</span> Catalogued settlements in the Department of Tarija ordered by 2024AD population.</figcaption>
</figure>

# Sources

<div id="refs"></div>
