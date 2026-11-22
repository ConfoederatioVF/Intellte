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
hero_caption: "Spatial distribution of 2.439 catalogued mediaeval urban centres, market towns and defensive garrisons across northern, western, eastern and peninsular India from 1206AD to 1526AD."
hero_label: "fig:hero-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer catalogues WGS84 geographic coordinates, administrative affiliations, occupation chronologies and benchmark demographic series for 6089 mediaeval settlements across the Sultanate of Delhi and its regional successor states (3,94M km², encompassing 3.938.787 km²) from 1206AD to 1526AD. Spanning five macro-regions, the gazetteer encompasses diverse architectural and settlement traditions: monumental imperial palace citadels in the Delhi triangle, fortified plateau strongholds across Malwa and the Deccan, bustling maritime emporia along the Gujarat and Coromandel coasts, expansive brick metropolises in the Bengal delta, and dense networks of agrarian market towns (qasbahs) throughout the Indo-Gangetic alluvium.

Settlement sizes range from strategic desert outposts and river ferry crossings to massive metropolitan agglomerations: Hampi (234k peak, 168k in 1526AD), Hyderabad and Golconda (197k peak, 197k in 1526AD), Agra (192k peak, 192k in 1526AD), Delhi (174k peak, 118k in 1526AD), Varanasi (145k peak, 98,1k in 1526AD), Patna (145k peak, 98,1k in 1526AD), Ahmedabad (131k peak, 112k in 1526AD), Surat (124k peak, 124k in 1526AD), Lahore (116k peak, 78,5k in 1526AD), Gaur (116k peak, 78,5k in 1526AD), Vijayapura (93,8k peak, 93,8k in 1526AD), Old Goa (72k peak, 49k in 1526AD), Multan (67,6k peak, 45,8k in 1526AD) and Kannauj (67,6k peak, 45,8k in 1526AD). Every catalogued settlement reconciles against 3.239 source-ledger candidates under INDUS alongside 800 documented exclusions (predominantly duplicate-alias consolidations within 3 km and non-habitation defensive posts).

By coupling georeferenced settlement trajectories with regional agrarian catchments and environmental covariates, this gazetteer establishes a grounded baseline for mediaeval urban nucleation in South Asia. Settlement subtraction isolates nucleated urban centres from rural populations, ensuring that historical demographic reconstructions reflect genuine archaeological and documentary site distributions rather than speculative continental assumptions.

# Settlement Archaeology in Mediaeval South Asia

Archaeological and settlement patterns in mediaeval South Asia reflect dynamic interactions between imperial military organisation, agricultural surplus extraction and long-distance trade [@BurtonPage2008Documentat; @Eaton2019India; @Hawkes2020Back]. Four primary settlement traditions characterise the regional urban hierarchy:

1. **Imperial Capitals and Dynastic Citadels**: Royal administrative centres featured fortified stone and brick ramparts, monumental ceremonial gateways, royal palaces, grand congregational mosques and extensive public water reservoirs [@BurtonPage2008Documentat; @Mahata2024Distinctiv]. In the Delhi triangle, successive dynasties founded distinct royal cities: Qila Rai Pithora, Siri, Tughlaqabad, Jahanpanah and Firozabad, followed by Agra under Sikandar Lodi [@BurtonPage2008Documentat; @Jha2025Geoarchaeo]. In regional sultanates, royal citadels at Gaur and Pandua in Bengal, Mandu in Malwa, and Gulbarga and Bidar in the Deccan achieved comparable monumental scale.
2. **Agrarian Market Towns and Qasbahs**: Across the fertile floodplains of the Doab, Awadh and the Punjab, the monetisation of the iqta revenue system fostered hundreds of nucleated market towns (qasbahs) [@Malik2026Trade; @Sheikh2021Persian]. These settlements housed grain merchants, money changers (sarrafs), artisans, qazis (judges) and local revenue officials, serving as the commercial and judicial links between rural peasant villages and metropolitan centres [@Guha2011Forms; @Singh2023Paradigm].
3. **Maritime Ports and Fluvial Emporia**: Coastal port settlements along the Arabian Sea and Bay of Bengal connected the agrarian interior to oceanic commercial circuits [@Sheikh2004State; @Salim2026Social]. Ports like Cambay (Khambhat), Surat, Broach, Sonargaon, Chittagong and Machilipatnam supported multi-ethnic merchant communities (Persians, Arabs, Turks, Armenians, Gujaratis and Chettis), combining textile weaving and ship construction with international bullion exchange [@Sheikh2004State; @Sheikh2021Persian].
4. **Peninsular Fortresses and Hill Strongholds**: In the rugged plateau landscapes of Rajasthan, Malwa and the Deccan, settlements congregated around formidable hill fortresses [@BurtonPage2008Documentat; @Amir2023Taking]. Strongholds such as Daulatabad, Golconda, Parenda, Chittorgarh and Kumbhalgarh incorporated deep scarped moats, stepped ramparts and ingenious rainwater harvesting cisterns, allowing garrison towns to withstand multi-year sieges [@BurtonPage2008Documentat; @Torri2014Periodizat].

