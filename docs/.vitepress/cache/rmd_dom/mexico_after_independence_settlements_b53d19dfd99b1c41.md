---
title: "Mexico after Independence"
subtitle: "Settlement Gazetteer and Urban Hierarchy, 1821-2025"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/mexico_after_independence_urban_hierarchy.png"
hero_caption: "Leading Mexican urban centres and rank-size distribution across 12.140 catalogued settlements from 1821 to 2025."
hero_label: "fig:hero-mexico-hierarchy"
bibliography: mexico_after_independence_literature_review.bib
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



![Leading Mexican urban centres and rank-size distribution across 12.140 catalogued settlements from 1821 to 2025.](figures/mexico_after_independence_urban_hierarchy.png)



# Abstract

This settlement gazetteer catalogues 12.140 geocoded Mexican cities, towns, rural localities and extra-municipal suburbs distributed across nine regional demographic zones between 1821 and 2025. Built directly from official Instituto Nacional de Estadística y Geografía (INEGI) Integración Territorial (ITER) census micro-tables (1990 to 2020), historical national population censuses (1895 to 1980) and longitudinal republican benchmarks (1821 to 2010), the register maintains a 0% crowd-sourced fallback share across four audited ingestion waves [@INEGICensos1996; @INEGIEHM2015; @INEGICPV2021]. Out of 12.253 candidate municipal and locality records evaluated in the source ledger, 113 redundant aliases within 25 km spatial buffers were consolidated during deduplication, leaving 11.483 city-proper settlements and 657 distinct extra-municipal suburbs spanning the Valley of Mexico (443), Guadalajara (144) and Monterrey (70) conurbations. Following strict municipal non-decomposition, Ciudad de México remains unified at 9.209.944 inhabitants in 2020 rather than fragmented into sixteen internal boroughs, while adjacent Estado de México municipalities such as Ecatepec de Morelos (1.643.623), Ciudad Nezahualcóyotl (1.072.676), Naucalpan de Juárez (776.220), Chimalhuacán (703.215) and Tlalnepantla (658.907) stand as separate suburban entries [@Bacalopez2021Metropolitan; @Aguilar2022Peri]. Across the top 180 urban settlements in 2020, Mexico's urban hierarchy follows a mature Zipfian power law ($\alpha = 0,95$, $R^2 = 0,95$; $\alpha = 0,97$ on historical peak series), documenting the two-century shift from colonial highland capitals toward northern border maquiladora cities, Bajío industrial hubs and Caribbean tourism centres [@Unikel1976; @Garza2003].

# Background

Independent Mexico began the nineteenth century with an urban network inherited almost intact from the Viceroyalty of New Spain: Ciudad de México anchored the highland basin above 170k to 205k residents, flanked by regional episcopal and mining capitals such as Guadalajara, Puebla, Guanajuato, Querétaro, San Luis Potosí, Oaxaca and Mérida [@Humboldt1811; @Busto1880; @GarciaCubas1884]. Porfirian trunk railways reordered that colonial hierarchy after 1880, lifting Monterrey into an industrial steel centre, conjuring Torreón from irrigated cotton estates in the Laguna and launching border customs towns at Ciudad Juárez and Nuevo Laredo [@Garza2003; @INEGIEHM2015]. During the Mexican Revolution of 1910 to 1920, warfare and rural displacement accelerated urban concentration inside the Federal District while depressing mining towns across Guanajuato, Zacatecas and Durango [@McCaa2003; @Escamillaguerrero2025Impact].

Following 1940, sustained mortality decline, import-substitution industrialisation and rural-to-urban migration reshaped every tier of the settlement hierarchy [@Alba1982; @Unikel1976]. By 1970 Ciudad de México reached 8,8M inhabitants inside the Federal District, triggering massive residential and industrial spillover into surrounding Estado de México municipalities [@Aguilar2022Peri; @Zamora2026Logistics]. Over the final third of the twentieth century and the opening decades of the twenty-first, export-assembly industrialisation along the United States border propelled Tijuana (1,81M), Juárez (1,5M), Mexicali (854,2k) and Reynosa (691,6k) into Mexico's top urban rank, while state-led tourism investment turned Cancún from 117 census residents in 1970 into a Caribbean metropolis of 888.797 inhabitants by 2020 [@Garza2003; @Pimienta2011Internal; @INEGICPV2021].

