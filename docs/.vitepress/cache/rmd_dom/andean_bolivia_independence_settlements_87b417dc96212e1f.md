---
title: "Andean Bolivia after Independence"
subtitle: "Settlement Gazetteer and Urban Hierarchy, 1825-2026"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/andean_bolivia_independence_urban_hierarchy.png"
hero_caption: "Twelve largest settlements and log-log rank-size distribution across 247 Andean Bolivian centres, 1825 to 2026."
hero_label: "fig:hero-bolivia-hierarchy"
bibliography: andean_bolivia_independence_literature_review.bib
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



![Twelve largest settlements and log-log rank-size distribution across 247 Andean Bolivian centres, 1825 to 2026.](figures/andean_bolivia_independence_urban_hierarchy.png)



# Abstract

This gazetteer documents 247 settlements across the six Andean departments of Bolivia - La Paz, Cochabamba, Potosí, Chuquisaca, Oruro and Tarija - from independence in 1825 to 2026. Coordinated with PRETA's lowland Bolivian register for Santa Cruz, El Beni and Pando, the chapter ledger evaluates 299 candidate rows across four sequential waves, retaining 247 census-anchored settlements (zero crowd-sourced entries, marginal saturation gain 0,82%) and excluding 52 flat-tier synthetic placeholders lacking municipal census grounding. Peak populations follow a rank-size power law ($\alpha = 1,0$, $R^2 = 0,96$) spanning from small Cochabamba valley hamlets near 300 inhabitants up to four regional capitals between 218k and 300k (Potosí, Tarija, Sucre and Oruro), the Cochabamba urban core (974,5k in 2026) and the reconciled La Paz - El Alto metropolitan system (2,43M in 2024) [@Nunezvillalba2015Crecimiento; @Garcia2022Efecto; @Boliviaoficinanacionaldeimmigracion1902Censo].

# Background

Urban settlement across Andean Bolivia reflects four successive economic and institutional eras: colonial administrative cities and silver hubs (Sucre, Potosí, La Paz and Oruro), early twentieth-century tin-mining camps along the Oruro - Potosí rail spine (Llallagua, Huanuni, Uncía, Uyuni and Tupiza), post-1952 agricultural frontier towns in the *yungas* and Chapare (Caranavi, Villa Tunari, Chimoré and Puerto Villarroel), and post-1985 metropolitan suburbs ringing La Paz and Cochabamba [@Galazmandakovic2016Industrializac; @Selaez2020Iglesias; @Gaviriapuerta2024Problematicas]. Separation of municipal cores from outer suburban satellites prevents double-counting across the high *altiplano* rim above La Paz and the irrigated valleys of Cochabamba [@Nunezvillalba2015Crecimiento; @Quispe2018Fragmentacion].

# Methodology

The settlement register was compiled in four audited ingestion waves logged in the chapter source ledger, drawing across 298 in-bounds departmental and municipal census rows from the 1900 general census and INE enumerations from 1950 through 2024 [@Boliviaoficinanacionaldeimmigracion1902Censo; @Benito2026Pueblos]. Wave 1 ingested 197 primary municipal census series (66,11% of evaluated rows), Wave 2 added 34 georeferenced and metropolitan reconciliation entries (17,26% marginal gain), Wave 3 backfilled 14 longitudinal nineteenth-century and early twentieth-century series (6,06% marginal gain), and Wave 4 closed two remaining sub-regional gaps (0,82% marginal gain). Fifty-two records exhibiting constant unverified plateau tiers (4.500 or 885) without municipal census backing were excluded.

# Testing and Validation

Ledger reconciliation accounts for every candidate row (247 included and 52 excluded), with complete spatial coverage across all six departments: 85 entries in La Paz, 51 in Cochabamba, 38 in Potosí, 33 in Chuquisaca, 30 in Oruro and 10 in Tarija. Figure \ref{fig:sett-regional-map} maps all 247 retained settlements inside the 459.929,7 km² departmental mask [@Boliviaoficinanacionaldeimmigracion1902Censo; @Miranda2021Censo].

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_quipu/1.0-andean-bolivia-independence-settlements/andean_bolivia_independence_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 247 catalogued settlements across the six Andean departments of Bolivia, 1825 to 2026.</figcaption>
</figure>

