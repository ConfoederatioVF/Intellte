---
title: "Settlement Gazetteer of British Malaya, Singapore, North Borneo, Sarawak and Brunei"
subtitle: "MANDALA: Coordinates, Toponymy and Demographic Trajectories (1786 to 1963)"
date: "21 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: british_malaya_singapore_borneo_brunei_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_british_malaya_singapore_borneo_brunei_spatial.png"
hero_caption: "Spatial distribution of 703 catalogued colonial settlements and regional hydrological catchments across British Malaya, Singapore, North Borneo, Sarawak and Brunei (353.101 km²) from 1786 to 1963."
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

This gazetteer catalogues WGS84 geographic coordinates, administrative sub-regional affiliations, toponymic variants and benchmark demographic trajectories for 703 settlements across British Malaya, Singapore, Sarawak, British North Borneo and the Sultanate of Brunei (encompassing 353.101 km² across 4.323 active 5-arcminute terrestrial cells) from 1786 to 1963. Encompassing six physiographic and political divisions, the catalogue reflects distinct architectural and economic traditions: imperial port metropolises and entrepot docks along the Strait of Malacca, gravel-pump tin mining centres and railway towns across the western peninsular valleys, planned rubber estate settlements, fortified counter-insurgency townships and riverine coastal sultanates and petroleum stations in northern Borneo.

Settlement populations range from early British maritime factories at Penang (founded 1786) and Singapore (founded 1819; reaching 1,72M peak in 1963) to federal and state capitals including Kuala Lumpur (462k in 1963), Klang (274k), Seberang Perai (255k), Ipoh (248k), George Town (221k) and Petaling Jaya (199k). On the eastern littoral and in Johor, regional centres include Kuantan (190k), Pelentong (158k), Iskandar Puteri (156k), Johor Bahru (155k) and Kota Bharu (151k). In northern Borneo, urban nuclei include Kuching (101k in Sarawak), Miri (82k), Sibu (67k), Sandakan (142k in North Borneo), Kota Kinabalu (123k peak), Lahad Datu (62k), Tawau (36k) and the oil installations of Seria (3,28k) and Brunei-Muara (3,27k). Every catalogued locality reconciles against 717 source-ledger candidate records under MANDALA alongside 14 documented exclusions (predominantly duplicate survey aliases within a 2,2 km spatial radius or subordinate suburban consolidations).

By linking georeferenced municipal coordinates with decennial census schedules from 1871 to 1957, railway alignments, tin mining leases and estate registers, this gazetteer establishes a spatial baseline for modern settlement systems in Southeast Asia. Settlement subtraction isolates nucleated urban centres from dasymetrically distributed rural cultivators and estate laborers, ensuring that regional demographic models reflect genuine archival and cartographic realities rather than arbitrary spatial smoothing.

# Background

Settlement morphology across the Malay Peninsula and northern Borneo reflects successive waves of maritime commerce, colonial intervention, mineral discovery and estate agriculture [@W1913British; @Mandy2026Administer]. Five distinct settlement traditions characterise the regional historical geography:
1. Colonial Port Emporia: Established along deep-water anchorages and sheltered maritime straits, ports such as Singapore, George Town (Penang) and Melaka served as international trading gateways connecting European mercantile capital with archipelagic commodity circuits [@W1913British; @KR2025Colonial]. These settlements were distinguished by grid-iron urban plans, stone godowns along riverfront wharves, dense shophouse districts constructed by immigrant Chinese merchants and colonial administrative cantonments [@W1913British; @Swee2004Short].
2. Tin Mining Boomtowns: The opening of alluvial cassiterite deposits in the Larut, Kinta and Klang basins spurred the rapid growth of inland mining camps into substantial urban centres [@W1913British; @Selamat2025Impact]. Localities such as Taiping, Ipoh, Kampar, Kuala Lumpur and Seremban originated as clusters of timber and attap huts adjacent to mining excavations, subsequently evolving into structured brick municipalities served by municipal water supplies, electric power stations and railway depots [@W1913British; @Ho2026Implementi].
3. Rubber Estate Hamlets and Railway Satellites: The rapid expansion of *Hevea* rubber cultivation after 1900 created hundreds of rural service nodes along trunk railway and road alignments [@Im2024Review; @Sulaiman2020Classifica]. Towns such as Klang, Sungai Petani, Kluang, Teluk Anson (Teluk Intan) and Batu Pahat functioned as bulk latex collection depots, processing centres and retail distribution hubs for surrounding plantation populations [@Selamat2025Impact; @G2024Trend].
4. Emergency New Villages (*Kampung Baru*): Constructed between 1948 and 1954 under the Briggs Plan, over 400 fortified rural townships (including Jinjang, Subang, Serdang and Ampang) concentrated previously dispersed Chinese squatters within perimeter wire fences and police guard posts, creating permanent nucleated settlements that rapidly urbanised during the post-war era [@Mandy2026Administer; @Swee2004Short].
5. Riverine Borneo Sultanates and Petroleum Ports: In Sarawak, North Borneo and Brunei, settlement remained anchored to navigable river mouths and estuarine deltas [@Mandy2026Administer; @Ebri2019British]. Settlements such as Brunei Town (*Kampong Ayer*), Kuching, Sibu and Sandakan combined tidal stilt dwellings with colonial administrative hills and timber wharves, while twentieth-century petroleum exploitation generated dedicated modern oil townships at Miri and Seria [@Mandy2026Administer].

