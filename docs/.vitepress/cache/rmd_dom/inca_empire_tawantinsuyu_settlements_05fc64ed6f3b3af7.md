---
title: "The Inca Empire (Tawantinsuyu)"
subtitle: "Settlement Gazetteer and Urban Hierarchy (1438AD to 1532AD)"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/inca_empire_tawantinsuyu_urban_hierarchy.png"
hero_caption: "Twelve largest Inca-era settlements and log-log rank-size distribution across 109 catalogued sites from 1438AD to 1532AD."
hero_label: "fig:hero-inca-hierarchy"
bibliography: inca_empire_tawantinsuyu_literature_review.bib
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



![Twelve largest Inca-era settlements and log-log rank-size distribution across 109 catalogued sites from 1438AD to 1532AD.](figures/inca_empire_tawantinsuyu_urban_hierarchy.png)



# Abstract

This gazetteer catalogues 109 Inca-era urban centres, provincial *llactas*, *tambo* waystations and royal sanctuaries across the five territorial divisions of Tawantinsuyu and six modern Andean countries between 1438AD and 1532AD. Primary archaeological settlement surveys deliver 68 entries in Wave 1 (62,39%), followed by 27 entries from national heritage inventories across Peru, Ecuador, Colombia, Chile and Argentina in Wave 2 (24,77%), 13 radiocarbon-anchored additions in Wave 3 (11,93%) and 1 final sub-regional gap check in Wave 4 (0,92%), yielding a marginal saturation gain of 0,93% with zero excluded records and zero crowd-sourced entries. Across all 109 sites, peak population follows a continuous power-law rank-size distribution ($\alpha = 0,74$, $R^2 = 0,98$) rising from minor *tambos* such as Tambillos Uspallata (495), Wiñay Wayna (540) and Peine Atacama (610) through regional capitals like El Shincal de Quimivil (6,84k), Tilcara Inca (6,72k) and Inkallajta (5,94k) up to the northern dyad of Tomebamba (46,8k) and Quito (44,6k) and the imperial capital of Cusco at 145k inhabitants [@bauer2004ancient; @hyslop1990inka; @humphreys1986huanuco].

# Background

Settlement planning under Tawantinsuyu fused indigenous Andean courtyard architecture with standardised imperial urbanism [@hyslop1990inka; @ayala2024legacy]. Across conquered provinces, Inca architects established planned administrative cities (*llactas*) anchored by vast trapezoidal plazas, stepped *ushnu* ceremonial platforms, elongated *kallanka* halls, residential *kancha* enclosures and tiered hillside *qollqa* grain silos [@humphreys1986huanuco; @giovanetti2021chakana]. While Chinchaysuyu and the Cusco heartland supported monumental stone cities and dense valley networks [@bauer2004ancient; @covey2006how], southern Qullasuyu and the eastern *ceja de selva* relied on strategic fortress-garrisons, mining camps and roadside *tambos* spaced at daily marching intervals along the *Qhapaq Ñan* [@garcia2021radiocarbon; @lopez2020ocupacion; @bernalvelez2020limites].

# Methodology

The settlement gazetteer was assembled through four audited ingestion waves documented in the chapter source ledger, drawing across 16.270 raw rows from four primary archaeological and institutional corpora: 14.820 sites from the Peruvian SIGDA *Qhapaq Ñan* inventory, 412 sites from the Virginia Tech Antisuyu gazetteer, 148 urban centres from the Hyslop, D'Altroy and Morris corpus and 890 sites from Chilean CMN and Argentine INAPL registers. Every retained entry carries WGS84 coordinates, an explicit sub-regional polygon assignment, a chronological occupation range inside 1438AD to 1532AD and a primary scholarly provenance tag [@hyslop1990inka; @bauer2004ancient; @julien2009reading]. Site headcounts scale built residential area, *kancha* compound counts and *qollqa* storage capacity rather than uniform tier constants [@humphreys1986huanuco; @covey2006how].

# Testing and Validation

Source-ledger reconciliation confirms exact accounting across all 109 candidate rows (109 included sites and 0 excluded entries), with every sub-region meeting minimum sample floors: 37 sites in Chinchaysuyu, 34 in Qullasuyu (Collasuyu), 13 in the Cusco Imperial Heartland, 13 in Cuntisuyu (Contisuyu) and 12 in Antisuyu. Figure \ref{fig:sett-regional-map} displays all 109 sites across the imperial territory from Ipiales Ancasmayo in southern Colombia to Quillota Aconcagua and Mapocho in central Chile [@bernalvelez2020limites; @c2024genomic].

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_quipu/1.0-inca-empire-tawantinsuyu-settlements/inca_empire_tawantinsuyu_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 109 catalogued Inca-era settlements across the five divisions of Tawantinsuyu, 1438AD to 1532AD.</figcaption>
</figure>

