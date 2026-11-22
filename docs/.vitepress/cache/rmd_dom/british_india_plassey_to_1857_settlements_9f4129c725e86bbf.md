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
hero_caption: "Spatial distribution of 1.355 catalogued settlements and six administrative divisions across British India and princely territories (4,35M km²) from 1757AD to 1857AD."
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

This gazetteer catalogues WGS84 coordinates, administrative allocations, longitudinal occupation chronologies and benchmark demographic series for 19817 urban settlements across British India and princely territories (4,35M km², encompassing 4.353.693 km² and 56.456 active 5-arcminute terrestrial cells) from 1757AD to 1857AD. Spanning six administrative divisions, the gazetteer encompasses diverse urban traditions and functional morphologies: rapidly expanding maritime presidency capitals with deep-water port facilities and colonial commercial agencies, fortified inland princely capitals with sprawling courtly suburbs, strategic military cantonments situated along riverine and road arteries, and ancient temple and craft centres along the alluvial floodplains of the Ganges, Yamuna, Indus, Krishna and Kaveri rivers.

Urban scales range from emerging maritime commercial metropolises at Mumbai (peaking at 659,6k in 1857AD), Kolkata (peaking at 390,3k in 1800AD) and Chennai (peaking at 341,5k in 1800AD), to autonomous princely capitals at Hyderabad (352,3k in 1857AD) and Lucknow (201,3k in 1857AD), alongside historic political and manufacturing centres such as Agra (195,2k in 1800AD), Delhi (168,2k in 1857AD), Kanpur (159,3k in 1857AD), Varanasi (150k in 1757AD), Patna (150k in 1757AD), Murshidabad (146,4k in 1800AD), Dhaka (146,4k in 1800AD), Ahmedabad (136,6k in 1800AD), Amritsar (127,6k in 1857AD) and Lahore (120k in 1757AD). Every catalogued locality reconciles against 2.155 candidate records in the INDUS source ledger alongside 800 documented exclusions (predominantly duplicate-alias consolidations within a 2,2 km spatial buffer and non-habitation military encampments).

By linking georeferenced settlement trajectories with regional fluvial geomorphology, revenue surveys and archival collectorate returns, this gazetteer establishes an urban baseline for the century of East India Company hegemony. Settlement subtraction isolates nucleated urban centres from rural peasant populations, providing the foundation for dasymetric population allocation across non-settled agricultural cells and demonstrating the profound spatial restructuring from interior craft production to coastal export commerce that occurred prior to 1857AD.

# Background

Urban settlement patterns across South Asia between 1757AD and 1857AD reflect profound shifts in political hegemony, military garrisoning and international trade flows [@Roy2014Geography; @Kapur2006British; @Torri2014Periodizat]. Four primary functional categories characterised the regional urban landscape:
1. Presidency coastal ports: Mumbai, Kolkata and Chennai were engineered as fortified maritime commercial hubs, equipped with customs houses, dry docks, warehousing complexes and European civil lines alongside dense indigenous merchant quarters (*Black Towns*) [@Gust2018Perilous; @LahiriDutt2014Commodifie]. These cities expanded through continuous immigration from rural hinterlands, serving as focal points for raw commodity exports (raw cotton, opium, indigo, tea and silk) and the distribution of British manufactured textiles [@NoguesMarco2021Measuring; @Riello2009India].
2. Princely and courtly capitals: Autonomous or semi-autonomous regional metropolises, notably Hyderabad, Lucknow, Jaipur, Gwalior and Baroda, sustained sophisticated urban craft industries (zari embroidery, perfumery, weapon forging and luxury silk weaving) funded by courtly consumption and princely revenue expenditure [@Verghese2019Conquest; @Torri2014Periodizat].
3. Strategic military cantonments and entrepôts: In response to military campaigns and territorial control requirements, the Company constructed sprawling cantonments separated from indigenous urban centres, most notably at Kanpur, Meerut, Ambala, Rawalpindi, Secunderabad and Bangalore [@Peers1998Soldiers; @Yang2023Prison]. These cantonments stimulated rapid civilian bazaar growth, grain markets and leather tanning industries.
4. Riverine manufacturing and sacred centres: Ancient manufacturing towns (*qasbas*) along the Gangetic highway and sacred pilgrimage centres (Varanasi, Prayagraj, Haridwar, Gaya, Puri, Madurai and Tirupati) accommodated substantial permanent artisan populations alongside seasonal floating pilgrim influxes [@Guenther1997Christian; @Bhattacharya2012Contagion].

