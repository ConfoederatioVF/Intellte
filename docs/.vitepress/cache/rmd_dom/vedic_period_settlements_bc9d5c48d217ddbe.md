---
title: "Settlement Gazetteer of the Vedic Period and Iron Age Gangetic Basin"
subtitle: "INDUS: Coordinates, Toponymy and Demographic Trajectories (1500BC to 500BC)"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: vedic_period_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_vedic_period_spatial.png"
hero_caption: "Spatial distribution of 1.048 catalogued settlements and macro-regional catchments across Northern and Western South Asia (2,01M km²) from 1500BC to 500BC."
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

This gazetteer catalogues WGS84 geographic coordinates, sub-regional attributions, archaeological horizons and benchmark demographic trajectories for 1174 catalogued settlements across Northern and Western South Asia (2,01M km², encompassing 2.013.529 km² and 26.445 active terrestrial grid cells) during the Vedic period from 1500BC to 500BC. Spanning four physiographic macro-regions, the gazetteer captures the spatial restructuring of South Asian settlement systems following the post-urban Indus decentralisation. Architectural and settlement forms documented include early agropastoral tells and rock-cut mortuary complexes in Gandhara and the Swat valley, fortified mud-brick tells associated with Painted Grey Ware (PGW) ceramics across Kurukshetra and the Ganga-Yamuna Doab, riverine wet-paddy trading hubs in Kosala and early Magadha, and enduring Chalcolithic-Iron Age tell settlements across the Malwa plateau and the Aravalli piedmont. Individual settlement scales range from small agrarian farmsteads and specialized pottery hamlets (300 to 800 peak inhabitants) to large fortified regional capitals, including Delhi (Indraprastha) (159.231 peak), Varanasi (Kashi) (150.000 peak), Patna (Pataliputra) (137.019 peak), Lahore (120.000 peak), Multan (65.154 peak), Mathura (46.538 peak), Taxila (Takshashila) (46.538 peak), Ujjain (42.500 peak), Bharuch (Bhrigukachha) (40.000 peak) and Kaushambi (37.231 peak). Every settlement is reconciled against 1.835 source-ledger candidates under PRETA alongside 800 documented exclusions (predominantly duplicate-alias records collapsed within a 2,2 km spatial deduplication radius). Georeferenced settlement trajectories provide the empirical foundation for settlement subtraction, ensuring that background rural population surfaces reflect authentic archaeological densities across Iron Age South Asia.

# Settlement Archaeology and Iron Age Nucleation

Archaeological settlement patterns in Northern and Western South Asia between 1500BC and 500BC document the transition from dispersed agropastoral hamlets to nucleated, multi-tiered urban systems [@Kumar2023Second; @Thapar1981Indian]. Four primary settlement traditions characterise the regional archaeological record:

1. Sapta Sindhu and Gandharan Tells: In the northwest, communities occupied stratified tell mounds situated along the floodplains of the Indus and Punjab tributaries, alongside stone-built settlements and cist-grave cemeteries in Swat, Dir and the Vale of Peshawar [@Olivieri2022Stoneyards; @Jassar2009Hellas]. Sites such as Taxila (Bhir Mound), Charsadda (Bala Hisar) and Harappa maintained strategic positions controlling trade routes connecting the Gangetic basin with the Iranian plateau.
2. Kuru-Panchala Fortified Tells: Across Haryana and the Upper Ganga-Yamuna Doab, settlements associated with the Painted Grey Ware horizon occupied elevated river levees (*kheras*) rising three to twelve metres above the active floodplain [@Latief2026Tibba; @Neogi2019Geoarchaeo]. Sites including Hastinapur, Ahichchhatra, Atranjikhera, Mathura and Kampilya featured massive mud and burnt-brick ramparts, ditch circumvallations and structured domestic quarters.
3. Middle Gangetic Wet-Paddy Riverine Centres: In the fertile, humid alluvium of Kosala, Videha and early Magadha, settlements developed at the confluences of perennial rivers and oxbow lakes [@Kumar2023Second; @Sengupta2023Fish]. Centres such as Varanasi, Pataliputra, Rajagriha, Vaishali and Champa combined intensive wet-paddy rice agriculture with riverine boat transport, emerging as the largest demographic agglomerations in first-millennium BC South Asia.
4. Malwa and Western Chalcolithic Tells: Across central India and Rajasthan, tell settlements maintained continuous occupation from the Chalcolithic Ahar and Malwa cultures into the Iron Age [@Schug2009Ancient; @Mishra2026Historical]. Sites such as Ujjain, Nagda, Eran and Vidisha exploited fertile black cotton soils and mineral deposits, serving as commercial links between the Gangetic heartland and the Arabian Sea coast.

