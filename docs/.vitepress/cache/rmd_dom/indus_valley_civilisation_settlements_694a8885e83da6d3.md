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
hero_caption: "Spatial distribution of 2.359 catalogued Bronze Age settlements and regional hydrological catchments across the Greater Indus basin (1,62M km²) from 10000BC to 1300BC."
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

This gazetteer catalogues WGS84 coordinates, administrative allocations, occupation chronologies and benchmark demographic trajectories for 2.359 Bronze Age settlements across the Greater Indus basin (1,62M km², encompassing 1.621.984 km² and 21.951 active 5-arcminute terrestrial cells) from 10000BC to 1300BC. Spanning five physiographic divisions, the gazetteer encompasses diverse architectural and ecological traditions: monumental kiln-fired brick metropolises in the Indus and Punjab alluvium, dressed-stone citadel fortresses with rock-cut reservoirs in the arid terranes of Kachchh and Saurashtra, mud-brick farming towns and craft centres along the Ghaggar-Hakra drainage and piedmont oasis communities guarding mountain passes in Balochistan [@Possehl1999IndusAge; @Kenoyer1998AncientCities].

Settlement scales range from early Holocene farming villages at Mehrgarh (4,2k peak in 3000BC) and coastal stations at Balakot (4,2k peak in 2200BC) to Mature Harappan metropolitan capitals at Mohenjo-daro (42k in 2200BC), Rakhigarhi (40k in 2200BC), Harappa (35k in 2200BC), Ganweriwala (26k in 2200BC) and Dholavira (20k in 2200BC). Major regional and specialised centres include Rehman Dheri (13k peak in 2500BC, 11k in 2200BC), Kalibangan (12,5k in 2200BC), Lothal (9,5k in 2200BC), Chanhudaro (8,5k in 2200BC), Banawali (8,5k in 2200BC), Kot Diji (7,5k peak in 2500BC, 6,5k in 2200BC), Gilund (6,5k in 2200BC), Farmana (6,5k in 2200BC) and Bhirrana (6,5k peak in 2500BC, 6k in 2200BC). Across all 2.359 settlements, the rank-size distribution fits a Zipf power law with $\alpha = 0,87$ and $R^2 = 0,92$. Every catalogued locality reconciles against 2.964 source-ledger candidates under INDUS alongside 605 documented exclusions (duplicate-alias consolidations within the spatial consolidation radius).

By linking georeferenced settlement trajectories with regional alluvial geomorphology, remote sensing mound inventories and palaeoclimate records, this gazetteer establishes an archaeological baseline for Bronze Age nucleation in northwestern South Asia. Settlement subtraction isolates nucleated urban centres from rural populations, ensuring that historical demographic reconstructions reflect genuine archaeological mound distributions rather than arbitrary continental projections.

# Background

Archaeological settlement patterns in the Greater Indus basin reflect sophisticated adaptations to regional hydrology, sediment dynamics and trade geography [@Petrie2017Adaptation; @Khan2021Hydro]. Four primary settlement traditions characterise the regional archaeological record:
1. Kiln-fired brick metropolises: In the active floodplains of the Indus and its Punjab tributaries, major cities were constructed on elevated artificial mud-brick platforms to withstand annual floodwaters [@Khan2013Bricks]. Mohenjo-daro and Harappa featured standardised baked-brick architecture, orthogonal street alignments and municipal sewer conduits connecting private dwellings to street drainage networks [@Green2006State; @Khan2021Hydro].
2. Stone-faced citadel fortifications: In the rocky landscapes of Kachchh and Saurashtra, where building stone was abundant, settlements were constructed from dressed limestone and rubble masonry [@Baba2018Developmen]. Dholavira incorporated monumental rock-cut water reservoirs, triple-walled defensive circuits and monumental gateway architecture designed to capture seasonal torrents [@Baba2018Developmen].
3. Alluvial craft towns: Along the fossil channels of the Ghaggar-Hakra and in eastern Haryana, settlements such as Rakhigarhi, Kalibangan and Banawali combined mud-brick domestic architecture with specialised industrial quarters for steatite seal engraving, carnelian bead drilling and copper metallurgy [@Parikh2019Inheritors; @Jain2026Layers].
4. Piedmont defile oases and coastal ports: In Balochistan and along the Makran littoral, fortified stations such as Mehrgarh, Nausharo, Balakot and Sutkagen Dor guarded maritime anchorages and mountain passes, mediating commercial exchange between the Indus alluvium, the Iranian plateau and the Persian Gulf [@Fluckiger2024Dawn; @Kennedy2012Were].

