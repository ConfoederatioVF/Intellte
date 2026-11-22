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
hero_caption: "Spatial distribution of 10.940 catalogued historical settlements and administrative divisions across Pakistan (847.968 km²) from 10000BC to 1849AD."
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

This gazetteer documents geographic coordinates, administrative allocations, chronological occupation envelopes and benchmark demographic estimates for 10.940 historical settlements across Pakistan from 10000BC to 1849AD. Encompassing 847.968 km² and 11.646 terrestrial 5-arcminute cells across five physiographic divisions under INDUS, the catalogue encompasses diverse architectural and ecological traditions: mud-brick and kiln-fired brick metropolises in the alluvial doabs of Punjab and Sindh, stone-built Hellenistic and Gandharan urban complexes with Buddhist stupas in the northern river basins, riverine fortress ports and commercial emporia along the lower Indus delta, and fortified oasis settlements guarding mountain passes and coastal anchorages in Balochistan and the Karakoram gorges. Across the full catalogue, peak site sizes follow a Zipf rank-size exponent of $\alpha = 0,73$ ($R^2 = 0,92$), spanning from early agricultural pioneer villages at Mehrgarh (4,2k peak in 3000BC) and Mature Harappan metropolises at Mohenjo-daro (42k in 2200BC) and Harappa (35k in 2200BC) to classical Gandharan capitals at Taxila (72k in 100AD) and Charsadda (38k in 100BC), mediaeval Islamic hubs at Mansura (58,4k in 900AD), Thatta (137,05k in 1600AD) and Multan (105k in 1650AD), and early modern metropolises at Lahore (350k in 1650AD), Amritsar (128,66k in 1849AD), Peshawar (95k in 1800AD), Sheikhupura (83,68k in 1849AD) and Jhang (71,11k in 1849AD). Every catalogued locality reconciles against 11.740 candidate records within the source ledger alongside 800 documented exclusions, primarily duplicate-alias records within a 2,2 km spatial consolidation radius and non-habitation archaeological features. By providing an explicit spatial inventory of nucleated habitation nodes, this gazetteer establishes an empirical foundation for settlement subtraction, ensuring that residual rural cultivators are allocated across the landscape according to environmental suitability.

# Background

Archaeological and historical settlement systems across Pakistan reflect dynamic human adaptations to regional hydrology, sediment deposition, trade corridors and defensive topography [@Possehl1999IndusAge; @Khan2021Hydro; @Petrie2025Hidden; @Simpson2020Frontier]. Four primary settlement traditions characterise the regional record across twelve millennia:
1. Alluvial brick metropolises: In the active floodplains of the Indus and the Punjab tributaries, settlements relied on massive artificial mud-brick platforms to elevate living quarters above seasonal floodwaters [@Khan2021Hydro]. Mature Harappan cities such as Harappa, Mohenjo-daro and Ganweriwala featured baked-brick masonry, orthogonal street grids and covered drainage networks [@Kenoyer1998AncientCities; @Possehl1999IndusAge; @Khan2021Hydro; @Alam2025Origin]. During the mediaeval and early modern periods, cities such as Lahore and Multan expanded atop immense composite occupation mounds enclosed by defensive brick walls and citadel bastions [@Hambly1982Towns; @Habib1982Atlas; @Moosvi1987Economy; @Naqvi1968Urbanisation].
2. Stone-built Gandharan cities and monastic complexes: In the Peshawar basin, Swat valley and Potwar plateau, where limestone and schist were abundant, urban centres were constructed with dressed-stone masonry and rubble packing [@Allchin1995Archaeology; @Iori2023Urban; @Olivieri2021Monumental]. At Taxila, successive city foundations at Bhir Mound, Sirkap and Sirsukh document Greek, Scythian and Kushan urban planning, flanked by stone stupas and monastic colleges at Dharmarajika and Jaulian [@Erdosy1988Urbanisation; @Khan2025Management; @Malik2011Sang]. At Barikot in Swat, defensive walls with bastions protected dense residential quarters, wine-press installations and Buddhist shrines [@Iori2023Urban; @Antonetti2024Wine; @Shavarebi2025Numismatic].
3. Deltaic emporia and river ports: Along the lower Indus and deltaic channels, settlements combined riverine shipping with overseas maritime trade [@Alam2025Origin]. Mediaeval Mansura was established within a loop of the Indus as an Arab administrative capital, while Thatta on the western delta margin developed into an international maritime port renowned for textile weaving and shipbuilding [@Hambly1982Towns; @Habib1982Atlas; @ImperialGazetteer1908; @Alam2025Origin].
4. Mountain defile oases and highland forts: In the arid valleys of Balochistan and the Karakoram, fortified stations guarded strategic trade routes linking the lowlands with Central Asia and Iran [@Ali2002Exploratio; @Breseeg2001Baloch]. Mehrgarh commanded the Bolan Pass, while Kalat, Quetta, Chitral and Gilgit served as fortified redoubts anchoring local agricultural terraces and pastoral routes [@Possehl1999IndusAge; @Khan2021Hydro; @Torwali2015Ignored].

