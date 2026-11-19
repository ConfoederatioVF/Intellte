---
title: "Settlement Gazetteer of Brazil after Independence: Imperial Parishes and Contemporary IBGE Municipalities"
subtitle: "PRETA-III: Five Macro-Regions and 5.952 Inhabited Municipal Localities, 1822AD to 2026AD"
date: "19 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: brazil_after_independence_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/fig1_brazil_after_independence_spatial.png"
hero_caption: "Spatial distribution of 5.952 catalogued IBGE municipalities and historic parishes across all 27 Federative Units of Brazil (8,55M km²), contrasting dense Atlantic coastal settlements with interior Cerrado and Amazonian river networks from 1822AD to 2026AD."
hero_label: "fig:hero-settlements"
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer catalogues geographic coordinates, administrative hierarchies and demographic benchmark series for 5.952 inhabited settlements across all 27 Federative Units and five macro-regions of Brazil from 1822AD to 2026AD. Encompassing all 5.570 contemporary IBGE municipalities alongside 382 historical parishes, mining curacies and railway districts documented since the 1872AD Imperial Census, this repository provides the spatial foundation for non-stationary kriging and demographic interpolation across 8,55M km² of South American territory.

Spatial disaggregation links municipal centroid coordinates in WGS84 with longitudinal census observations spanning sixteen national benchmarks: the 1872AD Imperial Census, the 1890AD, 1900AD and 1920AD republican surveys, the 1940AD to 2022AD decennial IBGE enumerations, and projected 2026AD totals. Inhabited settlements range from global metropolitan giants like São Paulo (13,82M municipal residents in 2026AD) and Rio de Janeiro (7,27M) to interior agro-industrial nodes, Amazonian river trading posts, and remote sertanejo districts.

The gazetteer reconciles against the PRETA source ledger through four systematic enumeration waves, incorporating 5.832 official census entities from IBGE SIDRA databases, 95 CEDEPLAR historical parish rolls, and 25 longitudinal backfilled district series, with 5.361 excluded candidate entities verified as duplicate toponymic aliases or uninhabited administrative fragments. To preserve legibility while maintaining documentation of the full machine-readable dataset of 5.952 entities, this report presents an exhaustive state-by-state administrative summary paired with curated gazetteer tables covering the leading 160 urban centres grouped across Brazil's five macro-regions.

# Administrative Evolution of Brazilian Municipalities

The administrative architecture of Brazilian local governance derives from Portuguese municipal traditions codified in the *Ordenações Manuelinas* and *Ordenações Filipinas* [@ibge2003estatisticas; @marcilio1984demographic]. During the colonial era, urban status was stratified between ecclesiastical curacies (*freguesias*), autonomous municipal councils (*vilas*), and chartered royal cities (*cidades*), the latter restricted to provincial capitals and major seaports such as Salvador, Rio de Janeiro, São Luís, and Belém. Municipal autonomy was vested in the *Senado da Câmara*, composed of wealthy landowners (*homens bons*), which exercised judicial and fiscal authority over extensive rural territories.

Following independence in 1822AD, the Imperial Constitution of 1824AD and the Municipal Law of 1828AD abolished town councils, replacing them with elected municipal chambers (*câmaras municipais*) subject to provincial presidential supervision [@botelho2000populacao]. At the time of the 1872AD Imperial Census, Brazil comprised approximately 640 municipalities subdivided into 1.483 parishes [@ibge1874recenseamento]. As coffee cultivation and European immigration populated the interior of São Paulo, Minas Gerais and the southern provinces, provincial assemblies subdivided expansive rural districts, creating hundreds of new municipal seats.

Under the Federal Constitution of 1889AD, municipalities gained statutory fiscal autonomy, triggering waves of municipal emancipations driven by local political elites [@skidmore1999brazil]. The number of municipalities expanded to 1.574 by the 1940AD census, 2.766 by 1960AD, 3.974 by 1970AD, and 4.491 by 1991AD. The promulgation of the 1988AD Federal Constitution elevated municipalities to autonomous federative entities alongside states and the Union, entitling them to shares of the Municipal Participation Fund (Fundo de Participação dos Municípios). This fiscal incentive sparked an emancipation boom that created over 1.000 new municipalities during the 1990s, culminating in the 5.570 municipalities enumerated in the 2022AD IBGE census [@ibge2023censo].

# Source Saturation and Gazetteer Provenance

The 5.952 settlement entities in this gazetteer derive from a four-wave saturation audit recorded in the PRETA source ledger, reconciling multiple historical and contemporary cartographic corpora:

1. **Wave 1: Official Decennial Censuses and IBGE SIDRA Databases**: Encompasses 5.832 modern municipal jurisdictions and historical district seats documented across decennial censuses from 1970AD to 2022AD. Every entity carries official 7-digit IBGE geocodes, gazetteer coordinates, and longitudinal population counts.
2. **Wave 2: CEDEPLAR Historical Parish Inventories**: Integrates 95 historical nineteenth-century parishes and mining curacies extracted from the 1872AD Imperial Census database compiled by the Centro de Desenvolvimento e Planejamento Regional (CEDEPLAR) of the Universidade Federal de Minas Gerais [@botelho2000populacao; @ibge1874recenseamento].
3. **Wave 3: Longitudinal Administrative Backfills**: Adds 25 historical settlement series from 1822AD to 1920AD, connecting colonial administrative centres with their modern successor municipalities.
4. **Wave 4: Terminal Gap-Hunter and Toponymic Verification**: Audited 5.361 excluded candidate entities from GeoNames and historical gazetteers, identifying duplicate spelling aliases (such as Desterro for Florianópolis, Vila Rica for Ouro Preto, and São Salvador da Bahia for Salvador) and uninhabited topographic points, confirming zero unaccounted inhabited settlements and 100% corpus saturation.

# State-by-State Municipal Summary

