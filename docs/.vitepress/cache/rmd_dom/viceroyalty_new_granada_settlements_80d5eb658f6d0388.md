---
title: "Viceroyalty of New Granada"
subtitle: "Colonial Settlement Gazetteer and Urban Hierarchy (1538-1830)"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/viceroyalty_new_granada_urban_hierarchy.png"
hero_caption: "Largest recorded colonial towns and rank-size distribution across 1.024 catalogued settlements in New Granada, Quito and Venezuela, 1538-1830."
hero_label: "fig:hero-new-granada-hierarchy"
bibliography: viceroyalty_new_granada_literature_review.bib
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



![Largest recorded colonial towns and rank-size distribution across 1.024 catalogued settlements in New Granada, Quito and Venezuela, 1538-1830.](figures/viceroyalty_new_granada_urban_hierarchy.png)



# Abstract

This gazetteer documents 1.024 colonial towns, parishes, mining camps and mission stations spanning eight sub-regions and four modern national territories across the Viceroyalty of New Granada, the Real Audiencia de Quito and the Captaincy General of Venezuela between 1538 and 1830. Primary historical-GIS ingestion from HGIS de las Indias (1701-1808) supplies 966 entries (94,34% of the register), reinforced by 27 primary series from Tovar Pinzón and colleagues' 1778 New Granada census compilation (2,64%), 12 demographic series from Hamerly and Tyrer for the Audiencia de Quito (1,17%), 11 series from Obispo Mariano Martí's 1771-1784 Venezuelan visitation (1,07%) and 8 Maynas mission series (0,78%), maintaining a 0% crowd-sourced share [@hamerly1990historia; @kalmanovitz2008economia; @ferry2024colonial]. Out of 1.047 candidate rows evaluated in the chapter source ledger, 23 orthographic and coordinate duplicates were consolidated during spatial deduplication. Across all 1.024 catalogued localities, peak recorded populations follow a polycentric colonial urban hierarchy ($\alpha = 0,6$, $R^2 = 0,98$) headed by Quito (36.479), Bogotá (31.400), Cuenca (29.646), Caracas (25.281) and Maracaibo (22.000) above 45 secondary towns of 5k to 10k and 953 smaller parishes and mission settlements [@minchom2019people; @simard1997formacion; @twinam1982miners].

# Background

Urban and parish geography across northern South America between 1538 and 1830 reflected sharp altitudinal and commercial specialisation. Along the central and northern Andes, Spanish *ciudades* and *villas* were founded atop dense indigenous agricultural basins, led by Quito, Bogotá, Tunja, Pamplona, Popayán, Pasto and Cuenca, surrounded by nucleated *resguardo* villages and rural *doctrinas* [@lombardi1975historia; @pitapico2022agregaciones; @stavig1998andean]. In the eastern New Granada cordillera around Socorro and San Gil, eighteenth-century *mestizo* agrarian and cotton-weaving expansion generated dense parish clusters that outpaced older *encomienda* towns [@galvisnoyes1982restablecimiento; @kalmanovitz2008economia].

Along the Caribbean and Pacific coasts and in the western gold valleys, settlement responded to maritime defence, plantation agriculture and alluvial extraction. Cartagena de Indias functioned as the principal naval fortress and slave-importation port of the Spanish Main, supporting an active *pardo* and *moreno* artisan sector alongside Mompós and Santa Marta [@solanod2012artilleros; @solanod2016pedro; @obyrneh2013desabastecimiento]. In Venezuela, cacao cultivation across the Caracas, Tuy and Aragua valleys and cattle ranching across the llanos nurtured an unusually balanced network of secondary towns including Maracaibo, Barquisimeto, Guanare, San Carlos de Austria, El Tocuyo, Valencia, Mérida, Barinas, Cumaná and Barcelona [@ferry2024colonial; @langue1994desterrar]. Meanwhile, gold-placer camps along the Cauca, Atrato and San Juan rivers anchored Medellín, Cali and Chocó settlements, whereas Jesuit and Franciscan missions formed sparse riverine nodes along Casanare, Caguán and Maynas [@twinam1982miners; @castanogallego2026dominio; @gomez2020comida].

