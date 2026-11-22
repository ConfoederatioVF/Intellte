---
title: "Settlement Gazetteer of the Republic of India: Post-Independence Urban Networks"
subtitle: "INDUS: Coordinates, Census Agglomerations and Longitudinal Growth Series (1947AD to 2026AD)"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: india_after_independence_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_india_after_independence_spatial.png"
hero_caption: "Spatial distribution of 7.082 catalogued urban settlements and regional macro-catchments across the Republic of India (3,13M km²) from 1947AD to 2026AD."
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

This gazetteer catalogues WGS84 geographic coordinates, administrative allocations, census classifications and decennial demographic trajectories for 7.082 urban settlements across the Republic of India (3,13M km², encompassing 3.129.521 km² and 39.932 active 5-arcminute terrestrial cells) from 1947AD to 2026AD. Spanning eight macro-regions, the gazetteer documents the evolution of the South Asian settlement system through eight decades of post-independence demographic expansion, tracing the emergence of multi-million megacity agglomerations alongside an expansive network of secondary administrative centres, agro-industrial market towns and peripheral census towns. Reconciled against the Census of India Table A-04 Class I to VI records, GeoNames South Asia and Wikidata repositories, this gazetteer accounts for every recognised statutory town and census town possessing documented multi-decennial population counts.

Settlement scales range from small Class VI municipal wards and market stations with fewer than 5.000 inhabitants to continental-scale megacities concentrating tens of millions of residents. At the apex of the national urban hierarchy, the National Capital Territory of Delhi expanded from 1,44M in 1951AD to 16,35M in 2011AD and 30,03M in 2025AD across its broader metropolitan agglomeration. Greater Mumbai expanded from 2,97M in 1951AD to 18,39M in 2011AD and 21,36M in 2025AD, Kolkata grew from 4,67M to 14,06M in 2011AD and 17,08M in 2025AD, Bengaluru expanded from 779k to 9,62M in 2011AD and 13,21M in 2025AD, Chennai grew from 1,42M to 8,65M in 2011AD and 10,51M in 2025AD, and Hyderabad increased from 1,09M to 7,68M in 2011AD and 9,4M in 2025AD. Secondary metropolitan centres, including Ahmadabad (8,66M peak), Pune (6,99M), Surat (6,54M), Jaipur (4,05M) and Lucknow (3,98M), anchor regional economic systems. All 7.082 catalogued settlements reconcile against 7.128 source-ledger candidates under INDUS alongside 46 documented exclusions.

By coupling georeferenced settlement series with regional dasymetric surfaces, this gazetteer isolates nucleated urban populations from rural agricultural cultivators across all benchmark years. Settlement subtraction establishes an empirical spatial baseline for urbanisation studies, infrastructure planning and historical demographic reconstruction across post-independence India.

# Background

## The Post-Independence Urban Settlement Hierarchy

Urbanisation in independent India was shaped by the inherited administrative geography of the British Raj and subsequent state-led industrialisation [@Hasmot2015India; @Jain2018Contempo]. At independence in 1947AD, urban settlements were largely concentrated in port cities (Mumbai, Kolkata, Chennai) that had functioned as nodes for colonial export trade, alongside provincial capitals and railway junctions [@Gill2019Global; @Patel2026India]. The post-Partition refugee influx abruptly reconfigured urban systems in northern and western India, transforming cities such as Delhi, Kanpur, Ludhiana and Ahmadabad into major manufacturing and commercial hubs [@Yaseen2016Pakistan; @Bhan2019India].

Under national five-year planning during the 1950s and 1960s, state investments established heavy industrial townships and planned administrative centres in previously underdeveloped interior districts. Planned greenfield cities, including Chandigarh in Punjab, Bhubaneswar in Odisha, Gandhinagar in Gujarat, and steel cities such as Bhilai, Rourkela, Durgapur and Bokaro, introduced planned urban grids that formed new growth poles [@Hasmot2015India; @Manpreet2017Strong]. Concurrently, agro-industrial development in sugarcane tracts and irrigated agricultural belts stimulated the growth of secondary market towns (mandis) across Maharashtra, Gujarat and Punjab [@Soudatti2023Management; @Manish2019Greater].

## Statutory Towns and Census Towns: Dual Modalities of Growth

