---
title: "Settlement Gazetteer of Pre-Columbian Eastern Amazon Basin"
subtitle: "PRETA: Coordinates, Toponymy and Demographic Trajectories (10000BC to 1542AD)"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: eastern_amazon_basin_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_eastern_amazon_basin_spatial.png"
hero_caption: "Spatial distribution of 563 catalogued pre-Columbian settlements and regional hydrological catchments across the Eastern Amazon Basin (2,69M km²) from 10000BC to 1542AD."
hero_label: "fig:hero-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer catalogues WGS84 coordinates, cultural affiliations, occupation spans and benchmark population trajectories for 563 pre-Columbian settlements across the Eastern Amazon Basin (2,69M km², encompassing 2.685.138 km²) from 10000BC to 1542AD. Spanning six hydrological divisions, the gazetteer encompasses diverse architectural and settlement traditions: monumental earthen residential mounds on Marajó Island, expansive dark-earth riverine towns along the Lower Amazon and Tapajós bluffs, fortified galactic garden cities in the Upper Xingu and ring-ditch defensive enclosures across the southern savannas of Tocantins and Araguaia.

Settlement sizes range from early Holocene rock shelters at Caverna da Pedra Pintada (180 peak) and shell-mound encampments at Taperinha (320 peak) to late pre-Columbian urban complexes at Santarém Aldeia (12k peak, 7,26k in 1500AD), the Camutins mound network (5,48k peak), Porto de Santarém (4,45k peak), Kuhikugu X11 (4,16k peak), Itacoatiara (3,59k peak), Parintins (3,46k peak), Óbidos (3,17k peak), Nokugu X6 (3,07k peak) and Alter do Chão (2,39k peak). Every catalogued settlement reconciles against 1.029 source-ledger candidates under PRETA alongside 466 documented exclusions (predominantly duplicate-alias consolidations within 3 km and non-habitation geological features).

By coupling georeferenced settlement trajectories with regional anthrosol mapping and fluvial catchments, this gazetteer establishes an archaeological baseline for pre-contact nucleation in lowland South America. Settlement subtraction isolates nucleated urban centres from rural populations, ensuring that historical demographic reconstructions reflect genuine archaeological site densities rather than speculative continental assumptions.

# Settlement Archaeology in Eastern Amazonia

Archaeological settlement patterns in the Eastern Amazon Basin reflect sophisticated adaptations to regional hydrology, aquatic resource distribution and soil management [@neves2021chapter8; @roosevelt2016method]. Four primary settlement traditions characterise the regional archaeological record:

1. **Estuarine Mound Complexes**: On eastern Marajó Island, human communities constructed monumental earthen mounds (*tesos*) rising up to twelve metres above the seasonally inundated savannas [@meggers1957marajo; @roosevelt1991moundbuilders; @schaan2008nonagricultural]. Mounds clustered in linear arrays along river channels such as the Anajás and Camutins, integrating corporate elite residential platforms, cemetery mounds and fish-retention dams that supported multi-tiered chiefdoms.
2. **Várzea Bluff Towns**: Along the Lower Amazon trunk stream and the clear-water mouth of the Tapajós, riverine towns were positioned on high, flood-free bluffs directly overlooking fertile floodplains [@gomes1997bibliografia; @stenborg2012location; @furtado2013metodo]. Settlements like Santarém, Belterra, Óbidos and Parintins feature contiguous sheets of anthropogenic dark earth (Terra Preta do Índio) extending over tens of hectares, packed with ceramic refuse and faunal bone.
3. **Upper Xingu Galactic Clusters**: In the Upper Xingu headwaters, Kuikuro-ancestral populations constructed a dispersed proto-urban network consisting of fortified plaza towns enclosed by deep defensive ditches and wooden palisades, linked by straight, raised radial roads up to forty metres wide [@heckenberger2003amazonia; @heckenberger2008urbanism]. Each settlement cluster operated as an integrated agro-urban unit combining town precincts with fish ponds and managed orchards.
4. **Southern Ecotone Geometric Enclosures**: Along the southern margin of the basin connecting the Amazonian rainforest with the Central Brazilian Cerrado, human groups excavated geometric ditch enclosures and ring-ditch villages [@desouza2018earthbuilders; @walker2015ring; @peripato2023earthworks]. These earthworks functioned as fortified settlements, ritual ceremonial plazas and gathering centres during the late pre-Columbian era.

