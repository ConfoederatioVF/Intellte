---
title: "Settlement Gazetteer of Colonial Bolivian Highlands (Real Audiencia de Charcas)"
subtitle: "PRETA: Mining Reales, Toledo Reducciones, Doctrinas and Urban Trajectories across Alto Perú (1535AD to 1825AD)"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: colonial_upper_peru_charcas_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_colonial_upper_peru_charcas_spatial.png"
hero_caption: "Spatial distribution of 258 catalogued colonial settlements across the six jurisdictions of the Real Audiencia de Charcas (468,8k km²) from 1535AD to 1825AD."
hero_label: "fig:hero-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer documents geographic coordinates, foundation dates and colonial demographic trajectories for 258 cities, silver mining *reales*, Viceroy Toledo *reducciones*, indigenous *doctrinas* and agrarian parishes across the Colonial Bolivian Highlands (Real Audiencia de Charcas, Alto Perú; 468,8k km²) from 1535AD to 1825AD. Spanning the six historical jurisdictions of La Paz, Oruro, Cochabamba, Charcas (La Plata-Sucre), Potosí and Tarija, the gazetteer bridges the pre-Columbian highland settlement network and the 1825AD republican census baseline with zero temporal or territorial discontinuity.

Urban primacy was overwhelmingly anchored by the Villa Imperial de Potosí (peaking at 160k in 1610AD before receding to 70k in 1700AD and 18,5k in 1825AD) and San Felipe de Austria de Oruro (peaking at 48k in 1680AD), complemented by the steadily expanding administrative and agrarian capitals of Nuestra Señora de La Paz (rising to 38k by 1825AD), Villa de Oropesa de Cochabamba (30,5k), La Plata-Sucre (19,8k), Punata (9k), Quillacollo (8,8k), Paria (8,8k), Tarija (8,6k), Cliza (8,6k), Tarata (8,2k) and Mizque (7,5k). Every catalogued locality reconciles against 271 audited source-ledger candidates drawn from Toledo's 1572AD to 1575AD *Visita General*, seventeenth-century *mita* and *Numeración General* rolls, Viedma's 1788AD statistical survey, the 1796AD Alto Perú intendancy enumerations and back-linked historic highland municipalities, with 13 documented spatial deduplications and zero unaccounted records.

# Colonial Urban Hierarchy and Settlement Classes

Settlement organisation across colonial Charcas comprised four distinct functional tiers [@Bakewell1984; @Cook1975Toledo; @Larson1998; @Mumford2012]:

1. **Silver Mining Metropolises (*Reales de Minas*)**: Potosí (founded 1545AD), Oruro (1606AD), Porco (1538AD) and San Cristóbal de Lípez operated as hyper-urbanised industrial magnets with vast indigenous *rancherías*, *ingenio* ore mills and inter-regional commercial markets [@Bakewell1984; @Zulawski1995; @Mangan2005].
2. **Spanish Administrative and Agrarian *Villas***: La Plata-Sucre (1538AD), Nuestra Señora de La Paz (1548AD), Villa de Oropesa de Cochabamba (1571AD), Tarija (1574AD) and Mizque (1560AD) housed judicial courts, cathedral chapters, university faculties and landowning *hacendado* elites [@Barnadas1973; @Larson1998; @Klein1993].
3. **Viceroy Toledo *Reducciones* (*Pueblos de Indios*)**: Consolidated between 1572AD and 1575AD from ancestral Aymara and Quechua *ayllus* — notably Achacachi, Copacabana, Caquiaviri, Sica Sica, Tiwanaku, Chayanta, Macha, Sacaca, Challapata, Corque, Curahuara de Carangas, Tapacarí, Tarabuco, Puna and Cotagaita — these gridded parish centres functioned as the institutional backbone of colonial tribute and *mita* mobilisation [@Cook1975Toledo; @Mumford2012; @SanchezAlbornoz1978].
4. **Valley *Forastero* and *Hacienda* Parishes**: Agricultural towns throughout Cochabamba (Cliza, Punata, Tarata, Quillacollo, Sacaba), the Yungas (Coroico, Chulumani, Irupana), Cinti (Camargo) and Chuquisaca absorbed displaced Altiplano migrants and sustained steady eighteenth-century demographic expansion [@Larson1998; @Klein1993; @Viedma1788].

