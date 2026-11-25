---
title: "Early West Africa and the Sahel States"
subtitle: "Settlement Gazetteer: 3.261 Individually Assessed Towns and Polities (1000BC-1500AD)"
date: "24 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: early_west_africa_sahel_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 3.261 individually assessed settlements across 19 modern states and 11 West African and Sahelian sub-regions from 1000BC to 1500AD."
hero_label: "fig:hero-settlements-west-africa"

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

This gazetteer compiles spatial coordinates and multi-period city-proper population series for 3.261 individually assessed settlements across West Africa and the Sahel between 1000BC and 1500AD (9.179 dated observations spanning 19 modern jurisdictions). Screened from 3.998 candidate tells, walled capitals, caravan entrepots and dated rock shelters (737 excluded), the retained entries span all 11 regional zones from Senegambia and the Mauritanian Sahara to Lake Chad and the Lower Niger forests. Active assessed centres rise from 232 early iron-age and late-stone-age loci at 1000BC to 603 at 1AD, 800 at 500AD, 1.015 at 1000AD and 2.281 settlements by 1500AD, led by Ile-Ife (88,6k), Nembe (87,5k), Gao (54,6k), Benin City (47,5k), Djenné (40k), Niani (38,6k), Kano (38,4k), Birnin Gazargamu (34,2k) and Tombouctou (32,8k).



# Background

Reconstructing early West African urbanism requires combining stratigraphic mound excavations, earthwork transect surveys, radiocarbon registers and mediaeval Arabic and local chronicles [@Mcintosh1984TheEarly; @Dueppen2016TheArchaeology; @Besse2020OSAAR; @Hinz2023XRONOS]. Across the Sahelian steppe and Inland Niger Delta, towns such as Koumbi Saleh, Awdaghost, Dia, Jenne-Jeno, Timbuktu and Gao grew along desert-edge caravan corridors and seasonal rice floodplains [@Mcintosh1981TheInland; @Mcdougall1985TheView; @Cisse2010GaoSaney]. Further south, walled Hausa *birane* around Kano, Katsina and Zaria, Akan gold entrepots at Begho and Bono Manso, and monumental Yoruba and Edo forest capitals at Ile-Ife and Benin City formed dense multi-tiered urban hierarchies [@Sutton1979TowardsLess; @Posnansky2015BeghoLife; @Connah1967NewLight; @Adekola2009EarlyUrban].

# Methodology

Candidate sites were compiled across four saturation waves from excavated urban monographs, regional surveys and chronometric databases [@Besse2020OSAAR; @Hinz2023XRONOS; @McIntosh1995JenneJeno]. Of 3.998 initial candidates inside the 7.910.617 km² study domain [@Runfola2020GeoBoundaries], 737 duplicate aliases, out-of-epoch foundations or non-settlement loci were excluded, leaving 3.261 individually assessed settlements. Each site is assigned deterministically by point-in-polygon lookup (with nearest-boundary snapping for two coastal-edge sites) to one of the 11 vector sub-regions.

Every retained entry carries city-proper estimates derived from measured mound or walled areas calibrated against African preindustrial density transects (including Igboho's 60 to 88 persons/ha and Storey's 59-city African mean of 12.724 persons/km²) and excavated stratigraphic sequences [@Connah2001AfricanCivilizations; @Diblasi1981ExcavationsJenne; @Davis2000LeadershipStrategies]. Tables 1 to 11 report linearly interpolated populations at five chapter benchmarks (1000BC, 1AD, 500AD, 1000AD and 1500AD) alongside each site's exact assessed peak and peak year, marking periods prior to foundation or after abandonment with a hyphen (-).

# Testing and Validation

Across the upper half of the settlement hierarchy ($n = 114$), log-log rank-size regression yields a Zipf exponent of $\alpha = 0,87$ ($R^2 = 0,99$; Figure \ref{fig:settlements-rank}), reflecting polycentric peer capitals across separate riverine and forest basins [@Mcintosh1984TheEarly; @Kirkgreene1804ComparativeStudy]. Full-ledger regression across all 3.261 entries gives $\alpha = 1,14$ ($R^2 = 0,79$) once dated rock shelters below 100 inhabitants are included [@Chevrier2020NewData; @Agai2014ArchaeologicalSearch]. All 11 sub-regions hold between 15 and 34 assessed settlements, with zero empty territories and a 78,9% unique-peak ratio confirming individual site calibration.

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-early-west-africa-sahel-settlements/fig_03_rank_size.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size scaling across 3.261 West African settlements (upper-half Zipf q = 0,87, R² = 0,99) and sub-regional population densities in 1500AD.</figcaption>
</figure>

# Results

## Kanem-Bornu Empire and Lake Chad Basin

Table \ref{tab:zone1-sites} compiles 400 settlements across Kanem, Bornu and the Lake Chad basin, led by the Sayfawa capitals of Birnin Gazargamu (34,2k in 1500AD) and Njimi (21,4k in 1300AD) alongside Kotoko walled towns [@Connah2001AfricanCivilizations].