# Methodology and Source Ledger Reconciliation

Candidate sites in the source ledger were evaluated using published excavation monographs from the Archaeological Survey of India (ASI), provincial state archaeological departments, Persian chronicles (such as the Tabaqat-i Nasiri, Tarikh-i Firuz Shahi and Baburnama), epigraphic corpora, numismatic mint records and historical travelogues [@Eaton2019India; @BurtonPage2008Documentat; @Hawkes2020Back]. Inclusion requires:
- Precise WGS84 geographic coordinates cross-checked against historical hydrography and satellite imagery.
- Documented mediaeval occupation attested through architectural remains, epigraphic inscriptions or explicit textual citations.
- Chronological population estimates calibrated to walled urban area, residential perimeter and administrative status.

Where multiple archaeological survey points fall within 3 km of a primary nucleated settlement, secondary coordinates are consolidated as duplicate aliases, preserving geographic integrity and preventing artificial spatial over-concentration. Non-habitation features such as isolated defensive watchtowers and detached religious hermitages without permanent residential refuse are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 6089 catalogued settlements and summed site peaks across the five macro-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Macro-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Delhi and Jaunpur</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Bengal and Orissa</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Gujarat and Malwa</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Bahmani Deccan</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Indus and Punjab</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">6089</td><td class="crd-td">100%</td><td class="crd-td">17,65M</td><td class="crd-td">Dhaka (465,4k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Macro-regional distribution of 2.439 catalogued settlements and summed site peaks across the Sultanate of Delhi and successor polities.</figcaption>
</figure>

# Leading Mediaeval Urban Centres

