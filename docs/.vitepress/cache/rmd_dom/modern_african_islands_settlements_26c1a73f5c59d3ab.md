---
title: "Modern African Ocean Islands (1890s-Present)"
subtitle: "Settlement Gazetteer: 556 Assessed Sites (1890AD-2025AD)"
date: "24 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: modern_african_islands_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 556 individually assessed settlements across eleven island territories from 1890AD to 2025AD."
hero_label: "fig:hero-settlements-modern-islands"

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

This gazetteer compiles coordinates, spatial scopes and multi-period census series for 556 individually assessed settlements across 11 island nations and overseas territories in the western Indian Ocean and African Atlantic between 1890AD and 2025AD. Screened from 974 candidate municipal rolls, town censuses, plantation villages and maritime outposts (418 duplicate alias records excluded), the retained entries span 313 city-proper municipalities and 26 metropolitan agglomerations across 3.977 chronological observations. Active interpolated series expand from 10 settlements recorded directly at 1890AD (plus 24 additional towns first enumerated in 1891AD-1901AD colonial censuses) to 301 at 1950AD, 310 at 1975AD and 314 at 2000AD, tracing urban trajectories from Antananarivo (3,49M agglomeration) and Port-Louis (640,1k agglomeration) to Toamasina (449,1k), Saint-Paul (243,1k agglomeration), Moroni (171,1k agglomeration), Praia (153,7k agglomeration) and São Tomé (134,7k agglomeration).



# Background

Modern demographic enumeration across the ocean islands flanking Africa reflects three distinct administrative traditions: French municipal *populations légales* in Madagascar, Réunion, Comoros and Mayotte [@INSTAT2020MadagascarRGPH3; @INSEE2023ReunionMayotte], British parish and district censuses in Mauritius, Seychelles, Chagos and Saint Helena [@StatsMauritius2023Census2022], and Portuguese *freguesia* and *concelho* enumerations in Cabo Verde and São Tomé and Príncipe [@Monteiro2012CrescimentoUrbano; @Bank2023SouthernAfrica]. Combining these disparate municipal series alongside post-1950AD OECD/SWAC Africapolis urban-extent definitions enables systematic comparison between sprawling highland capitals, polycentric sugar-island towns and isolated mid-ocean outposts [@Bank2024MadagascarUrbanization].

# Methodology

## Candidate Screening and Territorial Grouping

Candidate urban centres, communes, plantation townships and island outposts were screened across four waves from national statistical censuses, UNSD Demographic Yearbook Table 8 series, colonial statistical yearbooks and Africapolis urban-agglomeration tables [@INSTAT2020MadagascarRGPH3; @INSEE2023ReunionMayotte; @StatsMauritius2023Census2022]. Out of 974 candidates within the 621.193 km² study domain bounded over geoBoundaries national outlines [@Runfola2020GeoBoundaries], 418 duplicate alias records were merged or excluded, retaining 556 settlements across 3.977 observations. For reader clarity, Tables 1 to 11 group all 556 settlements by island nation or overseas territory in descending order of peak population.

## Interpolation Benchmarks and Scope Distinction

Each entry distinguishes city-proper municipal jurisdiction (313 entries) from metropolitan agglomeration boundaries (26 entries) so historic town cores are never confused with expanded suburban conurbations [@Bank2024MadagascarUrbanization; @INSEE2023ReunionMayotte]. Tables 1 to 11 present linearly interpolated populations at five benchmark years (1890AD, 1950AD, 1975AD, 2000AD and 2025AD) alongside each settlement's observed peak population and year, marking eras outside the observed span with a hyphen (-).

# Testing and Validation

Across all 556 settlements, ordinary least-squares rank-size regression on the upper half (n=169) yields $q = 0,9075$ ($R^2 = 0,9838$), while full-sample regression yields $q = 1,5043$ ($R^2 = 0,6769$) with a unique-peak ratio of 0,9853 and log-interquartile spread of 0,854. Figure \ref{fig:settlements-rank} displays the 210 spatially deduplicated settlement peaks ($q = 0,92$, $R^2 = 0,98$) alongside 2025AD gridded densities across the ten leading sub-regions.

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-modern-african-islands-settlements/fig_03_rank_size.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Zipf rank-size curve across 210 spatially deduplicated settlement peaks (q = 0,92, R² = 0,98) and mean sub-regional density in 2025AD.</figcaption>
</figure>

# Results

## Madagascar

Table \ref{tab:sett-madagascar} catalogues 253 settlements across Madagascar, led by Antananarivo (3,49M agglomeration; 1,27M city-proper), Toamasina (449,1k), Mahajanga (356,7k), Antsirabe (299,1k), Toliara (284,5k), Fianarantsoa (266k) and Antsiranana (172,7k) [@INSTAT2020MadagascarRGPH3; @Bank2024MadagascarUrbanization; @Iimi2019JobAccessibility].

