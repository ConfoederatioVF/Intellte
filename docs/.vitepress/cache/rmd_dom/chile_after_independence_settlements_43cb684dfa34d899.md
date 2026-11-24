---
title: "Chile after Independence"
subtitle: "Settlement Gazetteer, Metropolitan Conurbations and Urban Hierarchy, 1818-2026"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/chile_after_independence_urban_hierarchy.png"
hero_caption: "Twelve largest Chilean settlements and log-log rank-size distribution across 354 catalogued entries, 1818-2026."
hero_label: "fig:hero-chile-hierarchy"
bibliography: chile_after_independence_literature_review.bib
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



![Twelve largest Chilean settlements and log-log rank-size distribution across 354 catalogued entries, 1818-2026.](figures/chile_after_independence_urban_hierarchy.png)



# Abstract

This gazetteer catalogues 354 Chilean settlements, *comunas* and metropolitan agglomerations across all 16 regions of continental Chile (excluding Rapa Nui) from 1818 to 2026. Primary national census series deliver 280 entries in Wave 1 (79,1%), followed by 49 georeference repairs and metropolitan reconciliations in Wave 2 (13,84%), 21 nineteenth- and early twentieth-century longitudinal municipal backfills in Wave 3 (5,93%) and 4 sub-regional gap checks in Wave 4 (1,13%), reaching a marginal saturation gain of 1,14% with zero excluded rows and zero crowd-sourced entries. Across all 354 entries - comprising 296 standalone municipalities, 48 independent suburban *comunas* and 10 census metropolitan agglomerations - peak population follows a tight Zipf power-law distribution ($\alpha = 1,01$, $R^2 = 0,92$), spanning from small Patagonian and altiplano communes such as Tortel (585), Río Verde (600) and Ollagüe (911) up through regional capitals like Antofagasta (444,3k), Temuco (309,7k) and Puerto Montt (281k) to Gran Concepción (722,9k), Gran Valparaíso (901,5k) and Gran Santiago at 6,16M inhabitants [@Chile2018Sintesis; @Chile2010Censos; @Acuna2008Santiago].

# Background

Modern Chilean urban geography reflects a century of municipal subdivision and metropolitan spillover around historic colonial cities [@Acuna2008Santiago; @Dockemdorff2000Santiago]. In 1835, Santiago and Valparaíso functioned as compact single municipalities, while nineteenth-century frontier expansion added mining ports in the Norte Grande, German-settled river towns in Los Ríos and Los Lagos, railway capitals in La Araucanía and sheep-ranching ports in Magallanes [@Gamboa1929Poblacion; @Ojeda2019Voces; @Miranda2024Trayectoria]. After 1940, rapid rural-to-urban migration turned former agricultural districts surrounding Santiago, Valparaíso and Concepción into densely populated suburban *comunas* - notably Puente Alto, Maipú, La Florida, Viña del Mar, Quilpué, Talcahuano and San Pedro de la Paz - whose municipal autonomy makes explicit metropolitan accounting indispensable [@Guisaoalvarez2025Calvo; @Rubio2023Distribucion; @Mardones2001Zonificacion].

# Methodology

The settlement register was assembled through four audited waves documented in the chapter source ledger, drawing exhaustively on two primary institutional corpora: the 354-row harmonised INE communal time-series (1952-2024) and the 18-benchmark OCE and INE historical census series (1835-1940), alongside the 2017 INE metropolitan agglomeration definitions [@Chile2010Censos; @Chile2018Sintesis]. Every retained record carries WGS84 coordinates, a unique region identifier among the 16 modern divisions, an explicit scope classification (standalone city proper, suburban *comuna* or metropolitan agglomeration) and a scholarly provenance tag. Suburban *comunas* are retained as independent longitudinal entries so intra-metropolitan shifts - such as inner-city depopulation versus peripheral expansion and post-2010 vertical densification - remain directly observable without double-counting [@Bro2021Surname; @Apolinariofaria2024Esteticas].

# Testing and Validation

Source-ledger reconciliation confirms exact accounting across all 354 candidate rows (354 included entries and 0 excluded rows), with complete coverage across all 16 regions from 5 entries in Arica y Parinacota to 58 in the Región Metropolitana de Santiago. Figure \ref{fig:sett-regional-map} maps the full settlement network from Arica and Colchane in the far north to Cabo de Hornos on Navarino Island, including the Juan Fernández archipelago inset [@Chile2018Sintesis; @Alvarezmaldonado2024Dinamica].

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_quipu/1.0-chile-after-independence-settlements/chile_after_independence_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 354 catalogued Chilean settlements and metropolitan centres across 16 regions, 1818-2026.</figcaption>
</figure>