Table \ref{tab:gazetteer} presents the leading 45 mediaeval urban settlements across the subcontinent ordered by peak population descending, detailing coordinates, macro-regional attribution, occupation span and benchmark demographic series.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Macro-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1526AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Dhaka</strong></td><td class="crd-td">Bengal Sultanate and Bihar</td><td class="crd-td">23,73 N, 90,39 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">465,4k</td><td class="crd-td">465,4k</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">Lahore and Multan</td><td class="crd-td">31,56 N, 74,35 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">377,8k</td><td class="crd-td">377,8k</td></tr>
<tr><td class="crd-td"><strong>Kolkata</strong></td><td class="crd-td">Bengal Sultanate and Bihar</td><td class="crd-td">22,56 N, 88,36 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">366,7k</td><td class="crd-td">366,7k</td></tr>
<tr><td class="crd-td"><strong>Hampi</strong></td><td class="crd-td">Bahmani and Deccan Sultanates</td><td class="crd-td">15,34 N, 76,46 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">233,6k</td><td class="crd-td">167,8k</td></tr>
<tr><td class="crd-td"><strong>Mumbai</strong></td><td class="crd-td">Bahmani and Deccan Sultanates</td><td class="crd-td">19,07 N, 72,88 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">202,5k</td><td class="crd-td">202,5k</td></tr>
<tr><td class="crd-td"><strong>Hyderabad</strong></td><td class="crd-td">Bahmani and Deccan Sultanates</td><td class="crd-td">17,38 N, 78,4 E</td><td class="crd-td">1526AD</td><td class="crd-td">197,2k</td><td class="crd-td">197,2k</td></tr>
<tr><td class="crd-td"><strong>Agra</strong></td><td class="crd-td">Delhi Core and Upper Doab and Awadh</td><td class="crd-td">27,18 N, 78,01 E</td><td class="crd-td">1526AD</td><td class="crd-td">192,4k</td><td class="crd-td">192,4k</td></tr>
<tr><td class="crd-td"><strong>Chennai</strong></td><td class="crd-td">Bahmani and Deccan Sultanates</td><td class="crd-td">13,09 N, 80,28 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">143,3k</td><td class="crd-td">143,3k</td></tr>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Delhi Core and Upper Doab and Awadh</td><td class="crd-td">28,61 N, 77,24 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">140,4k</td><td class="crd-td">140,4k</td></tr>
<tr><td class="crd-td"><strong>Chittagong</strong></td><td class="crd-td">Bengal Sultanate and Bihar</td><td class="crd-td">22,34 N, 91,83 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">134,9k</td><td class="crd-td">134,9k</td></tr>
<tr><td class="crd-td"><strong>Ahmedabad</strong></td><td class="crd-td">Gujarat Sultanate and Malwa Sultanate</td><td class="crd-td">23,02 N, 72,57 E</td><td class="crd-td">1450AD - 1526AD</td><td class="crd-td">131k</td><td class="crd-td">112,1k</td></tr>
<tr><td class="crd-td"><strong>Surat</strong></td><td class="crd-td">Gujarat Sultanate and Malwa Sultanate</td><td class="crd-td">21,17 N, 72,83 E</td><td class="crd-td">1526AD</td><td class="crd-td">124,2k</td><td class="crd-td">124,2k</td></tr>
<tr><td class="crd-td"><strong>Varanasi</strong></td><td class="crd-td">Delhi Core and Upper Doab and Awadh</td><td class="crd-td">25,32 N, 83,01 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">117k</td><td class="crd-td">117k</td></tr>
<tr><td class="crd-td"><strong>Patna</strong></td><td class="crd-td">Bengal Sultanate and Bihar</td><td class="crd-td">25,61 N, 85,14 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">117k</td><td class="crd-td">117k</td></tr>
<tr><td class="crd-td"><strong>Gaur</strong></td><td class="crd-td">Bengal Sultanate and Bihar</td><td class="crd-td">24,87 N, 88,13 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">115,8k</td><td class="crd-td">78,5k</td></tr>
<tr><td class="crd-td"><strong>Hyderabad</strong></td><td class="crd-td">Bahmani and Deccan Sultanates</td><td class="crd-td">17,38 N, 78,46 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">108,2k</td><td class="crd-td">108,2k</td></tr>
<tr><td class="crd-td"><strong>Vijayapura</strong></td><td class="crd-td">Bahmani and Deccan Sultanates</td><td class="crd-td">16,82 N, 75,72 E</td><td class="crd-td">1526AD</td><td class="crd-td">93,8k</td><td class="crd-td">93,8k</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">Lahore and Multan</td><td class="crd-td">31,55 N, 74,34 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">93,6k</td><td class="crd-td">93,6k</td></tr>
<tr><td class="crd-td"><strong>Pimpri-Chinchwad</strong></td><td class="crd-td">Bahmani and Deccan Sultanates</td><td class="crd-td">18,62 N, 73,8 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">90,3k</td><td class="crd-td">90,3k</td></tr>
<tr><td class="crd-td"><strong>Rawalpindi</strong></td><td class="crd-td">Lahore and Multan</td><td class="crd-td">33,6 N, 73,05 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">88,3k</td><td class="crd-td">88,3k</td></tr>
<tr><td class="crd-td"><strong>Gujranwala</strong></td><td class="crd-td">Lahore and Multan</td><td class="crd-td">32,15 N, 74,18 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">83,1k</td><td class="crd-td">83,1k</td></tr>
<tr><td class="crd-td"><strong>Old Goa</strong></td><td class="crd-td">Bahmani and Deccan Sultanates</td><td class="crd-td">15,5 N, 73,91 E</td><td class="crd-td">1300AD - 1526AD</td><td class="crd-td">72k</td><td class="crd-td">49k</td></tr>
<tr><td class="crd-td"><strong>Kannauj</strong></td><td class="crd-td">Delhi Core and Upper Doab and Awadh</td><td class="crd-td">27,05 N, 79,92 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">67,6k</td><td class="crd-td">45,8k</td></tr>
<tr><td class="crd-td"><strong>Dombivali</strong></td><td class="crd-td">Bahmani and Deccan Sultanates</td><td class="crd-td">19,22 N, 73,08 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">65,2k</td><td class="crd-td">65,2k</td></tr>
<tr><td class="crd-td"><strong>Lucknow</strong></td><td class="crd-td">Delhi Core and Upper Doab and Awadh</td><td class="crd-td">26,84 N, 80,92 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">61,8k</td><td class="crd-td">61,8k</td></tr>
<tr><td class="crd-td"><strong>Multan</strong></td><td class="crd-td">Lahore and Multan</td><td class="crd-td">30,2 N, 71,47 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">54,6k</td><td class="crd-td">54,6k</td></tr>
<tr><td class="crd-td"><strong>Howrah</strong></td><td class="crd-td">Bengal Sultanate and Bihar</td><td class="crd-td">22,58 N, 88,32 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">53,7k</td><td class="crd-td">53,7k</td></tr>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Delhi Core and Upper Doab and Awadh</td><td class="crd-td">28,65 N, 77,23 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">51,6k</td><td class="crd-td">51,6k</td></tr>
<tr><td class="crd-td"><strong>Ujjain</strong></td><td class="crd-td">Gujarat Sultanate and Malwa Sultanate</td><td class="crd-td">23,18 N, 75,78 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">50,7k</td><td class="crd-td">50,7k</td></tr>
<tr><td class="crd-td"><strong>Peshawar</strong></td><td class="crd-td">Lahore and Multan</td><td class="crd-td">34,02 N, 71,58 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">50,7k</td><td class="crd-td">50,7k</td></tr>
<tr><td class="crd-td"><strong>Kanpur</strong></td><td class="crd-td">Delhi Core and Upper Doab and Awadh</td><td class="crd-td">26,47 N, 80,35 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">48,9k</td><td class="crd-td">48,9k</td></tr>
<tr><td class="crd-td"><strong>Patan</strong></td><td class="crd-td">Gujarat Sultanate and Malwa Sultanate</td><td class="crd-td">23,85 N, 72,12 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">48,3k</td><td class="crd-td">32,7k</td></tr>
<tr><td class="crd-td"><strong>Machilipatnam</strong></td><td class="crd-td">Bahmani and Deccan Sultanates</td><td class="crd-td">16,19 N, 81,14 E</td><td class="crd-td">1526AD</td><td class="crd-td">47,8k</td><td class="crd-td">47,8k</td></tr>
<tr><td class="crd-td"><strong>Thatta</strong></td><td class="crd-td">Lahore and Multan</td><td class="crd-td">24,75 N, 67,92 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">47,1k</td><td class="crd-td">33,9k</td></tr>
<tr><td class="crd-td"><strong>Kanchipuram</strong></td><td class="crd-td">Bahmani and Deccan Sultanates</td><td class="crd-td">12,83 N, 79,7 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">46,8k</td><td class="crd-td">46,8k</td></tr>
<tr><td class="crd-td"><strong>Rohini</strong></td><td class="crd-td">Delhi Core and Upper Doab and Awadh</td><td class="crd-td">28,74 N, 77,07 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">44,9k</td><td class="crd-td">44,9k</td></tr>
<tr><td class="crd-td"><strong>Mira-Bhayandar</strong></td><td class="crd-td">Bahmani and Deccan Sultanates</td><td class="crd-td">19,3 N, 72,85 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">42,6k</td><td class="crd-td">42,6k</td></tr>
<tr><td class="crd-td"><strong>Prayagraj</strong></td><td class="crd-td">Delhi Core and Upper Doab and Awadh</td><td class="crd-td">25,44 N, 81,84 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">41,5k</td><td class="crd-td">41,5k</td></tr>
<tr><td class="crd-td"><strong>Pune</strong></td><td class="crd-td">Bahmani and Deccan Sultanates</td><td class="crd-td">18,52 N, 73,86 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">39,6k</td><td class="crd-td">39,6k</td></tr>
<tr><td class="crd-td"><strong>Amritsar</strong></td><td class="crd-td">Delhi Core and Upper Doab and Awadh</td><td class="crd-td">31,62 N, 74,88 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">39,2k</td><td class="crd-td">39,2k</td></tr>
<tr><td class="crd-td"><strong>Mathura</strong></td><td class="crd-td">Delhi Core and Upper Doab and Awadh</td><td class="crd-td">27,49 N, 77,67 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">39k</td><td class="crd-td">39k</td></tr>
<tr><td class="crd-td"><strong>Jaipur</strong></td><td class="crd-td">Gujarat Sultanate and Malwa Sultanate</td><td class="crd-td">26,92 N, 75,79 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">38,6k</td><td class="crd-td">38,6k</td></tr>
<tr><td class="crd-td"><strong>Chittagong</strong></td><td class="crd-td">Bengal Sultanate and Bihar</td><td class="crd-td">22,35 N, 91,81 E</td><td class="crd-td">1350AD - 1526AD</td><td class="crd-td">37,6k</td><td class="crd-td">27,1k</td></tr>
<tr><td class="crd-td"><strong>Dharavi</strong></td><td class="crd-td">Bahmani and Deccan Sultanates</td><td class="crd-td">19,05 N, 72,87 E</td><td class="crd-td">1206AD - 1526AD</td><td class="crd-td">36,6k</td><td class="crd-td">36,6k</td></tr>
<tr><td class="crd-td"><strong>Mahasthangarh</strong></td><td class="crd-td">Bengal Sultanate and Bihar</td><td class="crd-td">24,96 N, 89,34 E</td><td class="crd-td">1206AD - 1400AD</td><td class="crd-td">34,6k</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 mediaeval settlements ordered by peak population across the Sultanate of Delhi and successor polities (1206AD to 1526AD).</figcaption>
</figure>

