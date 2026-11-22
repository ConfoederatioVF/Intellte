---
title: "Settlement Gazetteer of British India (1757AD to 1857AD)"
subtitle: "INDUS: Coordinates, Toponymy and Demographic Trajectories"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: british_india_plassey_to_1857_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_british_india_plassey_to_1857_spatial.png"
hero_caption: "Spatial distribution of 48.838 catalogued settlements and six administrative divisions across British India and princely territories (4,35M km²) from 1757AD to 1857AD."
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

This gazetteer catalogues WGS84 coordinates, administrative allocations, longitudinal occupation chronologies and benchmark demographic series for 48.838 urban and market settlements across British India and princely territories (4,35M km², encompassing 4.353.693 km² and 56.456 active 5-arcminute terrestrial cells) from 1757AD to 1857AD. Spanning six administrative divisions, the gazetteer encompasses diverse urban traditions and functional morphologies: rapidly expanding maritime presidency capitals with deep-water port facilities and colonial commercial agencies, fortified inland princely capitals with sprawling courtly suburbs, strategic military cantonments situated along riverine and road arteries, and ancient temple and craft centres along the alluvial floodplains of the Ganges, Yamuna, Indus, Krishna and Kaveri rivers.

Urban scales range from expanding maritime commercial metropolises at Mumbai (peaking at 560k in 1857AD), Kolkata (peaking at 415k in 1857AD) and Chennai (peaking at 380k in 1857AD), to autonomous princely capitals at Hyderabad (325k in 1857AD) and Lucknow (peaking at 295k in 1840AD and 275k in 1857AD), alongside historic political, sacred and manufacturing centres such as Delhi (peaking at 260k in 1757AD and 155k in 1857AD), Varanasi (peaking at 195k in 1800AD and 180k in 1857AD), Patna (peaking at 185k in 1757AD and 162k in 1857AD), Murshidabad (185k in 1757AD to 52k in 1857AD), Jaipur (145k in 1857AD), Dhaka (145k in 1757AD to 65k in 1857AD), Lahore (140k in 1757AD and 125k in 1857AD), Surat (135k in 1757AD and 102k in 1857AD), Pune (135k in 1775AD and 105k in 1857AD), Amritsar (132k in 1857AD), Bengaluru (132k in 1857AD), Agra (128k in 1857AD), Srinagar (125k in 1857AD), Ahmedabad (125k in 1757AD and 112k in 1857AD) and Kanpur (115k in 1857AD). Every catalogued locality reconciles against 49.638 candidate records in the INDUS source ledger alongside 800 documented exclusions (predominantly duplicate-alias consolidations within a 2,2 km spatial buffer and non-habitation military encampments).

By linking georeferenced settlement trajectories with regional fluvial geomorphology, revenue surveys and archival collectorate returns, this gazetteer establishes an urban baseline for the century of East India Company hegemony. Settlement subtraction isolates nucleated urban centres from rural peasant populations, providing the foundation for dasymetric population allocation across non-settled agricultural cells and demonstrating the profound spatial restructuring from interior craft production to coastal export commerce that occurred prior to 1857AD.

# Background

Urban settlement patterns across South Asia between 1757AD and 1857AD reflect profound shifts in political hegemony, military garrisoning and international trade flows [@Roy2014Geography; @Kapur2006British; @Torri2014Periodizat; @Habib1982Atlas]. Four primary functional categories characterised the regional urban landscape:
1. Presidency coastal ports: Mumbai, Kolkata and Chennai were engineered as fortified maritime commercial hubs, equipped with customs houses, dry docks, warehousing complexes and European civil lines alongside dense indigenous merchant quarters (*Black Towns*) [@Gust2018Perilous; @LahiriDutt2014Commodifie]. These cities expanded through continuous immigration from rural hinterlands, serving as focal points for raw commodity exports (raw cotton, opium, indigo, tea and silk) and the distribution of British manufactured textiles [@NoguesMarco2021Measuring; @Riello2009India].
2. Princely and courtly capitals: Autonomous or semi-autonomous regional metropolises, notably Hyderabad, Lucknow, Jaipur, Gwalior and Vadodara, sustained sophisticated urban craft industries (zari embroidery, perfumery, weapon forging and luxury silk weaving) funded by courtly consumption and princely revenue expenditure [@Verghese2019Conquest; @Torri2014Periodizat; @Hambly1982Towns; @Bayly1983Rulers].
3. Strategic military cantonments and entrepôts: In response to military campaigns and territorial control requirements, the Company constructed sprawling cantonments separated from indigenous urban centres, most notably at Kanpur, Meerut, Ambala, Rawalpindi, Secunderabad and Bengaluru [@Peers1998Soldiers; @Yang2023Prison; @Bayly1983Rulers]. These cantonments stimulated rapid civilian bazaar growth, grain markets and leather tanning industries.
4. Riverine manufacturing and sacred centres: Ancient manufacturing towns (*qasbas*) along the Gangetic highway and sacred pilgrimage centres (Varanasi, Prayagraj, Haridwar, Gaya, Puri, Madurai and Tiruchirappalli) accommodated substantial permanent artisan populations alongside seasonal floating pilgrim influxes [@Guenther1997Christian; @Bhattacharya2012Contagion; @Champakalakshmi1996Trade; @Naqvi1968Urbanisation].

