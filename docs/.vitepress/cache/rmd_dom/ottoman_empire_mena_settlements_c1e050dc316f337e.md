---
title: "The Ottoman Empire in MENA and Anatolia (1300-1918)"
subtitle: "Settlement Gazetteer across Anatolia, the Levant, Iraq, Arabia, Cyprus and North Africa"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/fig1_ottoman_empire_mena_spatial.png"
hero_caption: "Spatial distribution of 3.378 catalogued settlements across the eleven Ottoman provincial zones in MENA and Anatolia from 1300AD to 1918AD."
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

This gazetteer documents 3.378 urban and rural settlements across the Ottoman Middle East, Anatolia, Cyprus and North Africa from 1300AD to 1918AD. Assembled through a four-wave asymptotic saturation protocol uniting official national census series with archival *tahrir* surveys, provincial *salname* yearbooks and archaeological urban monographs, the dataset spans nineteen successor territories: Turkey (669 settlements), Egypt (490), Iraq (385), Algeria (317), Syria (283), Saudi Arabia (270), Israel (202), Tunisia (164), Libya (152), Yemen (139), Jordan (75), Cyprus (57), Oman (56), Lebanon (36), Palestine (34), the United Arab Emirates (18), Kuwait (13), Bahrain (10) and Qatar (8). Excluding 250 subordinate suburbs merged within 2 km of primary urban cores and relying zero per cent on global crowd-sourced fallbacks, the gazetteer captures the shift from polycentric mediaeval caravan and port hubs in 1300-1500AD toward late nineteenth-century primate capitals led by Cairo (1,15M in 1910AD), Istanbul (1,05M), Baghdad (706k), Alexandria (497,2k), Ankara (429,2k), Algiers (348,8k), Izmir (286,1k) and Tunis (245,5k), yielding an aggregate Zipf rank-size slope of $\alpha = 0,826$ ($R^2 = 0,846$).

# Background

Urban life across the Ottoman Empire between 1300AD and 1918AD rested on two distinct settlement grids inherited from mediaeval Islamic and Byzantine geography: dense riverine and littoral networks along the Aegean, Nile, Orontes and Tigris-Euphrates corridors, and fortified oasis and caravan towns linking Aleppo, Damascus, Mosul, Baghdad, Mecca and Tunis [@Bosworth2007Historic; @Liebrenz2022Notebook]. During the sixteenth century, imperial *tahrir* surveys and state investment in bridges, caravanserais, aqueducts and rice-cultivation marshes promoted sustained town growth across Anatolia and Syria [@Ozel2004Population; @Shopov2019Cities]. Seventeenth-century Celali disorders and Little Ice Age crop failures temporarily thinned exposed plateau villages in central Anatolia while swelling fortified provincial centres [@Ozel2004Population; @Yasayanlar2024Kara].

In the nineteenth century, steam navigation on the Mediterranean and Tigris [@Qader2024Lynch], Imperial Ottoman Bank branches [@Hanedar2015Foreign], railway construction [@Hanedar2017Transporta] and the settlement of more than 1,5M Balkan, Crimean and Caucasian *muhacir* refugees [@Dayar2023Three; @SASMAZ1995Ottoman] reshaped the urban hierarchy once again. Port cities such as Alexandria, Izmir, Beirut and Algiers surged ahead of interior caravan stations, while provincial capitals such as Bursa, Ankara, Adana, Damascus and Mosul consolidated administrative and garrison functions recorded in 1840s *nüfus* micro-registers and late Ottoman *Sicill-i Nüfus* tables [@Kabaday2024Nineteenth; @Bulut2022Portrait].

# Methodology

Settlement inclusion followed a four-wave saturation sequence designed to eliminate spatial deserts and crowd-sourced fallback bias. Wave 1 harvested 1.544 settlements directly from official national statistical authorities across Turkey (TUIK), Egypt (CAPMAS), Iraq (COSIT), the Levant (CBS Syria, CAS Lebanon, DOS Jordan, CBS Israel, PCBS), Arabia (GASTAT, CSO Yemen, NCSI Oman, FCSA UAE, CSB Kuwait, iGA Bahrain) and North Africa (ONS Algeria, INS Tunisia, BSC Libya). Wave 2 incorporated 1.834 additional historical towns, coastal ports and excavated settlements from primary *tahrir* compilations, Ottoman *salname* yearbooks, classical-to-early-modern atlases and regional urban monographs [@Bosworth2007Historic; @Vionis2022Constructi; @Vroom2023They]. Waves 3 and 4 executed longitudinal pre-census backfills and spatial gap-hunter sweeps across all eleven sub-masks, adding zero further entries (0% marginal gain) and merging 250 subordinate suburbs located within 2 km of primary urban centres.

Temporal coverage reflects the dual documentary foundation of the gazetteer. Across pre-modern benchmarks, 1.936 settlements carry estimates in 1300AD, 1.934 in 1400AD, 1.920 in 1500AD, 984 in 1600AD, 1.026 in 1700AD and 1.026 in 1800AD, reflecting sparse provincial documentation during the seventeenth and eighteenth centuries outside major *kaza* seats. Once modern civil registration and colonial censuses begin, recorded settlement counts climb steadily from 1.142 in 1830AD to 1.329 in 1850AD, 1.453 in 1880AD, 2.497 in 1900AD (combining historical series and national census baselines) and 1.544 continuous decennial-census cities in 1910AD. All coordinates are referenced to WGS 84 decimal degrees, and historical toponyms are standardised in scholarly Latin romanisation with Ottoman and Arabic diacritics preserved for clean XeLaTeX typesetting.

# Testing and Validation

All 3.378 settlement coordinates were verified against the eleven Ottoman provincial sub-masks and the 2.645 geoBoundaries ADM1/ADM2 polygons [@Runfola2020GeoBoundaries] to confirm zero stranded marine points, zero unmerged intra-urban duplicates within 2 km and zero anachronistic twentieth-century foundations projected backward into the early modern era. In 1900AD and 1910AD, summed settlement populations reconcile cleanly against provincial urban shares in the 1881-1893AD and 1914AD Ottoman censuses [@SASMAZ1995Ottoman] as well as Egyptian, Cypriot and Algerian colonial enumerations.

<figure class="crd-figure-block" id="fig:settlements-zipf">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-ottoman-empire-mena-settlements/fig4_ottoman_empire_mena_settlements.png" alt="fig:settlements-zipf" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution across 3.378 catalogued settlements and peak populations of the twelve leading Ottoman and North African urban centres.</figcaption>
</figure>

