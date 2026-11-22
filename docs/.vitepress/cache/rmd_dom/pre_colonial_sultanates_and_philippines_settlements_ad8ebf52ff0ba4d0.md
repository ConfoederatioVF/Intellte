---
title: "Settlement Gazetteer of the Pre-Colonial Sultanates and Pre-Spanish Philippines"
subtitle: "MANDALA: Coordinates, Toponymy and Benchmark Populations (1200AD to 1786AD)"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: pre_colonial_sultanates_and_philippines_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_pre_colonial_sultanates_and_philippines_spatial.png"
hero_caption: "Spatial distribution of 2.422 catalogued pre-colonial settlements and maritime catchments across the Malay Archipelago and Philippines (2,07M km²) from 1200AD to 1786AD."
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

This gazetteer documents WGS84 geographic coordinates, sub-regional allocations, occupational chronological horizons and benchmark demographic trajectories for 3085 catalogued pre-colonial and early modern settlements across the Malay Archipelago and the Philippine islands (2,07M km², comprising 2.073.299 km² and 26.777 active 5-arcminute terrestrial cells) from 1200AD to 1786AD. Spanning eight insular and peninsular sub-regions, the gazetteer encompasses diverse architectural, ecological and commercial traditions: royal agrarian capitals in the volcanic interior basins of Java, fortified estuarine entrepôts along the Strait of Malacca, pepper ports in northern and western Sumatra, spice-trading island fortresses in Maluku, Bugis-Makassar maritime citadels in southern Sulawesi and coastal riverine barangays throughout pre-Spanish Luzon and the Visayas.

Settlement demographic scales range from inland sawah administrative capitals at Setiabudi (313,99k peak in 1786AD), Kotagede and Plered (116,22k in 1700AD), Kartasura (101,83k in 1700AD) and Trowulan (97,75k in 1400AD) to major coastal trading metropolises at Tondo (149,02k in 1500AD), Jayakarta (135,32k in 1700AD), Surabaya (128,22k in 1600AD), Melaka (98,63k in 1600AD), Banten Lama (90,1k in 1700AD), Makassar (89,09k in 1600AD), Banda Aceh (81,7k in 1600AD) and Temasek (77,17k in 1565AD). Secondary and regional trading nodes include Banjarmasin (36,04k in 1786AD), Ternate (24,2k in 1786AD), Jolo (24,01k in 1786AD), Cirebon (39,47k peak), Tuban (29,86k peak), Gresik (33,4k peak), Pasuruan (34,47k peak) and Butuan (18,52k peak). Every catalogued locality reconciles against 2.549 source-ledger candidates under MANDALA alongside 350 documented exclusions (principally duplicate survey aliases within a 2,2 km spatial radius and non-habitation anchorages).

By pairing georeferenced coordinates with historical cartography, indigenous court chronicles, VOC registers and early Spanish colonial tributes, this gazetteer establishes an empirical baseline for urbanization across maritime Southeast Asia. Settlement subtraction isolates nucleated urban centres from rural populations, ensuring that historical demographic reconstructions reflect genuine settlement distributions rather than arbitrary continental projections.

# Background

