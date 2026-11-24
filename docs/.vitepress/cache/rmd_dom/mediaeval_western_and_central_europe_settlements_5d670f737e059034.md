---
title: "Mediaeval Western and Central Europe"
subtitle: "Settlement Gazetteer and Urban Hierarchy (800-1347)"
date: "22 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/mediaeval_western_and_central_europe_urban_hierarchy.png"
hero_caption: "Largest recorded cities and rank-size distribution across 2.830 mediaeval localities in Western and Central Europe, 800-1347."
bibliography: mediaeval_western_and_central_europe_literature_review.bib
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



![Largest recorded cities and rank-size distribution across 2.830 mediaeval localities in Western and Central Europe, 800-1347.](figures/mediaeval_western_and_central_europe_urban_hierarchy.png)



# Abstract

This companion gazetteer documents the 2.435 georeferenced settlements supporting the MAGNETIC demographic reconstruction of Western and Central Europe between 800AD and 1347AD across 1.793.128,1 km². Every one of the nine sub-regions and 20 modern jurisdictions intersecting the domain is represented. Institutional urban and ancient-world archives account for 100% of included records (1.184 towns with longitudinal centennial headcounts from the Buringh European Urban Corpus and 931 persistent classical and post-Roman places from the Pleiades Ancient World Gazetteer), keeping crowd-sourced municipal supplementation at 0%. Across the high Middle Ages the urban hierarchy evolved from 24 small towns of 5k or more inhabitants in 800AD into a polycentric network of 290 towns and 23 metropolises above 30k by 1300AD. Peak city sizes follow a well-defined power-law rank-size curve ($\alpha = 0,64$, $R^2 = 0,98$) led by Milan (100k), Venice (90k), Genoa (85k), Paris (75k), London (70k), Florence (65k) and Ghent (64k).

# Gazetteer Scope and Spatial Coverage

Mediaeval European settlement geography reflects the convergence of two historical layers: the enduring civic skeleton of Roman *civitates*, river crossings and Mediterranean ports inherited from late antiquity, and a dense high-mediaeval overlay of chartered woollen towns, *bastides*, Hanseatic sea ports, Alpine pass hubs and reclaimed lowland markets [@Bairoch1988; @Malanima1998; @Buringh2021]. Combining both layers across 800AD to 1347AD captures both metropolitan agglomeration in Lombardy, Tuscany, Flanders and the Île-de-France and persistent rural-to-urban continuity across secondary market centres.

Figure 1 displays the spatial footprint of all 2.435 recorded localities across the nine sub-regional polygons, while Table 1 reports sub-regional land area, total site counts, corpus composition, 1300AD urban population in towns of 5k or more and spatial recording density per 10k km².

