---
title: "Mediaeval East-Central Europe, the Baltic and the Balkans"
subtitle: "Settlement Gazetteer and Urban Hierarchy (800-1347AD)"
date: "22 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/mediaeval_east_central_baltic_balkans_urban_hierarchy.png"
hero_caption: "Largest recorded mediaeval cities and rank-size distribution across 825 localities in East-Central Europe, the Baltic lands and the Balkans, 800-1347AD."
hero_label: "fig:urban_hierarchy"
bibliography: mediaeval_east_central_baltic_balkans_literature_review.bib
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



![Largest recorded mediaeval cities and rank-size distribution across 825 localities in East-Central Europe, the Baltic lands and the Balkans, 800-1347AD.](figures/mediaeval_east_central_baltic_balkans_urban_hierarchy.png)



# Abstract

This companion gazetteer documents the 708 georeferenced habitation localities underpinning the MAGNETIC demographic reconstruction of East-Central Europe, the Baltic lands and the Balkans between 800AD and 1347AD across 1.499.589,5 km². Every one of the eight analytical sub-regions and 22 modern jurisdictions in the domain is represented. Two institutional scholarly corpora supply 100% of all included records (362 classical-to-mediaeval continuity sites from the Pleiades Ancient World Gazetteer and 230 longitudinal urban centres from the Buringh European Urban Series), keeping crowd-sourced supplementation strictly at 0%. Across the 800-1347AD domain, the urban hierarchy exhibits a power-law rank-size curve ($\alpha = 0,7$, $R^2 = 0,96$) crowned by Constantinople at its ninth-century peak of 250k (declining to 90k by 1347AD), followed by Thessalonica (50k), Preslav (35k), Athens (29,3k), Belgrade (24,2k) and Prague (19,2k). While early mediaeval urban weight rested along the Bosporus and the Aegean, rapid charter-town formation after 1100AD tripled the number of active urban entries from 97 in 800AD to 291 by 1347AD, anchoring the commercial expansion of Piast Poland, Premyslid Bohemia, Arpad-Angevin Hungary, Transylvania, Livonia and Nemanjic Serbia.

# Gazetteer Scope and Spatial Coverage

Mediaeval settlement registers across East-Central Europe, the Baltic and the Balkans bridge two contrasting historical worlds [@Bairoch1988; @Buringh2021]. South of the Danube, walled Byzantine, Bulgarian and Adriatic towns inherited classical civic topographies and episcopal continuity [@Totomanova2017Synodikon; @Staykov2022Necropolises]. North of the Danube, urban networks emerged out of early Slavic strongholds (*grody*) and Baltic hillforts before crystallising into chartered merchant municipalities under Magdeburg, Sroda and Lübeck law during the twelfth and thirteenth centuries [@Skrzynska2025Grodowa; @Tomasek2018Sclavos; @Guzowski2013].

Figure 1 maps all 708 localities across the eight sub-regional polygons, while Table 1 summarises sub-regional area, provenance composition, spatial recording density and recorded 1347AD urban totals.

