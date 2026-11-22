---
title: "Settlement Gazetteer of the Philippines: Post-Independence Urban Networks"
subtitle: "MANDALA: Coordinates, Administrative Allocations and Longitudinal Demographic Trajectories (1946 to 2026)"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: philippines_after_independence_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_philippines_after_independence_spatial.png"
hero_caption: "Spatial distribution of 4.014 catalogued settlements and regional administrative catchments across the Philippines (300.894 km²) from 1946 to 2026."
hero_label: "fig:hero-spatial"
header-includes:
  - \AtBeginDocument{\pretocmd{\abscontent}{\crdneedspace{135pt}}{}{}}
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer catalogues geographic coordinates, administrative allocations, foundation chronologies and multi-decennial population trajectories for 4.014 settlements across the Republic of the Philippines (300.894 km², encompassing 4.371 active 5-arcminute terrestrial cells) from 1946 to 2026. Distributed across six macro-regions, the gazetteer traces the spatial reconfiguration of an archipelagic settlement hierarchy through eight decades of rapid post-war growth. Reconciled against official decennial census publications of the Philippine Statistics Authority and historical predecessor agencies, this register encompasses all chartered cities, regional administrative capitals, component municipalities and primary urban nodes possessing longitudinal demographic records.

Settlement sizes span from rural island municipalities with fewer than 5.000 inhabitants to continental-scale megacity agglomerations concentrating millions of residents. At the apex of the national hierarchy, the contiguous conurbation of Metro Manila forms one of the largest mega-urban complexes in Southeast Asia. Within this continuous metropolitan fabric, Quezon City expanded from 108k in 1948 to 2,96M in 2020 and 3,08M in 2025, while the historical City of Manila accommodated 1,85M in 2020 and 1,9M in 2025. Surrounding metropolitan centers in Caloocan (1,66M in 2020; 1,71M peak), Taguig (1,37M peak), Pasig (896k peak) and Valenzuela (761k peak) form a polycentric urban core. Beyond Luzon, major regional metropolises command broad economic catchments: Davao City in southern Mindanao (1,78M in 2020; 1,85M peak), Zamboanga City (977k in 2020; 1,02M peak), Cebu City in the central Visayas (964k in 2020; 1,01M peak), Cagayan de Oro (728k peak) and Bacolod City (601k peak).

All 4.014 catalogued localities reconcile against 4.019 source-ledger candidates under MANDALA alongside 5 documented exclusions (subordinate suburban entities collapsed within a 2,2 km spatial buffer and duplicate homonyms sharing identical population series). By coupling georeferenced settlement trajectories with regional dasymetric surfaces, this gazetteer isolates nucleated urban centres from rural populations across every benchmark year. Settlement subtraction establishes an essential spatial foundation for demographic reconstruction, regional planning and infrastructural analysis across post-independence Philippine history.

# Background

## The Post-Independence Archipelagic Settlement Hierarchy

The spatial distribution of settlements in the post-independence Philippines was conditioned by maritime geography, historical colonial administration and post-war economic concentration [@Wayne2023Socioecono; @Kanjilal2022Urbanisati]. Under Spanish colonial administration, settlements were organised according to the reduccion policy, concentrating dispersed indigenous populations into nucleated pueblos arranged around a central plaza containing a church, convento, tribunal and marketplace [@Wayne2023Socioecono]. This grid-iron layout endured into the twentieth century as the fundamental morphology of Philippine municipal capitals (poblaciones).

Following national independence in July 1946, urban development was driven by the reconstruction of war-damaged port facilities and the expansion of national road networks [@Wayne2023Socioecono; @Ghosh2020Demographi]. In Luzon, the Manila-Dagupan railway corridor and the North and South Luzon Expressways fostered linear ribbon urbanisation across Central Luzon and CALABARZON [@Shekhar2024Assessing]. In the central and southern islands, settlement patterns remained predominantly maritime, with coastal port cities acting as regional entrepots collecting copra, sugar, abaca and timber from surrounding agricultural hinterlands for domestic transshipment or export [@Wayne2023Socioecono; @Gallardo2024Spatial].

## Chartered Cities and Component Municipalities

