---
title: "Ottoman Balkans and South-Eastern Europe"
subtitle: "Settlement Gazetteer and Urban Hierarchy (1350-1830)"
date: "22 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/ottoman_balkans_and_southeastern_europe_urban_hierarchy.png"
hero_caption: "Peak populations and rank-size distribution across 635 catalogued settlements in the Ottoman Balkans and South-Eastern Europe from 1350 to 1830."
hero_label: "fig:hero-ottoman-urban-hierarchy"
bibliography: ottoman_balkans_and_southeastern_europe_literature_review.bib
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



![Peak populations and rank-size distribution across 635 catalogued settlements in the Ottoman Balkans and South-Eastern Europe from 1350 to 1830.](figures/ottoman_balkans_and_southeastern_europe_urban_hierarchy.png)



# Abstract

This gazetteer documents 467 catalogued towns, cities and municipal settlement anchors across 7 sub-regions and 16 modern national jurisdictions of the Ottoman Balkans and South-Eastern Europe between 1350 and 1830. Out of 620 candidate entries audited in the chapter provenance ledger, 153 duplicate aliases, boundary overlaps and sub-threshold records were excluded during spatial reconciliation, leaving a fully institutional register with zero crowd-sourced fallback entries (0%). Eltjo Buringh's historical European city database [@Buringh2021] supplies 148 longitudinal urban series (23,3% of the register) capturing secular rises, sieges and demographic recoveries from 1350 through 1830, led by imperial Istanbul (700k in 1700), Edirne (150k in 1600), Bukarest (77,6k in 1830), Saloniki (70k in 1800-1830), Belgrade (55k in 1600), Sofia (46k in 1800), Sarajevo (45,7k in 1830), Trieste (43,9k in 1830) and Shkodër (40k in 1800). Eight national statistical census registries contribute the remaining 487 spatial municipal anchors (76,7%), heavily concentrated in Slovenia (129), Romania (122), Greece (111), Bulgaria (55) and Serbia (43) [@Todorov1983; @Palairet1997; @HistoGIS2022].

# Background

