---
title: "Mediaeval Scandinavia and North Atlantic Colonisation"
subtitle: "Settlement Gazetteer and Urban Hierarchy (800-1500AD)"
date: "22 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/mediaeval_scandinavia_and_north_atlantic_urban_hierarchy.png"
hero_caption: "Leading recorded settlements and rank-size distribution across 1.022 Nordic and North Atlantic localities, 800AD–1500AD."
hero_label: "fig:urban_hierarchy"
bibliography: mediaeval_scandinavia_and_north_atlantic_literature_review.bib
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



![Leading recorded settlements and rank-size distribution across 1.022 Nordic and North Atlantic localities, 800AD–1500AD.](figures/mediaeval_scandinavia_and_north_atlantic_urban_hierarchy.png)



# Abstract

This companion gazetteer documents the 1.028 georeferenced settlement localities anchoring the MAGNETIC demographic reconstruction of mediaeval Scandinavia and the North Atlantic between 800AD and 1500AD across 3.342.542,7 km². Every one of the seven sub-regions—the Kingdom of Denmark, the Kingdom of Sweden, the Kingdom of Norway, Finland (Eastland), Iceland, the Faroe Islands and Norse and Inuit Greenland—and all 8 modern jurisdictions touching the chapter mask are represented. Institutional statistical censuses, scholarly urban registers and archaeological archives account for 99,51% of all included settlements (959 national statistical anchors across seven Nordic archives, 42 historical urban series from Buringh, 14 Iron Age and early mediaeval continuity sites from Pleiades and 2 Icelandic radiocarbon sites), confining crowd-sourced municipal supplementation to 0% (five localities in the Faroe Islands). Across the full register, peak spatial weights follow a smooth power-law rank-size slope ($\alpha = 0,77$, $R^2 = 0,99$), while filtering out longitudinal Wave 3 spatial backfill reveals the true modest scale of mediaeval Nordic urbanism—headed by Bergen (7k in 1300AD and 1500AD), Stockholm (7k by 1500AD), Roskilde (6k–7k) and Malmö (5k by 1500AD).

# Gazetteer Scope and Spatial Coverage

Mediaeval northern Europe combined an exceptionally low urban share with dense rural parishes in Denmark and southern Sweden and thinly scattered maritime farmsteads along Norwegian fjords, Finnish lake basins and North Atlantic volcanic coasts [@Benedictow2004; @Buringh2021; @Dugmore2012]. Building a spatially continuous settlement framework across 3.342.542,7 km² therefore requires integrating authentic mediaeval towns with historical parish centres, archaeological continuity nodes and modern municipal coordinate anchors. Figure 1 maps all 1.028 included localities across the seven sub-regional masks and Table 1 summarises sub-regional site counts, archive composition and spatial recording density per 10k km².

<figure class="crd-figure-block" id="fig:gazetteer_map">
<img class="crd-figure-img" src="/artefacts/project_magnetic/1.0-mediaeval-scandinavia-and-north-atlantic-settlements/mediaeval_scandinavia_and_north_atlantic_regional_map.png" alt="fig:gazetteer_map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 1.022 recorded settlement localities across seven sub-regions of mediaeval Scandinavia and the North Atlantic, 800AD–1500AD.</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Total Sites</th><th class="crd-th">Buringh Urban</th><th class="crd-th">Census Anchors</th><th class="crd-th">Arch. &amp; Suppl.</th><th class="crd-th">Sites per 10k km²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mediaeval Denmark (incl. Scania, Halland &amp; Blekinge)</strong></td><td class="crd-td">64.402,5</td><td class="crd-td">124</td><td class="crd-td">12</td><td class="crd-td">93</td><td class="crd-td">19</td><td class="crd-td">19,25</td></tr>
<tr><td class="crd-td"><strong>Mediaeval Kingdom of Sweden (Svealand-Götaland)</strong></td><td class="crd-td">424.619,3</td><td class="crd-td">119</td><td class="crd-td">10</td><td class="crd-td">91</td><td class="crd-td">18</td><td class="crd-td">2,8</td></tr>
<tr><td class="crd-td"><strong>Mediaeval Kingdom of Norway (incl. Jämtland)</strong></td><td class="crd-td">351.795,4</td><td class="crd-td">274</td><td class="crd-td">2</td><td class="crd-td">264</td><td class="crd-td">8</td><td class="crd-td">7,79</td></tr>
<tr><td class="crd-td"><strong>Österland (Mediaeval Finland &amp; Åland)</strong></td><td class="crd-td">322.932,6</td><td class="crd-td">475</td><td class="crd-td">4</td><td class="crd-td">470</td><td class="crd-td">1</td><td class="crd-td">14,71</td></tr>
<tr><td class="crd-td"><strong>Iceland</strong></td><td class="crd-td">100.656,8</td><td class="crd-td">25</td><td class="crd-td">1</td><td class="crd-td">19</td><td class="crd-td">5</td><td class="crd-td">2,48</td></tr>
<tr><td class="crd-td"><strong>Faroe Islands</strong></td><td class="crd-td">1.328</td><td class="crd-td">4</td><td class="crd-td">0</td><td class="crd-td">3</td><td class="crd-td">1</td><td class="crd-td">30,12</td></tr>
<tr><td class="crd-td"><strong>Norse &amp; Inuit Greenland</strong></td><td class="crd-td">2.076.808,1</td><td class="crd-td">7</td><td class="crd-td">0</td><td class="crd-td">4</td><td class="crd-td">3</td><td class="crd-td">0,03</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional locality counts, archive composition and spatial recording density (sites per 10k km²) across seven Nordic and North Atlantic sub-regions.</figcaption>
</figure>

