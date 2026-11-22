---
title: "Settlement Gazetteer of the Nanda Empire"
subtitle: "INDUS: Coordinates, Urban Toponymy and Rank-Size Hierarchy in the Ganga Basin (345BC to 321BC)"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: nanda_empire_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_nanda_empire_spatial.png"
hero_caption: "Spatial distribution of 1.086 catalogued Early Historic settlements and regional river basins across the Nanda Empire (2,54M km²) between 345BC and 321BC."
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

This gazetteer catalogues WGS84 coordinates, provincial allocations, occupation spans and benchmark demographic estimates for 1254 Early Historic settlements across the Nanda Empire (2,54M km², encompassing 2.543.071 km² and 32.480 active 5-arcminute terrestrial cells) from 345BC to 321BC. Spanning four geopolitical provinces, the gazetteer encompasses diverse architectural, civic and economic traditions: monumental timber and baked-brick fortifications in the Ganga and Son floodplains, cyclopean stone citadel ramparts in the Magadhan hills, walled craft and mercantile nodes along the Yamuna and Upper Doab trade corridors, rock-cut water reservoirs and black-soil agrarian markets in the Malwa plateau and massive square fortresses defending the coastal delta and river valleys of Kalinga and the northern Deccan.

Settlement magnitudes range from agrarian market hamlets and garrison stations of several hundred residents to the primate imperial capital at Pataliputra, which concentrated 250k inhabitants within its monumental timber palisade at the confluence of the Ganga, Son and Gandak rivers. Major provincial capitals include Delhi (90k peak), Varanasi (75k peak), Lahore (60k peak), Kaushambi (39,7k peak), Shravasti (34,8k peak), Mahasthangarh (34,8k peak), Rajgir (34,8k peak), Ujjain (32,5k peak), Vaishali (29,8k peak), Vidisha (29,8k peak), Sisupalgarh (29,8k peak), Mathura (25k peak), Tamralipti (24,8k peak) and Chandraketugarh (24,8k peak). Every catalogued locality reconciles against 1.821 source-ledger candidate records compiled under INDUS, accounting for 800 documented exclusions (principally duplicate survey aliases within a 2,2 km spatial radius and non-habitation feature records).

By anchoring georeferenced settlement trajectories to regional geomorphology, remote sensing mound inventories, numismatic hoard distributions and published archaeological excavation reports, this gazetteer establishes an archaeological baseline for fourth-century BC urbanism in northern South Asia. Dasymetric settlement subtraction isolates nucleated urban centres from rural cultivators, ensuring that historical demographic syntheses reflect genuine archaeological tell distributions rather than arbitrary continental projections.

# Background

Archaeological settlement systems of the Nanda Empire reflect sophisticated adaptations to regional fluvial hydrology, mineral geology and commercial transport geography [@Singh2020Hydrology; @Jha2025Geoarchaeo; @Reden2019Handbook]. Five distinct settlement traditions characterise the regional archaeological record of this imperial epoch:
1. Alluvial timber and brick river metropolises: In the active floodplains of the middle and lower Ganga basin, primary cities were constructed at strategic river confluences [@A1967Indian; @Bengal2020Proceeding]. Pataliputra occupied the junction of the Ganga and Son rivers, featuring an expansive timber palisade, deep defensive moats and brick-lined sewage culverts designed to withstand monsoon inundations [@Singh2020Hydrology; @Bengal2020Proceeding].
2. Cyclopean stone hill fortresses: In the rocky ridges of southern Bihar, settlements such as Rajgir (ancient Rajagriha) were fortified with monumental cyclopean rubble masonry running for over 40 km along mountain crests, protecting inner urban valleys and Buddhist monastic retreats [@Singh2021Giriyaka; @Milligan2016Rags].
3. Doab craft and mercantile towns: Along the Ganga, Yamuna and tributary rivers of the Upper Doab, cities such as Kaushambi, Shravasti, Varanasi, Mathura, Ahichchhatra and Kampilya combined massive mud-brick ramparts with fired-brick revetments, supporting dense quarters of specialised artisans, ironsmiths, glassmakers and textile weavers [@A1967Indian; @Dwivedi2021Tools; @Kaur2025Exploring].
4. Malwa plateau commercial nodes: In central India, settlements such as Ujjain on the Shipra River and Vidisha on the Betwa River commanded the intersection of the northern *Uttarapatha* and southern *Dakshinapatha* trade routes, organising exchange in semiprecious stones, cotton textiles and iron implements [@Dwivedi2019Early; @Kumar2025Numismatic].
5. Coastal and riverine delta emporia: In the eastern delta and along the Kalinga littoral, fortified ports such as Tamralipti, Chandraketugarh and Sisupalgarh linked interior riverine networks with maritime navigation in the Bay of Bengal, facilitating commerce in marine salt, conch shells and fine ceramics [@Barua2018Cultural; @Bengal2020Proceeding].

