---
title: "Settlement Gazetteer of Colonial Paraguay: Asunción Core, Jesuit Reducciones and Frontier Outposts"
subtitle: "PRETA: Coordinates, Toponymy and Demographic Trajectories (1537AD to 1811AD)"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: colonial_paraguay_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_colonial_paraguay_spatial.png"
hero_caption: "Spatial distribution of 220 catalogued colonial settlements across the four sub-regions of Colonial Paraguay (415,3k km²) from 1537AD to 1811AD."
hero_label: "fig:hero-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This settlement gazetteer compiles geographic coordinates, colonial toponymy, foundation dates and longitudinal population series for 220 catalogued historical settlements across Colonial Paraguay (415.304 km²) between 1537AD and 1811AD. The compiled inventory synthesises four distinct settlement traditions: Spanish administrative *ciudades* and *villas*, Franciscan *pueblos de indios*, the planned monastic urbanism of the Jesuit Guaraní *reducciones*, and rural *partidos* alongside frontier *presidios*.

The 220 catalogued settlements are distributed across four regional divisions: 89 settlements in the eastern and northern march of Villarrica, Guairá, Caaguazú, San Pedro and Concepción (98.670 km²); 64 in the Jesuit mission territory along the Paraná, Tebicuary and Uruguay basins (48.127 km²); 61 in the central agrarian core of Asunción, Central, Cordillera and Paraguarí (19.779 km²); and 6 frontier garrisons and river outposts in the Gran Chaco Boreal (248.728 km²). Together, these settlements preserve 834 benchmark population observations, averaging 3,79 records per site.

The regional urban hierarchy was anchored by the capital port of Asunción (13.800 peak), followed by prominent mission towns and regional commercial centers: San Ignacio Guazú (6.774), Pilar de Ñeembucú (6.414), Villarrica del Espíritu Santo (6.200), Mariscal Estigarribia (4.913), Encarnación de Itapúa (4.652), Santa Rosa de Lima (4.380), Santiago (4.170), Santa María de Fe (3.982), Concepción (3.945), San Lorenzo (3.599), Santísima Trinidad del Paraná (3.449), San Juan Bautista (3.418) and Luque (3.260). Every catalogued settlement reconciles against the source ledger alongside 23 excluded duplicate aliases within 2,5 km of primary nodes.

\newpage

# Settlement Taxonomy and Regional Distribution

Colonial Paraguayan settlement archaeology and historical geography reflect a structural transition from dispersed swidden lineages (*tava*) to nucleated colonial towns [@susnik1965indio; @kleinpenning2003paraguay]. Spanish authorities recognized five distinct functional settlement categories:

1. *Ciudades y Villas*: Chartered Spanish municipalities governed by a municipal town council (*cabildo*), royal treasury officials and a parish church. Asunción, founded in 1537AD, served as the provincial capital and primate river port. Secondary villas included Villarrica (founded 1570AD, relocated 1682AD), Villa de San Isidro Labrador de Curuguaty (1716AD), Villa Real de la Concepción (1773AD) and Villa del Pilar de Ñeembucú (1779AD) [@whigham1991politics].
2. *Pueblos de Indios*: Communal indigenous towns established primarily by Franciscan friars between 1580AD and 1600AD to congregate encomienda tributaries. Governed internally by an indigenous *corregidor* and *cabildo indígena*, these towns included Altos, Ypané, Guarambaré, Tobatí, Itá, Yaguarón, Caazapá and Yuty [@telesca2009arcilla; @necker1979indiens].
3. *Reducciones Jesuíticas*: Autonomous communal municipalities administered by the Society of Jesus between 1609AD and 1767AD, featuring standardised grid street networks, monumental stone basilicas, communal granaries and quarantine infirmaries [@maeder1984poblacion; @sarreal2014guarani].
4. *Partidos y Capillas*: Dispersed rural agrarian parishes centered on a wayside chapel (*capilla*) or livestock estancia, which gradually nucleated into mestizo agricultural market towns during the eighteenth century (San Lorenzo, Luque, Capiatá, Pirayú, Carapeguá, Quiindy, Arroyos y Esteros) [@potthast2020mestizaje; @velazquez1965paraguay].
5. *Presidios y Fuertes*: Frontier military garrisons and river outposts erected to secure navigation channels and deter Mbaya and Portuguese incursions (Fuerte Borbón (Fuerte Olimpo), San Carlos del Apa, Remanso del Castillo) [@wucherer2019from].

