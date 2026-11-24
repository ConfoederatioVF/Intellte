---
title: "Colonial East Africa (1880s-1963)"
subtitle: "Settlement Gazetteer: 181 Individually Assessed Sites (1880AD-1960AD)"
date: "23 November 2026"
authors_line: "Aust Kätzchen"
emails:
  - austkaeztchen@confoederatio.org

bibliography: colonial_east_africa_literature_review.bib
csl: ../../_shared/template/crd-mla-numeric.csl
link-citations: true

hero_figure: "figures/fig_01_map.png"
hero_caption: "Spatial distribution of 181 individually assessed settlements across ten countries spanning eight colonial East African sub-regions from 1880AD to 1963AD."
hero_label: "fig:hero-settlements-colonial-east-africa"

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

This gazetteer compiles coordinates, spatial scopes and multi-period population series for 181 individually assessed towns, railway depots, *bomas* and coastal ports across ten modern jurisdictions in Colonial East Africa between 1880AD and 1960AD. Screened from 186 candidate colonial records (5 duplicate aliases merged), the ledger spans eight colonial sub-regions across Uganda, Kenya, Tanganyika, Zanzibar and Ruanda-Urundi together with contiguous borderland posts. Active interpolated entries rise from 3 early pre-partition hubs in 1880AD to 41 in 1900AD, 50 in 1910AD, 111 in 1930AD and 159 in 1940AD before narrowing to 30 late-colonial municipal and metropolitan series in 1960AD, led by Nairobi (315k), Mombasa (161,3k agglomeration), Dar es Salaam (159,5k agglomeration), Kampala (158k) and Zanzibar (60,8k).



# Background

Between 1880AD and 1963AD, East Africa's urban network shifted away from nineteenth-century dhow ports and royal courts toward railway junctions, highland settler capitals and colonial district *bomas* [@Gilbert1970CoastalEast; @Johnston1902TheUganda; @Issa2023FromStinkibar]. Early enumerations in Uganda Blue Books, Colonial Office reports and German East African annual surveys captured major ports and administrative stations, while the 1948AD synchronised East African census and Belgian Ruanda-Urundi reports extended uniform headcounts across secondary market towns [@EastAfrica1948Census; @Martin1961EastAfrica; @Office1938ReportHis]. Compiling these dispersed municipal and agglomeration records into a single gazetteer preserves direct traceability between urban trajectories and colonial provincial totals [@Kuczynski1949DemographicSurvey2].

# Methodology

## Candidate Screening and Sub-Regional Partition

Candidate towns were screened from colonial census tables, Africapolis urban delimitations, East African Institute of Social Research monographs and coastal archaeological inventories [@EastAfrica1948Census; @NMK2021KenyaSites; @Office1933AnnualReport]. Of 186 candidate entries inside and immediately adjacent to the 1.746.275 km² study perimeter bounded over geoBoundaries outlines [@Runfola2020GeoBoundaries], 5 duplicate Wave-3 alias records were merged, retaining 181 individually assessed settlements across 635 observations (174 strictly interior matches and 7 contiguous cross-border stations assigned to their nearest East African sub-region).

## Spatial Scope and Benchmark Interpolation

To preserve municipal continuity without double-counting peri-urban hinterlands, 175 city-proper series are catalogued alongside 6 metropolitan agglomerations (Nairobi, Mombasa, Dar es Salaam, Kampala, Bujumbura and Kigali) [@Salum2026ReclaimingDarajani]. Tables 1 to 8 report linearly interpolated populations at six chronological checkpoints (1900AD, 1910AD, 1930AD, 1940AD, 1950AD and 1960AD) alongside each entry's observed peak and peak year, marking periods before first enumeration or outside the colonial span with a hyphen (-).

# Testing and Validation

Across all 181 settlements, upper-half Zipf rank-size regression (n=90) yields $q = 1,18$ ($R^2 = 0,98$) and full-sample regression yields $q = 1,18$ ($R^2 = 0,99$), aligning closely with the 174 spatially interior peaks plotted in Figure \ref{fig:settlements-rank} ($q = 1,06$, $R^2 = 0,99$). Cross-checking against official 1948AD, 1959AD and 1962AD census tables confirms consistent ordering across colonial capitals, port towns and provincial headquarters [@EastAfrica1948Census; @Martin1961EastAfrica].

<figure class="crd-figure-block" id="fig:settlements-rank">
<img class="crd-figure-img" src="/artefacts/project_nicethi/1.0-colonial-east-africa-settlements/fig_03_rank_size.png" alt="fig:settlements-rank" loading="lazy" />
<figcaption class="crd-caption"><span class="crd-caption-label">Figure 2.</span> Zipf rank-size curve across 174 spatially interior settlements (q = 1,06, R² = 0,99) and mean sub-regional density in 1963AD.</figcaption>
</figure>

# Results

## Uganda Protectorate

Table \ref{tab:sub-uganda} records 34 individually assessed settlements across Uganda Protectorate and adjacent northern Congo and southern Sudan border stations, led by Kampala (158k city-proper; 134,8k agglomeration), pre-colonial Kibuga (34k in 1885AD), Jinja (33,6k), Mbale (13,6k in 1960AD) and Entebbe (7,9k in 1948AD) [@Johnston1902TheUganda; @UgandaBlueBook1923; @Amone2018ContestedCitizenship].

