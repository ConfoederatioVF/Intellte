---
title: "Republic of Turkey after 1923"
subtitle: "Settlement Gazetteer, Urban Hierarchy and District Structure, 1923AD to 2026AD"
date: "22 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: republic_of_turkey_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_republic_of_turkey_spatial.png"
hero_caption: "Spatial distribution of 22.177 catalogued TurkStat census localities across the 81 Turkish provinces from 1923AD to 2026AD, highlighting the metropolitan nodes of Istanbul, Ankara, Izmir, Bursa, Antalya, Konya and Adana."
hero_label: "fig:hero-settlements"
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

This gazetteer documents the demographic trajectories of 22.177 TurkStat census localities across the Republic of Turkey from 1923AD to 2026AD, anchored to WGS84 coordinates and assigned to all 81 modern provinces across Turkey's seven geographical regions. Compiled from Turkish Statistical Institute (TUIK) general population censuses (1927-2000AD), the Address-Based Population Registration System (ADNKS, 2007-2024AD) and Republican municipal continuity records, the catalogued corpus spans provincial metropolises, district capitals and enumerated rural villages down to 500 inhabitants, recording 2,35M enumerated residents in 1927AD, 40,22M in 1970AD, 90,9M in 2000AD and 139,11M across contemporary 2025AD urban trajectories. Across all 22.177 localities at peak population, rank-size scaling exhibits a Zipf exponent of $\alpha = 1{,}208$ ($R^2 = 0{,}979$), reflecting both Istanbul's ascent from 690,9k in 1927AD to 15,9M in 2025AD and the emergence of sixteen million-plus metropolitan hubs led by Ankara (5,8M peak; 5,41M in 2025AD), Izmir (4,49M peak; 3,07M in 2025AD), Bursa (2,99M peak; 2,14M in 2025AD), Antalya (2,43M peak; 1,38M in 2025AD), Konya (2,23M peak; 1,42M in 2025AD), Adana (1,86M), Mersin (1,81M peak; 1,09M in 2025AD), Gaziantep (1,8M peak; 1,75M in 2025AD), Diyarbakir (1,73M peak; 1,13M in 2025AD) and Kayseri (1,39M peak; 1,03M in 2025AD). Paired with the 968-district ADM2 subadministrative census layer, the gazetteer anchors Turkey's full urban-rural hierarchy across the Republican century.

# Background

At the proclamation of the Republic in October 1923, Turkey possessed a sparse urban network scarred by a decade of warfare and the compulsory Greek-Turkish population exchange [@Bakar2017Turkey; @Ustaoglu2021Reconstruc]. Outside Istanbul (690,9k at the 1927AD census), Izmir (153,9k) and Adana (72,6k), most provincial capitals functioned as modest market and garrison towns of 15k to 75k residents serving predominantly agrarian hinterlands [@Hofmeester2020Shifting; @Hartmann2022Meeting]. Even Ankara, designated the new Republican capital in 1923AD, recorded just 74,6k municipal residents at the 1927AD general census before state ministries, railways and defence factories spurred sustained central Anatolian urbanisation.

After 1950AD, Marshall Plan tractorisation, highway construction and declining rural mortality detached millions of smallholders from Anatolia's villages and launched a multi-decade urban migration wave [@Karakoc2026Concentrat; @Balc2022Istanbul]. Industrial corridors formed along the Sea of Marmara from Tekirdag and Istanbul through Gebze, Izmit and Bursa, while Aegean, Mediterranean and southeastern centres expanded on irrigated cash crops, textiles, construction and tourism [@Baysal2022Urbanizati; @Bostan2025Rkiye; @Oguz2021Resilient]. From the 1980s onward, internal Kurdish migration and after 2011AD Syrian refugee inflows added hundreds of thousands of residents to Gaziantep, Sanliurfa, Kilis, Adana, Mersin, Antalya and Istanbul [@Alptekin2024Three; @INCILI2020Kilis; @DEMIR2022Antalya].

# Methodology

Every settlement trajectory in this gazetteer harmonises official TUIK general population censuses (fourteen de facto counts from 1927AD to 2000AD) with the de jure ADNKS population register (2007-2024AD) [@Bostan2023Comparativ]. Across 46.713 official TurkStat rows processed within chapter bounds, duplicate-alias and co-located suburban candidates were excluded during source-ledger deduplication, leaving 22.177 retained cities, towns and rural villages extending down to 432–500 inhabitants. Retaining continuous pre-2012AD locality records alongside post-2012AD metropolitan counts distinguishes organic physical growth from the statutory boundary expansions introduced by Law No. 6360 [@Canpolat2018Terms; @Bostan2025Rkiye].

Each settlement coordinate pair is mapped via polygon containment onto the 81-province geoBoundaries administrative geometry [@Runfola2020GeoBoundaries] and grouped into Turkey's seven standard geographical regions: Marmara, Aegean, Mediterranean, Central Anatolia, Black Sea, Eastern Anatolia and Southeastern Anatolia. Key resource, state-industry and metropolitan district foundations carry explicit historical foundation thresholds—including Zonguldak (1849AD), Kirikkale (1925AD), Karabuk (1937AD), Batman (1940AD), Kecioren (1983AD), Mamak (1983AD), Sehitkamil (1987AD), Yildirim (1987AD) and Etimesgut (1990AD)—preventing pre-foundation back-projection prior to establishment.

# Testing and Validation

Figure \ref{fig:settlements-hierarchy} confirms that all 22.177 catalogued Turkish localities follow a tight log-linear Zipf rank-size relation ($\alpha = 1{,}208$, $R^2 = 0{,}979$) spanning from Istanbul (15,9M in 2025AD) down to enumerated rural villages near 500 inhabitants. Comparing catalogued census totals against the national envelope confirms smooth coverage across the Republican censuses (2,35M in 1927AD, 40,22M in 1970AD, 90,9M in 2000AD and 139,11M across contemporary 2025AD urban trajectories) without synthetic pre-1927AD extrapolation [@Canpolat2018Terms]. Cross-checking regional sums against the 968 matched geoBoundaries ADM2 districts further confirms spatial alignment across metropolitan cores such as Esenyurt (978k in 2023AD), Sahinbey (939,5k) and Cankaya (937,5k) [@Runfola2020GeoBoundaries].

<figure class="crd-figure-block" id="fig:settlements-hierarchy">
<img class="crd-figure-img" src="/artefacts/project_handbook/1.0-republic-of-turkey-settlements/fig4_republic_of_turkey_settlements.png" alt="fig:settlements-hierarchy" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Zipf rank-size curve for all 22.177 catalogued Turkish census localities (left) and the twelve largest metropolitan centres at their documented peak (right).</figcaption>
</figure>

# Results

## Marmara Region

Anchoring Turkey's northwestern industrial crescent, Marmara is led by Istanbul (15,9M peak in 2025AD), Bursa (2,99M peak; 2,14M in 2025AD), Balikesir (1,25M peak), Izmit (1,13M peak), Osmangazi (862,5k), Gebze (801,4k), Yildirim (653k) and Adapazari (585,8k peak) (Table \ref{tab:reg-marmara}). Rapid manufacturing expansion turned former Thracian and Bithynian market towns along the Kocaeli and Tekirdag corridors into dense industrial satellites [@Bostan2025Rkiye; @UNAL2025Interactio; @KOSE2022Impact].

