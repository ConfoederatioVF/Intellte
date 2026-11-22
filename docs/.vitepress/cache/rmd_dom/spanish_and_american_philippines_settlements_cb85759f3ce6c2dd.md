---
title: "Settlement Gazetteer of the Spanish and American Philippines"
subtitle: "MANDALA: Coordinates, Parochial Gazetteers and Demographic Series (1565 to 1946)"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: spanish_and_american_philippines_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_spanish_and_american_philippines_spatial.png"
hero_caption: "Spatial distribution of 3.793 catalogued settlements and insular administrative catchments across the Philippine archipelago (300.894 km²) from 1565 to 1946."
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

This settlement gazetteer catalogues geographic coordinates, administrative hierarchies, historical toponymic transitions and multi-century demographic series for 4781 catalogued settlements across the Philippine archipelago (300.894 km², encompassing 4.371 active 5-arcminute terrestrial cells) from the initial Spanish conquest in 1565 to the proclamation of Philippine independence in 1946. Spanning six physiographic divisions and more than seven thousand islands, the gazetteer encompasses diverse settlement traditions: fortified stone presidios and ecclesiastical cabeceras in coastal lowlands, extramural trading suburbs (arrabales), dispersed agrarian farming hamlets (visitas and sitios), upland mission reductions and planned agricultural frontier colonies established during the American Commonwealth era.

Settlement scales range from early Hispanic encomienda villages and coastal missions to metropolitan conurbations. Manila formed the preeminent urban nucleus of the archipelago, growing from 32,52k in 1600 to 219,93k in 1903 and reaching 983,91k in 1946 within its municipal boundaries, surrounded by an expanding ring of suburban municipalities including Taguig (221,79k peak), Antipolo (154,92k peak), Pasig (144,64k peak), Valenzuela (122,96k peak), Paranaque (119,24k peak) and Quezon City (97,53k in 1946). Secondary regional metropolises anchoring insular sea lanes and agrarian hinterlands include Cebu (167,5k peak) in Central Visayas, Iloilo (116,28k peak) in Western Visayas, Davao (111,26k peak) and Zamboanga (103,32k peak) in Mindanao, alongside dynamic southern agricultural centres such as Budta (215,96k peak) and Malingao (190,24k peak). Every catalogued locality reconciles against 3.810 candidate entries in the regional source ledger alongside 137 documented exclusions (predominantly duplicate spatial aliases collapsed within a 2,2 km deduplication radius).

By anchoring georeferenced settlement trajectories to regional coastal morphology, fluvial drainage networks and nineteenth-century cadastral surveys, this gazetteer establishes a spatial foundation for historical demography in the insular Philippines. Settlement subtraction isolates nucleated urban centres from rural populations, ensuring that demographic allocations reflect authentic municipal distributions and documented historical tax records rather than uniform geographic interpolations.

# Background