Archaeological and historical settlement configurations across island Southeast Asia reflect adaptations to marine archipelagos, river mouths and volcanic soil belts [@Widodo2018Morphology; @Jones2018Some]. Four primary settlement traditions characterise the regional record:
1. Coastal and estuarine entrepôts (bandar): Positioned at the mouths of navigable rivers or along strategic maritime choke points, settlements such as Melaka, Banten Lama, Jayakarta, Banda Aceh and Makassar served as polyethnic trade emporia [@Widodo2018Morphology; @Borschberg2016Melaka]. Housing was constructed from timber and bamboo on stilts over tidal mudflats, flanked by fortified brick or earthen royal citadels and masonry warehouses [@Kemper2019Umbilical; @Raben2008Cities].
2. Interior sawah agrarian metropolises (kraton): Concentrated in the volcanic intermontane basins of Central and East Java, settlements such as Trowulan, Kotagede, Plered and Kartasura functioned as ceremonial and administrative capitals [@Wood2008Volcano; @SAKAI1993Hizen]. These inland centres drew upon extensive canal irrigation networks and dense rural peasant villages, accommodating royal courts, artisans, religious foundations and standing garrisons [@Knaap2006About].
3. Island spice strongholds: In Maluku and the Sulu Archipelago, insular fortified centres such as Ternate, Tidore and Jolo commanded regional monopolies over cloves, nutmeg, pearls and marine tortoiseshell [@Charney1996World; @Rusdiyanto2018Kesultanan]. Built on steep volcanic island margins, these polities deployed fleets of outrigger war galleys (kora-kora, karakoa) to enforce tribute and protect sea lanes [@Faral2022Year].
4. Riverine and littoral barangays: Throughout the pre-Spanish Philippines, settlement was organised around kin-based communities (barangays) established along coasts, estuaries and lake shores [@M2021Multiple; @Clav2025Beyond]. Prominent river mouths hosted fortified stockades (kota) equipped with bronze swivel cannons (lantaka), such as Maynila and Tondo along the Pasig River, mediating trade between inland rice farmers and overseas merchant vessels [@Green1995Interim; @Bjork1998Link].

# Methodology

Candidate sites in the source ledger were evaluated using published archaeological monographs, historical cartography, colonial administrative reports and regional heritage registers [@Widodo2018Morphology; @Singru2015Regional; @Jones2018Some]. Inclusion requires:
- Precise WGS84 geographic coordinates validated against regional nautical charts and river hydrography.
- Documented occupation horizons or ceramic sequences spanning from the mediaeval through the early modern eras.
- Area-based, hearth-count or tribute-based demographic estimations calibrated to historical settlement density.

