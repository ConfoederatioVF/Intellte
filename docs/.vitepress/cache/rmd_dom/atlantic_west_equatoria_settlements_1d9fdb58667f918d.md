---
title: "Early Modern West Africa, Equatoria and Angola"
subtitle: "Settlement Gazetteer: 301 Cities, Ports and Towns (1500-1885)"
date: "23 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: atlantic_west_equatoria_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 301 individually assessed settlements across 24 modern countries and twelve historical sub-regions from Senegambia to southern Angola between 1500AD and 1885AD."
hero_label: "fig:hero-settlements-awe"

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
    template: ../../_shared/template/template.tex
    latex_engine: xelatex
    keep_tex: false
---



# Abstract

This gazetteer compiles coordinates and dated population series for 301 individually assessed settlements across Atlantic West Africa, Equatorial Africa and Angola between 1500AD and 1885AD, encompassing 820 archival observations across 24 modern countries. Screened from 338 candidate towns, royal capitals, European forts and market centres (37 excluded), the retained settlements span twelve historical sub-regions from Senegambia and Upper Guinea through Asante, Dahomey, Oyo-Yorubaland, Benin, the Niger Delta and Cameroon to Loango, Kongo, Angola, Kuba and the Luba-Lunda commonwealth. Active entries expand from 60 attested sites in 1500AD to 151 in 1700AD, 163 in 1800AD and 169 in 1850AD before consolidating at 83 late precolonial towns in 1880AD, documenting urban dynamics from Mbanza Congo (52k), Benin City (52,8k) and Old Oyo (99,8k) to nineteenth-century Ibadan (200k), Abeokuta (100k) and Ilorin (85k).



# Background

Early modern urbanism across Atlantic Africa developed within starkly different political and ecological settings [@Green2015AfricanKingdoms]. Along the Senegambian savanna and Upper Guinea estuaries, compact royal capitals and Luso-African or French river entrepôts mediated millet, rice, gold and gum commerce [@Havik2007PortOfGeba; @Howard1900MandeIdentity]. Across the Akan forest, the Dahomey Gap and Yorubaland, walled city-states and agrarian capitals supported dense populations backed by yam farming, ironworking and Atlantic-era maize and cassava [@Kirkgreene2001ComparativeStudy; @Monroe2014DahomeySlavery; @Ogundiran2009OyoFrontier]. South of the Niger Delta across Loango, Kongo, Angola and the Luba-Lunda interior, royal capitals and Portuguese presídios punctuated lower-density woodland and highland savannas [@Thornton1977KongoDemography; @Ferreira2011TheSuppression; @Coloniales1920CongoRevue].

# Methodology

## Candidate Screening and Spatial Partition

Candidate entries were compiled from Portuguese Angolan presídio censuses [@Ferreira2011TheSuppression; @Curto2005ResistenciaEscravidao], French Senegalese communal registers, Gold Coast and Nigerian enumerations, traveller eyewitness reports and archaeological transect surveys [@AgbajeWilliam1990NewsAnd; @Monroe2014DahomeySlavery; @Law1977OyoEmpire]. From 338 candidates located inside the 7,03M km² domain clipped to geoBoundaries outlines [@Runfola2020GeoBoundaries], 37 duplicate orthographies and non-settlement fragments were excluded, retaining 301 city-proper settlements across 24 countries. Every entry is mapped deterministically to one of the 12 historical sub-regions defined in the companion review.

## Population Assessment and Interpolation

All entries carry explicit city-proper population observations anchored to documented years rather than uniform caps or back-projections. Where primary archival or archaeological counts span multiple dates (such as Mbanza Congo from 1550AD to 1885AD or Luanda from 1580AD to 1885AD), Tables 1 to 12 report linearly interpolated values at five benchmark dates (1500AD, 1700AD, 1800AD, 1850AD and 1880AD) alongside each settlement's observed peak and peak year, marking periods outside a site's documented span with a hyphen (-).

# Testing and Validation

Across 299 spatially deduplicated settlements ($n = 299$), OLS rank-size regression on the upper 150 settlements yields a Pareto slope of $q = 0,81$ ($R^2 = 0,98$; Figure \ref{fig:settlements-rank}), matching a polycentric coastal-and-inland urban hierarchy rather than single-city primacy [@Ogundiran2009OyoFrontier; @AgbajeWilliam1990NewsAnd]. Typological screening confirms zero duplicate place-names at matching dates, zero unverified modern extrapolations and consistent alignment with historical foundation and abandonment dates [@Law1977OyoEmpire; @Thornton1977KongoDemography].

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-atlantic-west-equatoria-settlements/fig_03_rank_size.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size distribution across 299 spatially deduplicated settlements (top-150 OLS slope q = 0,81, R² = 0,98) and mean population densities of the ten densest sub-regions in 1880AD.</figcaption>
</figure>

# Results

## Wolof States, Futa Jallon and Kaabu

Table \ref{tab:zone1-sites} compiles 48 settlements across Senegal, Gambia, Guinea-Bissau, southern Mauritania, western Mali and northern Guinea, led by Saint-Louis (15.980 in 1878), Kansala (13,7k in 1850), Bakel (10,9k in 1863) and Labé [@Havik2007PortOfGeba].