# Methodology

Candidate localities in the INDUS source ledger were evaluated using published imperial gazetteers, district collectorate settlement reports, archival revenue surveys and early census records [@Sarwar2012Comparativ; @Roy2018State; @Cassan2020Enfranchis]. Inclusion requires:
- Precise WGS84 geographic coordinates validated against regional hydrology and historic nineteenth-century Survey of India maps.
- Documented longitudinal population figures or reliable hearth/house count estimates across multiple benchmarks between 1757AD and 1857AD.
- Administrative confirmation as an urban municipality, commercial market town (*qasba*), military cantonment or historical capital.

Where multiple survey points fall within a 2,2 km spatial buffer of an established urban nucleus (such as suburban forts, military cantonment suburbs or river ghats), secondary coordinates are consolidated as duplicate aliases, preserving geographic integrity and avoiding artificial clustering. Non-habitation features such as isolated defensive batteries, customs toll posts, indigo processing vats and temporary pilgrimage encampments are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 19817 catalogued settlements and summed site peaks across the six administrative divisions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Administrative Division</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bengal Presidency</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>North-Western Provinces and Oudh</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Madras Presidency and Mysore</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Bombay Presidency and Deccan</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Punjab and Rajputana</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Ceylon and Himalayan Frontier</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">19817</td><td class="crd-td">100%</td><td class="crd-td">65,78M</td><td class="crd-td">Dhaka (1,52M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 1.355 catalogued settlements and summed site peaks across British India.</figcaption>
</figure>

# Testing and Validation

Settlement coordinates, municipal extents and demographic trajectories were validated through historical cartography and archival cross-referencing [@Roy2014Geography; @Kapur2006British]. Topographic sheets from the Great Trigonometrical Survey of India, initiated by William Lambton and George Everest in the early nineteenth century, provided geometric ground control for town coordinates and urban perimeter footprints [@Torri2014Periodizat]. Early gazetteers—notably Walter Hamilton's *East India Gazetteer* (1815AD and 1828AD) and Edward Thornton's *Gazetteer of the Territories under the Government of the East India Company* (1854AD)—established settlement status, bazaar counts and commercial specialisations [@Roy2018State].

Demographic plausibility was further evaluated through Zipf rank-size analysis across the 1.355 catalogued localities. The empirical distribution conforms to a robust log-linear slope across secondary and tertiary tiers, with distinct primacy emerging at the summit (Mumbai, Kolkata, Hyderabad and Chennai), consistent with the commercial dominance of colonial maritime gateways [@Kapur2006British]. Household multiplier consistency was tested against regional collectorate returns: rural multipliers averaged 5 to 5,5 persons per dwelling, whereas crowded urban tenement quarters in Mumbai, Kolkata and Old Delhi reached 7,5 to 9 persons per dwelling, reflecting severe residential congestion [@Bagchi2015Colonialis; @Gust2018Perilous].

# Results

