---
title: "Settlement Gazetteer of Pakistan until British Annexation"
subtitle: "INDUS: Coordinates, Toponymy and Urban Chronologies (10000BC to 1849AD)"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: pakistan_until_british_rule_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_pakistan_until_british_rule_spatial.png"
hero_caption: "Spatial distribution of 858 catalogued historical settlements and administrative divisions across Pakistan (847.968 km²) from 10000BC to 1849AD."
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

This gazetteer documents geographic coordinates, administrative allocations, chronological occupation envelopes and benchmark demographic estimates for 858 historical settlements across Pakistan from 10000BC to 1849AD. Encompassing 847.968 km² and 11.646 terrestrial 5-arcminute cells across five physiographic divisions under INDUS, the catalogue encompasses diverse architectural and ecological traditions: mud-brick and kiln-fired brick metropolises in the alluvial doabs of Punjab and Sindh, stone-built Hellenistic and Gandharan urban complexes with Buddhist stupas in the northern river basins, riverine fortress ports and commercial emporia along the lower Indus delta, and fortified oasis settlements guarding mountain passes and coastal anchorages in Balochistan and the Karakoram gorges. Urban scales range from early agricultural pioneer villages at Mehrgarh (3,54k peak in 4000BC) and Mature Harappan metropolises at Mohenjo-daro (38,46k in 2200BC) and Harappa (33,79k in 2200BC) to classical Gandharan capitals at Taxila (48,85k in 100AD) and Charsadda (30k in 100AD), mediaeval Islamic administrative hubs at Mansura (26,92k in 1000AD), Thatta (43,57k in 1700AD) and Multan (70k peak; 50k in 1700AD), and early modern metropolitan centres at Lahore (120k peak) and Amritsar (122,12k in 1849AD). Every catalogued locality reconciles against 1.658 candidate records within the source ledger alongside 800 documented exclusions, primarily duplicate-alias records within a 2,2 km spatial consolidation radius and non-habitation archaeological features. By providing an explicit spatial inventory of nucleated habitation nodes, this gazetteer establishes an archaeological foundation for settlement subtraction, ensuring that residual rural cultivators are allocated across the landscape according to environmental suitability.

# Background

Archaeological and historical settlement systems across Pakistan reflect dynamic human adaptations to regional hydrology, sediment deposition, trade corridors and defensive topography [@Khan2021Hydro; @Petrie2025Hidden; @Simpson2020Frontier]. Four primary settlement traditions characterise the regional record across twelve millennia:
1. Alluvial brick metropolises: In the active floodplains of the Indus and the Punjab tributaries, settlements relied on massive artificial mud-brick platforms to elevate living quarters above seasonal floodwaters [@Khan2021Hydro]. Mature Harappan cities such as Harappa, Mohenjo-daro and Ganweriwala featured baked-brick masonry, orthogonal street grids and covered drainage networks [@Khan2021Hydro; @Alam2025Origin]. During the mediaeval and early modern periods, cities such as Lahore and Multan expanded atop immense composite occupation mounds enclosed by defensive brick walls and citadel bastions [@Alam2025Origin; @Chatterji2017Princes].
2. Stone-built Gandharan cities and monastic complexes: In the Peshawar basin, Swat valley and Potwar plateau, where limestone and schist were abundant, urban centres were constructed with dressed-stone masonry and rubble packing [@Iori2023Urban; @Olivieri2021Monumental]. At Taxila, successive city foundations at Bhir Mound, Sirkap and Sirsukh document Greek, Scythian and Kushan urban planning, flanked by stone stupas and monastic colleges at Dharmarajika and Jaulian [@Khan2025Management; @Malik2011Sang]. At Barikot in Swat, defensive walls with bastions protected dense residential quarters, wine-press installations and Buddhist shrines [@Iori2023Urban; @Antonetti2024Wine; @Shavarebi2025Numismatic].
3. Deltaic emporia and river ports: Along the lower Indus and deltaic channels, settlements combined riverine shipping with overseas maritime trade [@Alam2025Origin]. Mediaeval Mansura was established within a loop of the Indus as an Arab administrative capital, while Thatta on the western delta margin developed into an international maritime port renowned for textile weaving and shipbuilding [@Alam2025Origin; @Chatterji2017Princes].
4. Mountain defile oases and highland forts: In the arid valleys of Balochistan and the Karakoram, fortified stations guarded strategic trade routes linking the lowlands with Central Asia and Iran [@Ali2002Exploratio; @Breseeg2001Baloch]. Mehrgarh commanded the Bolan Pass, while Kalat, Quetta, Chitral and Gilgit served as fortified redoubts anchoring local agricultural terraces and pastoral routes [@Khan2021Hydro; @Torwali2015Ignored].