<figure class="crd-table-figure" id="tab:zone1-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Saint-Louis</strong></td><td class="crd-td">SEN: 16,03, -16,49</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">10,2k</td><td class="crd-td">14,1k</td><td class="crd-td">-</td><td class="crd-td">16k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Kansala</strong></td><td class="crd-td">GNB: 12,32, -14,17</td><td class="crd-td">-</td><td class="crd-td">9,9k</td><td class="crd-td">12,5k</td><td class="crd-td">13,6k</td><td class="crd-td">-</td><td class="crd-td">13,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Bakel</strong></td><td class="crd-td">SEN: 14,91, -12,46</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,9k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">10,9k (1863AD)</td></tr>
<tr><td class="crd-td"><strong>Labé</strong></td><td class="crd-td">GIN: 11,33, -12,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">6,1k</td><td class="crd-td">6,8k</td><td class="crd-td">6,8k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Banjul</strong></td><td class="crd-td">GMB: 13,45, -16,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">6,1k</td><td class="crd-td">6,1k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Bissau</strong></td><td class="crd-td">GNB: 11,9, -15,59</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">3,6k</td><td class="crd-td">4,6k</td><td class="crd-td">6k</td><td class="crd-td">6,1k (1883AD)</td></tr>
<tr><td class="crd-td"><strong>Kahone</strong></td><td class="crd-td">SEN: 14,16, -16,04</td><td class="crd-td">2,4k</td><td class="crd-td">4,8k</td><td class="crd-td">5,3k</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">5,9k (1859AD)</td></tr>
<tr><td class="crd-td"><strong>Diakhao</strong></td><td class="crd-td">SEN: 14,46, -16,29</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">5,3k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">5,7k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Lambaye</strong></td><td class="crd-td">SEN: 14,78, -16,48</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">4,9k</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">5,5k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Kaédi</strong></td><td class="crd-td">MRT: 16,16, -13,5</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">4,9k</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">5,4k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Mboul</strong></td><td class="crd-td">SEN: 15,32, -16,65</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">5,1k</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Linguère</strong></td><td class="crd-td">SEN: 15,4, -15,12</td><td class="crd-td">5,1k</td><td class="crd-td">3,5k</td><td class="crd-td">3,2k</td><td class="crd-td">3k</td><td class="crd-td">2,9k</td><td class="crd-td">5,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Rufisque</strong></td><td class="crd-td">SEN: 14,72, -17,27</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,8k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">4,5k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Nioro du Rip</strong></td><td class="crd-td">SEN: 13,75, -15,77</td><td class="crd-td">1,8k</td><td class="crd-td">3,2k</td><td class="crd-td">3,9k</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">4,4k (1862AD)</td></tr>
<tr><td class="crd-td"><strong>Joal - Fadiouth</strong></td><td class="crd-td">SEN: 14,18, -16,85</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">3,8k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">3,9k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Mbour</strong></td><td class="crd-td">SEN: 14,44, -16,97</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Matam</strong></td><td class="crd-td">SEN: 15,65, -13,26</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,1k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Diourbel</strong></td><td class="crd-td">SEN: 14,67, -16,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,7k</td><td class="crd-td">3,1k</td><td class="crd-td">3,1k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Boké</strong></td><td class="crd-td">GIN: 10,94, -14,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1866AD)</td></tr>
<tr><td class="crd-td"><strong>Dakar</strong></td><td class="crd-td">SEN: 14,77, -17,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">3k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Geba</strong></td><td class="crd-td">GNB: 12,2, -14,85</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">3k</td><td class="crd-td">1,5k</td><td class="crd-td">3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Louga</strong></td><td class="crd-td">SEN: 15,62, -16,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Fatick</strong></td><td class="crd-td">SEN: 14,34, -16,42</td><td class="crd-td">1,7k</td><td class="crd-td">2,3k</td><td class="crd-td">2,7k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1859AD)</td></tr>
<tr><td class="crd-td"><strong>Bolama</strong></td><td class="crd-td">GNB: 11,58, -15,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1879AD)</td></tr>
<tr><td class="crd-td"><strong>Sélibabi</strong></td><td class="crd-td">MRT: 15,16, -12,17</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Cacheu</strong></td><td class="crd-td">GNB: 12,27, -16,17</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1640AD)</td></tr>
<tr><td class="crd-td"><strong>Sédhiou</strong></td><td class="crd-td">SEN: 12,7, -15,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,5k</td><td class="crd-td">2,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Ziguinchor</strong></td><td class="crd-td">SEN: 12,55, -16,27</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">2,2k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kayes</strong></td><td class="crd-td">MLI: 14,44, -11,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Thiès</strong></td><td class="crd-td">SEN: 14,78, -16,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Bafoulabe</strong></td><td class="crd-td">MLI: 13,81, -10,83</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1879AD)</td></tr>
<tr><td class="crd-td"><strong>Bignona</strong></td><td class="crd-td">SEN: 12,81, -16,23</td><td class="crd-td">1,5k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Brikama</strong></td><td class="crd-td">GMB: 13,27, -16,65</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kaffrine</strong></td><td class="crd-td">SEN: 14,1, -15,55</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Farim</strong></td><td class="crd-td">GNB: 12,49, -15,23</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,9k</td><td class="crd-td">2k</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1883AD)</td></tr>
<tr><td class="crd-td"><strong>Sonkunda</strong></td><td class="crd-td">GMB: 13,4, -13,9</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1730AD)</td></tr>
<tr><td class="crd-td"><strong>Tambacounda</strong></td><td class="crd-td">SEN: 13,76, -13,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Kolda</strong></td><td class="crd-td">SEN: 12,9, -14,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Buba</strong></td><td class="crd-td">GNB: 11,6, -14,98</td><td class="crd-td">945</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,5k (1869AD)</td></tr>
<tr><td class="crd-td"><strong>Kéniéba</strong></td><td class="crd-td">MLI: 12,86, -11,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,4k (1858AD)</td></tr>
<tr><td class="crd-td"><strong>Yelimane</strong></td><td class="crd-td">MLI: 15,13, -10,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Basse Santa Su</strong></td><td class="crd-td">GMB: 13,31, -14,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Janjanbureh</strong></td><td class="crd-td">GMB: 13,54, -14,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Kédougou</strong></td><td class="crd-td">SEN: 12,56, -12,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Oussouye</strong></td><td class="crd-td">SEN: 12,48, -16,55</td><td class="crd-td">895</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Kaur</strong></td><td class="crd-td">GMB: 13,7, -15,32</td><td class="crd-td">825</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1730AD)</td></tr>
<tr><td class="crd-td"><strong>Koundara</strong></td><td class="crd-td">GIN: 12,49, -13,3</td><td class="crd-td">785</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Catió</strong></td><td class="crd-td">GNB: 11,28, -15,25</td><td class="crd-td">-</td><td class="crd-td">765</td><td class="crd-td">885</td><td class="crd-td">945</td><td class="crd-td">981</td><td class="crd-td">985 (1883AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in the Wolof States, Futa Jallon and Kaabu from 1500AD to 1880AD with peak populations.</figcaption>
</figure>

## Sierra Leone, Grain Coast and Early Liberia

Table \ref{tab:zone2-sites} lists 32 settlements across Sierra Leone, Liberia, central Guinea and western Ivory Coast, headed by Freetown (21,9k in 1881), Timbo (9,14k in 1818), Kankan and Falaba [@Howard1900MandeIdentity].

<figure class="crd-table-figure" id="tab:zone2-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Freetown</strong></td><td class="crd-td">SLE: 8,35, -13,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">16,1k</td><td class="crd-td">21,7k</td><td class="crd-td">21,9k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Timbo</strong></td><td class="crd-td">GIN: 10,63, -11,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,6k</td><td class="crd-td">8,1k</td><td class="crd-td">-</td><td class="crd-td">9,1k (1818AD)</td></tr>
<tr><td class="crd-td"><strong>Kankan</strong></td><td class="crd-td">GIN: 10,4, -9,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">7,2k</td><td class="crd-td">-</td><td class="crd-td">8,5k (1879AD)</td></tr>
<tr><td class="crd-td"><strong>Falaba</strong></td><td class="crd-td">SLE: 9,86, -11,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">5,1k</td><td class="crd-td">4,2k</td><td class="crd-td">8k (1822AD)</td></tr>
<tr><td class="crd-td"><strong>Dinguiraye</strong></td><td class="crd-td">GIN: 11,29, -10,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,6k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Port Loko</strong></td><td class="crd-td">SLE: 8,77, -12,78</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">4,1k</td><td class="crd-td">4,7k</td><td class="crd-td">4,9k</td><td class="crd-td">4,9k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Bopolu</strong></td><td class="crd-td">LBR: 7,07, -10,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">4,7k (1868AD)</td></tr>
<tr><td class="crd-td"><strong>Bissandougou</strong></td><td class="crd-td">GIN: 10,17, -9,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Beyla</strong></td><td class="crd-td">GIN: 8,69, -8,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">4,2k</td><td class="crd-td">4,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Odienné</strong></td><td class="crd-td">CIV: 9,5, -7,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">4,1k</td><td class="crd-td">4,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Siguiri</strong></td><td class="crd-td">GIN: 11,43, -9,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Monrovia</strong></td><td class="crd-td">LBR: 6,35, -10,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,8k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Grand Cess</strong></td><td class="crd-td">LBR: 4,57, -8,22</td><td class="crd-td">1,8k</td><td class="crd-td">2,6k</td><td class="crd-td">3,4k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">3,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Bumban</strong></td><td class="crd-td">SLE: 9,12, -11,88</td><td class="crd-td">1,6k</td><td class="crd-td">2,2k</td><td class="crd-td">2,7k</td><td class="crd-td">3,4k</td><td class="crd-td">3,8k</td><td class="crd-td">3,8k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Bonthe</strong></td><td class="crd-td">SLE: 7,53, -12,51</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">2,9k</td><td class="crd-td">3,6k</td><td class="crd-td">3,6k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Kouroussa</strong></td><td class="crd-td">GIN: 10,65, -9,89</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1827AD)</td></tr>
<tr><td class="crd-td"><strong>Musaiya</strong></td><td class="crd-td">SLE: 9,75, -11,56</td><td class="crd-td">1,4k</td><td class="crd-td">2,4k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1822AD)</td></tr>
<tr><td class="crd-td"><strong>Shenge</strong></td><td class="crd-td">SLE: 7,92, -12,97</td><td class="crd-td">1,3k</td><td class="crd-td">2,2k</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Harper</strong></td><td class="crd-td">LBR: 4,39, -7,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Kambia</strong></td><td class="crd-td">SLE: 9,07, -12,91</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1840AD)</td></tr>
<tr><td class="crd-td"><strong>Faranah</strong></td><td class="crd-td">GIN: 10,05, -10,73</td><td class="crd-td">1,6k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Kissidougou</strong></td><td class="crd-td">GIN: 9,2, -10,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Voinjama</strong></td><td class="crd-td">LBR: 8,42, -9,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1868AD)</td></tr>
<tr><td class="crd-td"><strong>Buchanan</strong></td><td class="crd-td">LBR: 5,89, -10,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Sassandra</strong></td><td class="crd-td">CIV: 4,95, -6,09</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Pujehun</strong></td><td class="crd-td">SLE: 7,36, -11,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1840AD)</td></tr>
<tr><td class="crd-td"><strong>Kindia</strong></td><td class="crd-td">GIN: 10,04, -12,86</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Tabou</strong></td><td class="crd-td">CIV: 4,42, -7,36</td><td class="crd-td">-</td><td class="crd-td">965</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Dabola</strong></td><td class="crd-td">GIN: 10,74, -11,11</td><td class="crd-td">865</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Greenville</strong></td><td class="crd-td">LBR: 5,01, -9,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">672</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Freetown</strong></td><td class="crd-td">SLE: 8,48, -13,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1792AD)</td></tr>
<tr><td class="crd-td"><strong>Robertsport</strong></td><td class="crd-td">LBR: 6,75, -11,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">840 (1865AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in Sierra Leone, the Grain Coast and Early Liberia from 1500AD to 1880AD with peak populations.</figcaption>
</figure>

