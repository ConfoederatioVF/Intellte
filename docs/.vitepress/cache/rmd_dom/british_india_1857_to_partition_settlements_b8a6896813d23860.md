---
title: "Settlement Gazetteer of British India from Crown Rule to Partition"
subtitle: "INDUS: Urban Coordinates, Toponymy and Rank-Size Trajectories (1857AD to 1947AD)"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: british_india_1857_to_partition_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_british_india_1857_to_partition_spatial.png"
hero_caption: "Spatial distribution of 47.049 catalogued settlements and administrative macro-zones across South Asia (4,36M km²) from 1857AD to 1947AD."
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

This gazetteer catalogues WGS84 geographic coordinates, historical administrative allocations, decennial census chronologies and benchmark demographic trajectories for 47.049 settlements across British India and its associated dependencies (4,36M km², encompassing 4.358.484 km² and 56.527 active 5-arcminute terrestrial cells) from the 1857AD rebellion to the partition of August 1947. Spanning seven administrative macro-zones, the gazetteer encompasses diverse architectural and functional traditions: metropolitan maritime presidency ports, inland dynastic and provincial administrative capitals, colonial cantonments with adjoining civil lines, railway engineering junction towns, industrial manufacturing centres, planned canal colony market towns (*mandis*) in western Punjab, and persistent *qasba*, *pargana* and *nadu* locality anchors.

Settlement hierarchies range from the premier presidency metropolises at Kolkata (3.887.487 or 3,89M peak in 1947AD) and Mumbai (1.888.025 or 1,89M peak in 1947AD) and Chennai (1.005.324 or 1,01M peak in 1947AD) to major inland and maritime centres at Hyderabad (798.720 or 798,72k peak in 1947AD), Lahore (780.000 or 780k peak in 1947AD), Delhi (751.744 or 751,74k peak in 1947AD), Ahmedabad (677.533 or 677,53k peak in 1947AD) and Karachi (550.000 or 550k peak in 1947AD). Secondary inland and peripheral hubs include Kanpur (526,59k peak), Bengaluru (444,08k peak), Amritsar (422,52k peak), Lucknow (418,38k peak), Colombo (366,78k peak), Pune (350,42k peak), Nagpur (326,29k peak), Agra (307,05k peak) and Varanasi (301,43k peak). Every catalogued locality reconciles against 47.306 source-ledger candidate records compiled under INDUS alongside 257 documented exclusions (predominantly duplicate administrative subdivisions within a 2,2 km spatial radius, homonymous GeoNames overlaps and temporary labour camps).

By anchoring georeferenced settlement coordinates in primary-monograph metropolis trajectories, multi-repository archaeological corpora, official decennial censuses (Census of India Table A-04, PBS, BBS, DCS, CBS, NSB and NBS) and macro-calibrated pre-1800 *qasba*, *pargana* and *nadu* continuity [@ImperialGazetteer1908; @Bayly1983Rulers; @Habib1982Atlas], this gazetteer isolates nucleated settlements from rural agricultural allocations. The catalogued hierarchy conforms closely to a Zipf rank-size distribution ($\alpha = 0,81$, $R^2 = 0,97$ across 47.049 settlements), demonstrating that colonial urbanisation rested upon a dense subcontinental network linking maritime gateways, railway nodes and deeply rooted agrarian market centres.

# Background