# Results

## Leading Settlements and Metropolitan Agglomerations

Table \ref{tab:top30-sites} lists the 30 largest catalogued entries ordered by peak recorded population. Gran Santiago (6,16M in 2017) stands nearly seven times above Gran Valparaíso (901,5k) and more than eight times above Gran Concepción (722,9k), while at the municipal level Santiago's 1960 peak (976k prior to outer-comuna splits) is followed by Puente Alto (667,9k in 2024), Maipú (586,8k), Antofagasta (444,3k) and La Florida (407,3k) [@Acuna2008Santiago; @Huaringa2023Exercising; @Rubio2023Distribucion].

<figure class="crd-table-figure" id="tab:top30-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Region</th><th class="crd-th">Scope</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gran Santiago (Metro)</strong></td><td class="crd-td">Región Metropolitana de Santiago</td><td class="crd-td">Metro</td><td class="crd-td">-33,45, -70,65</td><td class="crd-td">2017</td><td class="crd-td">6,16M (2017)</td></tr>
<tr><td class="crd-td"><strong>Santiago</strong></td><td class="crd-td">Región Metropolitana de Santiago</td><td class="crd-td">City proper</td><td class="crd-td">-33,45, -70,65</td><td class="crd-td">1835-2024</td><td class="crd-td">976k (1960)</td></tr>
<tr><td class="crd-td"><strong>Gran Valparaíso (Metro)</strong></td><td class="crd-td">Región de Valparaíso</td><td class="crd-td">Metro</td><td class="crd-td">-33,12, -71,61</td><td class="crd-td">2017</td><td class="crd-td">901,5k (2017)</td></tr>
<tr><td class="crd-td"><strong>Gran Concepción (Metro)</strong></td><td class="crd-td">Región del Bío-Bío</td><td class="crd-td">Metro</td><td class="crd-td">-36,84, -72,96</td><td class="crd-td">2017</td><td class="crd-td">722,9k (2017)</td></tr>
<tr><td class="crd-td"><strong>Puente Alto</strong></td><td class="crd-td">Región Metropolitana de Santiago</td><td class="crd-td">Suburb</td><td class="crd-td">-33,59, -70,55</td><td class="crd-td">1952-2024</td><td class="crd-td">667,9k (2024)</td></tr>
<tr><td class="crd-td"><strong>Maipú</strong></td><td class="crd-td">Región Metropolitana de Santiago</td><td class="crd-td">Suburb</td><td class="crd-td">-33,52, -70,81</td><td class="crd-td">1952-2024</td><td class="crd-td">586,8k (2024)</td></tr>
<tr><td class="crd-td"><strong>Antofagasta</strong></td><td class="crd-td">Región de Antofagasta</td><td class="crd-td">City proper</td><td class="crd-td">-24,23, -69,32</td><td class="crd-td">1875-2024</td><td class="crd-td">444,3k (2024)</td></tr>
<tr><td class="crd-td"><strong>La Florida</strong></td><td class="crd-td">Región Metropolitana de Santiago</td><td class="crd-td">Suburb</td><td class="crd-td">-33,53, -70,54</td><td class="crd-td">1952-2024</td><td class="crd-td">407,3k (2024)</td></tr>
<tr><td class="crd-td"><strong>Gran La Serena (Metro)</strong></td><td class="crd-td">Región de Coquimbo</td><td class="crd-td">Metro</td><td class="crd-td">-29,84, -71,09</td><td class="crd-td">2017</td><td class="crd-td">401,9k (2017)</td></tr>
<tr><td class="crd-td"><strong>Viña del Mar</strong></td><td class="crd-td">Región de Valparaíso</td><td class="crd-td">Suburb</td><td class="crd-td">-33,02, -71,52</td><td class="crd-td">1885-2024</td><td class="crd-td">371,5k (2024)</td></tr>
<tr><td class="crd-td"><strong>Gran Antofagasta (Metro)</strong></td><td class="crd-td">Región de Antofagasta</td><td class="crd-td">Metro</td><td class="crd-td">-24,23, -69,32</td><td class="crd-td">2017</td><td class="crd-td">352,6k (2017)</td></tr>
<tr><td class="crd-td"><strong>San Bernardo</strong></td><td class="crd-td">Región Metropolitana de Santiago</td><td class="crd-td">Suburb</td><td class="crd-td">-33,64, -70,69</td><td class="crd-td">1952-2024</td><td class="crd-td">348,6k (2024)</td></tr>
<tr><td class="crd-td"><strong>Las Condes</strong></td><td class="crd-td">Región Metropolitana de Santiago</td><td class="crd-td">Suburb</td><td class="crd-td">-33,42, -70,52</td><td class="crd-td">1952-2024</td><td class="crd-td">343,6k (2024)</td></tr>
<tr><td class="crd-td"><strong>Valparaíso</strong></td><td class="crd-td">Región de Valparaíso</td><td class="crd-td">City proper</td><td class="crd-td">-33,12, -71,61</td><td class="crd-td">1835-2024</td><td class="crd-td">320,8k (2024)</td></tr>
<tr><td class="crd-td"><strong>Temuco</strong></td><td class="crd-td">Región de La Araucanía</td><td class="crd-td">City proper</td><td class="crd-td">-38,67, -72,63</td><td class="crd-td">1895-2024</td><td class="crd-td">309,7k (2024)</td></tr>
<tr><td class="crd-td"><strong>Gran Iquique (Metro)</strong></td><td class="crd-td">Región de Tarapacá</td><td class="crd-td">Metro</td><td class="crd-td">-20,75, -70,11</td><td class="crd-td">2017</td><td class="crd-td">294,9k (2017)</td></tr>
<tr><td class="crd-td"><strong>Gran Rancagua (Metro)</strong></td><td class="crd-td">Región del Libertador Bernardo O'Higgins</td><td class="crd-td">Metro</td><td class="crd-td">-34,12, -70,82</td><td class="crd-td">2017</td><td class="crd-td">290,9k (2017)</td></tr>
<tr><td class="crd-td"><strong>Puerto Montt</strong></td><td class="crd-td">Región de Los Lagos</td><td class="crd-td">City proper</td><td class="crd-td">-41,51, -72,58</td><td class="crd-td">1865-2024</td><td class="crd-td">281k (2024)</td></tr>
<tr><td class="crd-td"><strong>Gran Temuco (Metro)</strong></td><td class="crd-td">Región de La Araucanía</td><td class="crd-td">Metro</td><td class="crd-td">-38,67, -72,63</td><td class="crd-td">2017</td><td class="crd-td">278,5k (2017)</td></tr>
<tr><td class="crd-td"><strong>Quilicura</strong></td><td class="crd-td">Región Metropolitana de Santiago</td><td class="crd-td">Suburb</td><td class="crd-td">-33,36, -70,74</td><td class="crd-td">1952-2024</td><td class="crd-td">275,7k (2024)</td></tr>
<tr><td class="crd-td"><strong>Coquimbo</strong></td><td class="crd-td">Región de Coquimbo</td><td class="crd-td">Suburb</td><td class="crd-td">-30,23, -71,33</td><td class="crd-td">1952-2024</td><td class="crd-td">275,6k (2024)</td></tr>
<tr><td class="crd-td"><strong>Rancagua</strong></td><td class="crd-td">Región del Libertador Bernardo O'Higgins</td><td class="crd-td">City proper</td><td class="crd-td">-34,12, -70,82</td><td class="crd-td">1865-2024</td><td class="crd-td">274,4k (2024)</td></tr>
<tr><td class="crd-td"><strong>Peñalolén</strong></td><td class="crd-td">Región Metropolitana de Santiago</td><td class="crd-td">Suburb</td><td class="crd-td">-33,49, -70,51</td><td class="crd-td">1970-2024</td><td class="crd-td">272,9k (2024)</td></tr>
<tr><td class="crd-td"><strong>Concepción</strong></td><td class="crd-td">Región del Bío-Bío</td><td class="crd-td">City proper</td><td class="crd-td">-36,84, -72,96</td><td class="crd-td">1854-2024</td><td class="crd-td">272,7k (1982)</td></tr>
<tr><td class="crd-td"><strong>La Serena</strong></td><td class="crd-td">Región de Coquimbo</td><td class="crd-td">City proper</td><td class="crd-td">-29,84, -71,09</td><td class="crd-td">1854-2024</td><td class="crd-td">267,4k (2024)</td></tr>
<tr><td class="crd-td"><strong>Ñuñoa</strong></td><td class="crd-td">Región Metropolitana de Santiago</td><td class="crd-td">Suburb</td><td class="crd-td">-33,45, -70,6</td><td class="crd-td">1952-2024</td><td class="crd-td">266,9k (2024)</td></tr>
<tr><td class="crd-td"><strong>Pudahuel</strong></td><td class="crd-td">Región Metropolitana de Santiago</td><td class="crd-td">Suburb</td><td class="crd-td">-33,42, -70,86</td><td class="crd-td">1952-2024</td><td class="crd-td">261,6k (2024)</td></tr>
<tr><td class="crd-td"><strong>Arica</strong></td><td class="crd-td">Región de Arica y Parinacota</td><td class="crd-td">City proper</td><td class="crd-td">-18,48, -69,99</td><td class="crd-td">1885-2024</td><td class="crd-td">257,2k (2024)</td></tr>
<tr><td class="crd-td"><strong>Talcahuano</strong></td><td class="crd-td">Región del Bío-Bío</td><td class="crd-td">Suburb</td><td class="crd-td">-36,7, -73,13</td><td class="crd-td">1875-2024</td><td class="crd-td">248,5k (1992)</td></tr>
<tr><td class="crd-td"><strong>Talca</strong></td><td class="crd-td">Región del Maule</td><td class="crd-td">City proper</td><td class="crd-td">-35,42, -71,6</td><td class="crd-td">1854-2024</td><td class="crd-td">242,3k (2024)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Thirty largest catalogued settlements and metropolitan agglomerations in Chile ordered by peak population, 1835-2024.</figcaption>
</figure>

