---
title: "Southern Europe and European Islands after 1945"
subtitle: "Settlement Gazetteer and Urban Hierarchy (1945-2026)"
date: "22 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/southern_europe_and_islands_after_1945_urban_hierarchy.png"
hero_caption: "Rank-size urban hierarchy and metropolitan concentration across Southern Europe, Eastern Thrace, Macaronesia and the North Atlantic, 1945-2025."
bibliography: southern_europe_and_islands_after_1945_literature_review.bib
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
    latex_engine: xelatex
    template: ../../_shared/template/template.tex
    keep_tex: false
  github_document:
    html_preview: false
    toc: true
    toc_depth: 3
---



![Rank-size urban hierarchy and metropolitan concentration across Southern Europe, Eastern Thrace, Macaronesia and the North Atlantic, 1945-2025.](figures/southern_europe_and_islands_after_1945_urban_hierarchy.png)



# Abstract

This companion gazetteer documents the 2.029 contemporary urban and municipal settlements compiled for Southern Europe, Eastern Thrace and the Macaronesian and North Atlantic islands between 1945 and 2026. Spanning 11 sub-regions and 18 sovereign or territorial designations (including microstates and narrow frontier strips along the Pyrenees, Alps and Balkans), the gazetteer anchors 86,12% of its records (1.738 settlements) in official national censuses, Eurostat Urban Audit functional cities and peer-reviewed historical urban registers, with the remaining 13,88% (280 secondary places) drawn from municipal gazetteer supplements. Across the 75-year span from 1950 to 2025, urban growth concentrated heavily in European Istanbul (9,41M), Madrid (5,48M), Milano (3,57M), Roma (3,39M), Barcelona (3,24M), Athina (3,19M), Napoli (2,98M), Lisboa (1,97M) and Valencia (1,8M), alongside rapidly expanding island hubs in Greater Valletta, Las Palmas de Gran Canaria, Reykjavík, Tórshavn and Nuuk.

# Spatial Distribution and Sub-Regional Coverage

The settlement gazetteer reflects both the underlying density of post-war Mediterranean urbanisation and the archival resolution of national municipal census registers [@INE2024; @DEMOPAST2023; @Eurostat2024]. Spain's mainland and Balearic sub-region accounts for 947 settlements (46,93% of the gazetteer), followed by Italy with 633 (31,37%), mainland Portugal with 170 (8,42%) and Greece with 146 (7,23%). Together those four Mediterranean peninsular sub-regions represent 93,95% of all catalogued sites. The remaining 122 settlements capture the densely settled micro-archipelagos and sub-Arctic territories: 49 in the Canary Islands, 26 each in Iceland and Malta, 7 in Greenland, 5 in Eastern Thrace, 4 in the Faroe Islands and 5 across the Azores and Madeira [@Hagstofa2024; @StatGL2024]. Figure 1 maps the spatial distribution of all 2.018 settlements across the 11 sub-regions, and Table 1 aligns sub-regional settlement counts with benchmark populations and 2025 densities.

