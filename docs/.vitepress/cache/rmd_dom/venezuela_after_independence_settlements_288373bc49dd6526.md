---
title: "Venezuela after Independence"
subtitle: "Settlement Gazetteer and Urban Hierarchy, 1830-2025"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/venezuela_after_independence_urban_hierarchy.png"
hero_caption: "Twelve largest urban entities and rank-size distribution across 422 catalogued Venezuelan settlements from 1830 to 2026."
hero_label: "fig:hero-venezuela-hierarchy"
bibliography: venezuela_after_independence_literature_review.bib
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



![Twelve largest urban entities and rank-size distribution across 422 catalogued Venezuelan settlements from 1830 to 2026.](figures/venezuela_after_independence_urban_hierarchy.png)



# Abstract

This gazetteer documents 422 catalogued Venezuelan cities, towns and municipal centres spanning all 25 modern federal entities between 1830 and 2026. Built exclusively from official national statistical registers without crowd-sourced fallback (0% crowd share), the archive integrates the 2011 National Institute of Statistics (INE) municipal census (290 entries, 68,72%), longitudinal 1981 to 2019 urban locality tables (130 entries, 30,81%), mid-century Caracas metropolitan series (1 entry, 0,24%) and Dependencias Federales insular enumerations (1 entry, 0,24%). Out of 506 candidate municipal and urban entries audited in the source ledger, 84 entries (comprising 50 duplicate municipal-capital aliases and 34 unlocated toponyms) were removed during deduplication. Administrative scopes separate 387 unified city-proper centres from 34 distinct suburban municipalities and 1 metropolitan Caracas entry, preventing double counting across the capital valley and Lake Valencia basin while preserving historical trajectories from 1833 through 2019 [@Nacionales1926Quinto; @Garciaguadilla2009Crisis; @Ferrer2005Del].

# Background

Venezuela's post-independence urban network evolved from dispersed colonial agricultural towns into one of South America's most concentrated metropolitan systems [@Roitman1972Venezuela; @Garcia1999Transferencia]. In 1873, only Caracas (48.897), Valencia (28.594), Barquisimeto (25.664) and Maracaibo (21.954) exceeded 20k inhabitants, while interior savanna towns and Andean coffee hubs such as Maturín (12.944), San Cristóbal (11.903), Mérida (9.727), Cumaná (9.427), Ciudad Bolívar (8.486), Puerto Cabello (8.467), Coro (8.172), Barcelona (7.674) and Maracay (5.192) served modest provincial hinterlands [@Nacionales1926Quinto].

Oil extraction on the eastern shore of Lake Maracaibo after 1922, nationwide DDT malaria eradication from 1945, selective European and Colombian immigration and state industrial projects at Ciudad Guayana transformed that hierarchy over two generations [@Ferrer2005Del; @Bustillos2023Politica; @Allen2013Politicas]. Caracas expanded beyond its colonial valley into neighbouring Miranda and coastal La Guaira municipalities [@Garciaguadilla2009Crisis; @Atehortua2017Barrio], Maracaibo and Cabimas anchored western petroleum production, Valencia and Maracay absorbed central manufacturing [@Roitman1972Venezuela], and Ciudad Guayana rose from 43k in 1961 to 893,4k by 2019 before post-2015 economic crisis drove millions abroad [@Arias2024Demography; @C2020Migracion].

# Methodology

Settlement compilation proceeded in four sequential ingestion waves logged in the chapter source ledger. Wave 1 harvested 333 primary national statistical entries from the 1950 to 2019 INE census corpus and OCHA/INE municipal tables. Wave 2 performed georeferencing alignment and metropolitan scope reconciliation, adding 59 distinct centres while tagging suburban municipalities separately from core cities. Wave 3 backfilled longitudinal 1833 to 1941 enumerations across 25 entries using published nineteenth- and early-twentieth-century census volumes [@Nacionales1926Quinto]. Wave 4 executed a sub-regional coverage sweep adding 5 final entries (1,2% marginal gain), achieving full coverage across all 25 sub-regions.

Every candidate underwent WGS84 coordinate checking, sub-region polygon assignment and proximity deduplication. Fifty co-located municipal-capital aliases (such as *Iribarren* beside Barquisimeto, *Caroní* beside Ciudad Guayana, *Simón Bolívar* beside Barcelona, *Bermúdez* beside Carúpano and *Ciudad Ojeda* beside Lagunillas) were merged into their urban localities, alongside 34 unlocated historic parish labels. Across all 422 included settlements, peak populations follow a smooth Zipfian rank-size slope ($\alpha = 0,83$, $R^2 = 0,98$).