# Methodology

The settlement register was compiled across four sequential waves audited in the chapter source ledger. Wave 1 ingested 693 primary historical-GIS parish and town records from HGIS de las Indias (1701-1808) alongside viceregal census series. Wave 2 incorporated 225 additional sixteenth- and seventeenth-century *visita* and geographical baseline towns (bringing cumulative coverage to 918 entries). Wave 3 added 102 late-colonial Bourbon *padrón* entries from the 1778 New Granada census, the 1779-1784 Quito *empadronamientos* and Obispo Martí's Venezuelan visitation (reaching 1.020 entries). Wave 4 executed a frontier verification sweep across the Llanos, Caguán and Maynas missions, adding the final 4 records (a marginal gain of 0,39%) to close the register at 1.024 settlements.

All 1.047 candidate rows underwent WGS84 coordinate normalisation, polygonal sub-region assignment across the eight colonial divisions and proximity deduplication, merging 23 duplicate orthographic aliases (such as unaccented Bogota into Bogotá and duplicate municipal centroids in Caracas, Valencia, El Tocuyo and Pasto). Each settlement preserves its original source-attributed headcount time series spanning 1540 to 1825 without synthetic interpolation between non-census decades [@hamerly2022quito; @reyescardenas2010derrumbe].

# Testing and Validation

Source-ledger reconciliation confirms exact accounting across all 1.047 candidate records: 1.024 included settlements and 23 merged duplicate aliases. Every included entry carries non-null geographic coordinates, a sub-regional assignment inside one of the eight colonial polygons, at least one dated colonial population observation between 1540 and 1825, and an explicit provenance tag. Figure \ref{fig:sett-regional-map} displays the spatial distribution of all 1.024 settlements across the eight sub-regions, highlighting dense parish clustering along the Bogotá-Tunja-Socorro axis, the Cauca valley, coastal Caracas-Valencia and the Quito-Cuenca highland corridor contrasted against the vast, sparsely settled Llanos and Amazonian missions.

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_quipu/1.0-viceroyalty-new-granada-settlements/viceroyalty_new_granada_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 1.024 catalogued colonial settlements across eight sub-regions of New Granada, Quito and Venezuela, 1538-1830.</figcaption>
</figure>

# Results

## Leading Colonial Towns and Administrative Centres

Table \ref{tab:top30-sites} lists the top 30 urban series in the chapter summary register ranked by peak recorded population. Across the five largest centres (Quito at 36.479, Bogotá at 31.400, Cuenca at 29.646, Caracas at 25.281 and Maracaibo at 22.000), urban leadership was shared among administrative capitals, textile hubs and Caribbean cacao ports [@buschges1995crisis; @minchom2019people; @ferry2024colonial]. Notice that Cartagena and Barquisimeto each appear twice in the underlying summary extract because Tovar Pinzón's 1778 provincial census (17.600 for Cartagena by 1810) and Obispo Martí's visitation (11.300 for Barquisimeto) are indexed alongside separate HGIS municipal-parish series (13.630 for Cartagena in 1779 and 12.602 for Nueva Segovia de Barquisimeto in 1815).