<figure class="crd-table-figure" id="tab:sub-uganda">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Scope</th><th class="crd-th">Location</th><th class="crd-th">1900AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1940AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Kampala</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: 0,33, 32,57</td><td class="crd-td">2,6k</td><td class="crd-td">3k</td><td class="crd-td">5k</td><td class="crd-td">15,6k</td><td class="crd-td">90k</td><td class="crd-td">158k</td><td class="crd-td">158k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Kampala (Agglomeration)</strong></td><td class="crd-td">Metro</td><td class="crd-td">UGA: 0,33, 32,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">32k</td><td class="crd-td">134,8k</td><td class="crd-td">134,8k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Kibuga</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: 0,35, 32,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">34k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Jinja</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: 0,55, 33,16</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k</td><td class="crd-td">6,5k</td><td class="crd-td">10,7k</td><td class="crd-td">33,6k</td><td class="crd-td">33,6k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Mbale</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: 1,01, 34,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">4,4k</td><td class="crd-td">6,7k</td><td class="crd-td">14,3k</td><td class="crd-td">14,3k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Bunia</strong></td><td class="crd-td">City</td><td class="crd-td">COD: 1,6, 30,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k</td><td class="crd-td">5,1k</td><td class="crd-td">9,3k</td><td class="crd-td">13,3k</td><td class="crd-td">13,3k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Butembo</strong></td><td class="crd-td">City</td><td class="crd-td">COD: 0,14, 29,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k</td><td class="crd-td">8k</td><td class="crd-td">13k</td><td class="crd-td">13k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Kabale</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: -1,26, 29,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,3k</td><td class="crd-td">4,2k</td><td class="crd-td">10,7k</td><td class="crd-td">10,7k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Rutshuru</strong></td><td class="crd-td">City</td><td class="crd-td">COD: -1,19, 29,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">5,2k</td><td class="crd-td">8,5k</td><td class="crd-td">-</td><td class="crd-td">10,4k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Hoima</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: 1,48, 31,34</td><td class="crd-td">3,8k</td><td class="crd-td">3k</td><td class="crd-td">2,4k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">9,6k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Mahagi</strong></td><td class="crd-td">City</td><td class="crd-td">COD: 2,31, 30,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">4k</td><td class="crd-td">6,7k</td><td class="crd-td">-</td><td class="crd-td">7,9k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Entebbe</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: 0,06, 32,48</td><td class="crd-td">-</td><td class="crd-td">2,8k</td><td class="crd-td">5,7k</td><td class="crd-td">7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Beni</strong></td><td class="crd-td">City</td><td class="crd-td">COD: 0,5, 29,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">4,4k</td><td class="crd-td">6,4k</td><td class="crd-td">-</td><td class="crd-td">7,8k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Kasese</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: 0,21, 30,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">5,4k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Mbarara</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: -0,58, 30,68</td><td class="crd-td">2,8k</td><td class="crd-td">2,5k</td><td class="crd-td">2,9k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Fort Portal</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: 0,49, 30,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Masindi</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: 1,68, 31,72</td><td class="crd-td">2,8k</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Soroti</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: 1,66, 33,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Tororo</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: 0,69, 34,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Mukono</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: 0,35, 32,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Arua</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: 3,06, 30,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Masaka</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: -0,35, 31,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Gulu</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: 2,77, 32,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Mityana</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: 0,38, 32,02</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Iganga</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: 0,54, 33,5</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Lira</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: 2,22, 32,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kumi</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: 1,48, 33,93</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kamuli</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: 0,92, 33,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Mubende</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: 0,55, 31,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kitgum</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: 3,29, 32,88</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Yei</strong></td><td class="crd-td">City</td><td class="crd-td">SSD: 4,09, 30,68</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">1,7k (1955AD)</td></tr>
<tr><td class="crd-td"><strong>Moyo</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: 3,66, 31,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kibiro</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: 1,68, 31,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1880AD)</td></tr>
<tr><td class="crd-td"><strong>Moroto</strong></td><td class="crd-td">City</td><td class="crd-td">UGA: 2,53, 34,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k (1948AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 1.</span> Individually assessed settlements in Uganda Protectorate and contiguous northern borderlands (1900AD to 1960AD).</figcaption>
</figure>

## Kenya Colony: Highlands, Rift and Nyanza

Table \ref{tab:sub-kenya-highlands} compiles 32 centres across Kenya's Highlands, Rift Valley and Lake Victoria Nyanza basin, anchored by Nairobi (315k city-proper; 295,2k agglomeration), Nakuru (34,2k), Kisumu (21,1k), Thika (14k), Eldoret (8,2k in 1948AD) and Nanyuki (10,4k) [@Office1933AnnualReport; @EastAfrica1948Census].

<figure class="crd-table-figure" id="tab:sub-kenya-highlands">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Scope</th><th class="crd-th">Location</th><th class="crd-th">1900AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1940AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Nairobi</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -1,2, 36,79</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">52k</td><td class="crd-td">65k</td><td class="crd-td">118k</td><td class="crd-td">315k</td><td class="crd-td">315k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Nairobi (Agglomeration)</strong></td><td class="crd-td">Metro</td><td class="crd-td">KEN: -1,2, 36,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">138,4k</td><td class="crd-td">295,2k</td><td class="crd-td">295,2k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Nakuru</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -0,33, 36,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,9k</td><td class="crd-td">12,3k</td><td class="crd-td">19,7k</td><td class="crd-td">34,2k</td><td class="crd-td">34,2k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Kisumu</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -0,04, 34,71</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">6,1k</td><td class="crd-td">8,7k</td><td class="crd-td">12,2k</td><td class="crd-td">21,1k</td><td class="crd-td">21,1k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Thika</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -1,06, 37,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">3,5k</td><td class="crd-td">5,7k</td><td class="crd-td">11,8k</td><td class="crd-td">11,8k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Eldoret</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: 0,52, 35,27</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,3k</td><td class="crd-td">6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kitale</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: 1,02, 35,01</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kakamega</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: 0,28, 34,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k (1935AD)</td></tr>
<tr><td class="crd-td"><strong>Mumias</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: 0,33, 34,49</td><td class="crd-td">5,4k</td><td class="crd-td">4k</td><td class="crd-td">3k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k (1894AD)</td></tr>
<tr><td class="crd-td"><strong>Limuru</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -1,11, 36,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Nanyuky</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -0,1, 37,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kiambu</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -1,17, 36,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Magadi</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -1,9, 36,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,7k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Karatina</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -0,48, 37,13</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kericho</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -0,37, 35,28</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Gilgil</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -0,48, 36,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Homa Bay</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -0,53, 34,46</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Naivasha</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -0,68, 36,43</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Nyeri</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -0,42, 36,95</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,7k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Nyahururu</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: 0,04, 36,36</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kisii</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -0,68, 34,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Meru</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: 0,05, 37,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Murang'a</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -0,72, 37,15</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Machakos</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -1,52, 37,27</td><td class="crd-td">1,2k</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Bungoma</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: 0,56, 34,56</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Embu</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -0,53, 37,45</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kabarnet</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: 0,49, 35,74</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Narok</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -1,08, 35,86</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Makutano</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: 1,26, 35,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kajiado</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -1,84, 36,79</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Lodwar</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: 3,1, 35,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kapsabet</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: 0,2, 35,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k (1948AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 2.</span> Individually assessed settlements in Kenya Colony Highlands, Rift and Nyanza (1900AD to 1960AD).</figcaption>
</figure>

## Kenya Coast Protectorate and Northern Frontier

Table \ref{tab:sub-kenya-coast} lists 23 coastal Swahili towns and Northern Frontier District stations alongside southern Ethiopian border posts, led by Mombasa (161,3k agglomeration; 84,7k city-proper in 1948AD), Pate (31,2k in 1902AD), Lamu (5,9k in 1948AD), Malindi (4,3k) and Garissa (2,1k) [@Gilbert1970CoastalEast; @NMK2021KenyaSites].

<figure class="crd-table-figure" id="tab:sub-kenya-coast">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Scope</th><th class="crd-th">Location</th><th class="crd-th">1900AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1940AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mombasa (Agglomeration)</strong></td><td class="crd-td">Metro</td><td class="crd-td">KEN: -3,99, 39,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">94,3k</td><td class="crd-td">161,3k</td><td class="crd-td">161,3k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Mombasa</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -3,99, 39,71</td><td class="crd-td">25,2k</td><td class="crd-td">26,8k</td><td class="crd-td">42,9k</td><td class="crd-td">65,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">84,7k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Pate</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -2,14, 41,02</td><td class="crd-td">27,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">31,2k (1902AD)</td></tr>
<tr><td class="crd-td"><strong>Lamu</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -2,27, 40,9</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,9k</td><td class="crd-td">5,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">7,4k (1911AD)</td></tr>
<tr><td class="crd-td"><strong>Malindi</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -3,2, 40,1</td><td class="crd-td">4,6k</td><td class="crd-td">3,2k</td><td class="crd-td">2,8k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k (1897AD)</td></tr>
<tr><td class="crd-td"><strong>Rabai</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -3,93, 39,57</td><td class="crd-td">3,9k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,4k (1888AD)</td></tr>
<tr><td class="crd-td"><strong>Taveta</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -3,39, 37,69</td><td class="crd-td">2,9k</td><td class="crd-td">2,2k</td><td class="crd-td">2,4k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4k (1883AD)</td></tr>
<tr><td class="crd-td"><strong>Takaungu</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -3,68, 39,85</td><td class="crd-td">3,4k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Voi</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -3,41, 38,57</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Isiolo</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: 0,37, 37,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Vanga</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -4,66, 39,23</td><td class="crd-td">2,8k</td><td class="crd-td">2,3k</td><td class="crd-td">2,1k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Siyu</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -2,09, 41,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1895AD)</td></tr>
<tr><td class="crd-td"><strong>Wajir</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: 1,75, 40,06</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Faza</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -2,06, 41,11</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Moyale</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: 3,53, 39,06</td><td class="crd-td">986</td><td class="crd-td">1,1k</td><td class="crd-td">1,6k</td><td class="crd-td">2k</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">2,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Marsabit</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: 2,35, 37,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Garissa</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -0,45, 39,66</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Dolo</strong></td><td class="crd-td">City</td><td class="crd-td">ETH: 4,18, 42,06</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">2k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Manda</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -2,23, 40,97</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1946AD)</td></tr>
<tr><td class="crd-td"><strong>Kilifi</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -3,63, 39,85</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kitui</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: -1,29, 38,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Mega</strong></td><td class="crd-td">City</td><td class="crd-td">ETH: 4,05, 38,32</td><td class="crd-td">1,1k</td><td class="crd-td">1,3k</td><td class="crd-td">1,5k</td><td class="crd-td">1,7k</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">1,9k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Mandera</strong></td><td class="crd-td">City</td><td class="crd-td">KEN: 3,94, 41,84</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1948AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 3.</span> Individually assessed settlements in Kenya Coast Protectorate, Northern Frontier and southern Ethiopian border stations (1900AD to 1960AD).</figcaption>
</figure>

