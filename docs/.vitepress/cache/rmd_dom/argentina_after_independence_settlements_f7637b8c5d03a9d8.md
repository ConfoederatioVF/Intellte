---
title: "Argentina after Independence"
subtitle: "Settlement Gazetteer, Conurbano Accounting and Urban Hierarchy (1810-2025)"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/argentina_after_independence_urban_hierarchy.png"
hero_caption: "Twelve largest Argentine settlements and agglomerations alongside the log-log rank-size distribution across 2.057 catalogued sites, 1810 to 2026."
hero_label: "fig:hero-arg-hierarchy"
bibliography: argentina_after_independence_literature_review.bib
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



![Twelve largest Argentine settlements and agglomerations alongside the log-log rank-size distribution across 2.057 catalogued sites, 1810 to 2026.](figures/argentina_after_independence_urban_hierarchy.png)



# Abstract

This gazetteer documents 2.057 georeferenced Argentine cities, metropolitan agglomerations, suburban *partidos* and rural localities spanning 1810 to 2026 across all 24 modern jurisdictions. Built across four audited ingestion waves from 2.495 INDEC 2022 local-government units, 4.037 IGN-INDEC locality coordinates and historical DGE-INDEC census tables (1869-1960), the register incorporates 1.642 entries in Wave 1, 287 georeferenced and metropolitan entries in Wave 2 (17,48% gain), 123 longitudinal census backfills in Wave 3 (6,38% gain) and 5 final gap entries in Wave 4 (0,24% saturation gain), while rejecting 438 duplicate or superseded candidates and zero crowd-sourced entries. Unified Buenos Aires city proper (consolidating all 15 CABA *Comunas*) is separated explicitly from 70 suburban *partidos* across the *Conurbano Bonaerense* and 10 major metropolitan agglomerations led by Gran Buenos Aires at 16,22M inhabitants, yielding a continuous Zipf rank-size slope of $\alpha = 1,08$ ($R^2 = 0,97$) down to small Pampean communes such as Colonia Anita at 9 residents [@Rodriguez2025Area; @Molinatti2020Segregacion; @Rotger2025Urbanizacion].

# Background

Argentine urban geography reflects a sharp historical split between colonial interior towns along the Andean and Córdoba road networks and post-1869 railway and port cities across the Pampas [@Ghirardi2013Saludes; @Kuffer2010Migracion; @Pellegrini2014Patron]. While Salta, Tucumán, Córdoba and Mendoza anchored early republican administration, transatlantic immigration after 1880 turned Buenos Aires, Rosario and planned La Plata into dense European-style ports [@Roldan2013Inventarios; @Ramos2021Envejecimiento; @Bjerg2018Emotions]. After 1930, industrial growth spilled far beyond CABA's fixed 200 km² perimeter into the surrounding *partidos* of Buenos Aires Province, creating the vast *Conurbano Bonaerense* whose individual municipalities now outrank most provincial capitals [@Cuenya1990Land; @Almansi2008Mobilizing; @Isla2023Urbanization].

# Methodology

Candidate records were drawn from three exhaustive institutional archives: 2.495 rows from the INDEC 2022 local-government release, 4.037 georeferenced points from IGN-INDEC and 24 provincial series from the 1869-1960 national censuses [@Collection1929Estadistica; @Nacionales1914Censo; @Gonzalez2015Proyecciones]. Each retained entry carries WGS84 coordinates, a sub-regional polygon assignment and an explicit urban scope distinguishing 1.977 city-proper units, 70 suburban units and 10 metropolitan agglomerations. For CABA, all 15 *Comunas* are consolidated into a single Buenos Aires city-proper series (1810 to 2022) so that municipal trend comparisons remain coherent across two centuries without splitting central wards against outer *Conurbano* districts [@Rotger2025Urbanizacion; @Isla2023Urbanization].

# Testing and Validation

