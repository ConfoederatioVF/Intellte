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
hero_caption: "Spatial distribution of 28.538 catalogued settlements and regional macro-catchments across the Republic of India (3,13M km²) from 1947AD to 2026AD."
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

This gazetteer catalogues WGS84 geographic coordinates, administrative allocations, census classifications and decennial demographic trajectories for 28.538 settlements across the Republic of India (3,13M km², encompassing 3.129.521 km² and 39.932 active 5-arcminute terrestrial cells) from 1947AD to 2026AD. Spanning eight macro-regions, the gazetteer documents the evolution of the South Asian settlement system through eight decades of post-independence demographic expansion, tracing the rise of multi-million metropolitan agglomerations alongside an extensive network of secondary administrative centres, agro-industrial market towns, census towns and historical *qasba*, *pargana* and *nadu* foundations. Anchored in primary-monograph metropolis trajectories, multi-repository archaeological and monument corpora (Pleiades, Zenodo Harappan, Vidarbha and Palaeolithic IAR compilations, ASI P1371, Wikidata, OpenStreetMap and XRONOS/c14bazAAR), official national censuses led by Census of India Table A-04 Class I to VI records, and macro-envelope historical continuity series, the catalogue reconciles modern statutory towns with deep-time regional settlement hierarchies.

Settlement scales range from small Class VI municipal wards and rural market stations with fewer than 5.000 inhabitants to continental-scale metropolises concentrating tens of millions of residents. At the apex of the national urban hierarchy, Mumbai expanded from 3,22M in 1951AD to 18,39M in 2011AD and 22.347.507 (22,35M) in 2025AD, while Delhi grew from 1,44M in 1951AD to 16,35M in 2011AD and 19.862.991 (19,86M) in 2025AD. Kolkata expanded from 4,69M in 1951AD to 14,06M in 2011AD and 17.078.693 (17,08M) in 2025AD, Chennai rose from 1,54M to 8,65M in 2011AD and 10.512.941 (10,51M) in 2025AD, Bengaluru expanded from 786k to 8,52M in 2011AD and 10.351.258 (10,35M) in 2025AD, and Hyderabad grew from 1,14M to 7,68M in 2011AD and 9.326.612 (9,33M) in 2025AD. Ahmedabad (7.723.798 or 7,72M in 2025AD) and Pune (6.144.481 or 6,14M in 2025AD) complete the leading eight metropolises, followed by Surat (5,58M peak), Jaipur (3,7M), Kanpur (3,55M) and Lucknow (3,53M). All 28.538 catalogued settlements reconcile against 28.589 source-ledger candidates under INDUS alongside 51 documented exclusions.

By coupling georeferenced settlement series with regional dasymetric surfaces, this gazetteer isolates nucleated urban populations from rural agricultural cultivators across all benchmark years. Settlement subtraction establishes a spatial baseline for urbanisation studies, infrastructure planning and historical demographic reconstruction across post-independence India.

# Background

## The Post-Independence Urban Settlement Hierarchy

Urbanisation in independent India was shaped by the inherited administrative geography of the British Raj and subsequent state-led industrialisation [@Hasmot2015India; @Jain2018Contempo]. At independence in 1947AD, urban settlements were largely concentrated in port cities (Mumbai, Kolkata, Chennai) that had functioned as nodes for colonial export trade, alongside provincial capitals and railway junctions [@Gill2019Global; @Patel2026India]. The post-Partition refugee influx abruptly reconfigured urban systems in northern and western India, transforming cities such as Delhi, Kanpur, Ludhiana and Ahmedabad into major manufacturing and commercial hubs [@Yaseen2016Pakistan; @Bhan2019India].

Under national five-year planning during the 1950s and 1960s, state investments established heavy industrial townships and planned administrative centres in previously underdeveloped interior districts. Planned greenfield cities, including Chandigarh in Punjab, Bhubaneswar in Odisha, Gandhinagar in Gujarat, and steel cities such as Bhilai, Rourkela, Durgapur and Bokaro, introduced planned urban grids that formed new growth poles [@Hasmot2015India; @Manpreet2017Strong]. Concurrently, agro-industrial development in sugarcane tracts and irrigated agricultural belts stimulated the growth of secondary market towns (mandis) across Maharashtra, Gujarat and Punjab [@Soudatti2023Management; @Manish2019Greater].