# Testing and Validation

Ledger reconciliation accounts exactly for all 506 evaluated records: 422 included settlements and 84 excluded aliases or unlocated entries. Every included entry carries non-null geographic coordinates, a unique sub-region identifier, a provenance string and an explicit population scope (city proper 387, suburb 34, metro 1). Figure \ref{fig:sett-regional-map} displays the spatial footprint of all 422 catalogued settlements across Venezuela's 25 federal entities, illustrating dense Andean, coastal-central and lakeside clustering contrasting with sparse Orinoco and Amazonian river settlements.

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_quipu/1.0-venezuela-after-independence-settlements/venezuela_after_independence_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 422 catalogued Venezuelan settlements across 25 federal entities, 1830 to 2026.</figcaption>
</figure>

# Results

## Leading Recorded Settlements

Table \ref{tab:top30-sites} presents the 30 largest urban entries in the Venezuelan register ranked by peak recorded population. Alongside Caracas (Metro) at 3,38M in 1981 and Caracas city proper at 2,09M in 2019, the ranking highlights rapid twentieth-century expansion across Maracaibo (2,26M), Valencia (1,59M), Barquisimeto (1,09M) and planned Ciudad Guayana (893,4k), followed by regional hubs and major metropolitan suburbs including Maturín (542,3k), Maracay (464,7k), Barcelona (454,2k), San Francisco (446,8k) and Petare (441,7k) [@Ferrer2005Del; @Garciaguadilla2009Crisis].