Figure \ref{fig:settlements-zipf} plots the log-log rank-size curve across the full 3.378-settlement corpus, yielding a Zipf slope $\alpha = 0,826$ ($R^2 = 0,846$). A slope below 1 confirms a balanced multi-capital urban system in which imperial Cairo and Istanbul shared demographic weight with Baghdad, Alexandria, Ankara, Algiers, Izmir, Tunis, Damascus, Beirut and Aleppo rather than monopolising urban growth in a single primate capital.

# Results

## Territorial and Provincial Coverage

Table \ref{tab:country-summary} aggregates all 3.378 catalogued settlements across the nineteen modern territories intersecting the 1300-1918AD Ottoman mask, reporting combined urban totals in 1500AD, 1800AD and 1910AD. Note that 1910AD sums the 1.544 Wave 1 census-anchored municipalities, whereas 1500AD (1.920 sites) and 1900AD (2.497 sites) draw heavily on Wave 2 historical urban series; in Palestine, Wave 1 municipal census series enter in the late nineteenth century, raising the urban corpus to 200,1k by 1900AD and 249,3k by 1910AD. Table \ref{tab:submask-summary} aligns those settlement counts with the eleven historical Ottoman provincial zones.

<figure class="crd-table-figure" id="tab:country-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Settlements</th><th class="crd-th">Active Span</th><th class="crd-th">1500AD</th><th class="crd-th">1800AD</th><th class="crd-th">1910AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Turkey</strong></td><td class="crd-td">669</td><td class="crd-td">1300-1910AD</td><td class="crd-td">1,62M</td><td class="crd-td">1,45M</td><td class="crd-td">4,78M</td></tr>
<tr><td class="crd-td"><strong>Egypt</strong></td><td class="crd-td">490</td><td class="crd-td">1300-1910AD</td><td class="crd-td">1,39M</td><td class="crd-td">748,8k</td><td class="crd-td">3,96M</td></tr>
<tr><td class="crd-td"><strong>Iraq</strong></td><td class="crd-td">385</td><td class="crd-td">1300-1910AD</td><td class="crd-td">1,26M</td><td class="crd-td">642,7k</td><td class="crd-td">2,26M</td></tr>
<tr><td class="crd-td"><strong>Algeria</strong></td><td class="crd-td">317</td><td class="crd-td">1300-1910AD</td><td class="crd-td">749,5k</td><td class="crd-td">480,3k</td><td class="crd-td">1,52M</td></tr>
<tr><td class="crd-td"><strong>Syria</strong></td><td class="crd-td">283</td><td class="crd-td">1300-1910AD</td><td class="crd-td">914,3k</td><td class="crd-td">503,4k</td><td class="crd-td">1M</td></tr>
<tr><td class="crd-td"><strong>Saudi Arabia</strong></td><td class="crd-td">270</td><td class="crd-td">1300-1910AD</td><td class="crd-td">535,7k</td><td class="crd-td">70,9k</td><td class="crd-td">819,3k</td></tr>
<tr><td class="crd-td"><strong>Israel</strong></td><td class="crd-td">202</td><td class="crd-td">1300-1910AD</td><td class="crd-td">664,5k</td><td class="crd-td">493,6k</td><td class="crd-td">519,9k</td></tr>
<tr><td class="crd-td"><strong>Tunisia</strong></td><td class="crd-td">164</td><td class="crd-td">1300-1910AD</td><td class="crd-td">370,3k</td><td class="crd-td">184,6k</td><td class="crd-td">1,58M</td></tr>
<tr><td class="crd-td"><strong>Libya</strong></td><td class="crd-td">152</td><td class="crd-td">1300-1910AD</td><td class="crd-td">189,3k</td><td class="crd-td">108,3k</td><td class="crd-td">545,3k</td></tr>
<tr><td class="crd-td"><strong>Yemen</strong></td><td class="crd-td">139</td><td class="crd-td">1300-1910AD</td><td class="crd-td">292,8k</td><td class="crd-td">39,8k</td><td class="crd-td">264k</td></tr>
<tr><td class="crd-td"><strong>Jordan</strong></td><td class="crd-td">75</td><td class="crd-td">1300-1910AD</td><td class="crd-td">142,3k</td><td class="crd-td">94k</td><td class="crd-td">397,8k</td></tr>
<tr><td class="crd-td"><strong>Cyprus</strong></td><td class="crd-td">57</td><td class="crd-td">1300-1910AD</td><td class="crd-td">60,4k</td><td class="crd-td">47,7k</td><td class="crd-td">150,2k</td></tr>
<tr><td class="crd-td"><strong>Oman</strong></td><td class="crd-td">56</td><td class="crd-td">1300-1910AD</td><td class="crd-td">100k</td><td class="crd-td">24,9k</td><td class="crd-td">68,6k</td></tr>
<tr><td class="crd-td"><strong>Lebanon</strong></td><td class="crd-td">36</td><td class="crd-td">1300-1910AD</td><td class="crd-td">142,6k</td><td class="crd-td">48,6k</td><td class="crd-td">543,8k</td></tr>
<tr><td class="crd-td"><strong>Palestine</strong></td><td class="crd-td">34</td><td class="crd-td">1830-1910AD</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">249,3k</td></tr>
<tr><td class="crd-td"><strong>United Arab Emirates</strong></td><td class="crd-td">18</td><td class="crd-td">1300-1910AD</td><td class="crd-td">14,3k</td><td class="crd-td">11,5k</td><td class="crd-td">80k</td></tr>
<tr><td class="crd-td"><strong>Kuwait</strong></td><td class="crd-td">13</td><td class="crd-td">1300-1910AD</td><td class="crd-td">13,2k</td><td class="crd-td">16,5k</td><td class="crd-td">87,5k</td></tr>
<tr><td class="crd-td"><strong>Bahrain</strong></td><td class="crd-td">10</td><td class="crd-td">1300-1910AD</td><td class="crd-td">10,8k</td><td class="crd-td">9,9k</td><td class="crd-td">27,2k</td></tr>
<tr><td class="crd-td"><strong>Qatar</strong></td><td class="crd-td">8</td><td class="crd-td">1300-1910AD</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">30,1k</td></tr>
<tr><td class="crd-td"><strong>All Nineteen Territories</strong></td><td class="crd-td">3.378</td><td class="crd-td">1300-1910AD</td><td class="crd-td">8,47M</td><td class="crd-td">4,98M</td><td class="crd-td">18,88M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Catalogued Ottoman-era settlements by modern territory, showing active chronological spans and summed urban populations in 1500AD, 1800AD and 1910AD.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:submask-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Historical Provincial Zone</th><th class="crd-th">Domain Span</th><th class="crd-th">Sites</th><th class="crd-th">1600AD</th><th class="crd-th">1881AD</th><th class="crd-th">1914AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Hejaz, Yemen and Al-Hasa Ottoman Provinces</strong></td><td class="crd-td">1300-1918AD</td><td class="crd-td">516</td><td class="crd-td">4,05M</td><td class="crd-td">5,15M</td><td class="crd-td">5,85M</td></tr>
<tr><td class="crd-td"><strong>Ottoman Regencies of Algiers, Tunis and Tripoli</strong></td><td class="crd-td">1517-1830AD</td><td class="crd-td">633</td><td class="crd-td">4,25M</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ottoman Eyalet of Misr</strong></td><td class="crd-td">1517-1799AD</td><td class="crd-td">492</td><td class="crd-td">4,85M</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mosul, Baghdad and Basra Vilayets</strong></td><td class="crd-td">1300-1918AD</td><td class="crd-td">391</td><td class="crd-td">2,35M</td><td class="crd-td">2,45M</td><td class="crd-td">2,95M</td></tr>
<tr><td class="crd-td"><strong>Aleppo, Damascus, Beirut and Jerusalem Vilayets</strong></td><td class="crd-td">1300-1918AD</td><td class="crd-td">600</td><td class="crd-td">3,35M</td><td class="crd-td">3,35M</td><td class="crd-td">4,15M</td></tr>
<tr><td class="crd-td"><strong>Anadolu, Hudavendigar and Aydin Eyalets</strong></td><td class="crd-td">1300-1918AD</td><td class="crd-td">217</td><td class="crd-td">3,15M</td><td class="crd-td">4,65M</td><td class="crd-td">5,85M</td></tr>
<tr><td class="crd-td"><strong>Karaman, Ankara and Sivas Vilayets</strong></td><td class="crd-td">1300-1918AD</td><td class="crd-td">90</td><td class="crd-td">2,75M</td><td class="crd-td">3,45M</td><td class="crd-td">4,15M</td></tr>
<tr><td class="crd-td"><strong>Erzurum, Van, Bitlis and Diyarbakir Vilayets</strong></td><td class="crd-td">1300-1918AD</td><td class="crd-td">181</td><td class="crd-td">1,75M</td><td class="crd-td">2,45M</td><td class="crd-td">2,95M</td></tr>
<tr><td class="crd-td"><strong>Trabzon and Kastamonu Vilayets</strong></td><td class="crd-td">1300-1918AD</td><td class="crd-td">91</td><td class="crd-td">1,35M</td><td class="crd-td">1,85M</td><td class="crd-td">2,25M</td></tr>
<tr><td class="crd-td"><strong>Adana and Konya Mediterranean Vilayets</strong></td><td class="crd-td">1300-1918AD</td><td class="crd-td">110</td><td class="crd-td">1,28M</td><td class="crd-td">1,75M</td><td class="crd-td">2,15M</td></tr>
<tr><td class="crd-td"><strong>Ottoman Cyprus (Eyalet of Kibris)</strong></td><td class="crd-td">1300-1918AD</td><td class="crd-td">57</td><td class="crd-td">165k</td><td class="crd-td">186k</td><td class="crd-td">286k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued site counts and macro-regional populations across the eleven Ottoman provincial masks.</figcaption>
</figure>

