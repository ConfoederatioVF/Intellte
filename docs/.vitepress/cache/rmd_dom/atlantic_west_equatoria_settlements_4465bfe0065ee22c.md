---
title: "Early Modern West Africa, Equatoria and Angola"
subtitle: "Settlement Gazetteer: 3.424 Cities, Ports and Towns (1500-1885)"
date: "24 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: atlantic_west_equatoria_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 3.424 individually assessed settlements across 24 modern countries and twelve historical sub-regions from Senegambia to southern Angola between 1500AD and 1885AD."
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

This gazetteer compiles coordinates and dated population series for 3.424 individually assessed settlements across Atlantic West Africa, Equatorial Africa and Angola between 1500AD and 1885AD, encompassing 10.646 archival observations across 29 modern countries. Screened from 4.115 candidate towns, royal capitals, European forts and market centres (691 excluded), the retained settlements span twelve historical sub-regions from Senegambia and Upper Guinea through Asante, Dahomey, Oyo-Yorubaland, Benin, the Niger Delta and Cameroon to Loango, Kongo, Angola, Kuba and the Luba-Lunda commonwealth. Active entries expand from 1.794 attested sites in 1500AD to 2.072 in 1700AD, 2.517 in 1800AD and 2.456 in 1850AD before consolidating at 488 late precolonial towns in 1880AD, documenting urban dynamics from Mbanza Congo (52k), Benin City (52,8k) and Old Oyo (99,8k) to nineteenth-century Ibadan (200k), Abeokuta (100k) and Ilorin (85k).



# Background

Early modern urbanism across Atlantic Africa developed within starkly different political and ecological settings [@Green2015AfricanKingdoms]. Along the Senegambian savanna and Upper Guinea estuaries, compact royal capitals and Luso-African or French river entrepôts mediated millet, rice, gold and gum commerce [@Havik2007PortOfGeba; @Howard1900MandeIdentity]. Across the Akan forest, the Dahomey Gap and Yorubaland, walled city-states and agrarian capitals supported dense populations backed by yam farming, ironworking and Atlantic-era maize and cassava [@Kirkgreene2001ComparativeStudy; @Monroe2014DahomeySlavery; @Ogundiran2009OyoFrontier]. South of the Niger Delta across Loango, Kongo, Angola and the Luba-Lunda interior, royal capitals and Portuguese presídios punctuated lower-density woodland and highland savannas [@Thornton1977KongoDemography; @Ferreira2011TheSuppression; @Coloniales1920CongoRevue].

# Methodology

## Candidate Screening and Spatial Partition

Candidate entries were compiled from Portuguese Angolan presídio censuses [@Ferreira2011TheSuppression; @Curto2005ResistenciaEscravidao], French Senegalese communal registers, Gold Coast and Nigerian enumerations, traveller eyewitness reports and archaeological transect surveys [@AgbajeWilliam1990NewsAnd; @Monroe2014DahomeySlavery; @Law1977OyoEmpire]. From 4.115 candidates located inside the 7,03M km² domain clipped to geoBoundaries outlines [@Runfola2020GeoBoundaries], 691 duplicate orthographies and non-settlement fragments were excluded, retaining 3.424 city-proper settlements across 29 countries. Every entry is mapped deterministically to one of the 12 historical sub-regions defined in the companion review.

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

Table \ref{tab:zone1-sites} compiles 504 settlements across Senegal, Gambia, Guinea-Bissau, southern Mauritania, western Mali and northern Guinea, led by Saint-Louis (15.980 in 1878), Kansala (13,7k in 1850), Bakel (10,9k in 1863) and Labé [@Havik2007PortOfGeba].

