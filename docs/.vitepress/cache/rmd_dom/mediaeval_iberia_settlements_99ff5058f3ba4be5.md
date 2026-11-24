---
title: "Mediaeval Iberia"
subtitle: "Settlement Gazetteer and Urban Hierarchy (711-1492)"
date: "22 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/mediaeval_iberia_urban_hierarchy.png"
hero_caption: "Largest recorded mediaeval Iberian cities and rank-size distribution across 508 localities, 711-1492."
bibliography: mediaeval_iberia_literature_review.bib
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



![Largest recorded mediaeval Iberian cities and rank-size distribution across 508 localities, 711-1492.](figures/mediaeval_iberia_urban_hierarchy.png)



# Abstract

This companion gazetteer documents the 469 georeferenced habitation centres underpinning the MAGNETIC demographic reconstruction of Mediaeval Iberia between 711AD and 1492AD across 605.038,2 km². All five political-ecological sub-regions and 5 modern jurisdictions intersected by the peninsular and insular boundaries are covered. Primary historical urban registers and scholarly ancient-world corpora supply 98,23% of all included records (287 longitudinal city series from the Buringh European Urban Register and 122 continuous Roman-to-mediaeval localities from the Pleiades Ancient World Gazetteer), limiting municipal crowd-sourced supplementation to 2,56% (9 Canary Islands anchors from the GeoNames Municipal Gazetteer Supplement). Peak urban populations across the register conform closely to a polycentric power-law rank-size curve ($\alpha = 0,78$, $R^2 = 0,99$), headed by Caliphate Cordoba (100k in 1000AD), Almohad-Castilian Sevilla (90k in 1300AD), late-mediaeval Valencia (71,3k in 1492AD), Atlantic Lisboa (64,1k in 1492AD), Nasrid Granada (50k in 1300AD) and commercial Barcelona (48k in 1300AD).

# Gazetteer Scope and Spatial Coverage

Between the Umayyad conquest of 711AD and the fall of Granada in 1492AD, Iberian settlement underwent a sustained spatial reorganisation from Roman and early Islamic river-valley *madinas* along the Guadalquivir, Guadiana and Tagus towards Christian Reconquista *repoblación* towns on the Meseta and maritime ports on the Atlantic and Levantine coasts [@Bairoch1988; @Buringh2021; @Russell1958]. Bioarchaeological and material studies of frontier Islamic sites such as Santarém and Ciudad de Vascos [@Macroberts2024Shrouded; @Ares2017Glass], northern Galician castellar lordships such as San Salvador de Todea [@Novoa2022Origen] and urban Jewish quarters in Barcelona [@Martinezarino2020Jewish] confirm that town survival depended closely on irrigation infrastructure, trade corridors and military frontier shifts.

Figure 1 maps all 469 included habitation localities across the five sub-regional polygons, and Table 1 breaks down sub-regional locality totals, land area, corpus provenance and recording density per 10k km².