## Anatolian and Cypriot Settlements

Turkey (669 settlements) and Cyprus (57 settlements) form the core Aegean, Marmara, Pontic, plateau and eastern highland network of the empire. Table \ref{tab:anatolia-cyprus} lists the forty-five largest catalogued centres across Anatolia and Cyprus, led by Istanbul (1,05M in 1910AD), Ankara (429,2k), Izmir (286,1k), Adana (149,3k), Bursa (117,6k), Gaziantep (91,9k) and Konya (84,3k), alongside port hubs such as Antalya, Mersin, Trabzon, Samsun and Nicosia [@Dayar2023Three; @Kabaday2024Nineteenth; @Bulut2022Portrait].

<figure class="crd-table-figure" id="tab:anatolia-cyprus">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Coordinates</th><th class="crd-th">1500AD</th><th class="crd-th">1800AD</th><th class="crd-th">1910AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>İstanbul</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,01, 28,95</td><td class="crd-td">5,4k</td><td class="crd-td">5k</td><td class="crd-td">1,05M</td></tr>
<tr><td class="crd-td"><strong>Ankara</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,92, 32,85</td><td class="crd-td">5,4k</td><td class="crd-td">5k</td><td class="crd-td">429,2k</td></tr>
<tr><td class="crd-td"><strong>İzmir</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,41, 27,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">286,1k</td></tr>
<tr><td class="crd-td"><strong>Adana</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,99, 35,33</td><td class="crd-td">5,3k</td><td class="crd-td">5k</td><td class="crd-td">149,3k</td></tr>
<tr><td class="crd-td"><strong>Bursa</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,2, 29,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">117,6k</td></tr>
<tr><td class="crd-td"><strong>Gaziantep</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,06, 37,38</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">91,9k</td></tr>
<tr><td class="crd-td"><strong>Konya</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,87, 32,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">84,3k</td></tr>
<tr><td class="crd-td"><strong>Kayseri</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,73, 35,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">71,8k</td></tr>
<tr><td class="crd-td"><strong>Eskişehir</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,78, 30,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">70,4k</td></tr>
<tr><td class="crd-td"><strong>Mersin</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,81, 34,64</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">60,4k</td></tr>
<tr><td class="crd-td"><strong>Diyarbakır</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,91, 40,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">58,8k</td></tr>
<tr><td class="crd-td"><strong>Antalya</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,91, 30,7</td><td class="crd-td">5,3k</td><td class="crd-td">5k</td><td class="crd-td">50,1k</td></tr>
<tr><td class="crd-td"><strong>Erzurum</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,91, 41,28</td><td class="crd-td">5,4k</td><td class="crd-td">5k</td><td class="crd-td">47,3k</td></tr>
<tr><td class="crd-td"><strong>Adapazarı</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,78, 30,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">46,8k</td></tr>
<tr><td class="crd-td"><strong>Malatya</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,35, 38,32</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">46,7k</td></tr>
<tr><td class="crd-td"><strong>Samsun</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,28, 36,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">46,2k</td></tr>
<tr><td class="crd-td"><strong>Kahramanmaraş</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,58, 36,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">40,4k</td></tr>
<tr><td class="crd-td"><strong>Sivas</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,75, 37,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">38,1k</td></tr>
<tr><td class="crd-td"><strong>Şanlıurfa</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,17, 38,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">37,4k</td></tr>
<tr><td class="crd-td"><strong>Elâzığ</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,67, 39,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>İzmit</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,76, 29,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">32,8k</td></tr>
<tr><td class="crd-td"><strong>Denizli</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,77, 29,09</td><td class="crd-td">5,3k</td><td class="crd-td">5k</td><td class="crd-td">32,5k</td></tr>
<tr><td class="crd-td"><strong>Lemesós</strong></td><td class="crd-td">Cyprus</td><td class="crd-td">34,68, 33,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">31,5k</td></tr>
<tr><td class="crd-td"><strong>İskenderun</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,59, 36,17</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">29,2k</td></tr>
<tr><td class="crd-td"><strong>Balıkesir</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,65, 27,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">28,8k</td></tr>
<tr><td class="crd-td"><strong>Tarsus</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,92, 34,89</td><td class="crd-td">14,7k</td><td class="crd-td">13,7k</td><td class="crd-td">28,1k</td></tr>
<tr><td class="crd-td"><strong>Trabzon</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,01, 39,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">27,3k</td></tr>
<tr><td class="crd-td"><strong>Manisa</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,61, 27,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24,4k</td></tr>
<tr><td class="crd-td"><strong>Kütahya</strong></td><td class="crd-td">Turkey</td><td class="crd-td">39,42, 29,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">22,8k</td></tr>
<tr><td class="crd-td"><strong>Zonguldak</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,45, 31,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">22,6k</td></tr>
<tr><td class="crd-td"><strong>Van</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,49, 43,38</td><td class="crd-td">1,5k</td><td class="crd-td">1,4k</td><td class="crd-td">21,3k</td></tr>
<tr><td class="crd-td"><strong>Antakya</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,21, 36,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20,7k</td></tr>
<tr><td class="crd-td"><strong>Lefkosía</strong></td><td class="crd-td">Cyprus</td><td class="crd-td">35,17, 33,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20,3k</td></tr>
<tr><td class="crd-td"><strong>Osmaniye</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,07, 36,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,9k</td></tr>
<tr><td class="crd-td"><strong>Isparta</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,76, 30,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,4k</td></tr>
<tr><td class="crd-td"><strong>Arnavutköy</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,18, 28,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,4k</td></tr>
<tr><td class="crd-td"><strong>Çorum</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,55, 34,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,6k</td></tr>
<tr><td class="crd-td"><strong>Stróvolos</strong></td><td class="crd-td">Cyprus</td><td class="crd-td">35,15, 33,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,1k</td></tr>
<tr><td class="crd-td"><strong>Gebze</strong></td><td class="crd-td">Turkey</td><td class="crd-td">40,8, 29,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">17,8k</td></tr>
<tr><td class="crd-td"><strong>Theodosian Walls</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41, 28,92</td><td class="crd-td">16,5k</td><td class="crd-td">13,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Aydın</strong></td><td class="crd-td">Turkey</td><td class="crd-td">37,85, 27,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">17,4k</td></tr>
<tr><td class="crd-td"><strong>Uşak</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,67, 29,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">17k</td></tr>
<tr><td class="crd-td"><strong>Afyonkarahisar</strong></td><td class="crd-td">Turkey</td><td class="crd-td">38,76, 30,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16,7k</td></tr>
<tr><td class="crd-td"><strong>Edirne</strong></td><td class="crd-td">Turkey</td><td class="crd-td">41,68, 26,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16,7k</td></tr>
<tr><td class="crd-td"><strong>Cnidus</strong></td><td class="crd-td">Turkey</td><td class="crd-td">36,74, 27,7</td><td class="crd-td">15,3k</td><td class="crd-td">13,7k</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Forty-five largest catalogued settlements across Anatolia and Cyprus ranked by peak population (1300-1910AD).</figcaption>
</figure>