Ledger reconciliation accounts cleanly for all 2.495 candidate rows (2.057 included and 438 excluded), achieving 100% sub-regional coverage across all 24 jurisdictions with zero crowd-sourced fallback. Figure \ref{fig:sett-regional-map} displays the spatial distribution of the 2.057 sites, showing dense Pampean clustering across Córdoba (408 sites), Santa Fe (329), Entre Ríos (175) and Buenos Aires (136) contrasting with wide oasis and littoral spacing across Patagonia [@Daddona2023Primeras; @Cassiodoro2020Caracterizacio; @Gallero2010Proceso].

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_quipu/1.0-argentina-after-independence-settlements/argentina_after_independence_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 2.057 catalogued Argentine settlements and leading metropolitan agglomerations across twenty-four jurisdictions, 1810 to 2026.</figcaption>
</figure>

# Results

## Leading Cities, Suburbs and Agglomerations

Table \ref{tab:top30-sites} lists the 30 largest catalogued settlements and agglomerations by peak population. Gran Buenos Aires (16,22M) leads the second-ranked agglomeration Gran Córdoba (1,71M) by nearly ten to one, while La Matanza (1,84M) stands as the largest single municipal subdivision outside the Federal Capital [@Molinatti2020Segregacion; @Rodriguez2025Area; @Rotger2025Urbanizacion].