<figure class="crd-table-figure" id="tab:top30-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Sub-Region</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Quito</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Real Audiencia de Quito (Sierra, Jaén, Quijos and Maynas)</td><td class="crd-td">-0,22, -78,51</td><td class="crd-td">1574 to 1825</td><td class="crd-td">36,5k (1782)</td></tr>
<tr><td class="crd-td"><strong>Bogotá</strong></td><td class="crd-td">Colombia</td><td class="crd-td">Santafé, Tunja, Pamplona, Mariquita and Neiva</td><td class="crd-td">4,61, -74,08</td><td class="crd-td">1540 to 1825</td><td class="crd-td">31,4k (1825)</td></tr>
<tr><td class="crd-td"><strong>Cuenca</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Gobernación de Guayaquil and Esmeraldas</td><td class="crd-td">-2,9, -79</td><td class="crd-td">1560 to 1825</td><td class="crd-td">29,6k (1783)</td></tr>
<tr><td class="crd-td"><strong>Caracas</strong></td><td class="crd-td">Venezuela</td><td class="crd-td">Provincia de Caracas (Venezuela) and Maracaibo</td><td class="crd-td">10,51, -66,92</td><td class="crd-td">1574 to 1822</td><td class="crd-td">25,3k (1805)</td></tr>
<tr><td class="crd-td"><strong>Maracaibo</strong></td><td class="crd-td">Venezuela</td><td class="crd-td">Provincia de Caracas (Venezuela) and Maracaibo</td><td class="crd-td">10,65, -71,64</td><td class="crd-td">1574 to 1800</td><td class="crd-td">22k (1800)</td></tr>
<tr><td class="crd-td"><strong>Guayaquil</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Gobernación de Guayaquil and Esmeraldas</td><td class="crd-td">-2,19, -79,89</td><td class="crd-td">1545 to 1825</td><td class="crd-td">18,4k (1825)</td></tr>
<tr><td class="crd-td"><strong>Cartagena</strong></td><td class="crd-td">Colombia</td><td class="crd-td">Cartagena, Santa Marta and Riohacha</td><td class="crd-td">10,39, -75,48</td><td class="crd-td">1574 to 1810</td><td class="crd-td">17,6k (1810)</td></tr>
<tr><td class="crd-td"><strong>Cumaná</strong></td><td class="crd-td">Venezuela</td><td class="crd-td">Cumaná (Nueva Andalucía), Guayana and Margarita</td><td class="crd-td">10,45, -64,18</td><td class="crd-td">1574 to 1800</td><td class="crd-td">16,8k (1800)</td></tr>
<tr><td class="crd-td"><strong>Medellín</strong></td><td class="crd-td">Colombia</td><td class="crd-td">Antioquia, Popayán and Chocó</td><td class="crd-td">6,24, -75,58</td><td class="crd-td">1675 to 1810</td><td class="crd-td">16,8k (1810)</td></tr>
<tr><td class="crd-td"><strong>Popayán</strong></td><td class="crd-td">Colombia</td><td class="crd-td">Antioquia, Popayán and Chocó</td><td class="crd-td">2,44, -76,61</td><td class="crd-td">1540 to 1810</td><td class="crd-td">14,8k (1810)</td></tr>
<tr><td class="crd-td"><strong>Barcelona</strong></td><td class="crd-td">Venezuela</td><td class="crd-td">Cumaná (Nueva Andalucía), Guayana and Margarita</td><td class="crd-td">10,14, -64,69</td><td class="crd-td">1640 to 1800</td><td class="crd-td">14k (1800)</td></tr>
<tr><td class="crd-td"><strong>Cartagena</strong></td><td class="crd-td">Colombia</td><td class="crd-td">Cartagena, Santa Marta and Riohacha</td><td class="crd-td">10,42, -75,55</td><td class="crd-td">1779 to 1780</td><td class="crd-td">13,6k (1779)</td></tr>
<tr><td class="crd-td"><strong>Espiritu Santo del Valle de Guanaguanare</strong></td><td class="crd-td">Venezuela</td><td class="crd-td">Provincia de Caracas (Venezuela) and Maracaibo</td><td class="crd-td">9,03, -69,74</td><td class="crd-td">1778 to 1817</td><td class="crd-td">13,4k (1802)</td></tr>
<tr><td class="crd-td"><strong>Azogues</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Real Audiencia de Quito (Sierra, Jaén, Quijos and Maynas)</td><td class="crd-td">-2,74, -78,85</td><td class="crd-td">1783</td><td class="crd-td">13,3k (1783)</td></tr>
<tr><td class="crd-td"><strong>Nueva Segovia de Barquisimeto</strong></td><td class="crd-td">Venezuela</td><td class="crd-td">Provincia de Caracas (Venezuela) and Maracaibo</td><td class="crd-td">10,07, -69,32</td><td class="crd-td">1779 to 1815</td><td class="crd-td">12,6k (1815)</td></tr>
<tr><td class="crd-td"><strong>Socorro</strong></td><td class="crd-td">Colombia</td><td class="crd-td">Santafé, Tunja, Pamplona, Mariquita and Neiva</td><td class="crd-td">6,47, -73,26</td><td class="crd-td">1685 to 1810</td><td class="crd-td">12,4k (1810)</td></tr>
<tr><td class="crd-td"><strong>San Carlos de Austria</strong></td><td class="crd-td">Venezuela</td><td class="crd-td">Provincia de Caracas (Venezuela) and Maracaibo</td><td class="crd-td">9,66, -68,59</td><td class="crd-td">1781 to 1824</td><td class="crd-td">12,1k (1811)</td></tr>
<tr><td class="crd-td"><strong>Todos Santos de Chota</strong></td><td class="crd-td">Peru</td><td class="crd-td">Real Audiencia de Quito (Sierra, Jaén, Quijos and Maynas)</td><td class="crd-td">-6,56, -78,65</td><td class="crd-td">1779</td><td class="crd-td">11,5k (1779)</td></tr>
<tr><td class="crd-td"><strong>Mérida</strong></td><td class="crd-td">Venezuela</td><td class="crd-td">Provincia de Caracas (Venezuela) and Maracaibo</td><td class="crd-td">8,59, -71,16</td><td class="crd-td">1562 to 1800</td><td class="crd-td">11,5k (1800)</td></tr>
<tr><td class="crd-td"><strong>Barquisimeto</strong></td><td class="crd-td">Venezuela</td><td class="crd-td">Provincia de Caracas (Venezuela) and Maracaibo</td><td class="crd-td">10,07, -69,35</td><td class="crd-td">1555 to 1800</td><td class="crd-td">11,3k (1800)</td></tr>
<tr><td class="crd-td"><strong>Riobamba</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Real Audiencia de Quito (Sierra, Jaén, Quijos and Maynas)</td><td class="crd-td">-1,67, -78,65</td><td class="crd-td">1540 to 1797</td><td class="crd-td">11,2k (1780)</td></tr>
<tr><td class="crd-td"><strong>El Tocuyo</strong></td><td class="crd-td">Venezuela</td><td class="crd-td">Provincia de Caracas (Venezuela) and Maracaibo</td><td class="crd-td">9,79, -69,78</td><td class="crd-td">1550 to 1820</td><td class="crd-td">10,9k (1819)</td></tr>
<tr><td class="crd-td"><strong>Santiago Cali</strong></td><td class="crd-td">Colombia</td><td class="crd-td">Antioquia, Popayán and Chocó</td><td class="crd-td">3,45, -76,53</td><td class="crd-td">1778 to 1787</td><td class="crd-td">10,2k (1787)</td></tr>
<tr><td class="crd-td"><strong>Altagracia Quibor</strong></td><td class="crd-td">Venezuela</td><td class="crd-td">Provincia de Caracas (Venezuela) and Maracaibo</td><td class="crd-td">9,93, -69,62</td><td class="crd-td">1776 to 1820</td><td class="crd-td">10,2k (1820)</td></tr>
<tr><td class="crd-td"><strong>Barinas</strong></td><td class="crd-td">Venezuela</td><td class="crd-td">Provincia de Caracas (Venezuela) and Maracaibo</td><td class="crd-td">8,62, -70,21</td><td class="crd-td">1577 to 1800</td><td class="crd-td">10k (1800)</td></tr>
<tr><td class="crd-td"><strong>Valencia</strong></td><td class="crd-td">Venezuela</td><td class="crd-td">Provincia de Caracas (Venezuela) and Maracaibo</td><td class="crd-td">10,18, -68</td><td class="crd-td">1560 to 1819</td><td class="crd-td">10k (1800)</td></tr>
<tr><td class="crd-td"><strong>Pasto</strong></td><td class="crd-td">Colombia</td><td class="crd-td">Antioquia, Popayán and Chocó</td><td class="crd-td">1,21, -77,28</td><td class="crd-td">1542 to 1795</td><td class="crd-td">9,8k (1778)</td></tr>
<tr><td class="crd-td"><strong>Gualaceo</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Real Audiencia de Quito (Sierra, Jaén, Quijos and Maynas)</td><td class="crd-td">-2,89, -78,78</td><td class="crd-td">1783</td><td class="crd-td">9,4k (1783)</td></tr>
<tr><td class="crd-td"><strong>Maracay</strong></td><td class="crd-td">Venezuela</td><td class="crd-td">Provincia de Caracas (Venezuela) and Maracaibo</td><td class="crd-td">10,25, -67,6</td><td class="crd-td">1769 to 1820</td><td class="crd-td">9k (1804)</td></tr>
<tr><td class="crd-td"><strong>Otavalo</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Real Audiencia de Quito (Sierra, Jaén, Quijos and Maynas)</td><td class="crd-td">0,23, -78,26</td><td class="crd-td">1574 to 1780</td><td class="crd-td">8,9k (1780)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 30 colonial urban series across New Granada, Quito and Venezuela, 1538-1830 (from 1.024 catalogued settlements).</figcaption>
</figure>

