---
title: "Chile, the Río de la Plata and the Banda Oriental"
subtitle: "Settlement Gazetteer and Source Ledger, 1536-1830"
date: "23 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org
bibliography: chile_rio_plata_banda_oriental_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true
hero_figure: "figures/chile_rio_plata_banda_oriental_regional_map.png"
hero_caption: "Spatial distribution of 177 colonial settlements across Chile, the Río de la Plata and the Banda Oriental between 1536 and 1830."
hero_label: "fig:hero-crp-settlements"
header-includes:
  - \renewcommand{\topfraction}{0.88}
  - \renewcommand{\bottomfraction}{0.82}
  - \renewcommand{\textfraction}{0.08}
  - \renewcommand{\floatpagefraction}{0.75}
  - \raggedbottom
output:
  pdf_document:
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer catalogues 177 colonial cities, port towns, frontier forts, Jesuit reductions and rural parish centres active across the Captaincy General of Chile, the Viceroyalty of the Río de la Plata and the Banda Oriental between 1536 and 1830, spanning 3.511.387 km² across eight territorial units. Synthesising the *HGIS de las Indias* geohistorical archive, the 1778 *Censo de Vértiz*, the 1777 to 1778 *Censo de Jáuregui*, the 1813 Egaña Chilean census and colonial Chilean series by Mellafe and Carmagnani [@kamen1974mecanismes; @socolow1978merchants; @jackson2015managing], the register captures 680 settlement-year population observations across Argentina (87 sites), Chile (59 sites) and Uruguay (31 sites). Peak populations are led by Buenos Aires (55,4k in 1822), Santiago (54k in 1830), Valparaíso (18k in 1830), Montevideo (15,2k in 1798), La Isla (15k in 1779), Córdoba (11,5k in 1822), Mendoza (9,6k in 1812) and Concepción (8,4k in 1813) [@johnson2011workshop; @fuce2017real; @bixio2019reflexiones]. Alongside the 177 included centres, the regional source ledger documents 18 excluded duplicate aliases out of 195 evaluated candidates, reaching archival saturation at a Wave 4 marginal gain of 1,14% with zero crowdsourced fallback records.

# Background

Urban settlement across the colonial Southern Cone followed three distinct spatial logics: fortified frontier towns along the Biobío and Chaco margins, inland caravan and oasis hubs linking Cuyo and Tucumán to Potosí, and Atlantic and Pacific port cities oriented toward imperial maritime trade [@boccara1999poder; @marschoff2018movilidad; @socolow1978merchants]. Along the Upper Paraná and Uruguay basins, the Jesuit Guaraní reductions introduced a unique planned missionary urbanism before royal expulsion in 1767 triggered sustained out-migration [@kuhne2025churches; @jackson2015managing; @perezgerardo2022practicas]. Meanwhile, late-colonial Bourbon reforms stimulated rapid agrarian parish formation across the Buenos Aires *campaña* and the Banda Oriental countryside [@pelozattoreilly2016mano; @gelman1905campesinos; @contente2017numeros].

# Methodology

Settlement coordinates, historical spans and population series were compiled across four archival waves documented in the regional source ledger: initial ingestion from *HGIS de las Indias* (1701 to 1808) and the 1778 *Censo de Vértiz*, early colonial backfill from sixteenth- and seventeenth-century *visitas* and chronicles, Bourbon *padrones* and early nineteenth-century enumerations (1777 to 1829), and sub-regional frontier gap sweeps [@valenzuelamarquez2014indios; @escolar2021liderazgo; @pollero2015que]. Variant orthographies and close-pair suburban records within 4 km of canonical urban cores (such as unaccented or duplicate spellings of Buenos Aires, Valparaíso, Montevideo, Mendoza, San Juan, Concepción, Rosario and Luján) were consolidated into single canonical entries so urban counts never double-count the same population.

# Testing and Validation

Ledger reconciliation confirms 177 included settlements and 18 excluded duplicate aliases (195 evaluated candidates, zero unaccounted entries). Every included settlement carries valid coordinates within one of the eight masked territories and documented population observations within the 1536 to 1830 domain. Figure \ref{fig:sett-hierarchy} presents the twelve largest centres and the Zipf rank-size distribution ($\alpha = 0{,}65$, $R^2 = 0{,}95$) across all 177 catalogued sites.