# Methodology

The expanded 10.940-settlement gazetteer is empirically anchored in four reconciled evidentiary tiers rather than arbitrary interpolation:
1. Primary-monograph historical metropolis trajectories: Peak and benchmark urban series for leading cities derive from Mughal, Sultanate, Sikh and colonial economic histories and revenue atlases [@Habib1982Atlas; @Moosvi1987Economy; @Hambly1982Towns; @Naqvi1968Urbanisation; @Bayly1983Rulers; @ImperialGazetteer1908], alongside early historic and Bronze Age excavations [@Possehl1999IndusAge; @Kenoyer1998AncientCities; @Allchin1995Archaeology; @Erdosy1988Urbanisation].
2. Multi-repository archaeological and monument corpora: Spatial coordinates and occupation spans were ingested from Pleiades, Zenodo Harappan, Vidarbha and Palaeolithic Indian Archaeological Reports (IARs), Archaeological Survey of India (ASI P1371) registers, Wikidata, OpenStreetMap (OSM) and XRONOS/c14bazAAR radiocarbon databases [@Petrie2025Hidden; @Simpson2020Frontier].
3. Official national censuses and administrative registries: Late pre-colonial baselines and sub-district demographic hierarchies were calibrated against Census of India Table A-04 historical series, Pakistan Bureau of Statistics (PBS) records and harmonised South Asian statistical frameworks (BBS, DCS, CBS, NSB and NBS) across sovereign boundaries.
4. Macro-envelope *qasba*, *pargana* and *nadu* continuity: Pre-1800 secondary town and market-village series were validated through strict foundation-year verification and chronological toponymy filters, preserving an empirical Zipf rank-size slope ($\alpha = 0,73$, $R^2 = 0,92$).

Candidate sites in the source ledger require precise WGS84 coordinates validated against regional hydrology, documented cultural horizons or historical chronicles, and area-based, hearth-based or census-anchored demographic estimates. Where multiple archaeological survey points fall within a 2,2 km radius of a primary nucleated settlement, secondary coordinates are consolidated as duplicate aliases, preserving geographic integrity and preventing artificial clustering. Non-habitation features such as isolated petroglyph boulders, surface lithic scatters, solitary shrines and defensive watchtowers are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 10.940 catalogued settlements and summed site peaks across the five physiographic divisions of Pakistan.

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
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">10940</td><td class="crd-td">100%</td><td class="crd-td">14,48M</td><td class="crd-td">Lahore (350k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 10.940 catalogued settlements and summed site peaks across Pakistan.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and chronological horizons were evaluated through cartographic cross-checking and archaeological fieldwork [@Petrie2025Hidden; @Simpson2020Frontier; @ImperialGazetteer1908]. Nineteenth-century Survey of India revenue and topographical maps recorded thousands of ancient tell mounds (*theh*, *tibba*, *damb*, *kot*, *deri*) prior to modern canal colony levelling, providing independent spatial coordinates for ancient settlement nodes [@Petrie2025Hidden]. Stratigraphic excavations and numismatic sequences at Taxila, Charsadda, Barikot and Harappa anchor the chronological envelopes and urban populations of major centres [@Kenoyer1998AncientCities; @Allchin1995Archaeology; @Shavarebi2025Numismatic; @Khan2025Management; @Iori2023Urban]. Macro-botanical remains from Barikot confirm multi-cropping agricultural regimes capable of sustaining dense urban populations [@Spengler2020Southern; @Antonetti2024Wine].

# Results