# Methodology

Settlement assembly proceeded across four sequential ingestion waves audited in the chapter source ledger. Wave 1 harvested 11.072 primary geocoded localities directly from official INEGI ITER census micro-tables (1990, 2000, 2010 and 2020), cross-linked with official national censuses (1895 to 1980) and nineteenth-century historical city series (1821 to 1889) [@INEGICensos1996; @INEGIEHM2015; @INEGICPV2021]. Wave 2 added 789 peer-reviewed urban-demography anchor records drawn from Mexican metropolitan research [@Unikel1976; @Garza2003], Wave 3 integrated 182 longitudinal census backfills and Wave 4 executed a regional gap-closing verification sweep contributing 97 localities (marginal gain 0,81%).

All 12.253 evaluated records underwent WGS84 coordinate harmonisation, point-in-polygon assignment across Mexico's nine macro-regional masks and 25 km spatial buffer deduplication, merging 113 redundant variant spellings and duplicate aliases into canonical records. Crucially, the register enforces municipal non-decomposition for Ciudad de México — preserving the unified capital city proper (9,21M in 2020) rather than subdividing it into sixteen *alcaldías* — while tagging legally autonomous peri-urban municipalities ringing Ciudad de México (443 suburbs), Guadalajara (144 suburbs) and Monterrey (70 suburbs) with explicit suburban scope metadata so analysts can evaluate both municipal cores and polycentric metropolitan constellations without double-counting [@Bacalopez2021Metropolitan; @Aguilar2022Peri; @Zamora2026Logistics].

# Testing and Validation

Ledger reconciliation confirms exact accounting across all 12.253 audited entries: 12.140 included settlements plus 113 excluded duplicate aliases, with 0% crowd-sourced fallback across every sub-region. Every included record carries valid geographic coordinates, a sub-regional polygon assignment, a municipal scope tag (11.483 city proper; 657 extra-municipal suburbs) and official INEGI census provenance. Figure \ref{fig:sett-regional-map} displays the spatial footprint of all 12.140 catalogued Mexican settlements across the nine macro-regions, highlighting the dense volcanic highland corridor from Puebla through the Valley of Mexico and Bajío to Guadalajara alongside the dispersed rural villages of Oaxaca and Chiapas and the concentrated border and coastal cities of the arid north.

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_jaguar/1.0-mexico-after-independence-settlements/mexico_after_independence_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 12.140 catalogued Mexican settlements across nine regional demographic zones, 1821 to 2025.</figcaption>
</figure>

Cross-checking 2020 ITER enumerations against historical 2005 intercensal entries caught two homonymy linkage artefacts in raw peak-value summaries: small namesake localities named Puebla in Baja California (32,57°N, 115,35°W) and Ciudad Juárez in Durango (25,49°N, 103,6°W) temporarily absorbed 2005 municipal totals from Heroica Puebla de Zaragoza and Juárez, Chihuahua, while Monterrey's 2005 count reflected metropolitan-area scope (2,68M) rather than its municipal core (1,14M in 2020). All urban rankings in this report therefore sort strictly on official 2020 INEGI ITER enumerations [@INEGICPV2021].

# Results

## Leading Thirty Mexican Urban Centres and Suburbs (2020)

Table \ref{tab:top30-cities} compiles Mexico's 30 largest urban municipalities and localities in 2020, spanning 9,21M in unified Ciudad de México down to 616,1k in Victoria de Durango. Ten settlements exceed 1M inhabitants, 35 exceed 500k and 131 exceed 100k [@INEGICPV2021; @Garza2003].