<figure class="crd-figure-block" id="fig:gazetteer_map">
<img class="crd-figure-img" src="/artefacts/project_magnetic/1.0-mediaeval-western-and-central-europe-settlements/mediaeval_western_and_central_europe_regional_map.png" alt="fig:gazetteer_map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 2.830 recorded mediaeval settlements across nine sub-regions of Western and Central Europe, 800-1347.</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Total Sites</th><th class="crd-th">Buringh</th><th class="crd-th">Pleiades</th><th class="crd-th">1300 Pop. &gt;= 5k</th><th class="crd-th">Sites per 10k km²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kingdom of France (North, West of Meuse-Saône)</strong></td><td class="crd-td">245.187,8</td><td class="crd-td">205</td><td class="crd-td">106</td><td class="crd-td">60</td><td class="crd-td">650,3k</td><td class="crd-td">8,36</td></tr>
<tr><td class="crd-td"><strong>Aquitaine, Gascony &amp; Languedoc (West of Rhône)</strong></td><td class="crd-td">186.099</td><td class="crd-td">174</td><td class="crd-td">94</td><td class="crd-td">54</td><td class="crd-td">362,6k</td><td class="crd-td">9,35</td></tr>
<tr><td class="crd-td"><strong>Kingdom of England &amp; Wales</strong></td><td class="crd-td">152.068,2</td><td class="crd-td">200</td><td class="crd-td">131</td><td class="crd-td">35</td><td class="crd-td">194k</td><td class="crd-td">13,15</td></tr>
<tr><td class="crd-td"><strong>Kingdom of Scotland &amp; Ireland</strong></td><td class="crd-td">159.745,6</td><td class="crd-td">53</td><td class="crd-td">29</td><td class="crd-td">3</td><td class="crd-td">47k</td><td class="crd-td">3,32</td></tr>
<tr><td class="crd-td"><strong>Low Countries (Flanders, Brabant &amp; Holland)</strong></td><td class="crd-td">83.030,6</td><td class="crd-td">198</td><td class="crd-td">137</td><td class="crd-td">38</td><td class="crd-td">495k</td><td class="crd-td">23,85</td></tr>
<tr><td class="crd-td"><strong>Northern &amp; Rhenish HRE (incl. Brandenburg-Pomerania)</strong></td><td class="crd-td">345.751,2</td><td class="crd-td">311</td><td class="crd-td">210</td><td class="crd-td">38</td><td class="crd-td">613,6k</td><td class="crd-td">8,99</td></tr>
<tr><td class="crd-td"><strong>Southern HRE, Alpine Lands &amp; Kingdom of Arles</strong></td><td class="crd-td">341.326,2</td><td class="crd-td">277</td><td class="crd-td">130</td><td class="crd-td">91</td><td class="crd-td">293k</td><td class="crd-td">8,12</td></tr>
<tr><td class="crd-td"><strong>Regnum Italiae &amp; Northern Communes</strong></td><td class="crd-td">104.963</td><td class="crd-td">157</td><td class="crd-td">79</td><td class="crd-td">55</td><td class="crd-td">935,3k</td><td class="crd-td">14,96</td></tr>
<tr><td class="crd-td"><strong>Tuscany, Papal States &amp; Kingdom of Sicily/Naples</strong></td><td class="crd-td">174.956,5</td><td class="crd-td">860</td><td class="crd-td">268</td><td class="crd-td">557</td><td class="crd-td">698,8k</td><td class="crd-td">49,16</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional locality counts, provenance composition, 1300AD urban population (&gt;= 5k) and recording density across nine sub-regions.</figcaption>
</figure>

Spatial recording density varies more than fifteenfold across the nine sub-regions, from 59,04 recorded localities per 10k km² in Central and Southern Italy and 24,88 in the Low Countries down to 3,37 per 10k km² in Scotland and Ireland. That contrast mirrors both genuine differences in classical urban inheritance—Central and Southern Italy alone contributes 762 Pleiades ancient-world localities—and lower urbanisation across the Atlantic Celtic fringe, where only 30 Buringh towns appear across the entire 160.282,5 km² span of Scotland and Ireland.

# Provenance Ledger and Jurisdictional Distribution

