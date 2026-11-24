---
title: "Central American Republics after Independence"
subtitle: "Settlement Gazetteer and Urban Hierarchy (1821 to 2025)"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/central_american_republics_urban_hierarchy.png"
hero_caption: "Largest catalogued Central American settlements and rank-size distribution across 469 urban places from 1821 to 2025."
hero_label: "fig:hero-central-america-hierarchy"
bibliography: central_american_republics_literature_review.bib
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



![Largest catalogued Central American settlements and rank-size distribution across 469 urban places from 1821 to 2025.](figures/central_american_republics_urban_hierarchy.png)



# Abstract

This companion gazetteer catalogues 469 geocoded Central American urban settlements across eight political sub-regions and seven modern states (Guatemala, Belize, El Salvador, Honduras, Nicaragua, Costa Rica and Panama, including the historic United States Panama Canal Zone) between 1821 and 2025. Compiled entirely from primary national statistical censuses and United States Decennial Censuses of the Panama Canal Zone with a 0% crowd-sourced fallback share, the register pairs 452 city-proper urban places with 17 independently enumerated metropolitan suburban municipalities around Ciudad de Guatemala, San Salvador and Ciudad de Panamá [@INEGuatemala2019; @DIGESTYC2024; @INEHonduras2015; @INIDENicaragua2006; @INECCostaRica2023; @INECPanama2023; @SIBBelize2024; @USCensusCanalZone1973]. Across 471 candidate settlement entries audited in the chapter source ledger, spatial deduplication consolidated 2 duplicate municipal aliases within a 25 km reconciliation buffer, reducing marginal Wave-4 gain to 0,86%. Spanning four orders of magnitude from post-independence provincial capitals and Canal Zone lock towns to million-inhabitant modern metropolises—led by San José (1,45M in 2020), Ciudad de Panamá (1,13M in 2023), Tegucigalpa (1,13M in 2023), Managua (1,06M in 2023), Ciudad de Guatemala (942,3k in 2002) and San Pedro Sula (701,2k in 2023)—the combined isthmian urban system obeys a remarkably balanced near-Zipfian rank-size power law ($\alpha = 0,92$, $R^2 = 0,98$ across the top 180 settlements) [@Maria2017Central; @HallPerezBrignoli2003].

# Background

Central America's modern urban network evolved out of three distinct historical settlement layers [@HallPerezBrignoli2003]. The oldest stratum comprises colonial Spanish administrative and agricultural towns sited along the volcanic Pacific piedmont and temperate highland valleys—Ciudad de Guatemala, Antigua Guatemala, Quetzaltenango, San Salvador, Santa Ana, Comayagua, Tegucigalpa, León, Granada, Cartago, San José, Heredia, Alajuela and Ciudad de Panamá—most of which numbered fewer than 35k residents at independence in 1821 [@PerezBrignoli2010; @JaenSuarez1978; @Davidson2002].

A second stratum emerged between 1850 and 1930 along the Caribbean littoral and the interoceanic Panamanian corridor. Banana railways and West Indian labour migration built Atlantic port cities including Limón, Bocas del Toro, Colón, Tela, La Ceiba, Puerto Cortés, Puerto Barrios and Bluefields, while construction and operation of the Panama Canal created a specialised network of US-administered townships—Gatún, Empire, Culebra, Balboa, Gamboa, Cristóbal, Paraíso, Ancón, Pedro Miguel, Coco Solo and Margarita—documented across seven US decennial censuses from 1912 to 1970 [@USCensusCanalZone1973; @Grugni2015Exploring; @Zabaleta2013Mercados]. Meanwhile, in British Honduras, Hurricane Hattie's devastation of coastal Belize City in 1961 prompted the planned foundation of inland capital Belmopan in 1970 [@SIBBelize2024].

Finally, post-1950 rural-to-urban migration, industrial *maquila* expansion in the Honduran Sula Valley (San Pedro Sula and Choloma) and rapid metropolitan spill-over created a third urban stratum of massive suburban ring municipalities—Mixco, Villa Nueva, Soyapango, Mejicanos, Apopa, Santa Tecla, La Chorrera, Arraiján and San Miguelito—that now rival or surpass many historical departmental capitals [@Maria2017Central; @Acevedo2024Emigration].

