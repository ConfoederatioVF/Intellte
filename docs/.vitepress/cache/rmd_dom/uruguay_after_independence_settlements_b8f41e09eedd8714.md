---
title: "Uruguay after Independence"
subtitle: "Settlement Gazetteer, Montevideo Metropolitan Arc and Source Ledger, 1830-2026"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/uruguay_after_independence_urban_hierarchy.png"
hero_caption: "Top twelve catalogued Uruguayan settlements by peak population and log-log rank-size fit across 440 localities."
hero_label: "fig:hero-uruguay-settlements"
bibliography: uruguay_after_independence_literature_review.bib
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



![Top twelve catalogued Uruguayan settlements by peak population and log-log rank-size fit across 440 localities.](figures/uruguay_after_independence_urban_hierarchy.png)



# Abstract

This settlement gazetteer catalogues 440 inhabited localities across all 19 departments of Uruguay between 1830 and 2026, assembling 1.385 settlement-year observations drawn exclusively from official *Instituto Nacional de Estadística* (INE) locality censuses (1852 to 2023), the 1889 to 1890 Montevideo municipal enumeration and *Infraestructura de Datos Espaciales* (IDE) urbanised area inventories [@Censo1892Censo; @Aguerre2022Localidades; @Riano2019Imputacion; @Calleja2025Diagnostico]. The register distinguishes Montevideo city proper (1.281.323 in 2023, peaking at 1.307.562 in 1996) and the wider Montevideo metropolitan aggregate (1.593.422 in 2023, peaking at 1.596.673 in 2011) from nine separately tracked suburban nodes across Canelones, San José and adjacent coastal corridors, led by Ciudad de la Costa (113.252), Las Piedras (61.292 in 2023, 71.258 peak), Ciudad del Plata (39.416) and Pando (31.174) [@Queijo1989Aspects; @Melendres2019Estructura]. Alongside the 440 catalogued localities, the regional source ledger documents 291 excluded candidate entries out of 731 evaluated records, separating 237 unlocated minor *fraccionamientos* from 54 duplicate aliases and co-located suburban twins such as Barros Blancos and Atlántida.

# Background

Uruguay's urban system took shape around a single colonial harbour on the Río de la Plata while the cattle-raising interior remained sparsely punctuated by river ports, railway junctions and frontier garrisons [@Etchechurybarrera2017Chinas; @Barrera2012Causa]. During the late nineteenth century, Italian and Spanish immigration swelled Montevideo from 33.994 residents in 1852 to 215.061 in 1889 and 291.465 inside the city core by 1908, creating an early metropolitan monopoly unmatched elsewhere in South America [@Duffau2024Conspiracion; @Censo1892Censo]. By the 1963 census, Montevideo's urban core reached 1.202.890 inhabitants, while secondary towns ranged only between 57.975 in Salto and 51.645 in Paysandú down to provincial capitals of 10k to 40k [@Aguerre2022Localidades; @Brites2017Represas; @Cepalcelade1977Primeros].

Since the 1970s, two spatial currents have reshaped the gazetteer. On the one hand, deindustrialisation, rising land values and highway paving pushed residential growth out of Montevideo department into coastal Canelones (*Ciudad de la Costa*, *Parque del Plata*, *Salinas*), northern commuters (*Las Piedras*, *Pando*, *18 de Mayo*) and western San José (*Ciudad del Plata*), alongside Punta del Este's year-round resort expansion in Maldonado [@Queijo1989Aspects; @Macchio2026Momentos; @Perrone2011Regularidad; @Bolana2026Pobreza]. On the other hand, prolonged rural out-migration, emigration waves and ultra-low fertility left scores of small pastoral towns and rice-growing settlements across Treinta y Tres, Lavalleja, Durazno and Flores stationary or shrinking between 1963 and 2023, while binational border towns such as Chuy and Rivera sustained active cross-border circulation [@Calleja2025Diagnostico; @Nathan2016Diverging; @Ferre2024Short; @Uriarte2024Mobility; @Koolhaas2024Motivaciones].

