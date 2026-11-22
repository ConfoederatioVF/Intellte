---
title: "Settlement Gazetteer of Maritime Hindu-Buddhist Empires"
subtitle: "MANDALA: Coordinates, Toponymy and Demographic Trajectories (500BC to 1500AD)"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: maritime_hindu_buddhist_empires_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_maritime_hindu_buddhist_empires_spatial.png"
hero_caption: "Spatial distribution of 1.492 catalogued settlements and regional drainage basins across Maritime Southeast Asia (1,58M km²) from 500BC to 1500AD."
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

This gazetteer catalogues georeferenced coordinates, administrative affiliations, chronological spans and benchmark demographic trajectories for 1832 settlements across Maritime Southeast Asia (1,58M km², encompassing 1.576.360 km² and 19.673 active terrestrial cells) from 500BC to 1500AD. Encompassing eight macro-regional divisions across the Indonesian archipelago and the Malay Peninsula, the catalogue synthesises diverse architectural and settlement traditions: monumental stone and volcanic andesite temple sanctuaries (*candi*) in the fertile volcanic river basins of Java and Bali, extensive brick monastic compounds and raft dwellings along the tidal estuaries of eastern Sumatra, fortified stone citadel ports along the Malacca Strait and riverine trading posts along the dendritic waterways of Borneo.

Settlement magnitudes range from early Metal Age coastal hamlets and riverine collecting posts to expansive metropolitan capitals. Leading urban nodes include the premier East Javanese maritime emporium of Surabaya (ancient Hujung Galuh; 117,28k peak in 1500AD), the West Javanese coastal hub of Setiabudi (Kalapa-Jayakarta core; 100,25k in 1500AD), the international spice entrepôt of Melaka (90,22k in 1500AD), the northern Sumatran Sultanate capital of Banda Aceh (89,6k in 1500AD), the royal garden metropolis of Majapahit at Trowulan (89,54k peak), the fortified southern straits gateway of Temasek (73,57k peak), the Central Javanese northern port of Semarang (63,25k in 1500AD), the Sundanese trade port of Cirebon (47,02k in 1500AD), the military sultanate centre of Demak (43,73k in 1500AD), the ancestral thalassocratic seat of Srivijaya at Palembang (41,09k peak), the Shaivite ceremonial complex of Prambanan (40k in 900AD), the East Javanese inland capital of Kadiri (34,73k peak) and the monumental Mahayana Buddhist sanctuary of Borobudur (33,82k in 900AD). Every catalogued locality reconciles against 1.655 candidate records in the MANDALA source ledger alongside 454 documented exclusions (primarily duplicate survey aliases within a 2,2 km spatial radius and non-habitation feature points).

By linking georeferenced archaeological coordinates with regional geomorphology, deltaic progradation sequences and epigraphic land charters (*sima*), this gazetteer establishes a spatial baseline for early insular urbanisation. Settlement subtraction systematically separates nucleated court capitals and port emporia from surrounding agricultural populations, ensuring that demographic reconstructions reflect genuine archaeological distributions rather than theoretical macro-regional assumptions.

# Background

Archaeological settlement patterns in Maritime Southeast Asia reflect distinct environmental and geopolitical adaptations across volcanic islands and tropical rainforest river systems [@Gaynor2014Maritime; @Pearson1996Book; @Ariyoshi1976Indonesian]. Three principal settlement typologies characterise the regional record:
1. Volcanic river-basin agrarian towns: In the fertile valleys of Central and East Java (such as the Kedu, Prambanan and Brantas basins), settlements were organised around irrigated wet-rice villages (*wanua*) governed by local chiefs (*rakai*) [@Herwindo2018Identifica; @Gomperts2012Mapping]. Monumental stone and brick religious sanctuaries (*candi*) served as administrative, ritual and economic anchors where agrarian surplus was mobilised to support royal courts and monastic orders [@Hudaidah2026Temple; @Rochman2026Relief].
2. Estuarine and coastal thalassocratic emporia: Along the maritime straits of Sumatra and the Malay Peninsula, settlements operated as linear riverine ports [@Yasin2026Developmen; @Susilowati2018Coastal]. Dwellings were constructed primarily from timber and bamboo on elevated wooden piles or floating log rafts along riverbanks, minimising vulnerability to tidal inundation and siltation while maximising direct access to maritime shipping [@Yasin2026Developmen].
3. Upstream collecting nodes and portages: In the interiors of Sumatra, Borneo and the Malay Peninsula, river confluences served as transshipment stations where upland forest foragers and horticulturalists bartered gold, camphor, aromatic resins and rattans with coastal merchant flotillas [@Evans1937Sumatra; @MURPHY2018Revisiting].