<figure class="crd-table-figure" id="tab:sett-madagascar">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1890AD</th><th class="crd-th">1950AD</th><th class="crd-th">1975AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Antananarivo (Agglomeration)</strong></td><td class="crd-td">MDG: -18,93, 47,52</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">174,2k</td><td class="crd-td">447,5k</td><td class="crd-td">1,4M</td><td class="crd-td">3,49M</td><td class="crd-td">3,49M (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Antananarivo</strong></td><td class="crd-td">MDG: -18,93, 47,52</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">163k</td><td class="crd-td">451,8k</td><td class="crd-td">1,05M</td><td class="crd-td">-</td><td class="crd-td">1,27M (2018AD)</td></tr>
<tr><td class="crd-td"><strong>Toamasina</strong></td><td class="crd-td">MDG: -18,14, 49,39</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">28,7k</td><td class="crd-td">77,4k</td><td class="crd-td">175,4k</td><td class="crd-td">449,1k</td><td class="crd-td">449,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mahajanga</strong></td><td class="crd-td">MDG: -15,68, 46,34</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">32,2k</td><td class="crd-td">65,9k</td><td class="crd-td">134,7k</td><td class="crd-td">356,7k</td><td class="crd-td">356,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Antsirabe</strong></td><td class="crd-td">MDG: -19,87, 47,03</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">14,6k</td><td class="crd-td">79k</td><td class="crd-td">151,9k</td><td class="crd-td">299,1k</td><td class="crd-td">299,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Toliara</strong></td><td class="crd-td">MDG: -23,35, 43,67</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">18,5k</td><td class="crd-td">45,7k</td><td class="crd-td">99,5k</td><td class="crd-td">284,5k</td><td class="crd-td">284,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Fianarantsoa</strong></td><td class="crd-td">MDG: -21,45, 47,09</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">18,2k</td><td class="crd-td">68,1k</td><td class="crd-td">127,5k</td><td class="crd-td">266k</td><td class="crd-td">266k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Antsiranana</strong></td><td class="crd-td">MDG: -12,32, 49,29</td><td class="crd-td">City</td><td class="crd-td">3,4k</td><td class="crd-td">23,9k</td><td class="crd-td">44,1k</td><td class="crd-td">73,8k</td><td class="crd-td">172,7k</td><td class="crd-td">172,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ambatondrazaka</strong></td><td class="crd-td">MDG: -17,83, 48,43</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">9,2k</td><td class="crd-td">18k</td><td class="crd-td">21,9k</td><td class="crd-td">105,6k</td><td class="crd-td">105,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Toalagnaro</strong></td><td class="crd-td">MDG: -25,02, 46,98</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">9k</td><td class="crd-td">19,6k</td><td class="crd-td">29,9k</td><td class="crd-td">91,7k</td><td class="crd-td">91,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sambava</strong></td><td class="crd-td">MDG: -14,28, 50,18</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">7,2k</td><td class="crd-td">10,6k</td><td class="crd-td">27,6k</td><td class="crd-td">56,6k</td><td class="crd-td">84k (2018AD)</td></tr>
<tr><td class="crd-td"><strong>Hell-Ville</strong></td><td class="crd-td">MDG: -13,37, 48,19</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,4k</td><td class="crd-td">18,6k</td><td class="crd-td">80,6k</td><td class="crd-td">80,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Imerintsiatosika</strong></td><td class="crd-td">MDG: -18,98, 47,32</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">8,5k</td><td class="crd-td">15,9k</td><td class="crd-td">26,1k</td><td class="crd-td">34,8k</td><td class="crd-td">70k (2018AD)</td></tr>
<tr><td class="crd-td"><strong>Fenoarivo Atsinanana</strong></td><td class="crd-td">MDG: -17,38, 49,41</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">6k</td><td class="crd-td">11,3k</td><td class="crd-td">21,3k</td><td class="crd-td">69,8k</td><td class="crd-td">69,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Antalaha</strong></td><td class="crd-td">MDG: -14,9, 50,28</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">9,4k</td><td class="crd-td">17,5k</td><td class="crd-td">36,3k</td><td class="crd-td">-</td><td class="crd-td">67,9k (2018AD)</td></tr>
<tr><td class="crd-td"><strong>Morondava</strong></td><td class="crd-td">MDG: -20,3, 44,3</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">9,8k</td><td class="crd-td">19,1k</td><td class="crd-td">31,9k</td><td class="crd-td">66,2k</td><td class="crd-td">66,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ambovombe</strong></td><td class="crd-td">MDG: -25,18, 46,09</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">15,7k</td><td class="crd-td">25,9k</td><td class="crd-td">39,2k</td><td class="crd-td">65,4k (2018AD)</td></tr>
<tr><td class="crd-td"><strong>Ambilobe</strong></td><td class="crd-td">MDG: -13,19, 49,06</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">7,2k</td><td class="crd-td">14,4k</td><td class="crd-td">32,2k</td><td class="crd-td">62,3k</td><td class="crd-td">62,3k (2018AD)</td></tr>
<tr><td class="crd-td"><strong>Ambositra</strong></td><td class="crd-td">MDG: -20,53, 47,24</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">10,8k</td><td class="crd-td">16,8k</td><td class="crd-td">28,6k</td><td class="crd-td">61,7k</td><td class="crd-td">61,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Moramanga</strong></td><td class="crd-td">MDG: -18,94, 48,23</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">7,1k</td><td class="crd-td">10,8k</td><td class="crd-td">27,4k</td><td class="crd-td">61,1k</td><td class="crd-td">61,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ambanja</strong></td><td class="crd-td">MDG: -13,67, 48,45</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">6,7k</td><td class="crd-td">12,3k</td><td class="crd-td">24,6k</td><td class="crd-td">49,5k</td><td class="crd-td">60,3k (2018AD)</td></tr>
<tr><td class="crd-td"><strong>Manakara</strong></td><td class="crd-td">MDG: -22,14, 48,01</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">9,3k</td><td class="crd-td">19,8k</td><td class="crd-td">28k</td><td class="crd-td">51,6k</td><td class="crd-td">51,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Andoany</strong></td><td class="crd-td">MDG: -13,4, 48,27</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">9,1k</td><td class="crd-td">6,2k</td><td class="crd-td">25,5k</td><td class="crd-td">-</td><td class="crd-td">50,3k (2018AD)</td></tr>
<tr><td class="crd-td"><strong>Ambatolampy</strong></td><td class="crd-td">MDG: -19,39, 47,43</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">7,1k</td><td class="crd-td">11,5k</td><td class="crd-td">22,3k</td><td class="crd-td">47,3k</td><td class="crd-td">47,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Manjanary</strong></td><td class="crd-td">MDG: -21,23, 48,34</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">12k</td><td class="crd-td">14,6k</td><td class="crd-td">10,6k</td><td class="crd-td">46k</td><td class="crd-td">46k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Amboasary</strong></td><td class="crd-td">MDG: -24,33, 45,95</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">6,8k</td><td class="crd-td">17,1k</td><td class="crd-td">30,5k</td><td class="crd-td">-</td><td class="crd-td">46k (2018AD)</td></tr>
<tr><td class="crd-td"><strong>Ambohitrimanjaka</strong></td><td class="crd-td">MDG: -18,87, 47,45</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">15,8k</td><td class="crd-td">25,7k</td><td class="crd-td">45,8k</td><td class="crd-td">45,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tsiromandidy</strong></td><td class="crd-td">MDG: -18,78, 46,05</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">11,4k</td><td class="crd-td">13,9k</td><td class="crd-td">45,2k</td><td class="crd-td">45,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Maroantsetra</strong></td><td class="crd-td">MDG: -15,43, 49,74</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">6,1k</td><td class="crd-td">12,5k</td><td class="crd-td">21,4k</td><td class="crd-td">44,3k</td><td class="crd-td">44,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Farafangana</strong></td><td class="crd-td">MDG: -22,82, 47,83</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">8,6k</td><td class="crd-td">13,7k</td><td class="crd-td">23,8k</td><td class="crd-td">43,4k</td><td class="crd-td">43,4k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ambalavao</strong></td><td class="crd-td">MDG: -21,83, 46,94</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">6,6k</td><td class="crd-td">7k</td><td class="crd-td">19,7k</td><td class="crd-td">30,2k</td><td class="crd-td">43,2k (2018AD)</td></tr>
<tr><td class="crd-td"><strong>Betroka</strong></td><td class="crd-td">MDG: -23,27, 46,1</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">6,9k</td><td class="crd-td">22,4k</td><td class="crd-td">42,5k</td><td class="crd-td">42,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ihosy</strong></td><td class="crd-td">MDG: -22,4, 46,13</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">8,8k</td><td class="crd-td">17,9k</td><td class="crd-td">41,8k</td><td class="crd-td">41,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Soavinandriana</strong></td><td class="crd-td">MDG: -19,17, 46,74</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">18,1k</td><td class="crd-td">30,5k</td><td class="crd-td">12,3k</td><td class="crd-td">40k (2018AD)</td></tr>
<tr><td class="crd-td"><strong>Antalaha Ambonivohitra</strong></td><td class="crd-td">MDG: -14,89, 50,27</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">10,3k</td><td class="crd-td">16,3k</td><td class="crd-td">18,8k</td><td class="crd-td">39,3k</td><td class="crd-td">39,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Marovoay</strong></td><td class="crd-td">MDG: -16,11, 46,64</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">12,2k</td><td class="crd-td">20,3k</td><td class="crd-td">20,3k</td><td class="crd-td">36,1k</td><td class="crd-td">39,3k (2018AD)</td></tr>
<tr><td class="crd-td"><strong>Vangaindrano</strong></td><td class="crd-td">MDG: -23,35, 47,6</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">6,4k</td><td class="crd-td">14,3k</td><td class="crd-td">23,1k</td><td class="crd-td">25,2k</td><td class="crd-td">38,5k (2018AD)</td></tr>
<tr><td class="crd-td"><strong>Ilakaka</strong></td><td class="crd-td">MDG: -22,7, 45,22</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">7,5k</td><td class="crd-td">14,7k</td><td class="crd-td">22k</td><td class="crd-td">38,3k</td><td class="crd-td">38,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Antsohihy</strong></td><td class="crd-td">MDG: -14,88, 47,99</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">6,1k</td><td class="crd-td">8,7k</td><td class="crd-td">13,6k</td><td class="crd-td">28,8k</td><td class="crd-td">38,3k (2018AD)</td></tr>
<tr><td class="crd-td"><strong>Ampanihy</strong></td><td class="crd-td">MDG: -24,69, 44,75</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">12,3k</td><td class="crd-td">23,3k</td><td class="crd-td">11,2k</td><td class="crd-td">38k (2018AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 213 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in Madagascar (1890AD to 2025AD) (top 40 of 253 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Mauritius and Rodrigues

Table \ref{tab:sett-mauritius} records 64 settlements across Mauritius and Rodrigues, tracing the shift from Port-Louis (640,1k agglomeration; 142,4k city-proper) up the Plaines Wilhems urban axis through Beau-Bassin/Rose-Hill (93,9k), Vacoas/Phoenix (109,4k), Curepipe (78,9k) and Quatre-Bornes (75,9k) alongside Port Mathurin (8,1k) on Rodrigues [@StatsMauritius2023Census2022; @Bank2022MauritiusSystematic].

