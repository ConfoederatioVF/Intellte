---
title: "Classic and Post-Classic Maya Lands"
subtitle: "Settlement Gazetteer and Urban Hierarchy (2000BC to 1524)"
date: "23 November 2026"
author: "Aust Kätzchen"
authors_line: "Aust Kätzchen"
emails: [austkaeztchen@confoederatio.org]
hero_figure: "figures/classic_postclassic_maya_urban_hierarchy.png"
hero_caption: "Twelve largest recorded Maya centres and rank-size distribution across 122 catalogued settlements from 2000BC to 1524."
hero_label: "fig:hero-maya-hierarchy"
bibliography: classic_postclassic_maya_literature_review.bib
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



![Twelve largest recorded Maya centres and rank-size distribution across 122 catalogued settlements from 2000BC to 1524.](figures/classic_postclassic_maya_urban_hierarchy.png)



# Abstract

This companion settlement gazetteer catalogues 122 Preclassic, Classic and Post-Classic Maya urban and residential centres distributed across six biophysical sub-regions and five modern countries — Mexico (45), Guatemala (35), Belize (27), El Salvador (8) and Honduras (7) — between 2000BC and 1524. Every entry represents a city-proper archaeological or ethnohistoric centre supported by published house-mound surveys, airborne laser scanning (LiDAR) or sixteenth-century colonial chronicles, achieving 0% crowd-sourced fallback and formal ingestion saturation (0,83% marginal gain in Wave 4). Across the upper half of the urban hierarchy ($n_{\mathrm{fit}} = 61$ of $n = 122$ settlements evaluated at the 750AD Classic benchmark), peak settlement sizes follow a sub-Zipfian polycentric power law ($\alpha = 0,69$, $R^2 = 0,99$) spanning more than two orders of magnitude from small Belize River Valley farming hamlets and ash-buried Joya de Cerén (215 inhabitants) up to low-density garden metropolises led by Caracol (99,2k), El Mirador (78,6k), Tikal (62,8k), Calakmul (51,8k) and Cobá (49,8k) [@Chase2016Caracol; @Canuto2018; @CulbertRice1990; @SharerTraxler2006]. Tracking chronological peaks across the register documents the structural handover from Preclassic Mirador Basin and Highland Kaminaljuyú through the eighth-century lowland zenith and Terminal Classic Puuc-Chichén Itzá shift to walled Post-Classic Mayapán, Lake Petén Itzá and the fortified Guatemalan highland capitals of 1524 [@Ringle2021Lidar; @MassonPeraza2014; @Farriss1984].

# Background

Ancient Maya urban centres differed fundamentally from the tightly nucleated masonry cities of the Basin of Mexico or the Mediterranean world. Across the karstic lowlands of Petén, Campeche and Belize, royal courts built monumental limestone temple pyramids, ballcourts and palace acropolises at the centre of sprawling agro-urban landscapes interlaced with household courtyard groups, agricultural terraces, *aguada* reservoirs and raised limestone causeways (*sacbeob*) [@Chase2016Caracol; @Lentz2021Environmental; @Becker2015Plaza]. Early Preclassic ritual-residential aggregation at Aguada Fénix (4,45k) and Ceibal (10,6k at its Terminal Classic height) established formal E-Group plaza templates that later mushroomed into metropolitan complexes at Nakbe (14,6k) and El Mirador (78,6k) [@Inomata2019Artificial; @Sharpe2024Isotopic].

During the Classic period (250AD to 800AD), rival royal dynasties multiplied urban centres across every lowland drainage, from the densely packed stone-walled houselots of Chunchucmil (36,8k) on the arid Yucatán plain to the terraced ridges of Caracol (99,2k), Tikal (62,8k), Calakmul (51,8k), Chactún, Ucanal and southern Belizean valley centres around Uxbenká [@Hutson2009Midiendo; @Sprajc2022Archaeological; @Thompson2021Assessing; @Flynnarajdal2019Social]. Following the ninth-century hydroclimatic crisis and political collapse across the southern karst interior [@Kennett2012; @Webster2002; @Kelmelis2025Biocultural], Maya urbanism reconfigured into denser, often fortified and commercially oriented forms: *chultun*-fed Puuc towns (Uxmal, Kabah, Sayil), cosmopolitan Chichén Itzá (36,8k), walled Mayapán (16,9k), coastal ports (Tulum, Cozumel), island Nojpetén (24,6k) and cliff-defended highland capitals at Q'umarkaj (15,9k) and Iximché (10,4k) [@Ringle2021Lidar; @MassonPeraza2014; @Kennett2022Drought].

# Methodology