## Asante Empire, Fante and Gold Coast

Table \ref{tab:zone3-sites} records 42 settlements across Ghana, central and eastern Ivory Coast and southern Burkina Faso, led by Salaga (38,6k in 1850), Kumasi (27,5k in 1820), Kong, Elmina (15,2k in 1700), Abankeseso and Cape Coast [@Kirkgreene2001ComparativeStudy; @Weiskel2000ThePrecolonial].

<figure class="crd-table-figure" id="tab:zone3-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Salaga</strong></td><td class="crd-td">GHA: 8,55, -0,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25,5k</td><td class="crd-td">38,6k</td><td class="crd-td">-</td><td class="crd-td">38,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kumasi</strong></td><td class="crd-td">GHA: 6,67, -1,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">23,4k</td><td class="crd-td">20k</td><td class="crd-td">-</td><td class="crd-td">27,5k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Kong</strong></td><td class="crd-td">CIV: 9,15, -4,61</td><td class="crd-td">-</td><td class="crd-td">13,1k</td><td class="crd-td">16k</td><td class="crd-td">15,4k</td><td class="crd-td">-</td><td class="crd-td">16,8k (1740AD)</td></tr>
<tr><td class="crd-td"><strong>Elmina</strong></td><td class="crd-td">GHA: 5,11, -1,34</td><td class="crd-td">-</td><td class="crd-td">15,2k</td><td class="crd-td">14,6k</td><td class="crd-td">12,8k</td><td class="crd-td">-</td><td class="crd-td">15,2k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Abankeseso</strong></td><td class="crd-td">GHA: 6,15, -2,02</td><td class="crd-td">3,9k</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,8k (1695AD)</td></tr>
<tr><td class="crd-td"><strong>Accra</strong></td><td class="crd-td">GHA: 5,75, -0,08</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">8,6k</td><td class="crd-td">12,4k</td><td class="crd-td">-</td><td class="crd-td">12,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Begho</strong></td><td class="crd-td">GHA: 7,87, -2,53</td><td class="crd-td">9,6k</td><td class="crd-td">6,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,2k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Cape Coast</strong></td><td class="crd-td">GHA: 5,14, -1,27</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">8k</td><td class="crd-td">9,8k</td><td class="crd-td">-</td><td class="crd-td">10,2k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Bono Manso</strong></td><td class="crd-td">GHA: 7,7, -1,83</td><td class="crd-td">-</td><td class="crd-td">9,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Bouna</strong></td><td class="crd-td">CIV: 9,27, -3</td><td class="crd-td">2,6k</td><td class="crd-td">6,7k</td><td class="crd-td">8,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,9k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Bondoukou</strong></td><td class="crd-td">CIV: 8,04, -2,8</td><td class="crd-td">2,5k</td><td class="crd-td">5,8k</td><td class="crd-td">8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,4k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Mankessim</strong></td><td class="crd-td">GHA: 5,27, -1,02</td><td class="crd-td">-</td><td class="crd-td">7,3k</td><td class="crd-td">7,8k</td><td class="crd-td">6,8k</td><td class="crd-td">-</td><td class="crd-td">8,2k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Yendi Dabari</strong></td><td class="crd-td">GHA: 9,75, -0,83</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,9k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Adansemanso</strong></td><td class="crd-td">GHA: 6,3, -1,55</td><td class="crd-td">6,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Twifo-Heman</strong></td><td class="crd-td">GHA: 5,43, -1,58</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">3,8k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">5,7k (1620AD)</td></tr>
<tr><td class="crd-td"><strong>Wenchi</strong></td><td class="crd-td">GHA: 7,72, -2,11</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Korhogo</strong></td><td class="crd-td">CIV: 9,47, -5,64</td><td class="crd-td">2,1k</td><td class="crd-td">3,5k</td><td class="crd-td">4,4k</td><td class="crd-td">5k</td><td class="crd-td">5,4k</td><td class="crd-td">5,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Saltpond</strong></td><td class="crd-td">GHA: 5,21, -1,06</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1660AD)</td></tr>
<tr><td class="crd-td"><strong>Wa</strong></td><td class="crd-td">GHA: 10,04, -2,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Techiman</strong></td><td class="crd-td">GHA: 7,6, -1,94</td><td class="crd-td">2,7k</td><td class="crd-td">4,8k</td><td class="crd-td">4,9k</td><td class="crd-td">4,8k</td><td class="crd-td">4,6k</td><td class="crd-td">5,2k (1740AD)</td></tr>
<tr><td class="crd-td"><strong>Keta</strong></td><td class="crd-td">GHA: 5,92, 0,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">5,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kibi</strong></td><td class="crd-td">GHA: 6,16, -0,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">4,9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Buipe</strong></td><td class="crd-td">GHA: 8,79, -1,47</td><td class="crd-td">2,8k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Daboya</strong></td><td class="crd-td">GHA: 9,53, -1,39</td><td class="crd-td">3,6k</td><td class="crd-td">4,3k</td><td class="crd-td">3,5k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">4,3k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Winneba</strong></td><td class="crd-td">GHA: 5,38, -0,63</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Begoro</strong></td><td class="crd-td">GHA: 6,38, -0,38</td><td class="crd-td">1,9k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Grand-Lahou</strong></td><td class="crd-td">CIV: 5,25, -5</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,6k</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k</td><td class="crd-td">3,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Grand-Bassam</strong></td><td class="crd-td">CIV: 5,21, -3,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">3,2k</td><td class="crd-td">3,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Shama</strong></td><td class="crd-td">GHA: 5,01, -1,63</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Bole</strong></td><td class="crd-td">GHA: 9,04, -2,49</td><td class="crd-td">1,9k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Loropeni</strong></td><td class="crd-td">BFA: 10,3, -3,55</td><td class="crd-td">2,7k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Axim</strong></td><td class="crd-td">GHA: 4,87, -2,24</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Asantemanso</strong></td><td class="crd-td">GHA: 6,48, -1,62</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Akim Oda</strong></td><td class="crd-td">GHA: 5,92, -0,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Sekondi</strong></td><td class="crd-td">GHA: 4,93, -1,76</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Abengourou</strong></td><td class="crd-td">CIV: 6,74, -3,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1840AD)</td></tr>
<tr><td class="crd-td"><strong>Tamale</strong></td><td class="crd-td">GHA: 9,44, -0,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ada Foah</strong></td><td class="crd-td">GHA: 5,78, 0,62</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>Assinie-France</strong></td><td class="crd-td">CIV: 5,13, -3,28</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1701AD)</td></tr>
<tr><td class="crd-td"><strong>Sunyani</strong></td><td class="crd-td">GHA: 7,32, -2,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">1,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Beyin</strong></td><td class="crd-td">GHA: 4,99, -2,59</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1768AD)</td></tr>
<tr><td class="crd-td"><strong>Dixcove</strong></td><td class="crd-td">GHA: 4,79, -1,95</td><td class="crd-td">845</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1692AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed settlements in the Asante Empire, Fante and Gold Coast from 1500AD to 1880AD with peak populations.</figcaption>
</figure>

## Kingdom of Dahomey, Allada and Ewe Littoral

Table \ref{tab:zone4-sites} documents 26 settlements across Benin, Togo, eastern Ghana and westernmost Nigeria, topped by Savi (77,5k in 1727), Lagos (37,5k in 1881), Abomey (30k in 1851), Allada (30k in 1668), Ouidah (30k in 1720) and Porto-Novo (26,4k in 1885) [@Monroe2014DahomeySlavery; @Mac1900SlaveryAnd].