# Methodology

Settlement ingestion proceeded across four documented saturation waves tracked in the chapter source ledger. Wave 1 harvested 428 primary geocoded settlements directly from official national statistical census series (INE Guatemala, DIGESTYC/BCR-ONEC El Salvador, INE Honduras, INIDE Nicaragua, INEC Costa Rica, INEC Panamá and SIB Belize) together with the 1912 to 1970 US Panama Canal Zone censuses. Wave 2 incorporated 30 additional urban centres anchored in peer-reviewed historical demographic monographs and regional compilations [@HallPerezBrignoli2003; @Davidson2002; @JaenSuarez1978; @PerezBrignoli2010]. Wave 3 backfilled 7 longitudinal census records across nineteenth- and mid-twentieth-century gaps, and Wave 4 closed remaining sub-regional mask gaps with 4 verified municipal records (marginal gain 0,86%), bringing the final register to 469 settlements with zero reliance on crowd-sourced gazetteers.

All 471 candidate entries were harmonised to WGS84 coordinates, assigned to one of the eight sub-regional masks and audited against a 25 km alias-reconciliation buffer that merged 2 redundant Guatemalan duplicate records (a variant of San Pedro Sacatepéquez and a duplicate entry for La Democracia). To maintain transparent metropolitan accounting, 17 ring municipalities inside the functional urban areas of Ciudad de Guatemala, San Salvador and Ciudad de Panamá were tagged explicitly as independent suburban entries linked to their metropolitan core rather than folded ambiguously into city-proper counts [@Maria2017Central].

# Testing and Validation

Ledger reconciliation confirms exact accounting across all 471 evaluated candidates: 469 included urban settlements plus 2 excluded duplicate aliases, with 100% coordinate completeness, explicit census-year series and primary statistical provenance across all eight sub-regions (Guatemala 133 mask nodes, El Salvador 65, Nicaragua 65, Costa Rica 60, Honduras 60, Panama Republic 37, Belize 28 and Panama Canal Zone footprint 21). Figure \ref{fig:sett-regional-map} plots the full 469-settlement footprint across the eight political sub-regions, showing the dense Pacific volcanic urban corridor from western Guatemala through El Salvador and western Nicaragua to Costa Rica's Central Valley, balanced against the Sula Valley industrial cluster in northern Honduras and the trans-isthmian Panamanian corridor.

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_jaguar/1.0-central-american-republics-settlements/central_american_republics_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 469 catalogued urban settlements across eight Central American political sub-regions from 1821 to 2025.</figcaption>
</figure>

# Results

## Leading Thirty Central American Settlements

Table \ref{tab:top30-settlements} lists the 30 largest catalogued Central American urban places ranked by peak census population. Four national capitals exceed one million inhabitants—San José (1,45M), Ciudad de Panamá (1,13M), Tegucigalpa (1,13M) and Managua (1,06M)—followed immediately by Ciudad de Guatemala proper (942,3k in 2002; 923,4k in 2018) and Honduras's industrial metropolis of San Pedro Sula (701,2k). Independent ring suburbs occupy five of the top thirty slots—Mixco (463k), Villa Nueva (426,3k), Soyapango (261,1k), La Chorrera (206k) and Mejicanos (140,8k)—alongside San Miguelito (156,6k in 1980, reported as a distinct urban district on Panama City's eastern edge) [@Maria2017Central; @INEGuatemala2019; @DIGESTYC2024; @INECPanama2023].