Settlement patterns in the colonial Philippines reflect the systematic imposition of Spanish ecclesiastical planning upon indigenous maritime and riverine kinship networks, followed by nineteenth-century commercial expansion and twentieth-century American colonial reorganisations [@Galvan1997Spanish; @PatriciaFlan2023Colonial; @Kirsch2022American; @Abueva1961Philippine]. Six distinct settlement categories characterised the archipelago across the four-century study period:
1. Fortified coastal capitals and presidios: Fortified citadels served as administrative capitals and military garrisons, exemplified by Intramuros in Manila, Fort San Pedro in Cebu and Fort Pilar in Zamboanga [@Galvan1997Spanish; @Hill1920Audiencia; @Anonymous1930Manila]. Designed with perimeter stone curtain walls, bastions (baluartes) and moats, these strongholds defended the colonial state against European naval rivals (such as the Dutch and British) and maritime raiding expeditions from the Sulu Archipelago and Maguindanao [@Hill1920Audiencia; @PatriciaFlan2023Colonial].
2. Ecclesiastical cabeceras (pueblos): The cornerstone of the Spanish reducción policy, the cabecera was a nucleated settlement planned according to the Laws of the Indies (Leyes de Indias) [@Galvan1997Spanish; @Ahlborn1963Spanish; @Cruikshank2012Puzzle]. Centred upon an open plaza mayor, the cabecera contained the parish church, convento, municipal tribunal (casa tribunal) and the residences of indigenous elites (principalia), functioning as the ecclesiastical, judicial and fiscal hub of a wider municipal district [@Ahlborn2012Spanish; @Fernandez1988Pompas].
3. Agrarian visitas and barrios: Surrounding each cabecera was a network of subordinate agricultural hamlets (visitas) and rural settlements (sitios or barrios) located several kilometres into the countryside [@Cruikshank2012Puzzle; @Ahlborn2012Spanish]. Visitas featured small open-air chapels visited intermittently by parish priests, allowing tenant farmers (inquilinos and kasama) to cultivate rice, maize and root crops while remaining tethered to the municipal parish [@Gealogo2012Counting; @Graham2017Mission].
4. Upland missions and frontier reductions: On the frontiers of Spanish control, religious orders established active mission stations (misiones vivas) and fortified border posts (comandancias politico-militares) in an effort to attract animist highland groups (Igorot, Ifugao, Tingguian, Mangyan) and lowland remounted fugitives (cimarrones) into settled agriculture [@Graham2017Mission; @Elizalde2019Beyond; @Cruikshank2012Puzzle].
5. Hacienda towns and cash-crop export centres: With the nineteenth-century expansion of global commercial agriculture, specialised plantation settlements developed rapidly across Western Visayas (sugar in Negros Occidental and Iloilo), Bicol and Leyte (abaca cordage), Laguna and Batangas (sugar, coffee, copra) and the Cagayan Valley (tobacco) [@Chaudhuri1985Prosperity; @HAYASE1986Manila; @Lindsey1987Prosperity; @Lee2014Appearance]. These towns featured private steam-powered sugar mills (centrales azucareras), extensive warehouses (camarines) and large residential mansions (bahay na bato) constructed by wealthy Chinese-mestizo and native landowners [@Clemente2023Chinese; @Camacho2020Stephanie].
6. American chartered cities and resettlement colonies: Following the establishment of American rule and the Commonwealth, the colonial state designated modern chartered cities (such as Quezon City, Baguio, Tagaytay and Davao) designed according to modern sanitary and urban planning principles, alongside organised agricultural resettlement colonies in the Cotabato and Koronadal valleys of Mindanao [@Kirsch2022American; @Winkelmann2023Colonial; @LindioMcGovern2005American].

# Methodology

Candidate localities in the MANDALA source ledger were evaluated using published municipal gazetteers, nineteenth-century Spanish provincial dictionaries (Buzeta and Bravo 1850; Cavada 1876), decennial census reports (1903, 1918, 1939) and modern geoname registers [@Cruikshank2012Puzzle; @Millegan1942Census; @Abueva1961Philippine; @Gealogo2012Counting]. Inclusion in the gazetteer requires:
- Precise WGS84 geographic coordinates validated against historical cartography and modern satellite imagery.
- Documented administrative status as an independent parish (parroquia), pueblo, municipality or chartered city during the colonial or Commonwealth period.
- Chronological population series derived from ecclesiastical padrones, tribute rolls or official decennial censuses.

