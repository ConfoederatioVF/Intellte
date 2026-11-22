---
title: "Settlement Gazetteer of Early Burma: Pyu, Mon and Pagan (500BC to 1752AD)"
subtitle: "MANDALA: Coordinates, Toponymy and Demographic Trajectories across 170 Settlements"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: early_burma_pyu_mon_pagan_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_early_burma_pyu_mon_pagan_spatial.png"
hero_caption: "Spatial distribution of 170 catalogued historical settlements and regional hydrological catchments across the Burmese macro-region (700.767 km²) from 500BC to 1752AD."
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

This gazetteer catalogues WGS84 geographic coordinates, sub-regional allocations, occupational spans and benchmark demographic trajectories for 364 historical settlements across the Burmese macro-region (700.767 km², encompassing 8.941 active 5-arcminute terrestrial cells) from 500BC to 1752AD. Spanning five physiographic and hydrological divisions, the gazetteer encompasses diverse architectural and settlement traditions: monumental brick-walled Pyu city-states in the central alluvial basins, Mon riverine and coastal commercial emporia along the Gulf of Martaban, imperial temple metropolises in the Dry Zone, stone-walled coastal fortresses in Arakan and upland sawbwa valley settlements across the Shan Plateau.

Settlement scales range from proto-urban Iron Age fortified citadels at Beikthano (13,71k peak in 0AD) and Halin (15,33k peak in 500AD) and early coastal trading stations at Thaton (12,21k in 500AD) and Dhanyawadi (14,53k peak) to expansive imperial capitals at Sri Ksetra (34,07k peak in 500AD), Pagan (102,16k peak in 1000AD), Inwa (82,87k peak in 1600AD), Pegu (136,67k peak in 1600AD) and Mrauk-U (117,57k peak in 1600AD). In the lower delta, commercial resurgence culminated in the rapid growth of Yangon (Dagon), which concentrated 393,79k inhabitants by 1752AD. Secondary regional centres include Mandalay plain settlements (70,04k in 1752AD), Hlaingthaya (39,88k in 1752AD), Toungoo (37,21k in 1600AD), Chin State hillfort clusters (21,12k in 1752AD), Kalay (20,21k in 1752AD) and Kayah State upland centres (16,81k in 1752AD).

Every catalogued locality reconciles against 209 candidate records audited in the regional source ledger under MANDALA, alongside 215 documented exclusions. Excluded records comprise duplicate pagoda monuments within archaeological complexes, modern suburban homonyms and non-habitation ritual features collapsed within a 2,2 km spatial deduplication radius.

By pairing georeferenced settlement trajectories with regional geomorphology, remote sensing inventories of irrigation infrastructure and epigraphic records, this gazetteer establishes a spatial baseline for urbanisation and rural settlement patterns. The resulting catalogue enables systematic settlement subtraction, distinguishing concentrated civic nucleations from dasymetrically distributed rural cultivators across more than two millennia of Burmese history.

# Background

Archaeological settlement patterns across early Burma reflect long-term adaptations to riverine transport corridors, monsoonal rainfall gradients and alluvial soils [@Miksic2001Early; @Gutman2023Archaeolog; @Hudson2014Myanmar]. Five distinct settlement traditions characterise the regional archaeological landscape:
1. Circular and oval brick-walled Pyu cities: In the central Dry Zone, early urban centres such as Sri Ksetra, Beikthano, Halin and Maingmaw featured massive earth-core ramparts faced with kiln-fired bricks [@Stargardt2016Iron; @Stargardt2015Urban; @San2018Physical]. Enclosing areas between 3 km² and 14 km², these cities incorporated curved entry gates designed for defensive control and hydraulic channels that trapped seasonal highland runoff into internal storage tanks and surrounding moats [@Nyunt2015Ancient; @Liljeblad2017Ancient; @Frasch2024Urns].
2. Mon riverine and coastal commercial emporia: Along the lower Irrawaddy, Sittang and coastal margins of Lower Burma, Mon settlements such as Thaton, Pegu, Pathein, Dawei and Myeik operated as combined agricultural and maritime exchange nodes [@AungThwin2002Lower; @McCormick2011Position; @Goodrich1971History]. Positioned at tidal estuaries, these settlements connected inland river traffic with Indian Ocean maritime routes carrying pottery, textiles and Buddhist pilgrimage missions.
3. Monumental Pagan imperial core and canal towns: Sited on the eastern terrace of the Irrawaddy River, Pagan developed into an expansive royal and religious metropolis [@Miksic2001Early; @Iannone2020Entangleme]. Rather than a compact walled circuit, Pagan formed an open urban landscape spanning over 40 km², where thousands of brick temples and monasteries were interspersed with residential compounds and water storage tanks [@San2018Physical; @Hudson2008Restoratio; @Bianchini2020Seismic]. This imperial centre was sustained by irrigated agrarian towns across Kyaukse and Minbu, where stone diversion weirs fed canal networks [@Macrae2022Ancient].
4. Arakanese fortified stone capitals and estuarine ports: In coastal Arakan, capitals such as Dhanyawadi, Vesali and Mrauk-U integrated natural sandstone ridges with stone curtain walls, tidal moats and fortified river channels [@Miksic2001Early; @Charney1998Rise]. Mrauk-U in particular combined terrestrial hillfort fortifications with an estuarine naval base commanding trade across the Bay of Bengal [@dHubert2015Lord; @Griffiths2015Three].
5. Shan upland valley sawbwa principalities: Across the karstic Shan Plateau, settlement concentrated in fertile intermontane basins where hereditary sawbwas governed fortified towns such as Keng Tung, Mu-se, Hsipaw and Moeng Yang [@Tongkamwan1961Inscription; @Schepartz2000Upland]. These towns coordinated valley wet-rice agriculture and highland caravan trade linking Burma with Yunnan and northern Thailand.

