---
title: "Post-Colonial Sahel States (1960-Present)"
subtitle: "Settlement Gazetteer: 3.114 Assessed Localities and 402 Major Centres"
date: "24 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: postcolonial_sahel_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 3.114 assessed settlements across seven core Sahelian states and ten neighbouring jurisdictions between 1960AD and 2025AD."
hero_label: "fig:hero-settlements-sahel"

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
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This companion gazetteer catalogues spatial coordinates, administrative scope and multi-decade population series across 3.114 individually assessed settlements (10.514 dated observations) spanning seven core Sahelian states and ten bordering jurisdictions from 1960AD to 2025AD. Screened from 5.898 candidate census localities and Africapolis urban polygons (2.784 excluded), the full ledger covers 3.083 city-proper units and 31 metropolitan agglomerations across all 84 Admin-1 Sahelian sub-regions. To preserve compact tabular readability without losing full accounting coverage, this volume presents complete summary tables across all 17 jurisdictions and all 84 sub-regions alongside detailed multi-benchmark tables for every urban centre reaching at least 25k residents (402 cities and towns). Active interpolated settlements grow from 1.165 in 1960AD to 1.172 in 1980AD, 1.211 in 2000AD and 2.935 in 2010AD before moderating to 918 in 2025AD, anchored at the summit by Dakar (4,39M), Bamako (4,24M), Ouagadougou (3,41M), N'Djamena (1,99M), Nouakchott (1,45M) and Niamey (1,43M).



# Background

Post-colonial Sahelian urbanisation exhibits an acute contrast between primate capital agglomerations and dispersed rural communes. Whereas coastal capitals such as Dakar inherited colonial port infrastructure [@Bank2015ReviewUrbanization; @Cheikh2025ImpactsUrbanization], inland capitals - Nouakchott, Bamako, Ouagadougou, Niamey and N'Djamena - absorbed successive waves of drought-displaced pastoralists after 1968AD and 1983AD alongside high natural increase [@Doumbia2019EthnographyUrban; @Bank2021RevueUrbanisation; @Younoussi2013MigrationEmploi]. Concurrently, secondary regional centres such as Touba, Bobo-Dioulasso, Maradi, Zinder, Sikasso, Moundou and Nouadhibou expanded into multi-hundred-thousand-inhabitant nodes linking agricultural hinterlands with trans-Saharan and coastal markets [@ANSD2024SenegalRGPH5; @INSD2022BurkinaRGPH5; @INSTAT2023MaliRGPH5; @OECD2024Africapolis].

# Methodology

## Candidate Screening and Scope Separation

Settlement records were compiled from national General Population and Housing Censuses (RGPH) across Senegal, Mauritania, Mali, Burkina Faso, Niger, Chad and The Gambia, UNSD Demographic Yearbook tables and the OECD/SWAC Africapolis 2024 Update [@ANSD2024SenegalRGPH5; @INSD2022BurkinaRGPH5; @INSTAT2023MaliRGPH5; @OECD2024Africapolis]. Of 5.898 raw records, 2.784 duplicate aliases and unverified loci were removed, leaving 3.114 assessed settlements (3.083 city proper, marked C; 31 metropolitan agglomerations, marked M).

## Country-Level Gazetteer Overview

Table \ref{tab:country-summary} summarises all 3.114 settlements by jurisdiction, reporting total entries, city-proper versus metropolitan counts, chronological observations, counts of centres reaching 25k or higher, and the leading city or agglomeration in each state. Interpolated country gazetteer tables below report values at 1960AD, 1980AD, 2000AD, 2015AD and 2025AD bounded strictly within each site's observed chronological span, with a hyphen (-) indicating pre-foundation or unenumerated intervals.

<figure class="crd-table-figure" id="tab:country-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Role</th><th class="crd-th">Sites</th><th class="crd-th">City / Metro</th><th class="crd-th">&gt;= 25k</th><th class="crd-th">Obs</th><th class="crd-th">Leading Centre</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mauritania</strong></td><td class="crd-td">Core</td><td class="crd-td">96</td><td class="crd-td">95/1</td><td class="crd-td">15</td><td class="crd-td">485</td><td class="crd-td">Nouakchott (Agglomeration) (1,45M)</td></tr>
<tr><td class="crd-td"><strong>Mali</strong></td><td class="crd-td">Core</td><td class="crd-td">150</td><td class="crd-td">144/6</td><td class="crd-td">58</td><td class="crd-td">999</td><td class="crd-td">Bamako (Agglomeration) (4,24M)</td></tr>
<tr><td class="crd-td"><strong>Niger</strong></td><td class="crd-td">Core</td><td class="crd-td">2.059</td><td class="crd-td">2.058/1</td><td class="crd-td">38</td><td class="crd-td">4.894</td><td class="crd-td">Niamey (Agglomeration) (1,43M)</td></tr>
<tr><td class="crd-td"><strong>Chad</strong></td><td class="crd-td">Core</td><td class="crd-td">152</td><td class="crd-td">151/1</td><td class="crd-td">63</td><td class="crd-td">746</td><td class="crd-td">Ndjamena (Agglomeration) (1,99M)</td></tr>
<tr><td class="crd-td"><strong>Senegal</strong></td><td class="crd-td">Core</td><td class="crd-td">169</td><td class="crd-td">168/1</td><td class="crd-td">55</td><td class="crd-td">1.028</td><td class="crd-td">Dakar (Agglomeration) (4,39M)</td></tr>
<tr><td class="crd-td"><strong>Burkina Faso</strong></td><td class="crd-td">Core</td><td class="crd-td">151</td><td class="crd-td">138/13</td><td class="crd-td">66</td><td class="crd-td">886</td><td class="crd-td">Ouagadougou (Agglomeration) (3,41M)</td></tr>
<tr><td class="crd-td"><strong>The Gambia</strong></td><td class="crd-td">Core</td><td class="crd-td">59</td><td class="crd-td">57/2</td><td class="crd-td">11</td><td class="crd-td">225</td><td class="crd-td">Banjul (Agglomeration) (1,15M)</td></tr>
<tr><td class="crd-td"><strong>Benin</strong></td><td class="crd-td">Border</td><td class="crd-td">20</td><td class="crd-td">20/0</td><td class="crd-td">4</td><td class="crd-td">78</td><td class="crd-td">Malanville (81,8k)</td></tr>
<tr><td class="crd-td"><strong>Cameroon</strong></td><td class="crd-td">Border</td><td class="crd-td">30</td><td class="crd-td">30/0</td><td class="crd-td">13</td><td class="crd-td">166</td><td class="crd-td">Ndjamena/Kousseri [CMR] (144,9k)</td></tr>
<tr><td class="crd-td"><strong>Central African Republic</strong></td><td class="crd-td">Border</td><td class="crd-td">4</td><td class="crd-td">4/0</td><td class="crd-td">1</td><td class="crd-td">26</td><td class="crd-td">Paoua (59,9k)</td></tr>
<tr><td class="crd-td"><strong>Ghana</strong></td><td class="crd-td">Border</td><td class="crd-td">26</td><td class="crd-td">24/2</td><td class="crd-td">11</td><td class="crd-td">109</td><td class="crd-td">Bolgatanga (Agglomeration) (207,7k)</td></tr>
<tr><td class="crd-td"><strong>Guinea</strong></td><td class="crd-td">Border</td><td class="crd-td">12</td><td class="crd-td">9/3</td><td class="crd-td">8</td><td class="crd-td">56</td><td class="crd-td">Siguiri (303k)</td></tr>
<tr><td class="crd-td"><strong>Guinea-Bissau</strong></td><td class="crd-td">Border</td><td class="crd-td">15</td><td class="crd-td">15/0</td><td class="crd-td">1</td><td class="crd-td">55</td><td class="crd-td">Gabú (86,7k)</td></tr>
<tr><td class="crd-td"><strong>Ivory Coast</strong></td><td class="crd-td">Border</td><td class="crd-td">39</td><td class="crd-td">39/0</td><td class="crd-td">8</td><td class="crd-td">156</td><td class="crd-td">Ferkessédougou (82k)</td></tr>
<tr><td class="crd-td"><strong>Nigeria</strong></td><td class="crd-td">Border</td><td class="crd-td">112</td><td class="crd-td">111/1</td><td class="crd-td">43</td><td class="crd-td">517</td><td class="crd-td">Katsina (1,27M)</td></tr>
<tr><td class="crd-td"><strong>Sudan</strong></td><td class="crd-td">Border</td><td class="crd-td">8</td><td class="crd-td">8/0</td><td class="crd-td">4</td><td class="crd-td">45</td><td class="crd-td">Al-Junaynah (231,6k)</td></tr>
<tr><td class="crd-td"><strong>Togo</strong></td><td class="crd-td">Border</td><td class="crd-td">12</td><td class="crd-td">12/0</td><td class="crd-td">3</td><td class="crd-td">43</td><td class="crd-td">Dapaong (123,7k)</td></tr>
<tr><td class="crd-td"><strong>Total (17 Jurisdictions)</strong></td><td class="crd-td">All</td><td class="crd-td">3.114</td><td class="crd-td">3.083/31</td><td class="crd-td">402</td><td class="crd-td">10.514</td><td class="crd-td">Dakar (Agglomeration) (4,39M)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Jurisdictional summary of all 3.114 assessed settlements across seven core Sahelian states and ten neighbouring buffer countries.</figcaption>
</figure>

# Testing and Validation

Ordinary least-squares rank-size regression across the upper urban hierarchy (n=180 fitted settlements) gives $q = 1,07$ ($R^2 = 0,98$), while regression across 2.951 spatially deduplicated peaks in Figure \ref{fig:settlements-rank} yields $q = 0,98$ ($R^2 = 0,99$). Sub-national consistency checks confirm full 84/84 Admin-1 coverage with zero empty inhabited regions and strict separation between municipal boundaries and Africapolis urban extents [@Runfola2020GeoBoundaries; @OECD2024Africapolis].

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-postcolonial-sahel-settlements/fig_03_rank_size.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Zipf rank-size distribution across 2.951 spatially deduplicated peaks (q = 0,98, R² = 0,99) and top ten sub-regional densities in 2025AD.</figcaption>
</figure>

# Results

## Mauritania

Table \ref{tab:mrt} lists all 15 Mauritanian centres reaching 25k residents (out of 96 assessed Mauritanian localities), led by Nouakchott (1,45M), the iron-ore and fishing port of Nouadhibou (173,5k), the Hodh ech Chargui refugee town of Mbera (117k) and Kiffa (84,1k) [@OECD2024Africapolis].