<figure class="crd-table-figure" id="tab:sett-mauritius">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1890AD</th><th class="crd-th">1950AD</th><th class="crd-th">1975AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Port Louis (Agglomeration)</strong></td><td class="crd-td">MUS: -20,22, 57,53</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">78,2k</td><td class="crd-td">381,2k</td><td class="crd-td">556,7k</td><td class="crd-td">640,1k</td><td class="crd-td">640,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Port-Louis</strong></td><td class="crd-td">MUS: -20,22, 57,53</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">27,3k</td><td class="crd-td">112,2k</td><td class="crd-td">154,3k</td><td class="crd-td">142,4k</td><td class="crd-td">154,3k (2000AD)</td></tr>
<tr><td class="crd-td"><strong>Beau-Bassin/Rose-Hill</strong></td><td class="crd-td">MUS: -20,23, 57,47</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">32,5k</td><td class="crd-td">76,1k</td><td class="crd-td">103,9k</td><td class="crd-td">93,9k</td><td class="crd-td">110,7k (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Vacoas/Phoenix</strong></td><td class="crd-td">MUS: -20,3, 57,48</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">24,7k</td><td class="crd-td">46,3k</td><td class="crd-td">100,1k</td><td class="crd-td">109,4k</td><td class="crd-td">109,8k (2024AD)</td></tr>
<tr><td class="crd-td"><strong>Moka</strong></td><td class="crd-td">MUS: -20,22, 57,51</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">79,9k</td><td class="crd-td">48k</td><td class="crd-td">8,3k</td><td class="crd-td">-</td><td class="crd-td">84,5k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Goodlands (Agglomeration)</strong></td><td class="crd-td">MUS: -20,03, 57,66</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">13,3k</td><td class="crd-td">28,8k</td><td class="crd-td">82,3k</td><td class="crd-td">82,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Curepipe</strong></td><td class="crd-td">MUS: -20,32, 57,53</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">33,3k</td><td class="crd-td">55,3k</td><td class="crd-td">78,9k</td><td class="crd-td">-</td><td class="crd-td">78,9k (2000AD)</td></tr>
<tr><td class="crd-td"><strong>Quatre-Bornes</strong></td><td class="crd-td">MUS: -20,26, 57,48</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">16,1k</td><td class="crd-td">51,8k</td><td class="crd-td">75,9k</td><td class="crd-td">-</td><td class="crd-td">75,9k (2000AD)</td></tr>
<tr><td class="crd-td"><strong>Centre de Flacq (Agglomeration)</strong></td><td class="crd-td">MUS: -20,22, 57,75</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20,3k</td><td class="crd-td">53,8k</td><td class="crd-td">53,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Port Mathurin</strong></td><td class="crd-td">MUS: -19,72, 63,43</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,9k</td><td class="crd-td">43,7k</td><td class="crd-td">43,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Rodrigues</strong></td><td class="crd-td">MUS: -19,7, 63,42</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">18,6k</td><td class="crd-td">33,8k</td><td class="crd-td">-</td><td class="crd-td">43,6k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Rose Belle (Agglomeration)</strong></td><td class="crd-td">MUS: -20,4, 57,6</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,2k</td><td class="crd-td">25,3k</td><td class="crd-td">40,5k</td><td class="crd-td">40,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Triolet (Agglomeration)</strong></td><td class="crd-td">MUS: -20,05, 57,55</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,3k</td><td class="crd-td">28,1k</td><td class="crd-td">34k</td><td class="crd-td">34k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bon Accueil</strong></td><td class="crd-td">MUS: -20,18, 57,66</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">10,9k</td><td class="crd-td">16,7k</td><td class="crd-td">22,3k</td><td class="crd-td">24,8k</td><td class="crd-td">24,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mahebourg (Agglomeration)</strong></td><td class="crd-td">MUS: -20,42, 57,71</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,1k</td><td class="crd-td">22,2k</td><td class="crd-td">23,8k</td><td class="crd-td">23,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Triolet</strong></td><td class="crd-td">MUS: -20,05, 57,55</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">7,4k</td><td class="crd-td">11,8k</td><td class="crd-td">21,2k</td><td class="crd-td">-</td><td class="crd-td">23,4k (2011AD)</td></tr>
<tr><td class="crd-td"><strong>Goodlands</strong></td><td class="crd-td">MUS: -20,03, 57,66</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">6,3k</td><td class="crd-td">9,5k</td><td class="crd-td">19,3k</td><td class="crd-td">-</td><td class="crd-td">21,1k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Riviere du Rempart (Agglomeration)</strong></td><td class="crd-td">MUS: -20,11, 57,69</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,6k</td><td class="crd-td">19,8k</td><td class="crd-td">19,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bel Air Rivière Sèche</strong></td><td class="crd-td">MUS: -20,26, 57,75</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">6,8k</td><td class="crd-td">16,2k</td><td class="crd-td">-</td><td class="crd-td">18k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Bambous</strong></td><td class="crd-td">MUS: -20,26, 57,42</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">5,5k</td><td class="crd-td">11,3k</td><td class="crd-td">17,9k</td><td class="crd-td">17,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Chemin Grenier</strong></td><td class="crd-td">MUS: -20,49, 57,47</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">7,1k</td><td class="crd-td">12,2k</td><td class="crd-td">11,8k</td><td class="crd-td">17,1k</td><td class="crd-td">17,1k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Centre de Flacq</strong></td><td class="crd-td">MUS: -20,22, 57,75</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">7,8k</td><td class="crd-td">12k</td><td class="crd-td">16,2k</td><td class="crd-td">-</td><td class="crd-td">16,3k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Mahébourg</strong></td><td class="crd-td">MUS: -20,42, 57,71</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">9,3k</td><td class="crd-td">12,4k</td><td class="crd-td">15,8k</td><td class="crd-td">-</td><td class="crd-td">15,8k (2000AD)</td></tr>
<tr><td class="crd-td"><strong>Surinam (Agglomeration)</strong></td><td class="crd-td">MUS: -20,51, 57,5</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,2k</td><td class="crd-td">15,1k</td><td class="crd-td">15,1k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Baie du Tombeau</strong></td><td class="crd-td">MUS: -20,12, 57,5</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">5,5k</td><td class="crd-td">12k</td><td class="crd-td">-</td><td class="crd-td">14,7k (2011AD)</td></tr>
<tr><td class="crd-td"><strong>Terre Rouge</strong></td><td class="crd-td">MUS: -20,13, 57,53</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">5,6k</td><td class="crd-td">8,7k</td><td class="crd-td">-</td><td class="crd-td">12k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Rose Belle</strong></td><td class="crd-td">MUS: -20,4, 57,6</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">5,8k</td><td class="crd-td">8,7k</td><td class="crd-td">11,7k</td><td class="crd-td">-</td><td class="crd-td">12k (2011AD)</td></tr>
<tr><td class="crd-td"><strong>Grand Baie</strong></td><td class="crd-td">MUS: -20,02, 57,58</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">4,6k</td><td class="crd-td">10,6k</td><td class="crd-td">-</td><td class="crd-td">11,9k (2011AD)</td></tr>
<tr><td class="crd-td"><strong>Grand Bois</strong></td><td class="crd-td">MUS: -20,42, 57,55</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">7k</td><td class="crd-td">10,1k</td><td class="crd-td">11,6k</td><td class="crd-td">11,6k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>New Grove</strong></td><td class="crd-td">MUS: -20,41, 57,61</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">6,3k</td><td class="crd-td">9,2k</td><td class="crd-td">-</td><td class="crd-td">11k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Quartier Militaire</strong></td><td class="crd-td">MUS: -20,25, 57,61</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">6,3k</td><td class="crd-td">8,8k</td><td class="crd-td">10,8k</td><td class="crd-td">10,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Rivière du Rempart</strong></td><td class="crd-td">MUS: -20,11, 57,69</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">7,9k</td><td class="crd-td">10,8k</td><td class="crd-td">-</td><td class="crd-td">10,8k (2011AD)</td></tr>
<tr><td class="crd-td"><strong>Riviere des Anguilles</strong></td><td class="crd-td">MUS: -20,48, 57,56</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">6,6k</td><td class="crd-td">9,2k</td><td class="crd-td">10,7k</td><td class="crd-td">10,7k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Plaine Magnien</strong></td><td class="crd-td">MUS: -20,43, 57,68</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">4,3k</td><td class="crd-td">6,3k</td><td class="crd-td">10k</td><td class="crd-td">10,7k</td><td class="crd-td">10,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Surinam</strong></td><td class="crd-td">MUS: -20,51, 57,5</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">5,2k</td><td class="crd-td">10k</td><td class="crd-td">-</td><td class="crd-td">10,5k (2011AD)</td></tr>
<tr><td class="crd-td"><strong>Petit Raffray</strong></td><td class="crd-td">MUS: -20,02, 57,62</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">5,9k</td><td class="crd-td">8,4k</td><td class="crd-td">-</td><td class="crd-td">10k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Pamplemousses</strong></td><td class="crd-td">MUS: -20,1, 57,57</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">6,2k</td><td class="crd-td">7,2k</td><td class="crd-td">8,1k</td><td class="crd-td">-</td><td class="crd-td">9,7k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Montagne Blanche</strong></td><td class="crd-td">MUS: -20,29, 57,66</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">5,6k</td><td class="crd-td">8,1k</td><td class="crd-td">-</td><td class="crd-td">9,1k (2011AD)</td></tr>
<tr><td class="crd-td"><strong>Richelieu</strong></td><td class="crd-td">MUS: -20,19, 57,46</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">3,1k</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">8,9k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Poste de Flacq</strong></td><td class="crd-td">MUS: -20,16, 57,73</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">4,7k</td><td class="crd-td">6,5k</td><td class="crd-td">-</td><td class="crd-td">8,5k (2011AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 24 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in Mauritius and Rodrigues (1890AD to 2025AD) (top 40 of 64 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## La Réunion

Table \ref{tab:sett-reunion} details 45 communes and urban agglomerations across La Réunion, anchored by Saint-Paul (243,1k metro), Saint-Denis (192,7k metro; 157,7k city-proper), Saint-Pierre (174,8k metro) and Le Tampon (82,9k) [@INSEE2023ReunionMayotte].