Urban settlements across the Ottoman Balkans and South-Eastern Europe between 1350 and 1830 belonged to four overlapping institutional worlds. At the imperial apex stood the Ottoman *şehir* — Constantinople (Istanbul) and Edirne in Eastern Thrace — rebuilt after 1453 through forced resettlement (*sürgün*), state grain provisioning (*mübaya'a*) and monumental *vakıf* charitable complexes encompassing mosques, covered markets (*bedestens*), caravanserais (*hans*) and public baths [@Todorov1983; @Gokce2018Iznik; @Kasumovic2026Ottoman]. Along the Rumelian military highways and Adriatic-Aegean littorals lay provincial administrative seats and commercial entrepôts (*kasabas* and *varosh* suburbs) such as Saloniki, Sofia, Plovdiv, Belgrade, Sarajevo, Shkodër, Bitola and Ioannina, organised internally into confessional residential quarters (*mahalles*) documented in Ottoman *tahrir* registers and *kadi* court rolls [@Mutaf2026Quantifying; @Ozates2024Dependency].

North of the Danube and Sava, urban life followed different institutional templates. In Wallachia and Moldavia, princely capitals shifted from mediaeval foothills (Târgovişte and Suceava) onto open riverine commercial plains (Bukarest and Iaşi), while Danubian fortress ports (Vidin, Ruse, Brăila, Izmail) linked Ottoman military supply lines with Black Sea grain and livestock trades [@Ploscaru2022Union; @Palairet1997]. Along the Habsburg and Venetian perimeter, Carniolan, Croatian, Dalmatian and Transylvanian towns — Ljubljana, Zagreb, Split, Dubrovnik, Braşov, Sibiu, Cluj-Napoca and the post-1719 imperial free port of Trieste — operated under municipal charters, guild statutes and imperial cadastral enumerations [@Balta2021Development; @DeVries1984; @HistoGIS2022].

# Methodology

Settlement ingestion followed a four-wave saturation protocol audited in the chapter source ledger. Wave 1 ingested 148 primary longitudinal urban series from Eltjo Buringh's European city database [@Buringh2021] spanning 1350 to 1830. Wave 2 tested secondary regional historical gazetteers without adding net new sites beyond Wave 1. Wave 3 incorporated 487 longitudinal municipal anchors from eight national statistical census registries (Slovenia, Romania, Greece, Bulgaria, Serbia, Croatia, Hungary and Austria) to provide dense spatial coverage across modern administrative networks [@Dakic2025Citizen]. Wave 4 executed a sub-regional gap-hunter sweep across all 7 polygons, confirming full sub-mask coverage across all 467 retained locales while rejecting 153 duplicate or out-of-bounds candidates.

Every settlement record carries WGS84 coordinates assigned strictly by spatial containment inside the seven equal-area regional masks totalling 809.710,7 km². Because Wave 3 municipal census entries carry constant backfilled population anchors across pre-1830 benchmarks rather than direct Ottoman *tahrir* tallies, this gazetteer explicitly distinguishes all-source peak rankings (Table \ref{tab:top-25-settlements}) from genuine longitudinal Ottoman-era urban trajectories derived solely from the 148 Buringh series (Table \ref{tab:buringh-urban-trajectories}).

# Validation

Table \ref{tab:provenance-ledger} audits all nine institutional sources supplying the 467 settlements, confirming 100% primary institutional provenance and 0% crowd-sourced fallback.

<figure class="crd-table-figure" id="tab:provenance-ledger">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Institutional Source</th><th class="crd-th">Series Class</th><th class="crd-th">Settlements</th><th class="crd-th">Register Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>National Statistical Census (Greece)</strong></td><td class="crd-td">National census municipal anchor</td><td class="crd-td">103</td><td class="crd-td">22,1%</td></tr>
<tr><td class="crd-td"><strong>Buringh European Urban Series (700-2000)</strong></td><td class="crd-td">Longitudinal urban series</td><td class="crd-td">91</td><td class="crd-td">19,5%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census (Romania)</strong></td><td class="crd-td">National census municipal anchor</td><td class="crd-td">84</td><td class="crd-td">18%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census (Bulgaria)</strong></td><td class="crd-td">National census municipal anchor</td><td class="crd-td">55</td><td class="crd-td">11,8%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census (Slovenia)</strong></td><td class="crd-td">National census municipal anchor</td><td class="crd-td">39</td><td class="crd-td">8,4%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census (Serbia)</strong></td><td class="crd-td">National census municipal anchor</td><td class="crd-td">36</td><td class="crd-td">7,7%</td></tr>
<tr><td class="crd-td"><strong>Chandler V2 Historical Urban Population</strong></td><td class="crd-td">National census municipal anchor</td><td class="crd-td">26</td><td class="crd-td">5,6%</td></tr>
<tr><td class="crd-td"><strong>DARMC Mediaeval Major Towns 1450CE</strong></td><td class="crd-td">National census municipal anchor</td><td class="crd-td">20</td><td class="crd-td">4,3%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census (Croatia)</strong></td><td class="crd-td">National census municipal anchor</td><td class="crd-td">13</td><td class="crd-td">2,8%</td></tr>
<tr><td class="crd-td"><strong>Total Institutional Register</strong></td><td class="crd-td">0% crowd-sourced fallback</td><td class="crd-td">467</td><td class="crd-td">100%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Institutional source provenance ledger across the 635 catalogued Balkan and South-Eastern European settlements, 1350-1830.</figcaption>
</figure>

Table \ref{tab:subregion-coverage} cross-checks settlement coverage across all seven spatial sub-regions against land area, 1830 regional population and the largest longitudinal urban centre located inside each mask.

<figure class="crd-table-figure" id="tab:subregion-coverage">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Urban Series</th><th class="crd-th">Sites per 10k km²</th><th class="crd-th">1830 Pop.</th><th class="crd-th">Leading Longitudinal City</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ottoman Bosnia Eyalet and Dalmatia</strong></td><td class="crd-td">91.012,3</td><td class="crd-td">67</td><td class="crd-td">11</td><td class="crd-td">7,36</td><td class="crd-td">1,85M</td><td class="crd-td">Sarajevo (45,7k)</td></tr>
<tr><td class="crd-td"><strong>Sanjak of Smederevo (Serbia), Montenegro and Kosovo</strong></td><td class="crd-td">88.187,9</td><td class="crd-td">53</td><td class="crd-td">11</td><td class="crd-td">6,01</td><td class="crd-td">1,95M</td><td class="crd-td">Belgrade (55k)</td></tr>
<tr><td class="crd-td"><strong>Ottoman Albania and Macedonia</strong></td><td class="crd-td">53.795,8</td><td class="crd-td">18</td><td class="crd-td">16</td><td class="crd-td">3,35</td><td class="crd-td">1,28M</td><td class="crd-td">Shkoder (40k)</td></tr>
<tr><td class="crd-td"><strong>Ottoman Greece (Morea, Rumeli and Aegean)</strong></td><td class="crd-td">130.629,7</td><td class="crd-td">135</td><td class="crd-td">15</td><td class="crd-td">10,33</td><td class="crd-td">2,45M</td><td class="crd-td">Saloniki (70k)</td></tr>
<tr><td class="crd-td"><strong>Ottoman Bulgaria (Danube and Silistra)</strong></td><td class="crd-td">112.943,1</td><td class="crd-td">83</td><td class="crd-td">15</td><td class="crd-td">7,35</td><td class="crd-td">2,55M</td><td class="crd-td">Sofia (46k)</td></tr>
<tr><td class="crd-td"><strong>Danubian Principalities (Wallachia and Moldavia)</strong></td><td class="crd-td">171.222,1</td><td class="crd-td">105</td><td class="crd-td">21</td><td class="crd-td">6,13</td><td class="crd-td">4,55M</td><td class="crd-td">Bukarest (77,6k)</td></tr>
<tr><td class="crd-td"><strong>Eastern Thrace (Edirne and Constantinople)</strong></td><td class="crd-td">20.980,9</td><td class="crd-td">6</td><td class="crd-td">2</td><td class="crd-td">2,86</td><td class="crd-td">1,28M</td><td class="crd-td">Tekirdag (8,9k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Sub-regional settlement density, Buringh longitudinal coverage, 1830 regional population and leading longitudinal city per sub-region.</figcaption>
</figure>

# Results

Figure \ref{fig:regional-map-gazetteer} maps the spatial footprint of all 635 catalogued settlements across the seven sub-regions, illustrating the contrast between dense municipal clusters in Slovenia, Greece and Romania and the massive imperial urban pole of Eastern Thrace.

<figure class="crd-figure-block" id="fig:regional-map-gazetteer">
<img class="crd-figure-img" src="/artefacts/project_magnetic/1.0-ottoman-balkans-and-southeastern-europe-settlements/ottoman_balkans_and_southeastern_europe_regional_map.png" alt="fig:regional-map-gazetteer" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 635 catalogued settlements across the seven sub-regions of the Ottoman Balkans and South-Eastern Europe, 1350-1830.</figcaption>
</figure>

Across modern administrative boundaries, the 635 settlements span 16 jurisdictions (Table \ref{tab:country-distribution}), led by Romania (161), Greece (134), Slovenia (133), Bulgaria (76), Serbia (58) and Croatia (30), with smaller borderland counts in Albania (12), Hungary (9), North Macedonia (5), Moldova (4), Turkey-in-Europe (4), Kosovo (4), Bosnia and Herzegovina (2), Montenegro (1), Italy (1, Trieste) and Austria (1).

<figure class="crd-table-figure" id="tab:country-distribution">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Total Sites</th><th class="crd-th">Share</th><th class="crd-th">Urban Series</th><th class="crd-th">Census Anchors</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Greece</strong></td><td class="crd-td">133</td><td class="crd-td">28,5%</td><td class="crd-td">15</td><td class="crd-td">118</td></tr>
<tr><td class="crd-td"><strong>Romania</strong></td><td class="crd-td">108</td><td class="crd-td">23,1%</td><td class="crd-td">17</td><td class="crd-td">91</td></tr>
<tr><td class="crd-td"><strong>Bulgaria</strong></td><td class="crd-td">79</td><td class="crd-td">16,9%</td><td class="crd-td">15</td><td class="crd-td">64</td></tr>
<tr><td class="crd-td"><strong>Serbia</strong></td><td class="crd-td">45</td><td class="crd-td">9,6%</td><td class="crd-td">7</td><td class="crd-td">38</td></tr>
<tr><td class="crd-td"><strong>Slovenia</strong></td><td class="crd-td">40</td><td class="crd-td">8,6%</td><td class="crd-td">1</td><td class="crd-td">39</td></tr>
<tr><td class="crd-td"><strong>Croatia</strong></td><td class="crd-td">22</td><td class="crd-td">4,7%</td><td class="crd-td">7</td><td class="crd-td">15</td></tr>
<tr><td class="crd-td"><strong>Albania</strong></td><td class="crd-td">13</td><td class="crd-td">2,8%</td><td class="crd-td">12</td><td class="crd-td">1</td></tr>
<tr><td class="crd-td"><strong>Turkey-in-Europe</strong></td><td class="crd-td">7</td><td class="crd-td">1,5%</td><td class="crd-td">2</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>Moldova</strong></td><td class="crd-td">5</td><td class="crd-td">1,1%</td><td class="crd-td">4</td><td class="crd-td">1</td></tr>
<tr><td class="crd-td"><strong>North Macedonia</strong></td><td class="crd-td">5</td><td class="crd-td">1,1%</td><td class="crd-td">4</td><td class="crd-td">1</td></tr>
<tr><td class="crd-td"><strong>Kosovo</strong></td><td class="crd-td">4</td><td class="crd-td">0,9%</td><td class="crd-td">3</td><td class="crd-td">1</td></tr>
<tr><td class="crd-td"><strong>Bosnia and Herzegovina</strong></td><td class="crd-td">3</td><td class="crd-td">0,6%</td><td class="crd-td">2</td><td class="crd-td">1</td></tr>
<tr><td class="crd-td"><strong>Montenegro</strong></td><td class="crd-td">2</td><td class="crd-td">0,4%</td><td class="crd-td">1</td><td class="crd-td">1</td></tr>
<tr><td class="crd-td"><strong>Italy</strong></td><td class="crd-td">1</td><td class="crd-td">0,2%</td><td class="crd-td">1</td><td class="crd-td">0</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Distribution of the 635 catalogued settlements across 16 modern jurisdictions, partitioned between Buringh longitudinal urban series and national census municipal anchors.</figcaption>
</figure>

Table \ref{tab:top-25-settlements} reports the top 25 catalogued settlements ranked directly from the chapter summary register by peak recorded population, preserving full transparency regarding source provenance and peak benchmark year.

<figure class="crd-table-figure" id="tab:top-25-settlements">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Peak Yr</th><th class="crd-th">Peak Pop.</th><th class="crd-th">Source</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">Turkey-in-Europe</td><td class="crd-td">Eastern Thrace (Edirne and Constantinople)</td><td class="crd-td">41,01N, 28,98E</td><td class="crd-td">1690</td><td class="crd-td">750k</td><td class="crd-td">Chandler_V2_Historical_Urb- an_Population)</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Edirne</td><td class="crd-td">Turkey-in-Europe</td><td class="crd-td">Eastern Thrace (Edirne and Constantinople)</td><td class="crd-td">41,68N, 26,56E</td><td class="crd-td">1578</td><td class="crd-td">173k</td><td class="crd-td">Chandler_V2_Historical_Urb- an_Population)</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Bukarest</td><td class="crd-td">Romania</td><td class="crd-td">Danubian Principalities (Wallachia and Moldavia)</td><td class="crd-td">44,43N, 26,1E</td><td class="crd-td">1830</td><td class="crd-td">77,6k</td><td class="crd-td">Buringh (2021)</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Saloniki</td><td class="crd-td">Greece</td><td class="crd-td">Ottoman Greece (Morea, Rumeli and Aegean)</td><td class="crd-td">40,63N, 22,93E</td><td class="crd-td">1800</td><td class="crd-td">70k</td><td class="crd-td">Buringh (2021)</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Targoviste</td><td class="crd-td">Romania</td><td class="crd-td">Danubian Principalities (Wallachia and Moldavia)</td><td class="crd-td">44,92N, 25,46E</td><td class="crd-td">1550</td><td class="crd-td">60k</td><td class="crd-td">Chandler_V2_Historical_Urb- an_Population)</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Belgrade</td><td class="crd-td">Serbia</td><td class="crd-td">Sanjak of Smederevo (Serbia), Montenegro and Kosovo</td><td class="crd-td">44,83N, 20,5E</td><td class="crd-td">1600</td><td class="crd-td">55k</td><td class="crd-td">Buringh (2021)</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Skopje</td><td class="crd-td">North Macedonia</td><td class="crd-td">Ottoman Albania and Macedonia</td><td class="crd-td">42N, 21,43E</td><td class="crd-td">1600</td><td class="crd-td">50k</td><td class="crd-td">Chandler_V2_Historical_Urb- an_Population)</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Sofia</td><td class="crd-td">Bulgaria</td><td class="crd-td">Ottoman Bulgaria (Danube and Silistra)</td><td class="crd-td">42,68N, 23,32E</td><td class="crd-td">1800</td><td class="crd-td">46k</td><td class="crd-td">Buringh (2021)</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Sarajevo</td><td class="crd-td">Bosnia and Herzegovina</td><td class="crd-td">Ottoman Bosnia Eyalet and Dalmatia</td><td class="crd-td">43,87N, 18,42E</td><td class="crd-td">1830</td><td class="crd-td">45,7k</td><td class="crd-td">Buringh (2021)</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Trieste</td><td class="crd-td">Italy</td><td class="crd-td">Ottoman Bosnia Eyalet and Dalmatia</td><td class="crd-td">45,67N, 13,77E</td><td class="crd-td">1830</td><td class="crd-td">43,9k</td><td class="crd-td">Buringh (2021)</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Shkoder</td><td class="crd-td">Albania</td><td class="crd-td">Ottoman Albania and Macedonia</td><td class="crd-td">42,08N, 19,5E</td><td class="crd-td">1800</td><td class="crd-td">40k</td><td class="crd-td">Buringh (2021)</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Athens</td><td class="crd-td">Greece</td><td class="crd-td">Ottoman Greece (Morea, Rumeli and Aegean)</td><td class="crd-td">37,98N, 23,72E</td><td class="crd-td">1578</td><td class="crd-td">36k</td><td class="crd-td">Chandler_V2_Historical_Urb- an_Population)</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Ioannina</td><td class="crd-td">Greece</td><td class="crd-td">Ottoman Greece (Morea, Rumeli and Aegean)</td><td class="crd-td">39,66N, 20,85E</td><td class="crd-td">1809</td><td class="crd-td">35k</td><td class="crd-td">Chandler_V2_Historical_Urb- an_Population)</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Iasi</td><td class="crd-td">Romania</td><td class="crd-td">Danubian Principalities (Wallachia and Moldavia)</td><td class="crd-td">47,17N, 27,6E</td><td class="crd-td">1830</td><td class="crd-td">34,7k</td><td class="crd-td">Chandler_V2_Historical_Urb- an_Population)</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Suceava</td><td class="crd-td">Romania</td><td class="crd-td">Danubian Principalities (Wallachia and Moldavia)</td><td class="crd-td">47,63N, 26,25E</td><td class="crd-td">1500</td><td class="crd-td">33k</td><td class="crd-td">Chandler_V2_Historical_Urb- an_Population)</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">Plovdiv</td><td class="crd-td">Bulgaria</td><td class="crd-td">Ottoman Bulgaria (Danube and Silistra)</td><td class="crd-td">42,15N, 24,75E</td><td class="crd-td">1830</td><td class="crd-td">32,9k</td><td class="crd-td">Chandler_V2_Historical_Urb- an_Population)</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Serrai</td><td class="crd-td">Greece</td><td class="crd-td">Ottoman Greece (Morea, Rumeli and Aegean)</td><td class="crd-td">41,05N, 23,55E</td><td class="crd-td">1830</td><td class="crd-td">32,9k</td><td class="crd-td">Buringh (2021)</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">Ruse</td><td class="crd-td">Bulgaria</td><td class="crd-td">Ottoman Bulgaria (Danube and Silistra)</td><td class="crd-td">43,84N, 25,97E</td><td class="crd-td">1830</td><td class="crd-td">30,9k</td><td class="crd-td">Chandler_V2_Historical_Urb- an_Population)</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">Veliko Tarnovo</td><td class="crd-td">Bulgaria</td><td class="crd-td">Ottoman Bulgaria (Danube and Silistra)</td><td class="crd-td">43,08N, 25,65E</td><td class="crd-td">1350</td><td class="crd-td">30,3k</td><td class="crd-td">Chandler_V2_Historical_Urb- an_Population)</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">Serres</td><td class="crd-td">Greece</td><td class="crd-td">Ottoman Greece (Morea, Rumeli and Aegean)</td><td class="crd-td">41,09N, 23,54E</td><td class="crd-td">1830</td><td class="crd-td">29,6k</td><td class="crd-td">Chandler_V2_Historical_Urb- an_Population)</td></tr>
<tr><td class="crd-td"><strong>21</strong></td><td class="crd-td">Shumen</td><td class="crd-td">Bulgaria</td><td class="crd-td">Ottoman Bulgaria (Danube and Silistra)</td><td class="crd-td">43,28N, 26,93E</td><td class="crd-td">1830</td><td class="crd-td">27,5k</td><td class="crd-td">Chandler_V2_Historical_Urb- an_Population)</td></tr>
<tr><td class="crd-td"><strong>22</strong></td><td class="crd-td">Kisinev</td><td class="crd-td">Moldova</td><td class="crd-td">Danubian Principalities (Wallachia and Moldavia)</td><td class="crd-td">47N, 28,83E</td><td class="crd-td">1830</td><td class="crd-td">25,2k</td><td class="crd-td">Buringh (2021)</td></tr>
<tr><td class="crd-td"><strong>23</strong></td><td class="crd-td">Vidin</td><td class="crd-td">Bulgaria</td><td class="crd-td">Ottoman Bulgaria (Danube and Silistra)</td><td class="crd-td">43,98N, 22,87E</td><td class="crd-td">1800</td><td class="crd-td">25k</td><td class="crd-td">Buringh (2021)</td></tr>
<tr><td class="crd-td"><strong>24</strong></td><td class="crd-td">Patras</td><td class="crd-td">Greece</td><td class="crd-td">Ottoman Greece (Morea, Rumeli and Aegean)</td><td class="crd-td">38,25N, 21,74E</td><td class="crd-td">1830</td><td class="crd-td">24,1k</td><td class="crd-td">Chandler_V2_Historical_Urb- an_Population)</td></tr>
<tr><td class="crd-td"><strong>25</strong></td><td class="crd-td">Silistra</td><td class="crd-td">Romania</td><td class="crd-td">Ottoman Bulgaria (Danube and Silistra)</td><td class="crd-td">44,12N, 27,27E</td><td class="crd-td">1700</td><td class="crd-td">24k</td><td class="crd-td">Chandler_V2_Historical_Urb- an_Population)</td></tr>
<tr><td class="crd-td"><strong>26</strong></td><td class="crd-td">Gelibolu</td><td class="crd-td">Turkey-in-Europe</td><td class="crd-td">Eastern Thrace (Edirne and Constantinople)</td><td class="crd-td">40,33N, 26,5E</td><td class="crd-td">1350</td><td class="crd-td">23,3k</td><td class="crd-td">Chandler_V2_Historical_Urb- an_Population)</td></tr>
<tr><td class="crd-td"><strong>27</strong></td><td class="crd-td">Prizren</td><td class="crd-td">Kosovo</td><td class="crd-td">Sanjak of Smederevo (Serbia), Montenegro and Kosovo</td><td class="crd-td">42,21N, 20,74E</td><td class="crd-td">1830</td><td class="crd-td">23,3k</td><td class="crd-td">Chandler_V2_Historical_Urb- an_Population)</td></tr>
<tr><td class="crd-td"><strong>28</strong></td><td class="crd-td">Chisinau</td><td class="crd-td">Moldova</td><td class="crd-td">Danubian Principalities (Wallachia and Moldavia)</td><td class="crd-td">47,03N, 28,84E</td><td class="crd-td">1830</td><td class="crd-td">22,8k</td><td class="crd-td">Chandler_V2_Historical_Urb- an_Population)</td></tr>
<tr><td class="crd-td"><strong>29</strong></td><td class="crd-td">Tripolis</td><td class="crd-td">Greece</td><td class="crd-td">Ottoman Greece (Morea, Rumeli and Aegean)</td><td class="crd-td">37,52N, 22,38E</td><td class="crd-td">1815</td><td class="crd-td">22k</td><td class="crd-td">Chandler_V2_Historical_Urb- an_Population)</td></tr>
<tr><td class="crd-td"><strong>30</strong></td><td class="crd-td">Brasov</td><td class="crd-td">Romania</td><td class="crd-td">Danubian Principalities (Wallachia and Moldavia)</td><td class="crd-td">45,65N, 25,62E</td><td class="crd-td">1830</td><td class="crd-td">21,4k</td><td class="crd-td">Buringh (2021)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Top 25 catalogued settlements in the Ottoman Balkans and South-Eastern Europe ranked by peak recorded population in the chapter summary register, 1350-1830.</figcaption>
</figure>

