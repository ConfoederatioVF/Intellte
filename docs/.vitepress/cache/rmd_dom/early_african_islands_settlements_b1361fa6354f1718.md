---
title: "Western Indian Ocean and Cape Verde Islands"
subtitle: "Settlement Gazetteer: 96 Individually Assessed Sites (500BC-1895AD)"
date: "23 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: early_african_islands_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 96 individually assessed settlements across ten island territories spanning ten sub-regions from 500BC to 1895AD."
hero_label: "fig:hero-settlements-islands"

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

This gazetteer compiles coordinates and multi-period population series for 96 individually assessed settlements across ten island jurisdictions in the western Indian Ocean and African Atlantic between 500BC and 1895AD. Screened from 97 candidate archaeological sites, Malagasy royal hilltops, Comorian stone towns and European colonial ports (1 duplicate alias removed), the entries span ten sub-regions across Madagascar, Mauritius, Réunion, Comoros, Mayotte, Cabo Verde, São Tomé e Príncipe, Seychelles, Saint Helena and the Chagos Archipelago. Active interpolated sites rise from 4 mediaeval centres at 1100AD and 6 at 1400AD to 24 at 1700AD, 48 at 1810AD and 24 at 1890AD, tracing urban development from Dembéni and Mahilaka to Antananarivo (75k peak), Port-Louis (74,5k), Saint-Denis (36,1k), Saint-Pierre (27,8k), Saint-Paul (24,9k), Mindelo (6,24k), São Tomé (6,85k) and Victoria (6,24k).



# Background

Island urbanism around Africa developed along two contrasting archival tracks. On Madagascar and the Comoros, early Austronesian and Swahili-Bantu mariners built stone mosques, fortified hilltop enclosures and coastal entrepots centuries before European arrival [@Beaujard2007EastAfricaMadagascar; @ICM2020MadagascarAtlas]. Across the uninhabited Mascarenes, Seychelles, Chagos, Cabo Verde, São Tomé e Príncipe and Saint Helena, permanent settlement began only after 1460AD with Portuguese, Dutch, French and British colonial ports, slave-worked estates and nineteenth-century coaling stations [@Seibert2014CrioulizacaoCabo; @Allen1999SlavesFreedmen; @Oliver1950TheVoyage]. Uniting archaeological surveys with French East India Company returns, British colonial censuses and Lusophone *ultramar* registers yields a consistent settlement ledger across 305 chronological observations.

# Methodology

## Candidate Screening and Sub-Regional Partition

Candidate localities were screened from regional archaeological inventories, nineteenth-century geographical monographs and colonial statistical returns [@ICM2020MadagascarAtlas; @Grandidier1885HistoirePhysique; @Escamps1858HistoireGeographie]. Within the 627.112 km² study domain bounded by geoBoundaries national polygons [@Runfola2020GeoBoundaries], one duplicate Wave-3 entry for Antananarivo was merged, retaining 96 individually assessed settlements across all ten sub-regions (305 observations).

## Site-Specific Population Estimation

Every entry holds a city-proper spatial scope (96 city-proper, 0 metro) anchored to surveyed enclosure hectares, compound counts, missionary estimates and official port or commune censuses [@Campbell1991ImperialMadagascar; @Larson2000HistoryMemory; @Allen1999SlavesFreedmen]. Tables 1 to 10 display linearly interpolated headcounts at five historical benchmarks (1100AD, 1400AD, 1700AD, 1810AD and 1890AD) alongside each settlement's observed peak population and date, marking eras outside a site's attested span with a hyphen (-).

# Testing and Validation

Across all 96 individually assessed settlements, rank-size regression on peak populations yields an upper-half (n=48) Zipf exponent of $q = 0,866$ ($R^2 = 0,9856$) and a full-sample slope of $q = 1,088$ ($R^2 = 0,8308$) (Figure \ref{fig:settlements-rank}). All ten sub-regions contain multiple attested centres, ranging from 6 sites in Betsileo and Sakalava up to 17 communes and port towns across Mauritius, Réunion and Rodrigues, with zero duplicate aliases remaining after screening.

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-early-african-islands-settlements/fig_03_rank_size.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Zipf rank-size curve across 96 island settlements (q = 0,87, R² = 0,99) and gridded sub-regional population densities in 1890AD.</figcaption>
</figure>

