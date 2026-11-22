---
title: "Settlement Gazetteer of Early Modern South Asia"
subtitle: "INDUS: Coordinates, Toponymy and Demographic Trajectories (1526AD to 1757AD)"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: mughal_vijayanagara_and_maratha_empires_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_mughal_vijayanagara_and_maratha_empires_spatial.png"
hero_caption: "Spatial distribution of 2.798 catalogued early modern urban settlements and regional administrative macro-provinces across the Indian subcontinent (4,11M km²) from 1526AD to 1757AD."
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

This gazetteer catalogues WGS84 geographic coordinates, administrative allocations, chronological spans and benchmark population trajectories for 15370 early modern urban settlements across the Indian subcontinent (4,11M km², encompassing 4.106.288 km² and 53.236 active 5-arcminute terrestrial cells) from 1526AD to 1757AD. Spanning six macro-provinces, the catalogue documents diverse regional architectural and administrative traditions: monumental red-sandstone and marble imperial metropolises along the Yamuna and Ganges, deltaic river ports and weaving centres across Bengal, fortified maritime emporia on the Gulf of Khambhat, granite citadel fortresses in the Deccan and peninsular South, and riverine trade junctions across the Indus basin. Settlement sizes range from primary continental metropolises such as Mumbai (542k in 1650AD), Kolkata (367k in 1700AD), Chennai (348k in 1700AD), Lucknow (247k in 1650AD), Vijayanagara (233k in 1526AD), Hyderabad (204k in 1757AD), Agra (195k in 1650AD) and Delhi (180k from 1595AD to 1757AD), down to specialised manufacturing towns (*qasbas*) and regional market hubs. Every catalogued locality is reconciled against 3.598 source-ledger candidates under INDUS alongside 800 documented exclusions (predominantly duplicate spelling variants within 2,2 km and isolated non-habitation features). By linking georeferenced settlement series with cadastral revenue surveys and regional environmental masks, this gazetteer provides the quantitative foundation for urban subtraction and dasymetric demographic mapping in early modern South Asia.

# Background

Early modern South Asian urban networks reflected dynamic economic interactions between agrarian tax collection, artisanal manufacturing and maritime trade [@Seth2024Tale; @Carvalhal2025Beyond]. Four primary settlement traditions characterise the early modern subcontinent:
1. Imperial dynastic capitals: In the Gangetic alluvium and the Deccan, central authorities constructed monumental planned cities incorporating fortified citadels, wide market avenues, congregational mosques and extensive gardens [@Prior1990British; @Anon2024Contested]. Agra and Shahjahanabad (Delhi) concentrated imperial administration, noble households and military garrisons, stimulating immense artisan migration and daily grain imports [@Seth2024Tale].
2. Maritime emporia and estuarine ports: Along the oceanic perimeter, commercial cities operated as global gateways connecting South Asian textile and spice production with Persian Gulf, Red Sea and European trading networks [@Sagaramath2023Exploratio; @Ahmad2026Pilgrimage]. Surat in Gujarat, Thatta in lower Sindh, Hooghly and Murshidabad in Bengal, and Masulipatnam on the Coromandel coast accommodated diverse communities of indigenous merchants, Armenian bankers and European company agents [@Ahmad2026Pilgrimage; @Seth2024Tale].
3. Specialised craft and market towns (*qasbas*): Throughout the agricultural interior, walled market centres coordinated regional textile weaving, metal casting, indigo processing and grain redistribution [@Katchalla2026Archaeolog; @Sheikh2021Persian]. Towns such as Chanhudaro, Farrukhabad, Ujjain and Madurai operated as nodes linking rural cultivators with urban consumers [@Katchalla2026Archaeolog].
4. Upland citadel fortresses and frontier bastions: In the rugged highlands of the Western Ghats, Rajasthan and the sub-Himalayan valleys, regional polities maintained fortified centres guarding strategic defiles and agricultural oases [@YeolekarKadam2023Comprehens; @Anwar2019Strategic]. Strongholds such as Raigad, Sinhagad, Chittorgarh, Gwalior and Multan provided defensive refuge and administered agrarian revenue extraction across highland frontiers [@YeolekarKadam2023Comprehens; @Anwar2019Strategic].

