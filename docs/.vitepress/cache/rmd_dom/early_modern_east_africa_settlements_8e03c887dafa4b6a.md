---
title: "Early Modern East Africa and Mozambique"
subtitle: "Settlement Gazetteer: 1.783 Individually Assessed Sites (1500AD-1885AD)"
date: "24 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: early_modern_east_africa_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 1.783 individually assessed settlements across 13 countries spanning nine historical sub-regions from 1500AD to 1885AD."
hero_label: "fig:hero-settlements-east-africa"

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

This gazetteer compiles coordinates and multi-period population series for 1.783 individually assessed settlements across 13 countries in East Africa and Mozambique between 1500AD and 1885AD. Screened from 2.130 candidate ports, royal capitals, *prazo* strongholds and caravan entrepôts (347 excluded as duplicate aliases), the retained ledger spans nine historical sub-regions from the Banadir and Swahili coasts through the Great Lakes and Unyamwezi to the Zambezi basin and Gaza. Active interpolated sites rise from 1.156 around 1500AD to 1.023 at 1700AD, 1.168 at 1800AD, 1.210 at 1850AD and 205 at 1880AD, documenting urban trajectories from Bigo bya Mugenyi (100k) and Muqdisho (21,2k) to Zanzibar (65k), Kibuga (38,5k), Mombasa (30k) and Tabora (20k).



# Background

Compiling an early modern settlement ledger across East Africa and Mozambique requires integrating coastal European, Arabic and Swahili sources with inland archaeological surveys and nineteenth-century travel journals [@HortonMiddleton2000Swahili; @Newitt1995Mozambique; @Burton1904FirstFootsteps]. While stone-built coral ports from Somalia to Mozambique Island and Portuguese fortresses at Sofala, Sena and Tete generated dated garrison and customs counts from the sixteenth century onward [@Pradines2016PortugueseFortresses; @Berg1900TheSwahili], earthen capitals across Buganda, Rwanda, Burundi, Unyamwezi and the Zambezi plateau relied on mapped enclosure areas and traveller headcounts recorded predominantly between 1798AD and 1885AD [@Kafuuma2019HeritageSignificance; @Bryndina2023TheMost].

# Methodology

## Candidate Screening and Sub-Regional Partition

Candidate sites were screened across four waves from archival censuses, archaeological site inventories and historical monographs [@NMK2021KenyaSites; @Alders2023OpenAccess; @WynneJones2018SwahiliWorld]. From 2.130 initial entries inside the 3.400.448 km² regional boundary clipped to geoBoundaries outlines [@Runfola2020GeoBoundaries], 347 duplicate orthographies and merged aliases were excluded, leaving 1.783 individually assessed settlements across 5.591 observations. Ninety-one entries fall strictly inside the 5-arcminute regional mask pixels and 6 border-margin sites (Muqdisho, Afgoye, Baar Dheere, Chencha, Great Zimbabwe and Thulamela) are assigned to their adjoining cultural sub-regions so every entry is catalogued.

## Site-Specific Population Estimation

Every entry records city-proper populations (97 city-proper, 0 metropolitan agglomerations) anchored to stone-core hectares, earthwork perimeters, compound counts or contemporary enumerations [@WynneJones2018TheMultiple; @Lyne1905ZanzibarContemporary]. Tables 1 to 9 report linearly interpolated headcounts at five benchmarks (1500AD, 1700AD, 1800AD, 1850AD, 1880AD) alongside each settlement's peak population and date, marking spans outside observed occupation with a hyphen (-).

# Testing and Validation

Across all 1.783 settlements, ordinary least-squares rank-size regression yields $q = 0,73$ ($R^2 = 0,99$) across the upper 48 sites and $q = 0,98$ ($R^2 = 0,88$) across the full sample (Figure \ref{fig:settlements-rank}). Chronological checks confirm clean continuity across Portuguese, Omani-Zanzibari and early colonial records without duplicate place-name aliases [@Baumanova2022WhatsName; @Parliament1898CorrespondenceRespecting].

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-early-modern-east-africa-settlements/fig_03_rank_size.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Zipf rank-size curve across 1.783 individually assessed settlements (top-48 OLS q = 0,73, R² = 0,99) and sub-regional densities in 1880AD.</figcaption>
</figure>

# Results

## Omani-Zanzibar Sultanate and Swahili Coast

Table \ref{tab:sub-swahili} documents 333 settlements along the Swahili littoral and Usambara-Kilimanjaro hinterland, led by Zanzibar (65k), Mombasa (30k), Bagamoyo (18,5k), Pate (16,8k), Lamu (15,2k), Kilwa Kivinje (15k) and Siyu (11,2k) [@Allen1981SwahiliCulture; @Kusimba1999SwahiliStates].