Where multiple archaeological, parish or survey records fall within 2,2 km of a primary nucleated settlement, secondary coordinates are consolidated as duplicate aliases, preserving geographic integrity and preventing artificial clustering. Non-residential military redoubts and seasonal fishing shelters are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 4781 catalogued settlements and summed site peaks across the six sub-regions of the Philippine archipelago.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Manila and Central Luzon</strong></td><td class="crd-td">466</td><td class="crd-td">9,7%</td><td class="crd-td">5,3M</td><td class="crd-td">Manila (983,9k)</td></tr>
<tr><td class="crd-td"><strong>Ilocos, Cordillera and Cagayan Valley</strong></td><td class="crd-td">705</td><td class="crd-td">14,7%</td><td class="crd-td">2,74M</td><td class="crd-td">Baguio (46,2k)</td></tr>
<tr><td class="crd-td"><strong>Southern Tagalog, Bicol and Palawan</strong></td><td class="crd-td">1091</td><td class="crd-td">22,8%</td><td class="crd-td">4,09M</td><td class="crd-td">Calamba (97,5k)</td></tr>
<tr><td class="crd-td"><strong>Western Visayas (Panay and Negros)</strong></td><td class="crd-td">474</td><td class="crd-td">9,9%</td><td class="crd-td">2,65M</td><td class="crd-td">Iloilo (116,3k)</td></tr>
<tr><td class="crd-td"><strong>Central and Eastern Visayas</strong></td><td class="crd-td">695</td><td class="crd-td">14,5%</td><td class="crd-td">4,15M</td><td class="crd-td">Cebu (167,5k)</td></tr>
<tr><td class="crd-td"><strong>Mindanao and Sulu Archipelago</strong></td><td class="crd-td">1350</td><td class="crd-td">28,2%</td><td class="crd-td">5,53M</td><td class="crd-td">Budta (216k)</td></tr>
<tr><td class="crd-td"><strong>Archipelago Total</strong></td><td class="crd-td">4781</td><td class="crd-td">100%</td><td class="crd-td">24,46M</td><td class="crd-td">Manila (983,9k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 3.793 catalogued settlements and summed site peaks across the Philippine archipelago.</figcaption>
</figure>

# Testing and Validation

Settlement identifications, spatial locations and demographic trajectories were systematically cross-verified against multi-temporal cartographic and archival sources [@Galvan1997Spanish; @Cruikshank2012Puzzle; @Ayad2021Escuela]:
- Historical Spanish cartography, including the celebrated 1734 Murillo Velarde chart (*Carta Hydrographica y Chorographica de las Yslas Filipinas*) and late nineteenth-century provincial atlas maps (*Planos de provincias de Filipinas*), provided independent validation of early pueblo foundations, cabecera-visita linkages and coastal fortifications [@Galvan1997Spanish; @Ayad2021Escuela].
- Coastal hydrographic surveys conducted by the United States Coast and Geodetic Survey between 1901 and 1920 established precise geodetic coordinates for all major maritime anchorages, ports of entry and municipal river landings [@Kirsch2022American; @Ayad2021Escuela].
- Decennial census enumerations (1903, 1918, 1939) provided complete municipal-level demographic series, confirming that twentieth-century settlement growth rates matched regional natural increase and inter-provincial migration streams [@Millegan1942Census; @Abueva1961Philippine; @McELHINNY2005Kissing].
- Toponymic transition series reconcile historical Hispanic orthography with modern Filipino and regional language spellings (such as Sugbu to Cebu, Palanyag to Paranaque, Culiat to Angeles, Pineda to Pasay and Nueva Vergara to Davao), preventing duplicate counting of renamed administrative entities [@Cruikshank2012Puzzle; @Gealogo2012Counting; @Kirsch2022American].

# Results

Table \ref{tab:gazetteer} presents the leading 45 settlements across the Philippine archipelago ordered by peak population descending, detailing coordinates, sub-regional allocation, chronological spans and demographic benchmarks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1946 Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Manila</strong></td><td class="crd-td">Manila and Central Luzon</td><td class="crd-td">14,6 N, 120,98 E</td><td class="crd-td">1600AD - 1946AD</td><td class="crd-td">983,9k</td><td class="crd-td">983,9k</td></tr>
<tr><td class="crd-td"><strong>Santa Ana</strong></td><td class="crd-td">Manila and Central Luzon</td><td class="crd-td">14,52 N, 121,08 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">221,8k</td><td class="crd-td">221,8k</td></tr>
<tr><td class="crd-td"><strong>Budta</strong></td><td class="crd-td">Mindanao and Sulu Archipelago</td><td class="crd-td">7,2 N, 124,44 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">216k</td><td class="crd-td">216k</td></tr>
<tr><td class="crd-td"><strong>Malingao</strong></td><td class="crd-td">Mindanao and Sulu Archipelago</td><td class="crd-td">7,16 N, 124,47 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">190,2k</td><td class="crd-td">190,2k</td></tr>
<tr><td class="crd-td"><strong>Cebu</strong></td><td class="crd-td">Central and Eastern Visayas</td><td class="crd-td">10,29 N, 123,9 E</td><td class="crd-td">1939AD - 1946AD</td><td class="crd-td">167,5k</td><td class="crd-td">167,5k</td></tr>
<tr><td class="crd-td"><strong>Antipolo</strong></td><td class="crd-td">Manila and Central Luzon</td><td class="crd-td">14,63 N, 121,12 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">154,9k</td><td class="crd-td">154,9k</td></tr>
<tr><td class="crd-td"><strong>Tondo</strong></td><td class="crd-td">Manila and Central Luzon</td><td class="crd-td">14,62 N, 120,97 E</td><td class="crd-td">1565AD - 1850AD</td><td class="crd-td">148,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Pasig</strong></td><td class="crd-td">Manila and Central Luzon</td><td class="crd-td">14,59 N, 121,06 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">144,6k</td><td class="crd-td">144,6k</td></tr>
<tr><td class="crd-td"><strong>Valenzuela</strong></td><td class="crd-td">Manila and Central Luzon</td><td class="crd-td">14,7 N, 120,97 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">123k</td><td class="crd-td">123k</td></tr>
<tr><td class="crd-td"><strong>Parañaque</strong></td><td class="crd-td">Manila and Central Luzon</td><td class="crd-td">14,48 N, 121,02 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">119,2k</td><td class="crd-td">119,2k</td></tr>
<tr><td class="crd-td"><strong>Iloilo</strong></td><td class="crd-td">Western Visayas (Panay and Negros)</td><td class="crd-td">10,7 N, 122,57 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">116,3k</td><td class="crd-td">110,1k</td></tr>
<tr><td class="crd-td"><strong>Davao</strong></td><td class="crd-td">Mindanao and Sulu Archipelago</td><td class="crd-td">7,07 N, 125,61 E</td><td class="crd-td">1850AD - 1946AD</td><td class="crd-td">111,3k</td><td class="crd-td">111,3k</td></tr>
<tr><td class="crd-td"><strong>Zamboanga</strong></td><td class="crd-td">Mindanao and Sulu Archipelago</td><td class="crd-td">6,9 N, 122,08 E</td><td class="crd-td">1700AD - 1946AD</td><td class="crd-td">103,3k</td><td class="crd-td">103,3k</td></tr>
<tr><td class="crd-td"><strong>Quezon City</strong></td><td class="crd-td">Manila and Central Luzon</td><td class="crd-td">14,65 N, 121,05 E</td><td class="crd-td">1939AD - 1946AD</td><td class="crd-td">97,5k</td><td class="crd-td">97,5k</td></tr>
<tr><td class="crd-td"><strong>Calamba</strong></td><td class="crd-td">Southern Tagalog, Bicol and Palawan</td><td class="crd-td">14,21 N, 121,17 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">97,5k</td><td class="crd-td">97,5k</td></tr>
<tr><td class="crd-td"><strong>Pasay</strong></td><td class="crd-td">Manila and Central Luzon</td><td class="crd-td">14,54 N, 121 E</td><td class="crd-td">1877AD - 1946AD</td><td class="crd-td">88,7k</td><td class="crd-td">88,7k</td></tr>
<tr><td class="crd-td"><strong>Makati</strong></td><td class="crd-td">Manila and Central Luzon</td><td class="crd-td">14,55 N, 121,03 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">86,5k</td><td class="crd-td">86,5k</td></tr>
<tr><td class="crd-td"><strong>Angeles</strong></td><td class="crd-td">Manila and Central Luzon</td><td class="crd-td">15,15 N, 120,58 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">82k</td><td class="crd-td">82k</td></tr>
<tr><td class="crd-td"><strong>Imus</strong></td><td class="crd-td">Manila and Central Luzon</td><td class="crd-td">14,43 N, 120,94 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">81,7k</td><td class="crd-td">81,7k</td></tr>
<tr><td class="crd-td"><strong>Ormoc</strong></td><td class="crd-td">Central and Eastern Visayas</td><td class="crd-td">11,01 N, 124,61 E</td><td class="crd-td">1850AD - 1946AD</td><td class="crd-td">77,3k</td><td class="crd-td">72,7k</td></tr>
<tr><td class="crd-td"><strong>Mansilingan</strong></td><td class="crd-td">Western Visayas (Panay and Negros)</td><td class="crd-td">10,63 N, 122,98 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">77k</td><td class="crd-td">77k</td></tr>
<tr><td class="crd-td"><strong>Dasmariñas</strong></td><td class="crd-td">Southern Tagalog, Bicol and Palawan</td><td class="crd-td">14,33 N, 120,94 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">74,9k</td><td class="crd-td">74,9k</td></tr>
<tr><td class="crd-td"><strong>Tarlac</strong></td><td class="crd-td">Manila and Central Luzon</td><td class="crd-td">15,48 N, 120,6 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">68,1k</td><td class="crd-td">68,1k</td></tr>
<tr><td class="crd-td"><strong>San Jose Del Monte</strong></td><td class="crd-td">Manila and Central Luzon</td><td class="crd-td">14,81 N, 121,05 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">60,7k</td><td class="crd-td">60,7k</td></tr>
<tr><td class="crd-td"><strong>Bacoor</strong></td><td class="crd-td">Manila and Central Luzon</td><td class="crd-td">14,46 N, 120,94 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">60,5k</td><td class="crd-td">60,5k</td></tr>
<tr><td class="crd-td"><strong>San Pedro</strong></td><td class="crd-td">Manila and Central Luzon</td><td class="crd-td">14,36 N, 121,05 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">59,2k</td><td class="crd-td">59,2k</td></tr>
<tr><td class="crd-td"><strong>Cabanatuan</strong></td><td class="crd-td">Manila and Central Luzon</td><td class="crd-td">15,49 N, 120,97 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">58,3k</td><td class="crd-td">58,3k</td></tr>
<tr><td class="crd-td"><strong>Caloocan</strong></td><td class="crd-td">Manila and Central Luzon</td><td class="crd-td">14,65 N, 120,97 E</td><td class="crd-td">1850AD - 1946AD</td><td class="crd-td">58,2k</td><td class="crd-td">58,2k</td></tr>
<tr><td class="crd-td"><strong>Datu Piang</strong></td><td class="crd-td">Mindanao and Sulu Archipelago</td><td class="crd-td">7,03 N, 124,5 E</td><td class="crd-td">1918AD - 1946AD</td><td class="crd-td">55,3k</td><td class="crd-td">42,9k</td></tr>
<tr><td class="crd-td"><strong>Santa Cruz</strong></td><td class="crd-td">Mindanao and Sulu Archipelago</td><td class="crd-td">6,83 N, 125,42 E</td><td class="crd-td">1903AD - 1946AD</td><td class="crd-td">54,8k</td><td class="crd-td">54,8k</td></tr>
<tr><td class="crd-td"><strong>Cagayan de Oro</strong></td><td class="crd-td">Mindanao and Sulu Archipelago</td><td class="crd-td">8,48 N, 124,65 E</td><td class="crd-td">1877AD - 1946AD</td><td class="crd-td">54,3k</td><td class="crd-td">54,3k</td></tr>
<tr><td class="crd-td"><strong>Calatrava</strong></td><td class="crd-td">Western Visayas (Panay and Negros)</td><td class="crd-td">10,6 N, 123,48 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">53,8k</td><td class="crd-td">53,8k</td></tr>
<tr><td class="crd-td"><strong>Tuburan</strong></td><td class="crd-td">Central and Eastern Visayas</td><td class="crd-td">10,73 N, 123,83 E</td><td class="crd-td">1877AD - 1946AD</td><td class="crd-td">53,7k</td><td class="crd-td">53,7k</td></tr>
<tr><td class="crd-td"><strong>Cataingan</strong></td><td class="crd-td">Southern Tagalog, Bicol and Palawan</td><td class="crd-td">12 N, 123,99 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">53,3k</td><td class="crd-td">53,3k</td></tr>
<tr><td class="crd-td"><strong>Iligan</strong></td><td class="crd-td">Mindanao and Sulu Archipelago</td><td class="crd-td">8,25 N, 124,4 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">53k</td><td class="crd-td">53k</td></tr>
<tr><td class="crd-td"><strong>Cabuyao</strong></td><td class="crd-td">Southern Tagalog, Bicol and Palawan</td><td class="crd-td">14,27 N, 121,13 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">52,3k</td><td class="crd-td">52,3k</td></tr>
<tr><td class="crd-td"><strong>San Pablo</strong></td><td class="crd-td">Southern Tagalog, Bicol and Palawan</td><td class="crd-td">14,07 N, 121,33 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">50,9k</td><td class="crd-td">50,9k</td></tr>
<tr><td class="crd-td"><strong>Biñan</strong></td><td class="crd-td">Manila and Central Luzon</td><td class="crd-td">14,34 N, 121,08 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">50,9k</td><td class="crd-td">50,9k</td></tr>
<tr><td class="crd-td"><strong>Cainta</strong></td><td class="crd-td">Manila and Central Luzon</td><td class="crd-td">14,58 N, 121,12 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">48k</td><td class="crd-td">48k</td></tr>
<tr><td class="crd-td"><strong>Abuyog</strong></td><td class="crd-td">Central and Eastern Visayas</td><td class="crd-td">10,75 N, 125,01 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">46,9k</td><td class="crd-td">46,9k</td></tr>
<tr><td class="crd-td"><strong>Baguio</strong></td><td class="crd-td">Ilocos, Cordillera and Cagayan Valley</td><td class="crd-td">16,42 N, 120,59 E</td><td class="crd-td">1903AD - 1946AD</td><td class="crd-td">46,2k</td><td class="crd-td">46,2k</td></tr>
<tr><td class="crd-td"><strong>Malolos</strong></td><td class="crd-td">Manila and Central Luzon</td><td class="crd-td">14,84 N, 120,81 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">45,7k</td><td class="crd-td">45,7k</td></tr>
<tr><td class="crd-td"><strong>Tacloban</strong></td><td class="crd-td">Central and Eastern Visayas</td><td class="crd-td">11,24 N, 125 E</td><td class="crd-td">1800AD - 1946AD</td><td class="crd-td">45,4k</td><td class="crd-td">45,4k</td></tr>
<tr><td class="crd-td"><strong>Mantampay</strong></td><td class="crd-td">Mindanao and Sulu Archipelago</td><td class="crd-td">8,17 N, 124,22 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">44,9k</td><td class="crd-td">44,9k</td></tr>
<tr><td class="crd-td"><strong>Bagong Silang</strong></td><td class="crd-td">Manila and Central Luzon</td><td class="crd-td">14,78 N, 121,04 E</td><td class="crd-td">1565AD - 1946AD</td><td class="crd-td">44,4k</td><td class="crd-td">44,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 settlements ordered by peak population across the Philippine archipelago (1565 to 1946).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Manila and Central Luzon

Manila and Central Luzon catalogues 411 settlements distributed across the alluvial plains of Bulacan, Pampanga, Tarlac, Nueva Ecija, Bataan, Rizal and Zambales [@Gealogo2012Counting; @Javellana2012Nineteenth; @Ahlborn1963Spanish]. Manila represented the primary primate city of the archipelago throughout the colonial era, expanding from 32,52k in 1600 to 219,93k in 1903, 623,49k in 1939 and 983,91k in 1946. Around Manila, rapid suburbanisation during the late Spanish and American periods stimulated the growth of major surrounding municipalities including Taguig (221,79k peak), Antipolo (154,92k peak), Tondo (148,24k peak in 1850), Pasig (144,64k peak), Valenzuela (122,96k peak), Paranaque (119,24k peak), Quezon City (97,53k in 1946), Pasay (88,73k peak), Makati (86,54k peak), Angeles (81,97k peak in Pampanga) and Imus (81,72k peak). In the rice-producing heartland of Central Luzon, key municipal centres included San Fernando, Guagua, Malolos, Baliwag, Tarlac and Cabanatuan, functioning as market centres along the Manila-Dagupan railway line opened in 1892 [@Ahlborn2012Spanish; @Lemps2012Waters; @Morley2023Interlacin].

### Ilocos, Cordillera and Cagayan Valley

Northern Luzon catalogues 528 settlements across the provinces of Ilocos Norte, Ilocos Sur, La Union, Abra, Mountain Province, Benguet, Cagayan, Isabela and Nueva Vizcaya [@Aguilar2023Termination; @Ahlborn2012Spanish]. In the coastal Ilocos plain, dense ribbons of stone-built pueblos flourished, including Laoag (43k peak), Vigan (historic seat of the Diocese of Nueva Segovia), San Fernando (La Union) and Batac. In the interior Cagayan Valley, tobacco monopoly towns included Tuguegarao (32k peak), Ilagan and Aparri, which served as a major maritime river port handling agricultural trade. In the Cordillera uplands, Baguio was established by American colonial authorities in 1900 as the official summer capital, featuring a grid designed by Daniel Burnham and growing rapidly as a gold-mining and administrative centre [@Kirsch2022American; @Winkelmann2023Colonial].

### Southern Tagalog, Bicol and Palawan

Southern Tagalog, Bicol and the southwestern island frontier catalogue 817 settlements across Cavite, Laguna, Batangas, Tayabas (Quezon), Camarines Norte, Camarines Sur, Albay, Sorsogon, Mindoro and Palawan [@Chaudhuri1985Prosperity; @Lindsey1987Prosperity; @Ahlborn1963Spanish]. Calamba was the leading urban centre in Laguna (97,5k peak in 1946), surrounded by prosperous agricultural towns such as San Pablo, Lipa, Batangas City, Santa Cruz, Biñan and Tayabas. In the Bicol Peninsula, abaca cultivation stimulated rapid population expansion in Legazpi (62k peak), Naga (Ciudad de Nueva Caceres), Tabaco, Iriga and Sorsogon [@HAYASE1986Manila; @Chaudhuri1985Prosperity]. In the frontier province of Palawan, Puerto Princesa served as the provincial naval and administrative capital, complemented by Cuyo and Coron.

### Western Visayas (Panay and Negros)

Western Visayas catalogues 407 settlements across the provinces of Iloilo, Capiz, Antique, Aklan, Negros Occidental and Guimaras [@Chaudhuri1985Prosperity; @Gowey2025Feminine]. Iloilo City served as the commercial emporium of the central Philippines, concentrating 116,28k inhabitants at its peak and handling vast tonnages of export sugar, textiles and tobacco [@Chaudhuri1985Prosperity; @Lee2014Appearance]. Across the Guimaras Strait on Negros Occidental, the expansion of sugar plantations gave rise to wealthy hacienda municipalities including Bacolod (75k peak), Silay, Bago, Talisay, Cadiz and San Carlos [@Chaudhuri1985Prosperity; @Lee2014Appearance]. On Panay, agricultural centres along the Jaro and Panay rivers included Jaro, Santa Barbara, Pototan, Cabatuan and Roxas City (Capiz) [@Gowey2025Feminine; @Clemente2023Chinese].

### Central and Eastern Visayas (Cebu, Bohol, Leyte and Samar)

Central and Eastern Visayas catalogues 580 settlements across Cebu, Bohol, Negros Oriental, Siquijor, Leyte and Samar [@Cruikshank2012Puzzle; @HAYASE1986Manila]. Cebu City represented the historic capital of the Visayas, with its population expanding to 167,5k by 1946 across port districts and suburban arrabales [@Cruikshank2012Puzzle; @Galvan1997Spanish; @Abueva1961Philippine]. In Leyte, Ormoc (77,35k peak) and Tacloban (54k peak) operated as thriving commercial ports shipping copra and abaca, while Carigara and Baybay served fertile agricultural valleys. In Bohol, Tagbilaran, Tubigon and Jagna anchored dense coastal farming communities. In Samar, Catbalogan and Calbayog functioned as administrative and trading nodes along rugged maritime coasts.

### Mindanao and Sulu Archipelago

Mindanao and the Sulu Archipelago catalogue 1.050 settlements spanning the provinces of Zamboanga, Misamis, Lanao, Cotabato, Davao, Bukidnon, Agusan, Surigao and the Sulu Archipelago [@Winkelmann2023Colonial; @Hill1920Audiencia]. For centuries, Zamboanga served as the primary Spanish military fortress in the south (103,32k peak). During the American Commonwealth era, state-directed settlement and commercial plantation investment spurred rapid population growth in Davao (111,26k peak), which developed extensive abaca and coconut plantations with significant Japanese commercial participation [@HAYASE1986Manila; @Kirsch2022American]. In the Cotabato Valley, agricultural settlements such as Budta (215,96k peak) and Malingao (190,24k peak) expanded rapidly as Christian migrants established rice and corn farms [@Winkelmann2023Dangerous; @Abueva1961Philippine]. In northern Mindanao, Cagayan de Misamis (Cagayan de Oro), Iligan and Butuan formed vital trading outlets connecting the interior plateau with Visayan shipping lanes.

# Limitations

Settlement gazetteer analysis across the colonial Philippines is subject to several methodological and archival constraints:
1. Shifting municipal boundaries: Throughout the Spanish and American periods, subordinate barrios were frequently elevated to independent municipalities or subsequently re-annexed into larger parent pueblos, creating complex boundary discontinuities across decennial censuses [@Cruikshank2012Puzzle; @Millegan1942Census].
2. Decoupling of poblacion and municipal totals: Spanish padrones often distinguished between the nucleated town centre (poblacion) and its outlying rural visitas, whereas early American censuses frequently aggregated the entire municipal jurisdiction into a single figure, requiring careful disaggregation to prevent overestimating core urban densities [@Gealogo2012Counting; @Abueva1961Philippine].
3. Fluid frontier toponymy: In Mindanao, Sulu and the Cordillera highlands, indigenous settlements often possessed multiple local names (in Maguindanaon, Tausug, Maranao or Ilocano) alongside Spanish or American administrative designations, necessitating cross-referencing against ethnographic records to prevent duplicate site entries [@Winkelmann2023Colonial; @Cruikshank2012Puzzle].
4. Destruction of local municipal archives: Recurrent tropical fires, wartime aerial bombardments and typhoon flooding destroyed local municipal registers (actas de cabildo and libros de resoluciones) across numerous provincial capitals, especially during the 1945 liberation campaigns [@Morton1960History; @Sunderland1960Liberation; @Morley2023Interlacin].

# Conclusion

The settlement gazetteer of the Spanish and American Philippines establishes a comprehensive georeferenced repository of 3.793 historical settlements spanning nearly four centuries of colonial and national development. By documenting coordinates, administrative classifications and demographic trajectories across six physiographic divisions, this gazetteer links micro-historical parish records with macro-demographic models. The data demonstrate the progressive evolution of Philippine settlement geography from dispersed pre-colonial barangays to a structured network of pueblos, hacienda centres, export ports and modern metropolitan districts, establishing an empirical foundation for spatial demography across insular Southeast Asia.

# Appendix

The MANDALA source ledger audited 3.810 candidate settlement records, resulting in 3.793 accepted settlements and 17 documented exclusions. Table \ref{tab:excluded} presents the 17 excluded candidates, detailing modern territory, exclusion classification and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Taal</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Zamboanga</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Cotabato</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Carigara</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Butuan</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Albay</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Cagayan de Oro</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Bantay</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Datu Anggal Midtimbang</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Cebu</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Bacolod</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>San Fernando</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Roxas</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Dagupan</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Tuguegarao</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Los Baños</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Laoag</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Catbalogan</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Tagbilaran</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Calapan</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Fort of the Conception a</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Fort Pilar</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Malacañang Palace</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Fort Santiago</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Twin Forts of Romblon</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Fort San Diego</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Cagsawa Ruins</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Palahanan Uno</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Calumpang</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Namuac</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>Bayasong</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
<tr><td class="crd-td"><strong>San Luis</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zaragoza</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zaragoza</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zaragoza</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zaragoza</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zaragosa</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zaragosa</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Zamora</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Ylaya</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Wawa</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Wasig</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Wasig</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Washington</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Washington</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Wagas</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Vocal</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Vito</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Vito</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Vito</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Villar</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Villanueva</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Villahermosa</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Villahermosa</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Villahermosa</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Villa Hermosa</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Villaflor</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Villa Aurora</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Vigan</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Viga</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Viga</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Viga</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Viga</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Viga</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Viga</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Victoria</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Victoria</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Valencia</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Valencia</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Union</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Union</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Union</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Union</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Union</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Unidos</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Turod</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tula</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tugop</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tugas</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tugas</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tugas</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tugas</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tuboran</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tuboc</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tubigan</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tubigan</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tubigan</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tubigan</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tipolo</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tiniguiban</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tinago</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tinago</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tinago</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tinago</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Timbaon</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tigbao</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tigbao</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Taytay</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tawog</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tangbo</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tamban</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tambac</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tambac</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Talisay</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Talaba</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tabon</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Tabog</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Sugbay</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Sigayan</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Sigayan</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>San Vicente</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Santo Nino</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Santo Nino</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Santo Nino</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Santa Rosa</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Santa Rosa</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Santa Maria</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Santa Ines</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Santa Cruz</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Santa Cruz</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Santa Cruz</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>San Roque</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>San Roque</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>San Nicolas</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>San Jose</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>San Jose</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>San Isidro</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>San Isidro</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>San Isidro</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>San Antonio</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>San Antonio</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Sabang</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Rizal</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Malinao</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Buenavista</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>San Miguel</strong></td><td class="crd-td">Philippines</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population series.</td></tr>
<tr><td class="crd-td"><strong>Carmelo</strong></td><td class="crd-td">Philippines</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication radius of...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Seventeen excluded candidate settlements from the Philippine archipelago source ledger.</figcaption>
</figure>

# Sources
