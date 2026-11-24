---
title: "Spanish Conquest and Demographic Collapse in the Andes"
subtitle: "Settlement Gazetteer: Colonial Capitals, Mining Camps and Reducciones, 1525-1650"
date: "23 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: spanish_conquest_andes_collapse_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/spanish_conquest_andes_collapse_regional_map.png"
hero_caption: "Spatial distribution of 132 catalogued cities, mining camps and reducciones across six colonial Andean jurisdictions from 1525 to 1650."
hero_label: "fig:hero-spanish-conquest-settlements"

header-includes:
  - \renewcommand{\topfraction}{0.88}
  - \renewcommand{\bottomfraction}{0.82}
  - \renewcommand{\textfraction}{0.08}
  - \renewcommand{\floatpagefraction}{0.75}
  - \setlength{\textfloatsep}{8pt plus 2pt minus 2pt}
  - \setlength{\intextsep}{8pt plus 2pt minus 2pt}
  - \setlength{\parskip}{2pt plus 1pt minus 1pt}
  - \linespread{0.95}
  - \raggedbottom

output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents 132 colonial Andean settlements, viceregal capitals, silver and mercury mining camps, ports and Toledan *reducción* centres active between 1525 and 1650 across 4.011.775 km² of western South America. Compiled from Viceroy Francisco de Toledo's 1570-1575 *Visita General*, Antonio Vázquez de Espinosa's 1628 survey, Juan López de Velasco's 1574 geographic register and regional demographic studies [@cook1982demographic; @mumford2012vertical; @gamboam2004encomienda; @cirizamendivil2019tributo], the register spans six modern territories: Peru (62 sites), Colombia (26), Bolivia (19), Ecuador (12), Chile (12) and Venezuela (1). Across the 132 catalogued settlements, the dataset preserves 320 city-proper population observations (averaging 2,42 temporal entries per centre), extending from the global silver metropolis of Potosí (160k in 1650) and the former Inca capital of Cusco (58k in 1534) down to peripheral frontier garrisons and missions such as Pore Casanare (745 in 1644), Tumaco (690 in 1645) and Tame (685 in 1628). Four structured saturation waves in the source ledger evaluated 132 habitation candidates with zero excluded entries and zero crowd-sourced fallback records.

# Background

Between 1525 and 1650, Spanish colonial rule fundamentally restructured the urban network of the Andes [@cook1982demographic; @hemming1978vision]. Pre-Hispanic administrative nodes such as Cusco, Jauja, Cajamarca and Quito were overlaid by Spanish municipal *cabildos*, coastal port entrepôts (Lima, Callao, Trujillo, Cartagena, Guayaquil) and highland silver and mercury mining boomtowns (Potosí, Oruro, Huancavelica, Caylloma, Castrovirreyna) [@contrerascarranza2020crisis; @spalding1984huarochiri]. Concurrently, Viceroy Francisco de Toledo's *reducciones* of the 1570s and parallel congregations in New Granada consolidated dispersed *ayllu* and Muisca hamlets into nucleated parish towns across the Colca, Mantaro, Titicaca and Sabana de Bogotá basins [@mumford2012vertical; @wernke2013land; @quirogazuluaga2014proceso]. In the southern frontier of Chile and Atacama, colonial towns endured protracted warfare, with Valdivia contracting and Osorno abandoned following the 1598-1604 Mapuche offensive [@tellez1984guerra; @sanhuezatoha1992trafico].

# Methodology

Every settlement entry in the gazetteer records geographical coordinates, national territory, sub-regional assignment and dated city-proper population counts extracted from primary archival inspections and historical demography monographs [@cook1982demographic; @villamarin2019colonial]. No synthetic back-projection or crowd-sourced population fallback was admitted; all 132 records originate from eight documented historical corpora [@arditovega1992estructura; @quintana2022corobamba].