<figure class="crd-table-figure" id="tab:sub-swahili">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Zanzibar</strong></td><td class="crd-td">TZA: -6,11, 39,22</td><td class="crd-td">-</td><td class="crd-td">6k</td><td class="crd-td">13,8k</td><td class="crd-td">41,6k</td><td class="crd-td">57,2k</td><td class="crd-td">65k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Mombasa</strong></td><td class="crd-td">KEN: -3,99, 39,71</td><td class="crd-td">17,1k</td><td class="crd-td">9,3k</td><td class="crd-td">9,9k</td><td class="crd-td">30k</td><td class="crd-td">16,6k</td><td class="crd-td">30k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Bagamoyo</strong></td><td class="crd-td">TZA: -6,45, 38,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">7,8k</td><td class="crd-td">16,4k</td><td class="crd-td">18,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Pate</strong></td><td class="crd-td">KEN: -2,14, 41,02</td><td class="crd-td">7,6k</td><td class="crd-td">16,8k</td><td class="crd-td">10,5k</td><td class="crd-td">4k</td><td class="crd-td">2,1k</td><td class="crd-td">16,8k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Lamu</strong></td><td class="crd-td">KEN: -2,27, 40,9</td><td class="crd-td">7,3k</td><td class="crd-td">9,8k</td><td class="crd-td">13,5k</td><td class="crd-td">14k</td><td class="crd-td">-</td><td class="crd-td">15,2k (1813AD)</td></tr>
<tr><td class="crd-td"><strong>Kilwa Kivinje</strong></td><td class="crd-td">TZA: -8,74, 39,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,5k</td><td class="crd-td">13,1k</td><td class="crd-td">15k (1865AD)</td></tr>
<tr><td class="crd-td"><strong>Witu</strong></td><td class="crd-td">KEN: -2,39, 40,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,7k</td><td class="crd-td">11,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Siyu</strong></td><td class="crd-td">KEN: -2,09, 41,06</td><td class="crd-td">3,3k</td><td class="crd-td">7,9k</td><td class="crd-td">10,4k</td><td class="crd-td">10,3k</td><td class="crd-td">-</td><td class="crd-td">11,2k (1840AD)</td></tr>
<tr><td class="crd-td"><strong>Malindi</strong></td><td class="crd-td">KEN: -3,2, 40,1</td><td class="crd-td">10,2k</td><td class="crd-td">940</td><td class="crd-td">1,6k</td><td class="crd-td">2,3k</td><td class="crd-td">4,3k</td><td class="crd-td">10,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Pangani Magharibi</strong></td><td class="crd-td">TZA: -5,42, 38,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">6k</td><td class="crd-td">9,3k</td><td class="crd-td">9,5k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Moshi</strong></td><td class="crd-td">TZA: -3,32, 37,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">6,2k</td><td class="crd-td">6,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Chake Chake</strong></td><td class="crd-td">TZA: -5,23, 39,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">4,7k</td><td class="crd-td">5,3k</td><td class="crd-td">6,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Tanga</strong></td><td class="crd-td">TZA: -5,07, 39,1</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,9k</td><td class="crd-td">4,4k</td><td class="crd-td">5,6k</td><td class="crd-td">5,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Gedi</strong></td><td class="crd-td">KEN: -3,31, 40,02</td><td class="crd-td">5,3k</td><td class="crd-td">2k</td><td class="crd-td">2,7k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">5,4k (1520AD)</td></tr>
<tr><td class="crd-td"><strong>Saadani</strong></td><td class="crd-td">TZA: -6,05, 38,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,6k</td><td class="crd-td">5,1k</td><td class="crd-td">5,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Takaungu</strong></td><td class="crd-td">KEN: -3,68, 39,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Mtwapa</strong></td><td class="crd-td">KEN: -3,94, 39,75</td><td class="crd-td">5k</td><td class="crd-td">1,3k</td><td class="crd-td">1,8k</td><td class="crd-td">992</td><td class="crd-td">2,1k</td><td class="crd-td">5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Faza</strong></td><td class="crd-td">KEN: -2,06, 41,11</td><td class="crd-td">3,6k</td><td class="crd-td">4,8k</td><td class="crd-td">3,7k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">4,8k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Dar es Salaam</strong></td><td class="crd-td">TZA: -6,81, 39,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Vuga</strong></td><td class="crd-td">TZA: -4,87, 38,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">4,3k</td><td class="crd-td">2,7k</td><td class="crd-td">4,8k (1862AD)</td></tr>
<tr><td class="crd-td"><strong>Ungwana</strong></td><td class="crd-td">KEN: -2,53, 40,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,5k (1505AD)</td></tr>
<tr><td class="crd-td"><strong>Old Moshi</strong></td><td class="crd-td">TZA: -3,3, 37,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,7k</td><td class="crd-td">4,1k</td><td class="crd-td">4,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Ozi</strong></td><td class="crd-td">KEN: -2,51, 40,46</td><td class="crd-td">2,2k</td><td class="crd-td">3,6k</td><td class="crd-td">4,2k</td><td class="crd-td">3,5k</td><td class="crd-td">3,1k</td><td class="crd-td">4,2k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Kau</strong></td><td class="crd-td">KEN: -2,48, 40,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">4,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Vanga</strong></td><td class="crd-td">KEN: -4,66, 39,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">4,1k</td><td class="crd-td">3,6k</td><td class="crd-td">4,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Taveta</strong></td><td class="crd-td">KEN: -3,39, 37,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">3,1k</td><td class="crd-td">3,8k</td><td class="crd-td">4k (1883AD)</td></tr>
<tr><td class="crd-td"><strong>Rabai</strong></td><td class="crd-td">KEN: -3,93, 39,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,8k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Wete</strong></td><td class="crd-td">TZA: -5,06, 39,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">3,6k</td><td class="crd-td">3,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Kijini</strong></td><td class="crd-td">TZA: -6,41, 39,55</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">2,9k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">3,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Unguja Ukuu</strong></td><td class="crd-td">TZA: -6,31, 39,37</td><td class="crd-td">1,2k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1779AD)</td></tr>
<tr><td class="crd-td"><strong>Bandarikuu</strong></td><td class="crd-td">TZA: -5,2, 39,66</td><td class="crd-td">3,3k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,8k</td><td class="crd-td">3,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Duluti</strong></td><td class="crd-td">TZA: -3,39, 36,79</td><td class="crd-td">2,5k</td><td class="crd-td">3,1k</td><td class="crd-td">3,2k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Macoba Bay</strong></td><td class="crd-td">TZA: -5,94, 39,21</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1638AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Chala</strong></td><td class="crd-td">KEN: -3,32, 37,7</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1693AD)</td></tr>
<tr><td class="crd-td"><strong>Pujini</strong></td><td class="crd-td">TZA: -5,3, 39,8</td><td class="crd-td">2,8k</td><td class="crd-td">1,8k</td><td class="crd-td">1,9k</td><td class="crd-td">2,6k</td><td class="crd-td">3k</td><td class="crd-td">3,1k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>WeruWeru 26</strong></td><td class="crd-td">TZA: -3,12, 37,27</td><td class="crd-td">2,2k</td><td class="crd-td">2,9k</td><td class="crd-td">2,9k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">3k (1868AD)</td></tr>
<tr><td class="crd-td"><strong>Ungwana</strong></td><td class="crd-td">KEN: -2,52, 40,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1505AD)</td></tr>
<tr><td class="crd-td"><strong>Namelok</strong></td><td class="crd-td">KEN: -2,71, 37,46</td><td class="crd-td">2,3k</td><td class="crd-td">2,9k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Tumbe</strong></td><td class="crd-td">TZA: -4,95, 39,79</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kitoka Ruins</strong></td><td class="crd-td">KEN: -3,73, 39,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 293 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in the Omani-Zanzibar Sultanate and Swahili Coast sub-region (1500AD to 1885AD) (top 40 of 333 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Maasai Steppe, Kenya Highlands and Banadir Fringe

Table \ref{tab:sub-kenya-banadir} lists 252 settlements across the Banadir coast, southern Ethiopian highlands and western Kenya, led by Muqdisho (21,2k), Afgoye (7,42k), Barawa E Al Bambar (6,42k), Mumias (5,4k) and Marka (5,12k) [@Kassim1995IslamAnd_2; @NMK2021KenyaSites].

<figure class="crd-table-figure" id="tab:sub-kenya-banadir">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Muqdisho</strong></td><td class="crd-td">SOM: 2,06, 45,31</td><td class="crd-td">11,5k</td><td class="crd-td">10,8k</td><td class="crd-td">7,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">21,2k (1516AD)</td></tr>
<tr><td class="crd-td"><strong>Afgoye</strong></td><td class="crd-td">SOM: 2,14, 45,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">6,9k</td><td class="crd-td">7,4k</td><td class="crd-td">7,4k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Barawa E Al Bambar</strong></td><td class="crd-td">SOM: 1,11, 44,03</td><td class="crd-td">4,6k</td><td class="crd-td">4,8k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k (1506AD)</td></tr>
<tr><td class="crd-td"><strong>Marka</strong></td><td class="crd-td">SOM: 1,71, 44,76</td><td class="crd-td">5,9k</td><td class="crd-td">4,8k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mumias</strong></td><td class="crd-td">KEN: 0,33, 34,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,4k (1883AD)</td></tr>
<tr><td class="crd-td"><strong>Karat</strong></td><td class="crd-td">ETH: 5,34, 37,44</td><td class="crd-td">2,6k</td><td class="crd-td">3k</td><td class="crd-td">3,4k</td><td class="crd-td">4k</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Baar Dheere</strong></td><td class="crd-td">SOM: 2,34, 42,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">3,9k (1835AD)</td></tr>
<tr><td class="crd-td"><strong>Egu Abey</strong></td><td class="crd-td">ETH: 5,7, 38,48</td><td class="crd-td">1,8k</td><td class="crd-td">2,4k</td><td class="crd-td">2,7k</td><td class="crd-td">3,2k</td><td class="crd-td">3,6k</td><td class="crd-td">3,7k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Qoryoley</strong></td><td class="crd-td">SOM: 1,79, 44,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">3,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Simbi</strong></td><td class="crd-td">KEN: -0,37, 34,63</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1841AD)</td></tr>
<tr><td class="crd-td"><strong>Usenge</strong></td><td class="crd-td">KEN: -0,05, 34,13</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Bogoria (north basin)</strong></td><td class="crd-td">KEN: 0,33, 36,08</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1701AD)</td></tr>
<tr><td class="crd-td"><strong>Ohinga</strong></td><td class="crd-td">KEN: -0,88, 34,36</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Nyabuiyabui</strong></td><td class="crd-td">KEN: -0,44, 35,8</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1747AD)</td></tr>
<tr><td class="crd-td"><strong>Loboi Swamp</strong></td><td class="crd-td">KEN: 0,37, 36,05</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1768AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Nkunga</strong></td><td class="crd-td">KEN: 0,12, 37,59</td><td class="crd-td">1,8k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1788AD)</td></tr>
<tr><td class="crd-td"><strong>Kiluli Swamp</strong></td><td class="crd-td">KEN: 0,13, 37,75</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1819AD)</td></tr>
<tr><td class="crd-td"><strong>Saiwa Swamp</strong></td><td class="crd-td">KEN: 0,1, 35,12</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1625AD)</td></tr>
<tr><td class="crd-td"><strong>Laska</strong></td><td class="crd-td">ETH: 6,29, 36,61</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Rift Valley Lakes palaeoshores</strong></td><td class="crd-td">KEN: -0,48, 36,1</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lanet</strong></td><td class="crd-td">KEN: -0,3, 36,13</td><td class="crd-td">339</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1571AD)</td></tr>
<tr><td class="crd-td"><strong>Haa</strong></td><td class="crd-td">KEN: 0,22, 34,29</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Structure</strong></td><td class="crd-td">SOM: 1,6, 44,61</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Dhoobaale</strong></td><td class="crd-td">SOM: 0,41, 41,01</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Kismaayo</strong></td><td class="crd-td">SOM: -0,35, 42,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1872AD)</td></tr>
<tr><td class="crd-td"><strong>Tutu Fela</strong></td><td class="crd-td">ETH: 6,26, 38,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1520AD)</td></tr>
<tr><td class="crd-td"><strong>Kipasi</strong></td><td class="crd-td">KEN: -0,17, 34,27</td><td class="crd-td">2,4k</td><td class="crd-td">706</td><td class="crd-td">633</td><td class="crd-td">459</td><td class="crd-td">314</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lolldaiga Hills ranch</strong></td><td class="crd-td">KEN: 0,27, 37,15</td><td class="crd-td">1,8k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Shalambod</strong></td><td class="crd-td">SOM: 1,71, 44,69</td><td class="crd-td">1,1k</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,2k</td><td class="crd-td">2,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Tetu</strong></td><td class="crd-td">KEN: -0,43, 36,92</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Gesuba</strong></td><td class="crd-td">ETH: 6,72, 37,57</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,2k</td><td class="crd-td">2,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Gamble&amp;apos;s Cave (GsJi 1)</strong></td><td class="crd-td">KEN: -0,52, 36,11</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Karachuonyo</strong></td><td class="crd-td">KEN: -0,43, 34,69</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Navakholo</strong></td><td class="crd-td">KEN: 0,41, 34,68</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kedida Gubeta</strong></td><td class="crd-td">ETH: 6,02, 38,26</td><td class="crd-td">1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">2,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>HB Ohingni Cluster</strong></td><td class="crd-td">KEN: -0,7, 34,29</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Selamber</strong></td><td class="crd-td">ETH: 6,47, 37,45</td><td class="crd-td">1,1k</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Buyanga</strong></td><td class="crd-td">UGA: 0,63, 33,57</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Busia</strong></td><td class="crd-td">KEN: 0,46, 34,11</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Sidide</strong></td><td class="crd-td">KEN: -0,65, 34,3</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 212 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in the Maasai Steppe, Kenya Highlands and Banadir sub-region (1500AD to 1885AD) (top 40 of 252 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Buganda, Bunyoro-Kitara and Ankole

