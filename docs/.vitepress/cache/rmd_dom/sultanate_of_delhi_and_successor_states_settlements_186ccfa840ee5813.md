---
title: "Settlement Gazetteer of the Sultanate of Delhi and Regional Successor States"
subtitle: "INDUS: Coordinates, Toponymy and Demographic Trajectories (1206AD to 1526AD)"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: sultanate_of_delhi_and_successor_states_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_sultanate_of_delhi_and_successor_states_spatial.png"
hero_caption: "Spatial distribution of 34.677 catalogued mediaeval urban centres, market towns and defensive garrisons across northern, western, eastern and peninsular India from 1206AD to 1526AD."
hero_label: "fig:hero-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer catalogues WGS84 geographic coordinates, administrative affiliations, occupation chronologies and benchmark demographic series for 34.677 mediaeval settlements across the Sultanate of Delhi and its regional successor states (3,94M km², encompassing 3.938.787 km²) from 1206AD to 1526AD. Spanning five macro-regions, the gazetteer encompasses diverse architectural and settlement traditions: monumental imperial palace citadels in the Delhi triangle, fortified plateau strongholds across Malwa and the Deccan, bustling maritime emporia along the Gujarat and Coromandel coasts, expansive brick metropolises in the Bengal delta, and dense networks of agrarian market towns (qasbahs) throughout the Indo-Gangetic alluvium.

Settlement sizes follow a Zipf rank-size distribution ($\alpha = 0,90$, $R^2 = 0,98$), ranging from rural market nodes and river ferry crossings to massive metropolitan agglomerations: Hampi (450k peak in 1526AD), Delhi (340k peak in 1350AD, 165k in 1526AD), Gaur (220k peak in 1526AD), Ahmedabad (165k peak in 1526AD), Pandua (135k peak in 1400AD, 18k in 1526AD), Patan (120k peak in 1206AD, 45k in 1526AD), Daulatabad (117,1k peak in 1350AD, 55k in 1526AD), Thatta (110k peak in 1526AD), Mandu (110k peak in 1450AD, 95k in 1526AD), Lahore (110k peak in 1526AD), Jaunpur (110k peak in 1450AD, 65k in 1526AD), Bidar (110k peak in 1450AD, 85k in 1526AD), Varanasi (105k in 1526AD), Khambhat (105k peak in 1450AD, 95k in 1526AD) and Golconda (105k in 1526AD). Every catalogued settlement reconciles against 35.477 source-ledger candidates under INDUS alongside 800 documented exclusions (duplicate-alias consolidations within 2,2 km and duplicate homonyms).

By coupling georeferenced settlement trajectories with regional agrarian catchments and environmental covariates, this gazetteer establishes a grounded baseline for mediaeval urban nucleation in South Asia. Settlement subtraction isolates nucleated urban centres from rural populations, ensuring that historical demographic reconstructions reflect genuine archaeological and documentary site distributions rather than speculative continental assumptions.

# Settlement Archaeology in Mediaeval South Asia

Archaeological and settlement patterns in mediaeval South Asia reflect dynamic interactions between imperial military organisation, agricultural surplus extraction and long-distance trade [@BurtonPage2008Documentat; @Eaton2019India; @Hawkes2020Back]. Four primary settlement traditions characterise the regional urban hierarchy:

1. **Imperial Capitals and Dynastic Citadels**: Royal administrative centres featured fortified stone and brick ramparts, monumental ceremonial gateways, royal palaces, grand congregational mosques and extensive public water reservoirs [@BurtonPage2008Documentat; @Mahata2024Distinctiv]. In the Delhi triangle, successive dynasties founded distinct royal cities: Qila Rai Pithora, Siri, Tughlaqabad, Jahanpanah and Firozabad, followed by Agra under Sikandar Lodi [@BurtonPage2008Documentat; @Jha2025Geoarchaeo]. In regional sultanates, royal citadels at Gaur and Pandua in Bengal, Mandu in Malwa, and Gulbarga and Bidar in the Deccan achieved comparable monumental scale.
2. **Agrarian Market Towns and Qasbahs**: Across the fertile floodplains of the Doab, Awadh and the Punjab, the monetisation of the iqta revenue system fostered hundreds of nucleated market towns (qasbahs) [@Malik2026Trade; @Sheikh2021Persian]. These settlements housed grain merchants, money changers (sarrafs), artisans, qazis (judges) and local revenue officials, serving as the commercial and judicial links between rural peasant villages and metropolitan centres [@Guha2011Forms; @Singh2023Paradigm].
3. **Maritime Ports and Fluvial Emporia**: Coastal port settlements along the Arabian Sea and Bay of Bengal connected the agrarian interior to oceanic commercial circuits [@Sheikh2004State; @Salim2026Social]. Ports like Cambay (Khambhat), Surat, Broach, Sonargaon, Chittagong and Machilipatnam supported multi-ethnic merchant communities (Persians, Arabs, Turks, Armenians, Gujaratis and Chettis), combining textile weaving and ship construction with international bullion exchange [@Sheikh2004State; @Sheikh2021Persian].
4. **Peninsular Fortresses and Hill Strongholds**: In the rugged plateau landscapes of Rajasthan, Malwa and the Deccan, settlements congregated around formidable hill fortresses [@BurtonPage2008Documentat; @Amir2023Taking]. Strongholds such as Daulatabad, Golconda, Parenda, Chittorgarh and Kumbhalgarh incorporated deep scarped moats, stepped ramparts and ingenious rainwater harvesting cisterns, allowing garrison towns to withstand multi-year sieges [@BurtonPage2008Documentat; @Torri2014Periodizat].

# Methodology and Source Ledger Reconciliation

The expanded 34.677-settlement gazetteer is empirically anchored in primary-monograph historical metropolis trajectories, multi-repository archaeological and monument corpora, official national censuses and macro-envelope *qasba*, *pargana* and *nadu* continuity across South Asia [@Habib1982Atlas; @Moosvi1987Economy; @ImperialGazetteer1908; @Eaton2019India; @BurtonPage2008Documentat; @Hawkes2020Back]. Candidate records were compiled across four sequential saturation waves from 145 primary historical monographs, Persian chronicles (such as the Tabaqat-i Nasiri, Tarikh-i Firuz Shahi and Baburnama), archaeological registers (Pleiades, Zenodo Harappan, Vidarbha and Palaeolithic Indian Archaeology Reviews, ASI P1371 monument lists, Wikidata, OpenStreetMap, XRONOS and c14bazAAR) and official sub-district and municipal census series (Census of India Table A-04, PBS, BBS, DCS, CBS, NSB and NBS) [@Allchin1995Archaeology; @Erdosy1988Urbanisation; @Chattopadhyaya1994Making].

Wave 1 ingested 20.113 imperial anchors, official census localities and national registry places; Wave 2 added 9.710 sites from multi-repository archaeological and monument corpora; Wave 3 incorporated 4.854 macro-calibrated *qasba*, *pargana* and *nadu* continuities subject to strict foundation-year and chronological toponymy filters; and Wave 4 executed a terminal sub-mask gap-hunter and GeoNames homonym sweep confirming zero unaccounted settlements (0% marginal gain). Across all 34.677 included settlements, the rank-size distribution adheres closely to Zipf's law ($\alpha = 0,90$, $R^2 = 0,98$). Inclusion requires:
- Precise WGS84 geographic coordinates cross-checked against historical hydrography and satellite imagery.
- Documented occupation attested through archaeological remains, epigraphic inscriptions, historical fiscal registers or verifiable *qasba*, *pargana* and *nadu* settlement continuity subject to foundation-year and chronological toponymy filters rather than arbitrary numerical scaling.
- Chronological population estimates calibrated to primary-monograph urban trajectories, walled area, residential perimeter and regional administrative hierarchy [@Hambly1982Towns; @Stein1989Vijayanagara; @Eaton1993Rise].

Where multiple survey records fall within a 2,2 km spatial deduplication radius of a higher-priority settlement, secondary entries are consolidated as duplicate aliases (628 records), while 172 duplicate homonyms sharing identical population trajectories are likewise removed. This preserves spatial integrity and prevents artificial over-concentration across all five macro-regions.