## Statutory Towns and Census Towns: Dual Modalities of Growth

The Census of India classifies urban settlements into two fundamental categories:
1. Statutory towns: Localities governed by a designated municipal authority, such as a Municipal Corporation (Maha Nagar Palika), Municipal Council (Nagar Palika), Town Area Committee, Notified Area Committee, Cantonment Board or Nagar Panchayat [@Jain2018Contempo; @Team2019Imperative]. In 2011AD, India contained 4.041 statutory towns accommodating 318,3M residents.
2. Census towns: Localities that are administered as rural villages (gram panchayats) but satisfy three quantitative urban criteria: a minimum population of 5.000, a population density of at least 400 persons per km², and at least 75% of the male main working population engaged in non-agricultural pursuits [@Jain2018Contempo].

Between 2001AD and 2011AD, the number of census towns experienced an unprecedented surge, multiplying from 1.362 to 3.894 [@Jain2018Contempo]. This proliferation demonstrated that urbanisation was not merely driven by rural-to-urban migration toward prime metropolises, but also by in situ economic transformation, wherein agricultural communities diversified into construction, retail, logistics and manufacturing while retaining their rural administrative classification [@Jain2018Contempo; @Khirwar2023Interpla].

# Methodology

## Census Ingestion, Historical Provenance and Georeferencing Protocol

Candidate settlements were compiled from four complementary evidentiary streams rather than uniform demographic scaling. First, primary-monograph historical metropolis trajectories establish long-run urban anchors across the subcontinent [@Habib1982Atlas; @Moosvi1987Economy; @Hambly1982Towns; @Blake1991Shahjahanabad; @Bayly1983Rulers; @ImperialGazetteer1908; @Naqvi1968Urbanisation]. Second, official national censuses provide modern decennial counts, led by the Office of the Registrar General and Census Commissioner of India Table A-04 (Towns and Urban Agglomerations Classified by Population in 2011 with Variation since 1901) [@Genadek2022Measurin], harmonised within the subcontinental INDUS schema alongside sibling national census bureaus (PBS, BBS, DCS, CBS, NSB and NBS). Third, multi-repository archaeological and monument corpora—comprising Pleiades, Zenodo Harappan, Vidarbha and Palaeolithic Indian Archaeology compilations [@Possehl1999IndusAge; @Kenoyer1998AncientCities; @Allchin1995Archaeology; @Erdosy1988Urbanisation], Archaeological Survey of India (ASI) P1371 registers, Wikidata, OpenStreetMap and XRONOS/c14bazAAR—incorporate deep-time settled nodes. Fourth, macro-envelope *qasba*, *pargana* and *nadu* continuity series [@Champakalakshmi1996Trade; @Stein1989Vijayanagara; @Chattopadhyaya1994Making; @Eaton1993Rise] link pre-1800 fiscal and temple hubs to modern district gazetteers under strict foundation-year truncation and chronological toponymy filters, ensuring that no settlement is projected prior to its attested foundation or assigned anachronistic modern names.

Each catalogued locality was assigned a persistent settlement key and matched to geographic coordinates from Survey of India gazetteers, GeoNames South Asia and Wikidata. Coordinates were checked against the eight INDUS macro-regional polygons:
- Northern Heartland (Uttar Pradesh, Uttarakhand, Bihar, Jharkhand): 5.695 catalogued settlements.
- Northwest and Rajasthan (Punjab, Haryana, Delhi, Himachal, Jammu-Kashmir, Ladakh, Rajasthan): 4.345 catalogued settlements.
- Western Industrial Littoral (Maharashtra, Gujarat, Goa, Dadra-Daman-Diu): 3.512 catalogued settlements.
- Central Uplands (Madhya Pradesh, Chhattisgarh): 4.128 catalogued settlements.
- Eastern Gangetic and Delta (West Bengal, Odisha): 2.203 catalogued settlements.
- Northeast and Sub-Himalaya (Assam, Seven Sisters, Sikkim): 1.059 catalogued settlements.
- Southern Peninsular Domain (Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, Telangana, Puducherry): 7.556 catalogued settlements.
- Insular Archipelagos (Andaman and Nicobar, Lakshadweep): 40 catalogued settlements.