# Methodology and Source Ledger Reconciliation

Candidate settlements in the source ledger were systematically compiled from published archaeological survey monographs, excavation reports of the Archaeological Survey of India (ASI), provincial heritage registers and spatial databases [@Thapar1981Indian; @JANGIS2025Journal]. Inclusion criteria required:

- Verified WGS84 geographic coordinates aligned with documented archaeological tell mounds.
- Stratigraphic evidence of occupation dating between 1500BC and 500BC (OCP, Gandhara Grave, BRW, PGW or early NBPW horizons).
- Empirical settlement size estimations calibrated to site mound area and functional administrative rank.

Where multiple survey entries fell within a 2,2 km radius of a verified nucleated centre, secondary records were consolidated as duplicate aliases, preserving geographic integrity and preventing artificial spatial over-concentration. Non-habitation features such as isolated megalithic stone circles or findspots lacking domestic refuse were excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 1174 catalogued settlements and summed site peaks across the four macro-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Sapta Sindhu and Punjab</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Kurukshetra and Upper Doab</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Middle Ganga and Magadha</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Malwa and Western Periphery</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">1174</td><td class="crd-td">100%</td><td class="crd-td">1,59M</td><td class="crd-td">Delhi (50,4k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 1.048 catalogued settlements and summed site peaks across Northern and Western South Asia.</figcaption>
</figure>

# Leading Settlements of the Vedic Period