## Levantine and Mesopotamian Settlements

Across Syria, Lebanon, Israel, Palestine, Jordan and Iraq, 1.015 settlements map the Fertile Crescent corridor from Alexandretta and Aleppo through Damascus, Beirut, Jerusalem and Amman to Mosul, Kirkuk, Baghdad and Basra. Table \ref{tab:levant-iraq} tabulates the forty-five largest urban centres across the Levant and Iraq, highlighting Baghdad (706k), Damascus (233,2k), Beirut (231,1k), Aleppo (206,7k), Amman (156,6k), Mosul (122,1k), Erbil (89,3k), Jerusalem (86k) and Kirkuk (76,9k) [@Liebrenz2022Notebook; @Anonymous2019Mosul; @Qader2024Lynch].

<figure class="crd-table-figure" id="tab:levant-iraq">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Coordinates</th><th class="crd-th">1500AD</th><th class="crd-th">1800AD</th><th class="crd-th">1910AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Baghdād</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,34, 44,4</td><td class="crd-td">34,4k</td><td class="crd-td">5k</td><td class="crd-td">706k</td></tr>
<tr><td class="crd-td"><strong>Dimashq</strong></td><td class="crd-td">Syria</td><td class="crd-td">33,51, 36,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">233,2k</td></tr>
<tr><td class="crd-td"><strong>Bayrūt</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">33,89, 35,5</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">231,1k</td></tr>
<tr><td class="crd-td"><strong>Ḥalab</strong></td><td class="crd-td">Syria</td><td class="crd-td">36,2, 37,16</td><td class="crd-td">13,7k</td><td class="crd-td">-</td><td class="crd-td">206,7k</td></tr>
<tr><td class="crd-td"><strong>'Ammān</strong></td><td class="crd-td">Jordan</td><td class="crd-td">31,96, 35,95</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">156,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Mawṣil</strong></td><td class="crd-td">Iraq</td><td class="crd-td">36,34, 43,12</td><td class="crd-td">13,7k</td><td class="crd-td">-</td><td class="crd-td">122,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Biqā'</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">33,67, 35,83</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">99,1k</td></tr>
<tr><td class="crd-td"><strong>Arbīl</strong></td><td class="crd-td">Iraq</td><td class="crd-td">36,19, 44,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">89,3k</td></tr>
<tr><td class="crd-td"><strong>Yerushalayim</strong></td><td class="crd-td">Israel</td><td class="crd-td">31,75, 35,03</td><td class="crd-td">5,1k</td><td class="crd-td">5k</td><td class="crd-td">86k</td></tr>
<tr><td class="crd-td"><strong>Kirkūk</strong></td><td class="crd-td">Iraq</td><td class="crd-td">35,47, 44,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">76,9k</td></tr>
<tr><td class="crd-td"><strong>Al-Baṣrah</strong></td><td class="crd-td">Iraq</td><td class="crd-td">30,51, 47,78</td><td class="crd-td">13,7k</td><td class="crd-td">-</td><td class="crd-td">74,7k</td></tr>
<tr><td class="crd-td"><strong>An-Nabaṭīyah</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">33,38, 35,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">73,2k</td></tr>
<tr><td class="crd-td"><strong>Ḥimṣ</strong></td><td class="crd-td">Syria</td><td class="crd-td">34,72, 36,73</td><td class="crd-td">13,7k</td><td class="crd-td">-</td><td class="crd-td">72,7k</td></tr>
<tr><td class="crd-td"><strong>'Akkār</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">34,54, 36,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">70,6k</td></tr>
<tr><td class="crd-td"><strong>Ba'albak - Al-Harmal</strong></td><td class="crd-td">Lebanon</td><td class="crd-td">34,21, 36,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">69,8k</td></tr>
<tr><td class="crd-td"><strong>As-Sulaymāniyah</strong></td><td class="crd-td">Iraq</td><td class="crd-td">35,56, 45,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">66,9k</td></tr>
<tr><td class="crd-td"><strong>Tel Aviv-Yafo</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,08, 34,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">65,7k</td></tr>
<tr><td class="crd-td"><strong>An-Najaf</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,03, 44,35</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">56,8k</td></tr>
<tr><td class="crd-td"><strong>Az-Zarqā'</strong></td><td class="crd-td">Jordan</td><td class="crd-td">32,07, 36,09</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">55,3k</td></tr>
<tr><td class="crd-td"><strong>Karbalā'</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,62, 44,02</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">54,5k</td></tr>
<tr><td class="crd-td"><strong>Ghazzah</strong></td><td class="crd-td">Palestine</td><td class="crd-td">31,5, 34,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">52,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥillah</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,46, 44,42</td><td class="crd-td">5,4k</td><td class="crd-td">5k</td><td class="crd-td">49,4k</td></tr>
<tr><td class="crd-td"><strong>An-Nāṣiriyah</strong></td><td class="crd-td">Iraq</td><td class="crd-td">31,06, 46,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">48,9k</td></tr>
<tr><td class="crd-td"><strong>Hefa</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,77, 35,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">45,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Lādhiqiyah</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,53, 35,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">41,3k</td></tr>
<tr><td class="crd-td"><strong>Al-'Amārah</strong></td><td class="crd-td">Iraq</td><td class="crd-td">31,84, 47,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">38,4k</td></tr>
<tr><td class="crd-td"><strong>Ḥamāh</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,13, 36,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">37,2k</td></tr>
<tr><td class="crd-td"><strong>Ad-Dīwāniyah</strong></td><td class="crd-td">Iraq</td><td class="crd-td">31,99, 44,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">36,1k</td></tr>
<tr><td class="crd-td"><strong>Ar-Ramādī</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,42, 43,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">35,4k</td></tr>
<tr><td class="crd-td"><strong>Al-Kūt</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,51, 45,82</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">33,7k</td></tr>
<tr><td class="crd-td"><strong>Irbid</strong></td><td class="crd-td">Jordan</td><td class="crd-td">32,56, 35,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">32,8k</td></tr>
<tr><td class="crd-td"><strong>Dahūk</strong></td><td class="crd-td">Iraq</td><td class="crd-td">36,87, 42,99</td><td class="crd-td">5,4k</td><td class="crd-td">5k</td><td class="crd-td">31,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Quds</strong></td><td class="crd-td">Palestine</td><td class="crd-td">31,8, 35,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">31k</td></tr>
<tr><td class="crd-td"><strong>Ar-Ruṣayfah</strong></td><td class="crd-td">Jordan</td><td class="crd-td">32,02, 36,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">28,2k</td></tr>
<tr><td class="crd-td"><strong>Az-Zubayr</strong></td><td class="crd-td">Iraq</td><td class="crd-td">30,39, 47,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">27,7k</td></tr>
<tr><td class="crd-td"><strong>Ba'qūbah</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,75, 44,61</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">25,8k</td></tr>
<tr><td class="crd-td"><strong>Petah Tiqwa</strong></td><td class="crd-td">Israel</td><td class="crd-td">32,09, 34,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24,9k</td></tr>
<tr><td class="crd-td"><strong>Al-Fallūjah</strong></td><td class="crd-td">Iraq</td><td class="crd-td">33,35, 43,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">23k</td></tr>
<tr><td class="crd-td"><strong>Be'er Sheva</strong></td><td class="crd-td">Israel</td><td class="crd-td">31,25, 34,79</td><td class="crd-td">5,4k</td><td class="crd-td">5k</td><td class="crd-td">22,2k</td></tr>
<tr><td class="crd-td"><strong>Rishon LeZiyyon</strong></td><td class="crd-td">Israel</td><td class="crd-td">31,97, 34,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20,9k</td></tr>
<tr><td class="crd-td"><strong>As-Samāwah</strong></td><td class="crd-td">Iraq</td><td class="crd-td">31,33, 45,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20,3k</td></tr>
<tr><td class="crd-td"><strong>Zākhū</strong></td><td class="crd-td">Iraq</td><td class="crd-td">37,15, 42,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥur</strong></td><td class="crd-td">Iraq</td><td class="crd-td">32,67, 44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Qāmishlī</strong></td><td class="crd-td">Syria</td><td class="crd-td">37,05, 41,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,5k</td></tr>
<tr><td class="crd-td"><strong>Dayr az-Zawr</strong></td><td class="crd-td">Syria</td><td class="crd-td">35,34, 40,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Forty-five largest catalogued settlements across the Levant and Iraq ranked by peak population (1300-1910AD).</figcaption>
</figure>