# Provenance Ledger and Jurisdictional Distribution

Every settlement entered the gazetteer through a four-wave saturation protocol across 1.350 audited candidates (excluding 328 duplicate or out-of-domain records). Wave 1 ingested 42 historical urban trajectories from the Buringh European Urban Corpus [@Buringh2021], capturing the chartered towns, cathedral sees and Hanseatic staples of mediaeval Scandinavia. Wave 2 added 14 late Iron Age and Viking-Age continuity localities from the Pleiades Ancient World Gazetteer—among them Helgö in Lake Mälaren, Eketorp and Skedemosse on Öland, Vallhagar and Botes on Gotland, Sorte Muld on Bornholm and Illerup Ådal in Jutland (a 33,33% marginal gain). Wave 3 integrated 959 municipal spatial anchors from the seven national statistical census archives of Finland, Norway, Sweden, Denmark, Iceland, Greenland and the Faroe Islands alongside 2 Icelandic radiocarbon settlements (Rangárbotnar and Svinavath) from the European Radiocarbon Settlement Corpus. Wave 4 closed a residual coverage gap across the Faroe Islands by admitting 5 municipalities (Miðvágur, Sørvágur, Vestmanna, Við Sjógv and Vágur) from the GeoNames Municipal Gazetteer Supplement (a 0,49% marginal gain). Table 2 reports the full eleven-corpus provenance ledger.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Corpus</th><th class="crd-th">Wave</th><th class="crd-th">Archive Class</th><th class="crd-th">Included Sites</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>National Statistical Census of Finland</strong></td><td class="crd-td">Wave 3</td><td class="crd-td">National census archive</td><td class="crd-td">472</td><td class="crd-td">45,91%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census of Norway</strong></td><td class="crd-td">Wave 3</td><td class="crd-td">National census archive</td><td class="crd-td">265</td><td class="crd-td">25,78%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census of Sweden</strong></td><td class="crd-td">Wave 3</td><td class="crd-td">National census archive</td><td class="crd-td">112</td><td class="crd-td">10,89%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census of Denmark</strong></td><td class="crd-td">Wave 3</td><td class="crd-td">National census archive</td><td class="crd-td">69</td><td class="crd-td">6,71%</td></tr>
<tr><td class="crd-td"><strong>Buringh European Urban Corpus (700-2000)</strong></td><td class="crd-td">Wave 1</td><td class="crd-td">Historical urban corpus</td><td class="crd-td">29</td><td class="crd-td">2,82%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census of Iceland</strong></td><td class="crd-td">Wave 3</td><td class="crd-td">National census archive</td><td class="crd-td">19</td><td class="crd-td">1,85%</td></tr>
<tr><td class="crd-td"><strong>Pleiades Ancient World Gazetteer</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">Ancient continuity gazetteer</td><td class="crd-td">13</td><td class="crd-td">1,26%</td></tr>
<tr><td class="crd-td"><strong>DARMC Mediaeval Major Towns 1000CE</strong></td><td class="crd-td">Wave 3</td><td class="crd-td">National census archive</td><td class="crd-td">8</td><td class="crd-td">0,78%</td></tr>
<tr><td class="crd-td"><strong>DARMC Mediaeval Major Towns 1200CE</strong></td><td class="crd-td">Wave 3</td><td class="crd-td">National census archive</td><td class="crd-td">8</td><td class="crd-td">0,78%</td></tr>
<tr><td class="crd-td"><strong>Scholarly North Atlantic Benchmarks</strong></td><td class="crd-td">Wave 3</td><td class="crd-td">National census archive</td><td class="crd-td">7</td><td class="crd-td">0,68%</td></tr>
<tr><td class="crd-td"><strong>Scholarly Early Mediaeval Emporia</strong></td><td class="crd-td">Wave 3</td><td class="crd-td">National census archive</td><td class="crd-td">6</td><td class="crd-td">0,58%</td></tr>
<tr><td class="crd-td"><strong>Chandler V2 Historical Urban Population</strong></td><td class="crd-td">Wave 3</td><td class="crd-td">National census archive</td><td class="crd-td">5</td><td class="crd-td">0,49%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census of Greenland</strong></td><td class="crd-td">Wave 3</td><td class="crd-td">National census archive</td><td class="crd-td">4</td><td class="crd-td">0,39%</td></tr>
<tr><td class="crd-td"><strong>National Statistical Census of Faroe Islands</strong></td><td class="crd-td">Wave 3</td><td class="crd-td">National census archive</td><td class="crd-td">3</td><td class="crd-td">0,29%</td></tr>
<tr><td class="crd-td"><strong>DARMC Mediaeval Major Towns 814CE</strong></td><td class="crd-td">Wave 3</td><td class="crd-td">National census archive</td><td class="crd-td">2</td><td class="crd-td">0,19%</td></tr>
<tr><td class="crd-td"><strong>DARMC Mediaeval Major Towns 1450CE</strong></td><td class="crd-td">Wave 3</td><td class="crd-td">National census archive</td><td class="crd-td">2</td><td class="crd-td">0,19%</td></tr>
<tr><td class="crd-td"><strong>Scholarly Iron Age Oppida Corpus</strong></td><td class="crd-td">Wave 3</td><td class="crd-td">National census archive</td><td class="crd-td">2</td><td class="crd-td">0,19%</td></tr>
<tr><td class="crd-td"><strong>European Radiocarbon Settlement Corpus</strong></td><td class="crd-td">Wave 3</td><td class="crd-td">Radiocarbon archive</td><td class="crd-td">2</td><td class="crd-td">0,19%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Source provenance ledger for the 1.022 included settlements in mediaeval Scandinavia and the North Atlantic.</figcaption>
</figure>