# Results

## Leading Andean Settlements

Table \ref{tab:top25-sites} lists the 25 largest settlements in the chapter register ordered by peak population. Beneath the La Paz - El Alto metropolitan entry (2,43M at 2024) and its central core (2,26M at 2026), Cochabamba (974,5k), Oruro (299,3k), Sucre (296,7k), Tarija (238,7k), Sacaba (219,1k), Potosí (218,7k), Quillacollo (199,7k), Yacuiba (116,1k) and Viacha (113,6k) lead the urban hierarchy [@Garcia2022Efecto; @Quispe2018Fragmentacion; @Ferrari2014Ferrocarril].

<figure class="crd-table-figure" id="tab:top25-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Department</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>La Paz - El Alto (Metro)</strong></td><td class="crd-td">La Paz</td><td class="crd-td">-16,5, -68,15</td><td class="crd-td">1825 to 2026</td><td class="crd-td">2,43M (2024)</td></tr>
<tr><td class="crd-td"><strong>La Paz</strong></td><td class="crd-td">La Paz</td><td class="crd-td">-16,5, -68,15</td><td class="crd-td">1825 to 2026</td><td class="crd-td">2,26M (2026)</td></tr>
<tr><td class="crd-td"><strong>Cochabamba</strong></td><td class="crd-td">Cochabamba</td><td class="crd-td">-17,38, -66,16</td><td class="crd-td">1825 to 2026</td><td class="crd-td">974,5k (2026)</td></tr>
<tr><td class="crd-td"><strong>Oruro</strong></td><td class="crd-td">Oruro</td><td class="crd-td">-17,97, -67,09</td><td class="crd-td">1825 to 2026</td><td class="crd-td">299,3k (2026)</td></tr>
<tr><td class="crd-td"><strong>Sucre</strong></td><td class="crd-td">Chuquisaca</td><td class="crd-td">-19,03, -65,26</td><td class="crd-td">1825 to 2026</td><td class="crd-td">296,7k (2024)</td></tr>
<tr><td class="crd-td"><strong>Tarija</strong></td><td class="crd-td">Tarija</td><td class="crd-td">-21,54, -64,73</td><td class="crd-td">1825 to 2026</td><td class="crd-td">238,7k (2024)</td></tr>
<tr><td class="crd-td"><strong>Sacaba</strong></td><td class="crd-td">Cochabamba</td><td class="crd-td">-17,4, -66,04</td><td class="crd-td">1825 to 2026</td><td class="crd-td">219,1k (2024)</td></tr>
<tr><td class="crd-td"><strong>Potosí</strong></td><td class="crd-td">Potosí</td><td class="crd-td">-19,58, -65,75</td><td class="crd-td">1825 to 2026</td><td class="crd-td">218,7k (2024)</td></tr>
<tr><td class="crd-td"><strong>Quillacollo</strong></td><td class="crd-td">Cochabamba</td><td class="crd-td">-17,39, -66,28</td><td class="crd-td">1825 to 2026</td><td class="crd-td">199,7k (2026)</td></tr>
<tr><td class="crd-td"><strong>Yacuiba</strong></td><td class="crd-td">Tarija</td><td class="crd-td">-22,02, -63,68</td><td class="crd-td">1846 to 2026</td><td class="crd-td">116,1k (2026)</td></tr>
<tr><td class="crd-td"><strong>Viacha</strong></td><td class="crd-td">La Paz</td><td class="crd-td">-16,65, -68,3</td><td class="crd-td">1825 to 2026</td><td class="crd-td">113,6k (2024)</td></tr>
<tr><td class="crd-td"><strong>Villa Tunari</strong></td><td class="crd-td">Cochabamba</td><td class="crd-td">-16,64, -65,57</td><td class="crd-td">1825 to 2026</td><td class="crd-td">93,7k (2024)</td></tr>
<tr><td class="crd-td"><strong>Tiquipaya</strong></td><td class="crd-td">Cochabamba</td><td class="crd-td">-17,34, -66,22</td><td class="crd-td">1825 to 2026</td><td class="crd-td">72,6k (2026)</td></tr>
<tr><td class="crd-td"><strong>Vinto</strong></td><td class="crd-td">Cochabamba</td><td class="crd-td">-17,39, -66,32</td><td class="crd-td">1825 to 2026</td><td class="crd-td">68k (2026)</td></tr>
<tr><td class="crd-td"><strong>Colcapirhua</strong></td><td class="crd-td">Cochabamba</td><td class="crd-td">-17,39, -66,24</td><td class="crd-td">1825 to 2026</td><td class="crd-td">66,5k (2024)</td></tr>
<tr><td class="crd-td"><strong>Puerto Villarroel</strong></td><td class="crd-td">Cochabamba</td><td class="crd-td">-16,84, -64,8</td><td class="crd-td">1825 to 2026</td><td class="crd-td">64,6k (2024)</td></tr>
<tr><td class="crd-td"><strong>Achacachi</strong></td><td class="crd-td">La Paz</td><td class="crd-td">-16,05, -68,68</td><td class="crd-td">1825 to 2026</td><td class="crd-td">59,8k (2026)</td></tr>
<tr><td class="crd-td"><strong>Caranavi</strong></td><td class="crd-td">La Paz</td><td class="crd-td">-15,83, -67,57</td><td class="crd-td">1825 to 2026</td><td class="crd-td">59,7k (2024)</td></tr>
<tr><td class="crd-td"><strong>Sipe Sipe</strong></td><td class="crd-td">Cochabamba</td><td class="crd-td">-17,45, -66,36</td><td class="crd-td">1825 to 2026</td><td class="crd-td">55,9k (2024)</td></tr>
<tr><td class="crd-td"><strong>Pucarani</strong></td><td class="crd-td">La Paz</td><td class="crd-td">-16,4, -68,48</td><td class="crd-td">1825 to 2026</td><td class="crd-td">49,9k (2024)</td></tr>
<tr><td class="crd-td"><strong>Villazón</strong></td><td class="crd-td">Potosí</td><td class="crd-td">-22,09, -65,59</td><td class="crd-td">1825 to 2026</td><td class="crd-td">49,3k (2024)</td></tr>
<tr><td class="crd-td"><strong>Tupiza</strong></td><td class="crd-td">Potosí</td><td class="crd-td">-21,44, -65,72</td><td class="crd-td">1825 to 2026</td><td class="crd-td">46,6k (2026)</td></tr>
<tr><td class="crd-td"><strong>Bermejo</strong></td><td class="crd-td">Tarija</td><td class="crd-td">-22,73, -64,34</td><td class="crd-td">1825 to 2026</td><td class="crd-td">46,3k (2026)</td></tr>
<tr><td class="crd-td"><strong>Achocalla</strong></td><td class="crd-td">La Paz</td><td class="crd-td">-16,57, -68,15</td><td class="crd-td">1825 to 2026</td><td class="crd-td">46,2k (2024)</td></tr>
<tr><td class="crd-td"><strong>La Asunta</strong></td><td class="crd-td">La Paz</td><td class="crd-td">-16,03, -67,17</td><td class="crd-td">1825 to 2026</td><td class="crd-td">45,6k (2024)</td></tr>
<tr><td class="crd-td"><strong>Llallagua</strong></td><td class="crd-td">Potosí</td><td class="crd-td">-18,42, -66,58</td><td class="crd-td">1825 to 2026</td><td class="crd-td">44,9k (2026)</td></tr>
<tr><td class="crd-td"><strong>Villa Montes</strong></td><td class="crd-td">Tarija</td><td class="crd-td">-21,26, -63,47</td><td class="crd-td">1825 to 2026</td><td class="crd-td">44,8k (2026)</td></tr>
<tr><td class="crd-td"><strong>Betanzos</strong></td><td class="crd-td">Potosí</td><td class="crd-td">-19,55, -65,45</td><td class="crd-td">1825 to 2026</td><td class="crd-td">44,1k (2026)</td></tr>
<tr><td class="crd-td"><strong>Laja</strong></td><td class="crd-td">La Paz</td><td class="crd-td">-16,53, -68,38</td><td class="crd-td">1825 to 2026</td><td class="crd-td">38,7k (2024)</td></tr>
<tr><td class="crd-td"><strong>Aiquile</strong></td><td class="crd-td">Cochabamba</td><td class="crd-td">-18,2, -65,18</td><td class="crd-td">1825 to 2026</td><td class="crd-td">36,9k (2026)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Twenty-five largest catalogued settlements across Andean Bolivia ordered by peak population, 1825 to 2026.</figcaption>
</figure>

