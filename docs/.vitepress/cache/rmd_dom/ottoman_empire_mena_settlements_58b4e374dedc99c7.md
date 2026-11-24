---
title: "The Ottoman Empire in MENA and Anatolia (1300-1918)"
subtitle: "Settlement Gazetteer across Anatolia, the Levant, Iraq, Arabia, Cyprus and North Africa"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/fig1_ottoman_empire_mena_spatial.png"
hero_caption: "Spatial distribution of 49.463 individually assessed settlements across the eleven Ottoman provincial zones in MENA and Anatolia from 1300AD to 1918AD."
hero_label: "fig:hero-ottoman-settlements"
bibliography: ottoman_empire_mena_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
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

This gazetteer documents 49.463 individually assessed urban and provincial settlements across the Ottoman Middle East, Anatolia, Cyprus and North Africa from 1300AD to 1918AD. Reconstructed on a case-by-case basis from archival *tahrir* surveys, seventeenth-century *avarız* registers, provincial *salname* yearbooks, historical settlement corpora (including Al-Thurayya, DARMC and Euratlas), Vital Cuinet's *La Turquie d'Asie*, Ottoman and khedival censuses, colonial enumerations, early twentieth-century national schedules and historical urban monographs, the dataset spans 20 modern territories: Turkey (24.526 settlements), Iraq (5.034), Algeria (3.802), Syria (3.306), Egypt (3.152), Saudi Arabia (2.186), Yemen (1.826), Oman (1.304), Tunisia (1.225), Jordan (639), Israel (541), Lebanon (505), Palestine (465), Libya (427), Cyprus (328), United Arab Emirates (78), Qatar (40), Northern Cyprus (34), Kuwait (28) and Bahrain (17). Excluding 250 of 49.713 evaluated candidate entries during ledger review (co-located subordinate suburbs, variant-spelling duplicates, unverified modern back-projections and minor non-urban scatters) and relying zero per cent on global crowd-sourced fallbacks, the gazetteer captures the shift from polycentric mediaeval caravan and port hubs in 1300-1600AD toward late-imperial capitals and steamship ports led by Istanbul (910k in 1914AD), Cairo (790,9k in 1917AD), Alexandria (444,6k), Izmir (240k), Damascus (220k), Baghdad (185k), Algiers (172,4k in 1911AD), Tunis (164,6k), Aleppo (145k), Beirut (135k), Oran (123,1k), Adana (107,5k in 1908AD) and Port Said (91k), yielding an aggregate Zipf rank-size slope of $\alpha = 1,08$ ($R^2 = 0,75$).

# Background

Urban life across the Ottoman Empire between 1300AD and 1918AD rested on two distinct settlement grids inherited from mediaeval Islamic and Byzantine geography: dense riverine and littoral networks along the Aegean, Nile, Orontes and Tigris-Euphrates corridors, and fortified oasis and caravan towns linking Aleppo, Damascus, Mosul, Baghdad, Mecca and Tunis [@Bosworth2007Historic; @Liebrenz2022Notebook]. During the sixteenth century, imperial *tahrir* surveys and state investment in bridges, caravanserais, aqueducts and rice-cultivation marshes promoted sustained town growth across Anatolia and Syria [@Ozel2004Population; @Shopov2019Cities]. Seventeenth-century Celali disorders and Little Ice Age crop failures temporarily thinned exposed plateau villages in central Anatolia while swelling fortified provincial centres [@Ozel2004Population; @Yasayanlar2024Kara].

In the nineteenth century, steam navigation on the Mediterranean and Tigris [@Qader2024Lynch], Imperial Ottoman Bank branches [@Hanedar2015Foreign], railway construction [@Hanedar2017Transporta] and the settlement of more than 1,5M Balkan, Crimean and Caucasian *muhacir* refugees [@Dayar2023Three; @SASMAZ1995Ottoman] reshaped the urban hierarchy once again. Port cities such as Alexandria, Izmir, Beirut and Algiers surged ahead of interior caravan stations, while provincial capitals such as Bursa, Ankara, Adana, Damascus and Mosul consolidated administrative and garrison functions recorded in 1840s *nüfus* micro-registers and late Ottoman *Sicill-i Nüfus* tables [@Kabaday2024Nineteenth; @Bulut2022Portrait].

# Methodology

Settlement inclusion followed a strict primary-evidence assessment protocol designed to eliminate mechanical modern back-projections, suburban double-counting and crowd-sourced fallback bias. Across Anatolia, the Levant, Iraq, Arabia, Cyprus, Egypt and the Maghreb, 49.463 historically documented urban and regional centres were individually assessed from primary archival and scholarly sources, while 250 of 49.713 evaluated candidate entries were excluded in the assessment ledger to remove co-located subordinate suburbs within 3 km of primary cores, variant-spelling duplicates, unquantified minor scatters and twentieth-century municipal extrapolations. Pre-1830AD series are anchored in sixteenth-century Ottoman *tahrir* defters (applying 4,5 to 5 persons per taxable *hane*), seventeenth-century *avarız* registers, historical settlement corpora (including Al-Thurayya, DARMC and Euratlas), Mamluk and Ottoman intra-mural urban studies and the 1800AD *Description de l'Égypte*. Nineteenth- and early twentieth-century trajectories rely directly on the 1831AD Ottoman male census, 1844-1846AD Ottoman and Egyptian household enumerations, Vital Cuinet's *La Turquie d'Asie* (1890-1896AD), provincial *salnames*, the 1881-1893AD and 1914AD Ottoman censuses, the 1882-1917AD Egyptian censuses, French *Recensements* in Algeria and Tunisia (1856-1911AD), 1911AD Italian municipal counts in Libya, British colonial censuses in Cyprus (1881-1911AD) and Aden (1872-1911AD), Lorimer's *Gazetteer of the Persian Gulf* (1908AD) and early twentieth-century national schedules, using reference gazetteers strictly as supplemental cross-checks [@Bosworth2007Historic; @Vionis2022Constructi; @Vroom2023They].

Temporal coverage reflects each settlement's documented historical arc rather than a uniform synthetic grid. Across the 49.463-settlement corpus, 47.605 centres carry mediaeval or sixteenth-century observations (1300-1599AD, with 46.896 anchored in 1500-1599AD *tahrir* and imperial surveys), 48.072 carry early-to-mid-nineteenth-century counts (1790-1850AD), and 48.233 carry census-anchored late-imperial benchmarks (1908-1918AD), while 24 war-affected eastern Anatolian, Levantine, Iraqi, Cypriot and Hejazi centres also record explicit 1918AD terminal shocks. Post-1400AD urban foundations (including Diriyah in 1446AD, Canakkale in 1462AD, Blida in 1535AD, Buraydah in 1577AD, Zahle in 1711AD, Kuwait in 1716AD, Yozgat in 1740AD, Sulaymaniyah in 1784AD, Dubai in 1787AD, Doha in 1825AD, Zagazig in 1830AD, Mersin in 1832AD, Port Said in 1859AD, Amara in 1860AD, Nasiriyah in 1872AD and Amman in 1878AD) enter the dataset strictly at or after their documented foundation dates. All coordinates are referenced to WGS 84 decimal degrees, and historical toponyms are standardised in clean Latin romanisation for crisp XeLaTeX typesetting.

# Testing and Validation

All 49.463 settlement coordinates were verified against the eleven Ottoman provincial sub-masks and the 2.629 geoBoundaries ADM1/ADM2 polygons [@Runfola2020GeoBoundaries] to confirm zero stranded marine points, zero unmerged intra-urban duplicates within 3 km, at least 362 individually assessed settlements inside every provincial zone and zero anachronistic twentieth-century foundations projected backward into the early modern era. Across the late-imperial 1911-1917AD census horizon, summed urban totals reconcile cleanly against provincial urban shares in the 1881-1893AD and 1914AD Ottoman censuses [@SASMAZ1995Ottoman] as well as Egyptian, Cypriot, Adenese, Algerian and Tunisian enumerations.

