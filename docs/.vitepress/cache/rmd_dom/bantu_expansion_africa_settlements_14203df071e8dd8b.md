---
title: "The Bantu Expansion Across Sub-Saharan Africa"
subtitle: "Settlement Gazetteer: 3.185 Individually Assessed Sites (1000BC-1500AD)"
date: "24 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: bantu_expansion_africa_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 3.185 individually assessed settlements across 23 Sub-Saharan countries spanning twelve ecological sub-regions from 1000BC to 1500AD."
hero_label: "fig:hero-settlements-bantu"

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

This gazetteer compiles spatial coordinates and multi-period population series for 3.185 individually assessed settlements across 23 Sub-Saharan African countries between 1000BC and 1500AD. Screened from 3.910 candidate archaeological sites, rock shelters, walled capitals and coastal ports (725 excluded), the retained entries span twelve ecological and cultural sub-regions from the Cameroon Grassfields homeland and the Congo Basin to the Great Lakes, the Swahili littoral, Katanga, the Zimbabwe plateau and the Cape. Active interpolated entries expand from 235 early sites at 1000BC to 701 at 1AD, 1.121 at 500AD, 1.209 at 1000AD and 1.170 at 1300AD, tracing urban development from Early Iron Age farming villages to Mbanza Congo (38k), Muqdisho (24,8k), Great Zimbabwe (20k), Owo (18,6k) and Kilwa Kisiwani (14,8k).



# Background

Reconstructing Iron Age settlement hierarchies across Equatoria, East Africa and Southern Africa requires combining disparate archaeological and documentary archives. Unlike Mediterranean or Near Eastern landscapes dominated by durable mudbrick tells, Sub-Saharan Africa south of the Benue-Cross and Ubangi rivers spans tropical forest clearings where timber-and-daub hamlets decompose quickly, dry-stone plateau citadels, coral-rag coastal towns and lacustrine burial complexes [@Connah2001AfricanCivilizations; @CoqueryVidrovitch2005BantuCities; @Bostoen2018BantuFirst]. Assembling those traditions into one unified gazetteer highlights how ecological corridors shaped settlement scale from the Cameroon Grassfields to the Limpopo valley [@Russell2014ModellingThe; @BIRD2022P3K14C].

# Methodology

## Candidate Screening and Sub-Regional Partition

Candidate loci were screened from regional radiocarbon surveys, excavated town plans and early historical accounts [@Cornelissen2016RMCA; @Alders2026TownlandsThe; @ShadreckChiri1800WhatWas]. Of 3.910 candidate entries inside the 12.153.713 km² territorial domain bounded over geoBoundaries national outlines [@Runfola2020GeoBoundaries], 725 duplicate alias records were merged or excluded, retaining 3.185 individually assessed settlements across 11.803 chronological observations. Each entry is assigned to one of twelve ecological sub-regions (137 within interior 5-arcminute pixels and 5 on the immediate border or island margin, namely Carboneras on Bioko, Owo, Koton Karifi and Umaisha on the Cross-Niger margin, and Dirre Sheikh Hussein on the eastern Horn fringe).

## Site-Specific Population Estimation

Every entry carries a city-proper spatial scope (142 city-proper, 0 metro) calibrated from mapped enclosure hectares, midden sequences, compound counts and early eyewitness records [@Thornton1982TheKingdom; @Huffman2011DebatingGreat; @Chirikure2019NewPerspectives]. Tables 1 to 12 present linearly interpolated populations at five historical benchmarks (1AD, 500AD, 1000AD, 1300AD, 1500AD) alongside each site's exact peak population and date, marking eras prior to occupation or following abandonment with a hyphen (-).

# Testing and Validation

Across all 3.185 individually assessed settlements, rank-size regression on peak populations yields $q = 0,89$ ($R^2 = 0,94$) over the upper half (n=71) and $q = 1,31$ ($R^2 = 0,84$) across the full sample, matching the 141 deduplicated entries plotted in Figure \ref{fig:settlements-rank}. Chronological screening ensures zero duplicate site synonyms and strict alignment between radiocarbon phase horizons and historical town trajectories [@Stephens2023ReconstructingThe; @Seidensticker2025SurveyFrom].

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-bantu-expansion-africa-settlements/fig_03_rank_size.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Zipf rank-size curve across 141 deduplicated settlements (q = 0,88, R² = 0,94) and mean sub-regional density in 1500AD.</figcaption>
</figure>

# Results

## Cameroon Grassfields Bantu Homeland

Table \ref{tab:sub-cameroon} records 409 individually assessed sites across Cameroon, south-eastern Nigeria, Bioko and western Central African Republic, spanning Early Iron Age villages (Obobogo, Oliga, Shum Laka, Tazunu Beforo) and late mediaeval delta and forest-edge towns led by Nembe (87,5k), Owo (18,6k), Igbo Ukwu (7,6k), Idah (5,4k), Foumban (4,9k) and Nsukka (4,8k) [@CoqueryVidrovitch2005BantuCities; @Bostoen2018BantuFirst].