<figure class="crd-table-figure" id="tab:top30-cities">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Settlement</th><th class="crd-th">Sub-Region</th><th class="crd-th">Scope</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">2020 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Ciudad de México</td><td class="crd-td">Valley of Mexico and Central Core</td><td class="crd-td">City proper</td><td class="crd-td">19,43, -99,13</td><td class="crd-td">1838-2020</td><td class="crd-td">9,21M</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Tijuana</td><td class="crd-td">North-West and Baja California</td><td class="crd-td">City proper</td><td class="crd-td">32,53, -117,02</td><td class="crd-td">1900-2020</td><td class="crd-td">1,81M</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Ecatepec de Morelos</td><td class="crd-td">Valley of Mexico and Central Core</td><td class="crd-td">Suburb</td><td class="crd-td">19,6, -99,05</td><td class="crd-td">1950-2020</td><td class="crd-td">1,64M</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">León de los Aldama</td><td class="crd-td">Bajío and West-Central</td><td class="crd-td">City proper</td><td class="crd-td">21,12, -101,68</td><td class="crd-td">1857-2020</td><td class="crd-td">1,58M</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Heroica Puebla de Zaragoza</td><td class="crd-td">Valley of Mexico and Central Core</td><td class="crd-td">City proper</td><td class="crd-td">19,04, -98,2</td><td class="crd-td">1852-2020</td><td class="crd-td">1,54M</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Juárez</td><td class="crd-td">North-Central</td><td class="crd-td">City proper</td><td class="crd-td">31,75, -106,49</td><td class="crd-td">1857-2020</td><td class="crd-td">1,5M</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Guadalajara</td><td class="crd-td">Pacific West</td><td class="crd-td">City proper</td><td class="crd-td">20,68, -103,34</td><td class="crd-td">1823-2020</td><td class="crd-td">1,39M</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Zapopan</td><td class="crd-td">Pacific West</td><td class="crd-td">Suburb</td><td class="crd-td">20,72, -103,39</td><td class="crd-td">1950-2020</td><td class="crd-td">1,26M</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Monterrey</td><td class="crd-td">North-East</td><td class="crd-td">City proper</td><td class="crd-td">25,66, -100,31</td><td class="crd-td">1846-2020</td><td class="crd-td">1,14M</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Ciudad Nezahualcóyotl</td><td class="crd-td">Valley of Mexico and Central Core</td><td class="crd-td">Suburb</td><td class="crd-td">19,41, -99,02</td><td class="crd-td">1970-2020</td><td class="crd-td">1,07M</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Chihuahua</td><td class="crd-td">North-Central</td><td class="crd-td">City proper</td><td class="crd-td">28,64, -106,08</td><td class="crd-td">1831-2020</td><td class="crd-td">925,8k</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Mérida</td><td class="crd-td">Yucatán Peninsula</td><td class="crd-td">City proper</td><td class="crd-td">20,97, -89,62</td><td class="crd-td">1852-2020</td><td class="crd-td">921,8k</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Cancún</td><td class="crd-td">Yucatán Peninsula</td><td class="crd-td">City proper</td><td class="crd-td">21,16, -86,82</td><td class="crd-td">1970-2020</td><td class="crd-td">888,8k</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Saltillo</td><td class="crd-td">North-East</td><td class="crd-td">City proper</td><td class="crd-td">25,42, -101</td><td class="crd-td">1900-2020</td><td class="crd-td">864,4k</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Aguascalientes</td><td class="crd-td">Bajío and West-Central</td><td class="crd-td">City proper</td><td class="crd-td">21,88, -102,3</td><td class="crd-td">1857-2020</td><td class="crd-td">863,9k</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">Hermosillo</td><td class="crd-td">North-West and Baja California</td><td class="crd-td">City proper</td><td class="crd-td">29,07, -110,96</td><td class="crd-td">1877-2020</td><td class="crd-td">855,6k</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Mexicali</td><td class="crd-td">North-West and Baja California</td><td class="crd-td">City proper</td><td class="crd-td">32,64, -115,48</td><td class="crd-td">1921-2020</td><td class="crd-td">854,2k</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">San Luis Potosí</td><td class="crd-td">Bajío and West-Central</td><td class="crd-td">City proper</td><td class="crd-td">22,15, -100,98</td><td class="crd-td">1857-2020</td><td class="crd-td">845,9k</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">Culiacán Rosales</td><td class="crd-td">North-West and Baja California</td><td class="crd-td">City proper</td><td class="crd-td">24,81, -107,39</td><td class="crd-td">1857-2020</td><td class="crd-td">808,4k</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">Santiago de Querétaro</td><td class="crd-td">Bajío and West-Central</td><td class="crd-td">City proper</td><td class="crd-td">20,59, -100,39</td><td class="crd-td">1826-2020</td><td class="crd-td">794,8k</td></tr>
<tr><td class="crd-td"><strong>21</strong></td><td class="crd-td">Naucalpan de Juárez</td><td class="crd-td">Valley of Mexico and Central Core</td><td class="crd-td">Suburb</td><td class="crd-td">19,48, -99,23</td><td class="crd-td">1950-2020</td><td class="crd-td">776,2k</td></tr>
<tr><td class="crd-td"><strong>22</strong></td><td class="crd-td">Morelia</td><td class="crd-td">Pacific West</td><td class="crd-td">City proper</td><td class="crd-td">19,7, -101,19</td><td class="crd-td">1852-2020</td><td class="crd-td">743,3k</td></tr>
<tr><td class="crd-td"><strong>23</strong></td><td class="crd-td">Chimalhuacán</td><td class="crd-td">Valley of Mexico and Central Core</td><td class="crd-td">Suburb</td><td class="crd-td">19,42, -98,95</td><td class="crd-td">1990-2020</td><td class="crd-td">703,2k</td></tr>
<tr><td class="crd-td"><strong>24</strong></td><td class="crd-td">Reynosa</td><td class="crd-td">North-East</td><td class="crd-td">City proper</td><td class="crd-td">26,09, -98,28</td><td class="crd-td">1900-2020</td><td class="crd-td">691,6k</td></tr>
<tr><td class="crd-td"><strong>25</strong></td><td class="crd-td">Torreón</td><td class="crd-td">North-East</td><td class="crd-td">City proper</td><td class="crd-td">25,54, -103,45</td><td class="crd-td">1895-2020</td><td class="crd-td">690,2k</td></tr>
<tr><td class="crd-td"><strong>26</strong></td><td class="crd-td">Tlalnepantla</td><td class="crd-td">Valley of Mexico and Central Core</td><td class="crd-td">Suburb</td><td class="crd-td">19,54, -99,2</td><td class="crd-td">1950-2020</td><td class="crd-td">658,9k</td></tr>
<tr><td class="crd-td"><strong>27</strong></td><td class="crd-td">Acapulco de Juárez</td><td class="crd-td">Pacific South</td><td class="crd-td">City proper</td><td class="crd-td">16,86, -99,89</td><td class="crd-td">1857-2020</td><td class="crd-td">658,6k</td></tr>
<tr><td class="crd-td"><strong>28</strong></td><td class="crd-td">Tlaquepaque</td><td class="crd-td">Pacific West</td><td class="crd-td">Suburb</td><td class="crd-td">20,64, -103,31</td><td class="crd-td">1990-2020</td><td class="crd-td">650,1k</td></tr>
<tr><td class="crd-td"><strong>29</strong></td><td class="crd-td">Guadalupe</td><td class="crd-td">North-East</td><td class="crd-td">Suburb</td><td class="crd-td">25,68, -100,26</td><td class="crd-td">1950-2020</td><td class="crd-td">635,9k</td></tr>
<tr><td class="crd-td"><strong>30</strong></td><td class="crd-td">Victoria de Durango</td><td class="crd-td">North-Central</td><td class="crd-td">City proper</td><td class="crd-td">24,02, -104,67</td><td class="crd-td">1849-2020</td><td class="crd-td">616,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 30 Mexican urban centres and extra-municipal suburbs ranked by official 2020 INEGI enumeration (across 12.140 catalogued settlements).</figcaption>
</figure>