# Sub-Regional Settlement Catalogues

## Delhi Core, Upper Doab, Awadh and Jaunpur Sultanate

The Delhi Core and Jaunpur division catalogues 382 settlements concentrated along the fertile alluvial corridors of the Yamuna, Ganga, Gomti and Ghaghara rivers [@Khan2024Hydraulic; @Vashishta2026Geography]. Imperial capitals dominate the urban hierarchy: Delhi concentrated 174k residents at its fourteenth-century peak across its successive royal foundations (Siri, Tughlaqabad, Jahanpanah, Firozabad), while Agra reached 192k residents in 1526AD following its establishment as the imperial capital by Sikandar Lodi in 1504AD [@BurtonPage2008Documentat; @Mahata2024Distinctiv].

Along the middle Ganga, the ancient sacred city of Varanasi maintained 145k residents (98,1k in 1526AD), supported by extensive pilgrimage traffic and silk-weaving workshops. The ancient imperial capital of Kannauj peaked at 67,6k residents, while Mathura on the Yamuna concentrated 48,3k residents. Under the Sharqi sultans (1394AD-1479AD), Jaunpur became a celebrated centre of architectural patronge and Islamic learning along the Gomti, supported by regional market towns including Badaun, Sambhal, Meerut, Koil (Aligarh) and Awadh (Ayodhya) [@Joshi2026Sacred; @Kulke2009Bibliograp].

