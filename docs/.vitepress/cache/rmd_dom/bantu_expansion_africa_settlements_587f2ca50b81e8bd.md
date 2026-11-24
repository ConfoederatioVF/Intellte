---
title: "The Bantu Expansion Across Sub-Saharan Africa"
subtitle: "Settlement Gazetteer: 142 Individually Assessed Sites (1000BC-1500AD)"
date: "23 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: bantu_expansion_africa_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 142 individually assessed settlements across 23 Sub-Saharan countries spanning twelve ecological sub-regions from 1000BC to 1500AD."
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

This gazetteer compiles spatial coordinates and multi-period population series for 142 individually assessed settlements across 23 Sub-Saharan African countries between 1000BC and 1500AD. Screened from 165 candidate archaeological sites, rock shelters, walled capitals and coastal ports (23 excluded), the retained entries span twelve ecological and cultural sub-regions from the Cameroon Grassfields homeland and the Congo Basin to the Great Lakes, the Swahili littoral, Katanga, the Zimbabwe plateau and the Cape. Active interpolated entries expand from 18 early sites at 1000BC to 28 at 1AD, 37 at 500AD, 52 at 1000AD and 54 at 1300AD, tracing urban development from Early Iron Age farming villages to Mbanza Congo (38k), Muqdisho (24,8k), Great Zimbabwe (20k), Owo (18,6k) and Kilwa Kisiwani (14,8k).



# Background

Reconstructing Iron Age settlement hierarchies across Equatoria, East Africa and Southern Africa requires combining disparate archaeological and documentary archives. Unlike Mediterranean or Near Eastern landscapes dominated by durable mudbrick tells, Sub-Saharan Africa south of the Benue-Cross and Ubangi rivers spans tropical forest clearings where timber-and-daub hamlets decompose quickly, dry-stone plateau citadels, coral-rag coastal towns and lacustrine burial complexes [@Connah2001AfricanCivilizations; @CoqueryVidrovitch2005BantuCities; @Bostoen2018BantuFirst]. Assembling those traditions into one unified gazetteer highlights how ecological corridors shaped settlement scale from the Cameroon Grassfields to the Limpopo valley [@Russell2014ModellingThe; @BIRD2022P3K14C].

# Methodology

## Candidate Screening and Sub-Regional Partition

Candidate loci were screened from regional radiocarbon surveys, excavated town plans and early historical accounts [@Cornelissen2016RMCA; @Alders2026TownlandsThe; @ShadreckChiri1800WhatWas]. Of 165 candidate entries inside the 12.153.713 km² territorial domain bounded over geoBoundaries national outlines [@Runfola2020GeoBoundaries], 23 duplicate alias records were merged or excluded, retaining 142 individually assessed settlements across 366 chronological observations. Each entry is assigned to one of twelve ecological sub-regions (137 within interior 5-arcminute pixels and 5 on the immediate border or island margin, namely Carboneras on Bioko, Owo, Koton Karifi and Umaisha on the Cross-Niger margin, and Dirre Sheikh Hussein on the eastern Horn fringe).

## Site-Specific Population Estimation

Every entry carries a city-proper spatial scope (142 city-proper, 0 metro) calibrated from mapped enclosure hectares, midden sequences, compound counts and early eyewitness records [@Thornton1982TheKingdom; @Huffman2011DebatingGreat; @Chirikure2019NewPerspectives]. Tables 1 to 12 present linearly interpolated populations at five historical benchmarks (1AD, 500AD, 1000AD, 1300AD, 1500AD) alongside each site's exact peak population and date, marking eras prior to occupation or following abandonment with a hyphen (-).

# Testing and Validation

Across all 142 individually assessed settlements, rank-size regression on peak populations yields $q = 0,89$ ($R^2 = 0,94$) over the upper half (n=71) and $q = 1,31$ ($R^2 = 0,84$) across the full sample, matching the 141 deduplicated entries plotted in Figure \ref{fig:settlements-rank}. Chronological screening ensures zero duplicate site synonyms and strict alignment between radiocarbon phase horizons and historical town trajectories [@Stephens2023ReconstructingThe; @Seidensticker2025SurveyFrom].

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-bantu-expansion-africa-settlements/fig_03_rank_size.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Zipf rank-size curve across 141 deduplicated settlements (q = 0,88, R² = 0,94) and mean sub-regional density in 1500AD.</figcaption>
</figure>

# Results

## Cameroon Grassfields Bantu Homeland

Table \ref{tab:sub-cameroon} records 30 individually assessed sites across Cameroon, south-eastern Nigeria, Bioko and western Central African Republic, spanning Early Iron Age villages (Obobogo, Oliga, Shum Laka, Tazunu Beforo) and late mediaeval delta and forest-edge towns led by Nembe (87,5k), Owo (18,6k), Igbo Ukwu (7,6k), Idah (5,4k), Foumban (4,9k) and Nsukka (4,8k) [@CoqueryVidrovitch2005BantuCities; @Bostoen2018BantuFirst].

