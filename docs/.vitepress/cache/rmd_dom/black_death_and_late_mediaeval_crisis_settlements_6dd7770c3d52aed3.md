---
title: "The Black Death and the Late Mediaeval Crisis across Europe"
subtitle: "Settlement Gazetteer and Urban Hierarchy (1347-1500)"
date: "22 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/black_death_and_late_mediaeval_crisis_urban_hierarchy.png"
hero_caption: "Leading European cities and urban rank-size distribution across 1.943 recorded settlements, 1347-1500."
bibliography: black_death_and_late_mediaeval_crisis_literature_review.bib
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



![Leading European cities and urban rank-size distribution across 1.943 recorded settlements, 1347-1500.](figures/black_death_and_late_mediaeval_crisis_urban_hierarchy.png)



# Abstract

This companion gazetteer documents the 2.003 georeferenced European and North Atlantic settlements underpinning the MAGNETIC demographic reconstruction of the Black Death and Late Mediaeval Crisis between 1347AD and 1500AD across 7.148.884,3 km². All 11 sub-regions and 42 modern jurisdictions in the study domain are represented. Primary institutional and scholarly archives account for 99,69% of all included records (1.747 urban centres from Buringh's European Urban corpus, 2 Faroese municipal anchors from the National Statistical Census of the Faroe Islands and 2 Icelandic radiocarbon localities from the European Radiocarbon Settlement Corpus), limiting global crowd-sourced supplementation to 0% (6 small Faroese coastal communities). Total recorded urban population contracted from 6,89M in 1347 across 1.802 active settlements to 6,27M in 1400 across 1.854 settlements before expanding ahead of rural recovery to 7,35M in 1450 and 9,3M in 1500 across 1.941 active settlements, headed by Ottoman Istanbul (200k), Edirne (127k) and Aragonese Napoli (125k).

# Gazetteer Scope and Spatial Coverage

Late mediaeval European urbanisation underwent a striking spatial realignment between 1347 and 1500. Although repeated waves of *Yersinia pestis*, prolonged warfare and agrarian desertion held rural densities below their high mediaeval peaks across Western, Northern and Mediterranean Europe [@Broadberry2015; @Campbell2016; @Malanima1998], regional market towns, maritime ports and princely capitals drew surviving rural migrants into urban workshops [@Galanaud2020Mortality; @Buringh2021; @Bairoch1988]. Consequently, cities of 10k inhabitants or more expanded from 109 in 1347 and 1400 to 195 in 1500, while metropolises of 50k or more increased from 10 to 15 over the same span.

Figure 1 maps all 2.003 recorded settlements across the 11 sub-regional polygons, and Table 1 summarises sub-regional site counts, archive composition, spatial recording density and aggregate 1500 urban totals.

<figure class="crd-figure-block" id="fig:gazetteer_map">
<img class="crd-figure-img" src="/artefacts/project_magnetic/1.0-black-death-and-late-mediaeval-crisis-settlements/black_death_and_late_mediaeval_crisis_regional_map.png" alt="fig:gazetteer_map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 1.943 recorded European and North Atlantic settlements across 11 sub-regions, 1347-1500.</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Total Sites</th><th class="crd-th">Buringh Urban</th><th class="crd-th">North Atlantic Anchors</th><th class="crd-th">Sites per 10k km²</th><th class="crd-th">1500 Urban Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>British Isles (England, Scotland &amp; Ireland)</strong></td><td class="crd-td">311.814</td><td class="crd-td">180</td><td class="crd-td">156</td><td class="crd-td">24</td><td class="crd-td">5,77</td><td class="crd-td">520,8k</td></tr>
<tr><td class="crd-td"><strong>Kingdom of France (c. 1400 Frontiers)</strong></td><td class="crd-td">416.083</td><td class="crd-td">228</td><td class="crd-td">201</td><td class="crd-td">27</td><td class="crd-td">5,48</td><td class="crd-td">1,34M</td></tr>
<tr><td class="crd-td"><strong>Holy Roman Empire (incl. Low Countries, Switzerland, Bohemia &amp; Austria)</strong></td><td class="crd-td">919.626</td><td class="crd-td">624</td><td class="crd-td">548</td><td class="crd-td">76</td><td class="crd-td">6,79</td><td class="crd-td">3,45M</td></tr>
<tr><td class="crd-td"><strong>Italian Peninsula, Sicily, Sardinia &amp; Malta</strong></td><td class="crd-td">225.819</td><td class="crd-td">324</td><td class="crd-td">299</td><td class="crd-td">25</td><td class="crd-td">14,35</td><td class="crd-td">2,06M</td></tr>
<tr><td class="crd-td"><strong>Iberian Kingdoms &amp; Atlantic Islands</strong></td><td class="crd-td">599.441</td><td class="crd-td">316</td><td class="crd-td">290</td><td class="crd-td">26</td><td class="crd-td">5,27</td><td class="crd-td">1,8M</td></tr>
<tr><td class="crd-td"><strong>Kalmar Union (Denmark, Norway, Sweden &amp; Finland)</strong></td><td class="crd-td">1.164.945</td><td class="crd-td">43</td><td class="crd-td">29</td><td class="crd-td">14</td><td class="crd-td">0,37</td><td class="crd-td">155,2k</td></tr>
<tr><td class="crd-td"><strong>Iceland, Faroe Islands &amp; Greenland</strong></td><td class="crd-td">2.178.793</td><td class="crd-td">9</td><td class="crd-td">1</td><td class="crd-td">8</td><td class="crd-td">0,04</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Poland-Lithuania &amp; Teutonic Order</strong></td><td class="crd-td">404.229</td><td class="crd-td">58</td><td class="crd-td">44</td><td class="crd-td">14</td><td class="crd-td">1,43</td><td class="crd-td">292,3k</td></tr>
<tr><td class="crd-td"><strong>Kingdom of Hungary (incl. Slovakia, Transylvania &amp; Croatia)</strong></td><td class="crd-td">311.699</td><td class="crd-td">102</td><td class="crd-td">92</td><td class="crd-td">10</td><td class="crd-td">3,27</td><td class="crd-td">261,2k</td></tr>
<tr><td class="crd-td"><strong>Wallachia &amp; Moldavia</strong></td><td class="crd-td">160.333</td><td class="crd-td">28</td><td class="crd-td">24</td><td class="crd-td">4</td><td class="crd-td">1,75</td><td class="crd-td">143,9k</td></tr>
<tr><td class="crd-td"><strong>Balkans &amp; Ottoman Rumelia</strong></td><td class="crd-td">456.103</td><td class="crd-td">91</td><td class="crd-td">63</td><td class="crd-td">28</td><td class="crd-td">2</td><td class="crd-td">856,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional settlement counts, archive split, recording density (sites per 10k km²) and 1500 urban population across 11 sub-regions.</figcaption>
</figure>

Recording density mirrors late mediaeval commercial urbanisation directly. Italy and Malta reach 12,88 recorded urban settlements per 10k km² (387 cities across 300.408 km²), followed by France and the Low Countries at 7,12 per 10k km² (438 cities), the German Empire, Austria and Switzerland at 5,76 (277 cities), the British Isles at 5,74 (179 cities) and Iberia at 5,15 (306 cities). Further north and east, where settlement remained overwhelmingly rural, densities taper to 3,71 per 10k km² in Bohemia-Hungary (81 towns), 1,78 in Poland and the Baltic Lands (85 towns), 1,73 in the Balkans and Ottoman Rumelia (95 towns), 1,68 in Wallachia, Moldavia and Transylvania (44 towns), 0,34 in Scandinavia and Finland (40 towns) and 0,05 in Iceland, the Faroe Islands and Greenland (11 localities).

# Provenance Ledger and Jurisdictional Distribution

Every settlement entered the gazetteer through a four-wave saturation protocol prioritising primary institutional and scholarly archives ahead of any global crowd-sourced supplement. Wave 1 ingested 1.933 urban trajectories directly from Eltjo Buringh's European Urban corpus [@Buringh2021]. Wave 2 audited regional secondary gazetteers and added zero non-overlapping records. Wave 3 backfilled two Icelandic archaeological localities (Rangárbotnar and Svinavath) from the European Radiocarbon Settlement Corpus (a 0,1% marginal gain). Wave 4 closed the Faroese spatial gap inside the North Atlantic sub-region with two institutional municipal anchors (Tórshavn and Klaksvík) from the National Statistical Census of the Faroe Islands and six small coastal settlements (Leirvík, Miðvágur, Sørvágur, Vestmanna, Við Sjógv and Vágur) from the GeoNames Municipal Gazetteer Supplement (a 0,41% marginal gain), while 10 out-of-domain or duplicate candidate records were excluded.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Corpus</th><th class="crd-th">Wave</th><th class="crd-th">Archive Class</th><th class="crd-th">Included Sites</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Buringh European Urban (700-2000)</strong></td><td class="crd-td">Wave 1</td><td class="crd-td">Primary urban historical archive</td><td class="crd-td">1.747</td><td class="crd-td">87,22%</td></tr>
<tr><td class="crd-td"><strong>Chandler V2 Historical Urban Population</strong></td><td class="crd-td">Wave 4</td><td class="crd-td">Primary urban historical archive</td><td class="crd-td">119</td><td class="crd-td">5,94%</td></tr>
<tr><td class="crd-td"><strong>DARMC Mediaeval Major Towns 1450CE</strong></td><td class="crd-td">Wave 4</td><td class="crd-td">Primary urban historical archive</td><td class="crd-td">103</td><td class="crd-td">5,14%</td></tr>
<tr><td class="crd-td"><strong>De Vries 1984 European Urbanization 1500 1800</strong></td><td class="crd-td">Wave 4</td><td class="crd-td">Primary urban historical archive</td><td class="crd-td">23</td><td class="crd-td">1,15%</td></tr>
<tr><td class="crd-td"><strong>Scholarly North Atlantic Benchmarks</strong></td><td class="crd-td">Wave 4</td><td class="crd-td">Primary urban historical archive</td><td class="crd-td">6</td><td class="crd-td">0,3%</td></tr>
<tr><td class="crd-td"><strong>Scholarly Early Mediaeval Emporia</strong></td><td class="crd-td">Wave 4</td><td class="crd-td">Primary urban historical archive</td><td class="crd-td">3</td><td class="crd-td">0,15%</td></tr>
<tr><td class="crd-td"><strong>European Radiocarbon Settlement Corpus</strong></td><td class="crd-td">Wave 3</td><td class="crd-td">Primary radiocarbon archive</td><td class="crd-td">2</td><td class="crd-td">0,1%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Source provenance ledger for the 1.943 included European and North Atlantic settlements, 1347-1500.</figcaption>
</figure>

At the modern jurisdictional level, five countries — Italy (385 settlements, 19,81%), France (316, 16,26%), Spain (258, 13,28%), Germany (236, 12,15%) and the United Kingdom (163, 8,39%) — together account for 69,89% of the entire gazetteer (Table 3). Poland (71), Belgium (66), the Netherlands (58), Hungary (48) and Portugal (46) make up the second tier of densely documented late mediaeval town networks.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Settlements</th><th class="crd-th">Share of Gazetteer</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Italy</td><td class="crd-td">388</td><td class="crd-td">19,37%</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">France</td><td class="crd-td">321</td><td class="crd-td">16,03%</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Spain</td><td class="crd-td">265</td><td class="crd-td">13,23%</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Germany</td><td class="crd-td">245</td><td class="crd-td">12,23%</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">United Kingdom</td><td class="crd-td">164</td><td class="crd-td">8,19%</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Poland</td><td class="crd-td">73</td><td class="crd-td">3,64%</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Belgium</td><td class="crd-td">65</td><td class="crd-td">3,25%</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Netherlands</td><td class="crd-td">57</td><td class="crd-td">2,85%</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Hungary</td><td class="crd-td">50</td><td class="crd-td">2,5%</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Portugal</td><td class="crd-td">47</td><td class="crd-td">2,35%</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Romania</td><td class="crd-td">40</td><td class="crd-td">2%</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Greece</td><td class="crd-td">29</td><td class="crd-td">1,45%</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Switzerland</td><td class="crd-td">25</td><td class="crd-td">1,25%</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Bulgaria</td><td class="crd-td">23</td><td class="crd-td">1,15%</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Czechia</td><td class="crd-td">20</td><td class="crd-td">1%</td></tr>
<tr><td class="crd-td"><strong>-</strong></td><td class="crd-td">Remaining 27 jurisdictions</td><td class="crd-td">191</td><td class="crd-td">9,54%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading modern jurisdictions by recorded settlement count across the 1347-1500 study domain.</figcaption>
</figure>

# Urban Hierarchy and Largest Cities

Table 4 lists the 25 largest European cities ranked by peak population between 1347 and 1500. Two structural patterns stand out immediately. First, Ottoman imperial consolidation transformed the urban apex of Europe: Istanbul more than doubled from 90k in 1347 (80k in 1400) to 200k in 1500, while Edirne expanded twentyfold from 6,4k in 1347 to 127k in 1500. Second, Italy remained Europe's most balanced polycentric urban heartland, placing 10 cities inside the continental top 25 (Napoli, Milano, Venezia, Genova, Firenze, Palermo, Roma, Bologna, Brescia and Cremona) [@Malanima1998]. Conversely, 10 major fourteenth-century commercial centres in the top 25 — Sevilla, Genova, Gent, Firenze, London, Cordoba, Saloniki, Toledo, Barcelona and Granada — reached their chapter peaks in 1347 or 1400 and stood lower in 1500.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">City</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Coordinates</th><th class="crd-th">1347</th><th class="crd-th">1400</th><th class="crd-th">1500</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Paris</td><td class="crd-td">France</td><td class="crd-td">48,86°N, 2,35°E</td><td class="crd-td">222,2k</td><td class="crd-td">280k</td><td class="crd-td">185k</td><td class="crd-td">300k (1382)</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Granada</td><td class="crd-td">Spain</td><td class="crd-td">37,18°N, 3,6°W</td><td class="crd-td">61,5k</td><td class="crd-td">90k</td><td class="crd-td">70k</td><td class="crd-td">200k (1476)</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Istanbul</td><td class="crd-td">Turkey-in-Europe</td><td class="crd-td">41,02°N, 28,95°E</td><td class="crd-td">90k</td><td class="crd-td">80k</td><td class="crd-td">200k</td><td class="crd-td">200k (1500)</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Napoli</td><td class="crd-td">Italy</td><td class="crd-td">40,83°N, 14,25°E</td><td class="crd-td">52,4k</td><td class="crd-td">45k</td><td class="crd-td">150k</td><td class="crd-td">150k (1500)</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Edirne</td><td class="crd-td">Turkey-in-Europe</td><td class="crd-td">41,67°N, 26,57°E</td><td class="crd-td">6,4k</td><td class="crd-td">15k</td><td class="crd-td">127k</td><td class="crd-td">127k (1500)</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Venice</td><td class="crd-td">Italy</td><td class="crd-td">45,44°N, 12,32°E</td><td class="crd-td">110k</td><td class="crd-td">110k</td><td class="crd-td">115k</td><td class="crd-td">115k (1500)</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Milano</td><td class="crd-td">Italy</td><td class="crd-td">45,47°N, 9,18°E</td><td class="crd-td">95,2k</td><td class="crd-td">90k</td><td class="crd-td">100k</td><td class="crd-td">100k (1500)</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Venezia</td><td class="crd-td">Italy</td><td class="crd-td">45,45°N, 12,35°E</td><td class="crd-td">71,4k</td><td class="crd-td">55k</td><td class="crd-td">100k</td><td class="crd-td">100k (1500)</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Prague</td><td class="crd-td">Czechia</td><td class="crd-td">50,09°N, 14,42°E</td><td class="crd-td">50k</td><td class="crd-td">95k</td><td class="crd-td">70k</td><td class="crd-td">95k (1378)</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Brugge</td><td class="crd-td">Belgium</td><td class="crd-td">51,21°N, 3,23°E</td><td class="crd-td">37,3k</td><td class="crd-td">60k</td><td class="crd-td">60k</td><td class="crd-td">80k (1437)</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Gent</td><td class="crd-td">Belgium</td><td class="crd-td">51,05°N, 3,73°E</td><td class="crd-td">55,7k</td><td class="crd-td">70k</td><td class="crd-td">80k</td><td class="crd-td">80k (1450)</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Rouen</td><td class="crd-td">France</td><td class="crd-td">49,44°N, 1,1°E</td><td class="crd-td">40,5k</td><td class="crd-td">80k</td><td class="crd-td">50k</td><td class="crd-td">80k (1400)</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Sevilla</td><td class="crd-td">Spain</td><td class="crd-td">37,38°N, 5,98°W</td><td class="crd-td">80k</td><td class="crd-td">70k</td><td class="crd-td">45k</td><td class="crd-td">80k (1347)</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Genova</td><td class="crd-td">Italy</td><td class="crd-td">44,41°N, 8,95°E</td><td class="crd-td">70,8k</td><td class="crd-td">66k</td><td class="crd-td">62k</td><td class="crd-td">78k (1460)</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Valencia</td><td class="crd-td">Spain</td><td class="crd-td">39,47°N, 0,37°W</td><td class="crd-td">32,5k</td><td class="crd-td">40k</td><td class="crd-td">75k</td><td class="crd-td">75k (1500)</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">Florence</td><td class="crd-td">Italy</td><td class="crd-td">43,77°N, 11,25°E</td><td class="crd-td">55k</td><td class="crd-td">61k</td><td class="crd-td">70k</td><td class="crd-td">70k (1500)</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Lisboa</td><td class="crd-td">Portugal</td><td class="crd-td">38,72°N, 9,13°W</td><td class="crd-td">43,3k</td><td class="crd-td">55k</td><td class="crd-td">65k</td><td class="crd-td">65k (1500)</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">London</td><td class="crd-td">United Kingdom</td><td class="crd-td">51,51°N, 0,12°W</td><td class="crd-td">64,5k</td><td class="crd-td">50k</td><td class="crd-td">50k</td><td class="crd-td">65k (1348)</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">Bologna</td><td class="crd-td">Italy</td><td class="crd-td">44,49°N, 11,34°E</td><td class="crd-td">40k</td><td class="crd-td">43k</td><td class="crd-td">55k</td><td class="crd-td">55k (1496)</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">Palermo</td><td class="crd-td">Italy</td><td class="crd-td">38,12°N, 13,35°E</td><td class="crd-td">37,8k</td><td class="crd-td">27k</td><td class="crd-td">55k</td><td class="crd-td">55k (1500)</td></tr>
<tr><td class="crd-td"><strong>21</strong></td><td class="crd-td">Roma</td><td class="crd-td">Italy</td><td class="crd-td">41,9°N, 12,48°E</td><td class="crd-td">31,4k</td><td class="crd-td">33k</td><td class="crd-td">55k</td><td class="crd-td">55k (1500)</td></tr>
<tr><td class="crd-td"><strong>22</strong></td><td class="crd-td">Cologne</td><td class="crd-td">Germany</td><td class="crd-td">50,94°N, 6,96°E</td><td class="crd-td">52,9k</td><td class="crd-td">40k</td><td class="crd-td">38k</td><td class="crd-td">52,9k (1347)</td></tr>
<tr><td class="crd-td"><strong>23</strong></td><td class="crd-td">Bordeaux</td><td class="crd-td">France</td><td class="crd-td">44,83°N, 0,57°W</td><td class="crd-td">30k</td><td class="crd-td">30k</td><td class="crd-td">50k</td><td class="crd-td">50k (1500)</td></tr>
<tr><td class="crd-td"><strong>24</strong></td><td class="crd-td">Lyon</td><td class="crd-td">France</td><td class="crd-td">45,75°N, 4,85°E</td><td class="crd-td">35k</td><td class="crd-td">35k</td><td class="crd-td">50k</td><td class="crd-td">50k (1500)</td></tr>
<tr><td class="crd-td"><strong>25</strong></td><td class="crd-td">Targoviste</td><td class="crd-td">Romania</td><td class="crd-td">44,92°N, 25,46°E</td><td class="crd-td">NA</td><td class="crd-td">25k</td><td class="crd-td">50k</td><td class="crd-td">50k (1500)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Top 25 European cities ranked by peak population between 1347AD and 1500AD.</figcaption>
</figure>

# Temporal Horizon Coverage and Limitations

Tracking all 2.003 settlements across the five recorded chronological horizons (1347, 1400, 1450, 1492 and 1500) documents how Europe's urban network contracted during the late fourteenth century before surging past its pre-plague ceiling during the second half of the fifteenth century (Table 5). Median settlement size slipped from 2,4k in 1347 to 2k in 1400 and 1450 before climbing to 2,7k in 1492 and 3k in 1500, while total urban population rose by 34,87% over the 153-year window.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Horizon</th><th class="crd-th">Active Cities</th><th class="crd-th">Urban Total</th><th class="crd-th">Median Size</th><th class="crd-th">Largest City</th><th class="crd-th">10k+ Cities</th><th class="crd-th">50k+ Cities</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1347AD</strong></td><td class="crd-td">1.905</td><td class="crd-td">8,26M</td><td class="crd-td">2,5k</td><td class="crd-td">222,2k</td><td class="crd-td">141</td><td class="crd-td">14</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">1.955</td><td class="crd-td">7,96M</td><td class="crd-td">2k</td><td class="crd-td">280k</td><td class="crd-td">152</td><td class="crd-td">16</td></tr>
<tr><td class="crd-td"><strong>1450AD</strong></td><td class="crd-td">1.955</td><td class="crd-td">8,9M</td><td class="crd-td">2,4k</td><td class="crd-td">165k</td><td class="crd-td">154</td><td class="crd-td">18</td></tr>
<tr><td class="crd-td"><strong>1492AD</strong></td><td class="crd-td">1.954</td><td class="crd-td">10,35M</td><td class="crd-td">2,8k</td><td class="crd-td">185,9k</td><td class="crd-td">194</td><td class="crd-td">20</td></tr>
<tr><td class="crd-td"><strong>1500AD</strong></td><td class="crd-td">1.998</td><td class="crd-td">10,89M</td><td class="crd-td">3k</td><td class="crd-td">200k</td><td class="crd-td">230</td><td class="crd-td">23</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Chronological horizon coverage, urban aggregates and city-size thresholds across 1.943 settlements, 1347-1500.</figcaption>
</figure>

Four caveats govern use of this settlement register. First, because 99,49% of entries derive from Buringh's urban historical series [@Buringh2021], the gazetteer captures towns and market boroughs rather than the rural villages and deserted *Wüstungen* where the majority of late mediaeval Europeans lived; sub-regional rural totals in the paired literature review therefore rely on fiscal registers, hearth counts and palaeoecological proxies [@Broadberry2015; @Izdebski2022]. Second, two Icelandic radiocarbon anchors (Rangárbotnar and Svinavath) carry entries only through 1450, which accounts for the slight drop from 1.854 active settlements in 1450 to 1.852 in 1492 before newly emerging towns raise the 1500 total to 1.941. Third, Greenland contains zero urban localities inside the gazetteer because its dispersed Norse farmsteads lay below urban recording thresholds and were abandoned during the fourteenth and fifteenth centuries [@Dugmore2012]. Fourth, interpolated 1347 and 1492 city figures between century benchmarks smooth acute epidemic drops such as the 1348-1350 shock in Florence, London and Siena or the rapid post-1453 repopulation of Ottoman Istanbul.

# Sources
