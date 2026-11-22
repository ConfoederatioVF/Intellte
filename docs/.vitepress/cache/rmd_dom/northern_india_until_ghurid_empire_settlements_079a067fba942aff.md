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
hero_caption: "Spatial distribution of 9.343 catalogued early mediaeval settlements and regional hydrological catchments across Northern India (2,65M km²) from 750AD to 1206AD."
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

This settlement gazetteer catalogues WGS84 geographic coordinates, administrative allocations, occupation chronologies and benchmark demographic trajectories for 9.343 early mediaeval settlements across Northern India (2,65M km², encompassing 2.651.426 km² and 35.033 active 5-arcminute terrestrial cells) from 750AD to 1206AD. Spanning four physiographic and political divisions (3.800 sites in Pala-Sena Bengal, Bihar, Orissa and Kamarupa; 2.707 in the Gurjara-Pratihara, Gahadavala and Chandella Gangetic-Bundelkhand Core; 1.604 in Hindu Shahi-Ghaznavid Punjab, Haryana and Kashmir; and 1.232 in Rajputana, Solanki Gujarat and Malwa), the gazetteer encompasses imperial riverine metropolises, sandstone citadel fortresses, sacred temple towns, monastic mahaviharas, stepwell-irrigated market centres and fortified garrison hubs.

Settlement sizes follow a Zipf rank-size distribution ($\alpha = 0,89$, $R^2 = 0,98$), ranging from rural agricultural market hamlets and monastic outposts (< 5k inhabitants) to the eight primary metropolises at Kannauj (135k peak in 850AD; 120k in 950AD; 35k in 1206AD), Delhi (130k peak in 1206AD; 48k in 750AD), Patan (120k peak in 1206AD; 20k in 750AD), Gaur (120k peak in 1206AD; 65k in 750AD), Varanasi (95k peak in 1100AD; 72k in 1206AD), Lahore (85k peak in 1206AD; 25k in 750AD), Ujjain (75k peak in 1050AD; 42,3k in 1206AD) and Multan (75k peak in 1206AD). Major regional capitals and commercial hubs include Khambhat (71,8k peak in 1206AD), Dhar (68k peak in 1050AD), Srinagar (67,1k peak in 1206AD), Valabhi (55k in 750AD), Khajuraho (52k peak in 1050AD), Jabalpur (48k peak in 1100AD), Mathura (46,8k peak in 750AD), Cuttack (46,4k peak in 1206AD), Patna (45k in 750AD; 28k in 1206AD), Ajmer (43,9k peak in 1200AD), Peshawar (43,2k peak in 1206AD), Bharuch (42,8k peak in 1206AD) and Mahasthangarh (41,4k in 750AD). Every catalogued locality reconciles against 10.143 source-ledger candidates under INDUS alongside 800 documented exclusions (predominantly duplicate survey aliases within a 2,2 km spatial radius, non-habitation lithic scatters or unpopulated temple shrines).

By integrating primary-monograph city reconstructions, multi-repository archaeological corpora, official census baselines, epigraphic land charters and macro-envelope *qasba*, *pargana* and *nadu* continuity [@Habib1982Atlas; @Moosvi1987Economy; @Chattopadhyaya1994Making; @Eaton1993Rise], this gazetteer establishes an empirical baseline for early mediaeval urbanism in northern South Asia. Settlement subtraction isolates nucleated urban populations from rural cultivators, ensuring that dasymetric demographic allocations reflect genuine historical settlements rather than unconstrained regional projections.

# Background

