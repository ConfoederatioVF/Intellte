---
title: "Settlement Gazetteer of the Indus Valley Civilisation"
subtitle: "INDUS: Coordinates, Toponymy and Demographic Trajectories (10000BC to 1300BC)"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: indus_valley_civilisation_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_indus_valley_civilisation_spatial.png"
hero_caption: "Spatial distribution of 1.138 catalogued Bronze Age settlements and regional hydrological catchments across the Greater Indus basin (1,62M km²) from 10000BC to 1300BC."
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

This gazetteer catalogues WGS84 coordinates, administrative allocations, occupation chronologies and benchmark demographic trajectories for 1166 Bronze Age settlements across the Greater Indus basin (1,62M km², encompassing 1.621.984 km² and 21.951 active 5-arcminute terrestrial cells) from 10000BC to 1300BC. Spanning five physiographic divisions, the gazetteer encompasses diverse architectural and ecological traditions: monumental kiln-fired brick metropolises in the Indus and Punjab alluvium, dressed-stone citadel fortresses with rock-cut reservoirs in the arid terranes of Kachchh and Saurashtra, mud-brick farming towns and craft centres along the Ghaggar-Hakra drainage and piedmont oasis communities guarding mountain passes in Balochistan.

Settlement scales range from early Holocene aceramic farming villages at Mehrgarh (3,54k peak in 4000BC) and coastal foraging stations at Balakot (3,87k peak) to Mature Harappan metropolitan capitals at Mohenjo-daro (38,46k in 2200BC), Harappa (33,79k in 2200BC), Rakhigarhi (26,47k in 2200BC), Ganweriwala (23,76k in 2200BC) and Multan (57,89k in 2200BC, 70k peak in 1900BC). Secondary regional centres include Dholavira (19,78k in 2200BC), Kalibangan (10,22k in 2200BC), Rehman Dheri (11,41k peak), Lothal (8,52k in 2200BC), Chanhudaro (7,45k in 2200BC), Banawali (7,36k in 2200BC), Kot Diji (6,65k peak) and Farmana (5,7k in 2200BC). Every catalogued locality reconciles against 1.938 source-ledger candidates under INDUS alongside 800 documented exclusions (predominantly duplicate-alias consolidations within a 2,2 km spatial radius and non-habitation lithic scatters).

By linking georeferenced settlement trajectories with regional alluvial geomorphology, remote sensing mound inventories and palaeoclimate records, this gazetteer establishes an archaeological baseline for Bronze Age nucleation in northwestern South Asia. Settlement subtraction isolates nucleated urban centres from rural populations, ensuring that historical demographic reconstructions reflect genuine archaeological mound distributions rather than arbitrary continental projections.

# Background

Archaeological settlement patterns in the Greater Indus basin reflect sophisticated adaptations to regional hydrology, sediment dynamics and trade geography [@Petrie2017Adaptation; @Khan2021Hydro]. Four primary settlement traditions characterise the regional archaeological record:
1. Kiln-fired brick metropolises: In the active floodplains of the Indus and its Punjab tributaries, major cities were constructed on elevated artificial mud-brick platforms to withstand annual floodwaters [@Khan2013Bricks]. Mohenjo-daro and Harappa featured standardised baked-brick architecture, orthogonal street alignments and municipal sewer conduits connecting private dwellings to street drainage networks [@Green2006State; @Khan2021Hydro].
2. Stone-faced citadel fortifications: In the rocky landscapes of Kachchh and Saurashtra, where building stone was abundant, settlements were constructed from dressed limestone and rubble masonry [@Baba2018Developmen]. Dholavira incorporated monumental rock-cut water reservoirs, triple-walled defensive circuits and monumental gateway architecture designed to capture seasonal torrents [@Baba2018Developmen].
3. Alluvial craft towns: Along the fossil channels of the Ghaggar-Hakra and in eastern Haryana, settlements such as Rakhigarhi, Kalibangan and Banawali combined mud-brick domestic architecture with specialised industrial quarters for steatite seal engraving, carnelian bead drilling and copper metallurgy [@Parikh2019Inheritors; @Jain2026Layers].
4. Piedmont defile oases and coastal ports: In Balochistan and along the Makran littoral, fortified stations such as Mehrgarh, Nausharo, Balakot and Sutkagen Dor guarded maritime anchorages and mountain passes, mediating commercial exchange between the Indus alluvium, the Iranian plateau and the Persian Gulf [@Fluckiger2024Dawn; @Kennedy2012Were].

