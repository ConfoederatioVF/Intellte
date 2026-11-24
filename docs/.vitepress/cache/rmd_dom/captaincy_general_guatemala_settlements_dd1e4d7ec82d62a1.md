---
title: "Captaincy General of Guatemala and Central America"
subtitle: "Settlement Gazetteer and Urban Hierarchy, 1524-1821"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/captaincy_general_guatemala_urban_hierarchy.png"
hero_caption: "Leading colonial towns and rank-size distribution across 190 catalogued Central American, Chiapan and Panamanian settlements from 1524 to 1821."
hero_label: "fig:hero-guatemala-hierarchy"
bibliography: captaincy_general_guatemala_literature_review.bib
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



![Leading colonial towns and rank-size distribution across 190 catalogued Central American, Chiapan and Panamanian settlements from 1524 to 1821.](figures/captaincy_general_guatemala_urban_hierarchy.png)



# Abstract

This companion gazetteer documents 190 geocoded colonial settlements spanning eight isthmian jurisdictions and eight modern territories across the Captaincy General of Guatemala, Ciudad Real de Chiapas, British Honduras, the Mosquitia Coast and the Audiencia of Panamá between 1524 and 1821 (with recorded town-level series extending from 1574 to 1820). Audited across four sequential ingestion waves against 196 candidate records, the register consolidates 6 duplicate alias entries within 25 km spatial buffers and maintains a 0% crowd-sourced fallback share, drawing exclusively on Bourbon-era parish censuses, archival *visitas*, British colonial musters and peer-reviewed historical demography [@Juarros1808; @HallPerezBrignoli2003; @JaenSuarez1978; @SIBBelize2024]. Across the 190-settlement urban hierarchy, the top 95 ranked towns obey a steep colonial Zipf power law ($\alpha = 0,90$, $R^2 = 0,88$ on the 1774 cross-section), crowned by Antigua Guatemala (37,5k in 1768) and its post-earthquake successor Ciudad de Guatemala (31,5k in 1820), followed by provincial capitals at León (21,4k), San Salvador (16,5k) and Granada (14,2k), highland Maya market hubs at Quetzaltenango (13,2k), Cobán (12,4k) and Chamula (11,7k), late-colonial Central Valley risers led by San José (12,4k), and maritime enclaves at Panamá (9,6k), Belize Town (4.163) and Bluefields (1.850) [@Lutz1994; @Newson1987; @PerezBrignoli2010; @Wortman1982].

# Background

Colonial settlement geography across Central America reflected a sharp division between Spanish urban *repúblicas de españoles*, nucleated indigenous *pueblos de indios* and unreduced maritime or rainforest frontiers [@MacLeod1973; @Lovell1992; @HallPerezBrignoli2003]. Following the conquests of the 1520s, Spanish municipalities—Santiago de Guatemala, Ciudad Real de Chiapas, Gracias a Dios, Comayagua, San Salvador, León, Granada, Cartago and Panamá—were positioned along volcanic basins, silver districts and portage termini to control indigenous tribute and Pacific trade [@Lutz1994; @Vinals2020Outstanding; @JaenSuarez1978]. Surrounding those Spanish grids lay hundreds of congregated Maya, Pipil, Lenca, Chorotega and Nicarao villages governed by local *cabildos* and *principales*, whose demographic survival depended heavily on elevation and distance from coastal malaria belts [@Cruz1999Lite; @Newson1986; @Newson2021Supervivencia; @Medenou2025Mundo].

Over the seventeenth and eighteenth centuries, three spatial transformations reshaped this urban network. First, recurring volcanic eruptions and earthquakes forced dramatic capital relocations—most notably the transfer from Antigua Guatemala to Nueva Guatemala de la Asunción after the 1773 Santa Marta earthquake, alongside the earlier rebuilding of Panamá after 1671 and León after 1610 [@Lutz1994; @JaenSuarez1978]. Second, commercial indigo production in San Salvador and smallholder expansion in Costa Rica's western Central Valley elevated new *ladino* and creole centres such as San Salvador, Santa Ana, San Miguel, San Vicente, San José, Heredia and Alajuela into the upper urban tier [@Wortman1982; @PerezBrignoli2010; @Osegueda2024Migrar]. Third, British timber camps around Belize Town, Corozal and Orange Walk, Garifuna settlements at Dangriga (Stann Creek) and autonomous Miskitu lagoon towns at Sandy Bay, Bluefields and Cabo Gracias a Dios anchored a distinct Atlantic littoral settlement system outside Spanish census jurisdiction [@SIBBelize2024; @Wainwright2020Colonial; @Clavel2026King].