## La Paz, El Alto and Metropolitan Suburb Separation

In Andean Bolivia, metropolitan growth concentrates around La Paz - El Alto on the northern *altiplano* and Cochabamba in the central valley [@Nunezvillalba2015Crecimiento; @Gaviriapuerta2024Problematicas]. While El Alto separated municipally from La Paz in 1985 and achieved city status in 1988, the inherited PRETA core series maintains the combined La Paz - El Alto urban basin and plateau core as a single central unit (2,23M in 2024; 2,26M in 2026) and isolates four surrounding metropolitan municipalities (Viacha, Achocalla, Palca and Mecapaca) as distinct suburban entries. Table \ref{tab:metro-separation} reports both the La Paz - El Alto metropolitan reconciliation and the five suburban municipalities around Cochabamba, confirming exact arithmetic additivity at 2024 (2.228.182 plus 201.917 equals 2.430.099) and 2026 (2.259.463 plus 114.325 equals 2.373.788).

<figure class="crd-table-figure" id="tab:metro-separation">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Department</th><th class="crd-th">Accounting Scope</th><th class="crd-th">1950</th><th class="crd-th">1990/1992</th><th class="crd-th">2024</th><th class="crd-th">2026</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>La Paz - El Alto (Metro)</strong></td><td class="crd-td">La Paz</td><td class="crd-td">Metropolitan aggregate</td><td class="crd-td">734,6k</td><td class="crd-td">1,43M</td><td class="crd-td">2,43M</td><td class="crd-td">2,37M</td></tr>
<tr><td class="crd-td"><strong>La Paz</strong></td><td class="crd-td">La Paz</td><td class="crd-td">Municipal core</td><td class="crd-td">699,2k</td><td class="crd-td">1,36M</td><td class="crd-td">2,23M</td><td class="crd-td">2,26M</td></tr>
<tr><td class="crd-td"><strong>Viacha</strong></td><td class="crd-td">La Paz</td><td class="crd-td">Suburban municipality</td><td class="crd-td">18,8k</td><td class="crd-td">37,7k</td><td class="crd-td">113,6k</td><td class="crd-td">60,8k</td></tr>
<tr><td class="crd-td"><strong>Achocalla</strong></td><td class="crd-td">La Paz</td><td class="crd-td">Suburban municipality</td><td class="crd-td">6,1k</td><td class="crd-td">12,2k</td><td class="crd-td">46,2k</td><td class="crd-td">19,7k</td></tr>
<tr><td class="crd-td"><strong>Palca</strong></td><td class="crd-td">La Paz</td><td class="crd-td">Suburban municipality</td><td class="crd-td">5,7k</td><td class="crd-td">11,5k</td><td class="crd-td">21,7k</td><td class="crd-td">18,5k</td></tr>
<tr><td class="crd-td"><strong>Mecapaca</strong></td><td class="crd-td">La Paz</td><td class="crd-td">Suburban municipality</td><td class="crd-td">4,8k</td><td class="crd-td">9,5k</td><td class="crd-td">20,4k</td><td class="crd-td">15,4k</td></tr>
<tr><td class="crd-td"><strong>Cochabamba</strong></td><td class="crd-td">Cochabamba</td><td class="crd-td">Municipal core</td><td class="crd-td">234,1k</td><td class="crd-td">506,6k</td><td class="crd-td">665,5k</td><td class="crd-td">974,5k</td></tr>
<tr><td class="crd-td"><strong>Sacaba</strong></td><td class="crd-td">Cochabamba</td><td class="crd-td">Suburban municipality</td><td class="crd-td">39,5k</td><td class="crd-td">89,3k</td><td class="crd-td">219,1k</td><td class="crd-td">164,3k</td></tr>
<tr><td class="crd-td"><strong>Quillacollo</strong></td><td class="crd-td">Cochabamba</td><td class="crd-td">Suburban municipality</td><td class="crd-td">48k</td><td class="crd-td">103,8k</td><td class="crd-td">166,7k</td><td class="crd-td">199,7k</td></tr>
<tr><td class="crd-td"><strong>Tiquipaya</strong></td><td class="crd-td">Cochabamba</td><td class="crd-td">Suburban municipality</td><td class="crd-td">17,4k</td><td class="crd-td">37,7k</td><td class="crd-td">61,8k</td><td class="crd-td">72,6k</td></tr>
<tr><td class="crd-td"><strong>Vinto</strong></td><td class="crd-td">Cochabamba</td><td class="crd-td">Suburban municipality</td><td class="crd-td">16,3k</td><td class="crd-td">35,4k</td><td class="crd-td">56,1k</td><td class="crd-td">68k</td></tr>
<tr><td class="crd-td"><strong>Colcapirhua</strong></td><td class="crd-td">Cochabamba</td><td class="crd-td">Suburban municipality</td><td class="crd-td">14,1k</td><td class="crd-td">32k</td><td class="crd-td">66,5k</td><td class="crd-td">58,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Metropolitan reconciliation and suburban separation across La Paz - El Alto and the Cochabamba valley conurbation, 1950 to 2026.</figcaption>
</figure>