# Methodology

Candidate sites in the source ledger were evaluated using primary-monograph historical metropolis trajectories [@Possehl1999IndusAge; @Kenoyer1998AncientCities; @Allchin1995Archaeology; @Erdosy1988Urbanisation], multi-repository archaeological and monument corpora (Pleiades, Zenodo Harappan, Vidarbha and Palaeolithic Indian Archaeology Reviews, Archaeological Survey of India P1371, Wikidata, OpenStreetMap and XRONOS/c14bazAAR), official national censuses (Census of India Table A-04, PBS, BBS, DCS, CBS, NSB and NBS) alongside colonial gazetteer baselines [@ImperialGazetteer1908], remote sensing surveys and radiocarbon syntheses [@GarciaMolsosa2023Reconstruc; @Petrie2019Revisiting]. To maintain long-term geographic integrity across South Asian historical layers, the expanded 2.359-settlement gazetteer anchors Bronze Age mound coordinates against macro-envelope *qasba*, *pargana* and *nadu* settlement continuity [@Habib1982Atlas; @Moosvi1987Economy; @Chattopadhyaya1994Making; @Champakalakshmi1996Trade] subject to strict foundation-year and chronological toponymy filters, ensuring every figure reflects empirical site evidence rather than arbitrary continental projections. Inclusion requires:
- Precise WGS84 geographic coordinates validated against regional hydrography.
- Documented cultural horizons, ceramic affiliations or radiocarbon chronologies spanning from the Neolithic through the Late Harappan periods.
- Area-based or room-count demographic estimations calibrated to primary excavation monographs and settlement mound extent.

