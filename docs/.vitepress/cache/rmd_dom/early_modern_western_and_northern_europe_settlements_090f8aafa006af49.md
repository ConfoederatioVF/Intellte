---
title: "Early Modern Western and Northern Europe"
subtitle: "Settlement Gazetteer and Urban Hierarchy (1500-1750)"
date: "22 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/early_modern_western_and_northern_europe_urban_hierarchy.png"
hero_caption: "Largest early modern cities and rank-size distribution across 726 localities in Western and Northern Europe and Greenland, 1500-1750."
bibliography: early_modern_western_and_northern_europe_literature_review.bib
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



![Largest early modern cities and rank-size distribution across 726 localities in Western and Northern Europe and Greenland, 1500-1750.](figures/early_modern_western_and_northern_europe_urban_hierarchy.png)



# Abstract

This companion gazetteer documents the 712 georeferenced early modern settlements underpinning the MAGNETIC demographic reconstruction of Western and Northern Europe, the North Atlantic archipelagos and Greenland between 1500 and 1750 across 4.274.526,1 km². Every one of the nine sub-regions and 17 modern jurisdictions intersected by the early modern territorial envelope is represented. Scholarly historical urban series and official national statistical registers supply 98,9% of all entries: 626 cities and towns (87,92%) derive from the Buringh European Urban Corpus [@Buringh2021], complemented by six Greenlandic settlements from the Statistics Greenland Historical Register, two Faroese harbours from the Statistics Faroe Islands Historical Register and two Icelandic localities from the European Radiocarbon Settlement Corpus. Municipal gazetteer supplementation is limited to eight Arctic and Faroese coastal stations (0,42%). Across the quarter-millennium, cities reaching 10k or more inhabitants increased from 63 (holding 1,23M residents) in 1500 to 143 (holding 4,78M residents) in 1750, registering the historic shift of European urban primacy towards London, Paris, Amsterdam and the Atlantic ports.

# Gazetteer Scope and Spatial Coverage

Early modern European settlement registers reflect two distinct geographical worlds [@DeVries1984; @Buringh2021]. Across the densely cultivated plains of France, England and the Low Countries, chartered market towns, episcopal sees, cloth-making boroughs and oceanic ports formed an interlocking urban web recorded repeatedly in parish, guild and fiscal archives [@WrigleySchofield1981; @Dupaquier1988]. Across northern Scandinavia, the Scottish Highlands, Iceland, the Faroe Islands and West Greenland, populations lived overwhelmingly in dispersed farmsteads, fjord fishing stations and Inuit winter camps well below conventional urban thresholds [@Gille1949; @Bonaciu2020European].

Figure 1 maps all 712 localities across the nine sub-regional envelopes, while Table 1 summarises sub-regional locality counts, recording density per 10k km², cities exceeding 10k inhabitants in 1750 and primary-corpus share. Because sub-regional masks follow early modern political zones rather than twenty-first-century borders, the France and Low Countries polygons encompass borderland towns falling inside modern Germany (16 localities, including Aachen), Switzerland (7, including Geneva), Spain (4), Italy (3), Andorra (1) and Luxembourg (1) alongside the 12 core northern and western European nations [@HistoGIS2022].

