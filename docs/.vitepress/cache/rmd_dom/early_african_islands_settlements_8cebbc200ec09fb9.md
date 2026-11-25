---
title: "Western Indian Ocean and Cape Verde Islands"
subtitle: "Settlement Gazetteer: 492 Individually Assessed Sites (500BC-1895AD)"
date: "24 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: early_african_islands_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 492 individually assessed settlements across ten island territories spanning ten sub-regions from 500BC to 1895AD."
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

This gazetteer compiles coordinates and multi-period population series for 492 individually assessed settlements across ten island jurisdictions in the western Indian Ocean and African Atlantic between 500BC and 1895AD. Screened from 619 candidate archaeological sites, Malagasy royal hilltops, Comorian stone towns and European colonial ports (127 duplicate alias removed), the entries span ten sub-regions across Madagascar, Mauritius, Réunion, Comoros, Mayotte, Cabo Verde, São Tomé e Príncipe, Seychelles, Saint Helena and the Chagos Archipelago. Active interpolated sites rise from 47 mediaeval centres at 1100AD and 55 at 1400AD to 179 at 1700AD, 275 at 1810AD and 43 at 1890AD, tracing urban development from Dembéni and Mahilaka to Antananarivo (75k peak), Port-Louis (74,5k), Saint-Denis (36,1k), Saint-Pierre (27,8k), Saint-Paul (24,9k), Mindelo (6,24k), São Tomé (6,85k) and Victoria (6,24k).



# Background

Island urbanism around Africa developed along two contrasting archival tracks. On Madagascar and the Comoros, early Austronesian and Swahili-Bantu mariners built stone mosques, fortified hilltop enclosures and coastal entrepots centuries before European arrival [@Beaujard2007EastAfricaMadagascar; @ICM2020MadagascarAtlas]. Across the uninhabited Mascarenes, Seychelles, Chagos, Cabo Verde, São Tomé e Príncipe and Saint Helena, permanent settlement began only after 1460AD with Portuguese, Dutch, French and British colonial ports, slave-worked estates and nineteenth-century coaling stations [@Seibert2014CrioulizacaoCabo; @Allen1999SlavesFreedmen; @Oliver1950TheVoyage]. Uniting archaeological surveys with French East India Company returns, British colonial censuses and Lusophone *ultramar* registers yields a consistent settlement ledger across 1.909 chronological observations.

# Methodology

## Candidate Screening and Sub-Regional Partition

Candidate localities were screened from regional archaeological inventories, nineteenth-century geographical monographs and colonial statistical returns [@ICM2020MadagascarAtlas; @Grandidier1885HistoirePhysique; @Escamps1858HistoireGeographie]. Within the 627.112 km² study domain bounded by geoBoundaries national polygons [@Runfola2020GeoBoundaries], one duplicate Wave-3 entry for Antananarivo was merged, retaining 492 individually assessed settlements across all ten sub-regions (1.909 observations).

## Site-Specific Population Estimation

Every entry holds a city-proper spatial scope (96 city-proper, 0 metro) anchored to surveyed enclosure hectares, compound counts, missionary estimates and official port or commune censuses [@Campbell1991ImperialMadagascar; @Larson2000HistoryMemory; @Allen1999SlavesFreedmen]. Tables 1 to 10 display linearly interpolated headcounts at five historical benchmarks (1100AD, 1400AD, 1700AD, 1810AD and 1890AD) alongside each settlement's observed peak population and date, marking eras outside a site's attested span with a hyphen (-).

# Testing and Validation

Across all 492 individually assessed settlements, rank-size regression on peak populations yields an upper-half (n=48) Zipf exponent of $q = 0,866$ ($R^2 = 0,9856$) and a full-sample slope of $q = 1,088$ ($R^2 = 0,8308$) (Figure \ref{fig:settlements-rank}). All ten sub-regions contain multiple attested centres, ranging from 6 sites in Betsileo and Sakalava up to 17 communes and port towns across Mauritius, Réunion and Rodrigues, with zero duplicate aliases remaining after screening.

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-early-african-islands-settlements/fig_03_rank_size.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Zipf rank-size curve across 96 island settlements (q = 0,87, R² = 0,99) and gridded sub-regional population densities in 1890AD.</figcaption>
</figure>

# Results

## Kingdom of Imerina and Central Highlands

Table \ref{tab:sub-merina} documents 78 settlements in central Madagascar and its eastern Merina corridor, led by Antananarivo (75k peak in 1817AD), Toamasina (10,2k), Ambohimanga (6,42k), Mahavelona (5,42k) and Alasora (4,12k) [@Raison1977PerceptionRealisation; @Campbell1991ImperialMadagascar; @Larson2000HistoryMemory].

<figure class="crd-table-figure" id="tab:sub-merina">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1100AD</th><th class="crd-th">1400AD</th><th class="crd-th">1700AD</th><th class="crd-th">1810AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Antananarivo</strong></td><td class="crd-td">MDG: -18,93, 47,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11k</td><td class="crd-td">57,8k</td><td class="crd-td">48,8k</td><td class="crd-td">75k (1817AD)</td></tr>
<tr><td class="crd-td"><strong>Toamasina</strong></td><td class="crd-td">MDG: -18,14, 49,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">9,5k</td><td class="crd-td">10,2k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Ambohimanga</strong></td><td class="crd-td">MDG: -18,76, 47,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">6,4k (1787AD)</td></tr>
<tr><td class="crd-td"><strong>Mantasoa</strong></td><td class="crd-td">MDG: -19,02, 47,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k (1855AD)</td></tr>
<tr><td class="crd-td"><strong>Mahavelona</strong></td><td class="crd-td">MDG: -17,68, 49,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">5,4k (1775AD)</td></tr>
<tr><td class="crd-td"><strong>Fanongoavana</strong></td><td class="crd-td">MDG: -18,97, 47,74</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k (1490AD)</td></tr>
<tr><td class="crd-td"><strong>Alasora</strong></td><td class="crd-td">MDG: -18,96, 47,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">4k</td><td class="crd-td">3,7k</td><td class="crd-td">4,1k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Andovoranto</strong></td><td class="crd-td">MDG: -18,95, 49,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">3,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ambohidrabiby</strong></td><td class="crd-td">MDG: -18,77, 47,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Ilafy</strong></td><td class="crd-td">MDG: -18,85, 47,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Ambohimangakely</strong></td><td class="crd-td">MDG: -18,9, 47,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Fihaonana</strong></td><td class="crd-td">MDG: -18,6, 47,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ankadivoribe</strong></td><td class="crd-td">MDG: -19,02, 47,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Antsirabe</strong></td><td class="crd-td">MDG: -19,87, 47,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Fenoarivo Atsinanana</strong></td><td class="crd-td">MDG: -17,38, 49,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ambohidratrimo</strong></td><td class="crd-td">MDG: -18,82, 47,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1790AD)</td></tr>
<tr><td class="crd-td"><strong>Ambohitrambo</strong></td><td class="crd-td">MDG: -18,95, 47,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Fieferana</strong></td><td class="crd-td">MDG: -18,82, 47,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Antoby</strong></td><td class="crd-td">MDG: -18,55, 47,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Fortification</strong></td><td class="crd-td">MDG: -18,76, 47,54</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Anosimanjaka</strong></td><td class="crd-td">MDG: -18,95, 47,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ambatolampy</strong></td><td class="crd-td">MDG: -19,39, 47,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Ambohimalaza</strong></td><td class="crd-td">MDG: -18,88, 47,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1790AD)</td></tr>
<tr><td class="crd-td"><strong>Ambohitromby</strong></td><td class="crd-td">MDG: -18,71, 47,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ankadivory</strong></td><td class="crd-td">MDG: -18,82, 47,58</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Talata Volonondry</strong></td><td class="crd-td">MDG: -18,73, 47,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Betafo</strong></td><td class="crd-td">MDG: -19,85, 46,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Andoharanofotsy</strong></td><td class="crd-td">MDG: -18,97, 47,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Tsiafahy</strong></td><td class="crd-td">MDG: -19,05, 47,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Miarinarivo</strong></td><td class="crd-td">MDG: -18,96, 46,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Ivondro</strong></td><td class="crd-td">MDG: -18,23, 49,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Beforona</strong></td><td class="crd-td">MDG: -18,89, 48,58</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Behenjy</strong></td><td class="crd-td">MDG: -19,21, 47,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Imerimanjaka</strong></td><td class="crd-td">MDG: -18,98, 47,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Ambohibary</strong></td><td class="crd-td">MDG: -19,62, 47,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">858</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ambohimasina</strong></td><td class="crd-td">MDG: -19,82, 46,82</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Antongona</strong></td><td class="crd-td">MDG: -18,93, 47,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1790AD)</td></tr>
<tr><td class="crd-td"><strong>Ambohitrolomahitsy</strong></td><td class="crd-td">MDG: -18,7, 47,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Sabotsy Namehana</strong></td><td class="crd-td">MDG: -18,83, 47,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1790AD)</td></tr>
<tr><td class="crd-td"><strong>Imerintsiatosika</strong></td><td class="crd-td">MDG: -18,98, 47,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">977</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 38 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in the Kingdom of Imerina and Central Highlands (1100AD to 1890AD) (top 40 of 78 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Betsileo and Southern Plateau Kingdoms