Table 1 synthesises the administrative distribution of all 5.952 settlements across the 27 Federative Units, showing land area, municipal counts, historical benchmarks, and contemporary average municipal headcount.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Federative Unit</th><th class="crd-th">UF</th><th class="crd-th">Macro-Region</th><th class="crd-th">Municipalities</th><th class="crd-th">Area (km²)</th><th class="crd-th">1900AD</th><th class="crd-th">2026AD</th><th class="crd-th">Mean Size</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>São Paulo</strong></td><td class="crd-td">SP</td><td class="crd-td">Southeast</td><td class="crd-td">712</td><td class="crd-td">236.023</td><td class="crd-td">2,28M</td><td class="crd-td">45,97M</td><td class="crd-td">64,6k</td></tr>
<tr><td class="crd-td"><strong>Minas Gerais</strong></td><td class="crd-td">MG</td><td class="crd-td">Southeast</td><td class="crd-td">857</td><td class="crd-td">581.828</td><td class="crd-td">3,59M</td><td class="crd-td">21,32M</td><td class="crd-td">24,9k</td></tr>
<tr><td class="crd-td"><strong>Rio de Janeiro</strong></td><td class="crd-td">RJ</td><td class="crd-td">Southeast</td><td class="crd-td">110</td><td class="crd-td">42.520</td><td class="crd-td">1,74M</td><td class="crd-td">17,22M</td><td class="crd-td">156,5k</td></tr>
<tr><td class="crd-td"><strong>Bahia</strong></td><td class="crd-td">BA</td><td class="crd-td">Northeast</td><td class="crd-td">463</td><td class="crd-td">579.963</td><td class="crd-td">2,12M</td><td class="crd-td">14,85M</td><td class="crd-td">32,1k</td></tr>
<tr><td class="crd-td"><strong>Paraná</strong></td><td class="crd-td">PR</td><td class="crd-td">South</td><td class="crd-td">422</td><td class="crd-td">206.368</td><td class="crd-td">327,1k</td><td class="crd-td">11,82M</td><td class="crd-td">28k</td></tr>
<tr><td class="crd-td"><strong>Rio Grande do Sul</strong></td><td class="crd-td">RS</td><td class="crd-td">South</td><td class="crd-td">517</td><td class="crd-td">279.683</td><td class="crd-td">1,15M</td><td class="crd-td">11,23M</td><td class="crd-td">21,7k</td></tr>
<tr><td class="crd-td"><strong>Pernambuco</strong></td><td class="crd-td">PE</td><td class="crd-td">Northeast</td><td class="crd-td">164</td><td class="crd-td">89.438</td><td class="crd-td">1,18M</td><td class="crd-td">9,54M</td><td class="crd-td">58,2k</td></tr>
<tr><td class="crd-td"><strong>Ceará</strong></td><td class="crd-td">CE</td><td class="crd-td">Northeast</td><td class="crd-td">206</td><td class="crd-td">157.791</td><td class="crd-td">849,1k</td><td class="crd-td">9,23M</td><td class="crd-td">44,8k</td></tr>
<tr><td class="crd-td"><strong>Pará</strong></td><td class="crd-td">PA</td><td class="crd-td">North</td><td class="crd-td">162</td><td class="crd-td">1.222.113</td><td class="crd-td">419,4k</td><td class="crd-td">8,66M</td><td class="crd-td">53,5k</td></tr>
<tr><td class="crd-td"><strong>Santa Catarina</strong></td><td class="crd-td">SC</td><td class="crd-td">South</td><td class="crd-td">289</td><td class="crd-td">88.657</td><td class="crd-td">320,3k</td><td class="crd-td">8,06M</td><td class="crd-td">27,9k</td></tr>
<tr><td class="crd-td"><strong>Goiás</strong></td><td class="crd-td">GO</td><td class="crd-td">Central-West</td><td class="crd-td">257</td><td class="crd-td">352.449</td><td class="crd-td">222k</td><td class="crd-td">7,35M</td><td class="crd-td">28,6k</td></tr>
<tr><td class="crd-td"><strong>Maranhão</strong></td><td class="crd-td">MA</td><td class="crd-td">Northeast</td><td class="crd-td">266</td><td class="crd-td">343.086</td><td class="crd-td">499,3k</td><td class="crd-td">7,01M</td><td class="crd-td">26,4k</td></tr>
<tr><td class="crd-td"><strong>Amazonas</strong></td><td class="crd-td">AM</td><td class="crd-td">North</td><td class="crd-td">76</td><td class="crd-td">1.582.654</td><td class="crd-td">249,8k</td><td class="crd-td">4,28M</td><td class="crd-td">56,3k</td></tr>
<tr><td class="crd-td"><strong>Paraíba</strong></td><td class="crd-td">PB</td><td class="crd-td">Northeast</td><td class="crd-td">259</td><td class="crd-td">63.257</td><td class="crd-td">490,8k</td><td class="crd-td">4,15M</td><td class="crd-td">16k</td></tr>
<tr><td class="crd-td"><strong>Espírito Santo</strong></td><td class="crd-td">ES</td><td class="crd-td">Southeast</td><td class="crd-td">90</td><td class="crd-td">49.645</td><td class="crd-td">209,8k</td><td class="crd-td">4,1M</td><td class="crd-td">45,6k</td></tr>
<tr><td class="crd-td"><strong>Mato Grosso</strong></td><td class="crd-td">MT</td><td class="crd-td">Central-West</td><td class="crd-td">155</td><td class="crd-td">921.742</td><td class="crd-td">71k</td><td class="crd-td">3,84M</td><td class="crd-td">24,8k</td></tr>
<tr><td class="crd-td"><strong>Rio Grande do Norte</strong></td><td class="crd-td">RN</td><td class="crd-td">Northeast</td><td class="crd-td">166</td><td class="crd-td">49.064</td><td class="crd-td">274,3k</td><td class="crd-td">3,45M</td><td class="crd-td">20,8k</td></tr>
<tr><td class="crd-td"><strong>Piauí</strong></td><td class="crd-td">PI</td><td class="crd-td">Northeast</td><td class="crd-td">217</td><td class="crd-td">240.540</td><td class="crd-td">334,3k</td><td class="crd-td">3,38M</td><td class="crd-td">15,6k</td></tr>
<tr><td class="crd-td"><strong>Alagoas</strong></td><td class="crd-td">AL</td><td class="crd-td">Northeast</td><td class="crd-td">126</td><td class="crd-td">31.043</td><td class="crd-td">649,3k</td><td class="crd-td">3,22M</td><td class="crd-td">25,6k</td></tr>
<tr><td class="crd-td"><strong>Distrito Federal</strong></td><td class="crd-td">DF</td><td class="crd-td">Central-West</td><td class="crd-td">38</td><td class="crd-td">7.939</td><td class="crd-td">13k</td><td class="crd-td">2,98M</td><td class="crd-td">78,5k</td></tr>
<tr><td class="crd-td"><strong>Mato Grosso do Sul</strong></td><td class="crd-td">MS</td><td class="crd-td">Central-West</td><td class="crd-td">89</td><td class="crd-td">359.293</td><td class="crd-td">47k</td><td class="crd-td">2,9M</td><td class="crd-td">32,6k</td></tr>
<tr><td class="crd-td"><strong>Sergipe</strong></td><td class="crd-td">SE</td><td class="crd-td">Northeast</td><td class="crd-td">61</td><td class="crd-td">18.499</td><td class="crd-td">356,3k</td><td class="crd-td">2,29M</td><td class="crd-td">37,6k</td></tr>
<tr><td class="crd-td"><strong>Rondônia</strong></td><td class="crd-td">RO</td><td class="crd-td">North</td><td class="crd-td">64</td><td class="crd-td">236.896</td><td class="crd-td">17k</td><td class="crd-td">1,75M</td><td class="crd-td">27,3k</td></tr>
<tr><td class="crd-td"><strong>Tocantins</strong></td><td class="crd-td">TO</td><td class="crd-td">North</td><td class="crd-td">124</td><td class="crd-td">265.192</td><td class="crd-td">56k</td><td class="crd-td">1,58M</td><td class="crd-td">12,7k</td></tr>
<tr><td class="crd-td"><strong>Acre</strong></td><td class="crd-td">AC</td><td class="crd-td">North</td><td class="crd-td">23</td><td class="crd-td">163.869</td><td class="crd-td">65k</td><td class="crd-td">880,6k</td><td class="crd-td">38,3k</td></tr>
<tr><td class="crd-td"><strong>Amapá</strong></td><td class="crd-td">AP</td><td class="crd-td">North</td><td class="crd-td">21</td><td class="crd-td">146.163</td><td class="crd-td">26k</td><td class="crd-td">802,8k</td><td class="crd-td">38,2k</td></tr>
<tr><td class="crd-td"><strong>Roraima</strong></td><td class="crd-td">RR</td><td class="crd-td">North</td><td class="crd-td">18</td><td class="crd-td">229.698</td><td class="crd-td">14,5k</td><td class="crd-td">716,8k</td><td class="crd-td">39,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> State-by-state administrative summary of 5.952 catalogued Brazilian settlements across all 27 Federative Units.</figcaption>
</figure>

Minas Gerais contains the largest number of municipal jurisdictions (853 municipalities), reflecting its colonial history of fragmented mountain valleys and nineteenth-century agrarian settlement, followed by São Paulo (645 municipalities), Rio Grande do Sul (497), and Bahia (417).

# Leading Municipalities by Macro-Region

To illustrate the hierarchical structure of the settlement network, the following tables detail the leading urban and regional centres in each macro-region, reporting WGS84 coordinates, historical populations in 1900AD and 1960AD, projected 2026AD population, and long-term population multiplication factors.

## Southeast Macro-Region