The regional source ledger audited candidate settlements across four sequential saturation waves: initial Viceroyal and HGIS urban cores (89 inclusions), Toledo *Visita* and 1574-1628 chronicles (29 inclusions), late colonial retrospective syntheses (13 inclusions) and a frontier gap sweep adding 1 final mission centre (marginal gain 0,76%, below the 2% saturation ceiling) [@marzal1984reducciones; @farberman2006sociedades]. All 132 evaluated habitation centres met strict coordinate, scope and provenance criteria, yielding 132 included settlements and 0 excluded duplicates or spurious entries.

# Testing and Validation

Ledger reconciliation confirms exact parity across the summary register, spatial mask and settlement gazetteer: 132 included settlements, 0 excluded candidates and 320 dated city-proper observations. Table \ref{tab:sett-provenance} details the eight historical source corpora supporting the 132 centres, led by the 1570-1575 Toledo *Visita General* (54 settlements, 40,91%), New Granada tributary and census syntheses (26 settlements, 19,7%) and Alto Perú mining and *visita* compendia (20 settlements, 15,15%) [@cook1982demographic; @gamboam2004encomienda; @lorandi2000identidades].

<figure class="crd-table-figure" id="tab:sett-provenance">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Primary Historical Corpus</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Visita General del Virrey Francisco de Toledo (1570-1575; Cook 1975, 1981)</strong></td><td class="crd-td">54</td><td class="crd-td">40,91%</td></tr>
<tr><td class="crd-td"><strong>Tovar Pinzón et al. (1994) Convocatoria al Poder del Número (1778)</strong></td><td class="crd-td">26</td><td class="crd-td">19,7%</td></tr>
<tr><td class="crd-td"><strong>Cook (1981) / Tandeter (1993) / Sánchez-Albornoz (1978) Alto Perú</strong></td><td class="crd-td">20</td><td class="crd-td">15,15%</td></tr>
<tr><td class="crd-td"><strong>Hamerly (1973) / Tyrer (1988) Audiencia de Quito Demography</strong></td><td class="crd-td">12</td><td class="crd-td">9,09%</td></tr>
<tr><td class="crd-td"><strong>Mellafe (1959) / Carmagnani (1967) Reino de Chile</strong></td><td class="crd-td">10</td><td class="crd-td">7,58%</td></tr>
<tr><td class="crd-td"><strong>López de Velasco (1574) Geografía y Descripción Universal de las Indias</strong></td><td class="crd-td">6</td><td class="crd-td">4,55%</td></tr>
<tr><td class="crd-td"><strong>Chantre y Herrera (1770) / Golob (1982) Maynas Missions</strong></td><td class="crd-td">3</td><td class="crd-td">2,27%</td></tr>
<tr><td class="crd-td"><strong>Obispo Mariano Martí (1771-1784) Visita Pastoral</strong></td><td class="crd-td">1</td><td class="crd-td">0,76%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Source provenance distribution across 132 catalogued colonial Andean settlements, 1525 to 1650.</figcaption>
</figure>

Across all 132 catalogued colonial centres, Figure \ref{fig:sett-hierarchy} illustrates the twelve largest urban concentrations alongside the power-law rank-size curve ($\alpha = 0,69$, $R^2 = 0,96$).

<figure class="crd-figure-block" id="fig:sett-hierarchy">
<img class="crd-figure-img" src="/artefacts/project_quipu/1.0-spanish-conquest-andes-collapse-settlements/spanish_conquest_andes_collapse_urban_hierarchy.png" alt="fig:sett-hierarchy" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Top twelve colonial Andean urban centres by peak population (Panel A) and rank-size distribution of all 132 catalogued settlements (Panel B).</figcaption>
</figure>

# Results

## Leading Settlements by Peak Population

Table \ref{tab:top40-andes} presents the top 40 settlements in the gazetteer ordered by peak documented population between 1525 and 1650. Mining centres (Potosí at 160k, Oruro at 36,82k, Huancavelica at 11,84k and Caylloma at 8,12k) and viceregal or *audiencia* capitals (Cusco at 58k, Lima at 34,21k, Quito at 24,62k, Arequipa at 14,62k, La Paz at 12,61k, Ayacucho at 12,43k, Sucre at 11,42k, Santiago at 11,29k and Bogotá at 11,26k) account for the upper tier, alongside major *reducción* and *repartimiento* centres such as Jauja, Cajamarca, Chucuito, Chincha Alta, Juli and Caquiaviri [@cook1982demographic; @mumford2012vertical; @cirizamendivil2019tributo].