# Methodology

The expanded 48.838-settlement gazetteer is empirically anchored in four reconciled evidentiary tiers rather than arbitrary interpolation. First, leading urban centres rely on primary-monograph historical metropolis trajectories reconstructed from contemporary surveys, Mughal revenue inventories and early municipal returns [@Habib1982Atlas; @Moosvi1987Economy; @Hambly1982Towns; @Blake1991Shahjahanabad; @Bayly1983Rulers]. Second, regional archaeological and monument corpora—combining Pleiades, Zenodo Harappan, Vidarbha and Palaeolithic IAR datasets, ASI P1371, Wikidata, OpenStreetMap and XRONOS/c14bazAAR—provide georeferenced site inventories with verified pre-colonial strata [@Possehl1999IndusAge; @Kenoyer1998AncientCities; @Allchin1995Archaeology; @Erdosy1988Urbanisation]. Third, official national censuses (Census of India Table A-04, PBS, BBS, DCS, CBS, NSB and NBS) and imperial gazetteers anchor sub-district hierarchies and municipal status [@ImperialGazetteer1908; @Roy2018State; @Cassan2020Enfranchis]. Fourth, macro-envelope *qasba*, *pargana* and *nadu* continuity backfill captures pre-1800AD market and agrarian centres under strict foundation-year and chronological toponymy filters [@Champakalakshmi1996Trade; @Chattopadhyaya1994Making; @Eaton1993Rise; @Stein1989Vijayanagara].

Inclusion in the INDUS source ledger requires:
- Precise WGS84 geographic coordinates validated against regional hydrology and historic nineteenth-century Survey of India maps.
- Documented longitudinal population benchmarks or hearth/house count trajectories anchored to primary monographs, archaeological provenance or official census back-projections between 1757AD and 1857AD.
- Administrative confirmation as an urban municipality, commercial market town (*qasba*), *nadu* focal node, military cantonment or historical capital.