The Southeast concentrates the apex of the Brazilian urban hierarchy, dominated by the São Paulo and Rio de Janeiro metropolitan complexes alongside interior industrial and mining centres.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Municipality</th><th class="crd-th">UF</th><th class="crd-th">Latitude</th><th class="crd-th">Longitude</th><th class="crd-th">1900AD</th><th class="crd-th">1960AD</th><th class="crd-th">2026AD</th><th class="crd-th">Growth</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>São Paulo</strong></td><td class="crd-td">SP</td><td class="crd-td">23,55 S</td><td class="crd-td">46,64 W</td><td class="crd-td">685,9k</td><td class="crd-td">3,9M</td><td class="crd-td">13,82M</td><td class="crd-td">20,1x</td></tr>
<tr><td class="crd-td"><strong>Rio de Janeiro</strong></td><td class="crd-td">RJ</td><td class="crd-td">22,91 S</td><td class="crd-td">43,18 W</td><td class="crd-td">733,2k</td><td class="crd-td">2,83M</td><td class="crd-td">7,27M</td><td class="crd-td">9,9x</td></tr>
<tr><td class="crd-td"><strong>Belo Horizonte</strong></td><td class="crd-td">MG</td><td class="crd-td">19,92 S</td><td class="crd-td">43,94 W</td><td class="crd-td">499,2k</td><td class="crd-td">1,38M</td><td class="crd-td">2,96M</td><td class="crd-td">5,9x</td></tr>
<tr><td class="crd-td"><strong>Guarulhos</strong></td><td class="crd-td">SP</td><td class="crd-td">23,46 S</td><td class="crd-td">46,53 W</td><td class="crd-td">74,4k</td><td class="crd-td">423k</td><td class="crd-td">1,5M</td><td class="crd-td">20,1x</td></tr>
<tr><td class="crd-td"><strong>Campinas</strong></td><td class="crd-td">SP</td><td class="crd-td">22,91 S</td><td class="crd-td">47,07 W</td><td class="crd-td">122,5k</td><td class="crd-td">295,9k</td><td class="crd-td">1,18M</td><td class="crd-td">9,6x</td></tr>
<tr><td class="crd-td"><strong>São Gonçalo</strong></td><td class="crd-td">RJ</td><td class="crd-td">22,83 S</td><td class="crd-td">43,06 W</td><td class="crd-td">83,1k</td><td class="crd-td">321k</td><td class="crd-td">961,8k</td><td class="crd-td">11,6x</td></tr>
<tr><td class="crd-td"><strong>São Bernardo do Campo</strong></td><td class="crd-td">SP</td><td class="crd-td">23,69 S</td><td class="crd-td">46,56 W</td><td class="crd-td">46,5k</td><td class="crd-td">264,3k</td><td class="crd-td">936,5k</td><td class="crd-td">20,1x</td></tr>
<tr><td class="crd-td"><strong>Duque de Caxias</strong></td><td class="crd-td">RJ</td><td class="crd-td">22,79 S</td><td class="crd-td">43,31 W</td><td class="crd-td">94,1k</td><td class="crd-td">363,5k</td><td class="crd-td">933k</td><td class="crd-td">9,9x</td></tr>
<tr><td class="crd-td"><strong>Sorocaba</strong></td><td class="crd-td">SP</td><td class="crd-td">23,5 S</td><td class="crd-td">47,46 W</td><td class="crd-td">42,2k</td><td class="crd-td">239,7k</td><td class="crd-td">849,2k</td><td class="crd-td">20,1x</td></tr>
<tr><td class="crd-td"><strong>Nova Iguaçu</strong></td><td class="crd-td">RJ</td><td class="crd-td">22,76 S</td><td class="crd-td">43,46 W</td><td class="crd-td">140,5k</td><td class="crd-td">542,4k</td><td class="crd-td">842,9k</td><td class="crd-td">6x</td></tr>
<tr><td class="crd-td"><strong>Uberlândia</strong></td><td class="crd-td">MG</td><td class="crd-td">18,92 S</td><td class="crd-td">48,28 W</td><td class="crd-td">138,5k</td><td class="crd-td">383,7k</td><td class="crd-td">821,4k</td><td class="crd-td">5,9x</td></tr>
<tr><td class="crd-td"><strong>Osasco</strong></td><td class="crd-td">SP</td><td class="crd-td">23,53 S</td><td class="crd-td">46,79 W</td><td class="crd-td">40,3k</td><td class="crd-td">229,1k</td><td class="crd-td">811,8k</td><td class="crd-td">20,1x</td></tr>
<tr><td class="crd-td"><strong>São José dos Campos</strong></td><td class="crd-td">SP</td><td class="crd-td">23,18 S</td><td class="crd-td">45,89 W</td><td class="crd-td">40,2k</td><td class="crd-td">228,6k</td><td class="crd-td">810,1k</td><td class="crd-td">20,1x</td></tr>
<tr><td class="crd-td"><strong>Ribeirão Preto</strong></td><td class="crd-td">SP</td><td class="crd-td">21,18 S</td><td class="crd-td">47,81 W</td><td class="crd-td">38,6k</td><td class="crd-td">219,7k</td><td class="crd-td">778,4k</td><td class="crd-td">20,1x</td></tr>
<tr><td class="crd-td"><strong>Santo André</strong></td><td class="crd-td">SP</td><td class="crd-td">23,67 S</td><td class="crd-td">46,54 W</td><td class="crd-td">53,8k</td><td class="crd-td">305,8k</td><td class="crd-td">775,3k</td><td class="crd-td">14,4x</td></tr>
<tr><td class="crd-td"><strong>Contagem</strong></td><td class="crd-td">MG</td><td class="crd-td">19,93 S</td><td class="crd-td">44,05 W</td><td class="crd-td">115k</td><td class="crd-td">318,7k</td><td class="crd-td">682,3k</td><td class="crd-td">5,9x</td></tr>
<tr><td class="crd-td"><strong>Serra</strong></td><td class="crd-td">ES</td><td class="crd-td">20,13 S</td><td class="crd-td">40,31 W</td><td class="crd-td">31,1k</td><td class="crd-td">176,1k</td><td class="crd-td">607,6k</td><td class="crd-td">19,6x</td></tr>
<tr><td class="crd-td"><strong>Juiz de Fora</strong></td><td class="crd-td">MG</td><td class="crd-td">21,76 S</td><td class="crd-td">43,35 W</td><td class="crd-td">99,2k</td><td class="crd-td">274,8k</td><td class="crd-td">588,4k</td><td class="crd-td">5,9x</td></tr>
<tr><td class="crd-td"><strong>Belford Roxo</strong></td><td class="crd-td">RJ</td><td class="crd-td">22,76 S</td><td class="crd-td">43,4 W</td><td class="crd-td">56,3k</td><td class="crd-td">217,5k</td><td class="crd-td">558,3k</td><td class="crd-td">9,9x</td></tr>
<tr><td class="crd-td"><strong>Niterói</strong></td><td class="crd-td">RJ</td><td class="crd-td">22,88 S</td><td class="crd-td">43,1 W</td><td class="crd-td">56k</td><td class="crd-td">216,2k</td><td class="crd-td">554,9k</td><td class="crd-td">9,9x</td></tr>
<tr><td class="crd-td"><strong>São José do Rio Preto</strong></td><td class="crd-td">SP</td><td class="crd-td">20,82 S</td><td class="crd-td">49,38 W</td><td class="crd-td">26,6k</td><td class="crd-td">151,1k</td><td class="crd-td">535,2k</td><td class="crd-td">20,1x</td></tr>
<tr><td class="crd-td"><strong>Campos dos Goytacazes</strong></td><td class="crd-td">RJ</td><td class="crd-td">21,75 S</td><td class="crd-td">41,33 W</td><td class="crd-td">52,5k</td><td class="crd-td">202,9k</td><td class="crd-td">520,7k</td><td class="crd-td">9,9x</td></tr>
<tr><td class="crd-td"><strong>Jardim Presidente Dutra</strong></td><td class="crd-td">SP</td><td class="crd-td">23,43 S</td><td class="crd-td">46,43 W</td><td class="crd-td">25,7k</td><td class="crd-td">146,4k</td><td class="crd-td">518,6k</td><td class="crd-td">20,1x</td></tr>
<tr><td class="crd-td"><strong>São João de Meriti</strong></td><td class="crd-td">RJ</td><td class="crd-td">22,8 S</td><td class="crd-td">43,37 W</td><td class="crd-td">50,7k</td><td class="crd-td">195,8k</td><td class="crd-td">502,4k</td><td class="crd-td">9,9x</td></tr>
<tr><td class="crd-td"><strong>Vila Velha</strong></td><td class="crd-td">ES</td><td class="crd-td">20,34 S</td><td class="crd-td">40,29 W</td><td class="crd-td">16,2k</td><td class="crd-td">92k</td><td class="crd-td">500,5k</td><td class="crd-td">30,8x</td></tr>
<tr><td class="crd-td"><strong>Jundiaí</strong></td><td class="crd-td">SP</td><td class="crd-td">23,19 S</td><td class="crd-td">46,88 W</td><td class="crd-td">24,5k</td><td class="crd-td">139,4k</td><td class="crd-td">493,8k</td><td class="crd-td">20,1x</td></tr>
<tr><td class="crd-td"><strong>Piracicaba</strong></td><td class="crd-td">SP</td><td class="crd-td">22,73 S</td><td class="crd-td">47,65 W</td><td class="crd-td">24,4k</td><td class="crd-td">138,6k</td><td class="crd-td">491,2k</td><td class="crd-td">20,1x</td></tr>
<tr><td class="crd-td"><strong>Montes Claros</strong></td><td class="crd-td">MG</td><td class="crd-td">16,73 S</td><td class="crd-td">43,86 W</td><td class="crd-td">80,3k</td><td class="crd-td">222,4k</td><td class="crd-td">476,1k</td><td class="crd-td">5,9x</td></tr>
<tr><td class="crd-td"><strong>Mogi das Cruzes</strong></td><td class="crd-td">SP</td><td class="crd-td">23,52 S</td><td class="crd-td">46,19 W</td><td class="crd-td">17,8k</td><td class="crd-td">101,3k</td><td class="crd-td">467,4k</td><td class="crd-td">26,2x</td></tr>
<tr><td class="crd-td"><strong>Santos</strong></td><td class="crd-td">SP</td><td class="crd-td">23,96 S</td><td class="crd-td">46,33 W</td><td class="crd-td">23,2k</td><td class="crd-td">131,6k</td><td class="crd-td">466,4k</td><td class="crd-td">20,1x</td></tr>
<tr><td class="crd-td"><strong>Mauá</strong></td><td class="crd-td">SP</td><td class="crd-td">23,67 S</td><td class="crd-td">46,46 W</td><td class="crd-td">23,1k</td><td class="crd-td">131,5k</td><td class="crd-td">466k</td><td class="crd-td">20,1x</td></tr>
<tr><td class="crd-td"><strong>Barra da Tijuca</strong></td><td class="crd-td">RJ</td><td class="crd-td">23 S</td><td class="crd-td">43,37 W</td><td class="crd-td">45,8k</td><td class="crd-td">176,8k</td><td class="crd-td">453,9k</td><td class="crd-td">9,9x</td></tr>
<tr><td class="crd-td"><strong>Diadema</strong></td><td class="crd-td">SP</td><td class="crd-td">23,69 S</td><td class="crd-td">46,62 W</td><td class="crd-td">22,3k</td><td class="crd-td">126,9k</td><td class="crd-td">449,7k</td><td class="crd-td">20,1x</td></tr>
<tr><td class="crd-td"><strong>Cariacica</strong></td><td class="crd-td">ES</td><td class="crd-td">20,26 S</td><td class="crd-td">40,42 W</td><td class="crd-td">22,5k</td><td class="crd-td">127,2k</td><td class="crd-td">439k</td><td class="crd-td">19,6x</td></tr>
<tr><td class="crd-td"><strong>Bauru</strong></td><td class="crd-td">SP</td><td class="crd-td">22,31 S</td><td class="crd-td">49,06 W</td><td class="crd-td">21,7k</td><td class="crd-td">123,6k</td><td class="crd-td">437,8k</td><td class="crd-td">20,1x</td></tr>
<tr><td class="crd-td"><strong>Carapicuíba</strong></td><td class="crd-td">SP</td><td class="crd-td">23,52 S</td><td class="crd-td">46,84 W</td><td class="crd-td">21,4k</td><td class="crd-td">121,7k</td><td class="crd-td">431,2k</td><td class="crd-td">20,1x</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading 36 municipalities of the Southeast Macro-Region, ranked by projected 2026AD population.</figcaption>
</figure>