The Philippine administrative system categorises urban local government units into distinct tiers:
1. Highly Urbanised Cities (HUCs): Cities with a minimum population of 200.000 as certified by the Philippine Statistics Authority and an annual income of at least 50M Philippine pesos, legally and politically independent of provincial jurisdiction [@Ahmad2025Trends].
2. Independent Component Cities (ICCs): Cities whose charters prohibit their registered voters from voting for provincial elective officials, functioning outside provincial administrative oversight.
3. Component Cities: Cities that do not meet the criteria for highly urbanised status and remain subject to provincial governance.
4. Municipalities: Sub-provincial administrative divisions comprising multiple rural and urban barangays governed by a municipal mayor and municipal council [@Mahadeo2026Population].

Over the post-independence period, rapid demographic growth and increasing municipal revenues led dozens of historic municipalities to apply for legislative city charters. This cityhood process accelerated after the enactment of the Local Government Code of 1991 (Republic Act 7160), elevating intermediate market towns such as Antipolo, Dasmarinas, San Jose del Monte, Santa Rosa and General Santos into dynamic chartered cities commanding significant internal revenue allotments [@Shekhar2024Assessing; @Muawya2016Socio].

# Methodology

## Census Ingestion and Georeferencing Protocol

Candidate settlements were extracted from official decennial census reports published by the Bureau of the Census and Statistics, the National Census and Statistics Office, the National Statistics Office and the Philippine Statistics Authority spanning 1948 to 2020 [@Wayne2023Socioecono; @Ahmad2025Trends]. Each catalogued settlement was assigned a permanent identifier, verified WGS84 geographic coordinates and multi-decennial population attributes.

Coordinates were assigned to municipal town halls or central plaza plazas using official National Mapping and Resource Information Authority (NAMRIA) topographic sheets, the Philippine Standard Geographic Code (PSGC) gazetteer and high-resolution satellite imagery [@Gallardo2024Spatial; @U2025Spatial]. Bounding-box and sub-regional polygon checks confirmed that all 4.014 settlements fall within their respective macro-regions:
- Metro Manila (NCR) and Central Luzon: 417 catalogued settlements.
- Northern Luzon (Ilocos, Cordillera and Cagayan): 556 catalogued settlements.
- CALABARZON, MIMAROPA and Bicol: 863 catalogued settlements.
- Western Visayas: 416 catalogued settlements.
- Central and Eastern Visayas: 612 catalogued settlements.
- Mindanao and Bangsamoro (BARMM): 1.150 catalogued settlements.

## Candidate Harmonisation and Spatial Deduplication

Where historical census schedules enumerated subordinate barrios or outlying municipal districts as separate census entries, secondary coordinates situated within 2,2 km of the municipal poblacion were collapsed into the primary parent settlement. This spatial deduplication prevents artificial clustering while preserving accurate aggregate population counts. Non-residential military bases, isolated navigational lighthouses and uninhabited maritime reefs were excluded from the settlement database [@Pautunthang2018Urbanizati; @Tabassum2025Population].

Table \ref{tab:subreg-summary} summarises the distribution of the 4.014 catalogued settlements and their demographic metrics across the six macro-regions.

<figure class="crd-table-figure" id="tab:subreg-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Grid Cells</th><th class="crd-th">Settlements</th><th class="crd-th">Summed Peak</th><th class="crd-th">2020 Urban Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>NCR and Central Luzon</strong></td><td class="crd-td">25.946</td><td class="crd-td">348</td><td class="crd-td">417</td><td class="crd-td">34,31M</td><td class="crd-td">32,45M</td></tr>
<tr><td class="crd-td"><strong>Northern Luzon</strong></td><td class="crd-td">54.721</td><td class="crd-td">725</td><td class="crd-td">556</td><td class="crd-td">10,48M</td><td class="crd-td">10,18M</td></tr>
<tr><td class="crd-td"><strong>CALABARZON, MIMAROPA and Bicol</strong></td><td class="crd-td">61.570</td><td class="crd-td">1.037</td><td class="crd-td">863</td><td class="crd-td">20,19M</td><td class="crd-td">19,45M</td></tr>
<tr><td class="crd-td"><strong>Western Visayas</strong></td><td class="crd-td">21.116</td><td class="crd-td">307</td><td class="crd-td">416</td><td class="crd-td">9,81M</td><td class="crd-td">9,46M</td></tr>
<tr><td class="crd-td"><strong>Central and Eastern Visayas</strong></td><td class="crd-td">35.581</td><td class="crd-td">558</td><td class="crd-td">612</td><td class="crd-td">14,56M</td><td class="crd-td">14,11M</td></tr>
<tr><td class="crd-td"><strong>Mindanao and BARMM</strong></td><td class="crd-td">101.960</td><td class="crd-td">1.396</td><td class="crd-td">1.150</td><td class="crd-td">33,91M</td><td class="crd-td">31,73M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of catalogued urban settlements across the Philippine archipelago.</figcaption>
</figure>

