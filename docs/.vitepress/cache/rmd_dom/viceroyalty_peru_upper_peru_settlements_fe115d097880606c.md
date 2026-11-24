---
title: "Viceroyalty of Peru and Upper Peru"
subtitle: "Settlement Gazetteer and Urban Hierarchy across Peru and Charcas, 1542-1825"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/viceroyalty_peru_upper_peru_urban_hierarchy.png"
hero_caption: "Largest recorded colonial settlements and continuous rank-size distribution across 546 catalogued locales in Peru and Upper Peru, 1542-1825."
hero_label: "fig:hero-peru-hierarchy"
bibliography: viceroyalty_peru_upper_peru_literature_review.bib
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



![Largest recorded colonial settlements and continuous rank-size distribution across 546 catalogued locales in Peru and Upper Peru, 1542-1825.](figures/viceroyalty_peru_upper_peru_urban_hierarchy.png)



# Abstract

This gazetteer documents 546 catalogued colonial settlements across 11 administrative sub-regions and four modern republics (Peru, Bolivia, Chile and Ecuador) between 1542 and 1825. Primary ingestion combines 457 Bourbon-era urban and parish enumerations from the HGIS de las Indias (1701-1808; 83,7% of the register) with 54 sixteenth-century *reducciones* and Spanish cities from Viceroy Francisco de Toledo's 1570-1575 *Visita General* [@cook1979indios], 21 Upper Peruvian urban time series [@haskett1995coercion; @zulawski1994they], 8 Amazonian mission reductions from Chantre y Herrera and Golob and 6 early Spanish towns from López de Velasco's 1574 *Geografía*, leaving 0% crowdsourced fallback records. Out of 582 candidate entries audited in the source ledger, 36 duplicate aliases and overlapping town variants within 2 km buffers were consolidated during spatial deduplication. Across the 546 retained locales, peak recorded city-proper populations follow a power-law rank-size distribution ($\alpha = 0,67$, $R^2 = 0,97$), rising from small parish *doctrinas* of 300 to 1.000 inhabitants through provincial *cabeceras* of 5k to 15k up to the silver metropolis of Potosí (160k in 1650) and the viceregal capital Lima (63,8k in 1812) [@saignes1987miners; @gootenberg1991population].

# Background

Urban and parish settlement across the Viceroyalty of Peru and the Audiencia de Charcas evolved out of two superimposed spatial templates: the Toledan *reducción* network imposed on indigenous *ayllus* in the 1570s and the Spanish mining, administrative and coastal-port grid centred on Potosí, Lima, Cusco, La Plata, La Paz, Arequipa, Trujillo and Huamanga [@reyes2013saberes; @villanuevacriales2019arqueologia; @presta1997encomienda]. Along the arid Pacific strip, Spanish foundations such as Lima, Trujillo, Ica, Piura and Arica anchored irrigated export estates and trans-shipment corridors, while in the sierra and altiplano, royal mines at Potosí, Huancavelica, Oruro and Cerro de Pasco created sharp demographic magnets fed by coerced *mita* drafts and voluntary *forastero* migration [@zagalsky2014mita; @mayer1991indigenous; @garciaalbarido2022ruta]. By the late eighteenth century, Bourbon intendancy reforms and parish padrones documented hundreds of secondary *partido* capitals and *doctrinas* across Lower and Upper Peru [@fisher2006redes; @larson1998cochabamba; @gaviramarquez2010poblacion].

# Methodology

The settlement register was compiled across four sequential waves audited in the chapter source ledger. Wave 1 ingested 368 primary Bourbon and late colonial enumerations from HGIS de las Indias and viceregal censuses; Wave 2 added 120 sixteenth- and seventeenth-century records from Toledo's *Visita General*, López de Velasco and early colonial chronicles; Wave 3 incorporated 54 Bourbon *padrones* and Alto Perú urban series; Wave 4 conducted a frontier verification sweep adding 4 mission and coastal nodes (0,74% marginal saturation gain), bringing the final included corpus to 546 unique settlements.

