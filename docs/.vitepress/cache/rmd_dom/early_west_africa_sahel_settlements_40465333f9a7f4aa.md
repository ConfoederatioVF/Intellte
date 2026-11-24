---
title: "Early West Africa and the Sahel States"
subtitle: "Settlement Gazetteer: 228 Individually Assessed Towns and Polities (1000BC-1500AD)"
date: "23 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: early_west_africa_sahel_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 228 individually assessed settlements across 19 modern states and 11 West African and Sahelian sub-regions from 1000BC to 1500AD."
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

This gazetteer compiles spatial coordinates and multi-period city-proper population series for 228 individually assessed settlements across West Africa and the Sahel between 1000BC and 1500AD (394 dated observations spanning 19 modern jurisdictions). Screened from 251 candidate tells, walled capitals, caravan entrepots and dated rock shelters (23 excluded), the retained entries span all 11 regional zones from Senegambia and the Mauritanian Sahara to Lake Chad and the Lower Niger forests. Active assessed centres rise from 23 early iron-age and late-stone-age loci at 1000BC to 17 at 1AD, 12 at 500AD, 31 at 1000AD and 81 settlements by 1500AD, led by Ile-Ife (88,6k), Nembe (87,5k), Gao (54,6k), Benin City (47,5k), Djenné (40k), Niani (38,6k), Kano (38,4k), Birnin Gazargamu (34,2k) and Tombouctou (32,8k).



# Background

Reconstructing early West African urbanism requires combining stratigraphic mound excavations, earthwork transect surveys, radiocarbon registers and mediaeval Arabic and local chronicles [@Mcintosh1984TheEarly; @Dueppen2016TheArchaeology; @Besse2020OSAAR; @Hinz2023XRONOS]. Across the Sahelian steppe and Inland Niger Delta, towns such as Koumbi Saleh, Awdaghost, Dia, Jenne-Jeno, Timbuktu and Gao grew along desert-edge caravan corridors and seasonal rice floodplains [@Mcintosh1981TheInland; @Mcdougall1985TheView; @Cisse2010GaoSaney]. Further south, walled Hausa *birane* around Kano, Katsina and Zaria, Akan gold entrepots at Begho and Bono Manso, and monumental Yoruba and Edo forest capitals at Ile-Ife and Benin City formed dense multi-tiered urban hierarchies [@Sutton1979TowardsLess; @Posnansky2015BeghoLife; @Connah1967NewLight; @Adekola2009EarlyUrban].

# Methodology

Candidate sites were compiled across four saturation waves from excavated urban monographs, regional surveys and chronometric databases [@Besse2020OSAAR; @Hinz2023XRONOS; @McIntosh1995JenneJeno]. Of 251 initial candidates inside the 7.910.617 km² study domain [@Runfola2020GeoBoundaries], 23 duplicate aliases, out-of-epoch foundations or non-settlement loci were excluded, leaving 228 individually assessed settlements. Each site is assigned deterministically by point-in-polygon lookup (with nearest-boundary snapping for two coastal-edge sites) to one of the 11 vector sub-regions.

Every retained entry carries city-proper estimates derived from measured mound or walled areas calibrated against African preindustrial density transects (including Igboho's 60 to 88 persons/ha and Storey's 59-city African mean of 12.724 persons/km²) and excavated stratigraphic sequences [@Connah2001AfricanCivilizations; @Diblasi1981ExcavationsJenne; @Davis2000LeadershipStrategies]. Tables 1 to 11 report linearly interpolated populations at five chapter benchmarks (1000BC, 1AD, 500AD, 1000AD and 1500AD) alongside each site's exact assessed peak and peak year, marking periods prior to foundation or after abandonment with a hyphen (-).

# Testing and Validation

Across the upper half of the settlement hierarchy ($n = 114$), log-log rank-size regression yields a Zipf exponent of $\alpha = 0,87$ ($R^2 = 0,99$; Figure \ref{fig:settlements-rank}), reflecting polycentric peer capitals across separate riverine and forest basins [@Mcintosh1984TheEarly; @Kirkgreene1804ComparativeStudy]. Full-ledger regression across all 228 entries gives $\alpha = 1,14$ ($R^2 = 0,79$) once dated rock shelters below 100 inhabitants are included [@Chevrier2020NewData; @Agai2014ArchaeologicalSearch]. All 11 sub-regions hold between 15 and 34 assessed settlements, with zero empty territories and a 78,9% unique-peak ratio confirming individual site calibration.

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-early-west-africa-sahel-settlements/fig_03_rank_size.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Rank-size scaling across 228 West African settlements (upper-half Zipf q = 0,87, R² = 0,99) and sub-regional population densities in 1500AD.</figcaption>
</figure>

# Results

## Kanem-Bornu Empire and Lake Chad Basin

Table \ref{tab:zone1-sites} compiles 17 settlements across Kanem, Bornu and the Lake Chad basin, led by the Sayfawa capitals of Birnin Gazargamu (34,2k in 1500AD) and Njimi (21,4k in 1300AD) alongside Kotoko walled towns [@Connah2001AfricanCivilizations].