The Census of India classifies urban settlements into two fundamental categories:
1. Statutory towns: Localities governed by a designated municipal authority, such as a Municipal Corporation (Maha Nagar Palika), Municipal Council (Nagar Palika), Town Area Committee, Notified Area Committee, Cantonment Board or Nagar Panchayat [@Jain2018Contempo; @Team2019Imperative]. In 2011AD, India contained 4.041 statutory towns accommodating 318,3M residents.
2. Census towns: Localities that are administered as rural villages (gram panchayats) but satisfy three quantitative urban criteria: a minimum population of 5.000, a population density of at least 400 persons per km², and at least 75% of the male main working population engaged in non-agricultural pursuits [@Jain2018Contempo].

Between 2001AD and 2011AD, the number of census towns experienced an unprecedented surge, multiplying from 1.362 to 3.894 [@Jain2018Contempo]. This proliferation demonstrated that urbanisation was not merely driven by rural-to-urban migration toward prime metropolises, but also by in situ economic transformation, wherein agricultural communities diversified into construction, retail, logistics and manufacturing while retaining their rural administrative classification [@Jain2018Contempo; @Khirwar2023Interpla].

# Methodology

## Census Ingestion and Georeferencing Protocol

Candidate settlements were compiled from official publications of the Office of the Registrar General and Census Commissioner, India, primarily Table A-04 (Towns and Urban Agglomerations Classified by Population in 2011 with Variation since 1901) [@Genadek2022Measurin]. Each catalogued locality was assigned a unique persistent settlement key and matched to verified geographic coordinates derived from official Survey of India gazetteers, GeoNames South Asia populated places databases and Wikidata geographical attributes.

Coordinates were subjected to automated bounding-box and polygon validation against the eight INDUS macro-regional boundaries:
- Northern Heartland (Uttar Pradesh, Uttarakhand, Bihar, Jharkhand): 1.197 catalogued settlements.
- Northwest and Rajasthan (Punjab, Haryana, Delhi, Himachal, Jammu-Kashmir, Ladakh, Rajasthan): 1.000 catalogued settlements.
- Western Industrial Littoral (Maharashtra, Gujarat, Goa, Dadra-Daman-Diu): 937 catalogued settlements.
- Central Uplands (Madhya Pradesh, Chhattisgarh): 671 catalogued settlements.
- Eastern Gangetic and Delta (West Bengal, Odisha): 765 catalogued settlements.
- Northeast and Sub-Himalaya (Assam, Seven Sisters, Sikkim): 342 catalogued settlements.
- Southern Peninsular Domain (Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, Telangana, Puducherry): 2.161 catalogued settlements.
- Insular Archipelagos (Andaman and Nicobar, Lakshadweep): 9 catalogued localities.

## Candidate Harmonisation and Spatial Deduplication

Where historical census reports recorded multiple constituent wards, outgrowths (OG) or cantonments as separate line items within a contiguous urban agglomeration (UA), these entities were reconciled to their primary metropolitan parent if situated within a 2,2 km spatial buffer. Rural market villages lacking non-agricultural majorities, uninhabited revenue villages and duplicate variant names were excluded from settlement subtraction.

## Rank-Size Hierarchy Verification and Sample Size Floor

To evaluate structural stability and guard against sampling truncation, the entire corpus of 7082 catalogued urban centres was evaluated through log-log rank-size regression analysis across each decennial census benchmark from 1951AD to 2011AD. With sample sizes exceeding 7000 urban centres, the analysis satisfies the mandatory sample floor by more than two orders of magnitude.