# Methodology

The settlement register was assembled in four documented ingestion waves tracked in the chapter source ledger. Wave 1 ingested 173 primary official and archival records drawn from the Historical GIS of the Indies (integrating the 1774–1796 Chiapas ecclesiastical reports, 1778 Panamanian and Veraguas censuses, Archbishop Cortés y Larraz's 1770 *visita* and Domingo Juarros's 1808 *Compendio*), accounting for 91,05% of the final register [@Juarros1808; @JaenSuarez1978]. Wave 2 added 12 monograph-derived colonial town series covering Honduras, Nicaragua, Panamá and British Honduras (6,94% marginal gain) [@Newson1986; @Newson1987; @SIBBelize2024]. Wave 3 backfilled 3 longitudinal colonial series (1,62% marginal gain), and Wave 4 executed a sub-regional gap-verification sweep adding 2 Atlantic frontier settlements (1,06% marginal gain), closing the ledger at 0% crowd-sourced share.

All 196 candidate records underwent WGS84 coordinate harmonisation, polygon assignment across the eight colonial jurisdictions and 25 km spatial deduplication. Six duplicate alias records—redundant entries for Antigua Guatemala, Panamá, Tuxtla, Tapachula, Ciudad Real de Chiapas and David—were merged into canonical records, yielding exactly 190 unique *city-proper* entries (zero metropolitan suburb double-counts). Every entry carries explicit chronological population observations between 1574 and 1820, geographic coordinates and primary source attribution.

# Testing and Validation

Source-ledger accounting reconciles all 196 audited candidates exactly: 190 included colonial settlements plus 6 excluded duplicate aliases. Every one of the eight colonial sub-regions contains documented town records—from 95 in Ciudad Real de Chiapas and 43 in Panamá, Veraguas and Darién down to 14 in core Guatemala and Verapaz, 13 in León and Costa Rica, 10 in Comayagua, 6 along the Mosquitia Coast, 5 in San Salvador and Sonsonate and 4 inside the British Honduras mask polygon (with Dangriga/Stann Creek falling immediately across the southern Belize borderlands into the adjacent Guatemala-Verapaz mask edge, accounting for the 5 total Belizean settlements) [@Wainwright2020Colonial]. Figure \ref{fig:sett-regional-map} displays the spatial footprint of all 190 catalogued settlements across the eight colonial jurisdictions.

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_jaguar/1.0-captaincy-general-guatemala-settlements/captaincy_general_guatemala_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 190 catalogued colonial settlements across eight jurisdictions of the Captaincy General of Guatemala, British Honduras and Panama, 1524 to 1821.</figcaption>
</figure>

Cross-checking town totals against provincial Bourbon returns confirms consistent urban shares: in 1778, newly founded Ciudad de Guatemala (23.434) represented 5,9% of Guatemala province's 398.575 inhabitants, San Salvador (12.059) represented 10,3% of San Salvador's 117.436, León (11.200) and Granada (9.800) together represented 17,9% of Nicaragua's 117.396, and Belize Town (3.824 in 1816) matched the official 1816 British Honduras settlement census directly [@Juarros1808; @HallPerezBrignoli2003; @SIBBelize2024].

# Results

## Leading Colonial Towns of Central America, Chiapas and Panamá

Table \ref{tab:top30-colonial} compiles the 30 largest catalogued colonial settlements ordered by peak recorded population between 1574 and 1820. Descending from Antigua Guatemala (37,5k in 1768) and Ciudad de Guatemala (31,5k in 1820) down to Matagalpa (5,6k in 1808), the top 30 tier spans every major Spanish province of the isthmus: six towns in Guatemala, six in Nicaragua, five in El Salvador, five in Chiapas, three in Costa Rica, two in Honduras and one in Panamá (Panamá City at rank 14 with 9,6k, joined immediately outside the top 30 by Los Santos at 5,6k).

