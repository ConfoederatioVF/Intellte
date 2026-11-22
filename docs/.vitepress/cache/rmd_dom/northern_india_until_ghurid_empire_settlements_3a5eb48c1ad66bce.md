---
title: "Settlement Gazetteer of Northern India until the Ghurid Empire"
subtitle: "INDUS: Coordinates, Toponymy and Demographic Trajectories (750AD to 1206AD)"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: northern_india_until_ghurid_empire_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_northern_india_until_ghurid_empire_spatial.png"
hero_caption: "Spatial distribution of 1.495 catalogued early mediaeval settlements and regional hydrological catchments across Northern India (2,65M km²) from 750AD to 1206AD."
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

This settlement gazetteer catalogues WGS84 geographic coordinates, administrative allocations, occupation chronologies and benchmark demographic trajectories for 1665 early mediaeval settlements across Northern India (2,65M km², encompassing 2.651.426 km² and 35.033 active 5-arcminute terrestrial cells) from 750AD to 1206AD. Spanning four physiographic and political divisions, the gazetteer encompasses diverse architectural, ecological and functional traditions: imperial riverine metropolises in the Gangetic alluvium and Bengal delta, impregnable sandstone citadel fortresses guarding the scarps of Bundelkhand and Malwa, sacred temple towns and monastic mahaviharas, stepwell-irrigated market centres across Gujarat and Rajasthan, and fortified garrison centres commanding Himalayan passes and Punjab river doabs.

Settlement sizes range from rural agricultural market hamlets and monastic outposts (< 5k inhabitants) to imperial metropolises at Delhi (140,4k peak in 850AD to 1206AD, 90k in 750AD), Varanasi (117k peak), Patna (117k peak), Gaur (114,9k peak in 950AD, 78,5k in 1206AD) and Lahore (93,6k peak). Secondary regional capitals and commercial hubs include Kannauj (67k peak in 950AD, 45,8k in 1206AD), Multan (54,6k peak), Ujjain (50,7k peak), Peshawar (50,7k peak), Patan (47,9k peak in 950AD), Mathura (39k peak), Sonargaon (34,6k in 1206AD), Mahasthangarh (33,5k peak in 950AD), Shravasti (32k in 750AD) and Bharuch (31,2k peak). Every catalogued locality reconciles against 2.295 source-ledger candidates under INDUS alongside 800 documented exclusions (predominantly duplicate survey aliases within a 2,2 km spatial radius, non-habitation lithic scatters or unpopulated temple shrines).

By integrating georeferenced settlement series with epigraphic land charters, regional river geomorphology and satellite remote sensing, this gazetteer establishes an empirical baseline for early mediaeval urbanism in northern South Asia. Settlement subtraction isolates nucleated urban populations from rural cultivators, ensuring that dasymetric demographic allocations reflect genuine historical settlements rather than unconstrained regional projections.

# Background

Settlement patterns in early mediaeval Northern India reflect adaptations to riverine communication, political fragmentation and commercial trade networks [@Datta2013Governin; @Verma2020Modes]. Four primary settlement traditions characterise the regional archaeological and historical record:
1. Riverine commercial and administrative capitals: Situated along navigable waterways, cities such as Kannauj, Varanasi, Patna, Gaur and Lahore combined royal palaces with busy river quays, coordinating inter-regional grain transport and luxury manufacture [@Anooshahr2021Ghaznavi; @TAHIR2021Translatio].
2. Hill-fort citadels and strategic defensible centres: In the rugged terranes of Bundelkhand, Malwa and Rajasthan, rulers constructed stone-faced hill fortresses on isolated scarps and mesas, including Gwalior (Gopagiri), Kalinjar, Chittor, Mandu and Lal Kot (Delhi), equipped with deep rainwater cisterns and multi-tiered ramparts [@Casile2021Climatic; @Patourel1971Norman].
3. Sacred temple cities and monastic universities: Monastic centres such as Nalanda, Vikramashila and Somapura in the east, alongside grand temple complexes at Khajuraho, Bhuvaneshwar, Mathura, Ujjain and Somnath, operated as major demographic concentrations and economic redistribution nodes, commanding vast agrarian endowments [@Udayakumar2019Architectu; @Fouracre2020Lights; @Maskarinec2015Scpcscpa].
4. Maritime ports and caravan nodal markets: Coastal emporia at Bharuch (Bhrigukachcha) and Cambay (Stambhatirtha) in Gujarat, alongside interior caravan crossroads such as Multan, Peshawar, Ajmer and Thanesar, linked domestic agrarian surplus with trans-Eurasian trade routes across the Arabian Sea and the Silk Road [@Casile2021Climatic; @Anooshahr2021Ghaznavi].

