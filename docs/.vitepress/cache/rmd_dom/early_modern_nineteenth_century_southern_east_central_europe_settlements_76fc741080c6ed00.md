---
title: "Early Modern and Nineteenth-Century Southern and East-Central Europe"
subtitle: "Settlement Gazetteer and Urban Hierarchy (1750-1914)"
date: "22 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
hero_figure: "figures/early_modern_nineteenth_century_southern_east_central_europe_urban_hierarchy.png"
hero_caption: "Leading urban settlements and double-logarithmic rank-size distribution across 3.882 geocoded settlements in Southern and East-Central Europe (1750-1914)."
hero_label: "fig:c19_southern_east_central_settlements_hierarchy"
bibliography: early_modern_nineteenth_century_southern_east_central_europe_literature_review.bib
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




![Leading urban settlements and double-logarithmic rank-size distribution across 3.882 geocoded settlements in Southern and East-Central Europe (1750-1914).](figures/early_modern_nineteenth_century_southern_east_central_europe_urban_hierarchy.png)



# Abstract

This companion settlement gazetteer documents the 3.743 geocoded cities, market towns and administrative centres compiled across 9 sub-regions and 31 modern polities in Southern and East-Central Europe between 1750 and 1914. Archival and institutional sources supply 86,1% of all entries (3.341 settlements across 23 national census and urban-history corpora), led by the Buringh European Urban Corpus (723 cities), INE Spain historical municipal censuses (712 municipalities), national statistical census series across 18 countries (1.560 settlements), Eurostat Urban Audit metropolitan back-casts (328 cities), INSEE borderland communes (16) and DEMOPAST ISTAT city extracts (2). Municipal gazetteer backfills from GeoNames account for the remaining 541 entries (13,9%). Between 1750 and 1914 the number of settlements exceeding 10k inhabitants expands from 440 to 2.180, while cities above 100k multiply from 17 to 152, producing a multi-polity rank-size curve with power-law exponent 0,84 and coefficient of determination 0,97. The tables below detail the provenance ledger, chronological slice coverage, sub-regional and national spatial sampling densities and the 25 highest-ranked urban records.

# Gazetteer Architecture and Provenance Ledger

Early modern and nineteenth-century Southern and East-Central Europe bridged two distinct urban traditions: the dense Mediterranean city network inherited from classical and mediaeval municipal republics in Italy, Iberia and the Aegean alongside a rapidly industrialising railway-age urban grid across Bohemia, Austria, Hungary, Partitioned Poland, the Baltic coast and the emerging Balkan nation-states [@DeVries1984; @RosesWolf2019]. MAGNETIC separates macro-regional demographic totals (rising from 61,51M in 1750 to 160,82M in 1910) from point-level settlement anchoring so that boundary changes between historic walled communes and modern greater-city agglomerations remain fully auditable.

