---
title: "The Aztec Empire and Late Post-Classic Mexico"
subtitle: "Settlement Gazetteer and Urban Hierarchy (1200AD to 1519)"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/aztec_late_postclassic_mexico_urban_hierarchy.png"
hero_caption: "Twelve largest Late Post-Classic Mexican settlements and log-log rank-size distribution across 289 settlements from 1200AD to 1519."
hero_label: "fig:hero-aztec-hierarchy"
bibliography: aztec_late_postclassic_mexico_literature_review.bib
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



![Twelve largest Late Post-Classic Mexican settlements and log-log rank-size distribution across 289 settlements from 1200AD to 1519.](figures/aztec_late_postclassic_mexico_urban_hierarchy.png)



# Abstract

This companion settlement gazetteer catalogues 289 Late Post-Classic cities, *altepetl* capitals, provincial towns and archaeologically surveyed villages across eight political and ecological sub-regions of central, western and northern Mexico between 1200AD and 1519. Assembled through four sequential ingestion waves out of 291 evaluated historical and archaeological candidates—with strictly 0% crowd-sourced fallback share and two out-of-bounds Gulf Maya port exclusions (Potonchán and Xicalango)—the register unites 172 full-coverage Basin of Mexico pedestrian survey settlements with 117 ethnohistoric capitals, LiDAR-mapped urban complexes and provincial *cabeceras* stretching from Oaxaca to Sinaloa and Chihuahua [@SandersParsonsSantley1979; @Smith2008AztecCity; @Pollard1993]. Every entry uses a city-proper boundary definition to prevent suburban double-counting across lakeshore wards. Rank-size analysis across the upper 144 locales yields a strongly primate imperial scaling curve ($\alpha = 0,86$, $R^2 = 0,75$) dominated by Tenochtitlan-Tlatelolco at 212,5k inhabitants in 1519, standing 5,77 times larger than second-ranked Cholula (36,8k) and more than six times larger than rival Purépecha Tzintzuntzan (31,9k) and autonomous Tlaxcala (31,4k) [@Rojas2012; @Calnek1972; @Berdan2014].

# Background

Urbanism in Late Post-Classic Mexico combined deep Mesoamerican city-state traditions with unprecedented imperial centralisation. Across the central highlands, the *altepetl* formed the cellular unit of social, fiscal and ceremonial life: a nucleated capital housing royal palaces, temple precincts and periodic marketplaces surrounded by dependent agrarian hamlets [@Smith2008AztecCity; @Offner1983]. Following the foundation of Tenochtitlan around 1325AD and the Triple Alliance victory over Azcapotzalco in 1428, lake-borne canoe logistics and *chinampa* hydraulic intensification elevated the Basin of Mexico into an integrated metropolitan constellation anchored by Tenochtitlan-Tlatelolco, Texcoco, Tlacopan, Xochimilco, Chalco and Coyoacán [@Calnek1972; @Hassig1985; @Carrasco1999; @Rodriguez2025Another].

Beyond the Basin of Mexico, independent and rival polities sustained their own multi-tiered urban hierarchies. Across the Puebla-Tlaxcala valley stood Cholula, Tlaxcala and Huejotzingo; in Michoacán, airborne LiDAR and architectural ground-truthing at Angamuco-Zacapu alongside historical archaeology at Tzintzuntzan document the urban consolidation of the Purépecha monarchy [@Bush2007Architectural; @Harris2019Viewed; @Friedl2019Pyramids; @Diaz2012Colonial]. Further afield, Mixtec and Zapotec capitals in Oaxaca (Tututepec, Tehuantepec-Guiengola, Zaachila, Yanhuitlán, Teposcolula and Mitla), Totonac and Huastec centres along the Gulf Coast (Cempoala, Tamohi and Pánuco-Chila), independent *cacicazgos* across Jalisco, Colima and Nayarit (Tonalá, Sayula, Almoloyan-Colima and Etzatlán) and irrigated river towns on the northwestern frontier (Culiacán, Chametla and Paquimé) connected central Mexican *pochteca* merchants to continental trade arteries [@Arcuri2003Trade; @Lugo2019Nonlinearity; @Berdan2014].