Table \ref{tab:gazetteer} presents the leading 40 historical settlements across Pakistan ordered by peak population descending, detailing coordinates, sub-regional allocation, occupation spans, peak population and 1849AD population.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1849AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">31,55 N, 74,34 E</td><td class="crd-td">100AD - 1849AD</td><td class="crd-td">350k</td><td class="crd-td">129,6k</td></tr>
<tr><td class="crd-td"><strong>Thatta</strong></td><td class="crd-td">Sindh and Indus Delta</td><td class="crd-td">24,75 N, 67,92 E</td><td class="crd-td">1400AD - 1849AD</td><td class="crd-td">137k</td><td class="crd-td">11,1k</td></tr>
<tr><td class="crd-td"><strong>Amritsar</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">31,63 N, 74,87 E</td><td class="crd-td">1600AD - 1849AD</td><td class="crd-td">128,7k</td><td class="crd-td">128,7k</td></tr>
<tr><td class="crd-td"><strong>Multan</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">30,2 N, 71,47 E</td><td class="crd-td">300BC - 1849AD</td><td class="crd-td">105k</td><td class="crd-td">58,8k</td></tr>
<tr><td class="crd-td"><strong>Peshawar</strong></td><td class="crd-td">Gandhara and Swat</td><td class="crd-td">34,02 N, 71,58 E</td><td class="crd-td">200BC - 1849AD</td><td class="crd-td">95k</td><td class="crd-td">59,8k</td></tr>
<tr><td class="crd-td"><strong>Sheikhupura</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">31,71 N, 73,99 E</td><td class="crd-td">500BC - 1849AD</td><td class="crd-td">83,7k</td><td class="crd-td">83,7k</td></tr>
<tr><td class="crd-td"><strong>Taxila</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">33,75 N, 72,79 E</td><td class="crd-td">1000BC - 500AD</td><td class="crd-td">72k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Jhang</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">33,67 N, 72,7 E</td><td class="crd-td">1300AD - 1849AD</td><td class="crd-td">71,1k</td><td class="crd-td">71,1k</td></tr>
<tr><td class="crd-td"><strong>Jhang</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">31,27 N, 72,32 E</td><td class="crd-td">1300AD - 1849AD</td><td class="crd-td">66k</td><td class="crd-td">66k</td></tr>
<tr><td class="crd-td"><strong>Gujrat</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">32,57 N, 74,08 E</td><td class="crd-td">1300AD - 1849AD</td><td class="crd-td">63,7k</td><td class="crd-td">63,7k</td></tr>
<tr><td class="crd-td"><strong>Kasur</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">31,12 N, 74,45 E</td><td class="crd-td">500BC - 1849AD</td><td class="crd-td">60,7k</td><td class="crd-td">60,7k</td></tr>
<tr><td class="crd-td"><strong>Mardan</strong></td><td class="crd-td">Gandhara and Swat</td><td class="crd-td">34,2 N, 72,05 E</td><td class="crd-td">1300AD - 1849AD</td><td class="crd-td">60,7k</td><td class="crd-td">60,7k</td></tr>
<tr><td class="crd-td"><strong>Mansura</strong></td><td class="crd-td">Sindh and Indus Delta</td><td class="crd-td">25,88 N, 68,78 E</td><td class="crd-td">600AD - 1000AD</td><td class="crd-td">58,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ghakhar Mandi</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">32,18 N, 74,9 E</td><td class="crd-td">1300AD - 1849AD</td><td class="crd-td">58,3k</td><td class="crd-td">58,3k</td></tr>
<tr><td class="crd-td"><strong>Mingora</strong></td><td class="crd-td">Gandhara and Swat</td><td class="crd-td">34,78 N, 72,36 E</td><td class="crd-td">1300AD - 1849AD</td><td class="crd-td">52,7k</td><td class="crd-td">52,7k</td></tr>
<tr><td class="crd-td"><strong>Qasimabad</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">30,5 N, 72,59 E</td><td class="crd-td">1300AD - 1849AD</td><td class="crd-td">51,2k</td><td class="crd-td">51,2k</td></tr>
<tr><td class="crd-td"><strong>Hyderabad</strong></td><td class="crd-td">Sindh and Indus Delta</td><td class="crd-td">25,4 N, 68,36 E</td><td class="crd-td">750AD - 1849AD</td><td class="crd-td">48k</td><td class="crd-td">40,8k</td></tr>
<tr><td class="crd-td"><strong>Shikarpur</strong></td><td class="crd-td">Sindh and Indus Delta</td><td class="crd-td">27,96 N, 68,64 E</td><td class="crd-td">1650AD - 1849AD</td><td class="crd-td">48k</td><td class="crd-td">39,4k</td></tr>
<tr><td class="crd-td"><strong>Jhelum</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">32,93 N, 73,73 E</td><td class="crd-td">1300AD - 1849AD</td><td class="crd-td">47k</td><td class="crd-td">47k</td></tr>
<tr><td class="crd-td"><strong>Firozpur !</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">30,93 N, 74,61 E</td><td class="crd-td">500BC - 1849AD</td><td class="crd-td">47k</td><td class="crd-td">47k</td></tr>
<tr><td class="crd-td"><strong>Chiniot</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">31,72 N, 72,98 E</td><td class="crd-td">1300AD - 1849AD</td><td class="crd-td">45,8k</td><td class="crd-td">45,8k</td></tr>
<tr><td class="crd-td"><strong>Kamoke</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">31,98 N, 74,22 E</td><td class="crd-td">1300AD - 1849AD</td><td class="crd-td">42,3k</td><td class="crd-td">42,3k</td></tr>
<tr><td class="crd-td"><strong>Mohenjo-daro</strong></td><td class="crd-td">Sindh and Indus Delta</td><td class="crd-td">27,33 N, 68,14 E</td><td class="crd-td">2500BC - 2000BC</td><td class="crd-td">42k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Sialkot</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">32,49 N, 74,53 E</td><td class="crd-td">300BC - 1849AD</td><td class="crd-td">42k</td><td class="crd-td">37,6k</td></tr>
<tr><td class="crd-td"><strong>Uch</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">29,24 N, 71,06 E</td><td class="crd-td">300BC - 1849AD</td><td class="crd-td">42k</td><td class="crd-td">8,4k</td></tr>
<tr><td class="crd-td"><strong>Hafizabad</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">32,07 N, 73,69 E</td><td class="crd-td">1300AD - 1849AD</td><td class="crd-td">40,8k</td><td class="crd-td">40,8k</td></tr>
<tr><td class="crd-td"><strong>Banbhore</strong></td><td class="crd-td">Sindh and Indus Delta</td><td class="crd-td">24,75 N, 67,52 E</td><td class="crd-td">100BC - 1200AD</td><td class="crd-td">40,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Jammu</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">32,73 N, 74,86 E</td><td class="crd-td">1000AD - 1849AD</td><td class="crd-td">38k</td><td class="crd-td">35,1k</td></tr>
<tr><td class="crd-td"><strong>Charsadda</strong></td><td class="crd-td">Gandhara and Swat</td><td class="crd-td">34,15 N, 71,73 E</td><td class="crd-td">1000BC - 600AD</td><td class="crd-td">38k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mirpur Khas</strong></td><td class="crd-td">Sindh and Indus Delta</td><td class="crd-td">25,53 N, 69,01 E</td><td class="crd-td">1849AD</td><td class="crd-td">37,2k</td><td class="crd-td">37,2k</td></tr>
<tr><td class="crd-td"><strong>Muzaffargarh</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">30,07 N, 71,19 E</td><td class="crd-td">500BC - 1849AD</td><td class="crd-td">35,4k</td><td class="crd-td">35,4k</td></tr>
<tr><td class="crd-td"><strong>Harappa</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">30,63 N, 72,86 E</td><td class="crd-td">3000BC - 1300BC</td><td class="crd-td">35k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Alor</strong></td><td class="crd-td">Sindh and Indus Delta</td><td class="crd-td">27,69 N, 68,93 E</td><td class="crd-td">400AD - 900AD</td><td class="crd-td">34,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Dhirkot</strong></td><td class="crd-td">Gilgit-Baltistan and Chitral</td><td class="crd-td">34,04 N, 73,58 E</td><td class="crd-td">1300AD - 1849AD</td><td class="crd-td">33,6k</td><td class="crd-td">33,6k</td></tr>
<tr><td class="crd-td"><strong>Dera Ismail Khan</strong></td><td class="crd-td">Gandhara and Swat</td><td class="crd-td">31,83 N, 70,9 E</td><td class="crd-td">1300AD - 1849AD</td><td class="crd-td">33k</td><td class="crd-td">33k</td></tr>
<tr><td class="crd-td"><strong>Kohat</strong></td><td class="crd-td">Gandhara and Swat</td><td class="crd-td">33,58 N, 71,45 E</td><td class="crd-td">1300AD - 1849AD</td><td class="crd-td">32,2k</td><td class="crd-td">32,2k</td></tr>
<tr><td class="crd-td"><strong>Khairpur</strong></td><td class="crd-td">Sindh and Indus Delta</td><td class="crd-td">27,53 N, 68,76 E</td><td class="crd-td">1300AD - 1849AD</td><td class="crd-td">32,1k</td><td class="crd-td">32,1k</td></tr>
<tr><td class="crd-td"><strong>Pattan Tehsil</strong></td><td class="crd-td">Gandhara and Swat</td><td class="crd-td">35,12 N, 73 E</td><td class="crd-td">1300AD - 1849AD</td><td class="crd-td">32,1k</td><td class="crd-td">32,1k</td></tr>
<tr><td class="crd-td"><strong>Rawalpindi</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">33,6 N, 73,07 E</td><td class="crd-td">1550AD - 1849AD</td><td class="crd-td">32k</td><td class="crd-td">32k</td></tr>
<tr><td class="crd-td"><strong>Khanpur</strong></td><td class="crd-td">West Punjab and Potwar Plateau</td><td class="crd-td">28,65 N, 70,66 E</td><td class="crd-td">1300AD - 1849AD</td><td class="crd-td">31,4k</td><td class="crd-td">31,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 40 historical settlements ordered by peak population across Pakistan (10000BC to 1849AD).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### West Punjab and Potwar Plateau