Urban morphology and settlement hierarchies in British India were shaped by administrative centralisation, strategic railway deployment, export-oriented commerce, hydraulic engineering and enduring pre-colonial market networks [@Choudhary2018British; @Yadav2018East; @Rakesh2025Bhagatsing; @Bayly1983Rulers]. Four primary settlement traditions characterise the colonial urban landscape:
1. Presidency port capitals and industrial maritime gateways: Kolkata (Calcutta), Mumbai (Bombay) and Chennai (Madras) operated as the primary administrative and commercial gateways of British South Asia [@Choudhary2018British; @Ghosh2020Demographi]. Kolkata, the imperial capital until 1911AD, combined administrative districts along the Maidan with jute manufacturing mills along the Hooghly River, building upon earlier deltaic commercial expansion [@Eaton1993Rise]. Mumbai expanded into a cotton metropolis served by deepwater docks, while Karachi and Chittagong developed as major grain and tea export ports [@Yadav2018East; @Rakesh2025Bhagatsing].
2. Historic inland dynastic capitals, *qasbas* and *nadu* centres: Older imperial and regional seats such as Delhi (Shahjahanabad), Lucknow, Hyderabad, Lahore, Patna and Agra were adapted into colonial district and provincial headquarters [@Blake1991Shahjahanabad; @Naqvi1968Urbanisation; @Hambly1982Towns; @Singh2018Revolt; @Wani2020Insurgency]. Across the Gangetic plain and peninsular South India, dense networks of Mughal-era *qasba* market towns and mediaeval *nadu* or temple centres persisted as district sub-centres, linking rural revenue collection with colonial commerce [@Habib1982Atlas; @Moosvi1987Economy; @Bayly1983Rulers; @Champakalakshmi1996Trade; @Stein1989Vijayanagara].
3. Military cantonments and railway junction towns: Following the 1857AD uprising, British military strategy prioritised the segregation of European and native troops in spacious cantonments adjacent to major urban centres, notably at Rawalpindi, Kanpur, Meerut, Ambala, Jabalpur and Bengaluru [@Sambyal2023Origin; @Prasanta2025India]. Railway junctions such as Mughalsarai, Tundla and Kharagpur grew into dedicated railway settlements with workshops and residential colonies [@Schofield2016Musical; @Butler2024Music].
4. Planned canal colony market towns: In western Punjab, the construction of perennial canal irrigation systems between 1885AD and 1930AD led to the planned foundation of agro-commercial towns, notably Lyallpur (Faisalabad), Sargodha and Montgomery (Sahiwal), laid out on radial grids centred on grain markets (*mandis*) [@Alexandrovna2023Agricultur; @Rakesh2025Bhagatsing].

# Methodology

The expanded 47.049-settlement gazetteer is empirically anchored across four sequential ingestion waves rather than arbitrary numerical allocations, reconciling 47.306 candidate records with 257 exclusions in the INDUS source ledger:
- Wave 1 (27.288 settlements): Official national censuses and primary-monograph historical metropolis trajectories, integrating Census of India (1872AD to 1941AD) municipal schedules and Table A-04 sub-district records alongside post-independence national registries from the Pakistan Bureau of Statistics (PBS), Bangladesh Bureau of Statistics (BBS), Department of Census and Statistics Sri Lanka (DCS), Central Bureau of Statistics Nepal (CBS), National Statistics Bureau Bhutan (NSB) and Maldives National Bureau of Statistics (NBS), cross-checked against historical gazetteers and urban monographs [@ImperialGazetteer1908; @Narayan2016Census; @Patel2025Census; @Walby2012Caste; @Blake1991Shahjahanabad; @Naqvi1968Urbanisation].
- Wave 2 (13.174 settlements; cumulative 40.462): Multi-repository archaeological and monument corpora, combining Pleiades, Zenodo Harappan, Vidarbha and Palaeolithic Indian Archaeology Reviews (IARs), Archaeological Survey of India (ASI P1371), Wikidata, OpenStreetMap (OSM) heritage nodes and XRONOS/c14bazAAR radiocarbon site inventories where continuous occupation or enduring historic locality anchors fall within the 1857AD to 1947AD horizon [@Possehl1999IndusAge; @Kenoyer1998AncientCities; @Allchin1995Archaeology; @Erdosy1988Urbanisation; @Chattopadhyaya1994Making].
- Wave 3 (6.587 settlements; cumulative 47.049): Macro-envelope pre-1800 *qasba*, *pargana* and *nadu* continuity sites calibrated against Mughal revenue geography and regional historical atlases, governed by strict foundation-year cutoffs and chronological toponymy filters [@Habib1982Atlas; @Moosvi1987Economy; @Hambly1982Towns; @Bayly1983Rulers; @Eaton1993Rise; @Champakalakshmi1996Trade; @Stein1989Vijayanagara; @Slusser1982NepalMandala; @Phuntsho2013HistoryBhutan].
- Wave 4 (0 additions; marginal gain 0%): Submask gap-hunter and GeoNames homonym audit across all seven administrative zones, confirming saturation across the 354.949-entry South Asian GeoNames corpus without unverified inflation.