<figure class="crd-figure-block" id="fig:regional-map">
<img class="crd-figure-img" src="/artefacts/project_magnetic/1.0-southern-europe-and-islands-after-1945-settlements/southern_europe_and_islands_after_1945_regional_map.png" alt="fig:regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of the 2.018 settlements and sub-regional population density across Southern Europe and European islands, 1945-2025.</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th><th class="crd-th">1950 Pop.</th><th class="crd-th">2025 Pop.</th><th class="crd-th">2025 (/km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Spain (Mainland &amp; Balearics)</strong></td><td class="crd-td">955</td><td class="crd-td">47,07%</td><td class="crd-td">27,28M</td><td class="crd-td">46,75M</td><td class="crd-td">91</td></tr>
<tr><td class="crd-td"><strong>Italy (incl. San Marino &amp; Vatican)</strong></td><td class="crd-td">647</td><td class="crd-td">31,89%</td><td class="crd-td">47,1M</td><td class="crd-td">58,95M</td><td class="crd-td">182</td></tr>
<tr><td class="crd-td"><strong>Portugal (Mainland)</strong></td><td class="crd-td">168</td><td class="crd-td">8,28%</td><td class="crd-td">7,86M</td><td class="crd-td">10,18M</td><td class="crd-td">122,2</td></tr>
<tr><td class="crd-td"><strong>Greece</strong></td><td class="crd-td">145</td><td class="crd-td">7,15%</td><td class="crd-td">7,57M</td><td class="crd-td">10,38M</td><td class="crd-td">71,2</td></tr>
<tr><td class="crd-td"><strong>Canary Islands</strong></td><td class="crd-td">50</td><td class="crd-td">2,46%</td><td class="crd-td">793k</td><td class="crd-td">2,25M</td><td class="crd-td">301,4</td></tr>
<tr><td class="crd-td"><strong>Iceland</strong></td><td class="crd-td">24</td><td class="crd-td">1,18%</td><td class="crd-td">143k</td><td class="crd-td">393k</td><td class="crd-td">3,9</td></tr>
<tr><td class="crd-td"><strong>Malta</strong></td><td class="crd-td">23</td><td class="crd-td">1,13%</td><td class="crd-td">312k</td><td class="crd-td">563k</td><td class="crd-td">2.023,7</td></tr>
<tr><td class="crd-td"><strong>Azores &amp; Madeira</strong></td><td class="crd-td">5</td><td class="crd-td">0,25%</td><td class="crd-td">585k</td><td class="crd-td">496k</td><td class="crd-td">686,9</td></tr>
<tr><td class="crd-td"><strong>Faroe Islands</strong></td><td class="crd-td">4</td><td class="crd-td">0,2%</td><td class="crd-td">31,8k</td><td class="crd-td">55,1k</td><td class="crd-td">41,5</td></tr>
<tr><td class="crd-td"><strong>Greenland</strong></td><td class="crd-td">4</td><td class="crd-td">0,2%</td><td class="crd-td">23,6k</td><td class="crd-td">56,8k</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>Turkey-in-Europe (Eastern Thrace)</strong></td><td class="crd-td">4</td><td class="crd-td">0,2%</td><td class="crd-td">1,59M</td><td class="crd-td">12,25M</td><td class="crd-td">480,2</td></tr>
<tr><td class="crd-td"><strong>Total (11 Sub-Regions)</strong></td><td class="crd-td">2.029</td><td class="crd-td">100%</td><td class="crd-td">93,29M</td><td class="crd-td">142,33M</td><td class="crd-td">43,4</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Settlement coverage, share of gazetteer and sub-regional population benchmarks (1950-2025).</figcaption>
</figure>

Because spatial clipping against the study bounding polygon captures frontier municipalities along the Pyrenees, southern Alps, Karst and Rhodope ridges, settlements carry 18 distinct country tags: Spain (983), Italy (602), Portugal (174), Greece (134), Iceland (26), Malta (26), France (22, perimeter buffer), Slovenia (16, perimeter buffer), Greenland (7), Albania (5), Bulgaria (5), Faroe Islands (4), Switzerland (4), Turkey-in-Europe (4), North Macedonia (3), Andorra (1), Monaco (1) and San Marino (1). Border-buffer records aid spatial interpolation across international frontiers without inflating the core sub-regional totals in Table 1 [@INSEE2024; @BFS2024; @StatBalkans2024].

# Archival Provenance Ledger