## Sub-Regional Gazetteer Distribution

Table \ref{tab:subregion-gazetteer} contrasts catalogued site density, leading settlement and 2026 departmental population across all six Andean departments. Cochabamba records the highest gazetteer coverage at 8,61 sites per 10.000 km², followed by La Paz (6,26) and Chuquisaca (5,89), while arid Tarija holds 2,31 sites per 10.000 km² [@Quispe2018Fragmentacion; @Perreault2025Adaptive].

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Department</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Sites per 10k km²</th><th class="crd-th">Leading Centre (Peak)</th><th class="crd-th">2026 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Chuquisaca</strong></td><td class="crd-td">56.070</td><td class="crd-td">33</td><td class="crd-td">5,89</td><td class="crd-td">Sucre (296,7k)</td><td class="crd-td">605k</td></tr>
<tr><td class="crd-td"><strong>Cochabamba</strong></td><td class="crd-td">59.205</td><td class="crd-td">51</td><td class="crd-td">8,61</td><td class="crd-td">Cochabamba (974,5k)</td><td class="crd-td">2,04M</td></tr>
<tr><td class="crd-td"><strong>La Paz</strong></td><td class="crd-td">135.693</td><td class="crd-td">85</td><td class="crd-td">6,26</td><td class="crd-td">La Paz (2,26M)</td><td class="crd-td">3,06M</td></tr>
<tr><td class="crd-td"><strong>Oruro</strong></td><td class="crd-td">54.584</td><td class="crd-td">30</td><td class="crd-td">5,5</td><td class="crd-td">Oruro (299,3k)</td><td class="crd-td">582k</td></tr>
<tr><td class="crd-td"><strong>Potosí</strong></td><td class="crd-td">111.124</td><td class="crd-td">38</td><td class="crd-td">3,42</td><td class="crd-td">Potosí (218,7k)</td><td class="crd-td">862k</td></tr>
<tr><td class="crd-td"><strong>Tarija</strong></td><td class="crd-td">43.253</td><td class="crd-td">10</td><td class="crd-td">2,31</td><td class="crd-td">Tarija (238,7k)</td><td class="crd-td">544k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catalogued site counts, spatial sampling density (per 10.000 km²), leading municipal settlement and 2026 population across six departments.</figcaption>
</figure>