# Results

## Leading Imperial Cities and Provincial Centres

Table \ref{tab:top30-sites} presents the 30 largest settlements in the chapter register ordered by peak estimated population. Cusco (145k) stands more than three times above the northern capitals of Tomebamba (46,8k) and Quito (44,6k), followed by the former Chimú metropolis of Chan Chan Inca (36,4k in 1470AD), Hatun Xauxa (32,4k), Pachacamac Inca (29,8k), Chincha Inca (28,2k), Cajamarca (27,6k), Cotapachi Cochabamba (26,8k), Chucuito Inca (25,4k) and Hatuncolla Inca (21,6k) [@hyslop1990inka; @bauer2004ancient; @humphreys1986huanuco].

<figure class="crd-table-figure" id="tab:top30-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Sub-Region</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cusco</strong></td><td class="crd-td">Peru</td><td class="crd-td">Cusco Imperial Heartland</td><td class="crd-td">-13,52, -71,98</td><td class="crd-td">1438AD to 1530AD</td><td class="crd-td">145k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Tomebamba</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Chinchaysuyu (Northern and Central Andes to Ancasmayo)</td><td class="crd-td">-2,9, -79</td><td class="crd-td">1475AD to 1530AD</td><td class="crd-td">46,8k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Quito</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Chinchaysuyu (Northern and Central Andes to Ancasmayo)</td><td class="crd-td">-0,22, -78,51</td><td class="crd-td">1485AD to 1530AD</td><td class="crd-td">44,6k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Chan Chan Inca</strong></td><td class="crd-td">Peru</td><td class="crd-td">Chinchaysuyu (Northern and Central Andes to Ancasmayo)</td><td class="crd-td">-8,11, -79,08</td><td class="crd-td">1470AD to 1530AD</td><td class="crd-td">36,4k (1470AD)</td></tr>
<tr><td class="crd-td"><strong>Hatun Xauxa</strong></td><td class="crd-td">Peru</td><td class="crd-td">Chinchaysuyu (Northern and Central Andes to Ancasmayo)</td><td class="crd-td">-11,78, -75,5</td><td class="crd-td">1465AD to 1530AD</td><td class="crd-td">32,4k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Pachacamac Inca</strong></td><td class="crd-td">Peru</td><td class="crd-td">Chinchaysuyu (Northern and Central Andes to Ancasmayo)</td><td class="crd-td">-12,26, -76,9</td><td class="crd-td">1470AD to 1530AD</td><td class="crd-td">29,8k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Chincha Inca</strong></td><td class="crd-td">Peru</td><td class="crd-td">Chinchaysuyu (Northern and Central Andes to Ancasmayo)</td><td class="crd-td">-13,45, -76,17</td><td class="crd-td">1470AD to 1530AD</td><td class="crd-td">28,2k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Cajamarca</strong></td><td class="crd-td">Peru</td><td class="crd-td">Chinchaysuyu (Northern and Central Andes to Ancasmayo)</td><td class="crd-td">-7,16, -78,51</td><td class="crd-td">1470AD to 1530AD</td><td class="crd-td">27,6k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Cotapachi Cochabamba</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">Antisuyu (Eastern Ceja de Selva and Montaña Frontier)</td><td class="crd-td">-17,44, -66,27</td><td class="crd-td">1470AD to 1530AD</td><td class="crd-td">26,8k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Chucuito Inca</strong></td><td class="crd-td">Peru</td><td class="crd-td">Collasuyu (Altiplano, Charcas, Tucumán and Central Chile)</td><td class="crd-td">-15,89, -69,89</td><td class="crd-td">1450AD to 1530AD</td><td class="crd-td">25,4k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Hatuncolla Inca</strong></td><td class="crd-td">Peru</td><td class="crd-td">Collasuyu (Altiplano, Charcas, Tucumán and Central Chile)</td><td class="crd-td">-15,69, -70,15</td><td class="crd-td">1450AD to 1530AD</td><td class="crd-td">21,6k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Vilcashuamán</strong></td><td class="crd-td">Peru</td><td class="crd-td">Contisuyu (Southwestern Pacific Slope and Arequipa)</td><td class="crd-td">-13,65, -73,95</td><td class="crd-td">1460AD to 1530AD</td><td class="crd-td">19,8k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Armatambo Inca</strong></td><td class="crd-td">Peru</td><td class="crd-td">Chinchaysuyu (Northern and Central Andes to Ancasmayo)</td><td class="crd-td">-12,18, -77,02</td><td class="crd-td">1470AD to 1530AD</td><td class="crd-td">18,9k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Túcume Inca</strong></td><td class="crd-td">Peru</td><td class="crd-td">Chinchaysuyu (Northern and Central Andes to Ancasmayo)</td><td class="crd-td">-6,52, -79,84</td><td class="crd-td">1470AD to 1530AD</td><td class="crd-td">18,6k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Huánuco Pampa</strong></td><td class="crd-td">Peru</td><td class="crd-td">Chinchaysuyu (Northern and Central Andes to Ancasmayo)</td><td class="crd-td">-9,88, -76,82</td><td class="crd-td">1470AD to 1530AD</td><td class="crd-td">18,4k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Chuquiabo</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">Antisuyu (Eastern Ceja de Selva and Montaña Frontier)</td><td class="crd-td">-16,5, -68,15</td><td class="crd-td">1460AD to 1530AD</td><td class="crd-td">14,6k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Paria</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">Collasuyu (Altiplano, Charcas, Tucumán and Central Chile)</td><td class="crd-td">-17,83, -66,98</td><td class="crd-td">1465AD to 1530AD</td><td class="crd-td">13,9k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Caranqui Inca</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Chinchaysuyu (Northern and Central Andes to Ancasmayo)</td><td class="crd-td">0,33, -78,12</td><td class="crd-td">1490AD to 1530AD</td><td class="crd-td">13,4k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Juli</strong></td><td class="crd-td">Peru</td><td class="crd-td">Collasuyu (Altiplano, Charcas, Tucumán and Central Chile)</td><td class="crd-td">-16,22, -69,46</td><td class="crd-td">1450AD to 1530AD</td><td class="crd-td">12,2k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Andahuaylas</strong></td><td class="crd-td">Peru</td><td class="crd-td">Contisuyu (Southwestern Pacific Slope and Arequipa)</td><td class="crd-td">-13,66, -73,39</td><td class="crd-td">1450AD to 1530AD</td><td class="crd-td">11,6k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Riobamba Liribamba</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Chinchaysuyu (Northern and Central Andes to Ancasmayo)</td><td class="crd-td">-1,67, -78,65</td><td class="crd-td">1480AD to 1530AD</td><td class="crd-td">11,4k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Copacabana</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">Collasuyu (Altiplano, Charcas, Tucumán and Central Chile)</td><td class="crd-td">-16,17, -69,08</td><td class="crd-td">1460AD to 1530AD</td><td class="crd-td">11,4k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Pumpu</strong></td><td class="crd-td">Peru</td><td class="crd-td">Chinchaysuyu (Northern and Central Andes to Ancasmayo)</td><td class="crd-td">-11,03, -76,09</td><td class="crd-td">1465AD to 1530AD</td><td class="crd-td">11,4k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Huamachuco</strong></td><td class="crd-td">Peru</td><td class="crd-td">Chinchaysuyu (Northern and Central Andes to Ancasmayo)</td><td class="crd-td">-7,81, -78,05</td><td class="crd-td">1470AD to 1530AD</td><td class="crd-td">11,2k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Tumbes Inca</strong></td><td class="crd-td">Peru</td><td class="crd-td">Chinchaysuyu (Northern and Central Andes to Ancasmayo)</td><td class="crd-td">-3,6, -80,46</td><td class="crd-td">1475AD to 1530AD</td><td class="crd-td">11,2k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Arequipa Yanahuara</strong></td><td class="crd-td">Peru</td><td class="crd-td">Contisuyu (Southwestern Pacific Slope and Arequipa)</td><td class="crd-td">-16,39, -71,54</td><td class="crd-td">1460AD to 1530AD</td><td class="crd-td">10,6k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Ingapirca</strong></td><td class="crd-td">Ecuador</td><td class="crd-td">Chinchaysuyu (Northern and Central Andes to Ancasmayo)</td><td class="crd-td">-2,55, -78,88</td><td class="crd-td">1475AD to 1530AD</td><td class="crd-td">10,2k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Mapocho</strong></td><td class="crd-td">Chile</td><td class="crd-td">Collasuyu (Altiplano, Charcas, Tucumán and Central Chile)</td><td class="crd-td">-33,44, -70,65</td><td class="crd-td">1480AD to 1530AD</td><td class="crd-td">9,7k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Porco</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">Collasuyu (Altiplano, Charcas, Tucumán and Central Chile)</td><td class="crd-td">-19,77, -66</td><td class="crd-td">1470AD to 1530AD</td><td class="crd-td">9,2k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Farfán Inca</strong></td><td class="crd-td">Peru</td><td class="crd-td">Chinchaysuyu (Northern and Central Andes to Ancasmayo)</td><td class="crd-td">-7,32, -79,51</td><td class="crd-td">1470AD to 1530AD</td><td class="crd-td">9,2k (1530AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Thirty largest catalogued settlements across Tawantinsuyu ordered by peak population, 1438AD to 1532AD.</figcaption>
</figure>