Table \ref{tab:gazetteer} presents the leading 45 settlements across Northern and Western South Asia ordered by peak population descending, detailing geographic coordinates, sub-regional attribution, occupation span and benchmark demographic series.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">500BC Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Kurukshetra</td><td class="crd-td">28,61 N, 77,24 E</td><td class="crd-td">1100BC - 500BC</td><td class="crd-td">50,4k</td><td class="crd-td">50,4k</td></tr>
<tr><td class="crd-td"><strong>Taxila</strong></td><td class="crd-td">Sapta Sindhu and Gandhara</td><td class="crd-td">33,75 N, 72,79 E</td><td class="crd-td">900BC - 500BC</td><td class="crd-td">46,5k</td><td class="crd-td">32,7k</td></tr>
<tr><td class="crd-td"><strong>Varanasi</strong></td><td class="crd-td">Kurukshetra</td><td class="crd-td">25,32 N, 83,01 E</td><td class="crd-td">900BC - 500BC</td><td class="crd-td">42k</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td"><strong>Patna</strong></td><td class="crd-td">Middle Ganga and Kosala and Videha</td><td class="crd-td">25,61 N, 85,14 E</td><td class="crd-td">500BC</td><td class="crd-td">42k</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td"><strong>Kaushambi</strong></td><td class="crd-td">Kurukshetra</td><td class="crd-td">25,34 N, 81,39 E</td><td class="crd-td">900BC - 500BC</td><td class="crd-td">37,2k</td><td class="crd-td">26,2k</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">Sapta Sindhu and Gandhara</td><td class="crd-td">31,55 N, 74,34 E</td><td class="crd-td">500BC</td><td class="crd-td">33,6k</td><td class="crd-td">33,6k</td></tr>
<tr><td class="crd-td"><strong>Charsadda</strong></td><td class="crd-td">Sapta Sindhu and Gandhara</td><td class="crd-td">34,15 N, 71,73 E</td><td class="crd-td">1100BC - 500BC</td><td class="crd-td">28,5k</td><td class="crd-td">19,6k</td></tr>
<tr><td class="crd-td"><strong>Vidisha</strong></td><td class="crd-td">Malwa and Matsya and Rajasthan</td><td class="crd-td">23,52 N, 77,81 E</td><td class="crd-td">500BC</td><td class="crd-td">24,8k</td><td class="crd-td">24,8k</td></tr>
<tr><td class="crd-td"><strong>Harappa</strong></td><td class="crd-td">Sapta Sindhu and Gandhara</td><td class="crd-td">30,63 N, 72,86 E</td><td class="crd-td">1500BC - 1300BC</td><td class="crd-td">22,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Rajgir</strong></td><td class="crd-td">Middle Ganga and Kosala and Videha</td><td class="crd-td">25,03 N, 85,42 E</td><td class="crd-td">700BC - 500BC</td><td class="crd-td">22,9k</td><td class="crd-td">22,9k</td></tr>
<tr><td class="crd-td"><strong>Shravasti</strong></td><td class="crd-td">Kurukshetra</td><td class="crd-td">27,51 N, 82,05 E</td><td class="crd-td">700BC - 500BC</td><td class="crd-td">22,9k</td><td class="crd-td">22,9k</td></tr>
<tr><td class="crd-td"><strong>Vaishali</strong></td><td class="crd-td">Middle Ganga and Kosala and Videha</td><td class="crd-td">25,99 N, 85,13 E</td><td class="crd-td">700BC - 500BC</td><td class="crd-td">19,6k</td><td class="crd-td">19,6k</td></tr>
<tr><td class="crd-td"><strong>Multan</strong></td><td class="crd-td">Sapta Sindhu and Gandhara</td><td class="crd-td">30,2 N, 71,47 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">19,6k</td><td class="crd-td">19,6k</td></tr>
<tr><td class="crd-td"><strong>Ahichhatra</strong></td><td class="crd-td">Kurukshetra</td><td class="crd-td">28,37 N, 79,13 E</td><td class="crd-td">1100BC - 500BC</td><td class="crd-td">19k</td><td class="crd-td">13,1k</td></tr>
<tr><td class="crd-td"><strong>Dholavira</strong></td><td class="crd-td">Malwa and Matsya and Rajasthan</td><td class="crd-td">23,89 N, 70,21 E</td><td class="crd-td">1500BC</td><td class="crd-td">18,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ujjain</strong></td><td class="crd-td">Malwa and Matsya and Rajasthan</td><td class="crd-td">23,18 N, 75,78 E</td><td class="crd-td">700BC - 500BC</td><td class="crd-td">18,2k</td><td class="crd-td">18,2k</td></tr>
<tr><td class="crd-td"><strong>Hastinapura</strong></td><td class="crd-td">Kurukshetra</td><td class="crd-td">29,16 N, 78 E</td><td class="crd-td">1100BC - 500BC</td><td class="crd-td">14,3k</td><td class="crd-td">9,8k</td></tr>
<tr><td class="crd-td"><strong>Mathura</strong></td><td class="crd-td">Kurukshetra</td><td class="crd-td">27,49 N, 77,67 E</td><td class="crd-td">900BC - 500BC</td><td class="crd-td">14k</td><td class="crd-td">14k</td></tr>
<tr><td class="crd-td"><strong>Tilaurakot</strong></td><td class="crd-td">Kurukshetra</td><td class="crd-td">27,57 N, 83,05 E</td><td class="crd-td">700BC - 500BC</td><td class="crd-td">13,3k</td><td class="crd-td">9,8k</td></tr>
<tr><td class="crd-td"><strong>Bharuch</strong></td><td class="crd-td">Malwa and Matsya and Rajasthan</td><td class="crd-td">21,7 N, 73 E</td><td class="crd-td">500BC</td><td class="crd-td">11,2k</td><td class="crd-td">11,2k</td></tr>
<tr><td class="crd-td"><strong>Ayodhya</strong></td><td class="crd-td">Kurukshetra</td><td class="crd-td">26,79 N, 82,19 E</td><td class="crd-td">700BC - 500BC</td><td class="crd-td">9,8k</td><td class="crd-td">9,8k</td></tr>
<tr><td class="crd-td"><strong>Sialkot</strong></td><td class="crd-td">Sapta Sindhu and Gandhara</td><td class="crd-td">32,49 N, 74,53 E</td><td class="crd-td">500BC</td><td class="crd-td">9,8k</td><td class="crd-td">9,8k</td></tr>
<tr><td class="crd-td"><strong>Atranjikhera</strong></td><td class="crd-td">Kurukshetra</td><td class="crd-td">27,58 N, 78,66 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">9,3k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Kampilya</strong></td><td class="crd-td">Kurukshetra</td><td class="crd-td">27,62 N, 79,28 E</td><td class="crd-td">900BC - 500BC</td><td class="crd-td">9,3k</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Nagari</strong></td><td class="crd-td">Malwa and Matsya and Rajasthan</td><td class="crd-td">25,02 N, 74,72 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">8,8k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Bhagalpur</strong></td><td class="crd-td">Middle Ganga and Kosala and Videha</td><td class="crd-td">25,25 N, 86,95 E</td><td class="crd-td">700BC - 500BC</td><td class="crd-td">8,4k</td><td class="crd-td">8,4k</td></tr>
<tr><td class="crd-td"><strong>Kushinagar</strong></td><td class="crd-td">Kurukshetra</td><td class="crd-td">26,74 N, 83,88 E</td><td class="crd-td">500BC</td><td class="crd-td">8,3k</td><td class="crd-td">8,3k</td></tr>
<tr><td class="crd-td"><strong>Chahgarh</strong></td><td class="crd-td">Malwa and Matsya and Rajasthan</td><td class="crd-td">21,19 N, 77,47 E</td><td class="crd-td">900BC - 500BC</td><td class="crd-td">6,6k</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>Lumbini</strong></td><td class="crd-td">Kurukshetra</td><td class="crd-td">27,47 N, 83,28 E</td><td class="crd-td">500BC</td><td class="crd-td">6,6k</td><td class="crd-td">6,6k</td></tr>
<tr><td class="crd-td"><strong>Taular (Walni khurd)</strong></td><td class="crd-td">Malwa and Matsya and Rajasthan</td><td class="crd-td">21,22 N, 77,42 E</td><td class="crd-td">900BC - 500BC</td><td class="crd-td">5,4k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Paoli</strong></td><td class="crd-td">Kurukshetra</td><td class="crd-td">29,08 N, 76,44 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">5,4k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Khairaiti Khera</strong></td><td class="crd-td">Kurukshetra</td><td class="crd-td">29,5 N, 75,36 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">5,4k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Sabatpur</strong></td><td class="crd-td">Malwa and Matsya and Rajasthan</td><td class="crd-td">22,1 N, 77,56 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">5,4k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Nagda</strong></td><td class="crd-td">Malwa and Matsya and Rajasthan</td><td class="crd-td">23,46 N, 75,41 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">5,4k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Khuna Pate</strong></td><td class="crd-td">Sapta Sindhu and Gandhara</td><td class="crd-td">34,82 N, 73 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">5,4k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Bannewala Ther</strong></td><td class="crd-td">Sapta Sindhu and Gandhara</td><td class="crd-td">29,3 N, 72,3 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">5,4k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Jamuwali andapos;Aandapos</strong></td><td class="crd-td">Sapta Sindhu and Gandhara</td><td class="crd-td">28,93 N, 71,17 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">5,4k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Rappwala Ther</strong></td><td class="crd-td">Sapta Sindhu and Gandhara</td><td class="crd-td">28,65 N, 71,17 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">5,4k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Asad Burj</strong></td><td class="crd-td">Kurukshetra</td><td class="crd-td">28,65 N, 77,24 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">5,4k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Corner</strong></td><td class="crd-td">Malwa and Matsya and Rajasthan</td><td class="crd-td">22,52 N, 72,25 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">5,4k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Shrine of Vishnu</strong></td><td class="crd-td">Sapta Sindhu and Gandhara</td><td class="crd-td">33,92 N, 75,01 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">5,4k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Brahma Temple</strong></td><td class="crd-td">Malwa and Matsya and Rajasthan</td><td class="crd-td">24,85 N, 79,93 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">5,4k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Monastery IV</strong></td><td class="crd-td">Kurukshetra</td><td class="crd-td">25,38 N, 83,02 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">5,4k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Chandarvaha</strong></td><td class="crd-td">Malwa and Matsya and Rajasthan</td><td class="crd-td">22,27 N, 71,86 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">5,4k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Mandor</strong></td><td class="crd-td">Malwa and Matsya and Rajasthan</td><td class="crd-td">26,35 N, 73,04 E</td><td class="crd-td">1500BC - 500BC</td><td class="crd-td">5,4k</td><td class="crd-td">3,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 settlements ordered by peak population across Northern and Western South Asia (1500BC to 500BC).</figcaption>
</figure>