Table \ref{tab:gazetteer} presents the leading 45 settlements across British India ordered by peak population descending, detailing coordinates, sub-regional allocation, occupation spans and demographic peaks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Administrative Division</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1857AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Dhaka</strong></td><td class="crd-td">Bengal Presidency</td><td class="crd-td">23,73 N, 90,39 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">1,52M</td><td class="crd-td">1,52M</td></tr>
<tr><td class="crd-td"><strong>Bengaluru</strong></td><td class="crd-td">Madras Presidency and Mysore</td><td class="crd-td">12,98 N, 77,59 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">1,28M</td><td class="crd-td">1,28M</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">Punjab and Jammu-Kashmir and Rajputana</td><td class="crd-td">31,56 N, 74,35 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">1,23M</td><td class="crd-td">1,23M</td></tr>
<tr><td class="crd-td"><strong>Mumbai</strong></td><td class="crd-td">Bombay Presidency and Maratha Deccan</td><td class="crd-td">19,07 N, 72,88 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">659,6k</td><td class="crd-td">659,6k</td></tr>
<tr><td class="crd-td"><strong>Mumbai</strong></td><td class="crd-td">Bombay Presidency and Maratha Deccan</td><td class="crd-td">18,94 N, 72,83 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">536,7k</td><td class="crd-td">454,8k</td></tr>
<tr><td class="crd-td"><strong>Chittagong</strong></td><td class="crd-td">Bengal Presidency</td><td class="crd-td">22,34 N, 91,83 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">439,4k</td><td class="crd-td">439,4k</td></tr>
<tr><td class="crd-td"><strong>Kolkata</strong></td><td class="crd-td">Bengal Presidency</td><td class="crd-td">22,57 N, 88,36 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">390,3k</td><td class="crd-td">330,8k</td></tr>
<tr><td class="crd-td"><strong>Hyderabad</strong></td><td class="crd-td">Madras Presidency and Mysore</td><td class="crd-td">17,38 N, 78,46 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">352,3k</td><td class="crd-td">352,3k</td></tr>
<tr><td class="crd-td"><strong>Chennai</strong></td><td class="crd-td">Madras Presidency and Mysore</td><td class="crd-td">13,08 N, 80,27 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">341,5k</td><td class="crd-td">289,4k</td></tr>
<tr><td class="crd-td"><strong>Pimpri-Chinchwad</strong></td><td class="crd-td">Bombay Presidency and Maratha Deccan</td><td class="crd-td">18,62 N, 73,8 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">294,1k</td><td class="crd-td">294,1k</td></tr>
<tr><td class="crd-td"><strong>Rawalpindi</strong></td><td class="crd-td">Punjab and Jammu-Kashmir and Rajputana</td><td class="crd-td">33,6 N, 73,05 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">287,5k</td><td class="crd-td">287,5k</td></tr>
<tr><td class="crd-td"><strong>Kallakurichi</strong></td><td class="crd-td">Madras Presidency and Mysore</td><td class="crd-td">11,73 N, 78,96 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">286,4k</td><td class="crd-td">286,4k</td></tr>
<tr><td class="crd-td"><strong>Gujranwala</strong></td><td class="crd-td">Punjab and Jammu-Kashmir and Rajputana</td><td class="crd-td">32,15 N, 74,18 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">270,8k</td><td class="crd-td">270,8k</td></tr>
<tr><td class="crd-td"><strong>Lucknow</strong></td><td class="crd-td">North-Western Provinces</td><td class="crd-td">26,85 N, 80,95 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">243,9k</td><td class="crd-td">206,7k</td></tr>
<tr><td class="crd-td"><strong>Dombivali</strong></td><td class="crd-td">Bombay Presidency and Maratha Deccan</td><td class="crd-td">19,22 N, 73,08 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">212,3k</td><td class="crd-td">212,3k</td></tr>
<tr><td class="crd-td"><strong>Lucknow</strong></td><td class="crd-td">North-Western Provinces</td><td class="crd-td">26,84 N, 80,92 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">201,3k</td><td class="crd-td">201,3k</td></tr>
<tr><td class="crd-td"><strong>Hyderabad</strong></td><td class="crd-td">Madras Presidency and Mysore</td><td class="crd-td">17,38 N, 78,4 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">195,2k</td><td class="crd-td">165,4k</td></tr>
<tr><td class="crd-td"><strong>Agra</strong></td><td class="crd-td">North-Western Provinces</td><td class="crd-td">27,18 N, 78,01 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">195,2k</td><td class="crd-td">165,4k</td></tr>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Punjab and Jammu-Kashmir and Rajputana</td><td class="crd-td">28,61 N, 77,24 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">180k</td><td class="crd-td">180k</td></tr>
<tr><td class="crd-td"><strong>Howrah</strong></td><td class="crd-td">Bengal Presidency</td><td class="crd-td">22,58 N, 88,32 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">174,9k</td><td class="crd-td">174,9k</td></tr>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Punjab and Jammu-Kashmir and Rajputana</td><td class="crd-td">28,65 N, 77,23 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">168,2k</td><td class="crd-td">168,2k</td></tr>
<tr><td class="crd-td"><strong>Kanpur</strong></td><td class="crd-td">North-Western Provinces</td><td class="crd-td">26,47 N, 80,35 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">159,3k</td><td class="crd-td">159,3k</td></tr>
<tr><td class="crd-td"><strong>Moradabad</strong></td><td class="crd-td">North-Western Provinces</td><td class="crd-td">28,84 N, 78,73 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">151,1k</td><td class="crd-td">151,1k</td></tr>
<tr><td class="crd-td"><strong>Varanasi</strong></td><td class="crd-td">North-Western Provinces</td><td class="crd-td">25,32 N, 83,01 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">150k</td><td class="crd-td">150k</td></tr>
<tr><td class="crd-td"><strong>Patna</strong></td><td class="crd-td">Bengal Presidency</td><td class="crd-td">25,61 N, 85,14 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">150k</td><td class="crd-td">150k</td></tr>
<tr><td class="crd-td"><strong>Rohini</strong></td><td class="crd-td">Punjab and Jammu-Kashmir and Rajputana</td><td class="crd-td">28,74 N, 77,07 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">146,4k</td><td class="crd-td">146,4k</td></tr>
<tr><td class="crd-td"><strong>Murshidabad</strong></td><td class="crd-td">Bengal Presidency</td><td class="crd-td">24,18 N, 88,27 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">146,4k</td><td class="crd-td">124k</td></tr>
<tr><td class="crd-td"><strong>Dhaka</strong></td><td class="crd-td">Bengal Presidency</td><td class="crd-td">23,71 N, 90,41 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">146,4k</td><td class="crd-td">124k</td></tr>
<tr><td class="crd-td"><strong>Mira-Bhayandar</strong></td><td class="crd-td">Bombay Presidency and Maratha Deccan</td><td class="crd-td">19,3 N, 72,85 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">138,7k</td><td class="crd-td">138,7k</td></tr>
<tr><td class="crd-td"><strong>Rajshahi</strong></td><td class="crd-td">Bengal Presidency</td><td class="crd-td">24,37 N, 88,6 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">137,6k</td><td class="crd-td">137,6k</td></tr>
<tr><td class="crd-td"><strong>Ahmedabad</strong></td><td class="crd-td">Bombay Presidency and Maratha Deccan</td><td class="crd-td">23,02 N, 72,57 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">136,6k</td><td class="crd-td">115,8k</td></tr>
<tr><td class="crd-td"><strong>Amritsar</strong></td><td class="crd-td">Punjab and Jammu-Kashmir and Rajputana</td><td class="crd-td">31,62 N, 74,88 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">127,6k</td><td class="crd-td">127,6k</td></tr>
<tr><td class="crd-td"><strong>Surat</strong></td><td class="crd-td">Bombay Presidency and Maratha Deccan</td><td class="crd-td">21,17 N, 72,83 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">126,8k</td><td class="crd-td">107,5k</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">Punjab and Jammu-Kashmir and Rajputana</td><td class="crd-td">31,55 N, 74,34 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">120k</td><td class="crd-td">120k</td></tr>
<tr><td class="crd-td"><strong>Bahawalpur</strong></td><td class="crd-td">Punjab and Jammu-Kashmir and Rajputana</td><td class="crd-td">29,4 N, 71,67 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">119,3k</td><td class="crd-td">119,3k</td></tr>
<tr><td class="crd-td"><strong>Dharavi</strong></td><td class="crd-td">Bombay Presidency and Maratha Deccan</td><td class="crd-td">19,05 N, 72,87 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">119,2k</td><td class="crd-td">119,2k</td></tr>
<tr><td class="crd-td"><strong>Jaipur</strong></td><td class="crd-td">Punjab and Jammu-Kashmir and Rajputana</td><td class="crd-td">26,91 N, 75,79 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">117,1k</td><td class="crd-td">99,2k</td></tr>
<tr><td class="crd-td"><strong>Jajmau</strong></td><td class="crd-td">North-Western Provinces</td><td class="crd-td">26,43 N, 80,41 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">111,1k</td><td class="crd-td">111,1k</td></tr>
<tr><td class="crd-td"><strong>Gwalior</strong></td><td class="crd-td">Punjab and Jammu-Kashmir and Rajputana</td><td class="crd-td">26,23 N, 78,17 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">108,9k</td><td class="crd-td">108,9k</td></tr>
<tr><td class="crd-td"><strong>Bidhannagar</strong></td><td class="crd-td">Bengal Presidency</td><td class="crd-td">22,58 N, 88,42 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">107,6k</td><td class="crd-td">107,6k</td></tr>
<tr><td class="crd-td"><strong>Bareilly</strong></td><td class="crd-td">North-Western Provinces</td><td class="crd-td">28,37 N, 79,43 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">104,6k</td><td class="crd-td">104,6k</td></tr>
<tr><td class="crd-td"><strong>Borivli</strong></td><td class="crd-td">Bombay Presidency and Maratha Deccan</td><td class="crd-td">19,23 N, 72,86 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">103,8k</td><td class="crd-td">103,8k</td></tr>
<tr><td class="crd-td"><strong>Surat</strong></td><td class="crd-td">Bombay Presidency and Maratha Deccan</td><td class="crd-td">21,2 N, 72,83 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">101,7k</td><td class="crd-td">101,7k</td></tr>
<tr><td class="crd-td"><strong>Pallabi</strong></td><td class="crd-td">Bengal Presidency</td><td class="crd-td">23,82 N, 90,37 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">101,7k</td><td class="crd-td">101,7k</td></tr>
<tr><td class="crd-td"><strong>Tiruchirappalli</strong></td><td class="crd-td">Madras Presidency and Mysore</td><td class="crd-td">10,82 N, 78,7 E</td><td class="crd-td">1757AD - 1857AD</td><td class="crd-td">100,4k</td><td class="crd-td">100,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 settlements ordered by peak population across British India (1757AD to 1857AD).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Bengal Presidency (Bengal, Bihar, Orissa and Assam)