<figure class="crd-table-figure" id="tab:reg-marmara">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Coords</th><th class="crd-th">1927AD</th><th class="crd-th">1970AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>İstanbul</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">41,01, 28,95</td><td class="crd-td">690,9k</td><td class="crd-td">2,13M</td><td class="crd-td">15,9M</td></tr>
<tr><td class="crd-td"><strong>Bursa</strong></td><td class="crd-td">Bursa</td><td class="crd-td">40,2, 29,06</td><td class="crd-td">61,7k</td><td class="crd-td">275,9k</td><td class="crd-td">3,1M</td></tr>
<tr><td class="crd-td"><strong>Balıkesir</strong></td><td class="crd-td">Balikesir</td><td class="crd-td">39,65, 27,89</td><td class="crd-td">25,7k</td><td class="crd-td">85k</td><td class="crd-td">1,25M</td></tr>
<tr><td class="crd-td"><strong>İzmit</strong></td><td class="crd-td">Kocaeli</td><td class="crd-td">40,76, 29,93</td><td class="crd-td">15,2k</td><td class="crd-td">120,7k</td><td class="crd-td">1,13M</td></tr>
<tr><td class="crd-td"><strong>Esenyurt</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">41,03, 28,68</td><td class="crd-td">-</td><td class="crd-td">463k</td><td class="crd-td">1,08M</td></tr>
<tr><td class="crd-td"><strong>Osmangazi</strong></td><td class="crd-td">Bursa</td><td class="crd-td">40,22, 29,04</td><td class="crd-td">-</td><td class="crd-td">404k</td><td class="crd-td">915,6k</td></tr>
<tr><td class="crd-td"><strong>Küçükçekmece</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">40,99, 28,77</td><td class="crd-td">-</td><td class="crd-td">351,5k</td><td class="crd-td">856,1k</td></tr>
<tr><td class="crd-td"><strong>Bağcılar</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">41,04, 28,86</td><td class="crd-td">-</td><td class="crd-td">339,1k</td><td class="crd-td">805,5k</td></tr>
<tr><td class="crd-td"><strong>Gebze</strong></td><td class="crd-td">Kocaeli</td><td class="crd-td">40,8, 29,43</td><td class="crd-td">2,9k</td><td class="crd-td">18,8k</td><td class="crd-td">801,4k</td></tr>
<tr><td class="crd-td"><strong>Yıldırım</strong></td><td class="crd-td">Bursa</td><td class="crd-td">40,19, 29,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">711,3k</td></tr>
<tr><td class="crd-td"><strong>Ümraniye</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">41,02, 29,12</td><td class="crd-td">-</td><td class="crd-td">273,1k</td><td class="crd-td">629,5k</td></tr>
<tr><td class="crd-td"><strong>Bahçelievler</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">41, 28,86</td><td class="crd-td">-</td><td class="crd-td">266k</td><td class="crd-td">628,7k</td></tr>
<tr><td class="crd-td"><strong>Niluefer</strong></td><td class="crd-td">Bursa</td><td class="crd-td">40,21, 28,92</td><td class="crd-td">-</td><td class="crd-td">252,9k</td><td class="crd-td">587,6k</td></tr>
<tr><td class="crd-td"><strong>Adapazarı</strong></td><td class="crd-td">Sakarya</td><td class="crd-td">40,78, 30,4</td><td class="crd-td">22,5k</td><td class="crd-td">101,3k</td><td class="crd-td">585,8k</td></tr>
<tr><td class="crd-td"><strong>Üsküdar</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">41,02, 29,01</td><td class="crd-td">-</td><td class="crd-td">247,4k</td><td class="crd-td">574,6k</td></tr>
<tr><td class="crd-td"><strong>Esenler</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">41,04, 28,88</td><td class="crd-td">-</td><td class="crd-td">243,3k</td><td class="crd-td">568,9k</td></tr>
<tr><td class="crd-td"><strong>Sancaktepe</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">41, 29,23</td><td class="crd-td">-</td><td class="crd-td">224,9k</td><td class="crd-td">533,5k</td></tr>
<tr><td class="crd-td"><strong>Sultangazi</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">41,11, 28,87</td><td class="crd-td">-</td><td class="crd-td">203,3k</td><td class="crd-td">477,2k</td></tr>
<tr><td class="crd-td"><strong>Kadıköy</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">40,99, 29,04</td><td class="crd-td">-</td><td class="crd-td">194,6k</td><td class="crd-td">473,1k</td></tr>
<tr><td class="crd-td"><strong>Maltepe</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">40,94, 29,16</td><td class="crd-td">-</td><td class="crd-td">206,1k</td><td class="crd-td">470,3k</td></tr>
<tr><td class="crd-td"><strong>Beylikdüzü</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">40,98, 28,64</td><td class="crd-td">-</td><td class="crd-td">195,2k</td><td class="crd-td">454,6k</td></tr>
<tr><td class="crd-td"><strong>Eyüpsultan</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">41,08, 28,94</td><td class="crd-td">-</td><td class="crd-td">238,8k</td><td class="crd-td">422,9k</td></tr>
<tr><td class="crd-td"><strong>Ataşehir</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">40,98, 29,12</td><td class="crd-td">-</td><td class="crd-td">161,8k</td><td class="crd-td">391,6k</td></tr>
<tr><td class="crd-td"><strong>Sultanbeyli</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">40,96, 29,27</td><td class="crd-td">-</td><td class="crd-td">166,5k</td><td class="crd-td">391,1k</td></tr>
<tr><td class="crd-td"><strong>Sarıyer</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">41,17, 29,05</td><td class="crd-td">-</td><td class="crd-td">150,2k</td><td class="crd-td">356,8k</td></tr>
<tr><td class="crd-td"><strong>Şişli</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">41,06, 28,99</td><td class="crd-td">-</td><td class="crd-td">148k</td><td class="crd-td">344,5k</td></tr>
<tr><td class="crd-td"><strong>Kağıthane</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">41,08, 28,96</td><td class="crd-td">-</td><td class="crd-td">111,4k</td><td class="crd-td">343k</td></tr>
<tr><td class="crd-td"><strong>Arnavutköy</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">41,18, 28,74</td><td class="crd-td">-</td><td class="crd-td">79,9k</td><td class="crd-td">326,5k</td></tr>
<tr><td class="crd-td"><strong>Çorlu</strong></td><td class="crd-td">Tekirdag</td><td class="crd-td">41,16, 27,8</td><td class="crd-td">7,9k</td><td class="crd-td">32k</td><td class="crd-td">321,3k</td></tr>
<tr><td class="crd-td"><strong>Zeytinburnu</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">40,99, 28,9</td><td class="crd-td">-</td><td class="crd-td">123,5k</td><td class="crd-td">303k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading thirty catalogued settlements of the Marmara Region ordered by peak population, with coordinates and 1927AD, 1970AD and peak benchmarks.</figcaption>
</figure>

## Aegean Region

Across western Anatolia, catalogued localities follow Izmir (4,49M peak in 2024AD; 3,07M in 2025AD), Denizli (1,03M peak), Manisa, Usak and Aydin, pairing port commerce with export agriculture and textile towns (Table \ref{tab:reg-aegean}) [@Oguz2021Resilient].