# Sub-Regional Settlement Catalogues

## Sapta Sindhu, Gandhara and Indus-Punjab Plains

The Sapta Sindhu division catalogues 328 settlements spanning the Punjab plains and the northwestern highlands [@Olivieri2022Stoneyards; @Jassar2009Hellas]. Leading centres include Lahore (120k peak), Multan (65,2k peak), Taxila (46,5k peak), Sialkot (35k peak), Charsadda (28,5k peak), Harappa (22,9k peak) and Peshawar (21,5k peak). In Gandhara, Taxila and Charsadda anchored strategic river crossings connecting the Indus valley with Central Asia, developing stone architecture, terraced residential quarters and metallurgical workshops. Across the central Punjab doabs, settlements occupied elevated river terraces, integrating wheat-barley agriculture with sheep, goat and zebu pastoralism.

## Kurukshetra, Upper Ganga-Yamuna Doab and Panchala

The Kuru-Panchala heartland catalogues 285 settlements, representing the most densely nucleated Iron Age landscape in the subcontinent [@Thapar1981Indian; @Latief2026Tibba]. Leading centres include Delhi (Indraprastha) (159k peak), Varanasi (150k peak), Mathura (46,5k peak), Kaushambi (37,2k peak), Ayodhya (31k peak), Ahichchhatra (21,5k peak), Hastinapur (19,4k peak) and Kampilya (18,6k peak). These settlements were characterised by deep stratigraphic accumulations of Painted Grey Ware, iron-smelting furnaces, glass bangle workshops and extensive defensive ramparts constructed of compacted earth and mud brick.