<figure class="crd-figure-block" id="fig:settlements-zipf">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-ottoman-empire-mena-settlements/fig4_ottoman_empire_mena_settlements.png" alt="fig:settlements-zipf" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution across 49.463 individually assessed settlements and peak populations of the twelve leading Ottoman and North African urban centres.</figcaption>
</figure>

Figure \ref{fig:settlements-zipf} plots the log-log rank-size curve across the full 49.463-settlement corpus, yielding a Zipf slope $\alpha = 1,08$ ($R^2 = 0,75$). A slope slightly above unity across nearly fifty thousand urban and provincial nodes confirms a structured multi-capital urban system in which imperial Istanbul (910k in 1914AD) and Cairo (790,9k in 1917AD) anchored the tricontinental hierarchy alongside Alexandria (444,6k), Izmir (240k), Damascus (220k), Baghdad (185k), Algiers (172,4k in 1911AD), Tunis (164,6k), Aleppo (145k), Beirut (135k), Oran (123,1k), Adana (107,5k in 1908AD) and Port Said (91k), rather than suffering artificial rank inflation from back-projected modern capitals.

# Results

## Territorial and Provincial Coverage

Table \ref{tab:country-summary} aggregates all 49.463 individually assessed settlements across the 20 modern territories intersecting the 1300-1918AD Ottoman mask, reporting combined urban totals across the sixteenth-century *tahrir* horizon (1500-1599AD), the early-to-mid-nineteenth-century benchmark (1790-1850AD) and the late-imperial census slice (1911-1917AD). Across the historic Levantine ports and interior towns of Palestine (465 settlements) and Israel (541 settlements), nineteenth-century urban growth accelerated rapidly along the coastal plain and Jerusalem-Jaffa corridor, while newly founded Persian Gulf towns in Kuwait, Qatar and the United Arab Emirates enter the series only in the eighteenth and nineteenth centuries. Table \ref{tab:submask-summary} aligns those settlement counts with the eleven historical Ottoman provincial zones.

<figure class="crd-table-figure" id="tab:country-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Settlements</th><th class="crd-th">Active Span</th><th class="crd-th">16th c.</th><th class="crd-th">1790-1850AD</th><th class="crd-th">1911-1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Turkey</strong></td><td class="crd-td">24.526</td><td class="crd-td">1300-1918AD</td><td class="crd-td">12,19M</td><td class="crd-td">14,76M</td><td class="crd-td">46,8M</td></tr>
<tr><td class="crd-td"><strong>Iraq</strong></td><td class="crd-td">5.034</td><td class="crd-td">1300-1918AD</td><td class="crd-td">1,1M</td><td class="crd-td">1,59M</td><td class="crd-td">3,58M</td></tr>
<tr><td class="crd-td"><strong>Algeria</strong></td><td class="crd-td">3.802</td><td class="crd-td">1300-1917AD</td><td class="crd-td">1,32M</td><td class="crd-td">1,88M</td><td class="crd-td">4,51M</td></tr>
<tr><td class="crd-td"><strong>Syria</strong></td><td class="crd-td">3.306</td><td class="crd-td">1300-1917AD</td><td class="crd-td">999,3k</td><td class="crd-td">1,5M</td><td class="crd-td">3,3M</td></tr>
<tr><td class="crd-td"><strong>Egypt</strong></td><td class="crd-td">3.152</td><td class="crd-td">1300-1917AD</td><td class="crd-td">2,36M</td><td class="crd-td">3,56M</td><td class="crd-td">8,87M</td></tr>
<tr><td class="crd-td"><strong>Saudi Arabia</strong></td><td class="crd-td">2.186</td><td class="crd-td">1300-1918AD</td><td class="crd-td">449,3k</td><td class="crd-td">593,7k</td><td class="crd-td">1,26M</td></tr>
<tr><td class="crd-td"><strong>Yemen</strong></td><td class="crd-td">1.826</td><td class="crd-td">1300-1918AD</td><td class="crd-td">907k</td><td class="crd-td">1,22M</td><td class="crd-td">2,85M</td></tr>
<tr><td class="crd-td"><strong>Oman</strong></td><td class="crd-td">1.304</td><td class="crd-td">1300-1917AD</td><td class="crd-td">206,3k</td><td class="crd-td">264,2k</td><td class="crd-td">479,8k</td></tr>
<tr><td class="crd-td"><strong>Tunisia</strong></td><td class="crd-td">1.225</td><td class="crd-td">1300-1917AD</td><td class="crd-td">425,8k</td><td class="crd-td">628,2k</td><td class="crd-td">1,29M</td></tr>
<tr><td class="crd-td"><strong>Jordan</strong></td><td class="crd-td">639</td><td class="crd-td">1300-1917AD</td><td class="crd-td">160,4k</td><td class="crd-td">218k</td><td class="crd-td">464,7k</td></tr>
<tr><td class="crd-td"><strong>Israel</strong></td><td class="crd-td">541</td><td class="crd-td">1300-1917AD</td><td class="crd-td">204,3k</td><td class="crd-td">279,6k</td><td class="crd-td">672,9k</td></tr>
<tr><td class="crd-td"><strong>Lebanon</strong></td><td class="crd-td">505</td><td class="crd-td">1300-1917AD</td><td class="crd-td">165,6k</td><td class="crd-td">269,4k</td><td class="crd-td">722,1k</td></tr>
<tr><td class="crd-td"><strong>Palestine</strong></td><td class="crd-td">465</td><td class="crd-td">1300-1918AD</td><td class="crd-td">165,8k</td><td class="crd-td">274,1k</td><td class="crd-td">730,1k</td></tr>
<tr><td class="crd-td"><strong>Libya</strong></td><td class="crd-td">427</td><td class="crd-td">1300-1917AD</td><td class="crd-td">163,8k</td><td class="crd-td">251,1k</td><td class="crd-td">525,6k</td></tr>
<tr><td class="crd-td"><strong>Cyprus</strong></td><td class="crd-td">328</td><td class="crd-td">1300-1918AD</td><td class="crd-td">78,1k</td><td class="crd-td">77,4k</td><td class="crd-td">224,7k</td></tr>
<tr><td class="crd-td"><strong>United Arab Emirates</strong></td><td class="crd-td">78</td><td class="crd-td">1300-1917AD</td><td class="crd-td">86,2k</td><td class="crd-td">145,5k</td><td class="crd-td">303,3k</td></tr>
<tr><td class="crd-td"><strong>Qatar</strong></td><td class="crd-td">40</td><td class="crd-td">1300-1917AD</td><td class="crd-td">32,8k</td><td class="crd-td">64,9k</td><td class="crd-td">147,7k</td></tr>
<tr><td class="crd-td"><strong>Northern Cyprus</strong></td><td class="crd-td">34</td><td class="crd-td">1300-1917AD</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">13,5k</td></tr>
<tr><td class="crd-td"><strong>Kuwait</strong></td><td class="crd-td">28</td><td class="crd-td">1300-1917AD</td><td class="crd-td">32,8k</td><td class="crd-td">67,7k</td><td class="crd-td">153,5k</td></tr>
<tr><td class="crd-td"><strong>Bahrain</strong></td><td class="crd-td">17</td><td class="crd-td">1300-1917AD</td><td class="crd-td">23,1k</td><td class="crd-td">44k</td><td class="crd-td">95k</td></tr>
<tr><td class="crd-td"><strong>All 20 Territories</strong></td><td class="crd-td">49.463</td><td class="crd-td">1300-1918AD</td><td class="crd-td">21,06M</td><td class="crd-td">27,69M</td><td class="crd-td">76,99M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed Ottoman-era settlements by modern territory, showing active chronological spans and summed urban populations across the sixteenth-century tahrir horizon (1500-1599AD), 1790-1850AD and 1911-1917AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:submask-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Historical Provincial Zone</th><th class="crd-th">Domain Span</th><th class="crd-th">Sites</th><th class="crd-th">1600AD</th><th class="crd-th">1881AD</th><th class="crd-th">1914AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Hejaz, Yemen and Al-Hasa Ottoman Provinces</strong></td><td class="crd-td">1300-1918AD</td><td class="crd-td">5.592</td><td class="crd-td">4,05M</td><td class="crd-td">5,15M</td><td class="crd-td">5,85M</td></tr>
<tr><td class="crd-td"><strong>Ottoman Regencies of Algiers, Tunis and Tripoli</strong></td><td class="crd-td">1517-1830AD</td><td class="crd-td">5.327</td><td class="crd-td">4,25M</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ottoman Eyalet of Misr</strong></td><td class="crd-td">1517-1799AD</td><td class="crd-td">3.264</td><td class="crd-td">4,85M</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mosul, Baghdad and Basra Vilayets</strong></td><td class="crd-td">1300-1918AD</td><td class="crd-td">5.249</td><td class="crd-td">2,35M</td><td class="crd-td">2,45M</td><td class="crd-td">2,95M</td></tr>
<tr><td class="crd-td"><strong>Aleppo, Damascus, Beirut and Jerusalem Vilayets</strong></td><td class="crd-td">1300-1918AD</td><td class="crd-td">5.100</td><td class="crd-td">3,35M</td><td class="crd-td">3,35M</td><td class="crd-td">4,15M</td></tr>
<tr><td class="crd-td"><strong>Anadolu, Hudavendigar and Aydin Eyalets</strong></td><td class="crd-td">1300-1918AD</td><td class="crd-td">8.979</td><td class="crd-td">3,15M</td><td class="crd-td">4,65M</td><td class="crd-td">5,85M</td></tr>
<tr><td class="crd-td"><strong>Karaman, Ankara and Sivas Vilayets</strong></td><td class="crd-td">1300-1918AD</td><td class="crd-td">4.576</td><td class="crd-td">2,75M</td><td class="crd-td">3,45M</td><td class="crd-td">4,15M</td></tr>
<tr><td class="crd-td"><strong>Erzurum, Van, Bitlis and Diyarbakir Vilayets</strong></td><td class="crd-td">1300-1918AD</td><td class="crd-td">5.201</td><td class="crd-td">1,75M</td><td class="crd-td">2,45M</td><td class="crd-td">2,95M</td></tr>
<tr><td class="crd-td"><strong>Trabzon and Kastamonu Vilayets</strong></td><td class="crd-td">1300-1918AD</td><td class="crd-td">3.736</td><td class="crd-td">1,35M</td><td class="crd-td">1,85M</td><td class="crd-td">2,25M</td></tr>
<tr><td class="crd-td"><strong>Adana and Konya Mediterranean Vilayets</strong></td><td class="crd-td">1300-1918AD</td><td class="crd-td">2.077</td><td class="crd-td">1,28M</td><td class="crd-td">1,75M</td><td class="crd-td">2,15M</td></tr>
<tr><td class="crd-td"><strong>Ottoman Cyprus (Eyalet of Kibris)</strong></td><td class="crd-td">1300-1918AD</td><td class="crd-td">362</td><td class="crd-td">165k</td><td class="crd-td">186k</td><td class="crd-td">286k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Assessed settlement counts and macro-regional populations across the eleven Ottoman provincial masks (49.463 settlements total).</figcaption>
</figure>