Every settlement entered this gazetteer through a four-wave saturation audit designed to exhaust scholarly historical-urban and ancient-world archives before allowing any crowd-sourced backfill. Wave 1 ingested all 1.184 in-bounds localities from the Buringh European Urban Corpus covering 700-2000 [@Buringh2021], capturing every major bishopric, royal capital, cloth centre, maritime republic and chartered borough across the domain. Wave 2 added 931 non-duplicate persistent localities from the Pleiades Ancient World Gazetteer (a 125,5% marginal gain), supplying continuous spatial anchors for minor Roman-origin *vici*, diocesan towns and Mediterranean ports. Waves 3 and 4 audited longitudinal municipal directories and regional spatial coverage, adding zero further entries while excluding 589 duplicate or out-of-domain candidates. Table 2 summarises the provenance ledger and Table 3 distributes all 2.435 localities across modern jurisdictions.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Corpus</th><th class="crd-th">Wave</th><th class="crd-th">Source Tier</th><th class="crd-th">Localities</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Buringh European Urban Corpus (700-2000)</strong></td><td class="crd-td">Wave 1</td><td class="crd-td">Institutional historical-urban corpus</td><td class="crd-td">1.184</td><td class="crd-td">48,62%</td></tr>
<tr><td class="crd-td"><strong>Pleiades Ancient World Gazetteer</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">Scholarly ancient-world gazetteer</td><td class="crd-td">931</td><td class="crd-td">38,23%</td></tr>
<tr><td class="crd-td"><strong>DARMC Mediaeval Major Towns 1000CE</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">Scholarly ancient-world gazetteer</td><td class="crd-td">88</td><td class="crd-td">3,61%</td></tr>
<tr><td class="crd-td"><strong>DARMC Mediaeval Major Towns 814CE</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">Scholarly ancient-world gazetteer</td><td class="crd-td">87</td><td class="crd-td">3,57%</td></tr>
<tr><td class="crd-td"><strong>Chandler V2 Historical Urban Population</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">Scholarly ancient-world gazetteer</td><td class="crd-td">72</td><td class="crd-td">2,96%</td></tr>
<tr><td class="crd-td"><strong>DARMC Mediaeval Major Towns 1200CE</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">Scholarly ancient-world gazetteer</td><td class="crd-td">69</td><td class="crd-td">2,83%</td></tr>
<tr><td class="crd-td"><strong>Scholarly Early Mediaeval Emporia</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">Scholarly ancient-world gazetteer</td><td class="crd-td">3</td><td class="crd-td">0,12%</td></tr>
<tr><td class="crd-td"><strong>Scholarly Iron Age Oppida Corpus</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">Scholarly ancient-world gazetteer</td><td class="crd-td">1</td><td class="crd-td">0,04%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Source provenance ledger and ingestion-wave audit for 2.830 mediaeval localities (589 candidates excluded; 0% crowd-sourced).</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Total Sites</th><th class="crd-th">Buringh</th><th class="crd-th">Pleiades</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Italy</strong></td><td class="crd-td">1.027</td><td class="crd-td">351</td><td class="crd-td">613</td><td class="crd-td">42,18%</td></tr>
<tr><td class="crd-td"><strong>France</strong></td><td class="crd-td">531</td><td class="crd-td">279</td><td class="crd-td">175</td><td class="crd-td">21,81%</td></tr>
<tr><td class="crd-td"><strong>Germany</strong></td><td class="crd-td">325</td><td class="crd-td">210</td><td class="crd-td">36</td><td class="crd-td">13,35%</td></tr>
<tr><td class="crd-td"><strong>United Kingdom</strong></td><td class="crd-td">230</td><td class="crd-td">145</td><td class="crd-td">37</td><td class="crd-td">9,45%</td></tr>
<tr><td class="crd-td"><strong>Belgium</strong></td><td class="crd-td">93</td><td class="crd-td">62</td><td class="crd-td">24</td><td class="crd-td">3,82%</td></tr>
<tr><td class="crd-td"><strong>Netherlands</strong></td><td class="crd-td">66</td><td class="crd-td">53</td><td class="crd-td">5</td><td class="crd-td">2,71%</td></tr>
<tr><td class="crd-td"><strong>Switzerland</strong></td><td class="crd-td">39</td><td class="crd-td">22</td><td class="crd-td">10</td><td class="crd-td">1,6%</td></tr>
<tr><td class="crd-td"><strong>Austria</strong></td><td class="crd-td">37</td><td class="crd-td">14</td><td class="crd-td">11</td><td class="crd-td">1,52%</td></tr>
<tr><td class="crd-td"><strong>Ireland</strong></td><td class="crd-td">23</td><td class="crd-td">15</td><td class="crd-td">1</td><td class="crd-td">0,94%</td></tr>
<tr><td class="crd-td"><strong>11 border and micro-jurisdictions (Poland, Spain, Luxembourg, Croatia, Czechia, Slovenia, Slovakia, Hungary, Malta, San Marino, Andorra)</strong></td><td class="crd-td">64</td><td class="crd-td">33</td><td class="crd-td">19</td><td class="crd-td">2,63%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Distribution of 2.830 recorded mediaeval localities across modern national jurisdictions.</figcaption>
</figure>