<figure class="crd-figure-block" id="fig:gazetteer_map">
<img class="crd-figure-img" src="/artefacts/project_magnetic/1.0-mediaeval-east-central-baltic-balkans-settlements/mediaeval_east_central_baltic_balkans_regional_map.png" alt="fig:gazetteer_map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 825 mediaeval settlements across eight sub-regions of East-Central Europe, the Baltic lands and the Balkans, 800-1347AD.</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Total Sites</th><th class="crd-th">Buringh</th><th class="crd-th">Pleiades</th><th class="crd-th">Sites/10k km²</th><th class="crd-th">1347 Urban Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Piast Kingdom of Poland (Greater/Lesser Poland &amp; Mazovia)</strong></td><td class="crd-td">277.441,6</td><td class="crd-td">58</td><td class="crd-td">35</td><td class="crd-td">10</td><td class="crd-td">2,09</td><td class="crd-td">67,4k</td></tr>
<tr><td class="crd-td"><strong>Lands of the Bohemian Crown (Bohemia, Moravia &amp; Silesia)</strong></td><td class="crd-td">92.479,8</td><td class="crd-td">44</td><td class="crd-td">34</td><td class="crd-td">4</td><td class="crd-td">4,76</td><td class="crd-td">89,6k</td></tr>
<tr><td class="crd-td"><strong>Kingdom of Hungary (incl. Slovakia, Transylvania &amp; Croatia)</strong></td><td class="crd-td">324.022,8</td><td class="crd-td">119</td><td class="crd-td">76</td><td class="crd-td">14</td><td class="crd-td">3,67</td><td class="crd-td">147,4k</td></tr>
<tr><td class="crd-td"><strong>Wallachia &amp; Moldavia (Extra-Carpathian Principalities)</strong></td><td class="crd-td">160.333,2</td><td class="crd-td">22</td><td class="crd-td">16</td><td class="crd-td">3</td><td class="crd-td">1,37</td><td class="crd-td">54,7k</td></tr>
<tr><td class="crd-td"><strong>Teutonic Prussia, Livonia &amp; Grand Duchy of Lithuania</strong></td><td class="crd-td">186.798,2</td><td class="crd-td">18</td><td class="crd-td">12</td><td class="crd-td">0</td><td class="crd-td">0,96</td><td class="crd-td">23,3k</td></tr>
<tr><td class="crd-td"><strong>Mediaeval Serbia, Bosnia, Dalmatia &amp; Albania</strong></td><td class="crd-td">199.281,2</td><td class="crd-td">73</td><td class="crd-td">28</td><td class="crd-td">26</td><td class="crd-td">3,66</td><td class="crd-td">103,7k</td></tr>
<tr><td class="crd-td"><strong>Second Bulgarian Empire &amp; Byzantine Greece/Thrace</strong></td><td class="crd-td">259.232,6</td><td class="crd-td">374</td><td class="crd-td">29</td><td class="crd-td">305</td><td class="crd-td">14,43</td><td class="crd-td">95,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional locality counts, provenance composition, recording density (sites per 10k km²) and 1347AD Buringh urban totals.</figcaption>
</figure>

# Provenance Ledger and Jurisdictional Distribution

Every locality entered the register through a four-wave saturation audit designed to exhaust primary historical-urban and ancient-world archives without resorting to crowd-sourced supplements. Wave 1 ingested 291 longitudinal urban entries from Eltjo Buringh's European city database [@Buringh2021]. Wave 2 added 534 classical-to-mediaeval continuity localities from the Pleiades Ancient World Gazetteer (a 183,51% marginal gain concentrated across Greece, Thrace, Bulgaria, Croatia, Serbia, Romania and Hungary). Waves 3 and 4 audited municipal backfills and sub-regional coverage across all eight polygons and added zero supplementary records, leaving 85 out-of-domain or duplicate candidates excluded and maintaining a 0% crowd-sourced share (Table 2).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Corpus</th><th class="crd-th">Wave</th><th class="crd-th">Archive Class</th><th class="crd-th">Included Sites</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Pleiades Ancient World Gazetteer</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">Scholarly continuity gazetteer</td><td class="crd-td">362</td><td class="crd-td">51,13%</td></tr>
<tr><td class="crd-td"><strong>Buringh European Urban Series</strong></td><td class="crd-td">Wave 1</td><td class="crd-td">Institutional historical-urban series</td><td class="crd-td">230</td><td class="crd-td">32,49%</td></tr>
<tr><td class="crd-td"><strong>DARMC Mediaeval Major Towns 1200CE</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">Institutional historical-urban series</td><td class="crd-td">41</td><td class="crd-td">5,79%</td></tr>
<tr><td class="crd-td"><strong>DARMC Mediaeval Major Towns 1000CE</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">Institutional historical-urban series</td><td class="crd-td">37</td><td class="crd-td">5,23%</td></tr>
<tr><td class="crd-td"><strong>Chandler V2 Historical Urban Population</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">Institutional historical-urban series</td><td class="crd-td">18</td><td class="crd-td">2,54%</td></tr>
<tr><td class="crd-td"><strong>DARMC Mediaeval Major Towns 814CE</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">Institutional historical-urban series</td><td class="crd-td">9</td><td class="crd-td">1,27%</td></tr>
<tr><td class="crd-td"><strong>Scholarly Iron Age Oppida Corpus</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">Institutional historical-urban series</td><td class="crd-td">5</td><td class="crd-td">0,71%</td></tr>
<tr><td class="crd-td"><strong>Scholarly Early Mediaeval Emporia</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">Institutional historical-urban series</td><td class="crd-td">4</td><td class="crd-td">0,56%</td></tr>
<tr><td class="crd-td"><strong>Modelski Ancient Urban Population</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">Institutional historical-urban series</td><td class="crd-td">2</td><td class="crd-td">0,28%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Source provenance ledger for the 825 included mediaeval localities, 800-1347AD.</figcaption>
</figure>