<figure class="crd-table-figure" id="tab:top30-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Entity</th><th class="crd-th">Scope</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Caracas (Metro)</strong></td><td class="crd-td">Distrito Capital</td><td class="crd-td">metro</td><td class="crd-td">10,48, -66,9</td><td class="crd-td">1950 to 2019</td><td class="crd-td">3,38M (1981)</td></tr>
<tr><td class="crd-td"><strong>Maracaibo</strong></td><td class="crd-td">Zulia</td><td class="crd-td">city proper</td><td class="crd-td">10,68, -71,68</td><td class="crd-td">1873 to 2019</td><td class="crd-td">2,26M (2019)</td></tr>
<tr><td class="crd-td"><strong>Caracas</strong></td><td class="crd-td">Distrito Capital</td><td class="crd-td">city proper</td><td class="crd-td">10,47, -66,97</td><td class="crd-td">1873 to 2019</td><td class="crd-td">2,09M (2019)</td></tr>
<tr><td class="crd-td"><strong>Valencia</strong></td><td class="crd-td">Carabobo</td><td class="crd-td">city proper</td><td class="crd-td">10,02, -68</td><td class="crd-td">1873 to 2019</td><td class="crd-td">1,59M (2019)</td></tr>
<tr><td class="crd-td"><strong>Barquisimeto</strong></td><td class="crd-td">Lara</td><td class="crd-td">city proper</td><td class="crd-td">10,12, -69,39</td><td class="crd-td">1873 to 2019</td><td class="crd-td">1,09M (2019)</td></tr>
<tr><td class="crd-td"><strong>Ciudad Guayana</strong></td><td class="crd-td">Bolívar</td><td class="crd-td">city proper</td><td class="crd-td">8,16, -62,78</td><td class="crd-td">1961 to 2019</td><td class="crd-td">893,4k (2019)</td></tr>
<tr><td class="crd-td"><strong>Maturín</strong></td><td class="crd-td">Monagas</td><td class="crd-td">city proper</td><td class="crd-td">9,51, -62,95</td><td class="crd-td">1873 to 2019</td><td class="crd-td">542,3k (2011)</td></tr>
<tr><td class="crd-td"><strong>Maracay</strong></td><td class="crd-td">Carabobo</td><td class="crd-td">city proper</td><td class="crd-td">10,25, -67,6</td><td class="crd-td">1873 to 2019</td><td class="crd-td">464,7k (2019)</td></tr>
<tr><td class="crd-td"><strong>Barcelona</strong></td><td class="crd-td">Anzoátegui</td><td class="crd-td">city proper</td><td class="crd-td">9,95, -64,69</td><td class="crd-td">1873 to 2019</td><td class="crd-td">454,2k (2019)</td></tr>
<tr><td class="crd-td"><strong>San Francisco</strong></td><td class="crd-td">Zulia</td><td class="crd-td">suburb</td><td class="crd-td">10,56, -71,7</td><td class="crd-td">2011</td><td class="crd-td">446,8k (2011)</td></tr>
<tr><td class="crd-td"><strong>Petare</strong></td><td class="crd-td">Distrito Capital</td><td class="crd-td">suburb</td><td class="crd-td">10,48, -66,81</td><td class="crd-td">1990 to 2019</td><td class="crd-td">441,7k (2019)</td></tr>
<tr><td class="crd-td"><strong>Ciudad Bolívar</strong></td><td class="crd-td">Anzoátegui</td><td class="crd-td">city proper</td><td class="crd-td">8,13, -63,55</td><td class="crd-td">1873 to 2019</td><td class="crd-td">425k (2019)</td></tr>
<tr><td class="crd-td"><strong>Girardot</strong></td><td class="crd-td">Aragua</td><td class="crd-td">city proper</td><td class="crd-td">10,36, -67,58</td><td class="crd-td">2011</td><td class="crd-td">407,1k (2011)</td></tr>
<tr><td class="crd-td"><strong>Cumaná</strong></td><td class="crd-td">Sucre</td><td class="crd-td">city proper</td><td class="crd-td">10,47, -64,18</td><td class="crd-td">1873 to 2019</td><td class="crd-td">384,9k (2019)</td></tr>
<tr><td class="crd-td"><strong>Turmero</strong></td><td class="crd-td">Aragua</td><td class="crd-td">city proper</td><td class="crd-td">10,23, -67,47</td><td class="crd-td">1981 to 2019</td><td class="crd-td">379,5k (2019)</td></tr>
<tr><td class="crd-td"><strong>Sucre</strong></td><td class="crd-td">Sucre</td><td class="crd-td">suburb</td><td class="crd-td">10,27, -64,26</td><td class="crd-td">2011</td><td class="crd-td">358,9k (2011)</td></tr>
<tr><td class="crd-td"><strong>Barinas</strong></td><td class="crd-td">Barinas</td><td class="crd-td">city proper</td><td class="crd-td">8,34, -70,09</td><td class="crd-td">1981 to 2019</td><td class="crd-td">356,8k (2019)</td></tr>
<tr><td class="crd-td"><strong>Vargas</strong></td><td class="crd-td">La Guaira</td><td class="crd-td">city proper</td><td class="crd-td">10,51, -67,24</td><td class="crd-td">2011</td><td class="crd-td">352,9k (2011)</td></tr>
<tr><td class="crd-td"><strong>Heres</strong></td><td class="crd-td">Bolívar</td><td class="crd-td">city proper</td><td class="crd-td">7,88, -63,79</td><td class="crd-td">2011</td><td class="crd-td">342,3k (2011)</td></tr>
<tr><td class="crd-td"><strong>Baruta</strong></td><td class="crd-td">Distrito Capital</td><td class="crd-td">suburb</td><td class="crd-td">10,42, -66,87</td><td class="crd-td">2001 to 2019</td><td class="crd-td">309,4k (2019)</td></tr>
<tr><td class="crd-td"><strong>Cabimas</strong></td><td class="crd-td">Zulia</td><td class="crd-td">city proper</td><td class="crd-td">10,4, -71,22</td><td class="crd-td">1926 to 2019</td><td class="crd-td">299,7k (2019)</td></tr>
<tr><td class="crd-td"><strong>Puerto La Cruz</strong></td><td class="crd-td">Anzoátegui</td><td class="crd-td">suburb</td><td class="crd-td">10,21, -64,63</td><td class="crd-td">1981 to 2019</td><td class="crd-td">299,5k (2019)</td></tr>
<tr><td class="crd-td"><strong>Mérida</strong></td><td class="crd-td">Mérida</td><td class="crd-td">city proper</td><td class="crd-td">8,6, -71,14</td><td class="crd-td">1873 to 2019</td><td class="crd-td">289,8k (2019)</td></tr>
<tr><td class="crd-td"><strong>San Cristóbal</strong></td><td class="crd-td">Táchira</td><td class="crd-td">city proper</td><td class="crd-td">7,74, -72,18</td><td class="crd-td">1873 to 2019</td><td class="crd-td">284,6k (2019)</td></tr>
<tr><td class="crd-td"><strong>Guaicaipuro</strong></td><td class="crd-td">Miranda</td><td class="crd-td">city proper</td><td class="crd-td">10,25, -67</td><td class="crd-td">2011</td><td class="crd-td">252,2k (2011)</td></tr>
<tr><td class="crd-td"><strong>Juan Antonio Sotillo</strong></td><td class="crd-td">Anzoátegui</td><td class="crd-td">city proper</td><td class="crd-td">10,17, -64,53</td><td class="crd-td">2011</td><td class="crd-td">244,7k (2011)</td></tr>
<tr><td class="crd-td"><strong>Guarenas</strong></td><td class="crd-td">La Guaira</td><td class="crd-td">suburb</td><td class="crd-td">10,47, -66,6</td><td class="crd-td">1981 to 2019</td><td class="crd-td">244,6k (2019)</td></tr>
<tr><td class="crd-td"><strong>Coro</strong></td><td class="crd-td">Falcón</td><td class="crd-td">city proper</td><td class="crd-td">11,41, -69,68</td><td class="crd-td">1873 to 2019</td><td class="crd-td">231,6k (2019)</td></tr>
<tr><td class="crd-td"><strong>Los Teques</strong></td><td class="crd-td">Distrito Capital</td><td class="crd-td">suburb</td><td class="crd-td">10,34, -67,04</td><td class="crd-td">1981 to 2019</td><td class="crd-td">230,8k (2019)</td></tr>
<tr><td class="crd-td"><strong>Libertador</strong></td><td class="crd-td">Mérida</td><td class="crd-td">city proper</td><td class="crd-td">8,55, -71,11</td><td class="crd-td">2011</td><td class="crd-td">217,5k (2011)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 30 Venezuelan urban entries by peak population across 422 catalogued settlements, 1830 to 2019.</figcaption>
</figure>