<figure class="crd-table-figure" id="tab:top30-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Scope</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gran Buenos Aires (Metro)</strong></td><td class="crd-td">CABA (Buenos Aires)</td><td class="crd-td">Metro</td><td class="crd-td">-34,6, -58,38</td><td class="crd-td">2022</td><td class="crd-td">16,22M (2022)</td></tr>
<tr><td class="crd-td"><strong>Buenos Aires</strong></td><td class="crd-td">CABA (Buenos Aires)</td><td class="crd-td">City</td><td class="crd-td">-34,6, -58,38</td><td class="crd-td">1810 to 2022</td><td class="crd-td">3,49M (1960)</td></tr>
<tr><td class="crd-td"><strong>La Matanza</strong></td><td class="crd-td">Buenos Aires</td><td class="crd-td">Suburb</td><td class="crd-td">-34,68, -58,56</td><td class="crd-td">2022</td><td class="crd-td">1,84M (2022)</td></tr>
<tr><td class="crd-td"><strong>Gran Córdoba (Metro)</strong></td><td class="crd-td">Córdoba</td><td class="crd-td">Metro</td><td class="crd-td">-31,42, -64,18</td><td class="crd-td">2022</td><td class="crd-td">1,71M (2022)</td></tr>
<tr><td class="crd-td"><strong>Córdoba</strong></td><td class="crd-td">Córdoba</td><td class="crd-td">City</td><td class="crd-td">-31,42, -64,18</td><td class="crd-td">1869 to 2022</td><td class="crd-td">1,51M (2022)</td></tr>
<tr><td class="crd-td"><strong>Gran Rosario (Metro)</strong></td><td class="crd-td">Entre Ríos</td><td class="crd-td">Metro</td><td class="crd-td">-32,95, -60,63</td><td class="crd-td">2022</td><td class="crd-td">1,43M (2022)</td></tr>
<tr><td class="crd-td"><strong>Rosario</strong></td><td class="crd-td">Entre Ríos</td><td class="crd-td">City</td><td class="crd-td">-32,95, -60,63</td><td class="crd-td">1869 to 2022</td><td class="crd-td">1,26M (2010)</td></tr>
<tr><td class="crd-td"><strong>Gran Mendoza (Metro)</strong></td><td class="crd-td">Mendoza</td><td class="crd-td">Metro</td><td class="crd-td">-32,9, -68,85</td><td class="crd-td">2022</td><td class="crd-td">1,06M (2022)</td></tr>
<tr><td class="crd-td"><strong>Gran Tucumán (Metro)</strong></td><td class="crd-td">Tucumán</td><td class="crd-td">Metro</td><td class="crd-td">-26,81, -65,22</td><td class="crd-td">2022</td><td class="crd-td">1,05M (2022)</td></tr>
<tr><td class="crd-td"><strong>Mendoza</strong></td><td class="crd-td">Mendoza</td><td class="crd-td">City</td><td class="crd-td">-32,9, -68,85</td><td class="crd-td">1869 to 2022</td><td class="crd-td">937,2k (2010)</td></tr>
<tr><td class="crd-td"><strong>La Plata</strong></td><td class="crd-td">Buenos Aires</td><td class="crd-td">City</td><td class="crd-td">-34,92, -57,95</td><td class="crd-td">1895 to 2022</td><td class="crd-td">768,5k (2022)</td></tr>
<tr><td class="crd-td"><strong>Lomas de Zamora</strong></td><td class="crd-td">Buenos Aires</td><td class="crd-td">Suburb</td><td class="crd-td">-34,76, -58,4</td><td class="crd-td">2022</td><td class="crd-td">690,5k (2022)</td></tr>
<tr><td class="crd-td"><strong>Gran Salta (Metro)</strong></td><td class="crd-td">Salta</td><td class="crd-td">Metro</td><td class="crd-td">-24,78, -65,41</td><td class="crd-td">2022</td><td class="crd-td">671k (2022)</td></tr>
<tr><td class="crd-td"><strong>General Pueyrredón</strong></td><td class="crd-td">Buenos Aires</td><td class="crd-td">City</td><td class="crd-td">-37,97, -57,74</td><td class="crd-td">2022</td><td class="crd-td">667,1k (2022)</td></tr>
<tr><td class="crd-td"><strong>Gran Mar del Plata (Metro)</strong></td><td class="crd-td">Buenos Aires</td><td class="crd-td">Metro</td><td class="crd-td">-38,01, -57,54</td><td class="crd-td">2022</td><td class="crd-td">644,2k (2022)</td></tr>
<tr><td class="crd-td"><strong>Mar del Plata</strong></td><td class="crd-td">Buenos Aires</td><td class="crd-td">City</td><td class="crd-td">-38, -57,55</td><td class="crd-td">1914 to 2022</td><td class="crd-td">644,2k (2022)</td></tr>
<tr><td class="crd-td"><strong>Quilmes</strong></td><td class="crd-td">CABA (Buenos Aires)</td><td class="crd-td">Suburb</td><td class="crd-td">-34,73, -58,26</td><td class="crd-td">2022</td><td class="crd-td">633,4k (2022)</td></tr>
<tr><td class="crd-td"><strong>San Miguel de Tucumán</strong></td><td class="crd-td">Tucumán</td><td class="crd-td">City</td><td class="crd-td">-26,83, -65,2</td><td class="crd-td">1869 to 2022</td><td class="crd-td">601,9k (2022)</td></tr>
<tr><td class="crd-td"><strong>Salta</strong></td><td class="crd-td">Salta</td><td class="crd-td">City</td><td class="crd-td">-24,78, -65,41</td><td class="crd-td">1869 to 2022</td><td class="crd-td">594,8k (2022)</td></tr>
<tr><td class="crd-td"><strong>Almirante Brown</strong></td><td class="crd-td">Buenos Aires</td><td class="crd-td">Suburb</td><td class="crd-td">-34,84, -58,37</td><td class="crd-td">2022</td><td class="crd-td">584,8k (2022)</td></tr>
<tr><td class="crd-td"><strong>Merlo</strong></td><td class="crd-td">Buenos Aires</td><td class="crd-td">Suburb</td><td class="crd-td">-34,67, -58,73</td><td class="crd-td">2022</td><td class="crd-td">582,5k (2022)</td></tr>
<tr><td class="crd-td"><strong>Moreno</strong></td><td class="crd-td">Buenos Aires</td><td class="crd-td">Suburb</td><td class="crd-td">-34,65, -58,79</td><td class="crd-td">2022</td><td class="crd-td">576,6k (2022)</td></tr>
<tr><td class="crd-td"><strong>Gran San Juan (Metro)</strong></td><td class="crd-td">San Juan</td><td class="crd-td">Metro</td><td class="crd-td">-31,54, -68,53</td><td class="crd-td">2022</td><td class="crd-td">546,6k (2022)</td></tr>
<tr><td class="crd-td"><strong>Gran Santa Fe (Metro)</strong></td><td class="crd-td">Santa Fe</td><td class="crd-td">Metro</td><td class="crd-td">-31,65, -60,71</td><td class="crd-td">2022</td><td class="crd-td">530k (2022)</td></tr>
<tr><td class="crd-td"><strong>Gran Neuquén (Metro)</strong></td><td class="crd-td">Neuquén</td><td class="crd-td">Metro</td><td class="crd-td">-38,95, -68,06</td><td class="crd-td">2022</td><td class="crd-td">500,3k (2022)</td></tr>
<tr><td class="crd-td"><strong>Florencio Varela</strong></td><td class="crd-td">Buenos Aires</td><td class="crd-td">Suburb</td><td class="crd-td">-34,8, -58,28</td><td class="crd-td">2022</td><td class="crd-td">496,4k (2022)</td></tr>
<tr><td class="crd-td"><strong>Santa Fe</strong></td><td class="crd-td">Santa Fe</td><td class="crd-td">City</td><td class="crd-td">-31,65, -60,71</td><td class="crd-td">1869 to 2022</td><td class="crd-td">490,2k (2010)</td></tr>
<tr><td class="crd-td"><strong>Lanús</strong></td><td class="crd-td">CABA (Buenos Aires)</td><td class="crd-td">Suburb</td><td class="crd-td">-34,71, -58,39</td><td class="crd-td">2022</td><td class="crd-td">461,3k (2022)</td></tr>
<tr><td class="crd-td"><strong>San Juan</strong></td><td class="crd-td">San Juan</td><td class="crd-td">City</td><td class="crd-td">-31,54, -68,53</td><td class="crd-td">1869 to 2022</td><td class="crd-td">461,2k (2010)</td></tr>
<tr><td class="crd-td"><strong>General San Martín</strong></td><td class="crd-td">Buenos Aires</td><td class="crd-td">Suburb</td><td class="crd-td">-34,57, -58,53</td><td class="crd-td">2022</td><td class="crd-td">450,5k (2022)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Thirty largest catalogued settlements and metropolitan agglomerations in Argentina ordered by peak population.</figcaption>
</figure>