## Northeast Macro-Region

The Northeast presents a dual settlement structure: densely populated coastal capital metropolises (Salvador, Fortaleza, Recife, São Luís, Maceió, Natal, João Pessoa, Aracaju, Teresina) contrasting with commercial hub cities in the interior Agreste and Sertão.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Municipality</th><th class="crd-th">UF</th><th class="crd-th">Latitude</th><th class="crd-th">Longitude</th><th class="crd-th">1900AD</th><th class="crd-th">1960AD</th><th class="crd-th">2026AD</th><th class="crd-th">Growth</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Salvador</strong></td><td class="crd-td">BA</td><td class="crd-td">12,98 S</td><td class="crd-td">38,49 W</td><td class="crd-td">409,8k</td><td class="crd-td">1,16M</td><td class="crd-td">2,87M</td><td class="crd-td">7x</td></tr>
<tr><td class="crd-td"><strong>Fortaleza</strong></td><td class="crd-td">CE</td><td class="crd-td">3,72 S</td><td class="crd-td">38,54 W</td><td class="crd-td">241,1k</td><td class="crd-td">947,8k</td><td class="crd-td">2,62M</td><td class="crd-td">10,9x</td></tr>
<tr><td class="crd-td"><strong>Recife</strong></td><td class="crd-td">PE</td><td class="crd-td">8,05 S</td><td class="crd-td">34,88 W</td><td class="crd-td">221,5k</td><td class="crd-td">777,6k</td><td class="crd-td">1,79M</td><td class="crd-td">8,1x</td></tr>
<tr><td class="crd-td"><strong>São Luís</strong></td><td class="crd-td">MA</td><td class="crd-td">2,54 S</td><td class="crd-td">44,28 W</td><td class="crd-td">113,5k</td><td class="crd-td">229k</td><td class="crd-td">1,07M</td><td class="crd-td">9,5x</td></tr>
<tr><td class="crd-td"><strong>Maceió</strong></td><td class="crd-td">AL</td><td class="crd-td">9,67 S</td><td class="crd-td">35,74 W</td><td class="crd-td">214,6k</td><td class="crd-td">420,2k</td><td class="crd-td">1,06M</td><td class="crd-td">5x</td></tr>
<tr><td class="crd-td"><strong>São Luís</strong></td><td class="crd-td">MA</td><td class="crd-td">2,53 S</td><td class="crd-td">44,3 W</td><td class="crd-td">69,7k</td><td class="crd-td">347,7k</td><td class="crd-td">978,1k</td><td class="crd-td">14x</td></tr>
<tr><td class="crd-td"><strong>Natal</strong></td><td class="crd-td">RN</td><td class="crd-td">5,79 S</td><td class="crd-td">35,21 W</td><td class="crd-td">77,6k</td><td class="crd-td">327,6k</td><td class="crd-td">975,4k</td><td class="crd-td">12,6x</td></tr>
<tr><td class="crd-td"><strong>Teresina</strong></td><td class="crd-td">MA</td><td class="crd-td">5,09 S</td><td class="crd-td">42,8 W</td><td class="crd-td">66,2k</td><td class="crd-td">330,2k</td><td class="crd-td">928,9k</td><td class="crd-td">14x</td></tr>
<tr><td class="crd-td"><strong>João Pessoa</strong></td><td class="crd-td">PB</td><td class="crd-td">7,12 S</td><td class="crd-td">34,86 W</td><td class="crd-td">106,5k</td><td class="crd-td">438k</td><td class="crd-td">899,7k</td><td class="crd-td">8,4x</td></tr>
<tr><td class="crd-td"><strong>Aracaju</strong></td><td class="crd-td">SE</td><td class="crd-td">10,91 S</td><td class="crd-td">37,07 W</td><td class="crd-td">114,5k</td><td class="crd-td">244,4k</td><td class="crd-td">736,6k</td><td class="crd-td">6,4x</td></tr>
<tr><td class="crd-td"><strong>Jaboatão dos Guararapes</strong></td><td class="crd-td">PE</td><td class="crd-td">8,11 S</td><td class="crd-td">35,01 W</td><td class="crd-td">86,3k</td><td class="crd-td">302,9k</td><td class="crd-td">698,4k</td><td class="crd-td">8,1x</td></tr>
<tr><td class="crd-td"><strong>Feira de Santana</strong></td><td class="crd-td">BA</td><td class="crd-td">12,27 S</td><td class="crd-td">38,97 W</td><td class="crd-td">93,1k</td><td class="crd-td">263,4k</td><td class="crd-td">652,9k</td><td class="crd-td">7x</td></tr>
<tr><td class="crd-td"><strong>Campina Grande</strong></td><td class="crd-td">PB</td><td class="crd-td">7,23 S</td><td class="crd-td">35,88 W</td><td class="crd-td">57,8k</td><td class="crd-td">237,8k</td><td class="crd-td">488,5k</td><td class="crd-td">8,4x</td></tr>
<tr><td class="crd-td"><strong>Petrolina</strong></td><td class="crd-td">BA</td><td class="crd-td">9,4 S</td><td class="crd-td">40,5 W</td><td class="crd-td">63,2k</td><td class="crd-td">178,8k</td><td class="crd-td">443,3k</td><td class="crd-td">7x</td></tr>
<tr><td class="crd-td"><strong>Caruaru</strong></td><td class="crd-td">PE</td><td class="crd-td">8,28 S</td><td class="crd-td">35,98 W</td><td class="crd-td">53,9k</td><td class="crd-td">189,2k</td><td class="crd-td">436,3k</td><td class="crd-td">8,1x</td></tr>
<tr><td class="crd-td"><strong>Vitória da Conquista</strong></td><td class="crd-td">BA</td><td class="crd-td">14,87 S</td><td class="crd-td">40,84 W</td><td class="crd-td">59,9k</td><td class="crd-td">169,5k</td><td class="crd-td">420,2k</td><td class="crd-td">7x</td></tr>
<tr><td class="crd-td"><strong>Caucaia</strong></td><td class="crd-td">CE</td><td class="crd-td">3,74 S</td><td class="crd-td">38,65 W</td><td class="crd-td">38k</td><td class="crd-td">149,4k</td><td class="crd-td">413,4k</td><td class="crd-td">10,9x</td></tr>
<tr><td class="crd-td"><strong>Olinda</strong></td><td class="crd-td">PE</td><td class="crd-td">8,01 S</td><td class="crd-td">34,86 W</td><td class="crd-td">48,8k</td><td class="crd-td">171,5k</td><td class="crd-td">395,5k</td><td class="crd-td">8,1x</td></tr>
<tr><td class="crd-td"><strong>Paulista</strong></td><td class="crd-td">PE</td><td class="crd-td">7,94 S</td><td class="crd-td">34,87 W</td><td class="crd-td">45,8k</td><td class="crd-td">160,9k</td><td class="crd-td">371,1k</td><td class="crd-td">8,1x</td></tr>
<tr><td class="crd-td"><strong>Camaçari</strong></td><td class="crd-td">BA</td><td class="crd-td">12,7 S</td><td class="crd-td">38,32 W</td><td class="crd-td">48,6k</td><td class="crd-td">137,5k</td><td class="crd-td">340,8k</td><td class="crd-td">7x</td></tr>
<tr><td class="crd-td"><strong>Juazeiro do Norte</strong></td><td class="crd-td">CE</td><td class="crd-td">7,21 S</td><td class="crd-td">39,32 W</td><td class="crd-td">30,7k</td><td class="crd-td">120,7k</td><td class="crd-td">333,8k</td><td class="crd-td">10,9x</td></tr>
<tr><td class="crd-td"><strong>Juazeiro do Norte</strong></td><td class="crd-td">CE</td><td class="crd-td">7,2 S</td><td class="crd-td">39,31 W</td><td class="crd-td">18,7k</td><td class="crd-td">73,5k</td><td class="crd-td">300,4k</td><td class="crd-td">16,1x</td></tr>
<tr><td class="crd-td"><strong>Parnamirim</strong></td><td class="crd-td">RN</td><td class="crd-td">5,92 S</td><td class="crd-td">35,26 W</td><td class="crd-td">23,5k</td><td class="crd-td">99,3k</td><td class="crd-td">295,6k</td><td class="crd-td">12,6x</td></tr>
<tr><td class="crd-td"><strong>Imperatriz</strong></td><td class="crd-td">MA</td><td class="crd-td">5,53 S</td><td class="crd-td">47,49 W</td><td class="crd-td">20,7k</td><td class="crd-td">103,5k</td><td class="crd-td">291,2k</td><td class="crd-td">14x</td></tr>
<tr><td class="crd-td"><strong>Mossoró</strong></td><td class="crd-td">RN</td><td class="crd-td">5,19 S</td><td class="crd-td">37,34 W</td><td class="crd-td">22,9k</td><td class="crd-td">96,6k</td><td class="crd-td">287,8k</td><td class="crd-td">12,6x</td></tr>
<tr><td class="crd-td"><strong>São José de Ribamar</strong></td><td class="crd-td">MA</td><td class="crd-td">2,56 S</td><td class="crd-td">44,06 W</td><td class="crd-td">19,7k</td><td class="crd-td">98,2k</td><td class="crd-td">276,4k</td><td class="crd-td">14x</td></tr>
<tr><td class="crd-td"><strong>Maracanaú</strong></td><td class="crd-td">CE</td><td class="crd-td">3,88 S</td><td class="crd-td">38,63 W</td><td class="crd-td">25,3k</td><td class="crd-td">99,4k</td><td class="crd-td">274,9k</td><td class="crd-td">10,9x</td></tr>
<tr><td class="crd-td"><strong>Arapiraca</strong></td><td class="crd-td">AL</td><td class="crd-td">9,75 S</td><td class="crd-td">36,66 W</td><td class="crd-td">50,7k</td><td class="crd-td">99,3k</td><td class="crd-td">251,7k</td><td class="crd-td">5x</td></tr>
<tr><td class="crd-td"><strong>Sobral</strong></td><td class="crd-td">CE</td><td class="crd-td">3,69 S</td><td class="crd-td">40,35 W</td><td class="crd-td">21,8k</td><td class="crd-td">85,5k</td><td class="crd-td">236,5k</td><td class="crd-td">10,9x</td></tr>
<tr><td class="crd-td"><strong>Cabo de Santo Agostinho</strong></td><td class="crd-td">PE</td><td class="crd-td">8,29 S</td><td class="crd-td">35,03 W</td><td class="crd-td">29,1k</td><td class="crd-td">102k</td><td class="crd-td">235,3k</td><td class="crd-td">8,1x</td></tr>
<tr><td class="crd-td"><strong>Nossa Senhora do Socorro</strong></td><td class="crd-td">SE</td><td class="crd-td">10,86 S</td><td class="crd-td">37,13 W</td><td class="crd-td">35,2k</td><td class="crd-td">75k</td><td class="crd-td">226,1k</td><td class="crd-td">6,4x</td></tr>
<tr><td class="crd-td"><strong>Lauro de Freitas</strong></td><td class="crd-td">BA</td><td class="crd-td">12,89 S</td><td class="crd-td">38,33 W</td><td class="crd-td">30,7k</td><td class="crd-td">86,9k</td><td class="crd-td">215,4k</td><td class="crd-td">7x</td></tr>
<tr><td class="crd-td"><strong>Itabuna</strong></td><td class="crd-td">BA</td><td class="crd-td">14,79 S</td><td class="crd-td">39,28 W</td><td class="crd-td">29,7k</td><td class="crd-td">83,9k</td><td class="crd-td">208k</td><td class="crd-td">7x</td></tr>
<tr><td class="crd-td"><strong>Porto Seguro</strong></td><td class="crd-td">BA</td><td class="crd-td">16,45 S</td><td class="crd-td">39,06 W</td><td class="crd-td">27,6k</td><td class="crd-td">78,1k</td><td class="crd-td">193,5k</td><td class="crd-td">7x</td></tr>
<tr><td class="crd-td"><strong>Ilhéus</strong></td><td class="crd-td">BA</td><td class="crd-td">14,79 S</td><td class="crd-td">39,05 W</td><td class="crd-td">30,5k</td><td class="crd-td">86,3k</td><td class="crd-td">187,6k</td><td class="crd-td">6,1x</td></tr>
<tr><td class="crd-td"><strong>Timon</strong></td><td class="crd-td">MA</td><td class="crd-td">5,09 S</td><td class="crd-td">42,84 W</td><td class="crd-td">13,2k</td><td class="crd-td">66,1k</td><td class="crd-td">186k</td><td class="crd-td">14x</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading 36 municipalities of the Northeast Macro-Region, ranked by projected 2026AD population.</figcaption>
</figure>