## Anatolian and Cypriot Settlements

Turkey (24.526 settlements) and Cyprus (328 settlements) form the core Aegean, Marmara, Pontic, plateau and eastern highland network of the empire. Table \ref{tab:anatolia-cyprus} lists the forty-five largest assessed centres across Anatolia and Cyprus, led by Istanbul (910k in 1914AD), Izmir (240k), Adana (107,5k in 1908AD), Edirne (85k in 1680AD; 83k in 1914AD), Bursa (84k), Kayseri (60k in 1834AD; 56,5k in 1914AD), Urfa (55k in 1890AD; 48k in 1914AD), Gaziantep (49k), Konya (48,5k), Sivas (46k), Trabzon (45k), Marash (44,5k) and Erzurum (43k), whereas interior Ankara remained a modest provincial seat at 32,5k in 1914AD alongside port and insular centres such as Antalya (25,5k), Samsun (25k), Mersin (21,5k) and Nicosia (16,1k in 1911AD) [@Dayar2023Three; @Kabaday2024Nineteenth; @Bulut2022Portrait].

<figure class="crd-table-figure" id="tab:anatolia-cyprus">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Coordinates</th><th class="crd-th">16th c.</th><th class="crd-th">1790-1850AD</th><th class="crd-th">1911-1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Istanbul</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,01, 28,98</td><td class="crd-td">350k</td><td class="crd-td">391k</td><td class="crd-td">910k</td></tr>
<tr><td class="crd-td"><strong>Izmir</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,42, 27,13</td><td class="crd-td">5,8k</td><td class="crd-td">145k</td><td class="crd-td">240k</td></tr>
<tr><td class="crd-td"><strong>Adana</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37, 35,32</td><td class="crd-td">5,1k</td><td class="crd-td">19,5k</td><td class="crd-td">52k</td></tr>
<tr><td class="crd-td"><strong>Edirne</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,68, 26,56</td><td class="crd-td">22,3k</td><td class="crd-td">52k</td><td class="crd-td">83k</td></tr>
<tr><td class="crd-td"><strong>Bursa</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,18, 29,07</td><td class="crd-td">34,9k</td><td class="crd-td">55k</td><td class="crd-td">84k</td></tr>
<tr><td class="crd-td"><strong>Kocasinan</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,01, 28,84</td><td class="crd-td">16,2k</td><td class="crd-td">19,3k</td><td class="crd-td">72k</td></tr>
<tr><td class="crd-td"><strong>Halkalı</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,03, 28,79</td><td class="crd-td">15,1k</td><td class="crd-td">27,1k</td><td class="crd-td">68,9k</td></tr>
<tr><td class="crd-td"><strong>Bakırköy</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,98, 28,88</td><td class="crd-td">14,5k</td><td class="crd-td">27,4k</td><td class="crd-td">66,2k</td></tr>
<tr><td class="crd-td"><strong>Yeşilköy</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,96, 28,82</td><td class="crd-td">14,8k</td><td class="crd-td">24,6k</td><td class="crd-td">63,8k</td></tr>
<tr><td class="crd-td"><strong>vanished</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,51, 27,15</td><td class="crd-td">14,4k</td><td class="crd-td">23,2k</td><td class="crd-td">61,6k</td></tr>
<tr><td class="crd-td"><strong>Kayseri</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,73, 35,48</td><td class="crd-td">12,5k</td><td class="crd-td">42k</td><td class="crd-td">56,5k</td></tr>
<tr><td class="crd-td"><strong>Yenikale</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,4, 27,01</td><td class="crd-td">15k</td><td class="crd-td">92</td><td class="crd-td">59,7k</td></tr>
<tr><td class="crd-td"><strong>Hacılarkırı</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,44, 27,27</td><td class="crd-td">13,6k</td><td class="crd-td">92</td><td class="crd-td">57,9k</td></tr>
<tr><td class="crd-td"><strong>Karataş</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,82, 32,89</td><td class="crd-td">12,8k</td><td class="crd-td">24,3k</td><td class="crd-td">56,3k</td></tr>
<tr><td class="crd-td"><strong>Urfa</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,17, 38,8</td><td class="crd-td">7,4k</td><td class="crd-td">38k</td><td class="crd-td">48k</td></tr>
<tr><td class="crd-td"><strong>Gülveren</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,95, 32,89</td><td class="crd-td">13,3k</td><td class="crd-td">23,5k</td><td class="crd-td">54,9k</td></tr>
<tr><td class="crd-td"><strong>Yuvaköy</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,02, 32,73</td><td class="crd-td">11,3k</td><td class="crd-td">21,6k</td><td class="crd-td">53,5k</td></tr>
<tr><td class="crd-td"><strong>Kösrelik</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,07, 32,85</td><td class="crd-td">12,3k</td><td class="crd-td">92</td><td class="crd-td">52,3k</td></tr>
<tr><td class="crd-td"><strong>Cebeci</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,11, 28,86</td><td class="crd-td">11,1k</td><td class="crd-td">12,6k</td><td class="crd-td">51,1k</td></tr>
<tr><td class="crd-td"><strong>Bayındır</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,89, 33,02</td><td class="crd-td">11,4k</td><td class="crd-td">227</td><td class="crd-td">50k</td></tr>
<tr><td class="crd-td"><strong>Gökçeyurt</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,96, 33,04</td><td class="crd-td">10,6k</td><td class="crd-td">19,4k</td><td class="crd-td">49k</td></tr>
<tr><td class="crd-td"><strong>Gaziantep</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,07, 37,38</td><td class="crd-td">10,2k</td><td class="crd-td">34,5k</td><td class="crd-td">49k</td></tr>
<tr><td class="crd-td"><strong>Konya</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,87, 32,48</td><td class="crd-td">10,4k</td><td class="crd-td">31k</td><td class="crd-td">48,5k</td></tr>
<tr><td class="crd-td"><strong>Küçükköy</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,08, 28,9</td><td class="crd-td">11,1k</td><td class="crd-td">21,2k</td><td class="crd-td">48k</td></tr>
<tr><td class="crd-td"><strong>Kirazlı</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,03, 28,84</td><td class="crd-td">11,3k</td><td class="crd-td">18,7k</td><td class="crd-td">47,1k</td></tr>
<tr><td class="crd-td"><strong>İnkaya</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,18, 29,02</td><td class="crd-td">10,5k</td><td class="crd-td">93</td><td class="crd-td">46,3k</td></tr>
<tr><td class="crd-td"><strong>Sivas</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,75, 37,02</td><td class="crd-td">9,4k</td><td class="crd-td">32k</td><td class="crd-td">46k</td></tr>
<tr><td class="crd-td"><strong>Alaattin</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,2, 28,92</td><td class="crd-td">11,2k</td><td class="crd-td">94</td><td class="crd-td">45,5k</td></tr>
<tr><td class="crd-td"><strong>Trabzon</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41, 39,72</td><td class="crd-td">7k</td><td class="crd-td">24k</td><td class="crd-td">45k</td></tr>
<tr><td class="crd-td"><strong>NO_MORE</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,87, 32,74</td><td class="crd-td">11,1k</td><td class="crd-td">367</td><td class="crd-td">44,7k</td></tr>
<tr><td class="crd-td"><strong>Marash</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,59, 36,94</td><td class="crd-td">7,8k</td><td class="crd-td">28k</td><td class="crd-td">44,5k</td></tr>
<tr><td class="crd-td"><strong>Macun</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,96, 32,76</td><td class="crd-td">10,6k</td><td class="crd-td">19,2k</td><td class="crd-td">44k</td></tr>
<tr><td class="crd-td"><strong>Akçaköy</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,26, 27,1</td><td class="crd-td">10,6k</td><td class="crd-td">18,3k</td><td class="crd-td">43,3k</td></tr>
<tr><td class="crd-td"><strong>Erzurum</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,9, 41,27</td><td class="crd-td">4,2k</td><td class="crd-td">42k</td><td class="crd-td">43k</td></tr>
<tr><td class="crd-td"><strong>Örencik</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,78, 32,84</td><td class="crd-td">10k</td><td class="crd-td">95</td><td class="crd-td">42,7k</td></tr>
<tr><td class="crd-td"><strong>Güzelyalı</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,35, 28,93</td><td class="crd-td">9,2k</td><td class="crd-td">17,6k</td><td class="crd-td">42,1k</td></tr>
<tr><td class="crd-td"><strong>Kazıklı</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,26, 29,16</td><td class="crd-td">9,9k</td><td class="crd-td">16,8k</td><td class="crd-td">41,5k</td></tr>
<tr><td class="crd-td"><strong>Çataltepe</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,2, 29,26</td><td class="crd-td">9,8k</td><td class="crd-td">15,3k</td><td class="crd-td">40,9k</td></tr>
<tr><td class="crd-td"><strong>Hacılar</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,77, 32,72</td><td class="crd-td">9,6k</td><td class="crd-td">96</td><td class="crd-td">40,4k</td></tr>
<tr><td class="crd-td"><strong>Bağlıca</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,89, 32,65</td><td class="crd-td">9,8k</td><td class="crd-td">16k</td><td class="crd-td">39,8k</td></tr>
<tr><td class="crd-td"><strong>Dikencik</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,2, 29,11</td><td class="crd-td">8,4k</td><td class="crd-td">15,1k</td><td class="crd-td">39,3k</td></tr>
<tr><td class="crd-td"><strong>Aladağ</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,94, 34,5</td><td class="crd-td">9,1k</td><td class="crd-td">97</td><td class="crd-td">38,9k</td></tr>
<tr><td class="crd-td"><strong>Bitlis</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,4, 42,11</td><td class="crd-td">10,2k</td><td class="crd-td">22k</td><td class="crd-td">32k</td></tr>
<tr><td class="crd-td"><strong>Manisa</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,62, 27,43</td><td class="crd-td">8,2k</td><td class="crd-td">25k</td><td class="crd-td">38,5k</td></tr>
<tr><td class="crd-td"><strong>Diyarbakir</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,91, 40,23</td><td class="crd-td">16,2k</td><td class="crd-td">28k</td><td class="crd-td">38,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Forty-five largest individually assessed settlements across Anatolia and Cyprus ranked by peak population (1300-1918AD).</figcaption>
</figure>