# Methodology

The settlement register was constructed in four auditable ingestion waves recorded in the chapter source ledger. Wave 1 ingested 264 primary entries uniting the ASU Basin of Mexico Settlement Persistence Dataset (derived from full-coverage pedestrian surveys) with canonical historical geography registers for central, southern, western and northern New Spain [@SandersParsonsSantley1979; @Smith2008AztecCity]. Wave 2 incorporated 19 peer-reviewed demographic monographs and airborne LiDAR site reconstructions (marginal gain 7,2%), Wave 3 added 4 longitudinal archaeological survey records (1,41%), and Wave 4 closed regional frontier gaps with 2 final settlements (0,7%), meeting the sub-1% saturation convergence criterion with zero crowd-sourced entries.

All 291 evaluated candidate records were harmonised to WGS84 coordinates, clipped against the eight-region equal-area mask (excluding Potonchán and Xicalango, which belong to Chapter 02 on Maya lands) and audited for boundary scope. Twin or contiguous wards functioning as one integrated polity—notably Tenochtitlan and Tlatelolco after 1473AD—are merged under a single city-proper population series [@Rojas2012; @Smith2012Aztecs]. Because pedestrian survey ceramics inside the Basin of Mexico capture multi-decadal Aztec II to IV phase peaks (centred around 1412AD and 1498AD) whereas ethnohistoric capitals are anchored to 1519, each entry retains its full chronological trajectory alongside its peak recorded figure [@SandersParsonsSantley1979; @Whitmore1992].

# Testing and Validation

Ledger reconciliation confirms exact accounting across all 291 evaluated candidates: 289 included settlements and 2 out-of-bounds coastal exclusions, with zero missing coordinates, zero negative population entries and zero unattributed rows. Spatial plotting across all eight sub-regions (Figure \ref{fig:sett-regional-map}) confirms full geographic coverage from the Basin of Mexico and Oaxaca through Michoacán, Jalisco, Veracruz, Sinaloa and Chihuahua.

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_jaguar/1.0-aztec-late-postclassic-mexico-settlements/aztec_late_postclassic_mexico_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 289 catalogued Late Post-Classic settlements across eight sub-regions of central, western and northern Mexico, 1200AD to 1519.</figcaption>
</figure>

Cross-checking urban totals against sub-regional trajectories highlights two key boundary diagnostics. First, summed peak urban populations inside the Basin of Mexico Triple Alliance Core reach 643,8k inhabitants (643.847) across 191 surveyed sites, corroborating the 2,35M ethnohistoric core benchmark (27,4% gross peak ratio) while demonstrating why coarse 1500AD gridded cropland layers (141,7k) systematically under-estimate hydraulic urban basins [@SandersParsonsSantley1979; @Whitmore1992]. Second, snapping sub-regional masks to HydroBASINS Level 6 drainage divides assigns northeastern Lake Pátzcuaro and Zacapu locales (Angamuco-Zacapu, Tzintzuntzan, Pátzcuaro and Ihuatzio) to the western lobe of the Central Aztec Tributary Provinces polygon in automated spatial joins; political interpretation keeps these four royal centres firmly within the Purépecha state [@Pollard1993].

# Results

## Thirty Largest Late Post-Classic Settlements

Table \ref{tab:top30-settlements} lists the thirty largest settlements in the chapter register, ordered by peak recorded population between 1200AD and 1519. Spanning Tenochtitlan at 212,5k down to Tlacopan at 12,6k, the top tier unites the Triple Alliance capitals, autonomous Puebla-Tlaxcala rivals, Purépecha urban seats, Gulf Totonacapan, Morelos cotton centres, Mixtec-Zapotec kingdoms and West Mexican Tonalá.