<figure class="crd-table-figure" id="tab:sub-cameroon">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Nembe</strong></td><td class="crd-td">NGA: 4,54, 6,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">87,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">87,5k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Owo</strong></td><td class="crd-td">NGA: 7,2, 5,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,6k</td><td class="crd-td">18,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Igbo Ukwu</strong></td><td class="crd-td">NGA: 6,02, 7,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6k</td><td class="crd-td">7,3k</td><td class="crd-td">-</td><td class="crd-td">7,6k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Idah</strong></td><td class="crd-td">NGA: 7,15, 6,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Foumban</strong></td><td class="crd-td">CMR: 5,72, 10,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">4,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Nsukka</strong></td><td class="crd-td">NGA: 6,85, 7,42</td><td class="crd-td">1,8k</td><td class="crd-td">2,6k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Umaisha</strong></td><td class="crd-td">NGA: 8,02, 7,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Uromi</strong></td><td class="crd-td">NGA: 6,74, 6,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">4,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Agbor</strong></td><td class="crd-td">NGA: 6,26, 6,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Afikpo</strong></td><td class="crd-td">NGA: 5,87, 7,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Koton Karifi</strong></td><td class="crd-td">NGA: 8,08, 6,81</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Asaba</strong></td><td class="crd-td">NGA: 6,2, 6,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">2,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Babungo</strong></td><td class="crd-td">CMR: 6,06, 10,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1080AD)</td></tr>
<tr><td class="crd-td"><strong>Bonny</strong></td><td class="crd-td">NGA: 4,42, 7,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Carboneras</strong></td><td class="crd-td">GNQ: 3,75, 8,75</td><td class="crd-td">-</td><td class="crd-td">320</td><td class="crd-td">596</td><td class="crd-td">704</td><td class="crd-td">-</td><td class="crd-td">740 (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Dibamba</strong></td><td class="crd-td">CMR: 4, 9,82</td><td class="crd-td">387</td><td class="crd-td">514</td><td class="crd-td">620</td><td class="crd-td">665</td><td class="crd-td">-</td><td class="crd-td">680 (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Tazunu Beforo</strong></td><td class="crd-td">CAF: 5,97, 15,29</td><td class="crd-td">542</td><td class="crd-td">388</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">628 (300BC)</td></tr>
<tr><td class="crd-td"><strong>Lom Pangar</strong></td><td class="crd-td">CMR: 5,38, 13,5</td><td class="crd-td">334</td><td class="crd-td">489</td><td class="crd-td">580</td><td class="crd-td">587</td><td class="crd-td">540</td><td class="crd-td">610 (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Campo Coastal Site</strong></td><td class="crd-td">CMR: 2,38, 9,83</td><td class="crd-td">509</td><td class="crd-td">508</td><td class="crd-td">415</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">580 (100AD)</td></tr>
<tr><td class="crd-td"><strong>Mouanko-Lobethal</strong></td><td class="crd-td">CMR: 3,64, 9,78</td><td class="crd-td">305</td><td class="crd-td">445</td><td class="crd-td">501</td><td class="crd-td">460</td><td class="crd-td">-</td><td class="crd-td">515 (900AD)</td></tr>
<tr><td class="crd-td"><strong>Oliga</strong></td><td class="crd-td">CMR: 3,9, 11,5</td><td class="crd-td">463</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">510 (100BC)</td></tr>
<tr><td class="crd-td"><strong>Nachtigal</strong></td><td class="crd-td">CMR: 4,39, 11,74</td><td class="crd-td">467</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">495 (100AD)</td></tr>
<tr><td class="crd-td"><strong>Obobogo Neolithic Settlement</strong></td><td class="crd-td">CMR: 3,82, 11,5</td><td class="crd-td">382</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">465 (200BC)</td></tr>
<tr><td class="crd-td"><strong>Bwambe-Sommet</strong></td><td class="crd-td">CMR: 2,89, 9,9</td><td class="crd-td">402</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">445 (200BC)</td></tr>
<tr><td class="crd-td"><strong>Ndeba-Somie</strong></td><td class="crd-td">CMR: 6,28, 11,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">440 (200AD)</td></tr>
<tr><td class="crd-td"><strong>Oboui Settlement</strong></td><td class="crd-td">CAF: 6,05, 15,33</td><td class="crd-td">380</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">440 (100AD)</td></tr>
<tr><td class="crd-td"><strong>Nkometou</strong></td><td class="crd-td">CMR: 4,08, 11,55</td><td class="crd-td">403</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">430 (200BC)</td></tr>
<tr><td class="crd-td"><strong>Akonetye</strong></td><td class="crd-td">CMR: 2,48, 11,18</td><td class="crd-td">358</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">425 (250AD)</td></tr>
<tr><td class="crd-td"><strong>Shum Laka Rock Shelter</strong></td><td class="crd-td">CMR: 5,86, 10,08</td><td class="crd-td">250</td><td class="crd-td">240</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">260 (500BC)</td></tr>
<tr><td class="crd-td"><strong>Nangara-Komba Site</strong></td><td class="crd-td">CAF: 4,97, 15,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">235 (1000BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in the Cameroon Grassfields Bantu Homeland and Niger-Cross fringe (1AD to 1500AD).</figcaption>
</figure>

## Western Equatorial Rainforest

Table \ref{tab:sub-west-eq} lists 9 sites across Gabon, coastal Republic of the Congo and Equatorial Guinea, from early iron-smelting hubs at Otoumbi, Okala, Moanda and Kitina to the Loango capital of Buali (6,2k) [@Cornelissen2016RMCA].

<figure class="crd-table-figure" id="tab:sub-west-eq">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Buali</strong></td><td class="crd-td">COG: -4,63, 11,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Nanda-Corisco</strong></td><td class="crd-td">GNQ: 0,92, 9,32</td><td class="crd-td">-</td><td class="crd-td">530</td><td class="crd-td">790</td><td class="crd-td">655</td><td class="crd-td">-</td><td class="crd-td">790 (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Munda</strong></td><td class="crd-td">COG: 1,16, 17,36</td><td class="crd-td">331</td><td class="crd-td">628</td><td class="crd-td">607</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">680 (700AD)</td></tr>
<tr><td class="crd-td"><strong>Kitina</strong></td><td class="crd-td">COG: -4,27, 12</td><td class="crd-td">347</td><td class="crd-td">449</td><td class="crd-td">553</td><td class="crd-td">618</td><td class="crd-td">-</td><td class="crd-td">640 (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Moanda</strong></td><td class="crd-td">GAB: -1,55, 13,22</td><td class="crd-td">355</td><td class="crd-td">473</td><td class="crd-td">571</td><td class="crd-td">623</td><td class="crd-td">-</td><td class="crd-td">640 (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Okala</strong></td><td class="crd-td">GAB: 0,49, 9,41</td><td class="crd-td">525</td><td class="crd-td">481</td><td class="crd-td">559</td><td class="crd-td">600</td><td class="crd-td">620</td><td class="crd-td">620 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Iroungou</strong></td><td class="crd-td">GAB: -2,04, 11,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">410</td><td class="crd-td">-</td><td class="crd-td">560 (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Otoumbi</strong></td><td class="crd-td">GAB: -0,06, 11,12</td><td class="crd-td">335</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">430 (300AD)</td></tr>
<tr><td class="crd-td"><strong>Motaba</strong></td><td class="crd-td">COG: 2,71, 16,93</td><td class="crd-td">-</td><td class="crd-td">340</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">370 (400AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in the Western Equatorial Rainforest (Ogooue-Sangha) from 1AD to 1500AD.</figcaption>
</figure>

## Inner Congo Basin, Mongo and Ubangi-Uele

Table \ref{tab:sub-central-congo} documents 5 settlements across the inner Congo and Ubangi waterways, capturing Imbonga, Batalimo, Batalimo-Maluba, Bolondo and Iyonda [@Seidensticker2025SurveyFrom; @Coutros2025SurveyAnd].

<figure class="crd-table-figure" id="tab:sub-central-congo">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Iyonda Site</strong></td><td class="crd-td">COD: -0,04, 18,18</td><td class="crd-td">442</td><td class="crd-td">665</td><td class="crd-td">830</td><td class="crd-td">918</td><td class="crd-td">-</td><td class="crd-td">960 (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Bolondo</strong></td><td class="crd-td">COD: -0,31, 21,25</td><td class="crd-td">-</td><td class="crd-td">384</td><td class="crd-td">594</td><td class="crd-td">687</td><td class="crd-td">720</td><td class="crd-td">720 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Batalimo</strong></td><td class="crd-td">CAF: 3,68, 18,52</td><td class="crd-td">333</td><td class="crd-td">498</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">510 (600AD)</td></tr>
<tr><td class="crd-td"><strong>Imbonga Settlement</strong></td><td class="crd-td">COD: -0,8, 19,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">248 (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Batalimo-Maluba Site</strong></td><td class="crd-td">CAF: 3,7, 18,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">209 (1000BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed settlements in the Inner Congo Basin, Mongo and Ubangi-Uele zone from 1AD to 1500AD.</figcaption>
</figure>

## Lower Congo, Kingdom of Kongo and Angola

Table \ref{tab:sub-kongo} compiles 11 settlements across Angola, western Democratic Republic of the Congo and coastal Republic of the Congo, anchored by Mbanza Congo (38k by 1491AD), Soyo (4,8k), Mbanza Nsundi (4,2k) and Mbanza Mbata (3,9k) [@Thornton1982TheKingdom; @Doman2025HumanRemains].

<figure class="crd-table-figure" id="tab:sub-kongo">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mbanza Congo</strong></td><td class="crd-td">AGO: -6,25, 14,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">38k (1491AD)</td></tr>
<tr><td class="crd-td"><strong>Soyo</strong></td><td class="crd-td">AGO: -6,19, 12,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">4,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mbanza Nsundi</strong></td><td class="crd-td">COD: -4,95, 14,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mbanza Mbata</strong></td><td class="crd-td">AGO: -6,05, 15,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">3,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mbanza 2-Nduizi</strong></td><td class="crd-td">COD: -5,74, 13,73</td><td class="crd-td">433</td><td class="crd-td">547</td><td class="crd-td">666</td><td class="crd-td">777</td><td class="crd-td">-</td><td class="crd-td">820 (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Sakuzi</strong></td><td class="crd-td">COD: -5,17, 14,01</td><td class="crd-td">-</td><td class="crd-td">491</td><td class="crd-td">599</td><td class="crd-td">700</td><td class="crd-td">-</td><td class="crd-td">740 (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Benfica-Luanda</strong></td><td class="crd-td">AGO: -9,03, 13,17</td><td class="crd-td">-</td><td class="crd-td">490</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">580 (900AD)</td></tr>
<tr><td class="crd-td"><strong>Tchissanga</strong></td><td class="crd-td">COG: -4,54, 11,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">540 (300BC)</td></tr>
<tr><td class="crd-td"><strong>Benfica Shellmidden</strong></td><td class="crd-td">AGO: -8,97, 13,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">218 (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Ngovo Cave</strong></td><td class="crd-td">COD: -5,28, 14,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">154 (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Camissombo Site</strong></td><td class="crd-td">AGO: -8,16, 20,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">122 (1000BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements in the Lower Congo, Kingdom of Kongo and Angola from 1AD to 1500AD.</figcaption>
</figure>

## Great Lakes Urewe Core

Table \ref{tab:sub-great-lakes} presents 10 settlements across Uganda, Rwanda, Burundi, eastern Democratic Republic of the Congo and southern South Sudan, from Urewe iron-smelting hubs at Kabusanze, Mucucu and Mirama to the earthwork complexes of Bigo bya Mugenyi (4,8k), Ntusi (3,6k) and Munsa (2,2k) [@Connah2001AfricanCivilizations].

<figure class="crd-table-figure" id="tab:sub-great-lakes">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bigo bya Mugenyi</strong></td><td class="crd-td">UGA: 0,14, 31,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Ntusi</strong></td><td class="crd-td">UGA: 0,05, 31,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">3,6k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Munsa</strong></td><td class="crd-td">UGA: 0,83, 31,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kibiro</strong></td><td class="crd-td">UGA: 1,68, 31,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,2k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Mucucu</strong></td><td class="crd-td">RWA: -1,53, 30,57</td><td class="crd-td">385</td><td class="crd-td">513</td><td class="crd-td">631</td><td class="crd-td">698</td><td class="crd-td">-</td><td class="crd-td">720 (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Mirama</strong></td><td class="crd-td">BDI: -3,38, 29,98</td><td class="crd-td">364</td><td class="crd-td">478</td><td class="crd-td">588</td><td class="crd-td">661</td><td class="crd-td">-</td><td class="crd-td">680 (1380AD)</td></tr>
<tr><td class="crd-td"><strong>Kabusanze</strong></td><td class="crd-td">RWA: -2,5, 29,7</td><td class="crd-td">-</td><td class="crd-td">480</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">520 (700AD)</td></tr>
<tr><td class="crd-td"><strong>Ituri-Matangai</strong></td><td class="crd-td">COD: 1,49, 28,55</td><td class="crd-td">271</td><td class="crd-td">378</td><td class="crd-td">459</td><td class="crd-td">497</td><td class="crd-td">-</td><td class="crd-td">510 (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Nsongezi Rock Shelter</strong></td><td class="crd-td">UGA: -1, 30,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">51 (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Lokabulo Rock Shelter</strong></td><td class="crd-td">SSD: 4,75, 32,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">37 (1000BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed settlements in the Great Lakes Urewe Core (Kitara, Rwanda) from 1AD to 1500AD.</figcaption>
</figure>

## East African Rift Pastoralists and Savanna

Table \ref{tab:sub-east-rift} catalogues 10 sites across highland Kenya and northern Tanzania, combining early pastoralist and Urewe localities (Luxmanda, Gogo Falls, Njoro, Urewe) with the irrigated terraced town of Engaruka (2,8k) [@Vicente2021MaleBiased].

<figure class="crd-table-figure" id="tab:sub-east-rift">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Engaruka</strong></td><td class="crd-td">TZA: -2,99, 35,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Hyrax Hill Settlement</strong></td><td class="crd-td">KEN: -0,28, 36,1</td><td class="crd-td">340</td><td class="crd-td">433</td><td class="crd-td">522</td><td class="crd-td">683</td><td class="crd-td">-</td><td class="crd-td">790 (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Urewe</strong></td><td class="crd-td">KEN: -0,02, 34,33</td><td class="crd-td">463</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">540 (100AD)</td></tr>
<tr><td class="crd-td"><strong>Luxmanda Pastoral Settlement</strong></td><td class="crd-td">TZA: -4,25, 35,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">485 (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Wadh Lang'o</strong></td><td class="crd-td">KEN: -0,35, 34,81</td><td class="crd-td">-</td><td class="crd-td">485</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">485 (500AD)</td></tr>
<tr><td class="crd-td"><strong>Deloraine</strong></td><td class="crd-td">KEN: -0,18, 35,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">465 (950AD)</td></tr>
<tr><td class="crd-td"><strong>Usenge</strong></td><td class="crd-td">KEN: -0,05, 34,13</td><td class="crd-td">-</td><td class="crd-td">420</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">420 (500AD)</td></tr>
<tr><td class="crd-td"><strong>Gogo Falls Settlement</strong></td><td class="crd-td">KEN: -0,97, 34,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">318 (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Njoro</strong></td><td class="crd-td">KEN: -0,33, 35,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">214 (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Lukenya Hill Shelter</strong></td><td class="crd-td">KEN: -1,47, 37,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">93 (1000BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed settlements in the East African Rift Pastoralists and Savanna zone from 1AD to 1500AD.</figcaption>
</figure>

## Swahili City-States and Maritime Coast

Table \ref{tab:sub-swahili} records 29 coastal ports and hinterland sites from southern Somalia and eastern Ethiopia down to Mozambique Island, led by Muqdisho (24,8k), Kilwa Kisiwani (14,8k), Marka (6,8k), Mombasa (6,8k), Malindi (6k) and Pate (5,6k) [@Spear2000EarlySwahili; @Alders2026TownlandsThe; @Lubao2023FishingSongs].

<figure class="crd-table-figure" id="tab:sub-swahili">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Muqdisho</strong></td><td class="crd-td">SOM: 2,06, 45,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">23k</td><td class="crd-td">-</td><td class="crd-td">24,8k (1331AD)</td></tr>
<tr><td class="crd-td"><strong>Kilwa Kisiwani</strong></td><td class="crd-td">TZA: -8,96, 39,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">10,3k</td><td class="crd-td">-</td><td class="crd-td">14,8k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Marka</strong></td><td class="crd-td">SOM: 1,71, 44,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">6,8k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Mombasa</strong></td><td class="crd-td">KEN: -3,99, 39,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,3k</td><td class="crd-td">-</td><td class="crd-td">6,8k (1331AD)</td></tr>
<tr><td class="crd-td"><strong>Malindi</strong></td><td class="crd-td">KEN: -3,2, 40,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">6k (1498AD)</td></tr>
<tr><td class="crd-td"><strong>Pate</strong></td><td class="crd-td">KEN: -2,14, 41,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">5,6k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Manda</strong></td><td class="crd-td">KEN: -2,23, 40,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,8k</td><td class="crd-td">1,8k</td><td class="crd-td">4,2k (1250AD)</td></tr>
<tr><td class="crd-td"><strong>Tumbatu</strong></td><td class="crd-td">TZA: -5,83, 39,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">4,2k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Lamu</strong></td><td class="crd-td">KEN: -2,27, 40,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">4,1k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Tumbe</strong></td><td class="crd-td">TZA: -4,95, 39,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">3,9k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Barawa E Al Bambar</strong></td><td class="crd-td">SOM: 1,11, 44,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Mareg</strong></td><td class="crd-td">SOM: 3,77, 47,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Gedi</strong></td><td class="crd-td">KEN: -3,31, 40,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">3,6k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Ungwana</strong></td><td class="crd-td">KEN: -2,52, 40,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Shanga</strong></td><td class="crd-td">KEN: -2,12, 41,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Kisimani Mafia</strong></td><td class="crd-td">TZA: -7,95, 39,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Unguja Ukuu</strong></td><td class="crd-td">TZA: -6,31, 39,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (950AD)</td></tr>
<tr><td class="crd-td"><strong>Moçambique</strong></td><td class="crd-td">MOZ: -15,03, 40,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1498AD)</td></tr>
<tr><td class="crd-td"><strong>Mtwapa</strong></td><td class="crd-td">KEN: -3,94, 39,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Songo Mnara</strong></td><td class="crd-td">TZA: -9,04, 39,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Faza</strong></td><td class="crd-td">KEN: -2,06, 41,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Kaole</strong></td><td class="crd-td">TZA: -6,47, 38,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">949</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Dirre Sheikh Hussein</strong></td><td class="crd-td">ETH: 7,75, 40,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Siyu</strong></td><td class="crd-td">KEN: -2,09, 41,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Gondershe</strong></td><td class="crd-td">SOM: 1,87, 45,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Kwale</strong></td><td class="crd-td">KEN: -4,17, 39,45</td><td class="crd-td">-</td><td class="crd-td">389</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">445 (350AD)</td></tr>
<tr><td class="crd-td"><strong>Mlambalasi</strong></td><td class="crd-td">TZA: -7,58, 35,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">310</td><td class="crd-td">-</td><td class="crd-td">390 (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Kahinju Site</strong></td><td class="crd-td">KEN: -3,04, 38,93</td><td class="crd-td">282</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">310 (400AD)</td></tr>
<tr><td class="crd-td"><strong>Ele Bor Rock Shelter</strong></td><td class="crd-td">KEN: 3,52, 38,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">67 (1000BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Individually assessed settlements along the Swahili City-States littoral from 1AD to 1500AD.</figcaption>
</figure>

## Upemba Depression, Katanga and Proto-Luba

Table \ref{tab:sub-upemba} covers 7 Kisalian-Kabambian and Copperbelt sites across southern Democratic Republic of the Congo and north-western Zambia, anchored by Sanga (2,6k), Malemba-Nkulu (2k), Kamilamba (1,5k) and Kansanshi (1,5k) [@Stephens2023ReconstructingThe].

<figure class="crd-table-figure" id="tab:sub-upemba">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Sanga</strong></td><td class="crd-td">COD: -8,18, 26,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1250AD)</td></tr>
<tr><td class="crd-td"><strong>Malemba-Nkulu</strong></td><td class="crd-td">COD: -8,04, 26,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2k</td><td class="crd-td">1,6k</td><td class="crd-td">2k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Kamilamba</strong></td><td class="crd-td">COD: -8,32, 26,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,5k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Kansanshi</strong></td><td class="crd-td">ZMB: -12,1, 26,43</td><td class="crd-td">-</td><td class="crd-td">460</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,5k (1350AD)</td></tr>
<tr><td class="crd-td"><strong>Katoto</strong></td><td class="crd-td">COD: -9,12, 25,82</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,3k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Kikulu</strong></td><td class="crd-td">COD: -8,65, 26,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">803</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,2k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Kambove-Precolonial</strong></td><td class="crd-td">COD: -10,72, 26,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">633</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">1,2k (1450AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Individually assessed settlements in the Upemba Depression, Katanga and Proto-Luba zone from 1AD to 1500AD.</figcaption>
</figure>

## Zambezi Corridor, Maravi and Ingombe Ilede

Table \ref{tab:sub-zambezi} lists 5 settlements across Malawi and central-eastern Zambia, spanning early lakeside villages at Nkope Bay and Ntandabale to the Maravi capital of Mankhamba (2,4k) [@Stephens2023ReconstructingThe].

<figure class="crd-table-figure" id="tab:sub-zambezi">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mankhamba</strong></td><td class="crd-td">MWI: -14,3, 34,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Nkope Bay</strong></td><td class="crd-td">MWI: -14,2, 35,03</td><td class="crd-td">-</td><td class="crd-td">425</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">510 (650AD)</td></tr>
<tr><td class="crd-td"><strong>Ntandabale</strong></td><td class="crd-td">ZMB: -15,39, 28,42</td><td class="crd-td">-</td><td class="crd-td">348</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">385 (550AD)</td></tr>
<tr><td class="crd-td"><strong>Kalemba Rock Shelter</strong></td><td class="crd-td">ZMB: -14,12, 32,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">56 (1000BC)</td></tr>
<tr><td class="crd-td"><strong>Fingira Rock Shelter</strong></td><td class="crd-td">MWI: -10,78, 33,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">33 (1000BC)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Individually assessed settlements in the Zambezi Corridor and Maravi zone from 1AD to 1500AD.</figcaption>
</figure>

## Mapungubwe, Great Zimbabwe and Mutapa

Table \ref{tab:sub-zimbabwe} presents 19 plateau and Limpopo valley sites across Zimbabwe, eastern Botswana, northern South Africa, southern Zambia and central Mozambique, led by Great Zimbabwe (20k), Khami (5,4k), Mapungubwe (5k), Toutswemogala (4,9k), Sofala (4,8k), Bosutswe (3,2k) and Ingombe Ilede (2,7k) [@ShadreckChiri1800WhatWas; @Chirikure2014MapelaHill; @Mukwende2017ArchaeologicalStudy].

<figure class="crd-table-figure" id="tab:sub-zimbabwe">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Great Zimbabwe</strong></td><td class="crd-td">ZWE: -20,27, 30,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20k</td><td class="crd-td">10,2k</td><td class="crd-td">2,8k</td><td class="crd-td">20k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Khami</strong></td><td class="crd-td">ZWE: -20,16, 28,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">5,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mapungubwe</strong></td><td class="crd-td">ZAF: -22,21, 29,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k (1250AD)</td></tr>
<tr><td class="crd-td"><strong>Toutswemogala</strong></td><td class="crd-td">BWA: -22,23, 27,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Sofala</strong></td><td class="crd-td">MOZ: -20,15, 34,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">-</td><td class="crd-td">4,8k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Bosutswe</strong></td><td class="crd-td">BWA: -21,95, 26,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">2,2k</td><td class="crd-td">1,6k</td><td class="crd-td">3,2k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Ingombe Ilede</strong></td><td class="crd-td">ZMB: -16,18, 28,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Mapela Hill</strong></td><td class="crd-td">ZWE: -21,65, 28,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1280AD)</td></tr>
<tr><td class="crd-td"><strong>Bambandyanalo</strong></td><td class="crd-td">ZAF: -22,22, 29,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Thulamela</strong></td><td class="crd-td">ZAF: -22,43, 31,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">780</td><td class="crd-td">-</td><td class="crd-td">1,5k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>Chibuene</strong></td><td class="crd-td">MOZ: -22,05, 35,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">984</td><td class="crd-td">-</td><td class="crd-td">1,4k (950AD)</td></tr>
<tr><td class="crd-td"><strong>Manyikeni</strong></td><td class="crd-td">MOZ: -22,19, 34,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">853</td><td class="crd-td">-</td><td class="crd-td">1,3k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Tsindi</strong></td><td class="crd-td">ZWE: -18,1, 31,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">931</td><td class="crd-td">890</td><td class="crd-td">1,2k (1380AD)</td></tr>
<tr><td class="crd-td"><strong>Malumba</strong></td><td class="crd-td">ZWE: -22, 30,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">540</td><td class="crd-td">833</td><td class="crd-td">-</td><td class="crd-td">980 (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Eiland</strong></td><td class="crd-td">ZAF: -23,77, 30,63</td><td class="crd-td">-</td><td class="crd-td">387</td><td class="crd-td">660</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">720 (1100AD)</td></tr>
<tr><td class="crd-td"><strong>Kalomo</strong></td><td class="crd-td">ZMB: -17,02, 26,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">658</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">680 (950AD)</td></tr>
<tr><td class="crd-td"><strong>Silver Leaves</strong></td><td class="crd-td">ZAF: -23,88, 30,2</td><td class="crd-td">-</td><td class="crd-td">395</td><td class="crd-td">460</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">460 (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Toteng</strong></td><td class="crd-td">BWA: -20,37, 22,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">387</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">425 (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Kumadzulo</strong></td><td class="crd-td">ZMB: -17,78, 25,57</td><td class="crd-td">-</td><td class="crd-td">290</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">420 (650AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 10.</span> Individually assessed settlements in the Mapungubwe, Great Zimbabwe and Mutapa zone from 1AD to 1500AD.</figcaption>
</figure>

## Highveld Sotho-Tswana and Nguni Iron Age

Table \ref{tab:sub-nguni} details 4 Early and Late Iron Age agro-pastoral centres in South Africa: Phalaborwa-Kgopolwe (1,5k), KwaGandaganda (790), Ndondondwane (620) and Broederstroom (490) [@Tallman2023WholeGenomes; @Vicente2021MaleBiased].

<figure class="crd-table-figure" id="tab:sub-nguni">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Phalaborwa-Kgopolwe</strong></td><td class="crd-td">ZAF: -23,94, 31,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">620</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,5k (1450AD)</td></tr>
<tr><td class="crd-td"><strong>KwaGandaganda</strong></td><td class="crd-td">ZAF: -29,67, 30,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">640</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">790 (850AD)</td></tr>
<tr><td class="crd-td"><strong>Ndondondwane</strong></td><td class="crd-td">ZAF: -28,88, 31,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">620 (850AD)</td></tr>
<tr><td class="crd-td"><strong>Broederstroom</strong></td><td class="crd-td">ZAF: -25,77, 27,84</td><td class="crd-td">-</td><td class="crd-td">467</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">490 (550AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 11.</span> Individually assessed settlements in the Highveld Sotho-Tswana and Nguni Iron Age zone from 1AD to 1500AD.</figcaption>
</figure>

## Khoekhoe and San Cape, Namib and Kalahari

Table \ref{tab:sub-khoisan} records 3 pastoral and foraging sites across north-western Botswana, the Western Cape and Namibia: Nqoma (890), Kasteelberg (395) and Geduld (230) [@Vicente2021MaleBiased].

<figure class="crd-table-figure" id="tab:sub-khoisan">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Nqoma</strong></td><td class="crd-td">BWA: -18,73, 21,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">852</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">890 (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Kasteelberg</strong></td><td class="crd-td">ZAF: -32,73, 17,93</td><td class="crd-td">-</td><td class="crd-td">275</td><td class="crd-td">386</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">395 (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Geduld</strong></td><td class="crd-td">NAM: -20,17, 15,5</td><td class="crd-td">-</td><td class="crd-td">195</td><td class="crd-td">224</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">230 (1100AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 12.</span> Individually assessed settlements in the Khoekhoe and San Cape, Namib and Kalahari zone from 1AD to 1500AD.</figcaption>
</figure>

# Limitations

Three caveats govern this settlement ledger. First, 39 of the 142 sites hold single-date observations, meaning interpolated benchmark columns display a hyphen outside their recorded occupation span. Second, site recovery favours monumental stone enclosures, Swahili coral towns and major Nigerian or Kongo centres over perishable rainforest hamlets [@Bostoen2018BantuFirst; @Alders2026TownlandsThe]. Third, combined table totals represent nucleated and excavated settlements rather than full regional headcounts, which appear in the companion review.

# Conclusion

Taken together, the 142 individually assessed settlements document the spatial expansion of farming villages, metallurgical centres, maritime ports and plateau capitals across 23 Sub-Saharan countries between 1000BC and 1500AD, anchoring the regional demographic series ahead of the early modern era.

# Appendix

## Sub-Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} sums the individually assessed site counts and combined interpolated site populations across all twelve sub-regions from 1000BC to 1500AD.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion (Sites)</th><th class="crd-th">1000BC</th><th class="crd-th">1AD</th><th class="crd-th">500AD</th><th class="crd-th">1000AD</th><th class="crd-th">1300AD</th><th class="crd-th">1500AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cameroon Grassfields Bantu Homeland (30)</strong></td><td class="crd-td">805</td><td class="crd-td">7k</td><td class="crd-td">5,5k</td><td class="crd-td">101,4k</td><td class="crd-td">9,7k</td><td class="crd-td">38,4k</td></tr>
<tr><td class="crd-td"><strong>Western Equatorial Rainforest (Ogooue-Sangha) (9)</strong></td><td class="crd-td">0</td><td class="crd-td">1,9k</td><td class="crd-td">2,9k</td><td class="crd-td">3,1k</td><td class="crd-td">2,9k</td><td class="crd-td">620</td></tr>
<tr><td class="crd-td"><strong>Inner Congo Basin, Mongo and Ubangi-Uele (5)</strong></td><td class="crd-td">457</td><td class="crd-td">775</td><td class="crd-td">1,5k</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">720</td></tr>
<tr><td class="crd-td"><strong>Lower Congo, Kingdom of Kongo and Angola (11)</strong></td><td class="crd-td">494</td><td class="crd-td">433</td><td class="crd-td">1,5k</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">12,9k</td></tr>
<tr><td class="crd-td"><strong>Great Lakes Urewe Core (Kitara, Rwanda) (10)</strong></td><td class="crd-td">88</td><td class="crd-td">1k</td><td class="crd-td">1,8k</td><td class="crd-td">1,7k</td><td class="crd-td">6,3k</td><td class="crd-td">2,1k</td></tr>
<tr><td class="crd-td"><strong>East African Rift Pastoralists and Savanna (10)</strong></td><td class="crd-td">1,4k</td><td class="crd-td">803</td><td class="crd-td">1,3k</td><td class="crd-td">522</td><td class="crd-td">683</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>Swahili City-States (Lamu, Mombasa, Zanzibar, Kilwa) (29)</strong></td><td class="crd-td">67</td><td class="crd-td">282</td><td class="crd-td">389</td><td class="crd-td">22,1k</td><td class="crd-td">79,1k</td><td class="crd-td">1,8k</td></tr>
<tr><td class="crd-td"><strong>Upemba Depression, Katanga and Proto-Luba (7)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">460</td><td class="crd-td">7,1k</td><td class="crd-td">10,7k</td><td class="crd-td">1,6k</td></tr>
<tr><td class="crd-td"><strong>Zambezi Corridor, Maravi and Ingombe Ilede (5)</strong></td><td class="crd-td">89</td><td class="crd-td">0</td><td class="crd-td">772</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>Mapungubwe, Great Zimbabwe and Mutapa (19)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">1,1k</td><td class="crd-td">30,1k</td><td class="crd-td">23,3k</td><td class="crd-td">10,7k</td></tr>
<tr><td class="crd-td"><strong>Highveld Sotho-Tswana and Nguni Iron Age (4)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">467</td><td class="crd-td">1,3k</td><td class="crd-td">1,2k</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>Khoekhoe and San Cape, Namib and Kalahari (3)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">470</td><td class="crd-td">1,5k</td><td class="crd-td">0</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>All Subregions (142)</strong></td><td class="crd-td">3,4k</td><td class="crd-td">12,2k</td><td class="crd-td">18,3k</td><td class="crd-td">171,4k</td><td class="crd-td">137k</td><td class="crd-td">69k</td></tr>
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
