---
title: "Mediaeval Near East, Iran and Caucasia (1000-1500)"
subtitle: "Settlement Gazetteer and Urban Rank-Size Catalogue"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: mediaeval_near_east_iran_caucasia_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig1_mediaeval_near_east_iran_caucasia_spatial.png"
hero_caption: "Spatial distribution of 66.671 individually assessed mediaeval settlements across eight ecological and political sub-regions from Anatolia to Khorasan and Arabia between 1000AD and 1500AD."
hero_label: "fig:hero-settlements-mediaeval-near-east-iran-caucasia"

header-includes:
  - \renewcommand{\topfraction}{0.88}
  - \renewcommand{\bottomfraction}{0.82}
  - \renewcommand{\textfraction}{0.08}
  - \renewcommand{\floatpagefraction}{0.75}
  - \setlength{\textfloatsep}{10pt plus 2pt minus 2pt}
  - \setlength{\intextsep}{10pt plus 2pt minus 2pt}
  - \raggedbottom

output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This companion gazetteer documents the 66.671 individually assessed mediaeval settlements compiled for the Near East, Iran, Afghanistan, Caucasia, Cyprus and the Arabian Peninsula between 1000AD and 1500AD. Selected from an initial ledger pool of 66.921 candidate places after excluding 250 co-located localities, variant-spelling duplicates, uninhabited monuments, non-settlement fragments and unquantified minor scatters, the catalogue spans 20 modern jurisdictions anchored by Turkey (23.991 places), Iran (21.183), Iraq (4.978), Syria (3.262), Azerbaijan (1.997), Georgia (1.879), Yemen (1.807), Saudi Arabia (1.712), Afghanistan (1.220) and Oman (1.197), alongside smaller Levantine, Caucasian and Gulf networks in Armenia, Jordan, Israel, Lebanon, Palestine, Cyprus, United Arab Emirates, Qatar, Kuwait and Bahrain. Across the five-century interval, urban primacy shifted repeatedly in response to Seljuk frontier consolidation around Konya, Bagratid expansion in Tbilisi and Ani, Crusader-Mamluk contests along the Levantine seaboard, Mongol destruction in Khorasan and Baghdad, the Black Death of 1347-1349AD and Timurid-Turkmen reconstruction in Herat and Tabriz. Evaluated across all 66.671 settlements, the peak rank-size distribution exhibits a well-structured Zipf slope of $\alpha = 1,02$ ($R^2 = 0,88$), led by Baghdad (284k), Tabriz (235k), Herat (152k), Nishapur (132k), Ghazni (128k), Isfahan (112k), Damascus (108,5k) and Rayy (108k), reflecting a polycentric mediaeval urban network in which major imperial capitals stood above a deep second tier of regional seats, market towns and caravan entrepôts.

<figure class="crd-figure-block" id="fig:hero-settlements-mediaeval-near-east-iran-caucasia">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-mediaeval-near-east-iran-caucasia-settlements/fig1_mediaeval_near_east_iran_caucasia_spatial.png" alt="fig:hero-settlements-mediaeval-near-east-iran-caucasia" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 66.671 individually assessed mediaeval settlements across eight ecological and political sub-regions from Anatolia to Khorasan and Arabia between 1000AD and 1500AD.</figcaption>
</figure>

# Background

Urban networks across southwestern Asia between 1000AD and 1500AD did not conform to a single imperial hierarchy. Unlike late antique Rome or early Abbasid Baghdad, which had concentrated disproportionate fiscal and demographic weight in a single capital, the mediaeval Near East and Iranian world fragmented into competing regional courts and mercantile corridors [@Bosworth2007Historic; @Peacock2021Urban]. Great Seljuk and Khwarazmian rule elevated Nishapur, Rayy, Isfahan, Shiraz and Hamadan across the Iranian plateau while Rum Seljuk sultans turned Konya, Kayseri and Sivas into fortified caravanserai hubs across central Anatolia [@S2020History; @Mahmuluddin2024Myth]. In Transcaucasia, Bagratid kings expanded Tbilisi and Ani while Shaddadid and Eldiguzid rulers patronised Ganja and Tabriz [@Yusif2025Reflection; @Guven2024Seljuk]. Along the Mediterranean and Mesopotamian corridors, Damascus, Aleppo, Mosul and Baghdad sustained dense craft and transit quarters until thirteenth-century Mongol campaigns and mid-fourteenth-century plague curtailed urban heights across every subregion [@Katie2021Cities; @Wing2016Jalayirids; @MH2025Plague].

# Methodology

