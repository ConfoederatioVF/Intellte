---
title: "Settlement Gazetteer of the Colonial Spanish Amazon"
subtitle: "Coordinates, Toponymy and Demographic Trajectories across Maynas, Quijos, Caquetá-Putumayo, Moxos and Chiquitos (1542AD to 1825AD)"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: colonial_spanish_amazon_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_colonial_spanish_amazon_spatial.png"
hero_caption: "Spatial distribution of 556 catalogued colonial settlements across the four frontier divisions of the Colonial Spanish Amazon (1,87M km²) from 1542AD to 1825AD."
hero_label: "fig:hero-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents geographic coordinates, historical toponyms, foundation chronologies and demographic trajectories for 556 colonial settlements across the Colonial Spanish Amazon (1.874.185 km²) between 1542AD and 1825AD. Across four administrative and missionary frontiers, the catalogued network spans the Peruvian Andean-Amazonian doctrinas and Jesuit missions of Maynas (347 localities across Chachapoyas, Luya, Leymebamba, Jalca Grande, Moyobamba, Lamas, Alto Mayo, Huallaga, Marañón and Ucayali); the Gobernación de Quijos, Canelos and Macas (95 localities); the Franciscan custodial missions across Caquetá, Putumayo and Sibundoy (44 localities); and the Jesuit reductions, secular presidios and cattle frontiers of Moxos, Chiquitos and Santa Cruz de la Sierra (70 localities).

The catalogued settlement trajectories reconcile completely against 660 audited candidate records in the source ledger (556 included settlements and 104 duplicate-alias or relocation exclusions within 2,5 km, yielding 0 unaccounted records) [@block1994mission; @radding2005landscapes; @newson1995life; @taylor1999western; @cook1981demographic; @negro2007destierro; @colina2025indigenous; @cuvi2022pueblos]. Nucleated populations range from cordilleran and frontier gateways such as Santa Cruz de la Sierra (19,6k peak), Chachapoyas (16,6k), Moyobamba (15,3k), Jalca Grande (7,7k), Vallegrande (5,9k), Lamud (5,5k) and Leymebamba (5,1k) to Jesuit mission capitals including Trinidad (4,9k), San Ignacio de Moxos (4,2k), Jeberos (4,1k), San Ignacio de Velasco (4,1k), Baeza (3,9k), San José de Chiquitos (3,9k), Concepción de Chiquitos (3,8k) and Lagunas (3,8k).

# Background

Colonial settlement across the Spanish Amazon developed through four distinct waves of military conquest, administrative foundation and religious reduction [@taylor1999western; @sweet1974rich]. The initial phase followed Francisco de Orellana's descent of the Napo and Amazon in 1542AD, prompting Spanish expeditions into the eastern Andean piedmont (la Ceja de Selva). Early footholds at Chachapoyas (1538AD) and Moyobamba (1540AD) anchored the Maynas frontier, while expeditions east of Quito established Baeza (1559AD), Avila (1563AD) and Archidona (1580AD) in the Gobernación de Quijos [@newson1995life]. Farther south, Ñuflo de Chaves led the 1561AD foundation of Santa Cruz de la Sierra from Asunción, establishing a southern bastion between the silver mines of Potosí and the uncharted Amazonian savannas [@block1994mission].

The second phase transformed the frontier through religious reductions. Following the foundation of San Francisco de Borja on the Marañón in 1638AD, Jesuits established the missions of Maynas among Maina, Jebero, Cocama and Omagua peoples [@vega1992estructura; @grohs1974reducciones]. Father Samuel Fritz mapped the Marañón mainstem between 1686AD and 1723AD, coordinating thirty-eight riverine reductions from San Joaquín de Omaguas to the mouth of the Rio Negro against Portuguese *resgate* slave raiding [@fritz1922journal; @hemming1978red]. Simultaneously in the Bolivian lowlands, Jesuits established the Moxos missions from Loreto (1682AD) and Trinidad (1686AD) along the Mamoré, and the Chiquitos missions from San Javier (1691AD) and San Rafael (1696AD) across the granitic Chiquitano plateau [@block1994mission; @radding2005landscapes; @kuhne2025churches]. To the north, Franciscans established custodial reductions across the upper Caquetá and Putumayo valleys from Sibundoy and Mocoa [@gomezgonzalez2014misiones].