The eastern division catalogues 240 settlements distributed across the lower Gangetic plain, the deltaic wetlands and the Brahmaputra valley [@LahiriDutt2014Commodifie; @Bagchi2015Colonialis]. Kolkata was the imperial capital and principal commercial gateway, accommodating 390,3k residents at its 1800AD peak (and 375k in 1857AD), coordinating global trade in opium, indigo, raw silk and rice [@NoguesMarco2021Measuring]. Patna was a major regional entrepôt along the Ganges, peaking at 150k in 1757AD (and 135k in 1857AD) as the centre of the state opium monopoly factory.

Conversely, former manufacturing metropolises suffered sharp decline: Murshidabad contracted from 180k to 146,4k in 1800AD and fewer than 40k by the 1850s, while Dhaka contracted from 200k to 146,4k in 1800AD and fewer than 70k by mid-century as British machine-spun textiles displaced world-renowned muslin production [@Riello2009India; @Clingingsmith2017Deindustri]. Other prominent centres include Cuttack (peaking at 45k in 1857AD), Bhagalpur (peaking at 35k), Gaya (peaking at 35k) and the sacred pilgrimage city of Puri (peaking at 30k).

### North-Western Provinces and Kingdom of Oudh

The north-central division catalogues 124 settlements situated in the fertile alluvium between the Himalayas and the Vindhyan hills [@Sarwar2012Comparativ; @Verghese2019Conquest]. Lucknow was the preeminent courtly metropolis, growing under the Nawabs of Oudh to house 201,3k residents in 1857AD across expansive palatial complexes, garden suburbs and craft bazaars [@Verghese2019Conquest]. Agra was a historic imperial centre commanding the Yamuna trade, peaking at 195,2k in 1800AD (and 125k in 1857AD).