<figure class="crd-table-figure" id="tab:sub-cameroon">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Igbidu</strong></td><td class="crd-td">NGA: 6,07, 8,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">21,6k</td><td class="crd-td">21,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Owo</strong></td><td class="crd-td">NGA: 7,2, 5,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">18,6k</td><td class="crd-td">18,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Atani</strong></td><td class="crd-td">NGA: 6,01, 6,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,7k</td><td class="crd-td">13,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Okpoko</strong></td><td class="crd-td">NGA: 5,73, 6,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11k</td><td class="crd-td">11k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Okpogho</strong></td><td class="crd-td">NGA: 6,45, 7,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,5k</td><td class="crd-td">9,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Igbo Ukwu</strong></td><td class="crd-td">NGA: 6,02, 7,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">1,4k</td><td class="crd-td">4,4k</td><td class="crd-td">7,6k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Amaigbo</strong></td><td class="crd-td">NGA: 5,73, 7,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">5,5k</td><td class="crd-td">7,5k</td><td class="crd-td">7,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ewohimi</strong></td><td class="crd-td">NGA: 6,46, 6,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,3k</td><td class="crd-td">6,9k</td><td class="crd-td">-</td><td class="crd-td">7,1k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Owa-Oyibu</strong></td><td class="crd-td">NGA: 6,24, 6,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">6,4k</td><td class="crd-td">-</td><td class="crd-td">6,7k (1360AD)</td></tr>
<tr><td class="crd-td"><strong>Enugu Ukwu</strong></td><td class="crd-td">NGA: 6,17, 7,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">6,5k</td><td class="crd-td">3,9k</td><td class="crd-td">6,7k (1340AD)</td></tr>
<tr><td class="crd-td"><strong>Igueben</strong></td><td class="crd-td">NGA: 6,49, 6,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">6,4k</td><td class="crd-td">2,1k</td><td class="crd-td">6,6k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Nri</strong></td><td class="crd-td">NGA: 6,15, 7,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">4,7k</td><td class="crd-td">3,3k</td><td class="crd-td">6,5k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Ehor</strong></td><td class="crd-td">NGA: 6,62, 5,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">6,3k</td><td class="crd-td">1,5k</td><td class="crd-td">6,5k (1330AD)</td></tr>
<tr><td class="crd-td"><strong>Uzuakoli</strong></td><td class="crd-td">NGA: 5,62, 7,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">6,4k (1420AD)</td></tr>
<tr><td class="crd-td"><strong>Abudu</strong></td><td class="crd-td">NGA: 6,29, 6,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">6,2k</td><td class="crd-td">3,7k</td><td class="crd-td">6,4k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Laikom</strong></td><td class="crd-td">CMR: 6,27, 10,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">5,9k</td><td class="crd-td">-</td><td class="crd-td">6k (1320AD)</td></tr>
<tr><td class="crd-td"><strong>Ugo Orhionmwon</strong></td><td class="crd-td">NGA: 6,09, 5,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">6k (1340AD)</td></tr>
<tr><td class="crd-td"><strong>Umuleri</strong></td><td class="crd-td">NGA: 6,3, 6,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">5,9k (1320AD)</td></tr>
<tr><td class="crd-td"><strong>Agenebode</strong></td><td class="crd-td">NGA: 7,1, 6,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">5,4k</td><td class="crd-td">2k</td><td class="crd-td">5,9k (1390AD)</td></tr>
<tr><td class="crd-td"><strong>Idoani</strong></td><td class="crd-td">NGA: 7,3, 5,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">5,5k</td><td class="crd-td">1,2k</td><td class="crd-td">5,8k (1380AD)</td></tr>
<tr><td class="crd-td"><strong>Ezira</strong></td><td class="crd-td">NGA: 5,98, 7,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">5,8k (1320AD)</td></tr>
<tr><td class="crd-td"><strong>Obosi</strong></td><td class="crd-td">NGA: 6,1, 6,81</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">5,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ebem Ohafia</strong></td><td class="crd-td">NGA: 5,62, 7,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">5,8k (1410AD)</td></tr>
<tr><td class="crd-td"><strong>Abavo</strong></td><td class="crd-td">NGA: 6,13, 6,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">5,7k (1370AD)</td></tr>
<tr><td class="crd-td"><strong>Uzea</strong></td><td class="crd-td">NGA: 6,76, 6,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">5,6k</td><td class="crd-td">-</td><td class="crd-td">5,7k (1340AD)</td></tr>
<tr><td class="crd-td"><strong>Ewu Esan</strong></td><td class="crd-td">NGA: 6,79, 6,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">5,5k</td><td class="crd-td">-</td><td class="crd-td">5,7k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Ohordua</strong></td><td class="crd-td">NGA: 6,54, 6,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">5,6k (1360AD)</td></tr>
<tr><td class="crd-td"><strong>Ugboha</strong></td><td class="crd-td">NGA: 6,72, 6,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">5,5k (1360AD)</td></tr>
<tr><td class="crd-td"><strong>Idah</strong></td><td class="crd-td">NGA: 7,15, 6,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Aku</strong></td><td class="crd-td">NGA: 6,7, 7,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,3k</td><td class="crd-td">5,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Uzairue</strong></td><td class="crd-td">NGA: 7,1, 6,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">5,3k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Ogwa Esan</strong></td><td class="crd-td">NGA: 6,52, 6,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">5,1k</td><td class="crd-td">-</td><td class="crd-td">5,3k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Abagana</strong></td><td class="crd-td">NGA: 6,19, 6,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1360AD)</td></tr>
<tr><td class="crd-td"><strong>Fugar</strong></td><td class="crd-td">NGA: 7,09, 6,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">4,6k</td><td class="crd-td">975</td><td class="crd-td">5k (1410AD)</td></tr>
<tr><td class="crd-td"><strong>Ozoro</strong></td><td class="crd-td">NGA: 5,54, 6,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Isanlu</strong></td><td class="crd-td">NGA: 8,27, 5,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">4,9k (1390AD)</td></tr>
<tr><td class="crd-td"><strong>Kuroko</strong></td><td class="crd-td">NGA: 7,65, 6,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">4,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Foumban</strong></td><td class="crd-td">CMR: 5,72, 10,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">4,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ewatto</strong></td><td class="crd-td">NGA: 6,48, 6,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">4,8k (1380AD)</td></tr>
<tr><td class="crd-td"><strong>Evbuobanosa</strong></td><td class="crd-td">NGA: 6,27, 5,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4,7k</td><td class="crd-td">-</td><td class="crd-td">4,8k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 369 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in the Cameroon Grassfields Bantu Homeland and Niger-Cross fringe (1AD to 1500AD) (top 40 of 409 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Western Equatorial Rainforest

Table \ref{tab:sub-west-eq} lists 198 sites across Gabon, coastal Republic of the Congo and Equatorial Guinea, from early iron-smelting hubs at Otoumbi, Okala, Moanda and Kitina to the Loango capital of Buali (6,2k) [@Cornelissen2016RMCA].

<figure class="crd-table-figure" id="tab:sub-west-eq">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Buali</strong></td><td class="crd-td">COG: -4,63, 11,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6k</td><td class="crd-td">6,2k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Sinnda Site</strong></td><td class="crd-td">COG: -3,84, 12,8</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">2,2k</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kitina</strong></td><td class="crd-td">COG: -4,27, 12</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1455AD)</td></tr>
<tr><td class="crd-td"><strong>Okanda 5</strong></td><td class="crd-td">GAB: -0,13, 11,59</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,5k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Otoumbi</strong></td><td class="crd-td">GAB: -0,06, 11,12</td><td class="crd-td">442</td><td class="crd-td">275</td><td class="crd-td">2k</td><td class="crd-td">2,3k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Pointe-Noire Coastal Site</strong></td><td class="crd-td">COG: -4,75, 11,85</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Iroungou</strong></td><td class="crd-td">GAB: -2,04, 11,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">410</td><td class="crd-td">-</td><td class="crd-td">2,1k (1496AD)</td></tr>
<tr><td class="crd-td"><strong>Okala</strong></td><td class="crd-td">GAB: 0,49, 9,41</td><td class="crd-td">477</td><td class="crd-td">752</td><td class="crd-td">982</td><td class="crd-td">1,3k</td><td class="crd-td">620</td><td class="crd-td">2,1k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Lope 2 Settlement</strong></td><td class="crd-td">GAB: -0,22, 11,59</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k</td><td class="crd-td">2k</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kafele 2</strong></td><td class="crd-td">GAB: 0,16, 10,12</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">2k</td><td class="crd-td">2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ganda-Kimpese</strong></td><td class="crd-td">COG: -4,4, 12,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2k (1487AD)</td></tr>
<tr><td class="crd-td"><strong>Moanda 1</strong></td><td class="crd-td">GAB: -1,56, 13,18</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Kango 5</strong></td><td class="crd-td">GAB: 0,2, 10,08</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1142AD)</td></tr>
<tr><td class="crd-td"><strong>Lélédi 2</strong></td><td class="crd-td">GAB: -0,08, 11,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kango Estuary</strong></td><td class="crd-td">GAB: 0,19, 10,1</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (680AD)</td></tr>
<tr><td class="crd-td"><strong>Charbonnage butte 56</strong></td><td class="crd-td">GAB: 0,45, 9,46</td><td class="crd-td">943</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1379AD)</td></tr>
<tr><td class="crd-td"><strong>Pikunda</strong></td><td class="crd-td">COG: 0,54, 16,64</td><td class="crd-td">516</td><td class="crd-td">617</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Moanda</strong></td><td class="crd-td">GAB: -1,55, 13,22</td><td class="crd-td">743</td><td class="crd-td">669</td><td class="crd-td">539</td><td class="crd-td">1k</td><td class="crd-td">1,6k</td><td class="crd-td">1,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lindili 1</strong></td><td class="crd-td">GAB: -0,16, 11,5</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (586AD)</td></tr>
<tr><td class="crd-td"><strong>Plateau de Mpassa</strong></td><td class="crd-td">GAB: -1,7, 13,63</td><td class="crd-td">906</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">1,5k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Bomassa 1</strong></td><td class="crd-td">COG: 2,15, 16,17</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td><td class="crd-td">1,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Nzogobeyok</strong></td><td class="crd-td">GAB: 0,53, 9,35</td><td class="crd-td">799</td><td class="crd-td">953</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Malekou</strong></td><td class="crd-td">GAB: 0,34, 9,5</td><td class="crd-td">893</td><td class="crd-td">1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Mokobo</strong></td><td class="crd-td">COG: 2,1, 16,27</td><td class="crd-td">-</td><td class="crd-td">944</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Dendé</strong></td><td class="crd-td">GAB: -3,77, 11,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Munda</strong></td><td class="crd-td">COG: 1,16, 17,36</td><td class="crd-td">380</td><td class="crd-td">871</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Rivière Denis 1</strong></td><td class="crd-td">GAB: 0,32, 9,35</td><td class="crd-td">796</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lombo</strong></td><td class="crd-td">COG: -4,55, 12,18</td><td class="crd-td">-</td><td class="crd-td">815</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kefele</strong></td><td class="crd-td">GAB: 0,13, 10,14</td><td class="crd-td">-</td><td class="crd-td">857</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ikengue 1 Site</strong></td><td class="crd-td">GAB: -1,5, 9,5</td><td class="crd-td">-</td><td class="crd-td">870</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Condé</strong></td><td class="crd-td">COG: -4,58, 11,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1292AD)</td></tr>
<tr><td class="crd-td"><strong>Ékouata</strong></td><td class="crd-td">GAB: -0,2, 9,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Okondja</strong></td><td class="crd-td">GAB: -1,3, 11,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ngombé</strong></td><td class="crd-td">COG: 1,48, 16,14</td><td class="crd-td">-</td><td class="crd-td">861</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1268AD)</td></tr>
<tr><td class="crd-td"><strong>Landjoué</strong></td><td class="crd-td">COG: 0,76, 15,36</td><td class="crd-td">714</td><td class="crd-td">812</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kamalete</strong></td><td class="crd-td">GAB: -0,7, 11,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">924</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Diliénga</strong></td><td class="crd-td">GAB: -2,76, 10,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lebombi</strong></td><td class="crd-td">GAB: -1,5, 13,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">938</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Okanda</strong></td><td class="crd-td">GAB: -0,14, 11,62</td><td class="crd-td">633</td><td class="crd-td">758</td><td class="crd-td">457</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1283AD)</td></tr>
<tr><td class="crd-td"><strong>Hinda</strong></td><td class="crd-td">COG: -4,61, 12,04</td><td class="crd-td">-</td><td class="crd-td">693</td><td class="crd-td">899</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 158 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in the Western Equatorial Rainforest (Ogooue-Sangha) from 1AD to 1500AD (top 40 of 198 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Inner Congo Basin, Mongo and Ubangi-Uele

Table \ref{tab:sub-central-congo} documents 88 settlements across the inner Congo and Ubangi waterways, capturing Imbonga, Batalimo, Batalimo-Maluba, Bolondo and Iyonda [@Seidensticker2025SurveyFrom; @Coutros2025SurveyAnd].

<figure class="crd-table-figure" id="tab:sub-central-congo">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bolondo</strong></td><td class="crd-td">COD: -0,31, 21,25</td><td class="crd-td">-</td><td class="crd-td">381</td><td class="crd-td">493</td><td class="crd-td">318</td><td class="crd-td">720</td><td class="crd-td">2,5k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Batalimo</strong></td><td class="crd-td">CAF: 3,68, 18,52</td><td class="crd-td">523</td><td class="crd-td">505</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Maluba</strong></td><td class="crd-td">COD: 2,8, 18,5</td><td class="crd-td">1,1k</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Wafanya</strong></td><td class="crd-td">COD: -1,29, 20,37</td><td class="crd-td">980</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mondongué</strong></td><td class="crd-td">CAF: 3,65, 18,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Bokele</strong></td><td class="crd-td">COD: -0,08, 18,58</td><td class="crd-td">855</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lebe</strong></td><td class="crd-td">CAF: 3,76, 17,51</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Poutem</strong></td><td class="crd-td">CAF: 4,03, 17,32</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Longa</strong></td><td class="crd-td">COD: -0,2, 18,88</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ngotto</strong></td><td class="crd-td">CAF: 3,84, 17,47</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Gbadolite</strong></td><td class="crd-td">COD: 4,28, 21,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lingbangbo</strong></td><td class="crd-td">CAF: 3,63, 18,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ingende Old</strong></td><td class="crd-td">COD: -0,26, 18,95</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1360AD)</td></tr>
<tr><td class="crd-td"><strong>Bamanya</strong></td><td class="crd-td">COD: -0,02, 18,33</td><td class="crd-td">776</td><td class="crd-td">975</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td><td class="crd-td">1,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Iyonda Site</strong></td><td class="crd-td">COD: -0,04, 18,18</td><td class="crd-td">622</td><td class="crd-td">330</td><td class="crd-td">1k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Nkile</strong></td><td class="crd-td">COD: -0,08, 18,67</td><td class="crd-td">-</td><td class="crd-td">968</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td><td class="crd-td">1,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Imbonga Settlement</strong></td><td class="crd-td">COD: -0,8, 19,77</td><td class="crd-td">538</td><td class="crd-td">732</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Zinga</strong></td><td class="crd-td">CAF: 3,72, 18,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bokela</strong></td><td class="crd-td">COD: -0,24, 20,68</td><td class="crd-td">877</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,4k (680AD)</td></tr>
<tr><td class="crd-td"><strong>Salaminta</strong></td><td class="crd-td">COD: -3,39, 18,07</td><td class="crd-td">-</td><td class="crd-td">774</td><td class="crd-td">1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kabombo La Voix</strong></td><td class="crd-td">COD: -4,33, 20,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">921</td><td class="crd-td">1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Batalimo-Maluba</strong></td><td class="crd-td">COD: 3,68, 18,62</td><td class="crd-td">939</td><td class="crd-td">1,1k</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (420AD)</td></tr>
<tr><td class="crd-td"><strong>Budja</strong></td><td class="crd-td">COD: 2,07, 21,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Snp</strong></td><td class="crd-td">COD: -1,7, 20,55</td><td class="crd-td">466</td><td class="crd-td">626</td><td class="crd-td">790</td><td class="crd-td">929</td><td class="crd-td">994</td><td class="crd-td">994 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Imbonga-North</strong></td><td class="crd-td">COD: -0,08, 18,42</td><td class="crd-td">838</td><td class="crd-td">945</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">975 (380AD)</td></tr>
<tr><td class="crd-td"><strong>Lingbangbo</strong></td><td class="crd-td">CAF: 3,82, 18,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">941</td><td class="crd-td">941 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bobélé 2</strong></td><td class="crd-td">CAF: 4,03, 18,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">806</td><td class="crd-td">884</td><td class="crd-td">937</td><td class="crd-td">937 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mombongo</strong></td><td class="crd-td">COD: 1,77, 24,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">879</td><td class="crd-td">879 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Baringa</strong></td><td class="crd-td">COD: 0,73, 20,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">738</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">846 (1294AD)</td></tr>
<tr><td class="crd-td"><strong>Mbati-Ngombe</strong></td><td class="crd-td">COD: 2,83, 18,45</td><td class="crd-td">-</td><td class="crd-td">523</td><td class="crd-td">650</td><td class="crd-td">749</td><td class="crd-td">800</td><td class="crd-td">800 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Iyonda-South</strong></td><td class="crd-td">COD: -0,02, 18,29</td><td class="crd-td">678</td><td class="crd-td">783</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">792 (440AD)</td></tr>
<tr><td class="crd-td"><strong>Taragini</strong></td><td class="crd-td">COD: 3,99, 22,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">784</td><td class="crd-td">784 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mokelo</strong></td><td class="crd-td">CAF: 4,13, 18,61</td><td class="crd-td">-</td><td class="crd-td">543</td><td class="crd-td">659</td><td class="crd-td">727</td><td class="crd-td">772</td><td class="crd-td">772 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bili-Moke</strong></td><td class="crd-td">COD: 4,56, 19,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">739</td><td class="crd-td">739 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Té Ndongué</strong></td><td class="crd-td">CAF: 5,72, 18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">652</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">695 (1273AD)</td></tr>
<tr><td class="crd-td"><strong>Mongadjo</strong></td><td class="crd-td">COD: 1,33, 24,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">682</td><td class="crd-td">682 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bonduru</strong></td><td class="crd-td">COD: 3,75, 19,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">661</td><td class="crd-td">661 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Gangara</strong></td><td class="crd-td">COD: 2,95, 19,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">658</td><td class="crd-td">658 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lukolela</strong></td><td class="crd-td">COD: -1,06, 17,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">657</td><td class="crd-td">657 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Dongo</strong></td><td class="crd-td">COD: 2,72, 18,41</td><td class="crd-td">-</td><td class="crd-td">422</td><td class="crd-td">538</td><td class="crd-td">619</td><td class="crd-td">656</td><td class="crd-td">656 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 48 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed settlements in the Inner Congo Basin, Mongo and Ubangi-Uele zone from 1AD to 1500AD (top 40 of 88 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Lower Congo, Kingdom of Kongo and Angola

Table \ref{tab:sub-kongo} compiles 255 settlements across Angola, western Democratic Republic of the Congo and coastal Republic of the Congo, anchored by Mbanza Congo (38k by 1491AD), Soyo (4,8k), Mbanza Nsundi (4,2k) and Mbanza Mbata (3,9k) [@Thornton1982TheKingdom; @Doman2025HumanRemains].

<figure class="crd-table-figure" id="tab:sub-kongo">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mbanza Congo</strong></td><td class="crd-td">AGO: -6,25, 14,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">22,5k</td><td class="crd-td">38k (1491AD)</td></tr>
<tr><td class="crd-td"><strong>Mushenge</strong></td><td class="crd-td">COD: -4,43, 21,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">8,9k</td><td class="crd-td">-</td><td class="crd-td">10,4k (1440AD)</td></tr>
<tr><td class="crd-td"><strong>Mbanza Mpangu</strong></td><td class="crd-td">COD: -5,42, 15,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">7k</td><td class="crd-td">-</td><td class="crd-td">7,9k (1440AD)</td></tr>
<tr><td class="crd-td"><strong>Ntamo Pool</strong></td><td class="crd-td">COG: -4,21, 15,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">7,4k</td><td class="crd-td">-</td><td class="crd-td">7,6k (1340AD)</td></tr>
<tr><td class="crd-td"><strong>Kindoki</strong></td><td class="crd-td">COD: -5,22, 15,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">5,4k</td><td class="crd-td">5,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mbanza Pemba</strong></td><td class="crd-td">AGO: -6,97, 14,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">4,8k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Mbebe Teke</strong></td><td class="crd-td">COG: -3,28, 15,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">4,8k (1380AD)</td></tr>
<tr><td class="crd-td"><strong>Soyo</strong></td><td class="crd-td">AGO: -6,19, 12,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">4,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ngongo Mbata</strong></td><td class="crd-td">COD: -5,78, 15,12</td><td class="crd-td">1k</td><td class="crd-td">1,4k</td><td class="crd-td">2,1k</td><td class="crd-td">2,2k</td><td class="crd-td">4,6k</td><td class="crd-td">4,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mindouli Copper</strong></td><td class="crd-td">COG: -4,27, 14,37</td><td class="crd-td">2,4k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k (980AD)</td></tr>
<tr><td class="crd-td"><strong>Mbanza Nsundi</strong></td><td class="crd-td">COD: -4,95, 14,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lago Dilolo</strong></td><td class="crd-td">AGO: -11,5, 22,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">4,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mbanza Mbata</strong></td><td class="crd-td">AGO: -6,05, 15,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">3,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ambuíla</strong></td><td class="crd-td">AGO: -7,85, 14,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Boko-Songho</strong></td><td class="crd-td">COG: -4,42, 13,6</td><td class="crd-td">1,7k</td><td class="crd-td">2,8k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1040AD)</td></tr>
<tr><td class="crd-td"><strong>Kinshasa-Kingabwa/Ngombela</strong></td><td class="crd-td">COD: -4,33, 15,34</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td><td class="crd-td">3k</td><td class="crd-td">3,2k</td><td class="crd-td">3,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kinsala</strong></td><td class="crd-td">COD: -5,73, 15,14</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">2,3k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Sakuzi</strong></td><td class="crd-td">COD: -5,17, 14,01</td><td class="crd-td">-</td><td class="crd-td">340</td><td class="crd-td">980</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Dimba</strong></td><td class="crd-td">COD: -5,28, 14,87</td><td class="crd-td">1,1k</td><td class="crd-td">1,5k</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mont Barnier</strong></td><td class="crd-td">COG: -4,2, 15,21</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1405AD)</td></tr>
<tr><td class="crd-td"><strong>Makuti 1</strong></td><td class="crd-td">COG: -4,29, 14,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mashita Mbanza</strong></td><td class="crd-td">COD: -5,66, 18,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ngovo</strong></td><td class="crd-td">COD: -5,3, 14,93</td><td class="crd-td">738</td><td class="crd-td">1,5k</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Tchissanga</strong></td><td class="crd-td">COG: -4,54, 11,8</td><td class="crd-td">948</td><td class="crd-td">329</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bacongo</strong></td><td class="crd-td">COG: -4,29, 15,27</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Ntadi-Yomba</strong></td><td class="crd-td">COG: -4,25, 13,77</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kisala Singa</strong></td><td class="crd-td">COD: -4,76, 13,01</td><td class="crd-td">1,2k</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Baía Farta</strong></td><td class="crd-td">AGO: -12,62, 13,22</td><td class="crd-td">844</td><td class="crd-td">1,3k</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mpassa</strong></td><td class="crd-td">COG: -4,3, 14,27</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">2,3k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bitorri</strong></td><td class="crd-td">COG: -3,9, 14,5</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Tovo</strong></td><td class="crd-td">COD: -5,76, 14,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kingabwa</strong></td><td class="crd-td">COD: -4,32, 15,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Madingou-Kayes</strong></td><td class="crd-td">COG: -4,43, 11,7</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mpila</strong></td><td class="crd-td">COG: -4,26, 15,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2k</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Mushie</strong></td><td class="crd-td">COD: -3,01, 16,93</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (840AD)</td></tr>
<tr><td class="crd-td"><strong>Ngidi</strong></td><td class="crd-td">COG: -4,05, 15,1</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Bime (Kibouende)</strong></td><td class="crd-td">COG: -4,16, 15,18</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Moubiri</strong></td><td class="crd-td">COG: -4,02, 14,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mvindou</strong></td><td class="crd-td">COG: -4,52, 11,95</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1132AD)</td></tr>
<tr><td class="crd-td"><strong>Caculo Cabaça</strong></td><td class="crd-td">AGO: -9,69, 14,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 215 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements in the Lower Congo, Kingdom of Kongo and Angola from 1AD to 1500AD (top 40 of 255 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Great Lakes Urewe Core

Table \ref{tab:sub-great-lakes} presents 466 settlements across Uganda, Rwanda, Burundi, eastern Democratic Republic of the Congo and southern South Sudan, from Urewe iron-smelting hubs at Kabusanze, Mucucu and Mirama to the earthwork complexes of Bigo bya Mugenyi (4,8k), Ntusi (3,6k) and Munsa (2,2k) [@Connah2001AfricanCivilizations].

<figure class="crd-table-figure" id="tab:sub-great-lakes">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bigo bya Mugenyi</strong></td><td class="crd-td">UGA: 0,14, 31,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">5,2k</td><td class="crd-td">5,8k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Ntusi</strong></td><td class="crd-td">UGA: 0,05, 31,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">5k</td><td class="crd-td">3,3k</td><td class="crd-td">5k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Kanyinya</strong></td><td class="crd-td">BDI: -4,27, 29,91</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ramba</strong></td><td class="crd-td">RWA: -1,87, 29,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">3,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kibiro</strong></td><td class="crd-td">UGA: 1,68, 31,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">3,4k</td><td class="crd-td">2,5k</td><td class="crd-td">3,7k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Katinda</strong></td><td class="crd-td">UGA: -0,22, 30,11</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">2,3k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Mucucu</strong></td><td class="crd-td">RWA: -1,53, 30,57</td><td class="crd-td">335</td><td class="crd-td">283</td><td class="crd-td">293</td><td class="crd-td">170</td><td class="crd-td">-</td><td class="crd-td">2,6k (1445AD)</td></tr>
<tr><td class="crd-td"><strong>Gasabo</strong></td><td class="crd-td">RWA: -1,79, 30,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mubwindi Swamp (Mb6)</strong></td><td class="crd-td">UGA: -1,08, 29,76</td><td class="crd-td">1,1k</td><td class="crd-td">1,5k</td><td class="crd-td">2,1k</td><td class="crd-td">2,5k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Munsa Swamp</strong></td><td class="crd-td">UGA: 0,82, 31,31</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ndora</strong></td><td class="crd-td">RWA: -2,61, 29,81</td><td class="crd-td">-</td><td class="crd-td">171</td><td class="crd-td">179</td><td class="crd-td">105</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mount Gahinga</strong></td><td class="crd-td">UGA: -1,39, 29,65</td><td class="crd-td">1k</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kandalo</strong></td><td class="crd-td">RWA: -1,53, 30,65</td><td class="crd-td">-</td><td class="crd-td">256</td><td class="crd-td">260</td><td class="crd-td">145</td><td class="crd-td">-</td><td class="crd-td">2,5k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Kasunga</strong></td><td class="crd-td">UGA: 1,15, 31,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,3k</td><td class="crd-td">2,5k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Edward</strong></td><td class="crd-td">UGA: -0,24, 29,84</td><td class="crd-td">1,1k</td><td class="crd-td">1,5k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1268AD)</td></tr>
<tr><td class="crd-td"><strong>Ngushu swamp</strong></td><td class="crd-td">COD: -2,29, 28,71</td><td class="crd-td">1,1k</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Ryamurari</strong></td><td class="crd-td">RWA: -1,35, 30,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Kap</strong></td><td class="crd-td">SSD: 6,64, 30,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Muyaga</strong></td><td class="crd-td">BDI: -4,11, 30,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kabata Swamp</strong></td><td class="crd-td">UGA: 0,48, 30,28</td><td class="crd-td">1k</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Kibengo</strong></td><td class="crd-td">UGA: -0,08, 30,18</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Mount Muhavura</strong></td><td class="crd-td">RWA: -1,38, 29,68</td><td class="crd-td">945</td><td class="crd-td">1,3k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1397AD)</td></tr>
<tr><td class="crd-td"><strong>Mubende</strong></td><td class="crd-td">UGA: 0,55, 31,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">746</td><td class="crd-td">2,3k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Mirama</strong></td><td class="crd-td">BDI: -3,38, 29,98</td><td class="crd-td">639</td><td class="crd-td">237</td><td class="crd-td">242</td><td class="crd-td">140</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Ituri</strong></td><td class="crd-td">COD: 1,55, 28,54</td><td class="crd-td">1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Kawezi</strong></td><td class="crd-td">COD: -3,26, 29,13</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Kitigata</strong></td><td class="crd-td">UGA: -0,06, 29,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Jebel Gujur</strong></td><td class="crd-td">SSD: 4,84, 31,55</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Katoro</strong></td><td class="crd-td">TZA: -3,01, 31,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Kifuruku</strong></td><td class="crd-td">UGA: 0,45, 30,27</td><td class="crd-td">1k</td><td class="crd-td">1,4k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1288AD)</td></tr>
<tr><td class="crd-td"><strong>Ndurumu</strong></td><td class="crd-td">BDI: -2,72, 29,93</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Mugera Swamp</strong></td><td class="crd-td">COD: -2,65, 28,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1383AD)</td></tr>
<tr><td class="crd-td"><strong>Katwa</strong></td><td class="crd-td">COD: 0,09, 29,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Munsa</strong></td><td class="crd-td">UGA: 0,83, 31,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">214</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kabulasoke</strong></td><td class="crd-td">UGA: 0,14, 31,82</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ahakagyezi Swamp</strong></td><td class="crd-td">UGA: -1,12, 29,84</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (859AD)</td></tr>
<tr><td class="crd-td"><strong>Jebel Rejaf</strong></td><td class="crd-td">SSD: 4,68, 31,57</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k</td><td class="crd-td">2k</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Gasiza</strong></td><td class="crd-td">RWA: -2,48, 29,65</td><td class="crd-td">-</td><td class="crd-td">253</td><td class="crd-td">271</td><td class="crd-td">155</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Vieux Beni</strong></td><td class="crd-td">COD: 0,43, 29,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mukukwe Swamp</strong></td><td class="crd-td">COD: -2,5, 28,85</td><td class="crd-td">964</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (900AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 426 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed settlements in the Great Lakes Urewe Core (Kitara, Rwanda) from 1AD to 1500AD (top 40 of 466 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## East African Rift Pastoralists and Savanna

Table \ref{tab:sub-east-rift} catalogues 410 sites across highland Kenya and northern Tanzania, combining early pastoralist and Urewe localities (Luxmanda, Gogo Falls, Njoro, Urewe) with the irrigated terraced town of Engaruka (2,8k) [@Vicente2021MaleBiased].

<figure class="crd-table-figure" id="tab:sub-east-rift">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Engaruka</strong></td><td class="crd-td">TZA: -2,99, 35,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,5k</td><td class="crd-td">6,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Jangwani</strong></td><td class="crd-td">TZA: -2,14, 35,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">3,5k (1340AD)</td></tr>
<tr><td class="crd-td"><strong>Sale Sonjo</strong></td><td class="crd-td">TZA: -2,18, 35,81</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">3,5k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Ohinga</strong></td><td class="crd-td">KEN: -0,88, 34,36</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,3k</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k</td><td class="crd-td">2,9k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Enkapune Ya Muto Shelter</strong></td><td class="crd-td">KEN: -0,83, 36,15</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1445AD)</td></tr>
<tr><td class="crd-td"><strong>Kitete swamp</strong></td><td class="crd-td">TZA: -3,22, 35,92</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">2,1k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Emakat</strong></td><td class="crd-td">TZA: -2,92, 35,83</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Naivasha</strong></td><td class="crd-td">KEN: -0,78, 36,37</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1263AD)</td></tr>
<tr><td class="crd-td"><strong>Rift Valley Lakes palaeoshores</strong></td><td class="crd-td">KEN: -0,48, 36,1</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Central Fields</strong></td><td class="crd-td">TZA: -3, 35,96</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">2,4k</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Haa</strong></td><td class="crd-td">KEN: 0,22, 34,29</td><td class="crd-td">-</td><td class="crd-td">231</td><td class="crd-td">264</td><td class="crd-td">165</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Duluti</strong></td><td class="crd-td">TZA: -3,39, 36,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Victoria (Pilkington Bay)</strong></td><td class="crd-td">UGA: 0,3, 33,33</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Luxmanda Pastoral Settlement</strong></td><td class="crd-td">TZA: -4,25, 35,32</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Kipasi</strong></td><td class="crd-td">KEN: -0,17, 34,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Enkongu</strong></td><td class="crd-td">KEN: -2,7, 37,26</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Babati</strong></td><td class="crd-td">TZA: -4,23, 35,74</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Namelok</strong></td><td class="crd-td">KEN: -2,71, 37,46</td><td class="crd-td">1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Loitigon</strong></td><td class="crd-td">KEN: 0,74, 36,47</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1465AD)</td></tr>
<tr><td class="crd-td"><strong>Nasera Rock Shelter</strong></td><td class="crd-td">TZA: -2,73, 35,37</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">2,3k</td><td class="crd-td">2,2k</td><td class="crd-td">2,3k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Saiwa Swamp</strong></td><td class="crd-td">KEN: 0,1, 35,12</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Gol Kopjes</strong></td><td class="crd-td">TZA: -2,86, 35,1</td><td class="crd-td">1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Bogoria (north basin)</strong></td><td class="crd-td">KEN: 0,33, 36,08</td><td class="crd-td">161</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>WeruWeru 26</strong></td><td class="crd-td">TZA: -3,12, 37,27</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Gamble&amp;apos;s Cave (GsJi 1)</strong></td><td class="crd-td">KEN: -0,52, 36,11</td><td class="crd-td">1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Nyabuiyabui</strong></td><td class="crd-td">KEN: -0,44, 35,8</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Simbi</strong></td><td class="crd-td">KEN: -0,37, 34,63</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>HB Ohingni Cluster</strong></td><td class="crd-td">KEN: -0,7, 34,29</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Seronera Game Lodge</strong></td><td class="crd-td">TZA: -2,42, 34,83</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kisima Ngeda</strong></td><td class="crd-td">TZA: -3,49, 35,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">2k</td><td class="crd-td">2,1k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Sonjo</strong></td><td class="crd-td">TZA: -2,18, 35,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Ilnyangusi Manyatta</strong></td><td class="crd-td">KEN: -2,72, 37,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Kimilili</strong></td><td class="crd-td">KEN: 1,1, 34,57</td><td class="crd-td">1,1k</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (970AD)</td></tr>
<tr><td class="crd-td"><strong>Sidide</strong></td><td class="crd-td">KEN: -0,65, 34,3</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Urewe Yala</strong></td><td class="crd-td">KEN: 0,08, 34,34</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (380AD)</td></tr>
<tr><td class="crd-td"><strong>Loboi Swamp</strong></td><td class="crd-td">KEN: 0,37, 36,05</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Kanjera West</strong></td><td class="crd-td">KEN: -0,33, 34,53</td><td class="crd-td">-</td><td class="crd-td">194</td><td class="crd-td">231</td><td class="crd-td">147</td><td class="crd-td">2k</td><td class="crd-td">2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>KFR-NS Sequence of Sites</strong></td><td class="crd-td">KEN: 0,48, 36,75</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td><td class="crd-td">2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Hausberg Tarn</strong></td><td class="crd-td">KEN: -0,14, 37,3</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1062AD)</td></tr>
<tr><td class="crd-td"><strong>Kiluli Swamp</strong></td><td class="crd-td">KEN: 0,13, 37,75</td><td class="crd-td">936</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 370 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed settlements in the East African Rift Pastoralists and Savanna zone from 1AD to 1500AD (top 40 of 410 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Swahili City-States and Maritime Coast

Table \ref{tab:sub-swahili} records 415 coastal ports and hinterland sites from southern Somalia and eastern Ethiopia down to Mozambique Island, led by Muqdisho (24,8k), Kilwa Kisiwani (14,8k), Marka (6,8k), Mombasa (6,8k), Malindi (6k) and Pate (5,6k) [@Spear2000EarlySwahili; @Alders2026TownlandsThe; @Lubao2023FishingSongs].

<figure class="crd-table-figure" id="tab:sub-swahili">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Muqdisho</strong></td><td class="crd-td">SOM: 2,06, 45,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">21k</td><td class="crd-td">11,5k</td><td class="crd-td">24,8k (1331AD)</td></tr>
<tr><td class="crd-td"><strong>Mombasa</strong></td><td class="crd-td">KEN: -3,99, 39,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,5k</td><td class="crd-td">15k</td><td class="crd-td">17,1k</td><td class="crd-td">17,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kilwa Kisiwani</strong></td><td class="crd-td">TZA: -8,96, 39,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">11,2k</td><td class="crd-td">11,3k</td><td class="crd-td">16,6k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Malindi</strong></td><td class="crd-td">KEN: -3,2, 40,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">8,1k</td><td class="crd-td">10,2k</td><td class="crd-td">10,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Marka</strong></td><td class="crd-td">SOM: 1,71, 44,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,2k</td><td class="crd-td">5,9k</td><td class="crd-td">9,2k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Pate</strong></td><td class="crd-td">KEN: -2,14, 41,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">9k</td><td class="crd-td">7,6k</td><td class="crd-td">9k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Barawa E Al Bambar</strong></td><td class="crd-td">SOM: 1,11, 44,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">7,9k</td><td class="crd-td">4,6k</td><td class="crd-td">8,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Lamu</strong></td><td class="crd-td">KEN: -2,27, 40,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">7,3k</td><td class="crd-td">7,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Angoche</strong></td><td class="crd-td">MOZ: -16,21, 39,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,9k</td><td class="crd-td">6,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Moçambique</strong></td><td class="crd-td">MOZ: -15,03, 40,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">6,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Manda</strong></td><td class="crd-td">KEN: -2,23, 40,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">6k</td><td class="crd-td">1,8k</td><td class="crd-td">6k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Bandarikuu</strong></td><td class="crd-td">TZA: -5,2, 39,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">469</td><td class="crd-td">386</td><td class="crd-td">3,3k</td><td class="crd-td">5,9k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Mtwapa</strong></td><td class="crd-td">KEN: -3,94, 39,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">5k</td><td class="crd-td">5,7k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Gedi</strong></td><td class="crd-td">KEN: -3,31, 40,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">5,3k</td><td class="crd-td">5,4k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Shanga</strong></td><td class="crd-td">KEN: -2,12, 41,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">5,3k</td><td class="crd-td">257</td><td class="crd-td">5,3k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Kipini</strong></td><td class="crd-td">KEN: -2,53, 40,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">731</td><td class="crd-td">5,3k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Unguja Ukuu</strong></td><td class="crd-td">TZA: -6,31, 39,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k</td><td class="crd-td">5,2k (750AD)</td></tr>
<tr><td class="crd-td"><strong>Bur Gavo</strong></td><td class="crd-td">SOM: -1,22, 41,84</td><td class="crd-td">-</td><td class="crd-td">869</td><td class="crd-td">2,6k</td><td class="crd-td">4,2k</td><td class="crd-td">2,6k</td><td class="crd-td">4,2k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Tumbatu</strong></td><td class="crd-td">TZA: -5,83, 39,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">4,2k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Faza</strong></td><td class="crd-td">KEN: -2,06, 41,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">4,1k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Tumbe</strong></td><td class="crd-td">TZA: -4,95, 39,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">3,4k</td><td class="crd-td">2,8k</td><td class="crd-td">3,9k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Mareg</strong></td><td class="crd-td">SOM: 3,77, 47,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Siyu</strong></td><td class="crd-td">KEN: -2,09, 41,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">3,3k</td><td class="crd-td">3,8k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Kaole</strong></td><td class="crd-td">TZA: -6,47, 38,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">3,7k</td><td class="crd-td">2,2k</td><td class="crd-td">3,7k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Mtambwe Mkuu</strong></td><td class="crd-td">TZA: -5,07, 39,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">3,4k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Ungwana</strong></td><td class="crd-td">KEN: -2,52, 40,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Ungwana</strong></td><td class="crd-td">KEN: -2,53, 40,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Somana</strong></td><td class="crd-td">MOZ: -14,23, 40,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">1,8k</td><td class="crd-td">3,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Kisimani Mafia</strong></td><td class="crd-td">TZA: -7,95, 39,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">3,1k</td><td class="crd-td">2,4k</td><td class="crd-td">3,1k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Mambrui</strong></td><td class="crd-td">KEN: -3,12, 40,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">3,1k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Kitoka Ruins</strong></td><td class="crd-td">KEN: -3,73, 39,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">3k (1460AD)</td></tr>
<tr><td class="crd-td"><strong>Kizimkazi</strong></td><td class="crd-td">TZA: -6,43, 39,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,4k</td><td class="crd-td">3k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Tongoni</strong></td><td class="crd-td">TZA: -5,22, 39,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2,4k</td><td class="crd-td">2,9k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Macoba Bay</strong></td><td class="crd-td">TZA: -5,94, 39,21</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">2,8k</td><td class="crd-td">2,7k</td><td class="crd-td">2,8k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Pujini</strong></td><td class="crd-td">TZA: -5,3, 39,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kunduchi</strong></td><td class="crd-td">TZA: -6,67, 39,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,7k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Songo Mnara</strong></td><td class="crd-td">TZA: -9,04, 39,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,6k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Vumba Kuu</strong></td><td class="crd-td">KEN: -4,66, 39,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,6k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Karat</strong></td><td class="crd-td">ETH: 5,34, 37,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Gezira</strong></td><td class="crd-td">SOM: 1,96, 45,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,3k</td><td class="crd-td">1,7k</td><td class="crd-td">2,6k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 375 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Individually assessed settlements along the Swahili City-States littoral from 1AD to 1500AD (top 40 of 415 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Upemba Depression, Katanga and Proto-Luba

Table \ref{tab:sub-upemba} covers 99 Kisalian-Kabambian and Copperbelt sites across southern Democratic Republic of the Congo and north-western Zambia, anchored by Sanga (2,6k), Malemba-Nkulu (2k), Kamilamba (1,5k) and Kansanshi (1,5k) [@Stephens2023ReconstructingThe].

<figure class="crd-table-figure" id="tab:sub-upemba">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mulongo Upemba</strong></td><td class="crd-td">COD: -7,83, 26,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">5,1k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Sanga</strong></td><td class="crd-td">COD: -8,18, 26,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">4,1k</td><td class="crd-td">3,2k</td><td class="crd-td">4,5k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Ilunga Kabale</strong></td><td class="crd-td">COD: -7,54, 25,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">4,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kinkondja North</strong></td><td class="crd-td">COD: -8,15, 26,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">4k (1320AD)</td></tr>
<tr><td class="crd-td"><strong>Katongo Upemba</strong></td><td class="crd-td">COD: -8,09, 26,44</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">3,2k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">3,5k (1240AD)</td></tr>
<tr><td class="crd-td"><strong>Katoto</strong></td><td class="crd-td">COD: -9,12, 25,82</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">862</td><td class="crd-td">3,4k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Bakwa-Kalonji</strong></td><td class="crd-td">COD: -6,5, 23,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">3,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kamilamba</strong></td><td class="crd-td">COD: -8,32, 26,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Kikulu Upemba</strong></td><td class="crd-td">COD: -8,25, 26,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1280AD)</td></tr>
<tr><td class="crd-td"><strong>Malemba-Nkulu</strong></td><td class="crd-td">COD: -8,04, 26,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2k</td><td class="crd-td">1,6k</td><td class="crd-td">2,8k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Kansanshi</strong></td><td class="crd-td">ZMB: -12,1, 26,43</td><td class="crd-td">-</td><td class="crd-td">460</td><td class="crd-td">1,1k</td><td class="crd-td">2,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,8k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Kabamba</strong></td><td class="crd-td">COD: -7,92, 27,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,6k</td><td class="crd-td">1,9k</td><td class="crd-td">2,6k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Kamilamba North</strong></td><td class="crd-td">COD: -8,29, 26,58</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1220AD)</td></tr>
<tr><td class="crd-td"><strong>Kamilamba</strong></td><td class="crd-td">COD: -7,81, 27,03</td><td class="crd-td">1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kipushi Copper</strong></td><td class="crd-td">ZMB: -11,78, 27,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1340AD)</td></tr>
<tr><td class="crd-td"><strong>Kibanza</strong></td><td class="crd-td">COD: -7,91, 26,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1320AD)</td></tr>
<tr><td class="crd-td"><strong>Kikulu</strong></td><td class="crd-td">COD: -7,84, 26,98</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Katongo</strong></td><td class="crd-td">COD: -8,21, 26,41</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kikulu</strong></td><td class="crd-td">COD: -8,65, 26,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,2k</td><td class="crd-td">1,5k</td><td class="crd-td">2,2k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Kinkondja</strong></td><td class="crd-td">COD: -8,2, 26,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,2k</td><td class="crd-td">1,4k</td><td class="crd-td">2,2k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Kamoa Site</strong></td><td class="crd-td">COD: -10,37, 25,1</td><td class="crd-td">905</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kipamba</strong></td><td class="crd-td">COD: -8,56, 26,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1290AD)</td></tr>
<tr><td class="crd-td"><strong>Bena-Kabimba</strong></td><td class="crd-td">COD: -6,28, 23,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kabongo</strong></td><td class="crd-td">COD: -5,94, 24,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mulongo</strong></td><td class="crd-td">COD: -7,83, 26,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kituku</strong></td><td class="crd-td">COD: -7,58, 30,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kibwe</strong></td><td class="crd-td">COD: -9,41, 26,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Goi-Ilunga</strong></td><td class="crd-td">COD: -8,34, 25,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kasanza</strong></td><td class="crd-td">COD: -6,55, 23,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kafubu</strong></td><td class="crd-td">COD: -11,72, 27,5</td><td class="crd-td">592</td><td class="crd-td">750</td><td class="crd-td">997</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mundoi</strong></td><td class="crd-td">COD: -8,08, 24,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kambove-Precolonial</strong></td><td class="crd-td">COD: -10,72, 26,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">633</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">1,2k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Mapulu</strong></td><td class="crd-td">COD: -8,75, 27,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kasaji</strong></td><td class="crd-td">COD: -10,8, 23,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Litupisha</strong></td><td class="crd-td">COD: -10,45, 27,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kilomba</strong></td><td class="crd-td">COD: -9,42, 28,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mwambe</strong></td><td class="crd-td">COD: -9,89, 27,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">993</td><td class="crd-td">993 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lubengele</strong></td><td class="crd-td">ZMB: -12,34, 27,82</td><td class="crd-td">701</td><td class="crd-td">805</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">959 (900AD)</td></tr>
<tr><td class="crd-td"><strong>Mwashya</strong></td><td class="crd-td">COD: -10,71, 27,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">958</td><td class="crd-td">958 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Luano</strong></td><td class="crd-td">ZMB: -12,54, 27,84</td><td class="crd-td">-</td><td class="crd-td">632</td><td class="crd-td">760</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">930 (750AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 59 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Individually assessed settlements in the Upemba Depression, Katanga and Proto-Luba zone from 1AD to 1500AD (top 40 of 99 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Zambezi Corridor, Maravi and Ingombe Ilede

Table \ref{tab:sub-zambezi} lists 100 settlements across Malawi and central-eastern Zambia, spanning early lakeside villages at Nkope Bay and Ntandabale to the Maravi capital of Mankhamba (2,4k) [@Stephens2023ReconstructingThe].

<figure class="crd-table-figure" id="tab:sub-zambezi">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mankhamba</strong></td><td class="crd-td">MWI: -14,3, 34,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">4,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Area FW</strong></td><td class="crd-td">MWI: -14,17, 34,98</td><td class="crd-td">1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Longwe Hill</strong></td><td class="crd-td">MWI: -15,88, 35,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1320AD)</td></tr>
<tr><td class="crd-td"><strong>Nkhudzi</strong></td><td class="crd-td">MWI: -14,16, 35,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">909</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Area E</strong></td><td class="crd-td">MWI: -14,21, 34,51</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ivuna</strong></td><td class="crd-td">TZA: -8,42, 32,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">1,1k</td><td class="crd-td">2k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Mawudzu</strong></td><td class="crd-td">MWI: -14,12, 34,97</td><td class="crd-td">364</td><td class="crd-td">456</td><td class="crd-td">633</td><td class="crd-td">1,3k</td><td class="crd-td">938</td><td class="crd-td">1,9k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Liuli</strong></td><td class="crd-td">TZA: -11,08, 34,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Chicaza Shelter</strong></td><td class="crd-td">MOZ: -12,89, 35,25</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">1,8k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Kamnama</strong></td><td class="crd-td">ZMB: -13,29, 32,91</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k</td><td class="crd-td">1,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Songo</strong></td><td class="crd-td">MOZ: -15,6, 32,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">901</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Masoko</strong></td><td class="crd-td">TZA: -9,33, 33,76</td><td class="crd-td">697</td><td class="crd-td">977</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Twin Rivers Kopje</strong></td><td class="crd-td">ZMB: -15,56, 28,13</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td><td class="crd-td">1,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mbande Hill</strong></td><td class="crd-td">MWI: -9,94, 33,87</td><td class="crd-td">-</td><td class="crd-td">943</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Kapeni</strong></td><td class="crd-td">MWI: -15,48, 34,94</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,5k (940AD)</td></tr>
<tr><td class="crd-td"><strong>Mwambacimo</strong></td><td class="crd-td">ZMB: -13,45, 28,74</td><td class="crd-td">911</td><td class="crd-td">995</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td><td class="crd-td">1,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Thandwe</strong></td><td class="crd-td">ZMB: -13,82, 32,47</td><td class="crd-td">-</td><td class="crd-td">944</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td><td class="crd-td">1,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Makwe</strong></td><td class="crd-td">ZMB: -14,4, 31,94</td><td class="crd-td">99</td><td class="crd-td">92</td><td class="crd-td">87</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Twickenham Road</strong></td><td class="crd-td">ZMB: -15,4, 28,32</td><td class="crd-td">-</td><td class="crd-td">800</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Msinja</strong></td><td class="crd-td">MWI: -14,12, 33,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kalemba Rock Shelter</strong></td><td class="crd-td">ZMB: -14,12, 32,5</td><td class="crd-td">564</td><td class="crd-td">818</td><td class="crd-td">1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mano</strong></td><td class="crd-td">ZMB: -14,12, 32,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mwamasapa</strong></td><td class="crd-td">MWI: -9,94, 33,83</td><td class="crd-td">-</td><td class="crd-td">766</td><td class="crd-td">999</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Kangila</strong></td><td class="crd-td">ZMB: -16,12, 27,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">604</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Kalambo Falls</strong></td><td class="crd-td">ZMB: -8,62, 31,24</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1k</td><td class="crd-td">714</td><td class="crd-td">-</td><td class="crd-td">1,3k (750AD)</td></tr>
<tr><td class="crd-td"><strong>Mlowo</strong></td><td class="crd-td">TZA: -9,03, 32,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kamnama</strong></td><td class="crd-td">ZMB: -13,68, 32,78</td><td class="crd-td">-</td><td class="crd-td">998</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,2k (960AD)</td></tr>
<tr><td class="crd-td"><strong>Khulubvi</strong></td><td class="crd-td">MWI: -16,95, 35,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Nakapapula Rockshelter</strong></td><td class="crd-td">ZMB: -12,82, 30,62</td><td class="crd-td">-</td><td class="crd-td">727</td><td class="crd-td">929</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Chongoni</strong></td><td class="crd-td">MWI: -14,2, 34,24</td><td class="crd-td">944</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1180AD)</td></tr>
<tr><td class="crd-td"><strong>Mwabulambo</strong></td><td class="crd-td">MWI: -9,79, 33,86</td><td class="crd-td">-</td><td class="crd-td">633</td><td class="crd-td">828</td><td class="crd-td">1k</td><td class="crd-td">1k</td><td class="crd-td">1,1k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Nachitalo</strong></td><td class="crd-td">ZMB: -13,51, 29,02</td><td class="crd-td">-</td><td class="crd-td">653</td><td class="crd-td">817</td><td class="crd-td">945</td><td class="crd-td">1k</td><td class="crd-td">1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Area A</strong></td><td class="crd-td">TZA: -8,6, 31,24</td><td class="crd-td">-</td><td class="crd-td">562</td><td class="crd-td">773</td><td class="crd-td">937</td><td class="crd-td">930</td><td class="crd-td">976 (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Chondwe</strong></td><td class="crd-td">ZMB: -13,09, 28,76</td><td class="crd-td">291</td><td class="crd-td">483</td><td class="crd-td">724</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">976 (750AD)</td></tr>
<tr><td class="crd-td"><strong>Igurusi</strong></td><td class="crd-td">TZA: -8,83, 33,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">958</td><td class="crd-td">958 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Maganga Hill</strong></td><td class="crd-td">TZA: -9,86, 34,9</td><td class="crd-td">-</td><td class="crd-td">546</td><td class="crd-td">675</td><td class="crd-td">910</td><td class="crd-td">856</td><td class="crd-td">957 (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Chilimulila</strong></td><td class="crd-td">ZMB: -13,42, 28,9</td><td class="crd-td">-</td><td class="crd-td">613</td><td class="crd-td">760</td><td class="crd-td">878</td><td class="crd-td">940</td><td class="crd-td">940 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kalambo South</strong></td><td class="crd-td">TZA: -8,57, 31,22</td><td class="crd-td">-</td><td class="crd-td">810</td><td class="crd-td">900</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">922 (1120AD)</td></tr>
<tr><td class="crd-td"><strong>Ntandabale</strong></td><td class="crd-td">ZMB: -15,39, 28,42</td><td class="crd-td">-</td><td class="crd-td">841</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">841 (500AD)</td></tr>
<tr><td class="crd-td"><strong>Nkope-South</strong></td><td class="crd-td">MWI: -14,22, 35,07</td><td class="crd-td">500</td><td class="crd-td">816</td><td class="crd-td">730</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">838 (580AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 60 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Individually assessed settlements in the Zambezi Corridor and Maravi zone from 1AD to 1500AD (top 40 of 100 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Mapungubwe, Great Zimbabwe and Mutapa

Table \ref{tab:sub-zimbabwe} presents 345 plateau and Limpopo valley sites across Zimbabwe, eastern Botswana, northern South Africa, southern Zambia and central Mozambique, led by Great Zimbabwe (20k), Khami (5,4k), Mapungubwe (5k), Toutswemogala (4,9k), Sofala (4,8k), Bosutswe (3,2k) and Ingombe Ilede (2,7k) [@ShadreckChiri1800WhatWas; @Chirikure2014MapelaHill; @Mukwende2017ArchaeologicalStudy].

<figure class="crd-table-figure" id="tab:sub-zimbabwe">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Great Zimbabwe</strong></td><td class="crd-td">ZWE: -20,27, 30,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20k</td><td class="crd-td">2,8k</td><td class="crd-td">20,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Sofala</strong></td><td class="crd-td">MOZ: -20,15, 34,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">4,8k</td><td class="crd-td">8,2k</td><td class="crd-td">10,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Mapungubwe</strong></td><td class="crd-td">ZAF: -22,21, 29,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">7,3k</td><td class="crd-td">2,1k</td><td class="crd-td">7,3k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Moxomatsi</strong></td><td class="crd-td">ZAF: -25,86, 30,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">7k (1490AD)</td></tr>
<tr><td class="crd-td"><strong>Khami</strong></td><td class="crd-td">ZWE: -20,16, 28,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">5,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ingombe Ilede</strong></td><td class="crd-td">ZMB: -16,18, 28,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">4,8k</td><td class="crd-td">3,4k</td><td class="crd-td">5k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Chibuene</strong></td><td class="crd-td">MOZ: -22,05, 35,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">3,6k</td><td class="crd-td">2,9k</td><td class="crd-td">4,9k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Toutswemogala</strong></td><td class="crd-td">BWA: -22,23, 27,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">3,5k</td><td class="crd-td">1,6k</td><td class="crd-td">4,8k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Bosutswe</strong></td><td class="crd-td">BWA: -21,95, 26,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">4,1k</td><td class="crd-td">1,6k</td><td class="crd-td">4,1k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Zvipadze</strong></td><td class="crd-td">ZWE: -16,95, 31,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">3,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Naletale</strong></td><td class="crd-td">ZWE: -19,88, 29,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">247</td><td class="crd-td">259</td><td class="crd-td">3,8k</td><td class="crd-td">3,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kasekete</strong></td><td class="crd-td">ZWE: -16,36, 30,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">3,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ziwa</strong></td><td class="crd-td">ZWE: -18,18, 32,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">3,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Manyikeni</strong></td><td class="crd-td">MOZ: -22,19, 34,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">3,1k</td><td class="crd-td">3,6k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Thulamela</strong></td><td class="crd-td">ZAF: -22,43, 31,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">780</td><td class="crd-td">1,5k</td><td class="crd-td">3,3k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Chisvingo</strong></td><td class="crd-td">ZWE: -17,17, 31,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1460AD)</td></tr>
<tr><td class="crd-td"><strong>Majiri Ruins</strong></td><td class="crd-td">ZWE: -20,38, 31,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">3k (1460AD)</td></tr>
<tr><td class="crd-td"><strong>Mapela Hill</strong></td><td class="crd-td">ZWE: -21,65, 28,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">269</td><td class="crd-td">304</td><td class="crd-td">2,7k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Leopard's Kopje Main Kraal</strong></td><td class="crd-td">ZWE: -20,12, 28,43</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lose</strong></td><td class="crd-td">BWA: -22,92, 26,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">1,8k</td><td class="crd-td">2,6k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Zhizo Hill</strong></td><td class="crd-td">ZWE: -20,18, 28,75</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Muchuchu</strong></td><td class="crd-td">ZWE: -19,52, 31,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Domboshaba</strong></td><td class="crd-td">BWA: -20,61, 27,36</td><td class="crd-td">-</td><td class="crd-td">717</td><td class="crd-td">839</td><td class="crd-td">1,3k</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Structure Group</strong></td><td class="crd-td">ZWE: -18,13, 32,64</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Chedzurgwe</strong></td><td class="crd-td">ZWE: -16,78, 29,62</td><td class="crd-td">1,1k</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Balerno Main Shelter</strong></td><td class="crd-td">ZAF: -22,26, 29,19</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Pont Drift</strong></td><td class="crd-td">ZAF: -22,22, 29,14</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">1,2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Chironga</strong></td><td class="crd-td">ZWE: -19,86, 31,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1470AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Nhaucati</strong></td><td class="crd-td">MOZ: -22,04, 35,31</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Harleigh Farm</strong></td><td class="crd-td">ZWE: -18,53, 32,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Thulamela</strong></td><td class="crd-td">ZAF: -22,69, 31,01</td><td class="crd-td">2,3k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (50BC)</td></tr>
<tr><td class="crd-td"><strong>Munenga</strong></td><td class="crd-td">ZMB: -16,03, 28,75</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kasoko</strong></td><td class="crd-td">ZMB: -16,06, 28,83</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bambandyanalo</strong></td><td class="crd-td">ZAF: -22,22, 29,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Zvipani</strong></td><td class="crd-td">ZWE: -16,92, 29,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1440AD)</td></tr>
<tr><td class="crd-td"><strong>Mandenga</strong></td><td class="crd-td">ZMB: -16,03, 28,86</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Nhauhache</strong></td><td class="crd-td">MOZ: -21,98, 35,29</td><td class="crd-td">978</td><td class="crd-td">1,2k</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Chumnungwa</strong></td><td class="crd-td">ZWE: -20,8, 29,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2k</td><td class="crd-td">2,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Schroda</strong></td><td class="crd-td">ZAF: -22,18, 29,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,1k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Mambone</strong></td><td class="crd-td">MOZ: -20,97, 35,06</td><td class="crd-td">-</td><td class="crd-td">749</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td><td class="crd-td">1,1k</td><td class="crd-td">2,1k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 305 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 10.</span> Individually assessed settlements in the Mapungubwe, Great Zimbabwe and Mutapa zone from 1AD to 1500AD (top 40 of 345 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Highveld Sotho-Tswana and Nguni Iron Age

Table \ref{tab:sub-nguni} details 221 Early and Late Iron Age agro-pastoral centres in South Africa: Phalaborwa-Kgopolwe (1,5k), KwaGandaganda (790), Ndondondwane (620) and Broederstroom (490) [@Tallman2023WholeGenomes; @Vicente2021MaleBiased].

<figure class="crd-table-figure" id="tab:sub-nguni">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Suikerbosrand</strong></td><td class="crd-td">ZAF: -26,5, 28,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">4,9k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Olifantspoort</strong></td><td class="crd-td">ZAF: -25,82, 27,25</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">1,8k</td><td class="crd-td">3,6k</td><td class="crd-td">3,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Phalaborwa-Kgopolwe</strong></td><td class="crd-td">ZAF: -23,94, 31,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">620</td><td class="crd-td">1,4k</td><td class="crd-td">2,4k</td><td class="crd-td">3,3k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Ntsuanatsatsi</strong></td><td class="crd-td">ZAF: -27,27, 28,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Rose Cottage Cave</strong></td><td class="crd-td">ZAF: -29,25, 27,5</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mbabane Shelter</strong></td><td class="crd-td">ZAF: -28,76, 30,37</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1482AD)</td></tr>
<tr><td class="crd-td"><strong>Klipriviersberg</strong></td><td class="crd-td">ZAF: -26,18, 28,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Holkrans</strong></td><td class="crd-td">ZAF: -26,85, 27,28</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Modipe Hill 94,2</strong></td><td class="crd-td">ZAF: -24,66, 26,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Uitkomst Cave</strong></td><td class="crd-td">ZAF: -25,88, 27,62</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">2,3k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Strauss</strong></td><td class="crd-td">ZAF: -25,78, 27,88</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Txina-Txina Shelter</strong></td><td class="crd-td">MOZ: -23,89, 31,91</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Rooikrans</strong></td><td class="crd-td">ZAF: -27,03, 27,37</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>iNkolimahashi Shelter</strong></td><td class="crd-td">ZAF: -28,79, 30,18</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Mmatsetshele MMA004</strong></td><td class="crd-td">ZAF: -25,56, 27,36</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Shongweni South</strong></td><td class="crd-td">ZAF: -29,85, 30,72</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Umhlatuzana</strong></td><td class="crd-td">ZAF: -29,8, 30,75</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mgede Shelter</strong></td><td class="crd-td">ZAF: -28,17, 29,69</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Border Cave</strong></td><td class="crd-td">ZAF: -27,02, 31,99</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Cooper&amp;apos;s Cave</strong></td><td class="crd-td">ZAF: -26,02, 27,75</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Magozastad</strong></td><td class="crd-td">ZAF: -25,55, 26,28</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mgoduyanuka</strong></td><td class="crd-td">ZAF: -28,72, 29,39</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Colwinton</strong></td><td class="crd-td">ZAF: -31,15, 27,77</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Strathalan A</strong></td><td class="crd-td">ZAF: -30,98, 28,38</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kaditshwene second central court midden</strong></td><td class="crd-td">ZAF: -25,36, 26,17</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mzinyashana Shelter</strong></td><td class="crd-td">ZAF: -28,32, 30,47</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1349AD)</td></tr>
<tr><td class="crd-td"><strong>Belleview</strong></td><td class="crd-td">ZAF: -30, 29,06</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1248AD)</td></tr>
<tr><td class="crd-td"><strong>Broadhurst</strong></td><td class="crd-td">BWA: -24,61, 25,92</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1386AD)</td></tr>
<tr><td class="crd-td"><strong>Hoekfontein</strong></td><td class="crd-td">ZAF: -25,61, 27,97</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Borchers Shelter</strong></td><td class="crd-td">ZAF: -30,69, 30,38</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Broederstroom</strong></td><td class="crd-td">ZAF: -25,77, 27,84</td><td class="crd-td">-</td><td class="crd-td">950</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Ntshekane</strong></td><td class="crd-td">ZAF: -28,98, 30,4</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">600</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Msuluzi</strong></td><td class="crd-td">ZAF: -28,75, 30,16</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Jubilee Shelter</strong></td><td class="crd-td">ZAF: -25,68, 27,98</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (250AD)</td></tr>
<tr><td class="crd-td"><strong>Camp Workings (Rooiberg Valley)</strong></td><td class="crd-td">ZAF: -24,8, 27,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Open-air</strong></td><td class="crd-td">ZAF: -24,8, 27,56</td><td class="crd-td">-</td><td class="crd-td">881</td><td class="crd-td">1,1k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Melikane</strong></td><td class="crd-td">LSO: -29,95, 28,75</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Djilene (PNL 73)</strong></td><td class="crd-td">MOZ: -23,74, 32,49</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ha Makotoko Rock Shelter</strong></td><td class="crd-td">LSO: -29,33, 27,8</td><td class="crd-td">860</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kotha’s Field</strong></td><td class="crd-td">SWZ: -26,68, 31,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 181 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 11.</span> Individually assessed settlements in the Highveld Sotho-Tswana and Nguni Iron Age zone from 1AD to 1500AD (top 40 of 221 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Khoekhoe and San Cape, Namib and Kalahari

Table \ref{tab:sub-khoisan} records 179 pastoral and foraging sites across north-western Botswana, the Western Cape and Namibia: Nqoma (890), Kasteelberg (395) and Geduld (230) [@Vicente2021MaleBiased].

<figure class="crd-table-figure" id="tab:sub-khoisan">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Aspoort Cave</strong></td><td class="crd-td">ZAF: -32,5, 19,52</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Cassinga</strong></td><td class="crd-td">AGO: -15,12, 16,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Reception Shelter</strong></td><td class="crd-td">ZAF: -31,53, 18,6</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>De Hangen</strong></td><td class="crd-td">ZAF: -32,08, 18,87</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">1,8k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Masari</strong></td><td class="crd-td">NAM: -18,01, 20,99</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k</td><td class="crd-td">1,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Scott's Cave</strong></td><td class="crd-td">ZAF: -33,73, 24,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">1,7k</td><td class="crd-td">1,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Byneskranskop 1 Cave</strong></td><td class="crd-td">ZAF: -34,58, 19,47</td><td class="crd-td">586</td><td class="crd-td">65</td><td class="crd-td">60</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Faraoskop</strong></td><td class="crd-td">ZAF: -32,13, 18,61</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1273AD)</td></tr>
<tr><td class="crd-td"><strong>Voelvlei</strong></td><td class="crd-td">ZAF: -33,23, 19,4</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k</td><td class="crd-td">1,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Buffelskloof</strong></td><td class="crd-td">ZAF: -33,67, 21,87</td><td class="crd-td">955</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k</td><td class="crd-td">1,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Fackeltrager Shelter, Omandumba</strong></td><td class="crd-td">NAM: -21,57, 15,35</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Nqoma</strong></td><td class="crd-td">BWA: -18,73, 21,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">225</td><td class="crd-td">237</td><td class="crd-td">1,5k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Feti la Choya</strong></td><td class="crd-td">AGO: -14,51, 15,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Etemba Shelter</strong></td><td class="crd-td">NAM: -21,45, 15,65</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td><td class="crd-td">1,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Elands Bay</strong></td><td class="crd-td">ZAF: -32,31, 18,34</td><td class="crd-td">903</td><td class="crd-td">1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,4k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Faraoskop</strong></td><td class="crd-td">ZAF: -32,52, 18,6</td><td class="crd-td">870</td><td class="crd-td">1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,4k (1346AD)</td></tr>
<tr><td class="crd-td"><strong>Chiéde</strong></td><td class="crd-td">AGO: -17,17, 15,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Komkans 2</strong></td><td class="crd-td">ZAF: -31,24, 18,05</td><td class="crd-td">-</td><td class="crd-td">918</td><td class="crd-td">1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kabeljous River Mouth</strong></td><td class="crd-td">ZAF: -33,97, 24,92</td><td class="crd-td">1k</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (500AD)</td></tr>
<tr><td class="crd-td"><strong>Blombos Cave</strong></td><td class="crd-td">ZAF: -34,42, 21,22</td><td class="crd-td">683</td><td class="crd-td">860</td><td class="crd-td">975</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Chibemba</strong></td><td class="crd-td">AGO: -15,75, 14,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Great Elephant Shelter</strong></td><td class="crd-td">NAM: -21,83, 15,67</td><td class="crd-td">906</td><td class="crd-td">982</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Ombala yo Mungu</strong></td><td class="crd-td">AGO: -17,08, 15,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kapako</strong></td><td class="crd-td">NAM: -17,91, 19,57</td><td class="crd-td">546</td><td class="crd-td">695</td><td class="crd-td">849</td><td class="crd-td">796</td><td class="crd-td">548</td><td class="crd-td">1,1k (900AD)</td></tr>
<tr><td class="crd-td"><strong>Nelson Bay Cave</strong></td><td class="crd-td">ZAF: -34,1, 23,38</td><td class="crd-td">104</td><td class="crd-td">91</td><td class="crd-td">85</td><td class="crd-td">977</td><td class="crd-td">-</td><td class="crd-td">1k (1490AD)</td></tr>
<tr><td class="crd-td"><strong>Cachama</strong></td><td class="crd-td">AGO: -14,85, 13,56</td><td class="crd-td">-</td><td class="crd-td">399</td><td class="crd-td">991</td><td class="crd-td">781</td><td class="crd-td">502</td><td class="crd-td">1k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Havens Cave</strong></td><td class="crd-td">ZAF: -33,67, 24,35</td><td class="crd-td">813</td><td class="crd-td">966</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k (797AD)</td></tr>
<tr><td class="crd-td"><strong>Vungu Vungu</strong></td><td class="crd-td">NAM: -17,89, 19,86</td><td class="crd-td">515</td><td class="crd-td">645</td><td class="crd-td">779</td><td class="crd-td">757</td><td class="crd-td">895</td><td class="crd-td">1k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Drierivier Smelting Site</strong></td><td class="crd-td">NAM: -23,36, 17,12</td><td class="crd-td">-</td><td class="crd-td">793</td><td class="crd-td">930</td><td class="crd-td">934</td><td class="crd-td">982</td><td class="crd-td">982 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Die Kelders</strong></td><td class="crd-td">ZAF: -34,55, 19,38</td><td class="crd-td">170</td><td class="crd-td">242</td><td class="crd-td">141</td><td class="crd-td">483</td><td class="crd-td">859</td><td class="crd-td">859 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Zoetvlei 304</strong></td><td class="crd-td">ZAF: -32,58, 22,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">848</td><td class="crd-td">848 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Renbaan Cave</strong></td><td class="crd-td">ZAF: -32,23, 18,86</td><td class="crd-td">-</td><td class="crd-td">568</td><td class="crd-td">670</td><td class="crd-td">773</td><td class="crd-td">825</td><td class="crd-td">825 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mike Taylor's Midden</strong></td><td class="crd-td">ZAF: -32,34, 18,32</td><td class="crd-td">-</td><td class="crd-td">583</td><td class="crd-td">708</td><td class="crd-td">784</td><td class="crd-td">-</td><td class="crd-td">809 (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Liavela</strong></td><td class="crd-td">AGO: -14,97, 15,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">775 (898AD)</td></tr>
<tr><td class="crd-td"><strong>Pockenbank</strong></td><td class="crd-td">NAM: -27,22, 16,52</td><td class="crd-td">497</td><td class="crd-td">564</td><td class="crd-td">645</td><td class="crd-td">754</td><td class="crd-td">-</td><td class="crd-td">772 (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Cha-re Shelter</strong></td><td class="crd-td">NAM: -23,65, 15,92</td><td class="crd-td">613</td><td class="crd-td">623</td><td class="crd-td">680</td><td class="crd-td">742</td><td class="crd-td">-</td><td class="crd-td">742 (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Karamba</strong></td><td class="crd-td">NAM: -21,95, 18,13</td><td class="crd-td">-</td><td class="crd-td">543</td><td class="crd-td">629</td><td class="crd-td">687</td><td class="crd-td">722</td><td class="crd-td">722 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kruidfontein nr Prince Albert</strong></td><td class="crd-td">ZAF: -32,85, 21,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">713</td><td class="crd-td">713 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Tortoise Cave</strong></td><td class="crd-td">ZAF: -32,34, 18,4</td><td class="crd-td">444</td><td class="crd-td">516</td><td class="crd-td">613</td><td class="crd-td">706</td><td class="crd-td">-</td><td class="crd-td">706 (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Steenbokfontein</strong></td><td class="crd-td">ZAF: -32,16, 18,33</td><td class="crd-td">404</td><td class="crd-td">486</td><td class="crd-td">574</td><td class="crd-td">655</td><td class="crd-td">697</td><td class="crd-td">697 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 139 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 12.</span> Individually assessed settlements in the Khoekhoe and San Cape, Namib and Kalahari zone from 1AD to 1500AD (top 40 of 179 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

# Limitations

Three caveats govern this settlement ledger. First, 39 of the 3.185 sites hold single-date observations, meaning interpolated benchmark columns display a hyphen outside their recorded occupation span. Second, site recovery favours monumental stone enclosures, Swahili coral towns and major Nigerian or Kongo centres over perishable rainforest hamlets [@Bostoen2018BantuFirst; @Alders2026TownlandsThe]. Third, combined table totals represent nucleated and excavated settlements rather than full regional headcounts, which appear in the companion review.

# Conclusion

Taken together, the 3.185 individually assessed settlements document the spatial expansion of farming villages, metallurgical centres, maritime ports and plateau capitals across 23 Sub-Saharan countries between 1000BC and 1500AD, anchoring the regional demographic series ahead of the early modern era.

# Appendix

## Sub-Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} sums the individually assessed site counts and combined interpolated site populations across all twelve sub-regions from 1000BC to 1500AD.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion (Sites)</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cameroon Grassfields Bantu Homeland (409)</strong></td><td class="crd-td">9,3k</td><td class="crd-td">86,5k</td><td class="crd-td">110,9k</td><td class="crd-td">294,5k</td><td class="crd-td">358,3k</td><td class="crd-td">390,5k</td></tr>
<tr><td class="crd-td"><strong>Western Equatorial Rainforest (Ogooue-Sangha) (198)</strong></td><td class="crd-td">3,5k</td><td class="crd-td">40,5k</td><td class="crd-td">55,8k</td><td class="crd-td">54,3k</td><td class="crd-td">56,8k</td><td class="crd-td">65,8k</td></tr>
<tr><td class="crd-td"><strong>Inner Congo Basin, Mongo and Ubangi-Uele (88)</strong></td><td class="crd-td">1,5k</td><td class="crd-td">14,6k</td><td class="crd-td">24,5k</td><td class="crd-td">30,9k</td><td class="crd-td">33k</td><td class="crd-td">48,8k</td></tr>
<tr><td class="crd-td"><strong>Lower Congo, Kingdom of Kongo and Angola (255)</strong></td><td class="crd-td">4,7k</td><td class="crd-td">39,6k</td><td class="crd-td">62,6k</td><td class="crd-td">105,3k</td><td class="crd-td">133,5k</td><td class="crd-td">203,4k</td></tr>
<tr><td class="crd-td"><strong>Great Lakes Urewe Core (Kitara, Rwanda) (466)</strong></td><td class="crd-td">7,8k</td><td class="crd-td">45,2k</td><td class="crd-td">84k</td><td class="crd-td">96,9k</td><td class="crd-td">101,4k</td><td class="crd-td">301,5k</td></tr>
<tr><td class="crd-td"><strong>East African Rift Pastoralists and Savanna (410)</strong></td><td class="crd-td">14,5k</td><td class="crd-td">48,4k</td><td class="crd-td">92,2k</td><td class="crd-td">125,8k</td><td class="crd-td">140,3k</td><td class="crd-td">213k</td></tr>
<tr><td class="crd-td"><strong>Swahili City-States (Lamu, Mombasa, Zanzibar, Kilwa) (415)</strong></td><td class="crd-td">2,9k</td><td class="crd-td">19,6k</td><td class="crd-td">57k</td><td class="crd-td">146,3k</td><td class="crd-td">254,5k</td><td class="crd-td">327,6k</td></tr>
<tr><td class="crd-td"><strong>Upemba Depression, Katanga and Proto-Luba (99)</strong></td><td class="crd-td">242</td><td class="crd-td">6,2k</td><td class="crd-td">15,8k</td><td class="crd-td">45,4k</td><td class="crd-td">52k</td><td class="crd-td">74,8k</td></tr>
<tr><td class="crd-td"><strong>Zambezi Corridor, Maravi and Ingombe Ilede (100)</strong></td><td class="crd-td">1,3k</td><td class="crd-td">9,7k</td><td class="crd-td">31,9k</td><td class="crd-td">34,4k</td><td class="crd-td">42,4k</td><td class="crd-td">61,5k</td></tr>
<tr><td class="crd-td"><strong>Mapungubwe, Great Zimbabwe and Mutapa (345)</strong></td><td class="crd-td">255</td><td class="crd-td">29,8k</td><td class="crd-td">94k</td><td class="crd-td">190,6k</td><td class="crd-td">258,7k</td><td class="crd-td">255,3k</td></tr>
<tr><td class="crd-td"><strong>Highveld Sotho-Tswana and Nguni Iron Age (221)</strong></td><td class="crd-td">9,3k</td><td class="crd-td">53,5k</td><td class="crd-td">121,8k</td><td class="crd-td">142,2k</td><td class="crd-td">155k</td><td class="crd-td">119,5k</td></tr>
<tr><td class="crd-td"><strong>Khoekhoe and San Cape, Namib and Kalahari (179)</strong></td><td class="crd-td">7k</td><td class="crd-td">22,7k</td><td class="crd-td">42,6k</td><td class="crd-td">52,7k</td><td class="crd-td">54,7k</td><td class="crd-td">50,4k</td></tr>
<tr><td class="crd-td"><strong>All Subregions (3.185)</strong></td><td class="crd-td">62,3k</td><td class="crd-td">416,2k</td><td class="crd-td">793,1k</td><td class="crd-td">1,32M</td><td class="crd-td">1,64M</td><td class="crd-td">2,11M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 13.</span> Individually assessed site counts and combined interpolated populations across twelve ecological sub-regions from 1000BC to 1500AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Linear interpolation is bounded strictly between each settlement's earliest and latest observed dates; pre-foundation and post-abandonment benchmarks are left blank with a hyphen (-).