<figure class="crd-table-figure" id="tab:top30-settlements">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Scope</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Census Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>San José</strong></td><td class="crd-td">Costa Rica</td><td class="crd-td">City proper</td><td class="crd-td">9,93, -84,09</td><td class="crd-td">1844 to 2020</td><td class="crd-td">1,45M (2020)</td></tr>
<tr><td class="crd-td"><strong>Ciudad de Panamá</strong></td><td class="crd-td">Panama</td><td class="crd-td">City proper</td><td class="crd-td">8,98, -79,52</td><td class="crd-td">1851 to 2023</td><td class="crd-td">1,13M (2023)</td></tr>
<tr><td class="crd-td"><strong>Tegucigalpa</strong></td><td class="crd-td">Honduras</td><td class="crd-td">City proper</td><td class="crd-td">14,07, -87,19</td><td class="crd-td">1850 to 2023</td><td class="crd-td">1,13M (2023)</td></tr>
<tr><td class="crd-td"><strong>Managua</strong></td><td class="crd-td">Nicaragua</td><td class="crd-td">City proper</td><td class="crd-td">12,14, -86,25</td><td class="crd-td">1850 to 2023</td><td class="crd-td">1,06M (2023)</td></tr>
<tr><td class="crd-td"><strong>Ciudad de Guatemala</strong></td><td class="crd-td">Guatemala</td><td class="crd-td">City proper</td><td class="crd-td">14,63, -90,51</td><td class="crd-td">1825 to 2018</td><td class="crd-td">942,3k (2002)</td></tr>
<tr><td class="crd-td"><strong>San Pedro Sula</strong></td><td class="crd-td">Honduras</td><td class="crd-td">City proper</td><td class="crd-td">15,5, -88,03</td><td class="crd-td">1887 to 2023</td><td class="crd-td">701,2k (2023)</td></tr>
<tr><td class="crd-td"><strong>Mixco</strong></td><td class="crd-td">Guatemala</td><td class="crd-td">Suburb</td><td class="crd-td">14,63, -90,61</td><td class="crd-td">1994 to 2018</td><td class="crd-td">463k (2018)</td></tr>
<tr><td class="crd-td"><strong>Villa Nueva</strong></td><td class="crd-td">Guatemala</td><td class="crd-td">Suburb</td><td class="crd-td">14,53, -90,59</td><td class="crd-td">1994 to 2018</td><td class="crd-td">426,3k (2018)</td></tr>
<tr><td class="crd-td"><strong>San Salvador</strong></td><td class="crd-td">El Salvador</td><td class="crd-td">City proper</td><td class="crd-td">13,69, -89,22</td><td class="crd-td">1830 to 2007</td><td class="crd-td">415,3k (1992)</td></tr>
<tr><td class="crd-td"><strong>Heredia</strong></td><td class="crd-td">Costa Rica</td><td class="crd-td">City proper</td><td class="crd-td">10, -84,12</td><td class="crd-td">1864 to 2020</td><td class="crd-td">367,9k (2020)</td></tr>
<tr><td class="crd-td"><strong>Soyapango</strong></td><td class="crd-td">El Salvador</td><td class="crd-td">Suburb</td><td class="crd-td">13,71, -89,14</td><td class="crd-td">1992 to 2007</td><td class="crd-td">261,1k (1992)</td></tr>
<tr><td class="crd-td"><strong>Cartago</strong></td><td class="crd-td">Costa Rica</td><td class="crd-td">City proper</td><td class="crd-td">9,86, -83,92</td><td class="crd-td">1864 to 2020</td><td class="crd-td">232,3k (2020)</td></tr>
<tr><td class="crd-td"><strong>Choloma</strong></td><td class="crd-td">Honduras</td><td class="crd-td">City proper</td><td class="crd-td">15,61, -87,95</td><td class="crd-td">1988 to 2023</td><td class="crd-td">220,3k (2023)</td></tr>
<tr><td class="crd-td"><strong>Cobán</strong></td><td class="crd-td">Guatemala</td><td class="crd-td">City proper</td><td class="crd-td">15,47, -90,37</td><td class="crd-td">1880 to 2018</td><td class="crd-td">212k (2018)</td></tr>
<tr><td class="crd-td"><strong>La Ceiba</strong></td><td class="crd-td">Honduras</td><td class="crd-td">City proper</td><td class="crd-td">15,76, -86,78</td><td class="crd-td">1910 to 2023</td><td class="crd-td">209k (2023)</td></tr>
<tr><td class="crd-td"><strong>La Chorrera</strong></td><td class="crd-td">Panama</td><td class="crd-td">Suburb</td><td class="crd-td">8,88, -79,78</td><td class="crd-td">1911 to 2023</td><td class="crd-td">206k (2023)</td></tr>
<tr><td class="crd-td"><strong>Santa Ana</strong></td><td class="crd-td">El Salvador</td><td class="crd-td">City proper</td><td class="crd-td">13,99, -89,56</td><td class="crd-td">1878 to 2007</td><td class="crd-td">198,3k (2007)</td></tr>
<tr><td class="crd-td"><strong>Alajuela</strong></td><td class="crd-td">Costa Rica</td><td class="crd-td">City proper</td><td class="crd-td">10,02, -84,21</td><td class="crd-td">1864 to 2020</td><td class="crd-td">196,9k (2020)</td></tr>
<tr><td class="crd-td"><strong>Quetzaltenango</strong></td><td class="crd-td">Guatemala</td><td class="crd-td">City proper</td><td class="crd-td">14,83, -91,52</td><td class="crd-td">1850 to 2018</td><td class="crd-td">180,7k (2018)</td></tr>
<tr><td class="crd-td"><strong>León</strong></td><td class="crd-td">Nicaragua</td><td class="crd-td">City proper</td><td class="crd-td">12,44, -86,88</td><td class="crd-td">1850 to 2023</td><td class="crd-td">177,3k (2023)</td></tr>
<tr><td class="crd-td"><strong>Jalapa</strong></td><td class="crd-td">Guatemala</td><td class="crd-td">City proper</td><td class="crd-td">14,64, -89,99</td><td class="crd-td">1994 to 2018</td><td class="crd-td">159,8k (2018)</td></tr>
<tr><td class="crd-td"><strong>Colón</strong></td><td class="crd-td">Panama</td><td class="crd-td">City proper</td><td class="crd-td">9,35, -79,9</td><td class="crd-td">1855 to 2023</td><td class="crd-td">159,2k (2023)</td></tr>
<tr><td class="crd-td"><strong>San Miguelito</strong></td><td class="crd-td">Panama</td><td class="crd-td">City proper</td><td class="crd-td">9,03, -79,5</td><td class="crd-td">1960 to 1980</td><td class="crd-td">156,6k (1980)</td></tr>
<tr><td class="crd-td"><strong>Escuintla</strong></td><td class="crd-td">Guatemala</td><td class="crd-td">City proper</td><td class="crd-td">14,3, -90,78</td><td class="crd-td">1893 to 2018</td><td class="crd-td">156,3k (2018)</td></tr>
<tr><td class="crd-td"><strong>San Juan Sacatepéquez</strong></td><td class="crd-td">Guatemala</td><td class="crd-td">City proper</td><td class="crd-td">14,72, -90,64</td><td class="crd-td">1994 to 2018</td><td class="crd-td">156k (2018)</td></tr>
<tr><td class="crd-td"><strong>San Miguel</strong></td><td class="crd-td">El Salvador</td><td class="crd-td">City proper</td><td class="crd-td">13,48, -88,18</td><td class="crd-td">1878 to 2007</td><td class="crd-td">156k (2007)</td></tr>
<tr><td class="crd-td"><strong>Tipitapa</strong></td><td class="crd-td">Nicaragua</td><td class="crd-td">City proper</td><td class="crd-td">12,2, -86,1</td><td class="crd-td">1971 to 2023</td><td class="crd-td">150,6k (2023)</td></tr>
<tr><td class="crd-td"><strong>Jutiapa</strong></td><td class="crd-td">Guatemala</td><td class="crd-td">City proper</td><td class="crd-td">14,28, -89,89</td><td class="crd-td">1994 to 2018</td><td class="crd-td">145,9k (2018)</td></tr>
<tr><td class="crd-td"><strong>Mejicanos</strong></td><td class="crd-td">El Salvador</td><td class="crd-td">Suburb</td><td class="crd-td">13,72, -89,19</td><td class="crd-td">1992 to 2007</td><td class="crd-td">140,8k (2007)</td></tr>
<tr><td class="crd-td"><strong>Masaya</strong></td><td class="crd-td">Nicaragua</td><td class="crd-td">City proper</td><td class="crd-td">11,97, -86,09</td><td class="crd-td">1850 to 2023</td><td class="crd-td">140,7k (2023)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 30 Central American urban settlements ranked by peak recorded census population, 1821 to 2025.</figcaption>
</figure>