## Metropolitan Core and Extra-Municipal Suburb Reconciliation

Table \ref{tab:metro-suburbs} isolates Mexico's fifteen largest extra-municipal suburbs in 2020 across the Valley of Mexico, Guadalajara and Monterrey metropolitan zones, documenting the extraordinary post-1970 peripheral expansion that pushed suburban municipalities in Estado de México, Jalisco and Nuevo León past half a million — and in three cases past one million — residents [@Aguilar2022Peri; @Zamora2026Logistics; @Garza2003].

<figure class="crd-table-figure" id="tab:metro-suburbs">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Extra-Municipal Suburb</th><th class="crd-th">Conurbation</th><th class="crd-th">1970</th><th class="crd-th">1990</th><th class="crd-th">2020</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ecatepec de Morelos</strong></td><td class="crd-td">Valley of Mexico</td><td class="crd-td">11,9k</td><td class="crd-td">1,22M</td><td class="crd-td">1,64M</td></tr>
<tr><td class="crd-td"><strong>Zapopan</strong></td><td class="crd-td">Guadalajara</td><td class="crd-td">155,5k</td><td class="crd-td">668,3k</td><td class="crd-td">1,26M</td></tr>
<tr><td class="crd-td"><strong>Ciudad Nezahualcóyotl</strong></td><td class="crd-td">Valley of Mexico</td><td class="crd-td">580,4k</td><td class="crd-td">1,26M</td><td class="crd-td">1,07M</td></tr>
<tr><td class="crd-td"><strong>Naucalpan de Juárez</strong></td><td class="crd-td">Valley of Mexico</td><td class="crd-td">382,2k</td><td class="crd-td">772,5k</td><td class="crd-td">776,2k</td></tr>
<tr><td class="crd-td"><strong>Chimalhuacán</strong></td><td class="crd-td">Valley of Mexico</td><td class="crd-td">-</td><td class="crd-td">235,6k</td><td class="crd-td">703,2k</td></tr>
<tr><td class="crd-td"><strong>Tlalnepantla</strong></td><td class="crd-td">Valley of Mexico</td><td class="crd-td">366,9k</td><td class="crd-td">702,3k</td><td class="crd-td">658,9k</td></tr>
<tr><td class="crd-td"><strong>Tlaquepaque</strong></td><td class="crd-td">Guadalajara</td><td class="crd-td">-</td><td class="crd-td">328k</td><td class="crd-td">650,1k</td></tr>
<tr><td class="crd-td"><strong>Guadalupe</strong></td><td class="crd-td">Monterrey</td><td class="crd-td">153,5k</td><td class="crd-td">535,3k</td><td class="crd-td">635,9k</td></tr>
<tr><td class="crd-td"><strong>Ciudad Apodaca</strong></td><td class="crd-td">Monterrey</td><td class="crd-td">-</td><td class="crd-td">103,4k</td><td class="crd-td">536,4k</td></tr>
<tr><td class="crd-td"><strong>Ciudad López Mateos</strong></td><td class="crd-td">Valley of Mexico</td><td class="crd-td">-</td><td class="crd-td">315,1k</td><td class="crd-td">523,1k</td></tr>
<tr><td class="crd-td"><strong>Cuautitlán Izcalli</strong></td><td class="crd-td">Valley of Mexico</td><td class="crd-td">-</td><td class="crd-td">313,2k</td><td class="crd-td">515,4k</td></tr>
<tr><td class="crd-td"><strong>Ciudad General Escobedo</strong></td><td class="crd-td">Monterrey</td><td class="crd-td">-</td><td class="crd-td">97k</td><td class="crd-td">455k</td></tr>
<tr><td class="crd-td"><strong>Tonalá</strong></td><td class="crd-td">Guadalajara</td><td class="crd-td">-</td><td class="crd-td">151,2k</td><td class="crd-td">442,4k</td></tr>
<tr><td class="crd-td"><strong>San Nicolás de los Garza</strong></td><td class="crd-td">Monterrey</td><td class="crd-td">113,1k</td><td class="crd-td">436,6k</td><td class="crd-td">412,2k</td></tr>
<tr><td class="crd-td"><strong>Ojo de Agua</strong></td><td class="crd-td">Valley of Mexico</td><td class="crd-td">-</td><td class="crd-td">54,1k</td><td class="crd-td">386,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Mexico's 15 largest extra-municipal suburbs in 2020 across the Valley of Mexico, Guadalajara and Monterrey conurbations, showing 1970, 1990 and 2020 census totals.</figcaption>
</figure>