Where multiple archaeological survey points fall within 2,2 km of a primary nucleated settlement, secondary coordinates are consolidated as duplicate aliases, preserving geographic integrity and preventing artificial clustering. Non-habitation features such as isolated anchorages, navigation beacons and seasonal fishing shelters are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 3085 catalogued settlements and summed site peaks across the eight sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Malacca and Peninsular Sultanates</strong></td><td class="crd-td">344</td><td class="crd-td">11,2%</td><td class="crd-td">915,7k</td><td class="crd-td">Melaka (98,6k)</td></tr>
<tr><td class="crd-td"><strong>Aceh and Sumatran Sultanates</strong></td><td class="crd-td">481</td><td class="crd-td">15,6%</td><td class="crd-td">2,08M</td><td class="crd-td">Deli Serdang (83,5k)</td></tr>
<tr><td class="crd-td"><strong>Demak, Banten and Mataram Java</strong></td><td class="crd-td">611</td><td class="crd-td">19,8%</td><td class="crd-td">6,42M</td><td class="crd-td">Setiabudi (314k)</td></tr>
<tr><td class="crd-td"><strong>Brunei and Borneo Sultanates</strong></td><td class="crd-td">162</td><td class="crd-td">5,3%</td><td class="crd-td">708,6k</td><td class="crd-td">Banjarmasin (36k)</td></tr>
<tr><td class="crd-td"><strong>Makassar and Sulawesi Polities</strong></td><td class="crd-td">84</td><td class="crd-td">2,7%</td><td class="crd-td">725k</td><td class="crd-td">Makassar (89,1k)</td></tr>
<tr><td class="crd-td"><strong>Maluku Spice Archipelago</strong></td><td class="crd-td">41</td><td class="crd-td">1,3%</td><td class="crd-td">184,3k</td><td class="crd-td">Ternate (24,2k)</td></tr>
<tr><td class="crd-td"><strong>Sulu and Maguindanao Sultanates</strong></td><td class="crd-td">401</td><td class="crd-td">13%</td><td class="crd-td">421,6k</td><td class="crd-td">Jolo (24k)</td></tr>
<tr><td class="crd-td"><strong>Pre-Spanish Luzon and Visayas</strong></td><td class="crd-td">961</td><td class="crd-td">31,2%</td><td class="crd-td">1,4M</td><td class="crd-td">Tondo (149k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">3085</td><td class="crd-td">100%</td><td class="crd-td">12,86M</td><td class="crd-td">Setiabudi (314k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 2.422 catalogued settlements and summed site peaks across maritime Southeast Asia.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and chronological spans were verified through archaeological excavations, historical cartography and archival cross-referencing [@SAKAI1993Hizen; @Green1995Interim]. Stratigraphic sequences at major port sites reveal dense layers of imported trade ceramics: Song and Yuan dynasty celadons, Ming blue-and-white porcelain and Southeast Asian stoneware jars from Sawankhalok (Thailand) and Go Sanh (Vietnam) [@SAKAI1993Hizen; @Subrahmanyam2020Coromandel]. These ceramic distributions confirm sustained commercial activity and nucleated population concentrations corresponding to the historical Age of Commerce.

Historical cartography and early navigation guides provide vital independent spatial ground truth [@Widodo2018Morphology; @Borschberg2016Melaka]. Sixteenth- and seventeenth-century European charts (such as Portuguese portolans and VOC maps by Hessel Gerritsz and Johannes Vingboons), alongside Chinese navigation rutters (such as the Shun Feng Xiang Song and the Mao Kun map from the Zheng He voyages), record indigenous toponyms and harbour soundings, validating the precise locations of the 2.422 catalogued settlements [@DeJosselinDe1960Malacca].

Bioarchaeological and zooarchaeological analyses from skeletal assemblages in the Philippines, Java and Sulawesi confirm dietary reliance on marine protein and cultivated rice, supporting the caloric carrying capacities adopted in the demographic models [@M2021Multiple; @Faral2022Year; @MB2026Updated].

# Results

## Leading Settlements of Maritime Southeast Asia

Table \ref{tab:gazetteer} presents the leading 45 pre-colonial and early modern settlements across maritime Southeast Asia ordered by peak historical population, detailing coordinates, sub-regional allocation, chronological spans and benchmark populations.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1786AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Setiabudi</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">6,22 S, 106,83 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">314k</td><td class="crd-td">314k</td></tr>
<tr><td class="crd-td"><strong>Tondo</strong></td><td class="crd-td">Pre-Spanish Luzon and Visayas</td><td class="crd-td">14,62 N, 120,97 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">149k</td><td class="crd-td">108,8k</td></tr>
<tr><td class="crd-td"><strong>Jayakarta</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">6,17 S, 106,83 E</td><td class="crd-td">1565AD - 1786AD</td><td class="crd-td">135,3k</td><td class="crd-td">106,3k</td></tr>
<tr><td class="crd-td"><strong>Surabaya</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">7,26 S, 112,75 E</td><td class="crd-td">1400AD - 1786AD</td><td class="crd-td">128,2k</td><td class="crd-td">80,9k</td></tr>
<tr><td class="crd-td"><strong>Kotagede, Plered</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">7,8 S, 110,36 E</td><td class="crd-td">1600AD - 1786AD</td><td class="crd-td">116,2k</td><td class="crd-td">93k</td></tr>
<tr><td class="crd-td"><strong>Kartasura</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">7,57 S, 110,83 E</td><td class="crd-td">1700AD - 1786AD</td><td class="crd-td">101,8k</td><td class="crd-td">96,9k</td></tr>
<tr><td class="crd-td"><strong>Melaka</strong></td><td class="crd-td">Malacca and Peninsular Sultanates</td><td class="crd-td">2,19 N, 102,25 E</td><td class="crd-td">1400AD - 1786AD</td><td class="crd-td">98,6k</td><td class="crd-td">62,2k</td></tr>
<tr><td class="crd-td"><strong>Trowulan</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">7,56 S, 112,38 E</td><td class="crd-td">1400AD - 1500AD</td><td class="crd-td">97,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Garut</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">7,25 S, 107,92 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">96,7k</td><td class="crd-td">96,7k</td></tr>
<tr><td class="crd-td"><strong>Jember</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">8,17 S, 113,7 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">90,5k</td><td class="crd-td">90,5k</td></tr>
<tr><td class="crd-td"><strong>Banten Lama</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">6,04 S, 106,15 E</td><td class="crd-td">1565AD - 1786AD</td><td class="crd-td">90,1k</td><td class="crd-td">70,8k</td></tr>
<tr><td class="crd-td"><strong>Depok</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">6,41 S, 106,82 E</td><td class="crd-td">1700AD - 1786AD</td><td class="crd-td">89,6k</td><td class="crd-td">89,6k</td></tr>
<tr><td class="crd-td"><strong>Makassar</strong></td><td class="crd-td">Makassar and Sulawesi Polities</td><td class="crd-td">5,15 S, 119,43 E</td><td class="crd-td">1565AD - 1786AD</td><td class="crd-td">89,1k</td><td class="crd-td">69,1k</td></tr>
<tr><td class="crd-td"><strong>Karawang</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">6,31 S, 107,32 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">86,3k</td><td class="crd-td">86,3k</td></tr>
<tr><td class="crd-td"><strong>Cianjur</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">6,81 S, 107,15 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">85,2k</td><td class="crd-td">85,2k</td></tr>
<tr><td class="crd-td"><strong>Sidoarjo</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">7,45 S, 112,72 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">84,1k</td><td class="crd-td">84,1k</td></tr>
<tr><td class="crd-td"><strong>Deli Serdang</strong></td><td class="crd-td">Aceh and Sumatran Sultanates</td><td class="crd-td">3,68 N, 98,65 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">83,5k</td><td class="crd-td">83,5k</td></tr>
<tr><td class="crd-td"><strong>Banda Aceh</strong></td><td class="crd-td">Aceh and Sumatran Sultanates</td><td class="crd-td">5,55 N, 95,32 E</td><td class="crd-td">1500AD - 1786AD</td><td class="crd-td">81,7k</td><td class="crd-td">60,6k</td></tr>
<tr><td class="crd-td"><strong>Temasek</strong></td><td class="crd-td">Malacca and Peninsular Sultanates</td><td class="crd-td">1,29 N, 103,85 E</td><td class="crd-td">1400AD - 1786AD</td><td class="crd-td">77,2k</td><td class="crd-td">48,8k</td></tr>
<tr><td class="crd-td"><strong>Tangerang</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">6,18 S, 106,63 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">70,9k</td><td class="crd-td">70,9k</td></tr>
<tr><td class="crd-td"><strong>Semarang</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">6,99 S, 110,42 E</td><td class="crd-td">1565AD - 1786AD</td><td class="crd-td">67,4k</td><td class="crd-td">67,4k</td></tr>
<tr><td class="crd-td"><strong>Brebes</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">6,87 S, 109,04 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">66,3k</td><td class="crd-td">66,3k</td></tr>
<tr><td class="crd-td"><strong>Banyumas</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">7,51 S, 109,29 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">62,4k</td><td class="crd-td">62,4k</td></tr>
<tr><td class="crd-td"><strong>Palembang</strong></td><td class="crd-td">Aceh and Sumatran Sultanates</td><td class="crd-td">2,92 S, 104,75 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">62,4k</td><td class="crd-td">62,4k</td></tr>
<tr><td class="crd-td"><strong>Bandung Barat</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">7,08 S, 112,71 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">61,8k</td><td class="crd-td">61,8k</td></tr>
<tr><td class="crd-td"><strong>Semarang</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">7,03 S, 110,38 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">60,8k</td><td class="crd-td">60,8k</td></tr>
<tr><td class="crd-td"><strong>Semarang</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">6,97 S, 110,42 E</td><td class="crd-td">1500AD - 1786AD</td><td class="crd-td">60,5k</td><td class="crd-td">42,3k</td></tr>
<tr><td class="crd-td"><strong>Subang</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">6,57 S, 107,76 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">58k</td><td class="crd-td">58k</td></tr>
<tr><td class="crd-td"><strong>Grobogan</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">8,03 S, 113,23 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">50,6k</td><td class="crd-td">50,6k</td></tr>
<tr><td class="crd-td"><strong>Klaten</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">7,68 S, 110,62 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">49,7k</td><td class="crd-td">49,7k</td></tr>
<tr><td class="crd-td"><strong>Cirebon</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">6,71 S, 108,56 E</td><td class="crd-td">1500AD - 1786AD</td><td class="crd-td">48,3k</td><td class="crd-td">31,5k</td></tr>
<tr><td class="crd-td"><strong>Lebak</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">6,89 S, 113,79 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">48k</td><td class="crd-td">48k</td></tr>
<tr><td class="crd-td"><strong>Pemalang</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">6,89 S, 109,38 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">47,7k</td><td class="crd-td">47,7k</td></tr>
<tr><td class="crd-td"><strong>Pakuan Pajajaran</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">6,6 S, 106,8 E</td><td class="crd-td">1200AD - 1565AD</td><td class="crd-td">47,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Jombang</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">7,55 S, 112,23 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">46,7k</td><td class="crd-td">46,7k</td></tr>
<tr><td class="crd-td"><strong>Magelang</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">7,66 S, 110,27 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">46,4k</td><td class="crd-td">46,4k</td></tr>
<tr><td class="crd-td"><strong>Pati</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">6,77 S, 111,1 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">46,3k</td><td class="crd-td">46,3k</td></tr>
<tr><td class="crd-td"><strong>South Lampung</strong></td><td class="crd-td">Aceh and Sumatran Sultanates</td><td class="crd-td">5,56 S, 105,55 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">46,3k</td><td class="crd-td">46,3k</td></tr>
<tr><td class="crd-td"><strong>Pati</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">6,76 S, 111,04 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">46,3k</td><td class="crd-td">46,3k</td></tr>
<tr><td class="crd-td"><strong>Bojonegoro</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">7,15 S, 111,88 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">46,1k</td><td class="crd-td">46,1k</td></tr>
<tr><td class="crd-td"><strong>Sleman</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">7,72 S, 110,36 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">45,9k</td><td class="crd-td">45,9k</td></tr>
<tr><td class="crd-td"><strong>Majalengka</strong></td><td class="crd-td">Demak, Banten and Mataram Java</td><td class="crd-td">6,84 S, 108,23 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">45,5k</td><td class="crd-td">45,5k</td></tr>
<tr><td class="crd-td"><strong>George Town</strong></td><td class="crd-td">Malacca and Peninsular Sultanates</td><td class="crd-td">5,41 N, 100,33 E</td><td class="crd-td">1786AD</td><td class="crd-td">45k</td><td class="crd-td">45k</td></tr>
<tr><td class="crd-td"><strong>Palembang</strong></td><td class="crd-td">Aceh and Sumatran Sultanates</td><td class="crd-td">2,99 S, 104,76 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">44,8k</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Cebu</strong></td><td class="crd-td">Pre-Spanish Luzon and Visayas</td><td class="crd-td">10,32 N, 123,89 E</td><td class="crd-td">1200AD - 1786AD</td><td class="crd-td">44,6k</td><td class="crd-td">27k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading forty-five settlements ordered by peak historical population across maritime Southeast Asia (1200AD to 1786AD).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Malacca, Johor and Peninsular Malay Sultanates

The Malay Peninsula catalogues 271 settlements distributed along the western and eastern coastal littorals and interior river valleys [@Borschberg2016Melaka; @DeJosselinDe1960Malacca]. Melaka was the preeminent international emporium, growing from 62,24k in 1400AD to a peak of 98,63k in 1600AD across its port, syahbandar districts and royal hill fortress [@Mustaffa2023Tracing; @Subrahmanyam2020Coromandel]. Temasek at the southern tip of the peninsula supported 77,17k inhabitants in 1565AD, while riverine capitals of the Johor Sultanate (Johor Lama, Kota Tinggi) and Perak (Batu Gajah, Kuala Kangsar) maintained tin and jungle resin extraction circuits.

### Aceh, Minangkabau and Sumatran Sultanates

Sumatra catalogues 365 settlements spanning the pepper coasts and highland valleys [@Arifia2024Batee; @Widodo2018Morphology]. Deli Serdang supported 83,51k residents in 1786AD, while Banda Aceh reached 81,7k in 1600AD, serving as a fortified naval capital equipped with extensive foundries and religious schools. In southern Sumatra, Palembang along the Musi River concentrated 62,37k people in 1786AD, anchoring trade with the pepper-producing interior and the Sunda Strait. In the Minangkabau highlands, fortified agricultural settlements around Tanah Datar supported terraced rice agriculture and gold mining.

### Demak, Banten, Cirebon and Mataram Java

Java constitutes the demographic core of the archipelago, cataloguing 563 settlements [@Wood2008Volcano; @Kemper2019Umbilical]. In western Java, the urban complex of Setiabudi and Greater Batavia expanded from 30,27k in 1200AD to an all-time peak of 313,99k in 1786AD. Jayakarta accommodated 135,32k in 1700AD, while Banten Lama supported 90,1k in 1700AD as a major international pepper port [@SAKAI1993Hizen; @Kemper2019Umbilical]. In the east, Surabaya supported 128,22k in 1600AD, while Trowulan concentrated 97,75k in 1400AD during the Majapahit era. In Central Java, the inland agrarian capitals of Mataram at Kotagede and Plered (116,22k in 1700AD) and Kartasura (101,83k in 1700AD) coordinated extensive rice taxation and royal administrative retinues [@Knaap2006About].

### Brunei, Banjar and Coastal Borneo Sultanates

Borneo catalogues 134 settlements situated along navigable tidal rivers and sheltered bays [@Morris1974Brunei; @Harrison1973Brunei]. Banjarmasin at the mouth of the Barito River was the largest urban centre, supporting 36,04k residents in 1786AD through diamond, pepper and rattan commerce. Brunei Kota Batu along the Brunei River anchored a maritime sultanate whose outrigger fleets controlled northern coastal trade routes, while Sambas, Sukadana and Pontianak served as riverine trading nodes in western Borneo.

### Gowa-Tallo, Bone and Sulawesi Polities

Southwestern Sulawesi catalogues 74 settlements anchoring Bugis and Makassar maritime networks [@Knaap2006About; @Widodo2018Morphology]. The twin kingdom capital of Makassar and the brick citadel of Somba Opu accommodated 89,09k inhabitants at their peak in 1600AD, maintaining an open-door commercial policy that attracted English, Danish, Portuguese and Asian merchants. The rival kingdom of Bone, centred along the coastal plains of the Gulf of Boni, supported dense agrarian rice settlements and supplied martial levies for regional expeditions.

### Ternate, Tidore and Maluku Spice Archipelago

The spice archipelago catalogues 29 settlements across volcanic islands and coastal anchorages [@Charney1996World; @Rusdiyanto2018Kesultanan]. Ternate was the leading urban centre, housing 24,2k people in 1786AD beneath its active volcanic cone, protected by stone fortifications (Fort Tolukko, Fort Kalamata) and an extensive war fleet [@Clercq1890Staatsievl; @Faral2022Year]. Tidore supported rival courtly settlements on its adjacent volcanic island, while the Banda Islands accommodated fortified nutmeg-producing villages prior to Dutch conquest in 1621AD.

### Sulu and Maguindanao Sultanates (Southern Philippines)

The southern Philippine maritime realm catalogues 296 settlements across the Sulu Archipelago and Mindanao [@Clav2025Beyond; @Mendoza2015Landlessness]. Jolo on the island of Jolo was the principal capital of the Sultanate of Sulu, concentrating 24,01k inhabitants in 1786AD as an international emporium for pearls, mother-of-pearl, tripang and birds' nests [@Ellorin2026Virtuosos]. Along the Pulangi River in Mindanao, Cotabato operated as the capital of the Maguindanao Sultanate, mediating trade between inland Lumad tribes and coastal Muslim raiders.

### Pre-Spanish Luzon and Visayas Barangays (Tondo, Maynila and Cebu)

Luzon and the Visayas catalogue 690 settlements spanning coastal embayments, river valleys and inland lakes [@M2021Multiple; @Bjork1998Link]. Tondo was the largest pre-colonial settlement in the archipelago, accommodating 149,02k people in 1500AD on the northern bank of the Pasig River. Facing Tondo across the river, Maynila operated as a palisaded trading town commanding maritime access to Laguna de Bay. In the Visayas, Cebu served as an early maritime hub (18,2k peak), while Butuan in northeastern Mindanao directed riverine gold extraction and boat building [@Green1995Interim].

# Limitations

Settlement gazetteer compilation in maritime Southeast Asia is constrained by specific preservation and documentation challenges:
1. Perishable building materials: Vernacular structures built of wood, bamboo and thatch have left minimal architectural surface traces, requiring reliance on subsurface ceramic sherd scatters and posthole configurations [@Widodo2018Morphology].
2. High alluvial and estuarine deposition: Rapid siltation in dynamic river deltas (such as the Brantas, Musi and Pasig rivers) has buried mediaeval occupation layers beneath several metres of fluvial mud [@Green1995Interim].
3. Urban continuity and modern overbuilding: Continuous occupation of major historical port cities (Jakarta, Manila, Surabaya, Makassar, Melaka) hinders extensive stratigraphic excavation beneath modern commercial infrastructure [@Jones2018Some].
4. Archival conversion uncertainties: Historical tax censuses, church registers and VOC accounts use fluctuating tribute units and household multipliers that require systematic demographic standardisation [@Raben2008Cities; @Singru2015Regional].

# Conclusion

The MANDALA settlement gazetteer synthesises 2.422 catalogued localities across eight insular sub-regions, establishing a rigorous spatial framework for historical demography in maritime Southeast Asia from 1200AD to 1786AD. By reconciling georeferenced coordinates, occupational horizons and demographic peaks, this catalogue bridges the analytical gap between coastal entrepôts and interior agrarian hinterlands. Settlement subtraction successfully isolates nucleated urban centres from rural cultivators, enabling dasymetric distribution across the landscape and providing an empirical foundation for regional demographic history.

# Appendix

## Excluded Ledger Candidates

The MANDALA source ledger evaluated 2.549 candidate settlements, of which 127 were excluded following spatial deduplication and non-habitation filtering. Table \ref{tab:excluded} documents the leading twenty-five excluded candidate records, showing modern country territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Keraton Kasunanan Suraka</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Benteng Vastenburg</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Istana Alwatzikhoebillah</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Benteng Marlborough</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Benteng Vredeburg</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Muarajambi</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Istana Wakil Presiden</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Masjid Istiqlal</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kolam Segaran</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Benteng Nieuw Victoria</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Benteng Belgica</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Benteng Kalamata</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Masjid Agung Palembang</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kompleks Makam Sultan Ka</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kompleks Makam Koto Ting</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Istana Siak Sri Indrapur</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kompleks Makam Marhum Me</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Masjid Agung Surakarta K</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Istana Mini</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Benteng Fort de Kock</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Benteng Orange</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population se...</td></tr>
<tr><td class="crd-td"><strong>Makam Sultan Kasim II</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kompleks Makam Maulana M</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kompleks Makam Sunan Pra</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kompleks Makam Sunan Bon</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the maritime Southeast Asia source ledger.</figcaption>
</figure>

# Sources
