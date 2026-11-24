---
title: "Lesser Antilles, Bahamas, Trinidad and Bermuda"
subtitle: "Settlement Gazetteer and Urban Hierarchy, 1838-2025"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/lesser_antilles_bahamas_bermuda_urban_hierarchy.png"
hero_caption: "Leading recorded island settlements and rank-size distribution across 195 catalogued ports, towns and communes from 1838 to 2025."
hero_label: "fig:hero-lesser-antilles-hierarchy"
bibliography: lesser_antilles_bahamas_bermuda_literature_review.bib
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



![Leading recorded island settlements and rank-size distribution across 195 catalogued ports, towns and communes from 1838 to 2025.](figures/lesser_antilles_bahamas_bermuda_urban_hierarchy.png)



# Abstract

This companion gazetteer documents 195 catalogued ports, capitals, refinery centres, suburban boroughs and rural communes spanning ten insular sub-regions and 24 jurisdictions across the Lesser Antilles, the Bahamas, Trinidad and Tobago and Bermuda from 1838 to 2025. Every record derives directly from official national statistical censuses, colonial archival registers and peer-reviewed historical demography, achieving 0% crowd-sourced fallback across four ingestion waves (177 Wave-1 official census entries, 13 Wave-2 demographic literature additions, 3 Wave-3 longitudinal backfills and 2 Wave-4 sub-regional gap closures, with 2 duplicate spelling aliases consolidated out of 197 evaluated entries) [@Kuczynski1953; @UNSDHistorical2000; @INSEEDOM2024; @CSOTrinidad2012]. Comprising 187 municipal or town units and 8 tagged suburban boroughs, the settlement system exhibits a near-Zipfian rank-size hierarchy ($\alpha = 0,95$, $R^2 = 0,95$ across the upper 97 towns), extending from primate tourism, finance and refinery hubs led by Nassau (296.732 in 2022), Willemstad (137.800 in 2023), Fort-de-France (100.080 in 1990), Port of Spain (93.954 in 1960), Chaguanas (83.516 in 2011) and Oranjestad (81.915 in 2020) down to Bermuda's historic municipalities of Hamilton and St. George's and Montserrat's post-eruption northern villages of Brades, Salem and Cudjoe Head [@NSIBahamas2023; @CBSCuracao2024; @BSOBermuda2018; @CBSAruba2022].

# Background

Urban geography across the eastern Caribbean and western North Atlantic evolved along a maritime network of colonial ports, sugar-shipping bays, oil-refinery enclaves and post-war suburban corridors [@Simonsen2025Introduction]. Following emancipation between 1838 and 1863, port towns functioned first as administrative and customs hubs linking island plantations to London, Paris, The Hague, Copenhagen and Stockholm [@Kuczynski1953; @Palsson2021Diversity; @Begh2022Seven]. During the twentieth century, industrial and service shifts reordered that nineteenth-century port hierarchy dramatically. Hydrocarbon extraction and refining elevated San Fernando, Point Fortin, Willemstad and Sint Nicolaas [@CSOTrinidad2012; @CBSCuracao2024; @CBSAruba2022]; air tourism and offshore finance propelled Nassau, Freeport, George Town, Oranjestad and Kralendijk [@NSIBahamas2023; @Jurgens2024There; @CBSNetherlands2025]; suburbanisation shifted demographic weight from historic municipal cores into surrounding boroughs such as Chaguanas, Les Abymes, Le Lamentin, Baie-Mahault and Le Gosier [@INSEEDOM2024]; and volcanic catastrophes devastated Saint-Pierre in 1902 and Plymouth between 1995 and 1997 [@INSEEDOM2024; @Simonsen2025Introduction].

# Methodology

The settlement register was compiled through four sequential waves logged in the chapter source ledger, ingesting official census town tables from national statistical agencies across the British, French, Dutch and United States Caribbean alongside historical colonial census benchmarks from 1843 to 1991 [@Kuczynski1953; @BSSBarbados2023; @BSOBermuda2018; @USCensusUSVI2021; @CSOStLucia2023; @CSOGrenada2023]. All 197 candidate records underwent WGS84 coordinate harmonisation, polygon assignment to one of the ten insular sub-regions and 25 km proximity deduplication, merging 2 orthographic duplicates (Saint John's in Antigua and Barbuda and St. George's in Grenada) to yield 195 canonical records with 0% crowd-sourced fallback. Each entry retains its full census time series, explicit boundary scope (municipal city-proper versus metropolitan suburban borough) and archival provenance tags.