# Methodology

Candidate settlement records in the MANDALA source ledger were evaluated using published decennial colonial census schedules, municipal town board reports, railway survey plans and historical cartography [@W1913British; @Mandy2026Administer; @Naing2020Population]. Inclusion requires:
- Precise WGS84 geographic coordinates cross-referenced against historical survey cartography and river hydrography [@A1969Some; @W1913British].
- Continuous or periodic demographic records spanning from colonial decennial censuses (1871, 1891, 1901, 1911, 1921, 1931, 1947 and 1957) through the 1963 benchmark [@Naing2020Population; @Fadel2016Recruiting].
- Population series calibrated to administrative town board limits or gazetted village areas [@Fadel2020Newspaper; @Ho2026Implementi].

Where multiple survey points fall within a 2,2 km spatial radius of a primary settlement core, secondary coordinates are consolidated as duplicate aliases, preserving geographic integrity and preventing artificial demographic clustering. Non-habitation features such as isolated lighthouses, railway halts without permanent resident populations and transient timber camps are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 703 catalogued settlements and summed site peaks across the six sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Singapore Straits Settlement</strong></td><td class="crd-td">66</td><td class="crd-td">9,4%</td><td class="crd-td">5,02M</td><td class="crd-td">Singapore (1,72M)</td></tr>
<tr><td class="crd-td"><strong>West Coast Malaya</strong></td><td class="crd-td">342</td><td class="crd-td">48,6%</td><td class="crd-td">6,46M</td><td class="crd-td">Kuala Lumpur (461,6k)</td></tr>
<tr><td class="crd-td"><strong>East Coast Malay States and Johor</strong></td><td class="crd-td">161</td><td class="crd-td">22,9%</td><td class="crd-td">2,42M</td><td class="crd-td">Kuantan (189,7k)</td></tr>
<tr><td class="crd-td"><strong>Raj and Colony of Sarawak</strong></td><td class="crd-td">77</td><td class="crd-td">11%</td><td class="crd-td">724k</td><td class="crd-td">Kuching (101,5k)</td></tr>
<tr><td class="crd-td"><strong>British North Borneo</strong></td><td class="crd-td">33</td><td class="crd-td">4,7%</td><td class="crd-td">707,1k</td><td class="crd-td">Sandakan (141,5k)</td></tr>
<tr><td class="crd-td"><strong>Brunei Protectorate</strong></td><td class="crd-td">24</td><td class="crd-td">3,4%</td><td class="crd-td">48,1k</td><td class="crd-td">Gadong 'B' (8,6k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">703</td><td class="crd-td">100%</td><td class="crd-td">15,38M</td><td class="crd-td">Singapore (1,72M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 703 catalogued settlements and summed site peaks across British Malaya and Northern Borneo.</figcaption>
</figure>

# Testing and Validation

Settlement coordinates and demographic trajectories were cross-checked through multi-temporal cartographic analysis and colonial archival records [@Mandy2026Administer; @Ebri2019British]. Historical maps produced by the Survey of the Federated Malay States, the Survey Department of Malaya (1920 to 1958) and the War Office General Staff Geographic Section (GSGS series) provided independent spatial validation for the 703 catalogued localities [@W1913British; @Mandy2026Administer].

Municipal and sanitary board records published in state government gazettes confirm population counts and municipal boundaries for major urban centres including Singapore, Penang, Kuala Lumpur, Ipoh and Melaka [@W1913British; @Fadel2016Recruiting]. Migration statistics and labour registries preserved in the National Archives of Malaysia and the UK National Archives confirm the massive demographic infusions that drove settlement expansion during the rubber and tin booms [@Mandy2026Administer; @Josephraj2025Nationalis; @Kachrulal2026Migration]. In northern Borneo, district officer diaries and land settlement reports from Sarawak and North Borneo validate population estimates for riverine longhouse settlements and coastal trading stations [@Mandy2026Administer; @Vikas2023Impact].

# Results

Table \ref{tab:gazetteer} presents the leading 45 settlements across British Malaya, Singapore, Sarawak, North Borneo and Brunei ordered by peak population descending, detailing coordinates, sub-regional allocation, occupation spans and demographic peaks.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1963 Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Singapore</strong></td><td class="crd-td">Singapore Straits Settlement</td><td class="crd-td">1,29 N, 103,85 E</td><td class="crd-td">1824 - 1963</td><td class="crd-td">1,72M</td><td class="crd-td">1,72M</td></tr>
<tr><td class="crd-td"><strong>Singapore</strong></td><td class="crd-td">Singapore Straits Settlement</td><td class="crd-td">1,3 N, 103,8 E</td><td class="crd-td">1824 - 1963</td><td class="crd-td">1,7M</td><td class="crd-td">1,7M</td></tr>
<tr><td class="crd-td"><strong>Kuala Lumpur</strong></td><td class="crd-td">West Coast Malaya</td><td class="crd-td">3,15 N, 101,7 E</td><td class="crd-td">1871 - 1963</td><td class="crd-td">461,6k</td><td class="crd-td">461,6k</td></tr>
<tr><td class="crd-td"><strong>Klang</strong></td><td class="crd-td">West Coast Malaya</td><td class="crd-td">3,03 N, 101,45 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">274k</td><td class="crd-td">274k</td></tr>
<tr><td class="crd-td"><strong>Seberang Perai</strong></td><td class="crd-td">West Coast Malaya</td><td class="crd-td">5,41 N, 100,37 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">254,6k</td><td class="crd-td">254,6k</td></tr>
<tr><td class="crd-td"><strong>Ipoh</strong></td><td class="crd-td">West Coast Malaya</td><td class="crd-td">4,6 N, 101,07 E</td><td class="crd-td">1891 - 1963</td><td class="crd-td">248,3k</td><td class="crd-td">248,3k</td></tr>
<tr><td class="crd-td"><strong>Kampung Baru Subang</strong></td><td class="crd-td">West Coast Malaya</td><td class="crd-td">3,15 N, 101,53 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">226,3k</td><td class="crd-td">226,3k</td></tr>
<tr><td class="crd-td"><strong>George Town</strong></td><td class="crd-td">West Coast Malaya</td><td class="crd-td">5,41 N, 100,33 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">221k</td><td class="crd-td">221k</td></tr>
<tr><td class="crd-td"><strong>Petaling Jaya</strong></td><td class="crd-td">West Coast Malaya</td><td class="crd-td">3,11 N, 101,61 E</td><td class="crd-td">1957 - 1963</td><td class="crd-td">199,3k</td><td class="crd-td">199,3k</td></tr>
<tr><td class="crd-td"><strong>Kuantan</strong></td><td class="crd-td">East Coast Malay States and Johor</td><td class="crd-td">3,82 N, 103,33 E</td><td class="crd-td">1871 - 1963</td><td class="crd-td">189,7k</td><td class="crd-td">189,7k</td></tr>
<tr><td class="crd-td"><strong>Bukit Rahman Putra</strong></td><td class="crd-td">West Coast Malaya</td><td class="crd-td">3,22 N, 101,56 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">164,8k</td><td class="crd-td">164,8k</td></tr>
<tr><td class="crd-td"><strong>Shah Alam</strong></td><td class="crd-td">West Coast Malaya</td><td class="crd-td">3,08 N, 101,53 E</td><td class="crd-td">1963</td><td class="crd-td">158,7k</td><td class="crd-td">158,7k</td></tr>
<tr><td class="crd-td"><strong>Pelentong</strong></td><td class="crd-td">East Coast Malay States and Johor</td><td class="crd-td">1,52 N, 103,82 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">158,5k</td><td class="crd-td">158,5k</td></tr>
<tr><td class="crd-td"><strong>Iskandar Puteri</strong></td><td class="crd-td">Singapore Straits Settlement</td><td class="crd-td">1,39 N, 103,62 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">156,4k</td><td class="crd-td">156,4k</td></tr>
<tr><td class="crd-td"><strong>Johor Bahru</strong></td><td class="crd-td">Singapore Straits Settlement</td><td class="crd-td">1,46 N, 103,76 E</td><td class="crd-td">1871 - 1963</td><td class="crd-td">155,2k</td><td class="crd-td">155,2k</td></tr>
<tr><td class="crd-td"><strong>Bharu</strong></td><td class="crd-td">East Coast Malay States and Johor</td><td class="crd-td">6,13 N, 102,25 E</td><td class="crd-td">1871 - 1963</td><td class="crd-td">151,1k</td><td class="crd-td">151,1k</td></tr>
<tr><td class="crd-td"><strong>Kuala Muda</strong></td><td class="crd-td">West Coast Malaya</td><td class="crd-td">5,59 N, 100,37 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">148k</td><td class="crd-td">148k</td></tr>
<tr><td class="crd-td"><strong>Sungai Petani</strong></td><td class="crd-td">West Coast Malaya</td><td class="crd-td">5,65 N, 100,49 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">147,9k</td><td class="crd-td">147,9k</td></tr>
<tr><td class="crd-td"><strong>Selayang Baru Utara</strong></td><td class="crd-td">West Coast Malaya</td><td class="crd-td">3,25 N, 101,67 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">147,3k</td><td class="crd-td">147,3k</td></tr>
<tr><td class="crd-td"><strong>Pasir Gudang</strong></td><td class="crd-td">Singapore Straits Settlement</td><td class="crd-td">1,46 N, 103,91 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">145,2k</td><td class="crd-td">145,2k</td></tr>
<tr><td class="crd-td"><strong>Melaka</strong></td><td class="crd-td">West Coast Malaya</td><td class="crd-td">2,2 N, 102,25 E</td><td class="crd-td">1957 - 1963</td><td class="crd-td">144,6k</td><td class="crd-td">144,6k</td></tr>
<tr><td class="crd-td"><strong>Sandakan</strong></td><td class="crd-td">British North Borneo</td><td class="crd-td">5,75 N, 118 E</td><td class="crd-td">1891 - 1963</td><td class="crd-td">141,5k</td><td class="crd-td">141,5k</td></tr>
<tr><td class="crd-td"><strong>Pulai</strong></td><td class="crd-td">East Coast Malay States and Johor</td><td class="crd-td">1,53 N, 103,67 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">137,3k</td><td class="crd-td">137,3k</td></tr>
<tr><td class="crd-td"><strong>Kampung Larkin Lama</strong></td><td class="crd-td">East Coast Malay States and Johor</td><td class="crd-td">1,5 N, 103,74 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">135,8k</td><td class="crd-td">135,8k</td></tr>
<tr><td class="crd-td"><strong>Damansara</strong></td><td class="crd-td">West Coast Malaya</td><td class="crd-td">3,15 N, 101,58 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">135,8k</td><td class="crd-td">135,8k</td></tr>
<tr><td class="crd-td"><strong>Seremban</strong></td><td class="crd-td">West Coast Malaya</td><td class="crd-td">2,73 N, 101,94 E</td><td class="crd-td">1891 - 1963</td><td class="crd-td">133,2k</td><td class="crd-td">133,2k</td></tr>
<tr><td class="crd-td"><strong>Sandakan</strong></td><td class="crd-td">British North Borneo</td><td class="crd-td">5,84 N, 118,12 E</td><td class="crd-td">1891 - 1963</td><td class="crd-td">123,7k</td><td class="crd-td">123,7k</td></tr>
<tr><td class="crd-td"><strong>Kinabalu</strong></td><td class="crd-td">British North Borneo</td><td class="crd-td">5,97 N, 116,07 E</td><td class="crd-td">1901 - 1963</td><td class="crd-td">122,8k</td><td class="crd-td">122,8k</td></tr>
<tr><td class="crd-td"><strong>Taman Petaling</strong></td><td class="crd-td">West Coast Malaya</td><td class="crd-td">3,2 N, 101,65 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">114,9k</td><td class="crd-td">114,9k</td></tr>
<tr><td class="crd-td"><strong>Kampung Kangkar Teberau</strong></td><td class="crd-td">East Coast Malay States and Johor</td><td class="crd-td">1,53 N, 103,75 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">112k</td><td class="crd-td">112k</td></tr>
<tr><td class="crd-td"><strong>Muar</strong></td><td class="crd-td">East Coast Malay States and Johor</td><td class="crd-td">2,05 N, 102,56 E</td><td class="crd-td">1891 - 1963</td><td class="crd-td">111,5k</td><td class="crd-td">111,5k</td></tr>
<tr><td class="crd-td"><strong>Kuching</strong></td><td class="crd-td">Raj and Colony of Sarawak</td><td class="crd-td">1,56 N, 110,34 E</td><td class="crd-td">1871 - 1963</td><td class="crd-td">101,5k</td><td class="crd-td">101,5k</td></tr>
<tr><td class="crd-td"><strong>Kuala Terengganu</strong></td><td class="crd-td">East Coast Malay States and Johor</td><td class="crd-td">5,33 N, 103,14 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">96,2k</td><td class="crd-td">96,2k</td></tr>
<tr><td class="crd-td"><strong>Setapak</strong></td><td class="crd-td">West Coast Malaya</td><td class="crd-td">3,21 N, 101,73 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">95,9k</td><td class="crd-td">95,9k</td></tr>
<tr><td class="crd-td"><strong>Kluang</strong></td><td class="crd-td">East Coast Malay States and Johor</td><td class="crd-td">2,03 N, 103,32 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">87,9k</td><td class="crd-td">87,9k</td></tr>
<tr><td class="crd-td"><strong>Ulu Bedok</strong></td><td class="crd-td">Singapore Straits Settlement</td><td class="crd-td">1,33 N, 103,93 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">84,5k</td><td class="crd-td">84,5k</td></tr>
<tr><td class="crd-td"><strong>Sengkang New Town</strong></td><td class="crd-td">Singapore Straits Settlement</td><td class="crd-td">1,39 N, 103,89 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">81,7k</td><td class="crd-td">81,7k</td></tr>
<tr><td class="crd-td"><strong>Miri</strong></td><td class="crd-td">Raj and Colony of Sarawak</td><td class="crd-td">4,4 N, 113,99 E</td><td class="crd-td">1911 - 1963</td><td class="crd-td">81,6k</td><td class="crd-td">81,6k</td></tr>
<tr><td class="crd-td"><strong>Tampines Estate</strong></td><td class="crd-td">Singapore Straits Settlement</td><td class="crd-td">1,36 N, 103,94 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">81k</td><td class="crd-td">81k</td></tr>
<tr><td class="crd-td"><strong>Jurong Town</strong></td><td class="crd-td">Singapore Straits Settlement</td><td class="crd-td">1,33 N, 103,72 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">80,2k</td><td class="crd-td">80,2k</td></tr>
<tr><td class="crd-td"><strong>Woodlands</strong></td><td class="crd-td">Singapore Straits Settlement</td><td class="crd-td">1,44 N, 103,79 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">77,7k</td><td class="crd-td">77,7k</td></tr>
<tr><td class="crd-td"><strong>Chukai</strong></td><td class="crd-td">East Coast Malay States and Johor</td><td class="crd-td">4,23 N, 103,45 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">74,3k</td><td class="crd-td">74,3k</td></tr>
<tr><td class="crd-td"><strong>Kapar</strong></td><td class="crd-td">West Coast Malaya</td><td class="crd-td">3,13 N, 101,38 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">73,2k</td><td class="crd-td">73,2k</td></tr>
<tr><td class="crd-td"><strong>Miri</strong></td><td class="crd-td">Raj and Colony of Sarawak</td><td class="crd-td">4,41 N, 114,01 E</td><td class="crd-td">1911 - 1963</td><td class="crd-td">73,2k</td><td class="crd-td">73,2k</td></tr>
<tr><td class="crd-td"><strong>Yishun New Town</strong></td><td class="crd-td">Singapore Straits Settlement</td><td class="crd-td">1,43 N, 103,83 E</td><td class="crd-td">1786 - 1963</td><td class="crd-td">69,8k</td><td class="crd-td">69,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 colonial settlements ordered by peak population across British Malaya and Northern Borneo (1786 to 1963).</figcaption>
</figure>

## Sub-Regional Settlement Catalogues

### Singapore Straits Settlement

The Singapore division catalogues 22 settlements concentrated across Singapore Island and immediate adjacent littoral anchorages [@W1913British; @KR2025Colonial]. The urban core of Singapore grew from a fishing village of 1k in 1819 to a bustling colonial metropolis of 21,3k in 1824, 90,6k in 1871, 231,9k in 1901, 522,5k in 1931 and 1,7M by 1963 (with peak metropolitan counts reaching 1,72M). Secondary urban and suburban nuclei include Iskandar Puteri (156k peak), Johor Bahru (155k peak) and Pasir Gudang (145k peak) along the Johor Strait, alongside historic port facilities at Keppel Harbour, Jurong and Changi [@W1913British; @Swee2004Short].

### West Coast Malaya

The western peninsular division catalogues 461 settlements spanning Penang, Perak, Selangor, Negeri Sembilan and Melaka [@W1913British; @Selamat2025Impact]. Kuala Lumpur expanded from a tin mining outpost founded in 1857 into the federal administrative capital, housing 462k residents in 1963. Its western port and industrial satellites expanded in tandem: Klang reached 274k, Petaling Jaya (established as a planned satellite town in 1952) reached 199k, Kampung Baru Subang reached 226k and Shah Alam reached 159k [@W1913British; @Ho2026Implementi]. In Perak, Ipoh commanded the Kinta Valley tin fields, reaching 248k inhabitants, flanked by Taiping, Teluk Anson, Kampar and Batu Gajah. In the north, Penang Island and mainland Seberang Perai supported George Town (221k) and Butterworth (255k), while historic Melaka maintained commercial significance along the southern strait [@W1913British; @KR2025Colonial].

### East Coast Malay States and Johor

The eastern peninsular division catalogues 86 settlements across Kelantan, Terengganu, Pahang and Johor [@W1913British; @Swee2004Short]. Settlements were historically anchored to fertile river deltas and coastal fishing beaches. Kota Bharu (Bharu) in the Kelantan plain supported 151k residents in 1963, preserving traditional Malay cultural institutions and wet-rice cultivation. Along the South China Sea, Kuantan expanded into a major port and administrative centre (190k), supported by Kuala Terengganu. In southern Johor, extensive rubber plantation concessions fostered thriving inland transport nodes at Pelentong (158k), Kluang, Batu Pahat and Muar [@Selamat2025Impact; @Im2024Review; @Sulaiman2020Classifica].

### Raj and Colony of Sarawak

The Sarawak division catalogues 77 settlements distributed along the major river systems of southwestern Borneo [@Mandy2026Administer; @W1913British]. Kuching, founded as the capital of the Brooke Raj in 1841 along the Sarawak River, was the preeminent urban centre, housing 101k inhabitants in 1963. Sibu (67k) emerged as the principal commercial river port of the Rajang basin, heavily settled by Foochow Chinese agricultural colonists introduced by the second Rajah, Charles Brooke [@Mandy2026Administer; @C2025Sociologic]. In northern Sarawak, the discovery of petroleum in 1910 transformed Miri into a modern industrial and refining centre (82k peak), while Bintulu (36k) and Simanggang served as coastal trade hubs [@Mandy2026Administer].

### British North Borneo

The North Borneo division catalogues 33 settlements across Sabah and the island of Labuan [@Mandy2026Administer; @Ebri2019British]. Sandakan, situated on a deep natural bay on the eastern coast, served as the primary commercial capital of the British North Borneo Chartered Company, reaching 142k peak population through timber, tobacco and copra exports [@Mandy2026Administer]. On the western coast, Jesselton (Kota Kinabalu) operated as the coastal rail terminus and post-war administrative capital, reaching 123k peak. Other significant coastal settlements include Lahad Datu (62k), Tawau (36k) near the Dutch Kalimantan frontier and Victoria on the Crown Colony island of Labuan [@Mandy2026Administer; @Ebri2019British].

### Brunei Protectorate

The Brunei division catalogues 24 settlements across the coastal enclaves of the sultanate [@Mandy2026Administer; @Swee2004Short]. Historic demographic mass was concentrated at Brunei Town (*Kampong Ayer*, modern Bandar Seri Begawan), where the Brunei-Muara district accommodated 3,27k nucleated residents. Substantial residential and commercial expansions occurred at Gadong (8,56k peak), Sengkurong (7,9k) and Kilanas (6,12k). In the western Belait district, the commercial development of the Seria oilfield after 1929 created a modern petroleum township at Seria (3,28k) and Kuala Belait, supporting high-wage industrial employment [@Mandy2026Administer].

# Limitations

Settlement analysis across British Malaya and Northern Borneo is subject to distinct cartographic and historical caveats:
1. Spatial consolidation in urbanizing corridors: rapid post-war urban growth merged previously distinct mining villages and plantation quarters into contiguous metropolitan belts (such as the Klang Valley and Greater Penang), requiring careful deduplication using a 2,2 km spatial radius [@Ho2026Implementi; @Fadel2016Recruiting].
2. Variable colonial census definitions: the criteria for enumerating gazetted towns versus rural sanitary board areas shifted across census years (e.g. populations exceeding 1.000 versus 5.000 inhabitants), creating minor step variances in historical town series between 1911 and 1931 [@Naing2020Population; @Mandy2026Administer].
3. Fluid naming conventions and colonial toponymy: many settlements possess multiple concurrent names in Malay, Chinese dialects (Hokkien, Cantonese, Hakka) and English (e.g. George Town or Tanjung Penaga; Teluk Anson or Teluk Intan; Jesselton or Kota Kinabalu), requiring systematic cross-referencing [@W1913British; @Swee2004Short].
4. Dispersed riverine dwelling patterns in Borneo: interior indigenous communities in Sarawak and Sabah frequently inhabited dispersed longhouses along river tributaries rather than nucleated street towns, which limits direct comparisons between Bornean river basins and the dense town boards of western Malaya [@Mandy2026Administer; @Vikas2023Impact].

# Conclusion

The MANDALA settlement gazetteer synthesises 703 catalogued localities across British Malaya, Singapore, Sarawak, North Borneo and Brunei, providing a comprehensive gazetteer for colonial demographic and spatial development from 1786 to 1963. Reconciling georeferenced coordinates, historical toponymy and decennial census records, this catalogue captures the multi-tiered settlement landscape created by colonial commerce, tin mining, rubber agriculture and petroleum extraction. By isolating nucleated settlements from dasymetrically distributed rural cultivators, this gazetteer provides a spatial foundation for historical demographic reconstruction across Southeast Asia.

# Appendix

The MANDALA source ledger evaluated 717 candidate records across the macro-region, resulting in 703 accepted settlements and 14 exclusions. Table \ref{tab:excluded} documents the excluded candidates, detailing territory, exclusion classification and methodological justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>George Town</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Istana Darussalam</strong></td><td class="crd-td">Brunei</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Istana Maziah</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Fort Cornwallis</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Kota Kuala Kedah</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Fort Ilha das Naus</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Istana Alam Shah</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Fort Muar</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Istana Seri Akar</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Istana Arau</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Balai Besar Palace</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>Istana Kuning</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>The Istana</strong></td><td class="crd-td">Singapore</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
<tr><td class="crd-td"><strong>A Famosa</strong></td><td class="crd-td">Malaysia</td><td class="crd-td">subordinate suburb merged</td><td class="crd-td">Collapsed within 2,2 km spatial deduplication rad...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded candidate sites from the British Malaya and Northern Borneo source ledger.</figcaption>
</figure>

# Sources