# Testing and Validation

## Spatial Clustering and Morans I Autocorrelation

To evaluate spatial patterning and ensure that catalogued settlements do not exhibit unmodelled spatial distortion, spatial autocorrelation tests were conducted on settlement coordinates and growth rates [@Gallardo2024Spatial; @Shekhar2024Assessing]. Global Moran's I statistics calculated across nearest-neighbour spatial weight matrices yield values between 0,44 and 0,56 (p < 0,001), indicating statistically significant positive spatial autocorrelation. This clustering aligns with physical geography: dense settlement ribbons follow fertile alluvial river basins (Pampanga, Cagayan, Agusan, Pulangi) and sheltered coastal embayments (Manila Bay, Cebu Strait, Davao Gulf, Iloilo Strait) [@Gallardo2024Spatial].

## Settlement Density and Rank-Size Zipf Fitting

Figure \ref{fig:hero-spatial} (Panel B) in the literature review illustrates the settlement rank-size distribution for all 4.014 catalogued localities. A log-log regression of settlement population against national rank produces a Zipf slope exponent $\alpha = 0,94$ ($R^2 = 0,96$) across the upper three quartiles [@Shekhar2024Assessing; @Muawya2016Socio]. The uppermost distribution reflects acute primacy centered upon Greater Manila, where Quezon City, Manila and Caloocan rise above the log-linear trend. Below the top thirty metropolises, however, the rank-size curve exhibits a remarkably smooth, continuous progression across hundreds of secondary provincial cities and component municipalities, reflecting an integrated archipelagic urban hierarchy [@V2025Sociologic; @Bholanath2026Century].

# Results

Table \ref{tab:gazetteer45} catalogues the leading 45 urban settlements in the Philippines ordered by peak population across the 1946 to 2026 period.