# Methodology

Candidate sites in the source ledger were evaluated using published excavation monographs, state heritage registers, topographical maps and historical revenue surveys [@Petrie2025Hidden; @Simpson2020Frontier; @Alam2025Origin]. Inclusion requires:
- Precise WGS84 geographic coordinates validated against regional hydrology and satellite imagery.
- Documented cultural horizons, archaeological ceramic affiliations or historical chronicles spanning from the Neolithic through the late pre-colonial era.
- Area-based, hearth-based or room-count demographic estimates calibrated to settlement mound extents.

Where multiple archaeological survey points fall within a 2,2 km radius of a primary nucleated settlement, secondary coordinates are consolidated as duplicate aliases, preserving geographic integrity and preventing artificial clustering. Non-habitation features such as isolated petroglyph boulders, surface lithic scatters, solitary shrines and defensive watchtowers are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 858 catalogued settlements and summed site peaks across the five physiographic divisions of Pakistan.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>West Punjab and Potwar</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Sindh and Indus Delta</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Gandhara and Khyber Passes</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Balochistan and Makran</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Northern Valleys and Gilgit</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">2874</td><td class="crd-td">100%</td><td class="crd-td">10,3M</td><td class="crd-td">Lahore (1,24M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 858 catalogued settlements and summed site peaks across Pakistan.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and chronological horizons were evaluated through cartographic cross-checking and archaeological fieldwork [@Petrie2025Hidden; @Simpson2020Frontier]. Nineteenth-century Survey of India revenue and topographical maps recorded thousands of ancient tell mounds (*theh*, *tibba*, *damb*, *kot*, *deri*) prior to modern canal colony leveling, providing independent spatial coordinates for ancient settlement nodes [@Petrie2025Hidden]. Stratigraphic excavations and numismatic sequences at Taxila, Charsadda, Barikot and Harappa anchor the chronological envelopes and urban populations of major centres [@Shavarebi2025Numismatic; @Khan2025Management; @Iori2023Urban]. Macro-botanical remains from Barikot confirm multi-cropping agricultural regimes capable of sustaining dense urban populations [@Spengler2020Southern; @Antonetti2024Wine].

# Results