Table \ref{tab:summary} summarises settlement counts, summed peaks and leading cities across all six jurisdictions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Sites</th><th class="crd-th">Share</th><th class="crd-th">Peak Sum</th><th class="crd-th">Leading Settlement</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Intendencia de La Paz</strong></td><td class="crd-td">84</td><td class="crd-td">32,6%</td><td class="crd-td">175,4k</td><td class="crd-td">La Paz (38k)</td></tr>
<tr><td class="crd-td"><strong>Oruro, Paria &amp; Carangas</strong></td><td class="crd-td">29</td><td class="crd-td">11,2%</td><td class="crd-td">103,8k</td><td class="crd-td">Oruro (48k)</td></tr>
<tr><td class="crd-td"><strong>Cochabamba &amp; Mizque</strong></td><td class="crd-td">44</td><td class="crd-td">17,1%</td><td class="crd-td">169k</td><td class="crd-td">Cochabamba (30,5k)</td></tr>
<tr><td class="crd-td"><strong>Charcas (La Plata)</strong></td><td class="crd-td">56</td><td class="crd-td">21,7%</td><td class="crd-td">114k</td><td class="crd-td">Sucre (19,8k)</td></tr>
<tr><td class="crd-td"><strong>Intendencia de Potosí</strong></td><td class="crd-td">39</td><td class="crd-td">15,1%</td><td class="crd-td">318,1k</td><td class="crd-td">Potosí (160k)</td></tr>
<tr><td class="crd-td"><strong>Tarija &amp; Southern Frontier</strong></td><td class="crd-td">6</td><td class="crd-td">2,3%</td><td class="crd-td">17,7k</td><td class="crd-td">Tarija (8,6k)</td></tr>
<tr><td class="crd-td"><strong>Total Audiencia de Charcas</strong></td><td class="crd-td">258</td><td class="crd-td">100%</td><td class="crd-td">898k</td><td class="crd-td">Potosí (160k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Jurisdictional distribution of catalogued colonial settlements across the Real Audiencia de Charcas (1535AD to 1825AD).</figcaption>
</figure>

# Catalogue of Major Settlements

Table \ref{tab:catalogue} lists the leading 120 colonial settlements across the Real Audiencia de Charcas ranked by peak population between 1535AD and 1825AD.

<figure class="crd-table-figure" id="tab:catalogue">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Jurisdiction</th><th class="crd-th">Coordinates</th><th class="crd-th">Attested Span</th><th class="crd-th">Peak Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Potosí</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">19,58 S, 65,75 W</td><td class="crd-td">1545AD-1825AD</td><td class="crd-td">160k</td></tr>
<tr><td class="crd-td"><strong>Oruro</strong></td><td class="crd-td">Oruro, Paria &amp; Carangas</td><td class="crd-td">17,96 S, 67,11 W</td><td class="crd-td">1606AD-1825AD</td><td class="crd-td">48k</td></tr>
<tr><td class="crd-td"><strong>La Paz</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">16,5 S, 68,15 W</td><td class="crd-td">1548AD-1825AD</td><td class="crd-td">38k</td></tr>
<tr><td class="crd-td"><strong>Cochabamba</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">17,39 S, 66,16 W</td><td class="crd-td">1571AD-1825AD</td><td class="crd-td">30,5k</td></tr>
<tr><td class="crd-td"><strong>Sucre</strong></td><td class="crd-td">Charcas (La Plata)</td><td class="crd-td">19,02 S, 65,26 W</td><td class="crd-td">1538AD-1825AD</td><td class="crd-td">19,8k</td></tr>
<tr><td class="crd-td"><strong>Sacaba</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">17,4 S, 66,04 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">18,1k</td></tr>
<tr><td class="crd-td"><strong>Betanzos</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">19,55 S, 65,45 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">16,1k</td></tr>
<tr><td class="crd-td"><strong>Tinguipaya</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">19,22 S, 65,82 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">9,7k</td></tr>
<tr><td class="crd-td"><strong>Punata</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">17,54 S, 65,83 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">9k</td></tr>
<tr><td class="crd-td"><strong>Pocoata</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">18,7 S, 66,16 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">8,9k</td></tr>
<tr><td class="crd-td"><strong>Paria</strong></td><td class="crd-td">Oruro, Paria &amp; Carangas</td><td class="crd-td">17,83 S, 67,02 W</td><td class="crd-td">1535AD-1825AD</td><td class="crd-td">8,8k</td></tr>
<tr><td class="crd-td"><strong>Quillacollo</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">17,39 S, 66,28 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">8,8k</td></tr>
<tr><td class="crd-td"><strong>Cliza</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">17,59 S, 65,93 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">8,6k</td></tr>
<tr><td class="crd-td"><strong>Tarija</strong></td><td class="crd-td">Tarija &amp; Southern Frontier</td><td class="crd-td">21,54 S, 64,73 W</td><td class="crd-td">1574AD-1825AD</td><td class="crd-td">8,6k</td></tr>
<tr><td class="crd-td"><strong>Uncía</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">18,47 S, 66,57 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">8,3k</td></tr>
<tr><td class="crd-td"><strong>Ocurí</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">18,89 S, 65,77 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">8,2k</td></tr>
<tr><td class="crd-td"><strong>Tarata</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">17,61 S, 66,02 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">8,2k</td></tr>
<tr><td class="crd-td"><strong>San Lucas</strong></td><td class="crd-td">Charcas (La Plata)</td><td class="crd-td">20,1 S, 65,13 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">8,1k</td></tr>
<tr><td class="crd-td"><strong>Tiquipaya</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">17,34 S, 66,22 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">8k</td></tr>
<tr><td class="crd-td"><strong>Mizque</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">17,94 S, 65,34 W</td><td class="crd-td">1560AD-1825AD</td><td class="crd-td">7,5k</td></tr>
<tr><td class="crd-td"><strong>Vinto</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">17,39 S, 66,32 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">7,5k</td></tr>
<tr><td class="crd-td"><strong>Viacha</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">16,65 S, 68,3 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">7,3k</td></tr>
<tr><td class="crd-td"><strong>Ravelo</strong></td><td class="crd-td">Charcas (La Plata)</td><td class="crd-td">18,81 S, 65,51 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">7,1k</td></tr>
<tr><td class="crd-td"><strong>Monteagudo</strong></td><td class="crd-td">Charcas (La Plata)</td><td class="crd-td">19,8 S, 63,96 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">6,7k</td></tr>
<tr><td class="crd-td"><strong>Colcapirhua</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">17,39 S, 66,24 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">6,5k</td></tr>
<tr><td class="crd-td"><strong>Caracollo</strong></td><td class="crd-td">Oruro, Paria &amp; Carangas</td><td class="crd-td">17,69 S, 67,29 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Copacabana</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">16,17 S, 69,09 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">6,4k</td></tr>
<tr><td class="crd-td"><strong>Porco</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">19,78 S, 65,83 W</td><td class="crd-td">1538AD-1825AD</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Sorata</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">15,77 S, 68,65 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Colquechaca</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">18,7 S, 66 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">6,1k</td></tr>
<tr><td class="crd-td"><strong>Sipe Sipe</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">17,45 S, 66,36 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">6k</td></tr>
<tr><td class="crd-td"><strong>Ckochas</strong></td><td class="crd-td">Charcas (La Plata)</td><td class="crd-td">19,91 S, 64,86 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Chulumani</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">16,41 S, 67,53 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">5,8k</td></tr>
<tr><td class="crd-td"><strong>Tacobamba</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">19,2 S, 65,55 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">5,7k</td></tr>
<tr><td class="crd-td"><strong>Achacachi</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">16,04 S, 68,69 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">5,6k</td></tr>
<tr><td class="crd-td"><strong>Sacaca</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">18,07 S, 66,38 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>Tupiza</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">21,44 S, 65,72 W</td><td class="crd-td">1574AD-1825AD</td><td class="crd-td">5,4k</td></tr>
<tr><td class="crd-td"><strong>Coroico</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">16,19 S, 67,73 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">5,3k</td></tr>
<tr><td class="crd-td"><strong>Chayanta</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">18,46 S, 66,44 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>Macha</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">18,82 S, 66,05 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>Vitichi</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">20,21 S, 65,5 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">5k</td></tr>
<tr><td class="crd-td"><strong>Camargo</strong></td><td class="crd-td">Charcas (La Plata)</td><td class="crd-td">20,64 S, 65,21 W</td><td class="crd-td">1574AD-1825AD</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>Sica Sica</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">17,33 S, 67,75 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">4,9k</td></tr>
<tr><td class="crd-td"><strong>Caiza "D</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">20,01 S, 65,65 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Toro Toro</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">18,23 S, 65,69 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">4,7k</td></tr>
<tr><td class="crd-td"><strong>Caquiaviri</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">17,03 S, 68,62 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>Tapacarí</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">17,51 S, 66,62 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>Colchani</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">20,3 S, 66,93 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">4,6k</td></tr>
<tr><td class="crd-td"><strong>Tarabuco</strong></td><td class="crd-td">Charcas (La Plata)</td><td class="crd-td">19,18 S, 64,92 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">4,5k</td></tr>
<tr><td class="crd-td"><strong>Culpina</strong></td><td class="crd-td">Charcas (La Plata)</td><td class="crd-td">20,87 S, 64,57 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">4,4k</td></tr>
<tr><td class="crd-td"><strong>Cotagaita</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">20,82 S, 65,66 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">4,4k</td></tr>
<tr><td class="crd-td"><strong>Aiquile</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">18,2 S, 65,18 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">4,3k</td></tr>
<tr><td class="crd-td"><strong>Chaquí</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">19,59 S, 65,56 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">4,3k</td></tr>
<tr><td class="crd-td"><strong>Poroma</strong></td><td class="crd-td">Charcas (La Plata)</td><td class="crd-td">18,62 S, 65,39 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">4,3k</td></tr>
<tr><td class="crd-td"><strong>Puna</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">19,79 S, 65,5 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>San Cristóbal de Lípez</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">21,15 S, 67,16 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">4,2k</td></tr>
<tr><td class="crd-td"><strong>Challapata</strong></td><td class="crd-td">Oruro, Paria &amp; Carangas</td><td class="crd-td">18,9 S, 66,77 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">4,1k</td></tr>
<tr><td class="crd-td"><strong>Totora</strong></td><td class="crd-td">Oruro, Paria &amp; Carangas</td><td class="crd-td">17,85 S, 68,18 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Caripuyo</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">18,23 S, 66,47 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">4k</td></tr>
<tr><td class="crd-td"><strong>Tomina</strong></td><td class="crd-td">Charcas (La Plata)</td><td class="crd-td">19,18 S, 64,47 W</td><td class="crd-td">1575AD-1825AD</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Pucarani</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">16,4 S, 68,48 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">3,9k</td></tr>
<tr><td class="crd-td"><strong>Villa Montes</strong></td><td class="crd-td">Tarija &amp; Southern Frontier</td><td class="crd-td">21,26 S, 63,47 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">3,8k</td></tr>
<tr><td class="crd-td"><strong>Curahuara de Carangas</strong></td><td class="crd-td">Oruro, Paria &amp; Carangas</td><td class="crd-td">17,87 S, 68,43 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Yocalla</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">19,39 S, 65,91 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">3,6k</td></tr>
<tr><td class="crd-td"><strong>Tomave</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">20,1 S, 66,58 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">3,5k</td></tr>
<tr><td class="crd-td"><strong>Santiago de Huari</strong></td><td class="crd-td">Oruro, Paria &amp; Carangas</td><td class="crd-td">19,02 S, 66,74 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">3,4k</td></tr>
<tr><td class="crd-td"><strong>Batallas</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">16,3 S, 68,53 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">3,3k</td></tr>
<tr><td class="crd-td"><strong>Tiraque</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">17,62 S, 65,07 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">3,2k</td></tr>
<tr><td class="crd-td"><strong>Padilla</strong></td><td class="crd-td">Charcas (La Plata)</td><td class="crd-td">19,31 S, 64,3 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>Villa Serrano</strong></td><td class="crd-td">Charcas (La Plata)</td><td class="crd-td">19,12 S, 64,32 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>Corque</strong></td><td class="crd-td">Oruro, Paria &amp; Carangas</td><td class="crd-td">18,35 S, 67,67 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>Tiwanaku</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">16,55 S, 68,67 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>Villa Charcas</strong></td><td class="crd-td">Charcas (La Plata)</td><td class="crd-td">20,72 S, 64,88 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>Chuquihuta Ayllu Jucumani</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">18,59 S, 66,35 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Colquiri</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">17,39 S, 67,13 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2,9k</td></tr>
<tr><td class="crd-td"><strong>Azurduy</strong></td><td class="crd-td">Charcas (La Plata)</td><td class="crd-td">20,11 S, 64,41 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2,9k</td></tr>
<tr><td class="crd-td"><strong>La Asunta</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">16,03 S, 67,17 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2,8k</td></tr>
<tr><td class="crd-td"><strong>Mocomoco</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">15,46 S, 69 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Incahuasi</strong></td><td class="crd-td">Charcas (La Plata)</td><td class="crd-td">20,78 S, 64,87 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Colomi</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">17,35 S, 65,87 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Morochata</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">17,23 S, 66,53 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Cocapata</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">16,49 S, 66,55 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Capinota</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">17,71 S, 66,26 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Laja</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">16,53 S, 68,38 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Acasio</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">18,02 S, 66,06 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2,6k</td></tr>
<tr><td class="crd-td"><strong>Inquisivi</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">16,92 S, 67,17 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Yamparáez</strong></td><td class="crd-td">Charcas (La Plata)</td><td class="crd-td">19,19 S, 65,12 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Huacareta</strong></td><td class="crd-td">Charcas (La Plata)</td><td class="crd-td">20,3 S, 64,02 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Toledo</strong></td><td class="crd-td">Oruro, Paria &amp; Carangas</td><td class="crd-td">18,28 S, 67,41 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Yotala</strong></td><td class="crd-td">Charcas (La Plata)</td><td class="crd-td">19,16 S, 65,26 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Achocalla</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">16,57 S, 68,15 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2,4k</td></tr>
<tr><td class="crd-td"><strong>Padcaya</strong></td><td class="crd-td">Tarija &amp; Southern Frontier</td><td class="crd-td">21,89 S, 64,71 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2,3k</td></tr>
<tr><td class="crd-td"><strong>Presto</strong></td><td class="crd-td">Charcas (La Plata)</td><td class="crd-td">18,93 S, 64,94 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Palca</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">16,67 S, 67,83 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Arampampa</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">17,96 S, 66,09 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2,2k</td></tr>
<tr><td class="crd-td"><strong>Apolo</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">14,72 S, 68,41 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Pocona</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">17,65 S, 65,4 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Puerto Acosta</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">15,53 S, 69,25 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Chuma</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">15,48 S, 68,9 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Mojocoya</strong></td><td class="crd-td">Charcas (La Plata)</td><td class="crd-td">18,76 S, 64,62 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Puerto Menor de Rurrenabaque</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">14,44 S, 67,53 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>San Benito</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">17,52 S, 65,92 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Vacas</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">17,58 S, 65,58 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Poopó</strong></td><td class="crd-td">Oruro, Paria &amp; Carangas</td><td class="crd-td">18,38 S, 66,97 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Calamarca</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">16,89 S, 68,11 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Zudáñez</strong></td><td class="crd-td">Charcas (La Plata)</td><td class="crd-td">19,12 S, 64,7 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Macharetí</strong></td><td class="crd-td">Charcas (La Plata)</td><td class="crd-td">20,81 S, 63,36 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Sapahaqui</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">16,89 S, 67,95 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Mecapaca</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">16,67 S, 68,02 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Arque</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">17,82 S, 66,4 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Sopachuy</strong></td><td class="crd-td">Charcas (La Plata)</td><td class="crd-td">19,49 S, 64,47 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tacopaya</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">17,83 S, 66,63 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Coripata</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">16,3 S, 67,6 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Irupana</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">16,47 S, 67,45 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Cairoma</strong></td><td class="crd-td">Intendencia de La Paz</td><td class="crd-td">16,9 S, 67,55 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Arani</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">17,57 S, 65,77 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Pojo</strong></td><td class="crd-td">Cochabamba &amp; Mizque</td><td class="crd-td">17,76 S, 64,86 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>El Choro</strong></td><td class="crd-td">Oruro, Paria &amp; Carangas</td><td class="crd-td">18,36 S, 67,12 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Colcha "K</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">20,74 S, 67,66 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>San Pedro de Macha</strong></td><td class="crd-td">Intendencia de Potosí</td><td class="crd-td">18,88 S, 66,06 W</td><td class="crd-td">1572AD-1825AD</td><td class="crd-td">1,7k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 120 catalogued colonial settlements of the Real Audiencia de Charcas / Alto Perú (1535AD to 1825AD), ordered by peak population.</figcaption>
</figure>

# Sources

<div id="refs"></div>