## Independent Metropolitan Suburbs and Canal Zone Townships

Table \ref{tab:suburb-reconciliation} reconciles all 17 independently catalogued suburban municipalities across Guatemala, El Salvador and Panama, pairing each ring municipality with its parent metropolitan capital and full recorded growth span. Collectively, Guatemala City's six ring suburbs account for 1,29M residents in 2018—exceeding the central municipality itself (923,4k)—while San Salvador's nine ring municipalities totalled 913k in 2007 against 316,1k in San Salvador proper [@INEGuatemala2019; @DIGESTYC2024; @Maria2017Central].

<figure class="crd-table-figure" id="tab:suburb-reconciliation">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Suburban Municipality</th><th class="crd-th">Country</th><th class="crd-th">Metropolitan Parent</th><th class="crd-th">Earliest Count</th><th class="crd-th">Peak Count</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mixco</strong></td><td class="crd-td">Guatemala</td><td class="crd-td">Ciudad de Guatemala</td><td class="crd-td">209,8k (1994)</td><td class="crd-td">463k (2018)</td></tr>
<tr><td class="crd-td"><strong>Villa Nueva</strong></td><td class="crd-td">Guatemala</td><td class="crd-td">Ciudad de Guatemala</td><td class="crd-td">101,3k (1994)</td><td class="crd-td">426,3k (2018)</td></tr>
<tr><td class="crd-td"><strong>Soyapango</strong></td><td class="crd-td">El Salvador</td><td class="crd-td">San Salvador</td><td class="crd-td">261,1k (1992)</td><td class="crd-td">261,1k (1992)</td></tr>
<tr><td class="crd-td"><strong>La Chorrera</strong></td><td class="crd-td">Panama</td><td class="crd-td">Ciudad de Panamá</td><td class="crd-td">2,4k (1911)</td><td class="crd-td">206k (2023)</td></tr>
<tr><td class="crd-td"><strong>Mejicanos</strong></td><td class="crd-td">El Salvador</td><td class="crd-td">San Salvador</td><td class="crd-td">132k (1992)</td><td class="crd-td">140,8k (2007)</td></tr>
<tr><td class="crd-td"><strong>Villa Canales</strong></td><td class="crd-td">Guatemala</td><td class="crd-td">Ciudad de Guatemala</td><td class="crd-td">5,5k (1994)</td><td class="crd-td">124,7k (2018)</td></tr>
<tr><td class="crd-td"><strong>Apopa</strong></td><td class="crd-td">El Salvador</td><td class="crd-td">San Salvador</td><td class="crd-td">88,8k (1992)</td><td class="crd-td">123,1k (2007)</td></tr>
<tr><td class="crd-td"><strong>Santa Tecla</strong></td><td class="crd-td">El Salvador</td><td class="crd-td">San Salvador</td><td class="crd-td">11,2k (1878)</td><td class="crd-td">108,8k (2007)</td></tr>
<tr><td class="crd-td"><strong>Chinautla</strong></td><td class="crd-td">Guatemala</td><td class="crd-td">Ciudad de Guatemala</td><td class="crd-td">37,1k (1994)</td><td class="crd-td">105k (2018)</td></tr>
<tr><td class="crd-td"><strong>Amatitlán</strong></td><td class="crd-td">Guatemala</td><td class="crd-td">Ciudad de Guatemala</td><td class="crd-td">37k (1994)</td><td class="crd-td">98,2k (2018)</td></tr>
<tr><td class="crd-td"><strong>Delgado</strong></td><td class="crd-td">El Salvador</td><td class="crd-td">San Salvador</td><td class="crd-td">56,7k (1992)</td><td class="crd-td">95,6k (2007)</td></tr>
<tr><td class="crd-td"><strong>Ilopango</strong></td><td class="crd-td">El Salvador</td><td class="crd-td">San Salvador</td><td class="crd-td">79,1k (1992)</td><td class="crd-td">88,9k (2007)</td></tr>
<tr><td class="crd-td"><strong>Arraiján</strong></td><td class="crd-td">Panama</td><td class="crd-td">Ciudad de Panamá</td><td class="crd-td">52,5k (2000)</td><td class="crd-td">84,5k (2023)</td></tr>
<tr><td class="crd-td"><strong>Santa Catarina Pinula</strong></td><td class="crd-td">Guatemala</td><td class="crd-td">Ciudad de Guatemala</td><td class="crd-td">8,2k (1994)</td><td class="crd-td">71k (2018)</td></tr>
<tr><td class="crd-td"><strong>San Marcos</strong></td><td class="crd-td">El Salvador</td><td class="crd-td">San Salvador</td><td class="crd-td">43,3k (1992)</td><td class="crd-td">60k (2007)</td></tr>
<tr><td class="crd-td"><strong>Cuscatancingo</strong></td><td class="crd-td">El Salvador</td><td class="crd-td">San Salvador</td><td class="crd-td">35,1k (1992)</td><td class="crd-td">35,1k (1992)</td></tr>
<tr><td class="crd-td"><strong>Antiguo Cuscatlán</strong></td><td class="crd-td">El Salvador</td><td class="crd-td">San Salvador</td><td class="crd-td">26,7k (1992)</td><td class="crd-td">33k (2007)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> All 17 independently enumerated suburban municipalities linked to metropolitan parent capitals in Guatemala, El Salvador and Panama.</figcaption>
</figure>