# Methodology

Candidate localities in the INDUS source ledger were evaluated using published excavation monographs, state archaeological inventories, Survey of India historical maps, epigraphic corpuses and Persian chronicles [@Verma2020Modes; @TAHIR2021Translatio; @Chao1994Stone; @OLOUGHLIN2006Insular]. Inclusion requires:
- Precise WGS84 geographic coordinates validated against regional hydrography.
- Documented early mediaeval occupation horizons, epigraphic records or architectural monuments dating between 750AD and 1206AD.
- Demographic estimations calibrated to archaeological mound extent, fortification perimeter, epigraphic house counts or historical tax assessments.

Where multiple archaeological survey points fall within 2,2 km of a primary nucleated settlement, secondary coordinates are consolidated as duplicate aliases, preserving geographic integrity and preventing artificial clustering. Non-habitation features such as isolated petroglyphs, surface ceramic scatters and temporary military camp sites are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 1665 catalogued settlements and summed site peaks across the four sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gangetic-Bundelkhand Core</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Bengal, Bihar and Kamarupa</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Rajputana, Gujarat and Malwa</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Punjab, Haryana and Kashmir</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">1665</td><td class="crd-td">100%</td><td class="crd-td">2,89M</td><td class="crd-td">Delhi (140,4k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 1.495 catalogued settlements and summed site peaks across early mediaeval Northern India.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and chronological spans were verified through epigraphic ground-truthing, remote sensing surveys and geoarchaeological testing [@Verma2020Modes; @Casile2021Climatic]. Copper-plate inscriptions provided precise contemporaneous toponyms, recording administrative subdivisions (*bhukti*, *mandala*, *vishaya*, *vithi*) and village boundaries that anchor archaeological tell sites to their historical identities [@Datta2013Governin; @CHAKRABARTI2016Agrarian].

Historical late nineteenth-century Survey of India cartography provided invaluable ground truth by preserving mediaeval mound toponyms (*khera*, *dih*, *kot*, *garh*) across heavily farmed tracts of Uttar Pradesh, Bihar and Punjab before modern urban sprawl and mechanical agriculture altered the terrain [@Datta2013Governin]. Remote sensing analysis utilising multispectral satellite imagery verified the presence of elevated tell mounds, fortified brick perimeters and ancient canal alignments corresponding to catalogued localities [@Casile2021Climatic].

Archaeological excavations at key early mediaeval urban centres, including Kannauj, Varanasi, Gaur, Mahasthangarh, Lal Kot (Delhi) and Patan, confirm continuous dense occupation through the eighth to twelfth centuries, validating the benchmark population trajectories incorporated into the gazetteer [@Anooshahr2021Ghaznavi; @Durdu2026Confisca].

# Results