# Methodology

Settlement compilation proceeded across four sequential ingestion waves logged in the regional source ledger. Wave 1 extracted 348 georeferenced localities directly from the official INE 2004, 2011 and 2023 locality tables and IDE Uruguay urban polygons. Wave 2 repaired suburban coordinates and metropolitan reconciliation tags, adding 61 entries (17,53% marginal gain). Wave 3 backfilled nineteenth- and twentieth-century census series (1852, 1860, 1889, 1908, 1963, 1975, 1985 and 1996) for 26 major urban centres (6,36% marginal gain). Wave 4 conducted a gap-check across all 19 departmental masks, incorporating 5 final localities for an asymptotic marginal gain of 1,15% and zero reliance on crowd-sourced web compendia.

Metropolitan reconciliation assigns an explicit scope tag to each entry so city-proper, suburban and metropolitan totals remain transparent: 430 localities represent distinct cities, towns or villages, 9 represent extra-municipal suburbs in the Montevideo metropolitan orbit and 1 represents the consolidated Montevideo metropolitan aggregate. Candidate records lacking authoritative coordinates (237 minor localities) or duplicating adjacent centres within short distances (54 aliases and co-located suburban twins) were excluded and documented in the ledger.

# Testing and Validation

Ledger accounting reconciles 440 included settlements and 291 excluded candidates across 731 total evaluated records with zero unaccounted entries. Every catalogued entry carries WGS84 coordinates, departmental mask assignment and at least one census count between 1852 and 2023. Across the 440 included localities, 132 settlements reach or exceed 1.000 inhabitants at peak population and 24 exceed 20k, yielding a clean log-log Zipf exponent of $\alpha = 1{,}54$ ($R^2 = 0,97$) that confirms strong metropolitan primacy around Montevideo without artificial truncation in the mid-tier distribution [@Queijo1989Aspects; @Aguerre2022Localidades; @Riano2019Imputacion].

# Results

## Leading Settlements across Uruguay

Table \ref{tab:top30-uruguay} presents the top 30 catalogued settlements ordered by peak documented census population, spanning Montevideo Metro (1,6M) and Montevideo city proper (1,31M) down through departmental capitals and major suburban municipalities around 18k to 113k.