## Arabian Peninsula Settlements

Within the Arabian Peninsula, 514 catalogued settlements trace Red Sea ports, Asiri and Yemeni highland terraces, Najdi oasis towns and Persian Gulf pearling anchorages across Saudi Arabia, Yemen, Oman, the United Arab Emirates, Kuwait, Bahrain and Qatar (Table \ref{tab:arabia-sites}). Late nineteenth-century growth concentrated in Riyadh (201,3k in 1910AD), Jeddah (148,4k), Mecca, Medina, Taif, Sanaa and Aden.

<figure class="crd-table-figure" id="tab:arabia-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Coordinates</th><th class="crd-th">1500AD</th><th class="crd-th">1800AD</th><th class="crd-th">1910AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ar-Riyāḍ</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,69, 46,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">201,3k</td></tr>
<tr><td class="crd-td"><strong>Jiddah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,63, 39,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">148,4k</td></tr>
<tr><td class="crd-td"><strong>Makkah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,43, 39,83</td><td class="crd-td">34,4k</td><td class="crd-td">-</td><td class="crd-td">70k</td></tr>
<tr><td class="crd-td"><strong>'Adan</strong></td><td class="crd-td">Yemen</td><td class="crd-td">12,78, 45,04</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">57,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Madīnah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,47, 39,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">44,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Hufūf</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">25,36, 49,59</td><td class="crd-td">5,4k</td><td class="crd-td">5k</td><td class="crd-td">32,3k</td></tr>
<tr><td class="crd-td"><strong>Ṣan'ā'</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,35, 44,21</td><td class="crd-td">13,7k</td><td class="crd-td">5k</td><td class="crd-td">32,2k</td></tr>
<tr><td class="crd-td"><strong>Aṭ-Ṭa'if</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">21,27, 40,42</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">30,2k</td></tr>
<tr><td class="crd-td"><strong>Dubayy</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">25,08, 55,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">28k</td></tr>
<tr><td class="crd-td"><strong>Abū Ẓaby</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">24,45, 54,4</td><td class="crd-td">-</td><td class="crd-td">6,5k</td><td class="crd-td">25,9k</td></tr>
<tr><td class="crd-td"><strong>Ḥawallī</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,33, 48,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">23,7k</td></tr>
<tr><td class="crd-td"><strong>Al-Ḥudaydah</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,8, 42,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">21,2k</td></tr>
<tr><td class="crd-td"><strong>Tabūk</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">28,4, 36,57</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">21,2k</td></tr>
<tr><td class="crd-td"><strong>Ta'izz</strong></td><td class="crd-td">Yemen</td><td class="crd-td">13,58, 44,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20,8k</td></tr>
<tr><td class="crd-td"><strong>Ad-Dawḥah</strong></td><td class="crd-td">Qatar</td><td class="crd-td">25,29, 51,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19,1k</td></tr>
<tr><td class="crd-td"><strong>Al-Farwānīyah</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,28, 47,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,8k</td></tr>
<tr><td class="crd-td"><strong>Buraydah</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,33, 43,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18k</td></tr>
<tr><td class="crd-td"><strong>Ṣuḥār</strong></td><td class="crd-td">Oman</td><td class="crd-td">24,18, 56,53</td><td class="crd-td">13,7k</td><td class="crd-td">-</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>Zabīd</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,2, 43,32</td><td class="crd-td">13,7k</td><td class="crd-td">-</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Qurḥ</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,55, 37,99</td><td class="crd-td">13,7k</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>al-Ḥajr</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,64, 46,73</td><td class="crd-td">13,7k</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>al-Aḥsā'</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">25,35, 49,54</td><td class="crd-td">13,7k</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>'Aṭṭār</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">17,19, 42,39</td><td class="crd-td">13,7k</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Abyāyn</strong></td><td class="crd-td">Yemen</td><td class="crd-td">13,14, 44,96</td><td class="crd-td">13,7k</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ma'rib</strong></td><td class="crd-td">Yemen</td><td class="crd-td">15,56, 45,44</td><td class="crd-td">13,7k</td><td class="crd-td">5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Khamīs Mushaīṭ</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">18,3, 42,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,8k</td></tr>
<tr><td class="crd-td"><strong>Ḥā'il</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">27,52, 41,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Manāmah</strong></td><td class="crd-td">Bahrain</td><td class="crd-td">26,23, 50,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,9k</td></tr>
<tr><td class="crd-td"><strong>As-Sīb</strong></td><td class="crd-td">Oman</td><td class="crd-td">23,67, 58,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Kharj</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">24,16, 47,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11k</td></tr>
<tr><td class="crd-td"><strong>Al-Jahrā'</strong></td><td class="crd-td">Kuwait</td><td class="crd-td">29,34, 47,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11k</td></tr>
<tr><td class="crd-td"><strong>Al-'Ayn</strong></td><td class="crd-td">United Arab Emirates</td><td class="crd-td">24,19, 55,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,9k</td></tr>
<tr><td class="crd-td"><strong>Al-Mukallā</strong></td><td class="crd-td">Yemen</td><td class="crd-td">14,54, 49,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,8k</td></tr>
<tr><td class="crd-td"><strong>Al-Khubar</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">26,28, 50,21</td><td class="crd-td">5,7k</td><td class="crd-td">5k</td><td class="crd-td">10,3k</td></tr>
<tr><td class="crd-td"><strong>Ḥafar al-Bāṭin</strong></td><td class="crd-td">Saudi Arabia</td><td class="crd-td">28,43, 45,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Thirty-five largest catalogued settlements across the Arabian Peninsula ranked by peak population (1300-1910AD).</figcaption>
</figure>