## Sub-Regional Gazetteer Distribution and Provenance Ledger

Table \ref{tab:subregion-gazetteer} summarises settlement coverage, urban site density per 10.000 km², leading catalogued settlement and 2025 population across all eight political masks. El Salvador records the highest urban node density among sovereign republics at 26,96 catalogued towns per 10.000 km² (mirroring its mainland-high population density of 239,9 inhabitants per km²), surpassed only by the compact 2.967 km² Panama Canal Zone footprint (70,78 nodes per 10.000 km², encompassing both the 11 historic US townships and the reverted trans-isthmian corridor cities of Ciudad de Panamá, Colón and Arraiján) [@DIGESTYC2024; @USCensusCanalZone1973; @INECPanama2023]. Table \ref{tab:provenance-ledger} reports the primary statistical corpora contributing to the 469-entry register, confirming zero crowd-sourced entries across all seven countries.

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Sites per 10k km²</th><th class="crd-th">Leading City (Peak)</th><th class="crd-th">2025 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Guatemala</strong></td><td class="crd-td">132.086</td><td class="crd-td">133</td><td class="crd-td">10,07</td><td class="crd-td">Ciudad de Guatemala (942,3k)</td><td class="crd-td">16,25M</td></tr>
<tr><td class="crd-td"><strong>Belize (British Honduras)</strong></td><td class="crd-td">30.074</td><td class="crd-td">28</td><td class="crd-td">9,31</td><td class="crd-td">Belize City (39k)</td><td class="crd-td">502k</td></tr>
<tr><td class="crd-td"><strong>El Salvador</strong></td><td class="crd-td">24.110</td><td class="crd-td">65</td><td class="crd-td">26,96</td><td class="crd-td">San Salvador (415,3k)</td><td class="crd-td">5,78M</td></tr>
<tr><td class="crd-td"><strong>Honduras</strong></td><td class="crd-td">117.693</td><td class="crd-td">60</td><td class="crd-td">5,1</td><td class="crd-td">Tegucigalpa (1,13M)</td><td class="crd-td">8,27M</td></tr>
<tr><td class="crd-td"><strong>Nicaragua</strong></td><td class="crd-td">134.545</td><td class="crd-td">65</td><td class="crd-td">4,83</td><td class="crd-td">Managua (1,06M)</td><td class="crd-td">5,43M</td></tr>
<tr><td class="crd-td"><strong>Costa Rica</strong></td><td class="crd-td">58.031</td><td class="crd-td">60</td><td class="crd-td">10,34</td><td class="crd-td">San José (1,45M)</td><td class="crd-td">5,17M</td></tr>
<tr><td class="crd-td"><strong>Panama Canal Zone (1903-1979 OHM Footprint)</strong></td><td class="crd-td">2.967</td><td class="crd-td">21</td><td class="crd-td">70,78</td><td class="crd-td">Ciudad de Panamá (1,13M)</td><td class="crd-td">567,2k</td></tr>
<tr><td class="crd-td"><strong>Panama Republic (excl. Canal Zone)</strong></td><td class="crd-td">87.820</td><td class="crd-td">37</td><td class="crd-td">4,21</td><td class="crd-td">La Chorrera (206k)</td><td class="crd-td">3,3M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catalogued settlement counts, areal site density (per 10.000 km²), leading urban centre and 2025 population across eight Central American sub-regions.</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:provenance-ledger">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Primary Statistical Corpus</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>INE Guatemala Censuses</strong></td><td class="crd-td">132</td><td class="crd-td">28,14%</td></tr>
<tr><td class="crd-td"><strong>DIGESTYC / BCR-ONEC El Salvador Censuses</strong></td><td class="crd-td">65</td><td class="crd-td">13,86%</td></tr>
<tr><td class="crd-td"><strong>INIDE Nicaragua Censuses</strong></td><td class="crd-td">65</td><td class="crd-td">13,86%</td></tr>
<tr><td class="crd-td"><strong>INE Honduras Censuses</strong></td><td class="crd-td">59</td><td class="crd-td">12,58%</td></tr>
<tr><td class="crd-td"><strong>INEC Costa Rica Censuses</strong></td><td class="crd-td">51</td><td class="crd-td">10,87%</td></tr>
<tr><td class="crd-td"><strong>INEC Panama Censuses</strong></td><td class="crd-td">45</td><td class="crd-td">9,59%</td></tr>
<tr><td class="crd-td"><strong>Statistical Institute of Belize Censuses (Cities and Towns)</strong></td><td class="crd-td">28</td><td class="crd-td">5,97%</td></tr>
<tr><td class="crd-td"><strong>Harmonised Central American National Censuses (1861-1984)</strong></td><td class="crd-td">13</td><td class="crd-td">2,77%</td></tr>
<tr><td class="crd-td"><strong>U.S. Census Bureau: Panama Canal Zone Censuses (1912-1970)</strong></td><td class="crd-td">11</td><td class="crd-td">2,35%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Primary census provenance breakdown across all 469 catalogued Central American settlements (0% crowd-sourced share).</figcaption>
</figure>