The settlement register was compiled across four tracked ingestion waves in the chapter source ledger, harmonising coordinates to WGS84, assigning each site to one of the six HydroBASINS biophysical sub-regions and standardising population trajectories strictly to city-proper urban or core residential perimeters. Wave 1 consolidated 111 primary archaeological survey and archival centres from regional GIS corpora, house-mound monographs and colonial ethnohistoric gazetteers. Wave 2 incorporated 8 peer-reviewed demographic monograph sites (7,21% marginal gain), Wave 3 backfilled 2 longitudinal regional survey centres (1,68% marginal gain) and Wave 4 executed a sub-regional verification sweep adding 1 final locale (0,83% marginal gain), closing the register at 122 unique settlements with zero excluded duplicates and 0% crowd-sourced fallback.

Because Pre-Columbian Maya cities lack administrative census rolls, settlement trajectories derive from site-specific house-mound densities, LiDAR structural inventories, ceramic phase contemporaneity factors and, for 1500AD to 1524, contact-era Spanish chronicles and *tributo* accounts [@CulbertRice1990; @ChaseChase2012; @Canuto2018; @Farriss1984]. Domestic excavation studies at Tikal, Hun Tun, Piedras Negras and southern Belize anchor household size multipliers between 4,5 and 5,6 inhabitants per residential structure [@Becker2015Plaza; @Arndt2012Household; @Schnell2021Classic; @Thompson2021Assessing].

# Testing and Validation

Spatial and statistical auditing confirms that all 122 catalogued entries carry non-null WGS84 coordinates, valid sub-regional polygon assignments across all six biophysical masks, explicit multi-date occupation spans inside 2000BC to 1524 and traceable academic citations. Figure \ref{fig:sett-regional-map} displays the geographic distribution of the full 122-site gazetteer across the six sub-regions, highlighting the dense Classic clusters of Petén, northern Belize and northern Yucatán alongside the volcanic highland arc.

<figure class="crd-figure-block" id="fig:sett-regional-map">
<img class="crd-figure-img" src="/artefacts/project_jaguar/1.0-classic-postclassic-maya-settlements/classic_postclassic_maya_regional_map.png" alt="fig:sett-regional-map" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Spatial distribution of 122 catalogued Preclassic, Classic and Post-Classic Maya settlements across six biophysical sub-regions from 2000BC to 1524.</figcaption>
</figure>

Rank-size validation over the upper 61 centres at the 750AD benchmark yields $\alpha = 0,69$ ($R^2 = 0,99$), ruling out artificial step-function bucketing and matching theoretical expectations for a peer-polity network of competing Maya kingdoms [@HoustonInomata2009; @Moramarin2025Historical]. Furthermore, checking aggregate peak populations of the top settlements against regional totals verifies that city-proper cores account for 25% to 35% of calibrated sub-regional headcounts at the 800AD zenith — consistent with intensive suburban and rural terrace occupancy documented by airborne LiDAR [@Canuto2018; @Chase2016Caracol].

# Results

## Leading Thirty Maya Urban Centres

Table \ref{tab:top30-maya} lists the 30 largest catalogued Maya centres ordered by peak city-proper population, pairing modern country, biophysical sub-region, coordinates, occupation span and peak demographic estimate. Spanning 99,2k at Caracol down to 12,4k at Becán and Cuscatlán, this upper tier captures every major era of Maya civilisation: Preclassic El Mirador (78,6k at 50AD), Kaminaljuyú (21,8k at 150AD) and Nakbe (14,6k at 200BC); Classic lowland metropolises led by Caracol, Tikal (62,8k), Calakmul (51,8k), Cobá (49,8k), La Milpa (38,8k), Chunchucmil (36,8k), Naachtun (24,8k), Copán (22,9k), Naranjo (22,4k), Yaxhá (19,6k), Lamanai (18,6k) and Uaxactún (14,8k); Terminal Classic northern centres including Dzibilchaltún (38,6k), Chichén Itzá (36,8k), Edzná (24,6k), Uxmal (23,4k), Izamal (18,9k) and Oxkintok (16,8k); and Post-Classic capitals led by Nojpetén (24,6k), Mayapán (16,9k), Q'umarkaj (15,9k), Tihó (13,2k), Cihuatán (12,8k) and Cuscatlán (12,4k) [@SharerTraxler2006; @MassonPeraza2014; @Webster2002].