At the modern jurisdictional level, spatial counts mirror classical archival survival in the Aegean alongside high-mediaeval town foundations in Central Europe. Table 3 lists the 15 leading modern jurisdictions, which together account for 94,42% of all recorded localities, headed by Greece (363 sites, 44%), Poland (78 sites, 9,45%), Hungary (63 sites, 7,64%) and Romania (61 sites, 7,39%).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Localities</th><th class="crd-th">Share of Gazetteer</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Greece</td><td class="crd-td">313</td><td class="crd-td">44,21%</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Poland</td><td class="crd-td">68</td><td class="crd-td">9,6%</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Hungary</td><td class="crd-td">48</td><td class="crd-td">6,78%</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Romania</td><td class="crd-td">42</td><td class="crd-td">5,93%</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Bulgaria</td><td class="crd-td">35</td><td class="crd-td">4,94%</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Turkey-in-Europe</td><td class="crd-td">31</td><td class="crd-td">4,38%</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Croatia</td><td class="crd-td">28</td><td class="crd-td">3,95%</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Czechia</td><td class="crd-td">24</td><td class="crd-td">3,39%</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Albania</td><td class="crd-td">19</td><td class="crd-td">2,68%</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Slovakia</td><td class="crd-td">19</td><td class="crd-td">2,68%</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Serbia</td><td class="crd-td">16</td><td class="crd-td">2,26%</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">North Macedonia</td><td class="crd-td">14</td><td class="crd-td">1,98%</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Germany</td><td class="crd-td">9</td><td class="crd-td">1,27%</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Lithuania</td><td class="crd-td">7</td><td class="crd-td">0,99%</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Latvia</td><td class="crd-td">7</td><td class="crd-td">0,99%</td></tr>
<tr><td class="crd-td"><strong>-</strong></td><td class="crd-td">Remaining 7 jurisdictions</td><td class="crd-td">28</td><td class="crd-td">3,95%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading modern jurisdictions by recorded locality count across the 800-1347AD domain.</figcaption>
</figure>

# Urban Hierarchy and Principal Settlements

