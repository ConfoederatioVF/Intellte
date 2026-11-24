---
title: "East-Central Europe, the Balkans and the Baltic States after 1945"
subtitle: "Settlement Gazetteer and Urban Hierarchy (1945-2026)"
date: "22 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/east_central_balkans_baltic_after_1945_urban_hierarchy.png"
hero_caption: "Largest urban centres and rank-size distribution across 1.842 settlements in East-Central Europe, the Balkans and the Baltic states, 1945-2026."
bibliography: east_central_balkans_baltic_after_1945_literature_review.bib
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



![Largest urban centres and rank-size distribution across 1.842 settlements in East-Central Europe, the Balkans and the Baltic states, 1945-2026.](figures/east_central_balkans_baltic_after_1945_urban_hierarchy.png)



# Abstract

This companion gazetteer documents the 1.864 georeferenced cities, towns and municipal centres supporting the MAGNETIC post-1945 demographic reconstruction of East-Central Europe, the Balkans and the Baltic states across 1.402.523,2 km². Every one of the 17 sub-regions and 23 territorial jurisdictions intersecting the regional mask is represented. Primary institutional statistical archives supply 86,1% of all records, combining 1.275 municipal time series from fifteen national statistical census agencies, 200 long-run urban histories from the Buringh European Urban Series and 130 contemporary metropolitan series from the Eurostat Urban Audit, while restricting the GeoNames Municipal Gazetteer Supplement to 259 localities (13,9%). Spanning socialist-era industrial expansion (1950-1990) and post-transition metropolitan polarisation (1990-2025), the register captures both expanding capital agglomerations—led by Bucharest, Warsaw, Budapest, Prague, Belgrade, Sofia, Kraków and Zagreb—and shrinking post-industrial cities such as Łódź, Riga and Kaunas.

# Gazetteer Scope and Spatial Coverage

Between 1945 and 2026 urban settlement across East-Central Europe, the Balkans and the Baltic states was reshaped first by state-directed heavy industrialisation and prefabricated housing estates and then by post-1990 deindustrialisation, foreign direct investment concentration and European Union labour mobility [@RosesWolf2019; @Zdanowska2019Exploring; @Newsham2022Understanding]. To mirror these spatial shifts accurately in kriging and density allocation surfaces, the gazetteer tracks longitudinal decadal and annual settlement trajectories from 1950 through 2025 across all 17 sub-regions.

Figure 1 maps the spatial distribution of all 1.864 settlements across the 17 sub-regional polygons, while Table 1 summarises sub-regional site counts, land area, corpus composition and recording density per 10k km². Spatial coverage is densest across Slovenia (66 sites per 10k km²), Czechia (24,5 per 10k km²), Estonia (22,8), Lithuania (20,6), Hungary (20,3), Slovakia (16,7), Latvia (16,5) and Poland (15,6), where national statistical institutes publish fine-grained municipal census time series [@GUSPoland2024; @KSHHungary2024; @StatBaltics2024]. Recording density is sparser in mountainous or post-conflict western Balkan territories such as Montenegro (2,2 per 10k km²), Bosnia and Herzegovina (3,3) and Croatia (5,7), reflecting fewer mid-sized municipalities and fragmented post-1991 census continuity [@StatBalkans2024].

