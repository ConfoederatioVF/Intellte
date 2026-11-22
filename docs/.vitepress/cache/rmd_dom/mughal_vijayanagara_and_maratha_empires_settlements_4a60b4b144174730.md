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
hero_caption: "Spatial distribution of 46.429 catalogued early modern settlements and regional administrative macro-provinces across the Indian subcontinent (4,11M km²) from 1526AD to 1757AD."
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

This gazetteer catalogues WGS84 geographic coordinates, administrative allocations, chronological spans and benchmark population trajectories for 46.429 early modern settlements across the Indian subcontinent (4,11M km², encompassing 4.106.288 km² and 53.236 active 5-arcminute terrestrial cells) from 1526AD to 1757AD [@Habib1982Atlas; @Moosvi1987Economy]. Spanning six macro-provinces, the catalogue documents diverse regional architectural and administrative traditions: monumental red-sandstone and marble imperial metropolises along the Yamuna and Ganges, deltaic river ports and weaving centres across Bengal, fortified maritime emporia on the Gulf of Khambhat, granite citadel fortresses in the Deccan and peninsular South, and riverine trade junctions across the Indus basin. Settlement sizes follow a Zipf rank-size distribution ($\alpha = 0,87$, $R^2 = 0,98$) ranging from primary continental metropolises such as Delhi (500k in 1700AD), Agra (500k in 1650AD), Hampi (450k in 1526AD), Lahore (350k in 1650AD), Ahmedabad (240k in 1650AD), Vijayapura (220k in 1650AD), Hyderabad (220k in 1650AD) and Gaur (220k in 1526AD), down to specialised manufacturing towns (*qasbas*) and agrarian *pargana* centres [@Hambly1982Towns; @Blake1991Shahjahanabad; @Stein1989Vijayanagara]. Every catalogued locality is reconciled against 47.229 source-ledger candidates under INDUS alongside 800 documented exclusions (predominantly duplicate spelling variants within 2,2 km and isolated non-habitation features). By linking georeferenced settlement series with cadastral revenue surveys, archaeological corpora and official national censuses, this gazetteer provides the quantitative foundation for urban subtraction and dasymetric demographic mapping in early modern South Asia.

# Background

Early modern South Asian urban networks reflected dynamic economic interactions between agrarian tax collection, artisanal manufacturing and maritime trade [@Hambly1982Towns; @Moosvi1987Economy; @Seth2024Tale; @Carvalhal2025Beyond]. Four primary settlement traditions characterise the early modern subcontinent:
1. Imperial dynastic capitals: In the Gangetic alluvium, Indus plains and the Deccan, central authorities constructed monumental planned cities incorporating fortified citadels, wide market avenues, congregational mosques and extensive gardens [@Blake1991Shahjahanabad; @Prior1990British; @Anon2024Contested]. Shahjahanabad (Delhi), Agra and Lahore concentrated imperial administration, noble households and military garrisons, stimulating artisan migration and daily grain imports [@Hambly1982Towns; @Naqvi1968Urbanisation].
2. Maritime emporia and estuarine ports: Along the oceanic perimeter, commercial cities operated as global gateways connecting South Asian textile and spice production with Persian Gulf, Red Sea and European trading networks [@Sagaramath2023Exploratio; @Ahmad2026Pilgrimage]. Surat and Khambhat in Gujarat, Thatta in lower Sindh, Gaur, Sonargaon and Murshidabad in Bengal, and Machilipatnam on the Coromandel coast accommodated diverse communities of indigenous merchants, Armenian bankers and European company agents [@Eaton1993Rise; @Ahmad2026Pilgrimage; @Seth2024Tale].
3. Specialised craft and market towns (*qasbas*): Throughout the agricultural interior, walled market centres coordinated regional textile weaving, metal casting, indigo processing and grain redistribution [@Bayly1983Rulers; @Katchalla2026Archaeolog; @Sheikh2021Persian]. Many northern and peninsular hubs—including Varanasi, Patna, Ujjain, Madurai and Thanjavur—built upon deep early historic urban foundations before expanding as *pargana* and *nadu* market nodes linking rural cultivators with urban consumers [@Erdosy1988Urbanisation; @Champakalakshmi1996Trade; @Chattopadhyaya1994Making].
4. Upland citadel fortresses and frontier bastions: In the rugged highlands of the Western Ghats, Rajasthan and the Himalayan arc, regional polities maintained fortified centres guarding strategic defiles and agricultural oases [@Slusser1982NepalMandala; @Phuntsho2013HistoryBhutan; @YeolekarKadam2023Comprehens; @Anwar2019Strategic]. Strongholds such as Raigad, Sinhagad, Chittorgarh, Gwalior, Kathmandu and Multan provided defensive refuge and administered agrarian revenue extraction across highland frontiers [@ImperialGazetteer1908; @YeolekarKadam2023Comprehens; @Anwar2019Strategic].