## Unified CABA, Conurbano Suburbs and Gran Buenos Aires Accounting

Because CABA's 200 km² administrative boundary contains barely one-fifth of the continuous Greater Buenos Aires metropolis, Table \ref{tab:caba-conurbano} reconciles the unified CABA city-proper record against Gran Buenos Aires (Metro) and the largest *Conurbano Bonaerense* suburban *partidos* in the 2022 census [@Cuenya1990Land; @Almansi2008Mobilizing; @Isla2023Urbanization]. Note that three inner southern *partidos* (Quilmes, Lanús and Avellaneda) fall inside the rasterised CABA mask polygon while belonging politically to Buenos Aires Province.

<figure class="crd-table-figure" id="tab:caba-conurbano">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Urban Unit</th><th class="crd-th">Scope</th><th class="crd-th">Mask Region</th><th class="crd-th">2022 Pop.</th><th class="crd-th">Share of GBA</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gran Buenos Aires (Metro)</strong></td><td class="crd-td">Metro</td><td class="crd-td">CABA (Buenos Aires)</td><td class="crd-td">16,22M</td><td class="crd-td">100%</td></tr>
<tr><td class="crd-td"><strong>Buenos Aires</strong></td><td class="crd-td">City proper</td><td class="crd-td">CABA (Buenos Aires)</td><td class="crd-td">3,12M</td><td class="crd-td">19,24%</td></tr>
<tr><td class="crd-td"><strong>La Matanza</strong></td><td class="crd-td">Suburb</td><td class="crd-td">Buenos Aires</td><td class="crd-td">1,84M</td><td class="crd-td">11,35%</td></tr>
<tr><td class="crd-td"><strong>Lomas de Zamora</strong></td><td class="crd-td">Suburb</td><td class="crd-td">Buenos Aires</td><td class="crd-td">690,5k</td><td class="crd-td">4,26%</td></tr>
<tr><td class="crd-td"><strong>Quilmes</strong></td><td class="crd-td">Suburb</td><td class="crd-td">CABA (Buenos Aires)</td><td class="crd-td">633,4k</td><td class="crd-td">3,9%</td></tr>
<tr><td class="crd-td"><strong>Almirante Brown</strong></td><td class="crd-td">Suburb</td><td class="crd-td">Buenos Aires</td><td class="crd-td">584,8k</td><td class="crd-td">3,6%</td></tr>
<tr><td class="crd-td"><strong>Merlo</strong></td><td class="crd-td">Suburb</td><td class="crd-td">Buenos Aires</td><td class="crd-td">582,5k</td><td class="crd-td">3,59%</td></tr>
<tr><td class="crd-td"><strong>Moreno</strong></td><td class="crd-td">Suburb</td><td class="crd-td">Buenos Aires</td><td class="crd-td">576,6k</td><td class="crd-td">3,55%</td></tr>
<tr><td class="crd-td"><strong>Florencio Varela</strong></td><td class="crd-td">Suburb</td><td class="crd-td">Buenos Aires</td><td class="crd-td">496,4k</td><td class="crd-td">3,06%</td></tr>
<tr><td class="crd-td"><strong>Lanús</strong></td><td class="crd-td">Suburb</td><td class="crd-td">CABA (Buenos Aires)</td><td class="crd-td">461,3k</td><td class="crd-td">2,84%</td></tr>
<tr><td class="crd-td"><strong>General San Martín</strong></td><td class="crd-td">Suburb</td><td class="crd-td">Buenos Aires</td><td class="crd-td">450,5k</td><td class="crd-td">2,78%</td></tr>
<tr><td class="crd-td"><strong>Tigre</strong></td><td class="crd-td">Suburb</td><td class="crd-td">Buenos Aires</td><td class="crd-td">446,9k</td><td class="crd-td">2,75%</td></tr>
<tr><td class="crd-td"><strong>Pilar</strong></td><td class="crd-td">Suburb</td><td class="crd-td">Buenos Aires</td><td class="crd-td">394,8k</td><td class="crd-td">2,43%</td></tr>
<tr><td class="crd-td"><strong>Avellaneda</strong></td><td class="crd-td">Suburb</td><td class="crd-td">CABA (Buenos Aires)</td><td class="crd-td">367,6k</td><td class="crd-td">2,27%</td></tr>
<tr><td class="crd-td"><strong>Tres de Febrero</strong></td><td class="crd-td">Suburb</td><td class="crd-td">Buenos Aires</td><td class="crd-td">364,2k</td><td class="crd-td">2,24%</td></tr>
<tr><td class="crd-td"><strong>Berazategui</strong></td><td class="crd-td">Suburb</td><td class="crd-td">Buenos Aires</td><td class="crd-td">358,7k</td><td class="crd-td">2,21%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Metropolitan reconciliation of Gran Buenos Aires, unified CABA city proper and leading Conurbano partidos in 2022.</figcaption>
</figure>