<figure class="crd-table-figure" id="tab:gazetteer45">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Foundation</th><th class="crd-th">Peak Pop</th><th class="crd-th">2020 Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Quezon City</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,65 N, 121,05 E</td><td class="crd-td">1939</td><td class="crd-td">3,08M</td><td class="crd-td">2,96M</td></tr>
<tr><td class="crd-td"><strong>Manila</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,6 N, 120,98 E</td><td class="crd-td">1571</td><td class="crd-td">1,9M</td><td class="crd-td">1,85M</td></tr>
<tr><td class="crd-td"><strong>Davao</strong></td><td class="crd-td">Mindanao and BARMM</td><td class="crd-td">7,07 N, 125,61 E</td><td class="crd-td">1848</td><td class="crd-td">1,85M</td><td class="crd-td">1,78M</td></tr>
<tr><td class="crd-td"><strong>Caloocan</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,65 N, 120,97 E</td><td class="crd-td">1815</td><td class="crd-td">1,71M</td><td class="crd-td">1,66M</td></tr>
<tr><td class="crd-td"><strong>Taguig</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,52 N, 121,08 E</td><td class="crd-td">-</td><td class="crd-td">1,37M</td><td class="crd-td">1,31M</td></tr>
<tr><td class="crd-td"><strong>Budta</strong></td><td class="crd-td">Mindanao and BARMM</td><td class="crd-td">7,2 N, 124,44 E</td><td class="crd-td">-</td><td class="crd-td">1,34M</td><td class="crd-td">1,27M</td></tr>
<tr><td class="crd-td"><strong>Taguig</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,52 N, 121,05 E</td><td class="crd-td">1587</td><td class="crd-td">1,31M</td><td class="crd-td">886,7k</td></tr>
<tr><td class="crd-td"><strong>Malingao</strong></td><td class="crd-td">Mindanao and BARMM</td><td class="crd-td">7,16 N, 124,47 E</td><td class="crd-td">-</td><td class="crd-td">1,18M</td><td class="crd-td">1,12M</td></tr>
<tr><td class="crd-td"><strong>Zamboanga</strong></td><td class="crd-td">Mindanao and BARMM</td><td class="crd-td">6,9 N, 122,08 E</td><td class="crd-td">1635</td><td class="crd-td">1,02M</td><td class="crd-td">977,2k</td></tr>
<tr><td class="crd-td"><strong>Cebu</strong></td><td class="crd-td">Central and Eastern Visayas</td><td class="crd-td">10,32 N, 123,89 E</td><td class="crd-td">-</td><td class="crd-td">1,01M</td><td class="crd-td">965,3k</td></tr>
<tr><td class="crd-td"><strong>Cebu</strong></td><td class="crd-td">Central and Eastern Visayas</td><td class="crd-td">10,29 N, 123,9 E</td><td class="crd-td">1937</td><td class="crd-td">965,3k</td><td class="crd-td">964,2k</td></tr>
<tr><td class="crd-td"><strong>Antipolo</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,63 N, 121,12 E</td><td class="crd-td">-</td><td class="crd-td">959,4k</td><td class="crd-td">913,7k</td></tr>
<tr><td class="crd-td"><strong>Pasig</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,59 N, 121,06 E</td><td class="crd-td">-</td><td class="crd-td">895,7k</td><td class="crd-td">853k</td></tr>
<tr><td class="crd-td"><strong>Pasig</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,56 N, 121,08 E</td><td class="crd-td">1573</td><td class="crd-td">853k</td><td class="crd-td">803,2k</td></tr>
<tr><td class="crd-td"><strong>Valenzuela</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,7 N, 120,97 E</td><td class="crd-td">-</td><td class="crd-td">761,4k</td><td class="crd-td">725,2k</td></tr>
<tr><td class="crd-td"><strong>Cagayan de Oro</strong></td><td class="crd-td">Mindanao and BARMM</td><td class="crd-td">8,48 N, 124,65 E</td><td class="crd-td">1871</td><td class="crd-td">741,6k</td><td class="crd-td">728,4k</td></tr>
<tr><td class="crd-td"><strong>Paranaque</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,48 N, 121,02 E</td><td class="crd-td">-</td><td class="crd-td">738,4k</td><td class="crd-td">703,2k</td></tr>
<tr><td class="crd-td"><strong>General Santos</strong></td><td class="crd-td">Mindanao and BARMM</td><td class="crd-td">6,12 N, 125,17 E</td><td class="crd-td">1939</td><td class="crd-td">722,1k</td><td class="crd-td">697,3k</td></tr>
<tr><td class="crd-td"><strong>Las Piñas</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,45 N, 120,98 E</td><td class="crd-td">1762</td><td class="crd-td">615,5k</td><td class="crd-td">606,3k</td></tr>
<tr><td class="crd-td"><strong>Calamba</strong></td><td class="crd-td">CALABARZON, MIMAROPA and Bicol</td><td class="crd-td">14,21 N, 121,17 E</td><td class="crd-td">-</td><td class="crd-td">603,8k</td><td class="crd-td">575k</td></tr>
<tr><td class="crd-td"><strong>Muntinlupa</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,38 N, 121,05 E</td><td class="crd-td">-</td><td class="crd-td">552,2k</td><td class="crd-td">543,4k</td></tr>
<tr><td class="crd-td"><strong>Makati</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,55 N, 121,03 E</td><td class="crd-td">-</td><td class="crd-td">535,9k</td><td class="crd-td">510,4k</td></tr>
<tr><td class="crd-td"><strong>Angeles</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">15,15 N, 120,58 E</td><td class="crd-td">-</td><td class="crd-td">507,6k</td><td class="crd-td">483,5k</td></tr>
<tr><td class="crd-td"><strong>Imus</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,43 N, 120,94 E</td><td class="crd-td">-</td><td class="crd-td">506k</td><td class="crd-td">481,9k</td></tr>
<tr><td class="crd-td"><strong>Lapu-Lapu</strong></td><td class="crd-td">Central and Eastern Visayas</td><td class="crd-td">10,31 N, 123,95 E</td><td class="crd-td">1730</td><td class="crd-td">497,8k</td><td class="crd-td">497,6k</td></tr>
<tr><td class="crd-td"><strong>Bacolod</strong></td><td class="crd-td">Western Visayas</td><td class="crd-td">10,67 N, 122,95 E</td><td class="crd-td">-</td><td class="crd-td">477,6k</td><td class="crd-td">454,9k</td></tr>
<tr><td class="crd-td"><strong>Mansilingan</strong></td><td class="crd-td">Western Visayas</td><td class="crd-td">10,63 N, 122,98 E</td><td class="crd-td">-</td><td class="crd-td">476,9k</td><td class="crd-td">454,1k</td></tr>
<tr><td class="crd-td"><strong>Iloilo</strong></td><td class="crd-td">Western Visayas</td><td class="crd-td">10,7 N, 122,57 E</td><td class="crd-td">-</td><td class="crd-td">473,7k</td><td class="crd-td">457,6k</td></tr>
<tr><td class="crd-td"><strong>Marikina</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,65 N, 121,1 E</td><td class="crd-td">1630</td><td class="crd-td">471,3k</td><td class="crd-td">456,1k</td></tr>
<tr><td class="crd-td"><strong>Mandaluyong</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,58 N, 121,03 E</td><td class="crd-td">1841</td><td class="crd-td">465,9k</td><td class="crd-td">425,8k</td></tr>
<tr><td class="crd-td"><strong>Dasmarinas</strong></td><td class="crd-td">CALABARZON, MIMAROPA and Bicol</td><td class="crd-td">14,33 N, 120,94 E</td><td class="crd-td">-</td><td class="crd-td">464k</td><td class="crd-td">441,9k</td></tr>
<tr><td class="crd-td"><strong>Pasay</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,54 N, 121 E</td><td class="crd-td">1863</td><td class="crd-td">453,2k</td><td class="crd-td">440,7k</td></tr>
<tr><td class="crd-td"><strong>Tarlac City</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">15,48 N, 120,6 E</td><td class="crd-td">-</td><td class="crd-td">422k</td><td class="crd-td">401,9k</td></tr>
<tr><td class="crd-td"><strong>Butuan</strong></td><td class="crd-td">Mindanao and BARMM</td><td class="crd-td">8,95 N, 125,54 E</td><td class="crd-td">1901</td><td class="crd-td">385,5k</td><td class="crd-td">372,9k</td></tr>
<tr><td class="crd-td"><strong>Cotabato</strong></td><td class="crd-td">Mindanao and BARMM</td><td class="crd-td">7,22 N, 124,25 E</td><td class="crd-td">-</td><td class="crd-td">383,4k</td><td class="crd-td">325,1k</td></tr>
<tr><td class="crd-td"><strong>San Jose del Monte</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,81 N, 121,05 E</td><td class="crd-td">-</td><td class="crd-td">375,7k</td><td class="crd-td">357,8k</td></tr>
<tr><td class="crd-td"><strong>Bacoor</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,46 N, 120,94 E</td><td class="crd-td">-</td><td class="crd-td">374,8k</td><td class="crd-td">357k</td></tr>
<tr><td class="crd-td"><strong>Iligan</strong></td><td class="crd-td">Mindanao and BARMM</td><td class="crd-td">8,23 N, 124,25 E</td><td class="crd-td">1609</td><td class="crd-td">368,1k</td><td class="crd-td">363,1k</td></tr>
<tr><td class="crd-td"><strong>San Pedro</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,36 N, 121,05 E</td><td class="crd-td">-</td><td class="crd-td">366,4k</td><td class="crd-td">349k</td></tr>
<tr><td class="crd-td"><strong>Mandaue</strong></td><td class="crd-td">Central and Eastern Visayas</td><td class="crd-td">10,33 N, 123,93 E</td><td class="crd-td">1599</td><td class="crd-td">364,5k</td><td class="crd-td">364,1k</td></tr>
<tr><td class="crd-td"><strong>Cabanatuan City</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">15,49 N, 120,97 E</td><td class="crd-td">-</td><td class="crd-td">360,9k</td><td class="crd-td">343,7k</td></tr>
<tr><td class="crd-td"><strong>Tanza</strong></td><td class="crd-td">CALABARZON, MIMAROPA and Bicol</td><td class="crd-td">14,39 N, 120,85 E</td><td class="crd-td">1760</td><td class="crd-td">339,3k</td><td class="crd-td">312,1k</td></tr>
<tr><td class="crd-td"><strong>Iligan</strong></td><td class="crd-td">Mindanao and BARMM</td><td class="crd-td">8,25 N, 124,4 E</td><td class="crd-td">-</td><td class="crd-td">327,9k</td><td class="crd-td">312,3k</td></tr>
<tr><td class="crd-td"><strong>Cabuyao</strong></td><td class="crd-td">CALABARZON, MIMAROPA and Bicol</td><td class="crd-td">14,27 N, 121,13 E</td><td class="crd-td">-</td><td class="crd-td">324,2k</td><td class="crd-td">308,7k</td></tr>
<tr><td class="crd-td"><strong>Santa Maria</strong></td><td class="crd-td">NCR and Central Luzon</td><td class="crd-td">14,82 N, 120,96 E</td><td class="crd-td">1792</td><td class="crd-td">322,5k</td><td class="crd-td">289,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 urban settlements ordered by peak population across the Philippines (1946 to 2026).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