<figure class="crd-table-figure" id="tab:sett-reunion">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1890AD</th><th class="crd-th">1950AD</th><th class="crd-th">1975AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Saint-Paul (Agglomeration)</strong></td><td class="crd-td">REU: -21,01, 55,27</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">243,1k (2014AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Denis (Agglomeration)</strong></td><td class="crd-td">REU: -20,88, 55,45</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">192,7k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Pierre (Agglomeration)</strong></td><td class="crd-td">REU: -21,33, 55,49</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">174,8k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Denis</strong></td><td class="crd-td">REU: -20,88, 55,45</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">38,9k</td><td class="crd-td">92,3k</td><td class="crd-td">132,4k</td><td class="crd-td">-</td><td class="crd-td">157,7k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Paul</strong></td><td class="crd-td">REU: -21,01, 55,27</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">26,8k</td><td class="crd-td">50,7k</td><td class="crd-td">89,4k</td><td class="crd-td">-</td><td class="crd-td">108,1k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Pierre</strong></td><td class="crd-td">REU: -21,33, 55,49</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">25k</td><td class="crd-td">44,5k</td><td class="crd-td">69,7k</td><td class="crd-td">-</td><td class="crd-td">86,1k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Le Tampon</strong></td><td class="crd-td">REU: -21,28, 55,52</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">18,6k</td><td class="crd-td">35,7k</td><td class="crd-td">61,6k</td><td class="crd-td">-</td><td class="crd-td">82,9k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-André</strong></td><td class="crd-td">REU: -20,96, 55,65</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">13,9k</td><td class="crd-td">26,4k</td><td class="crd-td">44,3k</td><td class="crd-td">-</td><td class="crd-td">58,9k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-André (Agglomeration)</strong></td><td class="crd-td">REU: -20,96, 55,65</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">58,9k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Louis</strong></td><td class="crd-td">REU: -21,29, 55,41</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">24,6k</td><td class="crd-td">30,1k</td><td class="crd-td">44,3k</td><td class="crd-td">-</td><td class="crd-td">55,2k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Louis (Agglomeration)</strong></td><td class="crd-td">REU: -21,29, 55,41</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">54,9k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Joseph (Agglomeration)</strong></td><td class="crd-td">REU: -21,37, 55,62</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">52,3k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Joseph</strong></td><td class="crd-td">REU: -21,37, 55,62</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">13,7k</td><td class="crd-td">21,2k</td><td class="crd-td">30,8k</td><td class="crd-td">-</td><td class="crd-td">39,5k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Benoît</strong></td><td class="crd-td">REU: -21,04, 55,72</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">13,9k</td><td class="crd-td">21,5k</td><td class="crd-td">31,8k</td><td class="crd-td">-</td><td class="crd-td">38,6k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Benoît (Agglomeration)</strong></td><td class="crd-td">REU: -21,04, 55,72</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">38,6k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Le Port</strong></td><td class="crd-td">REU: -20,94, 55,29</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">10,1k</td><td class="crd-td">25,3k</td><td class="crd-td">38,4k</td><td class="crd-td">-</td><td class="crd-td">38,4k (1999AD)</td></tr>
<tr><td class="crd-td"><strong>Sainte-Marie</strong></td><td class="crd-td">REU: -20,9, 55,55</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">9k</td><td class="crd-td">15,4k</td><td class="crd-td">27,2k</td><td class="crd-td">-</td><td class="crd-td">37,1k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>La Possession</strong></td><td class="crd-td">REU: -20,93, 55,33</td><td class="crd-td">City</td><td class="crd-td">2,9k</td><td class="crd-td">5,5k</td><td class="crd-td">9,8k</td><td class="crd-td">22,6k</td><td class="crd-td">-</td><td class="crd-td">36,8k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Leu</strong></td><td class="crd-td">REU: -21,17, 55,29</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">11,4k</td><td class="crd-td">16,7k</td><td class="crd-td">25,8k</td><td class="crd-td">-</td><td class="crd-td">36,2k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Leu (Agglomeration)</strong></td><td class="crd-td">REU: -21,17, 55,29</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">36,2k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>L'Étang-Salé (Agglomeration)</strong></td><td class="crd-td">REU: -21,25, 55,38</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">26k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Sainte-Suzanne</strong></td><td class="crd-td">REU: -20,91, 55,61</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">7,5k</td><td class="crd-td">12k</td><td class="crd-td">18,6k</td><td class="crd-td">-</td><td class="crd-td">25,6k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Sainte-Suzanne (Agglomeration)</strong></td><td class="crd-td">REU: -20,91, 55,61</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">25,6k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>L'Étang-Salé</strong></td><td class="crd-td">REU: -21,25, 55,38</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">6,8k</td><td class="crd-td">11,9k</td><td class="crd-td">-</td><td class="crd-td">14,5k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Bras-Panon</strong></td><td class="crd-td">REU: -21, 55,68</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">6,3k</td><td class="crd-td">9,9k</td><td class="crd-td">-</td><td class="crd-td">13,3k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Petite-Île</strong></td><td class="crd-td">REU: -21,35, 55,56</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">7,2k</td><td class="crd-td">10,3k</td><td class="crd-td">-</td><td class="crd-td">13,1k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Les Avirons</strong></td><td class="crd-td">REU: -21,24, 55,34</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">4,7k</td><td class="crd-td">7,5k</td><td class="crd-td">-</td><td class="crd-td">11,7k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Salazie</strong></td><td class="crd-td">REU: -21,03, 55,54</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">6,1k</td><td class="crd-td">7,4k</td><td class="crd-td">-</td><td class="crd-td">7,4k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Les Trois-Bassins</strong></td><td class="crd-td">REU: -21,1, 55,3</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">4,7k</td><td class="crd-td">6,6k</td><td class="crd-td">-</td><td class="crd-td">7,2k (2023AD)</td></tr>
<tr><td class="crd-td"><strong>Entre-Deux</strong></td><td class="crd-td">REU: -21,23, 55,47</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,5k</td><td class="crd-td">5,3k</td><td class="crd-td">-</td><td class="crd-td">7,2k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>La Plaine-des-Palmistes</strong></td><td class="crd-td">REU: -21,13, 55,63</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">7k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Sainte-Rose</strong></td><td class="crd-td">REU: -21,13, 55,8</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">3,5k</td><td class="crd-td">4,9k</td><td class="crd-td">6,6k</td><td class="crd-td">-</td><td class="crd-td">6,7k (2007AD)</td></tr>
<tr><td class="crd-td"><strong>Cilaos</strong></td><td class="crd-td">REU: -21,14, 55,47</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">5,3k</td><td class="crd-td">6,1k</td><td class="crd-td">-</td><td class="crd-td">6,1k (1999AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Philippe</strong></td><td class="crd-td">REU: -21,36, 55,77</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">3,2k</td><td class="crd-td">4,9k</td><td class="crd-td">-</td><td class="crd-td">5,2k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Saint-Gilles-les-Bains</strong></td><td class="crd-td">REU: -21,05, 55,23</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Vincendo</strong></td><td class="crd-td">REU: -21,37, 55,67</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Langevin</strong></td><td class="crd-td">REU: -21,36, 55,64</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Mont Vert</strong></td><td class="crd-td">REU: -21,32, 55,56</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Bourg-Murat</strong></td><td class="crd-td">REU: -21,21, 55,58</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Bois-Blanc</strong></td><td class="crd-td">REU: -21,2, 55,83</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Grand-Ilet</strong></td><td class="crd-td">REU: -21,03, 55,48</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Dos d'Ane</strong></td><td class="crd-td">REU: -20,98, 55,38</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Hell-Bourg</strong></td><td class="crd-td">REU: -21,06, 55,52</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Ilet a Cordes</strong></td><td class="crd-td">REU: -21,18, 55,44</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>La Nouvelle</strong></td><td class="crd-td">REU: -21,07, 55,44</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">983 (1936AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed settlements in La Réunion (1890AD to 2025AD).</figcaption>
</figure>

## São Tomé and Príncipe

Table \ref{tab:sett-stp} lists 55 settlements across São Tomé and Príncipe, spanning the São Tomé agglomeration (134,7k peak; 66,9k city-proper), Santana (19k), Neves (14,7k), Ribeira Afonso (10,7k), Trindade (6,7k) and former cocoa *roça* estates [@Bank2023SouthernAfrica].