<figure class="crd-table-figure" id="tab:top30-uruguay">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Department</th><th class="crd-th">Lat, Lon</th><th class="crd-th">1908</th><th class="crd-th">1963</th><th class="crd-th">2011</th><th class="crd-th">2023</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Montevideo (Metro)</strong></td><td class="crd-td">Montevideo</td><td class="crd-td">-34,89, -56,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6M</td><td class="crd-td">1,59M</td><td class="crd-td">1,6M (2011)</td></tr>
<tr><td class="crd-td"><strong>Montevideo</strong></td><td class="crd-td">Montevideo</td><td class="crd-td">-34,89, -56,33</td><td class="crd-td">291,5k</td><td class="crd-td">1,2M</td><td class="crd-td">1,3M</td><td class="crd-td">1,28M</td><td class="crd-td">1,31M (1996)</td></tr>
<tr><td class="crd-td"><strong>Ciudad de la Costa</strong></td><td class="crd-td">Canelones</td><td class="crd-td">-34,76, -56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">95,2k</td><td class="crd-td">113,3k</td><td class="crd-td">113,3k (2023)</td></tr>
<tr><td class="crd-td"><strong>Salto</strong></td><td class="crd-td">Salto</td><td class="crd-td">-31,38, -57,93</td><td class="crd-td">19,7k</td><td class="crd-td">58k</td><td class="crd-td">104k</td><td class="crd-td">112,5k</td><td class="crd-td">112,5k (2023)</td></tr>
<tr><td class="crd-td"><strong>Maldonado</strong></td><td class="crd-td">Maldonado</td><td class="crd-td">-34,92, -54,92</td><td class="crd-td">4,4k</td><td class="crd-td">15k</td><td class="crd-td">62,6k</td><td class="crd-td">101k</td><td class="crd-td">101k (2023)</td></tr>
<tr><td class="crd-td"><strong>Rivera</strong></td><td class="crd-td">Rivera</td><td class="crd-td">-30,92, -55,58</td><td class="crd-td">9k</td><td class="crd-td">40,1k</td><td class="crd-td">64,5k</td><td class="crd-td">82,6k</td><td class="crd-td">82,6k (2023)</td></tr>
<tr><td class="crd-td"><strong>Paysandu</strong></td><td class="crd-td">Paysandú</td><td class="crd-td">-32,3, -58,06</td><td class="crd-td">21k</td><td class="crd-td">51,6k</td><td class="crd-td">76,4k</td><td class="crd-td">79,5k</td><td class="crd-td">79,5k (2023)</td></tr>
<tr><td class="crd-td"><strong>Las Piedras</strong></td><td class="crd-td">Canelones</td><td class="crd-td">-34,72, -56,19</td><td class="crd-td">8,1k</td><td class="crd-td">40,7k</td><td class="crd-td">71,3k</td><td class="crd-td">61,3k</td><td class="crd-td">71,3k (2011)</td></tr>
<tr><td class="crd-td"><strong>Tacuarembo</strong></td><td class="crd-td">Tacuarembó</td><td class="crd-td">-31,73, -55,98</td><td class="crd-td">7,5k</td><td class="crd-td">28,2k</td><td class="crd-td">54,8k</td><td class="crd-td">58,7k</td><td class="crd-td">58,7k (2023)</td></tr>
<tr><td class="crd-td"><strong>Melo</strong></td><td class="crd-td">Cerro Largo</td><td class="crd-td">-32,37, -54,16</td><td class="crd-td">12,4k</td><td class="crd-td">33,7k</td><td class="crd-td">51,8k</td><td class="crd-td">55,6k</td><td class="crd-td">55,6k (2023)</td></tr>
<tr><td class="crd-td"><strong>Artigas</strong></td><td class="crd-td">Artigas</td><td class="crd-td">-30,42, -56,47</td><td class="crd-td">8,9k</td><td class="crd-td">23,4k</td><td class="crd-td">40,7k</td><td class="crd-td">42,9k</td><td class="crd-td">42,9k (2023)</td></tr>
<tr><td class="crd-td"><strong>Mercedes</strong></td><td class="crd-td">Soriano</td><td class="crd-td">-33,26, -58,02</td><td class="crd-td">15,7k</td><td class="crd-td">31,3k</td><td class="crd-td">42k</td><td class="crd-td">41,5k</td><td class="crd-td">42k (2004)</td></tr>
<tr><td class="crd-td"><strong>Durazno</strong></td><td class="crd-td">Durazno</td><td class="crd-td">-33,39, -56,52</td><td class="crd-td">10,6k</td><td class="crd-td">22,2k</td><td class="crd-td">34,4k</td><td class="crd-td">40,1k</td><td class="crd-td">40,1k (2023)</td></tr>
<tr><td class="crd-td"><strong>Ciudad Del Plata</strong></td><td class="crd-td">San José</td><td class="crd-td">-34,75, -56,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">31,1k</td><td class="crd-td">39,4k</td><td class="crd-td">39,4k (2023)</td></tr>
<tr><td class="crd-td"><strong>Minas</strong></td><td class="crd-td">Lavalleja</td><td class="crd-td">-34,39, -55,28</td><td class="crd-td">13,3k</td><td class="crd-td">31,3k</td><td class="crd-td">38,4k</td><td class="crd-td">38,3k</td><td class="crd-td">38,4k (2011)</td></tr>
<tr><td class="crd-td"><strong>San Jose De Mayo</strong></td><td class="crd-td">San José</td><td class="crd-td">-34,34, -56,71</td><td class="crd-td">12,3k</td><td class="crd-td">27,5k</td><td class="crd-td">36,7k</td><td class="crd-td">36,2k</td><td class="crd-td">36,7k (2011)</td></tr>
<tr><td class="crd-td"><strong>Florida</strong></td><td class="crd-td">Florida</td><td class="crd-td">-34,11, -56,19</td><td class="crd-td">10,6k</td><td class="crd-td">20,9k</td><td class="crd-td">33,6k</td><td class="crd-td">34,9k</td><td class="crd-td">34,9k (2023)</td></tr>
<tr><td class="crd-td"><strong>Colonia Del Sacramento</strong></td><td class="crd-td">Colonia</td><td class="crd-td">-34,45, -57,8</td><td class="crd-td">8k</td><td class="crd-td">12,8k</td><td class="crd-td">26,2k</td><td class="crd-td">31,7k</td><td class="crd-td">31,7k (2023)</td></tr>
<tr><td class="crd-td"><strong>Pando</strong></td><td class="crd-td">Canelones</td><td class="crd-td">-34,7, -55,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25,9k</td><td class="crd-td">31,2k</td><td class="crd-td">31,2k (2023)</td></tr>
<tr><td class="crd-td"><strong>San Carlos</strong></td><td class="crd-td">Maldonado</td><td class="crd-td">-34,79, -54,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">27,5k</td><td class="crd-td">29,3k</td><td class="crd-td">29,3k (2023)</td></tr>
<tr><td class="crd-td"><strong>Treinta Y Tres</strong></td><td class="crd-td">Treinta y Tres</td><td class="crd-td">-33,23, -54,38</td><td class="crd-td">7,7k</td><td class="crd-td">22,6k</td><td class="crd-td">25,5k</td><td class="crd-td">24,6k</td><td class="crd-td">26,4k (1996)</td></tr>
<tr><td class="crd-td"><strong>Fray Bentos</strong></td><td class="crd-td">Río Negro</td><td class="crd-td">-33,13, -58,3</td><td class="crd-td">7,4k</td><td class="crd-td">17,1k</td><td class="crd-td">24,4k</td><td class="crd-td">26,2k</td><td class="crd-td">26,2k (2023)</td></tr>
<tr><td class="crd-td"><strong>Rocha</strong></td><td class="crd-td">Rocha</td><td class="crd-td">-34,48, -54,33</td><td class="crd-td">12,2k</td><td class="crd-td">19,5k</td><td class="crd-td">25,4k</td><td class="crd-td">26,1k</td><td class="crd-td">26,1k (2023)</td></tr>
<tr><td class="crd-td"><strong>Canelones</strong></td><td class="crd-td">Canelones</td><td class="crd-td">-34,57, -56,4</td><td class="crd-td">8,5k</td><td class="crd-td">14k</td><td class="crd-td">19,9k</td><td class="crd-td">24,2k</td><td class="crd-td">24,2k (2023)</td></tr>
<tr><td class="crd-td"><strong>18 De Mayo</strong></td><td class="crd-td">Canelones</td><td class="crd-td">-34,7, -56,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">22,5k</td><td class="crd-td">22,6k</td><td class="crd-td">22,6k (2023)</td></tr>
<tr><td class="crd-td"><strong>Trinidad</strong></td><td class="crd-td">Flores</td><td class="crd-td">-33,52, -56,9</td><td class="crd-td">8,3k</td><td class="crd-td">15,5k</td><td class="crd-td">21,4k</td><td class="crd-td">22,4k</td><td class="crd-td">22,4k (2023)</td></tr>
<tr><td class="crd-td"><strong>La Paz</strong></td><td class="crd-td">Canelones</td><td class="crd-td">-34,35, -57,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20,5k</td><td class="crd-td">19,6k</td><td class="crd-td">20,5k (2011)</td></tr>
<tr><td class="crd-td"><strong>Carmelo</strong></td><td class="crd-td">Colonia</td><td class="crd-td">-33,99, -58,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18k</td><td class="crd-td">20k</td><td class="crd-td">20k (2023)</td></tr>
<tr><td class="crd-td"><strong>Dolores</strong></td><td class="crd-td">Soriano</td><td class="crd-td">-33,55, -58,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">17,2k</td><td class="crd-td">18,8k</td><td class="crd-td">18,8k (2023)</td></tr>
<tr><td class="crd-td"><strong>Punta Del Este</strong></td><td class="crd-td">Maldonado</td><td class="crd-td">-34,94, -54,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,3k</td><td class="crd-td">17,4k</td><td class="crd-td">17,4k (2023)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 30 settlements in Uruguay ordered by peak documented census population (440 catalogued localities).</figcaption>
</figure>