Candidate settlements were compiled and individually assessed from excavated wall-circuit and urban-footprint surveys (such as Baghdad, Nishapur, Rayy, Ani, Acre, Zabid, Qalhat and Al-Balid), early Islamic geographical itineraries and chronicles (including al-Muqaddasi, Nasir-i Khusraw, Ibn Jubayr, Yaqut, Ibn Battuta and Hamdallah Mustawfi), historical settlement registers (including Al-Thurayya, DARMC, Euratlas and regional Anatolian and Near Eastern survey corpora), Crusader, Lusignan and Mamluk administrative sources and late fifteenth-century Ottoman *tahrir* registers, with overlapping toponyms reconciled by verified WGS84 coordinates and historical nomenclature [@Bosworth2007Historic; @M2026Late; @AM2026Tale]. Screening of 66.921 initial ledger candidates excluded 250 records representing co-located localities, isolated forts, rural sanctuaries without residential quarters, unlocated itinerary stages, unquantified minor scatters or variant-spelling doublets within 25 km. Each of the 66.671 retained settlements carries an individually assessed population series across its documented occupation between 1000AD and 1500AD, combining fifty-year benchmarks with targeted event years for major foundations, sieges and epidemics, constrained by an explicit urban-core mask so modern suburban sprawl never inflates mediaeval urban totals.

All spatial joins map settlement coordinates onto smooth vector sub-region polygons and 29 historical Ottoman, Russian and Mandate divisions alongside 2.629 modern geoBoundaries ADM1 and ADM2 polygons [@Runfola2020GeoBoundaries]. Strictly mass-conserving pycnophylactic scaling across 65.864 unit-year checks ensures that urban point totals remain consistent with regional rural densities across the 1500AD transition into early modern censuses.

# Testing and Validation

Internal validation of the 66.671-settlement gazetteer evaluates territorial completeness across all 20 jurisdictions, temporal density across fifty-year steps from 1000AD to 1500AD and rank-size conformity. Active coverage spans 44.749 settlements at 1000AD, 57.587 at 1300AD and 66.102 at 1500AD, registering documented mediaeval foundations (Hillah in 1101AD, Firuzkuh in 1146AD, Island Hormuz in 1300AD and Sultaniyya in 1304AD) alongside the post-Mongol abandonment of Firuzkuh after 1300AD and period-bounded regional survey horizons. Across all 66.671 settlements, the ordinary-least-squares log-log regression of peak population against rank yields $\alpha = 1,02$ ($R^2 = 0,88$). This near-unitary Zipfian slope across tens of thousands of urban and regional nodes reflects a multi-polar mediaeval urban world in which imperial capitals - Baghdad (284k), Tabriz (235k), Herat (152k), Nishapur (132k), Ghazni (128k), Isfahan (112k), Damascus (108,5k) and Rayy (108k) - stood above a robust second tier of regional capitals including Balkh (94k), Mosul (94k), Shiraz (93,5k), Aleppo (91k) and Konya (86k) [@Bosworth2007Historic; @Katie2021Cities].

<figure class="crd-figure-block" id="fig:settlements-catalogue-mediaeval-near-east-iran-caucasia">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-mediaeval-near-east-iran-caucasia-settlements/fig4_mediaeval_near_east_iran_caucasia_settlements.png" alt="fig:settlements-catalogue-mediaeval-near-east-iran-caucasia" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 3.</span> Rank-size distribution across 66.671 individually assessed mediaeval settlements and leading urban centres by peak population between 1000AD and 1500AD.</figcaption>
</figure>

# Results