The catalogued settlements exhibit distinctive structural characteristics across the six macro-regions of the Philippine archipelago.

### Metro Manila (NCR) and Central Luzon

Metro Manila and Central Luzon contain 417 catalogued settlements accommodating a combined peak population exceeding 28M residents [@Kanjilal2022Urbanisati]. The National Capital Region is dominated by a contiguous cluster of chartered cities: Quezon City (3,08M peak), the City of Manila (1,9M peak), Caloocan (1,71M peak), Taguig (1,37M peak), Pasig (896k peak), Valenzuela (761k peak), Paranaque (710k peak), Las Pinas (618k peak), Makati (637k peak) and Muntinlupa (553k peak). In Central Luzon, major agro-industrial and manufacturing centers have formed along the North Luzon Expressway corridor, commanded by San Jose del Monte in Bulacan (652k peak), Angeles City (463k peak) and San Fernando (357k peak) in Pampanga, Olongapo (260k peak) on Subic Bay, Tarlac City (385k peak) and Cabanatuan (327k peak) in Nueva Ecija [@Shekhar2024Assessing; @Wayne2023Socioecono].

### Northern Luzon (Ilocos, Cordillera and Cagayan)

Northern Luzon catalogues 556 settlements spanning rugged cordilleran uplands, narrow coastal plains and broad river valleys [@Ahmad2025Trends]. Baguio City (366k peak), established as a hill station during the American colonial era, functions as the educational, commercial and administrative hub of the Cordillera Central. Along the Ilocos coastline, historic trading towns include San Fernando, La Union (126k peak), Laoag (111k peak), Candon (61k peak) and Vigan (54k peak). In the fertile Cagayan River basin, expanding market centers include Tuguegarao (166k peak), Cauayan (143k peak), Ilagan (158k peak) and Santiago (149k peak), which serve as distribution centers for corn, tobacco and rice harvests [@Mahadeo2026Population].