<figure class="crd-figure-block" id="fig:gazetteer_map">
<img class="crd-figure-img" src="/artefacts/project_magnetic/1.0-mediaeval-iberia-settlements/mediaeval_iberia_regional_map.png" alt="fig:gazetteer_map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 508 mediaeval Iberian habitation localities across five sub-regions, 711-1492AD.</figcaption>
</figure>

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Total Sites</th><th class="crd-th">Buringh</th><th class="crd-th">Pleiades</th><th class="crd-th">GeoNames</th><th class="crd-th">Sites per 10k km²</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Al-Andalus, Andalusia and Emirate of Granada</strong></td><td class="crd-td">118.761</td><td class="crd-td">163</td><td class="crd-td">78</td><td class="crd-td">69</td><td class="crd-td">0</td><td class="crd-td">13,73</td></tr>
<tr><td class="crd-td"><strong>Crown of Castile-León and Galicia</strong></td><td class="crd-td">269.919,4</td><td class="crd-td">137</td><td class="crd-td">96</td><td class="crd-td">27</td><td class="crd-td">0</td><td class="crd-td">5,08</td></tr>
<tr><td class="crd-td"><strong>Crown of Aragon, Navarre and Balearics</strong></td><td class="crd-td">123.550,2</td><td class="crd-td">103</td><td class="crd-td">67</td><td class="crd-td">23</td><td class="crd-td">0</td><td class="crd-td">8,34</td></tr>
<tr><td class="crd-td"><strong>Kingdom of Portugal and Atlantic Isles</strong></td><td class="crd-td">85.325,6</td><td class="crd-td">52</td><td class="crd-td">44</td><td class="crd-td">3</td><td class="crd-td">0</td><td class="crd-td">6,09</td></tr>
<tr><td class="crd-td"><strong>Canary Islands (Guanche and Castilian)</strong></td><td class="crd-td">7.482</td><td class="crd-td">14</td><td class="crd-td">2</td><td class="crd-td">0</td><td class="crd-td">12</td><td class="crd-td">18,71</td></tr>
<tr><td class="crd-td"><strong>Mediaeval Iberia Total</strong></td><td class="crd-td">605.038,2</td><td class="crd-td">469</td><td class="crd-td">287</td><td class="crd-td">122</td><td class="crd-td">12</td><td class="crd-td">7,75</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional locality counts, source corpus composition and recording density (sites per 10k km²) across five sub-regions.</figcaption>
</figure>

# Provenance Ledger and Jurisdictional Distribution

Every settlement in the gazetteer passed through a four-wave saturation protocol designed to exhaust primary historical urban series and ancient-world gazetteers prior to any municipal supplementation. Wave 1 ingested 307 urban population trajectories from the Buringh European Urban Register (700-2000) [@Buringh2021]. Wave 2 added 192 continuous ancient-to-mediaeval settlements from the Pleiades Ancient World Gazetteer (a 62,54% marginal gain), enriching rural Guadalquivir, Ebro and Meseta coverage. Wave 3 audited longitudinal backfill directories and added zero records. Wave 4 conducted a Macaronesian coverage sweep, adding 9 Canary Islands anchors from the GeoNames Municipal Gazetteer Supplement (a 1,8% marginal gain), while 85 duplicate or out-of-domain candidates were excluded (Table 2).

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Corpus</th><th class="crd-th">Wave</th><th class="crd-th">Archive Class</th><th class="crd-th">Included Sites</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Buringh European Urban Register (700-2000)</strong></td><td class="crd-td">Wave 1</td><td class="crd-td">Primary urban historical register</td><td class="crd-td">287</td><td class="crd-td">61,19%</td></tr>
<tr><td class="crd-td"><strong>Pleiades Ancient World Gazetteer</strong></td><td class="crd-td">Wave 2</td><td class="crd-td">Scholarly ancient gazetteer</td><td class="crd-td">122</td><td class="crd-td">26,01%</td></tr>
<tr><td class="crd-td"><strong>DARMC Mediaeval Major Towns 1200CE</strong></td><td class="crd-td">Wave 4</td><td class="crd-td">Primary urban historical register</td><td class="crd-td">15</td><td class="crd-td">3,2%</td></tr>
<tr><td class="crd-td"><strong>Chandler V2 Historical Urban Population</strong></td><td class="crd-td">Wave 4</td><td class="crd-td">Primary urban historical register</td><td class="crd-td">15</td><td class="crd-td">3,2%</td></tr>
<tr><td class="crd-td"><strong>GeoNames Municipal Gazetteer Supplement</strong></td><td class="crd-td">Wave 4</td><td class="crd-td">Municipal spatial supplement</td><td class="crd-td">12</td><td class="crd-td">2,56%</td></tr>
<tr><td class="crd-td"><strong>DARMC Mediaeval Major Towns 1000CE</strong></td><td class="crd-td">Wave 4</td><td class="crd-td">Primary urban historical register</td><td class="crd-td">8</td><td class="crd-td">1,71%</td></tr>
<tr><td class="crd-td"><strong>DARMC Mediaeval Major Towns 1450CE</strong></td><td class="crd-td">Wave 4</td><td class="crd-td">Primary urban historical register</td><td class="crd-td">7</td><td class="crd-td">1,49%</td></tr>
<tr><td class="crd-td"><strong>DARMC Mediaeval Major Towns 814CE</strong></td><td class="crd-td">Wave 4</td><td class="crd-td">Primary urban historical register</td><td class="crd-td">3</td><td class="crd-td">0,64%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Source provenance ledger across 508 included localities in Mediaeval Iberia.</figcaption>
</figure>