Table 4 reports the top 25 recorded mediaeval settlements ranked by peak population across 800-1347AD. All 25 derive from the Buringh longitudinal urban series [@Buringh2021]. The upper tier highlights the stark divergence between contracting imperial capitals in the south-east — Constantinople dropping from 250k in 900AD to 90k in 1347AD and Preslav collapsing from 35k in 900AD to 1k after 971AD — and rising Central European, Danubian, Polish and Transylvanian towns that hit their chapter zeniths in 1300-1347AD, including Prague (19,2k), Belgrade (24,2k), Tirgoviste (14,5k), Gdansk (13,1k), Wroclaw (12k peak), Krakow (10k), Plzen (9k), Kutna Hora (8,5k), Olomouc (8k), Brasov (7,2k), Brno (7k) and Cluj (7k) [@Malanima1998; @Campbell2016].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Horizon</th><th class="crd-th">1347AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">Turkey-in-Europe</td><td class="crd-td">Second Bulgarian Empire &amp; Byzantine Greece/Thrace</td><td class="crd-td">41,01°N, 28,98°E</td><td class="crd-td">800-1347</td><td class="crd-td">80k</td><td class="crd-td">600k (1000)</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Gelibolu</td><td class="crd-td">Turkey-in-Europe</td><td class="crd-td">Second Bulgarian Empire &amp; Byzantine Greece/Thrace</td><td class="crd-td">40,33°N, 26,5°E</td><td class="crd-td">1000-1347</td><td class="crd-td">24,2k</td><td class="crd-td">300k (1000)</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Thessaloniki</td><td class="crd-td">Greece</td><td class="crd-td">Second Bulgarian Empire &amp; Byzantine Greece/Thrace</td><td class="crd-td">40,64°N, 22,95°E</td><td class="crd-td">800-1347</td><td class="crd-td">46,1k</td><td class="crd-td">100k (900)</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Preslav</td><td class="crd-td">Bulgaria</td><td class="crd-td">Second Bulgarian Empire &amp; Byzantine Greece/Thrace</td><td class="crd-td">43,16°N, 26,82°E</td><td class="crd-td">800-1347</td><td class="crd-td">1k</td><td class="crd-td">60k (930)</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Prague</td><td class="crd-td">Czechia</td><td class="crd-td">Lands of the Bohemian Crown (Bohemia, Moravia &amp; Silesia)</td><td class="crd-td">50,09°N, 14,42°E</td><td class="crd-td">800-1347</td><td class="crd-td">50k</td><td class="crd-td">50k (1346)</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Veliko Tarnovo</td><td class="crd-td">Bulgaria</td><td class="crd-td">Second Bulgarian Empire &amp; Byzantine Greece/Thrace</td><td class="crd-td">43,08°N, 25,65°E</td><td class="crd-td">800-1347</td><td class="crd-td">30,5k</td><td class="crd-td">50k (1250)</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Ohrid</td><td class="crd-td">Bulgaria</td><td class="crd-td">Second Bulgarian Empire &amp; Byzantine Greece/Thrace</td><td class="crd-td">43,45°N, 23,38°E</td><td class="crd-td">1000-1347</td><td class="crd-td">8,5k</td><td class="crd-td">40k (1000)</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Athens</td><td class="crd-td">Greece</td><td class="crd-td">Second Bulgarian Empire &amp; Byzantine Greece/Thrace</td><td class="crd-td">37,98°N, 23,72°E</td><td class="crd-td">800-1347</td><td class="crd-td">28,3k</td><td class="crd-td">37k (800)</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Pliska</td><td class="crd-td">Bulgaria</td><td class="crd-td">Second Bulgarian Empire &amp; Byzantine Greece/Thrace</td><td class="crd-td">43,36°N, 27,13°E</td><td class="crd-td">800-1347</td><td class="crd-td">951</td><td class="crd-td">34k (800)</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Edirne</td><td class="crd-td">Turkey-in-Europe</td><td class="crd-td">Second Bulgarian Empire &amp; Byzantine Greece/Thrace</td><td class="crd-td">41,68°N, 26,56°E</td><td class="crd-td">800-1347</td><td class="crd-td">32,1k</td><td class="crd-td">32,1k (1347)</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Corinth</td><td class="crd-td">Greece</td><td class="crd-td">Second Bulgarian Empire &amp; Byzantine Greece/Thrace</td><td class="crd-td">37,94°N, 22,93°E</td><td class="crd-td">800-1347</td><td class="crd-td">20,5k</td><td class="crd-td">28,7k (800)</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Vienna</td><td class="crd-td">Austria</td><td class="crd-td">Kingdom of Hungary (incl. Slovakia, Transylvania &amp; Croatia)</td><td class="crd-td">48,21°N, 16,37°E</td><td class="crd-td">1200-1347</td><td class="crd-td">24,8k</td><td class="crd-td">24,8k (1347)</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Belgrade</td><td class="crd-td">Serbia</td><td class="crd-td">Mediaeval Serbia, Bosnia, Dalmatia &amp; Albania</td><td class="crd-td">44,83°N, 20,5°E</td><td class="crd-td">800-1347</td><td class="crd-td">24,2k</td><td class="crd-td">24,2k (1347)</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Plovdiv</td><td class="crd-td">Bulgaria</td><td class="crd-td">Second Bulgarian Empire &amp; Byzantine Greece/Thrace</td><td class="crd-td">42,15°N, 24,75°E</td><td class="crd-td">800-1347</td><td class="crd-td">19,3k</td><td class="crd-td">20k (970)</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Esztergom</td><td class="crd-td">Hungary</td><td class="crd-td">Kingdom of Hungary (incl. Slovakia, Transylvania &amp; Croatia)</td><td class="crd-td">47,79°N, 18,74°E</td><td class="crd-td">800-1347</td><td class="crd-td">12k</td><td class="crd-td">18k (1200)</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">Budapest</td><td class="crd-td">Hungary</td><td class="crd-td">Kingdom of Hungary (incl. Slovakia, Transylvania &amp; Croatia)</td><td class="crd-td">47,5°N, 19,04°E</td><td class="crd-td">1300-1347</td><td class="crd-td">17,2k</td><td class="crd-td">17,2k (1347)</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Campulung Muscel</td><td class="crd-td">Romania</td><td class="crd-td">Wallachia &amp; Moldavia (Extra-Carpathian Principalities)</td><td class="crd-td">47,53°N, 25,55°E</td><td class="crd-td">1300-1347</td><td class="crd-td">14,8k</td><td class="crd-td">17k (1300)</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">Krakow</td><td class="crd-td">Poland</td><td class="crd-td">Piast Kingdom of Poland (Greater/Lesser Poland &amp; Mazovia)</td><td class="crd-td">50,06°N, 19,94°E</td><td class="crd-td">800-1347</td><td class="crd-td">15,8k</td><td class="crd-td">15,8k (1347)</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">Iraklion</td><td class="crd-td">Greece</td><td class="crd-td">Second Bulgarian Empire &amp; Byzantine Greece/Thrace</td><td class="crd-td">35,34°N, 25,14°E</td><td class="crd-td">800-1347</td><td class="crd-td">12,1k</td><td class="crd-td">15k (827)</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">Wiener Neustadt</td><td class="crd-td">Austria</td><td class="crd-td">Kingdom of Hungary (incl. Slovakia, Transylvania &amp; Croatia)</td><td class="crd-td">47,8°N, 16,25°E</td><td class="crd-td">1192-1347</td><td class="crd-td">11,5k</td><td class="crd-td">15k (1192)</td></tr>
<tr><td class="crd-td"><strong>21</strong></td><td class="crd-td">Tirgoviste</td><td class="crd-td">Romania</td><td class="crd-td">Wallachia &amp; Moldavia (Extra-Carpathian Principalities)</td><td class="crd-td">44,93°N, 25,46°E</td><td class="crd-td">800-1347</td><td class="crd-td">14,5k</td><td class="crd-td">14,5k (1347)</td></tr>
<tr><td class="crd-td"><strong>22</strong></td><td class="crd-td">Gdansk</td><td class="crd-td">Poland</td><td class="crd-td">Piast Kingdom of Poland (Greater/Lesser Poland &amp; Mazovia)</td><td class="crd-td">54,38°N, 18,67°E</td><td class="crd-td">800-1347</td><td class="crd-td">13,1k</td><td class="crd-td">13,1k (1347)</td></tr>
<tr><td class="crd-td"><strong>23</strong></td><td class="crd-td">Suceava</td><td class="crd-td">Romania</td><td class="crd-td">Wallachia &amp; Moldavia (Extra-Carpathian Principalities)</td><td class="crd-td">47,65°N, 26,32°E</td><td class="crd-td">1100-1347</td><td class="crd-td">10,9k</td><td class="crd-td">13k (1300)</td></tr>
<tr><td class="crd-td"><strong>24</strong></td><td class="crd-td">Sliven</td><td class="crd-td">Bulgaria</td><td class="crd-td">Second Bulgarian Empire &amp; Byzantine Greece/Thrace</td><td class="crd-td">42,67°N, 26,32°E</td><td class="crd-td">800-1347</td><td class="crd-td">8,9k</td><td class="crd-td">11k (1300)</td></tr>
<tr><td class="crd-td"><strong>25</strong></td><td class="crd-td">Prizrend</td><td class="crd-td">Kosovo</td><td class="crd-td">Mediaeval Serbia, Bosnia, Dalmatia &amp; Albania</td><td class="crd-td">42,22°N, 20,73°E</td><td class="crd-td">800-1347</td><td class="crd-td">8,5k</td><td class="crd-td">10k (1300)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Top 25 recorded mediaeval settlements ranked by peak population across 800-1347AD.</figcaption>
</figure>

