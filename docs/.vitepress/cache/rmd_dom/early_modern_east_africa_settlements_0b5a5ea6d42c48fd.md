---
title: "Early Modern East Africa and Mozambique"
subtitle: "Settlement Gazetteer: 97 Individually Assessed Sites (1500AD-1885AD)"
date: "23 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: early_modern_east_africa_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 97 individually assessed settlements across 13 countries spanning nine historical sub-regions from 1500AD to 1885AD."
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

This gazetteer compiles coordinates and multi-period population series for 97 individually assessed settlements across 13 countries in East Africa and Mozambique between 1500AD and 1885AD. Screened from 123 candidate ports, royal capitals, *prazo* strongholds and caravan entrepôts (26 excluded as duplicate aliases), the retained ledger spans nine historical sub-regions from the Banadir and Swahili coasts through the Great Lakes and Unyamwezi to the Zambezi basin and Gaza. Active interpolated sites rise from 4 around 1500AD to 28 at 1700AD, 47 at 1800AD, 52 at 1850AD and 50 at 1880AD, documenting urban trajectories from Bigo bya Mugenyi (100k) and Muqdisho (21,2k) to Zanzibar (65k), Kibuga (38,5k), Mombasa (30k) and Tabora (20k).



# Background

Compiling an early modern settlement ledger across East Africa and Mozambique requires integrating coastal European, Arabic and Swahili sources with inland archaeological surveys and nineteenth-century travel journals [@HortonMiddleton2000Swahili; @Newitt1995Mozambique; @Burton1904FirstFootsteps]. While stone-built coral ports from Somalia to Mozambique Island and Portuguese fortresses at Sofala, Sena and Tete generated dated garrison and customs counts from the sixteenth century onward [@Pradines2016PortugueseFortresses; @Berg1900TheSwahili], earthen capitals across Buganda, Rwanda, Burundi, Unyamwezi and the Zambezi plateau relied on mapped enclosure areas and traveller headcounts recorded predominantly between 1798AD and 1885AD [@Kafuuma2019HeritageSignificance; @Bryndina2023TheMost].

# Methodology

## Candidate Screening and Sub-Regional Partition

Candidate sites were screened across four waves from archival censuses, archaeological site inventories and historical monographs [@NMK2021KenyaSites; @Alders2023OpenAccess; @WynneJones2018SwahiliWorld]. From 123 initial entries inside the 3.400.448 km² regional boundary clipped to geoBoundaries outlines [@Runfola2020GeoBoundaries], 26 duplicate orthographies and merged aliases were excluded, leaving 97 individually assessed settlements across 322 observations. Ninety-one entries fall strictly inside the 5-arcminute regional mask pixels and 6 border-margin sites (Muqdisho, Afgoye, Baar Dheere, Chencha, Great Zimbabwe and Thulamela) are assigned to their adjoining cultural sub-regions so every entry is catalogued.

## Site-Specific Population Estimation

Every entry records city-proper populations (97 city-proper, 0 metropolitan agglomerations) anchored to stone-core hectares, earthwork perimeters, compound counts or contemporary enumerations [@WynneJones2018TheMultiple; @Lyne1905ZanzibarContemporary]. Tables 1 to 9 report linearly interpolated headcounts at five benchmarks (1500AD, 1700AD, 1800AD, 1850AD, 1880AD) alongside each settlement's peak population and date, marking spans outside observed occupation with a hyphen (-).

# Testing and Validation

Across all 97 settlements, ordinary least-squares rank-size regression yields $q = 0,73$ ($R^2 = 0,99$) across the upper 48 sites and $q = 0,98$ ($R^2 = 0,88$) across the full sample (Figure \ref{fig:settlements-rank}). Chronological checks confirm clean continuity across Portuguese, Omani-Zanzibari and early colonial records without duplicate place-name aliases [@Baumanova2022WhatsName; @Parliament1898CorrespondenceRespecting].

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-early-modern-east-africa-settlements/fig_03_rank_size.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Zipf rank-size curve across 97 individually assessed settlements (top-48 OLS q = 0,73, R² = 0,99) and sub-regional densities in 1880AD.</figcaption>
</figure>