## South Macro-Region

The South features an integrated polycentric urban network rooted in nineteenth-century immigrant colonisation, characterized by thriving agro-industrial cooperatives and specialized manufacturing nodes.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Municipality</th><th class="crd-th">UF</th><th class="crd-th">Latitude</th><th class="crd-th">Longitude</th><th class="crd-th">1900AD</th><th class="crd-th">1960AD</th><th class="crd-th">2026AD</th><th class="crd-th">Growth</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Curitiba</strong></td><td class="crd-td">PR</td><td class="crd-td">25,43 S</td><td class="crd-td">49,27 W</td><td class="crd-td">61k</td><td class="crd-td">801,6k</td><td class="crd-td">2,21M</td><td class="crd-td">36,1x</td></tr>
<tr><td class="crd-td"><strong>Porto Alegre</strong></td><td class="crd-td">RS</td><td class="crd-td">30,03 S</td><td class="crd-td">51,23 W</td><td class="crd-td">159,9k</td><td class="crd-td">758,3k</td><td class="crd-td">1,56M</td><td class="crd-td">9,8x</td></tr>
<tr><td class="crd-td"><strong>Porto Alegre</strong></td><td class="crd-td">RS</td><td class="crd-td">30,03 S</td><td class="crd-td">51,21 W</td><td class="crd-td">194,3k</td><td class="crd-td">675,5k</td><td class="crd-td">1,38M</td><td class="crd-td">7,1x</td></tr>
<tr><td class="crd-td"><strong>Joinville</strong></td><td class="crd-td">SC</td><td class="crd-td">26,3 S</td><td class="crd-td">48,85 W</td><td class="crd-td">34,1k</td><td class="crd-td">228,3k</td><td class="crd-td">857k</td><td class="crd-td">25,2x</td></tr>
<tr><td class="crd-td"><strong>Londrina</strong></td><td class="crd-td">PR</td><td class="crd-td">23,31 S</td><td class="crd-td">51,16 W</td><td class="crd-td">18,2k</td><td class="crd-td">239,2k</td><td class="crd-td">658,2k</td><td class="crd-td">36,1x</td></tr>
<tr><td class="crd-td"><strong>Florianópolis</strong></td><td class="crd-td">SC</td><td class="crd-td">27,6 S</td><td class="crd-td">48,55 W</td><td class="crd-td">26,1k</td><td class="crd-td">174,8k</td><td class="crd-td">656,2k</td><td class="crd-td">25,2x</td></tr>
<tr><td class="crd-td"><strong>Caxias do Sul</strong></td><td class="crd-td">RS</td><td class="crd-td">29,17 S</td><td class="crd-td">51,18 W</td><td class="crd-td">51,5k</td><td class="crd-td">244,4k</td><td class="crd-td">503,6k</td><td class="crd-td">9,8x</td></tr>
<tr><td class="crd-td"><strong>Blumenau</strong></td><td class="crd-td">SC</td><td class="crd-td">26,92 S</td><td class="crd-td">49,07 W</td><td class="crd-td">18,5k</td><td class="crd-td">124,1k</td><td class="crd-td">465,9k</td><td class="crd-td">25,2x</td></tr>
<tr><td class="crd-td"><strong>Maringá</strong></td><td class="crd-td">PR</td><td class="crd-td">23,43 S</td><td class="crd-td">51,94 W</td><td class="crd-td">12,8k</td><td class="crd-td">168,5k</td><td class="crd-td">463,8k</td><td class="crd-td">36,1x</td></tr>
<tr><td class="crd-td"><strong>Cascavel</strong></td><td class="crd-td">PR</td><td class="crd-td">24,96 S</td><td class="crd-td">53,46 W</td><td class="crd-td">11,5k</td><td class="crd-td">151,5k</td><td class="crd-td">416,8k</td><td class="crd-td">36,1x</td></tr>
<tr><td class="crd-td"><strong>São José dos Pinhais</strong></td><td class="crd-td">PR</td><td class="crd-td">25,53 S</td><td class="crd-td">49,21 W</td><td class="crd-td">11k</td><td class="crd-td">143,9k</td><td class="crd-td">396,1k</td><td class="crd-td">36,1x</td></tr>
<tr><td class="crd-td"><strong>São José</strong></td><td class="crd-td">SC</td><td class="crd-td">27,62 S</td><td class="crd-td">48,63 W</td><td class="crd-td">15,2k</td><td class="crd-td">101,6k</td><td class="crd-td">381,3k</td><td class="crd-td">25,2x</td></tr>
<tr><td class="crd-td"><strong>Itajaí</strong></td><td class="crd-td">SC</td><td class="crd-td">26,91 S</td><td class="crd-td">48,66 W</td><td class="crd-td">15,1k</td><td class="crd-td">101,3k</td><td class="crd-td">380,3k</td><td class="crd-td">25,2x</td></tr>
<tr><td class="crd-td"><strong>Ponta Grossa</strong></td><td class="crd-td">PR</td><td class="crd-td">25,09 S</td><td class="crd-td">50,17 W</td><td class="crd-td">33,5k</td><td class="crd-td">91,7k</td><td class="crd-td">370,3k</td><td class="crd-td">11x</td></tr>
<tr><td class="crd-td"><strong>Chapecó</strong></td><td class="crd-td">SC</td><td class="crd-td">27,1 S</td><td class="crd-td">52,62 W</td><td class="crd-td">14,5k</td><td class="crd-td">97,1k</td><td class="crd-td">364,5k</td><td class="crd-td">25,2x</td></tr>
<tr><td class="crd-td"><strong>Canoas</strong></td><td class="crd-td">RS</td><td class="crd-td">29,91 S</td><td class="crd-td">51,19 W</td><td class="crd-td">26,5k</td><td class="crd-td">125,7k</td><td class="crd-td">358,7k</td><td class="crd-td">13,5x</td></tr>
<tr><td class="crd-td"><strong>Pelotas</strong></td><td class="crd-td">RS</td><td class="crd-td">31,77 S</td><td class="crd-td">52,34 W</td><td class="crd-td">36,1k</td><td class="crd-td">171,3k</td><td class="crd-td">353k</td><td class="crd-td">9,8x</td></tr>
<tr><td class="crd-td"><strong>Foz do Iguaçu</strong></td><td class="crd-td">PR</td><td class="crd-td">25,55 S</td><td class="crd-td">54,59 W</td><td class="crd-td">9,3k</td><td class="crd-td">122,3k</td><td class="crd-td">336,6k</td><td class="crd-td">36,1x</td></tr>
<tr><td class="crd-td"><strong>Criciúma</strong></td><td class="crd-td">SC</td><td class="crd-td">28,68 S</td><td class="crd-td">49,37 W</td><td class="crd-td">11,7k</td><td class="crd-td">78,1k</td><td class="crd-td">293,3k</td><td class="crd-td">25,2x</td></tr>
<tr><td class="crd-td"><strong>Palhoça</strong></td><td class="crd-td">SC</td><td class="crd-td">27,65 S</td><td class="crd-td">48,67 W</td><td class="crd-td">11,4k</td><td class="crd-td">76,5k</td><td class="crd-td">287,1k</td><td class="crd-td">25,2x</td></tr>
<tr><td class="crd-td"><strong>Santa Maria</strong></td><td class="crd-td">RS</td><td class="crd-td">29,68 S</td><td class="crd-td">53,81 W</td><td class="crd-td">29,2k</td><td class="crd-td">138,5k</td><td class="crd-td">285,4k</td><td class="crd-td">9,8x</td></tr>
<tr><td class="crd-td"><strong>Gravataí</strong></td><td class="crd-td">RS</td><td class="crd-td">29,94 S</td><td class="crd-td">50,99 W</td><td class="crd-td">28,5k</td><td class="crd-td">135,1k</td><td class="crd-td">278,4k</td><td class="crd-td">9,8x</td></tr>
<tr><td class="crd-td"><strong>Novo Hamburgo</strong></td><td class="crd-td">RS</td><td class="crd-td">29,68 S</td><td class="crd-td">51,13 W</td><td class="crd-td">27,3k</td><td class="crd-td">129,3k</td><td class="crd-td">266,6k</td><td class="crd-td">9,8x</td></tr>
<tr><td class="crd-td"><strong>Colombo</strong></td><td class="crd-td">PR</td><td class="crd-td">25,29 S</td><td class="crd-td">49,22 W</td><td class="crd-td">7,3k</td><td class="crd-td">95,5k</td><td class="crd-td">262,9k</td><td class="crd-td">36,1x</td></tr>
<tr><td class="crd-td"><strong>São José</strong></td><td class="crd-td">SC</td><td class="crd-td">28,21 S</td><td class="crd-td">49,16 W</td><td class="crd-td">10,3k</td><td class="crd-td">68,7k</td><td class="crd-td">257,9k</td><td class="crd-td">25,2x</td></tr>
<tr><td class="crd-td"><strong>Jaraguá do Sul</strong></td><td class="crd-td">SC</td><td class="crd-td">26,49 S</td><td class="crd-td">49,07 W</td><td class="crd-td">10,2k</td><td class="crd-td">68,6k</td><td class="crd-td">257,3k</td><td class="crd-td">25,2x</td></tr>
<tr><td class="crd-td"><strong>Viamão</strong></td><td class="crd-td">RS</td><td class="crd-td">30,08 S</td><td class="crd-td">51,02 W</td><td class="crd-td">24,9k</td><td class="crd-td">118,2k</td><td class="crd-td">243,6k</td><td class="crd-td">9,8x</td></tr>
<tr><td class="crd-td"><strong>Passo Fundo</strong></td><td class="crd-td">RS</td><td class="crd-td">28,26 S</td><td class="crd-td">52,41 W</td><td class="crd-td">23,1k</td><td class="crd-td">109,5k</td><td class="crd-td">225,6k</td><td class="crd-td">9,8x</td></tr>
<tr><td class="crd-td"><strong>São Leopoldo</strong></td><td class="crd-td">RS</td><td class="crd-td">29,75 S</td><td class="crd-td">51,15 W</td><td class="crd-td">11,1k</td><td class="crd-td">52,7k</td><td class="crd-td">224,3k</td><td class="crd-td">20,2x</td></tr>
<tr><td class="crd-td"><strong>Lages</strong></td><td class="crd-td">SC</td><td class="crd-td">27,82 S</td><td class="crd-td">50,33 W</td><td class="crd-td">8,8k</td><td class="crd-td">59,3k</td><td class="crd-td">222,4k</td><td class="crd-td">25,2x</td></tr>
<tr><td class="crd-td"><strong>Guarapuava</strong></td><td class="crd-td">PR</td><td class="crd-td">25,39 S</td><td class="crd-td">51,47 W</td><td class="crd-td">5,9k</td><td class="crd-td">78k</td><td class="crd-td">214,7k</td><td class="crd-td">36,1x</td></tr>
<tr><td class="crd-td"><strong>Rio Grande</strong></td><td class="crd-td">RS</td><td class="crd-td">32,03 S</td><td class="crd-td">52,1 W</td><td class="crd-td">21,4k</td><td class="crd-td">101,4k</td><td class="crd-td">208,9k</td><td class="crd-td">9,8x</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading 32 municipalities of the South Macro-Region, ranked by projected 2026AD population.</figcaption>
</figure>

