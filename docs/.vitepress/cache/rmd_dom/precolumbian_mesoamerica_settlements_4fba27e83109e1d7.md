---
title: "Pre-Columbian Mesoamerica to AD 1200"
subtitle: "Settlement Gazetteer and Urban Hierarchy across Highland and Gulf Mexico"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/precolumbian_mesoamerica_urban_hierarchy.png"
hero_caption: "Leading Pre-Columbian settlements and rank-size power-law distribution across 336 archaeological sites in Mexico, 10000BC to 1200AD."
hero_label: "fig:hero-mesoamerica-hierarchy"
bibliography: precolumbian_mesoamerica_literature_review.bib
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



![Leading Pre-Columbian settlements and rank-size power-law distribution across 336 archaeological sites in Mexico, 10000BC to 1200AD.](figures/precolumbian_mesoamerica_urban_hierarchy.png)



# Abstract

This companion settlement gazetteer catalogues 336 geocoded Pre-Columbian archaeological settlements across seven biophysical sub-regions of Mexico between 10000BC and 1200AD. Assembled across four sequential ingestion waves with 0 excluded duplicates and a 0% crowd-sourced share, the register combines full-coverage pedestrian survey datasets from the Basin of Mexico (251 sites) and Valley of Oaxaca (15 sites) with regional archaeological syntheses across the Gulf Olmec and Veracruz Lowlands (24 sites), the Arid Northern Interior and Baja California (17 sites), the Bajío and North-Central Highlands (14 sites), West Mexico Santiago-Balsas (12 sites) and Pacific Sierra Madre and Sonora-Sinaloa (3 sites) [@SandersParsonsSantley1979; @Kowalewski1989; @Pool2007]. Spanning Archaic dry shelters and coastal shell-midden camps from 9000BC through Formative Olmec centres, Classic highland metropolises, Epiclassic fortified capitals and Early Post-Classic Toltec towns [@Millon1973; @Cowgill2015; @Healan2012], peak city-proper populations range from small rural hamlets of 30 inhabitants to Teotihuacán at 124k in 450AD, Cantona at 79,4k in 800AD, Tula at 56,4k in 1000AD, Cholula at 33,2k in 1100AD and Monte Albán at 24,9k in 650AD. Across all 336 catalogued sites, the upper-half rank-size fit (168 settlements) yields a steep urban power-law exponent ($\alpha = 1,09$, $R^2 = 0,88$), capturing the maturation of Mesoamerica's pre-industrial urban hierarchy.

# Background

Archaeological settlements across Pre-Columbian Mexico between 10000BC and 1200AD span every rung of human residential organisation, from ephemeral Archaic rock-shelter camps to planned stone-and-plaster metropolises. At the earliest chronological horizon (9000BC to 4000BC), habitation sites appear as coastal foraging stations on Isla Cedros and Espíritu Santo Island, dry highland caves at Coxcatlán and Guilá Naquitz where squash and maize domestication began, and early lakeside camps at Tlapacoya and Gheo-Shih [@SandersParsonsSantley1979; @Gonzalezmartin2015Demographic].

Once sedentary maize farming stabilised after 2000BC, monumental civic hubs emerged rapidly across humid river levees and circumscribed highland basins. Along the Gulf coast, San Lorenzo Tenochtitlán (10,8k in 1000BC) and La Venta (11,4k in 600BC) established multi-tier settlement hierarchies across Capoacan and Medias Aguas before Epi-Olmec Tres Zapotes bridged into the Classic era [@Diehl2004; @Pool2007; @Baizabal2019Asentamiento; @Reyes2019Patro]. In Oaxaca, hilltop Monte Albán (24,9k in 650AD) anchored a valley-wide Zapotec state supported by check-dam waterworks and surrounded by piedmont towns such as Jalieza, Yagul, Dainzú and Zaachila [@Blanton1999; @Gracida2019Studying; @Kowalewski1989]. In the Basin of Mexico, Late Formative Cuicuilco (19,8k) gave way after volcanic disruption to Teotihuacán (124k in 450AD), whose 20 km² orthogonal grid of roughly 2.000 apartment compounds dwarfed every contemporary city in the Americas [@Millon1973; @Cowgill2015; @Carballo2016]. Following Teotihuacán's seventh-century fire, urban life pivoted toward fortified Epiclassic centres — Cantona (79,4k), Cholula (33,2k), El Tajín (19,8k), Xochicalco (15,6k) and Cacaxtla-Xochitécatl (11,4k) — alongside West Mexican Guachimontones (22,4k), Bajío frontier forts such as La Quemada (4,9k) and Early Post-Classic Toltec Tula (56,4k) [@PlunketUrunuela2012; @Mastache2002; @Healan2012].