<figure class="crd-table-figure" id="tab:top30-settlements">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Settlement</th><th class="crd-th">Sub-Region</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Recorded Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Tenochtitlan</td><td class="crd-td">Basin of Mexico Core</td><td class="crd-td">19,43, -99,13</td><td class="crd-td">1325AD to 1519</td><td class="crd-td">212,5k (1519)</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">Cholula</td><td class="crd-td">Tlaxcala-Puebla Enclaves</td><td class="crd-td">19,06, -98,3</td><td class="crd-td">1250AD to 1519</td><td class="crd-td">36,8k (1519)</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Angamuco-Zacapu</td><td class="crd-td">Central Tributary Prov.</td><td class="crd-td">19,74, -101,62</td><td class="crd-td">1250AD to 1519</td><td class="crd-td">34,4k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Tzintzuntzan</td><td class="crd-td">Central Tributary Prov.</td><td class="crd-td">19,63, -101,58</td><td class="crd-td">1350AD to 1519</td><td class="crd-td">31,9k (1519)</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Tlaxcala</td><td class="crd-td">Tlaxcala-Puebla Enclaves</td><td class="crd-td">19,32, -98,24</td><td class="crd-td">1300AD to 1519</td><td class="crd-td">31,4k (1519)</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">Chimalhuacán</td><td class="crd-td">Basin of Mexico Core</td><td class="crd-td">19,41, -98,94</td><td class="crd-td">1300AD to 1498AD</td><td class="crd-td">28,3k (1412AD)</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Chalco</td><td class="crd-td">Basin of Mexico Core</td><td class="crd-td">19,26, -98,9</td><td class="crd-td">1300AD to 1498AD</td><td class="crd-td">26,8k (1412AD)</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Azcapotzalco</td><td class="crd-td">Basin of Mexico Core</td><td class="crd-td">19,49, -99,19</td><td class="crd-td">1250AD to 1519</td><td class="crd-td">26,8k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Huejotzingo</td><td class="crd-td">Tlaxcala-Puebla Enclaves</td><td class="crd-td">19,16, -98,4</td><td class="crd-td">1250AD to 1519</td><td class="crd-td">24,9k (1519)</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Texcoco</td><td class="crd-td">Basin of Mexico Core</td><td class="crd-td">19,51, -98,88</td><td class="crd-td">1250AD to 1519</td><td class="crd-td">24,8k (1519)</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Cempoala</td><td class="crd-td">Gulf Huasteca-Totonac.</td><td class="crd-td">19,45, -96,41</td><td class="crd-td">1250AD to 1519</td><td class="crd-td">24,4k (1519)</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Xochimilco</td><td class="crd-td">Basin of Mexico Core</td><td class="crd-td">19,26, -99,1</td><td class="crd-td">1250AD to 1519</td><td class="crd-td">23,4k (1519)</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Tlalmanalco</td><td class="crd-td">Basin of Mexico Core</td><td class="crd-td">19,21, -98,8</td><td class="crd-td">1300AD to 1498AD</td><td class="crd-td">20,4k (1412AD)</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Tututepec</td><td class="crd-td">Mixtec-Zapotec Oaxaca</td><td class="crd-td">16,13, -97,6</td><td class="crd-td">1250AD to 1519</td><td class="crd-td">17,4k (1519)</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Cuauhnáhuac (Cuernavaca)</td><td class="crd-td">Central Tributary Prov.</td><td class="crd-td">18,92, -99,22</td><td class="crd-td">1250AD to 1519</td><td class="crd-td">16,9k (1519)</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">Coixtlahuaca</td><td class="crd-td">Central Tributary Prov.</td><td class="crd-td">17,72, -97,32</td><td class="crd-td">1300AD to 1519</td><td class="crd-td">16,9k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Coyoacán</td><td class="crd-td">Basin of Mexico Core</td><td class="crd-td">19,35, -99,16</td><td class="crd-td">1300AD to 1519</td><td class="crd-td">16,6k (1519)</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">Tehuantepec-Guiengola</td><td class="crd-td">Mixtec-Zapotec Oaxaca</td><td class="crd-td">16,36, -95,32</td><td class="crd-td">1400AD to 1519</td><td class="crd-td">16,5k (1519)</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">Huexotla</td><td class="crd-td">Basin of Mexico Core</td><td class="crd-td">19,48, -98,87</td><td class="crd-td">1250AD to 1519</td><td class="crd-td">16,4k (1519)</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">Amecameca</td><td class="crd-td">Basin of Mexico Core</td><td class="crd-td">19,12, -98,77</td><td class="crd-td">1275AD to 1498AD</td><td class="crd-td">15,8k (1412AD)</td></tr>
<tr><td class="crd-td"><strong>21</strong></td><td class="crd-td">Yautepec</td><td class="crd-td">Central Tributary Prov.</td><td class="crd-td">18,88, -99,07</td><td class="crd-td">1250AD to 1519</td><td class="crd-td">14,8k (1519)</td></tr>
<tr><td class="crd-td"><strong>22</strong></td><td class="crd-td">Iztapalapa</td><td class="crd-td">Basin of Mexico Core</td><td class="crd-td">19,36, -99,07</td><td class="crd-td">1350AD to 1519</td><td class="crd-td">14,4k (1519)</td></tr>
<tr><td class="crd-td"><strong>23</strong></td><td class="crd-td">Tepeaca</td><td class="crd-td">Tlaxcala-Puebla Enclaves</td><td class="crd-td">18,97, -97,9</td><td class="crd-td">1300AD to 1519</td><td class="crd-td">14,4k (1519)</td></tr>
<tr><td class="crd-td"><strong>24</strong></td><td class="crd-td">Zaachila</td><td class="crd-td">Mixtec-Zapotec Oaxaca</td><td class="crd-td">16,95, -96,75</td><td class="crd-td">1250AD to 1519</td><td class="crd-td">13,9k (1519)</td></tr>
<tr><td class="crd-td"><strong>25</strong></td><td class="crd-td">Cuautitlán</td><td class="crd-td">Basin of Mexico Core</td><td class="crd-td">19,67, -99,18</td><td class="crd-td">1250AD to 1519</td><td class="crd-td">13,8k (1519)</td></tr>
<tr><td class="crd-td"><strong>26</strong></td><td class="crd-td">Yanhuitlán</td><td class="crd-td">Mixtec-Zapotec Oaxaca</td><td class="crd-td">17,53, -97,34</td><td class="crd-td">1300AD to 1519</td><td class="crd-td">13,8k (1519)</td></tr>
<tr><td class="crd-td"><strong>27</strong></td><td class="crd-td">Izúcar</td><td class="crd-td">Central Tributary Prov.</td><td class="crd-td">18,6, -98,47</td><td class="crd-td">1300AD to 1519</td><td class="crd-td">12,9k (1519)</td></tr>
<tr><td class="crd-td"><strong>28</strong></td><td class="crd-td">Tonalá</td><td class="crd-td">Purépecha Michoacán</td><td class="crd-td">20,62, -103,24</td><td class="crd-td">1300AD to 1519</td><td class="crd-td">12,8k (1519)</td></tr>
<tr><td class="crd-td"><strong>29</strong></td><td class="crd-td">Cuilapan</td><td class="crd-td">Mixtec-Zapotec Oaxaca</td><td class="crd-td">16,99, -96,78</td><td class="crd-td">1350AD to 1519</td><td class="crd-td">12,7k (1519)</td></tr>
<tr><td class="crd-td"><strong>30</strong></td><td class="crd-td">Tlacopan</td><td class="crd-td">Basin of Mexico Core</td><td class="crd-td">19,46, -99,19</td><td class="crd-td">1350AD to 1519</td><td class="crd-td">12,6k (1519)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Thirty largest Late Post-Classic settlements across central, western and northern Mexico, 1200AD to 1519.</figcaption>
</figure>