<figure class="crd-table-figure" id="tab:reg-aegean">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Coords</th><th class="crd-th">1927AD</th><th class="crd-th">1970AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>İzmir</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,41, 27,14</td><td class="crd-td">153,9k</td><td class="crd-td">520,7k</td><td class="crd-td">4,49M</td></tr>
<tr><td class="crd-td"><strong>Denizli</strong></td><td class="crd-td">Denizli</td><td class="crd-td">37,77, 29,09</td><td class="crd-td">15,8k</td><td class="crd-td">82,4k</td><td class="crd-td">1,03M</td></tr>
<tr><td class="crd-td"><strong>Buca</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,39, 27,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">529,7k</td></tr>
<tr><td class="crd-td"><strong>Karabağlar</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,38, 27,13</td><td class="crd-td">-</td><td class="crd-td">210,8k</td><td class="crd-td">517,1k</td></tr>
<tr><td class="crd-td"><strong>Bornova</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,48, 27,24</td><td class="crd-td">-</td><td class="crd-td">200,5k</td><td class="crd-td">489k</td></tr>
<tr><td class="crd-td"><strong>Manisa</strong></td><td class="crd-td">Manisa</td><td class="crd-td">38,61, 27,43</td><td class="crd-td">28,7k</td><td class="crd-td">72,3k</td><td class="crd-td">433,7k</td></tr>
<tr><td class="crd-td"><strong>Karşıyaka</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,46, 27,11</td><td class="crd-td">-</td><td class="crd-td">163,8k</td><td class="crd-td">373,9k</td></tr>
<tr><td class="crd-td"><strong>Uşak</strong></td><td class="crd-td">Usak</td><td class="crd-td">38,67, 29,41</td><td class="crd-td">17k</td><td class="crd-td">46,4k</td><td class="crd-td">369,4k</td></tr>
<tr><td class="crd-td"><strong>Konak</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,4, 27,1</td><td class="crd-td">-</td><td class="crd-td">153,8k</td><td class="crd-td">362,5k</td></tr>
<tr><td class="crd-td"><strong>Pamukkale</strong></td><td class="crd-td">Denizli</td><td class="crd-td">37,76, 29,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">353,8k</td></tr>
<tr><td class="crd-td"><strong>Bayraklı</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,46, 27,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">329,3k</td></tr>
<tr><td class="crd-td"><strong>Aydın</strong></td><td class="crd-td">Aydin</td><td class="crd-td">37,85, 27,84</td><td class="crd-td">12k</td><td class="crd-td">50,6k</td><td class="crd-td">303,8k</td></tr>
<tr><td class="crd-td"><strong>Merkezefendi</strong></td><td class="crd-td">Denizli</td><td class="crd-td">37,81, 29,04</td><td class="crd-td">-</td><td class="crd-td">123,5k</td><td class="crd-td">302,5k</td></tr>
<tr><td class="crd-td"><strong>Afyonkarahisar</strong></td><td class="crd-td">Afyonkarahisar</td><td class="crd-td">38,76, 30,54</td><td class="crd-td">23,4k</td><td class="crd-td">53,5k</td><td class="crd-td">299,7k</td></tr>
<tr><td class="crd-td"><strong>Kütahya</strong></td><td class="crd-td">Kütahya</td><td class="crd-td">39,42, 29,98</td><td class="crd-td">17,3k</td><td class="crd-td">62,2k</td><td class="crd-td">275,2k</td></tr>
<tr><td class="crd-td"><strong>Çiğli</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,5, 27,07</td><td class="crd-td">-</td><td class="crd-td">104k</td><td class="crd-td">236,1k</td></tr>
<tr><td class="crd-td"><strong>Torbalı</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,18, 27,34</td><td class="crd-td">-</td><td class="crd-td">16,1k</td><td class="crd-td">207,8k</td></tr>
<tr><td class="crd-td"><strong>Menemen</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,61, 27,07</td><td class="crd-td">-</td><td class="crd-td">16,7k</td><td class="crd-td">200,9k</td></tr>
<tr><td class="crd-td"><strong>Bodrum</strong></td><td class="crd-td">Mugla</td><td class="crd-td">37,04, 27,43</td><td class="crd-td">-</td><td class="crd-td">6,1k</td><td class="crd-td">193k</td></tr>
<tr><td class="crd-td"><strong>Akhisar</strong></td><td class="crd-td">Manisa</td><td class="crd-td">38,92, 27,84</td><td class="crd-td">18k</td><td class="crd-td">48,8k</td><td class="crd-td">180,5k</td></tr>
<tr><td class="crd-td"><strong>Fethiye</strong></td><td class="crd-td">Mugla</td><td class="crd-td">36,64, 29,13</td><td class="crd-td">-</td><td class="crd-td">10,6k</td><td class="crd-td">177,7k</td></tr>
<tr><td class="crd-td"><strong>Turgutlu</strong></td><td class="crd-td">Manisa</td><td class="crd-td">38,5, 27,7</td><td class="crd-td">16,9k</td><td class="crd-td">41k</td><td class="crd-td">175,4k</td></tr>
<tr><td class="crd-td"><strong>Salihli</strong></td><td class="crd-td">Manisa</td><td class="crd-td">38,48, 28,15</td><td class="crd-td">-</td><td class="crd-td">34,5k</td><td class="crd-td">165,1k</td></tr>
<tr><td class="crd-td"><strong>Nazilli</strong></td><td class="crd-td">Aydin</td><td class="crd-td">37,92, 28,32</td><td class="crd-td">-</td><td class="crd-td">45,2k</td><td class="crd-td">162,7k</td></tr>
<tr><td class="crd-td"><strong>Milas</strong></td><td class="crd-td">Mugla</td><td class="crd-td">37,32, 27,78</td><td class="crd-td">-</td><td class="crd-td">16,2k</td><td class="crd-td">147,4k</td></tr>
<tr><td class="crd-td"><strong>Gaziemir</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,33, 27,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">144,1k</td></tr>
<tr><td class="crd-td"><strong>Ödemiş</strong></td><td class="crd-td">Izmir</td><td class="crd-td">38,23, 27,97</td><td class="crd-td">16,8k</td><td class="crd-td">34,6k</td><td class="crd-td">133,7k</td></tr>
<tr><td class="crd-td"><strong>Kuşadası</strong></td><td class="crd-td">Aydin</td><td class="crd-td">37,86, 27,26</td><td class="crd-td">-</td><td class="crd-td">9k</td><td class="crd-td">130,8k</td></tr>
<tr><td class="crd-td"><strong>Söke</strong></td><td class="crd-td">Aydin</td><td class="crd-td">37,75, 27,41</td><td class="crd-td">10,4k</td><td class="crd-td">30k</td><td class="crd-td">124,2k</td></tr>
<tr><td class="crd-td"><strong>Muğla</strong></td><td class="crd-td">Mugla</td><td class="crd-td">37,22, 28,37</td><td class="crd-td">10,1k</td><td class="crd-td">18,6k</td><td class="crd-td">120,6k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading thirty catalogued settlements of the Aegean Region ordered by peak population, with coordinates and 1927AD, 1970AD and peak benchmarks.</figcaption>
</figure>

## Mediterranean Region

The catalogued localities of the Mediterranean littoral span the Cukurova plain and the Gulf of Antalya, led by Antalya (2,43M peak; 1,38M in 2025AD), Adana (1,86M), Mersin (1,81M peak; 1,09M in 2025AD), Kahramanmaras (680,1k peak), Antakya and Tarsus (Table \ref{tab:reg-mediterranean}). Tourism, greenhouse horticulture and southeastern migration propelled Antalya and Alanya into Turkey's fastest-expanding southern hubs [@DEMIR2022Antalya; @Alptekin2024Three].