Settlement patterns in early mediaeval Northern India reflect adaptations to riverine communication, political fragmentation and commercial trade networks [@Datta2013Governin; @Verma2020Modes; @Chattopadhyaya1994Making]. Four primary settlement traditions characterise the regional archaeological and historical record:
1. Riverine commercial and administrative capitals: Situated along navigable waterways, cities such as Kannauj, Varanasi, Patna, Gaur and Lahore combined royal palaces with busy river quays, coordinating inter-regional grain transport and luxury manufacture [@Anooshahr2021Ghaznavi; @TAHIR2021Translatio; @Hambly1982Towns; @Eaton1993Rise].
2. Hill-fort citadels and strategic defensible centres: In the rugged terranes of Bundelkhand, Malwa and Rajasthan, rulers constructed stone-faced hill fortresses on isolated scarps and mesas, including Gwalior (Gopagiri), Kalinjar, Chittorgarh, Mandu and Lal Kot (Delhi), equipped with deep rainwater cisterns and multi-tiered ramparts [@Casile2021Climatic; @Blake1991Shahjahanabad; @Erdosy1988Urbanisation].
3. Sacred temple cities and monastic universities: Monastic centres such as Nalanda, Vikramashila and Somapura in the east, alongside grand temple complexes at Khajuraho, Bhubaneswar, Puri, Mathura, Ujjain and Somnath, and Himalayan urban valleys around Kathmandu and Patan, operated as major demographic concentrations and economic redistribution nodes, commanding vast agrarian endowments [@Udayakumar2019Architectu; @Champakalakshmi1996Trade; @Slusser1982NepalMandala; @Allchin1995Archaeology].
4. Maritime ports and caravan nodal markets: Coastal emporia at Bharuch (Bhrigukachcha) and Khambhat (Stambhatirtha) in Gujarat, alongside interior caravan crossroads such as Multan, Peshawar, Ajmer and Thanesar, linked domestic agrarian surplus with trans-Eurasian trade routes across the Arabian Sea and the Silk Road [@Casile2021Climatic; @Anooshahr2021Ghaznavi; @Habib1982Atlas].

# Methodology

Candidate localities in the INDUS source ledger were evaluated using a multi-tiered provenance architecture rather than unconstrained parametric extrapolation. The expanded 9.343-settlement gazetteer is empirically anchored in primary-monograph historical metropolis trajectories [@Hambly1982Towns; @Blake1991Shahjahanabad; @Eaton1993Rise; @Chattopadhyaya1994Making; @Naqvi1968Urbanisation], multi-repository archaeological and monument corpora (Pleiades, Zenodo Harappan, Vidarbha and Palaeolithic Indian Archaeology Reviews, Archaeological Survey of India P1371, Wikidata, OpenStreetMap, XRONOS and c14bazAAR) [@Possehl1999IndusAge; @Kenoyer1998AncientCities; @Allchin1995Archaeology; @Erdosy1988Urbanisation], official national censuses (Census of India Table A-04, PBS, BBS, DCS, CBS, NSB and NBS) [@ImperialGazetteer1908], and macro-envelope *qasba*, *pargana* and *nadu* continuity validated against strict foundation-year and chronological toponymy filters [@Habib1982Atlas; @Moosvi1987Economy; @Bayly1983Rulers; @Phuntsho2013HistoryBhutan]. Inclusion requires:
- Precise WGS84 geographic coordinates validated against regional hydrography and sub-regional division masks.
- Documented early mediaeval occupation horizons, epigraphic records, pre-1800 *qasba*/*pargana*/*nadu* continuity or architectural monuments dating between 750AD and 1206AD.
- Demographic estimations calibrated to primary-monograph city benchmarks, archaeological mound extent, fortification perimeter, epigraphic house counts or historical revenue assessments.

