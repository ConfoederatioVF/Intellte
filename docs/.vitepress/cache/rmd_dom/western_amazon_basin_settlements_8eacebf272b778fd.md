---
title: "Settlement Gazetteer of Pre-Columbian Western Amazon Basin"
subtitle: "PRETA: Coordinates, Toponymy and Demographic Trajectories (10000BC to 1542AD)"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: western_amazon_basin_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_western_amazon_basin_spatial.png"
hero_caption: "Spatial distribution of 617 catalogued pre-Columbian settlements and regional hydrological catchments across the Western Amazon Basin (4,31M km²) from 10000BC to 1542AD."
hero_label: "fig:hero-spatial"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer catalogues geographic coordinates, cultural affiliations, occupation spans and demographic trajectories for 617 pre-Columbian settlements across the Western Amazon Basin (4,31M km², encompassing 4.312.135 km²) from 10000BC to 1542AD. Spanning six major hydrological divisions, the gazetteer encompasses diverse architectural and settlement traditions: monumental stepped pyramid capitals and causeway networks of the Casarabe culture in Llanos de Moxos, garden-city platform complexes in the Ecuadorian Upano Valley, riverine bluff towns on fertile Terra Preta anthrosols along the Central Amazon trunk stream, geometric ditch enclosures (geoglyphs) carved into the plateaus of Acre and elongated várzea ribbons along the Solimões, Marañón and Ucayali floodplains.

Catalogued settlement peak sizes range from early Holocene rock shelters and shell middens to monumental urban centres led by Sangay in the Upano Valley (9,5k peak at 0AD to 400AD), Cotoca in Llanos de Moxos (8,4k peak in 1000AD), Kilamope (6,5k peak), Landívar (5,1k peak), Manaus at the Encontro das Águas (4,5k peak), Hatahara (3,7k peak), the mountaintop stone fortress of Kuelap (3,5k peak), San Ignacio de Moxos (3,4k peak), Iquitos (3,3k peak), Açutuba (3,2k peak), Leticia (3,1k peak), Tefé (2,9k peak) and Baures (2,8k peak). Every catalogued settlement reconciles against 1.104 source ledger candidates under PRETA alongside 487 documented exclusions, consisting of 482 duplicate-alias consolidations within 3 km and five non-habitation geological features.

By coupling georeferenced settlement trajectories with regional anthrosol pedology and fluvial catchments, this gazetteer establishes an archaeological baseline for pre-contact nucleation in lowland South America. Settlement subtraction isolates nucleated urban centres from rural populations, ensuring that historical demographic reconstructions reflect genuine archaeological site densities rather than speculative continental assumptions.

# Settlement Archaeology in Western Amazonia

Archaeological settlement patterns in the Western Amazon Basin reflect sophisticated adaptations to regional hydrology, soil management and aquatic resources [@neves2003historical; @prumers2022casarabe; @rostain2024upano]. Five primary settlement traditions characterise the regional archaeological record:

1. **Casarabe Monumental Urbanism**: In the seasonal savanna wetlands of Llanos de Moxos, Bolivia, the Casarabe culture constructed a hierarchical settlement system centred on stepped earthen pyramids rising up to twenty-one metres above monumental rectangular platforms [@prumers2022casarabe]. Primary centres at Cotoca and Landívar were connected to secondary mound centres and raised agricultural field belts by straight causeways and navigable canals spanning dozens of kilometres [@prumers2022casarabe; @walker2004agricultural].
2. **Upano Valley Garden Cities**: Along the eastern Andean foothills of Ecuador, the Kilamope and Upano cultures constructed thousands of monumental rectangular earthen platforms arranged in formal spatial complexes [@rostain2024upano]. Linked by wide sunken streets and integrated with drained agricultural plots, major centres at Sangay and Kilamope formed an interconnected agro-urban landscape flourishing from 500BC to 600AD [@rostain2024upano].
3. **Central Amazon Bluff Towns**: Along the high bluffs overlooking the Rio Negro and Solimões confluence, permanent settlements developed on deep anthropogenic dark earths (Terra Preta do Índio) [@neves2003historical; @lima2002ceramica]. Sites like Manaus, Açutuba, Hatahara and Manacapuru supported thousands of residents, protected by landward defensive ditches and palisades [@neves2014acutuba; @macedo2017pedogenetic].
4. **Acre Geometric Enclosures**: In the forested plateaus of Acre and northern Rondônia, indigenous builders excavated hundreds of circular, square and octagonal ditch-and-bank geoglyphs [@parssinen2009geoglyphs; @schaan2012sacred; @watling2017impact]. These monumental enclosures functioned as ceremonial assembly centres and defensive meeting grounds surrounded by managed palm orchards [@carson2014environmental; @desouza2018earthbuilders].
5. **Várzea Levee Settlements**: Along the white-water floodplains of the Solimões, Marañón and Ucayali, linear village settlements occupied natural river levees continuously for multiple kilometres [@lathrap1970upper; @myers1990sarabandero]. Supported by fertile annual silt deposition and aquatic harvesting, these chiefdoms maintained large fleets of war canoes and turtle corrals [@lathrap1970upper].

# Methodology and Source Ledger Reconciliation

Candidate sites in the source ledger were evaluated using published excavation monographs, regional heritage inventories from national agencies (IPHAN in Brazil, SIARPU in Bolivia, INPC in Ecuador, MINCUL in Peru), remote sensing surveys and radiocarbon syntheses [@neves2003historical; @prumers2022casarabe; @rostain2024upano; @peripato2023earthworks]. Inclusion requires:
- Precise WGS84 geographic coordinates validated against regional hydrography.
- Documented cultural horizons, ceramic affiliations or radiocarbon chronologies.
- Area-based or house-count demographic estimations calibrated to site extent.

Where multiple archaeological survey points fall within 3 km of a primary nucleated settlement, secondary coordinates are consolidated as duplicate aliases, preserving geographic integrity and preventing artificial clustering. Non-habitation features such as isolated petroglyphs or stone tool quarries lacking residential refuse are excluded from settlement subtraction.

Table \ref{tab:summary} summarises the distribution of 617 catalogued settlements and summed site peaks across the six sub-regions.

