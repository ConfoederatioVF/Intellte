---
title: "Early Modern Southern Europe and Atlantic Islands"
subtitle: "Settlement Gazetteer and Urban Hierarchy (1500-1750)"
date: "22 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/early_modern_southern_europe_and_atlantic_islands_urban_hierarchy.png"
hero_caption: "Rank-size hierarchy and sub-regional settlement counts across the 725-site Early Modern Southern Europe and Atlantic Islands gazetteer (1500-1750)."
bibliography: early_modern_southern_europe_and_atlantic_islands_literature_review.bib
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



![Rank-size hierarchy and sub-regional settlement counts across the 725-site Early Modern Southern Europe and Atlantic Islands gazetteer (1500-1750).](figures/early_modern_southern_europe_and_atlantic_islands_urban_hierarchy.png)



# Abstract

This companion gazetteer documents the 728 geo-referenced settlements underlying the spatial reconstruction of Early Modern Southern Europe and Atlantic Islands across 929.474 km² between 1500 and 1750. Of the total inventory, 655 cities and towns (97,5%) derive from Eltjo Buringh's longitudinal European urban database, 4 Madeiran municipalities derive from Portuguese institutional census registers and 14 Macaronesian entries (1,92%) derive from GeoNames gap-filling. Settlements span nine modern territories led by Italy (388 sites), Spain (272) and Portugal (56), alongside micro-polities and borderlands in Malta, San Marino, Andorra, Genoese Corsica, Venetian Istria and Ticino. Longitudinal cities reaching at least 10k residents expanded from 88 in 1500 to 149 in 1600, receded to 124 during the seventeenth-century crisis and recovered to 168 by 1750, headed by Naples (339k), Lisbon (185k), Madrid (160k), Rome (158k) and Venice (150k).

# Spatial Architecture and Provenance

Early modern Southern Europe possessed the densest network of walled towns, diocesan seats, coastal ports and nucleated agro-towns anywhere in Europe [@DeVries1984; @Buringh2021]. Along the Po plain, Tuscany and the Roman arterial corridors, dense spacing of municipal centres reflected millennia of continuous civic life [@Benedictis2022Historical]. In the Mezzogiorno and Sicily, peasant concentration into large defensible *paesi* produced 223 recorded settlements inside a single sub-region, whereas the arid Castilian Meseta supported sparser market towns separated by wide tracts of sheep pasture and dryland grain [@Reher1990; @Alfani2013]. Out in the Atlantic, Portuguese and Castilian colonisation founded compact port towns—Funchal, Las Palmas de Gran Canaria, San Cristóbal de la Laguna and Santa Cruz de Tenerife—linked to transatlantic sea lanes [@Baxter2025Uncovering; @Ressel2020Erica].

To preserve archival integrity while ensuring coordinate coverage across every sub-region, MAGNETIC assembles the gazetteer through a strict source hierarchy. Wave 1 ingests 655 longitudinal cities and towns from Buringh's European urban dataset at fifty-year intervals from 1500 to 1750 [@Buringh2021]. Because Buringh's continental city threshold captured only four towns across Macaronesia (Funchal, Las Palmas, La Laguna and Santa Cruz de Tenerife), a Wave 4 sub-regional gap sweep added 18 insular municipal coordinate anchors—4 from Portuguese statistical records on Madeira and 14 from GeoNames across Madeira and the Canary Islands—holding the overall crowd-sourced share to 1,92%. As documented in the companion literature review, those 18 Macaronesian gap-fill records carry static municipal backfills (notably Telde at 34.514) and function exclusively as spatial habitation anchors rather than historical urban time series. Figure 1 maps all 728 settlements across the eight sub-regions, and Table 1 summarises the provenance ledger.