# Methodology and Source Ledger Reconciliation

Candidate sites in the source ledger were evaluated using published excavation monographs, regional heritage inventories from the Instituto do Patrimônio Histórico e Artístico Nacional (IPHAN), remote sensing surveys and radiocarbon syntheses [@neves2021chapter8; @pydaniel2023lifetimes]. Inclusion requires:
- Precise WGS84 geographic coordinates validated against regional hydrography.
- Documented cultural horizons, ceramic affiliations or radiocarbon chronologies.
- Area-based or house-count demographic estimations calibrated to site extent.

Where multiple archaeological survey points fall within 3 km of a primary nucleated settlement, secondary coordinates are consolidated as duplicate aliases, preserving geographic integrity and preventing artificial clustering. Non-habitation features such as isolated petroglyph boulders without residential refuse are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 563 catalogued settlements and summed site peaks across the six sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Marajó Estuary</strong></td><td class="crd-td">59</td><td class="crd-td">10,5%</td><td class="crd-td">30k</td><td class="crd-td">Camutins (5,5k)</td></tr>
<tr><td class="crd-td"><strong>Lower Amazon Várzea</strong></td><td class="crd-td">109</td><td class="crd-td">19,4%</td><td class="crd-td">69,1k</td><td class="crd-td">Santarém (Aldeia) (12k)</td></tr>
<tr><td class="crd-td"><strong>Tapajós Basin</strong></td><td class="crd-td">103</td><td class="crd-td">18,3%</td><td class="crd-td">37,5k</td><td class="crd-td">Alter do Chão (2,4k)</td></tr>
<tr><td class="crd-td"><strong>Xingu Basin</strong></td><td class="crd-td">54</td><td class="crd-td">9,6%</td><td class="crd-td">24,8k</td><td class="crd-td">Kuhikugu (X11) (4,2k)</td></tr>
<tr><td class="crd-td"><strong>Lower Tocantins</strong></td><td class="crd-td">132</td><td class="crd-td">23,4%</td><td class="crd-td">38,3k</td><td class="crd-td">Tucuruí (Lower Tocantins) (1,4k)</td></tr>
<tr><td class="crd-td"><strong>Upper Tocantins</strong></td><td class="crd-td">106</td><td class="crd-td">18,8%</td><td class="crd-td">29,9k</td><td class="crd-td">Ilha do Bananal (Javaé) (1,6k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">563</td><td class="crd-td">100%</td><td class="crd-td">229,5k</td><td class="crd-td">Santarém (Aldeia) (12k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 563 catalogued settlements and summed site peaks across the Eastern Amazon Basin.</figcaption>
</figure>

# Leading Pre-Columbian Settlements

Table \ref{tab:gazetteer} presents the leading 45 pre-Columbian settlements across Eastern Amazonia ordered by peak population descending, detailing coordinates, sub-regional attribution, occupation span and benchmark demographic series.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1500AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Santarém (Aldeia)</strong></td><td class="crd-td">Lower Amazon Várzea</td><td class="crd-td">2,43 S, 54,72 W</td><td class="crd-td">1000AD - 1542AD</td><td class="crd-td">12k</td><td class="crd-td">7,3k</td></tr>
<tr><td class="crd-td"><strong>Camutins</strong></td><td class="crd-td">Marajó Estuary</td><td class="crd-td">0,67 S, 49,67 W</td><td class="crd-td">400AD - 1200AD</td><td class="crd-td">5,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Porto de Santarém</strong></td><td class="crd-td">Lower Amazon Várzea</td><td class="crd-td">2,42 S, 54,74 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">4,5k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Kuhikugu (X11)</strong></td><td class="crd-td">Xingu Basin</td><td class="crd-td">12,56 S, 53,11 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">4,2k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Itacoatiara (Miracanguera)</strong></td><td class="crd-td">Lower Amazon Várzea</td><td class="crd-td">3,14 S, 58,44 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">3,6k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Parintins (Tupinambarana)</strong></td><td class="crd-td">Lower Amazon Várzea</td><td class="crd-td">2,63 S, 56,74 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">3,5k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Óbidos (Konduri)</strong></td><td class="crd-td">Lower Amazon Várzea</td><td class="crd-td">1,92 S, 55,52 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">3,2k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Nokugu (X6)</strong></td><td class="crd-td">Xingu Basin</td><td class="crd-td">12,48 S, 53,21 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">3,1k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Hihí (X13)</strong></td><td class="crd-td">Xingu Basin</td><td class="crd-td">12,61 S, 53,05 W</td><td class="crd-td">1000AD - 1542AD</td><td class="crd-td">2,4k</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>Alter do Chão</strong></td><td class="crd-td">Tapajós Basin</td><td class="crd-td">2,5 S, 54,96 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">2,4k</td><td class="crd-td">1,4k</td></tr>
<tr><td class="crd-td"><strong>Pacoval</strong></td><td class="crd-td">Marajó Estuary</td><td class="crd-td">0,5 S, 49,5 W</td><td class="crd-td">800AD - 1200AD</td><td class="crd-td">2,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Gurupá (Mariocay)</strong></td><td class="crd-td">Marajó Estuary</td><td class="crd-td">1,4 S, 51,64 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">2,1k</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Oriximiná (Trombetas)</strong></td><td class="crd-td">Lower Amazon Várzea</td><td class="crd-td">1,77 S, 55,87 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">2k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Belterra (Terra Preta)</strong></td><td class="crd-td">Lower Amazon Várzea</td><td class="crd-td">2,64 S, 54,94 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">1,9k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Borba (Lower Madeira)</strong></td><td class="crd-td">Tapajós Basin</td><td class="crd-td">4,39 S, 59,59 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">1,9k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Teso dos Bichos</strong></td><td class="crd-td">Marajó Estuary</td><td class="crd-td">0,72 S, 49,55 W</td><td class="crd-td">400AD - 1200AD</td><td class="crd-td">1,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Juruti (Terra Preta)</strong></td><td class="crd-td">Lower Amazon Várzea</td><td class="crd-td">2,15 S, 56,09 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">1,7k</td><td class="crd-td">974</td></tr>
<tr><td class="crd-td"><strong>Nhamundá (Pocó)</strong></td><td class="crd-td">Lower Amazon Várzea</td><td class="crd-td">2,19 S, 56,71 W</td><td class="crd-td">0AD - 1400AD</td><td class="crd-td">1,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ilha do Bananal (Javaé)</strong></td><td class="crd-td">Upper Tocantins</td><td class="crd-td">10,55 S, 50,15 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">1,6k</td><td class="crd-td">906</td></tr>
<tr><td class="crd-td"><strong>Itaituba (Middle Tapajós)</strong></td><td class="crd-td">Tapajós Basin</td><td class="crd-td">4,28 S, 55,98 W</td><td class="crd-td">400AD - 1542AD</td><td class="crd-td">1,5k</td><td class="crd-td">841</td></tr>
<tr><td class="crd-td"><strong>Alenquer</strong></td><td class="crd-td">Lower Amazon Várzea</td><td class="crd-td">1,94 S, 54,74 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">1,5k</td><td class="crd-td">872</td></tr>
<tr><td class="crd-td"><strong>Almeirim (Paru)</strong></td><td class="crd-td">Lower Amazon Várzea</td><td class="crd-td">1,52 S, 52,58 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">1,4k</td><td class="crd-td">802</td></tr>
<tr><td class="crd-td"><strong>Tucuruí (Lower Tocantins)</strong></td><td class="crd-td">Lower Tocantins</td><td class="crd-td">3,77 S, 49,67 W</td><td class="crd-td">400AD - 1542AD</td><td class="crd-td">1,4k</td><td class="crd-td">785</td></tr>
<tr><td class="crd-td"><strong>Altamira (Volta Grande)</strong></td><td class="crd-td">Xingu Basin</td><td class="crd-td">3,2 S, 52,21 W</td><td class="crd-td">400AD - 1542AD</td><td class="crd-td">1,3k</td><td class="crd-td">718</td></tr>
<tr><td class="crd-td"><strong>Marabá (Itacaiúnas)</strong></td><td class="crd-td">Lower Tocantins</td><td class="crd-td">5,37 S, 49,12 W</td><td class="crd-td">400AD - 1542AD</td><td class="crd-td">1,3k</td><td class="crd-td">723</td></tr>
<tr><td class="crd-td"><strong>Caxiuanã (Manduquinha)</strong></td><td class="crd-td">Marajó Estuary</td><td class="crd-td">1,74 S, 51,46 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">1,1k</td><td class="crd-td">623</td></tr>
<tr><td class="crd-td"><strong>Mazagão Velho (Aristé)</strong></td><td class="crd-td">Marajó Estuary</td><td class="crd-td">0,22 S, 51,45 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">1,1k</td><td class="crd-td">630</td></tr>
<tr><td class="crd-td"><strong>Imperatriz (Middle Tocanti</strong></td><td class="crd-td">Lower Tocantins</td><td class="crd-td">5,53 S, 47,49 W</td><td class="crd-td">400AD - 1542AD</td><td class="crd-td">1,1k</td><td class="crd-td">617</td></tr>
<tr><td class="crd-td"><strong>Porto Nacional (Upper Toca</strong></td><td class="crd-td">Lower Tocantins</td><td class="crd-td">10,71 S, 48,42 W</td><td class="crd-td">400AD - 1542AD</td><td class="crd-td">949</td><td class="crd-td">525</td></tr>
<tr><td class="crd-td"><strong>Jacareacanga (Upper Tapajó</strong></td><td class="crd-td">Tapajós Basin</td><td class="crd-td">6,22 S, 57,75 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">850</td><td class="crd-td">481</td></tr>
<tr><td class="crd-td"><strong>Ananatuba</strong></td><td class="crd-td">Marajó Estuary</td><td class="crd-td">0,62 S, 49,05 W</td><td class="crd-td">1000BC - 400AD</td><td class="crd-td">705</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>ALTO SANTARÉM I</strong></td><td class="crd-td">Lower Tocantins</td><td class="crd-td">7,14 S, 47,73 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>AP: MA: 28 - CT- UEAP</strong></td><td class="crd-td">Marajó Estuary</td><td class="crd-td">0,04 S, 51,08 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Aeroporto</strong></td><td class="crd-td">Lower Amazon Várzea</td><td class="crd-td">2,19 S, 56,1 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Aldeia Grande</strong></td><td class="crd-td">Lower Tocantins</td><td class="crd-td">5,97 S, 49,89 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Andirobal</strong></td><td class="crd-td">Lower Amazon Várzea</td><td class="crd-td">1,84 S, 55,18 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Angústia 01</strong></td><td class="crd-td">Tapajós Basin</td><td class="crd-td">9,24 S, 57,04 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Açaizal</strong></td><td class="crd-td">Lower Amazon Várzea</td><td class="crd-td">1,73 S, 55,1 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>BRASILIA LEGAL</strong></td><td class="crd-td">Tapajós Basin</td><td class="crd-td">3,95 S, 55,58 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Bamburro</strong></td><td class="crd-td">Lower Amazon Várzea</td><td class="crd-td">1,79 S, 54,48 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Base</strong></td><td class="crd-td">Xingu Basin</td><td class="crd-td">3,76 S, 52,51 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Carapanarí 1</strong></td><td class="crd-td">Tapajós Basin</td><td class="crd-td">2,42 S, 54,85 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Carariacá</strong></td><td class="crd-td">Lower Amazon Várzea</td><td class="crd-td">2,19 S, 54,87 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Caru</strong></td><td class="crd-td">Lower Amazon Várzea</td><td class="crd-td">3,01 S, 58,7 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Comunidade Terra Preta</strong></td><td class="crd-td">Lower Amazon Várzea</td><td class="crd-td">2,61 S, 54,7 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 45 pre-Columbian settlements ordered by peak population across the Eastern Amazon Basin (10000BC to 1542AD).</figcaption>
</figure>

# Sub-Regional Settlement Catalogues

## Amazon Estuary, Marajó Island and Amapá Coast

The estuarine division catalogues 59 settlements concentrated primarily across the eastern grasslands of Marajó Island and the tidal inlets of Amapá [@meggers1957marajo; @schaan2008nonagricultural]. The largest nucleated centre was the Camutins mound group along the Anajás River, which supported 5,48k inhabitants across forty interconnected earth mounds during its peak in 800AD to 1000AD. Other major mound centres include Pacoval (2,17k peak in 800AD), Gurupá Mariocay (2,15k peak in 1000AD), Teso dos Bichos (1,8k peak in 800AD) and Monte Carmelo (1,4k peak).

These settlements functioned as corporate elite civic-ceremonial centres, supported by intensive weir fishing in seasonal lakes and managed açaí palm groves [@schaan2008nonagricultural; @roosevelt1991moundbuilders].

## Lower Amazon Várzea, Trombetas and Monte Alegre

Encompassing 109 catalogued settlements, this corridor supported the densest concentration of urbanised riverine towns in the basin [@roosevelt1996cave; @campos2026use]. The Tapajó capital at Santarém Aldeia concentrated 12k people in 1200AD (retaining 7,26k in 1500AD), flanked by Porto de Santarém (4,45k peak), Itacoatiara Miracanguera (3,59k peak), Parintins Tupinambarana (3,46k peak), Óbidos Konduri (3,17k peak), Oriximiná Trombetas (2,05k peak) and Belterra (1,9k peak).

Positioned along high river bluffs overlooking active floodplains, these communities farmed permanent Terra Preta anthrosols and maintained large corrals of freshwater river turtles, creating an uninterrupted zone of riverine settlement encountered by early Spanish explorers [@gomes1997bibliografia; @stenborg2012location].

## Tapajós, Santarém and Maués-Abacaxis Basin

The Tapajós basin catalogues 103 settlements along the clear-water Tapajós River and its eastern tributaries [@gomes2012cronologia; @stenborg2012location]. Leading settlements include Alter do Chão (2,39k peak in 1000AD), Borba Lower Madeira (1,9k peak), Itaituba Middle Tapajós (1,49k peak) and Maués (1,3k peak). Settlements were anchored on stable sandy bluffs, integrating manioc cultivation on dark earths with prolific river fisheries.

## Lower and Upper Xingu Basin

The Xingu basin catalogues 54 settlements, highlighted by the Kuhikugu proto-urban galactic cluster in the upper headwaters [@heckenberger2003amazonia; @heckenberger2008urbanism]. Fortified towns enclosed by deep defensive ditches and palisades include Kuhikugu X11 (4,16k peak in 1200AD), Nokugu X6 (3,07k peak) and Hihí X13 (2,4k peak), surrounded by satellite plaza villages such as Sagihengu (1,42k peak). Radial avenues linked these settlements into an integrated regional polity.

## Lower Tocantins and Carajás

The Lower Tocantins catalogues 132 settlements along the lower river terraces and surrounding mineral uplands [@magalhaes2005physis]. Major sites include Tucuruí (1,4k peak), ALTO SANTARÉM I (560 peak), Carajás rock shelters such as Abrigo do Jon and early Holocene ceramic hamlets.

## Araguaia, Ilha do Bananal and Upper Tocantins

The southernmost division catalogues 106 settlements, featuring ring-ditch earthworks and island settlements across Ilha do Bananal and the Upper Tocantins [@desouza2018earthbuilders; @walker2015ring]. The largest nucleated centre was Ilha do Bananal Javaé (1,6k peak in 1000AD), alongside Porto Nacional (1,38k peak) and seasonal Cerrado fishing camps.

# Source Ledger Audit and Excluded Candidates

The PRETA source ledger records 1.029 candidates for the Eastern Amazon Basin. Of these, 563 were included as primary catalogued settlements, while 466 entries were excluded. The vast majority of exclusions (461 sites, 98,9% of all exclusions) represent duplicate-alias consolidations: satellite survey coordinates located within 3 km of a primary nucleated settlement that were merged into the canonical site to avoid artificial spatial over-concentration. The remaining 5 exclusions represent isolated rock-art shelters or geological features lacking evidence of permanent habitation.

Table \ref{tab:excluded} documents the leading 25 excluded candidates alongside their canonical primary settlement and justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Porto de Santarém</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Santarém (Ald...</td></tr>
<tr><td class="crd-td"><strong>Voçoroca do Marajoí</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Marajoí.</td></tr>
<tr><td class="crd-td"><strong>ALTO SANTARÉM II</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement ALTO SANTARÉM I.</td></tr>
<tr><td class="crd-td"><strong>Lavras 3</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Santarém (Ald...</td></tr>
<tr><td class="crd-td"><strong>Terra Preta</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Terra Preta 9.</td></tr>
<tr><td class="crd-td"><strong>Nova Santarém</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Nova Santarém.</td></tr>
<tr><td class="crd-td"><strong>PA-AL-110 (Terra Preta do</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Terra Preta d...</td></tr>
<tr><td class="crd-td"><strong>Terra Preta</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Terra Preta.</td></tr>
<tr><td class="crd-td"><strong>Aldeia</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Santarém (Ald...</td></tr>
<tr><td class="crd-td"><strong>Orla do Hospital Dr. Jofre</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Parintins (Tu...</td></tr>
<tr><td class="crd-td"><strong>Taperinha</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Taperinha.</td></tr>
<tr><td class="crd-td"><strong>Porto</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Porto de Sant...</td></tr>
<tr><td class="crd-td"><strong>Aldeia (PA01037)</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Santarém (Ald...</td></tr>
<tr><td class="crd-td"><strong>Terra Preta 1</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Juruti (Terra...</td></tr>
<tr><td class="crd-td"><strong>Guará II</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Guará I.</td></tr>
<tr><td class="crd-td"><strong>Casinha</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement São Benedito.</td></tr>
<tr><td class="crd-td"><strong>Terra Preta do Mangabal (P</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Terra Preta d...</td></tr>
<tr><td class="crd-td"><strong>Camutins M-17</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Camutins M-1.</td></tr>
<tr><td class="crd-td"><strong>Leal</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement São Benedito.</td></tr>
<tr><td class="crd-td"><strong>Cacoal</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement São Benedito.</td></tr>
<tr><td class="crd-td"><strong>Terra Preta 2</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Aeroporto.</td></tr>
<tr><td class="crd-td"><strong>Córrego I</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Córrego II.</td></tr>
<tr><td class="crd-td"><strong>Faz. Monte Verde XXI</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Faz. Monte Ve...</td></tr>
<tr><td class="crd-td"><strong>Imperial IV</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Faz. Assunção I.</td></tr>
<tr><td class="crd-td"><strong>Faz. Monte Verde XIII Lote</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Faz. Monte Ve...</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading twenty-five excluded candidate sites from the Eastern Amazon Basin source ledger.</figcaption>
</figure>

# Limitations and Preservation Biases

Archaeological visibility in the Eastern Amazon Basin remains affected by differential preservation and survey coverage:
1. **Fluvial Erosion and Silt Inundation**: Active lateral migration of the Amazon river channel continually erodes riverbank settlements while seasonal silt deposition buries early Holocene deposits beneath metres of alluvium [@roosevelt2016method].
2. **Dense Canopy Obscuration**: Outside cleared cattle pasture and modern urban footprints, ancient earthworks remain obscured beneath dense equatorial rainforest, a bias only recently alleviated by airborne LiDAR surveys [@peripato2023earthworks].
3. **Perishable Architecture**: Indigenous construction relied predominantly on timber poles, woven thatch and rammed earth, which leave ephemeral posthole and hearth traces in tropical soils compared to stone masonry in the Andes.

Despite these taphonomic factors, the integration of 563 catalogued settlements demonstrates that pre-Columbian Eastern Amazonia was a densely occupied, highly engineered cultural landscape.

# Sources