Table \ref{tab:sub-betsileo} lists 39 settlements across the southern highland kingdoms and central western outlet, anchored by Fianarantsoa (9,4k), Ambositra (4,85k), Morondava (4,45k) and Manjanary (4,42k) [@Grandidier1885HistoirePhysique].

<figure class="crd-table-figure" id="tab:sub-betsileo">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1100AD</th><th class="crd-th">1400AD</th><th class="crd-th">1700AD</th><th class="crd-th">1810AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Fianarantsoa</strong></td><td class="crd-td">MDG: -21,45, 47,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,1k</td><td class="crd-td">9,4k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Ambositra</strong></td><td class="crd-td">MDG: -20,53, 47,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">4,8k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Morondava</strong></td><td class="crd-td">MDG: -20,3, 44,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">4,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Manjanary</strong></td><td class="crd-td">MDG: -21,23, 48,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">4,4k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Fianarantsoa-Ifandana</strong></td><td class="crd-td">MDG: -21,48, 47,18</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1540AD)</td></tr>
<tr><td class="crd-td"><strong>Alakamisy Ambohimaha</strong></td><td class="crd-td">MDG: -21,3, 47,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">3,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Vatomasina</strong></td><td class="crd-td">MDG: -22,26, 47,86</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">3,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Fanjakana</strong></td><td class="crd-td">MDG: -21,39, 46,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">3,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ivato Vohipeno</strong></td><td class="crd-td">MDG: -22,37, 47,81</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Vohibato</strong></td><td class="crd-td">MDG: -21,53, 47,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Vohipeno</strong></td><td class="crd-td">MDG: -22,35, 47,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Farafangana</strong></td><td class="crd-td">MDG: -22,82, 47,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Mahanoro</strong></td><td class="crd-td">MDG: -19,89, 48,81</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Ivato Ambositra</strong></td><td class="crd-td">MDG: -20,62, 47,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ikongo</strong></td><td class="crd-td">MDG: -21,88, 47,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Imady</strong></td><td class="crd-td">MDG: -20,53, 47,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Manampatrana</strong></td><td class="crd-td">MDG: -22,79, 47,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ihosy</strong></td><td class="crd-td">MDG: -22,4, 46,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Belo sur Mer</strong></td><td class="crd-td">MDG: -20,74, 44,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">734</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Teniky</strong></td><td class="crd-td">MDG: -22,29, 45,36</td><td class="crd-td">1,1k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1440AD)</td></tr>
<tr><td class="crd-td"><strong>Ilaka Centre</strong></td><td class="crd-td">MDG: -20,3, 47,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">696</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Nasandratrony</strong></td><td class="crd-td">MDG: -21,48, 46,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">712</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Andoharanomaitso</strong></td><td class="crd-td">MDG: -21,66, 46,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">724</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Mahazoarivo</strong></td><td class="crd-td">MDG: -20,13, 47,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">669</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Sandrandahy</strong></td><td class="crd-td">MDG: -20,37, 47,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">698</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Lokomby</strong></td><td class="crd-td">MDG: -22,17, 47,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">694</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Soavina Betsileo</strong></td><td class="crd-td">MDG: -20,68, 46,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">662</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Malaimbandy</strong></td><td class="crd-td">MDG: -20,35, 45,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Sendrisoa</strong></td><td class="crd-td">MDG: -22,01, 46,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">1,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Mahabo</strong></td><td class="crd-td">MDG: -20,38, 44,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Ranohira</strong></td><td class="crd-td">MDG: -22,56, 45,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">924</td><td class="crd-td">-</td><td class="crd-td">1,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Antsenavolo</strong></td><td class="crd-td">MDG: -21,37, 47,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">983</td><td class="crd-td">-</td><td class="crd-td">1,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Itremo</strong></td><td class="crd-td">MDG: -20,59, 46,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">911</td><td class="crd-td">-</td><td class="crd-td">1,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Sahambavy</strong></td><td class="crd-td">MDG: -21,45, 47,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">879</td><td class="crd-td">-</td><td class="crd-td">1,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Bekopaka</strong></td><td class="crd-td">MDG: -19,14, 44,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">873</td><td class="crd-td">-</td><td class="crd-td">1,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kianjavato</strong></td><td class="crd-td">MDG: -21,38, 47,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">888</td><td class="crd-td">-</td><td class="crd-td">1,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Tolongoina</strong></td><td class="crd-td">MDG: -21,56, 47,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">878</td><td class="crd-td">-</td><td class="crd-td">1,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ankaramena</strong></td><td class="crd-td">MDG: -21,96, 46,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">845</td><td class="crd-td">-</td><td class="crd-td">1,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ranomafana</strong></td><td class="crd-td">MDG: -21,26, 47,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">799</td><td class="crd-td">-</td><td class="crd-td">1,1k (1850AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in the Betsileo and Southern Plateau Kingdoms (1100AD to 1890AD).</figcaption>
</figure>

## Betsimisaraka Confederation and Northern Littoral

Table \ref{tab:sub-betsimisaraka} presents 47 northern and eastern Malagasy centres, spanning mediaeval ports at Mahilaka (6,25k), Langany (4,65k) and Vohemar (3,82k) alongside Ambodifototra on Île Sainte-Marie (3,42k), Ambatondrazaka (4,48k), Andoany on Nosy Be (4,28k) and Mahajanga (14,2k) [@Beaujard2007EastAfricaMadagascar; @ICM2020MadagascarAtlas].