<figure class="crd-figure-block" id="fig:gazetteer_map">
<img class="crd-figure-img" src="/artefacts/project_magnetic/1.0-early-modern-western-and-northern-europe-settlements/early_modern_western_and_northern_europe_regional_map.png" alt="fig:gazetteer_map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 726 recorded early modern localities across nine sub-regions of Western and Northern Europe and Greenland, 1500-1750.</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Localities</th><th class="crd-th">Share</th><th class="crd-th">Area (km²)</th><th class="crd-th">Per 10k km²</th><th class="crd-th">1750 Cities</th><th class="crd-th">Primary Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>England &amp; Wales</strong></td><td class="crd-td">150</td><td class="crd-td">21,07%</td><td class="crd-td">152.068,2</td><td class="crd-td">9,86</td><td class="crd-td">23</td><td class="crd-td">100%</td></tr>
<tr><td class="crd-td"><strong>Kingdom of Scotland</strong></td><td class="crd-td">12</td><td class="crd-td">1,69%</td><td class="crd-td">76.939,5</td><td class="crd-td">1,56</td><td class="crd-td">5</td><td class="crd-td">100%</td></tr>
<tr><td class="crd-td"><strong>Kingdom of Ireland</strong></td><td class="crd-td">22</td><td class="crd-td">3,09%</td><td class="crd-td">82.806,1</td><td class="crd-td">2,66</td><td class="crd-td">6</td><td class="crd-td">100%</td></tr>
<tr><td class="crd-td"><strong>Kingdom of France (c. 1700 Bourbon Frontiers)</strong></td><td class="crd-td">337</td><td class="crd-td">47,33%</td><td class="crd-td">543.921,1</td><td class="crd-td">6,2</td><td class="crd-td">75</td><td class="crd-td">100%</td></tr>
<tr><td class="crd-td"><strong>Dutch Republic (Seven United Provinces)</strong></td><td class="crd-td">69</td><td class="crd-td">9,69%</td><td class="crd-td">43.585,8</td><td class="crd-td">15,83</td><td class="crd-td">20</td><td class="crd-td">100%</td></tr>
<tr><td class="crd-td"><strong>Spanish / Austrian Southern Netherlands</strong></td><td class="crd-td">65</td><td class="crd-td">9,13%</td><td class="crd-td">32.362,2</td><td class="crd-td">20,09</td><td class="crd-td">12</td><td class="crd-td">100%</td></tr>
<tr><td class="crd-td"><strong>Kingdom of Denmark-Norway</strong></td><td class="crd-td">21</td><td class="crd-td">2,95%</td><td class="crd-td">405.915,4</td><td class="crd-td">0,52</td><td class="crd-td">4</td><td class="crd-td">100%</td></tr>
<tr><td class="crd-td"><strong>Swedish Empire (Sweden-Finland)</strong></td><td class="crd-td">23</td><td class="crd-td">3,23%</td><td class="crd-td">758.135</td><td class="crd-td">0,3</td><td class="crd-td">3</td><td class="crd-td">100%</td></tr>
<tr><td class="crd-td"><strong>Iceland &amp; Faroe Islands</strong></td><td class="crd-td">6</td><td class="crd-td">0,84%</td><td class="crd-td">101.984,7</td><td class="crd-td">0,59</td><td class="crd-td">0</td><td class="crd-td">100%</td></tr>
<tr><td class="crd-td"><strong>Greenland</strong></td><td class="crd-td">7</td><td class="crd-td">0,98%</td><td class="crd-td">2.076.808,1</td><td class="crd-td">0,03</td><td class="crd-td">0</td><td class="crd-td">57,1%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional locality counts, recording density per 10k km², 1750 cities of 10k or more and institutional source share across all nine sub-regions.</figcaption>
</figure>

# Provenance Ledger and Source Exhaustion

Every locality in the register carries an explicit source attribution reconciled through a five-wave saturation audit. Primary scholarly urban compilations and national statistical archives supply 718 of the 726 records (98,9%), led overwhelmingly by the Buringh European Urban Corpus [@Buringh2021], which contributes 708 localities spanning 1500 to 1750 at fifty-year intervals. The remaining 18 localities fill structural voids in the North Atlantic and Arctic islands where no pre-industrial settlement exceeded 5k inhabitants: six West Greenlandic coastal centres from Statistics Greenland, two Faroese administrative harbours from Statistics Faroe Islands, two Icelandic archaeological localities from the European Radiocarbon Settlement Corpus and eight small municipal supplements across Greenland (4) and the Faroe Islands (4). Table 2 reports the provenance breakdown across all five corpora.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Corpus</th><th class="crd-th">Source Tier</th><th class="crd-th">Localities</th><th class="crd-th">Share of Register</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Buringh European Urban Corpus (700-2000)</strong></td><td class="crd-td">Scholarly Urban Corpus</td><td class="crd-td">626</td><td class="crd-td">87,92%</td></tr>
<tr><td class="crd-td"><strong>Chandler V2 Historical Urban Population</strong></td><td class="crd-td">National Statistical Archive</td><td class="crd-td">41</td><td class="crd-td">5,76%</td></tr>
<tr><td class="crd-td"><strong>De Vries 1984 European Urbanization 1500 1800</strong></td><td class="crd-td">National Statistical Archive</td><td class="crd-td">33</td><td class="crd-td">4,63%</td></tr>
<tr><td class="crd-td"><strong>Statistics Greenland Historical Register</strong></td><td class="crd-td">National Statistical Archive</td><td class="crd-td">4</td><td class="crd-td">0,56%</td></tr>
<tr><td class="crd-td"><strong>Scholarly North Atlantic Benchmarks</strong></td><td class="crd-td">National Statistical Archive</td><td class="crd-td">3</td><td class="crd-td">0,42%</td></tr>
<tr><td class="crd-td"><strong>Municipal Gazetteer Coastal Supplement</strong></td><td class="crd-td">Municipal Coastal Supplement</td><td class="crd-td">3</td><td class="crd-td">0,42%</td></tr>
<tr><td class="crd-td"><strong>European Radiocarbon Settlement Corpus</strong></td><td class="crd-td">Archaeological Corpus</td><td class="crd-td">2</td><td class="crd-td">0,28%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Provenance ledger and source-tier composition across all 726 early modern settlements, 1500-1750.</figcaption>
</figure>