## Sub-Regional Gazetteer Coverage

Table \ref{tab:subregion-gazetteer} contrasts municipal counts, spatial sampling density per 10.000 km², leading entry and 2024 regional population across all 16 regions. The Región Metropolitana de Santiago reaches 30,28 entries per 10.000 km² compared with 0,84 in Aysén and 0,68 in Magallanes, reflecting fine-grained urban subdivision in the central basin versus vast Patagonian *comunas* [@Ollino2006Redistribucion; @Ojeda2019Voces].

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Sites per 10k km²</th><th class="crd-th">Leading Entry (Peak)</th><th class="crd-th">2024 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Región Metropolitana de Santiago</strong></td><td class="crd-td">19.153</td><td class="crd-td">58</td><td class="crd-td">30,28</td><td class="crd-td">Gran Santiago (Metro) (6,16M)</td><td class="crd-td">7,4M</td></tr>
<tr><td class="crd-td"><strong>Región de Antofagasta</strong></td><td class="crd-td">129.592</td><td class="crd-td">10</td><td class="crd-td">0,77</td><td class="crd-td">Antofagasta (444,3k)</td><td class="crd-td">635,4k</td></tr>
<tr><td class="crd-td"><strong>Región de Arica y Parinacota</strong></td><td class="crd-td">20.107</td><td class="crd-td">5</td><td class="crd-td">2,49</td><td class="crd-td">Arica (257,2k)</td><td class="crd-td">244,6k</td></tr>
<tr><td class="crd-td"><strong>Región de Atacama</strong></td><td class="crd-td">81.484</td><td class="crd-td">9</td><td class="crd-td">1,1</td><td class="crd-td">Copiapó (176,1k)</td><td class="crd-td">299,2k</td></tr>
<tr><td class="crd-td"><strong>Región de Aysén del Gral. Ibáñez del Campo</strong></td><td class="crd-td">118.830</td><td class="crd-td">10</td><td class="crd-td">0,84</td><td class="crd-td">Coyhaique (62k)</td><td class="crd-td">100,7k</td></tr>
<tr><td class="crd-td"><strong>Región de Coquimbo</strong></td><td class="crd-td">45.222</td><td class="crd-td">16</td><td class="crd-td">3,54</td><td class="crd-td">Gran La Serena (Metro) (401,9k)</td><td class="crd-td">832,9k</td></tr>
<tr><td class="crd-td"><strong>Región de La Araucanía</strong></td><td class="crd-td">29.876</td><td class="crd-td">30</td><td class="crd-td">10,04</td><td class="crd-td">Temuco (309,7k)</td><td class="crd-td">1,01M</td></tr>
<tr><td class="crd-td"><strong>Región de Los Lagos</strong></td><td class="crd-td">56.234</td><td class="crd-td">29</td><td class="crd-td">5,16</td><td class="crd-td">Puerto Montt (281k)</td><td class="crd-td">890,3k</td></tr>
<tr><td class="crd-td"><strong>Región de Los Ríos</strong></td><td class="crd-td">21.693</td><td class="crd-td">13</td><td class="crd-td">5,99</td><td class="crd-td">Valdivia (182,1k)</td><td class="crd-td">398,2k</td></tr>
<tr><td class="crd-td"><strong>Región de Magallanes y Antártica Chilena</strong></td><td class="crd-td">146.424</td><td class="crd-td">10</td><td class="crd-td">0,68</td><td class="crd-td">Punta Arenas (145,7k)</td><td class="crd-td">166,5k</td></tr>
<tr><td class="crd-td"><strong>Región de Tarapacá</strong></td><td class="crd-td">45.577</td><td class="crd-td">8</td><td class="crd-td">1,76</td><td class="crd-td">Gran Iquique (Metro) (294,9k)</td><td class="crd-td">369,8k</td></tr>
<tr><td class="crd-td"><strong>Región de Valparaíso</strong></td><td class="crd-td">17.625</td><td class="crd-td">37</td><td class="crd-td">20,99</td><td class="crd-td">Gran Valparaíso (Metro) (901,5k)</td><td class="crd-td">1,9M</td></tr>
<tr><td class="crd-td"><strong>Región de Ñuble</strong></td><td class="crd-td">16.251</td><td class="crd-td">22</td><td class="crd-td">13,54</td><td class="crd-td">Chillán (204,1k)</td><td class="crd-td">512,3k</td></tr>
<tr><td class="crd-td"><strong>Región del Bío-Bío</strong></td><td class="crd-td">27.485</td><td class="crd-td">36</td><td class="crd-td">13,1</td><td class="crd-td">Gran Concepción (Metro) (722,9k)</td><td class="crd-td">1,61M</td></tr>
<tr><td class="crd-td"><strong>Región del Libertador Bernardo O'Higgins</strong></td><td class="crd-td">17.187</td><td class="crd-td">33</td><td class="crd-td">19,2</td><td class="crd-td">Gran Rancagua (Metro) (290,9k)</td><td class="crd-td">987,2k</td></tr>
<tr><td class="crd-td"><strong>Región del Maule</strong></td><td class="crd-td">30.203</td><td class="crd-td">28</td><td class="crd-td">9,27</td><td class="crd-td">Talca (242,3k)</td><td class="crd-td">1,12M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued entry counts, spatial sampling density (per 10.000 km²), leading entry and 2024 population across 16 Chilean regions.</figcaption>
</figure>