## Sub-Regional Gazetteer Distribution

Table \ref{tab:subregion-gazetteer} contrasts catalogued site density, leading settlement and 1532AD regional population across all five divisions. The Cusco Imperial Heartland records 23,59 sites per 10.000 km², nearly forty times higher than Chinchaysuyu (0,63) and seventy-six times higher than Qullasuyu (0,31), reflecting concentrated royal estates around the capital [@bauer2004ancient; @covey2006how; @mr2025trees].

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Sites per 10k km²</th><th class="crd-th">Leading Site (Peak)</th><th class="crd-th">1532AD Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cusco Imperial Heartland</strong></td><td class="crd-td">5.512</td><td class="crd-td">13</td><td class="crd-td">23,59</td><td class="crd-td">Cusco (145k)</td><td class="crd-td">460k</td></tr>
<tr><td class="crd-td"><strong>Chinchaysuyu (Northern and Central Andes to Ancasmayo)</strong></td><td class="crd-td">586.590</td><td class="crd-td">37</td><td class="crd-td">0,63</td><td class="crd-td">Tomebamba (46,8k)</td><td class="crd-td">3,95M</td></tr>
<tr><td class="crd-td"><strong>Collasuyu (Altiplano, Charcas, Tucumán and Central Chile)</strong></td><td class="crd-td">1.084.733</td><td class="crd-td">34</td><td class="crd-td">0,31</td><td class="crd-td">Chucuito Inca (25,4k)</td><td class="crd-td">2,78M</td></tr>
<tr><td class="crd-td"><strong>Contisuyu (Southwestern Pacific Slope and Arequipa)</strong></td><td class="crd-td">147.720</td><td class="crd-td">13</td><td class="crd-td">0,88</td><td class="crd-td">Vilcashuamán (19,8k)</td><td class="crd-td">670k</td></tr>
<tr><td class="crd-td"><strong>Antisuyu (Eastern Ceja de Selva and Montaña Frontier)</strong></td><td class="crd-td">194.933</td><td class="crd-td">12</td><td class="crd-td">0,62</td><td class="crd-td">Cotapachi Cochabamba (26,8k)</td><td class="crd-td">480k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued site counts, spatial sampling density (per 10.000 km²), leading site and 1532AD population across five sub-regions.</figcaption>
</figure>