<figure class="crd-table-figure" id="tab:zone1-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Saint-Louis</strong></td><td class="crd-td">SEN: 16,03, -16,49</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">10,2k</td><td class="crd-td">14,1k</td><td class="crd-td">-</td><td class="crd-td">16k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Kansala</strong></td><td class="crd-td">GNB: 12,57, -14,08</td><td class="crd-td">-</td><td class="crd-td">9,9k</td><td class="crd-td">12,5k</td><td class="crd-td">13,6k</td><td class="crd-td">-</td><td class="crd-td">13,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kansala</strong></td><td class="crd-td">GNB: 12,32, -14,17</td><td class="crd-td">-</td><td class="crd-td">9,9k</td><td class="crd-td">12,5k</td><td class="crd-td">13,6k</td><td class="crd-td">-</td><td class="crd-td">13,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Bakel</strong></td><td class="crd-td">SEN: 14,91, -12,46</td><td class="crd-td">1,9k</td><td class="crd-td">2,6k</td><td class="crd-td">2,9k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">10,9k (1863AD)</td></tr>
<tr><td class="crd-td"><strong>Labé</strong></td><td class="crd-td">GIN: 11,33, -12,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">6,4k</td><td class="crd-td">6,8k</td><td class="crd-td">6,8k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Banjul</strong></td><td class="crd-td">GMB: 13,45, -16,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">6k</td><td class="crd-td">6,1k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Bissau</strong></td><td class="crd-td">GNB: 11,9, -15,59</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,6k</td><td class="crd-td">4,6k</td><td class="crd-td">5,4k</td><td class="crd-td">6,1k (1883AD)</td></tr>
<tr><td class="crd-td"><strong>Kahone</strong></td><td class="crd-td">SEN: 14,16, -16,04</td><td class="crd-td">2,4k</td><td class="crd-td">4,8k</td><td class="crd-td">5,3k</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">5,9k (1859AD)</td></tr>
<tr><td class="crd-td"><strong>Fugumba</strong></td><td class="crd-td">GIN: 11,12, -12,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Diakhao</strong></td><td class="crd-td">SEN: 14,46, -16,29</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">5,3k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">5,7k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Koussan</strong></td><td class="crd-td">SEN: 14,13, -12,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">5,5k</td><td class="crd-td">-</td><td class="crd-td">5,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Lambaye</strong></td><td class="crd-td">SEN: 14,78, -16,48</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">4,9k</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">5,5k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Kaédi</strong></td><td class="crd-td">MRT: 16,16, -13,5</td><td class="crd-td">1,1k</td><td class="crd-td">4,2k</td><td class="crd-td">4,9k</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">5,4k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Mboul</strong></td><td class="crd-td">SEN: 15,32, -16,65</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">5,1k</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Linguère</strong></td><td class="crd-td">SEN: 15,4, -15,12</td><td class="crd-td">5,1k</td><td class="crd-td">3,5k</td><td class="crd-td">3,2k</td><td class="crd-td">3k</td><td class="crd-td">2,9k</td><td class="crd-td">5,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mbissel</strong></td><td class="crd-td">SEN: 14,16, -16,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Gorée</strong></td><td class="crd-td">SEN: 14,67, -17,4</td><td class="crd-td">280</td><td class="crd-td">1,1k</td><td class="crd-td">2,8k</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">4,9k (1845AD)</td></tr>
<tr><td class="crd-td"><strong>Rufisque</strong></td><td class="crd-td">SEN: 14,72, -17,27</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,8k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">4,5k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Nioro du Rip</strong></td><td class="crd-td">SEN: 13,75, -15,77</td><td class="crd-td">1,8k</td><td class="crd-td">3,2k</td><td class="crd-td">3,9k</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">4,4k (1862AD)</td></tr>
<tr><td class="crd-td"><strong>Hamdallahi</strong></td><td class="crd-td">SEN: 13,08, -14,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Koumbia</strong></td><td class="crd-td">GIN: 11,8, -13,5</td><td class="crd-td">2,8k</td><td class="crd-td">4,1k</td><td class="crd-td">4,2k</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">4,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Sutukoba</strong></td><td class="crd-td">GMB: 13,5, -14,02</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k (1506AD)</td></tr>
<tr><td class="crd-td"><strong>Joal - Fadiouth</strong></td><td class="crd-td">SEN: 14,18, -16,85</td><td class="crd-td">1,3k</td><td class="crd-td">3,5k</td><td class="crd-td">3,8k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">3,9k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Saly Portudal</strong></td><td class="crd-td">SEN: 14,44, -17,02</td><td class="crd-td">1,5k</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k</td><td class="crd-td">3,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Yang-Yang</strong></td><td class="crd-td">SEN: 15,59, -15,34</td><td class="crd-td">351</td><td class="crd-td">2,2k</td><td class="crd-td">2,6k</td><td class="crd-td">2,9k</td><td class="crd-td">3,3k</td><td class="crd-td">3,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Mbour</strong></td><td class="crd-td">SEN: 14,44, -16,97</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Médina Sabakh</strong></td><td class="crd-td">SEN: 13,6, -15,58</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,8k</td><td class="crd-td">3k</td><td class="crd-td">3,2k</td><td class="crd-td">3,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Matam</strong></td><td class="crd-td">SEN: 15,65, -13,26</td><td class="crd-td">1,7k</td><td class="crd-td">3,2k</td><td class="crd-td">3,1k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Diourbel</strong></td><td class="crd-td">SEN: 14,67, -16,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,7k</td><td class="crd-td">3,1k</td><td class="crd-td">3,1k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Boké</strong></td><td class="crd-td">GIN: 10,94, -14,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1866AD)</td></tr>
<tr><td class="crd-td"><strong>Rao</strong></td><td class="crd-td">SEN: 15,91, -16,41</td><td class="crd-td">1,7k</td><td class="crd-td">2,3k</td><td class="crd-td">2,7k</td><td class="crd-td">2,9k</td><td class="crd-td">3k</td><td class="crd-td">3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Dakar</strong></td><td class="crd-td">SEN: 14,77, -17,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">3k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Geba</strong></td><td class="crd-td">GNB: 12,2, -14,85</td><td class="crd-td">1,5k</td><td class="crd-td">1,3k</td><td class="crd-td">2k</td><td class="crd-td">3k</td><td class="crd-td">1,5k</td><td class="crd-td">3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kansala North</strong></td><td class="crd-td">GNB: 12,47, -14,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Louga</strong></td><td class="crd-td">SEN: 15,62, -16,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Fatick</strong></td><td class="crd-td">SEN: 14,34, -16,42</td><td class="crd-td">1,7k</td><td class="crd-td">2,3k</td><td class="crd-td">2,7k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1859AD)</td></tr>
<tr><td class="crd-td"><strong>Brikama Ba</strong></td><td class="crd-td">GMB: 13,53, -14,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Bolama</strong></td><td class="crd-td">GNB: 11,58, -15,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1879AD)</td></tr>
<tr><td class="crd-td"><strong>Kodiam</strong></td><td class="crd-td">SEN: 13,74, -14,76</td><td class="crd-td">1,9k</td><td class="crd-td">2,4k</td><td class="crd-td">2,7k</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Sélibabi</strong></td><td class="crd-td">MRT: 15,16, -12,17</td><td class="crd-td">622</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 464 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in the Wolof States, Futa Jallon and Kaabu from 1500AD to 1880AD with peak populations (top 40 of 504 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Sierra Leone, Grain Coast and Early Liberia

Table \ref{tab:zone2-sites} lists 324 settlements across Sierra Leone, Liberia, central Guinea and western Ivory Coast, headed by Freetown (21,9k in 1881), Timbo (9,14k in 1818), Kankan and Falaba [@Howard1900MandeIdentity].

<figure class="crd-table-figure" id="tab:zone2-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Freetown</strong></td><td class="crd-td">SLE: 8,48, -13,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">16,1k</td><td class="crd-td">21,7k</td><td class="crd-td">21,9k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Freetown</strong></td><td class="crd-td">SLE: 8,35, -13,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">16,1k</td><td class="crd-td">21,7k</td><td class="crd-td">21,9k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Manéah</strong></td><td class="crd-td">GIN: 9,73, -13,42</td><td class="crd-td">11,3k</td><td class="crd-td">14k</td><td class="crd-td">14,5k</td><td class="crd-td">15,3k</td><td class="crd-td">-</td><td class="crd-td">15,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Timbo</strong></td><td class="crd-td">GIN: 10,63, -11,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,6k</td><td class="crd-td">5,5k</td><td class="crd-td">4k</td><td class="crd-td">9,1k (1818AD)</td></tr>
<tr><td class="crd-td"><strong>Kankan</strong></td><td class="crd-td">GIN: 10,4, -9,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">7,2k</td><td class="crd-td">8,4k</td><td class="crd-td">8,5k (1879AD)</td></tr>
<tr><td class="crd-td"><strong>Falaba</strong></td><td class="crd-td">SLE: 9,86, -11,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">5,1k</td><td class="crd-td">4,2k</td><td class="crd-td">8k (1822AD)</td></tr>
<tr><td class="crd-td"><strong>Dinguiraye</strong></td><td class="crd-td">GIN: 11,29, -10,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">7,6k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Moussadougou</strong></td><td class="crd-td">GIN: 8,77, -8,62</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">6,1k</td><td class="crd-td">7,1k</td><td class="crd-td">-</td><td class="crd-td">7,4k (1868AD)</td></tr>
<tr><td class="crd-td"><strong>Kolaboui</strong></td><td class="crd-td">GIN: 10,8, -14,4</td><td class="crd-td">4k</td><td class="crd-td">4,8k</td><td class="crd-td">5,7k</td><td class="crd-td">5,9k</td><td class="crd-td">-</td><td class="crd-td">5,9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Bissandougou</strong></td><td class="crd-td">GIN: 10,17, -9,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k (1882AD)</td></tr>
<tr><td class="crd-td"><strong>Kambia Old</strong></td><td class="crd-td">SLE: 9,12, -12,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1510AD)</td></tr>
<tr><td class="crd-td"><strong>Njala</strong></td><td class="crd-td">SLE: 8,23, -12,02</td><td class="crd-td">2,8k</td><td class="crd-td">4,4k</td><td class="crd-td">4,7k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Port Loko</strong></td><td class="crd-td">SLE: 8,77, -12,78</td><td class="crd-td">2k</td><td class="crd-td">2,9k</td><td class="crd-td">4,1k</td><td class="crd-td">4,7k</td><td class="crd-td">4,9k</td><td class="crd-td">4,9k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Bopolu</strong></td><td class="crd-td">LBR: 7,07, -10,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">4,7k (1868AD)</td></tr>
<tr><td class="crd-td"><strong>Beyla</strong></td><td class="crd-td">GIN: 8,69, -8,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">3,1k</td><td class="crd-td">4k</td><td class="crd-td">4,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Odienné</strong></td><td class="crd-td">CIV: 9,5, -7,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">4,2k</td><td class="crd-td">4,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Waterloo</strong></td><td class="crd-td">SLE: 8,34, -13,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3,9k</td><td class="crd-td">3,9k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Siguiri</strong></td><td class="crd-td">GIN: 11,43, -9,17</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Monrovia</strong></td><td class="crd-td">LBR: 6,35, -10,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,8k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Grand Cess</strong></td><td class="crd-td">LBR: 4,57, -8,22</td><td class="crd-td">1,8k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">3,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Bumban</strong></td><td class="crd-td">SLE: 9,12, -11,88</td><td class="crd-td">1,6k</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k</td><td class="crd-td">3,8k</td><td class="crd-td">3,8k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Bonthe</strong></td><td class="crd-td">SLE: 7,53, -12,51</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">1,7k</td><td class="crd-td">3,5k</td><td class="crd-td">3,6k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Fugumba</strong></td><td class="crd-td">GIN: 10,89, -12,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">3,4k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Sanankoro</strong></td><td class="crd-td">GIN: 9,28, -9,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,4k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Koinadugu Old</strong></td><td class="crd-td">SLE: 9,53, -11,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Foya</strong></td><td class="crd-td">LBR: 8,36, -10,21</td><td class="crd-td">1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">3,3k (1510AD)</td></tr>
<tr><td class="crd-td"><strong>Marampa</strong></td><td class="crd-td">SLE: 8,69, -12,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1515AD)</td></tr>
<tr><td class="crd-td"><strong>Dogomet</strong></td><td class="crd-td">GIN: 10,59, -11,18</td><td class="crd-td">1,8k</td><td class="crd-td">2,6k</td><td class="crd-td">2,9k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Rokupr</strong></td><td class="crd-td">SLE: 8,67, -12,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1520AD)</td></tr>
<tr><td class="crd-td"><strong>Mange Bureh</strong></td><td class="crd-td">SLE: 8,92, -12,86</td><td class="crd-td">289</td><td class="crd-td">434</td><td class="crd-td">461</td><td class="crd-td">474</td><td class="crd-td">-</td><td class="crd-td">3,1k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Kouroussa</strong></td><td class="crd-td">GIN: 10,65, -9,89</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1827AD)</td></tr>
<tr><td class="crd-td"><strong>Boffa</strong></td><td class="crd-td">GIN: 10,19, -14,04</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">1,9k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">3k (1594AD)</td></tr>
<tr><td class="crd-td"><strong>Douako</strong></td><td class="crd-td">GIN: 9,73, -10,18</td><td class="crd-td">1,9k</td><td class="crd-td">2,9k</td><td class="crd-td">2,9k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Musaiya</strong></td><td class="crd-td">SLE: 9,75, -11,56</td><td class="crd-td">1,4k</td><td class="crd-td">2,4k</td><td class="crd-td">2,9k</td><td class="crd-td">2,4k</td><td class="crd-td">1,7k</td><td class="crd-td">3k (1822AD)</td></tr>
<tr><td class="crd-td"><strong>Kissy</strong></td><td class="crd-td">SLE: 8,47, -13,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,9k</td><td class="crd-td">3k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Touih</strong></td><td class="crd-td">CIV: 5,26, -6,54</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Shenge</strong></td><td class="crd-td">SLE: 7,92, -12,97</td><td class="crd-td">1,3k</td><td class="crd-td">2,2k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td><td class="crd-td">2,9k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Mahera</strong></td><td class="crd-td">SLE: 8,6, -13,19</td><td class="crd-td">1,3k</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Panguma</strong></td><td class="crd-td">SLE: 8,19, -11,13</td><td class="crd-td">456</td><td class="crd-td">638</td><td class="crd-td">752</td><td class="crd-td">819</td><td class="crd-td">-</td><td class="crd-td">2,7k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Goya</strong></td><td class="crd-td">CIV: 7,11, -7,4</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 284 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in Sierra Leone, the Grain Coast and Early Liberia from 1500AD to 1880AD with peak populations (top 40 of 324 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Asante Empire, Fante and Gold Coast

Table \ref{tab:zone3-sites} records 396 settlements across Ghana, central and eastern Ivory Coast and southern Burkina Faso, led by Salaga (38,6k in 1850), Kumasi (27,5k in 1820), Kong, Elmina (15,2k in 1700), Abankeseso and Cape Coast [@Kirkgreene2001ComparativeStudy; @Weiskel2000ThePrecolonial].

<figure class="crd-table-figure" id="tab:zone3-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Elmina</strong></td><td class="crd-td">GHA: 5,11, -1,34</td><td class="crd-td">5,1k</td><td class="crd-td">15,2k</td><td class="crd-td">14,6k</td><td class="crd-td">12,8k</td><td class="crd-td">-</td><td class="crd-td">70k (1688AD)</td></tr>
<tr><td class="crd-td"><strong>Salaga</strong></td><td class="crd-td">GHA: 8,55, -0,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25,5k</td><td class="crd-td">38,6k</td><td class="crd-td">11,8k</td><td class="crd-td">40k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Kumasi</strong></td><td class="crd-td">GHA: 6,67, -1,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">23,4k</td><td class="crd-td">20k</td><td class="crd-td">-</td><td class="crd-td">27,5k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Ayawaso</strong></td><td class="crd-td">GHA: 5,68, -0,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">26,8k (1640AD)</td></tr>
<tr><td class="crd-td"><strong>Kong</strong></td><td class="crd-td">CIV: 9,15, -4,61</td><td class="crd-td">3,8k</td><td class="crd-td">2,7k</td><td class="crd-td">5,1k</td><td class="crd-td">15,4k</td><td class="crd-td">-</td><td class="crd-td">16,8k (1740AD)</td></tr>
<tr><td class="crd-td"><strong>Nyanoase</strong></td><td class="crd-td">GHA: 5,8, -0,38</td><td class="crd-td">-</td><td class="crd-td">13,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,8k (1715AD)</td></tr>
<tr><td class="crd-td"><strong>Abankeseso</strong></td><td class="crd-td">GHA: 6,15, -2,02</td><td class="crd-td">3,9k</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,8k (1695AD)</td></tr>
<tr><td class="crd-td"><strong>Accra</strong></td><td class="crd-td">GHA: 5,75, -0,08</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">8,6k</td><td class="crd-td">12,4k</td><td class="crd-td">-</td><td class="crd-td">12,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Begho</strong></td><td class="crd-td">GHA: 7,87, -2,53</td><td class="crd-td">9,6k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,2k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Cape Coast</strong></td><td class="crd-td">GHA: 5,14, -1,27</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">8,4k</td><td class="crd-td">10,2k</td><td class="crd-td">-</td><td class="crd-td">10,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Bono Manso</strong></td><td class="crd-td">GHA: 7,7, -1,83</td><td class="crd-td">8,6k</td><td class="crd-td">9,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Bouna</strong></td><td class="crd-td">CIV: 9,27, -3</td><td class="crd-td">2,6k</td><td class="crd-td">6,4k</td><td class="crd-td">8,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,9k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Bondoukou</strong></td><td class="crd-td">CIV: 8,04, -2,8</td><td class="crd-td">2,5k</td><td class="crd-td">5,8k</td><td class="crd-td">7,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,4k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Korhogo</strong></td><td class="crd-td">CIV: 9,47, -5,64</td><td class="crd-td">2,1k</td><td class="crd-td">3,5k</td><td class="crd-td">5,6k</td><td class="crd-td">7,3k</td><td class="crd-td">8,4k</td><td class="crd-td">8,4k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Mankessim</strong></td><td class="crd-td">GHA: 5,27, -1,02</td><td class="crd-td">-</td><td class="crd-td">7,1k</td><td class="crd-td">7,2k</td><td class="crd-td">4,7k</td><td class="crd-td">-</td><td class="crd-td">8,2k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Yendi Dabari</strong></td><td class="crd-td">GHA: 9,75, -0,83</td><td class="crd-td">4,8k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,9k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Efutu</strong></td><td class="crd-td">GHA: 5,21, -1,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,6k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Anomabu</strong></td><td class="crd-td">GHA: 5,17, -1,12</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,2k (1760AD)</td></tr>
<tr><td class="crd-td"><strong>Tarkwa</strong></td><td class="crd-td">GHA: 5,29, -1,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,2k</td><td class="crd-td">7,2k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Buipe</strong></td><td class="crd-td">GHA: 8,79, -1,47</td><td class="crd-td">2,8k</td><td class="crd-td">6,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,9k (1680AD)</td></tr>
<tr><td class="crd-td"><strong>Tafo Old</strong></td><td class="crd-td">GHA: 6,73, -1,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,9k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Adansemanso</strong></td><td class="crd-td">GHA: 6,3, -1,55</td><td class="crd-td">6,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Mansu-Birim</strong></td><td class="crd-td">GHA: 5,83, -0,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k (1510AD)</td></tr>
<tr><td class="crd-td"><strong>Juaben</strong></td><td class="crd-td">GHA: 6,82, -1,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">6,8k (1817AD)</td></tr>
<tr><td class="crd-td"><strong>Akim Swedru</strong></td><td class="crd-td">GHA: 5,88, -1,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,5k (1520AD)</td></tr>
<tr><td class="crd-td"><strong>Batabi</strong></td><td class="crd-td">GHA: 5,89, -0,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,3k (1515AD)</td></tr>
<tr><td class="crd-td"><strong>Abrem</strong></td><td class="crd-td">GHA: 5,25, -1,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Akwatia-Birim North</strong></td><td class="crd-td">GHA: 6,08, -0,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k (1515AD)</td></tr>
<tr><td class="crd-td"><strong>Agomeda</strong></td><td class="crd-td">GHA: 5,97, 0,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,1k (1520AD)</td></tr>
<tr><td class="crd-td"><strong>Ofoase Birim</strong></td><td class="crd-td">GHA: 6,15, -1,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,9k (1510AD)</td></tr>
<tr><td class="crd-td"><strong>Twifo-Heman</strong></td><td class="crd-td">GHA: 5,43, -1,58</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">3,5k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">5,7k (1620AD)</td></tr>
<tr><td class="crd-td"><strong>Abenase</strong></td><td class="crd-td">GHA: 5,97, -0,88</td><td class="crd-td">245</td><td class="crd-td">298</td><td class="crd-td">313</td><td class="crd-td">309</td><td class="crd-td">-</td><td class="crd-td">5,5k (1515AD)</td></tr>
<tr><td class="crd-td"><strong>Wenchi</strong></td><td class="crd-td">GHA: 7,72, -2,11</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Anloga</strong></td><td class="crd-td">GHA: 5,86, 0,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">5,5k</td><td class="crd-td">-</td><td class="crd-td">5,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Saltpond</strong></td><td class="crd-td">GHA: 5,21, -1,06</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">3,9k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">5,4k (1660AD)</td></tr>
<tr><td class="crd-td"><strong>Wa</strong></td><td class="crd-td">GHA: 10,04, -2,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Asunafo</strong></td><td class="crd-td">GHA: 6,34, -0,71</td><td class="crd-td">-</td><td class="crd-td">531</td><td class="crd-td">581</td><td class="crd-td">610</td><td class="crd-td">-</td><td class="crd-td">5,2k (1510AD)</td></tr>
<tr><td class="crd-td"><strong>Techiman</strong></td><td class="crd-td">GHA: 7,6, -1,94</td><td class="crd-td">2,7k</td><td class="crd-td">4,8k</td><td class="crd-td">4k</td><td class="crd-td">4,4k</td><td class="crd-td">4,6k</td><td class="crd-td">5,2k (1740AD)</td></tr>
<tr><td class="crd-td"><strong>Shai Hills</strong></td><td class="crd-td">GHA: 5,92, 0,06</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k (1520AD)</td></tr>
<tr><td class="crd-td"><strong>Keta</strong></td><td class="crd-td">GHA: 5,92, 0,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">5,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 356 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed settlements in the Asante Empire, Fante and Gold Coast from 1500AD to 1880AD with peak populations (top 40 of 396 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Kingdom of Dahomey, Allada and Ewe Littoral

Table \ref{tab:zone4-sites} documents 224 settlements across Benin, Togo, eastern Ghana and westernmost Nigeria, topped by Savi (77,5k in 1727), Lagos (37,5k in 1881), Abomey (30k in 1851), Allada (30k in 1668), Ouidah (30k in 1720) and Porto-Novo (26,4k in 1885) [@Monroe2014DahomeySlavery; @Mac1900SlaveryAnd].

<figure class="crd-table-figure" id="tab:zone4-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Savi</strong></td><td class="crd-td">BEN: 6,43, 2,12</td><td class="crd-td">-</td><td class="crd-td">28,9k</td><td class="crd-td">16,1k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">77,5k (1727AD)</td></tr>
<tr><td class="crd-td"><strong>Lagos</strong></td><td class="crd-td">NGA: 6,67, 3,24</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">12,4k</td><td class="crd-td">20k</td><td class="crd-td">36,6k</td><td class="crd-td">37,5k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Abomey</strong></td><td class="crd-td">BEN: 7,16, 2,06</td><td class="crd-td">-</td><td class="crd-td">15,9k</td><td class="crd-td">28,4k</td><td class="crd-td">30k</td><td class="crd-td">-</td><td class="crd-td">30k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Allada</strong></td><td class="crd-td">BEN: 6,67, 2,15</td><td class="crd-td">4,6k</td><td class="crd-td">23,4k</td><td class="crd-td">6,8k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">30k (1668AD)</td></tr>
<tr><td class="crd-td"><strong>Ouidah</strong></td><td class="crd-td">BEN: 6,39, 2,09</td><td class="crd-td">-</td><td class="crd-td">17,4k</td><td class="crd-td">14,2k</td><td class="crd-td">16,8k</td><td class="crd-td">-</td><td class="crd-td">30k (1720AD)</td></tr>
<tr><td class="crd-td"><strong>Porto-Novo</strong></td><td class="crd-td">BEN: 6,57, 2,65</td><td class="crd-td">-</td><td class="crd-td">8,4k</td><td class="crd-td">14k</td><td class="crd-td">24,8k</td><td class="crd-td">26,2k</td><td class="crd-td">26,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Cana</strong></td><td class="crd-td">BEN: 7,1, 2,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,9k</td><td class="crd-td">14,8k</td><td class="crd-td">-</td><td class="crd-td">15k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Kétou</strong></td><td class="crd-td">BEN: 7,35, 2,61</td><td class="crd-td">6,8k</td><td class="crd-td">11,2k</td><td class="crd-td">13,5k</td><td class="crd-td">14,6k</td><td class="crd-td">-</td><td class="crd-td">14,6k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Badagry</strong></td><td class="crd-td">NGA: 6,43, 2,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,1k</td><td class="crd-td">11,4k</td><td class="crd-td">-</td><td class="crd-td">11,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Nikki</strong></td><td class="crd-td">BEN: 9,94, 3,21</td><td class="crd-td">3,2k</td><td class="crd-td">6,5k</td><td class="crd-td">7,8k</td><td class="crd-td">8,6k</td><td class="crd-td">-</td><td class="crd-td">8,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Yendi</strong></td><td class="crd-td">GHA: 9,46, -0,01</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">7,9k</td><td class="crd-td">8,4k</td><td class="crd-td">-</td><td class="crd-td">8,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Notsé</strong></td><td class="crd-td">TGO: 6,95, 1,17</td><td class="crd-td">4,6k</td><td class="crd-td">5,2k</td><td class="crd-td">3,8k</td><td class="crd-td">3,2k</td><td class="crd-td">2,9k</td><td class="crd-td">7,8k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Tado</strong></td><td class="crd-td">TGO: 7,15, 1,59</td><td class="crd-td">7,2k</td><td class="crd-td">4,8k</td><td class="crd-td">3,2k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">7,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Grand-Popo</strong></td><td class="crd-td">BEN: 6,28, 1,82</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">2,8k</td><td class="crd-td">4,5k</td><td class="crd-td">3,1k</td><td class="crd-td">6,8k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Aného</strong></td><td class="crd-td">TGO: 6,23, 1,59</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">5,8k</td><td class="crd-td">6,8k</td><td class="crd-td">5,8k</td><td class="crd-td">6,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Zogbodomey</strong></td><td class="crd-td">BEN: 7,08, 2,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k (1520AD)</td></tr>
<tr><td class="crd-td"><strong>Savé</strong></td><td class="crd-td">BEN: 8,04, 2,49</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">6,1k</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">6,1k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Ilaro</strong></td><td class="crd-td">NGA: 6,9, 3,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">5,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Agoué</strong></td><td class="crd-td">BEN: 6,25, 1,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">5,3k</td><td class="crd-td">5,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Bassar</strong></td><td class="crd-td">TGO: 9,26, 0,78</td><td class="crd-td">2,3k</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Djougou</strong></td><td class="crd-td">BEN: 9,7, 1,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">5,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Toviklin</strong></td><td class="crd-td">BEN: 6,9, 1,83</td><td class="crd-td">826</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">4,6k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Gambaga</strong></td><td class="crd-td">GHA: 10,53, -0,44</td><td class="crd-td">1,9k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Sansanné-Mango</strong></td><td class="crd-td">TGO: 10,35, 0,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Godomey</strong></td><td class="crd-td">BEN: 6,39, 2,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">4,6k (1715AD)</td></tr>
<tr><td class="crd-td"><strong>Sango Otta</strong></td><td class="crd-td">NGA: 6,69, 3,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">4,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Savalou</strong></td><td class="crd-td">BEN: 7,93, 1,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">4,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Lalo</strong></td><td class="crd-td">BEN: 6,93, 1,89</td><td class="crd-td">612</td><td class="crd-td">897</td><td class="crd-td">963</td><td class="crd-td">984</td><td class="crd-td">-</td><td class="crd-td">4,1k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Saboba</strong></td><td class="crd-td">GHA: 9,71, 0,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Atakpamé</strong></td><td class="crd-td">TGO: 7,51, 1,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,7k</td><td class="crd-td">3,8k</td><td class="crd-td">3,8k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Nalerigu</strong></td><td class="crd-td">GHA: 10,53, -0,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Parakou</strong></td><td class="crd-td">BEN: 9,36, 2,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,6k</td><td class="crd-td">3,8k</td><td class="crd-td">3,8k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Pèrèrè</strong></td><td class="crd-td">BEN: 9,8, 2,98</td><td class="crd-td">814</td><td class="crd-td">987</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">3,6k (1520AD)</td></tr>
<tr><td class="crd-td"><strong>Chereponi</strong></td><td class="crd-td">GHA: 10,14, 0,29</td><td class="crd-td">959</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">3,6k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Oja Odan</strong></td><td class="crd-td">NGA: 6,91, 2,85</td><td class="crd-td">1,7k</td><td class="crd-td">2,7k</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">3,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Banigbé</strong></td><td class="crd-td">BEN: 6,65, 2,71</td><td class="crd-td">2k</td><td class="crd-td">2,7k</td><td class="crd-td">3,2k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">3,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Cana-Agouna (Agonglo)</strong></td><td class="crd-td">BEN: 7,13, 2,07</td><td class="crd-td">3,3k</td><td class="crd-td">3,3k</td><td class="crd-td">3,2k</td><td class="crd-td">3k</td><td class="crd-td">2,9k</td><td class="crd-td">3,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kouve</strong></td><td class="crd-td">TGO: 6,66, 1,41</td><td class="crd-td">1,7k</td><td class="crd-td">2,4k</td><td class="crd-td">2,7k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">3,3k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Kante Togo</strong></td><td class="crd-td">TGO: 9,96, 1,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1510AD)</td></tr>
<tr><td class="crd-td"><strong>Kouandé</strong></td><td class="crd-td">BEN: 10,33, 1,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 184 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements in the Kingdom of Dahomey, Allada and the Ewe Littoral from 1500AD to 1880AD with peak populations (top 40 of 224 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Oyo Empire, Yorubaland and Kingdom of Benin

Table \ref{tab:zone5-sites} catalogues 364 settlements across western and central Nigeria, led by Ibadan (200k in 1850), Abeokuta (100k in 1861), Old Oyo (99,8k in 1780), Ilorin (85k in 1880), Ile-Ife (62,4k in 1500), Bida (58,4k in 1885), Benin City (52,8k in 1602), Ogbomosho (50k in 1856) and Raba (46,2k in 1840) [@Law1977OyoEmpire; @AgbajeWilliam1990NewsAnd; @Roese1984DasKonigreich].

<figure class="crd-table-figure" id="tab:zone5-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ibadan</strong></td><td class="crd-td">NGA: 7,41, 3,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">200k</td><td class="crd-td">71,4k</td><td class="crd-td">200k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Abeokuta</strong></td><td class="crd-td">NGA: 7,14, 3,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">55,7k</td><td class="crd-td">-</td><td class="crd-td">100k (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Old Oyo</strong></td><td class="crd-td">NGA: 8,99, 4,33</td><td class="crd-td">16,4k</td><td class="crd-td">2,8k</td><td class="crd-td">2,7k</td><td class="crd-td">3,7k</td><td class="crd-td">2,6k</td><td class="crd-td">99,8k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Ilorin</strong></td><td class="crd-td">NGA: 8,48, 4,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">34,6k</td><td class="crd-td">65,1k</td><td class="crd-td">85k</td><td class="crd-td">85k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Ile-Ife</strong></td><td class="crd-td">NGA: 7,48, 4,55</td><td class="crd-td">62,4k</td><td class="crd-td">46,8k</td><td class="crd-td">3,3k</td><td class="crd-td">52,4k</td><td class="crd-td">54,7k</td><td class="crd-td">62,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bida</strong></td><td class="crd-td">NGA: 9,07, 6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">52,7k</td><td class="crd-td">58,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Benin City</strong></td><td class="crd-td">NGA: 6,3, 5,63</td><td class="crd-td">47,5k</td><td class="crd-td">34,2k</td><td class="crd-td">32,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">58k (1668AD)</td></tr>
<tr><td class="crd-td"><strong>Iwo</strong></td><td class="crd-td">NGA: 7,64, 4,18</td><td class="crd-td">-</td><td class="crd-td">16,4k</td><td class="crd-td">30,7k</td><td class="crd-td">44k</td><td class="crd-td">-</td><td class="crd-td">50k (1858AD)</td></tr>
<tr><td class="crd-td"><strong>Ogbomosho</strong></td><td class="crd-td">NGA: 8,14, 4,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">26,4k</td><td class="crd-td">45,6k</td><td class="crd-td">-</td><td class="crd-td">50k (1856AD)</td></tr>
<tr><td class="crd-td"><strong>Raba</strong></td><td class="crd-td">NGA: 9,22, 5,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,5k</td><td class="crd-td">-</td><td class="crd-td">46,2k (1840AD)</td></tr>
<tr><td class="crd-td"><strong>Ijaye</strong></td><td class="crd-td">NGA: 7,63, 3,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">45k (1858AD)</td></tr>
<tr><td class="crd-td"><strong>Ijebu Ode</strong></td><td class="crd-td">NGA: 6,82, 3,93</td><td class="crd-td">-</td><td class="crd-td">12k</td><td class="crd-td">29,6k</td><td class="crd-td">38,4k</td><td class="crd-td">-</td><td class="crd-td">38,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Oyo</strong></td><td class="crd-td">NGA: 7,83, 3,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">38,4k (1856AD)</td></tr>
<tr><td class="crd-td"><strong>Oshogbo</strong></td><td class="crd-td">NGA: 7,78, 4,53</td><td class="crd-td">-</td><td class="crd-td">15,3k</td><td class="crd-td">29,1k</td><td class="crd-td">36,5k</td><td class="crd-td">-</td><td class="crd-td">38k (1858AD)</td></tr>
<tr><td class="crd-td"><strong>Lagos</strong></td><td class="crd-td">NGA: 6,45, 3,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,7k</td><td class="crd-td">20k</td><td class="crd-td">37,3k</td><td class="crd-td">37,5k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Igboho</strong></td><td class="crd-td">NGA: 8,84, 3,76</td><td class="crd-td">-</td><td class="crd-td">18k</td><td class="crd-td">16,1k</td><td class="crd-td">12,8k</td><td class="crd-td">-</td><td class="crd-td">34,2k (1560AD)</td></tr>
<tr><td class="crd-td"><strong>Owu-Ipole</strong></td><td class="crd-td">NGA: 7,28, 4,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">30,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">32k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Kaiama</strong></td><td class="crd-td">NGA: 9,6, 3,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">30k (1826AD)</td></tr>
<tr><td class="crd-td"><strong>Owo</strong></td><td class="crd-td">NGA: 7,2, 5,59</td><td class="crd-td">18,6k</td><td class="crd-td">20,6k</td><td class="crd-td">28,7k</td><td class="crd-td">16,5k</td><td class="crd-td">-</td><td class="crd-td">30k (1827AD)</td></tr>
<tr><td class="crd-td"><strong>Ilesha</strong></td><td class="crd-td">NGA: 7,63, 4,75</td><td class="crd-td">12,4k</td><td class="crd-td">21,6k</td><td class="crd-td">26,1k</td><td class="crd-td">28,4k</td><td class="crd-td">-</td><td class="crd-td">28,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ede</strong></td><td class="crd-td">NGA: 7,74, 4,44</td><td class="crd-td">2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k</td><td class="crd-td">5,4k</td><td class="crd-td">24,8k (1840AD)</td></tr>
<tr><td class="crd-td"><strong>Iseyin</strong></td><td class="crd-td">NGA: 7,97, 3,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24k (1856AD)</td></tr>
<tr><td class="crd-td"><strong>Ondo</strong></td><td class="crd-td">NGA: 7,1, 4,83</td><td class="crd-td">-</td><td class="crd-td">14,1k</td><td class="crd-td">18,4k</td><td class="crd-td">16,3k</td><td class="crd-td">18,4k</td><td class="crd-td">21,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Atani</strong></td><td class="crd-td">NGA: 6,01, 6,75</td><td class="crd-td">13,7k</td><td class="crd-td">17,6k</td><td class="crd-td">19,5k</td><td class="crd-td">19,3k</td><td class="crd-td">-</td><td class="crd-td">19,5k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Ado Ekiti</strong></td><td class="crd-td">NGA: 7,62, 5,2</td><td class="crd-td">7,2k</td><td class="crd-td">12,2k</td><td class="crd-td">12,3k</td><td class="crd-td">11,2k</td><td class="crd-td">18,6k</td><td class="crd-td">18,6k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Ikirun</strong></td><td class="crd-td">NGA: 7,91, 4,67</td><td class="crd-td">3,2k</td><td class="crd-td">6,9k</td><td class="crd-td">12k</td><td class="crd-td">16,1k</td><td class="crd-td">-</td><td class="crd-td">18,4k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Okpoko</strong></td><td class="crd-td">NGA: 5,73, 6,69</td><td class="crd-td">11k</td><td class="crd-td">16,3k</td><td class="crd-td">16,1k</td><td class="crd-td">17k</td><td class="crd-td">-</td><td class="crd-td">17k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Akure</strong></td><td class="crd-td">NGA: 7,25, 5,2</td><td class="crd-td">-</td><td class="crd-td">12,4k</td><td class="crd-td">15,3k</td><td class="crd-td">16,8k</td><td class="crd-td">-</td><td class="crd-td">16,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Shaki</strong></td><td class="crd-td">NGA: 8,67, 3,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,4k</td><td class="crd-td">-</td><td class="crd-td">15k (1856AD)</td></tr>
<tr><td class="crd-td"><strong>Pategi</strong></td><td class="crd-td">NGA: 8,72, 5,75</td><td class="crd-td">-</td><td class="crd-td">12k</td><td class="crd-td">11,5k</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">14,6k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Ila</strong></td><td class="crd-td">NGA: 8,01, 4,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,2k</td><td class="crd-td">-</td><td class="crd-td">14,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Apomu</strong></td><td class="crd-td">NGA: 7,35, 4,18</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">2,9k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">14k (1815AD)</td></tr>
<tr><td class="crd-td"><strong>Gbara Nupe</strong></td><td class="crd-td">NGA: 8,79, 5,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,8k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Ikerre</strong></td><td class="crd-td">NGA: 7,5, 5,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,4k</td><td class="crd-td">12,4k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Inisa</strong></td><td class="crd-td">NGA: 7,85, 4,33</td><td class="crd-td">7,5k</td><td class="crd-td">8,6k</td><td class="crd-td">10,6k</td><td class="crd-td">12,2k</td><td class="crd-td">-</td><td class="crd-td">12,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Bussa</strong></td><td class="crd-td">NGA: 10,23, 4,55</td><td class="crd-td">2,2k</td><td class="crd-td">8,6k</td><td class="crd-td">11,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12k (1806AD)</td></tr>
<tr><td class="crd-td"><strong>Epe</strong></td><td class="crd-td">NGA: 6,64, 3,96</td><td class="crd-td">-</td><td class="crd-td">5,3k</td><td class="crd-td">9,4k</td><td class="crd-td">11,5k</td><td class="crd-td">-</td><td class="crd-td">11,6k (1852AD)</td></tr>
<tr><td class="crd-td"><strong>Shagamu</strong></td><td class="crd-td">NGA: 6,85, 3,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Ejigbo</strong></td><td class="crd-td">NGA: 7,9, 4,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,2k (1858AD)</td></tr>
<tr><td class="crd-td"><strong>Idah</strong></td><td class="crd-td">NGA: 7,15, 6,79</td><td class="crd-td">-</td><td class="crd-td">9,4k</td><td class="crd-td">8,5k</td><td class="crd-td">6,8k</td><td class="crd-td">-</td><td class="crd-td">9,8k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 324 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed settlements in the Oyo Empire, Yorubaland and Kingdom of Benin from 1500AD to 1880AD with peak populations (top 40 of 364 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Niger Delta States, Arochukwu and Cross River

Table \ref{tab:zone6-sites} compiles 330 settlements across eastern Nigeria, western Cameroon and Bioko, led by Bauchi (30k in 1866), Umaisha (24,7k in 1833), Calabar (18,2k in 1885), Wukari, Onitsha and Bonny [@Skowronek2023GermanBrass].

<figure class="crd-table-figure" id="tab:zone6-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wukari</strong></td><td class="crd-td">NGA: 7,87, 9,77</td><td class="crd-td">9,8k</td><td class="crd-td">13,8k</td><td class="crd-td">11,6k</td><td class="crd-td">9,8k</td><td class="crd-td">-</td><td class="crd-td">60k (1879AD)</td></tr>
<tr><td class="crd-td"><strong>Bauchi</strong></td><td class="crd-td">NGA: 10,31, 9,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">23k</td><td class="crd-td">-</td><td class="crd-td">50k (1867AD)</td></tr>
<tr><td class="crd-td"><strong>Igbidu</strong></td><td class="crd-td">NGA: 6,07, 8,02</td><td class="crd-td">21,6k</td><td class="crd-td">25,3k</td><td class="crd-td">28,7k</td><td class="crd-td">30,4k</td><td class="crd-td">-</td><td class="crd-td">30,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Umaisha</strong></td><td class="crd-td">NGA: 8,02, 7,19</td><td class="crd-td">4,2k</td><td class="crd-td">9k</td><td class="crd-td">15,8k</td><td class="crd-td">10,3k</td><td class="crd-td">3,6k</td><td class="crd-td">24,6k (1833AD)</td></tr>
<tr><td class="crd-td"><strong>Calabar</strong></td><td class="crd-td">NGA: 5,01, 8,35</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">9,5k</td><td class="crd-td">11,4k</td><td class="crd-td">17,2k</td><td class="crd-td">18,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Keffi</strong></td><td class="crd-td">NGA: 8,85, 7,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,4k</td><td class="crd-td">14,1k</td><td class="crd-td">15k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Onitsha</strong></td><td class="crd-td">NGA: 6,14, 6,79</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">10,5k</td><td class="crd-td">12,9k</td><td class="crd-td">15k</td><td class="crd-td">15k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Biepi</strong></td><td class="crd-td">NGA: 8,08, 9,86</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,1k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Lafia</strong></td><td class="crd-td">NGA: 8,54, 8,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">12,9k</td><td class="crd-td">14k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Okpogho</strong></td><td class="crd-td">NGA: 6,45, 7,32</td><td class="crd-td">9,5k</td><td class="crd-td">12k</td><td class="crd-td">13k</td><td class="crd-td">13,4k</td><td class="crd-td">-</td><td class="crd-td">13,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Suleja</strong></td><td class="crd-td">NGA: 9,18, 7,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,5k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Arochukwu</strong></td><td class="crd-td">NGA: 5,4, 7,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,5k</td><td class="crd-td">11,2k</td><td class="crd-td">-</td><td class="crd-td">11,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Akpugo</strong></td><td class="crd-td">NGA: 6,35, 7,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,6k</td><td class="crd-td">10,3k</td><td class="crd-td">-</td><td class="crd-td">10,6k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Obosi</strong></td><td class="crd-td">NGA: 6,1, 6,81</td><td class="crd-td">5,8k</td><td class="crd-td">8,7k</td><td class="crd-td">10k</td><td class="crd-td">10,2k</td><td class="crd-td">-</td><td class="crd-td">10,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Afikpo</strong></td><td class="crd-td">NGA: 5,87, 7,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,9k</td><td class="crd-td">8,9k</td><td class="crd-td">9,5k</td><td class="crd-td">9,5k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Bonny</strong></td><td class="crd-td">NGA: 4,42, 7,16</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">8,5k</td><td class="crd-td">8,6k</td><td class="crd-td">-</td><td class="crd-td">9,4k (1862AD)</td></tr>
<tr><td class="crd-td"><strong>Amaigbo</strong></td><td class="crd-td">NGA: 5,73, 7,12</td><td class="crd-td">7,5k</td><td class="crd-td">8,9k</td><td class="crd-td">8,8k</td><td class="crd-td">9k</td><td class="crd-td">-</td><td class="crd-td">9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Otuocha</strong></td><td class="crd-td">NGA: 6,33, 6,88</td><td class="crd-td">-</td><td class="crd-td">7,1k</td><td class="crd-td">6,3k</td><td class="crd-td">5,9k</td><td class="crd-td">5,6k</td><td class="crd-td">8,6k (1520AD)</td></tr>
<tr><td class="crd-td"><strong>Igbo Ukwu</strong></td><td class="crd-td">NGA: 6,02, 7,02</td><td class="crd-td">4,4k</td><td class="crd-td">8,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,4k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Nkpor</strong></td><td class="crd-td">NGA: 6,15, 6,83</td><td class="crd-td">-</td><td class="crd-td">7,4k</td><td class="crd-td">7,7k</td><td class="crd-td">8,3k</td><td class="crd-td">-</td><td class="crd-td">8,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Nnewi</strong></td><td class="crd-td">NGA: 6,02, 6,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,2k</td><td class="crd-td">8,2k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Muri</strong></td><td class="crd-td">NGA: 9,19, 10,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8k (1854AD)</td></tr>
<tr><td class="crd-td"><strong>Nri</strong></td><td class="crd-td">NGA: 6,15, 7,04</td><td class="crd-td">3,3k</td><td class="crd-td">7,2k</td><td class="crd-td">6,5k</td><td class="crd-td">6,2k</td><td class="crd-td">-</td><td class="crd-td">7,8k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Nasarawa</strong></td><td class="crd-td">NGA: 8,55, 7,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Aku</strong></td><td class="crd-td">NGA: 6,7, 7,34</td><td class="crd-td">5,3k</td><td class="crd-td">6,6k</td><td class="crd-td">7,1k</td><td class="crd-td">7,5k</td><td class="crd-td">-</td><td class="crd-td">7,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Buguma</strong></td><td class="crd-td">NGA: 4,74, 6,85</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">7,2k</td><td class="crd-td">7,4k</td><td class="crd-td">1,2k</td><td class="crd-td">7,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Nsukka</strong></td><td class="crd-td">NGA: 6,85, 7,42</td><td class="crd-td">-</td><td class="crd-td">7,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,2k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Jemaa</strong></td><td class="crd-td">NGA: 9,47, 8,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Ishieke</strong></td><td class="crd-td">NGA: 6,38, 8,04</td><td class="crd-td">-</td><td class="crd-td">6,6k</td><td class="crd-td">7,1k</td><td class="crd-td">7k</td><td class="crd-td">-</td><td class="crd-td">7,1k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Enugu Ukwu</strong></td><td class="crd-td">NGA: 6,17, 7,01</td><td class="crd-td">3,9k</td><td class="crd-td">5,8k</td><td class="crd-td">6k</td><td class="crd-td">5,9k</td><td class="crd-td">-</td><td class="crd-td">7k (1520AD)</td></tr>
<tr><td class="crd-td"><strong>Opobo</strong></td><td class="crd-td">NGA: 4,51, 7,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Uzuakoli</strong></td><td class="crd-td">NGA: 5,62, 7,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Awka</strong></td><td class="crd-td">NGA: 6,21, 7,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">-</td><td class="crd-td">6,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Bafut</strong></td><td class="crd-td">CMR: 6,08, 10,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">6,8k</td><td class="crd-td">-</td><td class="crd-td">6,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Bende</strong></td><td class="crd-td">NGA: 5,56, 7,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k (1840AD)</td></tr>
<tr><td class="crd-td"><strong>Nembe</strong></td><td class="crd-td">NGA: 4,54, 6,4</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td><td class="crd-td">6,8k</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">6,8k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Agulu</strong></td><td class="crd-td">NGA: 6,1, 7,06</td><td class="crd-td">3,4k</td><td class="crd-td">5,4k</td><td class="crd-td">6,4k</td><td class="crd-td">6,7k</td><td class="crd-td">-</td><td class="crd-td">6,7k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ohafia</strong></td><td class="crd-td">NGA: 5,64, 7,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">-</td><td class="crd-td">6,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Umuleri</strong></td><td class="crd-td">NGA: 6,3, 6,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Eha Amufu</strong></td><td class="crd-td">NGA: 6,66, 7,76</td><td class="crd-td">4,4k</td><td class="crd-td">5,2k</td><td class="crd-td">5,9k</td><td class="crd-td">6,2k</td><td class="crd-td">-</td><td class="crd-td">6,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 290 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed settlements in the Niger Delta States, Arochukwu and Cross River from 1500AD to 1880AD with peak populations (top 40 of 330 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Bamum, Cameroon Grassfields and Biafra Coast

Table \ref{tab:zone7-sites} lists 195 settlements across central and northern Cameroon and Adamawa, led by Foumban (22k in 1885), Douala (18,6k in 1884), Ngaoundéré and Tibati.

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
<tr><td class="crd-td"><strong>Laikom</strong></td><td class="crd-td">CMR: 6,27, 10,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Bandjoun</strong></td><td class="crd-td">CMR: 5,38, 10,41</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">5k</td><td class="crd-td">5,9k</td><td class="crd-td">-</td><td class="crd-td">5,9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Rio del Rey</strong></td><td class="crd-td">CMR: 4,72, 8,64</td><td class="crd-td">3,3k</td><td class="crd-td">4,1k</td><td class="crd-td">4,5k</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">5,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Baham</strong></td><td class="crd-td">CMR: 5,33, 10,37</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">3,8k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ngambe-Tikar</strong></td><td class="crd-td">CMR: 5,72, 11,38</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">5k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Oku Grassfields</strong></td><td class="crd-td">CMR: 6,25, 10,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,5k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Bibemi</strong></td><td class="crd-td">CMR: 9,31, 13,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">4,1k</td><td class="crd-td">4,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Njinikom</strong></td><td class="crd-td">CMR: 6,2, 10,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">4,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Bafoussam</strong></td><td class="crd-td">CMR: 5,41, 10,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Jada</strong></td><td class="crd-td">NGA: 8,75, 12,15</td><td class="crd-td">2,2k</td><td class="crd-td">3,3k</td><td class="crd-td">3,5k</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">3,7k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Dschang</strong></td><td class="crd-td">CMR: 5,44, 10,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Babadjou</strong></td><td class="crd-td">CMR: 5,67, 10,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">3,7k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Bana</strong></td><td class="crd-td">CMR: 5,15, 10,28</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">3,1k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">3,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Mouanko-Lobethal</strong></td><td class="crd-td">CMR: 3,64, 9,78</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Nachtigal B</strong></td><td class="crd-td">CMR: 4,38, 11,71</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Nditam</strong></td><td class="crd-td">CMR: 5,34, 11,33</td><td class="crd-td">2,6k</td><td class="crd-td">3,3k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Mfomakap/Nkometou</strong></td><td class="crd-td">CMR: 4,05, 11,55</td><td class="crd-td">2,1k</td><td class="crd-td">2,7k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1849AD)</td></tr>
<tr><td class="crd-td"><strong>Dibamba</strong></td><td class="crd-td">CMR: 4, 9,82</td><td class="crd-td">2,5k</td><td class="crd-td">3,2k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1839AD)</td></tr>
<tr><td class="crd-td"><strong>Kribi</strong></td><td class="crd-td">CMR: 2,96, 9,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,7k</td><td class="crd-td">3,1k</td><td class="crd-td">3,1k (1884AD)</td></tr>
<tr><td class="crd-td"><strong>Maya Belwa</strong></td><td class="crd-td">NGA: 9,05, 12,06</td><td class="crd-td">2,1k</td><td class="crd-td">2,7k</td><td class="crd-td">2,9k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ndeba-Somie</strong></td><td class="crd-td">CMR: 6,28, 11,26</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3k</td><td class="crd-td">2,8k</td><td class="crd-td">2,7k</td><td class="crd-td">3k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>BE-Butte I/TR A</strong></td><td class="crd-td">CMR: 9,32, 13,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1689AD)</td></tr>
<tr><td class="crd-td"><strong>Nachtigal D</strong></td><td class="crd-td">CMR: 4,2, 11,6</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1692AD)</td></tr>
<tr><td class="crd-td"><strong>Damare</strong></td><td class="crd-td">NGA: 9,31, 12,48</td><td class="crd-td">1,4k</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Lac Ossa</strong></td><td class="crd-td">CMR: 3,78, 10,02</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1667AD)</td></tr>
<tr><td class="crd-td"><strong>Oku</strong></td><td class="crd-td">CMR: 6,25, 10,43</td><td class="crd-td">2,4k</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Pan Maguenda</strong></td><td class="crd-td">CMR: 4,92, 11,03</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Pong Solo</strong></td><td class="crd-td">CMR: 4,12, 11,28</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Batié</strong></td><td class="crd-td">CMR: 5,31, 10,32</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,1k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Bafia</strong></td><td class="crd-td">CMR: 4,74, 11,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Tignere</strong></td><td class="crd-td">CMR: 7,36, 12,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 155 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Individually assessed settlements in Bamum, the Cameroon Grassfields and Biafra Coast from 1500AD to 1880AD with peak populations (top 40 of 195 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Loango, Teke-Makoko and Gabon Littoral

Table \ref{tab:zone8-sites} documents 205 settlements across Gabon, Republic of the Congo, mainland Equatorial Guinea, Cabinda and the lower Congo Pool, led by Buali (18,5k in 1668), Bolobo, Cabinda (8,6k in 1783) and Mbe.

<figure class="crd-table-figure" id="tab:zone8-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bolobo</strong></td><td class="crd-td">COD: -2,16, 16,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">14,5k</td><td class="crd-td">23,1k</td><td class="crd-td">24k (1883AD)</td></tr>
<tr><td class="crd-td"><strong>Buali</strong></td><td class="crd-td">COG: -4,63, 11,83</td><td class="crd-td">6k</td><td class="crd-td">17,4k</td><td class="crd-td">9,5k</td><td class="crd-td">5,4k</td><td class="crd-td">3,4k</td><td class="crd-td">18,5k (1668AD)</td></tr>
<tr><td class="crd-td"><strong>Cabinda</strong></td><td class="crd-td">AGO: -5,58, 12,2</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">8k</td><td class="crd-td">6,2k</td><td class="crd-td">5k</td><td class="crd-td">8,6k (1783AD)</td></tr>
<tr><td class="crd-td"><strong>Ntamo Pool</strong></td><td class="crd-td">COG: -4,21, 15,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,1k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Mbe</strong></td><td class="crd-td">COG: -3,19, 15,7</td><td class="crd-td">-</td><td class="crd-td">6,6k</td><td class="crd-td">7,2k</td><td class="crd-td">6,8k</td><td class="crd-td">5,5k</td><td class="crd-td">7,4k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Nkayi</strong></td><td class="crd-td">COG: -4,18, 13,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">6,7k</td><td class="crd-td">-</td><td class="crd-td">6,7k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Cacongo</strong></td><td class="crd-td">AGO: -5,24, 12,14</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">4,7k</td><td class="crd-td">3,2k</td><td class="crd-td">2,3k</td><td class="crd-td">6,4k (1770AD)</td></tr>
<tr><td class="crd-td"><strong>Boma</strong></td><td class="crd-td">COD: -5,82, 13,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">6,2k (1877AD)</td></tr>
<tr><td class="crd-td"><strong>Mbebe Teke</strong></td><td class="crd-td">COG: -3,28, 15,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Mindouli Copper</strong></td><td class="crd-td">COG: -4,27, 14,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k (1520AD)</td></tr>
<tr><td class="crd-td"><strong>Tshumbiri</strong></td><td class="crd-td">COD: -2,64, 16,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,9k</td><td class="crd-td">4,4k</td><td class="crd-td">4,4k (1883AD)</td></tr>
<tr><td class="crd-td"><strong>Kasongo-Lunda</strong></td><td class="crd-td">COD: -6,48, 16,82</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">4,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Boko-Songho</strong></td><td class="crd-td">COG: -4,42, 13,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Kinshasa-Kingabwa/Ngombela</strong></td><td class="crd-td">COD: -4,33, 15,34</td><td class="crd-td">3,2k</td><td class="crd-td">3,5k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Yumbi</strong></td><td class="crd-td">COD: -1,9, 16,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k</td><td class="crd-td">3,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Mossaka</strong></td><td class="crd-td">COG: -1,22, 16,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">3k</td><td class="crd-td">3,4k</td><td class="crd-td">3,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Libreville</strong></td><td class="crd-td">GAB: 0,43, 9,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Sinnda Site</strong></td><td class="crd-td">COG: -3,84, 12,8</td><td class="crd-td">2,8k</td><td class="crd-td">3,4k</td><td class="crd-td">3,1k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">3,4k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Gombe Point Settlement</strong></td><td class="crd-td">COD: -4,3, 15,28</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1728AD)</td></tr>
<tr><td class="crd-td"><strong>Bacongo</strong></td><td class="crd-td">COG: -4,29, 15,27</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1728AD)</td></tr>
<tr><td class="crd-td"><strong>Makuti 1</strong></td><td class="crd-td">COG: -4,29, 14,33</td><td class="crd-td">2,7k</td><td class="crd-td">3,2k</td><td class="crd-td">3k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Ntadi-Yomba</strong></td><td class="crd-td">COG: -4,25, 13,77</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1677AD)</td></tr>
<tr><td class="crd-td"><strong>Kisala Singa</strong></td><td class="crd-td">COD: -4,76, 13,01</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1682AD)</td></tr>
<tr><td class="crd-td"><strong>Mushie</strong></td><td class="crd-td">COD: -3,01, 16,93</td><td class="crd-td">-</td><td class="crd-td">405</td><td class="crd-td">399</td><td class="crd-td">359</td><td class="crd-td">-</td><td class="crd-td">2,7k (1510AD)</td></tr>
<tr><td class="crd-td"><strong>Moubiri</strong></td><td class="crd-td">COG: -4,02, 14,01</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1667AD)</td></tr>
<tr><td class="crd-td"><strong>Massabi</strong></td><td class="crd-td">AGO: -4,97, 12,08</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Okanda 5</strong></td><td class="crd-td">GAB: -0,13, 11,59</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mfouati</strong></td><td class="crd-td">COG: -4,38, 13,81</td><td class="crd-td">282</td><td class="crd-td">356</td><td class="crd-td">388</td><td class="crd-td">444</td><td class="crd-td">-</td><td class="crd-td">2,6k (1510AD)</td></tr>
<tr><td class="crd-td"><strong>Tchissanga</strong></td><td class="crd-td">COG: -4,54, 11,8</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Soukoudzap</strong></td><td class="crd-td">GAB: 1,67, 11,51</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1837AD)</td></tr>
<tr><td class="crd-td"><strong>Lope 2 Settlement</strong></td><td class="crd-td">GAB: -0,22, 11,59</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1698AD)</td></tr>
<tr><td class="crd-td"><strong>Ndzomossi</strong></td><td class="crd-td">GAB: 1,64, 11,61</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,5k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Nkobombomou</strong></td><td class="crd-td">GAB: 2,03, 11,5</td><td class="crd-td">1,9k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1746AD)</td></tr>
<tr><td class="crd-td"><strong>Mpassa</strong></td><td class="crd-td">COG: -4,3, 14,27</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Otoumbi</strong></td><td class="crd-td">GAB: -0,06, 11,12</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bitorri</strong></td><td class="crd-td">COG: -3,9, 14,5</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>M'Bam</strong></td><td class="crd-td">GAB: 1,34, 11,52</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1756AD)</td></tr>
<tr><td class="crd-td"><strong>Ngidi</strong></td><td class="crd-td">COG: -4,05, 15,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1516AD)</td></tr>
<tr><td class="crd-td"><strong>Pointe-Noire Coastal Site</strong></td><td class="crd-td">COG: -4,75, 11,85</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ganda-Kimpese</strong></td><td class="crd-td">COG: -4,4, 12,38</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 165 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Individually assessed settlements in Loango, Teke-Makoko and the Gabon Littoral from 1500AD to 1880AD with peak populations (top 40 of 205 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Kongo, Ndongo, Matamba and Portuguese Angola

Table \ref{tab:zone9-sites} records 165 settlements across northern Angola and Bas-Congo, led by Mbanza Congo (52k in 1550), Kabasa (24k in 1585), Luanda (17,8k in 1885), Soyo (15,2k in 1705) and Santa Maria de Matamba (14,2k in 1660) [@Thornton1977KongoDemography; @Ferreira2011TheSuppression; @Ngaba2026BercoEducacao].

<figure class="crd-table-figure" id="tab:zone9-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mbanza Congo</strong></td><td class="crd-td">AGO: -6,25, 14,23</td><td class="crd-td">22,5k</td><td class="crd-td">831</td><td class="crd-td">831</td><td class="crd-td">708</td><td class="crd-td">3,7k</td><td class="crd-td">52k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Kabasa</strong></td><td class="crd-td">AGO: -9,35, 15,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24k (1585AD)</td></tr>
<tr><td class="crd-td"><strong>Luanda</strong></td><td class="crd-td">AGO: -8,92, 13,38</td><td class="crd-td">-</td><td class="crd-td">8,1k</td><td class="crd-td">6,5k</td><td class="crd-td">8,4k</td><td class="crd-td">17,2k</td><td class="crd-td">17,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Soyo</strong></td><td class="crd-td">AGO: -6,19, 12,37</td><td class="crd-td">4,8k</td><td class="crd-td">15k</td><td class="crd-td">637</td><td class="crd-td">4,2k</td><td class="crd-td">1,1k</td><td class="crd-td">15,2k (1705AD)</td></tr>
<tr><td class="crd-td"><strong>Santa Maria de Matamba</strong></td><td class="crd-td">AGO: -8,75, 16,55</td><td class="crd-td">-</td><td class="crd-td">11,5k</td><td class="crd-td">6,9k</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">14,2k (1660AD)</td></tr>
<tr><td class="crd-td"><strong>Kasanje</strong></td><td class="crd-td">AGO: -9,35, 17,55</td><td class="crd-td">-</td><td class="crd-td">7,5k</td><td class="crd-td">12,4k</td><td class="crd-td">8,9k</td><td class="crd-td">5,4k</td><td class="crd-td">12,4k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Mbanza Nsundi</strong></td><td class="crd-td">COD: -4,95, 14,95</td><td class="crd-td">4,2k</td><td class="crd-td">6,2k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,8k (1655AD)</td></tr>
<tr><td class="crd-td"><strong>Mbanza Mbata</strong></td><td class="crd-td">AGO: -6,05, 15,25</td><td class="crd-td">3,9k</td><td class="crd-td">5,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,4k (1655AD)</td></tr>
<tr><td class="crd-td"><strong>Mbanza Mpangu</strong></td><td class="crd-td">COD: -5,42, 15,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,3k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Mbanza Mbamba</strong></td><td class="crd-td">AGO: -7,45, 13,85</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,6k (1620AD)</td></tr>
<tr><td class="crd-td"><strong>Funda</strong></td><td class="crd-td">AGO: -8,84, 13,55</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">6,3k</td><td class="crd-td">7,3k</td><td class="crd-td">-</td><td class="crd-td">7,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Camabatela</strong></td><td class="crd-td">AGO: -8,19, 15,37</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">6,8k</td><td class="crd-td">5,7k</td><td class="crd-td">-</td><td class="crd-td">6,8k (1797AD)</td></tr>
<tr><td class="crd-td"><strong>Mbanza Pemba</strong></td><td class="crd-td">AGO: -6,97, 14,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Kindoki</strong></td><td class="crd-td">COD: -5,22, 15,05</td><td class="crd-td">5,4k</td><td class="crd-td">3,2k</td><td class="crd-td">2,9k</td><td class="crd-td">3k</td><td class="crd-td">3,1k</td><td class="crd-td">5,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ambuíla</strong></td><td class="crd-td">AGO: -7,85, 14,98</td><td class="crd-td">3,4k</td><td class="crd-td">4,3k</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1845AD)</td></tr>
<tr><td class="crd-td"><strong>Úcua</strong></td><td class="crd-td">AGO: -8,65, 14,16</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">4,3k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Cabiri</strong></td><td class="crd-td">AGO: -8,92, 13,66</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">4,4k</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">4,9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Dondo</strong></td><td class="crd-td">AGO: -9,68, 14,42</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">3k</td><td class="crd-td">3,7k</td><td class="crd-td">4,8k</td><td class="crd-td">4,8k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Ambriz</strong></td><td class="crd-td">AGO: -7,85, 13,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">4,1k</td><td class="crd-td">3k</td><td class="crd-td">4,8k (1845AD)</td></tr>
<tr><td class="crd-td"><strong>Golungo Alto</strong></td><td class="crd-td">AGO: -9,14, 14,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">4,6k (1844AD)</td></tr>
<tr><td class="crd-td"><strong>Sombo</strong></td><td class="crd-td">AGO: -8,74, 20,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">4,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ngongo Mbata</strong></td><td class="crd-td">COD: -5,78, 15,12</td><td class="crd-td">4,6k</td><td class="crd-td">3,2k</td><td class="crd-td">3,3k</td><td class="crd-td">3,3k</td><td class="crd-td">3,3k</td><td class="crd-td">4,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Pungo Andongo</strong></td><td class="crd-td">AGO: -9,67, 15,59</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,2k</td><td class="crd-td">3,4k</td><td class="crd-td">2,8k</td><td class="crd-td">4,2k (1645AD)</td></tr>
<tr><td class="crd-td"><strong>Massangano</strong></td><td class="crd-td">AGO: -9,63, 14,26</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">3,6k</td><td class="crd-td">2,8k</td><td class="crd-td">1,8k</td><td class="crd-td">4,1k (1777AD)</td></tr>
<tr><td class="crd-td"><strong>Pango Aluquém</strong></td><td class="crd-td">AGO: -8,71, 14,46</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,7k</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Chiluage</strong></td><td class="crd-td">AGO: -9,52, 21,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ambuíla</strong></td><td class="crd-td">AGO: -7,44, 14,65</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">1,8k</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">3,8k (1665AD)</td></tr>
<tr><td class="crd-td"><strong>Massango</strong></td><td class="crd-td">AGO: -8,03, 16,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">3,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kiwaba Nzoji</strong></td><td class="crd-td">AGO: -8,95, 16,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">3,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kinsala</strong></td><td class="crd-td">COD: -5,73, 15,14</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Calulo</strong></td><td class="crd-td">AGO: -10, 14,9</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">3,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Malanje</strong></td><td class="crd-td">AGO: -9,54, 16,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Camaxilo</strong></td><td class="crd-td">AGO: -8,34, 18,91</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">3,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kuimba</strong></td><td class="crd-td">AGO: -6,12, 14,62</td><td class="crd-td">1,4k</td><td class="crd-td">2,6k</td><td class="crd-td">3,1k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">3,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Banga</strong></td><td class="crd-td">AGO: -8,73, 15,17</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,9k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">3,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Mucaba</strong></td><td class="crd-td">AGO: -7,26, 15,08</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,8k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Benfica Shellmidden</strong></td><td class="crd-td">AGO: -8,97, 13,15</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k</td><td class="crd-td">2,8k</td><td class="crd-td">3,1k</td><td class="crd-td">3,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Bembe</strong></td><td class="crd-td">AGO: -7,03, 14,31</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,5k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1856AD)</td></tr>
<tr><td class="crd-td"><strong>Marimba</strong></td><td class="crd-td">AGO: -8,36, 17,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Barra do Kwanza</strong></td><td class="crd-td">AGO: -9,31, 13,14</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,7k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 125 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Individually assessed settlements in Kongo, Ndongo, Matamba and Portuguese Angola from 1500AD to 1880AD with peak populations (top 40 of 165 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Ovimbundu Kingdoms, Benguela and Southern Angola

Table \ref{tab:zone10-sites} compiles 146 settlements across the Bié plateau, southern Angola, northern Namibia and Barotseland, led by Bailundo, Cuito (11,8k in 1875), Lealui and Benguela (4,6k in 1885) [@Ferreira2017TheSuppression].

<figure class="crd-table-figure" id="tab:zone10-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bailundo</strong></td><td class="crd-td">AGO: -12,19, 15,86</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,7k</td><td class="crd-td">12,6k</td><td class="crd-td">14,8k</td><td class="crd-td">14,8k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Cuito</strong></td><td class="crd-td">AGO: -12,38, 16,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">9,6k</td><td class="crd-td">-</td><td class="crd-td">11,8k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Lealui</strong></td><td class="crd-td">ZMB: -15,23, 23,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k</td><td class="crd-td">7,1k</td><td class="crd-td">6,7k</td><td class="crd-td">11,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Linyanti</strong></td><td class="crd-td">NAM: -18,07, 24,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,2k (1855AD)</td></tr>
<tr><td class="crd-td"><strong>Lago Dilolo</strong></td><td class="crd-td">AGO: -11,5, 22,01</td><td class="crd-td">4,1k</td><td class="crd-td">5,1k</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,3k (1845AD)</td></tr>
<tr><td class="crd-td"><strong>Andulo</strong></td><td class="crd-td">AGO: -11,49, 16,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">6,2k</td><td class="crd-td">5,5k</td><td class="crd-td">6,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Oshikango</strong></td><td class="crd-td">NAM: -17,42, 15,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k (1866AD)</td></tr>
<tr><td class="crd-td"><strong>Galangue</strong></td><td class="crd-td">AGO: -13,79, 16,11</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">4,1k</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">5,5k (1855AD)</td></tr>
<tr><td class="crd-td"><strong>Ondangwa</strong></td><td class="crd-td">NAM: -17,91, 15,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Sesheke</strong></td><td class="crd-td">ZMB: -17,47, 24,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">5,4k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Benguela</strong></td><td class="crd-td">AGO: -12,61, 13,4</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">3k</td><td class="crd-td">2,8k</td><td class="crd-td">4,4k</td><td class="crd-td">4,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Virei</strong></td><td class="crd-td">AGO: -15,73, 12,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">4,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Camucuio</strong></td><td class="crd-td">AGO: -14,11, 13,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">4,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Nancova</strong></td><td class="crd-td">AGO: -16,39, 18,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">4,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Sambo</strong></td><td class="crd-td">AGO: -13,06, 16,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">4,2k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Xangongo</strong></td><td class="crd-td">AGO: -16,75, 14,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,6k</td><td class="crd-td">4,1k</td><td class="crd-td">4,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Caconda</strong></td><td class="crd-td">AGO: -13,72, 15,07</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">2,9k</td><td class="crd-td">3,7k</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Caiundo</strong></td><td class="crd-td">AGO: -15,7, 17,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">4,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Nana Candundo</strong></td><td class="crd-td">AGO: -11,52, 23,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">4,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Seles</strong></td><td class="crd-td">AGO: -11,41, 14,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">3,9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Cassinga</strong></td><td class="crd-td">AGO: -15,12, 16,09</td><td class="crd-td">2,4k</td><td class="crd-td">3,1k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1845AD)</td></tr>
<tr><td class="crd-td"><strong>Catumbela</strong></td><td class="crd-td">AGO: -12,43, 13,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">3,8k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Caluquembe</strong></td><td class="crd-td">AGO: -13,79, 14,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">3,7k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Cazage</strong></td><td class="crd-td">AGO: -11,07, 20,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">3,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Quilengues</strong></td><td class="crd-td">AGO: -14,08, 14,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,9k</td><td class="crd-td">3,3k</td><td class="crd-td">3,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Moçâmedes</strong></td><td class="crd-td">AGO: -15,21, 12,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">931</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Chitembo</strong></td><td class="crd-td">AGO: -13,51, 16,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">3,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Okahao</strong></td><td class="crd-td">NAM: -17,89, 15,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Macondo</strong></td><td class="crd-td">AGO: -12,58, 23,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Lucusse</strong></td><td class="crd-td">AGO: -12,52, 20,82</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Dombe Grande</strong></td><td class="crd-td">AGO: -12,95, 13,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">2,9k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Elim Namibia</strong></td><td class="crd-td">NAM: -17,73, 15,49</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Ndalambiri</strong></td><td class="crd-td">AGO: -10,95, 14,68</td><td class="crd-td">2,1k</td><td class="crd-td">2,5k</td><td class="crd-td">2,6k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1869AD)</td></tr>
<tr><td class="crd-td"><strong>Cazombo</strong></td><td class="crd-td">AGO: -11,9, 22,91</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Chiange</strong></td><td class="crd-td">AGO: -15,74, 13,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Baía Farta</strong></td><td class="crd-td">AGO: -12,62, 13,22</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Otchinjau</strong></td><td class="crd-td">AGO: -16,5, 13,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Sumbe</strong></td><td class="crd-td">AGO: -11,2, 13,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,9k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Cassai-Sul</strong></td><td class="crd-td">AGO: -10,59, 21,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Negola</strong></td><td class="crd-td">AGO: -14,14, 14,49</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1845AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 106 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 10.</span> Individually assessed settlements in the Ovimbundu Kingdoms, Benguela and Southern Angola from 1500AD to 1880AD with peak populations (top 40 of 146 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Kuba Kingdom, Inner Congo and Ubangi

Table \ref{tab:zone11-sites} lists 380 settlements across the inner Congo forest, Ubangi and South Sudanese borderlands, led by Kuba capital Nsheng (10,8k in 1850), Yambio, Bangassou and Rafai [@Coloniales1920CongoRevue].

<figure class="crd-table-figure" id="tab:zone11-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mushenge</strong></td><td class="crd-td">COD: -4,43, 21,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,4k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Nsheng</strong></td><td class="crd-td">COD: -4,78, 21,39</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">9,1k</td><td class="crd-td">10,8k</td><td class="crd-td">-</td><td class="crd-td">10,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Yambio</strong></td><td class="crd-td">SSD: 4,59, 28,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Irebu</strong></td><td class="crd-td">COD: -0,61, 17,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">5,6k</td><td class="crd-td">6,7k</td><td class="crd-td">6,8k (1883AD)</td></tr>
<tr><td class="crd-td"><strong>Lukolela</strong></td><td class="crd-td">COD: -1,06, 17,17</td><td class="crd-td">657</td><td class="crd-td">1,7k</td><td class="crd-td">903</td><td class="crd-td">4,3k</td><td class="crd-td">4,9k</td><td class="crd-td">5k (1883AD)</td></tr>
<tr><td class="crd-td"><strong>Kabare</strong></td><td class="crd-td">COD: -2,5, 28,79</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">3,7k</td><td class="crd-td">4,4k</td><td class="crd-td">4,8k</td><td class="crd-td">4,8k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Bangassou</strong></td><td class="crd-td">CAF: 4,75, 22,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Mangai</strong></td><td class="crd-td">COD: -4,07, 19,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">4,4k</td><td class="crd-td">4,7k</td><td class="crd-td">4,7k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Doba Old</strong></td><td class="crd-td">CHA: 8,65, 16,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Lokandu</strong></td><td class="crd-td">COD: -2,53, 25,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Dibaya-Lubue</strong></td><td class="crd-td">COD: -4,16, 19,86</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,9k</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Kayna</strong></td><td class="crd-td">COD: -0,6, 29,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,6k</td><td class="crd-td">4k</td><td class="crd-td">4k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Rafai</strong></td><td class="crd-td">CAF: 4,95, 23,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Zémio</strong></td><td class="crd-td">CAF: 5,03, 25,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">3,8k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Idjwi</strong></td><td class="crd-td">COD: -1,99, 29,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Katwa</strong></td><td class="crd-td">COD: 0,09, 29,31</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td><td class="crd-td">3k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Léré</strong></td><td class="crd-td">CHA: 9,66, 14,22</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,6k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1851AD)</td></tr>
<tr><td class="crd-td"><strong>Yatolema</strong></td><td class="crd-td">COD: 0,36, 24,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3k</td><td class="crd-td">3,1k</td><td class="crd-td">3,1k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Kanyabayonga</strong></td><td class="crd-td">COD: -0,68, 29,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,9k</td><td class="crd-td">3,1k</td><td class="crd-td">3,1k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Gaseke</strong></td><td class="crd-td">RWA: -1,77, 29,55</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">2,2k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kikongo</strong></td><td class="crd-td">COD: -4,26, 17,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,8k</td><td class="crd-td">3k</td><td class="crd-td">3k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Mangina</strong></td><td class="crd-td">COD: 0,57, 29,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td><td class="crd-td">3k</td><td class="crd-td">3k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Betume Site</strong></td><td class="crd-td">CAF: 6,17, 15,23</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1758AD)</td></tr>
<tr><td class="crd-td"><strong>Bolondo</strong></td><td class="crd-td">COD: -0,31, 21,25</td><td class="crd-td">720</td><td class="crd-td">3k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Mukedi</strong></td><td class="crd-td">COD: -5,63, 19,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td><td class="crd-td">2,9k</td><td class="crd-td">2,9k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Ngushu swamp</strong></td><td class="crd-td">COD: -2,29, 28,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1586AD)</td></tr>
<tr><td class="crd-td"><strong>Lebe</strong></td><td class="crd-td">CAF: 3,76, 17,51</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1848AD)</td></tr>
<tr><td class="crd-td"><strong>Kapanga</strong></td><td class="crd-td">COD: -8,36, 22,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,9k</td><td class="crd-td">2,9k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Ngon Mbang</strong></td><td class="crd-td">CHA: 8,53, 16,75</td><td class="crd-td">2,2k</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1829AD)</td></tr>
<tr><td class="crd-td"><strong>Gbadolite</strong></td><td class="crd-td">COD: 4,28, 21,01</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Toala</strong></td><td class="crd-td">CAF: 6,35, 16</td><td class="crd-td">2,3k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Ruzizi</strong></td><td class="crd-td">BUR: -3,08, 29,26</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,7k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kalomba</strong></td><td class="crd-td">COD: -6,03, 22,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Batalimo</strong></td><td class="crd-td">CAF: 3,68, 18,52</td><td class="crd-td">2,4k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1708AD)</td></tr>
<tr><td class="crd-td"><strong>Mondongué</strong></td><td class="crd-td">CAF: 3,65, 18,56</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Nangara-Komba Site</strong></td><td class="crd-td">CAF: 4,97, 15,7</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1837AD)</td></tr>
<tr><td class="crd-td"><strong>Nyangezi</strong></td><td class="crd-td">COD: -2,69, 28,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Mashita Mbanza</strong></td><td class="crd-td">COD: -5,66, 18,7</td><td class="crd-td">2,6k</td><td class="crd-td">785</td><td class="crd-td">778</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ituri</strong></td><td class="crd-td">COD: 1,55, 28,54</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Kamonia</strong></td><td class="crd-td">COD: -6,88, 20,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 340 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 11.</span> Individually assessed settlements in the Kuba Kingdom, Inner Congo and Ubangi from 1500AD to 1880AD with peak populations (top 40 of 380 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Luba Empire, Lunda Commonwealth and Kazembe

Table \ref{tab:zone12-sites} documents 191 settlements across Katanga, Kasai and northern Zambia, led by Kasongo (28k in 1885), Musumba (25k in 1846), Bunkeya (18,5k in 1885) and Nyangwe (15,2k in 1885) [@Alencastro2018PoliticaDos; @Congostijdlijn2019GeschiedenisVan].

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
<tr><td class="crd-td"><strong>Ilunga Kabale</strong></td><td class="crd-td">COD: -7,54, 25,66</td><td class="crd-td">4,1k</td><td class="crd-td">7,1k</td><td class="crd-td">6,6k</td><td class="crd-td">5,2k</td><td class="crd-td">4,4k</td><td class="crd-td">7,1k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Tshilenge</strong></td><td class="crd-td">COD: -6,23, 23,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">6,4k</td><td class="crd-td">6,9k</td><td class="crd-td">6,9k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Lusanga/Luka</strong></td><td class="crd-td">COD: -6,11, 23,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">6,3k</td><td class="crd-td">6,8k</td><td class="crd-td">6,8k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Lumpungu</strong></td><td class="crd-td">COD: -4,97, 23,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">5,6k</td><td class="crd-td">5,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Lupatapata</strong></td><td class="crd-td">COD: -6,21, 23,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,5k</td><td class="crd-td">5,7k</td><td class="crd-td">5,7k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Mulongo Upemba</strong></td><td class="crd-td">COD: -7,83, 26,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Tshimbulu</strong></td><td class="crd-td">COD: -6,48, 22,86</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">5k</td><td class="crd-td">5,4k</td><td class="crd-td">5,4k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Bakwa-Kalonji</strong></td><td class="crd-td">COD: -6,5, 23,65</td><td class="crd-td">3,2k</td><td class="crd-td">3,9k</td><td class="crd-td">4,5k</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">4,9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Luputa</strong></td><td class="crd-td">COD: -7,17, 23,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">4,5k</td><td class="crd-td">4,9k</td><td class="crd-td">4,9k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Mulongo</strong></td><td class="crd-td">COD: -7,83, 26,99</td><td class="crd-td">1,8k</td><td class="crd-td">2,9k</td><td class="crd-td">3,5k</td><td class="crd-td">3,9k</td><td class="crd-td">4,1k</td><td class="crd-td">4,1k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Kinkondja North</strong></td><td class="crd-td">COD: -8,15, 26,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1520AD)</td></tr>
<tr><td class="crd-td"><strong>Kabambare</strong></td><td class="crd-td">COD: -4,69, 27,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Ingombe Ilede</strong></td><td class="crd-td">ZMB: -16,18, 28,83</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bena-Kabimba</strong></td><td class="crd-td">COD: -6,28, 23,66</td><td class="crd-td">2,1k</td><td class="crd-td">2,5k</td><td class="crd-td">2,9k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Sanga</strong></td><td class="crd-td">COD: -8,18, 26,49</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kabongo</strong></td><td class="crd-td">COD: -5,94, 24,71</td><td class="crd-td">2k</td><td class="crd-td">2,5k</td><td class="crd-td">2,8k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kikulu Upemba</strong></td><td class="crd-td">COD: -8,25, 26,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1510AD)</td></tr>
<tr><td class="crd-td"><strong>Kamilamba</strong></td><td class="crd-td">COD: -7,81, 27,03</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Katongo</strong></td><td class="crd-td">COD: -8,21, 26,41</td><td class="crd-td">2,3k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Kamoa Site</strong></td><td class="crd-td">COD: -10,37, 25,1</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1652AD)</td></tr>
<tr><td class="crd-td"><strong>Kayembe-Mukulu</strong></td><td class="crd-td">COD: -9,05, 23,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Malemba-Nkulu</strong></td><td class="crd-td">COD: -8,04, 26,79</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1571AD)</td></tr>
<tr><td class="crd-td"><strong>Baraka</strong></td><td class="crd-td">COD: -4,09, 29,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Lunde</strong></td><td class="crd-td">ZMB: -9,86, 28,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kibwe</strong></td><td class="crd-td">COD: -9,41, 26,97</td><td class="crd-td">1,4k</td><td class="crd-td">2,3k</td><td class="crd-td">2,4k</td><td class="crd-td">2k</td><td class="crd-td">1,7k</td><td class="crd-td">2,4k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Kipushi Copper</strong></td><td class="crd-td">ZMB: -11,78, 27,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1520AD)</td></tr>
<tr><td class="crd-td"><strong>Kahinda</strong></td><td class="crd-td">COD: -7,8, 23,38</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Munenga</strong></td><td class="crd-td">ZMB: -16,03, 28,75</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kibanza</strong></td><td class="crd-td">COD: -7,91, 26,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1520AD)</td></tr>
<tr><td class="crd-td"><strong>Kikulu</strong></td><td class="crd-td">COD: -7,84, 26,98</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kasoko</strong></td><td class="crd-td">ZMB: -16,06, 28,83</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mandenga</strong></td><td class="crd-td">ZMB: -16,03, 28,86</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Goi-Ilunga</strong></td><td class="crd-td">COD: -8,34, 25,59</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kabeya-Kamwanga</strong></td><td class="crd-td">COD: -6, 23,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2k</td><td class="crd-td">2k</td><td class="crd-td">2k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 151 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 12.</span> Individually assessed settlements in the Luba Empire, Lunda Commonwealth and Kazembe from 1500AD to 1880AD with peak populations (top 40 of 191 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

# Limitations

Three caveats apply to this settlement ledger. First, archival survival favours coastal enclaves and major royal capitals over dispersed interior villages, leaving inner Congo and Luba-Lunda with fewer individually dated towns than Senegambia or the Gulf of Guinea [@Thornton1977KongoDemography; @Coloniales1920CongoRevue]. Second, linear interpolation between dated observations cannot capture sudden unrecorded war shocks between benchmark observations [@Law1977OyoEmpire; @Monroe2014DahomeySlavery]. Third, the 3.424 entries measure urban and major market centres rather than total rural headcounts, which appear in the companion regional synthesis.

# Conclusion

Together, these 3.424 individually assessed settlements document the shifting urban geography of Atlantic West Africa, Equatorial Africa and Angola from 1500AD to 1885AD. They capture early royal capitals such as Mbanza Congo, Benin City and Allada, the rise and collapse of Old Oyo, nineteenth-century Yoruba defensive agglomeration at Ibadan and Abeokuta, the maritime entrepôts of Luanda, Saint-Louis, Freetown and Lagos, and late precolonial caravan hubs across Luba-Lunda and Katanga.

# Appendix

## Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} sums the individually assessed settlement counts and combined interpolated urban populations across all twelve sub-regions at the five chapter benchmarks from 1500AD to 1880AD.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion (Sites)</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Wolof States, Futa Jallon and Kaabu (504)</strong></td><td class="crd-td">152k</td><td class="crd-td">235,8k</td><td class="crd-td">318,8k</td><td class="crd-td">366,3k</td><td class="crd-td">169,7k</td></tr>
<tr><td class="crd-td"><strong>2. Sierra Leone, Grain Coast and Liberia (324)</strong></td><td class="crd-td">156,7k</td><td class="crd-td">202,6k</td><td class="crd-td">261,2k</td><td class="crd-td">337,8k</td><td class="crd-td">127,5k</td></tr>
<tr><td class="crd-td"><strong>3. Asante Empire, Fante and Gold Coast (396)</strong></td><td class="crd-td">204,9k</td><td class="crd-td">309,4k</td><td class="crd-td">381,4k</td><td class="crd-td">409,6k</td><td class="crd-td">49,9k</td></tr>
<tr><td class="crd-td"><strong>4. Kingdom of Dahomey, Allada and Ewe (224)</strong></td><td class="crd-td">146,2k</td><td class="crd-td">302,4k</td><td class="crd-td">354,7k</td><td class="crd-td">388,4k</td><td class="crd-td">94,6k</td></tr>
<tr><td class="crd-td"><strong>5. Oyo Empire, Yorubaland and Benin (364)</strong></td><td class="crd-td">445,5k</td><td class="crd-td">729,2k</td><td class="crd-td">901,1k</td><td class="crd-td">1,3M</td><td class="crd-td">496,8k</td></tr>
<tr><td class="crd-td"><strong>6. Niger Delta, Arochukwu and Cross River (330)</strong></td><td class="crd-td">271,3k</td><td class="crd-td">503,6k</td><td class="crd-td">598,9k</td><td class="crd-td">701,8k</td><td class="crd-td">113,9k</td></tr>
<tr><td class="crd-td"><strong>7. Bamum, Cameroon Grassfields and Biafra (195)</strong></td><td class="crd-td">91,1k</td><td class="crd-td">124,2k</td><td class="crd-td">207,1k</td><td class="crd-td">253,9k</td><td class="crd-td">87,2k</td></tr>
<tr><td class="crd-td"><strong>8. Loango, Teke-Makoko and Gabon (205)</strong></td><td class="crd-td">122,3k</td><td class="crd-td">142,7k</td><td class="crd-td">155,8k</td><td class="crd-td">158,3k</td><td class="crd-td">65,4k</td></tr>
<tr><td class="crd-td"><strong>9. Kongo, Ndongo, Matamba and Angola (165)</strong></td><td class="crd-td">96,9k</td><td class="crd-td">206,2k</td><td class="crd-td">239,5k</td><td class="crd-td">196,3k</td><td class="crd-td">72,1k</td></tr>
<tr><td class="crd-td"><strong>10. Ovimbundu, Benguela and S. Angola (146)</strong></td><td class="crd-td">40,2k</td><td class="crd-td">38,2k</td><td class="crd-td">170,4k</td><td class="crd-td">174,4k</td><td class="crd-td">61,6k</td></tr>
<tr><td class="crd-td"><strong>11. Kuba, Inner Congo and Ubangi (380)</strong></td><td class="crd-td">143,5k</td><td class="crd-td">203,3k</td><td class="crd-td">325,4k</td><td class="crd-td">329,8k</td><td class="crd-td">157,9k</td></tr>
<tr><td class="crd-td"><strong>12. Luba, Lunda and Kazembe (191)</strong></td><td class="crd-td">105,7k</td><td class="crd-td">109,9k</td><td class="crd-td">190,7k</td><td class="crd-td">212,3k</td><td class="crd-td">142,3k</td></tr>
<tr><td class="crd-td"><strong>All Sub-Regions (3.424)</strong></td><td class="crd-td">1,98M</td><td class="crd-td">3,11M</td><td class="crd-td">4,1M</td><td class="crd-td">4,83M</td><td class="crd-td">1,64M</td></tr>
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