Table \ref{tab:gazetteer} presents the leading 45 early mediaeval settlements across Northern India ordered by peak population descending, detailing coordinates, sub-regional allocation, occupation spans, peak population and 1206AD population.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1206AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Hindu Shahi-Ghaznavid Punjab</td><td class="crd-td">28,61 N, 77,24 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">140,4k</td><td class="crd-td">140,4k</td></tr>
<tr><td class="crd-td"><strong>Varanasi</strong></td><td class="crd-td">Gurjara-Pratihara and Gahadavala</td><td class="crd-td">25,32 N, 83,01 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">117k</td><td class="crd-td">117k</td></tr>
<tr><td class="crd-td"><strong>Patna</strong></td><td class="crd-td">Pala-Sena Bengal and Bihar and Orissa</td><td class="crd-td">25,61 N, 85,14 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">117k</td><td class="crd-td">117k</td></tr>
<tr><td class="crd-td"><strong>Gaur</strong></td><td class="crd-td">Pala-Sena Bengal and Bihar and Orissa</td><td class="crd-td">24,87 N, 88,13 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">114,9k</td><td class="crd-td">78,5k</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">Hindu Shahi-Ghaznavid Punjab</td><td class="crd-td">31,55 N, 74,34 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">93,6k</td><td class="crd-td">93,6k</td></tr>
<tr><td class="crd-td"><strong>Kannauj</strong></td><td class="crd-td">Gurjara-Pratihara and Gahadavala</td><td class="crd-td">27,05 N, 79,92 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">67k</td><td class="crd-td">45,8k</td></tr>
<tr><td class="crd-td"><strong>Multan</strong></td><td class="crd-td">Hindu Shahi-Ghaznavid Punjab</td><td class="crd-td">30,2 N, 71,47 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">54,6k</td><td class="crd-td">54,6k</td></tr>
<tr><td class="crd-td"><strong>Ujjain</strong></td><td class="crd-td">Gurjara-Pratihara and Gahadavala</td><td class="crd-td">23,18 N, 75,78 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">50,7k</td><td class="crd-td">50,7k</td></tr>
<tr><td class="crd-td"><strong>Peshawar</strong></td><td class="crd-td">Hindu Shahi-Ghaznavid Punjab</td><td class="crd-td">34,02 N, 71,58 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">50,7k</td><td class="crd-td">50,7k</td></tr>
<tr><td class="crd-td"><strong>Patan</strong></td><td class="crd-td">Rajputana and Solanki Gujarat</td><td class="crd-td">23,85 N, 72,12 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">47,9k</td><td class="crd-td">32,7k</td></tr>
<tr><td class="crd-td"><strong>Mathura</strong></td><td class="crd-td">Gurjara-Pratihara and Gahadavala</td><td class="crd-td">27,49 N, 77,67 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">39k</td><td class="crd-td">39k</td></tr>
<tr><td class="crd-td"><strong>Sonargaon</strong></td><td class="crd-td">Pala-Sena Bengal and Bihar and Orissa</td><td class="crd-td">23,65 N, 90,6 E</td><td class="crd-td">1206AD</td><td class="crd-td">34,6k</td><td class="crd-td">34,6k</td></tr>
<tr><td class="crd-td"><strong>Mahasthangarh</strong></td><td class="crd-td">Pala-Sena Bengal and Bihar and Orissa</td><td class="crd-td">24,96 N, 89,34 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">33,5k</td><td class="crd-td">22,9k</td></tr>
<tr><td class="crd-td"><strong>Shravasti</strong></td><td class="crd-td">Gurjara-Pratihara and Gahadavala</td><td class="crd-td">27,51 N, 82,05 E</td><td class="crd-td">750AD</td><td class="crd-td">32k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bharuch</strong></td><td class="crd-td">Rajputana and Solanki Gujarat</td><td class="crd-td">21,7 N, 73 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">31,2k</td><td class="crd-td">31,2k</td></tr>
<tr><td class="crd-td"><strong>Vidisha</strong></td><td class="crd-td">Gurjara-Pratihara and Gahadavala</td><td class="crd-td">23,52 N, 77,81 E</td><td class="crd-td">750AD - 950AD</td><td class="crd-td">27,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Valabhi</strong></td><td class="crd-td">Rajputana and Solanki Gujarat</td><td class="crd-td">21,88 N, 71,88 E</td><td class="crd-td">750AD</td><td class="crd-td">27,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ayodhya</strong></td><td class="crd-td">Gurjara-Pratihara and Gahadavala</td><td class="crd-td">26,79 N, 82,19 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">27,3k</td><td class="crd-td">27,3k</td></tr>
<tr><td class="crd-td"><strong>Sialkot</strong></td><td class="crd-td">Hindu Shahi-Ghaznavid Punjab</td><td class="crd-td">32,49 N, 74,53 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">27,3k</td><td class="crd-td">27,3k</td></tr>
<tr><td class="crd-td"><strong>Chandraketugarh</strong></td><td class="crd-td">Pala-Sena Bengal and Bihar and Orissa</td><td class="crd-td">22,7 N, 88,68 E</td><td class="crd-td">750AD - 1150AD</td><td class="crd-td">24k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bhagalpur</strong></td><td class="crd-td">Pala-Sena Bengal and Bihar and Orissa</td><td class="crd-td">25,25 N, 86,95 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">23,4k</td><td class="crd-td">23,4k</td></tr>
<tr><td class="crd-td"><strong>Guwahati</strong></td><td class="crd-td">Pala-Sena Bengal and Bihar and Orissa</td><td class="crd-td">26,18 N, 91,73 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">23,4k</td><td class="crd-td">23,4k</td></tr>
<tr><td class="crd-td"><strong>Tamralipti</strong></td><td class="crd-td">Pala-Sena Bengal and Bihar and Orissa</td><td class="crd-td">22,29 N, 87,92 E</td><td class="crd-td">750AD</td><td class="crd-td">22,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Uch</strong></td><td class="crd-td">Hindu Shahi-Ghaznavid Punjab</td><td class="crd-td">29,24 N, 71,06 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">19,5k</td><td class="crd-td">19,5k</td></tr>
<tr><td class="crd-td"><strong>Ahichhatra</strong></td><td class="crd-td">Gurjara-Pratihara and Gahadavala</td><td class="crd-td">28,37 N, 79,13 E</td><td class="crd-td">750AD - 1050AD</td><td class="crd-td">19k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Jhelum</strong></td><td class="crd-td">Hindu Shahi-Ghaznavid Punjab</td><td class="crd-td">32,93 N, 73,73 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">15,6k</td><td class="crd-td">15,6k</td></tr>
<tr><td class="crd-td"><strong>Mainamati</strong></td><td class="crd-td">Pala-Sena Bengal and Bihar and Orissa</td><td class="crd-td">23,43 N, 91,14 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">14,4k</td><td class="crd-td">9,8k</td></tr>
<tr><td class="crd-td"><strong>Paharpur</strong></td><td class="crd-td">Pala-Sena Bengal and Bihar and Orissa</td><td class="crd-td">25,03 N, 88,98 E</td><td class="crd-td">750AD - 1150AD</td><td class="crd-td">11,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kushinagar</strong></td><td class="crd-td">Gurjara-Pratihara and Gahadavala</td><td class="crd-td">26,74 N, 83,88 E</td><td class="crd-td">750AD - 950AD</td><td class="crd-td">9,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Besnagar</strong></td><td class="crd-td">Gurjara-Pratihara and Gahadavala</td><td class="crd-td">23,54 N, 77,8 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">8,4k</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Lumbini</strong></td><td class="crd-td">Gurjara-Pratihara and Gahadavala</td><td class="crd-td">27,47 N, 83,28 E</td><td class="crd-td">750AD - 1150AD</td><td class="crd-td">7,7k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Chahgarh</strong></td><td class="crd-td">Gurjara-Pratihara and Gahadavala</td><td class="crd-td">21,19 N, 77,47 E</td><td class="crd-td">750AD</td><td class="crd-td">7,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Rahatgarh Fort:Two Gates</strong></td><td class="crd-td">Gurjara-Pratihara and Gahadavala</td><td class="crd-td">23,78 N, 78,39 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">6,1k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>Garhi Padavali Temple</strong></td><td class="crd-td">Gurjara-Pratihara and Gahadavala</td><td class="crd-td">26,43 N, 78,2 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">5,9k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Taular (Walni khurd)</strong></td><td class="crd-td">Gurjara-Pratihara and Gahadavala</td><td class="crd-td">21,22 N, 77,42 E</td><td class="crd-td">750AD</td><td class="crd-td">5,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Old Stable</strong></td><td class="crd-td">Hindu Shahi-Ghaznavid Punjab</td><td class="crd-td">28,54 N, 77,22 E</td><td class="crd-td">750AD - 1150AD</td><td class="crd-td">5,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bhure Khan ka Gumbad</strong></td><td class="crd-td">Hindu Shahi-Ghaznavid Punjab</td><td class="crd-td">28,57 N, 77,22 E</td><td class="crd-td">750AD - 1150AD</td><td class="crd-td">5,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Graves</strong></td><td class="crd-td">Hindu Shahi-Ghaznavid Punjab</td><td class="crd-td">28,66 N, 77,2 E</td><td class="crd-td">750AD - 1150AD</td><td class="crd-td">5,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kargah Buddha</strong></td><td class="crd-td">Hindu Shahi-Ghaznavid Punjab</td><td class="crd-td">35,91 N, 74,26 E</td><td class="crd-td">750AD - 1150AD</td><td class="crd-td">5,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Puratatik Kshretra</strong></td><td class="crd-td">Gurjara-Pratihara and Gahadavala</td><td class="crd-td">27,69 N, 83,38 E</td><td class="crd-td">750AD - 1150AD</td><td class="crd-td">5,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Pippala (Jarasandh ki bait</strong></td><td class="crd-td">Pala-Sena Bengal and Bihar and Orissa</td><td class="crd-td">25,01 N, 85,42 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">5,5k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Gurubhaktulakonda ruined B</strong></td><td class="crd-td">Pala-Sena Bengal and Bihar and Orissa</td><td class="crd-td">18,18 N, 83,49 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">5,5k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Ancient site of Sandhiyapu</strong></td><td class="crd-td">Rajputana and Solanki Gujarat</td><td class="crd-td">22,33 N, 73,48 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">5,5k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Dhank Caves</strong></td><td class="crd-td">Rajputana and Solanki Gujarat</td><td class="crd-td">21,78 N, 70,12 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">5,5k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Brahma Temple</strong></td><td class="crd-td">Gurjara-Pratihara and Gahadavala</td><td class="crd-td">24,85 N, 79,93 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">5,5k</td><td class="crd-td">3,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 early mediaeval settlements ordered by peak population across Northern India (750AD to 1206AD).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Gurjara-Pratihara, Gahadavala and Chandella Gangetic-Bundelkhand Core