Table \ref{tab:gazetteer} presents the leading 40 historical settlements across Pakistan ordered by peak population descending, detailing coordinates, sub-regional allocation, occupation spans, peak population and 1849AD population.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1849AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">31,56 N, 74,35 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">1,24M</td><td class="crd-td">1,24M</td></tr>
<tr><td class="crd-td"><strong>Rawalpindi</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">33,6 N, 73,05 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">289,8k</td><td class="crd-td">289,8k</td></tr>
<tr><td class="crd-td"><strong>Gujranwala</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">32,15 N, 74,18 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">273k</td><td class="crd-td">273k</td></tr>
<tr><td class="crd-td"><strong>Amritsar</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">31,62 N, 74,88 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">128,6k</td><td class="crd-td">128,6k</td></tr>
<tr><td class="crd-td"><strong>Bahawalpur</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">29,4 N, 71,67 E</td><td class="crd-td">1849AD</td><td class="crd-td">120,3k</td><td class="crd-td">120,3k</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">31,55 N, 74,34 E</td><td class="crd-td">300BC - 1849AD</td><td class="crd-td">120k</td><td class="crd-td">120k</td></tr>
<tr><td class="crd-td"><strong>Sialkot</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">32,5 N, 74,53 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">93,4k</td><td class="crd-td">93,4k</td></tr>
<tr><td class="crd-td"><strong>Mirpur</strong></td><td class="crd-td">Gilgit-Baltistan and Chitral</td><td class="crd-td">33,15 N, 73,75 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">87,4k</td><td class="crd-td">87,4k</td></tr>
<tr><td class="crd-td"><strong>Chiniot</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">31,72 N, 72,98 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">80,8k</td><td class="crd-td">80,8k</td></tr>
<tr><td class="crd-td"><strong>Sheikhupura</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">31,71 N, 73,99 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">72,6k</td><td class="crd-td">72,6k</td></tr>
<tr><td class="crd-td"><strong>Multan</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">30,2 N, 71,47 E</td><td class="crd-td">2200BC - 1849AD</td><td class="crd-td">70k</td><td class="crd-td">70k</td></tr>
<tr><td class="crd-td"><strong>Rahim Yar Khan</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">28,42 N, 70,3 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">66,4k</td><td class="crd-td">66,4k</td></tr>
<tr><td class="crd-td"><strong>Jhang</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">33,67 N, 72,7 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">65,4k</td><td class="crd-td">65,4k</td></tr>
<tr><td class="crd-td"><strong>Peshawar</strong></td><td class="crd-td">Gandhara and Swat</td><td class="crd-td">34,02 N, 71,58 E</td><td class="crd-td">300BC - 1849AD</td><td class="crd-td">65k</td><td class="crd-td">65k</td></tr>
<tr><td class="crd-td"><strong>Jhang</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">31,27 N, 72,32 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">64,4k</td><td class="crd-td">64,4k</td></tr>
<tr><td class="crd-td"><strong>Gujrat</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">32,57 N, 74,08 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">61,6k</td><td class="crd-td">61,6k</td></tr>
<tr><td class="crd-td"><strong>Kasur</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">31,12 N, 74,45 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">56,6k</td><td class="crd-td">56,6k</td></tr>
<tr><td class="crd-td"><strong>Mardan</strong></td><td class="crd-td">Gandhara and Swat</td><td class="crd-td">34,2 N, 72,05 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">55,5k</td><td class="crd-td">55,5k</td></tr>
<tr><td class="crd-td"><strong>Ghakhar Mandi</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">32,18 N, 74,9 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">54,4k</td><td class="crd-td">54,4k</td></tr>
<tr><td class="crd-td"><strong>Mingora</strong></td><td class="crd-td">Gandhara and Swat</td><td class="crd-td">34,78 N, 72,36 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">52,3k</td><td class="crd-td">52,3k</td></tr>
<tr><td class="crd-td"><strong>Taxila</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">33,75 N, 72,79 E</td><td class="crd-td">1000BC - 100AD</td><td class="crd-td">48,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Clifton</strong></td><td class="crd-td">Sindh and Indus Delta</td><td class="crd-td">24,82 N, 67,03 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">48,3k</td><td class="crd-td">48,3k</td></tr>
<tr><td class="crd-td"><strong>Malir Cantonment</strong></td><td class="crd-td">Sindh and Indus Delta</td><td class="crd-td">24,94 N, 67,21 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">47,4k</td><td class="crd-td">47,4k</td></tr>
<tr><td class="crd-td"><strong>Qasimabad</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">30,5 N, 72,59 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">47,3k</td><td class="crd-td">47,3k</td></tr>
<tr><td class="crd-td"><strong>Dera Ghazi Khan</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">30,05 N, 70,63 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">46,7k</td><td class="crd-td">46,7k</td></tr>
<tr><td class="crd-td"><strong>Nawabshah</strong></td><td class="crd-td">Sindh and Indus Delta</td><td class="crd-td">26,24 N, 68,4 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">44,1k</td><td class="crd-td">44,1k</td></tr>
<tr><td class="crd-td"><strong>Thatta</strong></td><td class="crd-td">Sindh and Indus Delta</td><td class="crd-td">24,75 N, 67,92 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">43,6k</td><td class="crd-td">32,7k</td></tr>
<tr><td class="crd-td"><strong>Skardu</strong></td><td class="crd-td">Gilgit-Baltistan and Chitral</td><td class="crd-td">35,3 N, 75,62 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">41k</td><td class="crd-td">41k</td></tr>
<tr><td class="crd-td"><strong>Wah</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">33,81 N, 72,71 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">40,8k</td><td class="crd-td">40,8k</td></tr>
<tr><td class="crd-td"><strong>Kamoke</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">31,98 N, 74,22 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">39,4k</td><td class="crd-td">39,4k</td></tr>
<tr><td class="crd-td"><strong>Firozpur !</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">30,93 N, 74,61 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">39,1k</td><td class="crd-td">39,1k</td></tr>
<tr><td class="crd-td"><strong>Mohenjo-daro</strong></td><td class="crd-td">Sindh and Indus Delta</td><td class="crd-td">27,33 N, 68,14 E</td><td class="crd-td">2200BC</td><td class="crd-td">38,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bahawalnagar</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">30,55 N, 73,39 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">38,2k</td><td class="crd-td">38,2k</td></tr>
<tr><td class="crd-td"><strong>Sadiqabad</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">28,31 N, 70,13 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">37,8k</td><td class="crd-td">37,8k</td></tr>
<tr><td class="crd-td"><strong>Mirpur Khas</strong></td><td class="crd-td">Sindh and Indus Delta</td><td class="crd-td">25,53 N, 69,01 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">36,9k</td><td class="crd-td">36,9k</td></tr>
<tr><td class="crd-td"><strong>Burewala</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">30,17 N, 72,65 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">36,6k</td><td class="crd-td">36,6k</td></tr>
<tr><td class="crd-td"><strong>Khanewal</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">30,3 N, 71,93 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">35,8k</td><td class="crd-td">35,8k</td></tr>
<tr><td class="crd-td"><strong>Sialkot</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">32,49 N, 74,53 E</td><td class="crd-td">300BC - 1849AD</td><td class="crd-td">35k</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Harappa</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">30,63 N, 72,86 E</td><td class="crd-td">2200BC</td><td class="crd-td">33,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Muzaffargarh</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">30,07 N, 71,19 E</td><td class="crd-td">1500AD - 1849AD</td><td class="crd-td">33,1k</td><td class="crd-td">33,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 40 historical settlements ordered by peak population across Pakistan (10000BC to 1849AD).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### West Punjab and Potwar Plateau