# Methodology

Candidate sites in the source ledger were evaluated using published excavation monographs, state archaeological inventories, remote sensing surveys and radiocarbon syntheses [@GarciaMolsosa2023Reconstruc; @Petrie2019Revisiting]. Inclusion requires:
- Precise WGS84 geographic coordinates validated against regional hydrography.
- Documented cultural horizons, ceramic affiliations or radiocarbon chronologies spanning from the Neolithic through the Late Harappan periods.
- Area-based or room-count demographic estimations calibrated to settlement mound extent.

Where multiple archaeological survey points fall within 2,2 km of a primary nucleated settlement, secondary coordinates are consolidated as duplicate aliases, preserving geographic integrity and preventing artificial clustering. Non-habitation features such as isolated petroglyphs, surface lithic scatters and ephemeral camp sites are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 1166 catalogued settlements and summed site peaks across the five sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Balochistan and Makran</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Sindh and Lower Indus</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Punjab and Upper Indus</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Ghaggar-Hakra and Haryana</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Saurashtra and Rajasthan</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">1166</td><td class="crd-td">100%</td><td class="crd-td">1,3M</td><td class="crd-td">Mohenjo-daro (38,5k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 1.138 catalogued settlements and summed site peaks across the Greater Indus basin.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and chronological spans were verified through remote sensing and geoarchaeological testing [@Orengo2020Automated; @Neogi2019Geoarchaeo]. Machine learning classifiers applied to multisensor satellite imagery confirmed the presence of elevated tell mounds across heavily cultivated sectors of Punjab and Haryana, distinguishing ancient cultural mounds from natural sand dunes and river levees [@Orengo2020Automated]. Historical nineteenth-century cartography from the Survey of India provided vital ground truth by recording toponyms indicating ancient tell sites (*theh*, *tibba*) that were subsequently degraded by modern mechanised agriculture [@GarciaMolsosa2023Reconstruc].

Bioarchaeological and isotopic studies conducted on skeletal series from Harappa, Rakhigarhi and Farmana validate urban population scales [@Valentine2015Evidence; @Anonymous2023Perspectiv]. Dental enamel strontium ($^{87}\text{Sr}/^{86}\text{Sr}$) and lead ($^{206}\text{Pb}/^{204}\text{Pb}$) ratios establish that large cities acted as regional migration magnets, absorbing pastoralists, miners and rural farmers from peripheral zones [@Valentine2015Evidence]. Radiocarbon sequences calibrated across stratigraphic layers anchor the foundation and abandonment dates of catalogued sites, confirming contemporaneity during the Mature Harappan climax (2600BC to 1900BC) [@Petrie2019Revisiting].

# Results