## Sub-Regional Gazetteer Distribution

Table \ref{tab:subregion-gazetteer} aggregates catalogued settlement counts, sampling density per 10.000 km², leading urban centre and 1830 sub-regional population across all eight divisions. Provincia de Caracas and Maracaibo (277 settlements; 7,48 per 10.000 km²) and Santafé, Tunja, Pamplona, Mariquita and Neiva (229 settlements; 14,65 per 10.000 km²) account for nearly half of the entire register (49,4%), whereas Los Llanos de Casanare and Caguán contain just 26 mission stations across 660.351,9 km² (0,39 per 10.000 km²).

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Sites per 10k km²</th><th class="crd-th">Leading Settlement (Peak)</th><th class="crd-th">1830 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Santafé, Tunja, Pamplona, Mariquita and Neiva</strong></td><td class="crd-td">156.314</td><td class="crd-td">229</td><td class="crd-td">14,65</td><td class="crd-td">Bogotá (31,4k)</td><td class="crd-td">690k</td></tr>
<tr><td class="crd-td"><strong>Cartagena, Santa Marta and Riohacha</strong></td><td class="crd-td">158.284</td><td class="crd-td">155</td><td class="crd-td">9,79</td><td class="crd-td">Cartagena (17,6k)</td><td class="crd-td">290k</td></tr>
<tr><td class="crd-td"><strong>Antioquia, Popayán and Chocó</strong></td><td class="crd-td">231.440</td><td class="crd-td">147</td><td class="crd-td">6,35</td><td class="crd-td">Medellín (16,8k)</td><td class="crd-td">345k</td></tr>
<tr><td class="crd-td"><strong>Los Llanos de Casanare and Caguán Missions</strong></td><td class="crd-td">660.352</td><td class="crd-td">26</td><td class="crd-td">0,39</td><td class="crd-td">Pore Casanare (2,6k)</td><td class="crd-td">54k</td></tr>
<tr><td class="crd-td"><strong>Real Audiencia de Quito (Sierra, Jaén, Quijos and Maynas)</strong></td><td class="crd-td">482.585</td><td class="crd-td">55</td><td class="crd-td">1,14</td><td class="crd-td">Quito (36,5k)</td><td class="crd-td">485k</td></tr>
<tr><td class="crd-td"><strong>Gobernación de Guayaquil and Esmeraldas</strong></td><td class="crd-td">74.755</td><td class="crd-td">45</td><td class="crd-td">6,02</td><td class="crd-td">Cuenca (29,6k)</td><td class="crd-td">95k</td></tr>
<tr><td class="crd-td"><strong>Provincia de Caracas (Venezuela) and Maracaibo</strong></td><td class="crd-td">370.169</td><td class="crd-td">277</td><td class="crd-td">7,48</td><td class="crd-td">Caracas (25,3k)</td><td class="crd-td">620k</td></tr>
<tr><td class="crd-td"><strong>Cumaná (Nueva Andalucía), Guayana and Margarita</strong></td><td class="crd-td">576.193</td><td class="crd-td">90</td><td class="crd-td">1,56</td><td class="crd-td">Cumaná (16,8k)</td><td class="crd-td">215k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlement counts, areal site density (per 10.000 km²), leading settlement and 1830 population across eight colonial sub-regions.</figcaption>
</figure>