Territorial distribution reflects the underlying agrarian, hydraulic and caravan carrying capacity of southwestern Asia. Turkey (23.991 settlements, 36% of the catalogue) and Iran (21.183 settlements, 31,8%) together account for 67,8% of all assessed sites, followed by Iraq (4.978), Syria (3.262), Azerbaijan (1.997), Georgia (1.879) and Yemen (1.807). Across the Arabian Peninsula, 4.869 assessed centres span Yemen (1.807), Saudi Arabia (1.712), Oman (1.197), United Arab Emirates (72), Qatar (38), Kuwait (27) and Bahrain (16), tracing Red Sea pilgrimage routes, Yemeni highland terraces and Gulf maritime entrepôts such as Qalhat, Sohar and Hormuz's Arabian partner ports. The modern Levantine jurisdictions contribute 5.352 centres across Syria (3.262), Jordan (595), Israel (534), Lebanon (506) and Palestine (455), Transcaucasia contributes 4.726 settlements across Azerbaijan (1.997), Georgia (1.879) and Armenia (850), and Cyprus adds 352 fortified and coastal centres including Nicosia and Famagusta [@Kaya2016History; @Yusif2025Reflection].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th><th class="crd-th">1000AD Urban</th><th class="crd-th">1500AD Urban</th><th class="crd-th">Peak City</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Turkey</strong></td><td class="crd-td">23.991</td><td class="crd-td">36%</td><td class="crd-td">4,89M</td><td class="crd-td">35,7M</td><td class="crd-td">86k</td></tr>
<tr><td class="crd-td"><strong>Iran</strong></td><td class="crd-td">21.183</td><td class="crd-td">31,8%</td><td class="crd-td">4,03M</td><td class="crd-td">4,99M</td><td class="crd-td">235k</td></tr>
<tr><td class="crd-td"><strong>Iraq</strong></td><td class="crd-td">4.978</td><td class="crd-td">7,5%</td><td class="crd-td">2,11M</td><td class="crd-td">1,85M</td><td class="crd-td">284k</td></tr>
<tr><td class="crd-td"><strong>Syria</strong></td><td class="crd-td">3.262</td><td class="crd-td">4,9%</td><td class="crd-td">1,73M</td><td class="crd-td">1,75M</td><td class="crd-td">108,5k</td></tr>
<tr><td class="crd-td"><strong>Azerbaijan</strong></td><td class="crd-td">1.997</td><td class="crd-td">3%</td><td class="crd-td">506,7k</td><td class="crd-td">612k</td><td class="crd-td">58,5k</td></tr>
<tr><td class="crd-td"><strong>Georgia</strong></td><td class="crd-td">1.879</td><td class="crd-td">2,8%</td><td class="crd-td">387,9k</td><td class="crd-td">462,6k</td><td class="crd-td">78,5k</td></tr>
<tr><td class="crd-td"><strong>Yemen</strong></td><td class="crd-td">1.807</td><td class="crd-td">2,7%</td><td class="crd-td">928,9k</td><td class="crd-td">1,22M</td><td class="crd-td">47,6k</td></tr>
<tr><td class="crd-td"><strong>Saudi Arabia</strong></td><td class="crd-td">1.712</td><td class="crd-td">2,6%</td><td class="crd-td">617,5k</td><td class="crd-td">925,4k</td><td class="crd-td">55,7k</td></tr>
<tr><td class="crd-td"><strong>Afghanistan</strong></td><td class="crd-td">1.220</td><td class="crd-td">1,8%</td><td class="crd-td">774,6k</td><td class="crd-td">802,8k</td><td class="crd-td">152k</td></tr>
<tr><td class="crd-td"><strong>Oman</strong></td><td class="crd-td">1.197</td><td class="crd-td">1,8%</td><td class="crd-td">275k</td><td class="crd-td">350,1k</td><td class="crd-td">26,8k</td></tr>
<tr><td class="crd-td"><strong>Armenia</strong></td><td class="crd-td">850</td><td class="crd-td">1,3%</td><td class="crd-td">223k</td><td class="crd-td">257,7k</td><td class="crd-td">26,5k</td></tr>
<tr><td class="crd-td"><strong>Jordan</strong></td><td class="crd-td">595</td><td class="crd-td">0,9%</td><td class="crd-td">261,6k</td><td class="crd-td">325,2k</td><td class="crd-td">47k</td></tr>
<tr><td class="crd-td"><strong>Israel</strong></td><td class="crd-td">534</td><td class="crd-td">0,8%</td><td class="crd-td">487,2k</td><td class="crd-td">357,5k</td><td class="crd-td">49,2k</td></tr>
<tr><td class="crd-td"><strong>Lebanon</strong></td><td class="crd-td">506</td><td class="crd-td">0,8%</td><td class="crd-td">352,7k</td><td class="crd-td">307,8k</td><td class="crd-td">37,5k</td></tr>
<tr><td class="crd-td"><strong>Palestine</strong></td><td class="crd-td">455</td><td class="crd-td">0,7%</td><td class="crd-td">230,7k</td><td class="crd-td">270k</td><td class="crd-td">28,5k</td></tr>
<tr><td class="crd-td"><strong>Cyprus</strong></td><td class="crd-td">352</td><td class="crd-td">0,5%</td><td class="crd-td">105,8k</td><td class="crd-td">116,9k</td><td class="crd-td">30,8k</td></tr>
<tr><td class="crd-td"><strong>United Arab Emirates</strong></td><td class="crd-td">72</td><td class="crd-td">0,1%</td><td class="crd-td">228,7k</td><td class="crd-td">334k</td><td class="crd-td">49,3k</td></tr>
<tr><td class="crd-td"><strong>Qatar</strong></td><td class="crd-td">38</td><td class="crd-td">0,1%</td><td class="crd-td">61,8k</td><td class="crd-td">115,1k</td><td class="crd-td">29,4k</td></tr>
<tr><td class="crd-td"><strong>Kuwait</strong></td><td class="crd-td">27</td><td class="crd-td">0%</td><td class="crd-td">146,7k</td><td class="crd-td">179,5k</td><td class="crd-td">47k</td></tr>
<tr><td class="crd-td"><strong>Bahrain</strong></td><td class="crd-td">16</td><td class="crd-td">0%</td><td class="crd-td">41,1k</td><td class="crd-td">55,1k</td><td class="crd-td">19,6k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Territorial breakdown of the 66.671 individually assessed mediaeval settlements showing urban totals at 1000AD and 1500AD and maximum single-city peak.</figcaption>
</figure>