# Results

## Kingdom of Imerina and Central Highlands

Table \ref{tab:sub-merina} documents 9 settlements in central Madagascar and its eastern Merina corridor, led by Antananarivo (75k peak in 1817AD), Toamasina (10,2k), Ambohimanga (6,42k), Mahavelona (5,42k) and Alasora (4,12k) [@Raison1977PerceptionRealisation; @Campbell1991ImperialMadagascar; @Larson2000HistoryMemory].

<figure class="crd-table-figure" id="tab:sub-merina">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1100AD</th><th class="crd-th">1400AD</th><th class="crd-th">1700AD</th><th class="crd-th">1810AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Antananarivo</strong></td><td class="crd-td">MDG: -18,93, 47,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11k</td><td class="crd-td">57,8k</td><td class="crd-td">50,3k</td><td class="crd-td">75k (1817AD)</td></tr>
<tr><td class="crd-td"><strong>Toamasina</strong></td><td class="crd-td">MDG: -18,14, 49,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">9,7k</td><td class="crd-td">10,2k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Ambohimanga</strong></td><td class="crd-td">MDG: -18,76, 47,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">6,4k (1787AD)</td></tr>
<tr><td class="crd-td"><strong>Mahavelona</strong></td><td class="crd-td">MDG: -17,68, 49,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">5,4k (1775AD)</td></tr>
<tr><td class="crd-td"><strong>Alasora</strong></td><td class="crd-td">MDG: -18,96, 47,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">4k</td><td class="crd-td">3,7k</td><td class="crd-td">4,1k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Antsirabe</strong></td><td class="crd-td">MDG: -19,87, 47,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Fenoarivo Atsinanana</strong></td><td class="crd-td">MDG: -17,38, 49,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ambatolampy</strong></td><td class="crd-td">MDG: -19,39, 47,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Miarinarivo</strong></td><td class="crd-td">MDG: -18,96, 46,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1870AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in the Kingdom of Imerina and Central Highlands (1100AD to 1890AD).</figcaption>
</figure>

## Betsileo and Southern Plateau Kingdoms

Table \ref{tab:sub-betsileo} lists 6 settlements across the southern highland kingdoms and central western outlet, anchored by Fianarantsoa (9,4k), Ambositra (4,85k), Morondava (4,45k) and Manjanary (4,42k) [@Grandidier1885HistoirePhysique].

<figure class="crd-table-figure" id="tab:sub-betsileo">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1100AD</th><th class="crd-th">1400AD</th><th class="crd-th">1700AD</th><th class="crd-th">1810AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Fianarantsoa</strong></td><td class="crd-td">MDG: -21,45, 47,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,1k</td><td class="crd-td">9,4k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Ambositra</strong></td><td class="crd-td">MDG: -20,53, 47,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">4,8k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Morondava</strong></td><td class="crd-td">MDG: -20,3, 44,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">4,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Manjanary</strong></td><td class="crd-td">MDG: -21,23, 48,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">4,4k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Farafangana</strong></td><td class="crd-td">MDG: -22,82, 47,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Ihosy</strong></td><td class="crd-td">MDG: -22,4, 46,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1885AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in the Betsileo and Southern Plateau Kingdoms (1100AD to 1890AD).</figcaption>
</figure>

## Betsimisaraka Confederation and Northern Littoral

Table \ref{tab:sub-betsimisaraka} presents 11 northern and eastern Malagasy centres, spanning mediaeval ports at Mahilaka (6,25k), Langany (4,65k) and Vohemar (3,82k) alongside Ambodifototra on Île Sainte-Marie (3,42k), Ambatondrazaka (4,48k), Andoany on Nosy Be (4,28k) and Mahajanga (14,2k) [@Beaujard2007EastAfricaMadagascar; @ICM2020MadagascarAtlas].