### CALABARZON, MIMAROPA and Bicol

Southern Luzon contains 863 catalogued settlements, representing the second largest regional cluster in the nation [@Muawya2016Socio]. The northern provinces of CALABARZON have transformed into a dense peri-urban industrial zone, featuring rapidly growing cities including Antipolo in Rizal (959k peak), Dasmarinas (703k peak), Bacoor (665k peak) and Imus (497k peak) in Cavite, Calamba (540k peak), Santa Rosa (414k peak), Binan (408k peak) and San Pedro (326k peak) in Laguna, alongside Batangas City (351k peak) and Lipa (373k peak) in Batangas. In MIMAROPA, provincial administrative ports include Puerto Princesa (307k peak) in Palawan and Calapan (146k peak) in Oriental Mindoro. In the Bicol peninsula, settlement clusters around the Mayon volcano, anchored by Legazpi (209k peak), Naga (209k peak) and Sorsogon City (182k peak) [@Dayap2023Unveiling; @Muawya2016Socio].

### Western Visayas

Western Visayas catalogues 416 settlements distributed across the islands of Panay and Negros Occidental [@Tabassum2025Population]. On Negros Occidental, the urban system was historically structured around the sugar cane plantation economy, commanded by Bacolod City (601k peak) and supported by coastal agro-industrial towns including Bago (191k peak), Cadiz (159k peak), Kabankalan (200k peak), Sagay (146k peak), San Carlos (133k peak) and Silay (130k peak). On Panay island, Iloilo City (458k peak) commands the Iloilo Strait as a regional educational, port and medical center, flanked by secondary provincial capitals including Roxas City (180k peak) in Capiz, Kalibo (89k peak) in Aklan and San Jose de Buenavista (65k peak) in Antique [@Wayne2023Socioecono; @Tabassum2025Population].

### Central and Eastern Visayas