Table 3 breaks down the register across all 8 modern jurisdictions. Finland (480 localities, 46,97%) and Norway (273 localities, 26,71%) account for nearly three-quarters of all records because their national municipal statistics retain granular parish-level units across rural districts. Sweden contributes 141 localities (13,8%), Denmark 88 (8,61%), Iceland 24 (2,35%), the Faroe Islands 9 (0,88%) and Greenland 6 coastal anchors (0,59%—Nuuk, Qaqortoq, Sisimiut, Ilulissat, Aasiaat and Maniitsoq, spanning both the former Norse settlements and Disko Bay Inuit hunting grounds). A single locality under modern German jurisdiction—Flensburg, chartered under the Danish crown in the Duchy of Schleswig in 1284—falls naturally within the Kingdom of Denmark sub-regional polygon.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Localities</th><th class="crd-th">Share of Register</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Finland</td><td class="crd-td">477</td><td class="crd-td">46,4%</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Norway</td><td class="crd-td">275</td><td class="crd-td">26,75%</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Sweden</td><td class="crd-td">146</td><td class="crd-td">14,2%</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Denmark</td><td class="crd-td">92</td><td class="crd-td">8,95%</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Iceland</td><td class="crd-td">25</td><td class="crd-td">2,43%</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Greenland</td><td class="crd-td">7</td><td class="crd-td">0,68%</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Faroe Islands</td><td class="crd-td">4</td><td class="crd-td">0,39%</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Germany</td><td class="crd-td">2</td><td class="crd-td">0,19%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Distribution of the 1.022 recorded settlement localities across all eight modern jurisdictions within the 800AD–1500AD chapter domain.</figcaption>
</figure>

