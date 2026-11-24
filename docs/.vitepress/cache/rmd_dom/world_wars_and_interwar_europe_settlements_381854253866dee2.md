---
title: "First World War, Inter-War Europe and the Second World War"
subtitle: "Settlement Gazetteer and Urban Hierarchy (1914–1945)"
date: "22 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/world_wars_and_interwar_europe_urban_hierarchy.png"
hero_caption: "Urban hierarchy and rank-size distribution across 10.046 geocoded European and North Atlantic settlements between 1914 and 1945."
hero_label: "fig:world_wars_settlements_hierarchy"
bibliography: world_wars_and_interwar_europe_literature_review.bib
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




![Urban hierarchy and rank-size distribution across 10.046 geocoded European and North Atlantic settlements between 1914 and 1945.](figures/world_wars_and_interwar_europe_urban_hierarchy.png)



# Abstract

This companion settlement gazetteer documents the 10.023 geocoded European and North Atlantic urban and municipal settlements compiled across 11 sub-regions and 45 modern states and territories for the 1914–1945 period. Primary institutional archives supply 86,01% of all entries (8.641 settlements), led by Buringh's long-run European urban series (1.391), national statistical censuses across 29 states—headlined by Germany (1.129), France via INSEE (1.007), the United Kingdom (800), Spain via INE (703), Finland (466), Poland (319), Norway (265), Belgium (214) and the Netherlands (207)—together with Eurostat's Urban Audit (613) and DEMOPAST Italian city records. The remaining 1.405 municipal loci (13,98%) derive from the GeoNames municipal gazetteer supplement to reinforce small-town coverage across southern and south-eastern Europe. Complementing the 1.875 scraped inter-war historical GIS sub-administrative enumerations analysed in the companion literature review, this gazetteer establishes the spatial urban framework behind Europe's inter-war expansion (342,57M in 1914 to 396,37M in 1939) and Second World War contraction (384,74M in 1945).

# Gazetteer Architecture and Provenance Ledger

Between 1914 and 1945 European urbanisation crossed a structural watershed. Despite two world wars, the 1918–1919 influenza pandemic, the Spanish Civil War and the Great Depression, industrial and administrative capitals absorbed millions of rural migrants displaced by agrarian stagnation and the post-1924 closure of United States immigration [@RosesWolf2019; @Mitchell2007; @Okolski2021Migration]. Whereas long-run pre-industrial urban catalogues tracked cities above 5k or 10k inhabitants [@DeVries1984], modern national statistical agencies across Europe maintained comprehensive municipal census registers down to small market towns and suburban communes [@INSEE2024; @INE2024; @ONS2024; @GUSPoland2024].