## Sub-Regional Gazetteer Distribution

Table \ref{tab:subregion-gazetteer} aggregates settlement counts, spatial recovery density per 10.000 km², leading catalogued settlement, 1500AD gridded population and 1519 ethnohistoric benchmark totals across all eight sub-regions. Full-coverage archaeological fieldwalking gives the Basin of Mexico Triple Alliance Core an exceptional sampling intensity of 96,92 sites per 10.000 km² (191 sites, 66,1% of the gazetteer), compared with 3,61 per 10.000 km² across Tlaxcala-Puebla, 2,6 across Central Aztec Tributary Provinces, 1,24 to 1,26 across Oaxaca and the Gulf littoral, 1,12 across West Mexico, 0,67 inside the western Michoacán polygon and 0,14 across the vast northern Chichimeca frontier.

<figure class="crd-table-figure" id="tab:subregion-gazetteer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Sites per 10k km²</th><th class="crd-th">Leading City (Peak)</th><th class="crd-th">1500AD Grid</th><th class="crd-th">1519 Bench.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Basin of Mexico Triple Alliance Core</strong></td><td class="crd-td">19.706</td><td class="crd-td">191</td><td class="crd-td">96,92</td><td class="crd-td">Tenochtitlan (212,5k)</td><td class="crd-td">141,7k</td><td class="crd-td">2,35M</td></tr>
<tr><td class="crd-td"><strong>Tlaxcala and Independent Highland Enclaves</strong></td><td class="crd-td">19.395</td><td class="crd-td">7</td><td class="crd-td">3,61</td><td class="crd-td">Cholula (36,8k)</td><td class="crd-td">118,3k</td><td class="crd-td">680k</td></tr>
<tr><td class="crd-td"><strong>Central Aztec Tributary Provinces</strong></td><td class="crd-td">122.981</td><td class="crd-td">32</td><td class="crd-td">2,6</td><td class="crd-td">Angamuco-Zacapu (34,4k)</td><td class="crd-td">478,3k</td><td class="crd-td">3,75M</td></tr>
<tr><td class="crd-td"><strong>Purépecha (Tarascan) Michoacán Empire</strong></td><td class="crd-td">89.549</td><td class="crd-td">6</td><td class="crd-td">0,67</td><td class="crd-td">Tonalá (12,8k)</td><td class="crd-td">312,3k</td><td class="crd-td">1,25M</td></tr>
<tr><td class="crd-td"><strong>Mixtec-Zapotec Oaxaca</strong></td><td class="crd-td">112.640</td><td class="crd-td">14</td><td class="crd-td">1,24</td><td class="crd-td">Tututepec (17,4k)</td><td class="crd-td">374,4k</td><td class="crd-td">1,65M</td></tr>
<tr><td class="crd-td"><strong>Gulf Huasteca and Totonacapan</strong></td><td class="crd-td">87.114</td><td class="crd-td">11</td><td class="crd-td">1,26</td><td class="crd-td">Cempoala (24,4k)</td><td class="crd-td">242,4k</td><td class="crd-td">1,15M</td></tr>
<tr><td class="crd-td"><strong>West Mexico Cacicazgos (Jalisco-Colima-Nayarit)</strong></td><td class="crd-td">97.928</td><td class="crd-td">11</td><td class="crd-td">1,12</td><td class="crd-td">Sayula (9,3k)</td><td class="crd-td">294,6k</td><td class="crd-td">1,08M</td></tr>
<tr><td class="crd-td"><strong>Northern Chichimeca and Aridoamerica</strong></td><td class="crd-td">1.237.024</td><td class="crd-td">17</td><td class="crd-td">0,14</td><td class="crd-td">Culiacán (11,9k)</td><td class="crd-td">1,24M</td><td class="crd-td">890k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Sub-regional settlement counts, areal sampling density (per 10.000 km²), leading catalogued city, 1500AD gridded population and 1519 ethnohistoric benchmark across eight Mexican sub-regions.</figcaption>
</figure>