<figure class="crd-figure-block" id="fig:regional_map">
<img class="crd-figure-img" src="/artefacts/project_magnetic/1.0-early-modern-southern-europe-and-atlantic-islands-settlements/early_modern_southern_europe_and_atlantic_islands_regional_map.png" alt="fig:regional_map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Geographic distribution of the 725 early modern settlements across the eight Southern European and Atlantic Islands sub-regions (1500-1750).</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Registry</th><th class="crd-th">Sites</th><th class="crd-th">Share</th><th class="crd-th">Analytical Role</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Buringh European Urban Database (700-2000)</strong></td><td class="crd-td">655</td><td class="crd-td">97,33%</td><td class="crd-td">Primary fifty-year longitudinal urban population series (1500-1750)</td></tr>
<tr><td class="crd-td"><strong>GeoNames Municipal Gazetteer Supplement</strong></td><td class="crd-td">14</td><td class="crd-td">2,08%</td><td class="crd-td">Static Macaronesian municipal gap-fill coordinate anchors</td></tr>
<tr><td class="crd-td"><strong>Portuguese Statistical Municipal Registry</strong></td><td class="crd-td">4</td><td class="crd-td">0,59%</td><td class="crd-td">Madeiran municipal administrative anchors</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Provenance ledger of the 725-settlement Early Modern Southern Europe and Atlantic Islands gazetteer.</figcaption>
</figure>

# Sub-Regional and Territorial Distribution

Settlement density across the eight sub-regions reflects contrasting patterns of agrarian nucleation as much as total population density. The Kingdom of Naples, Sicily, Sardinia and Malta contains 223 settlements (2,22 sites per 1.000 km²) because rural labourers across Apulia, Calabria, Campania and Sicily clustered into large nucleated agro-towns above 3k residents [@Alfani2013]. Central Italy registers 77 sites (1,01 per 1.000 km²) and Northern Italy 94 sites (0,76 per 1.000 km²), while Aragon, Catalonia, Valencia and Andalusia record 150 sites (0,73 per 1.000 km²) against 112 sites in Castile and Northern Spain (0,38 per 1.000 km²) and 47 in Mainland Portugal (0,53 per 1.000 km²). Table 2 reports sub-regional settlement counts, cities reaching 10k residents at 1600 and 1750, longitudinal urban totals and authoritative 1750 regional populations. Table 3 breaks down the 725 sites across modern European territories, reflecting early modern jurisdictional overlaps along the Alps, Istria, Corsica and the Pyrenees [@HistoGIS2022; @Niederstatter2012Pasture].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">10k+ (1600)</th><th class="crd-th">10k+ (1750)</th><th class="crd-th">1750 Urban Sum</th><th class="crd-th">1750 Regional Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Crown of Castile (incl. Andalusia, Galicia &amp; Basque)</strong></td><td class="crd-td">401.545,9</td><td class="crd-td">196</td><td class="crd-td">38</td><td class="crd-td">29</td><td class="crd-td">1,51M</td><td class="crd-td">7,65M</td></tr>
<tr><td class="crd-td"><strong>Crown of Aragon (Aragon, Catalonia, Valencia &amp; Balearics)</strong></td><td class="crd-td">110.872,8</td><td class="crd-td">64</td><td class="crd-td">4</td><td class="crd-td">11</td><td class="crd-td">462k</td><td class="crd-td">1,95M</td></tr>
<tr><td class="crd-td"><strong>Kingdom of Portugal (Mainland)</strong></td><td class="crd-td">84.603,5</td><td class="crd-td">46</td><td class="crd-td">2</td><td class="crd-td">3</td><td class="crd-td">271k</td><td class="crd-td">2,35M</td></tr>
<tr><td class="crd-td"><strong>Northern Italian States (Savoy, Milan, Venice &amp; Genoa)</strong></td><td class="crd-td">149.226,8</td><td class="crd-td">100</td><td class="crd-td">22</td><td class="crd-td">27</td><td class="crd-td">998k</td><td class="crd-td">7,25M</td></tr>
<tr><td class="crd-td"><strong>Grand Duchy of Tuscany &amp; Papal States</strong></td><td class="crd-td">76.124,5</td><td class="crd-td">76</td><td class="crd-td">7</td><td class="crd-td">10</td><td class="crd-td">578k</td><td class="crd-td">3,15M</td></tr>
<tr><td class="crd-td"><strong>Kingdom of Naples, Sicily, Sardinia &amp; Malta</strong></td><td class="crd-td">98.896,4</td><td class="crd-td">224</td><td class="crd-td">28</td><td class="crd-td">40</td><td class="crd-td">1,83M</td><td class="crd-td">5,35M</td></tr>
<tr><td class="crd-td"><strong>Azores &amp; Madeira</strong></td><td class="crd-td">722,1</td><td class="crd-td">10</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">6k</td><td class="crd-td">205k</td></tr>
<tr><td class="crd-td"><strong>Canary Islands</strong></td><td class="crd-td">7.482</td><td class="crd-td">12</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">23k</td><td class="crd-td">145k</td></tr>
<tr><td class="crd-td"><strong>Total Study Domain</strong></td><td class="crd-td">929.474</td><td class="crd-td">728</td><td class="crd-td">101</td><td class="crd-td">120</td><td class="crd-td">5,68M</td><td class="crd-td">28,05M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Sub-regional settlement counts, longitudinal cities of at least 10k residents (1600 and 1750), longitudinal urban sums and 1750 regional population.</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Modern Territory</th><th class="crd-th">Total Sites</th><th class="crd-th">Share</th><th class="crd-th">10k+ Cities (1750)</th><th class="crd-th">1750 Longitudinal Urban Sum</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Italy</strong></td><td class="crd-td">392</td><td class="crd-td">53,85%</td><td class="crd-td">74</td><td class="crd-td">3,34M</td></tr>
<tr><td class="crd-td"><strong>Spain</strong></td><td class="crd-td">267</td><td class="crd-td">36,68%</td><td class="crd-td">39</td><td class="crd-td">1,97M</td></tr>
<tr><td class="crd-td"><strong>Portugal</strong></td><td class="crd-td">56</td><td class="crd-td">7,69%</td><td class="crd-td">3</td><td class="crd-td">277k</td></tr>
<tr><td class="crd-td"><strong>France</strong></td><td class="crd-td">6</td><td class="crd-td">0,82%</td><td class="crd-td">1</td><td class="crd-td">31k</td></tr>
<tr><td class="crd-td"><strong>Slovenia</strong></td><td class="crd-td">2</td><td class="crd-td">0,27%</td><td class="crd-td">1</td><td class="crd-td">15k</td></tr>
<tr><td class="crd-td"><strong>San Marino</strong></td><td class="crd-td">1</td><td class="crd-td">0,14%</td><td class="crd-td">0</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Andorra</strong></td><td class="crd-td">1</td><td class="crd-td">0,14%</td><td class="crd-td">0</td><td class="crd-td">1k</td></tr>
<tr><td class="crd-td"><strong>Austria</strong></td><td class="crd-td">1</td><td class="crd-td">0,14%</td><td class="crd-td">1</td><td class="crd-td">10k</td></tr>
<tr><td class="crd-td"><strong>Switzerland</strong></td><td class="crd-td">1</td><td class="crd-td">0,14%</td><td class="crd-td">0</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Malta</strong></td><td class="crd-td">1</td><td class="crd-td">0,14%</td><td class="crd-td">1</td><td class="crd-td">27k</td></tr>
<tr><td class="crd-td"><strong>Total Study Domain</strong></td><td class="crd-td">728</td><td class="crd-td">100%</td><td class="crd-td">120</td><td class="crd-td">5,68M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Distribution of the 725 Early Modern Southern European settlements across modern European territories.</figcaption>
</figure>