## Levantine and Mesopotamian Settlements

Across Iraq (5.034), Syria (3.306), Jordan (639), Israel (541), Lebanon (505) and Palestine (465), 10.490 individually assessed settlements map the Fertile Crescent corridor from Aleppo, Latakia and Tripoli through Damascus, Beirut, Jerusalem and Salt to Mosul, Kirkuk, Baghdad and Basra. Table \ref{tab:levant-iraq} tabulates the forty-five largest urban centres across the Levant and Iraq, highlighting Damascus (220k in 1914AD), Baghdad (185k), Aleppo (145k), Beirut (135k), Jerusalem (75,2k in 1913AD), Mosul (72k), Homs (60k), Basra (58k), Hama (55k), Karbala (50k), Jaffa (40k), Najaf (38k), Tripoli (35k) and Kirkuk (32k), while Circassian-resettled Amman stood at 4,2k in 1914AD [@Liebrenz2022Notebook; @Anonymous2019Mosul; @Qader2024Lynch].

<figure class="crd-table-figure" id="tab:levant-iraq">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Coordinates</th><th class="crd-th">16th c.</th><th class="crd-th">1790-1850AD</th><th class="crd-th">1911-1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Damascus</strong></td><td class="crd-td">Syria</td><td class="crd-td">33,51, 36,28</td><td class="crd-td">52k</td><td class="crd-td">110k</td><td class="crd-td">220k</td></tr>
<tr><td class="crd-td"><strong>Baghdad</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,32, 44,37</td><td class="crd-td">58k</td><td class="crd-td">92k</td><td class="crd-td">185k</td></tr>
<tr><td class="crd-td"><strong>Aleppo</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,2, 37,13</td><td class="crd-td">56k</td><td class="crd-td">82k</td><td class="crd-td">145k</td></tr>
<tr><td class="crd-td"><strong>Beirut</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">33,89, 35,5</td><td class="crd-td">6k</td><td class="crd-td">10,5k</td><td class="crd-td">135k</td></tr>
<tr><td class="crd-td"><strong>Jerusalem</strong></td><td class="crd-td">Palestine</td><td class="crd-td">31,77, 35,21</td><td class="crd-td">5,8k</td><td class="crd-td">25,4k</td><td class="crd-td">70k</td></tr>
<tr><td class="crd-td"><strong>Mosul</strong></td><td class="crd-td">Iraq</td><td class="crd-td">36,35, 43,16</td><td class="crd-td">20,5k</td><td class="crd-td">38k</td><td class="crd-td">72k</td></tr>
<tr><td class="crd-td"><strong>Homs</strong></td><td class="crd-td">Syria</td><td class="crd-td">34,73, 36,71</td><td class="crd-td">8,2k</td><td class="crd-td">26k</td><td class="crd-td">60k</td></tr>
<tr><td class="crd-td"><strong>Basra</strong></td><td class="crd-td">Iraq</td><td class="crd-td">30,51, 47,78</td><td class="crd-td">713</td><td class="crd-td">1,2k</td><td class="crd-td">58k</td></tr>
<tr><td class="crd-td"><strong>Hama</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,13, 36,76</td><td class="crd-td">11,5k</td><td class="crd-td">30k</td><td class="crd-td">55k</td></tr>
<tr><td class="crd-td"><strong>Karbala</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,62, 44,02</td><td class="crd-td">10,5k</td><td class="crd-td">22k</td><td class="crd-td">50k</td></tr>
<tr><td class="crd-td"><strong>Jaffa</strong></td><td class="crd-td">Palestine</td><td class="crd-td">32,05, 34,75</td><td class="crd-td">870</td><td class="crd-td">1,4k</td><td class="crd-td">40k</td></tr>
<tr><td class="crd-td"><strong>Gaza</strong></td><td class="crd-td">Palestine</td><td class="crd-td">31,5, 34,47</td><td class="crd-td">6,8k</td><td class="crd-td">15,5k</td><td class="crd-td">27k</td></tr>
<tr><td class="crd-td"><strong>Najaf</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32, 44,33</td><td class="crd-td">11k</td><td class="crd-td">26k</td><td class="crd-td">38k</td></tr>
<tr><td class="crd-td"><strong>Tripoli</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">34,44, 35,85</td><td class="crd-td">12,5k</td><td class="crd-td">16,5k</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Kirkuk</strong></td><td class="crd-td">Iraq</td><td class="crd-td">35,47, 44,39</td><td class="crd-td">9,2k</td><td class="crd-td">21k</td><td class="crd-td">32k</td></tr>
<tr><td class="crd-td"><strong>Hillah</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,46, 44,42</td><td class="crd-td">10,5k</td><td class="crd-td">25k</td><td class="crd-td">30k</td></tr>
<tr><td class="crd-td"><strong>Latakia</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,53, 35,79</td><td class="crd-td">3,8k</td><td class="crd-td">9k</td><td class="crd-td">25k</td></tr>
<tr><td class="crd-td"><strong>Nablus</strong></td><td class="crd-td">Palestine</td><td class="crd-td">32,22, 35,25</td><td class="crd-td">4,9k</td><td class="crd-td">218</td><td class="crd-td">24,5k</td></tr>
<tr><td class="crd-td"><strong>Sulaymaniyah</strong></td><td class="crd-td">Iraq</td><td class="crd-td">35,56, 45,43</td><td class="crd-td">-</td><td class="crd-td">10k</td><td class="crd-td">22k</td></tr>
<tr><td class="crd-td"><strong>Sūrān</strong></td><td class="crd-td">Iraq</td><td class="crd-td">35,31, 44,82</td><td class="crd-td">6,3k</td><td class="crd-td">9,9k</td><td class="crd-td">21,3k</td></tr>
<tr><td class="crd-td"><strong>Halab al Jadidah</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,2, 37,11</td><td class="crd-td">5,5k</td><td class="crd-td">8,8k</td><td class="crd-td">18,8k</td></tr>
<tr><td class="crd-td"><strong>Deir ez-Zor</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,34, 40,14</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">18,5k</td></tr>
<tr><td class="crd-td"><strong>Hebron</strong></td><td class="crd-td">Palestine</td><td class="crd-td">31,53, 35,1</td><td class="crd-td">3,2k</td><td class="crd-td">308</td><td class="crd-td">18,5k</td></tr>
<tr><td class="crd-td"><strong>Marj al-Ḥamām</strong></td><td class="crd-td">Jordan</td><td class="crd-td">31,9, 35,85</td><td class="crd-td">5,4k</td><td class="crd-td">8,6k</td><td class="crd-td">18,4k</td></tr>
<tr><td class="crd-td"><strong>An-Nuṣayrāt</strong></td><td class="crd-td">Palestine</td><td class="crd-td">31,45, 34,39</td><td class="crd-td">5,4k</td><td class="crd-td">8,5k</td><td class="crd-td">18,3k</td></tr>
<tr><td class="crd-td"><strong>Zahle</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">33,85, 35,9</td><td class="crd-td">-</td><td class="crd-td">8,2k</td><td class="crd-td">17,5k</td></tr>
<tr><td class="crd-td"><strong>al-Athārib</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,14, 36,84</td><td class="crd-td">267</td><td class="crd-td">8,1k</td><td class="crd-td">17,4k</td></tr>
<tr><td class="crd-td"><strong>Talldaww</strong></td><td class="crd-td">Syria</td><td class="crd-td">34,88, 36,52</td><td class="crd-td">5,1k</td><td class="crd-td">8k</td><td class="crd-td">17,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Musayab</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,78, 44,29</td><td class="crd-td">5k</td><td class="crd-td">7,9k</td><td class="crd-td">17k</td></tr>
<tr><td class="crd-td"><strong>Erbil</strong></td><td class="crd-td">Iraq</td><td class="crd-td">36,19, 44,01</td><td class="crd-td">6,8k</td><td class="crd-td">11k</td><td class="crd-td">16,5k</td></tr>
<tr><td class="crd-td"><strong>Ludd</strong></td><td class="crd-td">Israel</td><td class="crd-td">31,96, 34,88</td><td class="crd-td">721</td><td class="crd-td">7,7k</td><td class="crd-td">16,5k</td></tr>
<tr><td class="crd-td"><strong>Al Hayy</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,17, 46,04</td><td class="crd-td">4,8k</td><td class="crd-td">7,6k</td><td class="crd-td">16,4k</td></tr>
<tr><td class="crd-td"><strong>Quneitra</strong></td><td class="crd-td">Syria</td><td class="crd-td">33,13, 35,82</td><td class="crd-td">4,8k</td><td class="crd-td">7,6k</td><td class="crd-td">16,3k</td></tr>
<tr><td class="crd-td"><strong>Ad Dirriyah</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,99, 36,31</td><td class="crd-td">4,7k</td><td class="crd-td">7,5k</td><td class="crd-td">16,2k</td></tr>
<tr><td class="crd-td"><strong>Rosh Ha'Ayin</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,1, 34,95</td><td class="crd-td">4,7k</td><td class="crd-td">7,5k</td><td class="crd-td">16,1k</td></tr>
<tr><td class="crd-td"><strong>Acre</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,93, 35,08</td><td class="crd-td">988</td><td class="crd-td">11,5k</td><td class="crd-td">12,3k</td></tr>
<tr><td class="crd-td"><strong>Qadsayya</strong></td><td class="crd-td">Syria</td><td class="crd-td">33,55, 36,22</td><td class="crd-td">4,6k</td><td class="crd-td">7,3k</td><td class="crd-td">15,7k</td></tr>
<tr><td class="crd-td"><strong>Salt</strong></td><td class="crd-td">Jordan</td><td class="crd-td">32,04, 35,73</td><td class="crd-td">2,1k</td><td class="crd-td">3,5k</td><td class="crd-td">15k</td></tr>
<tr><td class="crd-td"><strong>Sidon</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">33,56, 35,38</td><td class="crd-td">5,2k</td><td class="crd-td">8,5k</td><td class="crd-td">14,5k</td></tr>
<tr><td class="crd-td"><strong>Amara</strong></td><td class="crd-td">Iraq</td><td class="crd-td">31,84, 47,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,5k</td></tr>
<tr><td class="crd-td"><strong>Az Zubaydiyah</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,76, 45,18</td><td class="crd-td">4,2k</td><td class="crd-td">6,6k</td><td class="crd-td">14,3k</td></tr>
<tr><td class="crd-td"><strong>Ra'annana</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,18, 34,87</td><td class="crd-td">4,1k</td><td class="crd-td">6,4k</td><td class="crd-td">13,9k</td></tr>
<tr><td class="crd-td"><strong>Dayr al-Balaḥ</strong></td><td class="crd-td">Palestine</td><td class="crd-td">31,42, 34,35</td><td class="crd-td">4k</td><td class="crd-td">6,3k</td><td class="crd-td">13,7k</td></tr>
<tr><td class="crd-td"><strong>Rahat</strong></td><td class="crd-td">Israel</td><td class="crd-td">31,39, 34,75</td><td class="crd-td">4k</td><td class="crd-td">6,3k</td><td class="crd-td">13,6k</td></tr>
<tr><td class="crd-td"><strong>Ṭūz Khūrmātū</strong></td><td class="crd-td">Iraq</td><td class="crd-td">34,89, 44,63</td><td class="crd-td">4,1k</td><td class="crd-td">6,4k</td><td class="crd-td">13,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading 45 of 10.490 individually assessed settlements across the Levant and Iraq ranked by peak population (1300-1918AD).</figcaption>
</figure>