<figure class="crd-table-figure" id="tab:sub-betsimisaraka">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1100AD</th><th class="crd-th">1400AD</th><th class="crd-th">1700AD</th><th class="crd-th">1810AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mahajanga</strong></td><td class="crd-td">MDG: -15,68, 46,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,3k</td><td class="crd-td">13,6k</td><td class="crd-td">14,2k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Mahilaka</strong></td><td class="crd-td">MDG: -13,92, 48,35</td><td class="crd-td">3,5k</td><td class="crd-td">6,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,1k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Mazalagem Nova</strong></td><td class="crd-td">MDG: -15,73, 46,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">6,5k (1790AD)</td></tr>
<tr><td class="crd-td"><strong>Vohemar</strong></td><td class="crd-td">MDG: -13,37, 50,01</td><td class="crd-td">-</td><td class="crd-td">5,3k</td><td class="crd-td">2k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">5,3k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Langany</strong></td><td class="crd-td">MDG: -15,3, 47,02</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1506AD)</td></tr>
<tr><td class="crd-td"><strong>Antsiranana</strong></td><td class="crd-td">MDG: -12,32, 49,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">4,5k (1887AD)</td></tr>
<tr><td class="crd-td"><strong>Ambatondrazaka</strong></td><td class="crd-td">MDG: -17,83, 48,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,5k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Andoany</strong></td><td class="crd-td">MDG: -13,4, 48,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Ambodifototra</strong></td><td class="crd-td">MDG: -17, 49,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">4k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Imerimandroso</strong></td><td class="crd-td">MDG: -17,43, 48,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ambatoharana</strong></td><td class="crd-td">MDG: -13,09, 49,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">992</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Benavony</strong></td><td class="crd-td">MDG: -13,71, 48,46</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1380AD)</td></tr>
<tr><td class="crd-td"><strong>Maroantsetra</strong></td><td class="crd-td">MDG: -15,43, 49,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Nosy Be Ampasindava</strong></td><td class="crd-td">MDG: -13,41, 48,25</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1380AD)</td></tr>
<tr><td class="crd-td"><strong>Antonibe</strong></td><td class="crd-td">MDG: -15,06, 47,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ambohitsilaozana</strong></td><td class="crd-td">MDG: -17,7, 48,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Rantabe</strong></td><td class="crd-td">MDG: -15,72, 49,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">997</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Antsohihy</strong></td><td class="crd-td">MDG: -14,88, 47,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Ambinanin&amp;apos;i Mahanara</strong></td><td class="crd-td">MDG: -14,02, 50,14</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Didy</strong></td><td class="crd-td">MDG: -18,12, 48,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">960</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Nosy Mangabe</strong></td><td class="crd-td">MDG: -15,5, 49,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1720AD)</td></tr>
<tr><td class="crd-td"><strong>Antanambe</strong></td><td class="crd-td">MDG: -16,44, 49,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">961</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">1,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Mahanara</strong></td><td class="crd-td">MDG: -13,97, 50,12</td><td class="crd-td">1k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Sambava</strong></td><td class="crd-td">MDG: -14,28, 50,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Katsepy</strong></td><td class="crd-td">MDG: -15,77, 46,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">665</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Irodo</strong></td><td class="crd-td">MDG: -12,65, 49,52</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1150AD)</td></tr>
<tr><td class="crd-td"><strong>Sandrakatsy</strong></td><td class="crd-td">MDG: -16,3, 49,69</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Antsirabe Nord</strong></td><td class="crd-td">MDG: -13,97, 49,96</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Cap Est</strong></td><td class="crd-td">MDG: -15,26, 50,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">611</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Tanambe</strong></td><td class="crd-td">MDG: -17,53, 48,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">1,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Maromandia</strong></td><td class="crd-td">MDG: -14,21, 48,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">1,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Avaratra-atsinanana I</strong></td><td class="crd-td">MDG: -13,8, 48,31</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Ampanefena</strong></td><td class="crd-td">MDG: -13,9, 50,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">966</td><td class="crd-td">-</td><td class="crd-td">1,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Anivorano Nord</strong></td><td class="crd-td">MDG: -12,74, 49,24</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">952</td><td class="crd-td">-</td><td class="crd-td">1,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Andaingo</strong></td><td class="crd-td">MDG: -18,21, 48,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">919</td><td class="crd-td">-</td><td class="crd-td">1,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Lokintsy</strong></td><td class="crd-td">MDG: -16,84, 49,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">535</td><td class="crd-td">966</td><td class="crd-td">-</td><td class="crd-td">1,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Daraina</strong></td><td class="crd-td">MDG: -13,2, 49,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">858</td><td class="crd-td">-</td><td class="crd-td">1,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ramena</strong></td><td class="crd-td">MDG: -12,25, 49,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">799</td><td class="crd-td">-</td><td class="crd-td">1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Bemanevika</strong></td><td class="crd-td">MDG: -14,14, 50,14</td><td class="crd-td">726</td><td class="crd-td">882</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">957 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ambohijanahary</strong></td><td class="crd-td">MDG: -17,4, 48,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">348</td><td class="crd-td">518</td><td class="crd-td">-</td><td class="crd-td">634 (1850AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 7 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed settlements in the Betsimisaraka Confederation and Northern Littoral (1100AD to 1890AD) (top 40 of 47 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Antandroy, Mahafaly and Anosy South

Table \ref{tab:sub-antandroy} compiles 52 southern Malagasy sites, from mediaeval walled settlements at Andranosoa (2,94k) and Talaky (1,85k) to Fanjahira (4,45k), Vangaindrano (3,65k), Toliara (3,24k) and Toalagnaro (3,12k) [@ICM2020MadagascarAtlas; @Escamps1858HistoireGeographie].