Mapped onto contemporary national borders (Table 3), Spain accounts for 438 localities (86,22%) and Portugal for 60 localities (11,81%). Nine Pyrenean and Roussillon sites in modern France (1,77%) — including historical Catalan-Aragonese localities such as Illiberris-Elne and Portus Veneris alongside narrow western Pyrenean mask overlaps — and Andorra la Vella (1 site, 0,2%) complete the 508-locality inventory.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Localities</th><th class="crd-th">Share of Gazetteer</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Spain</td><td class="crd-td">407</td><td class="crd-td">86,78%</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Portugal</td><td class="crd-td">52</td><td class="crd-td">11,09%</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">France</td><td class="crd-td">8</td><td class="crd-td">1,71%</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Andorra</td><td class="crd-td">1</td><td class="crd-td">0,21%</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Gibraltar</td><td class="crd-td">1</td><td class="crd-td">0,21%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Modern jurisdictional distribution of the 508 recorded mediaeval Iberian localities.</figcaption>
</figure>

# Settlement Hierarchy and Principal Cities

Table 4 lists the 25 largest recorded mediaeval Iberian cities ordered by peak population across 711-1492AD, drawn dynamically from the chapter summary. The ranking captures the polycentric character of the peninsula across four distinct urban epochs: Umayyad Cordoba (100k in 1000AD), Merida (40k in 900AD), Jerez de la Frontera (19k in 1000AD), Almeria (18k in 1000AD), Ecija (18k in 1000AD), Cartagena (17k in 1000AD) and Badajoz (16k in 1000AD) represent the Caliphate zenith; Leon (40k in 1200AD) marks early Leonese royal consolidation; Sevilla (90k in 1300AD), Granada (50k in 1300AD), Barcelona (48k in 1300AD), Palma (17k in 1300AD) and Salamanca (15k in 1300AD) reflect the high-mediaeval commercial and Nasrid peak; Toledo (45k in 1400AD), Burgos (27k in 1400AD), Zaragoza (20k in 1400AD) and Porto (18k in 1400AD) anchor the late-fourteenth-century transition; and Valencia (71,3k), Lisboa (64,1k), Valladolid (29k), Plasencia (23k), Jaen (21,7k), Medina del Campo (20,1k), Ubeda (18,9k), Alcazar de San Juan (17,2k) and Medina de Rioseco (14,8k) peak at the 1492AD horizon.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">City</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Peak Year</th><th class="crd-th">Peak Pop.</th><th class="crd-th">1492AD Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Cordoba</td><td class="crd-td">Spain</td><td class="crd-td">Al-Andalus</td><td class="crd-td">38,05°N, 4,89°W</td><td class="crd-td">1000AD</td><td class="crd-td">450k</td><td class="crd-td">30,5k</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Granada</td><td class="crd-td">Spain</td><td class="crd-td">Al-Andalus</td><td class="crd-td">37,18°N, 3,6°W</td><td class="crd-td">1476AD</td><td class="crd-td">200k</td><td class="crd-td">140,9k</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Seville</td><td class="crd-td">Spain</td><td class="crd-td">Al-Andalus</td><td class="crd-td">37,39°N, 5,98°W</td><td class="crd-td">1200AD</td><td class="crd-td">150k</td><td class="crd-td">47k</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Valencia</td><td class="crd-td">Spain</td><td class="crd-td">Aragon-Catalonia</td><td class="crd-td">39,47°N, 0,37°W</td><td class="crd-td">1492AD</td><td class="crd-td">71,3k</td><td class="crd-td">71,3k</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Lisboa</td><td class="crd-td">Portugal</td><td class="crd-td">Portugal</td><td class="crd-td">38,72°N, 9,13°W</td><td class="crd-td">1492AD</td><td class="crd-td">64,1k</td><td class="crd-td">64,1k</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Barcelona</td><td class="crd-td">Spain</td><td class="crd-td">Aragon-Catalonia</td><td class="crd-td">41,38°N, 2,18°E</td><td class="crd-td">1300AD</td><td class="crd-td">48k</td><td class="crd-td">21,1k</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Toledo</td><td class="crd-td">Spain</td><td class="crd-td">Castile-Leon</td><td class="crd-td">39,87°N, 4,02°W</td><td class="crd-td">1400AD</td><td class="crd-td">45k</td><td class="crd-td">32,9k</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Leon</td><td class="crd-td">Spain</td><td class="crd-td">Castile-Leon</td><td class="crd-td">42,6°N, 5,57°W</td><td class="crd-td">1200AD</td><td class="crd-td">40k</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Merida</td><td class="crd-td">Spain</td><td class="crd-td">Castile-Leon</td><td class="crd-td">38,92°N, 6,33°W</td><td class="crd-td">900AD</td><td class="crd-td">40k</td><td class="crd-td">9,7k</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Valladolid</td><td class="crd-td">Spain</td><td class="crd-td">Castile-Leon</td><td class="crd-td">41,66°N, 4,72°W</td><td class="crd-td">1492AD</td><td class="crd-td">38,8k</td><td class="crd-td">38,8k</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Burgos</td><td class="crd-td">Spain</td><td class="crd-td">Castile-Leon</td><td class="crd-td">42,35°N, 3,7°W</td><td class="crd-td">1450AD</td><td class="crd-td">37,5k</td><td class="crd-td">15,5k</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Bobastro</td><td class="crd-td">Spain</td><td class="crd-td">Al-Andalus</td><td class="crd-td">36,72°N, 4,42°W</td><td class="crd-td">900AD</td><td class="crd-td">36k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Santa Cruz de Tenerife</td><td class="crd-td">Spain</td><td class="crd-td">canaries_med</td><td class="crd-td">28,47°N, 16,25°W</td><td class="crd-td">1492AD</td><td class="crd-td">35,5k</td><td class="crd-td">35,5k</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Almeria</td><td class="crd-td">Spain</td><td class="crd-td">Al-Andalus</td><td class="crd-td">36,84°N, 2,46°W</td><td class="crd-td">1000AD</td><td class="crd-td">35k</td><td class="crd-td">23,7k</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Cartagena</td><td class="crd-td">Spain</td><td class="crd-td">Al-Andalus</td><td class="crd-td">37,63°N, 1°W</td><td class="crd-td">1000AD</td><td class="crd-td">33k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">Cadiz</td><td class="crd-td">Spain</td><td class="crd-td">Al-Andalus</td><td class="crd-td">36,53°N, 6,29°W</td><td class="crd-td">750AD</td><td class="crd-td">28,8k</td><td class="crd-td">11,4k</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Palma</td><td class="crd-td">Spain</td><td class="crd-td">Aragon-Catalonia</td><td class="crd-td">39,57°N, 2,65°E</td><td class="crd-td">1100AD</td><td class="crd-td">27k</td><td class="crd-td">15k</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">Coimbra</td><td class="crd-td">Portugal</td><td class="crd-td">Portugal</td><td class="crd-td">40,21°N, 8,42°W</td><td class="crd-td">1200AD</td><td class="crd-td">25k</td><td class="crd-td">7k</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">Plasencia</td><td class="crd-td">Spain</td><td class="crd-td">Castile-Leon</td><td class="crd-td">40,03°N, 6,08°W</td><td class="crd-td">1492AD</td><td class="crd-td">23k</td><td class="crd-td">23k</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">Elvira</td><td class="crd-td">Spain</td><td class="crd-td">Al-Andalus</td><td class="crd-td">36,5°N, 4,78°W</td><td class="crd-td">1000AD</td><td class="crd-td">22k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>21</strong></td><td class="crd-td">Jaen</td><td class="crd-td">Spain</td><td class="crd-td">Al-Andalus</td><td class="crd-td">37,77°N, 3,78°W</td><td class="crd-td">1492AD</td><td class="crd-td">21,7k</td><td class="crd-td">21,7k</td></tr>
<tr><td class="crd-td"><strong>22</strong></td><td class="crd-td">Zaragoza</td><td class="crd-td">Spain</td><td class="crd-td">Aragon-Catalonia</td><td class="crd-td">41,65°N, 0,89°W</td><td class="crd-td">1311AD</td><td class="crd-td">21k</td><td class="crd-td">19,8k</td></tr>
<tr><td class="crd-td"><strong>23</strong></td><td class="crd-td">Telde</td><td class="crd-td">Spain</td><td class="crd-td">canaries_med</td><td class="crd-td">27,99°N, 15,42°W</td><td class="crd-td">1492AD</td><td class="crd-td">20,7k</td><td class="crd-td">20,7k</td></tr>
<tr><td class="crd-td"><strong>24</strong></td><td class="crd-td">Jerez de la Frontera</td><td class="crd-td">Spain</td><td class="crd-td">Al-Andalus</td><td class="crd-td">36,69°N, 6,13°W</td><td class="crd-td">1492AD</td><td class="crd-td">20,4k</td><td class="crd-td">20,4k</td></tr>
<tr><td class="crd-td"><strong>25</strong></td><td class="crd-td">Medina del Campo</td><td class="crd-td">Spain</td><td class="crd-td">Castile-Leon</td><td class="crd-td">41,3°N, 4,92°W</td><td class="crd-td">1492AD</td><td class="crd-td">20,1k</td><td class="crd-td">20,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Top 25 recorded mediaeval Iberian cities ranked by peak population across 711-1492AD.</figcaption>
</figure>