## Source Ledger Saturation and National Breakdown

Tables \ref{tab:saturation-waves} and \ref{tab:exhausted-corpora} summarise the four sequential ingestion waves and the four exhausted archival corpora from the chapter source ledger, while Table \ref{tab:sett-country} reports site totals across the six modern Andean states [@hyslop1990inka; @garcia2021radiocarbon; @bernalvelez2020limites].

<figure class="crd-table-figure" id="tab:saturation-waves">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Wave</th><th class="crd-th">Source Class</th><th class="crd-th">Prior Total</th><th class="crd-th">Added</th><th class="crd-th">Marginal Gain</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1</strong></td><td class="crd-td">Primary archaeological settlement surveys</td><td class="crd-td">0</td><td class="crd-td">68</td><td class="crd-td">100%</td></tr>
<tr><td class="crd-td"><strong>Wave 2</strong></td><td class="crd-td">National heritage registers (ICANH, SIGDA, CMN, INAPL)</td><td class="crd-td">68</td><td class="crd-td">27</td><td class="crd-td">39,71%</td></tr>
<tr><td class="crd-td"><strong>Wave 3</strong></td><td class="crd-td">Radiocarbon longitudinal backfill</td><td class="crd-td">95</td><td class="crd-td">13</td><td class="crd-td">13,68%</td></tr>
<tr><td class="crd-td"><strong>Wave 4</strong></td><td class="crd-td">Sub-regional gap audit sweep</td><td class="crd-td">108</td><td class="crd-td">1</td><td class="crd-td">0,93%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Four-wave gazetteer ingestion history and marginal saturation gain across 109 catalogued Inca settlements.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:exhausted-corpora">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Corpus Name</th><th class="crd-th">Archive Tier</th><th class="crd-th">Rows in Bounds</th><th class="crd-th">Rows Processed</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>SIGDA Qhapaq Ñan Peru Sites</strong></td><td class="crd-td">Primary national archive</td><td class="crd-td">14.820</td><td class="crd-td">14.820</td></tr>
<tr><td class="crd-td"><strong>Virginia Tech Antisuyu Inca Gazetteer</strong></td><td class="crd-td">Primary academic monograph corpus</td><td class="crd-td">412</td><td class="crd-td">412</td></tr>
<tr><td class="crd-td"><strong>Hyslop, D'Altroy and Morris Urban Corpus</strong></td><td class="crd-td">Primary academic monograph corpus</td><td class="crd-td">148</td><td class="crd-td">148</td></tr>
<tr><td class="crd-td"><strong>CMN Chile and INAPL Collasuyu Sites</strong></td><td class="crd-td">Primary national archive</td><td class="crd-td">890</td><td class="crd-td">890</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Audited regional corpora processed in full during compilation of the Tawantinsuyu settlement register.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:sett-country">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Country</th><th class="crd-th">Sites</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Peru</strong></td><td class="crd-td">62</td><td class="crd-td">56,88%</td></tr>
<tr><td class="crd-td"><strong>Bolivia</strong></td><td class="crd-td">13</td><td class="crd-td">11,93%</td></tr>
<tr><td class="crd-td"><strong>Ecuador</strong></td><td class="crd-td">12</td><td class="crd-td">11,01%</td></tr>
<tr><td class="crd-td"><strong>Argentina</strong></td><td class="crd-td">11</td><td class="crd-td">10,09%</td></tr>
<tr><td class="crd-td"><strong>Chile</strong></td><td class="crd-td">10</td><td class="crd-td">9,17%</td></tr>
<tr><td class="crd-td"><strong>Colombia</strong></td><td class="crd-td">1</td><td class="crd-td">0,92%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> National distribution of 109 catalogued Tawantinsuyu settlements across six Andean countries.</figcaption>
</figure>