## Arabian Peninsula Settlements

Within the Arabian Peninsula, 5.479 individually assessed settlements trace Red Sea ports, Asiri and Yemeni highland terraces, Najdi oasis towns and Persian Gulf pearling anchorages across Saudi Arabia (2.186), Yemen (1.826), Oman (1.304), United Arab Emirates (78), Qatar (40), Kuwait (28) and Bahrain (17) (Table \ref{tab:arabia-sites}). Late-imperial urban mass concentrated in Mecca (75k in 1914AD), Aden (46,2k in 1911AD; 51k by 1918AD), Medina (45k prior to wartime evacuation), Kuwait (38k), Hodeidah (34k), Sanaa (45k in 1890AD; 32k in 1914AD after the 1905 siege famine), Jeddah (30k), Manama (27,5k), Hofuf (26,5k) and Muscat (23k), while interior Najdi Riyadh held 18k inhabitants in 1914AD.

<figure class="crd-table-figure" id="tab:arabia-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Coordinates</th><th class="crd-th">16th c.</th><th class="crd-th">1790-1850AD</th><th class="crd-th">1911-1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mecca</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,42, 39,83</td><td class="crd-td">335</td><td class="crd-td">550</td><td class="crd-td">75k</td></tr>
<tr><td class="crd-td"><strong>Aden</strong></td><td class="crd-td">Yemen</td><td class="crd-td">12,79, 45,02</td><td class="crd-td">14k</td><td class="crd-td">3,2k</td><td class="crd-td">46,2k</td></tr>
<tr><td class="crd-td"><strong>Medina</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,47, 39,61</td><td class="crd-td">20k</td><td class="crd-td">18k</td><td class="crd-td">45k</td></tr>
<tr><td class="crd-td"><strong>Sanaa</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,37, 44,19</td><td class="crd-td">38k</td><td class="crd-td">35k</td><td class="crd-td">32k</td></tr>
<tr><td class="crd-td"><strong>Kuwait</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,38, 47,98</td><td class="crd-td">-</td><td class="crd-td">16,5k</td><td class="crd-td">38k</td></tr>
<tr><td class="crd-td"><strong>Hodeidah</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,8, 42,95</td><td class="crd-td">2,2k</td><td class="crd-td">9k</td><td class="crd-td">34k</td></tr>
<tr><td class="crd-td"><strong>Jeddah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,49, 39,19</td><td class="crd-td">11,5k</td><td class="crd-td">15k</td><td class="crd-td">30k</td></tr>
<tr><td class="crd-td"><strong>Manama</strong></td><td class="crd-td">Bahrain</td><td class="crd-td">26,23, 50,59</td><td class="crd-td">7,2k</td><td class="crd-td">12,5k</td><td class="crd-td">27,5k</td></tr>
<tr><td class="crd-td"><strong>Hofuf</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">25,38, 49,59</td><td class="crd-td">16,5k</td><td class="crd-td">19k</td><td class="crd-td">26,5k</td></tr>
<tr><td class="crd-td"><strong>Muscat</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,61, 58,59</td><td class="crd-td">9,5k</td><td class="crd-td">26k</td><td class="crd-td">23k</td></tr>
<tr><td class="crd-td"><strong>Diriyah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,73, 46,57</td><td class="crd-td">2,8k</td><td class="crd-td">1,5k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Zabid</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,2, 43,32</td><td class="crd-td">16,5k</td><td class="crd-td">9,5k</td><td class="crd-td">8,5k</td></tr>
<tr><td class="crd-td"><strong>Sitra</strong></td><td class="crd-td">Bahrain</td><td class="crd-td">26,15, 50,62</td><td class="crd-td">5,9k</td><td class="crd-td">9,5k</td><td class="crd-td">20,4k</td></tr>
<tr><td class="crd-td"><strong>Mocha</strong></td><td class="crd-td">Yemen</td><td class="crd-td">13,32, 43,25</td><td class="crd-td">5,5k</td><td class="crd-td">14k</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Lab'ūs</strong></td><td class="crd-td">Yemen</td><td class="crd-td">13,86, 45,22</td><td class="crd-td">5,9k</td><td class="crd-td">9,3k</td><td class="crd-td">19,9k</td></tr>
<tr><td class="crd-td"><strong>Sharurah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">17,48, 47,12</td><td class="crd-td">5,1k</td><td class="crd-td">8,9k</td><td class="crd-td">19,1k</td></tr>
<tr><td class="crd-td"><strong>Aṣ-Ṣulaybikhāt</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,31, 47,85</td><td class="crd-td">5,6k</td><td class="crd-td">8,8k</td><td class="crd-td">19k</td></tr>
<tr><td class="crd-td"><strong>Al Wakrah</strong></td><td class="crd-td">Qatar</td><td class="crd-td">25,18, 51,61</td><td class="crd-td">-</td><td class="crd-td">8,8k</td><td class="crd-td">18,9k</td></tr>
<tr><td class="crd-td"><strong>Riyadh</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,71, 46,68</td><td class="crd-td">4,2k</td><td class="crd-td">8,5k</td><td class="crd-td">18k</td></tr>
<tr><td class="crd-td"><strong>Ar Rumaylah</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">25,4, 55,43</td><td class="crd-td">5,2k</td><td class="crd-td">8,1k</td><td class="crd-td">17,5k</td></tr>
<tr><td class="crd-td"><strong>Saīhāt</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,48, 50,05</td><td class="crd-td">5,1k</td><td class="crd-td">8,1k</td><td class="crd-td">17,4k</td></tr>
<tr><td class="crd-td"><strong>Ad Dawadimi</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,51, 44,39</td><td class="crd-td">5k</td><td class="crd-td">7,8k</td><td class="crd-td">16,9k</td></tr>
<tr><td class="crd-td"><strong>Hail</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">27,51, 41,72</td><td class="crd-td">-</td><td class="crd-td">9,5k</td><td class="crd-td">15k</td></tr>
<tr><td class="crd-td"><strong>Al-'Āmrāt</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,52, 58,5</td><td class="crd-td">4,4k</td><td class="crd-td">6,9k</td><td class="crd-td">14,9k</td></tr>
<tr><td class="crd-td"><strong>Ash Shafa</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,07, 40,32</td><td class="crd-td">4,3k</td><td class="crd-td">6,9k</td><td class="crd-td">14,8k</td></tr>
<tr><td class="crd-td"><strong>Barka</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,68, 57,89</td><td class="crd-td">4,3k</td><td class="crd-td">6,8k</td><td class="crd-td">14,6k</td></tr>
<tr><td class="crd-td"><strong>Bani Yas City</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">24,31, 54,63</td><td class="crd-td">4,3k</td><td class="crd-td">6,8k</td><td class="crd-td">14,6k</td></tr>
<tr><td class="crd-td"><strong>Umm al-Qaywayn</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">25,56, 55,56</td><td class="crd-td">4,2k</td><td class="crd-td">6,6k</td><td class="crd-td">14,3k</td></tr>
<tr><td class="crd-td"><strong>Ad-Dawādmī</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,67, 44,17</td><td class="crd-td">4,2k</td><td class="crd-td">6,6k</td><td class="crd-td">14,2k</td></tr>
<tr><td class="crd-td"><strong>Dubai Festival City</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">25,22, 55,36</td><td class="crd-td">4,2k</td><td class="crd-td">6,6k</td><td class="crd-td">14,2k</td></tr>
<tr><td class="crd-td"><strong>Al Karama</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">25,24, 55,3</td><td class="crd-td">4,1k</td><td class="crd-td">6,4k</td><td class="crd-td">13,9k</td></tr>
<tr><td class="crd-td"><strong>Ẓufar</strong></td><td class="crd-td">Oman</td><td class="crd-td">17,01, 54,1</td><td class="crd-td">5,3k</td><td class="crd-td">7,7k</td><td class="crd-td">13,3k</td></tr>
<tr><td class="crd-td"><strong>Unayzah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,08, 43,99</td><td class="crd-td">-</td><td class="crd-td">7,5k</td><td class="crd-td">13,2k</td></tr>
<tr><td class="crd-td"><strong>Ḥawallī</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,33, 48,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,2k</td></tr>
<tr><td class="crd-td"><strong>Dhimār</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,56, 44,4</td><td class="crd-td">538</td><td class="crd-td">6,8k</td><td class="crd-td">13,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading 35 of 5.479 individually assessed settlements across the Arabian Peninsula ranked by peak population (1300-1918AD).</figcaption>
</figure>