All 3.743 records carry explicit source provenance across 24 distinct corpora. Table 1 lists every institutional and municipal source represented in the gazetteer together with its settlement count, share and aggregate 1910 population sum computed directly from the settlement inventory.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Provenance Corpus</th><th class="crd-th">Source Tier</th><th class="crd-th">Sites</th><th class="crd-th">Share</th><th class="crd-th">1910 Aggregate</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>INE Spain Historical Censuses (1857-1991)</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">715</td><td class="crd-td">19,1%</td><td class="crd-td">4,69M</td></tr>
<tr><td class="crd-td"><strong>Buringh European Urban Corpus</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">681</td><td class="crd-td">18,2%</td><td class="crd-td">17,16M</td></tr>
<tr><td class="crd-td"><strong>GeoNames Municipal Gazetteer</strong></td><td class="crd-td">Municipal backfill</td><td class="crd-td">521</td><td class="crd-td">13,9%</td><td class="crd-td">10,2M</td></tr>
<tr><td class="crd-td"><strong>Eurostat Urban Audit Back-Cast</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">298</td><td class="crd-td">8%</td><td class="crd-td">46,19M</td></tr>
<tr><td class="crd-td"><strong>National Census: Poland</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">209</td><td class="crd-td">5,6%</td><td class="crd-td">4,08M</td></tr>
<tr><td class="crd-td"><strong>National Census: Slovenia</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">128</td><td class="crd-td">3,4%</td><td class="crd-td">368,2k</td></tr>
<tr><td class="crd-td"><strong>National Census: Portugal</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">122</td><td class="crd-td">3,3%</td><td class="crd-td">1,89M</td></tr>
<tr><td class="crd-td"><strong>National Census: Czechia</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">116</td><td class="crd-td">3,1%</td><td class="crd-td">1,61M</td></tr>
<tr><td class="crd-td"><strong>National Census: Romania</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">115</td><td class="crd-td">3,1%</td><td class="crd-td">1,67M</td></tr>
<tr><td class="crd-td"><strong>National Census: Lithuania</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">109</td><td class="crd-td">2,9%</td><td class="crd-td">717,4k</td></tr>
<tr><td class="crd-td"><strong>National Census: Hungary</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">100</td><td class="crd-td">2,7%</td><td class="crd-td">1,54M</td></tr>
<tr><td class="crd-td"><strong>National Census: Greece</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">99</td><td class="crd-td">2,6%</td><td class="crd-td">1,99M</td></tr>
<tr><td class="crd-td"><strong>National Census: Latvia</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">90</td><td class="crd-td">2,4%</td><td class="crd-td">366,8k</td></tr>
<tr><td class="crd-td"><strong>National Census: Estonia</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">68</td><td class="crd-td">1,8%</td><td class="crd-td">449,7k</td></tr>
<tr><td class="crd-td"><strong>National Census: Slovakia</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">54</td><td class="crd-td">1,4%</td><td class="crd-td">811,8k</td></tr>
<tr><td class="crd-td"><strong>National Census: Bulgaria</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">52</td><td class="crd-td">1,4%</td><td class="crd-td">782,6k</td></tr>
<tr><td class="crd-td"><strong>National Census: Austria</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">51</td><td class="crd-td">1,4%</td><td class="crd-td">1,23M</td></tr>
<tr><td class="crd-td"><strong>National Census: Germany</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">48</td><td class="crd-td">1,3%</td><td class="crd-td">528,4k</td></tr>
<tr><td class="crd-td"><strong>Chandler V2 Historical Urban Population</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">47</td><td class="crd-td">1,3%</td><td class="crd-td">5,84M</td></tr>
<tr><td class="crd-td"><strong>National Census: Serbia</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">42</td><td class="crd-td">1,1%</td><td class="crd-td">975,4k</td></tr>
<tr><td class="crd-td"><strong>INSEE Historical Recensement</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">23</td><td class="crd-td">0,6%</td><td class="crd-td">246,8k</td></tr>
<tr><td class="crd-td"><strong>National Census: Croatia</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">21</td><td class="crd-td">0,6%</td><td class="crd-td">296,8k</td></tr>
<tr><td class="crd-td"><strong>National Census: Malta</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">21</td><td class="crd-td">0,6%</td><td class="crd-td">146,5k</td></tr>
<tr><td class="crd-td"><strong>National Census: Switzerland</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">7</td><td class="crd-td">0,2%</td><td class="crd-td">92k</td></tr>
<tr><td class="crd-td"><strong>De Vries 1984 European Urbanization 1500 1800</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">4</td><td class="crd-td">0,1%</td><td class="crd-td">25,4k</td></tr>
<tr><td class="crd-td"><strong>DEMOPAST ISTAT Cities (1861-1971)</strong></td><td class="crd-td">Institutional archive</td><td class="crd-td">2</td><td class="crd-td">0,1%</td><td class="crd-td">308,2k</td></tr>
<tr><td class="crd-td"><strong>Total Gazetteer (24 Corpora)</strong></td><td class="crd-td">All sources</td><td class="crd-td">3.743</td><td class="crd-td">100%</td><td class="crd-td">104,22M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Archival and municipal provenance ledger across all 3.882 geocoded settlements in Southern and East-Central Europe (1750-1914).</figcaption>
</figure>