# Urban Hierarchy and Largest Settlements

Between 1500 and 1750 Western and Northern Europe's urban rank-size curve steepened dramatically at its upper apex as imperial capitals and Atlantic entrepôts pulled away from older mediaeval inland towns [@DeVries1984; @Buringh2021]. In 1500 Paris stood first at 94k, nearly twice the size of London (50k) and Bordeaux (50k), while Flemish cloth centres — Ghent (45k), Bruges (35k), Brussels (33k) and Antwerp (30k) — dominated the northern trading axis. By 1750 London had surged thirteenfold to 675k, overtaking Paris (524k), while Amsterdam climbed sixteenfold from 12k to 198k and Dublin expanded sixteenfold from 8k to 129k. Equally striking was the northern maritime ascent of Copenhagen (3k to 80k), Stockholm (7k to 70k), Cork (4k to 58k), Edinburgh (18k to 57k) and Bristol (10k to 50k), contrasted with the post-1650 textile contractions of Leiden (67k to 37k) and Haarlem (39k to 27k). Table 3 details the 25 highest-peaking cities across the domain.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Sub-Region</th><th class="crd-th">1500</th><th class="crd-th">1600</th><th class="crd-th">1700</th><th class="crd-th">1750</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>London</strong></td><td class="crd-td">United Kingdom</td><td class="crd-td">England &amp; Wales</td><td class="crd-td">50k</td><td class="crd-td">187k</td><td class="crd-td">550k</td><td class="crd-td">676k</td></tr>
<tr><td class="crd-td"><strong>Paris</strong></td><td class="crd-td">France</td><td class="crd-td">Kingdom of France (c. 1700 Bourbon Frontiers)</td><td class="crd-td">100k</td><td class="crd-td">220k</td><td class="crd-td">510k</td><td class="crd-td">576k</td></tr>
<tr><td class="crd-td"><strong>Amsterdam</strong></td><td class="crd-td">Netherlands</td><td class="crd-td">Dutch Republic (Seven United Provinces)</td><td class="crd-td">11,1k</td><td class="crd-td">48k</td><td class="crd-td">210k</td><td class="crd-td">219k</td></tr>
<tr><td class="crd-td"><strong>Dublin</strong></td><td class="crd-td">Ireland</td><td class="crd-td">Kingdom of Ireland</td><td class="crd-td">8k</td><td class="crd-td">5k</td><td class="crd-td">60k</td><td class="crd-td">129k</td></tr>
<tr><td class="crd-td"><strong>Lyon</strong></td><td class="crd-td">France</td><td class="crd-td">Kingdom of France (c. 1700 Bourbon Frontiers)</td><td class="crd-td">40k</td><td class="crd-td">30k</td><td class="crd-td">97k</td><td class="crd-td">111k</td></tr>
<tr><td class="crd-td"><strong>Antwerp</strong></td><td class="crd-td">Belgium</td><td class="crd-td">Spanish / Austrian Southern Netherlands</td><td class="crd-td">37k</td><td class="crd-td">49k</td><td class="crd-td">67k</td><td class="crd-td">43k</td></tr>
<tr><td class="crd-td"><strong>Marseille</strong></td><td class="crd-td">France</td><td class="crd-td">Kingdom of France (c. 1700 Bourbon Frontiers)</td><td class="crd-td">21k</td><td class="crd-td">43k</td><td class="crd-td">90k</td><td class="crd-td">95k</td></tr>
<tr><td class="crd-td"><strong>Copenhagen</strong></td><td class="crd-td">Denmark</td><td class="crd-td">Kingdom of Denmark-Norway</td><td class="crd-td">15k</td><td class="crd-td">25k</td><td class="crd-td">70k</td><td class="crd-td">93k</td></tr>
<tr><td class="crd-td"><strong>Rouen</strong></td><td class="crd-td">France</td><td class="crd-td">Kingdom of France (c. 1700 Bourbon Frontiers)</td><td class="crd-td">40k</td><td class="crd-td">60k</td><td class="crd-td">64k</td><td class="crd-td">67k</td></tr>
<tr><td class="crd-td"><strong>Brussels</strong></td><td class="crd-td">Belgium</td><td class="crd-td">Spanish / Austrian Southern Netherlands</td><td class="crd-td">33k</td><td class="crd-td">50k</td><td class="crd-td">80k</td><td class="crd-td">59k</td></tr>
<tr><td class="crd-td"><strong>Ghent</strong></td><td class="crd-td">Belgium</td><td class="crd-td">Spanish / Austrian Southern Netherlands</td><td class="crd-td">80k</td><td class="crd-td">31k</td><td class="crd-td">49k</td><td class="crd-td">35k</td></tr>
<tr><td class="crd-td"><strong>Copenhagen</strong></td><td class="crd-td">Denmark</td><td class="crd-td">Kingdom of Denmark-Norway</td><td class="crd-td">3k</td><td class="crd-td">40k</td><td class="crd-td">65k</td><td class="crd-td">80k</td></tr>
<tr><td class="crd-td"><strong>Strasbourg</strong></td><td class="crd-td">France</td><td class="crd-td">Kingdom of France (c. 1700 Bourbon Frontiers)</td><td class="crd-td">22k</td><td class="crd-td">25k</td><td class="crd-td">27k</td><td class="crd-td">47k</td></tr>
<tr><td class="crd-td"><strong>Leiden</strong></td><td class="crd-td">Netherlands</td><td class="crd-td">Dutch Republic (Seven United Provinces)</td><td class="crd-td">14k</td><td class="crd-td">24k</td><td class="crd-td">56k</td><td class="crd-td">36k</td></tr>
<tr><td class="crd-td"><strong>Stockholm</strong></td><td class="crd-td">Sweden</td><td class="crd-td">Swedish Empire (Sweden-Finland)</td><td class="crd-td">7k</td><td class="crd-td">9k</td><td class="crd-td">40k</td><td class="crd-td">70k</td></tr>
<tr><td class="crd-td"><strong>Bordeaux</strong></td><td class="crd-td">France</td><td class="crd-td">Kingdom of France (c. 1700 Bourbon Frontiers)</td><td class="crd-td">20k</td><td class="crd-td">40k</td><td class="crd-td">50k</td><td class="crd-td">67k</td></tr>
<tr><td class="crd-td"><strong>Lille</strong></td><td class="crd-td">France</td><td class="crd-td">Kingdom of France (c. 1700 Bourbon Frontiers)</td><td class="crd-td">25k</td><td class="crd-td">30k</td><td class="crd-td">55k</td><td class="crd-td">62k</td></tr>
<tr><td class="crd-td"><strong>Bruges</strong></td><td class="crd-td">Belgium</td><td class="crd-td">Spanish / Austrian Southern Netherlands</td><td class="crd-td">60k</td><td class="crd-td">25k</td><td class="crd-td">35k</td><td class="crd-td">27k</td></tr>
<tr><td class="crd-td"><strong>Nantes</strong></td><td class="crd-td">France</td><td class="crd-td">Kingdom of France (c. 1700 Bourbon Frontiers)</td><td class="crd-td">14k</td><td class="crd-td">25k</td><td class="crd-td">40k</td><td class="crd-td">60k</td></tr>
<tr><td class="crd-td"><strong>Tours</strong></td><td class="crd-td">France</td><td class="crd-td">Kingdom of France (c. 1700 Bourbon Frontiers)</td><td class="crd-td">38,2k</td><td class="crd-td">25,5k</td><td class="crd-td">33k</td><td class="crd-td">23k</td></tr>
<tr><td class="crd-td"><strong>Cork</strong></td><td class="crd-td">Ireland</td><td class="crd-td">Kingdom of Ireland</td><td class="crd-td">4k</td><td class="crd-td">2k</td><td class="crd-td">25k</td><td class="crd-td">58k</td></tr>
<tr><td class="crd-td"><strong>Edinburgh</strong></td><td class="crd-td">United Kingdom</td><td class="crd-td">Kingdom of Scotland</td><td class="crd-td">18k</td><td class="crd-td">15k</td><td class="crd-td">36k</td><td class="crd-td">57k</td></tr>
<tr><td class="crd-td"><strong>Liège</strong></td><td class="crd-td">Belgium</td><td class="crd-td">Spanish / Austrian Southern Netherlands</td><td class="crd-td">20k</td><td class="crd-td">30k</td><td class="crd-td">45k</td><td class="crd-td">57k</td></tr>
<tr><td class="crd-td"><strong>Rotterdam</strong></td><td class="crd-td">Netherlands</td><td class="crd-td">Dutch Republic (Seven United Provinces)</td><td class="crd-td">5,2k</td><td class="crd-td">13,5k</td><td class="crd-td">55k</td><td class="crd-td">42k</td></tr>
<tr><td class="crd-td"><strong>Bristol</strong></td><td class="crd-td">United Kingdom</td><td class="crd-td">England &amp; Wales</td><td class="crd-td">10k</td><td class="crd-td">12k</td><td class="crd-td">20k</td><td class="crd-td">50k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Top 25 early modern cities in Western and Northern Europe ranked by peak population, 1500-1750.</figcaption>
</figure>