<figure class="crd-table-figure" id="tab:reg-mediterranean">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Coords</th><th class="crd-th">1927AD</th><th class="crd-th">1970AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Antalya</strong></td><td class="crd-td">Antalya</td><td class="crd-td">36,91, 30,7</td><td class="crd-td">17,4k</td><td class="crd-td">95,6k</td><td class="crd-td">2,43M</td></tr>
<tr><td class="crd-td"><strong>Adana</strong></td><td class="crd-td">Adana</td><td class="crd-td">36,99, 35,33</td><td class="crd-td">72,6k</td><td class="crd-td">347,5k</td><td class="crd-td">1,86M</td></tr>
<tr><td class="crd-td"><strong>Mersin</strong></td><td class="crd-td">Mersin</td><td class="crd-td">36,81, 34,64</td><td class="crd-td">21,2k</td><td class="crd-td">113k</td><td class="crd-td">1,81M</td></tr>
<tr><td class="crd-td"><strong>Kahramanmaraş</strong></td><td class="crd-td">Kahramanmaras</td><td class="crd-td">37,58, 36,93</td><td class="crd-td">26k</td><td class="crd-td">110,8k</td><td class="crd-td">680,1k</td></tr>
<tr><td class="crd-td"><strong>Hatay</strong></td><td class="crd-td">Hatay</td><td class="crd-td">36,5, 36,25</td><td class="crd-td">-</td><td class="crd-td">66,5k</td><td class="crd-td">564,5k</td></tr>
<tr><td class="crd-td"><strong>Muratpaşa</strong></td><td class="crd-td">Antalya</td><td class="crd-td">36,88, 30,77</td><td class="crd-td">-</td><td class="crd-td">221,2k</td><td class="crd-td">522,4k</td></tr>
<tr><td class="crd-td"><strong>Antakya</strong></td><td class="crd-td">Hatay</td><td class="crd-td">36,21, 36,16</td><td class="crd-td">-</td><td class="crd-td">66,5k</td><td class="crd-td">399k</td></tr>
<tr><td class="crd-td"><strong>Çukurova</strong></td><td class="crd-td">Adana</td><td class="crd-td">37,05, 35,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">387,4k</td></tr>
<tr><td class="crd-td"><strong>Alanya</strong></td><td class="crd-td">Antalya</td><td class="crd-td">36,54, 32</td><td class="crd-td">-</td><td class="crd-td">15k</td><td class="crd-td">364,2k</td></tr>
<tr><td class="crd-td"><strong>Tarsus</strong></td><td class="crd-td">Mersin</td><td class="crd-td">36,92, 34,89</td><td class="crd-td">21,9k</td><td class="crd-td">85,6k</td><td class="crd-td">350,7k</td></tr>
<tr><td class="crd-td"><strong>Akdeniz</strong></td><td class="crd-td">Mersin</td><td class="crd-td">36,81, 34,62</td><td class="crd-td">-</td><td class="crd-td">135,5k</td><td class="crd-td">327,6k</td></tr>
<tr><td class="crd-td"><strong>Osmaniye</strong></td><td class="crd-td">Osmaniye</td><td class="crd-td">37,07, 36,25</td><td class="crd-td">5k</td><td class="crd-td">46,4k</td><td class="crd-td">264,4k</td></tr>
<tr><td class="crd-td"><strong>Yenişehir</strong></td><td class="crd-td">Mersin</td><td class="crd-td">36,78, 34,6</td><td class="crd-td">-</td><td class="crd-td">95,3k</td><td class="crd-td">258,7k</td></tr>
<tr><td class="crd-td"><strong>Isparta</strong></td><td class="crd-td">Isparta</td><td class="crd-td">37,76, 30,55</td><td class="crd-td">16k</td><td class="crd-td">50,9k</td><td class="crd-td">258,4k</td></tr>
<tr><td class="crd-td"><strong>Manavgat</strong></td><td class="crd-td">Antalya</td><td class="crd-td">36,79, 31,44</td><td class="crd-td">-</td><td class="crd-td">50,1k</td><td class="crd-td">252,9k</td></tr>
<tr><td class="crd-td"><strong>İskenderun</strong></td><td class="crd-td">Hatay</td><td class="crd-td">36,59, 36,17</td><td class="crd-td">-</td><td class="crd-td">79,3k</td><td class="crd-td">251,7k</td></tr>
<tr><td class="crd-td"><strong>Mezitli</strong></td><td class="crd-td">Mersin</td><td class="crd-td">36,75, 34,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">194k</td></tr>
<tr><td class="crd-td"><strong>Konyaaltı</strong></td><td class="crd-td">Antalya</td><td class="crd-td">36,84, 30,48</td><td class="crd-td">-</td><td class="crd-td">77,1k</td><td class="crd-td">190,5k</td></tr>
<tr><td class="crd-td"><strong>Sarıçam</strong></td><td class="crd-td">Adana</td><td class="crd-td">37,04, 35,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">173,2k</td></tr>
<tr><td class="crd-td"><strong>Ceyhan</strong></td><td class="crd-td">Adana</td><td class="crd-td">37,02, 35,82</td><td class="crd-td">-</td><td class="crd-td">51,2k</td><td class="crd-td">161,2k</td></tr>
<tr><td class="crd-td"><strong>Erdemli</strong></td><td class="crd-td">Mersin</td><td class="crd-td">36,6, 34,31</td><td class="crd-td">-</td><td class="crd-td">22,4k</td><td class="crd-td">151,9k</td></tr>
<tr><td class="crd-td"><strong>Elbistan</strong></td><td class="crd-td">Kahramanmaras</td><td class="crd-td">38,21, 37,2</td><td class="crd-td">-</td><td class="crd-td">17,9k</td><td class="crd-td">142,8k</td></tr>
<tr><td class="crd-td"><strong>Serik</strong></td><td class="crd-td">Antalya</td><td class="crd-td">36,92, 31,1</td><td class="crd-td">-</td><td class="crd-td">17,4k</td><td class="crd-td">139,5k</td></tr>
<tr><td class="crd-td"><strong>Kozan</strong></td><td class="crd-td">Adana</td><td class="crd-td">37,46, 35,82</td><td class="crd-td">-</td><td class="crd-td">26,1k</td><td class="crd-td">133k</td></tr>
<tr><td class="crd-td"><strong>Kapaklı</strong></td><td class="crd-td">Antalya</td><td class="crd-td">36,23, 29,89</td><td class="crd-td">-</td><td class="crd-td">26,8k</td><td class="crd-td">132,9k</td></tr>
<tr><td class="crd-td"><strong>Silifke</strong></td><td class="crd-td">Mersin</td><td class="crd-td">36,38, 33,93</td><td class="crd-td">-</td><td class="crd-td">14,6k</td><td class="crd-td">132,7k</td></tr>
<tr><td class="crd-td"><strong>Dörtyol</strong></td><td class="crd-td">Hatay</td><td class="crd-td">36,84, 36,23</td><td class="crd-td">-</td><td class="crd-td">12,9k</td><td class="crd-td">128,9k</td></tr>
<tr><td class="crd-td"><strong>Samandağ</strong></td><td class="crd-td">Hatay</td><td class="crd-td">36,08, 35,98</td><td class="crd-td">-</td><td class="crd-td">19,2k</td><td class="crd-td">124,2k</td></tr>
<tr><td class="crd-td"><strong>Kadirli</strong></td><td class="crd-td">Osmaniye</td><td class="crd-td">37,37, 36,1</td><td class="crd-td">-</td><td class="crd-td">28,1k</td><td class="crd-td">124,1k</td></tr>
<tr><td class="crd-td"><strong>Kırıkhan</strong></td><td class="crd-td">Hatay</td><td class="crd-td">36,5, 36,36</td><td class="crd-td">-</td><td class="crd-td">31k</td><td class="crd-td">121k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading thirty catalogued settlements of the Mediterranean Region ordered by peak population, with coordinates and 1927AD, 1970AD and peak benchmarks.</figcaption>
</figure>

## Central Anatolia Region

On the central Anatolian plateau, catalogued localities centre on Ankara (5,8M peak in 2023AD; 5,41M in 2025AD), Konya (2,23M peak; 1,42M in 2025AD), Kayseri (1,39M peak; 1,03M in 2025AD), Kecioren (909,8k), Eskisehir (871,2k peak; 822,9k in 2025AD), Mamak (647,3k), Etimesgut (606,5k) and Sivas, alongside Republican industrial creation Kirikkale (1925AD foundation) (Table \ref{tab:reg-central}). Metropolitan expansion transformed steppe wetlands around Ankara while smaller plateau market towns and villages grew slowly [@Dolcerocca2024Restoratio; @Karakoc2026Concentrat].