# Chronological Coverage and Urban Size-Tier Evolution

Because municipal censuses expanded from early Spanish, Italian and Habsburg town registers into regular decennial counts after 1850, active site coverage climbs from 3.843 back-projected and archival records in 1750 to all 3.882 settlements in 1910 and 1914 [@INE2024; @DEMOPAST2023; @KSHHungary2024; @GUSPoland2024]. Table 2 tracks active site counts, urban threshold crossings (10k, 50k and 100k inhabitants) and mean recorded settlement size across ten benchmark horizons from 1750 to 1914.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Active Sites</th><th class="crd-th">&gt;=10k</th><th class="crd-th">&gt;=50k</th><th class="crd-th">&gt;=100k</th><th class="crd-th">Aggregate Pop.</th><th class="crd-th">Mean Size</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1750</strong></td><td class="crd-td">3.706</td><td class="crd-td">436</td><td class="crd-td">21</td><td class="crd-td">11</td><td class="crd-td">20,82M</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>1800</strong></td><td class="crd-td">3.732</td><td class="crd-td">692</td><td class="crd-td">39</td><td class="crd-td">15</td><td class="crd-td">26,76M</td><td class="crd-td">7,2k</td></tr>
<tr><td class="crd-td"><strong>1850</strong></td><td class="crd-td">3.730</td><td class="crd-td">1.141</td><td class="crd-td">71</td><td class="crd-td">23</td><td class="crd-td">39,32M</td><td class="crd-td">10,5k</td></tr>
<tr><td class="crd-td"><strong>1860</strong></td><td class="crd-td">3.730</td><td class="crd-td">1.272</td><td class="crd-td">87</td><td class="crd-td">28</td><td class="crd-td">44,11M</td><td class="crd-td">11,8k</td></tr>
<tr><td class="crd-td"><strong>1870</strong></td><td class="crd-td">3.730</td><td class="crd-td">1.415</td><td class="crd-td">101</td><td class="crd-td">34</td><td class="crd-td">49,1M</td><td class="crd-td">13,2k</td></tr>
<tr><td class="crd-td"><strong>1880</strong></td><td class="crd-td">3.730</td><td class="crd-td">1.552</td><td class="crd-td">121</td><td class="crd-td">41</td><td class="crd-td">54,85M</td><td class="crd-td">14,7k</td></tr>
<tr><td class="crd-td"><strong>1890</strong></td><td class="crd-td">3.731</td><td class="crd-td">1.745</td><td class="crd-td">170</td><td class="crd-td">68</td><td class="crd-td">68,09M</td><td class="crd-td">18,3k</td></tr>
<tr><td class="crd-td"><strong>1900</strong></td><td class="crd-td">3.737</td><td class="crd-td">1.896</td><td class="crd-td">241</td><td class="crd-td">107</td><td class="crd-td">83,54M</td><td class="crd-td">22,4k</td></tr>
<tr><td class="crd-td"><strong>1910</strong></td><td class="crd-td">3.740</td><td class="crd-td">2.042</td><td class="crd-td">343</td><td class="crd-td">144</td><td class="crd-td">104,22M</td><td class="crd-td">27,9k</td></tr>
<tr><td class="crd-td"><strong>1914</strong></td><td class="crd-td">3.738</td><td class="crd-td">2.095</td><td class="crd-td">360</td><td class="crd-td">145</td><td class="crd-td">108,46M</td><td class="crd-td">29k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Chronological slice coverage, urban size-tier counts and aggregate recorded settlement population (1750-1914).</figcaption>
</figure>

Notice the sharp inflection between 1880 and 1910: settlements above 50k inhabitants triple from 119 to 359, while cities above 100k more than triple from 47 to 150. Part of that surge reflects genuine railway-age urbanisation across northern Italy, Catalonia, Bohemia, Hungary, Congress Poland, Latvia and the Balkan capitals; a second component stems from the inclusion of Eurostat Urban Audit greater-city metropolitan back-casts entering the series in 1890–1910 [@Eurostat2024], which explain why the un-deduplicated aggregate across 3.882 records rises from 58,16M in 1880 to 110,91M in 1910.