All 582 candidate rows underwent WGS84 coordinate harmonisation, polygon intersection against the 11 sub-regional masks and spatial proximity deduplication. Thirty-six variant or duplicate town records falling within 0 to 2 km of canonical settlements (including duplicate entries for Potosí, Lima, Trujillo, Arequipa, Tarata, Cajamarca, Huanta, Tacna, Cerro de Pasco and Huancayo) were merged so that multi-corpus time series sit on single spatial anchors. Where raw HGIS tabular metadata carried an unpopulated name token (as in the 1793 Viedma entry for Mizque at -17,94, -65,34 in Cochabamba), the canonical toponym from the alternate-name field is restored for display. Every retained record carries city-proper population scope, explicit provenance attribution and observed historical counts spanning 1542 to 1825 [@cook1979indios; @gootenberg1991population].

# Testing and Validation

Ledger reconciliation confirms exact accounting across all 582 evaluated entries: 546 included settlements and 36 excluded duplicate aliases, with 0% crowdsourced entries. Every sub-region inside the 1.926.616 km² mask contains between 5 and 97 catalogued locales. Figure 1 displays the spatial footprint of all 546 settlements across the 11 intendancy and frontier sub-regions, illustrating the dense parish network along the Peruvian sierra and coast contrasted with sparser coverage across Charcas and the eastern Amazonian missions.

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_quipu/1.0-viceroyalty-peru-upper-peru-settlements/viceroyalty_peru_upper_peru_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 546 catalogued colonial settlements across 11 sub-regions of the Viceroyalty of Peru and Upper Peru, 1542-1825.</figcaption>
</figure>

# Results

## Leading Colonial Urban Centres

Table 1 lists the 25 largest recorded settlements drawn from the chapter summary register, ordered by peak colonial headcount. Potosí (160k in 1650) towers over every other city in the hemisphere during the seventeenth century, followed by Lima (63,8k in 1812), Oruro (36,8k in 1628), Cusco (34,2k in 1690), La Paz (32k in 1825), Cochabamba (30k in 1825), Arequipa (26,4k in 1812), Huamanga (26k in 1792), Sucre (18,4k in 1795) and Chucuito (16,4k in 1567) [@saignes1987miners; @haskett1995coercion; @larson1998cochabamba]. Note that HGIS de las Indias records *El Cuzco* (31.982 in 1792) and *San Juan de la Frontera de Huamanga* (26.045 in 1792) alongside the multi-century Cusco and Ayacucho series.