<figure class="crd-figure-block" id="fig:sett-hierarchy">
<img class="crd-figure-img" src="/artefacts/project_quipu/1.0-chile-rio-plata-banda-oriental-settlements/chile_rio_plata_banda_oriental_urban_hierarchy.png" alt="fig:sett-hierarchy" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Top recorded urban centres and Zipf rank-size fit across 177 colonial settlements in Chile, the Río de la Plata and the Banda Oriental.</figcaption>
</figure>

# Results

## Top 45 Settlements by Peak Population

Table \ref{tab:top45-crp} lists the 45 largest settlements ordered by peak recorded population, highlighting the dual capitals Buenos Aires and Santiago, the maritime ports Valparaíso and Montevideo, interior trade centres Córdoba, Mendoza and Salta, and leading Guaraní missions such as Yapeyú, Loreto and Concepción [@fuce2017real; @jackson2015managing; @goldberg1976poblacion].

<figure class="crd-table-figure" id="tab:top45-crp">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Country</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">1778</th><th class="crd-th">Peak (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Buenos Aires</strong></td><td class="crd-td">Buenos Aires and Litoral</td><td class="crd-td">Argentina</td><td class="crd-td">-34,6, -58,38</td><td class="crd-td">1580-1822</td><td class="crd-td">24,2k</td><td class="crd-td">55,4k (1822)</td></tr>
<tr><td class="crd-td"><strong>Santiago</strong></td><td class="crd-td">Obispado de Santiago</td><td class="crd-td">Chile</td><td class="crd-td">-33,45, -70,67</td><td class="crd-td">1545-1830</td><td class="crd-td">24,3k</td><td class="crd-td">54k (1830)</td></tr>
<tr><td class="crd-td"><strong>Valparaíso</strong></td><td class="crd-td">Obispado de Santiago</td><td class="crd-td">Chile</td><td class="crd-td">-33,05, -71,61</td><td class="crd-td">1574-1830</td><td class="crd-td">3,4k</td><td class="crd-td">18k (1830)</td></tr>
<tr><td class="crd-td"><strong>Montevideo</strong></td><td class="crd-td">Banda Oriental and Misiones</td><td class="crd-td">Uruguay</td><td class="crd-td">-34,9, -56,16</td><td class="crd-td">1726-1829</td><td class="crd-td">4,3k</td><td class="crd-td">15,2k (1798)</td></tr>
<tr><td class="crd-td"><strong>La Isla</strong></td><td class="crd-td">Obispado de Concepción</td><td class="crd-td">Chile</td><td class="crd-td">-35,75, -71,59</td><td class="crd-td">1755-1779</td><td class="crd-td">-</td><td class="crd-td">15k (1779)</td></tr>
<tr><td class="crd-td"><strong>Córdoba</strong></td><td class="crd-td">Gobernación del Tucumán</td><td class="crd-td">Argentina</td><td class="crd-td">-31,42, -64,19</td><td class="crd-td">1575-1822</td><td class="crd-td">7,3k</td><td class="crd-td">11,5k (1822)</td></tr>
<tr><td class="crd-td"><strong>Mendoza</strong></td><td class="crd-td">Corregimiento de Cuyo</td><td class="crd-td">Argentina</td><td class="crd-td">-32,89, -68,84</td><td class="crd-td">1565-1812</td><td class="crd-td">7,5k</td><td class="crd-td">9,6k (1812)</td></tr>
<tr><td class="crd-td"><strong>Concepción</strong></td><td class="crd-td">Obispado de Concepción</td><td class="crd-td">Chile</td><td class="crd-td">-36,83, -73,05</td><td class="crd-td">1555-1813</td><td class="crd-td">6,8k</td><td class="crd-td">8,4k (1813)</td></tr>
<tr><td class="crd-td"><strong>San Agustin de Talca</strong></td><td class="crd-td">Obispado de Santiago</td><td class="crd-td">Chile</td><td class="crd-td">-35,43, -71,67</td><td class="crd-td">1755-1779</td><td class="crd-td">-</td><td class="crd-td">8,1k (1779)</td></tr>
<tr><td class="crd-td"><strong>Pilar Fuerte de los Ranchos</strong></td><td class="crd-td">Buenos Aires and Litoral</td><td class="crd-td">Argentina</td><td class="crd-td">-35,52, -58,32</td><td class="crd-td">1798</td><td class="crd-td">-</td><td class="crd-td">8k (1798)</td></tr>
<tr><td class="crd-td"><strong>Yapeyú</strong></td><td class="crd-td">Banda Oriental and Misiones</td><td class="crd-td">Argentina</td><td class="crd-td">-29,47, -56,82</td><td class="crd-td">1627-1800</td><td class="crd-td">-</td><td class="crd-td">8k (1768)</td></tr>
<tr><td class="crd-td"><strong>San Juan</strong></td><td class="crd-td">Corregimiento de Cuyo</td><td class="crd-td">Argentina</td><td class="crd-td">-31,54, -68,54</td><td class="crd-td">1574-1812</td><td class="crd-td">6,1k</td><td class="crd-td">7,8k (1812)</td></tr>
<tr><td class="crd-td"><strong>La Serena</strong></td><td class="crd-td">Obispado de Santiago</td><td class="crd-td">Chile</td><td class="crd-td">-29,9, -71,25</td><td class="crd-td">1550-1813</td><td class="crd-td">5,6k</td><td class="crd-td">7,4k (1813)</td></tr>
<tr><td class="crd-td"><strong>Talca</strong></td><td class="crd-td">Obispado de Santiago</td><td class="crd-td">Chile</td><td class="crd-td">-35,43, -71,66</td><td class="crd-td">1742-1813</td><td class="crd-td">4,6k</td><td class="crd-td">7,4k (1813)</td></tr>
<tr><td class="crd-td"><strong>Rauquen</strong></td><td class="crd-td">Obispado de Santiago</td><td class="crd-td">Chile</td><td class="crd-td">-35,46, -71,78</td><td class="crd-td">1779</td><td class="crd-td">-</td><td class="crd-td">7,4k (1779)</td></tr>
<tr><td class="crd-td"><strong>Loreto</strong></td><td class="crd-td">Banda Oriental and Misiones</td><td class="crd-td">Argentina</td><td class="crd-td">-27,33, -55,52</td><td class="crd-td">1702-1802</td><td class="crd-td">-</td><td class="crd-td">7k (1731)</td></tr>
<tr><td class="crd-td"><strong>Mercedes de Manzo</strong></td><td class="crd-td">Obispado de Concepción</td><td class="crd-td">Chile</td><td class="crd-td">-35,97, -72,32</td><td class="crd-td">1755-1779</td><td class="crd-td">-</td><td class="crd-td">7k (1779)</td></tr>
<tr><td class="crd-td"><strong>Quillota</strong></td><td class="crd-td">Obispado de Santiago</td><td class="crd-td">Chile</td><td class="crd-td">-32,88, -71,25</td><td class="crd-td">1574-1813</td><td class="crd-td">5,1k</td><td class="crd-td">6,8k (1813)</td></tr>
<tr><td class="crd-td"><strong>Concepcion</strong></td><td class="crd-td">Banda Oriental and Misiones</td><td class="crd-td">Argentina</td><td class="crd-td">-27,98, -55,52</td><td class="crd-td">1702-1802</td><td class="crd-td">-</td><td class="crd-td">6,5k (1736)</td></tr>
<tr><td class="crd-td"><strong>Chillán</strong></td><td class="crd-td">Obispado de Concepción</td><td class="crd-td">Chile</td><td class="crd-td">-36,61, -72,1</td><td class="crd-td">1585-1813</td><td class="crd-td">4,9k</td><td class="crd-td">6,4k (1813)</td></tr>
<tr><td class="crd-td"><strong>Salta</strong></td><td class="crd-td">Gobernación del Tucumán</td><td class="crd-td">Argentina</td><td class="crd-td">-24,78, -65,42</td><td class="crd-td">1585-1812</td><td class="crd-td">4,3k</td><td class="crd-td">6,4k (1812)</td></tr>
<tr><td class="crd-td"><strong>Castro Chiloé</strong></td><td class="crd-td">Obispado de Concepción</td><td class="crd-td">Chile</td><td class="crd-td">-42,48, -73,76</td><td class="crd-td">1574-1813</td><td class="crd-td">4,6k</td><td class="crd-td">5,8k (1813)</td></tr>
<tr><td class="crd-td"><strong>Santa Fe</strong></td><td class="crd-td">Buenos Aires and Litoral</td><td class="crd-td">Argentina</td><td class="crd-td">-31,63, -60,7</td><td class="crd-td">1575-1815</td><td class="crd-td">4,1k</td><td class="crd-td">5,8k (1815)</td></tr>
<tr><td class="crd-td"><strong>Santa Ana</strong></td><td class="crd-td">Banda Oriental and Misiones</td><td class="crd-td">Argentina</td><td class="crd-td">-27,37, -55,58</td><td class="crd-td">1702-1802</td><td class="crd-td">-</td><td class="crd-td">5,6k (1772)</td></tr>
<tr><td class="crd-td"><strong>San Miguel de Tucumán</strong></td><td class="crd-td">Gobernación del Tucumán</td><td class="crd-td">Argentina</td><td class="crd-td">-26,81, -65,22</td><td class="crd-td">1574-1812</td><td class="crd-td">4k</td><td class="crd-td">5,6k (1812)</td></tr>
<tr><td class="crd-td"><strong>Rancagua</strong></td><td class="crd-td">Obispado de Santiago</td><td class="crd-td">Chile</td><td class="crd-td">-34,17, -70,74</td><td class="crd-td">1743-1813</td><td class="crd-td">3,9k</td><td class="crd-td">5,5k (1813)</td></tr>
<tr><td class="crd-td"><strong>Corrientes</strong></td><td class="crd-td">Buenos Aires and Litoral</td><td class="crd-td">Argentina</td><td class="crd-td">-27,47, -58,83</td><td class="crd-td">1590-1814</td><td class="crd-td">4,3k</td><td class="crd-td">5,5k (1814)</td></tr>
<tr><td class="crd-td"><strong>San Carlos</strong></td><td class="crd-td">Banda Oriental and Misiones</td><td class="crd-td">Argentina</td><td class="crd-td">-27,75, -55,9</td><td class="crd-td">1702-1802</td><td class="crd-td">-</td><td class="crd-td">5,4k (1702)</td></tr>
<tr><td class="crd-td"><strong>Apostoles</strong></td><td class="crd-td">Banda Oriental and Misiones</td><td class="crd-td">Argentina</td><td class="crd-td">-27,91, -55,76</td><td class="crd-td">1702-1802</td><td class="crd-td">-</td><td class="crd-td">5,3k (1733)</td></tr>
<tr><td class="crd-td"><strong>San Felipe Chile</strong></td><td class="crd-td">Obispado de Santiago</td><td class="crd-td">Chile</td><td class="crd-td">-32,75, -70,72</td><td class="crd-td">1740-1813</td><td class="crd-td">3,9k</td><td class="crd-td">5,2k (1813)</td></tr>
<tr><td class="crd-td"><strong>Copiapó</strong></td><td class="crd-td">Obispado de Santiago</td><td class="crd-td">Chile</td><td class="crd-td">-27,37, -70,33</td><td class="crd-td">1574-1813</td><td class="crd-td">3,8k</td><td class="crd-td">5,1k (1813)</td></tr>
<tr><td class="crd-td"><strong>San Fernando Chile</strong></td><td class="crd-td">Obispado de Santiago</td><td class="crd-td">Chile</td><td class="crd-td">-34,58, -70,99</td><td class="crd-td">1742-1813</td><td class="crd-td">3,5k</td><td class="crd-td">4,9k (1813)</td></tr>
<tr><td class="crd-td"><strong>Corpus</strong></td><td class="crd-td">Banda Oriental and Misiones</td><td class="crd-td">Argentina</td><td class="crd-td">-27,13, -55,51</td><td class="crd-td">1702-1802</td><td class="crd-td">-</td><td class="crd-td">4,9k (1772)</td></tr>
<tr><td class="crd-td"><strong>Curicó</strong></td><td class="crd-td">Obispado de Santiago</td><td class="crd-td">Chile</td><td class="crd-td">-34,98, -71,24</td><td class="crd-td">1743-1813</td><td class="crd-td">3,1k</td><td class="crd-td">4,6k (1813)</td></tr>
<tr><td class="crd-td"><strong>La Cruz</strong></td><td class="crd-td">Banda Oriental and Misiones</td><td class="crd-td">Argentina</td><td class="crd-td">-29,18, -56,65</td><td class="crd-td">1702-1802</td><td class="crd-td">-</td><td class="crd-td">4,6k (1731)</td></tr>
<tr><td class="crd-td"><strong>Buena Esperanza de Rere</strong></td><td class="crd-td">Obispado de Concepción</td><td class="crd-td">Chile</td><td class="crd-td">-37,13, -72,73</td><td class="crd-td">1779</td><td class="crd-td">-</td><td class="crd-td">4,6k (1779)</td></tr>
<tr><td class="crd-td"><strong>San Juan de Vera de las Siete Corrientes</strong></td><td class="crd-td">Buenos Aires and Litoral</td><td class="crd-td">Argentina</td><td class="crd-td">-27,47, -58,83</td><td class="crd-td">1798</td><td class="crd-td">-</td><td class="crd-td">4,5k (1798)</td></tr>
<tr><td class="crd-td"><strong>San Ignacio Mini</strong></td><td class="crd-td">Banda Oriental and Misiones</td><td class="crd-td">Argentina</td><td class="crd-td">-27,26, -55,54</td><td class="crd-td">1632-1802</td><td class="crd-td">-</td><td class="crd-td">4,4k (1731)</td></tr>
<tr><td class="crd-td"><strong>San Fernando del Valle de Catamarca</strong></td><td class="crd-td">Gobernación del Tucumán</td><td class="crd-td">Argentina</td><td class="crd-td">-28,47, -65,78</td><td class="crd-td">1683-1812</td><td class="crd-td">3,1k</td><td class="crd-td">4,3k (1812)</td></tr>
<tr><td class="crd-td"><strong>Santiago del Estero</strong></td><td class="crd-td">Gobernación del Tucumán</td><td class="crd-td">Argentina</td><td class="crd-td">-27,78, -64,26</td><td class="crd-td">1555-1812</td><td class="crd-td">3,1k</td><td class="crd-td">4,3k (1628)</td></tr>
<tr><td class="crd-td"><strong>Paraná</strong></td><td class="crd-td">Buenos Aires and Litoral</td><td class="crd-td">Argentina</td><td class="crd-td">-31,73, -60,52</td><td class="crd-td">1730-1815</td><td class="crd-td">2,6k</td><td class="crd-td">4,3k (1815)</td></tr>
<tr><td class="crd-td"><strong>San Nicolas</strong></td><td class="crd-td">Buenos Aires and Litoral</td><td class="crd-td">Argentina</td><td class="crd-td">-33,34, -60,22</td><td class="crd-td">1798</td><td class="crd-td">-</td><td class="crd-td">4,2k (1798)</td></tr>
<tr><td class="crd-td"><strong>Melipilla</strong></td><td class="crd-td">Obispado de Santiago</td><td class="crd-td">Chile</td><td class="crd-td">-33,69, -71,22</td><td class="crd-td">1742-1813</td><td class="crd-td">2,9k</td><td class="crd-td">4,2k (1813)</td></tr>
<tr><td class="crd-td"><strong>Parroquia Santa Ana</strong></td><td class="crd-td">Obispado de Santiago</td><td class="crd-td">Chile</td><td class="crd-td">-33,44, -70,66</td><td class="crd-td">1755</td><td class="crd-td">-</td><td class="crd-td">4,2k (1755)</td></tr>
<tr><td class="crd-td"><strong>Vichuquen</strong></td><td class="crd-td">Obispado de Santiago</td><td class="crd-td">Chile</td><td class="crd-td">-34,88, -71,99</td><td class="crd-td">1755-1779</td><td class="crd-td">-</td><td class="crd-td">4,2k (1779)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Top 45 settlements in Chile, the Río de la Plata and the Banda Oriental ordered by peak documented population (n=177 total sites).</figcaption>
</figure>