Every settlement record stores an explicit provenance identifier tracing its primary demographic series. Across the 2.018 records, 1.738 settlements (86,12%) stem from official census agencies, Eurostat Urban Audit or historical urban compilations, whereas 280 settlements (13,88%) originate from the GeoNames municipal gazetteer supplement. Table 2 details the full provenance breakdown ordered by settlement count.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Archival Provenance Source</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>INE Spain Historic Municipal Censuses (1857-1991)</strong></td><td class="crd-td">728</td><td class="crd-td">35,88%</td></tr>
<tr><td class="crd-td"><strong>Buringh European Urban Series (700-2000)</strong></td><td class="crd-td">500</td><td class="crd-td">24,64%</td></tr>
<tr><td class="crd-td"><strong>GeoNames Municipal Gazetteer Supplement</strong></td><td class="crd-td">281</td><td class="crd-td">13,85%</td></tr>
<tr><td class="crd-td"><strong>Eurostat Urban Audit Metropolitan Series (1990-2024)</strong></td><td class="crd-td">174</td><td class="crd-td">8,58%</td></tr>
<tr><td class="crd-td"><strong>INE Portugal National Census Series</strong></td><td class="crd-td">123</td><td class="crd-td">6,06%</td></tr>
<tr><td class="crd-td"><strong>ELSTAT Greece National Census Series</strong></td><td class="crd-td">102</td><td class="crd-td">5,03%</td></tr>
<tr><td class="crd-td"><strong>INSEE French Municipal Censuses (Border Frame)</strong></td><td class="crd-td">22</td><td class="crd-td">1,08%</td></tr>
<tr><td class="crd-td"><strong>NSO Malta National Census Series</strong></td><td class="crd-td">21</td><td class="crd-td">1,03%</td></tr>
<tr><td class="crd-td"><strong>Statistics Iceland Municipal Series</strong></td><td class="crd-td">19</td><td class="crd-td">0,94%</td></tr>
<tr><td class="crd-td"><strong>Chandler V2 Historical Urban Population</strong></td><td class="crd-td">19</td><td class="crd-td">0,94%</td></tr>
<tr><td class="crd-td"><strong>SURS Slovenia Municipal Series (Border Frame)</strong></td><td class="crd-td">13</td><td class="crd-td">0,64%</td></tr>
<tr><td class="crd-td"><strong>BFS Switzerland Municipal Series (Border Frame)</strong></td><td class="crd-td">5</td><td class="crd-td">0,25%</td></tr>
<tr><td class="crd-td"><strong>NSI Bulgaria Municipal Series (Border Frame)</strong></td><td class="crd-td">5</td><td class="crd-td">0,25%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census Austria</strong></td><td class="crd-td">5</td><td class="crd-td">0,25%</td></tr>
<tr><td class="crd-td"><strong>Statistics Greenland District &amp; Town Registers</strong></td><td class="crd-td">4</td><td class="crd-td">0,2%</td></tr>
<tr><td class="crd-td"><strong>DEMOPAST/ISTAT Italian Cities (1861-1971)</strong></td><td class="crd-td">4</td><td class="crd-td">0,2%</td></tr>
<tr><td class="crd-td"><strong>Hagstova Faroe Islands Municipal Registers</strong></td><td class="crd-td">4</td><td class="crd-td">0,2%</td></tr>
<tr><td class="crd-td"><strong>Total Settlement Gazetteer</strong></td><td class="crd-td">2.029</td><td class="crd-td">100%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Provenance ledger for the 2.018 settlements in Southern Europe and European islands, 1945-2025.</figcaption>
</figure>

# Largest Cities and Metropolitan Hierarchy