## Sub-Regional Gazetteer Distribution

Table \ref{tab:subregion-gazetteer} aggregates settlement totals, extra-municipal suburb counts, settlement density per 10.000 km², leading 2020 urban centre and regional 2020 population across all nine Mexican zones. Reflecting deep highland village nucleation, the Valley of Mexico and Central Core alone contributes 3.634 localities (362,7 settlements per 10.000 km²), followed by the Pacific South with 2.239 localities (96,2 per 10.000 km²), whereas the arid North-Central and North-East zones hold far fewer, widely spaced urban oases (12,4 and 13,9 settlements per 10.000 km² respectively) [@INEGICPV2021; @Hernandez2023Urban].

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Settlements</th><th class="crd-th">Suburbs</th><th class="crd-th">Per 10k km²</th><th class="crd-th">Leading City (2020)</th><th class="crd-th">2020 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Valley of Mexico and Central Core</strong></td><td class="crd-td">100.198</td><td class="crd-td">3.634</td><td class="crd-td">443</td><td class="crd-td">362,7</td><td class="crd-td">Ciudad de México (9,21M)</td><td class="crd-td">38,95M</td></tr>
<tr><td class="crd-td"><strong>Gulf Lowlands</strong></td><td class="crd-td">100.981</td><td class="crd-td">1.497</td><td class="crd-td">0</td><td class="crd-td">148,2</td><td class="crd-td">Xalapa-Enríquez (443,1k)</td><td class="crd-td">10,46M</td></tr>
<tr><td class="crd-td"><strong>Pacific South</strong></td><td class="crd-td">232.731</td><td class="crd-td">2.239</td><td class="crd-td">0</td><td class="crd-td">96,2</td><td class="crd-td">Acapulco de Juárez (658,6k)</td><td class="crd-td">13,22M</td></tr>
<tr><td class="crd-td"><strong>Yucatán Peninsula</strong></td><td class="crd-td">142.533</td><td class="crd-td">404</td><td class="crd-td">0</td><td class="crd-td">28,3</td><td class="crd-td">Mérida (921,8k)</td><td class="crd-td">5,11M</td></tr>
<tr><td class="crd-td"><strong>Bajío and West-Central</strong></td><td class="crd-td">117.870</td><td class="crd-td">1.368</td><td class="crd-td">0</td><td class="crd-td">116,1</td><td class="crd-td">León de los Aldama (1,58M)</td><td class="crd-td">12,78M</td></tr>
<tr><td class="crd-td"><strong>Pacific West</strong></td><td class="crd-td">171.128</td><td class="crd-td">1.328</td><td class="crd-td">144</td><td class="crd-td">77,6</td><td class="crd-td">Guadalajara (1,39M)</td><td class="crd-td">15,06M</td></tr>
<tr><td class="crd-td"><strong>North-East</strong></td><td class="crd-td">300.328</td><td class="crd-td">417</td><td class="crd-td">70</td><td class="crd-td">13,9</td><td class="crd-td">Monterrey (1,14M)</td><td class="crd-td">12,46M</td></tr>
<tr><td class="crd-td"><strong>North-Central</strong></td><td class="crd-td">443.419</td><td class="crd-td">548</td><td class="crd-td">0</td><td class="crd-td">12,4</td><td class="crd-td">Juárez (1,5M)</td><td class="crd-td">7,2M</td></tr>
<tr><td class="crd-td"><strong>North-West and Baja California</strong></td><td class="crd-td">369.885</td><td class="crd-td">705</td><td class="crd-td">0</td><td class="crd-td">19,1</td><td class="crd-td">Tijuana (1,81M)</td><td class="crd-td">10,54M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catalogued settlement totals, extra-municipal suburbs, areal settlement density (per 10.000 km²), leading 2020 city and 2020 regional population across nine Mexican zones.</figcaption>
</figure>