# Methodology

The settlement register was compiled across four sequential waves audited in the chapter source ledger, terminating once marginal site gain fell to 0,9%. Wave 1 ingested 306 sites (91,1%) from full-coverage regional survey datasets, chiefly the Arizona State University Basin of Mexico Settlement Persistence Dataset built on Sanders, Parsons and Santley's classic transects alongside the Teotihuacán Mapping Project, Valley of Oaxaca survey and Tula heartland register [@SandersParsonsSantley1979; @Millon1973; @Kowalewski1989; @Healan2012]. Wave 2 incorporated 22 major regional capitals and frontier complexes from peer-reviewed archaeological monographs across Veracruz, Jalisco, Michoacán, Zacatecas and Sinaloa (7,19% marginal gain). Wave 3 added 5 longitudinal Archaic and Formative sites (1,52% marginal gain), and Wave 4 closed remaining northern and Pacific frontier gaps with 3 sites (0,9% marginal gain).

Every settlement record is assigned WGS84 coordinates, a biophysical sub-region polygon via point-in-polygon matching, a city-proper spatial scope (336 city-proper entries, 0 separate suburban overlays) and a multi-year archaeological population trajectory calibrated from mapped habitation area, ceramic-phase sherd density and household-compound multipliers [@Carballo2010Advances; @Cowgill2015]. Rank-size scaling is estimated across the upper half of the 336-site distribution (168 settlements) via ordinary least squares on log-transformed rank and peak population.

# Testing and Validation

Ledger reconciliation confirms exact accounting across all 336 catalogued entries (336 included, 0 excluded, 0% crowd-sourced share). Every record carries non-null latitude and longitude inside the Mexican territorial mask, at least one dated population observation within the 10000BC to 1200AD domain and an explicit scholarly archaeological citation. Cross-checks against isotopic palaeomobility, household-compound archaeology and terraced catchment studies confirm that peak city-proper headcounts stay within consensus archaeological bounds [@Aguirresamudio2017Genetic; @Somerville2016Animal; @Pachecofores2025Radiogenic; @Pezzutti2007Steps]. Figure \ref{fig:sett-regional-map} maps all 336 settlements across the seven biophysical sub-regions, illustrating both the dense survey cluster inside the Basin of Mexico and the wide geographic reach of northern, Gulf, Oaxacan and West Mexican anchor sites.

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_jaguar/1.0-precolumbian-mesoamerica-settlements/precolumbian_mesoamerica_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 336 catalogued Pre-Columbian settlements across seven biophysical sub-regions of Mexico, 10000BC to 1200AD.</figcaption>
</figure>

# Results

## Leading Thirty Pre-Columbian Settlements

Table \ref{tab:top30-sites} presents the 30 largest catalogued settlements across Pre-Columbian Mexico, ranked by peak population between 10000BC and 1200AD. Ranging from Teotihuacán (124k in 450AD) down to Yagul (6,9k in 1150AD), the top tier spans five of the seven biophysical sub-regions: 12 cities in the Basin of Mexico and Central Highlands, 10 across the Gulf Olmec and Veracruz Lowlands (including contiguous piedmont gateways), 4 in Oaxaca and Mixteca Sierra-Valleys, 2 in West Mexico Santiago-Balsas and 1 each in Pacific Sierra Madre (Culiacán Aztatlán) and the northern Bajío margin.

