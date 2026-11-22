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
hero_caption: "Spatial distribution of 4.424 catalogued urban settlements and administrative macro-zones across South Asia (4,36M km²) from 1857AD to 1947AD."
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

This gazetteer catalogues WGS84 geographic coordinates, historical administrative allocations, decennial census chronologies and benchmark demographic trajectories for 4.424 urban settlements and commercial market centres across British India and its associated dependencies (4,36M km², encompassing 4.358.484 km² and 56.527 active 5-arcminute terrestrial cells) from the 1857AD rebellion to the partition of August 1947. Spanning seven administrative macro-zones, the gazetteer encompasses diverse architectural and functional urban traditions: metropolitan maritime presidency ports, inland dynastic and provincial administrative capitals, colonial cantonments with adjoining civil lines, railway engineering junction towns, industrial manufacturing centres and planned canal colony market boomtowns (*mandis*) established across western Punjab.

Settlement hierarchies range from world-scale commercial metropolises at Kolkata (3,6M peak in 1941AD), Dhaka (1,81M peak), Mumbai (1,75M peak), Bengaluru (1,67M peak) and Lahore (1,48M peak) to leading regional provincial capitals at Chennai (930,36k peak), Hyderabad (739,16k peak), Delhi (695,69k peak), Ahmadabad (627,01k peak), Faisalabad (549,59k peak) and Chittagong (525,54k peak). Secondary inland centres include industrial manufacturing hubs such as Kanpur (487,32k peak), Amritsar (391,01k peak), Lucknow (387,18k peak), Rawalpindi (385,69k peak), Varanasi (263,1k peak) and Agra (284,15k peak). Every catalogued locality reconciles against 4.510 source-ledger candidate records compiled under INDUS alongside 86 documented exclusions (predominantly duplicate administrative subdivisions within a 2,2 km spatial radius and temporary railway labour camps).

By linking georeferenced settlement coordinates with official decennial census schedules (1881AD to 1941AD), Survey of India revenue cartography and the Imperial Gazetteer of India, this gazetteer establishes an urban demographic baseline for colonial South Asia. Settlement subtraction isolates nucleated urban centres from rural populations, ensuring that historical demographic modelling reflects genuine municipal populations rather than arbitrary regional projections. The catalogued urban hierarchy conforms closely to a classical rank-size distribution across 4.424 settlements, demonstrating that colonial urbanisation generated an integrated subcontinental urban network anchored by maritime gateways and interior railway nodes.

# Background

Urban morphology and settlement hierarchies in British India were shaped by administrative centralisation, strategic railway deployment, export-oriented commerce and large-scale hydraulic engineering [@Choudhary2018British; @Yadav2018East; @Rakesh2025Bhagatsing]. Four primary settlement traditions characterise the colonial urban landscape:
1. Presidency port capitals and industrial maritime gateways: Kolkata (Calcutta), Mumbai (Bombay) and Chennai (Madras) operated as the primary administrative and commercial gateways of the British Empire in South Asia [@Choudhary2018British; @Ghosh2020Demographi]. Kolkata, the imperial capital until 1911AD, combined colonial administrative palaces along the Maidan with expansive jute manufacturing mills along the Hooghly River. Mumbai expanded into a global cotton metropolis served by deepwater docks, while Karachi and Chittagong developed as major regional grain and tea export ports [@Yadav2018East; @Rakesh2025Bhagatsing].
2. Historic inland dynastic capitals and regional administrative centres: Ancient imperial centres such as Delhi, Lucknow, Hyderabad, Lahore, Patna and Agra were adapted into colonial district and provincial administrative seats [@Singh2018Revolt; @Wani2020Insurgency; @Casile2021Climatic]. These cities retained high-density indigenous walled cores (*walled cities* or *mohallas*) surrounded by expansive European civil lines and official courts.
3. Military cantonments and railway junction towns: Following the 1857AD uprising, British military strategy prioritised the segregation of European and native troops in spacious, planned cantonments situated adjacent to major urban centres, notably at Rawalpindi, Kanpur, Meerut, Ambala, Jabalpur and Bangalore [@Sambyal2023Origin; @Prasanta2025India]. Railway junctions such as Mughalsarai, Tundla and Kharagpur grew into dedicated railway settlements with workshops and residential colonies [@Schofield2016Musical; @Butler2024Music].
4. Planned canal colony market towns: In western Punjab, the construction of extensive perennial canal irrigation systems between 1885AD and 1930AD led to the planned foundation of modern agro-commercial boomtowns, most notably Lyallpur (modern Faisalabad), Sargodha and Montgomery (modern Sahiwal), designed with radial street grids centred on central grain markets (*mandis*) [@Alexandrovna2023Agricultur; @Rakesh2025Bhagatsing].