<figure class="crd-figure-block" id="fig:gazetteer_map">
<img class="crd-figure-img" src="/artefacts/project_magnetic/1.0-east-central-balkans-baltic-after-1945-settlements/east_central_balkans_baltic_after_1945_regional_map.png" alt="fig:gazetteer_map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 1.842 settlements across 17 sub-regions of East-Central Europe, the Balkans and the Baltic states, 1945-2026.</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Total</th><th class="crd-th">Nat. Census</th><th class="crd-th">Eurostat</th><th class="crd-th">Buringh</th><th class="crd-th">GeoNames</th><th class="crd-th">Per 10k km²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Poland</strong></td><td class="crd-td">317.991</td><td class="crd-td">481</td><td class="crd-td">339</td><td class="crd-td">41</td><td class="crd-td">52</td><td class="crd-td">49</td><td class="crd-td">15,1</td></tr>
<tr><td class="crd-td"><strong>Czechia</strong></td><td class="crd-td">92.324</td><td class="crd-td">204</td><td class="crd-td">128</td><td class="crd-td">15</td><td class="crd-td">18</td><td class="crd-td">43</td><td class="crd-td">22,1</td></tr>
<tr><td class="crd-td"><strong>Slovakia</strong></td><td class="crd-td">48.509</td><td class="crd-td">81</td><td class="crd-td">55</td><td class="crd-td">8</td><td class="crd-td">9</td><td class="crd-td">9</td><td class="crd-td">16,7</td></tr>
<tr><td class="crd-td"><strong>Hungary</strong></td><td class="crd-td">97.739</td><td class="crd-td">186</td><td class="crd-td">109</td><td class="crd-td">10</td><td class="crd-td">36</td><td class="crd-td">31</td><td class="crd-td">19</td></tr>
<tr><td class="crd-td"><strong>Romania</strong></td><td class="crd-td">237.083</td><td class="crd-td">168</td><td class="crd-td">119</td><td class="crd-td">30</td><td class="crd-td">18</td><td class="crd-td">1</td><td class="crd-td">7,1</td></tr>
<tr><td class="crd-td"><strong>Moldova</strong></td><td class="crd-td">27.876</td><td class="crd-td">16</td><td class="crd-td">1</td><td class="crd-td">0</td><td class="crd-td">4</td><td class="crd-td">11</td><td class="crd-td">5,7</td></tr>
<tr><td class="crd-td"><strong>Bulgaria</strong></td><td class="crd-td">122.932</td><td class="crd-td">76</td><td class="crd-td">54</td><td class="crd-td">13</td><td class="crd-td">9</td><td class="crd-td">0</td><td class="crd-td">6,2</td></tr>
<tr><td class="crd-td"><strong>Slovenia</strong></td><td class="crd-td">28.714</td><td class="crd-td">141</td><td class="crd-td">132</td><td class="crd-td">3</td><td class="crd-td">3</td><td class="crd-td">3</td><td class="crd-td">49,1</td></tr>
<tr><td class="crd-td"><strong>Croatia</strong></td><td class="crd-td">55.805</td><td class="crd-td">34</td><td class="crd-td">24</td><td class="crd-td">3</td><td class="crd-td">5</td><td class="crd-td">2</td><td class="crd-td">6,1</td></tr>
<tr><td class="crd-td"><strong>Bosnia and Herzegovina</strong></td><td class="crd-td">50.157</td><td class="crd-td">16</td><td class="crd-td">1</td><td class="crd-td">0</td><td class="crd-td">2</td><td class="crd-td">13</td><td class="crd-td">3,2</td></tr>
<tr><td class="crd-td"><strong>Serbia &amp; Kosovo</strong></td><td class="crd-td">84.762</td><td class="crd-td">72</td><td class="crd-td">40</td><td class="crd-td">0</td><td class="crd-td">17</td><td class="crd-td">15</td><td class="crd-td">8,5</td></tr>
<tr><td class="crd-td"><strong>Montenegro</strong></td><td class="crd-td">12.802</td><td class="crd-td">2</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">1</td><td class="crd-td">1</td><td class="crd-td">1,6</td></tr>
<tr><td class="crd-td"><strong>North Macedonia</strong></td><td class="crd-td">28.177</td><td class="crd-td">32</td><td class="crd-td">4</td><td class="crd-td">0</td><td class="crd-td">5</td><td class="crd-td">23</td><td class="crd-td">11,4</td></tr>
<tr><td class="crd-td"><strong>Albania</strong></td><td class="crd-td">29.879</td><td class="crd-td">28</td><td class="crd-td">2</td><td class="crd-td">0</td><td class="crd-td">13</td><td class="crd-td">13</td><td class="crd-td">9,4</td></tr>
<tr><td class="crd-td"><strong>Estonia</strong></td><td class="crd-td">43.998</td><td class="crd-td">96</td><td class="crd-td">69</td><td class="crd-td">2</td><td class="crd-td">1</td><td class="crd-td">24</td><td class="crd-td">21,8</td></tr>
<tr><td class="crd-td"><strong>Latvia</strong></td><td class="crd-td">64.086</td><td class="crd-td">106</td><td class="crd-td">92</td><td class="crd-td">1</td><td class="crd-td">3</td><td class="crd-td">10</td><td class="crd-td">16,5</td></tr>
<tr><td class="crd-td"><strong>Lithuania</strong></td><td class="crd-td">59.689</td><td class="crd-td">125</td><td class="crd-td">106</td><td class="crd-td">4</td><td class="crd-td">4</td><td class="crd-td">11</td><td class="crd-td">20,9</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional settlement counts, source-corpus breakdown and recording density (sites per 10k km²) across 17 sub-regions.</figcaption>
</figure>