# Limitations

Three structural constraints qualify spatial analysis of this settlement gazetteer. First, Mexican municipal boundaries vary widely in geographic extent: northern desert municipalities such as Mexicali or Ensenada span thousands of square kilometres, whereas highland municipalities in Oaxaca, Tlaxcala and Estado de México are tightly subdivided, making locality-level ITER counts far more comparable across regions than raw municipal totals [@INEGICPV2021; @Hernandez2023Urban]. Second, historical pre-1950 city populations exist primarily for state capitals and major railway towns, meaning small rural localities enter the time series systematically only with the 1990 to 2020 digital ITER censuses [@INEGIEHM2015]. Third, historical string linkage in the 2005 intercensal count introduced isolated homonymy matches for small namesake localities in Baja California and Durango, underscoring the necessity of ranking urban hierarchies on official 2020 ITER enumerations.

# Conclusion

Across 12.140 official INEGI-sourced settlements, Mexico's modern urban gazetteer charts the republic's transformation from a rural highland society into a polycentric metropolitan nation. Preserving Ciudad de México intact at 9,21M alongside 657 separated extra-municipal suburbs across the Valley of Mexico, Guadalajara and Monterrey conurbations captures both municipal continuity and explosive peripheral sprawl, while documenting the rise of Tijuana, Juárez, Mexicali, Reynosa and Cancún as defining urban poles of modern Mexico [@Unikel1976; @Garza2003; @INEGICPV2021].