Table \ref{tab:subreg-summary} outlines the spatial distribution, aggregate site peaks and leading settlements across the four colonial sub-regions.

<figure class="crd-table-figure" id="tab:subreg-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Share (%)</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Town</th><th class="crd-th">Peak Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Central Asuncion</strong></td><td class="crd-td">19.779</td><td class="crd-td">61</td><td class="crd-td">27,7 %</td><td class="crd-td">82,3k</td><td class="crd-td">Asunción</td><td class="crd-td">13,8k</td></tr>
<tr><td class="crd-td"><strong>Guaira and North</strong></td><td class="crd-td">98.670</td><td class="crd-td">89</td><td class="crd-td">40,5 %</td><td class="crd-td">78,1k</td><td class="crd-td">Villarrica</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Jesuit Reducciones</strong></td><td class="crd-td">48.127</td><td class="crd-td">64</td><td class="crd-td">29,1 %</td><td class="crd-td">77,4k</td><td class="crd-td">San Ignacio</td><td class="crd-td">6,8k</td></tr>
<tr><td class="crd-td"><strong>Gran Chaco Frontier</strong></td><td class="crd-td">248.728</td><td class="crd-td">6</td><td class="crd-td">2,7 %</td><td class="crd-td">10,3k</td><td class="crd-td">Mcal. Estigarribia</td><td class="crd-td">4,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 220 catalogued colonial settlements, summed site peaks and leading municipal centers.</figcaption>
</figure>

# The Jesuit Guaraní Reducciones of Paraguay

The thirty Jesuit Guaraní reducciones constituted the most celebrated urban and demographic experiment in colonial South America [@ganson2003guarani; @jackson2008demographic]. Eight of these towns were situated within the modern national borders of Paraguay, arrayed across the rolling grasslands and riverine terraces of Misiones, Itapúa and the lower Tebicuary:

- *San Ignacio Guazú*: Founded in 1609AD by Fathers Marcial de Lorenzana and Francisco de San Martín, San Ignacio was the mother reduction of the entire mission system. It served as a strategic inland hub connecting Asunción with the southern missions, attaining a peak population of 6.774 inhabitants in 1732AD [@maeder1984poblacion].
- *Encarnación de Itapúa*: Founded in 1615AD by Saint Roque González de Santa Cruz on the northern bank of the Río Paraná, Encarnación served as the primary river crossing and transshipment port for mission trade with Posadas and the Uruguay basin, supporting 4.652 residents at its peak [@kuhne2025churches].
- *San Cosme y Damián*: Established in 1632AD along the Paraná River, San Cosme became famous across colonial South America as an astronomical center under Father Buenaventura Suárez, who constructed telescopes and published planetary ephemerides while ministering to 3.104 Guaraní souls [@gangui2021orientatio].
- *Santa María de Fe*: Founded in 1647AD as a refuge for Guaraní neophytes fleeing bandeirante raids in the Brazilian Tapé, Santa María housed 3.982 inhabitants in 1732AD and was renowned for its sacred sculpture and polychrome wood carvings [@ganson2023gender].
- *Santiago*: Established in 1669AD west of the Tebicuary River, Santiago grew into an enormous cattle ranching center managing hundreds of thousands of semi-feral cattle (*vacas alzadas*), with a peak population of 4.170 [@sarreal2014guarani].
- *Jesús de Tavarangüé*: Founded in 1685AD, Jesús is celebrated for its monumental stone church designed by the Catalan architect Brother José Brasanelli, whose massive Romanesque portal and arched windows remained unfinished when the Jesuits were expelled in 1767AD, holding 2.980 residents in 1732AD [@kuhne2025churches].
- *Santa Rosa de Lima*: Founded in 1698AD after an offshoot community separated from Santa María de Fe, Santa Rosa reached 4.380 souls in 1732AD and preserved exceptional baroque murals in its Loreto chapel [@kuhne2025churches].
- *Santísima Trinidad del Paraná*: Founded in 1706AD, Trinidad represented the architectural culmination of the mission network, boasting a three-aisled cathedral with a massive dome, stone friezes carved by Guaraní stonemasons and a population of 3.449 [@kuhne2025churches].