West Punjab catalogues 4.773 historical settlements, concentrating 6.702.766 in summed peak population across the rich alluvial doabs and Potwar upland [@Habib1982Atlas; @Moosvi1987Economy; @Simpson2020Frontier]. Lahore functioned as an enduring provincial and imperial metropolis, peaking at 350k inhabitants in 1650AD and sustaining 129,61k in 1849AD [@Hambly1982Towns; @Naqvi1968Urbanisation]. Amritsar developed into the preeminent commercial and banking centre of the Sikh Empire, reaching 128,66k inhabitants by 1849AD [@Bayly1983Rulers; @ImperialGazetteer1908]. Multan occupied a central junction along the lower Chenab, peaking at 105k in 1650AD and maintaining 58,84k in 1849AD as a major caravan emporium. Sheikhupura reached 83,68k in 1849AD, Taxila in the Potwar upland peaked at 72k in 100AD during the Kushan climax [@Allchin1995Archaeology; @Khan2025Management; @Malik2011Sang], and Jhang reached 71,11k by 1849AD. Other prominent centres include Gujrat (63,72k in 1849AD), Kasur (60,71k in 1849AD), Firozpur (46,98k in 1849AD), Sialkot (42k peak in 1700AD), Uch (42k peak in 1300AD), Jammu (38k peak in 1775AD), Harappa (35k in 2200BC) and Ganweriwala (26k in 2200BC) [@Kenoyer1998AncientCities; @Possehl1999IndusAge].