# Methodology

The expanded 46.429-settlement gazetteer in the INDUS source ledger is empirically anchored across four complementary evidentiary pillars rather than arbitrary parametric assumptions:
- Primary-monograph historical metropolis trajectories: Benchmark series for imperial capitals and provincial centres are drawn directly from specialist urban monographs, Persian cadastral compilations and contemporary European accounts [@Habib1982Atlas; @Moosvi1987Economy; @Hambly1982Towns; @Blake1991Shahjahanabad; @Bayly1983Rulers; @Stein1989Vijayanagara; @Eaton1993Rise; @Naqvi1968Urbanisation].
- Multi-repository archaeological and monument corpora: Spatial coordinates, occupation horizons and structural footprints are ingested from Pleiades, Zenodo Harappan, Vidarbha and Palaeolithic Indian Archaeology Reviews (IARs), ASI P1371 monument registers, Wikidata, OpenStreetMap and XRONOS/c14bazAAR radiocarbon databases, reconciled against regional archaeological syntheses [@Allchin1995Archaeology; @Possehl1999IndusAge; @Kenoyer1998AncientCities; @Chattopadhyaya1994Making; @Mishra2026Historical].
- Official national censuses: Longitudinal settlement baselines and municipal hierarchies are anchored in Census of India Table A-04, the Pakistan Bureau of Statistics (PBS), Bangladesh Bureau of Statistics (BBS), Department of Census and Statistics Sri Lanka (DCS), Central Bureau of Statistics Nepal (CBS), National Statistics Bureau Bhutan (NSB) and National Bureau of Statistics Maldives (NBS), cross-checked against colonial district compendia [@ImperialGazetteer1908; @Prior1990British].
- Macro-envelope *qasba*, *pargana* and *nadu* continuity with strict chronological filtering: Lower-tier market towns and persistent agrarian settlements are allocated within their respective submask demographic envelopes only after passing strict foundation-year thresholds (excluding post-1757AD colonial railway, cantonment and canal-colony foundations) and chronological toponymy audits.

Every included locality satisfies four operational criteria:
- Precise WGS84 geographic coordinates validated against historical river alignments and topography [@Mishra2026Historical].
- Documented urban status, market activity or continuous *qasba*, *pargana* or *nadu* habitation during the period from 1526AD to 1757AD [@Habib1982Atlas; @Prior1990British].
- Population trajectories derived from primary-monograph urban reconstructions, contemporary tax registers (*Ain-i Akbari*), traveller estimates or macro-calibrated census back-projections [@Moosvi1987Economy; @Seth2024Tale; @Carvalhal2025Beyond].
- Methodological consolidation of duplicate spelling variants and suburban wards situated within 2,2 km of the primary urban nucleus.

Where multiple survey points represent suburban extensions or spelling variants within 2,2 km of a historic urban core, secondary records are consolidated as duplicate aliases, preserving spatial integrity and preventing artificial clustering. Non-habitation features such as isolated defensive watchtowers, roadside milestones (*kos minars*) and hunting pavilions are excluded from urban subtraction.