## Metropolitan Accounting and Independent Suburbs

Tables \ref{tab:metro-reconciliation} and \ref{tab:top-suburbs} reconcile the ten 2017 INE metropolitan agglomerations against their constituent *comunas* and track the 16 largest independent suburban *comunas* across Gran Santiago, Gran Valparaíso, Gran Concepción, Coquimbo and Alto Hospicio from 1952 to 2024 [@Chile2018Sintesis; @Rubio2023Distribucion; @Apolinariofaria2024Esteticas]. Across Gran Santiago, the 2017 urban agglomeration (6,16M) accounts for 95,34% of the combined 2017 population of its 34 constituent *comunas* (6,46M), rising to 7,19M by 2024, while Gran Valparaíso (901,5k versus 992,3k) and Gran Concepción (722,9k versus 947,9k) show slightly wider gaps where rural tracts and coal-port satellites lie inside municipal boundaries [@Mardones2001Zonificacion; @Rubio2023Distribucion].

<figure class="crd-table-figure" id="tab:metro-reconciliation">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Agglomeration</th><th class="crd-th">Region</th><th class="crd-th">Comunas</th><th class="crd-th">2017 Metro</th><th class="crd-th">2017 Comunal Sum</th><th class="crd-th">2024 Comunal Sum</th><th class="crd-th">2017 Ratio</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gran Santiago (Metro)</strong></td><td class="crd-td">Región Metropolitana de Santiago</td><td class="crd-td">34</td><td class="crd-td">6,16M</td><td class="crd-td">6,46M</td><td class="crd-td">7,19M</td><td class="crd-td">95,3%</td></tr>
<tr><td class="crd-td"><strong>Gran Valparaíso (Metro)</strong></td><td class="crd-td">Región de Valparaíso</td><td class="crd-td">5</td><td class="crd-td">901,5k</td><td class="crd-td">992,3k</td><td class="crd-td">1,06M</td><td class="crd-td">90,8%</td></tr>
<tr><td class="crd-td"><strong>Gran Concepción (Metro)</strong></td><td class="crd-td">Región del Bío-Bío</td><td class="crd-td">8</td><td class="crd-td">722,9k</td><td class="crd-td">947,9k</td><td class="crd-td">979,8k</td><td class="crd-td">76,3%</td></tr>
<tr><td class="crd-td"><strong>Gran La Serena (Metro)</strong></td><td class="crd-td">Región de Coquimbo</td><td class="crd-td">2</td><td class="crd-td">401,9k</td><td class="crd-td">472,7k</td><td class="crd-td">543k</td><td class="crd-td">85%</td></tr>
<tr><td class="crd-td"><strong>Gran Antofagasta (Metro)</strong></td><td class="crd-td">Región de Antofagasta</td><td class="crd-td">1</td><td class="crd-td">352,6k</td><td class="crd-td">381,6k</td><td class="crd-td">444,3k</td><td class="crd-td">92,4%</td></tr>
<tr><td class="crd-td"><strong>Gran Iquique (Metro)</strong></td><td class="crd-td">Región de Tarapacá</td><td class="crd-td">2</td><td class="crd-td">294,9k</td><td class="crd-td">316k</td><td class="crd-td">375,3k</td><td class="crd-td">93,3%</td></tr>
<tr><td class="crd-td"><strong>Gran Rancagua (Metro)</strong></td><td class="crd-td">Región del Libertador Bernardo O'Higgins</td><td class="crd-td">2</td><td class="crd-td">290,9k</td><td class="crd-td">310,8k</td><td class="crd-td">339,2k</td><td class="crd-td">93,6%</td></tr>
<tr><td class="crd-td"><strong>Gran Temuco (Metro)</strong></td><td class="crd-td">Región de La Araucanía</td><td class="crd-td">2</td><td class="crd-td">278,5k</td><td class="crd-td">374,9k</td><td class="crd-td">395,1k</td><td class="crd-td">74,3%</td></tr>
<tr><td class="crd-td"><strong>Gran Talca (Metro)</strong></td><td class="crd-td">Región del Maule</td><td class="crd-td">2</td><td class="crd-td">237,3k</td><td class="crd-td">282,9k</td><td class="crd-td">311,3k</td><td class="crd-td">83,9%</td></tr>
<tr><td class="crd-td"><strong>Gran Arica (Metro)</strong></td><td class="crd-td">Región de Arica y Parinacota</td><td class="crd-td">1</td><td class="crd-td">204,1k</td><td class="crd-td">232,6k</td><td class="crd-td">257,2k</td><td class="crd-td">87,7%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Reconciliation of 2017 INE metropolitan agglomerations against summed constituent comunas, 2017-2024.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:top-suburbs">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Suburb</th><th class="crd-th">Conurbation</th><th class="crd-th">1952</th><th class="crd-th">1970</th><th class="crd-th">1992</th><th class="crd-th">2002</th><th class="crd-th">2017</th><th class="crd-th">2024</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Puente Alto</strong></td><td class="crd-td">Gran Santiago</td><td class="crd-td">32,6k</td><td class="crd-td">76,7k</td><td class="crd-td">254,7k</td><td class="crd-td">509,5k</td><td class="crd-td">604,7k</td><td class="crd-td">667,9k</td></tr>
<tr><td class="crd-td"><strong>Maipú</strong></td><td class="crd-td">Gran Santiago</td><td class="crd-td">20k</td><td class="crd-td">44,7k</td><td class="crd-td">256,6k</td><td class="crd-td">484k</td><td class="crd-td">549,3k</td><td class="crd-td">586,8k</td></tr>
<tr><td class="crd-td"><strong>La Florida</strong></td><td class="crd-td">Gran Santiago</td><td class="crd-td">9,9k</td><td class="crd-td">58,7k</td><td class="crd-td">328,9k</td><td class="crd-td">376,9k</td><td class="crd-td">386,3k</td><td class="crd-td">407,3k</td></tr>
<tr><td class="crd-td"><strong>Viña del Mar</strong></td><td class="crd-td">Gran Valparaíso</td><td class="crd-td">91,9k</td><td class="crd-td">188,4k</td><td class="crd-td">285,5k</td><td class="crd-td">301,5k</td><td class="crd-td">348,9k</td><td class="crd-td">371,5k</td></tr>
<tr><td class="crd-td"><strong>San Bernardo</strong></td><td class="crd-td">Gran Santiago</td><td class="crd-td">51k</td><td class="crd-td">79,2k</td><td class="crd-td">190,9k</td><td class="crd-td">255,6k</td><td class="crd-td">318,1k</td><td class="crd-td">348,6k</td></tr>
<tr><td class="crd-td"><strong>Las Condes</strong></td><td class="crd-td">Gran Santiago</td><td class="crd-td">38,9k</td><td class="crd-td">112,6k</td><td class="crd-td">208,1k</td><td class="crd-td">255,7k</td><td class="crd-td">307,7k</td><td class="crd-td">343,6k</td></tr>
<tr><td class="crd-td"><strong>Quilicura</strong></td><td class="crd-td">Gran Santiago</td><td class="crd-td">4,7k</td><td class="crd-td">11,4k</td><td class="crd-td">41,1k</td><td class="crd-td">131,4k</td><td class="crd-td">222k</td><td class="crd-td">275,7k</td></tr>
<tr><td class="crd-td"><strong>Coquimbo</strong></td><td class="crd-td">Gran La Serena</td><td class="crd-td">32,1k</td><td class="crd-td">61,4k</td><td class="crd-td">122,8k</td><td class="crd-td">170,9k</td><td class="crd-td">239,5k</td><td class="crd-td">275,6k</td></tr>
<tr><td class="crd-td"><strong>Peñalolén</strong></td><td class="crd-td">Gran Santiago</td><td class="crd-td">-</td><td class="crd-td">51k</td><td class="crd-td">179,8k</td><td class="crd-td">223,4k</td><td class="crd-td">253,6k</td><td class="crd-td">272,9k</td></tr>
<tr><td class="crd-td"><strong>Ñuñoa</strong></td><td class="crd-td">Gran Santiago</td><td class="crd-td">126k</td><td class="crd-td">149k</td><td class="crd-td">172,6k</td><td class="crd-td">168,5k</td><td class="crd-td">222,1k</td><td class="crd-td">266,9k</td></tr>
<tr><td class="crd-td"><strong>Pudahuel</strong></td><td class="crd-td">Gran Santiago</td><td class="crd-td">31,7k</td><td class="crd-td">51k</td><td class="crd-td">137,9k</td><td class="crd-td">201,8k</td><td class="crd-td">241k</td><td class="crd-td">261,6k</td></tr>
<tr><td class="crd-td"><strong>Estación Central</strong></td><td class="crd-td">Gran Santiago</td><td class="crd-td">-</td><td class="crd-td">131,2k</td><td class="crd-td">140,9k</td><td class="crd-td">131,7k</td><td class="crd-td">148,7k</td><td class="crd-td">221,9k</td></tr>
<tr><td class="crd-td"><strong>Recoleta</strong></td><td class="crd-td">Gran Santiago</td><td class="crd-td">-</td><td class="crd-td">141,7k</td><td class="crd-td">164,8k</td><td class="crd-td">161,3k</td><td class="crd-td">165,7k</td><td class="crd-td">196,9k</td></tr>
<tr><td class="crd-td"><strong>La Pintana</strong></td><td class="crd-td">Gran Santiago</td><td class="crd-td">-</td><td class="crd-td">38k</td><td class="crd-td">169,6k</td><td class="crd-td">195,3k</td><td class="crd-td">188k</td><td class="crd-td">189k</td></tr>
<tr><td class="crd-td"><strong>Quilpué</strong></td><td class="crd-td">Gran Valparaíso</td><td class="crd-td">26,1k</td><td class="crd-td">57k</td><td class="crd-td">104,2k</td><td class="crd-td">133,2k</td><td class="crd-td">160,2k</td><td class="crd-td">173,6k</td></tr>
<tr><td class="crd-td"><strong>El Bosque</strong></td><td class="crd-td">Gran Santiago</td><td class="crd-td">-</td><td class="crd-td">89k</td><td class="crd-td">172,9k</td><td class="crd-td">180,6k</td><td class="crd-td">170,8k</td><td class="crd-td">169,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Sixteen largest independent suburban comunas across Chilean metropolitan areas, 1952-2024.</figcaption>
</figure>