Where multiple archaeological survey points fall within the consolidation radius of a primary nucleated settlement, secondary coordinates are merged as duplicate aliases, preserving geographic integrity and preventing artificial clustering. Non-habitation features such as isolated petroglyphs, surface lithic scatters and ephemeral camp sites are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 2.359 catalogued settlements and summed site peaks across the five sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Balochistan and Makran</strong></td><td class="crd-td">171</td><td class="crd-td">7,2%</td><td class="crd-td">155,2k</td><td class="crd-td">Drakalo Fortifiation (4,7k)</td></tr>
<tr><td class="crd-td"><strong>Sindh and Lower Indus</strong></td><td class="crd-td">199</td><td class="crd-td">8,4%</td><td class="crd-td">177,1k</td><td class="crd-td">Mohenjo-daro (42k)</td></tr>
<tr><td class="crd-td"><strong>Punjab and Upper Indus</strong></td><td class="crd-td">712</td><td class="crd-td">30,2%</td><td class="crd-td">466,4k</td><td class="crd-td">Harappa (35k)</td></tr>
<tr><td class="crd-td"><strong>Ghaggar-Hakra and Haryana</strong></td><td class="crd-td">669</td><td class="crd-td">28,4%</td><td class="crd-td">428,2k</td><td class="crd-td">Rakhigarhi (40k)</td></tr>
<tr><td class="crd-td"><strong>Saurashtra and Rajasthan</strong></td><td class="crd-td">608</td><td class="crd-td">25,8%</td><td class="crd-td">480,8k</td><td class="crd-td">Dholavira (20k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">2.359</td><td class="crd-td">100%</td><td class="crd-td">1,71M</td><td class="crd-td">Mohenjo-daro (42k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 2.359 catalogued settlements and summed site peaks across the Greater Indus basin.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and chronological spans were verified through remote sensing and geoarchaeological testing [@Orengo2020Automated; @Neogi2019Geoarchaeo]. Machine learning classifiers applied to multisensor satellite imagery confirmed the presence of elevated tell mounds across heavily cultivated sectors of Punjab and Haryana, distinguishing ancient cultural mounds from natural sand dunes and river levees [@Orengo2020Automated]. Historical nineteenth-century cartography from the Survey of India provided vital ground truth by recording toponyms indicating ancient tell sites (*theh*, *tibba*) that were subsequently degraded by modern mechanised agriculture [@GarciaMolsosa2023Reconstruc].

Bioarchaeological and isotopic studies conducted on skeletal series from Harappa, Rakhigarhi and Farmana validate urban population scales [@Valentine2015Evidence; @Anonymous2023Perspectiv]. Dental enamel strontium ($^{87}\text{Sr}/^{86}\text{Sr}$) and lead ($^{206}\text{Pb}/^{204}\text{Pb}$) ratios establish that large cities acted as regional migration magnets, absorbing pastoralists, miners and rural farmers from peripheral zones [@Valentine2015Evidence]. Radiocarbon sequences calibrated across stratigraphic layers anchor the foundation and abandonment dates of catalogued sites, confirming contemporaneity during the Mature Harappan climax (2600BC to 1900BC) [@Petrie2019Revisiting].

# Results

Across all 2.359 catalogued settlements, the regional urban hierarchy follows a Zipf rank-size distribution with $\alpha = 0,87$ and $R^2 = 0,92$, led by Mohenjo-daro (42k in 2200BC), Rakhigarhi (40k in 2200BC), Harappa (35k in 2200BC), Ganweriwala (26k in 2200BC), Dholavira (20k in 2200BC), Rehman Dheri (13k peak in 2500BC, 11k in 2200BC), Kalibangan (12,5k in 2200BC) and Lothal (9,5k in 2200BC). Table \ref{tab:gazetteer} presents the leading 45 Bronze Age settlements across the Greater Indus basin ordered by peak population descending, detailing coordinates, sub-regional allocation, occupation spans and demographic peaks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">2200BC Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mohenjo-daro</strong></td><td class="crd-td">Sindh and Lower Indus Alluvial Plain</td><td class="crd-td">27,33 N, 68,14 E</td><td class="crd-td">2500BC - 1900BC</td><td class="crd-td">42k</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td"><strong>Rakhigarhi</strong></td><td class="crd-td">Ghaggar-Hakra Interfluve and Haryana</td><td class="crd-td">29,29 N, 76,11 E</td><td class="crd-td">4000BC - 1900BC</td><td class="crd-td">40k</td><td class="crd-td">40k</td></tr>
<tr><td class="crd-td"><strong>Harappa</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">30,63 N, 72,86 E</td><td class="crd-td">3000BC - 1300BC</td><td class="crd-td">35k</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Ganweriwala</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">28,72 N, 71,19 E</td><td class="crd-td">2500BC - 1900BC</td><td class="crd-td">26k</td><td class="crd-td">26k</td></tr>
<tr><td class="crd-td"><strong>Dholavira</strong></td><td class="crd-td">Saurashtra and Kachchh</td><td class="crd-td">23,89 N, 70,21 E</td><td class="crd-td">3000BC - 1500BC</td><td class="crd-td">20k</td><td class="crd-td">20k</td></tr>
<tr><td class="crd-td"><strong>Rehman Dheri</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">31,97 N, 70,79 E</td><td class="crd-td">3000BC - 1900BC</td><td class="crd-td">13k</td><td class="crd-td">11k</td></tr>
<tr><td class="crd-td"><strong>Kalibangan</strong></td><td class="crd-td">Saurashtra and Kachchh</td><td class="crd-td">29,47 N, 74,13 E</td><td class="crd-td">3000BC - 1900BC</td><td class="crd-td">12,5k</td><td class="crd-td">12,5k</td></tr>
<tr><td class="crd-td"><strong>Lothal</strong></td><td class="crd-td">Saurashtra and Kachchh</td><td class="crd-td">22,52 N, 72,25 E</td><td class="crd-td">2200BC - 1900BC</td><td class="crd-td">9,5k</td><td class="crd-td">9,5k</td></tr>
<tr><td class="crd-td"><strong>Chanhudaro</strong></td><td class="crd-td">Sindh and Lower Indus Alluvial Plain</td><td class="crd-td">25,88 N, 68,32 E</td><td class="crd-td">2500BC - 1900BC</td><td class="crd-td">8,5k</td><td class="crd-td">8,5k</td></tr>
<tr><td class="crd-td"><strong>Banawali</strong></td><td class="crd-td">Ghaggar-Hakra Interfluve and Haryana</td><td class="crd-td">29,6 N, 75,39 E</td><td class="crd-td">3000BC - 1900BC</td><td class="crd-td">8,5k</td><td class="crd-td">8,5k</td></tr>
<tr><td class="crd-td"><strong>Kot Diji</strong></td><td class="crd-td">Sindh and Lower Indus Alluvial Plain</td><td class="crd-td">27,37 N, 68,71 E</td><td class="crd-td">3000BC - 1900BC</td><td class="crd-td">7,5k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Bhirrana</strong></td><td class="crd-td">Ghaggar-Hakra Interfluve and Haryana</td><td class="crd-td">29,55 N, 75,55 E</td><td class="crd-td">4000BC - 1900BC</td><td class="crd-td">6,5k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Farmana</strong></td><td class="crd-td">Ghaggar-Hakra Interfluve and Haryana</td><td class="crd-td">29,04 N, 76,31 E</td><td class="crd-td">2500BC - 1900BC</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Gilund</strong></td><td class="crd-td">Saurashtra and Kachchh</td><td class="crd-td">25,03 N, 74,27 E</td><td class="crd-td">3000BC - 1500BC</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Indragarh</strong></td><td class="crd-td">Saurashtra and Kachchh</td><td class="crd-td">24,54 N, 75,72 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">6,3k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Akra</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">32,88 N, 70,63 E</td><td class="crd-td">2000BC - 1300BC</td><td class="crd-td">6,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sisai, Hisar</strong></td><td class="crd-td">Ghaggar-Hakra Interfluve and Haryana</td><td class="crd-td">29,18 N, 76,01 E</td><td class="crd-td">4000BC - 1300BC</td><td class="crd-td">6k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Ganeshwar</strong></td><td class="crd-td">Saurashtra and Kachchh</td><td class="crd-td">27,67 N, 75,82 E</td><td class="crd-td">4000BC - 2000BC</td><td class="crd-td">5,9k</td><td class="crd-td">5,9k</td></tr>
<tr><td class="crd-td"><strong>Lewan</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">32,89 N, 70,59 E</td><td class="crd-td">6000BC - 4000BC</td><td class="crd-td">5,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Amri</strong></td><td class="crd-td">Sindh and Lower Indus Alluvial Plain</td><td class="crd-td">26,17 N, 67,92 E</td><td class="crd-td">3000BC - 1900BC</td><td class="crd-td">5,5k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Ahar</strong></td><td class="crd-td">Saurashtra and Kachchh</td><td class="crd-td">24,59 N, 73,72 E</td><td class="crd-td">3000BC - 1300BC</td><td class="crd-td">5,5k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Rojdi</strong></td><td class="crd-td">Saurashtra and Kachchh</td><td class="crd-td">22,28 N, 71,14 E</td><td class="crd-td">2500BC - 1900BC</td><td class="crd-td">5k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Drakalo Fortifiation</strong></td><td class="crd-td">Balochistan Highlands and Kachi Plain</td><td class="crd-td">27,17 N, 66,27 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">4,7k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Nandgarh</strong></td><td class="crd-td">Ghaggar-Hakra Interfluve and Haryana</td><td class="crd-td">29,8 N, 75,42 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">4,7k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Nahargarh ki Bawari</strong></td><td class="crd-td">Saurashtra and Kachchh</td><td class="crd-td">26,94 N, 75,82 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">4,6k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Mojgarh Ther</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">29,02 N, 72,14 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">4,4k</td><td class="crd-td">3,3k</td></tr>
<tr><td class="crd-td"><strong>Allahdino</strong></td><td class="crd-td">Sindh and Lower Indus Alluvial Plain</td><td class="crd-td">24,95 N, 67,31 E</td><td class="crd-td">3000BC - 2000BC</td><td class="crd-td">4,3k</td><td class="crd-td">4,3k</td></tr>
<tr><td class="crd-td"><strong>Mehrgarh</strong></td><td class="crd-td">Balochistan Highlands and Kachi Plain</td><td class="crd-td">29,38 N, 67,62 E</td><td class="crd-td">6000BC - 2500BC</td><td class="crd-td">4,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Balakot</strong></td><td class="crd-td">Balochistan Highlands and Kachi Plain</td><td class="crd-td">25,47 N, 66,68 E</td><td class="crd-td">3000BC - 1900BC</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Surkotada</strong></td><td class="crd-td">Saurashtra and Kachchh</td><td class="crd-td">23,61 N, 70,92 E</td><td class="crd-td">2200BC - 1900BC</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Fortress</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">33,73 N, 72,88 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">4,2k</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Nandgarh I</strong></td><td class="crd-td">Ghaggar-Hakra Interfluve and Haryana</td><td class="crd-td">29,18 N, 76,48 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">3,7k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Kotada Bhadli</strong></td><td class="crd-td">Saurashtra and Kachchh</td><td class="crd-td">23,35 N, 69,43 E</td><td class="crd-td">4000BC - 3000BC</td><td class="crd-td">3,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sheikhwali</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">28,5 N, 70,97 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">3,4k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Tor Warai</strong></td><td class="crd-td">Balochistan Highlands and Kachi Plain</td><td class="crd-td">29,94 N, 66,56 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">3,4k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Rappwala Ther</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">28,65 N, 71,17 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">3,4k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Khairaiti Khera</strong></td><td class="crd-td">Ghaggar-Hakra Interfluve and Haryana</td><td class="crd-td">29,5 N, 75,36 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">3,3k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Jawaiwala Ther</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">28,73 N, 71,07 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">3,3k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Kanjar-kote</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">34,67 N, 72,2 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">3,3k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Yamchun</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">36,97 N, 72,26 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">3,3k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Likche</strong></td><td class="crd-td">Ghaggar-Hakra Interfluve and Haryana</td><td class="crd-td">33,73 N, 76,96 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">3,3k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Fatepur</strong></td><td class="crd-td">Ghaggar-Hakra Interfluve and Haryana</td><td class="crd-td">29,77 N, 75,4 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">3,3k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Leri Damb</strong></td><td class="crd-td">Balochistan Highlands and Kachi Plain</td><td class="crd-td">27,66 N, 66,23 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">3,3k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Jamuwali andapos;Aandapos</strong></td><td class="crd-td">Punjab and Cholistan</td><td class="crd-td">28,93 N, 71,17 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">3,3k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Mandor</strong></td><td class="crd-td">Saurashtra and Kachchh</td><td class="crd-td">26,35 N, 73,04 E</td><td class="crd-td">2500BC - 1300BC</td><td class="crd-td">3,3k</td><td class="crd-td">2,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 Bronze Age settlements ordered by peak population across the Greater Indus basin (10000BC to 1300BC).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Punjab, Cholistan and Upper Indus-Gomal Basin

The northern division catalogues 712 settlements distributed along the Ravi, Chenab, Jhelum and dry Hakra river beds [@Petrie2019Chapter; @Kenoyer1998AncientCities]. Harappa commanded the central Punjab plain, supporting 35k inhabitants in 2200BC across its citadel and lower city mounds. Ganweriwala occupied a strategic node in Cholistan along the Hakra palaeochannel, concentrating 26k people during the Mature Harappan climax. Other prominent centres include Rehman Dheri (13k peak in 2500BC, 11k in 2200BC) commanding the Gomal Pass, Akra (6,1k peak in 1300BC), Lewan (5,8k peak in 4000BC) and Jalilpur (2,3k in 2200BC, 3k peak in 1500BC).

### Sindh and Lower Indus Alluvial Plain

The lower alluvial division catalogues 199 settlements along the Indus trunk stream [@Green2006State; @Khan2021Hydro; @Possehl1999IndusAge]. Mohenjo-daro was the preeminent metropolis, accommodating 42k residents in 2200BC across extensive brick terraces served by hundreds of public and private wells. Chanhudaro (8,5k in 2200BC) was a renowned bead-making and craft production town, while Kot Diji (7,5k peak in 2500BC, 6,5k in 2200BC) and Amri (5,5k peak in 2500BC, 5k in 2200BC) represented foundational Early Harappan regional centres that continued into the Mature phase.

### Ghaggar-Hakra Interfluve, Haryana and Eastern Punjab

This division catalogues 669 settlements across the eastern monsoon margins [@Anonymous2023Perspectiv; @Petrie2017Adaptation]. Rakhigarhi was the largest urban centre, spanning over 300 ha and accommodating 40k people at its 2200BC peak. Banawali (8,5k in 2200BC), Farmana (6,5k in 2200BC), Bhirrana (6,5k peak in 2500BC, 6k in 2200BC) and Sisai near Hisar (6k in 2500BC and 2200BC) formed a dense lattice of agricultural and industrial towns across the Haryana alluvial plain.

### Saurashtra, Kachchh and Rajasthan Aravalli Margin

The southern maritime and Rajasthan margin division catalogues 608 settlements along coastal bays, the northern Ghaggar-Rajasthan border and mineral-rich uplands [@Baba2018Developmen; @Fluckiger2024Dawn; @Kenoyer1998AncientCities]. Dholavira on Khadir Island was the maritime regional capital, concentrating 20k inhabitants in 2200BC within monumental stone walls and rock-cut cisterns. Along the northern Rajasthan border of this sub-mask, Kalibangan accommodated 12,5k inhabitants in 2200BC with a raised citadel and lower town featuring civic fire altars. Lothal (9,5k in 2200BC) functioned as an industrial port town with a brick tidal basin, complemented by Gilund (6,5k in 2200BC), Ganeshwar (5,9k in 2500BC and 2200BC), Ahar (5,5k in 2200BC), Rojdi (5k in 2200BC) and Surkotada (4,2k in 2200BC).

### Balochistan Highlands, Kachi Plain and Makran Coast

The western highland division catalogues 171 settlements across mountain defiles and desert coasts [@Khan2021Hydro; @Lemmen2013Simulation; @Possehl1999IndusAge]. Mehrgarh on the Kachi Plain anchored the early Neolithic and Chalcolithic sequence (4,2k peak in 3000BC), while Balakot (4,2k peak in 2200BC) and Sutkagen Dor (3,2k in 2200BC) operated as fortified coastal outposts facilitating maritime navigation between the Indus and the Persian Gulf.

# Limitations

Archaeological settlement inventories in northwestern South Asia remain constrained by distinct taphonomic factors:
1. Deep alluvial burial: active sedimentation along the Indus and Punjab rivers has buried early Holocene farming hamlets beneath 5 to 8 metres of post-Bronze Age silt, obscuring smaller agrarian sites [@GarciaMolsosa2023Reconstruc].
2. Modern infrastructure destruction: nineteenth-century railway contractors used ancient mud-brick mounds as ballast quarries, severely damaging sites such as Harappa, while modern agricultural expansion continues to level smaller tell mounds [@GarciaMolsosa2023Reconstruc].
3. Differential regional visibility: stone architecture in arid Kachchh and Balochistan remains well preserved, whereas unbaked mud-brick sites in humid eastern Haryana undergo rapid natural weathering.
4. Absence of deciphered texts: the undeciphered status of the Indus script precludes direct administrative cross-checking of municipal populations, necessitating reliance on architectural area proxies [@Wells1998Introducti].

# Conclusion

The INDUS settlement gazetteer synthesises 2.359 catalogued Bronze Age localities across five physiographic divisions ($\alpha = 0,87$, $R^2 = 0,92$), providing an empirical foundation for regional demographic modelling from 10000BC to 1300BC. By reconciling georeferenced coordinates, mound areas and occupation chronologies, this catalogue isolates nucleated urban centres from rural populations, enabling dasymetric allocation of cultivators across the non-settled landscape and demonstrating the resilience of rural communities during late Bronze Age de-urbanisation.

# Appendix

The INDUS source ledger audited 2.964 candidate records, resulting in 2.359 accepted settlements and 605 exclusions (duplicate-alias consolidations). Table \ref{tab:excluded} documents the leading 25 excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mandriyara Mohra</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Lakhsara II</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ojiyana</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sannarachamma</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Piklihal</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sheri Khan Tarakai</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kanispur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Mandasor</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sanjit</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Vaslai</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Amoda</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Mananu</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Chitor</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Perajpur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kumbhar - pada</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pinjore</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Rampura</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Chittaurgarh</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Rajgarh</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Adampur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Jahazpur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Shirgaon</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Hameer Garh</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Govindgarh</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pahalgam</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Greater Indus basin source ledger.</figcaption>
</figure>

# Sources