<figure class="crd-table-figure" id="tab:summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Sites</th><th class="crd-th">Site Share</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Settlement (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Central Amazon &amp; Negro</strong></td><td class="crd-td">103</td><td class="crd-td">16,7%</td><td class="crd-td">51,2k</td><td class="crd-td">Manaus (Encontro das Águas) (4,5k)</td></tr>
<tr><td class="crd-td"><strong>Madeira-Guaporé</strong></td><td class="crd-td">144</td><td class="crd-td">23,3%</td><td class="crd-td">52,1k</td><td class="crd-td">Teotônio (2,2k)</td></tr>
<tr><td class="crd-td"><strong>Llanos de Moxos</strong></td><td class="crd-td">143</td><td class="crd-td">23,2%</td><td class="crd-td">62k</td><td class="crd-td">Cotoca (Casarabe) (8,4k)</td></tr>
<tr><td class="crd-td"><strong>Purus-Juruá-Acre</strong></td><td class="crd-td">64</td><td class="crd-td">10,4%</td><td class="crd-td">33,6k</td><td class="crd-td">Tefé (Caiambé) (2,9k)</td></tr>
<tr><td class="crd-td"><strong>Solimões-Napo-Upano</strong></td><td class="crd-td">47</td><td class="crd-td">7,6%</td><td class="crd-td">19,1k</td><td class="crd-td">Iquitos (Napo-Amazonas) (3,3k)</td></tr>
<tr><td class="crd-td"><strong>Marañón-Ucayali</strong></td><td class="crd-td">116</td><td class="crd-td">18,8%</td><td class="crd-td">46,8k</td><td class="crd-td">Sangay (Upano Valley) (9,5k)</td></tr>
<tr><td class="crd-td"><strong>Regional Total</strong></td><td class="crd-td">617</td><td class="crd-td">100%</td><td class="crd-td">264,7k</td><td class="crd-td">Sangay (Upano Valley) (9,5k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Sub-regional distribution of 617 catalogued settlements and summed site peaks across the Western Amazon Basin.</figcaption>
</figure>

# Leading Pre-Columbian Settlements

Table \ref{tab:gazetteer} presents the leading 40 pre-Columbian settlements across Western Amazonia ordered by peak population descending, detailing coordinates, sub-regional attribution, occupation span and benchmark demographic series.

<figure class="crd-table-figure" id="tab:gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1500AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Sangay (Upano Valley)</strong></td><td class="crd-td">Marañón-Ucayali</td><td class="crd-td">2,02 S, 78,12 W</td><td class="crd-td">0AD - 400AD</td><td class="crd-td">9,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Cotoca (Casarabe)</strong></td><td class="crd-td">Llanos de Moxos</td><td class="crd-td">14,84 S, 64,6 W</td><td class="crd-td">800AD - 1400AD</td><td class="crd-td">8,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kilamope (Upano Valley)</strong></td><td class="crd-td">Marañón-Ucayali</td><td class="crd-td">2,18 S, 78,15 W</td><td class="crd-td">0AD - 400AD</td><td class="crd-td">6,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Landívar (Casarabe)</strong></td><td class="crd-td">Llanos de Moxos</td><td class="crd-td">14,8 S, 64,68 W</td><td class="crd-td">800AD - 1400AD</td><td class="crd-td">5,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Manaus (Encontro das Águ</strong></td><td class="crd-td">Central Amazon &amp; Negro</td><td class="crd-td">3,13 S, 59,98 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">4,5k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Hatahara</strong></td><td class="crd-td">Central Amazon &amp; Negro</td><td class="crd-td">3,27 S, 60,21 W</td><td class="crd-td">0AD - 1542AD</td><td class="crd-td">3,7k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Kuelap (Chachapoya-Amazo</strong></td><td class="crd-td">Marañón-Ucayali</td><td class="crd-td">6,42 S, 77,92 W</td><td class="crd-td">800AD - 1500AD</td><td class="crd-td">3,5k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>San Ignacio de Moxos (Pr</strong></td><td class="crd-td">Llanos de Moxos</td><td class="crd-td">15 S, 65,64 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">3,4k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Iquitos (Napo-Amazonas)</strong></td><td class="crd-td">Solimões-Napo-Upano</td><td class="crd-td">3,75 S, 73,25 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">3,3k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Açutuba</strong></td><td class="crd-td">Central Amazon &amp; Negro</td><td class="crd-td">3,1 S, 60,35 W</td><td class="crd-td">0AD - 1500AD</td><td class="crd-td">3,2k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Leticia (Omagua Solimões</strong></td><td class="crd-td">Solimões-Napo-Upano</td><td class="crd-td">4,22 S, 69,94 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">3,1k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Tefé (Caiambé)</strong></td><td class="crd-td">Purus-Juruá-Acre</td><td class="crd-td">3,35 S, 64,71 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">2,9k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Baures (Bella Vista)</strong></td><td class="crd-td">Llanos de Moxos</td><td class="crd-td">13,27 S, 63,7 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">2,8k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Manacapuru</strong></td><td class="crd-td">Central Amazon &amp; Negro</td><td class="crd-td">3,3 S, 60,62 W</td><td class="crd-td">400AD - 1542AD</td><td class="crd-td">2,6k</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>Loma Salvatierra</strong></td><td class="crd-td">Llanos de Moxos</td><td class="crd-td">14,95 S, 64,72 W</td><td class="crd-td">800AD - 1400AD</td><td class="crd-td">2,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Lago Grande (Iranduba)</strong></td><td class="crd-td">Central Amazon &amp; Negro</td><td class="crd-td">3,25 S, 60,15 W</td><td class="crd-td">400AD - 1400AD</td><td class="crd-td">2,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Teotônio</strong></td><td class="crd-td">Madeira-Guaporé</td><td class="crd-td">8,86 S, 64,06 W</td><td class="crd-td">4000BC - 1500AD</td><td class="crd-td">2,2k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Loma Mendoza</strong></td><td class="crd-td">Llanos de Moxos</td><td class="crd-td">14,88 S, 64,73 W</td><td class="crd-td">400AD - 1400AD</td><td class="crd-td">2,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Coari (Solimões)</strong></td><td class="crd-td">Purus-Juruá-Acre</td><td class="crd-td">4,08 S, 63,14 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">2,1k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Cumancaya (Ucayali)</strong></td><td class="crd-td">Marañón-Ucayali</td><td class="crd-td">8,5 S, 74,55 W</td><td class="crd-td">800AD - 1400AD</td><td class="crd-td">2,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Napo (Yasuní Polychrome)</strong></td><td class="crd-td">Solimões-Napo-Upano</td><td class="crd-td">0,95 S, 75,4 W</td><td class="crd-td">1000AD - 1542AD</td><td class="crd-td">2,1k</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Borba (Lower Madeira)</strong></td><td class="crd-td">Madeira-Guaporé</td><td class="crd-td">4,39 S, 59,59 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">1,9k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Caldeirão (EMBRAPA)</strong></td><td class="crd-td">Central Amazon &amp; Negro</td><td class="crd-td">3,25 S, 60,22 W</td><td class="crd-td">400AD - 1400AD</td><td class="crd-td">1,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Riberalta (Beni-Madre de</strong></td><td class="crd-td">Llanos de Moxos</td><td class="crd-td">11,01 S, 66,06 W</td><td class="crd-td">400AD - 1542AD</td><td class="crd-td">1,8k</td><td class="crd-td">1k</td></tr>
<tr><td class="crd-td"><strong>Yarinacocha (Tutishcainy</strong></td><td class="crd-td">Marañón-Ucayali</td><td class="crd-td">8,35 S, 74,58 W</td><td class="crd-td">1000BC - 1500AD</td><td class="crd-td">1,8k</td><td class="crd-td">904</td></tr>
<tr><td class="crd-td"><strong>Fazenda Colorada</strong></td><td class="crd-td">Purus-Juruá-Acre</td><td class="crd-td">9,87 S, 67,53 W</td><td class="crd-td">0AD - 1200AD</td><td class="crd-td">1,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Barcelos (Mariuá)</strong></td><td class="crd-td">Central Amazon &amp; Negro</td><td class="crd-td">0,97 S, 62,92 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">1,7k</td><td class="crd-td">974</td></tr>
<tr><td class="crd-td"><strong>Humaitá (Middle Madeira)</strong></td><td class="crd-td">Madeira-Guaporé</td><td class="crd-td">7,51 S, 63,02 W</td><td class="crd-td">400AD - 1542AD</td><td class="crd-td">1,6k</td><td class="crd-td">897</td></tr>
<tr><td class="crd-td"><strong>Osvaldo</strong></td><td class="crd-td">Central Amazon &amp; Negro</td><td class="crd-td">3,21 S, 60,32 W</td><td class="crd-td">800AD - 1200AD</td><td class="crd-td">1,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Lábrea (Middle Purus)</strong></td><td class="crd-td">Purus-Juruá-Acre</td><td class="crd-td">7,26 S, 64,8 W</td><td class="crd-td">400AD - 1542AD</td><td class="crd-td">1,4k</td><td class="crd-td">785</td></tr>
<tr><td class="crd-td"><strong>Araracuara</strong></td><td class="crd-td">Solimões-Napo-Upano</td><td class="crd-td">0,6 S, 72,38 W</td><td class="crd-td">0AD - 1500AD</td><td class="crd-td">1,4k</td><td class="crd-td">703</td></tr>
<tr><td class="crd-td"><strong>Jacó Sá</strong></td><td class="crd-td">Purus-Juruá-Acre</td><td class="crd-td">9,96 S, 67,5 W</td><td class="crd-td">0AD - 1200AD</td><td class="crd-td">1,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>São Gabriel da Cachoeira</strong></td><td class="crd-td">Central Amazon &amp; Negro</td><td class="crd-td">0,13 S, 67,09 W</td><td class="crd-td">400AD - 1542AD</td><td class="crd-td">1,3k</td><td class="crd-td">718</td></tr>
<tr><td class="crd-td"><strong>Tequinho</strong></td><td class="crd-td">Purus-Juruá-Acre</td><td class="crd-td">9,81 S, 67,15 W</td><td class="crd-td">400AD - 1200AD</td><td class="crd-td">1,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Quistococha</strong></td><td class="crd-td">Solimões-Napo-Upano</td><td class="crd-td">3,83 S, 73,32 W</td><td class="crd-td">800AD - 1500AD</td><td class="crd-td">1,2k</td><td class="crd-td">603</td></tr>
<tr><td class="crd-td"><strong>Monte Castelo (Guaporé)</strong></td><td class="crd-td">Llanos de Moxos</td><td class="crd-td">12,53 S, 63,18 W</td><td class="crd-td">4000BC - 1200AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Severino Calazans</strong></td><td class="crd-td">Purus-Juruá-Acre</td><td class="crd-td">9,91 S, 67,74 W</td><td class="crd-td">400AD - 1200AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Cruzeiro do Sul (Upper J</strong></td><td class="crd-td">Purus-Juruá-Acre</td><td class="crd-td">7,63 S, 72,67 W</td><td class="crd-td">400AD - 1542AD</td><td class="crd-td">1,1k</td><td class="crd-td">617</td></tr>
<tr><td class="crd-td"><strong>Isla del Tesoro</strong></td><td class="crd-td">Llanos de Moxos</td><td class="crd-td">13,98 S, 65,18 W</td><td class="crd-td">6000BC - 2000BC</td><td class="crd-td">738</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>AC-IQ-03</strong></td><td class="crd-td">Madeira-Guaporé</td><td class="crd-td">10,39 S, 67,56 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 40 pre-Columbian settlements ordered by peak population across the Western Amazon Basin (10000BC to 1542AD).</figcaption>
</figure>

# Sub-Regional Settlement Catalogues

## Central Amazon and Rio Negro-Branco

The Central Amazon division catalogues 103 settlements concentrated around the confluence of the Rio Negro and Rio Solimões [@neves2003historical; @neves2014acutuba]. Settlements were established on elevated bluffs overlooking rich floodplain fisheries and black-water navigation routes. Leading centres include Manaus at the Encontro das Águas (4,5k peak in 1000AD), Hatahara (3,7k peak in 800AD), Açutuba (3,2k peak in 400AD), Manacapuru (2,6k peak) and Osvaldo (2,4k peak). These sites are characterized by multi-metre anthropogenic dark earth deposits, ceramic assemblages of the Pocó-Açutuba, Manacapuru, Paredão and Guarita traditions, and defensive ditch perimeters [@lima2002ceramica; @macedo2017pedogenetic].

Table \ref{tab:subreg-central} catalogues the leading 25 settlements in the Central Amazon and Rio Negro-Branco division.

<figure class="crd-table-figure" id="tab:subreg-central">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Country</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1500AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Manaus (Encontro das Águas</strong></td><td class="crd-td">Brazil</td><td class="crd-td">3,13 S, 59,98 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">4,5k</td><td class="crd-td">2,5k</td></tr>
<tr><td class="crd-td"><strong>Hatahara</strong></td><td class="crd-td">Brazil</td><td class="crd-td">3,27 S, 60,21 W</td><td class="crd-td">0AD - 1542AD</td><td class="crd-td">3,7k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>Açutuba</strong></td><td class="crd-td">Brazil</td><td class="crd-td">3,1 S, 60,35 W</td><td class="crd-td">0AD - 1500AD</td><td class="crd-td">3,2k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Manacapuru</strong></td><td class="crd-td">Brazil</td><td class="crd-td">3,3 S, 60,62 W</td><td class="crd-td">400AD - 1542AD</td><td class="crd-td">2,6k</td><td class="crd-td">1,5k</td></tr>
<tr><td class="crd-td"><strong>Lago Grande (Iranduba)</strong></td><td class="crd-td">Brazil</td><td class="crd-td">3,25 S, 60,15 W</td><td class="crd-td">400AD - 1400AD</td><td class="crd-td">2,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Caldeirão (EMBRAPA)</strong></td><td class="crd-td">Brazil</td><td class="crd-td">3,25 S, 60,22 W</td><td class="crd-td">400AD - 1400AD</td><td class="crd-td">1,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Barcelos (Mariuá)</strong></td><td class="crd-td">Brazil</td><td class="crd-td">0,97 S, 62,92 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">1,7k</td><td class="crd-td">974</td></tr>
<tr><td class="crd-td"><strong>Osvaldo</strong></td><td class="crd-td">Brazil</td><td class="crd-td">3,21 S, 60,32 W</td><td class="crd-td">800AD - 1200AD</td><td class="crd-td">1,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>São Gabriel da Cachoeira (</strong></td><td class="crd-td">Brazil</td><td class="crd-td">0,13 S, 67,09 W</td><td class="crd-td">400AD - 1542AD</td><td class="crd-td">1,3k</td><td class="crd-td">718</td></tr>
<tr><td class="crd-td"><strong>AM-MA-10: Terra Preta</strong></td><td class="crd-td">Brazil</td><td class="crd-td">2,4 S, 60,76 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Caru</strong></td><td class="crd-td">Brazil</td><td class="crd-td">3,01 S, 58,7 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Comunidade Nobre</strong></td><td class="crd-td">Brazil</td><td class="crd-td">2,98 S, 60 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Manacá</strong></td><td class="crd-td">Brazil</td><td class="crd-td">3,28 S, 60,66 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>TPI Arabiana 2</strong></td><td class="crd-td">Brazil</td><td class="crd-td">1,3 S, 61,63 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>TPI Itaquera</strong></td><td class="crd-td">Brazil</td><td class="crd-td">1,11 S, 61,58 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>TPI Marrau</strong></td><td class="crd-td">Brazil</td><td class="crd-td">0,65 S, 61,45 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>TPI Samaúma</strong></td><td class="crd-td">Brazil</td><td class="crd-td">0,94 S, 61,58 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>TPI Xiparinã</strong></td><td class="crd-td">Brazil</td><td class="crd-td">0,69 S, 61,48 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>TPI Xixuaú</strong></td><td class="crd-td">Brazil</td><td class="crd-td">0,79 S, 61,56 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Terra Preta</strong></td><td class="crd-td">Brazil</td><td class="crd-td">3,14 S, 60,14 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Terra Preta I</strong></td><td class="crd-td">Brazil</td><td class="crd-td">2,92 S, 60,47 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Urubuí I</strong></td><td class="crd-td">Brazil</td><td class="crd-td">2,01 S, 60,03 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Xavier II</strong></td><td class="crd-td">Brazil</td><td class="crd-td">3,29 S, 60,16 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Lago Grande</strong></td><td class="crd-td">Brazil</td><td class="crd-td">3,23 S, 60,25 W</td><td class="crd-td">87BC - 952AD</td><td class="crd-td">420</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>ASA BRANCA 1 - A</strong></td><td class="crd-td">Brazil</td><td class="crd-td">4,1 N, 61,06 W</td><td class="crd-td">600AD - 1450AD</td><td class="crd-td">280</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 25 catalogued settlements across the Central Amazon and Rio Negro-Branco division.</figcaption>
</figure>

## Lower and Middle Madeira-Guaporé

The Madeira-Guaporé division catalogues 144 settlements along the Madeira River rapids and its expansive clear-water tributaries [@watling2018direct; @porsani2017gpr]. Continuous archaeological sequences at the Teotônio rapids (2,4k peak) demonstrate early Holocene plant manipulation and continuous dark-earth accumulation spanning nine millennia [@watling2018direct]. Other leading nucleated centres include Humaitá (2,2k peak), Porto Velho (2k peak), Guajará-Mirim (1,9k peak) and Ariquemes (1,6k peak). Settlements combined rich riverine fisheries with intensive agroforestry of peach palm, Brazil nuts and cassava on fertile anthrosol bluffs [@watling2018direct; @clement2015domestication].

Table \ref{tab:subreg-madeira} catalogues the leading 25 settlements in the Lower and Middle Madeira-Guaporé division.

<figure class="crd-table-figure" id="tab:subreg-madeira">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Country</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1500AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Teotônio</strong></td><td class="crd-td">Brazil</td><td class="crd-td">8,86 S, 64,06 W</td><td class="crd-td">4000BC - 1500AD</td><td class="crd-td">2,2k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Borba (Lower Madeira)</strong></td><td class="crd-td">Brazil</td><td class="crd-td">4,39 S, 59,59 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">1,9k</td><td class="crd-td">1,1k</td></tr>
<tr><td class="crd-td"><strong>Humaitá (Middle Madeira)</strong></td><td class="crd-td">Brazil</td><td class="crd-td">7,51 S, 63,02 W</td><td class="crd-td">400AD - 1542AD</td><td class="crd-td">1,6k</td><td class="crd-td">897</td></tr>
<tr><td class="crd-td"><strong>AC-IQ-03</strong></td><td class="crd-td">Brazil</td><td class="crd-td">10,39 S, 67,56 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Arco Íris</strong></td><td class="crd-td">Brazil</td><td class="crd-td">11,67 S, 61,92 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Campo da Onça</strong></td><td class="crd-td">Brazil</td><td class="crd-td">10,52 S, 67,67 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Colônia Boi Não Berra</strong></td><td class="crd-td">Brazil</td><td class="crd-td">10,42 S, 67,56 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Fazenda Correia</strong></td><td class="crd-td">Brazil</td><td class="crd-td">10,45 S, 67,45 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Fazenda Crixá</strong></td><td class="crd-td">Brazil</td><td class="crd-td">10,6 S, 67,69 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Fazenda Cumaru</strong></td><td class="crd-td">Brazil</td><td class="crd-td">10,38 S, 67,42 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Fazenda Santo Antônio</strong></td><td class="crd-td">Brazil</td><td class="crd-td">10,07 S, 67,19 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Geoglifo Fazenda Concórdia</strong></td><td class="crd-td">Brazil</td><td class="crd-td">9,72 S, 66,12 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Geoglifo Fazenda Concórdia</strong></td><td class="crd-td">Brazil</td><td class="crd-td">9,77 S, 66,42 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Geoglifo Fazenda Morada No</strong></td><td class="crd-td">Brazil</td><td class="crd-td">10,27 S, 65,3 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Geoglifo Ribeirão</strong></td><td class="crd-td">Brazil</td><td class="crd-td">10,23 S, 65,27 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Geoglifo Sol de Campinas d</strong></td><td class="crd-td">Brazil</td><td class="crd-td">10,06 S, 67,31 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Nakahara 103</strong></td><td class="crd-td">Brazil</td><td class="crd-td">10,39 S, 67,52 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Nakahara 140</strong></td><td class="crd-td">Brazil</td><td class="crd-td">10,61 S, 67,8 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Nakahara 217</strong></td><td class="crd-td">Brazil</td><td class="crd-td">10,34 S, 67,41 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Nakahara 30</strong></td><td class="crd-td">Brazil</td><td class="crd-td">10,04 S, 67,17 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Nakahara 45</strong></td><td class="crd-td">Brazil</td><td class="crd-td">10,17 S, 67,35 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Nakahara 76</strong></td><td class="crd-td">Brazil</td><td class="crd-td">10,34 S, 67,51 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Terra Preta</strong></td><td class="crd-td">Brazil</td><td class="crd-td">6 S, 61,58 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Terra Preta</strong></td><td class="crd-td">Brazil</td><td class="crd-td">9,82 S, 59,55 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Terra Preta Dona Nazira</strong></td><td class="crd-td">Brazil</td><td class="crd-td">3,73 S, 59,25 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading 25 catalogued settlements across the Lower and Middle Madeira-Guaporé division.</figcaption>
</figure>

## Llanos de Moxos, Beni and Mamoré

The Llanos de Moxos division catalogues 143 settlements across the seasonally flooded savannas of Beni, Bolivia [@prumers2022casarabe; @erickson2000applied; @walker2004agricultural]. Between 500AD and 1400AD, the Casarabe culture developed monumental low-density urbanism centred on stepped earthen pyramids, artificial platform mounds, causeways and canals [@prumers2022casarabe]. Leading regional centres include Cotoca (8,4k peak in 1000AD), Landívar (5,1k peak), San Ignacio de Moxos (3,4k peak), Baures (2,8k peak), Loma Salvatierra (2,6k peak) and Loma Mendoza (2,2k peak). These nucleated centres were integrated with extensive raised-field systems and landscape-scale fish weirs that sustained dense populations across flood cycles [@erickson2000applied; @walker2004agricultural].

Table \ref{tab:subreg-moxos} catalogues the leading 30 settlements in the Llanos de Moxos, Beni and Mamoré division.

<figure class="crd-table-figure" id="tab:subreg-moxos">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Country</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1500AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cotoca (Casarabe)</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">14,84 S, 64,6 W</td><td class="crd-td">800AD - 1400AD</td><td class="crd-td">8,4k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Landívar (Casarabe)</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">14,8 S, 64,68 W</td><td class="crd-td">800AD - 1400AD</td><td class="crd-td">5,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>San Ignacio de Moxos (Pre-</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">15 S, 65,64 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">3,4k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Baures (Bella Vista)</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">13,27 S, 63,7 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">2,8k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Loma Salvatierra</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">14,95 S, 64,72 W</td><td class="crd-td">800AD - 1400AD</td><td class="crd-td">2,6k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Loma Mendoza</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">14,88 S, 64,73 W</td><td class="crd-td">400AD - 1400AD</td><td class="crd-td">2,2k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Riberalta (Beni-Madre de D</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">11,01 S, 66,06 W</td><td class="crd-td">400AD - 1542AD</td><td class="crd-td">1,8k</td><td class="crd-td">1k</td></tr>
<tr><td class="crd-td"><strong>Monte Castelo (Guaporé)</strong></td><td class="crd-td">Brazil</td><td class="crd-td">12,53 S, 63,18 W</td><td class="crd-td">4000BC - 1200AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Isla del Tesoro</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">13,98 S, 65,18 W</td><td class="crd-td">6000BC - 2000BC</td><td class="crd-td">738</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Aldeia do Elvis</strong></td><td class="crd-td">Brazil</td><td class="crd-td">12,43 S, 64,38 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Complexo Tarilândia</strong></td><td class="crd-td">Brazil</td><td class="crd-td">12,06 S, 63,52 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Geoglifo Aeroporto</strong></td><td class="crd-td">Brazil</td><td class="crd-td">12,42 S, 64,42 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Geoglifo Oswaldo Tupari</strong></td><td class="crd-td">Brazil</td><td class="crd-td">12,39 S, 63,02 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Rolim de Moura</strong></td><td class="crd-td">Brazil</td><td class="crd-td">13,08 S, 62,28 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>São Domingos 2</strong></td><td class="crd-td">Brazil</td><td class="crd-td">12,06 S, 64 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Três Bocas/ Farias Tupari</strong></td><td class="crd-td">Brazil</td><td class="crd-td">12,34 S, 62,98 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>El Círculo</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">11,04 S, 66,13 W</td><td class="crd-td">70AD - 1320AD</td><td class="crd-td">420</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Isla Rodeo</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">15,11 S, 65,49 W</td><td class="crd-td">989AD - 1189AD</td><td class="crd-td">420</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Loma Alta de Casarabe</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">14,93 S, 64,29 W</td><td class="crd-td">480AD - 1236AD</td><td class="crd-td">420</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Loma Esperanza II</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">14,83 S, 65,47 W</td><td class="crd-td">868AD - 1320AD</td><td class="crd-td">420</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Loma Kiusíu</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">14,74 S, 65,06 W</td><td class="crd-td">527AD - 1226AD</td><td class="crd-td">420</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Loma Mary</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">14,81 S, 65 W</td><td class="crd-td">522AD - 1278AD</td><td class="crd-td">420</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Loma Mendoza</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">14,88 S, 64,45 W</td><td class="crd-td">315AD - 1311AD</td><td class="crd-td">420</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Loma Palmasola</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">15,04 S, 64,8 W</td><td class="crd-td">1173AD - 1373AD</td><td class="crd-td">420</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Loma Salvatierra</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">14,88 S, 64,49 W</td><td class="crd-td">246AD - 1324AD</td><td class="crd-td">420</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tumichucua</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">11,13 S, 66,15 W</td><td class="crd-td">197BC - 3AD</td><td class="crd-td">420</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Monte Castelo</strong></td><td class="crd-td">Brazil</td><td class="crd-td">12,55 S, 63,1 W</td><td class="crd-td">2728BC - 1100AD</td><td class="crd-td">420</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Adinaldo Vieira de Castro</strong></td><td class="crd-td">Brazil</td><td class="crd-td">13,19 S, 60,74 W</td><td class="crd-td">600AD - 1450AD</td><td class="crd-td">280</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Aldeia Antiga Fazendinha</strong></td><td class="crd-td">Brazil</td><td class="crd-td">16,23 S, 59,48 W</td><td class="crd-td">600AD - 1450AD</td><td class="crd-td">280</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Babaçu</strong></td><td class="crd-td">Brazil</td><td class="crd-td">14,98 S, 59,98 W</td><td class="crd-td">600AD - 1450AD</td><td class="crd-td">280</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading 30 catalogued settlements across the Llanos de Moxos, Beni and Mamoré division.</figcaption>
</figure>

## Purus, Juruá and Acre Geoglyph Belt

The Purus-Juruá-Acre division catalogues 64 settlements distinguished by geometric earthworks (geoglyphs) and riverine bluff occupations [@parssinen2009geoglyphs; @saunaluoma2018geometric; @watling2017impact]. Deep ditch enclosures spanning circular, square and octagonal forms served as ceremonial gathering places and fortified villages [@carson2014environmental; @schaan2012sacred]. Leading nucleated centres include Tefé Caiambé (2,9k peak in 1000AD), Rio Branco Fazenda Colorada (2,4k peak), Xapuri (2,1k peak), Sena Madureira (1,9k peak), Boca do Acre (1,8k peak) and Cruzeiro do Sul (1,7k peak). Inhabitants combined managed palm agroforestry with terrace cultivation and river trade [@watling2017impact; @peripato2023earthworks].

Table \ref{tab:subreg-acre} catalogues the leading 25 settlements in the Purus, Juruá and Acre Geoglyph Belt.

<figure class="crd-table-figure" id="tab:subreg-acre">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Country</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1500AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tefé (Caiambé)</strong></td><td class="crd-td">Brazil</td><td class="crd-td">3,35 S, 64,71 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">2,9k</td><td class="crd-td">1,7k</td></tr>
<tr><td class="crd-td"><strong>Coari (Solimões)</strong></td><td class="crd-td">Brazil</td><td class="crd-td">4,08 S, 63,14 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">2,1k</td><td class="crd-td">1,2k</td></tr>
<tr><td class="crd-td"><strong>Fazenda Colorada</strong></td><td class="crd-td">Brazil</td><td class="crd-td">9,87 S, 67,53 W</td><td class="crd-td">0AD - 1200AD</td><td class="crd-td">1,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Lábrea (Middle Purus)</strong></td><td class="crd-td">Brazil</td><td class="crd-td">7,26 S, 64,8 W</td><td class="crd-td">400AD - 1542AD</td><td class="crd-td">1,4k</td><td class="crd-td">785</td></tr>
<tr><td class="crd-td"><strong>Jacó Sá</strong></td><td class="crd-td">Brazil</td><td class="crd-td">9,96 S, 67,5 W</td><td class="crd-td">0AD - 1200AD</td><td class="crd-td">1,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Tequinho</strong></td><td class="crd-td">Brazil</td><td class="crd-td">9,81 S, 67,15 W</td><td class="crd-td">400AD - 1200AD</td><td class="crd-td">1,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Severino Calazans</strong></td><td class="crd-td">Brazil</td><td class="crd-td">9,91 S, 67,74 W</td><td class="crd-td">400AD - 1200AD</td><td class="crd-td">1,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Cruzeiro do Sul (Upper Jur</strong></td><td class="crd-td">Brazil</td><td class="crd-td">7,63 S, 72,67 W</td><td class="crd-td">400AD - 1542AD</td><td class="crd-td">1,1k</td><td class="crd-td">617</td></tr>
<tr><td class="crd-td"><strong>Aurora I</strong></td><td class="crd-td">Brazil</td><td class="crd-td">10,87 S, 69,39 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Camila</strong></td><td class="crd-td">Brazil</td><td class="crd-td">10,35 S, 67,71 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Colônia Sapé</strong></td><td class="crd-td">Brazil</td><td class="crd-td">10,47 S, 67,94 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Fazenda Soberana</strong></td><td class="crd-td">Brazil</td><td class="crd-td">10,03 S, 67,73 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Fazenda Sorriso</strong></td><td class="crd-td">Brazil</td><td class="crd-td">10,29 S, 67,92 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Geoglifo</strong></td><td class="crd-td">Brazil</td><td class="crd-td">8,89 S, 67,25 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Geoglifo</strong></td><td class="crd-td">Brazil</td><td class="crd-td">8,84 S, 67,25 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Geoglifo</strong></td><td class="crd-td">Brazil</td><td class="crd-td">8,89 S, 67,17 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Geoglifo</strong></td><td class="crd-td">Brazil</td><td class="crd-td">8,72 S, 67,18 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Geoglifo 1</strong></td><td class="crd-td">Brazil</td><td class="crd-td">8,97 S, 67,24 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Geoglifo 2</strong></td><td class="crd-td">Brazil</td><td class="crd-td">9,1 S, 67,25 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Geoglifo 3</strong></td><td class="crd-td">Brazil</td><td class="crd-td">9,13 S, 67,28 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Geoglifo 7</strong></td><td class="crd-td">Brazil</td><td class="crd-td">9,19 S, 67,28 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Geoglifo 8</strong></td><td class="crd-td">Brazil</td><td class="crd-td">9,23 S, 67,28 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Geoglifo Andirá 1</strong></td><td class="crd-td">Brazil</td><td class="crd-td">9,49 S, 67,63 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Geoglifos Baixa Verde I</strong></td><td class="crd-td">Brazil</td><td class="crd-td">10,07 S, 67,55 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Geoglifos Marco 134</strong></td><td class="crd-td">Brazil</td><td class="crd-td">10,3 S, 67,69 W</td><td class="crd-td">400AD - 1450AD</td><td class="crd-td">560</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Leading 25 catalogued settlements across the Purus, Juruá and Acre Geoglyph Belt.</figcaption>
</figure>

## Solimões, Caquetá-Putumayo and Napo-Upano

The Solimões-Napo-Upano division catalogues 47 settlements along the upper northwestern Amazon river corridors and the Ecuadorian piedmont [@lathrap1970upper; @rostain2024upano]. The upper Upano Valley features extensive garden-city urbanism flourishing between 500BC and 600AD [@rostain2024upano]. Downstream along the Solimões, dense riverine chiefdoms of the Omagua and Aparia occupied long levee ribbons [@lathrap1970upper]. Leading settlements include Iquitos (3,3k peak in 1000AD), Leticia (3,1k peak), São Paulo de Olivença (2,4k peak), Tabatinga (2,2k peak), Fonte Boa (2k peak) and Coari (1,9k peak).

Table \ref{tab:subreg-solimoes} catalogues the leading 25 settlements in the Solimões, Caquetá-Putumayo and Napo-Upano division.

<figure class="crd-table-figure" id="tab:subreg-solimoes">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Country</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1500AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Iquitos (Napo-Amazonas)</strong></td><td class="crd-td">Peru</td><td class="crd-td">3,75 S, 73,25 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">3,3k</td><td class="crd-td">2k</td></tr>
<tr><td class="crd-td"><strong>Leticia (Omagua Solimões)</strong></td><td class="crd-td">Colombia</td><td class="crd-td">4,22 S, 69,94 W</td><td class="crd-td">800AD - 1542AD</td><td class="crd-td">3,1k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Napo (Yasuní Polychrome)</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">0,95 S, 75,4 W</td><td class="crd-td">1000AD - 1542AD</td><td class="crd-td">2,1k</td><td class="crd-td">1,3k</td></tr>
<tr><td class="crd-td"><strong>Araracuara</strong></td><td class="crd-td">Colombia</td><td class="crd-td">0,6 S, 72,38 W</td><td class="crd-td">0AD - 1500AD</td><td class="crd-td">1,4k</td><td class="crd-td">703</td></tr>
<tr><td class="crd-td"><strong>Quistococha</strong></td><td class="crd-td">Peru</td><td class="crd-td">3,83 S, 73,32 W</td><td class="crd-td">800AD - 1500AD</td><td class="crd-td">1,2k</td><td class="crd-td">603</td></tr>
<tr><td class="crd-td"><strong>Peña Roja (Caquetá)</strong></td><td class="crd-td">Colombia</td><td class="crd-td">0,68 S, 72,1 W</td><td class="crd-td">6000BC - 1200AD</td><td class="crd-td">443</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>El Guayabo</strong></td><td class="crd-td">Colombia</td><td class="crd-td">0,46 N, 77,64 W</td><td class="crd-td">696BC - 446BC</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Baeza-Mamallacta BA-7</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">0,46 S, 77,89 W</td><td class="crd-td">780BC - 530BC</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Loma Tello</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">1,04 S, 78,34 W</td><td class="crd-td">770BC - 520BC</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mamallacta</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">0,3 S, 77,5 W</td><td class="crd-td">1667BC - 1417BC</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Cushillococha (AMA-2)</strong></td><td class="crd-td">Brazil</td><td class="crd-td">4 S, 70,67 W</td><td class="crd-td">742AD - 942AD</td><td class="crd-td">180</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Mangueiras</strong></td><td class="crd-td">Brazil</td><td class="crd-td">1,6 S, 69,27 W</td><td class="crd-td">566AD - 766AD</td><td class="crd-td">180</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Abrigo del Arco I</strong></td><td class="crd-td">Colombia</td><td class="crd-td">0,74 N, 72,74 W</td><td class="crd-td">3636BC - 3336BC</td><td class="crd-td">180</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Abrigo del Valle de las Pi</strong></td><td class="crd-td">Colombia</td><td class="crd-td">1,37 N, 72,96 W</td><td class="crd-td">538BC - 238BC</td><td class="crd-td">180</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Lago Agrio</strong></td><td class="crd-td">Colombia</td><td class="crd-td">0,08 N, 76,86 W</td><td class="crd-td">1173AD - 1373AD</td><td class="crd-td">180</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Paqui</strong></td><td class="crd-td">Colombia</td><td class="crd-td">0,57 S, 72,11 W</td><td class="crd-td">45BC - 1414AD</td><td class="crd-td">180</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Peña Roja</strong></td><td class="crd-td">Colombia</td><td class="crd-td">0,65 S, 72,08 W</td><td class="crd-td">480AD - 1500AD</td><td class="crd-td">180</td><td class="crd-td">180</td></tr>
<tr><td class="crd-td"><strong>Aceipa Palmeras</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">0,43 S, 76,41 W</td><td class="crd-td">890AD - 1090AD</td><td class="crd-td">180</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Aeropuerto de Tena</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">1,06 S, 77,58 W</td><td class="crd-td">759BC - 459BC</td><td class="crd-td">180</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Aguas Blancas (02F4-002)</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">0,05 S, 77,23 W</td><td class="crd-td">438AD - 1425AD</td><td class="crd-td">180</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ahuano</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">1,05 S, 77,54 W</td><td class="crd-td">795AD - 1273AD</td><td class="crd-td">180</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Arajuno 2</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">1,17 S, 78,33 W</td><td class="crd-td">218AD - 418AD</td><td class="crd-td">180</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Borja</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">0,25 S, 78 W</td><td class="crd-td">1278AD - 1478AD</td><td class="crd-td">180</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Camino Vecinal Edén</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">0,54 S, 76,07 W</td><td class="crd-td">249AD - 449AD</td><td class="crd-td">180</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Canta 2</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">1,59 S, 76,37 W</td><td class="crd-td">501AD - 1500AD</td><td class="crd-td">180</td><td class="crd-td">180</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Leading 25 catalogued settlements across the Solimões, Caquetá-Putumayo and Napo-Upano division.</figcaption>
</figure>

## Marañón, Huallaga and Ucayali Lowlands

The Marañón-Huallaga-Ucayali division catalogues 116 settlements across the fertile Andean foreland of northeastern Peru and the adjacent Upano basin of Ecuador [@lathrap1970upper; @myers1990sarabandero; @rostain2024upano]. This division concentrated the largest individual settlements in Western Amazonia, led by the garden-city platform complexes of Sangay (9,5k peak at 0AD to 400AD) and Kilamope (6,5k peak) in the Upano Valley [@rostain2024upano], alongside the fortified Chachapoya citadel of Kuelap (3,5k peak) [@church2020kuelap]. In the silt-rich Peruvian lowlands, leading riverine centres include Pucallpa (2,5k peak), Yurimaguas (2,3k peak), Nauta (2,2k peak), Tarapoto (2,1k peak) and Moyobamba (1,9k peak).

Table \ref{tab:subreg-maranon} catalogues the leading 30 settlements in the Marañón, Huallaga and Ucayali Lowlands division.

<figure class="crd-table-figure" id="tab:subreg-maranon">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement Name</th><th class="crd-th">Country</th><th class="crd-th">Coordinates</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop</th><th class="crd-th">1500AD Pop</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Sangay (Upano Valley)</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">2,02 S, 78,12 W</td><td class="crd-td">0AD - 400AD</td><td class="crd-td">9,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kilamope (Upano Valley)</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">2,18 S, 78,15 W</td><td class="crd-td">0AD - 400AD</td><td class="crd-td">6,5k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Kuelap (Chachapoya-Amazon</strong></td><td class="crd-td">Peru</td><td class="crd-td">6,42 S, 77,92 W</td><td class="crd-td">800AD - 1500AD</td><td class="crd-td">3,5k</td><td class="crd-td">1,9k</td></tr>
<tr><td class="crd-td"><strong>Cumancaya (Ucayali)</strong></td><td class="crd-td">Peru</td><td class="crd-td">8,5 S, 74,55 W</td><td class="crd-td">800AD - 1400AD</td><td class="crd-td">2,1k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Yarinacocha (Tutishcainyo)</strong></td><td class="crd-td">Peru</td><td class="crd-td">8,35 S, 74,58 W</td><td class="crd-td">1000BC - 1500AD</td><td class="crd-td">1,8k</td><td class="crd-td">904</td></tr>
<tr><td class="crd-td"><strong>Huapula</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">2,07 S, 78,05 W</td><td class="crd-td">969BC - 1142AD</td><td class="crd-td">420</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Moretecocha</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">1,61 S, 77,35 W</td><td class="crd-td">606AD - 806AD</td><td class="crd-td">420</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ambato</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">1,14 S, 78,42 W</td><td class="crd-td">812BC - 562BC</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Cerro Narrio</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">2,61 S, 78,95 W</td><td class="crd-td">2174BC - 1924BC</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Chaullabamba</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">2,85 S, 78,9 W</td><td class="crd-td">990BC - 740BC</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Colina Moravia</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">1,85 S, 78,06 W</td><td class="crd-td">1683BC - 1433BC</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>El Remanso</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">3,25 S, 78,69 W</td><td class="crd-td">2282BC - 2032BC</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Huapula</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">2,27 S, 78,12 W</td><td class="crd-td">318BC - 68BC</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Pirincay</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">2,52 S, 78,46 W</td><td class="crd-td">213BC - 37AD</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Putushio</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">3,28 S, 79,11 W</td><td class="crd-td">1420BC - 1170BC</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Quebrada Chalan</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">1,75 S, 78,67 W</td><td class="crd-td">5295BC - 5045BC</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Uchucay</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">4,02 S, 79,19 W</td><td class="crd-td">404BC - 154BC</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Upano</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">2,21 S, 78,06 W</td><td class="crd-td">938BC - 688BC</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Achanchi</strong></td><td class="crd-td">Peru</td><td class="crd-td">13,57 S, 73,42 W</td><td class="crd-td">1182AD - 1432AD</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Anccopaccha</strong></td><td class="crd-td">Peru</td><td class="crd-td">13,6 S, 73,3 W</td><td class="crd-td">771AD - 1021AD</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Andamarca</strong></td><td class="crd-td">Peru</td><td class="crd-td">10,51 S, 76,5 W</td><td class="crd-td">1120AD - 1370AD</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ayamachay  Ac 102</strong></td><td class="crd-td">Peru</td><td class="crd-td">13,04 S, 74,23 W</td><td class="crd-td">5988BC - 5738BC</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Azangaro</strong></td><td class="crd-td">Peru</td><td class="crd-td">12,95 S, 74,29 W</td><td class="crd-td">1303AD - 1500AD</td><td class="crd-td">240</td><td class="crd-td">240</td></tr>
<tr><td class="crd-td"><strong>Campanayuq Rumi</strong></td><td class="crd-td">Peru</td><td class="crd-td">13,65 S, 73,96 W</td><td class="crd-td">891BC - 641BC</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Ccollpa</strong></td><td class="crd-td">Peru</td><td class="crd-td">11,2 S, 75,83 W</td><td class="crd-td">255BC - 5BC</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Chanapata</strong></td><td class="crd-td">Peru</td><td class="crd-td">13,28 S, 72,01 W</td><td class="crd-td">1546BC - 1296BC</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Curuqaqa</strong></td><td class="crd-td">Peru</td><td class="crd-td">10,55 S, 76,2 W</td><td class="crd-td">1641BC - 1391BC</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Espritu Pampa</strong></td><td class="crd-td">Peru</td><td class="crd-td">13,06 S, 74,2 W</td><td class="crd-td">503AD - 753AD</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Huargo</strong></td><td class="crd-td">Peru</td><td class="crd-td">9,51 S, 76,48 W</td><td class="crd-td">10000BC - 9750BC</td><td class="crd-td">240</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Huaytapallana</strong></td><td class="crd-td">Peru</td><td class="crd-td">11,5 S, 75,06 W</td><td class="crd-td">1268AD - 1500AD</td><td class="crd-td">240</td><td class="crd-td">240</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Leading 30 catalogued settlements across the Marañón, Huallaga and Ucayali Lowlands division.</figcaption>
</figure>

# Source Ledger Audit and Excluded Candidates

The PRETA source ledger records 1.104 candidate sites for the Western Amazon Basin. Of these, 617 were included as primary catalogued settlements, while 487 candidates were excluded. Exclusions fall into two distinct categories:
1. **Duplicate Alias Consolidations (482 sites, 99% of exclusions)**: Satellite survey coordinates, isolated test trenches and auxiliary mound points located within 3 km of a primary nucleated settlement were merged into the canonical site to avoid artificial spatial over-concentration.
2. **Non-Habitation Features (5 sites, 1% of exclusions)**: Isolated petroglyph boulders, ceremonial stone carvings and raw material quarries that lacked evidence of domestic habitation refuse or stratified anthrosols were excluded from settlement subtraction.

Table \ref{tab:excluded} documents the leading 25 excluded candidates from the source ledger alongside their canonical primary settlement and justification.

<figure class="crd-table-figure" id="tab:excluded">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate Site</th><th class="crd-th">Territory</th><th class="crd-th">Exclusion Category</th><th class="crd-th">Justification</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Terra Preta do Anajá</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Terra Preta d...</td></tr>
<tr><td class="crd-td"><strong>Terra Preta do Nobre</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Terra Preta d...</td></tr>
<tr><td class="crd-td"><strong>Terra Preta Sampainho</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Terra Preta D...</td></tr>
<tr><td class="crd-td"><strong>Geoglifo 6</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Geoglifo 3.</td></tr>
<tr><td class="crd-td"><strong>Terra Preta</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Terra Preta.</td></tr>
<tr><td class="crd-td"><strong>Geoglifos Colorada</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Fazenda Color...</td></tr>
<tr><td class="crd-td"><strong>Geoglifos Nictheroy II</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Geoglifos Nic...</td></tr>
<tr><td class="crd-td"><strong>Geoglifos Nictheroy III</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Geoglifos Nic...</td></tr>
<tr><td class="crd-td"><strong>Geoglifo Fazenda Concórdia</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Geoglifo Faze...</td></tr>
<tr><td class="crd-td"><strong>Geoglifo Fazenda Concórdia</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Geoglifo Faze...</td></tr>
<tr><td class="crd-td"><strong>Geoglifo Fazenda Lacerdão</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Geoglifo Faze...</td></tr>
<tr><td class="crd-td"><strong>Fazenda Vivenda Verde</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Nakahara 76.</td></tr>
<tr><td class="crd-td"><strong>Terra Preta</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Terra Preta.</td></tr>
<tr><td class="crd-td"><strong>Geoglifo</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Geoglifo.</td></tr>
<tr><td class="crd-td"><strong>Geoglifo 4</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Geoglifo 3.</td></tr>
<tr><td class="crd-td"><strong>Geoglifo 5</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Geoglifo 3.</td></tr>
<tr><td class="crd-td"><strong>Geoglifo Andirá 2</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Geoglifo Andi...</td></tr>
<tr><td class="crd-td"><strong>geoglifo</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Geoglifo.</td></tr>
<tr><td class="crd-td"><strong>ICMBio</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement São Gabriel d...</td></tr>
<tr><td class="crd-td"><strong>Campo das Panelas</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Campo da Onça.</td></tr>
<tr><td class="crd-td"><strong>Geoglifo Extrema</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Geoglifo Faze...</td></tr>
<tr><td class="crd-td"><strong>Aldeia do Cacique</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Geoglifo Aero...</td></tr>
<tr><td class="crd-td"><strong>Escola Terra Preta</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Terra Preta d...</td></tr>
<tr><td class="crd-td"><strong>Aldeia da Sadica</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Geoglifo Aero...</td></tr>
<tr><td class="crd-td"><strong>Hatahara</strong></td><td class="crd-td">Brazil</td><td class="crd-td">duplicate alias</td><td class="crd-td">Within 3 km of primary settlement Hatahara.</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Leading 25 excluded candidate sites from the Western Amazon Basin source ledger.</figcaption>
</figure>

# Limitations and Preservation Biases

Archaeological visibility in the Western Amazon Basin remains affected by preservation biases and variable survey coverage:
1. **Fluvial Lateral Erosion and Silt Inundation**: Active lateral migration of the Amazon, Marañón and Solimões river channels continually erodes riverbank levee settlements, while annual flood silts bury early Holocene archaeological deposits beneath metres of alluvium [@lathrap1970upper].
2. **Equatorial Forest Canopy Obscuration**: Outside deforested pasture zones in Acre and agricultural clearing in Moxos, thousands of ancient earthworks remain concealed beneath closed-canopy rain forest, a limitation only recently mitigated by airborne LiDAR [@peripato2023earthworks; @rostain2024upano].
3. **Perishable Organic Architecture**: Indigenous domestic structures were built primarily from wood, bamboo, vine lashings and palm thatch, which decompose rapidly in humid tropical soils, leaving subtle posthole patterns and ceramic middens as the primary residential signatures [@neves2003historical].

Despite these taphonomic factors, the cataloguing of 617 georeferenced settlements demonstrates that pre-Columbian Western Amazonia was a densely occupied, highly engineered cultural landscape.

# Sources

<div id="refs"></div>