# Principal Cities, Island Capitals and Borderlands

Across the upper tail of the urban hierarchy, Table 4 lists the 25 largest longitudinal cities between 1500 and 1750, ranked by peak historical population and excluding static Macaronesian gap-fill entries. The table brings out the sharp seventeenth-century divergence between state capitals and declining Renaissance manufacturing centres. Naples dominated the Mediterranean throughout the entire 250-year span, climbing from 125k to 339k despite losing perhaps half its residents in the 1656 plague [@Alfani2013]. Lisbon nearly tripled from 65k to 185k, Madrid multiplied twelvefold from 13k to 160k, Rome nearly tripled from 55k to 158k and Turin more than quadrupled from 15k to 69k. Simultaneously, former Iberian interior giants withered: Toledo plunged from 80k in 1600 to 20k in 1750, Valladolid fell from 41k to 19k and Seville dropped from 135k to 66k as Atlantic commerce shifted downriver to Cádiz (2k to 60k) [@Reher1990; @DeVries1984]. In Northern Italy, Brescia (49k to 30k) and Cremona (40k to 24k) never regained their 1500 peaks after the 1629-1631 epidemic.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">City</th><th class="crd-th">Territory</th><th class="crd-th">1500</th><th class="crd-th">1600</th><th class="crd-th">1700</th><th class="crd-th">1750</th><th class="crd-th">Peak Yr</th><th class="crd-th">Peak Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Napoli</strong></td><td class="crd-td">Italy</td><td class="crd-td">125k</td><td class="crd-td">275k</td><td class="crd-td">300k</td><td class="crd-td">339k</td><td class="crd-td">1750</td><td class="crd-td">339k</td></tr>
<tr><td class="crd-td"><strong>Madrid</strong></td><td class="crd-td">Spain</td><td class="crd-td">13k</td><td class="crd-td">65k</td><td class="crd-td">140k</td><td class="crd-td">160k</td><td class="crd-td">1750</td><td class="crd-td">160k</td></tr>
<tr><td class="crd-td"><strong>Roma</strong></td><td class="crd-td">Italy</td><td class="crd-td">55k</td><td class="crd-td">100k</td><td class="crd-td">135k</td><td class="crd-td">158k</td><td class="crd-td">1750</td><td class="crd-td">158k</td></tr>
<tr><td class="crd-td"><strong>Venezia</strong></td><td class="crd-td">Italy</td><td class="crd-td">100k</td><td class="crd-td">151k</td><td class="crd-td">138k</td><td class="crd-td">150k</td><td class="crd-td">1600</td><td class="crd-td">151k</td></tr>
<tr><td class="crd-td"><strong>Sevilla</strong></td><td class="crd-td">Spain</td><td class="crd-td">45k</td><td class="crd-td">135k</td><td class="crd-td">72k</td><td class="crd-td">66k</td><td class="crd-td">1600</td><td class="crd-td">135k</td></tr>
<tr><td class="crd-td"><strong>Milano</strong></td><td class="crd-td">Italy</td><td class="crd-td">100k</td><td class="crd-td">120k</td><td class="crd-td">125k</td><td class="crd-td">124k</td><td class="crd-td">1700</td><td class="crd-td">125k</td></tr>
<tr><td class="crd-td"><strong>Toledo</strong></td><td class="crd-td">Spain</td><td class="crd-td">32k</td><td class="crd-td">80k</td><td class="crd-td">23k</td><td class="crd-td">20k</td><td class="crd-td">1600</td><td class="crd-td">80k</td></tr>
<tr><td class="crd-td"><strong>Valencia</strong></td><td class="crd-td">Spain</td><td class="crd-td">75k</td><td class="crd-td">65k</td><td class="crd-td">50k</td><td class="crd-td">60k</td><td class="crd-td">1500</td><td class="crd-td">75k</td></tr>
<tr><td class="crd-td"><strong>Torino</strong></td><td class="crd-td">Italy</td><td class="crd-td">15k</td><td class="crd-td">16k</td><td class="crd-td">40k</td><td class="crd-td">69k</td><td class="crd-td">1750</td><td class="crd-td">69k</td></tr>
<tr><td class="crd-td"><strong>Cadiz</strong></td><td class="crd-td">Spain</td><td class="crd-td">2k</td><td class="crd-td">5k</td><td class="crd-td">40k</td><td class="crd-td">60k</td><td class="crd-td">1750</td><td class="crd-td">60k</td></tr>
<tr><td class="crd-td"><strong>Brescia</strong></td><td class="crd-td">Italy</td><td class="crd-td">49k</td><td class="crd-td">36k</td><td class="crd-td">35k</td><td class="crd-td">30k</td><td class="crd-td">1500</td><td class="crd-td">49k</td></tr>
<tr><td class="crd-td"><strong>Cremona</strong></td><td class="crd-td">Italy</td><td class="crd-td">40k</td><td class="crd-td">36k</td><td class="crd-td">22k</td><td class="crd-td">24k</td><td class="crd-td">1500</td><td class="crd-td">40k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Twenty-five largest longitudinal cities in Early Modern Southern Europe ranked by peak population (1500-1750).</figcaption>
</figure>