<figure class="crd-table-figure" id="tab:zone1-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Birnin Gazargamu</strong></td><td class="crd-td">NGA: 13,01, 12,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">34,2k</td><td class="crd-td">34,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Njimi</strong></td><td class="crd-td">TCD: 14,13, 15,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,9k</td><td class="crd-td">-</td><td class="crd-td">21,4k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Njimi</strong></td><td class="crd-td">TCD: 14,32, 15,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,4k</td><td class="crd-td">-</td><td class="crd-td">9,6k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Daura</strong></td><td class="crd-td">NGA: 11,55, 11,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,9k</td><td class="crd-td">8,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Goulfeil</strong></td><td class="crd-td">CMR: 12,39, 14,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">5,3k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Yao</strong></td><td class="crd-td">TCD: 12,85, 17,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">5,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Logone-Birni</strong></td><td class="crd-td">CMR: 11,72, 15,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">5,2k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Oudjilla</strong></td><td class="crd-td">CMR: 11,02, 14,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">4,8k (1320AD)</td></tr>
<tr><td class="crd-td"><strong>Doba Old</strong></td><td class="crd-td">TCD: 8,65, 16,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">4,2k (1360AD)</td></tr>
<tr><td class="crd-td"><strong>Yau</strong></td><td class="crd-td">NGA: 13,56, 13,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">438</td><td class="crd-td">-</td><td class="crd-td">4,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Kala Balge Tell</strong></td><td class="crd-td">NGA: 12,16, 14,32</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,4k</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">4k (1180AD)</td></tr>
<tr><td class="crd-td"><strong>Mdaga</strong></td><td class="crd-td">TCD: 12,22, 15,06</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">3,2k</td><td class="crd-td">4k</td><td class="crd-td">2,7k</td><td class="crd-td">4k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Makari</strong></td><td class="crd-td">CMR: 12,58, 14,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">3,8k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Manan</strong></td><td class="crd-td">TCD: 14,35, 15,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">3,5k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Ngala</strong></td><td class="crd-td">NGA: 12,35, 14,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">3,5k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Mowo Diamare</strong></td><td class="crd-td">CMR: 10,56, 14,18</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,8k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">3,4k (1380AD)</td></tr>
<tr><td class="crd-td"><strong>Daima</strong></td><td class="crd-td">NGA: 12,21, 14,46</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,3k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">3,4k (950AD)</td></tr>
<tr><td class="crd-td"><strong>Gambaru</strong></td><td class="crd-td">NGA: 13,06, 12,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Krenak Tell</strong></td><td class="crd-td">CMR: 12,14, 14,96</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,7k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1380AD)</td></tr>
<tr><td class="crd-td"><strong>Mafa-Kilda</strong></td><td class="crd-td">CMR: 10,81, 13,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1320AD)</td></tr>
<tr><td class="crd-td"><strong>Marte Ala</strong></td><td class="crd-td">NGA: 12,36, 13,83</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k</td><td class="crd-td">1,1k</td><td class="crd-td">2,9k (920AD)</td></tr>
<tr><td class="crd-td"><strong>Mao</strong></td><td class="crd-td">TCD: 14,12, 15,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">2,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mada Mandara</strong></td><td class="crd-td">CMR: 10,92, 14,13</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1440AD)</td></tr>
<tr><td class="crd-td"><strong>Garumele</strong></td><td class="crd-td">NER: 14,03, 12,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Zilum</strong></td><td class="crd-td">NGA: 12,32, 13,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (500BC)</td></tr>
<tr><td class="crd-td"><strong>Afadé</strong></td><td class="crd-td">CMR: 12,23, 14,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Messo</strong></td><td class="crd-td">TCD: 13,75, 14,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k (1467AD)</td></tr>
<tr><td class="crd-td"><strong>Aissa Dugjé</strong></td><td class="crd-td">CMR: 11,18, 14,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Zilum</strong></td><td class="crd-td">NGA: 12,4, 13,39</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td><td class="crd-td">2,2k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ngelzarma</strong></td><td class="crd-td">NGA: 11,68, 11,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Tsanaga CFDT</strong></td><td class="crd-td">CMR: 10,58, 14,33</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kursakata Mound</strong></td><td class="crd-td">NGA: 12,32, 14,2</td><td class="crd-td">560</td><td class="crd-td">1,1k</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Amkoundjo</strong></td><td class="crd-td">CMR: 12,04, 14,81</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1420AD)</td></tr>
<tr><td class="crd-td"><strong>Goray</strong></td><td class="crd-td">CMR: 10,5, 14,5</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Dikwa</strong></td><td class="crd-td">NGA: 12,04, 13,91</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Houlouf</strong></td><td class="crd-td">CMR: 12,02, 14,92</td><td class="crd-td">1,1k</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">1,2k</td><td class="crd-td">2,4k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Mongossi</strong></td><td class="crd-td">CMR: 11,03, 14,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">619</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1384AD)</td></tr>
<tr><td class="crd-td"><strong>Goulfeil</strong></td><td class="crd-td">TCD: 11,86, 15,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Midigue</strong></td><td class="crd-td">TCD: 12,29, 15,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,4k</td><td class="crd-td">1,7k</td><td class="crd-td">2,4k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Zunfur</strong></td><td class="crd-td">NGA: 12,26, 13,11</td><td class="crd-td">940</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (500BC)</td></tr>
<tr><td class="crd-td"><strong>... plus 360 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in Kanem-Bornu and the Lake Chad Basin from 1000BC to 1500AD (top 40 of 400 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Wagadou (Ghana) and Western Sahel

Table \ref{tab:zone2-sites} lists 353 settlements across the Tagant-Hodh gateways and upper Inland Niger Delta margin, anchored by Djenné (40k in 1450AD), Koumbi Saleh (18,2k in 1150AD), Dakhlet el Atrous (9,1k in 700BC), Kolima, Dia, Oualata and Awdaghost [@Mcdougall1985TheView; @Mcintosh1981TheInland; @McIntosh1995JenneJeno].

<figure class="crd-table-figure" id="tab:zone2-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Djenné</strong></td><td class="crd-td">MLI: 13,9, -4,55</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">18k</td><td class="crd-td">11,8k</td><td class="crd-td">11k</td><td class="crd-td">40k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Koumbi Saleh</strong></td><td class="crd-td">MRT: 15,77, -7,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">14,7k</td><td class="crd-td">6,3k</td><td class="crd-td">18,2k (1150AD)</td></tr>
<tr><td class="crd-td"><strong>Dakhlet el Atrous</strong></td><td class="crd-td">MRT: 18,38, -9,17</td><td class="crd-td">6,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,1k (700BC)</td></tr>
<tr><td class="crd-td"><strong>Kolima</strong></td><td class="crd-td">MLI: 15,17, -6,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,1k</td><td class="crd-td">-</td><td class="crd-td">8,7k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Matam</strong></td><td class="crd-td">SEN: 15,65, -13,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">2,8k</td><td class="crd-td">1,7k</td><td class="crd-td">8,7k (950AD)</td></tr>
<tr><td class="crd-td"><strong>Dia</strong></td><td class="crd-td">MLI: 14,38, -4,9</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">3,9k</td><td class="crd-td">5,1k</td><td class="crd-td">4,3k</td><td class="crd-td">8,1k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Oualata</strong></td><td class="crd-td">MRT: 17,3, -7,02</td><td class="crd-td">1,4k</td><td class="crd-td">2,6k</td><td class="crd-td">3,1k</td><td class="crd-td">3,6k</td><td class="crd-td">2,1k</td><td class="crd-td">7,8k (1352AD)</td></tr>
<tr><td class="crd-td"><strong>Podor</strong></td><td class="crd-td">SEN: 16,65, -14,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k</td><td class="crd-td">4,9k</td><td class="crd-td">7,8k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Awdaghost</strong></td><td class="crd-td">MRT: 17,42, -10,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">7k</td><td class="crd-td">3,2k</td><td class="crd-td">7k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Silla</strong></td><td class="crd-td">SEN: 15,97, -13,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">1,3k</td><td class="crd-td">5,2k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Tichitt</strong></td><td class="crd-td">MRT: 18,44, -9,49</td><td class="crd-td">804</td><td class="crd-td">792</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k</td><td class="crd-td">1k</td><td class="crd-td">5,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Ouadane</strong></td><td class="crd-td">MRT: 20,93, -11,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">4,8k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Sincu Bara</strong></td><td class="crd-td">SEN: 15,7, -13,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">4,5k</td><td class="crd-td">2,6k</td><td class="crd-td">4,7k (750AD)</td></tr>
<tr><td class="crd-td"><strong>Chinguetti</strong></td><td class="crd-td">MRT: 20,46, -12,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">4,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Sorotomo</strong></td><td class="crd-td">MLI: 13,46, -6,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">4,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Diara</strong></td><td class="crd-td">MLI: 15,17, -9,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">2,9k</td><td class="crd-td">4,4k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Dia Mara</strong></td><td class="crd-td">MLI: 14,41, -4,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">4,3k</td><td class="crd-td">3,1k</td><td class="crd-td">4,3k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Azugi</strong></td><td class="crd-td">MRT: 20,57, -13,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">4,1k (1070AD)</td></tr>
<tr><td class="crd-td"><strong>Zoboro</strong></td><td class="crd-td">MLI: 13,86, -4,51</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">3,3k</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">3,8k (940AD)</td></tr>
<tr><td class="crd-td"><strong>Dia Mara North</strong></td><td class="crd-td">MLI: 14,26, -4,93</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,4k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">3,4k (260AD)</td></tr>
<tr><td class="crd-td"><strong>Dakhlet el Atrouss</strong></td><td class="crd-td">MRT: 18,27, -8,77</td><td class="crd-td">3,2k</td><td class="crd-td">132</td><td class="crd-td">139</td><td class="crd-td">157</td><td class="crd-td">-</td><td class="crd-td">3,2k (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Hambarketolo</strong></td><td class="crd-td">MLI: 13,88, -4,57</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,6k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">3,1k (750AD)</td></tr>
<tr><td class="crd-td"><strong>Segou-Koro</strong></td><td class="crd-td">MLI: 13,41, -6,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,7k</td><td class="crd-td">3k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Dakhlet el Atrouss Settlement</strong></td><td class="crd-td">MRT: 18,32, -9,28</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Akumbu</strong></td><td class="crd-td">MLI: 15,22, -5,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Bakel</strong></td><td class="crd-td">SEN: 14,91, -12,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,8k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Kaédi</strong></td><td class="crd-td">MRT: 16,16, -13,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">1,1k</td><td class="crd-td">2,7k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Kaniana</strong></td><td class="crd-td">MLI: 13,92, -4,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Walaldé</strong></td><td class="crd-td">SEN: 16,51, -14,2</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Nyamina</strong></td><td class="crd-td">MLI: 13,32, -6,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Sahona</strong></td><td class="crd-td">MLI: 14,07, -4,62</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">2,6k (920AD)</td></tr>
<tr><td class="crd-td"><strong>Ténenkou</strong></td><td class="crd-td">MLI: 14,46, -4,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,5k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Saré Tioffi</strong></td><td class="crd-td">SEN: 16,67, -14,97</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ngomi</strong></td><td class="crd-td">MLI: 14,5, -4,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Togueré Doupwil</strong></td><td class="crd-td">MLI: 13,85, -4,32</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Boû Khuâmâ II</strong></td><td class="crd-td">MRT: 16,73, -7,27</td><td class="crd-td">889</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Nouadouar</strong></td><td class="crd-td">MRT: 16,86, -7,37</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mopti Centre</strong></td><td class="crd-td">MLI: 14,5, -4,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">2,2k</td><td class="crd-td">1,2k</td><td class="crd-td">2,2k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Kowa</strong></td><td class="crd-td">MLI: 14,49, -4,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Sofara</strong></td><td class="crd-td">MLI: 14,02, -4,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2,2k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 313 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in Wagadou (Ghana) and the Western Sahel from 1000BC to 1500AD (top 40 of 353 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Songhai Gao, Timbuktu and Niger Bend

Table \ref{tab:zone3-sites} documents 153 settlements along the Middle Niger bend, headed by Gao (54,6k in 1500AD), Tombouctou (32,8k in 1450AD), Kukiya (11,7k in 1250AD) and Essouk-Tadmekka (7k in 1050AD) [@Cisse2010GaoSaney; @Davis2000LeadershipStrategies].

<figure class="crd-table-figure" id="tab:zone3-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gao</strong></td><td class="crd-td">MLI: 16,26, -0,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,5k</td><td class="crd-td">54,6k</td><td class="crd-td">54,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Tombouctou</strong></td><td class="crd-td">MLI: 16,77, -3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">23,8k</td><td class="crd-td">32,8k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Kukiya</strong></td><td class="crd-td">MLI: 15,35, 0,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">8,4k</td><td class="crd-td">2,5k</td><td class="crd-td">11,7k (1250AD)</td></tr>
<tr><td class="crd-td"><strong>Gao Saney</strong></td><td class="crd-td">MLI: 16,3, 0,01</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">8,6k</td><td class="crd-td">2,3k</td><td class="crd-td">8,6k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Essouk</strong></td><td class="crd-td">MLI: 18,77, 1,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">2,3k</td><td class="crd-td">7k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Mouyssam</strong></td><td class="crd-td">MLI: 16,22, -3,51</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">3,2k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">3,6k (980AD)</td></tr>
<tr><td class="crd-td"><strong>Bura</strong></td><td class="crd-td">NER: 14,5, 0,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">3,2k (750AD)</td></tr>
<tr><td class="crd-td"><strong>Tonka Mali</strong></td><td class="crd-td">MLI: 16,37, -3,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">3k (1220AD)</td></tr>
<tr><td class="crd-td"><strong>Bamba</strong></td><td class="crd-td">MLI: 17,03, -1,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">2,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Tillabéri</strong></td><td class="crd-td">NER: 14,21, 1,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Saga Gorou</strong></td><td class="crd-td">NER: 13,5, 2,22</td><td class="crd-td">848</td><td class="crd-td">1,7k</td><td class="crd-td">2,2k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1334AD)</td></tr>
<tr><td class="crd-td"><strong>Ounjougou Complex</strong></td><td class="crd-td">MLI: 14,4, -3,45</td><td class="crd-td">580</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">2,5k</td><td class="crd-td">2,6k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Bura-Asinda</strong></td><td class="crd-td">NER: 14,08, 1,32</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,4k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,6k (760AD)</td></tr>
<tr><td class="crd-td"><strong>Kissi</strong></td><td class="crd-td">BFA: 14,67, -0,12</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2,5k</td><td class="crd-td">1,9k</td><td class="crd-td">1,2k</td><td class="crd-td">2,5k (500AD)</td></tr>
<tr><td class="crd-td"><strong>Gadei</strong></td><td class="crd-td">MLI: 16,3, -0,03</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">2,1k</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Goundam</strong></td><td class="crd-td">MLI: 16,41, -3,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">2,5k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Kabara</strong></td><td class="crd-td">MLI: 16,7, -2,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Gb08F5</strong></td><td class="crd-td">NER: 13,51, 2,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1102AD)</td></tr>
<tr><td class="crd-td"><strong>Tuizegorou</strong></td><td class="crd-td">NER: 15,02, 2,35</td><td class="crd-td">775</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Gumbessugo</strong></td><td class="crd-td">MLI: 14,41, -3,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Diré</strong></td><td class="crd-td">MLI: 16,26, -3,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Ounjougou</strong></td><td class="crd-td">MLI: 14,41, -3,52</td><td class="crd-td">284</td><td class="crd-td">850</td><td class="crd-td">189</td><td class="crd-td">171</td><td class="crd-td">165</td><td class="crd-td">2,2k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Ansongo</strong></td><td class="crd-td">MLI: 15,66, 0,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">946</td><td class="crd-td">2,1k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Hombori</strong></td><td class="crd-td">MLI: 15,29, -1,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">973</td><td class="crd-td">2,1k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Koi Gourrey</strong></td><td class="crd-td">MLI: 16,09, -3,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2k (1160AD)</td></tr>
<tr><td class="crd-td"><strong>Dori 94/96</strong></td><td class="crd-td">BFA: 14,06, -0,02</td><td class="crd-td">638</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2k (1245AD)</td></tr>
<tr><td class="crd-td"><strong>Gb08F9-5</strong></td><td class="crd-td">NER: 13,66, 2,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Douentza</strong></td><td class="crd-td">MLI: 15,01, -2,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">864</td><td class="crd-td">1,9k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Gourma-Rharous</strong></td><td class="crd-td">MLI: 16,88, -1,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Winde Koroji Complex</strong></td><td class="crd-td">MLI: 15,13, -2,93</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Téra</strong></td><td class="crd-td">NER: 14, 0,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Saouga</strong></td><td class="crd-td">BFA: 14,38, -0,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">755</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">1,8k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Oursi Neolithic Mound</strong></td><td class="crd-td">BFA: 14,67, -0,45</td><td class="crd-td">395</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,8k (750AD)</td></tr>
<tr><td class="crd-td"><strong>In Tachoulen</strong></td><td class="crd-td">NER: 14,68, 1,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (918AD)</td></tr>
<tr><td class="crd-td"><strong>Orosogou</strong></td><td class="crd-td">MLI: 14,39, -3,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Bourem</strong></td><td class="crd-td">MLI: 16,95, -0,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">746</td><td class="crd-td">1,7k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Djibo</strong></td><td class="crd-td">BFA: 14,1, -1,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ménaka</strong></td><td class="crd-td">MLI: 15,91, 2,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Koi Gourey</strong></td><td class="crd-td">MLI: 15,96, -3,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">771</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Tombouze</strong></td><td class="crd-td">MLI: 16,72, -2,94</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td><td class="crd-td">765</td><td class="crd-td">-</td><td class="crd-td">1,6k (500AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 113 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed settlements in Songhai Gao, Timbuktu and the Niger Bend from 1000BC to 1500AD (top 40 of 153 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Tuareg Air, Adrar des Ifoghas and Sahara

Table \ref{tab:zone4-sites} records 80 oasis and caravan centres across the Air Massif and eastern Niger Sahara, led by Agadez (6,8k in 1450AD), Azelik (5,5k), Assode (4,6k) and Bilma (3,2k) [@Dueppen2016TheArchaeology].

<figure class="crd-table-figure" id="tab:zone4-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Agadez</strong></td><td class="crd-td">NER: 16,97, 7,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">6,8k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Azelik</strong></td><td class="crd-td">NER: 17,27, 6,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">5,5k (1353AD)</td></tr>
<tr><td class="crd-td"><strong>Assode</strong></td><td class="crd-td">NER: 18,45, 8,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Marandet</strong></td><td class="crd-td">NER: 16,38, 7,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,6k</td><td class="crd-td">1,5k</td><td class="crd-td">3,2k (750AD)</td></tr>
<tr><td class="crd-td"><strong>Bilma</strong></td><td class="crd-td">NER: 18,69, 12,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">753</td><td class="crd-td">1,5k</td><td class="crd-td">976</td><td class="crd-td">3,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Djado</strong></td><td class="crd-td">NER: 21,02, 12,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">772</td><td class="crd-td">753</td><td class="crd-td">2,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Fachi</strong></td><td class="crd-td">NER: 18,11, 11,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Tamaya Mellet Site</strong></td><td class="crd-td">NER: 17,75, 5,37</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Chin Tafidet Pastoral Site</strong></td><td class="crd-td">NER: 17,5, 6,33</td><td class="crd-td">686</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Azelik</strong></td><td class="crd-td">NER: 17,47, 6,5</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Azelik 210</strong></td><td class="crd-td">NER: 17,5, 6,78</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td><td class="crd-td">1,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Arlit</strong></td><td class="crd-td">NER: 18,74, 7,39</td><td class="crd-td">-</td><td class="crd-td">986</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td><td class="crd-td">1,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>In Waggeur</strong></td><td class="crd-td">NER: 16,36, 6,72</td><td class="crd-td">541</td><td class="crd-td">992</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Iférouane</strong></td><td class="crd-td">NER: 19,06, 8,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Teguidda-n-Tessoumt</strong></td><td class="crd-td">NER: 17,43, 6,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Ikawaten</strong></td><td class="crd-td">NER: 18,13, 6,92</td><td class="crd-td">-</td><td class="crd-td">832</td><td class="crd-td">1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Timia</strong></td><td class="crd-td">NER: 18,11, 8,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1420AD)</td></tr>
<tr><td class="crd-td"><strong>Seguedine</strong></td><td class="crd-td">NER: 20,2, 12,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Afunfun 175</strong></td><td class="crd-td">NER: 16,5, 8,12</td><td class="crd-td">384</td><td class="crd-td">702</td><td class="crd-td">843</td><td class="crd-td">978</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ingall</strong></td><td class="crd-td">NER: 16,79, 6,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Tabelot</strong></td><td class="crd-td">NER: 17,61, 8,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>In Waggeur</strong></td><td class="crd-td">NER: 16,13, 6,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">805</td><td class="crd-td">954</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Seekkiret</strong></td><td class="crd-td">NER: 17,7, 6,75</td><td class="crd-td">-</td><td class="crd-td">646</td><td class="crd-td">791</td><td class="crd-td">906</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Oroub</strong></td><td class="crd-td">NER: 16,35, 7,43</td><td class="crd-td">-</td><td class="crd-td">635</td><td class="crd-td">778</td><td class="crd-td">889</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Tuluk</strong></td><td class="crd-td">NER: 17,1, 7,5</td><td class="crd-td">405</td><td class="crd-td">739</td><td class="crd-td">907</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k (879AD)</td></tr>
<tr><td class="crd-td"><strong>Fagochia</strong></td><td class="crd-td">NER: 17,27, 7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">730</td><td class="crd-td">864</td><td class="crd-td">990</td><td class="crd-td">990 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Taferjit</strong></td><td class="crd-td">NER: 16,05, 6,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">703</td><td class="crd-td">848</td><td class="crd-td">974</td><td class="crd-td">974 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Structures</strong></td><td class="crd-td">NER: 17,83, 8,76</td><td class="crd-td">-</td><td class="crd-td">566</td><td class="crd-td">690</td><td class="crd-td">818</td><td class="crd-td">944</td><td class="crd-td">944 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Dirkou</strong></td><td class="crd-td">NER: 18,99, 12,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">910 (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Shimumenin</strong></td><td class="crd-td">NER: 16,55, 7,04</td><td class="crd-td">-</td><td class="crd-td">568</td><td class="crd-td">695</td><td class="crd-td">822</td><td class="crd-td">-</td><td class="crd-td">862 (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Orofan</strong></td><td class="crd-td">NER: 17,26, 6,59</td><td class="crd-td">334</td><td class="crd-td">611</td><td class="crd-td">749</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">860 (884AD)</td></tr>
<tr><td class="crd-td"><strong>In Talaylen</strong></td><td class="crd-td">NER: 16,73, 7,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">603</td><td class="crd-td">714</td><td class="crd-td">817</td><td class="crd-td">817 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Shi Munenin</strong></td><td class="crd-td">NER: 16,83, 6,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">594</td><td class="crd-td">703</td><td class="crd-td">801</td><td class="crd-td">801 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Takene Bawa</strong></td><td class="crd-td">NER: 17,57, 4,67</td><td class="crd-td">396</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">783 (110BC)</td></tr>
<tr><td class="crd-td"><strong>Chirfa</strong></td><td class="crd-td">NER: 20,95, 12,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">680 (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Ikarafane</strong></td><td class="crd-td">NER: 15,33, 3,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">609</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">609 (500AD)</td></tr>
<tr><td class="crd-td"><strong>Tarada N</strong></td><td class="crd-td">NER: 15,92, 4,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">576</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">584 (589AD)</td></tr>
<tr><td class="crd-td"><strong>Adrar Bous</strong></td><td class="crd-td">NER: 20,32, 8,96</td><td class="crd-td">-</td><td class="crd-td">387</td><td class="crd-td">468</td><td class="crd-td">557</td><td class="crd-td">567</td><td class="crd-td">567 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Asaqura</strong></td><td class="crd-td">NER: 17,5, 6,75</td><td class="crd-td">-</td><td class="crd-td">416</td><td class="crd-td">543</td><td class="crd-td">493</td><td class="crd-td">-</td><td class="crd-td">558 (350AD)</td></tr>
<tr><td class="crd-td"><strong>Afnuk</strong></td><td class="crd-td">NER: 16,83, 6,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">540</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">551 (725AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 40 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements in Tuareg Air, Adrar des Ifoghas and the central Sahara from 1000BC to 1500AD (top 40 of 80 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Proto-Akan, Bono Manso and Guinea Forest

Table \ref{tab:zone5-sites} compiles 396 settlements across the Akan goldfields and Upper Guinea coast, anchored by Begho (9,7k in 1500AD), Bono Manso (7,8k in 1480AD), Adansemanso (6,1k in 1500AD) and Elmina (4,2k in 1500AD) [@Posnansky2015BeghoLife].

<figure class="crd-table-figure" id="tab:zone5-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Begho</strong></td><td class="crd-td">GHA: 7,87, -2,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,6k</td><td class="crd-td">9,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bono Manso</strong></td><td class="crd-td">GHA: 7,7, -1,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,6k</td><td class="crd-td">8,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Efutu</strong></td><td class="crd-td">GHA: 5,21, -1,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">7,2k (1410AD)</td></tr>
<tr><td class="crd-td"><strong>Tafo Old</strong></td><td class="crd-td">GHA: 6,73, -1,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">6,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Adansemanso</strong></td><td class="crd-td">GHA: 6,3, -1,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">6,1k</td><td class="crd-td">6,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Abrem</strong></td><td class="crd-td">GHA: 5,25, -1,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">5,8k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Agomeda</strong></td><td class="crd-td">GHA: 5,97, 0,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">5,6k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Mansu-Birim</strong></td><td class="crd-td">GHA: 5,83, -0,92</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k (860AD)</td></tr>
<tr><td class="crd-td"><strong>Elmina</strong></td><td class="crd-td">GHA: 5,11, -1,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">5,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Akim Swedru</strong></td><td class="crd-td">GHA: 5,88, -1,01</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k (940AD)</td></tr>
<tr><td class="crd-td"><strong>Gagnoa Old</strong></td><td class="crd-td">CIV: 6,13, -5,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">4,8k (1390AD)</td></tr>
<tr><td class="crd-td"><strong>Shai Hills</strong></td><td class="crd-td">GHA: 5,92, 0,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">1,7k</td><td class="crd-td">4,8k (1390AD)</td></tr>
<tr><td class="crd-td"><strong>Akwatia-Birim North</strong></td><td class="crd-td">GHA: 6,08, -0,85</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (820AD)</td></tr>
<tr><td class="crd-td"><strong>Batabi</strong></td><td class="crd-td">GHA: 5,89, -0,96</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k (860AD)</td></tr>
<tr><td class="crd-td"><strong>Ofoase Birim</strong></td><td class="crd-td">GHA: 6,15, -1,03</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k (920AD)</td></tr>
<tr><td class="crd-td"><strong>Kokobin-Birim</strong></td><td class="crd-td">GHA: 6,12, -0,91</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,4k</td><td class="crd-td">3,9k</td><td class="crd-td">4,6k</td><td class="crd-td">4,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Asantemanso</strong></td><td class="crd-td">GHA: 6,48, -1,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,7k</td><td class="crd-td">4,6k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Nsawkaw Old</strong></td><td class="crd-td">GHA: 7,86, -2,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">4,5k (1380AD)</td></tr>
<tr><td class="crd-td"><strong>Banda-Ahenkro</strong></td><td class="crd-td">GHA: 8,15, -2,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,5k</td><td class="crd-td">4,3k (1440AD)</td></tr>
<tr><td class="crd-td"><strong>Abenase</strong></td><td class="crd-td">GHA: 5,97, -0,88</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,9k</td><td class="crd-td">3,5k</td><td class="crd-td">245</td><td class="crd-td">4,2k (880AD)</td></tr>
<tr><td class="crd-td"><strong>Abokobi Old</strong></td><td class="crd-td">GHA: 5,73, -0,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">515</td><td class="crd-td">4,2k (1360AD)</td></tr>
<tr><td class="crd-td"><strong>Asunafo</strong></td><td class="crd-td">GHA: 6,34, -0,71</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (940AD)</td></tr>
<tr><td class="crd-td"><strong>Berekuso</strong></td><td class="crd-td">GHA: 5,75, -0,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">296</td><td class="crd-td">4k (1380AD)</td></tr>
<tr><td class="crd-td"><strong>Kong</strong></td><td class="crd-td">CIV: 9,15, -4,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">3,9k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Abankeseso</strong></td><td class="crd-td">GHA: 6,15, -2,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">3,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Namasa</strong></td><td class="crd-td">GHA: 7,89, -2,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">3,6k (1390AD)</td></tr>
<tr><td class="crd-td"><strong>Mankessim</strong></td><td class="crd-td">GHA: 5,27, -1,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Korhogo</strong></td><td class="crd-td">CIV: 9,47, -5,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">3,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Dumpow</strong></td><td class="crd-td">GHA: 5,15, -1,43</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (920AD)</td></tr>
<tr><td class="crd-td"><strong>Apapam</strong></td><td class="crd-td">GHA: 6,13, -0,59</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (980AD)</td></tr>
<tr><td class="crd-td"><strong>Wenchi</strong></td><td class="crd-td">GHA: 7,72, -2,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Twifo-Heman</strong></td><td class="crd-td">GHA: 5,43, -1,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Kpone-Bawaleshie</strong></td><td class="crd-td">GHA: 5,84, -0,08</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1380AD)</td></tr>
<tr><td class="crd-td"><strong>Koun-Fao</strong></td><td class="crd-td">CIV: 7,49, -3,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">3k (1360AD)</td></tr>
<tr><td class="crd-td"><strong>Buipe</strong></td><td class="crd-td">GHA: 8,79, -1,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Nkoranza-Fiema</strong></td><td class="crd-td">GHA: 7,71, -1,69</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1380AD)</td></tr>
<tr><td class="crd-td"><strong>Monsa (Akim Kotoku)</strong></td><td class="crd-td">GHA: 5,87, -0,85</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Techiman</strong></td><td class="crd-td">GHA: 7,6, -1,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ladoku</strong></td><td class="crd-td">GHA: 5,79, 0,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,2k</td><td class="crd-td">2k</td><td class="crd-td">2,6k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Brenu Akyinim</strong></td><td class="crd-td">GHA: 5,07, -1,43</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (880AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 356 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed settlements in Proto-Akan, Bono Manso and the Upper Guinea Forest from 1000BC to 1500AD (top 40 of 396 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Mossi Kingdoms and Voltaic Gur States

Table \ref{tab:zone6-sites} lists 297 settlements across the Volta river basin, led by Bouna (10k in 1000AD), Ouagadougou (7,8k in 1500AD), Yendi Dabari (5,1k) and Tenkodogo (4,9k) [@Dueppen2016TheArchaeology].

<figure class="crd-table-figure" id="tab:zone6-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ouagadougou</strong></td><td class="crd-td">BFA: 12,36, -1,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k</td><td class="crd-td">7,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Pusiga</strong></td><td class="crd-td">GHA: 11,08, -0,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">6k (1390AD)</td></tr>
<tr><td class="crd-td"><strong>Yendi Dabari</strong></td><td class="crd-td">GHA: 9,75, -0,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">5,1k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Tenkodogo</strong></td><td class="crd-td">BFA: 11,8, -0,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">4,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kérou</strong></td><td class="crd-td">BEN: 10,83, 2,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">1,6k</td><td class="crd-td">4,2k (1330AD)</td></tr>
<tr><td class="crd-td"><strong>Bobo-Dioulasso</strong></td><td class="crd-td">BFA: 11,2, -4,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">4,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Saboba</strong></td><td class="crd-td">GHA: 9,71, 0,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">3,9k (1380AD)</td></tr>
<tr><td class="crd-td"><strong>Zebilla Old</strong></td><td class="crd-td">GHA: 10,92, -0,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,7k (1340AD)</td></tr>
<tr><td class="crd-td"><strong>Daboya</strong></td><td class="crd-td">GHA: 9,53, -1,39</td><td class="crd-td">410</td><td class="crd-td">1,6k</td><td class="crd-td">2,8k</td><td class="crd-td">3,1k</td><td class="crd-td">3,6k</td><td class="crd-td">3,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Tin Tin Kanza</strong></td><td class="crd-td">BEN: 12,15, 3,16</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,9k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">3,6k (880AD)</td></tr>
<tr><td class="crd-td"><strong>Chereponi</strong></td><td class="crd-td">GHA: 10,14, 0,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">959</td><td class="crd-td">3,4k (1390AD)</td></tr>
<tr><td class="crd-td"><strong>Kibga</strong></td><td class="crd-td">BFA: 13,71, -2,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,3k (1260AD)</td></tr>
<tr><td class="crd-td"><strong>Bassar</strong></td><td class="crd-td">TGO: 9,26, 0,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">3,3k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Fada N'Gourma</strong></td><td class="crd-td">BFA: 12,06, 0,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">3,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Monsey</strong></td><td class="crd-td">BEN: 12,16, 3,01</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (960AD)</td></tr>
<tr><td class="crd-td"><strong>Birnin Lafiya</strong></td><td class="crd-td">BEN: 11,99, 3,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,8k</td><td class="crd-td">1,7k</td><td class="crd-td">2,8k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Tora Sira Tomo</strong></td><td class="crd-td">BFA: 12,59, -3,37</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">2,3k</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Loropeni</strong></td><td class="crd-td">BFA: 10,3, -3,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bouna</strong></td><td class="crd-td">CIV: 9,27, -3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Gourcy</strong></td><td class="crd-td">BFA: 13,2, -2,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,6k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Bole-Mankuma</strong></td><td class="crd-td">GHA: 9,1, -2,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1390AD)</td></tr>
<tr><td class="crd-td"><strong>Kante Togo</strong></td><td class="crd-td">TGO: 9,96, 1,06</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (910AD)</td></tr>
<tr><td class="crd-td"><strong>Koma Land Yikpabongo East</strong></td><td class="crd-td">GHA: 10,23, -1,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1180AD)</td></tr>
<tr><td class="crd-td"><strong>Cobly</strong></td><td class="crd-td">BEN: 10,49, 1</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">912</td><td class="crd-td">2,5k (1280AD)</td></tr>
<tr><td class="crd-td"><strong>Daboya South</strong></td><td class="crd-td">GHA: 9,5, -1,37</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1240AD)</td></tr>
<tr><td class="crd-td"><strong>Ouaké</strong></td><td class="crd-td">BEN: 9,67, 1,37</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">1,8k</td><td class="crd-td">1,2k</td><td class="crd-td">554</td><td class="crd-td">2,5k (1AD)</td></tr>
<tr><td class="crd-td"><strong>Kerebe Sira Tomo</strong></td><td class="crd-td">BFA: 12,61, -3,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2k</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Molla Dendi</strong></td><td class="crd-td">BEN: 12,15, 3,09</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,3k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,5k (680AD)</td></tr>
<tr><td class="crd-td"><strong>Torozougou</strong></td><td class="crd-td">BEN: 12,04, 3,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1180AD)</td></tr>
<tr><td class="crd-td"><strong>Kirikongo</strong></td><td class="crd-td">BFA: 12,7, -3,38</td><td class="crd-td">-</td><td class="crd-td">300</td><td class="crd-td">1,5k</td><td class="crd-td">2,3k</td><td class="crd-td">1,7k</td><td class="crd-td">2,4k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Boumi Tounga</strong></td><td class="crd-td">BEN: 12,13, 3,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1140AD)</td></tr>
<tr><td class="crd-td"><strong>Kareygorou</strong></td><td class="crd-td">NER: 13,66, 1,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Nangodi</strong></td><td class="crd-td">GHA: 10,86, -0,66</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1AD)</td></tr>
<tr><td class="crd-td"><strong>Batenga</strong></td><td class="crd-td">BFA: 12,83, -1,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Dekpassanware</strong></td><td class="crd-td">TGO: 9,42, 0,65</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Grottes de Sanga</strong></td><td class="crd-td">MLI: 14,42, -3,29</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Yako</strong></td><td class="crd-td">BFA: 12,96, -2,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bitchabe</strong></td><td class="crd-td">TGO: 9,36, 0,61</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">207</td><td class="crd-td">2,3k (1420AD)</td></tr>
<tr><td class="crd-td"><strong>Kwara Tegui</strong></td><td class="crd-td">BEN: 12,12, 3,17</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (720AD)</td></tr>
<tr><td class="crd-td"><strong>(Parc W BRF3-4)</strong></td><td class="crd-td">NER: 12,24, 2,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 257 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed settlements in the Mossi Kingdoms and Voltaic Gur States from 1000BC to 1500AD (top 40 of 297 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Hausa Bakwai City-States (Kano, Katsina, Gobir)

Table \ref{tab:zone7-sites} presents 301 walled Hausa *birane* across northern Nigeria and southern Niger, headed by Kano (38,4k in 1480AD), Katsina (16,4k in 1450AD), Zaria (14,8k in 1450AD), Birnin Zamfara (12,8k in 1500AD), Turunku (8,9k) and Daura (8,4k) [@Sutton1979TowardsLess; @Kirkgreene1804ComparativeStudy; @Umar2026CodeMixing].

<figure class="crd-table-figure" id="tab:zone7-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kano</strong></td><td class="crd-td">NGA: 11,98, 8,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">48k</td><td class="crd-td">48k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Katsina</strong></td><td class="crd-td">NGA: 12,98, 7,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,6k</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Zaria</strong></td><td class="crd-td">NGA: 11,11, 7,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,8k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Daura</strong></td><td class="crd-td">NGA: 13,04, 8,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">14k</td><td class="crd-td">14k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Turunku</strong></td><td class="crd-td">NGA: 10,8, 7,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,5k</td><td class="crd-td">14k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Birnin Zamfara</strong></td><td class="crd-td">NGA: 12,72, 6,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,8k</td><td class="crd-td">12,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Rano</strong></td><td class="crd-td">NGA: 11,56, 8,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">11k</td><td class="crd-td">11k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kufena</strong></td><td class="crd-td">NGA: 11,08, 7,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">7,2k</td><td class="crd-td">5,1k</td><td class="crd-td">9,9k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Karaye</strong></td><td class="crd-td">NGA: 11,78, 8,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,5k</td><td class="crd-td">8,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Birnin Lalle</strong></td><td class="crd-td">NER: 13,95, 6,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,4k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Bin Yauri</strong></td><td class="crd-td">NGA: 10,78, 4,81</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">7,2k (1410AD)</td></tr>
<tr><td class="crd-td"><strong>Bakura</strong></td><td class="crd-td">NGA: 12,72, 5,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">1k</td><td class="crd-td">6,3k (1430AD)</td></tr>
<tr><td class="crd-td"><strong>Hadejia</strong></td><td class="crd-td">NGA: 12,46, 10,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">6,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Rogo Kano</strong></td><td class="crd-td">NGA: 11,56, 7,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">6,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Sumaila</strong></td><td class="crd-td">NGA: 11,53, 8,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">832</td><td class="crd-td">5,9k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Gaya</strong></td><td class="crd-td">NGA: 11,86, 9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,9k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Yauri</strong></td><td class="crd-td">NGA: 10,84, 4,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">5,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Garun Gabas</strong></td><td class="crd-td">NGA: 12,64, 10,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">5,8k (1340AD)</td></tr>
<tr><td class="crd-td"><strong>Kanta Gungu</strong></td><td class="crd-td">NGA: 12,66, 4,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">5,6k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Fangwai</strong></td><td class="crd-td">NGA: 11,79, 8,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">4,9k (1320AD)</td></tr>
<tr><td class="crd-td"><strong>Maru</strong></td><td class="crd-td">NGA: 12,33, 6,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">1,3k</td><td class="crd-td">4,6k (1420AD)</td></tr>
<tr><td class="crd-td"><strong>Dabai Zuru</strong></td><td class="crd-td">NGA: 11,47, 5,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">352</td><td class="crd-td">4,1k (1390AD)</td></tr>
<tr><td class="crd-td"><strong>Shira Old Hill</strong></td><td class="crd-td">NGA: 11,47, 10,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">4,1k (1360AD)</td></tr>
<tr><td class="crd-td"><strong>Maleh</strong></td><td class="crd-td">NGA: 12,42, 4,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">3,9k (1410AD)</td></tr>
<tr><td class="crd-td"><strong>Auyo Old</strong></td><td class="crd-td">NGA: 12,35, 9,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">3,9k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Kufan Kanawa</strong></td><td class="crd-td">NER: 13,58, 9,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">3,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Madecali</strong></td><td class="crd-td">BEN: 11,7, 3,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">3,2k</td><td class="crd-td">337</td><td class="crd-td">3,6k (1240AD)</td></tr>
<tr><td class="crd-td"><strong>Santolo</strong></td><td class="crd-td">NGA: 11,87, 8,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">3,4k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Gwandu</strong></td><td class="crd-td">NGA: 12,5, 4,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Nguru</strong></td><td class="crd-td">NGA: 12,88, 10,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Dutse</strong></td><td class="crd-td">NGA: 11,7, 9,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Disina Shira</strong></td><td class="crd-td">NGA: 11,54, 9,91</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1380AD)</td></tr>
<tr><td class="crd-td"><strong>Ingawa</strong></td><td class="crd-td">NGA: 12,64, 8,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Birnin Kudu</strong></td><td class="crd-td">NGA: 11,45, 9,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Samaru West Site I</strong></td><td class="crd-td">NGA: 11,15, 7,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,2k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mashi</strong></td><td class="crd-td">NGA: 12,98, 7,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kubanni river</strong></td><td class="crd-td">NGA: 11,17, 7,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Likaderi</strong></td><td class="crd-td">NER: 13,69, 10,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Gouré</strong></td><td class="crd-td">NER: 13,98, 10,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Jarkuka</strong></td><td class="crd-td">NGA: 11,42, 10,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k (1320AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 261 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Individually assessed settlements in the Hausa Bakwai City-States from 1000BC to 1500AD (top 40 of 301 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Nok-Jos Plateau, Nupe and Benue Corridor

Table \ref{tab:zone8-sites} catalogues 308 settlements across the Nigerian Middle Belt, Benue valley and Cameroon highlands, led by Wukari (9,8k in 1500AD), Foumban (4,9k in 1500AD), Nok (4,6k in 100AD) and Doma (3,2k) [@Agai2014ArchaeologicalSearch; @Dueppen2016TheArchaeology].

<figure class="crd-table-figure" id="tab:zone8-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Biepi</strong></td><td class="crd-td">NGA: 8,08, 9,86</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,9k</td><td class="crd-td">-</td><td class="crd-td">13,3k (1440AD)</td></tr>
<tr><td class="crd-td"><strong>Wukari</strong></td><td class="crd-td">NGA: 7,87, 9,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,8k</td><td class="crd-td">9,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Pindiga Old</strong></td><td class="crd-td">NGA: 9,98, 10,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">7,8k</td><td class="crd-td">7,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Laikom</strong></td><td class="crd-td">CMR: 6,27, 10,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">-</td><td class="crd-td">6k (1320AD)</td></tr>
<tr><td class="crd-td"><strong>Foumban</strong></td><td class="crd-td">CMR: 5,72, 10,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">4,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mankon Old</strong></td><td class="crd-td">CMR: 5,99, 10,1</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4,1k</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">4,8k (1440AD)</td></tr>
<tr><td class="crd-td"><strong>Nok</strong></td><td class="crd-td">NGA: 9,5, 8,02</td><td class="crd-td">515</td><td class="crd-td">917</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (400BC)</td></tr>
<tr><td class="crd-td"><strong>Oku Grassfields</strong></td><td class="crd-td">CMR: 6,25, 10,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">4,3k (1330AD)</td></tr>
<tr><td class="crd-td"><strong>Bakumi</strong></td><td class="crd-td">NGA: 7,86, 7,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">1,7k</td><td class="crd-td">3,8k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Kalam Gombe</strong></td><td class="crd-td">NGA: 10,68, 10,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">3,7k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Kona Jukun</strong></td><td class="crd-td">NGA: 8,95, 11,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">3,7k (1420AD)</td></tr>
<tr><td class="crd-td"><strong>Doma</strong></td><td class="crd-td">NGA: 8,4, 8,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Keana</strong></td><td class="crd-td">NGA: 8,15, 8,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Alok</strong></td><td class="crd-td">NGA: 6,31, 8,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1180AD)</td></tr>
<tr><td class="crd-td"><strong>Sabga</strong></td><td class="crd-td">CMR: 6,01, 10,31</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1360AD)</td></tr>
<tr><td class="crd-td"><strong>Pangwari</strong></td><td class="crd-td">NGA: 9,58, 7,61</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Tudun Dangawo</strong></td><td class="crd-td">NGA: 10,35, 10,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1280AD)</td></tr>
<tr><td class="crd-td"><strong>Nditam</strong></td><td class="crd-td">CMR: 5,34, 11,33</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kirfin Sama Hill</strong></td><td class="crd-td">NGA: 10,4, 10,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kachama 2</strong></td><td class="crd-td">NGA: 9,56, 7,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Dibamba</strong></td><td class="crd-td">CMR: 4, 9,82</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Shum Laka Rock Shelter</strong></td><td class="crd-td">CMR: 5,86, 10,08</td><td class="crd-td">225</td><td class="crd-td">838</td><td class="crd-td">240</td><td class="crd-td">113</td><td class="crd-td">-</td><td class="crd-td">2,5k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Rafin Ndoko</strong></td><td class="crd-td">NGA: 9,68, 6,05</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,6k</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Nachtigal B</strong></td><td class="crd-td">CMR: 4,38, 11,71</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Ndeba-Somie</strong></td><td class="crd-td">CMR: 6,28, 11,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">776</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Doguwa 1</strong></td><td class="crd-td">NGA: 9,56, 7,72</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Mouanko-Lobethal</strong></td><td class="crd-td">CMR: 3,64, 9,78</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Rop Rock Shelter</strong></td><td class="crd-td">NGA: 9,45, 8,93</td><td class="crd-td">42</td><td class="crd-td">595</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ise Dura</strong></td><td class="crd-td">NGA: 6,92, 9,25</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Puntun Dutse</strong></td><td class="crd-td">NGA: 9,61, 7,7</td><td class="crd-td">570</td><td class="crd-td">983</td><td class="crd-td">1,5k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Oku</strong></td><td class="crd-td">CMR: 6,25, 10,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Shendam</strong></td><td class="crd-td">NGA: 8,88, 9,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Fundong</strong></td><td class="crd-td">CMR: 6,29, 10,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Nachtigal C</strong></td><td class="crd-td">CMR: 4,29, 11,64</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1354AD)</td></tr>
<tr><td class="crd-td"><strong>Lac Ossa</strong></td><td class="crd-td">CMR: 3,78, 10,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Baidesuru Furnace</strong></td><td class="crd-td">NGA: 9,54, 7,68</td><td class="crd-td">-</td><td class="crd-td">976</td><td class="crd-td">1,4k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Nachtigal D</strong></td><td class="crd-td">CMR: 4,2, 11,6</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bara Kirfi</strong></td><td class="crd-td">NGA: 10,45, 10,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1330AD)</td></tr>
<tr><td class="crd-td"><strong>Ewani 1</strong></td><td class="crd-td">CMR: 5,21, 9,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Nkarasi</strong></td><td class="crd-td">NGA: 6,19, 8,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1260AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 268 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Individually assessed settlements in the Nok-Jos Plateau, Nupe and Benue Corridor from 1000BC to 1500AD (top 40 of 308 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Ile-Ife, Benin, Igbo-Ukwu and Lower Niger

Table \ref{tab:zone9-sites} documents 536 settlements across Yorubaland, Edo, Igboland and the Niger Delta, led by Ile-Ife (88,6k in 1350AD), Nembe (87,5k in 1000AD), Benin City (47,5k in 1500AD), Ijebu Ode (24,8k), Old Oyo (24,8k), Owo (18,6k), Ilesha (12,4k) and Igbo Ukwu (7,6k) [@Connah1967NewLight; @Adekola2009EarlyUrban; @Connah2001AfricanCivilizations].

<figure class="crd-table-figure" id="tab:zone9-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ile-Ife</strong></td><td class="crd-td">NGA: 7,48, 4,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,2k</td><td class="crd-td">17k</td><td class="crd-td">62,4k</td><td class="crd-td">88,6k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Benin City</strong></td><td class="crd-td">NGA: 6,3, 5,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,8k</td><td class="crd-td">47,5k</td><td class="crd-td">47,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ijebu Ode</strong></td><td class="crd-td">NGA: 6,82, 3,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24,8k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Old Oyo</strong></td><td class="crd-td">NGA: 8,99, 4,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16,4k</td><td class="crd-td">24,8k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Igbidu</strong></td><td class="crd-td">NGA: 6,07, 8,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">21,6k</td><td class="crd-td">21,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Owo</strong></td><td class="crd-td">NGA: 7,2, 5,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,6k</td><td class="crd-td">18,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Atani</strong></td><td class="crd-td">NGA: 6,01, 6,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,7k</td><td class="crd-td">13,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Gbara Nupe</strong></td><td class="crd-td">NGA: 8,79, 5,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7k</td><td class="crd-td">-</td><td class="crd-td">12,9k (1420AD)</td></tr>
<tr><td class="crd-td"><strong>Ilesha</strong></td><td class="crd-td">NGA: 7,63, 4,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,4k</td><td class="crd-td">12,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Okpoko</strong></td><td class="crd-td">NGA: 5,73, 6,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11k</td><td class="crd-td">11k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Okpogho</strong></td><td class="crd-td">NGA: 6,45, 7,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,5k</td><td class="crd-td">9,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Sungbo's Eredo</strong></td><td class="crd-td">NGA: 6,79, 3,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,9k</td><td class="crd-td">5,4k</td><td class="crd-td">8,9k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Igbo Ukwu</strong></td><td class="crd-td">NGA: 6,02, 7,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">4,4k</td><td class="crd-td">7,6k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Inisa</strong></td><td class="crd-td">NGA: 7,85, 4,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,5k</td><td class="crd-td">7,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Amaigbo</strong></td><td class="crd-td">NGA: 5,73, 7,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">7,5k</td><td class="crd-td">7,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Tado</strong></td><td class="crd-td">TGO: 7,15, 1,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,2k</td><td class="crd-td">7,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ado Ekiti</strong></td><td class="crd-td">NGA: 7,62, 5,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,2k</td><td class="crd-td">7,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ile Oluji</strong></td><td class="crd-td">NGA: 7,2, 4,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">4,8k</td><td class="crd-td">7,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Iresa-Adu</strong></td><td class="crd-td">NGA: 8,08, 4,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">1k</td><td class="crd-td">7,1k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Ewohimi</strong></td><td class="crd-td">NGA: 6,46, 6,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">7,1k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Orerokpe</strong></td><td class="crd-td">NGA: 5,65, 5,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">967</td><td class="crd-td">7,1k (1430AD)</td></tr>
<tr><td class="crd-td"><strong>Otun Ekiti</strong></td><td class="crd-td">NGA: 7,99, 5,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">3,3k</td><td class="crd-td">7k (1360AD)</td></tr>
<tr><td class="crd-td"><strong>Ibokun</strong></td><td class="crd-td">NGA: 7,78, 4,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">1k</td><td class="crd-td">7k (1340AD)</td></tr>
<tr><td class="crd-td"><strong>Ago Iwoye</strong></td><td class="crd-td">NGA: 6,94, 3,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">1,3k</td><td class="crd-td">6,9k (1430AD)</td></tr>
<tr><td class="crd-td"><strong>Akure</strong></td><td class="crd-td">NGA: 7,25, 5,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Kétou</strong></td><td class="crd-td">BEN: 7,35, 2,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">6,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Oke Ila</strong></td><td class="crd-td">NGA: 7,95, 4,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">6,7k (1370AD)</td></tr>
<tr><td class="crd-td"><strong>Owa-Oyibu</strong></td><td class="crd-td">NGA: 6,24, 6,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">-</td><td class="crd-td">6,7k (1360AD)</td></tr>
<tr><td class="crd-td"><strong>Usen</strong></td><td class="crd-td">NGA: 6,74, 5,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">6,7k (1340AD)</td></tr>
<tr><td class="crd-td"><strong>Enugu Ukwu</strong></td><td class="crd-td">NGA: 6,17, 7,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">3,9k</td><td class="crd-td">6,7k (1340AD)</td></tr>
<tr><td class="crd-td"><strong>Ejinrin</strong></td><td class="crd-td">NGA: 6,61, 3,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">6,7k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Idogbo</strong></td><td class="crd-td">NGA: 6,26, 5,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">6,6k (1330AD)</td></tr>
<tr><td class="crd-td"><strong>Igueben</strong></td><td class="crd-td">NGA: 6,49, 6,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">2,1k</td><td class="crd-td">6,6k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Obalara-Ife</strong></td><td class="crd-td">NGA: 7,51, 4,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">-</td><td class="crd-td">6,6k (1360AD)</td></tr>
<tr><td class="crd-td"><strong>Nri</strong></td><td class="crd-td">NGA: 6,15, 7,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,3k</td><td class="crd-td">6,5k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Igbajo</strong></td><td class="crd-td">NGA: 7,91, 4,81</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">2k</td><td class="crd-td">6,5k (1380AD)</td></tr>
<tr><td class="crd-td"><strong>Ehor</strong></td><td class="crd-td">NGA: 6,62, 5,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">1,5k</td><td class="crd-td">6,5k (1330AD)</td></tr>
<tr><td class="crd-td"><strong>Uzuakoli</strong></td><td class="crd-td">NGA: 5,62, 7,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">6,4k (1420AD)</td></tr>
<tr><td class="crd-td"><strong>Abudu</strong></td><td class="crd-td">NGA: 6,29, 6,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">3,7k</td><td class="crd-td">6,4k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Igbaja</strong></td><td class="crd-td">NGA: 8,39, 4,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">1,1k</td><td class="crd-td">6,3k (1380AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 496 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Individually assessed settlements in Ile-Ife, Benin, Igbo-Ukwu and the Lower Niger from 1000BC to 1500AD (top 40 of 536 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Mali Imperial Core and Inland Niger Delta

Table \ref{tab:zone10-sites} lists 160 settlements across the Upper Niger Manden heartland and southern Inland Niger Delta, headed by Niani (38,6k in 1350AD), Dakajalan (8,6k), Kangaba (6,2k) and Siguiri (3,2k) [@Austen1996HistoryOral; @Jansen1996TheRepresentation; @Waals1989HetArcheologisch].

<figure class="crd-table-figure" id="tab:zone10-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Niani</strong></td><td class="crd-td">GIN: 11,38, -8,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,5k</td><td class="crd-td">7,7k</td><td class="crd-td">38,6k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Dakajalan</strong></td><td class="crd-td">MLI: 11,96, -8,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,8k</td><td class="crd-td">-</td><td class="crd-td">11k (1320AD)</td></tr>
<tr><td class="crd-td"><strong>Dakajalan</strong></td><td class="crd-td">MLI: 12,32, -8,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,6k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Kangaba</strong></td><td class="crd-td">MLI: 11,93, -8,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">6,2k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Siguiri</strong></td><td class="crd-td">GIN: 11,43, -9,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">5,6k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Fugumba</strong></td><td class="crd-td">GIN: 11,12, -12,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">5,6k (1390AD)</td></tr>
<tr><td class="crd-td"><strong>Koinadugu Old</strong></td><td class="crd-td">SLE: 9,53, -11,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1340AD)</td></tr>
<tr><td class="crd-td"><strong>Mange Bureh</strong></td><td class="crd-td">SLE: 8,92, -12,86</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">289</td><td class="crd-td">3k (1360AD)</td></tr>
<tr><td class="crd-td"><strong>Marampa</strong></td><td class="crd-td">SLE: 8,69, -12,5</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (860AD)</td></tr>
<tr><td class="crd-td"><strong>Njala</strong></td><td class="crd-td">SLE: 8,23, -12,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Rokupr</strong></td><td class="crd-td">SLE: 8,67, -12,95</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (920AD)</td></tr>
<tr><td class="crd-td"><strong>Foya</strong></td><td class="crd-td">LBR: 8,36, -10,21</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td><td class="crd-td">2,4k</td><td class="crd-td">1k</td><td class="crd-td">2,7k (880AD)</td></tr>
<tr><td class="crd-td"><strong>Panguma</strong></td><td class="crd-td">SLE: 8,19, -11,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">456</td><td class="crd-td">2,6k (1370AD)</td></tr>
<tr><td class="crd-td"><strong>Tikonko</strong></td><td class="crd-td">SLE: 7,86, -11,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1390AD)</td></tr>
<tr><td class="crd-td"><strong>Balato</strong></td><td class="crd-td">GIN: 10,74, -9,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1320AD)</td></tr>
<tr><td class="crd-td"><strong>Kintinian</strong></td><td class="crd-td">GIN: 11,59, -9,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>San</strong></td><td class="crd-td">MLI: 13,29, -4,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bate-Nafadji</strong></td><td class="crd-td">GIN: 10,49, -9,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">322</td><td class="crd-td">2,5k (1360AD)</td></tr>
<tr><td class="crd-td"><strong>Koulikoro</strong></td><td class="crd-td">MLI: 12,88, -7,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,4k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Bumpe</strong></td><td class="crd-td">SLE: 7,89, -11,91</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,6k</td><td class="crd-td">2,4k (1380AD)</td></tr>
<tr><td class="crd-td"><strong>Karifamoriah</strong></td><td class="crd-td">GIN: 10,4, -9,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1380AD)</td></tr>
<tr><td class="crd-td"><strong>Famanbougou</strong></td><td class="crd-td">MLI: 11,9, -7,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Koin Futa</strong></td><td class="crd-td">GIN: 11,24, -11,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1340AD)</td></tr>
<tr><td class="crd-td"><strong>Kurubonla</strong></td><td class="crd-td">SLE: 9,13, -10,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1360AD)</td></tr>
<tr><td class="crd-td"><strong>Bafodia</strong></td><td class="crd-td">SLE: 9,67, -11,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">268</td><td class="crd-td">2,3k (1320AD)</td></tr>
<tr><td class="crd-td"><strong>Bendugu</strong></td><td class="crd-td">SLE: 9,48, -11,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1360AD)</td></tr>
<tr><td class="crd-td"><strong>Sumbuya</strong></td><td class="crd-td">SLE: 7,65, -11,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">657</td><td class="crd-td">2,1k (1380AD)</td></tr>
<tr><td class="crd-td"><strong>Siola Shelter</strong></td><td class="crd-td">CIV: 9,85, -7,43</td><td class="crd-td">-</td><td class="crd-td">908</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Yagala Old Town</strong></td><td class="crd-td">SLE: 9,57, -11,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td><td class="crd-td">2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Port Loko</strong></td><td class="crd-td">SLE: 8,77, -12,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Douako</strong></td><td class="crd-td">GIN: 9,73, -10,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kita</strong></td><td class="crd-td">MLI: 13,05, -9,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Kouroussa</strong></td><td class="crd-td">GIN: 10,65, -9,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bandajuma Sowa</strong></td><td class="crd-td">SLE: 7,54, -11,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1370AD)</td></tr>
<tr><td class="crd-td"><strong>Norassoba</strong></td><td class="crd-td">GIN: 11,14, -9,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,8k (1340AD)</td></tr>
<tr><td class="crd-td"><strong>Kiniéro</strong></td><td class="crd-td">GIN: 10,42, -9,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">1,8k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Dogomet</strong></td><td class="crd-td">GIN: 10,59, -11,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Gbangbatoke</strong></td><td class="crd-td">SLE: 7,77, -12,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1380AD)</td></tr>
<tr><td class="crd-td"><strong>Niandankoro</strong></td><td class="crd-td">GIN: 11,08, -9,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bumban</strong></td><td class="crd-td">SLE: 9,12, -11,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 120 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 10.</span> Individually assessed settlements in the Mali Imperial Core and Inland Niger Delta from 1000BC to 1500AD (top 40 of 160 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Jolof Empire, Takrur and Senegambia

Table \ref{tab:zone11-sites} compiles 277 settlements across Takrur, the Jolof confederation and coastal Senegambia, led by Podor (7,8k in 1050AD), Linguère (5,1k in 1480AD), Diakhao (3,4k) and Lambaye (2,9k) [@Chevrier2020NewData].

<figure class="crd-table-figure" id="tab:zone11-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Manéah</strong></td><td class="crd-td">GIN: 9,73, -13,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,3k</td><td class="crd-td">11,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Linguère</strong></td><td class="crd-td">SEN: 15,4, -15,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">5,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mbissel</strong></td><td class="crd-td">SEN: 14,16, -16,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">4,8k (1360AD)</td></tr>
<tr><td class="crd-td"><strong>Kambia Old</strong></td><td class="crd-td">SLE: 9,12, -12,92</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k (880AD)</td></tr>
<tr><td class="crd-td"><strong>Kolaboui</strong></td><td class="crd-td">GIN: 10,8, -14,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Diakhao</strong></td><td class="crd-td">SEN: 14,46, -16,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Lambaye</strong></td><td class="crd-td">SEN: 14,78, -16,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Kuntaur</strong></td><td class="crd-td">GMB: 13,67, -14,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">304</td><td class="crd-td">2,9k (1150AD)</td></tr>
<tr><td class="crd-td"><strong>Koumbia</strong></td><td class="crd-td">GIN: 11,8, -13,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kansala North</strong></td><td class="crd-td">GNB: 12,47, -14,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1340AD)</td></tr>
<tr><td class="crd-td"><strong>Brikama Ba</strong></td><td class="crd-td">GMB: 13,53, -14,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1340AD)</td></tr>
<tr><td class="crd-td"><strong>Siendou</strong></td><td class="crd-td">SEN: 14,75, -17,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,9k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Khant Shellmound</strong></td><td class="crd-td">SEN: 16,13, -16,44</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Cubalel</strong></td><td class="crd-td">SEN: 16,43, -14,56</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">2,5k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">2,5k (500AD)</td></tr>
<tr><td class="crd-td"><strong>Dioron Boumak</strong></td><td class="crd-td">SEN: 13,84, -16,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">2,5k</td><td class="crd-td">1,4k</td><td class="crd-td">2,5k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Bula</strong></td><td class="crd-td">GNB: 12,11, -15,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">672</td><td class="crd-td">2,5k (1340AD)</td></tr>
<tr><td class="crd-td"><strong>Illiassa</strong></td><td class="crd-td">GMB: 13,57, -15,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1320AD)</td></tr>
<tr><td class="crd-td"><strong>Kahone</strong></td><td class="crd-td">SEN: 14,16, -16,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mambolo</strong></td><td class="crd-td">SLE: 8,92, -13,03</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,1k</td><td class="crd-td">2,2k</td><td class="crd-td">385</td><td class="crd-td">2,3k (1440AD)</td></tr>
<tr><td class="crd-td"><strong>Ndalane</strong></td><td class="crd-td">SEN: 14,3, -16,17</td><td class="crd-td">-</td><td class="crd-td">978</td><td class="crd-td">1,4k</td><td class="crd-td">2k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lac Retba</strong></td><td class="crd-td">SEN: 14,85, -17,2</td><td class="crd-td">-</td><td class="crd-td">949</td><td class="crd-td">1,3k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1263AD)</td></tr>
<tr><td class="crd-td"><strong>Susana Varela</strong></td><td class="crd-td">GNB: 12,38, -16,43</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1420AD)</td></tr>
<tr><td class="crd-td"><strong>Buruntuma</strong></td><td class="crd-td">GNB: 12,45, -13,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1370AD)</td></tr>
<tr><td class="crd-td"><strong>Sonaco</strong></td><td class="crd-td">GNB: 12,4, -14,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">163</td><td class="crd-td">2,2k (1360AD)</td></tr>
<tr><td class="crd-td"><strong>Pointe du Fann</strong></td><td class="crd-td">SEN: 14,68, -17,47</td><td class="crd-td">-</td><td class="crd-td">827</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Sine Ngayene</strong></td><td class="crd-td">SEN: 13,7, -15,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">622</td><td class="crd-td">2,1k</td><td class="crd-td">1,2k</td><td class="crd-td">2,1k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Bantignel</strong></td><td class="crd-td">GIN: 11,15, -12,48</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1440AD)</td></tr>
<tr><td class="crd-td"><strong>Diabugu</strong></td><td class="crd-td">GMB: 13,38, -14,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">237</td><td class="crd-td">2,1k (1320AD)</td></tr>
<tr><td class="crd-td"><strong>Kouramangui</strong></td><td class="crd-td">GIN: 11,25, -12,31</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1440AD)</td></tr>
<tr><td class="crd-td"><strong>Tendaba</strong></td><td class="crd-td">GMB: 13,44, -15,81</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">2k (1360AD)</td></tr>
<tr><td class="crd-td"><strong>Xime</strong></td><td class="crd-td">GNB: 12,12, -14,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">2k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Koina</strong></td><td class="crd-td">GMB: 13,48, -13,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">2k (1340AD)</td></tr>
<tr><td class="crd-td"><strong>Wanar</strong></td><td class="crd-td">SEN: 13,86, -15,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">901</td><td class="crd-td">2k</td><td class="crd-td">1,8k</td><td class="crd-td">2k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>T. 10</strong></td><td class="crd-td">SEN: 14,7, -15,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kacundy</strong></td><td class="crd-td">GIN: 10,89, -14,34</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2k (1240AD)</td></tr>
<tr><td class="crd-td"><strong>Bramaya</strong></td><td class="crd-td">GIN: 9,98, -13,56</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2k (1340AD)</td></tr>
<tr><td class="crd-td"><strong>Circles</strong></td><td class="crd-td">GMB: 13,73, -15,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">2k</td><td class="crd-td">2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Rao</strong></td><td class="crd-td">SEN: 15,91, -16,41</td><td class="crd-td">724</td><td class="crd-td">724</td><td class="crd-td">901</td><td class="crd-td">872</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Kodiam</strong></td><td class="crd-td">SEN: 13,74, -14,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Fattatenda</strong></td><td class="crd-td">GMB: 13,38, -14,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1330AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 237 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 11.</span> Individually assessed settlements in the Jolof Empire, Takrur and Senegambia from 1000BC to 1500AD (top 40 of 277 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