Table \ref{tab:sub-buganda} compiles 232 interlacustrine sites across Uganda, from Bigo bya Mugenyi (100k), Kibuga (38,5k), Hoima (9,6k) and Masindi (6,8k) to Mbarara (5,1k), Munsa (2,15k) and Kibiro (1,75k) [@Kafuuma2019HeritageSignificance; @Lira2024Plot24Urban].

<figure class="crd-table-figure" id="tab:sub-buganda">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bigo bya Mugenyi</strong></td><td class="crd-td">UGA: 0,14, 31,26</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">100k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Kibuga</strong></td><td class="crd-td">UGA: 0,35, 32,63</td><td class="crd-td">-</td><td class="crd-td">9,5k</td><td class="crd-td">831</td><td class="crd-td">28k</td><td class="crd-td">36,2k</td><td class="crd-td">38,5k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Hoima</strong></td><td class="crd-td">UGA: 1,48, 31,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">7,2k</td><td class="crd-td">9,1k</td><td class="crd-td">9,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Masindi</strong></td><td class="crd-td">UGA: 1,68, 31,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">6,8k (1872AD)</td></tr>
<tr><td class="crd-td"><strong>Mbarara</strong></td><td class="crd-td">UGA: -0,58, 30,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">4,8k</td><td class="crd-td">4,1k</td><td class="crd-td">5,1k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Wadelai</strong></td><td class="crd-td">UGA: 2,72, 31,39</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Kayna</strong></td><td class="crd-td">COD: -0,6, 29,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,6k</td><td class="crd-td">4k</td><td class="crd-td">4k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Vieux Beni</strong></td><td class="crd-td">COD: 0,43, 29,56</td><td class="crd-td">2,1k</td><td class="crd-td">3,5k</td><td class="crd-td">4k</td><td class="crd-td">3,3k</td><td class="crd-td">3k</td><td class="crd-td">4k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Ntusi</strong></td><td class="crd-td">UGA: 0,05, 31,22</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kabulasoke</strong></td><td class="crd-td">UGA: 0,14, 31,82</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td><td class="crd-td">3k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Katwa</strong></td><td class="crd-td">COD: 0,09, 29,31</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td><td class="crd-td">3k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Munsa Swamp</strong></td><td class="crd-td">UGA: 0,82, 31,31</td><td class="crd-td">2,6k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Kityerera</strong></td><td class="crd-td">UGA: 0,33, 33,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kanyabayonga</strong></td><td class="crd-td">COD: -0,68, 29,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,9k</td><td class="crd-td">3,1k</td><td class="crd-td">3,1k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Mubwindi Swamp (Mb6)</strong></td><td class="crd-td">UGA: -1,08, 29,76</td><td class="crd-td">2,6k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1758AD)</td></tr>
<tr><td class="crd-td"><strong>Mangina</strong></td><td class="crd-td">COD: 0,57, 29,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td><td class="crd-td">3k</td><td class="crd-td">3k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Bweyorere</strong></td><td class="crd-td">UGA: -0,75, 30,78</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Victoria (Pilkington Bay)</strong></td><td class="crd-td">UGA: 0,3, 33,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1561AD)</td></tr>
<tr><td class="crd-td"><strong>Njeru</strong></td><td class="crd-td">UGA: 0,43, 33,15</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Kibengo</strong></td><td class="crd-td">UGA: -0,08, 30,18</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Patiko</strong></td><td class="crd-td">UGA: 3,01, 32,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Fort Portal</strong></td><td class="crd-td">UGA: 0,49, 30,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ituri</strong></td><td class="crd-td">COD: 1,55, 28,54</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Kirumba</strong></td><td class="crd-td">COD: -0,56, 29,19</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Kibiro</strong></td><td class="crd-td">UGA: 1,68, 31,25</td><td class="crd-td">2,5k</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td><td class="crd-td">1,7k</td><td class="crd-td">1,4k</td><td class="crd-td">2,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kabata Swamp</strong></td><td class="crd-td">UGA: 0,48, 30,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1546AD)</td></tr>
<tr><td class="crd-td"><strong>Geti</strong></td><td class="crd-td">COD: 1,21, 30,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Kammengo</strong></td><td class="crd-td">UGA: 0,17, 32,2</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Kitigata</strong></td><td class="crd-td">UGA: -0,06, 29,98</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1531AD)</td></tr>
<tr><td class="crd-td"><strong>Nakifuma-Naggalama</strong></td><td class="crd-td">UGA: 0,54, 32,79</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Agago</strong></td><td class="crd-td">UGA: 2,83, 33,33</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Munsa</strong></td><td class="crd-td">UGA: 0,83, 31,3</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Rukoma</strong></td><td class="crd-td">UGA: -0,68, 30,67</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Musienene</strong></td><td class="crd-td">COD: 0,02, 29,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">2,1k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Gombari</strong></td><td class="crd-td">COD: 2,72, 29,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">2k</td><td class="crd-td">2k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Kyampisi</strong></td><td class="crd-td">UGA: 0,49, 32,82</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Butenga</strong></td><td class="crd-td">UGA: -0,25, 31,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Katwe</strong></td><td class="crd-td">UGA: -0,14, 29,83</td><td class="crd-td">1,8k</td><td class="crd-td">942</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Chibwera</strong></td><td class="crd-td">UGA: -0,16, 30,14</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,8k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Waibuga</strong></td><td class="crd-td">UGA: 0,54, 33,4</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">1,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 192 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed settlements in the Buganda, Bunyoro-Kitara and Ankole sub-region (1500AD to 1885AD) (top 40 of 232 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Kingdoms of Rwanda and Burundi