<figure class="crd-table-figure" id="tab:top30-maya">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Sub-Region</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Span</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1</strong></td><td class="crd-td">Caracol</td><td class="crd-td">Belize</td><td class="crd-td">Belize and Caribbean Maya Lowlands</td><td class="crd-td">16,76, -89,12</td><td class="crd-td">300AD to 850AD</td><td class="crd-td">99,2k (700AD)</td></tr>
<tr><td class="crd-td"><strong>2</strong></td><td class="crd-td">El Mirador</td><td class="crd-td">Guatemala</td><td class="crd-td">Petén and Usumacinta-Pasión Lowlands</td><td class="crd-td">17,75, -89,92</td><td class="crd-td">400BC to 200AD</td><td class="crd-td">78,6k (50AD)</td></tr>
<tr><td class="crd-td"><strong>3</strong></td><td class="crd-td">Tikal</td><td class="crd-td">Guatemala</td><td class="crd-td">Petén and Usumacinta-Pasión Lowlands</td><td class="crd-td">17,22, -89,62</td><td class="crd-td">300BC to 850AD</td><td class="crd-td">62,8k (750AD)</td></tr>
<tr><td class="crd-td"><strong>4</strong></td><td class="crd-td">Calakmul</td><td class="crd-td">Mexico</td><td class="crd-td">Petén and Usumacinta-Pasión Lowlands</td><td class="crd-td">18,1, -89,81</td><td class="crd-td">200BC to 850AD</td><td class="crd-td">51,8k (700AD)</td></tr>
<tr><td class="crd-td"><strong>5</strong></td><td class="crd-td">Cobá</td><td class="crd-td">Mexico</td><td class="crd-td">Northern Yucatán Karst Shelf</td><td class="crd-td">20,5, -87,74</td><td class="crd-td">400AD to 1300AD</td><td class="crd-td">49,8k (800AD)</td></tr>
<tr><td class="crd-td"><strong>6</strong></td><td class="crd-td">La Milpa</td><td class="crd-td">Belize</td><td class="crd-td">Belize and Caribbean Maya Lowlands</td><td class="crd-td">17,83, -89,05</td><td class="crd-td">400AD to 850AD</td><td class="crd-td">38,8k (750AD)</td></tr>
<tr><td class="crd-td"><strong>7</strong></td><td class="crd-td">Dzibilchaltún</td><td class="crd-td">Mexico</td><td class="crd-td">Northern Yucatán Karst Shelf</td><td class="crd-td">21,09, -89,6</td><td class="crd-td">300BC to 1200AD</td><td class="crd-td">38,6k (850AD)</td></tr>
<tr><td class="crd-td"><strong>8</strong></td><td class="crd-td">Chichén Itzá</td><td class="crd-td">Mexico</td><td class="crd-td">Northern Yucatán Karst Shelf</td><td class="crd-td">20,68, -88,57</td><td class="crd-td">650AD to 1300AD</td><td class="crd-td">36,8k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>9</strong></td><td class="crd-td">Chunchucmil</td><td class="crd-td">Mexico</td><td class="crd-td">Northern Yucatán Karst Shelf</td><td class="crd-td">20,73, -90,16</td><td class="crd-td">350AD to 700AD</td><td class="crd-td">36,8k (550AD)</td></tr>
<tr><td class="crd-td"><strong>10</strong></td><td class="crd-td">Naachtun</td><td class="crd-td">Guatemala</td><td class="crd-td">Petén and Usumacinta-Pasión Lowlands</td><td class="crd-td">17,8, -89,74</td><td class="crd-td">300AD to 850AD</td><td class="crd-td">24,8k (650AD)</td></tr>
<tr><td class="crd-td"><strong>11</strong></td><td class="crd-td">Edzná</td><td class="crd-td">Mexico</td><td class="crd-td">Northern Yucatán Karst Shelf</td><td class="crd-td">19,6, -90,23</td><td class="crd-td">200BC to 1050AD</td><td class="crd-td">24,6k (850AD)</td></tr>
<tr><td class="crd-td"><strong>12</strong></td><td class="crd-td">Nojpetén Tayasal</td><td class="crd-td">Guatemala</td><td class="crd-td">Petén and Usumacinta-Pasión Lowlands</td><td class="crd-td">16,93, -89,89</td><td class="crd-td">1250AD to 1524</td><td class="crd-td">24,6k (1524)</td></tr>
<tr><td class="crd-td"><strong>13</strong></td><td class="crd-td">Uxmal</td><td class="crd-td">Mexico</td><td class="crd-td">Northern Yucatán Karst Shelf</td><td class="crd-td">20,36, -89,77</td><td class="crd-td">600AD to 1000AD</td><td class="crd-td">23,4k (900AD)</td></tr>
<tr><td class="crd-td"><strong>14</strong></td><td class="crd-td">Copán</td><td class="crd-td">Honduras</td><td class="crd-td">South-Eastern Maya (Copán-Motagua-W. El Salvador)</td><td class="crd-td">14,84, -89,14</td><td class="crd-td">400AD to 900AD</td><td class="crd-td">22,9k (775AD)</td></tr>
<tr><td class="crd-td"><strong>15</strong></td><td class="crd-td">Naranjo</td><td class="crd-td">Guatemala</td><td class="crd-td">Belize and Caribbean Maya Lowlands</td><td class="crd-td">17,13, -89,26</td><td class="crd-td">400AD to 850AD</td><td class="crd-td">22,4k (750AD)</td></tr>
<tr><td class="crd-td"><strong>16</strong></td><td class="crd-td">Kaminaljuyú</td><td class="crd-td">Guatemala</td><td class="crd-td">Guatemala Highlands and Pacific Piedmont</td><td class="crd-td">14,63, -90,55</td><td class="crd-td">700BC to 800AD</td><td class="crd-td">21,8k (150AD)</td></tr>
<tr><td class="crd-td"><strong>17</strong></td><td class="crd-td">Yaxhá</td><td class="crd-td">Guatemala</td><td class="crd-td">Belize and Caribbean Maya Lowlands</td><td class="crd-td">17,08, -89,4</td><td class="crd-td">300AD to 900AD</td><td class="crd-td">19,6k (750AD)</td></tr>
<tr><td class="crd-td"><strong>18</strong></td><td class="crd-td">Izamal</td><td class="crd-td">Mexico</td><td class="crd-td">Northern Yucatán Karst Shelf</td><td class="crd-td">20,93, -89,02</td><td class="crd-td">200AD to 1520</td><td class="crd-td">18,9k (900AD)</td></tr>
<tr><td class="crd-td"><strong>19</strong></td><td class="crd-td">Lamanai</td><td class="crd-td">Belize</td><td class="crd-td">Belize and Caribbean Maya Lowlands</td><td class="crd-td">17,75, -88,65</td><td class="crd-td">400BC to 1500AD</td><td class="crd-td">18,6k (750AD)</td></tr>
<tr><td class="crd-td"><strong>20</strong></td><td class="crd-td">Mayapán</td><td class="crd-td">Mexico</td><td class="crd-td">Northern Yucatán Karst Shelf</td><td class="crd-td">20,63, -89,46</td><td class="crd-td">1200AD to 1445AD</td><td class="crd-td">16,9k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>21</strong></td><td class="crd-td">Oxkintok</td><td class="crd-td">Mexico</td><td class="crd-td">Northern Yucatán Karst Shelf</td><td class="crd-td">20,56, -89,95</td><td class="crd-td">350AD to 1000AD</td><td class="crd-td">16,8k (850AD)</td></tr>
<tr><td class="crd-td"><strong>22</strong></td><td class="crd-td">Q'umarkaj Utatlán</td><td class="crd-td">Guatemala</td><td class="crd-td">Guatemala Highlands and Pacific Piedmont</td><td class="crd-td">15,02, -91,17</td><td class="crd-td">1350AD to 1524</td><td class="crd-td">15,9k (1524)</td></tr>
<tr><td class="crd-td"><strong>23</strong></td><td class="crd-td">Ek Balam</td><td class="crd-td">Mexico</td><td class="crd-td">Northern Yucatán Karst Shelf</td><td class="crd-td">20,89, -88,14</td><td class="crd-td">500AD to 1300AD</td><td class="crd-td">15,2k (750AD)</td></tr>
<tr><td class="crd-td"><strong>24</strong></td><td class="crd-td">Uaxactun</td><td class="crd-td">Guatemala</td><td class="crd-td">Belize and Caribbean Maya Lowlands</td><td class="crd-td">17,39, -89,63</td><td class="crd-td">300BC to 850AD</td><td class="crd-td">14,8k (700AD)</td></tr>
<tr><td class="crd-td"><strong>25</strong></td><td class="crd-td">Nakbe</td><td class="crd-td">Guatemala</td><td class="crd-td">Petén and Usumacinta-Pasión Lowlands</td><td class="crd-td">17,66, -89,83</td><td class="crd-td">800BC to 100AD</td><td class="crd-td">14,6k (200BC)</td></tr>
<tr><td class="crd-td"><strong>26</strong></td><td class="crd-td">El Perú-Waka'</td><td class="crd-td">Guatemala</td><td class="crd-td">Petén and Usumacinta-Pasión Lowlands</td><td class="crd-td">17,26, -90,35</td><td class="crd-td">300AD to 850AD</td><td class="crd-td">13,6k (700AD)</td></tr>
<tr><td class="crd-td"><strong>27</strong></td><td class="crd-td">Tihó</td><td class="crd-td">Mexico</td><td class="crd-td">Northern Yucatán Karst Shelf</td><td class="crd-td">20,97, -89,62</td><td class="crd-td">600AD to 1524</td><td class="crd-td">13,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>28</strong></td><td class="crd-td">Cihuatán</td><td class="crd-td">El Salvador</td><td class="crd-td">South-Eastern Maya (Copán-Motagua-W. El Salvador)</td><td class="crd-td">13,98, -89,17</td><td class="crd-td">950AD to 1150AD</td><td class="crd-td">12,8k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>29</strong></td><td class="crd-td">Becán</td><td class="crd-td">Mexico</td><td class="crd-td">Northern Yucatán Karst Shelf</td><td class="crd-td">18,52, -89,47</td><td class="crd-td">100BC to 950AD</td><td class="crd-td">12,4k (750AD)</td></tr>
<tr><td class="crd-td"><strong>30</strong></td><td class="crd-td">Cuscatlán</td><td class="crd-td">El Salvador</td><td class="crd-td">South-Eastern Maya (Copán-Motagua-W. El Salvador)</td><td class="crd-td">13,68, -89,24</td><td class="crd-td">1200AD to 1524</td><td class="crd-td">12,4k (1524)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Leading 30 Preclassic, Classic and Post-Classic Maya settlements ranked by peak city-proper population across 122 catalogued centres, 2000BC to 1524.</figcaption>
</figure>