# Limitations

Three statistical conventions constrain direct settlement comparisons inside this gazetteer. First, national census dates diverge across countries: Panama (2023), Belize (2022), Costa Rica (2020 to 2022) and Guatemala (2018) supply recent municipal counts, whereas Honduras's last full census dates from 2013 (supplemented by 2023 official projections), Nicaragua's from 2005 (with 2015 and 2023 official municipal estimates) and El Salvador's city-level municipal time series still reflects pre-2024 municipal reorganisations prior to the 2024 departmental consolidation [@INEGuatemala2019; @DIGESTYC2024; @INEHonduras2015; @INIDENicaragua2006; @INECCostaRica2023; @INECPanama2023; @SIBBelize2024]. Second, Costa Rica's INEC reports metropolitan urban agglomeration figures for San José, Heredia, Cartago and Alajuela from 2000 onward, whereas Guatemala, El Salvador, Honduras and Panama tabulate strict municipal units, separating ring suburbs such as Mixco, Villa Nueva, Soyapango and La Chorrera from their parent capitals [@Maria2017Central]. Third, Belize City's recorded series stops at 39,1k in 1970 inside the historical census extract while post-1970 Belizean towns (Belmopan, San Ignacio, San Pedro, Orange Walk, Corozal and Dangriga) continue through 2022 and 2025 projections, reflecting the split between colonial-era British Honduras tables and modern SIB town tables [@SIBBelize2024].