# Chronological Coverage and North Atlantic Peripheral Anchors

Tracking all 712 settlements across six fifty-year horizons from 1500 to 1750 confirms both near-continuous longitudinal coverage and accelerating urban concentration (Table 4). Active localities rise from 686 in 1500 to 724 in 1750 as newly founded royal ports, mining towns and naval arsenals — among them Versailles, Karlskrona, Kongsberg and Lorient — enter the record [@Buringh2021; @Gille1949]. Over the same interval the number of cities meeting or exceeding de Vries's 10k threshold more than doubled from 63 to 143, while aggregate population in those cities nearly quadrupled from 1,23M to 4,78M.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Active Sites</th><th class="crd-th">Cities &gt;= 10k</th><th class="crd-th">Sum &gt;= 10k</th><th class="crd-th">All Recorded</th><th class="crd-th">Median</th><th class="crd-th">Maximum</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1500</strong></td><td class="crd-td">675</td><td class="crd-td">67</td><td class="crd-td">1,45M</td><td class="crd-td">3,06M</td><td class="crd-td">2k</td><td class="crd-td">100k</td></tr>
<tr><td class="crd-td"><strong>1550</strong></td><td class="crd-td">675</td><td class="crd-td">64</td><td class="crd-td">1,59M</td><td class="crd-td">3,44M</td><td class="crd-td">3k</td><td class="crd-td">130k</td></tr>
<tr><td class="crd-td"><strong>1600</strong></td><td class="crd-td">688</td><td class="crd-td">97</td><td class="crd-td">2,23M</td><td class="crd-td">4,14M</td><td class="crd-td">3k</td><td class="crd-td">220k</td></tr>
<tr><td class="crd-td"><strong>1650</strong></td><td class="crd-td">696</td><td class="crd-td">105</td><td class="crd-td">3,29M</td><td class="crd-td">5,36M</td><td class="crd-td">4k</td><td class="crd-td">430k</td></tr>
<tr><td class="crd-td"><strong>1700</strong></td><td class="crd-td">706</td><td class="crd-td">127</td><td class="crd-td">4,24M</td><td class="crd-td">6,45M</td><td class="crd-td">4k</td><td class="crd-td">550k</td></tr>
<tr><td class="crd-td"><strong>1750</strong></td><td class="crd-td">707</td><td class="crd-td">148</td><td class="crd-td">5,12M</td><td class="crd-td">7,68M</td><td class="crd-td">5k</td><td class="crd-td">676k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Chronological horizon coverage, 10k-plus city counts and urban size distributions across 726 localities, 1500-1750.</figcaption>
</figure>