## Tanganyika: Lake, Northern and Tanga Provinces

Table \ref{tab:sub-tza-north} presents 15 settlements across northern Tanganyika, spanning the Lake Victoria ports of Mwanza (23,3k) and Musoma (7,5k), Kilimanjaro-Meru centres at Moshi (14,3k) and Arusha (14k), and the Geita goldfield (4,9k) [@Tanganyika1930AgricultureReport; @Tanganyika1940AgricultureReport].

<figure class="crd-table-figure" id="tab:sub-tza-north">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Scope</th><th class="crd-th">Location</th><th class="crd-th">1900AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1940AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mwanza</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -2,55, 32,95</td><td class="crd-td">2,4k</td><td class="crd-td">4k</td><td class="crd-td">6,6k</td><td class="crd-td">9,2k</td><td class="crd-td">12,7k</td><td class="crd-td">23,3k</td><td class="crd-td">23,3k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Moshi</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -3,32, 37,37</td><td class="crd-td">4,6k</td><td class="crd-td">5,5k</td><td class="crd-td">5k</td><td class="crd-td">6,6k</td><td class="crd-td">9,5k</td><td class="crd-td">16,6k</td><td class="crd-td">16,6k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Arusha</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -3,38, 36,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k</td><td class="crd-td">4,3k</td><td class="crd-td">6,8k</td><td class="crd-td">14k</td><td class="crd-td">14k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Geita</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -2,9, 32,23</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">4,8k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Bukoba</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -1,32, 31,81</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,6k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Shinyanga</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -3,67, 33,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Musoma</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -1,52, 33,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Biharamulo Mjini</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -2,64, 31,31</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Bweranyange</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -1,7, 30,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1890AD)</td></tr>
<tr><td class="crd-td"><strong>Mbulu</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -3,85, 35,53</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kahama</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -3,83, 32,6</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Tarime</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -1,36, 34,38</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Bunda</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -2,02, 33,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Same</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -4,07, 37,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Babati</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -4,22, 35,75</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k (1948AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 4.</span> Individually assessed settlements in Tanganyika Lake, Northern and Tanga provinces (1900AD to 1960AD).</figcaption>
</figure>

## Tanganyika: Eastern, Central and Western

Table \ref{tab:sub-tza-central} documents 34 towns along Tanganyika's Central Railway and northern coast, led by Dar es Salaam (159,5k agglomeration; 129k city-proper), Tanga 1 (43,5k), Tanga (20,6k in 1948AD), Tabora (25k in 1913AD), Dodoma (15,8k), Morogoro (14,8k), Ujiji (13,2k) and Kigoma (15,3k) [@Office1938ReportHis; @Ruiz2012AculturizacionDiferenciacion].

<figure class="crd-table-figure" id="tab:sub-tza-central">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Scope</th><th class="crd-th">Location</th><th class="crd-th">1900AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1940AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Dar es Salaam (Agglomeration)</strong></td><td class="crd-td">Metro</td><td class="crd-td">TZA: -6,81, 39,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">78,6k</td><td class="crd-td">159,5k</td><td class="crd-td">159,5k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Dar es Salaam</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -6,81, 39,18</td><td class="crd-td">20k</td><td class="crd-td">17k</td><td class="crd-td">25k</td><td class="crd-td">30k</td><td class="crd-td">69k</td><td class="crd-td">129k</td><td class="crd-td">129k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Tanga 1</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -5,1, 39,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">23,4k</td><td class="crd-td">43,5k</td><td class="crd-td">43,5k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Tabora</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -5,03, 32,81</td><td class="crd-td">17,8k</td><td class="crd-td">23,3k</td><td class="crd-td">12,5k</td><td class="crd-td">12,2k</td><td class="crd-td">13,3k</td><td class="crd-td">16,8k</td><td class="crd-td">25k (1913AD)</td></tr>
<tr><td class="crd-td"><strong>Tanga</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -5,07, 39,1</td><td class="crd-td">6,2k</td><td class="crd-td">10,3k</td><td class="crd-td">15,5k</td><td class="crd-td">18,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Ujiji</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -4,92, 29,68</td><td class="crd-td">17,8k</td><td class="crd-td">19,5k</td><td class="crd-td">10,2k</td><td class="crd-td">9,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">20k (1913AD)</td></tr>
<tr><td class="crd-td"><strong>Bagamoyo</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -6,45, 38,9</td><td class="crd-td">11,2k</td><td class="crd-td">6,6k</td><td class="crd-td">5k</td><td class="crd-td">5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">18,5k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Kigoma</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -4,86, 29,64</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">7k</td><td class="crd-td">10,2k</td><td class="crd-td">17,5k</td><td class="crd-td">17,5k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Morogoro</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -6,78, 37,66</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">4,7k</td><td class="crd-td">6,6k</td><td class="crd-td">9,6k</td><td class="crd-td">17k</td><td class="crd-td">17k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Urambo</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -5,09, 32,07</td><td class="crd-td">5,1k</td><td class="crd-td">4,4k</td><td class="crd-td">3k</td><td class="crd-td">3,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16,2k (1884AD)</td></tr>
<tr><td class="crd-td"><strong>Dodoma</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -6,13, 35,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,5k</td><td class="crd-td">7,2k</td><td class="crd-td">10,1k</td><td class="crd-td">15,8k</td><td class="crd-td">15,8k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Kalenga</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -7,8, 35,61</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">12,4k (1891AD)</td></tr>
<tr><td class="crd-td"><strong>Iringa</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -7,77, 35,68</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">3,4k</td><td class="crd-td">4,6k</td><td class="crd-td">6,8k</td><td class="crd-td">12,1k</td><td class="crd-td">12,1k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Pangani Magharibi</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -5,42, 38,98</td><td class="crd-td">6k</td><td class="crd-td">4,2k</td><td class="crd-td">3k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,2k (1888AD)</td></tr>
<tr><td class="crd-td"><strong>Saadani</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -6,05, 38,77</td><td class="crd-td">1,5k</td><td class="crd-td">1,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Muheza</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -5,18, 38,8</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,6k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Mpwapwa</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -6,36, 36,49</td><td class="crd-td">3,6k</td><td class="crd-td">3,2k</td><td class="crd-td">2,5k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Korogwe</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -5,15, 38,44</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k</td><td class="crd-td">2,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Mpanda</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -6,35, 31,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,2k</td><td class="crd-td">-</td><td class="crd-td">3,2k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Kondoa</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -4,9, 35,78</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Magomeni</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -6,84, 36,98</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Ifakara</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -8,11, 36,69</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Utete</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -7,99, 38,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Mbala</strong></td><td class="crd-td">City</td><td class="crd-td">ZMB: -8,86, 31,35</td><td class="crd-td">-</td><td class="crd-td">892</td><td class="crd-td">1,5k</td><td class="crd-td">1,9k</td><td class="crd-td">2,6k</td><td class="crd-td">-</td><td class="crd-td">2,7k (1951AD)</td></tr>
<tr><td class="crd-td"><strong>Handeni</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -5,42, 38,03</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,5k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Karema</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -6,82, 30,44</td><td class="crd-td">2k</td><td class="crd-td">2,3k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1913AD)</td></tr>
<tr><td class="crd-td"><strong>Kasulu</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -4,58, 30,1</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Sumbawanga</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -7,97, 31,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Singida</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -4,81, 34,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,3k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Vigoi</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -8,68, 36,71</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Kibondo</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -3,59, 30,72</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Lushoto</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -4,81, 38,29</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">1,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Vuga</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -4,87, 38,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Nzega</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -4,21, 33,18</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1948AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 5.</span> Individually assessed settlements in Tanganyika Eastern, Central and Western provinces (1900AD to 1960AD).</figcaption>
</figure>