## Source Ledger Saturation and Exhausted Corpora

Tables \ref{tab:saturation-waves} and \ref{tab:exhausted-corpora} summarise the four sequential ingestion waves and the two exhausted primary institutional corpora recorded in the chapter source ledger [@Chile2010Censos; @Chile2018Sintesis].

<figure class="crd-table-figure" id="tab:saturation-waves">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Wave</th><th class="crd-th">Source Class</th><th class="crd-th">Prior Total</th><th class="crd-th">Added</th><th class="crd-th">Marginal Gain</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1</strong></td><td class="crd-td">Primary INE national census extract</td><td class="crd-td">0</td><td class="crd-td">280</td><td class="crd-td">100%</td></tr>
<tr><td class="crd-td"><strong>Wave 2</strong></td><td class="crd-td">Georeference repair and metro reconciliation</td><td class="crd-td">280</td><td class="crd-td">49</td><td class="crd-td">17,5%</td></tr>
<tr><td class="crd-td"><strong>Wave 3</strong></td><td class="crd-td">Longitudinal 1835-1940 official census backfill</td><td class="crd-td">329</td><td class="crd-td">21</td><td class="crd-td">6,38%</td></tr>
<tr><td class="crd-td"><strong>Wave 4</strong></td><td class="crd-td">Sub-regional gap audit sweep</td><td class="crd-td">350</td><td class="crd-td">4</td><td class="crd-td">1,14%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Four-wave gazetteer ingestion history and marginal saturation gain across 354 catalogued Chilean settlements.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:exhausted-corpora">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Corpus Name</th><th class="crd-th">Archive Tier</th><th class="crd-th">Rows in Bounds</th><th class="crd-th">Rows Processed</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>INE Chile Communal Series (1952-2024)</strong></td><td class="crd-td">Primary national institutional archive</td><td class="crd-td">354</td><td class="crd-td">354</td></tr>
<tr><td class="crd-td"><strong>OCE and INE General Censuses (1835-1940)</strong></td><td class="crd-td">Primary national institutional archive</td><td class="crd-td">18</td><td class="crd-td">18</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Audited institutional corpora processed in full during compilation of the Chilean settlement register.</figcaption>
</figure>