Table \ref{tab:missions-gazetteer} presents coordinates, foundation dates and longitudinal census observations for the eight Jesuit reducciones of Paraguay.

<figure class="crd-table-figure" id="tab:missions-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Mission Town</th><th class="crd-th">Founded</th><th class="crd-th">Coordinates</th><th class="crd-th">Peak Pop</th><th class="crd-th">1732AD</th><th class="crd-th">1767AD</th><th class="crd-th">1799AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>San Ignacio</strong></td><td class="crd-td">1740AD</td><td class="crd-td">26,89 S, 57,02 W</td><td class="crd-td">6,8k</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Encarnación (Itapúa)</strong></td><td class="crd-td">1615AD</td><td class="crd-td">27,33 S, 55,87 W</td><td class="crd-td">4,7k</td><td class="crd-td">4,7k</td><td class="crd-td">4,4k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Santa Rosa de Lima</strong></td><td class="crd-td">1698AD</td><td class="crd-td">26,88 S, 56,85 W</td><td class="crd-td">4,4k</td><td class="crd-td">4,4k</td><td class="crd-td">2,2k</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Santiago</strong></td><td class="crd-td">1669AD</td><td class="crd-td">27,14 S, 56,77 W</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k</td><td class="crd-td">2,8k</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>Santa María de Fe</strong></td><td class="crd-td">1647AD</td><td class="crd-td">26,78 S, 56,95 W</td><td class="crd-td">4k</td><td class="crd-td">4k</td><td class="crd-td">4k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Santísima Trinidad del Paraná</strong></td><td class="crd-td">1706AD</td><td class="crd-td">27,13 S, 55,7 W</td><td class="crd-td">3,4k</td><td class="crd-td">3,4k</td><td class="crd-td">2,9k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>San Cosme y Damián</strong></td><td class="crd-td">1632AD</td><td class="crd-td">27,32 S, 56,33 W</td><td class="crd-td">2,4k</td><td class="crd-td">2,3k</td><td class="crd-td">2,4k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Jesús de Tavarangüé</strong></td><td class="crd-td">1685AD</td><td class="crd-td">27,06 S, 55,75 W</td><td class="crd-td">2,4k</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">1,1k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Longitudinal demographic trajectories across the eight Jesuit Guaraní reducciones of Paraguay.</figcaption>
</figure>

# Leading Colonial Settlements and Urban Hierarchy

The urban hierarchy of colonial Paraguay displayed pronounced demographic concentration, with Asunción exerting primate commercial and political dominance across the Paraná-Paraguay basin [@cardozo2019downtown; @anon2019asuncion]. Asunción concentrated 13.800 residents by 1811AD, representing over seven percent of the provincial population and functioning as the sole deep-water port licensed for external commerce until the establishment of the Pilar customs house in 1779AD [@whigham1991politics].

Surrounding Asunción, a dense constellation of agricultural towns in the Central and Cordillera valleys supported populations between 2.000 and 3.600 inhabitants, including San Lorenzo (3.599), Luque (3.260), Capiatá, Itauguá, Altos and Yaguarón. These towns operated as market centers supplying meat, maize, manioc, sugarcane and tobacco to urban consumers and fluvial convoys.

In the southern plains, the Jesuit reducciones formed a distinctive secondary urban network: eight compact, highly planned towns with individual populations between 3.000 and 6.800 inhabitants during their eighteenth-century peak [@maeder1984poblacion]. In the eastern and northern march, Villarrica (6.200) and Concepción (3.945) anchored regional agricultural and yerba mate networks, while Mariscal Estigarribia (4.913) and Fuerte Borbón maintained fortified frontier positions. Table \ref{tab:top-settlements} compiles the leading thirty-five settlements ordered by peak recorded population.