## Tanganyika: Southern and Southern Highlands

Table \ref{tab:sub-tza-south} compiles 15 towns across southern Tanganyika and northern Nyasaland, including the post-war port of Mtwara (14,4k), Kilwa Kivinje (13,5k in 1885AD), Lindi (11,5k), Mbeya (8,2k), Nachingwea (7k) and the Lupa goldfield centre at Chunya (6,4k in 1938AD) [@Mwandete2025ColonialScientific; @Office1938ReportHis].

<figure class="crd-table-figure" id="tab:sub-tza-south">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Scope</th><th class="crd-th">Location</th><th class="crd-th">1900AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1940AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Mtwara</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -10,3, 40,17</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,1k</td><td class="crd-td">16,6k</td><td class="crd-td">16,6k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Kilwa Kivinje</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -8,74, 39,41</td><td class="crd-td">9k</td><td class="crd-td">5,5k</td><td class="crd-td">3,2k</td><td class="crd-td">3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,8k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Lindi</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -9,99, 39,7</td><td class="crd-td">4,7k</td><td class="crd-td">4,2k</td><td class="crd-td">4,2k</td><td class="crd-td">6,5k</td><td class="crd-td">9k</td><td class="crd-td">11,1k</td><td class="crd-td">11,1k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Chunya</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -8,53, 33,42</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,4k (1938AD)</td></tr>
<tr><td class="crd-td"><strong>Mbeya</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -8,96, 33,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,6k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">5,6k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Songea</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -10,67, 35,64</td><td class="crd-td">4,2k</td><td class="crd-td">3k</td><td class="crd-td">2,9k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Nachingwea</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -10,36, 38,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k</td><td class="crd-td">-</td><td class="crd-td">5,1k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Mikindani</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -10,28, 40,12</td><td class="crd-td">3,5k</td><td class="crd-td">3k</td><td class="crd-td">2,7k</td><td class="crd-td">3,8k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">4,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Masasi</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -10,71, 38,83</td><td class="crd-td">2,3k</td><td class="crd-td">2,6k</td><td class="crd-td">3,1k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,9k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Karonga</strong></td><td class="crd-td">City</td><td class="crd-td">MWI: -9,98, 33,92</td><td class="crd-td">1,4k</td><td class="crd-td">1,6k</td><td class="crd-td">2,2k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,9k (1921AD)</td></tr>
<tr><td class="crd-td"><strong>Tukuyu</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -9,25, 33,65</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Njombe</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -9,35, 34,77</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Newala</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -10,93, 39,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,1k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Tunduru</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -11,04, 37,33</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Liwale</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -9,77, 37,93</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,2k</td><td class="crd-td">1,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k (1948AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 6.</span> Individually assessed settlements in Tanganyika Southern and Southern Highlands provinces (1900AD to 1960AD).</figcaption>
</figure>

## Sultanate and British Protectorate of Zanzibar

Table \ref{tab:sub-zanzibar} records the 4 urban centres of Unguja and Pemba islands: Zanzibar Stone Town and Ng'ambo (60,8k in 1960AD), Chake Chake (6,2k in 1885AD; 3k in 1948AD), Wete (3,8k) and Mkoani (1,9k) [@Issa2023FromStinkibar; @Salum2026ReclaimingDarajani].

<figure class="crd-table-figure" id="tab:sub-zanzibar">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Scope</th><th class="crd-th">Location</th><th class="crd-th">1900AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1940AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Zanzibar</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -6,11, 39,22</td><td class="crd-td">44,4k</td><td class="crd-td">35,3k</td><td class="crd-td">44,3k</td><td class="crd-td">45,3k</td><td class="crd-td">47,6k</td><td class="crd-td">60,8k</td><td class="crd-td">60,8k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Chake Chake</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -5,23, 39,78</td><td class="crd-td">4,4k</td><td class="crd-td">3,2k</td><td class="crd-td">4,1k</td><td class="crd-td">3,5k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">6,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Wete</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -5,06, 39,73</td><td class="crd-td">3,3k</td><td class="crd-td">3k</td><td class="crd-td">3,4k</td><td class="crd-td">3,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Mkoani</strong></td><td class="crd-td">City</td><td class="crd-td">TZA: -5,36, 39,65</td><td class="crd-td">-</td><td class="crd-td">1,1k</td><td class="crd-td">1,5k</td><td class="crd-td">1,6k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,7k (1948AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 7.</span> Individually assessed urban centres of the Sultanate and British Protectorate of Zanzibar (1900AD to 1960AD).</figcaption>
</figure>

## German East Africa and Belgian Ruanda-Urundi

Table \ref{tab:sub-ruanda} lists 24 centres across Rwanda, Burundi and the Lake Kivu-Tanganyika littoral, led by Bukavu (57,3k), Bujumbura (49,2k agglomeration), Goma (12k), Uvira (9k), Kigali (8,9k agglomeration; 6,9k city-proper) and the pre-colonial royal court at Busasama-Nyanza (8,4k in 1885AD) [@Ozkose2022TheHumanity; @EastAfrica1948Census].

<figure class="crd-table-figure" id="tab:sub-ruanda">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Settlement</th><th class="crd-th">Scope</th><th class="crd-th">Location</th><th class="crd-th">1900AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1940AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th><th class="crd-th">Peak</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Bukavu</strong></td><td class="crd-td">City</td><td class="crd-td">COD: -2,56, 28,87</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5k</td><td class="crd-td">10,5k</td><td class="crd-td">22,8k</td><td class="crd-td">57,3k</td><td class="crd-td">57,3k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Bujumbura (Agglomeration)</strong></td><td class="crd-td">Metro</td><td class="crd-td">BDI: -3,53, 29,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">19k</td><td class="crd-td">49,2k</td><td class="crd-td">49,2k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Bujumbura</strong></td><td class="crd-td">City</td><td class="crd-td">BDI: -3,53, 29,35</td><td class="crd-td">-</td><td class="crd-td">2,7k</td><td class="crd-td">6,6k</td><td class="crd-td">11,4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">16,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Goma</strong></td><td class="crd-td">City</td><td class="crd-td">COD: -1,65, 29,21</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">3,8k</td><td class="crd-td">7,6k</td><td class="crd-td">12k</td><td class="crd-td">12k (1960AD)</td></tr>
<tr><td class="crd-td"><strong>Kigali (Agglomeration)</strong></td><td class="crd-td">Metro</td><td class="crd-td">RWA: -1,79, 30,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">11,8k</td><td class="crd-td">-</td><td class="crd-td">11,8k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Uvira</strong></td><td class="crd-td">City</td><td class="crd-td">COD: -3,38, 29,14</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">5k</td><td class="crd-td">7,3k</td><td class="crd-td">-</td><td class="crd-td">9k (1953AD)</td></tr>
<tr><td class="crd-td"><strong>Busasama</strong></td><td class="crd-td">City</td><td class="crd-td">RWA: -2,35, 29,76</td><td class="crd-td">7,6k</td><td class="crd-td">7,1k</td><td class="crd-td">6,6k</td><td class="crd-td">6,9k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">8,4k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Gitega</strong></td><td class="crd-td">City</td><td class="crd-td">BDI: -3,4, 29,97</td><td class="crd-td">4,6k</td><td class="crd-td">4,9k</td><td class="crd-td">5,6k</td><td class="crd-td">6,3k</td><td class="crd-td">7,6k</td><td class="crd-td">-</td><td class="crd-td">7,6k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Butare</strong></td><td class="crd-td">City</td><td class="crd-td">RWA: -2,58, 29,73</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">3,4k</td><td class="crd-td">5,6k</td><td class="crd-td">-</td><td class="crd-td">6,4k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Muramvya</strong></td><td class="crd-td">City</td><td class="crd-td">BDI: -3,27, 29,62</td><td class="crd-td">5,4k</td><td class="crd-td">4,9k</td><td class="crd-td">4,3k</td><td class="crd-td">4,5k</td><td class="crd-td">5,2k</td><td class="crd-td">-</td><td class="crd-td">6,2k (1885AD)</td></tr>
<tr><td class="crd-td"><strong>Kigali</strong></td><td class="crd-td">City</td><td class="crd-td">RWA: -1,79, 30,04</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2,4k</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">5,8k (1948AD)</td></tr>
<tr><td class="crd-td"><strong>Rubavu</strong></td><td class="crd-td">City</td><td class="crd-td">RWA: -1,69, 29,3</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,8k</td><td class="crd-td">4,5k</td><td class="crd-td">-</td><td class="crd-td">5,1k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Ngozi</strong></td><td class="crd-td">City</td><td class="crd-td">BDI: -2,91, 29,83</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,9k</td><td class="crd-td">2,9k</td><td class="crd-td">4,4k</td><td class="crd-td">-</td><td class="crd-td">5k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Rumonge</strong></td><td class="crd-td">City</td><td class="crd-td">BDI: -3,97, 29,45</td><td class="crd-td">2,5k</td><td class="crd-td">2,5k</td><td class="crd-td">3k</td><td class="crd-td">3,6k</td><td class="crd-td">4,6k</td><td class="crd-td">-</td><td class="crd-td">4,6k (1950AD)</td></tr>
<tr><td class="crd-td"><strong>Ruhengeri</strong></td><td class="crd-td">City</td><td class="crd-td">RWA: -1,5, 29,63</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,6k</td><td class="crd-td">4k</td><td class="crd-td">-</td><td class="crd-td">4,6k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Rusizi</strong></td><td class="crd-td">City</td><td class="crd-td">RWA: -2,48, 28,91</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,4k</td><td class="crd-td">3,7k</td><td class="crd-td">-</td><td class="crd-td">4,2k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Gitarama</strong></td><td class="crd-td">City</td><td class="crd-td">RWA: -2,07, 29,76</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">3,3k</td><td class="crd-td">-</td><td class="crd-td">3,7k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Muyinga</strong></td><td class="crd-td">City</td><td class="crd-td">BDI: -2,9, 30,26</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">2k</td><td class="crd-td">3,1k</td><td class="crd-td">-</td><td class="crd-td">3,4k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Kibungo</strong></td><td class="crd-td">City</td><td class="crd-td">RWA: -2,16, 30,54</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,8k</td><td class="crd-td">2,8k</td><td class="crd-td">-</td><td class="crd-td">3,1k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Byumba</strong></td><td class="crd-td">City</td><td class="crd-td">RWA: -1,58, 30,07</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,6k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,9k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Bururi</strong></td><td class="crd-td">City</td><td class="crd-td">BDI: -3,95, 29,62</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,5k</td><td class="crd-td">2,5k</td><td class="crd-td">-</td><td class="crd-td">2,8k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Ruyigi</strong></td><td class="crd-td">City</td><td class="crd-td">BDI: -3,48, 30,25</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Kibuye</strong></td><td class="crd-td">City</td><td class="crd-td">RWA: -2,06, 29,35</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,4k</td><td class="crd-td">2,2k</td><td class="crd-td">-</td><td class="crd-td">2,5k (1952AD)</td></tr>
<tr><td class="crd-td"><strong>Rutana</strong></td><td class="crd-td">City</td><td class="crd-td">BDI: -3,91, 29,99</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">-</td><td class="crd-td">1,3k</td><td class="crd-td">2,1k</td><td class="crd-td">-</td><td class="crd-td">2,3k (1952AD)</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 8.</span> Individually assessed settlements in Ruanda-Urundi and contiguous Lake Kivu borderlands (1900AD to 1960AD).</figcaption>
</figure>

# Limitations

Three caveats govern this settlement ledger. First, 6 of the 181 settlements hold single-date observations (notably pre-colonial courts such as Kibuga and Bweranyange), so interpolated checkpoint columns display a hyphen outside their recorded span. Second, active entries decline from 159 in 1940AD to 30 in 1960AD because colonial district *bomas* enumerated in 1948AD transition into post-colonial national census ledgers beginning after 1960AD [@Martin1961EastAfrica]. Third, separate city-proper and metropolitan agglomeration rows are provided for the six largest capitals and ports to preserve compatibility with both municipal censuses and mid-century Africapolis built-up footprints.

# Conclusion

Taken together, these 181 individually assessed settlements document the transformation of East African urbanism from nineteenth-century clove, caravan and lacustrine courts to twentieth-century railway capitals, mining hubs and colonial provincial towns across ten jurisdictions between 1880AD and 1960AD.

# Appendix

## Sub-Regional Gazetteer Summary

Table \ref{tab:gazetteer-summary} sums the individually assessed site counts and combined interpolated urban populations across all eight colonial sub-regions from 1880AD to 1960AD.

<figure class="crd-table-figure" id="tab:gazetteer-summary">
<div class="crd-table-scroll">
<table class="crd-wysiwyg-table" v-pre>
<thead><tr><th class="crd-th">Subregion (Sites)</th><th class="crd-th">1880AD</th><th class="crd-th">1900AD</th><th class="crd-th">1910AD</th><th class="crd-th">1930AD</th><th class="crd-th">1940AD</th><th class="crd-th">1950AD</th><th class="crd-th">1960AD</th></tr></thead>
<tbody>
<tr><td class="crd-td"><strong>Uganda Protectorate (34)</strong></td><td class="crd-td">1,4k</td><td class="crd-td">12k</td><td class="crd-td">13,3k</td><td class="crd-td">62,2k</td><td class="crd-td">107,9k</td><td class="crd-td">188k</td><td class="crd-td">377,8k</td></tr>
<tr><td class="crd-td"><strong>Kenya Colony: Highlands, Rift and Nyanza (32)</strong></td><td class="crd-td">0</td><td class="crd-td">6,6k</td><td class="crd-td">13,8k</td><td class="crd-td">100,9k</td><td class="crd-td">156,3k</td><td class="crd-td">294k</td><td class="crd-td">677,3k</td></tr>
<tr><td class="crd-td"><strong>Kenya Coast Protectorate and Northern Frontier (23)</strong></td><td class="crd-td">0</td><td class="crd-td">73,7k</td><td class="crd-td">43,9k</td><td class="crd-td">69,9k</td><td class="crd-td">103,2k</td><td class="crd-td">100,5k</td><td class="crd-td">161,3k</td></tr>
<tr><td class="crd-td"><strong>Tanganyika: Lake, Northern and Tanga Provinces (15)</strong></td><td class="crd-td">0</td><td class="crd-td">7k</td><td class="crd-td">11,7k</td><td class="crd-td">21,1k</td><td class="crd-td">41,9k</td><td class="crd-td">36,2k</td><td class="crd-td">54k</td></tr>
<tr><td class="crd-td"><strong>Tanganyika: Eastern, Central and Western (34)</strong></td><td class="crd-td">0</td><td class="crd-td">91,2k</td><td class="crd-td">98,2k</td><td class="crd-td">115,4k</td><td class="crd-td">144k</td><td class="crd-td">226,8k</td><td class="crd-td">411,2k</td></tr>
<tr><td class="crd-td"><strong>Tanganyika: Southern and Southern Highlands (15)</strong></td><td class="crd-td">1,4k</td><td class="crd-td">25k</td><td class="crd-td">21,1k</td><td class="crd-td">21,6k</td><td class="crd-td">40,2k</td><td class="crd-td">22,4k</td><td class="crd-td">27,7k</td></tr>
<tr><td class="crd-td"><strong>Sultanate and British Protectorate of Zanzibar (4)</strong></td><td class="crd-td">0</td><td class="crd-td">52,1k</td><td class="crd-td">42,6k</td><td class="crd-td">53,3k</td><td class="crd-td">54k</td><td class="crd-td">47,6k</td><td class="crd-td">60,8k</td></tr>
<tr><td class="crd-td"><strong>German East Africa / Belgian Ruanda-Urundi (24)</strong></td><td class="crd-td">3k</td><td class="crd-td">20,1k</td><td class="crd-td">22,1k</td><td class="crd-td">46,4k</td><td class="crd-td">83,1k</td><td class="crd-td">128,9k</td><td class="crd-td">118,5k</td></tr>
<tr><td class="crd-td"><strong>All Subregions (181)</strong></td><td class="crd-td">5,8k</td><td class="crd-td">287,7k</td><td class="crd-td">266,6k</td><td class="crd-td">490,8k</td><td class="crd-td">730,7k</td><td class="crd-td">1,04M</td><td class="crd-td">1,89M</td></tr>
</tbody>
</table>
</div>
<figcaption class="crd-caption"><span class="crd-caption-label">Table 9.</span> Individually assessed site counts and combined interpolated urban populations across eight colonial sub-regions from 1880AD to 1960AD.</figcaption>
</figure>

# Sources

::: {#refs}
:::

# Footnotes

Linear interpolation is bounded strictly between each settlement's earliest and latest observed dates; pre-foundation and post-transition benchmarks are left blank with a hyphen (-). For Mombasa, Tanga and Dar es Salaam, city-proper municipal returns and late-colonial Africapolis urban-cluster series are catalogued separately.