## Egyptian and North African Settlements

Egypt (490 settlements) and the three Maghreb regencies of Algeria (317), Tunisia (164) and Libya (152) account for 1.123 settlements concentrated in the Nile Valley and Delta and along the Mediterranean Littoral from Oran and Algiers to Tunis, Sfax, Tripoli and Benghazi. Table \ref{tab:egypt-maghreb} reports the forty-five largest towns across Egypt and the Maghreb, led by Cairo (1,15M), Alexandria (497,2k), Giza (380,1k), Algiers (348,8k), Tunis (245,5k), Tripoli (142,3k), Shubra al-Khaymah (131,3k), Oran (112,6k), Sfax (95,4k), Benghazi (86,9k) and Constantine (78,9k).

<figure class="crd-table-figure" id="tab:egypt-maghreb">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Coordinates</th><th class="crd-th">1500AD</th><th class="crd-th">1830AD</th><th class="crd-th">1910AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Al-Qāhirah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,06, 31,25</td><td class="crd-td">-</td><td class="crd-td">197,2k</td><td class="crd-td">1,15M</td></tr>
<tr><td class="crd-td"><strong>Al-Iskandariyah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,2, 29,92</td><td class="crd-td">-</td><td class="crd-td">85,5k</td><td class="crd-td">497,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Jīzah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,01, 31,21</td><td class="crd-td">-</td><td class="crd-td">65,4k</td><td class="crd-td">380,1k</td></tr>
<tr><td class="crd-td"><strong>El Djazaïr</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,73, 3,09</td><td class="crd-td">-</td><td class="crd-td">60k</td><td class="crd-td">348,8k</td></tr>
<tr><td class="crd-td"><strong>Tūnis</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,82, 10,17</td><td class="crd-td">5k</td><td class="crd-td">94k</td><td class="crd-td">245,5k</td></tr>
<tr><td class="crd-td"><strong>Ṭarābulus</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,89, 13,19</td><td class="crd-td">-</td><td class="crd-td">24,5k</td><td class="crd-td">142,3k</td></tr>
<tr><td class="crd-td"><strong>Shubrā al-Khaymah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,13, 31,25</td><td class="crd-td">-</td><td class="crd-td">22,6k</td><td class="crd-td">131,3k</td></tr>
<tr><td class="crd-td"><strong>Oran</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,7, -0,64</td><td class="crd-td">-</td><td class="crd-td">19,4k</td><td class="crd-td">112,6k</td></tr>
<tr><td class="crd-td"><strong>Ṣafāqis</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">34,74, 10,76</td><td class="crd-td">-</td><td class="crd-td">36,5k</td><td class="crd-td">95,4k</td></tr>
<tr><td class="crd-td"><strong>Banghāzī</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,11, 20,07</td><td class="crd-td">-</td><td class="crd-td">15k</td><td class="crd-td">86,9k</td></tr>
<tr><td class="crd-td"><strong>Constantine</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,37, 6,61</td><td class="crd-td">-</td><td class="crd-td">13,6k</td><td class="crd-td">78,9k</td></tr>
<tr><td class="crd-td"><strong>Būr Sa'īd</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,27, 32,3</td><td class="crd-td">-</td><td class="crd-td">12,3k</td><td class="crd-td">71,2k</td></tr>
<tr><td class="crd-td"><strong>As-Suways</strong></td><td class="crd-td">Egypt</td><td class="crd-td">29,6, 32,2</td><td class="crd-td">-</td><td class="crd-td">10,8k</td><td class="crd-td">62,5k</td></tr>
<tr><td class="crd-td"><strong>Al-Maḥallah al-Kubrā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,97, 31,17</td><td class="crd-td">-</td><td class="crd-td">10,2k</td><td class="crd-td">59,5k</td></tr>
<tr><td class="crd-td"><strong>Ṭanṭā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,79, 31</td><td class="crd-td">5k</td><td class="crd-td">9,7k</td><td class="crd-td">56,2k</td></tr>
<tr><td class="crd-td"><strong>Al-Manṣūrah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,04, 31,38</td><td class="crd-td">-</td><td class="crd-td">9,6k</td><td class="crd-td">55,7k</td></tr>
<tr><td class="crd-td"><strong>Asyūṭ</strong></td><td class="crd-td">Egypt</td><td class="crd-td">27,18, 31,18</td><td class="crd-td">5k</td><td class="crd-td">8,9k</td><td class="crd-td">51,8k</td></tr>
<tr><td class="crd-td"><strong>Annaba</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,9, 7,77</td><td class="crd-td">-</td><td class="crd-td">7k</td><td class="crd-td">40,9k</td></tr>
<tr><td class="crd-td"><strong>Fusṭāṭ</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,04, 31,25</td><td class="crd-td">34,4k</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Az-Zaqāzīq</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,59, 31,5</td><td class="crd-td">-</td><td class="crd-td">6,9k</td><td class="crd-td">40,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Fayyūm</strong></td><td class="crd-td">Egypt</td><td class="crd-td">29,31, 30,84</td><td class="crd-td">13,7k</td><td class="crd-td">6,8k</td><td class="crd-td">39,3k</td></tr>
<tr><td class="crd-td"><strong>Banzart</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">37,27, 9,87</td><td class="crd-td">5k</td><td class="crd-td">14,9k</td><td class="crd-td">38,9k</td></tr>
<tr><td class="crd-td"><strong>Al-Ismā'īliyah</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,6, 32,27</td><td class="crd-td">-</td><td class="crd-td">6,6k</td><td class="crd-td">38,5k</td></tr>
<tr><td class="crd-td"><strong>Qābis</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">33,88, 10,1</td><td class="crd-td">5k</td><td class="crd-td">14,5k</td><td class="crd-td">38k</td></tr>
<tr><td class="crd-td"><strong>Al-Khuṣūṣ</strong></td><td class="crd-td">Egypt</td><td class="crd-td">30,15, 31,32</td><td class="crd-td">-</td><td class="crd-td">6,1k</td><td class="crd-td">35,2k</td></tr>
<tr><td class="crd-td"><strong>Sūsah</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">35,83, 10,64</td><td class="crd-td">5k</td><td class="crd-td">13,2k</td><td class="crd-td">34,4k</td></tr>
<tr><td class="crd-td"><strong>Aswān</strong></td><td class="crd-td">Egypt</td><td class="crd-td">24,09, 32,9</td><td class="crd-td">13,7k</td><td class="crd-td">5,7k</td><td class="crd-td">33,1k</td></tr>
<tr><td class="crd-td"><strong>Aryānah</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,86, 10,19</td><td class="crd-td">-</td><td class="crd-td">12,1k</td><td class="crd-td">31,6k</td></tr>
<tr><td class="crd-td"><strong>Damanhūr</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,03, 30,47</td><td class="crd-td">5k</td><td class="crd-td">5,4k</td><td class="crd-td">31,6k</td></tr>
<tr><td class="crd-td"><strong>Al-Minyā</strong></td><td class="crd-td">Egypt</td><td class="crd-td">28,09, 30,76</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">30,4k</td></tr>
<tr><td class="crd-td"><strong>Al-Qayrawān</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">35,68, 10,1</td><td class="crd-td">13,7k</td><td class="crd-td">11,4k</td><td class="crd-td">29,7k</td></tr>
<tr><td class="crd-td"><strong>Sétif</strong></td><td class="crd-td">Algeria</td><td class="crd-td">36,19, 5,41</td><td class="crd-td">5k</td><td class="crd-td">5,1k</td><td class="crd-td">29,7k</td></tr>
<tr><td class="crd-td"><strong>Sukrah</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,88, 10,25</td><td class="crd-td">-</td><td class="crd-td">11k</td><td class="crd-td">28,9k</td></tr>
<tr><td class="crd-td"><strong>Bārdaw</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,81, 10,13</td><td class="crd-td">-</td><td class="crd-td">10,3k</td><td class="crd-td">27k</td></tr>
<tr><td class="crd-td"><strong>Al-Murūj</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,71, 10,21</td><td class="crd-td">-</td><td class="crd-td">10,2k</td><td class="crd-td">26,5k</td></tr>
<tr><td class="crd-td"><strong>Banī Suwayf</strong></td><td class="crd-td">Egypt</td><td class="crd-td">29,07, 31,1</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">25,9k</td></tr>
<tr><td class="crd-td"><strong>Sidi bel Abbès</strong></td><td class="crd-td">Algeria</td><td class="crd-td">35,19, -0,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25,9k</td></tr>
<tr><td class="crd-td"><strong>Miṣrātah</strong></td><td class="crd-td">Libya</td><td class="crd-td">32,38, 15,09</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">25,7k</td></tr>
<tr><td class="crd-td"><strong>Sawhāj</strong></td><td class="crd-td">Egypt</td><td class="crd-td">26,56, 31,69</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">25,7k</td></tr>
<tr><td class="crd-td"><strong>Sīdī Ḥusayn</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,76, 10,12</td><td class="crd-td">-</td><td class="crd-td">9,8k</td><td class="crd-td">25,7k</td></tr>
<tr><td class="crd-td"><strong>At-Taḍāmun</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,83, 10,11</td><td class="crd-td">-</td><td class="crd-td">9,7k</td><td class="crd-td">25,3k</td></tr>
<tr><td class="crd-td"><strong>Al-Marsā</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">36,88, 10,32</td><td class="crd-td">-</td><td class="crd-td">9,7k</td><td class="crd-td">25,2k</td></tr>
<tr><td class="crd-td"><strong>Qafṣah</strong></td><td class="crd-td">Tunisia</td><td class="crd-td">34,42, 8,78</td><td class="crd-td">5k</td><td class="crd-td">9,6k</td><td class="crd-td">25,1k</td></tr>
<tr><td class="crd-td"><strong>Tlemcen</strong></td><td class="crd-td">Algeria</td><td class="crd-td">34,88, -1,31</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">25,1k</td></tr>
<tr><td class="crd-td"><strong>Dumyāṭ</strong></td><td class="crd-td">Egypt</td><td class="crd-td">31,43, 31,78</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">25k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Forty-five largest catalogued settlements across Egypt and Ottoman North Africa ranked by peak population (1300-1910AD).</figcaption>
</figure>