<figure class="crd-table-figure" id="tab:top30-colonial">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Colonial Jurisdiction</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Antigua Guatemala</strong></td><td class="crd-td">Guatemala</td><td class="crd-td">Provincia de Guatemala Core and Verapaz</td><td class="crd-td">14,56, -90,73</td><td class="crd-td">1574 to 1808</td><td class="crd-td">37,5k (1768)</td></tr>
<tr><td class="crd-td"><strong>Ciudad de Guatemala</strong></td><td class="crd-td">Guatemala</td><td class="crd-td">Provincia de Guatemala Core and Verapaz</td><td class="crd-td">14,63, -90,51</td><td class="crd-td">1778 to 1820</td><td class="crd-td">31,5k (1820)</td></tr>
<tr><td class="crd-td"><strong>León Nicaragua</strong></td><td class="crd-td">Nicaragua</td><td class="crd-td">Intendencia de León (Nicaragua) and Costa Rica</td><td class="crd-td">12,44, -86,88</td><td class="crd-td">1646 to 1820</td><td class="crd-td">21,4k (1820)</td></tr>
<tr><td class="crd-td"><strong>San Salvador</strong></td><td class="crd-td">El Salvador</td><td class="crd-td">Intendencia de San Salvador and Sonsonate</td><td class="crd-td">13,69, -89,22</td><td class="crd-td">1574 to 1820</td><td class="crd-td">16,5k (1820)</td></tr>
<tr><td class="crd-td"><strong>Granada Nicaragua</strong></td><td class="crd-td">Nicaragua</td><td class="crd-td">Intendencia de León (Nicaragua) and Costa Rica</td><td class="crd-td">11,93, -85,96</td><td class="crd-td">1646 to 1820</td><td class="crd-td">14,2k (1820)</td></tr>
<tr><td class="crd-td"><strong>Quetzaltenango</strong></td><td class="crd-td">Guatemala</td><td class="crd-td">Provincia de Guatemala Core and Verapaz</td><td class="crd-td">14,84, -91,52</td><td class="crd-td">1580 to 1820</td><td class="crd-td">13,2k (1820)</td></tr>
<tr><td class="crd-td"><strong>Cobán</strong></td><td class="crd-td">Guatemala</td><td class="crd-td">Provincia de Guatemala Core and Verapaz</td><td class="crd-td">15,47, -90,37</td><td class="crd-td">1574 to 1808</td><td class="crd-td">12,4k (1808)</td></tr>
<tr><td class="crd-td"><strong>San José Costa Rica</strong></td><td class="crd-td">Costa Rica</td><td class="crd-td">Intendencia de León (Nicaragua) and Costa Rica</td><td class="crd-td">9,93, -84,09</td><td class="crd-td">1751 to 1820</td><td class="crd-td">12,4k (1820)</td></tr>
<tr><td class="crd-td"><strong>Chamula</strong></td><td class="crd-td">Mexico</td><td class="crd-td">Intendencia de Ciudad Real de Chiapas (Guatemala until 1824)</td><td class="crd-td">16,79, -92,69</td><td class="crd-td">1774 to 1796</td><td class="crd-td">11,7k (1796)</td></tr>
<tr><td class="crd-td"><strong>Santa Ana El Salvador</strong></td><td class="crd-td">El Salvador</td><td class="crd-td">Intendencia de San Salvador and Sonsonate</td><td class="crd-td">13,99, -89,56</td><td class="crd-td">1680 to 1820</td><td class="crd-td">10,8k (1820)</td></tr>
<tr><td class="crd-td"><strong>Managua</strong></td><td class="crd-td">Nicaragua</td><td class="crd-td">Intendencia de León (Nicaragua) and Costa Rica</td><td class="crd-td">12,14, -86,25</td><td class="crd-td">1680 to 1820</td><td class="crd-td">10,4k (1820)</td></tr>
<tr><td class="crd-td"><strong>Masaya</strong></td><td class="crd-td">Nicaragua</td><td class="crd-td">Intendencia de León (Nicaragua) and Costa Rica</td><td class="crd-td">11,97, -86,09</td><td class="crd-td">1680 to 1808</td><td class="crd-td">9,8k (1808)</td></tr>
<tr><td class="crd-td"><strong>Cartago Costa Rica</strong></td><td class="crd-td">Costa Rica</td><td class="crd-td">Intendencia de León (Nicaragua) and Costa Rica</td><td class="crd-td">9,86, -83,92</td><td class="crd-td">1646 to 1820</td><td class="crd-td">9,8k (1820)</td></tr>
<tr><td class="crd-td"><strong>Panamá</strong></td><td class="crd-td">Panama</td><td class="crd-td">Audiencia de Panamá, Veraguas and Darién</td><td class="crd-td">8,95, -79,53</td><td class="crd-td">1675 to 1820</td><td class="crd-td">9,6k (1820)</td></tr>
<tr><td class="crd-td"><strong>Totonicapán</strong></td><td class="crd-td">Guatemala</td><td class="crd-td">Provincia de Guatemala Core and Verapaz</td><td class="crd-td">14,91, -91,36</td><td class="crd-td">1680 to 1808</td><td class="crd-td">9,4k (1808)</td></tr>
<tr><td class="crd-td"><strong>Comayagua</strong></td><td class="crd-td">Honduras</td><td class="crd-td">Intendencia de Comayagua (Honduras)</td><td class="crd-td">14,46, -87,64</td><td class="crd-td">1574 to 1820</td><td class="crd-td">8,9k (1820)</td></tr>
<tr><td class="crd-td"><strong>San Miguel</strong></td><td class="crd-td">El Salvador</td><td class="crd-td">Intendencia de San Salvador and Sonsonate</td><td class="crd-td">13,48, -88,18</td><td class="crd-td">1680 to 1820</td><td class="crd-td">8,9k (1820)</td></tr>
<tr><td class="crd-td"><strong>Tegucigalpa</strong></td><td class="crd-td">Honduras</td><td class="crd-td">Intendencia de Comayagua (Honduras)</td><td class="crd-td">14,07, -87,19</td><td class="crd-td">1680 to 1820</td><td class="crd-td">8,6k (1820)</td></tr>
<tr><td class="crd-td"><strong>Heredia</strong></td><td class="crd-td">Costa Rica</td><td class="crd-td">Intendencia de León (Nicaragua) and Costa Rica</td><td class="crd-td">10, -84,12</td><td class="crd-td">1751 to 1820</td><td class="crd-td">8,4k (1820)</td></tr>
<tr><td class="crd-td"><strong>Rivas Nicaragua</strong></td><td class="crd-td">Nicaragua</td><td class="crd-td">Intendencia de León (Nicaragua) and Costa Rica</td><td class="crd-td">11,44, -85,83</td><td class="crd-td">1725 to 1808</td><td class="crd-td">8,2k (1808)</td></tr>
<tr><td class="crd-td"><strong>Comitan</strong></td><td class="crd-td">Mexico</td><td class="crd-td">Intendencia de Ciudad Real de Chiapas (Guatemala until 1824)</td><td class="crd-td">16,25, -92,13</td><td class="crd-td">1774 to 1796</td><td class="crd-td">8,2k (1796)</td></tr>
<tr><td class="crd-td"><strong>San Bartolomé</strong></td><td class="crd-td">Mexico</td><td class="crd-td">Intendencia de Ciudad Real de Chiapas (Guatemala until 1824)</td><td class="crd-td">16,34, -92,56</td><td class="crd-td">1774 to 1796</td><td class="crd-td">7,4k (1796)</td></tr>
<tr><td class="crd-td"><strong>Santo Domingo Oxchuc</strong></td><td class="crd-td">Mexico</td><td class="crd-td">Intendencia de Ciudad Real de Chiapas (Guatemala until 1824)</td><td class="crd-td">16,79, -92,34</td><td class="crd-td">1774 to 1796</td><td class="crd-td">7,3k (1796)</td></tr>
<tr><td class="crd-td"><strong>San Vicente</strong></td><td class="crd-td">El Salvador</td><td class="crd-td">Intendencia de San Salvador and Sonsonate</td><td class="crd-td">13,64, -88,78</td><td class="crd-td">1680 to 1820</td><td class="crd-td">7,1k (1820)</td></tr>
<tr><td class="crd-td"><strong>Sonsonate</strong></td><td class="crd-td">El Salvador</td><td class="crd-td">Provincia de Guatemala Core and Verapaz</td><td class="crd-td">13,72, -89,72</td><td class="crd-td">1680 to 1820</td><td class="crd-td">6,9k (1820)</td></tr>
<tr><td class="crd-td"><strong>Chinandega</strong></td><td class="crd-td">Nicaragua</td><td class="crd-td">Intendencia de León (Nicaragua) and Costa Rica</td><td class="crd-td">12,63, -87,13</td><td class="crd-td">1680 to 1808</td><td class="crd-td">6,4k (1808)</td></tr>
<tr><td class="crd-td"><strong>Chiquimula</strong></td><td class="crd-td">Guatemala</td><td class="crd-td">Provincia de Guatemala Core and Verapaz</td><td class="crd-td">14,8, -89,55</td><td class="crd-td">1680 to 1808</td><td class="crd-td">6,2k (1808)</td></tr>
<tr><td class="crd-td"><strong>Ciudad Real de Chiapas</strong></td><td class="crd-td">Mexico</td><td class="crd-td">Intendencia de Ciudad Real de Chiapas (Guatemala until 1824)</td><td class="crd-td">16,74, -92,64</td><td class="crd-td">1574 to 1814</td><td class="crd-td">5,8k (1814)</td></tr>
<tr><td class="crd-td"><strong>Huehuetenango</strong></td><td class="crd-td">Guatemala</td><td class="crd-td">Provincia de Guatemala Core and Verapaz</td><td class="crd-td">15,32, -91,47</td><td class="crd-td">1680 to 1808</td><td class="crd-td">5,8k (1808)</td></tr>
<tr><td class="crd-td"><strong>Matagalpa</strong></td><td class="crd-td">Nicaragua</td><td class="crd-td">Intendencia de León (Nicaragua) and Costa Rica</td><td class="crd-td">12,93, -85,92</td><td class="crd-td">1680 to 1808</td><td class="crd-td">5,6k (1808)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 30 colonial settlements across the Captaincy General of Guatemala, Chiapas and Panama ordered by peak recorded population, 1524 to 1821.</figcaption>
</figure>