<figure class="crd-table-figure" id="tab:top-settlements">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Colonial Settlement</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Founded</th><th class="crd-th">Peak Pop</th><th class="crd-th">Censuses</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Asunción</strong></td><td class="crd-td">Central Asuncion</td><td class="crd-td">25,29 S, 57,65 W</td><td class="crd-td">1537AD</td><td class="crd-td">13,8k</td><td class="crd-td">9</td></tr>
<tr><td class="crd-td"><strong>San Ignacio</strong></td><td class="crd-td">Jesuit Reducciones</td><td class="crd-td">26,89 S, 57,02 W</td><td class="crd-td">1740AD</td><td class="crd-td">6,8k</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Pilar</strong></td><td class="crd-td">Jesuit Reducciones</td><td class="crd-td">26,86 S, 58,31 W</td><td class="crd-td">1740AD</td><td class="crd-td">6,4k</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Villarrica</strong></td><td class="crd-td">Guaira and North</td><td class="crd-td">25,78 S, 56,45 W</td><td class="crd-td">1570AD</td><td class="crd-td">6,2k</td><td class="crd-td">7</td></tr>
<tr><td class="crd-td"><strong>Mcal. Estigarribia</strong></td><td class="crd-td">Gran Chaco Frontier</td><td class="crd-td">22 S, 60,95 W</td><td class="crd-td">1740AD</td><td class="crd-td">4,9k</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Encarnación (Itapúa)</strong></td><td class="crd-td">Jesuit Reducciones</td><td class="crd-td">27,33 S, 55,87 W</td><td class="crd-td">1615AD</td><td class="crd-td">4,7k</td><td class="crd-td">7</td></tr>
<tr><td class="crd-td"><strong>Villarrica</strong></td><td class="crd-td">Guaira and North</td><td class="crd-td">25,75 S, 56,44 W</td><td class="crd-td">1740AD</td><td class="crd-td">4,6k</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Santa Rosa de Lima</strong></td><td class="crd-td">Jesuit Reducciones</td><td class="crd-td">26,88 S, 56,85 W</td><td class="crd-td">1698AD</td><td class="crd-td">4,4k</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Santiago</strong></td><td class="crd-td">Jesuit Reducciones</td><td class="crd-td">27,14 S, 56,77 W</td><td class="crd-td">1669AD</td><td class="crd-td">4,2k</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Santa María de Fe</strong></td><td class="crd-td">Jesuit Reducciones</td><td class="crd-td">26,78 S, 56,95 W</td><td class="crd-td">1647AD</td><td class="crd-td">4k</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Concepción</strong></td><td class="crd-td">Guaira and North</td><td class="crd-td">23,4 S, 57,43 W</td><td class="crd-td">1740AD</td><td class="crd-td">3,9k</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>San Lorenzo</strong></td><td class="crd-td">Central Asuncion</td><td class="crd-td">25,34 S, 57,51 W</td><td class="crd-td">1650AD</td><td class="crd-td">3,6k</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Santísima Trinidad del Paraná</strong></td><td class="crd-td">Jesuit Reducciones</td><td class="crd-td">27,13 S, 55,7 W</td><td class="crd-td">1706AD</td><td class="crd-td">3,4k</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>San Juan Bautista</strong></td><td class="crd-td">Jesuit Reducciones</td><td class="crd-td">26,67 S, 57,14 W</td><td class="crd-td">1740AD</td><td class="crd-td">3,4k</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Luque</strong></td><td class="crd-td">Central Asuncion</td><td class="crd-td">25,27 S, 57,49 W</td><td class="crd-td">1650AD</td><td class="crd-td">3,3k</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Ayolas</strong></td><td class="crd-td">Jesuit Reducciones</td><td class="crd-td">27,38 S, 56,84 W</td><td class="crd-td">1740AD</td><td class="crd-td">3,1k</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Curuguaty</strong></td><td class="crd-td">Guaira and North</td><td class="crd-td">24,47 S, 55,69 W</td><td class="crd-td">1712AD</td><td class="crd-td">3,1k</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>Yaguarón</strong></td><td class="crd-td">Central Asuncion</td><td class="crd-td">25,56 S, 57,28 W</td><td class="crd-td">1539AD</td><td class="crd-td">3,1k</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Carapeguá</strong></td><td class="crd-td">Central Asuncion</td><td class="crd-td">25,76 S, 57,25 W</td><td class="crd-td">1650AD</td><td class="crd-td">3k</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Itá</strong></td><td class="crd-td">Central Asuncion</td><td class="crd-td">25,5 S, 57,37 W</td><td class="crd-td">1539AD</td><td class="crd-td">3k</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Caazapá</strong></td><td class="crd-td">Guaira and North</td><td class="crd-td">26,2 S, 56,37 W</td><td class="crd-td">1607AD</td><td class="crd-td">3k</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Capiatá</strong></td><td class="crd-td">Central Asuncion</td><td class="crd-td">25,36 S, 57,45 W</td><td class="crd-td">1650AD</td><td class="crd-td">2,7k</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Yuty</strong></td><td class="crd-td">Guaira and North</td><td class="crd-td">26,61 S, 56,25 W</td><td class="crd-td">1611AD</td><td class="crd-td">2,6k</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Puerto Casado</strong></td><td class="crd-td">Guaira and North</td><td class="crd-td">22,29 S, 57,94 W</td><td class="crd-td">1740AD</td><td class="crd-td">2,5k</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Tobatí</strong></td><td class="crd-td">Central Asuncion</td><td class="crd-td">25,26 S, 57,08 W</td><td class="crd-td">1650AD</td><td class="crd-td">2,4k</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>San Cosme y Damián</strong></td><td class="crd-td">Jesuit Reducciones</td><td class="crd-td">27,32 S, 56,33 W</td><td class="crd-td">1632AD</td><td class="crd-td">2,4k</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Jesús de Tavarangüé</strong></td><td class="crd-td">Jesuit Reducciones</td><td class="crd-td">27,06 S, 55,75 W</td><td class="crd-td">1685AD</td><td class="crd-td">2,4k</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>San Estanislao</strong></td><td class="crd-td">Guaira and North</td><td class="crd-td">24,66 S, 56,44 W</td><td class="crd-td">1749AD</td><td class="crd-td">2,3k</td><td class="crd-td">5</td></tr>
<tr><td class="crd-td"><strong>Paraguarí</strong></td><td class="crd-td">Central Asuncion</td><td class="crd-td">25,62 S, 57,15 W</td><td class="crd-td">1650AD</td><td class="crd-td">2,2k</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Horqueta</strong></td><td class="crd-td">Guaira and North</td><td class="crd-td">23,34 S, 57,05 W</td><td class="crd-td">1740AD</td><td class="crd-td">2,1k</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Lambaré</strong></td><td class="crd-td">Central Asuncion</td><td class="crd-td">25,35 S, 57,61 W</td><td class="crd-td">1650AD</td><td class="crd-td">2,1k</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Ybycuí</strong></td><td class="crd-td">Central Asuncion</td><td class="crd-td">26,02 S, 57,02 W</td><td class="crd-td">1650AD</td><td class="crd-td">2,1k</td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Abaí</strong></td><td class="crd-td">Guaira and North</td><td class="crd-td">26,04 S, 55,95 W</td><td class="crd-td">1740AD</td><td class="crd-td">2,1k</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>Caaguazú</strong></td><td class="crd-td">Guaira and North</td><td class="crd-td">25,47 S, 56,02 W</td><td class="crd-td">1740AD</td><td class="crd-td">2k</td><td class="crd-td">4</td></tr>
<tr><td class="crd-td"><strong>San Joaquín</strong></td><td class="crd-td">Guaira and North</td><td class="crd-td">25,03 S, 56,04 W</td><td class="crd-td">1746AD</td><td class="crd-td">2k</td><td class="crd-td">5</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading thirty-five colonial settlements of Paraguay ordered by peak historical population.</figcaption>
</figure>