<figure class="crd-table-figure" id="tab:zone4-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Savi</strong></td><td class="crd-td">BEN: 6,43, 2,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">77,5k (1727AD)</td></tr>
<tr><td class="crd-td"><strong>Lagos</strong></td><td class="crd-td">NGA: 6,67, 3,24</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">12,4k</td><td class="crd-td">20k</td><td class="crd-td">36,6k</td><td class="crd-td">37,5k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Abomey</strong></td><td class="crd-td">BEN: 7,16, 2,06</td><td class="crd-td">-</td><td class="crd-td">15,9k</td><td class="crd-td">28,4k</td><td class="crd-td">30k</td><td class="crd-td">-</td><td class="crd-td">30k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Allada</strong></td><td class="crd-td">BEN: 6,67, 2,15</td><td class="crd-td">-</td><td class="crd-td">23,4k</td><td class="crd-td">6,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">30k (1668AD)</td></tr>
<tr><td class="crd-td"><strong>Ouidah</strong></td><td class="crd-td">BEN: 6,39, 2,09</td><td class="crd-td">-</td><td class="crd-td">26,1k</td><td class="crd-td">14,2k</td><td class="crd-td">18,8k</td><td class="crd-td">-</td><td class="crd-td">30k (1720AD)</td></tr>
<tr><td class="crd-td"><strong>Porto-Novo</strong></td><td class="crd-td">BEN: 6,57, 2,65</td><td class="crd-td">-</td><td class="crd-td">8,4k</td><td class="crd-td">18,7k</td><td class="crd-td">24,8k</td><td class="crd-td">26,2k</td><td class="crd-td">26,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Cana</strong></td><td class="crd-td">BEN: 7,1, 2,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Kétou</strong></td><td class="crd-td">BEN: 7,35, 2,61</td><td class="crd-td">6,8k</td><td class="crd-td">11,2k</td><td class="crd-td">13,5k</td><td class="crd-td">14,6k</td><td class="crd-td">-</td><td class="crd-td">14,6k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Badagry</strong></td><td class="crd-td">NGA: 6,43, 2,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,3k</td><td class="crd-td">11,4k</td><td class="crd-td">-</td><td class="crd-td">11,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Nikki</strong></td><td class="crd-td">BEN: 9,94, 3,21</td><td class="crd-td">-</td><td class="crd-td">6,7k</td><td class="crd-td">8,1k</td><td class="crd-td">8,6k</td><td class="crd-td">-</td><td class="crd-td">8,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Yendi</strong></td><td class="crd-td">GHA: 9,46, -0,01</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">7,9k</td><td class="crd-td">8,4k</td><td class="crd-td">-</td><td class="crd-td">8,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Notsé</strong></td><td class="crd-td">TGO: 6,95, 1,17</td><td class="crd-td">4,6k</td><td class="crd-td">6,5k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Tado</strong></td><td class="crd-td">TGO: 7,15, 1,59</td><td class="crd-td">7,2k</td><td class="crd-td">5,2k</td><td class="crd-td">4,3k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">7,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Aného</strong></td><td class="crd-td">TGO: 6,23, 1,59</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">5,8k</td><td class="crd-td">6,8k</td><td class="crd-td">5,8k</td><td class="crd-td">6,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Savé</strong></td><td class="crd-td">BEN: 8,04, 2,49</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">6,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,1k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Gambaga</strong></td><td class="crd-td">GHA: 10,53, -0,44</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Atakpamé</strong></td><td class="crd-td">TGO: 7,51, 1,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,4k</td><td class="crd-td">3,8k</td><td class="crd-td">3,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Djougou</strong></td><td class="crd-td">BEN: 9,7, 1,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Sansanné-Mango</strong></td><td class="crd-td">TGO: 10,35, 0,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Bassar</strong></td><td class="crd-td">TGO: 9,26, 0,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Parakou</strong></td><td class="crd-td">BEN: 9,36, 2,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Sokodé</strong></td><td class="crd-td">TGO: 8,99, 1,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Ho</strong></td><td class="crd-td">GHA: 6,61, 0,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td><td class="crd-td">2,9k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Grand-Popo</strong></td><td class="crd-td">BEN: 6,28, 1,82</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Lomé</strong></td><td class="crd-td">TGO: 6,24, 1,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1884AD)</td></tr>
<tr><td class="crd-td"><strong>Cotonou</strong></td><td class="crd-td">BEN: 6,54, 2,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1878AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements in the Kingdom of Dahomey, Allada and the Ewe Littoral from 1500AD to 1880AD with peak populations.</figcaption>
</figure>

## Oyo Empire, Yorubaland and Kingdom of Benin

Table \ref{tab:zone5-sites} catalogues 34 settlements across western and central Nigeria, led by Ibadan (200k in 1850), Abeokuta (100k in 1861), Old Oyo (99,8k in 1780), Ilorin (85k in 1880), Ile-Ife (62,4k in 1500), Bida (58,4k in 1885), Benin City (52,8k in 1602), Ogbomosho (50k in 1856) and Raba (46,2k in 1840) [@Law1977OyoEmpire; @AgbajeWilliam1990NewsAnd; @Roese1984DasKonigreich].