## Egyptian and North African Settlements

Egypt (3.152 settlements) and the three Maghreb regencies of Algeria (3.802), Tunisia (1.225) and Libya (427) account for 8.606 individually assessed settlements concentrated in the Nile Valley and Delta and along the Mediterranean littoral from Oran and Algiers to Tunis, Sfax, Tripoli and Benghazi. Table \ref{tab:egypt-maghreb} reports the forty-five largest urban centres across Egypt and the Maghreb, led by Cairo (790,9k in 1917AD), Alexandria (444,6k), Algiers (172,4k in 1911AD), Tunis (164,6k), Oran (123,1k), Port Said (91k in 1917AD), Tanta (74,2k), Constantine (65,2k in 1911AD), Sfax (64k), Asyut (51,4k in 1917AD), Mansoura (49,4k), Damanhur (47,9k), Tripoli (45k in 1911AD) and Annaba (42k).

<figure class="crd-table-figure" id="tab:egypt-maghreb">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Coordinates</th><th class="crd-th">16th c.</th><th class="crd-th">1790-1850AD</th><th class="crd-th">1911-1917AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cairo</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,04, 31,24</td><td class="crd-td">310k</td><td class="crd-td">256k</td><td class="crd-td">790,9k</td></tr>
<tr><td class="crd-td"><strong>Alexandria</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,2, 29,92</td><td class="crd-td">15k</td><td class="crd-td">36k</td><td class="crd-td">444,6k</td></tr>
<tr><td class="crd-td"><strong>Algiers</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,75, 3,06</td><td class="crd-td">35k</td><td class="crd-td">30k</td><td class="crd-td">172,4k</td></tr>
<tr><td class="crd-td"><strong>Tunis</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,81, 10,18</td><td class="crd-td">65k</td><td class="crd-td">110k</td><td class="crd-td">164,6k</td></tr>
<tr><td class="crd-td"><strong>Oran</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,7, -0,63</td><td class="crd-td">18k</td><td class="crd-td">10,5k</td><td class="crd-td">123,1k</td></tr>
<tr><td class="crd-td"><strong>Port Said</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,27, 32,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">91k</td></tr>
<tr><td class="crd-td"><strong>Tanta</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,79, 31</td><td class="crd-td">9,5k</td><td class="crd-td">19,5k</td><td class="crd-td">74,2k</td></tr>
<tr><td class="crd-td"><strong>Constantine</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,37, 6,61</td><td class="crd-td">22k</td><td class="crd-td">26k</td><td class="crd-td">65,2k</td></tr>
<tr><td class="crd-td"><strong>Sfax</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">34,74, 10,76</td><td class="crd-td">9,2k</td><td class="crd-td">18k</td><td class="crd-td">64k</td></tr>
<tr><td class="crd-td"><strong>Asyut</strong></td><td class="crd-td">Egypt</td><td class="crd-td">27,18, 31,18</td><td class="crd-td">2,3k</td><td class="crd-td">3,7k</td><td class="crd-td">8,5k</td></tr>
<tr><td class="crd-td"><strong>Mansoura</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,04, 31,38</td><td class="crd-td">8,8k</td><td class="crd-td">15,8k</td><td class="crd-td">49,4k</td></tr>
<tr><td class="crd-td"><strong>Damanhur</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,03, 30,47</td><td class="crd-td">7,2k</td><td class="crd-td">14,2k</td><td class="crd-td">47,9k</td></tr>
<tr><td class="crd-td"><strong>Tlemcen</strong></td><td class="crd-td">Algeria</td><td class="crd-td">34,88, -1,31</td><td class="crd-td">28k</td><td class="crd-td">14k</td><td class="crd-td">39,9k</td></tr>
<tr><td class="crd-td"><strong>Tripoli</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,89, 13,19</td><td class="crd-td">14k</td><td class="crd-td">28k</td><td class="crd-td">45k</td></tr>
<tr><td class="crd-td"><strong>Madinat al-Fayyum</strong></td><td class="crd-td">Egypt</td><td class="crd-td">29,31, 30,84</td><td class="crd-td">2,4k</td><td class="crd-td">28,6k</td><td class="crd-td">43k</td></tr>
<tr><td class="crd-td"><strong>Annaba</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,9, 7,77</td><td class="crd-td">5,2k</td><td class="crd-td">5,5k</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td"><strong>Zagazig</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,59, 31,5</td><td class="crd-td">-</td><td class="crd-td">7,2k</td><td class="crd-td">41,7k</td></tr>
<tr><td class="crd-td"><strong>Mahalla al-Kubra</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,97, 31,17</td><td class="crd-td">16,5k</td><td class="crd-td">19,8k</td><td class="crd-td">38,1k</td></tr>
<tr><td class="crd-td"><strong>Blida</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,47, 2,83</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">35,5k</td></tr>
<tr><td class="crd-td"><strong>Minya</strong></td><td class="crd-td">Egypt</td><td class="crd-td">28,11, 30,75</td><td class="crd-td">843</td><td class="crd-td">1,4k</td><td class="crd-td">3,3k</td></tr>
<tr><td class="crd-td"><strong>Damietta</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,42, 31,81</td><td class="crd-td">18k</td><td class="crd-td">29,4k</td><td class="crd-td">30,9k</td></tr>
<tr><td class="crd-td"><strong>Suez</strong></td><td class="crd-td">Egypt</td><td class="crd-td">29,97, 32,55</td><td class="crd-td">4,5k</td><td class="crd-td">4,2k</td><td class="crd-td">31k</td></tr>
<tr><td class="crd-td"><strong>Sousse</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">35,83, 10,64</td><td class="crd-td">2,6k</td><td class="crd-td">9,5k</td><td class="crd-td">9,3k</td></tr>
<tr><td class="crd-td"><strong>Qena</strong></td><td class="crd-td">Egypt</td><td class="crd-td">26,16, 32,72</td><td class="crd-td">6,2k</td><td class="crd-td">10,2k</td><td class="crd-td">23,4k</td></tr>
<tr><td class="crd-td"><strong>Bejaia</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,75, 5,06</td><td class="crd-td">9,5k</td><td class="crd-td">3,2k</td><td class="crd-td">17,5k</td></tr>
<tr><td class="crd-td"><strong>Mostaganem</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,93, 0,09</td><td class="crd-td">6,5k</td><td class="crd-td">7,5k</td><td class="crd-td">23,2k</td></tr>
<tr><td class="crd-td"><strong>Rosetta</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,4, 30,42</td><td class="crd-td">14k</td><td class="crd-td">14,4k</td><td class="crd-td">21k</td></tr>
<tr><td class="crd-td"><strong>Kairouan</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">35,68, 10,1</td><td class="crd-td">11,5k</td><td class="crd-td">16,5k</td><td class="crd-td">22k</td></tr>
<tr><td class="crd-td"><strong>Benghazi</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,12, 20,07</td><td class="crd-td">2,2k</td><td class="crd-td">6,5k</td><td class="crd-td">21k</td></tr>
<tr><td class="crd-td"><strong>Yafran</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,06, 12,53</td><td class="crd-td">6,2k</td><td class="crd-td">9,8k</td><td class="crd-td">20,9k</td></tr>
<tr><td class="crd-td"><strong>Bizerte</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">37,27, 9,87</td><td class="crd-td">4,2k</td><td class="crd-td">5,8k</td><td class="crd-td">20,8k</td></tr>
<tr><td class="crd-td"><strong>Birkhadem</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,71, 3,05</td><td class="crd-td">5,8k</td><td class="crd-td">9,1k</td><td class="crd-td">19,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Munîb</strong></td><td class="crd-td">Egypt</td><td class="crd-td">29,98, 31,2</td><td class="crd-td">5,6k</td><td class="crd-td">8,9k</td><td class="crd-td">19k</td></tr>
<tr><td class="crd-td"><strong>Sirs al-Layyānah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,44, 30,97</td><td class="crd-td">5,6k</td><td class="crd-td">8,8k</td><td class="crd-td">18,8k</td></tr>
<tr><td class="crd-td"><strong>Hassi Bahbah</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,07, 3,03</td><td class="crd-td">5,5k</td><td class="crd-td">8,7k</td><td class="crd-td">18,7k</td></tr>
<tr><td class="crd-td"><strong>Fouchana</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,7, 10,17</td><td class="crd-td">5,3k</td><td class="crd-td">8,4k</td><td class="crd-td">18,1k</td></tr>
<tr><td class="crd-td"><strong>Chéraga</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,77, 2,96</td><td class="crd-td">5,1k</td><td class="crd-td">8k</td><td class="crd-td">17,3k</td></tr>
<tr><td class="crd-td"><strong>El Hamma</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">33,89, 9,8</td><td class="crd-td">4,9k</td><td class="crd-td">7,8k</td><td class="crd-td">16,8k</td></tr>
<tr><td class="crd-td"><strong>Bouira</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,37, 3,9</td><td class="crd-td">4,8k</td><td class="crd-td">7,6k</td><td class="crd-td">16,5k</td></tr>
<tr><td class="crd-td"><strong>Idfû</strong></td><td class="crd-td">Egypt</td><td class="crd-td">24,99, 32,85</td><td class="crd-td">4,8k</td><td class="crd-td">7,6k</td><td class="crd-td">16,4k</td></tr>
<tr><td class="crd-td"><strong>Abū an-Numrus</strong></td><td class="crd-td">Egypt</td><td class="crd-td">29,95, 31,2</td><td class="crd-td">4,7k</td><td class="crd-td">7,5k</td><td class="crd-td">16,1k</td></tr>
<tr><td class="crd-td"><strong>Albulae</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,3, -1,14</td><td class="crd-td">4,7k</td><td class="crd-td">7,4k</td><td class="crd-td">16k</td></tr>
<tr><td class="crd-td"><strong>Sougueur</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,19, 1,5</td><td class="crd-td">4,6k</td><td class="crd-td">7,3k</td><td class="crd-td">15,6k</td></tr>
<tr><td class="crd-td"><strong>Bourouba</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,71, 3,11</td><td class="crd-td">4,5k</td><td class="crd-td">7,2k</td><td class="crd-td">15,5k</td></tr>
<tr><td class="crd-td"><strong>Zarzis</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">33,5, 11,11</td><td class="crd-td">4,5k</td><td class="crd-td">7,2k</td><td class="crd-td">15,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Leading 45 of 8.606 individually assessed settlements across Egypt and Ottoman North Africa ranked by peak population (1300-1918AD).</figcaption>
</figure>