Where multiple survey points fall within a 2,2 km spatial buffer of an established urban nucleus (such as suburban forts, military cantonment suburbs or river ghats), secondary coordinates are consolidated as duplicate aliases, preserving geographic integrity and avoiding artificial clustering. Non-habitation features such as isolated defensive batteries, customs toll posts, indigo processing vats and temporary pilgrimage encampments are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 48.838 catalogued settlements and summed site peaks across the six administrative divisions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Administrative Division</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bengal Presidency</strong></td><td class="crd-td">10.088</td><td class="crd-td">20,7%</td><td class="crd-td">17,99M</td><td class="crd-td">Kolkata (415k)</td></tr>
<tr><td class="crd-td"><strong>North-Western Provinces and Oudh</strong></td><td class="crd-td">3.497</td><td class="crd-td">7,2%</td><td class="crd-td">7,75M</td><td class="crd-td">Lucknow (295k)</td></tr>
<tr><td class="crd-td"><strong>Madras Presidency and Mysore</strong></td><td class="crd-td">8.269</td><td class="crd-td">16,9%</td><td class="crd-td">17,08M</td><td class="crd-td">Chennai (380k)</td></tr>
<tr><td class="crd-td"><strong>Bombay Presidency and Deccan</strong></td><td class="crd-td">5.658</td><td class="crd-td">11,6%</td><td class="crd-td">11,18M</td><td class="crd-td">Mumbai (560k)</td></tr>
<tr><td class="crd-td"><strong>Punjab and Rajputana</strong></td><td class="crd-td">16.800</td><td class="crd-td">34,4%</td><td class="crd-td">22,12M</td><td class="crd-td">Delhi (260k)</td></tr>
<tr><td class="crd-td"><strong>Ceylon and Himalayan Frontier</strong></td><td class="crd-td">4.526</td><td class="crd-td">9,3%</td><td class="crd-td">3,65M</td><td class="crd-td">Colombo (72k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">48.838</td><td class="crd-td">100%</td><td class="crd-td">79,76M</td><td class="crd-td">Mumbai (560k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 48.838 catalogued settlements and summed site peaks across British India.</figcaption>
</figure>

# Testing and Validation

Settlement coordinates, municipal extents and demographic trajectories were validated through historical cartography and archival cross-referencing [@Roy2014Geography; @Kapur2006British; @Habib1982Atlas]. Topographic sheets from the Great Trigonometrical Survey of India, initiated by William Lambton and George Everest in the early nineteenth century, provided geometric ground control for town coordinates and urban perimeter footprints [@Torri2014Periodizat]. Early gazetteers—notably Walter Hamilton's *East India Gazetteer* (1815AD and 1828AD), Edward Thornton's *Gazetteer of the Territories under the Government of the East India Company* (1854AD) and the *Imperial Gazetteer of India*—established settlement status, bazaar counts and commercial specialisations [@Roy2018State; @ImperialGazetteer1908].

Demographic plausibility was evaluated through Zipf rank-size analysis across all 48.838 catalogued localities. The empirical rank-size distribution yields a well-calibrated log-linear slope of $\alpha = 0,86$ ($R^2 = 0,98$) across metropolitan, secondary *qasba* and tertiary market tiers, with emerging maritime primacy at the summit (Mumbai, Kolkata and Chennai) alongside inland capitals (Hyderabad, Lucknow and Delhi) [@Kapur2006British; @Bayly1983Rulers]. Household multiplier consistency was tested against regional collectorate returns: rural multipliers averaged 5 to 5,5 persons per dwelling, whereas crowded urban tenement quarters in Mumbai, Kolkata and Old Delhi reached 7,5 to 9 persons per dwelling, reflecting severe residential congestion [@Bagchi2015Colonialis; @Gust2018Perilous].

# Results

Table \ref{tab:gazetteer} presents the leading 45 settlements across British India ordered by peak population descending, detailing coordinates, sub-regional allocation, occupation spans and demographic peaks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Administrative Division</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1857AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mumbai</strong></td><td class="crd-td">Bombay Presidency and Deccan</td><td class="crd-td">18,94 N, 72,83 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">560k</td><td class="crd-td">560k</td></tr>
<tr><td class="crd-td"><strong>Kolkata</strong></td><td class="crd-td">Bengal Presidency</td><td class="crd-td">22,57 N, 88,36 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">415k</td><td class="crd-td">415k</td></tr>
<tr><td class="crd-td"><strong>Chennai</strong></td><td class="crd-td">Madras Presidency and Mysore</td><td class="crd-td">13,08 N, 80,27 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">380k</td><td class="crd-td">380k</td></tr>
<tr><td class="crd-td"><strong>Hyderabad</strong></td><td class="crd-td">Madras Presidency and Mysore</td><td class="crd-td">17,36 N, 78,47 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">325k</td><td class="crd-td">325k</td></tr>
<tr><td class="crd-td"><strong>Lucknow</strong></td><td class="crd-td">North-Western Provinces and Oudh</td><td class="crd-td">26,85 N, 80,95 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">295k</td><td class="crd-td">275k</td></tr>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Punjab and Rajputana</td><td class="crd-td">28,61 N, 77,24 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">260k</td><td class="crd-td">155k</td></tr>
<tr><td class="crd-td"><strong>Varanasi</strong></td><td class="crd-td">North-Western Provinces and Oudh</td><td class="crd-td">25,32 N, 83,01 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">195k</td><td class="crd-td">180k</td></tr>
<tr><td class="crd-td"><strong>Patna</strong></td><td class="crd-td">Bengal Presidency</td><td class="crd-td">25,61 N, 85,14 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">185k</td><td class="crd-td">162k</td></tr>
<tr><td class="crd-td"><strong>Murshidabad</strong></td><td class="crd-td">Bengal Presidency</td><td class="crd-td">24,18 N, 88,27 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">185k</td><td class="crd-td">52k</td></tr>
<tr><td class="crd-td"><strong>Jaipur</strong></td><td class="crd-td">Punjab and Rajputana</td><td class="crd-td">26,91 N, 75,79 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">145k</td><td class="crd-td">145k</td></tr>
<tr><td class="crd-td"><strong>Dhaka</strong></td><td class="crd-td">Bengal Presidency</td><td class="crd-td">23,71 N, 90,41 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">145k</td><td class="crd-td">65k</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">Punjab and Rajputana</td><td class="crd-td">31,55 N, 74,34 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">140k</td><td class="crd-td">125k</td></tr>
<tr><td class="crd-td"><strong>Faizabad</strong></td><td class="crd-td">North-Western Provinces and Oudh</td><td class="crd-td">26,77 N, 82,15 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">135k</td><td class="crd-td">40k</td></tr>
<tr><td class="crd-td"><strong>Surat</strong></td><td class="crd-td">Bombay Presidency and Deccan</td><td class="crd-td">21,17 N, 72,83 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">135k</td><td class="crd-td">102k</td></tr>
<tr><td class="crd-td"><strong>Pune</strong></td><td class="crd-td">Bombay Presidency and Deccan</td><td class="crd-td">18,52 N, 73,86 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">135k</td><td class="crd-td">105k</td></tr>
<tr><td class="crd-td"><strong>Amritsar</strong></td><td class="crd-td">Punjab and Rajputana</td><td class="crd-td">31,63 N, 74,87 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">132k</td><td class="crd-td">132k</td></tr>
<tr><td class="crd-td"><strong>Bengaluru</strong></td><td class="crd-td">Madras Presidency and Mysore</td><td class="crd-td">12,97 N, 77,59 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">132k</td><td class="crd-td">132k</td></tr>
<tr><td class="crd-td"><strong>Agra</strong></td><td class="crd-td">North-Western Provinces and Oudh</td><td class="crd-td">27,18 N, 78,01 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">128k</td><td class="crd-td">128k</td></tr>
<tr><td class="crd-td"><strong>Srinagar</strong></td><td class="crd-td">Punjab and Rajputana</td><td class="crd-td">34,08 N, 74,8 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">125k</td><td class="crd-td">125k</td></tr>
<tr><td class="crd-td"><strong>Ahmedabad</strong></td><td class="crd-td">Bombay Presidency and Deccan</td><td class="crd-td">23,02 N, 72,57 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">125k</td><td class="crd-td">112k</td></tr>
<tr><td class="crd-td"><strong>Kanpur</strong></td><td class="crd-td">North-Western Provinces and Oudh</td><td class="crd-td">26,45 N, 80,33 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">115k</td><td class="crd-td">115k</td></tr>
<tr><td class="crd-td"><strong>Nagpur</strong></td><td class="crd-td">Bombay Presidency and Deccan</td><td class="crd-td">21,15 N, 79,09 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">112k</td><td class="crd-td">110k</td></tr>
<tr><td class="crd-td"><strong>Srirangapatna</strong></td><td class="crd-td">Madras Presidency and Mysore</td><td class="crd-td">12,42 N, 76,68 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">111,6k</td><td class="crd-td">14k</td></tr>
<tr><td class="crd-td"><strong>Vadodara</strong></td><td class="crd-td">Bombay Presidency and Deccan</td><td class="crd-td">22,31 N, 73,18 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">110k</td><td class="crd-td">110k</td></tr>
<tr><td class="crd-td"><strong>Gwalior</strong></td><td class="crd-td">Punjab and Rajputana</td><td class="crd-td">26,22 N, 78,18 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">105k</td><td class="crd-td">105k</td></tr>
<tr><td class="crd-td"><strong>Bareilly</strong></td><td class="crd-td">North-Western Provinces and Oudh</td><td class="crd-td">28,37 N, 79,43 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">102k</td><td class="crd-td">102k</td></tr>
<tr><td class="crd-td"><strong>Prayagraj</strong></td><td class="crd-td">North-Western Provinces and Oudh</td><td class="crd-td">25,43 N, 81,85 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">98k</td><td class="crd-td">98k</td></tr>
<tr><td class="crd-td"><strong>Ujjain</strong></td><td class="crd-td">Punjab and Rajputana</td><td class="crd-td">23,18 N, 75,78 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">95k</td><td class="crd-td">55k</td></tr>
<tr><td class="crd-td"><strong>Aurangabad</strong></td><td class="crd-td">Bombay Presidency and Deccan</td><td class="crd-td">19,88 N, 75,34 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">95k</td><td class="crd-td">45k</td></tr>
<tr><td class="crd-td"><strong>Peshawar</strong></td><td class="crd-td">Punjab and Rajputana</td><td class="crd-td">34,02 N, 71,58 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">95k</td><td class="crd-td">58k</td></tr>
<tr><td class="crd-td"><strong>Farrukhabad</strong></td><td class="crd-td">North-Western Provinces and Oudh</td><td class="crd-td">27,39 N, 79,58 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">85k</td><td class="crd-td">78k</td></tr>
<tr><td class="crd-td"><strong>Sheikhupura</strong></td><td class="crd-td">Punjab and Rajputana</td><td class="crd-td">31,71 N, 73,99 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">85k</td><td class="crd-td">85k</td></tr>
<tr><td class="crd-td"><strong>Mirzapur</strong></td><td class="crd-td">North-Western Provinces and Oudh</td><td class="crd-td">25,15 N, 82,57 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">82k</td><td class="crd-td">75k</td></tr>
<tr><td class="crd-td"><strong>Multan</strong></td><td class="crd-td">Punjab and Rajputana</td><td class="crd-td">30,2 N, 71,47 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">80k</td><td class="crd-td">58k</td></tr>
<tr><td class="crd-td"><strong>Meerut</strong></td><td class="crd-td">North-Western Provinces and Oudh</td><td class="crd-td">28,98 N, 77,71 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">78k</td><td class="crd-td">78k</td></tr>
<tr><td class="crd-td"><strong>Thanjavur</strong></td><td class="crd-td">Madras Presidency and Mysore</td><td class="crd-td">10,79 N, 79,14 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">78k</td><td class="crd-td">58k</td></tr>
<tr><td class="crd-td"><strong>Tiruchirappalli</strong></td><td class="crd-td">Madras Presidency and Mysore</td><td class="crd-td">10,82 N, 78,67 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">78k</td><td class="crd-td">78k</td></tr>
<tr><td class="crd-td"><strong>Burhanpur</strong></td><td class="crd-td">Punjab and Rajputana</td><td class="crd-td">21,31 N, 76,23 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">75k</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Jhang</strong></td><td class="crd-td">Punjab and Rajputana</td><td class="crd-td">33,67 N, 72,7 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">72,2k</td><td class="crd-td">72,2k</td></tr>
<tr><td class="crd-td"><strong>Rampur</strong></td><td class="crd-td">North-Western Provinces and Oudh</td><td class="crd-td">28,8 N, 79,03 E</td><td class="crd-td">1775AD - 1857AD</td><td class="crd-td">72k</td><td class="crd-td">72k</td></tr>
<tr><td class="crd-td"><strong>Indore</strong></td><td class="crd-td">Punjab and Rajputana</td><td class="crd-td">22,72 N, 75,86 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">72k</td><td class="crd-td">72k</td></tr>
<tr><td class="crd-td"><strong>Colombo</strong></td><td class="crd-td">Ceylon and Himalayan Frontier</td><td class="crd-td">6,93 N, 79,86 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">72k</td><td class="crd-td">72k</td></tr>
<tr><td class="crd-td"><strong>Natore</strong></td><td class="crd-td">Bengal Presidency</td><td class="crd-td">24,41 N, 88,99 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">71,3k</td><td class="crd-td">71,3k</td></tr>
<tr><td class="crd-td"><strong>Shahjahanpur</strong></td><td class="crd-td">North-Western Provinces and Oudh</td><td class="crd-td">27,88 N, 79,91 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">70k</td><td class="crd-td">70k</td></tr>
<tr><td class="crd-td"><strong>Jodhpur</strong></td><td class="crd-td">Punjab and Rajputana</td><td class="crd-td">26,24 N, 73,02 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">70k</td><td class="crd-td">65k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 settlements ordered by peak population across British India (1757AD to 1857AD).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Bengal Presidency (Bengal, Bihar, Orissa and Assam)

The eastern division catalogues 10.088 settlements distributed across the lower Gangetic plain, the deltaic wetlands and the Brahmaputra valley [@LahiriDutt2014Commodifie; @Bagchi2015Colonialis; @Eaton1993Rise]. Kolkata was the imperial capital and principal commercial gateway, expanding from 115k in 1757AD to 185k in 1800AD and 415k in 1857AD while coordinating trade in opium, indigo, raw silk and rice [@NoguesMarco2021Measuring]. Patna was a major regional entrepôt along the Ganges, peaking at 185k in 1757AD and easing to 180k in 1800AD and 162k in 1857AD as the centre of the state opium monopoly factory [@Allchin1995Archaeology; @Erdosy1988Urbanisation; @Naqvi1968Urbanisation].

Conversely, former manufacturing and political metropolises suffered sharp decline: Murshidabad contracted from 185k in 1757AD to 120k in 1800AD and 52k in 1857AD, while Dhaka declined from 145k in 1757AD to 120k in 1800AD and 65k in 1857AD as British machine-spun textiles displaced fine muslin production [@Riello2009India; @Clingingsmith2017Deindustri; @Eaton1993Rise; @Hambly1982Towns]. Other prominent centres include Natore (rising from 57,9k in 1757AD to 71,3k in 1857AD), Gaya (expanding from 38k to 62k), Bhagalpur (growing from 38k to 55k), Cuttack (55k in 1757AD and 48k in 1857AD) and the sacred pilgrimage city of Puri (38k in 1757AD and 32k in 1857AD).

### North-Western Provinces and Kingdom of Oudh

The north-central division catalogues 3.497 settlements situated in the fertile alluvium between the Himalayas and the Vindhyan hills [@Sarwar2012Comparativ; @Verghese2019Conquest; @Bayly1983Rulers]. Lucknow was the preeminent courtly metropolis, growing under the Nawabs of Oudh from 105k in 1757AD to a peak of 295k in 1840AD (standing at 275k in 1857AD) across expansive palatial complexes, garden suburbs and craft bazaars [@Verghese2019Conquest; @Bayly1983Rulers]. Varanasi (*Kashi*) anchored riverine commerce and sacred pilgrimage, rising from 175k in 1757AD to a peak of 195k in 1800AD and sustaining 180k in 1857AD [@Guenther1997Christian; @Erdosy1988Urbanisation; @Naqvi1968Urbanisation]. Faizabad peaked at 135k in 1775AD during the early Nawabi court before moderating to 40k by 1857AD, while Agra stood at 105k in 1757AD, eased to 75k in 1800AD and recovered to 128k in 1857AD [@Moosvi1987Economy; @Hambly1982Towns].

Kanpur expanded rapidly from a modest river village of 8k in 1757AD into a premier military cantonment, river port and industrial manufacturing centre of 115k in 1857AD [@Peers1998Soldiers; @Yang2023Prison]. Other major centres include Bareilly (72k in 1757AD to 102k in 1857AD), Prayagraj (78k in 1757AD to 98k in 1857AD), Farrukhabad (peaking at 85k in 1800AD and 78k in 1857AD), Mirzapur (peaking at 82k in 1820AD and 75k in 1857AD), Meerut (38,4k to 78k in 1857AD), Rampur (reaching 72k in 1857AD), Shahjahanpur (50k to 70k), Moradabad (48k to 62k) and Aligarh (40k to 55k).

### Madras Presidency, Mysore and Travancore-Cochin

The southern division catalogues 8.269 settlements across the Coromandel coast, the Deccan tableland and the Malabar littoral [@Sarwar2012Comparativ; @Fujita2020Sustainabl; @Champakalakshmi1996Trade]. Chennai (*Madras*) was the provincial capital, growing steadily from 140k in 1757AD to 210k in 1800AD and 380k in 1857AD around Fort St George and George Town [@Kapur2006British]. Hyderabad, capital of the Nizam's dominions, expanded from 215k in 1757AD to 325k by 1857AD [@Torri2014Periodizat; @Hambly1982Towns].

Bengaluru grew from 55k in 1757AD to 132k in 1857AD following the establishment of its British cantonment, whereas the former Mysore capital of Srirangapatna peaked at 111,6k in 1775AD before contracting to 14k by 1857AD after 1799AD [@Stein1989Vijayanagara]. Other leading centres include Tiruchirappalli (78k in 1757AD and 78k in 1857AD) commanding the Kaveri delta, Thanjavur (78k in 1757AD to 58k in 1857AD), Madurai (62k in 1757AD and 55k in 1857AD), Thiruvananthapuram (48k to 55k in 1857AD), Kozhikode (50k in 1757AD and 48k in 1857AD) and Vijayapura (35k in 1757AD to 22k in 1857AD) [@Champakalakshmi1996Trade; @Chattopadhyaya1994Making].

### Bombay Presidency, Maratha Deccan, Gujarat and Sindh

The western division catalogues 5.658 settlements across the Arabian Sea littoral, the Western Ghats and the Deccan plateau [@Gust2018Perilous; @Roy2014Geography]. Mumbai (*Bombay*) was the most rapidly expanding metropolis on the subcontinent, growing more than sixfold from 85k in 1757AD to 560k by 1857AD, driven by its protected deep-water harbour, raw cotton exports, commercial shipbuilding and extensive financial merchant networks [@Gust2018Perilous; @Roy2007Globalisat].

Surat, historically the primary Mughal port of western India, stood at 135k in 1757AD and 102k in 1857AD as an entrepôt for silk and cotton weaving [@Hambly1982Towns]. Pune, former seat of the Peshwas, peaked at 135k in 1775AD and held 105k in 1857AD. Ahmedabad, textile and financial capital of Gujarat, stood at 125k in 1757AD, eased to 95k in 1800AD and recovered to 112k in 1857AD [@Moosvi1987Economy], while Nagpur housed 112k in 1820AD (110k in 1857AD) and Vadodara reached 110k in 1857AD [@ImperialGazetteer1908]. Aurangabad contracted from 95k in 1757AD to 45k in 1857AD. In Sindh, annexed in 1843AD, Karachi expanded from a fishing port of 8,5k in 1757AD to 42k by 1857AD, while Hyderabad (Sindh) peaked at 48k in 1800AD (42k in 1857AD).

### Punjab, Jammu-Kashmir, Rajputana and Central India Agencies

The northern and central inland division catalogues 16.800 settlements across the five river valleys of Punjab, the arid plains of Rajasthan and the plateaus of Central India [@Torri2014Periodizat; @Verghese2019Conquest; @Habib1982Atlas]. Delhi, seat of the Mughal dynasty, stood at 260k in 1757AD before contracting through late-eighteenth-century conflicts to 140k in 1800AD and 135k in 1820AD, then recovering modestly to 155k in 1857AD [@Blake1991Shahjahanabad; @Guenther1997Christian]. Jaipur grew from 105k in 1757AD to 145k in 1857AD within its planned orthogonal walls [@Bayly1983Rulers], Lahore stood at 140k in 1757AD and 125k in 1857AD [@Moosvi1987Economy; @Naqvi1968Urbanisation], and Amritsar expanded from 35k in 1757AD to 132k in 1857AD.

In Kashmir, Rajputana and Central India, Srinagar accommodated 115k in 1757AD and 125k in 1857AD as a centre for pashmina shawl weaving [@Habib1982Atlas]. Gwalior grew from 62k in 1757AD to 105k in 1857AD beneath its rock fortress, Ujjain peaked at 95k in 1800AD before moderating to 55k in 1857AD [@Allchin1995Archaeology], Peshawar peaked at 95k in 1800AD (58k in 1857AD), Multan stood at 80k in 1757AD and 58k in 1857AD [@Possehl1999IndusAge; @Kenoyer1998AncientCities], and Indore expanded from 35k in 1757AD to 72k in 1857AD as the Holkar capital.

### British Ceylon, Nepal, Bhutan and Maldives Protectorate

The peripheral insular and montane division catalogues 4.526 settlements across the Indian Ocean and the Himalayan ranges [@Torri2014Periodizat; @Haitao2020British]. Colombo was the colonial administrative and commercial capital of Ceylon, growing from 42k in 1757AD to 72k in 1857AD as British plantation agriculture (cinnamon and coffee) expanded across the southwestern wet zone, while Kandy moderated from 28,8k in 1757AD to 20k in 1857AD.

In the Himalayan kingdoms, Kathmandu was the preeminent urban centre, sustaining 55,6k in 1757AD and 55k in 1857AD as the capital of the unified Shah dynasty of Nepal, flanked by Lalitpur (38,8k in 1757AD and 30k in 1857AD) and Bhaktapur (29k in 1757AD and 22k in 1857AD) [@Slusser1982NepalMandala]. Punakha (peaking at 8,5k in 1775AD and 7,5k in 1857AD) and Thimphu (7,5k) in Bhutan served as seasonal administrative monastic centres (*dzongs*) [@Phuntsho2013HistoryBhutan], while Malé in the Maldives grew from 10,3k in 1757AD to 11k in 1857AD as a coral-atoll sultanate capital.

# Limitations

Urban settlement analysis in pre-1857AD South Asia remains subject to distinct taphonomic and archival challenges:
1. Shifting municipal boundary definitions: In early nineteenth-century records, population returns frequently conflated walled intramural cities with sprawling extramural suburbs, military cantonments and surrounding rural hamlets, requiring critical spatial standardisation [@Roy2018State; @Kapur2006British].
2. Floating and seasonal populations: Many prominent South Asian centres accommodated substantial non-resident populations—pilgrims at Varanasi and Puri, boatmen and carters at river ports like Patna, and nomadic pastoralists visiting seasonal bazaars—that were inconsistently recorded in tax lists and magistrate censuses [@Bhattacharya2012Contagion].
3. Military devastation and depopulation: Repeated sieges and military conflicts (such as the sack of Delhi in 1757AD, the Rohilla wars, the Mysore campaigns and the Anglo-Maratha conflicts) caused sudden localised demographic collapses and subsequent refugee surges that are difficult to trace without continuous annual records [@Torri2014Periodizat; @Verghese2019Conquest].
4. Variable household size multipliers: Collectorate records frequently enumerated only hearths, houses or adult males, necessitating the application of household conversion factors that varied from 4,5 in impoverished rural tracts to over 8 in wealthy merchant compounds [@Bagchi2015Colonialis; @Gust2018Perilous].

# Conclusion

The INDUS settlement gazetteer synthesises 48.838 catalogued urban and market settlements across British India and princely territories from 1757AD to 1857AD, establishing an empirical baseline for understanding South Asian urbanism during the century of East India Company rule. By georeferencing coordinates, documenting longitudinal population benchmarks and reconciling source records across primary monographs, archaeological corpora, official censuses and *qasba*/*nadu* continuity filters, this catalogue isolates nucleated urban populations from rural cultivators.

The gazetteer captures the profound spatial restructuring of the subcontinent's urban hierarchy during the transition to colonial rule. While ancient inland manufacturing centres such as Murshidabad, Dhaka and Patna stagnated or declined following the disruption of artisanal textile production, coastal presidency capitals—most notably Mumbai, Kolkata and Chennai—expanded rapidly, establishing the maritime export-oriented urban framework that characterised modern South Asia.

# Appendix

The INDUS source ledger audited 49.638 candidate records, resulting in 48.838 accepted primary settlements and 800 exclusions. Table \ref{tab:excluded} documents the leading 25 excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Datia</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Porbandar</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Malerkotla</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Limbdi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Rewa</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Limbdi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kishangarh</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Dhrangadhra</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Datia</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Gondal</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Dhrangadhra</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Rajkot</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Laugram</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kapurthala</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Rajpipla</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pudukkottai</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Morbi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Palanpur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Khairpur</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Charkhari</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kapurthala</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Hoshiarpur</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Barwani</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Karauli</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Tripunithura</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the British India source ledger.</figcaption>
</figure>

# Sources