Nine core modern states—Italy (1.246 localities), France (600), the United Kingdom (358), Germany (318), Belgium (95), the Netherlands (68), Switzerland (45), Austria (40) and Ireland (20)—contribute 2.790 sites, or 98,59% of the register. The remaining 40 localities sit inside small enclave states (Luxembourg, Malta, Andorra, San Marino and Vatican City) or along mediaeval imperial and Pyrenean border strips now lying in Spain, Slovenia, Poland, Hungary, Czechia and Slovakia.

# Largest Mediaeval Cities and Rank-Size Hierarchy

Between 800AD and 1300AD Western and Central Europe shifted from a sparse constellation of post-Roman episcopal towns into an integrated urban hierarchy governed by commercial specialisation, textile manufacturing, banking and long-distance maritime trade [@Bairoch1988; @Malanima1998; @Preiserkapeller2015Calculating]. Across the upper distribution, intramural populations scaled cleanly with enclosed urban footprint [@Cesaretti2016Population], generating a Zipf rank-size slope of $\alpha = 0,64$ ($R^2 = 0,98$)—noticeably flatter than single-primate modern nation-states because political fragmentation across communal Italy, the Holy Roman Empire, Flanders and Capetian-Plantagenet France sustained multiple co-equal regional metropolises.

Table 4 lists the 30 largest recorded settlements in the chapter ordered by peak population between 800AD and 1347AD, drawn directly from the chapter summary record. Eighteen of the top 30 cities lie in Italy, seven in France, three in the Low Countries (Ghent, Bruges and Tournai), one in England (London) and one in Germany (Cologne), illustrating Italy's commanding lead in pre-plague metropolitan concentration even as northern Europe outpaced the peninsula in total rural headcount [@Malanima1998; @Buringh2021].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Locality</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">800AD</th><th class="crd-th">1300AD</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Paris</td><td class="crd-td">France</td><td class="crd-td">Kingdom of France (North, West of Meuse-Saône)</td><td class="crd-td">48,86N, 2,35E</td><td class="crd-td">25k</td><td class="crd-td">228k</td><td class="crd-td">274k (1328)</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Palermo</td><td class="crd-td">Italy</td><td class="crd-td">Tuscany, Papal States &amp; Kingdom of Sicily/Naples</td><td class="crd-td">38,12N, 13,36E</td><td class="crd-td">5k</td><td class="crd-td">35k</td><td class="crd-td">150k (1200)</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Venice</td><td class="crd-td">Italy</td><td class="crd-td">Regnum Italiae &amp; Northern Communes</td><td class="crd-td">45,44N, 12,32E</td><td class="crd-td">2,3k</td><td class="crd-td">110k</td><td class="crd-td">110k (1300)</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Milano</td><td class="crd-td">Italy</td><td class="crd-td">Regnum Italiae &amp; Northern Communes</td><td class="crd-td">45,47N, 9,18E</td><td class="crd-td">21k</td><td class="crd-td">100k</td><td class="crd-td">100k (1300)</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Venezia</td><td class="crd-td">Italy</td><td class="crd-td">Regnum Italiae &amp; Northern Communes</td><td class="crd-td">45,45N, 12,35E</td><td class="crd-td">5k</td><td class="crd-td">90k</td><td class="crd-td">90k (1300)</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Genova</td><td class="crd-td">Italy</td><td class="crd-td">Regnum Italiae &amp; Northern Communes</td><td class="crd-td">44,42N, 8,95E</td><td class="crd-td">7k</td><td class="crd-td">85k</td><td class="crd-td">85k (1300)</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">London</td><td class="crd-td">United Kingdom</td><td class="crd-td">Kingdom of England &amp; Wales</td><td class="crd-td">51,5N, 0,17W</td><td class="crd-td">6k</td><td class="crd-td">70k</td><td class="crd-td">70k (1300)</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Firenze</td><td class="crd-td">Italy</td><td class="crd-td">Tuscany, Papal States &amp; Kingdom of Sicily/Naples</td><td class="crd-td">43,77N, 11,25E</td><td class="crd-td">3k</td><td class="crd-td">65k</td><td class="crd-td">65k (1300)</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Gent</td><td class="crd-td">Belgium</td><td class="crd-td">Low Countries (Flanders, Brabant &amp; Holland)</td><td class="crd-td">51,05N, 3,72E</td><td class="crd-td">2k</td><td class="crd-td">64k</td><td class="crd-td">64k (1300)</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Napoli</td><td class="crd-td">Italy</td><td class="crd-td">Tuscany, Papal States &amp; Kingdom of Sicily/Naples</td><td class="crd-td">40,85N, 14,28E</td><td class="crd-td">8k</td><td class="crd-td">60k</td><td class="crd-td">60k (1300)</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Cologne</td><td class="crd-td">Germany</td><td class="crd-td">Northern &amp; Rhenish HRE (incl. Brandenburg-Pomerania)</td><td class="crd-td">50,94N, 6,96E</td><td class="crd-td">15k</td><td class="crd-td">54k</td><td class="crd-td">57k (1333)</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Bologna</td><td class="crd-td">Italy</td><td class="crd-td">Regnum Italiae &amp; Northern Communes</td><td class="crd-td">44,49N, 11,34E</td><td class="crd-td">5k</td><td class="crd-td">40k</td><td class="crd-td">55k (1249)</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Brugge</td><td class="crd-td">Belgium</td><td class="crd-td">Low Countries (Flanders, Brabant &amp; Holland)</td><td class="crd-td">51,21N, 3,23E</td><td class="crd-td">1k</td><td class="crd-td">50k</td><td class="crd-td">50k (1292)</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Pisa</td><td class="crd-td">Italy</td><td class="crd-td">Tuscany, Papal States &amp; Kingdom of Sicily/Naples</td><td class="crd-td">43,72N, 10,4E</td><td class="crd-td">3k</td><td class="crd-td">25k</td><td class="crd-td">50k (1250)</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Rome</td><td class="crd-td">Italy</td><td class="crd-td">Tuscany, Papal States &amp; Kingdom of Sicily/Naples</td><td class="crd-td">41,9N, 12,48E</td><td class="crd-td">50k</td><td class="crd-td">30k</td><td class="crd-td">50k (800)</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">Rouen</td><td class="crd-td">France</td><td class="crd-td">Kingdom of France (North, West of Meuse-Saône)</td><td class="crd-td">49,44N, 1,1E</td><td class="crd-td">7k</td><td class="crd-td">50k</td><td class="crd-td">50k (1300)</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Salerno</td><td class="crd-td">Italy</td><td class="crd-td">Tuscany, Papal States &amp; Kingdom of Sicily/Naples</td><td class="crd-td">40,68N, 14,77E</td><td class="crd-td">2k</td><td class="crd-td">11,8k</td><td class="crd-td">50k (1100)</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">Koeln</td><td class="crd-td">Germany</td><td class="crd-td">Northern &amp; Rhenish HRE (incl. Brandenburg-Pomerania)</td><td class="crd-td">50,92N, 6,95E</td><td class="crd-td">4k</td><td class="crd-td">44k</td><td class="crd-td">44k (1300)</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">Montpellier</td><td class="crd-td">France</td><td class="crd-td">Aquitaine, Gascony &amp; Languedoc (West of Rhône)</td><td class="crd-td">43,61N, 3,88E</td><td class="crd-td">2,4k</td><td class="crd-td">35k</td><td class="crd-td">40k (1347)</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">Padua</td><td class="crd-td">Italy</td><td class="crd-td">Regnum Italiae &amp; Northern Communes</td><td class="crd-td">45,41N, 11,88E</td><td class="crd-td">3,4k</td><td class="crd-td">39k</td><td class="crd-td">40k (1320)</td></tr>
<tr><td class="crd-td"><strong>21</strong></td><td class="crd-td">Verona</td><td class="crd-td">Italy</td><td class="crd-td">Regnum Italiae &amp; Northern Communes</td><td class="crd-td">45,43N, 11E</td><td class="crd-td">30k</td><td class="crd-td">36k</td><td class="crd-td">38,1k (1347)</td></tr>
<tr><td class="crd-td"><strong>22</strong></td><td class="crd-td">Cremona</td><td class="crd-td">Italy</td><td class="crd-td">Regnum Italiae &amp; Northern Communes</td><td class="crd-td">45,14N, 10,03E</td><td class="crd-td">3k</td><td class="crd-td">38k</td><td class="crd-td">38k (1300)</td></tr>
<tr><td class="crd-td"><strong>23</strong></td><td class="crd-td">Orleans</td><td class="crd-td">France</td><td class="crd-td">Kingdom of France (North, West of Meuse-Saône)</td><td class="crd-td">47,9N, 1,91E</td><td class="crd-td">3k</td><td class="crd-td">36k</td><td class="crd-td">36k (1300)</td></tr>
<tr><td class="crd-td"><strong>24</strong></td><td class="crd-td">Amalfi</td><td class="crd-td">Italy</td><td class="crd-td">Tuscany, Papal States &amp; Kingdom of Sicily/Naples</td><td class="crd-td">40,63N, 14,6E</td><td class="crd-td">4k</td><td class="crd-td">13,3k</td><td class="crd-td">35k (1000)</td></tr>
<tr><td class="crd-td"><strong>25</strong></td><td class="crd-td">Lyon</td><td class="crd-td">France</td><td class="crd-td">Aquitaine, Gascony &amp; Languedoc (West of Rhône)</td><td class="crd-td">45,75N, 4,85E</td><td class="crd-td">12k</td><td class="crd-td">35k</td><td class="crd-td">35k (1300)</td></tr>
<tr><td class="crd-td"><strong>26</strong></td><td class="crd-td">Messina</td><td class="crd-td">Italy</td><td class="crd-td">Tuscany, Papal States &amp; Kingdom of Sicily/Naples</td><td class="crd-td">38,19N, 15,55E</td><td class="crd-td">25k</td><td class="crd-td">25k</td><td class="crd-td">35k (1194)</td></tr>
<tr><td class="crd-td"><strong>27</strong></td><td class="crd-td">Toulouse</td><td class="crd-td">France</td><td class="crd-td">Aquitaine, Gascony &amp; Languedoc (West of Rhône)</td><td class="crd-td">43,6N, 1,44E</td><td class="crd-td">4k</td><td class="crd-td">35k</td><td class="crd-td">35k (1300)</td></tr>
<tr><td class="crd-td"><strong>28</strong></td><td class="crd-td">Avignon</td><td class="crd-td">France</td><td class="crd-td">Aquitaine, Gascony &amp; Languedoc (West of Rhône)</td><td class="crd-td">43,95N, 4,81E</td><td class="crd-td">2k</td><td class="crd-td">19,8k</td><td class="crd-td">34,6k (1347)</td></tr>
<tr><td class="crd-td"><strong>29</strong></td><td class="crd-td">Perugia</td><td class="crd-td">Italy</td><td class="crd-td">Tuscany, Papal States &amp; Kingdom of Sicily/Naples</td><td class="crd-td">43,13N, 12,37E</td><td class="crd-td">3k</td><td class="crd-td">34k</td><td class="crd-td">34k (1300)</td></tr>
<tr><td class="crd-td"><strong>30</strong></td><td class="crd-td">Lubeck</td><td class="crd-td">Germany</td><td class="crd-td">Northern &amp; Rhenish HRE (incl. Brandenburg-Pomerania)</td><td class="crd-td">53,87N, 10,69E</td><td class="crd-td">2,3k</td><td class="crd-td">22k</td><td class="crd-td">33,1k (1347)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Thirty largest recorded mediaeval cities in Western and Central Europe ordered by peak population, 800-1347.</figcaption>
</figure>