<figure class="crd-table-figure" id="tab:top30-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Settlement Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Occupation Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Teotihuacán</td><td class="crd-td">Basin of Mexico and Central Highlands</td><td class="crd-td">19,69, -98,84</td><td class="crd-td">200BC to 1100AD</td><td class="crd-td">124k (450AD)</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Cantona Site</td><td class="crd-td">Basin of Mexico and Central Highlands</td><td class="crd-td">19,54, -97,47</td><td class="crd-td">300BC to 950AD</td><td class="crd-td">79,4k (800AD)</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Tula</td><td class="crd-td">Basin of Mexico and Central Highlands</td><td class="crd-td">20,06, -99,34</td><td class="crd-td">700AD to 1150AD</td><td class="crd-td">56,4k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Cholula</td><td class="crd-td">Basin of Mexico and Central Highlands</td><td class="crd-td">19,06, -98,3</td><td class="crd-td">400BC to 1100AD</td><td class="crd-td">33,2k (1100AD)</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Monte Albán Site</td><td class="crd-td">Oaxaca and Mixteca Sierra-Valleys</td><td class="crd-td">17,04, -96,77</td><td class="crd-td">450BC to 1100AD</td><td class="crd-td">24,9k (650AD)</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Guachimontones Teuchitlán Site</td><td class="crd-td">West Mexico Santiago-Balsas</td><td class="crd-td">20,7, -103,83</td><td class="crd-td">200BC to 650AD</td><td class="crd-td">22,4k (400AD)</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">El Tajín Site</td><td class="crd-td">Gulf Olmec and Veracruz Lowlands</td><td class="crd-td">20,45, -97,38</td><td class="crd-td">300AD to 1150AD</td><td class="crd-td">19,8k (850AD)</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Cuicuilco Site</td><td class="crd-td">Basin of Mexico and Central Highlands</td><td class="crd-td">19,3, -99,18</td><td class="crd-td">700BC to 100AD</td><td class="crd-td">19,8k (150BC)</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Jalieza Site</td><td class="crd-td">Oaxaca and Mixteca Sierra-Valleys</td><td class="crd-td">16,84, -96,68</td><td class="crd-td">400AD to 1150AD</td><td class="crd-td">16,2k (950AD)</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Xochicalco Site</td><td class="crd-td">Basin of Mexico and Central Highlands</td><td class="crd-td">18,8, -99,3</td><td class="crd-td">650AD to 900AD</td><td class="crd-td">15,6k (800AD)</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Chalco Settlement</td><td class="crd-td">Basin of Mexico and Central Highlands</td><td class="crd-td">19,26, -98,9</td><td class="crd-td">1075AD to 1200AD</td><td class="crd-td">14,9k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Matacapan Site</td><td class="crd-td">Gulf Olmec and Veracruz Lowlands</td><td class="crd-td">18,41, -95,18</td><td class="crd-td">200AD to 850AD</td><td class="crd-td">14,6k (650AD)</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">La Venta Site</td><td class="crd-td">Gulf Olmec and Veracruz Lowlands</td><td class="crd-td">18,1, -94,04</td><td class="crd-td">1000BC to 400BC</td><td class="crd-td">11,4k (600BC)</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Cacaxtla-Xochitécatl Site</td><td class="crd-td">Basin of Mexico and Central Highlands</td><td class="crd-td">19,25, -98,34</td><td class="crd-td">400BC to 900AD</td><td class="crd-td">11,4k (700AD)</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">San Lorenzo Tenochtitlán Site</td><td class="crd-td">Gulf Olmec and Veracruz Lowlands</td><td class="crd-td">17,75, -94,76</td><td class="crd-td">1400BC to 600BC</td><td class="crd-td">10,8k (1000BC)</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">Cempoala Early Settlement</td><td class="crd-td">Gulf Olmec and Veracruz Lowlands</td><td class="crd-td">19,45, -96,4</td><td class="crd-td">900AD to 1200AD</td><td class="crd-td">9,8k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Texcoco Survey Site TX-CL-2</td><td class="crd-td">Basin of Mexico and Central Highlands</td><td class="crd-td">19,39, -98,9</td><td class="crd-td">276AD to 750AD</td><td class="crd-td">9,6k (750AD)</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">El Pital Site</td><td class="crd-td">Gulf Olmec and Veracruz Lowlands</td><td class="crd-td">20,23, -96,95</td><td class="crd-td">100AD to 700AD</td><td class="crd-td">9,6k (450AD)</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">Zaachila Early Settlement</td><td class="crd-td">Oaxaca and Mixteca Sierra-Valleys</td><td class="crd-td">16,95, -96,75</td><td class="crd-td">600AD to 1200AD</td><td class="crd-td">9,6k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">Teotenango Site</td><td class="crd-td">Basin of Mexico and Central Highlands</td><td class="crd-td">19,11, -99,6</td><td class="crd-td">650AD to 1150AD</td><td class="crd-td">9,4k (1150AD)</td></tr>
<tr><td class="crd-td"><strong>21</strong></td><td class="crd-td">Culhuacán Settlement</td><td class="crd-td">Basin of Mexico and Central Highlands</td><td class="crd-td">19,33, -99,12</td><td class="crd-td">1025AD to 1200AD</td><td class="crd-td">9,4k (1025AD)</td></tr>
<tr><td class="crd-td"><strong>22</strong></td><td class="crd-td">Mitla Early Settlement</td><td class="crd-td">Gulf Olmec and Veracruz Lowlands</td><td class="crd-td">16,93, -96,36</td><td class="crd-td">200AD to 1200AD</td><td class="crd-td">8,9k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>23</strong></td><td class="crd-td">Cerro de las Mesas Site</td><td class="crd-td">Gulf Olmec and Veracruz Lowlands</td><td class="crd-td">18,7, -96,15</td><td class="crd-td">400BC to 750AD</td><td class="crd-td">8,4k (450AD)</td></tr>
<tr><td class="crd-td"><strong>24</strong></td><td class="crd-td">Tehuacán Viejo Site</td><td class="crd-td">Gulf Olmec and Veracruz Lowlands</td><td class="crd-td">18,43, -97,34</td><td class="crd-td">200BC to 1150AD</td><td class="crd-td">8,4k (1150AD)</td></tr>
<tr><td class="crd-td"><strong>25</strong></td><td class="crd-td">Chalco Survey Site CH-ET-11</td><td class="crd-td">Basin of Mexico and Central Highlands</td><td class="crd-td">19,22, -98,8</td><td class="crd-td">300BC to 750AD</td><td class="crd-td">8,2k (300BC)</td></tr>
<tr><td class="crd-td"><strong>26</strong></td><td class="crd-td">Tres Zapotes Site</td><td class="crd-td">Gulf Olmec and Veracruz Lowlands</td><td class="crd-td">18,47, -95,45</td><td class="crd-td">800BC to 800AD</td><td class="crd-td">7,8k (200AD)</td></tr>
<tr><td class="crd-td"><strong>27</strong></td><td class="crd-td">Loma Alta Zacapu Site</td><td class="crd-td">West Mexico Santiago-Balsas</td><td class="crd-td">19,86, -101,73</td><td class="crd-td">100BC to 1050AD</td><td class="crd-td">7,6k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>28</strong></td><td class="crd-td">Chingú Site</td><td class="crd-td">Basin of Mexico and Central Highlands</td><td class="crd-td">20,07, -99,22</td><td class="crd-td">200AD to 650AD</td><td class="crd-td">7,2k (450AD)</td></tr>
<tr><td class="crd-td"><strong>29</strong></td><td class="crd-td">Culiacán Aztatlán Early Site</td><td class="crd-td">Pacific Sierra Madre and Sonora-Sinaloa</td><td class="crd-td">24,8, -107,4</td><td class="crd-td">850AD to 1200AD</td><td class="crd-td">7k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>30</strong></td><td class="crd-td">Tamtoc Site</td><td class="crd-td">Bajío and North-Central Highlands</td><td class="crd-td">21,96, -98,89</td><td class="crd-td">600BC to 1150AD</td><td class="crd-td">6,9k (1150AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 30 Pre-Columbian settlements across Mexico ordered by peak archaeological population, 10000BC to 1200AD (from 336 catalogued sites).</figcaption>
</figure>

## Sub-Regional Gazetteer Distribution and Frontier Anchors

Table \ref{tab:subregion-gazetteer} summarises catalogued site counts, areal survey density per 10.000 km², leading recorded centre and 1200AD gridded sub-regional population across all seven sub-regions. While the Basin of Mexico and Central Highlands supplies 74,7% of all catalogued nodes at 16,96 sites per 10.000 km², every sub-region carries anchored multi-period sites documenting local demographic trajectories from Archaic camps to Post-Classic towns [@SandersParsonsSantley1979; @Kowalewski1989; @Mastache2002].

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Sites per 10k km²</th><th class="crd-th">Leading Site (Peak)</th><th class="crd-th">1200AD Grid Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gulf Olmec and Veracruz Lowlands</strong></td><td class="crd-td">125.756</td><td class="crd-td">24</td><td class="crd-td">1,91</td><td class="crd-td">El Tajín Site (19,8k)</td><td class="crd-td">230,9k</td></tr>
<tr><td class="crd-td"><strong>Basin of Mexico and Central Highlands</strong></td><td class="crd-td">147.967</td><td class="crd-td">251</td><td class="crd-td">16,96</td><td class="crd-td">Teotihuacán (124k)</td><td class="crd-td">235,8k</td></tr>
<tr><td class="crd-td"><strong>Oaxaca and Mixteca Sierra-Valleys</strong></td><td class="crd-td">60.536</td><td class="crd-td">15</td><td class="crd-td">2,48</td><td class="crd-td">Monte Albán Site (24,9k)</td><td class="crd-td">97,7k</td></tr>
<tr><td class="crd-td"><strong>West Mexico Santiago-Balsas</strong></td><td class="crd-td">134.939</td><td class="crd-td">12</td><td class="crd-td">0,89</td><td class="crd-td">Guachimontones Teuchitlán Site (22,4k)</td><td class="crd-td">182,7k</td></tr>
<tr><td class="crd-td"><strong>Bajío and North-Central Highlands</strong></td><td class="crd-td">285.316</td><td class="crd-td">14</td><td class="crd-td">0,49</td><td class="crd-td">Tamtoc Site (6,9k)</td><td class="crd-td">289,4k</td></tr>
<tr><td class="crd-td"><strong>Pacific Sierra Madre and Sonora-Sinaloa</strong></td><td class="crd-td">83.542</td><td class="crd-td">3</td><td class="crd-td">0,36</td><td class="crd-td">Culiacán Aztatlán Early Site (7k)</td><td class="crd-td">69,3k</td></tr>
<tr><td class="crd-td"><strong>Arid Northern Interior and Baja California</strong></td><td class="crd-td">948.117</td><td class="crd-td">17</td><td class="crd-td">0,18</td><td class="crd-td">Guasave Early Site (2,4k)</td><td class="crd-td">513,8k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Catalogued site counts, survey recovery density (per 10.000 km²), largest recorded settlement and 1200AD gridded population across seven sub-regions.</figcaption>
</figure>

## Provenance Corpus Breakdown and Archaic-to-Classic Rank Structure

Table \ref{tab:provenance-ledger} classifies all 336 entries by primary archaeological source family. Full-coverage ASU Basin of Mexico survey records account for 231 sites (68,75%), regional archaeological monographs and INAH site syntheses contribute 81 entries (24,11%), Gulf Olmec and Veracruz surveys provide 9 major centres (2,68%), West Mexico surveys add 7 centres (2,08%), Valley of Oaxaca surveys supply 6 primary towns (1,79%) and dedicated metropolitan mapping projects anchor Teotihuacán and Tula. Across the combined gazetteer, the mature rank-size exponent ($\alpha = 1,09$, $R^2 = 0,88$ across the upper 168 of 336 settlements) reflects a steeply stratified urban pyramid crowned by multi-epoch highland capitals above a broad rural village base [@Millon1973; @Cowgill2015; @Carballo2010Advances].

<figure class="crd-table-figure" id="tab:provenance-ledger">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Primary Archaeological Corpus</th><th class="crd-th">Sites</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>ASU Basin of Mexico Settlement Survey (Sanders, Parsons and Santley 1979; Cesaretti et al. 2022)</strong></td><td class="crd-td">231</td><td class="crd-td">68,75%</td></tr>
<tr><td class="crd-td"><strong>Regional Archaeological Monographs and INAH Site Surveys</strong></td><td class="crd-td">81</td><td class="crd-td">24,11%</td></tr>
<tr><td class="crd-td"><strong>Gulf Coast and Olmec-Veracruz Archaeological Surveys</strong></td><td class="crd-td">9</td><td class="crd-td">2,68%</td></tr>
<tr><td class="crd-td"><strong>West Mexico Teuchitlán and Santiago-Balsas Surveys</strong></td><td class="crd-td">7</td><td class="crd-td">2,08%</td></tr>
<tr><td class="crd-td"><strong>Valley of Oaxaca Archaeological Survey (Blanton 1978; Kowalewski et al. 1989)</strong></td><td class="crd-td">6</td><td class="crd-td">1,79%</td></tr>
<tr><td class="crd-td"><strong>Teotihuacán Mapping Project (Millon 1973; Cowgill 2015)</strong></td><td class="crd-td">1</td><td class="crd-td">0,3%</td></tr>
<tr><td class="crd-td"><strong>Tula and Toltec Heartland Survey (Mastache et al. 2002; Healan 2012)</strong></td><td class="crd-td">1</td><td class="crd-td">0,3%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Provenance breakdown of 336 catalogued Pre-Columbian settlements by primary archaeological survey and monograph corpus (0% crowd-sourced share).</figcaption>
</figure>

# Limitations

Three structural constraints govern interpretation of this settlement gazetteer. First, pedestrian survey intensity varies by nearly two orders of magnitude between the exhaustively walked Basin of Mexico (16,96 sites per 10.000 km²) and Mexico's northern arid interior (0,18 sites per 10.000 km²), inflating rural hamlet representation in central valleys relative to West Mexico, Veracruz and Oaxaca [@SandersParsonsSantley1979; @Stuardo2005Archaeological]. Second, pooled peak-population rankings compress eleven millennia of staggered urban cycles into a single hierarchy: Early Formative San Lorenzo (1000BC), Classic Teotihuacán (450AD), Epiclassic Cantona (800AD) and Post-Classic Tula (1000AD) never coexisted at their simultaneous maxima [@Pool2007; @Cowgill2015; @Healan2012]. Third, sherd-area and residential-compound population conversions carry $\pm 25\%$ to $\pm 40\%$ parametric uncertainty across low-density tropical and terraced highland centres [@Carballo2010Advances; @Geurds2008Grounding; @Zborover2014Decolonizing].

# Conclusion

Cataloguing 336 evidence-anchored Pre-Columbian settlements across seven Mexican sub-regions documents the full structural arc from mobile Archaic caves to Classic and Early Post-Classic urban networks. Crowned by Teotihuacán (124k), Cantona (79,4k), Tula (56,4k), Cholula (33,2k), Monte Albán (24,9k), Guachimontones (22,4k) and El Tajín (19,8k), the register confirms a mature urban rank-size distribution ($\alpha = 1,09$, $R^2 = 0,88$) that anchors JAGUAR's sub-regional demographic reconstructions across highland, Gulf and frontier Mexico up to 1200AD.

# Appendix

## Earliest Archaic and Early Formative Habitation Anchors

Table \ref{tab:earliest-sites} lists the twelve earliest catalogued habitation sites in the gazetteer ordered by initial occupation date, spanning 9000BC through 1000BC across Baja California, Oaxaca, Tehuacán, the Basin of Mexico, the Gulf Olmec heartland and the northern deserts.

<figure class="crd-table-figure" id="tab:earliest-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Site Name</th><th class="crd-th">Sub-Region</th><th class="crd-th">Earliest Date</th><th class="crd-th">Peak Pop. (Year)</th><th class="crd-th">Lat, Lon</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Isla Cedros Settlement</strong></td><td class="crd-td">Arid Northern Interior and Baja California</td><td class="crd-td">9000BC</td><td class="crd-td">890 (1100AD)</td><td class="crd-td">28,18, -115,22</td></tr>
<tr><td class="crd-td"><strong>Coxcatlán Cave Settlement</strong></td><td class="crd-td">Gulf Olmec and Veracruz Lowlands</td><td class="crd-td">8500BC</td><td class="crd-td">480 (1000BC)</td><td class="crd-td">18,23, -97,15</td></tr>
<tr><td class="crd-td"><strong>Guilá Naquitz Shelter</strong></td><td class="crd-td">Oaxaca and Mixteca Sierra-Valleys</td><td class="crd-td">8500BC</td><td class="crd-td">62 (5000BC)</td><td class="crd-td">16,95, -96,43</td></tr>
<tr><td class="crd-td"><strong>Espiritu Santo Island Camp</strong></td><td class="crd-td">Arid Northern Interior and Baja California</td><td class="crd-td">6500BC</td><td class="crd-td">235 (600AD)</td><td class="crd-td">24,48, -110,35</td></tr>
<tr><td class="crd-td"><strong>Gheo-Shih Camp</strong></td><td class="crd-td">Gulf Olmec and Veracruz Lowlands</td><td class="crd-td">5500BC</td><td class="crd-td">98 (4500BC)</td><td class="crd-td">16,94, -96,41</td></tr>
<tr><td class="crd-td"><strong>Tlapacoya Site</strong></td><td class="crd-td">Basin of Mexico and Central Highlands</td><td class="crd-td">5000BC</td><td class="crd-td">1,6k (400BC)</td><td class="crd-td">19,3, -98,91</td></tr>
<tr><td class="crd-td"><strong>Cuatro Cienegas Camp</strong></td><td class="crd-td">Arid Northern Interior and Baja California</td><td class="crd-td">5000BC</td><td class="crd-td">245 (700AD)</td><td class="crd-td">26,99, -102,07</td></tr>
<tr><td class="crd-td"><strong>Boca de Potrerillos Site</strong></td><td class="crd-td">Arid Northern Interior and Baja California</td><td class="crd-td">4500BC</td><td class="crd-td">280 (1000AD)</td><td class="crd-td">26,06, -100,65</td></tr>
<tr><td class="crd-td"><strong>Sierra de San Francisco Shelter</strong></td><td class="crd-td">Arid Northern Interior and Baja California</td><td class="crd-td">4000BC</td><td class="crd-td">340 (1100AD)</td><td class="crd-td">27,6, -113,06</td></tr>
<tr><td class="crd-td"><strong>Santa Luisa Site</strong></td><td class="crd-td">Basin of Mexico and Central Highlands</td><td class="crd-td">2500BC</td><td class="crd-td">1,4k (400AD)</td><td class="crd-td">20,47, -97,02</td></tr>
<tr><td class="crd-td"><strong>La Playa Sonora Site</strong></td><td class="crd-td">Arid Northern Interior and Baja California</td><td class="crd-td">1800BC</td><td class="crd-td">685 (100AD)</td><td class="crd-td">30,48, -111,53</td></tr>
<tr><td class="crd-td"><strong>Ajalpan Site</strong></td><td class="crd-td">Gulf Olmec and Veracruz Lowlands</td><td class="crd-td">1500BC</td><td class="crd-td">2,4k (300AD)</td><td class="crd-td">18,38, -97,26</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Twelve earliest catalogued Archaic and Early Formative habitation sites across Mexico ordered by earliest dated occupation (9000BC to 1000BC).</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

All settlement coordinates, chronological spans, provenance categories and regional totals in Tables \ref{tab:top30-sites} through \ref{tab:earliest-sites} are computed directly from the chapter settlement register, summary cache and source ledger. Every entry carries city-proper population scope with zero duplicate suburban double-counting.