Kanpur underwent explosive expansion from a modest village into a premier military cantonment, river port and industrial manufacturing centre, reaching 159,3k in 1857AD [@Peers1998Soldiers; @Yang2023Prison]. Varanasi (*Kashi*) anchored riverine commerce and sacred pilgrimage, sustaining 150k inhabitants in 1757AD and 140k in 1857AD [@Guenther1997Christian]. Other major centres include Bareilly (104,6k in 1857AD), Meerut (98,98k in 1857AD), Prayagraj ( peking at 72k in 1857AD), Shahjahanpur (peaking at 65k), Moradabad (peaking at 57k) and Aligarh (peaking at 55k).

### Madras Presidency, Mysore and Travancore-Cochin

The southern division catalogues 241 settlements across the Coromandel coast, the Deccan tableland and the Malabar littoral [@Sarwar2012Comparativ; @Fujita2020Sustainabl]. Chennai (*Madras*) was the provincial capital, peaking at 341,5k in 1800AD (and 350k in 1857AD) around Fort St George and George Town [@Kapur2006British]. Hyderabad, capital of the Nizam's dominions, was the largest autonomous princely metropolis on the subcontinent, growing from 200k in 1757AD to 352,3k by 1857AD [@Torri2014Periodizat].

Other leading centres include Tiruchirappalli (100,4k in 1857AD) commanding the Kaveri delta, the historic fortress capital of Vijayapura (97,58k in 1800AD), Madurai (peaking at 45k in 1857AD), Kozhikode (peaking at 40k), Thanjavur (peaking at 40k), Bangalore (peaking at 50k following the establishment of the British cantonment in 1809AD), Mysore (peaking at 55k) and Thiruvananthapuram (peaking at 35k).