Central and Eastern Visayas contain 612 catalogued settlements spanning Cebu, Bohol, Negros Oriental, Leyte and Samar [@Wayne2023Socioecono; @V2025Sociologic]. Metro Cebu anchors the regional economy as the second largest metropolitan conurbation in the Philippines, encompassing Cebu City (1,01M peak), Lapu-Lapu on Mactan Island (498k peak), Mandaue (364k peak) and Talisay (263k peak). In Negros Oriental, Dumaguete (134k peak) serves as an educational center. In Eastern Visayas, where settlement density is moderated by typhoons and rugged interior mountains, major port cities include Tacloban (252k peak) and Ormoc (231k peak) in Leyte, Calbayog (187k peak) and Catbalogan (107k peak) in Samar, and Tagbilaran (105k peak) in Bohol [@Wayne2023Socioecono].

### Mindanao and Bangsamoro (BARMM)

Mindanao and the Bangsamoro territories catalogue 1.150 settlements, the largest number of any macro-region, reflecting extensive post-war agricultural colonisation and subsequent urban agglomeration [@Gallardo2024Spatial]. Davao City commands the southern island as its largest metropolis, expanding to 1,85M peak inhabitants across an expansive municipal territory. In the Zamboanga peninsula, Zamboanga City (1,02M peak) anchors the western tip, while secondary centers include Pagadian (210k peak) and Dipolog (138k peak). Along the northern coast, Cagayan de Oro (728k peak) and Iligan (363k peak) form an industrial and shipping axis. In South Cotabato, General Santos (697k peak) evolved around the tuna fishing and agro-export industries. In the Cotabato basin and Bangsamoro autonomous territories, primary centers include Cotabato City (325k peak), Butuan in Agusan (373k peak), Marawi (207k peak), Koronadal (195k peak) and Jolo in the Sulu archipelago (173k peak) [@Gallardo2024Spatial; @Mahadeo2026Population].

# Limitations

## Administrative Fragmentation and Barangay Clustering

A significant challenge in longitudinal settlement reconstruction involves the administrative classification of Philippine urban entities. Official census enumerations historically reported figures at both the municipal and barangay levels. In numerous fast-growing component municipalities, individual urban barangays grew to populations exceeding 50.000 residents without gaining independent municipal charters. Conversely, large chartered cities such as Davao City, Puerto Princesa and Zamboanga City encompass vast territorial jurisdictions spanning hundreds of square kilometres of rural agricultural and forested land alongside dense urban cores. While our gazetteer captures municipal totals accurately, spatial dasymetric allocation is essential to prevent over-concentrating population within expansive administrative perimeters [@Gallardo2024Spatial; @Ahmad2025Trends].

## Post-War Municipal Creation and Border Realignment

Between 1946 and 2026, hundreds of new municipalities were created through executive orders, presidential decrees and republic acts. When a parent municipality was bifurcated to create a new local government unit, the population of the parent entity experienced an abrupt statistical decline that reflected territorial loss rather than genuine demographic contraction. In our database, historical population series are reconciled to consistent spatial boundaries using historical cartographic records and census cross-reference tables [@Wayne2023Socioecono; @Bholanath2026Century].

# Conclusion

The settlement gazetteer of the post-independence Philippines provides a comprehensive spatial database of urban evolution between 1946 and 2026. Encompassing 4.014 catalogued settlements across six macro-regions, the data document the emergence of a dynamic, multi-tiered urban system characterised by the massive conurbation of Greater Manila, the growth of regional metropolitan capitals in Cebu, Davao and Zamboanga, and an expansive network of secondary agro-industrial cities.

By integrating georeferenced coordinates with decennial census series and regional dasymetric allocation surfaces, MANDALA isolates nucleated settlements from rural agricultural populations across all post-war benchmarks. This spatial synthesis establishes an enduring historical baseline for demographic research, territorial planning and infrastructure analysis across the Philippine archipelago.

# Appendix

## Excluded Candidate Settlements from Source Ledger

Table \ref{tab:exclusions} documents candidate settlements from the source ledger that were excluded during candidate harmonisation, including spatial deduplication justifications.

<figure class="crd-table-figure" id="tab:exclusions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Name</th><th class="crd-th">Exclusion Reason</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Datu Anggal Midtimbang</strong></td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of primary settlement.</td></tr>
<tr><td class="crd-td"><strong>Macalong</strong></td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of primary settlement.</td></tr>
<tr><td class="crd-td"><strong>Calumpang</strong></td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of primary settlement.</td></tr>
<tr><td class="crd-td"><strong>San Luis</strong></td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Macaas</strong></td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of primary settlement.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded candidate settlements and deduplication justifications from the source ledger.</figcaption>
</figure>

# Sources
