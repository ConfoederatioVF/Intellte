---
title: "Pre-Columbian Central Andes"
subtitle: "Settlement Gazetteer and Urban Hierarchy (10000BC to 1438AD)"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/pre_columbian_central_andes_urban_hierarchy.png"
hero_caption: "Largest catalogued pre-Columbian settlements and continuous rank-size distribution across 109 Central Andean sites from 10000BC to 1438AD."
hero_label: "fig:hero-central-andes-hierarchy"
bibliography: pre_columbian_central_andes_literature_review.bib
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



![Largest catalogued pre-Columbian settlements and continuous rank-size distribution across 109 Central Andean sites from 10000BC to 1438AD.](figures/pre_columbian_central_andes_urban_hierarchy.png)



# Abstract

This gazetteer documents 109 pre-Columbian habitation centres across six biophysical sub-regions and three modern national territories (Peru, Ecuador and Bolivia) between 10000BC and 1438AD. Primary archaeological settlement-pattern surveys in Wave 1 contribute 68 sites (62,39%), supplemented by 27 sites from national heritage inventories in Wave 2 (24,77%), 13 radiocarbon-dated Archaic and Formative baselines in Wave 3 (11,93%) and 1 final sub-regional gap-sweep addition in Wave 4 (0,92%), yielding an asymptotic marginal gain of 0,93% and 0% reliance on crowd-sourced fallback sources. All 109 evaluated candidate entries in the chapter source ledger carry geocoded coordinates, sub-regional mask assignments and multi-benchmark population trajectories, with 0 exclusions after deduplication. Spanning early Archaic caves (140 to 240 inhabitants) and Preceramic coastal centres such as Caral (3.120) through Middle Horizon capitals Wari (38.400) and Tiwanaku (34.200) to the Chimú metropolis Chan Chan (42.500), peak site populations conform closely to a power-law rank-size distribution ($\alpha = 0,56$, $R^2 = 0,98$) [@solis2001dating; @isbell2016wari; @topic2003chan].

# Background

Archaeological settlement records across the Central Andes span more than eleven millennia of residential transformation, from Late Pleistocene rock shelters in the high sierra to planned mud-brick and cut-stone cities housing tens of thousands of specialists. Early Archaic cave occupations at Guitarrero, Pikimachay and Telarmachay, together with mid-Holocene coastal mounds at Huaca Prieta and Las Vegas-to-Valdivia villages such as Real Alto (1.480) and Loma Alta (890), chart the initial anchor points of permanent habitation [@gorbahn2013middle]. During the third and second millennia BC, monumental temple towns emerged across Norte Chico (Caral, Áspero, Bandurria, La Galgada) and the coastal Casma and Rimac valleys (Sechín Alto, Pampa de las Llamas-Moxeke, El Paraíso) [@solis2001dating; @haas2004dating].

From the Early Horizon onward, multi-valley states and highland confederations produced steep regional urban hierarchies. Ceremonial centres at Chavín de Huántar, Kuntur Wasi, Paracas Arena Blanca and Cahuachi [@turner1999geological; @silverman2009cahuachi] gave way to densely populated Moche, Lima and Recuay cities (Huacas de Moche, Pampa Grande, Cajamarquilla, Maranga, Honcopampa) [@moralesgamarra2020arquitectura], Middle Horizon imperial capitals and provincial hubs (Wari, Pikillacta, Cerro Baúl, Tiwanaku, Lukurmata) [@schreiber1992wari; @stanish2003evolution] and Late Intermediate regional polities from Chan Chan, Túcume and La Centinela Chincha to Kuelap, Tunanmarca, Chucuito, Quito Pre-Inca and Jocay [@topic2003chan; @nystrom2010chachapoya].

# Methodology

The settlement register was compiled across four documented ingestion waves tracked in the chapter source ledger. Wave 1 extracted 68 primary settlements from published regional pedestrian and valley surveys; Wave 2 reconciled 27 sites from official heritage archives including Peru's SIGDA Ministerio de Cultura database (38.420 in-bounds rows processed) and Ecuador's CADB and Upano LiDAR corpora (3.828 rows processed); Wave 3 backfilled 13 early Archaic and Formative radiocarbon anchors from Andean radiocarbon datasets (2.960 rows processed) and Altiplano monographs (1.854 rows processed); and Wave 4 closed remaining sub-regional gaps with 1 final site (marginal gain 0,93%).