# Temporal Horizon Coverage and Limitations

Tracking all 2.435 settlements across the five benchmark years reveals both the expansion of urban documentation after 1000AD and the abrupt statistical footprint of the 1347AD interpolation boundary (Table 5). Active localities climb from 2.184 in 800AD (77,17% of the register) to 2.448 in 1000AD, 2.757 in 1200AD, 2.815 in 1300AD and 2.827 in 1347AD as newly chartered high-mediaeval towns such as Lille, Montpellier, Lübeck, Bruges and Amsterdam enter the Buringh series alongside persistent classical sites [@Buringh2021; @Trierum1990Dertig]. Towns of 5k or more multiply twelvefold from 24 in 800AD to 290 in 1300AD, raising the sum of active gazetteer populations from 2,02M in 800AD to 6,35M in 1300AD.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Benchmark</th><th class="crd-th">Active Sites</th><th class="crd-th">Register Share</th><th class="crd-th">Towns &gt;= 5k</th><th class="crd-th">Towns &gt;= 10k</th><th class="crd-th">Sum Recorded Pop.</th><th class="crd-th">Largest City</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">1.845</td><td class="crd-td">75,77%</td><td class="crd-td">40</td><td class="crd-td">16</td><td class="crd-td">3,17M</td><td class="crd-td">50k</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">2.080</td><td class="crd-td">85,42%</td><td class="crd-td">94</td><td class="crd-td">37</td><td class="crd-td">4,19M</td><td class="crd-td">75k</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">2.375</td><td class="crd-td">97,54%</td><td class="crd-td">198</td><td class="crd-td">94</td><td class="crd-td">6,29M</td><td class="crd-td">150k</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">2.435</td><td class="crd-td">100%</td><td class="crd-td">306</td><td class="crd-td">122</td><td class="crd-td">7,74M</td><td class="crd-td">228k</td></tr>
<tr><td class="crd-td"><strong>1347AD</strong></td><td class="crd-td">2.435</td><td class="crd-td">100%</td><td class="crd-td">205</td><td class="crd-td">99</td><td class="crd-td">6,95M</td><td class="crd-td">222,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Chronological benchmark coverage, urban tier counts and aggregate recorded settlement populations across 2.830 localities, 800-1347.</figcaption>
</figure>