At the north-western Arctic and sub-Arctic rim, settlement morphology differed fundamentally from continental towns. Table 5 lists all 19 localities anchored inside Iceland, the Faroe Islands and Greenland. Whereas Reykjavík enters from the Buringh urban corpus as a 1k-tier anchor, the Faroese and Greenlandic coastal stations serve as fixed spatial nodes tied to historical trade harbours and Inuit fjord territories; their constant baseline figures do not imply static eighteenth-century headcounts, since Iceland suffered a one-quarter to one-third population drop in the 1707-1709 smallpox epidemic and West Greenland endured severe epidemic mortality in 1733-1734 [@Gille1949; @Tripp2017Insights].

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Locality</th><th class="crd-th">Territory</th><th class="crd-th">Lat.</th><th class="crd-th">Lon.</th><th class="crd-th">1500</th><th class="crd-th">1750</th><th class="crd-th">Source Corpus</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tórshavn</strong></td><td class="crd-td">Faroe Islands</td><td class="crd-td">62,01</td><td class="crd-td">-6,77</td><td class="crd-td">250</td><td class="crd-td">-</td><td class="crd-td">Scholarly North Atlantic Benchmarks</td></tr>
<tr><td class="crd-td"><strong>Aasiaat</strong></td><td class="crd-td">Greenland</td><td class="crd-td">68,71</td><td class="crd-td">-52,86</td><td class="crd-td">757</td><td class="crd-td">968</td><td class="crd-td">Statistics Greenland Historical Register</td></tr>
<tr><td class="crd-td"><strong>Nanortalik</strong></td><td class="crd-td">Greenland</td><td class="crd-td">60,14</td><td class="crd-td">-45,24</td><td class="crd-td">299</td><td class="crd-td">382</td><td class="crd-td">Municipal Gazetteer Coastal Supplement</td></tr>
<tr><td class="crd-td"><strong>Narsaq</strong></td><td class="crd-td">Greenland</td><td class="crd-td">60,91</td><td class="crd-td">-46,05</td><td class="crd-td">339</td><td class="crd-td">433</td><td class="crd-td">Municipal Gazetteer Coastal Supplement</td></tr>
<tr><td class="crd-td"><strong>Nuuk</strong></td><td class="crd-td">Greenland</td><td class="crd-td">64,18</td><td class="crd-td">-51,72</td><td class="crd-td">3,7k</td><td class="crd-td">4,8k</td><td class="crd-td">Statistics Greenland Historical Register</td></tr>
<tr><td class="crd-td"><strong>Qaqortoq</strong></td><td class="crd-td">Greenland</td><td class="crd-td">60,72</td><td class="crd-td">-46,04</td><td class="crd-td">812</td><td class="crd-td">1k</td><td class="crd-td">Statistics Greenland Historical Register</td></tr>
<tr><td class="crd-td"><strong>Qasigiannguit</strong></td><td class="crd-td">Greenland</td><td class="crd-td">68,82</td><td class="crd-td">-51,19</td><td class="crd-td">272</td><td class="crd-td">348</td><td class="crd-td">Municipal Gazetteer Coastal Supplement</td></tr>
<tr><td class="crd-td"><strong>Sisimiut</strong></td><td class="crd-td">Greenland</td><td class="crd-td">66,94</td><td class="crd-td">-53,67</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">Statistics Greenland Historical Register</td></tr>
<tr><td class="crd-td"><strong>Hólar</strong></td><td class="crd-td">Iceland</td><td class="crd-td">65,73</td><td class="crd-td">-19,11</td><td class="crd-td">170</td><td class="crd-td">-</td><td class="crd-td">Scholarly North Atlantic Benchmarks</td></tr>
<tr><td class="crd-td"><strong>Rangárbotnar</strong></td><td class="crd-td">Iceland</td><td class="crd-td">64,07</td><td class="crd-td">-19,75</td><td class="crd-td">293</td><td class="crd-td">-</td><td class="crd-td">European Radiocarbon Settlement Corpus</td></tr>
<tr><td class="crd-td"><strong>Reykjavik</strong></td><td class="crd-td">Iceland</td><td class="crd-td">64,13</td><td class="crd-td">-21,93</td><td class="crd-td">1k</td><td class="crd-td">1k</td><td class="crd-td">Buringh European Urban Corpus (700-2000)</td></tr>
<tr><td class="crd-td"><strong>Skálholt</strong></td><td class="crd-td">Iceland</td><td class="crd-td">64,13</td><td class="crd-td">-20,53</td><td class="crd-td">190</td><td class="crd-td">-</td><td class="crd-td">Scholarly North Atlantic Benchmarks</td></tr>
<tr><td class="crd-td"><strong>Svinavath</strong></td><td class="crd-td">Iceland</td><td class="crd-td">65,53</td><td class="crd-td">-20,1</td><td class="crd-td">140</td><td class="crd-td">-</td><td class="crd-td">European Radiocarbon Settlement Corpus</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> North Atlantic and Arctic coastal anchor localities across Iceland, the Faroe Islands and Greenland, 1500-1750.</figcaption>
</figure>

# Sources