<figure class="crd-table-figure" id="tab:top25-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Sub-Region</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Potosí</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">Intendencias de La Plata (Charcas) y Potosí</td><td class="crd-td">-19,58, -65,75</td><td class="crd-td">1546-1825</td><td class="crd-td">160k (1650)</td></tr>
<tr><td class="crd-td"><strong>Lima</strong></td><td class="crd-td">Peru</td><td class="crd-td">Intendencia de Lima</td><td class="crd-td">-12,05, -77,04</td><td class="crd-td">1561-1812</td><td class="crd-td">63,8k (1812)</td></tr>
<tr><td class="crd-td"><strong>Oruro</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">Intendencias de La Plata (Charcas) y Potosí</td><td class="crd-td">-17,96, -67,11</td><td class="crd-td">1607-1795</td><td class="crd-td">36,8k (1628)</td></tr>
<tr><td class="crd-td"><strong>Cusco</strong></td><td class="crd-td">Peru</td><td class="crd-td">Intendencia del Cusco</td><td class="crd-td">-13,52, -71,98</td><td class="crd-td">1573-1791</td><td class="crd-td">34,2k (1690)</td></tr>
<tr><td class="crd-td"><strong>La Paz</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">Intendencia de La Paz (Alto Perú)</td><td class="crd-td">-16,5, -68,15</td><td class="crd-td">1550-1825</td><td class="crd-td">32k (1825)</td></tr>
<tr><td class="crd-td"><strong>El Cuzco</strong></td><td class="crd-td">Peru</td><td class="crd-td">Intendencia del Cusco</td><td class="crd-td">-13,52, -71,98</td><td class="crd-td">1792</td><td class="crd-td">32k (1792)</td></tr>
<tr><td class="crd-td"><strong>Cochabamba</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">Intendencia de Cochabamba (Alto Perú)</td><td class="crd-td">-17,39, -66,16</td><td class="crd-td">1573-1825</td><td class="crd-td">30k (1825)</td></tr>
<tr><td class="crd-td"><strong>Arequipa</strong></td><td class="crd-td">Peru</td><td class="crd-td">Intendencia de Arequipa</td><td class="crd-td">-16,4, -71,54</td><td class="crd-td">1542-1812</td><td class="crd-td">26,4k (1812)</td></tr>
<tr><td class="crd-td"><strong>San Juan de la Frontera de Huamanga</strong></td><td class="crd-td">Peru</td><td class="crd-td">Intendencias de Huamanga y Huancavelica</td><td class="crd-td">-13,16, -74,22</td><td class="crd-td">1792</td><td class="crd-td">26k (1792)</td></tr>
<tr><td class="crd-td"><strong>Ayacucho</strong></td><td class="crd-td">Peru</td><td class="crd-td">Intendencias de Huamanga y Huancavelica</td><td class="crd-td">-13,16, -74,22</td><td class="crd-td">1545-1791</td><td class="crd-td">25,9k (1791)</td></tr>
<tr><td class="crd-td"><strong>Sucre</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">Intendencias de La Plata (Charcas) y Potosí</td><td class="crd-td">-19,05, -65,26</td><td class="crd-td">1573-1825</td><td class="crd-td">18,4k (1795)</td></tr>
<tr><td class="crd-td"><strong>Chucuito</strong></td><td class="crd-td">Peru</td><td class="crd-td">Intendencia de Puno (Chucuito and Azángaro)</td><td class="crd-td">-15,89, -69,89</td><td class="crd-td">1567-1795</td><td class="crd-td">16,4k (1567)</td></tr>
<tr><td class="crd-td"><strong>San Miguel Piura</strong></td><td class="crd-td">Peru</td><td class="crd-td">Intendencia de Trujillo</td><td class="crd-td">-5,18, -80,65</td><td class="crd-td">1779</td><td class="crd-td">12,8k (1779)</td></tr>
<tr><td class="crd-td"><strong>Cajamarca</strong></td><td class="crd-td">Peru</td><td class="crd-td">Intendencia de Trujillo</td><td class="crd-td">-7,16, -78,51</td><td class="crd-td">1573-1791</td><td class="crd-td">12,5k (1791)</td></tr>
<tr><td class="crd-td"><strong>Cerro de Pasco</strong></td><td class="crd-td">Peru</td><td class="crd-td">Intendencia de Tarma</td><td class="crd-td">-10,68, -76,26</td><td class="crd-td">1635-1815</td><td class="crd-td">12,4k (1815)</td></tr>
<tr><td class="crd-td"><strong>Leon de Huanuco</strong></td><td class="crd-td">Peru</td><td class="crd-td">Intendencia de Tarma</td><td class="crd-td">-9,93, -76,24</td><td class="crd-td">1792</td><td class="crd-td">12,2k (1792)</td></tr>
<tr><td class="crd-td"><strong>Huancavelica</strong></td><td class="crd-td">Peru</td><td class="crd-td">Intendencias de Huamanga y Huancavelica</td><td class="crd-td">-12,79, -74,98</td><td class="crd-td">1573-1791</td><td class="crd-td">11,8k (1600)</td></tr>
<tr><td class="crd-td"><strong>San Jeronimo Ica</strong></td><td class="crd-td">Peru</td><td class="crd-td">Intendencia de Lima</td><td class="crd-td">-14,06, -75,73</td><td class="crd-td">1792</td><td class="crd-td">11,7k (1792)</td></tr>
<tr><td class="crd-td"><strong>Todos Santos de Chota</strong></td><td class="crd-td">Peru</td><td class="crd-td">Intendencia de Trujillo</td><td class="crd-td">-6,56, -78,65</td><td class="crd-td">1779</td><td class="crd-td">11,5k (1779)</td></tr>
<tr><td class="crd-td"><strong>Juli</strong></td><td class="crd-td">Peru</td><td class="crd-td">Intendencia de Puno (Chucuito and Azángaro)</td><td class="crd-td">-16,22, -69,46</td><td class="crd-td">1567-1795</td><td class="crd-td">11,3k (1567)</td></tr>
<tr><td class="crd-td"><strong>Lambayeque</strong></td><td class="crd-td">Peru</td><td class="crd-td">Intendencia de Trujillo</td><td class="crd-td">-6,7, -79,91</td><td class="crd-td">1573-1791</td><td class="crd-td">10,6k (1779)</td></tr>
<tr><td class="crd-td"><strong>Chiclayo</strong></td><td class="crd-td">Peru</td><td class="crd-td">Intendencia de Trujillo</td><td class="crd-td">-6,77, -79,84</td><td class="crd-td">1573-1791</td><td class="crd-td">10,4k (1779)</td></tr>
<tr><td class="crd-td"><strong>Santa Fe de Hatun Xauxa</strong></td><td class="crd-td">Peru</td><td class="crd-td">Intendencia de Tarma</td><td class="crd-td">-11,78, -75,5</td><td class="crd-td">1792</td><td class="crd-td">10,2k (1792)</td></tr>
<tr><td class="crd-td"><strong>Ica</strong></td><td class="crd-td">Peru</td><td class="crd-td">Intendencia de Lima</td><td class="crd-td">-14,07, -75,73</td><td class="crd-td">1573-1791</td><td class="crd-td">9,8k (1791)</td></tr>
<tr><td class="crd-td"><strong>Punata</strong></td><td class="crd-td">Bolivia</td><td class="crd-td">Intendencia de Cochabamba (Alto Perú)</td><td class="crd-td">-17,55, -65,84</td><td class="crd-td">1793</td><td class="crd-td">9,7k (1793)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 25 recorded urban settlements across the Viceroyalty of Peru and Upper Peru, 1542-1825.</figcaption>
</figure>