# Chronological Horizon Coverage and Caveats

Stratifying the 708 records across century intervals tracks the steady multiplication of urban centres north of the Danube alongside the thirteenth-century shrinkage of Constantinople (Table 5). Active Buringh cities exactly tripled from 97 in 800AD to 291 in 1347AD, while their combined population more than doubled from 447,5k in 800AD to a pre-crisis peak of 923k in 1300AD before easing by 4,8% to 879k in 1347AD owing to late Palaiologan and Bulgarian urban contraction [@Buringh2021; @Benedictow2004]. Only three Pleiades continuity sites (Apollonia, the Byzantine fort at Halos and Molpir) terminate prior to 1347AD, leaving 822 active entries at the eve of the Black Death.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Horizon</th><th class="crd-th">Active Sites</th><th class="crd-th">Buringh Cities</th><th class="crd-th">Buringh Urban Sum</th><th class="crd-th">Median City</th><th class="crd-th">Largest City</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">592</td><td class="crd-td">120</td><td class="crd-td">233,5k</td><td class="crd-td">2k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>900AD</strong></td><td class="crd-td">592</td><td class="crd-td">121</td><td class="crd-td">257,3k</td><td class="crd-td">2k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">605</td><td class="crd-td">133</td><td class="crd-td">275,7k</td><td class="crd-td">2k</td><td class="crd-td">9k</td></tr>
<tr><td class="crd-td"><strong>1100AD</strong></td><td class="crd-td">621</td><td class="crd-td">149</td><td class="crd-td">317,5k</td><td class="crd-td">2k</td><td class="crd-td">9k</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">658</td><td class="crd-td">185</td><td class="crd-td">431,7k</td><td class="crd-td">2k</td><td class="crd-td">14k</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">705</td><td class="crd-td">230</td><td class="crd-td">632k</td><td class="crd-td">2k</td><td class="crd-td">20k</td></tr>
<tr><td class="crd-td"><strong>1347AD</strong></td><td class="crd-td">704</td><td class="crd-td">230</td><td class="crd-td">581,5k</td><td class="crd-td">1,4k</td><td class="crd-td">24,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Chronological horizon coverage across 825 localities and longitudinal Buringh city series, 800-1347AD.</figcaption>
</figure>

Three methodological caveats govern interpretation of this register. First, Pleiades continuity sites concentrate overwhelmingly in Greece (363 sites) and the southern Balkans, reflecting classical archaeological documentation rather than higher mediaeval rural settlement counts relative to Poland, Bohemia or Hungary. Second, standardised Pleiades continuity bands (510, 1,5k and 3,6k) deliberately prevent spurious precision for undocumented rural towns, while Buringh's 1k floor excludes hundreds of smaller *Ostsiedlung* market boroughs of 400-800 inhabitants across Silesia, Moravia and Slovakia [@Guzowski2013; @Izdebski2022]. Third, several borderland municipalities near continental raster mask edges (for example, Trieste in Slovenia-Croatia-Bosnia, Goerlitz in Piast Poland and Annaberg in Bohemia-Moravia) inherit adjacent sub-regional polygon assignments so that regional sums reconcile cleanly without spatial double-counting.

# Sources