## Sub-Regional Gazetteer Distribution

Table \ref{tab:subregion-gazetteer} reports catalogued site counts, spatial sampling density per 10.000 km², leading settlement and 2022 population across all 24 jurisdictions. Sampling density peaks in CABA (101,11 sites per 10.000 km²) and Tucumán (32,58), Córdoba (26,25), Santa Fe (24,92), Misiones (21,63) and Entre Ríos (20,6), reflecting dense municipal fragmentation across the Pampean grain belt and northern valleys [@Pellegrini2014Patron; @Gallero2010Proceso; @Gaitan2013Migracion].

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Sites per 10k km²</th><th class="crd-th">Leading Site (Peak)</th><th class="crd-th">2022 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Buenos Aires</strong></td><td class="crd-td">299.871</td><td class="crd-td">136</td><td class="crd-td">4,54</td><td class="crd-td">La Matanza (1,84M)</td><td class="crd-td">17,52M</td></tr>
<tr><td class="crd-td"><strong>Catamarca</strong></td><td class="crd-td">102.964</td><td class="crd-td">38</td><td class="crd-td">3,69</td><td class="crd-td">San Fernando del Valle de Catamarca (186,9k)</td><td class="crd-td">429,6k</td></tr>
<tr><td class="crd-td"><strong>Chaco</strong></td><td class="crd-td">101.445</td><td class="crd-td">71</td><td class="crd-td">7</td><td class="crd-td">Corrientes (430,2k)</td><td class="crd-td">1,13M</td></tr>
<tr><td class="crd-td"><strong>Chubut</strong></td><td class="crd-td">225.051</td><td class="crd-td">43</td><td class="crd-td">1,91</td><td class="crd-td">Comodoro Rivadavia (201,9k)</td><td class="crd-td">592,6k</td></tr>
<tr><td class="crd-td"><strong>CABA (Buenos Aires)</strong></td><td class="crd-td">494</td><td class="crd-td">5</td><td class="crd-td">101,11</td><td class="crd-td">Gran Buenos Aires (Metro) (16,22M)</td><td class="crd-td">3,12M</td></tr>
<tr><td class="crd-td"><strong>Corrientes</strong></td><td class="crd-td">92.999</td><td class="crd-td">63</td><td class="crd-td">6,77</td><td class="crd-td">Goya (98,5k)</td><td class="crd-td">1,21M</td></tr>
<tr><td class="crd-td"><strong>Córdoba</strong></td><td class="crd-td">155.433</td><td class="crd-td">408</td><td class="crd-td">26,25</td><td class="crd-td">Gran Córdoba (Metro) (1,71M)</td><td class="crd-td">3,84M</td></tr>
<tr><td class="crd-td"><strong>Entre Ríos</strong></td><td class="crd-td">84.942</td><td class="crd-td">175</td><td class="crd-td">20,6</td><td class="crd-td">Gran Rosario (Metro) (1,43M)</td><td class="crd-td">1,43M</td></tr>
<tr><td class="crd-td"><strong>Formosa</strong></td><td class="crd-td">84.937</td><td class="crd-td">33</td><td class="crd-td">3,89</td><td class="crd-td">Formosa (264,5k)</td><td class="crd-td">607,4k</td></tr>
<tr><td class="crd-td"><strong>Jujuy</strong></td><td class="crd-td">60.451</td><td class="crd-td">60</td><td class="crd-td">9,93</td><td class="crd-td">San Salvador de Jujuy (312,4k)</td><td class="crd-td">811,6k</td></tr>
<tr><td class="crd-td"><strong>La Pampa</strong></td><td class="crd-td">147.433</td><td class="crd-td">79</td><td class="crd-td">5,36</td><td class="crd-td">Santa Rosa (117,2k)</td><td class="crd-td">361,9k</td></tr>
<tr><td class="crd-td"><strong>La Rioja</strong></td><td class="crd-td">92.191</td><td class="crd-td">20</td><td class="crd-td">2,17</td><td class="crd-td">La Rioja (211,7k)</td><td class="crd-td">383,9k</td></tr>
<tr><td class="crd-td"><strong>Mendoza</strong></td><td class="crd-td">144.179</td><td class="crd-td">22</td><td class="crd-td">1,53</td><td class="crd-td">Gran Mendoza (Metro) (1,06M)</td><td class="crd-td">2,04M</td></tr>
<tr><td class="crd-td"><strong>Misiones</strong></td><td class="crd-td">35.595</td><td class="crd-td">77</td><td class="crd-td">21,63</td><td class="crd-td">Posadas (328,9k)</td><td class="crd-td">1,28M</td></tr>
<tr><td class="crd-td"><strong>Neuquén</strong></td><td class="crd-td">102.857</td><td class="crd-td">59</td><td class="crd-td">5,74</td><td class="crd-td">Gran Neuquén (Metro) (500,3k)</td><td class="crd-td">710,8k</td></tr>
<tr><td class="crd-td"><strong>Río Negro</strong></td><td class="crd-td">198.436</td><td class="crd-td">60</td><td class="crd-td">3,02</td><td class="crd-td">General Roca (109,4k)</td><td class="crd-td">750,8k</td></tr>
<tr><td class="crd-td"><strong>Salta</strong></td><td class="crd-td">148.989</td><td class="crd-td">57</td><td class="crd-td">3,83</td><td class="crd-td">Gran Salta (Metro) (671k)</td><td class="crd-td">1,44M</td></tr>
<tr><td class="crd-td"><strong>San Juan</strong></td><td class="crd-td">96.140</td><td class="crd-td">22</td><td class="crd-td">2,29</td><td class="crd-td">Gran San Juan (Metro) (546,6k)</td><td class="crd-td">822,9k</td></tr>
<tr><td class="crd-td"><strong>San Luis</strong></td><td class="crd-td">82.451</td><td class="crd-td">68</td><td class="crd-td">8,25</td><td class="crd-td">San Luis (206,9k)</td><td class="crd-td">542,1k</td></tr>
<tr><td class="crd-td"><strong>Santa Cruz</strong></td><td class="crd-td">245.407</td><td class="crd-td">16</td><td class="crd-td">0,65</td><td class="crd-td">Río Gallegos (116k)</td><td class="crd-td">337,2k</td></tr>
<tr><td class="crd-td"><strong>Santa Fe</strong></td><td class="crd-td">132.002</td><td class="crd-td">329</td><td class="crd-td">24,92</td><td class="crd-td">Gran Santa Fe (Metro) (530k)</td><td class="crd-td">3,54M</td></tr>
<tr><td class="crd-td"><strong>Sgo. del Estero</strong></td><td class="crd-td">135.369</td><td class="crd-td">128</td><td class="crd-td">9,46</td><td class="crd-td">Santiago del Estero (363,3k)</td><td class="crd-td">1,06M</td></tr>
<tr><td class="crd-td"><strong>Tierra del Fuego</strong></td><td class="crd-td">21.076</td><td class="crd-td">3</td><td class="crd-td">1,42</td><td class="crd-td">Río Grande (98,8k)</td><td class="crd-td">185,7k</td></tr>
<tr><td class="crd-td"><strong>Tucumán</strong></td><td class="crd-td">26.089</td><td class="crd-td">85</td><td class="crd-td">32,58</td><td class="crd-td">Gran Tucumán (Metro) (1,05M)</td><td class="crd-td">1,73M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catalogued site counts, spatial density (per 10.000 km²), leading entry and 2022 population across twenty-four jurisdictions.</figcaption>
</figure>