# Appendix

## Ingestion Wave Saturation and Source Provenance Ledger

Table \ref{tab:saturation-waves} reports the four sequential ingestion waves tracked in the chapter source ledger, confirming monotonic saturation down to a 0,81% marginal gain in Wave 4 with 0% crowd-sourced fallback across all 12.140 retained records [@INEGIEHM2015; @INEGICPV2021].

<figure class="crd-table-figure" id="tab:saturation-waves">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Wave</th><th class="crd-th">Source Class</th><th class="crd-th">Newly Added</th><th class="crd-th">Cumulative</th><th class="crd-th">Marginal Gain</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1</strong></td><td class="crd-td">Primary official national censuses and archival registers</td><td class="crd-td">11.072</td><td class="crd-td">11.072</td><td class="crd-td">100%</td></tr>
<tr><td class="crd-td"><strong>Wave 2</strong></td><td class="crd-td">Peer-reviewed demographic papers and monographs</td><td class="crd-td">789</td><td class="crd-td">11.861</td><td class="crd-td">7,13%</td></tr>
<tr><td class="crd-td"><strong>Wave 3</strong></td><td class="crd-td">Longitudinal census backfill</td><td class="crd-td">182</td><td class="crd-td">12.043</td><td class="crd-td">1,53%</td></tr>
<tr><td class="crd-td"><strong>Wave 4</strong></td><td class="crd-td">Sub-region gap-closing sweep</td><td class="crd-td">97</td><td class="crd-td">12.140</td><td class="crd-td">0,81%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Four-wave ingestion saturation ledger across 12.140 catalogued Mexican settlements (113 duplicate aliases excluded; 0% crowd-sourced fallback).</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

**Note 1.** All 12.140 settlement records derive from official INEGI census releases (ITER 1990, 2000, 2010 and 2020), supplemented on 31 historical urban centres by INEGI Estadísticas Históricas de México 2014 (1821 to 2010) and INEGI Censos Generales de Población (1895 to 1980) [@INEGICensos1996; @INEGIEHM2015; @INEGICPV2021].

**Note 2.** Zipf rank-size regression on the 2020 urban hierarchy evaluates the top 180 urban settlements ($n = 180$ within the 12.140-settlement register), returning slope $-0,9549$ ($\alpha = 0,95$, $R^2 = 0,95$).