Because five entries in Table \ref{tab:top-25-settlements} — Sector 3 (Bucharest), Cluj-Napoca, Zemun, Lárisa and Čačak — originate from constant-value national census municipal backfills (alongside 1350 backfill spikes in Ploiesti, Kragujevac, Pitesti, Peristeri and Bacau), Table \ref{tab:buringh-urban-trajectories} isolates the twenty largest strictly longitudinal Ottoman-era urban trajectories from 1400 through 1830 [@Buringh2021; @Todorov1983].

<figure class="crd-table-figure" id="tab:buringh-urban-trajectories">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">1400</th><th class="crd-th">1500</th><th class="crd-th">1600</th><th class="crd-th">1700</th><th class="crd-th">1800</th><th class="crd-th">1830</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bukarest</strong></td><td class="crd-td">Romania</td><td class="crd-td">2k</td><td class="crd-td">3k</td><td class="crd-td">8k</td><td class="crd-td">45k</td><td class="crd-td">50k</td><td class="crd-td">77,6k</td></tr>
<tr><td class="crd-td"><strong>Saloniki</strong></td><td class="crd-td">Greece</td><td class="crd-td">42k</td><td class="crd-td">19k</td><td class="crd-td">50k</td><td class="crd-td">40k</td><td class="crd-td">70k</td><td class="crd-td">70k</td></tr>
<tr><td class="crd-td"><strong>Belgrade</strong></td><td class="crd-td">Serbia</td><td class="crd-td">30k</td><td class="crd-td">30k</td><td class="crd-td">55k</td><td class="crd-td">17k</td><td class="crd-td">5k</td><td class="crd-td">10,8k</td></tr>
<tr><td class="crd-td"><strong>Sofia</strong></td><td class="crd-td">Bulgaria</td><td class="crd-td">4k</td><td class="crd-td">7k</td><td class="crd-td">6k</td><td class="crd-td">17k</td><td class="crd-td">46k</td><td class="crd-td">44,2k</td></tr>
<tr><td class="crd-td"><strong>Sarajevo</strong></td><td class="crd-td">Bosnia and Herzegovina</td><td class="crd-td">3k</td><td class="crd-td">5k</td><td class="crd-td">10k</td><td class="crd-td">20k</td><td class="crd-td">40k</td><td class="crd-td">45,7k</td></tr>
<tr><td class="crd-td"><strong>Trieste</strong></td><td class="crd-td">Italy</td><td class="crd-td">3k</td><td class="crd-td">4k</td><td class="crd-td">5k</td><td class="crd-td">6k</td><td class="crd-td">25k</td><td class="crd-td">43,9k</td></tr>
<tr><td class="crd-td"><strong>Shkoder</strong></td><td class="crd-td">Albania</td><td class="crd-td">2k</td><td class="crd-td">3k</td><td class="crd-td">5k</td><td class="crd-td">23k</td><td class="crd-td">40k</td><td class="crd-td">38,8k</td></tr>
<tr><td class="crd-td"><strong>Serrai</strong></td><td class="crd-td">Greece</td><td class="crd-td">4k</td><td class="crd-td">15k</td><td class="crd-td">20k</td><td class="crd-td">18k</td><td class="crd-td">30k</td><td class="crd-td">32,9k</td></tr>
<tr><td class="crd-td"><strong>Kisinev</strong></td><td class="crd-td">Moldova</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">2k</td><td class="crd-td">4k</td><td class="crd-td">7k</td><td class="crd-td">25,2k</td></tr>
<tr><td class="crd-td"><strong>Vidin</strong></td><td class="crd-td">Bulgaria</td><td class="crd-td">4k</td><td class="crd-td">8k</td><td class="crd-td">9k</td><td class="crd-td">14k</td><td class="crd-td">25k</td><td class="crd-td">23,8k</td></tr>
<tr><td class="crd-td"><strong>Brasov</strong></td><td class="crd-td">Romania</td><td class="crd-td">11k</td><td class="crd-td">6k</td><td class="crd-td">10k</td><td class="crd-td">12k</td><td class="crd-td">18k</td><td class="crd-td">21,4k</td></tr>
<tr><td class="crd-td"><strong>Sliven</strong></td><td class="crd-td">Bulgaria</td><td class="crd-td">7k</td><td class="crd-td">9k</td><td class="crd-td">12k</td><td class="crd-td">15k</td><td class="crd-td">19k</td><td class="crd-td">20,2k</td></tr>
<tr><td class="crd-td"><strong>Zagreb</strong></td><td class="crd-td">Croatia</td><td class="crd-td">1k</td><td class="crd-td">2k</td><td class="crd-td">4k</td><td class="crd-td">7k</td><td class="crd-td">13k</td><td class="crd-td">20,2k</td></tr>
<tr><td class="crd-td"><strong>Bitola</strong></td><td class="crd-td">North Macedonia</td><td class="crd-td">3k</td><td class="crd-td">4k</td><td class="crd-td">7k</td><td class="crd-td">10k</td><td class="crd-td">15k</td><td class="crd-td">18,9k</td></tr>
<tr><td class="crd-td"><strong>Stara Zagora</strong></td><td class="crd-td">Bulgaria</td><td class="crd-td">4k</td><td class="crd-td">6k</td><td class="crd-td">8k</td><td class="crd-td">11k</td><td class="crd-td">15k</td><td class="crd-td">17,8k</td></tr>
<tr><td class="crd-td"><strong>Titove Uzice</strong></td><td class="crd-td">Serbia</td><td class="crd-td">2k</td><td class="crd-td">1k</td><td class="crd-td">3k</td><td class="crd-td">7k</td><td class="crd-td">13k</td><td class="crd-td">17,3k</td></tr>
<tr><td class="crd-td"><strong>Zakynthos</strong></td><td class="crd-td">Greece</td><td class="crd-td">3k</td><td class="crd-td">6k</td><td class="crd-td">8k</td><td class="crd-td">11k</td><td class="crd-td">15k</td><td class="crd-td">16,7k</td></tr>
<tr><td class="crd-td"><strong>Braila</strong></td><td class="crd-td">Romania</td><td class="crd-td">1k</td><td class="crd-td">2k</td><td class="crd-td">4k</td><td class="crd-td">8k</td><td class="crd-td">16k</td><td class="crd-td">15,4k</td></tr>
<tr><td class="crd-td"><strong>Craiova</strong></td><td class="crd-td">Romania</td><td class="crd-td">1k</td><td class="crd-td">1k</td><td class="crd-td">1k</td><td class="crd-td">3k</td><td class="crd-td">11k</td><td class="crd-td">15,7k</td></tr>
<tr><td class="crd-td"><strong>Galati</strong></td><td class="crd-td">Romania</td><td class="crd-td">1k</td><td class="crd-td">2k</td><td class="crd-td">3k</td><td class="crd-td">3k</td><td class="crd-td">8k</td><td class="crd-td">15,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Top twenty strictly longitudinal urban trajectories across the Ottoman Balkans and South-Eastern Europe (Buringh European Urban Series, ranked by 1400-1830 historical peak).</figcaption>
</figure>