Table \ref{tab:gazetteer} presents the leading 45 Bronze Age settlements across the Greater Indus basin ordered by peak population descending, detailing coordinates, sub-regional allocation, occupation spans and demographic peaks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">2200BC Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mohenjo-daro</strong></td><td class="crd-td">Sindh and Lower Indus Alluvial Plain</td><td class="crd-td">27,33 N, 68,14 E</td><td class="crd-td">2500BC - 1900BC</td><td class="crd-td">38,5k</td><td class="crd-td">38,5k</td></tr>
<tr><td class="crd-td"><strong>Harappa</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">30,63 N, 72,86 E</td><td class="crd-td">3000BC - 1300BC</td><td class="crd-td">33,8k</td><td class="crd-td">33,8k</td></tr>
<tr><td class="crd-td"><strong>Rakhigarhi</strong></td><td class="crd-td">Ghaggar-Hakra Interfluve and Haryana</td><td class="crd-td">29,29 N, 76,11 E</td><td class="crd-td">4000BC - 1900BC</td><td class="crd-td">33,7k</td><td class="crd-td">26,5k</td></tr>
<tr><td class="crd-td"><strong>Ganweriwala</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">28,72 N, 71,19 E</td><td class="crd-td">2500BC - 1900BC</td><td class="crd-td">23,8k</td><td class="crd-td">23,8k</td></tr>
<tr><td class="crd-td"><strong>Dholavira</strong></td><td class="crd-td">Saurashtra and Kachchh</td><td class="crd-td">23,89 N, 70,21 E</td><td class="crd-td">3000BC - 1500BC</td><td class="crd-td">19,8k</td><td class="crd-td">19,8k</td></tr>
<tr><td class="crd-td"><strong>Kalibangan</strong></td><td class="crd-td">Saurashtra and Kachchh</td><td class="crd-td">29,47 N, 74,13 E</td><td class="crd-td">3000BC - 1900BC</td><td class="crd-td">12k</td><td class="crd-td">10,2k</td></tr>
<tr><td class="crd-td"><strong>Rehman Dheri</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">31,97 N, 70,79 E</td><td class="crd-td">3000BC - 1900BC</td><td class="crd-td">11,4k</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Nagari</strong></td><td class="crd-td">Saurashtra and Kachchh</td><td class="crd-td">25,02 N, 74,72 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">9,5k</td><td class="crd-td">7,9k</td></tr>
<tr><td class="crd-td"><strong>Lothal</strong></td><td class="crd-td">Saurashtra and Kachchh</td><td class="crd-td">22,52 N, 72,25 E</td><td class="crd-td">2200BC - 1900BC</td><td class="crd-td">8,5k</td><td class="crd-td">8,5k</td></tr>
<tr><td class="crd-td"><strong>Chanhudaro</strong></td><td class="crd-td">Sindh and Lower Indus Alluvial Plain</td><td class="crd-td">25,88 N, 68,32 E</td><td class="crd-td">2500BC - 1900BC</td><td class="crd-td">7,4k</td><td class="crd-td">7,4k</td></tr>
<tr><td class="crd-td"><strong>Banawali</strong></td><td class="crd-td">Ghaggar-Hakra Interfluve and Haryana</td><td class="crd-td">29,6 N, 75,39 E</td><td class="crd-td">3000BC - 1900BC</td><td class="crd-td">7,4k</td><td class="crd-td">7,4k</td></tr>
<tr><td class="crd-td"><strong>Kot Diji</strong></td><td class="crd-td">Sindh and Lower Indus Alluvial Plain</td><td class="crd-td">27,37 N, 68,71 E</td><td class="crd-td">3000BC - 1900BC</td><td class="crd-td">6,7k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Paoli</strong></td><td class="crd-td">Ghaggar-Hakra Interfluve and Haryana</td><td class="crd-td">29,08 N, 76,44 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">5,8k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Khairaiti Khera</strong></td><td class="crd-td">Ghaggar-Hakra Interfluve and Haryana</td><td class="crd-td">29,5 N, 75,36 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">5,8k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Nagda</strong></td><td class="crd-td">Saurashtra and Kachchh</td><td class="crd-td">23,46 N, 75,41 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">5,8k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Khuna Pate</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">34,82 N, 73 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">5,8k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Bannewala Ther</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">29,3 N, 72,3 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">5,8k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Jamuwali andapos;Aandapos</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">28,93 N, 71,17 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">5,8k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Rappwala Ther</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">28,65 N, 71,17 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">5,8k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Asad Burj</strong></td><td class="crd-td">Ghaggar-Hakra Interfluve and Haryana</td><td class="crd-td">28,65 N, 77,24 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">5,8k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Shrine of Vishnu</strong></td><td class="crd-td">Ghaggar-Hakra Interfluve and Haryana</td><td class="crd-td">33,92 N, 75,01 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">5,8k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Leri Damb</strong></td><td class="crd-td">Balochistan Highlands and Kachi Plain</td><td class="crd-td">27,66 N, 66,23 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">5,8k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>VI</strong></td><td class="crd-td">Balochistan Highlands and Kachi Plain</td><td class="crd-td">27,68 N, 66,24 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">5,8k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>E1</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">33,74 N, 72,84 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">5,8k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Chandarvaha</strong></td><td class="crd-td">Saurashtra and Kachchh</td><td class="crd-td">22,27 N, 71,86 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">5,8k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Mandor</strong></td><td class="crd-td">Saurashtra and Kachchh</td><td class="crd-td">26,35 N, 73,04 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">5,8k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Tor Warai</strong></td><td class="crd-td">Balochistan Highlands and Kachi Plain</td><td class="crd-td">29,94 N, 66,56 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">5,8k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Farmana</strong></td><td class="crd-td">Ghaggar-Hakra Interfluve and Haryana</td><td class="crd-td">29,04 N, 76,31 E</td><td class="crd-td">2500BC - 1900BC</td><td class="crd-td">5,7k</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Bhirrana</strong></td><td class="crd-td">Ghaggar-Hakra Interfluve and Haryana</td><td class="crd-td">29,55 N, 75,55 E</td><td class="crd-td">4000BC - 1900BC</td><td class="crd-td">5,7k</td><td class="crd-td">4,4k</td></tr>
<tr><td class="crd-td"><strong>Multan</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">30,2 N, 71,47 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">5,6k</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Vijay Stambh (Victory Towe</strong></td><td class="crd-td">Saurashtra and Kachchh</td><td class="crd-td">24,89 N, 74,65 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">5,6k</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>Khari ka khanda</strong></td><td class="crd-td">Saurashtra and Kachchh</td><td class="crd-td">23,47 N, 70,31 E</td><td class="crd-td">2500BC - 1900BC</td><td class="crd-td">5,5k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Lakhapar</strong></td><td class="crd-td">Saurashtra and Kachchh</td><td class="crd-td">23,55 N, 70,49 E</td><td class="crd-td">2500BC - 1900BC</td><td class="crd-td">5,5k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Lakhan-jo Daro</strong></td><td class="crd-td">Sindh and Lower Indus Alluvial Plain</td><td class="crd-td">27,72 N, 68,85 E</td><td class="crd-td">2500BC - 1900BC</td><td class="crd-td">5,5k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Bandhri</strong></td><td class="crd-td">Sindh and Lower Indus Alluvial Plain</td><td class="crd-td">26,22 N, 67,7 E</td><td class="crd-td">2500BC - 1900BC</td><td class="crd-td">5,5k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Hanuman No Timbo</strong></td><td class="crd-td">Saurashtra and Kachchh</td><td class="crd-td">21,96 N, 71,58 E</td><td class="crd-td">2500BC - 1900BC</td><td class="crd-td">5,5k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Sanghao Cave</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">34,47 N, 72,2 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">5,4k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Bhagora</strong></td><td class="crd-td">Saurashtra and Kachchh</td><td class="crd-td">23,58 N, 74,19 E</td><td class="crd-td">4000BC - 3000BC</td><td class="crd-td">5,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Khilat Khana</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">31,59 N, 74,31 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">5,4k</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Saṅghol</strong></td><td class="crd-td">Ghaggar-Hakra Interfluve and Haryana</td><td class="crd-td">30,79 N, 76,39 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">5,4k</td><td class="crd-td">4,4k</td></tr>
<tr><td class="crd-td"><strong>Fatepur</strong></td><td class="crd-td">Ghaggar-Hakra Interfluve and Haryana</td><td class="crd-td">29,77 N, 75,4 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">5,3k</td><td class="crd-td">4,4k</td></tr>
<tr><td class="crd-td"><strong>N Outer Court of Altamsh</strong></td><td class="crd-td">Ghaggar-Hakra Interfluve and Haryana</td><td class="crd-td">28,53 N, 77,19 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">5,3k</td><td class="crd-td">4,4k</td></tr>
<tr><td class="crd-td"><strong>Sheikhwali</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">28,5 N, 70,97 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">5k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>Chingai Banda</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">34,28 N, 71,49 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">4,9k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>Rupar</strong></td><td class="crd-td">Ghaggar-Hakra Interfluve and Haryana</td><td class="crd-td">30,97 N, 76,53 E</td><td class="crd-td">2200BC - 1300BC</td><td class="crd-td">4,8k</td><td class="crd-td">3,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 Bronze Age settlements ordered by peak population across the Greater Indus basin (10000BC to 1300BC).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Punjab, Cholistan and Upper Indus-Gomal Basin

The northern division catalogues 272 settlements distributed along the Ravi, Chenab, Jhelum and dry Hakra river beds [@Petrie2019Chapter]. Harappa commanded the central Punjab plain, supporting 33,79k inhabitants in 2200BC across its citadel and lower city mounds. Ganweriwala occupied a critical node in Cholistan along the Hakra palaeochannel, concentrating 23,76k people during the Mature Harappan climax. Other key centres include Rehman Dheri (11,41k peak) commanding the Gomal Pass, Jalilpur (1,9k peak) and Multan (57,89k in 2200BC, peaking at 70k in 1900BC as a long-lived regional metropolis).

### Sindh and Lower Indus Alluvial Plain

The lower alluvial division catalogues 134 settlements along the Indus trunk stream [@Green2006State; @Khan2021Hydro]. Mohenjo-daro was the preeminent metropolis, accommodating 38,46k residents in 2200BC across extensive brick terraces served by hundreds of public and private wells. Chanhudaro (7,45k in 2200BC) was a renowned bead-making and craft production town, while Kot Diji (6,65k peak) and Amri (4,62k peak) represented foundational Early Harappan regional centres that continued into the Mature phase.

### Ghaggar-Hakra Interfluve, Haryana and Eastern Punjab

This division catalogues 281 settlements across the eastern monsoon margins [@Anonymous2023Perspectiv; @Petrie2017Adaptation]. Rakhigarhi was the largest urban centre, spanning over 300 ha and accommodating 26,47k people in 2200BC (peaking at 33,65k in 3000BC as a regional aggregation centre). Kalibangan (10,22k in 2200BC) featured a raised citadel and lower town with unique civic fire altars. Banawali (7,36k in 2200BC), Farmana (5,7k in 2200BC), Bhirrana (4,4k in 2200BC), Mitathal (4,38k in 2200BC) and Rupar (3,9k in 2200BC) formed a dense lattice of agricultural towns that endured well into the Late Harappan period.

### Saurashtra, Kachchh and Rajasthan Aravalli Margin

The southern maritime division catalogues 296 settlements along coastal bays and mineral-rich uplands [@Baba2018Developmen; @Fluckiger2024Dawn]. Dholavira on Khadir Island was the regional capital, concentrating 19,78k inhabitants within monumental stone walls and rock-cut cisterns. Lothal (8,52k in 2200BC) functioned as an industrial port town with a brick tidal basin, while Surkotada (3,41k in 2200BC), Rojdi (4,57k peak in 1900BC), Rangpur (2,8k peak) and Kuntasi (2,5k peak) supported maritime trade and pastoral grazing.

### Balochistan Highlands, Kachi Plain and Makran Coast

The western highland division catalogues 155 settlements across mountain defiles and desert coasts [@Khan2021Hydro; @Lemmen2013Simulation]. Mehrgarh on the Kachi Plain anchored the early Neolithic sequence (3,54k peak in 4000BC), flanked by Nausharo (2,8k peak). Balakot (3,87k peak in 2500BC) and Sutkagen Dor (2,2k peak) operated as fortified coastal outposts facilitating maritime navigation between the Indus and the Persian Gulf.

# Limitations

Archaeological settlement inventories in northwestern South Asia remain constrained by distinct taphonomic factors:
1. Deep alluvial burial: active sedimentation along the Indus and Punjab rivers has buried early Holocene farming hamlets beneath 5 to 8 metres of post-Bronze Age silt, obscuring smaller agrarian sites [@GarciaMolsosa2023Reconstruc].
2. Modern infrastructure destruction: nineteenth-century railway contractors used ancient mud-brick mounds as ballast quarries, severely damaging sites such as Harappa, while modern agricultural expansion continues to level smaller tell mounds [@GarciaMolsosa2023Reconstruc].
3. Differential regional visibility: stone architecture in arid Kachchh and Balochistan remains well preserved, whereas unbaked mud-brick sites in humid eastern Haryana undergo rapid natural weathering.
4. Absence of deciphered texts: the undeciphered status of the Indus script precludes direct administrative cross-checking of municipal populations, necessitating reliance on architectural area proxies [@Wells1998Introducti].

# Conclusion

The INDUS settlement gazetteer synthesises 1.138 catalogued Bronze Age localities across five physiographic divisions, providing an empirical foundation for regional demographic modelling from 10000BC to 1300BC. By reconciling georeferenced coordinates, mound areas and occupation chronologies, this catalogue isolates nucleated urban centres from rural populations, enabling dasymetric allocation of cultivators across the non-settled landscape and demonstrating the resilience of rural communities during late Bronze Age de-urbanisation.

# Appendix

The INDUS source ledger audited 1.938 candidate records, resulting in 1.138 accepted settlements and 800 exclusions. Table \ref{tab:excluded} documents the leading 25 excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Harappa</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Lothal</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sheri Khan Tarakai</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Surkotada</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Dholavira</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Rakhigarhi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sannarachamma</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Moenjodaro</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Dholavira</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Piklihal</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kanispur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bhirrana</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Chobari</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Hiregudda</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Lakhsara II</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Rakhigarhi (RGR-1)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Corner</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Shrine of Vishnu</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>DK-A</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>13th St</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Well</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Block 3</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Block 3</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kot Diji</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kot Diji</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Greater Indus basin source ledger.</figcaption>
</figure>

# Sources