# Limitations

Three constraints govern the settlement gazetteer. First, pre-1830AD point estimates rely on *tahrir* *hane* headcounts, travel accounts and archaeological urban extents, leaving seventeenth- and eighteenth-century medium-sized market towns underrepresented relative to the sixteenth-century *tahrir* peak and the post-1881AD census era. Second, because Egypt exits direct Ottoman rule in 1799AD and Algeria in 1830AD, late nineteenth-century Wave 1 Egyptian and Maghrebi series reflect khedival and French colonial municipal boundaries respectively. Third, 250 minor suburbs within 2 km of metropolitan cores were merged into primary urban entries to avoid double counting, meaning suburban growth in greater Cairo, Istanbul and Alexandria is captured inside the consolidated core trajectories rather than as separate villages.

# Conclusion

Bringing together 3.378 settlements across nineteen territories and eleven provincial masks, this gazetteer establishes the urban skeleton underlying HANDBOOK's Ottoman demographic surface. The corpus documents both the endurance of mediaeval riverine and caravan hubs from 1300AD to 1600AD and the rapid nineteenth-century realignment toward Mediterranean ports, railway junctions and *muhacir*-settled interior towns prior to 1918AD.

# Appendix

Table \ref{tab:appendix-size-tiers} classifies the 1.544 settlements active in the 1910AD census-anchored slice by urban size tier, showing that 21 metropolises above 100k inhabitants held 37,3% of catalogued urban mass while 1.299 smaller towns between 1k and 25k accounted for 38,9%.