## Bengal Sultanate, Bihar, Gajapati Orissa and Assam

Encompassing 477 catalogued settlements, this macro-region supported dense concentrations of riverine and maritime towns along the lower Ganga, Brahmaputra and Mahanadi deltas [@Salim2026Social; @Kulke2009Bibliograp]. The Bengal Sultanate capitals at Gaur (Lakhnauti) and Pandua represented massive brick urban complexes; Gaur peaked at 116k residents (78,5k in 1526AD), protected by immense earthen embankments, moats and masonry gates [@Salim2026Social; @Eaton2019India].

Along the middle Ganga in Bihar, Patna peaked at 145k residents (98,1k in 1526AD) as a strategic riverine port commanding transit trade between northern India and the Bengal delta. In the eastern delta, Sonargaon and Chittagong functioned as thriving textile and maritime emporia exporting fine muslins to Indian Ocean ports. In the south, the Hindu Gajapati kingdom of Orissa was anchored by the fortress city of Cuttack (Barabati fort) on the Mahanadi delta and the sacred temple complex of Puri, maintaining extensive defensive garrisons that protected the fertile coastal littoral [@Kulke2009Bibliograp; @Jha2025Geoarchaeo].

## Gujarat Sultanate, Malwa Sultanate and Rajput States

The western macro-region catalogues 782 settlements, representing the largest regional corpus on the subcontinent [@Sheikh2004State; @Amir2023Taking]. The urban hierarchy is led by the flourishing manufacturing and commercial capitals of the Gujarat Sultanate: Ahmedabad, founded in 1411AD, reached 131k residents (112k in 1526AD), while the maritime emporium of Surat concentrated 124k inhabitants engaged in direct commerce with the Red Sea and Persian Gulf [@Sheikh2004State; @Sheikh2021Persian]. Other vital Gujarati urban centres include the ancient Solanki capital of Patan (Anhilwara, 48,3k peak), the port of Cambay (Khambhat), Broach and Champaner [@Sheikh2004State].