# Limitations

Three caveats govern use of this settlement ledger. First, tropical forest vegetation and acidic soils in the Guinea and Lower Niger zones reduce surface mound visibility compared with semi-arid Sahelian tells, so site density in Tables 5, 8 and 9 reflects major excavated capitals rather than all rural villages [@Dueppen2016TheArchaeology; @Connah2001AfricanCivilizations]. Second, walled enclosures in Benin City, Old Oyo and Hausaland contained intra-mural gardens and farmlands, introducing roughly 20% to 35% uncertainty around individual area-to-population conversions [@Connah1967NewLight; @Adekola2009EarlyUrban]. Third, because these 3.261 assessed centres represent the urban and excavated archaeological upper tier, their summed headcounts sit well below the full regional populations reported in the companion review [@Diblasi1981ExcavationsJenne; @Mcintosh1984TheEarly].

# Conclusion

Together, the 3.261 individually assessed settlements document the rise of indigenous urban networks from early Mauritanian stone-walled compounds and Inland Niger Delta mound clusters through the trading capitals of Wagadou, Mali, Songhai and Kanem-Bornu to the dense Hausa, Akan, Yoruba and Edo cities of 1500AD.

# Appendix

## Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} sums site counts and combined linearly interpolated urban populations across all 11 sub-regions at the five chapter benchmark years from 1000BC to 1500AD.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion (Sites)</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Kanem-Bornu Empire and Lake Chad Basin (400)</strong></td><td class="crd-td">11,1k</td><td class="crd-td">72,6k</td><td class="crd-td">148,5k</td><td class="crd-td">222,5k</td><td class="crd-td">306k</td></tr>
<tr><td class="crd-td"><strong>2. Wagadou (Ghana) and Western Sahel (353)</strong></td><td class="crd-td">39,9k</td><td class="crd-td">69,4k</td><td class="crd-td">135,6k</td><td class="crd-td">204,5k</td><td class="crd-td">199,6k</td></tr>
<tr><td class="crd-td"><strong>3. Songhai Gao, Timbuktu and Niger Bend (153)</strong></td><td class="crd-td">7,1k</td><td class="crd-td">29,1k</td><td class="crd-td">57,2k</td><td class="crd-td">106,9k</td><td class="crd-td">151,2k</td></tr>
<tr><td class="crd-td"><strong>4. Tuareg Air, Adrar des Ifoghas and Sahara (80)</strong></td><td class="crd-td">5,4k</td><td class="crd-td">14,5k</td><td class="crd-td">26k</td><td class="crd-td">28,2k</td><td class="crd-td">32,9k</td></tr>
<tr><td class="crd-td"><strong>5. Proto-Akan, Bono Manso and Guinea Forest (396)</strong></td><td class="crd-td">2,9k</td><td class="crd-td">90,2k</td><td class="crd-td">111,7k</td><td class="crd-td">140,5k</td><td class="crd-td">249,2k</td></tr>
<tr><td class="crd-td"><strong>6. Mossi Kingdoms and Voltaic Gur States (297)</strong></td><td class="crd-td">2,3k</td><td class="crd-td">71,1k</td><td class="crd-td">111k</td><td class="crd-td">126,6k</td><td class="crd-td">187,6k</td></tr>
<tr><td class="crd-td"><strong>7. Hausa Bakwai City-States (Kano, Katsina, Gobir) (301)</strong></td><td class="crd-td">471</td><td class="crd-td">3k</td><td class="crd-td">15,3k</td><td class="crd-td">92,1k</td><td class="crd-td">290,1k</td></tr>
<tr><td class="crd-td"><strong>8. Nok-Jos Plateau, Nupe and Benue Corridor (308)</strong></td><td class="crd-td">9,4k</td><td class="crd-td">73,1k</td><td class="crd-td">87,3k</td><td class="crd-td">125,4k</td><td class="crd-td">180,1k</td></tr>
<tr><td class="crd-td"><strong>9. Ile-Ife, Benin, Igbo-Ukwu and Lower Niger (536)</strong></td><td class="crd-td">2,4k</td><td class="crd-td">35,4k</td><td class="crd-td">74,5k</td><td class="crd-td">477k</td><td class="crd-td">746,4k</td></tr>
<tr><td class="crd-td"><strong>10. Mali Imperial Core and Inland Niger Delta (160)</strong></td><td class="crd-td">699</td><td class="crd-td">14,7k</td><td class="crd-td">24,5k</td><td class="crd-td">82,4k</td><td class="crd-td">108,9k</td></tr>
<tr><td class="crd-td"><strong>11. Jolof Empire, Takrur and Senegambia (277)</strong></td><td class="crd-td">2,7k</td><td class="crd-td">63,6k</td><td class="crd-td">87,5k</td><td class="crd-td">123k</td><td class="crd-td">136k</td></tr>
<tr><td class="crd-td"><strong>All Sub-Regions (3.261)</strong></td><td class="crd-td">84,5k</td><td class="crd-td">536,7k</td><td class="crd-td">879,1k</td><td class="crd-td">1,73M</td><td class="crd-td">2,59M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 12.</span> Individually assessed settlement counts and combined interpolated urban populations across the 11 West African and Sahelian sub-regions from 1000BC to 1500AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Note 1: Linear interpolation between dated observations applies only within each settlement's documented lifespan; pre-foundation and post-abandonment benchmarks are marked with a hyphen (-).

Note 2: Carboneras (Bioko Island, Equatorial Guinea) and Mouanko-Lobethal (Cameroon littoral) sit slightly outside the continental sub-region polygon vertices and are grouped with their nearest adjacent coastal sub-regions via minimum vertex distance.
