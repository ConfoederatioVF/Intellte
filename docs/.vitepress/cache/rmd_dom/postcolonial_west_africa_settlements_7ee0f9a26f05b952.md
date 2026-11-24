---
title: "Post-Colonial West Africa (1957-Present)"
subtitle: "Settlement Gazetteer: 4.126 Urban Centres and Towns (1957AD-2025AD)"
date: "23 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: postcolonial_west_africa_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 4.126 assessed urban centres and towns across nine Guinea-region states and six neighbouring border buffers between 1957AD and 2025AD."
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

This gazetteer compiles spatial coordinates, administrative provenance and multi-year population series for 4.126 individually assessed urban centres and towns across nine Guinea-region sovereign states and six bordering catchment zones between 1957AD and 2025AD. Screened from 10.813 candidate municipal and agglomeration records (6.687 duplicate alias records excluded), the retained entries span 15.307 dated observations, distinguishing 4.048 municipal city-proper records from 78 continuous urban agglomerations. Active interpolated entries rise from 296 towns in 1957AD to 597 in 1978AD, 999 in 1999AD and 2.694 in 2025AD, tracing West Africa's metropolitan surge from Lagos (16,11M agglomeration), Onitsha (10,35M), Abidjan (6,72M), Kano (6,43M) and Accra (5,43M) down to regional market centres across Benin, Togo, Guinea, Sierra Leone, Liberia and Guinea-Bissau.



# Background

Tracking urban populations across post-colonial West Africa requires harmonising three distinct statistical traditions: Anglophone national census authorities in Nigeria, Ghana, Sierra Leone and Liberia; Francophone *recensements généraux* across Côte d'Ivoire, Guinea, Benin and Togo; and Lusophone enumerations in Guinea-Bissau [@NPC2010NigeriaCensus; @GSS2021GhanaPHC; @INS2022CoteIvoireRGPH; @Caldwell2013AfricanDemographic]. Because municipal boundaries remained static for decades in many capitals even as built-up suburbs spilled across provincial and state lines, municipal counts alone understate real metropolitan scale in Lagos, Abidjan, Accra, Lomé and Cotonou [@Onilude2023AnalysisLand; @Folawewo2024UrbanizationWithout; @Bank2015RisingThrough]. Pairing official municipal series with satellite-delimited urban agglomerations from OECD/SWAC Africapolis permits consistent comparison across all fifteen jurisdictions represented in the settlement ledger [@OECD2024Africapolis].

# Methodology

## Candidate Screening and Scope Classification

Candidate settlement records were screened across official Nigerian, Ghanaian, Ivorian, Beninese, Togolese, Guinean, Sierra Leonean, Liberian and Guinea-Bissau statistical series alongside Africapolis urban morphology footprints [@NPC2010NigeriaCensus; @GSS2021GhanaPHC; @INS2022CoteIvoireRGPH; @OECD2024Africapolis]. Removing 6.687 duplicate alias records within the 2.088.553 km² study domain bounded over geoBoundaries Admin-1 polygons [@Runfola2020GeoBoundaries] retained 4.126 settlements across 15.307 dated observations. Table \ref{tab:jurisdiction-summary} summarises site counts, observation totals, spatial scope splits and combined interpolated urban populations across all nine sovereign Guinea-region states and six neighbouring border buffers.

<figure class="crd-table-figure" id="tab:jurisdiction-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Jurisdiction</th><th class="crd-th">Sites</th><th class="crd-th">City</th><th class="crd-th">Metro</th><th class="crd-th">Obs</th><th class="crd-th">1957AD</th><th class="crd-th">1999AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Nigeria</strong></td><td class="crd-td">1.683</td><td class="crd-td">1.677</td><td class="crd-td">6</td><td class="crd-td">7.162</td><td class="crd-td">6,49M</td><td class="crd-td">43,2M</td><td class="crd-td">140,1M</td></tr>
<tr><td class="crd-td"><strong>Ghana</strong></td><td class="crd-td">295</td><td class="crd-td">278</td><td class="crd-td">17</td><td class="crd-td">1.315</td><td class="crd-td">1,43M</td><td class="crd-td">10,26M</td><td class="crd-td">18,75M</td></tr>
<tr><td class="crd-td"><strong>Côte d'Ivoire</strong></td><td class="crd-td">623</td><td class="crd-td">618</td><td class="crd-td">5</td><td class="crd-td">2.115</td><td class="crd-td">553,7k</td><td class="crd-td">9,39M</td><td class="crd-td">17,18M</td></tr>
<tr><td class="crd-td"><strong>Benin</strong></td><td class="crd-td">209</td><td class="crd-td">207</td><td class="crd-td">2</td><td class="crd-td">823</td><td class="crd-td">362,9k</td><td class="crd-td">3,52M</td><td class="crd-td">8,33M</td></tr>
<tr><td class="crd-td"><strong>Togo</strong></td><td class="crd-td">101</td><td class="crd-td">91</td><td class="crd-td">10</td><td class="crd-td">399</td><td class="crd-td">244,2k</td><td class="crd-td">2,4M</td><td class="crd-td">5,62M</td></tr>
<tr><td class="crd-td"><strong>Guinea</strong></td><td class="crd-td">88</td><td class="crd-td">69</td><td class="crd-td">19</td><td class="crd-td">428</td><td class="crd-td">385,3k</td><td class="crd-td">4,25M</td><td class="crd-td">11,71M</td></tr>
<tr><td class="crd-td"><strong>Sierra Leone</strong></td><td class="crd-td">35</td><td class="crd-td">33</td><td class="crd-td">2</td><td class="crd-td">239</td><td class="crd-td">318,8k</td><td class="crd-td">2,13M</td><td class="crd-td">3,5M</td></tr>
<tr><td class="crd-td"><strong>Liberia</strong></td><td class="crd-td">48</td><td class="crd-td">34</td><td class="crd-td">14</td><td class="crd-td">184</td><td class="crd-td">197,9k</td><td class="crd-td">2,25M</td><td class="crd-td">2,55M</td></tr>
<tr><td class="crd-td"><strong>Guinea-Bissau</strong></td><td class="crd-td">35</td><td class="crd-td">34</td><td class="crd-td">1</td><td class="crd-td">91</td><td class="crd-td">111,5k</td><td class="crd-td">646,9k</td><td class="crd-td">851,4k</td></tr>
<tr><td class="crd-td"><strong>Niger (Buffer)</strong></td><td class="crd-td">898</td><td class="crd-td">898</td><td class="crd-td">0</td><td class="crd-td">1.989</td><td class="crd-td">28,6k</td><td class="crd-td">351,5k</td><td class="crd-td">1,86M</td></tr>
<tr><td class="crd-td"><strong>Cameroon (Buffer)</strong></td><td class="crd-td">38</td><td class="crd-td">38</td><td class="crd-td">0</td><td class="crd-td">189</td><td class="crd-td">51k</td><td class="crd-td">542,1k</td><td class="crd-td">1,51M</td></tr>
<tr><td class="crd-td"><strong>Burkina Faso (Buffer)</strong></td><td class="crd-td">30</td><td class="crd-td">29</td><td class="crd-td">1</td><td class="crd-td">161</td><td class="crd-td">14,4k</td><td class="crd-td">193,5k</td><td class="crd-td">768,4k</td></tr>
<tr><td class="crd-td"><strong>Senegal (Buffer)</strong></td><td class="crd-td">23</td><td class="crd-td">23</td><td class="crd-td">0</td><td class="crd-td">127</td><td class="crd-td">48,9k</td><td class="crd-td">338,8k</td><td class="crd-td">683,8k</td></tr>
<tr><td class="crd-td"><strong>Mali (Buffer)</strong></td><td class="crd-td">16</td><td class="crd-td">16</td><td class="crd-td">0</td><td class="crd-td">68</td><td class="crd-td">0</td><td class="crd-td">58,2k</td><td class="crd-td">271k</td></tr>
<tr><td class="crd-td"><strong>Chad (Buffer)</strong></td><td class="crd-td">4</td><td class="crd-td">3</td><td class="crd-td">1</td><td class="crd-td">17</td><td class="crd-td">182,8k</td><td class="crd-td">1,36M</td><td class="crd-td">2,02M</td></tr>
<tr><td class="crd-td"><strong>All 15 Jurisdictions</strong></td><td class="crd-td">4.126</td><td class="crd-td">4.048</td><td class="crd-td">78</td><td class="crd-td">15.307</td><td class="crd-td">10,43M</td><td class="crd-td">80,91M</td><td class="crd-td">215,7M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Summary of 4.126 assessed settlements across nine Guinea-region sovereign states and six cross-border catchment buffers (1957AD to 2025AD).</figcaption>
</figure>

## Benchmark Interpolation and Table Selection

Because printing all 4.126 entries verbatim would exceed 140 pages, Tables \ref{tab:urb-nigeria} through \ref{tab:urb-buffer} present the leading urban hierarchy and regional administrative centres for every Guinea-region state alongside the cross-border buffer, reporting linearly interpolated populations at 1960AD, 1980AD, 2000AD and 2025AD together with each settlement's exact peak population and date. Eras prior to initial observation or following municipal boundary absorption are marked with a hyphen (-).

# Testing and Validation

Across all 4.126 assessed settlements, rank-size regression on peak populations yields $q = 1,07$ ($R^2 = 0,98$, n=180) in the upper urban tier and $q = 1,33$ ($R^2 = 0,84$) across the full ledger, matching the 3.927 spatially deduplicated urban peaks plotted in Figure \ref{fig:settlements-rank}. Preserving city-proper and metropolitan entries in separate tagged rows ensures zero double-counting when calibrating urban primacy against national census totals [@OECD2024Africapolis; @Folawewo2024UrbanizationWithout].

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-postcolonial-west-africa-settlements/fig_03_rank_size.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Zipf rank-size curve across 3.927 deduplicated settlements (q = 1,07, R² = 0,99) and top ten Admin-1 densities in 2025AD.</figcaption>
</figure>

# Results

## Nigeria

Table \ref{tab:urb-nigeria} lists the 24 leading Nigerian urban centres and agglomerations out of 1.683 assessed Nigerian entries, spanning Lagos (16,11M), Onitsha (10,35M), Kano (6,43M), Ibadan (4,6M), Abuja (3,86M), Port Harcourt (3,77M), Uyo (3,27M), Ikorodu (2,59M), Maiduguri (2,39M), Kaduna (2,38M) and Aba (2M) [@NPC2010NigeriaCensus; @Onilude2023AnalysisLand; @Ali2024AccessibilityThe].