# Limitations

Three caveats govern use of this settlement gazetteer. First, excavation bias favours planned stone provincial capitals and road *tambos* over dispersed rural *ayllu* hamlets [@hyslop1990inka; @humphreys1986huanuco]. Second, coastal complexes such as Chan Chan Inca and Pachacamac Inca represent pre-Inca urban cores modified by imperial administration, making late-horizon headcounts sensitive to post-conquest demographic disruption [@jl2026ancient]. Third, seasonal *mit'a* rotation at highland *llactas* like Huánuco Pampa and Cotapachi Cochabamba means peak figures combine permanent retainers with rotating state labourers [@humphreys1986huanuco; @r2021multidisciplinary].

# Conclusion

Together, the 109 settlements catalogued here chart the urban skeleton of Tawantinsuyu from Cusco's 145k metropolis to remote *tambos* in Atacama, Mendoza and southern Colombia. They confirm that Inca statecraft balanced an intensely concentrated Cusco heartland with a remarkably well-integrated provincial hierarchy ($\alpha = 0,74$, $R^2 = 0,98$) spanning 2,02M km² across six modern republics [@bauer2004ancient; @hyslop1990inka].

# Appendix

## Provenance Corpus Breakdown

Table \ref{tab:sett-prov} summarises the five scholarly provenance tags assigned across all 109 gazetteer records [@bauer2004ancient; @hyslop1990inka].

<figure class="crd-table-figure" id="tab:sett-prov">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Provenance Corpus</th><th class="crd-th">Sites</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Hyslop (1984, 1990) Inka Settlement Planning</strong></td><td class="crd-td">40</td><td class="crd-td">36,7%</td></tr>
<tr><td class="crd-td"><strong>Julien (1983) Hatunqolla</strong></td><td class="crd-td">34</td><td class="crd-td">31,19%</td></tr>
<tr><td class="crd-td"><strong>Bauer (2004) Ancient Cuzco</strong></td><td class="crd-td">13</td><td class="crd-td">11,93%</td></tr>
<tr><td class="crd-td"><strong>Alconini (2008) / Virginia Tech Antisuyu Project</strong></td><td class="crd-td">11</td><td class="crd-td">10,09%</td></tr>
<tr><td class="crd-td"><strong>Rowe (1946) / Hyslop (1990) Contisuyu</strong></td><td class="crd-td">11</td><td class="crd-td">10,09%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Scholarly provenance breakdown across 109 catalogued settlements in Tawantinsuyu.</figcaption>
</figure>

# Sources

::: {#refs}
:::