Every settlement entry is referenced to WGS84 coordinates, assigned to one of six biophysical sub-regions, tagged by residential scope and populated strictly from published residential-area and household-density estimates rather than uniform tier stamps [@isbell2016wari; @vaughn2014about]. Chronological spans are bounded within the 10000BC to 1438AD pre-Inca domain so later imperial Inca foundations remain isolated to Chapter 3.

# Testing and Validation

Ledger reconciliation confirms exact accounting across all 109 catalogued sites (78 in Peru, 18 in Ecuador and 13 in Bolivia) with zero excluded duplicates or unattributed records and zero crowd-sourced entries. Figure \ref{fig:sett-regional-map} displays the spatial distribution of all 109 sites across the six sub-regions, highlighting the dense clustering along the Peruvian desert coast, inter-Andean Ecuador, the Ayacucho-Cusco sierra and the Titicaca Basin alongside sparser recovery in the Eastern Montaña.

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_quipu/1.0-pre-columbian-central-andes-settlements/pre_columbian_central_andes_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 109 catalogued pre-Columbian settlements across six Central Andean sub-regions from 10000BC to 1438AD.</figcaption>
</figure>

# Results

## Leading Pre-Columbian Urban Centres

Table \ref{tab:top25-sites} lists the 25 largest recorded Central Andean settlements ranked by peak estimated population. Led by Chan Chan (42.500 in 1400AD), Wari (38.400 in 850AD) and Tiwanaku (34.200 in 800AD), the upper rank brings together Killke-phase Cusco (Qosqo Killke, 21.800), Central and South Coast capitals (Pachacamac 19.400, La Centinela Chincha 18.900, Cajamarquilla 14.800, Maranga 13.200, Armatambo 12.450, Chancay Pisquillo 7.860), North Coast Moche and Sicán cities (Huacas de Moche 18.600, Túcume 14.200, Pampa Grande 11.800, Batán Grande 11.400), sierra and Altiplano centres (Chucuito 12.650, Tunanmarca 11.250, Hatuncolla 10.850, Lukurmata 9.840, Pikillacta 9.400, Hatunmarca 8.740, Cajamarca Layzón 8.240), Ecuadorian capitals (Quito Pre-Inca 14.800, Kilamope Upano 11.600, Jocay 10.450, Guapondelig 9.640, Sangay Upano 9.450, Caranqui 9.120, Hatun Cañar 8.920, Cochasquí 8.460) and Cochabamba Pre-Inca (10.650).

