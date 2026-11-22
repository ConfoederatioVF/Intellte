---
title: "Settlement Gazetteer of South Korea after 1953"
subtitle: "Metropolitan Cities, Municipalities, Towns and Townships, 1953AD to 2026AD"
date: "20 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: south_korea_after_1953_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_south_korea_after_1953_spatial.png"
hero_caption: "Spatial distribution of 1.229 municipal and township settlements across seventeen provincial-level territories from 1953AD through 2026AD."
hero_label: "fig:hero-sk-settlements"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer catalogues 1.229 urban, municipal and township settlements across the Republic of Korea from the conclusion of the Korean Armistice Agreement in 1953AD through 2026AD, encompassing 102.845 km² across seventeen provincial-level administrative territories. Synthesising official quinquennial population and housing censuses from Statistics Korea, municipal gazetteers, historical cadastral registers and transport surveys [@KOSIS2021Census; @Kwon1977Demography; @Kim2018People; @Lee2025Passenger], the compendium documents the longitudinal trajectory of every primary administrative tier of the nation: the capital metropolis of Seoul (10,61M at its 1990AD peak), six metropolitan cities (*gwangyeoksi*) led by Busan (3,85M), Incheon (3,09M), Daegu (2,51M), Daejeon (1,54M), Gwangju (1,5M) and Ulsan (1,17M), the administrative capital of Sejong (392,5k), seventy-five municipal cities (*si*) including dense satellite centres across Gyeonggi Province, and 1.146 rural county seats (*gun*), urbanised market towns (*eup*) and rural townships (*myeon*). Across the 1.229 catalogued centres, the dataset incorporates 20.893 settlement-year observations spanning seventeen benchmark rounds from 1953AD to 2025AD (averaging 17 observations per centre). Alongside the 1.229 catalogued centres, the regional source ledger accounts for six excluded candidates disqualified as subordinate suburbs merged into municipal cores or situated outside territorial boundaries.

# Background

The modern settlement geography of South Korea reflects seventy years of intense state-directed reconstruction, rapid industrialisation and extraordinary spatial concentration [@Kwon1977Demography; @Repetto1981Socioeconomic; @Caldwell2020Social]. At the cessation of hostilities in 1953AD, the urban network lay severely damaged by war, with Seoul reduced to approximately 1,01M residents and provincial populations distributed primarily across agrarian villages and small market towns in Jeolla, Chungcheong and Gyeongsang [@KOSIS2021Census; @KwonShin1977Joseon; @Cha2009LivingStandards].

Beginning with the First Five-Year Economic Development Plan in 1962AD, state-directed industrial investment fundamentally reordered the national settlement hierarchy [@Repetto1981Socioeconomic; @Kim2018People]. Millions of young rural workers migrated from rural townships (*myeon*) into manufacturing centres, establishing a dominant dual-axis urban structure: the Seoul National Capital Area (Sudogwon) in the northwest and the Southeastern Maritime Industrial Belt (Yeongnam) linking Busan, Ulsan, Changwon and Pohang [@KOSIS2021Census; @Lee2025Passenger]. Over subsequent decades, administrative reclassifications formalised this growth, elevating primary urban centres into independent metropolitan cities (*gwangyeoksi*) outside provincial authority, while rural agricultural townships experienced severe, uninterrupted population depletion [@Song2018Factors; @Dyrting2024Estimating].

# Methodology

Settlement records were constructed by harvesting municipal census schedules from the Korean Statistical Information Service (KOSIS) and harmonising them with historical cadastres, municipal gazetteers and geocoded administrative boundaries [@KOSIS2021Census; @NSTAC2026SSDSE; @Kim2018People]. All 1.229 catalogued settlements carry WGS84 coordinates and assign to one of the seventeen provincial-level territories.

In the regional source ledger, six candidate records were excluded following systematic deduplication. Three candidates (Gwangju, Sejong and Goseong) represented subordinate suburban units or duplicate municipal designations merged into primary urban entities, while three candidates (Ulleung, Heuksan and Buk) fell outside core study boundaries or duplicated higher-tier administrative districts. Historical coordinate verification ensures that spatial points correspond to the administrative offices (*eup-myeon-dong* community centres) or historical urban hearts of each settlement.

# Testing and Validation