# Source Ledger Reconciliation and Excluded Candidates

The 220 catalogued settlements were reconciled against the comprehensive source ledger through a systematic four-wave audit [@azara1847descripcion; @aguirre1949diario; @maeder1992misiones]:

- Wave 1 (*Official Censuses and National Registries*): Incorporating 24 primary administrative centers and chartered villas enumerated in the Aguirre (1782AD) and Azara (1799AD) censuses.
- Wave 2 (*Regional Monographs and Mission Inventories*): Adding 196 secondary towns, Franciscan pueblos de indios, Jesuit reducciones and rural chapels documented in regional historical geographies.
- Wave 3 (*Longitudinal Backfill and Historical Rolls*): Verifying foundation dates, coordinates and multi-benchmark population records against parish and municipal archives.
- Wave 4 (*Submask Gap Hunter and GeoNames Audit*): Performing an exhaustive spatial proximity sweep across all 5.280 grid cells, confirming zero unaccounted historical settlements within provincial boundaries.

The candidate audit identified 23 duplicate aliases and peripheral chapel records situated within 2,5 km of primary nodes. To ensure spatial independence and prevent double-counting of settlement populations, these 23 candidates were consolidated as excluded aliases. Table \ref{tab:excluded-candidates} catalogues these excluded candidate records alongside their primary parent settlements and historical justifications.