<figure class="crd-table-figure" id="tab:appendix-size-tiers">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Urban Size Tier (1910AD)</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Combined Pop.</th><th class="crd-th">Urban Mass Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Metropolises (&gt;= 100k)</strong></td><td class="crd-td">21</td><td class="crd-td">1,4%</td><td class="crd-td">7,04M</td><td class="crd-td">37,3%</td></tr>
<tr><td class="crd-td"><strong>Regional Cities (25k to 100k)</strong></td><td class="crd-td">96</td><td class="crd-td">6,2%</td><td class="crd-td">4,41M</td><td class="crd-td">23,4%</td></tr>
<tr><td class="crd-td"><strong>Provincial Towns (5k to 25k)</strong></td><td class="crd-td">521</td><td class="crd-td">33,7%</td><td class="crd-td">5,22M</td><td class="crd-td">27,7%</td></tr>
<tr><td class="crd-td"><strong>Market Towns (1k to 5k)</strong></td><td class="crd-td">778</td><td class="crd-td">50,4%</td><td class="crd-td">2,13M</td><td class="crd-td">11,3%</td></tr>
<tr><td class="crd-td"><strong>Villages (&lt; 1k)</strong></td><td class="crd-td">128</td><td class="crd-td">8,3%</td><td class="crd-td">81,9k</td><td class="crd-td">0,4%</td></tr>
<tr><td class="crd-td"><strong>Total Active 1910AD Corpus</strong></td><td class="crd-td">1.544</td><td class="crd-td">100%</td><td class="crd-td">18,88M</td><td class="crd-td">100%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Size-tier stratification of the 1.544 active 1910AD settlements in the Ottoman MENA and Anatolian gazetteer.</figcaption>
</figure>

# Sources

::: {#refs}
:::