West Punjab catalogues 251 historical settlements, concentrating 807.895 in summed peak population across the rich alluvial doabs and Potwar upland [@Simpson2020Frontier; @Chatterji2017Princes]. Amritsar developed into the preeminent commercial and banking centre of the Sikh Empire, reaching 122,12k inhabitants by 1849AD. Lahore functioned as a long-lived provincial and imperial metropolis, peaking at 120k in both 1700AD and 1849AD. Multan occupied a pivotal junction along the lower Chenab, peaking at 70k in the second millennium BC and supporting 50k in 1700AD as a renowned trade emporium. Taxila in the Potwar upland reached 48,85k in 100AD during the Kushan climax [@Khan2025Management; @Malik2011Sang]. Other prominent centres include Harappa (33,79k in 2200BC), Sialkot (35k in 1849AD), Firozpur ! (37,1k in 1849AD), Uch (25k in 1500AD), Ganweriwala (23,76k in 2200BC), Gujranwala, Jhang and Rawalpindi.

### Sindh and the Indus Delta

The southern alluvial division catalogues 207 settlements, with summed peak populations of 336.967 [@Alam2025Origin]. Thatta anchored the deltaic trade network, accommodating 43,57k inhabitants at its 1700AD peak as a global textile and port centre [@Alam2025Origin; @Chatterji2017Princes]. Mohenjo-daro was the foremost Bronze Age metropolis of the lower Indus, supporting 38,46k residents in 2200BC [@Khan2021Hydro]. Mansura served as the primary Arab administrative and commercial capital of Sindh, concentrating 26,92k people in 1000AD [@Alam2025Origin]. Other significant centres include Sehwan (anchored by the Lal Shahbaz Qalandar shrine), Hyderabad (established as the Talpur capital in 1768AD), Sukkur, Rohri and Alor.

### Gandhara, Swat and Khyber-Pakhtunkhwa Passes

The northwestern frontier catalogues 173 settlements, with summed peak populations of 246.773 [@Iori2023Urban; @Ali2002Exploratio]. Peshawar served as the primary gateway metropolis, supporting 65k inhabitants in 1849AD after functioning as the Kushan winter capital Purushapura [@Bashir2026Pilgrimage; @Khan2013Reclamatio]. Charsadda (ancient Pushkalavati) anchored the fertile junction of the Swat and Kabul rivers, reaching 30k in 100AD. Barikot (ancient Bazira) in the Swat valley commanded riverine terraces and mountain routes, supporting stone-walled fortifications, Buddhist temples and dense domestic blocks [@Iori2023Urban; @Olivieri2021Monumental; @Shavarebi2025Numismatic]. Other key nodes include Hund (ancient Udabhandapura, capital of the Hindu Shahis), Saidu Sharif, Mardan, Bannu and Dera Ismail Khan.