## Leading Mediaeval Urban Centres

Between 1000AD and 1250AD, the upper urban tier was anchored by late Abbasid Baghdad (peaking at 284k in 1200AD), the pre-Mongol Iranian and Khorasan metropolises of Nishapur (132k in 1050AD), Ghazni (128k in 1050AD), Isfahan (112k in 1100AD), Rayy (108k in 1050AD) and Balkh (94k in 1100AD), alongside Mosul (94k), Aleppo (91k), Konya (86k), Ani (84,5k), Tbilisi (78,5k), Sivas (66,5k), Hamadan (62,5k), Antioch (61,5k), Ganja (58,5k) and Basra (58k) [@Bosworth2007Historic]. The thirteenth-century Mongol conquests shattered Khorasan, Afghanistan and Mesopotamia - cutting Baghdad from 268k in 1250AD to 72k after 1258AD and reducing Nishapur, Rayy, Balkh, Ghazni and Firuzkuh to fractions of their Seljuk and Ghurid scale - while Ilkhanid and Mamluk political consolidation elevated new peaks at Tabriz (235k in 1340AD), Damascus (108,5k in 1340AD), Sultaniyya (84k in 1335AD) and Maragha (58,5k in 1265AD) before the 1348AD Black Death [@Katie2021Cities; @Wing2016Jalayirids]. In the fifteenth century, Timurid, Turkmen and early Ottoman reconstruction propelled Herat (152k in 1500AD), Tabriz (198k), Shiraz (93,5k), Bursa (64,8k), Yazd (61,8k), Island Hormuz (56,4k), Mashhad (54,2k), Mecca (49,5k) and Aden (47,6k in 1400AD) to the forefront of southwestern Asian urbanisation [@Peacock2021Urban; @Darvish2025Comparativ].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Lat, Lon</th><th class="crd-th">1000AD</th><th class="crd-th">1250AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Baghdad</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,34, 44,39</td><td class="crd-td">265k</td><td class="crd-td">268k</td><td class="crd-td">54k</td><td class="crd-td">284k</td></tr>
<tr><td class="crd-td"><strong>Tabriz</strong></td><td class="crd-td">Iran</td><td class="crd-td">38,08, 46,29</td><td class="crd-td">28,5k</td><td class="crd-td">86k</td><td class="crd-td">198k</td><td class="crd-td">235k</td></tr>
<tr><td class="crd-td"><strong>Herat</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">34,35, 62,2</td><td class="crd-td">56k</td><td class="crd-td">34,5k</td><td class="crd-td">152k</td><td class="crd-td">152k</td></tr>
<tr><td class="crd-td"><strong>Nishapur</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,21, 58,8</td><td class="crd-td">124k</td><td class="crd-td">22,4k</td><td class="crd-td">23,4k</td><td class="crd-td">132k</td></tr>
<tr><td class="crd-td"><strong>Ghazni</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">33,55, 68,42</td><td class="crd-td">78k</td><td class="crd-td">13,6k</td><td class="crd-td">19,2k</td><td class="crd-td">128k</td></tr>
<tr><td class="crd-td"><strong>Isfahan</strong></td><td class="crd-td">Iran</td><td class="crd-td">32,65, 51,67</td><td class="crd-td">68,5k</td><td class="crd-td">64k</td><td class="crd-td">72,5k</td><td class="crd-td">112k</td></tr>
<tr><td class="crd-td"><strong>Damascus</strong></td><td class="crd-td">Syria</td><td class="crd-td">33,51, 36,28</td><td class="crd-td">64k</td><td class="crd-td">98k</td><td class="crd-td">69,4k</td><td class="crd-td">108,5k</td></tr>
<tr><td class="crd-td"><strong>Rayy</strong></td><td class="crd-td">Iran</td><td class="crd-td">35,59, 51,43</td><td class="crd-td">98k</td><td class="crd-td">12,4k</td><td class="crd-td">4,2k</td><td class="crd-td">108k</td></tr>
<tr><td class="crd-td"><strong>Balkh</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">36,76, 66,9</td><td class="crd-td">82k</td><td class="crd-td">16,2k</td><td class="crd-td">46,2k</td><td class="crd-td">94k</td></tr>
<tr><td class="crd-td"><strong>Mosul</strong></td><td class="crd-td">Iraq</td><td class="crd-td">36,35, 43,12</td><td class="crd-td">54k</td><td class="crd-td">94k</td><td class="crd-td">41,2k</td><td class="crd-td">94k</td></tr>
<tr><td class="crd-td"><strong>Shiraz</strong></td><td class="crd-td">Iran</td><td class="crd-td">29,61, 52,53</td><td class="crd-td">58k</td><td class="crd-td">72,5k</td><td class="crd-td">93,5k</td><td class="crd-td">93,5k</td></tr>
<tr><td class="crd-td"><strong>Aleppo</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,2, 37,13</td><td class="crd-td">52k</td><td class="crd-td">91k</td><td class="crd-td">62,8k</td><td class="crd-td">91k</td></tr>
<tr><td class="crd-td"><strong>Konya</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,87, 32,49</td><td class="crd-td">21,5k</td><td class="crd-td">86k</td><td class="crd-td">52,4k</td><td class="crd-td">86k</td></tr>
<tr><td class="crd-td"><strong>Ani</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,51, 43,57</td><td class="crd-td">76k</td><td class="crd-td">33,4k</td><td class="crd-td">2,4k</td><td class="crd-td">84,5k</td></tr>
<tr><td class="crd-td"><strong>Sultaniyya</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,43, 48,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,2k</td><td class="crd-td">84k</td></tr>
<tr><td class="crd-td"><strong>Tbilisi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">41,69, 44,8</td><td class="crd-td">31k</td><td class="crd-td">39,2k</td><td class="crd-td">26,8k</td><td class="crd-td">78,5k</td></tr>
<tr><td class="crd-td"><strong>Sivas</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,75, 37,02</td><td class="crd-td">19,4k</td><td class="crd-td">66,5k</td><td class="crd-td">31,6k</td><td class="crd-td">66,5k</td></tr>
<tr><td class="crd-td"><strong>Bursa</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,19, 29,06</td><td class="crd-td">11,8k</td><td class="crd-td">18,5k</td><td class="crd-td">64,8k</td><td class="crd-td">64,8k</td></tr>
<tr><td class="crd-td"><strong>Hamadan</strong></td><td class="crd-td">Iran</td><td class="crd-td">34,8, 48,52</td><td class="crd-td">42k</td><td class="crd-td">23,4k</td><td class="crd-td">31,2k</td><td class="crd-td">62,5k</td></tr>
<tr><td class="crd-td"><strong>Yazd</strong></td><td class="crd-td">Iran</td><td class="crd-td">31,9, 54,36</td><td class="crd-td">22,5k</td><td class="crd-td">38,8k</td><td class="crd-td">61,8k</td><td class="crd-td">61,8k</td></tr>
<tr><td class="crd-td"><strong>Antioch</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,2, 36,16</td><td class="crd-td">56k</td><td class="crd-td">48,5k</td><td class="crd-td">7,2k</td><td class="crd-td">61,5k</td></tr>
<tr><td class="crd-td"><strong>Yenikapı</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,01, 28,95</td><td class="crd-td">474</td><td class="crd-td">61,2k</td><td class="crd-td">60,8k</td><td class="crd-td">61,4k</td></tr>
<tr><td class="crd-td"><strong>Neorion</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,02, 28,98</td><td class="crd-td">3,4k</td><td class="crd-td">3k</td><td class="crd-td">61,1k</td><td class="crd-td">61,1k</td></tr>
<tr><td class="crd-td"><strong>Ganja</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">40,68, 46,36</td><td class="crd-td">42k</td><td class="crd-td">24,8k</td><td class="crd-td">31,8k</td><td class="crd-td">58,5k</td></tr>
<tr><td class="crd-td"><strong>Maragha</strong></td><td class="crd-td">Iran</td><td class="crd-td">37,39, 46,24</td><td class="crd-td">21,5k</td><td class="crd-td">28,4k</td><td class="crd-td">25,6k</td><td class="crd-td">58,5k</td></tr>
<tr><td class="crd-td"><strong>Basra</strong></td><td class="crd-td">Iraq</td><td class="crd-td">30,51, 47,78</td><td class="crd-td">58k</td><td class="crd-td">35k</td><td class="crd-td">27,5k</td><td class="crd-td">58k</td></tr>
<tr><td class="crd-td"><strong>Hormuz</strong></td><td class="crd-td">Iran</td><td class="crd-td">27,07, 56,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">56,4k</td><td class="crd-td">56,4k</td></tr>
<tr><td class="crd-td"><strong>Riyadh</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,65, 46,77</td><td class="crd-td">3k</td><td class="crd-td">2,7k</td><td class="crd-td">55,7k</td><td class="crd-td">55,7k</td></tr>
<tr><td class="crd-td"><strong>Mashhad</strong></td><td class="crd-td">Iran</td><td class="crd-td">36,29, 59,62</td><td class="crd-td">6,2k</td><td class="crd-td">14,8k</td><td class="crd-td">54,2k</td><td class="crd-td">54,2k</td></tr>
<tr><td class="crd-td"><strong>Kayseri</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,72, 35,48</td><td class="crd-td">18,2k</td><td class="crd-td">36,5k</td><td class="crd-td">38,9k</td><td class="crd-td">51k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Top 30 individually assessed mediaeval settlements ranked by peak population with coordinates and populations at 1000AD, 1250AD, 1500AD and peak horizon.</figcaption>
</figure>