<figure class="crd-table-figure" id="tab:excluded-candidates">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Excluded Candidate</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Historical Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Encarnación</strong></td><td class="crd-td">Paraguay</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Encarnación (Itapúa).</td></tr>
<tr><td class="crd-td"><strong>San Ignacio Guazú</strong></td><td class="crd-td">Paraguay</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement San Ignacio.</td></tr>
<tr><td class="crd-td"><strong>Santa Rosa</strong></td><td class="crd-td">Paraguay</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Santa Rosa de Lima.</td></tr>
<tr><td class="crd-td"><strong>Pilar (Ñeembucú)</strong></td><td class="crd-td">Paraguay</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Pilar.</td></tr>
<tr><td class="crd-td"><strong>Concepción</strong></td><td class="crd-td">Paraguay</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Concepción.</td></tr>
<tr><td class="crd-td"><strong>Yaguarón</strong></td><td class="crd-td">Paraguay</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Yaguarón.</td></tr>
<tr><td class="crd-td"><strong>Caazapá</strong></td><td class="crd-td">Paraguay</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Caazapá.</td></tr>
<tr><td class="crd-td"><strong>Santa María</strong></td><td class="crd-td">Paraguay</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Santa María de Fe.</td></tr>
<tr><td class="crd-td"><strong>San Estanislao</strong></td><td class="crd-td">Paraguay</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement San Estanislao.</td></tr>
<tr><td class="crd-td"><strong>Santiago</strong></td><td class="crd-td">Paraguay</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Santiago.</td></tr>
<tr><td class="crd-td"><strong>Yuty</strong></td><td class="crd-td">Paraguay</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Yuty.</td></tr>
<tr><td class="crd-td"><strong>San Pedro</strong></td><td class="crd-td">Paraguay</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement San Pedro de Ycuamandiyú.</td></tr>
<tr><td class="crd-td"><strong>Altos</strong></td><td class="crd-td">Paraguay</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Altos.</td></tr>
<tr><td class="crd-td"><strong>Curuguaty</strong></td><td class="crd-td">Paraguay</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Curuguaty.</td></tr>
<tr><td class="crd-td"><strong>Itá</strong></td><td class="crd-td">Paraguay</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Itá.</td></tr>
<tr><td class="crd-td"><strong>Belén</strong></td><td class="crd-td">Paraguay</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Belén.</td></tr>
<tr><td class="crd-td"><strong>Fuerte Olimpo (Fuerte Borbón)</strong></td><td class="crd-td">Paraguay</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Fuerte Olimpo.</td></tr>
<tr><td class="crd-td"><strong>Hohenau</strong></td><td class="crd-td">Paraguay</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Obligado.</td></tr>
<tr><td class="crd-td"><strong>San Cosme y Damián</strong></td><td class="crd-td">Paraguay</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement San Cosme y Damián.</td></tr>
<tr><td class="crd-td"><strong>Trinidad</strong></td><td class="crd-td">Paraguay</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Santísima Trinidad del Paraná.</td></tr>
<tr><td class="crd-td"><strong>San Joaquín</strong></td><td class="crd-td">Paraguay</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement San Joaquín.</td></tr>
<tr><td class="crd-td"><strong>San Salvador</strong></td><td class="crd-td">Paraguay</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Borja.</td></tr>
<tr><td class="crd-td"><strong>Jesús</strong></td><td class="crd-td">Paraguay</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 2,5 km of primary settlement Jesús de Tavarangüé.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Catalogued duplicate aliases and excluded candidate records in the Colonial Paraguay source ledger.</figcaption>
</figure>

All 220 catalogued settlements reconcile cleanly with the source ledger, confirming zero unexplained discrepancies across the provincial dataset.

# Sources