<figure class="crd-table-figure" id="tab:zone5-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ibadan</strong></td><td class="crd-td">NGA: 7,41, 3,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">200k</td><td class="crd-td">-</td><td class="crd-td">200k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Abeokuta</strong></td><td class="crd-td">NGA: 7,14, 3,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">55,7k</td><td class="crd-td">-</td><td class="crd-td">100k (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Old Oyo</strong></td><td class="crd-td">NGA: 8,99, 4,33</td><td class="crd-td">-</td><td class="crd-td">70,6k</td><td class="crd-td">84,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">99,8k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Ilorin</strong></td><td class="crd-td">NGA: 8,48, 4,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">34,6k</td><td class="crd-td">65,1k</td><td class="crd-td">85k</td><td class="crd-td">85k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Ile-Ife</strong></td><td class="crd-td">NGA: 7,48, 4,55</td><td class="crd-td">62,4k</td><td class="crd-td">46,8k</td><td class="crd-td">50,5k</td><td class="crd-td">52,4k</td><td class="crd-td">54,7k</td><td class="crd-td">62,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bida</strong></td><td class="crd-td">NGA: 9,07, 6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">52,7k</td><td class="crd-td">58,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Benin City</strong></td><td class="crd-td">NGA: 6,3, 5,63</td><td class="crd-td">47,5k</td><td class="crd-td">34,2k</td><td class="crd-td">29,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">52,8k (1602AD)</td></tr>
<tr><td class="crd-td"><strong>Ogbomosho</strong></td><td class="crd-td">NGA: 8,14, 4,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">26,4k</td><td class="crd-td">45,6k</td><td class="crd-td">-</td><td class="crd-td">50k (1856AD)</td></tr>
<tr><td class="crd-td"><strong>Raba</strong></td><td class="crd-td">NGA: 9,22, 5,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">23k</td><td class="crd-td">-</td><td class="crd-td">46,2k (1840AD)</td></tr>
<tr><td class="crd-td"><strong>Ijebu Ode</strong></td><td class="crd-td">NGA: 6,82, 3,93</td><td class="crd-td">-</td><td class="crd-td">33k</td><td class="crd-td">36,6k</td><td class="crd-td">38,4k</td><td class="crd-td">-</td><td class="crd-td">38,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Oyo</strong></td><td class="crd-td">NGA: 7,83, 3,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">38,4k (1856AD)</td></tr>
<tr><td class="crd-td"><strong>Iwo</strong></td><td class="crd-td">NGA: 7,64, 4,18</td><td class="crd-td">-</td><td class="crd-td">16,4k</td><td class="crd-td">30,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">36,4k (1840AD)</td></tr>
<tr><td class="crd-td"><strong>Oshogbo</strong></td><td class="crd-td">NGA: 7,78, 4,53</td><td class="crd-td">-</td><td class="crd-td">15,3k</td><td class="crd-td">29,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">34,6k (1840AD)</td></tr>
<tr><td class="crd-td"><strong>Igboho</strong></td><td class="crd-td">NGA: 8,84, 3,76</td><td class="crd-td">-</td><td class="crd-td">20,3k</td><td class="crd-td">14,5k</td><td class="crd-td">12,8k</td><td class="crd-td">-</td><td class="crd-td">34,2k (1560AD)</td></tr>
<tr><td class="crd-td"><strong>Owo</strong></td><td class="crd-td">NGA: 7,2, 5,59</td><td class="crd-td">18,6k</td><td class="crd-td">24,8k</td><td class="crd-td">28,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">30k (1827AD)</td></tr>
<tr><td class="crd-td"><strong>Ilesha</strong></td><td class="crd-td">NGA: 7,63, 4,75</td><td class="crd-td">12,4k</td><td class="crd-td">21,6k</td><td class="crd-td">26,1k</td><td class="crd-td">28,4k</td><td class="crd-td">-</td><td class="crd-td">28,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ede</strong></td><td class="crd-td">NGA: 7,74, 4,44</td><td class="crd-td">-</td><td class="crd-td">14,1k</td><td class="crd-td">21,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24,8k (1840AD)</td></tr>
<tr><td class="crd-td"><strong>Ondo</strong></td><td class="crd-td">NGA: 7,1, 4,83</td><td class="crd-td">-</td><td class="crd-td">14,1k</td><td class="crd-td">18,4k</td><td class="crd-td">20,3k</td><td class="crd-td">21,4k</td><td class="crd-td">21,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Lagos</strong></td><td class="crd-td">NGA: 6,45, 3,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20k</td><td class="crd-td">-</td><td class="crd-td">20k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ado Ekiti</strong></td><td class="crd-td">NGA: 7,62, 5,2</td><td class="crd-td">7,2k</td><td class="crd-td">12,2k</td><td class="crd-td">15,4k</td><td class="crd-td">17,4k</td><td class="crd-td">18,6k</td><td class="crd-td">18,6k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Ikirun</strong></td><td class="crd-td">NGA: 7,91, 4,67</td><td class="crd-td">3,2k</td><td class="crd-td">6,9k</td><td class="crd-td">12k</td><td class="crd-td">16,1k</td><td class="crd-td">-</td><td class="crd-td">18,4k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Akure</strong></td><td class="crd-td">NGA: 7,25, 5,2</td><td class="crd-td">-</td><td class="crd-td">12,4k</td><td class="crd-td">15,3k</td><td class="crd-td">16,8k</td><td class="crd-td">-</td><td class="crd-td">16,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Nupeko</strong></td><td class="crd-td">NGA: 8,73, 5,77</td><td class="crd-td">-</td><td class="crd-td">12k</td><td class="crd-td">11,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,6k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Epe</strong></td><td class="crd-td">NGA: 6,64, 3,96</td><td class="crd-td">-</td><td class="crd-td">5,3k</td><td class="crd-td">9,4k</td><td class="crd-td">11,5k</td><td class="crd-td">-</td><td class="crd-td">11,6k (1852AD)</td></tr>
<tr><td class="crd-td"><strong>Shagamu</strong></td><td class="crd-td">NGA: 6,85, 3,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Idah</strong></td><td class="crd-td">NGA: 7,15, 6,79</td><td class="crd-td">-</td><td class="crd-td">9,4k</td><td class="crd-td">8,5k</td><td class="crd-td">7,7k</td><td class="crd-td">-</td><td class="crd-td">9,8k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Uromi</strong></td><td class="crd-td">NGA: 6,74, 6,14</td><td class="crd-td">4,1k</td><td class="crd-td">7,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,5k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Mokwa</strong></td><td class="crd-td">NGA: 9,3, 5,06</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">6,4k</td><td class="crd-td">6,8k</td><td class="crd-td">-</td><td class="crd-td">6,8k (1857AD)</td></tr>
<tr><td class="crd-td"><strong>Agbor</strong></td><td class="crd-td">NGA: 6,26, 6,16</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Warri</strong></td><td class="crd-td">NGA: 5,53, 5,75</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Koton Karifi</strong></td><td class="crd-td">NGA: 8,08, 6,81</td><td class="crd-td">3,1k</td><td class="crd-td">5k</td><td class="crd-td">5,8k</td><td class="crd-td">6,2k</td><td class="crd-td">-</td><td class="crd-td">6,2k (1854AD)</td></tr>
<tr><td class="crd-td"><strong>Asaba</strong></td><td class="crd-td">NGA: 6,2, 6,72</td><td class="crd-td">2,9k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Jebba</strong></td><td class="crd-td">NGA: 9,12, 4,83</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">4,7k</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">4,9k (1857AD)</td></tr>
<tr><td class="crd-td"><strong>Lokoja</strong></td><td class="crd-td">NGA: 7,79, 6,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1865AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed settlements in the Oyo Empire, Yorubaland and Kingdom of Benin from 1500AD to 1880AD with peak populations.</figcaption>
</figure>

## Niger Delta States, Arochukwu and Cross River

Table \ref{tab:zone6-sites} compiles 34 settlements across eastern Nigeria, western Cameroon and Bioko, led by Bauchi (30k in 1866), Umaisha (24,7k in 1833), Calabar (18,2k in 1885), Wukari, Onitsha and Bonny [@Skowronek2023GermanBrass].

<figure class="crd-table-figure" id="tab:zone6-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bauchi</strong></td><td class="crd-td">NGA: 10,31, 9,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15k</td><td class="crd-td">23k</td><td class="crd-td">-</td><td class="crd-td">30k (1866AD)</td></tr>
<tr><td class="crd-td"><strong>Umaisha</strong></td><td class="crd-td">NGA: 8,02, 7,19</td><td class="crd-td">4,2k</td><td class="crd-td">9k</td><td class="crd-td">20,8k</td><td class="crd-td">10,3k</td><td class="crd-td">-</td><td class="crd-td">24,6k (1833AD)</td></tr>
<tr><td class="crd-td"><strong>Calabar</strong></td><td class="crd-td">NGA: 5,01, 8,35</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">13,3k</td><td class="crd-td">11,4k</td><td class="crd-td">17,2k</td><td class="crd-td">18,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Wukari</strong></td><td class="crd-td">NGA: 7,87, 9,77</td><td class="crd-td">9,8k</td><td class="crd-td">13,8k</td><td class="crd-td">11,6k</td><td class="crd-td">9,8k</td><td class="crd-td">-</td><td class="crd-td">14,6k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Onitsha</strong></td><td class="crd-td">NGA: 6,14, 6,79</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">10,5k</td><td class="crd-td">12,9k</td><td class="crd-td">-</td><td class="crd-td">13,2k (1857AD)</td></tr>
<tr><td class="crd-td"><strong>Arochukwu</strong></td><td class="crd-td">NGA: 5,4, 7,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,5k</td><td class="crd-td">11,2k</td><td class="crd-td">-</td><td class="crd-td">11,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Bonny</strong></td><td class="crd-td">NGA: 4,42, 7,16</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">4,8k</td><td class="crd-td">8,6k</td><td class="crd-td">-</td><td class="crd-td">9,4k (1862AD)</td></tr>
<tr><td class="crd-td"><strong>Igbo Ukwu</strong></td><td class="crd-td">NGA: 6,02, 7,02</td><td class="crd-td">-</td><td class="crd-td">8,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,4k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Keffi</strong></td><td class="crd-td">NGA: 8,85, 7,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,4k</td><td class="crd-td">-</td><td class="crd-td">8,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Buguma</strong></td><td class="crd-td">NGA: 4,74, 6,85</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">5,9k</td><td class="crd-td">7,4k</td><td class="crd-td">6,9k</td><td class="crd-td">7,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Nsukka</strong></td><td class="crd-td">NGA: 6,85, 7,42</td><td class="crd-td">-</td><td class="crd-td">7,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,2k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Afikpo</strong></td><td class="crd-td">NGA: 5,87, 7,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,9k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Opobo</strong></td><td class="crd-td">NGA: 4,51, 7,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Bafut</strong></td><td class="crd-td">CMR: 6,08, 10,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">6,8k</td><td class="crd-td">-</td><td class="crd-td">6,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Lafia</strong></td><td class="crd-td">NGA: 8,54, 8,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">-</td><td class="crd-td">6,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Doma</strong></td><td class="crd-td">NGA: 8,4, 8,37</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">5,9k</td><td class="crd-td">6,1k</td><td class="crd-td">-</td><td class="crd-td">6,1k (1854AD)</td></tr>
<tr><td class="crd-td"><strong>Ibi</strong></td><td class="crd-td">NGA: 8,18, 9,75</td><td class="crd-td">2k</td><td class="crd-td">2,8k</td><td class="crd-td">3,2k</td><td class="crd-td">3,4k</td><td class="crd-td">5,5k</td><td class="crd-td">5,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Nembe</strong></td><td class="crd-td">NGA: 4,54, 6,4</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">4,5k</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">5,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Keana</strong></td><td class="crd-td">NGA: 8,15, 8,8</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">5,1k</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">5,3k (1854AD)</td></tr>
<tr><td class="crd-td"><strong>Bali</strong></td><td class="crd-td">CMR: 5,89, 10,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">-</td><td class="crd-td">4,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Bamenda</strong></td><td class="crd-td">CMR: 5,99, 10,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Kafanchan</strong></td><td class="crd-td">NGA: 9,58, 8,29</td><td class="crd-td">1,8k</td><td class="crd-td">3,5k</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k (1810AD)</td></tr>
<tr><td class="crd-td"><strong>Ikot Ekpene</strong></td><td class="crd-td">NGA: 5,18, 7,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">4,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Shendam</strong></td><td class="crd-td">NGA: 8,88, 9,55</td><td class="crd-td">2,4k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Takum</strong></td><td class="crd-td">NGA: 7,24, 9,98</td><td class="crd-td">2,2k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Pankshin</strong></td><td class="crd-td">NGA: 9,34, 9,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Katsina Ala</strong></td><td class="crd-td">NGA: 7,17, 9,29</td><td class="crd-td">1,8k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Owerri</strong></td><td class="crd-td">NGA: 5,48, 7,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Abakaliki</strong></td><td class="crd-td">NGA: 6,4, 7,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Uyo</strong></td><td class="crd-td">NGA: 5,08, 7,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Malabo</strong></td><td class="crd-td">GNQ: 3,73, 8,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,3k</td><td class="crd-td">2,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Limbé</strong></td><td class="crd-td">CMR: 4,04, 9,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Ogoja</strong></td><td class="crd-td">NGA: 6,66, 8,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Buéa</strong></td><td class="crd-td">CMR: 4,14, 9,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1850AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed settlements in the Niger Delta States, Arochukwu and Cross River from 1500AD to 1880AD with peak populations.</figcaption>
</figure>