MAGNETIC keeps regional macro-demography strictly decoupled from point-level settlement aggregation. Sub-regional population totals are anchored to national censuses and 1.875 scraped inter-war historical GIS sub-administrative enumerations across 1920, 1930 and 1940 [@DEMOPAST2023; @Riksarkivet2023; @CSOIreland2023; @BFS2024; @HGISGermany2014]. The 10.023-settlement gazetteer provides the spatial coordinate backbone and metropolitan rank-size profile across 45 states and territories. Table 1 summarises the provenance ledger dynamically from the chapter inventory, listing the 12 largest institutional corpora, the remaining 22 national statistical censuses combined and the GeoNames municipal supplement.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Corpus</th><th class="crd-th">Archive Class</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Buringh European Urban Series</strong></td><td class="crd-td">Scholarly urban series</td><td class="crd-td">1.277</td><td class="crd-td">12,7%</td></tr>
<tr><td class="crd-td"><strong>National Census: Germany</strong></td><td class="crd-td">National statistical census</td><td class="crd-td">1.121</td><td class="crd-td">11,2%</td></tr>
<tr><td class="crd-td"><strong>INSEE French Census</strong></td><td class="crd-td">National statistical census</td><td class="crd-td">1.005</td><td class="crd-td">10%</td></tr>
<tr><td class="crd-td"><strong>National Census: United Kingdom</strong></td><td class="crd-td">National statistical census</td><td class="crd-td">785</td><td class="crd-td">7,8%</td></tr>
<tr><td class="crd-td"><strong>INE Spanish Historic Censuses</strong></td><td class="crd-td">National statistical census</td><td class="crd-td">708</td><td class="crd-td">7,1%</td></tr>
<tr><td class="crd-td"><strong>Eurostat Urban Audit</strong></td><td class="crd-td">Supranational urban</td><td class="crd-td">581</td><td class="crd-td">5,8%</td></tr>
<tr><td class="crd-td"><strong>National Census: Finland</strong></td><td class="crd-td">National statistical census</td><td class="crd-td">466</td><td class="crd-td">4,6%</td></tr>
<tr><td class="crd-td"><strong>National Census: Poland</strong></td><td class="crd-td">National statistical census</td><td class="crd-td">317</td><td class="crd-td">3,2%</td></tr>
<tr><td class="crd-td"><strong>National Census: Norway</strong></td><td class="crd-td">National statistical census</td><td class="crd-td">262</td><td class="crd-td">2,6%</td></tr>
<tr><td class="crd-td"><strong>National Census: Belgium</strong></td><td class="crd-td">National statistical census</td><td class="crd-td">214</td><td class="crd-td">2,1%</td></tr>
<tr><td class="crd-td"><strong>National Census: Netherlands</strong></td><td class="crd-td">National statistical census</td><td class="crd-td">206</td><td class="crd-td">2,1%</td></tr>
<tr><td class="crd-td"><strong>Chandler V2 Historical Urban Population</strong></td><td class="crd-td">National statistical census</td><td class="crd-td">166</td><td class="crd-td">1,7%</td></tr>
<tr><td class="crd-td"><strong>Other 23 National Statistical Censuses</strong></td><td class="crd-td">National statistical census</td><td class="crd-td">1.514</td><td class="crd-td">15,1%</td></tr>
<tr><td class="crd-td"><strong>GeoNames Municipal Supplement</strong></td><td class="crd-td">Municipal supplement</td><td class="crd-td">1.401</td><td class="crd-td">14%</td></tr>
<tr><td class="crd-td"><strong>Total Inter-War Gazetteer (35 corpora)</strong></td><td class="crd-td">86,01% institutional</td><td class="crd-td">10.023</td><td class="crd-td">100%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Provenance corpus ledger of the 10.046-settlement inter-war European and North Atlantic gazetteer (1914–1945).</figcaption>
</figure>

# Sub-Regional and National Spatial Distribution

Figure 1 displays the spatial spread of all 10.023 settlements across the 11 fixed sub-regions. Sampling density mirrors both underlying urbanisation and the depth of historical municipal census digitisation. The United Kingdom and Ireland leads the continent at 40,73 settlements per 10.000 km² (1.270 loci across 311.813,8 km²), closely trailed by Germany, Austria and Switzerland at 38,89 per 10.000 km² (1.871 loci) and France and Benelux at 33,1 per 10.000 km² (2.036 loci) [@ONS2024; @INSEE2024; @BFS2024]. Italy and Malta (20,97 per 10.000 km²), Spain, Portugal and the Atlantic islands (19,45 per 10.000 km²), Czechoslovakia and Hungary (19,08 per 10.000 km²) and Poland (15,01 per 10.000 km²) occupy the middle tier [@DEMOPAST2023; @INE2024; @KSHHungary2024; @GUSPoland2024]. Lower site densities characterise the extensive northern forests of the Nordics and Baltic States (10,97 per 10.000 km², despite heavy Finnish and Norwegian municipal coverage), the Balkans (10,21 per 10.000 km² in Yugoslavia, Albania, Greece and Eastern Thrace; 6,83 per 10.000 km² in Romania, Bulgaria and Moldova) and the Greenland-dominated North Atlantic (0,2 per 10.000 km², with 43 coastal settlements across Iceland, the Faroe Islands and Greenland) [@Riksarkivet2023; @StatBaltics2024; @StatBalkans2024; @Hagstofa2024; @StatGL2024].