# Limitations

Three technical boundaries apply to this gazetteer. First, *comuna*-level series incorporate rural districts inside municipal boundaries, so suburban totals exceed strict built-up urban *entidades* where outer agricultural areas remain large [@Chile2018Sintesis; @Mardones2001Zonificacion]. Second, newly created communes such as Alto Hospicio (2004), Hualpén (2004) and Alto Biobío (2004) enter the register only from the census preceding or following incorporation, whereas their earlier residents were counted inside parent municipalities [@Huaringa2023Exercising; @Chile2010Censos]. Third, Rapa Nui is excluded from this continental register and analysed within the Pacific oceanic volume.

# Conclusion

Together, the 354 catalogued entries capture the full urban hierarchy of independent Chile from remote Patagonian fjords to the 6,16M Santiago metropolis ($\alpha = 1,01$, $R^2 = 0,92$). By separating standalone municipalities, independent suburban *comunas* and 2017 metropolitan agglomerations while preserving longitudinal series back to 1835, the register supports both regional census reconciliation and intra-metropolitan demographic analysis [@Acuna2008Santiago; @Bro2021Surname; @Chile2018Sintesis].

# Appendix

## Provenance Corpus Breakdown

Table \ref{tab:sett-prov} summarises the two institutional provenance corpora assigned across all 354 gazetteer records [@Chile2010Censos; @Chile2018Sintesis].

<figure class="crd-table-figure" id="tab:sett-prov">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Provenance Corpus</th><th class="crd-th">Entries</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>INE Chile Censuses and Communal Series (1952-2024)</strong></td><td class="crd-td">344</td><td class="crd-td">97,18%</td></tr>
<tr><td class="crd-td"><strong>INE Chile 2017 Census Agglomerations</strong></td><td class="crd-td">10</td><td class="crd-td">2,82%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Institutional provenance breakdown across 354 catalogued settlements and agglomerations in Chile.</figcaption>
</figure>

# Sources

::: {#refs}
:::