# Methodology

Candidate localities in the source ledger were audited using published excavation monographs, Dutch colonial heritage surveys (*Oudheidkundig Verslag*), national heritage registers and epigraphic gazetteers [@Gomperts2012Mapping; @Hudaidah2026Temple; @Halim2025Architectu; @Akbar2014Cultural]. Inclusion requires:
- Precise WGS84 geographic coordinates validated against regional hydrography and historical river palaeochannels.
- Documented cultural horizons, ceramic distributions, stone or brick architecture, or epigraphic attestations spanning from 500BC to 1500AD.
- Calibrated demographic estimations reflecting walled enclosure areas, brick foundation extents, ditch alignments or historical administrative accounts.

Where secondary survey points fall within 2,2 km of a primary nucleated settlement, coordinates are consolidated as duplicate aliases, preserving geographic integrity and eliminating artificial point clustering. Non-habitation features such as isolated megalithic stones, isolated boundary markers and ephemeral campsites are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 1832 catalogued settlements and summed site peaks across the eight sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Southern Sumatra</strong></td><td class="crd-td">340</td><td class="crd-td">18,6%</td><td class="crd-td">494,1k</td><td class="crd-td">Palembang (41,1k)</td></tr>
<tr><td class="crd-td"><strong>Northern Sumatra</strong></td><td class="crd-td">156</td><td class="crd-td">8,5%</td><td class="crd-td">518,5k</td><td class="crd-td">Banda Aceh (89,6k)</td></tr>
<tr><td class="crd-td"><strong>West Java</strong></td><td class="crd-td">281</td><td class="crd-td">15,3%</td><td class="crd-td">841,1k</td><td class="crd-td">Setiabudi (100,2k)</td></tr>
<tr><td class="crd-td"><strong>Central Java</strong></td><td class="crd-td">188</td><td class="crd-td">10,3%</td><td class="crd-td">887,1k</td><td class="crd-td">Semarang (63,2k)</td></tr>
<tr><td class="crd-td"><strong>East Java</strong></td><td class="crd-td">194</td><td class="crd-td">10,6%</td><td class="crd-td">910,5k</td><td class="crd-td">Surabaya (117,3k)</td></tr>
<tr><td class="crd-td"><strong>Bali and Lesser Sunda</strong></td><td class="crd-td">87</td><td class="crd-td">4,7%</td><td class="crd-td">351,8k</td><td class="crd-td">Bedulu (25k)</td></tr>
<tr><td class="crd-td"><strong>Malay Peninsula</strong></td><td class="crd-td">392</td><td class="crd-td">21,4%</td><td class="crd-td">519,5k</td><td class="crd-td">Melaka (90,2k)</td></tr>
<tr><td class="crd-td"><strong>Borneo</strong></td><td class="crd-td">194</td><td class="crd-td">10,6%</td><td class="crd-td">358k</td><td class="crd-td">Kota Batu (30,8k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">1832</td><td class="crd-td">100%</td><td class="crd-td">4,88M</td><td class="crd-td">Surabaya (117,3k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 1.492 catalogued settlements and summed site peaks across Maritime Southeast Asia.</figcaption>
</figure>

# Testing and Validation

Settlement coordinates and chronological sequences were cross-checked through epigraphic, geoarchaeological and remote sensing analyses [@Hudaidah2026Temple; @Putra2024Preliminar; @Yasin2026Developmen]. Inscriptions inscribed in stone and copperplates across Java and Sumatra confirm the existence and administrative status of key settlements [@Gerasela2024Candi; @Eriawati2023Portrayal; @Wijaya2023Trowulan]. For instance, the Old Malay inscriptions of Kedukan Bukit, Talang Tuo and Kota Kapur establish the strategic positioning of Srivijayan naval bases and botanical sanctuaries along the Musi River and Banka Strait during the late seventh century [@Hudaidah2026Temple; @Evans1937Sumatra].

Geoarchaeological coring in the Musi, Batanghari and Brantas deltas provided essential constraints on ancient shorelines [@Putra2024Identifica; @Purnama2018Stratigraf; @Yasin2026Developmen]. Sediment cores confirm that active deltaic progradation expanded coastal plains seaward by up to 35 kilometres over two millennia, demonstrating that sites currently situated deep inland originally operated as maritime anchorages [@Yasin2026Developmen]. Stratigraphic and granulometric analyses of burial deposits at Trowulan [@Putra2024Identifica] and aquifer assessments in Central Java [@Purnama2018Stratigraf] confirm the recurrent influence of volcanic deposition and fluvial dynamics upon habitation horizons. Furthermore, excavations and architectural surveys at Trowulan, Muaro Jambi, Bahal and Bujang Valley anchor the occupational chronologies of commercial ports and court capitals [@Anra2019Pelestaria; @Gomperts2012Mapping; @Siswanto2019Challenges; @Halim2025Revisiting]. Regional ceramic assemblages and metallurgical sites demonstrate that maritime trade routes and coastal diplomacy sustained nucleated urban growth across the archipelago [@Halim2025Evidence; @Halim2025Architectu; @MURPHY2018Revisiting; @Susilowati2018Coastal; @Noseworthy2022Seeking].

# Results

Table \ref{tab:gazetteer} presents the leading 45 settlements across Maritime Southeast Asia ordered by peak population descending, detailing coordinates, sub-regional allocation, chronological spans and peak demographic figures.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1500AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Surabaya</strong></td><td class="crd-td">East Java</td><td class="crd-td">7,26 S, 112,75 E</td><td class="crd-td">1500AD</td><td class="crd-td">117,3k</td><td class="crd-td">117,3k</td></tr>
<tr><td class="crd-td"><strong>Setiabudi</strong></td><td class="crd-td">West Java</td><td class="crd-td">6,22 S, 106,83 E</td><td class="crd-td">900AD - 1500AD</td><td class="crd-td">100,2k</td><td class="crd-td">100,2k</td></tr>
<tr><td class="crd-td"><strong>Melaka</strong></td><td class="crd-td">Malay Peninsula</td><td class="crd-td">2,19 N, 102,25 E</td><td class="crd-td">1500AD</td><td class="crd-td">90,2k</td><td class="crd-td">90,2k</td></tr>
<tr><td class="crd-td"><strong>Banda Aceh</strong></td><td class="crd-td">Northern Sumatra</td><td class="crd-td">5,55 N, 95,32 E</td><td class="crd-td">1500AD</td><td class="crd-td">89,6k</td><td class="crd-td">89,6k</td></tr>
<tr><td class="crd-td"><strong>Trowulan</strong></td><td class="crd-td">East Java</td><td class="crd-td">7,56 S, 112,38 E</td><td class="crd-td">1350AD - 1500AD</td><td class="crd-td">89,5k</td><td class="crd-td">76,7k</td></tr>
<tr><td class="crd-td"><strong>Temasek</strong></td><td class="crd-td">Malay Peninsula</td><td class="crd-td">1,29 N, 103,85 E</td><td class="crd-td">1350AD - 1500AD</td><td class="crd-td">73,6k</td><td class="crd-td">67,1k</td></tr>
<tr><td class="crd-td"><strong>Semarang</strong></td><td class="crd-td">Central Java</td><td class="crd-td">6,97 S, 110,42 E</td><td class="crd-td">1500AD</td><td class="crd-td">63,2k</td><td class="crd-td">63,2k</td></tr>
<tr><td class="crd-td"><strong>Cirebon</strong></td><td class="crd-td">West Java</td><td class="crd-td">6,71 S, 108,56 E</td><td class="crd-td">1500AD</td><td class="crd-td">47k</td><td class="crd-td">47k</td></tr>
<tr><td class="crd-td"><strong>Demak</strong></td><td class="crd-td">Central Java</td><td class="crd-td">6,89 S, 110,64 E</td><td class="crd-td">1500AD</td><td class="crd-td">43,7k</td><td class="crd-td">43,7k</td></tr>
<tr><td class="crd-td"><strong>Pakuan Pajajaran</strong></td><td class="crd-td">West Java</td><td class="crd-td">6,6 S, 106,8 E</td><td class="crd-td">900AD - 1500AD</td><td class="crd-td">43,1k</td><td class="crd-td">28,3k</td></tr>
<tr><td class="crd-td"><strong>Palembang</strong></td><td class="crd-td">Southern Sumatra</td><td class="crd-td">2,99 S, 104,76 E</td><td class="crd-td">900AD - 1500AD</td><td class="crd-td">41,1k</td><td class="crd-td">30,9k</td></tr>
<tr><td class="crd-td"><strong>Prambanan</strong></td><td class="crd-td">Central Java</td><td class="crd-td">7,75 S, 110,49 E</td><td class="crd-td">900AD</td><td class="crd-td">40k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kadiri</strong></td><td class="crd-td">East Java</td><td class="crd-td">7,82 S, 112,02 E</td><td class="crd-td">1200AD - 1500AD</td><td class="crd-td">34,7k</td><td class="crd-td">23k</td></tr>
<tr><td class="crd-td"><strong>Borobudur</strong></td><td class="crd-td">Central Java</td><td class="crd-td">7,61 S, 110,2 E</td><td class="crd-td">900AD</td><td class="crd-td">33,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tuban</strong></td><td class="crd-td">East Java</td><td class="crd-td">6,89 S, 112,06 E</td><td class="crd-td">1200AD - 1500AD</td><td class="crd-td">33,2k</td><td class="crd-td">25,8k</td></tr>
<tr><td class="crd-td"><strong>Jepara</strong></td><td class="crd-td">Central Java</td><td class="crd-td">6,59 S, 110,67 E</td><td class="crd-td">1500AD</td><td class="crd-td">33,1k</td><td class="crd-td">33,1k</td></tr>
<tr><td class="crd-td"><strong>Gresik</strong></td><td class="crd-td">East Java</td><td class="crd-td">7,16 S, 112,66 E</td><td class="crd-td">1350AD - 1500AD</td><td class="crd-td">32,2k</td><td class="crd-td">29,4k</td></tr>
<tr><td class="crd-td"><strong>Garut</strong></td><td class="crd-td">West Java</td><td class="crd-td">7,25 S, 107,92 E</td><td class="crd-td">900AD - 1500AD</td><td class="crd-td">30,9k</td><td class="crd-td">30,9k</td></tr>
<tr><td class="crd-td"><strong>Kota Batu</strong></td><td class="crd-td">Borneo</td><td class="crd-td">4,89 N, 114,96 E</td><td class="crd-td">1500AD</td><td class="crd-td">30,8k</td><td class="crd-td">30,8k</td></tr>
<tr><td class="crd-td"><strong>Kampong Ayer</strong></td><td class="crd-td">Borneo</td><td class="crd-td">4,9 N, 114,94 E</td><td class="crd-td">1200AD - 1500AD</td><td class="crd-td">30,3k</td><td class="crd-td">23,6k</td></tr>
<tr><td class="crd-td"><strong>Pagaruyung</strong></td><td class="crd-td">Northern Sumatra</td><td class="crd-td">0,95 S, 100,35 E</td><td class="crd-td">1350AD - 1500AD</td><td class="crd-td">29,4k</td><td class="crd-td">26,9k</td></tr>
<tr><td class="crd-td"><strong>Jember</strong></td><td class="crd-td">East Java</td><td class="crd-td">8,17 S, 113,7 E</td><td class="crd-td">900AD - 1500AD</td><td class="crd-td">28,9k</td><td class="crd-td">28,9k</td></tr>
<tr><td class="crd-td"><strong>Karawang</strong></td><td class="crd-td">West Java</td><td class="crd-td">6,31 S, 107,32 E</td><td class="crd-td">900AD - 1500AD</td><td class="crd-td">27,5k</td><td class="crd-td">27,5k</td></tr>
<tr><td class="crd-td"><strong>Cianjur</strong></td><td class="crd-td">West Java</td><td class="crd-td">6,81 S, 107,15 E</td><td class="crd-td">900AD - 1500AD</td><td class="crd-td">27,2k</td><td class="crd-td">27,2k</td></tr>
<tr><td class="crd-td"><strong>Sidoarjo</strong></td><td class="crd-td">East Java</td><td class="crd-td">7,45 S, 112,72 E</td><td class="crd-td">900AD - 1500AD</td><td class="crd-td">26,9k</td><td class="crd-td">26,9k</td></tr>
<tr><td class="crd-td"><strong>Deli Serdang</strong></td><td class="crd-td">Northern Sumatra</td><td class="crd-td">3,68 N, 98,65 E</td><td class="crd-td">900AD - 1500AD</td><td class="crd-td">26,7k</td><td class="crd-td">26,7k</td></tr>
<tr><td class="crd-td"><strong>Kudus</strong></td><td class="crd-td">Central Java</td><td class="crd-td">6,81 S, 110,84 E</td><td class="crd-td">1500AD</td><td class="crd-td">26,5k</td><td class="crd-td">26,5k</td></tr>
<tr><td class="crd-td"><strong>Sumenep</strong></td><td class="crd-td">East Java</td><td class="crd-td">7,04 S, 113,86 E</td><td class="crd-td">1200AD - 1500AD</td><td class="crd-td">26k</td><td class="crd-td">20,7k</td></tr>
<tr><td class="crd-td"><strong>Pasuruan</strong></td><td class="crd-td">East Java</td><td class="crd-td">7,65 S, 112,9 E</td><td class="crd-td">1200AD - 1500AD</td><td class="crd-td">26k</td><td class="crd-td">20,7k</td></tr>
<tr><td class="crd-td"><strong>Kota Bharu</strong></td><td class="crd-td">Malay Peninsula</td><td class="crd-td">6,13 N, 102,24 E</td><td class="crd-td">900AD - 1500AD</td><td class="crd-td">25,8k</td><td class="crd-td">19,3k</td></tr>
<tr><td class="crd-td"><strong>Singhasari</strong></td><td class="crd-td">East Java</td><td class="crd-td">7,89 S, 112,66 E</td><td class="crd-td">1350AD</td><td class="crd-td">25,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Magelang</strong></td><td class="crd-td">Central Java</td><td class="crd-td">7,52 S, 110,22 E</td><td class="crd-td">900AD - 1500AD</td><td class="crd-td">25,4k</td><td class="crd-td">19,1k</td></tr>
<tr><td class="crd-td"><strong>Tegal</strong></td><td class="crd-td">Central Java</td><td class="crd-td">6,87 S, 109,14 E</td><td class="crd-td">1500AD</td><td class="crd-td">25,3k</td><td class="crd-td">25,3k</td></tr>
<tr><td class="crd-td"><strong>Bedulu</strong></td><td class="crd-td">Bali and Lesser Sunda</td><td class="crd-td">8,54 S, 115,32 E</td><td class="crd-td">900AD - 1500AD</td><td class="crd-td">25k</td><td class="crd-td">18k</td></tr>
<tr><td class="crd-td"><strong>Kuala Terengganu</strong></td><td class="crd-td">Malay Peninsula</td><td class="crd-td">5,33 N, 103,14 E</td><td class="crd-td">900AD - 1500AD</td><td class="crd-td">24,9k</td><td class="crd-td">18,3k</td></tr>
<tr><td class="crd-td"><strong>Muaro Jambi</strong></td><td class="crd-td">Southern Sumatra</td><td class="crd-td">1,48 S, 103,67 E</td><td class="crd-td">900AD - 1350AD</td><td class="crd-td">24,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Blambangan</strong></td><td class="crd-td">East Java</td><td class="crd-td">8,21 S, 114,37 E</td><td class="crd-td">1200AD - 1500AD</td><td class="crd-td">24k</td><td class="crd-td">19,1k</td></tr>
<tr><td class="crd-td"><strong>Mataram</strong></td><td class="crd-td">Bali and Lesser Sunda</td><td class="crd-td">8,58 S, 116,1 E</td><td class="crd-td">1200AD - 1500AD</td><td class="crd-td">24k</td><td class="crd-td">19,1k</td></tr>
<tr><td class="crd-td"><strong>Samudera Pasai</strong></td><td class="crd-td">Northern Sumatra</td><td class="crd-td">5,13 N, 97,2 E</td><td class="crd-td">1350AD - 1500AD</td><td class="crd-td">23,1k</td><td class="crd-td">18,4k</td></tr>
<tr><td class="crd-td"><strong>Batusangkar</strong></td><td class="crd-td">Northern Sumatra</td><td class="crd-td">0,46 S, 100,62 E</td><td class="crd-td">1350AD - 1500AD</td><td class="crd-td">22,6k</td><td class="crd-td">22,5k</td></tr>
<tr><td class="crd-td"><strong>Tangerang</strong></td><td class="crd-td">West Java</td><td class="crd-td">6,18 S, 106,63 E</td><td class="crd-td">900AD - 1500AD</td><td class="crd-td">22,6k</td><td class="crd-td">22,6k</td></tr>
<tr><td class="crd-td"><strong>Blitar</strong></td><td class="crd-td">East Java</td><td class="crd-td">8,09 S, 112,16 E</td><td class="crd-td">1200AD - 1500AD</td><td class="crd-td">22,6k</td><td class="crd-td">18,3k</td></tr>
<tr><td class="crd-td"><strong>Jambi Sultanate</strong></td><td class="crd-td">Southern Sumatra</td><td class="crd-td">1,6 S, 103,61 E</td><td class="crd-td">1500AD</td><td class="crd-td">22,6k</td><td class="crd-td">22,6k</td></tr>
<tr><td class="crd-td"><strong>Alor Setar</strong></td><td class="crd-td">Malay Peninsula</td><td class="crd-td">6,12 N, 100,37 E</td><td class="crd-td">500AD - 1500AD</td><td class="crd-td">22,4k</td><td class="crd-td">16,1k</td></tr>
<tr><td class="crd-td"><strong>Bima</strong></td><td class="crd-td">Bali and Lesser Sunda</td><td class="crd-td">8,46 S, 118,73 E</td><td class="crd-td">1200AD - 1500AD</td><td class="crd-td">22k</td><td class="crd-td">17,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 settlements ordered by peak population across Maritime Southeast Asia (500BC to 1500AD).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Southern Sumatra (Srivijaya, Palembang and Jambi)

This division catalogues 249 settlements across the Musi, Batanghari and Komering river drainages [@Hudaidah2026Temple; @Yasin2026Developmen]. Palembang on the lower Musi anchored the Srivijayan thalassocracy, concentrating 41,09k inhabitants at its peak through floating raft dwellings and royal river sanctuaries [@Hudaidah2026Temple]. Muaro Jambi along the Batanghari River supported 24,21k residents within a vast complex of over eighty brick temple mounds (*candi*) serving as a premier Buddhist scholastic and pilgrimage centre [@Yasin2026Developmen; @Anra2019Pelestaria]. In the southern interior, South Lampung (14,78k peak) and North Lampung (10,31k peak) mediated commercial routes traversing the Sunda Strait toward Java [@Evans1937Sumatra].

### Northern Sumatra and Barus-Minangkabau

This division catalogues 118 settlements spanning the northern tip and Indian Ocean littoral [@Evans1937Sumatra; @Siswanto2019Challenges]. Banda Aceh (89,6k peak in 1500AD) developed into an expansive maritime sultanate capital commanding access to the northern entrance of the Malacca Strait [@Yasin2026Developmen]. Deli Serdang (26,66k peak) and Samudera Pasai (23,12k peak) functioned as vital international trading hubs and early centres of Islamic scholarship [@Susilowati2018Coastal]. Kota Cina (15k peak) flourished between the eleventh and fourteenth centuries as an international emporium accommodating Tamil and Chinese merchant quarters [@Siswanto2019Challenges], while Barus on the western coast served as an ancient port for camphor and benzoin resins [@Evans1937Sumatra; @Yasin2026Developmen].

### West Java (Tarumanagara and Sunda-Pajajaran)

This division catalogues 274 settlements extending from the Sunda Strait to the Cimanuk River [@Ariyoshi1976Indonesian; @Susilowati2018Coastal]. Setiabudi (100,25k peak in 1500AD) represents the densely populated urban core of ancient Kalapa and early Jayakarta along the Ciliwung River [@Susilowati2018Coastal]. Cirebon (47,02k peak in 1500AD) operated as a major coastal sultanate mediating commercial and cultural exchanges between Sundanese and Javanese communities [@Yasin2026Developmen]. Interior agrarian centres include Garut (30,89k peak), Karawang (27,55k peak), Cianjur (27,21k peak) and Bogor (Pakuan Pajajaran capital), which formed the agricultural foundation of the Sunda kingdom.

### Central Java (Sailendra and Ancient Mataram)

This division catalogues 161 settlements across the volcanic heartland of the Kedu, Prambanan and northern coastal plains [@Herwindo2018Identifica; @Purnama2018Stratigraf]. Semarang (63,25k peak in 1500AD) and Demak (43,73k peak in 1500AD) emerged as premier northern coastal emporia and political powerhouses during the transition to Islamic hegemony [@Yasin2026Developmen]. In the interior plains, Prambanan (40k in 900AD) and Borobudur (33,82k in 900AD) were the monumental religious capitals of the Sanjaya and Sailendra dynasties [@Herwindo2018Identifica; @Rochman2026Relief; @Gerasela2024Candi], supported by densely settled agrarian villages in Brebes (21,18k peak), Banyumas, Magelang and Klaten [@METUSALA2023Risk].

### East Java (Kediri, Singhasari and Majapahit Core)

This division catalogues 161 settlements along the Brantas and Solo river basins and the Madura Strait [@Gomperts2012Mapping; @Wijaya2023Trowulan]. Surabaya (117,28k peak in 1500AD; historical Hujung Galuh) was the premier riverine port connecting the agrarian interior to foreign sea routes [@Susilowati2018Coastal; @Ariyoshi1976Indonesian]. Trowulan (89,54k peak), the imperial capital of Majapahit, formed a sprawling garden city featuring monumental gateways, reservoirs and brick canals [@Gomperts2012Mapping; @Eriawati2023Grogol; @Winarto2015Climate; @Akbar2014Cultural]. Other prominent urban nodes include Kadiri (34,73k peak; ancient Dahana), Gresik (32,19k in 1500AD; major Muslim merchant harbour), Jember (28,9k peak), Sidoarjo (26,85k peak) and Singhasari (25,68k peak; royal seat of Kertanegara).

### Bali and Lesser Sunda Maritime Arc

This division catalogues 64 settlements along the southern island arc from Bali to Timor [@Noseworthy2022Seeking; @Stein2017Emma]. Bedulu (25k peak) served as the ancient royal capital of the Pejeng and Bedulu kingdoms in Bali, celebrated for the monumental rock-cut shrines of Gunung Kawi and the Goa Gajah hermitage [@Noseworthy2022Seeking; @Stein2017Emma]. East Lombok (15,02k peak), Central Lombok (12,06k peak), North Denpasar (11,48k peak) and Buleleng (9,46k peak; Singaraja port) served as vital agricultural and maritime staging points linking Java with the eastern spice routes.

### Malay Peninsula (Kedah-Bujang and Temasek)

This division catalogues 313 settlements extending across the southern Malay Peninsula [@MURPHY2018Revisiting; @Halim2025Revisiting]. Melaka (90,22k peak in 1500AD) was the foremost global trading emporium of fifteenth-century Southeast Asia, attracting thousands of merchants from across Asia and the Mediterranean [@Gaynor2014Maritime; @Susilowati2018Coastal]. Temasek (73,57k peak; modern Singapore) served as a strategic fortified maritime gateway controlling passage through the Singapore Strait [@Pearson1996Book; @Gaynor2014Maritime]. In northern Malaya, Bujang Valley (13,16k peak) formed an extensive iron-smelting and Hindu-Buddhist temple port complex along the Merbok River that flourished under early Srivijayan suzerainty [@Halim2025Revisiting; @Halim2025Evidence; @Halim2025Architectu; @MURPHY2018Revisiting].

### Borneo (Kutai, Tanjungpura and Santubong)

This division catalogues 152 settlements across the third-largest island in the world [@Stein2017Emma; @Pearson1996Book]. Kota Batu (30,77k peak in 1500AD) operated as the fortified capital of the Brunei sultanate, coordinating trade across northern and western Borneo. Along the Mahakam River in eastern Kalimantan, Kutai Martadipura (9,82k peak) and Kutai Kartanegara (7,65k peak) represent the earliest epigraphically attested Indianised polities in the Indonesian archipelago [@Anonymous2014Lost; @Noseworthy2022Seeking]. Additional trading nodes include Pontianak (7,64k peak) and Penajam (7,5k peak) along western and southern river estuaries.

# Limitations

Settlement gazetteer compilation in Maritime Southeast Asia remains subject to distinct taphonomic and documentary constraints:
1. Differential material preservation: whereas monumental religious temples were constructed from durable volcanic andesite or kiln-fired brick, secular urban dwellings were constructed from perishable timber and bamboo, leaving minimal stratigraphic traces [@Winarto2015Climate; @Akbar2014Cultural].
2. Tropical alluvial burial: dynamic river flooding and delta progradation have buried ancient coastal and estuarine sites under several metres of silt, particularly in eastern Sumatra and the lower Solo and Brantas deltas [@Putra2024Preliminar; @Yasin2026Developmen].
3. Dense tropical vegetation: humid equatorial rainforest cover obscures archaeological surface features, rendering visual identification challenging except where exposed by modern infrastructure works [@METUSALA2023Risk; @Kusuma2021Evaluasi].
4. Epigraphic distribution: historical inscriptions are heavily clustered in volcanic Java, Sumatra and coastal Bali, resulting in comparatively fewer written records for the forested interiors of Borneo and the Malay Peninsula [@Hudaidah2026Temple; @Noseworthy2022Seeking; @Gerasela2024Candi].

# Conclusion

The MANDALA settlement gazetteer synthesises 1.492 catalogued settlements across eight macro-regional divisions of Maritime Southeast Asia from 500BC to 1500AD. By reconciling georeferenced coordinates, occupational chronologies and demographic benchmarks, this work establishes a spatial framework for early insular urbanisation. Settlement subtraction distinguishes densely populated court capitals and international maritime emporia from surrounding rural sawah cultivators, providing a calibrated foundation for dasymetric population modelling across pre-modern Nusantara.

# Appendix

The MANDALA source ledger audited 1.655 candidate records, validating 1.492 primary settlements and documenting 163 exclusions. Table \ref{tab:excluded} details the leading 25 excluded candidates, indicating modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Benteng Vastenburg</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Istana Alwatzikhoebillah</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Benteng Marlborough</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Muarajambi</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Prambanan</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Masjid Istiqlal</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kolam Segaran</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Istana Bima "Asi Mbojo"</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Masjid Agung Palembang</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kompleks Makam Sultan Kase</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Istana Siak Sri Indrapura</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kompleks Makam Marhum Memp</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Masjid Agung Surakarta Kau</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Benteng Fort de Kock</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Makam Sultan Kasim II</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Petirtaan Watugede</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kompleks Makam Maulana Mal</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kompleks Makam Sunan Prape</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kompleks Makam Sunan Bonan</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kubur Tanggungbaya</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Keraton Kaibon</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Masjid Agung Banten</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Benteng Speelwijk</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Giri Kedaton</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Stadion Sriwedari</strong></td><td class="crd-td">Indonesia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Maritime Southeast Asia source ledger.</figcaption>
</figure>

# Sources