## Caracas City Proper, Metropolitan Aggregate and Suburban Ring

Table \ref{tab:caracas-metro} separates the Caracas metropolitan aggregate from Libertador city proper and eleven surrounding suburban municipalities across Miranda and La Guaira [@Garciaguadilla2009Crisis; @Atehortua2017Barrio]. While Caracas city proper stabilised between 1,82M in 1981 and 2,09M in 2019, suburban growth shifted decisively to Petare (441,7k), Baruta (309,4k), Guarenas (244,6k), Los Teques (230,8k), Guatire (180,5k) and Catia La Mar (141,9k).

<figure class="crd-table-figure" id="tab:caracas-metro">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Entity</th><th class="crd-th">Scope</th><th class="crd-th">Admin. Unit</th><th class="crd-th">1950</th><th class="crd-th">1981</th><th class="crd-th">2001</th><th class="crd-th">2011</th><th class="crd-th">2019</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Caracas (Metro)</strong></td><td class="crd-td">metro</td><td class="crd-td">Distrito Capital and Miranda</td><td class="crd-td">704,6k</td><td class="crd-td">3,38M</td><td class="crd-td">2,76M</td><td class="crd-td">2,9M</td><td class="crd-td">3,05M</td></tr>
<tr><td class="crd-td"><strong>Caracas</strong></td><td class="crd-td">city proper</td><td class="crd-td">Distrito Federal</td><td class="crd-td">-</td><td class="crd-td">1,82M</td><td class="crd-td">1,84M</td><td class="crd-td">1,94M</td><td class="crd-td">2,09M</td></tr>
<tr><td class="crd-td"><strong>Petare</strong></td><td class="crd-td">suburb</td><td class="crd-td">Miranda</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">354,3k</td><td class="crd-td">372,5k</td><td class="crd-td">441,7k</td></tr>
<tr><td class="crd-td"><strong>Baruta</strong></td><td class="crd-td">suburb</td><td class="crd-td">Miranda</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">217,6k</td><td class="crd-td">240,8k</td><td class="crd-td">309,4k</td></tr>
<tr><td class="crd-td"><strong>Guarenas</strong></td><td class="crd-td">suburb</td><td class="crd-td">Miranda</td><td class="crd-td">-</td><td class="crd-td">101,7k</td><td class="crd-td">187,3k</td><td class="crd-td">208,6k</td><td class="crd-td">244,6k</td></tr>
<tr><td class="crd-td"><strong>Los Teques</strong></td><td class="crd-td">suburb</td><td class="crd-td">Miranda</td><td class="crd-td">-</td><td class="crd-td">112,9k</td><td class="crd-td">178,7k</td><td class="crd-td">194,7k</td><td class="crd-td">230,8k</td></tr>
<tr><td class="crd-td"><strong>Guatire</strong></td><td class="crd-td">suburb</td><td class="crd-td">Miranda</td><td class="crd-td">-</td><td class="crd-td">37,8k</td><td class="crd-td">120,3k</td><td class="crd-td">149,6k</td><td class="crd-td">180,5k</td></tr>
<tr><td class="crd-td"><strong>Catia La Mar</strong></td><td class="crd-td">suburb</td><td class="crd-td">La Guaira</td><td class="crd-td">-</td><td class="crd-td">87,9k</td><td class="crd-td">116,4k</td><td class="crd-td">133,8k</td><td class="crd-td">141,9k</td></tr>
<tr><td class="crd-td"><strong>El Hatillo</strong></td><td class="crd-td">suburb</td><td class="crd-td">Miranda</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">54,2k</td><td class="crd-td">58,2k</td><td class="crd-td">92,9k</td></tr>
<tr><td class="crd-td"><strong>Chacao</strong></td><td class="crd-td">suburb</td><td class="crd-td">Miranda</td><td class="crd-td">-</td><td class="crd-td">72,7k</td><td class="crd-td">64,6k</td><td class="crd-td">61,2k</td><td class="crd-td">79,3k</td></tr>
<tr><td class="crd-td"><strong>San Antonio de los Altos</strong></td><td class="crd-td">suburb</td><td class="crd-td">Miranda</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">60,7k</td><td class="crd-td">68,3k</td><td class="crd-td">78,3k</td></tr>
<tr><td class="crd-td"><strong>Maiquetía</strong></td><td class="crd-td">suburb</td><td class="crd-td">La Guaira</td><td class="crd-td">-</td><td class="crd-td">66,1k</td><td class="crd-td">65,3k</td><td class="crd-td">61,8k</td><td class="crd-td">69,8k</td></tr>
<tr><td class="crd-td"><strong>Carrizal</strong></td><td class="crd-td">suburb</td><td class="crd-td">Miranda</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">40,6k</td><td class="crd-td">51,7k</td><td class="crd-td">58,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Caracas metropolitan aggregate, city-proper municipality and major outer suburbs across Miranda and La Guaira, 1950 to 2019.</figcaption>
</figure>