<figure class="crd-table-figure" id="tab:mrt">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1960AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2015AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Nouakchott (Agglomeration) [M]</strong></td><td class="crd-td">MRT: 18,08, -15,92</td><td class="crd-td">-</td><td class="crd-td">184,1k</td><td class="crd-td">558,2k</td><td class="crd-td">1,06M</td><td class="crd-td">1,45M</td><td class="crd-td">1,45M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Nouakchott [C]</strong></td><td class="crd-td">MRT: 18,08, -15,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">558,2k</td><td class="crd-td">1,06M</td><td class="crd-td">-</td><td class="crd-td">1,45M (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Nouadhibou [C]</strong></td><td class="crd-td">MRT: 20,96, -17,03</td><td class="crd-td">8,8k</td><td class="crd-td">29,2k</td><td class="crd-td">72,3k</td><td class="crd-td">129,6k</td><td class="crd-td">166,7k</td><td class="crd-td">173,5k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Kiffa [C]</strong></td><td class="crd-td">MRT: 16,62, -11,38</td><td class="crd-td">7k</td><td class="crd-td">14,1k</td><td class="crd-td">25,7k</td><td class="crd-td">56,9k</td><td class="crd-td">73,1k</td><td class="crd-td">73,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Zoueiratt [C]</strong></td><td class="crd-td">MRT: 22,74, -12,47</td><td class="crd-td">-</td><td class="crd-td">19,9k</td><td class="crd-td">33,3k</td><td class="crd-td">47,2k</td><td class="crd-td">46,3k</td><td class="crd-td">62,4k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Mbera [C]</strong></td><td class="crd-td">MRT: 15,85, -5,79</td><td class="crd-td">524</td><td class="crd-td">937</td><td class="crd-td">1,4k</td><td class="crd-td">50k</td><td class="crd-td">60k</td><td class="crd-td">60k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Kaédi [C]</strong></td><td class="crd-td">MRT: 16,16, -13,5</td><td class="crd-td">11,2k</td><td class="crd-td">22,7k</td><td class="crd-td">31,3k</td><td class="crd-td">48,9k</td><td class="crd-td">55,6k</td><td class="crd-td">57,7k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Rosso [C]</strong></td><td class="crd-td">MRT: 16,52, -15,8</td><td class="crd-td">8,9k</td><td class="crd-td">18,5k</td><td class="crd-td">29,9k</td><td class="crd-td">34,3k</td><td class="crd-td">30,5k</td><td class="crd-td">42,7k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Sélibabi [C]</strong></td><td class="crd-td">MRT: 15,16, -12,17</td><td class="crd-td">5,3k</td><td class="crd-td">9,6k</td><td class="crd-td">13,3k</td><td class="crd-td">30,1k</td><td class="crd-td">41,7k</td><td class="crd-td">41,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Guerou [C]</strong></td><td class="crd-td">MRT: 16,83, -11,81</td><td class="crd-td">4k</td><td class="crd-td">8,2k</td><td class="crd-td">12,9k</td><td class="crd-td">25,3k</td><td class="crd-td">38,1k</td><td class="crd-td">38,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Aïoun [C]</strong></td><td class="crd-td">MRT: 16,65, -9,61</td><td class="crd-td">5,8k</td><td class="crd-td">10,1k</td><td class="crd-td">9,7k</td><td class="crd-td">26,7k</td><td class="crd-td">33k</td><td class="crd-td">34,8k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Néma [C]</strong></td><td class="crd-td">MRT: 16,62, -7,27</td><td class="crd-td">6,9k</td><td class="crd-td">12,5k</td><td class="crd-td">12,8k</td><td class="crd-td">24k</td><td class="crd-td">31,8k</td><td class="crd-td">34,7k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Atar [C]</strong></td><td class="crd-td">MRT: 20,5, -13,05</td><td class="crd-td">7,4k</td><td class="crd-td">17,6k</td><td class="crd-td">23k</td><td class="crd-td">25,6k</td><td class="crd-td">19,6k</td><td class="crd-td">34k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Tintane [C]</strong></td><td class="crd-td">MRT: 16,38, -10,17</td><td class="crd-td">3k</td><td class="crd-td">5,3k</td><td class="crd-td">7,6k</td><td class="crd-td">14,1k</td><td class="crd-td">16,3k</td><td class="crd-td">32,3k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Tembedra [C]</strong></td><td class="crd-td">MRT: 16,24, -8,18</td><td class="crd-td">3,6k</td><td class="crd-td">8k</td><td class="crd-td">8,5k</td><td class="crd-td">15,5k</td><td class="crd-td">23,4k</td><td class="crd-td">29,9k (2023AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Mauritanian urban centres reaching 25k residents or more (1960AD to 2025AD).</figcaption>
</figure>

## Mali

Table \ref{tab:mli} details all 58 Malian centres reaching 25k residents (out of 150 assessed Malian localities), anchored by Bamako (4,24M agglomeration; 4,17M city proper in 2023AD), Sikasso (434,7k), Kalabancoro (422,5k), Ségou (372,4k), Kayes (306,4k), Koutiala (271,2k), Kati (214,6k) and Mopti-Sévaré (200,8k) [@INSTAT2023MaliRGPH5; @Doumbia2019EthnographyUrban].