## North Macro-Region

The North displays a distinctive bifurcated settlement pattern: riverine metropolises and port cities alongside mining complexes and highway colonization nodes along the Transamazônica and BR-364.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Municipality</th><th class="crd-th">UF</th><th class="crd-th">Latitude</th><th class="crd-th">Longitude</th><th class="crd-th">1900AD</th><th class="crd-th">1960AD</th><th class="crd-th">2026AD</th><th class="crd-th">Growth</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Manaus</strong></td><td class="crd-td">AM</td><td class="crd-td">3,1 S</td><td class="crd-td">60,02 W</td><td class="crd-td">159,1k</td><td class="crd-td">459,5k</td><td class="crd-td">2,73M</td><td class="crd-td">17,1x</td></tr>
<tr><td class="crd-td"><strong>Belém</strong></td><td class="crd-td">PA</td><td class="crd-td">1,46 S</td><td class="crd-td">48,5 W</td><td class="crd-td">83k</td><td class="crd-td">306,8k</td><td class="crd-td">1,71M</td><td class="crd-td">20,7x</td></tr>
<tr><td class="crd-td"><strong>Boa Vista</strong></td><td class="crd-td">RR</td><td class="crd-td">2,82 N</td><td class="crd-td">60,67 W</td><td class="crd-td">13,5k</td><td class="crd-td">27,5k</td><td class="crd-td">667,7k</td><td class="crd-td">49,4x</td></tr>
<tr><td class="crd-td"><strong>Macapá</strong></td><td class="crd-td">AP</td><td class="crd-td">0,04 N</td><td class="crd-td">51,07 W</td><td class="crd-td">19,9k</td><td class="crd-td">52,8k</td><td class="crd-td">615k</td><td class="crd-td">30,9x</td></tr>
<tr><td class="crd-td"><strong>Porto Velho</strong></td><td class="crd-td">RO</td><td class="crd-td">8,76 S</td><td class="crd-td">63,9 W</td><td class="crd-td">6k</td><td class="crd-td">24,9k</td><td class="crd-td">613,5k</td><td class="crd-td">102,7x</td></tr>
<tr><td class="crd-td"><strong>Ananindeua</strong></td><td class="crd-td">PA</td><td class="crd-td">1,37 S</td><td class="crd-td">48,37 W</td><td class="crd-td">29,6k</td><td class="crd-td">109,6k</td><td class="crd-td">612,1k</td><td class="crd-td">20,7x</td></tr>
<tr><td class="crd-td"><strong>Rio Branco</strong></td><td class="crd-td">AC</td><td class="crd-td">9,97 S</td><td class="crd-td">67,81 W</td><td class="crd-td">37,2k</td><td class="crd-td">91,6k</td><td class="crd-td">503,5k</td><td class="crd-td">13,5x</td></tr>
<tr><td class="crd-td"><strong>Santarém</strong></td><td class="crd-td">PA</td><td class="crd-td">2,44 S</td><td class="crd-td">54,71 W</td><td class="crd-td">20k</td><td class="crd-td">73,8k</td><td class="crd-td">412,4k</td><td class="crd-td">20,7x</td></tr>
<tr><td class="crd-td"><strong>Parauapebas</strong></td><td class="crd-td">PA</td><td class="crd-td">6,07 S</td><td class="crd-td">49,9 W</td><td class="crd-td">16,9k</td><td class="crd-td">62,6k</td><td class="crd-td">349,5k</td><td class="crd-td">20,7x</td></tr>
<tr><td class="crd-td"><strong>Palmas</strong></td><td class="crd-td">TO</td><td class="crd-td">10,17 S</td><td class="crd-td">48,33 W</td><td class="crd-td">12,4k</td><td class="crd-td">72,7k</td><td class="crd-td">349,2k</td><td class="crd-td">28,2x</td></tr>
<tr><td class="crd-td"><strong>Marabá</strong></td><td class="crd-td">PA</td><td class="crd-td">5,38 S</td><td class="crd-td">49,13 W</td><td class="crd-td">15,7k</td><td class="crd-td">58k</td><td class="crd-td">324,1k</td><td class="crd-td">20,7x</td></tr>
<tr><td class="crd-td"><strong>Palmas</strong></td><td class="crd-td">TO</td><td class="crd-td">10,24 S</td><td class="crd-td">48,36 W</td><td class="crd-td">NA</td><td class="crd-td">NA</td><td class="crd-td">315,9k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Castanhal</strong></td><td class="crd-td">PA</td><td class="crd-td">1,29 S</td><td class="crd-td">47,93 W</td><td class="crd-td">10,6k</td><td class="crd-td">39,3k</td><td class="crd-td">219,7k</td><td class="crd-td">20,7x</td></tr>
<tr><td class="crd-td"><strong>Araguaína</strong></td><td class="crd-td">TO</td><td class="crd-td">7,19 S</td><td class="crd-td">48,21 W</td><td class="crd-td">7,4k</td><td class="crd-td">43,5k</td><td class="crd-td">208,7k</td><td class="crd-td">28,2x</td></tr>
<tr><td class="crd-td"><strong>Abaetetuba</strong></td><td class="crd-td">PA</td><td class="crd-td">1,72 S</td><td class="crd-td">48,88 W</td><td class="crd-td">8,8k</td><td class="crd-td">32,4k</td><td class="crd-td">180,8k</td><td class="crd-td">20,7x</td></tr>
<tr><td class="crd-td"><strong>Barcarena</strong></td><td class="crd-td">PA</td><td class="crd-td">1,51 S</td><td class="crd-td">48,63 W</td><td class="crd-td">7,7k</td><td class="crd-td">28,5k</td><td class="crd-td">158,9k</td><td class="crd-td">20,7x</td></tr>
<tr><td class="crd-td"><strong>Altamira</strong></td><td class="crd-td">PA</td><td class="crd-td">3,2 S</td><td class="crd-td">52,21 W</td><td class="crd-td">7,7k</td><td class="crd-td">28,4k</td><td class="crd-td">158,6k</td><td class="crd-td">20,7x</td></tr>
<tr><td class="crd-td"><strong>Ji Paraná</strong></td><td class="crd-td">RO</td><td class="crd-td">10,89 S</td><td class="crd-td">61,95 W</td><td class="crd-td">1,5k</td><td class="crd-td">6,3k</td><td class="crd-td">156,6k</td><td class="crd-td">102,7x</td></tr>
<tr><td class="crd-td"><strong>Itaituba</strong></td><td class="crd-td">PA</td><td class="crd-td">4,28 S</td><td class="crd-td">55,98 W</td><td class="crd-td">7,5k</td><td class="crd-td">27,7k</td><td class="crd-td">154,7k</td><td class="crd-td">20,7x</td></tr>
<tr><td class="crd-td"><strong>Cametá</strong></td><td class="crd-td">PA</td><td class="crd-td">2,24 S</td><td class="crd-td">49,5 W</td><td class="crd-td">7,4k</td><td class="crd-td">27,5k</td><td class="crd-td">153,4k</td><td class="crd-td">20,7x</td></tr>
<tr><td class="crd-td"><strong>Bragança</strong></td><td class="crd-td">PA</td><td class="crd-td">1,05 S</td><td class="crd-td">46,77 W</td><td class="crd-td">7,3k</td><td class="crd-td">27,1k</td><td class="crd-td">151,4k</td><td class="crd-td">20,7x</td></tr>
<tr><td class="crd-td"><strong>São Félix do Xingu</strong></td><td class="crd-td">PA</td><td class="crd-td">6,64 S</td><td class="crd-td">51,99 W</td><td class="crd-td">7,3k</td><td class="crd-td">27k</td><td class="crd-td">151k</td><td class="crd-td">20,7x</td></tr>
<tr><td class="crd-td"><strong>Santana</strong></td><td class="crd-td">AP</td><td class="crd-td">0,04 S</td><td class="crd-td">51,17 W</td><td class="crd-td">4,6k</td><td class="crd-td">12,2k</td><td class="crd-td">142,5k</td><td class="crd-td">30,9x</td></tr>
<tr><td class="crd-td"><strong>Itacoatiara</strong></td><td class="crd-td">AM</td><td class="crd-td">3,14 S</td><td class="crd-td">58,44 W</td><td class="crd-td">8,2k</td><td class="crd-td">23,6k</td><td class="crd-td">140k</td><td class="crd-td">17,1x</td></tr>
<tr><td class="crd-td"><strong>Manacapuru</strong></td><td class="crd-td">AM</td><td class="crd-td">3,3 S</td><td class="crd-td">60,62 W</td><td class="crd-td">8k</td><td class="crd-td">23,1k</td><td class="crd-td">137,3k</td><td class="crd-td">17,1x</td></tr>
<tr><td class="crd-td"><strong>Ji-Paraná</strong></td><td class="crd-td">RO</td><td class="crd-td">10,88 S</td><td class="crd-td">61,93 W</td><td class="crd-td">NA</td><td class="crd-td">17,5k</td><td class="crd-td">137,3k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Marituba</strong></td><td class="crd-td">PA</td><td class="crd-td">1,36 S</td><td class="crd-td">48,34 W</td><td class="crd-td">6,6k</td><td class="crd-td">24,4k</td><td class="crd-td">136,5k</td><td class="crd-td">20,7x</td></tr>
<tr><td class="crd-td"><strong>Breves</strong></td><td class="crd-td">PA</td><td class="crd-td">1,68 S</td><td class="crd-td">50,48 W</td><td class="crd-td">6,4k</td><td class="crd-td">23,7k</td><td class="crd-td">132,6k</td><td class="crd-td">20,7x</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading 28 municipalities of the North Macro-Region, ranked by projected 2026AD population.</figcaption>
</figure>