# Settlement Hierarchy and Principal Localities

Table 4 lists the top 25 settlement records ranked by peak assigned value in the chapter summary. As documented in the paired literature review, these top-25 figures combine historical urban nodes with Wave 3 longitudinal national-census backfill weights applied to pre-urban centuries so that kriging substrata preserve municipal coordinate anchors across the 800AD–1500AD domain. Readers should note that entries such as Stockholm (121,2k at 800AD), Copenhagen (92,3k), Oslo (86,6k) and Helsinki (52,7k) reflect proportional spatial weighting rather than historical Viking-Age urban headcounts.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Locality</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Horizon</th><th class="crd-th">Peak Weight</th><th class="crd-th">Provenance</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Roskilde</td><td class="crd-td">Denmark</td><td class="crd-td">Mediaeval Denmark (incl. Scania, Halland &amp; Blekinge)</td><td class="crd-td">55,64°N, 12,08°E</td><td class="crd-td">800AD-1500AD</td><td class="crd-td">36k</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Visby</td><td class="crd-td">Sweden</td><td class="crd-td">Mediaeval Kingdom of Sweden (Svealand-Götaland)</td><td class="crd-td">57,64°N, 18,3°E</td><td class="crd-td">800AD-1500AD</td><td class="crd-td">17k</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Bergen</td><td class="crd-td">Norway</td><td class="crd-td">Mediaeval Kingdom of Norway (incl. Jämtland)</td><td class="crd-td">60,39°N, 5,32°E</td><td class="crd-td">800AD-1500AD</td><td class="crd-td">16k</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Copenhagen</td><td class="crd-td">Denmark</td><td class="crd-td">Mediaeval Denmark (incl. Scania, Halland &amp; Blekinge)</td><td class="crd-td">55,68°N, 12,57°E</td><td class="crd-td">800AD-1500AD</td><td class="crd-td">15k</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Stockholm</td><td class="crd-td">Sweden</td><td class="crd-td">Mediaeval Kingdom of Sweden (Svealand-Götaland)</td><td class="crd-td">59,33°N, 18,07°E</td><td class="crd-td">800AD-1500AD</td><td class="crd-td">8,6k</td><td class="crd-td">Chandler V2 Historical Urban Population</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Roma</td><td class="crd-td">Sweden</td><td class="crd-td">Mediaeval Kingdom of Sweden (Svealand-Götaland)</td><td class="crd-td">57,53°N, 18,45°E</td><td class="crd-td">800AD-1500AD</td><td class="crd-td">5,9k</td><td class="crd-td">DARMC Mediaeval Major Towns 1200CE</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Skara</td><td class="crd-td">Sweden</td><td class="crd-td">Mediaeval Kingdom of Sweden (Svealand-Götaland)</td><td class="crd-td">58,39°N, 13,44°E</td><td class="crd-td">800AD-1500AD</td><td class="crd-td">5,5k</td><td class="crd-td">DARMC Mediaeval Major Towns 1200CE</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Malmoe</td><td class="crd-td">Sweden</td><td class="crd-td">Mediaeval Denmark (incl. Scania, Halland &amp; Blekinge)</td><td class="crd-td">55,6°N, 13°E</td><td class="crd-td">800AD-1500AD</td><td class="crd-td">5k</td><td class="crd-td">Buringh European Urban Corpus (700-2000)</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Lund</td><td class="crd-td">Sweden</td><td class="crd-td">Mediaeval Denmark (incl. Scania, Halland &amp; Blekinge)</td><td class="crd-td">55,7°N, 13,18°E</td><td class="crd-td">800AD-1500AD</td><td class="crd-td">4,7k</td><td class="crd-td">Buringh European Urban Corpus (700-2000)</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Odense</td><td class="crd-td">Denmark</td><td class="crd-td">Mediaeval Denmark (incl. Scania, Halland &amp; Blekinge)</td><td class="crd-td">55,4°N, 10,38°E</td><td class="crd-td">800AD-1500AD</td><td class="crd-td">4k</td><td class="crd-td">Buringh European Urban Corpus (700-2000)</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Skara</td><td class="crd-td">Norway</td><td class="crd-td">Mediaeval Kingdom of Norway (incl. Jämtland)</td><td class="crd-td">59,74°N, 9,84°E</td><td class="crd-td">800AD-1500AD</td><td class="crd-td">3,9k</td><td class="crd-td">DARMC Mediaeval Major Towns 1000CE</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Ribe</td><td class="crd-td">Denmark</td><td class="crd-td">Mediaeval Denmark (incl. Scania, Halland &amp; Blekinge)</td><td class="crd-td">55,33°N, 8,76°E</td><td class="crd-td">800AD-1500AD</td><td class="crd-td">3,5k</td><td class="crd-td">Scholarly Early Mediaeval Emporia</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Nidaros (Trondheim)</td><td class="crd-td">Norway</td><td class="crd-td">Mediaeval Kingdom of Norway (incl. Jämtland)</td><td class="crd-td">63,43°N, 10,39°E</td><td class="crd-td">1000AD-1500AD</td><td class="crd-td">3,4k</td><td class="crd-td">Scholarly Early Mediaeval Emporia</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Tonsberg</td><td class="crd-td">Norway</td><td class="crd-td">Mediaeval Kingdom of Norway (incl. Jämtland)</td><td class="crd-td">59,27°N, 10,41°E</td><td class="crd-td">800AD-1500AD</td><td class="crd-td">3,4k</td><td class="crd-td">DARMC Mediaeval Major Towns 1200CE</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Felkoping (Falkoping</td><td class="crd-td">Sweden</td><td class="crd-td">Mediaeval Kingdom of Sweden (Svealand-Götaland)</td><td class="crd-td">58,17°N, 13,55°E</td><td class="crd-td">800AD-1500AD</td><td class="crd-td">3,3k</td><td class="crd-td">DARMC Mediaeval Major Towns 1450CE</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">Uppsala</td><td class="crd-td">Sweden</td><td class="crd-td">Mediaeval Kingdom of Sweden (Svealand-Götaland)</td><td class="crd-td">59,87°N, 17,63°E</td><td class="crd-td">800AD-1500AD</td><td class="crd-td">3,3k</td><td class="crd-td">Buringh European Urban Corpus (700-2000)</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Kalmar</td><td class="crd-td">Sweden</td><td class="crd-td">Mediaeval Kingdom of Sweden (Svealand-Götaland)</td><td class="crd-td">56,67°N, 16,37°E</td><td class="crd-td">800AD-1500AD</td><td class="crd-td">3,3k</td><td class="crd-td">Buringh European Urban Corpus (700-2000)</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">Ystad</td><td class="crd-td">Sweden</td><td class="crd-td">Mediaeval Denmark (incl. Scania, Halland &amp; Blekinge)</td><td class="crd-td">55,43°N, 13,82°E</td><td class="crd-td">800AD-1500AD</td><td class="crd-td">3,2k</td><td class="crd-td">DARMC Mediaeval Major Towns 1200CE</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">Aarhus</td><td class="crd-td">Denmark</td><td class="crd-td">Mediaeval Denmark (incl. Scania, Halland &amp; Blekinge)</td><td class="crd-td">56,17°N, 10,22°E</td><td class="crd-td">800AD-1500AD</td><td class="crd-td">3k</td><td class="crd-td">Buringh European Urban Corpus (700-2000)</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">Alborg</td><td class="crd-td">Denmark</td><td class="crd-td">Mediaeval Denmark (incl. Scania, Halland &amp; Blekinge)</td><td class="crd-td">57,03°N, 9,93°E</td><td class="crd-td">800AD-1500AD</td><td class="crd-td">3k</td><td class="crd-td">DARMC Mediaeval Major Towns 1200CE</td></tr>
<tr><td class="crd-td"><strong>21</strong></td><td class="crd-td">Flensburg</td><td class="crd-td">Germany</td><td class="crd-td">Mediaeval Denmark (incl. Scania, Halland &amp; Blekinge)</td><td class="crd-td">54,78°N, 9,43°E</td><td class="crd-td">800AD-1500AD</td><td class="crd-td">3k</td><td class="crd-td">Buringh European Urban Corpus (700-2000)</td></tr>
<tr><td class="crd-td"><strong>22</strong></td><td class="crd-td">Helsingor</td><td class="crd-td">Denmark</td><td class="crd-td">Mediaeval Denmark (incl. Scania, Halland &amp; Blekinge)</td><td class="crd-td">56,05°N, 12,63°E</td><td class="crd-td">800AD-1500AD</td><td class="crd-td">3k</td><td class="crd-td">Buringh European Urban Corpus (700-2000)</td></tr>
<tr><td class="crd-td"><strong>23</strong></td><td class="crd-td">Kobenhaven</td><td class="crd-td">Denmark</td><td class="crd-td">Mediaeval Denmark (incl. Scania, Halland &amp; Blekinge)</td><td class="crd-td">55,72°N, 12,58°E</td><td class="crd-td">1000AD-1500AD</td><td class="crd-td">3k</td><td class="crd-td">Buringh European Urban Corpus (700-2000)</td></tr>
<tr><td class="crd-td"><strong>24</strong></td><td class="crd-td">Oslo</td><td class="crd-td">Norway</td><td class="crd-td">Mediaeval Kingdom of Norway (incl. Jämtland)</td><td class="crd-td">59,92°N, 10,75°E</td><td class="crd-td">800AD-1500AD</td><td class="crd-td">3k</td><td class="crd-td">Buringh European Urban Corpus (700-2000)</td></tr>
<tr><td class="crd-td"><strong>25</strong></td><td class="crd-td">Schleswig</td><td class="crd-td">Germany</td><td class="crd-td">Mediaeval Denmark (incl. Scania, Halland &amp; Blekinge)</td><td class="crd-td">54,52°N, 9,55°E</td><td class="crd-td">800AD-1500AD</td><td class="crd-td">3k</td><td class="crd-td">Buringh European Urban Corpus (700-2000)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Top 25 recorded settlement anchors ranked by peak assigned spatial weight in the chapter summary (800AD–1500AD).</figcaption>
</figure>

To contrast those spatial anchor weights against genuine mediaeval town populations, Table 5 isolates the 16 principal Nordic urban centres whose thirteenth- to fifteenth-century headcounts derive directly from the Buringh European Urban Corpus [@Buringh2021; @Bairoch1988]. Here the authentic mediaeval urban hierarchy emerges clearly: Bergen and Roskilde led at 7k in 1300AD; Stockholm climbed from 1k in 1200AD to 7k by 1500AD; Malmö rose from 1k in 1300AD to 5k by 1500AD; and regional cathedral and Sound ports—Aarhus, Copenhagen (Kobenhaven), Flensburg, Helsingør, Odense, Oslo, Ribe and Visby—occupied the 2k–3k tier [@Croix2020Individual; @Benedictow2004].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Town</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Coordinates</th><th class="crd-th">1200AD</th><th class="crd-th">1300AD</th><th class="crd-th">1347AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Malmoe</strong></td><td class="crd-td">Sweden</td><td class="crd-td">55,6°N, 13°E</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,7k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Aarhus</strong></td><td class="crd-td">Denmark</td><td class="crd-td">56,17°N, 10,22°E</td><td class="crd-td">2k</td><td class="crd-td">3k</td><td class="crd-td">2,5k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Kobenhaven</strong></td><td class="crd-td">Denmark</td><td class="crd-td">55,72°N, 12,58°E</td><td class="crd-td">2k</td><td class="crd-td">3k</td><td class="crd-td">2,5k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Odense</strong></td><td class="crd-td">Denmark</td><td class="crd-td">55,4°N, 10,38°E</td><td class="crd-td">2k</td><td class="crd-td">3k</td><td class="crd-td">2,5k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Flensburg</strong></td><td class="crd-td">Germany</td><td class="crd-td">54,78°N, 9,43°E</td><td class="crd-td">1k</td><td class="crd-td">2k</td><td class="crd-td">2k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Helsingor</strong></td><td class="crd-td">Denmark</td><td class="crd-td">56,05°N, 12,63°E</td><td class="crd-td">2k</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Oslo</strong></td><td class="crd-td">Norway</td><td class="crd-td">59,92°N, 10,75°E</td><td class="crd-td">1k</td><td class="crd-td">2k</td><td class="crd-td">1,4k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Schleswig</strong></td><td class="crd-td">Germany</td><td class="crd-td">54,52°N, 9,55°E</td><td class="crd-td">2k</td><td class="crd-td">3k</td><td class="crd-td">2,5k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Aalborg</strong></td><td class="crd-td">Denmark</td><td class="crd-td">57,5°N, 9,85°E</td><td class="crd-td">1k</td><td class="crd-td">2k</td><td class="crd-td">1,4k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Kalmar</strong></td><td class="crd-td">Sweden</td><td class="crd-td">56,67°N, 16,37°E</td><td class="crd-td">1k</td><td class="crd-td">2k</td><td class="crd-td">1,4k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Lund</strong></td><td class="crd-td">Sweden</td><td class="crd-td">55,7°N, 13,18°E</td><td class="crd-td">1k</td><td class="crd-td">2k</td><td class="crd-td">1,4k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Altona</strong></td><td class="crd-td">Denmark</td><td class="crd-td">56,57°N, 9,93°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Falun</strong></td><td class="crd-td">Sweden</td><td class="crd-td">60,6°N, 15,63°E</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Vasteras</strong></td><td class="crd-td">Sweden</td><td class="crd-td">59,62°N, 16,53°E</td><td class="crd-td">2k</td><td class="crd-td">3k</td><td class="crd-td">2,5k</td><td class="crd-td">1k</td></tr>
<tr><td class="crd-td"><strong>Randers</strong></td><td class="crd-td">Denmark</td><td class="crd-td">56,47°N, 10,05°E</td><td class="crd-td">1k</td><td class="crd-td">2k</td><td class="crd-td">1,4k</td><td class="crd-td">1k</td></tr>
<tr><td class="crd-td"><strong>Joenkoeping</strong></td><td class="crd-td">Sweden</td><td class="crd-td">57,78°N, 14,18°E</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1k</td><td class="crd-td">1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Historical urban populations of 16 principal mediaeval Nordic towns from the Buringh European Urban Corpus (1200AD–1500AD).</figcaption>
</figure>

# Chronological Horizon Coverage and Limitations

Table 6 summarises active locality counts, register shares, median tiers and maximum recorded values across the five chapter benchmark years. Coverage stays consistently above 99,3% of the 1.022-site register at every horizon (1.015 active records in 800AD and 1200AD, 1.016 in 1000AD and 1347AD and 1.020 in 1500AD), while the median locality tier holds steadily at 523 to 524 inhabitants as late mediaeval Buringh foundations such as Altona and Gävle enter by 1500AD.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Horizon</th><th class="crd-th">Active Localities</th><th class="crd-th">Share of Register</th><th class="crd-th">Median Tier</th><th class="crd-th">Maximum Tier</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">1.014</td><td class="crd-td">98,64%</td><td class="crd-td">452</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">1.018</td><td class="crd-td">99,03%</td><td class="crd-td">504</td><td class="crd-td">5,5k</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">1.019</td><td class="crd-td">99,12%</td><td class="crd-td">558</td><td class="crd-td">10,9k</td></tr>
<tr><td class="crd-td"><strong>1347AD</strong></td><td class="crd-td">1.019</td><td class="crd-td">99,12%</td><td class="crd-td">612</td><td class="crd-td">25,8k</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">1.020</td><td class="crd-td">99,22%</td><td class="crd-td">708</td><td class="crd-td">27k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Chronological horizon coverage and assigned locality size tiers across 1.022 Nordic and North Atlantic settlements (800AD–1500AD).</figcaption>
</figure>

Four methodological caveats govern interpretation of this gazetteer. First, the concentration of 73,68% of all localities in Finland (480) and Norway (273) reflects granular national municipal statistics rather than higher mediaeval population density; sub-regional totals in the paired literature review are calibrated strictly from mediaeval fiscal, farm-desertion and ecological sources [@Benedictow2004; @Izdebski2022]. Second, as highlighted between Tables 4 and 5, Wave 3 census spatial backfilling assigns scaled municipal weights to pre-foundation centuries (for example, Helsinki before its 1550 royal charter or Stockholm before c. 1252) and maintains duplicate census-versus-Buringh entries for Copenhagen (Kobenhaven) and Aalborg; urban historians analysing genuine mediaeval town sizes should use the Buringh subset in Table 5. Third, Greenland's six localities represent modern coastal towns serving as spatial anchors for Late Dorset, Norse and Thule Inuit fjord districts rather than chartered mediaeval towns [@Dugmore2012]. Fourth, two Icelandic radiocarbon sites (Rangárbotnar and Svinavath) represent rural *Landnám*-era archaeological horizons rather than permanent urban nuclei [@Coroban2017Memory].

# Sources