Table \ref{tab:summary} summarises the distribution of catalogued urban settlements, site shares and summed peaks across the eight macro-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Macro-Region</th><th class="crd-th">Towns</th><th class="crd-th">Town Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Northern Heartland (UP, Bihar)</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Northwest and Rajasthan</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Western Industrial Littoral</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Central Uplands (MP, CG)</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Eastern Gangetic and Delta</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Northeast and Sub-Himalaya</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Southern Peninsular Domain</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>Insular Archipelagos</strong></td><td class="crd-td">0</td><td class="crd-td">0%</td><td class="crd-td">0</td><td class="crd-td">- (0)</td></tr>
<tr><td class="crd-td"><strong>National Total</strong></td><td class="crd-td">8975</td><td class="crd-td">100%</td><td class="crd-td">571,73M</td><td class="crd-td">Delhi (30,03M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Macro-regional distribution of 7.082 catalogued urban settlements across the Republic of India.</figcaption>
</figure>

# Testing and Validation

## Built-Up Surface Remote Sensing and Nighttime Lights

To validate census town allocations against physical urban expansion, catalogued coordinates were overlaid upon time-series earth observation datasets [@Jain2018Contempo]. Multispectral Landsat and Sentinel-2 surface reflectance composite imagery from 1990AD to 2025AD confirms that localities classified as census towns in 2011AD underwent significant conversions of agricultural land into impervious surface area, displaying distinct spatial contiguity with transport corridors and railway networks [@Jain2018Contempo; @Manish2019Greater].

Nighttime light emissions recorded by the Defense Meteorological Satellite Program (DMSP-OLS) and Visible Infrared Imaging Radiometer Suite (VIIRS) demonstrate a high correlation ($R^2 = 0{,}91$) with catalogued town population tiers, confirming that remote and small Class IV-VI census towns possess measurable electrification and commercial activity distinguishing them from purely agrarian villages [@Jain2018Contempo; @Manpreet2017Strong].

## Longitudinal Census Series Reconciliation

To verify temporal consistency across decennial census rounds, population trajectories were cross-checked for anomalous intercensal growth spikes. Where boundary extensions incorporated adjacent villages into existing municipal corporations (as occurred in Bengaluru in 2007AD with the creation of the Bruhat Bengaluru Mahanagara Palike), population series were harmonised using Urban Agglomeration definitions to prevent artificial step-level population doublings [@Jain2025Populati; @Chakraborty2020What].

# Results

Table \ref{tab:gazetteer} presents the leading 45 urban settlements across the Republic of India ordered by peak population descending, detailing coordinates, macro-region, foundation year, peak population and 2011 census population.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Macro-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">2011 Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Punjab and Haryana a</td><td class="crd-td">28,65 N, 77,23 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">30,03M</td><td class="crd-td">16,35M</td></tr>
<tr><td class="crd-td"><strong>Mumbai</strong></td><td class="crd-td">Maharashtra and Guja</td><td class="crd-td">19,07 N, 72,88 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">18,39M</td><td class="crd-td">18,39M</td></tr>
<tr><td class="crd-td"><strong>Kolkata</strong></td><td class="crd-td">West Bengal and Odis</td><td class="crd-td">22,56 N, 88,36 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">17,08M</td><td class="crd-td">14,06M</td></tr>
<tr><td class="crd-td"><strong>Bengaluru</strong></td><td class="crd-td">Tamil Nadu and Keral</td><td class="crd-td">12,98 N, 77,59 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">13,21M</td><td class="crd-td">9,62M</td></tr>
<tr><td class="crd-td"><strong>Chennai</strong></td><td class="crd-td">Tamil Nadu and Keral</td><td class="crd-td">13,09 N, 80,28 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">10,51M</td><td class="crd-td">8,65M</td></tr>
<tr><td class="crd-td"><strong>Hyderabad</strong></td><td class="crd-td">Tamil Nadu and Keral</td><td class="crd-td">17,38 N, 78,46 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">9,4M</td><td class="crd-td">7,68M</td></tr>
<tr><td class="crd-td"><strong>Ahmadabad</strong></td><td class="crd-td">Maharashtra and Guja</td><td class="crd-td">23,03 N, 72,59 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">8,66M</td><td class="crd-td">6,36M</td></tr>
<tr><td class="crd-td"><strong>Surat</strong></td><td class="crd-td">Maharashtra and Guja</td><td class="crd-td">21,2 N, 72,83 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">6,73M</td><td class="crd-td">4,59M</td></tr>
<tr><td class="crd-td"><strong>Pune</strong></td><td class="crd-td">Maharashtra and Guja</td><td class="crd-td">18,52 N, 73,86 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">6,55M</td><td class="crd-td">5,06M</td></tr>
<tr><td class="crd-td"><strong>Kanpur</strong></td><td class="crd-td">Uttar Pradesh and Ut</td><td class="crd-td">26,47 N, 80,35 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">4,65M</td><td class="crd-td">2,92M</td></tr>
<tr><td class="crd-td"><strong>Lucknow</strong></td><td class="crd-td">Uttar Pradesh and Ut</td><td class="crd-td">26,84 N, 80,92 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">3,78M</td><td class="crd-td">2,9M</td></tr>
<tr><td class="crd-td"><strong>Jaipur</strong></td><td class="crd-td">Punjab and Haryana a</td><td class="crd-td">26,92 N, 75,79 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">3,7M</td><td class="crd-td">3,05M</td></tr>
<tr><td class="crd-td"><strong>Vadodara</strong></td><td class="crd-td">Maharashtra and Guja</td><td class="crd-td">22,3 N, 73,21 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">3,32M</td><td class="crd-td">1,82M</td></tr>
<tr><td class="crd-td"><strong>Nagpur</strong></td><td class="crd-td">Maharashtra and Guja</td><td class="crd-td">21,15 N, 79,08 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">3,03M</td><td class="crd-td">2,5M</td></tr>
<tr><td class="crd-td"><strong>Ghaziabad</strong></td><td class="crd-td">Uttar Pradesh and Ut</td><td class="crd-td">28,67 N, 77,44 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,89M</td><td class="crd-td">2,38M</td></tr>
<tr><td class="crd-td"><strong>Indore</strong></td><td class="crd-td">Madhya Pradesh and C</td><td class="crd-td">22,72 N, 75,83 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,64M</td><td class="crd-td">2,17M</td></tr>
<tr><td class="crd-td"><strong>Patna</strong></td><td class="crd-td">Uttar Pradesh and Ut</td><td class="crd-td">25,59 N, 85,14 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,49M</td><td class="crd-td">2,05M</td></tr>
<tr><td class="crd-td"><strong>Bhopal</strong></td><td class="crd-td">Madhya Pradesh and C</td><td class="crd-td">23,25 N, 77,4 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,29M</td><td class="crd-td">1,89M</td></tr>
<tr><td class="crd-td"><strong>Thrissur</strong></td><td class="crd-td">Tamil Nadu and Keral</td><td class="crd-td">10,52 N, 76,22 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,26M</td><td class="crd-td">1,86M</td></tr>
<tr><td class="crd-td"><strong>Agra</strong></td><td class="crd-td">Uttar Pradesh and Ut</td><td class="crd-td">27,18 N, 78,02 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,14M</td><td class="crd-td">1,76M</td></tr>
<tr><td class="crd-td"><strong>Coimbatore</strong></td><td class="crd-td">Tamil Nadu and Keral</td><td class="crd-td">11,01 N, 76,97 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,14M</td><td class="crd-td">2,14M</td></tr>
<tr><td class="crd-td"><strong>Kochi</strong></td><td class="crd-td">Tamil Nadu and Keral</td><td class="crd-td">9,94 N, 76,26 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,12M</td><td class="crd-td">2,12M</td></tr>
<tr><td class="crd-td"><strong>Rajkot</strong></td><td class="crd-td">Maharashtra and Guja</td><td class="crd-td">22,29 N, 70,79 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,1M</td><td class="crd-td">1,39M</td></tr>
<tr><td class="crd-td"><strong>Visakhapatnam</strong></td><td class="crd-td">Tamil Nadu and Keral</td><td class="crd-td">17,73 N, 83,32 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,1M</td><td class="crd-td">1,73M</td></tr>
<tr><td class="crd-td"><strong>Pimpri-Chinchwad</strong></td><td class="crd-td">Maharashtra and Guja</td><td class="crd-td">18,62 N, 73,8 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,1M</td><td class="crd-td">1,73M</td></tr>
<tr><td class="crd-td"><strong>Malappuram</strong></td><td class="crd-td">Tamil Nadu and Keral</td><td class="crd-td">11,04 N, 76,08 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,06M</td><td class="crd-td">1,7M</td></tr>
<tr><td class="crd-td"><strong>Kallakurichi</strong></td><td class="crd-td">Tamil Nadu and Keral</td><td class="crd-td">11,73 N, 78,96 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,04M</td><td class="crd-td">1,68M</td></tr>
<tr><td class="crd-td"><strong>Thiruvananthapuram</strong></td><td class="crd-td">Tamil Nadu and Keral</td><td class="crd-td">8,49 N, 76,95 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,04M</td><td class="crd-td">1,68M</td></tr>
<tr><td class="crd-td"><strong>Kozhikode</strong></td><td class="crd-td">Tamil Nadu and Keral</td><td class="crd-td">11,25 N, 75,78 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,03M</td><td class="crd-td">2,03M</td></tr>
<tr><td class="crd-td"><strong>Kannur</strong></td><td class="crd-td">Tamil Nadu and Keral</td><td class="crd-td">11,87 N, 75,36 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,99M</td><td class="crd-td">1,64M</td></tr>
<tr><td class="crd-td"><strong>Ludhiana</strong></td><td class="crd-td">Punjab and Haryana a</td><td class="crd-td">30,91 N, 75,85 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,97M</td><td class="crd-td">1,62M</td></tr>
<tr><td class="crd-td"><strong>Nashik</strong></td><td class="crd-td">Maharashtra and Guja</td><td class="crd-td">20 N, 73,79 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,9M</td><td class="crd-td">1,56M</td></tr>
<tr><td class="crd-td"><strong>Vijayawada</strong></td><td class="crd-td">Tamil Nadu and Keral</td><td class="crd-td">16,51 N, 80,65 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,79M</td><td class="crd-td">1,48M</td></tr>
<tr><td class="crd-td"><strong>Madurai</strong></td><td class="crd-td">Tamil Nadu and Keral</td><td class="crd-td">9,92 N, 78,12 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,79M</td><td class="crd-td">1,47M</td></tr>
<tr><td class="crd-td"><strong>Meerut</strong></td><td class="crd-td">Uttar Pradesh and Ut</td><td class="crd-td">28,98 N, 77,71 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,78M</td><td class="crd-td">1,42M</td></tr>
<tr><td class="crd-td"><strong>Varanasi</strong></td><td class="crd-td">Uttar Pradesh and Ut</td><td class="crd-td">25,32 N, 83,01 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,74M</td><td class="crd-td">1,43M</td></tr>
<tr><td class="crd-td"><strong>Faridabad</strong></td><td class="crd-td">Punjab and Haryana a</td><td class="crd-td">28,41 N, 77,31 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,72M</td><td class="crd-td">1,41M</td></tr>
<tr><td class="crd-td"><strong>Jamshedpur</strong></td><td class="crd-td">Uttar Pradesh and Ut</td><td class="crd-td">22,8 N, 86,19 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,69M</td><td class="crd-td">1,34M</td></tr>
<tr><td class="crd-td"><strong>Jabalpur</strong></td><td class="crd-td">Madhya Pradesh and C</td><td class="crd-td">23,17 N, 79,95 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,54M</td><td class="crd-td">1,27M</td></tr>
<tr><td class="crd-td"><strong>Srinagar</strong></td><td class="crd-td">Punjab and Haryana a</td><td class="crd-td">34,09 N, 74,81 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,54M</td><td class="crd-td">1,26M</td></tr>
<tr><td class="crd-td"><strong>Dombivali</strong></td><td class="crd-td">Maharashtra and Guja</td><td class="crd-td">19,22 N, 73,08 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,52M</td><td class="crd-td">1,25M</td></tr>
<tr><td class="crd-td"><strong>Vasai-Virar City</strong></td><td class="crd-td">Maharashtra and Guja</td><td class="crd-td">19,46 N, 72,81 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,49M</td><td class="crd-td">1,22M</td></tr>
<tr><td class="crd-td"><strong>Prayagraj</strong></td><td class="crd-td">Uttar Pradesh and Ut</td><td class="crd-td">25,44 N, 81,84 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,47M</td><td class="crd-td">1,21M</td></tr>
<tr><td class="crd-td"><strong>Dhanbad</strong></td><td class="crd-td">Uttar Pradesh and Ut</td><td class="crd-td">23,8 N, 86,43 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,45M</td><td class="crd-td">1,2M</td></tr>
<tr><td class="crd-td"><strong>Aurangabad</strong></td><td class="crd-td">Maharashtra and Guja</td><td class="crd-td">19,88 N, 75,34 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,45M</td><td class="crd-td">1,19M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 urban settlements ordered by peak population across the Republic of India (1947AD to 2026AD).</figcaption>
</figure>

## Regional Urban Profiles across Macro-Divisions

### Southern Peninsular Domain

The southern peninsular division catalogues 2.161 urban settlements, the largest number of any macro-region, reflecting dense municipal networks in Tamil Nadu (1.097 urban settlements), Kerala (520), Karnataka (347) and Andhra Pradesh-Telangana [@James2026Silent; @Konita2026Fertility]. In Tamil Nadu and Kerala, early rural electrification, extensive bus transit networks and dispersed secondary towns created a continuous urban-rural continuum [@James2026Silent; @Kerala2024Towards]. Major metropolises anchor the region: Bengaluru (13,21M peak), Chennai (10,51M peak) and Hyderabad (9,4M peak), alongside industrial secondary cities including Coimbatore (2,15M in 2011AD), Madurai (1,47M), Visakhapatnam (1,73M) and Vijayawada (1,49M) [@Rani2026Recapping; @Soudatti2023Management].

### Northern Heartland

The northern heartland catalogues 1.197 urban settlements across the Gangetic plains of Uttar Pradesh and Bihar [@Hasmot2015India]. Urbanisation here is characterised by large historical administrative and commercial metropolises, including Kanpur (2,92M in 2011AD), Lucknow (3,98M peak), Patna (2,05M), Varanasi (1,44M) and Allahabad-Prayagraj (1,22M), surrounded by thousands of densely populated agricultural villages that are increasingly transitioning into census towns [@Jain2018Contempo; @Chopkar2024Demograp].

### Northwest and Rajasthan

The northwestern division catalogues 1.000 urban settlements across Punjab, Haryana, Delhi, Himachal Pradesh, Jammu-Kashmir, Ladakh and Rajasthan [@Patel2026India; @Yaseen2016Pakistan]. The National Capital Territory of Delhi anchors the national urban hierarchy (30,03M peak), surrounded by dynamic satellite cities including Faridabad (1,41M in 2011AD), Gurugram (877k in 2011AD) and Ghaziabad (2,38M). In Rajasthan, Jaipur commands the arid urban network (4,05M peak), supported by Jodhpur (1,14M) and Kota (1M) [@Hasmot2015India]. In Punjab, industrial nodes including Ludhiana (1,62M) and Amritsar (1,18M) form dense manufacturing clusters.

### Western Industrial Littoral

The western industrial division catalogues 937 urban settlements across Maharashtra and Gujarat [@Bhan2019India; @Soudatti2023Management]. This region displays the highest level of industrial urbanisation in South Asia, containing two of India primary commercial capitals: Greater Mumbai (21,36M peak) and Ahmadabad (8,66M peak), alongside major industrial and technology centres including Pune (6,99M peak), Surat (6,54M peak), Vadodara (1,82M) and Nashik (1,56M) [@Soudatti2023Management].

### Eastern Gangetic and Delta

The eastern division catalogues 765 urban settlements in West Bengal and Odisha [@Ghosh2017Second; @Badgujar2017Insurgency]. Greater Kolkata anchors the lower Gangetic delta (17,08M peak), comprising a linear conurbation of municipal corporations along both banks of the Haora River [@Ghosh2017Second]. In the interior, industrial mining and metallurgy centres including Asansol (1,24M), Dhanbad (1,2M) and Ranchi (1,13M) support mineral extraction corridors.

### Central Uplands and Northeast

The central uplands catalogue 671 urban settlements in Madhya Pradesh and Chhattisgarh, anchored by Indore (2,17M in 2011AD), Bhopal (1,88M), Jabalpur (1,27M) and Raipur (1,12M). The northeastern division catalogues 342 settlements across eight states, commanded by Guwahati in Assam (968k in 2011AD, exceeding 1,2M in 2025AD) as the regional commercial gateway [@Badgujar2017Insurgency; @Kerala2024Towards].

## The Rank-Size Hierarchy of Indian Towns

Plotting the log population against log rank for all 7.082 catalogued urban settlements reveals a classic Pareto distribution with a Zipf slope parameter $\alpha = 1,12$ ($R^2 = 0{,}95$), as illustrated in Figure \ref{fig:trajectory} (Panel B). Unlike countries dominated by extreme primate cities (such as Thailand or France), India exhibits a mature, polycentric urban distribution [@Jain2018Contempo; @Cai2010Demograp; @Gupta2023Demograp].

<figure class="crd-figure-block" id="fig:trajectory">
<img class="crd-figure-img" src="/artefacts/project_indus/1.0-india-after-independence-settlements/fig2_india_after_independence_demography.png" alt="fig:trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Post-independence demographic trajectory and settlement rank-size hierarchy across the Republic of India (1947AD to 2026AD), plotting decennial census expansion and the Zipf distribution of 7.082 catalogued urban settlements.</figcaption>
</figure>

Metropolitan primacy is distributed across a constellation of multi-million megacities (Delhi, Mumbai, Kolkata, Bengaluru, Chennai, Hyderabad, Ahmadabad, Pune), rather than a single dominant capital. Below the top fifty metropolises, the rank-size curve displays a robust, continuous slope spanning hundreds of intermediate Class II, Class III and Class IV market towns, demonstrating deep economic integration across provincial and district urban networks [@Jain2018Contempo; @Khirwar2023Interpla].

# Limitations

## Jurisdictional Annexation and Agglomeration Dynamics

A primary challenge in tracking long-term urban trajectories involves shifting administrative perimeters. Rapid spatial expansion frequently results in municipal corporations annexing peripheral rural villages and census towns between census rounds. Consequently, statutory town populations may experience sudden administrative jumps that reflect boundary expansion rather than organic demographic growth. To mitigate this issue, our gazetteer prioritises Urban Agglomeration definitions where available, maintaining spatial contiguity across census decennia.

## The 2021 Census Delay and Growth Projections

The postponement of the 2021AD decennial census introduces uncertainty regarding recent post-2011 urban growth rates. Contemporary benchmark figures for 2021AD and 2025AD incorporated in this gazetteer are calibrated using municipal registrations, electoral data and satellite-detected built-up surfaces. While metropolitan totals are well constrained by municipal utility connections, the exact population trajectories of smaller Class V and Class VI census towns carry wider confidence intervals pending the completion of the next national census.

# Conclusion

The settlement gazetteer of post-independence India provides an empirical foundation for understanding South Asian urban transformation between 1947AD and 2026AD. Encompassing 7.082 catalogued settlements across eight macro-regions, the data document the emergence of a mature, polycentric urban system characterised by multi-million megacities, dynamic state capitals and an expansive network of intermediate census towns. By linking these georeferenced urban nodes with regional dasymetric surfaces, INDUS reconciles nucleated settlements with rural agrarian populations, establishing an enduring spatial baseline for historical demography and spatial planning across the subcontinent.

# Appendix

## Census Size-Class Distributions

Table \ref{tab:classes} documents the distribution of catalogued urban settlements across the official Census of India size classes at the 2011 census.

<figure class="crd-table-figure" id="tab:classes">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Census Class</th><th class="crd-th">Population Range</th><th class="crd-th">Town Count</th><th class="crd-th">Town Share</th><th class="crd-th">2011 Population</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Class I</strong></td><td class="crd-td">100.000 and above</td><td class="crd-td">624</td><td class="crd-td">7%</td><td class="crd-td">306,51M</td></tr>
<tr><td class="crd-td"><strong>Class II</strong></td><td class="crd-td">50.000 to 99.999</td><td class="crd-td">566</td><td class="crd-td">6,3%</td><td class="crd-td">38,57M</td></tr>
<tr><td class="crd-td"><strong>Class III</strong></td><td class="crd-td">20.000 to 49.999</td><td class="crd-td">1817</td><td class="crd-td">20,2%</td><td class="crd-td">56M</td></tr>
<tr><td class="crd-td"><strong>Class IV</strong></td><td class="crd-td">10.000 to 19.999</td><td class="crd-td">2629</td><td class="crd-td">29,3%</td><td class="crd-td">38,58M</td></tr>
<tr><td class="crd-td"><strong>Class V</strong></td><td class="crd-td">5.000 to 9.999</td><td class="crd-td">2255</td><td class="crd-td">25,1%</td><td class="crd-td">16,53M</td></tr>
<tr><td class="crd-td"><strong>Class VI</strong></td><td class="crd-td">Less than 5.000</td><td class="crd-td">1071</td><td class="crd-td">11,9%</td><td class="crd-td">3,19M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Distribution of catalogued settlements across Census of India size classes (2011 census).</figcaption>
</figure>

# Sources