# Limitations

Three gazetteer constraints require care in local interpretation. First, early Islamic geographic compendia describe central Iran, Mesopotamia and northern Syria in much finer detail than interior Anatolia, highland Georgia or southern Arabia, producing denser documentary coverage along historic Iranian and Syrian trunk roads than in mountainous or pastoral districts [@Bosworth2007Historic; @Peacock2021Urban]. Second, archaeological population estimates derived from walled intra-mural areas (such as Rayy, Nishapur, Ani, Acre, Mosul or Antioch) depend on residential-density coefficients and the fluctuating extent of extra-mural suburbs (*rabads*), which expanded rapidly in imperial capitals and contracted sharply during prolonged sieges [@M2026Late; @Katie2021Cities]. Third, while targeted event-year benchmarks capture acute shocks such as the 1221AD Mongol sack of Nishapur, the 1258AD sack of Baghdad, the 1291AD razing of Acre and the 1348AD Black Death, smaller provincial towns rely on fifty-year intervals that smooth over localised famines and short-term dynastic raids [@Wing2016Jalayirids; @MH2025Plague].

# Conclusion

The 66.671-settlement gazetteer confirms that mediaeval southwestern Asia maintained a deeply polycentric yet well-ordered urban network ($\alpha = 1,02$, $R^2 = 0,88$) from 1000AD to 1500AD. Even after thirteenth-century conquests and fourteenth-century plague depressed older Abbasid and Khorasan metropolises, regional capitals and commercial nodes across Anatolia, Iran, Khorasan, the Levant, Transcaucasia and Yemen preserved the institutional and spatial skeleton upon which early modern urban growth resumed.