# Chronological Horizon Coverage and Limitations

Stratifying all 469 settlements across eleven chronological steps from 750AD to 1492AD tracks both the expansion of documented urban life and the mid-fourteenth-century demographic shock (Table 5). Active entries climb from 356 in 750AD to 428 in 1000AD, 480 in 1200AD, 496 in 1300-1347AD and 507 in 1492AD (with Lucentum closing after 1000AD as population consolidated at Alicante). The impact of the Black Death and recurring fourteenth-century plague waves [@Benedictow2004; @Campbell2016; @Izdebski2022] registers clearly in the urban register: cities of 5k or more dropped from 80 (990,8k aggregate residents) in 1300AD to 52 (710,8k) in 1400AD before recovering to 80 towns (996,5k) by 1492AD.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Year</th><th class="crd-th">Active Sites</th><th class="crd-th">Share</th><th class="crd-th">Towns 5k+</th><th class="crd-th">Cities 10k+</th><th class="crd-th">Pop. 10k+</th><th class="crd-th">Median</th><th class="crd-th">Largest City</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>750AD</strong></td><td class="crd-td">327</td><td class="crd-td">69,72%</td><td class="crd-td">12</td><td class="crd-td">9</td><td class="crd-td">197k</td><td class="crd-td">1,4k</td><td class="crd-td">36,7k</td></tr>
<tr><td class="crd-td"><strong>800AD</strong></td><td class="crd-td">342</td><td class="crd-td">72,92%</td><td class="crd-td">18</td><td class="crd-td">11</td><td class="crd-td">362,2k</td><td class="crd-td">1,3k</td><td class="crd-td">160k</td></tr>
<tr><td class="crd-td"><strong>900AD</strong></td><td class="crd-td">369</td><td class="crd-td">78,68%</td><td class="crd-td">24</td><td class="crd-td">15</td><td class="crd-td">311k</td><td class="crd-td">1,5k</td><td class="crd-td">40k</td></tr>
<tr><td class="crd-td"><strong>1000AD</strong></td><td class="crd-td">396</td><td class="crd-td">84,43%</td><td class="crd-td">36</td><td class="crd-td">20</td><td class="crd-td">926,2k</td><td class="crd-td">1,7k</td><td class="crd-td">450k</td></tr>
<tr><td class="crd-td"><strong>1100AD</strong></td><td class="crd-td">407</td><td class="crd-td">86,78%</td><td class="crd-td">46</td><td class="crd-td">23</td><td class="crd-td">612,4k</td><td class="crd-td">2k</td><td class="crd-td">116,2k</td></tr>
<tr><td class="crd-td"><strong>1200AD</strong></td><td class="crd-td">446</td><td class="crd-td">95,1%</td><td class="crd-td">64</td><td class="crd-td">26</td><td class="crd-td">703,8k</td><td class="crd-td">2k</td><td class="crd-td">150k</td></tr>
<tr><td class="crd-td"><strong>1300AD</strong></td><td class="crd-td">462</td><td class="crd-td">98,51%</td><td class="crd-td">84</td><td class="crd-td">28</td><td class="crd-td">735,8k</td><td class="crd-td">2k</td><td class="crd-td">90k</td></tr>
<tr><td class="crd-td"><strong>1347AD</strong></td><td class="crd-td">461</td><td class="crd-td">98,29%</td><td class="crd-td">59</td><td class="crd-td">27</td><td class="crd-td">663,2k</td><td class="crd-td">2k</td><td class="crd-td">74,4k</td></tr>
<tr><td class="crd-td"><strong>1400AD</strong></td><td class="crd-td">466</td><td class="crd-td">99,36%</td><td class="crd-td">56</td><td class="crd-td">27</td><td class="crd-td">687,6k</td><td class="crd-td">2k</td><td class="crd-td">90k</td></tr>
<tr><td class="crd-td"><strong>1450AD</strong></td><td class="crd-td">466</td><td class="crd-td">99,36%</td><td class="crd-td">64</td><td class="crd-td">28</td><td class="crd-td">801,9k</td><td class="crd-td">2k</td><td class="crd-td">165k</td></tr>
<tr><td class="crd-td"><strong>1492AD</strong></td><td class="crd-td">466</td><td class="crd-td">99,36%</td><td class="crd-td">83</td><td class="crd-td">35</td><td class="crd-td">891,5k</td><td class="crd-td">2,3k</td><td class="crd-td">140,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Chronological horizon coverage and urban size-tier distribution across 508 mediaeval Iberian localities, 750-1492AD.</figcaption>
</figure>

Four methodological caveats govern interpretation of this gazetteer. First, the 192 continuous Roman-to-mediaeval localities imported from the Pleiades Ancient World Gazetteer carry conservative baseline tiers (principally 510 inhabitants) where mediaeval hearth surveys are lacking, preventing false inflation of rural markets while understating occasional local growth. Second, the 9 Canary Islands anchors drawn from the GeoNames Municipal Gazetteer Supplement — notably Telde (assigned a flat 14,8k tier across 750-1492AD, which places it 27th overall, just outside Table 4) — serve as static spatial anchors rather than dated pre-conquest Guanche demographic series. Third, raster mask assignment places Palma de Mallorca inside the Aragon-Catalonia coastal polygon rather than the Balearic and Canary Islands polygon, and captures nine northern Pyrenean and Roussillon localities inside modern France alongside Andorra la Vella. Fourth, late-fifteenth-century city totals reflect pre-expulsion urban footprints around 1492AD prior to the full demographic dislocation of the Alhambra Decree and subsequent sixteenth-century Morisco expulsions.

# Sources