## Source Ledger Saturation and Archival Corpora

Tables \ref{tab:saturation-waves} and \ref{tab:exhausted-corpora} summarise the four sequential ingestion waves and the three exhausted institutional archives recorded in the chapter ledger, demonstrating diminishing marginal returns down to 0,24% in Wave 4 [@Roldan2013Inventarios; @Collection1929Estadistica; @Nacionales1914Censo].

<figure class="crd-table-figure" id="tab:saturation-waves">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Wave</th><th class="crd-th">Source Class</th><th class="crd-th">Prior Total</th><th class="crd-th">Added</th><th class="crd-th">Marginal Gain</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1</strong></td><td class="crd-td">Primary INDEC full census extract</td><td class="crd-td">0</td><td class="crd-td">1.642</td><td class="crd-td">100%</td></tr>
<tr><td class="crd-td"><strong>Wave 2</strong></td><td class="crd-td">Georeference repair and metro reconciliation</td><td class="crd-td">1.642</td><td class="crd-td">287</td><td class="crd-td">17,48%</td></tr>
<tr><td class="crd-td"><strong>Wave 3</strong></td><td class="crd-td">Longitudinal 19th-20th century census backfill</td><td class="crd-td">1.929</td><td class="crd-td">123</td><td class="crd-td">6,38%</td></tr>
<tr><td class="crd-td"><strong>Wave 4</strong></td><td class="crd-td">Sub-regional gap audit sweep</td><td class="crd-td">2.052</td><td class="crd-td">5</td><td class="crd-td">0,24%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Four-wave gazetteer ingestion history and marginal saturation gain across 2.057 Argentine settlements.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:exhausted-corpora">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Corpus Name</th><th class="crd-th">Archive Tier</th><th class="crd-th">Rows in Bounds</th><th class="crd-th">Rows Processed</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>INDEC Argentina Censo 2022 (Gobiernos Locales)</strong></td><td class="crd-td">Primary national archive</td><td class="crd-td">2.495</td><td class="crd-td">2.495</td></tr>
<tr><td class="crd-td"><strong>IGN-INDEC Georef Localidades</strong></td><td class="crd-td">Primary national archive</td><td class="crd-td">4.037</td><td class="crd-td">4.037</td></tr>
<tr><td class="crd-td"><strong>DGE-INDEC Censos Nacionales (1869-1960)</strong></td><td class="crd-td">Primary national archive</td><td class="crd-td">24</td><td class="crd-td">24</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Audited national archives processed in full during compilation of the Argentine settlement register.</figcaption>
</figure>