<figure class="crd-table-figure" id="tab:urb-nigeria">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1960AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lagos (Agglomeration)</strong></td><td class="crd-td">NGA: 6,67, 3,24</td><td class="crd-td">Metro</td><td class="crd-td">822,3k</td><td class="crd-td">2,69M</td><td class="crd-td">7,24M</td><td class="crd-td">16,11M</td><td class="crd-td">16,11M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Onitsha</strong></td><td class="crd-td">NGA: 5,82, 6,93</td><td class="crd-td">City</td><td class="crd-td">156,8k</td><td class="crd-td">392k</td><td class="crd-td">1,45M</td><td class="crd-td">10,35M</td><td class="crd-td">10,35M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kano</strong></td><td class="crd-td">NGA: 11,98, 8,53</td><td class="crd-td">City</td><td class="crd-td">213,1k</td><td class="crd-td">715k</td><td class="crd-td">2,05M</td><td class="crd-td">6,43M</td><td class="crd-td">6,43M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Lagos</strong></td><td class="crd-td">NGA: 6,67, 3,24</td><td class="crd-td">City</td><td class="crd-td">665k</td><td class="crd-td">1,06M</td><td class="crd-td">1,48M</td><td class="crd-td">-</td><td class="crd-td">5,2M (1991AD)</td></tr>
<tr><td class="crd-td"><strong>Ibadan</strong></td><td class="crd-td">NGA: 7,41, 3,94</td><td class="crd-td">City</td><td class="crd-td">528,1k</td><td class="crd-td">1,12M</td><td class="crd-td">2,01M</td><td class="crd-td">4,6M</td><td class="crd-td">4,6M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Abuja (Agglomeration)</strong></td><td class="crd-td">NGA: 9,06, 7,45</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">50k</td><td class="crd-td">360k</td><td class="crd-td">3,86M</td><td class="crd-td">3,86M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Port Harcourt</strong></td><td class="crd-td">NGA: 4,83, 7,03</td><td class="crd-td">City</td><td class="crd-td">150,8k</td><td class="crd-td">371k</td><td class="crd-td">899k</td><td class="crd-td">3,77M</td><td class="crd-td">3,77M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Uyo</strong></td><td class="crd-td">NGA: 5,08, 7,7</td><td class="crd-td">City</td><td class="crd-td">13,5k</td><td class="crd-td">80k</td><td class="crd-td">350k</td><td class="crd-td">3,27M</td><td class="crd-td">3,27M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ikorodu</strong></td><td class="crd-td">NGA: 6,67, 3,6</td><td class="crd-td">City</td><td class="crd-td">48,8k</td><td class="crd-td">112k</td><td class="crd-td">302k</td><td class="crd-td">2,59M</td><td class="crd-td">2,59M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Maiduguri</strong></td><td class="crd-td">NGA: 11,83, 13,13</td><td class="crd-td">City</td><td class="crd-td">95,3k</td><td class="crd-td">287k</td><td class="crd-td">582k</td><td class="crd-td">2,39M</td><td class="crd-td">2,39M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kaduna</strong></td><td class="crd-td">NGA: 10,52, 7,41</td><td class="crd-td">City</td><td class="crd-td">109,5k</td><td class="crd-td">407k</td><td class="crd-td">882k</td><td class="crd-td">2,38M</td><td class="crd-td">2,38M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Aba</strong></td><td class="crd-td">NGA: 5,21, 7,36</td><td class="crd-td">City</td><td class="crd-td">125,8k</td><td class="crd-td">300k</td><td class="crd-td">688k</td><td class="crd-td">2M</td><td class="crd-td">2M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Benin City</strong></td><td class="crd-td">NGA: 6,3, 5,63</td><td class="crd-td">City</td><td class="crd-td">103,4k</td><td class="crd-td">382k</td><td class="crd-td">907k</td><td class="crd-td">1,84M</td><td class="crd-td">1,84M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ilorin</strong></td><td class="crd-td">NGA: 8,48, 4,56</td><td class="crd-td">City</td><td class="crd-td">170,1k</td><td class="crd-td">361k</td><td class="crd-td">638k</td><td class="crd-td">1,83M</td><td class="crd-td">1,83M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Nsukka</strong></td><td class="crd-td">NGA: 6,85, 7,42</td><td class="crd-td">City</td><td class="crd-td">23,6k</td><td class="crd-td">41k</td><td class="crd-td">276k</td><td class="crd-td">1,74M</td><td class="crd-td">1,74M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Enugu</strong></td><td class="crd-td">NGA: 6,44, 7,52</td><td class="crd-td">City</td><td class="crd-td">105,4k</td><td class="crd-td">240k</td><td class="crd-td">471k</td><td class="crd-td">1,5M</td><td class="crd-td">1,5M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Oshogbo</strong></td><td class="crd-td">NGA: 7,78, 4,53</td><td class="crd-td">City</td><td class="crd-td">139,9k</td><td class="crd-td">196k</td><td class="crd-td">410k</td><td class="crd-td">1,28M</td><td class="crd-td">1,28M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Jos</strong></td><td class="crd-td">NGA: 9,87, 8,89</td><td class="crd-td">City</td><td class="crd-td">63,9k</td><td class="crd-td">237k</td><td class="crd-td">575k</td><td class="crd-td">1,27M</td><td class="crd-td">1,27M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Katsina</strong></td><td class="crd-td">NGA: 12,98, 7,61</td><td class="crd-td">City</td><td class="crd-td">63,2k</td><td class="crd-td">120k</td><td class="crd-td">237k</td><td class="crd-td">1,27M</td><td class="crd-td">1,27M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Warri</strong></td><td class="crd-td">NGA: 5,53, 5,75</td><td class="crd-td">City</td><td class="crd-td">42,3k</td><td class="crd-td">113k</td><td class="crd-td">309k</td><td class="crd-td">1,1M</td><td class="crd-td">1,1M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Abeokuta</strong></td><td class="crd-td">NGA: 7,14, 3,37</td><td class="crd-td">City</td><td class="crd-td">158k</td><td class="crd-td">278k</td><td class="crd-td">412k</td><td class="crd-td">1,07M</td><td class="crd-td">1,07M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Zaria</strong></td><td class="crd-td">NGA: 11,11, 7,72</td><td class="crd-td">City</td><td class="crd-td">77,9k</td><td class="crd-td">221k</td><td class="crd-td">506k</td><td class="crd-td">1,01M</td><td class="crd-td">1,01M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bauchi</strong></td><td class="crd-td">NGA: 10,31, 9,83</td><td class="crd-td">City</td><td class="crd-td">28,6k</td><td class="crd-td">118k</td><td class="crd-td">316k</td><td class="crd-td">896,1k</td><td class="crd-td">896,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Akure</strong></td><td class="crd-td">NGA: 7,25, 5,2</td><td class="crd-td">City</td><td class="crd-td">70,8k</td><td class="crd-td">181k</td><td class="crd-td">370k</td><td class="crd-td">890,4k</td><td class="crd-td">890,4k (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Leading twenty-four urban centres and agglomerations in Nigeria (1960AD to 2025AD).</figcaption>
</figure>

## Ghana

Table \ref{tab:urb-gha} records the 18 largest Ghanaian urban entries out of 295 assessed settlements, anchored by Accra (5,43M agglomeration, 2,07M proper), Kumasi (3,64M agglomeration, 2,04M proper), Sekondi-Takoradi (938,7k), Tamale (562,8k), Sunyani (322k), Techiman (264,6k), Cape Coast (238,4k) and Koforidua (237,5k) [@GSS2021GhanaPHC; @Bank2015RisingThrough].