<figure class="crd-table-figure" id="tab:reg-central">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Coords</th><th class="crd-th">1927AD</th><th class="crd-th">1970AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ankara</strong></td><td class="crd-td">Ankara</td><td class="crd-td">39,92, 32,85</td><td class="crd-td">74,6k</td><td class="crd-td">1,24M</td><td class="crd-td">5,8M</td></tr>
<tr><td class="crd-td"><strong>Konya</strong></td><td class="crd-td">Konya</td><td class="crd-td">37,87, 32,48</td><td class="crd-td">47,5k</td><td class="crd-td">200,5k</td><td class="crd-td">2,23M</td></tr>
<tr><td class="crd-td"><strong>Kayseri</strong></td><td class="crd-td">Kayseri</td><td class="crd-td">38,73, 35,49</td><td class="crd-td">39,1k</td><td class="crd-td">161k</td><td class="crd-td">1,45M</td></tr>
<tr><td class="crd-td"><strong>Keçiören</strong></td><td class="crd-td">Ankara</td><td class="crd-td">39,98, 32,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">952,5k</td></tr>
<tr><td class="crd-td"><strong>Eskişehir</strong></td><td class="crd-td">Eskisehir</td><td class="crd-td">39,78, 30,52</td><td class="crd-td">32,3k</td><td class="crd-td">216,4k</td><td class="crd-td">921,6k</td></tr>
<tr><td class="crd-td"><strong>Mamak</strong></td><td class="crd-td">Ankara</td><td class="crd-td">39,93, 32,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">680,6k</td></tr>
<tr><td class="crd-td"><strong>Etimesgut</strong></td><td class="crd-td">Ankara</td><td class="crd-td">39,95, 32,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">620k</td></tr>
<tr><td class="crd-td"><strong>Melikgazi</strong></td><td class="crd-td">Kayseri</td><td class="crd-td">38,72, 35,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">586,3k</td></tr>
<tr><td class="crd-td"><strong>Sincan</strong></td><td class="crd-td">Ankara</td><td class="crd-td">39,97, 32,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">571,9k</td></tr>
<tr><td class="crd-td"><strong>Odunpazarı</strong></td><td class="crd-td">Eskisehir</td><td class="crd-td">39,76, 30,53</td><td class="crd-td">-</td><td class="crd-td">188k</td><td class="crd-td">428,7k</td></tr>
<tr><td class="crd-td"><strong>Altındağ</strong></td><td class="crd-td">Ankara</td><td class="crd-td">39,95, 32,86</td><td class="crd-td">-</td><td class="crd-td">166,7k</td><td class="crd-td">390,5k</td></tr>
<tr><td class="crd-td"><strong>Sivas</strong></td><td class="crd-td">Sivas</td><td class="crd-td">39,75, 37,02</td><td class="crd-td">28,5k</td><td class="crd-td">134k</td><td class="crd-td">380,9k</td></tr>
<tr><td class="crd-td"><strong>Tepebaşı</strong></td><td class="crd-td">Eskisehir</td><td class="crd-td">39,78, 30,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">379,2k</td></tr>
<tr><td class="crd-td"><strong>Karatay</strong></td><td class="crd-td">Konya</td><td class="crd-td">37,87, 32,53</td><td class="crd-td">-</td><td class="crd-td">151,8k</td><td class="crd-td">376,6k</td></tr>
<tr><td class="crd-td"><strong>Meram</strong></td><td class="crd-td">Konya</td><td class="crd-td">37,84, 32,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">358,1k</td></tr>
<tr><td class="crd-td"><strong>Batıkent</strong></td><td class="crd-td">Ankara</td><td class="crd-td">39,97, 32,73</td><td class="crd-td">-</td><td class="crd-td">142,9k</td><td class="crd-td">329,4k</td></tr>
<tr><td class="crd-td"><strong>Aksaray</strong></td><td class="crd-td">Aksaray</td><td class="crd-td">38,37, 34,03</td><td class="crd-td">7,3k</td><td class="crd-td">30,1k</td><td class="crd-td">327,6k</td></tr>
<tr><td class="crd-td"><strong>Niğde</strong></td><td class="crd-td">Nigde</td><td class="crd-td">37,97, 34,68</td><td class="crd-td">9,5k</td><td class="crd-td">26,9k</td><td class="crd-td">224,3k</td></tr>
<tr><td class="crd-td"><strong>Kırıkkale</strong></td><td class="crd-td">Kirikkale</td><td class="crd-td">39,85, 33,51</td><td class="crd-td">-</td><td class="crd-td">91,7k</td><td class="crd-td">208k</td></tr>
<tr><td class="crd-td"><strong>Karaman</strong></td><td class="crd-td">Karaman</td><td class="crd-td">37,18, 33,22</td><td class="crd-td">8,2k</td><td class="crd-td">35,1k</td><td class="crd-td">182,9k</td></tr>
<tr><td class="crd-td"><strong>Talas</strong></td><td class="crd-td">Kayseri</td><td class="crd-td">38,69, 35,55</td><td class="crd-td">-</td><td class="crd-td">19,8k</td><td class="crd-td">171,4k</td></tr>
<tr><td class="crd-td"><strong>Gölbaşı</strong></td><td class="crd-td">Ankara</td><td class="crd-td">39,79, 32,81</td><td class="crd-td">-</td><td class="crd-td">15,9k</td><td class="crd-td">165,2k</td></tr>
<tr><td class="crd-td"><strong>Pursaklar</strong></td><td class="crd-td">Ankara</td><td class="crd-td">40,03, 32,9</td><td class="crd-td">-</td><td class="crd-td">820</td><td class="crd-td">162,4k</td></tr>
<tr><td class="crd-td"><strong>Kırşehir</strong></td><td class="crd-td">Kirsehir</td><td class="crd-td">39,15, 34,16</td><td class="crd-td">-</td><td class="crd-td">33,2k</td><td class="crd-td">157,2k</td></tr>
<tr><td class="crd-td"><strong>Ereğli</strong></td><td class="crd-td">Konya</td><td class="crd-td">37,51, 34,05</td><td class="crd-td">-</td><td class="crd-td">45,1k</td><td class="crd-td">156,3k</td></tr>
<tr><td class="crd-td"><strong>Nevşehir</strong></td><td class="crd-td">Nevsehir</td><td class="crd-td">38,62, 34,71</td><td class="crd-td">13,4k</td><td class="crd-td">25,7k</td><td class="crd-td">153,1k</td></tr>
<tr><td class="crd-td"><strong>Polatlı</strong></td><td class="crd-td">Ankara</td><td class="crd-td">39,58, 32,14</td><td class="crd-td">-</td><td class="crd-td">32,3k</td><td class="crd-td">128,4k</td></tr>
<tr><td class="crd-td"><strong>Yozgat</strong></td><td class="crd-td">Yozgat</td><td class="crd-td">39,82, 34,8</td><td class="crd-td">11k</td><td class="crd-td">27k</td><td class="crd-td">105,2k</td></tr>
<tr><td class="crd-td"><strong>Çubuk</strong></td><td class="crd-td">Ankara</td><td class="crd-td">40,24, 33,03</td><td class="crd-td">-</td><td class="crd-td">25,9k</td><td class="crd-td">95,4k</td></tr>
<tr><td class="crd-td"><strong>Çankırı</strong></td><td class="crd-td">Çankiri</td><td class="crd-td">40,6, 33,62</td><td class="crd-td">-</td><td class="crd-td">26,1k</td><td class="crd-td">95,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading thirty catalogued settlements of the Central Anatolia Region ordered by peak population, with coordinates and 1927AD, 1970AD and peak benchmarks.</figcaption>
</figure>

## Black Sea Region

Along the Pontic littoral and northern valleys, catalogued localities are headed by Trabzon (824,4k peak), Samsun (676,3k peak), Corum, Ordu and state-industrial Karabuk (1937AD foundation) (Table \ref{tab:reg-blacksea}). Steep coastal topography constrained broad metropolitan sprawl while coal-port Zonguldak experienced slow late-century brownfield transition [@Ergen2013Methodolog].