## Source Ledger Saturation Waves and Provenance Corpora

Tables \ref{tab:saturation-waves} and \ref{tab:provenance-ledger} report the ingestion wave ledger and provenance shares across all 1.024 settlements. Saturation auditing confirms that Wave 4 frontier sweeps lifted the register by only 0,39% (4 additions on a 1.020 base), while primary academic HGIS and archival census corpora account for 100% of catalogued entries with zero crowd-sourced fallback.

<figure class="crd-table-figure" id="tab:saturation-waves">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Wave</th><th class="crd-th">Source Class</th><th class="crd-th">Prior Total</th><th class="crd-th">Added</th><th class="crd-th">Marginal Gain</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1</strong></td><td class="crd-td">HGIS de las Indias and viceroyal censuses</td><td class="crd-td">0</td><td class="crd-td">693</td><td class="crd-td">100%</td></tr>
<tr><td class="crd-td"><strong>Wave 2</strong></td><td class="crd-td">Early colonial visitas and geographical descriptions</td><td class="crd-td">693</td><td class="crd-td">225</td><td class="crd-td">32,47%</td></tr>
<tr><td class="crd-td"><strong>Wave 3</strong></td><td class="crd-td">Bourbon padrones and late-colonial censuses</td><td class="crd-td">918</td><td class="crd-td">102</td><td class="crd-td">11,11%</td></tr>
<tr><td class="crd-td"><strong>Wave 4</strong></td><td class="crd-td">Frontier mission verification sweep</td><td class="crd-td">1.020</td><td class="crd-td">4</td><td class="crd-td">0,39%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Four-wave gazetteer ingestion and marginal saturation audit from the chapter source ledger.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:provenance-ledger">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Corpus</th><th class="crd-th">Classification</th><th class="crd-th">Entries</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>HGIS de las Indias (1701-1808)</strong></td><td class="crd-td">Primary academic HGIS corpus</td><td class="crd-td">966</td><td class="crd-td">94,34%</td></tr>
<tr><td class="crd-td"><strong>Tovar Pinzón et al. (1994) 1778 Census</strong></td><td class="crd-td">National census compilation</td><td class="crd-td">27</td><td class="crd-td">2,64%</td></tr>
<tr><td class="crd-td"><strong>Hamerly (1973) and Tyrer (1988) Quito Series</strong></td><td class="crd-td">Regional demographic monograph</td><td class="crd-td">12</td><td class="crd-td">1,17%</td></tr>
<tr><td class="crd-td"><strong>Obispo Mariano Martí (1771-1784) Visita Pastoral</strong></td><td class="crd-td">Ecclesiastical pastoral visitation</td><td class="crd-td">11</td><td class="crd-td">1,07%</td></tr>
<tr><td class="crd-td"><strong>Chantre y Herrera (1770) and Golob (1982) Maynas</strong></td><td class="crd-td">Frontier mission chronicle</td><td class="crd-td">8</td><td class="crd-td">0,78%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Provenance corpus distribution across 1.024 catalogued settlements in the Viceroyalty of New Granada.</figcaption>
</figure>

# Limitations

Three archival constraints shape interpretation of this colonial settlement gazetteer. First, HGIS de las Indias concentrates heavily on eighteenth-century Bourbon parish returns (1701-1808), meaning that small rural *pueblos de indios* extinguished or aggregated before 1700 appear less frequently than surviving late-colonial parishes [@pitapico2022agregaciones; @lombardi1975historia]. Second, several municipal series switch between *ciudad* core and wider *partido* or parish-level counts across years, producing sharp short-term swings (such as Caracas between 1800 and 1805 or Cuenca in 1780-1783) that reflect administrative scope rather than sudden physical abandonment [@minchom2019people; @hamerly2022quito]. Third, sparse mission coverage in Casanare, Caguán and Maynas reflects the collapse of frontier parish administration after 1767 rather than absence of autonomous indigenous habitation [@roderaalonso2004relacion; @sanztapia2003venta].

# Sources

::: {#refs}
:::