Table 3 lists the 20 largest settlement series in the chapter gazetteer across the five post-war benchmark dates (1950, 1970, 1990, 2010 and 2025). As discussed in the companion demographic review, harmonising Eurostat Urban Audit functional metropolitan boundaries with historical municipal core registers from DEMOPAST/ISTAT, Buringh and GeoNames produces parallel metropolitan and inner-city records for Rome (Roma and Rome), Naples (Napoli greater city and Naples) and Athens (Athina and Athens) [@Eurostat2024; @DEMOPAST2023; @DeVries1984]. Preserving both series makes the post-1970 divergence between metropolitan suburban expansion and historic core stabilisation directly visible.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">1950</th><th class="crd-th">1970</th><th class="crd-th">1990</th><th class="crd-th">2010</th><th class="crd-th">2025</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">Turkey-in-Europe</td><td class="crd-td">983k</td><td class="crd-td">2,36M</td><td class="crd-td">5,68M</td><td class="crd-td">9,07M</td><td class="crd-td">9,41M</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Madrid</td><td class="crd-td">Spain</td><td class="crd-td">2,44M</td><td class="crd-td">2,88M</td><td class="crd-td">3,12M</td><td class="crd-td">3,27M</td><td class="crd-td">5,48M</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Milan</td><td class="crd-td">Italy</td><td class="crd-td">1,4M</td><td class="crd-td">3,56M</td><td class="crd-td">4,23M</td><td class="crd-td">4,46M</td><td class="crd-td">4,63M</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Rome</td><td class="crd-td">Italy</td><td class="crd-td">1,66M</td><td class="crd-td">2,96M</td><td class="crd-td">4,01M</td><td class="crd-td">4,23M</td><td class="crd-td">4,38M</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Barcelona</td><td class="crd-td">Spain</td><td class="crd-td">1,42M</td><td class="crd-td">2,98M</td><td class="crd-td">3,9M</td><td class="crd-td">4,11M</td><td class="crd-td">4,26M</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Athens</td><td class="crd-td">Greece</td><td class="crd-td">1,14M</td><td class="crd-td">2,45M</td><td class="crd-td">3,67M</td><td class="crd-td">3,87M</td><td class="crd-td">4,02M</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Napoli</td><td class="crd-td">Italy</td><td class="crd-td">2,35M</td><td class="crd-td">2,78M</td><td class="crd-td">3,01M</td><td class="crd-td">3,05M</td><td class="crd-td">2,98M</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Turin</td><td class="crd-td">Italy</td><td class="crd-td">765k</td><td class="crd-td">1,52M</td><td class="crd-td">2M</td><td class="crd-td">2,11M</td><td class="crd-td">2,19M</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Lisboa</td><td class="crd-td">Portugal</td><td class="crd-td">1,37M</td><td class="crd-td">1,62M</td><td class="crd-td">1,76M</td><td class="crd-td">1,86M</td><td class="crd-td">1,97M</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Valencia</td><td class="crd-td">Spain</td><td class="crd-td">1,06M</td><td class="crd-td">1,26M</td><td class="crd-td">1,36M</td><td class="crd-td">1,38M</td><td class="crd-td">1,8M</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Bilbao</td><td class="crd-td">Spain</td><td class="crd-td">320k</td><td class="crd-td">715,5k</td><td class="crd-td">973,9k</td><td class="crd-td">1,03M</td><td class="crd-td">1,07M</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Genova</td><td class="crd-td">Italy</td><td class="crd-td">676k</td><td class="crd-td">823,4k</td><td class="crd-td">962,8k</td><td class="crd-td">1,02M</td><td class="crd-td">1,05M</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Oporto</td><td class="crd-td">Portugal</td><td class="crd-td">355k</td><td class="crd-td">720,5k</td><td class="crd-td">957,2k</td><td class="crd-td">1,01M</td><td class="crd-td">1,05M</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Torino</td><td class="crd-td">Italy</td><td class="crd-td">719k</td><td class="crd-td">774,2k</td><td class="crd-td">833,6k</td><td class="crd-td">891,4k</td><td class="crd-td">924,4k</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Sevilla</td><td class="crd-td">Spain</td><td class="crd-td">678k</td><td class="crd-td">800,1k</td><td class="crd-td">867,9k</td><td class="crd-td">881,4k</td><td class="crd-td">836k</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">Saloniki</td><td class="crd-td">Greece</td><td class="crd-td">295k</td><td class="crd-td">437,7k</td><td class="crd-td">649,4k</td><td class="crd-td">815,2k</td><td class="crd-td">845,3k</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Zaragoza</td><td class="crd-td">Spain</td><td class="crd-td">463k</td><td class="crd-td">546,4k</td><td class="crd-td">592,7k</td><td class="crd-td">675,1k</td><td class="crd-td">841,3k</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">Palermo</td><td class="crd-td">Italy</td><td class="crd-td">470k</td><td class="crd-td">625,6k</td><td class="crd-td">748k</td><td class="crd-td">788,9k</td><td class="crd-td">818,1k</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">Florence</td><td class="crd-td">Italy</td><td class="crd-td">384k</td><td class="crd-td">592,2k</td><td class="crd-td">734,6k</td><td class="crd-td">774,8k</td><td class="crd-td">803,5k</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">Málaga</td><td class="crd-td">Spain</td><td class="crd-td">437,9k</td><td class="crd-td">516,7k</td><td class="crd-td">560,5k</td><td class="crd-td">568,5k</td><td class="crd-td">721,1k</td></tr>
<tr><td class="crd-td"><strong>21</strong></td><td class="crd-td">Bologna</td><td class="crd-td">Italy</td><td class="crd-td">346k</td><td class="crd-td">508,6k</td><td class="crd-td">623,3k</td><td class="crd-td">657,4k</td><td class="crd-td">681,7k</td></tr>
<tr><td class="crd-td"><strong>22</strong></td><td class="crd-td">Alicante</td><td class="crd-td">Spain</td><td class="crd-td">218,9k</td><td class="crd-td">258,3k</td><td class="crd-td">280,2k</td><td class="crd-td">334,4k</td><td class="crd-td">612,9k</td></tr>
<tr><td class="crd-td"><strong>23</strong></td><td class="crd-td">Murcia</td><td class="crd-td">Spain</td><td class="crd-td">252,3k</td><td class="crd-td">297,7k</td><td class="crd-td">322,9k</td><td class="crd-td">441,3k</td><td class="crd-td">574,6k</td></tr>
<tr><td class="crd-td"><strong>24</strong></td><td class="crd-td">Greater Valletta</td><td class="crd-td">Malta</td><td class="crd-td">276,6k</td><td class="crd-td">326,4k</td><td class="crd-td">354k</td><td class="crd-td">202,8k</td><td class="crd-td">567,4k</td></tr>
<tr><td class="crd-td"><strong>25</strong></td><td class="crd-td">Palma de Mallorca</td><td class="crd-td">Spain</td><td class="crd-td">228,3k</td><td class="crd-td">269,4k</td><td class="crd-td">292,2k</td><td class="crd-td">404,7k</td><td class="crd-td">533,5k</td></tr>
<tr><td class="crd-td"><strong>26</strong></td><td class="crd-td">Sabadell</td><td class="crd-td">Spain</td><td class="crd-td">325,2k</td><td class="crd-td">383,8k</td><td class="crd-td">416,3k</td><td class="crd-td">422,8k</td><td class="crd-td">514,7k</td></tr>
<tr><td class="crd-td"><strong>27</strong></td><td class="crd-td">Catania</td><td class="crd-td">Italy</td><td class="crd-td">295,6k</td><td class="crd-td">396,3k</td><td class="crd-td">445,3k</td><td class="crd-td">469,6k</td><td class="crd-td">487k</td></tr>
<tr><td class="crd-td"><strong>28</strong></td><td class="crd-td">Venice</td><td class="crd-td">Italy</td><td class="crd-td">354k</td><td class="crd-td">417,7k</td><td class="crd-td">453,1k</td><td class="crd-td">477,9k</td><td class="crd-td">52k</td></tr>
<tr><td class="crd-td"><strong>29</strong></td><td class="crd-td">Las Palmas</td><td class="crd-td">Spain</td><td class="crd-td">292,1k</td><td class="crd-td">344,6k</td><td class="crd-td">373,8k</td><td class="crd-td">383,3k</td><td class="crd-td">466,9k</td></tr>
<tr><td class="crd-td"><strong>30</strong></td><td class="crd-td">Sintra</td><td class="crd-td">Portugal</td><td class="crd-td">277,1k</td><td class="crd-td">327k</td><td class="crd-td">354,7k</td><td class="crd-td">376,9k</td><td class="crd-td">400,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Twenty largest urban records in Southern Europe and European islands across 1950-2025 benchmarks.</figcaption>
</figure>