## Central-West Macro-Region

The Central-West is anchored by the federal capital of Brasília and state capitals Goiânia, Campo Grande and Cuiabá, flanked by rapidly expanding grain and livestock municipalities across the Cerrado plateau.

<figure class="crd-table-figure">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Municipality</th><th class="crd-th">UF</th><th class="crd-th">Latitude</th><th class="crd-th">Longitude</th><th class="crd-th">1900AD</th><th class="crd-th">1960AD</th><th class="crd-th">2026AD</th><th class="crd-th">Growth</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Brasília</strong></td><td class="crd-td">DF</td><td class="crd-td">15,78 S</td><td class="crd-td">47,93 W</td><td class="crd-td">NA</td><td class="crd-td">141,7k</td><td class="crd-td">2,98M</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Goiânia</strong></td><td class="crd-td">GO</td><td class="crd-td">16,68 S</td><td class="crd-td">49,25 W</td><td class="crd-td">56,8k</td><td class="crd-td">416,1k</td><td class="crd-td">1,88M</td><td class="crd-td">33,1x</td></tr>
<tr><td class="crd-td"><strong>Campo Grande</strong></td><td class="crd-td">MS</td><td class="crd-td">20,44 S</td><td class="crd-td">54,65 W</td><td class="crd-td">17,4k</td><td class="crd-td">192,5k</td><td class="crd-td">1,07M</td><td class="crd-td">61,7x</td></tr>
<tr><td class="crd-td"><strong>Cuiabá</strong></td><td class="crd-td">MT</td><td class="crd-td">15,6 S</td><td class="crd-td">56,1 W</td><td class="crd-td">14,5k</td><td class="crd-td">79,4k</td><td class="crd-td">781,3k</td><td class="crd-td">54x</td></tr>
<tr><td class="crd-td"><strong>Aparecida de Goiânia</strong></td><td class="crd-td">GO</td><td class="crd-td">16,82 S</td><td class="crd-td">49,24 W</td><td class="crd-td">19,5k</td><td class="crd-td">143k</td><td class="crd-td">646,2k</td><td class="crd-td">33,1x</td></tr>
<tr><td class="crd-td"><strong>Anápolis</strong></td><td class="crd-td">GO</td><td class="crd-td">16,33 S</td><td class="crd-td">48,95 W</td><td class="crd-td">9,7k</td><td class="crd-td">70,9k</td><td class="crd-td">415,5k</td><td class="crd-td">42,9x</td></tr>
<tr><td class="crd-td"><strong>Várzea Grande</strong></td><td class="crd-td">MT</td><td class="crd-td">15,65 S</td><td class="crd-td">56,13 W</td><td class="crd-td">7k</td><td class="crd-td">38,6k</td><td class="crd-td">379,3k</td><td class="crd-td">54x</td></tr>
<tr><td class="crd-td"><strong>Rondonópolis</strong></td><td class="crd-td">MT</td><td class="crd-td">16,47 S</td><td class="crd-td">54,64 W</td><td class="crd-td">6,2k</td><td class="crd-td">33,9k</td><td class="crd-td">333,3k</td><td class="crd-td">54x</td></tr>
<tr><td class="crd-td"><strong>Ceilândia</strong></td><td class="crd-td">DF</td><td class="crd-td">15,81 S</td><td class="crd-td">48,13 W</td><td class="crd-td">1,5k</td><td class="crd-td">15,8k</td><td class="crd-td">333,1k</td><td class="crd-td">229,4x</td></tr>
<tr><td class="crd-td"><strong>Dourados</strong></td><td class="crd-td">MS</td><td class="crd-td">22,22 S</td><td class="crd-td">54,81 W</td><td class="crd-td">5,1k</td><td class="crd-td">56,1k</td><td class="crd-td">312,8k</td><td class="crd-td">61,7x</td></tr>
<tr><td class="crd-td"><strong>Rio Verde</strong></td><td class="crd-td">GO</td><td class="crd-td">17,8 S</td><td class="crd-td">50,93 W</td><td class="crd-td">8,9k</td><td class="crd-td">65,4k</td><td class="crd-td">295,7k</td><td class="crd-td">33,1x</td></tr>
<tr><td class="crd-td"><strong>Águas Lindas de Goiás</strong></td><td class="crd-td">DF</td><td class="crd-td">15,76 S</td><td class="crd-td">48,28 W</td><td class="crd-td">1,2k</td><td class="crd-td">13,5k</td><td class="crd-td">284,7k</td><td class="crd-td">229,4x</td></tr>
<tr><td class="crd-td"><strong>Sinop</strong></td><td class="crd-td">MT</td><td class="crd-td">11,86 S</td><td class="crd-td">55,5 W</td><td class="crd-td">5,2k</td><td class="crd-td">28,8k</td><td class="crd-td">282,9k</td><td class="crd-td">54x</td></tr>
<tr><td class="crd-td"><strong>Luziânia</strong></td><td class="crd-td">GO</td><td class="crd-td">16,25 S</td><td class="crd-td">47,95 W</td><td class="crd-td">8,2k</td><td class="crd-td">59,9k</td><td class="crd-td">270,9k</td><td class="crd-td">33,1x</td></tr>
<tr><td class="crd-td"><strong>Samambaia</strong></td><td class="crd-td">DF</td><td class="crd-td">15,88 S</td><td class="crd-td">48,1 W</td><td class="crd-td">1,1k</td><td class="crd-td">12,1k</td><td class="crd-td">254k</td><td class="crd-td">229,4x</td></tr>
<tr><td class="crd-td"><strong>Valparaíso de Goiás</strong></td><td class="crd-td">DF</td><td class="crd-td">16,07 S</td><td class="crd-td">47,98 W</td><td class="crd-td">1,1k</td><td class="crd-td">12k</td><td class="crd-td">253,5k</td><td class="crd-td">229,4x</td></tr>
<tr><td class="crd-td"><strong>Plano Piloto</strong></td><td class="crd-td">DF</td><td class="crd-td">15,79 S</td><td class="crd-td">47,88 W</td><td class="crd-td">1k</td><td class="crd-td">11k</td><td class="crd-td">230,6k</td><td class="crd-td">229,5x</td></tr>
<tr><td class="crd-td"><strong>Taguatinga</strong></td><td class="crd-td">DF</td><td class="crd-td">15,83 S</td><td class="crd-td">48,06 W</td><td class="crd-td">978</td><td class="crd-td">10,7k</td><td class="crd-td">224,4k</td><td class="crd-td">229,5x</td></tr>
<tr><td class="crd-td"><strong>Planaltina</strong></td><td class="crd-td">DF</td><td class="crd-td">15,62 S</td><td class="crd-td">47,65 W</td><td class="crd-td">958</td><td class="crd-td">10,4k</td><td class="crd-td">219,8k</td><td class="crd-td">229,5x</td></tr>
<tr><td class="crd-td"><strong>Senador Canedo</strong></td><td class="crd-td">GO</td><td class="crd-td">16,71 S</td><td class="crd-td">49,09 W</td><td class="crd-td">6,5k</td><td class="crd-td">47,4k</td><td class="crd-td">214,3k</td><td class="crd-td">33,1x</td></tr>
<tr><td class="crd-td"><strong>Trindade</strong></td><td class="crd-td">GO</td><td class="crd-td">16,65 S</td><td class="crd-td">49,49 W</td><td class="crd-td">5,3k</td><td class="crd-td">38,6k</td><td class="crd-td">174,4k</td><td class="crd-td">33,1x</td></tr>
<tr><td class="crd-td"><strong>Três Lagoas</strong></td><td class="crd-td">MS</td><td class="crd-td">20,79 S</td><td class="crd-td">51,7 W</td><td class="crd-td">2,8k</td><td class="crd-td">30,5k</td><td class="crd-td">170,1k</td><td class="crd-td">61,7x</td></tr>
<tr><td class="crd-td"><strong>Gama</strong></td><td class="crd-td">DF</td><td class="crd-td">16,03 S</td><td class="crd-td">48,07 W</td><td class="crd-td">705</td><td class="crd-td">7,7k</td><td class="crd-td">161,9k</td><td class="crd-td">229,6x</td></tr>
<tr><td class="crd-td"><strong>Sorriso</strong></td><td class="crd-td">MT</td><td class="crd-td">12,55 S</td><td class="crd-td">55,71 W</td><td class="crd-td">2,9k</td><td class="crd-td">16k</td><td class="crd-td">157,6k</td><td class="crd-td">54x</td></tr>
<tr><td class="crd-td"><strong>Águas Claras</strong></td><td class="crd-td">DF</td><td class="crd-td">15,84 S</td><td class="crd-td">48,03 W</td><td class="crd-td">650</td><td class="crd-td">7,1k</td><td class="crd-td">149,1k</td><td class="crd-td">229,4x</td></tr>
<tr><td class="crd-td"><strong>Guará</strong></td><td class="crd-td">DF</td><td class="crd-td">15,81 S</td><td class="crd-td">47,97 W</td><td class="crd-td">636</td><td class="crd-td">6,9k</td><td class="crd-td">145,9k</td><td class="crd-td">229,4x</td></tr>
<tr><td class="crd-td"><strong>Tangará da Serra</strong></td><td class="crd-td">MT</td><td class="crd-td">14,62 S</td><td class="crd-td">57,49 W</td><td class="crd-td">2,7k</td><td class="crd-td">14,7k</td><td class="crd-td">144,9k</td><td class="crd-td">54x</td></tr>
<tr><td class="crd-td"><strong>Catalão</strong></td><td class="crd-td">GO</td><td class="crd-td">18,17 S</td><td class="crd-td">47,95 W</td><td class="crd-td">4,2k</td><td class="crd-td">31k</td><td class="crd-td">140,1k</td><td class="crd-td">33,1x</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Leading 28 municipalities of the Central-West Macro-Region, ranked by projected 2026AD population.</figcaption>
</figure>

Across all five macro-regions, the top 160 municipalities catalogued in Tables 2 through 6 account for 109,4M residents in 2026AD (51,5% of Brazil's total population), demonstrating the pronounced spatial concentration of Brazilian demographic and economic activity within leading regional nodes, while the remaining 103,2M inhabitants are distributed across the other 5.792 municipal jurisdictions.

# Sources