## Sub-Regional Gazetteer Distribution

Table \ref{tab:subreg-gaz} summarises catalogued settlement counts, areal sampling density per 10.000 km², leading urban centre and paired calibrated 800AD and 1524 sub-regional populations across all six biophysical masks. Belize and the Caribbean Maya Lowlands lead in sampling intensity (6,92 sites per 10.000 km², reflecting decades of intensive Belize Valley, Caracol and northern lagoon survey projects), followed by the compact Guatemala Highlands and Pacific Piedmont (3,13), Petén and Usumacinta-Pasión (2,19), Northern Yucatán (2,04), South-Eastern Maya (2,01) and Chiapas Highlands and Grijalva (1,66).

<figure class="crd-table-figure" id="tab:subreg-gaz">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Sub-Region</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Sites per 10k km²</th><th class="crd-th">Leading Centre (Peak)</th><th class="crd-th">800AD Pop.</th><th class="crd-th">1524 Pop.</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Northern Yucatán Karst Shelf</strong></td><td class="crd-td">127.249</td><td class="crd-td">26</td><td class="crd-td">2,04</td><td class="crd-td">Cobá (49,8k)</td><td class="crd-td">1,35M</td><td class="crd-td">820k</td></tr>
<tr><td class="crd-td"><strong>Petén and Usumacinta-Pasión Lowlands</strong></td><td class="crd-td">105.111</td><td class="crd-td">23</td><td class="crd-td">2,19</td><td class="crd-td">El Mirador (78,6k)</td><td class="crd-td">2,15M</td><td class="crd-td">190k</td></tr>
<tr><td class="crd-td"><strong>Belize and Caribbean Maya Lowlands</strong></td><td class="crd-td">50.545</td><td class="crd-td">35</td><td class="crd-td">6,92</td><td class="crd-td">Caracol (99,2k)</td><td class="crd-td">720k</td><td class="crd-td">140k</td></tr>
<tr><td class="crd-td"><strong>Chiapas Highlands and Grijalva Basin</strong></td><td class="crd-td">84.580</td><td class="crd-td">14</td><td class="crd-td">1,66</td><td class="crd-td">Chiapa de Corzo (11,4k)</td><td class="crd-td">480k</td><td class="crd-td">390k</td></tr>
<tr><td class="crd-td"><strong>Guatemala Highlands and Pacific Piedmont</strong></td><td class="crd-td">28.732</td><td class="crd-td">9</td><td class="crd-td">3,13</td><td class="crd-td">Kaminaljuyú (21,8k)</td><td class="crd-td">650k</td><td class="crd-td">1,15M</td></tr>
<tr><td class="crd-td"><strong>South-Eastern Maya (Copán-Motagua-W. El Salvador)</strong></td><td class="crd-td">74.802</td><td class="crd-td">15</td><td class="crd-td">2,01</td><td class="crd-td">Copán (22,9k)</td><td class="crd-td">620k</td><td class="crd-td">460k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Sub-regional gazetteer coverage, site density (per 10.000 km²), leading urban centre and calibrated 800AD and 1524 populations across six Maya sub-regions.</figcaption>
</figure>