# Testing and Validation

Ledger reconciliation confirms exact accounting across all 197 evaluated candidates (195 included settlements plus 2 merged spelling duplicates). Every sub-region achieves non-zero settlement coverage, from 4 municipalities on Bermuda and 5 districts across the Cayman Islands to 42 towns in the Windwards, 44 communes in the French Antilles and 46 settlements across the Northern Leewards. Figure \ref{fig:sett-regional-map} displays the spatial footprint of the ten sub-regions and primary urban nodes from Bermuda and Nassau down to Port of Spain.

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_jaguar/1.0-lesser-antilles-bahamas-bermuda-settlements/lesser_antilles_bahamas_bermuda_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of ten insular sub-regions and primary catalogued port cities across the Lesser Antilles, the Bahamas, Trinidad and Tobago and Bermuda, 1838 to 2025.</figcaption>
</figure>

# Results

## Leading Recorded Island Ports, Towns and Communes

Table \ref{tab:top30-settlements} reports the 30 highest-peaking settlements in the gazetteer ordered by peak census population, spanning 296.732 at Nassau (2022) down to 16.065 at Roseau (1991). The upper tier combines fast-growing financial and tourism capitals (Nassau, Willemstad, Oranjestad, George Town, Freeport and Kralendijk), French Antillean administrative and suburban communes (Fort-de-France, Les Abymes, Pointe-à-Pitre, Le Lamentin, Baie-Mahault, Le Gosier and Petit-Bourg), Trinidadian urban and petroleum centres (Port of Spain, Chaguanas, San Fernando, Arima, San Juan, Sangre Grande, Point Fortin and Tunapuna) and major Leeward and Windward ports (Saint John's, Bridgetown, Kingstown and Roseau) [@NSIBahamas2023; @CSOTrinidad2012; @INSEEDOM2024; @CBSNetherlands2025; @BSSBarbados2023].

<figure class="crd-table-figure" id="tab:top30-settlements">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Territory</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Census Span</th><th class="crd-th">Peak Pop. (Year)</th><th class="crd-th">Latest Pop. (Year)</th><th class="crd-th">Scope</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Nassau</strong></td><td class="crd-td">The Bahamas</td><td class="crd-td">25,04, -77,36</td><td class="crd-td">1845 to 2022</td><td class="crd-td">296,7k (2022)</td><td class="crd-td">296,7k (2022)</td><td class="crd-td">City/town</td></tr>
<tr><td class="crd-td"><strong>Willemstad</strong></td><td class="crd-td">Curaçao</td><td class="crd-td">12,11, -68,93</td><td class="crd-td">1860 to 2023</td><td class="crd-td">137,8k (2023)</td><td class="crd-td">137,8k (2023)</td><td class="crd-td">City/town</td></tr>
<tr><td class="crd-td"><strong>Fort-de-France</strong></td><td class="crd-td">Martinique</td><td class="crd-td">14,61, -61,07</td><td class="crd-td">1853 to 2023</td><td class="crd-td">100,1k (1990)</td><td class="crd-td">75,5k (2023)</td><td class="crd-td">City/town</td></tr>
<tr><td class="crd-td"><strong>Port of Spain</strong></td><td class="crd-td">Trinidad and Tobago</td><td class="crd-td">10,65, -61,5</td><td class="crd-td">1851 to 2011</td><td class="crd-td">94k (1960)</td><td class="crd-td">37,1k (2011)</td><td class="crd-td">City/town</td></tr>
<tr><td class="crd-td"><strong>Chaguanas</strong></td><td class="crd-td">Trinidad and Tobago</td><td class="crd-td">10,52, -61,41</td><td class="crd-td">1946 to 2011</td><td class="crd-td">83,5k (2011)</td><td class="crd-td">83,5k (2011)</td><td class="crd-td">Suburb</td></tr>
<tr><td class="crd-td"><strong>Oranjestad</strong></td><td class="crd-td">Aruba</td><td class="crd-td">12,52, -70,03</td><td class="crd-td">1860 to 2020</td><td class="crd-td">81,9k (2020)</td><td class="crd-td">81,9k (2020)</td><td class="crd-td">City/town</td></tr>
<tr><td class="crd-td"><strong>Les Abymes</strong></td><td class="crd-td">Guadeloupe</td><td class="crd-td">16,27, -61,5</td><td class="crd-td">1982 to 2023</td><td class="crd-td">63,1k (1999)</td><td class="crd-td">51,1k (2023)</td><td class="crd-td">Suburb</td></tr>
<tr><td class="crd-td"><strong>San Fernando</strong></td><td class="crd-td">Trinidad and Tobago</td><td class="crd-td">10,28, -61,46</td><td class="crd-td">1851 to 2011</td><td class="crd-td">55,4k (2000)</td><td class="crd-td">48,8k (2011)</td><td class="crd-td">City/town</td></tr>
<tr><td class="crd-td"><strong>Pointe-à-Pitre</strong></td><td class="crd-td">Guadeloupe</td><td class="crd-td">16,24, -61,53</td><td class="crd-td">1853 to 2023</td><td class="crd-td">43,6k (1936)</td><td class="crd-td">15k (2023)</td><td class="crd-td">City/town</td></tr>
<tr><td class="crd-td"><strong>George Town</strong></td><td class="crd-td">Cayman Islands</td><td class="crd-td">19,3, -81,38</td><td class="crd-td">1891 to 2023</td><td class="crd-td">41,7k (2023)</td><td class="crd-td">41,7k (2023)</td><td class="crd-td">City/town</td></tr>
<tr><td class="crd-td"><strong>Le Lamentin</strong></td><td class="crd-td">Martinique</td><td class="crd-td">14,61, -61</td><td class="crd-td">1982 to 2023</td><td class="crd-td">40k (2015)</td><td class="crd-td">39,4k (2023)</td><td class="crd-td">Suburb</td></tr>
<tr><td class="crd-td"><strong>Arima</strong></td><td class="crd-td">Trinidad and Tobago</td><td class="crd-td">10,64, -61,28</td><td class="crd-td">1891 to 2011</td><td class="crd-td">33,6k (2011)</td><td class="crd-td">33,6k (2011)</td><td class="crd-td">City/town</td></tr>
<tr><td class="crd-td"><strong>Baie-Mahault</strong></td><td class="crd-td">Guadeloupe</td><td class="crd-td">16,27, -61,59</td><td class="crd-td">1982 to 2023</td><td class="crd-td">31,2k (2015)</td><td class="crd-td">30,9k (2023)</td><td class="crd-td">Suburb</td></tr>
<tr><td class="crd-td"><strong>Freeport</strong></td><td class="crd-td">The Bahamas</td><td class="crd-td">26,53, -78,7</td><td class="crd-td">1963 to 2010</td><td class="crd-td">28k (2010)</td><td class="crd-td">28k (2010)</td><td class="crd-td">City/town</td></tr>
<tr><td class="crd-td"><strong>Le Gosier</strong></td><td class="crd-td">Guadeloupe</td><td class="crd-td">16,21, -61,49</td><td class="crd-td">1982 to 2023</td><td class="crd-td">27,8k (2023)</td><td class="crd-td">27,8k (2023)</td><td class="crd-td">Suburb</td></tr>
<tr><td class="crd-td"><strong>Sint Nicolaas</strong></td><td class="crd-td">Aruba</td><td class="crd-td">12,44, -69,91</td><td class="crd-td">1930 to 2020</td><td class="crd-td">26,6k (2010)</td><td class="crd-td">25,8k (2020)</td><td class="crd-td">City/town</td></tr>
<tr><td class="crd-td"><strong>Saint-Pierre</strong></td><td class="crd-td">Martinique</td><td class="crd-td">14,74, -61,18</td><td class="crd-td">1853 to 2023</td><td class="crd-td">26k (1901)</td><td class="crd-td">4k (2023)</td><td class="crd-td">City/town</td></tr>
<tr><td class="crd-td"><strong>Petit-Bourg</strong></td><td class="crd-td">Guadeloupe</td><td class="crd-td">16,19, -61,59</td><td class="crd-td">1982 to 2023</td><td class="crd-td">24,7k (2023)</td><td class="crd-td">24,7k (2023)</td><td class="crd-td">City/town</td></tr>
<tr><td class="crd-td"><strong>Saint John's</strong></td><td class="crd-td">Antigua and Barbuda</td><td class="crd-td">17,12, -61,84</td><td class="crd-td">1844 to 2011</td><td class="crd-td">24,5k (2001)</td><td class="crd-td">22,2k (2011)</td><td class="crd-td">City/town</td></tr>
<tr><td class="crd-td"><strong>Sainte-Anne</strong></td><td class="crd-td">Guadeloupe</td><td class="crd-td">16,23, -61,39</td><td class="crd-td">1982 to 2023</td><td class="crd-td">24,4k (2022)</td><td class="crd-td">24k (2023)</td><td class="crd-td">City/town</td></tr>
<tr><td class="crd-td"><strong>Le Robert</strong></td><td class="crd-td">Martinique</td><td class="crd-td">14,68, -60,94</td><td class="crd-td">1982 to 2023</td><td class="crd-td">24,1k (2007)</td><td class="crd-td">21,6k (2023)</td><td class="crd-td">City/town</td></tr>
<tr><td class="crd-td"><strong>Kralendijk</strong></td><td class="crd-td">Caribbean Netherlands</td><td class="crd-td">12,15, -68,28</td><td class="crd-td">1890 to 2024</td><td class="crd-td">23,2k (2024)</td><td class="crd-td">23,2k (2024)</td><td class="crd-td">City/town</td></tr>
<tr><td class="crd-td"><strong>Le Moule</strong></td><td class="crd-td">Guadeloupe</td><td class="crd-td">16,33, -61,35</td><td class="crd-td">1982 to 2023</td><td class="crd-td">23k (2023)</td><td class="crd-td">23k (2023)</td><td class="crd-td">City/town</td></tr>
<tr><td class="crd-td"><strong>San Juan</strong></td><td class="crd-td">Trinidad and Tobago</td><td class="crd-td">10,65, -61,45</td><td class="crd-td">1960 to 2011</td><td class="crd-td">21,4k (1980)</td><td class="crd-td">15,8k (2011)</td><td class="crd-td">Suburb</td></tr>
<tr><td class="crd-td"><strong>Bridgetown</strong></td><td class="crd-td">Barbados</td><td class="crd-td">13,1, -59,61</td><td class="crd-td">1844 to 2000</td><td class="crd-td">21,4k (1871)</td><td class="crd-td">6k (2000)</td><td class="crd-td">City/town</td></tr>
<tr><td class="crd-td"><strong>Sangre Grande</strong></td><td class="crd-td">Trinidad and Tobago</td><td class="crd-td">10,59, -61,13</td><td class="crd-td">1946 to 2011</td><td class="crd-td">20,7k (2011)</td><td class="crd-td">20,7k (2011)</td><td class="crd-td">City/town</td></tr>
<tr><td class="crd-td"><strong>Point Fortin</strong></td><td class="crd-td">Trinidad and Tobago</td><td class="crd-td">10,17, -61,68</td><td class="crd-td">1946 to 2011</td><td class="crd-td">20,2k (2011)</td><td class="crd-td">20,2k (2011)</td><td class="crd-td">City/town</td></tr>
<tr><td class="crd-td"><strong>Sainte-Marie</strong></td><td class="crd-td">Martinique</td><td class="crd-td">14,78, -60,99</td><td class="crd-td">1982 to 2023</td><td class="crd-td">20,1k (1999)</td><td class="crd-td">14,8k (2023)</td><td class="crd-td">City/town</td></tr>
<tr><td class="crd-td"><strong>Sainte-Rose</strong></td><td class="crd-td">Guadeloupe</td><td class="crd-td">16,33, -61,7</td><td class="crd-td">1982 to 2023</td><td class="crd-td">19,9k (2015)</td><td class="crd-td">17,7k (2023)</td><td class="crd-td">City/town</td></tr>
<tr><td class="crd-td"><strong>Capesterre-Belle-Eau</strong></td><td class="crd-td">Guadeloupe</td><td class="crd-td">16,04, -61,56</td><td class="crd-td">1982 to 2023</td><td class="crd-td">19,6k (1999)</td><td class="crd-td">17,7k (2023)</td><td class="crd-td">City/town</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 30 recorded settlements by peak census population across the Lesser Antilles, the Bahamas, Trinidad and Tobago and Bermuda, 1838 to 2025.</figcaption>
</figure>

## Bermuda and Montserrat: Oceanic Micro-State and Volcanic Displacement Profiles

Because Bermuda's historic municipalities and Montserrat's volcanic refuge villages sit below the top-30 population threshold yet carry outsized demographic significance, Table \ref{tab:bermuda-montserrat} compiles all 8 catalogued settlements across both territories. On Bermuda, commercial conversion shrank central Hamilton from 3.259 in 1931 to 854 in 2016 while Somerset Village rose to 2.540 and St. George's held 1.527 [@BSOBermuda2018]. On Montserrat, the 1995 to 1997 Soufrière Hills eruption erased Plymouth (1.478 in 1991) and redistributed the surviving population into northern villages at Brades, Salem and Cudjoe Head [@Simonsen2025Introduction].

<figure class="crd-table-figure" id="tab:bermuda-montserrat">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory</th><th class="crd-th">Settlement</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Census Span</th><th class="crd-th">Peak Pop. (Year)</th><th class="crd-th">Latest Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bermuda</strong></td><td class="crd-td">Hamilton</td><td class="crd-td">32,29, -64,78</td><td class="crd-td">1851 to 2016</td><td class="crd-td">3,3k (1931)</td><td class="crd-td">854 (2016)</td></tr>
<tr><td class="crd-td"><strong>Bermuda</strong></td><td class="crd-td">Somerset Village</td><td class="crd-td">32,3, -64,87</td><td class="crd-td">1891 to 2016</td><td class="crd-td">2,7k (2000)</td><td class="crd-td">2,5k (2016)</td></tr>
<tr><td class="crd-td"><strong>Bermuda</strong></td><td class="crd-td">St. George's</td><td class="crd-td">32,38, -64,68</td><td class="crd-td">1851 to 2016</td><td class="crd-td">2,1k (1891)</td><td class="crd-td">1,5k (2016)</td></tr>
<tr><td class="crd-td"><strong>Bermuda</strong></td><td class="crd-td">Flatts Village</td><td class="crd-td">32,32, -64,74</td><td class="crd-td">1891 to 2016</td><td class="crd-td">1,3k (1991)</td><td class="crd-td">1,3k (2016)</td></tr>
<tr><td class="crd-td"><strong>Montserrat</strong></td><td class="crd-td">Plymouth</td><td class="crd-td">16,71, -62,21</td><td class="crd-td">1844 to 1991</td><td class="crd-td">2,1k (1946)</td><td class="crd-td">1,5k (1991)</td></tr>
<tr><td class="crd-td"><strong>Montserrat</strong></td><td class="crd-td">Brades</td><td class="crd-td">16,79, -62,21</td><td class="crd-td">2011 to 2018</td><td class="crd-td">449 (2011)</td><td class="crd-td">393 (2018)</td></tr>
<tr><td class="crd-td"><strong>Montserrat</strong></td><td class="crd-td">Salem</td><td class="crd-td">16,75, -62,22</td><td class="crd-td">2011 to 2018</td><td class="crd-td">345 (2011)</td><td class="crd-td">320 (2018)</td></tr>
<tr><td class="crd-td"><strong>Montserrat</strong></td><td class="crd-td">Cudjoe Head</td><td class="crd-td">16,77, -62,2</td><td class="crd-td">2011 to 2018</td><td class="crd-td">137 (2011)</td><td class="crd-td">131 (2018)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued settlements in Bermuda (oceanic financial micro-state) and Montserrat (pre- and post-1995 volcanic displacement), 1844 to 2018.</figcaption>
</figure>

## Sub-Regional Gazetteer Coverage

Table \ref{tab:subregion-gazetteer} summarises catalogued settlement counts, suburban borough tags, leading settlement and official 2025 census totals across all ten sub-regions. The Northern Leewards (46 settlements), French Antilles (44) and Windwards (42) supply 67,7% of all catalogued nodes because of their fragmented multi-island parish and commune structures, whereas single- or dual-island polities such as Bermuda (4), Cayman Islands (5) and Barbados (6) achieve full coverage through compact town registers [@BSOBermuda2018; @BSSBarbados2023; @INSEEDOM2024; @CSOStLucia2023; @CSOGrenada2023].

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Settlements</th><th class="crd-th">Suburbs</th><th class="crd-th">Leading Settlement (Peak)</th><th class="crd-th">2025 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bahamas and Turks and Caicos</strong></td><td class="crd-td">14</td><td class="crd-td">0</td><td class="crd-td">Nassau (296,7k)</td><td class="crd-td">448k</td></tr>
<tr><td class="crd-td"><strong>Bermuda</strong></td><td class="crd-td">4</td><td class="crd-td">0</td><td class="crd-td">Hamilton (3,3k)</td><td class="crd-td">64,6k</td></tr>
<tr><td class="crd-td"><strong>Cayman Islands</strong></td><td class="crd-td">5</td><td class="crd-td">0</td><td class="crd-td">George Town (41,7k)</td><td class="crd-td">74,5k</td></tr>
<tr><td class="crd-td"><strong>US and British Virgin Islands</strong></td><td class="crd-td">7</td><td class="crd-td">0</td><td class="crd-td">Charlotte Amalie (12,9k)</td><td class="crd-td">124,5k</td></tr>
<tr><td class="crd-td"><strong>Northern Leeward Islands (Anguilla to Montserrat)</strong></td><td class="crd-td">46</td><td class="crd-td">0</td><td class="crd-td">Saint John's (24,5k)</td><td class="crd-td">274k</td></tr>
<tr><td class="crd-td"><strong>French Antilles (Guadeloupe and Martinique)</strong></td><td class="crd-td">44</td><td class="crd-td">4</td><td class="crd-td">Fort-de-France (100,1k)</td><td class="crd-td">745k</td></tr>
<tr><td class="crd-td"><strong>Windward Islands (Dominica, St Lucia, St Vincent, Grenada)</strong></td><td class="crd-td">42</td><td class="crd-td">0</td><td class="crd-td">Kingstown (17,3k)</td><td class="crd-td">482k</td></tr>
<tr><td class="crd-td"><strong>Barbados</strong></td><td class="crd-td">6</td><td class="crd-td">0</td><td class="crd-td">Bridgetown (21,4k)</td><td class="crd-td">282,5k</td></tr>
<tr><td class="crd-td"><strong>Trinidad and Tobago</strong></td><td class="crd-td">18</td><td class="crd-td">4</td><td class="crd-td">Port of Spain (94k)</td><td class="crd-td">1,51M</td></tr>
<tr><td class="crd-td"><strong>Dutch ABC Islands (Aruba, Bonaire and Curaçao)</strong></td><td class="crd-td">9</td><td class="crd-td">0</td><td class="crd-td">Willemstad (137,8k)</td><td class="crd-td">292k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Catalogued settlement counts, tagged suburban boroughs, leading recorded town and 2025 official census population across ten insular sub-regions.</figcaption>
</figure>

## Archival Provenance Corpora

Table \ref{tab:provenance-corpora} aggregates the top archival statistical series referenced across the 195 gazetteer records (individual settlements frequently cite both a nineteenth-to-twentieth-century historical census series and a modern national statistical release, so provenance citations sum above 195). Official historical Caribbean and Bermuda censuses (1844 to 1991) anchor 52 longitudinal town series, joined by INSEE's French Antillean commune series (44 communes), CSO Saint Lucia (25), CSO Trinidad and Tobago (18), Statistics Division Antigua and Barbuda (15), CSO Dominica (15) and every remaining territorial statistical office [@Kuczynski1953; @INSEEDOM2024; @CSOTrinidad2012; @CSOStLucia2023; @USCensusUSVI2021; @CBSNetherlands2025; @Bureau2003Census; @Census1992Census].

<figure class="crd-table-figure" id="tab:provenance-corpora">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Statistical Corpus</th><th class="crd-th">Cited Records</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Caribbean and Bermuda Official Historical Censuses (1844-1991)</strong></td><td class="crd-td">52</td></tr>
<tr><td class="crd-td"><strong>INSEE Populations de référence 2022 (French Antilles)</strong></td><td class="crd-td">44</td></tr>
<tr><td class="crd-td"><strong>CSO Saint Lucia Censuses (Cities and Towns)</strong></td><td class="crd-td">25</td></tr>
<tr><td class="crd-td"><strong>INSEE Guadeloupe Censuses (Communes 1967-2022)</strong></td><td class="crd-td">23</td></tr>
<tr><td class="crd-td"><strong>INSEE Martinique Censuses (Communes 1967-2022)</strong></td><td class="crd-td">21</td></tr>
<tr><td class="crd-td"><strong>CSO Trinidad and Tobago Censuses</strong></td><td class="crd-td">18</td></tr>
<tr><td class="crd-td"><strong>Statistics Division Antigua and Barbuda Censuses</strong></td><td class="crd-td">15</td></tr>
<tr><td class="crd-td"><strong>CSO Dominica Censuses</strong></td><td class="crd-td">15</td></tr>
<tr><td class="crd-td"><strong>Anguilla Statistics Dept Censuses</strong></td><td class="crd-td">9</td></tr>
<tr><td class="crd-td"><strong>Dept of Statistics Turks and Caicos Censuses</strong></td><td class="crd-td">8</td></tr>
<tr><td class="crd-td"><strong>STAT Sint Maarten Censuses</strong></td><td class="crd-td">7</td></tr>
<tr><td class="crd-td"><strong>Bahamas Dept of Statistics Censuses (Settlements)</strong></td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Barbados Statistical Service Censuses</strong></td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>US Census Bureau USVI Censuses</strong></td><td class="crd-td">6</td></tr>
<tr><td class="crd-td"><strong>Remaining 12 territorial NSO census series</strong></td><td class="crd-td">34</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Primary archival and national statistical office corpora cited across 195 catalogued settlements (multi-source longitudinal records counted per corpus).</figcaption>
</figure>

# Limitations

Three statistical caveats apply to this gazetteer. First, imperial administrative definitions are not strictly uniform: French Antillean *communes* fold rural and suburban hamlets into single municipal counts, whereas British Commonwealth towns such as Bridgetown, Port of Spain, Castries and Hamilton enumerate tight historic cores whose resident totals decline even as surrounding urban parishes grow [@INSEEDOM2024; @CSOTrinidad2012; @BSSBarbados2023; @BSOBermuda2018]. Second, census periodicity varies across small island statistical offices, with several 2020-round enumerations delayed by the COVID-19 pandemic [@Celade2024Report], leaving 2010 or 2011 as the latest town-level breakdown in Trinidad and Tobago, Dominica, Antigua and Barbuda and Saint Kitts and Nevis. Third, seasonal cruise, resort and offshore-worker populations fluctuate sharply across Aruba, the Bahamas, Turks and Caicos, Sint Maarten and the Cayman Islands relative to census-night de jure counts [@Jurgens2024There; @Celade2016Development; @NSIBahamas2023].

# Conclusion

Cataloguing 195 ports, capitals, suburban boroughs and communes across 24 jurisdictions with zero crowd-sourced fallback, this gazetteer establishes a rigorous urban backbone for the post-emancipation eastern Caribbean and western North Atlantic. From Nassau's forty-two-fold expansion and Chaguanas's thirty-fold suburban surge to the volcanic erasure of Saint-Pierre and Plymouth and the quiet core contraction of Bridgetown, Port of Spain and Hamilton, the rank-size hierarchy ($\alpha = 0,95$, $R^2 = 0,95$) captures a uniquely decentralised maritime urban system shaped by migration, trade and island geography.

# Sources

::: {#refs}
:::

# Footnotes

1. Peak counts in Table \ref{tab:top30-settlements} reflect each settlement's maximum census enumeration within 1838 to 2025; for suburbanising historic capitals (Port of Spain, Bridgetown, Pointe-à-Pitre, Castries, Charlotte Amalie and Hamilton) and disaster-struck towns (Saint-Pierre and Plymouth), peak dates precede the latest census return by several decades.
2. In Bermuda, the gazetteer records all four historical municipal and village census nodes (Hamilton, St. George's, Somerset Village and Flatts Village); the remaining island population resides across Bermuda's nine unincorporated parishes totalling 63.779 residents in 2016.