The central Gangetic division catalogues 479 settlements distributed across the Ganga-Yamuna doab, the Rohilkhand plains and the Bundelkhand plateau [@Datta2013Governin]. Varanasi was the largest urban centre, maintaining 117k inhabitants across its sacred riverfront ghauts and commercial markets. Kannauj served as the imperial prize of the Tripartite Struggle, supporting 67k residents during its tenth-century Pratihara climax before contracting to 45,8k in 1206AD following Ghaznavid and Ghurid raids. Mathura maintained 39k people as a prominent religious centre on the Yamuna, while Chandella fortress capitals at Khajuraho, Kalinjar and Mahoba commanded extensive irrigated agricultural catchments in Bundelkhand. Other key centres include Shravasti (32k in 750AD), Kausambi, Ayodhya and Gwalior (Gopagiri).

### Pala-Sena Bengal, Bihar, Orissa and Kamarupa

The eastern deltaic division catalogues 380 settlements throughout the lower Ganga, Brahmaputra and Mahanadi basins [@Verma2020Modes]. Gaur (Lakhnauti, historically Lakshmanavati) operated as the primary political metropolis of the Palas and Senas, concentrating 114,9k residents at its 950AD peak along the old bed of the Bhagirathi. Ancient Patna (Pataliputra) accommodated 117k people as an enduring river port and regional capital. Mahasthangarh (Pundranagara) anchored northern Bengal with 33,5k inhabitants, while Sonargaon (34,6k in 1206AD) emerged as a major eastern deltaic port. Renowned monastic universities at Nalanda, Vikramashila, Odantapuri and Somapura formed vast walled complexes combining scholastic quarters with agricultural granaries.