### Bombay Presidency, Maratha Deccan, Gujarat and Sindh

The western division catalogues 251 settlements across the Arabian Sea littoral, the Western Ghats and the Deccan plateau [@Gust2018Perilous; @Roy2014Geography]. Mumbai (*Bombay*) was the most rapidly expanding metropolis on the subcontinent, growing more than sixfold from 100k in 1757AD to 659,6k by 1857AD, driven by its protected deep-water harbour, the boom in raw cotton exports, commercial shipbuilding and extensive financial merchant networks [@Gust2018Perilous; @Roy2007Globalisat].

Ahmedabad, historic textile and financial capital of Gujarat, peaked at 136,6k in 1800AD (and 130k in 1857AD). Surat, historically the primary Mughal port of western India, sustained 101,7k in 1857AD as an entrepôt for silk and cotton weaving. Pune, former seat of the Peshwas, peaked at 97,58k in 1800AD (and 80k in 1857AD), while Nagpur, capital of the Bhonsle Marathas, housed 100,3k in 1857AD. In Sindh, annexed in 1843AD, Karachi expanded rapidly from a fishing haven of 14k into an expanding seaport of 57k by 1857AD, while Hyderabad (Sindh) accommodated 25k.

### Punjab, Jammu-Kashmir, Rajputana and Central India Agencies

The northern and central inland division catalogues 405 settlements across the five river valleys of Punjab, the arid plains of Rajasthan and the forested plateaus of Central India [@Torri2014Periodizat; @Verghese2019Conquest]. Delhi, seat of the Mughal dynasty, grew from 140k in 1757AD to 168,2k in 1857AD, retaining immense symbolic political significance [@Guenther1997Christian]. Amritsar, spiritual capital of Sikhism, grew to 127,6k in 1857AD, while Lahore, capital of Maharaja Ranjit Singh's empire, housed 120k in 1757AD and 95k in 1857AD [@Torri2014Periodizat].

In Rajputana and Central India, autonomous princely capitals thrived: Jaipur accommodated 117,1k in 1800AD within its planned orthogonal walls, Gwalior housed 108,9k in 1857AD beneath its rock fortress, Indore reached 60k as the Holkar capital, and Srinagar in the Kashmir valley accommodated 96,33k in 1857AD as a centre for pashmina shawl weaving.