<figure class="crd-table-figure" id="tab:reg-blacksea">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Coords</th><th class="crd-th">1927AD</th><th class="crd-th">1970AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Trabzon</strong></td><td class="crd-td">Trabzon</td><td class="crd-td">41,01, 39,73</td><td class="crd-td">24,6k</td><td class="crd-td">80,8k</td><td class="crd-td">824,4k</td></tr>
<tr><td class="crd-td"><strong>Samsun</strong></td><td class="crd-td">Samsun</td><td class="crd-td">41,28, 36,34</td><td class="crd-td">30,4k</td><td class="crd-td">134,1k</td><td class="crd-td">676,3k</td></tr>
<tr><td class="crd-td"><strong>Çorum</strong></td><td class="crd-td">Çorum</td><td class="crd-td">40,55, 34,95</td><td class="crd-td">19,7k</td><td class="crd-td">54,6k</td><td class="crd-td">281,2k</td></tr>
<tr><td class="crd-td"><strong>Kayaiçi</strong></td><td class="crd-td">Trabzon</td><td class="crd-td">40,66, 39,9</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">265,5k</td></tr>
<tr><td class="crd-td"><strong>Karaköprü</strong></td><td class="crd-td">Amasya</td><td class="crd-td">40,55, 35,78</td><td class="crd-td">-</td><td class="crd-td">22,9k</td><td class="crd-td">251,9k</td></tr>
<tr><td class="crd-td"><strong>Düzce</strong></td><td class="crd-td">Düzce</td><td class="crd-td">40,84, 31,16</td><td class="crd-td">5,9k</td><td class="crd-td">28,2k</td><td class="crd-td">240,6k</td></tr>
<tr><td class="crd-td"><strong>Ordu</strong></td><td class="crd-td">Ordu</td><td class="crd-td">40,98, 37,89</td><td class="crd-td">8,2k</td><td class="crd-td">38,5k</td><td class="crd-td">235,1k</td></tr>
<tr><td class="crd-td"><strong>Sinop</strong></td><td class="crd-td">Sinop</td><td class="crd-td">42,03, 35,16</td><td class="crd-td">5k</td><td class="crd-td">15,1k</td><td class="crd-td">218,4k</td></tr>
<tr><td class="crd-td"><strong>Cebeci</strong></td><td class="crd-td">Samsun</td><td class="crd-td">41,12, 35,3</td><td class="crd-td">-</td><td class="crd-td">931</td><td class="crd-td">204,6k</td></tr>
<tr><td class="crd-td"><strong>Bolu</strong></td><td class="crd-td">Bolu</td><td class="crd-td">40,74, 31,61</td><td class="crd-td">7,2k</td><td class="crd-td">26,9k</td><td class="crd-td">194,1k</td></tr>
<tr><td class="crd-td"><strong>Karadeniz Ereğli</strong></td><td class="crd-td">Zonguldak</td><td class="crd-td">41,28, 31,42</td><td class="crd-td">-</td><td class="crd-td">81,3k</td><td class="crd-td">192k</td></tr>
<tr><td class="crd-td"><strong>Tokat</strong></td><td class="crd-td">Tokat</td><td class="crd-td">40,31, 36,55</td><td class="crd-td">22,4k</td><td class="crd-td">44,1k</td><td class="crd-td">170,4k</td></tr>
<tr><td class="crd-td"><strong>Kastamonu</strong></td><td class="crd-td">Kastamonu</td><td class="crd-td">41,38, 33,78</td><td class="crd-td">14,6k</td><td class="crd-td">29,3k</td><td class="crd-td">152,5k</td></tr>
<tr><td class="crd-td"><strong>Rize</strong></td><td class="crd-td">Rize</td><td class="crd-td">41,02, 40,52</td><td class="crd-td">13,9k</td><td class="crd-td">30,5k</td><td class="crd-td">148k</td></tr>
<tr><td class="crd-td"><strong>Bafra</strong></td><td class="crd-td">Samsun</td><td class="crd-td">41,57, 35,9</td><td class="crd-td">-</td><td class="crd-td">28,9k</td><td class="crd-td">143,4k</td></tr>
<tr><td class="crd-td"><strong>Çarşamba</strong></td><td class="crd-td">Samsun</td><td class="crd-td">41,2, 36,72</td><td class="crd-td">-</td><td class="crd-td">20,5k</td><td class="crd-td">140,7k</td></tr>
<tr><td class="crd-td"><strong>Kartepe</strong></td><td class="crd-td">Kastamonu</td><td class="crd-td">41,61, 34,32</td><td class="crd-td">-</td><td class="crd-td">40k</td><td class="crd-td">134k</td></tr>
<tr><td class="crd-td"><strong>Ünye</strong></td><td class="crd-td">Ordu</td><td class="crd-td">41,14, 37,29</td><td class="crd-td">-</td><td class="crd-td">19,4k</td><td class="crd-td">132,4k</td></tr>
<tr><td class="crd-td"><strong>Karabük</strong></td><td class="crd-td">Karabük</td><td class="crd-td">41,2, 32,63</td><td class="crd-td">-</td><td class="crd-td">65k</td><td class="crd-td">132k</td></tr>
<tr><td class="crd-td"><strong>Giresun</strong></td><td class="crd-td">Giresun</td><td class="crd-td">40,92, 38,39</td><td class="crd-td">11,8k</td><td class="crd-td">32,5k</td><td class="crd-td">131,1k</td></tr>
<tr><td class="crd-td"><strong>Akçaabat</strong></td><td class="crd-td">Trabzon</td><td class="crd-td">41,02, 39,57</td><td class="crd-td">-</td><td class="crd-td">21,8k</td><td class="crd-td">129,3k</td></tr>
<tr><td class="crd-td"><strong>Fatsa</strong></td><td class="crd-td">Ordu</td><td class="crd-td">41,03, 37,5</td><td class="crd-td">-</td><td class="crd-td">14,3k</td><td class="crd-td">126,8k</td></tr>
<tr><td class="crd-td"><strong>Sur</strong></td><td class="crd-td">Trabzon</td><td class="crd-td">40,74, 40,27</td><td class="crd-td">-</td><td class="crd-td">52,1k</td><td class="crd-td">122,6k</td></tr>
<tr><td class="crd-td"><strong>Amasya</strong></td><td class="crd-td">Amasya</td><td class="crd-td">40,65, 35,83</td><td class="crd-td">12,8k</td><td class="crd-td">36,6k</td><td class="crd-td">121,3k</td></tr>
<tr><td class="crd-td"><strong>Zonguldak</strong></td><td class="crd-td">Zonguldak</td><td class="crd-td">41,45, 31,79</td><td class="crd-td">11,9k</td><td class="crd-td">77,1k</td><td class="crd-td">118k</td></tr>
<tr><td class="crd-td"><strong>Darıca</strong></td><td class="crd-td">Artvin</td><td class="crd-td">40,73, 41,79</td><td class="crd-td">-</td><td class="crd-td">838</td><td class="crd-td">114k</td></tr>
<tr><td class="crd-td"><strong>Vezirköprü</strong></td><td class="crd-td">Samsun</td><td class="crd-td">41,14, 35,45</td><td class="crd-td">-</td><td class="crd-td">13,3k</td><td class="crd-td">101,7k</td></tr>
<tr><td class="crd-td"><strong>Çaycuma</strong></td><td class="crd-td">Zonguldak</td><td class="crd-td">41,43, 32,08</td><td class="crd-td">-</td><td class="crd-td">10,2k</td><td class="crd-td">91,6k</td></tr>
<tr><td class="crd-td"><strong>Bartın</strong></td><td class="crd-td">Bartın</td><td class="crd-td">41,64, 32,34</td><td class="crd-td">-</td><td class="crd-td">15,9k</td><td class="crd-td">87,3k</td></tr>
<tr><td class="crd-td"><strong>Alibeyköyü</strong></td><td class="crd-td">Düzce</td><td class="crd-td">40,84, 30,89</td><td class="crd-td">-</td><td class="crd-td">36,2k</td><td class="crd-td">83,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading thirty catalogued settlements of the Black Sea Region ordered by peak population, with coordinates and 1927AD, 1970AD and peak benchmarks.</figcaption>
</figure>

## Eastern Anatolia Region

Across the rugged eastern highlands, catalogued localities cluster in intermontane basins led by Van (1,13M peak in 2023AD), Erzurum (767,8k peak), Malatya (649,1k peak) and Elazig (Table \ref{tab:reg-eastern}). Persistent out-migration toward Marmara and the Mediterranean held down smaller basin towns and mountain villages even as regional capitals absorbed rural highland populations [@Alptekin2024Three; @Deniz2020Assessing].