<figure class="crd-table-figure" id="tab:top40-andes">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">First</th><th class="crd-th">Last</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Potosí</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">Charcas</td><td class="crd-td">-19,58, -65,75</td><td class="crd-td">1546-1650</td><td class="crd-td">14k</td><td class="crd-td">160k</td><td class="crd-td">160k (1650)</td></tr>
<tr><td class="crd-td"><strong>Cusco</strong></td><td class="crd-td">Peru</td><td class="crd-td">Perú Sierra</td><td class="crd-td">-13,52, -71,98</td><td class="crd-td">1534-1650</td><td class="crd-td">58k</td><td class="crd-td">31,8k</td><td class="crd-td">58k (1534)</td></tr>
<tr><td class="crd-td"><strong>Oruro</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">Charcas</td><td class="crd-td">-17,96, -67,11</td><td class="crd-td">1607-1650</td><td class="crd-td">16,4k</td><td class="crd-td">24,2k</td><td class="crd-td">36,8k (1628)</td></tr>
<tr><td class="crd-td"><strong>Lima</strong></td><td class="crd-td">Peru</td><td class="crd-td">Perú Costa</td><td class="crd-td">-12,05, -77,04</td><td class="crd-td">1535-1636</td><td class="crd-td">1,2k</td><td class="crd-td">34,2k</td><td class="crd-td">34,2k (1636)</td></tr>
<tr><td class="crd-td"><strong>Quito</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Quito and Popayán</td><td class="crd-td">-0,22, -78,51</td><td class="crd-td">1535-1628</td><td class="crd-td">18,4k</td><td class="crd-td">24,6k</td><td class="crd-td">24,6k (1628)</td></tr>
<tr><td class="crd-td"><strong>Jauja</strong></td><td class="crd-td">Peru</td><td class="crd-td">Perú Sierra</td><td class="crd-td">-11,78, -75,5</td><td class="crd-td">1534-1628</td><td class="crd-td">18,4k</td><td class="crd-td">7,4k</td><td class="crd-td">18,4k (1534)</td></tr>
<tr><td class="crd-td"><strong>Cajamarca</strong></td><td class="crd-td">Peru</td><td class="crd-td">Perú Costa</td><td class="crd-td">-7,16, -78,51</td><td class="crd-td">1533-1628</td><td class="crd-td">16,4k</td><td class="crd-td">11,2k</td><td class="crd-td">16,4k (1533)</td></tr>
<tr><td class="crd-td"><strong>Chucuito</strong></td><td class="crd-td">Peru</td><td class="crd-td">Perú Sierra</td><td class="crd-td">-15,89, -69,89</td><td class="crd-td">1567-1628</td><td class="crd-td">16,4k</td><td class="crd-td">9,8k</td><td class="crd-td">16,4k (1567)</td></tr>
<tr><td class="crd-td"><strong>Chincha Alta</strong></td><td class="crd-td">Peru</td><td class="crd-td">Perú Costa</td><td class="crd-td">-13,41, -76,13</td><td class="crd-td">1540-1628</td><td class="crd-td">14,8k</td><td class="crd-td">3,1k</td><td class="crd-td">14,8k (1540)</td></tr>
<tr><td class="crd-td"><strong>Arequipa</strong></td><td class="crd-td">Peru</td><td class="crd-td">Perú Costa</td><td class="crd-td">-16,4, -71,54</td><td class="crd-td">1542-1628</td><td class="crd-td">2,6k</td><td class="crd-td">14,6k</td><td class="crd-td">14,6k (1628)</td></tr>
<tr><td class="crd-td"><strong>La Paz</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">Charcas</td><td class="crd-td">-16,5, -68,15</td><td class="crd-td">1550-1628</td><td class="crd-td">3,8k</td><td class="crd-td">12,6k</td><td class="crd-td">12,6k (1628)</td></tr>
<tr><td class="crd-td"><strong>Ayacucho</strong></td><td class="crd-td">Peru</td><td class="crd-td">Perú Sierra</td><td class="crd-td">-13,16, -74,22</td><td class="crd-td">1545-1628</td><td class="crd-td">3,4k</td><td class="crd-td">12,4k</td><td class="crd-td">12,4k (1628)</td></tr>
<tr><td class="crd-td"><strong>Huancavelica</strong></td><td class="crd-td">Peru</td><td class="crd-td">Perú Sierra</td><td class="crd-td">-12,79, -74,98</td><td class="crd-td">1573-1628</td><td class="crd-td">6,4k</td><td class="crd-td">9,6k</td><td class="crd-td">11,8k (1600)</td></tr>
<tr><td class="crd-td"><strong>Sucre</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">Charcas</td><td class="crd-td">-19,05, -65,26</td><td class="crd-td">1540-1628</td><td class="crd-td">2,4k</td><td class="crd-td">11,4k</td><td class="crd-td">11,4k (1628)</td></tr>
<tr><td class="crd-td"><strong>Juli</strong></td><td class="crd-td">Peru</td><td class="crd-td">Perú Sierra</td><td class="crd-td">-16,22, -69,46</td><td class="crd-td">1567-1628</td><td class="crd-td">11,3k</td><td class="crd-td">7,4k</td><td class="crd-td">11,3k (1567)</td></tr>
<tr><td class="crd-td"><strong>Santiago</strong></td><td class="crd-td">Chile</td><td class="crd-td">Chile</td><td class="crd-td">-33,45, -70,67</td><td class="crd-td">1545-1650</td><td class="crd-td">1,9k</td><td class="crd-td">11,3k</td><td class="crd-td">11,3k (1650)</td></tr>
<tr><td class="crd-td"><strong>Bogotá</strong></td><td class="crd-td">Colombia</td><td class="crd-td">Nuevo Reino de Granada</td><td class="crd-td">4,61, -74,08</td><td class="crd-td">1540-1628</td><td class="crd-td">2,1k</td><td class="crd-td">11,3k</td><td class="crd-td">11,3k (1628)</td></tr>
<tr><td class="crd-td"><strong>Cartagena</strong></td><td class="crd-td">Colombia</td><td class="crd-td">Nuevo Reino de Granada</td><td class="crd-td">10,39, -75,48</td><td class="crd-td">1535-1628</td><td class="crd-td">1,5k</td><td class="crd-td">9,9k</td><td class="crd-td">9,9k (1628)</td></tr>
<tr><td class="crd-td"><strong>Caquiaviri</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">Charcas</td><td class="crd-td">-17,02, -68,62</td><td class="crd-td">1573-1628</td><td class="crd-td">9,5k</td><td class="crd-td">6,8k</td><td class="crd-td">9,5k (1573)</td></tr>
<tr><td class="crd-td"><strong>Lucanas</strong></td><td class="crd-td">Peru</td><td class="crd-td">Perú Sierra</td><td class="crd-td">-14,62, -74,24</td><td class="crd-td">1573-1628</td><td class="crd-td">9,2k</td><td class="crd-td">6,8k</td><td class="crd-td">9,2k (1573)</td></tr>
<tr><td class="crd-td"><strong>Cuenca</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Quito and Popayán</td><td class="crd-td">-2,9, -79</td><td class="crd-td">1560-1628</td><td class="crd-td">3,7k</td><td class="crd-td">8,9k</td><td class="crd-td">8,9k (1628)</td></tr>
<tr><td class="crd-td"><strong>Huaylas</strong></td><td class="crd-td">Peru</td><td class="crd-td">Perú Sierra</td><td class="crd-td">-8,87, -77,9</td><td class="crd-td">1573-1628</td><td class="crd-td">8,9k</td><td class="crd-td">6,8k</td><td class="crd-td">8,9k (1573)</td></tr>
<tr><td class="crd-td"><strong>Riobamba</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Quito and Popayán</td><td class="crd-td">-1,67, -78,65</td><td class="crd-td">1540-1628</td><td class="crd-td">3,4k</td><td class="crd-td">8,5k</td><td class="crd-td">8,5k (1628)</td></tr>
<tr><td class="crd-td"><strong>Tunja</strong></td><td class="crd-td">Colombia</td><td class="crd-td">Nuevo Reino de Granada</td><td class="crd-td">5,54, -73,37</td><td class="crd-td">1540-1628</td><td class="crd-td">2,7k</td><td class="crd-td">8,4k</td><td class="crd-td">8,4k (1628)</td></tr>
<tr><td class="crd-td"><strong>Cochabamba</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">Charcas</td><td class="crd-td">-17,39, -66,16</td><td class="crd-td">1573-1628</td><td class="crd-td">4,9k</td><td class="crd-td">8,4k</td><td class="crd-td">8,4k (1628)</td></tr>
<tr><td class="crd-td"><strong>Pomata</strong></td><td class="crd-td">Peru</td><td class="crd-td">Perú Sierra</td><td class="crd-td">-16,27, -69,29</td><td class="crd-td">1567-1628</td><td class="crd-td">8,4k</td><td class="crd-td">5,2k</td><td class="crd-td">8,4k (1567)</td></tr>
<tr><td class="crd-td"><strong>Parinacochas</strong></td><td class="crd-td">Peru</td><td class="crd-td">Perú Sierra</td><td class="crd-td">-15,02, -73,78</td><td class="crd-td">1573-1628</td><td class="crd-td">8,4k</td><td class="crd-td">6,2k</td><td class="crd-td">8,4k (1573)</td></tr>
<tr><td class="crd-td"><strong>Caylloma</strong></td><td class="crd-td">Peru</td><td class="crd-td">Perú Costa</td><td class="crd-td">-15,19, -71,78</td><td class="crd-td">1573-1628</td><td class="crd-td">5,3k</td><td class="crd-td">8,1k</td><td class="crd-td">8,1k (1628)</td></tr>
<tr><td class="crd-td"><strong>Andahuaylas</strong></td><td class="crd-td">Peru</td><td class="crd-td">Perú Sierra</td><td class="crd-td">-13,66, -73,39</td><td class="crd-td">1573-1628</td><td class="crd-td">7,9k</td><td class="crd-td">6,4k</td><td class="crd-td">7,9k (1573)</td></tr>
<tr><td class="crd-td"><strong>Sica Sica</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">Charcas</td><td class="crd-td">-17,33, -67,74</td><td class="crd-td">1573-1628</td><td class="crd-td">7,8k</td><td class="crd-td">5,6k</td><td class="crd-td">7,8k (1573)</td></tr>
<tr><td class="crd-td"><strong>Chumbivilcas</strong></td><td class="crd-td">Peru</td><td class="crd-td">Perú Sierra</td><td class="crd-td">-14,45, -72,08</td><td class="crd-td">1573-1628</td><td class="crd-td">7,6k</td><td class="crd-td">5,7k</td><td class="crd-td">7,6k (1573)</td></tr>
<tr><td class="crd-td"><strong>Corque Carangas</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">Charcas</td><td class="crd-td">-18,35, -67,67</td><td class="crd-td">1573-1628</td><td class="crd-td">7,5k</td><td class="crd-td">5,3k</td><td class="crd-td">7,5k (1573)</td></tr>
<tr><td class="crd-td"><strong>Popayán</strong></td><td class="crd-td">Colombia</td><td class="crd-td">Quito and Popayán</td><td class="crd-td">2,44, -76,61</td><td class="crd-td">1540-1628</td><td class="crd-td">2k</td><td class="crd-td">7,4k</td><td class="crd-td">7,4k (1628)</td></tr>
<tr><td class="crd-td"><strong>Trujillo</strong></td><td class="crd-td">Peru</td><td class="crd-td">Perú Costa</td><td class="crd-td">-8,11, -79,03</td><td class="crd-td">1535-1640</td><td class="crd-td">1,4k</td><td class="crd-td">6,3k</td><td class="crd-td">7,4k (1614)</td></tr>
<tr><td class="crd-td"><strong>Huarochirí</strong></td><td class="crd-td">Peru</td><td class="crd-td">Perú Costa</td><td class="crd-td">-12,14, -76,23</td><td class="crd-td">1573-1628</td><td class="crd-td">7,4k</td><td class="crd-td">5,6k</td><td class="crd-td">7,4k (1573)</td></tr>
<tr><td class="crd-td"><strong>Zepita</strong></td><td class="crd-td">Peru</td><td class="crd-td">Perú Sierra</td><td class="crd-td">-16,5, -69,1</td><td class="crd-td">1567-1628</td><td class="crd-td">7,3k</td><td class="crd-td">4,5k</td><td class="crd-td">7,3k (1567)</td></tr>
<tr><td class="crd-td"><strong>Otavalo</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Quito and Popayán</td><td class="crd-td">0,23, -78,26</td><td class="crd-td">1574-1628</td><td class="crd-td">5,8k</td><td class="crd-td">7,3k</td><td class="crd-td">7,3k (1628)</td></tr>
<tr><td class="crd-td"><strong>Conchucos</strong></td><td class="crd-td">Peru</td><td class="crd-td">Perú Costa</td><td class="crd-td">-8,27, -77,85</td><td class="crd-td">1573-1628</td><td class="crd-td">7,2k</td><td class="crd-td">5,5k</td><td class="crd-td">7,2k (1573)</td></tr>
<tr><td class="crd-td"><strong>Pasto</strong></td><td class="crd-td">Colombia</td><td class="crd-td">Quito and Popayán</td><td class="crd-td">1,21, -77,28</td><td class="crd-td">1542-1628</td><td class="crd-td">2,5k</td><td class="crd-td">7,1k</td><td class="crd-td">7,1k (1628)</td></tr>
<tr><td class="crd-td"><strong>Latacunga</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Quito and Popayán</td><td class="crd-td">-0,94, -78,62</td><td class="crd-td">1574-1628</td><td class="crd-td">4,9k</td><td class="crd-td">7k</td><td class="crd-td">7k (1628)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Top 40 settlements in the colonial Andean gazetteer ordered by peak documented population (132 total sites).</figcaption>
</figure>