<figure class="crd-table-figure" id="tab:mli">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1960AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2015AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bamako (Agglomeration) [M]</strong></td><td class="crd-td">MLI: 12,64, -8</td><td class="crd-td">128,3k</td><td class="crd-td">494k</td><td class="crd-td">1,23M</td><td class="crd-td">2,78M</td><td class="crd-td">4,24M</td><td class="crd-td">4,24M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bamako [C]</strong></td><td class="crd-td">MLI: 12,64, -8</td><td class="crd-td">130k</td><td class="crd-td">404k</td><td class="crd-td">919k</td><td class="crd-td">3M</td><td class="crd-td">-</td><td class="crd-td">4,17M (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Sikasso [C]</strong></td><td class="crd-td">MLI: 11,31, -5,7</td><td class="crd-td">21k</td><td class="crd-td">55k</td><td class="crd-td">150,8k</td><td class="crd-td">279,2k</td><td class="crd-td">393,6k</td><td class="crd-td">434,7k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Koutiala [C]</strong></td><td class="crd-td">MLI: 12,38, -5,47</td><td class="crd-td">10,4k</td><td class="crd-td">33,6k</td><td class="crd-td">87,1k</td><td class="crd-td">198,4k</td><td class="crd-td">296,6k</td><td class="crd-td">296,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kayes [C]</strong></td><td class="crd-td">MLI: 14,44, -11,45</td><td class="crd-td">28,9k</td><td class="crd-td">50k</td><td class="crd-td">80,6k</td><td class="crd-td">176,8k</td><td class="crd-td">274,1k</td><td class="crd-td">274,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ségou [C]</strong></td><td class="crd-td">MLI: 13,42, -6,25</td><td class="crd-td">20,9k</td><td class="crd-td">72,9k</td><td class="crd-td">115,4k</td><td class="crd-td">214,8k</td><td class="crd-td">245,4k</td><td class="crd-td">245,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sikasso (Agglomeration) [M]</strong></td><td class="crd-td">MLI: 11,31, -5,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">226,6k (2009AD)</td></tr>
<tr><td class="crd-td"><strong>Kati [C]</strong></td><td class="crd-td">MLI: 12,74, -8,07</td><td class="crd-td">15,6k</td><td class="crd-td">28,3k</td><td class="crd-td">58,5k</td><td class="crd-td">128k</td><td class="crd-td">-</td><td class="crd-td">186k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Gao [C]</strong></td><td class="crd-td">MLI: 16,26, -0,04</td><td class="crd-td">11,9k</td><td class="crd-td">37,7k</td><td class="crd-td">57,9k</td><td class="crd-td">105,9k</td><td class="crd-td">150,9k</td><td class="crd-td">150,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kayes (Agglomeration) [M]</strong></td><td class="crd-td">MLI: 14,44, -11,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">149,1k (2009AD)</td></tr>
<tr><td class="crd-td"><strong>Koutiala (Agglomeration) [M]</strong></td><td class="crd-td">MLI: 12,38, -5,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">141,4k (2009AD)</td></tr>
<tr><td class="crd-td"><strong>Ségou (Agglomeration) [M]</strong></td><td class="crd-td">MLI: 13,42, -6,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">133,5k (2009AD)</td></tr>
<tr><td class="crd-td"><strong>Mopti [C]</strong></td><td class="crd-td">MLI: 14,48, -4,18</td><td class="crd-td">23,7k</td><td class="crd-td">47,8k</td><td class="crd-td">56,2k</td><td class="crd-td">65,4k</td><td class="crd-td">87,5k</td><td class="crd-td">132,7k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Mopti (Agglomeration) [M]</strong></td><td class="crd-td">MLI: 14,48, -4,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">120,8k (2009AD)</td></tr>
<tr><td class="crd-td"><strong>San [C]</strong></td><td class="crd-td">MLI: 13,29, -4,9</td><td class="crd-td">11,9k</td><td class="crd-td">25,8k</td><td class="crd-td">50,2k</td><td class="crd-td">82,1k</td><td class="crd-td">103,9k</td><td class="crd-td">119,7k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Bougouni [C]</strong></td><td class="crd-td">MLI: 11,43, -7,49</td><td class="crd-td">9,5k</td><td class="crd-td">19,1k</td><td class="crd-td">41k</td><td class="crd-td">71,8k</td><td class="crd-td">96,8k</td><td class="crd-td">111,2k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Niono [C]</strong></td><td class="crd-td">MLI: 14,25, -5,99</td><td class="crd-td">8k</td><td class="crd-td">12,4k</td><td class="crd-td">34,1k</td><td class="crd-td">60,4k</td><td class="crd-td">79,2k</td><td class="crd-td">109,6k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Kita [C]</strong></td><td class="crd-td">MLI: 13,05, -9,49</td><td class="crd-td">8,6k</td><td class="crd-td">19,3k</td><td class="crd-td">34,8k</td><td class="crd-td">60,1k</td><td class="crd-td">80,1k</td><td class="crd-td">93,2k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Tombouctou [C]</strong></td><td class="crd-td">MLI: 16,77, -3</td><td class="crd-td">9,2k</td><td class="crd-td">23,1k</td><td class="crd-td">33,7k</td><td class="crd-td">67k</td><td class="crd-td">89,7k</td><td class="crd-td">89,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Koulikoro [C]</strong></td><td class="crd-td">MLI: 12,88, -7,57</td><td class="crd-td">10k</td><td class="crd-td">17,7k</td><td class="crd-td">30,9k</td><td class="crd-td">51k</td><td class="crd-td">65k</td><td class="crd-td">70,2k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Fana [C]</strong></td><td class="crd-td">MLI: 12,78, -6,96</td><td class="crd-td">4,9k</td><td class="crd-td">9,2k</td><td class="crd-td">23,1k</td><td class="crd-td">45,2k</td><td class="crd-td">65,3k</td><td class="crd-td">65,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dougourakoro [C]</strong></td><td class="crd-td">MLI: 13,2, -7,36</td><td class="crd-td">282</td><td class="crd-td">562</td><td class="crd-td">1,9k</td><td class="crd-td">29,9k</td><td class="crd-td">-</td><td class="crd-td">64,7k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Sévaré [C]</strong></td><td class="crd-td">MLI: 14,53, -4,09</td><td class="crd-td">6,5k</td><td class="crd-td">13,1k</td><td class="crd-td">31,6k</td><td class="crd-td">51,2k</td><td class="crd-td">-</td><td class="crd-td">61,2k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Kadiolo [C]</strong></td><td class="crd-td">MLI: 10,56, -5,76</td><td class="crd-td">3,4k</td><td class="crd-td">5,1k</td><td class="crd-td">13,1k</td><td class="crd-td">30,4k</td><td class="crd-td">42,5k</td><td class="crd-td">56,3k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Nioro du Sahel [C]</strong></td><td class="crd-td">MLI: 15,23, -9,59</td><td class="crd-td">10,3k</td><td class="crd-td">15,2k</td><td class="crd-td">24,2k</td><td class="crd-td">41,3k</td><td class="crd-td">54,3k</td><td class="crd-td">54,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kidal [C]</strong></td><td class="crd-td">MLI: 18,44, 1,41</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k</td><td class="crd-td">13,3k</td><td class="crd-td">31,8k</td><td class="crd-td">52,4k</td><td class="crd-td">52,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Baya [C]</strong></td><td class="crd-td">MLI: 11,58, -8,17</td><td class="crd-td">5,7k</td><td class="crd-td">9,9k</td><td class="crd-td">16,3k</td><td class="crd-td">35,8k</td><td class="crd-td">-</td><td class="crd-td">51k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Pelengana [C]</strong></td><td class="crd-td">MLI: 13,43, -6,22</td><td class="crd-td">10,8k</td><td class="crd-td">19,8k</td><td class="crd-td">28,8k</td><td class="crd-td">40,3k</td><td class="crd-td">-</td><td class="crd-td">50,4k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Douentza [C]</strong></td><td class="crd-td">MLI: 15,01, -2,95</td><td class="crd-td">5,5k</td><td class="crd-td">8,3k</td><td class="crd-td">14,9k</td><td class="crd-td">29,4k</td><td class="crd-td">43,5k</td><td class="crd-td">45,1k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Ménaka [C]</strong></td><td class="crd-td">MLI: 15,91, 2,4</td><td class="crd-td">3,2k</td><td class="crd-td">5,9k</td><td class="crd-td">8,7k</td><td class="crd-td">11,2k</td><td class="crd-td">14,9k</td><td class="crd-td">43,7k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Dalabala [C]</strong></td><td class="crd-td">MLI: 11,65, -8,2</td><td class="crd-td">5,1k</td><td class="crd-td">9,4k</td><td class="crd-td">13,6k</td><td class="crd-td">26k</td><td class="crd-td">42,5k</td><td class="crd-td">42,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mopti Centre [C]</strong></td><td class="crd-td">MLI: 14,5, -4,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16,6k</td><td class="crd-td">42,3k</td><td class="crd-td">42,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Zégoua [C]</strong></td><td class="crd-td">MLI: 10,49, -5,65</td><td class="crd-td">2,3k</td><td class="crd-td">3,9k</td><td class="crd-td">8,1k</td><td class="crd-td">25,1k</td><td class="crd-td">41,6k</td><td class="crd-td">41,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sincina [C]</strong></td><td class="crd-td">MLI: 12,35, -5,44</td><td class="crd-td">1,4k</td><td class="crd-td">2,8k</td><td class="crd-td">5,1k</td><td class="crd-td">23k</td><td class="crd-td">-</td><td class="crd-td">40,8k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Bourem [C]</strong></td><td class="crd-td">MLI: 16,95, -0,34</td><td class="crd-td">6,7k</td><td class="crd-td">14,5k</td><td class="crd-td">22,4k</td><td class="crd-td">33,7k</td><td class="crd-td">39k</td><td class="crd-td">39k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Djenné [C]</strong></td><td class="crd-td">MLI: 13,9, -4,55</td><td class="crd-td">9,9k</td><td class="crd-td">10,9k</td><td class="crd-td">20,8k</td><td class="crd-td">32,2k</td><td class="crd-td">38,5k</td><td class="crd-td">38,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bla [C]</strong></td><td class="crd-td">MLI: 12,95, -5,75</td><td class="crd-td">4,9k</td><td class="crd-td">7,3k</td><td class="crd-td">14,4k</td><td class="crd-td">26,9k</td><td class="crd-td">37,5k</td><td class="crd-td">37,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Diré [C]</strong></td><td class="crd-td">MLI: 16,26, -3,4</td><td class="crd-td">6,5k</td><td class="crd-td">10,6k</td><td class="crd-td">14,6k</td><td class="crd-td">25k</td><td class="crd-td">32,8k</td><td class="crd-td">36,6k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Koro [C]</strong></td><td class="crd-td">MLI: 14,07, -3,08</td><td class="crd-td">5,2k</td><td class="crd-td">8,4k</td><td class="crd-td">12,2k</td><td class="crd-td">19,6k</td><td class="crd-td">25,9k</td><td class="crd-td">35,3k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Yanfolila [C]</strong></td><td class="crd-td">MLI: 11,18, -8,15</td><td class="crd-td">3,1k</td><td class="crd-td">4,3k</td><td class="crd-td">10,1k</td><td class="crd-td">19,4k</td><td class="crd-td">23,7k</td><td class="crd-td">34,3k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 18 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Malian urban centres reaching 25k residents or more (1960AD to 2025AD) (top 40 of 58 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Niger

Table \ref{tab:ner} documents all 38 Nigerien urban centres reaching 25k residents (selected from 2.043 assessed Nigerien communes), led by Niamey (1,43M agglomeration; 978k city proper in 2012AD), Maradi (554,4k), Zinder (322,9k), Tahoua (149,5k), Agadez (118,2k) and Dosso (91,2k) [@Bank2021RevueUrbanisation; @Spoorenberg2018FertilityCompression].

<figure class="crd-table-figure" id="tab:ner">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1960AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2015AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Niamey (Agglomeration) [M]</strong></td><td class="crd-td">NER: 13,51, 2,13</td><td class="crd-td">33,4k</td><td class="crd-td">260,2k</td><td class="crd-td">660,9k</td><td class="crd-td">1,07M</td><td class="crd-td">1,43M</td><td class="crd-td">1,43M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Niamey [C]</strong></td><td class="crd-td">NER: 13,51, 2,13</td><td class="crd-td">67k</td><td class="crd-td">276,6k</td><td class="crd-td">667,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">978k (2012AD)</td></tr>
<tr><td class="crd-td"><strong>Maradi [C]</strong></td><td class="crd-td">NER: 13,51, 7,12</td><td class="crd-td">15,2k</td><td class="crd-td">57,5k</td><td class="crd-td">144,6k</td><td class="crd-td">361k</td><td class="crd-td">554,4k</td><td class="crd-td">554,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Zinder [C]</strong></td><td class="crd-td">NER: 13,81, 8,98</td><td class="crd-td">19,6k</td><td class="crd-td">70,5k</td><td class="crd-td">164,6k</td><td class="crd-td">260,3k</td><td class="crd-td">405,3k</td><td class="crd-td">405,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tahoua [C]</strong></td><td class="crd-td">NER: 14,88, 5,25</td><td class="crd-td">16,1k</td><td class="crd-td">35,3k</td><td class="crd-td">67,2k</td><td class="crd-td">134,1k</td><td class="crd-td">178,9k</td><td class="crd-td">178,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Agadez [C]</strong></td><td class="crd-td">NER: 16,97, 7,99</td><td class="crd-td">8,3k</td><td class="crd-td">25,7k</td><td class="crd-td">74,5k</td><td class="crd-td">119,5k</td><td class="crd-td">159,3k</td><td class="crd-td">159,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Birni N'Konni [C]</strong></td><td class="crd-td">NER: 13,79, 5,25</td><td class="crd-td">8,8k</td><td class="crd-td">18,1k</td><td class="crd-td">43,2k</td><td class="crd-td">68,1k</td><td class="crd-td">100,2k</td><td class="crd-td">100,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dosso [C]</strong></td><td class="crd-td">NER: 13,04, 3,21</td><td class="crd-td">9,8k</td><td class="crd-td">12,9k</td><td class="crd-td">41,6k</td><td class="crd-td">62,7k</td><td class="crd-td">97,1k</td><td class="crd-td">97,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Arlit [C]</strong></td><td class="crd-td">NER: 18,74, 7,39</td><td class="crd-td">-</td><td class="crd-td">12,9k</td><td class="crd-td">37,9k</td><td class="crd-td">52,4k</td><td class="crd-td">78,2k</td><td class="crd-td">78,7k (2012AD)</td></tr>
<tr><td class="crd-td"><strong>Gaya [C]</strong></td><td class="crd-td">NER: 11,89, 3,46</td><td class="crd-td">8,2k</td><td class="crd-td">10,4k</td><td class="crd-td">27k</td><td class="crd-td">50,4k</td><td class="crd-td">73,8k</td><td class="crd-td">73,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Madaoua [C]</strong></td><td class="crd-td">NER: 14,06, 5,96</td><td class="crd-td">9,6k</td><td class="crd-td">14,1k</td><td class="crd-td">21,1k</td><td class="crd-td">29,4k</td><td class="crd-td">73,5k</td><td class="crd-td">73,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tessaoua [C]</strong></td><td class="crd-td">NER: 13,75, 7,99</td><td class="crd-td">7,7k</td><td class="crd-td">13,7k</td><td class="crd-td">30,5k</td><td class="crd-td">46,5k</td><td class="crd-td">73,3k</td><td class="crd-td">73,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Diffa [C]</strong></td><td class="crd-td">NER: 13,32, 12,6</td><td class="crd-td">2,9k</td><td class="crd-td">6,7k</td><td class="crd-td">22,4k</td><td class="crd-td">44,9k</td><td class="crd-td">63k</td><td class="crd-td">63k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dogondoutchi [C]</strong></td><td class="crd-td">NER: 13,63, 4,03</td><td class="crd-td">10,4k</td><td class="crd-td">12,3k</td><td class="crd-td">28,4k</td><td class="crd-td">38,9k</td><td class="crd-td">62,5k</td><td class="crd-td">62,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Téra [C]</strong></td><td class="crd-td">NER: 14, 0,75</td><td class="crd-td">6,4k</td><td class="crd-td">9,7k</td><td class="crd-td">18,8k</td><td class="crd-td">31,8k</td><td class="crd-td">54,5k</td><td class="crd-td">54,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tillabéri [C]</strong></td><td class="crd-td">NER: 14,21, 1,46</td><td class="crd-td">5,5k</td><td class="crd-td">6,1k</td><td class="crd-td">15,8k</td><td class="crd-td">30,2k</td><td class="crd-td">51,7k</td><td class="crd-td">51,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dakoro [C]</strong></td><td class="crd-td">NER: 14,51, 6,77</td><td class="crd-td">7,2k</td><td class="crd-td">11,7k</td><td class="crd-td">18,5k</td><td class="crd-td">33,6k</td><td class="crd-td">49,6k</td><td class="crd-td">49,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Matamèye [C]</strong></td><td class="crd-td">NER: 13,42, 8,48</td><td class="crd-td">4,8k</td><td class="crd-td">8,2k</td><td class="crd-td">17,3k</td><td class="crd-td">30,3k</td><td class="crd-td">45,4k</td><td class="crd-td">45,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Akokan [C]</strong></td><td class="crd-td">NER: 18,71, 7,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">28,6k</td><td class="crd-td">28,8k</td><td class="crd-td">42,9k</td><td class="crd-td">42,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Magaria [C]</strong></td><td class="crd-td">NER: 13,02, 8,91</td><td class="crd-td">5,5k</td><td class="crd-td">8,9k</td><td class="crd-td">17,2k</td><td class="crd-td">28,1k</td><td class="crd-td">40,5k</td><td class="crd-td">40,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tchadoua [C]</strong></td><td class="crd-td">NER: 13,55, 7,46</td><td class="crd-td">4,6k</td><td class="crd-td">8,6k</td><td class="crd-td">12,6k</td><td class="crd-td">25k</td><td class="crd-td">39,6k</td><td class="crd-td">39,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Illéla [C]</strong></td><td class="crd-td">NER: 14,46, 5,24</td><td class="crd-td">5,6k</td><td class="crd-td">9,2k</td><td class="crd-td">15,4k</td><td class="crd-td">24,3k</td><td class="crd-td">34,6k</td><td class="crd-td">34,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>N'Guigmi [C]</strong></td><td class="crd-td">NER: 14,25, 13,11</td><td class="crd-td">5,2k</td><td class="crd-td">8,6k</td><td class="crd-td">15,3k</td><td class="crd-td">25,8k</td><td class="crd-td">33,7k</td><td class="crd-td">33,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tamaské [C]</strong></td><td class="crd-td">NER: 14,83, 5,66</td><td class="crd-td">4,6k</td><td class="crd-td">8,5k</td><td class="crd-td">12,7k</td><td class="crd-td">23,9k</td><td class="crd-td">33,1k</td><td class="crd-td">33,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Balléyara [C]</strong></td><td class="crd-td">NER: 13,8, 2,95</td><td class="crd-td">2,7k</td><td class="crd-td">6,5k</td><td class="crd-td">10,4k</td><td class="crd-td">17,5k</td><td class="crd-td">33k</td><td class="crd-td">33k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mirriah [C]</strong></td><td class="crd-td">NER: 13,71, 9,16</td><td class="crd-td">6,8k</td><td class="crd-td">9,7k</td><td class="crd-td">18,3k</td><td class="crd-td">31,1k</td><td class="crd-td">32,8k</td><td class="crd-td">32,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tanout [C]</strong></td><td class="crd-td">NER: 14,97, 8,88</td><td class="crd-td">3,4k</td><td class="crd-td">7,1k</td><td class="crd-td">15,4k</td><td class="crd-td">21,5k</td><td class="crd-td">31,8k</td><td class="crd-td">31,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Guidan Roumdji [C]</strong></td><td class="crd-td">NER: 13,66, 6,7</td><td class="crd-td">2,5k</td><td class="crd-td">4,1k</td><td class="crd-td">10,4k</td><td class="crd-td">19,5k</td><td class="crd-td">30,2k</td><td class="crd-td">30,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Gouré [C]</strong></td><td class="crd-td">NER: 13,98, 10,26</td><td class="crd-td">5,2k</td><td class="crd-td">8k</td><td class="crd-td">13k</td><td class="crd-td">19,6k</td><td class="crd-td">29,7k</td><td class="crd-td">29,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Aguié [C]</strong></td><td class="crd-td">NER: 13,5, 7,78</td><td class="crd-td">4,6k</td><td class="crd-td">6,5k</td><td class="crd-td">10,9k</td><td class="crd-td">19k</td><td class="crd-td">29,6k</td><td class="crd-td">29,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Filingué [C]</strong></td><td class="crd-td">NER: 14,35, 3,32</td><td class="crd-td">4,2k</td><td class="crd-td">7,1k</td><td class="crd-td">11,4k</td><td class="crd-td">12,8k</td><td class="crd-td">27,5k</td><td class="crd-td">27,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Badaguichiri [C]</strong></td><td class="crd-td">NER: 14,52, 5,37</td><td class="crd-td">3,6k</td><td class="crd-td">5,5k</td><td class="crd-td">7,5k</td><td class="crd-td">15,7k</td><td class="crd-td">27,1k</td><td class="crd-td">27,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kollo [C]</strong></td><td class="crd-td">NER: 13,34, 2,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,1k</td><td class="crd-td">15,9k</td><td class="crd-td">26,6k</td><td class="crd-td">26,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Birni N'Gaouré [C]</strong></td><td class="crd-td">NER: 13,08, 2,9</td><td class="crd-td">5,2k</td><td class="crd-td">5,9k</td><td class="crd-td">10,3k</td><td class="crd-td">15,4k</td><td class="crd-td">26,5k</td><td class="crd-td">26,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Abalak [C]</strong></td><td class="crd-td">NER: 15,46, 6,28</td><td class="crd-td">5,1k</td><td class="crd-td">8,5k</td><td class="crd-td">11,9k</td><td class="crd-td">25,2k</td><td class="crd-td">26,2k</td><td class="crd-td">26,2k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Gazaoua [C]</strong></td><td class="crd-td">NER: 13,53, 7,91</td><td class="crd-td">5,2k</td><td class="crd-td">7,4k</td><td class="crd-td">9,6k</td><td class="crd-td">16,1k</td><td class="crd-td">26k</td><td class="crd-td">26k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tibiri [C]</strong></td><td class="crd-td">NER: 13,08, 3,97</td><td class="crd-td">4,4k</td><td class="crd-td">9,7k</td><td class="crd-td">14,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25,5k (2012AD)</td></tr>
<tr><td class="crd-td"><strong>Kiota Mayaki [C]</strong></td><td class="crd-td">NER: 13,29, 2,95</td><td class="crd-td">2,8k</td><td class="crd-td">5,1k</td><td class="crd-td">7,4k</td><td class="crd-td">16k</td><td class="crd-td">25,2k</td><td class="crd-td">25,2k (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Nigerien urban centres reaching 25k residents or more (1960AD to 2025AD).</figcaption>
</figure>

## Chad

Table \ref{tab:tcd} records all 63 Chadian centres reaching 25k residents (out of 152 assessed Chadian localities), headed by N'Djamena (1,99M agglomeration; 951,4k city proper in 2009AD), Moundou (222,7k), Abéché (184,3k), Sarh (153,1k) and Kélo (92,2k) [@OECD2024Africapolis].

<figure class="crd-table-figure" id="tab:tcd">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1960AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2015AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ndjamena (Agglomeration) [M]</strong></td><td class="crd-td">TCD: 12,13, 15,07</td><td class="crd-td">65,6k</td><td class="crd-td">284,7k</td><td class="crd-td">694,4k</td><td class="crd-td">1,21M</td><td class="crd-td">1,99M</td><td class="crd-td">1,99M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ndjamena [C]</strong></td><td class="crd-td">TCD: 12,13, 15,07</td><td class="crd-td">163,2k</td><td class="crd-td">386,1k</td><td class="crd-td">714,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">951,4k (2009AD)</td></tr>
<tr><td class="crd-td"><strong>Moundou [C]</strong></td><td class="crd-td">TCD: 8,57, 16,06</td><td class="crd-td">25,6k</td><td class="crd-td">55,9k</td><td class="crd-td">115,1k</td><td class="crd-td">158,8k</td><td class="crd-td">222,7k</td><td class="crd-td">222,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Abéché [C]</strong></td><td class="crd-td">TCD: 13,83, 20,83</td><td class="crd-td">18,8k</td><td class="crd-td">37,1k</td><td class="crd-td">71,4k</td><td class="crd-td">124,4k</td><td class="crd-td">172,7k</td><td class="crd-td">172,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sarh [C]</strong></td><td class="crd-td">TCD: 9,14, 18,39</td><td class="crd-td">26,3k</td><td class="crd-td">56,1k</td><td class="crd-td">85,1k</td><td class="crd-td">109k</td><td class="crd-td">157,7k</td><td class="crd-td">157,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Am Timan [C]</strong></td><td class="crd-td">TCD: 11,03, 20,28</td><td class="crd-td">6,6k</td><td class="crd-td">10,8k</td><td class="crd-td">27,2k</td><td class="crd-td">83,3k</td><td class="crd-td">116,2k</td><td class="crd-td">116,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kélo [C]</strong></td><td class="crd-td">TCD: 9,32, 15,79</td><td class="crd-td">10,7k</td><td class="crd-td">21,4k</td><td class="crd-td">41,5k</td><td class="crd-td">74,1k</td><td class="crd-td">104,4k</td><td class="crd-td">104,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Doba [C]</strong></td><td class="crd-td">TCD: 8,68, 16,85</td><td class="crd-td">8,5k</td><td class="crd-td">15,9k</td><td class="crd-td">29k</td><td class="crd-td">73,8k</td><td class="crd-td">102,8k</td><td class="crd-td">102,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Pala [C]</strong></td><td class="crd-td">TCD: 9,36, 14,92</td><td class="crd-td">8,7k</td><td class="crd-td">17,5k</td><td class="crd-td">35k</td><td class="crd-td">64k</td><td class="crd-td">102,2k</td><td class="crd-td">102,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bol [C]</strong></td><td class="crd-td">TCD: 13,48, 14,7</td><td class="crd-td">4,6k</td><td class="crd-td">6,5k</td><td class="crd-td">15,6k</td><td class="crd-td">65,2k</td><td class="crd-td">90,2k</td><td class="crd-td">90,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bongor [C]</strong></td><td class="crd-td">TCD: 10,29, 15,36</td><td class="crd-td">9,8k</td><td class="crd-td">16,6k</td><td class="crd-td">28,1k</td><td class="crd-td">62,5k</td><td class="crd-td">87,4k</td><td class="crd-td">87,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mao [C]</strong></td><td class="crd-td">TCD: 14,12, 15,31</td><td class="crd-td">7k</td><td class="crd-td">10k</td><td class="crd-td">20,8k</td><td class="crd-td">52,6k</td><td class="crd-td">73,4k</td><td class="crd-td">73,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Goz Beïda [C]</strong></td><td class="crd-td">TCD: 12,23, 21,41</td><td class="crd-td">5,1k</td><td class="crd-td">3,9k</td><td class="crd-td">19,8k</td><td class="crd-td">37k</td><td class="crd-td">50,8k</td><td class="crd-td">73k (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Faya-Largeau [C]</strong></td><td class="crd-td">TCD: 17,93, 19,1</td><td class="crd-td">6k</td><td class="crd-td">8,3k</td><td class="crd-td">16,6k</td><td class="crd-td">48,6k</td><td class="crd-td">66,7k</td><td class="crd-td">66,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bebedja [C]</strong></td><td class="crd-td">TCD: 8,67, 16,58</td><td class="crd-td">13k</td><td class="crd-td">26,8k</td><td class="crd-td">40,6k</td><td class="crd-td">50,9k</td><td class="crd-td">63,3k</td><td class="crd-td">63,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Koumra [C]</strong></td><td class="crd-td">TCD: 8,92, 17,54</td><td class="crd-td">10,7k</td><td class="crd-td">20,4k</td><td class="crd-td">30,4k</td><td class="crd-td">45,1k</td><td class="crd-td">62,2k</td><td class="crd-td">62,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Iriba [C]</strong></td><td class="crd-td">TCD: 15,13, 22,25</td><td class="crd-td">2,4k</td><td class="crd-td">1,8k</td><td class="crd-td">15,5k</td><td class="crd-td">42,4k</td><td class="crd-td">59,4k</td><td class="crd-td">59,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mongo [C]</strong></td><td class="crd-td">TCD: 12,18, 18,69</td><td class="crd-td">7,4k</td><td class="crd-td">11k</td><td class="crd-td">25,5k</td><td class="crd-td">50k</td><td class="crd-td">58,5k</td><td class="crd-td">58,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bredjing camp [C]</strong></td><td class="crd-td">TCD: 13,48, 21,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">41,5k</td><td class="crd-td">56,7k</td><td class="crd-td">56,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Arada [C]</strong></td><td class="crd-td">TCD: 15,02, 20,66</td><td class="crd-td">5,3k</td><td class="crd-td">11,6k</td><td class="crd-td">17,9k</td><td class="crd-td">39,7k</td><td class="crd-td">55,6k</td><td class="crd-td">55,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Goré [C]</strong></td><td class="crd-td">TCD: 7,93, 16,64</td><td class="crd-td">2k</td><td class="crd-td">3,3k</td><td class="crd-td">11,8k</td><td class="crd-td">39,7k</td><td class="crd-td">55,3k</td><td class="crd-td">55,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Massakory [C]</strong></td><td class="crd-td">TCD: 12,99, 15,73</td><td class="crd-td">5k</td><td class="crd-td">8,9k</td><td class="crd-td">17,1k</td><td class="crd-td">39,9k</td><td class="crd-td">54,8k</td><td class="crd-td">54,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Farchana [C]</strong></td><td class="crd-td">TCD: 13,59, 21,83</td><td class="crd-td">10,2k</td><td class="crd-td">14,9k</td><td class="crd-td">19,6k</td><td class="crd-td">29k</td><td class="crd-td">52,7k</td><td class="crd-td">52,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Biltine [C]</strong></td><td class="crd-td">TCD: 14,52, 20,93</td><td class="crd-td">4,8k</td><td class="crd-td">6,8k</td><td class="crd-td">13,1k</td><td class="crd-td">35,6k</td><td class="crd-td">49,9k</td><td class="crd-td">49,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Moussoro [C]</strong></td><td class="crd-td">TCD: 13,65, 16,48</td><td class="crd-td">4,4k</td><td class="crd-td">8,2k</td><td class="crd-td">15,7k</td><td class="crd-td">34,7k</td><td class="crd-td">47,6k</td><td class="crd-td">47,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bitkine [C]</strong></td><td class="crd-td">TCD: 11,98, 18,21</td><td class="crd-td">4,8k</td><td class="crd-td">9,4k</td><td class="crd-td">19,3k</td><td class="crd-td">39,7k</td><td class="crd-td">46,5k</td><td class="crd-td">46,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Oum Hadjer [C]</strong></td><td class="crd-td">TCD: 13,29, 19,69</td><td class="crd-td">5,8k</td><td class="crd-td">10,2k</td><td class="crd-td">18,9k</td><td class="crd-td">34,2k</td><td class="crd-td">46k</td><td class="crd-td">46k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Léré [C]</strong></td><td class="crd-td">TCD: 9,66, 14,22</td><td class="crd-td">7,9k</td><td class="crd-td">9,8k</td><td class="crd-td">16,8k</td><td class="crd-td">32,4k</td><td class="crd-td">45,8k</td><td class="crd-td">45,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Goz Amer camp [C]</strong></td><td class="crd-td">TCD: 12,01, 21,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">32,9k</td><td class="crd-td">45,2k</td><td class="crd-td">45,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Gounou Gaya [C]</strong></td><td class="crd-td">TCD: 9,63, 15,51</td><td class="crd-td">3,4k</td><td class="crd-td">5,6k</td><td class="crd-td">11,5k</td><td class="crd-td">32k</td><td class="crd-td">44,8k</td><td class="crd-td">44,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Touloum camp [C]</strong></td><td class="crd-td">TCD: 15, 22,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">30,7k</td><td class="crd-td">43k</td><td class="crd-td">43k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Fianga [C]</strong></td><td class="crd-td">TCD: 9,92, 15,14</td><td class="crd-td">6,3k</td><td class="crd-td">10,7k</td><td class="crd-td">14,2k</td><td class="crd-td">30,6k</td><td class="crd-td">42,7k</td><td class="crd-td">42,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Amdjarass [C]</strong></td><td class="crd-td">TCD: 16,07, 22,84</td><td class="crd-td">1,9k</td><td class="crd-td">1,2k</td><td class="crd-td">9,5k</td><td class="crd-td">29k</td><td class="crd-td">41,5k</td><td class="crd-td">41,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Danamadji [C]</strong></td><td class="crd-td">TCD: 8,75, 18,55</td><td class="crd-td">7,7k</td><td class="crd-td">16,8k</td><td class="crd-td">25,9k</td><td class="crd-td">32,7k</td><td class="crd-td">40,8k</td><td class="crd-td">40,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Oure Cassoni camp [C]</strong></td><td class="crd-td">TCD: 15,71, 23,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">37,5k</td><td class="crd-td">40,8k</td><td class="crd-td">40,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Maro [C]</strong></td><td class="crd-td">TCD: 8,47, 18,77</td><td class="crd-td">1,4k</td><td class="crd-td">2,2k</td><td class="crd-td">8k</td><td class="crd-td">28,7k</td><td class="crd-td">40,1k</td><td class="crd-td">40,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Pont Karol [C]</strong></td><td class="crd-td">TCD: 9,3, 15,49</td><td class="crd-td">6,6k</td><td class="crd-td">14,4k</td><td class="crd-td">22,2k</td><td class="crd-td">28,1k</td><td class="crd-td">34,9k</td><td class="crd-td">34,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dourbali [C]</strong></td><td class="crd-td">TCD: 11,81, 15,87</td><td class="crd-td">4,8k</td><td class="crd-td">8,7k</td><td class="crd-td">16,3k</td><td class="crd-td">25,2k</td><td class="crd-td">34,9k</td><td class="crd-td">34,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Koukou Angarana [C]</strong></td><td class="crd-td">TCD: 12,01, 21,65</td><td class="crd-td">5,1k</td><td class="crd-td">10,6k</td><td class="crd-td">16k</td><td class="crd-td">25,2k</td><td class="crd-td">34,6k</td><td class="crd-td">34,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mandélia [C]</strong></td><td class="crd-td">TCD: 11,73, 15,24</td><td class="crd-td">1,8k</td><td class="crd-td">2,8k</td><td class="crd-td">7,8k</td><td class="crd-td">24,4k</td><td class="crd-td">33,7k</td><td class="crd-td">33,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 23 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Chadian urban centres reaching 25k residents or more (1960AD to 2025AD) (top 40 of 63 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Senegal and The Gambia

Table \ref{tab:sen-gmb} presents all 66 Senegalese and Gambian urban centres reaching 25k residents (out of 169 Senegalese and 59 Gambian localities), led by Dakar (4,39M agglomeration; 3,19M city proper), Touba (1,22M), Greater Banjul (1,15M), Pikine (1,1M), Thiès (618,4k), Mbour (483,3k), Saint-Louis (402,2k) and Kaolack (382,7k) [@ANSD2024SenegalRGPH5; @Bank2015ReviewUrbanization; @Jasseh2022AssessmentThe].

<figure class="crd-table-figure" id="tab:sen-gmb">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1960AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2015AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Dakar (Agglomeration) [M]</strong></td><td class="crd-td">SEN: 14,77, -17,36</td><td class="crd-td">315,7k</td><td class="crd-td">967,1k</td><td class="crd-td">1,96M</td><td class="crd-td">3,07M</td><td class="crd-td">4,39M</td><td class="crd-td">4,39M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dakar [C]</strong></td><td class="crd-td">SEN: 14,77, -17,36</td><td class="crd-td">375k</td><td class="crd-td">799k</td><td class="crd-td">1,71M</td><td class="crd-td">2,75M</td><td class="crd-td">-</td><td class="crd-td">3,19M (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Touba [C]</strong></td><td class="crd-td">SEN: 14,86, -15,9</td><td class="crd-td">18,3k</td><td class="crd-td">50,6k</td><td class="crd-td">331,4k</td><td class="crd-td">872,7k</td><td class="crd-td">1,22M</td><td class="crd-td">1,22M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Banjul (Agglomeration) [M]</strong></td><td class="crd-td">GMB: 13,34, -16,73</td><td class="crd-td">-</td><td class="crd-td">84,3k</td><td class="crd-td">396k</td><td class="crd-td">788,8k</td><td class="crd-td">1,15M</td><td class="crd-td">1,15M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Pikine [C]</strong></td><td class="crd-td">SEN: 14,76, -17,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,07M</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1M (1999AD)</td></tr>
<tr><td class="crd-td"><strong>Banjul (Agglomeration) [M]</strong></td><td class="crd-td">GMB: 13,45, -16,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">747,6k (2013AD)</td></tr>
<tr><td class="crd-td"><strong>Thiès [C]</strong></td><td class="crd-td">SEN: 14,78, -16,93</td><td class="crd-td">55,7k</td><td class="crd-td">135k</td><td class="crd-td">221,5k</td><td class="crd-td">358,8k</td><td class="crd-td">492,4k</td><td class="crd-td">618,4k (2011AD)</td></tr>
<tr><td class="crd-td"><strong>Mbour [C]</strong></td><td class="crd-td">SEN: 14,44, -16,97</td><td class="crd-td">12,3k</td><td class="crd-td">48,3k</td><td class="crd-td">136k</td><td class="crd-td">317k</td><td class="crd-td">474,4k</td><td class="crd-td">605,3k (2011AD)</td></tr>
<tr><td class="crd-td"><strong>Kaolack [C]</strong></td><td class="crd-td">SEN: 14,17, -16,07</td><td class="crd-td">58,2k</td><td class="crd-td">118,5k</td><td class="crd-td">166,4k</td><td class="crd-td">259,6k</td><td class="crd-td">350,9k</td><td class="crd-td">410,6k (2011AD)</td></tr>
<tr><td class="crd-td"><strong>Ziguinchor [C]</strong></td><td class="crd-td">SEN: 12,55, -16,27</td><td class="crd-td">26,3k</td><td class="crd-td">85,2k</td><td class="crd-td">150,1k</td><td class="crd-td">214,9k</td><td class="crd-td">290,2k</td><td class="crd-td">337,3k (2011AD)</td></tr>
<tr><td class="crd-td"><strong>Rufisque [C]</strong></td><td class="crd-td">SEN: 14,72, -17,27</td><td class="crd-td">41,7k</td><td class="crd-td">87,7k</td><td class="crd-td">143,1k</td><td class="crd-td">235,9k</td><td class="crd-td">-</td><td class="crd-td">333k (2011AD)</td></tr>
<tr><td class="crd-td"><strong>Guediawaye [C]</strong></td><td class="crd-td">SEN: 14,77, -17,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">317,5k (2011AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Louis [C]</strong></td><td class="crd-td">SEN: 16,03, -16,49</td><td class="crd-td">44,3k</td><td class="crd-td">96,7k</td><td class="crd-td">134,2k</td><td class="crd-td">222k</td><td class="crd-td">290,2k</td><td class="crd-td">290,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Diourbel [C]</strong></td><td class="crd-td">SEN: 14,67, -16,23</td><td class="crd-td">24,7k</td><td class="crd-td">60,8k</td><td class="crd-td">90,2k</td><td class="crd-td">140k</td><td class="crd-td">197,7k</td><td class="crd-td">279,7k (2011AD)</td></tr>
<tr><td class="crd-td"><strong>Tambacounda [C]</strong></td><td class="crd-td">SEN: 13,76, -13,67</td><td class="crd-td">10,4k</td><td class="crd-td">30,5k</td><td class="crd-td">62,5k</td><td class="crd-td">112,3k</td><td class="crd-td">161k</td><td class="crd-td">161k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tivaouane Peulh - Niaga [C]</strong></td><td class="crd-td">SEN: 14,8, -17,29</td><td class="crd-td">9,6k</td><td class="crd-td">21,5k</td><td class="crd-td">33,4k</td><td class="crd-td">63,3k</td><td class="crd-td">-</td><td class="crd-td">152k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Louga [C]</strong></td><td class="crd-td">SEN: 15,62, -16,22</td><td class="crd-td">14,8k</td><td class="crd-td">40,2k</td><td class="crd-td">68,9k</td><td class="crd-td">109,2k</td><td class="crd-td">149,3k</td><td class="crd-td">149,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kolda [C]</strong></td><td class="crd-td">SEN: 12,9, -14,94</td><td class="crd-td">7,6k</td><td class="crd-td">23,3k</td><td class="crd-td">49,7k</td><td class="crd-td">84,9k</td><td class="crd-td">131,5k</td><td class="crd-td">131,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sangalkam [C]</strong></td><td class="crd-td">SEN: 14,78, -17,23</td><td class="crd-td">3,3k</td><td class="crd-td">6,6k</td><td class="crd-td">9,8k</td><td class="crd-td">31,7k</td><td class="crd-td">-</td><td class="crd-td">111k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Tivaouane [C]</strong></td><td class="crd-td">SEN: 14,94, -16,81</td><td class="crd-td">8,8k</td><td class="crd-td">20k</td><td class="crd-td">35,8k</td><td class="crd-td">75,2k</td><td class="crd-td">101,8k</td><td class="crd-td">102,7k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Mbacké [C]</strong></td><td class="crd-td">SEN: 14,79, -15,91</td><td class="crd-td">16k</td><td class="crd-td">29,9k</td><td class="crd-td">49,4k</td><td class="crd-td">82,1k</td><td class="crd-td">-</td><td class="crd-td">101,5k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Mboro [C]</strong></td><td class="crd-td">SEN: 15,14, -16,89</td><td class="crd-td">2,4k</td><td class="crd-td">7,1k</td><td class="crd-td">10,3k</td><td class="crd-td">36,1k</td><td class="crd-td">101k</td><td class="crd-td">101k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Brikama [C]</strong></td><td class="crd-td">GMB: 13,27, -16,65</td><td class="crd-td">8,4k</td><td class="crd-td">18,2k</td><td class="crd-td">55,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">81k (2013AD)</td></tr>
<tr><td class="crd-td"><strong>Richard-Toll [C]</strong></td><td class="crd-td">SEN: 16,45, -15,68</td><td class="crd-td">3,3k</td><td class="crd-td">13,1k</td><td class="crd-td">44,2k</td><td class="crd-td">60,6k</td><td class="crd-td">75,5k</td><td class="crd-td">75,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Jaxaay - Parcelles [C]</strong></td><td class="crd-td">SEN: 14,77, -17,28</td><td class="crd-td">15,5k</td><td class="crd-td">25,3k</td><td class="crd-td">35,2k</td><td class="crd-td">47,5k</td><td class="crd-td">-</td><td class="crd-td">71k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Bargny [C]</strong></td><td class="crd-td">SEN: 14,7, -17,23</td><td class="crd-td">9,8k</td><td class="crd-td">22,5k</td><td class="crd-td">35,2k</td><td class="crd-td">54,8k</td><td class="crd-td">-</td><td class="crd-td">69,2k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Kaffrine [C]</strong></td><td class="crd-td">SEN: 14,1, -15,55</td><td class="crd-td">8,1k</td><td class="crd-td">13,1k</td><td class="crd-td">23,7k</td><td class="crd-td">41,4k</td><td class="crd-td">62,6k</td><td class="crd-td">62,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Joal - Fadiouth [C]</strong></td><td class="crd-td">SEN: 14,18, -16,85</td><td class="crd-td">6,8k</td><td class="crd-td">13,4k</td><td class="crd-td">29,9k</td><td class="crd-td">48,1k</td><td class="crd-td">62k</td><td class="crd-td">62k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bambylor [C]</strong></td><td class="crd-td">SEN: 14,8, -17,19</td><td class="crd-td">18,2k</td><td class="crd-td">28,3k</td><td class="crd-td">38,4k</td><td class="crd-td">48,2k</td><td class="crd-td">-</td><td class="crd-td">61,1k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Kédougou [C]</strong></td><td class="crd-td">SEN: 12,56, -12,2</td><td class="crd-td">4,5k</td><td class="crd-td">8,9k</td><td class="crd-td">15,7k</td><td class="crd-td">31,5k</td><td class="crd-td">44,7k</td><td class="crd-td">59,2k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Bignoma [C]</strong></td><td class="crd-td">SEN: 12,8, -16,23</td><td class="crd-td">11,9k</td><td class="crd-td">16,8k</td><td class="crd-td">25k</td><td class="crd-td">43,7k</td><td class="crd-td">57,3k</td><td class="crd-td">57,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Popenguine [C]</strong></td><td class="crd-td">SEN: 14,62, -17,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">28,4k</td><td class="crd-td">56k</td><td class="crd-td">56k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Medina Gounass [C]</strong></td><td class="crd-td">SEN: 13,14, -13,76</td><td class="crd-td">7,9k</td><td class="crd-td">14k</td><td class="crd-td">25,6k</td><td class="crd-td">41,6k</td><td class="crd-td">56k</td><td class="crd-td">56k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bundunka Kunda [C]</strong></td><td class="crd-td">GMB: 13,42, -16,68</td><td class="crd-td">23k</td><td class="crd-td">34,1k</td><td class="crd-td">46,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">55,4k (2013AD)</td></tr>
<tr><td class="crd-td"><strong>Nguékhokh [C]</strong></td><td class="crd-td">SEN: 14,51, -17</td><td class="crd-td">3,3k</td><td class="crd-td">5,8k</td><td class="crd-td">15,6k</td><td class="crd-td">31,2k</td><td class="crd-td">-</td><td class="crd-td">48k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Diamniadio [C]</strong></td><td class="crd-td">SEN: 14,72, -17,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">28,4k</td><td class="crd-td">-</td><td class="crd-td">47,8k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Sukuta [C]</strong></td><td class="crd-td">GMB: 13,41, -16,71</td><td class="crd-td">3k</td><td class="crd-td">6,7k</td><td class="crd-td">24,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">47k (2013AD)</td></tr>
<tr><td class="crd-td"><strong>Kahone [C]</strong></td><td class="crd-td">SEN: 14,16, -16,04</td><td class="crd-td">39,5k</td><td class="crd-td">23,2k</td><td class="crd-td">7k</td><td class="crd-td">16,7k</td><td class="crd-td">-</td><td class="crd-td">46,8k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Vélingara [C]</strong></td><td class="crd-td">SEN: 13,15, -14,11</td><td class="crd-td">5,9k</td><td class="crd-td">10,3k</td><td class="crd-td">19,8k</td><td class="crd-td">33,7k</td><td class="crd-td">45,7k</td><td class="crd-td">45,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dahra [C]</strong></td><td class="crd-td">SEN: 15,35, -15,48</td><td class="crd-td">7k</td><td class="crd-td">10,8k</td><td class="crd-td">22,8k</td><td class="crd-td">34,5k</td><td class="crd-td">44k</td><td class="crd-td">45,5k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 26 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Senegalese and Gambian urban centres reaching 25k residents or more (1960AD to 2025AD) (top 40 of 66 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Burkina Faso

Table \ref{tab:bfa} compiles all 66 Burkinabè centres reaching 25k residents (out of 151 assessed localities), led by Ouagadougou (3,41M agglomeration; 2,42M city proper in 2019AD), Bobo-Dioulasso (1,22M agglomeration; 904,9k city proper), Koudougou (185,5k), Kaya (163,8k), Banfora (150,2k) and Ouahigouya (144,6k) [@INSD2022BurkinaRGPH5; @Younoussi2013MigrationEmploi].

<figure class="crd-table-figure" id="tab:bfa">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1960AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2015AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ouagadougou (Agglomeration) [M]</strong></td><td class="crd-td">BFA: 12,36, -1,5</td><td class="crd-td">60,2k</td><td class="crd-td">298,7k</td><td class="crd-td">994,6k</td><td class="crd-td">2,3M</td><td class="crd-td">3,41M</td><td class="crd-td">3,41M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ouagadougou [C]</strong></td><td class="crd-td">BFA: 12,36, -1,5</td><td class="crd-td">149,4k</td><td class="crd-td">402,7k</td><td class="crd-td">1,04M</td><td class="crd-td">2,13M</td><td class="crd-td">-</td><td class="crd-td">2,42M (2019AD)</td></tr>
<tr><td class="crd-td"><strong>Bobo Dioulasso (Agglomeration) [M]</strong></td><td class="crd-td">BFA: 11,2, -4,29</td><td class="crd-td">52,6k</td><td class="crd-td">157,3k</td><td class="crd-td">364,5k</td><td class="crd-td">667,9k</td><td class="crd-td">1,22M</td><td class="crd-td">1,22M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bobo-Dioulasso [C]</strong></td><td class="crd-td">BFA: 11,2, -4,29</td><td class="crd-td">89,5k</td><td class="crd-td">200,8k</td><td class="crd-td">381,8k</td><td class="crd-td">777,2k</td><td class="crd-td">-</td><td class="crd-td">904,9k (2019AD)</td></tr>
<tr><td class="crd-td"><strong>Koudougou [C]</strong></td><td class="crd-td">BFA: 12,24, -2,35</td><td class="crd-td">18,8k</td><td class="crd-td">43,1k</td><td class="crd-td">77,7k</td><td class="crd-td">110,9k</td><td class="crd-td">269,3k</td><td class="crd-td">269,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kaya [C]</strong></td><td class="crd-td">BFA: 13,08, -1,09</td><td class="crd-td">11k</td><td class="crd-td">22k</td><td class="crd-td">40,1k</td><td class="crd-td">31,1k</td><td class="crd-td">193,2k</td><td class="crd-td">193,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ouahigouya [C]</strong></td><td class="crd-td">BFA: 13,56, -2,4</td><td class="crd-td">11,6k</td><td class="crd-td">31k</td><td class="crd-td">58,8k</td><td class="crd-td">93,9k</td><td class="crd-td">154,6k</td><td class="crd-td">154,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Koudougou (Agglomeration) [M]</strong></td><td class="crd-td">BFA: 12,24, -2,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">138,2k (2006AD)</td></tr>
<tr><td class="crd-td"><strong>Banfora [C]</strong></td><td class="crd-td">BFA: 10,65, -4,74</td><td class="crd-td">10k</td><td class="crd-td">19,9k</td><td class="crd-td">57,8k</td><td class="crd-td">99,4k</td><td class="crd-td">138k</td><td class="crd-td">138k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Saaba [C]</strong></td><td class="crd-td">BFA: 12,37, -1,41</td><td class="crd-td">3k</td><td class="crd-td">5,9k</td><td class="crd-td">8,8k</td><td class="crd-td">97,1k</td><td class="crd-td">-</td><td class="crd-td">136k (2019AD)</td></tr>
<tr><td class="crd-td"><strong>Ouahigouya (Agglomeration) [M]</strong></td><td class="crd-td">BFA: 13,56, -2,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">125k (2006AD)</td></tr>
<tr><td class="crd-td"><strong>Tenkodogo (Agglomeration) [M]</strong></td><td class="crd-td">BFA: 11,8, -0,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">125k (2006AD)</td></tr>
<tr><td class="crd-td"><strong>Fada N'gourma (Agglomeration) [M]</strong></td><td class="crd-td">BFA: 12,06, 0,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">124,6k (2006AD)</td></tr>
<tr><td class="crd-td"><strong>Solenzo (Agglomeration) [M]</strong></td><td class="crd-td">BFA: 12,18, -4,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">121,8k (2006AD)</td></tr>
<tr><td class="crd-td"><strong>Kaya (Agglomeration) [M]</strong></td><td class="crd-td">BFA: 13,08, -1,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">117,1k (2006AD)</td></tr>
<tr><td class="crd-td"><strong>Pouytenga [C]</strong></td><td class="crd-td">BFA: 12,26, -0,42</td><td class="crd-td">6,5k</td><td class="crd-td">11,3k</td><td class="crd-td">43,1k</td><td class="crd-td">93,1k</td><td class="crd-td">112,7k</td><td class="crd-td">112,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Banfora (Agglomeration) [M]</strong></td><td class="crd-td">BFA: 10,65, -4,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">109,8k (2006AD)</td></tr>
<tr><td class="crd-td"><strong>Dori (Agglomeration) [M]</strong></td><td class="crd-td">BFA: 14,03, -0,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">106,8k (2006AD)</td></tr>
<tr><td class="crd-td"><strong>Gorom-Gorom (Agglomeration) [M]</strong></td><td class="crd-td">BFA: 14,44, -0,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">106,3k (2006AD)</td></tr>
<tr><td class="crd-td"><strong>Houndé [C]</strong></td><td class="crd-td">BFA: 11,49, -3,52</td><td class="crd-td">5,6k</td><td class="crd-td">7,9k</td><td class="crd-td">26,9k</td><td class="crd-td">54,1k</td><td class="crd-td">100,2k</td><td class="crd-td">100,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Koupéla [C]</strong></td><td class="crd-td">BFA: 12,17, -0,36</td><td class="crd-td">6,4k</td><td class="crd-td">9k</td><td class="crd-td">20,8k</td><td class="crd-td">18,3k</td><td class="crd-td">91,3k</td><td class="crd-td">91,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dédougou (Agglomeration) [M]</strong></td><td class="crd-td">BFA: 12,47, -3,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">87k (2006AD)</td></tr>
<tr><td class="crd-td"><strong>Pouytenga (Agglomeration) [M]</strong></td><td class="crd-td">BFA: 12,26, -0,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">75,2k (2006AD)</td></tr>
<tr><td class="crd-td"><strong>Fada N'Gourma [C]</strong></td><td class="crd-td">BFA: 12,06, 0,37</td><td class="crd-td">8,9k</td><td class="crd-td">16,2k</td><td class="crd-td">33,2k</td><td class="crd-td">56,6k</td><td class="crd-td">74k</td><td class="crd-td">74k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Nioko I [C]</strong></td><td class="crd-td">BFA: 12,4, -1,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">50,2k</td><td class="crd-td">-</td><td class="crd-td">65,3k (2019AD)</td></tr>
<tr><td class="crd-td"><strong>Dédougou [C]</strong></td><td class="crd-td">BFA: 12,47, -3,46</td><td class="crd-td">7,3k</td><td class="crd-td">12,3k</td><td class="crd-td">35,5k</td><td class="crd-td">50,1k</td><td class="crd-td">64,4k</td><td class="crd-td">64,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tenkodogo [C]</strong></td><td class="crd-td">BFA: 11,8, -0,38</td><td class="crd-td">10k</td><td class="crd-td">20,4k</td><td class="crd-td">35,6k</td><td class="crd-td">55,9k</td><td class="crd-td">58,4k</td><td class="crd-td">61,9k (2019AD)</td></tr>
<tr><td class="crd-td"><strong>Djibo [C]</strong></td><td class="crd-td">BFA: 14,1, -1,63</td><td class="crd-td">7,4k</td><td class="crd-td">14,3k</td><td class="crd-td">22,9k</td><td class="crd-td">38,3k</td><td class="crd-td">42,5k</td><td class="crd-td">61,5k (2019AD)</td></tr>
<tr><td class="crd-td"><strong>Kongoussi [C]</strong></td><td class="crd-td">BFA: 13,32, -1,53</td><td class="crd-td">5,1k</td><td class="crd-td">6,3k</td><td class="crd-td">20,2k</td><td class="crd-td">32,5k</td><td class="crd-td">61,5k</td><td class="crd-td">61,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Léo [C]</strong></td><td class="crd-td">BFA: 11,1, -2,09</td><td class="crd-td">6,5k</td><td class="crd-td">10,1k</td><td class="crd-td">21,5k</td><td class="crd-td">35,9k</td><td class="crd-td">59,3k</td><td class="crd-td">59,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Gaoua [C]</strong></td><td class="crd-td">BFA: 10,34, -3,18</td><td class="crd-td">6,1k</td><td class="crd-td">9,8k</td><td class="crd-td">19,1k</td><td class="crd-td">32,1k</td><td class="crd-td">51,9k</td><td class="crd-td">51,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Titao [C]</strong></td><td class="crd-td">BFA: 13,76, -2,07</td><td class="crd-td">5,7k</td><td class="crd-td">10,3k</td><td class="crd-td">15,6k</td><td class="crd-td">24,3k</td><td class="crd-td">38,8k</td><td class="crd-td">48,2k (2019AD)</td></tr>
<tr><td class="crd-td"><strong>Saonré [C]</strong></td><td class="crd-td">BFA: 12,28, -1,58</td><td class="crd-td">192</td><td class="crd-td">342</td><td class="crd-td">492</td><td class="crd-td">33,2k</td><td class="crd-td">-</td><td class="crd-td">47,7k (2019AD)</td></tr>
<tr><td class="crd-td"><strong>Dori [C]</strong></td><td class="crd-td">BFA: 14,03, -0,03</td><td class="crd-td">6,2k</td><td class="crd-td">10k</td><td class="crd-td">17,6k</td><td class="crd-td">27,1k</td><td class="crd-td">26,6k</td><td class="crd-td">46,5k (2019AD)</td></tr>
<tr><td class="crd-td"><strong>Garango [C]</strong></td><td class="crd-td">BFA: 11,8, -0,55</td><td class="crd-td">13,2k</td><td class="crd-td">24,4k</td><td class="crd-td">30,5k</td><td class="crd-td">44,1k</td><td class="crd-td">46,1k</td><td class="crd-td">46,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Arbinda [C]</strong></td><td class="crd-td">BFA: 14,23, -0,87</td><td class="crd-td">3,4k</td><td class="crd-td">6,2k</td><td class="crd-td">9k</td><td class="crd-td">12,7k</td><td class="crd-td">10,7k</td><td class="crd-td">45,8k (2019AD)</td></tr>
<tr><td class="crd-td"><strong>Zorgho [C]</strong></td><td class="crd-td">BFA: 12,25, -0,63</td><td class="crd-td">5,6k</td><td class="crd-td">9,6k</td><td class="crd-td">18,5k</td><td class="crd-td">25,5k</td><td class="crd-td">44,5k</td><td class="crd-td">44,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Gourcy [C]</strong></td><td class="crd-td">BFA: 13,2, -2,35</td><td class="crd-td">6,7k</td><td class="crd-td">12k</td><td class="crd-td">18,9k</td><td class="crd-td">31,8k</td><td class="crd-td">42,1k</td><td class="crd-td">42,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Namponkoré [C]</strong></td><td class="crd-td">BFA: 11,73, 1,77</td><td class="crd-td">3,4k</td><td class="crd-td">6,9k</td><td class="crd-td">10,5k</td><td class="crd-td">16,8k</td><td class="crd-td">41,7k</td><td class="crd-td">41,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Yako [C]</strong></td><td class="crd-td">BFA: 12,96, -2,26</td><td class="crd-td">8,6k</td><td class="crd-td">12,4k</td><td class="crd-td">19,9k</td><td class="crd-td">28,1k</td><td class="crd-td">41,4k</td><td class="crd-td">41,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 26 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Burkinabè urban centres reaching 25k residents or more (1960AD to 2025AD) (top 40 of 66 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Neighbouring Frontier Buffer Cities

Table \ref{tab:border} catalogues all 96 frontier-buffer cities reaching 25k residents across ten adjacent states (out of 269 border-buffer localities), anchoring cross-border spatial interpolation along the southern Sahelian border, including Katsina (1,27M), Siguiri (303k), Birnin Kebbi (270,3k), Hadejia (249k), Al-Junaynah (231,6k), Bolgatanga (207,7k) and Kousséri (144,9k).

<figure class="crd-table-figure" id="tab:border">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1960AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2015AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Katsina [C]</strong></td><td class="crd-td">NGA: 12,98, 7,61</td><td class="crd-td">63,2k</td><td class="crd-td">120k</td><td class="crd-td">237k</td><td class="crd-td">452,2k</td><td class="crd-td">1,27M</td><td class="crd-td">1,27M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Siguiri [C]</strong></td><td class="crd-td">GIN: 11,43, -9,17</td><td class="crd-td">12,9k</td><td class="crd-td">16,8k</td><td class="crd-td">49,2k</td><td class="crd-td">143,4k</td><td class="crd-td">303k</td><td class="crd-td">303k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Birnin Kebbi [C]</strong></td><td class="crd-td">NGA: 12,44, 4,19</td><td class="crd-td">20,1k</td><td class="crd-td">64k</td><td class="crd-td">170k</td><td class="crd-td">270,3k</td><td class="crd-td">231,2k</td><td class="crd-td">270,3k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Hadejia [C]</strong></td><td class="crd-td">NGA: 12,46, 10,04</td><td class="crd-td">15,6k</td><td class="crd-td">32k</td><td class="crd-td">65k</td><td class="crd-td">144,1k</td><td class="crd-td">249k</td><td class="crd-td">249k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Al-Junaynah [C]</strong></td><td class="crd-td">SDN: 13,44, 22,43</td><td class="crd-td">15,6k</td><td class="crd-td">49,4k</td><td class="crd-td">111k</td><td class="crd-td">231,6k</td><td class="crd-td">197,1k</td><td class="crd-td">231,6k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Bolgatanga (Agglomeration) [M]</strong></td><td class="crd-td">GHA: 10,84, -0,84</td><td class="crd-td">-</td><td class="crd-td">23,8k</td><td class="crd-td">49,2k</td><td class="crd-td">74,5k</td><td class="crd-td">207,7k</td><td class="crd-td">207,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Jibiya [C]</strong></td><td class="crd-td">NGA: 13,1, 7,22</td><td class="crd-td">8,5k</td><td class="crd-td">19,9k</td><td class="crd-td">44,6k</td><td class="crd-td">60,5k</td><td class="crd-td">197,2k</td><td class="crd-td">197,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Siguiri (Agglomeration) [M]</strong></td><td class="crd-td">GIN: 11,43, -9,17</td><td class="crd-td">11,9k</td><td class="crd-td">16,2k</td><td class="crd-td">34k</td><td class="crd-td">99k</td><td class="crd-td">187,6k</td><td class="crd-td">187,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Wa (Agglomeration) [M]</strong></td><td class="crd-td">GHA: 10,04, -2,52</td><td class="crd-td">14,3k</td><td class="crd-td">31,1k</td><td class="crd-td">66,6k</td><td class="crd-td">74,9k</td><td class="crd-td">177,8k</td><td class="crd-td">177,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Nguru [C]</strong></td><td class="crd-td">NGA: 12,88, 10,45</td><td class="crd-td">29,5k</td><td class="crd-td">40k</td><td class="crd-td">67,4k</td><td class="crd-td">97,4k</td><td class="crd-td">149,6k</td><td class="crd-td">149,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Gambaru [C]</strong></td><td class="crd-td">NGA: 12,37, 14,2</td><td class="crd-td">7,4k</td><td class="crd-td">14,1k</td><td class="crd-td">36,2k</td><td class="crd-td">60,8k</td><td class="crd-td">146,6k</td><td class="crd-td">146,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ndjamena/Kousseri [CMR] [C]</strong></td><td class="crd-td">CMR: 12,08, 15,01</td><td class="crd-td">-</td><td class="crd-td">22,5k</td><td class="crd-td">76,8k</td><td class="crd-td">107,3k</td><td class="crd-td">144,9k</td><td class="crd-td">144,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Daura [C]</strong></td><td class="crd-td">NGA: 13,04, 8,32</td><td class="crd-td">21,1k</td><td class="crd-td">22k</td><td class="crd-td">45,8k</td><td class="crd-td">109,6k</td><td class="crd-td">141k</td><td class="crd-td">141k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ngala [C]</strong></td><td class="crd-td">NGA: 12,35, 14,17</td><td class="crd-td">9,1k</td><td class="crd-td">12k</td><td class="crd-td">14,9k</td><td class="crd-td">16,3k</td><td class="crd-td">134,5k</td><td class="crd-td">134,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dapaong [C]</strong></td><td class="crd-td">TGO: 10,86, 0,19</td><td class="crd-td">7,3k</td><td class="crd-td">17,5k</td><td class="crd-td">37,8k</td><td class="crd-td">84,3k</td><td class="crd-td">123,7k</td><td class="crd-td">123,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bawku [C]</strong></td><td class="crd-td">GHA: 11,05, -0,26</td><td class="crd-td">12,7k</td><td class="crd-td">29,5k</td><td class="crd-td">51,4k</td><td class="crd-td">66,4k</td><td class="crd-td">99,6k</td><td class="crd-td">99,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Gumel [C]</strong></td><td class="crd-td">NGA: 12,63, 9,39</td><td class="crd-td">16,3k</td><td class="crd-td">17k</td><td class="crd-td">30,7k</td><td class="crd-td">63,3k</td><td class="crd-td">98,9k</td><td class="crd-td">98,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Geidam [C]</strong></td><td class="crd-td">NGA: 12,89, 11,93</td><td class="crd-td">9,8k</td><td class="crd-td">18k</td><td class="crd-td">37,7k</td><td class="crd-td">75,8k</td><td class="crd-td">95,6k</td><td class="crd-td">95,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Damasak [C]</strong></td><td class="crd-td">NGA: 13,1, 12,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,7k</td><td class="crd-td">27,2k</td><td class="crd-td">91k</td><td class="crd-td">91k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Guider [C]</strong></td><td class="crd-td">CMR: 9,92, 13,94</td><td class="crd-td">9,7k</td><td class="crd-td">23,7k</td><td class="crd-td">45,8k</td><td class="crd-td">71,9k</td><td class="crd-td">89,5k</td><td class="crd-td">89,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kousséri [C]</strong></td><td class="crd-td">CMR: 12,08, 15,03</td><td class="crd-td">9k</td><td class="crd-td">27,5k</td><td class="crd-td">79,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">89,1k (2005AD)</td></tr>
<tr><td class="crd-td"><strong>Gabú [C]</strong></td><td class="crd-td">GNB: 12,29, -14,24</td><td class="crd-td">5,4k</td><td class="crd-td">8,1k</td><td class="crd-td">12k</td><td class="crd-td">43,9k</td><td class="crd-td">86,7k</td><td class="crd-td">86,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kaura Namoda [C]</strong></td><td class="crd-td">NGA: 12,59, 6,59</td><td class="crd-td">22,3k</td><td class="crd-td">17k</td><td class="crd-td">22k</td><td class="crd-td">60,3k</td><td class="crd-td">85,8k</td><td class="crd-td">85,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kintinian [C]</strong></td><td class="crd-td">GIN: 11,59, -9,38</td><td class="crd-td">5,8k</td><td class="crd-td">10,4k</td><td class="crd-td">14,9k</td><td class="crd-td">27k</td><td class="crd-td">84,6k</td><td class="crd-td">84,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ferkessédougou [C]</strong></td><td class="crd-td">CIV: 9,59, -5,2</td><td class="crd-td">12,9k</td><td class="crd-td">29k</td><td class="crd-td">42,7k</td><td class="crd-td">58,9k</td><td class="crd-td">82k</td><td class="crd-td">82k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Malanville [C]</strong></td><td class="crd-td">BEN: 11,86, 3,38</td><td class="crd-td">7,3k</td><td class="crd-td">11,4k</td><td class="crd-td">30,2k</td><td class="crd-td">60,8k</td><td class="crd-td">81,8k</td><td class="crd-td">81,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Baga (Agglomeration) [M]</strong></td><td class="crd-td">NGA: 13,09, 13,82</td><td class="crd-td">-</td><td class="crd-td">12,1k</td><td class="crd-td">26,1k</td><td class="crd-td">39,8k</td><td class="crd-td">80,4k</td><td class="crd-td">80,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kazaure [C]</strong></td><td class="crd-td">NGA: 12,64, 8,41</td><td class="crd-td">13,3k</td><td class="crd-td">16k</td><td class="crd-td">28,7k</td><td class="crd-td">57,9k</td><td class="crd-td">79,7k</td><td class="crd-td">79,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Malam Maduri [C]</strong></td><td class="crd-td">NGA: 12,56, 9,88</td><td class="crd-td">7,7k</td><td class="crd-td">10,8k</td><td class="crd-td">20,6k</td><td class="crd-td">29,5k</td><td class="crd-td">75,5k</td><td class="crd-td">75,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Anjakoaty [C]</strong></td><td class="crd-td">SDN: 12,13, 22,6</td><td class="crd-td">10,9k</td><td class="crd-td">24,5k</td><td class="crd-td">38,1k</td><td class="crd-td">74,8k</td><td class="crd-td">74,9k</td><td class="crd-td">74,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Shinkafi [C]</strong></td><td class="crd-td">NGA: 13,07, 6,5</td><td class="crd-td">13,3k</td><td class="crd-td">14k</td><td class="crd-td">31,7k</td><td class="crd-td">41k</td><td class="crd-td">71,9k</td><td class="crd-td">71,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Wa [C]</strong></td><td class="crd-td">GHA: 10,04, -2,52</td><td class="crd-td">9,8k</td><td class="crd-td">29,7k</td><td class="crd-td">66,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">71,1k (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Kamba [C]</strong></td><td class="crd-td">NGA: 11,85, 3,66</td><td class="crd-td">8k</td><td class="crd-td">16,8k</td><td class="crd-td">36,5k</td><td class="crd-td">51,5k</td><td class="crd-td">69,1k</td><td class="crd-td">69,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Um Dukhun [C]</strong></td><td class="crd-td">SDN: 11,15, 22,97</td><td class="crd-td">6,3k</td><td class="crd-td">8,3k</td><td class="crd-td">10,3k</td><td class="crd-td">17,5k</td><td class="crd-td">67,5k</td><td class="crd-td">67,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bolgatanga [C]</strong></td><td class="crd-td">GHA: 10,84, -0,84</td><td class="crd-td">12k</td><td class="crd-td">28,6k</td><td class="crd-td">49,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">65,5k (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Danbatta [C]</strong></td><td class="crd-td">NGA: 12,43, 8,51</td><td class="crd-td">11,8k</td><td class="crd-td">19k</td><td class="crd-td">32,6k</td><td class="crd-td">51,7k</td><td class="crd-td">65,1k</td><td class="crd-td">65,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>'Ārdamatā [C]</strong></td><td class="crd-td">SDN: 13,49, 22,48</td><td class="crd-td">14,2k</td><td class="crd-td">31,5k</td><td class="crd-td">48,7k</td><td class="crd-td">65k</td><td class="crd-td">52k</td><td class="crd-td">65k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Babura [C]</strong></td><td class="crd-td">NGA: 12,77, 9,01</td><td class="crd-td">6,7k</td><td class="crd-td">11k</td><td class="crd-td">18,4k</td><td class="crd-td">26,4k</td><td class="crd-td">62,2k</td><td class="crd-td">62,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Batsari [C]</strong></td><td class="crd-td">NGA: 12,76, 7,25</td><td class="crd-td">6,8k</td><td class="crd-td">10k</td><td class="crd-td">16,7k</td><td class="crd-td">24,8k</td><td class="crd-td">62k</td><td class="crd-td">62k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Paoua [C]</strong></td><td class="crd-td">CAF: 7,25, 16,43</td><td class="crd-td">5,9k</td><td class="crd-td">9,8k</td><td class="crd-td">16,7k</td><td class="crd-td">20,8k</td><td class="crd-td">59,9k</td><td class="crd-td">59,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 56 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Neighbouring frontier buffer cities reaching 25k residents or more across ten adjacent jurisdictions (1960AD to 2025AD) (top 40 of 96 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

# Limitations

Three constraints govern this gazetteer. First, settlement-level census granularity differs across countries: Niger's 2012AD RGPH provides 2.043 mostly rural commune records whose single-year peak inflates total ledger size relative to Chad, Mali and Mauritania, where coverage concentrates on cities above 10k inhabitants [@Bank2021RevueUrbanisation; @OECD2024Africapolis]. Second, interpolation applies strictly between each locality's earliest and latest dated records, producing hyphens (-) for recent 2025AD Africapolis projections on localities whose most recent municipal census dates to 2009AD or 2012AD. Third, rapid peri-urban expansion around Dakar, Bamako, Ouagadougou and Niamey requires reading city-proper (C) and metropolitan (M) entries side by side to avoid administrative boundary artefacts [@Doumbia2019EthnographyUrban; @Cheikh2025ImpactsUrbanization].

# Conclusion

Together, the 3.114 assessed settlements and 402 major urban centres documented here capture the post-colonial transformation of Sahelian settlement from sparse independence-era administrative towns to multi-million-inhabitant metropolitan corridors, grounding the regional demographic series in the companion review.

# Appendix

## Sub-Regional Settlement Distribution Across All Eighty-Four Divisions

Table \ref{tab:appendix-subreg-dist} summarises interior settlement counts, chronological observations, combined peak site totals and leading centres across every one of the 84 first-level administrative divisions in the Sahelian accounting mask.

<figure class="crd-table-figure" id="tab:appendix-subreg-dist">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Admin-1 Division</th><th class="crd-th">Sites</th><th class="crd-th">Obs</th><th class="crd-th">Peak Sum</th><th class="crd-th">Leading Localities</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Adrar (MRT)</strong></td><td class="crd-td">4</td><td class="crd-td">23</td><td class="crd-td">44,6k</td><td class="crd-td">Atar, Aoujeft, Chinguetti</td></tr>
<tr><td class="crd-td"><strong>Agadez (NER)</strong></td><td class="crd-td">26</td><td class="crd-td">91</td><td class="crd-td">355,8k</td><td class="crd-td">Agadez, Arlit, Akokan</td></tr>
<tr><td class="crd-td"><strong>Assaba (MRT)</strong></td><td class="crd-td">7</td><td class="crd-td">39</td><td class="crd-td">135,1k</td><td class="crd-td">Kiffa, Guerou, Kamour</td></tr>
<tr><td class="crd-td"><strong>Bahr el Gazel (TCD)</strong></td><td class="crd-td">2</td><td class="crd-td">15</td><td class="crd-td">68,7k</td><td class="crd-td">Moussoro, Salal</td></tr>
<tr><td class="crd-td"><strong>Bamako (MLI)</strong></td><td class="crd-td">2</td><td class="crd-td">22</td><td class="crd-td">8,41M</td><td class="crd-td">Bamako (Agglomeration), Bamako</td></tr>
<tr><td class="crd-td"><strong>Batha (TCD)</strong></td><td class="crd-td">4</td><td class="crd-td">25</td><td class="crd-td">95,4k</td><td class="crd-td">Oum Hadjer, Ati, Amdjemena Bilala</td></tr>
<tr><td class="crd-td"><strong>Borkou (TCD)</strong></td><td class="crd-td">2</td><td class="crd-td">10</td><td class="crd-td">73,3k</td><td class="crd-td">Faya-Largeau, Kirdimi</td></tr>
<tr><td class="crd-td"><strong>Boucle du Mouhoun (BFA)</strong></td><td class="crd-td">17</td><td class="crd-td">102</td><td class="crd-td">534,9k</td><td class="crd-td">Solenzo (Agglomeration), Dédougou (Agglomeration), Dédougou</td></tr>
<tr><td class="crd-td"><strong>Brakna (MRT)</strong></td><td class="crd-td">12</td><td class="crd-td">59</td><td class="crd-td">112,2k</td><td class="crd-td">Aleg, Magta-Lahjar, Boghé</td></tr>
<tr><td class="crd-td"><strong>Cascades (BFA)</strong></td><td class="crd-td">14</td><td class="crd-td">77</td><td class="crd-td">495,2k</td><td class="crd-td">Banfora, Banfora (Agglomeration), Ouangolodougou</td></tr>
<tr><td class="crd-td"><strong>Central and Upper River (GMB)</strong></td><td class="crd-td">12</td><td class="crd-td">45</td><td class="crd-td">104,5k</td><td class="crd-td">Basse Santa Su, Farato, Garowol</td></tr>
<tr><td class="crd-td"><strong>Centre-Est (BFA)</strong></td><td class="crd-td">22</td><td class="crd-td">145</td><td class="crd-td">1,09M</td><td class="crd-td">Tenkodogo (Agglomeration), Dapaong, Pouytenga</td></tr>
<tr><td class="crd-td"><strong>Centre-Nord (BFA)</strong></td><td class="crd-td">14</td><td class="crd-td">88</td><td class="crd-td">595,7k</td><td class="crd-td">Kaya, Kaya (Agglomeration), Kongoussi</td></tr>
<tr><td class="crd-td"><strong>Centre-Ouest (BFA)</strong></td><td class="crd-td">17</td><td class="crd-td">102</td><td class="crd-td">713,9k</td><td class="crd-td">Koudougou, Koudougou (Agglomeration), Léo</td></tr>
<tr><td class="crd-td"><strong>Centre-Sud (BFA)</strong></td><td class="crd-td">11</td><td class="crd-td">71</td><td class="crd-td">495,9k</td><td class="crd-td">Bolgatanga (Agglomeration), Bolgatanga, Navrongo</td></tr>
<tr><td class="crd-td"><strong>Centre (BFA)</strong></td><td class="crd-td">9</td><td class="crd-td">38</td><td class="crd-td">6,13M</td><td class="crd-td">Ouagadougou (Agglomeration), Ouagadougou, Saaba</td></tr>
<tr><td class="crd-td"><strong>Chari-Baguirmi (TCD)</strong></td><td class="crd-td">7</td><td class="crd-td">39</td><td class="crd-td">144,2k</td><td class="crd-td">Dourbali, Mandélia, Guélendeng</td></tr>
<tr><td class="crd-td"><strong>Dakar (SEN)</strong></td><td class="crd-td">13</td><td class="crd-td">57</td><td class="crd-td">9,53M</td><td class="crd-td">Dakar (Agglomeration), Dakar, Pikine</td></tr>
<tr><td class="crd-td"><strong>Dakhlet Nouadhibou (MRT)</strong></td><td class="crd-td">2</td><td class="crd-td">13</td><td class="crd-td">177,3k</td><td class="crd-td">Nouadhibou, Chami</td></tr>
<tr><td class="crd-td"><strong>Diffa (NER) [Regime III Lake Chad Basin Conflict]</strong></td><td class="crd-td">55</td><td class="crd-td">151</td><td class="crd-td">346,3k</td><td class="crd-td">Damasak, Diffa, N'Guigmi</td></tr>
<tr><td class="crd-td"><strong>Diourbel (SEN)</strong></td><td class="crd-td">9</td><td class="crd-td">57</td><td class="crd-td">1,71M</td><td class="crd-td">Touba, Diourbel, Mbacké</td></tr>
<tr><td class="crd-td"><strong>Dosso (NER)</strong></td><td class="crd-td">355</td><td class="crd-td">836</td><td class="crd-td">1,37M</td><td class="crd-td">Dosso, Malanville, Gaya</td></tr>
<tr><td class="crd-td"><strong>Ennedi-Est (TCD)</strong></td><td class="crd-td">1</td><td class="crd-td">5</td><td class="crd-td">41,5k</td><td class="crd-td">Amdjarass</td></tr>
<tr><td class="crd-td"><strong>Ennedi-Ouest (TCD)</strong></td><td class="crd-td">2</td><td class="crd-td">12</td><td class="crd-td">52,1k</td><td class="crd-td">Fada, Kalait</td></tr>
<tr><td class="crd-td"><strong>Est (BFA)</strong></td><td class="crd-td">19</td><td class="crd-td">96</td><td class="crd-td">527,5k</td><td class="crd-td">Fada N'gourma (Agglomeration), Fada N'Gourma, Namponkoré</td></tr>
<tr><td class="crd-td"><strong>Fatick (SEN)</strong></td><td class="crd-td">16</td><td class="crd-td">101</td><td class="crd-td">1,02M</td><td class="crd-td">Banjul (Agglomeration), Banjul, Fatick</td></tr>
<tr><td class="crd-td"><strong>Gao (MLI) [Regime III Liptako-Gourma Conflict]</strong></td><td class="crd-td">6</td><td class="crd-td">38</td><td class="crd-td">291,2k</td><td class="crd-td">Gao, Bourem, Ansongo Dioula</td></tr>
<tr><td class="crd-td"><strong>Gorgol (MRT)</strong></td><td class="crd-td">10</td><td class="crd-td">51</td><td class="crd-td">127,2k</td><td class="crd-td">Kaédi, Maghama, Lexeibe</td></tr>
<tr><td class="crd-td"><strong>Greater Banjul and West Coast (GMB)</strong></td><td class="crd-td">34</td><td class="crd-td">107</td><td class="crd-td">1,79M</td><td class="crd-td">Banjul (Agglomeration), Brikama, Bundunka Kunda</td></tr>
<tr><td class="crd-td"><strong>Guéra (TCD)</strong></td><td class="crd-td">5</td><td class="crd-td">35</td><td class="crd-td">148,3k</td><td class="crd-td">Mongo, Bitkine, Mangalmé</td></tr>
<tr><td class="crd-td"><strong>Guidimaka (MRT)</strong></td><td class="crd-td">18</td><td class="crd-td">76</td><td class="crd-td">151,5k</td><td class="crd-td">Sélibabi, Tachott Botokholo, Diawara</td></tr>
<tr><td class="crd-td"><strong>Hadjer-Lamis (TCD)</strong></td><td class="crd-td">9</td><td class="crd-td">53</td><td class="crd-td">214k</td><td class="crd-td">Massakory, Massaguet, Bokoro</td></tr>
<tr><td class="crd-td"><strong>Hauts-Bassins (BFA)</strong></td><td class="crd-td">15</td><td class="crd-td">75</td><td class="crd-td">2,42M</td><td class="crd-td">Bobo Dioulasso (Agglomeration), Bobo-Dioulasso, Houndé</td></tr>
<tr><td class="crd-td"><strong>Hodh ech Chargui (MRT)</strong></td><td class="crd-td">13</td><td class="crd-td">71</td><td class="crd-td">220,7k</td><td class="crd-td">Mbera, Néma, Tembedra</td></tr>
<tr><td class="crd-td"><strong>Hodh el Gharbi (MRT)</strong></td><td class="crd-td">8</td><td class="crd-td">38</td><td class="crd-td">111,7k</td><td class="crd-td">Aïoun, Tintane, Kobenni</td></tr>
<tr><td class="crd-td"><strong>Inchiri (MRT)</strong></td><td class="crd-td">1</td><td class="crd-td">8</td><td class="crd-td">20,3k</td><td class="crd-td">Akjoujt</td></tr>
<tr><td class="crd-td"><strong>Kaffrine (SEN)</strong></td><td class="crd-td">5</td><td class="crd-td">39</td><td class="crd-td">135,4k</td><td class="crd-td">Kaffrine, Koungheul, Nganda</td></tr>
<tr><td class="crd-td"><strong>Kanem (TCD)</strong></td><td class="crd-td">3</td><td class="crd-td">14</td><td class="crd-td">80,7k</td><td class="crd-td">Mao, Nokou, Mondo</td></tr>
<tr><td class="crd-td"><strong>Kaolack (SEN)</strong></td><td class="crd-td">11</td><td class="crd-td">89</td><td class="crd-td">629,9k</td><td class="crd-td">Kaolack, Kahone, Farafenni</td></tr>
<tr><td class="crd-td"><strong>Kayes (MLI)</strong></td><td class="crd-td">33</td><td class="crd-td">170</td><td class="crd-td">1,02M</td><td class="crd-td">Kayes, Kayes (Agglomeration), Kita</td></tr>
<tr><td class="crd-td"><strong>... plus 44 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Interior settlement counts, observation counts, combined peak totals and leading localities across all 84 Admin-1 divisions.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Linear interpolation between dated census and Africapolis observations is strictly bounded between each settlement's earliest and latest attested year; pre-foundation and unupdated intervals display a hyphen (-). Bracketed codes denote administrative city-proper units (C) versus continuous built-up metropolitan agglomerations (M).