Table \ref{tab:sub-rwanda} presents 273 sites across Rwanda, Burundi, Karagwe and eastern Lake Tanganyika, anchored by Ujiji (14k), Busasama (8,4k), Bweranyange (6,5k), Muramvya (6,2k), Gitega (4,2k) and Rumonge (2,95k) [@Brandl1975EarlyChristianity; @Bourguignat1879DescriptionDiverses].

<figure class="crd-table-figure" id="tab:sub-rwanda">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ujiji</strong></td><td class="crd-td">TZA: -4,92, 29,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14,3k</td><td class="crd-td">15,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Busasama</strong></td><td class="crd-td">RWA: -2,35, 29,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">6,8k</td><td class="crd-td">8,2k</td><td class="crd-td">8,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Bweranyange</strong></td><td class="crd-td">TZA: -1,7, 30,98</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">4,5k</td><td class="crd-td">6,1k</td><td class="crd-td">4,4k</td><td class="crd-td">6,5k (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Kanyinya</strong></td><td class="crd-td">BDI: -4,27, 29,91</td><td class="crd-td">4k</td><td class="crd-td">5k</td><td class="crd-td">5,7k</td><td class="crd-td">6,2k</td><td class="crd-td">-</td><td class="crd-td">6,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Muramvya</strong></td><td class="crd-td">BDI: -3,27, 29,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">5,4k</td><td class="crd-td">6,1k</td><td class="crd-td">6,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Ramba</strong></td><td class="crd-td">RWA: -1,87, 29,54</td><td class="crd-td">3,8k</td><td class="crd-td">4,8k</td><td class="crd-td">5,4k</td><td class="crd-td">6k</td><td class="crd-td">-</td><td class="crd-td">6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kabare</strong></td><td class="crd-td">COD: -2,5, 28,79</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">3,7k</td><td class="crd-td">4,4k</td><td class="crd-td">4,8k</td><td class="crd-td">4,8k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Gitega</strong></td><td class="crd-td">BDI: -3,4, 29,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">3,7k</td><td class="crd-td">4,1k</td><td class="crd-td">4,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Muyaga</strong></td><td class="crd-td">BDI: -4,11, 30,01</td><td class="crd-td">2,4k</td><td class="crd-td">3k</td><td class="crd-td">3,4k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">3,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Katoro</strong></td><td class="crd-td">TZA: -3,01, 31,93</td><td class="crd-td">2,3k</td><td class="crd-td">2,8k</td><td class="crd-td">3,1k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">3,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Idjwi</strong></td><td class="crd-td">COD: -1,99, 29,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Rumonge</strong></td><td class="crd-td">BDI: -3,97, 29,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,1k (1879AD)</td></tr>
<tr><td class="crd-td"><strong>Mount Gahinga</strong></td><td class="crd-td">UGA: -1,39, 29,65</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1682AD)</td></tr>
<tr><td class="crd-td"><strong>Gaseke</strong></td><td class="crd-td">RWA: -1,77, 29,55</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">2,2k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ngushu swamp</strong></td><td class="crd-td">COD: -2,29, 28,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1586AD)</td></tr>
<tr><td class="crd-td"><strong>Ndurumu</strong></td><td class="crd-td">BDI: -2,72, 29,93</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1768AD)</td></tr>
<tr><td class="crd-td"><strong>Kandalo</strong></td><td class="crd-td">RWA: -1,53, 30,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1586AD)</td></tr>
<tr><td class="crd-td"><strong>Ryamurari</strong></td><td class="crd-td">RWA: -1,35, 30,28</td><td class="crd-td">2,2k</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kamonyi</strong></td><td class="crd-td">RWA: -2, 29,9</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ruzizi</strong></td><td class="crd-td">BDI: -3,08, 29,26</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,7k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Bukeye</strong></td><td class="crd-td">BDI: -3,19, 29,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Nyangezi</strong></td><td class="crd-td">COD: -2,69, 28,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Gasabo</strong></td><td class="crd-td">RWA: -1,79, 30,14</td><td class="crd-td">2,6k</td><td class="crd-td">1,8k</td><td class="crd-td">1,8k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mikweti</strong></td><td class="crd-td">COD: -1,41, 28,59</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Ndora</strong></td><td class="crd-td">RWA: -2,61, 29,81</td><td class="crd-td">2,6k</td><td class="crd-td">1,5k</td><td class="crd-td">917</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Baraka</strong></td><td class="crd-td">COD: -4,09, 29,09</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Nyamurenza</strong></td><td class="crd-td">BDI: -2,82, 29,86</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Gishubi</strong></td><td class="crd-td">BDI: -3,65, 29,91</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Bugabira</strong></td><td class="crd-td">BDI: -2,53, 30,07</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kiri</strong></td><td class="crd-td">BDI: -2,42, 30,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kora</strong></td><td class="crd-td">RWA: -1,61, 29,44</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Muhororo</strong></td><td class="crd-td">RWA: -1,5, 30,62</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1596AD)</td></tr>
<tr><td class="crd-td"><strong>Kawezi</strong></td><td class="crd-td">COD: -3,26, 29,13</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mirama</strong></td><td class="crd-td">BDI: -3,38, 29,98</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Cyato</strong></td><td class="crd-td">RWA: -2,39, 29,19</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Lemera</strong></td><td class="crd-td">COD: -3,04, 28,99</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Mbuye</strong></td><td class="crd-td">BDI: -3,23, 29,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Nyakahanga</strong></td><td class="crd-td">TZA: -1,59, 31,14</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Gasiza</strong></td><td class="crd-td">RWA: -2,48, 29,65</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kirumba</strong></td><td class="crd-td">COD: -1,09, 29,29</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 233 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements in the Kingdoms of Rwanda and Burundi sub-region (1500AD to 1885AD) (top 40 of 273 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Nyamwezi, Mirambo and Caravan Corridor

Table \ref{tab:sub-nyamwezi} records 121 central and northern Tanzanian settlements: Tabora (20k), Urambo (16,2k), Engaruka (7,8k) and Karema (950) [@Bryndina2023TheMost; @Burton1904FirstFootsteps].

<figure class="crd-table-figure" id="tab:sub-nyamwezi">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tabora</strong></td><td class="crd-td">TZA: -5,03, 32,81</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,6k</td><td class="crd-td">19k</td><td class="crd-td">20k (1871AD)</td></tr>
<tr><td class="crd-td"><strong>Urambo</strong></td><td class="crd-td">TZA: -5,09, 32,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,3k</td><td class="crd-td">16,2k (1882AD)</td></tr>
<tr><td class="crd-td"><strong>Engaruka</strong></td><td class="crd-td">TZA: -2,99, 35,97</td><td class="crd-td">6,5k</td><td class="crd-td">4,7k</td><td class="crd-td">905</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Jangwani</strong></td><td class="crd-td">TZA: -2,14, 35,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Sale Sonjo</strong></td><td class="crd-td">TZA: -2,18, 35,81</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Luxmanda Pastoral Settlement</strong></td><td class="crd-td">TZA: -4,25, 35,32</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Seronera Game Lodge</strong></td><td class="crd-td">TZA: -2,42, 34,83</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1682AD)</td></tr>
<tr><td class="crd-td"><strong>Gol Kopjes</strong></td><td class="crd-td">TZA: -2,86, 35,1</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1667AD)</td></tr>
<tr><td class="crd-td"><strong>Kitete swamp</strong></td><td class="crd-td">TZA: -3,22, 35,92</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Babati</strong></td><td class="crd-td">TZA: -4,23, 35,74</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1698AD)</td></tr>
<tr><td class="crd-td"><strong>Kituku</strong></td><td class="crd-td">COD: -7,58, 30,21</td><td class="crd-td">1,7k</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Emakat</strong></td><td class="crd-td">TZA: -2,92, 35,83</td><td class="crd-td">2,6k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Kisima Ngeda</strong></td><td class="crd-td">TZA: -3,49, 35,35</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Central Fields</strong></td><td class="crd-td">TZA: -3, 35,96</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Nasera Rock Shelter</strong></td><td class="crd-td">TZA: -2,73, 35,37</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kanyenyaine</strong></td><td class="crd-td">KEN: -0,69, 36,89</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">2k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Sepuka</strong></td><td class="crd-td">TZA: -4,75, 34,53</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">1,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Sonjo</strong></td><td class="crd-td">TZA: -2,18, 35,73</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Magugu</strong></td><td class="crd-td">TZA: -3,99, 35,79</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Mgandu</strong></td><td class="crd-td">TZA: -5,95, 34,13</td><td class="crd-td">1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Naisiusiu</strong></td><td class="crd-td">TZA: -3, 35,34</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mpala</strong></td><td class="crd-td">COD: -6,73, 29,52</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Nyamuswa</strong></td><td class="crd-td">TZA: -1,9, 34,02</td><td class="crd-td">938</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ilongero</strong></td><td class="crd-td">TZA: -4,67, 34,87</td><td class="crd-td">902</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Uyui</strong></td><td class="crd-td">TZA: -4,92, 32,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">1,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Mwamajo</strong></td><td class="crd-td">TZA: -2,44, 33,69</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Bashanet</strong></td><td class="crd-td">TZA: -4,23, 35,42</td><td class="crd-td">856</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Loiyangalani</strong></td><td class="crd-td">TZA: -2,58, 34,8</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Endasak</strong></td><td class="crd-td">TZA: -4,42, 35,51</td><td class="crd-td">825</td><td class="crd-td">1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Zongwe</strong></td><td class="crd-td">COD: -7,3, 30,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">1,3k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Lalago</strong></td><td class="crd-td">TZA: -3,45, 33,95</td><td class="crd-td">808</td><td class="crd-td">1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>E Unoto Resort 1</strong></td><td class="crd-td">TZA: -3,3, 35,87</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Endamaga</strong></td><td class="crd-td">TZA: -3,35, 35,3</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Laetoli</strong></td><td class="crd-td">TZA: -3,22, 35,19</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Isenya</strong></td><td class="crd-td">KEN: -1,72, 36,87</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Matai</strong></td><td class="crd-td">TZA: -8,3, 31,52</td><td class="crd-td">726</td><td class="crd-td">893</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Tinde</strong></td><td class="crd-td">TZA: -3,88, 33,2</td><td class="crd-td">706</td><td class="crd-td">892</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Nyamholo</strong></td><td class="crd-td">TZA: -2,83, 33,34</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lukenya Hill</strong></td><td class="crd-td">KEN: -1,48, 37,06</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Fort Hall</strong></td><td class="crd-td">KEN: -0,77, 36,84</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 81 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed settlements in the Nyamwezi, Mirambo and Caravan Corridor sub-region (1500AD to 1885AD) (top 40 of 121 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Hehe, Rufiji and Southern Tanganyika

Table \ref{tab:sub-hehe} covers 136 southern Tanzanian and northern Malawi-shore sites led by Kilwa Kisiwani (12k), Kalenga (7,5k), Lindi (5,6k), Songea (5,2k), Mikindani (4,6k) and Mpwapwa (4,2k) [@WynneJones2018TheMultiple; @Pradines2016PortugueseFortresses].

<figure class="crd-table-figure" id="tab:sub-hehe">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kilwa Kisiwani</strong></td><td class="crd-td">TZA: -8,96, 39,5</td><td class="crd-td">11,3k</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k</td><td class="crd-td">1,1k</td><td class="crd-td">2,1k</td><td class="crd-td">12k (1502AD)</td></tr>
<tr><td class="crd-td"><strong>Kalenga</strong></td><td class="crd-td">TZA: -7,8, 35,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,5k (1884AD)</td></tr>
<tr><td class="crd-td"><strong>Lindi</strong></td><td class="crd-td">TZA: -9,99, 39,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">4,8k</td><td class="crd-td">5,2k</td><td class="crd-td">5,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Songea</strong></td><td class="crd-td">TZA: -10,67, 35,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">5,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Mikindani</strong></td><td class="crd-td">TZA: -10,28, 40,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,9k</td><td class="crd-td">4,3k</td><td class="crd-td">4,6k (1866AD)</td></tr>
<tr><td class="crd-td"><strong>Mpwapwa</strong></td><td class="crd-td">TZA: -6,36, 36,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Liuli</strong></td><td class="crd-td">TZA: -11,08, 34,63</td><td class="crd-td">1,9k</td><td class="crd-td">2,4k</td><td class="crd-td">2,7k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Mlambalasi Rock Shelter</strong></td><td class="crd-td">TZA: -7,58, 35,5</td><td class="crd-td">1,9k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1797AD)</td></tr>
<tr><td class="crd-td"><strong>Site Area</strong></td><td class="crd-td">TZA: -10,26, 40,13</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Mgao North</strong></td><td class="crd-td">TZA: -10,17, 39,99</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">2,5k</td><td class="crd-td">2,6k</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Sudi Bay</strong></td><td class="crd-td">TZA: -10,12, 39,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Sanje Majoma</strong></td><td class="crd-td">TZA: -9,08, 39,6</td><td class="crd-td">785</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,2k</td><td class="crd-td">2,1k</td><td class="crd-td">2,4k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Bolero</strong></td><td class="crd-td">MWI: -10,98, 33,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Miseti Hilltop</strong></td><td class="crd-td">TZA: -10,29, 40,15</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">2,2k</td><td class="crd-td">2,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Songo Mnara</strong></td><td class="crd-td">TZA: -9,04, 39,56</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Masoko</strong></td><td class="crd-td">TZA: -9,33, 33,76</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1677AD)</td></tr>
<tr><td class="crd-td"><strong>Mlowo</strong></td><td class="crd-td">TZA: -9,03, 32,98</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kilupula TA west</strong></td><td class="crd-td">MWI: -9,74, 33,87</td><td class="crd-td">-</td><td class="crd-td">882</td><td class="crd-td">1,3k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kyungu TA west</strong></td><td class="crd-td">MWI: -9,88, 33,86</td><td class="crd-td">-</td><td class="crd-td">885</td><td class="crd-td">1,2k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Deva-Deva Site</strong></td><td class="crd-td">TZA: -7,12, 37,62</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1725AD)</td></tr>
<tr><td class="crd-td"><strong>Olumbi</strong></td><td class="crd-td">MOZ: -11,02, 40,44</td><td class="crd-td">637</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Mwafulirwa</strong></td><td class="crd-td">MWI: -10,42, 34,21</td><td class="crd-td">-</td><td class="crd-td">803</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Karonga</strong></td><td class="crd-td">MWI: -9,98, 33,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Mbande Hill</strong></td><td class="crd-td">MWI: -9,94, 33,87</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kilwa Masoko</strong></td><td class="crd-td">TZA: -8,93, 39,51</td><td class="crd-td">972</td><td class="crd-td">1,3k</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">1,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Igurusi</strong></td><td class="crd-td">TZA: -8,83, 33,85</td><td class="crd-td">958</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">1,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Nyangao</strong></td><td class="crd-td">TZA: -10,32, 39,31</td><td class="crd-td">874</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Nanyamba</strong></td><td class="crd-td">TZA: -10,69, 39,8</td><td class="crd-td">843</td><td class="crd-td">1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Mingoyo</strong></td><td class="crd-td">TZA: -10,11, 39,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Mwamasapa</strong></td><td class="crd-td">MWI: -9,94, 33,83</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Palma</strong></td><td class="crd-td">MOZ: -10,78, 40,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Mtama</strong></td><td class="crd-td">TZA: -10,3, 39,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">1,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kiwira</strong></td><td class="crd-td">TZA: -9,17, 33,54</td><td class="crd-td">776</td><td class="crd-td">941</td><td class="crd-td">1,1k</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Ivuna</strong></td><td class="crd-td">TZA: -8,42, 32,54</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kibakwe</strong></td><td class="crd-td">TZA: -6,72, 36,37</td><td class="crd-td">684</td><td class="crd-td">876</td><td class="crd-td">998</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Mtwango</strong></td><td class="crd-td">TZA: -9,02, 34,8</td><td class="crd-td">719</td><td class="crd-td">889</td><td class="crd-td">1k</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Dumila</strong></td><td class="crd-td">TZA: -6,38, 37,33</td><td class="crd-td">692</td><td class="crd-td">844</td><td class="crd-td">961</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">1,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Mtimbira</strong></td><td class="crd-td">TZA: -8,79, 36,35</td><td class="crd-td">-</td><td class="crd-td">852</td><td class="crd-td">962</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Mwabulambo</strong></td><td class="crd-td">MWI: -9,79, 33,86</td><td class="crd-td">1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Tandahimba</strong></td><td class="crd-td">TZA: -10,77, 39,63</td><td class="crd-td">665</td><td class="crd-td">815</td><td class="crd-td">917</td><td class="crd-td">994</td><td class="crd-td">-</td><td class="crd-td">994 (1850AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 96 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed settlements in the Hehe, Rufiji and Southern Tanganyika sub-region (1500AD to 1885AD) (top 40 of 136 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Maravi Confederacy, Yao and Northern Mozambique

Table \ref{tab:sub-maravi} lists 120 settlements across Malawi, northern Mozambique and Ruvuma, headed by Nkhotakota (11,2k), Ilha de Moçambique (11,2k), Angoche (9,8k), Tete (7,4k), Mankhamba (7,2k) and Ibo (6,2k) [@Newitt1995Mozambique].

<figure class="crd-table-figure" id="tab:sub-maravi">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Moçambique</strong></td><td class="crd-td">MOZ: -15,03, 40,73</td><td class="crd-td">6,4k</td><td class="crd-td">5,2k</td><td class="crd-td">9,2k</td><td class="crd-td">11,2k</td><td class="crd-td">8,8k</td><td class="crd-td">11,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Nkhotakota</strong></td><td class="crd-td">MWI: -12,92, 34,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,9k</td><td class="crd-td">11,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Angoche</strong></td><td class="crd-td">MOZ: -16,21, 39,92</td><td class="crd-td">6,9k</td><td class="crd-td">4k</td><td class="crd-td">6,9k</td><td class="crd-td">7,4k</td><td class="crd-td">6,9k</td><td class="crd-td">9,8k (1845AD)</td></tr>
<tr><td class="crd-td"><strong>Tete</strong></td><td class="crd-td">MOZ: -16,14, 33,62</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">6,9k</td><td class="crd-td">5k</td><td class="crd-td">5,7k</td><td class="crd-td">7,4k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Mankhamba</strong></td><td class="crd-td">MWI: -14,3, 34,62</td><td class="crd-td">4,8k</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,2k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Ibo</strong></td><td class="crd-td">MOZ: -12,34, 40,59</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">4,6k</td><td class="crd-td">3,6k</td><td class="crd-td">5,1k</td><td class="crd-td">6,2k (1858AD)</td></tr>
<tr><td class="crd-td"><strong>Hora 1 Rock Shelter</strong></td><td class="crd-td">MWI: -11,65, 33,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">4,1k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Mbewe wa Mitengo</strong></td><td class="crd-td">MWI: -16,02, 34,78</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Sancul</strong></td><td class="crd-td">MOZ: -15,07, 40,67</td><td class="crd-td">948</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Minganjila</strong></td><td class="crd-td">MWI: -14,52, 35,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Macanga</strong></td><td class="crd-td">MOZ: -14,78, 33,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,4k</td><td class="crd-td">3k</td><td class="crd-td">3k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Chicaza Shelter</strong></td><td class="crd-td">MOZ: -12,89, 35,25</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1788AD)</td></tr>
<tr><td class="crd-td"><strong>Makanjila</strong></td><td class="crd-td">MWI: -13,71, 35,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Cabaceira Grande</strong></td><td class="crd-td">MOZ: -14,99, 40,74</td><td class="crd-td">827</td><td class="crd-td">1,6k</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Sangage</strong></td><td class="crd-td">MOZ: -16,01, 40,09</td><td class="crd-td">684</td><td class="crd-td">1,4k</td><td class="crd-td">2k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Boroma</strong></td><td class="crd-td">MOZ: -16,06, 33,45</td><td class="crd-td">433</td><td class="crd-td">865</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">2,4k</td><td class="crd-td">2,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Area FW</strong></td><td class="crd-td">MWI: -14,17, 34,98</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Blantyre</strong></td><td class="crd-td">MWI: -15,79, 35,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Mogincual</strong></td><td class="crd-td">MOZ: -15,57, 40,45</td><td class="crd-td">663</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kanyenda</strong></td><td class="crd-td">MWI: -12,63, 34,14</td><td class="crd-td">671</td><td class="crd-td">1,3k</td><td class="crd-td">1,9k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Longwe Hill</strong></td><td class="crd-td">MWI: -15,88, 35,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1510AD)</td></tr>
<tr><td class="crd-td"><strong>Nkhudzi</strong></td><td class="crd-td">MWI: -14,16, 35,01</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Pemba</strong></td><td class="crd-td">MOZ: -13,01, 40,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Area E</strong></td><td class="crd-td">MWI: -14,21, 34,51</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mossuril</strong></td><td class="crd-td">MOZ: -14,97, 40,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Quirimba</strong></td><td class="crd-td">MOZ: -12,43, 40,61</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">1,6k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">2k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Metarica</strong></td><td class="crd-td">MOZ: -14,23, 36,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Liupo</strong></td><td class="crd-td">MOZ: -15,59, 40,31</td><td class="crd-td">428</td><td class="crd-td">1k</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Mwase</strong></td><td class="crd-td">MWI: -13,03, 33,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">1,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Somana</strong></td><td class="crd-td">MOZ: -14,23, 40,66</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mucojo</strong></td><td class="crd-td">MOZ: -12,02, 40,48</td><td class="crd-td">670</td><td class="crd-td">1,1k</td><td class="crd-td">1,5k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">1,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Cobue</strong></td><td class="crd-td">MOZ: -12,14, 34,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">756</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Chizumulu</strong></td><td class="crd-td">MWI: -12,03, 34,62</td><td class="crd-td">374</td><td class="crd-td">770</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Furancungo</strong></td><td class="crd-td">MOZ: -14,9, 33,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,7k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Songo</strong></td><td class="crd-td">MOZ: -15,6, 32,76</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Muembe</strong></td><td class="crd-td">MOZ: -13,07, 35,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Quissanga</strong></td><td class="crd-td">MOZ: -12,43, 40,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Nangomba</strong></td><td class="crd-td">TZA: -10,93, 38,38</td><td class="crd-td">957</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">1,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Masasi</strong></td><td class="crd-td">TZA: -10,71, 38,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Ibo Island</strong></td><td class="crd-td">MOZ: -12,34, 40,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 80 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Individually assessed settlements in the Maravi Confederacy, Yao and Northern Mozambique sub-region (1500AD to 1885AD) (top 40 of 120 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Bemba, Lozi-Barotseland and Kazembe

Table \ref{tab:sub-bemba} details 102 Zambian and upper Zambezi settlements: Mwansabombwe (7,8k), Kasama (7,4k), Chipata (6,8k), Zumbo (3,1k) and Ingombe Ilede (1,24k) [@Newitt1995Mozambique].

<figure class="crd-table-figure" id="tab:sub-bemba">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mwansabombwe</strong></td><td class="crd-td">ZMB: -9,82, 28,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,2k</td><td class="crd-td">5,7k</td><td class="crd-td">7k</td><td class="crd-td">7,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Kasama</strong></td><td class="crd-td">ZMB: -10,22, 31,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">5,8k</td><td class="crd-td">7,2k</td><td class="crd-td">7,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Chipata</strong></td><td class="crd-td">ZMB: -13,63, 32,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">6,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Mpezeni</strong></td><td class="crd-td">ZMB: -13,77, 32,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Chitimukulu</strong></td><td class="crd-td">ZMB: -10,02, 31,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">-</td><td class="crd-td">4,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kasekete</strong></td><td class="crd-td">ZWE: -16,36, 30,74</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Ingombe Ilede</strong></td><td class="crd-td">ZMB: -16,18, 28,83</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mano</strong></td><td class="crd-td">ZMB: -14,12, 32,17</td><td class="crd-td">1,3k</td><td class="crd-td">2,8k</td><td class="crd-td">3k</td><td class="crd-td">2,2k</td><td class="crd-td">1,4k</td><td class="crd-td">3,3k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Zumbo</strong></td><td class="crd-td">MOZ: -15,62, 30,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">904</td><td class="crd-td">814</td><td class="crd-td">1,1k</td><td class="crd-td">3,1k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Msinja</strong></td><td class="crd-td">MWI: -14,12, 33,49</td><td class="crd-td">1,3k</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Chedzurgwe</strong></td><td class="crd-td">ZWE: -16,78, 29,62</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1758AD)</td></tr>
<tr><td class="crd-td"><strong>Lunde</strong></td><td class="crd-td">ZMB: -9,86, 28,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kipushi Copper</strong></td><td class="crd-td">ZMB: -11,78, 27,22</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1520AD)</td></tr>
<tr><td class="crd-td"><strong>Munenga</strong></td><td class="crd-td">ZMB: -16,03, 28,75</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Maravia</strong></td><td class="crd-td">MOZ: -14,92, 32,26</td><td class="crd-td">658</td><td class="crd-td">1,3k</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kasoko</strong></td><td class="crd-td">ZMB: -16,06, 28,83</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mandenga</strong></td><td class="crd-td">ZMB: -16,03, 28,86</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Zvipani</strong></td><td class="crd-td">ZWE: -16,92, 29,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Bagasa</strong></td><td class="crd-td">ZMB: -16,35, 28,8</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Lukwese</strong></td><td class="crd-td">ZMB: -10,2, 28,64</td><td class="crd-td">-</td><td class="crd-td">973</td><td class="crd-td">1,3k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Makasa</strong></td><td class="crd-td">ZMB: -9,68, 31,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Litupisha</strong></td><td class="crd-td">COD: -10,45, 27,5</td><td class="crd-td">1k</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td><td class="crd-td">1,5k</td><td class="crd-td">1,3k</td><td class="crd-td">1,8k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Kaphirintiwa</strong></td><td class="crd-td">MWI: -14,2, 33,34</td><td class="crd-td">719</td><td class="crd-td">1,3k</td><td class="crd-td">1,6k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">1,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kanyembo</strong></td><td class="crd-td">ZMB: -9,66, 28,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">1,8k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kamnama</strong></td><td class="crd-td">ZMB: -13,29, 32,91</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Mapulu</strong></td><td class="crd-td">COD: -8,75, 27,9</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Nkula</strong></td><td class="crd-td">ZMB: -10,48, 32,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kafubu</strong></td><td class="crd-td">COD: -11,72, 27,5</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1778AD)</td></tr>
<tr><td class="crd-td"><strong>Twin Rivers Kopje</strong></td><td class="crd-td">ZMB: -15,56, 28,13</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Chikwanda</strong></td><td class="crd-td">ZMB: -11,79, 31,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Shimwalule</strong></td><td class="crd-td">ZMB: -10,23, 31,78</td><td class="crd-td">-</td><td class="crd-td">697</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kilomba</strong></td><td class="crd-td">COD: -9,42, 28,37</td><td class="crd-td">1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Mwambe</strong></td><td class="crd-td">COD: -9,89, 27,53</td><td class="crd-td">993</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">1,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Mwambacimo</strong></td><td class="crd-td">ZMB: -13,45, 28,74</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Thandwe</strong></td><td class="crd-td">ZMB: -13,82, 32,47</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Makwe</strong></td><td class="crd-td">ZMB: -14,4, 31,94</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kalemba Rock Shelter</strong></td><td class="crd-td">ZMB: -14,12, 32,5</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Gwisho</strong></td><td class="crd-td">ZMB: -15,99, 27,25</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Inhacurungo</strong></td><td class="crd-td">MOZ: -15,63, 30,63</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Chifunde</strong></td><td class="crd-td">MOZ: -14,62, 32,82</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">919</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">1,3k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 62 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Individually assessed settlements in the Bemba, Lozi-Barotseland and Kazembe sub-region (1500AD to 1885AD) (top 40 of 102 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