## Sub-Regional Distribution and Saturation Ledger

Across the six jurisdictions, settlement coverage concentrates in Perú Costa (32 centres) and Perú Sierra (30 centres), followed by Quito and Popayán (21), Nuevo Reino de Granada (20), Charcas (19) and Chile (10) (Table \ref{tab:regsum-andes}) [@cook1982demographic; @villamarin2019colonial]. By modern national boundaries, Peru contains 62 settlements, Colombia 26, Bolivia 19, Ecuador 12, Chile 12 (including coastal Arica and Atacama Cobija assigned to Peru Costa and Charcas respectively) and Venezuela 1 (Maracaibo) [@montoyaguzman2016mestizaje; @tellez1984guerra]. Table \ref{tab:ledger-waves} summarises the four-wave source-saturation audit confirming full ingestion of the Toledo *Visita* (140 in-bounds rows), López de Velasco and Vázquez de Espinosa (120 rows) and *Relaciones Geográficas* (45 rows) [@cook1982demographic; @contrerascarranza2020crisis].

<figure class="crd-table-figure" id="tab:regsum-andes">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Sites</th><th class="crd-th">Observations</th><th class="crd-th">Leading Centre</th><th class="crd-th">Peak Population</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Nuevo Reino de Granada</strong></td><td class="crd-td">20</td><td class="crd-td">50</td><td class="crd-td">Bogotá</td><td class="crd-td">11,3k</td></tr>
<tr><td class="crd-td"><strong>Quito and Popayán</strong></td><td class="crd-td">21</td><td class="crd-td">52</td><td class="crd-td">Quito</td><td class="crd-td">24,6k</td></tr>
<tr><td class="crd-td"><strong>Perú Costa</strong></td><td class="crd-td">32</td><td class="crd-td">79</td><td class="crd-td">Lima</td><td class="crd-td">34,2k</td></tr>
<tr><td class="crd-td"><strong>Perú Sierra</strong></td><td class="crd-td">30</td><td class="crd-td">70</td><td class="crd-td">Cusco</td><td class="crd-td">58k</td></tr>
<tr><td class="crd-td"><strong>Charcas</strong></td><td class="crd-td">19</td><td class="crd-td">44</td><td class="crd-td">Potosí</td><td class="crd-td">160k</td></tr>
<tr><td class="crd-td"><strong>Chile</strong></td><td class="crd-td">10</td><td class="crd-td">25</td><td class="crd-td">Santiago</td><td class="crd-td">11,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catalogued settlements, population observations and leading centres across the six colonial Andean jurisdictions.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:ledger-waves">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Wave</th><th class="crd-th">Source Corpus Class</th><th class="crd-th">Prior Total</th><th class="crd-th">Newly Added</th><th class="crd-th">Marginal Gain</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Viceroyal censuses and HGIS urban cores</td><td class="crd-td">0</td><td class="crd-td">89</td><td class="crd-td">100%</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Toledo Visita, Lopez de Velasco and Vazquez de Espinosa</td><td class="crd-td">89</td><td class="crd-td">29</td><td class="crd-td">32,58%</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Late colonial padrones and regional syntheses</td><td class="crd-td">118</td><td class="crd-td">13</td><td class="crd-td">11,02%</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Frontier mission gap sweep</td><td class="crd-td">131</td><td class="crd-td">1</td><td class="crd-td">0,76%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Four-wave saturation audit of the colonial Andean settlement ledger (132 included, 0 excluded candidates).</figcaption>
</figure>