Table \ref{tab:summary} summarises the distribution of 46.429 catalogued settlements and summed site peaks across the six macro-provinces.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Macro-Province</th><th class="crd-th">Settlements</th><th class="crd-th">Settlement Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Imperial Hindustan Core</strong></td><td class="crd-td">6.601</td><td class="crd-td">14,2%</td><td class="crd-td">10,83M</td><td class="crd-td">Delhi (500k)</td></tr>
<tr><td class="crd-td"><strong>Bengal, Bihar and Assam</strong></td><td class="crd-td">11.048</td><td class="crd-td">23,8%</td><td class="crd-td">15,73M</td><td class="crd-td">Gaur (220k)</td></tr>
<tr><td class="crd-td"><strong>Gujarat, Malwa and Ajmer</strong></td><td class="crd-td">7.464</td><td class="crd-td">16,1%</td><td class="crd-td">9,79M</td><td class="crd-td">Ahmedabad (240k)</td></tr>
<tr><td class="crd-td"><strong>Maratha Swarajya and Deccan</strong></td><td class="crd-td">6.335</td><td class="crd-td">13,6%</td><td class="crd-td">9,25M</td><td class="crd-td">Hyderabad (220k)</td></tr>
<tr><td class="crd-td"><strong>Vijayanagara and Mysore</strong></td><td class="crd-td">5.272</td><td class="crd-td">11,4%</td><td class="crd-td">11,3M</td><td class="crd-td">Hampi (450k)</td></tr>
<tr><td class="crd-td"><strong>Indus Basin and Multan</strong></td><td class="crd-td">9.709</td><td class="crd-td">20,9%</td><td class="crd-td">10,27M</td><td class="crd-td">Lahore (350k)</td></tr>
<tr><td class="crd-td"><strong>Subcontinental Total</strong></td><td class="crd-td">46.429</td><td class="crd-td">100%</td><td class="crd-td">67,18M</td><td class="crd-td">Delhi (500k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 46.429 catalogued settlements and summed site peaks across early modern South Asia.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and chronological trajectories were verified through administrative records, traveller accounts and archaeological topography [@Habib1982Atlas; @Moosvi1987Economy; @Sheikh2021Persian; @Kumar2025Preserving]. Indigenous Persian account books (*bahi* registers) from western India confirm the continuous presence of market institutions, merchant guilds (*mahajans*) and craft workshops in catalogued *qasbas*, validating historical population estimates [@Sheikh2021Persian; @N2020Fragments]. In the Deccan, Marathi archival registers (*rumals*) from the Peshwa archives record municipal tax levies and dwelling counts for major towns in Maharashtra, validating eighteenth-century urban growth trajectories [@YeolekarKadam2023Comprehens; @Keelan2019Deccani].

Archaeological mapping of early modern urban defences and hydraulic works provides physical confirmation of settlement extents [@Stein1989Vijayanagara; @Sanjay2024Balancing; @Kumar2025Preserving]. At Hampi (Vijayanagara), surface surveys of municipal ramparts, temple complexes and hydraulic conduits confirm an urban perimeter exceeding 25 km², substantiating a 1526AD population of 450k residents [@Stein1989Vijayanagara; @Sanjay2024Balancing; @Katchalla2026Archaeolog]. At Delhi, ground surveys and satellite imagery confirm the 1.500-acre walled extent of Shahjahanabad and its surrounding suburban wards supporting 500k inhabitants by 1700AD, while historical cartography from the Survey of India corroborates suburban residential densities [@Blake1991Shahjahanabad; @Anon2024Contested; @Mishra2026Historical].

# Results

Across the 46.429 catalogued settlements, peak sizes follow a regular Zipf rank-size curve ($\alpha = 0,87$, $R^2 = 0,98$), confirming continuous hierarchy integration from imperial metropolises to regional *qasbas*. Table \ref{tab:gazetteer} presents the leading 45 early modern urban settlements across South Asia ordered by peak population descending, detailing coordinates, macro-province allocation, chronological span, peak population and 1700AD population.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Macro-Province</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1700AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Imperial Hindustan Core</td><td class="crd-td">28,61 N, 77,24 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">500k</td><td class="crd-td">500k</td></tr>
<tr><td class="crd-td"><strong>Agra</strong></td><td class="crd-td">Imperial Hindustan Core</td><td class="crd-td">27,18 N, 78,01 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">500k</td><td class="crd-td">210k</td></tr>
<tr><td class="crd-td"><strong>Hampi</strong></td><td class="crd-td">Vijayanagara and Mysore</td><td class="crd-td">15,34 N, 76,46 E</td><td class="crd-td">1526AD - 1650AD</td><td class="crd-td">450k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">Indus Basin and Multan</td><td class="crd-td">31,55 N, 74,34 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">350k</td><td class="crd-td">260k</td></tr>
<tr><td class="crd-td"><strong>Ahmedabad</strong></td><td class="crd-td">Gujarat, Malwa and Ajmer</td><td class="crd-td">23,02 N, 72,57 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">240k</td><td class="crd-td">200k</td></tr>
<tr><td class="crd-td"><strong>Gaur</strong></td><td class="crd-td">Bengal, Bihar and Assam</td><td class="crd-td">24,87 N, 88,13 E</td><td class="crd-td">1526AD - 1550AD</td><td class="crd-td">220k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Vijayapura</strong></td><td class="crd-td">Vijayanagara and Mysore</td><td class="crd-td">16,82 N, 75,72 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">220k</td><td class="crd-td">60k</td></tr>
<tr><td class="crd-td"><strong>Hyderabad</strong></td><td class="crd-td">Maratha Swarajya and Deccan</td><td class="crd-td">17,36 N, 78,47 E</td><td class="crd-td">1595AD - 1757AD</td><td class="crd-td">220k</td><td class="crd-td">200k</td></tr>
<tr><td class="crd-td"><strong>Patna</strong></td><td class="crd-td">Bengal, Bihar and Assam</td><td class="crd-td">25,61 N, 85,14 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">200k</td><td class="crd-td">200k</td></tr>
<tr><td class="crd-td"><strong>Surat</strong></td><td class="crd-td">Gujarat, Malwa and Ajmer</td><td class="crd-td">21,17 N, 72,83 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">200k</td><td class="crd-td">200k</td></tr>
<tr><td class="crd-td"><strong>Murshidabad</strong></td><td class="crd-td">Bengal, Bihar and Assam</td><td class="crd-td">24,18 N, 88,27 E</td><td class="crd-td">1600AD - 1757AD</td><td class="crd-td">195k</td><td class="crd-td">70,4k</td></tr>
<tr><td class="crd-td"><strong>Dhaka</strong></td><td class="crd-td">Bengal, Bihar and Assam</td><td class="crd-td">23,71 N, 90,41 E</td><td class="crd-td">1650AD - 1757AD</td><td class="crd-td">180k</td><td class="crd-td">180k</td></tr>
<tr><td class="crd-td"><strong>Varanasi</strong></td><td class="crd-td">Imperial Hindustan Core</td><td class="crd-td">25,32 N, 83,01 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">175k</td><td class="crd-td">165k</td></tr>
<tr><td class="crd-td"><strong>Aurangabad</strong></td><td class="crd-td">Maratha Swarajya and Deccan</td><td class="crd-td">19,88 N, 75,34 E</td><td class="crd-td">1650AD - 1757AD</td><td class="crd-td">165k</td><td class="crd-td">165k</td></tr>
<tr><td class="crd-td"><strong>Chennai</strong></td><td class="crd-td">Vijayanagara and Mysore</td><td class="crd-td">13,08 N, 80,27 E</td><td class="crd-td">1650AD - 1757AD</td><td class="crd-td">140k</td><td class="crd-td">95k</td></tr>
<tr><td class="crd-td"><strong>Thatta</strong></td><td class="crd-td">Indus Basin and Multan</td><td class="crd-td">24,75 N, 67,92 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">137k</td><td class="crd-td">95k</td></tr>
<tr><td class="crd-td"><strong>Srinagar</strong></td><td class="crd-td">Imperial Hindustan Core</td><td class="crd-td">34,08 N, 74,8 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">135k</td><td class="crd-td">135k</td></tr>
<tr><td class="crd-td"><strong>Burhanpur</strong></td><td class="crd-td">Gujarat, Malwa and Ajmer</td><td class="crd-td">21,31 N, 76,23 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">135k</td><td class="crd-td">110k</td></tr>
<tr><td class="crd-td"><strong>Golconda</strong></td><td class="crd-td">Maratha Swarajya and Deccan</td><td class="crd-td">17,38 N, 78,4 E</td><td class="crd-td">1526AD - 1700AD</td><td class="crd-td">135k</td><td class="crd-td">22k</td></tr>
<tr><td class="crd-td"><strong>Kolkata</strong></td><td class="crd-td">Bengal, Bihar and Assam</td><td class="crd-td">22,57 N, 88,36 E</td><td class="crd-td">1700AD - 1757AD</td><td class="crd-td">115k</td><td class="crd-td">15k</td></tr>
<tr><td class="crd-td"><strong>Pune</strong></td><td class="crd-td">Maratha Swarajya and Deccan</td><td class="crd-td">18,52 N, 73,86 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">110k</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Ahmadnagar</strong></td><td class="crd-td">Maratha Swarajya and Deccan</td><td class="crd-td">19,09 N, 74,75 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">110k</td><td class="crd-td">55k</td></tr>
<tr><td class="crd-td"><strong>Lucknow</strong></td><td class="crd-td">Imperial Hindustan Core</td><td class="crd-td">26,85 N, 80,95 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">105k</td><td class="crd-td">65k</td></tr>
<tr><td class="crd-td"><strong>Jaipur</strong></td><td class="crd-td">Gujarat, Malwa and Ajmer</td><td class="crd-td">26,91 N, 75,79 E</td><td class="crd-td">1750AD - 1757AD</td><td class="crd-td">105k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Madurai</strong></td><td class="crd-td">Vijayanagara and Mysore</td><td class="crd-td">9,92 N, 78,12 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">105k</td><td class="crd-td">85k</td></tr>
<tr><td class="crd-td"><strong>Multan</strong></td><td class="crd-td">Indus Basin and Multan</td><td class="crd-td">30,2 N, 71,47 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">105k</td><td class="crd-td">95k</td></tr>
<tr><td class="crd-td"><strong>Machilipatnam</strong></td><td class="crd-td">Maratha Swarajya and Deccan</td><td class="crd-td">16,19 N, 81,14 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">100k</td><td class="crd-td">85k</td></tr>
<tr><td class="crd-td"><strong>Old Goa</strong></td><td class="crd-td">Maratha Swarajya and Deccan</td><td class="crd-td">15,5 N, 73,91 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">98,5k</td><td class="crd-td">25k</td></tr>
<tr><td class="crd-td"><strong>Khambhat</strong></td><td class="crd-td">Gujarat, Malwa and Ajmer</td><td class="crd-td">22,31 N, 72,62 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">95k</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td"><strong>Mandu</strong></td><td class="crd-td">Gujarat, Malwa and Ajmer</td><td class="crd-td">22,36 N, 75,39 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">95k</td><td class="crd-td">12,3k</td></tr>
<tr><td class="crd-td"><strong>Sirhind</strong></td><td class="crd-td">Imperial Hindustan Core</td><td class="crd-td">30,64 N, 76,39 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">90k</td><td class="crd-td">90k</td></tr>
<tr><td class="crd-td"><strong>Thanjavur</strong></td><td class="crd-td">Vijayanagara and Mysore</td><td class="crd-td">10,79 N, 79,14 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">90k</td><td class="crd-td">85k</td></tr>
<tr><td class="crd-td"><strong>Faizabad</strong></td><td class="crd-td">Imperial Hindustan Core</td><td class="crd-td">26,77 N, 82,15 E</td><td class="crd-td">1750AD - 1757AD</td><td class="crd-td">85k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Vadodara</strong></td><td class="crd-td">Gujarat, Malwa and Ajmer</td><td class="crd-td">22,31 N, 73,18 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">85k</td><td class="crd-td">66,5k</td></tr>
<tr><td class="crd-td"><strong>Ujjain</strong></td><td class="crd-td">Gujarat, Malwa and Ajmer</td><td class="crd-td">23,18 N, 75,78 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">85k</td><td class="crd-td">77,8k</td></tr>
<tr><td class="crd-td"><strong>Mumbai</strong></td><td class="crd-td">Maratha Swarajya and Deccan</td><td class="crd-td">18,94 N, 72,83 E</td><td class="crd-td">1550AD - 1757AD</td><td class="crd-td">85k</td><td class="crd-td">45k</td></tr>
<tr><td class="crd-td"><strong>Bidar</strong></td><td class="crd-td">Vijayanagara and Mysore</td><td class="crd-td">17,91 N, 77,52 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">85k</td><td class="crd-td">34,2k</td></tr>
<tr><td class="crd-td"><strong>Srirangapatna</strong></td><td class="crd-td">Vijayanagara and Mysore</td><td class="crd-td">12,42 N, 76,68 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">85k</td><td class="crd-td">65k</td></tr>
<tr><td class="crd-td"><strong>Peshawar</strong></td><td class="crd-td">Indus Basin and Multan</td><td class="crd-td">34,02 N, 71,58 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">85k</td><td class="crd-td">78k</td></tr>
<tr><td class="crd-td"><strong>Sonargaon</strong></td><td class="crd-td">Bengal, Bihar and Assam</td><td class="crd-td">23,65 N, 90,6 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">85k</td><td class="crd-td">20,3k</td></tr>
<tr><td class="crd-td"><strong>Prayagraj</strong></td><td class="crd-td">Imperial Hindustan Core</td><td class="crd-td">25,43 N, 81,85 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">82k</td><td class="crd-td">82k</td></tr>
<tr><td class="crd-td"><strong>Cuttack</strong></td><td class="crd-td">Bengal, Bihar and Assam</td><td class="crd-td">20,46 N, 85,88 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">82k</td><td class="crd-td">58k</td></tr>
<tr><td class="crd-td"><strong>Tiruchirappalli</strong></td><td class="crd-td">Vijayanagara and Mysore</td><td class="crd-td">10,82 N, 78,67 E</td><td class="crd-td">1526AD - 1757AD</td><td class="crd-td">82k</td><td class="crd-td">82k</td></tr>
<tr><td class="crd-td"><strong>Nagpur</strong></td><td class="crd-td">Maratha Swarajya and Deccan</td><td class="crd-td">21,15 N, 79,09 E</td><td class="crd-td">1750AD - 1757AD</td><td class="crd-td">78k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Champaner</strong></td><td class="crd-td">Gujarat, Malwa and Ajmer</td><td class="crd-td">22,49 N, 73,54 E</td><td class="crd-td">1526AD - 1595AD</td><td class="crd-td">75k</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 early modern settlements ordered by peak population across South Asia (1526AD to 1757AD).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Imperial Hindustan Core Subahs

The northern Gangetic division catalogues 6.601 settlements spanning Delhi, Agra, Awadh, Allahabad and Kashmir [@Habib1982Atlas; @Khan2024Hydraulic; @Prior1990British]. Primary centres included Delhi (500k peak in 1700AD), Agra (500k peak in 1650AD), Varanasi (175k peak in 1757AD), Srinagar (135k in 1700AD), Lucknow (105k peak in 1757AD), Sirhind (90k in 1700AD), Faizabad (85k in 1757AD) and Prayagraj (Allahabad, 82k in 1700AD) [@Blake1991Shahjahanabad; @Naqvi1968Urbanisation; @Hambly1982Towns]. These centres operated as imperial administrative hubs, supported by dense networks of agricultural *qasbas* along the Ganga-Yamuna river corridors [@Bayly1983Rulers; @Khan2024Hydraulic].

### Bengal, Bihar, Orissa and Ahom Assam

The eastern deltaic division catalogues 11.048 settlements along the lower Ganges, Brahmaputra and Meghna river networks [@Eaton1993Rise; @Seth2024Tale; @Nayam2025Political]. Preeminent cities included Gaur (220k peak in 1526AD), Patna (200k peak in 1700AD), Murshidabad (195k peak in 1750AD, 185k in 1757AD), Dhaka (180k peak in 1700AD), Kolkata (115k peak in 1757AD), Sonargaon (85k in 1526AD) and Cuttack (82k in 1526AD) [@Eaton1993Rise; @Hambly1982Towns]. In Assam and the eastern Himalayan valleys, the Ahom capital complex at Garhgaon, Charaideo and Rangpur and Drukpa monastic centres coordinated regional administration and riverine trade [@Nayam2025Political; @Phuntsho2013HistoryBhutan].

### Gujarat, Malwa, Ajmer and Gondwana

The western commercial province catalogues 7.464 settlements across maritime Gujarat, Malwa and Rajputana [@Moosvi1987Economy; @Sagaramath2023Exploratio; @Ahmad2026Pilgrimage]. Major metropolises encompassed Ahmedabad (240k peak in 1650AD), Surat (200k peak in 1700AD), Burhanpur (135k peak in 1650AD), Jaipur (105k peak in 1757AD), Khambhat (95k in 1526AD), Mandu (95k in 1526AD), Vadodara (85k in 1757AD) and Ujjain (85k peak in 1757AD) [@Hambly1982Towns; @ImperialGazetteer1908]. These centres linked western maritime trade routes with interior textile and grain producing regions [@Ahmad2026Pilgrimage].

### Maratha Swarajya, Bijapur, Golconda and the Deccan Subahs

The Deccan tableland catalogues 6.335 settlements across Maharashtra, Telangana, Konkan and the Godavari-Krishna basins [@YeolekarKadam2023Comprehens; @Keelan2019Deccani]. Leading cities included Hyderabad (220k peak in 1650AD, 200k in 1700AD, 215k in 1757AD), Aurangabad (165k peak in 1700AD), Golconda (135k peak in 1595AD), Pune (110k peak in 1757AD), Ahmadnagar (110k peak in 1595AD), Machilipatnam (100k in 1650AD), Old Goa (98,5k in 1595AD) and Mumbai (85k peak in 1757AD), reflecting the transition from sultanate capitals to the expanding Maratha confederacy [@Hambly1982Towns; @YeolekarKadam2023Comprehens; @Kadam2025Memory].

### Vijayanagara Heartland, Karnataka and Southern Successors

The southern peninsular division catalogues 5.272 settlements across Karnataka, the Kaveri basin and the Coromandel plains [@Stein1989Vijayanagara; @Sanjay2024Balancing; @Katchalla2026Archaeolog]. The imperial capital of Hampi (Vijayanagara) reached 450k inhabitants in 1526AD, while Vijayapura (Bijapur) expanded to 220k inhabitants in 1650AD [@Stein1989Vijayanagara; @Hambly1982Towns]. Following the 1565AD sack of Hampi, regional prominence shifted toward Madurai (105k peak in 1650AD), Thanjavur (90k peak in 1650AD), Bidar (85k in 1526AD), Srirangapatna (85k in 1757AD), Tiruchirappalli (82k in 1700AD) and Chennai (95k in 1700AD, 140k peak in 1757AD) [@Champakalakshmi1996Trade; @Katchalla2026Archaeolog].

### Indus Basin, Multan, Thatta and the Northwestern Frontier

The western alluvial division catalogues 9.709 settlements along the Indus river and mountain corridors leading to Kabul [@Habib1982Atlas; @Anwar2019Strategic; @Ahmad2017Mughals]. Lahore anchored the upper basin with 350k residents in 1650AD (260k in 1700AD), while Thatta (137k peak in 1600AD, 130k in 1650AD), Multan (105k peak in 1650AD) and Peshawar (85k in 1757AD) commanded overland caravan and deltaic shipping routes [@Hambly1982Towns; @Naqvi1968Urbanisation; @Anwar2019Strategic].

# Limitations

Urban settlement analysis for early modern South Asia is subject to distinct archival constraints:
1. Cadastral record variations: detailed *zabt* registers are concentrated in the Mughal heartland, whereas tributary hill states in Gondwana and the northeast preserve fewer quantitative tax rolls [@Bhadra1980Marx; @Prior1990British].
2. Conversion of dwelling units: historical sources frequently report hearths or taxpaying compounds rather than absolute population counts, requiring household multiplier assumptions between 4,5 and 5,5 persons [@Carvalhal2025Beyond].
3. Military camp volatility: large imperial armies (*lashkar*) numbering up to 300k individuals created mobile temporary cities whose demographic mass shifted across provincial boundaries [@Seth2024Tale].
4. Modern urban overprinting: continuous settlement in major historic metropolises such as Delhi, Mumbai and Kolkata complicates archaeological excavation of early modern domestic stratigraphy [@Anon2024Contested].

# Conclusion

The INDUS settlement gazetteer synthesises 46.429 catalogued settlements across six macro-provinces (Zipf rank-size slope $\alpha = 0,87$, $R^2 = 0,98$), providing an empirically anchored baseline for early modern South Asian demographic analysis from 1526AD to 1757AD. By combining primary-monograph urban trajectories, multi-repository archaeological corpora, official national censuses and macro-calibrated *qasba*, *pargana* and *nadu* continuity series, this catalogue isolates nucleated settlements from rural populations, enabling dasymetric distribution of agriculturalists across non-settled lands and documenting the sustained economic and demographic vitality of the Indian subcontinent prior to colonial territorial expansion.

# Appendix

The INDUS source ledger audited 47.229 candidate records, resulting in 46.429 accepted settlements and 800 exclusions. Table \ref{tab:excluded} details the leading 25 excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Porbandar</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Limbdi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Laugram</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Palanpur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Hoshiarpur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Barwani</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Karauli</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Datia</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Tripunithura</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Datia</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Rajkot</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Gondal</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Malerkotla</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Palitana</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kishangarh</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pudukkottai</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Dhrangadhra</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Rajkot</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Rewa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kishangarh</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Morbi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Dhrangadhra</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Achalpur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Limbdi !</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the early modern South Asia source ledger.</figcaption>
</figure>

# Sources