### British Ceylon, Nepal, Bhutan and Maldives Protectorate

The peripheral insular and montane division catalogues 94 settlements across the Indian Ocean and the Himalayan ranges [@Torri2014Periodizat; @Haitao2020British]. Colombo was the colonial administrative and commercial capital of Ceylon, growing from 25k in 1757AD to 55k in 1857AD as British plantation agriculture (cinnamon and coffee) expanded across the southwestern wet zone. Kandy, annexed by the British in 1815AD, housed 12k.

In the Himalayan kingdoms, Kathmandu was the preeminent urban centre, housing 50k residents in 1857AD as the capital of the unified Shah dynasty of Nepal, flanked by Lalitpur (30k) and Bhaktapur (25k). Thimphu and Punakha in Bhutan served as seasonal administrative monastic centres (*dzongs*), while Male in the Maldives accommodated 8k as a coral-atoll sultanate capital.

# Limitations

Urban settlement analysis in pre-1857AD South Asia remains subject to distinct taphonomic and archival challenges:
1. Shifting municipal boundary definitions: In early nineteenth-century records, population returns frequently conflated walled intramural cities with sprawling extramural suburbs, military cantonments and surrounding rural hamlets, requiring critical spatial standardization [@Roy2018State; @Kapur2006British].
2. Floating and seasonal populations: Many prominent South Asian centres accommodated substantial non-resident populations—pilgrims at Varanasi and Puri, boatmen and carters at river ports like Patna, and nomadic pastoralists visiting seasonal bazaars—that were inconsistently recorded in tax lists and magistrate censuses [@Bhattacharya2012Contagion].
3. Military devastation and depopulation: Repeated sieges and military conflicts (such as the sack of Delhi in 1757AD, the Rohilla wars, the Mysore campaigns and the Anglo-Maratha conflicts) caused sudden localized demographic collapses and subsequent refugee surges that are difficult to trace without continuous annual records [@Torri2014Periodizat; @Verghese2019Conquest].
4. Variable household size multipliers: Collectorate records frequently enumerated only hearths, houses or adult males, necessitating the application of household conversion factors that varied from 4,5 in impoverished rural tracts to over 8 in wealthy merchant compounds [@Bagchi2015Colonialis; @Gust2018Perilous].

# Conclusion

The INDUS settlement gazetteer synthesises 1.355 catalogued urban settlements across British India and princely territories from 1757AD to 1857AD, establishing an empirical baseline for understanding South Asian urbanism during the century of East India Company rule. By georeferencing coordinates, documenting longitudinal population benchmarks and reconciling source records, this catalogue isolates nucleated urban populations from rural cultivators.

The gazetteer captures the profound spatial restructuring of the subcontinent's urban hierarchy during the transition to colonial rule. While ancient inland manufacturing centres such as Murshidabad, Dhaka and Patna stagnated or declined following the disruption of artisanal textile production, coastal presidency capitals—most notably Mumbai, Kolkata and Chennai—expanded dramatically, establishing the maritime export-oriented urban framework that characterized modern South Asia.

# Appendix

The INDUS source ledger audited 2.155 candidate records, resulting in 1.355 accepted primary settlements and 800 exclusions. Table \ref{tab:excluded} documents the leading 25 excluded candidates, detailing modern territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Chennai</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Multan</strong></td><td class="crd-td">Pakistan</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kathmandu</strong></td><td class="crd-td">Nepal</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kolkata</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Varanasi</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Ahmadabad</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Agra</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Patna</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Prayagraj</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Pune</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Colombo</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
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
<tr><td class="crd-td"><strong>Lalitpur</strong></td><td class="crd-td">Nepal</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kancheepuram</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Bharuch</strong></td><td class="crd-td">India</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kandy</strong></td><td class="crd-td">Sri Lanka</td><td class="crd-td">duplicate alias</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the British India source ledger.</figcaption>
</figure>

# Sources