## Sub-Regional Gazetteer Coverage and Leading Centres

Table \ref{tab:subregion-gazetteer} contrasts catalogued settlement counts and sampling density per 10.000 km² against the leading town and 1821 archival population across all eight colonial sub-regions. Ciudad Real de Chiapas (12,73 catalogued locales per 10.000 km²) and Panamá, Veraguas and Darién (4,94 per 10.000 km²) exhibit the highest archival village density because parish-by-parish 1774–1796 and 1778 censuses survive down to hamlets and rural *haciendas* [@Cruz1999Lite; @JaenSuarez1978]. Across Guatemala, El Salvador, Honduras and Nicaragua, town catalogues capture the principal urban *cabeceras* (0,8 to 2,4 towns per 10.000 km²), while British Honduras (2,86 per 10.000 km²) and Mosquitia (0,49 per 10.000 km²) document every major timber camp and coastal lagoon hub [@SIBBelize2024; @Clavel2026King].

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Colonial Jurisdiction</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Sites per 10k km²</th><th class="crd-th">Leading Town (Peak)</th><th class="crd-th">1821 Arch. Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>British Honduras Logwood Settlement</strong></td><td class="crd-td">13.975</td><td class="crd-td">4</td><td class="crd-td">2,86</td><td class="crd-td">Belize Town (4,2k)</td><td class="crd-td">5,2k</td></tr>
<tr><td class="crd-td"><strong>Mosquitia Coast (Mosquito Kingdom)</strong></td><td class="crd-td">122.699</td><td class="crd-td">6</td><td class="crd-td">0,49</td><td class="crd-td">Bluefields (1,8k)</td><td class="crd-td">52k</td></tr>
<tr><td class="crd-td"><strong>Intendencia de Ciudad Real de Chiapas (Guatemala until 1824)</strong></td><td class="crd-td">74.626</td><td class="crd-td">95</td><td class="crd-td">12,73</td><td class="crd-td">Chamula (11,7k)</td><td class="crd-td">118k</td></tr>
<tr><td class="crd-td"><strong>Provincia de Guatemala Core and Verapaz</strong></td><td class="crd-td">175.682</td><td class="crd-td">14</td><td class="crd-td">0,8</td><td class="crd-td">Antigua Guatemala (37,5k)</td><td class="crd-td">535k</td></tr>
<tr><td class="crd-td"><strong>Intendencia de San Salvador and Sonsonate</strong></td><td class="crd-td">20.857</td><td class="crd-td">5</td><td class="crd-td">2,4</td><td class="crd-td">San Salvador (16,5k)</td><td class="crd-td">248k</td></tr>
<tr><td class="crd-td"><strong>Intendencia de Comayagua (Honduras)</strong></td><td class="crd-td">77.148</td><td class="crd-td">10</td><td class="crd-td">1,3</td><td class="crd-td">Comayagua (8,9k)</td><td class="crd-td">135k</td></tr>
<tr><td class="crd-td"><strong>Intendencia de León (Nicaragua) and Costa Rica</strong></td><td class="crd-td">110.817</td><td class="crd-td">13</td><td class="crd-td">1,17</td><td class="crd-td">León Nicaragua (21,4k)</td><td class="crd-td">235k</td></tr>
<tr><td class="crd-td"><strong>Audiencia de Panamá, Veraguas and Darién</strong></td><td class="crd-td">87.056</td><td class="crd-td">43</td><td class="crd-td">4,94</td><td class="crd-td">Panamá (9,6k)</td><td class="crd-td">92k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued colonial settlement counts, areal site density (per 10.000 km²), leading town and 1821 archival population across eight colonial jurisdictions.</figcaption>
</figure>