## Sub-Regional Gazetteer Coverage

Table 2 summarises site counts, areal site density per 10.000 km², leading recorded city and 1795 regional population across all 11 sub-regions. Cusco (97 sites), Trujillo (96), Tarma (80), Huamanga-Huancavelica (78), Lima (75) and Arequipa (58) account for 88,6% of catalogued locales, yielding sampling densities up to 13,69 sites per 10.000 km² in Cusco and 10,84 in Huamanga-Huancavelica, compared with 0,26 in La Plata-Potosí and 0,08 in Amazonian Maynas.

<figure class="crd-table-figure" id="tab:subregion-gaz">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Sites per 10k km²</th><th class="crd-th">Leading Site (Peak)</th><th class="crd-th">1795 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Intendencia de Lima</strong></td><td class="crd-td">79.259</td><td class="crd-td">75</td><td class="crd-td">9,46</td><td class="crd-td">Lima (63,8k)</td><td class="crd-td">149,1k</td></tr>
<tr><td class="crd-td"><strong>Intendencia de Trujillo</strong></td><td class="crd-td">176.402</td><td class="crd-td">96</td><td class="crd-td">5,44</td><td class="crd-td">San Miguel Piura (12,8k)</td><td class="crd-td">231k</td></tr>
<tr><td class="crd-td"><strong>Intendencia de Tarma</strong></td><td class="crd-td">80.107</td><td class="crd-td">80</td><td class="crd-td">9,99</td><td class="crd-td">Cerro de Pasco (12,4k)</td><td class="crd-td">201,3k</td></tr>
<tr><td class="crd-td"><strong>Intendencias de Huamanga y Huancavelica</strong></td><td class="crd-td">71.958</td><td class="crd-td">78</td><td class="crd-td">10,84</td><td class="crd-td">San Juan de la Frontera de Huamanga (26k)</td><td class="crd-td">142,3k</td></tr>
<tr><td class="crd-td"><strong>Intendencia del Cusco</strong></td><td class="crd-td">70.830</td><td class="crd-td">97</td><td class="crd-td">13,69</td><td class="crd-td">Cusco (34,2k)</td><td class="crd-td">216,3k</td></tr>
<tr><td class="crd-td"><strong>Intendencia de Arequipa</strong></td><td class="crd-td">149.998</td><td class="crd-td">58</td><td class="crd-td">3,87</td><td class="crd-td">Arequipa (26,4k)</td><td class="crd-td">136,2k</td></tr>
<tr><td class="crd-td"><strong>Intendencia de Puno (Chucuito and Azángaro)</strong></td><td class="crd-td">70.907</td><td class="crd-td">9</td><td class="crd-td">1,27</td><td class="crd-td">Chucuito (16,4k)</td><td class="crd-td">156k</td></tr>
<tr><td class="crd-td"><strong>Paititi, Maynas and Eastern Amazonian Frontier</strong></td><td class="crd-td">661.970</td><td class="crd-td">5</td><td class="crd-td">0,08</td><td class="crd-td">Lagunas Maynas (2,3k)</td><td class="crd-td">68k</td></tr>
<tr><td class="crd-td"><strong>Intendencia de La Paz (Alto Perú)</strong></td><td class="crd-td">135.151</td><td class="crd-td">6</td><td class="crd-td">0,44</td><td class="crd-td">La Paz (32k)</td><td class="crd-td">225k</td></tr>
<tr><td class="crd-td"><strong>Intendencia de Cochabamba (Alto Perú)</strong></td><td class="crd-td">39.267</td><td class="crd-td">32</td><td class="crd-td">8,15</td><td class="crd-td">Cochabamba (30k)</td><td class="crd-td">150k</td></tr>
<tr><td class="crd-td"><strong>Intendencias de La Plata (Charcas) y Potosí</strong></td><td class="crd-td">390.768</td><td class="crd-td">10</td><td class="crd-td">0,26</td><td class="crd-td">Potosí (160k)</td><td class="crd-td">255k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlement counts, site density (per 10.000 km²), leading city and 1795 population across 11 sub-regions.</figcaption>
</figure>