## Size-Class Stratification and Urban Rank-Size Scaling

Across all 289 catalogued settlements, peak sizes divide cleanly into four functional tiers matching Late Post-Classic Mesoamerican political economy [@Smith2008AztecCity; @Berdan2014]. At the apex stands Tenochtitlan-Tlatelolco alone (212,5k), forming an imperial primate tier more than five times above any secondary centre. Beneath it sit 41 major regional capitals and prosperous *altepetl* between 10k and 40k inhabitants—including Cholula (36,8k), Angamuco-Zacapu (34,4k), Tzintzuntzan (31,9k), Tlaxcala (31,4k), Chimalhuacán (28,3k), Chalco (26,8k), Azcapotzalco (26,8k), Huejotzingo (24,9k), Texcoco (24,8k), Cempoala (24,4k), Xochimilco (23,4k), Tututepec (17,4k), Cuauhnáhuac (16,9k), Coixtlahuaca (16,9k), Zaachila (13,9k), Tonalá (12,8k), Tlacopan (12,6k), Culiacán (11,9k), Metztitlán (11,6k) and Mitla (10,9k). A broad third tier comprises 96 secondary market towns and tributary *cabeceras* between 1k and 10k inhabitants (spanning provincial hubs from Tamohi, Pánuco-Chila, Sayula, Almoloyan-Colima and Etzatlán to Paquimé at 4,3k and Querétaro at 3,9k), while 151 smaller Basin of Mexico farming villages and hamlets below 1k inhabitants (down to 26 residents) represent the agrarian base recovered by intensive field survey [@SandersParsonsSantley1979; @Ciriaco2020Escuelas].