# Limitations

Three technical caveats govern the settlement dataset. First, municipal structure differs sharply across provinces: Buenos Aires Province organises urban and rural space into 135 large *partidos*, whereas Córdoba (408 sites) and Santa Fe (329) enumerate hundreds of small *comunas* down to fewer than 50 inhabitants [@Molinatti2020Segregacion; @Pellegrini2014Patron]. Second, centroid snapping onto gridded provincial masks places Rosario and Gran Rosario slightly across the Paraná border polygon in Entre Ríos and three inner southern *Conurbano* municipalities inside CABA; Table \ref{tab:caba-conurbano} makes those overlaps explicit. Third, longitudinal 1869-2022 series exist primarily for major provincial capitals and port cities, whereas most smaller local-government units carry only 2022 INDEC totals [@Roldan2013Inventarios; @Collection1929Estadistica].

# Conclusion

Across 2.057 catalogued settlements and 24 provinces, the gazetteer captures the full scale of modern Argentine urbanisation from Gran Buenos Aires (16,22M) and its massive *Conurbano* *partidos* down to rural Pampean hamlets [@Rotger2025Urbanizacion; @Rodriguez2025Area]. Tight agreement with Zipf rank-size scaling ($\alpha = 1,08$, $R^2 = 0,97$) and zero reliance on crowd-sourced data make the register a dependable spatial foundation for both historical demography and regional urban analysis [@Gonzalez2015Proyecciones].