## Middle Ganga, Kosala, Videha and Early Magadha

The Middle Ganga basin catalogues 89 settlements, functioning as the primary agrarian growth zone of first-millennium BC South Asia [@Kumar2023Second; @Sengupta2023Fish]. Anchored by Patna (Pataliputra) (137k peak), Rajagriha (26,7k peak), Vaishali (24,1k peak), Shravasti (22,3k peak) and Champa (19,8k peak), settlements in this division controlled vast wet-paddy rice hinterlands and riverine freight networks along the Ganga and Ghaghara rivers. The construction of cyclopean stone walls at Rajagriha and monumental ramparts at Champa marked the emergence of early state administration and standing military forces.

## Malwa, Matsya, Rajasthan and Western Chalcolithic Periphery

The western division catalogues 346 settlements distributed across the Aravalli range, the Malwa tableland and the estuaries of Gujarat [@Schug2009Ancient; @Mishra2026Historical]. Prominent settlements include Ujjain (42,5k peak), Bharuch (40k peak), Vidisha (24,8k peak), Nagda (16,2k peak), Eran (14,5k peak) and Broach (12,8k peak). Positioned along the fertile black cotton soils of Malwa, these centres developed thriving metallurgical, bead-making and textile industries, channelling raw materials and semi-precious stones from central and western India to the Gangetic urban markets.

# Source Ledger Audit and Excluded Candidates

The source ledger evaluates 1.835 candidate localities across Northern and Western South Asia. Of these, 1.048 entries were verified and included as primary catalogued settlements, while 787 entries were excluded. The vast majority of exclusions (782 records, 99,4% of all exclusions) represent duplicate-alias consolidations: secondary survey coordinates located within 2,2 km of a primary nucleated tell that were merged into the canonical record to prevent artificial spatial clustering. The remaining five exclusions represent isolated megalithic burial cairns or mineral extraction pits lacking domestic habitation deposits.

Table \ref{tab:excluded} documents the leading 25 excluded candidates alongside their canonical primary settlement, administrative jurisdiction and exclusion justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Yeni</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Harappa</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Achalpur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kakada (Salabatpur)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Garhi (Ramgarh)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Achalpur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Borgaon Peth</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Achalpur (Fortified Settle</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Khanzamanagar</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Saoli (Dalure/Dhatura)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Wadner Bhujang (Nagobha)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Nayegaon</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kasbegawhan</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Dholavira</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Taular</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bordi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Tuljapur Garh (Bellora)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Khanzamanagar</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Achalpur (Tapo Bharati Mat</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pardi (Village)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Achalpur (Dula Rahman)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Shahapur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pardi (Doli)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Achalpur (Yashapura)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Wadner Bhujang</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Vedic Period source ledger.</figcaption>
</figure>

# Limitations and Preservation Biases

Archaeological visibility and settlement recovery across Northern and Western South Asia remain subject to pronounced taphonomic constraints [@Jha2025Geoarchaeo; @Neogi2019Geoarchaeo]:

1. Alluvial Burial in the Gangetic Floodplain: Annual monsoon inundations have deposited several metres of silt across second and first millennium BC horizons, obscuring low-relief rural hamlets and small farmsteads while leaving only prominent tell mounds exposed.
2. Urban Superimposition: Many of the largest Vedic centres, notably Delhi, Varanasi, Patna, Mathura and Lahore, have been continuously occupied for over two millennia, resulting in modern civic infrastructure overlying ancient archaeological strata and restricting excavations to salvage trenches.
3. Brick Robbery and Industrial Disturbance: Nineteenth-century railway expansion resulted in systematic destruction of protohistoric tell mounds across Punjab and Uttar Pradesh, where ancient mud-brick and burnt-brick structures were quarried for track ballast.

Despite these preservation factors, the spatial synthesis of 1.048 georeferenced settlements establishes an empirical baseline for understanding Iron Age nucleation, demographic growth and territorial organisation in ancient South Asia.

# Sources