# Methodology

Candidate sites in the source ledger were audited against published excavation monographs, state archaeological survey registers, remote sensing tell databases and numismatic hoard records [@A1967Indian; @Jha2025Geoarchaeo; @Kumar2025Numismatic; @Teng2014Chapter]. Inclusion requires:
- Precise WGS84 geographic coordinates validated against regional river networks and modern Survey of India cartography.
- Documented cultural horizons, ceramic associations (principally Northern Black Polished Ware and associated Grey Wares) or numismatic records dating between the fifth and third centuries BC.
- Demographic estimations calibrated to settlement mound area, rampart perimeters and room-density multipliers.

Where multiple archaeological survey points fall within 2,2 km of a primary nucleated settlement, secondary records are consolidated as duplicate aliases, preserving spatial integrity and eliminating artificial clustering. Non-habitation features such as isolated coin hoards without habitation strata, rock inscriptions, surface lithic scatters and ephemeral camp sites are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 1254 catalogued settlements and summed site peaks across the four geopolitical provinces.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Geopolitical Province</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Magadha, Anga and Lower Ganga</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Kosala, Kashi and Upper Doab</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Avanti, Malwa and Western Lands</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Kalinga and Northern Deccan</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Imperial Total</strong></td><td class="crd-td">1254</td><td class="crd-td">100%</td><td class="crd-td">2,14M</td><td class="crd-td">Patna (250k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Provincial distribution of 1.086 catalogued settlements and summed site peaks across the Nanda Empire.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and chronological horizons were evaluated through archaeological excavations, remote sensing and numismatic hoard mapping [@A1967Indian; @Kumar2025Numismatic; @Jha2025Geoarchaeo]. Archaeological soundings at Pataliputra, Rajgir, Kaushambi, Vaishali, Varanasi, Ujjain and Sisupalgarh demonstrate continuous NBPW occupation horizons accompanied by silver punch-marked coins, iron weaponry and sophisticated domestic drainage structures dating to the fourth century BC [@A1967Indian; @Bhandare2017Numismatic; @Singh2021Giriyaka].

Remote sensing of ancient river courses confirms that major urban centres occupied elevated natural levees flanking active or palaeo-channels of the Ganga, Yamuna and Son rivers [@Singh2020Hydrology; @Jha2025Geoarchaeo]. This hydrological positioning provided natural defensive moats, year-round drinking water and low-cost boat transport for agricultural surplus and building materials [@Singh2020Hydrology]. Numismatic evidence from across northern and central India validates the economic integration of catalogued towns, as identical punch-marked coin symbols circulate uniformly from Taxila and Lahore in the northwest to Mahasthangarh and Tamralipti in the east and Ujjain and Amaravati in the south [@Kumar2025Numismatic; @Dwivedi2021Tools; @Barua2018Cultural].

Figure \ref{fig:trajectory} displays the aggregate demographic trajectory and the rank-size distribution of all 1.086 catalogued settlements.

<figure class="crd-figure-block" id="fig:trajectory">
<img class="crd-figure-img" src="/artefacts/project_indus/1.0-nanda-empire-settlements/fig2_nanda_empire_demography.png" alt="fig:trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory of the Nanda Empire and rank-size distribution of 1.086 catalogued settlements from 345BC to 321BC.</figcaption>
</figure>

# Results

Table \ref{tab:gazetteer} presents the leading 45 urban settlements across the Nanda Empire ordered by peak population descending, detailing coordinates, provincial allocation, occupation spans and demographic peaks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Geopolitical Province</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">321BC Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Patna</strong></td><td class="crd-td">Magadha and Anga</td><td class="crd-td">25,61 N, 85,14 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">250k</td><td class="crd-td">250k</td></tr>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Kosala and Kashi and Vatsa</td><td class="crd-td">28,61 N, 77,24 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">90k</td><td class="crd-td">90k</td></tr>
<tr><td class="crd-td"><strong>Varanasi</strong></td><td class="crd-td">Kosala and Kashi and Vatsa</td><td class="crd-td">25,32 N, 83,01 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">75k</td><td class="crd-td">75k</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">Kosala and Kashi and Vatsa</td><td class="crd-td">31,55 N, 74,34 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">60k</td><td class="crd-td">60k</td></tr>
<tr><td class="crd-td"><strong>Kaushambi</strong></td><td class="crd-td">Kosala and Kashi and Vatsa</td><td class="crd-td">25,34 N, 81,39 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">39,7k</td><td class="crd-td">38,3k</td></tr>
<tr><td class="crd-td"><strong>Rajgir</strong></td><td class="crd-td">Magadha and Anga</td><td class="crd-td">25,03 N, 85,42 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">34,8k</td><td class="crd-td">33,5k</td></tr>
<tr><td class="crd-td"><strong>Shravasti</strong></td><td class="crd-td">Kosala and Kashi and Vatsa</td><td class="crd-td">27,51 N, 82,05 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">34,8k</td><td class="crd-td">33,5k</td></tr>
<tr><td class="crd-td"><strong>Mahasthangarh</strong></td><td class="crd-td">Magadha and Anga</td><td class="crd-td">24,96 N, 89,34 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">34,8k</td><td class="crd-td">33,5k</td></tr>
<tr><td class="crd-td"><strong>Ujjain</strong></td><td class="crd-td">Avanti and Malwa and Chedi</td><td class="crd-td">23,18 N, 75,78 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">32,5k</td><td class="crd-td">32,5k</td></tr>
<tr><td class="crd-td"><strong>Vaishali</strong></td><td class="crd-td">Magadha and Anga</td><td class="crd-td">25,99 N, 85,13 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">29,8k</td><td class="crd-td">28,8k</td></tr>
<tr><td class="crd-td"><strong>Vidisha</strong></td><td class="crd-td">Avanti and Malwa and Chedi</td><td class="crd-td">23,52 N, 77,81 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">29,8k</td><td class="crd-td">28,8k</td></tr>
<tr><td class="crd-td"><strong>Sisupalgarh</strong></td><td class="crd-td">Kalinga and Northern Deccan Frontier</td><td class="crd-td">20,23 N, 85,85 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">29,8k</td><td class="crd-td">28,8k</td></tr>
<tr><td class="crd-td"><strong>Mathura</strong></td><td class="crd-td">Kosala and Kashi and Vatsa</td><td class="crd-td">27,49 N, 77,67 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">25k</td><td class="crd-td">25k</td></tr>
<tr><td class="crd-td"><strong>Tamralipti</strong></td><td class="crd-td">Magadha and Anga</td><td class="crd-td">22,29 N, 87,92 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">24,8k</td><td class="crd-td">24k</td></tr>
<tr><td class="crd-td"><strong>Chandraketugarh</strong></td><td class="crd-td">Magadha and Anga</td><td class="crd-td">22,7 N, 88,68 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">24,8k</td><td class="crd-td">24k</td></tr>
<tr><td class="crd-td"><strong>Bharuch</strong></td><td class="crd-td">Avanti and Malwa and Chedi</td><td class="crd-td">21,7 N, 73 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">20k</td><td class="crd-td">20k</td></tr>
<tr><td class="crd-td"><strong>Ahichhatra</strong></td><td class="crd-td">Kosala and Kashi and Vatsa</td><td class="crd-td">28,37 N, 79,13 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">19,9k</td><td class="crd-td">19,2k</td></tr>
<tr><td class="crd-td"><strong>Wari-Bateshwar</strong></td><td class="crd-td">Magadha and Anga</td><td class="crd-td">24,09 N, 90,82 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">19,9k</td><td class="crd-td">19,2k</td></tr>
<tr><td class="crd-td"><strong>Ayodhya</strong></td><td class="crd-td">Kosala and Kashi and Vatsa</td><td class="crd-td">26,79 N, 82,19 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">17,5k</td><td class="crd-td">17,5k</td></tr>
<tr><td class="crd-td"><strong>Bhagalpur</strong></td><td class="crd-td">Magadha and Anga</td><td class="crd-td">25,25 N, 86,95 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">15k</td><td class="crd-td">15k</td></tr>
<tr><td class="crd-td"><strong>Hastinapura</strong></td><td class="crd-td">Kosala and Kashi and Vatsa</td><td class="crd-td">29,16 N, 78 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">14,9k</td><td class="crd-td">14,4k</td></tr>
<tr><td class="crd-td"><strong>Tilaurakot</strong></td><td class="crd-td">Kosala and Kashi and Vatsa</td><td class="crd-td">27,57 N, 83,05 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">14,9k</td><td class="crd-td">14,4k</td></tr>
<tr><td class="crd-td"><strong>Sopara</strong></td><td class="crd-td">Kalinga and Northern Deccan Frontier</td><td class="crd-td">19,41 N, 72,81 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">14,9k</td><td class="crd-td">14,4k</td></tr>
<tr><td class="crd-td"><strong>Atranjikhera</strong></td><td class="crd-td">Kosala and Kashi and Vatsa</td><td class="crd-td">27,58 N, 78,66 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">9,9k</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Kampilya</strong></td><td class="crd-td">Kosala and Kashi and Vatsa</td><td class="crd-td">27,62 N, 79,28 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">9,9k</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Kushinagar</strong></td><td class="crd-td">Kosala and Kashi and Vatsa</td><td class="crd-td">26,74 N, 83,88 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">9,9k</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Nagari</strong></td><td class="crd-td">Avanti and Malwa and Chedi</td><td class="crd-td">25,02 N, 74,72 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">9,4k</td><td class="crd-td">9,1k</td></tr>
<tr><td class="crd-td"><strong>Lumbini</strong></td><td class="crd-td">Kosala and Kashi and Vatsa</td><td class="crd-td">27,47 N, 83,28 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">7,9k</td><td class="crd-td">7,7k</td></tr>
<tr><td class="crd-td"><strong>Chahgarh</strong></td><td class="crd-td">Kalinga and Northern Deccan Frontier</td><td class="crd-td">21,19 N, 77,47 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">7,1k</td><td class="crd-td">6,8k</td></tr>
<tr><td class="crd-td"><strong>Taular (Walni khurd)</strong></td><td class="crd-td">Kalinga and Northern Deccan Frontier</td><td class="crd-td">21,22 N, 77,42 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">5,7k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Adyal</strong></td><td class="crd-td">Kalinga and Northern Deccan Frontier</td><td class="crd-td">20,82 N, 79,53 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">5,7k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Bhivsena</strong></td><td class="crd-td">Kalinga and Northern Deccan Frontier</td><td class="crd-td">20,78 N, 79,55 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">5,7k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Pauni (ghat)</strong></td><td class="crd-td">Kalinga and Northern Deccan Frontier</td><td class="crd-td">20,8 N, 79,64 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">5,7k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Kotilingala</strong></td><td class="crd-td">Kalinga and Northern Deccan Frontier</td><td class="crd-td">18,86 N, 79,2 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">5,7k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Paoli</strong></td><td class="crd-td">Kosala and Kashi and Vatsa</td><td class="crd-td">29,08 N, 76,44 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">5,7k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Khairaiti Khera</strong></td><td class="crd-td">Kosala and Kashi and Vatsa</td><td class="crd-td">29,5 N, 75,36 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">5,7k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Sabatpur</strong></td><td class="crd-td">Avanti and Malwa and Chedi</td><td class="crd-td">22,1 N, 77,56 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">5,7k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Nagda</strong></td><td class="crd-td">Avanti and Malwa and Chedi</td><td class="crd-td">23,46 N, 75,41 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">5,7k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Sikulaiapadia</strong></td><td class="crd-td">Kalinga and Northern Deccan Frontier</td><td class="crd-td">20,35 N, 85,59 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">5,7k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Bannewala Ther</strong></td><td class="crd-td">Avanti and Malwa and Chedi</td><td class="crd-td">29,3 N, 72,3 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">5,7k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Refectory</strong></td><td class="crd-td">Kalinga and Northern Deccan Frontier</td><td class="crd-td">17,83 N, 83,41 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">5,7k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Asad Burj</strong></td><td class="crd-td">Kosala and Kashi and Vatsa</td><td class="crd-td">28,65 N, 77,24 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">5,7k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Corner</strong></td><td class="crd-td">Avanti and Malwa and Chedi</td><td class="crd-td">22,52 N, 72,25 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">5,7k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Narasimha Temple</strong></td><td class="crd-td">Kalinga and Northern Deccan Frontier</td><td class="crd-td">15,34 N, 76,47 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">5,7k</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>Monastery IV</strong></td><td class="crd-td">Kosala and Kashi and Vatsa</td><td class="crd-td">25,38 N, 83,02 E</td><td class="crd-td">345BC - 321BC</td><td class="crd-td">5,7k</td><td class="crd-td">5,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 settlements ordered by peak population across the Nanda Empire (345BC to 321BC).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Magadha, Anga and Lower Gangetic Heartland

The imperial heartland catalogues 123 settlements concentrated along the lower Ganga, Son, Gandak and Kiul river corridors [@Singh2021Giriyaka; @Barua2018Cultural]. Pataliputra stood at the pinnacle of the imperial urban hierarchy, concentrating 250k inhabitants within its monumental timber fortifications and commanding the central river confluence [@A1967Indian; @Bengal2020Proceeding]. Rajgir (34,8k peak) served as the ancient dynastic stronghold, protected by cyclopean stone walls enclosing the Giriyaka and Vaibhava hills [@Singh2021Giriyaka]. Vaishali (29,8k peak) was the historic capital of the Licchavi republic, featuring large brick-revetted ramparts and extensive monastic foundations [@Niraula2026Unmasking; @Albery2017Buddhism]. Mahasthangarh (Pundranagara, 34,8k peak) anchored Magadhan power in the northern Bengal plains along the Karatoya River [@Barua2018Cultural]. Along the deltaic maritime margin, Tamralipti (24,8k peak) and Chandraketugarh (24,8k peak) operated as active sea and river ports facilitating commerce throughout the eastern ocean [@Barua2018Cultural; @Neill2020Empires].

### Kosala, Kashi, Vatsa and Upper Doab Provinces

The northern and western Gangetic province catalogues 365 settlements across the fertile Ganga-Yamuna doab and Punjab river basins [@A1967Indian; @Embleton2023Names]. Delhi (Indraprastha) formed the largest northwestern metropolis, supporting 50,4k residents in 345BC and expanding to 90k in 321BC at the strategic crossing between the Aravalli hills and the Yamuna River [@Dwivedi2019Early]. Varanasi (Kashi) accommodated 42k people in 345BC and reached 75k in 321BC, functioning as an economic, religious and textile manufacturing centre on the Ganga [@A1967Indian; @Dwivedi2021Tools]. Lahore anchored trade across the Upper Indus tributaries, rising from 33,6k in 345BC to 60k in 321BC. Kaushambi (39,7k peak) guarded the southern Yamuna bend, protected by massive mud ramparts with fired-brick facing [@A1967Indian]. Shravasti (34,8k peak) commanded the Rapti River trade in Kosala, while Mathura (25k peak) served as the southern Yamuna commercial and religious hub [@Dwivedi2019Early; @Brekke2005Religious].

### Avanti, Malwa, Chedi and Western Tributaries

The southwestern province catalogues 359 settlements across the fertile black-soil terrain of the Malwa plateau, the Narmada valley and Rajasthan [@Dwivedi2019Early; @Kumar2025Numismatic]. Ujjain was the premier metropolis of western India, expanding from 18,2k in 345BC to 32,5k in 321BC on the banks of the Shipra River, commanding trade routes extending toward the Gulf of Khambhat [@Dwivedi2019Early]. Vidisha (29,8k peak) occupied the confluence of the Betwa and Bes rivers, serving as a renowned ironworking, stone-carving and merchant banking centre [@Dwivedi2021Tools; @Kumar2025Numismatic]. Eran, Tripuri, Maheshwar and Nagda formed secondary fortified towns coordinating agricultural extraction and copper-iron smelting along the Narmada and Chambal drainage systems [@A1967Indian; @Dwivedi2019Early].

### Kalinga and Northern Deccan Frontier

The southern province catalogues 239 settlements across coastal Odisha, the Mahanadi delta and the northern Deccan plateau along the Godavari River [@Bengal2020Proceeding; @SD2016Promoting]. Sisupalgarh was the preeminent fortified metropolis of the region, accommodating 28,8k inhabitants in 345BC and reaching 29,8k in 335BC within its massive square rampart system equipped with eight stone gateways and a deep moat [@A1967Indian]. Jaugada operated as an inland fortified post guarding trade routes into the Eastern Ghats. Along the Deccan plateau, towns such as Potana and Paithan (Pratishthana) mediated exchange between the Gangetic empire and the developing megalithic and early historic societies of peninsular India [@Bhandare2017Numismatic; @Dwivedi2021Political].

# Limitations

Archaeological settlement analysis across the Nanda Empire is subject to distinct taphonomic and preservation factors:
1. Active alluviation and urban superposition: Continuous habitation over twenty-five centuries in major Gangetic cities (Patna, Varanasi, Delhi, Ujjain, Mathura) restricts modern excavation to small salvage soundings, while active river silt deposition has buried rural farming hamlets beneath several metres of alluvium [@Jha2025Geoarchaeo].
2. Organic architectural decay: While fortifications and public civic works employed kiln-fired brick and stone, domestic structures were predominantly erected from timber, bamboo and unbaked mud brick, which degrade rapidly under humid monsoon conditions [@A1967Indian; @Bengal2020Proceeding].
3. Regional survey disparities: Archaeological survey intensity has historically concentrated along the central Ganga valley and around prominent Buddhist pilgrimage sites, resulting in higher site discovery rates in Bihar and Uttar Pradesh compared to the forested uplands of Madhya Pradesh, Odisha and the Deccan [@Dwivedi2019Early; @Milligan2016Rags].
4. Anepigraphic coinage and dating uncertainties: Punch-marked silver coins lack royal names or regnal years, circulating for extended periods as bullion currency and complicating precise fine-grained chronological attribution of urban destruction and construction horizons [@Kumar2025Numismatic; @Bhandare2017Numismatic].

# Conclusion

The Nanda Empire settlement gazetteer synthesises 1.086 catalogued Early Historic localities across four geopolitical provinces, providing an empirical foundation for regional demographic analysis between 345BC and 321BC. By reconciling georeferenced coordinates, rampart areas and occupation chronologies, this catalogue isolates nucleated urban populations from rural cultivators, enabling dasymetric allocation of agriculturalists across the non-settled landscape and demonstrating the exceptional urban concentration of fourth-century BC South Asia.

# Appendix

The INDUS source ledger audited 1.821 candidate records, resulting in 1.086 accepted settlements and 735 exclusions. Table \ref{tab:excluded} documents the leading 25 excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Pauni (ghat)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Adam</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kolari</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Wirli Buzurg</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Pauni (Fortified Settlemen</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Mandhal (Temples near mode</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pauni (Satimata Tekadi)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Yenora</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bramhi Reethi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pauni (Kalkamata Temple)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pauni (Kalkamata Temple)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Yeni</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pauni (Near Vaijeshwar Tem</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pauni (Satimata Tekadi)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Palibothra</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Lonara</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Achalpur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kakada (Salabatpur)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Garhi (Ramgarh)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Savangi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Achalpur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pauni (Mangalwari peth nea</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Rājagṛha</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Borda</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Mandhal</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Nanda Empire source ledger.</figcaption>
</figure>

# Sources