## Sub-Regional Gazetteer Distribution

Table \ref{tab:subregion-gazetteer} reports catalogued settlement totals, areal density per 10.000 km², leading urban centre and 2011 census population across all 25 federal entities. Andean states such as Táchira (36 sites, 27,49 per 10k km²) and Trujillo (28 sites, 25,62 per 10k km²), along with Distrito Capital (16 sites, 172,27 per 10k km²) and Nueva Esparta (13 sites, 77,11 per 10k km²), show the densest municipal subdivisions, contrasting with expansive Bolívar (12 sites, 0,48 per 10k km²) and Amazonas (9 sites, 0,47 per 10k km²).

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Entity</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Sites per 10k km²</th><th class="crd-th">Leading Site (Peak)</th><th class="crd-th">2011 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Amazonas</strong></td><td class="crd-td">193.242</td><td class="crd-td">9</td><td class="crd-td">0,47</td><td class="crd-td">Puerto Ayacucho (116,3k)</td><td class="crd-td">146,5k</td></tr>
<tr><td class="crd-td"><strong>Anzoátegui</strong></td><td class="crd-td">49.119</td><td class="crd-td">25</td><td class="crd-td">5,09</td><td class="crd-td">Barcelona (454,2k)</td><td class="crd-td">1,47M</td></tr>
<tr><td class="crd-td"><strong>Apure</strong></td><td class="crd-td">74.052</td><td class="crd-td">8</td><td class="crd-td">1,08</td><td class="crd-td">San Fernando (165,1k)</td><td class="crd-td">459k</td></tr>
<tr><td class="crd-td"><strong>Aragua</strong></td><td class="crd-td">8.798</td><td class="crd-td">19</td><td class="crd-td">21,6</td><td class="crd-td">Girardot (407,1k)</td><td class="crd-td">1,63M</td></tr>
<tr><td class="crd-td"><strong>Barinas</strong></td><td class="crd-td">36.472</td><td class="crd-td">13</td><td class="crd-td">3,56</td><td class="crd-td">Barinas (356,8k)</td><td class="crd-td">816,3k</td></tr>
<tr><td class="crd-td"><strong>Bolívar</strong></td><td class="crd-td">248.551</td><td class="crd-td">12</td><td class="crd-td">0,48</td><td class="crd-td">Ciudad Guayana (893,4k)</td><td class="crd-td">1,41M</td></tr>
<tr><td class="crd-td"><strong>Carabobo</strong></td><td class="crd-td">7.438</td><td class="crd-td">21</td><td class="crd-td">28,23</td><td class="crd-td">Valencia (1,59M)</td><td class="crd-td">2,25M</td></tr>
<tr><td class="crd-td"><strong>Cojedes</strong></td><td class="crd-td">15.680</td><td class="crd-td">8</td><td class="crd-td">5,1</td><td class="crd-td">San Carlos de Austria (107,1k)</td><td class="crd-td">323,2k</td></tr>
<tr><td class="crd-td"><strong>Delta Amacuro</strong></td><td class="crd-td">41.247</td><td class="crd-td">4</td><td class="crd-td">0,97</td><td class="crd-td">Tucupita (105,6k)</td><td class="crd-td">165,5k</td></tr>
<tr><td class="crd-td"><strong>Dependencias Federales</strong></td><td class="crd-td">506</td><td class="crd-td">1</td><td class="crd-td">19,77</td><td class="crd-td">Isla La Tortuga (2,3k)</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Distrito Capital</strong></td><td class="crd-td">929</td><td class="crd-td">16</td><td class="crd-td">172,27</td><td class="crd-td">Caracas (Metro) (3,38M)</td><td class="crd-td">1,94M</td></tr>
<tr><td class="crd-td"><strong>Falcón</strong></td><td class="crd-td">30.334</td><td class="crd-td">31</td><td class="crd-td">10,22</td><td class="crd-td">Coro (231,6k)</td><td class="crd-td">902,8k</td></tr>
<tr><td class="crd-td"><strong>Guárico</strong></td><td class="crd-td">60.427</td><td class="crd-td">17</td><td class="crd-td">2,81</td><td class="crd-td">Calabozo (155,2k)</td><td class="crd-td">747,7k</td></tr>
<tr><td class="crd-td"><strong>La Guaira</strong></td><td class="crd-td">2.026</td><td class="crd-td">10</td><td class="crd-td">49,35</td><td class="crd-td">Vargas (352,9k)</td><td class="crd-td">352,9k</td></tr>
<tr><td class="crd-td"><strong>Lara</strong></td><td class="crd-td">17.916</td><td class="crd-td">12</td><td class="crd-td">6,7</td><td class="crd-td">Barquisimeto (1,09M)</td><td class="crd-td">1,77M</td></tr>
<tr><td class="crd-td"><strong>Miranda</strong></td><td class="crd-td">9.466</td><td class="crd-td">25</td><td class="crd-td">26,41</td><td class="crd-td">Guaicaipuro (252,2k)</td><td class="crd-td">2,68M</td></tr>
<tr><td class="crd-td"><strong>Monagas</strong></td><td class="crd-td">30.248</td><td class="crd-td">10</td><td class="crd-td">3,31</td><td class="crd-td">Maturín (542,3k)</td><td class="crd-td">905,4k</td></tr>
<tr><td class="crd-td"><strong>Mérida</strong></td><td class="crd-td">12.484</td><td class="crd-td">20</td><td class="crd-td">16,02</td><td class="crd-td">Mérida (289,8k)</td><td class="crd-td">828,6k</td></tr>
<tr><td class="crd-td"><strong>Nueva Esparta</strong></td><td class="crd-td">1.686</td><td class="crd-td">13</td><td class="crd-td">77,11</td><td class="crd-td">Porlamar (126,5k)</td><td class="crd-td">491,6k</td></tr>
<tr><td class="crd-td"><strong>Portuguesa</strong></td><td class="crd-td">18.574</td><td class="crd-td">14</td><td class="crd-td">7,54</td><td class="crd-td">Guanare (192,6k)</td><td class="crd-td">876,5k</td></tr>
<tr><td class="crd-td"><strong>Sucre</strong></td><td class="crd-td">15.794</td><td class="crd-td">25</td><td class="crd-td">15,83</td><td class="crd-td">Cumaná (384,9k)</td><td class="crd-td">896,3k</td></tr>
<tr><td class="crd-td"><strong>Trujillo</strong></td><td class="crd-td">10.928</td><td class="crd-td">28</td><td class="crd-td">25,62</td><td class="crd-td">Valera (165,5k)</td><td class="crd-td">686,4k</td></tr>
<tr><td class="crd-td"><strong>Táchira</strong></td><td class="crd-td">13.098</td><td class="crd-td">36</td><td class="crd-td">27,48</td><td class="crd-td">San Cristóbal (284,6k)</td><td class="crd-td">1,17M</td></tr>
<tr><td class="crd-td"><strong>Yaracuy</strong></td><td class="crd-td">7.352</td><td class="crd-td">19</td><td class="crd-td">25,84</td><td class="crd-td">San Felipe (174,3k)</td><td class="crd-td">600,9k</td></tr>
<tr><td class="crd-td"><strong>Zulia</strong></td><td class="crd-td">48.210</td><td class="crd-td">26</td><td class="crd-td">5,39</td><td class="crd-td">Maracaibo (2,26M)</td><td class="crd-td">3,7M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catalogued settlement counts, areal density (per 10.000 km²), leading settlement and 2011 population across 25 federal entities.</figcaption>
</figure>