# Conclusion

Across 469 census-backed urban places spanning 1821 to 2025, Central America's settlement register captures the full arc from small post-independence agrarian capitals and Caribbean banana ports to polycentric national capitals and dense metropolitan suburban rings. Maintaining strict separation between city-proper municipalities, 17 independent ring suburbs and 11 historic United States Panama Canal Zone townships ensures transparent urban mass accounting and supports a remarkably tight multi-state rank-size scaling ($\alpha = 0,92$, $R^2 = 0,98$) across the entire isthmus [@Maria2017Central; @USCensusCanalZone1973].

# Appendix

## Belizean Urban Transition (1832 to 2025)

Table \ref{tab:belize-towns} details the leading ten catalogued towns in Belize (British Honduras), documenting the post-1961 shift from hurricane-vulnerable coastal Belize City (39,1k in 1970) toward inland capital Belmopan (rising from 274 in 1970 to 20,8k in 2022 and 22,6k in 2025) and the Cayo, northern sugar-belt and Ambergris Caye tourism hubs [@SIBBelize2024].

<figure class="crd-table-figure" id="tab:belize-towns">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Town or City</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Census Span</th><th class="crd-th">Earliest Count</th><th class="crd-th">Peak Count</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Belize City</strong></td><td class="crd-td">17,5, -88,19</td><td class="crd-td">1832 to 1970</td><td class="crd-td">4,5k (1832)</td><td class="crd-td">39k (1970)</td></tr>
<tr><td class="crd-td"><strong>Belmopan</strong></td><td class="crd-td">17,25, -88,76</td><td class="crd-td">1970 to 2025</td><td class="crd-td">274 (1970)</td><td class="crd-td">22,6k (2025)</td></tr>
<tr><td class="crd-td"><strong>San Ignacio</strong></td><td class="crd-td">17,16, -89,07</td><td class="crd-td">1980 to 2025</td><td class="crd-td">5,6k (1980)</td><td class="crd-td">22k (2025)</td></tr>
<tr><td class="crd-td"><strong>San Pedro</strong></td><td class="crd-td">17,92, -87,97</td><td class="crd-td">1980 to 2025</td><td class="crd-td">1,1k (1980)</td><td class="crd-td">16,4k (2025)</td></tr>
<tr><td class="crd-td"><strong>Orange Walk</strong></td><td class="crd-td">18,08, -88,56</td><td class="crd-td">1980 to 2025</td><td class="crd-td">8,4k (1980)</td><td class="crd-td">14,8k (2025)</td></tr>
<tr><td class="crd-td"><strong>Corozal</strong></td><td class="crd-td">18,39, -88,39</td><td class="crd-td">1980 to 2025</td><td class="crd-td">6,9k (1980)</td><td class="crd-td">10,3k (2010)</td></tr>
<tr><td class="crd-td"><strong>Dangriga</strong></td><td class="crd-td">16,97, -88,23</td><td class="crd-td">1980 to 2025</td><td class="crd-td">6,7k (1980)</td><td class="crd-td">9,7k (2025)</td></tr>
<tr><td class="crd-td"><strong>Ladyville</strong></td><td class="crd-td">17,55, -88,29</td><td class="crd-td">2000 to 2022</td><td class="crd-td">3,5k (2000)</td><td class="crd-td">7,7k (2022)</td></tr>
<tr><td class="crd-td"><strong>Bella Vista</strong></td><td class="crd-td">16,51, -88,53</td><td class="crd-td">2000 to 2022</td><td class="crd-td">710 (2000)</td><td class="crd-td">6,3k (2022)</td></tr>
<tr><td class="crd-td"><strong>Trial Farm</strong></td><td class="crd-td">18,1, -88,57</td><td class="crd-td">2000 to 2022</td><td class="crd-td">3,2k (2000)</td><td class="crd-td">5,8k (2022)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading ten catalogued urban settlements in Belize (British Honduras), 1832 to 2025 (Statistical Institute of Belize).</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

1. Spatial assignment in Table \ref{tab:subregion-gazetteer} follows the 5-arcminute sub-regional mask polygons, placing terminal cities Ciudad de Panamá, Colón and Arraiján inside the 21-node Panama Canal Zone footprint alongside the 11 historic US-administered Canal Zone townships.
2. All coordinates follow WGS84 decimal degrees rounded to two decimal places with European decimal commas in printed tables.