<figure class="crd-table-figure" id="tab:sett-stp">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1890AD</th><th class="crd-th">1950AD</th><th class="crd-th">1975AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Sao Tome (Agglomeration)</strong></td><td class="crd-td">STP: 0,33, 6,73</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">27,5k</td><td class="crd-td">62,6k</td><td class="crd-td">130,8k</td><td class="crd-td">134,7k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>São Tomé</strong></td><td class="crd-td">STP: 0,33, 6,73</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">7,8k</td><td class="crd-td">29,5k</td><td class="crd-td">50,5k</td><td class="crd-td">-</td><td class="crd-td">66,9k (2012AD)</td></tr>
<tr><td class="crd-td"><strong>Santana</strong></td><td class="crd-td">STP: 0,26, 6,74</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">4,2k</td><td class="crd-td">5,4k</td><td class="crd-td">19k</td><td class="crd-td">19k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Neves</strong></td><td class="crd-td">STP: 0,36, 6,56</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">3,8k</td><td class="crd-td">5,4k</td><td class="crd-td">14,7k</td><td class="crd-td">14,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ribeira Afonso</strong></td><td class="crd-td">STP: 0,19, 6,7</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">1,7k</td><td class="crd-td">1,4k</td><td class="crd-td">10,7k</td><td class="crd-td">10,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Trindade</strong></td><td class="crd-td">STP: 0,3, 6,68</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">4k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">6,7k (2012AD)</td></tr>
<tr><td class="crd-td"><strong>Almas</strong></td><td class="crd-td">STP: 0,3, 6,74</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">2,1k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">3,9k (2012AD)</td></tr>
<tr><td class="crd-td"><strong>Água Izé</strong></td><td class="crd-td">STP: 0,22, 6,73</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">1,7k</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">3,4k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Pantufo</strong></td><td class="crd-td">STP: 0,32, 6,74</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">3,4k (2012AD)</td></tr>
<tr><td class="crd-td"><strong>Guadalupe</strong></td><td class="crd-td">STP: 0,38, 6,64</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">1,8k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">3,3k (2012AD)</td></tr>
<tr><td class="crd-td"><strong>Bombom</strong></td><td class="crd-td">STP: 0,31, 6,73</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,8k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">3,1k (2012AD)</td></tr>
<tr><td class="crd-td"><strong>Santo António</strong></td><td class="crd-td">STP: 1,64, 7,42</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,3k</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">2,6k (2012AD)</td></tr>
<tr><td class="crd-td"><strong>São João dos Angolares</strong></td><td class="crd-td">STP: 0,13, 6,65</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2,2k (2012AD)</td></tr>
<tr><td class="crd-td"><strong>Monte Café</strong></td><td class="crd-td">STP: 0,3, 6,64</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,1k</td><td class="crd-td">640</td><td class="crd-td">-</td><td class="crd-td">2,2k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Boa Entrada</strong></td><td class="crd-td">STP: 0,35, 6,66</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">960</td><td class="crd-td">627</td><td class="crd-td">-</td><td class="crd-td">1,9k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Santa Catarina</strong></td><td class="crd-td">STP: 0,27, 6,48</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,5k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,9k (2012AD)</td></tr>
<tr><td class="crd-td"><strong>Conde</strong></td><td class="crd-td">STP: 0,38, 6,66</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">578</td><td class="crd-td">1,1k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">1,8k (2012AD)</td></tr>
<tr><td class="crd-td"><strong>Caixão Grande</strong></td><td class="crd-td">STP: 0,3, 6,71</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">755</td><td class="crd-td">1k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,8k (2012AD)</td></tr>
<tr><td class="crd-td"><strong>Uba Budo</strong></td><td class="crd-td">STP: 0,26, 6,7</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Porto Alegre</strong></td><td class="crd-td">STP: 0,03, 6,53</td><td class="crd-td">City</td><td class="crd-td">565</td><td class="crd-td">1,6k</td><td class="crd-td">1k</td><td class="crd-td">483</td><td class="crd-td">-</td><td class="crd-td">1,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Diogo Vaz</strong></td><td class="crd-td">STP: 0,32, 6,5</td><td class="crd-td">City</td><td class="crd-td">625</td><td class="crd-td">1,1k</td><td class="crd-td">896</td><td class="crd-td">690</td><td class="crd-td">-</td><td class="crd-td">1,6k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>São Miguel</strong></td><td class="crd-td">STP: 0,13, 6,49</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Micóló</strong></td><td class="crd-td">STP: 0,4, 6,68</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">473</td><td class="crd-td">674</td><td class="crd-td">876</td><td class="crd-td">-</td><td class="crd-td">1,4k (2012AD)</td></tr>
<tr><td class="crd-td"><strong>João Paulo</strong></td><td class="crd-td">STP: 0,29, 6,57</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Ototó</strong></td><td class="crd-td">STP: 0,32, 6,66</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">840</td><td class="crd-td">447</td><td class="crd-td">-</td><td class="crd-td">1,4k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Picão</strong></td><td class="crd-td">STP: 1,67, 7,43</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Vila Irene</strong></td><td class="crd-td">STP: 0,1, 6,59</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Sundy</strong></td><td class="crd-td">STP: 1,67, 7,38</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Porto Real</strong></td><td class="crd-td">STP: 1,62, 7,4</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Santo Amaro</strong></td><td class="crd-td">STP: 0,37, 6,69</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">332</td><td class="crd-td">471</td><td class="crd-td">610</td><td class="crd-td">-</td><td class="crd-td">1,1k (2012AD)</td></tr>
<tr><td class="crd-td"><strong>Changra</strong></td><td class="crd-td">STP: 0,35, 6,69</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">513</td><td class="crd-td">668</td><td class="crd-td">822</td><td class="crd-td">-</td><td class="crd-td">1k (2012AD)</td></tr>
<tr><td class="crd-td"><strong>Micondo</strong></td><td class="crd-td">STP: 0,17, 6,68</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">297</td><td class="crd-td">529</td><td class="crd-td">761</td><td class="crd-td">-</td><td class="crd-td">872 (2012AD)</td></tr>
<tr><td class="crd-td"><strong>São José</strong></td><td class="crd-td">STP: 0,22, 6,5</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">849 (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Belo Monte</strong></td><td class="crd-td">STP: 1,68, 7,44</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">845 (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Ribeira Palma</strong></td><td class="crd-td">STP: 0,35, 6,57</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">821 (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Santa Clara</strong></td><td class="crd-td">STP: 0,35, 6,62</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">811 (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Bindá</strong></td><td class="crd-td">STP: 0,22, 6,47</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">791 (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Batepá</strong></td><td class="crd-td">STP: 0,3, 6,66</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">344</td><td class="crd-td">518</td><td class="crd-td">692</td><td class="crd-td">-</td><td class="crd-td">775 (2012AD)</td></tr>
<tr><td class="crd-td"><strong>Terreiro Velho</strong></td><td class="crd-td">STP: 1,61, 7,42</td><td class="crd-td">City</td><td class="crd-td">325</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">765 (1910AD)</td></tr>
<tr><td class="crd-td"><strong>Obolongo</strong></td><td class="crd-td">STP: 0,29, 6,69</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">712 (2012AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 15 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements in São Tomé and Príncipe (1890AD to 2025AD) (top 40 of 55 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Union of the Comoros

Table \ref{tab:sett-comoros} documents 37 settlements across Grande Comore, Anjouan and Mohéli, led by Moroni (171,1k agglomeration; 74,7k city-proper), Mutsamudu (59k), Mrémani (39,8k), Fomboni (33,6k), Tsémbéhou (31,7k) and Domoni (28,9k) [@Bank1993ComorosPopulation; @Bank2023SouthernAfrica].

<figure class="crd-table-figure" id="tab:sett-comoros">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1890AD</th><th class="crd-th">1950AD</th><th class="crd-th">1975AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Moroni (Agglomeration)</strong></td><td class="crd-td">COM: -11,69, 43,26</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,1k</td><td class="crd-td">48k</td><td class="crd-td">171,1k</td><td class="crd-td">171,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Moroni</strong></td><td class="crd-td">COM: -11,69, 43,26</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">8,7k</td><td class="crd-td">15,9k</td><td class="crd-td">37,5k</td><td class="crd-td">-</td><td class="crd-td">74,7k (2017AD)</td></tr>
<tr><td class="crd-td"><strong>Mutsamudu</strong></td><td class="crd-td">COM: -12,17, 44,4</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">8,9k</td><td class="crd-td">15,5k</td><td class="crd-td">34,1k</td><td class="crd-td">59k</td><td class="crd-td">59k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mrémani</strong></td><td class="crd-td">COM: -12,31, 44,5</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">3k</td><td class="crd-td">5k</td><td class="crd-td">39,8k</td><td class="crd-td">39,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Fomboni</strong></td><td class="crd-td">COM: -12,29, 43,75</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">5,2k</td><td class="crd-td">11,6k</td><td class="crd-td">33,6k</td><td class="crd-td">33,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tsémbéhou</strong></td><td class="crd-td">COM: -12,21, 44,47</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">6,1k</td><td class="crd-td">11,7k</td><td class="crd-td">31,7k</td><td class="crd-td">31,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mitsoudjé</strong></td><td class="crd-td">COM: -11,81, 43,27</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">2,7k</td><td class="crd-td">3,1k</td><td class="crd-td">30,8k</td><td class="crd-td">30,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Domoni</strong></td><td class="crd-td">COM: -12,26, 44,53</td><td class="crd-td">City</td><td class="crd-td">3,9k</td><td class="crd-td">5,4k</td><td class="crd-td">6,9k</td><td class="crd-td">14,7k</td><td class="crd-td">28,9k</td><td class="crd-td">28,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Ouani</strong></td><td class="crd-td">COM: -12,14, 44,43</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">6,4k</td><td class="crd-td">10,3k</td><td class="crd-td">27,9k</td><td class="crd-td">27,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mitsamiouli</strong></td><td class="crd-td">COM: -11,41, 43,29</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">3,9k</td><td class="crd-td">4,7k</td><td class="crd-td">26,5k</td><td class="crd-td">26,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bazimini</strong></td><td class="crd-td">COM: -12,17, 44,44</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">7,5k</td><td class="crd-td">12k</td><td class="crd-td">20,6k</td><td class="crd-td">20,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Lingoni</strong></td><td class="crd-td">COM: -12,27, 44,41</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">6,8k</td><td class="crd-td">10,9k</td><td class="crd-td">18,7k</td><td class="crd-td">18,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Démbeni</strong></td><td class="crd-td">COM: -11,88, 43,41</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k</td><td class="crd-td">15,8k</td><td class="crd-td">15,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Sima</strong></td><td class="crd-td">COM: -12,2, 44,28</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">5,6k</td><td class="crd-td">10,5k</td><td class="crd-td">15,7k</td><td class="crd-td">15,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Moya</strong></td><td class="crd-td">COM: -12,31, 44,44</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">6,1k</td><td class="crd-td">9,4k</td><td class="crd-td">15,1k</td><td class="crd-td">15,1k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mbéni</strong></td><td class="crd-td">COM: -11,51, 43,39</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">3,8k</td><td class="crd-td">5,5k</td><td class="crd-td">14,2k</td><td class="crd-td">14,2k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Bandrani Mtsangani</strong></td><td class="crd-td">COM: -12,19, 44,35</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">5,9k</td><td class="crd-td">9,5k</td><td class="crd-td">13,8k</td><td class="crd-td">13,8k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Koni Djodjo</strong></td><td class="crd-td">COM: -12,23, 44,48</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">5,5k</td><td class="crd-td">8,7k</td><td class="crd-td">12,5k</td><td class="crd-td">12,5k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Mramani</strong></td><td class="crd-td">COM: -12,35, 44,53</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">5,3k</td><td class="crd-td">8,5k</td><td class="crd-td">11,7k</td><td class="crd-td">11,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Iconi</strong></td><td class="crd-td">COM: -11,75, 43,23</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">5,4k</td><td class="crd-td">5,8k</td><td class="crd-td">-</td><td class="crd-td">6k (2003AD)</td></tr>
<tr><td class="crd-td"><strong>Ntsoudjini</strong></td><td class="crd-td">COM: -11,66, 43,27</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">3,6k (2003AD)</td></tr>
<tr><td class="crd-td"><strong>Bambao Mtsanga</strong></td><td class="crd-td">COM: -12,2, 44,5</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Foumbouni</strong></td><td class="crd-td">COM: -11,87, 43,49</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">3k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">3,4k (2003AD)</td></tr>
<tr><td class="crd-td"><strong>Chindini</strong></td><td class="crd-td">COM: -11,92, 43,48</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Singani</strong></td><td class="crd-td">COM: -11,84, 43,32</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Hantsindzi</strong></td><td class="crd-td">COM: -11,43, 43,39</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Ouzioini</strong></td><td class="crd-td">COM: -11,8, 43,37</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Bangoi Kouni</strong></td><td class="crd-td">COM: -11,38, 43,35</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Ntsaouéni</strong></td><td class="crd-td">COM: -11,47, 43,26</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">2,8k (2003AD)</td></tr>
<tr><td class="crd-td"><strong>Itsandra</strong></td><td class="crd-td">COM: -11,68, 43,26</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Nioumachoua</strong></td><td class="crd-td">COM: -12,36, 43,72</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,7k (2003AD)</td></tr>
<tr><td class="crd-td"><strong>Ivembeni</strong></td><td class="crd-td">COM: -11,47, 43,31</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Hoani</strong></td><td class="crd-td">COM: -12,25, 43,67</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Miringoni</strong></td><td class="crd-td">COM: -12,31, 43,65</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Djoièzi</strong></td><td class="crd-td">COM: -12,31, 43,77</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">608</td><td class="crd-td">1,2k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2,1k (2003AD)</td></tr>
<tr><td class="crd-td"><strong>Koimbani</strong></td><td class="crd-td">COM: -11,62, 43,36</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2,1k (2003AD)</td></tr>
<tr><td class="crd-td"><strong>Wanani</strong></td><td class="crd-td">COM: -12,34, 43,8</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">1,9k (2003AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed settlements in the Union of the Comoros (1890AD to 2025AD).</figcaption>
</figure>

## Cabo Verde

Table \ref{tab:sett-cabo-verde} compiles 41 settlements across Sotavento and Barlavento, led by Praia (153,7k agglomeration; 141,2k city-proper), Mindelo (74,7k agglomeration; 70,7k city-proper), Espargos (25k), Assomada (21,3k), Pedra Badejo (11,6k) and Tarrafal (10,9k) [@Monteiro2012CrescimentoUrbano; @Goncalves2015UrbanPlanning; @Costa2013PercepcaoPerigo].

<figure class="crd-table-figure" id="tab:sett-cabo-verde">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1890AD</th><th class="crd-th">1950AD</th><th class="crd-th">1975AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Praia (Agglomeration)</strong></td><td class="crd-td">CPV: 14,94, -23,52</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">10,1k</td><td class="crd-td">29,8k</td><td class="crd-td">96,7k</td><td class="crd-td">153,7k</td><td class="crd-td">153,7k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Praia</strong></td><td class="crd-td">CPV: 14,94, -23,52</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">10k</td><td class="crd-td">33,1k</td><td class="crd-td">94,2k</td><td class="crd-td">-</td><td class="crd-td">141,2k (2021AD)</td></tr>
<tr><td class="crd-td"><strong>Mindelo (Agglomeration)</strong></td><td class="crd-td">CPV: 16,88, -24,98</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">34,2k</td><td class="crd-td">62,5k</td><td class="crd-td">71,2k</td><td class="crd-td">74,7k (2015AD)</td></tr>
<tr><td class="crd-td"><strong>Mindelo</strong></td><td class="crd-td">CPV: 16,88, -24,98</td><td class="crd-td">City</td><td class="crd-td">6,2k</td><td class="crd-td">16,6k</td><td class="crd-td">33,4k</td><td class="crd-td">62,5k</td><td class="crd-td">-</td><td class="crd-td">70,7k (2021AD)</td></tr>
<tr><td class="crd-td"><strong>Espargos</strong></td><td class="crd-td">CPV: 16,75, -22,95</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">4,1k</td><td class="crd-td">10,6k</td><td class="crd-td">25k</td><td class="crd-td">25k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Assomada</strong></td><td class="crd-td">CPV: 15,11, -23,68</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">2,8k</td><td class="crd-td">7,1k</td><td class="crd-td">21,3k</td><td class="crd-td">21,3k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Pedra Badejo</strong></td><td class="crd-td">CPV: 15,14, -23,54</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">2,2k</td><td class="crd-td">8,5k</td><td class="crd-td">11,6k</td><td class="crd-td">11,6k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Tarrafal</strong></td><td class="crd-td">CPV: 15,27, -23,75</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">1,3k</td><td class="crd-td">5,8k</td><td class="crd-td">10,9k</td><td class="crd-td">10,9k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Porto Novo</strong></td><td class="crd-td">CPV: 17,02, -25,07</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">4,3k</td><td class="crd-td">7,7k</td><td class="crd-td">-</td><td class="crd-td">9,8k (2021AD)</td></tr>
<tr><td class="crd-td"><strong>Sal Rei</strong></td><td class="crd-td">CPV: 16,18, -22,92</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">9,6k (2021AD)</td></tr>
<tr><td class="crd-td"><strong>São Filipe</strong></td><td class="crd-td">CPV: 14,9, -24,5</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">4,9k</td><td class="crd-td">4,5k</td><td class="crd-td">6,9k</td><td class="crd-td">-</td><td class="crd-td">8,4k (2021AD)</td></tr>
<tr><td class="crd-td"><strong>Santa Maria</strong></td><td class="crd-td">CPV: 16,6, -22,91</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">7,3k (2021AD)</td></tr>
<tr><td class="crd-td"><strong>Calheta de São Miguel</strong></td><td class="crd-td">CPV: 15,19, -23,61</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">3,8k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">5k (2000AD)</td></tr>
<tr><td class="crd-td"><strong>Ribeira Grande</strong></td><td class="crd-td">CPV: 17,18, -25,07</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">3,3k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">4,9k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Igreja</strong></td><td class="crd-td">CPV: 15,03, -24,33</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">3,7k</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">4,1k (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Tarrafal de São Nicolau</strong></td><td class="crd-td">CPV: 16,57, -24,36</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,7k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">4k (2021AD)</td></tr>
<tr><td class="crd-td"><strong>Ribeira Brava</strong></td><td class="crd-td">CPV: 16,62, -24,3</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">2,3k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">3,8k (1920AD)</td></tr>
<tr><td class="crd-td"><strong>Sao Jorge dos Orgaos</strong></td><td class="crd-td">CPV: 15,05, -23,61</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Porto Inglês</strong></td><td class="crd-td">CPV: 15,14, -23,21</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">3k (2021AD)</td></tr>
<tr><td class="crd-td"><strong>São Domingos</strong></td><td class="crd-td">CPV: 15,02, -23,56</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">3k (2021AD)</td></tr>
<tr><td class="crd-td"><strong>Nova Sintra</strong></td><td class="crd-td">CPV: 14,87, -24,7</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Ponta do Sol</strong></td><td class="crd-td">CPV: 17,19, -25,1</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">1,9k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Pombas</strong></td><td class="crd-td">CPV: 17,15, -25,03</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Santiago de Cabo Verde</strong></td><td class="crd-td">CPV: 14,92, -23,6</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,3k</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Ribeira da Barca</strong></td><td class="crd-td">CPV: 15,13, -23,76</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Cova Figueira</strong></td><td class="crd-td">CPV: 14,89, -24,3</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,5k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Preguica</strong></td><td class="crd-td">CPV: 16,57, -24,29</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Nossa Senhora do Monte</strong></td><td class="crd-td">CPV: 14,86, -24,72</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Tarrafal de Monte Trigo</strong></td><td class="crd-td">CPV: 16,96, -25,31</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Calheta do Maio</strong></td><td class="crd-td">CPV: 15,23, -23,22</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Ribeira da Cruz</strong></td><td class="crd-td">CPV: 17,13, -25,2</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Fundo das Figueiras</strong></td><td class="crd-td">CPV: 16,14, -22,74</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Juncalinho</strong></td><td class="crd-td">CPV: 16,59, -24,12</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Povoacao Velha</strong></td><td class="crd-td">CPV: 16,04, -22,92</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Sao Pedro CV</strong></td><td class="crd-td">CPV: 16,83, -25,06</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Rabil</strong></td><td class="crd-td">CPV: 16,13, -22,89</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Achada Igreja</strong></td><td class="crd-td">CPV: 15,08, -23,63</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">697</td><td class="crd-td">818</td><td class="crd-td">938</td><td class="crd-td">-</td><td class="crd-td">986 (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Calhau</strong></td><td class="crd-td">CPV: 16,86, -24,88</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">901 (1940AD)</td></tr>
<tr><td class="crd-td"><strong>Cha das Caldeiras</strong></td><td class="crd-td">CPV: 14,97, -24,36</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">796 (1940AD)</td></tr>
<tr><td class="crd-td"><strong>João Teves</strong></td><td class="crd-td">CPV: 15,07, -23,59</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">520</td><td class="crd-td">596</td><td class="crd-td">673</td><td class="crd-td">-</td><td class="crd-td">703 (2010AD)</td></tr>
<tr><td class="crd-td"><strong>Pedra de Lume</strong></td><td class="crd-td">CPV: 16,76, -22,89</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">628 (1940AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed settlements in Cabo Verde (1890AD to 2025AD).</figcaption>
</figure>

## Mayotte

Table \ref{tab:sett-mayotte} presents 19 communes and urban areas across Mayotte, headed by Mamoudzou (103,6k agglomeration; 65,9k commune), Koungou (32,2k), Dzaoudzi (29,3k agglomeration; 17,8k commune), Dembéni (15,8k), Bandraboua (14k) and Tsingoni (13,9k) [@INSEE2023ReunionMayotte].

<figure class="crd-table-figure" id="tab:sett-mayotte">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1890AD</th><th class="crd-th">1950AD</th><th class="crd-th">1975AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mamoudzou (Agglomeration)</strong></td><td class="crd-td">MYT: -12,78, 45,22</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">103,6k (2017AD)</td></tr>
<tr><td class="crd-td"><strong>Mamoudzou</strong></td><td class="crd-td">MYT: -12,78, 45,22</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">21,4k</td><td class="crd-td">40,9k</td><td class="crd-td">-</td><td class="crd-td">65,9k (2017AD)</td></tr>
<tr><td class="crd-td"><strong>Koungou</strong></td><td class="crd-td">MYT: -12,73, 45,2</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">8,7k</td><td class="crd-td">14,9k</td><td class="crd-td">-</td><td class="crd-td">32,2k (2017AD)</td></tr>
<tr><td class="crd-td"><strong>Dzaoudzi (Agglomeration)</strong></td><td class="crd-td">MYT: -12,78, 45,27</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">29,3k (2017AD)</td></tr>
<tr><td class="crd-td"><strong>Dzaoudzi</strong></td><td class="crd-td">MYT: -12,78, 45,27</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">7,3k</td><td class="crd-td">11,9k</td><td class="crd-td">-</td><td class="crd-td">17,8k (2017AD)</td></tr>
<tr><td class="crd-td"><strong>Dembéni</strong></td><td class="crd-td">MYT: -12,84, 45,18</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">4,8k</td><td class="crd-td">7,6k</td><td class="crd-td">-</td><td class="crd-td">15,8k (2017AD)</td></tr>
<tr><td class="crd-td"><strong>Bandraboua</strong></td><td class="crd-td">MYT: -12,7, 45,12</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">4,5k</td><td class="crd-td">7,3k</td><td class="crd-td">-</td><td class="crd-td">14k (2017AD)</td></tr>
<tr><td class="crd-td"><strong>Tsingoni</strong></td><td class="crd-td">MYT: -12,79, 45,1</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">4,6k</td><td class="crd-td">7,5k</td><td class="crd-td">-</td><td class="crd-td">13,9k (2017AD)</td></tr>
<tr><td class="crd-td"><strong>Pamandzi</strong></td><td class="crd-td">MYT: -12,8, 45,28</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,4k (2017AD)</td></tr>
<tr><td class="crd-td"><strong>Sada</strong></td><td class="crd-td">MYT: -12,85, 45,1</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">4,5k</td><td class="crd-td">6,8k</td><td class="crd-td">-</td><td class="crd-td">11,2k (2017AD)</td></tr>
<tr><td class="crd-td"><strong>Bandrélé</strong></td><td class="crd-td">MYT: -12,91, 45,18</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">3,5k</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">10,3k (2017AD)</td></tr>
<tr><td class="crd-td"><strong>Ouangani</strong></td><td class="crd-td">MYT: -12,85, 45,14</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">3,2k</td><td class="crd-td">5,4k</td><td class="crd-td">-</td><td class="crd-td">10,2k (2017AD)</td></tr>
<tr><td class="crd-td"><strong>Chirongui</strong></td><td class="crd-td">MYT: -12,93, 45,15</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">3,5k</td><td class="crd-td">5,5k</td><td class="crd-td">-</td><td class="crd-td">8,9k (2017AD)</td></tr>
<tr><td class="crd-td"><strong>Chiconi</strong></td><td class="crd-td">MYT: -12,83, 45,11</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">3,9k</td><td class="crd-td">6k</td><td class="crd-td">-</td><td class="crd-td">8,3k (2017AD)</td></tr>
<tr><td class="crd-td"><strong>Mtsamboro</strong></td><td class="crd-td">MYT: -12,7, 45,07</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">4,3k</td><td class="crd-td">6,9k</td><td class="crd-td">-</td><td class="crd-td">7,8k (2012AD)</td></tr>
<tr><td class="crd-td"><strong>M'Tsangamouji</strong></td><td class="crd-td">MYT: -12,76, 45,09</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">3,1k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">6,4k (2017AD)</td></tr>
<tr><td class="crd-td"><strong>Bouéni</strong></td><td class="crd-td">MYT: -12,9, 45,08</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">3,2k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">6,4k (2012AD)</td></tr>
<tr><td class="crd-td"><strong>Kani-Kéli</strong></td><td class="crd-td">MYT: -12,95, 45,1</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">2,8k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">5,5k (2017AD)</td></tr>
<tr><td class="crd-td"><strong>Acoua</strong></td><td class="crd-td">MYT: -12,72, 45,06</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">3k</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">5,2k (2017AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Individually assessed settlements in Mayotte (1890AD to 2025AD).</figcaption>
</figure>

## Seychelles

Table \ref{tab:sett-seychelles} records 20 urban districts and settlements across Mahé, Praslin and La Digue, led by Victoria (78k agglomeration; 29,7k city-proper), Cascade (7,3k), Anse Étoile (6,6k) and Perseverance (6,2k).

<figure class="crd-table-figure" id="tab:sett-seychelles">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1890AD</th><th class="crd-th">1950AD</th><th class="crd-th">1975AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Victoria (Agglomeration)</strong></td><td class="crd-td">SYC: -4,67, 55,47</td><td class="crd-td">Metro</td><td class="crd-td">-</td><td class="crd-td">10,3k</td><td class="crd-td">21,6k</td><td class="crd-td">58,5k</td><td class="crd-td">78k</td><td class="crd-td">78k (2025AD)</td></tr>
<tr><td class="crd-td"><strong>Victoria</strong></td><td class="crd-td">SYC: -4,67, 55,47</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">10,6k</td><td class="crd-td">19,9k</td><td class="crd-td">24,9k</td><td class="crd-td">-</td><td class="crd-td">29,7k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Cascade</strong></td><td class="crd-td">SYC: -4,67, 55,5</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,4k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">7,3k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Anse Étoile</strong></td><td class="crd-td">SYC: -4,59, 55,45</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,9k</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">6,6k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Perseverance</strong></td><td class="crd-td">SYC: -4,6, 55,46</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Au Cap</strong></td><td class="crd-td">SYC: -4,7, 55,52</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,9k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">6k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Beau Vallon</strong></td><td class="crd-td">SYC: -4,62, 55,43</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,9k</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">5,6k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Anse Boileau</strong></td><td class="crd-td">SYC: -4,72, 55,48</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">3,1k</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">5,4k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Baie Sainte Anne</strong></td><td class="crd-td">SYC: -4,32, 55,75</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,6k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">5,1k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Anse Royale</strong></td><td class="crd-td">SYC: -4,73, 55,52</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,2k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">5k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Baie Lazare</strong></td><td class="crd-td">SYC: -4,75, 55,48</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,1k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">4,8k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Anse aux Pins</strong></td><td class="crd-td">SYC: -4,69, 55,52</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,6k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">4,7k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Glacis</strong></td><td class="crd-td">SYC: -4,58, 55,44</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,6k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">4,5k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Grand'Anse</strong></td><td class="crd-td">SYC: -4,33, 55,72</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">2,9k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">4,3k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>La Digue</strong></td><td class="crd-td">SYC: -4,36, 55,84</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">3,9k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Takamaka</strong></td><td class="crd-td">SYC: -4,77, 55,5</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">3,9k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Pointe La Rue</strong></td><td class="crd-td">SYC: -4,67, 55,51</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,9k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">3,8k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Port Glaud</strong></td><td class="crd-td">SYC: -4,66, 55,42</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">3,2k (2022AD)</td></tr>
<tr><td class="crd-td"><strong>Anse Kerlan</strong></td><td class="crd-td">SYC: -4,31, 55,69</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1947AD)</td></tr>
<tr><td class="crd-td"><strong>La Passe Silhouette</strong></td><td class="crd-td">SYC: -4,48, 55,25</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">793 (1947AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Individually assessed settlements in the Seychelles (1890AD to 2025AD).</figcaption>
</figure>

## Saint Helena, Ascension and Tristan da Cunha

Table \ref{tab:sett-saint-helena} catalogues 15 parishes and island settlements across Saint Helena, Ascension and Tristan da Cunha, anchored by Jamestown (2,2k in 1891AD), St. Paul's (978), Longwood (951), Georgetown (450) and Edinburgh of the Seven Seas (293).

<figure class="crd-table-figure" id="tab:sett-saint-helena">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1890AD</th><th class="crd-th">1950AD</th><th class="crd-th">1975AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Deadwood</strong></td><td class="crd-td">SHN: -15,93, -5,67</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1901AD)</td></tr>
<tr><td class="crd-td"><strong>Jamestown</strong></td><td class="crd-td">SHN: -15,92, -5,72</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">1,5k</td><td class="crd-td">834</td><td class="crd-td">-</td><td class="crd-td">2,2k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Broadbottom</strong></td><td class="crd-td">SHN: -15,96, -5,74</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1901AD)</td></tr>
<tr><td class="crd-td"><strong>St. Paul's</strong></td><td class="crd-td">SHN: -15,94, -5,72</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">821</td><td class="crd-td">867</td><td class="crd-td">873</td><td class="crd-td">-</td><td class="crd-td">978 (1987AD)</td></tr>
<tr><td class="crd-td"><strong>Longwood</strong></td><td class="crd-td">SHN: -15,95, -5,69</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">630</td><td class="crd-td">724</td><td class="crd-td">904</td><td class="crd-td">-</td><td class="crd-td">951 (1998AD)</td></tr>
<tr><td class="crd-td"><strong>Rupert's Valley</strong></td><td class="crd-td">SHN: -15,92, -5,7</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">451 (1931AD)</td></tr>
<tr><td class="crd-td"><strong>Georgetown</strong></td><td class="crd-td">SHN: -7,93, -14,41</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">302</td><td class="crd-td">366</td><td class="crd-td">430</td><td class="crd-td">-</td><td class="crd-td">450 (2008AD)</td></tr>
<tr><td class="crd-td"><strong>Levelwood</strong></td><td class="crd-td">SHN: -15,97, -5,68</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">390</td><td class="crd-td">368</td><td class="crd-td">362</td><td class="crd-td">-</td><td class="crd-td">414 (1987AD)</td></tr>
<tr><td class="crd-td"><strong>Sandy Bay</strong></td><td class="crd-td">SHN: -15,98, -5,71</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">402</td><td class="crd-td">340</td><td class="crd-td">244</td><td class="crd-td">-</td><td class="crd-td">412 (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Alarm Forest</strong></td><td class="crd-td">SHN: -15,94, -5,71</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">301</td><td class="crd-td">360</td><td class="crd-td">278</td><td class="crd-td">-</td><td class="crd-td">394 (2021AD)</td></tr>
<tr><td class="crd-td"><strong>Blue Hill</strong></td><td class="crd-td">SHN: -15,98, -5,75</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">296</td><td class="crd-td">223</td><td class="crd-td">171</td><td class="crd-td">-</td><td class="crd-td">308 (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Edinburgh of the Seven Seas</strong></td><td class="crd-td">SHN: -37,07, -12,31</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">260</td><td class="crd-td">268</td><td class="crd-td">269</td><td class="crd-td">-</td><td class="crd-td">293 (2016AD)</td></tr>
<tr><td class="crd-td"><strong>Cat Hill US Military Base</strong></td><td class="crd-td">SHN: -7,95, -14,41</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">210 (2008AD)</td></tr>
<tr><td class="crd-td"><strong>Traveller's Hill Royal Air Force Base</strong></td><td class="crd-td">SHN: -7,94, -14,37</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">170 (2008AD)</td></tr>
<tr><td class="crd-td"><strong>The Residency</strong></td><td class="crd-td">SHN: -7,95, -14,35</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4 (2008AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Individually assessed settlements in Saint Helena, Ascension and Tristan da Cunha (1890AD to 2025AD).</figcaption>
</figure>

## Îles Éparses (TAAF)

Table \ref{tab:sett-taaf} documents 4 meteorological and garrison stations across the Scattered Islands in the Mozambique Channel, led by Juan de Nova Station (112 in 1936AD) alongside Europa Island, Grande Glorieuse and Tromelin.

<figure class="crd-table-figure" id="tab:sett-taaf">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1890AD</th><th class="crd-th">1950AD</th><th class="crd-th">1975AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Juan de Nova Station</strong></td><td class="crd-td">ATF: -17,06, 42,73</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">98</td><td class="crd-td">15</td><td class="crd-td">15</td><td class="crd-td">-</td><td class="crd-td">112 (1936AD)</td></tr>
<tr><td class="crd-td"><strong>Europa Island Station</strong></td><td class="crd-td">ATF: -22,36, 40,36</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">18</td><td class="crd-td">15</td><td class="crd-td">15</td><td class="crd-td">-</td><td class="crd-td">22 (1954AD)</td></tr>
<tr><td class="crd-td"><strong>Grande Glorieuse Station</strong></td><td class="crd-td">ATF: -11,57, 47,3</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12</td><td class="crd-td">12</td><td class="crd-td">-</td><td class="crd-td">12 (1973AD)</td></tr>
<tr><td class="crd-td"><strong>Tromelin Station</strong></td><td class="crd-td">ATF: -15,89, 54,52</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4</td><td class="crd-td">4</td><td class="crd-td">-</td><td class="crd-td">4 (1954AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 10.</span> Individually assessed stations across the Îles Éparses (1890AD to 2025AD).</figcaption>
</figure>

## Chagos Archipelago (BIOT)

Table \ref{tab:sett-biot} lists 3 former copra settlements across the Chagos Archipelago prior to their 1968-1973AD forced depopulation: East Point on Diego Garcia (619 in 1952AD), Île du Coin (318) and Boddam (215).

<figure class="crd-table-figure" id="tab:sett-biot">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">Scope</th><th class="crd-th">1890AD</th><th class="crd-th">1950AD</th><th class="crd-th">1975AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>East Point (Diego Garcia)</strong></td><td class="crd-td">IOT: -7,35, 72,47</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">590</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">619 (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Île du Coin</strong></td><td class="crd-td">IOT: -5,44, 71,77</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">268 (1901AD)</td></tr>
<tr><td class="crd-td"><strong>Boddam</strong></td><td class="crd-td">IOT: -5,32, 72,23</td><td class="crd-td">City</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">215 (1901AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 11.</span> Individually assessed former settlements in the Chagos Archipelago (1890AD to 1971AD).</figcaption>
</figure>

# Limitations

Three caveats govern this settlement ledger. First, many communes in Mayotte (2017AD latest INSEE census), Cabo Verde (2021AD), Seychelles (2022AD) and Saint Helena (2021AD) lack 2025AD official counts unless covered by Africapolis urban projections, so benchmark columns outside each settlement's observed span display a hyphen (-). Second, pairing 313 city-proper municipal cores with 26 metropolitan agglomerations preserves both administrative and morphological urban definitions, yet users summing rows within a territory must avoid adding an agglomeration to its core city. Third, 22 entries carry single-date observations (mostly recent commune or district splits such as Perseverance in Seychelles or 2023AD Réunion agglomerations).

# Conclusion

Taken together, the 556 entries in this gazetteer document the transformation of African oceanic islands from modest colonial ports and plantation estates in the 1890s into a diverse network of metropolitan capitals, upland suburban corridors, tourist towns and abandoned atoll stations by 2025AD.

# Appendix

## Territorial Gazetteer Summary

Table \ref{tab:gazetteer-summary} summarises settlement counts (separated by city-proper and metropolitan scope) and summed interpolated city-proper populations across all 11 territories from 1890AD to 2025AD.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Territory (Total / Metro)</th><th class="crd-th">1890AD</th><th class="crd-th">1950AD</th><th class="crd-th">1975AD</th><th class="crd-th">2000AD</th><th class="crd-th">2025AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Madagascar (253 / 1)</strong></td><td class="crd-td">7k</td><td class="crd-td">794,2k</td><td class="crd-td">1,84M</td><td class="crd-td">3,6M</td><td class="crd-td">4,17M</td></tr>
<tr><td class="crd-td"><strong>Mauritius and Rodrigues (64 / 8)</strong></td><td class="crd-td">0</td><td class="crd-td">370,7k</td><td class="crd-td">644,3k</td><td class="crd-td">916,8k</td><td class="crd-td">492,9k</td></tr>
<tr><td class="crd-td"><strong>La Réunion (45 / 10)</strong></td><td class="crd-td">2,9k</td><td class="crd-td">257,4k</td><td class="crd-td">456,3k</td><td class="crd-td">717k</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>São Tomé and Príncipe (55 / 1)</strong></td><td class="crd-td">1,8k</td><td class="crd-td">43,1k</td><td class="crd-td">69k</td><td class="crd-td">94,1k</td><td class="crd-td">44,4k</td></tr>
<tr><td class="crd-td"><strong>Union of the Comoros (37 / 1)</strong></td><td class="crd-td">3,9k</td><td class="crd-td">82,7k</td><td class="crd-td">136,6k</td><td class="crd-td">236,4k</td><td class="crd-td">416,4k</td></tr>
<tr><td class="crd-td"><strong>Cabo Verde (41 / 2)</strong></td><td class="crd-td">6,2k</td><td class="crd-td">77,9k</td><td class="crd-td">117k</td><td class="crd-td">239,8k</td><td class="crd-td">68,9k</td></tr>
<tr><td class="crd-td"><strong>Mayotte (19 / 2)</strong></td><td class="crd-td">0</td><td class="crd-td">28,5k</td><td class="crd-td">86,4k</td><td class="crd-td">145k</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>Seychelles (20 / 1)</strong></td><td class="crd-td">0</td><td class="crd-td">37,5k</td><td class="crd-td">56,5k</td><td class="crd-td">72,6k</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>Saint Helena, Ascension and Tristan da Cunha (15 / 0)</strong></td><td class="crd-td">0</td><td class="crd-td">4,9k</td><td class="crd-td">5k</td><td class="crd-td">4,4k</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>Îles Éparses (TAAF) (4 / 0)</strong></td><td class="crd-td">0</td><td class="crd-td">116</td><td class="crd-td">46</td><td class="crd-td">46</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>Chagos Archipelago (BIOT) (3 / 0)</strong></td><td class="crd-td">0</td><td class="crd-td">590</td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">0</td></tr>
<tr><td class="crd-td"><strong>All Territories (556 / 26)</strong></td><td class="crd-td">21,9k</td><td class="crd-td">1,7M</td><td class="crd-td">3,42M</td><td class="crd-td">6,02M</td><td class="crd-td">5,19M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 12.</span> Assessed site counts and combined interpolated city-proper populations across eleven island territories from 1890AD to 2025AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Linear interpolation in Tables 1 to 11 is bounded strictly between each settlement's earliest and latest observed dates; periods prior to first enumeration or after final observation appear with a hyphen (-). To prevent double counting in Table \ref{tab:gazetteer-summary}, interpolated totals sum only the 313 city-proper entries while displaying total and metropolitan entry counts in parentheses.