Ledger reconciliation confirms 1.229 included settlements and six excluded candidate entries (1.235 total candidates, with zero unaccounted records). All 1.229 settlements carry valid geographic coordinates and population time series spanning the post-armistice era. Figure \ref{fig:sett-gazetteer} displays the rank-size distribution and the leading urban centres of South Korea.

<figure class="crd-figure-block" id="fig:sett-gazetteer">
<img class="crd-figure-img" src="/artefacts/project_castle/1.0-south-korea-after-1953-settlements/fig4_south_korea_after_1953_settlements.png" alt="fig:sett-gazetteer" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution and leading urban centres across South Korea from 1953AD through 2026AD.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-sk} presents the top 45 settlements in the gazetteer ordered by peak documented population, illustrating the dominance of the capital metropolis, the metropolitan cities and the major industrial agglomerations of Gyeonggi and Yeongnam.

<figure class="crd-table-figure" id="tab:top45-sk">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Province</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1955AD</th><th class="crd-th">1980AD</th><th class="crd-th">2020AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Seoul</strong></td><td class="crd-td">Seoul</td><td class="crd-td">37,57, 126,98</td><td class="crd-td">1953-2025AD</td><td class="crd-td">1,57M</td><td class="crd-td">8,36M</td><td class="crd-td">9,59M</td><td class="crd-td">10,61M (1990AD)</td></tr>
<tr><td class="crd-td"><strong>Busan</strong></td><td class="crd-td">Busan</td><td class="crd-td">35,18, 129,08</td><td class="crd-td">1953-2025AD</td><td class="crd-td">1,05M</td><td class="crd-td">3,25M</td><td class="crd-td">3,35M</td><td class="crd-td">3,85M (1990AD)</td></tr>
<tr><td class="crd-td"><strong>Incheon</strong></td><td class="crd-td">Incheon</td><td class="crd-td">37,46, 126,71</td><td class="crd-td">1953-2025AD</td><td class="crd-td">321,1k</td><td class="crd-td">1,23M</td><td class="crd-td">2,95M</td><td class="crd-td">3,09M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Daegu</strong></td><td class="crd-td">Daegu</td><td class="crd-td">35,87, 128,6</td><td class="crd-td">1953-2025AD</td><td class="crd-td">489k</td><td class="crd-td">1,91M</td><td class="crd-td">2,43M</td><td class="crd-td">2,51M (2000AD)</td></tr>
<tr><td class="crd-td"><strong>Busan (Jangheung)</strong></td><td class="crd-td">South Jeolla</td><td class="crd-td">34,73, 126,91</td><td class="crd-td">1953-2025AD</td><td class="crd-td">1,05M</td><td class="crd-td">4,3k</td><td class="crd-td">1,3k</td><td class="crd-td">2,45M (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Daejeon</strong></td><td class="crd-td">Daejeon</td><td class="crd-td">36,35, 127,38</td><td class="crd-td">1953-2025AD</td><td class="crd-td">173,1k</td><td class="crd-td">804k</td><td class="crd-td">1,49M</td><td class="crd-td">1,54M (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Gwangju</strong></td><td class="crd-td">Gwangju</td><td class="crd-td">35,16, 126,85</td><td class="crd-td">1953-2025AD</td><td class="crd-td">233,4k</td><td class="crd-td">856,5k</td><td class="crd-td">1,48M</td><td class="crd-td">1,5M (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Daegu (Gangjin)</strong></td><td class="crd-td">South Jeolla</td><td class="crd-td">34,51, 126,82</td><td class="crd-td">1953-2025AD</td><td class="crd-td">489k</td><td class="crd-td">2,9k</td><td class="crd-td">1k</td><td class="crd-td">1,31M (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Suwon</strong></td><td class="crd-td">Gyeonggi</td><td class="crd-td">37,28, 127,03</td><td class="crd-td">1953-2025AD</td><td class="crd-td">136,4k</td><td class="crd-td">322,7k</td><td class="crd-td">1,21M</td><td class="crd-td">1,22M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ulsan</strong></td><td class="crd-td">Ulsan</td><td class="crd-td">35,54, 129,31</td><td class="crd-td">1953-2025AD</td><td class="crd-td">153,4k</td><td class="crd-td">544,3k</td><td class="crd-td">1,14M</td><td class="crd-td">1,17M (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Yongin</strong></td><td class="crd-td">Gyeonggi</td><td class="crd-td">37,24, 127,18</td><td class="crd-td">1953-2025AD</td><td class="crd-td">57,3k</td><td class="crd-td">135,6k</td><td class="crd-td">1,07M</td><td class="crd-td">1,09M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Changwon</strong></td><td class="crd-td">South Gyeongsang</td><td class="crd-td">35,23, 128,68</td><td class="crd-td">1953-2025AD</td><td class="crd-td">566,9k</td><td class="crd-td">693,7k</td><td class="crd-td">1,03M</td><td class="crd-td">1,08M (2000AD)</td></tr>
<tr><td class="crd-td"><strong>Goyang</strong></td><td class="crd-td">Seoul</td><td class="crd-td">37,66, 126,83</td><td class="crd-td">1953-2025AD</td><td class="crd-td">36,8k</td><td class="crd-td">155,6k</td><td class="crd-td">1,05M</td><td class="crd-td">1,05M (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Hwaseong</strong></td><td class="crd-td">Gyeonggi</td><td class="crd-td">37,21, 126,82</td><td class="crd-td">1953-2025AD</td><td class="crd-td">67,7k</td><td class="crd-td">160,1k</td><td class="crd-td">880,9k</td><td class="crd-td">1,03M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Seongnam</strong></td><td class="crd-td">Seoul</td><td class="crd-td">37,44, 127,14</td><td class="crd-td">1953-2025AD</td><td class="crd-td">89,2k</td><td class="crd-td">376,8k</td><td class="crd-td">922k</td><td class="crd-td">950k (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Cheongju</strong></td><td class="crd-td">North Chungcheong</td><td class="crd-td">36,64, 127,49</td><td class="crd-td">1953-2025AD</td><td class="crd-td">372,7k</td><td class="crd-td">426,6k</td><td class="crd-td">855,3k</td><td class="crd-td">879,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bucheon</strong></td><td class="crd-td">Incheon</td><td class="crd-td">37,5, 126,78</td><td class="crd-td">1953-2025AD</td><td class="crd-td">68,7k</td><td class="crd-td">221,5k</td><td class="crd-td">833,1k</td><td class="crd-td">853k (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Ansan</strong></td><td class="crd-td">Gyeonggi</td><td class="crd-td">37,32, 126,82</td><td class="crd-td">1953-2025AD</td><td class="crd-td">15,9k</td><td class="crd-td">37,5k</td><td class="crd-td">717,3k</td><td class="crd-td">747k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Namyangju</strong></td><td class="crd-td">Gyeonggi</td><td class="crd-td">37,64, 127,21</td><td class="crd-td">1953-2025AD</td><td class="crd-td">52,8k</td><td class="crd-td">125k</td><td class="crd-td">696k</td><td class="crd-td">716,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Cheonan</strong></td><td class="crd-td">South Chungcheong</td><td class="crd-td">36,81, 127,15</td><td class="crd-td">1953-2025AD</td><td class="crd-td">201,8k</td><td class="crd-td">231k</td><td class="crd-td">682,2k</td><td class="crd-td">702,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Jeonju</strong></td><td class="crd-td">North Jeolla</td><td class="crd-td">35,82, 127,15</td><td class="crd-td">1953-2025AD</td><td class="crd-td">382,4k</td><td class="crd-td">387,6k</td><td class="crd-td">666,5k</td><td class="crd-td">666,5k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Pyeongtaek</strong></td><td class="crd-td">South Chungcheong</td><td class="crd-td">36,99, 127,09</td><td class="crd-td">1953-2025AD</td><td class="crd-td">204,7k</td><td class="crd-td">234,4k</td><td class="crd-td">542,5k</td><td class="crd-td">627,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Anyang</strong></td><td class="crd-td">Gyeonggi</td><td class="crd-td">37,39, 126,93</td><td class="crd-td">1953-2025AD</td><td class="crd-td">107,2k</td><td class="crd-td">253,6k</td><td class="crd-td">542,3k</td><td class="crd-td">602,1k (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Siheung</strong></td><td class="crd-td">Incheon</td><td class="crd-td">37,39, 126,79</td><td class="crd-td">1953-2025AD</td><td class="crd-td">16,7k</td><td class="crd-td">53,9k</td><td class="crd-td">535,1k</td><td class="crd-td">569,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Gimhae</strong></td><td class="crd-td">South Gyeongsang</td><td class="crd-td">35,23, 128,88</td><td class="crd-td">1953-2025AD</td><td class="crd-td">123,2k</td><td class="crd-td">150,8k</td><td class="crd-td">552,4k</td><td class="crd-td">552,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Paju</strong></td><td class="crd-td">Gyeonggi</td><td class="crd-td">37,76, 126,78</td><td class="crd-td">1953-2025AD</td><td class="crd-td">69,8k</td><td class="crd-td">165,1k</td><td class="crd-td">460,5k</td><td class="crd-td">524,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Pohang</strong></td><td class="crd-td">North Gyeongsang</td><td class="crd-td">36,08, 129,37</td><td class="crd-td">1953-2025AD</td><td class="crd-td">346,3k</td><td class="crd-td">396,4k</td><td class="crd-td">501,1k</td><td class="crd-td">515,7k (2000AD)</td></tr>
<tr><td class="crd-td"><strong>Daejeon (Damyang)</strong></td><td class="crd-td">South Jeolla</td><td class="crd-td">35,28, 126,89</td><td class="crd-td">1953-2025AD</td><td class="crd-td">173,1k</td><td class="crd-td">9,5k</td><td class="crd-td">4,6k</td><td class="crd-td">506,7k (1975AD)</td></tr>
<tr><td class="crd-td"><strong>Gimpo</strong></td><td class="crd-td">Gyeonggi</td><td class="crd-td">37,62, 126,71</td><td class="crd-td">1953-2025AD</td><td class="crd-td">31,7k</td><td class="crd-td">75k</td><td class="crd-td">474,5k</td><td class="crd-td">497,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Jeju</strong></td><td class="crd-td">Jeju</td><td class="crd-td">33,51, 126,52</td><td class="crd-td">1953-2025AD</td><td class="crd-td">179,9k</td><td class="crd-td">290,1k</td><td class="crd-td">492,3k</td><td class="crd-td">492,3k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Uijeongbu</strong></td><td class="crd-td">Seoul</td><td class="crd-td">37,74, 127,05</td><td class="crd-td">1953-2025AD</td><td class="crd-td">31,5k</td><td class="crd-td">133,2k</td><td class="crd-td">449,6k</td><td class="crd-td">459,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Gumi</strong></td><td class="crd-td">North Gyeongsang</td><td class="crd-td">36,11, 128,34</td><td class="crd-td">1953-2025AD</td><td class="crd-td">155k</td><td class="crd-td">177,4k</td><td class="crd-td">416,6k</td><td class="crd-td">421,1k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Asan</strong></td><td class="crd-td">South Chungcheong</td><td class="crd-td">36,78, 127</td><td class="crd-td">1953-2025AD</td><td class="crd-td">138k</td><td class="crd-td">158k</td><td class="crd-td">340,5k</td><td class="crd-td">397,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sejong</strong></td><td class="crd-td">Sejong</td><td class="crd-td">36,48, 127,29</td><td class="crd-td">1953-2025AD</td><td class="crd-td">65,8k</td><td class="crd-td">97,4k</td><td class="crd-td">353,9k</td><td class="crd-td">392,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Wonju</strong></td><td class="crd-td">Gangwon</td><td class="crd-td">37,35, 127,95</td><td class="crd-td">1953-2025AD</td><td class="crd-td">123,2k</td><td class="crd-td">198,7k</td><td class="crd-td">352,4k</td><td class="crd-td">367,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Yangsan</strong></td><td class="crd-td">South Gyeongsang</td><td class="crd-td">35,34, 129,03</td><td class="crd-td">1953-2025AD</td><td class="crd-td">53,7k</td><td class="crd-td">65,7k</td><td class="crd-td">351,2k</td><td class="crd-td">363,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Jinju</strong></td><td class="crd-td">South Gyeongsang</td><td class="crd-td">35,19, 128,08</td><td class="crd-td">1953-2025AD</td><td class="crd-td">248,1k</td><td class="crd-td">303,5k</td><td class="crd-td">352,4k</td><td class="crd-td">352,4k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Gwangmyeong</strong></td><td class="crd-td">Seoul</td><td class="crd-td">37,48, 126,87</td><td class="crd-td">1953-2025AD</td><td class="crd-td">34,5k</td><td class="crd-td">145,9k</td><td class="crd-td">298,1k</td><td class="crd-td">338,5k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Iksan</strong></td><td class="crd-td">North Jeolla</td><td class="crd-td">35,94, 126,95</td><td class="crd-td">1953-2025AD</td><td class="crd-td">297,2k</td><td class="crd-td">301,3k</td><td class="crd-td">285,3k</td><td class="crd-td">323,7k (2000AD)</td></tr>
<tr><td class="crd-td"><strong>Hanam</strong></td><td class="crd-td">Seoul</td><td class="crd-td">37,54, 127,21</td><td class="crd-td">1953-2025AD</td><td class="crd-td">11,7k</td><td class="crd-td">49,4k</td><td class="crd-td">279,8k</td><td class="crd-td">319,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Yeosu</strong></td><td class="crd-td">South Jeolla</td><td class="crd-td">34,76, 127,66</td><td class="crd-td">1953-2025AD</td><td class="crd-td">302,8k</td><td class="crd-td">307k</td><td class="crd-td">271,5k</td><td class="crd-td">313,1k (1966AD)</td></tr>
<tr><td class="crd-td"><strong>Yangju</strong></td><td class="crd-td">Gyeonggi</td><td class="crd-td">37,83, 127,06</td><td class="crd-td">1953-2025AD</td><td class="crd-td">31,2k</td><td class="crd-td">73,8k</td><td class="crd-td">233,3k</td><td class="crd-td">301,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Gyeongsan</strong></td><td class="crd-td">North Gyeongsang</td><td class="crd-td">35,82, 128,74</td><td class="crd-td">1953-2025AD</td><td class="crd-td">117,2k</td><td class="crd-td">134,1k</td><td class="crd-td">283,7k</td><td class="crd-td">299,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Chuncheon</strong></td><td class="crd-td">Gangwon</td><td class="crd-td">37,88, 127,73</td><td class="crd-td">1953-2025AD</td><td class="crd-td">130,8k</td><td class="crd-td">211k</td><td class="crd-td">284,6k</td><td class="crd-td">293,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Gyeongju</strong></td><td class="crd-td">North Gyeongsang</td><td class="crd-td">35,84, 129,21</td><td class="crd-td">1953-2025AD</td><td class="crd-td">64,5k</td><td class="crd-td">289,2k</td><td class="crd-td">261,8k</td><td class="crd-td">289,2k (1980AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in South Korea ordered by peak documented population (n=1.229 total catalogued sites).</figcaption>
</figure>

## Sub-Regional Distribution and Ledger Exclusions

Table \ref{tab:regsum-sk} summarises the distribution of settlements across all seventeen provincial-level territories alongside their leading urban centres. North Gyeongsang leads all territories with 235 catalogued settlements, followed by South Jeolla (226), North Jeolla (135), South Gyeongsang (131), South Chungcheong (130), Gangwon (119), Gyeonggi (117) and North Chungcheong (96). Table \ref{tab:excluded-sk} details the six excluded candidate entries in the regional source ledger.

<figure class="crd-table-figure" id="tab:regsum-sk">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Catalogued Sites</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Busan</strong></td><td class="crd-td">1</td><td class="crd-td">Busan (3,85M)</td></tr>
<tr><td class="crd-td"><strong>Daegu</strong></td><td class="crd-td">1</td><td class="crd-td">Daegu (2,51M)</td></tr>
<tr><td class="crd-td"><strong>Daejeon</strong></td><td class="crd-td">1</td><td class="crd-td">Daejeon (1,54M)</td></tr>
<tr><td class="crd-td"><strong>Gangwon</strong></td><td class="crd-td">119</td><td class="crd-td">Wonju (367,3k)</td></tr>
<tr><td class="crd-td"><strong>Gwangju</strong></td><td class="crd-td">2</td><td class="crd-td">Gwangju (1,5M)</td></tr>
<tr><td class="crd-td"><strong>Gyeonggi</strong></td><td class="crd-td">117</td><td class="crd-td">Suwon (1,22M)</td></tr>
<tr><td class="crd-td"><strong>Incheon</strong></td><td class="crd-td">3</td><td class="crd-td">Incheon (3,09M)</td></tr>
<tr><td class="crd-td"><strong>Jeju</strong></td><td class="crd-td">2</td><td class="crd-td">Jeju (492,3k)</td></tr>
<tr><td class="crd-td"><strong>North Chungcheong</strong></td><td class="crd-td">96</td><td class="crd-td">Cheongju (879,2k)</td></tr>
<tr><td class="crd-td"><strong>North Gyeongsang</strong></td><td class="crd-td">235</td><td class="crd-td">Pohang (515,7k)</td></tr>
<tr><td class="crd-td"><strong>North Jeolla</strong></td><td class="crd-td">135</td><td class="crd-td">Jeonju (666,5k)</td></tr>
<tr><td class="crd-td"><strong>Sejong</strong></td><td class="crd-td">3</td><td class="crd-td">Sejong (392,5k)</td></tr>
<tr><td class="crd-td"><strong>Seoul</strong></td><td class="crd-td">12</td><td class="crd-td">Seoul (10,61M)</td></tr>
<tr><td class="crd-td"><strong>South Chungcheong</strong></td><td class="crd-td">130</td><td class="crd-td">Cheonan (702,8k)</td></tr>
<tr><td class="crd-td"><strong>South Gyeongsang</strong></td><td class="crd-td">131</td><td class="crd-td">Changwon (1,08M)</td></tr>
<tr><td class="crd-td"><strong>South Jeolla</strong></td><td class="crd-td">226</td><td class="crd-td">Busan (Jangheung) (2,45M)</td></tr>
<tr><td class="crd-td"><strong>Ulsan</strong></td><td class="crd-td">15</td><td class="crd-td">Ulsan (1,17M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement counts and leading urban centres across the seventeen provincial-level territories of South Korea.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-sk">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Territory</th><th class="crd-th">Classification</th><th class="crd-th">Consolidation Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gwangju</strong></td><td class="crd-td">South Korea</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication or bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Sejong</strong></td><td class="crd-td">South Korea</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication or bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Goseong</strong></td><td class="crd-td">South Korea</td><td class="crd-td">Subordinate suburb merged</td><td class="crd-td">Excluded during deduplication or bounds check (subordinate_suburb_merged).</td></tr>
<tr><td class="crd-td"><strong>Ulleung</strong></td><td class="crd-td">South Korea</td><td class="crd-td">Outside study bounds</td><td class="crd-td">Excluded during deduplication or bounds check (outside_study_bounds).</td></tr>
<tr><td class="crd-td"><strong>Heuksan</strong></td><td class="crd-td">South Korea</td><td class="crd-td">Outside study bounds</td><td class="crd-td">Excluded during deduplication or bounds check (outside_study_bounds).</td></tr>
<tr><td class="crd-td"><strong>Buk</strong></td><td class="crd-td">South Korea</td><td class="crd-td">Outside study bounds</td><td class="crd-td">Excluded during deduplication or bounds check (outside_study_bounds).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Excluded candidate entries in the South Korea source ledger consolidated during administrative screening.</figcaption>
</figure>

# Limitations

Two primary administrative factors affect longitudinal settlement continuity across modern South Korea. First, extensive municipal amalgamations (*dosi tonghap*) executed between 1994AD and 1995AD merged traditional walled county seats (*gun*) with urban municipal cores (*si*), creating consolidated administrative units such as Changwon, Pohang, Gyeongju and Suncheon [@KOSIS2021Census; @Dyrting2024Estimating]. In this gazetteer, submunicipal *eup* and *myeon* records are preserved alongside central city districts to maintain geographic granularity across pre-amalgamation and post-amalgamation census rounds. Second, rapid suburbanisation across Gyeonggi Province generated new planned cities (*sindosi*)—including Bundang, Ilsan, Sanbon, Jungdong and Pangyo—that originated as residential developments within existing municipal boundaries before attaining extensive urban identities [@KOSIS2021Census; @Kim2018People; @Lee2025Passenger]. While municipal totals capture these populations comprehensively, local administrative boundary shifts require careful interpretation when tracing individual submunicipal entities across the twentieth century.

# Sources

<div id="refs"></div>