# Results

## Omani-Zanzibar Sultanate and Swahili Coast

Table \ref{tab:sub-swahili} documents 29 settlements along the Swahili littoral and Usambara-Kilimanjaro hinterland, led by Zanzibar (65k), Mombasa (30k), Bagamoyo (18,5k), Pate (16,8k), Lamu (15,2k), Kilwa Kivinje (15k) and Siyu (11,2k) [@Allen1981SwahiliCulture; @Kusimba1999SwahiliStates].

<figure class="crd-table-figure" id="tab:sub-swahili">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Zanzibar</strong></td><td class="crd-td">TZA: -6,11, 39,22</td><td class="crd-td">-</td><td class="crd-td">7,1k</td><td class="crd-td">13,5k</td><td class="crd-td">41,6k</td><td class="crd-td">60,3k</td><td class="crd-td">65k (1870AD)</td></tr>
<tr><td class="crd-td"><strong>Mombasa</strong></td><td class="crd-td">KEN: -3,99, 39,71</td><td class="crd-td">-</td><td class="crd-td">9,4k</td><td class="crd-td">9,9k</td><td class="crd-td">30k</td><td class="crd-td">-</td><td class="crd-td">30k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Bagamoyo</strong></td><td class="crd-td">TZA: -6,45, 38,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">7,8k</td><td class="crd-td">16,4k</td><td class="crd-td">18,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Pate</strong></td><td class="crd-td">KEN: -2,14, 41,02</td><td class="crd-td">-</td><td class="crd-td">16,8k</td><td class="crd-td">10,5k</td><td class="crd-td">4k</td><td class="crd-td">2,3k</td><td class="crd-td">16,8k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Lamu</strong></td><td class="crd-td">KEN: -2,27, 40,9</td><td class="crd-td">-</td><td class="crd-td">9,8k</td><td class="crd-td">14,1k</td><td class="crd-td">14,3k</td><td class="crd-td">-</td><td class="crd-td">15,2k (1813AD)</td></tr>
<tr><td class="crd-td"><strong>Kilwa Kivinje</strong></td><td class="crd-td">TZA: -8,74, 39,41</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,5k</td><td class="crd-td">12,6k</td><td class="crd-td">15k (1865AD)</td></tr>
<tr><td class="crd-td"><strong>Siyu</strong></td><td class="crd-td">KEN: -2,09, 41,06</td><td class="crd-td">-</td><td class="crd-td">7,9k</td><td class="crd-td">10,4k</td><td class="crd-td">10,3k</td><td class="crd-td">-</td><td class="crd-td">11,2k (1845AD)</td></tr>
<tr><td class="crd-td"><strong>Pangani Magharibi</strong></td><td class="crd-td">TZA: -5,42, 38,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">6k</td><td class="crd-td">-</td><td class="crd-td">9,5k (1878AD)</td></tr>
<tr><td class="crd-td"><strong>Moshi</strong></td><td class="crd-td">TZA: -3,32, 37,37</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">6,2k</td><td class="crd-td">6,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Chake Chake</strong></td><td class="crd-td">TZA: -5,23, 39,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">5k</td><td class="crd-td">6k</td><td class="crd-td">6,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Tanga</strong></td><td class="crd-td">TZA: -5,07, 39,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">4,5k</td><td class="crd-td">5,6k</td><td class="crd-td">5,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Malindi</strong></td><td class="crd-td">KEN: -3,2, 40,1</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">1,6k</td><td class="crd-td">2,3k</td><td class="crd-td">4,3k</td><td class="crd-td">5,4k (1580AD)</td></tr>
<tr><td class="crd-td"><strong>Saadani</strong></td><td class="crd-td">TZA: -6,05, 38,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">3,5k</td><td class="crd-td">5,1k</td><td class="crd-td">5,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Takaungu</strong></td><td class="crd-td">KEN: -3,68, 39,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">5,2k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Faza</strong></td><td class="crd-td">KEN: -2,06, 41,11</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1700AD)</td></tr>
<tr><td class="crd-td"><strong>Dar es Salaam</strong></td><td class="crd-td">TZA: -6,81, 39,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Vuga</strong></td><td class="crd-td">TZA: -4,87, 38,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">4,3k</td><td class="crd-td">2,7k</td><td class="crd-td">4,8k (1862AD)</td></tr>
<tr><td class="crd-td"><strong>Vanga</strong></td><td class="crd-td">KEN: -4,66, 39,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">4,1k</td><td class="crd-td">3,6k</td><td class="crd-td">4,1k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Taveta</strong></td><td class="crd-td">KEN: -3,39, 37,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">3,8k</td><td class="crd-td">4k (1883AD)</td></tr>
<tr><td class="crd-td"><strong>Rabai</strong></td><td class="crd-td">KEN: -3,93, 39,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,8k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Wete</strong></td><td class="crd-td">TZA: -5,06, 39,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">3,6k</td><td class="crd-td">3,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Ungwana</strong></td><td class="crd-td">KEN: -2,52, 40,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1505AD)</td></tr>
<tr><td class="crd-td"><strong>Kisimani Mafia</strong></td><td class="crd-td">TZA: -7,95, 39,59</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Mtwapa</strong></td><td class="crd-td">KEN: -3,94, 39,75</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Tumbe</strong></td><td class="crd-td">TZA: -4,95, 39,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Gedi</strong></td><td class="crd-td">KEN: -3,31, 40,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Manda</strong></td><td class="crd-td">KEN: -2,23, 40,97</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kaole</strong></td><td class="crd-td">TZA: -6,47, 38,94</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">840 (1600AD)</td></tr>
<tr><td class="crd-td"><strong>Pemba</strong></td><td class="crd-td">TZA: -5,03, 39,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">600 (1599AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in the Omani-Zanzibar Sultanate and Swahili Coast sub-region (1500AD to 1885AD).</figcaption>
</figure>