# Spatial Sampling Density by Sub-Region and Polity

Figure 1 maps all 3.882 geocoded settlements across the 9 sub-regions from the Canary Islands and Portugal to the Baltic littoral and Eastern Thrace. Tables 3 and 4 report settlement counts and spatial sampling density per 10.000 km² across the 9 sub-regions and the leading modern polities intersecting the chapter domain.

<figure class="crd-figure-block" id="fig:c19_southern_east_central_gazetteer_map">
<img class="crd-figure-img" src="/artefacts/project_magnetic/1.0-early-modern-nineteenth-century-southern-east-central-europe-settlements/early_modern_nineteenth_century_southern_east_central_europe_regional_map.png" alt="fig:c19_southern_east_central_gazetteer_map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 3.882 geocoded settlements across 9 sub-regions of Southern and East-Central Europe (1750-1914).</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Share</th><th class="crd-th">Sites/10.000 km²</th><th class="crd-th">1910 Pop.</th><th class="crd-th">1910 (/km²)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kingdom of Spain (incl. Balearics and Canaries)</strong></td><td class="crd-td">520.968</td><td class="crd-td">1.003</td><td class="crd-td">26,8%</td><td class="crd-td">19,3</td><td class="crd-td">19,95M</td><td class="crd-td">38,3</td></tr>
<tr><td class="crd-td"><strong>Kingdom of Portugal (incl. Azores and Madeira)</strong></td><td class="crd-td">84.020</td><td class="crd-td">172</td><td class="crd-td">4,6%</td><td class="crd-td">20,5</td><td class="crd-td">5,91M</td><td class="crd-td">70,4</td></tr>
<tr><td class="crd-td"><strong>Kingdom of Italy (North and Central, pre-1919)</strong></td><td class="crd-td">201.632</td><td class="crd-td">322</td><td class="crd-td">8,6%</td><td class="crd-td">16</td><td class="crd-td">20,66M</td><td class="crd-td">102,5</td></tr>
<tr><td class="crd-td"><strong>Southern Italy, Sicily, Sardinia and Malta</strong></td><td class="crd-td">100.634</td><td class="crd-td">321</td><td class="crd-td">8,6%</td><td class="crd-td">31,9</td><td class="crd-td">13,42M</td><td class="crd-td">133,3</td></tr>
<tr><td class="crd-td"><strong>Austrian Cisleithania (Austria, Bohemia, Galicia and Dalmatia)</strong></td><td class="crd-td">286.098</td><td class="crd-td">593</td><td class="crd-td">15,8%</td><td class="crd-td">20,7</td><td class="crd-td">28,57M</td><td class="crd-td">99,9</td></tr>
<tr><td class="crd-td"><strong>Hungarian Transleithania (incl. Slovakia, Transylvania, Croatia and Bosnia)</strong></td><td class="crd-td">359.265</td><td class="crd-td">395</td><td class="crd-td">10,6%</td><td class="crd-td">11</td><td class="crd-td">22,78M</td><td class="crd-td">63,4</td></tr>
<tr><td class="crd-td"><strong>Congress Poland (Vistula Land)</strong></td><td class="crd-td">137.615</td><td class="crd-td">191</td><td class="crd-td">5,1%</td><td class="crd-td">13,9</td><td class="crd-td">11,9M</td><td class="crd-td">86,5</td></tr>
<tr><td class="crd-td"><strong>Russian Baltic Governorates (Estland, Livland, Kurland and Kovno)</strong></td><td class="crd-td">167.773</td><td class="crd-td">330</td><td class="crd-td">8,8%</td><td class="crd-td">19,7</td><td class="crd-td">6,09M</td><td class="crd-td">36,3</td></tr>
<tr><td class="crd-td"><strong>Old Kingdom of Romania, Balkan States and Ottoman Rumelia</strong></td><td class="crd-td">545.281</td><td class="crd-td">416</td><td class="crd-td">11,1%</td><td class="crd-td">7,6</td><td class="crd-td">27,4M</td><td class="crd-td">50,2</td></tr>
<tr><td class="crd-td"><strong>Chapter Total (Weighted Mean)</strong></td><td class="crd-td">2.403.285</td><td class="crd-td">3.743</td><td class="crd-td">100%</td><td class="crd-td">15,6</td><td class="crd-td">156,68M</td><td class="crd-td">65,2</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Sub-regional settlement counts, spatial sampling density and 1910 population density across 9 sub-regions.</figcaption>
</figure>