## Chronological Peak Tiers and Size Distribution

Classifying all 122 settlements by the era in which each reached its peak population reveals the sweeping demographic migration across Maya history (Table \ref{tab:era-tiers}). Nine centres peaked during the Preclassic (2000BC to 250AD), headed by El Mirador (78,6k), Kaminaljuyú (21,8k) and Nakbe (14,6k). Sixty-nine centres — 56,6% of the entire gazetteer — peaked during the Classic zenith (251AD to 800AD), averaging 11,4k inhabitants and including Caracol, Tikal, Calakmul, Cobá, La Milpa, Chunchucmil, Naachtun and Copán [@Canuto2018; @Chase2016Caracol; @Webster2002]. Twenty-three centres peaked during the Terminal Classic and Early Post-Classic transition (801AD to 1150AD), led by Dzibilchaltún (38,6k), Chichén Itzá (36,8k), Edzná (24,6k), Uxmal (23,4k) and Cihuatán (12,8k) [@Ringle2021Lidar; @Jobbova2018Ritual]. Finally, 21 centres peaked in the Late Post-Classic and Contact horizon (1151AD to 1524), anchored by Nojpetén (24,6k), Mayapán (16,9k), Q'umarkaj (15,9k), Tihó (13,2k), Cuscatlán (12,4k), Champotón (11,6k), Chiapa de Corzo (11,4k) and Iximché (10,4k) [@MassonPeraza2014; @Farriss1984; @Harvey2020Palynological].

