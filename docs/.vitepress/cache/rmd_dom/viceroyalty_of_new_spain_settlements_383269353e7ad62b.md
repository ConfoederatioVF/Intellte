---
title: "Viceroyalty of New Spain"
subtitle: "Settlement Gazetteer and Urban Hierarchy, 1535-1821"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/viceroyalty_of_new_spain_urban_hierarchy.png"
hero_caption: "Leading urban centres and rank-size distribution across 826 catalogued settlements in the Viceroyalty of New Spain, 1535 to 1821."
hero_label: "fig:hero-new-spain-hierarchy"
bibliography: viceroyalty_of_new_spain_literature_review.bib
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



![Leading urban centres and rank-size distribution across 826 catalogued settlements in the Viceroyalty of New Spain, 1535 to 1821.](figures/viceroyalty_of_new_spain_urban_hierarchy.png)



# Abstract

This companion gazetteer documents 826 catalogued cities, mining *reales*, parish *cabeceras*, *pueblos de indios* and frontier missions across the 12 Bourbon intendancies and northern frontier provinces of the Viceroyalty of New Spain between 1535 and 1821. Out of 859 candidate entries audited in the chapter source ledger across four ingestion waves, 33 duplicate aliases (31) and out-of-bounds Pimería Alta mission nodes (2) were excluded, leaving an entirely archival and scholarly settlement register with 0% crowd-sourced fallback. Primary archival registers compiled in HGIS de las Indias—led by Bishop Pedro Tamarón y Romeral's 1765 northern visitation (419 locales), Ernest Sánchez Santiró's 1778 Archdiocese of México parish padrones (242) and Archivo General de Indias mission lists (131)—unite with longitudinal urban series drawn from Villaseñor y Sánchez (1742), the 1790 to 1793 Revillagigedo Census, Alexander von Humboldt (1803) and INEGI's 2014 *Estadísticas Históricas de México* [@SPPRevillagigedo1977; @Humboldt1811; @Gerhard1962; @Gerhard1993]. Across the upper 180 settlements, peak recorded populations trace a smooth power-law rank-size distribution ($\alpha = 0,67$, $R^2 = 0,99$), crowned by Mexico City (179,8k in 1820), Guanajuato (70,6k in 1803), Puebla (67,8k in 1803), Guadalajara (40k in 1820), Mérida (36k in 1820), Querétaro (35k in 1803) and Zacatecas (33k in 1803).

# Background

Colonial Mexico developed the densest and most functionally differentiated urban network in Spanish North America. At its apex stood Mexico City, erected atop the ruined island capital of Tenochtitlan and serving simultaneously as viceregal court, seat of the senior *Audiencia*, archiepiscopal see, sole mint (*Casa de Moneda*) and commercial nexus linking Atlantic fleets at Veracruz with Manila Galleons at Acapulco [@Gibson1964; @MinoGrijalva2001; @Rodriguezrodriguez2021Admixture]. Surrounding the capital across the central volcanic highlands lay ancient indigenous towns reorganised into Spanish *cabeceras*—Toluca, Texcoco, Xochimilco, Chalco and Tlaxcala—together with Puebla de los Ángeles, founded in 1531 as a major Spanish artisan and grain-trading city [@Porras1994Poblacio; @Ross1953Studies].

North and west of the Valley of Mexico, silver discoveries transformed pastoral frontiers into vigorous urban belts. Guanajuato, Zacatecas, San Luis Potosí, Durango, Chihuahua, Pachuca and Taxco drew mixed creole, mestizo, indigenous and Afro-Mexican wage labourers into densely packed canyon settlements [@Brading1971; @Collhurtado1999Mineri; @AguirreBeltran1946]. Between those mining camps and the capital arose the agro-commercial towns of the Bajío—Querétaro, León, San Miguel el Grande, Celaya and Irapuato—alongside Guadalajara, whose *Audiencia* and cathedral anchored western Mexico [@Sanchez2000Algunas; @MinoGrijalva2001]. On the humid Gulf littoral, Veracruz and Campeche guarded imperial shipping lanes while Mérida presided over the Maya peninsula [@Farriss1984]. Further north across Durango, Sonora, Sinaloa and Coahuila, hundreds of small *presidios*, Jesuit and Franciscan mission villages and frontier *reales de minas* formed a sparse defensive lattice recorded in extraordinary detail by eighteenth-century episcopal visitations [@Gerhard1993; @Bustamante1991Matter].