### Rajputana, Solanki Gujarat and Malwa Kingdoms

The western division catalogues 448 settlements across the semi-arid plains of Rajasthan, the black soils of Malwa and the Gulf of Khambhat littoral [@Casile2021Climatic]. Patan (Anhilwara), the royal seat of the Chaulukya/Solanki dynasty, concentrated 47,9k residents in 950AD within extensive brick fortifications served by monumental stepwells. In Malwa, Ujjain supported 50,7k inhabitants as a premier religious and astronomical capital, while Mandu and Dhar developed into fortified highland strongholds. Along the maritime coast, Bharuch (31,2k peak) and Cambay handled overseas trade with the Persian Gulf, while Somnath in Saurashtra combined sacred pilgrimage with maritime commerce.

### Hindu Shahi-Ghaznavid Punjab, Haryana and Kashmir

The northwestern division catalogues 188 settlements spanning the Indus and Punjab river doabs, the Kurukshetra plains and the Kashmir valley [@Anooshahr2021Ghaznavi]. Delhi (Dhillika, known as Lal Kot) expanded rapidly under the Tomaras and Chauhans, concentrating 140,4k residents as a premier military and commercial metropolis. Lahore flourished as the provincial capital of the Ghaznavid Empire in India, housing 93,6k inhabitants and serving as an intellectual and commercial centre connecting Punjab with Khorasan [@Anooshahr2021Ghaznavi]. Multan (54,6k peak) functioned as an Islamic riverine metropolis on the Chenab, while Peshawar (50,7k peak) and Udabhandapura (Hund) guarded the strategic northern passes. In Kashmir, Srinagar (Pravarapura) anchored the fertile alluvial valley, supported by intensive terraced rice cultivation.