## Montevideo Metropolitan Arc and Canelones Suburbs

Table \ref{tab:metro-uruguay} isolates Montevideo Metro, Montevideo city proper and the primary suburban and peripheral nodes tracked across Canelones, Montevideo and San José from 1975 to 2023. While Montevideo's municipal core rose only from 1,18M in 1975 to 1,31M in 1996 before easing to 1,28M in 2023, Ciudad de la Costa expanded nearly sixfold from 19,5k in 1975 to 113,3k in 2023, and Ciudad del Plata multiplied more than threefold from 11,1k to 39,4k over the same period [@Queijo1989Aspects; @Melendres2019Estructura; @Bolana2026Pobreza].

<figure class="crd-table-figure" id="tab:metro-uruguay">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Scope</th><th class="crd-th">1975</th><th class="crd-th">1985</th><th class="crd-th">1996</th><th class="crd-th">2004</th><th class="crd-th">2011</th><th class="crd-th">2023</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Montevideo (Metro)</strong></td><td class="crd-td">Metro</td><td class="crd-td">1,32M</td><td class="crd-td">1,43M</td><td class="crd-td">1,55M</td><td class="crd-td">1,54M</td><td class="crd-td">1,6M</td><td class="crd-td">1,59M</td></tr>
<tr><td class="crd-td"><strong>Montevideo</strong></td><td class="crd-td">City proper</td><td class="crd-td">1,18M</td><td class="crd-td">1,25M</td><td class="crd-td">1,31M</td><td class="crd-td">1,27M</td><td class="crd-td">1,3M</td><td class="crd-td">1,28M</td></tr>
<tr><td class="crd-td"><strong>Ciudad de la Costa</strong></td><td class="crd-td">Suburb</td><td class="crd-td">19,5k</td><td class="crd-td">34,5k</td><td class="crd-td">66,4k</td><td class="crd-td">83,4k</td><td class="crd-td">95,2k</td><td class="crd-td">113,3k</td></tr>
<tr><td class="crd-td"><strong>Las Piedras</strong></td><td class="crd-td">Suburb</td><td class="crd-td">53,3k</td><td class="crd-td">58,3k</td><td class="crd-td">66,6k</td><td class="crd-td">69,2k</td><td class="crd-td">71,3k</td><td class="crd-td">61,3k</td></tr>
<tr><td class="crd-td"><strong>Ciudad Del Plata</strong></td><td class="crd-td">Suburb</td><td class="crd-td">11,1k</td><td class="crd-td">13,5k</td><td class="crd-td">20,7k</td><td class="crd-td">26,6k</td><td class="crd-td">31,1k</td><td class="crd-td">39,4k</td></tr>
<tr><td class="crd-td"><strong>Pando</strong></td><td class="crd-td">Suburb</td><td class="crd-td">16,4k</td><td class="crd-td">19,8k</td><td class="crd-td">23,4k</td><td class="crd-td">24k</td><td class="crd-td">25,9k</td><td class="crd-td">31,2k</td></tr>
<tr><td class="crd-td"><strong>18 De Mayo</strong></td><td class="crd-td">City proper</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">22,5k</td><td class="crd-td">22,6k</td></tr>
<tr><td class="crd-td"><strong>La Paz</strong></td><td class="crd-td">Suburb</td><td class="crd-td">14,7k</td><td class="crd-td">16,2k</td><td class="crd-td">19,5k</td><td class="crd-td">19,8k</td><td class="crd-td">20,5k</td><td class="crd-td">19,6k</td></tr>
<tr><td class="crd-td"><strong>Paso Carrasco</strong></td><td class="crd-td">City proper</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15k</td><td class="crd-td">15,9k</td><td class="crd-td">17,2k</td></tr>
<tr><td class="crd-td"><strong>Progreso</strong></td><td class="crd-td">Suburb</td><td class="crd-td">9,6k</td><td class="crd-td">11,2k</td><td class="crd-td">14,5k</td><td class="crd-td">15,8k</td><td class="crd-td">16,2k</td><td class="crd-td">11,1k</td></tr>
<tr><td class="crd-td"><strong>Parque Del Plata</strong></td><td class="crd-td">Suburb</td><td class="crd-td">2,4k</td><td class="crd-td">3,2k</td><td class="crd-td">5k</td><td class="crd-td">5,9k</td><td class="crd-td">7,9k</td><td class="crd-td">13,1k</td></tr>
<tr><td class="crd-td"><strong>Salinas</strong></td><td class="crd-td">Suburb</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td><td class="crd-td">5,3k</td><td class="crd-td">6,6k</td><td class="crd-td">8,6k</td><td class="crd-td">11,3k</td></tr>
<tr><td class="crd-td"><strong>Fracc. Cno. Andaluz Y R.84</strong></td><td class="crd-td">City proper</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,3k</td><td class="crd-td">9,6k</td></tr>
<tr><td class="crd-td"><strong>Toledo</strong></td><td class="crd-td">Suburb</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">4,4k</td><td class="crd-td">6,5k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Montevideo metropolitan aggregate, municipal core and major Canelones and San José suburban nodes, 1975 to 2023.</figcaption>
</figure>