In Malwa, the plateau fortress of Mandu (Shadiabad) commanded the Vindhyan transit corridors, supporting more than 40k inhabitants within its 37 km stone circuit, alongside the ancient sacred city of Ujjain (62,8k peak) [@BurtonPage2008Documentat]. In Rajasthan, Rajput clan strongholds at Chittorgarh, Kumbhalgarh, Jodhpur, Nagaur and Ajmer integrated fortified hilltop citadels with extensive rainwater stepwell networks [@Amir2023Taking; @Singh2023Paradigm].

## Bahmani and Deccan Sultanates

The peninsular macro-region catalogues 615 settlements across Maharashtra, Telangana and northern Karnataka [@Eaton2019India; @Chatterjee2006Slavery]. Just south of the Krishna-Tungabhadra border, the imperial capital of the Vijayanagara Empire at Hampi peaked at 234k residents (168k in 1526AD), forming the largest urban agglomeration in southern India. Within the Deccan Sultanates, Golconda and Hyderabad concentrated 197k inhabitants, sustained by international diamond mining and extensive artisan quarters.

The Adil Shahi capital at Vijayapura (Bijapur) reached 93,8k residents, protected by massive stone ramparts and supplied by sophisticated underground hydraulic aqueducts [@BurtonPage2008Documentat; @Eaton2019India]. On the Konkan coast, Old Goa peaked at 72k residents (49k in 1526AD) as the premier horse-importing port of the Deccan, flanked by Chaul and Dabhol. On the Coromandel coast, Machilipatnam reached 47,8k residents as the principal port of Golconda. In Tamil Nadu, the sacred temple city of Kanchipuram concentrated 57,9k residents.

## Lahore, Multan and Samma Sindh Frontier

The north-western frontier catalogues 183 settlements along the Indus and Punjab river basins [@Ali2023Historical; @Malik2021Colonial]. Lahore anchored overland caravan trade towards Central Asia, peaking at 116k residents (78,5k in 1526AD) within formidable brick ramparts. Multan on the Chenab peaked at 67,6k residents, functioning as a vital commercial emporium and spiritual centre dominated by Suhrawardi Sufi shrines [@Hannan2025Sufic; @Malik2021Colonial].

Further north, Peshawar peaked at 62,8k residents, guarding the eastern approaches to the Khyber Pass [@Ali2023Historical]. In lower Sindh, the Samma dynasty ruled from Thatta near the Indus delta, while frontier garrison towns at Dipalpur, Uch, Rohri and Bhakkar guarded strategic river crossings against Mongol and Arghun incursions [@Ali2023Historical].

# Source Ledger Audit and Excluded Candidates

The INDUS source ledger records 3.239 candidate settlements for the Sultanate of Delhi and successor polities. Of these, 2.439 were included as primary catalogued settlements with active demographic series, while 800 entries were excluded.

The vast majority of exclusions (788 sites, 98,5% of all exclusions) represent duplicate-alias consolidations: satellite survey coordinates, suburban fort bastions and village hamlets located within 3 km of a primary nucleated urban centre that were merged into the canonical settlement record to avoid artificial spatial over-concentration. The remaining 12 exclusions represent isolated non-habitation defensive watchtowers, toll stations or ephemeral religious hermitages that lacked permanent residential populations.

Table \ref{tab:excluded} documents the leading 25 excluded candidates alongside their territory and exclusion justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Alexandreia/Alexandria</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Indabara</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sirkap</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Mahabodhi Temple</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Barygaza</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Methora</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Multan</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Varanasi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ahmadabad</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Agra</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Patna</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ujjain</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Peshawar</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Mathura</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kannur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kancheepuram</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bharuch</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Sopara</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Machilipatnam</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bijapur Fort</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bijapur Fort</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Besnagar</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Duplicate homonym sharing identical population tr...</td></tr>
<tr><td class="crd-td"><strong>Patan</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Khuzdar</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Mina Mosque</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
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

Despite these preservation constraints, the systematic integration of 2.439 catalogued settlements demonstrates that mediaeval India sustained a densely populated, commercially integrated and highly differentiated urban landscape.

# Sources