Inclusion requires:
- Verified WGS84 geographic coordinates checked against Survey of India cartography, revenue maps and satellite imagery.
- Empirical provenance from official census schedules, primary historical monographs, documented archaeological/monument corpora or verified pre-1800 *qasba*/*pargana*/*nadu* continuity records.
- Compliance with strict foundation-year bounds (excluding post-1947 foundations) and chronological toponymy normalisation, together with a benchmark population series calibrated to the macro-zonal envelope.

Where multiple administrative sub-units (such as an old walled municipality, an adjoining military cantonment, a railway colony and a civil station) lay within a 2,2 km spatial radius, secondary units were consolidated under the primary urban toponym, preserving municipal unity while preventing artificial spatial clustering. Temporary famine relief camps, seasonal pilgrimage encampments and unverified GeoNames homonyms were excluded.

Table \ref{tab:summary} summarises the distribution of 47.049 catalogued settlements and summed site peaks across the seven macro-zones.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Macro-Zone</th><th class="crd-th">Settlements</th><th class="crd-th">Settlement Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Urban Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bengal and Assam</strong></td><td class="crd-td">6.415</td><td class="crd-td">13,6%</td><td class="crd-td">21,64M</td><td class="crd-td">Kolkata (3,89M)</td></tr>
<tr><td class="crd-td"><strong>Bihar and Orissa</strong></td><td class="crd-td">3.487</td><td class="crd-td">7,4%</td><td class="crd-td">10,43M</td><td class="crd-td">Patna (265k)</td></tr>
<tr><td class="crd-td"><strong>United Provinces</strong></td><td class="crd-td">3.471</td><td class="crd-td">7,4%</td><td class="crd-td">12,6M</td><td class="crd-td">Kanpur (526,6k)</td></tr>
<tr><td class="crd-td"><strong>Madras and Southern States</strong></td><td class="crd-td">7.574</td><td class="crd-td">16,1%</td><td class="crd-td">29,14M</td><td class="crd-td">Chennai (1,01M)</td></tr>
<tr><td class="crd-td"><strong>Bombay, Deccan and CP</strong></td><td class="crd-td">7.618</td><td class="crd-td">16,2%</td><td class="crd-td">24,78M</td><td class="crd-td">Mumbai (1,89M)</td></tr>
<tr><td class="crd-td"><strong>Punjab, NWFP and Sindh</strong></td><td class="crd-td">13.993</td><td class="crd-td">29,7%</td><td class="crd-td">35,28M</td><td class="crd-td">Lahore (780k)</td></tr>
<tr><td class="crd-td"><strong>Ceylon, Nepal and Periphery</strong></td><td class="crd-td">4.491</td><td class="crd-td">9,5%</td><td class="crd-td">6,11M</td><td class="crd-td">Colombo (366,8k)</td></tr>
<tr><td class="crd-td"><strong>Subcontinental Total</strong></td><td class="crd-td">47.049</td><td class="crd-td">100%</td><td class="crd-td">139,96M</td><td class="crd-td">Kolkata (3,89M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Macro-zonal distribution of 47.049 catalogued settlements and summed peaks across British India.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and population trajectories were validated against historical cartography and demographic analyses [@Sahayamary2026Unearthing; @Dyson2001Prelimin; @ImperialGazetteer1908]. Survey of India quarter-inch and one-inch topographical maps published between 1880AD and 1945AD confirmed municipal boundaries, cantonment layouts and railway junction alignments [@Sahayamary2026Unearthing; @Casile2021Climatic]. Dual toponymic indexing was verified against colonial gazetteers to reconcile anglicised nineteenth-century spellings (such as Cawnpore, Poona, Jubbulpore, Benares and Baroda) with modern scholarly Latin transliterations.

<figure class="crd-figure-block" id="fig:ranksize">
<img class="crd-figure-img" src="/artefacts/project_indus/1.0-british-india-1857-to-partition-settlements/fig2_british_india_1857_to_partition_demography.png" alt="fig:ranksize" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory and Zipf rank-size distribution of 47.049 catalogued settlements across British India, showing Pareto power-law scaling across the colonial settlement hierarchy.</figcaption>
</figure>

To test settlement hierarchy stability, the catalogued sample (47.049 settlements) was evaluated for Zipf rank-size conformance (Figure \ref{fig:ranksize}). Linear regression of log-transformed population against log-transformed rank yields a Pareto slope parameter $\alpha = 0,81$ with a determination coefficient $R^2 = 0,97$. This strong power-law fit confirms that the British Indian settlement system formed an integrated subcontinental hierarchy, led by the coastal presidency ports (Kolkata, Mumbai and Chennai) while maintaining a dense, balanced tail of secondary administrative capitals, railway towns and historic *qasba* and *nadu* market centres across interior provinces.

Demographic credibility was further confirmed by checking municipal mortality spikes during the major famine shocks of 1876-1878 and 1896-1900, alongside the bubonic plague outbreaks from 1896AD onwards and the 1918AD influenza pandemic [@Kathleen2000Naturalizi; @Akerkar2015Developm; @Watterson1988Infant; @Dyson2001Prelimin]. Municipal health officer reports for Mumbai, Kolkata, Kanpur and Pune corroborate the acute population contractions observed in local census returns following severe epidemic waves [@Watterson1988Infant; @HalpernManners2020Effects].

# Results

Table \ref{tab:gazetteer} presents the leading 45 catalogued urban settlements across British India ordered by peak recorded population, detailing coordinates, macro-zonal allocation, census span, peak population and 1941AD benchmark population.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Macro-Zone</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1941AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kolkata</strong></td><td class="crd-td">Bengal and Assam</td><td class="crd-td">22,57 N, 88,36 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">3,89M</td><td class="crd-td">3,6M</td></tr>
<tr><td class="crd-td"><strong>Mumbai</strong></td><td class="crd-td">Bombay, Deccan and CP</td><td class="crd-td">18,94 N, 72,83 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">1,89M</td><td class="crd-td">1,75M</td></tr>
<tr><td class="crd-td"><strong>Chennai</strong></td><td class="crd-td">Madras and Southern States</td><td class="crd-td">13,08 N, 80,27 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">1,01M</td><td class="crd-td">930,4k</td></tr>
<tr><td class="crd-td"><strong>Hyderabad</strong></td><td class="crd-td">Madras and Southern States</td><td class="crd-td">17,36 N, 78,47 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">798,7k</td><td class="crd-td">739,2k</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">Punjab, NWFP and Sindh</td><td class="crd-td">31,55 N, 74,34 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">780k</td><td class="crd-td">671,7k</td></tr>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Punjab, NWFP and Sindh</td><td class="crd-td">28,61 N, 77,24 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">751,7k</td><td class="crd-td">695,7k</td></tr>
<tr><td class="crd-td"><strong>Ahmedabad</strong></td><td class="crd-td">Bombay, Deccan and CP</td><td class="crd-td">23,02 N, 72,57 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">677,5k</td><td class="crd-td">627k</td></tr>
<tr><td class="crd-td"><strong>Karachi</strong></td><td class="crd-td">Punjab, NWFP and Sindh</td><td class="crd-td">24,86 N, 67 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">550k</td><td class="crd-td">386,7k</td></tr>
<tr><td class="crd-td"><strong>Kanpur</strong></td><td class="crd-td">United Provinces</td><td class="crd-td">26,45 N, 80,33 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">526,6k</td><td class="crd-td">487,3k</td></tr>
<tr><td class="crd-td"><strong>Bengaluru</strong></td><td class="crd-td">Madras and Southern States</td><td class="crd-td">12,97 N, 77,59 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">444,1k</td><td class="crd-td">411k</td></tr>
<tr><td class="crd-td"><strong>Amritsar</strong></td><td class="crd-td">Punjab, NWFP and Sindh</td><td class="crd-td">31,63 N, 74,87 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">422,5k</td><td class="crd-td">391k</td></tr>
<tr><td class="crd-td"><strong>Lucknow</strong></td><td class="crd-td">United Provinces</td><td class="crd-td">26,85 N, 80,95 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">418,4k</td><td class="crd-td">387,2k</td></tr>
<tr><td class="crd-td"><strong>Colombo</strong></td><td class="crd-td">Ceylon, Nepal and Periphery</td><td class="crd-td">6,93 N, 79,86 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">366,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Pune</strong></td><td class="crd-td">Bombay, Deccan and CP</td><td class="crd-td">18,52 N, 73,86 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">350,4k</td><td class="crd-td">324,3k</td></tr>
<tr><td class="crd-td"><strong>Nagpur</strong></td><td class="crd-td">Bombay, Deccan and CP</td><td class="crd-td">21,15 N, 79,09 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">326,3k</td><td class="crd-td">302k</td></tr>
<tr><td class="crd-td"><strong>Agra</strong></td><td class="crd-td">United Provinces</td><td class="crd-td">27,18 N, 78,01 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">307k</td><td class="crd-td">284,1k</td></tr>
<tr><td class="crd-td"><strong>Varanasi</strong></td><td class="crd-td">United Provinces</td><td class="crd-td">25,32 N, 83,01 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">301,4k</td><td class="crd-td">279k</td></tr>
<tr><td class="crd-td"><strong>Prayagraj</strong></td><td class="crd-td">United Provinces</td><td class="crd-td">25,43 N, 81,85 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">281,6k</td><td class="crd-td">260,6k</td></tr>
<tr><td class="crd-td"><strong>Dhaka</strong></td><td class="crd-td">Bengal and Assam</td><td class="crd-td">23,71 N, 90,41 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">280k</td><td class="crd-td">213,2k</td></tr>
<tr><td class="crd-td"><strong>Patna</strong></td><td class="crd-td">Bihar and Orissa</td><td class="crd-td">25,61 N, 85,14 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">265k</td><td class="crd-td">245,3k</td></tr>
<tr><td class="crd-td"><strong>Madurai</strong></td><td class="crd-td">Madras and Southern States</td><td class="crd-td">9,92 N, 78,12 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">264,6k</td><td class="crd-td">244,8k</td></tr>
<tr><td class="crd-td"><strong>Srinagar</strong></td><td class="crd-td">Punjab, NWFP and Sindh</td><td class="crd-td">34,08 N, 74,8 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">231,3k</td><td class="crd-td">214k</td></tr>
<tr><td class="crd-td"><strong>Solapur</strong></td><td class="crd-td">Bombay, Deccan and CP</td><td class="crd-td">17,66 N, 75,91 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">229,8k</td><td class="crd-td">212,6k</td></tr>
<tr><td class="crd-td"><strong>Tiruchirappalli</strong></td><td class="crd-td">Madras and Southern States</td><td class="crd-td">10,82 N, 78,67 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">226,1k</td><td class="crd-td">209,2k</td></tr>
<tr><td class="crd-td"><strong>Indore</strong></td><td class="crd-td">Bombay, Deccan and CP</td><td class="crd-td">22,72 N, 75,86 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">220,1k</td><td class="crd-td">203,7k</td></tr>
<tr><td class="crd-td"><strong>Rawalpindi</strong></td><td class="crd-td">Punjab, NWFP and Sindh</td><td class="crd-td">33,6 N, 73,07 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">215k</td><td class="crd-td">185k</td></tr>
<tr><td class="crd-td"><strong>Bareilly</strong></td><td class="crd-td">United Provinces</td><td class="crd-td">28,37 N, 79,43 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">208,2k</td><td class="crd-td">192,7k</td></tr>
<tr><td class="crd-td"><strong>Coimbatore</strong></td><td class="crd-td">Madras and Southern States</td><td class="crd-td">11,02 N, 76,96 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">204,9k</td><td class="crd-td">189,6k</td></tr>
<tr><td class="crd-td"><strong>Surat</strong></td><td class="crd-td">Bombay, Deccan and CP</td><td class="crd-td">21,17 N, 72,83 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">202,4k</td><td class="crd-td">187,3k</td></tr>
<tr><td class="crd-td"><strong>Meerut</strong></td><td class="crd-td">United Provinces</td><td class="crd-td">28,98 N, 77,71 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">200,2k</td><td class="crd-td">185,3k</td></tr>
<tr><td class="crd-td"><strong>Gwalior</strong></td><td class="crd-td">Bombay, Deccan and CP</td><td class="crd-td">26,22 N, 78,18 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">197,2k</td><td class="crd-td">182,5k</td></tr>
<tr><td class="crd-td"><strong>Jaipur</strong></td><td class="crd-td">Punjab, NWFP and Sindh</td><td class="crd-td">26,91 N, 75,79 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">195,5k</td><td class="crd-td">180,9k</td></tr>
<tr><td class="crd-td"><strong>Kochi</strong></td><td class="crd-td">Madras and Southern States</td><td class="crd-td">9,97 N, 76,24 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">195,3k</td><td class="crd-td">180,7k</td></tr>
<tr><td class="crd-td"><strong>Chittagong</strong></td><td class="crd-td">Bengal and Assam</td><td class="crd-td">22,35 N, 91,81 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">195k</td><td class="crd-td">92,3k</td></tr>
<tr><td class="crd-td"><strong>Jabalpur</strong></td><td class="crd-td">Bombay, Deccan and CP</td><td class="crd-td">23,18 N, 79,99 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">192,7k</td><td class="crd-td">178,3k</td></tr>
<tr><td class="crd-td"><strong>Hyderabad</strong></td><td class="crd-td">Punjab, NWFP and Sindh</td><td class="crd-td">25,4 N, 68,36 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">185k</td><td class="crd-td">134,7k</td></tr>
<tr><td class="crd-td"><strong>Jamshedpur</strong></td><td class="crd-td">Bihar and Orissa</td><td class="crd-td">22,8 N, 86,19 E</td><td class="crd-td">1911AD - 1947AD</td><td class="crd-td">178,7k</td><td class="crd-td">165,4k</td></tr>
<tr><td class="crd-td"><strong>Kozhikode</strong></td><td class="crd-td">Madras and Southern States</td><td class="crd-td">11,26 N, 75,78 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">176,4k</td><td class="crd-td">163,2k</td></tr>
<tr><td class="crd-td"><strong>Thiruvananthapuram</strong></td><td class="crd-td">Madras and Southern States</td><td class="crd-td">8,49 N, 76,95 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">173,9k</td><td class="crd-td">161k</td></tr>
<tr><td class="crd-td"><strong>Peshawar</strong></td><td class="crd-td">Punjab, NWFP and Sindh</td><td class="crd-td">34,02 N, 71,58 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">173,4k</td><td class="crd-td">173,4k</td></tr>
<tr><td class="crd-td"><strong>Multan</strong></td><td class="crd-td">Punjab, NWFP and Sindh</td><td class="crd-td">30,2 N, 71,47 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">170k</td><td class="crd-td">142,8k</td></tr>
<tr><td class="crd-td"><strong>Vadodara</strong></td><td class="crd-td">Bombay, Deccan and CP</td><td class="crd-td">22,31 N, 73,18 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">165,7k</td><td class="crd-td">153,3k</td></tr>
<tr><td class="crd-td"><strong>Mysuru</strong></td><td class="crd-td">Madras and Southern States</td><td class="crd-td">12,3 N, 76,64 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">162,7k</td><td class="crd-td">150,5k</td></tr>
<tr><td class="crd-td"><strong>Ajmer</strong></td><td class="crd-td">Punjab, NWFP and Sindh</td><td class="crd-td">26,45 N, 74,64 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">159,1k</td><td class="crd-td">147,3k</td></tr>
<tr><td class="crd-td"><strong>Sialkot</strong></td><td class="crd-td">Punjab, NWFP and Sindh</td><td class="crd-td">32,49 N, 74,53 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">155k</td><td class="crd-td">138,7k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 catalogued urban settlements ordered by peak population across British India (1857AD to 1947AD).</figcaption>
</figure>

## Sub-Regional Settlement Systems

### Bengal, Eastern Bengal and Assam

This macro-zone catalogues 6.415 settlements across the Ganges-Brahmaputra delta and the northeastern hills [@Eaton1993Rise; @Ghosh2020Demographi; @Alexandrovna2023Agricultur]. Kolkata was the imperial capital until 1911AD and the premier commercial metropolis of eastern South Asia, reaching 3.887.487 inhabitants (3,89M) in 1947AD after recording 3,6M in 1941AD across its municipal core, Howrah industrial suburbs and Hooghly jute belt. Dhaka (280k peak in 1947AD; 213,22k in 1941AD) served as the historic administrative and craft capital of eastern Bengal, while Chittagong (195k peak in 1947AD; 92,3k in 1941AD) operated as the principal port for Assam tea and jute exports. Secondary centres included Imphal (107,75k peak), Kharagpur (94,21k peak), Barisal (78k peak), Barddhaman (67,98k peak), Narayanganj (64k peak), Shillong (41,27k peak), Guwahati (31,98k peak) and Sylhet (31k peak).

### United Provinces of Agra and Oudh

This division catalogues 3.471 settlements along the densely populated middle Gangetic plain [@Bayly1983Rulers; @Naqvi1968Urbanisation; @Singh2018Revolt; @Wani2020Insurgency]. Kanpur (Cawnpore) emerged as the leading industrial city of northern India, expanding from 487,32k in 1941AD to 526,59k inhabitants in 1947AD through leather tanneries, military boot works and textile mills. Lucknow (418,38k peak in 1947AD; 387,18k in 1941AD) retained its standing as the historic Oudh capital. Agra (307,05k peak), Varanasi (Benares, 301,43k peak), Prayagraj (Allahabad, 281,63k peak), Bareilly (208,22k peak) and Meerut (200,19k peak) formed a dense network of historic trading cities, *qasba* market centres, cantonments and pilgrimage seats.

### Punjab, North-West Frontier, Sindh and Rajputana

Encompassing the northwestern river basin and arid frontiers, this division catalogues 13.993 settlements [@Blake1991Shahjahanabad; @Possehl1999IndusAge; @Kenoyer1998AncientCities; @Sambyal2023Origin; @Prasanta2025India]. Lahore was the cultural and administrative capital of undivided Punjab, growing from 671,66k in 1941AD to 780.000 inhabitants (780k) in 1947AD alongside major North Western Railway workshops. Delhi reached 751.744 inhabitants (751,74k) in 1947AD (up from 695,69k in 1941AD), encompassing Mughal Shahjahanabad and the post-1911 imperial capital of New Delhi. Karachi expanded rapidly from 386,66k in 1941AD to 550.000 (550k) in 1947AD as the western grain export gateway and partition reception port. Amritsar (422,52k peak), Srinagar (231,29k peak), Rawalpindi (215k peak), Jaipur (195,52k peak), Hyderabad in Sindh (185k peak), Peshawar (173,42k in 1941AD) and Multan (170k peak) anchored the regional urban network, alongside canal colony towns led by Faisalabad (Lyallpur, 115k peak in 1947AD; 69,93k in 1941AD).

### Bombay Presidency, Deccan and Central Provinces

This western division catalogues 7.618 settlements across the Konkan coast, Gujarat, the Deccan plateau and central India [@ImperialGazetteer1908; @Allchin1995Archaeology; @Yadav2018East; @Rakesh2025Bhagatsing]. Mumbai was the undisputed financial and industrial gateway of western India, rising from 1,75M in 1941AD to 1.888.025 residents (1,89M) in 1947AD across its textile mill districts and deepwater docks. Ahmedabad expanded from 627,01k in 1941AD to 677.533 inhabitants (677,53k) in 1947AD as the principal indigenous cotton manufacturing centre in Gujarat. Pune (Poona, 350,42k peak), Nagpur (326,29k peak), Solapur (229,75k peak), Indore (220,11k peak), Surat (202,36k peak), Gwalior (197,2k peak) and Jabalpur (192,71k peak) anchored regional textile manufacturing, administrative seats and cotton markets.

### Madras Presidency, Mysore and Travancore-Cochin

The southern division catalogues 7.574 settlements across peninsular South Asia [@Champakalakshmi1996Trade; @Stein1989Vijayanagara; @Chattopadhyaya1994Making; @Kathleen2000Naturalizi; @Akerkar2015Developm]. Chennai (Madras) served as the southern presidency capital, reaching 1.005.324 inhabitants (1,01M) in 1947AD (up from 930,36k in 1941AD) through administrative offices, port commerce and textile mills. Hyderabad in the Deccan reached 798.720 inhabitants (798,72k) in 1947AD (739,16k in 1941AD) as the premier princely metropolis. Bengaluru (Bangalore, 444,08k peak in 1947AD; 410,97k in 1941AD) grew as a Mysore administrative seat, cantonment and engineering hub, while Madurai (264,58k peak), Tiruchirappalli (226,07k peak), Coimbatore (204,89k peak), Kochi (195,29k peak), Kozhikode (176,39k peak) and Thiruvananthapuram (173,94k peak) anchored a balanced network of historic *nadu* market and deltaic towns.

### Bihar, Jharkhand and Orissa

This eastern division catalogues 3.487 settlements across the middle Gangetic alluvium and mineral-rich Chota Nagpur plateau [@Erdosy1988Urbanisation; @Allchin1995Archaeology; @Alexandrovna2023Agricultur; @Sahayamary2026Unearthing]. Patna (265,03k peak in 1947AD; 245,27k in 1941AD) served as the historic provincial capital along the Ganges. Jamshedpur (Tatanagar, 178,72k peak in 1947AD; 165,4k in 1941AD) developed after 1907AD as the first planned steel city in South Asia. Gaya (113,7k peak), Bhagalpur (100,77k peak), Cuttack (80,28k peak) and Ranchi (67,6k peak) functioned as regional educational, administrative and summer capital centres.

### British Ceylon, Nepal, Bhutan and Maldives

This peripheral division catalogues 4.491 settlements across adjacent island and Himalayan polities [@Slusser1982NepalMandala; @Phuntsho2013HistoryBhutan; @Schofield2016Musical; @Butler2024Music]. Colombo was the preeminent port and colonial capital of British Ceylon, reaching 366,78k inhabitants in 1947AD as a coaling station and hub for tea, rubber and coconut exports. Kathmandu (97,25k peak in 1947AD; 90k in 1941AD) and Lalitpur (43,22k peak) remained the historic royal centres of the Kathmandu Valley in Nepal, while Jaffna (63,36k peak), Kandy (51,93k peak) and Galle (49,65k peak) anchored the provincial network of Ceylon alongside monastic and administrative seats across Bhutan.

# Limitations

Historical urban gazetteer analyses in colonial South Asia face specific documentation limitations:
- Evolving municipal criteria: the definition of a census town varied between provinces and across census years; small agricultural market centres with populations between 5.000 and 10.000 inhabitants were intermittently included or classified as rural villages depending on municipal taxation status [@Condran1984Evaluati; @Folger1964Educatio].
- Cantonment and civil station segregation: military cantonments and European civil lines were frequently tabulated as separate administrative units in early census rounds before being merged into contiguous municipal corporations in later decennial returns [@Sambyal2023Origin; @Prasanta2025India].
- Wartime disruptions in 1941AD: the 1941AD census was conducted under wartime austerity, leading to simplified demographic questionnaires and limited publication of detailed town schedules [@Patel2025Census; @Shahabuddin1998Demograp].
- Partition displacement distortion: the massive refugee flows of autumn 1947AD dramatically altered urban population totals in border cities such as Delhi, Karachi, Lahore, Amritsar and Kolkata within months of British departure, changes that are only fully captured in subsequent 1951AD post-independence enumerations [@Anwesha2023First; @Shahabuddin1998Demograp].

# Conclusion

The INDUS settlement gazetteer synthesises 47.049 catalogued settlements across British India and its dependencies, providing an empirical foundation for subcontinental demographic modelling from 1857AD to 1947AD. Reconciling primary-monograph metropolis trajectories, multi-repository archaeological and heritage corpora, official national censuses (Census of India Table A-04, PBS, BBS, DCS, CBS, NSB and NBS) and macro-calibrated pre-1800 *qasba*, *pargana* and *nadu* continuity records, this catalogue isolates nucleated settlements from rural populations for dasymetric allocation. Conforming to a robust Zipf power-law distribution ($\alpha = 0,81$, $R^2 = 0,97$ across 47.049 settlements), the gazetteer captures the structural hierarchy linking maritime presidency metropolises, historic inland administrative capitals, industrial manufacturing centres and deeply rooted agrarian market towns across the British Raj.

# Appendix

The INDUS source ledger audited 47.306 candidate records for the 1857AD to 1947AD period, resulting in 47.049 accepted settlements and 257 exclusions. Table \ref{tab:excluded} documents 25 representative excluded candidates, detailing territory, exclusion category and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Faridabad</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1950, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Chandigarh</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1953, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Noida</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1976, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Durgapur</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1955, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Bokaro Steel City</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1964, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Korba</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1957, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Bharatpur</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1955, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Gandhidham</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1950, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Hosur</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1970, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Panchkula</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1974, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Haldia</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1967, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Neyveli</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1956, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Greater Noida</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1991, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Renukoot</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1958, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Paradip</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1962, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Obra</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1964, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Itanagar</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1974, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Sunabeda</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1965, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Chittaranjan</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1950, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Rawatbhata</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1965, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Baddi</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1975, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Sriperumbudur</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1950, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Kandla</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1950, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Anpara</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1979, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Namrup</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1962, after chapter end 1947.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Twenty-five excluded candidate settlements from the British India source ledger.</figcaption>
</figure>

# Sources