<figure class="crd-table-figure" id="tab:urb-gha">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1960AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Accra (Agglomeration)</strong></td><td class="crd-td">GHA: 5,75, -0,08</td><td class="crd-td">Metro</td><td class="crd-td">337,8k</td><td class="crd-td">854,7k</td><td class="crd-td">2,17M</td><td class="crd-td">5,43M</td><td class="crd-td">5,43M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kumasi (Agglomeration)</strong></td><td class="crd-td">GHA: 6,67, -1,62</td><td class="crd-td">Metro</td><td class="crd-td">180,6k</td><td class="crd-td">448k</td><td class="crd-td">1,21M</td><td class="crd-td">3,64M</td><td class="crd-td">3,64M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Accra</strong></td><td class="crd-td">GHA: 5,75, -0,08</td><td class="crd-td">City</td><td class="crd-td">338k</td><td class="crd-td">965k</td><td class="crd-td">1,66M</td><td class="crd-td">-</td><td class="crd-td">2,07M (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Kumasi</strong></td><td class="crd-td">GHA: 6,67, -1,62</td><td class="crd-td">City</td><td class="crd-td">224,6k</td><td class="crd-td">453,7k</td><td class="crd-td">1,17M</td><td class="crd-td">-</td><td class="crd-td">2,04M (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Takoradi (Agglomeration)</strong></td><td class="crd-td">GHA: 4,98, -1,7</td><td class="crd-td">Metro</td><td class="crd-td">40,9k</td><td class="crd-td">105,7k</td><td class="crd-td">289,6k</td><td class="crd-td">938,7k</td><td class="crd-td">938,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tamale (Agglomeration)</strong></td><td class="crd-td">GHA: 9,44, -0,85</td><td class="crd-td">Metro</td><td class="crd-td">40,4k</td><td class="crd-td">118,3k</td><td class="crd-td">202,3k</td><td class="crd-td">562,8k</td><td class="crd-td">562,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tamale</strong></td><td class="crd-td">GHA: 9,44, -0,85</td><td class="crd-td">City</td><td class="crd-td">53k</td><td class="crd-td">121k</td><td class="crd-td">202,3k</td><td class="crd-td">-</td><td class="crd-td">371,4k (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Lome/Aflao/Tokor [GHA] 2</strong></td><td class="crd-td">GHA: 6,1, 1,15</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">17,6k</td><td class="crd-td">38,9k</td><td class="crd-td">338k</td><td class="crd-td">338k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sunyani (Agglomeration)</strong></td><td class="crd-td">GHA: 7,32, -2,33</td><td class="crd-td">Metro</td><td class="crd-td">12,2k</td><td class="crd-td">33,8k</td><td class="crd-td">77k</td><td class="crd-td">322k</td><td class="crd-td">322k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Techiman (Agglomeration)</strong></td><td class="crd-td">GHA: 7,6, -1,94</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">20,5k</td><td class="crd-td">56,2k</td><td class="crd-td">264,6k</td><td class="crd-td">264,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Cape Coast</strong></td><td class="crd-td">GHA: 5,14, -1,27</td><td class="crd-td">City</td><td class="crd-td">41,3k</td><td class="crd-td">63k</td><td class="crd-td">82,3k</td><td class="crd-td">238,4k</td><td class="crd-td">238,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Koforidua (Agglomeration)</strong></td><td class="crd-td">GHA: 6,09, -0,27</td><td class="crd-td">Metro</td><td class="crd-td">34,9k</td><td class="crd-td">54,9k</td><td class="crd-td">97,4k</td><td class="crd-td">237,5k</td><td class="crd-td">237,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sekondi</strong></td><td class="crd-td">GHA: 4,93, -1,76</td><td class="crd-td">City</td><td class="crd-td">64,1k</td><td class="crd-td">107,2k</td><td class="crd-td">175,4k</td><td class="crd-td">-</td><td class="crd-td">228,3k (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Bolgatanga (Agglomeration)</strong></td><td class="crd-td">GHA: 10,84, -0,84</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">23,8k</td><td class="crd-td">49,2k</td><td class="crd-td">207,7k</td><td class="crd-td">207,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Obuasi</strong></td><td class="crd-td">GHA: 6,21, -1,68</td><td class="crd-td">City</td><td class="crd-td">22,8k</td><td class="crd-td">50k</td><td class="crd-td">115,6k</td><td class="crd-td">193,8k</td><td class="crd-td">193,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ashaiman</strong></td><td class="crd-td">GHA: 5,7, -0,33</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">42,8k</td><td class="crd-td">150,3k</td><td class="crd-td">-</td><td class="crd-td">191k (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Ashiaman</strong></td><td class="crd-td">GHA: 5,7, -0,03</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">191k (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Agona Swedru</strong></td><td class="crd-td">GHA: 5,54, -0,69</td><td class="crd-td">City</td><td class="crd-td">18,3k</td><td class="crd-td">28,1k</td><td class="crd-td">45,6k</td><td class="crd-td">181,7k</td><td class="crd-td">181,7k (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Leading eighteen urban centres and agglomerations in Ghana (1960AD to 2025AD).</figcaption>
</figure>

## Côte d'Ivoire

Table \ref{tab:urb-civ} documents the 18 largest Ivorian urban centres out of 623 entries, led by Abidjan (6,72M agglomeration, 5,62M proper), Bouaké (804,1k), Korhogo (418,3k), Daloa (366,4k), Anyama (325,2k), San-Pédro (293,4k), Yamoussoukro (280k), Gagnoa (229,5k), Divo (225,2k) and Man (214,5k) [@INS2022CoteIvoireRGPH].

<figure class="crd-table-figure" id="tab:urb-civ">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1960AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Abidjan (Agglomeration)</strong></td><td class="crd-td">CIV: 5,37, -3,96</td><td class="crd-td">Metro</td><td class="crd-td">224,6k</td><td class="crd-td">1,25M</td><td class="crd-td">3,04M</td><td class="crd-td">6,72M</td><td class="crd-td">6,72M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Abidjan</strong></td><td class="crd-td">CIV: 5,37, -3,96</td><td class="crd-td">City</td><td class="crd-td">282k</td><td class="crd-td">1,42M</td><td class="crd-td">2,79M</td><td class="crd-td">-</td><td class="crd-td">5,62M (2021AD)</td></tr>
<tr><td class="crd-td"><strong>Bouaké</strong></td><td class="crd-td">CIV: 7,71, -5,03</td><td class="crd-td">City</td><td class="crd-td">59,3k</td><td class="crd-td">222,4k</td><td class="crd-td">472,9k</td><td class="crd-td">804k</td><td class="crd-td">804k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Korhogo</strong></td><td class="crd-td">CIV: 9,47, -5,64</td><td class="crd-td">City</td><td class="crd-td">18,6k</td><td class="crd-td">67,2k</td><td class="crd-td">147,3k</td><td class="crd-td">418,3k</td><td class="crd-td">418,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Daloa</strong></td><td class="crd-td">CIV: 6,89, -6,45</td><td class="crd-td">City</td><td class="crd-td">17,1k</td><td class="crd-td">81,4k</td><td class="crd-td">181,6k</td><td class="crd-td">366,4k</td><td class="crd-td">366,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bouake (Agglomeration)</strong></td><td class="crd-td">CIV: 7,71, -5,03</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">362,2k (1988AD)</td></tr>
<tr><td class="crd-td"><strong>Anyama</strong></td><td class="crd-td">CIV: 5,49, -4,05</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">38,1k</td><td class="crd-td">82,5k</td><td class="crd-td">-</td><td class="crd-td">325,2k (2021AD)</td></tr>
<tr><td class="crd-td"><strong>San-Pédro</strong></td><td class="crd-td">CIV: 4,76, -6,68</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">40,6k</td><td class="crd-td">143,8k</td><td class="crd-td">284,4k</td><td class="crd-td">293,4k (2021AD)</td></tr>
<tr><td class="crd-td"><strong>Yamoussoukro</strong></td><td class="crd-td">CIV: 6,81, -5,27</td><td class="crd-td">City</td><td class="crd-td">9,7k</td><td class="crd-td">56,6k</td><td class="crd-td">165,5k</td><td class="crd-td">277,1k</td><td class="crd-td">280k (2021AD)</td></tr>
<tr><td class="crd-td"><strong>Gagnoa</strong></td><td class="crd-td">CIV: 6,14, -5,97</td><td class="crd-td">City</td><td class="crd-td">17,7k</td><td class="crd-td">56,5k</td><td class="crd-td">110,6k</td><td class="crd-td">229,5k</td><td class="crd-td">229,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Divo</strong></td><td class="crd-td">CIV: 5,83, -5,36</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">49,5k</td><td class="crd-td">88,7k</td><td class="crd-td">225,2k</td><td class="crd-td">225,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Man</strong></td><td class="crd-td">CIV: 7,4, -7,54</td><td class="crd-td">City</td><td class="crd-td">18k</td><td class="crd-td">63,4k</td><td class="crd-td">121,3k</td><td class="crd-td">214,5k</td><td class="crd-td">214,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Soubré</strong></td><td class="crd-td">CIV: 5,78, -6,59</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">12,4k</td><td class="crd-td">62,9k</td><td class="crd-td">172,8k</td><td class="crd-td">176,9k (2021AD)</td></tr>
<tr><td class="crd-td"><strong>Abengourou</strong></td><td class="crd-td">CIV: 6,74, -3,5</td><td class="crd-td">City</td><td class="crd-td">15,7k</td><td class="crd-td">40,6k</td><td class="crd-td">75,9k</td><td class="crd-td">137,3k</td><td class="crd-td">137,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Daloa (Agglomeration)</strong></td><td class="crd-td">CIV: 6,89, -6,45</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">127,9k (1988AD)</td></tr>
<tr><td class="crd-td"><strong>Yamoussoukro (Agglomeration)</strong></td><td class="crd-td">CIV: 6,81, -5,27</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">126,2k (1988AD)</td></tr>
<tr><td class="crd-td"><strong>Duékoué</strong></td><td class="crd-td">CIV: 6,73, -7,36</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">20,8k</td><td class="crd-td">39,2k</td><td class="crd-td">120,9k</td><td class="crd-td">120,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Korhogo (Agglomeration)</strong></td><td class="crd-td">CIV: 9,47, -5,64</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">112,9k (1988AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Leading eighteen urban centres and agglomerations in Côte d'Ivoire (1960AD to 2025AD).</figcaption>
</figure>

## Benin and Togo

Tables \ref{tab:urb-ben} and \ref{tab:urb-tgo} compile the 14 leading named urban centres in Benin (209 total entries) and 12 leading centres in Togo (101 total entries), highlighting the twin coastal conurbations of Greater Cotonou (2,27M), Porto-Novo (1,04M) and Lomé (3,41M) alongside interior hubs Parakou, Abomey, Djougou, Tsévié, Kara and Sokodé [@OECD2024Africapolis].

<figure class="crd-table-figure" id="tab:urb-ben">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1960AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Cotonou (Agglomeration)</strong></td><td class="crd-td">BEN: 6,54, 2,34</td><td class="crd-td">Metro</td><td class="crd-td">78,3k</td><td class="crd-td">344k</td><td class="crd-td">845,7k</td><td class="crd-td">2,27M</td><td class="crd-td">2,27M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Porto-Novo (Agglomeration)</strong></td><td class="crd-td">BEN: 6,57, 2,65</td><td class="crd-td">Metro</td><td class="crd-td">64k</td><td class="crd-td">158,9k</td><td class="crd-td">310,3k</td><td class="crd-td">1,04M</td><td class="crd-td">1,04M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Cotonou</strong></td><td class="crd-td">BEN: 6,54, 2,34</td><td class="crd-td">City</td><td class="crd-td">111,2k</td><td class="crd-td">337k</td><td class="crd-td">639,4k</td><td class="crd-td">-</td><td class="crd-td">679k (2013AD)</td></tr>
<tr><td class="crd-td"><strong>Abomey</strong></td><td class="crd-td">BEN: 7,16, 2,06</td><td class="crd-td">City</td><td class="crd-td">21k</td><td class="crd-td">31,5k</td><td class="crd-td">57,2k</td><td class="crd-td">421,6k</td><td class="crd-td">421,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Parakou</strong></td><td class="crd-td">BEN: 9,36, 2,62</td><td class="crd-td">City</td><td class="crd-td">14k</td><td class="crd-td">59,1k</td><td class="crd-td">133,6k</td><td class="crd-td">366,9k</td><td class="crd-td">366,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Porto-Novo</strong></td><td class="crd-td">BEN: 6,57, 2,65</td><td class="crd-td">City</td><td class="crd-td">64,9k</td><td class="crd-td">136,7k</td><td class="crd-td">214,7k</td><td class="crd-td">-</td><td class="crd-td">264,3k (2013AD)</td></tr>
<tr><td class="crd-td"><strong>Godomey</strong></td><td class="crd-td">BEN: 6,39, 2,35</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">132k</td><td class="crd-td">-</td><td class="crd-td">253,3k (2013AD)</td></tr>
<tr><td class="crd-td"><strong>Djakotomey</strong></td><td class="crd-td">BEN: 6,95, 1,71</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,4k</td><td class="crd-td">202,9k</td><td class="crd-td">202,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Abomey-Calavi</strong></td><td class="crd-td">BEN: 6,45, 2,36</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">53,4k</td><td class="crd-td">-</td><td class="crd-td">117,8k (2013AD)</td></tr>
<tr><td class="crd-td"><strong>Pobè</strong></td><td class="crd-td">BEN: 6,94, 2,65</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">12,7k</td><td class="crd-td">29,7k</td><td class="crd-td">112,1k</td><td class="crd-td">112,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Djougou</strong></td><td class="crd-td">BEN: 9,7, 1,66</td><td class="crd-td">City</td><td class="crd-td">9,4k</td><td class="crd-td">25k</td><td class="crd-td">48,6k</td><td class="crd-td">111,5k</td><td class="crd-td">111,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bohicon</strong></td><td class="crd-td">BEN: 7,18, 2,07</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">24,3k</td><td class="crd-td">61,5k</td><td class="crd-td">-</td><td class="crd-td">93,7k (2013AD)</td></tr>
<tr><td class="crd-td"><strong>Lokossa</strong></td><td class="crd-td">BEN: 6,67, 1,73</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">12,8k</td><td class="crd-td">25,3k</td><td class="crd-td">91,2k</td><td class="crd-td">91,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Comè</strong></td><td class="crd-td">BEN: 6,43, 1,9</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">11,7k</td><td class="crd-td">23,1k</td><td class="crd-td">91k</td><td class="crd-td">91k (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Leading fourteen named urban centres and agglomerations in Benin (1960AD to 2025AD).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:urb-tgo">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1960AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Lomé (Agglomeration)</strong></td><td class="crd-td">TGO: 6,24, 1,17</td><td class="crd-td">Metro</td><td class="crd-td">126k</td><td class="crd-td">371,2k</td><td class="crd-td">673,8k</td><td class="crd-td">3,41M</td><td class="crd-td">3,41M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Lomé</strong></td><td class="crd-td">TGO: 6,24, 1,17</td><td class="crd-td">City</td><td class="crd-td">106,4k</td><td class="crd-td">376,5k</td><td class="crd-td">1,1M</td><td class="crd-td">-</td><td class="crd-td">2,19M (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Tsévié</strong></td><td class="crd-td">TGO: 6,34, 1,21</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">20,2k</td><td class="crd-td">38,2k</td><td class="crd-td">-</td><td class="crd-td">181k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Kara</strong></td><td class="crd-td">TGO: 9,58, 1,19</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">28,5k</td><td class="crd-td">61,6k</td><td class="crd-td">177,4k</td><td class="crd-td">177,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sokodé</strong></td><td class="crd-td">TGO: 8,99, 1,13</td><td class="crd-td">City</td><td class="crd-td">14,7k</td><td class="crd-td">48,1k</td><td class="crd-td">74,5k</td><td class="crd-td">140,5k</td><td class="crd-td">140,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kpalimé</strong></td><td class="crd-td">TGO: 6,91, 0,64</td><td class="crd-td">City</td><td class="crd-td">11,9k</td><td class="crd-td">27,7k</td><td class="crd-td">52,5k</td><td class="crd-td">125,4k</td><td class="crd-td">125,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dapaong</strong></td><td class="crd-td">TGO: 10,86, 0,19</td><td class="crd-td">City</td><td class="crd-td">7,3k</td><td class="crd-td">17,5k</td><td class="crd-td">37,8k</td><td class="crd-td">123,7k</td><td class="crd-td">123,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Atakpamé</strong></td><td class="crd-td">TGO: 7,51, 1,16</td><td class="crd-td">City</td><td class="crd-td">12,4k</td><td class="crd-td">24,4k</td><td class="crd-td">40,1k</td><td class="crd-td">116,7k</td><td class="crd-td">116,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Notse (Agglomeration)</strong></td><td class="crd-td">TGO: 6,95, 1,17</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">21,4k</td><td class="crd-td">84,2k</td><td class="crd-td">84,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Anié</strong></td><td class="crd-td">TGO: 7,77, 1,2</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">10,2k</td><td class="crd-td">23,4k</td><td class="crd-td">58k</td><td class="crd-td">61,1k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Cinkassé</strong></td><td class="crd-td">TGO: 11,1, 0,01</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,9k</td><td class="crd-td">47,5k</td><td class="crd-td">56,8k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Anfoin</strong></td><td class="crd-td">TGO: 6,32, 1,61</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">52,2k</td><td class="crd-td">52,2k (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Leading twelve urban centres and agglomerations in Togo (1960AD to 2025AD).</figcaption>
</figure>

## Guinea, Sierra Leone, Liberia and Guinea-Bissau

Tables \ref{tab:urb-gin} through \ref{tab:urb-gnb} present the leading urban centres across the four Upper Guinea states: Guinea (88 entries led by Conakry 3,41M, Kankan 410,5k, Nzérékoré 316,1k and Siguiri 303k), Sierra Leone (35 entries led by Freetown 2,05M, Kenema 269,2k, Bo 264,3k and Koidu 216,7k), Liberia (48 entries led by Monrovia 1,89M agglomeration) and Guinea-Bissau (35 entries led by Bissau 612,3k agglomeration) [@Souza2014EvidenceFor; @Bank2021SierraLeone; @OECD2024Africapolis].

<figure class="crd-table-figure" id="tab:urb-gin">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1960AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Conakry</strong></td><td class="crd-td">GIN: 9,7, -13,52</td><td class="crd-td">City</td><td class="crd-td">170,3k</td><td class="crd-td">639,9k</td><td class="crd-td">1,33M</td><td class="crd-td">3,41M</td><td class="crd-td">3,41M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Conakry (Agglomeration)</strong></td><td class="crd-td">GIN: 9,7, -13,52</td><td class="crd-td">Metro</td><td class="crd-td">124,4k</td><td class="crd-td">589,6k</td><td class="crd-td">1,24M</td><td class="crd-td">3,19M</td><td class="crd-td">3,19M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kankan</strong></td><td class="crd-td">GIN: 10,4, -9,31</td><td class="crd-td">City</td><td class="crd-td">28,9k</td><td class="crd-td">51,6k</td><td class="crd-td">120,3k</td><td class="crd-td">410,5k</td><td class="crd-td">410,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Nzérékoré</strong></td><td class="crd-td">GIN: 7,76, -8,82</td><td class="crd-td">City</td><td class="crd-td">13,8k</td><td class="crd-td">29,6k</td><td class="crd-td">123,4k</td><td class="crd-td">316,1k</td><td class="crd-td">316,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Siguiri</strong></td><td class="crd-td">GIN: 11,43, -9,17</td><td class="crd-td">City</td><td class="crd-td">12,9k</td><td class="crd-td">16,8k</td><td class="crd-td">49,2k</td><td class="crd-td">303k</td><td class="crd-td">303k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kankan (Agglomeration)</strong></td><td class="crd-td">GIN: 10,4, -9,31</td><td class="crd-td">Metro</td><td class="crd-td">29,2k</td><td class="crd-td">61k</td><td class="crd-td">116,5k</td><td class="crd-td">296,1k</td><td class="crd-td">296,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kindia (Agglomeration)</strong></td><td class="crd-td">GIN: 10,04, -12,86</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">287,6k (1996AD)</td></tr>
<tr><td class="crd-td"><strong>Nzérékoré (Agglomeration)</strong></td><td class="crd-td">GIN: 7,76, -8,82</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">282,8k (1996AD)</td></tr>
<tr><td class="crd-td"><strong>Labé (Agglomeration)</strong></td><td class="crd-td">GIN: 11,33, -12,3</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">249,5k (1996AD)</td></tr>
<tr><td class="crd-td"><strong>Kindia</strong></td><td class="crd-td">GIN: 10,04, -12,86</td><td class="crd-td">City</td><td class="crd-td">22,1k</td><td class="crd-td">45,6k</td><td class="crd-td">102,1k</td><td class="crd-td">220k</td><td class="crd-td">220k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Dubréka</strong></td><td class="crd-td">GIN: 9,79, -13,52</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,4k</td><td class="crd-td">205,9k</td><td class="crd-td">205,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Siguiri (Agglomeration)</strong></td><td class="crd-td">GIN: 11,43, -9,17</td><td class="crd-td">Metro</td><td class="crd-td">11,9k</td><td class="crd-td">16,2k</td><td class="crd-td">34k</td><td class="crd-td">187,6k</td><td class="crd-td">187,6k (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Leading twelve urban centres and agglomerations in Guinea (1960AD to 2025AD).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:urb-sle">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1960AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Freetown (Agglomeration)</strong></td><td class="crd-td">SLE: 8,35, -13,02</td><td class="crd-td">Metro</td><td class="crd-td">112,5k</td><td class="crd-td">367,2k</td><td class="crd-td">738,4k</td><td class="crd-td">2,05M</td><td class="crd-td">2,05M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Freetown</strong></td><td class="crd-td">SLE: 8,35, -13,02</td><td class="crd-td">City</td><td class="crd-td">162,3k</td><td class="crd-td">381,8k</td><td class="crd-td">709,1k</td><td class="crd-td">-</td><td class="crd-td">1,06M (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Kenema</strong></td><td class="crd-td">SLE: 7,88, -11,18</td><td class="crd-td">City</td><td class="crd-td">10,6k</td><td class="crd-td">40,8k</td><td class="crd-td">104,2k</td><td class="crd-td">269,2k</td><td class="crd-td">269,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bo</strong></td><td class="crd-td">SLE: 7,95, -11,73</td><td class="crd-td">City</td><td class="crd-td">24,1k</td><td class="crd-td">48,7k</td><td class="crd-td">121k</td><td class="crd-td">264,3k</td><td class="crd-td">264,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Koidu</strong></td><td class="crd-td">SLE: 8,64, -10,95</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">79,2k</td><td class="crd-td">87,9k</td><td class="crd-td">216,7k</td><td class="crd-td">216,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Makeni (Agglomeration)</strong></td><td class="crd-td">SLE: 8,88, -12,04</td><td class="crd-td">Metro</td><td class="crd-td">11,2k</td><td class="crd-td">36,4k</td><td class="crd-td">71,9k</td><td class="crd-td">205,4k</td><td class="crd-td">205,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Makeni</strong></td><td class="crd-td">SLE: 8,88, -12,04</td><td class="crd-td">City</td><td class="crd-td">16,4k</td><td class="crd-td">34k</td><td class="crd-td">72,3k</td><td class="crd-td">-</td><td class="crd-td">124,6k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Mahera</strong></td><td class="crd-td">SLE: 8,6, -13,19</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">31k</td><td class="crd-td">75k</td><td class="crd-td">75,5k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Kambia</strong></td><td class="crd-td">SLE: 9,07, -12,91</td><td class="crd-td">City</td><td class="crd-td">4,7k</td><td class="crd-td">6,8k</td><td class="crd-td">10,7k</td><td class="crd-td">50,8k</td><td class="crd-td">50,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kabala</strong></td><td class="crd-td">SLE: 9,58, -11,56</td><td class="crd-td">City</td><td class="crd-td">5,6k</td><td class="crd-td">12k</td><td class="crd-td">14,1k</td><td class="crd-td">46,2k</td><td class="crd-td">46,2k (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Leading ten urban centres and agglomerations in Sierra Leone (1960AD to 2025AD).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:urb-lbr">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1960AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Monrovia (Agglomeration)</strong></td><td class="crd-td">LBR: 6,35, -10,69</td><td class="crd-td">Metro</td><td class="crd-td">64,9k</td><td class="crd-td">315,3k</td><td class="crd-td">763,3k</td><td class="crd-td">1,89M</td><td class="crd-td">1,89M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Monrovia</strong></td><td class="crd-td">LBR: 6,35, -10,69</td><td class="crd-td">City</td><td class="crd-td">140k</td><td class="crd-td">374,2k</td><td class="crd-td">985,3k</td><td class="crd-td">-</td><td class="crd-td">1,76M (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Kakata</strong></td><td class="crd-td">LBR: 6,53, -10,35</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">16,3k</td><td class="crd-td">29,7k</td><td class="crd-td">68,6k</td><td class="crd-td">68,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Buchanan</strong></td><td class="crd-td">LBR: 5,89, -10,04</td><td class="crd-td">City</td><td class="crd-td">12,2k</td><td class="crd-td">30,8k</td><td class="crd-td">34,9k</td><td class="crd-td">63,6k</td><td class="crd-td">63,6k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Gbarnga</strong></td><td class="crd-td">LBR: 7, -9,46</td><td class="crd-td">City</td><td class="crd-td">7,6k</td><td class="crd-td">14,3k</td><td class="crd-td">29,9k</td><td class="crd-td">58,8k</td><td class="crd-td">58,8k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Ganta</strong></td><td class="crd-td">LBR: 7,22, -8,99</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">10,4k</td><td class="crd-td">29,4k</td><td class="crd-td">58,5k</td><td class="crd-td">58,5k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Gbarnga (Agglomeration)</strong></td><td class="crd-td">LBR: 7, -9,46</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">16k</td><td class="crd-td">45,3k</td><td class="crd-td">-</td><td class="crd-td">57k (2008AD)</td></tr>
<tr><td class="crd-td"><strong>Buchanan (Agglomeration)</strong></td><td class="crd-td">LBR: 5,89, -10,04</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">28,6k</td><td class="crd-td">44,1k</td><td class="crd-td">-</td><td class="crd-td">50,2k (2008AD)</td></tr>
<tr><td class="crd-td"><strong>Harbel</strong></td><td class="crd-td">LBR: 6,29, -10,33</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">12k</td><td class="crd-td">19k</td><td class="crd-td">47k</td><td class="crd-td">47k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ganta (Agglomeration)</strong></td><td class="crd-td">LBR: 7,22, -8,99</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">12,7k</td><td class="crd-td">33,7k</td><td class="crd-td">-</td><td class="crd-td">42,1k (2008AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Leading ten urban centres and agglomerations in Liberia (1960AD to 2025AD).</figcaption>
</figure>

<figure class="crd-table-figure" id="tab:urb-gnb">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1960AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bissau (Agglomeration)</strong></td><td class="crd-td">GNB: 11,9, -15,59</td><td class="crd-td">Metro</td><td class="crd-td">49,8k</td><td class="crd-td">115,6k</td><td class="crd-td">298,8k</td><td class="crd-td">612,3k</td><td class="crd-td">612,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bissau</strong></td><td class="crd-td">GNB: 11,9, -15,59</td><td class="crd-td">City</td><td class="crd-td">49,7k</td><td class="crd-td">116,6k</td><td class="crd-td">292,8k</td><td class="crd-td">-</td><td class="crd-td">387,9k (2009AD)</td></tr>
<tr><td class="crd-td"><strong>Gabú</strong></td><td class="crd-td">GNB: 12,29, -14,24</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">8,1k</td><td class="crd-td">12k</td><td class="crd-td">86,7k</td><td class="crd-td">86,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bafatá</strong></td><td class="crd-td">GNB: 12,18, -14,66</td><td class="crd-td">City</td><td class="crd-td">7,7k</td><td class="crd-td">13,8k</td><td class="crd-td">19,2k</td><td class="crd-td">41,6k</td><td class="crd-td">41,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Canchungo</strong></td><td class="crd-td">GNB: 12,08, -16,03</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">9,9k</td><td class="crd-td">17,8k</td><td class="crd-td">17,8k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Bula</strong></td><td class="crd-td">GNB: 12,11, -15,71</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16,7k</td><td class="crd-td">16,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ondame</strong></td><td class="crd-td">GNB: 11,78, -15,92</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,8k</td><td class="crd-td">15,8k (2020AD)</td></tr>
<tr><td class="crd-td"><strong>Bissorã</strong></td><td class="crd-td">GNB: 12,23, -15,45</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,1k</td><td class="crd-td">15,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Buba</strong></td><td class="crd-td">GNB: 11,6, -14,98</td><td class="crd-td">City</td><td class="crd-td">2,5k</td><td class="crd-td">4,7k</td><td class="crd-td">6,9k</td><td class="crd-td">13,6k</td><td class="crd-td">13,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ingoré</strong></td><td class="crd-td">GNB: 12,4, -15,79</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,5k</td><td class="crd-td">11,5k (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 10.</span> Leading ten urban centres and agglomerations in Guinea-Bissau (1960AD to 2025AD).</figcaption>
</figure>

## Cross-Border Catchment Buffer Centres

Table \ref{tab:urb-buffer} records the 18 largest towns across the six neighbouring border buffers (Niger, Cameroon, Burkina Faso, Senegal, Mali and Chad), led by Ndjamena (1,99M agglomeration), Garoua (561,5k), Maradi (554,4k), Ziguinchor (337,3k), Kousséri (144,9k), Banfora (138k), Kolda (131,5k) and Birni N'Konni (100,2k) [@OECD2024Africapolis].

<figure class="crd-table-figure" id="tab:urb-buffer">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1960AD</th><th class="crd-th">1980AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ndjamena (Agglomeration)</strong></td><td class="crd-td">TCD: 12,13, 15,07</td><td class="crd-td">Metro</td><td class="crd-td">65,6k</td><td class="crd-td">284,7k</td><td class="crd-td">694,4k</td><td class="crd-td">1,99M</td><td class="crd-td">1,99M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ndjamena</strong></td><td class="crd-td">TCD: 12,13, 15,07</td><td class="crd-td">City</td><td class="crd-td">163,2k</td><td class="crd-td">386,1k</td><td class="crd-td">714,9k</td><td class="crd-td">-</td><td class="crd-td">951,4k (2009AD)</td></tr>
<tr><td class="crd-td"><strong>Garoua</strong></td><td class="crd-td">CMR: 9,34, 13,4</td><td class="crd-td">City</td><td class="crd-td">13,8k</td><td class="crd-td">86,1k</td><td class="crd-td">204,2k</td><td class="crd-td">561,5k</td><td class="crd-td">561,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Maradi</strong></td><td class="crd-td">NER: 13,51, 7,12</td><td class="crd-td">City</td><td class="crd-td">15,2k</td><td class="crd-td">57,5k</td><td class="crd-td">144,6k</td><td class="crd-td">554,4k</td><td class="crd-td">554,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ziguinchor</strong></td><td class="crd-td">SEN: 12,55, -16,27</td><td class="crd-td">City</td><td class="crd-td">26,3k</td><td class="crd-td">85,2k</td><td class="crd-td">150,1k</td><td class="crd-td">290,2k</td><td class="crd-td">337,3k (2011AD)</td></tr>
<tr><td class="crd-td"><strong>Ndjamena/Kousseri [CMR]</strong></td><td class="crd-td">CMR: 12,08, 15,01</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">22,5k</td><td class="crd-td">76,8k</td><td class="crd-td">144,9k</td><td class="crd-td">144,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Banfora</strong></td><td class="crd-td">BFA: 10,65, -4,74</td><td class="crd-td">City</td><td class="crd-td">10k</td><td class="crd-td">19,9k</td><td class="crd-td">57,8k</td><td class="crd-td">138k</td><td class="crd-td">138k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kolda</strong></td><td class="crd-td">SEN: 12,9, -14,94</td><td class="crd-td">City</td><td class="crd-td">7,6k</td><td class="crd-td">23,3k</td><td class="crd-td">49,7k</td><td class="crd-td">131,5k</td><td class="crd-td">131,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Banfora (Agglomeration)</strong></td><td class="crd-td">BFA: 10,65, -4,74</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">109,8k (2006AD)</td></tr>
<tr><td class="crd-td"><strong>Birni N'Konni</strong></td><td class="crd-td">NER: 13,79, 5,25</td><td class="crd-td">City</td><td class="crd-td">8,8k</td><td class="crd-td">18,1k</td><td class="crd-td">43,2k</td><td class="crd-td">100,2k</td><td class="crd-td">100,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kousséri</strong></td><td class="crd-td">CMR: 12,08, 15,03</td><td class="crd-td">City</td><td class="crd-td">9k</td><td class="crd-td">27,5k</td><td class="crd-td">79,3k</td><td class="crd-td">-</td><td class="crd-td">89,1k (2005AD)</td></tr>
<tr><td class="crd-td"><strong>Gaya</strong></td><td class="crd-td">NER: 11,89, 3,46</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">10,4k</td><td class="crd-td">27k</td><td class="crd-td">73,8k</td><td class="crd-td">73,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Madaoua</strong></td><td class="crd-td">NER: 14,06, 5,96</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">14,1k</td><td class="crd-td">21,1k</td><td class="crd-td">73,5k</td><td class="crd-td">73,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mokolo</strong></td><td class="crd-td">CMR: 10,73, 13,83</td><td class="crd-td">City</td><td class="crd-td">4,1k</td><td class="crd-td">8,4k</td><td class="crd-td">28,7k</td><td class="crd-td">69,2k</td><td class="crd-td">69,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Diffa</strong></td><td class="crd-td">NER: 13,32, 12,6</td><td class="crd-td">City</td><td class="crd-td">2,9k</td><td class="crd-td">6,7k</td><td class="crd-td">22,4k</td><td class="crd-td">63k</td><td class="crd-td">63k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Léo</strong></td><td class="crd-td">BFA: 11,1, -2,09</td><td class="crd-td">City</td><td class="crd-td">6,5k</td><td class="crd-td">10,1k</td><td class="crd-td">21,5k</td><td class="crd-td">59,3k</td><td class="crd-td">59,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Kédougou</strong></td><td class="crd-td">SEN: 12,56, -12,2</td><td class="crd-td">City</td><td class="crd-td">4,5k</td><td class="crd-td">8,9k</td><td class="crd-td">15,7k</td><td class="crd-td">44,7k</td><td class="crd-td">59,2k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Bignoma</strong></td><td class="crd-td">SEN: 12,8, -16,23</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">16,8k</td><td class="crd-td">25k</td><td class="crd-td">57,3k</td><td class="crd-td">57,3k (2025AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 11.</span> Eighteen largest cross-border catchment buffer centres across Niger, Cameroon, Burkina Faso, Senegal, Mali and Chad (1960AD to 2025AD).</figcaption>
</figure>

# Limitations

Three caveats apply to this settlement ledger. First, 685 of the 4.126 entries hold single-date observations (mostly recent Africapolis towns appearing in 2020-2025AD), so pre-foundation benchmarks display a hyphen (-). Second, municipal city-proper records such as Lagos (5,2M in 1991AD, ending in 2000AD) and continuous Africapolis agglomerations (16,11M in 2025AD) measure distinct spatial definitions and must never be summed together [@OECD2024Africapolis; @Folawewo2024UrbanizationWithout]. Third, Benin includes four minor unnamed Africapolis polygons recorded as (n.d.) between 13,9k and 26,7k, which are included in Table \ref{tab:jurisdiction-summary} totals but omitted from the ranked named city tables.

# Conclusion

Together, the 4.126 individually assessed settlements document the transformation of West Africa from a predominantly rural colonial periphery (10,43M attested urban residents in 1957AD) into one of the continent's densest metropolitan networks (215,7M across 2.694 active entries by 2025AD), anchoring every Admin-1 census series in the companion literature review.

# Appendix

## Admin-1 Settlement Distribution Across the Nine Sovereign States

Table \ref{tab:admin1-distribution} reports surface area, interior assessed settlement count, observation count, 2025AD Admin-1 population and leading interior settlements across all 120 Admin-1 divisions in the study domain.

<figure class="crd-table-figure" id="tab:admin1-distribution">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Admin-1 Division</th><th class="crd-th">Area (km²)</th><th class="crd-th">Sites</th><th class="crd-th">Obs</th><th class="crd-th">2025AD Pop.</th><th class="crd-th">Leading Towns</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kano (NGA)</strong></td><td class="crd-td">20.343</td><td class="crd-td">118</td><td class="crd-td">366</td><td class="crd-td">16,97M</td><td class="crd-td">Kano, Gaya</td></tr>
<tr><td class="crd-td"><strong>Katsina (NGA)</strong></td><td class="crd-td">23.985</td><td class="crd-td">214</td><td class="crd-td">588</td><td class="crd-td">11,56M</td><td class="crd-td">Katsina, Funtua</td></tr>
<tr><td class="crd-td"><strong>Lagos (NGA)</strong></td><td class="crd-td">3.156</td><td class="crd-td">10</td><td class="crd-td">47</td><td class="crd-td">11,44M</td><td class="crd-td">Badagry, Epe</td></tr>
<tr><td class="crd-td"><strong>Ogun (NGA)</strong></td><td class="crd-td">16.704</td><td class="crd-td">42</td><td class="crd-td">237</td><td class="crd-td">10,43M</td><td class="crd-td">Lagos (Agglomeration), Lagos</td></tr>
<tr><td class="crd-td"><strong>Kaduna (NGA)</strong></td><td class="crd-td">45.521</td><td class="crd-td">80</td><td class="crd-td">297</td><td class="crd-td">9,74M</td><td class="crd-td">Kaduna, Zaria</td></tr>
<tr><td class="crd-td"><strong>Bauchi (NGA)</strong></td><td class="crd-td">49.678</td><td class="crd-td">52</td><td class="crd-td">193</td><td class="crd-td">9,26M</td><td class="crd-td">Bauchi, Azare</td></tr>
<tr><td class="crd-td"><strong>Oyo (NGA)</strong></td><td class="crd-td">27.963</td><td class="crd-td">42</td><td class="crd-td">236</td><td class="crd-td">8,92M</td><td class="crd-td">Ibadan, Oyo</td></tr>
<tr><td class="crd-td"><strong>Rivers (NGA)</strong></td><td class="crd-td">9.668</td><td class="crd-td">72</td><td class="crd-td">235</td><td class="crd-td">8,78M</td><td class="crd-td">Port Harcourt, Yeghe</td></tr>
<tr><td class="crd-td"><strong>Jigawa (NGA)</strong></td><td class="crd-td">23.747</td><td class="crd-td">51</td><td class="crd-td">182</td><td class="crd-td">8,3M</td><td class="crd-td">Hadejia, Dutse</td></tr>
<tr><td class="crd-td"><strong>Niger (NGA)</strong></td><td class="crd-td">70.956</td><td class="crd-td">64</td><td class="crd-td">302</td><td class="crd-td">7,74M</td><td class="crd-td">Minna, Bida</td></tr>
<tr><td class="crd-td"><strong>Sokoto (NGA)</strong></td><td class="crd-td">30.779</td><td class="crd-td">187</td><td class="crd-td">493</td><td class="crd-td">7,08M</td><td class="crd-td">Sokoto, Birni N'Konni</td></tr>
<tr><td class="crd-td"><strong>Benue (NGA)</strong></td><td class="crd-td">30.913</td><td class="crd-td">49</td><td class="crd-td">250</td><td class="crd-td">6,73M</td><td class="crd-td">Makurdi, Gboko</td></tr>
<tr><td class="crd-td"><strong>Borno (NGA) [Regime III Lake Chad Basin Conflict]</strong></td><td class="crd-td">68.738</td><td class="crd-td">83</td><td class="crd-td">334</td><td class="crd-td">6,59M</td><td class="crd-td">Maiduguri, Monguno</td></tr>
<tr><td class="crd-td"><strong>Zamfara (NGA)</strong></td><td class="crd-td">34.836</td><td class="crd-td">67</td><td class="crd-td">214</td><td class="crd-td">6,5M</td><td class="crd-td">Gusau, Talata Mafara</td></tr>
<tr><td class="crd-td"><strong>Delta (NGA)</strong></td><td class="crd-td">16.660</td><td class="crd-td">55</td><td class="crd-td">292</td><td class="crd-td">6,43M</td><td class="crd-td">Warri, Asaba</td></tr>
<tr><td class="crd-td"><strong>Imo (NGA)</strong></td><td class="crd-td">5.042</td><td class="crd-td">31</td><td class="crd-td">82</td><td class="crd-td">6,22M</td><td class="crd-td">Onitsha, Owerri</td></tr>
<tr><td class="crd-td"><strong>Kebbi (NGA)</strong></td><td class="crd-td">37.074</td><td class="crd-td">112</td><td class="crd-td">349</td><td class="crd-td">6,15M</td><td class="crd-td">Birnin Kebbi, Argungu</td></tr>
<tr><td class="crd-td"><strong>Ondo (NGA)</strong></td><td class="crd-td">14.405</td><td class="crd-td">40</td><td class="crd-td">248</td><td class="crd-td">5,99M</td><td class="crd-td">Akure, Ondo</td></tr>
<tr><td class="crd-td"><strong>Ashanti Region (GHA)</strong></td><td class="crd-td">24.469</td><td class="crd-td">40</td><td class="crd-td">164</td><td class="crd-td">5,79M</td><td class="crd-td">Kumasi (Agglomeration), Kumasi</td></tr>
<tr><td class="crd-td"><strong>Anambra (NGA)</strong></td><td class="crd-td">4.866</td><td class="crd-td">29</td><td class="crd-td">68</td><td class="crd-td">5,68M</td><td class="crd-td">Nnewi, Awka</td></tr>
<tr><td class="crd-td"><strong>Akwa Ibom (NGA)</strong></td><td class="crd-td">6.844</td><td class="crd-td">52</td><td class="crd-td">163</td><td class="crd-td">5,48M</td><td class="crd-td">Uyo, Eket</td></tr>
<tr><td class="crd-td"><strong>Adamawa (NGA) [Regime III Lake Chad Basin Conflict]</strong></td><td class="crd-td">39.820</td><td class="crd-td">55</td><td class="crd-td">288</td><td class="crd-td">5,36M</td><td class="crd-td">Jimeta, Garoua</td></tr>
<tr><td class="crd-td"><strong>Greater Accra Region (GHA)</strong></td><td class="crd-td">3.332</td><td class="crd-td">26</td><td class="crd-td">80</td><td class="crd-td">5,16M</td><td class="crd-td">Accra (Agglomeration), Accra</td></tr>
<tr><td class="crd-td"><strong>Edo (NGA)</strong></td><td class="crd-td">19.872</td><td class="crd-td">31</td><td class="crd-td">195</td><td class="crd-td">5,14M</td><td class="crd-td">Benin City, Uromi</td></tr>
<tr><td class="crd-td"><strong>Enugu (NGA)</strong></td><td class="crd-td">7.678</td><td class="crd-td">38</td><td class="crd-td">132</td><td class="crd-td">5,14M</td><td class="crd-td">Nsukka, Enugu</td></tr>
<tr><td class="crd-td"><strong>Plateau (NGA)</strong></td><td class="crd-td">26.358</td><td class="crd-td">45</td><td class="crd-td">172</td><td class="crd-td">5,07M</td><td class="crd-td">Jos, Mangu</td></tr>
<tr><td class="crd-td"><strong>Cross River (NGA)</strong></td><td class="crd-td">20.327</td><td class="crd-td">46</td><td class="crd-td">178</td><td class="crd-td">5,04M</td><td class="crd-td">Calabar, Ugep</td></tr>
<tr><td class="crd-td"><strong>Kogi (NGA)</strong></td><td class="crd-td">29.353</td><td class="crd-td">49</td><td class="crd-td">257</td><td class="crd-td">5M</td><td class="crd-td">Okenne, Lokoja</td></tr>
<tr><td class="crd-td"><strong>Gombe (NGA)</strong></td><td class="crd-td">16.470</td><td class="crd-td">33</td><td class="crd-td">135</td><td class="crd-td">4,36M</td><td class="crd-td">Gombe, Kaltungo</td></tr>
<tr><td class="crd-td"><strong>Osun (NGA)</strong></td><td class="crd-td">8.596</td><td class="crd-td">39</td><td class="crd-td">256</td><td class="crd-td">4,28M</td><td class="crd-td">Oshogbo, Ile-Ife</td></tr>
<tr><td class="crd-td"><strong>Kankan (GIN)</strong></td><td class="crd-td">72.155</td><td class="crd-td">21</td><td class="crd-td">99</td><td class="crd-td">4,11M</td><td class="crd-td">Kankan, Siguiri</td></tr>
<tr><td class="crd-td"><strong>Yobe (NGA) [Regime III Lake Chad Basin Conflict]</strong></td><td class="crd-td">46.222</td><td class="crd-td">47</td><td class="crd-td">172</td><td class="crd-td">3,97M</td><td class="crd-td">Potiskum, Damaturu</td></tr>
<tr><td class="crd-td"><strong>Taraba (NGA)</strong></td><td class="crd-td">59.176</td><td class="crd-td">55</td><td class="crd-td">231</td><td class="crd-td">3,94M</td><td class="crd-td">Jalingo, Wukari</td></tr>
<tr><td class="crd-td"><strong>Kwara (NGA)</strong></td><td class="crd-td">33.161</td><td class="crd-td">33</td><td class="crd-td">160</td><td class="crd-td">3,9M</td><td class="crd-td">Ilorin, Offa</td></tr>
<tr><td class="crd-td"><strong>Central Region (GHA)</strong></td><td class="crd-td">10.340</td><td class="crd-td">30</td><td class="crd-td">156</td><td class="crd-td">3,65M</td><td class="crd-td">Cape Coast, Agona Swedru</td></tr>
<tr><td class="crd-td"><strong>Northern (SLE)</strong></td><td class="crd-td">36.112</td><td class="crd-td">15</td><td class="crd-td">104</td><td class="crd-td">3,59M</td><td class="crd-td">Makeni (Agglomeration), Makeni</td></tr>
<tr><td class="crd-td"><strong>Nasarawa (NGA)</strong></td><td class="crd-td">25.816</td><td class="crd-td">41</td><td class="crd-td">171</td><td class="crd-td">3,48M</td><td class="crd-td">Lafia, Keffi</td></tr>
<tr><td class="crd-td"><strong>Maritime Region (TGO)</strong></td><td class="crd-td">6.313</td><td class="crd-td">30</td><td class="crd-td">119</td><td class="crd-td">3,48M</td><td class="crd-td">Lomé (Agglomeration), Lomé</td></tr>
<tr><td class="crd-td"><strong>Ekiti (NGA)</strong></td><td class="crd-td">6.041</td><td class="crd-td">40</td><td class="crd-td">249</td><td class="crd-td">3,46M</td><td class="crd-td">Ado Ekiti, Ikerre Ekiti</td></tr>
<tr><td class="crd-td"><strong>Eastern Region (GHA)</strong></td><td class="crd-td">18.516</td><td class="crd-td">31</td><td class="crd-td">175</td><td class="crd-td">3,45M</td><td class="crd-td">Koforidua (Agglomeration), Somanya</td></tr>
<tr><td class="crd-td"><strong>Bas-Sassandra (CIV)</strong></td><td class="crd-td">28.125</td><td class="crd-td">113</td><td class="crd-td">301</td><td class="crd-td">3,24M</td><td class="crd-td">San-Pédro, Soubré</td></tr>
<tr><td class="crd-td"><strong>Abia (NGA)</strong></td><td class="crd-td">4.787</td><td class="crd-td">32</td><td class="crd-td">109</td><td class="crd-td">3,17M</td><td class="crd-td">Aba, Umuahia</td></tr>
<tr><td class="crd-td"><strong>Ebonyi (NGA)</strong></td><td class="crd-td">6.572</td><td class="crd-td">23</td><td class="crd-td">98</td><td class="crd-td">3,11M</td><td class="crd-td">Abakaliki, Igbidu</td></tr>
<tr><td class="crd-td"><strong>Kindia (GIN)</strong></td><td class="crd-td">25.602</td><td class="crd-td">15</td><td class="crd-td">62</td><td class="crd-td">2,94M</td><td class="crd-td">Kindia (Agglomeration), Kindia</td></tr>
<tr><td class="crd-td"><strong>Abuja Federal Capital Territory (NGA)</strong></td><td class="crd-td">8.059</td><td class="crd-td">22</td><td class="crd-td">87</td><td class="crd-td">2,83M</td><td class="crd-td">Abuja (Agglomeration), Gwagwalada</td></tr>
<tr><td class="crd-td"><strong>Conakry (GIN)</strong></td><td class="crd-td">339</td><td class="crd-td">2</td><td class="crd-td">16</td><td class="crd-td">2,74M</td><td class="crd-td">Conakry, Conakry (Agglomeration)</td></tr>
<tr><td class="crd-td"><strong>Northern Region (GHA)</strong></td><td class="crd-td">24.138</td><td class="crd-td">17</td><td class="crd-td">86</td><td class="crd-td">2,73M</td><td class="crd-td">Tamale (Agglomeration), Tamale</td></tr>
<tr><td class="crd-td"><strong>Nzerekore (GIN)</strong></td><td class="crd-td">36.519</td><td class="crd-td">19</td><td class="crd-td">85</td><td class="crd-td">2,49M</td><td class="crd-td">Nzérékoré, Nzérékoré (Agglomeration)</td></tr>
<tr><td class="crd-td"><strong>Bayelsa (NGA)</strong></td><td class="crd-td">9.412</td><td class="crd-td">24</td><td class="crd-td">75</td><td class="crd-td">2,41M</td><td class="crd-td">Yenagoa, Amassama</td></tr>
<tr><td class="crd-td"><strong>Montagnes (CIV)</strong></td><td class="crd-td">30.682</td><td class="crd-td">86</td><td class="crd-td">262</td><td class="crd-td">2,37M</td><td class="crd-td">Man, Duékoué</td></tr>
<tr><td class="crd-td"><strong>Savanes (CIV)</strong></td><td class="crd-td">40.217</td><td class="crd-td">50</td><td class="crd-td">200</td><td class="crd-td">2,35M</td><td class="crd-td">Korhogo, Korhogo (Agglomeration)</td></tr>
<tr><td class="crd-td"><strong>Sassandra-Marahoue (CIV)</strong></td><td class="crd-td">24.285</td><td class="crd-td">79</td><td class="crd-td">280</td><td class="crd-td">2,33M</td><td class="crd-td">Daloa, Daloa (Agglomeration)</td></tr>
<tr><td class="crd-td"><strong>Western Region (GHA)</strong></td><td class="crd-td">13.934</td><td class="crd-td">24</td><td class="crd-td">106</td><td class="crd-td">2,21M</td><td class="crd-td">Takoradi (Agglomeration), Sekondi</td></tr>
<tr><td class="crd-td"><strong>Eastern (SLE)</strong></td><td class="crd-td">15.551</td><td class="crd-td">10</td><td class="crd-td">70</td><td class="crd-td">2,2M</td><td class="crd-td">Kenema, Koidu</td></tr>
<tr><td class="crd-td"><strong>Western Area (SLE)</strong></td><td class="crd-td">680</td><td class="crd-td">4</td><td class="crd-td">20</td><td class="crd-td">2,04M</td><td class="crd-td">Freetown (Agglomeration), Freetown</td></tr>
<tr><td class="crd-td"><strong>Volta Region (GHA)</strong></td><td class="crd-td">10.410</td><td class="crd-td">24</td><td class="crd-td">108</td><td class="crd-td">2,01M</td><td class="crd-td">Lome/Aflao/Tokor [GHA] 2, Ho</td></tr>
<tr><td class="crd-td"><strong>Lacs (CIV)</strong></td><td class="crd-td">26.501</td><td class="crd-td">36</td><td class="crd-td">143</td><td class="crd-td">1,95M</td><td class="crd-td">Daoukro, Toumodi</td></tr>
<tr><td class="crd-td"><strong>Southern (SLE)</strong></td><td class="crd-td">20.247</td><td class="crd-td">7</td><td class="crd-td">48</td><td class="crd-td">1,94M</td><td class="crd-td">Bo, Moriba Town</td></tr>
<tr><td class="crd-td"><strong>Plateaux Region (TGO)</strong></td><td class="crd-td">17.793</td><td class="crd-td">36</td><td class="crd-td">128</td><td class="crd-td">1,92M</td><td class="crd-td">Kpalimé, Atakpamé</td></tr>
<tr><td class="crd-td"><strong>Borgou (BEN)</strong></td><td class="crd-td">25.132</td><td class="crd-td">37</td><td class="crd-td">118</td><td class="crd-td">1,92M</td><td class="crd-td">Parakou, Nikki</td></tr>
<tr><td class="crd-td"><strong>Montserrado (LBR)</strong></td><td class="crd-td">1.621</td><td class="crd-td">5</td><td class="crd-td">25</td><td class="crd-td">1,7M</td><td class="crd-td">Monrovia (Agglomeration), Monrovia</td></tr>
<tr><td class="crd-td"><strong>Boke (GIN)</strong></td><td class="crd-td">33.924</td><td class="crd-td">14</td><td class="crd-td">71</td><td class="crd-td">1,67M</td><td class="crd-td">Kamsar (Agglomeration), Kamsar</td></tr>
<tr><td class="crd-td"><strong>Goh-Djiboua (CIV)</strong></td><td class="crd-td">15.798</td><td class="crd-td">71</td><td class="crd-td">234</td><td class="crd-td">1,61M</td><td class="crd-td">Gagnoa, Divo</td></tr>
<tr><td class="crd-td"><strong>Faranah (GIN)</strong></td><td class="crd-td">35.540</td><td class="crd-td">7</td><td class="crd-td">46</td><td class="crd-td">1,46M</td><td class="crd-td">Kissidougou, Faranah</td></tr>
<tr><td class="crd-td"><strong>Oueme (BEN)</strong></td><td class="crd-td">1.365</td><td class="crd-td">18</td><td class="crd-td">62</td><td class="crd-td">1,41M</td><td class="crd-td">Porto-Novo (Agglomeration), Porto-Novo</td></tr>
<tr><td class="crd-td"><strong>Bono Region (GHA)</strong></td><td class="crd-td">11.743</td><td class="crd-td">20</td><td class="crd-td">97</td><td class="crd-td">1,39M</td><td class="crd-td">Sunyani (Agglomeration), Berekum (Agglomeration)</td></tr>
<tr><td class="crd-td"><strong>Alibori (BEN)</strong></td><td class="crd-td">26.775</td><td class="crd-td">46</td><td class="crd-td">133</td><td class="crd-td">1,37M</td><td class="crd-td">Malanville, Gaya</td></tr>
<tr><td class="crd-td"><strong>Atlanique (BEN)</strong></td><td class="crd-td">2.985</td><td class="crd-td">20</td><td class="crd-td">84</td><td class="crd-td">1,36M</td><td class="crd-td">Cotonou (Agglomeration), Cotonou</td></tr>
<tr><td class="crd-td"><strong>Bono East Region (GHA)</strong></td><td class="crd-td">23.389</td><td class="crd-td">13</td><td class="crd-td">67</td><td class="crd-td">1,34M</td><td class="crd-td">Techiman (Agglomeration), Kintampo</td></tr>
<tr><td class="crd-td"><strong>Zou (BEN)</strong></td><td class="crd-td">4.855</td><td class="crd-td">12</td><td class="crd-td">54</td><td class="crd-td">1,31M</td><td class="crd-td">Abomey, Bohicon</td></tr>
<tr><td class="crd-td"><strong>Upper East Region (GHA)</strong></td><td class="crd-td">8.435</td><td class="crd-td">17</td><td class="crd-td">61</td><td class="crd-td">1,25M</td><td class="crd-td">Bolgatanga (Agglomeration), Bawku</td></tr>
<tr><td class="crd-td"><strong>Labe (GIN)</strong></td><td class="crd-td">22.781</td><td class="crd-td">8</td><td class="crd-td">39</td><td class="crd-td">1,24M</td><td class="crd-td">Labé (Agglomeration), Labé</td></tr>
<tr><td class="crd-td"><strong>Comoe (CIV)</strong></td><td class="crd-td">13.403</td><td class="crd-td">57</td><td class="crd-td">175</td><td class="crd-td">1,2M</td><td class="crd-td">Abengourou, Agnibilékrou</td></tr>
<tr><td class="crd-td"><strong>Lagunes (CIV)</strong></td><td class="crd-td">20.158</td><td class="crd-td">67</td><td class="crd-td">254</td><td class="crd-td">1,19M</td><td class="crd-td">Dabou, Agboville</td></tr>
<tr><td class="crd-td"><strong>Zanzan (CIV)</strong></td><td class="crd-td">37.855</td><td class="crd-td">18</td><td class="crd-td">71</td><td class="crd-td">1,14M</td><td class="crd-td">Bondoukou, Tanda</td></tr>
<tr><td class="crd-td"><strong>Kara Region (TGO)</strong></td><td class="crd-td">11.514</td><td class="crd-td">13</td><td class="crd-td">68</td><td class="crd-td">1,08M</td><td class="crd-td">Kara, Bassar (Agglomeration)</td></tr>
<tr><td class="crd-td"><strong>Plateau (BEN)</strong></td><td class="crd-td">3.322</td><td class="crd-td">13</td><td class="crd-td">59</td><td class="crd-td">1,03M</td><td class="crd-td">Pobè, Kétou</td></tr>
<tr><td class="crd-td"><strong>Collines (BEN)</strong></td><td class="crd-td">13.940</td><td class="crd-td">19</td><td class="crd-td">90</td><td class="crd-td">1,01M</td><td class="crd-td">Ouèssè, Savalou</td></tr>
<tr><td class="crd-td"><strong>Upper West Region (GHA)</strong></td><td class="crd-td">19.677</td><td class="crd-td">6</td><td class="crd-td">41</td><td class="crd-td">1M</td><td class="crd-td">Wa (Agglomeration), Wa</td></tr>
<tr><td class="crd-td"><strong>Western North Region (GHA)</strong></td><td class="crd-td">9.986</td><td class="crd-td">8</td><td class="crd-td">37</td><td class="crd-td">983,6k</td><td class="crd-td">Sefwi Wiawso (Agglomeration), Bibiani</td></tr>
<tr><td class="crd-td"><strong>Savanes Region (TGO)</strong></td><td class="crd-td">8.778</td><td class="crd-td">17</td><td class="crd-td">62</td><td class="crd-td">982,6k</td><td class="crd-td">Dapaong, Cinkassé</td></tr>
<tr><td class="crd-td"><strong>Valle Du Bandama (CIV)</strong></td><td class="crd-td">28.465</td><td class="crd-td">19</td><td class="crd-td">105</td><td class="crd-td">966,7k</td><td class="crd-td">Bouaké, Bouake (Agglomeration)</td></tr>
<tr><td class="crd-td"><strong>Atakora (BEN)</strong></td><td class="crd-td">21.008</td><td class="crd-td">19</td><td class="crd-td">76</td><td class="crd-td">941k</td><td class="crd-td">Natitingou, Kérou</td></tr>
<tr><td class="crd-td"><strong>Mamou (GIN)</strong></td><td class="crd-td">17.888</td><td class="crd-td">6</td><td class="crd-td">33</td><td class="crd-td">916,5k</td><td class="crd-td">Mamou, Mamou (Agglomeration)</td></tr>
<tr><td class="crd-td"><strong>Donga (BEN)</strong></td><td class="crd-td">11.606</td><td class="crd-td">19</td><td class="crd-td">75</td><td class="crd-td">856,9k</td><td class="crd-td">Djougou, Bassila</td></tr>
<tr><td class="crd-td"><strong>Centrale Region (TGO)</strong></td><td class="crd-td">12.819</td><td class="crd-td">10</td><td class="crd-td">50</td><td class="crd-td">847,4k</td><td class="crd-td">Sokodé, Tchamba (Agglomeration)</td></tr>
<tr><td class="crd-td"><strong>Woroba (CIV)</strong></td><td class="crd-td">31.175</td><td class="crd-td">22</td><td class="crd-td">78</td><td class="crd-td">845,1k</td><td class="crd-td">Séguéla, Touba</td></tr>
<tr><td class="crd-td"><strong>Oti Region (GHA)</strong></td><td class="crd-td">11.309</td><td class="crd-td">10</td><td class="crd-td">37</td><td class="crd-td">792k</td><td class="crd-td">Kpassa, Nkwanta</td></tr>
<tr><td class="crd-td"><strong>North East Region (GHA)</strong></td><td class="crd-td">9.546</td><td class="crd-td">12</td><td class="crd-td">30</td><td class="crd-td">791k</td><td class="crd-td">Walewale, Nalerigu</td></tr>
<tr><td class="crd-td"><strong>Savannah Region (GHA)</strong></td><td class="crd-td">35.276</td><td class="crd-td">6</td><td class="crd-td">30</td><td class="crd-td">738,4k</td><td class="crd-td">Damongo, Salaga</td></tr>
<tr><td class="crd-td"><strong>District Autonome D'Abidjan (CIV)</strong></td><td class="crd-td">1.710</td><td class="crd-td">6</td><td class="crd-td">34</td><td class="crd-td">717,7k</td><td class="crd-td">Abidjan (Agglomeration), Abidjan</td></tr>
<tr><td class="crd-td"><strong>Nimba (LBR)</strong></td><td class="crd-td">11.254</td><td class="crd-td">9</td><td class="crd-td">32</td><td class="crd-td">681,6k</td><td class="crd-td">Ganta, Ganta (Agglomeration)</td></tr>
<tr><td class="crd-td"><strong>Bong (LBR)</strong></td><td class="crd-td">9.120</td><td class="crd-td">5</td><td class="crd-td">19</td><td class="crd-td">579,8k</td><td class="crd-td">Gbarnga, Gbarnga (Agglomeration)</td></tr>
<tr><td class="crd-td"><strong>Kouffo (BEN)</strong></td><td class="crd-td">2.301</td><td class="crd-td">17</td><td class="crd-td">64</td><td class="crd-td">574,2k</td><td class="crd-td">Djakotomey, Klouékanmè</td></tr>
<tr><td class="crd-td"><strong>Mono (BEN)</strong></td><td class="crd-td">1.706</td><td class="crd-td">8</td><td class="crd-td">42</td><td class="crd-td">544,4k</td><td class="crd-td">Lokossa, Comè</td></tr>
<tr><td class="crd-td"><strong>Margibi (LBR)</strong></td><td class="crd-td">2.389</td><td class="crd-td">3</td><td class="crd-td">7</td><td class="crd-td">532,1k</td><td class="crd-td">Dolo Town, Scheiffelin</td></tr>
<tr><td class="crd-td"><strong>Littoral (BEN)</strong></td><td class="crd-td">171</td><td class="crd-td">1</td><td class="crd-td">3</td><td class="crd-td">494k</td><td class="crd-td">Godomey</td></tr>
<tr><td class="crd-td"><strong>Ahafo Region (GHA)</strong></td><td class="crd-td">5.114</td><td class="crd-td">11</td><td class="crd-td">51</td><td class="crd-td">419,3k</td><td class="crd-td">Mmem, Goaso</td></tr>
<tr><td class="crd-td"><strong>Lofa (LBR)</strong></td><td class="crd-td">10.119</td><td class="crd-td">6</td><td class="crd-td">22</td><td class="crd-td">394,3k</td><td class="crd-td">Foya, Voinjama</td></tr>
<tr><td class="crd-td"><strong>Denguele (CIV)</strong></td><td class="crd-td">21.162</td><td class="crd-td">7</td><td class="crd-td">21</td><td class="crd-td">347,6k</td><td class="crd-td">Odienné, Minignan</td></tr>
<tr><td class="crd-td"><strong>Grand Bassa (LBR)</strong></td><td class="crd-td">7.938</td><td class="crd-td">5</td><td class="crd-td">23</td><td class="crd-td">332,9k</td><td class="crd-td">Buchanan, Buchanan (Agglomeration)</td></tr>
<tr><td class="crd-td"><strong>Oio (GNB)</strong></td><td class="crd-td">5.537</td><td class="crd-td">8</td><td class="crd-td">32</td><td class="crd-td">321,5k</td><td class="crd-td">Sédhiou, Bissorã</td></tr>
<tr><td class="crd-td"><strong>Bafatá (GNB)</strong></td><td class="crd-td">6.044</td><td class="crd-td">3</td><td class="crd-td">12</td><td class="crd-td">253,9k</td><td class="crd-td">Bafatá, Bambadinca</td></tr>
<tr><td class="crd-td"><strong>Bomi (LBR)</strong></td><td class="crd-td">2.047</td><td class="crd-td">2</td><td class="crd-td">10</td><td class="crd-td">251,1k</td><td class="crd-td">Tubmanburg, Tubmanburg (Agglomeration)</td></tr>
<tr><td class="crd-td"><strong>Grand Gedeh (LBR)</strong></td><td class="crd-td">10.761</td><td class="crd-td">2</td><td class="crd-td">9</td><td class="crd-td">248,1k</td><td class="crd-td">Zwedru, Zwedru (Agglomeration)</td></tr>
<tr><td class="crd-td"><strong>Cacheu (GNB)</strong></td><td class="crd-td">4.616</td><td class="crd-td">11</td><td class="crd-td">51</td><td class="crd-td">219,7k</td><td class="crd-td">Ziguinchor, Goudomp</td></tr>
<tr><td class="crd-td"><strong>Gabu (GNB)</strong></td><td class="crd-td">9.150</td><td class="crd-td">4</td><td class="crd-td">11</td><td class="crd-td">215,4k</td><td class="crd-td">Gabú, Piche</td></tr>
<tr><td class="crd-td"><strong>District Autonome De Yamoussoukro (CIV)</strong></td><td class="crd-td">1.961</td><td class="crd-td">6</td><td class="crd-td">19</td><td class="crd-td">193,2k</td><td class="crd-td">Yamoussoukro, Yamoussoukro (Agglomeration)</td></tr>
<tr><td class="crd-td"><strong>Sinoe (LBR)</strong></td><td class="crd-td">9.660</td><td class="crd-td">2</td><td class="crd-td">10</td><td class="crd-td">174,7k</td><td class="crd-td">Greenville, Greenville (Agglomeration)</td></tr>
<tr><td class="crd-td"><strong>Grand Cape Mount (LBR)</strong></td><td class="crd-td">4.346</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">150,8k</td><td class="crd-td">-</td></tr>
<tr><td class="crd-td"><strong>Maryland (LBR)</strong></td><td class="crd-td">2.396</td><td class="crd-td">4</td><td class="crd-td">18</td><td class="crd-td">139,9k</td><td class="crd-td">Pleebo, Harper</td></tr>
<tr><td class="crd-td"><strong>Tombali (GNB)</strong></td><td class="crd-td">3.452</td><td class="crd-td">5</td><td class="crd-td">7</td><td class="crd-td">128k</td><td class="crd-td">Quebo, Catió</td></tr>
<tr><td class="crd-td"><strong>River Gee (LBR)</strong></td><td class="crd-td">4.874</td><td class="crd-td">1</td><td class="crd-td">1</td><td class="crd-td">126,8k</td><td class="crd-td">Fish Town</td></tr>
<tr><td class="crd-td"><strong>Gbarpolu (LBR)</strong></td><td class="crd-td">9.706</td><td class="crd-td">1</td><td class="crd-td">2</td><td class="crd-td">124,2k</td><td class="crd-td">Bopolu</td></tr>
<tr><td class="crd-td"><strong>Grand Kru (LBR)</strong></td><td class="crd-td">3.765</td><td class="crd-td">1</td><td class="crd-td">1</td><td class="crd-td">112,9k</td><td class="crd-td">Barclayville</td></tr>
<tr><td class="crd-td"><strong>Rivercess (LBR)</strong></td><td class="crd-td">5.466</td><td class="crd-td">1</td><td class="crd-td">2</td><td class="crd-td">74,8k</td><td class="crd-td">Cesstos City</td></tr>
<tr><td class="crd-td"><strong>Biombo (GNB)</strong></td><td class="crd-td">672</td><td class="crd-td">4</td><td class="crd-td">6</td><td class="crd-td">65,5k</td><td class="crd-td">Ondame, Quinhámel</td></tr>
<tr><td class="crd-td"><strong>Quinara (GNB)</strong></td><td class="crd-td">2.523</td><td class="crd-td">5</td><td class="crd-td">9</td><td class="crd-td">65,2k</td><td class="crd-td">Buba, Bolama</td></tr>
<tr><td class="crd-td"><strong>Bolama (GNB)</strong></td><td class="crd-td">589</td><td class="crd-td">1</td><td class="crd-td">1</td><td class="crd-td">5,7k</td><td class="crd-td">Bubaque</td></tr>
<tr><td class="crd-td"><strong>Bissau (GNB)</strong></td><td class="crd-td">84</td><td class="crd-td">2</td><td class="crd-td">14</td><td class="crd-td">4,9k</td><td class="crd-td">Bissau (Agglomeration), Bissau</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 12.</span> All 120 Admin-1 divisions across the nine Guinea-region states showing surface area, interior assessed sites, observations, 2025AD population and leading towns.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Linear interpolation is bounded strictly between each settlement's earliest and latest observed dates; pre-observation and post-absorption benchmarks are marked with a hyphen (-). Only Grand Cape Mount (Liberia) records zero interior points in Table \ref{tab:admin1-distribution}, as its rural population is allocated directly from county-level Admin-1 kriging rasters.