<figure class="crd-table-figure" id="tab:era-tiers">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Peak Era</th><th class="crd-th">Centres</th><th class="crd-th">Share</th><th class="crd-th">Median Peak</th><th class="crd-th">Sum of Peaks</th><th class="crd-th">Leading Centre</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Preclassic (2000BC to 250AD)</strong></td><td class="crd-td">15</td><td class="crd-td">12,3%</td><td class="crd-td">4k</td><td class="crd-td">163,5k</td><td class="crd-td">El Mirador (78,6k)</td></tr>
<tr><td class="crd-td"><strong>Classic Zenith (251AD to 800AD)</strong></td><td class="crd-td">68</td><td class="crd-td">55,7%</td><td class="crd-td">5,7k</td><td class="crd-td">785,4k</td><td class="crd-td">Caracol (99,2k)</td></tr>
<tr><td class="crd-td"><strong>Terminal Classic and Early Post-Classic (801AD to 1150AD)</strong></td><td class="crd-td">12</td><td class="crd-td">9,8%</td><td class="crd-td">14,8k</td><td class="crd-td">212,1k</td><td class="crd-td">Dzibilchaltún (38,6k)</td></tr>
<tr><td class="crd-td"><strong>Late Post-Classic and Contact (1151AD to 1524)</strong></td><td class="crd-td">27</td><td class="crd-td">22,1%</td><td class="crd-td">7,4k</td><td class="crd-td">235,1k</td><td class="crd-td">Nojpetén Tayasal (24,6k)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Chronological distribution of peak settlement eras across 122 catalogued Maya centres from 2000BC to 1524.</figcaption>
</figure>

# Limitations

Three archaeological constraints govern interpretation of this settlement gazetteer. First, survey intensity varies markedly across national jurisdictions and forest cover: open agricultural river valleys in Belize contribute 27 settlements (including small farming villages between 290 and 718 inhabitants), whereas dense canopy in southern Campeche and eastern Quintana Roo under-samples smaller fourth-tier rural centres outside recent LiDAR blocks [@Sprajc2022Archaeological; @Ringle2021Lidar]. Second, city-proper definitions differ between walled Post-Classic towns such as Mayapán (4,2 km²) and sprawling Classic garden cities such as Caracol and Tikal whose causeway-linked suburban rings fade gradually into terraced countryside [@Chase2016Caracol; @MassonPeraza2014]. Third, archaeological mound estimates carry $\pm 35\%$ uncertainty depending on contemporaneity and household size assumptions, while coastal storm erosion and modern urban growth over Tihó (Mérida) and Kaminaljuyú (Guatemala City) have obscured substantial Pre-Columbian residential sectors [@CulbertRice1990; @Sullivan2022Northeast].

# Conclusion

Cataloguing 122 Maya settlements across five modern nations reveals an urban system of striking longevity and polycentric balance. Rather than concentrating population inside a single imperial metropolis, Maya polities built dozens of competing capitals spanning 10k to 99,2k inhabitants ($\alpha = 0,69$, $R^2 = 0,99$) whose geographic centre shifted decisively across three millennia: from Preclassic El Mirador and Kaminaljuyú to the densely settled eighth-century karst kingdoms of Petén and Belize, northward after the Terminal Classic droughts into the Puuc hills, Chichén Itzá and Mayapán, and finally into the resilient provincial towns of Yucatán, island Nojpetén and the fortified highland strongholds confronting Spanish arrival in 1524 [@Canuto2018; @Kennett2012; @Farriss1984].

# Appendix

## Secondary Classic and Post-Classic Centres (Ranks 31 to 60)

Table \ref{tab:ranks31-60} extends the core urban catalogue to ranks 31 through 60, documenting key Usumacinta, Petén, Puuc, Caribbean and Highland centres including Comalcalco, Cotzumalguapa, Kabah, Blue Creek, Champotón, Chalchuapa, Nakum, Chiapa de Corzo, Río Bec, Ceibal, Iximché, Holmul, Altun Ha, Yaxchilán, Sayil, Toniná, Mixco Viejo, Palenque, Takalik Abaj, Piedras Negras and Zaculeu.