## Departmental Coverage and Source Ledger Summary

Table \ref{tab:dept-gazetteer} summarises spatial mask site counts and leading centres across all 19 departments, while Table \ref{tab:ledger-waves} reports the four-wave saturation progression and exclusion breakdown from the source ledger. Canelones holds the highest count at 58 catalogued localities, followed by Colonia (37), Paysandú (35), San José (28) and Artigas (27).

<figure class="crd-table-figure" id="tab:dept-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Department</th><th class="crd-th">Sites</th><th class="crd-th">Share</th><th class="crd-th">Leading Mask Entry (Peak)</th><th class="crd-th">2023 Dept. Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Artigas</strong></td><td class="crd-td">27</td><td class="crd-td">6,1%</td><td class="crd-td">Artigas (42,9k)</td><td class="crd-td">77,5k</td></tr>
<tr><td class="crd-td"><strong>Canelones</strong></td><td class="crd-td">58</td><td class="crd-td">13,2%</td><td class="crd-td">Las Piedras (71,3k)</td><td class="crd-td">609k</td></tr>
<tr><td class="crd-td"><strong>Cerro Largo</strong></td><td class="crd-td">23</td><td class="crd-td">5,2%</td><td class="crd-td">Melo (55,6k)</td><td class="crd-td">91k</td></tr>
<tr><td class="crd-td"><strong>Colonia</strong></td><td class="crd-td">37</td><td class="crd-td">8,4%</td><td class="crd-td">Colonia Del Sacramento (31,7k)</td><td class="crd-td">135,8k</td></tr>
<tr><td class="crd-td"><strong>Durazno</strong></td><td class="crd-td">13</td><td class="crd-td">3%</td><td class="crd-td">San Gregorio De Polanco (3,8k)</td><td class="crd-td">62k</td></tr>
<tr><td class="crd-td"><strong>Flores</strong></td><td class="crd-td">7</td><td class="crd-td">1,6%</td><td class="crd-td">Durazno (40,1k)</td><td class="crd-td">26,3k</td></tr>
<tr><td class="crd-td"><strong>Florida</strong></td><td class="crd-td">21</td><td class="crd-td">4,8%</td><td class="crd-td">Florida (34,9k)</td><td class="crd-td">70,3k</td></tr>
<tr><td class="crd-td"><strong>Lavalleja</strong></td><td class="crd-td">17</td><td class="crd-td">3,9%</td><td class="crd-td">Minas (38,4k)</td><td class="crd-td">59,2k</td></tr>
<tr><td class="crd-td"><strong>Maldonado</strong></td><td class="crd-td">24</td><td class="crd-td">5,5%</td><td class="crd-td">Maldonado (101k)</td><td class="crd-td">213k</td></tr>
<tr><td class="crd-td"><strong>Montevideo</strong></td><td class="crd-td">5</td><td class="crd-td">1,1%</td><td class="crd-td">Montevideo (Metro) (1,6M)</td><td class="crd-td">1,3M</td></tr>
<tr><td class="crd-td"><strong>Paysandú</strong></td><td class="crd-td">35</td><td class="crd-td">8%</td><td class="crd-td">Paysandu (79,5k)</td><td class="crd-td">121,8k</td></tr>
<tr><td class="crd-td"><strong>Rivera</strong></td><td class="crd-td">19</td><td class="crd-td">4,3%</td><td class="crd-td">Rivera (82,6k)</td><td class="crd-td">109,3k</td></tr>
<tr><td class="crd-td"><strong>Rocha</strong></td><td class="crd-td">19</td><td class="crd-td">4,3%</td><td class="crd-td">Rocha (26,1k)</td><td class="crd-td">80,7k</td></tr>
<tr><td class="crd-td"><strong>Río Negro</strong></td><td class="crd-td">18</td><td class="crd-td">4,1%</td><td class="crd-td">Fray Bentos (26,2k)</td><td class="crd-td">57,3k</td></tr>
<tr><td class="crd-td"><strong>Salto</strong></td><td class="crd-td">24</td><td class="crd-td">5,5%</td><td class="crd-td">Salto (112,5k)</td><td class="crd-td">136,2k</td></tr>
<tr><td class="crd-td"><strong>San José</strong></td><td class="crd-td">28</td><td class="crd-td">6,4%</td><td class="crd-td">San Jose De Mayo (36,7k)</td><td class="crd-td">119,7k</td></tr>
<tr><td class="crd-td"><strong>Soriano</strong></td><td class="crd-td">20</td><td class="crd-td">4,5%</td><td class="crd-td">Mercedes (42k)</td><td class="crd-td">83,7k</td></tr>
<tr><td class="crd-td"><strong>Tacuarembó</strong></td><td class="crd-td">19</td><td class="crd-td">4,3%</td><td class="crd-td">Tacuarembo (58,7k)</td><td class="crd-td">96k</td></tr>
<tr><td class="crd-td"><strong>Treinta y Tres</strong></td><td class="crd-td">26</td><td class="crd-td">5,9%</td><td class="crd-td">Treinta Y Tres (26,4k)</td><td class="crd-td">47,7k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Spatial mask settlement counts, leading localities and 2023 census population across 19 Uruguayan departments.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:ledger-waves">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Ingestion Wave</th><th class="crd-th">Prior Total</th><th class="crd-th">Added</th><th class="crd-th">Cumulative</th><th class="crd-th">Marginal Gain</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1: INE 2004-2023 and IDE polygons</strong></td><td class="crd-td">0</td><td class="crd-td">348</td><td class="crd-td">348</td><td class="crd-td">100%</td></tr>
<tr><td class="crd-td"><strong>Wave 2: Georeference and metro reconciliation</strong></td><td class="crd-td">348</td><td class="crd-td">61</td><td class="crd-td">409</td><td class="crd-td">17,53%</td></tr>
<tr><td class="crd-td"><strong>Wave 3: 1852-1996 historical census backfill</strong></td><td class="crd-td">409</td><td class="crd-td">26</td><td class="crd-td">435</td><td class="crd-td">6,36%</td></tr>
<tr><td class="crd-td"><strong>Wave 4: Departmental gap-check sweep</strong></td><td class="crd-td">435</td><td class="crd-td">5</td><td class="crd-td">440</td><td class="crd-td">1,15%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Four-wave gazetteer saturation sequence across 440 included Uruguayan settlements (plus 291 excluded ledger candidates).</figcaption>
</figure>