<figure class="crd-table-figure" id="tab:top25-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Site Name</th><th class="crd-th">Country</th><th class="crd-th">Sub-Region</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Chan Chan</strong></td><td class="crd-td">Peru</td><td class="crd-td">North and Central Pacific Coast (Caral, Moche and Chimú)</td><td class="crd-td">-8,11, -79,08</td><td class="crd-td">900AD to 1400AD</td><td class="crd-td">42,5k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Wari</strong></td><td class="crd-td">Peru</td><td class="crd-td">Central Sierra (Chavín, Wari, Chanka and Early Cusco)</td><td class="crd-td">-13,06, -74,2</td><td class="crd-td">500AD to 1000AD</td><td class="crd-td">38,4k (850AD)</td></tr>
<tr><td class="crd-td"><strong>Tiwanaku</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">Titicaca-Poopó Altiplano (Tiwanaku and Aymara Señoríos)</td><td class="crd-td">-16,56, -68,67</td><td class="crd-td">200AD to 1150AD</td><td class="crd-td">34,2k (800AD)</td></tr>
<tr><td class="crd-td"><strong>Qosqo Killke</strong></td><td class="crd-td">Peru</td><td class="crd-td">Central Sierra (Chavín, Wari, Chanka and Early Cusco)</td><td class="crd-td">-13,52, -71,98</td><td class="crd-td">1000AD to 1430AD</td><td class="crd-td">21,8k (1430AD)</td></tr>
<tr><td class="crd-td"><strong>Pachacamac</strong></td><td class="crd-td">Peru</td><td class="crd-td">North and Central Pacific Coast (Caral, Moche and Chimú)</td><td class="crd-td">-12,26, -76,9</td><td class="crd-td">200AD to 1400AD</td><td class="crd-td">19,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>La Centinela Chincha</strong></td><td class="crd-td">Peru</td><td class="crd-td">North and Central Pacific Coast (Caral, Moche and Chimú)</td><td class="crd-td">-13,45, -76,17</td><td class="crd-td">1000AD to 1400AD</td><td class="crd-td">18,9k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Huacas de Moche</strong></td><td class="crd-td">Peru</td><td class="crd-td">North and Central Pacific Coast (Caral, Moche and Chimú)</td><td class="crd-td">-8,13, -78,99</td><td class="crd-td">200AD to 750AD</td><td class="crd-td">18,6k (600AD)</td></tr>
<tr><td class="crd-td"><strong>Cajamarquilla</strong></td><td class="crd-td">Peru</td><td class="crd-td">North and Central Pacific Coast (Caral, Moche and Chimú)</td><td class="crd-td">-11,98, -76,91</td><td class="crd-td">400AD to 1400AD</td><td class="crd-td">14,8k (800AD)</td></tr>
<tr><td class="crd-td"><strong>Quito Pre-Inca</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Equatorial Sierra and Guayas (Cañari, Puruhá and Caranqui)</td><td class="crd-td">-0,22, -78,51</td><td class="crd-td">400AD to 1430AD</td><td class="crd-td">14,8k (1430AD)</td></tr>
<tr><td class="crd-td"><strong>Túcume</strong></td><td class="crd-td">Peru</td><td class="crd-td">North and Central Pacific Coast (Caral, Moche and Chimú)</td><td class="crd-td">-6,52, -79,84</td><td class="crd-td">1000AD to 1400AD</td><td class="crd-td">14,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Maranga</strong></td><td class="crd-td">Peru</td><td class="crd-td">North and Central Pacific Coast (Caral, Moche and Chimú)</td><td class="crd-td">-12,07, -77,09</td><td class="crd-td">200AD to 1400AD</td><td class="crd-td">13,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Chucuito</strong></td><td class="crd-td">Peru</td><td class="crd-td">Titicaca-Poopó Altiplano (Tiwanaku and Aymara Señoríos)</td><td class="crd-td">-15,89, -69,89</td><td class="crd-td">1100AD to 1430AD</td><td class="crd-td">12,6k (1430AD)</td></tr>
<tr><td class="crd-td"><strong>Armatambo</strong></td><td class="crd-td">Peru</td><td class="crd-td">North and Central Pacific Coast (Caral, Moche and Chimú)</td><td class="crd-td">-12,18, -77,02</td><td class="crd-td">1000AD to 1400AD</td><td class="crd-td">12,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Pampa Grande</strong></td><td class="crd-td">Peru</td><td class="crd-td">North and Central Pacific Coast (Caral, Moche and Chimú)</td><td class="crd-td">-6,76, -79,48</td><td class="crd-td">600AD to 800AD</td><td class="crd-td">11,8k (700AD)</td></tr>
<tr><td class="crd-td"><strong>Kilamope Upano</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Equatorial Sierra and Guayas (Cañari, Puruhá and Caranqui)</td><td class="crd-td">-2,29, -78,11</td><td class="crd-td">500BC to 600AD</td><td class="crd-td">11,6k (300AD)</td></tr>
<tr><td class="crd-td"><strong>Batán Grande</strong></td><td class="crd-td">Peru</td><td class="crd-td">North and Central Pacific Coast (Caral, Moche and Chimú)</td><td class="crd-td">-6,47, -79,78</td><td class="crd-td">800AD to 1100AD</td><td class="crd-td">11,4k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Tunanmarca</strong></td><td class="crd-td">Peru</td><td class="crd-td">Central Sierra (Chavín, Wari, Chanka and Early Cusco)</td><td class="crd-td">-11,72, -75,56</td><td class="crd-td">1200AD to 1430AD</td><td class="crd-td">11,2k (1430AD)</td></tr>
<tr><td class="crd-td"><strong>Hatuncolla</strong></td><td class="crd-td">Peru</td><td class="crd-td">Titicaca-Poopó Altiplano (Tiwanaku and Aymara Señoríos)</td><td class="crd-td">-15,69, -70,15</td><td class="crd-td">1100AD to 1430AD</td><td class="crd-td">10,8k (1430AD)</td></tr>
<tr><td class="crd-td"><strong>Cochabamba Pre-Inca</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">Eastern Montaña, Chachapoya and Yungas Slopes</td><td class="crd-td">-17,39, -66,16</td><td class="crd-td">200AD to 1430AD</td><td class="crd-td">10,6k (1430AD)</td></tr>
<tr><td class="crd-td"><strong>Jocay</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Equatorial Sierra and Guayas (Cañari, Puruhá and Caranqui)</td><td class="crd-td">-0,95, -80,72</td><td class="crd-td">800AD to 1400AD</td><td class="crd-td">10,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Lukurmata</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">Titicaca-Poopó Altiplano (Tiwanaku and Aymara Señoríos)</td><td class="crd-td">-16,45, -68,66</td><td class="crd-td">200AD to 1150AD</td><td class="crd-td">9,8k (900AD)</td></tr>
<tr><td class="crd-td"><strong>Guapondelig</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Equatorial Sierra and Guayas (Cañari, Puruhá and Caranqui)</td><td class="crd-td">-2,9, -79</td><td class="crd-td">600AD to 1430AD</td><td class="crd-td">9,6k (1430AD)</td></tr>
<tr><td class="crd-td"><strong>Sangay Upano</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Equatorial Sierra and Guayas (Cañari, Puruhá and Caranqui)</td><td class="crd-td">-2,24, -78,15</td><td class="crd-td">400BC to 700AD</td><td class="crd-td">9,4k (400AD)</td></tr>
<tr><td class="crd-td"><strong>Pikillacta</strong></td><td class="crd-td">Peru</td><td class="crd-td">Central Sierra (Chavín, Wari, Chanka and Early Cusco)</td><td class="crd-td">-13,62, -71,72</td><td class="crd-td">600AD to 950AD</td><td class="crd-td">9,4k (800AD)</td></tr>
<tr><td class="crd-td"><strong>Caranqui</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Equatorial Sierra and Guayas (Cañari, Puruhá and Caranqui)</td><td class="crd-td">0,33, -78,12</td><td class="crd-td">900AD to 1430AD</td><td class="crd-td">9,1k (1430AD)</td></tr>
<tr><td class="crd-td"><strong>Hatun Cañar</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Equatorial Sierra and Guayas (Cañari, Puruhá and Caranqui)</td><td class="crd-td">-2,55, -78,88</td><td class="crd-td">600AD to 1430AD</td><td class="crd-td">8,9k (1430AD)</td></tr>
<tr><td class="crd-td"><strong>Hatunmarca</strong></td><td class="crd-td">Peru</td><td class="crd-td">Central Sierra (Chavín, Wari, Chanka and Early Cusco)</td><td class="crd-td">-11,8, -75,51</td><td class="crd-td">1200AD to 1430AD</td><td class="crd-td">8,7k (1430AD)</td></tr>
<tr><td class="crd-td"><strong>Cochasquí</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Equatorial Sierra and Guayas (Cañari, Puruhá and Caranqui)</td><td class="crd-td">0,06, -78,31</td><td class="crd-td">900AD to 1430AD</td><td class="crd-td">8,5k (1430AD)</td></tr>
<tr><td class="crd-td"><strong>Cajamarca Layzón</strong></td><td class="crd-td">Peru</td><td class="crd-td">North and Central Pacific Coast (Caral, Moche and Chimú)</td><td class="crd-td">-7,19, -78,54</td><td class="crd-td">200BC to 1350AD</td><td class="crd-td">8,2k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Chancay Pisquillo</strong></td><td class="crd-td">Peru</td><td class="crd-td">North and Central Pacific Coast (Caral, Moche and Chimú)</td><td class="crd-td">-11,5, -77,16</td><td class="crd-td">1000AD to 1400AD</td><td class="crd-td">7,9k (1400AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 25 pre-Columbian settlements across the Central Andes ranked by peak population, 10000BC to 1438AD.</figcaption>
</figure>

## Sub-Regional Gazetteer Distribution

Table \ref{tab:subregion-gazetteer} pairs sub-regional land area, catalogued site counts, areal site density per 10.000 km², leading urban centre and 1438AD population across all six Central Andean sub-regions. The North and Central Pacific Coast holds 44 of 109 sites (40,4%) and the highest survey density at 2,26 sites per 10.000 km², whereas the forested Eastern Montaña records 0,05 sites per 10.000 km².

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Sites/10k km²</th><th class="crd-th">Leading Site (Peak)</th><th class="crd-th">1438AD Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>North and Central Pacific Coast (Caral, Moche and Chimú)</strong></td><td class="crd-td">194.636</td><td class="crd-td">44</td><td class="crd-td">2,26</td><td class="crd-td">Chan Chan (42,5k)</td><td class="crd-td">1,65M</td></tr>
<tr><td class="crd-td"><strong>South Coast and Atacama Valleys (Paracas, Nazca and Chincha)</strong></td><td class="crd-td">85.214</td><td class="crd-td">6</td><td class="crd-td">0,7</td><td class="crd-td">Cahuachi (6,1k)</td><td class="crd-td">620k</td></tr>
<tr><td class="crd-td"><strong>Central Sierra (Chavín, Wari, Chanka and Early Cusco)</strong></td><td class="crd-td">253.971</td><td class="crd-td">18</td><td class="crd-td">0,71</td><td class="crd-td">Wari (38,4k)</td><td class="crd-td">2,15M</td></tr>
<tr><td class="crd-td"><strong>Titicaca-Poopó Altiplano (Tiwanaku and Aymara Señoríos)</strong></td><td class="crd-td">529.905</td><td class="crd-td">19</td><td class="crd-td">0,36</td><td class="crd-td">Tiwanaku (34,2k)</td><td class="crd-td">1,45M</td></tr>
<tr><td class="crd-td"><strong>Equatorial Sierra and Guayas (Cañari, Puruhá and Caranqui)</strong></td><td class="crd-td">181.000</td><td class="crd-td">17</td><td class="crd-td">0,94</td><td class="crd-td">Quito Pre-Inca (14,8k)</td><td class="crd-td">780k</td></tr>
<tr><td class="crd-td"><strong>Eastern Montaña, Chachapoya and Yungas Slopes</strong></td><td class="crd-td">985.837</td><td class="crd-td">5</td><td class="crd-td">0,05</td><td class="crd-td">Cochabamba Pre-Inca (10,6k)</td><td class="crd-td">550k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued site counts, areal density (per 10.000 km²), leading urban site and 1438AD regional population across six Central Andean sub-regions.</figcaption>
</figure>

## Source Ledger and Saturation Audit

Table \ref{tab:wave-ledger} summarises the four-wave ingestion audit from the chapter source ledger, while Table \ref{tab:provenance-ledger} lists the principal scholarly provenance monographs and primary survey authorities grounding the 109 catalogued entries.

<figure class="crd-table-figure" id="tab:wave-ledger">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Wave</th><th class="crd-th">Source Class</th><th class="crd-th">Newly Added</th><th class="crd-th">Cumulative Sites</th><th class="crd-th">Marginal Gain</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1</strong></td><td class="crd-td">Primary archaeological settlement-pattern surveys</td><td class="crd-td">68</td><td class="crd-td">68</td><td class="crd-td">100%</td></tr>
<tr><td class="crd-td"><strong>Wave 2</strong></td><td class="crd-td">National heritage registers (SIGDA and INPC/CADB)</td><td class="crd-td">27</td><td class="crd-td">95</td><td class="crd-td">39,71%</td></tr>
<tr><td class="crd-td"><strong>Wave 3</strong></td><td class="crd-td">Radiocarbon longitudinal backfill (CADB and p3k14c)</td><td class="crd-td">13</td><td class="crd-td">108</td><td class="crd-td">13,68%</td></tr>
<tr><td class="crd-td"><strong>Wave 4</strong></td><td class="crd-td">Sub-regional gap-hunter sweep</td><td class="crd-td">1</td><td class="crd-td">109</td><td class="crd-td">0,93%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Sequential four-wave ingestion ledger and asymptotic marginal gain across 109 Central Andean settlements.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:provenance-ledger">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Provenance Authority</th><th class="crd-th">Entries</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Marcos (2003) Real Alto</strong></td><td class="crd-td">17</td><td class="crd-td">15,6%</td></tr>
<tr><td class="crd-td"><strong>Burger (1992) Chavín and the Origins of Andean Civilization</strong></td><td class="crd-td">12</td><td class="crd-td">11%</td></tr>
<tr><td class="crd-td"><strong>Topic and Moseley (1983) Chan Chan</strong></td><td class="crd-td">9</td><td class="crd-td">8,3%</td></tr>
<tr><td class="crd-td"><strong>Isbell (1997) / Schreiber (1992) Wari Empire</strong></td><td class="crd-td">7</td><td class="crd-td">6,4%</td></tr>
<tr><td class="crd-td"><strong>Silverman (1993) Cahuachi</strong></td><td class="crd-td">7</td><td class="crd-td">6,4%</td></tr>
<tr><td class="crd-td"><strong>Uceda (2001) / Bawden (1996) Moche Urbanism</strong></td><td class="crd-td">7</td><td class="crd-td">6,4%</td></tr>
<tr><td class="crd-td"><strong>Kolata (1993) / Janusek (2004) Tiwanaku</strong></td><td class="crd-td">6</td><td class="crd-td">5,5%</td></tr>
<tr><td class="crd-td"><strong>Makowski (2008) / Marcone (2010) Central Coast Peru</strong></td><td class="crd-td">5</td><td class="crd-td">4,6%</td></tr>
<tr><td class="crd-td"><strong>Shady Solís et al. (2001) Caral-Supe</strong></td><td class="crd-td">4</td><td class="crd-td">3,7%</td></tr>
<tr><td class="crd-td"><strong>Church and von Hagen (2008) Chachapoyas</strong></td><td class="crd-td">4</td><td class="crd-td">3,7%</td></tr>
<tr><td class="crd-td"><strong>Terada and Onuki (1985) Cajamarca Valley</strong></td><td class="crd-td">1</td><td class="crd-td">0,9%</td></tr>
<tr><td class="crd-td"><strong>Williams (2001) Cerro Baúl Moquegua</strong></td><td class="crd-td">1</td><td class="crd-td">0,9%</td></tr>
<tr><td class="crd-td"><strong>Ghezzi and Ruggles (2007) Chankillo</strong></td><td class="crd-td">1</td><td class="crd-td">0,9%</td></tr>
<tr><td class="crd-td"><strong>Goldstein (2005) Moquegua Valley</strong></td><td class="crd-td">1</td><td class="crd-td">0,9%</td></tr>
<tr><td class="crd-td"><strong>Other regional monographs (27 works)</strong></td><td class="crd-td">27</td><td class="crd-td">24,8%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Primary monograph and regional survey provenance across 109 Central Andean settlements.</figcaption>
</figure>

# Limitations

Three evidentiary limitations apply to this settlement gazetteer. First, tropical forest canopy and deep alluvial burial obscure settlement traces across the Guayas floodplain, Amazonian Upano piedmont and Eastern Montaña relative to hyper-arid Peruvian coastal deserts [@huckleberry2003geoarchaeological; @nystrom2010chachapoya]. Second, multi-phase ceremonial shrines such as Chavín de Huántar and Cahuachi hosted seasonal pilgrimage crowds far larger than their permanent resident populations, requiring conservative residential scaling [@silverman2009cahuachi; @turner1999geological]. Third, radiocarbon dates on Pacific coastal sites require marine reservoir calibration alongside ceramic seriation and luminescence controls [@vaughn2014about].

# Sources

::: {#refs}
:::