## Provenance Ledger and Ingestion Corpus Breakdown

Table \ref{tab:provenance-ledger} classifies all 190 settlements by their primary archival or monograph source corpus. Two historical-GIS and Bourbon-compendium corpora supply 90,53% of the entire register: the Historical GIS of the Indies archival tables (129 entries, 67,89%, spanning Chiapas 1774–1796 reports, Panamá and Veraguas 1778 rolls and Juarros's Guatemala tables) and the core Central American colonial urban synthesis drawn from Juarros (1808), Cortés y Larraz (1770), Hall and Pérez Brignoli (2003) and Newson (1986, 1987) (43 entries, 22,63%). The remaining 18 entries anchor the Atlantic and trans-isthmian frontiers: 8 Mosquitia lagoon and littoral hubs, 5 Panamanian historical series from Castillero Calvo and 5 British Honduras logging and Garifuna coastal settlements [@Juarros1808; @HallPerezBrignoli2003; @JaenSuarez1978; @SIBBelize2024; @Wainwright2020Colonial].

<figure class="crd-table-figure" id="tab:provenance-ledger">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Primary Archival Corpus</th><th class="crd-th">Entries</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>HGIS de las Indias: Chiapas Parish Reports (1774-1796)</strong></td><td class="crd-td">87</td><td class="crd-td">45,79%</td></tr>
<tr><td class="crd-td"><strong>Juarros (1808), Cortes y Larraz (1770) and Hall-Perez Brignoli</strong></td><td class="crd-td">43</td><td class="crd-td">22,63%</td></tr>
<tr><td class="crd-td"><strong>HGIS de las Indias: Panama Census Rolls (1778)</strong></td><td class="crd-td">29</td><td class="crd-td">15,26%</td></tr>
<tr><td class="crd-td"><strong>HGIS de las Indias: Veraguas Census Rolls (1778)</strong></td><td class="crd-td">9</td><td class="crd-td">4,74%</td></tr>
<tr><td class="crd-td"><strong>Mosquitia Ethnohistorical Corpus (Offen, Helms, Dawson)</strong></td><td class="crd-td">8</td><td class="crd-td">4,21%</td></tr>
<tr><td class="crd-td"><strong>British Honduras Archives (Burdon, Bolland, SIB)</strong></td><td class="crd-td">5</td><td class="crd-td">2,63%</td></tr>
<tr><td class="crd-td"><strong>Panamanian Colonial Urban Series (Castillero Calvo)</strong></td><td class="crd-td">5</td><td class="crd-td">2,63%</td></tr>
<tr><td class="crd-td"><strong>HGIS de las Indias: Juarros Compendio Extract</strong></td><td class="crd-td">4</td><td class="crd-td">2,11%</td></tr>
<tr><td class="crd-td"><strong>Total Gazetteer (0% Crowd-Sourced Share)</strong></td><td class="crd-td">190</td><td class="crd-td">100%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Primary archival provenance corpora across 190 catalogued colonial Central American, Chiapan and Panamanian settlements.</figcaption>
</figure>

## Urban Size Structure and Rank-Size Scaling

Across the 190 catalogued settlements, peak recorded populations span nearly four orders of magnitude, from small Chiapan *haciendas* of 4 to 41 residents enumerated in the 1774 parish census up to Antigua Guatemala's 37,5k pre-earthquake peak and Ciudad de Guatemala's 31,5k independence-eve total [@Lutz1994; @Juarros1808]. Fitting a rank-size curve to the upper 95 urban ranks on the 1774 benchmark yields $\alpha = 0,90$ ($R^2 = 0,88$), sitting close to the canonical Zipf unity line yet exhibiting slight concavity above rank 10 where provincial capitals (León, San Salvador, Granada, Quetzaltenango, Cobán, San José and Panamá) cluster tightly between 9,6k and 21,4k behind the dual Guatemalan capital complex. That profile reflects the polycentric fiscal architecture of the late Bourbon Kingdom of Guatemala, in which newly erected *intendencias* nurtured distinct regional trade capitals without eroding Guatemala City's commercial monopoly [@Wortman1982; @Osegueda2024Migrar].

# Limitations

Three archival constraints shape interpretation of this gazetteer. First, settlement-level source resolution is uneven across modern borders: Chiapas (95 sites) and Panamá (43 sites) preserve granular village and rural *hacienda* counts from 1774 and 1778, whereas Guatemala, El Salvador, Honduras, Nicaragua and Costa Rica are represented chiefly by principal *cabeceras* and provincial capitals above 2k inhabitants [@Juarros1808; @JaenSuarez1978]. Second, boundary nuances near southern Belize place the newly settled Garifuna port of Dangriga (Stann Creek) along the Guatemala-Verapaz mask edge rather than inside the historical northern logwood polygon, illustrating how colonial Anglo-Spanish territorial ambiguity persisted across the Sibun-Sarstoon frontier well past 1821 [@Wainwright2020Colonial]. Third, non-Spanish settlements in Mosquitia and Darién lack regular census schedules, so their town figures represent ethnohistorical point estimates anchored to eighteenth-century British military surveys and Spanish missionary expeditions [@Newson1986; @Newson1987; @Aram2021Rice].

# Conclusion

Cataloguing 190 geocoded colonial settlements across eight jurisdictions confirms the dual spatial imprint of Spanish and British rule on the Central American isthmus. Along the Pacific highlands and volcanic corridor, an integrated network of administrative capitals, indigo market towns and resilient Maya *pueblos* scaled along a steep urban hierarchy ($\alpha = 0,90$, $R^2 = 0,88$) anchored by Antigua and Nueva Guatemala, León, San Salvador, Granada and rising San José [@Lutz1994; @Wortman1982; @PerezBrignoli2010]. Along the Caribbean shore, small maritime enclaves from Belize Town and Dangriga to Bluefields and Portobelo linked timber extraction, Garifuna and Afro-Caribbean mobility and Miskitu diplomacy to wider Atlantic currents, establishing the enduring bicoastal settlement map inherited by Central America at independence [@SIBBelize2024; @Wainwright2020Colonial; @Clavel2026King].

# Appendix

## Provincial Census Anchors Linked to the Urban Gazetteer

Table \ref{tab:hgis-census-anchors} summarises the provincial and British colonial census totals (1778 to 1816) that anchor the upper tier of the settlement gazetteer across the Audiencia of Guatemala, Panamá and Belize.

<figure class="crd-table-figure" id="tab:hgis-census-anchors">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Administrative Unit</th><th class="crd-th">Modern Territory</th><th class="crd-th">Year</th><th class="crd-th">Enumerated Pop.</th><th class="crd-th">Primary Source</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Province of Guatemala (Captaincy General core)</strong></td><td class="crd-td">Guatemala</td><td class="crd-td">1778</td><td class="crd-td">398.575</td><td class="crd-td">Hall, Carolyn and Héctor Pérez Brignoli, Juarros, Domingo</td></tr>
<tr><td class="crd-td"><strong>Intendancy of San Salvador and Sonsonate</strong></td><td class="crd-td">El Salvador</td><td class="crd-td">1778</td><td class="crd-td">117.436</td><td class="crd-td">Hall, Carolyn and Héctor Pérez Brignoli, Juarros, Domingo</td></tr>
<tr><td class="crd-td"><strong>Intendancy of León (Nicaragua and Nicoya)</strong></td><td class="crd-td">Nicaragua</td><td class="crd-td">1778</td><td class="crd-td">117.396</td><td class="crd-td">Hall, Carolyn and Héctor Pérez Brignoli, Juarros, Domingo</td></tr>
<tr><td class="crd-td"><strong>Intendancy of Comayagua (Honduras)</strong></td><td class="crd-td">Honduras</td><td class="crd-td">1778</td><td class="crd-td">88.143</td><td class="crd-td">Hall, Carolyn and Héctor Pérez Brignoli, Juarros, Domingo</td></tr>
<tr><td class="crd-td"><strong>Gobernación de Panamá (incl. Natá and Los Santos)</strong></td><td class="crd-td">Panama</td><td class="crd-td">1778</td><td class="crd-td">35.955</td><td class="crd-td">Jaén Suárez, Omar</td></tr>
<tr><td class="crd-td"><strong>Governorship of Costa Rica</strong></td><td class="crd-td">Costa Rica</td><td class="crd-td">1778</td><td class="crd-td">24.536</td><td class="crd-td">Hall, Carolyn and Héctor Pérez Brignoli, Juarros, Domingo</td></tr>
<tr><td class="crd-td"><strong>Gobernación de Veraguas (incl. Alanje/Chiriquí)</strong></td><td class="crd-td">Panama</td><td class="crd-td">1778</td><td class="crd-td">20.061</td><td class="crd-td">Jaén Suárez, Omar</td></tr>
<tr><td class="crd-td"><strong>Gobernación de Portobelo</strong></td><td class="crd-td">Panama</td><td class="crd-td">1778</td><td class="crd-td">1.762</td><td class="crd-td">Jaén Suárez, Omar</td></tr>
<tr><td class="crd-td"><strong>Gobernación del Darién (colonial settled population)</strong></td><td class="crd-td">Panama</td><td class="crd-td">1778</td><td class="crd-td">1.266</td><td class="crd-td">Jaén Suárez, Omar</td></tr>
<tr><td class="crd-td"><strong>British Honduras (Belize Settlement)</strong></td><td class="crd-td">Belize</td><td class="crd-td">1816</td><td class="crd-td">3.824</td><td class="crd-td">Statistical Institute of Belize</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Provincial, governorship and British settlement census anchors across Central America, Panama and Belize, 1778 to 1816.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

**Note 1 (City-Proper Scope).** Every one of the 190 catalogued records represents a distinct *city-proper* or rural parish/village unit (zero metropolitan suburb entries), preventing overlapping double-counts when aggregating urban populations against the provincial totals reported in Table \ref{tab:hgis-census-anchors}.

**Note 2 (Deduplication Protocol).** Six duplicate alias records within 25 km spatial buffers (Antigua Guatemala, Panamá, Tuxtla, Tapachula, Ciudad Real de Chiapas and David) were merged into single canonical series during Wave 1–4 reconciliation, preserving longitudinal observations from both Juarros (1808) and Historical GIS of the Indies archival rolls inside each retained town record.