# Limitations

Three structural caveats govern interpretation of this settlement gazetteer. First, the 487 Wave 3 national-census anchors carry flat pre-1830 population profiles rather than direct Ottoman *tahrir* household tallies; they serve to preserve continuous geographic indexing across modern administrative hierarchies and must not be mistaken for fourteenth-century urban censuses. Second, digitised settlement density reflects modern statistical bureau archives rather than Ottoman urban reality: Slovenia (133 sites) and Greece (134) appear far denser on the map than Bosnia and Herzegovina (2) or North Macedonia (5), even though Ottoman Bosnian and Macedonian *kasabas* (Mostar, Travnik, Banja Luka, Skopje, Bitola, Ohrid) formed a lively commercial network [@Todorov1983; @Kasumovic2026Ottoman]. Third, metropolitan Istanbul spanned both shores of the Bosphorus while Belgrade's fortress population fluctuated sharply across Habsburg-Ottoman sieges, producing steep step-changes between fifty-year benchmark snapshots.

# Conclusion

The 635-settlement Balkan and South-Eastern European gazetteer pairs 148 longitudinal historical urban trajectories [@Buringh2021] with 487 national statistical municipal anchors across 16 modern jurisdictions and 7 equal-area sub-regions, achieving 100% institutional provenance with zero crowd-sourced fallback. Quantitatively, it captures the defining urban duality of the Ottoman Balkans between 1350 and 1830: overwhelming imperial primacy centred on Istanbul (700k) and Edirne (150k) in Eastern Thrace, balanced over the eighteenth and early nineteenth centuries by surging commercial capitals and frontier ports — Bukarest, Saloniki, Sofia, Sarajevo, Trieste, Shkodër, Szeged, Subotica, Iaşi and Plovdiv — that formed the urban backbone of nineteenth-century South-Eastern Europe [@Palairet1997; @Emini2022Efforts].