# Limitations

Three evidentiary constraints shape spatial interpretation of this gazetteer. First, survey resolution is sharply uneven: the ASU Basin of Mexico dataset records hamlets down to 26 inhabitants, whereas provincial regions outside Lake Texcoco rely primarily on named documentary *cabeceras* and major excavated or LiDAR-mapped cities above 1k residents, steepening the lower tail of the rank-size curve beyond rank 110 [@SandersParsonsSantley1979; @Harris2019Viewed]. Second, modern urban expansion across Greater Mexico City, Cuernavaca and Morelia obscures substantial Late Post-Classic residential zones beneath colonial and contemporary streets [@Rosas2009Socio; @Maldonadocarrizales2021Riqueza]. Third, asynchronous peak dates separate fourteenth-century urban apogees such as Angamuco-Zacapu (1350AD), Paquimé (1350AD) and Azcapotzalco (1400AD) from contact-eve 1519 summits at Tenochtitlan, Tzintzuntzan, Tlaxcala and Cempoala, so aggregate peak sums exceed simultaneous single-year urban headcounts [@Pollard1993; @Whitmore1992].

# Conclusion

Cataloguing 289 Late Post-Classic settlements across 1,79M km² reveals a deeply urbanised pre-Columbian landscape crowned by Tenochtitlan-Tlatelolco (212,5k) yet sustained by dozens of resilient regional capitals from Cholula, Tlaxcala and Tzintzuntzan to Tututepec, Cempoala, Tonalá and Culiacán. Maintaining strict city-proper accounting, zero crowd-sourced fallback entries and full four-wave source transparency provides a clean urban baseline for tracking the catastrophic sixteenth-century demographic contraction that followed 1519 [@Whitmore1992; @Smith2012Aztecs].

# Appendix

## Provenance Corpus Breakdown

Table \ref{tab:provenance-breakdown} groups the 289 catalogued settlements by primary source family, showing the balance between systematic Basin of Mexico archaeological field surveys, colonial historical geography syntheses, regional archaeological monographs and airborne LiDAR inventories.

<figure class="crd-table-figure" id="tab:provenance-breakdown">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Source Corpus Family</th><th class="crd-th">Settlements</th><th class="crd-th">Share</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>ASU Basin of Mexico Pedestrian Survey</strong></td><td class="crd-td">177</td><td class="crd-td">61,25%</td></tr>
<tr><td class="crd-td"><strong>Regional Ethnohistoric and Archaeological Monographs</strong></td><td class="crd-td">30</td><td class="crd-td">10,38%</td></tr>
<tr><td class="crd-td"><strong>Colonial Historical Geography Registers (Gerhard)</strong></td><td class="crd-td">28</td><td class="crd-td">9,69%</td></tr>
<tr><td class="crd-td"><strong>Aztec City-State and Basin Ethnohistory</strong></td><td class="crd-td">19</td><td class="crd-td">6,57%</td></tr>
<tr><td class="crd-td"><strong>Oaxaca Mixtec-Zapotec Regional Surveys</strong></td><td class="crd-td">12</td><td class="crd-td">4,15%</td></tr>
<tr><td class="crd-td"><strong>Purépecha Archaeology and LiDAR Surveys</strong></td><td class="crd-td">9</td><td class="crd-td">3,11%</td></tr>
<tr><td class="crd-td"><strong>Northwestern and Aridoamerican Archaeology</strong></td><td class="crd-td">8</td><td class="crd-td">2,77%</td></tr>
<tr><td class="crd-td"><strong>Codex Mendoza and Imperial Tribute Rolls</strong></td><td class="crd-td">6</td><td class="crd-td">2,08%</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Primary provenance corpus breakdown across 289 Late Post-Classic Mexican settlements (1200AD to 1519).</figcaption>
</figure>