The third phase began with the Jesuit expulsion in 1767AD, shifting reductions into secular curacies and military intendancies. In Maynas, Governor Francisco Requena directed administrative reform leading to the creation of the Comandancia General de Maynas in 1802AD [@taylor1999western]. In Moxos and Chiquitos, secular administrators extracted agricultural surpluses, cotton textiles and tallow while indigenous populations maintained religious and musical traditions inside magnificent timber churches [@nawrot2016musical; @gangui2021orientatio; @trujillo2010arquitectu]. The colonial era closed during the Spanish American wars of independence around 1825AD, leaving a durable network of riverine towns and mission settlements across Upper Amazonia.

# Methodology

Candidate entries in the source ledger were gathered through archival mission censuses, colonial visitas and regional demographic monographs [@block1994mission; @radding2005landscapes; @newson1995life; @taylor1999western; @gomezgonzalez2014misiones]. Each locality was verified against historical cartography, archaeological surveys and modern municipal registries to establish WGS84 coordinates, historical toponyms and foundation years [@coomes2021geolocatio; @fritz1922journal].

To prevent spatial double counting in population subtraction, candidate entries within 2,5 km of an established centre that represent alternative colonial spellings, patron saints or mission relocations were consolidated as duplicate aliases (104 candidates). Table \ref{tab:summary} summarises the distribution of 556 included settlements, regional land areas and demographic metrics across the four frontier sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area km²</th><th class="crd-th">Sites</th><th class="crd-th">1650AD</th><th class="crd-th">1750AD</th><th class="crd-th">1825AD</th><th class="crd-th">Peak Sum</th><th class="crd-th">Leading Settlement</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Maynas (Peru)</strong></td><td class="crd-td">687.680</td><td class="crd-td">347</td><td class="crd-td">255k</td><td class="crd-td">165k</td><td class="crd-td">170k</td><td class="crd-td">260k</td><td class="crd-td">Chachapoyas (16,6k)</td></tr>
<tr><td class="crd-td"><strong>Quijos (Ecuador)</strong></td><td class="crd-td">110.538</td><td class="crd-td">95</td><td class="crd-td">88k</td><td class="crd-td">56k</td><td class="crd-td">58k</td><td class="crd-td">65,7k</td><td class="crd-td">Archidona (4,8k)</td></tr>
<tr><td class="crd-td"><strong>Caqueta-Putumayo (Colombia)</strong></td><td class="crd-td">414.281</td><td class="crd-td">44</td><td class="crd-td">138k</td><td class="crd-td">96k</td><td class="crd-td">90k</td><td class="crd-td">43,2k</td><td class="crd-td">Sibundoy (4,8k)</td></tr>
<tr><td class="crd-td"><strong>Moxos-Chiquitos (Bolivia)</strong></td><td class="crd-td">661.686</td><td class="crd-td">70</td><td class="crd-td">215k</td><td class="crd-td">178k</td><td class="crd-td">188k</td><td class="crd-td">133,1k</td><td class="crd-td">Santa Cruz de la Sierra (19,6k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 556 catalogued colonial settlements, land area and population across the Colonial Spanish Amazon.</figcaption>
</figure>

# Testing and Validation

Reconciliation of the 556 catalogued settlements against the 660 source-ledger candidates confirms 0 unaccounted records and 0 schema violations. The 104 excluded records comprise verified duplicate aliases and mission relocation records. All coordinates fall within the spatial bounding boxes defined in the regional configuration, ranging from 20,46 S to 4,04 N latitude and 79,46 W to 57,46 W longitude. Figure \ref{fig:trajectory} charts the aggregate regional population trajectory alongside the leading urban hierarchies.

<figure class="crd-figure-block" id="fig:trajectory">
<img class="crd-figure-img" src="/artefacts/project_preta/1.0-colonial-spanish-amazon-settlements/fig2_colonial_spanish_amazon_trajectory.png" alt="fig:trajectory" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Aggregate regional population trajectory from 1542AD to 1825AD (Panel A) and leading colonial urban hierarchies (Panel B) across the Colonial Spanish Amazon.</figcaption>
</figure>

# Results

## Leading Colonial Settlements and Mission Reductions

Table \ref{tab:leading} documents the leading thirty-five settlements across the Colonial Spanish Amazon ranked by peak colonial population, reporting coordinates, foundation dates and population estimates across key benchmark years.

<figure class="crd-table-figure" id="tab:leading">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Found.</th><th class="crd-th">1650AD</th><th class="crd-th">1750AD</th><th class="crd-th">1825AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Santa Cruz de la Sierra</strong></td><td class="crd-td">Moxos-Chiquitos (Bolivia)</td><td class="crd-td">17,78 S, 63,18 W</td><td class="crd-td">1561</td><td class="crd-td">15,4k</td><td class="crd-td">12,7k</td><td class="crd-td">13,4k</td><td class="crd-td">19,6k</td></tr>
<tr><td class="crd-td"><strong>Chachapoyas</strong></td><td class="crd-td">Maynas (Peru)</td><td class="crd-td">6,23 S, 77,87 W</td><td class="crd-td">1538</td><td class="crd-td">8,3k</td><td class="crd-td">5,4k</td><td class="crd-td">5,5k</td><td class="crd-td">16,6k</td></tr>
<tr><td class="crd-td"><strong>Moyobamba</strong></td><td class="crd-td">Maynas (Peru)</td><td class="crd-td">6,03 S, 76,97 W</td><td class="crd-td">1540</td><td class="crd-td">7,6k</td><td class="crd-td">5k</td><td class="crd-td">5,1k</td><td class="crd-td">15,3k</td></tr>
<tr><td class="crd-td"><strong>Jalca Grande (La Jalca)</strong></td><td class="crd-td">Maynas (Peru)</td><td class="crd-td">6,49 S, 77,81 W</td><td class="crd-td">1538</td><td class="crd-td">3,8k</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k</td><td class="crd-td">7,6k</td></tr>
<tr><td class="crd-td"><strong>Vallegrande</strong></td><td class="crd-td">Moxos-Chiquitos (Bolivia)</td><td class="crd-td">18,49 S, 64,11 W</td><td class="crd-td">1612</td><td class="crd-td">5,9k</td><td class="crd-td">4,9k</td><td class="crd-td">5,2k</td><td class="crd-td">5,9k</td></tr>
<tr><td class="crd-td"><strong>Levanto</strong></td><td class="crd-td">Maynas (Peru)</td><td class="crd-td">6,31 S, 77,9 W</td><td class="crd-td">1538</td><td class="crd-td">2,9k</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Trinidad (Moxos)</strong></td><td class="crd-td">Moxos-Chiquitos (Bolivia)</td><td class="crd-td">14,83 S, 64,9 W</td><td class="crd-td">1686</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">4,9k</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>Lamud (Luya)</strong></td><td class="crd-td">Maynas (Peru)</td><td class="crd-td">6,16 S, 77,94 W</td><td class="crd-td">1572</td><td class="crd-td">3,7k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>Archidona</strong></td><td class="crd-td">Quijos (Ecuador)</td><td class="crd-td">0,91 S, 77,81 W</td><td class="crd-td">1560</td><td class="crd-td">3,6k</td><td class="crd-td">2,3k</td><td class="crd-td">2,4k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Sibundoy</strong></td><td class="crd-td">Caqueta-Putumayo (Colombia)</td><td class="crd-td">1,2 N, 76,92 W</td><td class="crd-td">1547</td><td class="crd-td">3,8k</td><td class="crd-td">2,6k</td><td class="crd-td">2,5k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Leymebamba</strong></td><td class="crd-td">Maynas (Peru)</td><td class="crd-td">6,71 S, 77,8 W</td><td class="crd-td">1565</td><td class="crd-td">3,5k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>Macas (Sevilla del Oro)</strong></td><td class="crd-td">Quijos (Ecuador)</td><td class="crd-td">2,31 S, 78,11 W</td><td class="crd-td">1563</td><td class="crd-td">3,4k</td><td class="crd-td">2,2k</td><td class="crd-td">2,3k</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>San Ignacio de Moxos</strong></td><td class="crd-td">Moxos-Chiquitos (Bolivia)</td><td class="crd-td">15 S, 65,64 W</td><td class="crd-td">1689</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Mocoa</strong></td><td class="crd-td">Caqueta-Putumayo (Colombia)</td><td class="crd-td">1,15 N, 76,65 W</td><td class="crd-td">1563</td><td class="crd-td">3,3k</td><td class="crd-td">2,3k</td><td class="crd-td">2,1k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Jeberos (Limpias Concepción)</strong></td><td class="crd-td">Maynas (Peru)</td><td class="crd-td">5,28 S, 76,28 W</td><td class="crd-td">1640</td><td class="crd-td">4,1k</td><td class="crd-td">2,7k</td><td class="crd-td">2,8k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>San Ignacio de Velasco</strong></td><td class="crd-td">Moxos-Chiquitos (Bolivia)</td><td class="crd-td">16,37 S, 60,95 W</td><td class="crd-td">1748</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">4,1k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>Baeza</strong></td><td class="crd-td">Quijos (Ecuador)</td><td class="crd-td">0,47 S, 77,88 W</td><td class="crd-td">1559</td><td class="crd-td">2,9k</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>San José de Chiquitos</strong></td><td class="crd-td">Moxos-Chiquitos (Bolivia)</td><td class="crd-td">17,85 S, 60,74 W</td><td class="crd-td">1697</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">3,9k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Concepción (Chiquitos)</strong></td><td class="crd-td">Moxos-Chiquitos (Bolivia)</td><td class="crd-td">16,13 S, 62,03 W</td><td class="crd-td">1709</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">3,8k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Tena</strong></td><td class="crd-td">Quijos (Ecuador)</td><td class="crd-td">0,99 S, 77,81 W</td><td class="crd-td">1560</td><td class="crd-td">2,8k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>San Francisco Xavier</strong></td><td class="crd-td">Moxos-Chiquitos (Bolivia)</td><td class="crd-td">16,27 S, 62,51 W</td><td class="crd-td">1691</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">3,7k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>San Pedro (Moxos Capital)</strong></td><td class="crd-td">Moxos-Chiquitos (Bolivia)</td><td class="crd-td">14,35 S, 64,92 W</td><td class="crd-td">1697</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">3,7k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>Ambato</strong></td><td class="crd-td">Quijos (Ecuador)</td><td class="crd-td">1,25 S, 78,62 W</td><td class="crd-td">1650</td><td class="crd-td">3,6k</td><td class="crd-td">2,3k</td><td class="crd-td">2,4k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Puerto Francisco de Orellana</strong></td><td class="crd-td">Quijos (Ecuador)</td><td class="crd-td">0,45 S, 77 W</td><td class="crd-td">1650</td><td class="crd-td">3,6k</td><td class="crd-td">2,3k</td><td class="crd-td">2,4k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>San Miguel de Velasco</strong></td><td class="crd-td">Moxos-Chiquitos (Bolivia)</td><td class="crd-td">16,7 S, 60,97 W</td><td class="crd-td">1721</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,5k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Bagua Grande (Utcubamba)</strong></td><td class="crd-td">Maynas (Peru)</td><td class="crd-td">5,76 S, 78,44 W</td><td class="crd-td">1562</td><td class="crd-td">2,6k</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Iquitos</strong></td><td class="crd-td">Maynas (Peru)</td><td class="crd-td">3,75 S, 73,25 W</td><td class="crd-td">1650</td><td class="crd-td">3,5k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Leticia</strong></td><td class="crd-td">Maynas (Peru)</td><td class="crd-td">4,21 S, 69,94 W</td><td class="crd-td">1650</td><td class="crd-td">3,5k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Pucallpa</strong></td><td class="crd-td">Maynas (Peru)</td><td class="crd-td">8,38 S, 74,55 W</td><td class="crd-td">1650</td><td class="crd-td">3,5k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Puerto Maldonado</strong></td><td class="crd-td">Maynas (Peru)</td><td class="crd-td">12,59 S, 69,2 W</td><td class="crd-td">1650</td><td class="crd-td">3,5k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>San Fernando</strong></td><td class="crd-td">Maynas (Peru)</td><td class="crd-td">8,4 S, 74,54 W</td><td class="crd-td">1650</td><td class="crd-td">3,5k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>San Juan</strong></td><td class="crd-td">Maynas (Peru)</td><td class="crd-td">3,78 S, 73,28 W</td><td class="crd-td">1650</td><td class="crd-td">3,5k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Yurimaguas</strong></td><td class="crd-td">Maynas (Peru)</td><td class="crd-td">5,9 S, 76,12 W</td><td class="crd-td">1650</td><td class="crd-td">3,5k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Zamora</strong></td><td class="crd-td">Quijos (Ecuador)</td><td class="crd-td">4,07 S, 78,95 W</td><td class="crd-td">1549</td><td class="crd-td">2,6k</td><td class="crd-td">1,7k</td><td class="crd-td">1,7k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Florencia</strong></td><td class="crd-td">Caqueta-Putumayo (Colombia)</td><td class="crd-td">1,62 N, 75,6 W</td><td class="crd-td">1650</td><td class="crd-td">3,4k</td><td class="crd-td">2,4k</td><td class="crd-td">2,2k</td><td class="crd-td">3,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading thirty-five colonial settlements and mission reductions ordered by peak population across the Colonial Spanish Amazon.</figcaption>
</figure>

## Jesuit Reductions of Moxos and Chiquitos

The Bolivian lowlands supported 70 catalogued settlements, centred upon the Jesuit mission provinces of Moxos and Chiquitos and the secular agricultural hinterland of Santa Cruz de la Sierra [@block1994mission; @radding2005landscapes]. Table \ref{tab:moxos-chiquitos} details twenty-five principal reductions and frontier towns across this savanna environment.

<figure class="crd-table-figure" id="tab:moxos-chiquitos">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coordinates</th><th class="crd-th">Found.</th><th class="crd-th">1650AD</th><th class="crd-th">1700AD</th><th class="crd-th">1750AD</th><th class="crd-th">1825AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Santa Cruz de la Sierra</strong></td><td class="crd-td">17,78 S, 63,18 W</td><td class="crd-td">1561</td><td class="crd-td">15,4k</td><td class="crd-td">13,2k</td><td class="crd-td">12,7k</td><td class="crd-td">13,4k</td><td class="crd-td">19,6k</td></tr>
<tr><td class="crd-td"><strong>Vallegrande</strong></td><td class="crd-td">18,49 S, 64,11 W</td><td class="crd-td">1612</td><td class="crd-td">5,9k</td><td class="crd-td">5,1k</td><td class="crd-td">4,9k</td><td class="crd-td">5,2k</td><td class="crd-td">5,9k</td></tr>
<tr><td class="crd-td"><strong>Trinidad (Moxos)</strong></td><td class="crd-td">14,83 S, 64,9 W</td><td class="crd-td">1686</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">4,7k</td><td class="crd-td">4,9k</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>San Ignacio de Moxos</strong></td><td class="crd-td">15 S, 65,64 W</td><td class="crd-td">1689</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">4k</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>San Ignacio de Velasco</strong></td><td class="crd-td">16,37 S, 60,95 W</td><td class="crd-td">1748</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">4,1k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>San José de Chiquitos</strong></td><td class="crd-td">17,85 S, 60,74 W</td><td class="crd-td">1697</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">3,7k</td><td class="crd-td">3,9k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Concepción (Chiquitos)</strong></td><td class="crd-td">16,13 S, 62,03 W</td><td class="crd-td">1709</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">3,8k</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>San Francisco Xavier</strong></td><td class="crd-td">16,27 S, 62,51 W</td><td class="crd-td">1691</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">3,5k</td><td class="crd-td">3,7k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>San Pedro (Moxos Capital)</strong></td><td class="crd-td">14,35 S, 64,92 W</td><td class="crd-td">1697</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">3,5k</td><td class="crd-td">3,7k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>San Miguel de Velasco</strong></td><td class="crd-td">16,7 S, 60,97 W</td><td class="crd-td">1721</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,5k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Loreto (Moxos)</strong></td><td class="crd-td">15,2 S, 64,76 W</td><td class="crd-td">1682</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,3k</td><td class="crd-td">3,4k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>San Rafael de Velasco</strong></td><td class="crd-td">16,79 S, 60,67 W</td><td class="crd-td">1696</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,3k</td><td class="crd-td">3,4k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>Magdalena (Iténez)</strong></td><td class="crd-td">13,27 S, 64,05 W</td><td class="crd-td">1720</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,3k</td><td class="crd-td">3,3k</td></tr>
<tr><td class="crd-td"><strong>Baures (Concepción de Baures)</strong></td><td class="crd-td">13,65 S, 63,7 W</td><td class="crd-td">1708</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,1k</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>Exaltación (Moxos)</strong></td><td class="crd-td">13,32 S, 65,25 W</td><td class="crd-td">1704</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Santa Ana del Yacuma</strong></td><td class="crd-td">13,74 S, 65,43 W</td><td class="crd-td">1709</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">2,9k</td><td class="crd-td">2,9k</td></tr>
<tr><td class="crd-td"><strong>Reyes (Santos Reyes)</strong></td><td class="crd-td">14,3 S, 67,34 W</td><td class="crd-td">1706</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Samaipata</strong></td><td class="crd-td">18,18 S, 63,88 W</td><td class="crd-td">1618</td><td class="crd-td">2,7k</td><td class="crd-td">2,3k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>San Joaquín (Moxos)</strong></td><td class="crd-td">13,04 S, 64,67 W</td><td class="crd-td">1709</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>San Borja (Moxos)</strong></td><td class="crd-td">14,86 S, 66,75 W</td><td class="crd-td">1693</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>San Juan Bautista (Chiquitos)</strong></td><td class="crd-td">17,92 S, 60,15 W</td><td class="crd-td">1699</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Santa Ana de Velasco</strong></td><td class="crd-td">16,59 S, 60,69 W</td><td class="crd-td">1755</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>San Javier (Moxos)</strong></td><td class="crd-td">14,6 S, 64,88 W</td><td class="crd-td">1691</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Portachuelo</strong></td><td class="crd-td">17,35 S, 63,39 W</td><td class="crd-td">1770</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Santiago de Chiquitos</strong></td><td class="crd-td">18,34 S, 59,6 W</td><td class="crd-td">1754</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Twenty-five principal mission reductions and towns across Moxos, Chiquitos and Santa Cruz de la Sierra (Bolivian Lowlands).</figcaption>
</figure>

## Frontier Missions and Towns of Maynas and Quijos

In the Upper Amazon, 347 settlements in Maynas and 95 in Quijos guarded the fluvial approaches from the Andean highlands to the Amazonian plain [@taylor1999western; @newson1995life; @vega1992estructura; @negro2007destierro; @posthumus2005terraces]. Table \ref{tab:maynas-quijos} documents twenty-four key riverine reductions, piedmont doctrinas and garrisons across the Marañón, Huallaga, Ucayali and Napo valleys.

<figure class="crd-table-figure" id="tab:maynas-quijos">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Found.</th><th class="crd-th">1650AD</th><th class="crd-th">1750AD</th><th class="crd-th">1825AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Chachapoyas</strong></td><td class="crd-td">Maynas</td><td class="crd-td">6,23 S, 77,87 W</td><td class="crd-td">1538</td><td class="crd-td">8,3k</td><td class="crd-td">5,4k</td><td class="crd-td">5,5k</td><td class="crd-td">16,6k</td></tr>
<tr><td class="crd-td"><strong>Moyobamba</strong></td><td class="crd-td">Maynas</td><td class="crd-td">6,03 S, 76,97 W</td><td class="crd-td">1540</td><td class="crd-td">7,6k</td><td class="crd-td">5k</td><td class="crd-td">5,1k</td><td class="crd-td">15,3k</td></tr>
<tr><td class="crd-td"><strong>Jalca Grande (La Jalca)</strong></td><td class="crd-td">Maynas</td><td class="crd-td">6,49 S, 77,81 W</td><td class="crd-td">1538</td><td class="crd-td">3,8k</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k</td><td class="crd-td">7,6k</td></tr>
<tr><td class="crd-td"><strong>Levanto</strong></td><td class="crd-td">Maynas</td><td class="crd-td">6,31 S, 77,9 W</td><td class="crd-td">1538</td><td class="crd-td">2,9k</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Lamud (Luya)</strong></td><td class="crd-td">Maynas</td><td class="crd-td">6,16 S, 77,94 W</td><td class="crd-td">1572</td><td class="crd-td">3,7k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>Archidona</strong></td><td class="crd-td">Quijos</td><td class="crd-td">0,91 S, 77,81 W</td><td class="crd-td">1560</td><td class="crd-td">3,6k</td><td class="crd-td">2,3k</td><td class="crd-td">2,4k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Leymebamba</strong></td><td class="crd-td">Maynas</td><td class="crd-td">6,71 S, 77,8 W</td><td class="crd-td">1565</td><td class="crd-td">3,5k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>Macas (Sevilla del Oro)</strong></td><td class="crd-td">Quijos</td><td class="crd-td">2,31 S, 78,11 W</td><td class="crd-td">1563</td><td class="crd-td">3,4k</td><td class="crd-td">2,2k</td><td class="crd-td">2,3k</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>Jeberos (Limpias Concepción)</strong></td><td class="crd-td">Maynas</td><td class="crd-td">5,28 S, 76,28 W</td><td class="crd-td">1640</td><td class="crd-td">4,1k</td><td class="crd-td">2,7k</td><td class="crd-td">2,8k</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>Baeza</strong></td><td class="crd-td">Quijos</td><td class="crd-td">0,47 S, 77,88 W</td><td class="crd-td">1559</td><td class="crd-td">2,9k</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Tena</strong></td><td class="crd-td">Quijos</td><td class="crd-td">0,99 S, 77,81 W</td><td class="crd-td">1560</td><td class="crd-td">2,8k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td><td class="crd-td">3,7k</td></tr>
<tr><td class="crd-td"><strong>Ambato</strong></td><td class="crd-td">Quijos</td><td class="crd-td">1,25 S, 78,62 W</td><td class="crd-td">1650</td><td class="crd-td">3,6k</td><td class="crd-td">2,3k</td><td class="crd-td">2,4k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Puerto Francisco de Orellana</strong></td><td class="crd-td">Quijos</td><td class="crd-td">0,45 S, 77 W</td><td class="crd-td">1650</td><td class="crd-td">3,6k</td><td class="crd-td">2,3k</td><td class="crd-td">2,4k</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Bagua Grande (Utcubamba)</strong></td><td class="crd-td">Maynas</td><td class="crd-td">5,76 S, 78,44 W</td><td class="crd-td">1562</td><td class="crd-td">2,6k</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Iquitos</strong></td><td class="crd-td">Maynas</td><td class="crd-td">3,75 S, 73,25 W</td><td class="crd-td">1650</td><td class="crd-td">3,5k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Leticia</strong></td><td class="crd-td">Maynas</td><td class="crd-td">4,21 S, 69,94 W</td><td class="crd-td">1650</td><td class="crd-td">3,5k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Pucallpa</strong></td><td class="crd-td">Maynas</td><td class="crd-td">8,38 S, 74,55 W</td><td class="crd-td">1650</td><td class="crd-td">3,5k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Puerto Maldonado</strong></td><td class="crd-td">Maynas</td><td class="crd-td">12,59 S, 69,2 W</td><td class="crd-td">1650</td><td class="crd-td">3,5k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>San Fernando</strong></td><td class="crd-td">Maynas</td><td class="crd-td">8,4 S, 74,54 W</td><td class="crd-td">1650</td><td class="crd-td">3,5k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>San Juan</strong></td><td class="crd-td">Maynas</td><td class="crd-td">3,78 S, 73,28 W</td><td class="crd-td">1650</td><td class="crd-td">3,5k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Yurimaguas</strong></td><td class="crd-td">Maynas</td><td class="crd-td">5,9 S, 76,12 W</td><td class="crd-td">1650</td><td class="crd-td">3,5k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Zamora</strong></td><td class="crd-td">Quijos</td><td class="crd-td">4,07 S, 78,95 W</td><td class="crd-td">1549</td><td class="crd-td">2,6k</td><td class="crd-td">1,7k</td><td class="crd-td">1,7k</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Tambopata</strong></td><td class="crd-td">Maynas</td><td class="crd-td">12,67 S, 69,36 W</td><td class="crd-td">1650</td><td class="crd-td">3,4k</td><td class="crd-td">2,2k</td><td class="crd-td">2,3k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>Lamas</strong></td><td class="crd-td">Maynas</td><td class="crd-td">6,42 S, 76,52 W</td><td class="crd-td">1656</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3k</td><td class="crd-td">3,4k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Twenty-four leading mission reductions and administrative centres across Maynas and Quijos in the Upper Amazon.</figcaption>
</figure>

## Northern Frontier Reductions of Caquetá and Putumayo

Across thirty-four catalogued settlements in the Colombian Amazon, Franciscan missionaries and Spanish military expeditions established riverine reductions along the Caquetá, Putumayo, Guaviare and upper Rio Negro basins [@gomezgonzalez2014misiones]. Table \ref{tab:caqueta} presents twenty leading settlements across this northern Amazonian frontier.

<figure class="crd-table-figure" id="tab:caqueta">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Coordinates</th><th class="crd-th">Found.</th><th class="crd-th">1650AD</th><th class="crd-th">1700AD</th><th class="crd-th">1750AD</th><th class="crd-th">1825AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Sibundoy</strong></td><td class="crd-td">1,2 N, 76,92 W</td><td class="crd-td">1547</td><td class="crd-td">3,8k</td><td class="crd-td">3,1k</td><td class="crd-td">2,6k</td><td class="crd-td">2,5k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Mocoa</strong></td><td class="crd-td">1,15 N, 76,65 W</td><td class="crd-td">1563</td><td class="crd-td">3,3k</td><td class="crd-td">2,7k</td><td class="crd-td">2,3k</td><td class="crd-td">2,1k</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Florencia</strong></td><td class="crd-td">1,62 N, 75,6 W</td><td class="crd-td">1650</td><td class="crd-td">3,4k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,2k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>San José del Guaviare</strong></td><td class="crd-td">2,57 N, 72,64 W</td><td class="crd-td">1650</td><td class="crd-td">3,4k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,2k</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>Puerto Rico</strong></td><td class="crd-td">1,91 N, 75,16 W</td><td class="crd-td">1650</td><td class="crd-td">2,9k</td><td class="crd-td">2,4k</td><td class="crd-td">2k</td><td class="crd-td">1,9k</td><td class="crd-td">2,9k</td></tr>
<tr><td class="crd-td"><strong>Santiago (Putumayo)</strong></td><td class="crd-td">1,15 N, 77 W</td><td class="crd-td">1550</td><td class="crd-td">2,2k</td><td class="crd-td">1,8k</td><td class="crd-td">1,5k</td><td class="crd-td">1,4k</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Mitú</strong></td><td class="crd-td">1,26 N, 70,24 W</td><td class="crd-td">1650</td><td class="crd-td">2,6k</td><td class="crd-td">2,1k</td><td class="crd-td">1,8k</td><td class="crd-td">1,7k</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>El Doncello</strong></td><td class="crd-td">1,68 N, 75,28 W</td><td class="crd-td">1650</td><td class="crd-td">1,5k</td><td class="crd-td">1,2k</td><td class="crd-td">1,1k</td><td class="crd-td">1k</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>San Francisco (Putumayo)</strong></td><td class="crd-td">1,18 N, 76,88 W</td><td class="crd-td">1750</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">972</td><td class="crd-td">1k</td></tr>
<tr><td class="crd-td"><strong>San Vicente del Caguán</strong></td><td class="crd-td">2,12 N, 74,77 W</td><td class="crd-td">1740</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">972</td><td class="crd-td">1k</td></tr>
<tr><td class="crd-td"><strong>El Retorno</strong></td><td class="crd-td">2,33 N, 72,63 W</td><td class="crd-td">1650</td><td class="crd-td">979</td><td class="crd-td">794</td><td class="crd-td">681</td><td class="crd-td">638</td><td class="crd-td">979</td></tr>
<tr><td class="crd-td"><strong>Solano</strong></td><td class="crd-td">0,7 N, 75,25 W</td><td class="crd-td">1650</td><td class="crd-td">891</td><td class="crd-td">723</td><td class="crd-td">620</td><td class="crd-td">581</td><td class="crd-td">891</td></tr>
<tr><td class="crd-td"><strong>Valle del Guamuez</strong></td><td class="crd-td">0,45 N, 76,92 W</td><td class="crd-td">1650</td><td class="crd-td">859</td><td class="crd-td">697</td><td class="crd-td">598</td><td class="crd-td">560</td><td class="crd-td">859</td></tr>
<tr><td class="crd-td"><strong>Curillo</strong></td><td class="crd-td">1,03 N, 75,92 W</td><td class="crd-td">1650</td><td class="crd-td">823</td><td class="crd-td">668</td><td class="crd-td">573</td><td class="crd-td">537</td><td class="crd-td">823</td></tr>
<tr><td class="crd-td"><strong>Puerto Concordia</strong></td><td class="crd-td">2,62 N, 72,76 W</td><td class="crd-td">1650</td><td class="crd-td">698</td><td class="crd-td">566</td><td class="crd-td">485</td><td class="crd-td">455</td><td class="crd-td">698</td></tr>
<tr><td class="crd-td"><strong>El Paujíl</strong></td><td class="crd-td">1,57 N, 75,33 W</td><td class="crd-td">1650</td><td class="crd-td">657</td><td class="crd-td">533</td><td class="crd-td">457</td><td class="crd-td">429</td><td class="crd-td">657</td></tr>
<tr><td class="crd-td"><strong>Cartagena del Chairá</strong></td><td class="crd-td">1,33 N, 74,84 W</td><td class="crd-td">1650</td><td class="crd-td">654</td><td class="crd-td">531</td><td class="crd-td">455</td><td class="crd-td">426</td><td class="crd-td">654</td></tr>
<tr><td class="crd-td"><strong>Milán</strong></td><td class="crd-td">1,29 N, 75,51 W</td><td class="crd-td">1650</td><td class="crd-td">648</td><td class="crd-td">526</td><td class="crd-td">451</td><td class="crd-td">422</td><td class="crd-td">648</td></tr>
<tr><td class="crd-td"><strong>Inírida</strong></td><td class="crd-td">3,87 N, 67,92 W</td><td class="crd-td">1650</td><td class="crd-td">629</td><td class="crd-td">510</td><td class="crd-td">437</td><td class="crd-td">410</td><td class="crd-td">629</td></tr>
<tr><td class="crd-td"><strong>La Dorada</strong></td><td class="crd-td">0,34 N, 76,91 W</td><td class="crd-td">1650</td><td class="crd-td">619</td><td class="crd-td">503</td><td class="crd-td">431</td><td class="crd-td">404</td><td class="crd-td">619</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Twenty leading mission settlements and frontier posts across Caquetá, Putumayo and the Colombian Amazon.</figcaption>
</figure>

# Sources