# Methodology

The 826-entry gazetteer was assembled through four sequential ingestion waves audited in the chapter source ledger. Wave 1 ingested 753 core settlements from official Mexican statistical compilations and primary colonial registers (INEGI *Estadísticas Históricas de México* 2014 and Werner Stangl's HGIS de las Indias). Wave 2 incorporated 54 additional towns from peer-reviewed historical demography monographs (marginal gain 7,17%), Wave 3 added 12 longitudinal census backfills (1,49%) and Wave 4 executed a regional gap sweep adding 7 final settlements (0,85% marginal gain), confirming corpus saturation with 0% crowd-sourced records.

Every candidate underwent WGS84 coordinate harmonisation, spatial intersection against the 12 Bourbon intendancy and frontier polygons and alias deduplication. Thirty-one duplicate city aliases and 2 outer Pimería Alta nodes north of the Mexican boundary (Tucson and San Xavier) were excluded. All 826 included entries carry strictly city-proper municipal or parish-seat scope without suburban agglomeration padding, preserving each source's exact historical census year and provenance citation [@SPPRevillagigedo1977; @Humboldt1811; @Gerhard1962].

# Testing and Validation

Ledger reconciliation confirms exact accounting across all 859 audited candidates: 826 included settlements plus 33 excluded entries (31 duplicate aliases and 2 out-of-bounds frontier nodes). Every included record carries valid geographic coordinates, an intendancy polygon assignment, at least one positive population observation inside 1535 to 1821 and an explicit archival provenance tag. Figure \ref{fig:sett-regional-map} displays the spatial footprint of all 826 catalogued locales across the 12 Bourbon intendancies and northern frontier provinces, illustrating the dense clusters in central México, Nueva Galicia, Nueva Vizcaya and Sonora-Sinaloa alongside the principal colonial cities.

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_jaguar/1.0-viceroyalty-of-new-spain-settlements/viceroyalty_of_new_spain_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 826 catalogued colonial settlements across 12 Bourbon intendancies and northern frontier provinces of the Viceroyalty of New Spain, 1535 to 1821.</figcaption>
</figure>

# Results

## Leading Thirty Settlements and Parish Centres

Table \ref{tab:top30-settlements} lists the 30 largest settlements in the chapter register, ordered by peak recorded population between 1535 and 1821. Ranging from Mexico City (179.830 in 1820) down to Mestitlan (14.517 in 1778), the top tier unites the viceroyalty's premier administrative, mining and textile metropolises—Guanajuato (70.600), Puebla (67.800), Guadalajara (40.000), Mérida (36.000), Querétaro (35.000), Zacatecas (33.000), Oaxaca (24.000), León (21.400), Valladolid (21.000), Campeche (19.500), San Luis Potosí (19.000), San Miguel el Grande (18.200), Celaya (16.800), Veracruz (16.000) and Orizaba (15.800)—with populous 1778 and 1780 diocesan *curato* jurisdictions such as Actopan (25.811), Lagos (22.184), Aguascalientes (20.532), Toluca (19.772), Encarnación (19.200) and Sierra de Pinos (18.062) [@Humboldt1811; @MinoGrijalva2001; @Brading1971].

<figure class="crd-table-figure" id="tab:top30-settlements">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Intendancy or Province</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Obs.</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ciudad de México</strong></td><td class="crd-td">Intendencia de México</td><td class="crd-td">19,43, -99,13</td><td class="crd-td">1570 to 1820</td><td class="crd-td">9</td><td class="crd-td">179,8k (1820)</td></tr>
<tr><td class="crd-td"><strong>Guanajuato</strong></td><td class="crd-td">Intendencia de Guanajuato</td><td class="crd-td">21,02, -101,26</td><td class="crd-td">1600 to 1820</td><td class="crd-td">6</td><td class="crd-td">70,6k (1803)</td></tr>
<tr><td class="crd-td"><strong>Puebla</strong></td><td class="crd-td">Intendencia de Puebla and Gobierno de Tlaxcala</td><td class="crd-td">19,04, -98,21</td><td class="crd-td">1570 to 1820</td><td class="crd-td">7</td><td class="crd-td">67,8k (1803)</td></tr>
<tr><td class="crd-td"><strong>Guadalajara</strong></td><td class="crd-td">Intendencia de Guadalajara (Nueva Galicia)</td><td class="crd-td">20,66, -103,35</td><td class="crd-td">1570 to 1820</td><td class="crd-td">10</td><td class="crd-td">40k (1820)</td></tr>
<tr><td class="crd-td"><strong>Mérida</strong></td><td class="crd-td">Intendencia de Mérida (Yucatán and Tabasco)</td><td class="crd-td">20,97, -89,62</td><td class="crd-td">1574 to 1820</td><td class="crd-td">6</td><td class="crd-td">36k (1820)</td></tr>
<tr><td class="crd-td"><strong>Querétaro</strong></td><td class="crd-td">Intendencia de México</td><td class="crd-td">20,59, -100,39</td><td class="crd-td">1582 to 1820</td><td class="crd-td">7</td><td class="crd-td">35k (1803)</td></tr>
<tr><td class="crd-td"><strong>Zacatecas</strong></td><td class="crd-td">Intendencias de Zacatecas and San Luis Potosí</td><td class="crd-td">22,77, -102,58</td><td class="crd-td">1574 to 1820</td><td class="crd-td">7</td><td class="crd-td">33k (1803)</td></tr>
<tr><td class="crd-td"><strong>Actopan</strong></td><td class="crd-td">Intendencia de México</td><td class="crd-td">20,27, -98,94</td><td class="crd-td">1778</td><td class="crd-td">1</td><td class="crd-td">25,8k (1778)</td></tr>
<tr><td class="crd-td"><strong>Oaxaca</strong></td><td class="crd-td">Intendencia de Oaxaca</td><td class="crd-td">17,07, -96,73</td><td class="crd-td">1570 to 1820</td><td class="crd-td">10</td><td class="crd-td">24k (1803)</td></tr>
<tr><td class="crd-td"><strong>Lagos</strong></td><td class="crd-td">Intendencia de Guadalajara (Nueva Galicia)</td><td class="crd-td">21,36, -101,93</td><td class="crd-td">1780</td><td class="crd-td">1</td><td class="crd-td">22,2k (1780)</td></tr>
<tr><td class="crd-td"><strong>León Guanajuato</strong></td><td class="crd-td">Intendencia de Guanajuato</td><td class="crd-td">21,12, -101,68</td><td class="crd-td">1646 to 1810</td><td class="crd-td">4</td><td class="crd-td">21,4k (1810)</td></tr>
<tr><td class="crd-td"><strong>Valladolid</strong></td><td class="crd-td">Intendencia de Valladolid (Michoacán)</td><td class="crd-td">19,71, -101,19</td><td class="crd-td">1790 to 1805</td><td class="crd-td">3</td><td class="crd-td">21k (1805)</td></tr>
<tr><td class="crd-td"><strong>Aguas Calientes</strong></td><td class="crd-td">Intendencia de Guadalajara (Nueva Galicia)</td><td class="crd-td">21,88, -102,29</td><td class="crd-td">1646 to 1810</td><td class="crd-td">5</td><td class="crd-td">20,5k (1780)</td></tr>
<tr><td class="crd-td"><strong>Toluca</strong></td><td class="crd-td">Intendencia de México</td><td class="crd-td">19,29, -99,65</td><td class="crd-td">1570 to 1820</td><td class="crd-td">6</td><td class="crd-td">19,8k (1778)</td></tr>
<tr><td class="crd-td"><strong>Campeche</strong></td><td class="crd-td">Intendencia de Mérida (Yucatán and Tabasco)</td><td class="crd-td">19,84, -90,53</td><td class="crd-td">1574 to 1820</td><td class="crd-td">6</td><td class="crd-td">19,5k (1820)</td></tr>
<tr><td class="crd-td"><strong>Encarnación</strong></td><td class="crd-td">Intendencia de Guadalajara (Nueva Galicia)</td><td class="crd-td">21,53, -102,24</td><td class="crd-td">1780</td><td class="crd-td">1</td><td class="crd-td">19,2k (1780)</td></tr>
<tr><td class="crd-td"><strong>San Luis Potosí</strong></td><td class="crd-td">Intendencias de Zacatecas and San Luis Potosí</td><td class="crd-td">22,16, -100,99</td><td class="crd-td">1600 to 1820</td><td class="crd-td">6</td><td class="crd-td">19k (1820)</td></tr>
<tr><td class="crd-td"><strong>San Miguel el Grande</strong></td><td class="crd-td">Intendencia de Guanajuato</td><td class="crd-td">20,91, -100,74</td><td class="crd-td">1646 to 1810</td><td class="crd-td">4</td><td class="crd-td">18,2k (1810)</td></tr>
<tr><td class="crd-td"><strong>Sierra de Pinos</strong></td><td class="crd-td">Intendencias de Zacatecas and San Luis Potosí</td><td class="crd-td">22,3, -101,57</td><td class="crd-td">1780</td><td class="crd-td">1</td><td class="crd-td">18,1k (1780)</td></tr>
<tr><td class="crd-td"><strong>Valladolid Michoacán</strong></td><td class="crd-td">Intendencia de Valladolid (Michoacán)</td><td class="crd-td">19,71, -101,19</td><td class="crd-td">1570 to 1820</td><td class="crd-td">6</td><td class="crd-td">18k (1803)</td></tr>
<tr><td class="crd-td"><strong>Celaya</strong></td><td class="crd-td">Intendencia de Guanajuato</td><td class="crd-td">20,52, -100,82</td><td class="crd-td">1646 to 1810</td><td class="crd-td">4</td><td class="crd-td">16,8k (1810)</td></tr>
<tr><td class="crd-td"><strong>Veracruz</strong></td><td class="crd-td">Intendencia de Veracruz</td><td class="crd-td">19,17, -96,13</td><td class="crd-td">1574 to 1820</td><td class="crd-td">7</td><td class="crd-td">16k (1803)</td></tr>
<tr><td class="crd-td"><strong>Tuxtla Gutiérrez</strong></td><td class="crd-td">Intendencia de Veracruz</td><td class="crd-td">16,75, -93,1</td><td class="crd-td">1790 to 1820</td><td class="crd-td">4</td><td class="crd-td">16k (1790)</td></tr>
<tr><td class="crd-td"><strong>Orizaba</strong></td><td class="crd-td">Intendencia de Puebla and Gobierno de Tlaxcala</td><td class="crd-td">18,85, -97,1</td><td class="crd-td">1580 to 1820</td><td class="crd-td">6</td><td class="crd-td">15,8k (1820)</td></tr>
<tr><td class="crd-td"><strong>San Juan del Rio</strong></td><td class="crd-td">Intendencia de México</td><td class="crd-td">20,39, -99,99</td><td class="crd-td">1778</td><td class="crd-td">1</td><td class="crd-td">15,7k (1778)</td></tr>
<tr><td class="crd-td"><strong>San Felipe del Obraje</strong></td><td class="crd-td">Intendencia de México</td><td class="crd-td">19,71, -99,95</td><td class="crd-td">1778</td><td class="crd-td">1</td><td class="crd-td">15,6k (1778)</td></tr>
<tr><td class="crd-td"><strong>Zultepec</strong></td><td class="crd-td">Intendencia de México</td><td class="crd-td">18,86, -99,98</td><td class="crd-td">1778</td><td class="crd-td">1</td><td class="crd-td">14,7k (1778)</td></tr>
<tr><td class="crd-td"><strong>Texcoco con Calpulalpa</strong></td><td class="crd-td">Intendencia de México</td><td class="crd-td">19,51, -98,88</td><td class="crd-td">1778</td><td class="crd-td">1</td><td class="crd-td">14,7k (1778)</td></tr>
<tr><td class="crd-td"><strong>Irapuato</strong></td><td class="crd-td">Intendencia de Guanajuato</td><td class="crd-td">20,68, -101,36</td><td class="crd-td">1650 to 1810</td><td class="crd-td">4</td><td class="crd-td">14,6k (1810)</td></tr>
<tr><td class="crd-td"><strong>Mestitlan</strong></td><td class="crd-td">Intendencia de México</td><td class="crd-td">20,59, -98,76</td><td class="crd-td">1778</td><td class="crd-td">1</td><td class="crd-td">14,5k (1778)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 30 settlements and parish centres across the Viceroyalty of New Spain, 1535 to 1821 (from 826 catalogued locales).</figcaption>
</figure>

## Sub-Regional Gazetteer Coverage

Table \ref{tab:subregion-gazetteer} contrasts catalogued settlement totals and areal site density (sites per 10.000 km²) against documentary 1803 provincial populations across all 12 intendancies and frontier provinces. Three jurisdictions—Arizpe and Baja California (230 sites), Durango (214) and México (205)—supply 78,6% of all records, whereas densely populated indigenous highland provinces such as Oaxaca (1 entry), Valladolid (4), Mérida (5) and Puebla-Tlaxcala (10) are represented predominantly by their major cities and *cabeceras* because rural villages were enumerated at regional *partido* level [@Gerhard1993; @Porras1994Poblacio; @Farriss1984].

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Intendancy or Province</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Sites per 10k km²</th><th class="crd-th">Leading Settlement (Peak)</th><th class="crd-th">1803 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Intendencia de México</strong></td><td class="crd-td">130.620</td><td class="crd-td">205</td><td class="crd-td">15,69</td><td class="crd-td">Ciudad de México (179,8k)</td><td class="crd-td">1,51M</td></tr>
<tr><td class="crd-td"><strong>Intendencia de Puebla and Gobierno de Tlaxcala</strong></td><td class="crd-td">48.178</td><td class="crd-td">10</td><td class="crd-td">2,08</td><td class="crd-td">Puebla (67,8k)</td><td class="crd-td">813,3k</td></tr>
<tr><td class="crd-td"><strong>Intendencia de Veracruz</strong></td><td class="crd-td">68.563</td><td class="crd-td">12</td><td class="crd-td">1,75</td><td class="crd-td">Veracruz (16k)</td><td class="crd-td">156k</td></tr>
<tr><td class="crd-td"><strong>Intendencia de Oaxaca</strong></td><td class="crd-td">89.492</td><td class="crd-td">1</td><td class="crd-td">0,11</td><td class="crd-td">Oaxaca (24k)</td><td class="crd-td">534,8k</td></tr>
<tr><td class="crd-td"><strong>Intendencia de Valladolid (Michoacán)</strong></td><td class="crd-td">75.820</td><td class="crd-td">4</td><td class="crd-td">0,53</td><td class="crd-td">Valladolid (21k)</td><td class="crd-td">376,4k</td></tr>
<tr><td class="crd-td"><strong>Intendencia de Guanajuato</strong></td><td class="crd-td">31.401</td><td class="crd-td">8</td><td class="crd-td">2,55</td><td class="crd-td">Guanajuato (70,6k)</td><td class="crd-td">517,3k</td></tr>
<tr><td class="crd-td"><strong>Intendencia de Guadalajara (Nueva Galicia)</strong></td><td class="crd-td">116.928</td><td class="crd-td">63</td><td class="crd-td">5,39</td><td class="crd-td">Guadalajara (40k)</td><td class="crd-td">630,5k</td></tr>
<tr><td class="crd-td"><strong>Intendencias de Zacatecas and San Luis Potosí</strong></td><td class="crd-td">129.242</td><td class="crd-td">39</td><td class="crd-td">3,02</td><td class="crd-td">Zacatecas (33k)</td><td class="crd-td">457,7k</td></tr>
<tr><td class="crd-td"><strong>Intendencia de Mérida (Yucatán and Tabasco)</strong></td><td class="crd-td">155.912</td><td class="crd-td">5</td><td class="crd-td">0,32</td><td class="crd-td">Mérida (36k)</td><td class="crd-td">465,8k</td></tr>
<tr><td class="crd-td"><strong>Intendencia de Durango (Nueva Vizcaya)</strong></td><td class="crd-td">383.074</td><td class="crd-td">214</td><td class="crd-td">5,59</td><td class="crd-td">Durango (14k)</td><td class="crd-td">159,7k</td></tr>
<tr><td class="crd-td"><strong>Intendencia de Arizpe (Sonora-Sinaloa) and Baja California</strong></td><td class="crd-td">368.878</td><td class="crd-td">230</td><td class="crd-td">6,24</td><td class="crd-td">Culiacán (10,8k)</td><td class="crd-td">130,4k</td></tr>
<tr><td class="crd-td"><strong>Provincias Internas de Oriente (Coahuila, Nuevo León and Nuevo Santander)</strong></td><td class="crd-td">291.898</td><td class="crd-td">35</td><td class="crd-td">1,2</td><td class="crd-td">Saltillo (14,5k)</td><td class="crd-td">142k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlement counts, areal site density (per 10.000 km²), leading settlement and 1803 documentary population across 12 sub-regions.</figcaption>
</figure>

## Provenance Ledger and Archival Sub-Corpora

Table \ref{tab:provenance-ledger} classifies all 826 catalogued entries by primary source corpus, confirming that 93,7% derive from primary colonial registers digitised in HGIS de las Indias, 4,4% from multi-benchmark Revillagigedo-Humboldt-Gerhard urban syntheses and 1,9% from multi-census INEGI historical city series combining Villaseñor, Revillagigedo and Humboldt [@SPPRevillagigedo1977; @Humboldt1811; @Gerhard1962].

<figure class="crd-table-figure" id="tab:provenance-ledger">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Corpus</th><th class="crd-th">Entries</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>HGIS de las Indias Colonial Gazetteer (Stangl 2020)</strong></td><td class="crd-td">774</td><td class="crd-td">93,7%</td></tr>
<tr><td class="crd-td"><strong>Revillagigedo, Humboldt, Gerhard and Tanck Urban Synthesis</strong></td><td class="crd-td">36</td><td class="crd-td">4,36%</td></tr>
<tr><td class="crd-td"><strong>INEGI Historical Statistics (2014) and Colonial Registers</strong></td><td class="crd-td">16</td><td class="crd-td">1,94%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Primary provenance corpus classification across 826 catalogued settlements in the Viceroyalty of New Spain.</figcaption>
</figure>

# Limitations

Three structural characteristics govern quantitative use of this gazetteer. First, settlement count density mirrors surviving colonial diocesan padrones rather than raw rural village density: Bishop Tamarón y Romeral's 1765 visitation and northern mission registers populate Durango (214 sites) and Arizpe (230) heavily, while Oaxaca (1 site) and Mérida (5) under-represent dispersed indigenous *pueblos* [@Farriss1984; @Gerhard1993]. Second, 1778 Archdiocese of México and 1780 Guadalajara diocesan counts record parish jurisdictions (*curatos*) combining central towns with dependent rural *haciendas*, slightly inflating apparent urban rank for places such as Actopan, Lagos and Encarnación compared with strict municipal headcounts [@Sanchez2000Algunas; @Cervantescortes2021Registro]. Third, two multi-source series for Michoacán's capital remain stored separately as Valladolid (21k in 1805) and Valladolid Michoacán (18k in 1803) to preserve source-level attribution, and border-polygon alignment assigns Tuxtla Gutiérrez (16k in 1790) to the Veracruz isthmian mask rather than Chiapas [@Hidalgo2024Michoaca].

# Conclusion

Cataloguing 826 archival towns, mining *reales*, *cabeceras* and frontier missions with zero crowd-sourced fallback, this gazetteer captures the full urban spectrum of late-colonial New Spain—from Mexico City's hemispherical primacy (179,8k) and the Bajío-western industrial corridor (Guanajuato, Puebla, Guadalajara, Querétaro and Zacatecas) down to hundreds of northern frontier missions and highland parish seats [@MinoGrijalva2001; @Brading1971].

# Appendix

## Primary Archival Registers Inside HGIS de las Indias

Table \ref{tab:hgis-subsources} decomposes the individual archival sources cited across the HGIS de las Indias entries (note that multi-source cities may cite more than one archival register).

<figure class="crd-table-figure" id="tab:hgis-subsources">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Primary Archival Register</th><th class="crd-th">Settlement Citations</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bishop Pedro Tamarón y Romeral Visitation (1765)</strong></td><td class="crd-td">419</td></tr>
<tr><td class="crd-td"><strong>Sánchez Santiró Archdiocese of México Padrones (1778)</strong></td><td class="crd-td">242</td></tr>
<tr><td class="crd-td"><strong>Archivo General de Indias Guadalajara Mission Lists</strong></td><td class="crd-td">131</td></tr>
<tr><td class="crd-td"><strong>Bishopric of Guadalajara Parish Survey (1780)</strong></td><td class="crd-td">80</td></tr>
<tr><td class="crd-td"><strong>Torre Curiel Sonora-Sinaloa Mission Registers</strong></td><td class="crd-td">70</td></tr>
<tr><td class="crd-td"><strong>Prieto Nuevo Santander Frontier Registers</strong></td><td class="crd-td">24</td></tr>
<tr><td class="crd-td"><strong>Revillagigedo Census Urban Schedules (1790 to 1793)</strong></td><td class="crd-td">7</td></tr>
<tr><td class="crd-td"><strong>Humboldt Political Essay Statistical Tables (1803)</strong></td><td class="crd-td">2</td></tr>
<tr><td class="crd-td"><strong>Archivo General de Indias Guadalajara Padrones</strong></td><td class="crd-td">1</td></tr>
<tr><td class="crd-td"><strong>Castañeda Gómez Guadalajara Padrones</strong></td><td class="crd-td">1</td></tr>
<tr><td class="crd-td"><strong>Liehr Puebla Municipal Registers</strong></td><td class="crd-td">1</td></tr>
<tr><td class="crd-td"><strong>Widmer Regional Archival Series</strong></td><td class="crd-td">1</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Breakdown of primary colonial visitation, mission and census registers contributing via HGIS de las Indias.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

1. **Deduplication ledger:** Of 859 candidate settlement records audited across four ingestion waves, 31 duplicate aliases of major cities and 2 northern Pimería Alta mission nodes (Tucson and San Xavier) outside the chapter boundary were excluded, yielding exactly 826 catalogued locales.
2. **Rank-size calibration:** The power-law regression ($\alpha = 0,67$, $R^2 = 0,99$) plotted in Figure \ref{fig:hero-new-spain-hierarchy} fits the upper 180 catalogued settlements across the 826-entry register, illustrating moderate primacy in Mexico City combined with a broad second tier of provincial mining, commercial and diocesan cities.