# Appendix

## Regional Sub-Catalogues: Anatolia, Levant and Transcaucasia

The following table lists the twenty highest-ranking assessed settlements across Turkey, Syria, Lebanon, Israel, Palestine, Jordan, Cyprus, Georgia, Armenia and Azerbaijan.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">1000AD</th><th class="crd-th">1150AD</th><th class="crd-th">1350AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Damascus</strong></td><td class="crd-td">Syria</td><td class="crd-td">64k</td><td class="crd-td">78k</td><td class="crd-td">71,5k</td><td class="crd-td">69,4k</td></tr>
<tr><td class="crd-td"><strong>Aleppo</strong></td><td class="crd-td">Syria</td><td class="crd-td">52k</td><td class="crd-td">71,5k</td><td class="crd-td">53,8k</td><td class="crd-td">62,8k</td></tr>
<tr><td class="crd-td"><strong>Konya</strong></td><td class="crd-td">Turkey</td><td class="crd-td">21,5k</td><td class="crd-td">47k</td><td class="crd-td">43,5k</td><td class="crd-td">52,4k</td></tr>
<tr><td class="crd-td"><strong>Ani</strong></td><td class="crd-td">Turkey</td><td class="crd-td">76k</td><td class="crd-td">66,5k</td><td class="crd-td">11,5k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Tbilisi</strong></td><td class="crd-td">Georgia</td><td class="crd-td">31k</td><td class="crd-td">54,5k</td><td class="crd-td">33,8k</td><td class="crd-td">26,8k</td></tr>
<tr><td class="crd-td"><strong>Sivas</strong></td><td class="crd-td">Turkey</td><td class="crd-td">19,4k</td><td class="crd-td">36,2k</td><td class="crd-td">38,5k</td><td class="crd-td">31,6k</td></tr>
<tr><td class="crd-td"><strong>Bursa</strong></td><td class="crd-td">Turkey</td><td class="crd-td">11,8k</td><td class="crd-td">14,6k</td><td class="crd-td">27,5k</td><td class="crd-td">64,8k</td></tr>
<tr><td class="crd-td"><strong>Antioch</strong></td><td class="crd-td">Turkey</td><td class="crd-td">56k</td><td class="crd-td">52,5k</td><td class="crd-td">5,4k</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td"><strong>Yenikapı</strong></td><td class="crd-td">Turkey</td><td class="crd-td">474</td><td class="crd-td">61,1k</td><td class="crd-td">59,9k</td><td class="crd-td">60,8k</td></tr>
<tr><td class="crd-td"><strong>Neorion</strong></td><td class="crd-td">Turkey</td><td class="crd-td">3,4k</td><td class="crd-td">3,2k</td><td class="crd-td">60,2k</td><td class="crd-td">61,1k</td></tr>
<tr><td class="crd-td"><strong>Ganja</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">42k</td><td class="crd-td">36,2k</td><td class="crd-td">28,4k</td><td class="crd-td">31,8k</td></tr>
<tr><td class="crd-td"><strong>Kayseri</strong></td><td class="crd-td">Turkey</td><td class="crd-td">18,2k</td><td class="crd-td">31,5k</td><td class="crd-td">30,5k</td><td class="crd-td">38,9k</td></tr>
<tr><td class="crd-td"><strong>Acre</strong></td><td class="crd-td">Israel</td><td class="crd-td">11,5k</td><td class="crd-td">26,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Trebizond</strong></td><td class="crd-td">Turkey</td><td class="crd-td">22,5k</td><td class="crd-td">28,4k</td><td class="crd-td">31,8k</td><td class="crd-td">29,4k</td></tr>
<tr><td class="crd-td"><strong>Amman</strong></td><td class="crd-td">Jordan</td><td class="crd-td">3k</td><td class="crd-td">2,8k</td><td class="crd-td">47k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Diyarbakir</strong></td><td class="crd-td">Turkey</td><td class="crd-td">31,5k</td><td class="crd-td">37,4k</td><td class="crd-td">27,4k</td><td class="crd-td">46,2k</td></tr>
<tr><td class="crd-td"><strong>Shamakhi</strong></td><td class="crd-td">Azerbaijan</td><td class="crd-td">24,5k</td><td class="crd-td">36,2k</td><td class="crd-td">29,8k</td><td class="crd-td">42,5k</td></tr>
<tr><td class="crd-td"><strong>Irbid</strong></td><td class="crd-td">Jordan</td><td class="crd-td">38,8k</td><td class="crd-td">40,5k</td><td class="crd-td">36,2k</td><td class="crd-td">39,3k</td></tr>
<tr><td class="crd-td"><strong>Erzurum</strong></td><td class="crd-td">Turkey</td><td class="crd-td">14,5k</td><td class="crd-td">33,5k</td><td class="crd-td">21,2k</td><td class="crd-td">22,4k</td></tr>
<tr><td class="crd-td"><strong>Aintab</strong></td><td class="crd-td">Turkey</td><td class="crd-td">3,3k</td><td class="crd-td">3,1k</td><td class="crd-td">37,3k</td><td class="crd-td">40,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading assessed settlements across Anatolia, the Levant, Cyprus and Transcaucasia (1000-1500AD).</figcaption>
</figure>