## Source Ledger and Saturation Waves

Table \ref{tab:provenance-ledger} summarises both primary provenance feeds and the four saturation-audit waves recorded in the chapter ledger. Marginal gain fell cleanly from 17,72% in Wave 2 to 6,38% in Wave 3 and 1,2% in Wave 4, confirming statistical exhaustiveness across all 25 federal units with 0% crowd-sourced fallback.

<figure class="crd-table-figure" id="tab:provenance-ledger">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Corpus</th><th class="crd-th">Ledger Classification</th><th class="crd-th">Entries</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>INE Venezuela 2011 Census (OCHA/HDX COD-PS)</strong></td><td class="crd-td">Primary national census (Waves 1 and 4)</td><td class="crd-td">290</td><td class="crd-td">68,72%</td></tr>
<tr><td class="crd-td"><strong>INE Venezuela Censuses 1981 to 2019 (Urban Series)</strong></td><td class="crd-td">Primary multi-census urban series (Waves 2 and 3)</td><td class="crd-td">130</td><td class="crd-td">30,81%</td></tr>
<tr><td class="crd-td"><strong>INE Venezuela Censuses 1950 to 1981 (Metropolitan)</strong></td><td class="crd-td">Primary metropolitan reconciliation (Wave 2)</td><td class="crd-td">1</td><td class="crd-td">0,24%</td></tr>
<tr><td class="crd-td"><strong>INE Dependencias Federales Census</strong></td><td class="crd-td">Primary insular census (Wave 4)</td><td class="crd-td">1</td><td class="crd-td">0,24%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Provenance ledger across 422 catalogued Venezuelan settlements (with 84 excluded duplicate aliases and unlocated toponyms).</figcaption>
</figure>