### Sindh and the Indus Delta

The southern alluvial division catalogues 1.778 settlements, with summed peak populations of 2.862.280 [@Habib1982Atlas; @Alam2025Origin]. Thatta anchored the deltaic trade network, accommodating 137,05k inhabitants at its 1600AD peak as an international textile and port centre before receding to 11,1k by 1849AD [@Hambly1982Towns; @ImperialGazetteer1908]. Mansura served as the primary Arab administrative and commercial capital of Sindh, concentrating 58,4k people at its 900AD peak [@Alam2025Origin]. Shikarpur and Hyderabad both attained 48k at their 1800AD peaks (maintaining 39,41k and 40,85k respectively in 1849AD), while Mohenjo-daro stood as the foremost Bronze Age metropolis of the lower Indus at 42k residents in 2200BC [@Kenoyer1998AncientCities; @Khan2021Hydro]. Other significant centres include Sehwan (10,75k in 1849AD), Sukkur, Rohri and Alor.

### Gandhara, Swat and Khyber-Pakhtunkhwa Passes

The northwestern frontier catalogues 1.668 settlements, with summed peak populations of 2.296.764 [@Erdosy1988Urbanisation; @Iori2023Urban; @Ali2002Exploratio]. Peshawar served as the primary gateway metropolis, peaking at 95k inhabitants in 1800AD and holding 59,85k in 1849AD after functioning as the Kushan winter capital Purushapura [@Bashir2026Pilgrimage; @Khan2013Reclamatio]. Mardan (60,68k in 1849AD) and Mingora (52,69k in 1849AD) anchored dense agrarian and market corridors, while Charsadda (ancient Pushkalavati) at the junction of the Swat and Kabul rivers reached 38k in 100BC and sustained 35k in 100AD [@Allchin1995Archaeology]. Barikot (ancient Bazira) in the Swat valley commanded riverine terraces and mountain routes, supporting stone-walled fortifications, Buddhist temples and dense domestic blocks [@Iori2023Urban; @Olivieri2021Monumental; @Shavarebi2025Numismatic]. Other key nodes include Hund (ancient Udabhandapura), Saidu Sharif, Bannu and Dera Ismail Khan.