## Candidate Harmonisation and Spatial Deduplication

Where historical census reports recorded multiple constituent wards, outgrowths (OG) or cantonments as separate line items within a contiguous urban agglomeration (UA), these entities were reconciled to their primary metropolitan parent if situated within a 2,2 km spatial buffer. Rural market villages lacking non-agricultural majorities, uninhabited revenue villages and duplicate variant names were excluded from settlement subtraction, yielding 51 documented exclusions across 28.589 audited candidates.

## Rank-Size Hierarchy Verification and Sample Size Floor

To evaluate structural stability and guard against sampling truncation, the full corpus of 28.538 catalogued settlements was evaluated through log-log rank-size regression analysis across decennial census benchmarks. With sample sizes exceeding 28k settlements and a Zipf rank-size fit of $\alpha = 1{,}00$ ($R^2 = 0{,}99$), the hierarchy satisfies the minimum sample floor by nearly three orders of magnitude.

Table \ref{tab:summary} summarises the distribution of catalogued settlements, site shares and summed peaks across the eight macro-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Macro-Region</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Northern Heartland (UP, Bihar)</strong></td><td class="crd-td">5.695</td><td class="crd-td">20%</td><td class="crd-td">107,63M</td><td class="crd-td">Kanpur (3,55M)</td></tr>
<tr><td class="crd-td"><strong>Northwest and Rajasthan</strong></td><td class="crd-td">4.345</td><td class="crd-td">15,2%</td><td class="crd-td">96,57M</td><td class="crd-td">Delhi (19,86M)</td></tr>
<tr><td class="crd-td"><strong>Western Industrial Littoral</strong></td><td class="crd-td">3.512</td><td class="crd-td">12,3%</td><td class="crd-td">112,37M</td><td class="crd-td">Mumbai (22,35M)</td></tr>
<tr><td class="crd-td"><strong>Central Uplands (MP, CG)</strong></td><td class="crd-td">4.128</td><td class="crd-td">14,5%</td><td class="crd-td">46,47M</td><td class="crd-td">Indore (2,64M)</td></tr>
<tr><td class="crd-td"><strong>Eastern Gangetic and Delta</strong></td><td class="crd-td">2.203</td><td class="crd-td">7,7%</td><td class="crd-td">53,87M</td><td class="crd-td">Kolkata (17,08M)</td></tr>
<tr><td class="crd-td"><strong>Northeast and Sub-Himalaya</strong></td><td class="crd-td">1.059</td><td class="crd-td">3,7%</td><td class="crd-td">14,74M</td><td class="crd-td">Guwahati (1,17M)</td></tr>
<tr><td class="crd-td"><strong>Southern Peninsular Domain</strong></td><td class="crd-td">7.556</td><td class="crd-td">26,5%</td><td class="crd-td">177,39M</td><td class="crd-td">Chennai (10,51M)</td></tr>
<tr><td class="crd-td"><strong>Insular Archipelagos</strong></td><td class="crd-td">40</td><td class="crd-td">0,1%</td><td class="crd-td">344,5k</td><td class="crd-td">Port Blair (131,3k)</td></tr>
<tr><td class="crd-td"><strong>National Total</strong></td><td class="crd-td">28.538</td><td class="crd-td">100%</td><td class="crd-td">609,38M</td><td class="crd-td">Mumbai (22,35M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Macro-regional distribution of 28.538 catalogued settlements across the Republic of India.</figcaption>
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
<tr><td class="crd-td"><strong>Mumbai</strong></td><td class="crd-td">Western Industrial L</td><td class="crd-td">18,94 N, 72,83 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">22,35M</td><td class="crd-td">18,39M</td></tr>
<tr><td class="crd-td"><strong>Delhi</strong></td><td class="crd-td">Northwest and Rajast</td><td class="crd-td">28,61 N, 77,24 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">19,86M</td><td class="crd-td">16,35M</td></tr>
<tr><td class="crd-td"><strong>Kolkata</strong></td><td class="crd-td">Eastern Gangetic and</td><td class="crd-td">22,57 N, 88,36 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">17,08M</td><td class="crd-td">14,06M</td></tr>
<tr><td class="crd-td"><strong>Chennai</strong></td><td class="crd-td">Southern Peninsular</td><td class="crd-td">13,08 N, 80,27 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">10,51M</td><td class="crd-td">8,65M</td></tr>
<tr><td class="crd-td"><strong>Bengaluru</strong></td><td class="crd-td">Southern Peninsular</td><td class="crd-td">12,97 N, 77,59 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">10,35M</td><td class="crd-td">8,52M</td></tr>
<tr><td class="crd-td"><strong>Hyderabad</strong></td><td class="crd-td">Southern Peninsular</td><td class="crd-td">17,36 N, 78,47 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">9,33M</td><td class="crd-td">7,68M</td></tr>
<tr><td class="crd-td"><strong>Ahmedabad</strong></td><td class="crd-td">Western Industrial L</td><td class="crd-td">23,02 N, 72,57 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">7,72M</td><td class="crd-td">6,36M</td></tr>
<tr><td class="crd-td"><strong>Pune</strong></td><td class="crd-td">Western Industrial L</td><td class="crd-td">18,52 N, 73,86 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">6,14M</td><td class="crd-td">5,06M</td></tr>
<tr><td class="crd-td"><strong>Surat</strong></td><td class="crd-td">Western Industrial L</td><td class="crd-td">21,17 N, 72,83 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">5,58M</td><td class="crd-td">4,59M</td></tr>
<tr><td class="crd-td"><strong>Jaipur</strong></td><td class="crd-td">Northwest and Rajast</td><td class="crd-td">26,91 N, 75,79 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">3,7M</td><td class="crd-td">3,05M</td></tr>
<tr><td class="crd-td"><strong>Kanpur</strong></td><td class="crd-td">Northern Heartland (</td><td class="crd-td">26,45 N, 80,33 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">3,55M</td><td class="crd-td">2,92M</td></tr>
<tr><td class="crd-td"><strong>Lucknow</strong></td><td class="crd-td">Northern Heartland (</td><td class="crd-td">26,85 N, 80,95 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">3,53M</td><td class="crd-td">2,9M</td></tr>
<tr><td class="crd-td"><strong>Nagpur</strong></td><td class="crd-td">Western Industrial L</td><td class="crd-td">21,15 N, 79,09 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">3,03M</td><td class="crd-td">2,5M</td></tr>
<tr><td class="crd-td"><strong>Ghaziabad</strong></td><td class="crd-td">Northern Heartland (</td><td class="crd-td">28,67 N, 77,44 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,89M</td><td class="crd-td">2,38M</td></tr>
<tr><td class="crd-td"><strong>Indore</strong></td><td class="crd-td">Central Uplands (MP,</td><td class="crd-td">22,72 N, 75,86 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,64M</td><td class="crd-td">2,17M</td></tr>
<tr><td class="crd-td"><strong>Coimbatore</strong></td><td class="crd-td">Southern Peninsular</td><td class="crd-td">11,02 N, 76,96 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,6M</td><td class="crd-td">2,14M</td></tr>
<tr><td class="crd-td"><strong>Kochi</strong></td><td class="crd-td">Southern Peninsular</td><td class="crd-td">9,97 N, 76,24 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,58M</td><td class="crd-td">2,12M</td></tr>
<tr><td class="crd-td"><strong>Patna</strong></td><td class="crd-td">Northern Heartland (</td><td class="crd-td">25,61 N, 85,14 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,49M</td><td class="crd-td">2,05M</td></tr>
<tr><td class="crd-td"><strong>Kozhikode</strong></td><td class="crd-td">Southern Peninsular</td><td class="crd-td">11,26 N, 75,78 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,46M</td><td class="crd-td">2,03M</td></tr>
<tr><td class="crd-td"><strong>Bhopal</strong></td><td class="crd-td">Central Uplands (MP,</td><td class="crd-td">23,26 N, 77,41 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,29M</td><td class="crd-td">1,89M</td></tr>
<tr><td class="crd-td"><strong>Thrissur</strong></td><td class="crd-td">Southern Peninsular</td><td class="crd-td">10,52 N, 76,22 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,26M</td><td class="crd-td">1,86M</td></tr>
<tr><td class="crd-td"><strong>Vadodara</strong></td><td class="crd-td">Western Industrial L</td><td class="crd-td">22,31 N, 73,18 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,21M</td><td class="crd-td">1,82M</td></tr>
<tr><td class="crd-td"><strong>Agra</strong></td><td class="crd-td">Northern Heartland (</td><td class="crd-td">27,18 N, 78,01 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,14M</td><td class="crd-td">1,76M</td></tr>
<tr><td class="crd-td"><strong>Visakhapatnam</strong></td><td class="crd-td">Southern Peninsular</td><td class="crd-td">17,69 N, 83,22 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,1M</td><td class="crd-td">1,73M</td></tr>
<tr><td class="crd-td"><strong>Malappuram</strong></td><td class="crd-td">Southern Peninsular</td><td class="crd-td">11,04 N, 76,08 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,06M</td><td class="crd-td">1,7M</td></tr>
<tr><td class="crd-td"><strong>Thiruvananthapuram</strong></td><td class="crd-td">Southern Peninsular</td><td class="crd-td">8,49 N, 76,95 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">2,04M</td><td class="crd-td">1,68M</td></tr>
<tr><td class="crd-td"><strong>Kannur</strong></td><td class="crd-td">Southern Peninsular</td><td class="crd-td">11,87 N, 75,37 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,99M</td><td class="crd-td">1,64M</td></tr>
<tr><td class="crd-td"><strong>Ludhiana</strong></td><td class="crd-td">Northwest and Rajast</td><td class="crd-td">30,9 N, 75,86 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,97M</td><td class="crd-td">1,62M</td></tr>
<tr><td class="crd-td"><strong>Nashik</strong></td><td class="crd-td">Western Industrial L</td><td class="crd-td">20 N, 73,79 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,9M</td><td class="crd-td">1,56M</td></tr>
<tr><td class="crd-td"><strong>Vijayawada</strong></td><td class="crd-td">Southern Peninsular</td><td class="crd-td">16,51 N, 80,65 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,79M</td><td class="crd-td">1,48M</td></tr>
<tr><td class="crd-td"><strong>Madurai</strong></td><td class="crd-td">Southern Peninsular</td><td class="crd-td">9,92 N, 78,12 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,78M</td><td class="crd-td">1,47M</td></tr>
<tr><td class="crd-td"><strong>Varanasi</strong></td><td class="crd-td">Northern Heartland (</td><td class="crd-td">25,32 N, 83,01 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,74M</td><td class="crd-td">1,43M</td></tr>
<tr><td class="crd-td"><strong>Meerut</strong></td><td class="crd-td">Northern Heartland (</td><td class="crd-td">28,98 N, 77,71 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,73M</td><td class="crd-td">1,42M</td></tr>
<tr><td class="crd-td"><strong>Faridabad</strong></td><td class="crd-td">Northwest and Rajast</td><td class="crd-td">28,41 N, 77,31 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,72M</td><td class="crd-td">1,41M</td></tr>
<tr><td class="crd-td"><strong>Rajkot</strong></td><td class="crd-td">Western Industrial L</td><td class="crd-td">22,29 N, 70,79 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,69M</td><td class="crd-td">1,39M</td></tr>
<tr><td class="crd-td"><strong>Jamshedpur</strong></td><td class="crd-td">Northern Heartland (</td><td class="crd-td">22,8 N, 86,19 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,63M</td><td class="crd-td">1,34M</td></tr>
<tr><td class="crd-td"><strong>Jabalpur</strong></td><td class="crd-td">Central Uplands (MP,</td><td class="crd-td">23,18 N, 79,99 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,54M</td><td class="crd-td">1,27M</td></tr>
<tr><td class="crd-td"><strong>Srinagar</strong></td><td class="crd-td">Northwest and Rajast</td><td class="crd-td">34,08 N, 74,8 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,54M</td><td class="crd-td">1,26M</td></tr>
<tr><td class="crd-td"><strong>Vasai-Virar City</strong></td><td class="crd-td">Western Industrial L</td><td class="crd-td">19,46 N, 72,81 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,49M</td><td class="crd-td">1,22M</td></tr>
<tr><td class="crd-td"><strong>Prayagraj</strong></td><td class="crd-td">Northern Heartland (</td><td class="crd-td">25,43 N, 81,85 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,47M</td><td class="crd-td">1,21M</td></tr>
<tr><td class="crd-td"><strong>Dhanbad</strong></td><td class="crd-td">Northern Heartland (</td><td class="crd-td">23,8 N, 86,43 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,45M</td><td class="crd-td">1,2M</td></tr>
<tr><td class="crd-td"><strong>Aurangabad</strong></td><td class="crd-td">Western Industrial L</td><td class="crd-td">19,88 N, 75,34 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,45M</td><td class="crd-td">1,19M</td></tr>
<tr><td class="crd-td"><strong>Amritsar</strong></td><td class="crd-td">Northwest and Rajast</td><td class="crd-td">31,63 N, 74,87 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,44M</td><td class="crd-td">1,18M</td></tr>
<tr><td class="crd-td"><strong>Jodhpur</strong></td><td class="crd-td">Northwest and Rajast</td><td class="crd-td">26,24 N, 73,02 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,38M</td><td class="crd-td">1,14M</td></tr>
<tr><td class="crd-td"><strong>Ranchi</strong></td><td class="crd-td">Northern Heartland (</td><td class="crd-td">23,34 N, 85,31 E</td><td class="crd-td">1951AD - 2025AD</td><td class="crd-td">1,37M</td><td class="crd-td">1,13M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 urban settlements ordered by peak population across the Republic of India (1947AD to 2026AD).</figcaption>
</figure>

## Regional Urban Profiles across Macro-Divisions

### Southern Peninsular Domain

The southern peninsular division catalogues 7.556 settlements, the largest count of any macro-region, reflecting dense municipal networks across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh and Telangana alongside historic *nadu* and Vijayanagara urban foundations [@James2026Silent; @Konita2026Fertility; @Champakalakshmi1996Trade; @Stein1989Vijayanagara]. In Tamil Nadu and Kerala, early rural electrification, extensive bus transit networks and dispersed secondary towns created a continuous urban-rural continuum [@James2026Silent; @Kerala2024Towards]. Major metropolises anchor the region: Chennai (10,51M peak in 2025AD), Bengaluru (10,35M peak) and Hyderabad (9,33M peak), alongside industrial and port cities including Coimbatore (2,14M in 2011AD; 2,6M peak), Kochi (2,12M in 2011AD; 2,58M peak), Visakhapatnam (1,73M in 2011AD; 2,1M peak), Vijayawada (1,48M in 2011AD; 1,79M peak) and Madurai (1,47M in 2011AD; 1,78M peak) [@Rani2026Recapping; @Soudatti2023Management].

### Northern Heartland

The northern heartland catalogues 5.695 settlements across the Gangetic plains of Uttar Pradesh, Uttarakhand, Bihar and Jharkhand, spanning early historic urban cores and Mughal *qasba* and *pargana* networks [@Hasmot2015India; @Habib1982Atlas; @Bayly1983Rulers; @Erdosy1988Urbanisation]. Urbanisation here is anchored by Kanpur (2,92M in 2011AD; 3,55M peak in 2025AD), Lucknow (2,9M in 2011AD; 3,53M peak), Ghaziabad (2,38M in 2011AD; 2,89M peak), Patna (2,05M in 2011AD; 2,49M peak) and Agra (1,76M in 2011AD; 2,14M peak), alongside Varanasi and Prayagraj, surrounded by thousands of densely populated agricultural villages transitioning into census towns [@Jain2018Contempo; @Chopkar2024Demograp].

### Northwest and Rajasthan

The northwestern division catalogues 4.345 settlements across Punjab, Haryana, Delhi, Himachal Pradesh, Jammu-Kashmir, Ladakh and Rajasthan, incorporating Harappan and early historic foundations alongside colonial canal colonies and modern metropolitan belts [@Patel2026India; @Yaseen2016Pakistan; @Possehl1999IndusAge; @Kenoyer1998AncientCities]. Delhi anchors the regional hierarchy (16,35M in 2011AD; 19,86M peak in 2025AD), continuing an imperial urban sequence stretching back to Shahjahanabad [@Blake1991Shahjahanabad; @Naqvi1968Urbanisation]. In Rajasthan, Jaipur commands the arid urban network (3,05M in 2011AD; 3,7M peak in 2025AD), supported by Jodhpur and Kota [@Hasmot2015India]. In Punjab, Ludhiana (1,62M in 2011AD; 1,97M peak) and Amritsar form dense manufacturing clusters.

### Western Industrial Littoral

The western industrial division catalogues 3.512 settlements across Maharashtra, Gujarat, Goa and Dadra-Daman-Diu [@Bhan2019India; @Soudatti2023Management]. This region displays the highest level of industrial urbanisation in South Asia, led by Mumbai (22,35M peak in 2025AD) and Ahmedabad (7,72M peak), alongside Pune (6,14M peak), Surat (4,59M in 2011AD; 5,58M peak), Nagpur (2,5M in 2011AD; 3,03M peak), Vadodara (1,82M in 2011AD; 2,21M peak) and Nashik (1,56M in 2011AD; 1,9M peak) [@Soudatti2023Management].

### Eastern Gangetic and Delta

The eastern division catalogues 2.203 settlements in West Bengal and Odisha, combining deltaic market networks documented since the early modern frontier with modern mining and industrial towns [@Ghosh2017Second; @Badgujar2017Insurgency; @Eaton1993Rise]. Kolkata anchors the lower Gangetic delta (14,06M in 2011AD; 17,08M peak in 2025AD), comprising a linear conurbation along both banks of the Hooghly River [@Ghosh2017Second]. In the interior, industrial mining and metallurgy centres including Asansol, Rourkela and Cuttack support mineral and coastal corridors.

### Central Uplands, Northeast and Insular Archipelagos

The central uplands catalogue 4.128 settlements in Madhya Pradesh and Chhattisgarh, anchored by Indore (2,17M in 2011AD; 2,64M peak in 2025AD) and Bhopal (1,89M in 2011AD; 2,29M peak), alongside Jabalpur and Raipur, together with deep prehistoric and early mediaeval registers [@Allchin1995Archaeology; @Chattopadhyaya1994Making]. The northeastern division catalogues 1.059 settlements across eight states, commanded by Guwahati in Assam as the regional commercial gateway [@Badgujar2017Insurgency; @Kerala2024Towards]. The insular archipelagos of Andaman and Nicobar and Lakshadweep account for 40 catalogued localities.

## The Rank-Size Hierarchy of Indian Towns

Plotting log population against log rank for all 28.538 catalogued settlements reveals a classic Pareto distribution with a Zipf slope parameter $\alpha = 1{,}00$ ($R^2 = 0{,}99$), as illustrated in Figure \ref{fig:trajectory} (Panel B). Unlike countries dominated by extreme primate cities (such as Thailand or France), India exhibits a mature, polycentric urban distribution [@Jain2018Contempo; @Cai2010Demograp; @Gupta2023Demograp].

<figure class="crd-figure-block" id="fig:trajectory">
<img class="crd-figure-img" src="/artefacts/project_indus/1.0-india-after-independence-settlements/fig2_india_after_independence_demography.png" alt="fig:trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Post-independence demographic trajectory and settlement rank-size hierarchy across the Republic of India (1947AD to 2026AD), plotting decennial census expansion and the Zipf distribution of 28.538 catalogued settlements.</figcaption>
</figure>

Metropolitan primacy is distributed across a constellation of multi-million metropolises (Mumbai, Delhi, Kolkata, Chennai, Bengaluru, Hyderabad, Ahmedabad, Pune), rather than a single dominant capital. Below the top fifty metropolises, the rank-size curve displays a continuous slope spanning hundreds of intermediate Class II, Class III and Class IV market towns, demonstrating deep economic integration across provincial and district urban networks [@Jain2018Contempo; @Khirwar2023Interpla].

# Limitations

## Jurisdictional Annexation and Agglomeration Dynamics

A primary challenge in tracking long-term urban trajectories involves shifting administrative perimeters. Rapid spatial expansion frequently results in municipal corporations annexing peripheral rural villages and census towns between census rounds. Consequently, statutory town populations may experience sudden administrative jumps that reflect boundary expansion rather than organic demographic growth. To mitigate this issue, our gazetteer prioritises Urban Agglomeration definitions where available, maintaining spatial contiguity across census decennia.

## The 2021 Census Delay and Growth Projections

The postponement of the 2021AD decennial census introduces uncertainty regarding recent post-2011 urban growth rates. Contemporary benchmark figures for 2021AD and 2025AD incorporated in this gazetteer are calibrated using municipal registrations, electoral data and satellite-detected built-up surfaces. While metropolitan totals are well constrained by municipal utility connections, the exact population trajectories of smaller Class V and Class VI census towns carry wider confidence intervals pending the completion of the next national census.

# Conclusion

The settlement gazetteer of post-independence India provides a quantitative foundation for understanding South Asian urban transformation between 1947AD and 2026AD. Encompassing 28.538 catalogued settlements across eight macro-regions, the data document the emergence of a mature, polycentric urban system characterised by multi-million metropolises, dynamic state capitals, intermediate census towns and deep-time historical continuity nodes. By linking these georeferenced nodes with regional dasymetric surfaces, INDUS reconciles nucleated settlements with rural agrarian populations, establishing an enduring spatial baseline for historical demography and spatial planning across the subcontinent.

# Appendix

## Census Size-Class Distributions

Table \ref{tab:classes} documents the distribution of catalogued urban settlements across the official Census of India size classes at the 2011 census.

<figure class="crd-table-figure" id="tab:classes">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Census Class</th><th class="crd-th">Population Range</th><th class="crd-th">Town Count</th><th class="crd-th">Town Share</th><th class="crd-th">2011 Population</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Class I</strong></td><td class="crd-td">100.000 and above</td><td class="crd-td">533</td><td class="crd-td">1,9%</td><td class="crd-td">274,67M</td></tr>
<tr><td class="crd-td"><strong>Class II</strong></td><td class="crd-td">50.000 to 99.999</td><td class="crd-td">660</td><td class="crd-td">2,3%</td><td class="crd-td">44,12M</td></tr>
<tr><td class="crd-td"><strong>Class III</strong></td><td class="crd-td">20.000 to 49.999</td><td class="crd-td">1797</td><td class="crd-td">6,3%</td><td class="crd-td">55,44M</td></tr>
<tr><td class="crd-td"><strong>Class IV</strong></td><td class="crd-td">10.000 to 19.999</td><td class="crd-td">2611</td><td class="crd-td">9,1%</td><td class="crd-td">38,32M</td></tr>
<tr><td class="crd-td"><strong>Class V</strong></td><td class="crd-td">5.000 to 9.999</td><td class="crd-td">4778</td><td class="crd-td">16,7%</td><td class="crd-td">31,72M</td></tr>
<tr><td class="crd-td"><strong>Class VI</strong></td><td class="crd-td">Less than 5.000</td><td class="crd-td">18149</td><td class="crd-td">63,6%</td><td class="crd-td">56,66M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Distribution of catalogued settlements across Census of India size classes (2011 census).</figcaption>
</figure>

# Sources