### Balochistan, Kalat and the Makran Coast

The western highland division catalogues 193 settlements across 343.142 km² of hyper-arid mountain ranges, piedmont fans and desert coastline, with summed peak populations of 174.275 [@Khan2021Hydro; @Breseeg2001Baloch]. Leri Damb in the Kachi Plain concentrated 5,7k inhabitants during early chalcolithic occupation. Mehrgarh on the Bolan River anchored the foundational Neolithic sequence of South Asia, supporting 3,54k people in 4000BC [@Khan2021Hydro]. Kalat served as the fortified upland capital of the Brahui Khanate, while Quetta commanded the northern passes leading toward Kandahar [@Breseeg2001Baloch; @Jetly1999Ethnicity]. Coastal ports at Sutkagen Dor, Gwadar, Pasni and Sonmiani facilitated maritime navigation across the northern Arabian Sea.

### Gilgit-Baltistan, Chitral and Western Kashmir Valleys

The northern mountain division catalogues 34 settlements distributed along high-altitude glacial valleys, with summed peak populations of 23.477 [@Ali2002Exploratio; @Torwali2015Ignored]. Khilingrong Mosque at Shigar in Baltistan anchored an early terraced oasis community concentrating 2,81k inhabitants. Gilgit occupied a strategic river confluence along the upper Indus, mediating caravan transit between Kashmir, Badakhshan and Xinjiang [@Sardar2012Rock]. Skardu in Baltistan and Chitral in the Kunar drainage supported fortified local princely seats coordinating terraced irrigation agriculture and livestock pasturage [@Ali2002Exploratio].

<figure class="crd-figure-block" id="fig:trajectory">
<img class="crd-figure-img" src="/artefacts/project_indus/1.0-pakistan-until-british-rule-settlements/fig2_pakistan_until_british_rule_demography.png" alt="fig:trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of Pakistan across five sub-regions (10000BC to 1849AD), illustrating Bronze Age, Kushan, Mughal and Sikh peaks.</figcaption>
</figure>

# Limitations

Settlement documentation across Pakistan remains subject to distinct archaeological and taphonomic constraints:
1. Fluvial alluviation: repeated avulsions and sediment deposition along the Indus, Ravi, Chenab and Sutlej rivers have buried early prehistoric settlements beneath deep silt layers while eroding others [@Khan2021Hydro; @Simpson2020Frontier].
2. Infrastructure quarrying: nineteenth-century railway contractors used ancient mud-brick mounds as ballast quarries, most notably at Harappa, damaging architectural stratigraphy [@Petrie2025Hidden].
3. Regional survey disparities: fertile agricultural sectors of Punjab and Peshawar have received intensive archaeological investigation, whereas arid tracts of central Balochistan and high Karakoram gorges remain comparatively less surveyed [@Simpson2020Frontier; @Breseeg2001Baloch].
4. Pre-census quantitative reliance: prior to the introduction of systematic decennial British censuses in the late nineteenth century, urban populations must be derived from walled surface extents, house-floor multipliers and revenue records [@Simpson2020Frontier].

# Conclusion

The INDUS settlement gazetteer synthesises 858 historical localities across Pakistan from 10000BC to 1849AD, providing an empirical baseline for regional demographic modeling. By reconciling WGS84 coordinates, occupation spans and population series across five physiographic divisions, this catalogue isolates nucleated urban centres from rural agricultural populations, enabling dasymetric allocation of cultivators across the non-settled landscape and demonstrating long-term demographic continuity across twelve millennia of northwestern South Asian history.

# Appendix

The source ledger audited 1.658 candidate records across Pakistan, resulting in 858 accepted settlements and 800 exclusions. Table \ref{tab:excluded} documents the leading 25 excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Multan</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Peshawar</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Charsadda</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Taxila</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Thatta</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Uch Sharif</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pasni</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Akhnur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Alexandreia/Alexandria</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bagisara</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pānṛ I</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Harappa</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Harappa</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Daggar</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kophen/Koa (river)</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sirsukh</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Taxila</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kund</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Jandial Temple</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sirkap</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Dholavira</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Lewan</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Peukelaotis/Kaspatyros</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Alexandria/Rhambakia</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Aristobathra/Orobatis</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Pakistan source ledger.</figcaption>
</figure>

# Sources