# Limitations

Two technical caveats apply to the settlement register. First, spatial assignment to departmental raster masks shifts several border or conurbation localities away from their formal administrative department: Ciudad de la Costa and Fracc. Cno. Andaluz y R.84 fall inside Montevideo's eastern mask edge rather than Canelones, Ciudad del Plata falls on Canelones's western edge rather than San José, and Durazno city lies on a boundary cell touching Flores. In addition, La Paz carries Canelones suburban census figures (19.574 in 2023) paired with coordinates corresponding to the homonymous Colonia La Paz settlement, and Toledo reflects a Cerro Largo boundary homonym rather than Canelones's suburban Toledo. Second, pre-1963 locality series are recorded primarily for Montevideo and major departmental capitals; smaller rural towns enter the gazetteer only from 2004 or 2011 onward when INE standardised locality-level digital tables [@Riano2019Imputacion; @Melendres2019Estructura].

# Conclusion

The 440-settlement Uruguayan gazetteer captures both the extreme primacy of Montevideo (1,59M metropolitan and 1,28M city proper in 2023) and the modern dispersion of growth into suburban Canelones, San José and coastal Maldonado [@Queijo1989Aspects; @Macchio2026Momentos]. Coupled with full source-ledger accounting across 731 evaluated candidates and four saturation waves, the register provides a transparent urban foundation for Uruguay's post-independence regional demographic history.