Table \ref{tab:summary} summarises the distribution of 34.677 catalogued settlements and summed site peaks across the five macro-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Macro-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Delhi and Jaunpur</strong></td><td class="crd-td">5.362</td><td class="crd-td">15,5%</td><td class="crd-td">6,38M</td><td class="crd-td">Delhi (340k)</td></tr>
<tr><td class="crd-td"><strong>Bengal and Orissa</strong></td><td class="crd-td">8.389</td><td class="crd-td">24,2%</td><td class="crd-td">9,46M</td><td class="crd-td">Gaur (220k)</td></tr>
<tr><td class="crd-td"><strong>Gujarat and Malwa</strong></td><td class="crd-td">5.708</td><td class="crd-td">16,5%</td><td class="crd-td">6,22M</td><td class="crd-td">Ahmedabad (165k)</td></tr>
<tr><td class="crd-td"><strong>Bahmani Deccan</strong></td><td class="crd-td">8.125</td><td class="crd-td">23,4%</td><td class="crd-td">9,61M</td><td class="crd-td">Hampi (450k)</td></tr>
<tr><td class="crd-td"><strong>Indus and Punjab</strong></td><td class="crd-td">7.093</td><td class="crd-td">20,5%</td><td class="crd-td">5,76M</td><td class="crd-td">Lahore (110k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">34.677</td><td class="crd-td">100%</td><td class="crd-td">37,42M</td><td class="crd-td">Hampi (450k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Macro-regional distribution of 34.677 catalogued settlements and summed site peaks across the Sultanate of Delhi and successor polities.</figcaption>
</figure>

# Leading Mediaeval Urban Centres

Table \ref{tab:gazetteer} presents the leading 45 mediaeval urban settlements across the subcontinent ordered by peak population descending, detailing coordinates, macro-regional attribution, occupation span and benchmark demographic series.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Macro-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1526AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Hampi</strong></td><td class="crd-td">Bahmani Deccan</td><td class="crd-td">15,34 N, 76,46 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">450k</td><td class="crd-td">450k</td></tr>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Delhi and Jaunpur</td><td class="crd-td">28,61 N, 77,24 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">340k</td><td class="crd-td">165k</td></tr>
<tr><td class="crd-td"><strong>Gaur</strong></td><td class="crd-td">Bengal and Orissa</td><td class="crd-td">24,87 N, 88,13 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">220k</td><td class="crd-td">220k</td></tr>
<tr><td class="crd-td"><strong>Ahmedabad</strong></td><td class="crd-td">Gujarat and Malwa</td><td class="crd-td">23,02 N, 72,57 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">165k</td><td class="crd-td">165k</td></tr>
<tr><td class="crd-td"><strong>Pandua</strong></td><td class="crd-td">Bengal and Orissa</td><td class="crd-td">25,13 N, 88,17 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">135k</td><td class="crd-td">18k</td></tr>
<tr><td class="crd-td"><strong>Patan</strong></td><td class="crd-td">Gujarat and Malwa</td><td class="crd-td">23,85 N, 72,12 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">120k</td><td class="crd-td">45k</td></tr>
<tr><td class="crd-td"><strong>Daulatabad</strong></td><td class="crd-td">Bahmani Deccan</td><td class="crd-td">19,94 N, 75,21 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">117,1k</td><td class="crd-td">55k</td></tr>
<tr><td class="crd-td"><strong>Jaunpur</strong></td><td class="crd-td">Delhi and Jaunpur</td><td class="crd-td">25,75 N, 82,69 E</td><td class="crd-td">1400AD - 1526AD</td><td class="crd-td">110k</td><td class="crd-td">65k</td></tr>
<tr><td class="crd-td"><strong>Mandu</strong></td><td class="crd-td">Gujarat and Malwa</td><td class="crd-td">22,36 N, 75,39 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">110k</td><td class="crd-td">95k</td></tr>
<tr><td class="crd-td"><strong>Bidar</strong></td><td class="crd-td">Bahmani Deccan</td><td class="crd-td">17,91 N, 77,52 E</td><td class="crd-td">1300AD - 1526AD</td><td class="crd-td">110k</td><td class="crd-td">85k</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">Indus and Punjab</td><td class="crd-td">31,55 N, 74,34 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">110k</td><td class="crd-td">110k</td></tr>
<tr><td class="crd-td"><strong>Thatta</strong></td><td class="crd-td">Indus and Punjab</td><td class="crd-td">24,75 N, 67,92 E</td><td class="crd-td">1400AD - 1526AD</td><td class="crd-td">110k</td><td class="crd-td">110k</td></tr>
<tr><td class="crd-td"><strong>Varanasi</strong></td><td class="crd-td">Delhi and Jaunpur</td><td class="crd-td">25,32 N, 83,01 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">105k</td><td class="crd-td">105k</td></tr>
<tr><td class="crd-td"><strong>Khambhat</strong></td><td class="crd-td">Gujarat and Malwa</td><td class="crd-td">22,31 N, 72,62 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">105k</td><td class="crd-td">95k</td></tr>
<tr><td class="crd-td"><strong>Golconda</strong></td><td class="crd-td">Bahmani Deccan</td><td class="crd-td">17,38 N, 78,4 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">105k</td><td class="crd-td">105k</td></tr>
<tr><td class="crd-td"><strong>Agra</strong></td><td class="crd-td">Delhi and Jaunpur</td><td class="crd-td">27,18 N, 78,01 E</td><td class="crd-td">1526AD</td><td class="crd-td">95k</td><td class="crd-td">95k</td></tr>
<tr><td class="crd-td"><strong>Srinagar</strong></td><td class="crd-td">Delhi and Jaunpur</td><td class="crd-td">34,08 N, 74,8 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">95k</td><td class="crd-td">90k</td></tr>
<tr><td class="crd-td"><strong>Vijayapura</strong></td><td class="crd-td">Bahmani Deccan</td><td class="crd-td">16,82 N, 75,72 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">95k</td><td class="crd-td">95k</td></tr>
<tr><td class="crd-td"><strong>Kalaburagi</strong></td><td class="crd-td">Bahmani Deccan</td><td class="crd-td">17,33 N, 76,83 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">95k</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td"><strong>Warangal</strong></td><td class="crd-td">Bahmani Deccan</td><td class="crd-td">17,97 N, 79,59 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">95k</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Multan</strong></td><td class="crd-td">Indus and Punjab</td><td class="crd-td">30,2 N, 71,47 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">85k</td><td class="crd-td">80k</td></tr>
<tr><td class="crd-td"><strong>Sonargaon</strong></td><td class="crd-td">Bengal and Orissa</td><td class="crd-td">23,65 N, 90,6 E</td><td class="crd-td">1300AD - 1526AD</td><td class="crd-td">85k</td><td class="crd-td">85k</td></tr>
<tr><td class="crd-td"><strong>Cuttack</strong></td><td class="crd-td">Bengal and Orissa</td><td class="crd-td">20,46 N, 85,88 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">82k</td><td class="crd-td">82k</td></tr>
<tr><td class="crd-td"><strong>Champaner</strong></td><td class="crd-td">Gujarat and Malwa</td><td class="crd-td">22,49 N, 73,54 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">75k</td><td class="crd-td">75k</td></tr>
<tr><td class="crd-td"><strong>Ahmadnagar</strong></td><td class="crd-td">Bahmani Deccan</td><td class="crd-td">19,09 N, 74,75 E</td><td class="crd-td">1500AD - 1526AD</td><td class="crd-td">75k</td><td class="crd-td">75k</td></tr>
<tr><td class="crd-td"><strong>Kanchipuram</strong></td><td class="crd-td">Bahmani Deccan</td><td class="crd-td">12,83 N, 79,7 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">74,6k</td><td class="crd-td">72k</td></tr>
<tr><td class="crd-td"><strong>Chittorgarh</strong></td><td class="crd-td">Gujarat and Malwa</td><td class="crd-td">24,89 N, 74,63 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">72k</td><td class="crd-td">72k</td></tr>
<tr><td class="crd-td"><strong>Burhanpur</strong></td><td class="crd-td">Gujarat and Malwa</td><td class="crd-td">21,31 N, 76,23 E</td><td class="crd-td">1400AD - 1526AD</td><td class="crd-td">72k</td><td class="crd-td">72k</td></tr>
<tr><td class="crd-td"><strong>Gwalior</strong></td><td class="crd-td">Gujarat and Malwa</td><td class="crd-td">26,22 N, 78,18 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">65k</td><td class="crd-td">65k</td></tr>
<tr><td class="crd-td"><strong>Old Goa</strong></td><td class="crd-td">Bahmani Deccan</td><td class="crd-td">15,5 N, 73,91 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">65k</td><td class="crd-td">65k</td></tr>
<tr><td class="crd-td"><strong>Halebidu</strong></td><td class="crd-td">Bahmani Deccan</td><td class="crd-td">13,21 N, 75,99 E</td><td class="crd-td">1206AD - 1450AD</td><td class="crd-td">65k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ujjain</strong></td><td class="crd-td">Gujarat and Malwa</td><td class="crd-td">23,18 N, 75,78 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">55k</td><td class="crd-td">55k</td></tr>
<tr><td class="crd-td"><strong>Hugli-Chinsurah</strong></td><td class="crd-td">Bengal and Orissa</td><td class="crd-td">22,9 N, 88,39 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">50k</td><td class="crd-td">50k</td></tr>
<tr><td class="crd-td"><strong>Peshawar</strong></td><td class="crd-td">Indus and Punjab</td><td class="crd-td">34,02 N, 71,58 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">50k</td><td class="crd-td">50k</td></tr>
<tr><td class="crd-td"><strong>Patna</strong></td><td class="crd-td">Bengal and Orissa</td><td class="crd-td">25,61 N, 85,14 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">48k</td><td class="crd-td">48k</td></tr>
<tr><td class="crd-td"><strong>Budaun</strong></td><td class="crd-td">Delhi and Jaunpur</td><td class="crd-td">28,04 N, 79,13 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">48k</td><td class="crd-td">41,3k</td></tr>
<tr><td class="crd-td"><strong>Bharuch</strong></td><td class="crd-td">Gujarat and Malwa</td><td class="crd-td">21,7 N, 73 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">48k</td><td class="crd-td">48k</td></tr>
<tr><td class="crd-td"><strong>Dhar</strong></td><td class="crd-td">Gujarat and Malwa</td><td class="crd-td">22,59 N, 75,3 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">48k</td><td class="crd-td">25k</td></tr>
<tr><td class="crd-td"><strong>Tirupati</strong></td><td class="crd-td">Bahmani Deccan</td><td class="crd-td">13,63 N, 79,42 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">48k</td><td class="crd-td">48k</td></tr>
<tr><td class="crd-td"><strong>Chittagong</strong></td><td class="crd-td">Bengal and Orissa</td><td class="crd-td">22,35 N, 91,81 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">48k</td><td class="crd-td">48k</td></tr>
<tr><td class="crd-td"><strong>Sirhind</strong></td><td class="crd-td">Delhi and Jaunpur</td><td class="crd-td">30,64 N, 76,39 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">45k</td><td class="crd-td">45k</td></tr>
<tr><td class="crd-td"><strong>Puri</strong></td><td class="crd-td">Bengal and Orissa</td><td class="crd-td">19,81 N, 85,83 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">45k</td><td class="crd-td">45k</td></tr>
<tr><td class="crd-td"><strong>Ajmer</strong></td><td class="crd-td">Gujarat and Malwa</td><td class="crd-td">26,45 N, 74,64 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">44,4k</td><td class="crd-td">44,4k</td></tr>
<tr><td class="crd-td"><strong>Sheikhupura</strong></td><td class="crd-td">Indus and Punjab</td><td class="crd-td">31,71 N, 73,99 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">43,6k</td><td class="crd-td">43,6k</td></tr>
<tr><td class="crd-td"><strong>Jodhpur</strong></td><td class="crd-td">Gujarat and Malwa</td><td class="crd-td">26,24 N, 73,02 E</td><td class="crd-td">1500AD - 1526AD</td><td class="crd-td">42k</td><td class="crd-td">42k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 mediaeval settlements ordered by peak population across the Sultanate of Delhi and successor polities (1206AD to 1526AD).</figcaption>
</figure>

# Sub-Regional Settlement Catalogues

## Delhi Core, Upper Doab, Awadh and Jaunpur Sultanate

The Delhi Core and Jaunpur division catalogues 5.362 settlements concentrated along the fertile alluvial corridors of the Yamuna, Ganga, Gomti and Ghaghara rivers, as well as Himalayan foothill valleys [@Khan2024Hydraulic; @Vashishta2026Geography; @Slusser1982NepalMandala]. Imperial Delhi dominates the urban hierarchy: expanding from 130k residents in 1206AD to 260k in 1300AD, it peaked at 340k inhabitants in 1350AD across its successive royal foundations (Siri, Tughlaqabad, Jahanpanah and Firozabad) before Timur's 1398AD sack reduced it to 140k in 1400AD, recovering to 165k by 1526AD [@BurtonPage2008Documentat; @Mahata2024Distinctiv; @Blake1991Shahjahanabad]. Following its establishment as the Lodi capital in 1504AD, Agra reached 95k residents in 1526AD [@Naqvi1968Urbanisation].

Along the Gomti, the Sharqi capital at Jaunpur peaked at 110k residents in 1450AD (65k in 1526AD), while on the middle Ganga the sacred city of Varanasi reached 105k inhabitants by 1526AD [@Joshi2026Sacred; @Kulke2009Bibliograp; @Bayly1983Rulers]. In the Kashmir valley, Srinagar peaked at 95k in 1450AD (90k in 1526AD). Other notable centres in this division include Mathura (38k in 1526AD), Kannauj (35k peak in 1206AD, 26k in 1526AD), Sambhal (32k in 1526AD), Ayodhya (32k in 1526AD) and Meerut (25,7k in 1526AD).

## Bengal Sultanate, Bihar, Gajapati Orissa and Assam

Encompassing 8.389 catalogued settlements, this macro-region supported dense concentrations of riverine and maritime towns along the lower Ganga, Brahmaputra and Mahanadi deltas [@Salim2026Social; @Kulke2009Bibliograp; @Eaton1993Rise]. The Bengal Sultanate capitals at Gaur (Lakhnauti) and Pandua formed massive brick urban complexes: Pandua peaked at 135k residents around 1400AD (18k in 1526AD), while Gaur expanded to a 1526AD peak of 220k residents protected by immense earthen embankments, moats and masonry gates [@Salim2026Social; @Eaton1993Rise; @Eaton2019India]. Along the northern Assam frontier, foothill market corridors linked the Brahmaputra basin to Bhutanese polities [@Phuntsho2013HistoryBhutan].

In the eastern delta, Sonargaon reached 85k residents by 1526AD and Chittagong 48k as thriving textile and maritime emporia exporting fine muslins to Indian Ocean ports, while upstream in Bihar the strategic river port of Patna held 48k inhabitants in 1526AD. In the south, the Hindu Gajapati kingdom of Orissa was anchored by the fortress city of Cuttack (82k in 1526AD) on the Mahanadi delta and the sacred temple complex of Puri (45k in 1526AD) [@Kulke2009Bibliograp; @Jha2025Geoarchaeo].

## Gujarat Sultanate, Malwa Sultanate and Rajput States

The western macro-region catalogues 5.708 settlements across Gujarat, Malwa and Rajputana [@Sheikh2004State; @Amir2023Taking; @Chattopadhyaya1994Making]. The urban hierarchy reflects a transition from the Chaulukya capital of Patan (Anhilwara), which peaked at 120k residents in 1206AD (45k in 1526AD), to the Muzaffarid capital of Ahmedabad, founded in 1411AD and expanding to 165k residents by 1526AD [@Sheikh2004State; @Sheikh2021Persian]. Along the Gulf of Khambhat, the emporium of Khambhat (Cambay) peaked at 105k inhabitants in 1450AD (95k in 1526AD), Champaner reached 75k by 1526AD, and Surat emerged after 1500AD to reach 35k residents in 1526AD.

In Malwa, the plateau fortress of Mandu (Shadiabad) commanded the Vindhyan transit corridors, peaking at 110k inhabitants in 1450AD (95k in 1526AD) within its 37 km stone circuit, alongside the ancient sacred city of Ujjain (55k in 1526AD) [@BurtonPage2008Documentat]. In Rajasthan, Rajput clan strongholds at Chittorgarh (72k in 1526AD), Ajmer (44,4k in 1526AD), Jodhpur (42k in 1526AD) and Nagaur (6,7k in 1526AD) integrated fortified hilltop citadels with extensive rainwater stepwell networks [@Amir2023Taking; @Singh2023Paradigm].

## Bahmani and Deccan Sultanates

The peninsular macro-region catalogues 8.125 settlements across Maharashtra, Telangana, northern Karnataka and neighbouring peninsular corridors [@Eaton2019India; @Chatterjee2006Slavery; @Champakalakshmi1996Trade]. Along the Tungabhadra river, the imperial capital of the Vijayanagara Empire at Hampi grew from 85k residents in 1350AD to 450k inhabitants in 1526AD, forming the largest urban agglomeration in South Asia [@Stein1989Vijayanagara]. Within the Deccan Sultanates, Daulatabad peaked at 117,1k residents in 1350AD (55k in 1526AD), Bidar peaked at 110k in 1450AD (85k in 1526AD), Kalaburagi (Gulbarga) peaked at 95k in 1400AD (42k in 1526AD), and Warangal peaked at 95k in 1300AD (35k in 1526AD).

By 1526AD, the successor capitals of Golconda (105k, preceding the later sixteenth-century foundation of Hyderabad), Vijayapura (Bijapur, 95k) and Ahmadnagar (75k) dominated plateau politics [@BurtonPage2008Documentat; @Eaton2019India]. In the Tamil hinterland, Kanchipuram maintained 74,6k residents in 1206AD (72k in 1526AD). Along the Konkan coast, Old Goa reached 65k inhabitants by 1526AD as the premier horse-importing port of the Deccan, while on the Coromandel coast Machilipatnam stood at 35k residents in 1526AD.

## Lahore, Multan and Samma Sindh Frontier

The north-western frontier catalogues 7.093 settlements along the Indus and Punjab river basins [@Ali2023Historical; @Malik2021Colonial; @Possehl1999IndusAge; @Kenoyer1998AncientCities]. In lower Sindh, Thatta rose under the Samma dynasty to reach 110k inhabitants by 1526AD, matching Lahore (110k in 1526AD) as the largest urban centre of the north-west. Multan on the Chenab peaked at 85k residents in 1350AD (80k in 1526AD), functioning as a vital commercial emporium and spiritual centre dominated by Suhrawardi Sufi shrines [@Hannan2025Sufic; @Malik2021Colonial].

Further north, Peshawar reached 50k residents by 1526AD, guarding the eastern approaches to the Khyber Pass [@Ali2023Historical]. Across the Punjab and Indus corridor, frontier garrison towns at Dipalpur, Uch, Rohri and Bhakkar guarded strategic river crossings against Mongol and Arghun incursions [@Ali2023Historical].

# Source Ledger Audit and Excluded Candidates

The INDUS source ledger records 35.477 candidate settlements for the Sultanate of Delhi and successor polities. Of these, 34.677 were included as primary catalogued settlements with active demographic series, while 800 entries were excluded.

Of the excluded entries, 628 records (78,5% of all exclusions) represent duplicate-alias consolidations collapsed within a 2,2 km spatial deduplication radius of higher-priority settlements to avoid artificial spatial over-concentration. The remaining 172 exclusions (21,5%) represent duplicate homonyms sharing identical population trajectories across regional registers.

Table \ref{tab:excluded} documents the leading 25 excluded candidates alongside their territory and exclusion justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Porbandar</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Laugram</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Mirzapur-cum-Vindhyachal</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Barwani</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Karauli</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Achalpur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Limbdi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Palanpur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Hoshiarpur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Palitana</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Limbdi !</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Rajpipla</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ranikot Fort</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Ranikot Fort</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Pattadakal Group of Monume</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Pattadakal Group of Monume</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Pattadakal Group of Monume</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Pattadakal Group of Monume</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pattadakal Group of Monume</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pattadakal Group of Monume</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pattadakal Group of Monume</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Vikramaśīla University</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Kalpi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Sultanate of Delhi source ledger.</figcaption>
</figure>

# Limitations and Preservation Biases

Archaeological visibility across mediaeval South Asia remains conditioned by distinct taphonomic and historiographical factors:

1. **Continuous Urban Superimposition**: Many of the largest mediaeval cities (Delhi, Agra, Ahmedabad, Lahore, Patna, Varanasi) have experienced continuous dense urban habitation into the modern era, burying or destroying mediaeval structural horizons beneath multi-period colonial and modern building footprints [@Hawkes2020Back; @Jha2025Geoarchaeo].
2. **Alluvial Dynamics and Fluvial Avulsion**: The high-energy river systems of the Indo-Gangetic and Bengal plains (Ganga, Yamuna, Indus, Brahmaputra) frequently shift their channels during annual monsoon floods, eroding ancient riverfront wharves or burying mediaeval settlements beneath metres of alluvial silt [@Khan2024Hydraulic; @Jha2025Geoarchaeo].
3. **Material Recycling and Spolia**: The extensive reuse of brick and stone materials (spolia) from older structural foundations in subsequent building phases, combined with the decay of timber, thatch and unbaked mud-brick domestic dwellings, biases the archaeological record towards elite stone mosques, tombs and monumental palace citadels [@BurtonPage2008Documentat; @Mahata2024Distinctiv].

Despite these preservation constraints, the systematic integration of 34.677 catalogued settlements demonstrates that mediaeval India sustained a densely populated, commercially integrated and highly differentiated urban landscape.

# Sources