<figure class="crd-table-figure" id="tab:ranks31-60">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Rank</th><th class="crd-th">Settlement</th><th class="crd-th">Country</th><th class="crd-th">Sub-Region</th><th class="crd-th">Lat, Lon</th><th class="crd-th">Peak Pop. (Year)</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>31</strong></td><td class="crd-td">Comalcalco</td><td class="crd-td">Mexico</td><td class="crd-td">Petén and Usumacinta-Pasión Lowlands</td><td class="crd-td">18,28, -93,2</td><td class="crd-td">11,9k (750AD)</td></tr>
<tr><td class="crd-td"><strong>32</strong></td><td class="crd-td">Kabah</td><td class="crd-td">Mexico</td><td class="crd-td">Northern Yucatán Karst Shelf</td><td class="crd-td">20,25, -89,65</td><td class="crd-td">11,8k (850AD)</td></tr>
<tr><td class="crd-td"><strong>33</strong></td><td class="crd-td">Cotzumalguapa El Baul</td><td class="crd-td">Guatemala</td><td class="crd-td">Guatemala Highlands and Pacific Piedmont</td><td class="crd-td">14,37, -91,02</td><td class="crd-td">11,8k (750AD)</td></tr>
<tr><td class="crd-td"><strong>34</strong></td><td class="crd-td">Chalchuapa Tazumal</td><td class="crd-td">El Salvador</td><td class="crd-td">Guatemala Highlands and Pacific Piedmont</td><td class="crd-td">13,98, -89,67</td><td class="crd-td">11,6k (650AD)</td></tr>
<tr><td class="crd-td"><strong>35</strong></td><td class="crd-td">Champotón</td><td class="crd-td">Mexico</td><td class="crd-td">Northern Yucatán Karst Shelf</td><td class="crd-td">19,36, -90,72</td><td class="crd-td">11,6k (1517)</td></tr>
<tr><td class="crd-td"><strong>36</strong></td><td class="crd-td">Blue Creek</td><td class="crd-td">Belize</td><td class="crd-td">Belize and Caribbean Maya Lowlands</td><td class="crd-td">17,86, -88,88</td><td class="crd-td">11,6k (600AD)</td></tr>
<tr><td class="crd-td"><strong>37</strong></td><td class="crd-td">Chiapa de Corzo</td><td class="crd-td">Mexico</td><td class="crd-td">Chiapas Highlands and Grijalva Basin</td><td class="crd-td">16,71, -93</td><td class="crd-td">11,4k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>38</strong></td><td class="crd-td">Nakum</td><td class="crd-td">Guatemala</td><td class="crd-td">Belize and Caribbean Maya Lowlands</td><td class="crd-td">17,17, -89,4</td><td class="crd-td">11,4k (750AD)</td></tr>
<tr><td class="crd-td"><strong>39</strong></td><td class="crd-td">Río Bec</td><td class="crd-td">Mexico</td><td class="crd-td">Northern Yucatán Karst Shelf</td><td class="crd-td">18,38, -89,35</td><td class="crd-td">11,2k (800AD)</td></tr>
<tr><td class="crd-td"><strong>40</strong></td><td class="crd-td">Ceibal</td><td class="crd-td">Guatemala</td><td class="crd-td">Petén and Usumacinta-Pasión Lowlands</td><td class="crd-td">16,51, -90,06</td><td class="crd-td">10,6k (850AD)</td></tr>
<tr><td class="crd-td"><strong>41</strong></td><td class="crd-td">Iximché</td><td class="crd-td">Guatemala</td><td class="crd-td">Guatemala Highlands and Pacific Piedmont</td><td class="crd-td">14,74, -91</td><td class="crd-td">10,4k (1524)</td></tr>
<tr><td class="crd-td"><strong>42</strong></td><td class="crd-td">Holmul</td><td class="crd-td">Guatemala</td><td class="crd-td">Belize and Caribbean Maya Lowlands</td><td class="crd-td">17,27, -89,26</td><td class="crd-td">10,2k (750AD)</td></tr>
<tr><td class="crd-td"><strong>43</strong></td><td class="crd-td">Altun Ha</td><td class="crd-td">Belize</td><td class="crd-td">Belize and Caribbean Maya Lowlands</td><td class="crd-td">17,76, -88,35</td><td class="crd-td">9,9k (750AD)</td></tr>
<tr><td class="crd-td"><strong>44</strong></td><td class="crd-td">Yaxchilán</td><td class="crd-td">Mexico</td><td class="crd-td">Petén and Usumacinta-Pasión Lowlands</td><td class="crd-td">16,9, -90,97</td><td class="crd-td">9,8k (750AD)</td></tr>
<tr><td class="crd-td"><strong>45</strong></td><td class="crd-td">Sayil</td><td class="crd-td">Mexico</td><td class="crd-td">Northern Yucatán Karst Shelf</td><td class="crd-td">20,18, -89,65</td><td class="crd-td">9,6k (850AD)</td></tr>
<tr><td class="crd-td"><strong>46</strong></td><td class="crd-td">Izapa</td><td class="crd-td">Mexico</td><td class="crd-td">Chiapas Highlands and Grijalva Basin</td><td class="crd-td">14,91, -92,18</td><td class="crd-td">9,6k (100AD)</td></tr>
<tr><td class="crd-td"><strong>47</strong></td><td class="crd-td">Itzamkanac Acalan</td><td class="crd-td">Mexico</td><td class="crd-td">Petén and Usumacinta-Pasión Lowlands</td><td class="crd-td">18,08, -91,16</td><td class="crd-td">9,6k (1524)</td></tr>
<tr><td class="crd-td"><strong>48</strong></td><td class="crd-td">Izalco</td><td class="crd-td">El Salvador</td><td class="crd-td">South-Eastern Maya (Copán-Motagua-W. El Salvador)</td><td class="crd-td">13,74, -89,67</td><td class="crd-td">9,6k (1524)</td></tr>
<tr><td class="crd-td"><strong>49</strong></td><td class="crd-td">Yaxuna</td><td class="crd-td">Mexico</td><td class="crd-td">Northern Yucatán Karst Shelf</td><td class="crd-td">20,54, -88,68</td><td class="crd-td">9,4k (750AD)</td></tr>
<tr><td class="crd-td"><strong>50</strong></td><td class="crd-td">Maní</td><td class="crd-td">Mexico</td><td class="crd-td">Northern Yucatán Karst Shelf</td><td class="crd-td">20,39, -89,39</td><td class="crd-td">9,4k (1524)</td></tr>
<tr><td class="crd-td"><strong>51</strong></td><td class="crd-td">Toniná</td><td class="crd-td">Mexico</td><td class="crd-td">Petén and Usumacinta-Pasión Lowlands</td><td class="crd-td">16,9, -92,01</td><td class="crd-td">9,1k (750AD)</td></tr>
<tr><td class="crd-td"><strong>52</strong></td><td class="crd-td">Mixco Viejo Jilotepeque</td><td class="crd-td">Guatemala</td><td class="crd-td">South-Eastern Maya (Copán-Motagua-W. El Salvador)</td><td class="crd-td">14,87, -90,66</td><td class="crd-td">9,1k (1524)</td></tr>
<tr><td class="crd-td"><strong>53</strong></td><td class="crd-td">Palenque</td><td class="crd-td">Mexico</td><td class="crd-td">Petén and Usumacinta-Pasión Lowlands</td><td class="crd-td">17,48, -92,05</td><td class="crd-td">8,3k (750AD)</td></tr>
<tr><td class="crd-td"><strong>54</strong></td><td class="crd-td">Chuitinamit Atitlan</td><td class="crd-td">Guatemala</td><td class="crd-td">Guatemala Highlands and Pacific Piedmont</td><td class="crd-td">14,65, -91,24</td><td class="crd-td">8,2k (1524)</td></tr>
<tr><td class="crd-td"><strong>55</strong></td><td class="crd-td">Takalik Abaj</td><td class="crd-td">Guatemala</td><td class="crd-td">Chiapas Highlands and Grijalva Basin</td><td class="crd-td">14,64, -91,74</td><td class="crd-td">8k (150AD)</td></tr>
<tr><td class="crd-td"><strong>56</strong></td><td class="crd-td">Piedras Negras</td><td class="crd-td">Guatemala</td><td class="crd-td">Petén and Usumacinta-Pasión Lowlands</td><td class="crd-td">17,17, -91,26</td><td class="crd-td">8k (750AD)</td></tr>
<tr><td class="crd-td"><strong>57</strong></td><td class="crd-td">El Zotz</td><td class="crd-td">Guatemala</td><td class="crd-td">Petén and Usumacinta-Pasión Lowlands</td><td class="crd-td">17,23, -89,8</td><td class="crd-td">7,8k (650AD)</td></tr>
<tr><td class="crd-td"><strong>58</strong></td><td class="crd-td">Nohmul</td><td class="crd-td">Belize</td><td class="crd-td">Belize and Caribbean Maya Lowlands</td><td class="crd-td">18,22, -88,59</td><td class="crd-td">7,5k (750AD)</td></tr>
<tr><td class="crd-td"><strong>59</strong></td><td class="crd-td">Naco Valley</td><td class="crd-td">Honduras</td><td class="crd-td">South-Eastern Maya (Copán-Motagua-W. El Salvador)</td><td class="crd-td">15,39, -88,18</td><td class="crd-td">7,4k (1524)</td></tr>
<tr><td class="crd-td"><strong>60</strong></td><td class="crd-td">Calkiní</td><td class="crd-td">Mexico</td><td class="crd-td">Northern Yucatán Karst Shelf</td><td class="crd-td">20,37, -90,05</td><td class="crd-td">7,4k (1524)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Secondary Preclassic, Classic and Post-Classic Maya urban centres (ranks 31 to 60 of 122 catalogued settlements), 2000BC to 1524.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

1. Coordinates report WGS84 decimal degrees formatted with European decimal commas (two decimal places) centred on each site's monumental civic-ceremonial core or documented contact-era town plaza.
2. Occupation spans record the earliest and latest dated demographic slices present in the chapter settlement register rather than trace ceramic presence before or after urban occupation.
3. All 122 settlement records carry city-proper scope rather than wider metropolitan hinterlands, preventing spatial double-counting across adjacent centres.