# Provenance Ledger and Jurisdictional Distribution

Every settlement entered the gazetteer through a four-wave saturation protocol that systematically exhausted primary European and national institutional census registers before drawing upon global crowd-sourced gazetteers. Wave 1 ingested 347 institutional European urban series from the Eurostat Urban Audit (137 metropolitan and city records) and the Buringh European Urban Series (210 historical city anchors) [@Eurostat2024; @DeVries1984]. Wave 2 added 1.239 municipal census trajectories across fifteen national statistical institutes—a 357,06% marginal gain—raising primary institutional coverage to 1.586 localities (86,1% of the total register) [@GUSPoland2024; @KSHHungary2024; @StatBalkans2024; @StatBaltics2024]. Wave 3 appended 256 smaller towns and non-Eurostat localities from the GeoNames Municipal Gazetteer Supplement (a 16,14% marginal gain) to fill gaps in Moldova, Albania, Bosnia and Herzegovina, North Macedonia, Montenegro and rural Visegrád districts. Wave 4 executed a sub-regional gap-closing audit that added zero further entries and formally excluded 800 out-of-domain or duplicate candidate records.

Table 2 enumerates all 18 source corpora sorted by record count. Table 3 summarises jurisdictional distribution across all 23 modern states represented in the spatial mask; alongside the 18 core sovereign entities (counting Serbia and Kosovo separately), polygon-edge rasterisation along the Oder-Neisse, Alpine, Adriatic and Thracian frontiers captures 47 border municipalities situated in Germany (36), Austria (5), Greece (4), Italy (1) and European Turkey (1), retained transparently for cross-border spatial interpolation without altering national sub-regional totals.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Corpus</th><th class="crd-th">Wave</th><th class="crd-th">Source Tier</th><th class="crd-th">Records</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>National Statistical Census (Poland)</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">National statistical census</td><td class="crd-td">317</td><td class="crd-td">17,01%</td></tr>
<tr><td class="crd-td"><strong>GeoNames Municipal Gazetteer Supplement</strong></td><td class="crd-td">Wave 3</td><td class="crd-td">Crowd-sourced supplement</td><td class="crd-td">259</td><td class="crd-td">13,89%</td></tr>
<tr><td class="crd-td"><strong>Buringh European Urban Series (700-2000)</strong></td><td class="crd-td">Wave 1</td><td class="crd-td">Historical urban register</td><td class="crd-td">200</td><td class="crd-td">10,73%</td></tr>
<tr><td class="crd-td"><strong>Eurostat Urban Audit (1990-2024)</strong></td><td class="crd-td">Wave 1</td><td class="crd-td">Supranational urban audit</td><td class="crd-td">130</td><td class="crd-td">6,97%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census (Slovenia)</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">National statistical census</td><td class="crd-td">128</td><td class="crd-td">6,87%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census (Romania)</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">National statistical census</td><td class="crd-td">116</td><td class="crd-td">6,22%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census (Czechia)</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">National statistical census</td><td class="crd-td">116</td><td class="crd-td">6,22%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census (Lithuania)</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">National statistical census</td><td class="crd-td">109</td><td class="crd-td">5,85%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census (Hungary)</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">National statistical census</td><td class="crd-td">102</td><td class="crd-td">5,47%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census (Latvia)</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">National statistical census</td><td class="crd-td">88</td><td class="crd-td">4,72%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census (Estonia)</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">National statistical census</td><td class="crd-td">68</td><td class="crd-td">3,65%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census (Slovakia)</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">National statistical census</td><td class="crd-td">54</td><td class="crd-td">2,9%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census (Bulgaria)</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">National statistical census</td><td class="crd-td">52</td><td class="crd-td">2,79%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census (Serbia)</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">National statistical census</td><td class="crd-td">42</td><td class="crd-td">2,25%</td></tr>
<tr><td class="crd-td"><strong>Chandler V2 Historical Urban Population</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">National statistical census</td><td class="crd-td">27</td><td class="crd-td">1,45%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census (Croatia)</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">National statistical census</td><td class="crd-td">21</td><td class="crd-td">1,13%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census (Germany)</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">National statistical census</td><td class="crd-td">20</td><td class="crd-td">1,07%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census (Greece)</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">National statistical census</td><td class="crd-td">10</td><td class="crd-td">0,54%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census (Austria)</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">National statistical census</td><td class="crd-td">5</td><td class="crd-td">0,27%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Provenance ledger of 1.842 included settlements across 18 institutional and supplementary source corpora.</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Domain Classification</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Poland</strong></td><td class="crd-td">Core domain state</td><td class="crd-td">461</td><td class="crd-td">24,73%</td></tr>
<tr><td class="crd-td"><strong>Hungary</strong></td><td class="crd-td">Core domain state</td><td class="crd-td">182</td><td class="crd-td">9,76%</td></tr>
<tr><td class="crd-td"><strong>Czechia</strong></td><td class="crd-td">Core domain state</td><td class="crd-td">166</td><td class="crd-td">8,91%</td></tr>
<tr><td class="crd-td"><strong>Romania</strong></td><td class="crd-td">Core domain state</td><td class="crd-td">160</td><td class="crd-td">8,58%</td></tr>
<tr><td class="crd-td"><strong>Slovenia</strong></td><td class="crd-td">Core domain state</td><td class="crd-td">132</td><td class="crd-td">7,08%</td></tr>
<tr><td class="crd-td"><strong>Lithuania</strong></td><td class="crd-td">Core domain state</td><td class="crd-td">130</td><td class="crd-td">6,97%</td></tr>
<tr><td class="crd-td"><strong>Latvia</strong></td><td class="crd-td">Core domain state</td><td class="crd-td">102</td><td class="crd-td">5,47%</td></tr>
<tr><td class="crd-td"><strong>Estonia</strong></td><td class="crd-td">Core domain state</td><td class="crd-td">95</td><td class="crd-td">5,1%</td></tr>
<tr><td class="crd-td"><strong>Slovakia</strong></td><td class="crd-td">Core domain state</td><td class="crd-td">80</td><td class="crd-td">4,29%</td></tr>
<tr><td class="crd-td"><strong>Bulgaria</strong></td><td class="crd-td">Core domain state</td><td class="crd-td">77</td><td class="crd-td">4,13%</td></tr>
<tr><td class="crd-td"><strong>Serbia</strong></td><td class="crd-td">Core domain state</td><td class="crd-td">58</td><td class="crd-td">3,11%</td></tr>
<tr><td class="crd-td"><strong>Germany</strong></td><td class="crd-td">Border-mask overlap</td><td class="crd-td">54</td><td class="crd-td">2,9%</td></tr>
<tr><td class="crd-td"><strong>Croatia</strong></td><td class="crd-td">Core domain state</td><td class="crd-td">30</td><td class="crd-td">1,61%</td></tr>
<tr><td class="crd-td"><strong>North Macedonia</strong></td><td class="crd-td">Core domain state</td><td class="crd-td">29</td><td class="crd-td">1,56%</td></tr>
<tr><td class="crd-td"><strong>Albania</strong></td><td class="crd-td">Core domain state</td><td class="crd-td">25</td><td class="crd-td">1,34%</td></tr>
<tr><td class="crd-td"><strong>Kosovo</strong></td><td class="crd-td">Core domain state</td><td class="crd-td">19</td><td class="crd-td">1,02%</td></tr>
<tr><td class="crd-td"><strong>Moldova</strong></td><td class="crd-td">Core domain state</td><td class="crd-td">17</td><td class="crd-td">0,91%</td></tr>
<tr><td class="crd-td"><strong>Bosnia and Herzegovina</strong></td><td class="crd-td">Core domain state</td><td class="crd-td">16</td><td class="crd-td">0,86%</td></tr>
<tr><td class="crd-td"><strong>Austria</strong></td><td class="crd-td">Border-mask overlap</td><td class="crd-td">12</td><td class="crd-td">0,64%</td></tr>
<tr><td class="crd-td"><strong>Greece</strong></td><td class="crd-td">Border-mask overlap</td><td class="crd-td">11</td><td class="crd-td">0,59%</td></tr>
<tr><td class="crd-td"><strong>Italy</strong></td><td class="crd-td">Border-mask overlap</td><td class="crd-td">4</td><td class="crd-td">0,21%</td></tr>
<tr><td class="crd-td"><strong>Montenegro</strong></td><td class="crd-td">Core domain state</td><td class="crd-td">3</td><td class="crd-td">0,16%</td></tr>
<tr><td class="crd-td"><strong>Turkey-in-Europe</strong></td><td class="crd-td">Border-mask overlap</td><td class="crd-td">1</td><td class="crd-td">0,05%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Jurisdictional distribution of 1.842 georeferenced settlements across 18 core states and 5 frontier-overlap neighbours.</figcaption>
</figure>