<figure class="crd-table-figure" id="tab:sub-betsimisaraka">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1100AD</th><th class="crd-th">1400AD</th><th class="crd-th">1700AD</th><th class="crd-th">1810AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mahajanga</strong></td><td class="crd-td">MDG: -15,68, 46,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,9k</td><td class="crd-td">13,6k</td><td class="crd-td">14,2k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Mahilaka</strong></td><td class="crd-td">MDG: -13,92, 48,35</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k (1380AD)</td></tr>
<tr><td class="crd-td"><strong>Langany</strong></td><td class="crd-td">MDG: -15,3, 47,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1506AD)</td></tr>
<tr><td class="crd-td"><strong>Ambatondrazaka</strong></td><td class="crd-td">MDG: -17,83, 48,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,5k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Andoany</strong></td><td class="crd-td">MDG: -13,4, 48,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Vohemar</strong></td><td class="crd-td">MDG: -13,37, 50,01</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">2,1k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">3,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Antsiranana</strong></td><td class="crd-td">MDG: -12,32, 49,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,4k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Ambodifototra</strong></td><td class="crd-td">MDG: -17, 49,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">3,4k (1865AD)</td></tr>
<tr><td class="crd-td"><strong>Maroantsetra</strong></td><td class="crd-td">MDG: -15,43, 49,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Antsohihy</strong></td><td class="crd-td">MDG: -14,88, 47,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Sambava</strong></td><td class="crd-td">MDG: -14,28, 50,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1895AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed settlements in the Betsimisaraka Confederation and Northern Littoral (1100AD to 1890AD).</figcaption>
</figure>

## Antandroy, Mahafaly and Anosy South

Table \ref{tab:sub-antandroy} compiles 7 southern Malagasy sites, from mediaeval walled settlements at Andranosoa (2,94k) and Talaky (1,85k) to Fanjahira (4,45k), Vangaindrano (3,65k), Toliara (3,24k) and Toalagnaro (3,12k) [@ICM2020MadagascarAtlas; @Escamps1858HistoireGeographie].

<figure class="crd-table-figure" id="tab:sub-antandroy">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1100AD</th><th class="crd-th">1400AD</th><th class="crd-th">1700AD</th><th class="crd-th">1810AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Fanjahira</strong></td><td class="crd-td">MDG: -24,98, 46,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k (1648AD)</td></tr>
<tr><td class="crd-td"><strong>Vangaindrano</strong></td><td class="crd-td">MDG: -23,35, 47,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Toliara</strong></td><td class="crd-td">MDG: -23,35, 43,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,2k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Toalagnaro</strong></td><td class="crd-td">MDG: -25,02, 46,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Andranosoa</strong></td><td class="crd-td">MDG: -24,75, 45,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1280AD)</td></tr>
<tr><td class="crd-td"><strong>Talaky</strong></td><td class="crd-td">MDG: -25,18, 45,75</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1220AD)</td></tr>
<tr><td class="crd-td"><strong>Morombe</strong></td><td class="crd-td">MDG: -21,74, 43,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1895AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements in Antandroy, Mahafaly and Anosy South (1100AD to 1890AD).</figcaption>
</figure>

## Sakalava Kingdoms of Menabe and Boina

Table \ref{tab:sub-sakalava} records 6 western Malagasy centres, including the early royal capitals of Marovoay (8,4k), Boeny (6,45k) and Kingany (3,18k) alongside Maintirano (2,98k), Maevatanana (2,15k) and Tsiromandidy (1,42k) [@Berg1985TheSacred; @Grandidier1885HistoirePhysique].