# Limitations

City-proper enumerations in the early colonial Andes carry two structural caveats. First, administrative counts in *asientos mineros* such as Potosí and Oruro fluctuated sharply between seasonal *mit'a* rotations and silver output cycles, while *forastero* residents in urban parishes were sometimes tallied separately from *originario* tribute rolls [@lorandi2000identidades; @cirizamendivil2019tributo]. Second, settlements in tropical lowland corridors (Maynas, Chocó, Magdalena) and southern frontier zones (Valdivia, Osorno) exhibit sparse temporal sampling compared with the richly documented Toledan *reducción* belt [@arditovega1992estructura; @quintana2022corobamba; @tellez1984guerra].

# Conclusion

The 132 settlements catalogued in this gazetteer anchor the urban and *reducción* framework of the Andes during the post-conquest collapse. Pairing Toledo's 1570-1575 *tasa* records with early seventeenth-century ecclesiastical and crown surveys documents how demographic survival shifted away from decimated coastal *repartimientos* toward imperial capitals, silver mining booms and sheltered intermontane valleys [@cook1982demographic; @mumford2012vertical; @wernke2013land].

# Appendix

Table \ref{tab:app-countries} breaks down the 132 settlements and 320 observations by modern national territory, highlighting the geographic breadth from coastal Venezuela to southern Chile [@gamboam2004encomienda; @montoyaguzman2016mestizaje].