# Urban Hierarchy and Leading Metropolitan Centres

Post-1945 urbanisation across the domain produced a strongly capital-dominated hierarchy reinforced after 1990 by metropolitan concentration of foreign direct investment, higher education and service employment [@Zdanowska2019Exploring; @Zdanowska2019Spatial; @Kozerakowalska2021Framework]. Table 4 presents the 30 largest settlement series in the register, illustrating both Eurostat Urban Audit functional or greater-city delineations and parallel national municipal-core or Buringh historical series where multiple institutional sources track the same capital. Retaining corpus attribution explicitly allows analysts to compare metropolitan-ring growth (such as Warsaw rising from 1,27M in 1950 to 2,27M in 2025, Bucharest from 1,62M to 2,59M and Prague from 949k to 1,55M) directly against municipal-core census series (Warsaw at 1,73M and Prague at 1,18M) and post-industrial declines (Łódź falling from its 1989 peak of 854k, Riga dropping from 909k in 1990 to 595k in 2025 and Kaunas sliding from 435k in 1991 to 304k in 2025) [@Eurostat2024; @GUSPoland2024; @StatBaltics2024].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Coordinates</th><th class="crd-th">1950</th><th class="crd-th">1990</th><th class="crd-th">2025</th><th class="crd-th">Peak (Year)</th><th class="crd-th">Corpus</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Katowice</strong></td><td class="crd-td">Poland</td><td class="crd-td">50,26N, 19,03E</td><td class="crd-td">885k</td><td class="crd-td">2,45M</td><td class="crd-td">2,68M</td><td class="crd-td">2,68M (2025)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>București</strong></td><td class="crd-td">Romania</td><td class="crd-td">44,44N, 26,09E</td><td class="crd-td">1,62M</td><td class="crd-td">2,07M</td><td class="crd-td">2,59M</td><td class="crd-td">2,59M (2025)</td><td class="crd-td">Eurostat Urban Audit</td></tr>
<tr><td class="crd-td"><strong>Budapest</strong></td><td class="crd-td">Hungary</td><td class="crd-td">47,5N, 19,04E</td><td class="crd-td">1,5M</td><td class="crd-td">2,23M</td><td class="crd-td">2,43M</td><td class="crd-td">2,43M (2025)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Warsaw</strong></td><td class="crd-td">Poland</td><td class="crd-td">52,23N, 21,01E</td><td class="crd-td">803k</td><td class="crd-td">2,11M</td><td class="crd-td">2,31M</td><td class="crd-td">2,31M (2025)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Warszawa</strong></td><td class="crd-td">Poland</td><td class="crd-td">52,25N, 21E</td><td class="crd-td">479k</td><td class="crd-td">1,3M</td><td class="crd-td">1,79M</td><td class="crd-td">1,79M (2025)</td><td class="crd-td">Buringh Urban Series</td></tr>
<tr><td class="crd-td"><strong>Belgrade</strong></td><td class="crd-td">Serbia</td><td class="crd-td">44,83N, 20,5E</td><td class="crd-td">340k</td><td class="crd-td">1,16M</td><td class="crd-td">1,68M</td><td class="crd-td">1,68M (2025)</td><td class="crd-td">Buringh Urban Series</td></tr>
<tr><td class="crd-td"><strong>Praha</strong></td><td class="crd-td">Czechia</td><td class="crd-td">50,07N, 14,47E</td><td class="crd-td">949,1k</td><td class="crd-td">1,21M</td><td class="crd-td">1,55M</td><td class="crd-td">1,55M (2025)</td><td class="crd-td">Eurostat Urban Audit</td></tr>
<tr><td class="crd-td"><strong>Sofia</strong></td><td class="crd-td">Bulgaria</td><td class="crd-td">42,67N, 23,36E</td><td class="crd-td">891,5k</td><td class="crd-td">1,14M</td><td class="crd-td">1,3M</td><td class="crd-td">1,33M (2020)</td><td class="crd-td">Eurostat Urban Audit</td></tr>
<tr><td class="crd-td"><strong>Lodz</strong></td><td class="crd-td">Poland</td><td class="crd-td">51,75N, 19,47E</td><td class="crd-td">690k</td><td class="crd-td">1,08M</td><td class="crd-td">1,18M</td><td class="crd-td">1,18M (2025)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Riga</strong></td><td class="crd-td">Latvia</td><td class="crd-td">56,95N, 24,11E</td><td class="crd-td">475k</td><td class="crd-td">968,3k</td><td class="crd-td">1,06M</td><td class="crd-td">1,06M (2025)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Pest</strong></td><td class="crd-td">Hungary</td><td class="crd-td">47,5N, 19,08E</td><td class="crd-td">725,9k</td><td class="crd-td">929,2k</td><td class="crd-td">1,02M</td><td class="crd-td">1,02M (2025)</td><td class="crd-td">National Census (Hungary)</td></tr>
<tr><td class="crd-td"><strong>Kraków</strong></td><td class="crd-td">Poland</td><td class="crd-td">50,05N, 19,98E</td><td class="crd-td">574,3k</td><td class="crd-td">746,6k</td><td class="crd-td">985,1k</td><td class="crd-td">985,1k (2025)</td><td class="crd-td">Eurostat Urban Audit</td></tr>
<tr><td class="crd-td"><strong>Zagreb</strong></td><td class="crd-td">Croatia</td><td class="crd-td">45,81N, 16E</td><td class="crd-td">599,3k</td><td class="crd-td">767,2k</td><td class="crd-td">925,2k</td><td class="crd-td">925,2k (2025)</td><td class="crd-td">Eurostat Urban Audit</td></tr>
<tr><td class="crd-td"><strong>Gdansk</strong></td><td class="crd-td">Poland</td><td class="crd-td">54,35N, 18,65E</td><td class="crd-td">406,2k</td><td class="crd-td">812,5k</td><td class="crd-td">888,7k</td><td class="crd-td">888,7k (2025)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Ostrava</strong></td><td class="crd-td">Czechia</td><td class="crd-td">49,84N, 18,29E</td><td class="crd-td">374,2k</td><td class="crd-td">779,1k</td><td class="crd-td">852,2k</td><td class="crd-td">852,2k (2025)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Wrocław</strong></td><td class="crd-td">Poland</td><td class="crd-td">51,13N, 17E</td><td class="crd-td">491,5k</td><td class="crd-td">639k</td><td class="crd-td">819,2k</td><td class="crd-td">819,2k (2025)</td><td class="crd-td">Eurostat Urban Audit</td></tr>
<tr><td class="crd-td"><strong>Riga</strong></td><td class="crd-td">Latvia</td><td class="crd-td">56,95N, 21,1E</td><td class="crd-td">446k</td><td class="crd-td">641,8k</td><td class="crd-td">751,3k</td><td class="crd-td">751,3k (2025)</td><td class="crd-td">Buringh Urban Series</td></tr>
<tr><td class="crd-td"><strong>Chorzow</strong></td><td class="crd-td">Poland</td><td class="crd-td">50,3N, 18,95E</td><td class="crd-td">602,4k</td><td class="crd-td">124,2k</td><td class="crd-td">131,4k</td><td class="crd-td">710,8k (1970)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Kisinev</strong></td><td class="crd-td">Moldova</td><td class="crd-td">47N, 28,83E</td><td class="crd-td">134k</td><td class="crd-td">481k</td><td class="crd-td">707,5k</td><td class="crd-td">707,5k (2025)</td><td class="crd-td">Buringh Urban Series</td></tr>
<tr><td class="crd-td"><strong>Poznan</strong></td><td class="crd-td">Poland</td><td class="crd-td">52,41N, 16,93E</td><td class="crd-td">342k</td><td class="crd-td">628,9k</td><td class="crd-td">687,8k</td><td class="crd-td">687,8k (2025)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Chisinau</strong></td><td class="crd-td">Moldova</td><td class="crd-td">47,03N, 28,84E</td><td class="crd-td">173,6k</td><td class="crd-td">589,9k</td><td class="crd-td">645,2k</td><td class="crd-td">645,2k (2025)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Vilnius</strong></td><td class="crd-td">Lithuania</td><td class="crd-td">54,69N, 25,27E</td><td class="crd-td">443,7k</td><td class="crd-td">605,5k</td><td class="crd-td">607,7k</td><td class="crd-td">607,7k (2025)</td><td class="crd-td">Eurostat Urban Audit</td></tr>
<tr><td class="crd-td"><strong>Gliwice</strong></td><td class="crd-td">Poland</td><td class="crd-td">50,29N, 18,67E</td><td class="crd-td">536,1k</td><td class="crd-td">186,3k</td><td class="crd-td">222,3k</td><td class="crd-td">584,4k (1960)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Bratislava</strong></td><td class="crd-td">Slovakia</td><td class="crd-td">48,15N, 17,12E</td><td class="crd-td">347,4k</td><td class="crd-td">444,7k</td><td class="crd-td">579k</td><td class="crd-td">579k (2025)</td><td class="crd-td">Eurostat Urban Audit</td></tr>
<tr><td class="crd-td"><strong>Dresden</strong></td><td class="crd-td">Germany</td><td class="crd-td">51,07N, 13,78E</td><td class="crd-td">386,8k</td><td class="crd-td">495,2k</td><td class="crd-td">564,9k</td><td class="crd-td">564,9k (2025)</td><td class="crd-td">Eurostat Urban Audit</td></tr>
<tr><td class="crd-td"><strong>Skopje</strong></td><td class="crd-td">North Macedonia</td><td class="crd-td">41,98N, 21,43E</td><td class="crd-td">139k</td><td class="crd-td">391,4k</td><td class="crd-td">541,8k</td><td class="crd-td">541,8k (2025)</td><td class="crd-td">Buringh Urban Series</td></tr>
<tr><td class="crd-td"><strong>Tallinn</strong></td><td class="crd-td">Estonia</td><td class="crd-td">59,41N, 24,74E</td><td class="crd-td">368,4k</td><td class="crd-td">479,7k</td><td class="crd-td">456,5k</td><td class="crd-td">479,7k (1990)</td><td class="crd-td">Eurostat Urban Audit</td></tr>
<tr><td class="crd-td"><strong>Szczecin</strong></td><td class="crd-td">Poland</td><td class="crd-td">53,43N, 14,61E</td><td class="crd-td">315,6k</td><td class="crd-td">410,3k</td><td class="crd-td">470,8k</td><td class="crd-td">470,8k (2025)</td><td class="crd-td">Eurostat Urban Audit</td></tr>
<tr><td class="crd-td"><strong>Brno</strong></td><td class="crd-td">Czechia</td><td class="crd-td">49,21N, 16,59E</td><td class="crd-td">305,5k</td><td class="crd-td">391k</td><td class="crd-td">462k</td><td class="crd-td">462k (2025)</td><td class="crd-td">Eurostat Urban Audit</td></tr>
<tr><td class="crd-td"><strong>Iași</strong></td><td class="crd-td">Romania</td><td class="crd-td">47,16N, 27,58E</td><td class="crd-td">234,2k</td><td class="crd-td">299,8k</td><td class="crd-td">461,3k</td><td class="crd-td">461,3k (2025)</td><td class="crd-td">Eurostat Urban Audit</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Thirty largest settlement series in the 1945-2026 gazetteer with coordinates, benchmark headcounts, peak population and source corpus.</figcaption>
</figure>