## Provenance Ledger and Saturation Audit

Table 3 breaks down the five primary archival and scholarly corpora contributing to the 546-site gazetteer alongside ingestion wave totals. HGIS de las Indias supplies 457 records (83,7%), Toledo's *Visita General* 54 (9,9%), Alto Perú scholarly series 21 (3,8%), Maynas mission chronicles 8 (1,5%) and López de Velasco 6 (1,1%), achieving 0,74% marginal saturation gain in Wave 4.

<figure class="crd-table-figure" id="tab:prov-ledger">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Corpus</th><th class="crd-th">Classification</th><th class="crd-th">Entries</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>HGIS de las Indias (1701-1808)</strong></td><td class="crd-td">Primary HGIS monograph corpus (Waves 1 and 3)</td><td class="crd-td">457</td><td class="crd-td">83,7%</td></tr>
<tr><td class="crd-td"><strong>Toledo Visita General (1570-1575; Cook 1975, 1981)</strong></td><td class="crd-td">Primary viceregal archive (Wave 2)</td><td class="crd-td">54</td><td class="crd-td">9,9%</td></tr>
<tr><td class="crd-td"><strong>Cook, Tandeter and Sánchez-Albornoz Alto Perú</strong></td><td class="crd-td">Primary Alto Perú historiography (Waves 2-3)</td><td class="crd-td">21</td><td class="crd-td">3,8%</td></tr>
<tr><td class="crd-td"><strong>Chantre y Herrera and Golob Maynas Missions</strong></td><td class="crd-td">Frontier mission chronicle (Wave 4)</td><td class="crd-td">8</td><td class="crd-td">1,5%</td></tr>
<tr><td class="crd-td"><strong>López de Velasco (1574) Geografía Universal</strong></td><td class="crd-td">Early colonial gazetteer (Wave 2)</td><td class="crd-td">6</td><td class="crd-td">1,1%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Provenance ledger and ingestion wave classification across 546 catalogued colonial settlements.</figcaption>
</figure>

# Limitations

Three evidentiary boundaries govern this settlement gazetteer. First, HGIS de las Indias parish coverage is markedly denser in Lower Peru (490 modern Peruvian locales) and Cochabamba (32 entries from Viedma's 1793 inspection) than in La Paz (6), Puno (9) and La Plata-Potosí (10), because Lower Peruvian parish *curatos* were tabulated systematically in 1779 and 1792 whereas several Upper Peruvian rural *ayllus* appear only in provincial *revisitas* [@gaviramarquez2010poblacion; @larson1998cochabamba]. Second, 366 settlements carry single-year snapshots in 1792 and 82 in 1779, meaning rural towns without multi-century series appear only near the close of colonial rule. Third, separate corpus ingestions retain parallel entries for Cusco and *El Cuzco* plus Ayacucho and *San Juan de la Frontera de Huamanga*, and preserve one raw HGIS label alias (Mizque in 1793); all regional population totals bypass raw point summation and rely on intendancy census budgets instead [@gootenberg1991population].

# Conclusion

The 546-settlement register anchors the spatial geography of colonial Peru and Upper Peru from the sixteenth-century silver boom through the late Bourbon intendancies. With 100% scholarly and archival provenance, continuous rank-size structure ($\alpha = 0,67$) and full sub-regional coverage across 1.926.616 km², it supplies the urban and parish armature linking early *Toledan* tributary counts to nineteenth-century republican censuses [@cook1979indios; @gootenberg1991population; @haskett1995coercion].

# Sources

::: {#refs}
:::