Finally, Table 5 highlights the longitudinal maritime capitals of the Atlantic islands and Hospitaller Malta alongside the micro-polity and borderland towns intersecting the northern and maritime fringes of the study mask. Valletta—absent in 1500 prior to its foundation by Grand Master Jean Parisot de Valette in 1566—rose rapidly to 21k in 1600 and 27k by 1750 as the heavily fortified headquarters of the Knights of St John [@Bozkurt2022Plague; @Ressel2020Erica]. Funchal on Madeira and the three Canary capitals (San Cristóbal de la Laguna, Las Palmas de Gran Canaria and Santa Cruz de Tenerife) expanded steadily from 1k outposts in 1500 to flourishing 6k-9k Atlantic commercial towns by 1750.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Lat.</th><th class="crd-th">Lon.</th><th class="crd-th">1500</th><th class="crd-th">1600</th><th class="crd-th">1700</th><th class="crd-th">1750</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Valletta</strong></td><td class="crd-td">Malta</td><td class="crd-td">35,9</td><td class="crd-td">14,52</td><td class="crd-td">-</td><td class="crd-td">21k</td><td class="crd-td">24k</td><td class="crd-td">27k</td></tr>
<tr><td class="crd-td"><strong>San Cristobal de la Laguna</strong></td><td class="crd-td">Spain</td><td class="crd-td">28,48</td><td class="crd-td">-16,3</td><td class="crd-td">1k</td><td class="crd-td">2k</td><td class="crd-td">6k</td><td class="crd-td">9k</td></tr>
<tr><td class="crd-td"><strong>Las Palmas de Gran Canaria</strong></td><td class="crd-td">Spain</td><td class="crd-td">28,1</td><td class="crd-td">-15,42</td><td class="crd-td">1k</td><td class="crd-td">2k</td><td class="crd-td">5k</td><td class="crd-td">7k</td></tr>
<tr><td class="crd-td"><strong>Santa Cruz de Tenerife</strong></td><td class="crd-td">Spain</td><td class="crd-td">28,47</td><td class="crd-td">-16,25</td><td class="crd-td">1k</td><td class="crd-td">2k</td><td class="crd-td">6k</td><td class="crd-td">7k</td></tr>
<tr><td class="crd-td"><strong>Funchal</strong></td><td class="crd-td">Portugal</td><td class="crd-td">32,8</td><td class="crd-td">-16,92</td><td class="crd-td">1k</td><td class="crd-td">2k</td><td class="crd-td">4k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Gorizia</strong></td><td class="crd-td">Slovenia</td><td class="crd-td">45,95</td><td class="crd-td">13,63</td><td class="crd-td">2k</td><td class="crd-td">5k</td><td class="crd-td">10k</td><td class="crd-td">10k</td></tr>
<tr><td class="crd-td"><strong>Acquaviva</strong></td><td class="crd-td">San Marino</td><td class="crd-td">43,95</td><td class="crd-td">12,42</td><td class="crd-td">3k</td><td class="crd-td">6k</td><td class="crd-td">7k</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Koper</strong></td><td class="crd-td">Slovenia</td><td class="crd-td">45,55</td><td class="crd-td">13,73</td><td class="crd-td">3k</td><td class="crd-td">4k</td><td class="crd-td">5k</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Bonifacio</strong></td><td class="crd-td">France</td><td class="crd-td">41,38</td><td class="crd-td">9,17</td><td class="crd-td">1k</td><td class="crd-td">2k</td><td class="crd-td">3k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Lugano</strong></td><td class="crd-td">Switzerland</td><td class="crd-td">46,02</td><td class="crd-td">8,97</td><td class="crd-td">2k</td><td class="crd-td">3k</td><td class="crd-td">3k</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Andorra la Vella</strong></td><td class="crd-td">Andorra</td><td class="crd-td">42,5</td><td class="crd-td">1,5</td><td class="crd-td">1k</td><td class="crd-td">1k</td><td class="crd-td">1k</td><td class="crd-td">1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Longitudinal island capitals, Hospitaller Malta and borderland micro-polity centres in the Southern European gazetteer (1500-1750).</figcaption>
</figure>

# Sources