# Appendix

## Excluded Candidate Audit and Provenance Breakdown

Table \ref{tab:excluded-ledger} classifies the 438 excluded candidate rows in the chapter source ledger, while Table \ref{tab:sett-prov} summarises the provenance distribution across all 2.057 included sites [@Collection1929Estadistica; @Rodriguez2025Area].

<figure class="crd-table-figure" id="tab:excluded-ledger">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Exclusion Reason</th><th class="crd-th">Candidates</th><th class="crd-th">Share of Excluded</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Superseded by higher-priority official tier</strong></td><td class="crd-td">206</td><td class="crd-td">47,03%</td></tr>
<tr><td class="crd-td"><strong>Unlocated historical or rural toponym</strong></td><td class="crd-td">192</td><td class="crd-td">43,84%</td></tr>
<tr><td class="crd-td"><strong>Duplicate municipal alias</strong></td><td class="crd-td">40</td><td class="crd-td">9,13%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Audit classification of 438 excluded settlement candidates in the chapter source ledger.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:sett-prov">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Provenance Corpus</th><th class="crd-th">Sites</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>INDEC Argentina Censo 2022 (Total del país por gobierno local)</strong></td><td class="crd-td">2.035</td><td class="crd-td">98,93%</td></tr>
<tr><td class="crd-td"><strong>INDEC Argentina Censuses 1991-2022 (via citypopulation.de)</strong></td><td class="crd-td">11</td><td class="crd-td">0,53%</td></tr>
<tr><td class="crd-td"><strong>INDEC Argentina Censo 2022 Agglomeration (via citypopulation.de)</strong></td><td class="crd-td">10</td><td class="crd-td">0,49%</td></tr>
<tr><td class="crd-td"><strong>INDEC Argentina Censo 2022 (15 CABA Comunas consolidated)</strong></td><td class="crd-td">1</td><td class="crd-td">0,05%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Statistical provenance distribution across 2.057 catalogued Argentine settlements.</figcaption>
</figure>

# Sources

::: {#refs}
:::