<figure class="crd-table-figure" id="tab:reg-eastern">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Coords</th><th class="crd-th">1927AD</th><th class="crd-th">1970AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Van</strong></td><td class="crd-td">Van</td><td class="crd-td">38,49, 43,38</td><td class="crd-td">7k</td><td class="crd-td">46,8k</td><td class="crd-td">1,13M</td></tr>
<tr><td class="crd-td"><strong>Erzurum</strong></td><td class="crd-td">Erzurum</td><td class="crd-td">39,91, 41,28</td><td class="crd-td">31,5k</td><td class="crd-td">133,4k</td><td class="crd-td">767,8k</td></tr>
<tr><td class="crd-td"><strong>Malatya</strong></td><td class="crd-td">Malatya</td><td class="crd-td">38,35, 38,32</td><td class="crd-td">20,7k</td><td class="crd-td">128,8k</td><td class="crd-td">750,5k</td></tr>
<tr><td class="crd-td"><strong>Elâzığ</strong></td><td class="crd-td">Elazig</td><td class="crd-td">38,67, 39,22</td><td class="crd-td">20,1k</td><td class="crd-td">107,4k</td><td class="crd-td">443,4k</td></tr>
<tr><td class="crd-td"><strong>Bayrampaşa</strong></td><td class="crd-td">Kars</td><td class="crd-td">40,61, 43,1</td><td class="crd-td">-</td><td class="crd-td">9,7k</td><td class="crd-td">321,1k</td></tr>
<tr><td class="crd-td"><strong>Battalgazi</strong></td><td class="crd-td">Malatya</td><td class="crd-td">38,42, 38,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">309,9k</td></tr>
<tr><td class="crd-td"><strong>Yeşilyurt</strong></td><td class="crd-td">Malatya</td><td class="crd-td">38,3, 38,25</td><td class="crd-td">-</td><td class="crd-td">12,2k</td><td class="crd-td">304,8k</td></tr>
<tr><td class="crd-td"><strong>Muş</strong></td><td class="crd-td">Mus</td><td class="crd-td">38,73, 41,48</td><td class="crd-td">4,3k</td><td class="crd-td">23,1k</td><td class="crd-td">193,4k</td></tr>
<tr><td class="crd-td"><strong>Palandöken</strong></td><td class="crd-td">Erzurum</td><td class="crd-td">39,89, 41,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">178,2k</td></tr>
<tr><td class="crd-td"><strong>Erciş</strong></td><td class="crd-td">Van</td><td class="crd-td">39,03, 43,36</td><td class="crd-td">-</td><td class="crd-td">19,5k</td><td class="crd-td">176,7k</td></tr>
<tr><td class="crd-td"><strong>Tuşba</strong></td><td class="crd-td">Van</td><td class="crd-td">38,52, 43,35</td><td class="crd-td">-</td><td class="crd-td">73,4k</td><td class="crd-td">169,8k</td></tr>
<tr><td class="crd-td"><strong>Bingöl</strong></td><td class="crd-td">Bingöl</td><td class="crd-td">38,88, 40,49</td><td class="crd-td">-</td><td class="crd-td">17,2k</td><td class="crd-td">160,2k</td></tr>
<tr><td class="crd-td"><strong>Erzincan</strong></td><td class="crd-td">Erzincan</td><td class="crd-td">39,74, 39,49</td><td class="crd-td">16,1k</td><td class="crd-td">58,4k</td><td class="crd-td">157,5k</td></tr>
<tr><td class="crd-td"><strong>Ağrı</strong></td><td class="crd-td">Agri</td><td class="crd-td">39,71, 43,04</td><td class="crd-td">4,2k</td><td class="crd-td">29,6k</td><td class="crd-td">149,2k</td></tr>
<tr><td class="crd-td"><strong>Iğdır</strong></td><td class="crd-td">Iğdir</td><td class="crd-td">39,92, 44,05</td><td class="crd-td">3,7k</td><td class="crd-td">21,4k</td><td class="crd-td">137,6k</td></tr>
<tr><td class="crd-td"><strong>Edremit</strong></td><td class="crd-td">Van</td><td class="crd-td">38,42, 43,26</td><td class="crd-td">-</td><td class="crd-td">53,2k</td><td class="crd-td">131,7k</td></tr>
<tr><td class="crd-td"><strong>Patnos</strong></td><td class="crd-td">Agri</td><td class="crd-td">39,22, 42,86</td><td class="crd-td">-</td><td class="crd-td">10,9k</td><td class="crd-td">122,8k</td></tr>
<tr><td class="crd-td"><strong>Doğubayazıt</strong></td><td class="crd-td">Agri</td><td class="crd-td">39,55, 44,08</td><td class="crd-td">-</td><td class="crd-td">13,4k</td><td class="crd-td">121,3k</td></tr>
<tr><td class="crd-td"><strong>Yüksekova</strong></td><td class="crd-td">Hakkari</td><td class="crd-td">37,57, 44,29</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">119,8k</td></tr>
<tr><td class="crd-td"><strong>Kazımkarabekir</strong></td><td class="crd-td">Agri</td><td class="crd-td">39,73, 43,06</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">107,1k</td></tr>
<tr><td class="crd-td"><strong>Kars</strong></td><td class="crd-td">Kars</td><td class="crd-td">40,6, 43,09</td><td class="crd-td">13,9k</td><td class="crd-td">53,3k</td><td class="crd-td">96,9k</td></tr>
<tr><td class="crd-td"><strong>Tatvan</strong></td><td class="crd-td">Bitlis</td><td class="crd-td">38,49, 42,28</td><td class="crd-td">-</td><td class="crd-td">20,2k</td><td class="crd-td">92,7k</td></tr>
<tr><td class="crd-td"><strong>Akcapinar</strong></td><td class="crd-td">Tunceli</td><td class="crd-td">38,95, 38,94</td><td class="crd-td">-</td><td class="crd-td">37,5k</td><td class="crd-td">91,2k</td></tr>
<tr><td class="crd-td"><strong>Bulanık</strong></td><td class="crd-td">Mus</td><td class="crd-td">39,09, 42,27</td><td class="crd-td">-</td><td class="crd-td">13,6k</td><td class="crd-td">80,5k</td></tr>
<tr><td class="crd-td"><strong>Hakkâri</strong></td><td class="crd-td">Hakkari</td><td class="crd-td">37,57, 43,74</td><td class="crd-td">-</td><td class="crd-td">9,6k</td><td class="crd-td">77,7k</td></tr>
<tr><td class="crd-td"><strong>Özalp</strong></td><td class="crd-td">Van</td><td class="crd-td">38,65, 43,99</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">73k</td></tr>
<tr><td class="crd-td"><strong>Canik</strong></td><td class="crd-td">Erzurum</td><td class="crd-td">40,4, 42,18</td><td class="crd-td">-</td><td class="crd-td">30,5k</td><td class="crd-td">71,5k</td></tr>
<tr><td class="crd-td"><strong>Çaldıran</strong></td><td class="crd-td">Van</td><td class="crd-td">39,14, 43,91</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">66,7k</td></tr>
<tr><td class="crd-td"><strong>Ilıca</strong></td><td class="crd-td">Erzurum</td><td class="crd-td">39,95, 41,1</td><td class="crd-td">-</td><td class="crd-td">29,4k</td><td class="crd-td">66,2k</td></tr>
<tr><td class="crd-td"><strong>Aziziye</strong></td><td class="crd-td">Erzurum</td><td class="crd-td">39,95, 41,13</td><td class="crd-td">-</td><td class="crd-td">7,2k</td><td class="crd-td">65,6k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Leading thirty catalogued settlements of the Eastern Anatolia Region ordered by peak population, with coordinates and 1927AD, 1970AD and peak benchmarks.</figcaption>
</figure>

## Southeastern Anatolia Region

Upper Mesopotamia hosts catalogued localities anchored by Gaziantep (1,8M peak in 2023AD; 1,75M in 2025AD), Diyarbakir (1,73M peak; 1,13M in 2025AD), Sanliurfa (1,05M peak), Sehitkamil (774,2k), Batman (1940AD oil-boom foundation) and border Kilis (Table \ref{tab:reg-southeastern}). High baseline fertility, irrigation development and post-2011AD Syrian refugee inflows generated rapid late-century urban growth across the southern frontier [@INCILI2020Kilis; @Oguz2021Resilient].