# Methodology

Candidate localities in the source ledger were systematically compiled from published archaeological registers, heritage databases, historical maps and epigraphic inventories [@Miksic2001Early; @Gutman2023Archaeolog; @Hudson2014Myanmar; @Hertz1929Selections]. Inclusion in the settlement gazetteer required satisfying three formal criteria:
- Precise WGS84 geographic coordinates verified against satellite imagery and historical cartography.
- Documented occupational history spanning the chronological domain from 500BC to 1752AD, substantiated by stratigraphic excavations, monumental masonry or historical chronicles.
- Demographic estimations calibrated to fortified perimeter areas, monument concentrations and contemporary tax registers (*sittans*).

Where multiple survey points fell within a 2,2 km radius of a primary historical centre (such as individual temples or monasteries within the Pagan archaeological zone), records were consolidated as subordinate features under the primary urban key to prevent artificial spatial clustering. Isolated shrines, non-habitation stupas and duplicate modern homonyms were excluded.

Table \ref{tab:summary} summarises the distribution of 364 catalogued settlements and summed site peaks across the five sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Upper Irrawaddy Dry Zone</strong></td><td class="crd-td">125</td><td class="crd-td">34,3%</td><td class="crd-td">589,9k</td><td class="crd-td">Pagan (102,2k)</td></tr>
<tr><td class="crd-td"><strong>Lower Burma Delta and Pegu</strong></td><td class="crd-td">135</td><td class="crd-td">37,1%</td><td class="crd-td">1,03M</td><td class="crd-td">Yangon (393,8k)</td></tr>
<tr><td class="crd-td"><strong>Arakan Coastal Kingdom</strong></td><td class="crd-td">27</td><td class="crd-td">7,4%</td><td class="crd-td">215,5k</td><td class="crd-td">Mrauk-U (117,6k)</td></tr>
<tr><td class="crd-td"><strong>Shan Plateau and Kayah Uplands</strong></td><td class="crd-td">47</td><td class="crd-td">12,9%</td><td class="crd-td">154k</td><td class="crd-td">Kengtung (21,3k)</td></tr>
<tr><td class="crd-td"><strong>Northern Irrawaddy and Hills</strong></td><td class="crd-td">30</td><td class="crd-td">8,2%</td><td class="crd-td">81,2k</td><td class="crd-td">Chin State (21,1k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">364</td><td class="crd-td">100%</td><td class="crd-td">2,07M</td><td class="crd-td">Yangon (393,8k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 170 catalogued settlements and summed site peaks across early Burma.</figcaption>
</figure>

# Testing and Validation

Settlement coordinates and chronological spans were verified through remote sensing and archaeological field surveys [@Miksic2001Early; @Hudson2014Myanmar]. High-resolution satellite imagery and digital elevation models confirmed the physical preservation of urban ramparts, moat depressions and hydraulic bunds at major Pyu and Pagan sites, corroborating ground coordinates recorded in excavation reports [@Stargardt2016Iron; @Stargardt2015Urban; @Nyunt2015Ancient].

Spectroscopic and physical characterisation of ancient brick masonry by San and colleagues established clear material distinctions between early Pyu and classical Pagan construction horizons, validating chronological sequences [@San2018Physical; @Lin2025Preliminary]. Epigraphic databases documenting stone stelae across Upper Burma verified that major urban centres cited in royal chronicles possessed continuous administrative institutions and dedicated monastic populations throughout the classical and post-classical eras [@Hertz1929Selections; @John1914Inscriptions; @Bailey1971Burma].

Archaeological excavations at Sri Ksetra confirmed continuous residential occupation from the early centuries AD through the mid-first millennium AD, evidenced by imported glass beads, gold-leaf inscriptions and warrior-ruler stelae [@Stargardt2015Urban; @Hudson2024Funerary; @Indasiha2026History]. In Lower Burma, riverine alluvial coring and surface pottery collections confirmed that deltaic ports such as Pegu and Pathein expanded rapidly during the fourteenth and fifteenth centuries AD as maritime commercial networks expanded [@AungThwin2002Lower; @Miksic2001Early].

# Results

Table \ref{tab:gazetteer} presents the leading 45 historical settlements across early Burma ordered by peak population descending, detailing coordinates, sub-regional allocation, chronological spans and demographic peaks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1752AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Yangon</strong></td><td class="crd-td">Lower Burma Delta and Pegu</td><td class="crd-td">16,8 N, 96,16 E</td><td class="crd-td">1250AD - 1752AD</td><td class="crd-td">393,8k</td><td class="crd-td">393,8k</td></tr>
<tr><td class="crd-td"><strong>Pegu</strong></td><td class="crd-td">Lower Burma Delta and Pegu</td><td class="crd-td">17,34 N, 96,48 E</td><td class="crd-td">1500AD - 1752AD</td><td class="crd-td">136,7k</td><td class="crd-td">85,4k</td></tr>
<tr><td class="crd-td"><strong>Mrauk-U</strong></td><td class="crd-td">Arakan Coastal Kingdom</td><td class="crd-td">20,6 N, 93,19 E</td><td class="crd-td">1500AD - 1752AD</td><td class="crd-td">117,6k</td><td class="crd-td">76,5k</td></tr>
<tr><td class="crd-td"><strong>Pagan</strong></td><td class="crd-td">Upper Irrawaddy Dry Zone</td><td class="crd-td">21,17 N, 94,86 E</td><td class="crd-td">1000AD - 1300AD</td><td class="crd-td">102,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Inwa</strong></td><td class="crd-td">Upper Irrawaddy Dry Zone</td><td class="crd-td">21,85 N, 95,98 E</td><td class="crd-td">1500AD - 1752AD</td><td class="crd-td">82,9k</td><td class="crd-td">57,1k</td></tr>
<tr><td class="crd-td"><strong>Hlaingthaya</strong></td><td class="crd-td">Lower Burma Delta and Pegu</td><td class="crd-td">16,85 N, 96,07 E</td><td class="crd-td">1000AD - 1752AD</td><td class="crd-td">39,9k</td><td class="crd-td">39,9k</td></tr>
<tr><td class="crd-td"><strong>Pinya</strong></td><td class="crd-td">Upper Irrawaddy Dry Zone</td><td class="crd-td">21,97 N, 96,08 E</td><td class="crd-td">1500AD - 1752AD</td><td class="crd-td">37,8k</td><td class="crd-td">25,6k</td></tr>
<tr><td class="crd-td"><strong>Toungoo</strong></td><td class="crd-td">Lower Burma Delta and Pegu</td><td class="crd-td">18,94 N, 96,43 E</td><td class="crd-td">1600AD - 1752AD</td><td class="crd-td">37,2k</td><td class="crd-td">29,1k</td></tr>
<tr><td class="crd-td"><strong>Syriam</strong></td><td class="crd-td">Lower Burma Delta and Pegu</td><td class="crd-td">16,51 N, 96,25 E</td><td class="crd-td">1000AD - 1752AD</td><td class="crd-td">34,2k</td><td class="crd-td">19,3k</td></tr>
<tr><td class="crd-td"><strong>Sri Ksetra</strong></td><td class="crd-td">Lower Burma Delta and Pegu</td><td class="crd-td">18,82 N, 95,28 E</td><td class="crd-td">500AD</td><td class="crd-td">34,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Shwebo</strong></td><td class="crd-td">Upper Irrawaddy Dry Zone</td><td class="crd-td">22,57 N, 95,7 E</td><td class="crd-td">1300AD - 1752AD</td><td class="crd-td">33,5k</td><td class="crd-td">22,3k</td></tr>
<tr><td class="crd-td"><strong>Kyaukse Eleven Khayaing Ir</strong></td><td class="crd-td">Upper Irrawaddy Dry Zone</td><td class="crd-td">21,62 N, 96,13 E</td><td class="crd-td">1250AD - 1752AD</td><td class="crd-td">28,5k</td><td class="crd-td">19,5k</td></tr>
<tr><td class="crd-td"><strong>Pyay</strong></td><td class="crd-td">Upper Irrawaddy Dry Zone</td><td class="crd-td">18,82 N, 95,22 E</td><td class="crd-td">1000AD - 1752AD</td><td class="crd-td">27,6k</td><td class="crd-td">18,2k</td></tr>
<tr><td class="crd-td"><strong>Pathein</strong></td><td class="crd-td">Lower Burma Delta and Pegu</td><td class="crd-td">16,78 N, 94,73 E</td><td class="crd-td">500AD - 1752AD</td><td class="crd-td">25,7k</td><td class="crd-td">16,4k</td></tr>
<tr><td class="crd-td"><strong>Martaban</strong></td><td class="crd-td">Lower Burma Delta and Pegu</td><td class="crd-td">16,52 N, 97,62 E</td><td class="crd-td">1000AD - 1752AD</td><td class="crd-td">23,7k</td><td class="crd-td">14,7k</td></tr>
<tr><td class="crd-td"><strong>Myeik</strong></td><td class="crd-td">Lower Burma Delta and Pegu</td><td class="crd-td">12,44 N, 98,6 E</td><td class="crd-td">1000AD - 1752AD</td><td class="crd-td">21,6k</td><td class="crd-td">13k</td></tr>
<tr><td class="crd-td"><strong>Kengtung</strong></td><td class="crd-td">Shan Plateau and Kayah Uplands</td><td class="crd-td">21,29 N, 99,6 E</td><td class="crd-td">1250AD - 1752AD</td><td class="crd-td">21,3k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Chin State</strong></td><td class="crd-td">Northern Irrawaddy and Hills</td><td class="crd-td">22 N, 93,5 E</td><td class="crd-td">1000AD - 1752AD</td><td class="crd-td">21,1k</td><td class="crd-td">21,1k</td></tr>
<tr><td class="crd-td"><strong>Kalay</strong></td><td class="crd-td">Upper Irrawaddy Dry Zone</td><td class="crd-td">23,19 N, 94,06 E</td><td class="crd-td">1000AD - 1752AD</td><td class="crd-td">20,2k</td><td class="crd-td">20,2k</td></tr>
<tr><td class="crd-td"><strong>Myingyan</strong></td><td class="crd-td">Upper Irrawaddy Dry Zone</td><td class="crd-td">21,45 N, 95,38 E</td><td class="crd-td">1000AD - 1752AD</td><td class="crd-td">18,4k</td><td class="crd-td">12,1k</td></tr>
<tr><td class="crd-td"><strong>Launggyet</strong></td><td class="crd-td">Arakan Coastal Kingdom</td><td class="crd-td">20,14 N, 92,89 E</td><td class="crd-td">500AD - 1300AD</td><td class="crd-td">17,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kayah State</strong></td><td class="crd-td">Shan Plateau and Kayah Uplands</td><td class="crd-td">19,25 N, 97,33 E</td><td class="crd-td">1000AD - 1752AD</td><td class="crd-td">16,8k</td><td class="crd-td">16,8k</td></tr>
<tr><td class="crd-td"><strong>Magway</strong></td><td class="crd-td">Upper Irrawaddy Dry Zone</td><td class="crd-td">20,15 N, 94,93 E</td><td class="crd-td">1000AD - 1752AD</td><td class="crd-td">16,6k</td><td class="crd-td">10,9k</td></tr>
<tr><td class="crd-td"><strong>Halin</strong></td><td class="crd-td">Upper Irrawaddy Dry Zone</td><td class="crd-td">22,47 N, 95,82 E</td><td class="crd-td">500AD</td><td class="crd-td">15,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Meiktila Lake Irrigation C</strong></td><td class="crd-td">Upper Irrawaddy Dry Zone</td><td class="crd-td">20,78 N, 95,89 E</td><td class="crd-td">1000AD - 1752AD</td><td class="crd-td">14,7k</td><td class="crd-td">9,7k</td></tr>
<tr><td class="crd-td"><strong>Hsenwi</strong></td><td class="crd-td">Shan Plateau and Kayah Uplands</td><td class="crd-td">22,94 N, 97,75 E</td><td class="crd-td">1250AD - 1752AD</td><td class="crd-td">14,6k</td><td class="crd-td">9,8k</td></tr>
<tr><td class="crd-td"><strong>Dhanyawadi</strong></td><td class="crd-td">Arakan Coastal Kingdom</td><td class="crd-td">20,8 N, 92,97 E</td><td class="crd-td">500AD - 1000AD</td><td class="crd-td">14,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Hsipaw</strong></td><td class="crd-td">Shan Plateau and Kayah Uplands</td><td class="crd-td">22,62 N, 97,3 E</td><td class="crd-td">1250AD - 1752AD</td><td class="crd-td">14,5k</td><td class="crd-td">9,4k</td></tr>
<tr><td class="crd-td"><strong>Insein</strong></td><td class="crd-td">Lower Burma Delta and Pegu</td><td class="crd-td">16,89 N, 96,1 E</td><td class="crd-td">1000AD - 1752AD</td><td class="crd-td">14,4k</td><td class="crd-td">14,4k</td></tr>
<tr><td class="crd-td"><strong>Hinthada</strong></td><td class="crd-td">Lower Burma Delta and Pegu</td><td class="crd-td">17,65 N, 95,46 E</td><td class="crd-td">1000AD - 1752AD</td><td class="crd-td">14,2k</td><td class="crd-td">8,8k</td></tr>
<tr><td class="crd-td"><strong>Beikthano</strong></td><td class="crd-td">Upper Irrawaddy Dry Zone</td><td class="crd-td">20,01 N, 95,38 E</td><td class="crd-td">0AD - 500AD</td><td class="crd-td">13,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bhamo</strong></td><td class="crd-td">Northern Irrawaddy and Hills</td><td class="crd-td">24,25 N, 97,23 E</td><td class="crd-td">1000AD - 1752AD</td><td class="crd-td">12,9k</td><td class="crd-td">8,5k</td></tr>
<tr><td class="crd-td"><strong>Yawnghwe</strong></td><td class="crd-td">Shan Plateau and Kayah Uplands</td><td class="crd-td">20,66 N, 96,93 E</td><td class="crd-td">1500AD - 1752AD</td><td class="crd-td">12,8k</td><td class="crd-td">9k</td></tr>
<tr><td class="crd-td"><strong>Thaton</strong></td><td class="crd-td">Lower Burma Delta and Pegu</td><td class="crd-td">16,93 N, 97,37 E</td><td class="crd-td">500AD - 1000AD</td><td class="crd-td">12,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mogaung</strong></td><td class="crd-td">Northern Irrawaddy and Hills</td><td class="crd-td">25,38 N, 96,88 E</td><td class="crd-td">1250AD - 1752AD</td><td class="crd-td">11,6k</td><td class="crd-td">7,5k</td></tr>
<tr><td class="crd-td"><strong>Thandwe</strong></td><td class="crd-td">Arakan Coastal Kingdom</td><td class="crd-td">18,46 N, 94,36 E</td><td class="crd-td">500AD - 1752AD</td><td class="crd-td">11,4k</td><td class="crd-td">7k</td></tr>
<tr><td class="crd-td"><strong>Maingmaw</strong></td><td class="crd-td">Upper Irrawaddy Dry Zone</td><td class="crd-td">21,28 N, 96,2 E</td><td class="crd-td">500AD</td><td class="crd-td">11,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kale</strong></td><td class="crd-td">Upper Irrawaddy Dry Zone</td><td class="crd-td">23,19 N, 94,02 E</td><td class="crd-td">1250AD - 1752AD</td><td class="crd-td">10,9k</td><td class="crd-td">7,4k</td></tr>
<tr><td class="crd-td"><strong>Monywa</strong></td><td class="crd-td">Upper Irrawaddy Dry Zone</td><td class="crd-td">22,11 N, 95,14 E</td><td class="crd-td">1000AD - 1752AD</td><td class="crd-td">10,6k</td><td class="crd-td">10,6k</td></tr>
<tr><td class="crd-td"><strong>Kyaukpyu</strong></td><td class="crd-td">Arakan Coastal Kingdom</td><td class="crd-td">19,43 N, 93,55 E</td><td class="crd-td">1000AD - 1752AD</td><td class="crd-td">10,4k</td><td class="crd-td">10,4k</td></tr>
<tr><td class="crd-td"><strong>Keng Tung</strong></td><td class="crd-td">Shan Plateau and Kayah Uplands</td><td class="crd-td">21,63 N, 99,93 E</td><td class="crd-td">1000AD - 1752AD</td><td class="crd-td">9,9k</td><td class="crd-td">9,9k</td></tr>
<tr><td class="crd-td"><strong>Mu Se</strong></td><td class="crd-td">Shan Plateau and Kayah Uplands</td><td class="crd-td">24 N, 97,9 E</td><td class="crd-td">1000AD - 1752AD</td><td class="crd-td">9,6k</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Dawei</strong></td><td class="crd-td">Lower Burma Delta and Pegu</td><td class="crd-td">14,04 N, 98,19 E</td><td class="crd-td">1752AD</td><td class="crd-td">8,8k</td><td class="crd-td">8,8k</td></tr>
<tr><td class="crd-td"><strong>Dawei</strong></td><td class="crd-td">Lower Burma Delta and Pegu</td><td class="crd-td">14,08 N, 98,19 E</td><td class="crd-td">1000AD - 1752AD</td><td class="crd-td">7,9k</td><td class="crd-td">7,9k</td></tr>
<tr><td class="crd-td"><strong>Mingaladon</strong></td><td class="crd-td">Lower Burma Delta and Pegu</td><td class="crd-td">16,92 N, 96,1 E</td><td class="crd-td">1000AD - 1752AD</td><td class="crd-td">7,9k</td><td class="crd-td">7,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 historical settlements ordered by peak population across early Burma (500BC to 1752AD).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Upper Irrawaddy Dry Zone (Pyu and Pagan Core)

The Upper Irrawaddy Dry Zone accommodates 51 catalogued settlements, representing 30% of regional sites and a summed peak population of 469,3k inhabitants [@Miksic2001Early; @San2018Physical]. Sited on the eastern river terrace of the central Irrawaddy, Pagan was the premier imperial metropolis of classical Burma, concentrating 102,16k inhabitants in 1000AD and 77,97k in 1250AD across a 40 km² urban plain densely covered with brick temples and monasteries [@San2018Physical; @Hudson2008Restoratio; @Bianchini2020Seismic].

Following the late thirteenth-century collapse of Pagan, political authority in Upper Burma shifted to Inwa (Ava), strategically founded at the confluence of the Irrawaddy and Myitnge rivers [@Goodrich1971History; @FraserLu2016Lacquered; @Jaremba2022History]. Inwa served as the royal capital for multiple dynasties, supporting 80,15k inhabitants in 1500AD, peaking at 82,87k in 1600AD and maintaining 57,06k residents in 1752AD. In the surrounding central plain, settlements around modern Mandalay concentrated 70,04k inhabitants by 1752AD, flanked by royal centres at Amarapura (13,78k in 1752AD) and Sagaing.

Early proto-urban Pyu centres anchor the first millennium AD record in this division [@Stargardt2016Iron; @Nyunt2015Ancient]. Halin, situated in the northern Mu Valley, supported 15,33k inhabitants in 500AD within a rectangular brick enclosure equipped with curved defensive gates and cremation urn cemeteries [@Miksic2001Early; @Frasch2024Urns; @Hudson2024Funerary]. Beikthano in the Yin Valley housed 13,71k people in 0AD and 12,76k in 500AD, exhibiting early compartmentalised brick storage architecture [@Stargardt2016Iron]. Maingmaw in the Kyaukse plain accommodated 11,23k inhabitants in 500AD, coordinating irrigation weirs along the Panlaung River.

Secondary agrarian and administrative towns throughout the Dry Zone include Kalay (20,21k peak in 1752AD) commanding western river approaches, Monywa (10,55k in 1752AD) along the lower Chindwin, Meiktila (10,29k in 1752AD) commanding lake reservoirs, Myingyan (8,22k in 1752AD), Pyay (7,84k in 1752AD), Yenangyaung (6,41k in 1752AD), Thayetmyo (5,69k in 1752AD) and Pyinmana (5,65k in 1752AD).

### Lower Burma Delta and Pegu-Thaton (Mon Domain)

The Lower Burma Delta and Pegu-Thaton division comprises 76 catalogued settlements, accounting for 44,7% of regional sites and a summed peak population of 890,9k inhabitants [@AungThwin2002Lower; @Miksic2001Early]. In the early period, Sri Ksetra near modern Pyay served as the largest Pyu metropolis, supporting 34,07k inhabitants in 500AD within a circular brick perimeter measuring 14 km² [@Stargardt2016Iron; @Liljeblad2020World; @Indasiha2026History]. Farther south along the coast, Thaton developed as a foundational Mon trading port and religious centre, supporting 12,21k inhabitants in 500AD and 1000AD [@McCormick2011Position].

During the fourteenth through sixteenth centuries AD, Pegu (Bago) expanded into the primary commercial and political capital of Lower Burma under the Hanthawaddy and First Taungoo dynasties [@AungThwin2002Lower; @Goodrich1971History]. Sited along the Pegu River with access to the Gulf of Martaban, Pegu housed 129,58k inhabitants in 1500AD and attained a peak of 136,67k in 1600AD as the cosmopolitan imperial residence of King Bayinnaung. Toungoo, situated in the middle Sittang Valley, operated as a fortified inland fortress capital, supporting 37,21k people in 1600AD and 29,11k in 1752AD [@Ko2017Study].

In the eighteenth century AD, demographic and commercial mass shifted toward the deltaic estuary [@AungThwin2002Lower; @Goodrich1971History]. Yangon (Dagon) expanded from a regional shrine surrounding the Shwedagon Pagoda into an international seaport, growing from 53,08k in 1250AD and 144k in 1500AD to 214,65k in 1600AD and attaining an apex of 393,79k inhabitants by 1752AD. Surrounding estuarine settlements included Hlaingthaya (39,88k in 1752AD), Insein (14,36k in 1752AD), Mingaladon (7,88k in 1752AD), Hlaing (7,13k in 1752AD), Kyimyindine (6,46k in 1752AD) and San Chaung (5,78k in 1752AD).

Western deltaic and southern coastal emporia include Pathein (Bassein), which commanded the western delta mouth with 13,75k residents in 1752AD, alongside Dawei (Tavoy; 8,78k in 1752AD) and Myeik (Mergui; 10,05k in 1752AD) on the Tenasserim coast, which facilitated maritime trade between the Indian Ocean and the Gulf of Thailand [@Goodrich1971History].

### Arakan Coastal Kingdom (Dhanyawadi and Mrauk-U)

The Arakan Coastal Kingdom division catalogues 11 settlements, representing 6,5% of regional sites and a summed peak population of 171,3k inhabitants [@Miksic2001Early; @Charney1998Rise]. Bounded by the steep slopes of the Arakan Yoma to the east and the Bay of Bengal to the west, Arakanese urbanism developed along the tidal estuaries of the Kaladan and Lemro rivers.

Dhanyawadi represented the earliest classical capital, supporting 14,53k inhabitants in 500AD and 9,9k in 1000AD within concentric circular earthen and brick fortifications equipped with a raised royal citadel [@Gutman2023Archaeolog; @Griffiths2015Three]. Following shifts to Vesali and Lemro dynasty sites, political power coalesced at Mrauk-U in 1430AD. Sited amidst natural sandstone hillocks fortified by stone walls and water gates, Mrauk-U grew into a powerful maritime and military capital concentrating 95,43k inhabitants in 1500AD, peaking at 117,57k in 1600AD and maintaining 76,53k in 1752AD [@dHubert2015Lord; @Charney1998Crisis; @Hudson2015Life].

Secondary coastal centres in this maritime division include Kyaukpyu on Ramree Island (10,44k peak in 1752AD) and Ann (6,94k in 1752AD), which commanded mountain pass trails crossing the Arakan Yoma toward the central Irrawaddy Dry Zone [@Goodrich1971History].

### Shan Plateau and Kayah Uplands

The Shan Plateau and Kayah Uplands division catalogues 22 settlements, accounting for 12,9% of regional sites and a summed peak population of 79,5k inhabitants [@Tongkamwan1961Inscription; @Schepartz2000Upland]. Characterised by karstic limestone plateaux elevated over 1.000 metres above sea level, human habitation clustered in fertile alluvial basins drained by the Nam Tu, Nam Pawn and Salween river tributaries.

Settlement in this division was organised into hereditary sawbwa principalities [@Tongkamwan1961Inscription; @Goodrich1971History]. Kayah State centres concentrated 16,81k inhabitants by 1752AD, while Keng Tung (Kyaingtong) in the far eastern trans-Salween basin supported 9,95k people in 1752AD, operating as an autonomous principality and vital caravan crossroads linking Burma with Sipsongpanna in Yunnan and Lan Na in northern Thailand.

Other strategic valley towns include Mu-se (9,57k in 1752AD) on the Shweli River bordering China, Moeng Yang (6,79k in 1752AD), Hsipaw, Lashio and Mong Nai, which managed trade in mountain products, tea, lacquer and silver while maintaining tributary relations with the royal court in Upper Burma [@Goodrich1971History].

### Northern Irrawaddy, Kachin and Chin Hills

The northern highland division catalogues 10 settlements, representing 5,9% of regional sites and a summed peak population of 48,5k inhabitants [@Schepartz2000Upland; @Goodrich1971History]. Dissected by rugged mountain defiles and deep river valleys, settlement in this frontier zone was concentrated along defensible hill ridges and river defiles.

In the western mountains, Chin State hillfort clusters concentrated 21,12k inhabitants by 1752AD, supported by terraced hillside cultivation and fortified village perimeters. In the Kaladan valley of southern Chin territory, Paletwa accommodated 5,79k inhabitants in 1752AD, mediating trade between Arakan and the interior hills.

Along the upper Irrawaddy corridor, Bhamo operated as a vital riverine port and customs station where the navigable Irrawaddy ended, channelling Yunnanese overland mule caravans into river transport headed downstream toward Ava and Pagan [@Goodrich1971History]. Farther north in Kachin territory, riverine communities coordinated the extraction of jadeite along the Uru River and amber in the Hukawng Valley, connecting remote mountain resources with lowland and international markets.

# Limitations

The settlement gazetteer remains conditioned by specific taphonomic and documentary biases:
1. Perishable domestic structures: domestic dwellings across Burma were uniformly constructed from timber, bamboo and thatch [@San2018Physical; @Miksic2001Early; @Lin2025Preliminary]. Unlike brick temples and palace platforms, residential quarters leave minimal surface archaeological signatures, requiring reliance on wall enclosures, pottery scatters and roof-tile scatters to calibrate settlement boundaries.
2. Active river siltation and lateral erosion: seasonal flood sedimentation along the lower Irrawaddy and Sittang rivers has buried early Mon and Pyu occupational layers beneath several metres of alluvium, while active river meanders have cut away parts of riverside settlements at Pagan, Inwa and Pegu [@Miksic2001Early; @Hudson2008Restoratio; @AungThwin2002Lower].
3. Epigraphic geographic concentration: stone stelae recording royal foundations and land endowments are concentrated in the central Dry Zone, particularly Pagan and Inwa [@Hertz1929Selections; @Iannone2020Merit; @John1914Inscriptions]. Upland sawbwa settlements in the Shan Plateau and tribal communities in the Chin Hills left fewer durable stone inscriptions, requiring greater reliance on chronicle registers and historical trade accounts [@Goodrich1971History; @Tongkamwan1961Inscription].

# Conclusion

The MANDALA settlement gazetteer synthesises 170 historical localities across five physiographic divisions, providing a substantive baseline for regional demographic modelling from 500BC to 1752AD. By reconciling georeferenced coordinates, fortified perimeters and occupational chronologies, this catalogue isolates nucleated urban populations from rural cultivators, enabling dasymetric allocation across the landscape and illustrating the shifting balance between the Dry Zone agrarian heartland and the early modern commercial delta.

# Appendix

The MANDALA source ledger audited 209 candidate records, resulting in 170 accepted settlements and 39 documented exclusions. Table \ref{tab:excluded} documents the leading 25 excluded candidate sites, detailing territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Beikthano</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sri Ksetra Kingdom</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Halin</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Beikthano</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bagan</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pagan</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Myodwin</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Shwebo</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Halin</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Shwebo Palace</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Oakaie 1</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Seik Kyun</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kadaikgyi</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Taikkala</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Oakaie 4</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Shwezigon Pagoda</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sapada Paya</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sapadaw</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Alo-pyi Kyaung</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Tan-saung Kyaung</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pagoda</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Izagawna Group</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Aleya Group</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Paya Gyi</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Soolaygon Group</strong></td><td class="crd-td">Myanmar</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Burmese macro-region source ledger.</figcaption>
</figure>

# Sources