## Source Ledger Saturation and Exhausted Corpora

Tables \ref{tab:saturation-waves} and \ref{tab:exhausted-corpora} summarise the four sequential ingestion waves and the exhausted archival census corpus recorded in the chapter source ledger [@Boliviaoficinanacionaldeimmigracion1902Censo; @Benito2026Pueblos].

<figure class="crd-table-figure" id="tab:saturation-waves">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Wave</th><th class="crd-th">Source Class</th><th class="crd-th">Prior Total</th><th class="crd-th">Added</th><th class="crd-th">Marginal Gain</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1</strong></td><td class="crd-td">National statistical office census extract</td><td class="crd-td">0</td><td class="crd-td">197</td><td class="crd-td">100%</td></tr>
<tr><td class="crd-td"><strong>Wave 2</strong></td><td class="crd-td">Georeference repair and metro reconciliation</td><td class="crd-td">197</td><td class="crd-td">34</td><td class="crd-td">17,26%</td></tr>
<tr><td class="crd-td"><strong>Wave 3</strong></td><td class="crd-td">19th-20th century official census backfill</td><td class="crd-td">231</td><td class="crd-td">14</td><td class="crd-td">6,06%</td></tr>
<tr><td class="crd-td"><strong>Wave 4</strong></td><td class="crd-td">Sub-regional gap audit sweep</td><td class="crd-td">245</td><td class="crd-td">2</td><td class="crd-td">0,82%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Four-wave gazetteer ingestion history and marginal saturation gain across 247 Andean Bolivian settlements.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:exhausted-corpora">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Corpus Name</th><th class="crd-th">Archive Tier</th><th class="crd-th">Rows in Bounds</th><th class="crd-th">Rows Processed</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>INE Bolivia Censuses (1900 to 2024, 6 Andean Depts)</strong></td><td class="crd-td">Primary national archive</td><td class="crd-td">298</td><td class="crd-td">298</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Audited regional census corpus processed in full during compilation of the Andean Bolivia settlement register.</figcaption>
</figure>