<figure class="crd-table-figure" id="tab:sub-antandroy">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1100AD</th><th class="crd-th">1400AD</th><th class="crd-th">1700AD</th><th class="crd-th">1810AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Fanjahira</strong></td><td class="crd-td">MDG: -24,98, 46,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">4,4k (1648AD)</td></tr>
<tr><td class="crd-td"><strong>Vangaindrano</strong></td><td class="crd-td">MDG: -23,35, 47,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Andranosoa</strong></td><td class="crd-td">MDG: -24,72, 45,65</td><td class="crd-td">2,5k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Augustin</strong></td><td class="crd-td">MDG: -23,55, 43,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Toliara</strong></td><td class="crd-td">MDG: -23,35, 43,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">3,2k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Toalagnaro</strong></td><td class="crd-td">MDG: -25,02, 46,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Andranosoa</strong></td><td class="crd-td">MDG: -24,75, 45,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1280AD)</td></tr>
<tr><td class="crd-td"><strong>Manda Androy</strong></td><td class="crd-td">MDG: -24,84, 45,76</td><td class="crd-td">1,7k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1440AD)</td></tr>
<tr><td class="crd-td"><strong>Andranosoa</strong></td><td class="crd-td">MDG: -24,48, 45,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1250AD)</td></tr>
<tr><td class="crd-td"><strong>Androka</strong></td><td class="crd-td">MDG: -25,03, 44,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Efaho</strong></td><td class="crd-td">MDG: -25,01, 46,88</td><td class="crd-td">1,7k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1410AD)</td></tr>
<tr><td class="crd-td"><strong>Manantenina</strong></td><td class="crd-td">MDG: -24,28, 47,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ampasimahanoro</strong></td><td class="crd-td">MDG: -24,92, 46,88</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Manombo Sud</strong></td><td class="crd-td">MDG: -22,97, 43,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Sainte-Luce</strong></td><td class="crd-td">MDG: -24,77, 47,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Anakao</strong></td><td class="crd-td">MDG: -23,66, 43,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">970</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Itampolo</strong></td><td class="crd-td">MDG: -24,68, 43,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">983</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Soalara</strong></td><td class="crd-td">MDG: -23,6, 43,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">938</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Talaky</strong></td><td class="crd-td">MDG: -25,18, 45,75</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1220AD)</td></tr>
<tr><td class="crd-td"><strong>Ejeda</strong></td><td class="crd-td">MDG: -24,35, 44,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">766</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ranopiso</strong></td><td class="crd-td">MDG: -25,05, 46,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">875</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Faux-Cap</strong></td><td class="crd-td">MDG: -25,57, 45,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">836</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Tongobory</strong></td><td class="crd-td">MDG: -23,53, 44,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">737</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Rezoky</strong></td><td class="crd-td">MDG: -22,25, 44,37</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Rezoky</strong></td><td class="crd-td">MDG: -22,84, 44,62</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Efangitse</strong></td><td class="crd-td">MDG: -24,99, 46,87</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Antanimora</strong></td><td class="crd-td">MDG: -24,82, 45,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">698</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Sarodrano</strong></td><td class="crd-td">MDG: -23,52, 43,74</td><td class="crd-td">1,3k</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Tranoroa</strong></td><td class="crd-td">MDG: -24,7, 45,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">618</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Tranovato</strong></td><td class="crd-td">MDG: -25,04, 46,89</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Behara</strong></td><td class="crd-td">MDG: -24,95, 46,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">620</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Maliovola</strong></td><td class="crd-td">MDG: -24,84, 45,48</td><td class="crd-td">1k</td><td class="crd-td">840</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Morombe</strong></td><td class="crd-td">MDG: -21,74, 43,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Androvontsy</strong></td><td class="crd-td">MDG: -24,71, 45,5</td><td class="crd-td">1k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Talaky</strong></td><td class="crd-td">MDG: -25,2, 46,1</td><td class="crd-td">975</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1250AD)</td></tr>
<tr><td class="crd-td"><strong>Fotadrevo</strong></td><td class="crd-td">MDG: -24,05, 45,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">983</td><td class="crd-td">-</td><td class="crd-td">1,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Befotaka Sud</strong></td><td class="crd-td">MDG: -23,82, 46,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">956</td><td class="crd-td">-</td><td class="crd-td">1,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Tsivory</strong></td><td class="crd-td">MDG: -24,07, 46,08</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">952</td><td class="crd-td">-</td><td class="crd-td">1,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Andavadoaka</strong></td><td class="crd-td">MDG: -22,07, 43,25</td><td class="crd-td">936</td><td class="crd-td">926</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Befandriana Sud</strong></td><td class="crd-td">MDG: -22,12, 43,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">939</td><td class="crd-td">-</td><td class="crd-td">1,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 12 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements in Antandroy, Mahafaly and Anosy South (1100AD to 1890AD) (top 40 of 52 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Sakalava Kingdoms of Menabe and Boina

Table \ref{tab:sub-sakalava} records 16 western Malagasy centres, including the early royal capitals of Marovoay (8,4k), Boeny (6,45k) and Kingany (3,18k) alongside Maintirano (2,98k), Maevatanana (2,15k) and Tsiromandidy (1,42k) [@Berg1985TheSacred; @Grandidier1885HistoirePhysique].

<figure class="crd-table-figure" id="tab:sub-sakalava">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1100AD</th><th class="crd-th">1400AD</th><th class="crd-th">1700AD</th><th class="crd-th">1810AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Marovoay</strong></td><td class="crd-td">MDG: -16,11, 46,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,5k</td><td class="crd-td">-</td><td class="crd-td">8,4k (1790AD)</td></tr>
<tr><td class="crd-td"><strong>Boeny</strong></td><td class="crd-td">MDG: -15,83, 45,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k (1614AD)</td></tr>
<tr><td class="crd-td"><strong>Kingany</strong></td><td class="crd-td">MDG: -15,79, 45,92</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Maintirano</strong></td><td class="crd-td">MDG: -18,06, 44,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">3k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Tambohorano</strong></td><td class="crd-td">MDG: -17,51, 43,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Maevatanana</strong></td><td class="crd-td">MDG: -16,95, 46,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Ankavandra</strong></td><td class="crd-td">MDG: -18,77, 45,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Tsiromandidy</strong></td><td class="crd-td">MDG: -18,78, 46,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Madirovalo</strong></td><td class="crd-td">MDG: -16,43, 46,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">1,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kandreho</strong></td><td class="crd-td">MDG: -17,48, 46,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">987</td><td class="crd-td">-</td><td class="crd-td">1,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ankazomborona</strong></td><td class="crd-td">MDG: -16,12, 46,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">938</td><td class="crd-td">-</td><td class="crd-td">1,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Sitampiky</strong></td><td class="crd-td">MDG: -16,68, 46,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">881</td><td class="crd-td">-</td><td class="crd-td">1,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Beravina</strong></td><td class="crd-td">MDG: -18,22, 45,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">853</td><td class="crd-td">-</td><td class="crd-td">1,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Mahasolo</strong></td><td class="crd-td">MDG: -19,13, 46,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">622</td><td class="crd-td">-</td><td class="crd-td">939 (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Manaratsandry</strong></td><td class="crd-td">MDG: -16,19, 46,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">446</td><td class="crd-td">653</td><td class="crd-td">-</td><td class="crd-td">861 (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kiranomena</strong></td><td class="crd-td">MDG: -18,55, 46,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">561</td><td class="crd-td">-</td><td class="crd-td">795 (1850AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed settlements in the Sakalava Kingdoms of Menabe and Boina (1100AD to 1890AD).</figcaption>
</figure>

## Mascarenes: Mauritius, Réunion and Rodrigues

Table \ref{tab:sub-mascarenes} details 90 Mascarene ports and plantation districts across 82 census observations, headed by Port-Louis (74,5k), Saint-Denis (36,1k), Saint-Pierre (27,8k), Saint-Paul (24,9k), Saint-Benoît (16,2k), Saint-Louis (14,7k) and Saint-André (13,8k) [@Allen1999SlavesFreedmen; @Oliver1950TheVoyage].

<figure class="crd-table-figure" id="tab:sub-mascarenes">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1100AD</th><th class="crd-th">1400AD</th><th class="crd-th">1700AD</th><th class="crd-th">1810AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Moka</strong></td><td class="crd-td">MUS: -20,22, 57,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">24,6k</td><td class="crd-td">62,6k</td><td class="crd-td">74,5k (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Denis</strong></td><td class="crd-td">REU: -20,88, 55,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">251</td><td class="crd-td">15,3k</td><td class="crd-td">-</td><td class="crd-td">36,1k (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Pierre</strong></td><td class="crd-td">REU: -21,33, 55,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,7k</td><td class="crd-td">-</td><td class="crd-td">27,8k (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Paul</strong></td><td class="crd-td">REU: -21,01, 55,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">370</td><td class="crd-td">14,2k</td><td class="crd-td">-</td><td class="crd-td">24,9k (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Benoît</strong></td><td class="crd-td">REU: -21,04, 55,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,1k</td><td class="crd-td">-</td><td class="crd-td">16,2k (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Louis</strong></td><td class="crd-td">REU: -21,29, 55,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">14,7k (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-André</strong></td><td class="crd-td">REU: -20,96, 55,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">13,8k (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Curepipe</strong></td><td class="crd-td">MUS: -20,32, 57,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11k</td><td class="crd-td">11,3k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Beau-Bassin/Rose-Hill</strong></td><td class="crd-td">MUS: -20,23, 57,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,6k</td><td class="crd-td">9,8k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Joseph</strong></td><td class="crd-td">REU: -21,37, 55,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,5k (1887AD)</td></tr>
<tr><td class="crd-td"><strong>Mahébourg</strong></td><td class="crd-td">MUS: -20,42, 57,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">253</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">7,4k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Centre de Flacq</strong></td><td class="crd-td">MUS: -20,22, 57,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">6,9k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Leu</strong></td><td class="crd-td">REU: -21,17, 55,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,5k (1887AD)</td></tr>
<tr><td class="crd-td"><strong>Pamplemousses</strong></td><td class="crd-td">MUS: -20,1, 57,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">6,4k (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Sainte-Marie</strong></td><td class="crd-td">REU: -20,9, 55,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">6,4k (1887AD)</td></tr>
<tr><td class="crd-td"><strong>Sainte-Suzanne</strong></td><td class="crd-td">REU: -20,91, 55,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">5,8k (1887AD)</td></tr>
<tr><td class="crd-td"><strong>Bon Accueil</strong></td><td class="crd-td">MUS: -20,18, 57,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">5,1k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Vacoas/Phoenix</strong></td><td class="crd-td">MUS: -20,3, 57,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Quatre-Bornes</strong></td><td class="crd-td">MUS: -20,26, 57,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Salazie</strong></td><td class="crd-td">REU: -21,03, 55,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1887AD)</td></tr>
<tr><td class="crd-td"><strong>Port-Louis</strong></td><td class="crd-td">MUS: -20,22, 57,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>La Possession</strong></td><td class="crd-td">REU: -20,93, 55,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">2,9k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Surinam</strong></td><td class="crd-td">MUS: -20,51, 57,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">724</td><td class="crd-td">-</td><td class="crd-td">2,8k (1871AD)</td></tr>
<tr><td class="crd-td"><strong>Sainte-Rose</strong></td><td class="crd-td">REU: -21,13, 55,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1887AD)</td></tr>
<tr><td class="crd-td"><strong>New Grove</strong></td><td class="crd-td">MUS: -20,41, 57,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Chemin Grenier</strong></td><td class="crd-td">MUS: -20,49, 57,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Grand Bois</strong></td><td class="crd-td">MUS: -20,42, 57,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">847</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Rivière du Rempart</strong></td><td class="crd-td">MUS: -20,11, 57,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Goodlands</strong></td><td class="crd-td">MUS: -20,03, 57,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Triolet</strong></td><td class="crd-td">MUS: -20,05, 57,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Bras-Panon</strong></td><td class="crd-td">REU: -21, 55,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1887AD)</td></tr>
<tr><td class="crd-td"><strong>Rose Belle</strong></td><td class="crd-td">MUS: -20,4, 57,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Le Port</strong></td><td class="crd-td">REU: -20,94, 55,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Entre-Deux</strong></td><td class="crd-td">REU: -21,23, 55,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1887AD)</td></tr>
<tr><td class="crd-td"><strong>Long Mountain</strong></td><td class="crd-td">MUS: -20,15, 57,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Petit Raffray</strong></td><td class="crd-td">MUS: -20,02, 57,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Montagne Blanche</strong></td><td class="crd-td">MUS: -20,29, 57,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">652</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Bambous</strong></td><td class="crd-td">MUS: -20,26, 57,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Terre Rouge</strong></td><td class="crd-td">MUS: -20,13, 57,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Quartier Militaire</strong></td><td class="crd-td">MUS: -20,25, 57,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1881AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 50 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed settlements in the Mascarenes (Mauritius, Réunion and Rodrigues, 1100AD to 1890AD) (top 40 of 90 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Comoros Sultanates and Mayotte

Table \ref{tab:sub-comoros} covers 56 Swahili-Shirazi sultanate ports and towns across Grande Comore, Anjouan, Mohéli and Mayotte, led by Mutsamudu (6,42k), Moroni (5,42k), Domoni (5,12k), Iconi (3,12k), Tsingoni (2,85k), Dembéni (2,68k) and Sima (2,64k) [@Beaujard2007EastAfricaMadagascar].

<figure class="crd-table-figure" id="tab:sub-comoros">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1100AD</th><th class="crd-th">1400AD</th><th class="crd-th">1700AD</th><th class="crd-th">1810AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mutsamudu</strong></td><td class="crd-td">COM: -12,17, 44,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">2,1k</td><td class="crd-td">6k</td><td class="crd-td">6,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Dembéni</strong></td><td class="crd-td">MYT: -12,84, 45,18</td><td class="crd-td">1,9k</td><td class="crd-td">2,9k</td><td class="crd-td">1,4k</td><td class="crd-td">824</td><td class="crd-td">-</td><td class="crd-td">5,9k (1000AD)</td></tr>
<tr><td class="crd-td"><strong>Moroni</strong></td><td class="crd-td">COM: -11,69, 43,26</td><td class="crd-td">2,3k</td><td class="crd-td">4,1k</td><td class="crd-td">4,3k</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">5,4k (1886AD)</td></tr>
<tr><td class="crd-td"><strong>Domoni</strong></td><td class="crd-td">COM: -12,26, 44,53</td><td class="crd-td">2,1k</td><td class="crd-td">2,8k</td><td class="crd-td">5k</td><td class="crd-td">4,4k</td><td class="crd-td">3,9k</td><td class="crd-td">5,1k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Tsingoni</strong></td><td class="crd-td">MYT: -12,79, 45,1</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">2,5k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">3,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Sima</strong></td><td class="crd-td">COM: -12,2, 44,28</td><td class="crd-td">2k</td><td class="crd-td">3,4k</td><td class="crd-td">2k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">3,4k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Iconi</strong></td><td class="crd-td">COM: -11,75, 43,23</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">3,1k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Mitsamiouli</strong></td><td class="crd-td">COM: -11,41, 43,29</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1400AD)</td></tr>
<tr><td class="crd-td"><strong>Acoua</strong></td><td class="crd-td">MYT: -12,72, 45,06</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">906</td><td class="crd-td">537</td><td class="crd-td">-</td><td class="crd-td">2,4k (1300AD)</td></tr>
<tr><td class="crd-td"><strong>Fomboni</strong></td><td class="crd-td">COM: -12,29, 43,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1886AD)</td></tr>
<tr><td class="crd-td"><strong>Itsandra</strong></td><td class="crd-td">COM: -11,68, 43,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>M'Bachile</strong></td><td class="crd-td">COM: -11,79, 43,25</td><td class="crd-td">1,9k</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1200AD)</td></tr>
<tr><td class="crd-td"><strong>Foumbouni</strong></td><td class="crd-td">COM: -11,87, 43,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Bambao Mtsanga</strong></td><td class="crd-td">COM: -12,2, 44,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Dzindani</strong></td><td class="crd-td">COM: -11,38, 43,31</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Dzaoudzi</strong></td><td class="crd-td">MYT: -12,78, 45,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">284</td><td class="crd-td">362</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Chindini</strong></td><td class="crd-td">COM: -11,92, 43,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Hantsindzi</strong></td><td class="crd-td">COM: -11,43, 43,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Singani</strong></td><td class="crd-td">COM: -11,84, 43,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Mbéni</strong></td><td class="crd-td">COM: -11,51, 43,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1886AD)</td></tr>
<tr><td class="crd-td"><strong>Ouzioini</strong></td><td class="crd-td">COM: -11,8, 43,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Bangoi Kouni</strong></td><td class="crd-td">COM: -11,38, 43,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ivembeni</strong></td><td class="crd-td">COM: -11,47, 43,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">969</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Mitsoudjé</strong></td><td class="crd-td">COM: -11,81, 43,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,4k (1886AD)</td></tr>
<tr><td class="crd-td"><strong>Tsémbéhou</strong></td><td class="crd-td">COM: -12,21, 44,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Hoani</strong></td><td class="crd-td">COM: -12,25, 43,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">859</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ouani</strong></td><td class="crd-td">COM: -12,14, 44,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Miringoni</strong></td><td class="crd-td">COM: -12,31, 43,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">775</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Démbeni</strong></td><td class="crd-td">COM: -11,88, 43,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Bazimini</strong></td><td class="crd-td">COM: -12,17, 44,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">523</td><td class="crd-td">811</td><td class="crd-td">-</td><td class="crd-td">983 (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Moya</strong></td><td class="crd-td">COM: -12,31, 44,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">961 (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ntsoudjini</strong></td><td class="crd-td">COM: -11,66, 43,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">932 (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Lingoni</strong></td><td class="crd-td">COM: -12,27, 44,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">471</td><td class="crd-td">695</td><td class="crd-td">-</td><td class="crd-td">893 (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Koimbani</strong></td><td class="crd-td">COM: -11,62, 43,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">864 (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Mamoudzou</strong></td><td class="crd-td">MYT: -12,78, 45,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">840 (1886AD)</td></tr>
<tr><td class="crd-td"><strong>Ntsaouéni</strong></td><td class="crd-td">COM: -11,47, 43,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">835 (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Bandrani Mtsangani</strong></td><td class="crd-td">COM: -12,19, 44,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">417</td><td class="crd-td">654</td><td class="crd-td">-</td><td class="crd-td">822 (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Mrémani</strong></td><td class="crd-td">COM: -12,31, 44,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">815 (1850AD)</td></tr>
<tr><td class="crd-td"><strong>M&amp;apos;Bachile</strong></td><td class="crd-td">COM: -11,76, 43,24</td><td class="crd-td">688</td><td class="crd-td">754</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">813 (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Koni Djodjo</strong></td><td class="crd-td">COM: -12,23, 44,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">414</td><td class="crd-td">616</td><td class="crd-td">-</td><td class="crd-td">810 (1850AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 16 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Individually assessed settlements in the Comoros Sultanates and Mayotte (1100AD to 1890AD) (top 40 of 56 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Portuguese Cabo Verde Archipelago

Table \ref{tab:sub-caboverde} lists 38 Cabo Verdean towns across the Sotavento and Barlavento islands, from early Ribeira Grande on Santiago (3,15k) and São Filipe on Fogo (3,24k) to Praia (4,65k), Ribeira Grande on Santo Antão (3,68k), Ribeira Brava (3,05k) and Mindelo (6,24k) [@Seibert2014CrioulizacaoCabo; @Keese2024BetweenLand; @Jung2015MigrationRemittances].

<figure class="crd-table-figure" id="tab:sub-caboverde">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1100AD</th><th class="crd-th">1400AD</th><th class="crd-th">1700AD</th><th class="crd-th">1810AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mindelo</strong></td><td class="crd-td">CPV: 16,88, -24,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">6,2k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Praia</strong></td><td class="crd-td">CPV: 14,94, -23,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">912</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">4,6k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Santiago de Cabo Verde</strong></td><td class="crd-td">CPV: 14,92, -23,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">4,5k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Ribeira Grande</strong></td><td class="crd-td">CPV: 17,18, -25,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">3,7k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>São Filipe</strong></td><td class="crd-td">CPV: 14,9, -24,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Ribeira Brava</strong></td><td class="crd-td">CPV: 16,62, -24,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">3k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Nova Sintra</strong></td><td class="crd-td">CPV: 14,87, -24,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Sao Jorge dos Orgaos</strong></td><td class="crd-td">CPV: 15,05, -23,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">906</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Assomada</strong></td><td class="crd-td">CPV: 15,11, -23,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Ponta do Sol</strong></td><td class="crd-td">CPV: 17,19, -25,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">870</td><td class="crd-td">-</td><td class="crd-td">1,7k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Igreja</strong></td><td class="crd-td">CPV: 15,03, -24,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1832AD)</td></tr>
<tr><td class="crd-td"><strong>Ribeira da Barca</strong></td><td class="crd-td">CPV: 15,13, -23,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">555</td><td class="crd-td">948</td><td class="crd-td">-</td><td class="crd-td">1,3k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Sal Rei</strong></td><td class="crd-td">CPV: 16,18, -22,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">870</td><td class="crd-td">-</td><td class="crd-td">1,2k (1832AD)</td></tr>
<tr><td class="crd-td"><strong>Tarrafal</strong></td><td class="crd-td">CPV: 15,27, -23,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Preguica</strong></td><td class="crd-td">CPV: 16,57, -24,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">453</td><td class="crd-td">806</td><td class="crd-td">-</td><td class="crd-td">1,1k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Rabil</strong></td><td class="crd-td">CPV: 16,13, -22,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">1,1k (1832AD)</td></tr>
<tr><td class="crd-td"><strong>Nossa Senhora do Monte</strong></td><td class="crd-td">CPV: 14,86, -24,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">306</td><td class="crd-td">677</td><td class="crd-td">-</td><td class="crd-td">1,1k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Povoacao Velha</strong></td><td class="crd-td">CPV: 16,04, -22,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">753</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">1k (1807AD)</td></tr>
<tr><td class="crd-td"><strong>Porto Inglês</strong></td><td class="crd-td">CPV: 15,14, -23,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">770</td><td class="crd-td">-</td><td class="crd-td">940 (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Calheta do Maio</strong></td><td class="crd-td">CPV: 15,23, -23,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">402</td><td class="crd-td">700</td><td class="crd-td">-</td><td class="crd-td">903 (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Pombas</strong></td><td class="crd-td">CPV: 17,15, -25,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">899 (1832AD)</td></tr>
<tr><td class="crd-td"><strong>Pedra Badejo</strong></td><td class="crd-td">CPV: 15,14, -23,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">823 (1832AD)</td></tr>
<tr><td class="crd-td"><strong>Cova Figueira</strong></td><td class="crd-td">CPV: 14,89, -24,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">813 (1832AD)</td></tr>
<tr><td class="crd-td"><strong>Porto Novo</strong></td><td class="crd-td">CPV: 17,02, -25,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">795 (1832AD)</td></tr>
<tr><td class="crd-td"><strong>Calheta de São Miguel</strong></td><td class="crd-td">CPV: 15,19, -23,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">791 (1832AD)</td></tr>
<tr><td class="crd-td"><strong>Fundo das Figueiras</strong></td><td class="crd-td">CPV: 16,14, -22,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">238</td><td class="crd-td">535</td><td class="crd-td">-</td><td class="crd-td">786 (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Tarrafal de Monte Trigo</strong></td><td class="crd-td">CPV: 16,96, -25,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">506</td><td class="crd-td">-</td><td class="crd-td">744 (1878AD)</td></tr>
<tr><td class="crd-td"><strong>São Domingos</strong></td><td class="crd-td">CPV: 15,02, -23,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">717 (1832AD)</td></tr>
<tr><td class="crd-td"><strong>Tarrafal de São Nicolau</strong></td><td class="crd-td">CPV: 16,57, -24,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">684 (1832AD)</td></tr>
<tr><td class="crd-td"><strong>Santa Maria</strong></td><td class="crd-td">CPV: 16,6, -22,91</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">680 (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Ribeira da Cruz</strong></td><td class="crd-td">CPV: 17,13, -25,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">457</td><td class="crd-td">-</td><td class="crd-td">673 (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Juncalinho</strong></td><td class="crd-td">CPV: 16,59, -24,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">393</td><td class="crd-td">-</td><td class="crd-td">608 (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Achada Igreja</strong></td><td class="crd-td">CPV: 15,08, -23,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">423 (1832AD)</td></tr>
<tr><td class="crd-td"><strong>Sao Pedro CV</strong></td><td class="crd-td">CPV: 16,83, -25,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">413 (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Calhau</strong></td><td class="crd-td">CPV: 16,86, -24,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">363 (1878AD)</td></tr>
<tr><td class="crd-td"><strong>João Teves</strong></td><td class="crd-td">CPV: 15,07, -23,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">336 (1832AD)</td></tr>
<tr><td class="crd-td"><strong>Pedra de Lume</strong></td><td class="crd-td">CPV: 16,76, -22,89</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">294 (1832AD)</td></tr>
<tr><td class="crd-td"><strong>Cha das Caldeiras</strong></td><td class="crd-td">CPV: 14,97, -24,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">222 (1878AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Individually assessed settlements in the Portuguese Cabo Verde Archipelago (1100AD to 1890AD).</figcaption>
</figure>

## São Tomé, Príncipe and South Atlantic Islands

Table \ref{tab:sub-stp} presents 54 Gulf of Guinea and South Atlantic settlements, pairing São Tomé (6,85k), Santo António (2,35k), São João dos Angolares (1,42k) and Trindade (1,24k) with Jamestown (2,45k) and Longwood (640) on Saint Helena, Georgetown on Ascension (310) and Edinburgh of the Seven Seas on Tristan da Cunha (109) [@Fonju2021ToticPortuguese; @Berthet2016SaoTome].

<figure class="crd-table-figure" id="tab:sub-stp">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1100AD</th><th class="crd-th">1400AD</th><th class="crd-th">1700AD</th><th class="crd-th">1810AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>São Tomé</strong></td><td class="crd-td">STP: 0,33, 6,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">6,8k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Jamestown</strong></td><td class="crd-td">SHN: -15,92, -5,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">385</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k</td><td class="crd-td">3,4k (1871AD)</td></tr>
<tr><td class="crd-td"><strong>Santo António</strong></td><td class="crd-td">STP: 1,64, 7,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Trindade</strong></td><td class="crd-td">STP: 0,3, 6,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">840</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Santana</strong></td><td class="crd-td">STP: 0,26, 6,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">657</td><td class="crd-td">961</td><td class="crd-td">-</td><td class="crd-td">1,4k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>São João dos Angolares</strong></td><td class="crd-td">STP: 0,13, 6,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,4k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Neves</strong></td><td class="crd-td">STP: 0,36, 6,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">573</td><td class="crd-td">838</td><td class="crd-td">-</td><td class="crd-td">1,4k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Água Izé</strong></td><td class="crd-td">STP: 0,22, 6,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Rupert's Valley</strong></td><td class="crd-td">SHN: -15,92, -5,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">115</td><td class="crd-td">394</td><td class="crd-td">-</td><td class="crd-td">1,2k (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Guadalupe</strong></td><td class="crd-td">STP: 0,38, 6,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">507</td><td class="crd-td">731</td><td class="crd-td">-</td><td class="crd-td">1,1k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Monte Café</strong></td><td class="crd-td">STP: 0,3, 6,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">965 (1875AD)</td></tr>
<tr><td class="crd-td"><strong>João Paulo</strong></td><td class="crd-td">STP: 0,29, 6,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">775</td><td class="crd-td">895</td><td class="crd-td">-</td><td class="crd-td">958 (1845AD)</td></tr>
<tr><td class="crd-td"><strong>Picão</strong></td><td class="crd-td">STP: 1,67, 7,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">760</td><td class="crd-td">878</td><td class="crd-td">-</td><td class="crd-td">947 (1845AD)</td></tr>
<tr><td class="crd-td"><strong>Ototó</strong></td><td class="crd-td">STP: 0,32, 6,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">463</td><td class="crd-td">645</td><td class="crd-td">-</td><td class="crd-td">890 (1880AD)</td></tr>
<tr><td class="crd-td"><strong>St. Paul's</strong></td><td class="crd-td">SHN: -15,94, -5,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">808</td><td class="crd-td">-</td><td class="crd-td">860 (1817AD)</td></tr>
<tr><td class="crd-td"><strong>Vila Irene</strong></td><td class="crd-td">STP: 0,1, 6,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">621</td><td class="crd-td">729</td><td class="crd-td">-</td><td class="crd-td">791 (1845AD)</td></tr>
<tr><td class="crd-td"><strong>Boa Entrada</strong></td><td class="crd-td">STP: 0,35, 6,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">785 (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Longwood</strong></td><td class="crd-td">SHN: -15,95, -5,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">603</td><td class="crd-td">530</td><td class="crd-td">720 (1871AD)</td></tr>
<tr><td class="crd-td"><strong>Uba Budo</strong></td><td class="crd-td">STP: 0,26, 6,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">695 (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Diogo Vaz</strong></td><td class="crd-td">STP: 0,32, 6,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">625</td><td class="crd-td">625 (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Almas</strong></td><td class="crd-td">STP: 0,3, 6,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">475</td><td class="crd-td">559</td><td class="crd-td">-</td><td class="crd-td">599 (1845AD)</td></tr>
<tr><td class="crd-td"><strong>São José</strong></td><td class="crd-td">STP: 0,22, 6,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">476</td><td class="crd-td">551</td><td class="crd-td">-</td><td class="crd-td">586 (1845AD)</td></tr>
<tr><td class="crd-td"><strong>Ribeira Afonso</strong></td><td class="crd-td">STP: 0,19, 6,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">340</td><td class="crd-td">516</td><td class="crd-td">-</td><td class="crd-td">580 (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Porto Alegre</strong></td><td class="crd-td">STP: 0,03, 6,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">565</td><td class="crd-td">565 (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Bindá</strong></td><td class="crd-td">STP: 0,22, 6,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">453</td><td class="crd-td">519</td><td class="crd-td">-</td><td class="crd-td">550 (1845AD)</td></tr>
<tr><td class="crd-td"><strong>Sandy Bay</strong></td><td class="crd-td">SHN: -15,98, -5,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">507</td><td class="crd-td">-</td><td class="crd-td">540 (1817AD)</td></tr>
<tr><td class="crd-td"><strong>Ribeira Palma</strong></td><td class="crd-td">STP: 0,35, 6,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">418</td><td class="crd-td">490</td><td class="crd-td">-</td><td class="crd-td">529 (1845AD)</td></tr>
<tr><td class="crd-td"><strong>Santa Catarina</strong></td><td class="crd-td">STP: 0,27, 6,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">434</td><td class="crd-td">-</td><td class="crd-td">510 (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ponta Furada</strong></td><td class="crd-td">STP: 0,24, 6,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">403</td><td class="crd-td">465</td><td class="crd-td">-</td><td class="crd-td">493 (1845AD)</td></tr>
<tr><td class="crd-td"><strong>Sundy</strong></td><td class="crd-td">STP: 1,67, 7,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">485 (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Bombom</strong></td><td class="crd-td">STP: 0,31, 6,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">394</td><td class="crd-td">450</td><td class="crd-td">-</td><td class="crd-td">479 (1845AD)</td></tr>
<tr><td class="crd-td"><strong>Chamiço</strong></td><td class="crd-td">STP: 0,32, 6,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">343</td><td class="crd-td">409</td><td class="crd-td">-</td><td class="crd-td">447 (1845AD)</td></tr>
<tr><td class="crd-td"><strong>Porto Real</strong></td><td class="crd-td">STP: 1,62, 7,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">445 (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Bombaim</strong></td><td class="crd-td">STP: 0,25, 6,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">353</td><td class="crd-td">408</td><td class="crd-td">-</td><td class="crd-td">435 (1845AD)</td></tr>
<tr><td class="crd-td"><strong>Levelwood</strong></td><td class="crd-td">SHN: -15,97, -5,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">420 (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Deadwood</strong></td><td class="crd-td">SHN: -15,93, -5,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">137</td><td class="crd-td">329</td><td class="crd-td">-</td><td class="crd-td">396 (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Belo Monte</strong></td><td class="crd-td">STP: 1,68, 7,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">365 (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Blue Hill</strong></td><td class="crd-td">SHN: -15,98, -5,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">340 (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Terreiro Velho</strong></td><td class="crd-td">STP: 1,61, 7,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">325</td><td class="crd-td">325 (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Georgetown</strong></td><td class="crd-td">SHN: -7,93, -14,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">242</td><td class="crd-td">310 (1861AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 14 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Individually assessed settlements in São Tomé, Príncipe and the South Atlantic Islands (1100AD to 1890AD) (top 40 of 54 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Seychelles and Chagos Archipelago

Table \ref{tab:sub-seychelles} catalogues 22 settlements across the granitic Seychelles and Chagos copra stations: Victoria (6,24k), Grand'Anse on Praslin (1,18k), Anse Royale (1,12k) and La Digue (720) alongside East Point on Diego Garcia (428), Île du Coin in Peros Banhos (224) and Boddam in Salomon Islands (192).

<figure class="crd-table-figure" id="tab:sub-seychelles">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1100AD</th><th class="crd-th">1400AD</th><th class="crd-th">1700AD</th><th class="crd-th">1810AD</th><th class="crd-th">1890AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Victoria</strong></td><td class="crd-td">SYC: -4,67, 55,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">6,1k</td><td class="crd-td">6,2k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Grand'Anse</strong></td><td class="crd-td">SYC: -4,33, 55,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">293</td><td class="crd-td">1,2k</td><td class="crd-td">1,2k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Anse Royale</strong></td><td class="crd-td">SYC: -4,73, 55,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1871AD)</td></tr>
<tr><td class="crd-td"><strong>Anse Boileau</strong></td><td class="crd-td">SYC: -4,72, 55,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">869 (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Beau Vallon</strong></td><td class="crd-td">SYC: -4,62, 55,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">785 (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Anse Étoile</strong></td><td class="crd-td">SYC: -4,59, 55,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">759 (1881AD)</td></tr>
<tr><td class="crd-td"><strong>La Digue</strong></td><td class="crd-td">SYC: -4,36, 55,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">716</td><td class="crd-td">720 (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Anse aux Pins</strong></td><td class="crd-td">SYC: -4,69, 55,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">695 (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Baie Sainte Anne</strong></td><td class="crd-td">SYC: -4,32, 55,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">694 (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Cascade</strong></td><td class="crd-td">SYC: -4,67, 55,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">679 (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Glacis</strong></td><td class="crd-td">SYC: -4,58, 55,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">663 (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Takamaka</strong></td><td class="crd-td">SYC: -4,77, 55,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">595 (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Pointe La Rue</strong></td><td class="crd-td">SYC: -4,67, 55,51</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">253</td><td class="crd-td">-</td><td class="crd-td">586 (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Baie Lazare</strong></td><td class="crd-td">SYC: -4,75, 55,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">563 (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Au Cap</strong></td><td class="crd-td">SYC: -4,7, 55,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">330</td><td class="crd-td">-</td><td class="crd-td">508 (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Anse Kerlan</strong></td><td class="crd-td">SYC: -4,31, 55,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">163</td><td class="crd-td">-</td><td class="crd-td">480 (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Port Glaud</strong></td><td class="crd-td">SYC: -4,66, 55,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">480 (1881AD)</td></tr>
<tr><td class="crd-td"><strong>La Passe Silhouette</strong></td><td class="crd-td">SYC: -4,48, 55,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">131</td><td class="crd-td">-</td><td class="crd-td">440 (1881AD)</td></tr>
<tr><td class="crd-td"><strong>East Point (Diego Garcia)</strong></td><td class="crd-td">IOT: -7,35, 72,47</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">428 (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Vingt Cinq</strong></td><td class="crd-td">MUS: -10,38, 56,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">117</td><td class="crd-td">-</td><td class="crd-td">332 (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Île du Coin</strong></td><td class="crd-td">IOT: -5,44, 71,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">224 (1881AD)</td></tr>
<tr><td class="crd-td"><strong>Boddam</strong></td><td class="crd-td">IOT: -5,32, 72,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">192 (1881AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 10.</span> Individually assessed settlements in the Seychelles and Chagos Archipelago (1100AD to 1890AD).</figcaption>
</figure>

# Limitations

Three caveats govern this gazetteer. First, 18 of the 492 settlements hold single-date observations (mostly 1878AD to 1895AD colonial surveys), so interpolated benchmark columns show a hyphen outside their attested span while reporting their full value in the peak column. Second, pre-colonial Malagasy and Comorian archaeological estimates carry wider uncertainty bounds than eighteenth- and nineteenth-century Mascarene or Portuguese enumerations [@ICM2020MadagascarAtlas; @Allen1999SlavesFreedmen]. Third, Seychelles and Chagos urban populations appear here in full even though those tiny island polygons register zero rural population on the coarse 5-arcminute regional raster.

# Conclusion

Together, the 492 individually assessed settlements document the long transition from Austronesian-Bantu and Swahili-Shirazi coastal townlands to colonial sugar ports, coaling stations and unified highland capitals across ten island jurisdictions between 500BC and 1895AD.

# Appendix

## Sub-Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} sums the individually assessed site counts and combined interpolated urban populations across all ten sub-regions from 1100AD to 1890AD.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion (Sites)</th><th class="crd-th">1100AD</th><th class="crd-th">1400AD</th><th class="crd-th">1700AD</th><th class="crd-th">1810AD</th><th class="crd-th">1890AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kingdom of Imerina and Central Highlands (78)</strong></td><td class="crd-td">4,6k</td><td class="crd-td">14,2k</td><td class="crd-td">63,2k</td><td class="crd-td">145,5k</td><td class="crd-td">61,9k</td></tr>
<tr><td class="crd-td"><strong>Betsileo and Southern Plateau Kingdoms (39)</strong></td><td class="crd-td">1,1k</td><td class="crd-td">5k</td><td class="crd-td">20,6k</td><td class="crd-td">45,1k</td><td class="crd-td">21,3k</td></tr>
<tr><td class="crd-td"><strong>Betsimisaraka Confederation and Sainte-Marie (47)</strong></td><td class="crd-td">15,7k</td><td class="crd-td">27,4k</td><td class="crd-td">15,2k</td><td class="crd-td">44,2k</td><td class="crd-td">17k</td></tr>
<tr><td class="crd-td"><strong>Antandroy, Mahafaly and Anosy South (52)</strong></td><td class="crd-td">22,1k</td><td class="crd-td">25,6k</td><td class="crd-td">20,3k</td><td class="crd-td">34,4k</td><td class="crd-td">3,1k</td></tr>
<tr><td class="crd-td"><strong>Sakalava Kingdoms of Menabe and Boina (16)</strong></td><td class="crd-td">0</td><td class="crd-td">3,1k</td><td class="crd-td">5,7k</td><td class="crd-td">15,9k</td><td class="crd-td">2,7k</td></tr>
<tr><td class="crd-td"><strong>Mascarenes (Ile de France and Bourbon) (90)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">1,4k</td><td class="crd-td">108,7k</td><td class="crd-td">105,5k</td></tr>
<tr><td class="crd-td"><strong>Comoros Sultanates and Mayotte (56)</strong></td><td class="crd-td">13,1k</td><td class="crd-td">27,9k</td><td class="crd-td">43,4k</td><td class="crd-td">46k</td><td class="crd-td">12,5k</td></tr>
<tr><td class="crd-td"><strong>Portuguese Cabo Verde Archipelago (38)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">8,3k</td><td class="crd-td">23,6k</td><td class="crd-td">6,2k</td></tr>
<tr><td class="crd-td"><strong>Sao Tome, Principe and Saint Helena (54)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">16,4k</td><td class="crd-td">25k</td><td class="crd-td">4,8k</td></tr>
<tr><td class="crd-td"><strong>Seychelles, Chagos and Iles Eparses (22)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">2,4k</td><td class="crd-td">7,9k</td></tr>
<tr><td class="crd-td"><strong>All Subregions (492)</strong></td><td class="crd-td">56,7k</td><td class="crd-td">103,1k</td><td class="crd-td">194,4k</td><td class="crd-td">490,8k</td><td class="crd-td">243k</td></tr>
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