## Bamum, Cameroon Grassfields and Biafra Coast

Table \ref{tab:zone7-sites} lists 17 settlements across central and northern Cameroon and Adamawa, led by Foumban (22k in 1885), Douala (18,6k in 1884), Ngaoundéré and Tibati.

<figure class="crd-table-figure" id="tab:zone7-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Foumban</strong></td><td class="crd-td">CMR: 5,72, 10,9</td><td class="crd-td">4,9k</td><td class="crd-td">9,8k</td><td class="crd-td">14,2k</td><td class="crd-td">16,4k</td><td class="crd-td">21,2k</td><td class="crd-td">22k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Yola</strong></td><td class="crd-td">NGA: 9,21, 12,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20k (1879AD)</td></tr>
<tr><td class="crd-td"><strong>Douala</strong></td><td class="crd-td">CMR: 4,06, 9,75</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">9,2k</td><td class="crd-td">12,4k</td><td class="crd-td">17,9k</td><td class="crd-td">18,6k (1884AD)</td></tr>
<tr><td class="crd-td"><strong>Ngaoundéré</strong></td><td class="crd-td">CMR: 7,36, 13,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,4k</td><td class="crd-td">12,6k</td><td class="crd-td">14k (1865AD)</td></tr>
<tr><td class="crd-td"><strong>Tibati</strong></td><td class="crd-td">CMR: 6,47, 12,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">9,3k</td><td class="crd-td">9,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Rey-Bouba</strong></td><td class="crd-td">CMR: 8,67, 14,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">-</td><td class="crd-td">8,4k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Garoua</strong></td><td class="crd-td">CMR: 9,34, 13,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">7,3k</td><td class="crd-td">7,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Kumbo</strong></td><td class="crd-td">CMR: 6,16, 10,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">7,2k</td><td class="crd-td">-</td><td class="crd-td">7,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Banyo</strong></td><td class="crd-td">CMR: 6,75, 11,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,6k</td><td class="crd-td">7,1k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Bafoussam</strong></td><td class="crd-td">CMR: 5,41, 10,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Dschang</strong></td><td class="crd-td">CMR: 5,44, 10,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Kribi</strong></td><td class="crd-td">CMR: 2,96, 9,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,7k</td><td class="crd-td">3,1k</td><td class="crd-td">3,1k (1884AD)</td></tr>
<tr><td class="crd-td"><strong>Bafia</strong></td><td class="crd-td">CMR: 4,74, 11,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Nkongsamba</strong></td><td class="crd-td">CMR: 4,96, 9,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Babungo</strong></td><td class="crd-td">CMR: 6,06, 10,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Meiganga</strong></td><td class="crd-td">CMR: 6,52, 14,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Lom Pangar</strong></td><td class="crd-td">CMR: 5,38, 13,5</td><td class="crd-td">540</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">540 (1500AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Individually assessed settlements in Bamum, the Cameroon Grassfields and Biafra Coast from 1500AD to 1880AD with peak populations.</figcaption>
</figure>

## Loango, Teke-Makoko and Gabon Littoral

Table \ref{tab:zone8-sites} documents 14 settlements across Gabon, Republic of the Congo, mainland Equatorial Guinea, Cabinda and the lower Congo Pool, led by Buali (18,5k in 1668), Bolobo, Cabinda (8,6k in 1783) and Mbe.