# Limitations

Three constraints govern interpretation of the settlement gazetteer. First, retaining La Paz and El Alto within one central urban series before separating four outer suburbs means El Alto's post-1988 municipal split is captured analytically and inside the metropolitan aggregate rather than as a standalone row [@Nunezvillalba2015Crecimiento; @Beijaard1995Rental]. Second, seasonal double residence between rural *ayllus* and metropolitan peripheries introduces census-day allocation noise across municipalities [@Miranda2021Censo]. Third, 2026 settlement figures preserve PRETA pre-2024 trend extrapolations, creating local offsets against the 2024 census returns in rapid-growth satellites such as Viacha and Sacaba [@Garcia2022Efecto; @Quispe2018Fragmentacion].

# Conclusion

Together, the 247 catalogued settlements trace the two-century urban evolution of Andean Bolivia across 459.929,7 km², from nineteenth-century administrative and silver-mining towns through the Oruro - Potosí tin belt to the dual metropolitan poles of La Paz - El Alto and Cochabamba [@Galazmandakovic2016Industrializac; @Nunezvillalba2015Crecimiento; @Garcia2022Efecto]. Strict separation of municipal cores from suburban satellites and exclusion of 52 ungrounded tier placeholders yield a clean urban hierarchy ($\alpha = 1,0$, $R^2 = 0,96$) ready for continental integration with PRETA's lowland Bolivia series.

# Appendix

## Provenance Breakdown

Table \ref{tab:sett-prov} summarises the scholarly provenance distribution across all 247 included gazetteer entries [@Nunezvillalba2015Crecimiento; @Garcia2022Efecto].

<figure class="crd-table-figure" id="tab:sett-prov">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Provenance Corpus</th><th class="crd-th">Sites</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>PRETA Municipal and INE Census Series</strong></td><td class="crd-td">246</td><td class="crd-td">99,6%</td></tr>
<tr><td class="crd-td"><strong>QUIPU Metropolitan Reconciliation</strong></td><td class="crd-td">1</td><td class="crd-td">0,4%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Provenance breakdown across 247 catalogued settlements in Andean Bolivia.</figcaption>
</figure>

# Sources

::: {#refs}
:::