<figure class="crd-table-figure" id="tab:app-countries">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Country</th><th class="crd-th">Sites</th><th class="crd-th">Observations</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Peru</strong></td><td class="crd-td">62</td><td class="crd-td">146</td><td class="crd-td">Cusco (58k)</td></tr>
<tr><td class="crd-td"><strong>Colombia</strong></td><td class="crd-td">26</td><td class="crd-td">67</td><td class="crd-td">Bogotá (11,3k)</td></tr>
<tr><td class="crd-td"><strong>Bolivia</strong></td><td class="crd-td">19</td><td class="crd-td">44</td><td class="crd-td">Potosí (160k)</td></tr>
<tr><td class="crd-td"><strong>Ecuador</strong></td><td class="crd-td">12</td><td class="crd-td">31</td><td class="crd-td">Quito (24,6k)</td></tr>
<tr><td class="crd-td"><strong>Chile</strong></td><td class="crd-td">12</td><td class="crd-td">30</td><td class="crd-td">Santiago (11,3k)</td></tr>
<tr><td class="crd-td"><strong>Venezuela</strong></td><td class="crd-td">1</td><td class="crd-td">2</td><td class="crd-td">Maracaibo (3,4k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Distribution of the 132 colonial Andean settlements and 320 temporal observations by modern national territory.</figcaption>
</figure>

# Sources

<div id="refs"></div>