# Appendix

## Excluded Candidate Categories in the Source Ledger

Out of 731 evaluated candidate records in the Uruguayan source ledger, 440 were included and 291 were excluded without leaving any unaccounted records. Table \ref{tab:ledger-exclusions} summarises the exclusion categories and illustrates representative duplicate consolidations, including co-located suburban twins such as Barros Blancos (1,35 km from Ciudad de la Costa) and Atlántida (0,46 km from Parque del Plata).

<figure class="crd-table-figure" id="tab:ledger-exclusions">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Ledger Category</th><th class="crd-th">Status</th><th class="crd-th">Count</th><th class="crd-th">Share</th><th class="crd-th">Representative Examples</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Catalogued settlements</strong></td><td class="crd-td">Included</td><td class="crd-td">440</td><td class="crd-td">60,2%</td><td class="crd-td">Montevideo, Ciudad de la Costa, Salto, Maldonado</td></tr>
<tr><td class="crd-td"><strong>Unlocated minor localities or hamlets</strong></td><td class="crd-td">Excluded</td><td class="crd-td">237</td><td class="crd-td">32,4%</td><td class="crd-td">Franquia, Cumbres de Carrasco, Haras del Lago</td></tr>
<tr><td class="crd-td"><strong>Duplicate aliases and merged suburban twins</strong></td><td class="crd-td">Excluded</td><td class="crd-td">54</td><td class="crd-td">7,4%</td><td class="crd-td">Barros Blancos, Atlántida, Estación Porvenir</td></tr>
<tr><td class="crd-td"><strong>Total evaluated ledger candidates</strong></td><td class="crd-td">All candidates</td><td class="crd-td">731</td><td class="crd-td">100%</td><td class="crd-td">Four-wave INE and IDE reconciliation</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Source ledger classification across all 731 evaluated Uruguayan settlement candidates.</figcaption>
</figure>

# Sources

::: {#refs}
:::