<figure class="crd-figure-block" id="fig:world_wars_settlements_map">
<img class="crd-figure-img" src="/artefacts/project_magnetic/1.0-world-wars-and-interwar-europe-settlements/world_wars_and_interwar_europe_regional_map.png" alt="fig:world_wars_settlements_map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 10.046 geocoded settlements across the 11 European and North Atlantic sub-regions (1914–1945).</figcaption>
</figure>

Tables 2 and 3 present the sub-regional breakdown alongside the top 15 modern states and territories ranked by recorded settlement count. Five countries—Germany (1.656), France (1.300), the United Kingdom (1.188), Spain (983) and Italy (603)—contribute 5.730 settlements, representing 57% of the entire corpus, while Finland (523), Poland (462), Belgium (385), the Netherlands (351) and Norway (306) bring the top 10 share to 77,2%.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th><th class="crd-th">Sites per 10.000 km²</th><th class="crd-th">1939 Pop</th><th class="crd-th">1945 Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>United Kingdom and Irish Free State</strong></td><td class="crd-td">311.814</td><td class="crd-td">1.270</td><td class="crd-td">12,7%</td><td class="crd-td">40,73</td><td class="crd-td">50,75M</td><td class="crd-td">52,18M</td></tr>
<tr><td class="crd-td"><strong>France (incl. Alsace-Lorraine) and Benelux</strong></td><td class="crd-td">624.312</td><td class="crd-td">2.076</td><td class="crd-td">20,7%</td><td class="crd-td">33,25</td><td class="crd-td">59,25M</td><td class="crd-td">57,95M</td></tr>
<tr><td class="crd-td"><strong>Weimar/Interwar Germany (incl. East Prussia and Silesia), Austria and Switzerland</strong></td><td class="crd-td">592.661</td><td class="crd-td">2.007</td><td class="crd-td">20%</td><td class="crd-td">33,86</td><td class="crd-td">80,15M</td><td class="crd-td">76,85M</td></tr>
<tr><td class="crd-td"><strong>Second Polish Republic (1921-1939) and Free City of Danzig</strong></td><td class="crd-td">212.031</td><td class="crd-td">337</td><td class="crd-td">3,4%</td><td class="crd-td">15,89</td><td class="crd-td">34,85M</td><td class="crd-td">23,93M</td></tr>
<tr><td class="crd-td"><strong>Czechoslovakia and Trianon Hungary</strong></td><td class="crd-td">214.302</td><td class="crd-td">413</td><td class="crd-td">4,1%</td><td class="crd-td">19,27</td><td class="crd-td">23,8M</td><td class="crd-td">21,25M</td></tr>
<tr><td class="crd-td"><strong>Kingdom of Italy (incl. South Tyrol and Istria) and Malta</strong></td><td class="crd-td">295.990</td><td class="crd-td">632</td><td class="crd-td">6,3%</td><td class="crd-td">21,35</td><td class="crd-td">44,1M</td><td class="crd-td">45,4M</td></tr>
<tr><td class="crd-td"><strong>Spain, Portugal and Atlantic Islands</strong></td><td class="crd-td">593.210</td><td class="crd-td">1.156</td><td class="crd-td">11,5%</td><td class="crd-td">19,49</td><td class="crd-td">33,2M</td><td class="crd-td">35,1M</td></tr>
<tr><td class="crd-td"><strong>Nordics and Independent Baltic Republics</strong></td><td class="crd-td">1.320.918</td><td class="crd-td">1.416</td><td class="crd-td">14,1%</td><td class="crd-td">10,72</td><td class="crd-td">22,55M</td><td class="crd-td">22,15M</td></tr>
<tr><td class="crd-td"><strong>Greater Romania (incl. Bessarabia) and Bulgaria</strong></td><td class="crd-td">378.806</td><td class="crd-td">254</td><td class="crd-td">2,5%</td><td class="crd-td">6,71</td><td class="crd-td">24,5M</td><td class="crd-td">24,8M</td></tr>
<tr><td class="crd-td"><strong>Kingdom of Yugoslavia, Albania, Greece and Eastern Thrace</strong></td><td class="crd-td">426.050</td><td class="crd-td">425</td><td class="crd-td">4,2%</td><td class="crd-td">9,98</td><td class="crd-td">25,8M</td><td class="crd-td">24,95M</td></tr>
<tr><td class="crd-td"><strong>Iceland, Faroe Islands and Greenland</strong></td><td class="crd-td">2.178.793</td><td class="crd-td">37</td><td class="crd-td">0,4%</td><td class="crd-td">0,17</td><td class="crd-td">165k</td><td class="crd-td">180k</td></tr>
<tr><td class="crd-td"><strong>Chapter Total</strong></td><td class="crd-td">7.148.884</td><td class="crd-td">10.023</td><td class="crd-td">100%</td><td class="crd-td">14,02</td><td class="crd-td">399,12M</td><td class="crd-td">384,74M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Sub-regional distribution of 10.046 settlements alongside pre-war (1939) and end-of-war (1945) sub-regional population totals.</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Modern State or Territory</th><th class="crd-th">Settlements</th><th class="crd-th">Share of Corpus</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Germany</td><td class="crd-td">1.650</td><td class="crd-td">16,5%</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">France</td><td class="crd-td">1.303</td><td class="crd-td">13%</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">United Kingdom</td><td class="crd-td">1.188</td><td class="crd-td">11,9%</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Spain</td><td class="crd-td">984</td><td class="crd-td">9,8%</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Italy</td><td class="crd-td">603</td><td class="crd-td">6%</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Finland</td><td class="crd-td">518</td><td class="crd-td">5,2%</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Poland</td><td class="crd-td">459</td><td class="crd-td">4,6%</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Belgium</td><td class="crd-td">386</td><td class="crd-td">3,9%</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Netherlands</td><td class="crd-td">351</td><td class="crd-td">3,5%</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Norway</td><td class="crd-td">303</td><td class="crd-td">3%</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Sweden</td><td class="crd-td">196</td><td class="crd-td">2%</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Hungary</td><td class="crd-td">178</td><td class="crd-td">1,8%</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Portugal</td><td class="crd-td">174</td><td class="crd-td">1,7%</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Czechia</td><td class="crd-td">164</td><td class="crd-td">1,6%</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Romania</td><td class="crd-td">160</td><td class="crd-td">1,6%</td></tr>
<tr><td class="crd-td"><strong>16-45</strong></td><td class="crd-td">Remaining 30 states and territories</td><td class="crd-td">1.406</td><td class="crd-td">14%</td></tr>
<tr><td class="crd-td"><strong>Total</strong></td><td class="crd-td">All 45 states and territories</td><td class="crd-td">10.023</td><td class="crd-td">100%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Top 15 modern states and territories ranked by recorded inter-war European settlement count.</figcaption>
</figure>