<figure class="crd-table-figure" id="tab:zone1-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Birnin Gazargamu</strong></td><td class="crd-td">NGA: 13,01, 12,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">34,2k</td><td class="crd-td">34,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Njimi</strong></td><td class="crd-td">TCD: 14,13, 15,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,9k</td><td class="crd-td">-</td><td class="crd-td">21,4k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Logone-Birni</strong></td><td class="crd-td">CMR: 11,72, 15,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Yao</strong></td><td class="crd-td">TCD: 12,85, 17,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Goulfeil</strong></td><td class="crd-td">CMR: 12,39, 14,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Yau</strong></td><td class="crd-td">NGA: 13,56, 13,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Makari</strong></td><td class="crd-td">CMR: 12,58, 14,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Ngala</strong></td><td class="crd-td">NGA: 12,35, 14,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Daima</strong></td><td class="crd-td">NGA: 12,21, 14,46</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,3k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2,6k (700AD)</td></tr>
<tr><td class="crd-td"><strong>Zunfur</strong></td><td class="crd-td">NGA: 12,26, 13,11</td><td class="crd-td">940</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (500BC)</td></tr>
<tr><td class="crd-td"><strong>Maïné-Soroa</strong></td><td class="crd-td">NER: 13,22, 12,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bol</strong></td><td class="crd-td">TCD: 13,48, 14,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Mongo</strong></td><td class="crd-td">TCD: 12,18, 18,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Geidam</strong></td><td class="crd-td">NGA: 12,89, 11,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Diffa</strong></td><td class="crd-td">NER: 13,32, 12,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">895</td><td class="crd-td">895 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kursakata Mound</strong></td><td class="crd-td">NGA: 12,32, 14,2</td><td class="crd-td">560</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">560 (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Mege Mound</strong></td><td class="crd-td">NGA: 12,22, 13,95</td><td class="crd-td">465</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">465 (1000BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in Kanem-Bornu and the Lake Chad Basin from 1000BC to 1500AD.</figcaption>
</figure>

## Wagadou (Ghana) and Western Sahel

Table \ref{tab:zone2-sites} lists 35 settlements across the Tagant-Hodh gateways and upper Inland Niger Delta margin, anchored by Djenné (40k in 1450AD), Koumbi Saleh (18,2k in 1150AD), Dakhlet el Atrous (9,1k in 700BC), Kolima, Dia, Oualata and Awdaghost [@Mcdougall1985TheView; @Mcintosh1981TheInland; @McIntosh1995JenneJeno].

<figure class="crd-table-figure" id="tab:zone2-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Djenné</strong></td><td class="crd-td">MLI: 13,9, -4,55</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">18k</td><td class="crd-td">11,8k</td><td class="crd-td">-</td><td class="crd-td">40k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Koumbi Saleh</strong></td><td class="crd-td">MRT: 15,77, -7,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,2k</td><td class="crd-td">-</td><td class="crd-td">18,2k (1150AD)</td></tr>
<tr><td class="crd-td"><strong>Dakhlet el Atrous</strong></td><td class="crd-td">MRT: 18,38, -9,17</td><td class="crd-td">6,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,1k (700BC)</td></tr>
<tr><td class="crd-td"><strong>Kolima</strong></td><td class="crd-td">MLI: 15,17, -6,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,1k</td><td class="crd-td">-</td><td class="crd-td">8,7k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Matam</strong></td><td class="crd-td">SEN: 15,65, -13,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,9k</td><td class="crd-td">-</td><td class="crd-td">8,7k (950AD)</td></tr>
<tr><td class="crd-td"><strong>Dia</strong></td><td class="crd-td">MLI: 14,38, -4,9</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3,9k</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">8,1k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Oualata</strong></td><td class="crd-td">MRT: 17,3, -7,02</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">7,8k (1352AD)</td></tr>
<tr><td class="crd-td"><strong>Podor</strong></td><td class="crd-td">SEN: 16,65, -14,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7k</td><td class="crd-td">4,9k</td><td class="crd-td">7,8k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Awdaghost</strong></td><td class="crd-td">MRT: 17,42, -10,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,9k</td><td class="crd-td">-</td><td class="crd-td">6,2k (950AD)</td></tr>
<tr><td class="crd-td"><strong>Silla</strong></td><td class="crd-td">SEN: 15,97, -13,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Tichitt</strong></td><td class="crd-td">MRT: 18,44, -9,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Ouadane</strong></td><td class="crd-td">MRT: 20,93, -11,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Chinguetti</strong></td><td class="crd-td">MRT: 20,46, -12,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">4,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Azugi</strong></td><td class="crd-td">MRT: 20,57, -13,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k (1070AD)</td></tr>
<tr><td class="crd-td"><strong>Dakhlet el Atrouss Settlement</strong></td><td class="crd-td">MRT: 18,32, -9,28</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Kaédi</strong></td><td class="crd-td">MRT: 16,16, -13,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Nyamina</strong></td><td class="crd-td">MLI: 13,32, -6,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Ténenkou</strong></td><td class="crd-td">MLI: 14,46, -4,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Sofara</strong></td><td class="crd-td">MLI: 14,02, -4,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Néma</strong></td><td class="crd-td">MRT: 16,62, -7,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Boghé</strong></td><td class="crd-td">MRT: 16,6, -14,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mopti</strong></td><td class="crd-td">MLI: 14,48, -4,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kolokani</strong></td><td class="crd-td">MLI: 13,57, -8,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bakel</strong></td><td class="crd-td">SEN: 14,91, -12,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Niafunke</strong></td><td class="crd-td">MLI: 15,93, -3,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Bafoulabe</strong></td><td class="crd-td">MLI: 13,81, -10,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Sélibabi</strong></td><td class="crd-td">MRT: 15,16, -12,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Kéniéba</strong></td><td class="crd-td">MLI: 12,86, -11,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Toguere Doupwil</strong></td><td class="crd-td">MLI: 14,78, -4,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Chebka Settlement</strong></td><td class="crd-td">MRT: 18,46, -9,05</td><td class="crd-td">980</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">980 (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Yelimane</strong></td><td class="crd-td">MLI: 15,13, -10,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">925 (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Akjoujt</strong></td><td class="crd-td">MRT: 19,74, -14,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">890 (400BC)</td></tr>
<tr><td class="crd-td"><strong>Dhar Nema Settlement</strong></td><td class="crd-td">MRT: 16,62, -7,25</td><td class="crd-td">890</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">890 (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Ras el Ma</strong></td><td class="crd-td">MLI: 16,64, -4,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">790 (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Tamchekett</strong></td><td class="crd-td">MRT: 17,24, -10,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">695 (1480AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in Wagadou (Ghana) and the Western Sahel from 1000BC to 1500AD.</figcaption>
</figure>

## Songhai Gao, Timbuktu and Niger Bend

Table \ref{tab:zone3-sites} documents 22 settlements along the Middle Niger bend, headed by Gao (54,6k in 1500AD), Tombouctou (32,8k in 1450AD), Kukiya (11,7k in 1250AD) and Essouk-Tadmekka (7k in 1050AD) [@Cisse2010GaoSaney; @Davis2000LeadershipStrategies].

<figure class="crd-table-figure" id="tab:zone3-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Gao</strong></td><td class="crd-td">MLI: 16,26, -0,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,5k</td><td class="crd-td">54,6k</td><td class="crd-td">54,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Tombouctou</strong></td><td class="crd-td">MLI: 16,77, -3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">32,8k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Kukiya</strong></td><td class="crd-td">MLI: 15,35, 0,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,4k</td><td class="crd-td">-</td><td class="crd-td">11,7k (1250AD)</td></tr>
<tr><td class="crd-td"><strong>Essouk</strong></td><td class="crd-td">MLI: 18,77, 1,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6k</td><td class="crd-td">-</td><td class="crd-td">7k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Bamba</strong></td><td class="crd-td">MLI: 17,03, -1,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">2,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Tillabéri</strong></td><td class="crd-td">NER: 14,21, 1,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Goundam</strong></td><td class="crd-td">MLI: 16,41, -3,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Diré</strong></td><td class="crd-td">MLI: 16,26, -3,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Ansongo</strong></td><td class="crd-td">MLI: 15,66, 0,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Hombori</strong></td><td class="crd-td">MLI: 15,29, -1,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Douentza</strong></td><td class="crd-td">MLI: 15,01, -2,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Gourma-Rharous</strong></td><td class="crd-td">MLI: 16,88, -1,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Téra</strong></td><td class="crd-td">NER: 14, 0,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Bourem</strong></td><td class="crd-td">MLI: 16,95, -0,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Djibo</strong></td><td class="crd-td">BFA: 14,1, -1,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ménaka</strong></td><td class="crd-td">MLI: 15,91, 2,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Tessalit</strong></td><td class="crd-td">MLI: 20,2, 1,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Taghaza</strong></td><td class="crd-td">MLI: 23,62, -4,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1352AD)</td></tr>
<tr><td class="crd-td"><strong>Ayorou Haoussa</strong></td><td class="crd-td">NER: 14,73, 0,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">875 (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Ounjougou Complex</strong></td><td class="crd-td">MLI: 14,4, -3,45</td><td class="crd-td">580</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">580 (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Oursi Neolithic Mound</strong></td><td class="crd-td">BFA: 14,67, -0,45</td><td class="crd-td">395</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">395 (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Tin Akof Settlement</strong></td><td class="crd-td">BFA: 14,96, -0,14</td><td class="crd-td">360</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">360 (1000BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed settlements in Songhai Gao, Timbuktu and the Niger Bend from 1000BC to 1500AD.</figcaption>
</figure>

## Tuareg Air, Adrar des Ifoghas and Sahara

Table \ref{tab:zone4-sites} records 15 oasis and caravan centres across the Air Massif and eastern Niger Sahara, led by Agadez (6,8k in 1450AD), Azelik (5,5k), Assode (4,6k) and Bilma (3,2k) [@Dueppen2016TheArchaeology].

<figure class="crd-table-figure" id="tab:zone4-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Agadez</strong></td><td class="crd-td">NER: 16,97, 7,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Azelik</strong></td><td class="crd-td">NER: 17,27, 6,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,5k (1353AD)</td></tr>
<tr><td class="crd-td"><strong>Assode</strong></td><td class="crd-td">NER: 18,45, 8,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Bilma</strong></td><td class="crd-td">NER: 18,69, 12,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Djado</strong></td><td class="crd-td">NER: 21,02, 12,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Fachi</strong></td><td class="crd-td">NER: 18,11, 11,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Iférouane</strong></td><td class="crd-td">NER: 19,06, 8,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Teguidda-n-Tessoumt</strong></td><td class="crd-td">NER: 17,43, 6,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Timia</strong></td><td class="crd-td">NER: 18,11, 8,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1420AD)</td></tr>
<tr><td class="crd-td"><strong>Seguedine</strong></td><td class="crd-td">NER: 20,2, 12,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Tabelot</strong></td><td class="crd-td">NER: 17,61, 8,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Dirkou</strong></td><td class="crd-td">NER: 18,99, 12,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">910 (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Chirfa</strong></td><td class="crd-td">NER: 20,95, 12,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">680 (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Afunfun Settlement</strong></td><td class="crd-td">NER: 16,72, 7,94</td><td class="crd-td">270</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">270 (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Iwelen Settlement</strong></td><td class="crd-td">NER: 19,77, 8,43</td><td class="crd-td">265</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">265 (1000BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements in Tuareg Air, Adrar des Ifoghas and the central Sahara from 1000BC to 1500AD.</figcaption>
</figure>

## Proto-Akan, Bono Manso and Guinea Forest

Table \ref{tab:zone5-sites} compiles 19 settlements across the Akan goldfields and Upper Guinea coast, anchored by Begho (9,7k in 1500AD), Bono Manso (7,8k in 1480AD), Adansemanso (6,1k in 1500AD) and Elmina (4,2k in 1500AD) [@Posnansky2015BeghoLife].

<figure class="crd-table-figure" id="tab:zone5-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Begho</strong></td><td class="crd-td">GHA: 7,87, -2,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">9,6k</td><td class="crd-td">9,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bono Manso</strong></td><td class="crd-td">GHA: 7,7, -1,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Adansemanso</strong></td><td class="crd-td">GHA: 6,3, -1,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,1k</td><td class="crd-td">6,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Elmina</strong></td><td class="crd-td">GHA: 5,11, -1,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1482AD)</td></tr>
<tr><td class="crd-td"><strong>Abankeseso</strong></td><td class="crd-td">GHA: 6,15, -2,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">3,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kong</strong></td><td class="crd-td">CIV: 9,15, -4,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Mankessim</strong></td><td class="crd-td">GHA: 5,27, -1,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Asantemanso</strong></td><td class="crd-td">GHA: 6,48, -1,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,7k</td><td class="crd-td">3,4k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Wenchi</strong></td><td class="crd-td">GHA: 7,72, -2,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Twifo-Heman</strong></td><td class="crd-td">GHA: 5,43, -1,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Buipe</strong></td><td class="crd-td">GHA: 8,79, -1,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Techiman</strong></td><td class="crd-td">GHA: 7,6, -1,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bondoukou</strong></td><td class="crd-td">CIV: 8,04, -2,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Korhogo</strong></td><td class="crd-td">CIV: 9,47, -5,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Begoro</strong></td><td class="crd-td">GHA: 6,38, -0,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Grand Cess</strong></td><td class="crd-td">LBR: 4,57, -8,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Shama</strong></td><td class="crd-td">GHA: 5,01, -1,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1471AD)</td></tr>
<tr><td class="crd-td"><strong>Dixcove</strong></td><td class="crd-td">GHA: 4,79, -1,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">845</td><td class="crd-td">845 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Songon-Dagbe Shellmidden</strong></td><td class="crd-td">CIV: 5,31, -4,23</td><td class="crd-td">238</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">238 (1000BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed settlements in Proto-Akan, Bono Manso and the Upper Guinea Forest from 1000BC to 1500AD.</figcaption>
</figure>

## Mossi Kingdoms and Voltaic Gur States

Table \ref{tab:zone6-sites} lists 17 settlements across the Volta river basin, led by Bouna (10k in 1000AD), Ouagadougou (7,8k in 1500AD), Yendi Dabari (5,1k) and Tenkodogo (4,9k) [@Dueppen2016TheArchaeology].

<figure class="crd-table-figure" id="tab:zone6-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bouna</strong></td><td class="crd-td">CIV: 9,27, -3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10k</td><td class="crd-td">2,6k</td><td class="crd-td">10k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Ouagadougou</strong></td><td class="crd-td">BFA: 12,36, -1,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k</td><td class="crd-td">7,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Yendi Dabari</strong></td><td class="crd-td">GHA: 9,75, -0,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Tenkodogo</strong></td><td class="crd-td">BFA: 11,8, -0,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">4,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bobo-Dioulasso</strong></td><td class="crd-td">BFA: 11,2, -4,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">4,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Daboya</strong></td><td class="crd-td">GHA: 9,53, -1,39</td><td class="crd-td">410</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">3,6k</td><td class="crd-td">3,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Loropeni</strong></td><td class="crd-td">BFA: 10,3, -3,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Gourcy</strong></td><td class="crd-td">BFA: 13,2, -2,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Fada N'Gourma</strong></td><td class="crd-td">BFA: 12,06, 0,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Yako</strong></td><td class="crd-td">BFA: 12,96, -2,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bassar</strong></td><td class="crd-td">TGO: 9,26, 0,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Manga</strong></td><td class="crd-td">BFA: 11,68, -1,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Kaya</strong></td><td class="crd-td">BFA: 13,08, -1,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bole</strong></td><td class="crd-td">GHA: 9,04, -2,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Boromo</strong></td><td class="crd-td">BFA: 11,76, -2,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Navrongo</strong></td><td class="crd-td">GHA: 10,88, -1,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Léo</strong></td><td class="crd-td">BFA: 11,1, -2,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,6k (1500AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed settlements in the Mossi Kingdoms and Voltaic Gur States from 1000BC to 1500AD.</figcaption>
</figure>

## Hausa Bakwai City-States (Kano, Katsina, Gobir)

Table \ref{tab:zone7-sites} presents 18 walled Hausa *birane* across northern Nigeria and southern Niger, headed by Kano (38,4k in 1480AD), Katsina (16,4k in 1450AD), Zaria (14,8k in 1450AD), Birnin Zamfara (12,8k in 1500AD), Turunku (8,9k) and Daura (8,4k) [@Sutton1979TowardsLess; @Kirkgreene1804ComparativeStudy; @Umar2026CodeMixing].

<figure class="crd-table-figure" id="tab:zone7-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kano</strong></td><td class="crd-td">NGA: 11,98, 8,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">38,4k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Katsina</strong></td><td class="crd-td">NGA: 12,98, 7,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16,4k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Zaria</strong></td><td class="crd-td">NGA: 11,11, 7,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,8k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Birnin Zamfara</strong></td><td class="crd-td">NGA: 12,72, 6,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,8k</td><td class="crd-td">12,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Turunku</strong></td><td class="crd-td">NGA: 10,8, 7,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,9k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Daura</strong></td><td class="crd-td">NGA: 13,04, 8,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,4k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Birnin Lalle</strong></td><td class="crd-td">NER: 13,95, 6,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,4k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Rano</strong></td><td class="crd-td">NGA: 11,56, 8,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,2k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Hadejia</strong></td><td class="crd-td">NGA: 12,46, 10,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">6,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Gaya</strong></td><td class="crd-td">NGA: 11,86, 9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,9k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Yauri</strong></td><td class="crd-td">NGA: 10,84, 4,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">5,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Karaye</strong></td><td class="crd-td">NGA: 11,78, 8,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Gwandu</strong></td><td class="crd-td">NGA: 12,5, 4,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Dutse</strong></td><td class="crd-td">NGA: 11,7, 9,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Ingawa</strong></td><td class="crd-td">NGA: 12,64, 8,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Birnin Kudu</strong></td><td class="crd-td">NGA: 11,45, 9,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Gouré</strong></td><td class="crd-td">NER: 13,98, 10,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Zuru</strong></td><td class="crd-td">NGA: 11,43, 5,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1480AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Individually assessed settlements in the Hausa Bakwai City-States from 1000BC to 1500AD.</figcaption>
</figure>

## Nok-Jos Plateau, Nupe and Benue Corridor

Table \ref{tab:zone8-sites} catalogues 27 settlements across the Nigerian Middle Belt, Benue valley and Cameroon highlands, led by Wukari (9,8k in 1500AD), Foumban (4,9k in 1500AD), Nok (4,6k in 100AD) and Doma (3,2k) [@Agai2014ArchaeologicalSearch; @Dueppen2016TheArchaeology].

<figure class="crd-table-figure" id="tab:zone8-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Wukari</strong></td><td class="crd-td">NGA: 7,87, 9,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,8k</td><td class="crd-td">9,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Foumban</strong></td><td class="crd-td">CMR: 5,72, 10,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">4,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Nok</strong></td><td class="crd-td">NGA: 9,5, 8,02</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (400BC)</td></tr>
<tr><td class="crd-td"><strong>Doma</strong></td><td class="crd-td">NGA: 8,4, 8,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Keana</strong></td><td class="crd-td">NGA: 8,15, 8,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Shendam</strong></td><td class="crd-td">NGA: 8,88, 9,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Takum</strong></td><td class="crd-td">NGA: 7,24, 9,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Taruga</strong></td><td class="crd-td">NGA: 8,82, 7,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (250BC)</td></tr>
<tr><td class="crd-td"><strong>Pankshin</strong></td><td class="crd-td">NGA: 9,34, 9,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Ibi</strong></td><td class="crd-td">NGA: 8,18, 9,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Katsina Ala</strong></td><td class="crd-td">NGA: 7,17, 9,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kafanchan</strong></td><td class="crd-td">NGA: 9,58, 8,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Babungo</strong></td><td class="crd-td">CMR: 6,06, 10,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1080AD)</td></tr>
<tr><td class="crd-td"><strong>Dibamba</strong></td><td class="crd-td">CMR: 4, 9,82</td><td class="crd-td">-</td><td class="crd-td">387</td><td class="crd-td">514</td><td class="crd-td">620</td><td class="crd-td">-</td><td class="crd-td">680 (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Tazunu Beforo</strong></td><td class="crd-td">CAF: 5,97, 15,29</td><td class="crd-td">-</td><td class="crd-td">542</td><td class="crd-td">388</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">628 (300BC)</td></tr>
<tr><td class="crd-td"><strong>Lom Pangar</strong></td><td class="crd-td">CMR: 5,38, 13,5</td><td class="crd-td">-</td><td class="crd-td">334</td><td class="crd-td">489</td><td class="crd-td">580</td><td class="crd-td">540</td><td class="crd-td">610 (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Mouanko-Lobethal</strong></td><td class="crd-td">CMR: 3,64, 9,78</td><td class="crd-td">-</td><td class="crd-td">305</td><td class="crd-td">445</td><td class="crd-td">501</td><td class="crd-td">-</td><td class="crd-td">515 (900AD)</td></tr>
<tr><td class="crd-td"><strong>Oliga</strong></td><td class="crd-td">CMR: 3,9, 11,5</td><td class="crd-td">-</td><td class="crd-td">463</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">510 (100BC)</td></tr>
<tr><td class="crd-td"><strong>Nachtigal</strong></td><td class="crd-td">CMR: 4,39, 11,74</td><td class="crd-td">-</td><td class="crd-td">467</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">495 (100AD)</td></tr>
<tr><td class="crd-td"><strong>Obobogo Neolithic Settlement</strong></td><td class="crd-td">CMR: 3,82, 11,5</td><td class="crd-td">345</td><td class="crd-td">382</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">465 (200BC)</td></tr>
<tr><td class="crd-td"><strong>Ndeba-Somie</strong></td><td class="crd-td">CMR: 6,28, 11,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">440 (200AD)</td></tr>
<tr><td class="crd-td"><strong>Oboui Settlement</strong></td><td class="crd-td">CAF: 6,05, 15,33</td><td class="crd-td">-</td><td class="crd-td">380</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">440 (100AD)</td></tr>
<tr><td class="crd-td"><strong>Nkometou</strong></td><td class="crd-td">CMR: 4,08, 11,55</td><td class="crd-td">-</td><td class="crd-td">403</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">430 (200BC)</td></tr>
<tr><td class="crd-td"><strong>Shum Laka Rock Shelter</strong></td><td class="crd-td">CMR: 5,86, 10,08</td><td class="crd-td">225</td><td class="crd-td">250</td><td class="crd-td">240</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">260 (500BC)</td></tr>
<tr><td class="crd-td"><strong>Nangara-Komba Site</strong></td><td class="crd-td">CAF: 4,97, 15,7</td><td class="crd-td">235</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">235 (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Dutsen Kongba Shelter</strong></td><td class="crd-td">NGA: 9,77, 8,78</td><td class="crd-td">61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">61 (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Rop Rock Shelter</strong></td><td class="crd-td">NGA: 9,45, 8,93</td><td class="crd-td">42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">42 (1000BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Individually assessed settlements in the Nok-Jos Plateau, Nupe and Benue Corridor from 1000BC to 1500AD.</figcaption>
</figure>

## Ile-Ife, Benin, Igbo-Ukwu and Lower Niger

Table \ref{tab:zone9-sites} documents 26 settlements across Yorubaland, Edo, Igboland and the Niger Delta, led by Ile-Ife (88,6k in 1350AD), Nembe (87,5k in 1000AD), Benin City (47,5k in 1500AD), Ijebu Ode (24,8k), Old Oyo (24,8k), Owo (18,6k), Ilesha (12,4k) and Igbo Ukwu (7,6k) [@Connah1967NewLight; @Adekola2009EarlyUrban; @Connah2001AfricanCivilizations].

<figure class="crd-table-figure" id="tab:zone9-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ile-Ife</strong></td><td class="crd-td">NGA: 7,48, 4,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">30,5k</td><td class="crd-td">62,4k</td><td class="crd-td">88,6k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Nembe</strong></td><td class="crd-td">NGA: 4,54, 6,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">87,5k</td><td class="crd-td">-</td><td class="crd-td">87,5k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Benin City</strong></td><td class="crd-td">NGA: 6,3, 5,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">47,5k</td><td class="crd-td">47,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ijebu Ode</strong></td><td class="crd-td">NGA: 6,82, 3,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24,8k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Old Oyo</strong></td><td class="crd-td">NGA: 8,99, 4,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24,8k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Owo</strong></td><td class="crd-td">NGA: 7,2, 5,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,6k</td><td class="crd-td">18,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ilesha</strong></td><td class="crd-td">NGA: 7,63, 4,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,4k</td><td class="crd-td">12,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Igbo Ukwu</strong></td><td class="crd-td">NGA: 6,02, 7,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6k</td><td class="crd-td">-</td><td class="crd-td">7,6k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Tado</strong></td><td class="crd-td">TGO: 7,15, 1,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,2k</td><td class="crd-td">7,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ado Ekiti</strong></td><td class="crd-td">NGA: 7,62, 5,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,2k</td><td class="crd-td">7,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Akure</strong></td><td class="crd-td">NGA: 7,25, 5,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Kétou</strong></td><td class="crd-td">BEN: 7,35, 2,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">6,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Idah</strong></td><td class="crd-td">NGA: 7,15, 6,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Nsukka</strong></td><td class="crd-td">NGA: 6,85, 7,42</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,6k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">4,8k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Notsé</strong></td><td class="crd-td">TGO: 6,95, 1,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">4,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Umaisha</strong></td><td class="crd-td">NGA: 8,02, 7,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Uromi</strong></td><td class="crd-td">NGA: 6,74, 6,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">4,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Agbor</strong></td><td class="crd-td">NGA: 6,26, 6,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Mokwa</strong></td><td class="crd-td">NGA: 9,3, 5,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Afikpo</strong></td><td class="crd-td">NGA: 5,87, 7,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Ikirun</strong></td><td class="crd-td">NGA: 7,91, 4,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Koton Karifi</strong></td><td class="crd-td">NGA: 8,08, 6,81</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Asaba</strong></td><td class="crd-td">NGA: 6,2, 6,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">2,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Jebba</strong></td><td class="crd-td">NGA: 9,12, 4,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Bonny</strong></td><td class="crd-td">NGA: 4,42, 7,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">1k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Carboneras</strong></td><td class="crd-td">GNQ: 3,75, 8,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">320</td><td class="crd-td">596</td><td class="crd-td">-</td><td class="crd-td">740 (1400AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Individually assessed settlements in Ile-Ife, Benin, Igbo-Ukwu and the Lower Niger from 1000BC to 1500AD.</figcaption>
</figure>

## Mali Imperial Core and Inland Niger Delta

Table \ref{tab:zone10-sites} lists 17 settlements across the Upper Niger Manden heartland and southern Inland Niger Delta, headed by Niani (38,6k in 1350AD), Dakajalan (8,6k), Kangaba (6,2k) and Siguiri (3,2k) [@Austen1996HistoryOral; @Jansen1996TheRepresentation; @Waals1989HetArcheologisch].

<figure class="crd-table-figure" id="tab:zone10-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Niani</strong></td><td class="crd-td">GIN: 11,38, -8,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,4k</td><td class="crd-td">-</td><td class="crd-td">38,6k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Dakajalan</strong></td><td class="crd-td">MLI: 12,32, -8,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,6k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Kangaba</strong></td><td class="crd-td">MLI: 11,93, -8,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">6,2k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Siguiri</strong></td><td class="crd-td">GIN: 11,43, -9,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>San</strong></td><td class="crd-td">MLI: 13,29, -4,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kita</strong></td><td class="crd-td">MLI: 13,05, -9,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Kouroussa</strong></td><td class="crd-td">GIN: 10,65, -9,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Koulikoro</strong></td><td class="crd-td">MLI: 12,88, -7,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Bumban</strong></td><td class="crd-td">SLE: 9,12, -11,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Faranah</strong></td><td class="crd-td">GIN: 10,05, -10,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Musaiya</strong></td><td class="crd-td">SLE: 9,75, -11,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Shenge</strong></td><td class="crd-td">SLE: 7,92, -12,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kankan</strong></td><td class="crd-td">GIN: 10,4, -9,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">1k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Dabola</strong></td><td class="crd-td">GIN: 10,74, -11,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">865</td><td class="crd-td">865 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kourounkorokale Shelter</strong></td><td class="crd-td">MLI: 12,38, -8,37</td><td class="crd-td">49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">49 (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Kamabai Rock Shelter</strong></td><td class="crd-td">SLE: 9,15, -11,96</td><td class="crd-td">45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">45 (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Yagala Rock Shelter</strong></td><td class="crd-td">SLE: 9,58, -11,53</td><td class="crd-td">36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">36 (1000BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 10.</span> Individually assessed settlements in the Mali Imperial Core and Inland Niger Delta from 1000BC to 1500AD.</figcaption>
</figure>

## Jolof Empire, Takrur and Senegambia

Table \ref{tab:zone11-sites} compiles 15 settlements across Takrur, the Jolof confederation and coastal Senegambia, led by Podor (7,8k in 1050AD), Linguère (5,1k in 1480AD), Diakhao (3,4k) and Lambaye (2,9k) [@Chevrier2020NewData].

<figure class="crd-table-figure" id="tab:zone11-sites">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Linguère</strong></td><td class="crd-td">SEN: 15,4, -15,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">5,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Diakhao</strong></td><td class="crd-td">SEN: 14,46, -16,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Lambaye</strong></td><td class="crd-td">SEN: 14,78, -16,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Kuntaur</strong></td><td class="crd-td">GMB: 13,67, -14,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1150AD)</td></tr>
<tr><td class="crd-td"><strong>Kahone</strong></td><td class="crd-td">SEN: 14,16, -16,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Joal - Fadiouth</strong></td><td class="crd-td">SEN: 14,18, -16,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1460AD)</td></tr>
<tr><td class="crd-td"><strong>Nioro du Rip</strong></td><td class="crd-td">SEN: 13,75, -15,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Fatick</strong></td><td class="crd-td">SEN: 14,34, -16,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bignona</strong></td><td class="crd-td">SEN: 12,81, -16,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Geba</strong></td><td class="crd-td">GNB: 12,2, -14,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kaffrine</strong></td><td class="crd-td">SEN: 14,1, -15,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Buba</strong></td><td class="crd-td">GNB: 11,6, -14,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">945</td><td class="crd-td">945 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Oussouye</strong></td><td class="crd-td">SEN: 12,48, -16,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">895</td><td class="crd-td">895 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kaur</strong></td><td class="crd-td">GMB: 13,7, -15,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">825</td><td class="crd-td">825 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Koundara</strong></td><td class="crd-td">GIN: 12,49, -13,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">785</td><td class="crd-td">785 (1500AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 11.</span> Individually assessed settlements in the Jolof Empire, Takrur and Senegambia from 1000BC to 1500AD.</figcaption>
</figure>

# Limitations

Three caveats govern use of this settlement ledger. First, tropical forest vegetation and acidic soils in the Guinea and Lower Niger zones reduce surface mound visibility compared with semi-arid Sahelian tells, so site density in Tables 5, 8 and 9 reflects major excavated capitals rather than all rural villages [@Dueppen2016TheArchaeology; @Connah2001AfricanCivilizations]. Second, walled enclosures in Benin City, Old Oyo and Hausaland contained intra-mural gardens and farmlands, introducing roughly 20% to 35% uncertainty around individual area-to-population conversions [@Connah1967NewLight; @Adekola2009EarlyUrban]. Third, because these 228 assessed centres represent the urban and excavated archaeological upper tier, their summed headcounts sit well below the full regional populations reported in the companion review [@Diblasi1981ExcavationsJenne; @Mcintosh1984TheEarly].

# Conclusion

Together, the 228 individually assessed settlements document the rise of indigenous urban networks from early Mauritanian stone-walled compounds and Inland Niger Delta mound clusters through the trading capitals of Wagadou, Mali, Songhai and Kanem-Bornu to the dense Hausa, Akan, Yoruba and Edo cities of 1500AD.

# Appendix

## Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} sums site counts and combined linearly interpolated urban populations across all 11 sub-regions at the five chapter benchmark years from 1000BC to 1500AD.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion (Sites)</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>1. Kanem-Bornu Empire and Lake Chad Basin (17)</strong></td><td class="crd-td">2k</td><td class="crd-td">1,6k</td><td class="crd-td">2,3k</td><td class="crd-td">12k</td><td class="crd-td">40,3k</td></tr>
<tr><td class="crd-td"><strong>2. Wagadou (Ghana) and Western Sahel (35)</strong></td><td class="crd-td">13k</td><td class="crd-td">7,1k</td><td class="crd-td">24,1k</td><td class="crd-td">63,2k</td><td class="crd-td">17,3k</td></tr>
<tr><td class="crd-td"><strong>3. Songhai Gao, Timbuktu and Niger Bend (22)</strong></td><td class="crd-td">1,3k</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">26,9k</td><td class="crd-td">59,2k</td></tr>
<tr><td class="crd-td"><strong>4. Tuareg Air, Adrar des Ifoghas and Sahara (15)</strong></td><td class="crd-td">535</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">2,5k</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>5. Proto-Akan, Bono Manso and Guinea Forest (19)</strong></td><td class="crd-td">238</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">6,8k</td><td class="crd-td">37k</td></tr>
<tr><td class="crd-td"><strong>6. Mossi Kingdoms and Voltaic Gur States (17)</strong></td><td class="crd-td">410</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">12,3k</td><td class="crd-td">36,9k</td></tr>
<tr><td class="crd-td"><strong>7. Hausa Bakwai City-States (Kano, Katsina, Gobir) (18)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">1k</td><td class="crd-td">28,3k</td></tr>
<tr><td class="crd-td"><strong>8. Nok-Jos Plateau, Nupe and Benue Corridor (27)</strong></td><td class="crd-td">908</td><td class="crd-td">7k</td><td class="crd-td">2,1k</td><td class="crd-td">1,7k</td><td class="crd-td">25,4k</td></tr>
<tr><td class="crd-td"><strong>9. Ile-Ife, Benin, Igbo-Ukwu and Lower Niger (26)</strong></td><td class="crd-td">0</td><td class="crd-td">1,8k</td><td class="crd-td">3k</td><td class="crd-td">129,7k</td><td class="crd-td">184,4k</td></tr>
<tr><td class="crd-td"><strong>10. Mali Imperial Core and Inland Niger Delta (17)</strong></td><td class="crd-td">130</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">11,4k</td><td class="crd-td">16k</td></tr>
<tr><td class="crd-td"><strong>11. Jolof Empire, Takrur and Senegambia (15)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">2,6k</td><td class="crd-td">18,9k</td></tr>
<tr><td class="crd-td"><strong>All Sub-Regions (228)</strong></td><td class="crd-td">18,5k</td><td class="crd-td">18,8k</td><td class="crd-td">33,2k</td><td class="crd-td">270,2k</td><td class="crd-td">463,8k</td></tr>
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