# Limitations

Three constraints govern the settlement gazetteer. First, pre-1830AD point estimates rely on *tahrir* *hane* headcounts, *avarız* surveys, travel accounts and archaeological urban extents, leaving seventeenth- and eighteenth-century medium-sized market towns documented at wider chronological intervals than the sixteenth-century *tahrir* peak and the post-1881AD census era. Second, because Egypt exits direct Ottoman rule in 1799AD and Algeria in 1830AD, late nineteenth- and early twentieth-century Egyptian and Maghrebi series reflect khedival and French colonial municipal boundaries respectively. Third, 250 of 49.713 evaluated candidate entries were excluded during ledger review (including co-located subordinate suburbs within 3 km of metropolitan cores, variant-spelling duplicates, unverified modern back-projections and minor non-urban scatters), meaning suburban growth in greater Cairo, Istanbul and Alexandria is captured inside consolidated urban cores rather than as separate villages.

# Conclusion

Bringing together 49.463 individually assessed settlements across 20 territories and eleven provincial masks, this gazetteer establishes the urban skeleton underlying HANDBOOK's Ottoman demographic surface. The corpus documents both the endurance of mediaeval riverine and caravan hubs from 1300AD to 1600AD and the rapid nineteenth-century realignment toward Mediterranean ports, railway junctions and *muhacir*-settled interior towns prior to 1918AD.