# Limitations

Three technical constraints govern this settlement register. First, because Venezuela's 2011 census remains the last published national enumeration, 2019 locality estimates reflect official pre-exodus projections rather than de facto post-2015 resident counts after mass emigration [@Arias2024Demography; @Camargo2023Migracion]. Second, administrative divisions in Venezuela pair territorial municipalities (*municipios*) with urban head towns (*capitales municipales*); although 50 co-located municipal aliases were removed, a handful of mid-century entries blend municipal and urban boundaries across 1950 to 2011 [@Calderon2020Censo]. Third, pre-1950 urban series exist for 16 principal cities and ports rather than all 422 modern towns, leaving nineteenth-century rural settlement populations aggregated within state totals [@Nacionales1926Quinto].

# Conclusion

Across 422 geocoded settlements and 506 audited candidate records, Venezuela's urban gazetteer documents the complete shift from an agrarian nineteenth-century town network to a highly centralised coastal, lakeside and industrial urban system led by Caracas, Maracaibo, Valencia, Barquisimeto and Ciudad Guayana [@Ferrer2005Del; @Garciaguadilla2009Crisis; @Garcia1999Transferencia]. Strict separation of metropolitan Caracas, city proper and outer suburbs ensures transparent accounting across overlapping capital jurisdictions, while clean primary provenance establishes a durable baseline for studying both Venezuela's twentieth-century urbanisation boom and its twenty-first-century emigration reversal [@Arias2024Demography; @Stonawski2025Heterogeneity].

# Sources

::: {#refs}
:::