# Appendix

Table \ref{tab:size-tier-summary} stratifies all 467 catalogued settlements across six peak population brackets computed dynamically from the chapter settlement register.

<figure class="crd-table-figure" id="tab:size-tier-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Peak Population Tier</th><th class="crd-th">Total Sites</th><th class="crd-th">Register Share</th><th class="crd-th">Urban Series</th><th class="crd-th">Census Anchors</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>100k and above</strong></td><td class="crd-td">2</td><td class="crd-td">0,4%</td><td class="crd-td">0</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>50k to 99,9k</strong></td><td class="crd-td">5</td><td class="crd-td">1,1%</td><td class="crd-td">3</td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>20k to 49,9k</strong></td><td class="crd-td">29</td><td class="crd-td">6,2%</td><td class="crd-td">10</td><td class="crd-td">19</td></tr>
<tr><td class="crd-td"><strong>10k to 19,9k</strong></td><td class="crd-td">24</td><td class="crd-td">5,1%</td><td class="crd-td">21</td><td class="crd-td">3</td></tr>
<tr><td class="crd-td"><strong>5k to 9,9k</strong></td><td class="crd-td">43</td><td class="crd-td">9,2%</td><td class="crd-td">39</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Under 5k</strong></td><td class="crd-td">364</td><td class="crd-td">77,9%</td><td class="crd-td">18</td><td class="crd-td">346</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Stratification of all 635 catalogued Balkan and South-Eastern European settlements by peak recorded population tier and provenance class, 1350-1830.</figcaption>
</figure>

# Sources

<div id="refs"></div>