<figure class="crd-table-figure" id="tab:reg-southeastern">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Coords</th><th class="crd-th">1927AD</th><th class="crd-th">1970AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gaziantep</strong></td><td class="crd-td">Gaziantep</td><td class="crd-td">37,06, 37,38</td><td class="crd-td">40k</td><td class="crd-td">227,7k</td><td class="crd-td">2,22M</td></tr>
<tr><td class="crd-td"><strong>Diyarbakır</strong></td><td class="crd-td">Diyarbakir</td><td class="crd-td">37,91, 40,22</td><td class="crd-td">30,7k</td><td class="crd-td">149,6k</td><td class="crd-td">1,83M</td></tr>
<tr><td class="crd-td"><strong>Şanlıurfa</strong></td><td class="crd-td">Sanliurfa</td><td class="crd-td">37,17, 38,79</td><td class="crd-td">29,1k</td><td class="crd-td">100,7k</td><td class="crd-td">1,05M</td></tr>
<tr><td class="crd-td"><strong>Şehitkâmil</strong></td><td class="crd-td">Gaziantep</td><td class="crd-td">37,07, 37,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">816,6k</td></tr>
<tr><td class="crd-td"><strong>Batman</strong></td><td class="crd-td">Batman</td><td class="crd-td">37,89, 41,13</td><td class="crd-td">-</td><td class="crd-td">45k</td><td class="crd-td">481,1k</td></tr>
<tr><td class="crd-td"><strong>Bağlar</strong></td><td class="crd-td">Diyarbakir</td><td class="crd-td">37,92, 40,18</td><td class="crd-td">-</td><td class="crd-td">167,7k</td><td class="crd-td">402,3k</td></tr>
<tr><td class="crd-td"><strong>Eyyübiye</strong></td><td class="crd-td">Sanliurfa</td><td class="crd-td">37,15, 38,78</td><td class="crd-td">-</td><td class="crd-td">163k</td><td class="crd-td">397,4k</td></tr>
<tr><td class="crd-td"><strong>Kayapınar</strong></td><td class="crd-td">Diyarbakir</td><td class="crd-td">37,94, 40,19</td><td class="crd-td">-</td><td class="crd-td">153,7k</td><td class="crd-td">379,2k</td></tr>
<tr><td class="crd-td"><strong>Adıyaman</strong></td><td class="crd-td">Adiyaman</td><td class="crd-td">37,76, 38,28</td><td class="crd-td">8,6k</td><td class="crd-td">31,3k</td><td class="crd-td">290,9k</td></tr>
<tr><td class="crd-td"><strong>Siverek</strong></td><td class="crd-td">Sanliurfa</td><td class="crd-td">37,76, 39,32</td><td class="crd-td">15k</td><td class="crd-td">34,1k</td><td class="crd-td">267,9k</td></tr>
<tr><td class="crd-td"><strong>Kızıltepe</strong></td><td class="crd-td">Mardin</td><td class="crd-td">37,19, 40,58</td><td class="crd-td">-</td><td class="crd-td">16,4k</td><td class="crd-td">267,2k</td></tr>
<tr><td class="crd-td"><strong>Viranşehir</strong></td><td class="crd-td">Sanliurfa</td><td class="crd-td">37,22, 39,76</td><td class="crd-td">-</td><td class="crd-td">17,9k</td><td class="crd-td">207,3k</td></tr>
<tr><td class="crd-td"><strong>Karaköprü</strong></td><td class="crd-td">Sanliurfa</td><td class="crd-td">37,18, 38,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">205,2k</td></tr>
<tr><td class="crd-td"><strong>Mardin</strong></td><td class="crd-td">Mardin</td><td class="crd-td">37,31, 40,74</td><td class="crd-td">23,3k</td><td class="crd-td">33,7k</td><td class="crd-td">189,8k</td></tr>
<tr><td class="crd-td"><strong>Artuklu</strong></td><td class="crd-td">Mardin</td><td class="crd-td">37,32, 40,72</td><td class="crd-td">-</td><td class="crd-td">75,6k</td><td class="crd-td">189,8k</td></tr>
<tr><td class="crd-td"><strong>Siirt</strong></td><td class="crd-td">Siirt</td><td class="crd-td">37,93, 41,94</td><td class="crd-td">15,1k</td><td class="crd-td">29,5k</td><td class="crd-td">168,2k</td></tr>
<tr><td class="crd-td"><strong>İlkadım</strong></td><td class="crd-td">Mardin</td><td class="crd-td">37,27, 41,07</td><td class="crd-td">-</td><td class="crd-td">67,3k</td><td class="crd-td">158,3k</td></tr>
<tr><td class="crd-td"><strong>Nizip</strong></td><td class="crd-td">Gaziantep</td><td class="crd-td">37,01, 37,79</td><td class="crd-td">-</td><td class="crd-td">30,2k</td><td class="crd-td">148,4k</td></tr>
<tr><td class="crd-td"><strong>Cizre</strong></td><td class="crd-td">Sirnak</td><td class="crd-td">37,33, 42,18</td><td class="crd-td">-</td><td class="crd-td">11,1k</td><td class="crd-td">143,1k</td></tr>
<tr><td class="crd-td"><strong>Ergani</strong></td><td class="crd-td">Diyarbakir</td><td class="crd-td">38,27, 39,75</td><td class="crd-td">-</td><td class="crd-td">18,5k</td><td class="crd-td">136,1k</td></tr>
<tr><td class="crd-td"><strong>Silopi</strong></td><td class="crd-td">Sirnak</td><td class="crd-td">37,24, 42,46</td><td class="crd-td">-</td><td class="crd-td">28k</td><td class="crd-td">134,8k</td></tr>
<tr><td class="crd-td"><strong>Akçakale</strong></td><td class="crd-td">Sanliurfa</td><td class="crd-td">36,71, 38,95</td><td class="crd-td">-</td><td class="crd-td">18,1k</td><td class="crd-td">123,7k</td></tr>
<tr><td class="crd-td"><strong>Kâhta</strong></td><td class="crd-td">Adiyaman</td><td class="crd-td">37,79, 38,62</td><td class="crd-td">-</td><td class="crd-td">9,5k</td><td class="crd-td">122,8k</td></tr>
<tr><td class="crd-td"><strong>Midyat</strong></td><td class="crd-td">Mardin</td><td class="crd-td">37,42, 41,34</td><td class="crd-td">-</td><td class="crd-td">13k</td><td class="crd-td">120,1k</td></tr>
<tr><td class="crd-td"><strong>Sur</strong></td><td class="crd-td">Diyarbakir</td><td class="crd-td">37,91, 40,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">118,8k</td></tr>
<tr><td class="crd-td"><strong>Bismil</strong></td><td class="crd-td">Diyarbakir</td><td class="crd-td">37,85, 40,66</td><td class="crd-td">-</td><td class="crd-td">9,4k</td><td class="crd-td">118,7k</td></tr>
<tr><td class="crd-td"><strong>Kilis</strong></td><td class="crd-td">Kilis</td><td class="crd-td">36,72, 37,12</td><td class="crd-td">22,7k</td><td class="crd-td">43,4k</td><td class="crd-td">116,4k</td></tr>
<tr><td class="crd-td"><strong>Nusaybin</strong></td><td class="crd-td">Mardin</td><td class="crd-td">37,07, 41,21</td><td class="crd-td">-</td><td class="crd-td">15k</td><td class="crd-td">116,1k</td></tr>
<tr><td class="crd-td"><strong>Suruç</strong></td><td class="crd-td">Sanliurfa</td><td class="crd-td">36,98, 38,43</td><td class="crd-td">-</td><td class="crd-td">15k</td><td class="crd-td">104,3k</td></tr>
<tr><td class="crd-td"><strong>Harran</strong></td><td class="crd-td">Sanliurfa</td><td class="crd-td">36,86, 39,03</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">96,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Leading thirty catalogued settlements of the Southeastern Anatolia Region ordered by peak population, with coordinates and 1927AD, 1970AD and peak benchmarks.</figcaption>
</figure>

# Limitations

Three caveats govern the settlement series. First, integrating 1927-2000AD general censuses with post-2007AD ADNKS releases spans Turkey's 2012-2014AD metropolitan boundary expansion (Law No. 6360), so peak figures in metropolitan provinces reflect statutory *büyükşehir* definitions in 2014-2024AD alongside continuous city-proper trajectories [@Canpolat2018Terms]. Second, non-citizen Syrian residents under temporary protection—numbering over 3,1M nationwide after 2011AD—appear only partially in standard municipal address series across border cities such as Kilis, Gaziantep and Antakya [@INCILI2020Kilis; @Klc2021Turkish]. Third, the February 2023 Kahramanmaras earthquakes caused temporary out-migration across Antakya, Kahramanmaras, Adiyaman and Malatya whose long-term recovery remains ongoing.

# Conclusion

Across 22.177 catalogued TurkStat and ADNKS localities spanning all 81 provinces from 1927AD to 2025AD, Turkey's settlement system shifted from an overwhelmingly rural lattice of Anatolian villages into an integrated, multi-polar urban hierarchy. Anchored by Istanbul's metropolitan expansion (15,9M) and sustained by rapid industrial and regional growth in Ankara, Izmir, Bursa, Antalya, Konya, Adana, Mersin, Gaziantep and Diyarbakir, the full 22.177-locality corpus confirms a tight Zipf rank-size slope of $\alpha = 1{,}208$ ($R^2 = 0{,}979$) consistent with modern censuses and district-level ADM2 enumerations.

# Appendix

Across 46.713 official TurkStat census rows processed within chapter bounds, duplicate-alias and co-located suburban candidates were excluded during source-ledger deduplication to yield 22.177 unique localities. Key Republican industrial and metropolitan foundations carry explicit historical foundation dates—including Zonguldak (1849AD), Kirikkale (1925AD), Karabuk (1937AD), Batman (1940AD), Kecioren (1983AD), Mamak (1983AD), Sehitkamil (1987AD), Yildirim (1987AD) and Etimesgut (1990AD).

# Sources

::: {#refs}
:::