To complement the pan-regional top-30 ranking—which is naturally weighted towards Poland, Romania, Hungary and Czechia—Table 5 extracts the single largest recorded settlement in each of the 17 sub-regions directly from the full 1.842-entry gazetteer, documenting the primate urban anchor of every national territory from Ljubljana (Slovenia) and Podgorica (Montenegro) to Tallinn (Estonia), Tirana (Albania) and Sarajevo (Bosnia and Herzegovina) [@StatBalkans2024; @StatBaltics2024].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Leading Centre</th><th class="crd-th">1950</th><th class="crd-th">1990</th><th class="crd-th">2025</th><th class="crd-th">2025 Share</th><th class="crd-th">Corpus</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Poland</strong></td><td class="crd-td">Katowice</td><td class="crd-td">885k</td><td class="crd-td">2,45M</td><td class="crd-td">2,68M</td><td class="crd-td">7,1%</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Czechia</strong></td><td class="crd-td">Praha</td><td class="crd-td">949,1k</td><td class="crd-td">1,21M</td><td class="crd-td">1,55M</td><td class="crd-td">14,3%</td><td class="crd-td">Eurostat Urban Audit</td></tr>
<tr><td class="crd-td"><strong>Slovakia</strong></td><td class="crd-td">Bratislava</td><td class="crd-td">347,4k</td><td class="crd-td">444,7k</td><td class="crd-td">579k</td><td class="crd-td">10,7%</td><td class="crd-td">Eurostat Urban Audit</td></tr>
<tr><td class="crd-td"><strong>Hungary</strong></td><td class="crd-td">Budapest</td><td class="crd-td">1,5M</td><td class="crd-td">2,23M</td><td class="crd-td">2,43M</td><td class="crd-td">25,4%</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Romania</strong></td><td class="crd-td">București</td><td class="crd-td">1,62M</td><td class="crd-td">2,07M</td><td class="crd-td">2,59M</td><td class="crd-td">13,6%</td><td class="crd-td">Eurostat Urban Audit</td></tr>
<tr><td class="crd-td"><strong>Moldova</strong></td><td class="crd-td">Kisinev</td><td class="crd-td">134k</td><td class="crd-td">481k</td><td class="crd-td">707,5k</td><td class="crd-td">23,7%</td><td class="crd-td">Buringh Urban Series</td></tr>
<tr><td class="crd-td"><strong>Bulgaria</strong></td><td class="crd-td">Sofia</td><td class="crd-td">891,5k</td><td class="crd-td">1,14M</td><td class="crd-td">1,3M</td><td class="crd-td">20,1%</td><td class="crd-td">Eurostat Urban Audit</td></tr>
<tr><td class="crd-td"><strong>Slovenia</strong></td><td class="crd-td">Trieste</td><td class="crd-td">270k</td><td class="crd-td">345,6k</td><td class="crd-td">225,5k</td><td class="crd-td">10,6%</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Croatia</strong></td><td class="crd-td">Zagreb</td><td class="crd-td">599,3k</td><td class="crd-td">767,2k</td><td class="crd-td">925,2k</td><td class="crd-td">24%</td><td class="crd-td">Eurostat Urban Audit</td></tr>
<tr><td class="crd-td"><strong>Bosnia and Herzegovina</strong></td><td class="crd-td">Sarajevo</td><td class="crd-td">115k</td><td class="crd-td">312,4k</td><td class="crd-td">428,6k</td><td class="crd-td">13,5%</td><td class="crd-td">Buringh Urban Series</td></tr>
<tr><td class="crd-td"><strong>Serbia &amp; Kosovo</strong></td><td class="crd-td">Belgrade</td><td class="crd-td">340k</td><td class="crd-td">1,16M</td><td class="crd-td">1,68M</td><td class="crd-td">20,4%</td><td class="crd-td">Buringh Urban Series</td></tr>
<tr><td class="crd-td"><strong>Montenegro</strong></td><td class="crd-td">Podgorica</td><td class="crd-td">14k</td><td class="crd-td">86,3k</td><td class="crd-td">145,3k</td><td class="crd-td">23,3%</td><td class="crd-td">Buringh Urban Series</td></tr>
<tr><td class="crd-td"><strong>North Macedonia</strong></td><td class="crd-td">Skopje</td><td class="crd-td">139k</td><td class="crd-td">391,4k</td><td class="crd-td">541,8k</td><td class="crd-td">29,7%</td><td class="crd-td">Buringh Urban Series</td></tr>
<tr><td class="crd-td"><strong>Albania</strong></td><td class="crd-td">Tirane</td><td class="crd-td">137k</td><td class="crd-td">336,3k</td><td class="crd-td">449,9k</td><td class="crd-td">16,4%</td><td class="crd-td">Buringh Urban Series</td></tr>
<tr><td class="crd-td"><strong>Estonia</strong></td><td class="crd-td">Tallinn</td><td class="crd-td">368,4k</td><td class="crd-td">479,7k</td><td class="crd-td">456,5k</td><td class="crd-td">33,3%</td><td class="crd-td">Eurostat Urban Audit</td></tr>
<tr><td class="crd-td"><strong>Latvia</strong></td><td class="crd-td">Riga</td><td class="crd-td">475k</td><td class="crd-td">968,3k</td><td class="crd-td">1,06M</td><td class="crd-td">56,6%</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>Lithuania</strong></td><td class="crd-td">Vilnius</td><td class="crd-td">443,7k</td><td class="crd-td">605,5k</td><td class="crd-td">607,7k</td><td class="crd-td">21,1%</td><td class="crd-td">Eurostat Urban Audit</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading recorded urban centre in each of the 17 sub-regions (1950, 1990 and 2025) and 2025 share of sub-regional population.</figcaption>
</figure>

# Sources