# Largest European Metropolises, 1914–1945

Table 4 reports the 25 highest-ranking metropolitan and urban records in the chapter summary, sorted by peak 1914–1945 population. Two analytical conventions visible in Table 4 warrant explicit notice. First, Eurostat Urban Audit entries (such as Milan, Madrid, Barcelona, Naples, Athens, Rome, Bucharest, Lisbon, Valencia, Stockholm, Lyon, Munich and Sofia) project harmonised metropolitan or greater-city footprints backward across the 1914–1945 window, whereas Buringh and national census records (London, Berlin, Vienna, Hamburg, Istanbul, Glasgow, Birmingham, Prague, Marseille and Copenhagen) reflect narrower historical city-proper or inter-war administrative boundaries [@Eurostat2024; @INSEE2024; @DEMOPAST2023]. Where overlapping metropolitan and municipal records coexist in the merged inventory (for example Roma and Rome, Buda and Budapest, Warszawa and Warsaw, Wien and Greater Wien), Table 4 retains the exact archival entries so researchers can audit boundary differences directly. Second, Istanbul stands out as the sole million-class metropolis showing steady demographic contraction across 1914–1945 (falling from 1,1M in 1914 to 998,5k by 1945) following the collapse of the Ottoman Empire, the relocation of the Turkish capital to Ankara in 1923 and the departure of non-Muslim urban communities.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Coordinates</th><th class="crd-th">1914 Pop</th><th class="crd-th">1940 Pop</th><th class="crd-th">Peak (Year)</th><th class="crd-th">Corpus</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>London</strong></td><td class="crd-td">United Kingdom</td><td class="crd-td">51,51°, -0,12°</td><td class="crd-td">7,42M</td><td class="crd-td">8,39M</td><td class="crd-td">8,62M (1945)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Paris</strong></td><td class="crd-td">France</td><td class="crd-td">48,86°, 2,35°</td><td class="crd-td">4M</td><td class="crd-td">5,43M</td><td class="crd-td">5,66M (1945)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Ruhr</strong></td><td class="crd-td">Germany</td><td class="crd-td">51,41°, 6,86°</td><td class="crd-td">1,8M</td><td class="crd-td">4,23M</td><td class="crd-td">4,55M (1945)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Berlin</strong></td><td class="crd-td">Germany</td><td class="crd-td">52,52°, 13,41°</td><td class="crd-td">3,5M</td><td class="crd-td">3,83M</td><td class="crd-td">4,01M (1925)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Milano</strong></td><td class="crd-td">Italy</td><td class="crd-td">45,55°, 9,12°</td><td class="crd-td">2,42M</td><td class="crd-td">2,74M</td><td class="crd-td">2,74M (1940)</td><td class="crd-td">Eurostat Audit</td></tr>
<tr><td class="crd-td"><strong>Madrid</strong></td><td class="crd-td">Spain</td><td class="crd-td">40,44°, -3,71°</td><td class="crd-td">2,02M</td><td class="crd-td">2,29M</td><td class="crd-td">2,29M (1940)</td><td class="crd-td">Eurostat Audit</td></tr>
<tr><td class="crd-td"><strong>Manchester</strong></td><td class="crd-td">United Kingdom</td><td class="crd-td">53,48°, -2,24°</td><td class="crd-td">1,6M</td><td class="crd-td">2,09M</td><td class="crd-td">2,23M (1945)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Barcelona</strong></td><td class="crd-td">Spain</td><td class="crd-td">41,42°, 2,17°</td><td class="crd-td">1,96M</td><td class="crd-td">2,22M</td><td class="crd-td">2,22M (1940)</td><td class="crd-td">Eurostat Audit</td></tr>
<tr><td class="crd-td"><strong>Napoli</strong></td><td class="crd-td">Italy</td><td class="crd-td">40,92°, 14,19°</td><td class="crd-td">1,95M</td><td class="crd-td">2,21M</td><td class="crd-td">2,21M (1940)</td><td class="crd-td">Eurostat Audit</td></tr>
<tr><td class="crd-td"><strong>Birmingham</strong></td><td class="crd-td">United Kingdom</td><td class="crd-td">52,48°, -1,9°</td><td class="crd-td">1,5M</td><td class="crd-td">1,98M</td><td class="crd-td">2,09M (1945)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Athina</strong></td><td class="crd-td">Greece</td><td class="crd-td">38,02°, 23,76°</td><td class="crd-td">1,84M</td><td class="crd-td">2,09M</td><td class="crd-td">2,09M (1940)</td><td class="crd-td">Eurostat Audit</td></tr>
<tr><td class="crd-td"><strong>Roma</strong></td><td class="crd-td">Italy</td><td class="crd-td">41,86°, 12,39°</td><td class="crd-td">1,77M</td><td class="crd-td">2,01M</td><td class="crd-td">2,01M (1940)</td><td class="crd-td">Eurostat Audit</td></tr>
<tr><td class="crd-td"><strong>Vienna</strong></td><td class="crd-td">Austria</td><td class="crd-td">48,21°, 16,37°</td><td class="crd-td">1,79M</td><td class="crd-td">1,8M</td><td class="crd-td">1,86M (1925)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Hamburg</strong></td><td class="crd-td">Germany</td><td class="crd-td">53,58°, 10,02°</td><td class="crd-td">1,3M</td><td class="crd-td">1,49M</td><td class="crd-td">1,54M (1945)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Buda</strong></td><td class="crd-td">Hungary</td><td class="crd-td">47,5°, 19,04°</td><td class="crd-td">1,05M</td><td class="crd-td">1,44M</td><td class="crd-td">1,53M (1945)</td><td class="crd-td">Buringh Urban</td></tr>
<tr><td class="crd-td"><strong>București</strong></td><td class="crd-td">Romania</td><td class="crd-td">44,44°, 26,09°</td><td class="crd-td">1,35M</td><td class="crd-td">1,52M</td><td class="crd-td">1,52M (1940)</td><td class="crd-td">Eurostat Audit</td></tr>
<tr><td class="crd-td"><strong>Budapest</strong></td><td class="crd-td">Hungary</td><td class="crd-td">47,48°, 19,09°</td><td class="crd-td">1,31M</td><td class="crd-td">1,48M</td><td class="crd-td">1,48M (1940)</td><td class="crd-td">Eurostat Audit</td></tr>
<tr><td class="crd-td"><strong>Glasgow</strong></td><td class="crd-td">United Kingdom</td><td class="crd-td">55,87°, -4,26°</td><td class="crd-td">1,12M</td><td class="crd-td">1,35M</td><td class="crd-td">1,4M (1925)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Liverpool</strong></td><td class="crd-td">United Kingdom</td><td class="crd-td">53,41°, -2,99°</td><td class="crd-td">1,3M</td><td class="crd-td">1,25M</td><td class="crd-td">1,3M (1914)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Lisboa</strong></td><td class="crd-td">Portugal</td><td class="crd-td">38,81°, -9,17°</td><td class="crd-td">1,14M</td><td class="crd-td">1,29M</td><td class="crd-td">1,29M (1940)</td><td class="crd-td">Eurostat Audit</td></tr>
<tr><td class="crd-td"><strong>Warszawa</strong></td><td class="crd-td">Poland</td><td class="crd-td">52,23°, 21,05°</td><td class="crd-td">1,06M</td><td class="crd-td">1,2M</td><td class="crd-td">1,2M (1940)</td><td class="crd-td">Eurostat Audit</td></tr>
<tr><td class="crd-td"><strong>Istanbul</strong></td><td class="crd-td">Turkey-in-Europe</td><td class="crd-td">41,01°, 28,98°</td><td class="crd-td">1,12M</td><td class="crd-td">941,6k</td><td class="crd-td">1,12M (1914)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Copenhagen</strong></td><td class="crd-td">Denmark</td><td class="crd-td">55,68°, 12,57°</td><td class="crd-td">620k</td><td class="crd-td">989,6k</td><td class="crd-td">1,07M (1945)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Valencia</strong></td><td class="crd-td">Spain</td><td class="crd-td">39,47°, -0,44°</td><td class="crd-td">240,4k</td><td class="crd-td">1M</td><td class="crd-td">1M (1940)</td><td class="crd-td">Eurostat Audit</td></tr>
<tr><td class="crd-td"><strong>Stockholm</strong></td><td class="crd-td">Sweden</td><td class="crd-td">59,33°, 18,02°</td><td class="crd-td">868,5k</td><td class="crd-td">983,6k</td><td class="crd-td">983,6k (1940)</td><td class="crd-td">Eurostat Audit</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Top 25 European metropolitan and urban entries in the 1914–1945 settlement inventory ranked by peak population.</figcaption>
</figure>

# Sources

<div id="refs"></div>