Four specific caveats govern interpretation of this gazetteer. First, because the Buringh urban corpus records city sizes on exact century marks (1300 and 1400), log-linear interpolation at 1347AD drags pre-plague urban estimates downward toward the post-Black Death 1400 trough, causing towns of 5k or more to drop artificially from 290 in 1300 to 190 in 1347 even though regional territorial population edged upward by 3,9% [@Buringh2021; @Benedictow2004]. Researchers analysing peak pre-plague urban ratios should therefore anchor comparisons on the 1300AD column. Second, standardised urban benchmarks in Buringh remain conservative for the largest late-mediaeval capitals compared with municipal hearth registers—most notably Paris (75k in 1300 here versus 150k to 200k in 1328 royal *feux*) and Florence (65k here versus roughly 90k to 100k in Villani's chronicle) [@Bairoch1988; @Malanima1998]. Third, Pleiades localities carry a uniform rural-continuity baseline (510 inhabitants) designed to preserve spatial habitation presence without fabricating unattested village headcounts; because Pleiades coverage is densest in Italy, raw site counts cannot be equated with sub-regional population shares. Fourth, seasonal market fairs, pilgrim influxes and artisanal labour migration temporarily inflated urban occupancy in commercial hubs well above permanent resident assessments [@Thakur2016Curating; @Campbell2016].

# Sources