Spatial sampling density averages 15,6 sites per 10.000 km² across the entire 2.483.848,9 km² domain, peaking in Southern Italy, Islands and Malta (31,5 sites/10.000 km²), Austria, Bohemia-Moravia and Slovenia (23,6 sites/10.000 km²), Spain (19,7 sites/10.000 km² thanks to INE's deep municipal series), Portugal (19,7 sites/10.000 km²) and the Baltic Provinces (19,6 sites/10.000 km²). Only the vast Balkans, Romania, Moldova and Eastern Thrace sub-region falls below 10 sites/10.000 km² (7,4 sites/10.000 km²), reflecting sparser pre-1914 Ottoman and highland municipal registers across Albania, Bosnia-Herzegovina, Montenegro and Moldova [@StatBalkans2024; @StatBaltics2024].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Modern Polity or Territory</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Spain</strong></td><td class="crd-td">981</td><td class="crd-td">26,2%</td></tr>
<tr><td class="crd-td"><strong>Italy</strong></td><td class="crd-td">603</td><td class="crd-td">16,1%</td></tr>
<tr><td class="crd-td"><strong>Poland</strong></td><td class="crd-td">288</td><td class="crd-td">7,7%</td></tr>
<tr><td class="crd-td"><strong>Hungary</strong></td><td class="crd-td">178</td><td class="crd-td">4,8%</td></tr>
<tr><td class="crd-td"><strong>Portugal</strong></td><td class="crd-td">174</td><td class="crd-td">4,6%</td></tr>
<tr><td class="crd-td"><strong>Czechia</strong></td><td class="crd-td">165</td><td class="crd-td">4,4%</td></tr>
<tr><td class="crd-td"><strong>Romania</strong></td><td class="crd-td">160</td><td class="crd-td">4,3%</td></tr>
<tr><td class="crd-td"><strong>Slovenia</strong></td><td class="crd-td">132</td><td class="crd-td">3,5%</td></tr>
<tr><td class="crd-td"><strong>Lithuania</strong></td><td class="crd-td">130</td><td class="crd-td">3,5%</td></tr>
<tr><td class="crd-td"><strong>Greece</strong></td><td class="crd-td">129</td><td class="crd-td">3,4%</td></tr>
<tr><td class="crd-td"><strong>Latvia</strong></td><td class="crd-td">104</td><td class="crd-td">2,8%</td></tr>
<tr><td class="crd-td"><strong>Estonia</strong></td><td class="crd-td">96</td><td class="crd-td">2,6%</td></tr>
<tr><td class="crd-td"><strong>Germany</strong></td><td class="crd-td">89</td><td class="crd-td">2,4%</td></tr>
<tr><td class="crd-td"><strong>Austria</strong></td><td class="crd-td">80</td><td class="crd-td">2,1%</td></tr>
<tr><td class="crd-td"><strong>Slovakia</strong></td><td class="crd-td">80</td><td class="crd-td">2,1%</td></tr>
<tr><td class="crd-td"><strong>Bulgaria</strong></td><td class="crd-td">78</td><td class="crd-td">2,1%</td></tr>
<tr><td class="crd-td"><strong>Serbia</strong></td><td class="crd-td">58</td><td class="crd-td">1,5%</td></tr>
<tr><td class="crd-td"><strong>France</strong></td><td class="crd-td">32</td><td class="crd-td">0,9%</td></tr>
<tr><td class="crd-td"><strong>Other Polities and Borderlands (13 territories)</strong></td><td class="crd-td">186</td><td class="crd-td">5%</td></tr>
<tr><td class="crd-td"><strong>Total (31 Modern Polities)</strong></td><td class="crd-td">3.743</td><td class="crd-td">100%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Settlement count distribution across the 18 most densely sampled polities and 13 remaining states and borderlands.</figcaption>
</figure>

# Leading 25 Recorded Urban Settlements (1750–1914)

Table 5 lists the 25 highest-ranked urban records in the gazetteer ordered by peak recorded population between 1750 and 1914. Because Eurostat Urban Audit back-casts and historic municipal censuses (Buringh, INE Spain, DEMOPAST ISTAT and national statistical offices) are retained side by side without destructive overwriting, several capitals appear under both metropolitan agglomeration and inner-city or endonym-exonym entries—for instance Roma alongside Rome, Wien alongside Greater Wien, Warszawa alongside Warsaw, Praha alongside Prague, Napoli (greater city) alongside Naples and Budapest alongside historic Buda and Pest. Analysts measuring narrow municipal walls should filter for Buringh, INE Spain and DEMOPAST/national census rows, whereas metropolitan labour-market studies may draw on the Eurostat greater-city back-casts.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Settlement</th><th class="crd-th">Polity</th><th class="crd-th">1750</th><th class="crd-th">1850</th><th class="crd-th">1910</th><th class="crd-th">Peak (Year)</th><th class="crd-th">Source</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Milano</td><td class="crd-td">Italy</td><td class="crd-td">124k</td><td class="crd-td">209k</td><td class="crd-td">2,33M</td><td class="crd-td">2,42M (1914)</td><td class="crd-td">Eurostat Metro</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Madrid</td><td class="crd-td">Spain</td><td class="crd-td">160k</td><td class="crd-td">281k</td><td class="crd-td">1,95M</td><td class="crd-td">2,02M (1914)</td><td class="crd-td">Eurostat Metro</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Barcelona</td><td class="crd-td">Spain</td><td class="crd-td">50k</td><td class="crd-td">220k</td><td class="crd-td">1,89M</td><td class="crd-td">1,96M (1914)</td><td class="crd-td">Eurostat Metro</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Napoli</td><td class="crd-td">Italy</td><td class="crd-td">339k</td><td class="crd-td">409k</td><td class="crd-td">1,88M</td><td class="crd-td">1,95M (1914)</td><td class="crd-td">Eurostat Metro</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Athina</td><td class="crd-td">Greece</td><td class="crd-td">10,8k</td><td class="crd-td">30k</td><td class="crd-td">1,77M</td><td class="crd-td">1,84M (1914)</td><td class="crd-td">Eurostat Metro</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Vienna</td><td class="crd-td">Austria</td><td class="crd-td">169k</td><td class="crd-td">426,4k</td><td class="crd-td">1,76M</td><td class="crd-td">1,79M (1914)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Roma</td><td class="crd-td">Italy</td><td class="crd-td">158k</td><td class="crd-td">175k</td><td class="crd-td">1,71M</td><td class="crd-td">1,77M (1914)</td><td class="crd-td">Eurostat Metro</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">București</td><td class="crd-td">Romania</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3M</td><td class="crd-td">1,35M (1914)</td><td class="crd-td">Eurostat Metro</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Budapest</td><td class="crd-td">Hungary</td><td class="crd-td">24k</td><td class="crd-td">156,5k</td><td class="crd-td">1,26M</td><td class="crd-td">1,31M (1914)</td><td class="crd-td">Eurostat Metro</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">Turkey-in-Europe</td><td class="crd-td">632k</td><td class="crd-td">785k</td><td class="crd-td">1,11M</td><td class="crd-td">1,15M (1900)</td><td class="crd-td">Buringh Urban</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Lisboa</td><td class="crd-td">Portugal</td><td class="crd-td">213k</td><td class="crd-td">262k</td><td class="crd-td">1,1M</td><td class="crd-td">1,14M (1914)</td><td class="crd-td">Eurostat Metro</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Warszawa</td><td class="crd-td">Poland</td><td class="crd-td">28k</td><td class="crd-td">163k</td><td class="crd-td">1,02M</td><td class="crd-td">1,06M (1914)</td><td class="crd-td">Eurostat Metro</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Buda</td><td class="crd-td">Hungary</td><td class="crd-td">18k</td><td class="crd-td">96k</td><td class="crd-td">995,3k</td><td class="crd-td">1,05M (1914)</td><td class="crd-td">Buringh Urban</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Praha</td><td class="crd-td">Czechia</td><td class="crd-td">58k</td><td class="crd-td">117k</td><td class="crd-td">759,3k</td><td class="crd-td">787,8k (1914)</td><td class="crd-td">Eurostat Metro</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Sofia</td><td class="crd-td">Bulgaria</td><td class="crd-td">28k</td><td class="crd-td">43k</td><td class="crd-td">713,2k</td><td class="crd-td">740k (1914)</td><td class="crd-td">Eurostat Metro</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">Warszawa, Warsaw, Worszewa, Werszewa</td><td class="crd-td">Poland</td><td class="crd-td">20k</td><td class="crd-td">167k</td><td class="crd-td">638,4k</td><td class="crd-td">686k (1900)</td><td class="crd-td">Buringh Urban</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Torino</td><td class="crd-td">Italy</td><td class="crd-td">69k</td><td class="crd-td">173,3k</td><td class="crd-td">592,3k</td><td class="crd-td">614,5k (1914)</td><td class="crd-td">Eurostat Metro</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">Porto</td><td class="crd-td">Portugal</td><td class="crd-td">32k</td><td class="crd-td">99,7k</td><td class="crd-td">580,9k</td><td class="crd-td">602,7k (1914)</td><td class="crd-td">Eurostat Metro</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">Pest (for &gt;1900 see Buda</td><td class="crd-td">Hungary</td><td class="crd-td">9k</td><td class="crd-td">65k</td><td class="crd-td">104k</td><td class="crd-td">602,5k (1914)</td><td class="crd-td">Buringh Urban</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">Rīga</td><td class="crd-td">Latvia</td><td class="crd-td">16,9k</td><td class="crd-td">61,5k</td><td class="crd-td">568,2k</td><td class="crd-td">589,5k (1914)</td><td class="crd-td">Eurostat Metro</td></tr>
<tr><td class="crd-td"><strong>21</strong></td><td class="crd-td">Łódź</td><td class="crd-td">Poland</td><td class="crd-td">1k</td><td class="crd-td">214,5k</td><td class="crd-td">525,7k</td><td class="crd-td">545,4k (1914)</td><td class="crd-td">Eurostat Metro</td></tr>
<tr><td class="crd-td"><strong>22</strong></td><td class="crd-td">Chorzow</td><td class="crd-td">Poland</td><td class="crd-td">774</td><td class="crd-td">265,1k</td><td class="crd-td">481,9k</td><td class="crd-td">500k (1914)</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>23</strong></td><td class="crd-td">Zagreb</td><td class="crd-td">Croatia</td><td class="crd-td">10k</td><td class="crd-td">27k</td><td class="crd-td">479,5k</td><td class="crd-td">497,5k (1914)</td><td class="crd-td">Eurostat Metro</td></tr>
<tr><td class="crd-td"><strong>24</strong></td><td class="crd-td">Kraków</td><td class="crd-td">Poland</td><td class="crd-td">18,5k</td><td class="crd-td">42k</td><td class="crd-td">459,5k</td><td class="crd-td">476,7k (1914)</td><td class="crd-td">Eurostat Metro</td></tr>
<tr><td class="crd-td"><strong>25</strong></td><td class="crd-td">Genova</td><td class="crd-td">Italy</td><td class="crd-td">87k</td><td class="crd-td">128k</td><td class="crd-td">426,1k</td><td class="crd-td">447k (1914)</td><td class="crd-td">Buringh Urban</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading 25 urban settlement records by peak population across Southern and East-Central Europe (1750-1914).</figcaption>
</figure>

# Sources

::: {#refs}
:::