<figure class="crd-table-figure" id="tab:sub-sakalava">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1100AD</th><th class="crd-th">1400AD</th><th class="crd-th">1700AD</th><th class="crd-th">1810AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Marovoay</strong></td><td class="crd-td">MDG: -16,11, 46,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,5k</td><td class="crd-td">-</td><td class="crd-td">8,4k (1790AD)</td></tr>
<tr><td class="crd-td"><strong>Boeny</strong></td><td class="crd-td">MDG: -15,83, 45,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k (1614AD)</td></tr>
<tr><td class="crd-td"><strong>Kingany</strong></td><td class="crd-td">MDG: -15,79, 45,92</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1480AD)</td></tr>
<tr><td class="crd-td"><strong>Maintirano</strong></td><td class="crd-td">MDG: -18,06, 44,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Maevatanana</strong></td><td class="crd-td">MDG: -16,95, 46,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Tsiromandidy</strong></td><td class="crd-td">MDG: -18,78, 46,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1895AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed settlements in the Sakalava Kingdoms of Menabe and Boina (1100AD to 1890AD).</figcaption>
</figure>

## Mascarenes: Mauritius, Réunion and Rodrigues

Table \ref{tab:sub-mascarenes} details 17 Mascarene ports and plantation districts across 82 census observations, headed by Port-Louis (74,5k), Saint-Denis (36,1k), Saint-Pierre (27,8k), Saint-Paul (24,9k), Saint-Benoît (16,2k), Saint-Louis (14,7k) and Saint-André (13,8k) [@Allen1999SlavesFreedmen; @Oliver1950TheVoyage].