## Representative Frontier and Provincial Anchors (Ranks 31 to 55)

Table \ref{tab:provincial-anchors} documents ranks 31 through 55 of the settlement register, illustrating the rich mid-tier urban layer spanning Morelos, Oaxaca, Sinaloa, Michoacán, the Gulf Coast and West Mexico.

<figure class="crd-table-figure" id="tab:provincial-anchors">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Settlement</th><th class="crd-th">Sub-Region</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>31</strong></td><td class="crd-td">Huaxtepec</td><td class="crd-td">Central Tributary Prov.</td><td class="crd-td">18,91, -98,97</td><td class="crd-td">12,4k (1519)</td></tr>
<tr><td class="crd-td"><strong>32</strong></td><td class="crd-td">Teposcolula</td><td class="crd-td">Mixtec-Zapotec Oaxaca</td><td class="crd-td">17,51, -97,49</td><td class="crd-td">11,9k (1519)</td></tr>
<tr><td class="crd-td"><strong>33</strong></td><td class="crd-td">Culiacán</td><td class="crd-td">Northern Frontier</td><td class="crd-td">24,81, -107,39</td><td class="crd-td">11,9k (1519)</td></tr>
<tr><td class="crd-td"><strong>34</strong></td><td class="crd-td">Calixtlahuaca</td><td class="crd-td">Central Tributary Prov.</td><td class="crd-td">19,34, -99,69</td><td class="crd-td">11,8k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>35</strong></td><td class="crd-td">Metztitlán</td><td class="crd-td">Gulf Huasteca-Totonac.</td><td class="crd-td">20,59, -98,76</td><td class="crd-td">11,6k (1519)</td></tr>
<tr><td class="crd-td"><strong>36</strong></td><td class="crd-td">Pátzcuaro</td><td class="crd-td">Central Tributary Prov.</td><td class="crd-td">19,51, -101,61</td><td class="crd-td">11,6k (1519)</td></tr>
<tr><td class="crd-td"><strong>37</strong></td><td class="crd-td">Cuetlaxtlan Cotaxtla</td><td class="crd-td">Central Tributary Prov.</td><td class="crd-td">18,84, -96,39</td><td class="crd-td">11,5k (1519)</td></tr>
<tr><td class="crd-td"><strong>38</strong></td><td class="crd-td">Coatlinchan</td><td class="crd-td">Basin of Mexico Core</td><td class="crd-td">19,45, -98,87</td><td class="crd-td">11,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>39</strong></td><td class="crd-td">Otumba</td><td class="crd-td">Basin of Mexico Core</td><td class="crd-td">19,7, -98,76</td><td class="crd-td">11,4k (1519)</td></tr>
<tr><td class="crd-td"><strong>40</strong></td><td class="crd-td">Tolocan Toluca</td><td class="crd-td">Central Tributary Prov.</td><td class="crd-td">19,29, -99,66</td><td class="crd-td">11,4k (1519)</td></tr>
<tr><td class="crd-td"><strong>41</strong></td><td class="crd-td">Culhuacan</td><td class="crd-td">Basin of Mexico Core</td><td class="crd-td">19,33, -99,12</td><td class="crd-td">11k (1412AD)</td></tr>
<tr><td class="crd-td"><strong>42</strong></td><td class="crd-td">Mitla</td><td class="crd-td">Mixtec-Zapotec Oaxaca</td><td class="crd-td">16,93, -96,36</td><td class="crd-td">10,9k (1519)</td></tr>
<tr><td class="crd-td"><strong>43</strong></td><td class="crd-td">Tehuacan</td><td class="crd-td">Central Tributary Prov.</td><td class="crd-td">18,46, -97,39</td><td class="crd-td">9,9k (1519)</td></tr>
<tr><td class="crd-td"><strong>44</strong></td><td class="crd-td">Tamohi</td><td class="crd-td">Gulf Huasteca-Totonac.</td><td class="crd-td">22,01, -98,88</td><td class="crd-td">9,9k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>45</strong></td><td class="crd-td">Huaquechula</td><td class="crd-td">Central Tributary Prov.</td><td class="crd-td">18,77, -98,54</td><td class="crd-td">9,8k (1519)</td></tr>
<tr><td class="crd-td"><strong>46</strong></td><td class="crd-td">Pánuco-Chila</td><td class="crd-td">Gulf Huasteca-Totonac.</td><td class="crd-td">22,05, -98,18</td><td class="crd-td">9,8k (1519)</td></tr>
<tr><td class="crd-td"><strong>47</strong></td><td class="crd-td">Tenayuca</td><td class="crd-td">Basin of Mexico Core</td><td class="crd-td">19,53, -99,17</td><td class="crd-td">9,6k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>48</strong></td><td class="crd-td">Tlaxiaco</td><td class="crd-td">Mixtec-Zapotec Oaxaca</td><td class="crd-td">17,27, -97,68</td><td class="crd-td">9,6k (1519)</td></tr>
<tr><td class="crd-td"><strong>49</strong></td><td class="crd-td">Tecamachalco</td><td class="crd-td">Tlaxcala-Puebla Enclaves</td><td class="crd-td">18,88, -97,73</td><td class="crd-td">9,4k (1519)</td></tr>
<tr><td class="crd-td"><strong>50</strong></td><td class="crd-td">Tulancingo</td><td class="crd-td">Gulf Huasteca-Totonac.</td><td class="crd-td">20,08, -98,36</td><td class="crd-td">9,3k (1519)</td></tr>
<tr><td class="crd-td"><strong>51</strong></td><td class="crd-td">Sayula</td><td class="crd-td">West Mexico Cacicazgos</td><td class="crd-td">19,88, -103,6</td><td class="crd-td">9,3k (1519)</td></tr>
<tr><td class="crd-td"><strong>52</strong></td><td class="crd-td">Cuitlahuac Tlahuac</td><td class="crd-td">Basin of Mexico Core</td><td class="crd-td">19,27, -99</td><td class="crd-td">9,2k (1519)</td></tr>
<tr><td class="crd-td"><strong>53</strong></td><td class="crd-td">Almoloyan (Colima)</td><td class="crd-td">West Mexico Cacicazgos</td><td class="crd-td">19,24, -103,72</td><td class="crd-td">8,9k (1519)</td></tr>
<tr><td class="crd-td"><strong>54</strong></td><td class="crd-td">Xilotepec</td><td class="crd-td">Basin of Mexico Core</td><td class="crd-td">19,95, -99,53</td><td class="crd-td">8,8k (1519)</td></tr>
<tr><td class="crd-td"><strong>55</strong></td><td class="crd-td">Ihuatzio</td><td class="crd-td">Central Tributary Prov.</td><td class="crd-td">19,56, -101,61</td><td class="crd-td">8,8k (1519)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Provincial and frontier settlements ranked 31 to 55 across Late Post-Classic Mexico, 1200AD to 1519.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

1. All 289 catalogued settlements adopt a city-proper boundary scope (0 suburban records); Tenochtitlan and Tlatelolco are treated as a unified island metropolis of 212,5k inhabitants by 1519.
2. Two coastal trading ports evaluated in the source ledger—Potonchán and Xicalango—fall east of the chapter areal mask inside the Tabasco-Campeche Maya littoral and are catalogued in Chapter 02.
3. Due to HydroBASINS Level 6 watershed geometry along the eastern Lake Pátzcuaro divide, Angamuco-Zacapu, Tzintzuntzan, Pátzcuaro and Ihuatzio are spatially indexed inside the western lobe of the Central Aztec Tributary Provinces mask polygon, though historically they constituted the urban heartland of the Purépecha (Tarascan) monarchy.