### Balochistan, Kalat and the Makran Coast

The western highland division catalogues 1.974 settlements across 343.142 km² of hyper-arid mountain ranges, piedmont fans and desert coastline, with summed peak populations of 1.865.931 [@Khan2021Hydro; @Breseeg2001Baloch]. Kalat served as the fortified upland capital of the Brahui Khanate, reaching 24k inhabitants in 1800AD (16,94k in 1849AD), while Chaman (16,92k in 1849AD) and Quetta (11,7k in 1849AD) commanded the northern passes leading toward Kandahar [@Breseeg2001Baloch; @Jetly1999Ethnicity]. Mehrgarh on the Bolan River anchored the foundational Neolithic sequence of South Asia, reaching 4,2k people in 3000BC, while Leri Damb in the Kachi Plain sustained 3,28k inhabitants at its 500BC peak [@Possehl1999IndusAge; @Khan2021Hydro]. Coastal ports at Sutkagen Dor, Gwadar, Pasni and Sonmiani facilitated maritime navigation across the northern Arabian Sea.

### Gilgit-Baltistan, Chitral and Western Kashmir Valleys

The northern mountain division catalogues 747 settlements distributed along high-altitude glacial valleys, with summed peak populations of 753.071 [@Ali2002Exploratio; @Torwali2015Ignored]. Dhirkot reached 33,55k inhabitants in 1849AD, while Skardu in Baltistan (17,99k in 1849AD) and Muzaffarabad (17,67k in 1849AD) coordinated terraced irrigation agriculture and trans-montane caravan transit. Gilgit (1,76k in 1849AD) occupied a strategic river confluence along the upper Indus mediating traffic between Kashmir, Badakhshan and Xinjiang [@Sardar2012Rock], while Chitral in the Kunar drainage sustained a fortified princely seat [@Ali2002Exploratio].

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

The INDUS settlement gazetteer synthesises 10.940 historical localities across Pakistan from 10000BC to 1849AD ($\alpha = 0,73$, $R^2 = 0,92$), providing an empirical baseline for regional demographic modelling. By reconciling WGS84 coordinates, occupation spans and population series across five physiographic divisions, this catalogue isolates nucleated urban centres from rural agricultural populations, enabling dasymetric allocation of cultivators across the non-settled landscape and demonstrating long-term demographic continuity across twelve millennia of northwestern South Asian history.

# Appendix

The source ledger audited 11.740 candidate records across Pakistan, resulting in 10.940 accepted settlements and 800 exclusions. Table \ref{tab:excluded} documents the leading 25 excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Khairpur</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Faridkot</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Chitral</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kharan</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sopore</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ranikot Fort</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Ranikot Fort</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Dera Ghazi Khan</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Mandi Bahauddin</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Mandi Bahauddin</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Mandi Bahauddin</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Mandi Bahauddin</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Mandi Bahauddin</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Mandi Bahauddin</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Mandi Bahauddin</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Mandi Bahauddin</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Mandi Bahauddin</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Manhala</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Kotkapura</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Baramula</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bela</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Aristobathra/Orobatis</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Alexandreia</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Pakistan source ledger.</figcaption>
</figure>

# Sources