<figure class="crd-table-figure" id="tab:sub-mascarenes">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1100AD</th><th class="crd-th">1400AD</th><th class="crd-th">1700AD</th><th class="crd-th">1810AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Port-Louis</strong></td><td class="crd-td">MUS: -20,22, 57,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24,6k</td><td class="crd-td">62,6k</td><td class="crd-td">74,5k (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Denis</strong></td><td class="crd-td">REU: -20,88, 55,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">251</td><td class="crd-td">15,3k</td><td class="crd-td">-</td><td class="crd-td">36,1k (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Pierre</strong></td><td class="crd-td">REU: -21,33, 55,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,7k</td><td class="crd-td">-</td><td class="crd-td">27,8k (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Paul</strong></td><td class="crd-td">REU: -21,01, 55,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">370</td><td class="crd-td">14,2k</td><td class="crd-td">-</td><td class="crd-td">24,9k (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Benoît</strong></td><td class="crd-td">REU: -21,04, 55,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,1k</td><td class="crd-td">-</td><td class="crd-td">16,2k (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Louis</strong></td><td class="crd-td">REU: -21,29, 55,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">14,7k (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-André</strong></td><td class="crd-td">REU: -20,96, 55,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">13,8k (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Curepipe</strong></td><td class="crd-td">MUS: -20,32, 57,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11k</td><td class="crd-td">11,3k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Beau-Bassin/Rose-Hill</strong></td><td class="crd-td">MUS: -20,23, 57,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,6k</td><td class="crd-td">9,8k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Mahébourg</strong></td><td class="crd-td">MUS: -20,42, 57,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">253</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">7,4k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Centre de Flacq</strong></td><td class="crd-td">MUS: -20,22, 57,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">6,9k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Pamplemousses</strong></td><td class="crd-td">MUS: -20,1, 57,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">6,4k (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Vacoas/Phoenix</strong></td><td class="crd-td">MUS: -20,3, 57,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Quatre-Bornes</strong></td><td class="crd-td">MUS: -20,26, 57,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Surinam</strong></td><td class="crd-td">MUS: -20,51, 57,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">724</td><td class="crd-td">-</td><td class="crd-td">2,8k (1871AD)</td></tr>
<tr><td class="crd-td"><strong>Le Port</strong></td><td class="crd-td">REU: -20,94, 55,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Port Mathurin</strong></td><td class="crd-td">MUS: -19,72, 63,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">131</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1891AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed settlements in the Mascarenes (Mauritius, Réunion and Rodrigues, 1100AD to 1890AD).</figcaption>
</figure>

## Comoros Sultanates and Mayotte

Table \ref{tab:sub-comoros} covers 12 Swahili-Shirazi sultanate ports and towns across Grande Comore, Anjouan, Mohéli and Mayotte, led by Mutsamudu (6,42k), Moroni (5,42k), Domoni (5,12k), Iconi (3,12k), Tsingoni (2,85k), Dembéni (2,68k) and Sima (2,64k) [@Beaujard2007EastAfricaMadagascar].

<figure class="crd-table-figure" id="tab:sub-comoros">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1100AD</th><th class="crd-th">1400AD</th><th class="crd-th">1700AD</th><th class="crd-th">1810AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mutsamudu</strong></td><td class="crd-td">COM: -12,17, 44,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k</td><td class="crd-td">6k</td><td class="crd-td">6k</td><td class="crd-td">6,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Moroni</strong></td><td class="crd-td">COM: -11,69, 43,26</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">4,3k</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">5,4k (1886AD)</td></tr>
<tr><td class="crd-td"><strong>Domoni</strong></td><td class="crd-td">COM: -12,26, 44,53</td><td class="crd-td">2,1k</td><td class="crd-td">4k</td><td class="crd-td">5k</td><td class="crd-td">4,6k</td><td class="crd-td">3,9k</td><td class="crd-td">5,1k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Iconi</strong></td><td class="crd-td">COM: -11,75, 43,23</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">3,1k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Tsingoni</strong></td><td class="crd-td">MYT: -12,79, 45,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1538AD)</td></tr>
<tr><td class="crd-td"><strong>Dembéni</strong></td><td class="crd-td">MYT: -12,84, 45,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1050AD)</td></tr>
<tr><td class="crd-td"><strong>Sima</strong></td><td class="crd-td">COM: -12,2, 44,28</td><td class="crd-td">2,3k</td><td class="crd-td">2,3k</td><td class="crd-td">2k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Fomboni</strong></td><td class="crd-td">COM: -12,29, 43,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1886AD)</td></tr>
<tr><td class="crd-td"><strong>Mitsamiouli</strong></td><td class="crd-td">COM: -11,41, 43,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Foumbouni</strong></td><td class="crd-td">COM: -11,87, 43,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Dzaoudzi</strong></td><td class="crd-td">MYT: -12,78, 45,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Mamoudzou</strong></td><td class="crd-td">MYT: -12,78, 45,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">840 (1886AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Individually assessed settlements in the Comoros Sultanates and Mayotte (1100AD to 1890AD).</figcaption>
</figure>

## Portuguese Cabo Verde Archipelago

Table \ref{tab:sub-caboverde} lists 13 Cabo Verdean towns across the Sotavento and Barlavento islands, from early Ribeira Grande on Santiago (3,15k) and São Filipe on Fogo (3,24k) to Praia (4,65k), Ribeira Grande on Santo Antão (3,68k), Ribeira Brava (3,05k) and Mindelo (6,24k) [@Seibert2014CrioulizacaoCabo; @Keese2024BetweenLand; @Jung2015MigrationRemittances].

<figure class="crd-table-figure" id="tab:sub-caboverde">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1100AD</th><th class="crd-th">1400AD</th><th class="crd-th">1700AD</th><th class="crd-th">1810AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mindelo</strong></td><td class="crd-td">CPV: 16,88, -24,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">6,2k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Praia</strong></td><td class="crd-td">CPV: 14,94, -23,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">912</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">4,6k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Ribeira Grande</strong></td><td class="crd-td">CPV: 17,18, -25,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">3,7k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>São Filipe</strong></td><td class="crd-td">CPV: 14,9, -24,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Santiago de Cabo Verde</strong></td><td class="crd-td">CPV: 14,92, -23,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1582AD)</td></tr>
<tr><td class="crd-td"><strong>Ribeira Brava</strong></td><td class="crd-td">CPV: 16,62, -24,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">3k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Nova Sintra</strong></td><td class="crd-td">CPV: 14,87, -24,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Assomada</strong></td><td class="crd-td">CPV: 15,11, -23,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Ponta do Sol</strong></td><td class="crd-td">CPV: 17,19, -25,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">875</td><td class="crd-td">-</td><td class="crd-td">1,7k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Sal Rei</strong></td><td class="crd-td">CPV: 16,18, -22,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">870</td><td class="crd-td">-</td><td class="crd-td">1,2k (1832AD)</td></tr>
<tr><td class="crd-td"><strong>Tarrafal</strong></td><td class="crd-td">CPV: 15,27, -23,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Porto Inglês</strong></td><td class="crd-td">CPV: 15,14, -23,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">787</td><td class="crd-td">-</td><td class="crd-td">940 (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Santa Maria</strong></td><td class="crd-td">CPV: 16,6, -22,91</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">680 (1878AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Individually assessed settlements in the Portuguese Cabo Verde Archipelago (1100AD to 1890AD).</figcaption>
</figure>

## São Tomé, Príncipe and South Atlantic Islands

Table \ref{tab:sub-stp} presents 8 Gulf of Guinea and South Atlantic settlements, pairing São Tomé (6,85k), Santo António (2,35k), São João dos Angolares (1,42k) and Trindade (1,24k) with Jamestown (2,45k) and Longwood (640) on Saint Helena, Georgetown on Ascension (310) and Edinburgh of the Seven Seas on Tristan da Cunha (109) [@Fonju2021ToticPortuguese; @Berthet2016SaoTome].

<figure class="crd-table-figure" id="tab:sub-stp">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1100AD</th><th class="crd-th">1400AD</th><th class="crd-th">1700AD</th><th class="crd-th">1810AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>São Tomé</strong></td><td class="crd-td">STP: 0,33, 6,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">6,8k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Jamestown</strong></td><td class="crd-td">SHN: -15,92, -5,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">385</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Santo António</strong></td><td class="crd-td">STP: 1,64, 7,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>São João dos Angolares</strong></td><td class="crd-td">STP: 0,13, 6,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,4k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Trindade</strong></td><td class="crd-td">STP: 0,3, 6,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Longwood</strong></td><td class="crd-td">SHN: -15,95, -5,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">522</td><td class="crd-td">640 (1817AD)</td></tr>
<tr><td class="crd-td"><strong>Georgetown</strong></td><td class="crd-td">SHN: -7,93, -14,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">242</td><td class="crd-td">310 (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Edinburgh of the Seven Seas</strong></td><td class="crd-td">SHN: -37,07, -12,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">109 (1880AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Individually assessed settlements in São Tomé, Príncipe and the South Atlantic Islands (1100AD to 1890AD).</figcaption>
</figure>

## Seychelles and Chagos Archipelago

Table \ref{tab:sub-seychelles} catalogues 7 settlements across the granitic Seychelles and Chagos copra stations: Victoria (6,24k), Grand'Anse on Praslin (1,18k), Anse Royale (1,12k) and La Digue (720) alongside East Point on Diego Garcia (428), Île du Coin in Peros Banhos (224) and Boddam in Salomon Islands (192).

<figure class="crd-table-figure" id="tab:sub-seychelles">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1100AD</th><th class="crd-th">1400AD</th><th class="crd-th">1700AD</th><th class="crd-th">1810AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Victoria</strong></td><td class="crd-td">SYC: -4,67, 55,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">6,2k</td><td class="crd-td">6,2k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Grand'Anse</strong></td><td class="crd-td">SYC: -4,33, 55,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">293</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Anse Royale</strong></td><td class="crd-td">SYC: -4,73, 55,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1871AD)</td></tr>
<tr><td class="crd-td"><strong>La Digue</strong></td><td class="crd-td">SYC: -4,36, 55,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">710</td><td class="crd-td">720 (1891AD)</td></tr>
<tr><td class="crd-td"><strong>East Point (Diego Garcia)</strong></td><td class="crd-td">IOT: -7,35, 72,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">428 (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Île du Coin</strong></td><td class="crd-td">IOT: -5,44, 71,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">224 (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Boddam</strong></td><td class="crd-td">IOT: -5,32, 72,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">192 (1881AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 10.</span> Individually assessed settlements in the Seychelles and Chagos Archipelago (1100AD to 1890AD).</figcaption>
</figure>

# Limitations

Three caveats govern this gazetteer. First, 18 of the 96 settlements hold single-date observations (mostly 1878AD to 1895AD colonial surveys), so interpolated benchmark columns show a hyphen outside their attested span while reporting their full value in the peak column. Second, pre-colonial Malagasy and Comorian archaeological estimates carry wider uncertainty bounds than eighteenth- and nineteenth-century Mascarene or Portuguese enumerations [@ICM2020MadagascarAtlas; @Allen1999SlavesFreedmen]. Third, Seychelles and Chagos urban populations appear here in full even though those tiny island polygons register zero rural population on the coarse 5-arcminute regional raster.

# Conclusion

Together, the 96 individually assessed settlements document the long transition from Austronesian-Bantu and Swahili-Shirazi coastal townlands to colonial sugar ports, coaling stations and unified highland capitals across ten island jurisdictions between 500BC and 1895AD.

# Appendix

## Sub-Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} sums the individually assessed site counts and combined interpolated urban populations across all ten sub-regions from 1100AD to 1890AD.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion (Sites)</th><th class="crd-th">1100AD</th><th class="crd-th">1400AD</th><th class="crd-th">1700AD</th><th class="crd-th">1810AD</th><th class="crd-th">1890AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kingdom of Imerina and Central Highlands (9)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">14,6k</td><td class="crd-td">77,3k</td><td class="crd-td">63,7k</td></tr>
<tr><td class="crd-td"><strong>Betsileo and Southern Plateau Kingdoms (6)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">3,6k</td><td class="crd-td">17,9k</td></tr>
<tr><td class="crd-td"><strong>Betsimisaraka Confederation and Sainte-Marie (11)</strong></td><td class="crd-td">3k</td><td class="crd-td">3,2k</td><td class="crd-td">3,2k</td><td class="crd-td">14,1k</td><td class="crd-td">17k</td></tr>
<tr><td class="crd-td"><strong>Antandroy, Mahafaly and Anosy South (7)</strong></td><td class="crd-td">1,4k</td><td class="crd-td">0</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>Sakalava Kingdoms of Menabe and Boina (6)</strong></td><td class="crd-td">0</td><td class="crd-td">2,6k</td><td class="crd-td">0</td><td class="crd-td">6,5k</td><td class="crd-td">2,9k</td></tr>
<tr><td class="crd-td"><strong>Mascarenes (Ile de France and Bourbon) (17)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">873</td><td class="crd-td">88,7k</td><td class="crd-td">84,3k</td></tr>
<tr><td class="crd-td"><strong>Comoros Sultanates and Mayotte (12)</strong></td><td class="crd-td">4,5k</td><td class="crd-td">11,3k</td><td class="crd-td">26,8k</td><td class="crd-td">25,9k</td><td class="crd-td">11,7k</td></tr>
<tr><td class="crd-td"><strong>Portuguese Cabo Verde Archipelago (13)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">4,7k</td><td class="crd-td">15,2k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Sao Tome, Principe and Saint Helena (8)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">5,9k</td><td class="crd-td">8,8k</td><td class="crd-td">3k</td></tr>
<tr><td class="crd-td"><strong>Seychelles, Chagos and Iles Eparses (7)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">1,9k</td><td class="crd-td">8k</td></tr>
<tr><td class="crd-td"><strong>All Subregions (96)</strong></td><td class="crd-td">8,9k</td><td class="crd-td">17,2k</td><td class="crd-td">57,8k</td><td class="crd-td">244,4k</td><td class="crd-td">217,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 11.</span> Individually assessed site counts and combined interpolated populations across ten sub-regions from 1100AD to 1890AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Linear interpolation is bounded strictly between each settlement's earliest and latest observed dates; pre-foundation and post-abandonment benchmarks are left blank with a hyphen (-).