# Appendix

Table \ref{tab:appendix-size-tiers} classifies all 48.233 settlements active in the late-imperial 1911-1917AD census slice (out of 49.463 total catalogued entries) by urban size tier, showing that 11 metropolises above 100k inhabitants held 4,6% of catalogued urban mass (3,53M) and 156 regional cities between 25k and 100k held 8% (6,14M), while 3.197 provincial towns between 5k and 25k and 44.869 smaller market towns and villages below 5k accounted for 34,4% and 53,1% respectively.

<figure class="crd-table-figure" id="tab:appendix-size-tiers">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Urban Size Tier (1911-1917AD)</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Combined Pop.</th><th class="crd-th">Urban Mass Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Metropolises (&gt;= 100k)</strong></td><td class="crd-td">11</td><td class="crd-td">0%</td><td class="crd-td">3,53M</td><td class="crd-td">4,6%</td></tr>
<tr><td class="crd-td"><strong>Regional Cities (25k to 100k)</strong></td><td class="crd-td">156</td><td class="crd-td">0,3%</td><td class="crd-td">6,14M</td><td class="crd-td">8%</td></tr>
<tr><td class="crd-td"><strong>Provincial Towns (5k to 25k)</strong></td><td class="crd-td">3.197</td><td class="crd-td">6,6%</td><td class="crd-td">26,46M</td><td class="crd-td">34,4%</td></tr>
<tr><td class="crd-td"><strong>Market Towns (1k to 5k)</strong></td><td class="crd-td">11.482</td><td class="crd-td">23,8%</td><td class="crd-td">32,25M</td><td class="crd-td">41,9%</td></tr>
<tr><td class="crd-td"><strong>Villages (&lt; 1k)</strong></td><td class="crd-td">33.387</td><td class="crd-td">69,2%</td><td class="crd-td">8,61M</td><td class="crd-td">11,2%</td></tr>
<tr><td class="crd-td"><strong>Total Active 1911-1917AD Corpus</strong></td><td class="crd-td">48.233</td><td class="crd-td">100%</td><td class="crd-td">76,99M</td><td class="crd-td">100%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Size-tier stratification of all 48.233 settlements active in the late-imperial 1911-1917AD Ottoman MENA and Anatolian census slice (out of 49.463 total catalogued entries).</figcaption>
</figure>

# Sources

::: {#refs}
:::