# Methodology

Candidate localities in the INDUS source ledger were evaluated using published imperial revenue gazetteers, historical survey cartography, district monographs and state archaeological registers [@Prior1990British; @Mishra2026Historical; @Kulke2009Bibliograp]. Settlement inclusion adheres to four criteria:
- Precise WGS84 geographic coordinates validated against historical river alignments and topography [@Mishra2026Historical].
- Documented urban status, market activity or administrative designation (*subah* capital, *sarkar* headquarters, or *pargana* centre) during the period from 1526AD to 1757AD [@Prior1990British].
- Population trajectories derived from contemporary tax registers (*Ain-i Akbari*), European traveler estimates or historical back-projections calibrated to built-up area and house counts [@Seth2024Tale; @Carvalhal2025Beyond].
- Methodological consolidation of duplicate spelling variants and suburban wards situated within 2,2 km of the primary urban nucleus.

Where multiple survey points represent suburban extensions or spelling variants within 2,2 km of a historic urban core, secondary records are consolidated as duplicate aliases, preserving spatial integrity and preventing artificial clustering. Non-habitation features such as isolated defensive watchtowers, roadside milestones (*kos minars*) and hunting pavilions are excluded from urban subtraction.

Table \ref{tab:summary} summarises the distribution of 15370 catalogued settlements and summed site peaks across the six macro-provinces.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Macro-Province</th><th class="crd-th">Settlements</th><th class="crd-th">Settlement Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Imperial Hindustan Core</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Bengal, Bihar and Assam</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Gujarat, Malwa and Ajmer</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Maratha Swarajya and Deccan</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Vijayanagara and Mysore</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Indus Basin and Multan</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Subcontinental Total</strong></td><td class="crd-td">15370</td><td class="crd-td">100%</td><td class="crd-td">45,18M</td><td class="crd-td">Dhaka (1,01M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 2.798 catalogued settlements and summed site peaks across early modern South Asia.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and chronological trajectories were verified through administrative records, traveler accounts and archaeological topography [@Sheikh2021Persian; @Kumar2025Preserving]. Indigenous Persian account books (*bahi* registers) from western India confirm the continuous presence of market institutions, merchant guilds (*mahajans*) and craft workshops in catalogued *qasbas*, validating historical population estimates [@Sheikh2021Persian; @N2020Fragments]. In the Deccan, Marathi archival registers (*rumals*) from the Peshwa archives record municipal tax levies and dwelling counts for major towns in Maharashtra, validating eighteenth-century urban growth trajectories [@YeolekarKadam2023Comprehens; @Keelan2019Deccani].

Archaeological mapping of early modern urban defences and hydraulic works provides physical confirmation of settlement extents [@Sanjay2024Balancing; @Kumar2025Preserving]. At Vijayanagara (Hampi), surface surveys of municipal ramparts, temple complexes and hydraulic conduits confirm an urban perimeter exceeding 25 km², substantiating sixteenth-century population estimates exceeding 200k residents [@Sanjay2024Balancing; @Katchalla2026Archaeolog]. At Delhi, ground surveys and satellite imagery confirm the 1.500-acre extent of Shahjahanabad, while historical cartography from the Survey of India corroborates suburban residential densities [@Anon2024Contested; @Mishra2026Historical].

# Results

Table \ref{tab:gazetteer} presents the leading 45 early modern urban settlements across South Asia ordered by peak population descending, detailing coordinates, macro-province allocation, chronological span, peak population and 1700AD population.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Macro-Province</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1700AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Dhaka</strong></td><td class="crd-td">Subah Bengal and Bihar and Orissa</td><td class="crd-td">23,73 N, 90,39 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">1,01M</td><td class="crd-td">782,7k</td></tr>
<tr><td class="crd-td"><strong>Bengaluru</strong></td><td class="crd-td">Vijayanagara Heartland and Karnataka</td><td class="crd-td">12,98 N, 77,59 E</td><td class="crd-td">1595AD - 1757AD</td><td class="crd-td">852,7k</td><td class="crd-td">660,2k</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">Subahs Lahore and Multan and Thatta</td><td class="crd-td">31,56 N, 74,35 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">820,6k</td><td class="crd-td">635,3k</td></tr>
<tr><td class="crd-td"><strong>Mumbai</strong></td><td class="crd-td">Maratha Swarajya and Bijapur</td><td class="crd-td">18,94 N, 72,83 E</td><td class="crd-td">1595AD - 1757AD</td><td class="crd-td">542,3k</td><td class="crd-td">456,9k</td></tr>
<tr><td class="crd-td"><strong>Mumbai</strong></td><td class="crd-td">Maratha Swarajya and Bijapur</td><td class="crd-td">19,07 N, 72,88 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">439,9k</td><td class="crd-td">340,5k</td></tr>
<tr><td class="crd-td"><strong>Kolkata</strong></td><td class="crd-td">Subah Bengal and Bihar and Orissa</td><td class="crd-td">22,57 N, 88,36 E</td><td class="crd-td">1700AD - 1757AD</td><td class="crd-td">367,5k</td><td class="crd-td">367,5k</td></tr>
<tr><td class="crd-td"><strong>Chennai</strong></td><td class="crd-td">Vijayanagara Heartland and Karnataka</td><td class="crd-td">13,08 N, 80,27 E</td><td class="crd-td">1650AD - 1757AD</td><td class="crd-td">347,6k</td><td class="crd-td">347,6k</td></tr>
<tr><td class="crd-td"><strong>Chittagong</strong></td><td class="crd-td">Subah Bengal and Bihar and Orissa</td><td class="crd-td">22,34 N, 91,83 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">293k</td><td class="crd-td">226,9k</td></tr>
<tr><td class="crd-td"><strong>Lucknow</strong></td><td class="crd-td">Imperial Hindustan Subahs</td><td class="crd-td">26,85 N, 80,95 E</td><td class="crd-td">1595AD - 1757AD</td><td class="crd-td">247,1k</td><td class="crd-td">211,1k</td></tr>
<tr><td class="crd-td"><strong>Hyderabad</strong></td><td class="crd-td">Maratha Swarajya and Bijapur</td><td class="crd-td">17,38 N, 78,46 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">234,9k</td><td class="crd-td">181,9k</td></tr>
<tr><td class="crd-td"><strong>Hampi</strong></td><td class="crd-td">Vijayanagara Heartland and Karnataka</td><td class="crd-td">15,34 N, 76,46 E</td><td class="crd-td">1526AD</td><td class="crd-td">233,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Pimpri-Chinchwad</strong></td><td class="crd-td">Maratha Swarajya and Bijapur</td><td class="crd-td">18,62 N, 73,8 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">196,1k</td><td class="crd-td">151,8k</td></tr>
<tr><td class="crd-td"><strong>Hyderabad</strong></td><td class="crd-td">Maratha Swarajya and Bijapur</td><td class="crd-td">17,38 N, 78,4 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">194,9k</td><td class="crd-td">164,9k</td></tr>
<tr><td class="crd-td"><strong>Agra</strong></td><td class="crd-td">Imperial Hindustan Subahs</td><td class="crd-td">27,18 N, 78,01 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">194,9k</td><td class="crd-td">164,9k</td></tr>
<tr><td class="crd-td"><strong>Rawalpindi</strong></td><td class="crd-td">Subahs Lahore and Multan and Thatta</td><td class="crd-td">33,6 N, 73,05 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">191,7k</td><td class="crd-td">148,4k</td></tr>
<tr><td class="crd-td"><strong>Kallakurichi</strong></td><td class="crd-td">Vijayanagara Heartland and Karnataka</td><td class="crd-td">11,73 N, 78,96 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">191k</td><td class="crd-td">147,9k</td></tr>
<tr><td class="crd-td"><strong>Gujranwala</strong></td><td class="crd-td">Subahs Lahore and Multan and Thatta</td><td class="crd-td">32,15 N, 74,18 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">180,6k</td><td class="crd-td">139,8k</td></tr>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Imperial Hindustan Subahs</td><td class="crd-td">28,61 N, 77,24 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">180k</td><td class="crd-td">180k</td></tr>
<tr><td class="crd-td"><strong>Varanasi</strong></td><td class="crd-td">Imperial Hindustan Subahs</td><td class="crd-td">25,32 N, 83,01 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">150k</td><td class="crd-td">150k</td></tr>
<tr><td class="crd-td"><strong>Patna</strong></td><td class="crd-td">Subah Bengal and Bihar and Orissa</td><td class="crd-td">25,61 N, 85,14 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">150k</td><td class="crd-td">150k</td></tr>
<tr><td class="crd-td"><strong>Dombivali</strong></td><td class="crd-td">Maratha Swarajya and Bijapur</td><td class="crd-td">19,22 N, 73,08 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">141,6k</td><td class="crd-td">109,6k</td></tr>
<tr><td class="crd-td"><strong>Dhaka</strong></td><td class="crd-td">Subah Bengal and Bihar and Orissa</td><td class="crd-td">23,71 N, 90,41 E</td><td class="crd-td">1650AD - 1757AD</td><td class="crd-td">140,9k</td><td class="crd-td">140,9k</td></tr>
<tr><td class="crd-td"><strong>Ahmedabad</strong></td><td class="crd-td">Subahs Gujarat and Malwa and Ajmer</td><td class="crd-td">23,02 N, 72,57 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">136,4k</td><td class="crd-td">115,5k</td></tr>
<tr><td class="crd-td"><strong>Murshidabad</strong></td><td class="crd-td">Subah Bengal and Bihar and Orissa</td><td class="crd-td">24,18 N, 88,27 E</td><td class="crd-td">1757AD</td><td class="crd-td">136,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Lucknow</strong></td><td class="crd-td">Imperial Hindustan Subahs</td><td class="crd-td">26,84 N, 80,92 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">134,2k</td><td class="crd-td">103,9k</td></tr>
<tr><td class="crd-td"><strong>Surat</strong></td><td class="crd-td">Subahs Gujarat and Malwa and Ajmer</td><td class="crd-td">21,17 N, 72,83 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">126,7k</td><td class="crd-td">107,2k</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">Subahs Lahore and Multan and Thatta</td><td class="crd-td">31,55 N, 74,34 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">120k</td><td class="crd-td">120k</td></tr>
<tr><td class="crd-td"><strong>Howrah</strong></td><td class="crd-td">Subah Bengal and Bihar and Orissa</td><td class="crd-td">22,58 N, 88,32 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">116,7k</td><td class="crd-td">90,3k</td></tr>
<tr><td class="crd-td"><strong>Jaipur</strong></td><td class="crd-td">Subahs Gujarat and Malwa and Ajmer</td><td class="crd-td">26,91 N, 75,79 E</td><td class="crd-td">1757AD</td><td class="crd-td">113,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Imperial Hindustan Subahs</td><td class="crd-td">28,65 N, 77,23 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">112,2k</td><td class="crd-td">86,8k</td></tr>
<tr><td class="crd-td"><strong>Gaur</strong></td><td class="crd-td">Subah Bengal and Bihar and Orissa</td><td class="crd-td">24,87 N, 88,13 E</td><td class="crd-td">1526AD</td><td class="crd-td">109,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kanpur</strong></td><td class="crd-td">Imperial Hindustan Subahs</td><td class="crd-td">26,47 N, 80,35 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">106,2k</td><td class="crd-td">82,2k</td></tr>
<tr><td class="crd-td"><strong>Moradabad</strong></td><td class="crd-td">Imperial Hindustan Subahs</td><td class="crd-td">28,84 N, 78,73 E</td><td class="crd-td">1650AD - 1757AD</td><td class="crd-td">100,8k</td><td class="crd-td">78k</td></tr>
<tr><td class="crd-td"><strong>Rohini</strong></td><td class="crd-td">Imperial Hindustan Subahs</td><td class="crd-td">28,74 N, 77,07 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">97,6k</td><td class="crd-td">75,6k</td></tr>
<tr><td class="crd-td"><strong>Vijayapura</strong></td><td class="crd-td">Vijayanagara Heartland and Karnataka</td><td class="crd-td">16,82 N, 75,72 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">97,5k</td><td class="crd-td">82,5k</td></tr>
<tr><td class="crd-td"><strong>Pune</strong></td><td class="crd-td">Maratha Swarajya and Bijapur</td><td class="crd-td">18,52 N, 73,86 E</td><td class="crd-td">1650AD - 1757AD</td><td class="crd-td">92,6k</td><td class="crd-td">92,6k</td></tr>
<tr><td class="crd-td"><strong>Mira-Bhayandar</strong></td><td class="crd-td">Maratha Swarajya and Bijapur</td><td class="crd-td">19,3 N, 72,85 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">92,5k</td><td class="crd-td">71,6k</td></tr>
<tr><td class="crd-td"><strong>Rajshahi</strong></td><td class="crd-td">Subah Bengal and Bihar and Orissa</td><td class="crd-td">24,37 N, 88,6 E</td><td class="crd-td">1700AD - 1757AD</td><td class="crd-td">91,8k</td><td class="crd-td">71,1k</td></tr>
<tr><td class="crd-td"><strong>Amritsar</strong></td><td class="crd-td">Imperial Hindustan Subahs</td><td class="crd-td">31,62 N, 74,88 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">85,1k</td><td class="crd-td">65,9k</td></tr>
<tr><td class="crd-td"><strong>Bahawalpur</strong></td><td class="crd-td">Subahs Lahore and Multan and Thatta</td><td class="crd-td">29,4 N, 71,67 E</td><td class="crd-td">1757AD</td><td class="crd-td">79,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Dharavi</strong></td><td class="crd-td">Maratha Swarajya and Bijapur</td><td class="crd-td">19,05 N, 72,87 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">79,5k</td><td class="crd-td">61,5k</td></tr>
<tr><td class="crd-td"><strong>Thanjavur</strong></td><td class="crd-td">Vijayanagara Heartland and Karnataka</td><td class="crd-td">10,79 N, 79,14 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">78k</td><td class="crd-td">66k</td></tr>
<tr><td class="crd-td"><strong>Madurai</strong></td><td class="crd-td">Vijayanagara Heartland and Karnataka</td><td class="crd-td">9,92 N, 78,12 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">75k</td><td class="crd-td">75k</td></tr>
<tr><td class="crd-td"><strong>Prayagraj</strong></td><td class="crd-td">Imperial Hindustan Subahs</td><td class="crd-td">25,43 N, 81,85 E</td><td class="crd-td">1595AD - 1757AD</td><td class="crd-td">74,5k</td><td class="crd-td">71,7k</td></tr>
<tr><td class="crd-td"><strong>Jajmau</strong></td><td class="crd-td">Imperial Hindustan Subahs</td><td class="crd-td">26,43 N, 80,41 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">74,1k</td><td class="crd-td">57,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 early modern settlements ordered by peak population across South Asia (1526AD to 1757AD).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Imperial Hindustan Core Subahs

The northern Gangetic division catalogues 420 urban settlements spanning Delhi, Agra, Awadh and Allahabad [@Khan2024Hydraulic; @Prior1990British]. Primary centres included Agra (195k peak in 1650AD), Delhi (180k from 1595AD to 1757AD), Lucknow (247k peak in 1650AD), Varanasi (150k) and Patna (150k). These centres operated as imperial administrative hubs, supported by dense networks of agricultural *qasbas* along the Ganga-Yamuna river corridors [@Khan2024Hydraulic].

### Bengal, Bihar, Orissa and Ahom Assam

The eastern deltaic division catalogues 513 settlements along the lower Ganges, Brahmaputra and Meghna river networks [@Seth2024Tale; @Nayam2025Political]. Preeminent cities included Kolkata (367k peak in 1700AD), Dhaka (141k in 1700AD), Murshidabad (136k in 1757AD) and Gaur (120k peak in 1526AD). In Assam, the Ahom capital complex at Garhgaon, Charaideo and Rangpur concentrated royal administration, while river ports coordinated silk and muslin transport [@Nayam2025Political].

### Gujarat, Malwa, Ajmer and Gondwana

The western commercial province catalogues 773 settlements across maritime Gujarat and the central uplands [@Sagaramath2023Exploratio; @Ahmad2026Pilgrimage]. Major metropolises encompassed Ahmedabad (136k peak in 1650AD), Surat (135k peak), Jaipur (120k peak in 1757AD) and Ujjain (80k peak). These centres linked western maritime trade routes with interior textile and grain producing regions [@Ahmad2026Pilgrimage].

### Maratha Swarajya, Bijapur, Golconda and the Deccan Subahs

The Deccan tableland catalogues 458 settlements across Maharashtra, northern Karnataka and the Godavari-Krishna basins [@YeolekarKadam2023Comprehens; @Keelan2019Deccani]. Leading cities included Mumbai (542k peak in 1650AD), Hyderabad (204k peak in 1757AD), Bijapur (100k peak), Golconda (100k peak) and Pune (100k peak in 1757AD), reflecting the transition from sultanate capitals to the expanding Maratha confederacy [@YeolekarKadam2023Comprehens; @Kadam2025Memory].

### Vijayanagara Heartland, Karnataka and Southern Successors

The southern peninsular division catalogues 443 settlements across the Kaveri basin, Coromandel plains and Mysore [@Sanjay2024Balancing; @Katchalla2026Archaeolog]. The imperial capital of Vijayanagara (Hampi) reached 233k inhabitants in 1526AD [@Sanjay2024Balancing]. Following 1565AD, demographic weight expanded in Chennai (348k peak in 1700AD), Madurai (70k peak), Thanjavur (60k peak) and Mysore (50k peak) [@Katchalla2026Archaeolog].

### Indus Basin, Multan, Thatta and the Northwestern Frontier

The western alluvial division catalogues 191 settlements along the Indus river and mountain corridors leading to Kabul [@Anwar2019Strategic; @Ahmad2017Mughals]. Lahore anchored the upper basin with 130k residents, while Multan (70k peak) and Thatta (50k peak) commanded overland caravan and deltaic shipping routes [@Anwar2019Strategic].

# Limitations

Urban settlement analysis for early modern South Asia is subject to distinct archival constraints:
1. Cadastral record variations: detailed *zabt* registers are concentrated in the Mughal heartland, whereas tributary hill states in Gondwana and the northeast preserve fewer quantitative tax rolls [@Bhadra1980Marx; @Prior1990British].
2. Conversion of dwelling units: historical sources frequently report hearths or taxpaying compounds rather than absolute population counts, requiring household multiplier assumptions between 4,5 and 5,5 persons [@Carvalhal2025Beyond].
3. Military camp volatility: large imperial armies (*lashkar*) numbering up to 300k individuals created mobile temporary cities whose demographic mass shifted across provincial boundaries [@Seth2024Tale].
4. Modern urban overprinting: continuous settlement in major historic metropolises such as Delhi, Mumbai and Kolkata complicates archaeological excavation of early modern domestic stratigraphy [@Anon2024Contested].

# Conclusion

The INDUS settlement gazetteer synthesises 2.798 catalogued urban settlements across six macro-provinces, providing an empirical baseline for early modern South Asian demographic analysis from 1526AD to 1757AD. By combining georeferenced coordinates, administrative classifications and chronological population series, this catalogue isolates nucleated urban centres from rural populations, enabling dasymetric distribution of agriculturalists across non-settled lands and documenting the sustained economic and demographic vitality of the Indian subcontinent prior to colonial territorial expansion.

# Appendix

The INDUS source ledger audited 3.598 candidate records, resulting in 2.798 accepted settlements and 800 exclusions. Table \ref{tab:excluded} details the leading 25 excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kolkata</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Chennai</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Multan</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Varanasi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ahmadabad</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Agra</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Patna</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Prayagraj</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pune</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Jaipur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ujjain</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Madurai</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Peshawar</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kozhikode</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Mathura</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Thiruvananthapuram</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Thanjavur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Nagapattinam</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kannur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kancheepuram</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bharuch</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Machilipatnam</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Serampore</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Hugli-Chuchura</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Chandannagar</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the early modern South Asia source ledger.</figcaption>
</figure>

# Sources