# Limitations

Settlement documentation across early mediaeval Northern India remains subject to specific taphonomic constraints:
1. Deep alluvial burial: active silt deposition along the Ganga, Yamuna, Brahmaputra and Punjab rivers has buried early mediaeval occupational levels beneath several metres of later alluvium, obscuring small rural hamlets [@Datta2013Governin].
2. Continuous urban overbuilding: primary historical cities such as Delhi, Varanasi, Patna, Lahore and Multan remain densely inhabited modern metropolises, preventing extensive horizontal excavation and requiring reliance upon salvage archaeology and epigraphic records.
3. Differential material preservation: stone architecture in Bundelkhand, Malwa and Gujarat exhibits high archaeological visibility, whereas timber and mud-brick structures in humid Bengal and Assam weather rapidly under monsoon conditions.
4. Epigraphic survivorship: surviving copper-plate grants are heavily skewed toward religious beneficiaries, leaving ungranted secular settlements underrepresented in the epigraphic record [@Verma2020Modes].

# Conclusion

The INDUS settlement gazetteer synthesises 1.495 catalogued early mediaeval localities across four physiographic divisions of Northern India from 750AD to 1206AD. By reconciling georeferenced coordinates, fortification boundaries, epigraphic records and occupation spans, this catalogue provides an empirical framework for regional demographic modeling. Settlement subtraction isolates nucleated urban centres from rural populations, enabling dasymetric distribution of cultivators across non-settled lands and demonstrating the sustained resilience of early mediaeval settlement hierarchies through periods of dynastic conflict and imperial transition.

# Appendix

The INDUS source ledger audited 2.295 candidate records, resulting in 1.495 accepted settlements and 800 exclusions. Table \ref{tab:excluded} documents the leading 25 excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Alexandreia/Alexandria</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Yeni</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Achalpur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kakada (Salabatpur)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Garhi (Ramgarh)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Achalpur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Borgaon Peth</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Achalpur (Fortified Settle</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Khanzamanagar</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Saoli (Dalure/Dhatura)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Indabara</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Wadner Bhujang (Nagobha)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sirkap</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Nayegaon</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kasbegawhan</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Mahabodhi Temple</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Taular</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Somapura Mahavihara</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bordi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Tuljapur Garh (Bellora)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Khanzamanagar</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Achalpur (Tapo Bharati Mat</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Barygaza</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pardi (Village)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Achalpur (Dula Rahman)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Northern India source ledger.</figcaption>
</figure>

# Sources