## Regional Sub-Catalogues: Iran, Iraq, Afghanistan and Arabia

The complementary eastern and southern table enumerates the twenty highest-ranking assessed settlements across Iran, Iraq, Afghanistan, Saudi Arabia, Yemen, Oman and Bahrain.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">1000AD</th><th class="crd-th">1150AD</th><th class="crd-th">1350AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Baghdad</strong></td><td class="crd-td">Iraq</td><td class="crd-td">265k</td><td class="crd-td">262k</td><td class="crd-td">66k</td><td class="crd-td">54k</td></tr>
<tr><td class="crd-td"><strong>Tabriz</strong></td><td class="crd-td">Iran</td><td class="crd-td">28,5k</td><td class="crd-td">46,5k</td><td class="crd-td">162k</td><td class="crd-td">198k</td></tr>
<tr><td class="crd-td"><strong>Herat</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">56k</td><td class="crd-td">82,5k</td><td class="crd-td">71,5k</td><td class="crd-td">152k</td></tr>
<tr><td class="crd-td"><strong>Nishapur</strong></td><td class="crd-td">Iran</td><td class="crd-td">124k</td><td class="crd-td">96k</td><td class="crd-td">24,5k</td><td class="crd-td">23,4k</td></tr>
<tr><td class="crd-td"><strong>Ghazni</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">78k</td><td class="crd-td">106k</td><td class="crd-td">14,4k</td><td class="crd-td">19,2k</td></tr>
<tr><td class="crd-td"><strong>Isfahan</strong></td><td class="crd-td">Iran</td><td class="crd-td">68,5k</td><td class="crd-td">104k</td><td class="crd-td">66,5k</td><td class="crd-td">72,5k</td></tr>
<tr><td class="crd-td"><strong>Rayy</strong></td><td class="crd-td">Iran</td><td class="crd-td">98k</td><td class="crd-td">88,5k</td><td class="crd-td">8,2k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Balkh</strong></td><td class="crd-td">Afghanistan</td><td class="crd-td">82k</td><td class="crd-td">86,5k</td><td class="crd-td">22,4k</td><td class="crd-td">46,2k</td></tr>
<tr><td class="crd-td"><strong>Mosul</strong></td><td class="crd-td">Iraq</td><td class="crd-td">54k</td><td class="crd-td">78k</td><td class="crd-td">38,2k</td><td class="crd-td">41,2k</td></tr>
<tr><td class="crd-td"><strong>Shiraz</strong></td><td class="crd-td">Iran</td><td class="crd-td">58k</td><td class="crd-td">59,5k</td><td class="crd-td">74k</td><td class="crd-td">93,5k</td></tr>
<tr><td class="crd-td"><strong>Sultaniyya</strong></td><td class="crd-td">Iran</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">44,5k</td><td class="crd-td">11,2k</td></tr>
<tr><td class="crd-td"><strong>Hamadan</strong></td><td class="crd-td">Iran</td><td class="crd-td">42k</td><td class="crd-td">62,5k</td><td class="crd-td">25,2k</td><td class="crd-td">31,2k</td></tr>
<tr><td class="crd-td"><strong>Yazd</strong></td><td class="crd-td">Iran</td><td class="crd-td">22,5k</td><td class="crd-td">31,2k</td><td class="crd-td">46,2k</td><td class="crd-td">61,8k</td></tr>
<tr><td class="crd-td"><strong>Maragha</strong></td><td class="crd-td">Iran</td><td class="crd-td">21,5k</td><td class="crd-td">29,6k</td><td class="crd-td">31,5k</td><td class="crd-td">25,6k</td></tr>
<tr><td class="crd-td"><strong>Basra</strong></td><td class="crd-td">Iraq</td><td class="crd-td">58k</td><td class="crd-td">42k</td><td class="crd-td">23,4k</td><td class="crd-td">27,5k</td></tr>
<tr><td class="crd-td"><strong>Hormuz</strong></td><td class="crd-td">Iran</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">34,2k</td><td class="crd-td">56,4k</td></tr>
<tr><td class="crd-td"><strong>Riyadh</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">3k</td><td class="crd-td">2,8k</td><td class="crd-td">49,3k</td><td class="crd-td">55,7k</td></tr>
<tr><td class="crd-td"><strong>Mashhad</strong></td><td class="crd-td">Iran</td><td class="crd-td">6,2k</td><td class="crd-td">11,4k</td><td class="crd-td">22,4k</td><td class="crd-td">54,2k</td></tr>
<tr><td class="crd-td"><strong>Mecca</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">34,5k</td><td class="crd-td">39,5k</td><td class="crd-td">39,8k</td><td class="crd-td">49,5k</td></tr>
<tr><td class="crd-td"><strong>Aden</strong></td><td class="crd-td">Yemen</td><td class="crd-td">18,5k</td><td class="crd-td">28,4k</td><td class="crd-td">41,2k</td><td class="crd-td">39,6k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading assessed settlements across Iran, Iraq, Afghanistan and the Arabian Peninsula (1000-1500AD).</figcaption>
</figure>

# Sources