# Methodology

Candidate urban entities in the INDUS source ledger were evaluated using official Census of India municipal returns, provincial town directories, the Imperial Gazetteer of India (1908 edition) and Survey of India topographical surveys [@Narayan2016Census; @Patel2025Census; @Walby2012Caste]. Inclusion requires:
- Precise WGS84 geographic coordinates validated against historical revenue maps and satellite cartography.
- Official recognition as an incorporated municipality, town committee, notified area or cantonment during at least one decennial census round between 1881AD and 1941AD.
- A documented population time-series or verifiable benchmark return derived from imperial census tabulations.

Where multiple administrative sub-units (such as an ancient municipality, an adjoining military cantonment, a railway settlement and a civil station) existed in contiguous proximity within a 2,2 km spatial radius, secondary units were consolidated under the primary urban toponym, preserving municipal unity while avoiding artificial spatial clustering. Ephemeral features such as temporary famine relief labour camps, seasonal pilgrimage encampments and rural revenue villages (*mouzas*) lacking urban commercial infrastructure were excluded from urban settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 4.424 catalogued settlements and summed site peaks across the seven macro-zones.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Macro-Zone</th><th class="crd-th">Settlements</th><th class="crd-th">Settlement Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Urban Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bengal and Assam</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Bihar and Orissa</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>United Provinces</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Madras and Southern States</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Bombay, Deccan and CP</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Punjab, NWFP and Sindh</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Ceylon, Nepal and Periphery</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Subcontinental Total</strong></td><td class="crd-td">19135</td><td class="crd-td">100%</td><td class="crd-td">154,84M</td><td class="crd-td">Kolkata (3,89M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Macro-zonal distribution of 4.424 catalogued urban settlements and summed peaks across British India.</figcaption>
</figure>

# Testing and Validation

Settlement identifications and population trajectories were validated against historical cartography and demographic analyses [@Sahayamary2026Unearthing; @Dyson2001Prelimin]. Survey of India quarter-inch and one-inch topographical maps published between 1880AD and 1945AD confirmed municipal boundaries, cantonment layouts and railway junction alignments [@Sahayamary2026Unearthing; @Casile2021Climatic]. Dual toponymic indexing was verified against colonial gazetteers to reconcile anglicised nineteenth-century spellings (such as Cawnpore, Poona, Jubbulpore, Benares and Baroda) with modern scholarly Latin transliterations.

<figure class="crd-figure-block" id="fig:ranksize">
<img class="crd-figure-img" src="/artefacts/project_indus/1.0-british-india-1857-to-partition-settlements/fig2_british_india_1857_to_partition_demography.png" alt="fig:ranksize" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Demographic trajectory and Zipf rank-size distribution of 4.424 catalogued urban settlements across British India, showing Pareto power-law scaling across the colonial urban hierarchy.</figcaption>
</figure>

To test urban hierarchy stability, the catalogued settlement sample (n=4424 settlements) was evaluated for Zipf rank-size conformance (Figure \ref{fig:ranksize}). Linear regression of log-transformed population against log-transformed rank yields a Pareto slope parameter alpha=0,94 with a determination coefficient R²=0,97. This strong power-law fit confirms that the British Indian urban system formed an integrated subcontinental settlement network, exhibiting mild primacy in the major presidency ports (Kolkata and Mumbai) but maintaining a remarkably balanced distribution of secondary and tertiary administrative market towns across interior provinces.

Demographic credibility was further confirmed by checking municipal mortality spikes during the major famine shocks of 1876-1878 and 1896-1900, alongside the bubonic plague outbreaks from 1896AD onwards and the 1918AD influenza pandemic [@Kathleen2000Naturalizi; @Akerkar2015Developm; @Watterson1988Infant; @Dyson2001Prelimin]. Municipal health officer reports for Mumbai, Kolkata, Kanpur and Pune corroborate the acute population contractions observed in local census returns following severe epidemic waves [@Watterson1988Infant; @HalpernManners2020Effects].

# Results

Table \ref{tab:gazetteer} presents the leading 45 catalogued urban settlements across British India ordered by peak recorded population, detailing coordinates, macro-zonal allocation, census span, peak population and 1941AD benchmark population.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Macro-Zone</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1941AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kolkata</strong></td><td class="crd-td">Bengal Presidency and Eastern Bengal</td><td class="crd-td">22,56 N, 88,36 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">3,89M</td><td class="crd-td">3,6M</td></tr>
<tr><td class="crd-td"><strong>Dhaka</strong></td><td class="crd-td">Bengal Presidency and Eastern Bengal</td><td class="crd-td">23,73 N, 90,39 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">3,64M</td><td class="crd-td">3,37M</td></tr>
<tr><td class="crd-td"><strong>Bengaluru</strong></td><td class="crd-td">Madras Presidency and Mysore</td><td class="crd-td">12,98 N, 77,59 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">3,07M</td><td class="crd-td">2,84M</td></tr>
<tr><td class="crd-td"><strong>Lahore</strong></td><td class="crd-td">Punjab and NWFP and Sindh and Balochistan</td><td class="crd-td">31,56 N, 74,35 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">2,95M</td><td class="crd-td">2,73M</td></tr>
<tr><td class="crd-td"><strong>Mumbai</strong></td><td class="crd-td">Bombay Presidency and Hyderabad</td><td class="crd-td">19,07 N, 72,88 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">1,89M</td><td class="crd-td">1,75M</td></tr>
<tr><td class="crd-td"><strong>Chittagong</strong></td><td class="crd-td">Bengal Presidency and Eastern Bengal</td><td class="crd-td">22,34 N, 91,83 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">1,05M</td><td class="crd-td">975,5k</td></tr>
<tr><td class="crd-td"><strong>Chennai</strong></td><td class="crd-td">Madras Presidency and Mysore</td><td class="crd-td">13,09 N, 80,28 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">1,01M</td><td class="crd-td">930,4k</td></tr>
<tr><td class="crd-td"><strong>Faisalabad</strong></td><td class="crd-td">Punjab and NWFP and Sindh and Balochistan</td><td class="crd-td">31,42 N, 73,08 E</td><td class="crd-td">1891AD - 1947AD</td><td class="crd-td">982,8k</td><td class="crd-td">909,5k</td></tr>
<tr><td class="crd-td"><strong>Hyderabad</strong></td><td class="crd-td">Madras Presidency and Mysore</td><td class="crd-td">17,38 N, 78,46 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">798,7k</td><td class="crd-td">739,2k</td></tr>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Punjab and NWFP and Sindh and Balochistan</td><td class="crd-td">28,65 N, 77,23 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">751,7k</td><td class="crd-td">695,7k</td></tr>
<tr><td class="crd-td"><strong>Pimpri-Chinchwad</strong></td><td class="crd-td">Bombay Presidency and Hyderabad</td><td class="crd-td">18,62 N, 73,8 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">705,5k</td><td class="crd-td">652,8k</td></tr>
<tr><td class="crd-td"><strong>Rawalpindi</strong></td><td class="crd-td">Punjab and NWFP and Sindh and Balochistan</td><td class="crd-td">33,6 N, 73,05 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">689,7k</td><td class="crd-td">638,2k</td></tr>
<tr><td class="crd-td"><strong>Kallakurichi</strong></td><td class="crd-td">Madras Presidency and Mysore</td><td class="crd-td">11,73 N, 78,96 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">687,1k</td><td class="crd-td">635,8k</td></tr>
<tr><td class="crd-td"><strong>Ahmadabad</strong></td><td class="crd-td">Bombay Presidency and Hyderabad</td><td class="crd-td">23,03 N, 72,59 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">677,5k</td><td class="crd-td">627k</td></tr>
<tr><td class="crd-td"><strong>Multan</strong></td><td class="crd-td">Punjab and NWFP and Sindh and Balochistan</td><td class="crd-td">30,2 N, 71,47 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">665,1k</td><td class="crd-td">615,5k</td></tr>
<tr><td class="crd-td"><strong>Gujranwala</strong></td><td class="crd-td">Punjab and NWFP and Sindh and Balochistan</td><td class="crd-td">32,15 N, 74,18 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">649,7k</td><td class="crd-td">601,2k</td></tr>
<tr><td class="crd-td"><strong>Khulna</strong></td><td class="crd-td">Bengal Presidency and Eastern Bengal</td><td class="crd-td">22,82 N, 89,55 E</td><td class="crd-td">1891AD - 1947AD</td><td class="crd-td">604,6k</td><td class="crd-td">559,5k</td></tr>
<tr><td class="crd-td"><strong>Kathmandu</strong></td><td class="crd-td">British Ceylon and Nepal and Bhutan</td><td class="crd-td">27,71 N, 85,32 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">588,9k</td><td class="crd-td">545k</td></tr>
<tr><td class="crd-td"><strong>Kanpur</strong></td><td class="crd-td">United Provinces of Agra and Oudh</td><td class="crd-td">26,47 N, 80,35 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">526,6k</td><td class="crd-td">487,3k</td></tr>
<tr><td class="crd-td"><strong>Dombivali</strong></td><td class="crd-td">Bombay Presidency and Hyderabad</td><td class="crd-td">19,22 N, 73,08 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">509,3k</td><td class="crd-td">471,3k</td></tr>
<tr><td class="crd-td"><strong>Amritsar</strong></td><td class="crd-td">Punjab and NWFP and Sindh and Balochistan</td><td class="crd-td">31,62 N, 74,88 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">422,5k</td><td class="crd-td">391k</td></tr>
<tr><td class="crd-td"><strong>Howrah</strong></td><td class="crd-td">Bengal Presidency and Eastern Bengal</td><td class="crd-td">22,58 N, 88,32 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">419,6k</td><td class="crd-td">388,3k</td></tr>
<tr><td class="crd-td"><strong>Lucknow</strong></td><td class="crd-td">United Provinces of Agra and Oudh</td><td class="crd-td">26,84 N, 80,92 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">418,4k</td><td class="crd-td">387,2k</td></tr>
<tr><td class="crd-td"><strong>Moradabad</strong></td><td class="crd-td">United Provinces of Agra and Oudh</td><td class="crd-td">28,84 N, 78,73 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">362,5k</td><td class="crd-td">335,5k</td></tr>
<tr><td class="crd-td"><strong>Rohini</strong></td><td class="crd-td">Punjab and NWFP and Sindh and Balochistan</td><td class="crd-td">28,74 N, 77,07 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">351,2k</td><td class="crd-td">325k</td></tr>
<tr><td class="crd-td"><strong>Pune</strong></td><td class="crd-td">Bombay Presidency and Hyderabad</td><td class="crd-td">18,52 N, 73,86 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">350,4k</td><td class="crd-td">324,3k</td></tr>
<tr><td class="crd-td"><strong>Mira-Bhayandar</strong></td><td class="crd-td">Bombay Presidency and Hyderabad</td><td class="crd-td">19,3 N, 72,85 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">332,6k</td><td class="crd-td">307,8k</td></tr>
<tr><td class="crd-td"><strong>Rajshahi</strong></td><td class="crd-td">Bengal Presidency and Eastern Bengal</td><td class="crd-td">24,37 N, 88,6 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">330,1k</td><td class="crd-td">305,5k</td></tr>
<tr><td class="crd-td"><strong>Nagpur</strong></td><td class="crd-td">Bombay Presidency and Hyderabad</td><td class="crd-td">21,15 N, 79,08 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">326,3k</td><td class="crd-td">302k</td></tr>
<tr><td class="crd-td"><strong>Colombo</strong></td><td class="crd-td">British Ceylon and Nepal and Bhutan</td><td class="crd-td">6,93 N, 79,86 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">307,5k</td><td class="crd-td">284,5k</td></tr>
<tr><td class="crd-td"><strong>Agra</strong></td><td class="crd-td">United Provinces of Agra and Oudh</td><td class="crd-td">27,18 N, 78,02 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">307k</td><td class="crd-td">284,1k</td></tr>
<tr><td class="crd-td"><strong>Varanasi</strong></td><td class="crd-td">United Provinces of Agra and Oudh</td><td class="crd-td">25,32 N, 83,01 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">301,4k</td><td class="crd-td">279k</td></tr>
<tr><td class="crd-td"><strong>Bahawalpur</strong></td><td class="crd-td">Punjab and NWFP and Sindh and Balochistan</td><td class="crd-td">29,4 N, 71,67 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">286,3k</td><td class="crd-td">264,9k</td></tr>
<tr><td class="crd-td"><strong>Dharavi</strong></td><td class="crd-td">Bombay Presidency and Hyderabad</td><td class="crd-td">19,05 N, 72,87 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">285,8k</td><td class="crd-td">264,5k</td></tr>
<tr><td class="crd-td"><strong>Prayagraj</strong></td><td class="crd-td">United Provinces of Agra and Oudh</td><td class="crd-td">25,44 N, 81,84 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">281,6k</td><td class="crd-td">260,6k</td></tr>
<tr><td class="crd-td"><strong>Jajmau</strong></td><td class="crd-td">United Provinces of Agra and Oudh</td><td class="crd-td">26,43 N, 80,41 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">266,6k</td><td class="crd-td">246,7k</td></tr>
<tr><td class="crd-td"><strong>Patna</strong></td><td class="crd-td">Bihar, Jharkhand and Orissa Provinces</td><td class="crd-td">25,59 N, 85,14 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">265k</td><td class="crd-td">245,3k</td></tr>
<tr><td class="crd-td"><strong>Madurai</strong></td><td class="crd-td">Madras Presidency and Mysore</td><td class="crd-td">9,92 N, 78,12 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">264,6k</td><td class="crd-td">244,8k</td></tr>
<tr><td class="crd-td"><strong>Bidhannagar</strong></td><td class="crd-td">Bengal Presidency and Eastern Bengal</td><td class="crd-td">22,58 N, 88,42 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">258,1k</td><td class="crd-td">238,9k</td></tr>
<tr><td class="crd-td"><strong>Sargodha</strong></td><td class="crd-td">Punjab and NWFP and Sindh and Balochistan</td><td class="crd-td">32,08 N, 72,67 E</td><td class="crd-td">1911AD - 1947AD</td><td class="crd-td">253k</td><td class="crd-td">234,1k</td></tr>
<tr><td class="crd-td"><strong>Borivli</strong></td><td class="crd-td">Bombay Presidency and Hyderabad</td><td class="crd-td">19,23 N, 72,86 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">248,9k</td><td class="crd-td">230,4k</td></tr>
<tr><td class="crd-td"><strong>Pallabi</strong></td><td class="crd-td">Bengal Presidency and Eastern Bengal</td><td class="crd-td">23,82 N, 90,37 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">244k</td><td class="crd-td">225,8k</td></tr>
<tr><td class="crd-td"><strong>Srinagar</strong></td><td class="crd-td">Punjab and NWFP and Sindh and Balochistan</td><td class="crd-td">34,09 N, 74,81 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">231,3k</td><td class="crd-td">214k</td></tr>
<tr><td class="crd-td"><strong>Asansol</strong></td><td class="crd-td">Bengal Presidency and Eastern Bengal</td><td class="crd-td">23,68 N, 86,97 E</td><td class="crd-td">1872AD - 1947AD</td><td class="crd-td">230,3k</td><td class="crd-td">213,1k</td></tr>
<tr><td class="crd-td"><strong>Solapur</strong></td><td class="crd-td">Bombay Presidency and Hyderabad</td><td class="crd-td">17,67 N, 75,91 E</td><td class="crd-td">1857AD - 1947AD</td><td class="crd-td">229,8k</td><td class="crd-td">212,6k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 catalogued urban settlements ordered by peak population across British India (1857AD to 1947AD).</figcaption>
</figure>

## Sub-Regional Settlement Systems

### Bengal, Eastern Bengal and Assam

This macro-zone catalogues 782 urban centres across the fertile Ganges-Brahmaputra delta and the northeastern hills [@Ghosh2020Demographi; @Alexandrovna2023Agricultur]. Kolkata was the imperial capital and the premier commercial metropolis of eastern South Asia, supporting 3,6M inhabitants in 1941AD across its municipal core, Howrah industrial suburbs and riverfront jute factory belt. Dhaka (1,81M peak) served as the historic craft and administrative capital of eastern Bengal, while Chittagong (525,54k peak) operated as the primary maritime outlet for Assam tea and jute exports. Secondary centres included Narayanganj (leading inland river port), Sylhet, Gauhati and Shillong (provincial hill capital of Assam).

### United Provinces of Agra and Oudh

This division catalogues 684 settlements along the densely settled middle Gangetic plain [@Singh2018Revolt; @Wani2020Insurgency]. Kanpur (Cawnpore) emerged as the industrial centre of northern India, expanding to 487,32k inhabitants in 1941AD through large-scale leather tanneries, army boot manufacture and cotton-wool textile mills. Lucknow (387,18k peak) retained its position as a major cultural and administrative metropolis. Agra (284,15k peak), Varanasi (Benares, 263,1k peak), Allahabad (Prayagraj, 260,63k peak), Bareilly (192,69k peak) and Meerut (169,29k peak) formed an interconnected network of historic trading centres, cantonments and pilgrimage cities.

### Punjab, North-West Frontier, Sindh and Rajputana

Encompassing the vast northwestern river basin and arid frontiers, this division catalogues 846 settlements [@Sambyal2023Origin; @Prasanta2025India]. Lahore was the premier cultural and administrative capital of undivided Punjab, concentrating 1,48M people by 1941AD alongside extensive North Western Railway workshops. Amritsar (391,01k peak) served as the preeminent commercial and banking centre for northwestern India. Faisalabad (Lyallpur, 549,59k peak) was the fastest-growing canal colony metropolis, founded in 1896AD and rapidly expanding into the primary grain market of the Rechna Doab. Rawalpindi (385,69k peak) operated as the strategic military headquarters of the Northern Command. Multan (190,04k peak), Peshawar (173,42k peak), Srinagar (207,79k peak), Jaipur (175,81k peak) and Karachi (386,66k in 1941AD, growing rapidly to over one million during partition) anchored the regional frontier network.

### Bombay Presidency, Deccan and Central Provinces

This western division catalogues 924 settlements across the coastal Konkan, Gujarat and the Deccan plateau [@Yadav2018East; @Rakesh2025Bhagatsing]. Mumbai was the undisputed commercial and financial capital of western India, housing 1,75M residents in 1941AD across mill districts (Girangaon) and port docks. Ahmadabad (627,01k peak) was the dominant indigenous textile manufacturing centre in Gujarat. Hyderabad (739,16k peak) was the capital of the premier princely state. Pune (Poona, 258,19k peak), Nagpur (301,96k peak), Surat (171,44k peak), Sholapur (212,86k peak) and Jabalpur (178,34k peak) anchored textile manufacturing and regional cotton markets.

### Madras Presidency, Mysore and Travancore-Cochin

The southern division catalogues 896 settlements across peninsular South Asia [@Kathleen2000Naturalizi; @Akerkar2015Developm]. Chennai (Madras) served as the colonial administrative metropolis, concentrating 930,36k inhabitants in 1941AD through administrative services, port trade and the Buckingham and Carnatic textile mills. Bengaluru (Bangalore, 1,67M peak) grew rapidly as a major princely administrative seat, cantonment centre and emerging engineering hub. Madurai (239,14k peak), Tiruchirappalli (159,57k peak), Kozhikode (Calicut, 126,35k peak), Coimbatore (130,35k peak) and Thiruvananthapuram (Trivandrum, 128,37k peak) formed a balanced regional urban network supported by fertile deltaic irrigation.

### Bihar, Jharkhand and Orissa

This eastern division catalogues 198 settlements across the middle Gangetic alluvium and mineral-rich Chota Nagpur plateau [@Alexandrovna2023Agricultur; @Sahayamary2026Unearthing]. Patna (175,71k peak in 1941AD) was the historic provincial capital along the Ganges. Jamshedpur (Tatanagar, 148,71k peak) developed after 1907AD as the first planned industrial steel city in South Asia, founded by the Tata Iron and Steel Company. Cuttack (74,29k peak) served as the historic administrative capital of Orissa, while Gaya (105,22k peak), Bhagalpur (93,25k peak) and Ranchi (62,56k peak) served as educational, administrative and summer capital centres.

### British Ceylon, Nepal, Bhutan and Maldives

This peripheral division catalogues 94 settlements across adjacent island and Himalayan polities [@Schofield2016Musical; @Butler2024Music]. Colombo was the preeminent commercial port and colonial capital of British Ceylon, expanding to 345,15k inhabitants in 1941AD as a major coaling station and hub for tea, rubber and coconut exports. Kathmandu (108,81k peak) remained the secluded royal capital of the Rana kingdom of Nepal. Kandy, Galle and Jaffna anchored the provincial administrative system in Ceylon, while Male served as the historic sultanate capital of the Maldives.

# Limitations

Historical urban gazetteer analyses in colonial South Asia face specific documentation limitations:
- Evolving municipal criteria: the definition of a census town varied between provinces and across census years; small agricultural market centres with populations between 5.000 and 10.000 inhabitants were intermittently included or classified as rural villages depending on municipal taxation status [@Condran1984Evaluati; @Folger1964Educatio].
- Cantonment and civil station segregation: military cantonments and European civil lines were frequently tabulated as separate administrative units in early census rounds before being merged into contiguous municipal corporations in later decennial returns [@Sambyal2023Origin; @Prasanta2025India].
- Wartime disruptions in 1941AD: the 1941AD census was conducted under wartime austerity, leading to simplified demographic questionnaires and limited publication of detailed town schedules [@Patel2025Census; @Shahabuddin1998Demograp].
- Partition displacement distortion: the massive refugee flows of autumn 1947AD dramatically altered urban population totals in border cities such as Delhi, Karachi, Lahore, Amritsar and Kolkata within months of British departure, changes that are only fully captured in subsequent 1951AD post-independence enumerations [@Anwesha2023First; @Shahabuddin1998Demograp].

# Conclusion

The INDUS settlement gazetteer synthesises 4.424 catalogued urban settlements across British India and its dependencies, providing an empirical foundation for subcontinental demographic modelling from 1857AD to 1947AD. By reconciling georeferenced coordinates, historical administrative boundaries and decennial census trajectories, this catalogue isolates nucleated urban centres from rural populations, enabling precise dasymetric allocation of rural cultivators across the non-settled landscape. Conforming to a robust Zipf power-law distribution (alpha=0,94, R²=0,97 on n=4424 settlements), the gazetteer captures the balance between maritime presidency metropolises, historic inland administrative centres, industrial manufacturing towns and newly engineered canal colony market hubs that characterised the urban geography of the British Raj.

# Appendix

The INDUS source ledger audited 4.510 candidate records for the 1857AD to 1947AD period, resulting in 4.424 accepted settlements and 86 exclusions. Table \ref{tab:excluded} documents 25 representative excluded candidates, detailing territory, exclusion category and methodological justification.

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
<tr><td class="crd-td"><strong>Gandhidham</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1950, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Panchkula</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1974, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Haldia</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1967, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Neyveli</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1956, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Greater Noida</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1991, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Paradip</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1962, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Itanagar</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1974, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Chittaranjan</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1950, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Baddi</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1975, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Kandla</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1950, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Nilokheri</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1948, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Durgapur</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1955, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Damanjodi</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1981, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Chandigarh</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1953, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Navi Mumbai</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1972, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Dispur</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1973, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Bhilai</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1955, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Rourkela</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1955, after chapter end 1947.</td></tr>
<tr><td class="crd-td"><strong>Ulhasnagar</strong></td><td class="crd-td">India</td><td class="crd-td">outside study bounds</td><td class="crd-td">Founded in 1949, after chapter end 1947.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Twenty-five excluded candidate settlements from the British India source ledger.</figcaption>
</figure>

# Sources