## Maasai Steppe, Kenya Highlands and Banadir Fringe

Table \ref{tab:sub-kenya-banadir} lists 12 settlements across the Banadir coast, southern Ethiopian highlands and western Kenya, led by Muqdisho (21,2k), Afgoye (7,42k), Barawa E Al Bambar (6,42k), Mumias (5,4k) and Marka (5,12k) [@Kassim1995IslamAnd_2; @NMK2021KenyaSites].

<figure class="crd-table-figure" id="tab:sub-kenya-banadir">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Muqdisho</strong></td><td class="crd-td">SOM: 2,06, 45,31</td><td class="crd-td">-</td><td class="crd-td">10,8k</td><td class="crd-td">7,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">21,2k (1516AD)</td></tr>
<tr><td class="crd-td"><strong>Afgoye</strong></td><td class="crd-td">SOM: 2,14, 45,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">6,9k</td><td class="crd-td">7,4k</td><td class="crd-td">7,4k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Barawa E Al Bambar</strong></td><td class="crd-td">SOM: 1,11, 44,03</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k (1506AD)</td></tr>
<tr><td class="crd-td"><strong>Mumias</strong></td><td class="crd-td">KEN: 0,33, 34,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">5,4k (1883AD)</td></tr>
<tr><td class="crd-td"><strong>Marka</strong></td><td class="crd-td">SOM: 1,71, 44,76</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">4,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Baar Dheere</strong></td><td class="crd-td">SOM: 2,34, 42,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">3,9k (1835AD)</td></tr>
<tr><td class="crd-td"><strong>Qoryoley</strong></td><td class="crd-td">SOM: 1,79, 44,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">3,6k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Kismaayo</strong></td><td class="crd-td">SOM: -0,35, 42,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1872AD)</td></tr>
<tr><td class="crd-td"><strong>Chencha</strong></td><td class="crd-td">ETH: 6,25, 37,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Mega</strong></td><td class="crd-td">ETH: 4,05, 38,32</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">723</td><td class="crd-td">896</td><td class="crd-td">925 (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Gondershe</strong></td><td class="crd-td">SOM: 1,87, 45,03</td><td class="crd-td">-</td><td class="crd-td">844</td><td class="crd-td">721</td><td class="crd-td">660</td><td class="crd-td">-</td><td class="crd-td">905 (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Yabelo</strong></td><td class="crd-td">ETH: 4,89, 38,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">697</td><td class="crd-td">820</td><td class="crd-td">840 (1885AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in the Maasai Steppe, Kenya Highlands and Banadir sub-region (1500AD to 1885AD).</figcaption>
</figure>

## Buganda, Bunyoro-Kitara and Ankole

Table \ref{tab:sub-buganda} compiles 7 interlacustrine sites across Uganda, from Bigo bya Mugenyi (100k), Kibuga (38,5k), Hoima (9,6k) and Masindi (6,8k) to Mbarara (5,1k), Munsa (2,15k) and Kibiro (1,75k) [@Kafuuma2019HeritageSignificance; @Lira2024Plot24Urban].

<figure class="crd-table-figure" id="tab:sub-buganda">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bigo bya Mugenyi</strong></td><td class="crd-td">UGA: 0,14, 31,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">100k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Kibuga</strong></td><td class="crd-td">UGA: 0,35, 32,63</td><td class="crd-td">-</td><td class="crd-td">9,5k</td><td class="crd-td">21,2k</td><td class="crd-td">28k</td><td class="crd-td">36,2k</td><td class="crd-td">38,5k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Hoima</strong></td><td class="crd-td">UGA: 1,48, 31,34</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k</td><td class="crd-td">7,2k</td><td class="crd-td">9,1k</td><td class="crd-td">9,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Masindi</strong></td><td class="crd-td">UGA: 1,68, 31,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">6,8k (1872AD)</td></tr>
<tr><td class="crd-td"><strong>Mbarara</strong></td><td class="crd-td">UGA: -0,58, 30,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">4,8k</td><td class="crd-td">4,9k</td><td class="crd-td">5,1k (1860AD)</td></tr>
<tr><td class="crd-td"><strong>Munsa</strong></td><td class="crd-td">UGA: 0,83, 31,3</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Kibiro</strong></td><td class="crd-td">UGA: 1,68, 31,25</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td><td class="crd-td">1,5k</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k (1800AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed settlements in the Buganda, Bunyoro-Kitara and Ankole sub-region (1500AD to 1885AD).</figcaption>
</figure>

## Kingdoms of Rwanda and Burundi

Table \ref{tab:sub-rwanda} presents 6 sites across Rwanda, Burundi, Karagwe and eastern Lake Tanganyika, anchored by Ujiji (14k), Busasama (8,4k), Bweranyange (6,5k), Muramvya (6,2k), Gitega (4,2k) and Rumonge (2,95k) [@Brandl1975EarlyChristianity; @Bourguignat1879DescriptionDiverses].

<figure class="crd-table-figure" id="tab:sub-rwanda">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Ujiji</strong></td><td class="crd-td">TZA: -4,92, 29,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">14k (1879AD)</td></tr>
<tr><td class="crd-td"><strong>Busasama</strong></td><td class="crd-td">RWA: -2,35, 29,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">6,8k</td><td class="crd-td">8,2k</td><td class="crd-td">8,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Bweranyange</strong></td><td class="crd-td">TZA: -1,7, 30,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">6,1k</td><td class="crd-td">-</td><td class="crd-td">6,5k (1861AD)</td></tr>
<tr><td class="crd-td"><strong>Muramvya</strong></td><td class="crd-td">BDI: -3,27, 29,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k</td><td class="crd-td">5,4k</td><td class="crd-td">6,1k</td><td class="crd-td">6,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Gitega</strong></td><td class="crd-td">BDI: -3,4, 29,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">3,6k</td><td class="crd-td">4,1k</td><td class="crd-td">4,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Rumonge</strong></td><td class="crd-td">BDI: -3,97, 29,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">3k (1880AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements in the Kingdoms of Rwanda and Burundi sub-region (1500AD to 1885AD).</figcaption>
</figure>

## Nyamwezi, Mirambo and Caravan Corridor

Table \ref{tab:sub-nyamwezi} records 4 central and northern Tanzanian settlements: Tabora (20k), Urambo (16,2k), Engaruka (7,8k) and Karema (950) [@Bryndina2023TheMost; @Burton1904FirstFootsteps].

<figure class="crd-table-figure" id="tab:sub-nyamwezi">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Tabora</strong></td><td class="crd-td">TZA: -5,03, 32,81</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,6k</td><td class="crd-td">19k</td><td class="crd-td">20k (1871AD)</td></tr>
<tr><td class="crd-td"><strong>Urambo</strong></td><td class="crd-td">TZA: -5,09, 32,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">15,1k</td><td class="crd-td">16,2k (1884AD)</td></tr>
<tr><td class="crd-td"><strong>Engaruka</strong></td><td class="crd-td">TZA: -2,99, 35,97</td><td class="crd-td">-</td><td class="crd-td">4,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,8k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Karema</strong></td><td class="crd-td">TZA: -6,82, 30,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">950 (1882AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed settlements in the Nyamwezi, Mirambo and Caravan Corridor sub-region (1500AD to 1885AD).</figcaption>
</figure>

## Hehe, Rufiji and Southern Tanganyika

Table \ref{tab:sub-hehe} covers 8 southern Tanzanian and northern Malawi-shore sites led by Kilwa Kisiwani (12k), Kalenga (7,5k), Lindi (5,6k), Songea (5,2k), Mikindani (4,6k) and Mpwapwa (4,2k) [@WynneJones2018TheMultiple; @Pradines2016PortugueseFortresses].

<figure class="crd-table-figure" id="tab:sub-hehe">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kilwa Kisiwani</strong></td><td class="crd-td">TZA: -8,96, 39,5</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">2,1k</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">12k (1502AD)</td></tr>
<tr><td class="crd-td"><strong>Kalenga</strong></td><td class="crd-td">TZA: -7,8, 35,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,5k (1884AD)</td></tr>
<tr><td class="crd-td"><strong>Lindi</strong></td><td class="crd-td">TZA: -9,99, 39,7</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">4,8k</td><td class="crd-td">5,5k</td><td class="crd-td">5,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Songea</strong></td><td class="crd-td">TZA: -10,67, 35,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k</td><td class="crd-td">5,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Mikindani</strong></td><td class="crd-td">TZA: -10,28, 40,12</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">4,2k</td><td class="crd-td">4,3k</td><td class="crd-td">4,6k (1866AD)</td></tr>
<tr><td class="crd-td"><strong>Mpwapwa</strong></td><td class="crd-td">TZA: -6,36, 36,49</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k</td><td class="crd-td">4,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Karonga</strong></td><td class="crd-td">MWI: -9,98, 33,92</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Songo Mnara</strong></td><td class="crd-td">TZA: -9,04, 39,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1530AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed settlements in the Hehe, Rufiji and Southern Tanganyika sub-region (1500AD to 1885AD).</figcaption>
</figure>

## Maravi Confederacy, Yao and Northern Mozambique

Table \ref{tab:sub-maravi} lists 10 settlements across Malawi, northern Mozambique and Ruvuma, headed by Nkhotakota (11,2k), Ilha de Moçambique (11,2k), Angoche (9,8k), Tete (7,4k), Mankhamba (7,2k) and Ibo (6,2k) [@Newitt1995Mozambique].

<figure class="crd-table-figure" id="tab:sub-maravi">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Moçambique</strong></td><td class="crd-td">MOZ: -15,03, 40,73</td><td class="crd-td">-</td><td class="crd-td">5,2k</td><td class="crd-td">9,2k</td><td class="crd-td">11,2k</td><td class="crd-td">8,8k</td><td class="crd-td">11,2k (1850AD)</td></tr>
<tr><td class="crd-td"><strong>Nkhotakota</strong></td><td class="crd-td">MWI: -12,92, 34,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,9k</td><td class="crd-td">11,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Angoche</strong></td><td class="crd-td">MOZ: -16,21, 39,92</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">6,9k</td><td class="crd-td">8,3k</td><td class="crd-td">6,9k</td><td class="crd-td">9,8k (1845AD)</td></tr>
<tr><td class="crd-td"><strong>Tete</strong></td><td class="crd-td">MOZ: -16,14, 33,62</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">6,9k</td><td class="crd-td">5k</td><td class="crd-td">5,6k</td><td class="crd-td">7,4k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Mankhamba</strong></td><td class="crd-td">MWI: -14,3, 34,62</td><td class="crd-td">-</td><td class="crd-td">5,6k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,2k (1650AD)</td></tr>
<tr><td class="crd-td"><strong>Ibo</strong></td><td class="crd-td">MOZ: -12,34, 40,59</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">4,6k</td><td class="crd-td">3,6k</td><td class="crd-td">5,1k</td><td class="crd-td">6,2k (1858AD)</td></tr>
<tr><td class="crd-td"><strong>Blantyre</strong></td><td class="crd-td">MWI: -15,79, 35,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">2,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Pemba</strong></td><td class="crd-td">MOZ: -13,01, 40,55</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Masasi</strong></td><td class="crd-td">TZA: -10,71, 38,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,4k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Zomba</strong></td><td class="crd-td">MWI: -15,34, 35,4</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1885AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Individually assessed settlements in the Maravi Confederacy, Yao and Northern Mozambique sub-region (1500AD to 1885AD).</figcaption>
</figure>

## Bemba, Lozi-Barotseland and Kazembe

Table \ref{tab:sub-bemba} details 5 Zambian and upper Zambezi settlements: Mwansabombwe (7,8k), Kasama (7,4k), Chipata (6,8k), Zumbo (3,1k) and Ingombe Ilede (1,24k) [@Newitt1995Mozambique].

<figure class="crd-table-figure" id="tab:sub-bemba">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mwansabombwe</strong></td><td class="crd-td">ZMB: -9,82, 28,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,2k</td><td class="crd-td">5,7k</td><td class="crd-td">7k</td><td class="crd-td">7,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Kasama</strong></td><td class="crd-td">ZMB: -10,22, 31,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">5,8k</td><td class="crd-td">7,2k</td><td class="crd-td">7,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Chipata</strong></td><td class="crd-td">ZMB: -13,63, 32,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">6,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Zumbo</strong></td><td class="crd-td">MOZ: -15,62, 30,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Ingombe Ilede</strong></td><td class="crd-td">ZMB: -16,18, 28,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k (1520AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Individually assessed settlements in the Bemba, Lozi-Barotseland and Kazembe sub-region (1500AD to 1885AD).</figcaption>
</figure>

## Portuguese Zambezi Prazos, Sofala and Gaza

Table \ref{tab:sub-mozambique} compiles 16 lower Zambezi, Sofala, Zimbabwe plateau and Gaza sites led by Vila de Mandlakazi (14,5k), Massangano-Zambezi (11,24k), Sofala (10k), Quelimane (9,2k) and Inhambane (7,5k) [@Pugliesi1977ResenhaLivro; @Newitt1995Mozambique].

<figure class="crd-table-figure" id="tab:sub-mozambique">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Location</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Vila de Mandlakazi</strong></td><td class="crd-td">MOZ: -24,71, 33,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,7k</td><td class="crd-td">13,4k</td><td class="crd-td">14,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Massangano-Zambezi</strong></td><td class="crd-td">MOZ: -16,65, 33,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">10,5k</td><td class="crd-td">11,2k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Sofala</strong></td><td class="crd-td">MOZ: -20,15, 34,72</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">1,5k</td><td class="crd-td">980</td><td class="crd-td">-</td><td class="crd-td">10k (1505AD)</td></tr>
<tr><td class="crd-td"><strong>Quelimane</strong></td><td class="crd-td">MOZ: -17,83, 36,92</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">5,7k</td><td class="crd-td">6,4k</td><td class="crd-td">8k</td><td class="crd-td">9,2k (1840AD)</td></tr>
<tr><td class="crd-td"><strong>Inhambane</strong></td><td class="crd-td">MOZ: -23,86, 35,38</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">5,4k</td><td class="crd-td">6,8k</td><td class="crd-td">5,7k</td><td class="crd-td">7,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Ziwa</strong></td><td class="crd-td">ZWE: -18,18, 32,73</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,9k (1750AD)</td></tr>
<tr><td class="crd-td"><strong>Lobamba</strong></td><td class="crd-td">SWZ: -26,45, 31,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">4,8k (1875AD)</td></tr>
<tr><td class="crd-td"><strong>Sena</strong></td><td class="crd-td">MOZ: -17,45, 35,03</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">3,6k</td><td class="crd-td">2k</td><td class="crd-td">3k</td><td class="crd-td">4k (1820AD)</td></tr>
<tr><td class="crd-td"><strong>Maputo</strong></td><td class="crd-td">MOZ: -25,83, 32,48</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">708</td><td class="crd-td">1,3k</td><td class="crd-td">2,9k</td><td class="crd-td">3,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Cidade de Manica</strong></td><td class="crd-td">MOZ: -18,94, 32,88</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">2,4k</td><td class="crd-td">1,8k</td><td class="crd-td">2,2k</td><td class="crd-td">2,9k (1780AD)</td></tr>
<tr><td class="crd-td"><strong>Great Zimbabwe</strong></td><td class="crd-td">ZWE: -20,27, 30,93</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1500AD)</td></tr>
<tr><td class="crd-td"><strong>Dambarare</strong></td><td class="crd-td">ZWE: -17,45, 30,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1685AD)</td></tr>
<tr><td class="crd-td"><strong>Masapa</strong></td><td class="crd-td">ZWE: -16,65, 31,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1630AD)</td></tr>
<tr><td class="crd-td"><strong>Thulamela</strong></td><td class="crd-td">ZAF: -22,43, 31,2</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Manyikeni</strong></td><td class="crd-td">MOZ: -22,19, 34,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k (1550AD)</td></tr>
<tr><td class="crd-td"><strong>Tsindi</strong></td><td class="crd-td">ZWE: -18,1, 31,71</td><td class="crd-td">890</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">890 (1500AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Individually assessed settlements in the Portuguese Zambezi Prazos, Sofala and Gaza sub-region (1500AD to 1885AD).</figcaption>
</figure>

# Limitations

Three constraints govern this gazetteer. First, 13 of the 97 entries carry single-date observations, so interpolated benchmark columns outside their observed year show a hyphen. Second, recovery favours coastal stone towns, Portuguese *feiras* and nineteenth-century caravan depots over dispersed rural villages [@HortonMiddleton2000Swahili; @Alders2023OpenAccess]. Third, summed gazetteer figures track nucleated settlements rather than full regional populations presented in the companion literature review.

# Conclusion

Together, the 97 settlements trace the shift from sixteenth-century Swahili ports and Great Lakes earthwork complexes to nineteenth-century Omani plantation towns, caravan entrepôts and Zambezi *prazo* strongholds across 13 countries between 1500AD and 1885AD.

# Appendix

## Sub-Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} sums site counts and combined interpolated settlement populations across all nine sub-regions from 1500AD to 1880AD.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion (Sites)</th><th class="crd-th">1500AD</th><th class="crd-th">1700AD</th><th class="crd-th">1770AD</th><th class="crd-th">1800AD</th><th class="crd-th">1850AD</th><th class="crd-th">1880AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Omani-Zanzibar Sultanate and Swahili Coast (29)</strong></td><td class="crd-td">1,8k</td><td class="crd-td">61,3k</td><td class="crd-td">72,8k</td><td class="crd-td">87,6k</td><td class="crd-td">164,2k</td><td class="crd-td">132,6k</td></tr>
<tr><td class="crd-td"><strong>Maasai Steppe, Kenya Highlands and Rift (12)</strong></td><td class="crd-td">0</td><td class="crd-td">21,2k</td><td class="crd-td">25,3k</td><td class="crd-td">25k</td><td class="crd-td">15,6k</td><td class="crd-td">14,1k</td></tr>
<tr><td class="crd-td"><strong>Buganda, Bunyoro-Kitara and Ankole (7)</strong></td><td class="crd-td">2,1k</td><td class="crd-td">11,2k</td><td class="crd-td">19,1k</td><td class="crd-td">31k</td><td class="crd-td">41,5k</td><td class="crd-td">56,8k</td></tr>
<tr><td class="crd-td"><strong>Kingdoms of Rwanda and Burundi (6)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">11,7k</td><td class="crd-td">16,6k</td><td class="crd-td">21,9k</td><td class="crd-td">21,3k</td></tr>
<tr><td class="crd-td"><strong>Nyamwezi, Mirambo and Caravan Corridor (4)</strong></td><td class="crd-td">0</td><td class="crd-td">4,7k</td><td class="crd-td">1,4k</td><td class="crd-td">0</td><td class="crd-td">9,6k</td><td class="crd-td">34,1k</td></tr>
<tr><td class="crd-td"><strong>Hehe, Rufiji and Southern Tanganyika (8)</strong></td><td class="crd-td">0</td><td class="crd-td">2,8k</td><td class="crd-td">5k</td><td class="crd-td">8k</td><td class="crd-td">10,1k</td><td class="crd-td">17,9k</td></tr>
<tr><td class="crd-td"><strong>Maravi Confederacy, Yao and N. Mozambique (10)</strong></td><td class="crd-td">0</td><td class="crd-td">19,6k</td><td class="crd-td">25,8k</td><td class="crd-td">30,3k</td><td class="crd-td">28,2k</td><td class="crd-td">40,8k</td></tr>
<tr><td class="crd-td"><strong>Bemba, Lozi-Barotseland and Kazembe (5)</strong></td><td class="crd-td">0</td><td class="crd-td">0</td><td class="crd-td">9,4k</td><td class="crd-td">12,9k</td><td class="crd-td">12,9k</td><td class="crd-td">19,9k</td></tr>
<tr><td class="crd-td"><strong>Portuguese Zambezi Prazos, Sofala and Gaza (16)</strong></td><td class="crd-td">3,7k</td><td class="crd-td">16,1k</td><td class="crd-td">19,3k</td><td class="crd-td">23k</td><td class="crd-td">30,8k</td><td class="crd-td">45,6k</td></tr>
<tr><td class="crd-td"><strong>All Subregions (97)</strong></td><td class="crd-td">7,6k</td><td class="crd-td">136,9k</td><td class="crd-td">189,8k</td><td class="crd-td">234,3k</td><td class="crd-td">334,8k</td><td class="crd-td">383,2k</td></tr>
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