## Portuguese Zambezi Prazos, Sofala and Gaza

Table \ref{tab:sub-mozambique} compiles 214 lower Zambezi, Sofala, Zimbabwe plateau and Gaza sites led by Vila de Mandlakazi (14,5k), Massangano-Zambezi (11,24k), Sofala (10k), Quelimane (9,2k) and Inhambane (7,5k) [@Pugliesi1977ResenhaLivro; @Newitt1995Mozambique].

<figure class="crd-table-figure" id="tab:sub-mozambique">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Vila de Mandlakazi</strong></td><td class="crd-td">MOZ: -24,71, 33,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,7k</td><td class="crd-td">13,4k</td><td class="crd-td">14,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Massangano-Zambezi</strong></td><td class="crd-td">MOZ: -16,65, 33,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,5k</td><td class="crd-td">11,2k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Sofala</strong></td><td class="crd-td">MOZ: -20,15, 34,72</td><td class="crd-td">8,2k</td><td class="crd-td">1,9k</td><td class="crd-td">1,5k</td><td class="crd-td">980</td><td class="crd-td">-</td><td class="crd-td">10k (1505AD)</td></tr>
<tr><td class="crd-td"><strong>Quelimane</strong></td><td class="crd-td">MOZ: -17,83, 36,92</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">5,7k</td><td class="crd-td">6,4k</td><td class="crd-td">8k</td><td class="crd-td">9,2k (1840AD)</td></tr>
<tr><td class="crd-td"><strong>Inhambane</strong></td><td class="crd-td">MOZ: -23,86, 35,38</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">5,4k</td><td class="crd-td">6,8k</td><td class="crd-td">5,7k</td><td class="crd-td">7,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Dwarsloop</strong></td><td class="crd-td">ZAF: -24,79, 31,05</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">5,6k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Massangano</strong></td><td class="crd-td">MOZ: -16,4, 33,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k (1867AD)</td></tr>
<tr><td class="crd-td"><strong>Ziwa</strong></td><td class="crd-td">ZWE: -18,18, 32,73</td><td class="crd-td">3,7k</td><td class="crd-td">4,5k</td><td class="crd-td">3,7k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">4,9k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Lobamba</strong></td><td class="crd-td">SWZ: -26,45, 31,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">4,8k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Zvipadze</strong></td><td class="crd-td">ZWE: -16,95, 31,12</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Hhohho</strong></td><td class="crd-td">SWZ: -25,88, 31,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">4,1k (1865AD)</td></tr>
<tr><td class="crd-td"><strong>Sena</strong></td><td class="crd-td">MOZ: -17,45, 35,03</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">3,6k</td><td class="crd-td">1,7k</td><td class="crd-td">3k</td><td class="crd-td">4k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Bingaguru</strong></td><td class="crd-td">ZWE: -18,72, 32,69</td><td class="crd-td">1,1k</td><td class="crd-td">2,6k</td><td class="crd-td">3,2k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">3,5k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Nhaucati</strong></td><td class="crd-td">MOZ: -22,04, 35,31</td><td class="crd-td">2,3k</td><td class="crd-td">3k</td><td class="crd-td">3,3k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">3,4k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Maputo</strong></td><td class="crd-td">MOZ: -25,83, 32,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">781</td><td class="crd-td">1,3k</td><td class="crd-td">2,9k</td><td class="crd-td">3,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Mbekelweni</strong></td><td class="crd-td">SWZ: -26,43, 31,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Shiselweni</strong></td><td class="crd-td">SWZ: -27,05, 31,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1815AD)</td></tr>
<tr><td class="crd-td"><strong>Great Zimbabwe</strong></td><td class="crd-td">ZWE: -20,27, 30,93</td><td class="crd-td">2,8k</td><td class="crd-td">3,2k</td><td class="crd-td">3k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Chupanga</strong></td><td class="crd-td">MOZ: -18,03, 35,6</td><td class="crd-td">833</td><td class="crd-td">1,7k</td><td class="crd-td">2,6k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Lake Nhauhache</strong></td><td class="crd-td">MOZ: -21,98, 35,29</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1814AD)</td></tr>
<tr><td class="crd-td"><strong>Manyikeni</strong></td><td class="crd-td">MOZ: -22,19, 34,85</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Divinhe</strong></td><td class="crd-td">MOZ: -20,66, 34,87</td><td class="crd-td">1,2k</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">2,9k</td><td class="crd-td">3,1k</td><td class="crd-td">3,1k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Chaimite Sede</strong></td><td class="crd-td">MOZ: -24,65, 33,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1865AD)</td></tr>
<tr><td class="crd-td"><strong>Border Cave</strong></td><td class="crd-td">ZAF: -27,02, 31,99</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">3k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Chisvingo</strong></td><td class="crd-td">ZWE: -17,17, 31,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Cidade de Manica</strong></td><td class="crd-td">MOZ: -18,94, 32,88</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">2,9k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Chibuene</strong></td><td class="crd-td">MOZ: -22,05, 35,32</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Catembe</strong></td><td class="crd-td">MOZ: -26, 32,56</td><td class="crd-td">804</td><td class="crd-td">1,7k</td><td class="crd-td">2,2k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kotha’s Field</strong></td><td class="crd-td">SWZ: -26,68, 31,49</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td><td class="crd-td">2,7k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1869AD)</td></tr>
<tr><td class="crd-td"><strong>Casteel</strong></td><td class="crd-td">ZAF: -24,73, 31,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Majiri Ruins</strong></td><td class="crd-td">ZWE: -20,38, 31,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1530AD)</td></tr>
<tr><td class="crd-td"><strong>Thulamela</strong></td><td class="crd-td">ZAF: -22,43, 31,2</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1596AD)</td></tr>
<tr><td class="crd-td"><strong>Dambarare</strong></td><td class="crd-td">ZWE: -17,45, 30,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1685AD)</td></tr>
<tr><td class="crd-td"><strong>Chidima</strong></td><td class="crd-td">ZWE: -16,27, 31,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">2,2k</td><td class="crd-td">1,7k</td><td class="crd-td">2,7k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Khulubvi</strong></td><td class="crd-td">MWI: -16,95, 35,24</td><td class="crd-td">1,2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,7k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1800AD)</td></tr>
<tr><td class="crd-td"><strong>Tsindi</strong></td><td class="crd-td">ZWE: -18,1, 31,71</td><td class="crd-td">890</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1598AD)</td></tr>
<tr><td class="crd-td"><strong>Mafutseni</strong></td><td class="crd-td">SWZ: -26,52, 31,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">2,7k</td><td class="crd-td">2,7k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Masapa</strong></td><td class="crd-td">ZWE: -16,65, 31,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1630AD)</td></tr>
<tr><td class="crd-td"><strong>Sangano</strong></td><td class="crd-td">ZWE: -18,42, 32,16</td><td class="crd-td">666</td><td class="crd-td">1,6k</td><td class="crd-td">2,2k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">2,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Muchuchu</strong></td><td class="crd-td">ZWE: -19,52, 31,78</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>... plus 174 additional assessed settlements (complete ledger in JSON)</strong></td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Individually assessed settlements in the Portuguese Zambezi Prazos, Sofala and Gaza sub-region (1500AD to 1885AD) (top 40 of 214 entries; full dataset archived in chapter JSON).</figcaption>
</figure>