# Principal Atlantic and Mediterranean Island Centres

Because the top-20 metropolitan tier is dominated by continental capitals and major ports, Table 4 extracts the leading settlements directly from the full gazetteer across the six island sub-regions — the Canary Islands, Malta, Iceland, the Azores and Madeira, Greenland and the Faroe Islands — showing the two largest documented urban centres in each archipelago or territory [@INE2024; @Hagstofa2024; @StatGL2024].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Settlement</th><th class="crd-th">1950</th><th class="crd-th">1970</th><th class="crd-th">1990</th><th class="crd-th">2010</th><th class="crd-th">2025</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Canary Islands</strong></td><td class="crd-td">Las Palmas</td><td class="crd-td">292,1k</td><td class="crd-td">344,6k</td><td class="crd-td">373,8k</td><td class="crd-td">383,3k</td><td class="crd-td">466,9k</td></tr>
<tr><td class="crd-td"><strong>Canary Islands</strong></td><td class="crd-td">Santa Cruz de Tenerife</td><td class="crd-td">274,3k</td><td class="crd-td">323,7k</td><td class="crd-td">351,2k</td><td class="crd-td">356,7k</td><td class="crd-td">452,1k</td></tr>
<tr><td class="crd-td"><strong>Malta</strong></td><td class="crd-td">Greater Valletta</td><td class="crd-td">276,6k</td><td class="crd-td">326,4k</td><td class="crd-td">354k</td><td class="crd-td">202,8k</td><td class="crd-td">567,4k</td></tr>
<tr><td class="crd-td"><strong>Malta</strong></td><td class="crd-td">Valletta</td><td class="crd-td">115k</td><td class="crd-td">129,6k</td><td class="crd-td">146k</td><td class="crd-td">159,7k</td><td class="crd-td">165,6k</td></tr>
<tr><td class="crd-td"><strong>Iceland</strong></td><td class="crd-td">Reykjavik</td><td class="crd-td">56k</td><td class="crd-td">73,6k</td><td class="crd-td">96,8k</td><td class="crd-td">114,4k</td><td class="crd-td">118,6k</td></tr>
<tr><td class="crd-td"><strong>Iceland</strong></td><td class="crd-td">Kópavogur</td><td class="crd-td">29k</td><td class="crd-td">34,2k</td><td class="crd-td">37,1k</td><td class="crd-td">39,2k</td><td class="crd-td">40,6k</td></tr>
<tr><td class="crd-td"><strong>Azores &amp; Madeira</strong></td><td class="crd-td">Funchal</td><td class="crd-td">88,8k</td><td class="crd-td">104,8k</td><td class="crd-td">113,6k</td><td class="crd-td">111,6k</td><td class="crd-td">108,1k</td></tr>
<tr><td class="crd-td"><strong>Azores &amp; Madeira</strong></td><td class="crd-td">Câmara de Lobos</td><td class="crd-td">23,3k</td><td class="crd-td">27,5k</td><td class="crd-td">29,9k</td><td class="crd-td">31,5k</td><td class="crd-td">32,7k</td></tr>
<tr><td class="crd-td"><strong>Greenland</strong></td><td class="crd-td">Nuuk</td><td class="crd-td">10,7k</td><td class="crd-td">12,7k</td><td class="crd-td">13,7k</td><td class="crd-td">14,5k</td><td class="crd-td">15k</td></tr>
<tr><td class="crd-td"><strong>Greenland</strong></td><td class="crd-td">Sisimiut</td><td class="crd-td">3,8k</td><td class="crd-td">4,5k</td><td class="crd-td">4,8k</td><td class="crd-td">5,1k</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>Faroe Islands</strong></td><td class="crd-td">Tórshavn</td><td class="crd-td">9,6k</td><td class="crd-td">11,3k</td><td class="crd-td">12,2k</td><td class="crd-td">12,9k</td><td class="crd-td">13,4k</td></tr>
<tr><td class="crd-td"><strong>Faroe Islands</strong></td><td class="crd-td">Klaksvík</td><td class="crd-td">3,6k</td><td class="crd-td">4,3k</td><td class="crd-td">4,6k</td><td class="crd-td">4,9k</td><td class="crd-td">5,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading urban centres across the six Macaronesian, Mediterranean and North Atlantic island sub-regions, 1950-2025.</figcaption>
</figure>

# Sources