Where multiple archaeological survey points fall within 2,2 km of a primary nucleated settlement, secondary coordinates are consolidated as duplicate aliases, preserving geographic integrity and preventing artificial clustering. Non-habitation features such as isolated petroglyphs, surface ceramic scatters and temporary military camp sites are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 9.343 catalogued settlements and summed site peaks across the four sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gangetic-Bundelkhand Core</strong></td><td class="crd-td">2.707</td><td class="crd-td">29%</td><td class="crd-td">3,66M</td><td class="crd-td">Kannauj (135k)</td></tr>
<tr><td class="crd-td"><strong>Bengal, Bihar and Kamarupa</strong></td><td class="crd-td">3.800</td><td class="crd-td">40,7%</td><td class="crd-td">4,67M</td><td class="crd-td">Gaur (120k)</td></tr>
<tr><td class="crd-td"><strong>Rajputana, Gujarat and Malwa</strong></td><td class="crd-td">1.232</td><td class="crd-td">13,2%</td><td class="crd-td">2,21M</td><td class="crd-td">Patan (120k)</td></tr>
<tr><td class="crd-td"><strong>Punjab, Haryana and Kashmir</strong></td><td class="crd-td">1.604</td><td class="crd-td">17,2%</td><td class="crd-td">2,71M</td><td class="crd-td">Delhi (130k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">9.343</td><td class="crd-td">100%</td><td class="crd-td">13,24M</td><td class="crd-td">Kannauj (135k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 9.343 catalogued settlements and summed site peaks across early mediaeval Northern India.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and chronological spans were verified through epigraphic ground-truthing, remote sensing surveys and geoarchaeological testing [@Verma2020Modes; @Casile2021Climatic; @Chattopadhyaya1994Making]. Copper-plate inscriptions provided precise contemporaneous toponyms, recording administrative subdivisions (*bhukti*, *mandala*, *vishaya*, *vithi*) and village boundaries that anchor archaeological tell sites to their historical identities [@Datta2013Governin; @CHAKRABARTI2016Agrarian; @Eaton1993Rise].

Historical late nineteenth-century Survey of India cartography and the *Imperial Gazetteer of India* provided invaluable ground truth by preserving mediaeval mound toponyms (*khera*, *dih*, *kot*, *garh*) and *pargana* headquarters across heavily farmed tracts of Uttar Pradesh, Bihar and Punjab before modern urban sprawl and mechanical agriculture altered the terrain [@Datta2013Governin; @ImperialGazetteer1908; @Habib1982Atlas]. Remote sensing analysis utilising multispectral satellite imagery verified the presence of elevated tell mounds, fortified brick perimeters and ancient canal alignments corresponding to catalogued localities [@Casile2021Climatic; @Allchin1995Archaeology].

Archaeological excavations at key early mediaeval urban centres, including Kannauj, Varanasi, Gaur, Mahasthangarh, Lal Kot (Delhi) and Patan, confirm continuous dense occupation through the eighth to twelfth centuries, validating the benchmark population trajectories incorporated into the gazetteer [@Anooshahr2021Ghaznavi; @Durdu2026Confisca; @Erdosy1988Urbanisation].

# Results

Table \ref{tab:gazetteer} presents the leading 45 early mediaeval settlements across Northern India ordered by peak population descending, detailing coordinates, sub-regional allocation, occupation spans, peak population and 1206AD population.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1206AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kannauj</strong></td><td class="crd-td">Gangetic-Bundelkhand Core</td><td class="crd-td">27,05 N, 79,92 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">135k</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Punjab, Haryana and Kashmir</td><td class="crd-td">28,61 N, 77,24 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">130k</td><td class="crd-td">130k</td></tr>
<tr><td class="crd-td"><strong>Gaur</strong></td><td class="crd-td">Bengal, Bihar and Kamarupa</td><td class="crd-td">24,87 N, 88,13 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">120k</td><td class="crd-td">120k</td></tr>
<tr><td class="crd-td"><strong>Patan</strong></td><td class="crd-td">Rajputana, Gujarat and Malwa</td><td class="crd-td">23,85 N, 72,12 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">120k</td><td class="crd-td">120k</td></tr>
<tr><td class="crd-td"><strong>Varanasi</strong></td><td class="crd-td">Gangetic-Bundelkhand Core</td><td class="crd-td">25,32 N, 83,01 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">95k</td><td class="crd-td">72k</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">Punjab, Haryana and Kashmir</td><td class="crd-td">31,55 N, 74,34 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">85k</td><td class="crd-td">85k</td></tr>
<tr><td class="crd-td"><strong>Ujjain</strong></td><td class="crd-td">Gangetic-Bundelkhand Core</td><td class="crd-td">23,18 N, 75,78 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">75k</td><td class="crd-td">42,3k</td></tr>
<tr><td class="crd-td"><strong>Multan</strong></td><td class="crd-td">Punjab, Haryana and Kashmir</td><td class="crd-td">30,2 N, 71,47 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">75k</td><td class="crd-td">75k</td></tr>
<tr><td class="crd-td"><strong>Khambhat</strong></td><td class="crd-td">Rajputana, Gujarat and Malwa</td><td class="crd-td">22,31 N, 72,62 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">71,8k</td><td class="crd-td">71,8k</td></tr>
<tr><td class="crd-td"><strong>Dhar</strong></td><td class="crd-td">Gangetic-Bundelkhand Core</td><td class="crd-td">22,59 N, 75,3 E</td><td class="crd-td">950AD - 1206AD</td><td class="crd-td">68k</td><td class="crd-td">48k</td></tr>
<tr><td class="crd-td"><strong>Srinagar</strong></td><td class="crd-td">Punjab, Haryana and Kashmir</td><td class="crd-td">34,08 N, 74,8 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">67,1k</td><td class="crd-td">67,1k</td></tr>
<tr><td class="crd-td"><strong>Valabhi</strong></td><td class="crd-td">Rajputana, Gujarat and Malwa</td><td class="crd-td">21,88 N, 71,88 E</td><td class="crd-td">750AD</td><td class="crd-td">55k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Khajuraho</strong></td><td class="crd-td">Gangetic-Bundelkhand Core</td><td class="crd-td">24,83 N, 79,92 E</td><td class="crd-td">900AD - 1206AD</td><td class="crd-td">52k</td><td class="crd-td">23,8k</td></tr>
<tr><td class="crd-td"><strong>Jabalpur</strong></td><td class="crd-td">Gangetic-Bundelkhand Core</td><td class="crd-td">23,18 N, 79,99 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">48k</td><td class="crd-td">36,4k</td></tr>
<tr><td class="crd-td"><strong>Mathura</strong></td><td class="crd-td">Gangetic-Bundelkhand Core</td><td class="crd-td">27,49 N, 77,67 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">46,8k</td><td class="crd-td">26k</td></tr>
<tr><td class="crd-td"><strong>Cuttack</strong></td><td class="crd-td">Bengal, Bihar and Kamarupa</td><td class="crd-td">20,46 N, 85,88 E</td><td class="crd-td">1000AD - 1206AD</td><td class="crd-td">46,4k</td><td class="crd-td">46,4k</td></tr>
<tr><td class="crd-td"><strong>Patna</strong></td><td class="crd-td">Bengal, Bihar and Kamarupa</td><td class="crd-td">25,61 N, 85,14 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">45k</td><td class="crd-td">28k</td></tr>
<tr><td class="crd-td"><strong>Ajmer</strong></td><td class="crd-td">Rajputana, Gujarat and Malwa</td><td class="crd-td">26,45 N, 74,64 E</td><td class="crd-td">1150AD - 1206AD</td><td class="crd-td">43,9k</td><td class="crd-td">43,1k</td></tr>
<tr><td class="crd-td"><strong>Peshawar</strong></td><td class="crd-td">Punjab, Haryana and Kashmir</td><td class="crd-td">34,02 N, 71,58 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">43,2k</td><td class="crd-td">43,2k</td></tr>
<tr><td class="crd-td"><strong>Bharuch</strong></td><td class="crd-td">Rajputana, Gujarat and Malwa</td><td class="crd-td">21,7 N, 73 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">42,8k</td><td class="crd-td">42,8k</td></tr>
<tr><td class="crd-td"><strong>Gwalior</strong></td><td class="crd-td">Gangetic-Bundelkhand Core</td><td class="crd-td">26,22 N, 78,18 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">41,4k</td><td class="crd-td">41,4k</td></tr>
<tr><td class="crd-td"><strong>Mahasthangarh</strong></td><td class="crd-td">Bengal, Bihar and Kamarupa</td><td class="crd-td">24,96 N, 89,34 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">41,4k</td><td class="crd-td">22,9k</td></tr>
<tr><td class="crd-td"><strong>Mandu</strong></td><td class="crd-td">Gangetic-Bundelkhand Core</td><td class="crd-td">22,36 N, 75,39 E</td><td class="crd-td">1050AD - 1206AD</td><td class="crd-td">35,4k</td><td class="crd-td">35,4k</td></tr>
<tr><td class="crd-td"><strong>Budaun</strong></td><td class="crd-td">Gangetic-Bundelkhand Core</td><td class="crd-td">28,04 N, 79,13 E</td><td class="crd-td">950AD - 1206AD</td><td class="crd-td">35k</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Ahmedabad</strong></td><td class="crd-td">Rajputana, Gujarat and Malwa</td><td class="crd-td">23,02 N, 72,57 E</td><td class="crd-td">1100AD - 1206AD</td><td class="crd-td">35k</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Chittorgarh</strong></td><td class="crd-td">Rajputana, Gujarat and Malwa</td><td class="crd-td">24,89 N, 74,63 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">35k</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Kalinjar</strong></td><td class="crd-td">Gangetic-Bundelkhand Core</td><td class="crd-td">25 N, 80,48 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">35k</td><td class="crd-td">28k</td></tr>
<tr><td class="crd-td"><strong>Uch</strong></td><td class="crd-td">Punjab, Haryana and Kashmir</td><td class="crd-td">29,24 N, 71,06 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">35k</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Nabadwip</strong></td><td class="crd-td">Bengal, Bihar and Kamarupa</td><td class="crd-td">23,41 N, 88,37 E</td><td class="crd-td">1100AD - 1206AD</td><td class="crd-td">34,8k</td><td class="crd-td">34,8k</td></tr>
<tr><td class="crd-td"><strong>Puri</strong></td><td class="crd-td">Bengal, Bihar and Kamarupa</td><td class="crd-td">19,81 N, 85,83 E</td><td class="crd-td">950AD - 1206AD</td><td class="crd-td">33,6k</td><td class="crd-td">33,6k</td></tr>
<tr><td class="crd-td"><strong>Ayodhya</strong></td><td class="crd-td">Gangetic-Bundelkhand Core</td><td class="crd-td">26,79 N, 82,19 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">32,3k</td><td class="crd-td">25k</td></tr>
<tr><td class="crd-td"><strong>Thanesar</strong></td><td class="crd-td">Punjab, Haryana and Kashmir</td><td class="crd-td">29,97 N, 76,83 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">32k</td><td class="crd-td">16k</td></tr>
<tr><td class="crd-td"><strong>Guwahati</strong></td><td class="crd-td">Bengal, Bihar and Kamarupa</td><td class="crd-td">26,18 N, 91,73 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">32k</td><td class="crd-td">26k</td></tr>
<tr><td class="crd-td"><strong>Mainamati</strong></td><td class="crd-td">Bengal, Bihar and Kamarupa</td><td class="crd-td">23,43 N, 91,14 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">32k</td><td class="crd-td">22k</td></tr>
<tr><td class="crd-td"><strong>Sialkot</strong></td><td class="crd-td">Punjab, Haryana and Kashmir</td><td class="crd-td">32,49 N, 74,53 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">29k</td><td class="crd-td">26k</td></tr>
<tr><td class="crd-td"><strong>Bhubaneswar</strong></td><td class="crd-td">Bengal, Bihar and Kamarupa</td><td class="crd-td">20,3 N, 85,83 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">28k</td><td class="crd-td">24,8k</td></tr>
<tr><td class="crd-td"><strong>Sheikhupura</strong></td><td class="crd-td">Punjab, Haryana and Kashmir</td><td class="crd-td">31,71 N, 73,99 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">27,8k</td><td class="crd-td">27,8k</td></tr>
<tr><td class="crd-td"><strong>Jalandhar</strong></td><td class="crd-td">Punjab, Haryana and Kashmir</td><td class="crd-td">31,33 N, 75,58 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">26,8k</td><td class="crd-td">22k</td></tr>
<tr><td class="crd-td"><strong>Prayagraj</strong></td><td class="crd-td">Gangetic-Bundelkhand Core</td><td class="crd-td">25,43 N, 81,85 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">26,2k</td><td class="crd-td">22k</td></tr>
<tr><td class="crd-td"><strong>Bhagalpur</strong></td><td class="crd-td">Bengal, Bihar and Kamarupa</td><td class="crd-td">25,25 N, 86,95 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">26k</td><td class="crd-td">24k</td></tr>
<tr><td class="crd-td"><strong>Gaya</strong></td><td class="crd-td">Bengal, Bihar and Kamarupa</td><td class="crd-td">24,8 N, 85 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">26k</td><td class="crd-td">23,6k</td></tr>
<tr><td class="crd-td"><strong>Ratanpur</strong></td><td class="crd-td">Gangetic-Bundelkhand Core</td><td class="crd-td">22,29 N, 82,17 E</td><td class="crd-td">1050AD - 1206AD</td><td class="crd-td">26k</td><td class="crd-td">26k</td></tr>
<tr><td class="crd-td"><strong>Sirhind</strong></td><td class="crd-td">Punjab, Haryana and Kashmir</td><td class="crd-td">30,64 N, 76,39 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">25k</td><td class="crd-td">25k</td></tr>
<tr><td class="crd-td"><strong>Nalanda</strong></td><td class="crd-td">Bengal, Bihar and Kamarupa</td><td class="crd-td">25,14 N, 85,44 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">24k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Vidisha</strong></td><td class="crd-td">Gangetic-Bundelkhand Core</td><td class="crd-td">23,52 N, 77,81 E</td><td class="crd-td">750AD - 1206AD</td><td class="crd-td">24k</td><td class="crd-td">20,7k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 early mediaeval settlements ordered by peak population across Northern India (750AD to 1206AD).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Gurjara-Pratihara, Gahadavala and Chandella Gangetic-Bundelkhand Core

The central Gangetic division catalogues 2.707 settlements distributed across the Ganga-Yamuna doab, the Rohilkhand plains, the Bundelkhand plateau and northern Malwa [@Datta2013Governin; @Chattopadhyaya1994Making]. Kannauj served as the imperial prize of the Tripartite Struggle, peaking at 135k inhabitants in 850AD and maintaining 120k in 950AD before contracting to 35k in 1206AD following Ghaznavid and Ghurid raids. Varanasi was the largest enduring Gangetic metropolis, rising from 80k in 750AD to a peak of 95k in 1100AD before moderating to 72k in 1206AD. In Malwa and Bundelkhand, Ujjain peaked at 75k in 1050AD (42,3k in 1206AD), Dhar at 68k in 1050AD (48k in 1206AD), Khajuraho at 52k in 1050AD and Jabalpur at 48k in 1100AD. Mathura held 46,8k residents in 750AD (26k in 1206AD), while Gwalior (41,4k peak in 1206AD), Mandu (35,4k peak in 1206AD), Kalinjar (35k peak in 1100AD), Mahoba and Shravasti (4k in 750AD) anchored regional fortifications and trade routes.

### Pala-Sena Bengal, Bihar, Orissa and Kamarupa

The eastern deltaic division catalogues 3.800 settlements throughout the lower Ganga, Brahmaputra and Mahanadi basins [@Verma2020Modes; @Eaton1993Rise]. Gaur (Lakhnauti, historically Lakshmanavati) operated as the primary political metropolis of the Palas and Senas, expanding from 65k in 750AD and 85k in 950AD to 120k inhabitants by 1206AD along the old bed of the Bhagirathi. Cuttack reached 46,4k in 1206AD, while ancient Patna (Pataliputra) accommodated 45k people in 750AD (28k in 1206AD) as an enduring river port. Mahasthangarh (Pundranagara) anchored northern Bengal with 41,4k inhabitants in 750AD (22,9k in 1206AD), alongside temple and port centres at Puri (33,6k peak in 1206AD), Bhubaneswar (28k peak in 1050AD) and Sonargaon (8,3k by 1206AD). Renowned monastic universities at Nalanda (24k in 750AD, falling to 2,5k by 1206AD), Vikramashila, Odantapuri and Somapura formed walled complexes combining scholastic quarters with agricultural granaries [@Phuntsho2013HistoryBhutan; @Slusser1982NepalMandala].

### Rajputana, Solanki Gujarat and Malwa Kingdoms

The western division catalogues 1.232 settlements across the semi-arid plains of Rajasthan and the Gulf of Khambhat littoral [@Casile2021Climatic; @Chattopadhyaya1994Making]. Patan (Anhilwara), the royal seat of the Chaulukya/Solanki dynasty, expanded from 20k in 750AD and 55k in 950AD to 120k residents in 1206AD within extensive brick fortifications served by monumental stepwells. Along the maritime coast, Khambhat (Cambay) rose to 71,8k and Bharuch to 42,8k by 1206AD, succeeding the early Maitraka capital at Valabhi (55k in 750AD) in handling overseas trade with the Persian Gulf, while Somnath combined sacred pilgrimage with maritime commerce. Across Rajasthan, the Chauhan seat at Ajmer attained 43,9k in 1200AD (43,1k in 1206AD) and Chittorgarh grew to 35k by 1206AD.

### Hindu Shahi-Ghaznavid Punjab, Haryana and Kashmir

The northwestern riverine and mountain division catalogues 1.604 settlements spanning the Indus and Punjab river doabs, the Kurukshetra plains and the Kashmir valley [@Anooshahr2021Ghaznavi; @Hambly1982Towns]. Delhi (Dhillika, known as Lal Kot) expanded rapidly under the Tomaras, Chauhans and early Ghurids from 48k in 750AD and 62k in 950AD to 130k residents by 1206AD [@Blake1991Shahjahanabad]. Lahore flourished as the provincial capital of the Ghaznavid Empire in India, expanding from 25k in 750AD to 85k inhabitants by 1206AD and serving as an intellectual and commercial hub connecting Punjab with Khorasan [@Anooshahr2021Ghaznavi; @Naqvi1968Urbanisation]. Multan grew steadily to 75k in 1206AD as an Islamic riverine metropolis on the Chenab, Srinagar (Pravarapura) reached 67,1k in the Kashmir valley, Peshawar attained 43,2k guarding the northern passes, and Thanesar held 32k in 750AD (16k in 1206AD).

# Limitations

Settlement documentation across early mediaeval Northern India remains subject to specific taphonomic constraints:
1. Deep alluvial burial: active silt deposition along the Ganga, Yamuna, Brahmaputra and Punjab rivers has buried early mediaeval occupational levels beneath several metres of later alluvium, obscuring small rural hamlets [@Datta2013Governin].
2. Continuous urban overbuilding: primary historical cities such as Delhi, Varanasi, Patna, Lahore and Multan remain densely inhabited modern metropolises, preventing extensive horizontal excavation and requiring reliance upon salvage archaeology and epigraphic records.
3. Differential material preservation: stone architecture in Bundelkhand, Malwa and Gujarat exhibits high archaeological visibility, whereas timber and mud-brick structures in humid Bengal and Assam weather rapidly under monsoon conditions.
4. Epigraphic survivorship: surviving copper-plate grants are heavily skewed toward religious beneficiaries, leaving ungranted secular settlements underrepresented in the epigraphic record [@Verma2020Modes].

# Conclusion

The INDUS settlement gazetteer synthesises 9.343 catalogued early mediaeval localities across four physiographic divisions of Northern India from 750AD to 1206AD, conforming to a Zipf rank-size distribution ($\alpha = 0,89$, $R^2 = 0,98$). By reconciling primary-monograph city trajectories, multi-repository archaeological corpora, official census baselines, epigraphic records and *qasba*/*pargana*/*nadu* continuity, this catalogue provides an empirical framework for regional demographic modelling. Settlement subtraction isolates nucleated urban centres from rural populations, enabling dasymetric distribution of cultivators across non-settled lands and demonstrating the sustained resilience of early mediaeval settlement hierarchies through periods of dynastic conflict and imperial transition.

# Appendix

The INDUS source ledger audited 10.143 candidate records, resulting in 9.343 accepted settlements and 800 exclusions. Table \ref{tab:excluded} documents the leading 25 excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Laugram</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Barwani</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Mirzapur-cum-Vindhyachal</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Porbandar</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Hoshiarpur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Vikramaśīla University</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Palitana</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Garhi (Ramgarh)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Taular (Walni Bujurg)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ambara Kandari (Attargaon)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kakada (Ambuj)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Khambora</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Yeni</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pardi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Yeni (Beni Pandhari)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ambara Kandari (village)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ambara Kandari (Gopalpur)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pardi (Village)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Achalpur (Fortified Settle</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kavitha (Nagarwadi)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Tuljapur Garhi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kakada (Raja Burkhar Kheda</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Tokbala (Jambhal)</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Chachondi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Northern India source ledger.</figcaption>
</figure>

# Sources