<figure class="crd-table-figure" id="tab:zone8-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bolobo</strong></td><td class="crd-td">COD: -2,16, 16,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">14,5k</td><td class="crd-td">23,1k</td><td class="crd-td">24k (1883AD)</td></tr>
<tr><td class="crd-td"><strong>Buali</strong></td><td class="crd-td">COG: -4,63, 11,83</td><td class="crd-td">-</td><td class="crd-td">17,4k</td><td class="crd-td">9,5k</td><td class="crd-td">5,4k</td><td class="crd-td">3,4k</td><td class="crd-td">18,5k (1668AD)</td></tr>
<tr><td class="crd-td"><strong>Cabinda</strong></td><td class="crd-td">AGO: -5,58, 12,2</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">8k</td><td class="crd-td">6,2k</td><td class="crd-td">5k</td><td class="crd-td">8,6k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>Mbe</strong></td><td class="crd-td">COG: -3,19, 15,7</td><td class="crd-td">-</td><td class="crd-td">6,6k</td><td class="crd-td">7,2k</td><td class="crd-td">6,8k</td><td class="crd-td">5,5k</td><td class="crd-td">7,4k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Cacongo</strong></td><td class="crd-td">AGO: -5,24, 12,14</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">4,7k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">6,4k (1770AD)</td></tr>
<tr><td class="crd-td"><strong>Boma</strong></td><td class="crd-td">COD: -5,82, 13,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">6,2k (1877AD)</td></tr>
<tr><td class="crd-td"><strong>Libreville</strong></td><td class="crd-td">GAB: 0,43, 9,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Mayumba</strong></td><td class="crd-td">GAB: -3,43, 10,66</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">1,9k</td><td class="crd-td">1,6k</td><td class="crd-td">1,4k</td><td class="crd-td">2,3k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Lambaréné</strong></td><td class="crd-td">GAB: -0,69, 10,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Brazzaville</strong></td><td class="crd-td">COG: -4,22, 15,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Bata</strong></td><td class="crd-td">GNQ: 1,85, 9,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Kinshasa</strong></td><td class="crd-td">COD: -4,41, 15,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Franceville</strong></td><td class="crd-td">GAB: -1,62, 13,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Okala</strong></td><td class="crd-td">GAB: 0,49, 9,41</td><td class="crd-td">620</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">620 (1500AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Individually assessed settlements in Loango, Teke-Makoko and the Gabon Littoral from 1500AD to 1880AD with peak populations.</figcaption>
</figure>

## Kongo, Ndongo, Matamba and Portuguese Angola

Table \ref{tab:zone9-sites} records 21 settlements across northern Angola and Bas-Congo, led by Mbanza Congo (52k in 1550), Kabasa (24k in 1585), Luanda (17,8k in 1885), Soyo (15,2k in 1705) and Santa Maria de Matamba (14,2k in 1660) [@Thornton1977KongoDemography; @Ferreira2011TheSuppression; @Ngaba2026BercoEducacao].

<figure class="crd-table-figure" id="tab:zone9-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mbanza Congo</strong></td><td class="crd-td">AGO: -6,25, 14,23</td><td class="crd-td">-</td><td class="crd-td">9,2k</td><td class="crd-td">7,4k</td><td class="crd-td">4,6k</td><td class="crd-td">3,7k</td><td class="crd-td">52k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Kabasa</strong></td><td class="crd-td">AGO: -9,35, 15,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24k (1585AD)</td></tr>
<tr><td class="crd-td"><strong>Luanda</strong></td><td class="crd-td">AGO: -8,92, 13,38</td><td class="crd-td">-</td><td class="crd-td">8,1k</td><td class="crd-td">6,5k</td><td class="crd-td">8,4k</td><td class="crd-td">17,2k</td><td class="crd-td">17,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Soyo</strong></td><td class="crd-td">AGO: -6,19, 12,37</td><td class="crd-td">4,8k</td><td class="crd-td">15k</td><td class="crd-td">7,2k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">15,2k (1705AD)</td></tr>
<tr><td class="crd-td"><strong>Santa Maria de Matamba</strong></td><td class="crd-td">AGO: -8,75, 16,55</td><td class="crd-td">-</td><td class="crd-td">11,5k</td><td class="crd-td">6,9k</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">14,2k (1660AD)</td></tr>
<tr><td class="crd-td"><strong>Kasanje</strong></td><td class="crd-td">AGO: -9,35, 17,55</td><td class="crd-td">-</td><td class="crd-td">7,5k</td><td class="crd-td">12,4k</td><td class="crd-td">8,9k</td><td class="crd-td">5,4k</td><td class="crd-td">12,4k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Mbanza Nsundi</strong></td><td class="crd-td">COD: -4,95, 14,95</td><td class="crd-td">4,2k</td><td class="crd-td">6,2k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,8k (1655AD)</td></tr>
<tr><td class="crd-td"><strong>Mbanza Mbata</strong></td><td class="crd-td">AGO: -6,05, 15,25</td><td class="crd-td">3,9k</td><td class="crd-td">5,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,4k (1655AD)</td></tr>
<tr><td class="crd-td"><strong>Mbanza Mbamba</strong></td><td class="crd-td">AGO: -7,45, 13,85</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,6k (1620AD)</td></tr>
<tr><td class="crd-td"><strong>Camabatela</strong></td><td class="crd-td">AGO: -8,19, 15,37</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">6,8k</td><td class="crd-td">5,7k</td><td class="crd-td">-</td><td class="crd-td">6,8k (1797AD)</td></tr>
<tr><td class="crd-td"><strong>Dondo</strong></td><td class="crd-td">AGO: -9,68, 14,42</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">3k</td><td class="crd-td">3,7k</td><td class="crd-td">4,8k</td><td class="crd-td">4,8k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Ambriz</strong></td><td class="crd-td">AGO: -7,85, 13,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">4,1k</td><td class="crd-td">3k</td><td class="crd-td">4,8k (1845AD)</td></tr>
<tr><td class="crd-td"><strong>Golungo Alto</strong></td><td class="crd-td">AGO: -9,14, 14,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">4,6k (1844AD)</td></tr>
<tr><td class="crd-td"><strong>Pungo Andongo</strong></td><td class="crd-td">AGO: -9,67, 15,59</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,2k</td><td class="crd-td">3,4k</td><td class="crd-td">2,8k</td><td class="crd-td">4,2k (1645AD)</td></tr>
<tr><td class="crd-td"><strong>Massangano</strong></td><td class="crd-td">AGO: -9,63, 14,26</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">3,6k</td><td class="crd-td">2,8k</td><td class="crd-td">1,8k</td><td class="crd-td">4,1k (1777AD)</td></tr>
<tr><td class="crd-td"><strong>Malanje</strong></td><td class="crd-td">AGO: -9,54, 16,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Calandula</strong></td><td class="crd-td">AGO: -9,08, 15,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,9k</td><td class="crd-td">2,9k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>N'Zeto</strong></td><td class="crd-td">AGO: -7,23, 12,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">2,9k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Muxima</strong></td><td class="crd-td">AGO: -9,52, 13,96</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1797AD)</td></tr>
<tr><td class="crd-td"><strong>N'dalatando</strong></td><td class="crd-td">AGO: -9,3, 14,91</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Matadi</strong></td><td class="crd-td">COD: -5,84, 13,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1885AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Individually assessed settlements in Kongo, Ndongo, Matamba and Portuguese Angola from 1500AD to 1880AD with peak populations.</figcaption>
</figure>

## Ovimbundu Kingdoms, Benguela and Southern Angola

Table \ref{tab:zone10-sites} compiles 18 settlements across the Bié plateau, southern Angola, northern Namibia and Barotseland, led by Bailundo, Cuito (11,8k in 1875), Lealui and Benguela (4,6k in 1885) [@Ferreira2017TheSuppression].

<figure class="crd-table-figure" id="tab:zone10-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bailundo</strong></td><td class="crd-td">AGO: -12,19, 15,86</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,7k</td><td class="crd-td">12,6k</td><td class="crd-td">14,8k</td><td class="crd-td">14,8k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Cuito</strong></td><td class="crd-td">AGO: -12,38, 16,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">9,6k</td><td class="crd-td">-</td><td class="crd-td">11,8k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Lealui</strong></td><td class="crd-td">ZMB: -15,23, 23,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">7,1k</td><td class="crd-td">6,7k</td><td class="crd-td">11,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Linyanti</strong></td><td class="crd-td">NAM: -18,07, 24,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,2k (1855AD)</td></tr>
<tr><td class="crd-td"><strong>Andulo</strong></td><td class="crd-td">AGO: -11,49, 16,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">6,2k</td><td class="crd-td">5,5k</td><td class="crd-td">6,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Oshikango</strong></td><td class="crd-td">NAM: -17,42, 15,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k (1866AD)</td></tr>
<tr><td class="crd-td"><strong>Ondangwa</strong></td><td class="crd-td">NAM: -17,91, 15,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Sesheke</strong></td><td class="crd-td">ZMB: -17,47, 24,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">5,4k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Benguela</strong></td><td class="crd-td">AGO: -12,61, 13,4</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">3k</td><td class="crd-td">2,8k</td><td class="crd-td">4,4k</td><td class="crd-td">4,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Caconda</strong></td><td class="crd-td">AGO: -13,72, 15,07</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">2,9k</td><td class="crd-td">3,7k</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Catumbela</strong></td><td class="crd-td">AGO: -12,43, 13,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">3,8k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Quilengues</strong></td><td class="crd-td">AGO: -14,08, 14,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,9k</td><td class="crd-td">3,3k</td><td class="crd-td">3,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Moçâmedes</strong></td><td class="crd-td">AGO: -15,21, 12,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">931</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Okahao</strong></td><td class="crd-td">NAM: -17,89, 15,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Sumbe</strong></td><td class="crd-td">AGO: -11,2, 13,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,9k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Rundu</strong></td><td class="crd-td">NAM: -17,93, 19,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Humpata</strong></td><td class="crd-td">AGO: -15,02, 13,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Tômbua</strong></td><td class="crd-td">AGO: -15,8, 11,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1885AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 10.</span> Individually assessed settlements in the Ovimbundu Kingdoms, Benguela and Southern Angola from 1500AD to 1880AD with peak populations.</figcaption>
</figure>

## Kuba Kingdom, Inner Congo and Ubangi

Table \ref{tab:zone11-sites} lists 7 settlements across the inner Congo forest, Ubangi and South Sudanese borderlands, led by Kuba capital Nsheng (10,8k in 1850), Yambio, Bangassou and Rafai [@Coloniales1920CongoRevue].

<figure class="crd-table-figure" id="tab:zone11-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Nsheng</strong></td><td class="crd-td">COD: -4,78, 21,39</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">9,1k</td><td class="crd-td">10,8k</td><td class="crd-td">-</td><td class="crd-td">10,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Yambio</strong></td><td class="crd-td">SSD: 4,59, 28,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Bangassou</strong></td><td class="crd-td">CAF: 4,75, 22,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Rafai</strong></td><td class="crd-td">CAF: 4,95, 23,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Kisangani</strong></td><td class="crd-td">COD: 0,55, 25,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Mbandaka</strong></td><td class="crd-td">COD: 0,03, 18,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Bolondo</strong></td><td class="crd-td">COD: -0,31, 21,25</td><td class="crd-td">720</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">720 (1500AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 11.</span> Individually assessed settlements in the Kuba Kingdom, Inner Congo and Ubangi from 1500AD to 1880AD with peak populations.</figcaption>
</figure>

## Luba Empire, Lunda Commonwealth and Kazembe

Table \ref{tab:zone12-sites} documents 8 settlements across Katanga, Kasai and northern Zambia, led by Kasongo (28k in 1885), Musumba (25k in 1846), Bunkeya (18,5k in 1885) and Nyangwe (15,2k in 1885) [@Alencastro2018PoliticaDos; @Congostijdlijn2019GeschiedenisVan].

<figure class="crd-table-figure" id="tab:zone12-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kasongo</strong></td><td class="crd-td">COD: -4,43, 26,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,6k</td><td class="crd-td">28k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Musumba</strong></td><td class="crd-td">COD: -8,4, 23,17</td><td class="crd-td">-</td><td class="crd-td">12k</td><td class="crd-td">22,5k</td><td class="crd-td">24,1k</td><td class="crd-td">14k</td><td class="crd-td">25k (1846AD)</td></tr>
<tr><td class="crd-td"><strong>Bunkeya</strong></td><td class="crd-td">COD: -10,39, 26,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14k</td><td class="crd-td">18,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Nyangwe</strong></td><td class="crd-td">COD: -4,22, 26,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,6k</td><td class="crd-td">15,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Mwibele</strong></td><td class="crd-td">COD: -7,32, 25,58</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">10k</td><td class="crd-td">10,6k</td><td class="crd-td">-</td><td class="crd-td">11,5k (1840AD)</td></tr>
<tr><td class="crd-td"><strong>Mwansabombwe</strong></td><td class="crd-td">ZMB: -9,82, 28,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,2k</td><td class="crd-td">5,7k</td><td class="crd-td">7k</td><td class="crd-td">7,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Malemba-Nkulu</strong></td><td class="crd-td">COD: -8,04, 26,79</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ingombe Ilede</strong></td><td class="crd-td">ZMB: -16,18, 28,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1520AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 12.</span> Individually assessed settlements in the Luba Empire, Lunda Commonwealth and Kazembe from 1500AD to 1880AD with peak populations.</figcaption>
</figure>

# Limitations

Three caveats apply to this settlement ledger. First, archival survival favours coastal enclaves and major royal capitals over dispersed interior villages, leaving inner Congo and Luba-Lunda with fewer individually dated towns than Senegambia or the Gulf of Guinea [@Thornton1977KongoDemography; @Coloniales1920CongoRevue]. Second, linear interpolation between dated observations cannot capture sudden unrecorded war shocks between benchmark observations [@Law1977OyoEmpire; @Monroe2014DahomeySlavery]. Third, the 301 entries measure urban and major market centres rather than total rural headcounts, which appear in the companion regional synthesis.

# Conclusion

Together, these 301 individually assessed settlements document the shifting urban geography of Atlantic West Africa, Equatorial Africa and Angola from 1500AD to 1885AD. They capture early royal capitals such as Mbanza Congo, Benin City and Allada, the rise and collapse of Old Oyo, nineteenth-century Yoruba defensive agglomeration at Ibadan and Abeokuta, the maritime entrepôts of Luanda, Saint-Louis, Freetown and Lagos, and late precolonial caravan hubs across Luba-Lunda and Katanga.

# Appendix

## Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} sums the individually assessed settlement counts and combined interpolated urban populations across all twelve sub-regions at the five chapter benchmarks from 1500AD to 1880AD.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion (Sites)</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Wolof States, Futa Jallon and Kaabu (48)</strong></td><td class="crd-td">20,3k</td><td class="crd-td">85,6k</td><td class="crd-td">108,2k</td><td class="crd-td">126,4k</td><td class="crd-td">34,2k</td></tr>
<tr><td class="crd-td"><strong>2. Sierra Leone, Grain Coast and Liberia (32)</strong></td><td class="crd-td">10,5k</td><td class="crd-td">23,8k</td><td class="crd-td">49,6k</td><td class="crd-td">74k</td><td class="crd-td">51k</td></tr>
<tr><td class="crd-td"><strong>3. Asante Empire, Fante and Gold Coast (42)</strong></td><td class="crd-td">46,1k</td><td class="crd-td">140,3k</td><td class="crd-td">160,4k</td><td class="crd-td">159,9k</td><td class="crd-td">16,6k</td></tr>
<tr><td class="crd-td"><strong>4. Kingdom of Dahomey, Allada and Ewe (26)</strong></td><td class="crd-td">18,7k</td><td class="crd-td">131,1k</td><td class="crd-td">159,5k</td><td class="crd-td">155,8k</td><td class="crd-td">77,8k</td></tr>
<tr><td class="crd-td"><strong>5. Oyo Empire, Yorubaland and Benin (34)</strong></td><td class="crd-td">161,5k</td><td class="crd-td">409,1k</td><td class="crd-td">520,3k</td><td class="crd-td">649,2k</td><td class="crd-td">232,5k</td></tr>
<tr><td class="crd-td"><strong>6. Niger Delta, Arochukwu and Cross River (34)</strong></td><td class="crd-td">24,2k</td><td class="crd-td">85,3k</td><td class="crd-td">124,6k</td><td class="crd-td">153,9k</td><td class="crd-td">36,4k</td></tr>
<tr><td class="crd-td"><strong>7. Bamum, Cameroon Grassfields and Biafra (17)</strong></td><td class="crd-td">5,4k</td><td class="crd-td">13,9k</td><td class="crd-td">38,3k</td><td class="crd-td">66,5k</td><td class="crd-td">80,5k</td></tr>
<tr><td class="crd-td"><strong>8. Loango, Teke-Makoko and Gabon (14)</strong></td><td class="crd-td">620</td><td class="crd-td">35k</td><td class="crd-td">42,1k</td><td class="crd-td">43,1k</td><td class="crd-td">44,5k</td></tr>
<tr><td class="crd-td"><strong>9. Kongo, Ndongo, Matamba and Angola (21)</strong></td><td class="crd-td">12,9k</td><td class="crd-td">82,2k</td><td class="crd-td">69,7k</td><td class="crd-td">56,6k</td><td class="crd-td">49,5k</td></tr>
<tr><td class="crd-td"><strong>10. Ovimbundu, Benguela and S. Angola (18)</strong></td><td class="crd-td">0</td><td class="crd-td">2,9k</td><td class="crd-td">33,3k</td><td class="crd-td">49,4k</td><td class="crd-td">47k</td></tr>
<tr><td class="crd-td"><strong>11. Kuba, Inner Congo and Ubangi (7)</strong></td><td class="crd-td">720</td><td class="crd-td">5,8k</td><td class="crd-td">9,1k</td><td class="crd-td">10,8k</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>12. Luba, Lunda and Kazembe (8)</strong></td><td class="crd-td">1,6k</td><td class="crd-td">17,7k</td><td class="crd-td">39,7k</td><td class="crd-td">40,4k</td><td class="crd-td">67,2k</td></tr>
<tr><td class="crd-td"><strong>All Sub-Regions (301)</strong></td><td class="crd-td">302,6k</td><td class="crd-td">1,03M</td><td class="crd-td">1,35M</td><td class="crd-td">1,59M</td><td class="crd-td">737,2k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 13.</span> Individually assessed settlement counts and combined interpolated urban populations across the twelve sub-regions from 1500AD to 1880AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Settlement coordinates follow decimal degrees (latitude, longitude) formatted with European decimal commas in gazetteer tables. Settlements recorded under slightly variant historical spellings or overlapping port names (such as Freetown and Lagos) retain distinct entries where documented in separate historical series.