# Limitations

Three constraints govern this gazetteer. First, 13 of the 1.783 entries carry single-date observations, so interpolated benchmark columns outside their observed year show a hyphen. Second, recovery favours coastal stone towns, Portuguese *feiras* and nineteenth-century caravan depots over dispersed rural villages [@HortonMiddleton2000Swahili; @Alders2023OpenAccess]. Third, summed gazetteer figures track nucleated settlements rather than full regional populations presented in the companion literature review.

# Conclusion

Together, the 1.783 settlements trace the shift from sixteenth-century Swahili ports and Great Lakes earthwork complexes to nineteenth-century Omani plantation towns, caravan entrepôts and Zambezi *prazo* strongholds across 13 countries between 1500AD and 1885AD.

# Appendix

## Sub-Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} sums site counts and combined interpolated settlement populations across all nine sub-regions from 1500AD to 1880AD.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion (Sites)</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1770AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Omani-Zanzibar Sultanate and Swahili Coast (333)</strong></td><td class="crd-td">194,6k</td><td class="crd-td">202,7k</td><td class="crd-td">215,7k</td><td class="crd-td">255,3k</td><td class="crd-td">356,6k</td><td class="crd-td">182,4k</td></tr>
<tr><td class="crd-td"><strong>Maasai Steppe, Kenya Highlands and Rift (252)</strong></td><td class="crd-td">157,7k</td><td class="crd-td">135,7k</td><td class="crd-td">138k</td><td class="crd-td">138,5k</td><td class="crd-td">134,7k</td><td class="crd-td">50,9k</td></tr>
<tr><td class="crd-td"><strong>Buganda, Bunyoro-Kitara and Ankole (232)</strong></td><td class="crd-td">125,4k</td><td class="crd-td">130,8k</td><td class="crd-td">162,2k</td><td class="crd-td">175k</td><td class="crd-td">220,3k</td><td class="crd-td">90,3k</td></tr>
<tr><td class="crd-td"><strong>Kingdoms of Rwanda and Burundi (273)</strong></td><td class="crd-td">154k</td><td class="crd-td">177,8k</td><td class="crd-td">219,5k</td><td class="crd-td">254,5k</td><td class="crd-td">285,1k</td><td class="crd-td">64,8k</td></tr>
<tr><td class="crd-td"><strong>Nyamwezi, Mirambo and Caravan Corridor (121)</strong></td><td class="crd-td">75,2k</td><td class="crd-td">55k</td><td class="crd-td">49,4k</td><td class="crd-td">52,1k</td><td class="crd-td">60,8k</td><td class="crd-td">35,6k</td></tr>
<tr><td class="crd-td"><strong>Hehe, Rufiji and Southern Tanganyika (136)</strong></td><td class="crd-td">63,8k</td><td class="crd-td">54,1k</td><td class="crd-td">58,9k</td><td class="crd-td">69,3k</td><td class="crd-td">81,1k</td><td class="crd-td">29,4k</td></tr>
<tr><td class="crd-td"><strong>Maravi Confederacy, Yao and N. Mozambique (120)</strong></td><td class="crd-td">43,6k</td><td class="crd-td">39k</td><td class="crd-td">60,6k</td><td class="crd-td">77,4k</td><td class="crd-td">100,6k</td><td class="crd-td">69,3k</td></tr>
<tr><td class="crd-td"><strong>Bemba, Lozi-Barotseland and Kazembe (102)</strong></td><td class="crd-td">59,6k</td><td class="crd-td">28,6k</td><td class="crd-td">49,5k</td><td class="crd-td">56,1k</td><td class="crd-td">69,4k</td><td class="crd-td">28,4k</td></tr>
<tr><td class="crd-td"><strong>Portuguese Zambezi Prazos, Sofala and Gaza (214)</strong></td><td class="crd-td">140,1k</td><td class="crd-td">103k</td><td class="crd-td">117,6k</td><td class="crd-td">137,2k</td><td class="crd-td">179,4k</td><td class="crd-td">95,8k</td></tr>
<tr><td class="crd-td"><strong>All Subregions (1.783)</strong></td><td class="crd-td">1,01M</td><td class="crd-td">926,8k</td><td class="crd-td">1,07M</td><td class="crd-td">1,22M</td><td class="crd-td">1,49M</td><td class="crd-td">646,9k</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 10.</span> Individually assessed site counts and combined interpolated populations across nine sub-regions from 1500AD to 1880AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Linear interpolation is bounded strictly between each settlement's earliest and latest observed dates; pre-foundation and post-abandonment benchmarks are marked with a hyphen (-).