## Sub-Regional Distribution, Provenance and Ledger Exclusions

Table \ref{tab:regsum-crp} summarises site counts and leading urban centres across all eight territories, showing the concentration of rural parishes and frontier posts in Buenos Aires (53 sites) and the Banda Oriental with Misiones (44 sites) alongside the dense Central Valley network of Santiago (31 sites) and Concepción (28 sites). Table \ref{tab:provenance-crp} records the source provenance distribution and four-wave saturation sequence, while Table \ref{tab:excluded-crp} documents all 18 consolidated duplicate aliases from the regional source ledger.

<figure class="crd-table-figure" id="tab:regsum-crp">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Leading Centre (Peak)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Obispado de Santiago</strong></td><td class="crd-td">209.632</td><td class="crd-td">31</td><td class="crd-td">Santiago (54k)</td></tr>
<tr><td class="crd-td"><strong>Obispado de Concepción</strong></td><td class="crd-td">379.064</td><td class="crd-td">28</td><td class="crd-td">La Isla (15k)</td></tr>
<tr><td class="crd-td"><strong>Corregimiento de Cuyo</strong></td><td class="crd-td">202.256</td><td class="crd-td">9</td><td class="crd-td">Mendoza (9,6k)</td></tr>
<tr><td class="crd-td"><strong>Buenos Aires and Litoral</strong></td><td class="crd-td">244.799</td><td class="crd-td">53</td><td class="crd-td">Buenos Aires (55,4k)</td></tr>
<tr><td class="crd-td"><strong>Banda Oriental and Misiones</strong></td><td class="crd-td">263.007</td><td class="crd-td">44</td><td class="crd-td">Montevideo (15,2k)</td></tr>
<tr><td class="crd-td"><strong>Gobernación del Tucumán</strong></td><td class="crd-td">504.641</td><td class="crd-td">8</td><td class="crd-td">Córdoba (11,5k)</td></tr>
<tr><td class="crd-td"><strong>Gran Chaco Frontier</strong></td><td class="crd-td">425.650</td><td class="crd-td">3</td><td class="crd-td">Matará Chaco (1,9k)</td></tr>
<tr><td class="crd-td"><strong>Patagonia and Pampas</strong></td><td class="crd-td">1.282.338</td><td class="crd-td">1</td><td class="crd-td">Carmen de Patagones (1,3k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Settlement counts, territorial areas and leading centres across the eight Southern Cone territories (177 total sites).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:provenance-crp">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Primary Corpus</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>HGIS de las Indias (1701-1808)</strong></td><td class="crd-td">116</td><td class="crd-td">65,54%</td></tr>
<tr><td class="crd-td"><strong>Mellafe (1959) and Carmagnani (1967) Reino de Chile</strong></td><td class="crd-td">20</td><td class="crd-td">11,3%</td></tr>
<tr><td class="crd-td"><strong>Ravignani (1919) Censo de Vértiz (1778)</strong></td><td class="crd-td">41</td><td class="crd-td">23,16%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Primary source provenance across all 177 catalogued settlements (zero crowdsourced fallback records).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:waves-crp">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Ingestion Wave</th><th class="crd-th">Prior Count</th><th class="crd-th">Added</th><th class="crd-th">Marginal Gain</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wave 1: HGIS de las Indias and viceroyal enumerations</strong></td><td class="crd-td">0</td><td class="crd-td">120</td><td class="crd-td">100%</td></tr>
<tr><td class="crd-td"><strong>Wave 2: Early colonial visitas and chronicles</strong></td><td class="crd-td">120</td><td class="crd-td">38</td><td class="crd-td">31,67%</td></tr>
<tr><td class="crd-td"><strong>Wave 3: Bourbon padrones and late-colonial counts</strong></td><td class="crd-td">158</td><td class="crd-td">17</td><td class="crd-td">10,76%</td></tr>
<tr><td class="crd-td"><strong>Wave 4: Sub-regional and frontier gap sweep</strong></td><td class="crd-td">175</td><td class="crd-td">2</td><td class="crd-td">1,14%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Four-wave gazetteer ingestion sequence and marginal saturation gain across 177 included settlements.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:excluded-crp">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Candidate</th><th class="crd-th">Country</th><th class="crd-th">Classification</th><th class="crd-th">Consolidation Note</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Buenos Aires</strong></td><td class="crd-td">Argentina</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate 'Buenos Aires' into 'Buenos Aires' (0,94 km).</td></tr>
<tr><td class="crd-td"><strong>San Ignacio Miní</strong></td><td class="crd-td">Argentina</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate 'San Ignacio Miní' into 'San Ignacio Mini' (0,51 km).</td></tr>
<tr><td class="crd-td"><strong>Candelaria</strong></td><td class="crd-td">Argentina</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate 'Candelaria' into 'Candelaria' (0,35 km).</td></tr>
<tr><td class="crd-td"><strong>Rancagua</strong></td><td class="crd-td">Chile</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate 'Rancagua' into 'Rancagua' (0,28 km).</td></tr>
<tr><td class="crd-td"><strong>Valparaiso</strong></td><td class="crd-td">Chile</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate 'Valparaiso' into 'Valparaíso' (1,12 km).</td></tr>
<tr><td class="crd-td"><strong>Montevideo</strong></td><td class="crd-td">Uruguay</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate 'Montevideo' into 'Montevideo' (3,62 km).</td></tr>
<tr><td class="crd-td"><strong>Melipilla</strong></td><td class="crd-td">Chile</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate 'Melipilla' into 'Melipilla' (0,35 km).</td></tr>
<tr><td class="crd-td"><strong>Mendoza</strong></td><td class="crd-td">Argentina</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate 'Mendoza' into 'Mendoza' (0,09 km).</td></tr>
<tr><td class="crd-td"><strong>San Juan</strong></td><td class="crd-td">Argentina</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate 'San Juan' into 'San Juan' (1,04 km).</td></tr>
<tr><td class="crd-td"><strong>Concepcion</strong></td><td class="crd-td">Chile</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate 'Concepcion' into 'Concepción' (0 km).</td></tr>
<tr><td class="crd-td"><strong>Rosario</strong></td><td class="crd-td">Argentina</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate 'Rosario' into 'Rosario' (0,87 km).</td></tr>
<tr><td class="crd-td"><strong>Parana</strong></td><td class="crd-td">Argentina</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate 'Parana' into 'Paraná' (1,39 km).</td></tr>
<tr><td class="crd-td"><strong>Lujan</strong></td><td class="crd-td">Argentina</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate 'Lujan' into 'Luján' (0,57 km).</td></tr>
<tr><td class="crd-td"><strong>Pergamino</strong></td><td class="crd-td">Argentina</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate 'Pergamino' into 'Pergamino' (0,72 km).</td></tr>
<tr><td class="crd-td"><strong>Melipilla</strong></td><td class="crd-td">Chile</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate 'Melipilla' into 'Melipilla' (0,35 km).</td></tr>
<tr><td class="crd-td"><strong>San Jose de Mayo</strong></td><td class="crd-td">Uruguay</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate 'San Jose de Mayo' into 'San José de Mayo' (0,11 km).</td></tr>
<tr><td class="crd-td"><strong>Carmen de Patagones</strong></td><td class="crd-td">Argentina</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate 'Carmen de Patagones' into 'Carmen de Patagones' (0,11 km).</td></tr>
<tr><td class="crd-td"><strong>Colonia del Sacramento</strong></td><td class="crd-td">Uruguay</td><td class="crd-td">Duplicate alias</td><td class="crd-td">Merged duplicate 'Colonia del Sacramento' into 'Colonia del Sacramento' (1,42 km).</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> All 18 excluded candidate entries in the regional source ledger, consolidated into canonical settlements.</figcaption>
</figure>

# Limitations

Three characteristics of the colonial settlement record constrain urban coverage. First, small rural *estancias*, mining camps (*asientos de minas*) and dispersed indigenous hamlets lacking formal parish or cabildo status are absorbed into sub-regional rural aggregates rather than plotted as separate points [@pelozattoreilly2016mano; @gelman1905campesinos]. Second, autonomous indigenous populations in Araucanía, the Gran Chaco and Patagonia were non-sedentary or dispersed across shifting *lof* and *toldería* camps, leaving Carmen de Patagones, Concepción del Bermejo, Matará and Resistencia as the only geocoded points inside the frontier masks [@dillehay2016reflections; @boccara1999poder]. Third, isolated *HGIS de las Indias* entries such as La Isla (15k in 1779) and Pilar Fuerte de los Ranchos (8k in 1798) reflect broad rural *curato* or *partido* jurisdictions attached to a central parish seat rather than dense nucleated towns, explaining their high eighteenth-century rank relative to older urban foundations [@contente2017numeros].

# Sources

<div id="refs"></div>
